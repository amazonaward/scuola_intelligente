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
      go: 'Mergi la', lab: 'Laborator', table: 'Tabel periodic', atom: 'Atom', mol: 'Molecule 3D', lessons: 'Lecții cu chimie', lessonsSub: 'Ca să înțelegi mai bine ce se întâmplă în laborator.', err: 'Nu pot încărca laboratorul. Încearcă din nou.' }
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
    for (const y of CURRICULUM.years) for (const sub of CURRICULUM.subjects) for (const e of ((CURRICULUM.program[y] || {})[sub] || [])) if (e[0] === id) return [e[1], y];
    return [id, ''];
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
    PICK.forEach(([k, ic, f]) => {
      const i = secs.findIndex(f); if (i < 0) return;
      const box = Z.renderSection(secs[i], SRC, i); box.id = 'lab-' + k; body.appendChild(box);
      const a = Z.el('a', 'chip', ic + ' ' + s(k)); a.href = '#/laboratorio';
      a.onclick = e => { e.preventDefault(); box.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
      jump.appendChild(a);
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
