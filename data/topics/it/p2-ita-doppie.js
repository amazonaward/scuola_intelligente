TOPIC('it', {
  id: "p2-ita-doppie",
  title: "Le doppie",
  intro: "<b>Pala</b> o <b>palla</b>? 🪏⚽ Basta una lettera in più e la parola cambia significato! Impariamo a <b>sentire</b> e a <b>scrivere</b> le consonanti doppie.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cosa sono le doppie",
      html: `<p>Una <b>doppia</b> è una <b>consonante scritta due volte</b>, una vicina all'altra.</p>
<p>Esempi: pa<b>ll</b>a, ga<b>tt</b>o, no<b>nn</b>o, ca<b>pp</b>ello, pi<b>zz</b>a. 🍕</p>
<p>Quando parliamo, la doppia si sente <b>più forte e più lunga</b>. La voce fa una piccola <b>fermata</b> prima di ripartire.</p>
<p>Prova a dire piano: <b>pa-la</b>… e poi <b>pal-la</b>. Senti la differenza? 👂</p>`
    },
    {
      type: "svg",
      title: "Una lettera cambia tutto!",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<rect x="20" y="20" width="270" height="260" rx="20" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
<rect x="310" y="20" width="270" height="260" rx="20" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
<rect x="140" y="60" width="14" height="110" fill="#92400e"/>
<path d="M120 170 L174 170 L166 230 Q147 250 128 230 Z" fill="#64748b" stroke="#334155" stroke-width="3"/>
<circle cx="445" cy="130" r="65" fill="#ffffff" stroke="#111827" stroke-width="4"/>
<polygon points="445,105 468,122 459,149 431,149 422,122" fill="#111827"/>
<line x1="445" y1="105" x2="445" y2="68" stroke="#111827" stroke-width="3"/>
<line x1="468" y1="122" x2="505" y2="110" stroke="#111827" stroke-width="3"/>
<line x1="422" y1="122" x2="385" y2="110" stroke="#111827" stroke-width="3"/>
<line x1="459" y1="149" x2="480" y2="185" stroke="#111827" stroke-width="3"/>
<line x1="431" y1="149" x2="410" y2="185" stroke="#111827" stroke-width="3"/>
<text x="155" y="270" font-size="44" text-anchor="middle" font-weight="bold" fill="#92400e">PA<tspan fill="#2563eb">L</tspan>A</text>
<text x="445" y="270" font-size="44" text-anchor="middle" font-weight="bold" fill="#166534">PA<tspan fill="#dc2626">LL</tspan>A</text>
</svg>`,
      caption: "Con una L è la pala per scavare; con due L è la palla per giocare."
    },
    {
      type: "text",
      title: "Come si fa a sentire una doppia",
      html: `<ol>
<li>Di' la parola <b>piano piano</b>, come una lumaca 🐌.</li>
<li>Batti le mani a ogni <b>sillaba</b>: gat-to 👏👏.</li>
<li>Se la voce si <b>ferma un attimo</b> e la consonante si sente due volte (gat… to), c'è la doppia!</li>
<li>Ascolta anche la <b>vocale prima</b>: davanti a una doppia è <b>più corta</b>. Nella parola <b>pala</b> la prima A è lunga, in <b>palla</b> è corta.</li>
</ol>
<p>Quando dividi in sillabe, le due consonanti uguali si <b>separano</b>: pal-la, non-no, tet-to, piz-za.</p>`
    },
    {
      type: "widget",
      title: "Gioco: coppie di parole",
      widget: "match",
      options: { pairs: [
        ["pala", "🪏 serve per scavare"],
        ["palla", "⚽ serve per giocare"],
        ["sete", "💧 voglia di bere"],
        ["sette", "7️⃣ un numero"],
        ["nono", "9️⃣ che viene dopo l'ottavo"],
        ["nonno", "👴 il papà di mamma o di papà"],
        ["capello", "💇 cresce sulla testa"],
        ["cappello", "🎩 si mette sulla testa"]
      ] },
      caption: "Abbina ogni parola al suo significato. Attento alle doppie!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: senti la doppia?",
      questions: [
        { type: "mc", q: "Quale parola ha la doppia?", options: ["casa", "gatto", "mare"], answer: 1, explain: "Gat-to: la T si sente due volte." },
        { type: "mc", q: "Come si scrive il numero 7?", options: ["sete", "sette", "setté"], answer: 1, explain: "Il numero è «sette», con due T. «Sete» è la voglia di bere." },
        { type: "tf", q: "Le doppie si dividono in due sillabe diverse: pal-la.", answer: true, explain: "Una consonante va con la prima sillaba e l'altra con la seconda." }
      ]
    },
    {
      type: "example",
      title: "Esempio: il dettato di Luca ✏️",
      html: `<p>La maestra detta: «Il <b>nonno</b> porta la <b>palla</b> al <b>gatto</b>».</p>
<p>Luca scrive: «Il nono porta la pala al gato».</p>
<p>Che cosa è successo? Il nonno è diventato il <b>nono</b> (9°) e porta una <b>pala</b> per scavare! 😂</p>
<p>Luca rilegge a voce alta, batte le mani sulle sillabe e corregge: <b>non-no</b>, <b>pal-la</b>, <b>gat-to</b>. ✅</p>`
    },
    {
      type: "text",
      title: "Piccole regole utili",
      html: `<ul>
<li>Le parole che finiscono in <b>-zione</b> hanno <b>una sola Z</b>: stazione, attenzione, lezione, colazione.</li>
<li>Ma tante altre parole hanno la <b>ZZ</b>: pizza, pazzo, ragazzo, piazza, tazza.</li>
<li>La <b>Q</b> quasi mai si raddoppia: al suo posto si scrive <b>CQ</b>: a<b>cq</b>ua, a<b>cq</b>uario. L'unica parola con <b>QQ</b> è <b>soqquadro</b>!</li>
<li>La <b>H</b> non si raddoppia mai.</li>
<li>Quando uniamo due paroline, a volte nasce una doppia: da + vero = <b>davvero</b>, a + pena = <b>appena</b>, e + pure = <b>eppure</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Gioco: doppia o no?",
      widget: "classify",
      options: { groups: ["Con la doppia", "Senza doppia"], items: [
        ["🐱 gatto", 0], ["🏠 casa", 1], ["🍕 pizza", 0], ["🌙 luna", 1],
        ["🎩 cappello", 0], ["🐟 pesce", 1], ["🛏️ letto", 0], ["🌹 rosa", 1],
        ["🥛 latte", 0], ["🐝 ape", 1], ["☕ tazza", 0], ["🌳 albero", 1]
      ] },
      caption: "Di' ogni parola piano e metti le carte nel gruppo giusto."
    },
    {
      type: "example",
      title: "Esempio: il messaggio per la nonna 💌",
      html: `<p>Sofia scrive alla nonna. Trova i 3 errori!</p>
<p style="font-size:1.2em">«Cara nona, ogi ho mangiato la pizza e ho bevuto il late. Ti voglio tanto bene. Ciao, a domani! Sofia»</p>
<p>Soluzione: <b>nonna</b> (non-na), <b>oggi</b> (og-gi), <b>latte</b> (lat-te). Attenzione: «pizza», «voglio» e «tanto» erano già giuste! 😉</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Le doppie italiane vengono spesso dal <b>latino</b>, la lingua degli antichi Romani. 🏛️</p>
<p>In latino si diceva <i>septem</i>, <i>noctem</i>, <i>factum</i>. Col tempo la P e la C si sono "trasformate" nella lettera vicina: <b>sette</b>, <b>notte</b>, <b>fatto</b>. Ecco perché ci sono tante TT!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In molte parti d'Italia, soprattutto al Centro e al Sud, si sentono doppie anche dove non si scrivono: «a casa» si pronuncia quasi «a <b>cc</b>asa»! 🗣️</p>
<p>Gli studiosi lo chiamano <b>raddoppiamento sintattico</b>. Ecco perché, quando scrivi, devi pensare alla parola da sola.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La doppia è una consonante scritta <b>due volte</b>: si sente <b>più forte</b>.</li>
<li>Per sentirla: parla <b>piano</b> e <b>batti le mani</b> sulle sillabe.</li>
<li>Nelle sillabe le doppie si <b>dividono</b>: gat-to.</li>
<li>Una doppia in più o in meno può <b>cambiare il significato</b>: pala/palla, caro/carro.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per sentire le doppie",
      intro: "Se non riesci ancora a sentire le doppie, prova una di queste strade. Ognuno ha la sua!",
      tabs: [
        {
          label: "🥁 Il tamburo",
          html: `<p>Usa la parola come un ritmo sul tamburo.</p>
<ul>
<li><b>pa – la</b>: due colpi uguali, lisci. 🥁 🥁</li>
<li><b>pal – STOP – la</b>: un colpo, una piccola pausa, un colpo forte. 🥁 ✋ 🥁</li>
</ul>
<p>La pausa è il "posto" della seconda consonante. Se senti la pausa, scrivi la doppia!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf4ff"/>
<text x="30" y="70" font-size="30" font-weight="bold" fill="#7e22ce">pala</text>
<circle cx="200" cy="60" r="24" fill="#a855f7"/><circle cx="270" cy="60" r="24" fill="#a855f7"/>
<text x="30" y="170" font-size="30" font-weight="bold" fill="#be185d">palla</text>
<circle cx="200" cy="160" r="24" fill="#ec4899"/>
<rect x="240" y="145" width="60" height="30" rx="8" fill="#fde68a" stroke="#ca8a04" stroke-width="2"/>
<text x="270" y="167" font-size="16" text-anchor="middle" fill="#854d0e">pausa</text>
<circle cx="340" cy="160" r="30" fill="#be185d"/>
<text x="420" y="70" font-size="20" fill="#7e22ce">liscio</text>
<text x="420" y="170" font-size="20" fill="#be185d">fermata + forte</text>
</svg>`
        },
        {
          label: "🪀 L'elastico",
          html: `<p>Immagina che la consonante sia un <b>elastico</b>.</p>
<p>Nella parola <b>caro</b> l'elastico è corto: la R passa veloce.</p>
<p>Nella parola <b>carro</b> l'elastico si <b>allunga</b>: la R dura di più, quasi «carrrro» 🚜. Quando un suono si allunga, scrivilo due volte!</p>
<p>Funziona benissimo con le consonanti che si possono "tenere": L, M, N, R, S, F. Prova: mamma (mmmm), nonno (nnnn), rosso (ssss).</p>`
        },
        {
          label: "🌍 Nelle altre lingue",
          html: `<p>Non tutte le lingue hanno doppie che si sentono!</p>
<ul>
<li>🇬🇧 In <b>inglese</b> si scrivono le doppie (apple, letter), ma <b>non si sentono</b>: si pronunciano come una consonante sola.</li>
<li>🇯🇵 In <b>giapponese</b> c'è un piccolo segno, <b>っ</b>, che vuol dire proprio "fai una pausa e raddoppia la consonante dopo": <i>kitte</i> (francobollo).</li>
<li>🇫🇮 In <b>finlandese</b>, come in italiano, le doppie cambiano il significato: <i>tuli</i> (fuoco) e <i>tulli</i> (dogana).</li>
</ul>
<p>Quindi l'italiano è una lingua "musicale": le doppie si devono <b>ascoltare</b>!</p>`
        },
        {
          label: "🃏 Carte da girare",
          html: `<p>Leggi la parola sul davanti, pensa se ha la doppia, poi gira la carta per controllare.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "🐱 ga_o", back: "gatto (gat-to)" },
            { front: "👴 no_o", back: "nonno (non-no)" },
            { front: "🛏️ le_o", back: "letto (let-to)" },
            { front: "🌙 lu_a", back: "luna (una sola N)" },
            { front: "🥛 la_e", back: "latte (lat-te)" },
            { front: "🚂 stazio_e", back: "stazione (una Z sola in -zione)" },
            { front: "💧 a_ua", back: "acqua (con CQ)" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle doppie: tocca un nodo e scopri il perché",
      nodes: [
        { id: "suono", label: "Suoni della parola", x: 50, y: 8, color: "#2563eb", html: "Ogni parola è fatta di suoni che scriviamo con le lettere.", why: "In italiano si scrive quasi sempre come si pronuncia: per questo ascoltare bene i suoni aiuta a scrivere bene." },
        { id: "consonante", label: "Consonante", x: 22, y: 30, color: "#16a34a", html: "Le lettere come B, C, L, M, T: da sole «suonano insieme» a una vocale.", why: "Il nome viene dal latino <i>cum sonare</i>, «suonare insieme»: le consonanti hanno bisogno delle vocali per farsi sentire bene." },
        { id: "doppia", label: "Doppia", x: 50, y: 34, color: "#dc2626", html: "Una consonante scritta due volte: palla, gatto, nonno.", why: "La scriviamo due volte perché la pronunciamo più lunga e più forte. La lettera doppia è un modo di «disegnare» un suono lungo." },
        { id: "significato", label: "Cambia il significato", x: 80, y: 30, color: "#f59e0b", html: "pala/palla, caro/carro, sete/sette, nono/nonno.", why: "In italiano la durata della consonante è importante: due parole uguali tranne la doppia possono voler dire cose diversissime. Gli studiosi chiamano queste coppie «coppie minime»." },
        { id: "sillabe", label: "Sillabe", x: 22, y: 60, color: "#a855f7", html: "Le doppie si dividono tra due sillabe: pal-la, piz-za.", why: "Quando diciamo una doppia, la prima consonante chiude una sillaba e la seconda apre quella dopo: per questo c'è quella piccola «fermata»." },
        { id: "latino", label: "Dal latino", x: 50, y: 62, color: "#64748b", html: "Molte doppie nascono da parole latine: septem → sette, noctem → notte.", why: "Nel passaggio dal latino all'italiano, due consonanti vicine diverse (PT, CT) sono diventate uguali (TT): i linguisti chiamano questo fenomeno <b>assimilazione</b>." },
        { id: "regole", label: "Regole ed eccezioni", x: 80, y: 62, color: "#0ea5e9", html: "-zione con una Z; CQ al posto di QQ; la H non si raddoppia; soqquadro è l'unica con QQ.", why: "Sono abitudini di scrittura fissate nei secoli da scrittori e grammatici, per esempio nel primo grande vocabolario italiano, quello dell'Accademia della Crusca (1612)." },
        { id: "fonosintattico", label: "Raddoppiamento sintattico", x: 50, y: 88, color: "#14b8a6", html: "In molte regioni «a casa» si pronuncia «a ccasa», ma si scrive con una C.", why: "È un'eredità del latino parlato: alcune parole brevi (a, da, tre, è…) fanno raddoppiare il suono iniziale della parola dopo. Quando le paroline si uniscono, il raddoppio resta scritto: davvero, appena." }
      ],
      edges: [
        ["suono", "consonante", "fatti di"],
        ["consonante", "doppia", "scritta due volte"],
        ["doppia", "significato", "può cambiare"],
        ["doppia", "sillabe", "si divide"],
        ["latino", "doppia", "spesso nasce da"],
        ["doppia", "regole", "segue"],
        ["latino", "fonosintattico", "ci ha lasciato"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: scrivi bene",
      questions: [
        { type: "mc", q: "Quale parola è scritta giusta?", options: ["stazzione", "stazione", "stasione"], answer: 1, explain: "Le parole in -zione hanno una sola Z." },
        { type: "mc", q: "Come si scrive?", options: ["aqua", "acqua", "aqqua"], answer: 1, explain: "Si scrive con CQ: acqua." },
        { type: "tf", q: "«Caro» e «carro» vogliono dire la stessa cosa.", answer: false, explain: "Caro = a cui vuoi bene (o costoso); carro = veicolo con le ruote." }
      ]
    }
  ],
  glossary: [
    { t: "Consonante", d: "Lettera come B, C, D, L, M… che si pronuncia insieme a una vocale." },
    { t: "Doppia", d: "Consonante scritta due volte di seguito: palla, gatto." },
    { t: "Sillaba", d: "Pezzetto di parola che si pronuncia con un solo colpo di voce: gat-to." },
    { t: "Dettato", d: "Esercizio in cui si scrive ciò che una persona legge ad alta voce." },
    { t: "Raddoppiamento sintattico", d: "Doppia che si sente ma non si scrive, come «a ccasa»." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale parola ha la doppia?", options: ["sole", "mamma", "pane"], answer: 1, explain: "Mam-ma: due M." },
      { type: "mc", q: "Il papà della mamma è il…", options: ["nono", "nonno", "nonnò"], answer: 1, explain: "Nonno, con due N. Nono vuol dire «numero 9 in fila»." },
      { type: "mc", q: "Per giocare a calcio serve la…", options: ["pala", "palla", "pallla"], answer: 1, explain: "Palla, con due L." },
      { type: "tf", q: "Nella parola «luna» c'è una doppia.", answer: false, explain: "Lu-na: una sola N." },
      { type: "tf", q: "In «pizza» ci sono due Z.", answer: true, explain: "Piz-za: la Z è doppia." },
      { type: "mc", q: "Come si divide in sillabe «gatto»?", options: ["ga-tto", "gat-to", "gatt-o"], answer: 1, explain: "Le doppie si separano: gat-to." },
      { type: "text", q: "Scrivi il numero 7 in lettere.", answer: ["sette"], explain: "Sette, con due T." },
      { type: "mc", q: "Quale parola è scritta giusta?", options: ["lezzione", "lezione", "lessione"], answer: 1, explain: "Le parole in -zione hanno una sola Z: lezione." },
      { type: "text", q: "Completa: ac_ua (che lettera manca?)", answer: ["q"], explain: "Acqua si scrive con CQ." },
      { type: "mc", q: "Che cosa metti sulla testa quando fa freddo?", options: ["il capello", "il cappello", "il capelo"], answer: 1, explain: "Il cappello (con due P). Il capello è un pelo della testa." },
      { type: "order", q: "Metti in ordine le sillabe per formare «cappello».", items: ["cap", "pel", "lo"], explain: "Cap-pel-lo: ogni doppia si divide tra due sillabe." }
    ]
  }
});
