TOPIC('it', {
  id: "p2-ita-articoli",
  title: "Gli articoli",
  intro: "Gli <b>articoli</b> sono paroline che camminano sempre <b>davanti al nome</b>, come un cagnolino al guinzaglio 🐕: <b>il</b> sole, <b>la</b> luna, <b>uno</b> zaino. Impariamo a sceglierli bene!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è l'articolo",
      html: `<p>L'<b>articolo</b> è una parolina che si mette <b>davanti al nome</b>.</p>
<p>Ci dice se il nome è <b>maschile</b> o <b>femminile</b>, <b>singolare</b> o <b>plurale</b>.</p>
<ul>
<li><b>il</b> gatto → maschile, singolare 🐈</li>
<li><b>le</b> rose → femminile, plurale 🌹🌹</li>
</ul>
<p>Ci sono due famiglie di articoli: i <b>determinativi</b> e gli <b>indeterminativi</b>.</p>`
    },
    {
      type: "text",
      title: "Articoli determinativi: una cosa precisa",
      html: `<p>Si usano quando parliamo di qualcosa di <b>preciso</b>, che conosciamo già: «Passami <b>la</b> matita» (quella lì, la tua!).</p>
<table>
<tr><th></th><th>Singolare</th><th>Plurale</th></tr>
<tr><td><b>Maschile</b></td><td><b>il</b> cane<br><b>lo</b> zaino<br><b>l'</b>albero</td><td><b>i</b> cani<br><b>gli</b> zaini<br><b>gli</b> alberi</td></tr>
<tr><td><b>Femminile</b></td><td><b>la</b> casa<br><b>l'</b>ape</td><td><b>le</b> case<br><b>le</b> api</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Articoli indeterminativi: una cosa qualsiasi",
      html: `<p>Si usano quando parliamo di qualcosa di <b>non preciso</b>, uno qualsiasi: «Mi presti <b>una</b> matita?» (una qualunque va bene!).</p>
<ul>
<li><b>un</b> cane, <b>un</b> albero (maschile)</li>
<li><b>uno</b> zaino, <b>uno</b> scoiattolo (maschile, davanti a Z e S + consonante)</li>
<li><b>una</b> casa (femminile)</li>
<li><b>un'</b>ape (femminile davanti a vocale)</li>
</ul>
<p>⚠️ Gli indeterminativi <b>non hanno il plurale</b>! Al loro posto diciamo «<b>dei</b> cani», «<b>degli</b> zaini», «<b>delle</b> case» oppure «alcuni», «alcune».</p>`
    },
    {
      type: "svg",
      title: "La tabella degli articoli",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<rect x="20" y="20" width="270" height="260" rx="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="310" y="20" width="270" height="260" rx="16" fill="#fce7f3" stroke="#be185d" stroke-width="3"/>
<text x="155" y="55" font-size="22" text-anchor="middle" font-weight="bold" fill="#1e3a8a">DETERMINATIVI</text>
<text x="445" y="55" font-size="22" text-anchor="middle" font-weight="bold" fill="#831843">INDETERMINATIVI</text>
<text x="155" y="80" font-size="16" text-anchor="middle" fill="#1e40af">una cosa precisa 🎯</text>
<text x="445" y="80" font-size="16" text-anchor="middle" fill="#9d174d">una cosa qualsiasi</text>
<g font-size="26" font-weight="bold">
<text x="45" y="130" fill="#2563eb">il  lo  l'</text>
<text x="190" y="130" fill="#2563eb">i  gli</text>
<text x="45" y="200" fill="#db2777">la  l'</text>
<text x="190" y="200" fill="#db2777">le</text>
<text x="340" y="130" fill="#2563eb">un  uno</text>
<text x="340" y="200" fill="#db2777">una  un'</text>
</g>
<g font-size="15" fill="#475569">
<text x="45" y="155">maschile singolare</text>
<text x="190" y="155">plurale</text>
<text x="45" y="225">femminile singolare</text>
<text x="190" y="225">plurale</text>
<text x="340" y="155">maschile</text>
<text x="340" y="225">femminile</text>
</g>
<text x="445" y="265" font-size="16" text-anchor="middle" fill="#9d174d">niente plurale!</text>
<text x="155" y="265" font-size="16" text-anchor="middle" fill="#1e40af">blu = maschile, rosa = femminile</text>
</svg>`,
      caption: "A sinistra gli articoli per le cose precise, a destra quelli per le cose qualsiasi."
    },
    {
      type: "remember",
      title: "Il, lo o l'? La regola d'oro",
      html: `<p>Per i nomi <b>maschili</b> guarda <b>come comincia</b> il nome:</p>
<ul>
<li>con una <b>vocale</b> → <b>l'</b> / <b>gli</b> / <b>un</b>: l'albero, gli alberi, un albero</li>
<li>con <b>Z</b>, <b>S + consonante</b>, <b>GN</b>, <b>PS</b>, <b>X</b>, <b>Y</b> → <b>lo</b> / <b>gli</b> / <b>uno</b>: lo zaino, lo scoiattolo, lo gnomo, lo psicologo, lo xilofono, lo yogurt</li>
<li>con <b>tutte le altre</b> consonanti → <b>il</b> / <b>i</b> / <b>un</b>: il cane, i cani, un cane</li>
</ul>`
    },
    {
      type: "widget",
      title: "Gioco: il, lo o l'?",
      widget: "classify",
      options: { groups: ["il", "lo", "l'"], items: [
        ["🐶 cane", 0], ["🎒 zaino", 1], ["🌳 albero", 2], ["⚽ pallone", 0],
        ["🐿️ scoiattolo", 1], ["🐘 elefante", 2], ["🍦 gelato", 0], ["🥛 yogurt", 1],
        ["☂️ ombrello", 2], ["🧦 calzino", 0], ["🧙 gnomo", 1], ["🏝️ isolotto", 2]
      ] },
      caption: "Guarda la prima lettera di ogni nome e scegli l'articolo giusto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: scegli l'articolo",
      questions: [
        { type: "mc", q: "… zucchero", options: ["il", "lo", "l'"], answer: 1, explain: "Comincia con Z: lo zucchero." },
        { type: "mc", q: "… amica", options: ["un", "un'", "uno"], answer: 1, explain: "Amica è femminile e comincia per vocale: un'amica." },
        { type: "tf", q: "Si dice «i zaini».", answer: false, explain: "Si dice «gli zaini», perché al singolare è «lo zaino»." }
      ]
    },
    {
      type: "example",
      title: "Esempio: la storia del gatto ✨",
      html: `<p>«C'era <b>un</b> gatto. <b>Il</b> gatto viveva in <b>una</b> casa blu.»</p>
<p>Hai notato? La prima volta il gatto è nuovo, non lo conosciamo: <b>un</b> gatto (indeterminativo). La seconda volta sappiamo già quale: <b>il</b> gatto (determinativo)!</p>
<p>Le fiabe cominciano spesso così: «C'era <b>una</b> volta <b>un</b> re…».</p>`
    },
    {
      type: "example",
      title: "Esempio: al supermercato 🛒",
      html: `<p>La lista della spesa di papà:</p>
<ul>
<li><b>lo</b> yogurt e <b>gli</b> spinaci</li>
<li><b>il</b> pane e <b>i</b> biscotti</li>
<li><b>la</b> pasta e <b>le</b> uova</li>
<li><b>l'</b>acqua e <b>l'</b>olio</li>
</ul>
<p>Al banco papà chiede: «Vorrei <b>un</b> chilo di mele e <b>uno</b> spicchio d'aglio».</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>I Romani <b>non usavano gli articoli</b>! In latino si diceva solo <i>canis</i> per «il cane» o «un cane».</p>
<p>Gli articoli italiani sono nati dalle parole latine <i>ille</i>, <i>illa</i> («quello», «quella») e <i>unus</i>, <i>una</i> («uno»). A forza di usarle davanti ai nomi, si sono accorciate: <i>ille</i> → il, lo; <i>illa</i> → la. 🏛️</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In <b>rumeno</b> l'articolo determinativo si attacca <b>alla fine</b> della parola: <i>lup</i> = lupo, <i>lupul</i> = il lupo! 🐺</p>
<p>E in <b>russo</b>? Gli articoli <b>non esistono</b> proprio.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli articoli",
      intro: "Gli articoli si imparano soprattutto ascoltando. Ecco altre strade per allenare l'orecchio.",
      tabs: [
        {
          label: "🎩 Il cappello",
          html: `<p>Immagina che ogni nome abbia bisogno di un <b>cappello</b> 🎩 della taglia giusta.</p>
<ul>
<li><b>il</b> è il cappello normale, per i maschili che cominciano con quasi tutte le consonanti.</li>
<li><b>lo</b> è il cappello «rinforzato», per i nomi che cominciano con suoni duri da dire: Z, S + consonante, GN…</li>
<li><b>l'</b> è il berretto piccolo, per i nomi che cominciano con una vocale.</li>
</ul>
<p>Prova a dire «il zaino»: la lingua inciampa! «Lo zaino» scivola via. L'articolo giusto è quello che <b>suona meglio</b>.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f5f3ff"/>
<rect x="60" y="40" width="100" height="70" fill="#1f2937"/><rect x="40" y="105" width="140" height="15" fill="#1f2937"/>
<text x="110" y="85" font-size="30" text-anchor="middle" fill="#ffffff" font-weight="bold">IL</text>
<text x="110" y="165" font-size="26" text-anchor="middle" fill="#1f2937">cane</text>
<rect x="250" y="25" width="100" height="85" fill="#7c3aed"/><rect x="230" y="105" width="140" height="18" fill="#7c3aed"/>
<rect x="250" y="80" width="100" height="10" fill="#fde047"/>
<text x="300" y="70" font-size="30" text-anchor="middle" fill="#ffffff" font-weight="bold">LO</text>
<text x="300" y="165" font-size="26" text-anchor="middle" fill="#1f2937">zaino</text>
<path d="M450 110 Q490 50 530 110 Z" fill="#ef4444"/><circle cx="490" cy="62" r="8" fill="#fde047"/>
<text x="490" y="100" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">L'</text>
<text x="490" y="165" font-size="26" text-anchor="middle" fill="#1f2937">albero</text>
</svg>`
        },
        {
          label: "🌍 Nelle altre lingue",
          html: `<ul>
<li>🇬🇧 <b>Inglese</b>: un solo determinativo, <b>the</b>, per tutto! Indeterminativi: <b>a</b> / <b>an</b> (a cat, an apple).</li>
<li>🇫🇷 <b>Francese</b>: le, la, l', les; un, une.</li>
<li>🇩🇪 <b>Tedesco</b>: der, die, das… e cambiano ancora a seconda della frase!</li>
<li>🇷🇴 <b>Rumeno</b>: l'articolo va in fondo: <i>casa</i> = la casa, <i>o casă</i> = una casa.</li>
<li>🇷🇺 <b>Russo</b>: niente articoli.</li>
</ul>
<p>L'italiano sta nel mezzo: abbastanza articoli da dirci genere e numero, ma con regole che si sentono a orecchio.</p>`
        },
        {
          label: "🔗 Abbina",
          html: `<p>Abbina ogni nome al suo articolo determinativo.</p>`,
          widget: "match",
          options: { pairs: [
            ["gli", "gnomi"],
            ["le", "farfalle"],
            ["i", "libri"],
            ["lo", "struzzo"],
            ["la", "tartaruga"],
            ["l'", "orso"]
          ] }
        },
        {
          label: "🃏 Singolare e plurale",
          html: `<p>Leggi l'articolo con il nome al singolare e prova a dire il plurale.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "il fiore", back: "i fiori" },
            { front: "lo zaino", back: "gli zaini" },
            { front: "l'albero", back: "gli alberi" },
            { front: "la stella", back: "le stelle" },
            { front: "l'ape", back: "le api" },
            { front: "lo specchio", back: "gli specchi" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa degli articoli",
      nodes: [
        { id: "articolo", label: "Articolo", x: 50, y: 8, color: "#2563eb", html: "Parolina che sta davanti al nome.", why: "Il nome viene dal latino <i>articulus</i>, «piccola giuntura»: come le articolazioni collegano le ossa, l'articolo collega il nome al resto della frase." },
        { id: "det", label: "Determinativo", x: 25, y: 32, color: "#16a34a", html: "il, lo, la, l', i, gli, le: per cose precise e conosciute.", why: "«Determinare» vuol dire «indicare con precisione». Viene dal latino <i>ille</i>, «quello»: «il gatto» era in origine «quel gatto»." },
        { id: "indet", label: "Indeterminativo", x: 75, y: 32, color: "#dc2626", html: "un, uno, una, un': per cose qualsiasi o nuove.", why: "Viene dal numero latino <i>unus</i>, «uno»: «un gatto» vuol dire «un gatto fra tanti». Per questo non ha plurale: «uno» non può essere tanti!" },
        { id: "genere", label: "Genere", x: 12, y: 60, color: "#a855f7", html: "L'articolo ci dice se il nome è maschile o femminile.", why: "Nomi come «cantante» o «insegnante» sono uguali al maschile e al femminile: è l'articolo (il/la cantante) a dirci chi è." },
        { id: "numero", label: "Numero", x: 38, y: 60, color: "#0ea5e9", html: "L'articolo ci dice se il nome è singolare o plurale.", why: "Con i nomi invariabili (la città / le città) solo l'articolo ci dice quante sono." },
        { id: "lo", label: "Lo / gli / uno", x: 62, y: 60, color: "#f59e0b", html: "Davanti a Z, S + consonante, GN, PS, X, Y.", why: "È una questione di suono: «il sport» o «il zaino» sono difficili da pronunciare. La vocale di «lo» fa da cuscinetto tra le consonanti." },
        { id: "elisione", label: "L' e un'", x: 88, y: 60, color: "#14b8a6", html: "Davanti a vocale: l'albero, un'ape.", why: "Due vocali vicine si scontrano: la vocale dell'articolo cade e resta l'apostrofo (elisione)." },
        { id: "latino", label: "Nati dal latino", x: 50, y: 88, color: "#64748b", html: "Il latino non aveva articoli: sono nati dopo.", why: "Nel latino parlato del tardo Impero e del Medioevo la gente cominciò a usare <i>ille</i> e <i>unus</i> davanti ai nomi. Lo stesso è successo in francese, spagnolo, rumeno: tutte lingue «figlie» del latino." }
      ],
      edges: [
        ["articolo", "det", "può essere"],
        ["articolo", "indet", "può essere"],
        ["det", "genere", "indica"],
        ["det", "numero", "indica"],
        ["det", "lo", "forme speciali"],
        ["indet", "elisione", "forme speciali"],
        ["latino", "det", "da ille"],
        ["latino", "indet", "da unus"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: determinativo o indeterminativo?",
      questions: [
        { type: "mc", q: "In «una mela» l'articolo è…", options: ["determinativo", "indeterminativo"], answer: 1, explain: "Una mela qualsiasi: indeterminativo." },
        { type: "mc", q: "Qual è il plurale di «l'albero»?", options: ["i alberi", "gli alberi", "le alberi"], answer: 1, explain: "Davanti a vocale il plurale maschile è «gli»." },
        { type: "tf", q: "«uno» ha il plurale.", answer: false, explain: "Gli indeterminativi non hanno plurale: si usa dei, degli, delle." }
      ]
    }
  ],
  glossary: [
    { t: "Articolo", d: "Parolina che sta davanti al nome e ne indica genere e numero." },
    { t: "Articolo determinativo", d: "il, lo, la, l', i, gli, le: indica una cosa precisa." },
    { t: "Articolo indeterminativo", d: "un, uno, una, un': indica una cosa qualsiasi." },
    { t: "Genere", d: "Maschile o femminile." },
    { t: "Numero", d: "Singolare o plurale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "… sole", options: ["il", "lo", "la"], answer: 0, explain: "Maschile, comincia con S + vocale: il sole." },
      { type: "mc", q: "… specchio", options: ["il", "lo", "l'"], answer: 1, explain: "S + consonante: lo specchio." },
      { type: "mc", q: "… isola", options: ["la", "l'", "lo"], answer: 1, explain: "Femminile che comincia per vocale: l'isola." },
      { type: "mc", q: "Plurale di «lo gnomo»:", options: ["i gnomi", "gli gnomi", "le gnome"], answer: 1, explain: "Lo → gli: gli gnomi." },
      { type: "tf", q: "«il» è un articolo indeterminativo.", answer: false, explain: "«Il» è determinativo: indica una cosa precisa." },
      { type: "tf", q: "In «uno zaino» l'articolo è indeterminativo.", answer: true, explain: "Uno zaino qualsiasi: indeterminativo." },
      { type: "mc", q: "… orso", options: ["un", "un'", "uno"], answer: 0, explain: "Orso è maschile: un orso, senza apostrofo." },
      { type: "mc", q: "Plurale di «la farfalla»:", options: ["le farfalle", "i farfalle", "gli farfalle"], answer: 0, explain: "La → le." },
      { type: "text", q: "Quale articolo determinativo va davanti a «zebra»?", answer: ["la"], explain: "Zebra è femminile: la zebra. (Lo vale solo per i maschili!)" },
      { type: "text", q: "Quale articolo indeterminativo va davanti a «scoiattolo»?", answer: ["uno"], explain: "S + consonante: uno scoiattolo." },
      { type: "order", q: "Completa la fiaba mettendo in ordine.", items: ["C'era una volta", "un re.", "Il re", "aveva una figlia."], explain: "Prima «un re» (nuovo), poi «il re» (ormai lo conosciamo)." }
    ]
  }
});
