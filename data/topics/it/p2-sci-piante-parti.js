TOPIC('it', {
  id: "p2-sci-piante-parti",
  title: "Le parti della pianta",
  intro: "Una pianta 🌻 è come una piccola fabbrica: ogni parte ha il suo lavoro. Conosciamo la <b>radice</b>, il <b>fusto</b>, le <b>foglie</b>, il <b>fiore</b> e il <b>frutto</b> con i suoi <b>semi</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Le cinque parti",
      html: `<ul>
<li>🟫 <b>Radice</b>: sta sotto terra. <b>Tiene ferma</b> la pianta e <b>beve</b> acqua e sali minerali dal terreno.</li>
<li>🟩 <b>Fusto</b>: sostiene la pianta e porta in su l'acqua, come un <b>tubo</b>. Negli alberi il fusto si chiama <b>tronco</b>.</li>
<li>🍃 <b>Foglie</b>: sono la «cucina» della pianta: con la luce del Sole <b>fabbricano il cibo</b>.</li>
<li>🌸 <b>Fiore</b>: serve a fare nascere i <b>semi</b>.</li>
<li>🍎 <b>Frutto</b>: protegge i <b>semi</b> e li aiuta a viaggiare lontano.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Dai il nome alle parti",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="230" fill="#e0f2fe"/>
<rect y="230" width="600" height="110" fill="#a16207"/>
<circle cx="70" cy="60" r="35" fill="#fde047"/>
<path d="M300 230 L300 70" stroke="#16a34a" stroke-width="12"/>
<path d="M300 170 Q230 130 210 160 Q250 190 300 170 Z" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<path d="M300 130 Q370 90 395 120 Q350 150 300 130 Z" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<g fill="#f472b6" stroke="#be185d" stroke-width="2">
<circle cx="300" cy="40" r="18"/><circle cx="328" cy="60" r="18"/><circle cx="318" cy="92" r="18"/><circle cx="282" cy="92" r="18"/><circle cx="272" cy="60" r="18"/>
</g>
<circle cx="300" cy="66" r="15" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<path d="M300 230 L300 290 M300 250 L260 300 M300 250 L340 305 M300 270 L280 330 M300 270 L325 330" stroke="#fef3c7" stroke-width="6" fill="none"/>
<circle cx="470" cy="160" r="30" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>
<path d="M470 130 L478 112" stroke="#15803d" stroke-width="4"/>
<ellipse cx="465" cy="165" rx="5" ry="8" fill="#451a03"/>
<ellipse cx="478" cy="160" rx="5" ry="8" fill="#451a03"/>
<text x="470" y="215" font-size="15" text-anchor="middle" fill="#334155">il frutto, tagliato</text>
</svg>`,
        spots: [
          { x: 300, y: 300, label: "Radice" },
          { x: 300, y: 205, label: "Fusto" },
          { x: 360, y: 118, label: "Foglia" },
          { x: 300, y: 25, label: "Fiore" },
          { x: 445, y: 145, label: "Frutto" },
          { x: 478, y: 178, label: "Semi" }
        ]
      },
      caption: "Clicca ogni numero e scegli il nome della parte."
    },
    {
      type: "text",
      title: "La radice e il fusto: bere e trasportare",
      html: `<p>La <b>radice</b> si allarga sotto terra con tanti <b>peli</b> sottilissimi che assorbono l'acqua, come una spugna. 💧</p>
<p>L'acqua con i sali minerali si chiama <b>linfa grezza</b>: sale dentro il <b>fusto</b> attraverso tubicini piccolissimi, fino alle foglie.</p>
<p>Il fusto può essere:</p>
<ul>
<li><b>erbaceo</b>: verde e morbido (margherita, grano);</li>
<li><b>legnoso</b>: duro e marrone, come il <b>tronco</b> degli alberi, coperto dalla <b>corteccia</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio: il sedano colorato 🎨",
      html: `<p>Prova questo esperimento:</p>
<ol>
<li>Metti un gambo di sedano (o un garofano bianco) in un bicchiere d'acqua con qualche goccia di <b>colorante alimentare</b> blu o rosso.</li>
<li>Aspetta un giorno.</li>
<li>Le foglie diventano colorate! Se tagli il gambo, vedi dei puntini colorati: sono i <b>tubicini</b> dove sale l'acqua.</li>
</ol>`
    },
    {
      type: "text",
      title: "Le foglie: la cucina della pianta",
      html: `<p>Le foglie sono <b>verdi</b> perché contengono la <b>clorofilla</b>.</p>
<p>Con la clorofilla la foglia usa:</p>
<ul>
<li>☀️ la <b>luce del Sole</b>,</li>
<li>💧 l'<b>acqua</b> che arriva dalla radice,</li>
<li>💨 un gas dell'aria, l'<b>anidride carbonica</b>,</li>
</ul>
<p>per fabbricare lo <b>zucchero</b>, il cibo della pianta. E intanto libera nell'aria l'<b>ossigeno</b> che noi respiriamo! 🫁</p>
<p>Questo lavoro si chiama <b>fotosintesi</b> (vuol dire «mettere insieme con la luce»).</p>`
    },
    {
      type: "svg",
      title: "La fotosintesi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<circle cx="80" cy="70" r="42" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
<text x="80" y="80" font-size="28" text-anchor="middle">☀️</text>
<path d="M300 150 Q200 60 140 150 Q200 240 300 150 Z" fill="#4ade80" stroke="#15803d" stroke-width="4"/>
<path d="M140 150 L300 150" stroke="#15803d" stroke-width="3"/>
<path d="M125 95 L190 130" stroke="#eab308" stroke-width="5"/><polygon points="185,120 200,135 180,138" fill="#eab308"/>
<text x="20" y="140" font-size="17" fill="#854d0e" font-weight="bold">luce</text>
<path d="M220 280 L220 210" stroke="#2563eb" stroke-width="5"/><polygon points="210,215 220,195 230,215" fill="#2563eb"/>
<text x="150" y="292" font-size="17" fill="#1d4ed8" font-weight="bold">acqua dalla radice</text>
<path d="M30 220 L130 175" stroke="#64748b" stroke-width="5"/><polygon points="122,168 142,172 128,186" fill="#64748b"/>
<text x="10" y="245" font-size="17" fill="#334155" font-weight="bold">anidride carbonica</text>
<path d="M310 130 L420 90" stroke="#0ea5e9" stroke-width="5"/><polygon points="414,80 435,86 420,100" fill="#0ea5e9"/>
<text x="440" y="90" font-size="18" fill="#0369a1" font-weight="bold">ossigeno 🫁</text>
<path d="M310 170 L420 210" stroke="#d97706" stroke-width="5"/><polygon points="414,200 435,214 416,220" fill="#d97706"/>
<text x="440" y="222" font-size="18" fill="#b45309" font-weight="bold">zucchero 🍬</text>
<text x="220" y="156" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">clorofilla</text>
</svg>`,
      caption: "Nella foglia entrano luce, acqua e anidride carbonica; escono zucchero (il cibo della pianta) e ossigeno."
    },
    {
      type: "quiz",
      title: "Mini-quiz: radice, fusto, foglie",
      questions: [
        { type: "mc", q: "Quale parte assorbe l'acqua dal terreno?", options: ["La foglia", "La radice", "Il fiore"], answer: 1, explain: "La radice beve l'acqua e i sali minerali." },
        { type: "mc", q: "Come si chiama il fusto degli alberi?", options: ["Tronco", "Petalo", "Polline"], answer: 0, explain: "Il fusto legnoso degli alberi è il tronco." },
        { type: "tf", q: "Le foglie producono l'ossigeno che respiriamo.", answer: true, explain: "Durante la fotosintesi le foglie liberano ossigeno." }
      ]
    },
    {
      type: "text",
      title: "Il fiore, il frutto e il seme",
      html: `<ol>
<li>🌸 Il <b>fiore</b> ha i <b>petali</b> colorati e profumati che attirano api e farfalle. Dentro c'è il <b>polline</b>, una polverina gialla.</li>
<li>🐝 Le api, volando di fiore in fiore, portano il polline da un fiore all'altro: è l'<b>impollinazione</b>.</li>
<li>🍏 Il fiore impollinato perde i petali e una sua parte si gonfia e diventa il <b>frutto</b>.</li>
<li>🌰 Dentro il frutto ci sono i <b>semi</b>.</li>
<li>🌱 Se un seme cade sulla terra buona, con acqua e calore <b>germoglia</b> e nasce una nuova pianta!</li>
</ol>`
    },
    {
      type: "3d",
      title: "Dentro una pesca 🍑",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fb923c", label: "Buccia (protegge)" },
          { r: 0.96, color: "#fdba74", label: "Polpa (dolce, per attirare gli animali)" },
          { r: 0.42, color: "#92400e", label: "Nocciolo (duro, difende il seme)" },
          { r: 0.2, color: "#fef3c7", label: "Seme (la futura pianta)" }
        ]
      },
      caption: "Ruota la pesca: lo spicchio tagliato mostra la buccia, la polpa, il nocciolo e, al centro, il seme da cui può nascere un nuovo pesco."
    },
    {
      type: "widget",
      title: "Che parte della pianta mangiamo?",
      widget: "classify",
      options: {
        groups: ["🥕 Radice", "🥔 Fusto", "🥬 Foglia", "🥦 Fiore", "🍎 Frutto", "🫘 Seme"],
        items: [
          ["🥕 carota", 0],
          ["ravanello", 0],
          ["🥔 patata", 1],
          ["asparago", 1],
          ["🥬 lattuga", 2],
          ["spinaci", 2],
          ["🥦 cavolfiore", 3],
          ["carciofo", 3],
          ["🍅 pomodoro", 4],
          ["🍐 pera", 4],
          ["🫘 fagioli", 5],
          ["🌽 chicchi di mais", 5]
        ]
      },
      caption: "Sorpresa: la patata è un pezzo di fusto che cresce sotto terra, e il pomodoro è un frutto, perché ha i semi!"
    },
    {
      type: "example",
      title: "Esempio: dal seme al fagiolo 🌱",
      html: `<ul>
<li><b>Giorno 1</b>: metti un fagiolo secco nel cotone bagnato, vicino alla finestra.</li>
<li><b>Giorno 3–4</b>: il seme si gonfia, si rompe la buccia ed esce la <b>radichetta</b>, che va verso il basso.</li>
<li><b>Giorno 6–7</b>: spunta il <b>fusticino</b> verso l'alto, con le prime due foglie.</li>
<li><b>Dopo qualche settimana</b> (in un vaso con la terra): fiori bianchi, poi i <b>baccelli</b> con dentro… nuovi fagioli!</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Giganti e record",
      html: `<p>🌲 L'albero più alto del mondo è una <b>sequoia</b> della California soprannominata <b>Hyperion</b>: è alta circa <b>116 metri</b>, più di un palazzo di 35 piani!</p>
<p>🎋 Alcuni <b>bambù</b> crescono quasi <b>un metro in un giorno</b>: se ti siedi vicino, quasi li vedi crescere!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il fiore più grande… e puzzolente",
      html: `<p>Nelle foreste dell'isola di Sumatra, in Indonesia, vive la <b>Rafflesia</b>: il suo fiore è largo circa <b>1 metro</b> ed è il fiore singolo più grande del mondo. 🌺</p>
<p>Però puzza di carne andata a male! Così attira le mosche, che le fanno da impollinatrici. 🪰</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le parti della pianta",
      intro: "Se i nomi non ti restano in testa, prova con queste idee.",
      tabs: [
        {
          label: "🏠 La pianta-casa",
          html: `<p>Immagina la pianta come una <b>casa</b>:</p>
<ul>
<li>🟫 la <b>radice</b> sono le <b>fondamenta</b> e i <b>tubi dell'acquedotto</b>;</li>
<li>🟩 il <b>fusto</b> sono i <b>muri</b> e le <b>tubature</b> che portano l'acqua ai piani;</li>
<li>🍃 le <b>foglie</b> sono i <b>pannelli solari</b> e la <b>cucina</b>;</li>
<li>🌸 il <b>fiore</b> è la <b>vetrina colorata</b> che invita le api;</li>
<li>🍎 il <b>frutto</b> è la <b>valigia</b> che porta i semi in viaggio.</li>
</ul>`
        },
        {
          label: "🌳 Dentro il tronco",
          html: `<p>Se tagli un tronco vedi tanti <b>cerchi</b>: si chiamano <b>anelli</b>. Ogni anno l'albero aggiunge un anello nuovo sotto la corteccia. Contando gli anelli scopri <b>quanti anni ha</b> l'albero! Gli anelli larghi sono gli anni con tanta pioggia, quelli stretti gli anni secchi.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<circle cx="200" cy="130" r="110" fill="#78350f"/>
<circle cx="200" cy="130" r="98" fill="#fcd34d" stroke="#a16207" stroke-width="3"/>
<circle cx="200" cy="130" r="82" fill="none" stroke="#a16207" stroke-width="3"/>
<circle cx="200" cy="130" r="64" fill="none" stroke="#a16207" stroke-width="3"/>
<circle cx="200" cy="130" r="50" fill="#d97706" stroke="#a16207" stroke-width="3"/>
<circle cx="200" cy="130" r="36" fill="none" stroke="#92400e" stroke-width="3"/>
<circle cx="200" cy="130" r="22" fill="none" stroke="#92400e" stroke-width="3"/>
<circle cx="200" cy="130" r="6" fill="#451a03"/>
<text x="350" y="60" font-size="18" fill="#451a03" font-weight="bold">corteccia</text>
<line x1="345" y1="55" x2="305" y2="80" stroke="#451a03" stroke-width="2"/>
<text x="350" y="120" font-size="18" fill="#a16207" font-weight="bold">legno giovane (chiaro)</text>
<text x="350" y="175" font-size="18" fill="#92400e" font-weight="bold">legno vecchio (scuro)</text>
<text x="350" y="230" font-size="18" fill="#1e293b" font-weight="bold">7 anelli = 7 anni</text>
</svg>`
        },
        {
          label: "🍃 La fotosintesi in 3D",
          html: `<p>Le foglie «catturano» dall'aria questa piccola molecola: l'<b>anidride carbonica</b> (CO₂), fatta di un atomo di carbonio (nero) e due di ossigeno (rossi). È lo stesso gas che noi buttiamo fuori respirando! Le piante lo usano per costruire lo zucchero. Girala con il dito.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.45, color: "#1f2937", label: "C (carbonio)" },
              { x: 1.1, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O (ossigeno)" },
              { x: -1.1, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O (ossigeno)" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        },
        {
          label: "🧩 Abbina parte e lavoro",
          html: `<p>Ogni parte fa un lavoro diverso. Abbinali!</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Radice", "assorbe l'acqua e tiene ferma la pianta"],
              ["Fusto", "sostiene e trasporta la linfa"],
              ["Foglia", "fabbrica il cibo con la luce"],
              ["Fiore", "attira gli insetti e produce i semi"],
              ["Frutto", "protegge i semi e li fa viaggiare"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della pianta: tocca i nodi e scopri il perché",
      nodes: [
        { id: "sole", label: "Luce del Sole", x: 15, y: 8, color: "#eab308", html: "L'energia che fa funzionare la pianta.", why: "Le piante non mangiano: catturano l'energia della luce. Per questo crescono verso la finestra e i girasoli giovani seguono il Sole durante il giorno." },
        { id: "foglie", label: "Foglie", x: 50, y: 15, color: "#22c55e", html: "Fabbricano zucchero e ossigeno con la fotosintesi.", why: "Nel <b>1771</b> l'inglese <b>Joseph Priestley</b> mise una piantina di menta sotto una campana di vetro con una candela spenta: dopo alcuni giorni la candela poteva di nuovo bruciare. La pianta aveva «aggiustato» l'aria! Nel <b>1779</b> l'olandese <b>Jan Ingenhousz</b> scoprì che serve la <b>luce</b>." },
        { id: "fusto", label: "Fusto", x: 50, y: 42, color: "#15803d", html: "Sostiene la pianta e trasporta la linfa.", why: "Dentro il fusto ci sono tubicini sottilissimi: alcuni portano l'acqua in su, altri portano lo zucchero dalle foglie a tutta la pianta. Il medico italiano <b>Marcello Malpighi</b>, verso il 1670, fu tra i primi a studiarli al microscopio." },
        { id: "radice", label: "Radice", x: 50, y: 70, color: "#92400e", html: "Ancora la pianta e assorbe acqua e sali minerali.", why: "La radice cresce sempre verso il basso, perché «sente» la forza di gravità, e cerca l'acqua. Le radici di alcuni alberi sono lunghe quanto l'albero è alto!" },
        { id: "fiore", label: "Fiore", x: 85, y: 30, color: "#ec4899", html: "Colori e profumi per attirare gli insetti; contiene il polline.", why: "I fiori sono colorati e profumati per «invitare» api e farfalle, che in cambio del nettare trasportano il polline. Senza api molte piante non farebbero frutti." },
        { id: "frutto", label: "Frutto", x: 85, y: 58, color: "#ef4444", html: "Nasce dal fiore e protegge i semi.", why: "La polpa dolce attira animali che mangiano il frutto e lasciano i semi lontano: così la nuova pianta non cresce all'ombra della mamma. Altri frutti volano (il soffione) o galleggiano (il cocco)." },
        { id: "seme", label: "Seme", x: 85, y: 88, color: "#a16207", html: "Contiene la piantina in miniatura e una scorta di cibo.", why: "Un seme può aspettare anche anni il momento giusto. Alcuni semi di palma da datteri trovati in Israele, vecchi circa <b>2000 anni</b>, sono riusciti a germogliare!" },
        { id: "acqua", label: "Acqua e sali", x: 15, y: 70, color: "#3b82f6", html: "Arrivano dal terreno attraverso le radici.", why: "Senza acqua la pianta appassisce: le cellule perdono acqua e il fusto non sta più dritto. I sali minerali sono come le vitamine della pianta." }
      ],
      edges: [
        ["sole", "foglie", "dà energia alle"],
        ["acqua", "radice", "entra nella"],
        ["radice", "fusto", "manda la linfa al"],
        ["fusto", "foglie", "porta acqua alle"],
        ["fusto", "fiore", "sostiene il"],
        ["fiore", "frutto", "diventa"],
        ["frutto", "seme", "protegge il"],
        ["seme", "radice", "germoglia: nuova"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: fiori, frutti e semi",
      questions: [
        { type: "mc", q: "Chi porta il polline da un fiore all'altro?", options: ["I sassi", "Le api", "I lombrichi"], answer: 1, explain: "Le api, volando di fiore in fiore, trasportano il polline." },
        { type: "tf", q: "Il pomodoro è un frutto.", answer: true, explain: "Nasce dal fiore e contiene i semi: per gli scienziati è un frutto." },
        { type: "mc", q: "Da che cosa nasce una nuova pianta?", options: ["Dal seme", "Dal petalo", "Dalla corteccia"], answer: 0, explain: "Il seme contiene la piantina in miniatura." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Radice</b>: tiene ferma la pianta e beve acqua.</li>
<li><b>Fusto</b>: sostiene e trasporta la linfa.</li>
<li><b>Foglie</b>: fanno il cibo con la luce (fotosintesi) e liberano ossigeno.</li>
<li><b>Fiore</b> → <b>frutto</b> → <b>semi</b> → nuova pianta.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Radice", d: "Parte sotto terra che assorbe acqua e sali e tiene ferma la pianta." },
    { t: "Fusto", d: "Parte che sostiene la pianta e trasporta la linfa; negli alberi è il tronco." },
    { t: "Linfa", d: "Il liquido che scorre dentro la pianta." },
    { t: "Clorofilla", d: "Sostanza verde delle foglie che cattura la luce." },
    { t: "Fotosintesi", d: "Il lavoro delle foglie che con luce, acqua e anidride carbonica fanno zucchero e ossigeno." },
    { t: "Polline", d: "Polverina gialla del fiore che serve a formare i semi." },
    { t: "Impollinazione", d: "Il trasporto del polline da un fiore all'altro." },
    { t: "Seme", d: "Contiene la piantina in miniatura da cui nasce una nuova pianta." },
    { t: "Germogliare", d: "Il seme si apre e comincia a crescere." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale parte della pianta sta sotto terra?", options: ["Il fiore", "La radice", "La foglia"], answer: 1, explain: "La radice sta sotto terra." },
      { type: "mc", q: "Dove avviene la fotosintesi?", options: ["Nelle foglie", "Nelle radici", "Nei semi"], answer: 0, explain: "Le foglie, con la clorofilla, fanno la fotosintesi." },
      { type: "text", q: "Come si chiama la sostanza verde delle foglie?", answer: ["clorofilla", "la clorofilla"], explain: "La clorofilla cattura la luce del Sole." },
      { type: "tf", q: "Il fusto trasporta l'acqua dalla radice alle foglie.", answer: true, explain: "Dentro il fusto ci sono tubicini che portano la linfa." },
      { type: "tf", q: "Le piante non hanno bisogno di luce.", answer: false, explain: "Senza luce le foglie non possono fare il cibo." },
      { type: "order", q: "Metti in ordine la vita della pianta.", items: ["Seme", "Germoglio", "Pianta con le foglie", "Fiore", "Frutto con i semi"], explain: "Dal seme nasce il germoglio, cresce la pianta, fa il fiore, il fiore diventa frutto con nuovi semi." },
      { type: "mc", q: "La carota è…", options: ["una radice", "un fiore", "un frutto"], answer: 0, explain: "Della carota mangiamo la radice." },
      { type: "mc", q: "Che cosa liberano le foglie nell'aria?", options: ["Fumo", "Ossigeno", "Polvere"], answer: 1, explain: "Durante la fotosintesi le foglie liberano ossigeno." },
      { type: "mc", q: "A che cosa servono i colori e il profumo dei fiori?", options: ["Ad attirare gli insetti", "A spaventare gli uccelli", "A niente"], answer: 0, explain: "Attirano api e farfalle, che trasportano il polline." },
      { type: "text", q: "Come si chiama il fusto legnoso degli alberi?", answer: ["tronco", "il tronco"], explain: "Il tronco." },
      { type: "mc", q: "Che cosa c'è dentro il frutto?", options: ["I semi", "Le radici", "La corteccia"], answer: 0, explain: "Il frutto protegge i semi." }
    ]
  }
});
