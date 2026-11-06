TOPIC('it', {
  id: "p1-ing-school",
  title: "At school",
  intro: "Apri lo zaino! 🎒 Dentro ci sono tanti oggetti: la matita, il libro, la gomma… Oggi impariamo i loro nomi in <b>inglese</b> e alcune frasi che la teacher usa in classe, come <b>«Sit down, please!»</b> 🪑",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Gli oggetti della scuola",
      html: `<table>
<tr><th></th><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>
<tr><td>✏️</td><td><b>pencil</b></td><td>pènsil</td><td>matita</td></tr>
<tr><td>🖊️</td><td><b>pen</b></td><td>pen</td><td>penna</td></tr>
<tr><td>🧽</td><td><b>rubber</b> (eraser)</td><td>ràbber (irèiser)</td><td>gomma</td></tr>
<tr><td>📏</td><td><b>ruler</b></td><td>rùler</td><td>righello</td></tr>
<tr><td>✂️</td><td><b>scissors</b></td><td>sìsors</td><td>forbici</td></tr>
<tr><td>🧴</td><td><b>glue</b></td><td>glu</td><td>colla</td></tr>
<tr><td>🖍️</td><td><b>crayons</b></td><td>crèions</td><td>pastelli a cera</td></tr>
<tr><td>📕</td><td><b>book</b></td><td>buk</td><td>libro</td></tr>
<tr><td>📓</td><td><b>notebook</b></td><td>nòut-buk</td><td>quaderno</td></tr>
<tr><td>👝</td><td><b>pencil case</b></td><td>pènsil kéis</td><td>astuccio</td></tr>
<tr><td>🎒</td><td><b>schoolbag</b></td><td>skùul-bag</td><td>zaino, cartella</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Nell'aula: the classroom",
      html: `<ul>
<li>🪑 <b>chair</b> (cèr) = sedia</li>
<li>🟫 <b>desk</b> (desk) = banco</li>
<li>⬛ <b>board</b> (bòord) = lavagna</li>
<li>🚪 <b>door</b> (dòor) = porta · 🪟 <b>window</b> (uìndou) = finestra</li>
<li>👩‍🏫 <b>teacher</b> (tìicer) = maestra, maestro</li>
<li>🧒 <b>pupil</b> (piùpil) = alunno, alunna</li>
</ul>
<p>❓ <b>What's this?</b> (uòts dis) = Che cos'è questo?<br>💬 <b>It's a pencil.</b> = È una matita.</p>`
    },
    {
      type: "widget",
      title: "Gioco: dai il nome agli oggetti sul banco",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#e0f2fe"/>
<rect x="30" y="60" width="540" height="230" rx="14" fill="#d97706" stroke="#78350f" stroke-width="5"/>
<rect x="70" y="90" width="120" height="160" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>
<rect x="78" y="90" width="10" height="160" fill="#991b1b"/>
<text x="135" y="175" font-size="20" fill="#ffffff" text-anchor="middle" font-weight="bold">ABC</text>
<rect x="230" y="110" width="170" height="16" fill="#facc15" stroke="#713f12" stroke-width="2"/>
<path d="M400 110 L430 118 L400 126 Z" fill="#fcd9b6" stroke="#713f12" stroke-width="2"/>
<rect x="210" y="110" width="20" height="16" fill="#f472b6"/>
<rect x="230" y="200" width="200" height="30" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<path d="M250 200 V215 M270 200 V210 M290 200 V215 M310 200 V210 M330 200 V215 M350 200 V210 M370 200 V215 M390 200 V210 M410 200 V215" stroke="#0369a1" stroke-width="2"/>
<rect x="460" y="150" width="60" height="36" rx="6" fill="#f9a8d4" stroke="#9d174d" stroke-width="2"/>
<circle cx="480" cy="250" r="18" fill="none" stroke="#475569" stroke-width="5"/>
<circle cx="520" cy="250" r="18" fill="none" stroke="#475569" stroke-width="5"/>
<path d="M490 236 L540 160 M510 236 L460 160" stroke="#475569" stroke-width="5"/>
</svg>`,
        spots: [
          { x: 135, y: 170, label: "book" },
          { x: 320, y: 118, label: "pencil" },
          { x: 330, y: 215, label: "ruler" },
          { x: 490, y: 168, label: "rubber" },
          { x: 500, y: 215, label: "scissors" }
        ]
      },
      caption: "Tocca ogni oggetto sul banco (desk) e scegli il suo nome in inglese."
    },
    {
      type: "quiz",
      title: "Mini-quiz: nello zaino",
      questions: [
        { type: "mc", q: "✏️ In inglese si dice…", options: ["pen", "pencil", "book"], answer: 1, explain: "Matita = pencil. Pen è la penna!" },
        { type: "mc", q: "«Ruler» vuol dire…", options: ["righello", "gomma", "colla"], answer: 0, explain: "Ruler = righello 📏." },
        { type: "text", q: "Scrivi in inglese: libro", answer: ["book", "a book"], explain: "Libro = book 📕." }
      ]
    },
    {
      type: "remember",
      title: "Le frasi della teacher 👩‍🏫",
      html: `<p>In classe la teacher dice spesso:</p>
<ul>
<li>🧍 <b>Stand up!</b> = Alzatevi!</li>
<li>🪑 <b>Sit down!</b> = Sedetevi!</li>
<li>📖 <b>Open your book!</b> = Aprite il libro! · 📕 <b>Close your book!</b> = Chiudete il libro!</li>
<li>👂 <b>Listen!</b> = Ascoltate! · 👀 <b>Look!</b> = Guardate!</li>
<li>🤫 <b>Be quiet, please!</b> = Fate silenzio, per favore!</li>
<li>✋ <b>Raise your hand!</b> = Alzate la mano!</li>
</ul>
<p>E tu, se non hai la matita: <b>Can I have a pencil, please?</b> = Posso avere una matita, per favore?</p>`
    },
    {
      type: "widget",
      title: "Flashcards: comandi in classe",
      widget: "flashcards",
      options: { cards: [
        { front: "🧍 Stand up!", back: "Alzatevi!" },
        { front: "🪑 Sit down!", back: "Sedetevi!" },
        { front: "📖 Open your book!", back: "Aprite il libro!" },
        { front: "📕 Close your book!", back: "Chiudete il libro!" },
        { front: "👂 Listen!", back: "Ascoltate!" },
        { front: "👀 Look!", back: "Guardate!" },
        { front: "✋ Raise your hand!", back: "Alzate la mano!" }
      ] },
      caption: "Leggi il comando e fai il gesto! Poi gira la carta."
    },
    {
      type: "example",
      title: "Esempio: «What's this?» 🔍",
      html: `<p>La teacher prende un oggetto dallo zaino di Marco:</p>
<p><b>Teacher:</b> What's this? 🤔<br>
<b>Marco:</b> It's a <b>ruler</b>! 📏<br>
<b>Teacher:</b> Very good! And this?<br>
<b>Marco:</b> It's a <b>pencil case</b>! 👝<br>
<b>Teacher:</b> What colour is it?<br>
<b>Marco:</b> It's blue! 🔵<br>
<b>Teacher:</b> Well done, Marco! 👏</p>`
    },
    {
      type: "example",
      title: "Esempio: in prestito dal compagno 🤝",
      html: `<p><b>Sara:</b> Can I have a <b>rubber</b>, please?<br>
<b>Tom:</b> Yes, here you are! 🧽<br>
<b>Sara:</b> Thank you!<br>
<b>Tom:</b> You're welcome! 😊</p>
<p>👉 <b>Here you are</b> = Ecco a te · <b>You're welcome</b> = Prego.</p>`
    },
    {
      type: "widget",
      title: "Gioco: nell'astuccio o no?",
      widget: "classify",
      options: {
        groups: ["👝 In the pencil case (nell'astuccio)", "🏫 In the classroom (nell'aula)"],
        items: [["✏️ pencil", 0], ["🖊️ pen", 0], ["🧽 rubber", 0], ["🖍️ crayons", 0], ["🪑 chair", 1], ["⬛ board", 1], ["🚪 door", 1], ["🪟 window", 1]]
      },
      caption: "Quali oggetti stanno nell'astuccio e quali sono grandi e stanno nell'aula?"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la gomma ha due nomi? 🇬🇧🇺🇸",
      html: `<p>In <b>Inghilterra</b> la gomma per cancellare si chiama <b>rubber</b>, negli <b>Stati Uniti</b> si chiama <b>eraser</b> (da «erase», cancellare). Il nome «rubber» viene da «rub», cioè <b>strofinare</b>: lo scienziato inglese Joseph Priestley, nel 1770, scoprì che la gomma naturale strofinata cancellava la matita! ✏️</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… in Inghilterra si va a scuola in divisa? 👔",
      html: `<p>In quasi tutte le scuole inglesi i bambini indossano la <b>school uniform</b>: maglione con lo stemma della scuola, camicia, pantaloni o gonna dello stesso colore. E cominciano la scuola prima di noi: a <b>4 o 5 anni</b>, nella classe chiamata <b>Reception</b>! 🏫</p>`
    },
    {
      type: "3d",
      title: "La matita in 3D ✏️",
      scene: "solid",
      options: { shapes: ["prism", "cylinder", "box"], shape: "prism", n: 6, r: 0.4, h: 4, color: "#facc15", labels: true },
      caption: "Gira la matita: è un prisma con 6 facce (hexagonal). Prova gli altri solidi: il cilindro è come un pastello (crayon), la scatola è come una gomma (rubber)."
    },
    {
      type: "alternatives",
      title: "Altri modi per imparare le parole della scuola",
      intro: "<p>Non tutti imparano allo stesso modo. Ecco altre strade!</p>",
      tabs: [
        {
          label: "🤸 Muoviti (TPR)",
          html: `<p>Gli insegnanti di tutto il mondo usano il metodo <b>TPR</b> (Total Physical Response), inventato dal professor James Asher negli Stati Uniti: impari le parole <b>facendo i gesti</b>.</p>
<p>Chiedi a qualcuno di darti i comandi e tu esegui: <b>Stand up!</b> 🧍 <b>Sit down!</b> 🪑 <b>Touch your pencil!</b> ✏️ <b>Show me a book!</b> 📕</p>
<p>Il corpo ricorda le parole insieme al movimento!</p>`
        },
        {
          label: "🏷️ Etichette in casa",
          html: `<p>Scrivi tanti bigliettini e attaccali agli oggetti veri:</p>
<p>🏷️ <b>DOOR</b> sulla porta · 🏷️ <b>WINDOW</b> sulla finestra · 🏷️ <b>CHAIR</b> sulla sedia · 🏷️ <b>DESK</b> sulla scrivania</p>
<p>Ogni volta che li vedi, leggili ad alta voce. Dopo una settimana li saprai tutti!</p>`
        },
        {
          label: "🔗 Parole gemelle",
          html: `<p>Alcune parole inglesi somigliano all'italiano, perché vengono dal <b>latino</b>:</p>
<ul>
<li>✏️ <b>pencil</b> ← latino <i>penicillus</i> (pennellino) → italiano «pennello»</li>
<li>🖊️ <b>pen</b> ← latino <i>penna</i> (piuma: una volta si scriveva con le piume d'oca!)</li>
<li>🧒 <b>pupil</b> ← latino <i>pupillus</i> (bambino) → italiano «pupillo»</li>
<li>🏫 <b>school</b> ← latino <i>schola</i> → italiano «scuola»</li>
</ul>`
        },
        {
          label: "🎯 Abbina",
          html: `<p>Tocca la parola inglese e poi la traduzione.</p>`,
          widget: "match",
          options: { pairs: [["pencil", "matita"], ["pen", "penna"], ["rubber", "gomma"], ["scissors", "forbici"], ["glue", "colla"], ["notebook", "quaderno"], ["schoolbag", "zaino"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa di At school",
      nodes: [
        { id: "school", label: "School", x: 50, y: 8, color: "#8b5cf6", html: "<p>La scuola e le sue parole.</p>", why: "<p>«School» viene dal latino <i>schola</i> e dal greco <i>scholé</i>, che voleva dire «tempo libero»: per i Greci studiare era ciò che si faceva nel tempo libero dal lavoro!</p>" },
        { id: "objects", label: "School objects", x: 20, y: 32, color: "#f59e0b", html: "<p>Pencil, pen, rubber, ruler, book…</p>", why: "<p>Molti nomi raccontano come erano fatti: <b>pen</b> viene da «penna» di uccello, perché per secoli si è scritto con le piume d'oca.</p>" },
        { id: "class", label: "Classroom", x: 80, y: 32, color: "#3b82f6", html: "<p>Desk, chair, board, door, window.</p>", why: "<p>«Classroom» = class + room (stanza). In inglese spesso si uniscono due parole per farne una nuova.</p>" },
        { id: "case", label: "Pencil case", x: 10, y: 62, color: "#ec4899", html: "<p>L'astuccio e i suoi oggetti.</p>", why: "<p>Anche qui due parole: pencil (matita) + case (custodia) = custodia per matite.</p>" },
        { id: "this", label: "What's this? It's a…", x: 38, y: 62, color: "#22c55e", html: "<p>Che cos'è? È un/una…</p>", why: "<p>«A» si usa davanti alle parole che iniziano con consonante (a pen), «an» davanti a vocale (an eraser).</p>" },
        { id: "orders", label: "Stand up! Sit down!", x: 68, y: 62, color: "#ef4444", html: "<p>I comandi della teacher.</p>", why: "<p>Sono frasi all'imperativo: in inglese il comando si fa con il verbo da solo, senza «tu» o «voi».</p>" },
        { id: "polite", label: "Can I have…, please?", x: 90, y: 62, color: "#14b8a6", html: "<p>Chiedere con gentilezza.</p>", why: "<p>«Please» e «thank you» sono importantissimi in inglese: una richiesta senza «please» sembra un ordine.</p>" },
        { id: "uk", label: "Scuola inglese", x: 50, y: 90, color: "#a855f7", html: "<p>Divisa, Reception, rubber/eraser.</p>", why: "<p>Ogni Paese ha la sua scuola: in Inghilterra si comincia a 4–5 anni e si porta la school uniform. Negli Stati Uniti alcune parole cambiano (eraser invece di rubber).</p>" }
      ],
      edges: [
        ["school", "objects", ""], ["school", "class", ""], ["objects", "case", "stanno in"], ["objects", "this", "si chiede"], ["class", "orders", "si sente"], ["case", "polite", "per prendere in prestito"], ["orders", "uk", ""], ["this", "uk", ""]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: in classe",
      questions: [
        { type: "mc", q: "La teacher dice «Sit down!». Cosa fai?", options: ["Mi alzo", "Mi siedo", "Apro il libro"], answer: 1, explain: "Sit down = sedetevi 🪑." },
        { type: "mc", q: "«What's this?» vuol dire…", options: ["Che cos'è questo?", "Come ti chiami?", "Di che colore è?"], answer: 0, explain: "What's this? = Che cos'è questo?" },
        { type: "tf", q: "«Board» vuol dire lavagna.", answer: true, explain: "Board = lavagna ⬛." }
      ]
    }
  ],
  glossary: [
    { t: "Pencil / pen", d: "Matita / penna." },
    { t: "Rubber (eraser)", d: "Gomma per cancellare." },
    { t: "Ruler", d: "Righello." },
    { t: "Scissors / glue", d: "Forbici / colla." },
    { t: "Book / notebook", d: "Libro / quaderno." },
    { t: "Pencil case / schoolbag", d: "Astuccio / zaino." },
    { t: "Desk / chair / board", d: "Banco / sedia / lavagna." },
    { t: "Teacher / pupil", d: "Maestra o maestro / alunno." },
    { t: "What's this?", d: "Che cos'è questo?" },
    { t: "Stand up / Sit down", d: "Alzati / Siediti." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🖊️ In inglese si dice…", options: ["pen", "pencil", "pupil"], answer: 0, explain: "Penna = pen." },
      { type: "text", q: "Scrivi in inglese: forbici", answer: ["scissors"], explain: "Forbici = scissors ✂️." },
      { type: "mc", q: "«Rubber» vuol dire…", options: ["righello", "gomma", "zaino"], answer: 1, explain: "Rubber = gomma (in America: eraser)." },
      { type: "mc", q: "«Open your book!» significa…", options: ["Chiudete il libro!", "Aprite il libro!", "Guardate la lavagna!"], answer: 1, explain: "Open = aprire." },
      { type: "tf", q: "«Chair» vuol dire sedia.", answer: true, explain: "Chair = sedia 🪑." },
      { type: "mc", q: "Come chiedi una matita in prestito?", options: ["Can I have a pencil, please?", "What's your name?", "Sit down, please!"], answer: 0, explain: "Can I have…, please? = Posso avere…, per favore?" },
      { type: "text", q: "Scrivi in inglese: astuccio", answer: ["pencil case", "pencilcase", "a pencil case"], explain: "Astuccio = pencil case." },
      { type: "mc", q: "«What's this?» – «It's a …» 📏", options: ["ruler", "glue", "door"], answer: 0, explain: "Il righello è ruler." },
      { type: "tf", q: "«Stand up!» vuol dire «Sedetevi!».", answer: false, explain: "Stand up = alzatevi. Sedetevi = sit down." },
      { type: "order", q: "Metti in ordine il dialogo:", items: ["Can I have a rubber, please?", "Yes, here you are!", "Thank you!", "You're welcome!"], explain: "Chiedo, mi danno l'oggetto, ringrazio, l'amico risponde «prego»." },
      { type: "mc", q: "Negli Stati Uniti la gomma si chiama…", options: ["eraser", "rubber", "ruler"], answer: 0, explain: "In America: eraser." }
    ]
  }
});
