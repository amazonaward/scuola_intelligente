TOPIC('it', {
  id: "p5-sci-corpo-umano",
  title: "Il corpo umano",
  intro: "Il tuo corpo è una macchina straordinaria fatta di circa <b>37 000 miliardi di cellule</b> che lavorano insieme. Scopriamo come le <b>cellule</b> formano i <b>tessuti</b>, i tessuti gli <b>organi</b> e gli organi gli <b>apparati</b> e i <b>sistemi</b>: una squadra perfetta che ti fa respirare, mangiare, correre e pensare.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Dal piccolissimo al grande: i livelli di organizzazione",
      html: `<p>Il corpo umano è organizzato come una grande città, dove ognuno ha il suo compito:</p>
<ol>
<li><b>Cellula</b>: la più piccola parte vivente. È come un singolo <b>mattone</b>. Si vede solo con il microscopio.</li>
<li><b>Tessuto</b>: un gruppo di cellule <b>uguali</b> che fanno lo stesso lavoro, come un <b>muro</b> di mattoni. Es. tessuto muscolare, tessuto nervoso.</li>
<li><b>Organo</b>: più tessuti diversi che lavorano insieme per un compito preciso, come una <b>stanza</b>. Es. cuore, stomaco, polmoni.</li>
<li><b>Apparato o sistema</b>: più organi che collaborano per una grande funzione, come una <b>casa</b> intera. Es. apparato digerente.</li>
<li><b>Organismo</b>: tutti gli apparati e sistemi insieme: <b>sei tu</b>!</li>
</ol>`
    },
    {
      type: "svg",
      title: "Cellula → tessuto → organo → apparato → organismo",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fdf2f8"/>
<circle cx="50" cy="110" r="28" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<circle cx="50" cy="110" r="9" fill="#9d174d"/>
<g fill="#fbcfe8" stroke="#be185d" stroke-width="2">
<rect x="120" y="80" width="22" height="22"/><rect x="142" y="80" width="22" height="22"/><rect x="164" y="80" width="22" height="22"/>
<rect x="120" y="102" width="22" height="22"/><rect x="142" y="102" width="22" height="22"/><rect x="164" y="102" width="22" height="22"/>
<rect x="120" y="124" width="22" height="22"/><rect x="142" y="124" width="22" height="22"/><rect x="164" y="124" width="22" height="22"/>
</g>
<path d="M270 85 C250 60 225 80 240 105 L270 140 L300 105 C315 80 290 60 270 85 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>
<g stroke="#7f1d1d" stroke-width="5" fill="none">
<path d="M370 55 L370 165"/><path d="M370 80 C340 90 340 130 360 150"/><path d="M370 80 C400 90 400 130 380 150"/>
</g>
<path d="M370 95 C355 85 345 98 355 108 L370 122 L385 108 C395 98 385 85 370 95 Z" fill="#ef4444"/>
<circle cx="510" cy="55" r="20" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<rect x="490" y="78" width="40" height="70" rx="12" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<line x1="495" y1="148" x2="490" y2="190" stroke="#1e3a8a" stroke-width="10"/><line x1="525" y1="148" x2="530" y2="190" stroke="#1e3a8a" stroke-width="10"/>
<g fill="#be185d" font-size="26"><text x="88" y="120">→</text><text x="198" y="120">→</text><text x="312" y="120">→</text><text x="420" y="120">→</text></g>
<g font-size="17" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="50" y="215">Cellula</text><text x="153" y="215">Tessuto</text><text x="270" y="215">Organo</text><text x="370" y="215">Apparato</text><text x="510" y="215">Organismo</text>
</g>
<g font-size="14" text-anchor="middle" fill="#475569">
<text x="50" y="238">muscolare</text><text x="153" y="238">muscolare</text><text x="270" y="238">cuore</text><text x="370" y="238">circolatorio</text><text x="510" y="238">tu!</text>
</g>
</svg>`,
      caption: "Ogni livello è fatto dall'unione di tanti elementi del livello precedente."
    },
    {
      type: "text",
      title: "La cellula, il mattone della vita",
      html: `<p>Ogni cellula umana ha tre parti principali:</p>
<ul>
<li>la <b>membrana cellulare</b>: una "pelle" sottilissima che la avvolge e decide che cosa entra ed esce;</li>
<li>il <b>citoplasma</b>: una sostanza gelatinosa dove avvengono tantissime reazioni;</li>
<li>il <b>nucleo</b>: il "centro di comando", che contiene il <b>DNA</b>, le istruzioni per far funzionare la cellula e per costruirne di nuove.</li>
</ul>
<p>Esistono più di 200 tipi di cellule, con forme diverse adatte al loro lavoro: i <b>globuli rossi</b> sono dischetti che trasportano ossigeno, i <b>neuroni</b> hanno lunghi "fili" per trasmettere messaggi, le cellule dei <b>muscoli</b> sono allungate e si accorciano per muoverci.</p>`
    },
    {
      type: "3d",
      title: "Dentro una cellula animale",
      scene: "layers",
      options: { layers: [ { r: 1, color: "#f9a8d4", label: "Membrana cellulare" }, { r: 0.93, color: "#fce7f3", label: "Citoplasma" }, { r: 0.38, color: "#a855f7", label: "Nucleo" }, { r: 0.15, color: "#6b21a8", label: "Nucleolo" } ] },
      caption: "Una cellula tagliata a spicchio (modello semplificato). Ruotala per vedere gli strati, dalla membrana fino al nucleo."
    },
    {
      type: "text",
      title: "I quattro tipi di tessuto",
      html: `<table>
<tr><th>Tessuto</th><th>Che cosa fa</th><th>Dove si trova</th></tr>
<tr><td>🛡️ <b>Epiteliale</b></td><td>riveste e protegge</td><td>pelle, interno della bocca e dello stomaco</td></tr>
<tr><td>💪 <b>Muscolare</b></td><td>si contrae e produce movimento</td><td>muscoli, cuore, pareti dell'intestino</td></tr>
<tr><td>⚡ <b>Nervoso</b></td><td>riceve e trasmette messaggi</td><td>cervello, midollo spinale, nervi</td></tr>
<tr><td>🦴 <b>Connettivo</b></td><td>sostiene, collega, trasporta</td><td>ossa, cartilagini, grasso, <b>sangue</b></td></tr>
</table>
<p>Sì: anche il <b>sangue</b> è un tessuto (connettivo), anche se è liquido!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: cellule e tessuti",
      questions: [
        { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["Cellula", "Tessuto", "Organo", "Apparato", "Organismo"], explain: "Le cellule formano i tessuti, i tessuti gli organi, gli organi gli apparati, gli apparati l'organismo." },
        { type: "mc", q: "Quale parte della cellula contiene il DNA?", options: ["La membrana", "Il nucleo", "Il citoplasma"], answer: 1, explain: "Il nucleo è il centro di comando con il DNA." },
        { type: "tf", q: "Il sangue è un tessuto.", answer: true, explain: "È un tessuto connettivo liquido." }
      ]
    },
    {
      type: "text",
      title: "Apparati e sistemi: la grande squadra",
      html: `<p>Di solito si chiama <b>apparato</b> un gruppo di organi <b>diversi</b> che collaborano, e <b>sistema</b> un gruppo di organi fatti soprattutto dello <b>stesso tessuto</b> (es. sistema nervoso, sistema muscolare).</p>
<table>
<tr><th>Apparato / sistema</th><th>Organi principali</th><th>Funzione</th></tr>
<tr><td>🍝 <b>Digerente</b></td><td>bocca, esofago, stomaco, intestino, fegato</td><td>trasforma il cibo in sostanze utili</td></tr>
<tr><td>🫁 <b>Respiratorio</b></td><td>naso, trachea, bronchi, polmoni</td><td>prende ossigeno, elimina anidride carbonica</td></tr>
<tr><td>❤️ <b>Circolatorio</b></td><td>cuore, arterie, vene, capillari, sangue</td><td>trasporta ossigeno e nutrienti a tutte le cellule</td></tr>
<tr><td>🚽 <b>Escretore</b></td><td>reni, vescica</td><td>filtra il sangue ed elimina le scorie (urina)</td></tr>
<tr><td>🧠 <b>Nervoso</b></td><td>cervello, midollo spinale, nervi</td><td>comanda e coordina tutto il corpo</td></tr>
<tr><td>🦴 <b>Scheletrico</b></td><td>206 ossa</td><td>sostiene e protegge</td></tr>
<tr><td>💪 <b>Muscolare</b></td><td>più di 600 muscoli</td><td>permette i movimenti</td></tr>
<tr><td>👶 <b>Riproduttivo</b></td><td>organi diversi nei maschi e nelle femmine</td><td>permette la nascita di nuovi individui</td></tr>
</table>
<p>Il <b>sistema immunitario</b> (globuli bianchi, linfonodi…) ci difende da virus e batteri.</p>`
    },
    {
      type: "widget",
      title: "Gli organi del corpo",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="420" fill="#f0f9ff"/>
<circle cx="300" cy="55" r="42" fill="#fde2c8" stroke="#9a3412" stroke-width="3"/>
<path d="M280 40 C280 22 320 22 320 40 C320 58 280 58 280 40 Z" fill="#f9a8d4" stroke="#9d174d" stroke-width="2"/>
<rect x="288" y="95" width="24" height="20" fill="#fde2c8" stroke="#9a3412" stroke-width="3"/>
<path d="M220 115 L380 115 L370 330 L230 330 Z" fill="#fde2c8" stroke="#9a3412" stroke-width="3"/>
<line x1="300" y1="100" x2="300" y2="140" stroke="#60a5fa" stroke-width="8"/>
<ellipse cx="265" cy="170" rx="30" ry="45" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<ellipse cx="335" cy="170" rx="30" ry="45" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<path d="M305 170 C295 158 282 168 290 180 L305 196 L320 180 C328 168 315 158 305 170 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
<path d="M245 222 C270 210 300 215 300 240 C285 250 255 248 245 222 Z" fill="#92400e"/>
<path d="M310 225 C340 215 360 230 345 255 C330 262 312 250 310 225 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
<path d="M255 265 C270 255 330 255 345 268 C350 285 330 300 300 300 C270 300 250 290 255 265 Z" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
<g stroke="#9a3412" stroke-width="2" fill="none"><path d="M265 275 C285 268 315 268 335 278"/><path d="M265 288 C285 280 315 282 335 290"/></g>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Cervello" },
          { x: 300, y: 120, label: "Trachea" },
          { x: 262, y: 160, label: "Polmone" },
          { x: 305, y: 180, label: "Cuore" },
          { x: 268, y: 232, label: "Fegato" },
          { x: 330, y: 240, label: "Stomaco" },
          { x: 300, y: 282, label: "Intestino" }
        ]
      },
      caption: "Tocca ogni punto e scegli il nome dell'organo (schema semplificato)."
    },
    {
      type: "example",
      title: "Esempio pratico: che cosa succede quando corri",
      html: `<p>Durante una corsa, gli apparati lavorano tutti insieme:</p>
<ol>
<li>il <b>sistema nervoso</b> (il cervello) manda il comando "corri!" ai muscoli;</li>
<li>i <b>muscoli</b> si contraggono e muovono le <b>ossa</b> delle gambe;</li>
<li>i muscoli hanno bisogno di più energia e ossigeno: il <b>respiratorio</b> accelera e respiri più forte;</li>
<li>il <b>cuore</b> batte più veloce (da circa 80 a più di 150 battiti al minuto) per portare più sangue;</li>
<li>la pelle produce <b>sudore</b> per raffreddarti (anche questo è un modo di eliminare acqua e sali).</li>
</ol>
<p>Nessun apparato lavora da solo: è un vero gioco di squadra!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il viaggio di un panino",
      html: `<p>Mangi un panino al formaggio. Ecco il suo viaggio:</p>
<ul>
<li><b>Bocca</b>: i denti lo masticano, la saliva comincia a digerire l'amido del pane.</li>
<li><b>Esofago</b>: un tubo di circa 25 cm lo spinge giù fino allo stomaco.</li>
<li><b>Stomaco</b>: i succhi gastrici lo trasformano in una poltiglia (per 2–4 ore).</li>
<li><b>Intestino tenue</b>: lungo circa 6–7 metri! Qui i nutrienti passano nel <b>sangue</b>.</li>
<li>Il <b>circolatorio</b> porta i nutrienti a tutte le cellule.</li>
<li><b>Intestino crasso</b>: assorbe l'acqua; ciò che non serve viene eliminato.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Abbina l'organo al suo apparato",
      widget: "match",
      options: {
        pairs: [
          ["❤️ Cuore", "Apparato circolatorio"],
          ["🫁 Polmoni", "Apparato respiratorio"],
          ["🍽️ Stomaco", "Apparato digerente"],
          ["🧠 Cervello", "Sistema nervoso"],
          ["🫘 Reni", "Apparato escretore"],
          ["🦴 Femore", "Sistema scheletrico"]
        ]
      },
      caption: "Collega ogni organo all'apparato o al sistema di cui fa parte."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Numeri da record",
      html: `<ul>
<li>Il <b>cuore</b> batte circa <b>100 000 volte al giorno</b>, senza mai fermarsi.</li>
<li>Se mettessi in fila tutti i <b>vasi sanguigni</b> di un adulto, arriveresti a circa <b>100 000 km</b>: due volte e mezzo il giro della Terra!</li>
<li>Un neonato ha circa <b>300 ossa</b>; crescendo alcune si saldano e un adulto ne ha <b>206</b>.</li>
<li>L'osso più piccolo è la <b>staffa</b>, nell'orecchio: misura circa 3 mm.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il corpo si rinnova",
      html: `<p>Ogni minuto perdi decine di migliaia di cellule della pelle (gran parte della polvere di casa è… pelle!). I <b>globuli rossi</b> vivono circa <b>120 giorni</b> e il midollo osseo ne produce circa <b>2 milioni al secondo</b> per sostituirli.</p>
<p>Le cellule nervose del cervello, invece, durano quasi tutta la vita: per questo è così importante proteggere la testa, per esempio con il casco in bici! 🚲</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Cellule</b> uguali → <b>tessuto</b>; tessuti diversi → <b>organo</b>; organi → <b>apparato/sistema</b>; tutti insieme → <b>organismo</b>.</li>
<li>La cellula ha <b>membrana</b>, <b>citoplasma</b> e <b>nucleo</b>.</li>
<li>4 tessuti: <b>epiteliale, muscolare, nervoso, connettivo</b>.</li>
<li>Gli apparati <b>collaborano</b>: nessuno funziona da solo.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il corpo umano",
      intro: "Se i livelli di organizzazione ti sembrano astratti, prova con un'analogia, con le mani o con il modello 3D.",
      tabs: [
        {
          label: "🏙️ Il corpo come una città",
          html: `<p>Immagina il corpo come una grande <b>città</b>:</p>
<ul>
<li>i <b>cittadini</b> sono le cellule;</li>
<li>i <b>quartieri</b> di persone che fanno lo stesso mestiere sono i tessuti;</li>
<li>gli <b>edifici</b> (ospedale, centrale elettrica, municipio) sono gli organi;</li>
<li>i <b>servizi</b> della città sono gli apparati: le strade e i camion che portano merci (circolatorio), la raccolta rifiuti (escretore), la cucina e i mercati (digerente), le telefonate e il sindaco (nervoso), la polizia (immunitario)…</li>
</ul>
<p>Se un servizio si blocca, tutta la città ne soffre!</p>`
        },
        {
          label: "🫀 Misura il tuo cuore",
          html: `<p>Fai un esperimento con il tuo corpo:</p>
<ol>
<li>appoggia due dita sul polso (dalla parte del pollice) o sul collo: senti il <b>battito</b>;</li>
<li>conta i battiti per <b>15 secondi</b> e moltiplica per 4: è la tua frequenza a riposo (in un bambino di 10 anni, circa 70–110 al minuto);</li>
<li>fai 30 saltelli e ricontrolla: è salita!</li>
<li>aspetta 2 minuti: torna a scendere.</li>
</ol>
<p>Hai visto in azione la collaborazione tra muscoli, cuore e polmoni.</p>`
        },
        {
          label: "⚛️ Ancora più piccolo: le molecole",
          html: `<p>Anche le cellule sono fatte di parti più piccole: le <b>molecole</b>. La più abbondante nel corpo è l'<b>acqua</b> (H<sub>2</sub>O): circa il <b>60%</b> del peso di un adulto! Ogni molecola d'acqua ha 1 atomo di ossigeno e 2 di idrogeno. Ruotala.</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.75, y: 0.55, z: 0, r: 0.32, color: "#f8fafc", label: "H" }, { x: -0.75, y: 0.55, z: 0, r: 0.32, color: "#f8fafc", label: "H" } ], bonds: [ [0, 1], [0, 2] ] }
        },
        {
          label: "🧩 Matrioska",
          html: `<p>Pensa alle <b>matrioske</b> russe, le bamboline una dentro l'altra, ma al contrario:</p>
<p>🪆 l'<b>organismo</b> contiene gli <b>apparati</b>, che contengono gli <b>organi</b>, che contengono i <b>tessuti</b>, che contengono le <b>cellule</b>, che contengono il <b>nucleo</b> con il <b>DNA</b>.</p>
<p>Ogni bambolina è fatta di tante bamboline più piccole!</p>`
        },
        {
          label: "🌍 Medicina nel mondo e nella storia",
          html: `<ul>
<li>🇬🇷 Il medico greco <b>Ippocrate</b> (V secolo a.C.) disse che le malattie hanno cause naturali, non magiche.</li>
<li>🇮🇹 A Padova, nel <b>1543</b>, <b>Andrea Vesalio</b> pubblicò il primo grande atlante del corpo umano, disegnato osservando dal vero.</li>
<li>🇬🇧 <b>William Harvey</b> scoprì nel <b>1628</b> che il sangue <b>circola</b>, spinto dal cuore.</li>
<li>🇮🇹 <b>Marcello Malpighi</b> vide per primo i <b>capillari</b> al microscopio nel 1661.</li>
<li>🇨🇳 La medicina cinese tradizionale immaginava il corpo attraversato da "canali" di energia: un modo molto diverso di pensare il corpo.</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del corpo umano: tocca i nodi e scopri il perché",
      nodes: [
        { id: "cellula", label: "Cellula", x: 50, y: 6, color: "#ec4899", html: "La più piccola unità vivente.", why: "Nel <b>1665</b> l'inglese <b>Robert Hooke</b> osservò al microscopio un pezzetto di sughero e vide tante \"celle\" vuote: le chiamò <i>cells</i>. Nel 1838–1839 <b>Schleiden e Schwann</b> capirono che tutti i viventi sono fatti di cellule (teoria cellulare)." },
        { id: "nucleo", label: "Nucleo e DNA", x: 15, y: 20, color: "#a855f7", html: "Il centro di comando della cellula, con le istruzioni.", why: "Il DNA contiene le \"istruzioni\" per costruire e far funzionare il corpo. La sua forma a doppia elica fu scoperta nel <b>1953</b> da Watson e Crick, grazie anche alle immagini ai raggi X di <b>Rosalind Franklin</b>." },
        { id: "tessuto", label: "Tessuto", x: 50, y: 28, color: "#f97316", html: "Gruppo di cellule uguali con lo stesso compito.", why: "Le cellule si specializzano: un gruppo che fa bene una sola cosa (contrarsi, trasmettere segnali) è più efficiente. Il francese <b>Xavier Bichat</b> (circa 1800) descrisse per primo i tessuti." },
        { id: "organo", label: "Organo", x: 50, y: 50, color: "#ef4444", html: "Più tessuti insieme per un compito: cuore, stomaco, polmoni…", why: "Il cuore, per esempio, ha tessuto muscolare per pompare, nervoso per il ritmo, connettivo per tenerlo insieme ed epiteliale per rivestirlo: servono tutti per un solo lavoro." },
        { id: "apparato", label: "Apparati e sistemi", x: 50, y: 72, color: "#2563eb", html: "Gruppi di organi che svolgono una grande funzione.", why: "Funzioni complesse come nutrirsi richiedono più passaggi: masticare, digerire, assorbire, eliminare. Ogni organo fa un pezzo del lavoro, come in una catena di montaggio." },
        { id: "organismo", label: "Organismo", x: 50, y: 94, color: "#16a34a", html: "Tutti gli apparati che lavorano insieme: una persona.", why: "Il corpo mantiene stabili temperatura, acqua e zuccheri grazie alla collaborazione degli apparati. Questo equilibrio si chiama <b>omeostasi</b>, parola introdotta dal fisiologo americano Walter Cannon nel 1926." },
        { id: "nutr", label: "Nutrizione", x: 85, y: 40, color: "#eab308", html: "Digerente + respiratorio + circolatorio + escretore.", why: "Le cellule hanno bisogno di cibo e ossigeno per produrre energia e producono scarti: quattro apparati lavorano insieme per rifornirle e \"pulirle\"." },
        { id: "relazione", label: "Relazione e movimento", x: 85, y: 75, color: "#0ea5e9", html: "Sistema nervoso, organi di senso, scheletro e muscoli.", why: "Per vivere dobbiamo percepire l'ambiente (sensi), decidere (cervello) e muoverci (muscoli e ossa). Luigi <b>Galvani</b>, a Bologna nel 1791, scoprì che i nervi trasmettono segnali elettrici." },
        { id: "molecole", label: "Molecole", x: 15, y: 45, color: "#64748b", html: "Le cellule sono fatte di molecole: acqua, proteine, zuccheri, grassi.", why: "Tutta la materia è fatta di atomi. Circa il 60% del corpo è acqua; le proteine costruiscono i tessuti, zuccheri e grassi danno energia: per questo serve un'alimentazione varia." }
      ],
      edges: [
        ["molecole", "cellula", "formano la"],
        ["cellula", "nucleo", "contiene il"],
        ["cellula", "tessuto", "uguali formano il"],
        ["tessuto", "organo", "diversi formano l'"],
        ["organo", "apparato", "insieme formano l'"],
        ["apparato", "organismo", "tutti insieme"],
        ["apparato", "nutr", "funzioni di"],
        ["apparato", "relazione", "funzioni di"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: organi e apparati",
      questions: [
        { type: "mc", q: "Quale apparato porta ossigeno e nutrienti a tutte le cellule?", options: ["Digerente", "Circolatorio", "Escretore"], answer: 1, explain: "Il sangue, spinto dal cuore, trasporta ossigeno e nutrienti." },
        { type: "num", q: "Quante ossa ha un adulto?", answer: 206, explain: "Un adulto ha 206 ossa." },
        { type: "mc", q: "I reni fanno parte dell'apparato…", options: ["respiratorio", "escretore", "nervoso"], answer: 1, explain: "Filtrano il sangue ed eliminano le scorie con l'urina." }
      ]
    }
  ],
  glossary: [
    { t: "Cellula", d: "La più piccola unità vivente." },
    { t: "Nucleo", d: "Parte della cellula che contiene il DNA e la dirige." },
    { t: "Tessuto", d: "Insieme di cellule uguali con la stessa funzione." },
    { t: "Organo", d: "Struttura formata da più tessuti che svolge un compito preciso." },
    { t: "Apparato", d: "Insieme di organi diversi che svolgono insieme una funzione." },
    { t: "Sistema", d: "Insieme di organi formati soprattutto dallo stesso tessuto (es. sistema nervoso)." },
    { t: "Organismo", d: "Essere vivente formato da tutti i suoi apparati e sistemi." },
    { t: "DNA", d: "Molecola che contiene le istruzioni ereditarie della cellula." },
    { t: "Omeostasi", d: "Capacità del corpo di mantenere stabili le sue condizioni interne." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è la più piccola unità vivente?", options: ["L'organo", "La cellula", "Il tessuto"], answer: 1, explain: "Tutti gli esseri viventi sono fatti di cellule." },
      { type: "order", q: "Ordina dal livello più semplice al più complesso.", items: ["Cellula", "Tessuto", "Organo", "Apparato", "Organismo"], explain: "Ogni livello è fatto di tanti elementi del livello precedente." },
      { type: "mc", q: "Il tessuto che trasmette i messaggi è…", options: ["muscolare", "nervoso", "epiteliale"], answer: 1, explain: "Il tessuto nervoso trasmette segnali elettrici." },
      { type: "tf", q: "Un organo è formato da un solo tipo di tessuto.", answer: false, explain: "Un organo è formato da più tessuti diversi che lavorano insieme." },
      { type: "text", q: "Come si chiama la \"pelle\" sottile che avvolge la cellula?", answer: ["membrana", "membrana cellulare", "la membrana", "la membrana cellulare"], explain: "È la membrana cellulare." },
      { type: "mc", q: "In quale organo i nutrienti passano nel sangue?", options: ["Nello stomaco", "Nell'intestino tenue", "Nell'esofago"], answer: 1, explain: "Nell'intestino tenue, attraverso i villi intestinali." },
      { type: "mc", q: "Quale apparato elimina l'anidride carbonica?", options: ["Respiratorio", "Digerente", "Scheletrico"], answer: 0, explain: "Con l'espirazione i polmoni eliminano l'anidride carbonica." },
      { type: "tf", q: "Il sangue è un tessuto connettivo.", answer: true, explain: "È un tessuto connettivo liquido." },
      { type: "mc", q: "Circa quante volte batte il cuore in un giorno?", options: ["Circa 1 000", "Circa 100 000", "Circa 100 milioni"], answer: 1, explain: "Circa 100 000 battiti al giorno (70 al minuto × 1440 minuti ≈ 100 000)." },
      { type: "mc", q: "Chi chiamò per primo \"cellule\" le piccole celle viste al microscopio?", options: ["Robert Hooke", "Galileo Galilei", "Charles Darwin"], answer: 0, explain: "Robert Hooke, nel 1665, osservando il sughero." },
      { type: "mc", q: "Quando corri, quali apparati lavorano?", options: ["Solo i muscoli", "Muscoli, ossa, cuore, polmoni e sistema nervoso insieme", "Solo il cuore"], answer: 1, explain: "Tutti gli apparati collaborano." }
    ]
  }
});
