TOPIC('it', {
  id: "p1-sci-stagioni",
  title: "Le stagioni",
  intro: "In un anno la natura cambia vestito quattro volte: fiori in <b>primavera</b> 🌸, sole e caldo in <b>estate</b> ☀️, foglie colorate in <b>autunno</b> 🍂, freddo e neve in <b>inverno</b> ❄️. Sono le <b>quattro stagioni</b>!",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Le quattro stagioni",
      html: `<p>L'anno ha <b>4 stagioni</b> che arrivano sempre nello stesso ordine, come in un girotondo:</p>
<ul>
<li>🌸 <b>Primavera</b> — inizia intorno al <b>21 marzo</b>. Le giornate si allungano, sbocciano i fiori, gli alberi mettono le foglie nuove.</li>
<li>☀️ <b>Estate</b> — inizia intorno al <b>21 giugno</b>. Fa caldo, le giornate sono lunghissime, matura tanta frutta.</li>
<li>🍂 <b>Autunno</b> — inizia intorno al <b>23 settembre</b>. Le foglie diventano gialle e rosse e cadono, si raccolgono l'uva e le castagne.</li>
<li>❄️ <b>Inverno</b> — inizia intorno al <b>21 dicembre</b>. Fa freddo, le giornate sono corte, a volte nevica.</li>
</ul>
<p>Poi ricomincia la primavera… e così via, ogni anno! 🔄</p>`
    },
    {
      type: "svg",
      title: "Lo stesso albero nelle quattro stagioni",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="150" height="300" fill="#dcfce7"/>
<rect x="150" width="150" height="300" fill="#fef9c3"/>
<rect x="300" width="150" height="300" fill="#ffedd5"/>
<rect x="450" width="150" height="300" fill="#e0f2fe"/>
<g fill="#78350f"><rect x="67" y="150" width="16" height="90"/><rect x="217" y="150" width="16" height="90"/><rect x="367" y="150" width="16" height="90"/><rect x="517" y="150" width="16" height="90"/></g>
<circle cx="75" cy="120" r="50" fill="#86efac"/>
<g fill="#f9a8d4"><circle cx="55" cy="100" r="7"/><circle cx="90" cy="95" r="7"/><circle cx="70" cy="135" r="7"/><circle cx="100" cy="125" r="7"/><circle cx="45" cy="130" r="7"/></g>
<circle cx="225" cy="115" r="58" fill="#16a34a"/>
<g fill="#ef4444"><circle cx="205" cy="100" r="8"/><circle cx="245" cy="110" r="8"/><circle cx="225" cy="140" r="8"/></g>
<circle cx="375" cy="120" r="50" fill="#f97316"/>
<circle cx="360" cy="110" r="22" fill="#facc15"/>
<g fill="#ea580c"><circle cx="340" cy="255" r="6"/><circle cx="400" cy="262" r="6"/><circle cx="420" cy="250" r="5"/></g>
<g stroke="#78350f" stroke-width="6"><line x1="525" y1="160" x2="490" y2="110"/><line x1="525" y1="160" x2="560" y2="105"/><line x1="525" y1="150" x2="525" y2="90"/></g>
<g fill="#ffffff"><circle cx="490" cy="60" r="4"/><circle cx="560" cy="40" r="4"/><circle cx="520" cy="70" r="4"/><circle cx="580" cy="80" r="4"/><circle cx="470" cy="30" r="4"/></g>
<rect y="240" width="450" height="60" fill="#65a30d"/>
<rect x="450" y="240" width="150" height="60" fill="#f8fafc"/>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="75" y="280" fill="#ffffff">PRIMAVERA</text><text x="225" y="280" fill="#ffffff">ESTATE</text><text x="375" y="280" fill="#ffffff">AUTUNNO</text><text x="525" y="280" fill="#0369a1">INVERNO</text>
</g>
<g font-size="15" text-anchor="middle" fill="#374151">
<text x="75" y="30">fiori 🌸</text><text x="225" y="30">frutti 🍒</text><text x="375" y="30">foglie che cadono</text><text x="525" y="230">rami spogli</text>
</g>
</svg>`,
      caption: "Molti alberi, come il melo o il ciliegio, cambiano aspetto in ogni stagione. Altri, come il pino, restano verdi tutto l'anno (sempreverdi)."
    },
    {
      type: "example",
      title: "Esempio: cosa indosso? 👕🧥",
      html: `<ul>
<li>🌸 <b>Primavera</b>: una felpa leggera e… l'ombrello! A primavera piove spesso.</li>
<li>☀️ <b>Estate</b>: maglietta, pantaloncini, cappellino e crema solare.</li>
<li>🍂 <b>Autunno</b>: giacca e stivali di gomma per le pozzanghere.</li>
<li>❄️ <b>Inverno</b>: cappotto, sciarpa, guanti e berretto di lana.</li>
</ul>`
    },
    {
      type: "widget",
      title: "In quale stagione?",
      widget: "classify",
      options: {
        groups: ["🌸 Primavera", "☀️ Estate", "🍂 Autunno", "❄️ Inverno"],
        items: [
          ["🌷 sbocciano i tulipani", 0],
          ["🐣 nascono tanti pulcini e uccellini", 0],
          ["🏖️ vacanze al mare", 1],
          ["🍉 si mangia l'anguria", 1],
          ["🍇 vendemmia dell'uva", 2],
          ["🌰 si raccolgono le castagne", 2],
          ["⛄ pupazzo di neve", 3],
          ["🎄 Natale", 3]
        ]
      },
      caption: "Pensa all'Italia: in quale stagione succede ogni cosa?"
    },
    {
      type: "quiz",
      title: "Mini-quiz: le stagioni",
      questions: [
        { type: "num", q: "Quante sono le stagioni?", answer: 4, explain: "Primavera, estate, autunno e inverno: 4." },
        { type: "mc", q: "In quale stagione cadono le foglie? 🍂", options: ["Primavera", "Autunno", "Estate"], answer: 1, explain: "In autunno molti alberi perdono le foglie." },
        { type: "mc", q: "Dopo l'inverno arriva…", options: ["l'estate", "l'autunno", "la primavera"], answer: 2, explain: "L'ordine è: primavera, estate, autunno, inverno, e poi di nuovo primavera." }
      ]
    },
    {
      type: "text",
      title: "Gli animali e le stagioni",
      html: `<p>Anche gli animali si preparano al cambio di stagione:</p>
<ul>
<li>🐻 Alcuni vanno in <b>letargo</b>: dormono quasi tutto l'inverno in una tana, come il <b>ghiro</b>, il <b>riccio</b> e la <b>marmotta</b>. L'orso fa un sonno invernale lungo e profondo.</li>
<li>🐦 Altri fanno la <b>migrazione</b>: le <b>rondini</b> in autunno volano fino in Africa, dove fa caldo, e tornano da noi in primavera.</li>
<li>🐿️ Lo <b>scoiattolo</b> in autunno nasconde le ghiande e le nocciole per l'inverno.</li>
<li>🐑 Molti animali in inverno hanno il <b>pelo più folto</b>, che poi perdono in primavera (la <b>muta</b>).</li>
</ul>`
    },
    {
      type: "text",
      title: "Perché ci sono le stagioni?",
      html: `<p>La <b>Terra</b> 🌍 gira intorno al <b>Sole</b> ☀️: un giro intero dura <b>un anno</b>.</p>
<p>La Terra però è un po' <b>inclinata</b>, come una trottola storta. Per questo:</p>
<ul>
<li>per una parte dell'anno l'Italia è <b>più rivolta verso il Sole</b>: i raggi arrivano dritti, il Sole sta alto e le giornate sono lunghe → <b>estate</b>;</li>
<li>per un'altra parte è <b>meno rivolta</b> verso il Sole: i raggi arrivano storti, le giornate sono corte → <b>inverno</b>.</li>
</ul>
<p>Attenzione: <b>non</b> è perché d'estate la Terra è più vicina al Sole! Anzi, la Terra è più vicina al Sole proprio all'inizio di <b>gennaio</b>.</p>`
    },
    {
      type: "3d",
      title: "La Terra gira intorno al Sole 🌍☀️",
      scene: "solar",
      options: { labels: true },
      caption: "Trova la Terra (il terzo pianeta): fa un giro completo intorno al Sole in un anno, cioè in circa 365 giorni. Durante il giro passano tutte e quattro le stagioni."
    },
    {
      type: "example",
      title: "Esempio: frutta e verdura di stagione 🍎",
      html: `<p>Ogni stagione ha la sua frutta e la sua verdura, che maturano con il clima giusto:</p>
<ul>
<li>🌸 <b>Primavera</b>: fragole, piselli, asparagi.</li>
<li>☀️ <b>Estate</b>: pesche, ciliegie, anguria, pomodori, zucchine.</li>
<li>🍂 <b>Autunno</b>: uva, mele, castagne, zucca, cachi.</li>
<li>❄️ <b>Inverno</b>: arance, mandarini, cavoli, finocchi.</li>
</ul>
<p>Le arance maturano d'inverno: e infatti hanno tanta <b>vitamina C</b>, utile quando gira il raffreddore! 🍊</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🎅🏖️",
      html: `<p>In <b>Australia</b> le stagioni sono <b>al contrario</b> rispetto all'Italia! Quando da noi è inverno, lì è estate: per questo molti bambini australiani festeggiano il <b>Natale in spiaggia</b>, con il costume! 🦘</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🎻",
      html: `<p>Il musicista italiano <b>Antonio Vivaldi</b>, nato a Venezia, scrisse una musica famosissima chiamata <b>«Le quattro stagioni»</b> (pubblicata nel 1725). Ascoltandola si sentono gli uccellini della primavera, il temporale dell'estate, la festa della vendemmia e i denti che battono dal freddo d'inverno!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Le stagioni sono <b>4</b>: primavera, estate, autunno, inverno.</li>
<li>Arrivano sempre nello <b>stesso ordine</b> e ogni anno ricominciano.</li>
<li>Le stagioni ci sono perché la Terra, <b>inclinata</b>, gira intorno al Sole.</li>
<li>Piante, animali e persone cambiano abitudini con le stagioni.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le stagioni 🌈",
      intro: "<p>Il perché delle stagioni è un po' difficile: prova uno di questi modi!</p>",
      tabs: [
        {
          label: "🔦 La torcia",
          html: `<p>Al buio, punta una <b>torcia</b> dritta sul pavimento: fa un cerchio piccolo e <b>molto luminoso</b>. Ora inclinala: la luce si allarga e diventa <b>più debole</b>.</p>
<p>Il Sole fa lo stesso! D'<b>estate</b> i raggi arrivano più dritti e scaldano tanto; d'<b>inverno</b> arrivano storti, si allargano e scaldano poco.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#1e293b"/>
<rect x="0" y="200" width="600" height="40" fill="#475569"/>
<rect x="130" y="20" width="40" height="60" fill="#94a3b8"/>
<polygon points="130,80 170,80 190,200 110,200" fill="#fde047" opacity="0.85"/>
<ellipse cx="150" cy="200" rx="40" ry="8" fill="#facc15"/>
<rect x="380" y="20" width="40" height="60" fill="#94a3b8" transform="rotate(-35 400 50)"/>
<polygon points="410,70 440,90 580,200 380,200" fill="#fde047" opacity="0.35"/>
<ellipse cx="480" cy="200" rx="100" ry="10" fill="#fde68a" opacity="0.6"/>
<text x="150" y="232" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">ESTATE: luce forte</text>
<text x="480" y="232" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">INVERNO: luce debole</text>
</svg>`
        },
        {
          label: "🇦🇺 L'altra metà del mondo",
          html: `<p>La Terra è divisa in due metà dall'<b>Equatore</b>. Quando la nostra metà (nord) è inclinata verso il Sole, l'altra metà (sud) è inclinata dall'altra parte.</p>
<p>Ecco perché a <b>Natale</b> a Roma fa freddo e a Sydney fa caldo! E vicino all'Equatore, in posti come il Kenya o il Brasile del nord, fa caldo tutto l'anno: lì le stagioni sono soprattutto due, quella delle <b>piogge</b> e quella <b>secca</b>.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Roma: dicembre = inverno", color: "#3b82f6" },
              { lat: -33.9, lon: 151.2, label: "Sydney: dicembre = estate", color: "#ef4444" },
              { lat: -1.3, lon: 36.8, label: "Nairobi: vicino all'Equatore", color: "#22c55e" }
            ]
          }
        },
        {
          label: "🇯🇵 Le 72 stagioni del Giappone",
          html: `<p>In <b>Giappone</b> l'antico calendario divideva l'anno in <b>24 periodi</b>, e ognuno in 3 parti: <b>72 micro-stagioni</b> di circa 5 giorni, con nomi poetici come «le rane cominciano a cantare» o «cade la prima brina».</p>
<p>Prova anche tu: ogni settimana guarda un albero vicino a casa e disegna cosa è cambiato. Ti accorgerai che la natura cambia un pochino <b>ogni giorno</b>!</p>`
        },
        {
          label: "🎡 La ruota dell'anno",
          html: `<p>Immagina l'anno come una <b>ruota</b> che gira: ogni spicchio è una stagione, e quando finisce l'inverno la ruota ricomincia dalla primavera. Gira le carte: davanti la stagione, dietro quando comincia e un suo segnale.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🌸 Primavera", back: "Comincia verso il 21 marzo. Segnale: tornano le rondini!" },
              { front: "☀️ Estate", back: "Comincia verso il 21 giugno, il giorno più lungo. Segnale: cantano le cicale." },
              { front: "🍂 Autunno", back: "Comincia verso il 23 settembre. Segnale: le foglie cambiano colore." },
              { front: "❄️ Inverno", back: "Comincia verso il 21 dicembre, il giorno più corto. Segnale: brina sui prati al mattino." }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa delle stagioni 🗺️",
      nodes: [
        { id: "sole", label: "Il Sole", x: 50, y: 6, color: "#f59e0b", html: "<p>La stella che ci dà luce e calore.</p>", why: "<p>Senza il Sole sulla Terra sarebbe buio e freddissimo: tutta la vita dipende da lui.</p>" },
        { id: "giro", label: "Il giro della Terra", x: 25, y: 28, color: "#3b82f6", html: "<p>La Terra gira intorno al Sole: un giro = <b>un anno</b>.</p>", why: "<p>Fu l'astronomo polacco <b>Niccolò Copernico</b>, nel 1543, a spiegare che è la Terra a girare intorno al Sole e non il contrario. <b>Galileo Galilei</b> lo sostenne con le sue osservazioni al cannocchiale.</p>" },
        { id: "inclinazione", label: "La Terra inclinata", x: 75, y: 28, color: "#8b5cf6", html: "<p>L'asse della Terra è storto di circa <b>23 gradi</b>.</p>", why: "<p>Gli scienziati pensano che sia successo moltissimo tempo fa, quando la Terra era giovanissima, forse per uno scontro con un altro grande corpo celeste.</p>" },
        { id: "raggi", label: "Raggi dritti o storti", x: 50, y: 48, color: "#ef4444", html: "<p>D'estate i raggi arrivano più dritti e le giornate sono più lunghe; d'inverno più storti e le giornate più corte.</p>", why: "<p>Come la torcia: luce dritta = più calore in poco spazio. E più ore di Sole = più tempo per scaldarsi.</p>" },
        { id: "stagioni", label: "Le 4 stagioni", x: 50, y: 66, color: "#22c55e", html: "<p>Primavera, estate, autunno, inverno.</p>", why: "<p>I loro inizi astronomici sono gli <b>equinozi</b> (giorno e notte lunghi uguali, a marzo e settembre) e i <b>solstizi</b> (giorno più lungo a giugno, più corto a dicembre).</p>" },
        { id: "piante", label: "Le piante", x: 15, y: 88, color: "#16a34a", html: "<p>Fioriscono, fanno frutti, perdono le foglie, riposano.</p>", why: "<p>In inverno c'è poca luce e l'acqua può gelare: molti alberi perdono le foglie per risparmiare energia e ripartire in primavera.</p>" },
        { id: "animali", label: "Gli animali", x: 50, y: 92, color: "#a16207", html: "<p>Letargo, migrazione, provviste, muta del pelo.</p>", why: "<p>In inverno il cibo scarseggia: chi dorme consuma poco, chi migra va dove il cibo c'è.</p>" },
        { id: "persone", label: "Le persone", x: 85, y: 88, color: "#ec4899", html: "<p>Vestiti, cibi, feste e lavori nei campi cambiano con le stagioni.</p>", why: "<p>Da sempre i contadini seminano e raccolgono seguendo le stagioni: per questo sono nati i calendari.</p>" }
      ],
      edges: [
        ["sole", "giro", ""],
        ["giro", "raggi", ""],
        ["inclinazione", "raggi", "cambia i"],
        ["raggi", "stagioni", "creano le"],
        ["stagioni", "piante", ""],
        ["stagioni", "animali", ""],
        ["stagioni", "persone", ""]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: perché le stagioni?",
      questions: [
        { type: "mc", q: "Quanto tempo ci mette la Terra a fare un giro intorno al Sole?", options: ["Un giorno", "Un mese", "Un anno"], answer: 2, explain: "Un giro completo dura un anno, circa 365 giorni." },
        { type: "tf", q: "D'estate fa caldo perché la Terra è più vicina al Sole.", answer: false, explain: "No! Fa caldo perché i raggi arrivano più dritti e le giornate sono più lunghe. La Terra è più vicina al Sole a gennaio." },
        { type: "mc", q: "Cosa fanno le rondini in autunno?", options: ["Vanno in letargo", "Migrano verso l'Africa", "Cambiano colore"], answer: 1, explain: "Le rondini migrano verso l'Africa, dove fa caldo, e tornano in primavera." }
      ]
    }
  ],
  glossary: [
    { t: "Stagione", d: "Ognuna delle 4 parti dell'anno, con il suo clima." },
    { t: "Letargo", d: "Lungo sonno invernale di alcuni animali, come il ghiro e il riccio." },
    { t: "Migrazione", d: "Il viaggio di alcuni animali verso posti più caldi o con più cibo." },
    { t: "Sempreverde", d: "Pianta che resta verde tutto l'anno, come il pino." },
    { t: "Solstizio", d: "Il giorno più lungo (a giugno) o più corto (a dicembre) dell'anno." },
    { t: "Equinozio", d: "Giorno in cui la luce e il buio durano più o meno uguali (marzo e settembre)." },
    { t: "Vendemmia", d: "La raccolta dell'uva, in autunno." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Metti in ordine le stagioni partendo dalla primavera.", items: ["Primavera", "Estate", "Autunno", "Inverno"], explain: "Primavera, estate, autunno, inverno." },
      { type: "mc", q: "In quale stagione nevica più spesso in Italia?", options: ["Inverno", "Estate", "Primavera"], answer: 0, explain: "La neve cade soprattutto d'inverno." },
      { type: "mc", q: "In quale stagione sbocciano tanti fiori?", options: ["Autunno", "Primavera", "Inverno"], answer: 1, explain: "La primavera è la stagione dei fiori." },
      { type: "mc", q: "La vendemmia dell'uva si fa in…", options: ["autunno", "inverno", "primavera"], answer: 0, explain: "L'uva si raccoglie a fine estate e in autunno." },
      { type: "tf", q: "Il ghiro va in letargo d'inverno.", answer: true, explain: "Sì, il ghiro dorme quasi tutto l'inverno." },
      { type: "tf", q: "In Australia, quando da noi è inverno, è estate.", answer: true, explain: "Nell'altra metà del mondo le stagioni sono al contrario." },
      { type: "num", q: "Quanti giorni ci sono, più o meno, in un anno?", answer: 365, explain: "Un anno ha 365 giorni (366 negli anni bisestili)." },
      { type: "text", q: "Come si chiama il viaggio delle rondini verso l'Africa?", answer: ["migrazione", "la migrazione"], explain: "È la migrazione." },
      { type: "mc", q: "Quale frutto matura in inverno?", options: ["L'anguria", "L'arancia", "La ciliegia"], answer: 1, explain: "Le arance maturano d'inverno." },
      { type: "mc", q: "Perché ci sono le stagioni?", options: ["Perché la Luna copre il Sole", "Perché la Terra inclinata gira intorno al Sole", "Perché il Sole si spegne d'inverno"], answer: 1, explain: "La Terra è inclinata e gira intorno al Sole: così i raggi cambiano durante l'anno." },
      { type: "tf", q: "Il pino perde tutte le foglie in autunno.", answer: false, explain: "Il pino è sempreverde: resta verde tutto l'anno." }
    ]
  }
});
