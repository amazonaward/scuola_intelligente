/* "Matematica dal mondo": raccoglie i metodi di altri Paesi e civiltà presenti nelle lezioni (route #/metodi). */
(function () {
  const NAMES = {
    jp: ['Giappone', 'Japan', 'Japon', 'Япония', 'Japonia', 'Japan'], cn: ['Cina', 'China', 'Chine', 'Китай', 'China', 'China'], ru: ['Russia', 'Russia', 'Russie', 'Россия', 'Rusia', 'Russland'],
    eg: ['Antico Egitto', 'Ancient Egypt', 'Égypte ancienne', 'Древний Египет', 'Egiptul antic', 'Altes Ägypten'], ar: ['Mondo arabo', 'Arab world', 'Monde arabe', 'Арабский мир', 'Lumea arabă', 'Arabische Welt'],
    in: ['India', 'India', 'Inde', 'Индия', 'India', 'Indien'], mes: ['Mesopotamia', 'Mesopotamia', 'Mésopotamie', 'Месопотамия', 'Mesopotamia', 'Mesopotamien'],
    gr: ['Antica Grecia', 'Ancient Greece', 'Grèce antique', 'Древняя Греция', 'Grecia antică', 'Antikes Griechenland'], sg: ['Singapore', 'Singapore', 'Singapour', 'Сингапур', 'Singapore', 'Singapur'],
    us: ['Stati Uniti', 'United States', 'États-Unis', 'США', 'Statele Unite', 'Vereinigte Staaten'], gb: ['Regno Unito', 'United Kingdom', 'Royaume-Uni', 'Великобритания', 'Regatul Unit', 'Vereinigtes Königreich'],
    fr: ['Francia', 'France', 'France', 'Франция', 'Franța', 'Frankreich'], de: ['Germania', 'Germany', 'Allemagne', 'Германия', 'Germania', 'Deutschland'], maya: ['Maya', 'Maya', 'Mayas', 'Майя', 'Maya', 'Maya'],
    ro: ['Romania', 'Romania', 'Roumanie', 'Румыния', 'România', 'Rumänien'], md: ['Moldavia', 'Moldova', 'Moldavie', 'Молдова', 'Moldova', 'Moldau'], fi: ['Finlandia', 'Finland', 'Finlande', 'Финляндия', 'Finlanda', 'Finnland'],
    rome: ['Antica Roma', 'Ancient Rome', 'Rome antique', 'Древний Рим', 'Roma antică', 'Antikes Rom'], kr: ['Corea', 'Korea', 'Corée', 'Корея', 'Coreea', 'Korea'], idea: ['Altre idee', 'Other ideas', 'Autres idées', 'Другие идеи', 'Alte idei', 'Weitere Ideen']
  };
  const L = ['it', 'en', 'fr', 'ru', 'ro', 'de'];
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
