TOPIC('it', {
  id: "p5-sci-sistema-solare",
  title: "Il Sistema Solare",
  intro: "Il Sistema Solare è la nostra \"casa\" nello spazio: una stella, il <b>Sole</b>, e tutto ciò che le gira intorno. Scopriamo pianeti, lune, asteroidi e comete, e perché sulla Terra ci sono il giorno, la notte e le stagioni.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è il Sistema Solare?",
      html: `<p>Il <b>Sistema Solare</b> è formato da:</p>
<ul>
<li>il <b>Sole</b>, una stella al centro;</li>
<li><b>8 pianeti</b> che gli girano intorno;</li>
<li>i <b>pianeti nani</b>, come Plutone e Cerere;</li>
<li>più di 200 <b>satelliti</b> (lune) che girano intorno ai pianeti;</li>
<li>milioni di <b>asteroidi</b>, <b>comete</b> e piccoli frammenti di roccia e ghiaccio.</li>
</ul>
<p>Tutti questi corpi sono tenuti insieme da una forza invisibile: la <b>forza di gravità</b> del Sole. È la stessa forza che fa cadere a terra una mela!</p>
<p>Il Sistema Solare si è formato circa <b>4,6 miliardi di anni fa</b> da una enorme nube di gas e polvere.</p>`
    },
    {
      type: "text",
      title: "Il Sole: la nostra stella",
      html: `<p>Il Sole è una <b>stella</b>: una gigantesca sfera di gas caldissimo (soprattutto idrogeno ed elio). Nel suo centro la temperatura arriva a circa <b>15 milioni di gradi</b>!</p>
<p>Il Sole produce <b>luce</b> e <b>calore</b>: senza di lui sulla Terra non ci sarebbe vita. Le piante usano la sua luce per crescere, e noi mangiamo le piante (o animali che le mangiano).</p>
<p>Il Sole è enorme: il suo diametro è circa <b>109 volte</b> quello della Terra. Da solo contiene più del 99% di tutta la materia del Sistema Solare.</p>
<p><b>Attenzione:</b> non bisogna mai guardare il Sole direttamente, nemmeno con gli occhiali da sole: si rovinano gli occhi!</p>`
    },
    {
      type: "svg",
      title: "Gli otto pianeti in ordine",
      svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#0b1026"/>
<circle cx="20" cy="20" r="1.5" fill="#fff"/><circle cx="300" cy="30" r="1.2" fill="#fff"/><circle cx="520" cy="25" r="1.5" fill="#fff"/><circle cx="420" cy="230" r="1.2" fill="#fff"/><circle cx="180" cy="235" r="1.3" fill="#fff"/>
<circle cx="-40" cy="125" r="110" fill="#fbbf24"/>
<text x="10" y="130" font-size="16" fill="#7c2d12" font-weight="bold">Sole</text>
<circle cx="95" cy="125" r="5" fill="#9ca3af"/>
<circle cx="125" cy="125" r="10" fill="#f5c76b"/>
<circle cx="163" cy="125" r="11" fill="#3b82f6"/>
<circle cx="163" cy="125" r="4" fill="#22c55e"/>
<circle cx="198" cy="125" r="7" fill="#dc4b2a"/>
<circle cx="268" cy="125" r="40" fill="#d6a46b"/>
<rect x="230" y="113" width="76" height="6" fill="#b4794a"/>
<rect x="232" y="130" width="72" height="6" fill="#c98b57"/>
<ellipse cx="385" cy="125" rx="62" ry="10" fill="none" stroke="#e8d18f" stroke-width="5"/>
<circle cx="385" cy="125" r="33" fill="#e8c77a"/>
<circle cx="485" cy="125" r="20" fill="#7dd3fc"/>
<circle cx="565" cy="125" r="19" fill="#3b5bdb"/>
<g font-size="14" fill="#fff" text-anchor="middle">
<text x="95" y="160">Mercurio</text>
<text x="125" y="95">Venere</text>
<text x="163" y="160">Terra</text>
<text x="198" y="95">Marte</text>
<text x="268" y="190">Giove</text>
<text x="385" y="185">Saturno</text>
<text x="485" y="165">Urano</text>
<text x="565" y="165">Nettuno</text>
</g>
<text x="320" y="245" font-size="13" fill="#cbd5e1" text-anchor="middle">Le dimensioni sono in proporzione tra i pianeti, le distanze no!</text>
</svg>`,
      caption: "Trucco per ricordare l'ordine: \"<b>M</b>ia <b>V</b>ecchia <b>T</b>ia <b>M</b>angia <b>G</b>elati <b>S</b>ulla <b>U</b>ltima <b>N</b>ave\" (Mercurio, Venere, Terra, Marte, Giove, Saturno, Urano, Nettuno)."
    },
    {
      type: "3d",
      title: "Il Sistema Solare in 3D",
      scene: "solar",
      options: { labels: true },
      caption: "Trascina per ruotare il modello. Osserva: i pianeti più vicini al Sole girano più velocemente!"
    },
    {
      type: "text",
      title: "Pianeti rocciosi e pianeti gassosi",
      html: `<p>Gli 8 pianeti si dividono in due gruppi:</p>
<ul>
<li><b>Pianeti interni o rocciosi</b>: Mercurio, Venere, Terra e Marte. Sono piccoli, vicini al Sole e hanno una superficie solida, fatta di rocce e metalli.</li>
<li><b>Pianeti esterni o giganti gassosi</b>: Giove, Saturno, Urano e Nettuno. Sono enormi, lontani dal Sole e formati soprattutto da gas (idrogeno, elio) e ghiacci. Non hanno una superficie su cui camminare!</li>
</ul>
<p>Tra Marte e Giove c'è la <b>fascia degli asteroidi</b>, una \"cintura\" di milioni di rocce che girano intorno al Sole.</p>
<table>
<tr><th>Pianeta</th><th>Tipo</th><th>Diametro (km)</th><th>Distanza media dal Sole (milioni di km)</th><th>Anno (giro intorno al Sole)</th><th>Lune</th></tr>
<tr><td>Mercurio</td><td>roccioso</td><td>4.879</td><td>58</td><td>88 giorni</td><td>0</td></tr>
<tr><td>Venere</td><td>roccioso</td><td>12.104</td><td>108</td><td>225 giorni</td><td>0</td></tr>
<tr><td>Terra</td><td>roccioso</td><td>12.742</td><td>150</td><td>365 giorni</td><td>1</td></tr>
<tr><td>Marte</td><td>roccioso</td><td>6.779</td><td>228</td><td>687 giorni</td><td>2</td></tr>
<tr><td>Giove</td><td>gassoso</td><td>139.820</td><td>778</td><td>circa 12 anni</td><td>più di 90</td></tr>
<tr><td>Saturno</td><td>gassoso</td><td>116.460</td><td>1.430</td><td>circa 29 anni</td><td>più di 140</td></tr>
<tr><td>Urano</td><td>gassoso (ghiacciato)</td><td>50.724</td><td>2.870</td><td>circa 84 anni</td><td>28</td></tr>
<tr><td>Nettuno</td><td>gassoso (ghiacciato)</td><td>49.244</td><td>4.500</td><td>circa 165 anni</td><td>16</td></tr>
</table>
<p><small>Il numero di lune di Giove e Saturno cresce spesso, perché gli astronomi ne scoprono di nuove!</small></p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p><b>Venere</b> è il pianeta più caldo, anche se Mercurio è più vicino al Sole: la sua atmosfera spessa di anidride carbonica intrappola il calore come una serra. Sulla sua superficie ci sono circa <b>460 °C</b>, abbastanza per fondere il piombo!</p>
<p>Su Venere, inoltre, un giorno dura più di un anno: il pianeta gira su se stesso lentissimamente.</p>`
    },
    {
      type: "text",
      title: "I movimenti della Terra: rotazione e rivoluzione",
      html: `<p>La Terra compie due movimenti principali:</p>
<ul>
<li><b>Rotazione</b>: la Terra gira su se stessa, intorno a un asse immaginario che passa per i poli. Un giro completo dura circa <b>24 ore</b>. La rotazione causa l'alternarsi del <b>giorno e della notte</b>: la parte rivolta verso il Sole è illuminata (giorno), quella opposta è al buio (notte).</li>
<li><b>Rivoluzione</b>: la Terra gira intorno al Sole seguendo un percorso a forma di ellisse, chiamato <b>orbita</b>. Un giro completo dura circa <b>365 giorni e 6 ore</b>: è un <b>anno</b>.</li>
</ul>
<p>L'asse della Terra è <b>inclinato</b> (di circa 23 gradi). Per questo, durante l'anno, i raggi del Sole arrivano più dritti su una parte della Terra e più obliqui sull'altra: così nascono le <b>stagioni</b>.</p>`
    },
    {
      type: "svg",
      title: "Giorno e notte: la rotazione",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#0f172a"/>
<circle cx="40" cy="130" r="70" fill="#fbbf24"/>
<text x="20" y="135" font-size="16" fill="#7c2d12" font-weight="bold">Sole</text>
<g stroke="#fde68a" stroke-width="3">
<line x1="120" y1="80" x2="330" y2="80"/><line x1="120" y1="130" x2="330" y2="130"/><line x1="120" y1="180" x2="330" y2="180"/>
</g>
<circle cx="400" cy="130" r="80" fill="#1e3a8a"/>
<path d="M400 50 A80 80 0 0 0 400 210 Z" fill="#60a5fa"/>
<path d="M360 90 q20 -10 30 10 q10 20 -10 30 q-20 10 -20 -20z" fill="#22c55e"/>
<path d="M420 140 q25 -5 25 20 q-10 20 -30 5z" fill="#166534"/>
<line x1="380" y1="35" x2="420" y2="225" stroke="#fff" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M455 60 a70 20 0 0 1 20 25" fill="none" stroke="#f472b6" stroke-width="3"/>
<polygon points="475,85 468,72 482,74" fill="#f472b6"/>
<text x="340" y="250" font-size="16" fill="#fde68a">GIORNO</text>
<text x="430" y="250" font-size="16" fill="#93c5fd">NOTTE</text>
<text x="490" y="60" font-size="14" fill="#f9a8d4">rotazione</text>
<text x="490" y="78" font-size="14" fill="#f9a8d4">(24 ore)</text>
<text x="500" y="140" font-size="14" fill="#fff">asse</text>
</svg>`,
      caption: "La metà della Terra rivolta verso il Sole è illuminata: lì è giorno. Ruotando, ogni luogo passa dalla luce al buio."
    },
    {
      type: "example",
      title: "Esempio pratico: giorno e notte con una torcia",
      html: `<p>Prova a casa, in una stanza buia:</p>
<ol>
<li>Accendi una torcia e appoggiala su un tavolo: è il <b>Sole</b>.</li>
<li>Prendi un'arancia e infilaci una matita dall'alto in basso: è la <b>Terra</b> con il suo asse.</li>
<li>Attacca un adesivo sull'arancia: è la tua città.</li>
<li>Fai girare lentamente la matita: l'adesivo passa dalla parte illuminata (giorno) a quella buia (notte).</li>
</ol>
<p>Ora inclina un po' la matita e fai girare l'arancia intorno alla torcia: vedrai che a volte la parte di sopra riceve più luce, a volte meno. Ecco le stagioni!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: i pianeti",
      questions: [
        { type: "mc", q: "Qual è il pianeta più vicino al Sole?", options: ["Venere", "Mercurio", "Marte", "Terra"], answer: 1, explain: "Mercurio è il primo pianeta, a circa 58 milioni di km dal Sole." },
        { type: "mc", q: "Qual è il pianeta più grande del Sistema Solare?", options: ["Saturno", "Terra", "Giove", "Nettuno"], answer: 2, explain: "Giove è il gigante: il suo diametro è circa 11 volte quello della Terra." },
        { type: "tf", q: "Marte è un pianeta gassoso.", answer: false, explain: "Marte è un pianeta roccioso, il quarto dal Sole: ha una superficie solida rossastra." },
        { type: "order", q: "Metti in ordine dal più vicino al più lontano dal Sole", items: ["Venere", "Terra", "Giove", "Urano"], explain: "L'ordine è Mercurio, Venere, Terra, Marte, Giove, Saturno, Urano, Nettuno." }
      ]
    },
    {
      type: "text",
      title: "La Luna e gli altri corpi celesti",
      html: `<p>La <b>Luna</b> è l'unico satellite naturale della Terra. Si trova a circa <b>384.000 km</b> da noi e gira intorno alla Terra in circa <b>27 giorni</b>. La Luna non ha luce propria: <b>riflette la luce del Sole</b>. Per questo la vediamo cambiare forma: sono le <b>fasi lunari</b> (luna nuova, primo quarto, luna piena, ultimo quarto).</p>
<p>Altri corpi del Sistema Solare:</p>
<ul>
<li><b>Asteroidi</b>: rocce di forma irregolare, da pochi metri a centinaia di km.</li>
<li><b>Comete</b>: \"palle di neve sporca\" di ghiaccio e polvere. Quando si avvicinano al Sole il ghiaccio evapora e si forma una lunga <b>coda</b> luminosa.</li>
<li><b>Meteore</b>: piccoli frammenti che entrano nell'atmosfera e bruciano, creando una scia di luce: le chiamiamo \"stelle cadenti\". Se un frammento arriva fino a terra si chiama <b>meteorite</b>.</li>
<li><b>Pianeti nani</b>: come <b>Plutone</b>, che fino al 2006 era considerato il nono pianeta.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Stelle cadenti di agosto",
      html: `<p>Intorno al <b>10 agosto</b>, la notte di San Lorenzo, si vedono tantissime \"stelle cadenti\". Sono le <b>Perseidi</b>: minuscoli granelli lasciati dalla cometa Swift-Tuttle. Ogni anno la Terra attraversa questa \"scia di polvere\" e i granelli bruciano nell'atmosfera a oltre 200.000 km/h!</p>
<p>E sulla Luna? Le impronte degli astronauti dell'Apollo 11 (1969) sono ancora lì: sulla Luna non c'è vento che possa cancellarle.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: quanto è lontano il Sole?",
      html: `<p>La luce viaggia a circa <b>300.000 km al secondo</b>. Per arrivare dal Sole alla Terra (150 milioni di km) impiega circa <b>8 minuti</b>.</p>
<p>Questo vuol dire che quando guardi il tramonto vedi il Sole com'era 8 minuti prima!</p>
<p>E se andassimo in auto? A 100 km/h, senza mai fermarci, ci vorrebbero circa <b>171 anni</b> per arrivare al Sole. Dalla Luna, invece, la luce ci mette poco più di 1 secondo.</p>`
    },
    {
      type: "widget",
      title: "Abbina ogni pianeta alla sua caratteristica",
      widget: "match",
      options: {
        pairs: [
          ["Mercurio", "Il più vicino al Sole"],
          ["Venere", "Il più caldo"],
          ["Terra", "L'unico con acqua liquida in superficie e vita conosciuta"],
          ["Marte", "Il pianeta rosso"],
          ["Giove", "Il più grande"],
          ["Saturno", "Famoso per i suoi anelli"],
          ["Urano", "Ruota \"sdraiato\" su un fianco"],
          ["Nettuno", "Il più lontano, con venti fortissimi"]
        ]
      },
      caption: "Clicca un pianeta e poi la sua caratteristica."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il Sistema Solare",
      intro: "I numeri dello spazio sono così grandi che è difficile immaginarli. Prova una di queste strade: scegli quella che ti fa dire «ah, ecco!».",
      tabs: [
        {
          label: "⚽ Modello in scala: il campo da calcio",
          html: "<p>Rimpiccioliamo tutto, sempre nella stessa proporzione. Se il <b>Sole</b> fosse un <b>pallone da calcio</b> (22 cm) messo al centro del campo:</p><table><tr><th>Corpo celeste</th><th>Grande come…</th><th>Distanza dal pallone</th></tr><tr><td>Mercurio</td><td>un granello di sabbia (0,8 mm)</td><td>9 metri</td></tr><tr><td>Terra</td><td>un granello di pepe (2 mm)</td><td>24 metri</td></tr><tr><td>Luna</td><td>una briciola (0,5 mm)</td><td>6 cm dalla Terra</td></tr><tr><td>Marte</td><td>una punta di matita (1 mm)</td><td>36 metri</td></tr><tr><td>Giove</td><td>una nocciola (2,2 cm)</td><td>123 metri: fuori dal campo!</td></tr><tr><td>Saturno</td><td>una nocciolina (1,8 cm)</td><td>227 metri</td></tr><tr><td>Nettuno</td><td>un chicco di mais (8 mm)</td><td>più di 700 metri</td></tr></table><p>E la stella più vicina, Proxima Centauri? In questo modello sarebbe a circa <b>6000 km</b>: più o meno la distanza tra Roma e New York! Lo spazio è soprattutto… <b>vuoto</b>.</p>",
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#4ade80"/><rect x="10" y="10" width="580" height="200" fill="none" stroke="#fff" stroke-width="3"/><line x1="300" y1="10" x2="300" y2="210" stroke="#fff" stroke-width="3"/><circle cx="300" cy="110" r="40" fill="none" stroke="#fff" stroke-width="3"/><circle cx="60" cy="110" r="22" fill="#fbbf24" stroke="#b45309" stroke-width="2"/><text x="60" y="160" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Sole = pallone</text><circle cx="230" cy="110" r="3" fill="#1d4ed8"/><text x="230" y="95" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Terra</text><line x1="82" y1="125" x2="228" y2="125" stroke="#14532d" stroke-width="2" stroke-dasharray="6 4"/><text x="155" y="145" font-size="15" text-anchor="middle" fill="#14532d">24 metri</text><text x="560" y="60" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">Giove: 123 m →</text><text x="560" y="190" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">Nettuno: oltre 700 m →</text></svg>`
        },
        {
          label: "🔦 Torcia e arancia: giorno e notte",
          html: "<p>Al buio, accendi una torcia (il Sole) e puntala su un'arancia (la Terra) infilata su una matita (l'asse). Fai girare lentamente la matita: la parte illuminata è il <b>giorno</b>, quella in ombra è la <b>notte</b>. Ogni punto dell'arancia passa dal giorno alla notte: è la <b>rotazione</b>, che dura circa 24 ore.</p><p>Nel globo 3D qui sotto trovi tre città lontane: quando in Italia è mezzogiorno, in Giappone è sera e in Brasile è mattina presto. Girando il globo capisci perché.</p>",
          scene: "globe",
          options: { points: [ { lat: 41.9, lon: 12.5, label: "Roma", color: "#ef4444" }, { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#f59e0b" }, { lat: -23.5, lon: -46.6, label: "San Paolo", color: "#22c55e" }, { lat: 40.7, lon: -74.0, label: "New York", color: "#8b5cf6" } ] }
        },
        {
          label: "💃 Con il corpo: la danza dei pianeti",
          html: "<p>In cortile: un compagno fa il <b>Sole</b> e sta fermo al centro. Tu sei la <b>Terra</b>: gira su te stesso (<b>rotazione</b>) e intanto cammina in cerchio intorno al Sole (<b>rivoluzione</b>). Un altro compagno, la <b>Luna</b>, ti gira intorno.</p><ul><li>Chi fa Mercurio cammina su un cerchio piccolo e veloce.</li><li>Chi fa Nettuno cammina lontanissimo e lentissimo: per fare un giro intero gli servirebbero 165 dei nostri anni!</li></ul><p>Così si sente con il corpo che i pianeti vicini al Sole girano più in fretta.</p>"
        },
        {
          label: "🪐 Guarda tu in 3D",
          html: "<p>Ruota il Sistema Solare, rallenta (🐢) o accelera (🐇) il tempo. Osserva: Mercurio fa molti giri mentre Giove ne fa appena un pezzetto. Prova a guardarlo da sopra e poi di lato: le orbite sono quasi sullo stesso piano, come piste su un grande tavolo.</p>",
          scene: "solar",
          options: { labels: true }
        }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il Sole è una <b>stella</b>; i pianeti non hanno luce propria.</li>
<li>Gli 8 pianeti: Mercurio, Venere, Terra, Marte (rocciosi) – Giove, Saturno, Urano, Nettuno (gassosi).</li>
<li><b>Rotazione</b> (24 ore) → giorno e notte. <b>Rivoluzione</b> (365 giorni) → anno; con l'asse inclinato → stagioni.</li>
<li>La Luna è il satellite della Terra e riflette la luce del Sole.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: i movimenti della Terra",
      questions: [
        { type: "mc", q: "Che cosa causa l'alternarsi del giorno e della notte?", options: ["La rivoluzione", "La rotazione", "La Luna", "Le nuvole"], answer: 1, explain: "La rotazione della Terra su se stessa, in circa 24 ore, porta ogni luogo prima alla luce e poi al buio." },
        { type: "num", q: "Quanti giorni dura circa un giro della Terra intorno al Sole?", answer: 365, tol: 1, unit: "giorni", explain: "La rivoluzione dura circa 365 giorni e 6 ore: ogni 4 anni le 6 ore diventano un giorno in più (anno bisestile)." },
        { type: "tf", q: "Le stagioni dipendono dall'inclinazione dell'asse terrestre.", answer: true, explain: "Grazie all'asse inclinato i raggi del Sole arrivano più o meno diretti durante l'anno." }
      ]
    },
    {
      type: "3d",
      title: "Dentro il Sole in 3D",
      scene: "layers",
      options: { layers: [ { r: 1, color: "#fde047", label: "Fotosfera (superficie, circa 5500 °C)" }, { r: 0.7, color: "#fb923c", label: "Zona convettiva" }, { r: 0.45, color: "#f97316", label: "Zona radiativa" }, { r: 0.25, color: "#dc2626", label: "Nucleo (circa 15 milioni di °C)" } ] },
      caption: "Nel nucleo l'idrogeno si trasforma in elio (fusione nucleare) e libera energia. Quell'energia impiega migliaia di anni per arrivare in superficie e poi solo 8 minuti per raggiungere la Terra come luce."
    },
    {
      type: "conceptMap",
      title: "Come abbiamo capito che la Terra gira intorno al Sole",
      nodes: [
        { id: "cielo", label: "Osservare il cielo", x: 50, y: 6, color: "#64748b", html: "Da migliaia di anni gli esseri umani osservano Sole, Luna, stelle e i «vagabondi» del cielo: i pianeti.", why: "Babilonesi ed Egizi annotavano i movimenti degli astri per fare calendari e sapere quando seminare o quando arrivava la piena del Nilo. Le osservazioni ripetute sono la base di ogni scoperta." },
        { id: "geo", label: "Geocentrismo", x: 20, y: 24, color: "#ef4444", html: "L'idea che la Terra sia ferma al centro dell'universo e tutto le giri intorno. Aristotele (IV sec. a.C.) e poi Tolomeo (II sec. d.C.) la resero famosa.", why: "Sembra ovvio: ogni giorno vediamo il Sole sorgere e tramontare e non sentiamo la Terra muoversi. Tolomeo costruì un modello con cerchi dentro cerchi (epicicli) che prevedeva abbastanza bene le posizioni dei pianeti. Per questo fu creduto per circa 1400 anni." },
        { id: "aristarco", label: "Aristarco", x: 80, y: 24, color: "#a855f7", html: "Aristarco di Samo (III sec. a.C.) propose già che la Terra girasse intorno al Sole.", why: "Misurando con la geometria le distanze di Luna e Sole capì che il Sole è molto più grande della Terra, e pensò che fosse strano che il più grande girasse intorno al più piccolo. Ma non aveva prove sufficienti e la sua idea fu dimenticata." },
        { id: "copernico", label: "Copernico (1543)", x: 50, y: 42, color: "#f59e0b", html: "Niccolò Copernico pubblicò un modello eliocentrico: il Sole al centro, la Terra è un pianeta come gli altri.", why: "Il modello di Tolomeo era diventato complicatissimo. Copernico notò che, mettendo il Sole al centro, molti movimenti strani dei pianeti (come Marte che sembra tornare indietro) si spiegano in modo più semplice: è la Terra che lo sorpassa." },
        { id: "galileo", label: "Galileo (1610)", x: 20, y: 62, color: "#3b82f6", html: "Galileo Galilei puntò il cannocchiale verso il cielo: vide i satelliti di Giove, le fasi di Venere, le montagne della Luna.", why: "Le lune di Giove dimostravano che non tutto gira intorno alla Terra. Le fasi di Venere (come quelle della Luna) si spiegano solo se Venere gira intorno al Sole. Erano prove osservate, non solo idee." },
        { id: "keplero", label: "Keplero (1609)", x: 80, y: 62, color: "#14b8a6", html: "Giovanni Keplero scoprì che le orbite dei pianeti non sono cerchi ma ellissi, e che i pianeti più vicini al Sole sono più veloci.", why: "Usò le misure precisissime del suo maestro Tycho Brahe. Con i cerchi i conti su Marte non tornavano di 8 primi di grado: invece di ignorare l'errore, Keplero cambiò forma all'orbita e tutto tornò." },
        { id: "newton", label: "Newton (1687)", x: 50, y: 80, color: "#22c55e", html: "Isaac Newton spiegò perché i pianeti girano: la forza di gravità.", why: "La stessa forza che fa cadere una mela tiene la Luna intorno alla Terra e i pianeti intorno al Sole. Con la sua legge si possono ricavare le leggi di Keplero: per la prima volta cielo e Terra seguono le stesse regole." },
        { id: "oggi", label: "Il Sistema Solare oggi", x: 50, y: 96, color: "#0ea5e9", html: "Oggi sappiamo che ci sono 8 pianeti, pianeti nani come Plutone, asteroidi e comete; sonde come Voyager hanno visitato i pianeti giganti.", why: "Con la gravità di Newton nel 1846 fu previsto con i calcoli dove si trovava Nettuno prima ancora di vederlo. Nel 2006 gli astronomi hanno deciso una definizione precisa di pianeta: Plutone è diventato «pianeta nano»." }
      ],
      edges: [ ["cielo", "geo", "prima idea"], ["cielo", "aristarco", "idea alternativa"], ["geo", "copernico", "messo in dubbio da"], ["aristarco", "copernico", "ripresa da"], ["copernico", "galileo", "prove con il cannocchiale"], ["copernico", "keplero", "calcoli più precisi"], ["galileo", "newton", "leggi del moto"], ["keplero", "newton", "orbite ellittiche"], ["newton", "oggi", "permette di prevedere"] ]
    }
  ],
  glossary: [
    { t: "Stella", d: "Corpo celeste che produce luce e calore propri, come il Sole." },
    { t: "Pianeta", d: "Corpo celeste che gira intorno a una stella e non ha luce propria." },
    { t: "Satellite", d: "Corpo celeste che gira intorno a un pianeta, come la Luna." },
    { t: "Orbita", d: "Il percorso che un corpo celeste segue girando intorno a un altro." },
    { t: "Rotazione", d: "Movimento della Terra su se stessa: dura circa 24 ore." },
    { t: "Rivoluzione", d: "Movimento della Terra intorno al Sole: dura circa 365 giorni." },
    { t: "Gravità", d: "Forza che attira i corpi l'uno verso l'altro." },
    { t: "Cometa", d: "Corpo di ghiaccio e polvere che, vicino al Sole, forma una coda luminosa." },
    { t: "Asteroide", d: "Roccia di forma irregolare che orbita intorno al Sole." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il Sole è…", options: ["un pianeta", "una stella", "un satellite", "una cometa"], answer: 1, explain: "Il Sole è una stella: produce luce e calore propri." },
      { type: "num", q: "Quanti sono i pianeti del Sistema Solare?", answer: 8, tol: 0, explain: "Sono 8: da Mercurio a Nettuno. Plutone è un pianeta nano." },
      { type: "mc", q: "Quale di questi pianeti è roccioso?", options: ["Giove", "Saturno", "Marte", "Nettuno"], answer: 2, explain: "I pianeti rocciosi sono Mercurio, Venere, Terra e Marte." },
      { type: "text", q: "Come si chiama il pianeta famoso per i suoi grandi anelli?", answer: ["saturno"], explain: "Saturno ha anelli formati da miliardi di pezzi di ghiaccio e roccia." },
      { type: "tf", q: "La Luna produce luce propria.", answer: false, explain: "La Luna riflette la luce del Sole." },
      { type: "mc", q: "Dove si trova la fascia degli asteroidi?", options: ["Tra Terra e Marte", "Tra Marte e Giove", "Dopo Nettuno", "Tra Venere e Terra"], answer: 1, explain: "La fascia principale degli asteroidi si trova tra Marte e Giove." },
      { type: "mc", q: "Quanto dura circa la rotazione della Terra?", options: ["1 ora", "24 ore", "7 giorni", "365 giorni"], answer: 1, explain: "La Terra gira su se stessa in circa 24 ore." },
      { type: "order", q: "Metti in ordine dal più vicino al più lontano dal Sole", items: ["Mercurio", "Terra", "Marte", "Saturno", "Nettuno"], explain: "Ordine: Mercurio, Venere, Terra, Marte, Giove, Saturno, Urano, Nettuno." },
      { type: "tf", q: "Venere è più calda di Mercurio, anche se è più lontana dal Sole.", answer: true, explain: "La spessa atmosfera di Venere trattiene il calore (effetto serra)." },
      { type: "mc", q: "Le \"stelle cadenti\" sono…", options: ["stelle che cadono", "frammenti che bruciano nell'atmosfera", "satelliti artificiali", "pianeti nani"], answer: 1, explain: "Sono meteore: piccoli frammenti che bruciano entrando nell'atmosfera." },
      { type: "num", q: "Quanti minuti impiega circa la luce del Sole per arrivare sulla Terra?", answer: 8, tol: 1, unit: "minuti", explain: "Circa 8 minuti (150 milioni di km a 300.000 km/s)." },
      { type: "text", q: "Come si chiama il movimento della Terra intorno al Sole?", answer: ["rivoluzione", "moto di rivoluzione", "la rivoluzione"], explain: "È la rivoluzione: dura circa un anno." }
    ]
  }
});
