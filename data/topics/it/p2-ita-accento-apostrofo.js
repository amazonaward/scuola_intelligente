TOPIC('it', {
  id: "p2-ita-accento-apostrofo",
  title: "L'accento e l'apostrofo",
  intro: "Due segni piccoli piccoli, ma importantissimi! L'<b>accento</b> ( è ) dice dove la voce batte più forte; l'<b>apostrofo</b> ( ' ) prende il posto di una vocale che è scappata via. 🏃",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "L'accento: la vocale più forte",
      html: `<p>In ogni parola c'è una sillaba che si pronuncia <b>più forte</b>: ta-<b>vo</b>-lo, <b>ma</b>-re, ca-<b>set</b>-ta.</p>
<p>Di solito non si scrive niente. Ma quando la voce batte forte sull'<b>ultima vocale</b> della parola, mettiamo un segnetto sopra: l'<b>accento</b>.</p>
<p>Esempi: città, papà, caffè, perché, virtù, però, tivù. ☕</p>
<p>Prova a dirle battendo le mani forte sull'ultima sillaba: cit-<b>TÀ</b> 👏!</p>`
    },
    {
      type: "svg",
      title: "Papa o papà?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<rect x="20" y="20" width="270" height="260" rx="20" fill="#fef9c3" stroke="#ca8a04" stroke-width="4"/>
<rect x="310" y="20" width="270" height="260" rx="20" fill="#e0f2fe" stroke="#0284c7" stroke-width="4"/>
<path d="M125 70 L155 30 L185 70 Z" fill="#fde047" stroke="#a16207" stroke-width="3"/>
<circle cx="155" cy="105" r="35" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<path d="M105 230 L120 145 L190 145 L205 230 Z" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
<circle cx="445" cy="95" r="35" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<path d="M415 80 Q445 45 475 80" fill="#78350f"/>
<rect x="405" y="135" width="80" height="95" rx="12" fill="#2563eb"/>
<circle cx="510" cy="190" r="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<text x="155" y="268" font-size="44" text-anchor="middle" font-weight="bold" fill="#854d0e"><tspan fill="#dc2626">PA</tspan>pa</text>
<text x="445" y="268" font-size="44" text-anchor="middle" font-weight="bold" fill="#075985">pa<tspan fill="#dc2626">PÀ</tspan></text>
</svg>`,
      caption: "PA-pa è il capo della Chiesa cattolica; pa-PÀ è il tuo papà. L'accento cambia tutto!"
    },
    {
      type: "text",
      title: "Le paroline di una sillaba",
      html: `<p>Alcune parole cortissime cambiano significato con l'accento. Eccole:</p>
<table>
<tr><th>Con accento</th><th>Senza accento</th></tr>
<tr><td><b>è</b> (verbo essere): il cane <b>è</b> nero</td><td><b>e</b> (unisce): il cane <b>e</b> il gatto</td></tr>
<tr><td><b>là</b> (luogo): vai <b>là</b></td><td><b>la</b>: <b>la</b> mela</td></tr>
<tr><td><b>lì</b> (luogo): siediti <b>lì</b></td><td><b>li</b>: <b>li</b> vedo</td></tr>
<tr><td><b>sì</b> (risposta): <b>sì</b>, grazie!</td><td><b>si</b>: <b>si</b> lava</td></tr>
<tr><td><b>dà</b> (verbo dare): mi <b>dà</b> un bacio</td><td><b>da</b>: vengo <b>da</b> Roma</td></tr>
<tr><td><b>tè</b> (bevanda) 🍵</td><td><b>te</b>: vengo con <b>te</b></td></tr>
</table>
<p>Ma attenzione: <b>qui</b>, <b>qua</b>, <b>su</b>, <b>blu</b>, <b>tre</b>, <b>re</b>, <b>fa</b> <b>non</b> vogliono l'accento!</p>`
    },
    {
      type: "remember",
      title: "La filastrocca",
      html: `<p style="font-size:1.2em">🎵 <i>Su qui e su qua<br>l'accento non va.<br>Su lì e su là<br>l'accento ci va!</i> 🎵</p>`
    },
    {
      type: "widget",
      title: "Gioco: accento sì o no?",
      widget: "classify",
      options: { groups: ["Vuole l'accento", "Niente accento"], items: [
        ["🏙️ citta…", 0], ["☕ caffe…", 0], ["❓ perche…", 0], ["👨 papa… (il mio)", 0], ["📺 tivu…", 0],
        ["📍 qui", 1], ["📍 qua", 1], ["🔵 blu", 1], ["3️⃣ tre", 1], ["👑 re", 1]
      ] },
      caption: "Metti ogni parola nel gruppo giusto. Ricorda la filastrocca!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'accento",
      questions: [
        { type: "mc", q: "Il gatto … sul divano.", options: ["e", "è"], answer: 1, explain: "Qui c'è il verbo essere: «il gatto è»." },
        { type: "mc", q: "Mangio pane … marmellata.", options: ["e", "è"], answer: 0, explain: "Qui la «e» unisce due cose: senza accento." },
        { type: "tf", q: "«Qui» si scrive con l'accento.", answer: false, explain: "Su qui e su qua l'accento non va!" }
      ]
    },
    {
      type: "text",
      title: "L'apostrofo: la vocale che scappa",
      html: `<p>Quando una parola finisce con una vocale e la parola dopo <b>comincia con una vocale</b>, spesso la prima vocale <b>scappa</b> 🏃 e al suo posto mettiamo l'<b>apostrofo</b> ( ' ).</p>
<ul>
<li>lo + albero → <b>l'albero</b> 🌳</li>
<li>la + ape → <b>l'ape</b> 🐝</li>
<li>una + amica → <b>un'amica</b></li>
<li>c<b>i</b> + è → <b>c'è</b></li>
<li>dove + è → <b>dov'è</b></li>
<li>questo + anno → <b>quest'anno</b></li>
</ul>
<p>Si dice così perché due vocali vicine sono difficili da pronunciare: «la ape» suona strano, «l'ape» scivola via liscio! Questo si chiama <b>elisione</b>.</p>`
    },
    {
      type: "svg",
      title: "Come nasce l'apostrofo",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<rect x="40" y="40" width="120" height="70" rx="14" fill="#86efac" stroke="#15803d" stroke-width="3"/>
<text x="100" y="88" font-size="40" text-anchor="middle" font-weight="bold" fill="#14532d">L<tspan fill="#dc2626">A</tspan></text>
<text x="190" y="88" font-size="40" font-weight="bold" fill="#1f2937">+</text>
<rect x="230" y="40" width="140" height="70" rx="14" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="300" y="88" font-size="40" text-anchor="middle" font-weight="bold" fill="#713f12">APE</text>
<text x="440" y="90" font-size="46">🐝</text>
<path d="M95 115 Q80 160 40 170" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 5"/>
<text x="20" y="200" font-size="34" fill="#dc2626" font-weight="bold">A</text>
<text x="50" y="230" font-size="16" fill="#dc2626">la vocale scappa!</text>
<rect x="230" y="160" width="200" height="70" rx="14" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="330" y="210" font-size="44" text-anchor="middle" font-weight="bold" fill="#1e3a8a">L<tspan fill="#dc2626">'</tspan>APE</text>
<text x="450" y="205" font-size="18" fill="#1d4ed8">al suo posto</text>
<text x="450" y="228" font-size="18" fill="#1d4ed8">l'apostrofo</text>
</svg>`,
      caption: "La A di «la» scappa via e lascia il suo segnaposto: l'apostrofo."
    },
    {
      type: "text",
      title: "Un o un'? Il trucco del maschile e femminile",
      html: `<ul>
<li>Davanti a una parola <b>femminile</b> che comincia per vocale: <b>un'</b> con l'apostrofo → un'amica, un'ape, un'isola. (Viene da <b>una</b>, la A è scappata!)</li>
<li>Davanti a una parola <b>maschile</b>: <b>un</b> senza apostrofo → un amico, un albero, un ombrello. (Non c'è nessuna vocale che è scappata!)</li>
</ul>
<p>Trucco: prova a mettere «<b>una</b>» davanti alla parola. Se va bene (una amica), allora scrivi <b>un'</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio: la cartolina di Matteo 📮",
      html: `<p>Matteo scrive dal mare: «Ciao nonna! Qui <b>c'è</b> il sole. Ieri ho visto <b>un'</b>enorme medusa e <b>un</b> granchio. Papà mi <b>dà</b> sempre il gelato. Il mare <b>è</b> blu e l'acqua <b>è</b> calda!»</p>
<p>Guarda i segni: c'è (ci + è), un'enorme (medusa è femminile), un granchio (maschile), dà (verbo dare), è (verbo essere), blu (niente accento).</p>`
    },
    {
      type: "example",
      title: "Esempio: in cucina 🍳",
      html: `<p>La mamma chiede: «<b>Dov'è</b> l'olio?»</p>
<p>Giulia risponde: «È <b>lì</b>, sulla mensola! Lo vedi?»</p>
<p>«<b>Sì</b>! Ora prendo anche <b>un po'</b> di sale.»</p>
<p>Lo sapevi? In <b>po'</b> l'apostrofo c'è perché anticamente si diceva «poco»: è caduta un'intera sillaba!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>L'apostrofo e gli accenti, nei libri italiani, si diffusero dopo il <b>1501</b>, quando il tipografo veneziano <b>Aldo Manuzio</b> stampò le poesie di Petrarca curate dallo scrittore <b>Pietro Bembo</b>. Prima, nei manoscritti, spesso non si usavano! 📜</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>«<b>Qual è</b>» si scrive <b>senza</b> apostrofo! Perché? Anche da sola si può dire «qual»: «qual buon vento ti porta?». Nessuna vocale è scappata, quindi niente apostrofo. È uno degli errori più comuni anche tra gli adulti! 😮</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire accento e apostrofo",
      intro: "Prova queste strade diverse: con la voce, con un disegno, con altre lingue o con un gioco.",
      tabs: [
        {
          label: "📣 Il megafono",
          html: `<p>Immagina di chiamare un amico al parco con il megafono 📣. La sillaba che gridi più forte è quella con l'accento!</p>
<ul>
<li>«Vieni in cit-<b>TÀÀÀ</b>!» → la sillaba forte è l'ultima → scrivi l'accento.</li>
<li>«Andiamo al <b>MAAA</b>-re!» → la sillaba forte non è l'ultima → niente accento scritto.</li>
</ul>`
        },
        {
          label: "🪑 Il posto vuoto",
          html: `<p>Pensa all'apostrofo come a una <b>giacca appesa sulla sedia</b> 🧥: vuol dire «qui c'era qualcuno, ma è uscito».</p>
<p>In <b>l'ape</b> la giacca ricorda che lì c'era la A di «la». In <b>un amico</b> non c'è nessuna giacca, perché «un» non ha mai avuto una vocale in fondo.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<rect x="60" y="90" width="90" height="12" fill="#92400e"/>
<rect x="60" y="30" width="12" height="160" fill="#92400e"/>
<rect x="138" y="102" width="12" height="88" fill="#92400e"/>
<rect x="72" y="102" width="12" height="88" fill="#92400e"/>
<path d="M50 30 L90 30 L95 95 L45 95 Z" fill="#ef4444"/>
<text x="210" y="80" font-size="34" font-weight="bold" fill="#1f2937">l<tspan fill="#ef4444">'</tspan>ape</text>
<text x="210" y="120" font-size="20" fill="#b91c1c">qui c'era la A</text>
<text x="400" y="80" font-size="34" font-weight="bold" fill="#1f2937">un amico</text>
<text x="400" y="120" font-size="20" fill="#475569">nessuno è uscito</text>
</svg>`
        },
        {
          label: "🌍 Nelle altre lingue",
          html: `<ul>
<li>🇫🇷 In <b>francese</b> l'apostrofo si usa come in italiano: <i>l'école</i> (la scuola), <i>l'ami</i> (l'amico).</li>
<li>🇬🇧 In <b>inglese</b> l'apostrofo unisce due parole: <i>it is</i> → <i>it's</i>, <i>do not</i> → <i>don't</i>.</li>
<li>🇪🇸 In <b>spagnolo</b> l'accento si scrive anche in mezzo alla parola: <i>árbol</i> (albero), <i>música</i>.</li>
</ul>
<p>Ogni lingua usa questi segni a modo suo, ma l'idea è sempre la stessa: aiutano a <b>leggere bene</b>.</p>`
        },
        {
          label: "🔗 Abbina",
          html: `<p>Abbina ogni parolina alla frase giusta.</p>`,
          widget: "match",
          options: { pairs: [
            ["è", "Il cielo … azzurro"],
            ["e", "Pane … burro"],
            ["là", "Guarda laggiù, …!"],
            ["la", "… mela rossa"],
            ["sì", "«Vuoi giocare?» «…!»"],
            ["dà", "Il nonno mi … un bacio"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di accento e apostrofo",
      nodes: [
        { id: "segni", label: "Segni sulle parole", x: 50, y: 8, color: "#2563eb", html: "Piccoli segni che aiutano a leggere e capire le parole.", why: "La scrittura cerca di «fotografare» la voce: i segni servono a dire come si pronuncia una parola e a distinguere parole che si scrivono quasi uguali." },
        { id: "accento", label: "Accento", x: 25, y: 30, color: "#dc2626", html: "Il segno sulla vocale finale su cui la voce batte forte: città, perché.", why: "Il nome viene dal latino <i>ad cantus</i>, «vicino al canto»: è la parte più «cantata» della parola. In italiano si scrive solo sull'ultima sillaba, perché lì è più difficile indovinarlo." },
        { id: "graveacuto", label: "Grave e acuto", x: 10, y: 55, color: "#f97316", html: "È (grave, verso il basso a sinistra) e perché (acuto, verso l'alto a destra).", why: "Indicano se la E o la O sono «aperte» (è, però) o «chiuse» (perché, né). I nomi vengono dalla musica greca antica: acuto = suono alto, grave = suono basso." },
        { id: "monosillabi", label: "Paroline di una sillaba", x: 38, y: 55, color: "#a855f7", html: "è/e, là/la, lì/li, sì/si, dà/da, tè/te.", why: "Sono parole uguali nei suoni ma diverse nel significato: l'accento le distingue sulla carta. Le altre paroline (qui, qua, su, tre) non hanno un «gemello», quindi l'accento non serve." },
        { id: "apostrofo", label: "Apostrofo", x: 72, y: 30, color: "#16a34a", html: "Il segno ' che prende il posto di una vocale caduta: l'ape, c'è.", why: "Viene dal greco <i>apóstrophos</i>, «girato via»: la vocale si è girata ed è andata via. Fu reso comune nei libri dal 1501 da Pietro Bembo e Aldo Manuzio." },
        { id: "elisione", label: "Elisione", x: 62, y: 58, color: "#0ea5e9", html: "Quando cade la vocale finale davanti a una vocale: lo albero → l'albero.", why: "Due vocali vicine fanno un piccolo «inciampo» nella voce (iato). Togliendone una, la frase scorre meglio: è una legge del parlare comodo." },
        { id: "unun", label: "Un o un'?", x: 88, y: 58, color: "#14b8a6", html: "un' davanti ai nomi femminili (un'amica), un davanti ai maschili (un amico).", why: "Un' è «una» con la A caduta, quindi ha l'apostrofo; un è già corto di suo, nessuna vocale è caduta." },
        { id: "troncamento", label: "Po' e qual è", x: 75, y: 85, color: "#64748b", html: "Po' ha l'apostrofo; qual è no.", why: "In «po'» è caduta una sillaba intera (poco → po'). «Qual» invece esiste anche da solo (qual buon vento!), quindi non perde niente: si scrive qual è." }
      ],
      edges: [
        ["segni", "accento", ""],
        ["segni", "apostrofo", ""],
        ["accento", "graveacuto", "può essere"],
        ["accento", "monosillabi", "distingue"],
        ["apostrofo", "elisione", "segna"],
        ["apostrofo", "unun", "regola"],
        ["apostrofo", "troncamento", "casi speciali"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'apostrofo",
      questions: [
        { type: "mc", q: "Come si scrive?", options: ["un amica", "un'amica", "una'amica"], answer: 1, explain: "Amica è femminile: una amica → un'amica." },
        { type: "mc", q: "Come si scrive?", options: ["un'albero", "un albero", "u'nalbero"], answer: 1, explain: "Albero è maschile: un albero, senza apostrofo." },
        { type: "tf", q: "«lo + elefante» diventa «l'elefante».", answer: true, explain: "La O di «lo» cade davanti alla vocale: l'elefante." }
      ]
    }
  ],
  glossary: [
    { t: "Accento", d: "Segno sulla vocale finale su cui la voce batte forte: città." },
    { t: "Apostrofo", d: "Segno ' che prende il posto di una vocale caduta: l'ape." },
    { t: "Elisione", d: "Caduta della vocale finale davanti a una parola che comincia per vocale." },
    { t: "Monosillabo", d: "Parola di una sola sillaba: è, tre, qui, sì." },
    { t: "Sillaba accentata", d: "La sillaba che si pronuncia più forte in una parola." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale parola vuole l'accento?", options: ["qua", "citta", "tre"], answer: 1, explain: "Città: la voce batte sull'ultima sillaba." },
      { type: "mc", q: "La mela … rossa.", options: ["e", "è"], answer: 1, explain: "È il verbo essere: la mela è rossa." },
      { type: "mc", q: "Come si scrive?", options: ["l'ombrello", "lo ombrello", "l ombrello"], answer: 0, explain: "La O di «lo» cade davanti alla vocale: l'ombrello." },
      { type: "tf", q: "«Qual è» si scrive con l'apostrofo.", answer: false, explain: "Si scrive qual è, senza apostrofo: «qual» esiste anche da solo." },
      { type: "tf", q: "«Blu» si scrive senza accento.", answer: true, explain: "Blu è una parolina di una sillaba senza gemello: niente accento." },
      { type: "mc", q: "«Vuoi una caramella?» «…, grazie!»", options: ["Si", "Sì"], answer: 1, explain: "La risposta affermativa vuole l'accento: sì." },
      { type: "mc", q: "Quale è scritta giusta?", options: ["un'isola", "un isola", "una isola'"], answer: 0, explain: "Isola è femminile: un'isola." },
      { type: "mc", q: "Quale è scritta giusta?", options: ["un'orso", "un orso", "uno'orso"], answer: 1, explain: "Orso è maschile: un orso, senza apostrofo." },
      { type: "mc", q: "ci + è diventa…", options: ["cie", "c'è", "ci'è"], answer: 1, explain: "La I cade e si mette l'apostrofo: c'è." },
      { type: "mc", q: "Vorrei un … di acqua.", options: ["po", "po'", "pò"], answer: 1, explain: "Si scrive po', con l'apostrofo, perché viene da «poco»." },
      { type: "order", q: "Metti in ordine i passaggi per scrivere «l'ape».", items: ["Scrivo «la» e «ape»", "Due vocali si incontrano: a + a", "La vocale di «la» cade", "Al suo posto metto l'apostrofo: l'ape"], explain: "È l'elisione: la vocale cade e resta l'apostrofo." }
    ]
  }
});
