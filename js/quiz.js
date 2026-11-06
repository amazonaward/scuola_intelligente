/* Motore dei quiz: domande a scelta multipla, vero/falso, numeriche, a risposta scritta, da ordinare. */
(function () {
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/['’`]/g, "'").replace(/[.,;:!?]+$/g, '').replace(/\s+/g, ' ').trim();
  const parseNum = (s) => { s = String(s).trim().replace(/\s/g, '').replace(/−/g, '-'); if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(s)) s = s.replace(/\./g, ''); s = s.replace(',', '.'); return s === '' ? NaN : Number(s); };

  function typeOf(q) { return q.type || (q.options ? 'mc' : typeof q.answer === 'boolean' ? 'tf' : typeof q.answer === 'number' ? 'num' : 'text'); }

  /* costruisce l'interfaccia di una domanda; restituisce { node, check() → {ok, answerText} } */
  function build(q) {
    const tp = typeOf(q); const node = el('div', 'q-body'); node.appendChild(el('div', 'q-text', q.q));
    let get;
    if (tp === 'mc') {
      const order = shuffle(q.options.map((o, i) => i)); let chosen = null;
      const g = el('div', 'q-opts');
      order.forEach((i) => { const b = el('button', 'q-opt', q.options[i]); b.type = 'button'; b.onclick = () => { g.querySelectorAll('.q-opt').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); chosen = i; }; b.dataset.i = i; g.appendChild(b); });
      node.appendChild(g);
      get = () => ({ given: chosen !== null, ok: chosen === q.answer, answer: q.options[q.answer], mark: () => g.querySelectorAll('.q-opt').forEach((b) => { b.disabled = true; if (+b.dataset.i === q.answer) b.classList.add('right'); else if (b.classList.contains('sel')) b.classList.add('wrong'); }) });
    } else if (tp === 'tf') {
      let chosen = null; const g = el('div', 'q-opts tf');
      [[true, t('quiz.true')], [false, t('quiz.false')]].forEach(([v, lbl]) => { const b = el('button', 'q-opt', (v ? '✔️ ' : '❌ ') + lbl); b.type = 'button'; b.onclick = () => { g.querySelectorAll('.q-opt').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); chosen = v; }; b.dataset.v = v; g.appendChild(b); });
      node.appendChild(g);
      get = () => ({ given: chosen !== null, ok: chosen === q.answer, answer: q.answer ? t('quiz.true') : t('quiz.false'), mark: () => g.querySelectorAll('.q-opt').forEach((b) => { b.disabled = true; if ((b.dataset.v === 'true') === q.answer) b.classList.add('right'); else if (b.classList.contains('sel')) b.classList.add('wrong'); }) });
    } else if (tp === 'num' || tp === 'text') {
      const w = el('div', 'q-input'); const inp = el('input'); inp.type = 'text'; inp.inputMode = tp === 'num' ? 'decimal' : 'text'; inp.placeholder = t('quiz.placeholder'); inp.autocomplete = 'off';
      w.appendChild(inp); if (q.unit) w.appendChild(el('span', 'unit', q.unit)); node.appendChild(w);
      setTimeout(() => node.isConnected && node.closest('.quiz.one') && inp.focus({ preventScroll: true }), 50);
      inp.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); node.dispatchEvent(new CustomEvent('submit-q', { bubbles: true })); } };
      get = () => {
        const v = inp.value;
        let ok;
        if (tp === 'num') { const n = parseNum(v); ok = !isNaN(n) && Math.abs(n - q.answer) <= (q.tol || 1e-9); }
        else ok = q.answer.some((a) => norm(a) === norm(v));
        return { given: v.trim() !== '', ok, answer: tp === 'num' ? i18n.num(q.answer) + (q.unit ? ' ' + q.unit : '') : q.answer[0], mark: () => { inp.disabled = true; inp.classList.add(ok ? 'right' : 'wrong'); } };
      };
    } else if (tp === 'order') {
      let items = shuffle(q.items.map((x, i) => i)); if (items.every((x, i) => x === i) && items.length > 1) items.reverse();
      node.appendChild(el('p', 'muted small', t('quiz.orderHint')));
      const ol = el('ol', 'q-order'); node.appendChild(ol);
      const draw = () => { ol.innerHTML = ''; items.forEach((it, k) => { const li = el('li', '', `<span>${q.items[it]}</span><button type="button" class="up">▲</button><button type="button" class="dn">▼</button>`); li.querySelector('.up').onclick = () => { if (k > 0) { [items[k - 1], items[k]] = [items[k], items[k - 1]]; draw(); } }; li.querySelector('.dn').onclick = () => { if (k < items.length - 1) { [items[k + 1], items[k]] = [items[k], items[k + 1]]; draw(); } }; ol.appendChild(li); }); };
      draw();
      get = () => { const ok = items.every((x, i) => x === i); return { given: true, ok, answer: q.items.join(' → '), mark: () => { ol.querySelectorAll('button').forEach((b) => (b.disabled = true)); ol.classList.add(ok ? 'right' : 'wrong'); } }; };
    }
    return { node, get };
  }

  /* opts: { oneByOne, pass, onDone(ok,n), onRetry, retryLabel } */
  function render(questions, opts = {}) {
    const root = el('div', 'quiz one');
    let i = 0, ok = 0; const n = questions.length;
    const head = el('div', 'q-head'); const body = el('div'); const foot = el('div', 'q-foot');
    root.append(head, body, foot);
    function show() {
      const q = questions[i]; const b = build(q);
      head.innerHTML = `<span>${t('quiz.question', { i: i + 1, n })}</span><span class="q-prog"><i style="width:${(i / n) * 100}%"></i></span><span>✅ ${ok}</span>`;
      body.innerHTML = ''; body.appendChild(b.node); foot.innerHTML = '';
      const chk = el('button', 'btn', t('quiz.check')); foot.appendChild(chk);
      const submit = () => {
        const r = b.get(); if (!r.given) { chk.classList.add('shake'); setTimeout(() => chk.classList.remove('shake'), 400); return; }
        r.mark(); if (r.ok) ok++;
        const fb = el('div', 'q-fb ' + (r.ok ? 'good' : 'bad'), `<b>${r.ok ? t('quiz.correct') : t('quiz.wrong')}</b>${r.ok ? '' : ' ' + t('quiz.answer', { a: r.answer })}${q.explain ? `<div class="q-ex">${q.explain}</div>` : ''}`);
        body.appendChild(fb);
        foot.innerHTML = '';
        const nx = el('button', 'btn', i < n - 1 ? t('quiz.next') + ' →' : t('quiz.finish')); nx.onclick = () => { i++; if (i < n) show(); else finish(); };
        foot.appendChild(nx); nx.focus({ preventScroll: true });
        head.querySelector('span:last-child').textContent = '✅ ' + ok;
      };
      chk.onclick = submit;
      b.node.addEventListener('submit-q', () => { if (foot.contains(chk)) submit(); });
    }
    function finish() {
      const p = Math.round((ok / n) * 100); const pass = opts.pass;
      const passed = pass == null || ok / n >= pass;
      head.innerHTML = '';
      body.innerHTML = `<div class="q-result ${passed ? 'good' : 'bad'}"><div class="big">${p >= 90 ? '🌟' : p >= 70 ? '😀' : p >= 50 ? '🙂' : '💪'} ${p}%</div><p>${t('quiz.score', { ok, n, p })}</p>${pass != null ? `<h3>${passed ? t('quiz.passed') : t('quiz.failed')}</h3>` : ''}</div>`;
      foot.innerHTML = '';
      if (opts.onDone) opts.onDone(ok, n);
      const again = el('button', 'btn', '🔄 ' + (opts.retryLabel || t('quiz.retry')));
      again.onclick = () => { if (opts.onRetry) opts.onRetry(); else { i = 0; ok = 0; questions = shuffle(questions); show(); } };
      foot.appendChild(again);
      if (passed && pass != null && window.confettiBurst) window.confettiBurst();
    }
    show();
    return root;
  }

  window.Quiz = { render };

  /* coriandoli per le verifiche superate */
  window.confettiBurst = function () {
    const c = document.createElement('div'); c.className = 'confetti';
    for (let k = 0; k < 80; k++) { const s = document.createElement('i'); s.style.left = Math.random() * 100 + 'vw'; s.style.background = `hsl(${Math.random() * 360},90%,60%)`; s.style.animationDelay = Math.random() * 0.6 + 's'; s.style.transform = `rotate(${Math.random() * 360}deg)`; c.appendChild(s); }
    document.body.appendChild(c); setTimeout(() => c.remove(), 3500);
  };
})();
