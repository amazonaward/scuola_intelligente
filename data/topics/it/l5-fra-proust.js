TOPIC('it', {
  id: "l5-fra-proust",
  title: "Proust e il romanzo del Novecento",
  intro: "«Longtemps, je me suis couché de bonne heure.» Con questa frase comincia uno dei romanzi più lunghi e più influenti di sempre: <i>À la recherche du temps perdu</i> di <b>Marcel Proust</b> (sette volumi, 1913–1927). Qui il romanzo smette di raccontare soprattutto «che cosa succede» e comincia a esplorare <b>come si ricorda, come si ama, come passa il tempo dentro di noi</b>. Basta un biscotto inzuppato nel tè per aprire un intero mondo perduto: è la celebre <b>madeleine</b>. In questa lezione vediamo la vita di Proust, la struttura della <i>Recherche</i>, la differenza tra memoria volontaria e involontaria, e come il romanzo francese del Novecento cambia dopo di lui.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Il Novecento mette in crisi il romanzo ottocentesco",
      html: `<p>Nei corsi precedenti hai visto il <b>romanzo realista</b> dell'Ottocento (Balzac, Stendhal, Flaubert, Zola): un narratore onnisciente, una trama ben costruita, una società descritta dall'esterno, personaggi che si evolvono in una cronologia chiara. All'inizio del Novecento questo modello comincia a sembrare insufficiente, perché cambia l'idea stessa di <b>persona</b> e di <b>tempo</b>:</p>
<ul>
<li>il filosofo <b>Henri Bergson</b> (<i>Essai sur les données immédiates de la conscience</i>, 1889) distingue il tempo dell'orologio, misurabile e uniforme, dalla <b>durée</b>, il tempo vissuto, che si dilata e si contrae a seconda di ciò che proviamo;</li>
<li>la <b>psicoanalisi</b> di Freud (<i>L'interpretazione dei sogni</i>, 1899–1900) mostra che l'io non è padrone in casa propria: esiste un inconscio;</li>
<li>la prima guerra mondiale (1914–1918) rompe la fiducia nel progresso e nell'ordine borghese.</li>
</ul>
<p>Il romanzo risponde in modi diversi. Nel mondo di lingua inglese <b>Joyce</b> (<i>Ulysses</i>, 1922) e <b>Virginia Woolf</b> sperimentano il «flusso di coscienza»; in lingua tedesca <b>Thomas Mann</b> e <b>Kafka</b>; in Italia <b>Svevo</b> e <b>Pirandello</b>. In Francia il protagonista di questa rivoluzione è <b>Marcel Proust</b>. Il romanzo diventa <b>interiore</b>: l'avventura non è più il viaggio o il duello, ma il lavoro della coscienza che ricorda, interpreta, si inganna e infine capisce.</p>`
    },
    {
      type: "text",
      title: "2. Marcel Proust (1871–1922): la vita",
      html: `<p><b>Marcel Proust</b> nasce a Parigi il <b>10 luglio 1871</b>, figlio di un medico illustre (Adrien Proust) e di Jeanne Weil, di famiglia ebrea; la madre è ebrea, il padre cattolico: una condizione che avrà peso durante l'<b>affare Dreyfus</b> (1894–1906), nel quale Proust si schiera dalla parte dei dreyfusardi. Fin da bambino soffre di <b>asma</b>, malattia che condizionerà tutta la vita. Le vacanze a Illiers (vicino a Chartres) e a Auteuil sono all'origine di <b>Combray</b>, il paese immaginario dell'infanzia del romanzo; nel 1971, per il centenario della nascita, Illiers ha preso ufficialmente il nome di <b>Illiers-Combray</b>.</p>
<p>Giovane brillante e mondano, frequenta i salotti dell'aristocrazia e dell'alta borghesia parigina (un mondo che userà come «materiale» per il romanzo) e pubblica nel 1896 una raccolta di prose e poesie, <i>Les Plaisirs et les jours</i>. Traduce e commenta <b>John Ruskin</b>, critico d'arte inglese, e scrive un romanzo autobiografico rimasto incompiuto (<i>Jean Santeuil</i>, pubblicato postumo nel 1952) e il saggio <i>Contre Sainte-Beuve</i>, in cui sostiene che l'opera di uno scrittore non si spiega con la sua biografia: l'«io» che scrive è diverso dall'«io» che vive in società.</p>
<p>Dopo la morte dei genitori (il padre nel 1903, la madre nel 1905) Proust si ritira sempre di più. Dal 1909 si dedica interamente alla <i>Recherche</i>, scrivendo soprattutto di notte, a letto, in una camera con le pareti rivestite di <b>sughero</b> per isolarla dai rumori del boulevard Haussmann. Corregge senza fine le bozze, aggiungendo pagine e pagine (le celebri <i>paperoles</i>, strisce di carta incollate). Muore a Parigi il <b>18 novembre 1922</b>, a 51 anni, di bronchite e polmonite, lasciando gli ultimi volumi da rivedere: usciranno postumi.</p>`
    },
    {
      type: "widget",
      title: "Le date della Recherche",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: 1871, label: "Nasce Marcel Proust a Parigi", icon: "👶" },
          { year: 1896, label: "Les Plaisirs et les jours", icon: "📖" },
          { year: 1909, label: "Inizia la stesura della Recherche", icon: "✍️" },
          { year: 1913, label: "Du côté de chez Swann (Grasset, a spese dell'autore)", icon: "📚" },
          { year: 1919, label: "À l'ombre des jeunes filles en fleurs: premio Goncourt", icon: "🏆" },
          { year: 1922, label: "Morte di Proust", icon: "🕯️" },
          { year: 1927, label: "Le Temps retrouvé: ultimo volume postumo", icon: "⌛" }
        ]
      },
      caption: "Dalla nascita al compimento postumo dell'opera: 56 anni."
    },
    {
      type: "text",
      title: "3. À la recherche du temps perdu: l'opera",
      html: `<p>La <b><i>Recherche</i></b> è composta da <b>sette parti</b> (circa tremila pagine nelle edizioni correnti):</p>
<table>
<tr><th>Titolo</th><th>Anno</th><th>Contenuto in breve</th></tr>
<tr><td><i>Du côté de chez Swann</i></td><td>1913</td><td>L'infanzia a Combray (con la madeleine), l'amore di Swann per Odette, i primi amori del narratore</td></tr>
<tr><td><i>À l'ombre des jeunes filles en fleurs</i></td><td>1919</td><td>L'adolescenza, Balbec, l'incontro con Albertine e le «jeunes filles»; premio Goncourt 1919</td></tr>
<tr><td><i>Le Côté de Guermantes</i></td><td>1920–21</td><td>Il mondo mondano e aristocratico dei Guermantes</td></tr>
<tr><td><i>Sodome et Gomorrhe</i></td><td>1921–22</td><td>L'omosessualità, la gelosia, il tema della menzogna</td></tr>
<tr><td><i>La Prisonnière</i></td><td>1923 (postumo)</td><td>Il narratore e Albertine, «prigioniera» in casa sua</td></tr>
<tr><td><i>Albertine disparue</i></td><td>1925 (postumo)</td><td>La fuga, la morte di Albertine, il lutto e l'oblio</td></tr>
<tr><td><i>Le Temps retrouvé</i></td><td>1927 (postumo)</td><td>La guerra, il tempo che ha cambiato tutti, la scoperta della vocazione di scrittore</td></tr>
</table>
<p>La storia di <i>Du côté de chez Swann</i> è nota: Proust lo propose a vari editori; la <b>Nouvelle Revue Française</b> (con André Gide) rifiutò il manoscritto. Proust lo pubblicò allora nel novembre 1913 a proprie spese presso <b>Grasset</b>. Gide riconobbe poi l'errore: la NRF (casa Gallimard) pubblicherà i volumi successivi.</p>
<p><b>Il narratore.</b> Nel romanzo parla un «je» che racconta la propria vita e che non ha un nome stabile (in rari passaggi il testo lascia intendere il nome «Marcel»). Non coincide con l'autore: Proust ha fatto un uso libero dei propri ricordi. La domanda che attraversa l'opera è: <b>come ritrovare il tempo perduto?</b> La risposta arriva alla fine: attraverso l'<b>arte</b>.</p>`
    },
    {
      type: "svg",
      title: "Memoria volontaria e memoria involontaria",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#1e293b" font-weight="bold">Due modi di ricordare</text>
<rect x="24" y="48" width="250" height="210" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<text x="149" y="78" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">MÉMOIRE VOLONTAIRE</text>
<text x="149" y="108" font-size="14" text-anchor="middle" fill="#1e3a8a">Decido di ricordare</text>
<text x="149" y="132" font-size="14" text-anchor="middle" fill="#1e3a8a">Ricostruisco con l'intelligenza</text>
<text x="149" y="156" font-size="14" text-anchor="middle" fill="#1e3a8a">Il passato è pallido, schematico</text>
<text x="149" y="180" font-size="14" text-anchor="middle" fill="#1e3a8a">come un'informazione</text>
<text x="149" y="226" font-size="14" text-anchor="middle" fill="#334155" font-style="italic">«Che cosa ho fatto a Combray?»</text>
<rect x="326" y="48" width="250" height="210" rx="14" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
<text x="451" y="78" font-size="16" text-anchor="middle" fill="#78350f" font-weight="bold">MÉMOIRE INVOLONTAIRE</text>
<text x="451" y="108" font-size="14" text-anchor="middle" fill="#78350f">Un gusto, un odore, un suono</text>
<text x="451" y="132" font-size="14" text-anchor="middle" fill="#78350f">Il passato torna da solo</text>
<text x="451" y="156" font-size="14" text-anchor="middle" fill="#78350f">intero, vivo, con le sue emozioni</text>
<text x="451" y="180" font-size="14" text-anchor="middle" fill="#78350f">La madeleine nel tè</text>
<text x="451" y="226" font-size="14" text-anchor="middle" fill="#334155" font-style="italic">«Tout Combray est sorti»</text>
<path d="M 274 150 L 326 150" stroke="#475569" stroke-width="3"/>
<polygon points="326,150 314,143 314,157" fill="#475569"/>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#334155">Per Proust solo la seconda ci restituisce davvero il passato.</text>
</svg>`,
      caption: "La distinzione è al centro della Recherche: la madeleine è il caso più celebre di memoria involontaria."
    },
    {
      type: "example",
      title: "Un testo da leggere: la madeleine",
      html: `<p>Il narratore, adulto e stanco, beve del tè in cui ha inzuppato un pezzetto di <i>madeleine</i> (il dolcetto a forma di conchiglia). Dal brano:</p>
<p><i>«Et tout d'un coup le souvenir m'est apparu. Ce goût, c'était celui du petit morceau de madeleine que le dimanche matin à Combray [...] ma tante Léonie m'offrait après l'avoir trempé dans son infusion de thé ou de tilleul.»</i></p>
<p>E subito dopo: <i>«[...] et tout Combray et ses environs, tout cela qui prend forme et solidité, est sorti, ville et jardins, de ma tasse de thé.»</i></p>
<p><b>Analisi.</b> Il passaggio è una scoperta in tre tempi: il narratore prova prima un <b>piacere</b> misterioso (<i>«un plaisir délicieux m'avait envahi»</i>), poi si chiede da dove venga, poi arriva il <b>ricordo</b>. Notiamo: (1) la <b>frase lunga</b> e ricca di subordinate, che imita il movimento della memoria che si dispiega; (2) l'uso dell'<b>imparfait</b> per l'abitudine («ma tante Léonie m'offrait» ogni domenica); (3) la metafora della <b>fioritura</b> (Proust paragona il ricordo a fiorellini giapponesi che si aprono nell'acqua). La sensazione presente (il gusto) ridà vita a una sensazione identica del passato: per un istante i due tempi coincidono, e il narratore esce dal tempo.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Proust e la Recherche",
      questions: [
        { type: "mc", q: "In che anno uscì Du côté de chez Swann?", options: ["1913", "1927", "1857"], answer: 0, explain: "Fu pubblicato a spese dell'autore presso Grasset nel novembre 1913." },
        { type: "tf", q: "La memoria involontaria è un ricordo che si decide di cercare con la volontà.", answer: false, explain: "È il contrario: il ricordo ritorna da solo, per una sensazione presente (il gusto della madeleine)." },
        { type: "mc", q: "Che cos'è la «durée» per Bergson?", options: ["Il tempo vissuto dalla coscienza", "Il tempo misurato dall'orologio", "La durata di un romanzo"], answer: 0, explain: "Bergson oppone il tempo vissuto (qualitativo) al tempo dell'orologio (quantitativo)." },
        { type: "mc", q: "Qual è la soluzione finale della Recherche alla perdita del tempo?", options: ["L'arte, la scrittura", "La vita mondana", "I viaggi"], answer: 0, explain: "Nel Temps retrouvé il narratore scopre la propria vocazione: scrivere l'opera che ritrova il tempo perduto." }
      ]
    },
    {
      type: "text",
      title: "4. I grandi temi della Recherche",
      html: `<p><b>Il tempo.</b> Il titolo parla di «temps perdu»: il tempo che passa, che consuma gli esseri e i sentimenti, ma anche il tempo sprecato nella vita mondana. Alla fine, invitato a un ricevimento dei Guermantes anni dopo, il narratore non riconosce gli amici: sono tutti invecchiati, «mascherati» dal tempo. Allora capisce che il tempo non è perduto se l'arte lo fissa.</p>
<p><b>L'amore e la gelosia.</b> L'amore proustiano è fondato sull'<b>immaginazione</b> e sul <b>desiderio</b>: si ama ciò che manca o sfugge. Il caso emblematico è l'amore di <b>Swann</b> per <b>Odette de Crécy</b>, donna che non è nemmeno il suo «tipo» (<i>«dire que j'ai gâché des années de ma vie [...] pour une femme qui ne me plaisait pas, qui n'était pas mon genre !»</i>, è la frase con cui Swann si risveglia, alla fine di <i>Un amour de Swann</i>). La gelosia lo spinge a cercare di possedere la verità sull'altro, che è impossibile. Lo stesso accade al narratore con <b>Albertine</b>.</p>
<p><b>La società.</b> I salotti sono il teatro in cui Proust osserva la vanità, lo snobismo, il gioco dei cambiamenti di rango. Si confrontano il salotto borghese dei <b>Verdurin</b> e il mondo aristocratico dei <b>Guermantes</b>. Con il tempo le gerarchie si ribaltano: alla fine la signora Verdurin diventerà principessa di Guermantes. L'affare <b>Dreyfus</b> e la guerra mostrano come le opinioni mondane siano superficiali e volubili.</p>
<p><b>L'arte come salvezza.</b> Nel romanzo compaiono tre artisti immaginari: lo scrittore <b>Bergotte</b>, il pittore <b>Elstir</b>, il musicista <b>Vinteuil</b> (con la «petite phrase» della sua sonata, che Swann ascolta e che diventa l'«inno» del suo amore). Attraverso la loro opera, il narratore comprende che l'arte permette di vedere il mondo con occhi nuovi e di trasformare l'esperienza passata in qualcosa di duraturo. L'ultimo volume dice che la vera vita, la vita finalmente scoperta, è <b>la letteratura</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che... la madeleine non è sempre stata una madeleine?",
      html: `<p>Nelle prime stesure di Proust il ricordo non nasceva da una madeleine ma da una <b>fetta di pane tostato</b> inzuppata nel tè. Fu nella versione definitiva che Proust scelse la madeleine, un dolce tipico del nord della Francia. Da allora «avere la sua madeleine» è diventato un modo di dire in francese, e in molte altre lingue, per indicare un oggetto che risveglia ricordi dell'infanzia. Anche la psicologia contemporanea parla di <b>«effetto Proust»</b>: odori e sapori sono tra i ricordi più vividi perché il sistema olfattivo è collegato a zone del cervello legate a memoria ed emozione.</p>`
    },
    {
      type: "decision",
      title: "1913: pubblicare a spese proprie?",
      html: `<p>Sei <b>Marcel Proust</b>, 41 anni, nel 1913. Hai dedicato anni a un romanzo lunghissimo, innovativo, senza trama tradizionale. Hai proposto il manoscritto della prima parte a editori importanti: la NRF di Gide e Gallimard lo rifiuta (ti si rimprovera un'opera «mondana» e troppo dispersiva), altri editori ti dicono che nessuno lo leggerà. Ti resta una possibilità: <b>pubblicare a tue spese</b> presso Bernard Grasset, che accetta di stampare il libro, ma solo se paghi tu.</p>`,
      question: "Che cosa avresti fatto?",
      options: [
        { label: "Rinunciare e abbandonare il progetto", outcome: "Avresti perso l'unica occasione di far vivere l'opera; senza quel volume la Recherche sarebbe forse rimasta sconosciuta." },
        { label: "Pubblicare a spese proprie presso Grasset", outcome: "È ciò che fece Proust: Grasset stampò il libro nel novembre 1913, a spese dell'autore. Fu una scommessa che cambiò il corso del romanzo." },
        { label: "Tagliare drasticamente il libro per renderlo più «vendibile»", outcome: "Avresti tradito l'essenza dell'opera: il suo fascino sta proprio nella lentezza e nella ricchezza delle frasi." }
      ],
      answer: 1,
      explain: "Proust pubblicò Du côté de chez Swann presso Grasset nel 1913, a proprie spese. Il successo critico arrivò presto; la NRF riconobbe l'errore (Gide scrisse a Proust una lettera di scuse) e pubblicò i volumi seguenti. Nel 1919 il secondo volume ottenne il premio Goncourt."
    },
    {
      type: "text",
      title: "5. Lo stile: la frase lunga e il tempo che si dilata",
      html: `<p>Lo stile di Proust è riconoscibile subito. La sua <b>frase</b> è lunga, ricca di incisi, subordinate, parentesi, che seguono i movimenti del pensiero. Non è prolissità: il lettore deve «entrare» nel flusso della coscienza e sentire il tempo dilatarsi. Alcune caratteristiche:</p>
<ul>
<li><b>l'analisi psicologica</b> minuziosa: ogni gesto, ogni sguardo è interpretato;</li>
<li><b>la metafora</b> come strumento di conoscenza: Proust dice che solo la metafora può unire due cose diverse e rivelare l'essenza di entrambe;</li>
<li>l'uso dell'<b>imparfait</b> e del <b>passé simple</b>: l'imparfait per ciò che è abituale, ripetuto («tous les jours...»), il passé simple per l'evento puntuale;</li>
<li>il <b>tempo del racconto</b> irregolare: pagine per un pomeriggio di salotto, una riga per dieci anni;</li>
<li>le <b>digressioni</b>: riflessioni sulla memoria, sull'arte, sul sonno, sull'abitudine.</li>
</ul>
<p>Una frase chiave è nel <i>Temps retrouvé</i>: <i>«La vraie vie, la vie enfin découverte et éclaircie, la seule vie par conséquent pleinement vécue, c'est la littérature.»</i> Per Proust scrivere non è ornare la vita: è <b>comprenderla</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per entrare nella Recherche",
      intro: "Tremila pagine fanno paura. Ecco tre porte d'ingresso diverse.",
      tabs: [
        {
          label: "🍪 Un esperimento di memoria",
          html: `<p>Prova la tua <b>madeleine</b>. Annusa un profumo che non senti da anni (un detersivo, una crema, un cibo) o ascolta una canzone dell'infanzia: che cosa riaffiora? Un luogo, una persona, una stanza? Scrivi in cinque righe ciò che ritrovi. Noterai due cose proustiane: il ricordo arriva <i>da solo</i> e porta con sé <i>emozioni e dettagli</i> che non avresti saputo «richiamare» a comando.</p>`
        },
        {
          label: "🎨 Il tempo come pittura",
          html: `<p>Nella Recherche il pittore Elstir dipinge il mare senza separare cielo e acqua, come impressione. Proust ammirava i pittori (Vermeer, Monet, Chardin) e voleva fare con le parole ciò che l'impressionismo faceva con i colori: catturare la <i>sensazione</i> prima dell'idea. Guarda una <b>Cattedrale di Rouen</b> di Monet (la stessa facciata dipinta in ore diverse): è esattamente l'idea di un tempo che muta l'oggetto.</p>`
        },
        {
          label: "📚 Confronto con altri romanzi",
          html: `<table>
<tr><th></th><th>Balzac / Flaubert</th><th>Proust</th></tr>
<tr><td>Narratore</td><td>Onnisciente, esterno</td><td>Un «je» che ricorda</td></tr>
<tr><td>Tempo</td><td>Cronologico, lineare</td><td>Soggettivo, a spirale</td></tr>
<tr><td>Trama</td><td>Intreccio centrale</td><td>Percorso interiore</td></tr>
<tr><td>Obiettivo</td><td>Rappresentare la società</td><td>Comprendere la coscienza e il tempo</td></tr>
<tr><td>Eredi</td><td>Zola, Maupassant</td><td>Woolf, Joyce, Svevo, Nouveau Roman</td></tr>
</table>`
        }
      ]
    },
    {
      type: "text",
      title: "6. Dopo Proust: il romanzo francese del Novecento",
      html: `<p>Dopo la <i>Recherche</i> il romanzo francese esplora molte strade. Alcune tappe da conoscere:</p>
<ul>
<li><b>André Gide</b> (1869–1951): <i>Les Faux-monnayeurs</i> (1925), romanzo che mette in scena uno scrittore che scrive il romanzo che stiamo leggendo (la «mise en abyme»); Premio Nobel nel 1947;</li>
<li><b>Louis-Ferdinand Céline</b> (1894–1961): <i>Voyage au bout de la nuit</i> (1932), lingua parlata, violenta, disperata, esperienza della guerra e del colonialismo;</li>
<li><b>André Malraux</b> (1901–1976): <i>La Condition humaine</i> (1933, premio Goncourt), romanzo dell'impegno nella rivoluzione cinese;</li>
<li><b>Sartre e Camus</b> (anni 1938–1947): romanzi filosofici sull'esistenza e l'assurdo (li vedremo nella lezione sull'esistenzialismo);</li>
<li><b>Nathalie Sarraute</b> (<i>Tropismes</i>, 1939; <i>L'Ère du soupçon</i>, 1956) e il <b>Nouveau Roman</b> (Alain Robbe-Grillet, Michel Butor, Claude Simon, anni Cinquanta): il personaggio e la trama «tradizionali» vengono messi in discussione, e l'attenzione si sposta sulla percezione e sulla scrittura stessa; Claude Simon riceverà il Nobel nel 1985;</li>
<li>la <b>narrativa autobiografica</b> contemporanea (Georges Perec, <i>Je me souviens</i>, 1978 e <i>La Vie mode d'emploi</i>, 1978; Annie Ernaux, Nobel 2022, con <i>Les Années</i>, 2008, un'«autobiografia impersonale» di una generazione): una linea che discende direttamente dall'idea proustiana che il tempo e la memoria siano la materia del romanzo.</li>
</ul>
<p>Anche fuori dalla Francia l'influenza di Proust è enorme: <b>Walter Benjamin</b> lo traduce in tedesco; <b>Virginia Woolf</b>, <b>Joyce</b>, e in Italia <b>Svevo</b> (<i>La coscienza di Zeno</i>, 1923, dove il tempo è soggettivo e la memoria inaffidabile) sono suoi contemporanei, con cui condivide molte domande.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: scrivere in stile «proustiano»",
      html: `<p>Un esercizio per capire come funziona la frase di Proust. Parti da una frase semplice: <i>«Je mange un gâteau.»</i> Ora trasformala come farebbe lui: aggiungi un'<b>immagine sensoriale</b> (odore, gusto), un <b>ricordo</b> («comme quand j'étais enfant...»), una <b>riflessione</b> («et je compris que...»). Il risultato potrebbe essere:</p>
<p><i>«Quand je mords dans ce gâteau, dont l'odeur de beurre chaud me ramène soudain dans la cuisine de ma grand-mère, où j'attendais, les pieds ne touchant pas encore le sol, que la pâte soit prête, je comprends que ce n'est pas le gâteau que je goûte, mais le temps qui s'est enfui.»</i></p>
<p>Osserva il lessico (<i>odeur, ramène, soudain</i>), i tempi (presente per l'esperienza attuale, imparfait per il ricordo), la struttura (frase lunga con relative). Prova a farlo con un oggetto tuo, in francese o in italiano.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che... Proust e il suo «cahier» di domande?",
      html: `<p>Il celebre <b>«questionnaire de Proust»</b> (domande come «Quel est votre principal défaut ?» o «Votre occupation préférée ?») non fu inventato da Proust: era un gioco di società inglese di moda tra gli anni 1880 e 1890. Proust ne compilò due versioni, da adolescente, negli album di amiche, da adolescente e da giovane. Il nome gli rimase attaccato perché le sue risposte furono ritrovate e pubblicate dopo la sua fama. Oggi lo usano giornali e programmi televisivi per intervistare personaggi pubblici.</p>`
    },
    {
      type: "widget",
      title: "Flashcard: i personaggi della Recherche",
      widget: "flashcards",
      options: {
        cards: [
          { front: "Charles Swann", back: "Amico di famiglia a Combray, innamorato di Odette: la sua gelosia è il cuore di <i>Un amour de Swann</i>" },
          { front: "Odette de Crécy", back: "Cortigiana, poi signora Swann: la donna amata da Swann" },
          { front: "Albertine", back: "Giovane donna di cui si innamora il narratore a Balbec; è la «prigioniera» e poi la «scomparsa»" },
          { front: "Madame Verdurin", back: "Padrona del salotto borghese e snob; alla fine diventa principessa di Guermantes" },
          { front: "Bergotte, Elstir, Vinteuil", back: "Lo scrittore, il pittore e il musicista immaginari che rappresentano l'arte" },
          { front: "Tante Léonie", back: "Zia del narratore a Combray, la madeleine è quella che lei gli offre inzuppata nel tè o nel tiglio" }
        ]
      },
      caption: "Gira le carte per ripassare i personaggi principali."
    },
    {
      type: "conceptMap",
      title: "Mappa della Recherche: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "temps", label: "Il tempo", x: 50, y: 6, color: "#2563eb", html: "Il tempo che passa e il tempo vissuto.", why: "Da Bergson Proust prende l'idea che il tempo vissuto non sia quello dell'orologio. Per un adolescente un'ora di noia dura come un pomeriggio; per un adulto un anno passa in un attimo. Il romanzo imita questa elasticità." },
        { id: "mem", label: "Memoria involontaria", x: 18, y: 38, color: "#d97706", html: "Un sapore, un suono ridà vita al passato.", why: "La memoria volontaria ricostruisce solo uno schema; quella involontaria fa riemergere l'intera sensazione. Per questo Proust cerca nelle sensazioni (gusto, pavé ineguali, rumore di cucchiaino) le chiavi del tempo perduto." },
        { id: "amo", label: "Amore e gelosia", x: 50, y: 38, color: "#dc2626", html: "Si ama ciò che sfugge.", why: "Il desiderio è alimentato dalla distanza e dall'immaginazione. Quando l'altro è posseduto, l'interesse cade; la gelosia nasce dall'impossibilità di conoscere davvero l'altro." },
        { id: "soc", label: "La società", x: 82, y: 38, color: "#16a34a", html: "Salotti Verdurin e Guermantes.", why: "Proust osserva il mondo mondano come un entomologo: ogni conversazione rivela una gerarchia, snobismo e vanità. Dreyfus e la guerra mostrano che le opinioni cambiano secondo gli interessi." },
        { id: "art", label: "L'arte", x: 30, y: 72, color: "#a855f7", html: "Bergotte, Elstir, Vinteuil.", why: "Solo l'arte può fissare le impressioni e dare loro forma durevole. Per questo il narratore, alla fine, decide di scrivere: l'opera sarà il suo modo di ritrovare il tempo." },
        { id: "rom", label: "Il romanzo moderno", x: 72, y: 72, color: "#14b8a6", html: "Joyce, Woolf, Svevo, Nouveau Roman.", why: "Proust e i suoi contemporanei spostano il romanzo dall'azione alla coscienza. Il lettore non segue più solo una trama: segue un'esperienza di pensiero." }
      ],
      edges: [
        ["temps", "mem", "si ritrova con"],
        ["temps", "amo", "consuma"],
        ["temps", "soc", "trasforma"],
        ["mem", "art", "porta a"],
        ["art", "rom", "ispira"],
        ["amo", "art", "alimenta"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Marcel Proust</b> (1871–1922): <i>À la recherche du temps perdu</i>, 7 parti (1913–1927), le ultime tre postume.</li>
<li><b>Madeleine</b>: simbolo della <b>mémoire involontaire</b> (<i>Du côté de chez Swann</i>, 1913).</li>
<li>Temi: <b>tempo</b>, memoria, amore e gelosia (Swann/Odette, narratore/Albertine), società (Verdurin, Guermantes), arte (Bergotte, Elstir, Vinteuil).</li>
<li>Conclusione: <i>«La vraie vie [...] c'est la littérature.»</i></li>
<li>Dopo Proust: Gide (<i>Les Faux-monnayeurs</i>, 1925), Céline (1932), Malraux (1933), Sartre e Camus, Nouveau Roman (Sarraute, Robbe-Grillet, Simon), Perec, Ernaux.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz finale della lezione",
      questions: [
        { type: "mc", q: "Come si chiama il paese immaginario dell'infanzia del narratore?", options: ["Combray", "Balbec", "Illuminata"], answer: 0, explain: "Combray è ispirato a Illiers, che nel 1971 ha preso il nome di Illiers-Combray." },
        { type: "tf", q: "Gli ultimi tre volumi della Recherche furono pubblicati dopo la morte di Proust.", answer: true, explain: "La Prisonnière (1923), Albertine disparue (1925) e Le Temps retrouvé (1927) sono postumi." },
        { type: "mc", q: "Chi scrisse Les Faux-monnayeurs?", options: ["André Gide", "Marcel Proust", "Albert Camus"], answer: 0, explain: "Gide, nel 1925: un romanzo che riflette su se stesso." },
        { type: "mc", q: "Quale tempo verbale Proust usa per l'abitudine, il ricorrente?", options: ["Imparfait", "Passé simple", "Futur"], answer: 0, explain: "L'imparfait indica ciò che si ripeteva: «ma tante Léonie m'offrait...»." }
      ]
    }
  ],
  glossary: [
    { t: "Mémoire involontaire", d: "Ricordo che riaffiora da solo, provocato da una sensazione presente (la madeleine)." },
    { t: "Mémoire volontaire", d: "Ricordo ricercato con la volontà e l'intelligenza: per Proust è pallido e schematico." },
    { t: "Durée", d: "Il tempo vissuto, soggettivo, secondo Bergson." },
    { t: "Madeleine", d: "Dolcetto a forma di conchiglia; nella Recherche fa riaffiorare Combray." },
    { t: "Combray", d: "Paese immaginario dell'infanzia del narratore, ispirato a Illiers." },
    { t: "Mise en abyme", d: "Racconto dentro il racconto; Gide la usa nei Faux-monnayeurs." },
    { t: "Nouveau Roman", d: "Movimento degli anni Cinquanta (Robbe-Grillet, Sarraute, Butor, Simon) che rifiuta trama e personaggio tradizionali." },
    { t: "Narratore", d: "Chi racconta: nella Recherche è un «je» che non coincide con l'autore." },
    { t: "Affare Dreyfus", d: "Caso giudiziario e politico (1894–1906) che divise la Francia e a cui Proust prese parte." },
    { t: "Imparfait", d: "Tempo del passato per le azioni abituali e le descrizioni." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quanti volumi compongono la Recherche?", options: ["Sette", "Tre", "Dodici"], answer: 0, explain: "Da Du côté de chez Swann (1913) a Le Temps retrouvé (1927)." },
      { type: "tf", q: "Proust pubblicò il primo volume a proprie spese presso Grasset.", answer: true, explain: "La NRF lo aveva rifiutato; uscì nel novembre 1913." },
      { type: "mc", q: "Che cosa provoca il ricordo di Combray nel brano più celebre?", options: ["Una madeleine inzuppata nel tè", "Una lettera di Swann", "Una canzone di Vinteuil"], answer: 0, explain: "È la scena della mémoire involontaire." },
      { type: "mc", q: "Con quale filosofo si associa l'idea di «durée»?", options: ["Bergson", "Sartre", "Voltaire"], answer: 0, explain: "Henri Bergson distingue il tempo vissuto dal tempo dell'orologio." },
      { type: "text", q: "Come si chiama il personaggio innamorato di Odette de Crécy? (cognome)", answer: ["swann", "charles swann"], explain: "Charles Swann: la sua gelosia è il tema di Un amour de Swann." },
      { type: "mc", q: "Qual è la conclusione del Temps retrouvé sulla «vraie vie»?", options: ["È la letteratura", "È la vita mondana", "È il viaggio"], answer: 0, explain: "Scrivere permette di comprendere e fissare il tempo." },
      { type: "tf", q: "Il narratore della Recherche coincide perfettamente con Proust.", answer: false, explain: "Il «je» è un personaggio e si distingue dall'autore, come Proust sostiene in Contre Sainte-Beuve." },
      { type: "mc", q: "Quale autore scrisse Voyage au bout de la nuit (1932)?", options: ["Céline", "Gide", "Malraux"], answer: 0, explain: "Louis-Ferdinand Céline, con una lingua parlata e violenta." },
      { type: "order", q: "Metti in ordine cronologico", items: ["Du côté de chez Swann", "Premio Goncourt a À l'ombre des jeunes filles en fleurs", "Morte di Proust", "Le Temps retrouvé"], explain: "1913, 1919, 1922, 1927." }
    ]
  }
});
