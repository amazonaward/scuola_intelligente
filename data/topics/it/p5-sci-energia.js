TOPIC('it', {
  id: "p5-sci-energia",
  title: "L'energia",
  intro: "Accendere la luce, andare in auto, cuocere la pasta, correre: per fare <b>qualsiasi cosa</b> serve <b>energia</b>. Scopriamo che cos'è, come si <b>trasforma</b> da una forma all'altra e da dove la prendiamo: dalle <b>fonti non rinnovabili</b>, che prima o poi finiranno, e dalle <b>fonti rinnovabili</b>, che la natura ricrea continuamente.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Che cos'è l'energia",
      html: `<p>L'<b>energia</b> è la capacità di <b>compiere un lavoro</b>, cioè di <b>muovere</b>, <b>scaldare</b>, <b>illuminare</b>, <b>trasformare</b> qualcosa.</p>
<p>Non si vede e non si tocca, ma ne vediamo gli <b>effetti</b>: una palla che rotola, una lampadina accesa, l'acqua che bolle.</p>
<p>L'energia si presenta in tante <b>forme</b>:</p>
<ul>
<li>🏃 <b>cinetica</b>: l'energia di ciò che si muove (vento, acqua che scorre, un'auto);</li>
<li>⛰️ <b>potenziale</b>: energia "immagazzinata" da un oggetto in alto (l'acqua di una diga, un sasso su una mensola);</li>
<li>🔥 <b>termica</b>: il calore;</li>
<li>💡 <b>luminosa</b>: la luce del Sole o di una lampada;</li>
<li>⚡ <b>elettrica</b>: quella che scorre nei fili;</li>
<li>🍞 <b>chimica</b>: nascosta nei cibi, nella legna, nella benzina, nelle pile;</li>
<li>⚛️ <b>nucleare</b>: nascosta nel nucleo degli atomi.</li>
</ul>`
    },
    {
      type: "remember",
      title: "La regola d'oro dell'energia",
      html: `<p><b>L'energia non si crea e non si distrugge: si trasforma.</b></p>
<p>Quando diciamo che "consumiamo" energia, in realtà la <b>trasformiamo</b> in altre forme, spesso in calore che si disperde e non riusciamo più a usare.</p>`
    },
    {
      type: "svg",
      title: "Una catena di trasformazioni",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<circle cx="60" cy="90" r="38" fill="#facc15" stroke="#ca8a04" stroke-width="4"/>
<g stroke="#ca8a04" stroke-width="4"><line x1="60" y1="35" x2="60" y2="20"/><line x1="60" y1="145" x2="60" y2="160"/><line x1="5" y1="90" x2="20" y2="90"/><line x1="100" y1="90" x2="115" y2="90"/></g>
<path d="M175 130 C165 100 175 70 200 55 C225 70 235 100 225 130 Z" fill="#22c55e" stroke="#166534" stroke-width="3"/>
<rect x="195" y="130" width="10" height="30" fill="#78350f"/>
<path d="M300 110 C300 80 330 80 330 110 L330 140 L300 140 Z" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<circle cx="315" cy="60" r="16" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<line x1="315" y1="76" x2="315" y2="110" stroke="#92400e" stroke-width="5"/>
<line x1="315" y1="140" x2="300" y2="170" stroke="#92400e" stroke-width="5"/><line x1="315" y1="140" x2="330" y2="170" stroke="#92400e" stroke-width="5"/>
<circle cx="450" cy="120" r="34" fill="none" stroke="#1f2937" stroke-width="5"/>
<circle cx="450" cy="120" r="5" fill="#1f2937"/>
<line x1="450" y1="120" x2="470" y2="95" stroke="#1f2937" stroke-width="4"/>
<path d="M540 70 C520 70 515 100 530 115 L530 135 L550 135 L550 115 C565 100 560 70 540 70 Z" fill="#fde047" stroke="#a16207" stroke-width="3"/>
<g fill="#ea580c" font-size="28"><text x="120" y="100">→</text><text x="245" y="100">→</text><text x="365" y="100">→</text><text x="490" y="100">→</text></g>
<g font-size="15" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="60" y="200">Sole</text><text x="200" y="200">Pianta</text><text x="315" y="200">Ciclista</text><text x="450" y="200">Dinamo</text><text x="540" y="200">Luce</text>
</g>
<g font-size="13" text-anchor="middle" fill="#7c2d12">
<text x="60" y="222">luminosa</text><text x="200" y="222">chimica</text><text x="315" y="222">chimica →</text><text x="315" y="238">cinetica</text><text x="450" y="222">elettrica</text><text x="540" y="222">luminosa</text>
</g>
</svg>`,
      caption: "La luce del Sole fa crescere le piante; il cibo dà energia al ciclista; i pedali fanno girare la dinamo che accende il fanale."
    },
    {
      type: "example",
      title: "Esempio pratico: le trasformazioni in casa",
      html: `<ul>
<li>💡 <b>Lampadina</b>: elettrica → luminosa (e un po' di calore). Le vecchie lampadine a filamento sprecavano in calore circa il <b>95%</b> dell'energia; i <b>LED</b> consumano circa <b>5–6 volte meno</b> per fare la stessa luce.</li>
<li>🔥 <b>Fornello a gas</b>: chimica (il metano) → termica (la fiamma).</li>
<li>🌀 <b>Ventilatore</b>: elettrica → cinetica (le pale girano).</li>
<li>📱 <b>Ricaricare il telefono</b>: elettrica → chimica (nella batteria). Quando lo usi: chimica → elettrica → luminosa e sonora.</li>
<li>🏀 <b>Palla che cade</b>: potenziale → cinetica. Rimbalza sempre un po' più in basso perché a ogni urto un po' di energia diventa calore e suono.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: forme di energia",
      questions: [
        { type: "mc", q: "Il vento ha energia…", options: ["cinetica", "chimica", "nucleare"], answer: 0, explain: "L'aria in movimento ha energia cinetica." },
        { type: "mc", q: "In una pila l'energia è immagazzinata in forma…", options: ["luminosa", "chimica", "termica"], answer: 1, explain: "Nelle pile l'energia è chimica e diventa elettrica quando le usi." },
        { type: "tf", q: "L'energia si può distruggere.", answer: false, explain: "L'energia non si crea e non si distrugge: si trasforma." }
      ]
    },
    {
      type: "text",
      title: "Fonti non rinnovabili",
      html: `<p>Le <b>fonti di energia</b> sono le risorse naturali da cui ricaviamo energia. Si dicono <b>non rinnovabili</b> (o esauribili) quelle che la natura impiega <b>milioni di anni</b> a formare: se le usiamo, prima o poi finiscono.</p>
<ul>
<li>⛏️ <b>Carbone</b>: si è formato da enormi foreste sepolte circa 300 milioni di anni fa.</li>
<li>🛢️ <b>Petrolio</b>: da resti di minuscoli organismi marini (il plancton) sepolti sotto il fondo del mare per milioni di anni. Da esso si ricavano benzina, gasolio, plastica.</li>
<li>🔥 <b>Gas naturale</b> (metano): si forma insieme al petrolio.</li>
<li>⚛️ <b>Uranio</b>: un metallo usato nelle centrali <b>nucleari</b>.</li>
</ul>
<p>Carbone, petrolio e gas si chiamano <b>combustibili fossili</b>. Bruciando producono <b>anidride carbonica</b> (CO<sub>2</sub>), un gas che trattiene il calore nell'atmosfera e fa aumentare la temperatura della Terra (<b>effetto serra</b> e <b>cambiamento climatico</b>), oltre a sostanze che <b>inquinano</b> l'aria.</p>`
    },
    {
      type: "text",
      title: "Fonti rinnovabili",
      html: `<p>Le fonti <b>rinnovabili</b> si rigenerano continuamente in tempi brevi e <b>non finiscono</b>. In più, mentre producono energia, non emettono CO<sub>2</sub> (o ne emettono pochissima).</p>
<ul>
<li>☀️ <b>Solare</b>: i <b>pannelli fotovoltaici</b> trasformano la luce in elettricità; i <b>pannelli solari termici</b> scaldano l'acqua.</li>
<li>💨 <b>Eolica</b>: il vento fa girare le pale delle <b>turbine eoliche</b> (pale eoliche).</li>
<li>💧 <b>Idroelettrica</b>: l'acqua che scende da una <b>diga</b> fa girare le turbine.</li>
<li>🌋 <b>Geotermica</b>: il calore che viene dall'interno della Terra.</li>
<li>🌳 <b>Biomasse</b>: legna, scarti agricoli, rifiuti organici che si bruciano o diventano biogas.</li>
<li>🌊 <b>Energia del mare</b>: onde e maree.</li>
</ul>
<p>Hanno però anche dei limiti: il Sole non c'è di notte, il vento non soffia sempre. Per questo servono <b>batterie</b> e reti elettriche intelligenti per immagazzinare e spostare l'energia.</p>`
    },
    {
      type: "widget",
      title: "Rinnovabile o non rinnovabile?",
      widget: "classify",
      options: {
        groups: ["♻️ Rinnovabile", "⛽ Non rinnovabile"],
        items: [
          ["☀️ Sole", 0],
          ["💨 Vento", 0],
          ["🛢️ Petrolio", 1],
          ["⛏️ Carbone", 1],
          ["💧 Acqua di una diga", 0],
          ["🔥 Gas metano", 1],
          ["🌋 Calore della Terra", 0],
          ["⚛️ Uranio", 1],
          ["🌳 Legna da boschi curati", 0],
          ["🌊 Maree", 0]
        ]
      },
      caption: "Metti ogni fonte nel gruppo giusto."
    },
    {
      type: "svg",
      title: "Come funziona una centrale",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<rect x="30" y="140" width="110" height="110" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<text x="85" y="185" font-size="16" text-anchor="middle" font-weight="bold">Caldaia</text>
<text x="85" y="208" font-size="13" text-anchor="middle">fuoco o Sole</text>
<text x="85" y="226" font-size="13" text-anchor="middle">scalda l'acqua</text>
<path d="M140 170 C170 150 190 150 210 160" fill="none" stroke="#94a3b8" stroke-width="10"/>
<text x="175" y="140" font-size="14" text-anchor="middle" fill="#475569">vapore</text>
<circle cx="260" cy="180" r="45" fill="#e0e7ff" stroke="#3730a3" stroke-width="4"/>
<g stroke="#3730a3" stroke-width="6"><line x1="260" y1="140" x2="260" y2="220"/><line x1="220" y1="180" x2="300" y2="180"/><line x1="232" y1="152" x2="288" y2="208"/><line x1="288" y1="152" x2="232" y2="208"/></g>
<text x="260" y="255" font-size="16" text-anchor="middle" font-weight="bold">Turbina</text>
<rect x="305" y="176" width="60" height="10" fill="#475569"/>
<rect x="365" y="145" width="90" height="70" rx="10" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<text x="410" y="185" font-size="15" text-anchor="middle" font-weight="bold">Alternatore</text>
<path d="M455 180 L520 180 L520 90" fill="none" stroke="#ca8a04" stroke-width="5"/>
<path d="M515 60 L525 60 L520 40 Z M505 90 L535 90 L520 60 Z" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<text x="540" y="140" font-size="15" fill="#92400e">⚡ alle</text>
<text x="540" y="160" font-size="15" fill="#92400e">case</text>
<text x="300" y="40" font-size="18" text-anchor="middle" fill="#1e3a8a">Il vapore (o il vento, o l'acqua) fa girare la turbina;</text>
<text x="300" y="65" font-size="18" text-anchor="middle" fill="#1e3a8a">la turbina fa girare l'alternatore che produce elettricità</text>
</svg>`,
      caption: "Quasi tutte le centrali funzionano così: cambia solo che cosa fa girare la turbina. I pannelli fotovoltaici, invece, trasformano direttamente la luce in elettricità."
    },
    {
      type: "example",
      title: "Esempio pratico: l'energia in Italia",
      html: `<p>In Italia una parte sempre più grande dell'elettricità viene da fonti rinnovabili: negli ultimi anni circa il <b>40%</b>, soprattutto da <b>acqua</b>, <b>Sole</b> e <b>vento</b>.</p>
<ul>
<li>💧 Le <b>centrali idroelettriche</b> si trovano soprattutto sulle <b>Alpi</b>, dove ci sono fiumi, laghi e dighe.</li>
<li>🌋 A <b>Larderello</b>, in Toscana, nel <b>1904</b> si accese la prima lampadina al mondo alimentata dall'energia <b>geotermica</b>. Ancora oggi la zona produce elettricità dal calore della Terra.</li>
<li>💨 Le pale eoliche sono soprattutto al <b>Sud</b> e nelle isole (Puglia, Sicilia, Campania, Basilicata, Sardegna), dove il vento soffia più forte.</li>
</ul>
<p>L'Italia ha poco petrolio e poco gas: ne compra gran parte da altri Paesi. Anche per questo le rinnovabili sono così importanti.</p>`
    },
    {
      type: "widget",
      title: "La storia dell'energia",
      widget: "timeline",
      options: {
        unit: "anni",
        scale: "log",
        events: [
          { year: -400000, label: "L'uomo usa il fuoco", icon: "🔥" },
          { year: -3000, label: "Vele: il vento spinge le barche", icon: "⛵" },
          { year: -100, label: "Mulini ad acqua (Grecia e Roma)", icon: "💧" },
          { year: 1200, label: "Mulini a vento in Europa", icon: "🌬️" },
          { year: 1769, label: "Macchina a vapore di James Watt", icon: "🚂" },
          { year: 1800, label: "Alessandro Volta inventa la pila", icon: "🔋" },
          { year: 1882, label: "Prime centrali elettriche (anche a Milano, 1883)", icon: "💡" },
          { year: 1904, label: "Geotermia a Larderello", icon: "🌋" },
          { year: 1954, label: "Prima cella fotovoltaica moderna", icon: "☀️" }
        ]
      },
      caption: "La scala è logaritmica: gli eventi recenti sono \"allargati\" per vederli meglio. Per centinaia di migliaia di anni l'umanità ha usato fuoco, muscoli, vento e acqua. Il carbone e il petrolio hanno cambiato tutto in soli 250 anni."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La pila è italiana",
      html: `<p>Nel <b>1800</b> lo scienziato comasco <b>Alessandro Volta</b> costruì la prima <b>pila</b> della storia: dischetti di zinco e di rame alternati e separati da pezzetti di stoffa bagnati di acqua salata, impilati uno sull'altro (per questo si chiama "pila"!).</p>
<p>In suo onore l'unità di misura della tensione elettrica si chiama <b>volt</b>. Le pile di casa ne hanno 1,5 V.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il Sole basta per tutti",
      html: `<p>In poco più di <b>un'ora</b>, la Terra riceve dal Sole tanta energia quanta l'intera umanità ne usa in <b>un anno</b> intero!</p>
<p>E in fondo quasi tutta l'energia viene dal Sole: il vento nasce perché il Sole scalda l'aria in modo diverso; la pioggia che riempie le dighe nasce dall'evaporazione; il petrolio e il carbone sono energia solare "intrappolata" da piante e plancton milioni di anni fa.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'energia è la capacità di compiere un lavoro; <b>si trasforma</b>, non si crea e non si distrugge.</li>
<li>Forme: cinetica, potenziale, termica, luminosa, elettrica, chimica, nucleare.</li>
<li><b>Non rinnovabili</b>: carbone, petrolio, gas, uranio. Finiscono e (i fossili) producono CO<sub>2</sub>.</li>
<li><b>Rinnovabili</b>: Sole, vento, acqua, geotermia, biomasse, mare. Si rigenerano.</li>
<li>La miglior energia è quella <b>risparmiata</b>!</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'energia",
      intro: "L'energia è un'idea astratta: proviamo a \"vederla\" con un paesaggio 3D, una molecola, un'analogia o un esperimento.",
      tabs: [
        {
          label: "⛰️ L'acqua dalla montagna (3D)",
          html: `<p>Esplora il paesaggio e tocca le sue parti: segui il viaggio dell'energia dell'acqua, dalla neve sulle cime fino alla centrale idroelettrica.</p>`,
          scene: "terrain",
          options: {
            features: {
              glacier: { label: "Ghiacciaio", html: "Il Sole fa evaporare l'acqua del mare; cade come neve sulle montagne e si accumula nei ghiacciai. È energia <b>potenziale</b>: l'acqua sta in alto!" },
              source: { label: "Sorgente", html: "Qui nasce il fiume. L'acqua comincia a scendere: l'energia potenziale diventa <b>cinetica</b>." },
              river: { label: "Fiume", html: "L'acqua che scorre può far girare le ruote dei mulini (lo facevano già i Romani) o le turbine delle centrali." },
              lake: { label: "Lago (bacino)", html: "Con una <b>diga</b> si crea un lago artificiale: l'acqua viene conservata in alto e fatta scendere quando serve elettricità." },
              valley: { label: "Valle con la centrale", html: "In fondo alla valle l'acqua cade nei tubi, fa girare la turbina e l'alternatore produce <b>energia elettrica</b>. Fonte rinnovabile: la pioggia e la neve torneranno!" },
              sea: { label: "Mare", html: "L'acqua torna al mare, il Sole la fa evaporare di nuovo: il ciclo dell'acqua ricomincia." }
            }
          }
        },
        {
          label: "⚛️ Il metano in 3D",
          html: `<p>Il <b>metano</b> (CH<sub>4</sub>), il gas dei fornelli, è una molecola con 1 atomo di <b>carbonio</b> e 4 di <b>idrogeno</b>. Quando brucia, si unisce all'ossigeno dell'aria e libera <b>calore</b>, ma produce anche <b>anidride carbonica</b> (CO<sub>2</sub>) e acqua.</p>
<p>L'energia chimica stava "nascosta" nei legami tra gli atomi!</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.45, color: "#1f2937", label: "C" },
              { x: 0.9, y: 0.9, z: 0.9, r: 0.3, color: "#f8fafc", label: "H" },
              { x: -0.9, y: -0.9, z: 0.9, r: 0.3, color: "#f8fafc", label: "H" },
              { x: -0.9, y: 0.9, z: -0.9, r: 0.3, color: "#f8fafc", label: "H" },
              { x: 0.9, y: -0.9, z: -0.9, r: 0.3, color: "#f8fafc", label: "H" }
            ],
            bonds: [ [0, 1], [0, 2], [0, 3], [0, 4] ]
          }
        },
        {
          label: "🏦 Salvadanaio e rubinetto",
          html: `<p>Immagina due modi di avere soldi:</p>
<ul>
<li>🐷 un <b>salvadanaio</b> pieno di monete accumulate dal nonno: puoi spenderle, ma quando finiscono… finiscono! Sono le fonti <b>non rinnovabili</b>, accumulate dalla natura in milioni di anni.</li>
<li>🚰 una <b>paghetta</b> che arriva ogni settimana: se spendi solo quella, non finisce mai. Sono le fonti <b>rinnovabili</b>, che il Sole "ricarica" ogni giorno.</li>
</ul>
<p>Oggi stiamo svuotando il salvadanaio molto in fretta: conviene imparare a vivere con la paghetta!</p>`
        },
        {
          label: "🍋 Esperimento: la pila al limone",
          html: `<p>Ripeti l'esperimento di Volta in cucina (con un adulto):</p>
<ol>
<li>infila in un limone una <b>moneta di rame</b> (o un filo di rame) e un <b>chiodo zincato</b>, senza farli toccare;</li>
<li>collega più limoni in fila con fili elettrici (rame di uno → zinco del successivo);</li>
<li>con 3–4 limoni puoi accendere un piccolo <b>LED</b>!</li>
</ol>
<p>L'acido del limone fa reagire i due metalli: l'energia <b>chimica</b> diventa <b>elettrica</b>. Proprio come nella pila di Volta del 1800.</p>`
        },
        {
          label: "🌍 Energia nel mondo",
          html: `<ul>
<li>🇮🇸 In <b>Islanda</b>, terra di vulcani, quasi tutta l'elettricità arriva da fonti rinnovabili: acqua e calore della Terra.</li>
<li>🇳🇴 La <b>Norvegia</b> produce quasi tutta la sua elettricità con le centrali idroelettriche.</li>
<li>🇩🇰 La <b>Danimarca</b> ricava più della metà della sua elettricità dal vento.</li>
<li>🇨🇳 La <b>Cina</b> ha la diga più potente del mondo, quella delle <b>Tre Gole</b> sul fiume Yangtze, e installa più pannelli solari di qualsiasi altro Paese.</li>
<li>🇫🇷 La <b>Francia</b> produce gran parte della sua elettricità con centrali nucleari.</li>
</ul>`,
          scene: "globe",
          options: {
            points: [
              { lat: 64.1, lon: -21.9, label: "Islanda", color: "#ef4444" },
              { lat: 60.5, lon: 8.5, label: "Norvegia", color: "#0ea5e9" },
              { lat: 56.0, lon: 10.0, label: "Danimarca", color: "#22c55e" },
              { lat: 30.8, lon: 111.0, label: "Tre Gole", color: "#0ea5e9" },
              { lat: 43.24, lon: 10.87, label: "Larderello", color: "#ef4444" },
              { lat: 46.6, lon: 2.4, label: "Francia", color: "#a855f7" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'energia: tocca un nodo e scopri il perché",
      nodes: [
        { id: "energia", label: "Energia", x: 50, y: 6, color: "#f59e0b", html: "Capacità di compiere un lavoro.", why: "La parola viene dal greco <i>enérgeia</i>, \"attività\", usata da Aristotele. Il concetto scientifico moderno nacque nell'Ottocento, studiando le macchine a vapore." },
        { id: "conserv", label: "Si conserva", x: 15, y: 24, color: "#ef4444", html: "Non si crea e non si distrugge: si trasforma.", why: "Lo dimostrarono a metà Ottocento <b>James Joule</b> (che misurò come il lavoro meccanico diventa calore), <b>Julius Mayer</b> e <b>Hermann von Helmholtz</b>. È una delle leggi più importanti di tutta la fisica." },
        { id: "forme", label: "Forme di energia", x: 50, y: 30, color: "#8b5cf6", html: "Cinetica, potenziale, termica, luminosa, elettrica, chimica, nucleare.", why: "Sono modi diversi in cui la stessa \"cosa\" si presenta. In ogni trasformazione una parte diventa calore che si disperde: per questo nessuna macchina è perfetta." },
        { id: "sole", label: "Il Sole", x: 85, y: 24, color: "#eab308", html: "La grande sorgente di quasi tutta l'energia sulla Terra.", why: "Nel nucleo del Sole, a circa 15 milioni di gradi, atomi di idrogeno si fondono in elio liberando enormi quantità di energia (fusione nucleare), come spiegò il fisico <b>Hans Bethe</b> nel 1939." },
        { id: "fonti", label: "Fonti di energia", x: 50, y: 52, color: "#0ea5e9", html: "Le risorse naturali da cui ricaviamo energia.", why: "Fino a 250 anni fa l'umanità usava quasi solo muscoli, legna, vento e acqua. La <b>Rivoluzione industriale</b> e la macchina a vapore di <b>James Watt</b> (1769) diedero inizio all'uso massiccio del carbone." },
        { id: "nonrinn", label: "Non rinnovabili", x: 22, y: 75, color: "#64748b", html: "Carbone, petrolio, gas, uranio.", why: "I fossili si sono formati in milioni di anni da resti di esseri viventi sepolti: li consumiamo molto più in fretta di quanto la natura possa riformarli." },
        { id: "rinn", label: "Rinnovabili", x: 78, y: 75, color: "#16a34a", html: "Sole, vento, acqua, geotermia, biomasse, mare.", why: "Sono alimentate da processi naturali continui: la luce del Sole, il ciclo dell'acqua, i venti, il calore interno della Terra. Il primo pannello fotovoltaico moderno fu creato ai Bell Labs (USA) nel 1954." },
        { id: "clima", label: "Effetto serra", x: 22, y: 95, color: "#dc2626", html: "Più CO<sub>2</sub> nell'aria → la Terra si scalda.", why: "Già nel 1896 lo scienziato svedese <b>Svante Arrhenius</b> calcolò che bruciare carbone avrebbe scaldato il pianeta. Oggi la temperatura media è salita di circa 1,2 °C rispetto alla fine dell'Ottocento." },
        { id: "risparmio", label: "Risparmio energetico", x: 78, y: 95, color: "#14b8a6", html: "Usare meno energia per fare le stesse cose.", why: "L'energia più pulita è quella che non serve produrre: lampadine LED, case isolate, spegnere ciò che non usi, andare a piedi o in bici." }
      ],
      edges: [
        ["energia", "conserv", "legge"],
        ["energia", "forme", "si presenta in"],
        ["sole", "forme", "fonte di quasi tutte le"],
        ["forme", "fonti", "si ricava dalle"],
        ["fonti", "nonrinn", "esauribili"],
        ["fonti", "rinn", "inesauribili"],
        ["nonrinn", "clima", "producono CO₂ →"],
        ["rinn", "risparmio", "insieme al"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: le fonti",
      questions: [
        { type: "mc", q: "Quale di queste è una fonte rinnovabile?", options: ["Petrolio", "Vento", "Carbone"], answer: 1, explain: "Il vento si rinnova continuamente." },
        { type: "mc", q: "Bruciando combustibili fossili si produce soprattutto…", options: ["ossigeno", "anidride carbonica", "acqua salata"], answer: 1, explain: "La CO<sub>2</sub> aumenta l'effetto serra." },
        { type: "text", q: "In quale regione italiana si trova Larderello, famosa per l'energia geotermica?", answer: ["toscana", "in toscana"], explain: "Larderello è in Toscana, in provincia di Pisa." }
      ]
    }
  ],
  glossary: [
    { t: "Energia", d: "Capacità di compiere un lavoro: muovere, scaldare, illuminare, trasformare." },
    { t: "Energia cinetica", d: "Energia posseduta da un corpo in movimento." },
    { t: "Energia potenziale", d: "Energia immagazzinata da un corpo per la sua posizione (per esempio in alto)." },
    { t: "Fonte rinnovabile", d: "Fonte di energia che si rigenera in tempi brevi e non si esaurisce." },
    { t: "Fonte non rinnovabile", d: "Fonte che si forma in tempi lunghissimi e si esaurisce con l'uso." },
    { t: "Combustibili fossili", d: "Carbone, petrolio e gas naturale, formati da resti di esseri viventi antichi." },
    { t: "Fotovoltaico", d: "Pannello che trasforma la luce del Sole direttamente in elettricità." },
    { t: "Turbina", d: "Ruota a pale che gira spinta da vapore, acqua o vento." },
    { t: "Effetto serra", d: "Riscaldamento della Terra dovuto a gas, come la CO₂, che trattengono il calore." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è l'energia?", options: ["Un tipo di materiale", "La capacità di compiere un lavoro", "Un gas"], answer: 1, explain: "L'energia è la capacità di muovere, scaldare, illuminare, trasformare." },
      { type: "tf", q: "L'energia non si crea e non si distrugge, ma si trasforma.", answer: true, explain: "È il principio di conservazione dell'energia." },
      { type: "mc", q: "Un ventilatore trasforma energia elettrica in energia…", options: ["cinetica", "chimica", "nucleare"], answer: 0, explain: "Le pale si muovono: energia cinetica." },
      { type: "mc", q: "Quale di queste fonti NON è rinnovabile?", options: ["Solare", "Gas naturale", "Geotermica"], answer: 1, explain: "Il gas naturale è un combustibile fossile." },
      { type: "text", q: "Come si chiamano i pannelli che trasformano la luce del Sole in elettricità?", answer: ["fotovoltaici", "pannelli fotovoltaici", "fotovoltaico"], explain: "Sono i pannelli fotovoltaici." },
      { type: "mc", q: "Da che cosa si è formato il petrolio?", options: ["Da rocce vulcaniche", "Da resti di piccoli organismi marini sepolti per milioni di anni", "Dall'acqua piovana"], answer: 1, explain: "Plancton e altri organismi sepolti sotto il fondo del mare." },
      { type: "mc", q: "Chi inventò la pila nel 1800?", options: ["Alessandro Volta", "Thomas Edison", "Galileo Galilei"], answer: 0, explain: "Alessandro Volta, di Como." },
      { type: "order", q: "Ordina le trasformazioni in una centrale idroelettrica.", items: ["L'acqua sta in alto nel lago della diga", "L'acqua scende nei tubi e prende velocità", "L'acqua fa girare la turbina", "L'alternatore produce elettricità"], explain: "Potenziale → cinetica → movimento della turbina → elettrica." },
      { type: "tf", q: "Il vento si forma perché il Sole scalda l'aria in modo diverso nei vari luoghi.", answer: true, explain: "L'aria calda sale, quella fredda prende il suo posto: nasce il vento." },
      { type: "mc", q: "Perché le fonti rinnovabili aiutano a combattere il cambiamento climatico?", options: ["Perché costano sempre poco", "Perché mentre producono energia non emettono (quasi) CO₂", "Perché funzionano solo di giorno"], answer: 1, explain: "Non bruciano combustibili fossili, quindi non aumentano l'effetto serra." },
      { type: "mc", q: "Quale lampadina spreca meno energia in calore?", options: ["A filamento", "LED", "Sono uguali"], answer: 1, explain: "I LED consumano circa 5–6 volte meno per la stessa luce." }
    ]
  }
});
