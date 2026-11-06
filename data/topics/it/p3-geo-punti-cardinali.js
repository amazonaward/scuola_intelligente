TOPIC('it', {
  id: "p3-geo-punti-cardinali",
  title: "I punti cardinali",
  intro: `Per non perderci e per spiegare dove si trova un luogo, usiamo quattro direzioni speciali: <b>Nord</b>, <b>Est</b>, <b>Sud</b> e <b>Ovest</b>. Sono i <b>punti cardinali</b>. Impariamo a trovarli con il <b>Sole</b>, con le <b>stelle</b> e con la <b>bussola</b>, e a leggerli sulle carte geografiche.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Destra e sinistra non bastano",
      html: `<p>Se dici a un amico "la scuola è a destra", lui deve sapere da che parte sei girato tu. Se vi girate, la destra cambia! Destra, sinistra, davanti e dietro sono <b>indicatori relativi</b>: dipendono da come siamo voltati.</p>
<p>I <b>punti cardinali</b> invece sono <b>sempre gli stessi</b>, per tutti, in ogni parte del mondo:</p>
<ul>
<li><b>Nord</b> (N), detto anche <b>Settentrione</b>;</li>
<li><b>Sud</b> (S), detto anche <b>Meridione</b> o <b>Mezzogiorno</b>;</li>
<li><b>Est</b> (E), detto anche <b>Oriente</b> o <b>Levante</b>;</li>
<li><b>Ovest</b> (O, oppure W dall'inglese <i>West</i>), detto anche <b>Occidente</b> o <b>Ponente</b>.</li>
</ul>
<p>"Cardinale" viene dal latino <i>cardo</i>, cardine: sono le direzioni "cardine" su cui gira tutto l'orientamento.</p>`
    },
    {
      type: "text",
      title: "Passo 1: il Sole ci indica la strada",
      html: `<p>Il modo più antico per orientarsi è guardare il <b>Sole</b>:</p>
<ul>
<li>🌅 al mattino il Sole <b>sorge</b> a <b>Est</b> (per questo l'Est si chiama anche Levante: dove il Sole "si leva");</li>
<li>☀️ a mezzogiorno, in Italia, il Sole è a <b>Sud</b> (per questo il Sud si chiama anche Mezzogiorno);</li>
<li>🌇 la sera il Sole <b>tramonta</b> a <b>Ovest</b> (il Ponente: dove il Sole "si pone", cioè va giù);</li>
<li>🌙 il <b>Nord</b> è la direzione dove il Sole, da noi, non passa mai.</li>
</ul>
<p>In realtà il Sole sorge esattamente a Est e tramonta esattamente a Ovest solo due giorni all'anno, agli <b>equinozi</b> (verso il 21 marzo e il 23 settembre). D'estate sorge un po' più verso Nord-Est, d'inverno più verso Sud-Est.</p>`
    },
    {
      type: "svg",
      title: "Il viaggio del Sole nel cielo",
      svg: `<svg viewBox="0 0 600 310" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="310" fill="#e0f2fe"/>
<rect y="220" width="600" height="90" fill="#86efac"/>
<path d="M60 220 Q300 -20 540 220" stroke="#f59e0b" stroke-width="4" stroke-dasharray="10 8" fill="none"/>
<circle cx="70" cy="205" r="22" fill="#fb923c"/>
<circle cx="300" cy="62" r="26" fill="#facc15"/>
<circle cx="530" cy="205" r="22" fill="#f97316"/>
<text x="70" y="160" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">mattino</text>
<text x="300" y="25" font-size="15" text-anchor="middle" fill="#854d0e" font-weight="bold">mezzogiorno</text>
<text x="530" y="160" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">sera</text>
<text x="70" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">EST</text>
<text x="300" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">SUD</text>
<text x="530" y="255" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">OVEST</text>
<circle cx="300" cy="285" r="10" fill="#1e293b"/>
<text x="318" y="292" font-size="14" fill="#1e293b">tu, che guardi verso Sud</text>
<text x="300" y="150" font-size="14" text-anchor="middle" fill="#334155">alle tue spalle c'è il NORD</text>
</svg>`,
      caption: "Se guardi il Sole a mezzogiorno (in Italia) hai davanti il Sud, alla sinistra l'Est, alla destra l'Ovest e dietro il Nord."
    },
    {
      type: "remember",
      title: "Il trucco delle braccia",
      html: `<p>Al mattino mettiti con il <b>braccio destro</b> teso verso il Sole che sorge. Allora:</p>
<ul>
<li>il braccio <b>destro</b> indica l'<b>Est</b>;</li>
<li>il braccio <b>sinistro</b> indica l'<b>Ovest</b>;</li>
<li><b>davanti</b> a te c'è il <b>Nord</b>;</li>
<li><b>dietro</b> di te c'è il <b>Sud</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: il Sole e le direzioni",
      questions: [
        { type: "mc", q: "Dove sorge il Sole?", options: ["A Nord", "A Est", "A Ovest"], answer: 1, explain: "Il Sole sorge a Est, per questo l'Est si chiama anche Levante." },
        { type: "mc", q: "Come si chiama anche l'Ovest?", options: ["Ponente o Occidente", "Mezzogiorno", "Settentrione"], answer: 0, explain: "Ponente, perché lì il Sole \"si pone\", tramonta." },
        { type: "tf", q: "Destra e sinistra sono uguali per tutti, come i punti cardinali.", answer: false, explain: "Destra e sinistra dipendono da come sei girato; i punti cardinali no." }
      ]
    },
    {
      type: "text",
      title: "Passo 2: la rosa dei venti",
      html: `<p>Tra i quattro punti cardinali ci sono le direzioni <b>intermedie</b>:</p>
<ul>
<li><b>Nord-Est</b> (NE), tra Nord ed Est;</li>
<li><b>Sud-Est</b> (SE), tra Sud ed Est;</li>
<li><b>Sud-Ovest</b> (SO), tra Sud e Ovest;</li>
<li><b>Nord-Ovest</b> (NO), tra Nord e Ovest.</li>
</ul>
<p>Tutte insieme formano la <b>rosa dei venti</b>. Si chiama così perché i marinai del Mediterraneo davano un nome al <b>vento</b> che arriva da ogni direzione: <b>Tramontana</b> da Nord, <b>Grecale</b> da Nord-Est, <b>Levante</b> da Est, <b>Scirocco</b> da Sud-Est, <b>Ostro</b> da Sud, <b>Libeccio</b> da Sud-Ovest, <b>Ponente</b> da Ovest e <b>Maestrale</b> da Nord-Ovest.</p>`
    },
    {
      type: "widget",
      title: "Completa la rosa dei venti",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<circle cx="300" cy="170" r="140" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/>
<polygon points="300,40 318,170 300,300 282,170" fill="#1e3a8a"/>
<polygon points="170,170 300,152 430,170 300,188" fill="#1e3a8a"/>
<polygon points="300,40 318,170 300,170" fill="#dc2626"/>
<polygon points="210,80 304,166 390,260 296,174" fill="#60a5fa" opacity="0.8"/>
<polygon points="390,80 304,174 210,260 296,166" fill="#60a5fa" opacity="0.8"/>
<circle cx="300" cy="170" r="10" fill="#facc15" stroke="#1e293b" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 300, y: 45, label: "Nord" },
          { x: 425, y: 170, label: "Est" },
          { x: 300, y: 295, label: "Sud" },
          { x: 175, y: 170, label: "Ovest" },
          { x: 385, y: 85, label: "Nord-Est" },
          { x: 385, y: 255, label: "Sud-Est" },
          { x: 215, y: 255, label: "Sud-Ovest" },
          { x: 215, y: 85, label: "Nord-Ovest" }
        ]
      },
      caption: "Tocca ogni punta e scegli il nome giusto. La punta rossa indica il Nord. Ricorda l'ordine in senso orario: N, E, S, O (\"Non Esco Senza Ombrello\")."
    },
    {
      type: "text",
      title: "Passo 3: la bussola",
      html: `<p>Di notte, con le nuvole o dentro un bosco il Sole non si vede. Allora si usa la <b>bussola</b>.</p>
<p>Dentro la bussola c'è un <b>ago calamitato</b> (una piccola calamita) libero di girare. La Terra si comporta come una gigantesca calamita: per questo l'ago si gira sempre con la punta colorata verso il <b>Nord</b>.</p>
<p>Come si usa:</p>
<ol>
<li>tieni la bussola <b>orizzontale</b>, ferma, lontano da oggetti di ferro e dal telefono;</li>
<li>aspetta che l'ago si fermi;</li>
<li>gira la bussola finché la lettera <b>N</b> del quadrante è sotto la punta colorata dell'ago;</li>
<li>ora puoi leggere tutte le direzioni!</li>
</ol>
<p>Attenzione: l'ago indica il <b>Nord magnetico</b>, che è un po' diverso dal <b>Polo Nord geografico</b> e si sposta lentamente ogni anno. In Italia la differenza è piccola, di pochi gradi.</p>`
    },
    {
      type: "3d",
      title: "Il Nord e il Sud sul globo",
      scene: "globe",
      options: {
        points: [
          { lat: 90, lon: 0, label: "Polo Nord", color: "#dc2626" },
          { lat: -90, lon: 0, label: "Polo Sud", color: "#2563eb" },
          { lat: 86, lon: 140, label: "Polo Nord magnetico (circa, si sposta)", color: "#f97316" },
          { lat: 41.9, lon: 12.5, label: "Roma", color: "#16a34a" },
          { lat: 0, lon: -78.5, label: "Quito (sull'Equatore)", color: "#a855f7" },
          { lat: -33.9, lon: 151.2, label: "Sydney", color: "#0ea5e9" }
        ],
        routes: [{ points: [3, 0], color: "#dc2626" }]
      },
      caption: "Ruota il globo. Da qualsiasi punto, andare verso Nord vuol dire andare verso il Polo Nord (la linea rossa parte da Roma). L'Equatore divide la Terra in emisfero Nord e emisfero Sud."
    },
    {
      type: "text",
      title: "Passo 4: i punti cardinali sulle carte",
      html: `<p>Su quasi tutte le carte geografiche il <b>Nord è in alto</b>, il <b>Sud in basso</b>, l'<b>Est a destra</b> e l'<b>Ovest a sinistra</b>. Spesso in un angolo c'è una piccola rosa dei venti o una freccia con la "N".</p>
<p>Così possiamo descrivere dove si trovano i luoghi. Per esempio, in Italia:</p>
<ul>
<li>le <b>Alpi</b> sono a <b>Nord</b>;</li>
<li>la <b>Sicilia</b> è a <b>Sud</b>;</li>
<li>il <b>Mar Adriatico</b> è a <b>Est</b> della penisola;</li>
<li>il <b>Mar Tirreno</b> è a <b>Ovest</b>;</li>
<li>il <b>Piemonte</b> è a <b>Nord-Ovest</b>, la <b>Puglia</b> a <b>Sud-Est</b>.</li>
</ul>
<p>Per questo diciamo "Italia settentrionale" (il Nord), "centrale" e "meridionale" (il Sud).</p>`
    },
    {
      type: "svg",
      title: "L'Italia e i punti cardinali",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#bae6fd"/>
<path d="M150 40 L330 30 L350 60 L330 90 L300 95 L320 140 L370 190 L420 215 L450 240 L430 250 L400 235 L395 260 L370 285 L355 270 L360 245 L330 215 L290 185 L260 150 L230 110 L200 95 L170 80 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<path d="M320 300 L380 295 L370 325 L330 330 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<path d="M190 190 L220 185 L225 250 L195 255 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="240" y="62" font-size="15" fill="#14532d" font-weight="bold">Alpi</text>
<text x="350" y="322" font-size="13" fill="#14532d" font-weight="bold">Sicilia</text>
<text x="160" y="275" font-size="13" fill="#14532d" font-weight="bold">Sardegna</text>
<text x="400" y="140" font-size="15" fill="#0c4a6e" font-weight="bold">Mar Adriatico</text>
<text x="220" y="300" font-size="15" fill="#0c4a6e" font-weight="bold">Mar Tirreno</text>
<circle cx="170" cy="70" r="6" fill="#dc2626"/><text x="100" y="60" font-size="13" fill="#7f1d1d" font-weight="bold">Torino</text>
<g transform="translate(520,80)">
<circle r="45" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
<polygon points="0,-38 7,0 0,38 -7,0" fill="#1e3a8a"/>
<polygon points="-38,0 0,-7 38,0 0,7" fill="#1e3a8a"/>
<polygon points="0,-38 7,0 0,0" fill="#dc2626"/>
<text y="-50" font-size="16" text-anchor="middle" font-weight="bold" fill="#dc2626">N</text>
<text y="64" font-size="16" text-anchor="middle" font-weight="bold">S</text>
<text x="56" y="6" font-size="16" text-anchor="middle" font-weight="bold">E</text>
<text x="-56" y="6" font-size="16" text-anchor="middle" font-weight="bold">O</text>
</g>
</svg>`,
      caption: "Disegno semplificato (non in scala). Con la rosa dei venti nell'angolo, puoi dire che Torino è a Nord-Ovest e la Sicilia a Sud."
    },
    {
      type: "example",
      title: "Esempio pratico: orientarsi nella tua aula",
      html: `<p>Prova questo esperimento a scuola:</p>
<ol>
<li>Un mattino di sole, guarda da quale finestra entra la luce: quella parete guarda più o meno verso <b>Est</b>.</li>
<li>Scrivi un cartello "EST" e appendilo a quella parete.</li>
<li>Sulla parete opposta appendi "OVEST".</li>
<li>Mettiti di spalle all'Ovest, guardando l'Est: alla tua <b>sinistra</b> c'è il <b>Nord</b>, alla tua <b>destra</b> il <b>Sud</b>.</li>
<li>Controlla con una bussola (o con l'app bussola di un telefono, con l'aiuto della maestra): avevi ragione?</li>
</ol>
<p>Ora puoi dire: "La lavagna è a Nord, la porta a Ovest…".</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'ombra di un bastone",
      html: `<p>Un modo antichissimo per trovare il Nord con il Sole, chiamato <b>gnomone</b>:</p>
<ol>
<li>pianta un bastone dritto in un terreno piano e soleggiato, in tarda mattinata;</li>
<li>segna con un sassolino la punta dell'<b>ombra</b>;</li>
<li>aspetta 15–20 minuti: l'ombra si è spostata. Segna la nuova punta con un altro sassolino;</li>
<li>unisci i due sassolini con una linea: il primo segno è verso <b>Ovest</b>, il secondo verso <b>Est</b>;</li>
<li>la linea perpendicolare indica il Nord e il Sud. Verso mezzogiorno l'ombra del bastone è la più corta e punta (in Italia) dritta verso <b>Nord</b>.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la bussola è stata inventata in Cina?",
      html: `<p>Più di 2000 anni fa, in <b>Cina</b>, si usava un cucchiaio di <b>magnetite</b> (una pietra che attira il ferro) appoggiato su un piatto di bronzo: il manico si girava sempre verso <b>Sud</b>! Si chiamava <b>sinan</b>, "che indica il sud". Gli scienziati cinesi descrissero l'ago magnetico per la navigazione intorno all'anno <b>1100</b>; poco dopo la bussola arrivò anche nel Mediterraneo. A <b>Amalfi</b> c'è una statua di Flavio Gioia, che una leggenda indica come inventore della bussola: oggi si sa che i marinai amalfitani la migliorarono, ma non la inventarono.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… alcuni popoli non dicono mai \"destra\" e \"sinistra\"?",
      html: `<p>In Australia, il popolo aborigeno che parla la lingua <b>Guugu Yimithirr</b> usa solo i punti cardinali. Non dicono "hai una formica sulla gamba sinistra", ma "hai una formica sulla gamba a Ovest"! Anche i bambini piccoli sanno sempre dov'è il Nord, perfino dentro una stanza senza finestre.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… \"orientarsi\" vuol dire \"guardare a Oriente\"?",
      html: `<p>Nel Medioevo molte carte geografiche europee avevano l'<b>Est (Oriente) in alto</b>, verso Gerusalemme e il paradiso terrestre immaginato in Asia. Mettersi verso l'Oriente era il modo per trovare la strada: da qui la parola <b>orientarsi</b>! Anche molte chiese antiche sono costruite con l'altare verso Est.</p>`
    },
    {
      type: "widget",
      title: "Gioco: abbina il nome alla direzione",
      widget: "match",
      options: {
        pairs: [
          ["Settentrione", "Nord"],
          ["Meridione", "Sud"],
          ["Levante / Oriente", "Est"],
          ["Ponente / Occidente", "Ovest"],
          ["Tramontana", "Vento da Nord"],
          ["Scirocco", "Vento da Sud-Est"]
        ]
      }
    },
    {
      type: "alternatives",
      title: "Altri modi per trovare il Nord",
      intro: "Non hai la bussola e il Sole non ti aiuta? Ecco altri metodi, usati in altri Paesi e in altre epoche.",
      tabs: [
        {
          label: "⭐ La Stella Polare",
          html: `<p>Di notte, nel nostro emisfero, si cerca la <b>Stella Polare</b>. È l'unica stella che sembra <b>ferma</b> mentre le altre girano intorno a lei, perché si trova quasi esattamente sopra il Polo Nord.</p>
<p>Come trovarla: cerca il <b>Grande Carro</b> (sette stelle a forma di pentolino). Prendi le due stelle sul bordo del pentolino, opposte al manico, e prolunga la loro distanza circa <b>5 volte</b>: arrivi alla Stella Polare. Sotto di lei, all'orizzonte, c'è il <b>Nord</b>.</p>
<p>Nell'emisfero Sud (Australia, Sudamerica) la Polare non si vede: si usa la costellazione della <b>Croce del Sud</b>.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#0f172a"/>
<g fill="#fde68a">
<circle cx="380" cy="200" r="6"/><circle cx="440" cy="210" r="6"/><circle cx="450" cy="160" r="6"/><circle cx="390" cy="150" r="6"/>
<circle cx="330" cy="140" r="5"/><circle cx="280" cy="150" r="5"/><circle cx="230" cy="180" r="5"/>
</g>
<path d="M380 200 L440 210 L450 160 L390 150 Z M390 150 L330 140 L280 150 L230 180" stroke="#94a3b8" stroke-width="2" fill="none"/>
<path d="M440 210 L450 160 L480 30" stroke="#f87171" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
<circle cx="482" cy="28" r="9" fill="#ffffff"/>
<text x="495" y="34" font-size="16" fill="#ffffff" font-weight="bold">Stella Polare</text>
<text x="330" y="250" font-size="16" fill="#e2e8f0" font-weight="bold">Grande Carro</text>
<text x="40" y="40" font-size="14" fill="#cbd5e1">prolunga 5 volte →</text>
<rect y="265" width="600" height="15" fill="#14532d"/>
</svg>`
        },
        {
          label: "🇦🇺 La bussola nel corpo",
          html: `<p>Come i parlanti Guugu Yimithirr in Australia, prova per un giorno a <b>non dire destra e sinistra</b>, ma solo Nord, Sud, Est, Ovest: "passami la matita che è a Est del quaderno".</p>
<p>All'inizio è difficile, ma il cervello impara a tenere sempre a mente dove sono i punti cardinali, come una bussola interna. Anche molti animali hanno una \"bussola\": le <b>tartarughe marine</b>, i <b>piccioni viaggiatori</b> e gli <b>uccelli migratori</b> sentono il campo magnetico della Terra!</p>`
        },
        {
          label: "🧲 Costruisci una bussola",
          html: `<p>Ti servono: un <b>ago</b> da cucito, una <b>calamita</b>, un tappo di sughero (o una foglia), una ciotola d'acqua.</p>
<ol>
<li>Strofina l'ago sulla calamita circa <b>30 volte</b>, sempre nella <b>stessa direzione</b>: l'ago diventa una piccola calamita.</li>
<li>Appoggia l'ago sul tappo e metti il tappo a galleggiare nell'acqua.</li>
<li>Aspetta: l'ago girerà da solo fino a indicare la linea <b>Nord–Sud</b>!</li>
</ol>
<p>Per capire quale punta va a Nord, confronta con il Sole: a mezzogiorno il Sole è dalla parte opposta.</p>`
        },
        {
          label: "🌍 Il Nord sul globo",
          html: `<p>Ruota il globo: il Nord è sempre la direzione verso il <b>Polo Nord</b>, l'Est è la direzione in cui la Terra gira (per questo il Sole sembra sorgere a Est). In Australia, nell'emisfero Sud, a mezzogiorno il Sole è a <b>Nord</b>, non a Sud!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 90, lon: 0, label: "N - Polo Nord", color: "#dc2626" },
              { lat: -90, lon: 0, label: "S - Polo Sud", color: "#2563eb" },
              { lat: 45, lon: 7.7, label: "Torino", color: "#16a34a" },
              { lat: -33.9, lon: 151.2, label: "Sydney: il Sole a mezzogiorno è a Nord", color: "#f97316" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: da dove vengono i punti cardinali? Tocca i nodi",
      nodes: [
        { id: "rotazione", label: "🌍 La Terra gira", x: 50, y: 6, color: "#0ea5e9", html: "La Terra ruota su sé stessa da Ovest verso Est in circa 24 ore.", why: "Che fosse la Terra a girare, e non il cielo, lo sostennero Niccolò Copernico (1543) e Galileo Galilei. Nel 1851 Léon Foucault lo dimostrò a Parigi con un enorme pendolo che cambia lentamente direzione." },
        { id: "poli", label: "🧊 I Poli", x: 20, y: 28, color: "#2563eb", html: "I due punti dove passa l'asse di rotazione: Polo Nord e Polo Sud.", why: "Sono gli unici punti della Terra che non girano in cerchio. Il Nord e il Sud sono definiti proprio così: la direzione verso l'uno o verso l'altro Polo." },
        { id: "sole", label: "☀️ Il Sole sorge e tramonta", x: 50, y: 30, color: "#f59e0b", html: "Sorge a Est, tramonta a Ovest.", why: "Il Sole non si muove intorno a noi: siamo noi che, girando con la Terra verso Est, lo vediamo comparire da quella parte. Per questo Est e Ovest si chiamano anche Levante e Ponente." },
        { id: "nsoe", label: "🧭 N, E, S, O", x: 80, y: 28, color: "#dc2626", html: "I quattro punti cardinali.", why: "Nord-Sud segue l'asse della Terra, Est-Ovest segue il verso della rotazione: per questo sono perpendicolari e uguali per tutti. Il nome \"cardinali\" viene dal latino cardo, cardine." },
        { id: "rosa", label: "🌹 Rosa dei venti", x: 80, y: 58, color: "#ec4899", html: "8 (o 16, o 32) direzioni con il nome dei venti.", why: "I marinai del Mediterraneo davano un nome ai venti secondo la loro provenienza: Grecale dalla Grecia, Scirocco dalla Siria, Libeccio dalla Libia, Maestrale dal \"vento maestro\", cioè il più forte. Erano i punti di riferimento per navigare." },
        { id: "magnete", label: "🧲 Il magnetismo terrestre", x: 20, y: 58, color: "#7c3aed", html: "La Terra si comporta come un'enorme calamita.", why: "Nel nucleo esterno della Terra il ferro fuso si muove e genera un campo magnetico. Lo intuì per primo il medico inglese William Gilbert nel 1600, nel libro \"De Magnete\"." },
        { id: "bussola", label: "🧭 La bussola", x: 50, y: 70, color: "#16a34a", html: "Un ago calamitato che si allinea con il campo magnetico.", why: "Inventata in Cina (prima per la divinazione, poi per la navigazione intorno al 1100), arrivò in Europa nel XII secolo e permise ai marinai di navigare anche senza vedere il Sole o le stelle." },
        { id: "carte", label: "🗺️ Le carte con il Nord in alto", x: 50, y: 93, color: "#92400e", html: "Convenzione: Nord in alto, Est a destra.", why: "Non c'è un \"sopra\" nello spazio: è una scelta. Si diffuse con i navigatori che usavano la bussola, che punta a Nord, e con le carte stampate nel Rinascimento (come quelle di Gerardo Mercatore, 1569)." }
      ],
      edges: [
        ["rotazione", "poli", "intorno all'asse dei"],
        ["rotazione", "sole", "fa sorgere e tramontare il"],
        ["poli", "nsoe", "danno Nord e Sud"],
        ["sole", "nsoe", "dà Est e Ovest"],
        ["nsoe", "rosa", "si dividono nella"],
        ["magnete", "bussola", "fa girare l'ago della"],
        ["bussola", "nsoe", "indica il Nord"],
        ["bussola", "carte", "porta alle"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>I punti cardinali sono <b>Nord</b>, <b>Est</b>, <b>Sud</b>, <b>Ovest</b> (in senso orario: "Non Esco Senza Ombrello").</li>
<li>Il Sole <b>sorge a Est</b>, a mezzogiorno in Italia è a <b>Sud</b>, <b>tramonta a Ovest</b>.</li>
<li>Di notte il Nord si trova con la <b>Stella Polare</b>.</li>
<li>La <b>bussola</b> ha un ago calamitato che indica il Nord.</li>
<li>Sulle carte il <b>Nord è in alto</b>, l'Est a destra, il Sud in basso, l'Ovest a sinistra.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: bussola e carte",
      questions: [
        { type: "mc", q: "Verso dove punta l'ago della bussola?", options: ["Verso il Nord", "Verso il Sole", "Verso casa"], answer: 0, explain: "L'ago calamitato si allinea con il campo magnetico terrestre e punta verso il Nord." },
        { type: "mc", q: "Su una carta geografica, l'Est di solito è…", options: ["in alto", "a destra", "a sinistra"], answer: 1, explain: "Nord in alto, Est a destra, Sud in basso, Ovest a sinistra." },
        { type: "order", q: "Metti i punti cardinali in senso orario, partendo dal Nord.", items: ["Nord", "Est", "Sud", "Ovest"], explain: "N → E → S → O: \"Non Esco Senza Ombrello\"." }
      ]
    }
  ],
  glossary: [
    { t: "Punti cardinali", d: "Le quattro direzioni principali: Nord, Est, Sud, Ovest." },
    { t: "Orientarsi", d: "Capire dove ci si trova e in quale direzione andare." },
    { t: "Settentrione", d: "Altro nome del Nord." },
    { t: "Meridione / Mezzogiorno", d: "Altri nomi del Sud." },
    { t: "Levante / Oriente", d: "Altri nomi dell'Est, dove sorge il Sole." },
    { t: "Ponente / Occidente", d: "Altri nomi dell'Ovest, dove tramonta il Sole." },
    { t: "Rosa dei venti", d: "Disegno con i punti cardinali e le direzioni intermedie, ognuna con il nome di un vento." },
    { t: "Bussola", d: "Strumento con un ago calamitato che indica il Nord." },
    { t: "Stella Polare", d: "Stella che si trova quasi sopra il Polo Nord e indica la direzione Nord." },
    { t: "Equinozio", d: "Giorno in cui il dì e la notte durano uguali e il Sole sorge esattamente a Est." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quali sono i quattro punti cardinali?", options: ["Nord, Sud, Est, Ovest", "Destra, sinistra, sopra, sotto", "Mare, monte, lago, fiume"], answer: 0, explain: "Nord, Sud, Est e Ovest." },
      { type: "mc", q: "Dove tramonta il Sole?", options: ["A Est", "A Ovest", "A Nord"], answer: 1, explain: "A Ovest, detto anche Ponente." },
      { type: "tf", q: "In Italia, a mezzogiorno, il Sole si trova a Sud.", answer: true, explain: "Per questo il Sud si chiama anche Mezzogiorno." },
      { type: "text", q: "Come si chiama lo strumento con l'ago calamitato che indica il Nord?", answer: ["bussola", "la bussola"], explain: "La bussola." },
      { type: "mc", q: "Come si chiama anche il Nord?", options: ["Meridione", "Settentrione", "Levante"], answer: 1, explain: "Settentrione; il Sud è il Meridione." },
      { type: "mc", q: "Quale stella indica il Nord di notte?", options: ["La Stella Polare", "Il Sole", "Sirio"], answer: 0, explain: "La Stella Polare, che si trova con l'aiuto del Grande Carro." },
      { type: "mc", q: "Quale direzione sta tra il Sud e l'Ovest?", options: ["Nord-Est", "Sud-Est", "Sud-Ovest"], answer: 2, explain: "Sud-Ovest (SO), da dove soffia il Libeccio." },
      { type: "tf", q: "Sulle carte geografiche il Nord di solito è in basso.", answer: false, explain: "Di solito il Nord è in alto." },
      { type: "order", q: "Metti in ordine il percorso del Sole durante la giornata (in Italia).", items: ["Sorge a Est", "A mezzogiorno è a Sud", "Tramonta a Ovest"], explain: "Est → Sud → Ovest." },
      { type: "mc", q: "La Sicilia rispetto al Piemonte si trova a…", options: ["Nord-Ovest", "Sud-Est", "Nord-Est"], answer: 1, explain: "Il Piemonte è a Nord-Ovest dell'Italia, la Sicilia a Sud: rispetto al Piemonte è a Sud-Est." },
      { type: "mc", q: "Dove è stata inventata la bussola?", options: ["In Cina", "In America", "In Australia"], answer: 0, explain: "In Cina; poi arrivò nel Mediterraneo intorno al XII secolo." },
      { type: "text", q: "Come si chiama il vento che soffia da Nord?", answer: ["tramontana", "la tramontana"], explain: "La Tramontana, vento freddo che arriva \"da oltre i monti\"." }
    ]
  }
});
