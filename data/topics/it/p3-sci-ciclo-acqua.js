TOPIC('it', {
  id: "p3-sci-ciclo-acqua",
  title: "Il ciclo dell'acqua",
  intro: "L'acqua della Terra non si consuma mai: viaggia continuamente tra mare, cielo e terra. Questo viaggio senza fine si chiama <b>ciclo dell'acqua</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "L'acqua cambia forma",
      html: `<p>L'acqua si può trovare in <b>tre stati</b>:</p>
<ul>
<li><b>Solido</b>: ghiaccio, neve, grandine. Ha una forma propria.</li>
<li><b>Liquido</b>: l'acqua del rubinetto, dei fiumi e del mare. Prende la forma del contenitore.</li>
<li><b>Gassoso</b>: il vapore acqueo. È invisibile e si sparge nell'aria.</li>
</ul>
<p>A cambiare lo stato dell'acqua è il <b>calore</b>: scaldando, il ghiaccio fonde e l'acqua evapora; raffreddando, il vapore torna liquido e l'acqua gela.</p>`
    },
    {
      type: "3d",
      title: "Com'è fatta una goccia d'acqua?",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.6, color: "#ef4444", label: "O (ossigeno)" },
          { x: 0.75, y: -0.55, z: 0, r: 0.38, color: "#f8fafc", label: "H (idrogeno)" },
          { x: -0.75, y: -0.55, z: 0, r: 0.38, color: "#f8fafc", label: "H (idrogeno)" }
        ],
        bonds: [[0, 1], [0, 2]]
      },
      caption: "Ogni goccia d'acqua è fatta di miliardi di minuscole molecole H₂O: un atomo di ossigeno e due di idrogeno. Ruotala!"
    },
    {
      type: "text",
      title: "Le tappe del viaggio",
      html: `<ol>
<li><b>Evaporazione</b>: il Sole scalda l'acqua di mari, laghi e fiumi. Una parte diventa <b>vapore</b> e sale nel cielo. Anche le piante "sudano" vapore dalle foglie (<b>traspirazione</b>).</li>
<li><b>Condensazione</b>: in alto fa freddo. Il vapore si raffredda e si trasforma in goccioline piccolissime: nascono le <b>nuvole</b>.</li>
<li><b>Precipitazione</b>: le goccioline si uniscono, diventano pesanti e cadono come <b>pioggia</b>, oppure come <b>neve</b> o <b>grandine</b> se fa molto freddo.</li>
<li><b>Scorrimento e infiltrazione</b>: l'acqua caduta scorre nei fiumi fino al mare, oppure penetra nel terreno e forma le <b>falde acquifere</b> sotterranee.</li>
</ol>
<p>Poi il Sole scalda di nuovo l'acqua... e il ciclo ricomincia!</p>`
    },
    {
      type: "svg",
      title: "Il ciclo dell'acqua",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<circle cx="540" cy="55" r="35" fill="#facc15"/>
<path d="M0 230 L170 110 L300 230z" fill="#78716c"/>
<path d="M140 132 L170 110 L200 132 L185 140 L170 128 L155 140z" fill="#ffffff"/>
<rect y="230" width="600" height="90" fill="#65a30d"/>
<path d="M330 320 L330 250 Q450 225 600 245 L600 320z" fill="#2563eb"/>
<path d="M200 200 Q240 240 330 255" stroke="#3b82f6" stroke-width="10" fill="none"/>
<ellipse cx="190" cy="65" rx="70" ry="28" fill="#94a3b8"/>
<ellipse cx="240" cy="55" rx="55" ry="25" fill="#cbd5e1"/>
<path d="M150 100 l-6 16 M180 100 l-6 16 M210 100 l-6 16 M240 100 l-6 16" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/>
<path d="M470 235 Q480 180 460 130 M500 235 Q510 180 490 130 M530 235 Q540 180 520 130" stroke="#ffffff" stroke-width="4" stroke-dasharray="6 6" fill="none"/>
<path d="M440 110 Q360 60 310 60" stroke="#475569" stroke-width="4" fill="none" marker-end="url(#f)"/>
<defs><marker id="f" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#475569"/></marker></defs>
<text x="500" y="290" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">1 Evaporazione</text>
<text x="380" y="45" font-size="18" fill="#1e293b" text-anchor="middle" font-weight="bold">2 Condensazione</text>
<text x="80" y="150" font-size="18" fill="#1e3a8a" text-anchor="middle" font-weight="bold">3 Precipitazione</text>
<text x="230" y="290" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">4 Scorrimento</text>
</svg>`,
      caption: "Il Sole fa evaporare l'acqua del mare, il vapore forma le nuvole, la pioggia cade sui monti e i fiumi la riportano al mare."
    },
    {
      type: "widget",
      title: "Trova le tappe del ciclo",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<circle cx="540" cy="50" r="30" fill="#facc15"/>
<path d="M0 220 L160 100 L290 220z" fill="#78716c"/>
<rect y="220" width="600" height="80" fill="#65a30d"/>
<path d="M330 300 L330 240 Q450 215 600 235 L600 300z" fill="#2563eb"/>
<path d="M190 195 Q240 235 330 245" stroke="#3b82f6" stroke-width="10" fill="none"/>
<ellipse cx="200" cy="60" rx="70" ry="28" fill="#94a3b8"/>
<path d="M160 95 l-6 16 M190 95 l-6 16 M220 95 l-6 16" stroke="#2563eb" stroke-width="4"/>
<path d="M480 225 Q490 170 470 120 M510 225 Q520 170 500 120" stroke="#ffffff" stroke-width="4" stroke-dasharray="6 6" fill="none"/>
</svg>`,
        spots: [
          { x: 490, y: 170, label: "Evaporazione" },
          { x: 200, y: 60, label: "Condensazione (nuvola)" },
          { x: 190, y: 105, label: "Precipitazione" },
          { x: 260, y: 228, label: "Scorrimento (fiume)" },
          { x: 470, y: 270, label: "Mare" }
        ]
      },
      caption: "Clicca su ogni punto e scegli il nome giusto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le tappe",
      questions: [
        { type: "mc", q: "Come si chiama il passaggio dell'acqua da liquido a vapore?", options: ["Condensazione", "Evaporazione", "Solidificazione"], answer: 1, explain: "Quando l'acqua si scalda e diventa vapore si parla di evaporazione." },
        { type: "mc", q: "Di che cosa sono fatte le nuvole?", options: ["Di fumo", "Di cotone", "Di goccioline d'acqua o cristalli di ghiaccio"], answer: 2, explain: "Le nuvole sono milioni di goccioline piccolissime (o cristallini di ghiaccio)." },
        { type: "tf", q: "Il motore del ciclo dell'acqua è il Sole.", answer: true, explain: "È il calore del Sole che fa evaporare l'acqua e fa partire il ciclo." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: il ciclo in cucina",
      html: `<p>Quando la mamma o il papà fanno bollire l'acqua per la pasta:</p>
<ul>
<li>dalla pentola esce il <b>vapore</b> (evaporazione);</li>
<li>se si mette un coperchio, sotto si formano tante <b>goccioline</b> (condensazione);</li>
<li>le goccioline diventano grosse e <b>ricadono</b> nella pentola (precipitazione)!</li>
</ul>
<p>La pentola è come un piccolo ciclo dell'acqua. ⚠️ Fai questa osservazione solo con un adulto: il vapore scotta!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: un ciclo dell'acqua in un sacchetto",
      html: `<p>Ti serve: un sacchetto di plastica trasparente con chiusura, un po' d'acqua colorata di blu, del nastro adesivo.</p>
<ol>
<li>Metti un dito d'acqua nel sacchetto e chiudilo bene.</li>
<li>Attaccalo con il nastro a una finestra al sole.</li>
<li>Dopo qualche ora vedrai goccioline in alto (le "nuvole") che poi scivolano giù (la "pioggia").</li>
</ol>
<p>L'acqua nel sacchetto non esce mai: proprio come l'acqua della Terra!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>L'acqua che bevi oggi potrebbe essere la stessa che bevevano i dinosauri! L'acqua sulla Terra circola da miliardi di anni e la sua quantità resta quasi sempre la stessa.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Circa il <b>97%</b> dell'acqua della Terra è salata (mari e oceani). Solo il 3% è dolce, e la maggior parte è ghiacciata ai poli e sulle montagne. Per questo non bisogna sprecarla!</p>`
    },
    {
      type: "widget",
      title: "Solido, liquido o gassoso?",
      widget: "classify",
      options: {
        groups: ["🧊 Solido", "💧 Liquido", "💨 Gassoso"],
        items: [
          ["❄️ neve", 0],
          ["🧊 cubetto di ghiaccio", 0],
          ["🌨️ grandine", 0],
          ["🌧️ pioggia", 1],
          ["🏞️ acqua del fiume", 1],
          ["🚿 acqua della doccia", 1],
          ["♨️ vapore della pentola", 2],
          ["🌫️ vapore acqueo nell'aria", 2]
        ]
      },
      caption: "Metti ogni esempio nel gruppo giusto."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<p>Il ciclo dell'acqua ha 4 tappe: <b>evaporazione → condensazione → precipitazione → scorrimento/infiltrazione</b>. Il motore è il <b>Sole</b>. L'acqua non si crea e non si consuma: <b>circola</b>.</p>`
    },
    {
      type: "3d",
      title: "Il ciclo dell'acqua in un paesaggio 3D",
      scene: "terrain",
      caption: "Gira il paesaggio e tocca le sue parti: scopri che ruolo ha ognuna nel viaggio dell'acqua.",
      options: {
        features: {
          sea: { label: "Mare", html: "Il mare contiene quasi tutta l'acqua della Terra (circa il 97%). Il Sole lo scalda e l'acqua <b>evapora</b>: è qui che comincia gran parte del ciclo. Il sale invece resta nel mare: per questo la pioggia è dolce!" },
          mountain: { label: "Montagna", html: "L'aria umida che arriva dal mare sbatte contro le montagne e deve salire. Salendo si raffredda, il vapore <b>condensa</b> e si formano nuvole: ecco perché in montagna piove e nevica spesso." },
          glacier: { label: "Ghiacciaio", html: "Sulle cime più alte la neve si accumula e diventa ghiaccio. Il ghiacciaio è una <b>riserva d'acqua</b>: d'estate fonde piano piano e alimenta torrenti e fiumi. Qui l'acqua può restare ferma anche per migliaia di anni!" },
          source: { label: "Sorgente", html: "L'acqua piovuta penetra nel terreno (<b>infiltrazione</b>), scorre sotto terra e poi esce da una sorgente. È spesso acqua fresca e pulita, filtrata dalle rocce." },
          river: { label: "Fiume", html: "Il fiume raccoglie l'acqua di pioggia, delle sorgenti e dei ghiacciai e la riporta verso il mare: è lo <b>scorrimento</b>, l'ultima parte del ciclo." },
          lake: { label: "Lago", html: "Il lago è una conca piena d'acqua dolce. Anche dal lago l'acqua evapora, e il lago può fare da \"serbatoio\" per i fiumi." },
          delta: { label: "Foce a delta", html: "Il fiume arriva al mare e si divide in tanti rami: l'acqua dolce torna nel mare e il ciclo può ricominciare." }
        }
      }
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Se lo schema con le frecce non ti basta, prova uno di questi modi: una storia, un esperimento, una \"pentola gigante\" o le particelle viste da vicino.",
      tabs: [
        {
          label: "💧 Il viaggio di Goccia",
          html: `<p>Ciao! Sono <b>Goccia</b> e vivo nel mare. Una mattina il Sole mi scalda tanto che divento leggerissima: sono diventata <b>vapore</b> e salgo nel cielo, invisibile. ☀️</p>
<p>Lassù fa freddo! Mi stringo con altre goccioline intorno a un granello di polvere: insieme formiamo una <b>nuvola</b>. ☁️</p>
<p>Il vento ci porta sopra le montagne. Diventiamo così tante e pesanti che cadiamo giù: è la <b>pioggia</b>! 🌧️ Io cado su un prato, mi infilo nel terreno e scorro sotto terra fino a una <b>sorgente</b>.</p>
<p>Poi salto nel torrente, corro nel <b>fiume</b>… e dopo qualche settimana eccomi di nuovo nel mare. Il mio viaggio non finisce mai! 🔄</p>`
        },
        {
          label: "🧪 Esperimento in casa",
          html: `<p>Puoi creare un piccolo ciclo dell'acqua in cucina, <b>con l'aiuto di un adulto</b>:</p>
<ol>
<li>Metti un po' d'acqua in una pentola e scaldala (il fornello fa la parte del <b>Sole</b>).</li>
<li>Un adulto tiene sopra la pentola un coperchio freddo con dei cubetti di ghiaccio sopra (è il <b>cielo freddo</b>).</li>
<li>Guarda sotto il coperchio: si formano goccioline (<b>condensazione</b>) che poi ricadono nella pentola (<b>pioggia</b>)!</li>
</ol>
<p><b>Versione senza fuoco:</b> metti un po' d'acqua in un sacchetto di plastica trasparente chiuso bene e attaccalo a una finestra al sole. Dopo qualche ora vedrai goccioline sulle pareti che scivolano in basso.</p>`
        },
        {
          label: "🍲 La pentola gigante",
          html: `<p>Pensa alla Terra come a una <b>pentola gigante con il coperchio</b>:</p>
<ul>
<li>il <b>Sole</b> è il fornello che scalda;</li>
<li>il <b>mare</b> è l'acqua nella pentola;</li>
<li>l'<b>aria fredda in alto</b> è il coperchio, dove il vapore torna acqua;</li>
<li>le gocce che ricadono sono la <b>pioggia</b>.</li>
</ul>
<p>La differenza? La pentola della Terra non è mai chiusa a chiave: l'acqua può fermarsi nei ghiacciai, nei laghi, sotto terra o dentro le piante e gli animali (anche dentro di te!).</p>`
        },
        {
          label: "🔬 Le particelle da vicino",
          html: `<p>L'acqua è fatta di minuscole particelle (molecole). Cambiando la temperatura cambia il modo in cui si muovono:</p>
<ul>
<li><b>Ghiaccio</b>: le molecole stanno strette e ferme al loro posto, come bambini seduti in fila.</li>
<li><b>Acqua liquida</b>: le molecole scivolano una vicino all'altra, come bambini che giocano in cortile.</li>
<li><b>Vapore</b>: le molecole corrono libere e lontane, come bambini che scappano in un prato enorme.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="20" width="180" height="180" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="210" y="20" width="180" height="180" rx="12" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="410" y="20" width="180" height="180" rx="12" fill="#f1f5f9" stroke="#1d4ed8" stroke-width="3"/>
<g fill="#2563eb">
<circle cx="45" cy="55" r="12"/><circle cx="80" cy="55" r="12"/><circle cx="115" cy="55" r="12"/><circle cx="150" cy="55" r="12"/>
<circle cx="45" cy="95" r="12"/><circle cx="80" cy="95" r="12"/><circle cx="115" cy="95" r="12"/><circle cx="150" cy="95" r="12"/>
<circle cx="45" cy="135" r="12"/><circle cx="80" cy="135" r="12"/><circle cx="115" cy="135" r="12"/><circle cx="150" cy="135" r="12"/>
<circle cx="45" cy="175" r="12"/><circle cx="80" cy="175" r="12"/><circle cx="115" cy="175" r="12"/><circle cx="150" cy="175" r="12"/>
<circle cx="240" cy="120" r="12"/><circle cx="268" cy="140" r="12"/><circle cx="300" cy="118" r="12"/><circle cx="330" cy="145" r="12"/><circle cx="360" cy="125" r="12"/>
<circle cx="250" cy="170" r="12"/><circle cx="285" cy="175" r="12"/><circle cx="318" cy="172" r="12"/><circle cx="352" cy="175" r="12"/><circle cx="290" cy="90" r="12"/>
<circle cx="440" cy="50" r="12"/><circle cx="545" cy="70" r="12"/><circle cx="490" cy="120" r="12"/><circle cx="430" cy="170" r="12"/><circle cx="560" cy="165" r="12"/>
</g>
<text x="100" y="235" font-size="20" text-anchor="middle" fill="#1e3a8a">🧊 Solido</text>
<text x="300" y="235" font-size="20" text-anchor="middle" fill="#1e3a8a">💧 Liquido</text>
<text x="500" y="235" font-size="20" text-anchor="middle" fill="#1e3a8a">♨️ Gassoso</text>
</svg>`
        },
        {
          label: "⚛️ La molecola in 3D",
          html: `<p>Ecco una molecola d'acqua: un atomo di <b>ossigeno</b> (rosso) e due di <b>idrogeno</b> (bianchi). Si scrive <b>H₂O</b>. Girala con il dito: ha la forma di una piccola \"V\", come la testa di Topolino!</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.55, color: "#ef4444", label: "O" },
              { x: 0.75, y: 0.58, z: 0, r: 0.35, color: "#e5e7eb", label: "H" },
              { x: -0.75, y: 0.58, z: 0, r: 0.35, color: "#e5e7eb", label: "H" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del ciclo dell'acqua: tocca i nodi e scopri il perché",
      nodes: [
        { id: "sole", label: "Sole ☀️", x: 50, y: 6, color: "#f59e0b", html: "Il Sole dà l'energia (il calore) che fa muovere tutto il ciclo.", why: "Senza il calore del Sole l'acqua non evaporerebbe: tutto il ciclo è come un motore che funziona a energia solare. Anche il vento, che sposta le nuvole, nasce perché il Sole scalda la Terra in modo diverso da un posto all'altro." },
        { id: "evaporazione", label: "Evaporazione", x: 18, y: 30, color: "#f97316", html: "L'acqua liquida si trasforma in vapore invisibile.", why: "Le molecole d'acqua si muovono sempre. Quando sono scaldate, le più veloci riescono a \"saltare fuori\" dalla superficie e volano via nell'aria. Per questo i panni stesi si asciugano prima al sole e al vento." },
        { id: "condensazione", label: "Condensazione", x: 50, y: 32, color: "#64748b", html: "Il vapore si raffredda e torna in goccioline: nascono le nuvole.", why: "Più si sale, più l'aria è fredda. Il vapore raffreddato si attacca a minuscoli granelli di polvere o di sale e forma goccioline. Le nuvole non cadono perché le goccioline sono piccolissime (ne servono circa un milione per fare una sola goccia di pioggia!) e le correnti d'aria le tengono su." },
        { id: "precipitazione", label: "Precipitazioni", x: 82, y: 30, color: "#3b82f6", html: "Pioggia, neve o grandine che cadono a terra.", why: "Le goccioline nella nuvola si scontrano e si uniscono: quando diventano troppo pesanti, le correnti non riescono più a sostenerle e cadono. Se fa molto freddo cadono come neve o grandine." },
        { id: "infiltrazione", label: "Infiltrazione", x: 80, y: 62, color: "#92400e", html: "Una parte dell'acqua penetra nel terreno e forma le falde sotterranee.", why: "Il terreno è pieno di piccoli spazi tra i granelli, come una spugna. L'acqua ci scivola dentro, viene filtrata dalle rocce e può riaffiorare dalle sorgenti dopo giorni o anni." },
        { id: "scorrimento", label: "Scorrimento", x: 50, y: 72, color: "#0ea5e9", html: "Ruscelli e fiumi riportano l'acqua al mare.", why: "L'acqua scende sempre verso il basso per la forza di gravità. Nel 1674 il francese <b>Pierre Perrault</b> misurò la pioggia caduta vicino alla Senna e scoprì che bastava (anzi avanzava!) per alimentare il fiume: fu la prima prova che i fiumi nascono dalla pioggia." },
        { id: "mare", label: "Mare e oceani", x: 18, y: 72, color: "#1d4ed8", html: "Il grande serbatoio: contiene circa il 97% di tutta l'acqua della Terra.", why: "Pochi anni dopo Perrault, l'astronomo inglese <b>Edmond Halley</b> calcolò quanta acqua evapora dal Mar Mediterraneo e vide che è tanta quanta ne portano i fiumi: così il mare non trabocca e non si svuota." },
        { id: "piante", label: "Piante", x: 50, y: 94, color: "#16a34a", html: "Le piante assorbono acqua con le radici e la rilasciano come vapore dalle foglie (traspirazione).", why: "Le foglie hanno minuscole aperture, gli stomi, da cui esce vapore acqueo. Una grande foresta come l'Amazzonia rimanda in cielo così tanta acqua da \"fabbricare\" una parte della sua stessa pioggia." }
      ],
      edges: [
        ["sole", "evaporazione", "scalda e provoca"],
        ["evaporazione", "condensazione", "il vapore sale →"],
        ["condensazione", "precipitazione", "gocce pesanti →"],
        ["precipitazione", "infiltrazione", "nel terreno"],
        ["precipitazione", "scorrimento", "in superficie"],
        ["infiltrazione", "scorrimento", "sorgenti"],
        ["scorrimento", "mare", "torna al"],
        ["mare", "evaporazione", "ricomincia"],
        ["piante", "evaporazione", "traspirazione"],
        ["infiltrazione", "piante", "radici"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: acqua in ogni stato",
      questions: [
        { type: "tf", q: "Il ghiaccio è acqua allo stato solido.", answer: true, explain: "Il ghiaccio è acqua solida." },
        { type: "mc", q: "Dove va l'acqua che penetra nel terreno?", options: ["Sparisce", "Forma le falde acquifere sotterranee", "Torna subito nelle nuvole"], answer: 1, explain: "L'acqua si infiltra e forma riserve sotterranee chiamate falde." },
        { type: "num", q: "Quante tappe principali ha il ciclo dell'acqua?", answer: 4, explain: "Evaporazione, condensazione, precipitazione, scorrimento." }
      ]
    }
  ],
  glossary: [
    { t: "Evaporazione", d: "Passaggio dell'acqua da liquido a vapore, grazie al calore." },
    { t: "Condensazione", d: "Passaggio del vapore a goccioline di acqua liquida, a causa del freddo." },
    { t: "Precipitazione", d: "Caduta dell'acqua dalle nuvole: pioggia, neve, grandine." },
    { t: "Infiltrazione", d: "L'acqua che penetra nel terreno." },
    { t: "Falda acquifera", d: "Riserva di acqua sotto terra." },
    { t: "Traspirazione", d: "Il vapore acqueo che le piante rilasciano dalle foglie." },
    { t: "Vapore acqueo", d: "Acqua allo stato gassoso, invisibile." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa fa partire il ciclo dell'acqua?", options: ["Il vento", "Il calore del Sole", "La Luna"], answer: 1, explain: "Il calore del Sole fa evaporare l'acqua." },
      { type: "order", q: "Metti in ordine le tappe del ciclo dell'acqua.", items: ["Evaporazione", "Condensazione", "Precipitazione", "Scorrimento verso il mare"], explain: "L'acqua evapora, forma nuvole, cade e torna al mare." },
      { type: "tf", q: "La quantità di acqua sulla Terra diminuisce ogni giorno perché la beviamo.", answer: false, explain: "L'acqua circola continuamente: torna sempre nel ciclo." },
      { type: "mc", q: "Come si chiama l'acqua che cade a palline di ghiaccio?", options: ["Neve", "Grandine", "Rugiada"], answer: 1, explain: "La grandine è fatta di palline di ghiaccio." },
      { type: "text", q: "Come si chiama il passaggio da vapore a goccioline?", answer: ["condensazione", "la condensazione"], explain: "Si chiama condensazione." },
      { type: "mc", q: "Quanta acqua della Terra è salata?", options: ["Circa il 3%", "Circa la metà", "Circa il 97%"], answer: 2, explain: "Circa il 97% dell'acqua è nei mari e negli oceani." },
      { type: "tf", q: "Anche le piante rilasciano vapore acqueo.", answer: true, explain: "Si chiama traspirazione." },
      { type: "mc", q: "Il vapore che esce dalla pentola che bolle è acqua allo stato…", options: ["solido", "liquido", "gassoso"], answer: 2, explain: "Il vapore è acqua gassosa." },
      { type: "mc", q: "Di quali atomi è fatta una molecola d'acqua?", options: ["2 di idrogeno e 1 di ossigeno", "1 di carbonio e 2 di ossigeno", "Solo ossigeno"], answer: 0, explain: "H₂O: due atomi di idrogeno e uno di ossigeno." },
      { type: "tf", q: "Le nuvole si formano perché in alto l'aria è più fredda.", answer: true, explain: "Il freddo fa condensare il vapore in goccioline." }
    ]
  }
});
