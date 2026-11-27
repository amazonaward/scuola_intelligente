TOPIC('it', {
  id: "l2-sum-intelligenza",
  title: "L'intelligenza",
  intro: "Che cos'è l'<b>intelligenza</b>? Saper risolvere problemi di matematica? Avere un'ottima memoria? Capire gli altri? Suonare bene uno strumento? Gli psicologi si pongono la domanda da oltre un secolo e non hanno una risposta unica. In questa lezione incontri i <b>primi test</b> di Binet e il <b>quoziente intellettivo</b>, il <b>fattore g</b> di Spearman, le teorie che rifiutano l'idea di una sola intelligenza (Thurstone, Sternberg, e le celebri <b>intelligenze multiple di Gardner</b>), il dibattito su <b>ereditarietà e ambiente</b>, l'<b>effetto Flynn</b> e i limiti e i rischi dei test. Impari a leggere un numero come «QI 115» con la dovuta cautela, e capisci perché a scuola è importante non ridurre una persona a un punteggio.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Come si definisce l'intelligenza",
      html: `<p>La parola viene dal latino <i>intelligere</i>, «capire», cioè <i>inter-legere</i>, «leggere dentro, scegliere tra». In psicologia non c'è una definizione unica; una delle più citate è quella dello psicologo statunitense <b>David Wechsler</b>: l'intelligenza è la <b>capacità globale</b> di agire con uno scopo, di pensare in modo razionale e di affrontare con efficacia l'ambiente. Molte definizioni insistono su alcune abilità comuni: <b>ragionare</b>, <b>risolvere problemi</b>, <b>pensare in modo astratto</b>, <b>imparare dall'esperienza</b>, <b>adattarsi a situazioni nuove</b>.</p>
<p>Un punto chiave: l'intelligenza non si «vede» direttamente, come il peso o l'altezza. Si può solo <b>inferire dai comportamenti</b> (risposte a test, prestazioni) e le teorie differiscono in ciò che includono. Chiamiamo questa idea <b>costrutto</b>: un concetto teorico costruito per spiegare i dati.</p>
<p>Le domande classiche sono tre: <b>(1)</b> esiste un'intelligenza unica o ce ne sono molte? <b>(2)</b> quanto dipende dai geni e quanto dall'ambiente? <b>(3)</b> si può misurare con un test? Vediamole una per una.</p>`
    },
    {
      type: "text",
      title: "2. Dai primi tentativi al QI",
      html: `<p>Il britannico <b>Francis Galton</b> (1822-1911), cugino di Darwin, nel libro <i>Hereditary Genius</i> (1869) sostenne che il talento si trasmette per eredità. Cercò anche, senza successo, di misurare l'intelligenza con test sensoriali (rapidità di reazione, acuità visiva). Fu il fondatore dell'<b>eugenetica</b> (termine del 1883), l'idea di migliorare la specie con la selezione, che ebbe conseguenze tragiche nel Novecento.</p>
<p>La svolta nasce invece dalla scuola. Nel <b>1904</b> il Ministero dell'istruzione francese, dopo l'introduzione dell'obbligo scolastico, chiese allo psicologo <b>Alfred Binet</b> (1857-1911) di trovare un modo per individuare i bambini che avevano bisogno di un <b>aiuto speciale</b>. Con <b>Théodore Simon</b>, nel <b>1905</b>, Binet pubblicò la prima <b>scala metrica dell'intelligenza</b>: una serie di prove di difficoltà crescente (seguire un movimento con lo sguardo, ripetere frasi, confrontare oggetti, definire parole, ragionare) ordinate per età. Il bambino otteneva un'<b>età mentale</b>: l'età dei bambini medi che superano le stesse prove.</p>
<p>Binet era molto prudente: pensava che il test servisse a <b>trovare chi aveva bisogno di sostegno</b>, non a classificare i bambini per sempre né a «misurare» un'intelligenza fissa e innata. Nel <b>1912</b> lo psicologo tedesco <b>William Stern</b> propose di esprimere il risultato come rapporto tra età mentale (EM) ed età cronologica (EC), da cui il <b>quoziente intellettivo</b>:</p>
<p style="text-align:center"><b>QI = (EM : EC) × 100</b></p>
<p>Un bambino di 8 anni che risolve le prove da 10 ha QI = (10 : 8) × 100 = <b>125</b>. Nel 1916 <b>Lewis Terman</b> (Stanford) adattò la scala per gli Stati Uniti: nacque lo <b>Stanford-Binet</b>. Per gli adulti il metodo del rapporto non funzionava (l'età mentale smette di crescere), così <b>David Wechsler</b> introdusse (1939 per adulti, poi le versioni WAIS e WISC) il <b>QI di deviazione</b>: il punteggio indica quanto ci si discosta dalla <b>media del proprio gruppo di età</b>, con media 100 e deviazione standard 15.</p>`
    },
    {
      type: "svg",
      title: "La curva normale del QI",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<path d="M40 250 C120 248 170 230 210 180 C250 105 280 40 300 40 C320 40 350 105 390 180 C430 230 480 248 560 250 Z" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<line x1="300" y1="40" x2="300" y2="250" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="70" y1="250" x2="530" y2="250" stroke="#0f172a" stroke-width="2"/>
<text x="70" y="272" font-size="14" text-anchor="middle" fill="#0f172a">55</text>
<text x="130" y="272" font-size="14" text-anchor="middle" fill="#0f172a">70</text>
<text x="215" y="272" font-size="14" text-anchor="middle" fill="#0f172a">85</text>
<text x="300" y="272" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">100</text>
<text x="385" y="272" font-size="14" text-anchor="middle" fill="#0f172a">115</text>
<text x="470" y="272" font-size="14" text-anchor="middle" fill="#0f172a">130</text>
<text x="530" y="272" font-size="14" text-anchor="middle" fill="#0f172a">145</text>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">circa 68%</text>
<text x="300" y="150" font-size="14" text-anchor="middle" fill="#0f172a">tra 85 e 115</text>
<text x="300" y="20" font-size="14" text-anchor="middle" fill="#0f172a">circa 95% tra 70 e 130 (media 100, deviazione standard 15)</text>
</svg>`,
      caption: "I punteggi di QI si distribuiscono come una curva a campana: la grande maggioranza della popolazione è vicina alla media."
    },
    {
      type: "example",
      title: "Che cosa significa «QI 115»?",
      html: `<p>Un punteggio di <b>115</b> non è «115 di intelligenza»: significa che la persona ha ottenuto un risultato di <b>una deviazione standard sopra la media</b> del suo gruppo di età, cioè migliore di circa l'84% dei coetanei. Un QI di 100 indica la media, e circa due terzi delle persone ottengono valori tra 85 e 115. Come ogni misura, il QI ha un <b>errore</b> (se rifai il test, potrai ottenere un punteggio un po' diverso, di qualche punto): per questo è più corretto parlare di intervallo che di numero esatto. Il QI dice <b>qualcosa</b> (la prestazione in abilità cognitive tipo ragionamento, linguaggio, memoria di lavoro), non tutto (non misura creatività, motivazione, carattere, talenti pratici).</p>`
    },
    {
      type: "text",
      title: "3. Una sola intelligenza o molte?",
      html: `<p><b>Il fattore g (Spearman, 1904).</b> Lo psicologo inglese <b>Charles Spearman</b> notò che chi va bene in una prova cognitiva tende ad andare bene anche nelle altre: le correlazioni sono quasi sempre positive. Con una tecnica statistica (l'analisi fattoriale) concluse che esiste un fattore comune, l'<b>intelligenza generale (g)</b>, più fattori specifici (<b>s</b>) per ciascun compito. È la <b>teoria dei due fattori</b>.</p>
<p><b>Le abilità mentali primarie (Thurstone, 1938).</b> <b>Louis Thurstone</b> contestò l'idea di un fattore unico e individuò <b>sette abilità primarie</b> relativamente indipendenti: comprensione verbale, fluidità verbale, numero, spazio, memoria, rapidità percettiva, ragionamento.</p>
<p><b>Fluida e cristallizzata (Cattell, Horn).</b> <b>Raymond Cattell</b> (anni Quaranta, poi con John Horn) distinse l'intelligenza <b>fluida</b> (ragionare su problemi nuovi senza conoscenze precedenti; picco in età giovane) da quella <b>cristallizzata</b> (conoscenze e vocabolario accumulati; continua a crescere con l'esperienza). Un anziano può essere più lento in un puzzle ma conoscere moltissimo.</p>
<p><b>La teoria triarchica (Sternberg, 1985).</b> <b>Robert Sternberg</b> sostiene che l'intelligenza abbia tre aspetti: <b>analitica</b> (analizzare e valutare, ciò che misurano i test scolastici), <b>creativa</b> (produrre idee nuove) e <b>pratica</b> (adattarsi alla vita reale, il «buon senso»).</p>
<p>Oggi la teoria più usata dagli psicologi è un compromesso, il modello gerarchico <b>Cattell-Horn-Carroll</b>: in cima un fattore generale, sotto più abilità ampie (fluida, cristallizzata, memoria, velocità...), sotto ancora abilità specifiche.</p>`
    },
    {
      type: "text",
      title: "4. Le intelligenze multiple di Gardner",
      html: `<p>Nel <b>1983</b> lo psicologo di Harvard <b>Howard Gardner</b> pubblicò <i>Frames of Mind</i> («Formae mentis» in italiano). Sostiene che esistano <b>intelligenze distinte e relativamente indipendenti</b>, ciascuna con un proprio funzionamento e una propria base cerebrale. Le prime sette:</p>
<ul>
<li><b>Linguistica</b>: usare le parole (scrittori, avvocati, poeti).</li>
<li><b>Logico-matematica</b>: ragionamento astratto, numeri (scienziati, programmatori).</li>
<li><b>Spaziale</b>: immaginare e manipolare forme nello spazio (architetti, piloti, pittori).</li>
<li><b>Musicale</b>: ritmo, altezza, timbro (compositori, musicisti).</li>
<li><b>Corporeo-cinestetica</b>: controllo del corpo e degli oggetti (atleti, ballerini, chirurghi).</li>
<li><b>Interpersonale</b>: capire gli altri e relazionarsi (insegnanti, leader, terapeuti).</li>
<li><b>Intrapersonale</b>: conoscere sé stessi, emozioni e obiettivi.</li>
</ul>
<p>Alla fine degli anni Novanta Gardner aggiunse l'intelligenza <b>naturalistica</b> (riconoscere e classificare piante, animali, fenomeni naturali) e discusse la possibilità di una intelligenza «esistenziale».</p>
<p><b>Perché ha avuto tanto successo nella scuola?</b> Perché dice che ognuno ha un profilo di talenti diverso, e invita gli insegnanti a presentare un argomento in <b>più modi</b> (parole, schemi, musica, movimento, lavoro di gruppo). Un bell'invito, che la scuola dovrebbe sempre accogliere.</p>
<p><b>Critiche.</b> Molti psicologi osservano che Gardner non ha fornito test oggettivi per le sue intelligenze, che alcune somigliano più a <b>talenti o competenze</b> che a «intelligenze», e che le abilità cognitive, di fatto, <b>correlano tra loro</b> (il che sostiene g). Soprattutto, non c'è prova che insegnare in base a «stili» o «intelligenze» preferiti da ciascuno migliori l'apprendimento: i cosiddetti <b>stili di apprendimento</b> sono un mito molto diffuso. Va invece bene variare i modi, per tutti.</p>`
    },
    {
      type: "widget",
      title: "Quale intelligenza di Gardner?",
      widget: "classify",
      options: {
        groups: ["Linguistica / logico-matematica", "Spaziale / musicale / corporea", "Personale (inter e intra)"],
        items: [
          ["✍️ Scrivere un racconto avvincente", 0],
          ["🧮 Dimostrare un teorema", 0],
          ["🏛️ Progettare un edificio", 1],
          ["🎻 Comporre un brano per violino", 1],
          ["🤸 Eseguire una difficile figura di ginnastica", 1],
          ["🤝 Mediare un litigio tra amici", 2],
          ["🪞 Riconoscere i propri punti deboli e fissarsi obiettivi", 2]
        ]
      },
      caption: "Ogni attività può mobilitare più intelligenze; qui scegli quella prevalente."
    },
    {
      type: "quiz",
      title: "Mini-quiz: dal QI a Gardner",
      questions: [
        { type: "mc", q: "Perché Binet creò la sua scala nel 1905?", options: ["Per individuare i bambini che avevano bisogno di sostegno a scuola", "Per selezionare i soldati", "Per dimostrare l'ereditarietà", "Per classificare i popoli"], answer: 0, explain: "Il ministero francese gli chiese uno strumento per riconoscere chi aveva bisogno di aiuto." },
        { type: "mc", q: "Un bambino di 6 anni (EC) risolve prove da 9 anni (EM). Quanto vale il QI col metodo di Stern?", options: ["150", "100", "67", "90"], answer: 0, explain: "(9 : 6) × 100 = 150." },
        { type: "tf", q: "Gardner ha proposto un'unica intelligenza generale misurabile con un solo test.", answer: false, explain: "Sostiene l'esistenza di più intelligenze distinte." },
        { type: "mc", q: "Il fattore g è...", options: ["L'intelligenza generale comune a molte prestazioni", "L'intelligenza musicale", "Un fattore genetico", "Un test per bambini"], answer: 0, explain: "Spearman (1904)." }
      ]
    },
    {
      type: "text",
      title: "5. Geni o ambiente? Il dibattito su ereditarietà e QI",
      html: `<p>Un tema molto discusso è il peso relativo di <b>natura</b> (geni) e <b>cultura</b> (ambiente). Gli studi su <b>gemelli</b> (monozigoti, con gli stessi geni, e dizigoti) e sulle <b>adozioni</b> mostrano che i geni contribuiscono alle differenze di QI. L'<b>ereditabilità</b> stimata è circa <b>0,2-0,4 nell'infanzia</b> e sale a <b>0,6-0,8 nell'età adulta</b> (un risultato che sorprende: col tempo le persone scelgono ambienti compatibili con i propri tratti). Ma attenzione a tre errori frequenti:</p>
<ol>
<li><b>L'ereditabilità riguarda le differenze in una popolazione, non il singolo.</b> Dire «ereditabilità 0,5» non significa «il tuo QI è per metà genetico»: significa che circa metà della variazione tra persone di quel gruppo, in quell'ambiente, è associata a differenze genetiche.</li>
<li><b>Ereditabile non vuol dire immutabile.</b> L'altezza è molto ereditabile, ma è cresciuta di diversi centimetri in un secolo grazie all'alimentazione. Lo stesso per l'intelligenza (vedi sotto).</li>
<li><b>Non si possono trarre conclusioni sulle differenze fra gruppi.</b> Le differenze medie osservate tra popolazioni riflettono ampiamente differenze di ambiente, istruzione, salute e opportunità: non provano nulla sui geni.</li>
</ol>
<p><b>L'ambiente conta.</b> Alimentazione e salute nella gravidanza e nei primi anni, stimoli linguistici, qualità dell'istruzione, povertà e stress, tutto influenza lo sviluppo cognitivo. Una revisione di molti studi (2018) ha stimato che <b>ogni anno in più di scuola</b> aumenta il QI di alcuni punti: l'istruzione non solo «mette conoscenze», ma allena il pensiero.</p>`
    },
    {
      type: "text",
      title: "6. L'effetto Flynn",
      html: `<p>Il neozelandese <b>James Flynn</b> notò (1984, poi 1987 su 14 Paesi) un fatto curioso: i punteggi nei test di QI, ricalibrati periodicamente sulla media, nel Novecento <b>sono saliti in quasi tutto il mondo</b> di circa <b>3 punti per decennio</b>. Un adulto medio di oggi, confrontato con le norme di inizio secolo, risulterebbe nettamente sopra la media. Eppure nessuno pensa che i nostri bisnonni fossero deboli di mente!</p>
<p>Le spiegazioni proposte sono ambientali, perché i geni non cambiano in così poco tempo: <b>più scolarizzazione</b>, migliore <b>nutrizione e salute</b>, ambienti familiari più stimolanti, più abitudine al pensiero astratto e alle <b>prove tipo test</b>, un mondo più ricco di simboli e schemi. Negli ultimi decenni, in alcuni Paesi (ad esempio Norvegia, Danimarca) l'aumento si è fermato o invertito: il fenomeno non è una legge di natura.</p>
<p><b>Lezione:</b> il QI non è una grandezza fissa inscritta nei geni, ma un risultato che dipende anche da ambiente e cultura.</p>`
    },
    {
      type: "example",
      title: "Due studenti, due profili",
      html: `<p>Luca eccelle in matematica e programmazione ma ha difficoltà a parlare in pubblico; Sara è bravissima a organizzare gruppi e a convincere, ma la geometria la mette in crisi. Un test unico di QI potrebbe dare a entrambi un punteggio simile, nascondendo profili molto diversi. È il motivo per cui psicologi e insegnanti guardano al <b>profilo</b> (punti forti e deboli) e non solo al numero finale. Allo stesso tempo, i punti deboli non sono destino: Luca può allenare la comunicazione, Sara la geometria, con strategie adatte e un po' di tempo.</p>`
    },
    {
      type: "text",
      title: "7. Limiti e usi dei test",
      html: `<p><b>Che cosa sanno predire.</b> I test di QI ben costruiti sono <b>affidabili</b> (danno risultati stabili) e hanno una certa <b>validità predittiva</b>: correlano con il rendimento scolastico e in parte con quello professionale. Servono in clinica e a scuola per individuare <b>difficoltà</b> (disabilità intellettiva, che richiede QI sotto 70 <i>e</i> difficoltà nell'adattamento quotidiano) o <b>plusdotazione</b> (QI sopra 130 circa), e per costruire interventi mirati.</p>
<p><b>Che cosa non possono dire.</b> Non misurano creatività, motivazione, perseveranza, intelligenza emotiva, valori. Il QI spiega solo una parte del successo nella vita. I <b>disturbi specifici dell'apprendimento</b> (DSA: dislessia, discalculia, disortografia, disgrafia, tutelati in Italia dalla legge 170 del 2010) <b>non dipendono da bassa intelligenza</b>: molti studenti con DSA hanno QI nella norma o alto, ma incontrano ostacoli in specifiche abilità.</p>
<p><b>Rischi e abusi.</b></p>
<ul>
<li><b>Distorsioni culturali</b>: molti test presuppongono conoscenze e abitudini di una certa cultura (vocabolario, tipi di problemi). Strumenti come le <b>matrici progressive di Raven</b> (1936) cercano di ridurre il peso della lingua e della cultura usando figure e sequenze.</li>
<li><b>Minaccia dello stereotipo</b>: nel <b>1995</b> <b>Claude Steele</b> e <b>Joshua Aronson</b> mostrarono che ricordare a un gruppo uno stereotipo negativo sul proprio rendimento (ad esempio presentare un test come «misura di capacità intellettive» a studenti afroamericani) può peggiorare la loro prestazione per l'ansia che crea.</li>
<li><b>Uso discriminatorio</b>: nel Novecento test di intelligenza furono usati a sostegno di politiche di <b>eugenetica</b> e di restrizione all'immigrazione. Lo studioso <b>Stephen Jay Gould</b>, nel libro <i>La misura dell'uomo</i> (1981), ricostruì in modo critico questa storia di errori e pregiudizi.</li>
<li><b>Etichette fisse</b>: dire «tu sei portato/non sei portato» frena i ragazzi; la ricerca di Carol Dweck (vedi la lezione su emozioni e motivazione) mostra che pensare l'intelligenza come qualcosa che cresce con l'impegno aiuta a perseverare.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'intelligenza",
      intro: "Qualche immagine per ricordare i concetti.",
      tabs: [
        { label: "🔨 La cassetta degli attrezzi", html: `<p>Immagina di avere una cassetta con tanti attrezzi. <b>Spearman</b> vede un «motore» unico (g) che alimenta tutti gli attrezzi; <b>Thurstone</b> e <b>Gardner</b> vedono attrezzi distinti (martello, pinze, cacciavite); <b>Cattell</b> distingue gli attrezzi per forgiare cose nuove (fluida) da quelli fatti di esperienze accumulate (cristallizzata). Il modello attuale (Cattell-Horn-Carroll) li mette insieme: un motore generale, più strumenti ampi e specifici.</p>` },
        { label: "📏 Il righello e il termometro", html: `<p>Un test di QI è come un righello che misura una sola dimensione (alcune abilità cognitive), non come una pagella di tutta la persona. E ogni misura ha un margine d'errore: per questo ci si fida di più di una serie di prove che di una sola. Inoltre, il righello va usato con uno scopo: il termometro dice se c'è febbre, ma per curare servono altri strumenti. Il QI segnala dove cercare, non cosa fare nella vita.</p>` },
        { label: "🌱 Seme e terreno", html: `<p>Il seme è il patrimonio genetico, il terreno è l'ambiente (alimentazione, stimoli, scuola, relazioni). Lo stesso seme in terreni diversi cresce diversamente; semi diversi nello stesso terreno danno risultati diversi. Il dibattito «geni <i>o</i> ambiente» è mal posto: lavorano <b>insieme</b>, e l'effetto Flynn mostra quanto può cambiare il terreno.</p>` },
        { label: "🎮 Il profilo a radar", html: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><polygon points="300,40 400,90 420,190 300,260 180,190 200,90" fill="none" stroke="#94a3b8" stroke-width="2"/><polygon points="300,90 360,110 380,180 300,225 220,170 240,110" fill="#93c5fd" fill-opacity="0.6" stroke="#1d4ed8" stroke-width="3"/><text x="300" y="30" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">linguistica</text><text x="455" y="95" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">logico-mat.</text><text x="470" y="200" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">spaziale</text><text x="300" y="285" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">musicale</text><text x="120" y="200" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">corporea</text><text x="125" y="95" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">personale</text></svg><p>Un grafico a radar mostra un <b>profilo</b>: ognuno ha punti forti e punti deboli. È l'idea didattica che si porta via da Gardner, anche se la scienza non conferma tutte le sue «intelligenze» come entità separate.</p>` }
      ]
    },
    {
      type: "decision",
      title: "Sei Alfred Binet, Parigi 1904",
      html: `<p>Il ministero ti chiede di costruire uno strumento per riconoscere i bambini che non riescono a seguire la scuola normale. Un collega propone di usarlo per <b>separare</b> i bambini «poco intelligenti» in classi speciali, definitivamente. Un altro vuole <b>non fare nulla</b>, perché «ogni misurazione è ingiusta». Tu hai un'idea tua.</p>`,
      question: "Come progetti e usi la scala?",
      options: [
        { label: "La uso per classificare i bambini in modo permanente.", outcome: "È proprio l'uso che Binet voleva evitare. Un punteggio può cambiare con l'apprendimento e l'ambiente; classificare per sempre crea etichette che frenano e discriminano." },
        { label: "Rinuncio: nessuna misura è giusta.", outcome: "Senza strumenti, i bambini in difficoltà non vengono riconosciuti: restano senza aiuto, o vengono puniti perché «svogliati». Il rifiuto della misura non elimina il problema." },
        { label: "Costruisco prove graduate per individuare chi ha bisogno di sostegno, e le uso per offrire un aiuto temporaneo e adatto.", outcome: "È ciò che fece Binet: uno strumento al servizio dell'educazione, con la consapevolezza che l'intelligenza si sviluppa e che i punteggi non sono destino." }
      ],
      answer: 2,
      explain: "Binet insisteva sul fatto che la sua scala dovesse servire a <b>aiutare</b>, non a stigmatizzare: temeva che il punteggio fosse preso per una misura immutabile. Il suo avvertimento fu largamente ignorato quando i test arrivarono in altri Paesi e furono usati in modo rigido e a volte discriminatorio."
    },
    {
      type: "conceptMap",
      title: "Mappa: intelligenza",
      nodes: [
        { id: "int", label: "Intelligenza", x: 50, y: 6, color: "#3b82f6", html: "Capacità di ragionare, risolvere problemi, imparare e adattarsi.", why: "Non si osserva direttamente: è un costrutto teorico inferito da prestazioni. Per questo esistono molte definizioni e molte teorie." },
        { id: "mis", label: "Misura: QI", x: 14, y: 40, color: "#10b981", html: "Binet-Simon (1905), Stern (1912), Wechsler (1939).", why: "Nasce per un bisogno educativo concreto (aiutare i bambini in difficoltà); l'uso come etichetta fissa fu poi criticato." },
        { id: "uni", label: "Una sola?", x: 38, y: 40, color: "#f59e0b", html: "Fattore g (Spearman 1904), modelli gerarchici.", why: "Le prove cognitive correlano tra loro: questo suggerisce un fattore comune, ma non esclude abilità specifiche (Thurstone, Cattell)." },
        { id: "mol", label: "Molte?", x: 62, y: 40, color: "#ef4444", html: "Thurstone, Sternberg, Gardner (1983).", why: "Nascono dall'osservazione che esistono talenti diversi (musica, sport, relazioni); mancano tuttavia prove empiriche per le intelligenze di Gardner come entità separate." },
        { id: "gen", label: "Geni e ambiente", x: 86, y: 40, color: "#8b5cf6", html: "Studi su gemelli e adozioni; effetto Flynn.", why: "Le differenze individuali sono in parte genetiche, ma l'ambiente (salute, scuola) può cambiare molto: il Flynn effect, +3 punti per decennio, lo prova." },
        { id: "lim", label: "Limiti dei test", x: 50, y: 78, color: "#0ea5e9", html: "Errore di misura, bias culturali, minaccia dello stereotipo.", why: "Un punteggio non è un destino: la storia (eugenetica, discriminazioni) mostra il costo di un uso rigido e acritico dei test." }
      ],
      edges: [["int", "mis", "si misura con"], ["int", "uni", "teoria"], ["int", "mol", "teoria"], ["int", "gen", "origine"], ["mis", "lim", "ha"], ["gen", "lim", "influenza"]]
    },
    {
      type: "curiosity",
      title: "Può una macchina essere intelligente?",
      html: `<p>Nel <b>1950</b> il matematico britannico <b>Alan Turing</b>, nell'articolo <i>Computing Machinery and Intelligence</i>, propose di sostituire la domanda «le macchine pensano?» con un gioco: un interrogatore conversa per scritto con una persona e con una macchina; se non riesce a distinguerle, la macchina «supera il test». Oggi i programmi di intelligenza artificiale eccellono in compiti specifici (scacchi, traduzione, generazione di testi), ma resta aperto il dibattito se questo equivalga a «capire». Anche qui riemerge l'antica domanda: intelligenza è un'abilità unica, oppure un insieme di capacità?</p>`
    },
    {
      type: "curiosity",
      title: "Mens sana in... bilancia?",
      html: `<p>Alcuni studi hanno mostrato che l'<b>attività fisica regolare</b> e un <b>buon sonno</b> favoriscono attenzione, memoria e prestazioni cognitive in bambini e adolescenti. E la <b>lettura</b> nell'infanzia è associata a vocabolario più ampio e a migliori risultati scolastici. Se l'intelligenza fosse solo «geni», questi effetti sarebbero pochi: sono invece una conferma del peso dell'ambiente e delle abitudini quotidiane, ovvero di ciò su cui <b>puoi</b> intervenire.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Binet e Simon (1905): scala per aiutare i bambini in difficoltà; Stern (1912): <b>QI = (EM : EC) × 100</b>; Wechsler: QI di deviazione, media 100, d.s. 15.</li>
<li>Circa il 68% della popolazione ha QI tra 85 e 115, il 95% tra 70 e 130.</li>
<li><b>Spearman</b>: fattore g. <b>Thurstone</b>: sette abilità primarie. <b>Cattell</b>: fluida e cristallizzata. <b>Sternberg</b>: analitica, creativa, pratica. <b>Gardner</b> (1983): intelligenze multiple.</li>
<li>Ereditabilità ≠ immutabilità; effetto Flynn: +3 punti a decennio nel Novecento.</li>
<li>Un test dà un'<b>informazione parziale</b>, con errore di misura e possibili distorsioni culturali.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: geni, ambiente, test",
      questions: [
        { type: "mc", q: "Che cosa descrive l'effetto Flynn?", options: ["L'aumento dei punteggi di QI nel Novecento", "La paura dei test", "La differenza tra maschi e femmine", "L'ereditarietà del QI"], answer: 0, explain: "Circa 3 punti per decennio, per cause ambientali." },
        { type: "tf", q: "Un'alta ereditabilità del QI significa che esso non può essere modificato dall'ambiente.", answer: false, explain: "Ereditabile non vuol dire immutabile." },
        { type: "mc", q: "Quale di queste NON è un'intelligenza della lista originaria di Gardner (1983)?", options: ["Naturalistica", "Linguistica", "Musicale", "Spaziale"], answer: 0, explain: "La naturalistica fu aggiunta alla fine degli anni Novanta." },
        { type: "mc", q: "Una persona con dislessia ha necessariamente un QI basso?", options: ["No, i DSA non dipendono da bassa intelligenza", "Sì sempre", "Solo da adulta", "Solo se maschio"], answer: 0, explain: "I DSA sono difficoltà specifiche in lettura, scrittura o calcolo." }
      ]
    }
  ],
  glossary: [
    { t: "Intelligenza", d: "Capacità di ragionare, risolvere problemi, imparare dall'esperienza e adattarsi all'ambiente." },
    { t: "Costrutto", d: "Concetto teorico non direttamente osservabile, costruito per spiegare dei dati." },
    { t: "Età mentale", d: "Età dei bambini medi che superano le stesse prove (Binet)." },
    { t: "Quoziente intellettivo (QI)", d: "Misura del rendimento in test cognitivi; da Stern (EM:EC × 100) a Wechsler (deviazione dalla media)." },
    { t: "Fattore g", d: "Intelligenza generale comune a tutte le prove (Spearman)." },
    { t: "Intelligenza fluida", d: "Capacità di ragionare su problemi nuovi (Cattell)." },
    { t: "Intelligenza cristallizzata", d: "Conoscenze e abilità accumulate con l'esperienza (Cattell)." },
    { t: "Intelligenze multiple", d: "Teoria di Gardner (1983) che distingue più intelligenze relativamente indipendenti." },
    { t: "Ereditabilità", d: "Quota di variazione di un tratto in una popolazione associata alla variazione genetica." },
    { t: "Effetto Flynn", d: "Aumento nel tempo dei punteggi nei test di QI osservato nel XX secolo." },
    { t: "Minaccia dello stereotipo", d: "Calo di prestazione dovuto al timore di confermare uno stereotipo negativo sul proprio gruppo." },
    { t: "DSA", d: "Disturbi specifici dell'apprendimento (dislessia, disgrafia, disortografia, discalculia)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi creò nel 1905 la prima scala di intelligenza per i bambini?", options: ["Binet e Simon", "Wechsler", "Gardner", "Galton"], answer: 0, explain: "Alfred Binet e Théodore Simon, in Francia." },
      { type: "num", q: "Un bambino di 10 anni risolve prove adatte a 12 anni. Quanto vale il QI secondo la formula di Stern?", answer: 120, tol: 0, explain: "(12 : 10) × 100 = 120." },
      { type: "mc", q: "Nel QI di deviazione di Wechsler, la media e la deviazione standard sono...", options: ["100 e 15", "50 e 10", "10 e 100", "0 e 1"], answer: 0, explain: "Media 100, deviazione standard 15." },
      { type: "tf", q: "Circa il 95% della popolazione ha un QI compreso tra 70 e 130.", answer: true, explain: "Due deviazioni standard attorno alla media." },
      { type: "mc", q: "Spearman parlò di...", options: ["Fattore g", "Intelligenze multiple", "Intelligenza triarchica", "Intelligenza emotiva"], answer: 0, explain: "Teoria dei due fattori (1904)." },
      { type: "text", q: "Chi pubblicò «Frames of Mind» nel 1983?", answer: ["gardner", "howard gardner"], explain: "Howard Gardner." },
      { type: "mc", q: "Quale studioso distinse l'intelligenza fluida dalla cristallizzata?", options: ["Cattell", "Binet", "Stern", "Piaget"], answer: 0, explain: "Raymond Cattell, con Horn." },
      { type: "mc", q: "La critica più frequente alle intelligenze multiple è...", options: ["Mancano test e prove empiriche indipendenti per ognuna", "Sono troppo poche", "Sono state sostituite dal QI", "Riguardano solo i bambini"], answer: 0, explain: "Inoltre le abilità correlano tra loro." },
      { type: "mc", q: "Perché l'effetto Flynn è spiegato con fattori ambientali?", options: ["I geni non possono cambiare così in fretta nella popolazione", "I test sono diventati più facili", "I bambini nascono più intelligenti", "Gli adulti studiano più a lungo"], answer: 0, explain: "L'aumento è troppo rapido per essere genetico: scuola, nutrizione, stimoli." },
      { type: "mc", q: "La «minaccia dello stereotipo» (Steele e Aronson, 1995) indica che...", options: ["Il timore di confermare uno stereotipo negativo può peggiorare la prestazione", "Gli stereotipi sono sempre veri", "I test sono inutili", "Gli stereotipi migliorano la prestazione"], answer: 0, explain: "L'ansia indotta riduce il rendimento." }
    ]
  }
});
