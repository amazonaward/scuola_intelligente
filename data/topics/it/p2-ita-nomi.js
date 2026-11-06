TOPIC('it', {
  id: "p2-ita-nomi",
  title: "I nomi",
  intro: "Ogni cosa ha un <b>nome</b>: le persone 👧, gli animali 🐶, le cose 🎒, i posti 🏰. Scopriamo i nomi <b>comuni</b> e <b>propri</b>, <b>maschili</b> e <b>femminili</b>, <b>singolari</b> e <b>plurali</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è un nome",
      html: `<p>Il <b>nome</b> è la parola che usiamo per chiamare:</p>
<ul>
<li>👧 <b>persone</b>: bambina, maestro, Anna</li>
<li>🐶 <b>animali</b>: cane, gatto, Fido</li>
<li>🎒 <b>cose</b>: zaino, matita, tavolo</li>
<li>🏰 <b>luoghi</b>: città, scuola, Roma</li>
</ul>
<p>Se togliessimo tutti i nomi, non sapremmo più di che cosa stiamo parlando! Prova: «Il … mangia la …». Chi? Che cosa? 🤔</p>`
    },
    {
      type: "text",
      title: "Nomi comuni e nomi propri",
      html: `<p>Il <b>nome comune</b> indica una persona, un animale o una cosa <b>qualsiasi</b>: cane, bambino, fiume, città.</p>
<p>Il <b>nome proprio</b> indica <b>proprio quella</b> persona, quell'animale o quel posto, unico: Fido, Luca, Po, Milano.</p>
<p>⭐ I nomi propri si scrivono sempre con la <b>lettera maiuscola</b>!</p>`
    },
    {
      type: "svg",
      title: "Comune o proprio?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="40" font-size="24" text-anchor="middle" font-weight="bold" fill="#2563eb">NOME COMUNE</text>
<text x="450" y="40" font-size="24" text-anchor="middle" font-weight="bold" fill="#dc2626">NOME PROPRIO</text>
<line x1="300" y1="20" x2="300" y2="285" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8 6"/>
<g fill="#d6a46b" stroke="#78350f" stroke-width="2">
<ellipse cx="80" cy="130" rx="40" ry="28"/><circle cx="110" cy="105" r="18"/>
<ellipse cx="190" cy="130" rx="40" ry="28"/><circle cx="220" cy="105" r="18"/>
<ellipse cx="135" cy="200" rx="40" ry="28"/><circle cx="165" cy="175" r="18"/>
</g>
<text x="150" y="270" font-size="30" text-anchor="middle" fill="#1e3a8a" font-weight="bold">cane</text>
<ellipse cx="450" cy="160" rx="55" ry="38" fill="#d6a46b" stroke="#78350f" stroke-width="3"/>
<circle cx="495" cy="125" r="25" fill="#d6a46b" stroke="#78350f" stroke-width="3"/>
<rect x="420" y="190" width="60" height="14" rx="6" fill="#dc2626"/>
<circle cx="450" cy="215" r="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="450" y="270" font-size="30" text-anchor="middle" fill="#991b1b" font-weight="bold"><tspan fill="#dc2626" font-size="38">F</tspan>ido</text>
</svg>`,
      caption: "«Cane» va bene per tutti i cani; «Fido» è proprio quel cane lì, con la medaglietta! E si scrive con la maiuscola."
    },
    {
      type: "widget",
      title: "Gioco: comune o proprio?",
      widget: "classify",
      options: { groups: ["Nome comune", "Nome proprio"], items: [
        ["🐱 gatto", 0], ["👦 Marco", 1], ["🏙️ città", 0], ["🗼 Roma", 1],
        ["🌊 fiume", 0], ["🏞️ Tevere", 1], ["👩‍🏫 maestra", 0], ["🐶 Fido", 1],
        ["🌍 Italia", 1], ["📚 libro", 0]
      ] },
      caption: "Suggerimento: i nomi propri hanno la maiuscola."
    },
    {
      type: "quiz",
      title: "Mini-quiz: comuni e propri",
      questions: [
        { type: "mc", q: "Quale è un nome proprio?", options: ["bambino", "Giulia", "scuola"], answer: 1, explain: "Giulia è il nome di una persona precisa: si scrive con la maiuscola." },
        { type: "tf", q: "«milano» va scritto con la maiuscola.", answer: true, explain: "È il nome proprio di una città: Milano." },
        { type: "mc", q: "Quale è un nome comune?", options: ["Po", "Napoli", "mare"], answer: 2, explain: "«Mare» va bene per tutti i mari: è comune." }
      ]
    },
    {
      type: "text",
      title: "Maschile e femminile",
      html: `<p>I nomi possono essere <b>maschili</b> o <b>femminili</b>. Questo si chiama <b>genere</b>.</p>
<p>Trucco: metti davanti <b>il / un</b> (maschile) oppure <b>la / una</b> (femminile).</p>
<ul>
<li>il bambino → la bambina 👦👧</li>
<li>il gatto → la gatta 🐈</li>
<li>il maestro → la maestra</li>
</ul>
<p>Anche le cose hanno un genere: <b>il</b> tavolo (maschile), <b>la</b> sedia (femminile).</p>
<p>Alcuni nomi cambiano del tutto: il papà → la mamma, il re → la regina, l'uomo → la donna, il gallo → la gallina 🐓.</p>`
    },
    {
      type: "text",
      title: "Singolare e plurale",
      html: `<p>Un nome è <b>singolare</b> se indica <b>una sola</b> cosa, <b>plurale</b> se ne indica <b>tante</b>. Questo si chiama <b>numero</b>.</p>
<table>
<tr><th>Singolare</th><th>Plurale</th><th>Regola</th></tr>
<tr><td>gatt<b>o</b></td><td>gatt<b>i</b></td><td>-o → -i</td></tr>
<tr><td>cas<b>a</b></td><td>cas<b>e</b></td><td>-a → -e</td></tr>
<tr><td>pesc<b>e</b></td><td>pesc<b>i</b></td><td>-e → -i</td></tr>
</table>
<p>Alcuni nomi <b>non cambiano</b>: la città → le città, il re → i re, il bar → i bar, lo sport → gli sport.</p>`
    },
    {
      type: "svg",
      title: "La macchina dei plurali",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ecfeff"/>
<rect x="210" y="60" width="180" height="150" rx="20" fill="#a78bfa" stroke="#5b21b6" stroke-width="4"/>
<circle cx="260" cy="100" r="14" fill="#fde047" stroke="#a16207" stroke-width="3"/>
<circle cx="340" cy="100" r="14" fill="#fde047" stroke="#a16207" stroke-width="3"/>
<text x="300" y="165" font-size="22" text-anchor="middle" fill="#ffffff" font-weight="bold">PLURALI</text>
<text x="300" y="192" font-size="18" text-anchor="middle" fill="#ede9fe">-o→-i  -a→-e  -e→-i</text>
<polygon points="170,135 205,135 205,120 225,140 205,160 205,145 170,145" fill="#0f766e"/>
<polygon points="395,135 430,135 430,120 450,140 430,160 430,145 395,145" fill="#0f766e"/>
<text x="90" y="110" font-size="28" text-anchor="middle" font-weight="bold" fill="#1e3a8a">gatt<tspan fill="#dc2626">o</tspan></text>
<text x="90" y="150" font-size="28" text-anchor="middle" font-weight="bold" fill="#1e3a8a">cas<tspan fill="#dc2626">a</tspan></text>
<text x="90" y="190" font-size="28" text-anchor="middle" font-weight="bold" fill="#1e3a8a">fior<tspan fill="#dc2626">e</tspan></text>
<text x="515" y="110" font-size="28" text-anchor="middle" font-weight="bold" fill="#065f46">gatt<tspan fill="#dc2626">i</tspan></text>
<text x="515" y="150" font-size="28" text-anchor="middle" font-weight="bold" fill="#065f46">cas<tspan fill="#dc2626">e</tspan></text>
<text x="515" y="190" font-size="28" text-anchor="middle" font-weight="bold" fill="#065f46">fior<tspan fill="#dc2626">i</tspan></text>
<text x="300" y="250" font-size="20" text-anchor="middle" fill="#334155">Cambia solo l'ultima lettera!</text>
</svg>`,
      caption: "Entra un nome singolare, esce un nome plurale: cambia la vocale finale."
    },
    {
      type: "example",
      title: "Esempio: lo zaino di Anna 🎒",
      html: `<p>«<b>Anna</b> apre lo <b>zaino</b> e tira fuori due <b>quaderni</b>, una <b>matita</b> e il <b>diario</b>. Poi va a <b>Torino</b> con la <b>nonna</b>.»</p>
<ul>
<li>Nomi propri: <b>Anna</b>, <b>Torino</b> (maiuscola!)</li>
<li>Nomi comuni: zaino, quaderni, matita, diario, nonna</li>
<li>Plurale: <b>quaderni</b> (uno solo sarebbe «quaderno»)</li>
<li>Femminili: Anna, matita, nonna. Maschili: zaino, quaderni, diario.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio: alla fattoria 🐄",
      html: `<p>Alla fattoria del signor <b>Rossi</b> ci sono: un <b>cavallo</b> e una <b>cavalla</b>, tre <b>mucche</b>, un <b>gallo</b> e tante <b>galline</b>, un cane di nome <b>Bobby</b>.</p>
<p>Guarda come cambiano: cavallo → cavalla (maschile → femminile), mucca → mucche (singolare → plurale; si aggiunge la H per non cambiare suono!), gallo → gallina (cambia di più).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Alcuni nomi sono maschili al singolare e diventano <b>femminili al plurale</b>: l'uovo → le uova 🥚, il braccio → le braccia, il paio → le paia, il dito → le dita.</p>
<p>È un «ricordo» del <b>latino</b>, che aveva anche un terzo genere, il <b>neutro</b>, con il plurale in -a: <i>ovum</i> → <i>ova</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In <b>tedesco</b> tutti i nomi, anche quelli comuni, si scrivono con la <b>maiuscola</b>: <i>der Hund</i> (il cane), <i>die Katze</i> (il gatto)! 🇩🇪</p>
<p>E il nome proprio più diffuso in Italia per i bambini nati negli ultimi anni? Secondo l'ISTAT, tra i maschi è <b>Leonardo</b>. 🦁</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il <b>nome</b> indica persone, animali, cose, luoghi.</li>
<li><b>Comune</b>: uno qualsiasi. <b>Proprio</b>: proprio quello, con la <b>maiuscola</b>.</li>
<li><b>Genere</b>: maschile (il, un) o femminile (la, una).</li>
<li><b>Numero</b>: singolare (uno) o plurale (tanti): -o→-i, -a→-e, -e→-i.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i nomi",
      intro: "Scegli la strada che ti piace di più!",
      tabs: [
        {
          label: "🏷️ Le etichette",
          html: `<p>Immagina di attaccare un'<b>etichetta</b> su ogni cosa della tua cameretta: «letto», «lampada», «armadio», «orsacchiotto»… Tutto quello che puoi etichettare è un <b>nome</b>!</p>
<p>Se l'etichetta va bene per tutti gli oggetti uguali, è un nome <b>comune</b> (orsacchiotto). Se l'etichetta è il nome speciale del tuo orsetto, come <b>Teddy</b>, è un nome <b>proprio</b>: e merita la maiuscola, come una corona 👑!</p>`
        },
        {
          label: "🇬🇧 In inglese",
          html: `<p>In <b>inglese</b> le cose <b>non hanno</b> maschile e femminile: si usa sempre <b>the</b>.</p>
<ul>
<li><i>the</i> table (il tavolo), <i>the</i> chair (la sedia)</li>
</ul>
<p>Il plurale quasi sempre si fa aggiungendo una <b>-s</b>: <i>cat → cats</i>, <i>book → books</i>.</p>
<p>In italiano invece ogni nome ha un genere e cambia la vocale finale. È più ricco, ma ci vuole allenamento!</p>`
        },
        {
          label: "🃏 Carte dei plurali",
          html: `<p>Leggi il nome singolare, di' il plurale ad alta voce, poi gira la carta.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "🐱 il gatto", back: "i gatti" },
            { front: "🏠 la casa", back: "le case" },
            { front: "🌸 il fiore", back: "i fiori" },
            { front: "🏙️ la città", back: "le città (non cambia!)" },
            { front: "🥚 l'uovo", back: "le uova" },
            { front: "🐄 la mucca", back: "le mucche (con la H)" },
            { front: "👑 il re", back: "i re (non cambia!)" }
          ] }
        },
        {
          label: "🔗 Maschile e femminile",
          html: `<p>Abbina ogni maschile al suo femminile.</p>`,
          widget: "match",
          options: { pairs: [
            ["il papà", "la mamma"],
            ["il re", "la regina"],
            ["il gallo", "la gallina"],
            ["il maestro", "la maestra"],
            ["l'attore", "l'attrice"],
            ["il fratello", "la sorella"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei nomi",
      nodes: [
        { id: "nome", label: "Nome", x: 50, y: 8, color: "#2563eb", html: "La parola che indica persone, animali, cose e luoghi.", why: "In grammatica si chiama anche <b>sostantivo</b>, dal latino <i>substantia</i>, «ciò che sta sotto»: indica le cose che esistono, su cui poi parliamo." },
        { id: "comune", label: "Nome comune", x: 18, y: 32, color: "#16a34a", html: "Indica una cosa qualsiasi del suo tipo: cane, città.", why: "Si chiama «comune» perché è in comune a tutti gli oggetti dello stesso tipo: ogni cane è un «cane»." },
        { id: "proprio", label: "Nome proprio", x: 42, y: 32, color: "#dc2626", html: "Indica una sola persona, animale o luogo: Luca, Roma.", why: "«Proprio» vuol dire «che appartiene solo a quello». È unico, quindi lo distinguiamo con la maiuscola." },
        { id: "maiuscola", label: "Maiuscola", x: 30, y: 58, color: "#f97316", html: "La lettera grande all'inizio dei nomi propri e delle frasi.", why: "Gli antichi Romani scrivevano solo in lettere maiuscole (come sulle iscrizioni). Le minuscole nacquero nel Medioevo per scrivere più in fretta; le maiuscole rimasero per le parole importanti." },
        { id: "genere", label: "Genere", x: 64, y: 32, color: "#a855f7", html: "Maschile (il gatto) o femminile (la gatta).", why: "L'italiano ha preso il genere dal latino. Per le cose il genere non dipende dal sesso: la sedia non è «femmina»! È solo un'abitudine della lingua." },
        { id: "numero", label: "Numero", x: 86, y: 32, color: "#0ea5e9", html: "Singolare (uno) o plurale (tanti).", why: "Ci serve per dire subito se parliamo di una cosa o di tante. La vocale finale cambia: -o→-i, -a→-e, -e→-i." },
        { id: "neutro", label: "Le uova, le braccia", x: 75, y: 62, color: "#64748b", html: "Nomi maschili al singolare e femminili al plurale.", why: "Il latino aveva tre generi: maschile, femminile e <b>neutro</b>. I neutri avevano il plurale in -a (<i>ova</i>, <i>bracchia</i>): in italiano il neutro è sparito, ma queste forme sono rimaste." },
        { id: "invariabili", label: "Nomi invariabili", x: 92, y: 85, color: "#14b8a6", html: "Nomi che non cambiano al plurale: città, re, sport.", why: "Città finiva in latino con -tate (<i>civitate</i>): la sillaba finale è caduta e l'accento è rimasto sull'ultima vocale, che non si può cambiare. Sport e bar sono parole straniere." }
      ],
      edges: [
        ["nome", "comune", "può essere"],
        ["nome", "proprio", "può essere"],
        ["proprio", "maiuscola", "si scrive con"],
        ["nome", "genere", "ha un"],
        ["nome", "numero", "ha un"],
        ["numero", "neutro", "casi speciali"],
        ["numero", "invariabili", "casi speciali"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: genere e numero",
      questions: [
        { type: "mc", q: "Qual è il plurale di «fiore»?", options: ["fiora", "fiori", "fiore"], answer: 1, explain: "-e → -i: fiori." },
        { type: "mc", q: "Il femminile di «gallo» è…", options: ["galla", "gallina", "gallessa"], answer: 1, explain: "Gallo → gallina: questo nome cambia di più." },
        { type: "tf", q: "Il plurale di «città» è «città».", answer: true, explain: "I nomi con l'accento finale non cambiano: la città, le città." }
      ]
    }
  ],
  glossary: [
    { t: "Nome", d: "Parola che indica persone, animali, cose o luoghi." },
    { t: "Nome comune", d: "Nome che indica una cosa qualsiasi del suo tipo: cane." },
    { t: "Nome proprio", d: "Nome di una persona, animale o luogo preciso; si scrive con la maiuscola." },
    { t: "Genere", d: "Maschile o femminile." },
    { t: "Numero", d: "Singolare (uno) o plurale (più di uno)." },
    { t: "Nome invariabile", d: "Nome che resta uguale al plurale: la città → le città." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale parola è un nome?", options: ["corre", "tavolo", "bello"], answer: 1, explain: "Tavolo indica una cosa: è un nome." },
      { type: "mc", q: "Quale nome è proprio?", options: ["Sicilia", "isola", "mare"], answer: 0, explain: "Sicilia è il nome di un'isola precisa: maiuscola!" },
      { type: "tf", q: "«gatto» è un nome comune.", answer: true, explain: "Va bene per tutti i gatti." },
      { type: "mc", q: "Qual è il plurale di «casa»?", options: ["casi", "case", "casa"], answer: 1, explain: "-a → -e: case." },
      { type: "text", q: "Scrivi il plurale di «libro».", answer: ["libri", "i libri"], explain: "-o → -i: libri." },
      { type: "mc", q: "«sedia» è…", options: ["maschile", "femminile"], answer: 1, explain: "Si dice «la sedia»: femminile." },
      { type: "mc", q: "Il plurale di «uovo» è…", options: ["gli uovi", "le uova", "le uove"], answer: 1, explain: "È un nome speciale: l'uovo → le uova." },
      { type: "tf", q: "«roma» si scrive con la minuscola.", answer: false, explain: "È il nome proprio di una città: Roma, con la maiuscola." },
      { type: "mc", q: "Il femminile di «re» è…", options: ["rea", "regina", "ressa"], answer: 1, explain: "Re → regina." },
      { type: "text", q: "Scrivi il singolare di «pesci».", answer: ["pesce", "il pesce"], explain: "-i → -e: pesce." },
      { type: "order", q: "Metti in ordine: dal nome per UNA cosa a quello per TANTE cose.", items: ["un gatto", "due gatti", "tanti gatti"], explain: "Singolare (uno) → plurale (due, tanti)." }
    ]
  }
});
