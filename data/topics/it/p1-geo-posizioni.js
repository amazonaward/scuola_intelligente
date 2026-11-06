TOPIC('it', {
  id: "p1-geo-posizioni",
  title: "Le posizioni nello spazio",
  intro: "Dov'è il gatto? 🐱 <b>Sopra</b> il letto? <b>Sotto</b> il tavolo? <b>Dentro</b> la scatola? Oggi impariamo le parole per dire <b>dove si trovano</b> le cose e le persone. Sono le parole dei veri esploratori! 🧭",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Le parole del «dove»",
      html: `<p>Per dire dove si trova una cosa usiamo parole speciali. Sono a <b>coppie</b>, come due amici che fanno il contrario:</p>
<table>
<tr><th>Parola</th><th>Il suo contrario</th><th>Esempio</th></tr>
<tr><td>⬆️ <b>sopra</b></td><td>⬇️ <b>sotto</b></td><td>Il libro è sopra il banco. La cartella è sotto il banco.</td></tr>
<tr><td>👀 <b>davanti</b></td><td>🔙 <b>dietro</b></td><td>La maestra è davanti alla lavagna. Il cestino è dietro la porta.</td></tr>
<tr><td>🤏 <b>vicino</b></td><td>🔭 <b>lontano</b></td><td>La matita è vicino all'astuccio. Il sole è lontano.</td></tr>
<tr><td>📦 <b>dentro</b></td><td>🚪 <b>fuori</b></td><td>Il gatto è dentro la scatola. Il cane è fuori casa.</td></tr>
<tr><td>👈 <b>a sinistra</b></td><td>👉 <b>a destra</b></td><td>La finestra è a sinistra. La porta è a destra.</td></tr>
</table>
<p>C'è anche <b>in mezzo</b> (o <b>tra</b>): sta tra due cose, proprio nel centro. 🥪</p>`
    },
    {
      type: "svg",
      title: "Guarda la scena: dove sono?",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#e0f2fe"/>
<rect x="0" y="250" width="600" height="70" fill="#86efac"/>
<circle cx="540" cy="50" r="30" fill="#facc15"/>
<rect x="60" y="150" width="200" height="16" fill="#92400e"/>
<rect x="70" y="166" width="14" height="84" fill="#92400e"/>
<rect x="236" y="166" width="14" height="84" fill="#92400e"/>
<circle cx="160" cy="132" r="18" fill="#ef4444"/>
<text x="160" y="105" font-size="16" text-anchor="middle" fill="#b91c1c" font-weight="bold">SOPRA</text>
<text x="160" y="248" font-size="44" text-anchor="middle">🐱</text>
<text x="160" y="290" font-size="16" text-anchor="middle" fill="#9a3412" font-weight="bold">SOTTO</text>
<rect x="330" y="170" width="110" height="80" fill="#d97706" stroke="#78350f" stroke-width="3"/>
<text x="385" y="225" font-size="36" text-anchor="middle">🐭</text>
<text x="385" y="160" font-size="16" text-anchor="middle" fill="#78350f" font-weight="bold">DENTRO</text>
<circle cx="490" cy="232" r="18" fill="#3b82f6"/>
<text x="500" y="290" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">FUORI</text>
<text x="540" y="105" font-size="16" text-anchor="middle" fill="#a16207" font-weight="bold">LONTANO</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">🔴 palla · 🐱 gatto · 🐭 topo · 🔵 pallone · ☀️ sole</text>
</svg>`,
      caption: "La palla rossa è SOPRA il tavolo, il gatto è SOTTO il tavolo. Il topolino è DENTRO la scatola, il pallone blu è FUORI. Il sole è LONTANO."
    },
    {
      type: "quiz",
      title: "Mini-quiz: dove si trova?",
      questions: [
        { type: "mc", q: "Nella scena, il gatto 🐱 è…", options: ["sopra il tavolo", "sotto il tavolo", "dentro la scatola"], answer: 1, explain: "Il gatto è sotto il tavolo: il tavolo è più in alto di lui." },
        { type: "mc", q: "Il contrario di «dentro» è…", options: ["sopra", "fuori", "vicino"], answer: 1, explain: "Dentro ↔ fuori: sono due amici che fanno il contrario." },
        { type: "tf", q: "Il sole è vicino a noi.", answer: false, explain: "Il sole è lontanissimo: circa 150 milioni di chilometri!" }
      ]
    },
    {
      type: "remember",
      title: "Il punto di riferimento 📍",
      html: `<p>Per dire dove sta una cosa ci serve sempre un'<b>altra cosa</b> da guardare: il <b>punto di riferimento</b>.</p>
<p>«La palla è sopra…» ❓ Sopra cosa? «La palla è sopra <b>il tavolo</b>» ✅</p>
<p>⚠️ Attenzione: <b>destra</b> e <b>sinistra</b>, <b>davanti</b> e <b>dietro</b> cambiano se ti giri! Se sei di fronte a un amico, la tua destra è dalla parte della sua sinistra.</p>`
    },
    {
      type: "widget",
      title: "Gioco: metti l'etichetta giusta",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#fef9c3"/>
<rect x="0" y="260" width="600" height="60" fill="#d6d3d1"/>
<rect x="230" y="60" width="140" height="200" fill="#a16207" stroke="#713f12" stroke-width="4"/>
<circle cx="350" cy="165" r="8" fill="#facc15"/>
<rect x="250" y="80" width="100" height="70" fill="#bae6fd"/>
<circle cx="300" cy="40" r="16" fill="#22c55e"/>
<rect x="120" y="190" width="60" height="70" fill="#ec4899"/>
<circle cx="150" cy="175" r="18" fill="#fcd9b6"/>
<rect x="430" y="230" width="40" height="30" fill="#3b82f6"/>
<rect x="520" y="140" width="40" height="120" fill="#16a34a"/>
<circle cx="540" cy="120" r="30" fill="#22c55e"/>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Sopra la porta" },
          { x: 150, y: 210, label: "A sinistra della porta" },
          { x: 450, y: 245, label: "A destra della porta" },
          { x: 300, y: 115, label: "Dentro la porta (il vetro)" },
          { x: 540, y: 160, label: "Lontano dalla porta" }
        ]
      },
      caption: "Tocca un punto colorato e scegli la posizione giusta rispetto alla porta marrone."
    },
    {
      type: "example",
      title: "Esempio: in classe 🏫",
      html: `<p>Marta descrive la sua aula:</p>
<p>«Il mio banco è <b>vicino</b> alla finestra. <b>Davanti</b> a me c'è Luca, <b>dietro</b> di me c'è Sara. La lavagna è <b>lontana</b>, in fondo all'aula. Il mio astuccio è <b>sopra</b> il banco e la cartella è <b>sotto</b> la sedia. Le matite sono <b>dentro</b> l'astuccio.»</p>
<p>👉 Ora prova tu: descrivi dove si trova il tuo banco!</p>`
    },
    {
      type: "example",
      title: "Esempio: il gioco «Il re comanda» 👑",
      html: `<p>In cortile la maestra fa il re e dice:</p>
<ul>
<li>«Il re comanda: mettete le mani <b>sopra</b> la testa!» 🙌</li>
<li>«Il re comanda: andate <b>dentro</b> il cerchio!» ⭕</li>
<li>«Il re comanda: mettetevi <b>dietro</b> a un compagno!» 🧍🧍</li>
<li>«Saltate <b>fuori</b> dal cerchio!» ❌ Attenzione: il re non l'ha comandato, chi salta è eliminato!</li>
</ul>
<p>Muovendo il corpo, le parole del «dove» si imparano in fretta.</p>`
    },
    {
      type: "3d",
      title: "Gira il cubo: cosa sta davanti?",
      scene: "solid",
      options: { shape: "cube", color: "#f97316", labels: false },
      caption: "Ruota il cubo con il dito. La faccia che ti guarda è DAVANTI. Se lo giri, quella che prima era davanti va DIETRO o di lato. Davanti e dietro dipendono da dove guardi!"
    },
    {
      type: "widget",
      title: "Gioco: sopra o sotto?",
      widget: "classify",
      options: {
        groups: ["⬆️ Sta in alto, sopra di noi", "⬇️ Sta in basso, sotto di noi"],
        items: [["☁️ nuvola", 0], ["🌙 luna", 0], ["✈️ aereo", 0], ["🐦 uccello in volo", 0], ["🌱 radici", 1], ["🐛 lombrico nella terra", 1], ["🪨 pavimento", 1], ["🚇 metropolitana", 1]]
      },
      caption: "Quando sei in piedi in un prato, queste cose stanno sopra o sotto di te?"
    },
    {
      type: "3d",
      title: "Vicino o lontano dall'Italia? 🌍",
      scene: "globe",
      options: { points: [
        { lat: 42, lon: 12.5, label: "🇮🇹 Italia (noi)", color: "#22c55e" },
        { lat: 46.8, lon: 8.2, label: "🇨🇭 Svizzera: vicina", color: "#ef4444" },
        { lat: 46.6, lon: 2.4, label: "🇫🇷 Francia: vicina", color: "#3b82f6" },
        { lat: -25, lon: 134, label: "🇦🇺 Australia: lontana", color: "#f97316" },
        { lat: 36, lon: 138, label: "🇯🇵 Giappone: lontano", color: "#e11d48" }
      ] },
      caption: "Gira il globo. La Svizzera e la Francia sono VICINE all'Italia, toccano i suoi confini. L'Australia e il Giappone sono LONTANI: sono dall'altra parte del mondo!"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… c'è chi non dice «destra» e «sinistra»? 🧭",
      html: `<p>In Australia vive un popolo che parla la lingua <b>guugu yimithirr</b>. Loro non dicono «a destra» o «a sinistra»: dicono sempre <b>nord, sud, est, ovest</b>! Per esempio: «C'è una formica sul tuo piede a <b>est</b>». Così sanno sempre da che parte è il nord, anche al buio. 🌏</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… nello spazio non c'è sopra e sotto? 🚀",
      html: `<p>Sulla Terra «sotto» è dove cadono le cose, perché la Terra ci tira verso di sé. Gli astronauti nella Stazione Spaziale galleggiano: per loro <b>non c'è un vero sopra e sotto</b>! Dormono attaccati alla parete in un sacco a pelo e decidono loro dove è il «pavimento». 👩‍🚀</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "<p>Se le parole si confondono, prova questi trucchi!</p>",
      tabs: [
        {
          label: "🤸 Con il corpo",
          html: `<p>Prendi un peluche e una scatola. Metti il peluche:</p>
<ul><li><b>dentro</b> la scatola 📦</li><li><b>sopra</b> la scatola ⬆️</li><li><b>sotto</b> il tavolo ⬇️</li><li><b>dietro</b> la tua schiena 🔙</li><li><b>davanti</b> al tuo naso 👃</li></ul>
<p>Ogni volta di' la frase ad alta voce: «L'orsetto è <b>dentro</b> la scatola!»</p>`
        },
        {
          label: "✋ Il trucco della mano",
          html: `<p>Non ricordi qual è la destra? Ecco due trucchi usati in tanti Paesi:</p>
<ul><li>🇮🇹 Metti un <b>braccialetto</b> o un elastico colorato sul polso <b>destro</b>.</li>
<li>🇬🇧 In Inghilterra: alza le mani davanti a te, dorso verso di te. Il pollice e l'indice della mano sinistra fanno una <b>L</b>, come <b>Left</b> (sinistra in inglese)!</li></ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#fdf4ff"/>
<rect x="110" y="60" width="26" height="120" rx="12" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>
<rect x="110" y="154" width="110" height="26" rx="12" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>
<text x="160" y="40" font-size="28" text-anchor="middle" fill="#7e22ce" font-weight="bold">L = Left</text>
<text x="160" y="220" font-size="20" text-anchor="middle" fill="#7e22ce">SINISTRA 👈</text>
<rect x="440" y="80" width="80" height="100" rx="20" fill="#fcd9b6" stroke="#c2410c" stroke-width="3"/>
<rect x="430" y="175" width="100" height="16" rx="8" fill="#ef4444"/>
<text x="480" y="40" font-size="24" text-anchor="middle" fill="#b91c1c" font-weight="bold">braccialetto</text>
<text x="480" y="220" font-size="20" text-anchor="middle" fill="#b91c1c">DESTRA 👉</text>
</svg>`
        },
        {
          label: "🔤 In inglese",
          html: `<p>Le stesse parole in inglese, così le impari due volte:</p>
<ul><li>📦 <b>in</b> = dentro · 🚪 <b>out</b> = fuori</li><li>⬆️ <b>on</b> = sopra · ⬇️ <b>under</b> = sotto</li><li>👀 <b>in front of</b> = davanti · 🔙 <b>behind</b> = dietro</li><li>🤏 <b>near</b> = vicino · 🔭 <b>far</b> = lontano</li></ul>
<p>«The cat is <b>under</b> the table» = Il gatto è sotto il tavolo. 🐱</p>`,
          widget: "match",
          options: { pairs: [["in", "dentro"], ["out", "fuori"], ["on", "sopra"], ["under", "sotto"], ["behind", "dietro"], ["near", "vicino"]] }
        },
        {
          label: "🧊 Nel 3D",
          html: `<p>Gira la scatola: la faccia che vedi è <b>davanti</b>, quella nascosta è <b>dietro</b>, quella in alto è <b>sopra</b>. Se la giri, le facce cambiano nome! Il nome dipende <b>da dove guardi tu</b>.</p>`,
          scene: "solid",
          options: { shape: "box", w: 2, h: 1, d: 1.4, color: "#22c55e", labels: false }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: dove si trova?",
      nodes: [
        { id: "dove", label: "Dove si trova?", x: 50, y: 8, color: "#0ea5e9", html: "<p>Le parole della posizione dicono dove sta una cosa.</p>", why: "<p>Fin dai tempi antichi le persone hanno avuto bisogno di dire dove trovare il cibo, l'acqua, la strada di casa. Per questo tutte le lingue del mondo hanno parole per il «dove».</p>" },
        { id: "rif", label: "Punto di riferimento", x: 50, y: 32, color: "#a855f7", html: "<p>La cosa che guardiamo per dire dove sta un'altra cosa.</p>", why: "<p>Una posizione da sola non vuol dire niente: «sopra» ha senso solo se diciamo «sopra a cosa». Anche i navigatori e le mappe usano punti di riferimento.</p>" },
        { id: "sopra", label: "Sopra / sotto", x: 12, y: 60, color: "#ef4444", html: "<p>In alto o in basso rispetto a qualcosa.</p>", why: "<p>Sulla Terra «sotto» è dove cadono le cose: la forza di gravità tira tutto verso il centro della Terra. Lo ha spiegato lo scienziato <b>Isaac Newton</b>, più di 300 anni fa.</p>" },
        { id: "davanti", label: "Davanti / dietro", x: 35, y: 68, color: "#f97316", html: "<p>Davanti è dove guardano i nostri occhi.</p>", why: "<p>Il nostro corpo ha un «davanti» (la faccia) e un «dietro» (la schiena). Per questo davanti e dietro cambiano quando ci giriamo.</p>" },
        { id: "vicino", label: "Vicino / lontano", x: 62, y: 68, color: "#eab308", html: "<p>Poca o tanta strada tra due cose.</p>", why: "<p>Per sapere quanto è lontano, possiamo contare i passi o misurare con il metro. È l'inizio della <b>misura</b> delle distanze.</p>" },
        { id: "dentro", label: "Dentro / fuori", x: 88, y: 60, color: "#22c55e", html: "<p>All'interno o all'esterno di un confine.</p>", why: "<p>Per dire dentro e fuori serve un <b>confine</b>: le pareti di una scatola, il recinto, la linea di un cerchio. In geografia anche le regioni e gli Stati hanno confini.</p>" },
        { id: "destra", label: "Destra / sinistra", x: 30, y: 92, color: "#ec4899", html: "<p>I due lati del nostro corpo.</p>", why: "<p>Sono le posizioni più difficili, perché dipendono da come sei girato. Alcuni popoli, invece, usano i punti cardinali (nord, sud, est, ovest), che non cambiano mai.</p>" },
        { id: "mappa", label: "Mappe e percorsi", x: 72, y: 92, color: "#14b8a6", html: "<p>Con queste parole possiamo descrivere una strada e disegnare una mappa.</p>", why: "<p>Unendo tante posizioni («gira a destra, poi vai dritto, la scuola è vicino al parco») nasce un <b>percorso</b>: è il prossimo passo della geografia!</p>" }
      ],
      edges: [
        ["dove", "rif", "serve"], ["rif", "sopra", ""], ["rif", "davanti", ""], ["rif", "vicino", ""], ["rif", "dentro", ""],
        ["davanti", "destra", "girandosi cambiano"], ["vicino", "mappa", "si misura"], ["destra", "mappa", "per orientarsi"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: destra, sinistra, davanti, dietro",
      questions: [
        { type: "mc", q: "Il contrario di «davanti» è…", options: ["dietro", "sotto", "lontano"], answer: 0, explain: "Davanti ↔ dietro." },
        { type: "tf", q: "Se mi giro, quello che era davanti a me finisce dietro di me.", answer: true, explain: "Giusto: davanti e dietro dipendono da dove guardi." },
        { type: "mc", q: "«The cat is under the table» vuol dire: il gatto è…", options: ["sopra il tavolo", "sotto il tavolo", "dietro il tavolo"], answer: 1, explain: "Under = sotto." }
      ]
    }
  ],
  glossary: [
    { t: "Sopra / sotto", d: "Più in alto / più in basso di qualcosa." },
    { t: "Davanti / dietro", d: "Dalla parte della faccia / dalla parte della schiena." },
    { t: "Vicino / lontano", d: "A poca strada / a tanta strada da qualcosa." },
    { t: "Dentro / fuori", d: "All'interno / all'esterno di un confine." },
    { t: "Destra / sinistra", d: "I due lati del corpo; cambiano se ti giri." },
    { t: "In mezzo (tra)", d: "Nel centro, tra due cose." },
    { t: "Punto di riferimento", d: "La cosa che guardiamo per dire dove si trova un'altra cosa." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il contrario di «sopra» è…", options: ["sotto", "dentro", "vicino"], answer: 0, explain: "Sopra ↔ sotto." },
      { type: "mc", q: "Le matite sono nell'astuccio chiuso. Sono…", options: ["fuori dall'astuccio", "dentro l'astuccio", "sotto l'astuccio"], answer: 1, explain: "Stanno all'interno: dentro l'astuccio." },
      { type: "tf", q: "Il contrario di «vicino» è «lontano».", answer: true, explain: "Vicino = poca strada, lontano = tanta strada." },
      { type: "text", q: "Il cane è nel giardino e non in casa. Il cane è ___ casa.", answer: ["fuori", "fuori di", "fuori dalla"], explain: "Non è dentro, quindi è fuori casa." },
      { type: "mc", q: "Il lampadario è appeso al soffitto. Rispetto al tavolo è…", options: ["sotto", "sopra", "dentro"], answer: 1, explain: "È più in alto del tavolo: sopra." },
      { type: "tf", q: "Destra e sinistra restano uguali anche se mi giro.", answer: false, explain: "No: se ti giri, la destra va dall'altra parte. Per questo servono i punti di riferimento." },
      { type: "mc", q: "Nel panino, il prosciutto sta… 🥪", options: ["in mezzo tra le due fette", "sopra il piatto e basta", "lontano dal pane"], answer: 0, explain: "Il prosciutto sta in mezzo (tra) le due fette di pane." },
      { type: "mc", q: "Cos'è il punto di riferimento?", options: ["Un colore", "La cosa che guardo per dire dove sta un'altra cosa", "Un tipo di matita"], answer: 1, explain: "Es. «La palla è sopra il TAVOLO»: il tavolo è il punto di riferimento." },
      { type: "order", q: "Metti in ordine dal più VICINO al più LONTANO da te (sei a casa):", items: ["il tuo naso 👃", "la porta di casa 🚪", "la scuola 🏫", "la luna 🌙"], explain: "Il naso è attaccato a te, la luna è lontanissima (circa 384.000 km)." },
      { type: "mc", q: "In fila, Anna è davanti a Paolo. Allora Paolo è…", options: ["davanti ad Anna", "dietro ad Anna", "sopra ad Anna"], answer: 1, explain: "Se Anna è davanti a Paolo, Paolo è dietro ad Anna." },
      { type: "text", q: "Come si dice «sotto» in inglese?", answer: ["under"], explain: "Sotto = under." }
    ]
  }
});
