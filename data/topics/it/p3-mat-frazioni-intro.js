TOPIC('it', {
  id: "p3-mat-frazioni-intro",
  title: "Le frazioni: introduzione",
  intro: "Hai mai diviso una torta 🎂 con i tuoi amici? Allora conosci già le <b>frazioni</b>! Impariamo a <b>dividere l'intero in parti uguali</b>, a leggere e scrivere le frazioni e a trovare la frazione di un gruppo di oggetti.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "L'intero e le parti uguali",
      html: `<p>L'<b>intero</b> è una cosa tutta intera: una pizza 🍕, un foglio 📄, una tavoletta di cioccolato 🍫, un gruppo di 12 biglie…</p>
<p><b>Frazionare</b> vuol dire dividere l'intero in <b>parti uguali</b>.</p>
<ul>
<li>✅ Una pizza tagliata in 4 fette <b>tutte uguali</b>: ogni fetta è <b>un quarto</b>.</li>
<li>❌ Una pizza tagliata in 4 fette una grande e tre piccole: <b>non</b> sono quarti!</li>
</ul>
<p>Ogni parte uguale si chiama <b>unità frazionaria</b>. Se divido in 2 → <b>un mezzo</b> (1/2); in 3 → <b>un terzo</b> (1/3); in 4 → <b>un quarto</b> (1/4); in 5 → <b>un quinto</b> (1/5)…</p>`
    },
    {
      type: "svg",
      title: "Parti uguali o no?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="40" width="220" height="160" fill="#86efac" stroke="#166534" stroke-width="4"/>
<line x1="150" y1="40" x2="150" y2="200" stroke="#166534" stroke-width="4"/>
<line x1="40" y1="120" x2="260" y2="120" stroke="#166534" stroke-width="4"/>
<text x="150" y="240" font-size="24" fill="#166534" text-anchor="middle" font-weight="bold">✔ 4 parti uguali</text>
<text x="150" y="270" font-size="20" fill="#166534" text-anchor="middle">ogni parte = 1/4</text>
<rect x="340" y="40" width="220" height="160" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<line x1="490" y1="40" x2="490" y2="200" stroke="#991b1b" stroke-width="4"/>
<line x1="340" y1="90" x2="490" y2="90" stroke="#991b1b" stroke-width="4"/>
<line x1="490" y1="150" x2="560" y2="150" stroke="#991b1b" stroke-width="4"/>
<text x="450" y="240" font-size="24" fill="#991b1b" text-anchor="middle" font-weight="bold">✘ parti diverse</text>
<text x="450" y="270" font-size="20" fill="#991b1b" text-anchor="middle">non sono quarti!</text>
</svg>`,
      caption: "Tutti e due i fogli sono divisi in 4 pezzi, ma solo il primo è diviso in quarti."
    },
    {
      type: "text",
      title: "Come si scrive una frazione",
      html: `<p>Una frazione si scrive con <b>due numeri</b> e una <b>linea</b> in mezzo:</p>
<ul>
<li>sotto c'è il <b>denominatore</b> 👇: in quante parti uguali ho diviso l'intero;</li>
<li>sopra c'è il <b>numeratore</b> 👆: quante parti prendo (o coloro);</li>
<li>in mezzo la <b>linea di frazione</b>.</li>
</ul>
<p>Esempio: <b>2/5</b> → ho diviso l'intero in 5 parti uguali e ne prendo 2. Si legge <b>"due quinti"</b>.</p>
<p>Come si leggono: 1/2 un mezzo · 1/3 un terzo · 3/4 tre quarti · 2/5 due quinti · 5/6 cinque sesti · 3/8 tre ottavi · 7/10 sette decimi.</p>`
    },
    {
      type: "widget",
      title: "Costruisci la tua frazione",
      widget: "fractionPie",
      options: { n: 1, d: 4 },
      caption: "Muovi i cursori: il denominatore taglia la torta, il numeratore colora le fette."
    },
    {
      type: "quiz",
      title: "Mini-quiz: leggere le frazioni",
      questions: [
        { type: "mc", q: "Una torta è tagliata in 8 fette uguali e ne coloro 3. Che frazione è?", options: ["8/3", "3/8", "3/5"], answer: 1, explain: "8 fette in tutto (denominatore), 3 colorate (numeratore): 3/8." },
        { type: "mc", q: "Come si legge 1/3?", options: ["un terzo", "uno e tre", "tre unità"], answer: 0, explain: "Il denominatore 3 si legge \"terzi\": un terzo." },
        { type: "tf", q: "Se taglio una mela in 2 pezzi diversi, ognuno è 1/2.", answer: false, explain: "Per essere metà le parti devono essere uguali." }
      ]
    },
    {
      type: "text",
      title: "La parte che resta",
      html: `<p>Se divido una pizza in <b>6 fette</b> e ne mangio <b>4</b>, ho mangiato <b>4/6</b>.</p>
<p>Quanta ne resta? 6 − 4 = 2 fette, cioè <b>2/6</b>.</p>
<p>E se metto insieme tutte le fette? <b>6/6</b> = <b>1 pizza intera</b>! Quando numeratore e denominatore sono <b>uguali</b>, la frazione vale <b>un intero</b>.</p>`
    },
    {
      type: "text",
      title: "La frazione di un gruppo di oggetti",
      html: `<p>L'intero può essere anche un <b>gruppo</b> di cose. Per trovare <b>1/3 di 12 biglie</b>:</p>
<ol>
<li>divido le 12 biglie in <b>3 gruppi uguali</b>: 12 : 3 = <b>4</b>;</li>
<li>un gruppo, cioè <b>1/3</b>, contiene <b>4 biglie</b>.</li>
</ol>
<p>E <b>2/3 di 12</b>? Prendo 2 gruppi: 4 × 2 = <b>8 biglie</b>.</p>
<p>🔑 Regola: <b>divido per il numero sotto</b> (denominatore), poi <b>moltiplico per il numero sopra</b> (numeratore).</p>`
    },
    {
      type: "svg",
      title: "1/3 di 12 biglie",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="30" y="40" width="170" height="120" rx="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="4"/>
<rect x="215" y="40" width="170" height="120" rx="20" fill="#ffffff" stroke="#6b7280" stroke-width="3" stroke-dasharray="8 6"/>
<rect x="400" y="40" width="170" height="120" rx="20" fill="#ffffff" stroke="#6b7280" stroke-width="3" stroke-dasharray="8 6"/>
<g fill="#2563eb"><circle cx="80" cy="80" r="18"/><circle cx="150" cy="80" r="18"/><circle cx="80" cy="125" r="18"/><circle cx="150" cy="125" r="18"/></g>
<g fill="#a3a3a3"><circle cx="265" cy="80" r="18"/><circle cx="335" cy="80" r="18"/><circle cx="265" cy="125" r="18"/><circle cx="335" cy="125" r="18"/>
<circle cx="450" cy="80" r="18"/><circle cx="520" cy="80" r="18"/><circle cx="450" cy="125" r="18"/><circle cx="520" cy="125" r="18"/></g>
<text x="115" y="195" font-size="24" fill="#1d4ed8" text-anchor="middle" font-weight="bold">1/3 = 4</text>
<text x="300" y="195" font-size="22" fill="#6b7280" text-anchor="middle">1/3</text>
<text x="485" y="195" font-size="22" fill="#6b7280" text-anchor="middle">1/3</text>
<text x="300" y="240" font-size="22" fill="#1f2937" text-anchor="middle">12 : 3 = 4 biglie in ogni gruppo</text>
</svg>`,
      caption: "Il gruppo di 12 biglie è diviso in 3 gruppi uguali: ognuno è un terzo."
    },
    {
      type: "example",
      title: "Esempio pratico: la tavoletta di cioccolato",
      html: `<p>Una tavoletta ha <b>10 quadretti</b>. Marco ne mangia <b>3</b> e Sofia <b>2</b>.</p>
<ul>
<li>Marco ha mangiato <b>3/10</b> della tavoletta.</li>
<li>Sofia ha mangiato <b>2/10</b>.</li>
<li>In tutto hanno mangiato 5 quadretti, cioè <b>5/10</b>… che è proprio <b>metà</b> tavoletta! 🍫</li>
<li>Restano <b>5/10</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: i pastelli",
      html: `<p>In un astuccio ci sono <b>20 pastelli</b>. <b>1/4</b> sono rossi. Quanti sono i pastelli rossi?</p>
<ol>
<li>20 : 4 = <b>5</b> (un quarto dei pastelli).</li>
<li>Numeratore 1 → <b>5 pastelli rossi</b> ✏️</li>
</ol>
<p>E se fossero <b>3/4</b>? 5 × 3 = <b>15 pastelli</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>La parola <b>frazione</b> viene dal latino <i>frangere</i>, che vuol dire <b>rompere</b>. Una frazione è un intero "rotto" in pezzi uguali! Anche la parola <b>fragile</b> 🥚 viene da lì.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Quando dici <b>"un quarto d'ora"</b> stai usando una frazione! Un'ora ha 60 minuti: 60 : 4 = <b>15 minuti</b>. E <b>"mezz'ora"</b> è 1/2 di ora = <b>30 minuti</b>. ⏰</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Le parti devono essere <b>tutte uguali</b>.</li>
<li>Denominatore (sotto) = in quante parti divido. Numeratore (sopra) = quante parti prendo.</li>
<li>Se sopra e sotto c'è lo stesso numero, è <b>un intero</b>: 4/4 = 1.</li>
<li>Frazione di un numero: <b>: denominatore</b>, poi <b>× numeratore</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le frazioni",
      intro: "Le frazioni si possono vedere in tanti modi. Prova quello che ti sembra più chiaro!",
      tabs: [
        {
          label: "📄 Piega il foglio",
          html: `<p>Prendi un foglio di carta vero!</p>
<ol>
<li>Piegalo a metà: aprendolo vedi <b>2 parti uguali</b> → ognuna è <b>1/2</b>.</li>
<li>Piegalo ancora a metà: ora le parti sono <b>4</b> → ognuna è <b>1/4</b>.</li>
<li>Ancora una volta: <b>8 parti</b> → ognuna è <b>1/8</b>.</li>
</ol>
<p>Colora 3 rettangolini: hai colorato <b>3/8</b> del foglio. Più pieghi, più le parti diventano <b>piccole</b>!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<rect x="20" y="40" width="160" height="120" fill="#fde68a" stroke="#1f2937" stroke-width="3"/>
<line x1="100" y1="40" x2="100" y2="160" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<text x="100" y="195" font-size="22" text-anchor="middle">1/2</text>
<rect x="220" y="40" width="160" height="120" fill="#bbf7d0" stroke="#1f2937" stroke-width="3"/>
<line x1="300" y1="40" x2="300" y2="160" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="220" y1="100" x2="380" y2="100" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<text x="300" y="195" font-size="22" text-anchor="middle">1/4</text>
<rect x="420" y="40" width="160" height="120" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<rect x="420" y="40" width="40" height="60" fill="#f472b6"/><rect x="460" y="40" width="40" height="60" fill="#f472b6"/><rect x="500" y="40" width="40" height="60" fill="#f472b6"/>
<g stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"><line x1="460" y1="40" x2="460" y2="160"/><line x1="500" y1="40" x2="500" y2="160"/><line x1="540" y1="40" x2="540" y2="160"/><line x1="420" y1="100" x2="580" y2="100"/></g>
<text x="500" y="195" font-size="22" text-anchor="middle" fill="#be185d" font-weight="bold">3/8</text>
</svg>`
        },
        {
          label: "🧊 Cubetti 3D",
          html: `<p>Qui ci sono <b>12 cubetti</b> in 3 file da 4.</p>
<ul>
<li>Una <b>fila</b> è <b>1/3</b> dei cubetti: 4 cubetti.</li>
<li>Una <b>colonna</b> è <b>1/4</b> dei cubetti: 3 cubetti.</li>
</ul>
<p>Gira il modello e cambia i cursori: quanti cubetti ci sono in 1/3? E in 1/4?</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "📏 Sulla retta",
          html: `<p>Le frazioni sono anche <b>numeri</b> che stanno tra 0 e 1 sulla retta. Immagina che il tratto da 0 a 1 sia diviso in <b>4 salti uguali</b>: un salto è <b>1/4</b>, due salti <b>2/4</b> (cioè la metà!), quattro salti arrivano a <b>1</b>.</p>
<p>Qui la retta va da 0 a 8: pensa che ogni tratto da 0 a 4 sia <b>un intero</b> diviso in quarti. Il segno sul 2 è la metà, cioè 2/4!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 8, step: 1, marks: [2, 4] }
        },
        {
          label: "👨‍🍳 L'analogia del cuoco",
          html: `<p>Una ricetta dice: <b>"1/2 litro di latte"</b>. Il cuoco prende una bottiglia da 1 litro e ne versa <b>metà</b>.</p>
<p>Poi dice: <b>"3/4 di panetto di burro"</b>. Taglia il panetto in <b>4 pezzi uguali</b> e ne usa <b>3</b>.</p>
<p>In cucina le frazioni si usano sempre: mezzo chilo, un quarto di litro, un terzo di tazza… 🥛🧈</p>`
        },
        {
          label: "🇬🇧 Come si dice in inglese",
          html: `<p>Anche in inglese le frazioni hanno nomi speciali:</p>
<ul>
<li>1/2 = <b>one half</b> (una metà)</li>
<li>1/4 = <b>one quarter</b> (un quarto) — come il "quarter" da 25 centesimi di dollaro, che è proprio 1/4 di dollaro! 💵</li>
<li>1/3 = <b>one third</b>, 2/5 = <b>two fifths</b></li>
</ul>
<p>In molti Paesi, invece della linea orizzontale, si scrive la frazione con la barra obliqua: <b>3/4</b>. Sono due modi per scrivere la stessa cosa.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle frazioni: tocca un nodo e scopri il perché",
      nodes: [
        { id: "intero", label: "Intero", x: 50, y: 8, color: "#2563eb", html: "La cosa tutta intera: una pizza, un foglio, un gruppo di oggetti.", why: "Senza sapere qual è l'intero, una frazione non ha senso: metà di una pizza piccola è meno di metà di una pizza gigante!" },
        { id: "uguali", label: "Parti uguali", x: 50, y: 28, color: "#16a34a", html: "Per frazionare l'intero, i pezzi devono essere tutti uguali.", why: "Le frazioni sono nate per dividere in modo giusto: terreni, raccolti, pane. Se le parti non sono uguali, qualcuno riceve di più!" },
        { id: "unita", label: "Unità frazionaria", x: 15, y: 45, color: "#a855f7", html: "Una sola parte dell'intero: 1/2, 1/3, 1/4…", why: "Gli antichi Egizi, quasi 4000 anni fa, usavano quasi solo queste frazioni con numeratore 1. Il papiro di Rhind (circa 1650 a.C.) ne è pieno." },
        { id: "den", label: "Denominatore", x: 30, y: 65, color: "#f59e0b", html: "Il numero sotto la linea: in quante parti uguali divido.", why: "Si chiama così perché \"dà il nome\" alle parti: 4 → quarti, 5 → quinti, 10 → decimi." },
        { id: "num", label: "Numeratore", x: 70, y: 65, color: "#ef4444", html: "Il numero sopra la linea: quante parti prendo.", why: "Viene da \"numerare\", cioè contare: conta le parti prese." },
        { id: "intera", label: "Frazione = 1 intero", x: 85, y: 45, color: "#0ea5e9", html: "Quando numeratore e denominatore sono uguali: 5/5 = 1.", why: "Se prendo tutte le parti in cui ho diviso, ho rimesso insieme l'intero." },
        { id: "gruppo", label: "Frazione di un numero", x: 50, y: 85, color: "#14b8a6", html: "Si divide per il denominatore e si moltiplica per il numeratore.", why: "Dividere per il denominatore fa i gruppi uguali (quanto vale una parte); moltiplicare per il numeratore prende il numero giusto di gruppi." },
        { id: "linea", label: "Linea di frazione", x: 85, y: 88, color: "#64748b", html: "Il trattino tra numeratore e denominatore.", why: "Fu usata dai matematici arabi e portata in Europa da Leonardo Fibonacci di Pisa nel libro <i>Liber Abaci</i> (1202)." }
      ],
      edges: [
        ["intero", "uguali", "si divide in"],
        ["uguali", "unita", "ognuna è"],
        ["uguali", "den", "quante sono →"],
        ["uguali", "num", "quante prendo →"],
        ["num", "intera", "se uguale al den."],
        ["den", "gruppo", ": per il den."],
        ["num", "gruppo", "× per il num."],
        ["num", "linea", "separato da"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la frazione di un numero",
      questions: [
        { type: "num", q: "Quanto è 1/2 di 16?", answer: 8, explain: "16 : 2 = 8." },
        { type: "num", q: "Quanto è 1/5 di 30?", answer: 6, explain: "30 : 5 = 6." },
        { type: "mc", q: "Quale frazione vale un intero?", options: ["3/4", "6/6", "1/6"], answer: 1, explain: "6 parti su 6: tutto l'intero." }
      ]
    }
  ],
  glossary: [
    { t: "Intero", d: "La cosa o il gruppo tutto intero che vogliamo dividere." },
    { t: "Frazione", d: "Una o più parti uguali di un intero." },
    { t: "Frazionare", d: "Dividere un intero in parti uguali." },
    { t: "Unità frazionaria", d: "Una sola delle parti uguali, con numeratore 1 (es. 1/4)." },
    { t: "Numeratore", d: "Il numero sopra la linea: quante parti prendo." },
    { t: "Denominatore", d: "Il numero sotto la linea: in quante parti uguali divido l'intero." },
    { t: "Linea di frazione", d: "Il trattino che separa numeratore e denominatore." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Per fare una frazione le parti devono essere…", options: ["tutte uguali", "tutte diverse", "più di dieci"], answer: 0, explain: "Le parti devono essere uguali." },
      { type: "mc", q: "In 3/7 il numeratore è…", options: ["7", "3", "10"], answer: 1, explain: "Il numeratore è sopra la linea: 3." },
      { type: "text", q: "Come si chiama il numero sotto la linea di frazione?", answer: ["denominatore", "il denominatore"], explain: "È il denominatore: dice in quante parti divido." },
      { type: "mc", q: "Come si legge 2/5?", options: ["due quinti", "cinque mezzi", "due e cinque"], answer: 0, explain: "Due (numeratore) quinti (denominatore 5)." },
      { type: "tf", q: "4/4 è uguale a un intero.", answer: true, explain: "Prendo tutte e 4 le parti: l'intero." },
      { type: "num", q: "Una pizza è tagliata in 8 fette e ne mangi 3. Quante fette restano?", answer: 5, explain: "8 − 3 = 5 fette, cioè 5/8." },
      { type: "num", q: "Quanto è 1/4 di 20?", answer: 5, explain: "20 : 4 = 5." },
      { type: "num", q: "Quanto è 2/3 di 9?", answer: 6, explain: "9 : 3 = 3; 3 × 2 = 6." },
      { type: "tf", q: "Più il denominatore è grande, più ogni parte è grande.", answer: false, explain: "È il contrario: se taglio in più pezzi, ogni pezzo è più piccolo. 1/8 è più piccolo di 1/2." },
      { type: "order", q: "Ordina dalla parte più grande alla più piccola.", items: ["1/2", "1/3", "1/4", "1/10"], explain: "Con numeratore 1, più il denominatore è grande, più la parte è piccola." },
      { type: "mc", q: "Un quarto d'ora quanti minuti sono?", options: ["25", "15", "4"], answer: 1, explain: "60 : 4 = 15 minuti." }
    ],
    gen: [["fracOf", 3]]
  }
});
