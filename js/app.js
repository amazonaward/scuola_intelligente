/* Zainetto – applicazione principale (SPA con routing via #hash) */
(function () {
  const C = window.CURRICULUM;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const SUBJ_ICON = { ita: '📖', mat: '🔢', sci: '🔬', sto: '🏛️', geo: '🌍', ing: '🇬🇧', tec: '💻', lat: '🏺' };
  const SUBJ_COLOR = { ita: '#e85d75', mat: '#4c7cf3', sci: '#2fb67c', sto: '#d08a2e', geo: '#18a5b8', ing: '#8a5cf6', tec: '#64748b', lat: '#b45309' };
  const YEAR_COLOR = { p1: '#ff7a59', p2: '#f59e0b', p3: '#84cc16', p4: '#14b8a6', p5: '#3b82f6', m1: '#8b5cf6', m2: '#ec4899', m3: '#ef4444' };
  const FULL = new Set(C.full);

  /* ---------- indice argomenti ---------- */
  const INDEX = {}; const ORDER = [];
  for (const y of C.years) for (const s of C.subjects) for (const e of (C.program[y][s] || [])) { INDEX[e[0]] = { entry: e, year: y, subj: s }; ORDER.push(e[0]); }
  const title = (id) => (INDEX[id] ? i18n.topicTitle(INDEX[id].entry) : id);
  const subjectsOf = (y) => C.subjects.filter((s) => (C.program[y][s] || []).length);

  /* ---------- caricamento lezioni ---------- */
  const TOPICS = {};
  window.TOPIC = (lang, data) => { TOPICS[lang + ':' + data.id] = data; };
  function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  async function loadTopic(id, lang) {
    const k = lang + ':' + id;
    if (TOPICS[k]) return { data: TOPICS[k], lang };
    try { await loadScript(`data/topics/${lang}/${id}.js`); if (TOPICS[k]) return { data: TOPICS[k], lang }; } catch (e) { /* manca la traduzione */ }
    if (lang !== 'it') { const r = await loadTopic(id, 'it'); return r && { ...r, fallback: true }; }
    return null;
  }

  /* ---------- lingua ---------- */
  function setLang(l) {
    i18n.lang = l; document.documentElement.lang = l; Store.setLang(l);
    const sel = $('#lang'); if (sel) sel.value = l;
    renderChrome(); route();
  }

  /* ---------- intestazione ---------- */
  function renderChrome() {
    const p = Store.current();
    $('#tagline').textContent = t('app.tagline');
    $('#nav').innerHTML = `<a href="#/">${t('nav.home')}</a><a href="#/programma">${t('nav.program')}</a><a href="#/libreria">${t('nav.library')}</a><a href="#/coding">${t('nav.coding')}</a><a href="#/luoghi">${t('nav.places')}</a><a href="#/storico">${t('nav.history')}</a><a href="#/profili">${t('nav.profiles')}</a>`;
    $('#who').innerHTML = p ? `<a href="#/profili" class="who" title="${t('profile.switch')}"><span class="av" style="background:${p.color}">${p.avatar}</span><span>${esc(p.name)}</span></a>` : '';
    $('#lang').innerHTML = LANGS.map((l) => `<option value="${l.id}" ${l.id === i18n.lang ? 'selected' : ''}>${l.flag} ${l.name}</option>`).join('');
    $('#search').placeholder = t('search.placeholder');
    $('#footer').innerHTML = `${t('footer.text')}<br><small>${t('ref.note')}</small>`;
  }

  /* ---------- routing ---------- */
  const main = () => $('#main');
  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [page, a, b] = h.split('/').map(decodeURIComponent);
    window.scrollTo(0, 0);
    document.querySelectorAll('#nav a').forEach((x) => x.classList.toggle('active', x.getAttribute('href') === '#/' + (page || '')));
    if (!Store.current() && page !== 'profili') return pageProfiles(true);
    if (window.ZPages && ZPages[page]) { const m = main(); m.innerHTML = ''; m.style.removeProperty('--c'); return ZPages[page](m, a, b); }
    switch (page) {
      case '': case undefined: return pageHome();
      case 'programma': return pageProgram(a);
      case 'anno': return pageYear(a, b);
      case 't': return pageTopic(a);
      case 'storico': return pageHistory();
      case 'profili': return pageProfiles(!Store.current());
      case 'cerca': return pageSearch(a || '');
      default: return pageHome();
    }
  }

  /* ---------- badge di stato ---------- */
  const STATUS_ICON = { todo: '⚪', seen: '👀', done: '✅', passed: '🏆' };
  function topicCard(id, showYear) {
    const { entry, year, subj } = INDEX[id];
    const st = Store.status(id); const full = FULL.has(id); const gen = C.gen[id];
    const a = el('a', 'tcard' + (full ? ' full' : ''), `<span class="ts" title="${t('status.' + st)}">${STATUS_ICON[st]}</span>
      <span class="tt"><b>${esc(i18n.topicTitle(entry))}</b><small>${esc(i18n.topicDesc(entry))}</small>
      <span class="tags">${showYear ? `<em style="background:${YEAR_COLOR[year]}">${t('year.' + year)}</em>` : ''}${full ? `<em class="tg-full">⭐ ${t('topic.full')}</em>` : ''}${gen ? `<em class="tg-gen">🔁 ${t('topic.practice')}</em>` : ''}</span></span>`);
    a.href = '#/t/' + id; a.style.setProperty('--c', SUBJ_COLOR[subj]);
    return a;
  }
  function progressOf(ids) {
    const n = ids.length; let done = 0, seen = 0;
    ids.forEach((id) => { const s = Store.status(id); if (s === 'done' || s === 'passed') done++; else if (s === 'seen') seen++; });
    return { n, done, seen, pct: n ? Math.round((done / n) * 100) : 0 };
  }
  const bar = (pct, color) => `<div class="bar"><i style="width:${pct}%;background:${color || 'var(--accent)'}"></i></div>`;

  /* ---------- HOME ---------- */
  function pageHome() {
    const p = Store.current(); const y = p.year || 'p1';
    const m = main(); m.innerHTML = '';
    const head = el('section', 'hero', `<div><h1>${t('dash.hello', { name: esc(p.name) })} <span class="wave">${p.avatar}</span></h1><p>${t('dash.chooseYear')}:</p></div>`);
    const chips = el('div', 'year-chips');
    C.years.forEach((yy) => { const c = el('a', 'ychip' + (yy === y ? ' active' : ''), t('year.' + yy)); c.href = '#/anno/' + yy; c.style.setProperty('--c', YEAR_COLOR[yy]); chips.appendChild(c); });
    head.firstChild.appendChild(chips);
    m.appendChild(head);
    // riprendi
    const last = p.log.find((e) => INDEX[e.topic]);
    if (last) {
      const s = el('section', 'card continue', `<h3>▶️ ${t('dash.continue')}</h3>`); s.appendChild(topicCard(last.topic, true)); m.appendChild(s);
    }
    // materie della classe
    const sec = el('section', 'card', `<h3>${t('dash.progress', { year: t('year.' + y) })}</h3>`);
    const g = el('div', 'subj-grid');
    subjectsOf(y).forEach((s) => {
      const ids = C.program[y][s].map((e) => e[0]); const pr = progressOf(ids);
      const a = el('a', 'subj', `<span class="si">${SUBJ_ICON[s]}</span><b>${t('subj.' + s)}</b><small>${pr.done}/${pr.n}</small>${bar(pr.pct, SUBJ_COLOR[s])}`);
      a.href = `#/anno/${y}/${s}`; a.style.setProperty('--c', SUBJ_COLOR[s]); g.appendChild(a);
    });
    sec.appendChild(g); m.appendChild(sec);
    // lezioni complete della classe e vicine
    const fullHere = C.full.filter((id) => INDEX[id].year === y);
    const fullOther = C.full.filter((id) => INDEX[id].year !== y);
    const fs = el('section', 'card', `<h3>⭐ ${t('dash.suggest')}</h3>`); const fl = el('div', 'tlist');
    (fullHere.length ? fullHere : []).forEach((id) => fl.appendChild(topicCard(id))); fs.appendChild(fl);
    if (fullOther.length) { fs.appendChild(el('h4', '', t('dash.otherYears'))); const fo = el('div', 'tlist'); fullOther.forEach((id) => fo.appendChild(topicCard(id, true))); fs.appendChild(fo); }
    m.appendChild(fs);
    // attività recenti
    const rec = el('section', 'card', `<h3>🕘 ${t('dash.recent')}</h3>`);
    rec.appendChild(logList(p.log.slice(0, 6)) || el('p', 'muted', t('dash.none')));
    m.appendChild(rec);
  }

  function logList(log) {
    if (!log.length) return null;
    const ul = el('ul', 'log');
    log.forEach((e) => {
      if (!INDEX[e.topic] && !(Z.titles[e.topic])) return;
      const d = new Date(e.at);
      const sc = e.score != null ? ` <span class="score ${e.passed === false ? 'bad' : e.score >= 70 ? 'good' : ''}">${e.score}%</span>` : '';
      ul.appendChild(el('li', '', `<time>${d.toLocaleDateString(i18n.lang)} ${d.toLocaleTimeString(i18n.lang, { hour: '2-digit', minute: '2-digit' })}</time> <span class="ev ev-${e.type}">${t('ev.' + e.type)}</span> <a href="${INDEX[e.topic] ? '#/t/' + e.topic : Z.titles[e.topic].href}">${esc(INDEX[e.topic] ? title(e.topic) : Z.titles[e.topic].title())}</a>${sc}`));
    });
    return ul;
  }

  /* ---------- PROGRAMMA ---------- */
  function pageProgram() {
    const m = main(); m.innerHTML = `<h1>📚 ${t('nav.program')}</h1><p class="muted">${t('ref.note')}</p>`;
    ['p', 'm'].forEach((school) => {
      m.appendChild(el('h2', '', t('school.' + school)));
      const g = el('div', 'year-grid');
      C.years.filter((y) => y[0] === school).forEach((y) => {
        const ids = C.subjects.flatMap((s) => (C.program[y][s] || []).map((e) => e[0])); const pr = progressOf(ids);
        const nf = ids.filter((id) => FULL.has(id)).length;
        const a = el('a', 'ycard', `<b>${t('year.' + y)}</b><small>${t('topic.count', { n: ids.length })} · ⭐ ${nf}</small>${bar(pr.pct, YEAR_COLOR[y])}<span class="subj-icons">${subjectsOf(y).map((s) => SUBJ_ICON[s]).join(' ')}</span>`);
        a.href = '#/anno/' + y; a.style.setProperty('--c', YEAR_COLOR[y]); g.appendChild(a);
      });
      m.appendChild(g);
    });
  }

  function pageYear(y, subj) {
    if (!C.program[y]) return pageProgram();
    const m = main(); m.innerHTML = '';
    m.appendChild(el('div', 'crumbs', `<a href="#/programma">${t('nav.program')}</a> › <b>${t('year.' + y)}</b>`));
    m.appendChild(el('h1', '', `${t('year.' + y)}`));
    const tabs = el('div', 'tabs');
    const subs = subjectsOf(y);
    const cur = subj && subs.includes(subj) ? subj : null;
    const all = el('a', 'tab' + (cur ? '' : ' active'), t('topic.filterAll')); all.href = '#/anno/' + y; tabs.appendChild(all);
    subs.forEach((s) => { const a = el('a', 'tab' + (s === cur ? ' active' : ''), `${SUBJ_ICON[s]} ${t('subj.' + s)}`); a.href = `#/anno/${y}/${s}`; a.style.setProperty('--c', SUBJ_COLOR[s]); tabs.appendChild(a); });
    m.appendChild(tabs);
    (cur ? [cur] : subs).forEach((s) => {
      const ids = C.program[y][s].map((e) => e[0]); const pr = progressOf(ids);
      const sec = el('section', 'card subj-sec', `<h2 style="color:${SUBJ_COLOR[s]}">${SUBJ_ICON[s]} ${t('subj.' + s)} <small>${pr.done}/${pr.n}</small></h2>${bar(pr.pct, SUBJ_COLOR[s])}`);
      const l = el('div', 'tlist'); ids.forEach((id) => l.appendChild(topicCard(id))); sec.appendChild(l); m.appendChild(sec);
    });
  }

  /* ---------- RICERCA ---------- */
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim(); }
  function pageSearch(q) {
    const m = main(); m.innerHTML = `<h1>🔎 ${t('search.results', { q: esc(q) })}</h1>`;
    const nq = norm(q); const l = el('div', 'tlist');
    const res = ORDER.filter((id) => { const e = INDEX[id].entry; return norm(i18n.topicTitle(e) + ' ' + i18n.topicDesc(e) + ' ' + e[1] + ' ' + t('subj.' + INDEX[id].subj)).includes(nq); });
    res.forEach((id) => l.appendChild(topicCard(id, true)));
    m.appendChild(res.length ? l : el('p', 'muted', t('search.none')));
  }

  /* ---------- PAGINA ARGOMENTO ---------- */
  async function pageTopic(id) {
    const info = INDEX[id]; if (!info) return pageHome();
    const m = main(); m.innerHTML = `<p class="muted">${t('topic.loading')}</p>`;
    Store.visit(id);
    const { entry, year, subj } = info;
    const res = FULL.has(id) ? await loadTopic(id, i18n.lang) : null;
    if (location.hash !== '#/t/' + id) return;
    m.innerHTML = '';
    m.style.setProperty('--c', SUBJ_COLOR[subj]);
    m.appendChild(el('div', 'crumbs', `<a href="#/programma">${t('nav.program')}</a> › <a href="#/anno/${year}">${t('year.' + year)}</a> › <a href="#/anno/${year}/${subj}">${SUBJ_ICON[subj]} ${t('subj.' + subj)}</a>`));
    const data = res && res.data;
    const head = el('header', 'topic-head', `<h1>${esc(data ? data.title : i18n.topicTitle(entry))}</h1><p class="lead">${data ? data.intro : esc(i18n.topicDesc(entry))}</p>`);
    const meta = el('div', 'meta');
    const st = Store.status(id); const tp = Store.topic(id);
    meta.innerHTML = `<span class="pill">${STATUS_ICON[st]} ${t('status.' + st)}</span>` + (data && data.minutes ? `<span class="pill">⏱ ${t('topic.minutes', { n: data.minutes })}</span>` : '') + (tp.best != null ? `<span class="pill">${t('quiz.best', { p: tp.best })}</span>` : '');
    head.appendChild(meta); m.appendChild(head);
    if (res && res.fallback) m.appendChild(el('div', 'callout c-remember', '🌐 ' + t('topic.fallback', { lang: LANGS.find((l) => l.id === i18n.lang).name })));

    if (data) {
      // indice
      const toc = el('nav', 'toc', `<b>${t('topic.contents')}:</b> `);
      m.appendChild(toc);
      data.sections.forEach((s, i) => {
        const sec = renderSection(s, id, i);
        sec.id = 'sec-' + i; m.appendChild(sec);
        const label = s.title || (s.type === 'quiz' ? '✏️ Quiz' : s.type === 'curiosity' ? '💡' : s.type === 'example' ? '🧩' : null);
        if (label) { const a = el('a', 'chip', esc(label)); a.href = 'javascript:void 0'; a.onclick = () => sec.scrollIntoView({ behavior: 'smooth' }); toc.appendChild(a); }
      });
      if (data.glossary && data.glossary.length) {
        const g = el('section', 'card glossary', `<h2>📒 ${t('topic.glossary')}</h2><dl>${data.glossary.map((x) => `<dt>${x.t}</dt><dd>${x.d}</dd>`).join('')}</dl>`);
        m.appendChild(g);
      }
      if (data.verifica) m.appendChild(renderVerifica(id, data.verifica));
    } else {
      m.appendChild(el('div', 'callout c-remember', C.gen[id] ? t('topic.soonText') : t('topic.soonNoGen')));
    }
    if (C.gen[id]) m.appendChild(renderPractice(id, C.gen[id]));
    // segna come studiato + navigazione
    const foot = el('div', 'topic-foot');
    const done = el('button', 'btn ' + (Store.topic(id).done ? 'btn-ok' : ''), Store.topic(id).done ? t('topic.done') : '✔ ' + t('topic.markDone'));
    done.onclick = () => { const v = !Store.topic(id).done; Store.markDone(id, v); done.className = 'btn ' + (v ? 'btn-ok' : ''); done.textContent = v ? t('topic.done') : '✔ ' + t('topic.markDone'); };
    foot.appendChild(done);
    const sameSubj = C.program[year][subj].map((e) => e[0]); const k = sameSubj.indexOf(id);
    const nav = el('div', 'prevnext');
    if (k > 0) nav.appendChild(Object.assign(el('a', 'btn btn-ghost', '← ' + esc(title(sameSubj[k - 1]))), { href: '#/t/' + sameSubj[k - 1] }));
    if (k < sameSubj.length - 1) nav.appendChild(Object.assign(el('a', 'btn btn-ghost', esc(title(sameSubj[k + 1])) + ' →'), { href: '#/t/' + sameSubj[k + 1] }));
    foot.appendChild(nav); m.appendChild(foot);
  }

  function mountVisual(host, s) {
    if (s.svg) { const f = el('div', 'svg-fig', s.svg); host.appendChild(f); }
    if (s.widget) { const w = el('div', 'widget'); host.appendChild(w); Widgets.mount(w, s.widget, s.options); }
    if (s.scene) { const w = el('div', 'scene3d'); host.appendChild(w); Mini3D.mount(w, s.scene, s.options); }
  }

  function renderSection(s, topicId, idx) {
    const box = el('section', 'card sec sec-' + s.type);
    const h = (icon) => (s.title ? `<h2>${icon ? icon + ' ' : ''}${s.title}</h2>` : '');
    switch (s.type) {
      case 'text': box.innerHTML = h() + s.html; break;
      case 'example': box.className += ' c-example'; box.innerHTML = h('🧩') + s.html; break;
      case 'curiosity': box.className += ' c-curiosity'; box.innerHTML = h('💡') + s.html; break;
      case 'remember': box.className += ' c-remember'; box.innerHTML = h('📌') + s.html; break;
      case 'svg': box.innerHTML = h('🖼️') + `<div class="svg-fig">${s.svg}</div>` + (s.caption ? `<p class="caption">${s.caption}</p>` : ''); break;
      case '3d': { box.innerHTML = h('🧊'); const w = el('div', 'scene3d'); box.appendChild(w); lazy(w, () => Mini3D.mount(w, s.scene, s.options)); if (s.caption) box.appendChild(el('p', 'caption', s.caption)); break; }
      case 'widget': { box.innerHTML = h('🎮'); const w = el('div', 'widget'); box.appendChild(w); lazy(w, () => Widgets.mount(w, s.widget, s.options)); if (s.caption) box.appendChild(el('p', 'caption', s.caption)); break; }
      case 'video': box.innerHTML = h('🎬') + `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(s.youtube)}" allowfullscreen loading="lazy"></iframe></div>` + (s.caption ? `<p class="caption">${s.caption}</p>` : ''); break;
      case 'quiz': box.innerHTML = h('✏️') || `<h2>✏️ Quiz</h2>`; box.appendChild(Quiz.render(s.questions, { onDone: (ok, n) => Store.quizResult(topicId, 'q' + idx, ok, n) })); break;
      case 'alternatives': renderAlternatives(box, s); break;
      case 'conceptMap': renderConceptMap(box, s); break;
      case 'decision': renderDecision(box, s); break;
      default: box.innerHTML = h() + (s.html || '');
    }
    return box;
  }
  /* monta i contenuti pesanti solo quando diventano visibili */
  function lazy(node, fn) {
    if (!('IntersectionObserver' in window)) return fn();
    const io = new IntersectionObserver((en) => { if (en.some((e) => e.isIntersecting)) { io.disconnect(); fn(); } }, { rootMargin: '300px' });
    io.observe(node);
  }

  function renderAlternatives(box, s) {
    box.classList.add('alt');
    box.innerHTML = `<h2>🔀 ${s.title || t('alt.title')}</h2><p class="muted">${s.intro || t('alt.hint')}</p>`;
    const tabs = el('div', 'alt-tabs'), body = el('div', 'alt-body');
    box.append(tabs, body);
    const show = (k) => {
      tabs.querySelectorAll('button').forEach((b, i) => b.classList.toggle('active', i === k));
      const tb = s.tabs[k]; body.innerHTML = tb.html || ''; mountVisual(body, tb);
    };
    s.tabs.forEach((tb, k) => { const b = el('button', 'alt-tab', tb.label); b.type = 'button'; b.onclick = () => show(k); tabs.appendChild(b); });
    lazy(body, () => show(0));
  }

  function renderConceptMap(box, s) {
    box.classList.add('cmap-sec');
    box.innerHTML = `<h2>🗺️ ${s.title || 'Mappa'}</h2><p class="muted">👆 ${t('map.tap')}</p>`;
    const wrap = el('div', 'cmap'); const detail = el('div', 'cmap-detail');
    box.append(wrap, detail);
    const nodes = s.nodes || [], byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
    const maxY = Math.max(...nodes.map((n) => n.y), 50);
    wrap.style.paddingBottom = Math.max(55, Math.min(110, maxY + 12)) + '%';
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg'); svg.setAttribute('viewBox', '0 0 100 100'); svg.setAttribute('preserveAspectRatio', 'none'); svg.classList.add('cmap-svg');
    wrap.appendChild(svg);
    const H = Math.max(55, Math.min(110, maxY + 12));
    const ny = (y) => ((y + 4) / (H)) * 100;
    const edgeEls = [];
    (s.edges || []).forEach(([a, b, lbl]) => {
      const A = byId[a], B = byId[b]; if (!A || !B) return;
      const line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', A.x); line.setAttribute('y1', ny(A.y)); line.setAttribute('x2', B.x); line.setAttribute('y2', ny(B.y));
      line.setAttribute('vector-effect', 'non-scaling-stroke'); line.classList.add('cm-edge'); svg.appendChild(line);
      let lab = null;
      if (lbl) { lab = el('span', 'cm-elbl', esc(lbl)); lab.style.left = (A.x + B.x) / 2 + '%'; lab.style.top = (ny(A.y) + ny(B.y)) / 2 + '%'; wrap.appendChild(lab); }
      edgeEls.push({ a, b, line, lab });
    });
    nodes.forEach((n) => {
      const d = el('button', 'cm-node', esc(n.label)); d.type = 'button';
      d.style.left = n.x + '%'; d.style.top = ny(n.y) + '%'; if (n.color) d.style.setProperty('--nc', n.color);
      d.onclick = () => {
        wrap.querySelectorAll('.cm-node').forEach((x) => x.classList.remove('active')); d.classList.add('active');
        edgeEls.forEach((e) => { const on = e.a === n.id || e.b === n.id; e.line.classList.toggle('on', on); if (e.lab) e.lab.classList.toggle('on', on); });
        const links = edgeEls.filter((e) => e.a === n.id || e.b === n.id).map((e) => byId[e.a === n.id ? e.b : e.a]);
        detail.innerHTML = `<h3 style="color:${n.color || 'var(--c)'}">${esc(n.label)}</h3><div class="cm-what"><h4>📘 ${t('map.what')}</h4>${n.html || ''}</div>` +
          (n.why ? `<div class="cm-why"><h4>🤔 ${t('map.why')}</h4>${n.why}</div>` : '') +
          (links.length ? `<p>${links.map((x) => `<button class="chip" data-n="${x.id}">↔ ${esc(x.label)}</button>`).join(' ')}</p>` : '');
        detail.querySelectorAll('[data-n]').forEach((b) => (b.onclick = () => wrap.querySelector(`[data-id="${b.dataset.n}"]`).click()));
        detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      };
      d.dataset.id = n.id; wrap.appendChild(d);
    });
  }

  function renderDecision(box, s) {
    box.classList.add('decision');
    box.innerHTML = `<h2>🧭 ${s.title || ''}</h2>${s.html || ''}<p class="q"><b>${s.question || t('dec.choose')}</b></p>`;
    const opts = el('div', 'dec-opts'), out = el('div', 'dec-out'); box.append(opts, out);
    const reveal = el('button', 'btn', '📜 ' + t('dec.reveal'));
    s.options.forEach((o, k) => {
      const b = el('button', 'dec-opt', esc(o.label)); b.type = 'button';
      b.onclick = () => { opts.querySelectorAll('.dec-opt').forEach((x) => x.classList.remove('active')); b.classList.add('active'); out.innerHTML = `<div class="callout">${o.outcome || ''}</div>`; out.appendChild(reveal); };
      opts.appendChild(b);
    });
    reveal.onclick = () => {
      opts.querySelectorAll('.dec-opt').forEach((x, k) => x.classList.toggle('real', k === s.answer));
      out.innerHTML = `<div class="callout c-remember"><b>📜 ${t('dec.history')}: ${esc(s.options[s.answer].label)}</b><br>${s.explain}</div>`;
    };
  }

  /* ---------- verifica e allenamento ---------- */
  function renderVerifica(id, v) {
    const box = el('section', 'card verifica', `<h2>🏁 ${t('topic.verifica')}</h2>`);
    const tp = Store.topic(id);
    if (tp.best != null) box.appendChild(el('p', '', `${t('quiz.best', { p: tp.best })} ${tp.passedAt ? '🏆' : ''}`));
    const start = el('button', 'btn btn-big', '🚀 ' + t('topic.start'));
    box.appendChild(start);
    start.onclick = () => {
      const qs = shuffle(v.questions.concat(Generators.batch(v.gen || [])));
      start.remove();
      box.appendChild(Quiz.render(qs, {
        oneByOne: true, pass: v.pass || 0.7,
        onDone: (ok, n) => { Store.verificaResult(id, ok, n, ok / n >= (v.pass || 0.7)); },
        onRetry: () => { box.replaceWith(renderVerifica(id, v)); }
      }));
    };
    return box;
  }
  function renderPractice(id, gens) {
    const box = el('section', 'card practice', `<h2>🔁 ${t('quiz.practiceTitle')}</h2><p class="muted">${t('quiz.practiceText')}</p>`);
    const area = el('div'); box.appendChild(area);
    const make = () => { area.innerHTML = ''; const qs = []; for (let i = 0; i < 6; i++) qs.push(Generators.make(gens[i % gens.length])); area.appendChild(Quiz.render(qs, { onDone: (ok, n) => Store.practiceResult(id, ok, n), onRetry: make, retryLabel: t('quiz.newSet') })); };
    make();
    return box;
  }

  /* ---------- STORICO ---------- */
  function pageHistory() {
    const p = Store.current(); const m = main();
    m.innerHTML = `<h1>📈 ${t('hist.title')} – ${p.avatar} ${esc(p.name)}</h1>`;
    const ts = Object.entries(p.topics).filter(([id]) => INDEX[id]);
    const studied = ts.filter(([, x]) => x.done).length, passed = ts.filter(([, x]) => x.passedAt).length;
    const bests = ts.map(([, x]) => x.best).filter((x) => x != null); const avg = bests.length ? Math.round(bests.reduce((a, b) => a + b, 0) / bests.length) : 0;
    m.appendChild(el('div', 'stats', `<div><b>${studied}</b><span>${t('hist.studied')}</span></div><div><b>${passed}</b><span>${t('hist.passed')}</span></div><div><b>${avg}%</b><span>${t('hist.avg')}</span></div><div><b>${p.days.length}</b><span>${t('hist.streak')}</span></div><div><b>${p.log.length}</b><span>${t('hist.activities')}</span></div>`));
    // medaglie
    const B = [['🌱', studied >= 1], ['📚', studied >= 5], ['🎓', studied >= 15], ['🏆', passed >= 1], ['🥇', bests.some((x) => x === 100)], ['🔥', p.days.length >= 3], ['🌍', new Set(ts.map(([id]) => INDEX[id].subj)).size >= 4]];
    m.appendChild(el('section', 'card', `<h3>${t('hist.badges')}</h3><div class="badges">${B.map(([e, on]) => `<span class="badge ${on ? 'on' : ''}">${e}</span>`).join('')}</div>`));
    // per anno e materia
    const sec = el('section', 'card', `<h3>${t('hist.bySubject')}</h3>`);
    C.years.forEach((y) => {
      const rows = subjectsOf(y).map((s) => { const pr = progressOf(C.program[y][s].map((e) => e[0])); return `<tr><td>${SUBJ_ICON[s]} ${t('subj.' + s)}</td><td style="width:50%">${bar(pr.pct, SUBJ_COLOR[s])}</td><td>${pr.done}/${pr.n}</td><td class="muted">👀 ${pr.seen}</td></tr>`; }).join('');
      sec.appendChild(el('details', y === p.year ? '' : '', `<summary><b>${t('year.' + y)}</b></summary><table class="ptab">${rows}</table>`));
      if (y === p.year) sec.lastChild.open = true;
    });
    m.appendChild(sec);
    const lg = el('section', 'card', `<h3>${t('hist.log')}</h3>`); lg.appendChild(logList(p.log) || el('p', 'muted', t('hist.empty'))); m.appendChild(lg);
  }

  /* ---------- PROFILI ---------- */
  function pageProfiles(first) {
    const m = main(); m.innerHTML = '';
    m.appendChild(el('h1', 'center', '👋 ' + t('profile.who')));
    const g = el('div', 'profiles');
    Store.profiles().forEach((p) => {
      const c = el('div', 'pcard' + (Store.current() && Store.current().id === p.id ? ' active' : ''), `<button class="pick"><span class="av big" style="background:${p.color}">${p.avatar}</span><b>${esc(p.name)}</b><small>${t('year.' + p.year)}</small></button><div class="pact"><button class="btn btn-small btn-ghost e">✏️ ${t('profile.edit')}</button><button class="btn btn-small btn-ghost d">🗑️</button></div>`);
      c.querySelector('.pick').onclick = () => { Store.select(p.id); if (p.lang) i18n.lang = p.lang; renderChrome(); location.hash = '#/'; route(); };
      c.querySelector('.e').onclick = () => profileForm(p);
      c.querySelector('.d').onclick = () => { if (confirm(t('profile.deleteConfirm', { name: p.name }))) { Store.remove(p.id); renderChrome(); pageProfiles(); } };
      g.appendChild(c);
    });
    const add = el('button', 'pcard add', `<span class="av big">➕</span><b>${t('profile.new')}</b>`); add.onclick = () => profileForm(null); g.appendChild(add);
    m.appendChild(g);
    const io = el('div', 'center io', `<p class="muted">${t('profile.note')}</p>`);
    const ex = el('button', 'btn btn-ghost', '💾 ' + t('profile.export')); ex.onclick = () => { const b = new Blob([Store.exportJSON()], { type: 'application/json' }); const a = el('a'); a.href = URL.createObjectURL(b); a.download = 'zainetto-backup-' + new Date().toISOString().slice(0, 10) + '.json'; a.click(); };
    const im = el('label', 'btn btn-ghost', `📂 ${t('profile.import')}<input type="file" accept=".json,application/json" hidden>`);
    im.querySelector('input').onchange = async (e) => { const f = e.target.files[0]; if (!f) return; try { const n = Store.importJSON(await f.text()); alert(t('profile.imported', { n })); pageProfiles(); } catch (err) { alert(t('profile.badFile')); } };
    io.append(ex, im); m.appendChild(io);
    if (first && !Store.profiles().length) profileForm(null);
  }
  function profileForm(p) {
    const dlg = el('div', 'modal');
    const sel = { avatar: p ? p.avatar : Store.AVATARS[Math.floor(Math.random() * Store.AVATARS.length)] };
    dlg.innerHTML = `<form class="modal-box"><h2>${p ? t('profile.edit') : t('profile.new')}</h2>
      <label>${t('profile.name')}<input name="name" required maxlength="30" value="${p ? esc(p.name) : ''}" autocomplete="off"></label>
      <label>${t('profile.year')}<select name="year">${C.years.map((y) => `<option value="${y}" ${p && p.year === y ? 'selected' : ''}>${t('year.' + y)}</option>`).join('')}</select></label>
      <label>${t('profile.lang')}<select name="lang">${LANGS.map((l) => `<option value="${l.id}" ${(p ? p.lang : i18n.lang) === l.id ? 'selected' : ''}>${l.flag} ${l.name}</option>`).join('')}</select></label>
      <div>${t('profile.avatar')}</div><div class="avatars">${Store.AVATARS.map((a) => `<button type="button" class="avpick ${a === sel.avatar ? 'active' : ''}">${a}</button>`).join('')}</div>
      <div class="row"><button type="button" class="btn btn-ghost cancel">${t('misc.cancel')}</button><button class="btn">${p ? t('profile.save') : t('profile.create')}</button></div></form>`;
    document.body.appendChild(dlg);
    dlg.querySelectorAll('.avpick').forEach((b) => (b.onclick = () => { dlg.querySelectorAll('.avpick').forEach((x) => x.classList.remove('active')); b.classList.add('active'); sel.avatar = b.textContent; }));
    dlg.querySelector('.cancel').onclick = () => dlg.remove();
    dlg.querySelector('input').focus();
    dlg.querySelector('form').onsubmit = (e) => {
      e.preventDefault(); const f = new FormData(e.target);
      const data = { name: f.get('name').trim(), year: f.get('year'), lang: f.get('lang'), avatar: sel.avatar };
      if (!data.name) return;
      if (p) Store.update(p.id, data); else Store.create(data);
      dlg.remove(); i18n.lang = data.lang; document.documentElement.lang = data.lang; renderChrome();
      if (p) pageProfiles(); else { location.hash = '#/'; route(); }
    };
  }

  /* ---------- avvio ---------- */
  function boot() {
    const saved = Store.getLang();
    i18n.lang = saved || 'it';
    document.documentElement.lang = i18n.lang;
    renderChrome();
    $('#lang').onchange = (e) => setLang(e.target.value);
    $('#searchForm').onsubmit = (e) => { e.preventDefault(); const q = $('#search').value.trim(); if (q) location.hash = '#/cerca/' + encodeURIComponent(q); };
    window.addEventListener('hashchange', route);
    route();
  }
  /* API per le sezioni aggiuntive (libreria, coding, luoghi): registrano pagine in window.ZPages */
  window.Z = { el, esc, shuffle, loadScript, renderSection, lazy, mountVisual, logList, bar, titles: {},
    /* titolo e link da mostrare nello storico per attività che non sono lezioni del programma */
    registerTitle(id, href, titleFn) { this.titles[id] = { href, title: titleFn }; },
    rerender() { route(); } };
  window.ZPages = window.ZPages || {};
  document.addEventListener('DOMContentLoaded', boot);
})();
