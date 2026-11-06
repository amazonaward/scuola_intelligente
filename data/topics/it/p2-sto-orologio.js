TOPIC('it', {
  id: "p2-sto-orologio",
  title: "L'orologio",
  intro: "A che ora inizia la scuola? Quanto manca alla ricreazione? ⏰ Per saperlo usiamo l'<b>orologio</b>. Impariamo a leggere le <b>ore</b> e i <b>minuti</b> e scopriamo come gli uomini hanno imparato a misurare il tempo.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Com'è fatto l'orologio",
      html: `<p>L'orologio con le lancette ha:</p>
<ul>
<li>🔢 i <b>numeri da 1 a 12</b> in cerchio;</li>
<li>⬛ la <b>lancetta corta</b>: indica le <b>ore</b>. È lenta: fa un giro in 12 ore;</li>
<li>➖ la <b>lancetta lunga</b>: indica i <b>minuti</b>. Fa un giro completo in <b>1 ora</b> (60 minuti);</li>
<li>🔴 a volte c'è anche la <b>lancetta sottile dei secondi</b>, che fa un giro in 1 minuto.</li>
</ul>
<p>Le lancette girano sempre nello stesso verso: il <b>verso orario</b> ↻.</p>`
    },
    {
      type: "svg",
      title: "Sono le 3 in punto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="170" cy="150" r="125" fill="#ffffff" stroke="#c2410c" stroke-width="8"/>
<g font-size="24" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="170" y="52">12</text><text x="222" y="66">1</text><text x="258" y="102">2</text><text x="272" y="158">3</text><text x="258" y="212">4</text><text x="222" y="248">5</text>
<text x="170" y="262">6</text><text x="118" y="248">7</text><text x="82" y="212">8</text><text x="68" y="158">9</text><text x="82" y="102">10</text><text x="118" y="66">11</text>
</g>
<line x1="170" y1="150" x2="170" y2="60" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/>
<line x1="170" y1="150" x2="235" y2="150" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
<circle cx="170" cy="150" r="9" fill="#1e293b"/>
<text x="330" y="80" font-size="22" fill="#dc2626" font-weight="bold">lancetta corta → 3</text>
<text x="330" y="110" font-size="18" fill="#7f1d1d">(le ore)</text>
<text x="330" y="160" font-size="22" fill="#2563eb" font-weight="bold">lancetta lunga → 12</text>
<text x="330" y="190" font-size="18" fill="#1e3a8a">(i minuti: «in punto»)</text>
<text x="330" y="250" font-size="26" fill="#0f172a" font-weight="bold">Sono le 3:00</text>
</svg>`,
      caption: "Quando la lancetta lunga è sul 12, l'ora è «in punto». La lancetta corta dice quale ora."
    },
    {
      type: "text",
      title: "I minuti: si conta a 5 a 5",
      html: `<p>Tra un numero e l'altro ci sono <b>5 minuti</b> (5 tacchette piccole).</p>
<ul>
<li>Lancetta lunga sull'<b>1</b> → 5 minuti; sul <b>2</b> → 10; sul <b>3</b> → 15… sul <b>6</b> → 30… fino al <b>12</b> → 60, cioè un'ora intera!</li>
</ul>
<p>Per leggere i minuti basta contare a salti di 5: è la <b>tabellina del 5</b>! 🖐️</p>`
    },
    {
      type: "widget",
      title: "Salta di 5 in 5 minuti",
      widget: "numberLine",
      options: { min: 0, max: 60, step: 5, marks: [15, 30, 45, 60] },
      caption: "Ogni salto è un numero dell'orologio. 3 salti = 15 minuti (un quarto d'ora), 6 salti = 30 minuti (mezz'ora), 12 salti = 60 minuti (un'ora)."
    },
    {
      type: "remember",
      title: "Le parole dell'orologio",
      html: `<table>
<tr><th>Lancetta lunga sul…</th><th>Si dice</th><th>Esempio</th></tr>
<tr><td><b>12</b></td><td>«in punto»</td><td>le 8 in punto (8:00)</td></tr>
<tr><td><b>3</b></td><td>«e un quarto» (15 min)</td><td>le 8 e un quarto (8:15)</td></tr>
<tr><td><b>6</b></td><td>«e mezza» (30 min)</td><td>le 8 e mezza (8:30)</td></tr>
<tr><td><b>9</b></td><td>«meno un quarto» (45 min)</td><td>le 9 meno un quarto (8:45)</td></tr>
</table>
<p>1 ora = <b>60 minuti</b>. 1 minuto = <b>60 secondi</b>. 1 giorno = <b>24 ore</b>.</p>`
    },
    {
      type: "svg",
      title: "Un quarto, mezza, tre quarti",
      svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<circle cx="100" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M100 110 L100 35 A75 75 0 0 1 175 110 Z" fill="#fde047"/>
<circle cx="300" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M300 110 L300 35 A75 75 0 0 1 300 185 Z" fill="#86efac"/>
<circle cx="500" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M500 110 L500 35 A75 75 0 1 1 425 110 Z" fill="#93c5fd"/>
<line x1="100" y1="110" x2="160" y2="110" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<line x1="300" y1="110" x2="300" y2="172" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<line x1="500" y1="110" x2="440" y2="110" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<g fill="#1e293b"><circle cx="100" cy="110" r="6"/><circle cx="300" cy="110" r="6"/><circle cx="500" cy="110" r="6"/></g>
<text x="100" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#854d0e">e un quarto = 15 min</text>
<text x="300" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#166534">e mezza = 30 min</text>
<text x="500" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e40af">meno un quarto = 45 min</text>
</svg>`,
      caption: "Come una pizza 🍕: un quarto di giro della lancetta lunga sono 15 minuti, mezzo giro 30, tre quarti 45."
    },
    {
      type: "quiz",
      title: "Mini-quiz: leggere l'orologio",
      questions: [
        { type: "mc", q: "Quale lancetta indica le ore?", options: ["La lancetta corta", "La lancetta lunga", "Nessuna"], answer: 0, explain: "La lancetta corta indica le ore, quella lunga i minuti." },
        { type: "num", q: "La lancetta lunga è sul 4. Quanti minuti sono?", answer: 20, unit: "min", explain: "4 salti da 5: 5, 10, 15, 20." },
        { type: "mc", q: "La lancetta corta è sul 7, la lunga sul 6. Che ore sono?", options: ["Le 6 e 7", "Le 7 e mezza", "Le 7 in punto"], answer: 1, explain: "Lunga sul 6 = 30 minuti, cioè «e mezza»: sono le 7 e mezza (7:30)." }
      ]
    },
    {
      type: "text",
      title: "L'orologio digitale e le 24 ore",
      html: `<p>L'orologio <b>digitale</b> 📱 scrive l'ora con i numeri: prima le <b>ore</b>, poi i due punti, poi i <b>minuti</b>. <b>08:30</b> = le 8 e mezza.</p>
<p>Il giorno ha <b>24 ore</b>, ma l'orologio con le lancette ne mostra solo 12: la lancetta corta fa <b>2 giri</b> al giorno!</p>
<ul>
<li>🌅 Le ore del mattino: da 0 a 12.</li>
<li>🌇 Le ore del pomeriggio e della sera: da 13 a 24. Per trovarle aggiungi 12: le <b>3 del pomeriggio</b> = 3 + 12 = <b>15:00</b>.</li>
</ul>
<p>Le <b>12:00</b> è <b>mezzogiorno</b>; le <b>24:00</b> (o 00:00) è <b>mezzanotte</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio: la mia giornata ⏰",
      html: `<table>
<tr><td>🛏️ Mi sveglio</td><td>7:00</td><td>le 7 in punto</td></tr>
<tr><td>🏫 Entro a scuola</td><td>8:15</td><td>le 8 e un quarto</td></tr>
<tr><td>🍎 Ricreazione</td><td>10:30</td><td>le 10 e mezza</td></tr>
<tr><td>🍝 Pranzo</td><td>12:45</td><td>l'una meno un quarto</td></tr>
<tr><td>⚽ Allenamento</td><td>17:00</td><td>le 5 del pomeriggio</td></tr>
<tr><td>🌙 A letto</td><td>21:00</td><td>le 9 di sera</td></tr>
</table>
<p>Dalle 7:00 alle 8:15 passa <b>1 ora e 15 minuti</b>: il tempo per vestirsi, fare colazione e andare a scuola.</p>`
    },
    {
      type: "example",
      title: "Esempio: quanto dura il cartone? 📺",
      html: `<p>Il cartone animato comincia alle <b>16:00</b> e finisce alle <b>16:30</b>.</p>
<p>La lancetta lunga va dal 12 al 6: <b>mezzo giro</b> = <b>30 minuti</b>. Il cartone dura mezz'ora!</p>`
    },
    {
      type: "widget",
      title: "Abbina l'ora scritta in due modi",
      widget: "match",
      options: {
        pairs: [
          ["le 9 in punto", "9:00"],
          ["le 4 e un quarto", "4:15"],
          ["le 6 e mezza", "6:30"],
          ["le 11 meno un quarto", "10:45"],
          ["le 2 del pomeriggio", "14:00"],
          ["mezzanotte", "00:00"]
        ]
      },
      caption: "Attenzione al «meno un quarto»: le 11 meno un quarto sono ancora le 10 e 45 minuti!"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Perché 60 minuti e 24 ore?",
      html: `<p>L'idea di dividere il giorno in <b>24 ore</b> viene dagli <b>antichi Egizi</b>: 12 ore per il giorno e 12 per la notte.</p>
<p>Il <b>60</b> invece viene dai <b>Babilonesi</b>, che più di 4000 anni fa contavano a gruppi di 60. Il 60 si può dividere in tanti modi (per 2, 3, 4, 5, 6, 10, 12…): comodissimo per fare mezzi, terzi e quarti d'ora!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? L'orologio più preciso",
      html: `<p>Gli <b>orologi atomici</b> misurano il tempo contando le «vibrazioni» degli atomi. I più moderni sono così precisi che sbaglierebbero di <b>meno di 1 secondo</b> in miliardi di anni!</p>
<p>Il tuo telefono e il navigatore dell'auto usano segnali che arrivano da orologi atomici sui satelliti. 🛰️</p>`
    },
    {
      type: "3d",
      title: "Viaggio nel tempo: la storia dell'orologio",
      scene: "spacetime",
      caption: "La mappa è la base, l'altezza è il tempo: più un evento è in alto, più è recente. Tocca un evento e segui le frecce dalle cause agli effetti.",
      options: {
        lat: [20, 56],
        lon: [-10, 120],
        years: [-2100, 2000],
        places: [
          { lat: 32.54, lon: 44.42, label: "Babilonia" },
          { lat: 25.7, lon: 32.64, label: "Tebe (Egitto)" },
          { lat: 31.2, lon: 29.92, label: "Alessandria" },
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 51.5, lon: -0.12, label: "Londra" },
          { lat: 34.8, lon: 114.3, label: "Kaifeng (Cina)" }
        ],
        events: [
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -2000, label: "I Babilonesi contano a 60", html: "In Mesopotamia gli scribi contano a gruppi di <b>60</b> e dividono il cerchio in 360 gradi. Da qui verranno i <b>60 minuti</b> dell'ora e i <b>60 secondi</b> del minuto." },
          { id: "meridiana", lat: 25.74, lon: 32.6, year: -1500, label: "Orologi a ombra in Egitto", html: "Gli Egizi usano un bastone e la sua <b>ombra</b> per sapere l'ora: è l'antenato della <b>meridiana</b>. Dividono il giorno in <b>12 ore</b> di luce e la notte in 12 ore di buio." },
          { id: "clessidra", lat: 25.72, lon: 32.66, year: -1400, label: "La clessidra ad acqua", html: "Nel tempio di Karnak si usa una vaschetta di pietra con un forellino: l'acqua esce piano piano e il livello indica le ore anche di <b>notte</b>, quando la meridiana non funziona.", causes: ["meridiana"] },
          { id: "ctesibio", lat: 31.2, lon: 29.92, year: -250, label: "Ctesibio migliora la clessidra", html: "Ad Alessandria l'inventore greco <b>Ctesibio</b> costruisce clessidre ad acqua molto precise, con galleggianti e lancette che si muovono da sole.", causes: ["clessidra", "babilonia"] },
          { id: "roma", lat: 41.9, lon: 12.5, year: -263, label: "La prima meridiana di Roma", html: "Secondo gli storici antichi, la prima meridiana arriva a Roma dalla Sicilia come bottino di guerra. Ma era fatta per Catania: a Roma segnava l'ora sbagliata, e per anni nessuno se ne accorse!", causes: ["meridiana"] },
          { id: "susong", lat: 34.8, lon: 114.3, year: 1088, label: "La torre-orologio di Su Song", html: "In Cina lo scienziato <b>Su Song</b> costruisce una torre alta circa 12 metri con un orologio mosso da una grande <b>ruota ad acqua</b>, che suona tamburi e campane e mostra le stelle.", causes: ["clessidra"] },
          { id: "padova", lat: 45.41, lon: 11.88, year: 1344, label: "L'orologio di Padova", html: "Gli orologi <b>meccanici</b>, con ingranaggi e pesi, compaiono in Europa alla fine del 1200. A Padova <b>Jacopo Dondi</b> costruisce un grande orologio astronomico per la torre della città: le campane suonano le ore per tutti.", causes: ["ctesibio"] },
          { id: "galileo", lat: 43.72, lon: 10.4, year: 1583, label: "Galileo e il lampadario", html: "Si racconta che nel Duomo di <b>Pisa</b> il giovane <b>Galileo Galilei</b> osservò un lampadario che oscillava e misurò le oscillazioni con il battito del suo polso: grandi o piccole, duravano sempre lo stesso tempo! È la legge del <b>pendolo</b>.", causes: ["padova"] },
          { id: "huygens", lat: 52.08, lon: 4.3, year: 1656, label: "L'orologio a pendolo", html: "L'olandese <b>Christiaan Huygens</b> usa l'idea di Galileo e costruisce il primo orologio a <b>pendolo</b>: passa dallo sbagliare di 15 minuti al giorno a meno di 1 minuto!", causes: ["galileo"] },
          { id: "greenwich", lat: 51.48, lon: 0, year: 1884, label: "I fusi orari e Greenwich", html: "Con i treni e il telegrafo serve un'ora uguale per tutti. Nel 1884 i Paesi del mondo scelgono il meridiano di <b>Greenwich</b> (Londra) come punto di partenza e dividono il mondo in <b>24 fusi orari</b>. In Italia l'ora unica arriva il 1° novembre 1893.", causes: ["huygens"] },
          { id: "atomico", lat: 51.42, lon: -0.33, year: 1955, label: "Il primo orologio atomico", html: "In Inghilterra <b>Louis Essen</b> costruisce il primo orologio atomico preciso, che misura il tempo con le vibrazioni degli atomi di cesio. Dal 1967 il <b>secondo</b> è definito proprio così.", causes: ["greenwich", "babilonia"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Anno 1880: sei il capo delle ferrovie italiane",
      html: `<p>Una volta ogni città regolava gli orologi con il <b>Sole</b>: quando il Sole era più alto nel cielo, era mezzogiorno. Ma il Sole arriva prima a Venezia (a est) e dopo a Torino (a ovest)!</p>
<p>Così, quando a Venezia era mezzogiorno, a Torino mancavano ancora circa <b>20 minuti</b>. Con i cavalli non importava a nessuno… ma ora ci sono i <b>treni</b>, e gli orari si fanno confusi.</p>`,
      question: "Che cosa decidi?",
      options: [
        { label: "Ogni città tiene la sua ora del Sole.", outcome: "Ogni stazione avrebbe un orario diverso: i viaggiatori perderebbero i treni e due treni sullo stesso binario potrebbero non sapere dov'è l'altro. Pericoloso!" },
        { label: "Una sola ora per tutto il Paese, uguale in ogni stazione.", outcome: "Il mezzogiorno dell'orologio non coinciderà più perfettamente con il Sole in ogni città, ma tutti gli orologi d'Italia segneranno la stessa ora. Gli orari dei treni diventano chiari e sicuri." },
        { label: "Niente orari: i treni partono quando sono pieni.", outcome: "Nessuno saprebbe quando partire da casa: si aspetterebbero ore in stazione, e merci e posta arriverebbero in ritardo." }
      ],
      answer: 1,
      explain: "Le ferrovie italiane usavano già dal 1866 l'ora di Roma per tutti i treni. Poi, nel <b>1884</b>, il mondo fu diviso in <b>24 fusi orari</b> partendo da Greenwich, e dal <b>1° novembre 1893</b> tutta l'Italia adottò un'ora unica, quella dell'<b>Europa centrale</b>, che usiamo ancora oggi. Sono stati proprio i treni a rendere necessaria un'ora uguale per tutti!"
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'orologio",
      intro: "Se le lancette ti confondono, prova queste altre strade.",
      tabs: [
        {
          label: "🇺🇸 AM e PM",
          html: `<p>In Italia diciamo «le 15:00». Negli <b>Stati Uniti</b> e in Inghilterra si usa quasi sempre l'orologio da 12 ore con due sigle latine:</p>
<ul>
<li><b>a.m.</b> (<i>ante meridiem</i> = «prima di mezzogiorno»): 9 a.m. = le 9 del mattino;</li>
<li><b>p.m.</b> (<i>post meridiem</i> = «dopo mezzogiorno»): 3 p.m. = le 15:00.</li>
</ul>
<p>Abbina!</p>`,
          widget: "match",
          options: {
            pairs: [
              ["7 a.m.", "7:00 del mattino"],
              ["7 p.m.", "19:00"],
              ["12 p.m. (noon)", "mezzogiorno"],
              ["12 a.m. (midnight)", "mezzanotte"],
              ["4 p.m.", "16:00"]
            ]
          }
        },
        {
          label: "🍕 L'orologio-pizza",
          html: `<p>Immagina l'orologio come una <b>pizza</b> tagliata in <b>12 fette</b>. Ogni fetta vale <b>5 minuti</b>.</p>
<ul>
<li>3 fette = un <b>quarto</b> di pizza = 15 minuti;</li>
<li>6 fette = <b>mezza</b> pizza = 30 minuti;</li>
<li>9 fette = <b>tre quarti</b> = 45 minuti;</li>
<li>12 fette = la pizza intera = 60 minuti = <b>1 ora</b>.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<circle cx="150" cy="120" r="100" fill="#fbbf24" stroke="#b45309" stroke-width="8"/>
<path d="M150 120 L150 20 A100 100 0 0 1 250 120 Z" fill="#ef4444" stroke="#b45309" stroke-width="3"/>
<g stroke="#b45309" stroke-width="2">
<line x1="150" y1="120" x2="150" y2="20"/><line x1="150" y1="120" x2="200" y2="33"/><line x1="150" y1="120" x2="237" y2="70"/><line x1="150" y1="120" x2="250" y2="120"/>
<line x1="150" y1="120" x2="237" y2="170"/><line x1="150" y1="120" x2="200" y2="207"/><line x1="150" y1="120" x2="150" y2="220"/><line x1="150" y1="120" x2="100" y2="207"/>
<line x1="150" y1="120" x2="63" y2="170"/><line x1="150" y1="120" x2="50" y2="120"/><line x1="150" y1="120" x2="63" y2="70"/><line x1="150" y1="120" x2="100" y2="33"/>
</g>
<text x="300" y="80" font-size="22" fill="#991b1b" font-weight="bold">3 fette rosse</text>
<text x="300" y="115" font-size="22" fill="#991b1b" font-weight="bold">= 3 × 5 = 15 minuti</text>
<text x="300" y="160" font-size="22" fill="#78350f" font-weight="bold">12 fette = 60 minuti</text>
<text x="300" y="195" font-size="22" fill="#78350f" font-weight="bold">= 1 ora</text>
</svg>`
        },
        {
          label: "🌍 Che ore sono nel mondo?",
          html: `<p>Il Sole non illumina tutta la Terra insieme: quando da noi è giorno, dall'altra parte è notte! Per questo ogni zona del mondo ha la sua ora (il suo <b>fuso orario</b>).</p>
<p>Quando in Italia è <b>mezzogiorno</b> (in inverno): a Londra sono le 11, a New York le 6 del mattino, a Mosca le 14, a Pechino le 19 e a Tokyo le 20. Gira il globo!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Roma 12:00", color: "#16a34a" },
              { lat: 51.5, lon: -0.12, label: "Londra 11:00", color: "#2563eb" },
              { lat: 40.7, lon: -74, label: "New York 6:00", color: "#7c3aed" },
              { lat: 55.75, lon: 37.6, label: "Mosca 14:00", color: "#f97316" },
              { lat: 39.9, lon: 116.4, label: "Pechino 19:00", color: "#ef4444" },
              { lat: 35.7, lon: 139.7, label: "Tokyo 20:00", color: "#db2777" }
            ]
          }
        },
        {
          label: "🕰️ La linea del tempo degli orologi",
          html: `<p>Dagli antichi bastoni con l'ombra fino agli orologi atomici: scorri la linea del tempo.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -1500, label: "Orologio a ombra egizio", icon: "☀️" },
              { year: -1400, label: "Clessidra ad acqua", icon: "💧" },
              { year: 1344, label: "Orologio della torre di Padova", icon: "🏰" },
              { year: 1656, label: "Orologio a pendolo di Huygens", icon: "🕰️" },
              { year: 1884, label: "24 fusi orari", icon: "🌍" },
              { year: 1955, label: "Orologio atomico", icon: "⚛️" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'orologio: tocca i nodi e scopri il perché",
      nodes: [
        { id: "sole", label: "Il Sole", x: 50, y: 6, color: "#eab308", html: "Il primo «orologio» della storia.", why: "La Terra gira su sé stessa in circa 24 ore: per questo vediamo il Sole sorgere, salire e tramontare. Le prime persone misuravano il tempo guardando la luce e le ombre." },
        { id: "giorno", label: "Giorno = 24 ore", x: 20, y: 28, color: "#f97316", html: "Un giro completo della Terra su sé stessa.", why: "Gli <b>antichi Egizi</b> divisero il giorno in 12 ore di luce e la notte in 12 ore di buio: 12 + 12 = 24. Il 12 forse veniva dal contare le falangi delle dita con il pollice (4 dita × 3 falangi = 12)." },
        { id: "sessanta", label: "60 minuti, 60 secondi", x: 80, y: 28, color: "#a855f7", html: "Un'ora ha 60 minuti, un minuto ha 60 secondi.", why: "Viene dai <b>Babilonesi</b>, che contavano a gruppi di 60. Il 60 si divide per 2, 3, 4, 5, 6, 10, 12, 15, 20 e 30: perfetto per fare mezz'ore e quarti d'ora." },
        { id: "lancette", label: "Le lancette", x: 50, y: 45, color: "#2563eb", html: "Corta = ore, lunga = minuti, sottile = secondi.", why: "Le lancette girano in «senso orario» perché copiano l'ombra della <b>meridiana</b>: nella parte nord del mondo, dove sono nati gli orologi, l'ombra gira proprio in quel verso." },
        { id: "meccanico", label: "Orologi meccanici", x: 20, y: 65, color: "#64748b", html: "Ingranaggi, pesi e molle che fanno girare le lancette.", why: "Comparvero in Europa verso la fine del 1200 sulle torri delle città e dei monasteri: i monaci dovevano pregare a ore precise anche di notte. Il pendolo (Galileo, Huygens) li rese molto più precisi." },
        { id: "digitale", label: "Orologio digitale", x: 80, y: 65, color: "#16a34a", html: "Mostra l'ora con le cifre: 14:30.", why: "Usa un minuscolo cristallo di <b>quarzo</b> che vibra più di 32.000 volte al secondo: un chip conta le vibrazioni. Il primo orologio da polso al quarzo uscì nel 1969." },
        { id: "fusi", label: "Fusi orari", x: 35, y: 88, color: "#ef4444", html: "Il mondo diviso in 24 zone, ognuna con la sua ora.", why: "Quando i treni resero i viaggi veloci, ogni città con la sua ora del Sole creava confusione. Nel <b>1884</b> si scelse Greenwich come punto di partenza." },
        { id: "atomico", label: "Orologio atomico", x: 70, y: 88, color: "#0ea5e9", html: "L'orologio più preciso: conta le vibrazioni degli atomi.", why: "Dal 1967 il secondo è definito con gli atomi di <b>cesio</b>. Senza orologi atomici il GPS del telefono sbaglierebbe la tua posizione di chilometri." }
      ],
      edges: [
        ["sole", "giorno", "dà il"],
        ["giorno", "sessanta", "diviso in ore da"],
        ["sole", "lancette", "l'ombra ispira le"],
        ["sessanta", "lancette", "i numeri del quadrante"],
        ["lancette", "meccanico", "mosse da"],
        ["meccanico", "digitale", "poi il quarzo:"],
        ["giorno", "fusi", "diverso nel mondo:"],
        ["digitale", "atomico", "ancora più preciso:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: 24 ore e storia",
      questions: [
        { type: "num", q: "Le 4 del pomeriggio sono le ore…", answer: 16, explain: "4 + 12 = 16: le 16:00." },
        { type: "mc", q: "Chi ci ha lasciato i 60 minuti?", options: ["I Babilonesi", "I Romani", "Gli Americani"], answer: 0, explain: "I Babilonesi contavano a gruppi di 60." },
        { type: "tf", q: "La meridiana funziona anche di notte.", answer: false, explain: "La meridiana usa l'ombra del Sole: di notte non funziona. Per questo si inventò la clessidra." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Lancetta corta</b> = ore; <b>lancetta lunga</b> = minuti.</li>
<li>Tra un numero e l'altro ci sono <b>5 minuti</b>.</li>
<li>15 min = <b>un quarto</b>; 30 min = <b>mezz'ora</b>; 45 min = <b>tre quarti</b>.</li>
<li>1 giorno = 24 ore; 1 ora = 60 minuti; 1 minuto = 60 secondi.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Ora", d: "Ognuna delle 24 parti del giorno; dura 60 minuti." },
    { t: "Minuto", d: "La sessantesima parte dell'ora; dura 60 secondi." },
    { t: "Lancetta", d: "L'asticella che gira sul quadrante e indica ore, minuti o secondi." },
    { t: "Quadrante", d: "Il cerchio con i numeri da 1 a 12." },
    { t: "Senso orario", d: "Il verso in cui girano le lancette ↻." },
    { t: "Meridiana", d: "Orologio che indica l'ora con l'ombra del Sole." },
    { t: "Clessidra", d: "Strumento che misura il tempo con acqua o sabbia che scende piano piano." },
    { t: "Fuso orario", d: "Zona della Terra in cui tutti hanno la stessa ora." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale lancetta indica i minuti?", options: ["La corta", "La lunga", "Il quadrante"], answer: 1, explain: "La lancetta lunga indica i minuti." },
      { type: "num", q: "Quanti minuti ci sono in un'ora?", answer: 60, unit: "min", explain: "1 ora = 60 minuti." },
      { type: "num", q: "Quante ore ci sono in un giorno?", answer: 24, explain: "Un giorno ha 24 ore." },
      { type: "num", q: "La lancetta lunga è sul 9. Quanti minuti segna?", answer: 45, unit: "min", explain: "9 × 5 = 45 minuti." },
      { type: "mc", q: "Le 8:30 si possono dire…", options: ["le 8 e un quarto", "le 8 e mezza", "le 9 meno un quarto"], answer: 1, explain: "30 minuti = mezz'ora: le 8 e mezza." },
      { type: "mc", q: "Le 9 meno un quarto sono…", options: ["9:15", "8:45", "9:45"], answer: 1, explain: "Manca un quarto d'ora alle 9: sono le 8 e 45." },
      { type: "tf", q: "La lancetta delle ore fa 2 giri al giorno.", answer: true, explain: "Il quadrante ha 12 ore: in 24 ore la lancetta corta fa 2 giri." },
      { type: "text", q: "Le 15:00 sono le … del pomeriggio. (scrivi il numero)", answer: ["3", "tre"], explain: "15 − 12 = 3: le 3 del pomeriggio." },
      { type: "order", q: "Metti in ordine gli orari della giornata.", items: ["7:00 sveglia", "8:15 inizio scuola", "12:45 pranzo", "17:00 sport", "21:00 a letto"], explain: "Dal mattino alla sera." },
      { type: "mc", q: "Un cartone inizia alle 16:00 e finisce alle 16:30. Quanto dura?", options: ["Un quarto d'ora", "Mezz'ora", "Un'ora"], answer: 1, explain: "Dalle 16:00 alle 16:30 passano 30 minuti." },
      { type: "mc", q: "Quale strumento usavano gli antichi per leggere l'ora con l'ombra del Sole?", options: ["La meridiana", "Il termometro", "La bilancia"], answer: 0, explain: "La meridiana indica l'ora con l'ombra." },
      { type: "tf", q: "Galileo scoprì la legge del pendolo osservando un lampadario.", answer: true, explain: "Lo racconta la tradizione: nel Duomo di Pisa, verso il 1583." }
    ]
  }
});
