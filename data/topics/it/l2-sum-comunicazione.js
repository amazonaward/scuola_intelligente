TOPIC('it', {
  id: "l2-sum-comunicazione",
  title: "La comunicazione",
  intro: "Parliamo, scriviamo, gesticoliamo, mandiamo vocali e emoji: <b>comunicare</b> sembra la cosa più naturale del mondo, eppure i malintesi sono ovunque, in classe, in famiglia, in chat. Perché? In questa lezione apri il «motore» della comunicazione: il <b>modello di Shannon</b> e i sei fattori di <b>Jakobson</b>, la differenza tra canale <b>verbale</b>, <b>paraverbale</b> e <b>non verbale</b>, i cinque <b>assiomi di Watzlawick</b> (tra cui il celebre «non si può non comunicare»), le «quattro orecchie» di Schulz von Thun e infine il ruolo dei <b>media</b>, dalla stampa ai social network. Alla fine saprai spiegare perché due persone possono dire la stessa frase e farne capire cose opposte.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Che cosa vuol dire comunicare",
      html: `<p>La parola viene dal latino <i>communicare</i>, «mettere in comune». Comunicare non è solo «trasmettere informazioni»: è creare un <b>significato condiviso</b> tra chi invia e chi riceve. Per questo studiarla è compito della psicologia, della linguistica, della sociologia e della pedagogia: in un'aula la qualità della comunicazione tra docente e studenti pesa quanto il programma.</p>
<p>Il primo modello scientifico nasce lontano dalla psicologia, nell'ingegneria delle telecomunicazioni. Nel <b>1948</b> il matematico e ingegnere americano <b>Claude Shannon</b> (Bell Laboratories) pubblica <i>A Mathematical Theory of Communication</i>; l'anno seguente il libro viene ripreso insieme a <b>Warren Weaver</b>. Il problema era pratico: come mandare un segnale da un punto a un altro (telegrafo, telefono) perdendo il meno possibile nel viaggio? Il modello ha cinque elementi, più un ostacolo:</p>
<ul>
<li><b>Fonte (o emittente)</b>: chi ha qualcosa da dire.</li>
<li><b>Codifica</b>: l'idea diventa segnale (parole, suoni, immagini, codice Morse).</li>
<li><b>Canale</b>: il mezzo fisico (aria, filo telefonico, schermo).</li>
<li><b>Decodifica</b>: il ricevente trasforma il segnale in idea.</li>
<li><b>Destinatario</b>: chi riceve.</li>
<li><b>Rumore</b>: tutto ciò che disturba (fruscio, un rumore reale, ma anche stanchezza, distrazione, pregiudizi).</li>
</ul>
<p>Il limite del modello è evidente: è <b>lineare</b> (A parla, B ascolta). Nella comunicazione umana invece B risponde subito, anche solo con lo sguardo: si parla di <b>feedback</b> e di <b>circolarità</b>, concetti che i modelli successivi hanno aggiunto.</p>`
    },
    {
      type: "svg",
      title: "Il modello di Shannon e Weaver",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="90" width="100" height="60" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="60" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Fonte</text>
<text x="60" y="136" font-size="14" text-anchor="middle" fill="#0f172a">idea</text>
<rect x="130" y="90" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="180" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Codifica</text>
<text x="180" y="136" font-size="14" text-anchor="middle" fill="#0f172a">in segnale</text>
<rect x="250" y="90" width="100" height="60" rx="10" fill="#fef08a" stroke="#854d0e" stroke-width="2"/>
<text x="300" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Canale</text>
<text x="300" y="136" font-size="14" text-anchor="middle" fill="#0f172a">il mezzo</text>
<rect x="370" y="90" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="420" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Decodifica</text>
<text x="420" y="136" font-size="14" text-anchor="middle" fill="#0f172a">in idea</text>
<rect x="490" y="90" width="100" height="60" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="540" y="115" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Destinatario</text>
<text x="540" y="136" font-size="14" text-anchor="middle" fill="#0f172a">capisce?</text>
<line x1="110" y1="120" x2="128" y2="120" stroke="#0f172a" stroke-width="3"/>
<line x1="230" y1="120" x2="248" y2="120" stroke="#0f172a" stroke-width="3"/>
<line x1="350" y1="120" x2="368" y2="120" stroke="#0f172a" stroke-width="3"/>
<line x1="470" y1="120" x2="488" y2="120" stroke="#0f172a" stroke-width="3"/>
<rect x="240" y="20" width="120" height="38" rx="19" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="300" y="45" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">RUMORE</text>
<line x1="300" y1="58" x2="300" y2="88" stroke="#991b1b" stroke-width="3" stroke-dasharray="6 4"/>
<path d="M540 160 Q540 230 300 230 Q60 230 60 160" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 5"/>
<text x="300" y="255" font-size="15" font-weight="bold" text-anchor="middle" fill="#4c1d95">FEEDBACK (la risposta): la comunicazione umana è circolare</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#0f172a">Il rumore può essere fisico (fruscio) o psicologico (distrazione, pregiudizio)</text>
</svg>`,
      caption: "Il messaggio che parte non è sempre quello che arriva: codifica, canale e rumore possono deformarlo."
    },
    {
      type: "text",
      title: "2. I sei fattori e le sei funzioni di Jakobson",
      html: `<p>Il linguista russo <b>Roman Jakobson</b> (1896-1982) propose in una conferenza del 1958 (testo pubblicato nel <b>1960</b>, <i>Linguistica e poetica</i>) uno schema più ricco: ogni atto comunicativo coinvolge <b>sei fattori</b>, e a ciascuno corrisponde una <b>funzione</b> del linguaggio, cioè uno scopo prevalente del messaggio.</p>
<table>
<tr><th>Fattore</th><th>Funzione</th><th>Esempio</th></tr>
<tr><td>Emittente</td><td><b>Emotiva</b> (espressiva)</td><td>«Che bello!», «Che schifo!»</td></tr>
<tr><td>Destinatario</td><td><b>Conativa</b> (appello)</td><td>«Chiudi la porta!», le pubblicità</td></tr>
<tr><td>Contesto (referente)</td><td><b>Referenziale</b></td><td>«L'acqua bolle a 100 °C al livello del mare»</td></tr>
<tr><td>Messaggio</td><td><b>Poetica</b></td><td>Slogan e poesie: conta <i>come</i> è detto</td></tr>
<tr><td>Codice</td><td><b>Metalinguistica</b></td><td>«Che cosa vuol dire "assioma"?»</td></tr>
<tr><td>Contatto (canale)</td><td><b>Fàtica</b></td><td>«Pronto?», «Mi senti?», «Ciao, come va?»</td></tr>
</table>
<p>Una stessa frase può avere più funzioni insieme. Il «Come va?» detto passando in corridoio non vuole davvero una risposta medica: ha funzione <b>fàtica</b>, serve a tenere aperto il contatto e a dire «ti ho visto, ci sono». Capirlo evita brutte figure (e confusione).</p>`
    },
    {
      type: "example",
      title: "Stesso messaggio, tre funzioni",
      html: `<p>La professoressa dice: «Qui c'è molto rumore.» Che cosa sta facendo?</p>
<ul>
<li>Se descrive semplicemente la situazione, ha funzione <b>referenziale</b>.</li>
<li>Se in realtà vuole che gli studenti facciano silenzio, ha funzione <b>conativa</b> (un ordine travestito da constatazione).</li>
<li>Se sospira esasperata, esprime il proprio stato d'animo: funzione <b>emotiva</b>.</li>
</ul>
<p>Il significato non sta solo nelle parole, ma nell'<b>intenzione</b> e nel <b>contesto</b>: ecco perché gli assistenti vocali, che sanno le parole ma non la situazione, spesso fraintendono.</p>`
    },
    {
      type: "text",
      title: "3. Verbale, paraverbale, non verbale",
      html: `<p>Quando comunichiamo di persona usiamo contemporaneamente tre canali:</p>
<ul>
<li><b>Verbale</b>: le <b>parole</b>, parlate o scritte, con la loro grammatica e il loro significato.</li>
<li><b>Paraverbale</b>: <b>come</b> diciamo le parole: tono, volume, ritmo, pause, accento, sospiri. Con «Bravo!» puoi fare un complimento o una critica pungente, a seconda dell'intonazione.</li>
<li><b>Non verbale</b>: tutto il resto del corpo: <b>espressioni del viso</b>, sguardo, gesti, postura, distanza, abbigliamento, contatto fisico.</li>
</ul>
<p><b>Espressioni del viso.</b> Già <b>Charles Darwin</b> nel 1872 (<i>L'espressione delle emozioni nell'uomo e negli animali</i>) sostenne che molte espressioni emotive hanno origine biologica comune. Lo psicologo <b>Paul Ekman</b> (a partire dagli anni Sessanta-Settanta, anche con ricerche tra popolazioni isolate della Papua Nuova Guinea) mostrò che sei espressioni, <b>gioia, tristezza, rabbia, paura, disgusto, sorpresa</b>, sono riconosciute in modo molto simile in culture diverse. I <b>gesti</b>, invece, dipendono dalla cultura: il gesto del pollice alzato è positivo in molti Paesi ma offensivo in altri.</p>
<p><b>Prossemica.</b> L'antropologo <b>Edward T. Hall</b> (<i>La dimensione nascosta</i>, 1966) chiamò così lo studio dell'uso dello spazio. Distinse quattro zone, indicative e variabili da cultura a cultura: <b>intima</b> (fino a circa 45 cm), <b>personale</b> (circa 45-120 cm), <b>sociale</b> (circa 1,2-3,5 m), <b>pubblica</b> (oltre). Se un estraneo entra nella zona intima proviamo disagio, anche senza che abbia detto nulla.</p>
<p><b>Un dato famoso, spesso frainteso.</b> Lo psicologo <b>Albert Mehrabian</b> (anni Sessanta-Settanta) misurò che, quando le <i>parole</i> contraddicono tono ed espressione nell'esprimere un sentimento, la gente si fida di più di tono (circa 38%) e viso (circa 55%) che delle parole (7%). La formula «7-38-55» viene però spesso citata come regola generale («la comunicazione è fatta al 93% di non verbale»): è falso. Valeva solo per singole parole di giudizio e per messaggi incoerenti sui sentimenti, non per ogni discorso. Per spiegare la fisica, le parole contano eccome.</p>`
    },
    {
      type: "widget",
      title: "Verbale, paraverbale o non verbale?",
      widget: "classify",
      options: {
        groups: ["Verbale", "Paraverbale", "Non verbale"],
        items: [
          ["📖 Il testo di una mail", 0],
          ["🗣️ Il tono ironico di «Che bella giornata!»", 1],
          ["😠 Sopracciglia corrugate", 2],
          ["🔊 Parlare a voce molto alta", 1],
          ["🧍 Braccia incrociate", 2],
          ["💬 La frase «Ho capito»", 0],
          ["⏸️ Una lunga pausa prima di rispondere", 1],
          ["📏 Avvicinarsi molto a qualcuno", 2]
        ]
      },
      caption: "Trascina o tocca ciascun elemento nel canale giusto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: modelli e canali",
      questions: [
        { type: "mc", q: "Che cosa rappresenta il «rumore» nel modello di Shannon?", options: ["Qualsiasi disturbo che deforma il messaggio", "Il volume della voce", "Il feedback del destinatario", "Il codice usato"], answer: 0, explain: "Il rumore è tutto ciò che disturba il passaggio del messaggio, fisico o psicologico." },
        { type: "mc", q: "«Pronto? Mi senti?» ha prevalentemente funzione...", options: ["fàtica", "poetica", "referenziale", "metalinguistica"], answer: 0, explain: "Serve a stabilire e controllare il contatto." },
        { type: "tf", q: "La formula 7-38-55 di Mehrabian dimostra che il 93% di ogni comunicazione è non verbale.", answer: false, explain: "Valeva solo per messaggi incoerenti sui sentimenti, non per qualsiasi discorso." }
      ]
    },
    {
      type: "text",
      title: "4. La Scuola di Palo Alto: i cinque assiomi",
      html: `<p>Negli anni Sessanta, a <b>Palo Alto</b> (California), un gruppo di studiosi del <i>Mental Research Institute</i> (con lo psichiatra <b>Paul Watzlawick</b>, nato in Austria nel 1921 e morto nel 2007, insieme a Janet Beavin e Don Jackson) studiò la comunicazione dentro le famiglie con difficoltà. Nel <b>1967</b> pubblicarono <i>Pragmatica della comunicazione umana</i>, che propone cinque «assiomi», cioè principi di base.</p>
<ol>
<li><b>Non si può non comunicare.</b> Ogni comportamento, anche il silenzio o l'assenza, comunica qualcosa a chi lo osserva. Lo studente che guarda fuori dalla finestra «sta dicendo» qualcosa, anche se non vuole.</li>
<li><b>Ogni comunicazione ha un aspetto di contenuto e uno di relazione.</b> Oltre a <i>che cosa</i> dico, comunico <i>che rapporto c'è</i> tra me e te. «Metti in ordine!» e «Mi aiuteresti a mettere in ordine?» hanno lo stesso contenuto ma relazioni diverse (comando contro richiesta).</li>
<li><b>La natura di una relazione dipende dalla punteggiatura delle sequenze di comunicazione.</b> Ognuno decide da dove far partire la «catena» di cause ed effetti, e spesso lo fa a proprio favore: litigi nati da «ha cominciato lui!».</li>
<li><b>Si comunica sia in modo digitale sia in modo analogico.</b> Il <b>digitale</b> sono le parole (precise sul contenuto), l'<b>analogico</b> è tutto il resto: tono, gesti, immagini (efficace sulla relazione ma ambiguo). I due canali devono essere coerenti.</li>
<li><b>Gli scambi comunicativi sono simmetrici o complementari.</b> Nella <b>simmetria</b> i partner si comportano alla pari (uguaglianza); nella <b>complementarità</b> uno sta «sopra» e l'altro «sotto» (genitore/figlio, docente/studente), con ruoli che si incastrano.</li>
</ol>`
    },
    {
      type: "example",
      title: "La punteggiatura di un litigio",
      html: `<p>Giulia e Marco hanno una discussione. Marco dice: «Io mi chiudo in me stesso perché Giulia mi tormenta di domande». Giulia dice: «Io gli faccio domande perché lui si chiude in sé stesso». Ognuno è convinto che l'altro abbia iniziato.</p>
<p>In realtà il processo è <b>circolare</b>: più Giulia chiede, più Marco si ritira; più Marco si ritira, più Giulia chiede. Ciascuno <b>punteggia</b> la sequenza mettendo l'inizio (la «causa») nel comportamento dell'altro. Per uscire dal circolo bisogna smettere di cercare il colpevole e <b>cambiare qualcosa nella propria mossa</b>: Marco può dire «ho bisogno di mezz'ora», Giulia può aspettare.</p>`
    },
    {
      type: "widget",
      title: "Abbina l'assioma",
      widget: "match",
      options: {
        pairs: [
          ["Primo assioma", "Non si può non comunicare"],
          ["Secondo assioma", "Contenuto e relazione"],
          ["Terzo assioma", "La punteggiatura degli eventi"],
          ["Quarto assioma", "Digitale e analogico"],
          ["Quinto assioma", "Simmetrico e complementare"]
        ]
      },
      caption: "Collega ogni numero al suo principio."
    },
    {
      type: "text",
      title: "5. Le quattro orecchie di Schulz von Thun",
      html: `<p>Lo psicologo tedesco <b>Friedemann Schulz von Thun</b>, nel libro <i>Miteinander reden</i> («Parlare gli uni con gli altri», 1981), sviluppò il secondo assioma con l'immagine delle <b>quattro orecchie</b> (o «quadrato della comunicazione»): ogni messaggio ha <b>quattro lati</b>, e chi ascolta può decidere di sentirne soprattutto uno.</p>
<ul>
<li><b>Il fatto</b> (di che cosa si parla).</li>
<li><b>L'autorivelazione</b> (che cosa dico di me).</li>
<li><b>La relazione</b> (che cosa penso di te e di noi).</li>
<li><b>L'appello</b> (che cosa voglio che tu faccia).</li>
</ul>
<p>Esempio classico: in auto, il passeggero dice «Il semaforo è verde». <i>Fatto</i>: il semaforo è verde. <i>Autorivelazione</i>: ho fretta. <i>Relazione</i>: da solo non sai guidare, ti aiuto io. <i>Appello</i>: parti! L'autista può rispondere con fastidio sentendo l'orecchio della relazione («non sono un principiante!»), anche se il passeggero forse voleva solo dare un'informazione. Molti conflitti nascono perché <b>chi parla e chi ascolta usano orecchie diverse</b>.</p>
<p>La soluzione è la <b>metacomunicazione</b>: parlare del modo in cui si sta parlando («forse mi sono spiegato male, intendevo solo dire che...»).</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la comunicazione",
      intro: "Se i modelli teorici non ti convincono, prova da un altro punto di vista.",
      tabs: [
        { label: "📞 Il telefono senza fili", html: `<p>Un gioco noto: la prima persona sussurra una frase all'orecchio della seconda, che la ripete alla terza e così via. In fondo alla fila la frase è spesso irriconoscibile. Ogni «passaggio» è una codifica e una decodifica con un po' di rumore: gli errori si accumulano. Così nascono le voci, le leggende metropolitane e le notizie false.</p>` },
        { label: "🧊 L'iceberg", html: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#e0f2fe"/><rect y="110" width="600" height="190" fill="#7dd3fc"/><polygon points="270,110 300,40 330,110" fill="#ffffff" stroke="#475569" stroke-width="2"/><polygon points="170,110 270,110 330,110 440,110 400,250 300,285 200,250" fill="#e2e8f0" stroke="#475569" stroke-width="2"/><text x="300" y="95" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Parole dette</text><text x="300" y="165" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">Tono, sguardi, gesti,</text><text x="300" y="190" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">emozioni, relazione,</text><text x="300" y="215" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">cultura, contesto</text></svg><p>Le parole sono la punta visibile; sotto la superficie c'è la parte più grande. Non va però preso alla lettera: per i contenuti scolastici le parole contano moltissimo.</p>` },
        { label: "🤝 L'ascolto attivo", html: `<p>Lo psicologo <b>Carl Rogers</b> (1902-1987) sosteneva che per comprendere davvero serva un <b>ascolto empatico</b>. Tecniche dell'ascolto attivo: guardare in faccia, non interrompere, <b>riformulare</b> («se ho capito bene, dici che...»), fare domande aperte, riconoscere le emozioni dell'altro. Funziona perché dà all'altro la prova di essere stato capito e chiude il giro del feedback.</p>` },
        { label: "🗣️ Tre stili: passivo, aggressivo, assertivo", html: `<p>Davanti a un compagno che copia sempre i compiti:</p><ul><li><b>Passivo</b>: «Sì, va beh... fai pure» (non difendi i tuoi diritti).</li><li><b>Aggressivo</b>: «Sei un parassita!» (attacchi la persona).</li><li><b>Assertivo</b>: «Mi dà fastidio quando copi senza chiedermelo; se vuoi, studiamo insieme.» (parli in prima persona, descrivi il comportamento, proponi una soluzione).</li></ul><p>I «messaggi in prima persona» (<i>io mi sento...</i>) sono stati diffusi dallo psicologo <b>Thomas Gordon</b> nel libro <i>Genitori efficaci</i> (1970).</p>` }
      ]
    },
    {
      type: "text",
      title: "6. I media: comunicare a distanza",
      html: `<p>Un <b>medium</b> (plurale «media») è uno strumento che permette di comunicare oltre il «qui e ora». Ogni nuovo medium ha cambiato il modo di pensare e vivere.</p>
<ul>
<li><b>Scrittura</b> (circa 3300 a.C. in Mesopotamia): il messaggio resta nel tempo.</li>
<li><b>Stampa a caratteri mobili</b>: <b>Johannes Gutenberg</b> a Magonza, intorno al 1455, stampa la Bibbia. I libri costano meno, le idee circolano (Riforma protestante, rivoluzione scientifica).</li>
<li><b>Radio e televisione</b>: Marconi realizza le prime trasmissioni radio alla fine dell'Ottocento (1895); in Italia le trasmissioni TV regolari della RAI partono il <b>3 gennaio 1954</b>.</li>
<li><b>Internet e web</b>: la rete ARPANET nasce nel 1969; il <b>World Wide Web</b> è ideato da <b>Tim Berners-Lee</b> al CERN nel 1989-1991.</li>
<li><b>Social network e smartphone</b>: dal 2007 (iPhone) la comunicazione di massa è in tasca, ognuno può essere emittente.</li>
</ul>
<p>Il sociologo canadese <b>Marshall McLuhan</b> (<i>Gli strumenti del comunicare</i>, 1964) sostiene che «il medium è il messaggio»: il mezzo non è neutro, cambia il modo in cui percepiamo e pensiamo. Parla anche di «<b>villaggio globale</b>»: i media elettronici rendono il mondo piccolo, e tutto è collegato.</p>
<p><b>Comunicare in rete: rischi e regole.</b> Nei messaggi scritti mancano tono e sguardo (canale paraverbale e non verbale): per questo usiamo emoji e punteggiatura, e per questo l'ironia si fraintende facilmente. Altri rischi: le <b>fake news</b> (notizie false diffuse come vere), le <b>bolle di filtro</b> (<i>filter bubble</i>, termine dell'attivista Eli Pariser, 2011: gli algoritmi mostrano soprattutto ciò che conferma le nostre idee) e il <b>cyberbullismo</b>, che in Italia è punito da una legge specifica (n. 71 del 2017). Prima di condividere una notizia: <b>chi</b> la dice? <b>Quando</b>? Altre fonti attendibili la confermano? L'immagine è davvero di quell'evento (ricerca inversa)?</p>`
    },
    {
      type: "widget",
      title: "Quando è nato? Linea del tempo dei media",
      widget: "timeline",
      options: {
        events: [
          { year: -3300, label: "Scrittura (Mesopotamia)", icon: "✍️" },
          { year: 1455, label: "Stampa di Gutenberg", icon: "📖" },
          { year: 1895, label: "Prime trasmissioni radio (Marconi)", icon: "📻" },
          { year: 1954, label: "Televisione RAI", icon: "📺" },
          { year: 1969, label: "ARPANET", icon: "🖧" },
          { year: 1991, label: "World Wide Web", icon: "🌐" },
          { year: 2007, label: "iPhone", icon: "📱" }
        ],
        unit: "anni"
      },
      caption: "Ogni medium accelera la comunicazione e ne cambia le regole."
    },
    {
      type: "decision",
      title: "Un messaggio ambiguo in chat",
      html: `<p>Sofia scrive a Luca nella chat di classe: «Va bene, fai come vuoi.» Nessuna emoji, nessun altro commento. Luca non capisce se Sofia è davvero d'accordo oppure è arrabbiata. Il gruppo è in attesa di una decisione per il progetto.</p>`,
      question: "Che cosa fa Luca?",
      options: [
        { label: "Prende la frase alla lettera e prosegue senza chiedere altro.", outcome: "Rischia di ignorare un malumore. Se Sofia è davvero in disaccordo, la rabbia crescerà e verrà fuori più avanti, forse in forma peggiore. Ha letto solo il lato «fatto» del messaggio." },
        { label: "Risponde in modo aggressivo: «Che problema hai?».", outcome: "Attacca la relazione e probabilmente scatena un litigio. Così si conferma il «circolo» descritto dal terzo assioma: lui punteggia la sequenza partendo da lei." },
        { label: "Le scrive in privato: «Ti vedo un po' fredda, va tutto bene? Se preferisci un'altra soluzione, dimmelo».", outcome: "Usa la metacomunicazione: chiede del modo in cui il messaggio è arrivato, senza accusare. Dà a Sofia la possibilità di spiegarsi e mantiene la relazione." }
      ],
      answer: 2,
      explain: "Nella comunicazione scritta mancano tono, sguardo e pause, quindi l'ambiguità è alta. La soluzione più efficace è la <b>metacomunicazione</b> in forma assertiva e non accusatoria: chiedere conferma dell'interpretazione, invece di indovinare o attaccare."
    },
    {
      type: "conceptMap",
      title: "Mappa: la comunicazione",
      nodes: [
        { id: "com", label: "Comunicazione", x: 50, y: 6, color: "#3b82f6", html: "Processo con cui due o più persone creano significato condiviso.", why: "Il significato non «viaggia» da una testa all'altra: va costruito da chi parla e da chi ascolta, usando un codice e un contesto comuni. Per questo si fraintende." },
        { id: "mod", label: "Modelli", x: 14, y: 40, color: "#10b981", html: "Shannon-Weaver (1948) e Jakobson (1960).", why: "Nascono dall'ingegneria delle telecomunicazioni (Shannon) e dalla linguistica (Jakobson): servono a individuare dove la comunicazione può guastarsi (codice, canale, rumore, contesto)." },
        { id: "can", label: "Canali", x: 38, y: 40, color: "#f59e0b", html: "Verbale, paraverbale, non verbale.", why: "Usiamo più canali insieme: il corpo e la voce rivelano emozioni e relazioni che le parole spesso nascondono. Darwin ed Ekman mostrano che alcune espressioni sono universali." },
        { id: "ass", label: "Assiomi di Watzlawick", x: 64, y: 40, color: "#ef4444", html: "Cinque principi della comunicazione umana (1967).", why: "Studiando famiglie in difficoltà, la Scuola di Palo Alto notò che i problemi nascevano più dal «come» si comunicava (relazione, punteggiatura) che dal «che cosa» si diceva." },
        { id: "ore", label: "Quattro orecchie", x: 88, y: 40, color: "#8b5cf6", html: "Fatto, autorivelazione, relazione, appello.", why: "Schulz von Thun (1981) spiega perché lo stesso messaggio viene ascoltato in modi diversi: ogni messaggio ha più lati e ognuno ne sceglie uno." },
        { id: "med", label: "Media", x: 50, y: 78, color: "#0ea5e9", html: "Dalla scrittura ai social network.", why: "Ogni medium amplifica la portata del messaggio ma cambia il rapporto tra le persone (McLuhan: «il medium è il messaggio»). Online mancano tono e sguardo, perciò crescono i malintesi." }
      ],
      edges: [["com", "mod", "si descrive con"], ["com", "can", "usa"], ["com", "ass", "regole"], ["com", "ore", "ascolto"], ["com", "med", "a distanza"]]
    },
    {
      type: "curiosity",
      title: "Le emoji come «paraverbale scritto»",
      html: `<p>Le <b>emoji</b> nascono in Giappone nel 1999, ideate da <b>Shigetaka Kurita</b> per un servizio di telefonia mobile: la parola unisce <i>e</i> («immagine») e <i>moji</i> («carattere»), e non ha a che fare con l'inglese <i>emotion</i>, come sembrerebbe. Nel linguaggio scritto servono a ricostruire ciò che manca: tono, espressione del viso, intenzione. Un 😉 trasforma una frase dura in uno scherzo. Eppure non sono universali: la stessa emoji può essere letta in modo diverso da persone di età e culture diverse.</p>`
    },
    {
      type: "curiosity",
      title: "Pigmalione in classe",
      html: `<p>Nel <b>1968</b> gli psicologi <b>Robert Rosenthal</b> e <b>Lenore Jacobson</b> raccontarono in <i>Pygmalion in the Classroom</i> un esperimento in una scuola elementare californiana: dissero agli insegnanti che alcuni alunni, scelti in realtà a caso, erano «sul punto di fiorire» intellettualmente. A fine anno quegli alunni avevano in media guadagnato di più in test d'intelligenza (soprattutto i più piccoli). L'ipotesi è che le <b>aspettative</b> degli insegnanti passino con piccoli segnali (sguardi, tono, tempo concesso per rispondere) e influenzino i risultati. Lo studio è stato discusso e criticato, ma l'idea che le aspettative comunichino qualcosa senza parole è molto studiata.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Shannon-Weaver</b>: fonte, codifica, canale, decodifica, destinatario, rumore. <b>Jakobson</b>: sei fattori e sei funzioni.</li>
<li>Tre canali: <b>verbale</b> (parole), <b>paraverbale</b> (tono, ritmo), <b>non verbale</b> (corpo, spazio).</li>
<li>I cinque assiomi: non si può non comunicare; contenuto e relazione; punteggiatura; digitale e analogico; simmetria e complementarità.</li>
<li>Ogni messaggio ha <b>quattro lati</b>: fatto, autorivelazione, relazione, appello.</li>
<li>Per evitare i malintesi: <b>ascolto attivo</b>, stile <b>assertivo</b>, <b>metacomunicazione</b>, verifica delle fonti online.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Watzlawick e media",
      questions: [
        { type: "mc", q: "Secondo il primo assioma di Watzlawick, il silenzio di uno studente...", options: ["comunica comunque qualcosa", "non comunica nulla", "è sempre segno di disinteresse", "è solo paraverbale"], answer: 0, explain: "Ogni comportamento, anche il silenzio, ha valore comunicativo per chi lo osserva." },
        { type: "mc", q: "Il «terzo assioma» riguarda...", options: ["La punteggiatura della sequenza degli eventi", "La differenza tra voce e gesti", "Il numero di interlocutori", "L'uso dei social"], answer: 0, explain: "Ognuno stabilisce dove inizia la catena di azioni e reazioni, di solito a proprio favore." },
        { type: "tf", q: "Il «Come va?» detto passando in corridoio ha spesso funzione fàtica.", answer: true, explain: "Mantiene il contatto sociale più che chiedere informazioni." },
        { type: "order", q: "Metti in ordine cronologico.", items: ["Bibbia di Gutenberg (c. 1455)", "Prime trasmissioni radio di Marconi (1895)", "Televisione RAI (1954)", "iPhone (2007)"], explain: "1455, 1895, 1954, 2007." }
      ]
    }
  ],
  glossary: [
    { t: "Comunicazione", d: "Processo con cui si crea significato condiviso tra chi emette e chi riceve un messaggio." },
    { t: "Codice", d: "Insieme di segni e regole condivise (lingua, alfabeto Morse, gesti) con cui si costruisce il messaggio." },
    { t: "Rumore", d: "Qualsiasi disturbo, fisico o psicologico, che deforma il messaggio." },
    { t: "Feedback", d: "Risposta del destinatario che dice all'emittente come il messaggio è stato ricevuto." },
    { t: "Funzione fàtica", d: "Funzione del linguaggio che serve a stabilire o mantenere il contatto (Pronto? Mi senti?)." },
    { t: "Paraverbale", d: "Insieme di tono, volume, ritmo e pause con cui si pronunciano le parole." },
    { t: "Prossemica", d: "Studio dell'uso dello spazio e delle distanze nella comunicazione (Hall)." },
    { t: "Metacomunicazione", d: "Comunicare sul modo in cui si sta comunicando." },
    { t: "Punteggiatura", d: "In Watzlawick, il modo soggettivo di decidere dove inizia e dove finisce una sequenza di comportamenti." },
    { t: "Comunicazione assertiva", d: "Stile che difende i propri diritti e rispetta quelli dell'altro, senza passività né aggressività." },
    { t: "Fake news", d: "Notizie false o ingannevoli diffuse come se fossero vere." },
    { t: "Bolla di filtro", d: "Effetto per cui gli algoritmi mostrano contenuti simili alle nostre opinioni, riducendo la varietà di punti di vista." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi pubblicò nel 1948 la «teoria matematica della comunicazione»?", options: ["Claude Shannon", "Paul Watzlawick", "Roman Jakobson", "Marshall McLuhan"], answer: 0, explain: "Shannon, ingegnere dei Bell Laboratories; il modello fu poi ripreso con Weaver." },
      { type: "mc", q: "Nel modello di Jakobson, la funzione che mette al centro il messaggio e il «come» è detto, come in uno slogan o in una poesia, è la...", options: ["poetica", "referenziale", "emotiva", "fàtica"], answer: 0, explain: "La funzione poetica riguarda la forma del messaggio." },
      { type: "mc", q: "Qual è la funzione prevalente di «Chiudi la finestra!»?", options: ["Conativa", "Metalinguistica", "Emotiva", "Referenziale"], answer: 0, explain: "È un appello al destinatario perché faccia qualcosa." },
      { type: "tf", q: "Il tono ironico con cui si dice «Bravo!» appartiene al canale paraverbale.", answer: true, explain: "Il paraverbale riguarda il modo di dire le parole: tono, ritmo, volume." },
      { type: "text", q: "Come si chiama lo studio dell'uso dello spazio e delle distanze nella comunicazione?", answer: ["prossemica", "la prossemica"], explain: "Il termine è di Edward T. Hall (1966)." },
      { type: "mc", q: "Quale di queste sei espressioni emotive è considerata universale da Ekman?", options: ["Disgusto", "Imbarazzo", "Nostalgia", "Gelosia"], answer: 0, explain: "Le sei sono gioia, tristezza, rabbia, paura, disgusto, sorpresa." },
      { type: "mc", q: "Il secondo assioma afferma che ogni comunicazione ha...", options: ["un aspetto di contenuto e uno di relazione", "un solo significato", "sempre un colpevole", "un emittente e due canali"], answer: 0, explain: "Oltre a quello che si dice, si comunica che rapporto c'è tra i due." },
      { type: "tf", q: "Secondo Watzlawick è possibile non comunicare, se si resta in silenzio.", answer: false, explain: "Anche il silenzio comunica." },
      { type: "mc", q: "Nel messaggio «Il semaforo è verde», il lato che riguarda ciò che il parlante vuole che l'altro faccia è...", options: ["l'appello", "il fatto", "l'autorivelazione", "la relazione"], answer: 0, explain: "L'appello: «parti!»." },
      { type: "mc", q: "Che cosa intende McLuhan con «il medium è il messaggio»?", options: ["Il mezzo cambia il modo in cui pensiamo e percepiamo", "Ogni messaggio è falso", "Solo la televisione conta", "Il contenuto è irrilevante sempre"], answer: 0, explain: "Il mezzo non è neutro: modifica abitudini, tempi, relazioni." }
    ]
  }
});
