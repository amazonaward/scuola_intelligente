TOPIC('it', {
  id: "p2-ita-aggettivi",
  title: "Gli aggettivi qualificativi",
  intro: "Un gatto. Un gatto <b>nero</b>, <b>piccolo</b> e <b>morbido</b>! 🐈‍⬛ Le parole che descrivono come sono le cose si chiamano <b>aggettivi qualificativi</b>: rendono i nostri discorsi pieni di colori.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cos'è un aggettivo qualificativo",
      html: `<p>L'<b>aggettivo qualificativo</b> è una parola che dice <b>com'è</b> una persona, un animale o una cosa.</p>
<p>Sta sempre <b>vicino a un nome</b> e gli aggiunge una <b>qualità</b>:</p>
<ul>
<li>una mela <b>rossa</b> 🍎 (colore)</li>
<li>un pallone <b>rotondo</b> ⚽ (forma)</li>
<li>un elefante <b>enorme</b> 🐘 (grandezza)</li>
<li>un amico <b>simpatico</b> 😄 (carattere)</li>
<li>un gelato <b>dolce</b> 🍦 (sapore)</li>
</ul>
<p>Per trovarlo, chiediti: <b>com'è?</b></p>`
    },
    {
      type: "svg",
      title: "Con o senza aggettivi?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="20" width="270" height="260" rx="16" fill="#e5e7eb" stroke="#6b7280" stroke-width="3"/>
<rect x="310" y="20" width="270" height="260" rx="16" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
<rect x="95" y="100" width="120" height="90" fill="#9ca3af" stroke="#4b5563" stroke-width="3"/>
<polygon points="85,100 155,50 225,100" fill="#6b7280"/>
<rect x="140" y="140" width="30" height="50" fill="#4b5563"/>
<text x="155" y="240" font-size="26" text-anchor="middle" fill="#374151" font-weight="bold">una casa</text>
<rect x="385" y="110" width="120" height="80" fill="#f472b6" stroke="#9d174d" stroke-width="3"/>
<polygon points="370,110 445,45 520,110" fill="#dc2626"/>
<rect x="430" y="140" width="30" height="50" fill="#7c2d12"/>
<rect x="395" y="125" width="25" height="22" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<rect x="472" y="125" width="25" height="22" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<circle cx="540" cy="60" r="22" fill="#facc15"/>
<rect x="320" y="190" width="250" height="10" fill="#22c55e"/>
<text x="445" y="235" font-size="22" text-anchor="middle" fill="#9d174d" font-weight="bold">una casa <tspan fill="#db2777">rosa</tspan>,</text>
<text x="445" y="263" font-size="22" text-anchor="middle" fill="#9d174d" font-weight="bold"><tspan fill="#ca8a04">allegra</tspan> e <tspan fill="#2563eb">piccola</tspan></text>
</svg>`,
      caption: "Senza aggettivi la casa è grigia e senza vita; con gli aggettivi la vediamo davvero!"
    },
    {
      type: "widget",
      title: "Gioco: che qualità descrive?",
      widget: "classify",
      options: { groups: ["Colore 🎨", "Grandezza 📏", "Carattere 😊", "Sapore 👅"], items: [
        ["verde", 0], ["giallo", 0], ["azzurro", 0],
        ["grande", 1], ["minuscolo", 1], ["alto", 1],
        ["gentile", 2], ["coraggioso", 2], ["timido", 2],
        ["salato", 3], ["dolce", 3], ["amaro", 3]
      ] },
      caption: "Ogni aggettivo descrive un tipo di qualità. Mettilo nel gruppo giusto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: trova l'aggettivo",
      questions: [
        { type: "mc", q: "In «Il cielo azzurro» l'aggettivo è…", options: ["il", "cielo", "azzurro"], answer: 2, explain: "Com'è il cielo? Azzurro." },
        { type: "mc", q: "Quale parola è un aggettivo?", options: ["corre", "veloce", "bicicletta"], answer: 1, explain: "Veloce dice com'è qualcosa." },
        { type: "tf", q: "L'aggettivo risponde alla domanda «com'è?».", answer: true, explain: "Proprio così: descrive una qualità." }
      ]
    },
    {
      type: "text",
      title: "L'aggettivo va d'accordo con il nome",
      html: `<p>L'aggettivo è un vero amico del nome: si <b>veste come lui</b>! Se il nome è femminile o plurale, anche l'aggettivo cambia.</p>
<table>
<tr><th></th><th>Singolare</th><th>Plurale</th></tr>
<tr><td>Maschile</td><td>gatto ner<b>o</b></td><td>gatti ner<b>i</b></td></tr>
<tr><td>Femminile</td><td>gatta ner<b>a</b></td><td>gatte ner<b>e</b></td></tr>
</table>
<p>Questo si chiama <b>concordanza</b>: nome e aggettivo hanno lo stesso <b>genere</b> e lo stesso <b>numero</b>.</p>
<p>Alcuni aggettivi finiscono in <b>-e</b> e hanno solo due forme: un cane grand<b>e</b>, una casa grand<b>e</b>, cani grand<b>i</b>, case grand<b>i</b>.</p>`
    },
    {
      type: "text",
      title: "I contrari e il «grado»",
      html: `<p>Molti aggettivi hanno un <b>contrario</b>: alto ↔ basso, caldo ↔ freddo, felice ↔ triste, pieno ↔ vuoto, veloce ↔ lento 🐇🐢.</p>
<p>Possiamo anche dire che una qualità è <b>fortissima</b>, aggiungendo <b>-issimo</b>: bello → <b>bellissimo</b>, buono → <b>buonissimo</b>, alta → <b>altissima</b>. 🌟</p>`
    },
    {
      type: "example",
      title: "Esempio: descrivo il mio animale 🐶",
      html: `<p>Senza aggettivi: «Ho un cane. Ha il pelo e le orecchie.»</p>
<p>Con gli aggettivi: «Ho un cane <b>piccolo</b> e <b>vivace</b>. Ha il pelo <b>marrone</b> e <b>morbido</b> e le orecchie <b>lunghe</b>. È <b>buonissimo</b>!»</p>
<p>Ora riesci a immaginarlo! Gli aggettivi sono come i <b>pastelli</b> delle parole. 🖍️</p>`
    },
    {
      type: "example",
      title: "Esempio: indovina chi è! 🕵️",
      html: `<p>«È <b>grande</b> e <b>grigio</b>. Ha le orecchie <b>enormi</b> e il naso <b>lunghissimo</b>.»</p>
<p>Chi è? Un elefante! 🐘</p>
<p>«È <b>piccola</b>, <b>verde</b> e <b>saltellante</b>. Vive vicino allo stagno.» Una rana! 🐸</p>
<p>Prova tu a inventare un indovinello per un compagno usando solo aggettivi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>La posizione dell'aggettivo può cambiare il significato! Un <b>uomo grande</b> è un uomo alto e grosso; un <b>grande uomo</b> è una persona importante, che ha fatto cose straordinarie. 🦸</p>
<p>Lo stesso con «un <b>amico vecchio</b>» (anziano) e «un <b>vecchio amico</b>» (che conosci da tanto tempo).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In <b>inglese</b> gli aggettivi non cambiano mai: <i>a red car</i> (una macchina rossa), <i>two red cars</i> (due macchine rosse). Sempre <i>red</i>! E si mettono <b>prima</b> del nome. 🇬🇧</p>
<p>Anche in italiano ci sono aggettivi «pigri» che non cambiano mai: <b>blu</b>, <b>rosa</b>, <b>viola</b>. Si dice «un fiore rosa» e «due magliette rosa», «un mare blu» e «gli occhi blu»! 💙</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'aggettivo qualificativo dice <b>com'è</b> un nome.</li>
<li>Si accorda con il nome in <b>genere</b> e <b>numero</b>: gatta nera, gatti neri.</li>
<li>Molti aggettivi hanno un <b>contrario</b>.</li>
<li>Con <b>-issimo</b> diciamo che una qualità è al massimo: bellissimo.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli aggettivi",
      intro: "Ecco altre strade per scoprire e usare gli aggettivi.",
      tabs: [
        {
          label: "🖍️ I pastelli",
          html: `<p>Il <b>nome</b> è il disegno a matita, solo i contorni. Gli <b>aggettivi</b> sono i <b>pastelli</b>: colorano, aggiungono dettagli, fanno vedere se è grande o piccolo, allegro o triste.</p>
<p>Prova: disegna «un albero». Poi disegna «un albero <b>altissimo</b>, <b>spoglio</b> e <b>storto</b>». Sono due disegni diversissimi!</p>`
        },
        {
          label: "👃 I cinque sensi",
          html: `<p>Usa i cinque sensi come una lente d'ingrandimento 🔍 per trovare aggettivi:</p>
<ul>
<li>👀 <b>Vista</b>: rosso, rotondo, lucido</li>
<li>👂 <b>Udito</b>: rumoroso, silenzioso, squillante</li>
<li>👃 <b>Olfatto</b>: profumato, puzzolente</li>
<li>👅 <b>Gusto</b>: dolce, salato, aspro</li>
<li>✋ <b>Tatto</b>: morbido, ruvido, freddo</li>
</ul>
<p>Prendi una mela e trova un aggettivo per ogni senso!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0fdf4"/>
<circle cx="300" cy="115" r="60" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>
<rect x="296" y="40" width="8" height="25" fill="#78350f"/>
<path d="M304 50 Q330 30 345 50 Q325 60 304 55 Z" fill="#22c55e"/>
<g font-size="20" font-weight="bold">
<text x="40" y="50" fill="#1d4ed8">👀 rossa</text>
<text x="40" y="120" fill="#7c3aed">✋ liscia</text>
<text x="40" y="190" fill="#b45309">👃 profumata</text>
<text x="420" y="60" fill="#be185d">👅 dolce</text>
<text x="420" y="150" fill="#0f766e">👂 croccante</text>
</g>
</svg>`
        },
        {
          label: "🔗 I contrari",
          html: `<p>Abbina ogni aggettivo al suo contrario.</p>`,
          widget: "match",
          options: { pairs: [
            ["alto", "basso"],
            ["caldo", "freddo"],
            ["veloce", "lento"],
            ["felice", "triste"],
            ["pieno", "vuoto"],
            ["pulito", "sporco"]
          ] }
        },
        {
          label: "🇬🇧 In inglese",
          html: `<p>Vuoi un trucco per ricordare la concordanza? Confronta con l'inglese, dove l'aggettivo non cambia mai:</p>
<ul>
<li><i>a <b>big</b> dog</i> → un cane grand<b>e</b></li>
<li><i>two <b>big</b> dogs</i> → due cani grand<b>i</b></li>
<li><i>a <b>black</b> cat</i> → un gatto ner<b>o</b> / una gatta ner<b>a</b></li>
</ul>
<p>In italiano l'aggettivo è più «educato»: si veste sempre come il nome che accompagna. 🤝</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa degli aggettivi",
      nodes: [
        { id: "agg", label: "Aggettivo qualificativo", x: 50, y: 8, color: "#2563eb", html: "Parola che descrive una qualità del nome.", why: "«Aggettivo» viene dal latino <i>adiectivum</i>, «aggiunto»: è una parola che si aggiunge al nome. «Qualificativo» perché indica una qualità." },
        { id: "nome", label: "Nome", x: 18, y: 30, color: "#16a34a", html: "La parola a cui l'aggettivo si appoggia.", why: "L'aggettivo da solo non sta in piedi: «rosso» di che cosa? Ha bisogno di un nome da descrivere." },
        { id: "qualita", label: "Qualità", x: 82, y: 30, color: "#f59e0b", html: "Colore, forma, grandezza, carattere, sapore…", why: "Le qualità le scopriamo con i cinque sensi e osservando come si comportano le persone e le cose." },
        { id: "concordanza", label: "Concordanza", x: 30, y: 56, color: "#dc2626", html: "Aggettivo e nome hanno lo stesso genere e numero: gatte nere.", why: "È un'eredità del latino, dove nome e aggettivo concordavano sempre. Aiuta a capire chi è descritto, anche quando le parole sono lontane." },
        { id: "genere", label: "Genere e numero", x: 10, y: 80, color: "#a855f7", html: "Maschile/femminile, singolare/plurale: nero, nera, neri, nere.", why: "Gli aggettivi in -o hanno 4 forme, quelli in -e solo 2 (grande, grandi): dipende da come erano in latino." },
        { id: "contrari", label: "Contrari", x: 60, y: 56, color: "#0ea5e9", html: "Coppie di aggettivi opposti: alto/basso.", why: "Il nostro cervello capisce meglio una qualità confrontandola con il suo opposto: «caldo» ha senso perché esiste «freddo»." },
        { id: "grado", label: "Grado (-issimo)", x: 85, y: 56, color: "#14b8a6", html: "bello → bellissimo: la qualità al massimo.", why: "Il suffisso -issimo viene dal latino <i>-issimus</i> (<i>altissimus</i>). Si chiama superlativo assoluto." },
        { id: "posizione", label: "Prima o dopo il nome", x: 50, y: 84, color: "#64748b", html: "Di solito dopo il nome (casa rossa), a volte prima (bella giornata).", why: "Prima del nome l'aggettivo spesso ha un senso più affettivo o figurato: un grande uomo ≠ un uomo grande." }
      ],
      edges: [
        ["agg", "nome", "descrive"],
        ["agg", "qualita", "indica"],
        ["agg", "concordanza", "rispetta"],
        ["concordanza", "genere", "in"],
        ["agg", "contrari", "ha"],
        ["agg", "grado", "ha un"],
        ["agg", "posizione", "cambia con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: concordanza",
      questions: [
        { type: "mc", q: "Le mele sono…", options: ["rosso", "rosse", "rossi"], answer: 1, explain: "Mele è femminile plurale: rosse." },
        { type: "mc", q: "Il contrario di «pieno» è…", options: ["vuoto", "grande", "pesante"], answer: 0, explain: "Pieno ↔ vuoto." },
        { type: "tf", q: "«I bambini allegri» è corretto.", answer: true, explain: "Bambini è maschile plurale e allegri anche." }
      ]
    }
  ],
  glossary: [
    { t: "Aggettivo qualificativo", d: "Parola che dice com'è un nome." },
    { t: "Qualità", d: "Una caratteristica: colore, forma, grandezza, carattere…" },
    { t: "Concordanza", d: "Nome e aggettivo hanno lo stesso genere e numero." },
    { t: "Contrario", d: "Aggettivo con significato opposto: alto/basso." },
    { t: "Superlativo", d: "Forma che indica una qualità al massimo: bellissimo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale parola è un aggettivo qualificativo?", options: ["mangiare", "morbido", "cuscino"], answer: 1, explain: "Morbido dice com'è una cosa." },
      { type: "mc", q: "In «La giraffa alta mangia» l'aggettivo è…", options: ["giraffa", "alta", "mangia"], answer: 1, explain: "Com'è la giraffa? Alta." },
      { type: "mc", q: "I fiori…", options: ["profumato", "profumata", "profumati"], answer: 2, explain: "Fiori è maschile plurale: profumati." },
      { type: "mc", q: "La torta è…", options: ["buono", "buona", "buoni"], answer: 1, explain: "Torta è femminile singolare: buona." },
      { type: "tf", q: "«Una casa grande» e «due case grandi» sono corretti.", answer: true, explain: "Grande ha solo due forme: grande (singolare) e grandi (plurale)." },
      { type: "tf", q: "«Dolce» descrive un colore.", answer: false, explain: "Dolce descrive un sapore." },
      { type: "text", q: "Scrivi il contrario di «caldo».", answer: ["freddo"], explain: "Caldo ↔ freddo." },
      { type: "text", q: "Scrivi il superlativo di «bello» (con -issimo).", answer: ["bellissimo"], explain: "Bello → bellissimo." },
      { type: "mc", q: "Quale frase ha più aggettivi?", options: ["Il gatto dorme.", "Il gatto grigio e grasso dorme.", "Il gatto dorme sul letto."], answer: 1, explain: "Grigio e grasso: due aggettivi." },
      { type: "mc", q: "Le scarpe…", options: ["nuovo", "nuove", "nuovi"], answer: 1, explain: "Scarpe è femminile plurale: nuove." },
      { type: "order", q: "Ordina dal più piccolo al più grande.", items: ["minuscolo", "piccolo", "grande", "enorme"], explain: "Minuscolo < piccolo < grande < enorme." }
    ]
  }
});
