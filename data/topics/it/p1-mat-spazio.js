TOPIC('it', {
  id: "p1-mat-spazio",
  title: "Sopra, sotto, destra, sinistra",
  intro: "Dov'è il gatto? 🐱 <b>Sotto</b> il tavolo! E il libro? <b>Sopra</b> la sedia! Per dire dove si trovano le cose usiamo parole speciali. Impariamo a orientarci nella stanza e sul foglio, come piccoli esploratori 🧭.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Le parole della posizione",
      html: `<p>Per dire <b>dove</b> si trova una cosa usiamo queste coppie di parole:</p>
<ul>
<li>⬆️ <b>sopra</b> / ⬇️ <b>sotto</b> — la lampada è sopra il tavolo, il cane è sotto.</li>
<li>🔜 <b>davanti</b> / 🔙 <b>dietro</b> — la maestra è davanti alla lavagna.</li>
<li>📦 <b>dentro</b> / <b>fuori</b> — le matite sono dentro l'astuccio.</li>
<li>👫 <b>vicino</b> / <b>lontano</b> — il mio amico è vicino a me.</li>
<li>👈 <b>sinistra</b> / 👉 <b>destra</b> — i due lati del nostro corpo.</li>
</ul>
<p>Ogni coppia ha due parole <b>contrarie</b>: se una cosa è sopra, non può essere sotto!</p>`
    },
    {
      type: "svg",
      title: "Dov'è ogni cosa?",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fef9c3"/>
<rect x="0" y="270" width="600" height="50" fill="#d6a76c"/>
<rect x="170" y="150" width="260" height="20" fill="#92400e"/>
<rect x="185" y="170" width="16" height="100" fill="#78350f"/>
<rect x="400" y="170" width="16" height="100" fill="#78350f"/>
<rect x="250" y="110" width="70" height="40" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>
<text x="285" y="137" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">libro</text>
<line x1="300" y1="0" x2="300" y2="40" stroke="#374151" stroke-width="3"/>
<path d="M270 40 L330 40 L315 70 L285 70 Z" fill="#facc15" stroke="#a16207" stroke-width="3"/>
<ellipse cx="300" cy="245" rx="38" ry="24" fill="#fb923c"/>
<circle cx="268" cy="228" r="16" fill="#fb923c"/>
<polygon points="256,216 260,200 268,214" fill="#fb923c"/>
<polygon points="270,214 278,200 282,216" fill="#fb923c"/>
<text x="300" y="300" font-size="15" text-anchor="middle" fill="#7c2d12" font-weight="bold">gatto</text>
<rect x="470" y="190" width="80" height="80" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<circle cx="510" cy="230" r="18" fill="#ef4444"/>
<text x="510" y="182" font-size="15" text-anchor="middle" fill="#3f6212" font-weight="bold">scatola</text>
<circle cx="80" cy="245" r="24" fill="#ec4899" stroke="#9d174d" stroke-width="3"/>
<text x="80" y="300" font-size="15" text-anchor="middle" fill="#9d174d" font-weight="bold">palla</text>
<text x="400" y="60" font-size="16" fill="#111827">🔆 lampada SOPRA il tavolo</text>
<text x="340" y="132" font-size="16" fill="#1e3a8a">← libro SUL tavolo</text>
<text x="350" y="250" font-size="16" fill="#7c2d12">gatto SOTTO</text>
<text x="20" y="200" font-size="16" fill="#9d174d">palla FUORI dalla scatola,</text>
<text x="20" y="218" font-size="16" fill="#9d174d">a SINISTRA del tavolo</text>
</svg>`,
      caption: "La pallina rossa è DENTRO la scatola verde; la palla rosa è FUORI e lontana dalla scatola."
    },
    {
      type: "text",
      title: "Destra e sinistra: passo per passo",
      html: `<p>Destra e sinistra sono le parole più difficili, perché <b>dipendono da come sei girato</b>. Ecco come fare:</p>
<ol>
<li>✍️ La mano con cui scrivi, per molti bambini, è la <b>destra</b>. (Se sei mancino scrivi con la sinistra: va benissimo! Usa un altro segno, come un braccialetto.)</li>
<li>🖐️ Alza le due mani davanti a te, con il dorso verso di te (vedi le unghie), pollice e indice tesi: la mano che con pollice e indice forma una <b>L</b> giusta è la <b>sinistra</b>.</li>
<li>❤️ Il cuore batte un po' più a <b>sinistra</b> nel petto.</li>
<li>🔄 Se ti giri e guardi dall'altra parte, destra e sinistra <b>si scambiano</b> con le cose intorno!</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio: in classe 🏫",
      html: `<p>Luca è seduto al suo banco. Diciamo dove sono le cose <b>rispetto a lui</b>:</p>
<ul>
<li>La <b>lavagna</b> è <b>davanti</b> a Luca.</li>
<li>Lo <b>zaino</b> è <b>dietro</b>, appeso alla sedia.</li>
<li>La <b>finestra</b> è alla sua <b>destra</b>, la <b>porta</b> alla sua <b>sinistra</b>.</li>
<li>Il <b>quaderno</b> è <b>sopra</b> il banco, le <b>scarpe</b> sono <b>sotto</b>.</li>
</ul>
<p>Ma attenzione: per la maestra, che guarda la classe, la finestra è a <b>sinistra</b>! Dipende sempre da <b>chi guarda</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: dove si trova?",
      questions: [
        { type: "mc", q: "Il gatto è sotto il tavolo. Il tavolo è…", options: ["sotto il gatto", "sopra il gatto", "dentro il gatto"], answer: 1, explain: "Se il gatto è sotto il tavolo, il tavolo è sopra il gatto: sono parole contrarie." },
        { type: "mc", q: "Qual è il contrario di «dentro»?", options: ["Fuori", "Sotto", "Vicino"], answer: 0, explain: "Dentro e fuori sono contrari." },
        { type: "tf", q: "Se mi giro dall'altra parte, la porta che era a destra va a sinistra.", answer: true, explain: "Sì: destra e sinistra dipendono da come sei girato." }
      ]
    },
    {
      type: "text",
      title: "Sul foglio: le posizioni della pagina",
      html: `<p>Anche il <b>foglio</b> ha le sue posizioni:</p>
<ul>
<li>in <b>alto</b> (dove scrivi la data) e in <b>basso</b>;</li>
<li>a <b>sinistra</b> (dove <b>cominci</b> a scrivere) e a <b>destra</b>;</li>
<li>al <b>centro</b>, nel mezzo;</li>
<li>e i quattro <b>angoli</b>: in alto a sinistra, in alto a destra, in basso a sinistra, in basso a destra.</li>
</ul>
<p>In italiano si scrive da <b>sinistra a destra</b> e dall'<b>alto in basso</b> ✏️➡️.</p>`
    },
    {
      type: "widget",
      title: "Le posizioni del foglio",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0e7ff"/>
<rect x="100" y="20" width="400" height="280" fill="#ffffff" stroke="#4338ca" stroke-width="4"/>
<text x="160" y="70" font-size="40">⭐</text>
<text x="400" y="70" font-size="40">🌙</text>
<text x="280" y="175" font-size="40">☀️</text>
<text x="160" y="280" font-size="40">🌳</text>
<text x="400" y="280" font-size="40">🏠</text>
</svg>`,
        spots: [
          { x: 180, y: 55, label: "In alto a sinistra" },
          { x: 420, y: 55, label: "In alto a destra" },
          { x: 300, y: 160, label: "Al centro" },
          { x: 180, y: 265, label: "In basso a sinistra" },
          { x: 420, y: 265, label: "In basso a destra" }
        ]
      },
      caption: "Tocca ogni disegno e scegli dove si trova sul foglio."
    },
    {
      type: "example",
      title: "Esempio: il robot e le frecce 🤖",
      html: `<p>Un robottino sta su una scacchiera. Gli diamo dei <b>comandi</b> con le frecce: ogni freccia = 1 passo.</p>
<p>Il robot parte dalla casella 🏁 e deve arrivare alla 🍎:</p>
<p style="font-size:1.4em">➡️ ➡️ ⬆️ ⬆️ ➡️</p>
<p>Cioè: 2 passi a destra, 2 passi in su, 1 passo a destra. Questo si chiama <b>percorso</b>, ed è anche il primo passo del <b>coding</b>, il modo in cui diamo istruzioni ai computer!</p>`
    },
    {
      type: "svg",
      title: "Il percorso sul reticolo",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<g stroke="#86efac" stroke-width="2">
<rect x="150" y="20" width="300" height="280" fill="#ffffff"/>
<line x1="210" y1="20" x2="210" y2="300"/><line x1="270" y1="20" x2="270" y2="300"/><line x1="330" y1="20" x2="330" y2="300"/><line x1="390" y1="20" x2="390" y2="300"/>
<line x1="150" y1="76" x2="450" y2="76"/><line x1="150" y1="132" x2="450" y2="132"/><line x1="150" y1="188" x2="450" y2="188"/><line x1="150" y1="244" x2="450" y2="244"/>
</g>
<text x="165" y="286" font-size="34">🏁</text>
<text x="345" y="174" font-size="34">🍎</text>
<path d="M180 272 L300 272 L300 160 L345 160" stroke="#ef4444" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="240" y="265" font-size="18" text-anchor="middle" fill="#b91c1c">➡️➡️</text>
<text x="310" y="225" font-size="18" fill="#b91c1c">⬆️⬆️</text>
<text x="520" y="150" font-size="17" text-anchor="middle" fill="#166534" font-weight="bold">2 a destra</text>
<text x="520" y="175" font-size="17" text-anchor="middle" fill="#166534" font-weight="bold">2 in su</text>
<text x="520" y="200" font-size="17" text-anchor="middle" fill="#166534" font-weight="bold">1 a destra</text>
</svg>`,
      caption: "Segui con il dito la linea rossa: ogni casella è un passo."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🧑‍🚀",
      html: `<p>Nello <b>spazio</b>, sulla Stazione Spaziale, gli astronauti galleggiano e non c'è un vero «sopra» e «sotto»: possono dormire attaccati al muro o al soffitto! Per non confondersi, dipingono i pavimenti e i soffitti di colori diversi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🇦🇺",
      html: `<p>In Australia c'è un popolo, i <b>Guugu Yimithirr</b>, che nella sua lingua quasi non usa «destra» e «sinistra». Dicono invece: «la formica è sul tuo piede <b>nord</b>», «passami la tazza a <b>est</b>». Per questo sanno sempre dove sono i punti cardinali, anche al chiuso!</p>`
    },
    {
      type: "widget",
      title: "Sopra o sotto?",
      widget: "classify",
      options: {
        groups: ["⬆️ In alto (sopra di noi)", "⬇️ In basso (sotto di noi)"],
        items: [
          ["☁️ nuvole", 0],
          ["🌞 sole", 0],
          ["🐦 uccellino in volo", 0],
          ["💡 lampadario", 0],
          ["🪱 lombrico", 1],
          ["👟 scarpe", 1],
          ["🌱 radici", 1],
          ["🧦 tappeto", 1]
        ]
      },
      caption: "Pensa a dove si trovano rispetto a un bambino in piedi."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Le posizioni si dicono sempre <b>rispetto a qualcosa</b> (a me, al tavolo, al foglio…).</li>
<li>Coppie di contrari: <b>sopra/sotto</b>, <b>davanti/dietro</b>, <b>dentro/fuori</b>, <b>vicino/lontano</b>, <b>destra/sinistra</b>.</li>
<li>Sul foglio si scrive da <b>sinistra</b> a <b>destra</b> e dall'<b>alto</b> in <b>basso</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le posizioni 🌈",
      intro: "<p>Destra e sinistra ti confondono? Prova un altro modo!</p>",
      tabs: [
        {
          label: "🖐️ La L magica",
          html: `<p>Metti le mani davanti a te, con il <b>dorso verso di te</b> (le unghie le vedi). Alza pollice e indice.</p>
<p>La mano che forma una <b>L</b> che si legge bene è la <b>sinistra</b>! L'altra forma una L allo specchio.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<rect x="120" y="40" width="40" height="140" rx="18" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<rect x="120" y="150" width="110" height="36" rx="18" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<rect x="440" y="40" width="40" height="140" rx="18" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<rect x="370" y="150" width="110" height="36" rx="18" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<text x="175" y="225" font-size="22" text-anchor="middle" font-weight="bold" fill="#15803d">L = SINISTRA ✔</text>
<text x="425" y="225" font-size="22" text-anchor="middle" font-weight="bold" fill="#b91c1c">destra (L al contrario)</text>
</svg>`
        },
        {
          label: "🧭 Come i Guugu Yimithirr",
          html: `<p>Invece di destra e sinistra, prova a usare i <b>punti cardinali</b>, come fanno in Australia: il <b>sole</b> sorge a <b>est</b> e tramonta a <b>ovest</b>.</p>
<p>Al mattino, guarda da che parte entra il sole dalla finestra della classe: quella è più o meno l'<b>est</b>. Il bello? Est resta est anche se ti giri! Destra e sinistra invece cambiano.</p>`
        },
        {
          label: "🧊 Gira il cubo 3D",
          html: `<p>Gira il cubo con il dito. La faccia che prima era <b>davanti</b> ora è <b>dietro</b>, quella che era a <b>destra</b> ora è a <b>sinistra</b>! Le posizioni cambiano a seconda di <b>come guardi</b>.</p>`,
          scene: "solid",
          options: { shape: "cube", color: "#a78bfa", labels: true }
        },
        {
          label: "🔢 Sulla retta dei numeri",
          html: `<p>Anche i numeri hanno una posizione! Sulla retta, i numeri <b>più piccoli</b> stanno a <b>sinistra</b> e quelli <b>più grandi</b> a <b>destra</b>. Il 3 sta a sinistra del 7; il 12 sta a destra del 5.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [3, 12] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa dello spazio 🗺️",
      nodes: [
        { id: "io", label: "Il punto di riferimento", x: 50, y: 8, color: "#f59e0b", html: "<p>Per dire dove sta una cosa, scegliamo <b>da dove guardiamo</b>: io, il tavolo, il foglio…</p>", why: "<p>Senza un riferimento, «a destra» non vuol dire niente! È come dire «vicino»: vicino a cosa?</p>" },
        { id: "verticale", label: "Sopra / sotto", x: 15, y: 32, color: "#3b82f6", html: "<p>Alto e basso: lampada sopra, tappeto sotto.</p>", why: "<p>Sulla Terra il «sotto» è dove cadono le cose: la <b>gravità</b> tira tutto verso il basso. Per questo nello spazio non c'è un vero sopra e sotto.</p>" },
        { id: "fronte", label: "Davanti / dietro", x: 38, y: 32, color: "#8b5cf6", html: "<p>Davanti è dove guardano i miei occhi, dietro è la mia schiena.</p>", why: "<p>Dipende da dove sono rivolto: se mi giro, quello che era dietro va davanti.</p>" },
        { id: "lati", label: "Destra / sinistra", x: 62, y: 32, color: "#ef4444", html: "<p>I due lati del corpo.</p>", why: "<p>Sono le più difficili perché il nostro corpo, fuori, è quasi uguale dai due lati. Molte lingue antiche le legavano alla mano: «destra» viene dal latino <i>dextera</i>, la mano «abile».</p>" },
        { id: "dentro", label: "Dentro / fuori", x: 85, y: 32, color: "#22c55e", html: "<p>Una linea chiusa o una scatola hanno un dentro e un fuori.</p>", why: "<p>Il bordo separa le due parti: per passare da dentro a fuori devi attraversarlo.</p>" },
        { id: "foglio", label: "Lo spazio del foglio", x: 25, y: 62, color: "#0ea5e9", html: "<p>Alto, basso, destra, sinistra, centro, angoli.</p>", why: "<p>In italiano si scrive da sinistra a destra, come in latino e in greco. In arabo e in ebraico invece si scrive da destra a sinistra!</p>" },
        { id: "percorso", label: "Percorsi e frecce", x: 55, y: 62, color: "#ec4899", html: "<p>Una serie di passi: ➡️ ➡️ ⬆️.</p>", why: "<p>È così che si danno le istruzioni ai robot e ai computer: il <b>coding</b>. Anche i navigatori delle auto ci dicono «gira a destra»!</p>" },
        { id: "reticolo", label: "Il reticolo", x: 40, y: 88, color: "#14b8a6", html: "<p>Una griglia di righe e colonne: ogni casella ha un indirizzo, come «B3» nella battaglia navale.</p>", why: "<p>L'idea di dare un «indirizzo» a ogni punto con due numeri è del filosofo francese <b>René Descartes</b> (Cartesio), nel 1637. Oggi la usano mappe, schermi e videogiochi.</p>" },
        { id: "cardinali", label: "Punti cardinali", x: 82, y: 70, color: "#a16207", html: "<p>Nord, Sud, Est, Ovest.</p>", why: "<p>Sono legati al Sole, che sorge a est e tramonta a ovest. Non cambiano se ti giri: per questo li usano i marinai e le mappe.</p>" }
      ],
      edges: [
        ["io", "verticale", ""],
        ["io", "fronte", ""],
        ["io", "lati", ""],
        ["io", "dentro", ""],
        ["verticale", "foglio", "alto/basso"],
        ["lati", "foglio", "destra/sinistra"],
        ["lati", "percorso", "gira!"],
        ["percorso", "reticolo", "passo per casella"],
        ["lati", "cardinali", "non cambiano se ti giri"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: il foglio e il percorso",
      questions: [
        { type: "mc", q: "Da che parte del foglio cominci a scrivere?", options: ["Da destra", "Da sinistra", "Dal basso"], answer: 1, explain: "In italiano si scrive da sinistra verso destra." },
        { type: "num", q: "Il robot fa ➡️ ➡️ ➡️. Quanti passi a destra fa?", answer: 3, explain: "Ogni freccia è un passo: 3 frecce = 3 passi." },
        { type: "mc", q: "Dove si scrive la data sul quaderno?", options: ["In alto", "In basso", "Sotto il banco"], answer: 0, explain: "La data si scrive in alto, all'inizio della pagina." }
      ]
    }
  ],
  glossary: [
    { t: "Posizione", d: "Il posto dove si trova una cosa." },
    { t: "Punto di riferimento", d: "La cosa o la persona rispetto a cui diciamo la posizione." },
    { t: "Contrari", d: "Parole di significato opposto, come sopra e sotto." },
    { t: "Destra", d: "Il lato del corpo con cui di solito si scrive (per chi non è mancino)." },
    { t: "Sinistra", d: "Il lato opposto alla destra; il lato del cuore." },
    { t: "Percorso", d: "La strada da seguire, passo dopo passo." },
    { t: "Reticolo", d: "Una griglia di caselle, con righe e colonne." },
    { t: "Mancino", d: "Chi usa di più la mano sinistra." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il contrario di «sopra» è…", options: ["dentro", "sotto", "davanti"], answer: 1, explain: "Sopra e sotto sono contrari." },
      { type: "mc", q: "Le matite sono nell'astuccio chiuso. Sono…", options: ["dentro", "fuori", "lontane"], answer: 0, explain: "Sono dentro l'astuccio." },
      { type: "mc", q: "Il contrario di «vicino» è…", options: ["dietro", "lontano", "sopra"], answer: 1, explain: "Vicino e lontano sono contrari." },
      { type: "tf", q: "Destra e sinistra dipendono da come sei girato.", answer: true, explain: "Sì: se ti giri, si scambiano." },
      { type: "tf", q: "Sul foglio si scrive dal basso verso l'alto.", answer: false, explain: "Si scrive dall'alto verso il basso, riga dopo riga." },
      { type: "text", q: "Come si chiama la parte in mezzo al foglio?", answer: ["centro", "il centro", "al centro"], explain: "È il centro." },
      { type: "num", q: "Il robot fa ⬆️ ⬆️ ➡️ ⬆️. Quanti passi in su fa in tutto?", answer: 3, explain: "Ci sono 3 frecce in su (⬆️) e 1 a destra." },
      { type: "mc", q: "Sono seduto al banco e guardo la lavagna. La lavagna è…", options: ["dietro di me", "davanti a me", "sotto di me"], answer: 1, explain: "Quello che guardi è davanti a te." },
      { type: "order", q: "Metti in ordine le parti del corpo dall'alto in basso.", items: ["Testa", "Spalle", "Pancia", "Ginocchia", "Piedi"], explain: "Dall'alto: testa, spalle, pancia, ginocchia, piedi." },
      { type: "mc", q: "Sulla retta dei numeri, il 2 sta… del 9.", options: ["a destra", "a sinistra", "sopra"], answer: 1, explain: "I numeri più piccoli stanno a sinistra." },
      { type: "tf", q: "Gli astronauti nello spazio possono dormire attaccati al soffitto.", answer: true, explain: "Nello spazio si galleggia e non c'è un vero sopra e sotto." }
    ]
  }
});
