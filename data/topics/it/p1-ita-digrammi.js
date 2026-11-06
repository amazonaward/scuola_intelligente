TOPIC('it', {
  id: "p1-ita-digrammi",
  title: "Digrammi: CHI, CHE, GHI, GHE, GN, GL, SC",
  intro: "A volte <b>due lettere</b> insieme fanno <b>un suono solo</b>, tutto nuovo! 🪄 Si chiamano <b>digrammi</b> (di = due, gramma = lettera). Impariamo i suoni difficili: <b>CHI CHE</b>, <b>GHI GHE</b>, <b>GN</b>, <b>GLI</b>, <b>SCI SCE</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "C e G: suono duro e suono dolce",
      html: `<p>La <b>C</b> e la <b>G</b> sono lettere un po' "camaleonti" 🦎: cambiano suono a seconda della vocale che viene dopo.</p>
<table><tr><th></th><th>Suono DURO 🪨</th><th>Suono DOLCE 🍬</th></tr>
<tr><td><b>C</b></td><td><b>CA</b>sa, <b>CO</b>no, <b>CU</b>bo</td><td><b>CE</b>na, <b>CI</b>polla</td></tr>
<tr><td><b>G</b></td><td><b>GA</b>tto, <b>GO</b>nna, <b>GU</b>fo</td><td><b>GE</b>lato, <b>GI</b>raffa</td></tr></table>
<p>Con <b>A, O, U</b> il suono è <b>duro</b>. Con <b>E, I</b> il suono è <b>dolce</b>.</p>`
    },
    {
      type: "text",
      title: "La H magica: CHI, CHE, GHI, GHE",
      html: `<p>E se vogliamo il suono <b>duro</b> davanti a E e I? Chiamiamo la <b>H</b>! 🦸</p>
<p>La H si mette <b>in mezzo</b> come un <b>muro</b> 🧱: separa la C (o la G) dalla E o dalla I, e il suono resta <b>duro</b>.</p>
<ul>
<li><b>CHI</b>: <b>chi</b>ave 🔑, <b>chi</b>occiola 🐌</li>
<li><b>CHE</b>: <b>che</b>la 🦀, ba<b>rche</b>tta ⛵</li>
<li><b>GHI</b>: <b>ghi</b>ro 🐿️, <b>ghi</b>accio 🧊</li>
<li><b>GHE</b>: <b>ghe</b>pardo 🐆, ma<b>ghe</b>tto 🧙</li>
</ul>
<p>Senza H: CI-ELO (dolce). Con H: CHI-AVE (duro).</p>`
    },
    {
      type: "svg",
      title: "Il muro della H",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="40" font-size="24" font-weight="bold" fill="#be185d" text-anchor="middle">senza H: dolce 🍬</text>
<text x="450" y="40" font-size="24" font-weight="bold" fill="#1e40af" text-anchor="middle">con H: duro 🪨</text>
<rect x="40" y="80" width="90" height="90" rx="14" fill="#fbcfe8" stroke="#be185d" stroke-width="4"/>
<rect x="150" y="80" width="90" height="90" rx="14" fill="#fde68a" stroke="#a16207" stroke-width="4"/>
<text x="85" y="145" font-size="56" font-weight="bold" fill="#831843" text-anchor="middle">C</text>
<text x="195" y="145" font-size="56" font-weight="bold" fill="#713f12" text-anchor="middle">I</text>
<text x="140" y="215" font-size="30" fill="#be185d" text-anchor="middle">"ci" come CIELO</text>
<rect x="330" y="80" width="80" height="90" rx="14" fill="#bfdbfe" stroke="#1e40af" stroke-width="4"/>
<rect x="420" y="70" width="60" height="110" fill="#b91c1c" stroke="#7f1d1d" stroke-width="4"/>
<g stroke="#fecaca" stroke-width="3"><line x1="420" y1="105" x2="480" y2="105"/><line x1="420" y1="140" x2="480" y2="140"/><line x1="450" y1="70" x2="450" y2="105"/><line x1="435" y1="105" x2="435" y2="140"/><line x1="465" y1="140" x2="465" y2="180"/></g>
<rect x="490" y="80" width="80" height="90" rx="14" fill="#fde68a" stroke="#a16207" stroke-width="4"/>
<text x="370" y="145" font-size="56" font-weight="bold" fill="#1e3a8a" text-anchor="middle">C</text>
<text x="450" y="60" font-size="34" font-weight="bold" fill="#7f1d1d" text-anchor="middle">H</text>
<text x="530" y="145" font-size="56" font-weight="bold" fill="#713f12" text-anchor="middle">I</text>
<text x="450" y="215" font-size="30" fill="#1e40af" text-anchor="middle">"chi" come CHIAVE</text>
<text x="300" y="270" font-size="20" fill="#1f2937" text-anchor="middle">La H fa da muro: la I non riesce ad ammorbidire la C!</text>
</svg>`,
      caption: "La H non si legge, ma fa cambiare il suono della C e della G."
    },
    {
      type: "widget",
      title: "Gioco: suono duro o suono dolce?",
      widget: "classify",
      options: {
        groups: ["🪨 Duro (come in CANE)", "🍬 Dolce (come in CENA)"],
        items: [["🔑 CHIAVE", 0], ["🧅 CIPOLLA", 1], ["🦀 CHELA", 0], ["☁️ CIELO", 1], ["🐆 GHEPARDO", 0], ["🦒 GIRAFFA", 1], ["🧊 GHIACCIO", 0], ["🍦 GELATO", 1], ["🐱 GATTO", 0], ["🍽️ CENA", 1]]
      },
      caption: "Ascolta il primo suono della parola e scegli: duro o dolce?"
    },
    {
      type: "quiz",
      title: "Mini-quiz: CHI, CHE, GHI, GHE",
      questions: [
        { type: "mc", q: "Come si scrive 🔑?", options: ["CIAVE", "CHIAVE", "CHAVE"], answer: 1, explain: "Il suono è duro davanti alla I: serve la H → CHIAVE." },
        { type: "mc", q: "Come si scrive 🧊?", options: ["GHIACCIO", "GIACCIO", "GIAHCCIO"], answer: 0, explain: "Suono duro di G davanti alla I: GHI → GHIACCIO." },
        { type: "tf", q: "In CIELO la C ha un suono dolce.", answer: true, explain: "C + I senza H = suono dolce." }
      ]
    },
    {
      type: "text",
      title: "GN: il suono del ragno",
      html: `<p><b>G + N</b> insieme fanno un suono nuovo, morbido, come quando si ha il naso un po' chiuso: <b>gn</b>.</p>
<ul>
<li>ra<b>gn</b>o 🕷️, ba<b>gn</b>o 🛁, <b>gn</b>omo 🧙, ca<b>gn</b>olino 🐶, monta<b>gn</b>a ⛰️, le<b>gn</b>o 🪵</li>
</ul>
<p>Attenzione: GN non si separa mai quando dividi in sillabe: RA-<b>GN</b>O, BA-<b>GN</b>O.</p>`
    },
    {
      type: "text",
      title: "GLI: il suono della famiglia",
      html: `<p><b>G + L + I</b> insieme fanno un suono speciale, con la lingua appoggiata al palato: <b>gli</b>.</p>
<ul>
<li>fi<b>gli</b>o 👦, fami<b>gli</b>a 👨‍👩‍👧, a<b>gli</b>o 🧄, fo<b>gli</b>a 🍃, co<b>gli</b>ere, conchi<b>gli</b>a 🐚</li>
</ul>
<p>Il suono GL "magico" vive solo davanti alla <b>I</b>. Se dopo viene un'altra vocale, la I si scrive ma non si sente forte: fo-<b>GLIA</b>, a-<b>GLIO</b>.</p>
<p>Poche parole fanno eccezione e si leggono con la G dura: <b>gl</b>icine 💜, <b>gl</b>obo 🌍, in<b>gl</b>ese.</p>`
    },
    {
      type: "text",
      title: "SC: il suono dello sci",
      html: `<p><b>S + C</b> davanti a <b>E</b> e <b>I</b> fanno un suono che sembra dire "fai silenzio": <b>sc</b> 🤫.</p>
<ul>
<li><b>SCE</b>: <b>sce</b>na 🎭, pe<b>sce</b> 🐟, <b>sce</b>ndere</li>
<li><b>SCI</b>: <b>sci</b> ⛷️, <b>sci</b>mmia 🐒, <b>sci</b>arpa 🧣, <b>sci</b>volo 🛝</li>
</ul>
<p>E per il suono <b>duro</b>? Di nuovo la H! <b>SCHE</b>: <b>sche</b>letro 💀, <b>sche</b>da. <b>SCHI</b>: <b>schi</b>ena, fi<b>schi</b>etto 📯.</p>
<p>Con A, O, U il suono è sempre duro: <b>sca</b>tola 📦, <b>sco</b>iattolo 🐿️, <b>scu</b>ola 🏫.</p>`
    },
    {
      type: "svg",
      title: "La casa dei suoni difficili",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<polygon points="300,15 560,110 40,110" fill="#f87171" stroke="#991b1b" stroke-width="4"/>
<text x="300" y="90" font-size="28" font-weight="bold" fill="#fff" text-anchor="middle">I DIGRAMMI</text>
<rect x="60" y="110" width="480" height="180" fill="#fde68a" stroke="#a16207" stroke-width="4"/>
<g stroke="#a16207" stroke-width="3">
<rect x="80" y="125" width="140" height="70" rx="10" fill="#bfdbfe"/>
<rect x="230" y="125" width="140" height="70" rx="10" fill="#bbf7d0"/>
<rect x="380" y="125" width="140" height="70" rx="10" fill="#fbcfe8"/>
<rect x="80" y="205" width="140" height="70" rx="10" fill="#ddd6fe"/>
<rect x="230" y="205" width="140" height="70" rx="10" fill="#fed7aa"/>
<rect x="380" y="205" width="140" height="70" rx="10" fill="#a5f3fc"/>
</g>
<g font-size="26" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="150" y="157">CHI CHE</text><text x="300" y="157">GHI GHE</text><text x="450" y="157">GN</text>
<text x="150" y="237">GLI</text><text x="300" y="237">SCI SCE</text><text x="450" y="237">SCHI SCHE</text>
</g>
<g font-size="16" text-anchor="middle" fill="#374151">
<text x="150" y="183">chiave, chela</text><text x="300" y="183">ghiro, ghepardo</text><text x="450" y="183">ragno, bagno</text>
<text x="150" y="263">foglia, aglio</text><text x="300" y="263">sci, pesce</text><text x="450" y="263">schiena, scheletro</text>
</g>
</svg>`,
      caption: "Sei finestre, sei suoni da ricordare."
    },
    {
      type: "example",
      title: "Esempio: il dettato della maestra",
      html: `<p>La maestra detta: <i>"Il ragno scende dal ghiaccio e chiama la famiglia."</i></p>
<ul>
<li>ra<b>gn</b>o → GN 🕷️</li>
<li><b>sce</b>nde → SCE</li>
<li><b>ghi</b>accio → GHI 🧊</li>
<li><b>chi</b>ama → CHI</li>
<li>fami<b>gli</b>a → GLI</li>
</ul>
<p>In una sola frase ci sono <b>5 suoni difficili</b>! Rileggi piano e ascolta ogni suono.</p>`
    },
    {
      type: "example",
      title: "Esempio: cambia una lettera, cambia il significato",
      html: `<p>A volte la H fa una grande differenza:</p>
<ul>
<li>🔄 <b>GI</b>RO (fare un giro in bici 🚲) — <b>GHI</b>RO (l'animaletto che dorme tanto 🐿️)</li>
<li>❓ <b>CI</b> (\"ci vediamo!\") — <b>CHI</b> (\"chi è?\")</li>
<li>🇨🇳 <b>CI</b>NA (il grande Paese) — <b>CHI</b>NA (l'inchiostro nero dei disegnatori ✒️)</li>
</ul>
<p>Leggi a voce alta: senti la differenza tra dolce e duro?</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In <b>inglese</b> 🇬🇧 le lettere CH fanno il suono che noi scriviamo <b>CI</b>: <i>chocolate</i> si legge "ciòcolat" 🍫! Proprio il contrario dell'italiano, dove CH è duro.</p>
<p>In <b>francese</b> 🇫🇷 invece CH suona come il nostro SC: <i>chat</i> (gatto) si legge "scià" 🐱.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Lo spagnolo 🇪🇸 il suono GN lo scrive con <b>una lettera sola</b>: la <b>Ñ</b> (con la tilde, l'ondina sopra). <i>España</i> si legge "Espagna", <i>niño</i> (bambino) si legge "nigno"!</p>
<p>E il portoghese 🇵🇹 scrive GN con <b>NH</b> e GLI con <b>LH</b>: <i>filho</i> = figlio.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>C e G + <b>A, O, U</b> → suono <b>duro</b>. C e G + <b>E, I</b> → suono <b>dolce</b>.</li>
<li>Per il suono <b>duro</b> davanti a E e I si aggiunge la <b>H</b>: CHE, CHI, GHE, GHI, SCHE, SCHI.</li>
<li><b>GN</b> (ragno), <b>GLI</b> (famiglia), <b>SCE/SCI</b> (pesce, sci) sono suoni speciali.</li>
<li>I digrammi <b>non si dividono</b> in sillabe.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i suoni difficili",
      intro: "Ogni bambino ha il suo trucco. Prova la storia della H, le carte, gli abbinamenti o le altre lingue!",
      tabs: [
        {
          label: "📖 La storia della H guardiana",
          html: `<p>C'era una volta la lettera <b>C</b>, che aveva una voce forte: "<b>K</b>!" 🪨</p>
<p>Ma quando incontrava le sorelline <b>E</b> e <b>I</b>, diventava tenera e diceva "<b>ci</b>" 🍬, come in CIELO.</p>
<p>Un giorno la C voleva restare forte anche vicino alla I. Allora chiamò la sua amica <b>H</b>, la guardiana silenziosa 🤫: "Mettiti in mezzo, così la I non mi ammorbidisce!"</p>
<p>E così nacque <b>CHI</b>: la C resta forte, la H non parla ma protegge. La stessa cosa fece la G: <b>GHI</b>, <b>GHE</b>!</p>`
        },
        {
          label: "🃏 Carte dei digrammi",
          html: `<p>Gira la carta e leggi la parola. Poi trova il digramma nascosto!</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "🕷️", back: "RA-GN-O → GN" },
            { front: "🍃", back: "FO-GLI-A → GLI" },
            { front: "🐟", back: "PE-SCE → SCE" },
            { front: "🔑", back: "CHIA-VE → CHI" },
            { front: "🐆", back: "GHE-PAR-DO → GHE" },
            { front: "💀", back: "SCHE-LE-TRO → SCHE" },
            { front: "⛷️", back: "SCI → SCI" },
            { front: "🛁", back: "BA-GN-O → GN" }
          ] }
        },
        {
          label: "🧩 Trova la coppia",
          html: `<p>Abbina ogni disegno al suono difficile che c'è nella sua parola.</p>`,
          widget: "match",
          options: { pairs: [["🦀 chela", "CHE"], ["🐿️ ghiro", "GHI"], ["⛰️ montagna", "GN"], ["🧄 aglio", "GLI"], ["🧣 sciarpa", "SCI"], ["📯 fischietto", "SCHI"]] }
        },
        {
          label: "🌍 Come lo scrivono gli altri",
          html: `<p>Lo stesso suono si scrive in modi diversi in ogni lingua:</p>
<table><tr><th>Suono</th><th>🇮🇹 Italiano</th><th>🇪🇸 Spagnolo</th><th>🇫🇷 Francese</th><th>🇵🇹 Portoghese</th></tr>
<tr><td>gn</td><td>ba<b>gn</b>o</td><td>ba<b>ñ</b>o</td><td>monta<b>gn</b>e</td><td>banho (<b>nh</b>)</td></tr>
<tr><td>gli</td><td>fi<b>gli</b>o</td><td>—</td><td>—</td><td>fi<b>lh</b>o</td></tr>
<tr><td>sc dolce</td><td><b>sc</b>ena</td><td>—</td><td><b>ch</b>at</td><td><b>ch</b>uva</td></tr></table>
<p>Se a casa parli un'altra lingua, usa il suo modo di scrivere come ponte per ricordare quello italiano!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei digrammi: tocca un nodo e scopri il perché",
      nodes: [
        { id: "cg", label: "C e G", x: 50, y: 8, color: "#2563eb", html: "Due consonanti che cambiano suono secondo la vocale che segue.", why: "Nel latino antico la C si leggeva sempre dura (Cicerone = 'Kikero'). Con i secoli, davanti a E e I la pronuncia si è ammorbidita: così è nato il suono dolce dell'italiano." },
        { id: "duro", label: "Suono duro", x: 20, y: 30, color: "#64748b", html: "CA, CO, CU, GA, GO, GU: come in CASA e GATTO.", why: "È il suono originale, quello dei Romani." },
        { id: "dolce", label: "Suono dolce", x: 80, y: 30, color: "#db2777", html: "CE, CI, GE, GI: come in CENA e GELATO.", why: "Le vocali E e I si dicono con la lingua in avanti: trascinano la C e la G in avanti e le rendono morbide." },
        { id: "h", label: "H guardiana", x: 20, y: 58, color: "#b91c1c", html: "Messa tra C/G ed E/I, mantiene il suono duro: CHI, CHE, GHI, GHE.", why: "Gli scrittori italiani del Medioevo avevano bisogno di un segno per il suono duro davanti a E e I: scelsero la H, che tanto non si pronunciava." },
        { id: "gn", label: "GN", x: 45, y: 62, color: "#16a34a", html: "Suono nasale e morbido: ragno, bagno.", why: "Viene da parole latine in cui c'erano gruppi come -NI- o -GN-: <i>balneum</i> → bagno. Lo spagnolo per lo stesso suono ha inventato la Ñ." },
        { id: "gli", label: "GLI", x: 70, y: 62, color: "#7c3aed", html: "Suono con la lingua sul palato: figlio, famiglia.", why: "Nasce da gruppi latini come -LI-: <i>filius</i> → figlio, <i>familia</i> → famiglia." },
        { id: "sc", label: "SCI / SCE", x: 88, y: 82, color: "#0e7490", html: "Suono 'fruscio': sci, pesce. Con la H torna duro: schiena.", why: "Dal latino <i>piscis</i> (pesce): anche qui la C davanti alla I si è ammorbidita e si è fusa con la S." },
        { id: "sillabe", label: "Non si dividono", x: 40, y: 90, color: "#ca8a04", html: "Nelle sillabe i digrammi restano insieme: BA-GNO, FI-GLIO, PE-SCE.", why: "Sono un solo suono: dividerli sarebbe come spezzare una nota musicale a metà." }
      ],
      edges: [
        ["cg", "duro", "con A O U"],
        ["cg", "dolce", "con E I"],
        ["duro", "h", "davanti a E I serve la"],
        ["cg", "gn", "G + N"],
        ["cg", "gli", "G + L + I"],
        ["dolce", "sc", "S + C dolce"],
        ["gn", "sillabe", "regola"],
        ["gli", "sillabe", "regola"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: GN, GLI, SC",
      questions: [
        { type: "mc", q: "Come si scrive 🕷️?", options: ["RANIO", "RAGNO", "RAGLIO"], answer: 1, explain: "RAGNO, con il digramma GN." },
        { type: "mc", q: "Come si scrive 🐟?", options: ["PESCE", "PESHE", "PESSE"], answer: 0, explain: "PE-SCE: SC davanti alla E fa il suono dolce." },
        { type: "text", q: "Completa: FO _ _ _ A 🍃", answer: ["gli"], explain: "FOGLIA: ci vuole GLI." }
      ]
    }
  ],
  glossary: [
    { t: "Digramma", d: "Due lettere che insieme fanno un solo suono: CH, GH, GN, GL, SC." },
    { t: "Trigramma", d: "Tre lettere che fanno un solo suono, come GLI o SCI davanti a un'altra vocale (fo-GLIA, SCIA-rpa)." },
    { t: "Suono duro", d: "Il suono di C e G in CASA e GATTO." },
    { t: "Suono dolce", d: "Il suono di C e G in CENA e GELATO." },
    { t: "H", d: "Lettera muta: tra C/G ed E/I mantiene il suono duro." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale parola ha il suono duro?", options: ["CENA", "CHELA", "CIELO"], answer: 1, explain: "CHE = suono duro grazie alla H." },
      { type: "mc", q: "Come si scrive 🐆?", options: ["GEPARDO", "GHEPARDO", "GHPARDO"], answer: 1, explain: "Suono duro davanti alla E: GHE." },
      { type: "mc", q: "Come si scrive 🛁?", options: ["BANIO", "BAGNO", "BAGLIO"], answer: 1, explain: "BAGNO, con GN." },
      { type: "tf", q: "In GELATO la G ha un suono dolce.", answer: true, explain: "G + E senza H = dolce." },
      { type: "tf", q: "La H in CHIAVE si pronuncia forte.", answer: false, explain: "La H è muta: non si sente, ma fa restare duro il suono della C." },
      { type: "text", q: "Completa: FAMI _ _ _ A 👨‍👩‍👧", answer: ["gli"], explain: "FAMIGLIA, con GLI." },
      { type: "text", q: "Completa con CHI o CI: _ _ _ OCCIOLA 🐌", answer: ["chi"], explain: "CHIOCCIOLA: suono duro, serve la H." },
      { type: "mc", q: "Quale parola contiene SCI?", options: ["SCATOLA", "SCIMMIA", "SCUOLA"], answer: 1, explain: "SCI-MMIA. In scatola e scuola il suono è duro." },
      { type: "mc", q: "Come si divide in sillabe RAGNO?", options: ["RAG-NO", "RA-GNO", "R-AGNO"], answer: 1, explain: "I digrammi non si dividono: RA-GNO." },
      { type: "order", q: "Metti in ordine le sillabe per formare SCHELETRO 💀.", items: ["SCHE", "LE", "TRO"], explain: "SCHE-LE-TRO." },
      { type: "mc", q: "Quale di queste parole si legge con la G dura, anche se c'è GL?", options: ["FIGLIO", "GLICINE", "AGLIO"], answer: 1, explain: "GLICINE è un'eccezione: GL si legge duro." },
      { type: "tf", q: "In spagnolo il suono GN si scrive con la lettera Ñ.", answer: true, explain: "España, niño: la Ñ fa il suono GN." }
    ]
  }
});
