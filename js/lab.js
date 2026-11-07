/* Sezione "Laboratorio di chimica": indipendente dalla classe.
   Riusa le parti interattive della lezione m2-sci-chimica (laboratorio, tavola periodica, atomo, molecole 3D). */
(function () {
  const T = {
    it: { nav: 'Laboratorio', explore: 'Mescola sostanze, guarda le reazioni e pesa i prodotti', title: 'Laboratorio di chimica',
      intro: 'Versa i reagenti nel becher, fai avvenire le reazioni e scopri cosa si forma e quanto pesa. Poi esplora la tavola periodica, l’atomo e le molecole in 3D.',
      go: 'Vai a', lab: 'Laboratorio', table: 'Tavola periodica', atom: 'Atomo', mol: 'Molecole 3D', lessons: 'Lezioni con la chimica', lessonsSub: 'Per capire meglio quello che succede nel laboratorio.', err: 'Non riesco a caricare il laboratorio. Riprova.' },
    en: { nav: 'Lab', explore: 'Mix substances, watch reactions and weigh the products', title: 'Chemistry lab',
      intro: 'Pour reagents into the beaker, make reactions happen and find out what forms and how much it weighs. Then explore the periodic table, the atom and molecules in 3D.',
      go: 'Go to', lab: 'Lab', table: 'Periodic table', atom: 'Atom', mol: '3D molecules', lessons: 'Lessons with chemistry', lessonsSub: 'To better understand what happens in the lab.', err: 'Could not load the lab. Try again.' },
    fr: { nav: 'Labo', explore: 'Mélange des substances, observe les réactions et pèse les produits', title: 'Laboratoire de chimie',
      intro: 'Verse les réactifs dans le bécher, fais réagir et découvre ce qui se forme et combien ça pèse. Puis explore le tableau périodique, l’atome et les molécules en 3D.',
      go: 'Aller à', lab: 'Laboratoire', table: 'Tableau périodique', atom: 'Atome', mol: 'Molécules 3D', lessons: 'Leçons de chimie', lessonsSub: 'Pour mieux comprendre ce qui se passe au labo.', err: 'Impossible de charger le laboratoire. Réessaie.' },
    ru: { nav: 'Лаборатория', explore: 'Смешивай вещества, наблюдай реакции и взвешивай продукты', title: 'Химическая лаборатория',
      intro: 'Налей реактивы в стакан, запусти реакцию и узнай, что получилось и сколько это весит. Затем изучи таблицу Менделеева, атом и молекулы в 3D.',
      go: 'Перейти', lab: 'Лаборатория', table: 'Таблица Менделеева', atom: 'Атом', mol: '3D-молекулы', lessons: 'Уроки с химией', lessonsSub: 'Чтобы лучше понять, что происходит в лаборатории.', err: 'Не удалось загрузить лабораторию. Попробуй ещё раз.' },
    ro: { nav: 'Laborator', explore: 'Amestecă substanțe, privește reacțiile și cântărește produșii', title: 'Laborator de chimie',
      intro: 'Toarnă reactivii în pahar, provoacă reacțiile și descoperă ce se formează și cât cântărește. Apoi explorează tabelul periodic, atomul și moleculele în 3D.',
      go: 'Mergi la', lab: 'Laborator', table: 'Tabel periodic', atom: 'Atom', mol: 'Molecule 3D', lessons: 'Lecții cu chimie', lessonsSub: 'Ca să înțelegi mai bine ce se întâmplă în laborator.', err: 'Nu pot încărca laboratorul. Încearcă din nou.' },
    de: { nav: 'Labor', explore: 'Mische Stoffe, beobachte Reaktionen und wiege die Produkte', title: 'Chemielabor',
      intro: 'Gieß die Stoffe ins Becherglas, lass sie reagieren und finde heraus, was entsteht und wie viel es wiegt. Dann erkunde das Periodensystem, das Atom und die Moleküle in 3D.',
      go: 'Gehe zu', lab: 'Labor', table: 'Periodensystem', atom: 'Atom', mol: '3D-Moleküle', lessons: 'Lektionen mit Chemie', lessonsSub: 'Damit du besser verstehst, was im Labor passiert.', err: 'Das Labor kann nicht geladen werden. Versuch es noch einmal.' }
  };
  for (const l of Object.keys(T)) if (window.I18N && I18N[l]) { I18N[l]['nav.lab'] = T[l].nav; I18N[l]['explore.lab'] = T[l].explore; }
  const lang = () => { try { return (typeof Store !== 'undefined' && Store.getLang && Store.getLang()) || 'it'; } catch (e) { return 'it'; } };
  const s = k => (T[lang()] || T.it)[k] || T.it[k];

  // cattura le lezioni caricate, così il laboratorio può riusarne le sezioni
  const TOP = {};
  const orig = window.TOPIC;
  window.TOPIC = (l, d) => { TOP[l + ':' + d.id] = d; if (orig) orig(l, d); };
  async function get(id, l) {
    const k = l + ':' + id;
    if (!TOP[k]) { try { await Z.loadScript(`data/topics/${l}/${id}.js`); } catch (e) {} }
    if (TOP[k]) return TOP[k];
    return l !== 'it' ? get(id, 'it') : null;
  }

  const SRC = 'm2-sci-chimica';
  const LESSONS = ['p4-sci-materia', 'p3-sto-eta-metalli', 'm2-sci-chimica', 'm2-sto-scienza-ottocento'];
  const PICK = [
    ['lab', '🧪', x => x.widget === 'chemLab'],
    ['table', '🧮', x => x.widget === 'periodicTable'],
    ['atom', '⚛️', x => x.scene === 'atom'],
    ['mol', '🫧', x => x.type === 'alternatives' && (x.tabs || []).some(t => t.scene === 'molecule')]
  ];

  function title(id) {
    for (const y of CURRICULUM.years) for (const sub of CURRICULUM.subjects) for (const e of ((CURRICULUM.program[y] || {})[sub] || [])) if (e[0] === id) return [(window.i18n && i18n.topicTitle) ? i18n.topicTitle(e) : e[1], y];
    return [id, ''];
  }


  /* --- "Scegli l'effetto": combinazioni per ottenere un effetto, con livello di sicurezza --- */
  const FX = {
    it: { nav: 'Scegli l’effetto', title: 'Che effetto vuoi ottenere?', sub: 'Scegli un effetto: ti mostro quali combinazioni lo producono e quanto sono sicure.',
      warn: 'Le reazioni con ⚠️ e ☠️ NON vanno provate a casa. Alcune producono gas che possono uccidere in pochi minuti. Qui le trovi solo per sapere cosa NON fare mai.',
      home: 'Si può fare a casa con un adulto', lab: 'Solo in laboratorio con l’insegnante', danger: 'PERICOLOSO – può essere mortale. Non provarlo mai!',
      mix: 'Cosa si mescola', what: 'Cosa succede', never: 'Cosa NON mescolare', why: 'Perché è pericoloso', note: 'Attenzione', try: 'Provalo nel laboratorio virtuale', rules: 'Regole d’oro della sicurezza' },
    en: { nav: 'Pick an effect', title: 'What effect do you want?', sub: 'Pick an effect: I’ll show you which combinations produce it and how safe they are.',
      warn: 'Reactions marked ⚠️ and ☠️ must NOT be tried at home. Some produce gases that can kill within minutes. They are here only so you know what NEVER to do.',
      home: 'OK at home with an adult', lab: 'Only in the school lab with the teacher', danger: 'DANGEROUS – can be deadly. Never try it!',
      mix: 'What is mixed', what: 'What happens', never: 'What NOT to mix', why: 'Why it is dangerous', note: 'Careful', try: 'Try it in the virtual lab', rules: 'Golden safety rules' },
    fr: { nav: 'Choisis l’effet', title: 'Quel effet veux-tu obtenir ?', sub: 'Choisis un effet : je te montre quelles combinaisons le produisent et à quel point elles sont sûres.',
      warn: 'Les réactions marquées ⚠️ et ☠️ ne doivent PAS être essayées à la maison. Certaines produisent des gaz qui peuvent tuer en quelques minutes. Elles sont ici seulement pour savoir ce qu’il ne faut JAMAIS faire.',
      home: 'Possible à la maison avec un adulte', lab: 'Seulement au labo de l’école avec l’enseignant', danger: 'DANGEREUX – peut être mortel. Ne jamais essayer !',
      mix: 'Ce qu’on mélange', what: 'Ce qui se passe', never: 'Ce qu’il ne faut PAS mélanger', why: 'Pourquoi c’est dangereux', note: 'Attention', try: 'Essaie-le dans le labo virtuel', rules: 'Règles d’or de la sécurité' },
    ru: { nav: 'Выбери эффект', title: 'Какой эффект ты хочешь получить?', sub: 'Выбери эффект — я покажу, какие сочетания его дают и насколько они безопасны.',
      warn: 'Реакции с ⚠️ и ☠️ НЕЛЬЗЯ повторять дома. Некоторые выделяют газы, которые могут убить за несколько минут. Они здесь только для того, чтобы ты знал, чего НИКОГДА нельзя делать.',
      home: 'Можно дома вместе со взрослым', lab: 'Только в школьной лаборатории с учителем', danger: 'ОПАСНО — может быть смертельно. Никогда не пробуй!',
      mix: 'Что смешивают', what: 'Что происходит', never: 'Что НЕЛЬЗЯ смешивать', why: 'Почему это опасно', note: 'Осторожно', try: 'Попробуй в виртуальной лаборатории', rules: 'Золотые правила безопасности' },
    ro: { nav: 'Alege efectul', title: 'Ce efect vrei să obții?', sub: 'Alege un efect: îți arăt ce combinații îl produc și cât de sigure sunt.',
      warn: 'Reacțiile marcate cu ⚠️ și ☠️ NU trebuie încercate acasă. Unele produc gaze care pot ucide în câteva minute. Sunt aici doar ca să știi ce să NU faci niciodată.',
      home: 'Se poate acasă, cu un adult', lab: 'Doar în laboratorul școlii, cu profesorul', danger: 'PERICULOS – poate fi mortal. Nu încerca niciodată!',
      mix: 'Ce se amestecă', what: 'Ce se întâmplă', never: 'Ce NU trebuie amestecat', why: 'De ce e periculos', note: 'Atenție', try: 'Încearcă în laboratorul virtual', rules: 'Regulile de aur ale siguranței' },
    de: { nav: 'Effekt wählen', title: 'Welchen Effekt möchtest du?', sub: 'Wähle einen Effekt: Ich zeige dir, welche Kombinationen ihn erzeugen und wie sicher sie sind.',
      warn: 'Reaktionen mit ⚠️ und ☠️ darf man NICHT zu Hause ausprobieren. Manche erzeugen Gase, die in wenigen Minuten töten können. Sie stehen nur hier, damit du weißt, was du NIEMALS tun darfst.',
      home: 'Zu Hause mit einem Erwachsenen möglich', lab: 'Nur im Schullabor mit der Lehrkraft', danger: 'GEFÄHRLICH – kann tödlich sein. Niemals ausprobieren!',
      mix: 'Was gemischt wird', what: 'Was passiert', never: 'Was man NICHT mischen darf', why: 'Warum es gefährlich ist', note: 'Achtung', try: 'Probier es im virtuellen Labor', rules: 'Goldene Sicherheitsregeln' }
  };
  const fx = (k) => (FX[lang()] || FX.it)[k] || FX.it[k];
  const tx = (o) => (o == null ? '' : typeof o === 'string' ? o : o[lang()] || o.it || o.en || '');
  const LV = { home: ['✅', 'efx-home'], lab: ['⚠️', 'efx-lab'], danger: ['☠️', 'efx-danger'] };

  function effectsSection(labBox) {
    const D = window.CHEM_EFFECTS; if (!D) return null;
    const sec = Z.el('section', 'card efx', `<h2>✨ ${fx('title')}</h2><p class="muted">${fx('sub')}</p>
      <div class="efx-warn" role="alert"><span aria-hidden="true">🚨</span><p>${fx('warn')}</p></div>
      <div class="efx-chips" role="tablist"></div><div class="efx-list" aria-live="polite"></div>
      <details class="efx-rules"><summary>🛡️ ${fx('rules')}</summary><ul>${(D.rules[lang()] || D.rules.it).map((r) => `<li>${Z.esc(r)}</li>`).join('')}</ul></details>`);
    const chips = sec.querySelector('.efx-chips'), list = sec.querySelector('.efx-list');
    function show(e) {
      chips.querySelectorAll('button').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.id === e.id)));
      const order = { home: 0, lab: 1, danger: 2 };
      list.innerHTML = '';
      e.items.slice().sort((a, b) => order[a.safe] - order[b.safe]).forEach((it) => {
        const [ic, cls] = LV[it.safe]; const d = it.safe === 'danger';
        const c = Z.el('article', 'efx-card ' + cls, `
          <div class="efx-badge">${ic} ${fx(it.safe)}</div>
          <h3>${Z.esc(tx(it.name))}</h3>
          <p><b>${d ? fx('never') : fx('mix')}:</b> ${Z.esc(tx(it.mix))}</p>
          <p><b>${d ? fx('why') : fx('what')}:</b> ${Z.esc(tx(it.what))}</p>
          ${it.eq && !d ? `<p class="efx-eq">${Z.esc(it.eq)}</p>` : ''}
          ${it.note ? `<p class="efx-note">⚠️ <b>${fx('note')}:</b> ${Z.esc(tx(it.note))}</p>` : ''}`);
        if (it.lab && labBox) {
          const b = Z.el('button', 'btn btn-small efx-try', '🧪 ' + fx('try'));
          b.onclick = () => labBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
          c.appendChild(b);
        }
        list.appendChild(c);
      });
    }
    D.effects.forEach((e, i) => {
      const b = Z.el('button', 'efx-chip', `<span aria-hidden="true">${e.icon}</span> ${Z.esc(tx(e.name))}`);
      b.dataset.id = e.id; b.setAttribute('role', 'tab'); b.onclick = () => show(e);
      chips.appendChild(b); if (!i) show(e);
    });
    return sec;
  }

  window.ZPages = window.ZPages || {};
  ZPages.laboratorio = async (m) => {
    m.innerHTML = `<section class="card lab-hero"><span class="lab-hero-ico" aria-hidden="true">⚗️</span><div><h1>${s('title')}</h1><p class="lead">${s('intro')}</p>
      <nav class="lab-jump" aria-label="${s('go')}"></nav></div></section><div class="lab-body"><div class="card"><p class="muted">…</p></div></div>`;
    const body = m.querySelector('.lab-body'), jump = m.querySelector('.lab-jump');
    const d = await get(SRC, lang());
    if (!d) { body.innerHTML = `<div class="card"><p>${s('err')}</p></div>`; return; }
    body.innerHTML = '';
    const secs = d.sections || [];
    if (!window.CHEM_EFFECTS) { try { await Z.loadScript('data/chem-effects.js'); } catch (e) {} }
    let labBox = null;
    const addJump = (box, label) => {
      const a = Z.el('a', 'chip', label); a.href = '#/laboratorio';
      a.onclick = e => { e.preventDefault(); box.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
      jump.appendChild(a);
    };
    PICK.forEach(([k, ic, f]) => {
      const i = secs.findIndex(f); if (i < 0) return;
      const box = Z.renderSection(secs[i], SRC, i); box.id = 'lab-' + k; body.appendChild(box);
      addJump(box, ic + ' ' + s(k));
      if (k === 'lab') {
        labBox = box;
        const fxs = effectsSection(labBox);
        if (fxs) { fxs.id = 'lab-fx'; body.appendChild(fxs); addJump(fxs, '✨ ' + fx('nav')); }
      }
    });
    const ls = Z.el('section', 'card lab-lessons', `<h2>📚 ${s('lessons')}</h2><p class="muted">${s('lessonsSub')}</p><div class="lab-lesson-list"></div>`);
    const list = ls.querySelector('.lab-lesson-list');
    for (const id of LESSONS) {
      const [tt, y] = title(id);
      const a = Z.el('a', 'lab-lesson', `<b>${Z.esc(tt)}</b><span class="muted">${Z.esc((window.t ? t('year.' + y) : '') || y.toUpperCase())}</span>`);
      a.href = '#/t/' + id; list.appendChild(a);
    }
    body.appendChild(ls);
  };
})();
