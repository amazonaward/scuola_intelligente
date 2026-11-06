TOPIC('it', {
  id: "p2-sci-viventi-non-viventi",
  title: "Esseri viventi e non viventi",
  intro: "Un gatto 🐱, un albero 🌳, un sasso 🪨 e un robot 🤖: chi di loro è <b>vivo</b>? Scopriamo le «regole della vita» per riconoscere gli <b>esseri viventi</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Le regole della vita",
      html: `<p>Un <b>essere vivente</b> fa tutte queste cose:</p>
<ol>
<li>🐣 <b>Nasce</b> da un altro essere vivente.</li>
<li>📈 <b>Cresce</b> e cambia.</li>
<li>🍎 <b>Si nutre</b>: ha bisogno di cibo (le piante il cibo se lo fabbricano!).</li>
<li>🌬️ <b>Respira</b>.</li>
<li>👶 <b>Si riproduce</b>: fa nascere altri esseri come lui.</li>
<li>🍂 <b>Muore</b>.</li>
</ol>
<p>Un <b>non vivente</b> non fa queste cose: un sasso non nasce da un altro sasso, non mangia, non cresce da solo.</p>`
    },
    {
      type: "svg",
      title: "Il ciclo della vita",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<circle cx="300" cy="150" r="105" fill="none" stroke="#86efac" stroke-width="14"/>
<circle cx="300" cy="45" r="34" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<circle cx="400" cy="105" r="34" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<circle cx="400" cy="200" r="34" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
<circle cx="300" cy="255" r="34" fill="#e0e7ff" stroke="#4f46e5" stroke-width="3"/>
<circle cx="200" cy="200" r="34" fill="#fce7f3" stroke="#db2777" stroke-width="3"/>
<circle cx="200" cy="105" r="34" fill="#f3f4f6" stroke="#6b7280" stroke-width="3"/>
<text x="300" y="56" font-size="30" text-anchor="middle">🐣</text>
<text x="400" y="116" font-size="30" text-anchor="middle">📈</text>
<text x="400" y="211" font-size="30" text-anchor="middle">🍎</text>
<text x="300" y="266" font-size="30" text-anchor="middle">🌬️</text>
<text x="200" y="211" font-size="30" text-anchor="middle">👶</text>
<text x="200" y="116" font-size="30" text-anchor="middle">🍂</text>
<text x="345" y="30" font-size="18" fill="#854d0e" font-weight="bold">nasce</text>
<text x="445" y="100" font-size="18" fill="#166534" font-weight="bold">cresce</text>
<text x="445" y="210" font-size="18" fill="#991b1b" font-weight="bold">si nutre</text>
<text x="345" y="285" font-size="18" fill="#3730a3" font-weight="bold">respira</text>
<text x="40" y="210" font-size="18" fill="#9d174d" font-weight="bold">si riproduce</text>
<text x="100" y="100" font-size="18" fill="#374151" font-weight="bold">muore</text>
<text x="300" y="158" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">ciclo vitale</text>
</svg>`,
      caption: "Tutti i viventi seguono questo cerchio: nascono, crescono, si nutrono, respirano, si riproducono e muoiono."
    },
    {
      type: "example",
      title: "Esempio: il fagiolo nel vasetto 🌱",
      html: `<p>Metti un fagiolo nel cotone bagnato:</p>
<ul>
<li>dopo pochi giorni <b>nasce</b> una radichetta e un germoglio;</li>
<li>la piantina <b>cresce</b> verso la luce;</li>
<li>si <b>nutre</b> con acqua, luce e aria;</li>
<li>se la trapianti, fa i fiori e nuovi fagioli: si <b>riproduce</b>;</li>
<li>alla fine secca e <b>muore</b>.</li>
</ul>
<p>Il fagiolo è un essere vivente! Un sassolino nel cotone bagnato, invece, resta sempre uguale.</p>`
    },
    {
      type: "widget",
      title: "Vivente o non vivente?",
      widget: "classify",
      options: {
        groups: ["🌱 Viventi", "🪨 Non viventi"],
        items: [
          ["🐱 gatto", 0],
          ["🪨 sasso", 1],
          ["🌳 albero", 0],
          ["🤖 robot", 1],
          ["🍄 fungo", 0],
          ["💧 acqua", 1],
          ["🐛 bruco", 0],
          ["🧸 orsacchiotto", 1],
          ["🌻 girasole", 0],
          ["☀️ Sole", 1]
        ]
      },
      caption: "Prova a ripassare le regole della vita per ogni oggetto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le regole della vita",
      questions: [
        { type: "tf", q: "Un albero è un essere vivente.", answer: true, explain: "Nasce da un seme, cresce, si nutre, respira, si riproduce e muore." },
        { type: "mc", q: "Quale di questi NON è un essere vivente?", options: ["Una formica", "Un sasso", "Una margherita"], answer: 1, explain: "Il sasso non nasce, non si nutre e non si riproduce." },
        { type: "mc", q: "Le piante si nutrono?", options: ["No, mai", "Sì, si fabbricano il cibo con luce, acqua e aria", "Solo d'inverno"], answer: 1, explain: "Le piante producono il loro cibo nelle foglie." }
      ]
    },
    {
      type: "text",
      title: "Le trappole: sembra vivo… ma non lo è!",
      html: `<ul>
<li>🔥 Il <b>fuoco</b> si muove, «mangia» la legna, cresce… ma non è fatto di <b>cellule</b>, non ha un corpo che cresce da dentro e si spegne quando finisce la legna: <b>non è vivente</b>.</li>
<li>🤖 Il <b>robot</b> si muove e parla, ma è costruito dall'uomo, non cresce e non fa robot-bambini: <b>non è vivente</b>.</li>
<li>☁️ La <b>nuvola</b> si muove e diventa più grande, ma è fatta di goccioline d'acqua: <b>non è vivente</b>.</li>
<li>🌳 L'<b>albero</b> non si muove da un posto all'altro, ma è <b>vivente</b>!</li>
</ul>
<p>Muoversi <b>non basta</b> per essere vivi: bisogna rispettare <b>tutte</b> le regole.</p>`
    },
    {
      type: "text",
      title: "Di che cosa sono fatti i viventi?",
      html: `<p>Tutti gli esseri viventi sono fatti di <b>cellule</b>: piccolissimi «mattoncini» che si vedono solo con il <b>microscopio</b> 🔬.</p>
<p>Alcuni viventi sono fatti di <b>una sola cellula</b>, come i batteri. Il nostro corpo, invece, è fatto di <b>migliaia di miliardi</b> di cellule!</p>
<p>I viventi si dividono in grandi gruppi: <b>piante</b> 🌿, <b>animali</b> 🐾, <b>funghi</b> 🍄 e tanti esseri minuscoli (i <b>microrganismi</b>).</p>`
    },
    {
      type: "3d",
      title: "Una cellula in 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#86efac", label: "Membrana (la «pelle» della cellula)" },
          { r: 0.95, color: "#fef08a", label: "Citoplasma (una specie di gelatina)" },
          { r: 0.4, color: "#a78bfa", label: "Nucleo (il «cervello» della cellula)" }
        ]
      },
      caption: "Ruota la cellula: lo spicchio tagliato mostra la pelle esterna, la gelatina e il nucleo al centro. Ogni essere vivente è fatto di cellule come questa!"
    },
    {
      type: "example",
      title: "Esempio: il cagnolino e il cane-giocattolo 🐶",
      html: `<p>Confrontiamo un cucciolo vero e un cagnolino a pile:</p>
<table>
<tr><th></th><th>🐶 Cucciolo</th><th>🧸 Cane a pile</th></tr>
<tr><td>Nasce</td><td>✅ dalla mamma cane</td><td>❌ in una fabbrica</td></tr>
<tr><td>Cresce</td><td>✅</td><td>❌ resta sempre uguale</td></tr>
<tr><td>Mangia</td><td>✅ crocchette</td><td>❌ usa le pile</td></tr>
<tr><td>Respira</td><td>✅</td><td>❌</td></tr>
<tr><td>Fa i cuccioli</td><td>✅</td><td>❌</td></tr>
</table>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Un albero di quasi 5000 anni",
      html: `<p>In California vive un pino chiamato <b>Matusalemme</b> 🌲: ha circa <b>4800 anni</b>! Era già un alberello quando gli Egizi costruivano le piramidi.</p>
<p>Invece alcune piccole mosche, le <b>effimere</b>, da adulte vivono solo <b>un giorno</b> o anche meno.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il tardigrado, campione di resistenza",
      html: `<p>Il <b>tardigrado</b> è un animaletto lungo meno di un millimetro, con 8 zampette: lo chiamano «orsetto d'acqua» 🐻💧.</p>
<p>Se si secca, si chiude come una pallina e può restare così per anni. Resiste al gelo, al caldo fortissimo e persino al viaggio nello <b>spazio</b>! Quando torna l'acqua… si risveglia.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire chi è vivo",
      intro: "Se le regole ti sembrano difficili, prova queste altre strade.",
      tabs: [
        {
          label: "🕵️ Le 6 domande del detective",
          html: `<p>Per ogni oggetto fai 6 domande. Se a <b>tutte</b> la risposta è «sì», è vivente!</p>
<ol>
<li>È nato da un altro come lui?</li>
<li>Cresce?</li>
<li>Ha bisogno di cibo o di luce per vivere?</li>
<li>Respira?</li>
<li>Può fare dei «figli»?</li>
<li>Un giorno morirà?</li>
</ol>
<p>Prova con il tuo gatto, poi con la tua bicicletta!</p>`
        },
        {
          label: "🔬 Al microscopio",
          html: `<p>Se guardi al microscopio una fettina di foglia o di buccia di cipolla, vedi tante <b>cellette</b> attaccate, come le piastrelle di un pavimento. Se guardi un granello di sale vedi un cristallo, senza cellule.</p>
<p>Gli scienziati dicono: <b>dove ci sono cellule, c'è vita</b>.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<circle cx="160" cy="120" r="95" fill="#dcfce7" stroke="#334155" stroke-width="6"/>
<g fill="#bbf7d0" stroke="#15803d" stroke-width="2">
<rect x="90" y="70" width="45" height="30"/><rect x="135" y="70" width="45" height="30"/><rect x="180" y="70" width="40" height="30"/>
<rect x="80" y="100" width="50" height="35"/><rect x="130" y="100" width="45" height="35"/><rect x="175" y="100" width="55" height="35"/>
<rect x="95" y="135" width="40" height="35"/><rect x="135" y="135" width="50" height="35"/><rect x="185" y="135" width="40" height="35"/>
</g>
<g fill="#7c3aed"><circle cx="110" cy="85" r="5"/><circle cx="155" cy="82" r="5"/><circle cx="200" cy="88" r="5"/><circle cx="105" cy="118" r="5"/><circle cx="150" cy="115" r="5"/><circle cx="205" cy="120" r="5"/><circle cx="115" cy="150" r="5"/><circle cx="160" cy="155" r="5"/><circle cx="205" cy="150" r="5"/></g>
<circle cx="440" cy="120" r="95" fill="#f1f5f9" stroke="#334155" stroke-width="6"/>
<polygon points="400,80 480,80 480,160 400,160" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/>
<polygon points="400,80 425,60 505,60 480,80" fill="#f8fafc" stroke="#64748b" stroke-width="3"/>
<polygon points="480,80 505,60 505,140 480,160" fill="#cbd5e1" stroke="#64748b" stroke-width="3"/>
<text x="160" y="232" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">foglia: cellule = vivente</text>
<text x="440" y="232" font-size="18" text-anchor="middle" fill="#334155" font-weight="bold">sale: cristallo = non vivente</text>
</svg>`
        },
        {
          label: "🧬 Una molecola della vita",
          html: `<p>Ogni essere vivente è fatto di sostanze speciali che contengono il <b>carbonio</b>. Ecco una molecola semplicissima, il metano: un atomo di carbonio (nero) circondato da 4 atomi di idrogeno (bianchi). Le molecole dei viventi sono come questa, ma lunghissime: a volte con milioni di atomi! Girala con il dito.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.5, color: "#1f2937", label: "C (carbonio)" },
              { x: 0.63, y: 0.63, z: 0.63, r: 0.3, color: "#f1f5f9", label: "H" },
              { x: -0.63, y: -0.63, z: 0.63, r: 0.3, color: "#f1f5f9", label: "H" },
              { x: -0.63, y: 0.63, z: -0.63, r: 0.3, color: "#f1f5f9", label: "H" },
              { x: 0.63, y: -0.63, z: -0.63, r: 0.3, color: "#f1f5f9", label: "H" }
            ],
            bonds: [[0, 1], [0, 2], [0, 3], [0, 4]]
          }
        },
        {
          label: "🃏 Carte da girare",
          html: `<p>Gira le carte e ripassa con le parole.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🐣 Nascere", back: "Venire al mondo da un altro essere vivente" },
              { front: "📈 Crescere", back: "Diventare più grande e cambiare" },
              { front: "🍎 Nutrirsi", back: "Prendere il cibo che dà energia" },
              { front: "🌬️ Respirare", back: "Scambiare gas (aria) con l'ambiente" },
              { front: "👶 Riprodursi", back: "Far nascere altri esseri simili a sé" },
              { front: "🍂 Morire", back: "Smettere di vivere: la fine del ciclo vitale" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei viventi: tocca i nodi e scopri il perché",
      nodes: [
        { id: "vita", label: "Essere vivente", x: 50, y: 8, color: "#16a34a", html: "Un essere che nasce, cresce, si nutre, respira, si riproduce e muore.", why: "Non è facile dire che cos'è la vita! Gli scienziati hanno trovato queste caratteristiche osservando tantissimi esseri diversi: tutti i viventi le hanno, nessun oggetto le ha tutte insieme." },
        { id: "cellule", label: "Cellule", x: 20, y: 30, color: "#a855f7", html: "I minuscoli mattoncini di cui sono fatti tutti i viventi.", why: "Nel <b>1665</b> l'inglese <b>Robert Hooke</b> guardò al microscopio una fettina di sughero e vide tante «stanzette»: le chiamò <i>cellule</i> (piccole celle). Nel 1839 gli scienziati tedeschi Schleiden e Schwann capirono che tutte le piante e tutti gli animali sono fatti di cellule." },
        { id: "nascere", label: "Nasce da un vivente", x: 80, y: 30, color: "#eab308", html: "Ogni vivente nasce da un altro vivente.", why: "Un tempo si credeva che i vermetti nascessero da soli dalla carne andata a male. Nel <b>1668</b> l'italiano <b>Francesco Redi</b> coprì alcuni vasetti di carne con una garza: le mosche non riuscirono a deporre le uova e i vermi non nacquero. Così dimostrò che la vita nasce solo dalla vita." },
        { id: "nutrirsi", label: "Si nutre e respira", x: 20, y: 60, color: "#ef4444", html: "Prende energia dal cibo e scambia gas con l'aria o con l'acqua.", why: "Per crescere e muoversi serve energia. Gli animali la prendono mangiando, le piante la catturano dalla luce del Sole. Respirare serve a «bruciare» il cibo dentro le cellule per liberare l'energia." },
        { id: "crescere", label: "Cresce e si riproduce", x: 80, y: 60, color: "#ec4899", html: "Diventa più grande e fa nascere altri esseri simili.", why: "Le cellule si dividono in due, e poi ancora in due: così il corpo cresce. Riprodursi permette alla specie di continuare anche quando i singoli individui muoiono." },
        { id: "muore", label: "Muore", x: 50, y: 78, color: "#6b7280", html: "Ogni vivente prima o poi muore.", why: "Con il tempo le cellule si consumano. Quello che resta di piante e animali morti viene trasformato da funghi e batteri e torna nel terreno come nutrimento per nuovi viventi: è un grande cerchio." },
        { id: "nonvivente", label: "Non vivente", x: 50, y: 38, color: "#64748b", html: "Sassi, acqua, aria, oggetti costruiti: non nascono, non crescono da soli, non si riproducono.", why: "Alcuni non viventi sono naturali (sasso, acqua, Sole), altri sono costruiti dall'uomo (robot, sedia). Sono importantissimi per i viventi: senza acqua, aria e luce non ci sarebbe la vita!" },
        { id: "gruppi", label: "Piante, animali, funghi…", x: 50, y: 95, color: "#0ea5e9", html: "I grandi gruppi di viventi.", why: "Nel <b>1735</b> lo svedese <b>Carlo Linneo</b> inventò un modo per dare a ogni vivente un nome e un posto in un grande «albero» di gruppi. Lo usiamo ancora oggi!" }
      ],
      edges: [
        ["vita", "cellule", "è fatto di"],
        ["vita", "nascere", "regola 1"],
        ["vita", "nutrirsi", "regola 2"],
        ["vita", "crescere", "regola 3"],
        ["nutrirsi", "muore", "senza cibo"],
        ["crescere", "muore", "alla fine"],
        ["vita", "nonvivente", "è diverso da"],
        ["muore", "gruppi", "nutre altri viventi:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: trappole e cellule",
      questions: [
        { type: "tf", q: "Il fuoco è un essere vivente perché si muove e cresce.", answer: false, explain: "Il fuoco non è fatto di cellule: è solo legna che brucia. Per essere vivi bisogna rispettare tutte le regole." },
        { type: "mc", q: "Di che cosa sono fatti tutti gli esseri viventi?", options: ["Di cellule", "Di plastica", "Di sassolini"], answer: 0, explain: "Tutti i viventi sono fatti di cellule." },
        { type: "tf", q: "Un albero non si sposta, ma è vivente.", answer: true, explain: "Non serve muoversi per essere vivi: l'albero rispetta tutte le regole della vita." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Un <b>essere vivente</b> nasce, cresce, si nutre, respira, si riproduce e muore.</li>
<li>I <b>non viventi</b> non fanno queste cose.</li>
<li>Muoversi non basta per essere vivi!</li>
<li>Tutti i viventi sono fatti di <b>cellule</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Essere vivente", d: "Ciò che nasce, cresce, si nutre, respira, si riproduce e muore." },
    { t: "Non vivente", d: "Ciò che non ha le caratteristiche della vita: sassi, acqua, oggetti." },
    { t: "Ciclo vitale", d: "Le tappe della vita di un essere vivente, dalla nascita alla morte." },
    { t: "Riprodursi", d: "Far nascere nuovi esseri della stessa specie." },
    { t: "Cellula", d: "Il piccolissimo «mattoncino» di cui sono fatti tutti i viventi." },
    { t: "Microscopio", d: "Strumento che ingrandisce le cose piccolissime." },
    { t: "Microrganismo", d: "Essere vivente così piccolo da vedersi solo al microscopio." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di questi è un essere vivente?", options: ["Un pallone", "Un fungo", "Una nuvola"], answer: 1, explain: "Il fungo nasce, cresce, si nutre e si riproduce." },
      { type: "mc", q: "Quale di questi è un non vivente?", options: ["Un pesce", "Una rosa", "Una sedia"], answer: 2, explain: "La sedia è un oggetto costruito dall'uomo." },
      { type: "tf", q: "Le piante respirano.", answer: true, explain: "Anche le piante respirano, giorno e notte." },
      { type: "tf", q: "Un robot che cammina è un essere vivente.", answer: false, explain: "Il robot non nasce, non cresce e non si riproduce." },
      { type: "order", q: "Metti in ordine il ciclo vitale della gallina.", items: ["L'uovo si schiude: nasce il pulcino", "Il pulcino cresce", "Diventa una gallina e depone le uova", "Invecchia e muore"], explain: "Nascere, crescere, riprodursi, morire." },
      { type: "text", q: "Come si chiamano i piccolissimi mattoncini di cui sono fatti i viventi?", answer: ["cellule", "le cellule", "cellula"], explain: "Le cellule." },
      { type: "mc", q: "Perché il fuoco NON è vivente?", options: ["Perché è caldo", "Perché non è fatto di cellule e non si riproduce", "Perché è arancione"], answer: 1, explain: "Il fuoco non ha cellule: è una reazione della legna che brucia, non un essere che nasce da un genitore." },
      { type: "mc", q: "Che cosa NON fa un sasso?", options: ["Non si nutre", "Sta fermo", "Può essere grande"], answer: 0, explain: "Il sasso non si nutre: per questo non è vivente." },
      { type: "tf", q: "Ogni essere vivente nasce da un altro essere vivente.", answer: true, explain: "Lo dimostrò Francesco Redi nel 1668." },
      { type: "mc", q: "Con quale strumento si vedono le cellule?", options: ["Telescopio", "Microscopio", "Termometro"], answer: 1, explain: "Il microscopio ingrandisce le cose piccolissime." },
      { type: "mc", q: "Che cosa fa una pianta per nutrirsi?", options: ["Mangia insetti ogni giorno", "Fabbrica il cibo con luce, acqua e aria", "Non si nutre mai"], answer: 1, explain: "Le piante fabbricano il cibo nelle foglie." }
    ]
  }
});
