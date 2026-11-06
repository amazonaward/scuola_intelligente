TOPIC('it', {
  id: "p1-geo-spazi-casa-scuola",
  title: "Gli spazi della casa e della scuola",
  intro: "La casa e la scuola sono divise in tanti <b>spazi</b>: le stanze! 🏠🏫 Ogni stanza ha i suoi <b>mobili</b> e serve a fare qualcosa: in cucina si cucina 🍝, in camera si dorme 😴, in palestra si gioca ⚽. Scopriamo insieme a cosa servono!",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Le stanze della casa 🏠",
      html: `<p>Ogni stanza ha una <b>funzione</b>: vuol dire che serve a fare qualcosa.</p>
<table>
<tr><th>Stanza</th><th>A cosa serve</th><th>Cosa c'è dentro</th></tr>
<tr><td>🍳 <b>Cucina</b></td><td>cucinare e mangiare</td><td>fornelli, frigorifero, lavello</td></tr>
<tr><td>🛋️ <b>Soggiorno</b></td><td>stare insieme, riposare, giocare</td><td>divano, televisione, tavolino</td></tr>
<tr><td>🛏️ <b>Camera da letto</b></td><td>dormire</td><td>letto, armadio, comodino</td></tr>
<tr><td>🛁 <b>Bagno</b></td><td>lavarsi</td><td>lavandino, doccia o vasca, water</td></tr>
<tr><td>🚪 <b>Ingresso e corridoio</b></td><td>entrare e passare da una stanza all'altra</td><td>attaccapanni, scarpiera</td></tr>
</table>
<p>Gli <b>arredi</b> (i mobili) ci dicono a cosa serve una stanza: se vedi un letto, sei in camera! 🛏️</p>`
    },
    {
      type: "svg",
      title: "La casa vista dall'alto: la pianta",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#f8fafc"/>
<rect x="40" y="30" width="520" height="260" fill="#fff7ed" stroke="#334155" stroke-width="6"/>
<path d="M260 30 V170 M40 170 H560 M400 170 V290 M200 170 V290" stroke="#334155" stroke-width="5" fill="none"/>
<rect x="60" y="45" width="60" height="30" fill="#fca5a5"/>
<rect x="60" y="120" width="40" height="40" fill="#bae6fd"/>
<text x="150" y="110" font-size="22" text-anchor="middle" fill="#9a3412" font-weight="bold">🍳 CUCINA</text>
<rect x="430" y="45" width="110" height="40" fill="#a5b4fc"/>
<text x="410" y="125" font-size="22" text-anchor="middle" fill="#3730a3" font-weight="bold">🛋️ SOGGIORNO</text>
<rect x="60" y="210" width="70" height="60" fill="#c4b5fd"/>
<text x="120" y="200" font-size="20" text-anchor="middle" fill="#6d28d9" font-weight="bold">🛏️ CAMERA</text>
<text x="300" y="240" font-size="20" text-anchor="middle" fill="#0f766e" font-weight="bold">🚪 INGRESSO</text>
<rect x="500" y="230" width="45" height="45" fill="#99f6e4"/>
<text x="470" y="210" font-size="20" text-anchor="middle" fill="#0e7490" font-weight="bold">🛁 BAGNO</text>
<rect x="280" y="282" width="40" height="16" fill="#f59e0b"/>
<text x="300" y="315" font-size="14" text-anchor="middle" fill="#92400e">porta d'ingresso</text>
</svg>`,
      caption: "Questa è una PIANTA: la casa disegnata come se la guardassimo dall'alto, senza il tetto. I rettangoli colorati sono i mobili."
    },
    {
      type: "remember",
      title: "Spazi, confini e arredi",
      html: `<p>🧱 Ogni stanza ha dei <b>confini</b>: le pareti. Si passa da una stanza all'altra attraverso le <b>porte</b>.</p>
<p>🪑 Dentro ci sono gli <b>arredi</b>: mobili e oggetti che servono a fare qualcosa.</p>
<p>🎯 Ogni spazio ha una <b>funzione</b>: a cosa serve.</p>
<p>📐 Disegnare dall'alto si dice fare la <b>pianta</b>.</p>`
    },
    {
      type: "widget",
      title: "Gioco: in quale stanza va?",
      widget: "classify",
      options: {
        groups: ["🍳 Cucina", "🛏️ Camera", "🛁 Bagno"],
        items: [["🍝 pentola", 0], ["🧊 frigorifero", 0], ["🥄 cucchiaio", 0], ["🛏️ letto", 1], ["🧸 orsacchiotto", 1], ["👕 armadio", 1], ["🪥 spazzolino", 2], ["🧼 sapone", 2], ["🚿 doccia", 2]]
      },
      caption: "Trascina o tocca ogni oggetto e mettilo nella stanza giusta."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le stanze di casa",
      questions: [
        { type: "mc", q: "Dove si dorme?", options: ["in cucina", "in camera da letto", "in bagno"], answer: 1, explain: "La camera serve per dormire 😴." },
        { type: "mc", q: "Il frigorifero di solito sta…", options: ["in cucina", "in bagno", "in ingresso"], answer: 0, explain: "In cucina, per tenere freschi i cibi." },
        { type: "tf", q: "La pianta è la casa disegnata vista dall'alto.", answer: true, explain: "Come la vedrebbe un uccellino senza il tetto 🐦." }
      ]
    },
    {
      type: "text",
      title: "Gli spazi della scuola 🏫",
      html: `<p>Anche la scuola ha tanti spazi, e ognuno ha la sua funzione:</p>
<ul>
<li>📚 <b>Aula</b>: si fa lezione. Ci sono banchi, sedie, lavagna, cattedra.</li>
<li>🏀 <b>Palestra</b>: si fa movimento. Ci sono palloni, cerchi, materassi, spalliere.</li>
<li>🍽️ <b>Mensa</b>: si mangia insieme. Ci sono tavoli lunghi e vassoi.</li>
<li>🌳 <b>Cortile / giardino</b>: si gioca all'aperto durante la ricreazione.</li>
<li>📖 <b>Biblioteca</b>: si leggono e si prendono in prestito i libri.</li>
<li>🚻 <b>Bagni</b>, 🚪 <b>corridoi</b> e <b>atrio</b> (l'ingresso, dove c'è il collaboratore scolastico).</li>
</ul>
<p>Alcuni spazi sono <b>privati</b> (la tua camera, a casa) e altri sono <b>pubblici</b> e di tutti (i corridoi della scuola): vanno rispettati insieme! 🤝</p>`
    },
    {
      type: "widget",
      title: "Gioco: lo spazio e la sua funzione",
      widget: "match",
      options: { pairs: [["Aula", "fare lezione 📚"], ["Palestra", "fare movimento 🏃"], ["Mensa", "pranzare 🍽️"], ["Biblioteca", "leggere libri 📖"], ["Cortile", "giocare all'aperto 🌳"], ["Cucina", "preparare il cibo 🍳"]] },
      caption: "Abbina ogni spazio alla sua funzione."
    },
    {
      type: "example",
      title: "Esempio: la mattina di Giulia ☀️",
      html: `<p>Giulia si sveglia in <b>camera</b> 🛏️, va in <b>bagno</b> a lavarsi i denti 🪥, fa colazione in <b>cucina</b> 🥛, prende lo zaino in <b>ingresso</b> 🎒 ed esce.</p>
<p>A scuola entra dall'<b>atrio</b>, sale in <b>aula</b> 📚, a metà mattina gioca in <b>cortile</b> ⚽ e a pranzo va in <b>mensa</b> 🍽️.</p>
<p>Ogni momento della giornata si svolge in uno spazio diverso!</p>`
    },
    {
      type: "example",
      title: "Esempio: disegna la pianta della tua aula ✏️",
      html: `<p>1. Disegna un grande rettangolo: sono le <b>pareti</b>.</p>
<p>2. Lascia uno spazio per la <b>porta</b> e disegna le <b>finestre</b> con due righe sottili.</p>
<p>3. Disegna dall'alto i mobili: i <b>banchi</b> sono piccoli rettangoli, la <b>cattedra</b> un rettangolo più grande, la <b>lavagna</b> una riga spessa sulla parete.</p>
<p>4. Colora il tuo banco di rosso: ora tutti sanno dove ti siedi! 🔴</p>`
    },
    {
      type: "widget",
      title: "Gioco: dai il nome agli spazi della scuola",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#bbf7d0"/>
<rect x="40" y="30" width="400" height="200" fill="#fefce8" stroke="#334155" stroke-width="5"/>
<path d="M180 30 V230 M320 30 V230 M40 140 H180 M320 140 H440" stroke="#334155" stroke-width="4" fill="none"/>
<rect x="60" y="50" width="20" height="14" fill="#a16207"/><rect x="100" y="50" width="20" height="14" fill="#a16207"/><rect x="140" y="50" width="20" height="14" fill="#a16207"/>
<rect x="60" y="90" width="20" height="14" fill="#a16207"/><rect x="100" y="90" width="20" height="14" fill="#a16207"/><rect x="140" y="90" width="20" height="14" fill="#a16207"/>
<rect x="60" y="165" width="100" height="16" fill="#fb923c"/><rect x="60" y="200" width="100" height="16" fill="#fb923c"/>
<circle cx="250" cy="130" r="30" fill="none" stroke="#ef4444" stroke-width="4"/>
<rect x="335" y="50" width="12" height="70" fill="#7c3aed"/><rect x="355" y="50" width="12" height="70" fill="#2563eb"/><rect x="375" y="50" width="12" height="70" fill="#16a34a"/>
<circle cx="520" cy="120" r="35" fill="#16a34a"/><circle cx="500" cy="260" r="28" fill="#16a34a"/>
</svg>`,
        spots: [
          { x: 110, y: 80, label: "Aula" },
          { x: 110, y: 190, label: "Mensa" },
          { x: 250, y: 130, label: "Palestra" },
          { x: 380, y: 85, label: "Biblioteca" },
          { x: 520, y: 200, label: "Cortile" }
        ]
      },
      caption: "Guarda gli arredi: banchi, tavoli lunghi, il cerchio della palestra, gli scaffali dei libri, gli alberi. Tocca ogni punto e scegli il nome dello spazio."
    },
    {
      type: "3d",
      title: "Una stanza è come una scatola 📦",
      scene: "solid",
      options: { shape: "box", w: 4, h: 2.7, d: 3, color: "#fde68a", labels: true },
      caption: "Ruota la stanza: il fondo è il PAVIMENTO, le facce intorno sono le PARETI, quella in alto è il SOFFITTO. Guardandola dall'alto, vedi solo un rettangolo: è la sua pianta!"
    },
    {
      type: "3d",
      title: "Case diverse nel mondo 🌍",
      scene: "globe",
      options: { points: [
        { lat: 40.8, lon: 17.2, label: "Trulli (Puglia, Italia)", color: "#f97316" },
        { lat: 47.9, lon: 106.9, label: "Ger / yurta (Mongolia)", color: "#ef4444" },
        { lat: 35.7, lon: 139.7, label: "Casa con tatami (Giappone)", color: "#22c55e" },
        { lat: 64, lon: -68, label: "Igloo (Inuit, Canada)", color: "#3b82f6" },
        { lat: 13.5, lon: -2, label: "Capanne di fango (Burkina Faso)", color: "#a16207" }
      ] },
      caption: "Gira il globo: in ogni parte del mondo le case sono diverse, perché il clima e i materiali cambiano. Ma tutte hanno spazi per dormire, cucinare e stare insieme."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… in Giappone si dorme in soggiorno? 🇯🇵",
      html: `<p>Nelle case tradizionali giapponesi i pavimenti sono coperti da tappeti di paglia chiamati <b>tatami</b>. Di giorno la stanza serve per mangiare e stare insieme; la sera si stende il <b>futon</b>, un materasso morbido, e diventa una camera da letto! Al mattino il futon si piega e si mette nell'armadio. Una stanza, due funzioni.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… le prime scuole non avevano i banchi? ✍️",
      html: `<p>Nell'antica Roma i bambini andavano dal <b>maestro</b> (si chiamava <i>ludi magister</i>) spesso sotto un portico, all'aperto. Si sedevano su sgabelli e scrivevano su <b>tavolette di cera</b> appoggiate sulle ginocchia, con uno stilo appuntito. I banchi con il piano inclinato sono arrivati moltissimi secoli dopo!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "<p>Ecco altri modi per scoprire gli spazi e a cosa servono.</p>",
      tabs: [
        {
          label: "🌍 Case nel mondo",
          html: `<p>Non tutte le case hanno tante stanze!</p>
<ul>
<li>🇲🇳 In <b>Mongolia</b> i pastori vivono nella <b>ger</b> (yurta): una grande tenda rotonda con <b>una sola stanza</b>. Il fornello sta al centro, i letti lungo le pareti.</li>
<li>🧊 Gli <b>Inuit</b> del Grande Nord costruivano l'<b>igloo</b> con blocchi di neve per le soste durante la caccia.</li>
<li>🇮🇹 In Puglia ci sono i <b>trulli</b>, case di pietra con il tetto a cono.</li>
</ul>
<p>Anche lì, però, ogni <b>angolo</b> ha la sua funzione: dormire, cucinare, conservare.</p>`
        },
        {
          label: "🕵️ Il detective degli arredi",
          html: `<p>Gioco: guarda l'oggetto e indovina la stanza, come un detective!</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "🛁 vasca", back: "Bagno" },
            { front: "🍳 padella", back: "Cucina" },
            { front: "🛋️ divano", back: "Soggiorno" },
            { front: "🧥 attaccapanni", back: "Ingresso" },
            { front: "🏐 pallone e materassi", back: "Palestra" },
            { front: "📚 scaffali pieni di libri", back: "Biblioteca" },
            { front: "🧑‍🏫 lavagna e cattedra", back: "Aula" }
          ] }
        },
        {
          label: "🐦 Dall'alto",
          html: `<p>Immagina di essere un uccellino sopra la casa e di togliere il tetto. Cosa vedi? Solo le <b>forme</b> dei mobili: il tavolo diventa un rettangolo, il vaso un cerchio. Questo è il disegno in <b>pianta</b>.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#f0f9ff"/>
<text x="150" y="30" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">Di lato</text>
<rect x="70" y="120" width="160" height="16" fill="#92400e"/>
<rect x="80" y="136" width="12" height="70" fill="#92400e"/>
<rect x="208" y="136" width="12" height="70" fill="#92400e"/>
<ellipse cx="150" cy="105" rx="18" ry="16" fill="#3b82f6"/>
<text x="300" y="130" font-size="40" text-anchor="middle">➡️</text>
<text x="460" y="30" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">Dall'alto (pianta)</text>
<rect x="380" y="80" width="160" height="100" fill="#d97706" stroke="#92400e" stroke-width="3"/>
<circle cx="460" cy="130" r="18" fill="#3b82f6"/>
<text x="460" y="215" font-size="16" text-anchor="middle" fill="#334155">tavolo = rettangolo, vaso = cerchio</text>
</svg>`
        },
        {
          label: "🧊 In 3D",
          html: `<p>Ruota il solido: è un <b>armadio</b> visto in 3D. Davanti vedi le ante, dall'alto vedi solo un rettangolo stretto. Lo stesso mobile cambia forma a seconda di dove lo guardi!</p>`,
          scene: "solid",
          options: { shape: "box", w: 2, h: 3, d: 0.8, color: "#a16207", labels: false }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: spazi e funzioni",
      nodes: [
        { id: "spazio", label: "Spazio vissuto", x: 50, y: 8, color: "#0ea5e9", html: "<p>Gli ambienti dove viviamo ogni giorno: casa e scuola.</p>", why: "<p>La geografia comincia da vicino: prima conosciamo i posti dove viviamo, poi il quartiere, la città, il mondo.</p>" },
        { id: "casa", label: "Casa", x: 22, y: 30, color: "#f97316", html: "<p>Lo spazio privato della famiglia.</p>", why: "<p>Le persone costruiscono case da migliaia di anni per ripararsi dal freddo, dalla pioggia e dagli animali. Le prime erano capanne e grotte.</p>" },
        { id: "scuola", label: "Scuola", x: 78, y: 30, color: "#3b82f6", html: "<p>Lo spazio pubblico dove si impara insieme.</p>", why: "<p>In Italia la scuola elementare è diventata obbligatoria per tutti con la legge Casati (1859) e la legge Coppino (1877). Gli edifici scolastici hanno spazi pensati per imparare, muoversi e mangiare.</p>" },
        { id: "stanze", label: "Stanze", x: 22, y: 58, color: "#eab308", html: "<p>Cucina, camera, bagno, soggiorno.</p>", why: "<p>Dividere la casa in stanze permette di fare cose diverse senza disturbarsi: dormire al buio mentre altri cucinano.</p>" },
        { id: "ambienti", label: "Ambienti scolastici", x: 78, y: 58, color: "#8b5cf6", html: "<p>Aula, palestra, mensa, biblioteca, cortile.</p>", why: "<p>Ogni attività ha bisogno di uno spazio adatto: per correre serve una palestra grande e sicura, per leggere un posto tranquillo.</p>" },
        { id: "arredi", label: "Arredi", x: 50, y: 72, color: "#a16207", html: "<p>Mobili e oggetti che stanno in uno spazio.</p>", why: "<p>Gli arredi sono indizi: guardandoli capiamo a cosa serve una stanza, anche in una casa che non conosciamo.</p>" },
        { id: "funzione", label: "Funzione", x: 25, y: 92, color: "#22c55e", html: "<p>A cosa serve uno spazio.</p>", why: "<p>Gli architetti progettano gli edifici partendo dalla funzione: prima decidono cosa si farà in uno spazio, poi lo disegnano.</p>" },
        { id: "pianta", label: "Pianta", x: 75, y: 92, color: "#ec4899", html: "<p>Il disegno visto dall'alto.</p>", why: "<p>È il primo passo verso le carte geografiche: anche le mappe delle città sono disegnate dall'alto, rimpicciolite.</p>" }
      ],
      edges: [
        ["spazio", "casa", ""], ["spazio", "scuola", ""], ["casa", "stanze", "divisa in"], ["scuola", "ambienti", "divisa in"],
        ["stanze", "arredi", "contengono"], ["ambienti", "arredi", "contengono"], ["arredi", "funzione", "rivelano"], ["arredi", "pianta", "si disegnano in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: gli spazi della scuola",
      questions: [
        { type: "mc", q: "Dove si prendono in prestito i libri?", options: ["in mensa", "in biblioteca", "in palestra"], answer: 1, explain: "In biblioteca 📖." },
        { type: "mc", q: "Nella palestra trovo…", options: ["palloni e materassi", "letti e armadi", "fornelli"], answer: 0, explain: "Gli arredi della palestra servono per il movimento." },
        { type: "tf", q: "I corridoi della scuola sono spazi di tutti.", answer: true, explain: "Sono spazi pubblici: vanno rispettati insieme." }
      ]
    }
  ],
  glossary: [
    { t: "Spazio", d: "Un luogo dove si vive o si fa qualcosa." },
    { t: "Stanza", d: "Una parte della casa chiusa da pareti." },
    { t: "Funzione", d: "A cosa serve uno spazio o un oggetto." },
    { t: "Arredi", d: "Mobili e oggetti che stanno in una stanza." },
    { t: "Confine", d: "Ciò che separa uno spazio da un altro (es. le pareti)." },
    { t: "Pianta", d: "Disegno di un luogo visto dall'alto." },
    { t: "Spazio pubblico / privato", d: "Di tutti (la scuola, il parco) / di una persona o famiglia (la casa)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In quale stanza ci si lava?", options: ["in bagno", "in soggiorno", "in cucina"], answer: 0, explain: "Nel bagno ci sono lavandino e doccia." },
      { type: "mc", q: "Il divano di solito sta…", options: ["in bagno", "in soggiorno", "in mensa"], answer: 1, explain: "Nel soggiorno si sta insieme e si riposa." },
      { type: "tf", q: "Gli arredi ci aiutano a capire a cosa serve una stanza.", answer: true, explain: "Un letto → camera; un fornello → cucina." },
      { type: "text", q: "Come si chiama lo spazio della scuola dove si fa movimento?", answer: ["palestra", "la palestra"], explain: "La palestra." },
      { type: "mc", q: "Dove si pranza a scuola?", options: ["in mensa", "in biblioteca", "in aula di musica"], answer: 0, explain: "In mensa, tutti insieme." },
      { type: "mc", q: "Come si chiama il disegno di una casa vista dall'alto?", options: ["ritratto", "pianta", "paesaggio"], answer: 1, explain: "È la pianta." },
      { type: "tf", q: "Il frigorifero sta in camera da letto.", answer: false, explain: "Di solito sta in cucina." },
      { type: "mc", q: "La funzione di uno spazio è…", options: ["il suo colore", "a cosa serve", "quanto è grande"], answer: 1, explain: "La funzione dice a cosa serve." },
      { type: "order", q: "Metti in ordine la mattina di Giulia:", items: ["si sveglia in camera", "si lava in bagno", "fa colazione in cucina", "esce dall'ingresso"], explain: "Camera → bagno → cucina → ingresso." },
      { type: "mc", q: "Nelle case giapponesi tradizionali si dorme su un materasso che si piega. Come si chiama?", options: ["futon", "tatami", "igloo"], answer: 0, explain: "Il futon; il tatami è il tappeto di paglia del pavimento." },
      { type: "mc", q: "Quale è uno spazio pubblico?", options: ["la mia cameretta", "il cortile della scuola", "il mio armadio"], answer: 1, explain: "Il cortile della scuola è di tutti." }
    ]
  }
});
