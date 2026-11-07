/* Dati di chimica: elementi, sostanze e reazioni (nomi in 6 lingue: it, en, fr, ru, ro, de). */
(function () {
  const L = ['it', 'en', 'fr', 'ru', 'ro', 'de'];
  /* [simbolo, Z, massa, categoria, gruppo, periodo, it, en, fr, ru, ro, de] */
  const E = [
    ['H', 1, 1.008, 'nonmetal', 1, 1, 'Idrogeno', 'Hydrogen', 'Hydrogène', 'Водород', 'Hidrogen', 'Wasserstoff'],
    ['He', 2, 4.003, 'noble', 18, 1, 'Elio', 'Helium', 'Hélium', 'Гелий', 'Heliu', 'Helium'],
    ['Li', 3, 6.94, 'alkali', 1, 2, 'Litio', 'Lithium', 'Lithium', 'Литий', 'Litiu', 'Lithium'],
    ['Be', 4, 9.012, 'alkaline', 2, 2, 'Berillio', 'Beryllium', 'Béryllium', 'Бериллий', 'Beriliu', 'Beryllium'],
    ['B', 5, 10.81, 'metalloid', 13, 2, 'Boro', 'Boron', 'Bore', 'Бор', 'Bor', 'Bor'],
    ['C', 6, 12.011, 'nonmetal', 14, 2, 'Carbonio', 'Carbon', 'Carbone', 'Углерод', 'Carbon', 'Kohlenstoff'],
    ['N', 7, 14.007, 'nonmetal', 15, 2, 'Azoto', 'Nitrogen', 'Azote', 'Азот', 'Azot', 'Stickstoff'],
    ['O', 8, 15.999, 'nonmetal', 16, 2, 'Ossigeno', 'Oxygen', 'Oxygène', 'Кислород', 'Oxigen', 'Sauerstoff'],
    ['F', 9, 18.998, 'halogen', 17, 2, 'Fluoro', 'Fluorine', 'Fluor', 'Фтор', 'Fluor', 'Fluor'],
    ['Ne', 10, 20.18, 'noble', 18, 2, 'Neon', 'Neon', 'Néon', 'Неон', 'Neon', 'Neon'],
    ['Na', 11, 22.99, 'alkali', 1, 3, 'Sodio', 'Sodium', 'Sodium', 'Натрий', 'Sodiu', 'Natrium'],
    ['Mg', 12, 24.305, 'alkaline', 2, 3, 'Magnesio', 'Magnesium', 'Magnésium', 'Магний', 'Magneziu', 'Magnesium'],
    ['Al', 13, 26.982, 'metal', 13, 3, 'Alluminio', 'Aluminium', 'Aluminium', 'Алюминий', 'Aluminiu', 'Aluminium'],
    ['Si', 14, 28.085, 'metalloid', 14, 3, 'Silicio', 'Silicon', 'Silicium', 'Кремний', 'Siliciu', 'Silicium'],
    ['P', 15, 30.974, 'nonmetal', 15, 3, 'Fosforo', 'Phosphorus', 'Phosphore', 'Фосфор', 'Fosfor', 'Phosphor'],
    ['S', 16, 32.06, 'nonmetal', 16, 3, 'Zolfo', 'Sulfur', 'Soufre', 'Сера', 'Sulf', 'Schwefel'],
    ['Cl', 17, 35.45, 'halogen', 17, 3, 'Cloro', 'Chlorine', 'Chlore', 'Хлор', 'Clor', 'Chlor'],
    ['Ar', 18, 39.95, 'noble', 18, 3, 'Argon', 'Argon', 'Argon', 'Аргон', 'Argon', 'Argon'],
    ['K', 19, 39.098, 'alkali', 1, 4, 'Potassio', 'Potassium', 'Potassium', 'Калий', 'Potasiu', 'Kalium'],
    ['Ca', 20, 40.078, 'alkaline', 2, 4, 'Calcio', 'Calcium', 'Calcium', 'Кальций', 'Calciu', 'Calcium'],
    ['Sc', 21, 44.956, 'transition', 3, 4, 'Scandio', 'Scandium', 'Scandium', 'Скандий', 'Scandiu', 'Scandium'],
    ['Ti', 22, 47.867, 'transition', 4, 4, 'Titanio', 'Titanium', 'Titane', 'Титан', 'Titan', 'Titan'],
    ['V', 23, 50.942, 'transition', 5, 4, 'Vanadio', 'Vanadium', 'Vanadium', 'Ванадий', 'Vanadiu', 'Vanadium'],
    ['Cr', 24, 51.996, 'transition', 6, 4, 'Cromo', 'Chromium', 'Chrome', 'Хром', 'Crom', 'Chrom'],
    ['Mn', 25, 54.938, 'transition', 7, 4, 'Manganese', 'Manganese', 'Manganèse', 'Марганец', 'Mangan', 'Mangan'],
    ['Fe', 26, 55.845, 'transition', 8, 4, 'Ferro', 'Iron', 'Fer', 'Железо', 'Fier', 'Eisen'],
    ['Co', 27, 58.933, 'transition', 9, 4, 'Cobalto', 'Cobalt', 'Cobalt', 'Кобальт', 'Cobalt', 'Cobalt'],
    ['Ni', 28, 58.693, 'transition', 10, 4, 'Nichel', 'Nickel', 'Nickel', 'Никель', 'Nichel', 'Nickel'],
    ['Cu', 29, 63.546, 'transition', 11, 4, 'Rame', 'Copper', 'Cuivre', 'Медь', 'Cupru', 'Kupfer'],
    ['Zn', 30, 65.38, 'transition', 12, 4, 'Zinco', 'Zinc', 'Zinc', 'Цинк', 'Zinc', 'Zink'],
    ['Ga', 31, 69.723, 'metal', 13, 4, 'Gallio', 'Gallium', 'Gallium', 'Галлий', 'Galiu', 'Gallium'],
    ['Ge', 32, 72.63, 'metalloid', 14, 4, 'Germanio', 'Germanium', 'Germanium', 'Германий', 'Germaniu', 'Germanium'],
    ['As', 33, 74.922, 'metalloid', 15, 4, 'Arsenico', 'Arsenic', 'Arsenic', 'Мышьяк', 'Arsen', 'Arsen'],
    ['Se', 34, 78.971, 'nonmetal', 16, 4, 'Selenio', 'Selenium', 'Sélénium', 'Селен', 'Seleniu', 'Selen'],
    ['Br', 35, 79.904, 'halogen', 17, 4, 'Bromo', 'Bromine', 'Brome', 'Бром', 'Brom', 'Brom'],
    ['Kr', 36, 83.798, 'noble', 18, 4, 'Kripton', 'Krypton', 'Krypton', 'Криптон', 'Kripton', 'Krypton'],
    ['Ag', 47, 107.87, 'transition', 11, 5, 'Argento', 'Silver', 'Argent', 'Серебро', 'Argint', 'Silber'],
    ['Sn', 50, 118.71, 'metal', 14, 5, 'Stagno', 'Tin', 'Étain', 'Олово', 'Staniu', 'Zinn'],
    ['I', 53, 126.9, 'halogen', 17, 5, 'Iodio', 'Iodine', 'Iode', 'Иод', 'Iod', 'Iod'],
    ['Au', 79, 196.97, 'transition', 11, 6, 'Oro', 'Gold', 'Or', 'Золото', 'Aur', 'Gold'],
    ['Hg', 80, 200.59, 'transition', 12, 6, 'Mercurio', 'Mercury', 'Mercure', 'Ртуть', 'Mercur', 'Quecksilber'],
    ['Pb', 82, 207.2, 'metal', 14, 6, 'Piombo', 'Lead', 'Plomb', 'Свинец', 'Plumb', 'Blei']
  ];
  const elements = E.map((e) => ({ sym: e[0], z: e[1], mass: e[2], cat: e[3], group: e[4], period: e[5], names: Object.fromEntries(L.map((l, i) => [l, e[6 + i]])) }));
  const bySym = Object.fromEntries(elements.map((e) => [e.sym, e]));

  /* massa molare da formula, es. "CH3COOH", "Ca(OH)2" */
  function molarMass(f) {
    let i = 0;
    function group() {
      let m = 0;
      while (i < f.length && f[i] !== ')') {
        let sub;
        if (f[i] === '(') { i++; sub = group(); i++; }
        else { const mt = /^[A-Z][a-z]?/.exec(f.slice(i)); i += mt[0].length; sub = bySym[mt[0]].mass; }
        const d = /^\d+/.exec(f.slice(i)); let k = 1; if (d) { k = +d[0]; i += d[0].length; }
        m += sub * k;
      }
      return m;
    }
    return Math.round(group() * 100) / 100;
  }

  /* sostanze: formula, stato, colore, nomi */
  const S = {
    H2: ['g', '#e0f2fe', 'Idrogeno', 'Hydrogen', 'Dihydrogène', 'Водород', 'Hidrogen', 'Wasserstoff'],
    O2: ['g', '#dbeafe', 'Ossigeno', 'Oxygen', 'Dioxygène', 'Кислород', 'Oxigen', 'Sauerstoff'],
    N2: ['g', '#e5e7eb', 'Azoto', 'Nitrogen', 'Diazote', 'Азот', 'Azot', 'Stickstoff'],
    H2O: ['l', '#7dd3fc', 'Acqua', 'Water', 'Eau', 'Вода', 'Apă', 'Wasser'],
    NaOH: ['s', '#f8fafc', 'Idrossido di sodio (soda caustica)', 'Sodium hydroxide', 'Hydroxyde de sodium (soude)', 'Гидроксид натрия', 'Hidroxid de sodiu', 'Natriumhydroxid (Ätznatron)'],
    HCl: ['l', '#fef9c3', 'Acido cloridrico', 'Hydrochloric acid', 'Acide chlorhydrique', 'Соляная кислота', 'Acid clorhidric', 'Salzsäure'],
    NaCl: ['s', '#ffffff', 'Cloruro di sodio (sale da cucina)', 'Sodium chloride (table salt)', 'Chlorure de sodium (sel)', 'Хлорид натрия (поваренная соль)', 'Clorură de sodiu (sare)', 'Natriumchlorid (Kochsalz)'],
    NaHCO3: ['s', '#fafafa', 'Bicarbonato di sodio', 'Baking soda', 'Bicarbonate de sodium', 'Пищевая сода', 'Bicarbonat de sodiu', 'Natron (Natriumhydrogencarbonat)'],
    CH3COOH: ['l', '#fef3c7', 'Acido acetico (aceto)', 'Acetic acid (vinegar)', 'Acide acétique (vinaigre)', 'Уксусная кислота', 'Acid acetic (oțet)', 'Essigsäure (Essig)'],
    CH3COONa: ['s', '#f5f5f4', 'Acetato di sodio', 'Sodium acetate', 'Acétate de sodium', 'Ацетат натрия', 'Acetat de sodiu', 'Natriumacetat'],
    CO2: ['g', '#f1f5f9', 'Anidride carbonica', 'Carbon dioxide', 'Dioxyde de carbone', 'Углекислый газ', 'Dioxid de carbon', 'Kohlenstoffdioxid'],
    CaCO3: ['s', '#e7e5e4', 'Carbonato di calcio (calcare)', 'Calcium carbonate (limestone)', 'Carbonate de calcium (calcaire)', 'Карбонат кальция (мел)', 'Carbonat de calciu (calcar)', 'Calciumcarbonat (Kalkstein)'],
    CaCl2: ['s', '#fafaf9', 'Cloruro di calcio', 'Calcium chloride', 'Chlorure de calcium', 'Хлорид кальция', 'Clorură de calciu', 'Calciumchlorid'],
    Fe: ['s', '#6b7280', 'Ferro (limatura)', 'Iron (filings)', 'Fer (limaille)', 'Железо (опилки)', 'Fier (pilitură)', 'Eisen (Späne)'],
    S: ['s', '#facc15', 'Zolfo', 'Sulfur', 'Soufre', 'Сера', 'Sulf', 'Schwefel'],
    FeS: ['s', '#1f2937', 'Solfuro di ferro', 'Iron sulfide', 'Sulfure de fer', 'Сульфид железа', 'Sulfură de fier', 'Eisensulfid'],
    Mg: ['s', '#d4d4d8', 'Magnesio (nastro)', 'Magnesium (ribbon)', 'Magnésium (ruban)', 'Магний (лента)', 'Magneziu (panglică)', 'Magnesium (Band)'],
    MgO: ['s', '#ffffff', 'Ossido di magnesio', 'Magnesium oxide', 'Oxyde de magnésium', 'Оксид магния', 'Oxid de magneziu', 'Magnesiumoxid'],
    MgCl2: ['s', '#fafafa', 'Cloruro di magnesio', 'Magnesium chloride', 'Chlorure de magnésium', 'Хлорид магния', 'Clorură de magneziu', 'Magnesiumchlorid'],
    CH4: ['g', '#f0fdf4', 'Metano', 'Methane', 'Méthane', 'Метан', 'Metan', 'Methan'],
    C: ['s', '#111827', 'Carbonio (carbone)', 'Carbon (charcoal)', 'Carbone (charbon)', 'Углерод (уголь)', 'Carbon (cărbune)', 'Kohlenstoff (Holzkohle)'],
    AgNO3: ['s', '#f8fafc', 'Nitrato d\'argento', 'Silver nitrate', 'Nitrate d\'argent', 'Нитрат серебра', 'Azotat de argint', 'Silbernitrat'],
    AgCl: ['s', '#ffffff', 'Cloruro d\'argento', 'Silver chloride', 'Chlorure d\'argent', 'Хлорид серебра', 'Clorură de argint', 'Silberchlorid'],
    NaNO3: ['s', '#fafafa', 'Nitrato di sodio', 'Sodium nitrate', 'Nitrate de sodium', 'Нитрат натрия', 'Azotat de sodiu', 'Natriumnitrat'],
    CuSO4: ['s', '#2563eb', 'Solfato di rame', 'Copper sulfate', 'Sulfate de cuivre', 'Сульфат меди', 'Sulfat de cupru', 'Kupfersulfat'],
    FeSO4: ['s', '#86efac', 'Solfato di ferro', 'Iron(II) sulfate', 'Sulfate de fer', 'Сульфат железа', 'Sulfat de fier', 'Eisensulfat'],
    Cu: ['s', '#b45309', 'Rame', 'Copper', 'Cuivre', 'Медь', 'Cupru', 'Kupfer'],
    Zn: ['s', '#9ca3af', 'Zinco (granuli)', 'Zinc (granules)', 'Zinc (grenaille)', 'Цинк (гранулы)', 'Zinc (granule)', 'Zink (Körner)'],
    ZnCl2: ['s', '#fafafa', 'Cloruro di zinco', 'Zinc chloride', 'Chlorure de zinc', 'Хлорид цинка', 'Clorură de zinc', 'Zinkchlorid'],
    NH3: ['g', '#f0f9ff', 'Ammoniaca', 'Ammonia', 'Ammoniac', 'Аммиак', 'Amoniac', 'Ammoniak']
  };
  const substances = {};
  for (const [f, a] of Object.entries(S)) substances[f] = { f, state: a[0], color: a[1], names: Object.fromEntries(L.map((l, i) => [l, a[2 + i]])), M: molarMass(f) };
  const shelf = ['H2', 'O2', 'N2', 'H2O', 'NaOH', 'HCl', 'NaCl', 'NaHCO3', 'CH3COOH', 'CaCO3', 'Fe', 'S', 'Mg', 'CH4', 'C', 'AgNO3', 'CuSO4', 'Zn'];

  /* reazioni: reagenti/prodotti {formula: coefficiente}, effetto visivo, energia, osservazioni */
  const R = [
    { r: { H2: 2, O2: 1 }, p: { H2O: 2 }, fx: 'flame', exo: true, obs: ['Con una scintilla: «pop!» e una fiammata. Si forma acqua.', 'With a spark: "pop!" and a flash of flame. Water forms.', 'Avec une étincelle : « pop ! » et une flamme. De l\'eau se forme.', 'От искры — «хлопок» и вспышка. Образуется вода.', 'Cu o scânteie: „pop!” și o flacără. Se formează apă.', 'Mit einem Funken: „Plopp!“ und eine Stichflamme. Es entsteht Wasser.'] },
    { r: { NaOH: 1, HCl: 1 }, p: { NaCl: 1, H2O: 1 }, fx: 'warm', exo: true, obs: ['Neutralizzazione: la soluzione si scalda, non si vede altro. Acido + base → sale + acqua.', 'Neutralisation: the solution warms up, nothing else is visible. Acid + base → salt + water.', 'Neutralisation : la solution chauffe, rien d\'autre de visible. Acide + base → sel + eau.', 'Нейтрализация: раствор нагревается, больше ничего не видно. Кислота + основание → соль + вода.', 'Neutralizare: soluția se încălzește, altceva nu se vede. Acid + bază → sare + apă.', 'Neutralisation: Die Lösung wird warm, sonst sieht man nichts. Säure + Base → Salz + Wasser.'] },
    { r: { NaHCO3: 1, CH3COOH: 1 }, p: { CH3COONa: 1, H2O: 1, CO2: 1 }, fx: 'bubbles', exo: false, obs: ['Effervescenza! Tantissime bolle di anidride carbonica e il becher si raffredda un po\'.', 'Fizzing! Lots of carbon dioxide bubbles, and the beaker cools a little.', 'Effervescence ! Plein de bulles de dioxyde de carbone et le bécher refroidit un peu.', 'Шипение! Много пузырьков углекислого газа, стакан немного охлаждается.', 'Efervescență! Multe bule de dioxid de carbon, iar paharul se răcește puțin.', 'Es sprudelt! Ganz viele Bläschen aus Kohlenstoffdioxid, und das Becherglas wird ein bisschen kälter.'] },
    { r: { CaCO3: 1, HCl: 2 }, p: { CaCl2: 1, H2O: 1, CO2: 1 }, fx: 'bubbles', exo: true, obs: ['Il calcare «frigge»: bolle di CO₂. È così che l\'acido rovina il marmo.', 'The limestone "fizzes": CO₂ bubbles. This is how acid damages marble.', 'Le calcaire « mousse » : bulles de CO₂. C\'est ainsi que l\'acide abîme le marbre.', 'Мел «шипит»: пузырьки CO₂. Так кислота разрушает мрамор.', 'Calcarul „sfârâie”: bule de CO₂. Așa strică acidul marmura.', 'Der Kalk „zischt“: CO₂-Bläschen. So greift Säure den Marmor an.'] },
    { r: { Fe: 1, S: 1 }, p: { FeS: 1 }, fx: 'glow', exo: true, obs: ['Scaldando la miscela, diventa incandescente e si forma un solido nero: il ferro non è più attirato dalla calamita.', 'When heated, the mixture glows red-hot and a black solid forms: the iron is no longer attracted by a magnet.', 'Chauffé, le mélange devient incandescent et un solide noir se forme : le fer n\'est plus attiré par l\'aimant.', 'При нагревании смесь раскаляется, образуется чёрное вещество: железо больше не притягивается магнитом.', 'Încălzit, amestecul devine incandescent și se formează un solid negru: fierul nu mai este atras de magnet.', 'Beim Erhitzen glüht die Mischung, und es entsteht ein schwarzer Feststoff: Das Eisen wird vom Magneten nicht mehr angezogen.'] },
    { r: { Mg: 2, O2: 1 }, p: { MgO: 2 }, fx: 'flash', exo: true, obs: ['Il magnesio brucia con una luce bianca accecante e lascia una polvere bianca.', 'Magnesium burns with a blinding white light and leaves a white powder.', 'Le magnésium brûle avec une lumière blanche aveuglante et laisse une poudre blanche.', 'Магний горит ослепительно белым светом и оставляет белый порошок.', 'Magneziul arde cu o lumină albă orbitoare și lasă o pulbere albă.', 'Magnesium verbrennt mit grellem weißem Licht und hinterlässt ein weißes Pulver.'] },
    { r: { CH4: 1, O2: 2 }, p: { CO2: 1, H2O: 2 }, fx: 'flame', exo: true, obs: ['Combustione: fiamma blu come quella del fornello di casa. Si formano CO₂ e vapore acqueo.', 'Combustion: a blue flame like a kitchen stove. CO₂ and water vapour form.', 'Combustion : flamme bleue comme celle de la gazinière. Il se forme du CO₂ et de la vapeur d\'eau.', 'Горение: синее пламя, как у кухонной плиты. Образуются CO₂ и водяной пар.', 'Ardere: flacără albastră ca la aragaz. Se formează CO₂ și vapori de apă.', 'Verbrennung: eine blaue Flamme wie beim Gasherd. Es entstehen CO₂ und Wasserdampf.'] },
    { r: { C: 1, O2: 1 }, p: { CO2: 1 }, fx: 'glow', exo: true, obs: ['Il carbone diventa brace rossa e si consuma, liberando anidride carbonica.', 'The charcoal glows red and burns away, releasing carbon dioxide.', 'Le charbon rougeoie et se consume en libérant du dioxyde de carbone.', 'Уголь раскаляется докрасна и сгорает, выделяя углекислый газ.', 'Cărbunele se înroșește și arde, eliberând dioxid de carbon.', 'Die Holzkohle glüht rot und verbrennt dabei; es wird Kohlenstoffdioxid frei.'] },
    { r: { AgNO3: 1, NaCl: 1 }, p: { AgCl: 1, NaNO3: 1 }, fx: 'precipitate', exo: false, obs: ['Si forma subito un precipitato bianco come latte: il cloruro d\'argento, che non si scioglie in acqua.', 'A milky white precipitate forms at once: silver chloride, which does not dissolve in water.', 'Un précipité blanc laiteux se forme aussitôt : le chlorure d\'argent, insoluble dans l\'eau.', 'Сразу выпадает белый, как молоко, осадок — хлорид серебра, который не растворяется в воде.', 'Se formează imediat un precipitat alb ca laptele: clorura de argint, care nu se dizolvă în apă.', 'Sofort bildet sich ein milchig weißer Niederschlag: Silberchlorid, das sich nicht in Wasser löst.'] },
    { r: { Fe: 1, CuSO4: 1 }, p: { FeSO4: 1, Cu: 1 }, fx: 'color', exo: true, obs: ['La soluzione blu diventa verdina e sul ferro si deposita uno strato di rame rossiccio.', 'The blue solution turns pale green and a reddish layer of copper coats the iron.', 'La solution bleue devient vert pâle et une couche de cuivre rougeâtre recouvre le fer.', 'Синий раствор становится зеленоватым, а на железе оседает рыжеватая медь.', 'Soluția albastră devine verzuie și pe fier se depune un strat roșiatic de cupru.', 'Die blaue Lösung wird hellgrün, und auf dem Eisen setzt sich eine rötliche Kupferschicht ab.'] },
    { r: { Zn: 1, HCl: 2 }, p: { ZnCl2: 1, H2: 1 }, fx: 'bubbles', exo: true, obs: ['Lo zinco si consuma e libera bolle di idrogeno (che con una fiammella fa «pop»).', 'The zinc dissolves, giving off hydrogen bubbles (which go "pop" with a flame).', 'Le zinc se dissout en libérant des bulles d\'hydrogène (qui font « pop » avec une flamme).', 'Цинк растворяется, выделяя пузырьки водорода (с огоньком они «хлопают»).', 'Zincul se consumă și eliberează bule de hidrogen (care fac „pop” la flacără).', 'Das Zink löst sich auf und gibt Wasserstoffbläschen ab (die an einer kleinen Flamme „ploppen“).'] },
    { r: { Mg: 1, HCl: 2 }, p: { MgCl2: 1, H2: 1 }, fx: 'bubbles', exo: true, obs: ['Il magnesio sparisce rapidamente tra tante bolle di idrogeno e la provetta si scalda.', 'The magnesium quickly disappears among lots of hydrogen bubbles and the tube warms up.', 'Le magnésium disparaît vite parmi de nombreuses bulles d\'hydrogène et le tube chauffe.', 'Магний быстро исчезает среди пузырьков водорода, пробирка нагревается.', 'Magneziul dispare repede printre multe bule de hidrogen, iar eprubeta se încălzește.', 'Das Magnesium verschwindet schnell zwischen vielen Wasserstoffbläschen, und das Reagenzglas wird warm.'] },
    { r: { N2: 1, H2: 3 }, p: { NH3: 2 }, fx: 'none', exo: true, obs: ['Sintesi dell\'ammoniaca (processo Haber-Bosch): in fabbrica servono alta pressione, 450 °C e un catalizzatore di ferro.', 'Ammonia synthesis (Haber-Bosch process): factories need high pressure, 450 °C and an iron catalyst.', 'Synthèse de l\'ammoniac (procédé Haber-Bosch) : il faut une haute pression, 450 °C et un catalyseur au fer.', 'Синтез аммиака (процесс Габера–Боша): нужны высокое давление, 450 °C и железный катализатор.', 'Sinteza amoniacului (procedeul Haber-Bosch): sunt necesare presiune mare, 450 °C și un catalizator de fier.', 'Ammoniaksynthese (Haber-Bosch-Verfahren): In der Fabrik braucht man hohen Druck, 450 °C und einen Eisenkatalysator.'] }
  ];
  /* miscugli senza reazione ma con un fenomeno fisico */
  const physical = [
    { set: ['NaCl', 'H2O'], obs: ['Il sale si scioglie nell\'acqua: è una trasformazione fisica, non chimica. Facendo evaporare l\'acqua il sale ritorna.', 'The salt dissolves in water: a physical change, not a chemical one. Evaporate the water and the salt comes back.', 'Le sel se dissout dans l\'eau : c\'est une transformation physique. Si l\'eau s\'évapore, le sel réapparaît.', 'Соль растворяется в воде: это физическое, а не химическое изменение. Если выпарить воду, соль вернётся.', 'Sarea se dizolvă în apă: e o transformare fizică, nu chimică. Dacă apa se evaporă, sarea reapare.', 'Das Salz löst sich im Wasser: Das ist eine physikalische, keine chemische Veränderung. Wenn das Wasser verdunstet, kommt das Salz zurück.'] },
    { set: ['CuSO4', 'H2O'], obs: ['Il solfato di rame si scioglie e l\'acqua diventa azzurra: anche questa è una soluzione, non una reazione.', 'Copper sulfate dissolves and the water turns blue: a solution, not a reaction.', 'Le sulfate de cuivre se dissout et l\'eau devient bleue : c\'est une solution, pas une réaction.', 'Медный купорос растворяется, вода становится голубой: это раствор, а не реакция.', 'Sulfatul de cupru se dizolvă și apa devine albastră: e o soluție, nu o reacție.', 'Das Kupfersulfat löst sich, und das Wasser wird hellblau: Auch das ist eine Lösung, keine Reaktion.'] },
    { set: ['Fe', 'S'], obs: [], skip: true }
  ];
  /* geometrie 3D di alcune molecole per la scena molecule */
  const mol = {
    H2O: { atoms: [{ x: 0, y: 0.25, z: 0, r: 0.5, color: '#ef4444', label: 'O' }, { x: -0.75, y: -0.35, z: 0, r: 0.32, color: '#e5e7eb', label: 'H' }, { x: 0.75, y: -0.35, z: 0, r: 0.32, color: '#e5e7eb', label: 'H' }], bonds: [[0, 1], [0, 2]] },
    CO2: { atoms: [{ x: 0, y: 0, z: 0, r: 0.45, color: '#374151', label: 'C' }, { x: -1.1, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }, { x: 1.1, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }], bonds: [[0, 1], [0, 2]] },
    CH4: { atoms: [{ x: 0, y: 0, z: 0, r: 0.45, color: '#374151', label: 'C' }, { x: 0.6, y: 0.6, z: 0.6, r: 0.3, color: '#e5e7eb', label: 'H' }, { x: -0.6, y: -0.6, z: 0.6, r: 0.3, color: '#e5e7eb', label: 'H' }, { x: -0.6, y: 0.6, z: -0.6, r: 0.3, color: '#e5e7eb', label: 'H' }, { x: 0.6, y: -0.6, z: -0.6, r: 0.3, color: '#e5e7eb', label: 'H' }], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]] },
    NH3: { atoms: [{ x: 0, y: 0.3, z: 0, r: 0.45, color: '#3b82f6', label: 'N' }, { x: 0.8, y: -0.25, z: 0, r: 0.3, color: '#e5e7eb', label: 'H' }, { x: -0.4, y: -0.25, z: 0.7, r: 0.3, color: '#e5e7eb', label: 'H' }, { x: -0.4, y: -0.25, z: -0.7, r: 0.3, color: '#e5e7eb', label: 'H' }], bonds: [[0, 1], [0, 2], [0, 3]] },
    H2: { atoms: [{ x: -0.37, y: 0, z: 0, r: 0.35, color: '#e5e7eb', label: 'H' }, { x: 0.37, y: 0, z: 0, r: 0.35, color: '#e5e7eb', label: 'H' }], bonds: [[0, 1]] },
    O2: { atoms: [{ x: -0.6, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }, { x: 0.6, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }], bonds: [[0, 1]] },
    N2: { atoms: [{ x: -0.55, y: 0, z: 0, r: 0.48, color: '#3b82f6', label: 'N' }, { x: 0.55, y: 0, z: 0, r: 0.48, color: '#3b82f6', label: 'N' }], bonds: [[0, 1]] },
    NaCl: { atoms: (() => { const a = []; for (let x = 0; x < 3; x++) for (let y = 0; y < 3; y++) for (let z = 0; z < 3; z++) { const na = (x + y + z) % 2 === 0; a.push({ x: (x - 1) * 0.9, y: (y - 1) * 0.9, z: (z - 1) * 0.9, r: na ? 0.25 : 0.4, color: na ? '#a855f7' : '#22c55e', label: na ? 'Na' : 'Cl' }); } return a; })(), bonds: [] },
    HCl: { atoms: [{ x: -0.5, y: 0, z: 0, r: 0.32, color: '#e5e7eb', label: 'H' }, { x: 0.45, y: 0, z: 0, r: 0.55, color: '#22c55e', label: 'Cl' }], bonds: [[0, 1]] },
    MgO: { atoms: [{ x: -0.5, y: 0, z: 0, r: 0.4, color: '#94a3b8', label: 'Mg' }, { x: 0.5, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }], bonds: [[0, 1]] }
  };

  window.Chem = { elements, bySym, substances, shelf, reactions: R, physical, mol, molarMass,
    name(f) { const s = substances[f]; return s ? (s.names[i18n.lang] || s.names.it) : f; },
    obs(o) { return o[L.indexOf(i18n.lang)] || o[0]; },
    pretty(f) { return f.replace(/(\d+)/g, '<sub>$1</sub>'); }
  };
})();
