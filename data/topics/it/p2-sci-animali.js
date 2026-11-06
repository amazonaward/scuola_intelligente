TOPIC('it', {
  id: "p2-sci-animali",
  title: "Gli animali",
  intro: "Il mondo è pieno di animali 🐘🐟🦅🐌! Alcuni corrono, altri volano o nuotano; alcuni mangiano erba, altri carne. Scopriamo <b>come si muovono</b>, <b>che cosa mangiano</b> e <b>dove vivono</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Gli animali sono esseri viventi",
      html: `<p>Gli animali <b>nascono, crescono, si nutrono, respirano, si riproducono e muoiono</b>, come tutti i viventi.</p>
<p>Ma, a differenza delle piante, gli animali:</p>
<ul>
<li>🍽️ <b>non sanno fabbricarsi il cibo</b>: devono mangiare piante o altri animali;</li>
<li>🏃 quasi tutti <b>si spostano</b> da un posto all'altro per cercare cibo, acqua e riparo.</li>
</ul>`
    },
    {
      type: "text",
      title: "Come si muovono?",
      html: `<ul>
<li>🐕 <b>Camminano e corrono</b> con le zampe: cane, cavallo, ghepardo.</li>
<li>🐸 <b>Saltano</b>: rana, canguro, cavalletta.</li>
<li>🦅 <b>Volano</b> con le ali: uccelli, farfalle, pipistrelli, api.</li>
<li>🐟 <b>Nuotano</b> con pinne e coda: pesci, delfini, balene.</li>
<li>🐍 <b>Strisciano</b> senza zampe: serpente, lombrico, lumaca.</li>
</ul>
<p>Alcuni animali sanno fare più cose: l'<b>anatra</b> 🦆 cammina, nuota e vola!</p>`
    },
    {
      type: "widget",
      title: "Come si muove?",
      widget: "classify",
      options: {
        groups: ["🦵 Cammina/corre", "🪽 Vola", "🌊 Nuota", "〰️ Striscia"],
        items: [
          ["🐎 cavallo", 0],
          ["🦋 farfalla", 1],
          ["🐠 pesce pagliaccio", 2],
          ["🐍 serpente", 3],
          ["🐘 elefante", 0],
          ["🐝 ape", 1],
          ["🐙 polpo", 2],
          ["🐌 lumaca", 3],
          ["🦇 pipistrello", 1],
          ["🐬 delfino", 2]
        ]
      },
      caption: "Attenzione al pipistrello: non è un uccello, ma vola!"
    },
    {
      type: "text",
      title: "Che cosa mangiano?",
      html: `<ul>
<li>🐄 <b>Erbivori</b>: mangiano solo piante (erba, foglie, frutti, semi). Mucca, coniglio, giraffa, elefante.</li>
<li>🦁 <b>Carnivori</b>: mangiano altri animali. Leone, lupo, squalo, aquila, ragno.</li>
<li>🐻 <b>Onnivori</b>: mangiano un po' di tutto. Orso, maiale, gallina, riccio… e anche noi esseri umani!</li>
</ul>
<p>Guarda i <b>denti</b>: gli erbivori hanno denti piatti per macinare l'erba, i carnivori denti appuntiti per strappare la carne.</p>`
    },
    {
      type: "svg",
      title: "Chi mangia chi: la catena alimentare",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect x="0" y="230" width="600" height="70" fill="#a3e635"/>
<circle cx="90" cy="140" r="58" fill="#bbf7d0" stroke="#15803d" stroke-width="4"/>
<circle cx="240" cy="140" r="58" fill="#fef9c3" stroke="#a16207" stroke-width="4"/>
<circle cx="390" cy="140" r="58" fill="#fed7aa" stroke="#c2410c" stroke-width="4"/>
<circle cx="530" cy="140" r="58" fill="#fecaca" stroke="#b91c1c" stroke-width="4"/>
<text x="90" y="155" font-size="44" text-anchor="middle">🌾</text>
<text x="240" y="155" font-size="44" text-anchor="middle">🦗</text>
<text x="390" y="155" font-size="44" text-anchor="middle">🐸</text>
<text x="530" y="155" font-size="44" text-anchor="middle">🐍</text>
<path d="M150 140 L175 140" stroke="#334155" stroke-width="5"/><polygon points="175,130 190,140 175,150" fill="#334155"/>
<path d="M300 140 L325 140" stroke="#334155" stroke-width="5"/><polygon points="325,130 340,140 325,150" fill="#334155"/>
<path d="M450 140 L462 140" stroke="#334155" stroke-width="5"/><polygon points="460,130 474,140 460,150" fill="#334155"/>
<text x="90" y="230" font-size="17" text-anchor="middle" fill="#14532d" font-weight="bold">erba</text>
<text x="240" y="230" font-size="17" text-anchor="middle" fill="#713f12" font-weight="bold">erbivoro</text>
<text x="390" y="230" font-size="17" text-anchor="middle" fill="#7c2d12" font-weight="bold">carnivoro</text>
<text x="530" y="230" font-size="17" text-anchor="middle" fill="#7f1d1d" font-weight="bold">carnivoro</text>
<text x="300" y="45" font-size="22" text-anchor="middle" fill="#1e293b" font-weight="bold">la freccia vuol dire «è mangiato da»</text>
</svg>`,
      caption: "L'erba è mangiata dalla cavalletta, la cavalletta dalla rana, la rana dal serpente. Ogni anello ha bisogno di quello prima."
    },
    {
      type: "quiz",
      title: "Mini-quiz: movimento e cibo",
      questions: [
        { type: "mc", q: "Il coniglio mangia solo erba e verdure. È…", options: ["carnivoro", "erbivoro", "onnivoro"], answer: 1, explain: "Chi mangia solo piante è erbivoro." },
        { type: "tf", q: "Il pipistrello vola.", answer: true, explain: "Il pipistrello ha le ali fatte di pelle ed è l'unico mammifero che vola davvero." },
        { type: "mc", q: "Come si muove il lombrico?", options: ["Vola", "Striscia", "Salta"], answer: 1, explain: "Il lombrico non ha zampe: striscia." }
      ]
    },
    {
      type: "text",
      title: "Dove vivono?",
      html: `<p>Il posto dove vive un animale si chiama <b>ambiente</b> (o habitat). Ogni animale è «fatto apposta» per il suo ambiente:</p>
<ul>
<li>🌊 <b>Mare</b>: pesci, polpi, delfini, balene, meduse.</li>
<li>🌲 <b>Bosco</b>: scoiattolo, cervo, gufo, volpe.</li>
<li>🏜️ <b>Deserto</b>: cammello (conserva il grasso nella gobba), scorpione.</li>
<li>🧊 <b>Ghiacci</b>: orso polare (pelo spesso e grasso), pinguino.</li>
<li>⛰️ <b>Montagna</b>: stambecco, camoscio, aquila, marmotta.</li>
<li>🏡 <b>Vicino all'uomo</b>: animali domestici come cane, gatto, mucca, gallina.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Gli animali sul mappamondo",
      scene: "globe",
      options: {
        points: [
          { lat: -25, lon: 134, label: "🦘 Canguro (Australia)", color: "#f97316" },
          { lat: 31, lon: 104, label: "🐼 Panda gigante (Cina)", color: "#111827" },
          { lat: -75, lon: 0, label: "🐧 Pinguino imperatore (Antartide)", color: "#0ea5e9" },
          { lat: 78, lon: 16, label: "🐻‍❄️ Orso polare (Artico)", color: "#60a5fa" },
          { lat: -2, lon: 35, label: "🦁 Leone (savana africana)", color: "#eab308" },
          { lat: -3, lon: -60, label: "🦜 Pappagallo ara (Amazzonia)", color: "#16a34a" },
          { lat: 46.5, lon: 7.5, label: "🐐 Stambecco (Alpi)", color: "#92400e" },
          { lat: 24, lon: 45, label: "🐪 Dromedario (deserto arabico)", color: "#d97706" }
        ]
      },
      caption: "Gira il globo: ogni animale vive in un ambiente adatto a lui. Il canguro vive solo in Australia, il pinguino imperatore solo in Antartide!"
    },
    {
      type: "example",
      title: "Esempio: il gatto di casa 🐱",
      html: `<ul>
<li><b>Come si muove?</b> Cammina, corre, salta e si arrampica.</li>
<li><b>Che cosa mangia?</b> È un <b>carnivoro</b>: crocchette e scatolette fatte di carne e pesce. Fuori casa caccia topi e uccellini.</li>
<li><b>Dove vive?</b> È un animale <b>domestico</b>: vive con le persone.</li>
<li><b>Come nasce?</b> Dalla pancia della mamma: è un <b>mammifero</b> e beve il latte.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio: la rana 🐸",
      html: `<ul>
<li><b>Come si muove?</b> Salta con le zampe posteriori lunghe e nuota.</li>
<li><b>Che cosa mangia?</b> Insetti, che cattura con la lingua appiccicosa: è <b>carnivora</b>.</li>
<li><b>Dove vive?</b> Vicino a stagni e ruscelli: un po' in acqua, un po' sulla terra.</li>
<li><b>Come nasce?</b> Da un <b>uovo</b> deposto in acqua: prima è un <b>girino</b> con la coda, poi diventa rana.</li>
</ul>`
    },
    {
      type: "text",
      title: "Come nascono?",
      html: `<ul>
<li>🥚 <b>Ovipari</b>: nascono da un <b>uovo</b>. Uccelli, pesci, rane, tartarughe, serpenti, insetti.</li>
<li>🤰 <b>Vivipari</b>: crescono nella <b>pancia della mamma</b> e poi nascono. Cane, gatto, mucca, balena, uomo. Questi animali (i <b>mammiferi</b>) bevono il latte della mamma.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Le parti di un uccello",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<ellipse cx="300" cy="160" rx="120" ry="70" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<circle cx="420" cy="100" r="45" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
<circle cx="435" cy="90" r="8" fill="#111827"/>
<polygon points="462,95 520,108 462,118" fill="#facc15" stroke="#a16207" stroke-width="3"/>
<path d="M240 140 Q300 60 360 140 Q300 120 240 140 Z" fill="#c2410c" stroke="#7c2d12" stroke-width="3"/>
<polygon points="185,150 90,120 100,170 90,210 185,175" fill="#ea580c" stroke="#7c2d12" stroke-width="3"/>
<line x1="280" y1="225" x2="270" y2="280" stroke="#a16207" stroke-width="6"/>
<line x1="330" y1="225" x2="340" y2="280" stroke="#a16207" stroke-width="6"/>
<rect x="0" y="282" width="600" height="18" fill="#65a30d"/>
</svg>`,
        spots: [
          { x: 495, y: 107, label: "Becco" },
          { x: 300, y: 105, label: "Ala" },
          { x: 115, y: 165, label: "Coda" },
          { x: 275, y: 260, label: "Zampe" },
          { x: 435, y: 90, label: "Occhio" },
          { x: 300, y: 190, label: "Piume" }
        ]
      },
      caption: "Clicca ogni punto e scegli il nome giusto. Le piume ce le hanno solo gli uccelli!"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? I campioni di velocità",
      html: `<p>🐆 Il <b>ghepardo</b> è l'animale terrestre più veloce: in corsa arriva a circa <b>100–110 km/h</b>, veloce come un'auto in tangenziale!</p>
<p>🦅 Il <b>falco pellegrino</b>, quando si tuffa in picchiata, supera i <b>300 km/h</b>: è l'animale più veloce del mondo.</p>
<p>🐌 La <b>lumaca</b>, invece, fa circa 1 metro ogni… 2 o 3 minuti!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? L'animale più grande di sempre",
      html: `<p>La <b>balenottera azzurra</b> 🐋 può essere lunga circa <b>30 metri</b>, come 3 autobus in fila, e pesare quanto 25 elefanti. È più grande anche dei dinosauri più grandi!</p>
<p>Eppure mangia animaletti minuscoli, il <b>krill</b>: piccoli gamberetti che filtra dall'acqua a tonnellate.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per conoscere gli animali",
      intro: "Gli animali si possono studiare giocando, disegnando o facendo gli scienziati.",
      tabs: [
        {
          label: "🃏 La carta d'identità",
          html: `<p>Inventa una <b>carta d'identità</b> per ogni animale, con 4 caselle: <b>come si muove</b> – <b>che cosa mangia</b> – <b>dove vive</b> – <b>come nasce</b>. Prova con queste carte: gira e controlla!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🐄 Mucca", back: "Cammina · erbivora · fattoria · vivipara (mammifero)" },
              { front: "🦈 Squalo", back: "Nuota · carnivoro · mare · nasce da uova o dalla pancia, secondo la specie" },
              { front: "🐔 Gallina", back: "Cammina (vola pochissimo) · onnivora · fattoria · ovipara" },
              { front: "🐍 Vipera", back: "Striscia · carnivora · prati e montagne · partorisce piccoli già formati" },
              { front: "🦋 Farfalla", back: "Vola · beve il nettare dei fiori · prati · ovipara (uovo → bruco → crisalide → farfalla)" }
            ]
          }
        },
        {
          label: "🦴 Con o senza scheletro?",
          html: `<p>Gli scienziati dividono gli animali in due grandi famiglie:</p>
<ul>
<li><b>Vertebrati</b>: hanno lo <b>scheletro</b> dentro il corpo, con la <b>colonna vertebrale</b> (la «spina dorsale»). Mammiferi, uccelli, pesci, rettili e anfibi.</li>
<li><b>Invertebrati</b>: non hanno la colonna vertebrale. Insetti, ragni, lumache, vermi, polpi, meduse. Sono la grande maggioranza degli animali!</li>
</ul>
<p>Toccati la schiena: senti le vertebre? Allora sei un vertebrato!</p>`,
          widget: "classify",
          options: {
            groups: ["🦴 Vertebrati", "🐛 Invertebrati"],
            items: [["🐕 cane", 0], ["🕷️ ragno", 1], ["🐟 trota", 0], ["🐌 lumaca", 1], ["🦎 lucertola", 0], ["🐜 formica", 1], ["🦉 gufo", 0], ["🪼 medusa", 1]]
          }
        },
        {
          label: "🔍 Detective dei denti e delle zampe",
          html: `<p>Il corpo di un animale «racconta» come vive:</p>
<ul>
<li><b>Denti appuntiti e artigli</b> → carnivoro che caccia (leone, gatto).</li>
<li><b>Denti piatti</b> → erbivoro che macina l'erba (mucca, cavallo).</li>
<li><b>Zampe palmate</b> (con la pelle tra le dita) → nuota (anatra, rana).</li>
<li><b>Pelo spesso e bianco</b> → vive al freddo e si mimetizza nella neve (orso polare, lepre artica).</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fff7ed"/>
<rect x="40" y="40" width="220" height="110" rx="20" fill="#fecaca" stroke="#991b1b" stroke-width="3"/>
<polygon points="70,60 85,110 100,60" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<polygon points="200,60 215,110 230,60" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="110" y="60" width="18" height="25" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="130" y="60" width="18" height="25" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="150" y="60" width="18" height="25" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="170" y="60" width="18" height="25" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="340" y="40" width="220" height="110" rx="20" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<g fill="#ffffff" stroke="#475569" stroke-width="2">
<rect x="360" y="60" width="40" height="30"/><rect x="405" y="60" width="40" height="30"/><rect x="450" y="60" width="40" height="30"/><rect x="495" y="60" width="40" height="30"/>
</g>
<text x="150" y="180" font-size="20" text-anchor="middle" fill="#7f1d1d" font-weight="bold">🦁 canini appuntiti</text>
<text x="450" y="180" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">🐄 molari piatti</text>
<text x="300" y="212" font-size="16" text-anchor="middle" fill="#334155">i denti dicono che cosa mangia un animale</text>
</svg>`
        },
        {
          label: "🌍 Su e giù per il mondo",
          html: `<p>Alcuni animali fanno viaggi lunghissimi: le <b>migrazioni</b>. Le <b>rondini</b> passano l'estate in Italia e l'inverno in Africa, volando per migliaia di chilometri. Segui il loro viaggio sul globo.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 45, lon: 9, label: "Estate: Italia", color: "#16a34a" },
              { lat: 37, lon: 12, label: "Sicilia", color: "#f59e0b" },
              { lat: 25, lon: 10, label: "Deserto del Sahara", color: "#d97706" },
              { lat: 5, lon: 20, label: "Africa centrale", color: "#f97316" },
              { lat: -26, lon: 28, label: "Inverno: Sudafrica", color: "#ef4444" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4], color: "#2563eb" }]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa degli animali: tocca i nodi e scopri il perché",
      nodes: [
        { id: "animali", label: "Gli animali", x: 50, y: 6, color: "#f97316", html: "Esseri viventi che devono mangiare altri esseri viventi e quasi sempre si spostano.", why: "Già il filosofo greco <b>Aristotele</b>, più di 2300 anni fa, osservò centinaia di animali e provò a dividerli in gruppi. Nel <b>1758</b> lo svedese <b>Carlo Linneo</b> diede a ogni animale un nome scientifico in latino: il gatto è <i>Felis catus</i>." },
        { id: "movimento", label: "Movimento", x: 15, y: 30, color: "#0ea5e9", html: "Camminare, saltare, volare, nuotare, strisciare.", why: "Gli animali si muovono perché devono <b>cercare il cibo</b> e scappare dai pericoli: le piante invece il cibo se lo fabbricano stando ferme." },
        { id: "cibo", label: "Alimentazione", x: 50, y: 30, color: "#ef4444", html: "Erbivori, carnivori, onnivori.", why: "Gli animali non sanno usare la luce del Sole per fare il cibo, quindi prendono l'energia mangiando piante o altri animali." },
        { id: "ambiente", label: "Ambiente", x: 85, y: 30, color: "#16a34a", html: "Il luogo dove un animale vive: mare, bosco, deserto, ghiacci…", why: "In milioni di anni gli animali sono cambiati pian piano e si sono <b>adattati</b> al loro ambiente. Lo spiegò l'inglese <b>Charles Darwin</b> nel <b>1859</b>, dopo un lungo viaggio intorno al mondo." },
        { id: "catena", label: "Catena alimentare", x: 35, y: 55, color: "#eab308", html: "Chi mangia chi: pianta → erbivoro → carnivoro.", why: "L'energia parte dal Sole, passa alle piante e poi agli animali. Se sparisce un anello, tutta la catena ha problemi: per questo è importante proteggere anche gli animali piccoli." },
        { id: "adattamenti", label: "Adattamenti", x: 75, y: 55, color: "#a855f7", html: "Parti del corpo «fatte apposta»: pinne, ali, pelo spesso, gobba.", why: "Gli animali con le caratteristiche più adatte all'ambiente sopravvivono meglio e hanno più figli, che ereditano quelle caratteristiche. Così, generazione dopo generazione, i corpi cambiano." },
        { id: "nascita", label: "Come nascono", x: 20, y: 80, color: "#ec4899", html: "Ovipari (da un uovo) e vivipari (dalla pancia della mamma).", why: "L'uovo con il guscio permise ai rettili, milioni di anni fa, di vivere lontano dall'acqua. I mammiferi tengono il piccolo nella pancia per proteggerlo meglio e poi lo nutrono con il latte." },
        { id: "gruppi", label: "Vertebrati e invertebrati", x: 65, y: 85, color: "#64748b", html: "Con o senza colonna vertebrale.", why: "La parola «invertebrati» la inventò il francese <b>Jean-Baptiste Lamarck</b> verso il 1800. Gli invertebrati sono più del 95% di tutte le specie animali: soprattutto insetti!" }
      ],
      edges: [
        ["animali", "movimento", "si spostano con il"],
        ["animali", "cibo", "devono mangiare"],
        ["animali", "ambiente", "vivono in un"],
        ["cibo", "catena", "forma la"],
        ["ambiente", "adattamenti", "porta agli"],
        ["adattamenti", "movimento", "ali, pinne, zampe"],
        ["animali", "nascita", "si riproducono"],
        ["nascita", "gruppi", "aiuta a classificare in"],
        ["adattamenti", "gruppi", "scheletro"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: ambienti e nascita",
      questions: [
        { type: "mc", q: "Dove vive l'orso polare?", options: ["Nel deserto", "Tra i ghiacci", "Nella giungla"], answer: 1, explain: "Vive al Polo Nord, nell'Artico, tra i ghiacci." },
        { type: "tf", q: "La gallina è ovipara.", answer: true, explain: "I pulcini nascono dalle uova." },
        { type: "mc", q: "Quale animale è un mammifero?", options: ["Delfino", "Squalo", "Trota"], answer: 0, explain: "Il delfino nasce dalla pancia della mamma, beve il latte e respira aria: è un mammifero." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Gli animali <b>si muovono</b>: camminano, saltano, volano, nuotano, strisciano.</li>
<li>Possono essere <b>erbivori</b>, <b>carnivori</b> o <b>onnivori</b>.</li>
<li>Ogni animale vive nel suo <b>ambiente</b> ed è adatto a lui.</li>
<li><b>Ovipari</b> nascono dall'uovo, <b>vivipari</b> dalla pancia della mamma.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Erbivoro", d: "Animale che mangia solo piante." },
    { t: "Carnivoro", d: "Animale che mangia altri animali." },
    { t: "Onnivoro", d: "Animale che mangia sia piante sia animali." },
    { t: "Ambiente (habitat)", d: "Il luogo in cui un animale vive." },
    { t: "Oviparo", d: "Animale che nasce da un uovo." },
    { t: "Viviparo", d: "Animale che cresce nella pancia della mamma e poi nasce." },
    { t: "Mammifero", d: "Animale che da piccolo beve il latte della mamma." },
    { t: "Vertebrato", d: "Animale con lo scheletro interno e la colonna vertebrale." },
    { t: "Catena alimentare", d: "Sequenza di chi mangia chi, che parte dalle piante." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come si chiama un animale che mangia solo piante?", options: ["Carnivoro", "Erbivoro", "Onnivoro"], answer: 1, explain: "Erbivoro: mangia erba, foglie, frutti, semi." },
      { type: "mc", q: "Quale animale è carnivoro?", options: ["Lupo", "Pecora", "Coniglio"], answer: 0, explain: "Il lupo caccia altri animali." },
      { type: "mc", q: "Come si muove il serpente?", options: ["Vola", "Striscia", "Salta"], answer: 1, explain: "Il serpente non ha zampe e striscia." },
      { type: "tf", q: "Gli esseri umani sono onnivori.", answer: true, explain: "Mangiamo sia cibi vegetali sia carne, pesce, uova." },
      { type: "tf", q: "Il cane nasce da un uovo.", answer: false, explain: "Il cane è un mammifero viviparo: nasce dalla pancia della mamma." },
      { type: "order", q: "Metti in ordine la catena alimentare.", items: ["🌾 erba", "🦗 cavalletta", "🐸 rana", "🐍 serpente"], explain: "L'erba è mangiata dalla cavalletta, la cavalletta dalla rana, la rana dal serpente." },
      { type: "text", q: "Come si chiama il piccolo della rana, che vive in acqua e ha la coda?", answer: ["girino", "il girino"], explain: "Dall'uovo nasce il girino, che poi diventa rana." },
      { type: "mc", q: "Dove vive il cammello?", options: ["Nel deserto", "Al Polo Nord", "In fondo al mare"], answer: 0, explain: "Il cammello è adatto al caldo e alla mancanza d'acqua." },
      { type: "mc", q: "Qual è l'animale terrestre più veloce?", options: ["Il cavallo", "Il ghepardo", "La lumaca"], answer: 1, explain: "Il ghepardo arriva a circa 100–110 km/h." },
      { type: "tf", q: "La farfalla è un invertebrato.", answer: true, explain: "Gli insetti non hanno la colonna vertebrale." },
      { type: "mc", q: "Che denti ha un erbivoro come la mucca?", options: ["Piatti, per macinare", "Appuntiti, per strappare", "Non ha denti"], answer: 0, explain: "Gli erbivori hanno molari piatti per macinare l'erba." }
    ]
  }
});
