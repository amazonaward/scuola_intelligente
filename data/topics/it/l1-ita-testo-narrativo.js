TOPIC('it', {
  id: "l1-ita-testo-narrativo",
  title: "Il testo narrativo",
  intro: "Raccontiamo storie da quando esiste il linguaggio: al fuoco, nei romanzi, nelle serie tv, nei videogiochi. Ma come è costruita una storia? In questa lezione impari gli <b>strumenti dell'analisi narrativa</b>: la differenza tra <b>fabula e intreccio</b>, il <b>narratore</b> e il <b>punto di vista</b>, i <b>personaggi</b>, il <b>tempo</b> e lo <b>spazio</b>. Sono gli stessi strumenti che usano critici, sceneggiatori e scrittori.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è un testo narrativo",
      html: `<p>Un <b>testo narrativo</b> racconta una serie di <b>fatti</b> (reali o inventati) collegati tra loro nel tempo e da rapporti di causa ed effetto, che coinvolgono dei <b>personaggi</b>. Narrativi sono il romanzo, il racconto, la novella, la fiaba, la favola, ma anche un articolo di cronaca, un fumetto, un film.</p>
<p>Un testo narrativo è di solito fatto di diversi tipi di <b>sequenze</b>:</p>
<ul>
<li><b>narrative</b>: raccontano i fatti, fanno procedere l'azione;</li>
<li><b>descrittive</b>: presentano luoghi, persone, oggetti, e fermano per un attimo l'azione;</li>
<li><b>dialogiche</b>: riportano le parole dei personaggi (discorso diretto);</li>
<li><b>riflessive</b>: contengono pensieri e commenti del narratore o dei personaggi.</li>
</ul>
<p>Una storia ha una struttura tipica in quattro fasi, che chiamiamo <b>schema narrativo</b>:</p>
<ol>
<li><b>Situazione iniziale</b> (equilibrio): chi, dove, quando.</li>
<li><b>Rottura dell'equilibrio</b> (complicazione): succede qualcosa che mette in moto la storia.</li>
<li><b>Svolgimento</b> (peripezie): il protagonista affronta ostacoli (spesso culmine o <i>climax</i>).</li>
<li><b>Scioglimento</b> e <b>situazione finale</b>: il problema viene risolto, nasce un nuovo equilibrio (a volte aperto).</li>
</ol>`
    },
    {
      type: "svg",
      title: "Lo schema narrativo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polyline points="30,230 130,230 200,170 290,120 380,60 470,170 570,200" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="30" cy="230" r="7" fill="#2563eb"/><circle cx="130" cy="230" r="7" fill="#dc2626"/><circle cx="380" cy="60" r="8" fill="#f59e0b"/><circle cx="570" cy="200" r="7" fill="#16a34a"/>
<text x="30" y="260" font-size="14" fill="#0f172a">Situazione</text><text x="30" y="278" font-size="14" fill="#0f172a">iniziale</text>
<text x="105" y="205" font-size="14" fill="#dc2626" font-weight="bold">Rottura</text><text x="105" y="222" font-size="14" fill="#dc2626" font-weight="bold">equilibrio</text>
<text x="215" y="115" font-size="14" fill="#0f172a">Svolgimento</text><text x="215" y="133" font-size="14" fill="#0f172a">(peripezie)</text>
<text x="395" y="55" font-size="14" fill="#b45309" font-weight="bold">Climax</text>
<text x="470" y="210" font-size="14" fill="#0f172a">Scioglimento</text><text x="470" y="288" font-size="14" fill="#16a34a" font-weight="bold">Situazione finale</text>
<text x="300" y="25" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">La tensione sale e poi scende</text>
</svg>`,
      caption: "La linea blu rappresenta la tensione narrativa: cresce fino al climax e poi si scioglie."
    },
    {
      type: "text",
      title: "2. Fabula e intreccio",
      html: `<p>Nel Novecento i <b>formalisti russi</b> (Viktor Šklovskij, Boris Tomaševskij) hanno distinto due livelli:</p>
<ul>
<li><b>Fabula</b>: i fatti nell'<b>ordine cronologico e causale</b> in cui sono \"realmente\" accaduti.</li>
<li><b>Intreccio</b>: i fatti come l'autore <b>sceglie di presentarli</b>, anche in ordine diverso (anticipazioni, flashback, salti), per creare suspense, sorpresa o significato.</li>
</ul>
<p>Esempio: in un giallo la fabula parte dal delitto e arriva alla scoperta del colpevole; l'intreccio comincia dal cadavere e ricostruisce <i>a ritroso</i> come si è arrivati lì. La fabula è una \"cronaca\"; l'intreccio è l'<b>arte</b> di raccontare.</p>`
    },
    {
      type: "example",
      title: "Stessa fabula, due intrecci",
      html: `<p><b>Fabula</b>: (1) Sara perde il portafoglio, (2) un passante lo trova, (3) lo porta alla polizia, (4) Sara lo recupera.</p>
<p><b>Intreccio A</b> (lineare): 1-2-3-4, come nell'ordine dei fatti.</p>
<p><b>Intreccio B</b> (con flashback): si apre con Sara che ritira il portafoglio dalla polizia (4); poi si torna indietro: \"tre ore prima\" lo aveva perso (1)... Il lettore si domanda subito <i>come ci è arrivato</i>: nasce curiosità. La storia è identica, l'effetto è diverso.</p>`
    },
    {
      type: "widget",
      title: "Fabula o intreccio?",
      widget: "classify",
      options: { groups: ["Fa parte dell'intreccio (tecnica narrativa)", "Fa parte della fabula (ordine dei fatti)"], items: [["Flashback", 0], ["Anticipazione", 0], ["Ordine cronologico dei fatti", 1], ["Racconto che inizia dalla fine", 0], ["La sequenza reale causa-effetto", 1]] },
      caption: "Distingui le tecniche dell'autore dall'ordine reale dei fatti."
    },
    {
      type: "text",
      title: "3. Il narratore e il punto di vista",
      html: `<p>Non bisogna confondere l'<b>autore</b> (la persona reale che scrive) con il <b>narratore</b> (la voce che racconta all'interno del testo). Il narratore può essere:</p>
<ul>
<li><b>Esterno</b> (3ª persona): non partecipa alla storia (\"Lucia correva verso casa...\"). Può essere <b>onnisciente</b> (sa tutto, anche i pensieri), oppure limitarsi a ciò che si può osservare dall'esterno.</li>
<li><b>Interno</b> (1ª persona): è un personaggio della storia, protagonista o testimone (\"Correvo verso casa...\"). Conosce solo ciò che sa e vede lui, e può essere <b>inattendibile</b>.</li>
</ul>
<p>Il teorico <b>Gérard Genette</b> (1930-2018) distingue anche la <b>focalizzazione</b>, cioè <i>da quale punto di vista</i> vediamo i fatti:</p>
<ul>
<li><b>Focalizzazione zero</b>: il narratore sa più dei personaggi (onniscienza). Es. <i>I promessi sposi</i> di Manzoni.</li>
<li><b>Focalizzazione interna</b>: vediamo attraverso gli occhi di un personaggio e sappiamo solo ciò che sa lui.</li>
<li><b>Focalizzazione esterna</b>: il narratore sa meno del personaggio e riporta solo ciò che si vede e si sente, senza spiegare i pensieri.</li>
</ul>
<p>Le <b>parole dei personaggi</b> si riportano in tre modi: <b>discorso diretto</b> (virgolette o lineette: \"Vengo\", disse), <b>indiretto</b> (Disse che sarebbe venuto) e <b>indiretto libero</b> (senza introduzione, la voce del personaggio si mescola con quella del narratore: <i>Andò alla finestra. Che noia, questa pioggia!</i>).</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il punto di vista",
      intro: "Il punto di vista è la cosa più difficile da vedere in un testo. Ecco tre metafore.",
      tabs: [
        { label: "🎥 La telecamera", html: "<p>Pensa al narratore come a una <b>telecamera</b>. Con la <b>focalizzazione zero</b> la telecamera è un drone che vede tutto dall'alto, anche dentro le case. Con la <b>focalizzazione interna</b> è un videogioco in prima persona: vedi solo ciò che vede il personaggio. Con la <b>focalizzazione esterna</b> è una telecamera di sorveglianza: registra azioni e parole, ma non i pensieri.</p>" },
        { label: "🔁 Riscrivi la scena", html: "<p>Il modo migliore per capire il punto di vista è <b>cambiarlo</b>. Scena: un ragazzo arriva tardi a scuola. <br><b>Esterno onnisciente</b>: <i>Marco entrò in classe ansioso: sapeva che il professore era già furioso.</i> <br><b>Interno (1ª persona)</b>: <i>Entrai e mi si gelò il sangue: il prof mi fissava.</i> <br><b>Esterno oggettivo</b>: <i>Marco aprì la porta. Il professore smise di parlare.</i><br>Cambiano il tono, le informazioni, la simpatia che proviamo per il personaggio.</p>" },
        { label: "👁️ Schema dei punti di vista", html: "<p>Lo schema mostra quanta conoscenza ha il narratore rispetto al personaggio.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Focalizzazione (Genette)</text><rect x="30" y="60" width="160" height="150" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="110" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ZERO</text><text x="110" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narratore &gt; personaggio</text><text x="110" y="150" font-size="14" text-anchor="middle" fill="#0f172a">sa tutto</text><text x="110" y="175" font-size="14" text-anchor="middle" fill="#0f172a">(onniscienza)</text><rect x="220" y="60" width="160" height="150" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">INTERNA</text><text x="300" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narratore = personaggio</text><text x="300" y="150" font-size="14" text-anchor="middle" fill="#0f172a">vede con i suoi occhi</text><rect x="410" y="60" width="160" height="150" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="490" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ESTERNA</text><text x="490" y="125" font-size="14" text-anchor="middle" fill="#0f172a">narratore &lt; personaggio</text><text x="490" y="150" font-size="14" text-anchor="middle" fill="#0f172a">solo azioni e parole</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Il punto di vista cambia cosa sappiamo e cosa proviamo</text></svg>` }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: narratore e fabula",
      questions: [
        { type: "mc", q: "In un racconto in prima persona il narratore è...", options: ["esterno", "interno", "sempre onnisciente"], answer: 1, explain: "Chi dice 'io' è un personaggio della storia: narratore interno." },
        { type: "tf", q: "L'intreccio rispetta sempre l'ordine cronologico dei fatti.", answer: false, explain: "L'intreccio può alterare l'ordine con flashback e anticipazioni; è la fabula a seguire l'ordine reale." },
        { type: "mc", q: "'Si sedette. Che noia, quella lezione!' è un esempio di...", options: ["discorso diretto", "discorso indiretto libero", "descrizione"], answer: 1, explain: "Il pensiero del personaggio entra nel racconto senza verbi introduttivi né virgolette." }
      ]
    },
    {
      type: "text",
      title: "4. I personaggi",
      html: `<p>I personaggi sono gli esseri (persone, animali, creature fantastiche) che agiscono nella storia. Secondo il loro <b>ruolo</b> si distinguono:</p>
<ul>
<li><b>Protagonista</b>: il personaggio centrale, la cui storia seguiamo (è l'<b>eroe</b> nelle fiabe).</li>
<li><b>Antagonista</b>: chi si oppone al protagonista.</li>
<li><b>Aiutante</b> (o alleato): chi lo sostiene. <b>Comprimari</b> e <b>personaggi secondari</b>: completano l'azione.</li>
</ul>
<p>Lo scrittore inglese <b>E. M. Forster</b> (<i>Aspetti del romanzo</i>, 1927) ha distinto i personaggi <b>piatti</b> (definiti da una sola qualità, prevedibili) dai personaggi <b>a tutto tondo</b> (complessi, capaci di sorprendere e cambiare). Un personaggio può essere:</p>
<ul>
<li><b>statico</b> (non cambia nel corso della storia) o <b>dinamico</b> (si trasforma);</li>
<li><b>tipo</b> (rappresenta una categoria, come l'avaro) o <b>individuo</b> (unico).</li>
</ul>
<p>Il lettore conosce un personaggio in vari modi: <b>caratterizzazione diretta</b> (il narratore lo descrive: \"era un uomo avaro\") e <b>indiretta</b> (lo deduciamo da azioni, parole, scelte e oggetti che possiede). Quest'ultima è preferita nella narrativa moderna: <i>\"show, don't tell\"</i> (mostra, non dire).</p>`
    },
    {
      type: "example",
      title: "Come \"vediamo\" un personaggio",
      html: `<p>Confronta due modi di presentare lo stesso personaggio:</p>
<p><b>Diretto</b>: <i>\"Giulia era una persona molto generosa.\"</i></p>
<p><b>Indiretto</b>: <i>\"Giulia svuotò il portafoglio per l'uomo seduto sul marciapiede, poi tornò a casa a piedi.\"</i></p>
<p>Nel secondo caso lo deduciamo dai fatti: il lettore partecipa attivamente, quindi si coinvolge di più.</p>`
    },
    {
      type: "text",
      title: "5. Tempo e spazio",
      html: `<p>Il <b>tempo</b> ha due dimensioni:</p>
<ul>
<li><b>Tempo della storia</b>: la durata reale degli eventi (anni, un giorno).</li>
<li><b>Tempo del racconto</b>: quanto spazio il testo dedica a quegli eventi (righe, pagine).</li>
</ul>
<p>Il rapporto tra i due crea il <b>ritmo</b>:</p>
<ul>
<li><b>Scena</b>: tempo della storia ≈ tempo del racconto (soprattutto dialoghi).</li>
<li><b>Sommario</b>: lunghi periodi raccontati in poche righe (\"Passarono dieci anni\").</li>
<li><b>Ellissi</b>: un tratto di tempo è saltato del tutto.</li>
<li><b>Pausa</b>: il racconto si ferma (descrizione, riflessione) mentre la storia non avanza.</li>
<li><b>Dilatazione</b>: un attimo dura molte righe (la lunga attesa).</li>
</ul>
<p>E per l'ordine: <b>analessi</b> (flashback: salto nel passato), <b>prolessi</b> (anticipazione del futuro). Il tempo può essere <b>cronologico</b> (esterno, degli orologi) o <b>psicologico</b> (interiore: un'ora di noia sembra eterna).</p>
<p>Lo <b>spazio</b> è il luogo dell'azione: <b>reale</b> o <b>immaginario</b>, <b>aperto</b> o <b>chiuso</b>. Non è solo uno sfondo: crea atmosfera, esprime lo stato d'animo, a volte è un simbolo (il castello, il bosco, il mare).</p>`
    },
    {
      type: "curiosity",
      title: "I \"Promessi sposi\" iniziano con un paesaggio",
      html: `<p>Il celebre incipit di Alessandro Manzoni, <i>\"Quel ramo del lago di Como, che volge a mezzogiorno...\"</i>, apre la storia con una <b>lunga descrizione</b> dei luoghi (pausa narrativa) prima ancora di introdurre i personaggi. Il romanzo, pubblicato nella versione definitiva nel 1840-42, ha un narratore esterno <b>onnisciente</b> e spesso ironico, che commenta i fatti. Fa credere di riscrivere un manoscritto secentesco di un anonimo: è l'espediente del \"manoscritto ritrovato\".</p>`
    },
    {
      type: "curiosity",
      title: "Il tempo dei videogiochi e delle serie",
      html: `<p>Le serie tv usano continuamente le tecniche viste: il <i>flashback</i> (analessi), l'<i>ellissi</i> (\"tre mesi dopo\") e il <i>cliffhanger</i> (finale sospeso nel momento di massima tensione, come in una serie lasciata a metà). Anche i videogiochi giocano sul punto di vista: la telecamera in prima persona è una focalizzazione interna, quella dall'alto è onniscienza.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: gli elementi del testo narrativo",
      nodes: [
        { id: "tn", label: "Testo narrativo", x: 50, y: 8, color: "#3b82f6", html: "Racconta fatti collegati nel tempo e per causa-effetto, vissuti da personaggi.", why: "Raccontare è una delle forme più antiche del pensiero: dà ordine all'esperienza e la rende comunicabile." },
        { id: "fab", label: "Fabula e intreccio", x: 18, y: 38, color: "#10b981", html: "Fabula = ordine cronologico dei fatti; intreccio = ordine scelto dall'autore.", why: "Distinzione proposta dai formalisti russi (anni Dieci-Venti del Novecento) per spiegare che l'arte sta nel modo di raccontare, non solo in ciò che si racconta." },
        { id: "nar", label: "Narratore e punto di vista", x: 82, y: 38, color: "#f59e0b", html: "Narratore esterno o interno; focalizzazione zero, interna, esterna.", why: "Chi racconta decide cosa sappiamo e quanto ci fidiamo. Genette (<i>Figure III</i>, 1972) ha sistematizzato i concetti per analizzare con precisione." },
        { id: "per", label: "Personaggi", x: 30, y: 72, color: "#8b5cf6", html: "Protagonista, antagonista, aiutanti; piatti o a tutto tondo.", why: "I personaggi danno senso emotivo alla trama: Forster (1927) ha mostrato che un personaggio ben costruito sorprende in modo convincente." },
        { id: "ts", label: "Tempo e spazio", x: 70, y: 72, color: "#ef4444", html: "Tempo della storia e del racconto; analessi e prolessi; luoghi come atmosfera e simbolo.", why: "Il tempo del racconto crea ritmo e suspense; lo spazio non è solo sfondo ma carica di significato la vicenda." }
      ],
      edges: [["tn", "fab", "si organizza in"], ["tn", "nar", "è filtrato da"], ["tn", "per", "ha"], ["tn", "ts", "si colloca in"]]
    },
    {
      type: "remember",
      title: "Da portare con te",
      html: `<p>Per analizzare un testo narrativo chiediti: <b>chi racconta?</b> (narratore), <b>da dove vede?</b> (focalizzazione), <b>in che ordine?</b> (fabula/intreccio), <b>chi agisce?</b> (personaggi), <b>quando e dove?</b> (tempo e spazio). Poi cerca la <b>struttura</b>: situazione iniziale, rottura, svolgimento, scioglimento.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: personaggi, tempo e spazio",
      questions: [
        { type: "mc", q: "Un personaggio costruito su un'unica qualità e prevedibile è, secondo Forster...", options: ["a tutto tondo", "piatto", "dinamico"], answer: 1, explain: "Forster definisce 'piatti' i personaggi con un'unica caratteristica." },
        { type: "mc", q: "'Dieci anni dopo, Anna tornò al paese.' Qui il tempo è trattato con...", options: ["una pausa", "un sommario/ellissi", "una scena"], answer: 1, explain: "Dieci anni sono riassunti in poche parole." },
        { type: "tf", q: "Un flashback è un'analessi.", answer: true, explain: "È un salto indietro nel tempo della storia." }
      ]
    }
  ],
  glossary: [
    { t: "Fabula", d: "Fatti narrati nell'ordine cronologico e causale in cui sono accaduti." },
    { t: "Intreccio", d: "Fatti narrati nell'ordine scelto dall'autore." },
    { t: "Narratore", d: "La voce che racconta la storia, distinta dall'autore." },
    { t: "Focalizzazione", d: "Il punto di vista da cui sono presentati i fatti." },
    { t: "Analessi", d: "Salto indietro nel tempo (flashback)." },
    { t: "Prolessi", d: "Anticipazione di fatti futuri." },
    { t: "Ellissi", d: "Salto temporale in cui un periodo non viene raccontato." },
    { t: "Climax", d: "Il momento di massima tensione della storia." },
    { t: "Antagonista", d: "Personaggio che si oppone al protagonista." },
    { t: "Discorso indiretto libero", d: "Le parole o i pensieri del personaggio si fondono con la voce del narratore, senza segnali." },
    { t: "Cliffhanger", d: "Finale di un episodio sospeso nel punto di massima tensione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa distingue la fabula dall'intreccio?", options: ["La lunghezza del testo", "L'ordine in cui sono presentati i fatti", "Il numero di personaggi", "Il tipo di narratore"], answer: 1, explain: "La fabula segue l'ordine cronologico; l'intreccio l'ordine scelto dall'autore." },
      { type: "tf", q: "Autore e narratore sono sempre la stessa cosa.", answer: false, explain: "L'autore è la persona reale; il narratore è una voce creata dentro il testo." },
      { type: "mc", q: "Con focalizzazione interna il lettore...", options: ["sa più dei personaggi", "sa solo ciò che sa il personaggio", "non conosce i pensieri e vede solo azioni", "conosce il futuro"], answer: 1, explain: "Vediamo la storia attraverso gli occhi di un personaggio." },
      { type: "text", q: "Come si chiama il salto indietro nel tempo in un racconto?", answer: ["analessi", "flashback", "l'analessi"], explain: "Analessi (flashback): si rievoca un fatto passato." },
      { type: "order", q: "Metti in ordine le fasi dello schema narrativo.", items: ["Situazione iniziale", "Rottura dell'equilibrio", "Svolgimento", "Scioglimento"], explain: "Si parte dall'equilibrio, si rompe, si sviluppa e infine si scioglie." },
      { type: "mc", q: "'Era un uomo avaro' è un esempio di caratterizzazione...", options: ["diretta", "indiretta", "ironica", "dialogica"], answer: 0, explain: "Il narratore dichiara direttamente la qualità." },
      { type: "mc", q: "Una descrizione che ferma l'azione è...", options: ["una scena", "una pausa", "un'ellissi", "un climax"], answer: 1, explain: "Il tempo della storia non avanza mentre il racconto continua: pausa." },
      { type: "num", q: "Quante sono le fasi dello schema narrativo di base descritto nella lezione (situazione iniziale, rottura, svolgimento, scioglimento)?", answer: 4, tol: 0, explain: "Sono quattro." },
      { type: "mc", q: "Nel 'Promessi sposi' il narratore è...", options: ["interno protagonista", "esterno onnisciente", "esterno oggettivo", "interno testimone"], answer: 1, explain: "Racconta dall'esterno, sa tutto e commenta." }
    ]
  }
});
