TOPIC('it', {
  id: "p2-sci-acqua-stati",
  title: "L'acqua e i suoi stati",
  intro: "L'acqua è una vera trasformista 🎩: può essere <b>ghiaccio</b> 🧊 duro, <b>acqua</b> 💧 che scorre o <b>vapore</b> ♨️ invisibile. Sono i tre <b>stati</b> dell'acqua: <b>solido</b>, <b>liquido</b> e <b>gassoso</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Tre modi di essere acqua",
      html: `<ul>
<li>🧊 <b>Solido</b>: il <b>ghiaccio</b>, la <b>neve</b>, la grandine. Ha una <b>forma sua</b>: un cubetto di ghiaccio resta un cubetto anche se lo metti in un piatto.</li>
<li>💧 <b>Liquido</b>: l'<b>acqua</b> del rubinetto, del mare, della pioggia. <b>Non ha una forma sua</b>: prende la forma del recipiente (bicchiere, bottiglia, vasca).</li>
<li>♨️ <b>Gassoso</b>: il <b>vapore acqueo</b>. È <b>invisibile</b> e si sparge dappertutto nell'aria.</li>
</ul>
<p>È sempre <b>la stessa acqua</b>! Cambia solo il suo stato.</p>`
    },
    {
      type: "svg",
      title: "Solido, liquido, gassoso",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<rect x="60" y="110" width="90" height="90" rx="10" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<path d="M75 125 L100 125" stroke="#ffffff" stroke-width="6"/>
<path d="M250 100 L265 220 L335 220 L350 100" fill="none" stroke="#475569" stroke-width="4"/>
<path d="M256 150 L262 216 L338 216 L344 150 Z" fill="#3b82f6"/>
<path d="M465 210 Q450 180 470 160 Q490 140 470 115 Q455 95 475 75" stroke="#94a3b8" stroke-width="6" fill="none" stroke-dasharray="4 8"/>
<path d="M505 210 Q490 180 510 160 Q530 140 510 115 Q495 95 515 75" stroke="#94a3b8" stroke-width="6" fill="none" stroke-dasharray="4 8"/>
<path d="M440 220 L540 220 L530 250 L450 250 Z" fill="#64748b"/>
<text x="105" y="60" font-size="24" text-anchor="middle" font-weight="bold" fill="#0369a1">SOLIDO</text>
<text x="300" y="60" font-size="24" text-anchor="middle" font-weight="bold" fill="#1d4ed8">LIQUIDO</text>
<text x="490" y="45" font-size="24" text-anchor="middle" font-weight="bold" fill="#475569">GASSOSO</text>
<text x="105" y="240" font-size="17" text-anchor="middle" fill="#0c4a6e">ghiaccio</text>
<text x="105" y="262" font-size="15" text-anchor="middle" fill="#0c4a6e">forma propria</text>
<text x="300" y="250" font-size="17" text-anchor="middle" fill="#1e3a8a">acqua</text>
<text x="300" y="272" font-size="15" text-anchor="middle" fill="#1e3a8a">forma del recipiente</text>
<text x="490" y="275" font-size="17" text-anchor="middle" fill="#334155">vapore: si sparge</text>
</svg>`,
      caption: "Il ghiaccio ha una forma sua, l'acqua prende la forma del bicchiere, il vapore si sparge nell'aria."
    },
    {
      type: "text",
      title: "Che cosa fa cambiare stato? Il calore!",
      html: `<p>🔥 Se <b>scaldiamo</b>:</p>
<ul>
<li>🧊 → 💧 il ghiaccio <b>fonde</b> e diventa acqua: <b>fusione</b> (succede a <b>0 °C</b>);</li>
<li>💧 → ♨️ l'acqua diventa vapore: <b>evaporazione</b>. Se la scaldiamo tanto, a <b>100 °C</b>, <b>bolle</b>: <b>ebollizione</b>.</li>
</ul>
<p>❄️ Se <b>raffreddiamo</b>:</p>
<ul>
<li>♨️ → 💧 il vapore torna goccioline: <b>condensazione</b>;</li>
<li>💧 → 🧊 l'acqua <b>gela</b>: <b>solidificazione</b> (a <b>0 °C</b>).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Il giro dei cambiamenti",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<circle cx="100" cy="150" r="60" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<circle cx="300" cy="150" r="60" fill="#93c5fd" stroke="#1d4ed8" stroke-width="4"/>
<circle cx="500" cy="150" r="60" fill="#e2e8f0" stroke="#64748b" stroke-width="4"/>
<text x="100" y="162" font-size="38" text-anchor="middle">🧊</text>
<text x="300" y="162" font-size="38" text-anchor="middle">💧</text>
<text x="500" y="162" font-size="38" text-anchor="middle">♨️</text>
<path d="M150 115 Q200 70 250 115" stroke="#dc2626" stroke-width="5" fill="none"/><polygon points="242,104 258,122 238,124" fill="#dc2626"/>
<path d="M350 115 Q400 70 450 115" stroke="#dc2626" stroke-width="5" fill="none"/><polygon points="442,104 458,122 438,124" fill="#dc2626"/>
<path d="M450 185 Q400 230 350 185" stroke="#2563eb" stroke-width="5" fill="none"/><polygon points="358,196 342,178 362,176" fill="#2563eb"/>
<path d="M250 185 Q200 230 150 185" stroke="#2563eb" stroke-width="5" fill="none"/><polygon points="158,196 142,178 162,176" fill="#2563eb"/>
<text x="200" y="62" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">fusione 🔥</text>
<text x="400" y="62" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">evaporazione 🔥</text>
<text x="400" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">condensazione ❄️</text>
<text x="200" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">solidificazione ❄️</text>
<text x="100" y="235" font-size="15" text-anchor="middle" fill="#0c4a6e">solido</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#1e3a8a">liquido</text>
<text x="500" y="235" font-size="15" text-anchor="middle" fill="#334155">gassoso</text>
<text x="300" y="25" font-size="16" text-anchor="middle" fill="#7f1d1d">rosso = scaldo · blu = raffreddo</text>
</svg>`,
      caption: "Le frecce rosse si fanno scaldando, quelle blu raffreddando."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i tre stati",
      questions: [
        { type: "mc", q: "Il ghiaccio è acqua allo stato…", options: ["solido", "liquido", "gassoso"], answer: 0, explain: "Il ghiaccio è solido: ha una forma sua." },
        { type: "tf", q: "L'acqua liquida prende la forma del recipiente.", answer: true, explain: "Nel bicchiere ha la forma del bicchiere, nella bottiglia quella della bottiglia." },
        { type: "mc", q: "Che cosa succede al ghiaccio se lo scaldi?", options: ["Fonde", "Diventa più duro", "Sparisce nel nulla"], answer: 0, explain: "Il ghiaccio fonde e diventa acqua liquida: è la fusione." }
      ]
    },
    {
      type: "example",
      title: "Esempio: il ghiacciolo al sole 🍧",
      html: `<p>D'estate un ghiacciolo al sole <b>si scioglie</b>: il calore lo fa passare da <b>solido</b> a <b>liquido</b> (fusione).</p>
<p>Il succo che cade sull'asfalto caldo, dopo un po', <b>sparisce</b>: è <b>evaporato</b>, è diventato vapore invisibile nell'aria.</p>`
    },
    {
      type: "example",
      title: "Esempio: lo specchio del bagno 🪞",
      html: `<p>Dopo una doccia calda lo specchio si <b>appanna</b>.</p>
<p>Il vapore dell'acqua calda tocca lo specchio, che è più <b>freddo</b>, e torna in tante goccioline: è la <b>condensazione</b>. Puoi anche scriverci sopra con il dito!</p>
<p>Succede lo stesso quando una bottiglia fredda presa dal frigo «suda» goccioline.</p>`
    },
    {
      type: "widget",
      title: "Che stato è?",
      widget: "classify",
      options: {
        groups: ["🧊 Solido", "💧 Liquido", "♨️ Gassoso"],
        items: [
          ["❄️ neve", 0],
          ["🌧️ pioggia", 1],
          ["vapore della pentola", 2],
          ["🧊 cubetto in frigo", 0],
          ["🌊 mare", 1],
          ["umidità invisibile nell'aria", 2],
          ["grandine", 0],
          ["🚿 acqua della doccia", 1]
        ]
      },
      caption: "Attenzione: la «nuvoletta» bianca sopra la pentola è fatta di goccioline già condensate. Il vapore vero è invisibile!"
    },
    {
      type: "3d",
      title: "La molecola dell'acqua",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.6, color: "#ef4444", label: "O (ossigeno)" },
          { x: 0.76, y: 0.58, z: 0, r: 0.38, color: "#f8fafc", label: "H (idrogeno)" },
          { x: -0.76, y: 0.58, z: 0, r: 0.38, color: "#f8fafc", label: "H (idrogeno)" }
        ],
        bonds: [[0, 1], [0, 2]]
      },
      caption: "L'acqua è fatta di minuscole particelle, le molecole H₂O: un atomo di ossigeno e due di idrogeno. Sono così piccole che in una goccia ce ne sono miliardi di miliardi! Ruotala."
    },
    {
      type: "text",
      title: "Che cosa fanno le particelle?",
      html: `<p>Le molecole d'acqua si muovono <b>sempre</b>. Il calore le fa muovere <b>più forte</b>:</p>
<ul>
<li>🧊 nel <b>ghiaccio</b> sono <b>vicine e ferme al loro posto</b>: vibrano soltanto, come bambini in fila che si tengono per mano;</li>
<li>💧 nell'<b>acqua</b> sono vicine ma <b>scivolano</b> una sull'altra, come bambini che passeggiano in cortile;</li>
<li>♨️ nel <b>vapore</b> sono <b>lontane</b> e corrono dappertutto, come bambini che giocano a rincorrersi in un prato enorme.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il ghiaccio galleggia",
      html: `<p>Quasi tutte le sostanze, quando diventano solide, si stringono. L'acqua no! Quando gela si <b>allarga</b> (di circa un decimo): per questo una bottiglia piena dimenticata nel freezer può <b>scoppiare</b>. 💥</p>
<p>Per lo stesso motivo il ghiaccio è più leggero dell'acqua e <b>galleggia</b>: gli iceberg galleggiano nel mare e d'inverno i laghi gelano solo in superficie. Sotto, i pesci continuano a nuotare! 🐟</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? In montagna la pasta cuoce peggio",
      html: `<p>In città l'acqua bolle a <b>100 °C</b>. In alta montagna l'aria «spinge» meno sull'acqua e bolle prima: in cima al monte <b>Everest</b> (8849 m) bolle a circa <b>70 °C</b>!</p>
<p>Così lassù la pasta e le uova cuociono molto più lentamente. 🍝🏔️</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli stati dell'acqua",
      intro: "Se le parole difficili ti confondono, prova con giochi, disegni e il 3D.",
      tabs: [
        {
          label: "💃 Il ballo delle particelle",
          html: `<p>Giocate in classe! Ogni bambino è una molecola d'acqua.</p>
<ul>
<li>🧊 <b>Ghiaccio</b>: tutti stretti, vi tenete per mano e dondolate sul posto.</li>
<li>💧 La maestra dice «<b>scaldo!</b>»: lasciate le mani e camminate vicini, scivolando uno accanto all'altro.</li>
<li>♨️ «<b>Scaldo ancora!</b>»: correte per tutta la palestra, lontani.</li>
<li>❄️ «<b>Raffreddo!</b>»: rallentate e tornate vicini…</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="20" y="30" width="170" height="150" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
<rect x="215" y="30" width="170" height="150" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="410" y="30" width="170" height="150" fill="#f1f5f9" stroke="#64748b" stroke-width="3"/>
<g fill="#38bdf8" stroke="#0369a1" stroke-width="2">
<circle cx="55" cy="65" r="14"/><circle cx="90" cy="65" r="14"/><circle cx="125" cy="65" r="14"/><circle cx="160" cy="65" r="14"/>
<circle cx="55" cy="100" r="14"/><circle cx="90" cy="100" r="14"/><circle cx="125" cy="100" r="14"/><circle cx="160" cy="100" r="14"/>
<circle cx="55" cy="135" r="14"/><circle cx="90" cy="135" r="14"/><circle cx="125" cy="135" r="14"/><circle cx="160" cy="135" r="14"/>
</g>
<g fill="#3b82f6" stroke="#1e3a8a" stroke-width="2">
<circle cx="245" cy="150" r="14"/><circle cx="275" cy="160" r="14"/><circle cx="305" cy="148" r="14"/><circle cx="340" cy="158" r="14"/>
<circle cx="260" cy="122" r="14"/><circle cx="292" cy="120" r="14"/><circle cx="325" cy="125" r="14"/><circle cx="360" cy="130" r="14"/>
</g>
<g fill="#cbd5e1" stroke="#475569" stroke-width="2">
<circle cx="440" cy="60" r="14"/><circle cx="540" cy="80" r="14"/><circle cx="480" cy="150" r="14"/><circle cx="555" cy="155" r="14"/><circle cx="500" cy="95" r="14"/>
</g>
<text x="105" y="205" font-size="18" text-anchor="middle" fill="#0369a1" font-weight="bold">ghiaccio: in fila</text>
<text x="300" y="205" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">acqua: scivolano</text>
<text x="495" y="205" font-size="18" text-anchor="middle" fill="#475569" font-weight="bold">vapore: corrono</text>
</svg>`
        },
        {
          label: "🇺🇸 I gradi americani",
          html: `<p>In Italia misuriamo la temperatura in <b>gradi Celsius</b> (°C): il ghiaccio fonde a <b>0 °C</b> e l'acqua bolle a <b>100 °C</b>.</p>
<p>Negli <b>Stati Uniti</b> usano i <b>gradi Fahrenheit</b> (°F): lì il ghiaccio fonde a <b>32 °F</b> e l'acqua bolle a <b>212 °F</b>! Se un bambino americano dice «fuori ci sono 90 gradi», non sta bruciando: sono circa 32 °C, una giornata d'estate.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Il ghiaccio fonde", "0 °C = 32 °F"],
              ["L'acqua bolle", "100 °C = 212 °F"],
              ["Il nostro corpo", "circa 37 °C = 98,6 °F"],
              ["Una bella giornata d'estate", "circa 30 °C = 86 °F"]
            ]
          }
        },
        {
          label: "🌍 L'acqua sul pianeta",
          html: `<p>Sulla Terra l'acqua c'è in tutti e tre gli stati: <b>solida</b> nei ghiacci dei Poli e sulle montagne, <b>liquida</b> nei mari, nei laghi e nei fiumi, <b>gassosa</b> nell'aria. I mari coprono circa <b>7 decimi</b> della superficie della Terra: per questo dallo spazio sembra un pianeta blu! Gira il globo.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -80, lon: 0, label: "🧊 Antartide: ghiaccio", color: "#38bdf8" },
              { lat: 72, lon: -40, label: "🧊 Groenlandia: ghiaccio", color: "#38bdf8" },
              { lat: 0, lon: -150, label: "💧 Oceano Pacifico", color: "#1d4ed8" },
              { lat: 46, lon: 8, label: "🏔️ Ghiacciai delle Alpi", color: "#7dd3fc" },
              { lat: -3, lon: -60, label: "♨️ Amazzonia: aria umidissima", color: "#64748b" }
            ]
          }
        },
        {
          label: "🃏 Carte dei cambiamenti",
          html: `<p>Gira le carte e ripassa i nomi dei cambiamenti di stato.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🧊 → 💧", back: "Fusione (scaldando, a 0 °C)" },
              { front: "💧 → 🧊", back: "Solidificazione (raffreddando, a 0 °C)" },
              { front: "💧 → ♨️", back: "Evaporazione (ebollizione a 100 °C)" },
              { front: "♨️ → 💧", back: "Condensazione (raffreddando)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa degli stati dell'acqua: tocca i nodi e scopri il perché",
      nodes: [
        { id: "molecole", label: "Molecole H₂O", x: 50, y: 8, color: "#ef4444", html: "Particelle piccolissime di cui è fatta l'acqua: 1 ossigeno + 2 idrogeno.", why: "Nel <b>1783–1784</b> il francese <b>Antoine Lavoisier</b> dimostrò che l'acqua non è un «elemento», come si credeva da 2000 anni, ma è fatta di due gas: idrogeno e ossigeno. L'inglese Henry Cavendish aveva già ottenuto acqua bruciando l'idrogeno." },
        { id: "calore", label: "Calore", x: 50, y: 32, color: "#f97316", html: "Più calore = particelle più agitate.", why: "Il calore è energia: fa muovere le molecole sempre più veloci. Quando si muovono abbastanza forte, si staccano le une dalle altre e l'acqua cambia stato." },
        { id: "solido", label: "Solido (ghiaccio)", x: 15, y: 55, color: "#0ea5e9", html: "Forma e volume propri; particelle ferme al loro posto.", why: "Nel ghiaccio le molecole si «agganciano» in tanti esagoni: per questo i fiocchi di neve hanno <b>6 punte</b>. Questa struttura è piena di spazi vuoti: per questo il ghiaccio galleggia." },
        { id: "liquido", label: "Liquido (acqua)", x: 50, y: 60, color: "#2563eb", html: "Volume proprio ma forma del recipiente; particelle che scivolano.", why: "Le molecole restano vicine perché si attraggono, ma possono scorrere una sull'altra. Per questo l'acqua si può versare e riempie ogni angolo del bicchiere." },
        { id: "gas", label: "Gassoso (vapore)", x: 85, y: 55, color: "#64748b", html: "Né forma né volume propri; particelle lontane che corrono.", why: "Le molecole sono così veloci che si staccano del tutto e occupano tutto lo spazio che trovano. Per questo il profumo della torta arriva fino in camera!" },
        { id: "termometro", label: "Termometro e gradi", x: 20, y: 85, color: "#a855f7", html: "Strumento che misura la temperatura in gradi.", why: "Nel <b>1742</b> lo svedese <b>Anders Celsius</b> inventò la sua scala usando due punti fissi dell'acqua. All'inizio però l'aveva fatta «al contrario»: 0 per l'acqua che bolle e 100 per il ghiaccio! Poco dopo venne capovolta ed è quella che usiamo oggi." },
        { id: "punti", label: "0 °C e 100 °C", x: 55, y: 85, color: "#16a34a", html: "L'acqua gela a 0 °C e bolle a 100 °C (al livello del mare).", why: "Sono numeri «tondi» perché la scala Celsius è stata costruita proprio sull'acqua. In montagna l'acqua bolle prima di 100 °C, perché l'aria preme di meno." },
        { id: "ciclo", label: "Ciclo dell'acqua", x: 85, y: 85, color: "#14b8a6", html: "In natura l'acqua cambia stato di continuo: mari, nuvole, pioggia.", why: "Il Sole fa evaporare il mare, il vapore sale e condensa in nuvole, poi ricade come pioggia o neve. È sempre la stessa acqua da miliardi di anni: magari hai bevuto un sorso d'acqua che ha bevuto anche un dinosauro! 🦕" }
      ],
      edges: [
        ["molecole", "calore", "si agitano con il"],
        ["calore", "solido", "poco"],
        ["calore", "liquido", "di più"],
        ["calore", "gas", "tanto"],
        ["solido", "liquido", "fusione"],
        ["liquido", "gas", "evaporazione"],
        ["termometro", "punti", "misura"],
        ["liquido", "punti", "cambia stato a"],
        ["gas", "ciclo", "forma le nuvole del"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: i cambiamenti",
      questions: [
        { type: "mc", q: "A quanti gradi bolle l'acqua (al livello del mare)?", options: ["0 °C", "37 °C", "100 °C"], answer: 2, explain: "L'acqua bolle a 100 °C." },
        { type: "mc", q: "Lo specchio appannato dopo la doccia è un esempio di…", options: ["fusione", "condensazione", "solidificazione"], answer: 1, explain: "Il vapore tocca lo specchio freddo e torna liquido: condensazione." },
        { type: "tf", q: "Il ghiaccio va a fondo nell'acqua.", answer: false, explain: "Il ghiaccio è più leggero dell'acqua e galleggia." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'acqua ha 3 stati: <b>solido</b> (ghiaccio), <b>liquido</b> (acqua), <b>gassoso</b> (vapore).</li>
<li>Scaldando: <b>fusione</b> (🧊→💧) ed <b>evaporazione</b> (💧→♨️).</li>
<li>Raffreddando: <b>condensazione</b> (♨️→💧) e <b>solidificazione</b> (💧→🧊).</li>
<li>Gela a <b>0 °C</b>, bolle a <b>100 °C</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Stato solido", d: "Ha forma e volume propri, come il ghiaccio." },
    { t: "Stato liquido", d: "Ha un volume proprio ma prende la forma del recipiente, come l'acqua." },
    { t: "Stato gassoso", d: "Non ha forma né volume propri e si sparge ovunque, come il vapore." },
    { t: "Fusione", d: "Passaggio da solido a liquido." },
    { t: "Solidificazione", d: "Passaggio da liquido a solido." },
    { t: "Evaporazione", d: "Passaggio da liquido a gas." },
    { t: "Condensazione", d: "Passaggio da gas a liquido." },
    { t: "Ebollizione", d: "Evaporazione veloce con le bolle, a 100 °C." },
    { t: "Termometro", d: "Strumento che misura la temperatura." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In quale stato si trova la neve?", options: ["Solido", "Liquido", "Gassoso"], answer: 0, explain: "La neve è acqua solida." },
      { type: "mc", q: "Come si chiama il passaggio da ghiaccio ad acqua?", options: ["Fusione", "Condensazione", "Evaporazione"], answer: 0, explain: "La fusione: il solido diventa liquido." },
      { type: "num", q: "A quanti gradi Celsius gela l'acqua?", answer: 0, unit: "°C", explain: "L'acqua gela a 0 °C." },
      { type: "num", q: "A quanti gradi Celsius bolle l'acqua al livello del mare?", answer: 100, unit: "°C", explain: "L'acqua bolle a 100 °C." },
      { type: "tf", q: "Il vapore acqueo è invisibile.", answer: true, explain: "Il vapore vero è invisibile; la «nuvoletta» bianca è fatta di goccioline." },
      { type: "tf", q: "L'acqua liquida ha una forma sua.", answer: false, explain: "L'acqua prende la forma del recipiente." },
      { type: "mc", q: "I panni stesi si asciugano perché l'acqua…", options: ["gela", "evapora", "condensa"], answer: 1, explain: "Il calore e il vento fanno evaporare l'acqua dei panni." },
      { type: "order", q: "Metti in ordine: un cubetto di ghiaccio in una pentola sul fuoco.", items: ["Ghiaccio solido", "Il ghiaccio fonde", "Acqua liquida", "L'acqua bolle e diventa vapore"], explain: "Scaldando: prima la fusione, poi l'evaporazione." },
      { type: "text", q: "Come si chiama il passaggio da vapore ad acqua liquida?", answer: ["condensazione", "la condensazione"], explain: "La condensazione." },
      { type: "mc", q: "Perché una bottiglia d'acqua piena può scoppiare nel freezer?", options: ["Perché l'acqua gelando si allarga", "Perché il freezer è troppo caldo", "Perché il ghiaccio è pesante"], answer: 0, explain: "Quando gela, l'acqua aumenta di volume." },
      { type: "mc", q: "Che cosa fa cambiare stato all'acqua?", options: ["Il colore", "Il calore", "Il rumore"], answer: 1, explain: "Scaldando o raffreddando l'acqua cambia stato." },
      { type: "tf", q: "Ghiaccio, acqua e vapore sono la stessa sostanza.", answer: true, explain: "Sono tutti fatti di molecole H₂O: cambia solo lo stato." }
    ]
  }
});
