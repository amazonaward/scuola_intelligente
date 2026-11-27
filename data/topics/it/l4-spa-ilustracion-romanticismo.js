TOPIC('it', {
  id: "l4-spa-ilustracion-romanticismo",
  title: "Illuminismo e Romanticismo",
  intro: "Dopo il Siglo de Oro la Spagna attraversa due grandi rivoluzioni culturali nel giro di pochi decenni. Nel Settecento l'<b>Illustración</b> porta la ragione, l'educazione e la critica ai pregiudizi: <b>Moratín</b> costruisce commedie ordinate che difendono la libertà di scelta delle giovani. Nell'Ottocento arriva il <b>Romanticismo</b>: sentimento, ribellione, passione, individualismo. <b>Larra</b> scrive articoli taglienti contro la burocrazia, <b>Espronceda</b> canta il pirata libero, <b>Zorrilla</b> riscrive Don Juan e <b>Bécquer</b> ridefinisce la poesia come un sussurro. Qui impari a riconoscere i due movimenti, a leggere i testi e a vedere perché il secondo è nato come reazione al primo. 🕯️🌙",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Il Settecento spagnolo: l'Illustración",
      html: `<p>Nel Settecento la Spagna passa dalla dinastia degli Asburgo a quella dei <b>Borbone</b> (con Felipe V, 1700). Con <b>Carlos III</b> (re dal 1759 al 1788) si afferma il <b>dispotismo illuminato</b>: il re governa in modo assoluto, ma promuove riforme in nome della ragione e dell'utilità pubblica (strade, scuole, agricoltura, limitazione dei privilegi della Chiesa). In Spagna l'Illuminismo si chiama <b>Ilustración</b> ed è più moderato che in Francia: pochi attaccano la religione, molti vogliono modernizzare il Paese.</p>
<p>Istituzioni e protagonisti:</p>
<ul>
<li>La <b>Real Academia Española</b> è fondata nel <b>1713</b> per «fijar» la lingua; pubblica il <i>Diccionario de Autoridades</i> (1726-1739).</li>
<li><b>Benito Jerónimo Feijoo</b> (1676-1764), monaco benedettino, attacca superstizioni e false credenze nel <i>Teatro crítico universal</i> (1726-1740).</li>
<li><b>Gaspar Melchor de Jovellanos</b> (1744-1811): politico e scrittore, difende istruzione e riforme agrarie.</li>
<li><b>José Cadalso</b> (1741-1782): <i>Cartas marruecas</i> (pubblicate nel 1789), lettere di un viaggiatore marocchino che osserva i difetti della Spagna.</li>
<li>Favolisti: <b>Samaniego</b> e <b>Iriarte</b> scrivono favole in versi con morale.</li>
</ul>
<p>Lo stile letterario è il <b>Neoclassicismo</b>: ordine, chiarezza, misura, scopo educativo. L'arte deve «divertire e insegnare». Nel teatro si impongono le <b>tre unità</b> (azione, tempo, luogo): una sola trama, in un giorno, in un unico luogo; si rifiuta il teatro barocco, giudicato troppo fantasioso.</p>`
    },
    {
      type: "widget",
      title: "Dal Settecento all'Ottocento",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: 1713, label: "Fondazione della Real Academia Española", icon: "📘" },
          { year: 1759, label: "Carlos III diventa re", icon: "👑" },
          { year: 1806, label: "El sí de las niñas di Moratín", icon: "🎭" },
          { year: 1808, label: "Invasione napoleonica e guerra d'indipendenza", icon: "⚔️" },
          { year: 1833, label: "Morte di Fernando VII", icon: "🕯️" },
          { year: 1837, label: "Morte di Larra", icon: "✒️" },
          { year: 1844, label: "Don Juan Tenorio di Zorrilla", icon: "🌹" },
          { year: 1871, label: "Rimas di Bécquer (postume)", icon: "🌙" }
        ]
      },
      caption: "Otto date chiave dal dispotismo illuminato al Romanticismo."
    },
    {
      type: "text",
      title: "2. Leandro Fernández de Moratín e il teatro neoclassico",
      html: `<p><b>Leandro Fernández de Moratín</b> (Madrid 1760 – Parigi 1828) è il maggior autore teatrale dell'Illustración. Scrive <b>cinque commedie</b> che ritraggono la società borghese e criticano i difetti dell'educazione. Nel 1792 pubblica <i>La comedia nueva o El café</i>, una satira del teatro popolare, ancora legato ai modelli barocchi. Il capolavoro è <b>El sí de las niñas</b>, rappresentato a Madrid nel <b>1806</b>.</p>
<p><b>La trama</b>: la giovane <b>Doña Francisca</b> (Paquita), educata in convento, è stata promessa dalla madre <b>Doña Irene</b> al ricco e maturo <b>Don Diego</b>. Paquita ama in segreto <b>Don Carlos</b>, un giovane ufficiale, che scopriamo essere nipote di Don Diego. Tutto si svolge in una locanda di Alcalá de Henares, in una sola notte: le unità aristoteliche sono rispettate. Alla fine Don Diego, uomo ragionevole, capisce l'errore, rinuncia al matrimonio e unisce i due giovani.</p>
<p><b>Il messaggio</b>: i matrimoni combinati per convenienza e le ragazze educate a dire sempre «sì» (da qui il titolo: <i>el sí de las niñas</i>) producono infelicità. Moratín vuole una società in cui i giovani possano scegliere con libertà e consapevolezza. L'opera ebbe grande successo e anche polemiche.</p>
<p>Lo stile è lineare, chiaro, in prosa, con dialoghi naturali. Non ci sono mostri o duelli: il conflitto è tra mentalità, tra educazione tradizionale e ragione.</p>`
    },
    {
      type: "decision",
      title: "Don Diego deve scegliere",
      html: `<p>Sei <b>Don Diego</b>, uomo maturo e buono, promesso sposo di Paquita, che hai appena scoperto essere innamorata di tuo nipote Don Carlos. Se sposi Paquita, la madre sarà felice, la famiglia sarà onorata, ma la ragazza non sarà felice.</p>`,
      question: "Tu cosa avresti fatto?",
      options: [
        { label: "Sposare comunque Paquita: la parola data conta", outcome: "Salveresti le convenienze sociali, ma condanneresti una giovane a un matrimonio senza amore." },
        { label: "Rinunciare e favorire l'unione tra Paquita e Don Carlos", outcome: "È la scelta di Don Diego: pone la felicità dei giovani prima del proprio interesse." },
        { label: "Punire severamente il nipote", outcome: "Sarebbe la soluzione dell'epoca barocca, basata sull'onore e sull'autorità: Moratín la rifiuta." }
      ],
      answer: 1,
      explain: "Don Diego sceglie la ragione e la generosità. Il suo gesto riassume il programma dell'Illustración: educare, convincere, usare l'intelligenza al posto dell'autorità cieca."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Illustración",
      questions: [
        { type: "mc", q: "In quale anno viene rappresentato El sí de las niñas?", options: ["1806", "1706", "1906"], answer: 0, explain: "Fu messo in scena a Madrid nel 1806." },
        { type: "tf", q: "Il Neoclassicismo teatrale rispetta le tre unità di azione, tempo e luogo.", answer: true, explain: "El sí de las niñas si svolge in una sola notte, in una locanda." },
        { type: "mc", q: "Che cos'è il dispotismo illuminato?", options: ["Un governo assoluto che promuove riforme razionali", "Una repubblica popolare", "Una monarchia costituzionale"], answer: 0, explain: "Il re mantiene tutto il potere ma lo usa per riforme in nome della ragione." }
      ]
    },
    {
      type: "text",
      title: "3. Il Romanticismo arriva in Spagna",
      html: `<p>Il <b>Romanticismo</b> nasce in Germania e in Inghilterra alla fine del Settecento e rivendica ciò che l'Illuminismo trascurava: il sentimento, l'immaginazione, la libertà dell'individuo, il passato nazionale (soprattutto il Medioevo), la natura selvaggia. In Spagna arriva in ritardo, dopo la morte del re assolutista <b>Fernando VII</b> (<b>1833</b>): fino ad allora molti intellettuali liberali erano in esilio in Inghilterra e in Francia, dove conobbero Byron, Walter Scott e Victor Hugo. Al ritorno portarono quelle idee.</p>
<p>I tratti del Romanticismo spagnolo:</p>
<ul>
<li><b>Libertà</b>: in politica e in arte, rifiuto delle regole rigide (anche le tre unità).</li>
<li><b>Individualismo e passione</b>: eroi ribelli, amori impossibili, sentimento forte.</li>
<li><b>Il «mal du siècle»</b>: malinconia, noia, senso di insoddisfazione.</li>
<li><b>Il passato nazionale</b>: leggende, ballate medievali, il Medioevo e il Siglo de Oro.</li>
<li><b>La natura</b> come specchio dell'anima: tempeste, notti, rovine.</li>
</ul>
<p>I generi preferiti sono il teatro in versi (drammi storici), la poesia lirica e narrativa (leggende), il romanzo storico e l'articolo di costume (<i>artículo de costumbres</i>).</p>`
    },
    {
      type: "text",
      title: "4. Larra, Espronceda, Zorrilla",
      html: `<p><b>Mariano José de Larra</b> (Madrid 1809 – 1837), firmava con lo pseudonimo <b>Fígaro</b>. Scrisse <b>articoli di costume</b> in cui satireggia la burocrazia, l'ipocrisia e la pigrizia nazionale. Il più celebre è <b>«Vuelva usted mañana»</b> (1833): uno straniero, Monsieur Sans-Délai, prova a sbrigare una pratica a Madrid e ogni funzionario gli risponde «torni domani». In realtà la risposta non è mai pronta: ironia amara sulla lentezza spagnola. Larra si uccise nel 1837 a soli 27 anni, dopo una delusione d'amore e di politica. In un articolo del 1836, per il giorno dei morti, scrisse: «<i>Aquí yace media España; murió de la otra media</i>».</p>
<p><b>José de Espronceda</b> (1808-1842) è il poeta della ribellione. La sua <b>Canción del pirata</b> (1835) è un inno alla libertà assoluta:</p>
<blockquote><i>Que es mi barco mi tesoro,<br>
que es mi dios la libertad,<br>
mi ley, la fuerza y el viento,<br>
mi única patria, la mar.</i></blockquote>
<p>Il pirata è l'eroe romantico: fuori dalla società, padrone di sé, sfida le regole. Espronceda scrisse anche <i>El estudiante de Salamanca</i> (1840), poema narrativo su un seduttore dannato, e <i>El diablo mundo</i> (incompiuto).</p>
<p><b>Duque de Rivas</b> con <i>Don Álvaro o la fuerza del sino</i> (1835) porta sulla scena il primo grande dramma romantico spagnolo: il destino, il duello, la morte, il convento. <b>José Zorrilla</b> (1817-1893) scrive nel 1844 <b>Don Juan Tenorio</b>, che ancora oggi si rappresenta ogni anno intorno al 1° novembre: un Don Juan che, dopo una vita di inganni, si salva grazie all'amore sincero di Doña Inés. Un passo celebre:</p>
<blockquote><i>¿No es verdad, ángel de amor,<br>
que en esta apartada orilla<br>
más pura la luna brilla<br>
y se respira mejor?</i></blockquote>`
    },
    {
      type: "example",
      title: "Esempio: leggere la «Canción del pirata»",
      html: `<p>Ecco come si commenta il passo di Espronceda.</p>
<ul>
<li><b>Tema</b>: il desiderio di libertà assoluta; rifiuto delle leggi sociali.</li>
<li><b>Forma</b>: strofe di versi brevi (ottosillabi) con rima assonante nei versi pari; musicalità da canzone popolare.</li>
<li><b>Figure</b>: <b>metafora</b> (il mare come patria), <b>anafora</b> («que es mi…»), <b>personificazione</b> del vento e del mare, <b>antitesi</b> tra ordine sociale e libertà selvaggia.</li>
<li><b>Atteggiamento</b>: ribellione orgogliosa, che nasconde una malinconia: il pirata è anche un esiliato che non ha altra patria che il mare.</li>
<li><b>Contesto</b>: Espronceda era stato esiliato, per le idee liberali, a Londra e a Parigi.</li>
</ul>
<p>Confrontalo con Moratín: mentre l'Illustración dice «usa la ragione per riformare la società», il Romanticismo dice «ascolta i tuoi sentimenti, anche contro la società».</p>`
    },
    {
      type: "svg",
      title: "Illustración e Romanticismo a confronto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Due modi di vedere il mondo</text>
<rect x="20" y="45" width="270" height="230" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="155" y="72" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Illustración (1700)</text>
<text x="40" y="104" font-size="14" fill="#1e293b">• Ragione, ordine, misura</text>
<text x="40" y="132" font-size="14" fill="#1e293b">• Utile e istruttivo</text>
<text x="40" y="160" font-size="14" fill="#1e293b">• Tre unità nel teatro</text>
<text x="40" y="188" font-size="14" fill="#1e293b">• Prosa chiara</text>
<text x="40" y="216" font-size="14" fill="#1e293b">• Moratín, Jovellanos, Feijoo</text>
<text x="40" y="250" font-size="14" fill="#2563eb" font-weight="bold">Chiede: «che cosa è ragionevole?»</text>
<rect x="310" y="45" width="270" height="230" rx="12" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
<text x="445" y="72" font-size="17" text-anchor="middle" fill="#991b1b" font-weight="bold">Romanticismo (1830)</text>
<text x="330" y="104" font-size="14" fill="#1e293b">• Sentimento, libertà</text>
<text x="330" y="132" font-size="14" fill="#1e293b">• Individuo ribelle</text>
<text x="330" y="160" font-size="14" fill="#1e293b">• Nessuna regola fissa</text>
<text x="330" y="188" font-size="14" fill="#1e293b">• Medioevo, notte, natura</text>
<text x="330" y="216" font-size="14" fill="#1e293b">• Larra, Espronceda, Bécquer</text>
<text x="330" y="250" font-size="14" fill="#dc2626" font-weight="bold">Chiede: «che cosa sento?»</text>
</svg>`,
      caption: "Il Romanticismo nasce come reazione all'Illuminismo."
    },
    {
      type: "text",
      title: "5. Gustavo Adolfo Bécquer e il Romanticismo tardo",
      html: `<p><b>Gustavo Adolfo Bécquer</b> (Siviglia 1836 – Madrid 1870) è il poeta del Romanticismo tardivo. Muore giovane, e le sue <b>Rimas</b> vengono raccolte e pubblicate dopo la morte, nel <b>1871</b>; scrisse anche le <b>Leyendas</b>, racconti fantastici ambientati nel passato (per esempio <i>Los ojos verdes</i>, <i>El monte de las ánimas</i>).</p>
<p>La sua poesia è diversa da quella di Espronceda: niente tono epico, ma una voce <b>intima, breve, sussurrata</b>. La poesia per Bécquer non è nei grandi gesti, ma in ciò che si sente senza poterlo spiegare. Nella <b>Rima XXI</b> risponde alla domanda «che cos'è la poesia?»:</p>
<blockquote><i>¿Qué es poesía?, dices mientras clavas<br>
en mi pupila tu pupila azul.<br>
¿Qué es poesía? ¿Y tú me lo preguntas?<br>
Poesía… eres tú.</i></blockquote>
<p>Nella <b>Rima LIII</b>, il tema è la fugacità dell'amore: la rondine ritorna, ma l'amore no:</p>
<blockquote><i>Volverán las oscuras golondrinas<br>
en tu balcón sus nidos a colgar,<br>
y otra vez con el ala a sus cristales<br>
jugando llamarán;</i></blockquote>
<p>Le rime di Bécquer sono quasi tutte brevi, con <b>rima assonante</b> nei versi pari e strofe di quattro versi. Tema, tono e figure fecero di lui il modello della poesia spagnola del Novecento: i poeti della Generación del 27 e Antonio Machado lo lessero con rispetto. Accanto a lui, <b>Rosalía de Castro</b> (1837-1885) scrive in galiziano i <i>Cantares gallegos</i> (1863), primo grande libro della rinascita letteraria galiziana, e in castigliano <i>En las orillas del Sar</i> (1884).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Don Juan Tenorio a novembre",
      html: `<p>In Spagna il 1° novembre (Ognissanti) e il 2 (giorno dei morti) molti teatri mettono in scena il <i>Don Juan Tenorio</i> di Zorrilla: è una tradizione che dura da più di un secolo e mezzo. L'opera ha due parti (la prima dura una notte di gioco e seduzione, la seconda si svolge cinque anni dopo, in un cimitero con statue e fantasmi) ed è perfetta per la festa dei defunti.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Bécquer e il fratello pittore",
      html: `<p>Bécquer aveva un fratello pittore, <b>Valeriano</b> (1833-1870), che illustrò i suoi testi. I due fratelli morirono a pochi mesi di distanza, nel 1870, e amici e ammiratori raccolsero le Rimas, che nel 1871 uscirono in una prima edizione. Se oggi puoi leggere Bécquer è merito di quel gesto di amicizia.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per leggere i due movimenti",
      intro: "Hai già gli strumenti, ma ecco altri punti di vista.",
      tabs: [
        {
          label: "🎬 Con un film",
          html: `<p>Immagina Moratín come una serie tv ben scritta: pochi personaggi, un solo luogo, una morale chiara. Immagina Espronceda e Zorrilla come un film d'avventura o horror gotico: notte, tempesta, cimitero, amore proibito. Due generi diversi per due epoche diverse.</p>`
        },
        {
          label: "🎵 Con la musica",
          html: `<p>Il Neoclassicismo è come la musica di Mozart o Haydn: forma ordinata, equilibrio. Il Romanticismo è come Beethoven maturo o Chopin: emozione, contrasto, libertà. La rima assonante di Bécquer è come una melodia da cantare piano.</p>`
        },
        {
          label: "🖼️ Con la pittura",
          html: `<p>In Spagna la pittura di <b>Goya</b> (1746-1828) attraversa i due mondi: da giovane dipinge scene eleganti per l'arazzeria reale, poi con i <i>Caprichos</i> (1799) satireggia la società come un illuminista, infine nelle <i>Pitture nere</i> (1819-1823) mostra visioni oscure e angoscianti, tipicamente romantiche.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: dalla ragione al sentimento",
      nodes: [
        { id: "ragione", label: "Ragione", x: 20, y: 12, color: "#2563eb", html: "Illustración: progresso, educazione, ordine.", why: "Nasce dalla fiducia nella scienza e nell'utilità pubblica del Settecento europeo; in Spagna la promuove la dinastia borbonica." },
        { id: "moratin", label: "Moratín", x: 20, y: 48, color: "#0ea5e9", html: "El sí de las niñas (1806).", why: "Il teatro è la scuola pubblica per eccellenza: Moratín lo usa per insegnare ai genitori e ai giovani a scegliere con libertà." },
        { id: "crisi", label: "Guerra e assolutismo", x: 50, y: 30, color: "#64748b", html: "1808 guerra contro Napoleone; Fernando VII (1814-1833).", why: "La guerra e la repressione assolutista spaccano il Paese e costringono gli intellettuali liberali all'esilio: lì incontrano il Romanticismo europeo." },
        { id: "sentimento", label: "Sentimento", x: 80, y: 12, color: "#dc2626", html: "Romanticismo: libertà e passione.", why: "Dopo l'Illuminismo e la Rivoluzione, i romantici rivendicano la parte irrazionale dell'uomo: emozioni, individualità, popolo." },
        { id: "larra", label: "Larra e Espronceda", x: 70, y: 55, color: "#f59e0b", html: "Satira e ribellione.", why: "Sono la generazione cresciuta nell'esilio e nella repressione: usano l'arte per criticare la società e inseguire la libertà." },
        { id: "becquer", label: "Bécquer", x: 50, y: 85, color: "#a855f7", html: "Rimas (1871).", why: "Dopo l'ondata eroica del primo Romanticismo, resta la voce intima: poesia come sensazione, aprendo la strada al Modernismo." }
      ],
      edges: [
        ["ragione", "moratin", "si esprime in"],
        ["ragione", "crisi", "viene sconvolta da"],
        ["crisi", "sentimento", "porta al"],
        ["sentimento", "larra", "genera"],
        ["larra", "becquer", "evolve in"]
      ]
    },
    {
      type: "example",
      title: "Esempio: da Moratín a Bécquer in tre domande",
      html: `<p>Per confrontare due testi usa sempre le stesse tre domande. <b>1) Chi parla?</b> In Moratín i personaggi dialogano in prosa in una locanda; in Bécquer parla un «io» lirico che si rivolge a un «tu». <b>2) Che cosa vuole?</b> Moratín vuole persuadere (i giovani devono poter scegliere); Bécquer vuole far sentire (la poesia è un'emozione). <b>3) Come lo dice?</b> Moratín con chiarezza, ordine e ragionamento; Bécquer con immagini brevi, rime assonanti e silenzi. Con questo schema puoi confrontare qualunque coppia di testi.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Illustración</b>: ragione, riforme, utile; Feijoo, Jovellanos, Cadalso; teatro neoclassico di Moratín (<i>El sí de las niñas</i>, 1806).</li>
<li><b>Romanticismo spagnolo</b>: arriva dopo il 1833; libertà, passione, individualismo.</li>
<li><b>Larra</b>: articoli di costume, «Vuelva usted mañana». <b>Espronceda</b>: «Canción del pirata». <b>Zorrilla</b>: Don Juan Tenorio (1844). <b>Bécquer</b>: Rimas (1871).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Romanticismo",
      questions: [
        { type: "mc", q: "Chi firmava con lo pseudonimo «Fígaro»?", options: ["Larra", "Espronceda", "Zorrilla"], answer: 0, explain: "Mariano José de Larra." },
        { type: "tf", q: "Le Rimas di Bécquer furono pubblicate dopo la sua morte.", answer: true, explain: "La raccolta uscì nel 1871, un anno dopo la morte del poeta." },
        { type: "mc", q: "Quale verso appartiene alla «Canción del pirata»?", options: ["Mi única patria, la mar", "Poesía… eres tú", "Volverán las oscuras golondrinas"], answer: 0, explain: "È di Espronceda; gli altri due sono di Bécquer." },
        { type: "mc", q: "Perché il Romanticismo arriva tardi in Spagna?", options: ["Per la repressione di Fernando VII e l'esilio dei liberali", "Perché non esistevano scrittori", "Perché la lingua non era adatta"], answer: 0, explain: "Fino al 1833 la censura e l'esilio ostacolarono la diffusione delle nuove idee." }
      ]
    }
  ],
  glossary: [
    { t: "Ilustración", d: "L'Illuminismo spagnolo del Settecento." },
    { t: "Despotismo ilustrado", d: "Governo assoluto che promuove riforme razionali." },
    { t: "Neoclasicismo", d: "Stile che torna all'ordine, alla misura e alle unità classiche." },
    { t: "Tres unidades", d: "Unità di azione, tempo e luogo nel teatro neoclassico." },
    { t: "Romanticismo", d: "Movimento dell'Ottocento che esalta sentimento e libertà." },
    { t: "Artículo de costumbres", d: "Breve testo satirico sui costumi (Larra)." },
    { t: "Rima asonante", d: "Rima in cui coincidono solo le vocali dall'ultima vocale accentata." },
    { t: "Leyenda", d: "Racconto fantastico di ambiente medievale (Bécquer)." },
    { t: "Rima", d: "Nome delle brevi poesie di Bécquer." },
    { t: "Mal del siglo", d: "Malinconia e insoddisfazione tipiche dei romantici." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale re spagnolo è associato al dispotismo illuminato?", options: ["Carlos III", "Felipe II", "Fernando VII"], answer: 0, explain: "Regnò dal 1759 al 1788." },
      { type: "mc", q: "In quale luogo si svolge El sí de las niñas?", options: ["In una locanda", "In un convento", "In un teatro"], answer: 0, explain: "In una locanda di Alcalá de Henares, in una notte." },
      { type: "tf", q: "Il Neoclassicismo preferisce la libertà senza regole.", answer: false, explain: "Il Neoclassicismo difende ordine, misura e tre unità; la libertà è romantica." },
      { type: "text", q: "Come si chiama la giovane protagonista di El sí de las niñas (nome di battesimo, forma ufficiale)?", answer: ["francisca", "doña francisca", "dona francisca", "paquita"], explain: "Doña Francisca, detta Paquita." },
      { type: "mc", q: "Che cosa denuncia Larra in «Vuelva usted mañana»?", options: ["La lentezza e inefficienza della burocrazia", "La guerra civile", "Il costo del pane"], answer: 0, explain: "Satira dei funzionari che rimandano sempre." },
      { type: "mc", q: "Quale opera è un dramma romantico del Duque de Rivas?", options: ["Don Álvaro o la fuerza del sino", "El sí de las niñas", "Rimas"], answer: 0, explain: "Fu rappresentato nel 1835." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Real Academia Española (1713)", "El sí de las niñas (1806)", "Don Juan Tenorio (1844)", "Rimas di Bécquer (1871)"], explain: "Dal Settecento al tardo Romanticismo." },
      { type: "mc", q: "Qual è il tema della Rima XXI di Bécquer?", options: ["La poesia è la persona amata", "La vita militare", "La libertà del pirata"], answer: 0, explain: "«Poesía… eres tú»." },
      { type: "tf", q: "Rosalía de Castro scrisse i Cantares gallegos in castigliano.", answer: false, explain: "Li scrisse in galiziano (1863)." },
      { type: "mc", q: "Quale pittore attraversa Illuminismo e Romanticismo?", options: ["Goya", "Velázquez", "Murillo"], answer: 0, explain: "Francisco de Goya (1746-1828)." }
    ]
  }
});
