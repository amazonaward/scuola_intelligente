TOPIC('it', {
  id: "p1-tec-oggetti",
  title: "Oggetti e materiali",
  intro: "Guardati intorno: sei circondato da <b>oggetti</b>! 🪑✏️🥤 Ogni oggetto <b>serve a qualcosa</b> (ha una funzione) ed è fatto di un <b>materiale</b>: legno, plastica, metallo, vetro… Oggi diventiamo <b>detective dei materiali</b> 🕵️ e scopriamo perché ogni oggetto è fatto proprio così.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Oggetti: a cosa servono?",
      html: `<p>Gli oggetti sono cose costruite dalle persone per <b>aiutarci</b> a fare qualcosa. Ogni oggetto ha una <b>funzione</b>:</p>
<ul>
<li>✂️ Le forbici servono per <b>tagliare</b>.</li>
<li>🥄 Il cucchiaio serve per <b>mangiare</b> la minestra.</li>
<li>☂️ L'ombrello serve per <b>ripararsi</b> dalla pioggia.</li>
<li>🎒 Lo zaino serve per <b>trasportare</b> i libri.</li>
</ul>
<p>Un oggetto è fatto di <b>parti</b>. Le forbici hanno due <b>lame</b> per tagliare e due <b>anelli</b> (manici) per infilare le dita. Ogni parte ha il suo lavoro!</p>`
    },
    {
      type: "text",
      title: "I materiali: di cosa sono fatti?",
      html: `<table>
<tr><th>Materiale</th><th>Da dove viene</th><th>Com'è</th><th>Oggetti</th></tr>
<tr><td>🪵 <b>Legno</b></td><td>dagli alberi</td><td>duro, si può tagliare, galleggia</td><td>sedia, matita, tavolo</td></tr>
<tr><td>🧴 <b>Plastica</b></td><td>dal petrolio (inventata dall'uomo)</td><td>leggera, colorata, non si arrugginisce</td><td>bottiglie, giocattoli, secchiello</td></tr>
<tr><td>🔩 <b>Metallo</b></td><td>dalle rocce (minerali)</td><td>duro, resistente, freddo al tatto, lucido</td><td>forchetta, chiave, pentola</td></tr>
<tr><td>🥛 <b>Vetro</b></td><td>dalla sabbia fusa</td><td>trasparente, liscio, fragile</td><td>bicchiere, finestra, barattolo</td></tr>
<tr><td>📄 <b>Carta</b></td><td>dal legno degli alberi</td><td>sottile, leggera, si strappa</td><td>quaderno, libro, sacchetto</td></tr>
<tr><td>🧶 <b>Stoffa</b></td><td>da piante (cotone) o animali (lana)</td><td>morbida, si piega</td><td>maglietta, tenda, peluche</td></tr>
<tr><td>🍽️ <b>Ceramica</b></td><td>dall'argilla cotta nel forno</td><td>dura, liscia, fragile</td><td>piatto, tazza, vaso</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "Lo stesso oggetto, materiali diversi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<text x="300" y="34" font-size="22" text-anchor="middle" fill="#0f172a" font-weight="bold">Un cucchiaio può essere di…</text>
<g stroke-width="3">
<ellipse cx="100" cy="100" rx="34" ry="46" fill="#a16207" stroke="#713f12"/>
<rect x="92" y="140" width="16" height="110" rx="6" fill="#a16207" stroke="#713f12"/>
<ellipse cx="250" cy="100" rx="34" ry="46" fill="#cbd5e1" stroke="#475569"/>
<rect x="242" y="140" width="16" height="110" rx="6" fill="#cbd5e1" stroke="#475569"/>
<ellipse cx="400" cy="100" rx="34" ry="46" fill="#f472b6" stroke="#9d174d"/>
<rect x="392" y="140" width="16" height="110" rx="6" fill="#f472b6" stroke="#9d174d"/>
<ellipse cx="530" cy="100" rx="34" ry="46" fill="#fef3c7" stroke="#92400e"/>
<rect x="522" y="140" width="16" height="110" rx="6" fill="#fef3c7" stroke="#92400e"/>
</g>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="100" y="280" fill="#713f12">LEGNO 🪵</text>
<text x="250" y="280" fill="#334155">METALLO 🔩</text>
<text x="400" y="280" fill="#9d174d">PLASTICA 🧴</text>
<text x="530" y="280" fill="#92400e">CERAMICA</text>
</g>
</svg>`,
      caption: "La funzione è la stessa (mangiare), ma il materiale cambia. Il cucchiaio di legno non scotta quando mescoli il sugo caldo; quello di metallo è robusto e si lava bene; quello di plastica è leggero e va bene per un picnic."
    },
    {
      type: "quiz",
      title: "Mini-quiz: di cosa è fatto?",
      questions: [
        { type: "mc", q: "La finestra è fatta di…", options: ["vetro", "stoffa", "carta"], answer: 0, explain: "Il vetro è trasparente: fa passare la luce." },
        { type: "mc", q: "Il legno viene…", options: ["dalla sabbia", "dagli alberi", "dal petrolio"], answer: 1, explain: "Il legno è il tronco degli alberi." },
        { type: "tf", q: "La plastica è un materiale inventato dall'uomo.", answer: true, explain: "In natura non esiste: si fa nelle fabbriche, soprattutto dal petrolio." }
      ]
    },
    {
      type: "widget",
      title: "Gioco: dividi per materiale",
      widget: "classify",
      options: {
        groups: ["🪵 Legno", "🔩 Metallo", "🥛 Vetro", "🧶 Stoffa"],
        items: [["🪑 sedia della cucina", 0], ["✏️ matita", 0], ["🔑 chiave", 1], ["🍴 forchetta", 1], ["🥛 bicchiere", 2], ["🫙 barattolo della marmellata", 2], ["👕 maglietta", 3], ["🧦 calzino", 3]]
      },
      caption: "Metti ogni oggetto nel gruppo del suo materiale."
    },
    {
      type: "remember",
      title: "Le proprietà dei materiali",
      html: `<p>Le <b>proprietà</b> sono le caratteristiche di un materiale. Per scoprirle usiamo i <b>5 sensi</b> e facciamo delle prove:</p>
<ul>
<li>✋ <b>Duro</b> o <b>morbido</b>? (il metallo è duro, la stoffa è morbida)</li>
<li>👀 <b>Trasparente</b> o <b>opaco</b>? (il vetro fa passare la luce, il legno no)</li>
<li>🪶 <b>Leggero</b> o <b>pesante</b>?</li>
<li>💥 <b>Fragile</b> (si rompe) o <b>resistente</b>?</li>
<li>💧 <b>Impermeabile</b> (non fa passare l'acqua) o <b>assorbente</b>? (la plastica è impermeabile, la carta assorbe)</li>
<li>🧲 La <b>calamita</b> lo attira? (solo alcuni metalli, come il ferro)</li>
</ul>
<p>⭐ Si sceglie il materiale <b>adatto alla funzione</b>!</p>`
    },
    {
      type: "example",
      title: "Esempio: perché l'ombrello non è di carta? ☂️",
      html: `<p>Un ombrello deve <b>riparare dalla pioggia</b>. Proviamo con materiali diversi:</p>
<ul>
<li>📄 Di <b>carta</b>? ❌ Si bagna, assorbe l'acqua e si rompe.</li>
<li>🔩 Di <b>metallo</b>? ❌ Non fa passare l'acqua, ma è troppo pesante da tenere in mano!</li>
<li>☂️ Di <b>stoffa impermeabile</b> (nylon) con le stecche di metallo? ✅ Leggero, non fa passare l'acqua e si chiude.</li>
</ul>
<p>Ecco come lavorano gli inventori: pensano alla <b>funzione</b> e scelgono il <b>materiale giusto</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio: l'esperimento del galleggiamento 🛁",
      html: `<p>Riempi una bacinella d'acqua e appoggia sopra, uno alla volta: un tappo di sughero, una matita di legno, un cucchiaio di metallo, un tappo di plastica, una biglia di vetro.</p>
<p>Prima di provare, <b>indovina</b>: galleggia o va a fondo? Poi controlla!</p>
<p>🔎 Risultato: il <b>sughero</b>, il <b>legno</b> e il <b>tappo di plastica</b> galleggiano; il <b>cucchiaio di metallo</b> e la <b>biglia di vetro</b> vanno a fondo. Hai appena fatto un esperimento come uno scienziato! 🧪</p>`
    },
    {
      type: "widget",
      title: "Gioco: la calamita 🧲",
      widget: "classify",
      options: {
        groups: ["🧲 La calamita lo attira", "🚫 La calamita NON lo attira"],
        items: [["📎 graffetta di ferro", 0], ["🔩 vite di ferro", 0], ["🪡 ago", 0], ["✏️ matita di legno", 1], ["🧽 gomma", 1], ["📄 foglio di carta", 1], ["🥛 bicchiere di vetro", 1], ["🥤 cannuccia di plastica", 1]]
      },
      caption: "La calamita attira il ferro e l'acciaio. Tutti gli altri materiali no!"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il vetro si fa con la sabbia? 🏖️",
      html: `<p>Il vetro si ottiene <b>sciogliendo la sabbia</b> in forni caldissimi, a circa <b>1500 gradi</b>! La sabbia diventa una pasta liquida e arancione che, raffreddandosi, diventa trasparente. Gli uomini sanno fare il vetro da più di <b>4000 anni</b>. In Italia, sull'isola di <b>Murano</b> vicino a Venezia, i maestri vetrai soffiano il vetro da secoli per fare vasi e lampadari colorati.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la carta è stata inventata in Cina? 📜",
      html: `<p>Circa <b>2000 anni fa</b> in <b>Cina</b> si scriveva su seta o su strisce di bambù. Secondo la tradizione, un funzionario dell'imperatore di nome <b>Cai Lun</b>, nell'anno <b>105</b>, migliorò un modo per fare la carta: mise a bagno corteccia d'albero, stracci e vecchie reti da pesca, li schiacciò fino a fare una poltiglia e la stese ad asciugare. In Italia, a <b>Fabriano</b> (nelle Marche), si fa la carta da più di 700 anni!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la prima plastica ha poco più di 100 anni? 🧪",
      html: `<p>La prima plastica fatta tutta in laboratorio si chiamava <b>bachelite</b> e fu inventata nel <b>1907</b> dal chimico <b>Leo Baekeland</b>. Con la bachelite si facevano telefoni e radio. Oggi la plastica è ovunque, ma è difficile da smaltire: per questo bisogna fare bene la <b>raccolta differenziata</b> ♻️ e usarne di meno.</p>`
    },
    {
      type: "3d",
      title: "Forme degli oggetti in 3D 🧊",
      scene: "solid",
      options: { shapes: ["cylinder", "box", "sphere", "cone"], shape: "cylinder", r: 0.8, h: 2, color: "#94a3b8", labels: false },
      caption: "Anche la forma conta! Il cilindro è come una lattina di metallo, la scatola come un mattoncino di legno, la sfera come una biglia di vetro, il cono come un cono gelato di cialda. Gira i solidi e pensa a un oggetto con quella forma."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i materiali",
      intro: "<p>Ecco altre strade per scoprire oggetti e materiali.</p>",
      tabs: [
        {
          label: "♻️ La raccolta differenziata",
          html: `<p>Quando un oggetto non serve più, lo dividiamo per <b>materiale</b> così può rinascere (si <b>ricicla</b>)!</p>`,
          widget: "classify",
          options: {
            groups: ["📄 Carta", "🧴 Plastica", "🥛 Vetro", "🍌 Organico"],
            items: [["📰 giornale", 0], ["📦 scatola di cartone", 0], ["🧴 flacone del sapone", 1], ["🥤 bottiglia d'acqua di plastica", 1], ["🍾 bottiglia di vetro", 2], ["🫙 vasetto dello yogurt di vetro", 2], ["🍌 buccia di banana", 3], ["🍎 torsolo di mela", 3]]
          }
        },
        {
          label: "🇯🇵 Il furoshiki",
          html: `<p>In <b>Giappone</b> da secoli si usa il <b>furoshiki</b>: un quadrato di <b>stoffa</b> che si annoda per incartare regali, portare la merenda o i libri. Una stoffa sola fa il lavoro di tanti sacchetti di plastica e si usa per anni! 🎁</p>
<p>Lo stesso materiale, tanti oggetti diversi: dipende da come lo pieghi e lo annodi.</p>`
        },
        {
          label: "🐷 I tre porcellini",
          html: `<p>Ricordi la fiaba dei <b>tre porcellini</b>? 🐷🐷🐷</p>
<ul>
<li>🌾 Il primo costruisce la casa di <b>paglia</b>: leggera, ma il lupo la spazza via con un soffio.</li>
<li>🪵 Il secondo la costruisce di <b>legno</b>: più robusta, ma il lupo la butta giù.</li>
<li>🧱 Il terzo la costruisce di <b>mattoni</b>: duri e resistenti. Il lupo non ci riesce!</li>
</ul>
<p>È una fiaba sui <b>materiali</b>: per una casa sicura servono materiali <b>resistenti</b>.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="220" fill="#ecfccb"/>
<path d="M40 110 L100 60 L160 110 Z" fill="#fde047"/><rect x="55" y="110" width="90" height="70" fill="#fef08a"/>
<path d="M240 110 L300 60 L360 110 Z" fill="#92400e"/><rect x="255" y="110" width="90" height="70" fill="#b45309"/>
<path d="M440 110 L500 60 L560 110 Z" fill="#7f1d1d"/><rect x="455" y="110" width="90" height="70" fill="#dc2626"/>
<path d="M455 130 H545 M455 150 H545 M455 170 H545" stroke="#fecaca" stroke-width="2"/>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="100" y="205" fill="#a16207">paglia ❌</text><text x="300" y="205" fill="#78350f">legno ❌</text><text x="500" y="205" fill="#7f1d1d">mattoni ✅</text>
</g>
</svg>`
        },
        {
          label: "🔬 Sotto la lente",
          html: `<p>Prendi una <b>lente d'ingrandimento</b> e guarda da vicino:</p>
<ul>
<li>📄 La <b>carta</b>: vedrai tanti filini intrecciati (sono le fibre del legno).</li>
<li>🧶 La <b>stoffa</b>: fili incrociati come una rete.</li>
<li>🪵 Il <b>legno</b>: le venature, linee che raccontano la crescita dell'albero.</li>
</ul>
<p>Ogni materiale ha un suo «disegno» nascosto!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: oggetti e materiali",
      nodes: [
        { id: "ogg", label: "Oggetto", x: 50, y: 8, color: "#0ea5e9", html: "<p>Una cosa costruita dalle persone.</p>", why: "<p>Fin dalla preistoria gli esseri umani costruiscono oggetti: i primi furono strumenti di pietra scheggiata, più di 2 milioni di anni fa.</p>" },
        { id: "funz", label: "Funzione", x: 20, y: 30, color: "#22c55e", html: "<p>A cosa serve l'oggetto.</p>", why: "<p>Ogni oggetto nasce da un bisogno: tagliare, trasportare, ripararsi. Chi progetta parte sempre da «a cosa deve servire?».</p>" },
        { id: "parti", label: "Parti", x: 50, y: 32, color: "#eab308", html: "<p>Pezzi che compongono l'oggetto.</p>", why: "<p>Ogni parte ha un compito: la lama taglia, il manico si impugna. Smontare un oggetto (con un adulto!) aiuta a capirlo.</p>" },
        { id: "mat", label: "Materiale", x: 80, y: 30, color: "#a16207", html: "<p>Di che cosa è fatto.</p>", why: "<p>I materiali vengono dalla natura (legno, lana, sabbia, minerali) o sono trasformati dall'uomo (plastica, vetro, carta).</p>" },
        { id: "nat", label: "Naturali", x: 66, y: 60, color: "#16a34a", html: "<p>Legno, lana, cotone, pietra.</p>", why: "<p>Si trovano in natura e si usano quasi come sono. Sono stati i primi materiali usati dall'uomo.</p>" },
        { id: "art", label: "Trasformati dall'uomo", x: 92, y: 60, color: "#8b5cf6", html: "<p>Plastica, vetro, carta, metalli lavorati.</p>", why: "<p>Si ottengono trasformando materie prime: la sabbia diventa vetro nel forno, il legno diventa carta, il petrolio diventa plastica (bachelite, 1907).</p>" },
        { id: "prop", label: "Proprietà", x: 35, y: 62, color: "#ef4444", html: "<p>Duro, morbido, trasparente, fragile, impermeabile…</p>", why: "<p>Si scoprono con i sensi e con le prove (galleggia? si piega? la calamita lo attira?). È il metodo degli scienziati: osservare e provare.</p>" },
        { id: "scelta", label: "Materiale adatto", x: 30, y: 90, color: "#ec4899", html: "<p>Si sceglie il materiale giusto per la funzione.</p>", why: "<p>Una pentola di metallo conduce il calore; il suo manico di plastica o legno no, così non ci scottiamo.</p>" },
        { id: "ricicla", label: "Riciclo ♻️", x: 75, y: 90, color: "#14b8a6", html: "<p>Dividere i rifiuti per materiale.</p>", why: "<p>Separando carta, plastica, vetro e metallo, i materiali possono essere riusati per fare nuovi oggetti, consumando meno risorse.</p>" }
      ],
      edges: [
        ["ogg", "funz", "ha"], ["ogg", "parti", "è fatto di"], ["ogg", "mat", "è fatto di"], ["mat", "nat", ""], ["mat", "art", ""], ["mat", "prop", "ha"], ["funz", "scelta", ""], ["prop", "scelta", "decidono"], ["art", "ricicla", "a fine vita"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: proprietà",
      questions: [
        { type: "mc", q: "Un materiale che fa passare la luce è…", options: ["trasparente", "opaco", "morbido"], answer: 0, explain: "Trasparente, come il vetro." },
        { type: "mc", q: "La calamita attira…", options: ["la graffetta di ferro", "la matita di legno", "il foglio di carta"], answer: 0, explain: "La calamita attira il ferro." },
        { type: "tf", q: "Il vetro è fragile.", answer: true, explain: "Se cade si può rompere." }
      ]
    }
  ],
  glossary: [
    { t: "Oggetto", d: "Una cosa costruita dalle persone per fare qualcosa." },
    { t: "Funzione", d: "A cosa serve un oggetto." },
    { t: "Materiale", d: "Ciò di cui è fatto un oggetto (legno, plastica, metallo…)." },
    { t: "Proprietà", d: "Le caratteristiche di un materiale: duro, morbido, trasparente…" },
    { t: "Trasparente / opaco", d: "Fa passare la luce / non la fa passare." },
    { t: "Fragile", d: "Che si rompe facilmente." },
    { t: "Impermeabile", d: "Che non fa passare l'acqua." },
    { t: "Riciclare", d: "Usare di nuovo un materiale per fare altri oggetti." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "La funzione delle forbici è…", options: ["tagliare", "scrivere", "incollare"], answer: 0, explain: "Le forbici servono per tagliare." },
      { type: "mc", q: "Il quaderno è fatto di…", options: ["carta", "vetro", "metallo"], answer: 0, explain: "Il quaderno è di carta." },
      { type: "mc", q: "Il vetro si fa con…", options: ["la lana", "la sabbia", "il legno"], answer: 1, explain: "Sabbia fusa in forni caldissimi." },
      { type: "tf", q: "La stoffa è dura come il metallo.", answer: false, explain: "La stoffa è morbida e si piega." },
      { type: "mc", q: "Perché il manico della pentola è spesso di plastica o legno?", options: ["Per non scottarsi", "Per farla galleggiare", "Perché è trasparente"], answer: 0, explain: "Plastica e legno non si scaldano come il metallo." },
      { type: "text", q: "Come si chiama il materiale che viene dagli alberi e con cui si fanno sedie e tavoli?", answer: ["legno", "il legno"], explain: "Il legno." },
      { type: "mc", q: "Quale oggetto va a fondo nell'acqua?", options: ["tappo di sughero", "cucchiaio di metallo", "matita di legno"], answer: 1, explain: "Il cucchiaio di metallo affonda." },
      { type: "tf", q: "La plastica esiste in natura negli alberi.", answer: false, explain: "La plastica è fatta dall'uomo, soprattutto dal petrolio." },
      { type: "mc", q: "In quale bidone va la bottiglia di vetro?", options: ["carta", "vetro", "organico"], answer: 1, explain: "Va nel vetro, così può diventare un nuovo barattolo." },
      { type: "mc", q: "Il terzo porcellino costruisce la casa di…", options: ["paglia", "legno", "mattoni"], answer: 2, explain: "I mattoni sono duri e resistenti." },
      { type: "mc", q: "Dove fu inventata la carta?", options: ["in Cina", "in Inghilterra", "in America"], answer: 0, explain: "In Cina, circa 2000 anni fa." },
      { type: "order", q: "Metti in ordine come lavora un inventore:", items: ["pensa alla funzione dell'oggetto", "sceglie il materiale adatto", "costruisce l'oggetto", "lo prova e lo migliora"], explain: "Prima la funzione, poi il materiale, poi si costruisce e si prova." }
    ]
  }
});
