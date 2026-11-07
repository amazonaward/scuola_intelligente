/* "Matematica dal mondo": raccoglie i metodi di altri Paesi e civiltà presenti nelle lezioni (route #/metodi). */
(function () {
  const NAMES = {
    jp: ['Giappone', 'Japan', 'Japon', 'Япония', 'Japonia'], cn: ['Cina', 'China', 'Chine', 'Китай', 'China'], ru: ['Russia', 'Russia', 'Russie', 'Россия', 'Rusia'],
    eg: ['Antico Egitto', 'Ancient Egypt', 'Égypte ancienne', 'Древний Египет', 'Egiptul antic'], ar: ['Mondo arabo', 'Arab world', 'Monde arabe', 'Арабский мир', 'Lumea arabă'],
    in: ['India', 'India', 'Inde', 'Индия', 'India'], mes: ['Mesopotamia', 'Mesopotamia', 'Mésopotamie', 'Месопотамия', 'Mesopotamia'],
    gr: ['Antica Grecia', 'Ancient Greece', 'Grèce antique', 'Древняя Греция', 'Grecia antică'], sg: ['Singapore', 'Singapore', 'Singapour', 'Сингапур', 'Singapore'],
    us: ['Stati Uniti', 'United States', 'États-Unis', 'США', 'Statele Unite'], gb: ['Regno Unito', 'United Kingdom', 'Royaume-Uni', 'Великобритания', 'Regatul Unit'],
    fr: ['Francia', 'France', 'France', 'Франция', 'Franța'], de: ['Germania', 'Germany', 'Allemagne', 'Германия', 'Germania'], maya: ['Maya', 'Maya', 'Mayas', 'Майя', 'Maya'],
    ro: ['Romania', 'Romania', 'Roumanie', 'Румыния', 'România'], md: ['Moldavia', 'Moldova', 'Moldavie', 'Молдова', 'Moldova'], fi: ['Finlandia', 'Finland', 'Finlande', 'Финляндия', 'Finlanda'],
    rome: ['Antica Roma', 'Ancient Rome', 'Rome antique', 'Древний Рим', 'Roma antică'], kr: ['Corea', 'Korea', 'Corée', 'Корея', 'Coreea'], idea: ['Altre idee', 'Other ideas', 'Autres idées', 'Другие идеи', 'Alte idei']
  };
  const L = ['it', 'en', 'fr', 'ru', 'ro'];
  const cname = (c) => (NAMES[c] || [c])[Math.max(0, L.indexOf(i18n.lang))] || c;

  function page(m, filter) {
    const M = window.METHODS || { items: [], flags: {} };
    const C = window.CURRICULUM; const entry = {}; const yearOf = {};
    for (const y of C.years) for (const s of C.subjects) for (const e of (C.program[y][s] || [])) { entry[e[0]] = e; yearOf[e[0]] = y; }
    const sel = filter || 'world';
    const items = M.items.filter((x) => (sel === 'all' ? true : sel === 'world' ? x.country !== 'idea' : x.country === sel));
    m.innerHTML = `<h1>🌍 ${t('meth.title')}</h1><p class="lead">${t('meth.sub')}</p>`;
    // filtri per Paese
    const counts = {}; M.items.forEach((x) => { counts[x.country] = (counts[x.country] || 0) + 1; });
    const chips = Z.el('div', 'meth-chips');
    const mk = (key, label) => { const a = Z.el('a', 'chip' + (sel === key ? ' active' : ''), label); a.href = '#/metodi/' + key; chips.appendChild(a); };
    mk('world', `🌐 ${t('meth.all')} (${M.items.filter((x) => x.country !== 'idea').length})`);
    Object.keys(counts).filter((c) => c !== 'idea').sort((a, b) => counts[b] - counts[a]).forEach((c) => mk(c, `${M.flags[c] || ''} ${cname(c)} (${counts[c]})`));
    if (counts.idea) mk('idea', `💡 ${cname('idea')} (${counts.idea})`);
    m.appendChild(chips);
    // raggruppati per classe
    C.years.forEach((y) => {
      const list = items.filter((x) => yearOf[x.topic] === y); if (!list.length) return;
      const sec = Z.el('section', 'card', `<h2>${t('year.' + y)} <small class="muted">${list.length} ${t('meth.n')}</small></h2>`);
      const g = Z.el('div', 'meth-grid');
      list.forEach((x) => {
        const a = Z.el('a', 'meth-card', `<span class="meth-flag">${M.flags[x.country] || '💡'}</span><b>${Z.esc(x.labels[i18n.lang] || x.labels.it)}</b><small>${Z.esc(entry[x.topic] ? i18n.topicTitle(entry[x.topic]) : x.topic)}</small><em>${cname(x.country)}</em>`);
        a.href = `#/t/${x.topic}/alt${x.tab}`; g.appendChild(a);
      });
      sec.appendChild(g); m.appendChild(sec);
    });
  }

  window.ZPages = window.ZPages || {};
  ZPages.metodi = (m, filter) => {
    if (window.METHODS) return page(m, filter);
    Z.loadScript('data/methods-index.js').then(() => page(m, filter));
  };
})();
