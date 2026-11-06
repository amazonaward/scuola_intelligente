TOPIC('it', {
  id: "m3-ita-analisi-periodo",
  title: "L'analisi del periodo",
  intro: "Una frase complessa è come un edificio: c'è una struttura portante (la <b>proposizione principale</b>) e ci sono stanze collegate (le <b>coordinate</b> e le <b>subordinate</b>). Con l'analisi del periodo impariamo a smontare le frasi lunghe, a capire chi comanda e chi dipende, e a scrivere testi più chiari.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Frase semplice, periodo e proposizioni",
      html: `<p>Nell'analisi logica studiavi la <b>frase semplice</b>: un solo predicato (verbo) con i suoi complementi. Quando in una frase ci sono <b>più verbi di modo finito o indefinito</b>, abbiamo un <b>periodo</b> (o frase complessa).</p>
<p>Ogni parte del periodo che ha un proprio predicato si chiama <b>proposizione</b>. Regola d'oro: <b>tante proposizioni quanti sono i predicati</b>.</p>
<p>Esempio: <i>"Quando sono arrivato, | Marco dormiva | e non ho voluto svegliarlo."</i> → tre predicati (<i>sono arrivato</i>, <i>dormiva</i>, <i>ho voluto svegliare</i>) → tre proposizioni.</p>
<p>⚠️ Attenzione ai verbi servili (<i>volere, potere, dovere</i>) e fraseologici (<i>stare per, cominciare a, smettere di</i>): formano <b>un solo predicato</b> con l'infinito che li segue. <i>"Devo studiare"</i> è una sola proposizione.</p>`
    },
    {
      type: "text",
      title: "Passo 1 – Trova la proposizione principale",
      html: `<p>La <b>proposizione principale</b> (o indipendente) è quella che:</p>
<ul>
<li>ha <b>senso compiuto da sola</b>;</li>
<li><b>non dipende</b> da nessun'altra proposizione;</li>
<li>di solito ha il verbo all'<b>indicativo</b>, al <b>condizionale</b>, all'<b>imperativo</b> o al congiuntivo esortativo/desiderativo (<i>"Magari piovesse!"</i>).</li>
</ul>
<p>Le principali possono essere: <b>enunciative</b> (affermano o negano: <i>"Oggi piove"</i>), <b>interrogative dirette</b> (<i>"Vieni?"</i>), <b>esclamative</b> (<i>"Che bello!"</i>), <b>volitive</b> (<i>"Chiudi la porta"</i>), <b>desiderative</b> (<i>"Vorrei un gelato"</i>), <b>dubitative</b> (<i>"Che fare?"</i>).</p>`
    },
    {
      type: "text",
      title: "Passo 2 – Coordinazione e subordinazione",
      html: `<p>Le proposizioni si collegano in due modi:</p>
<table>
<tr><th>Coordinazione (paratassi)</th><th>Subordinazione (ipotassi)</th></tr>
<tr><td>Proposizioni <b>sullo stesso livello</b>, nessuna dipende dall'altra.</td><td>Una proposizione <b>dipende</b> da un'altra (la reggente) e la completa.</td></tr>
<tr><td>Congiunzioni coordinanti: <i>e, né, o, ma, però, quindi, infatti, cioè, sia… sia</i>; oppure solo la virgola (<b>asindeto</b>).</td><td>Congiunzioni subordinanti: <i>che, perché, quando, se, mentre, affinché, sebbene, poiché</i>; pronomi relativi; verbi di modo indefinito.</td></tr>
<tr><td><i>"Studio <b>e</b> ascolto musica."</i></td><td><i>"Studio <b>perché</b> domani ho la verifica."</i></td></tr>
</table>
<p>Le coordinate si classificano secondo la congiunzione: <b>copulative</b> (e, né, anche), <b>avversative</b> (ma, però, tuttavia), <b>disgiuntive</b> (o, oppure), <b>conclusive</b> (quindi, perciò, dunque), <b>dichiarative/esplicative</b> (infatti, cioè), <b>correlative</b> (sia… sia, né… né).</p>`
    },
    {
      type: "svg",
      title: "Lo schema ad albero di un periodo",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#334155">"Luca ha detto che verrà alla festa e porterà la torta, se finisce i compiti."</text>
<rect x="210" y="50" width="220" height="50" rx="10" fill="#2563eb"/>
<text x="320" y="73" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">PRINCIPALE</text>
<text x="320" y="92" font-size="15" text-anchor="middle" fill="#fff">Luca ha detto</text>
<line x1="320" y1="100" x2="190" y2="150" stroke="#334155" stroke-width="3"/>
<rect x="60" y="150" width="240" height="50" rx="10" fill="#16a34a"/>
<text x="180" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">SUB. 1° grado (oggettiva)</text>
<text x="180" y="191" font-size="15" text-anchor="middle" fill="#fff">che verrà alla festa</text>
<line x1="300" y1="175" x2="350" y2="175" stroke="#f97316" stroke-width="4" stroke-dasharray="8 5"/>
<text x="325" y="165" font-size="14" text-anchor="middle" fill="#c2410c">e</text>
<rect x="350" y="150" width="250" height="50" rx="10" fill="#22c55e"/>
<text x="475" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">coordinata alla sub. 1° grado</text>
<text x="475" y="191" font-size="15" text-anchor="middle" fill="#fff">(e) porterà la torta</text>
<line x1="180" y1="200" x2="180" y2="250" stroke="#334155" stroke-width="3"/>
<rect x="60" y="250" width="240" height="50" rx="10" fill="#a855f7"/>
<text x="180" y="272" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">SUB. 2° grado (condizionale)</text>
<text x="180" y="291" font-size="15" text-anchor="middle" fill="#fff">se finisce i compiti</text>
<text x="470" y="275" font-size="14" fill="#334155">— linea piena: dipende da</text>
<text x="470" y="298" font-size="14" fill="#c2410c">- - tratteggio: coordinazione</text>
</svg>`,
      caption: "La principale sta in cima; ogni subordinata 'scende' di un grado; le coordinate stanno allo stesso livello."
    },
    {
      type: "text",
      title: "Passo 3 – Forma esplicita e implicita; i gradi",
      html: `<p>Una subordinata può essere:</p>
<ul>
<li><b>esplicita</b>: verbo di modo <b>finito</b> (indicativo, congiuntivo, condizionale), introdotta da una congiunzione o un relativo → <i>"Ti chiamo <b>quando arrivo</b>."</i></li>
<li><b>implicita</b>: verbo di modo <b>indefinito</b> (infinito, participio, gerundio) → <i>"Ti chiamo <b>arrivato</b> a casa"</i>, <i>"<b>Arrivando</b> a casa, ti chiamo."</i></li>
</ul>
<p>Il <b>grado</b> indica la distanza dalla principale: una subordinata che dipende dalla principale è di <b>1° grado</b>; se dipende da una subordinata di 1° grado è di <b>2° grado</b>, e così via.</p>`
    },
    {
      type: "text",
      title: "Passo 4 – I tipi di subordinate",
      html: `<p>Molte subordinate corrispondono a un complemento dell'analisi logica: sono "complementi trasformati in frase".</p>
<table>
<tr><th>Subordinata</th><th>Risponde a…</th><th>Esempio</th></tr>
<tr><td><b>Soggettiva</b></td><td>fa da soggetto</td><td><i>È importante <b>che tu venga</b>.</i></td></tr>
<tr><td><b>Oggettiva</b></td><td>fa da complemento oggetto</td><td><i>So <b>che hai ragione</b>.</i></td></tr>
<tr><td><b>Dichiarativa</b></td><td>spiega un nome o pronome</td><td><i>Ho la speranza <b>che vinca</b>.</i></td></tr>
<tr><td><b>Interrogativa indiretta</b></td><td>domanda riferita</td><td><i>Mi chiedo <b>se verrà</b>.</i></td></tr>
<tr><td><b>Relativa</b></td><td>come un attributo</td><td><i>Il libro <b>che leggo</b> è bello.</i></td></tr>
<tr><td><b>Causale</b></td><td>perché?</td><td><i>Resto a casa <b>perché piove</b>.</i></td></tr>
<tr><td><b>Finale</b></td><td>a quale scopo?</td><td><i>Studio <b>per superare l'esame</b>.</i></td></tr>
<tr><td><b>Temporale</b></td><td>quando?</td><td><i><b>Mentre mangiavo</b>, squillò il telefono.</i></td></tr>
<tr><td><b>Consecutiva</b></td><td>con quale conseguenza?</td><td><i>Era così stanco <b>che si addormentò</b>.</i></td></tr>
<tr><td><b>Concessiva</b></td><td>nonostante che cosa?</td><td><i><b>Sebbene piovesse</b>, uscimmo.</i></td></tr>
<tr><td><b>Condizionale</b> (periodo ipotetico)</td><td>a quale condizione?</td><td><i><b>Se studi</b>, sarai promosso.</i></td></tr>
<tr><td><b>Modale</b></td><td>in che modo?</td><td><i>Entrò <b>correndo</b>.</i></td></tr>
<tr><td><b>Comparativa</b></td><td>rispetto a che cosa?</td><td><i>È più facile <b>di quanto pensassi</b>.</i></td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: proposizioni e collegamenti",
      questions: [
        { type: "num", q: "Quante proposizioni ci sono in: \"Quando torno a casa, mangio e poi faccio i compiti\"?", answer: 3, explain: "Tre predicati: torno, mangio, faccio → tre proposizioni." },
        { type: "mc", q: "In \"Esco, ma torno presto\" la seconda proposizione è…", options: ["subordinata causale", "coordinata avversativa", "principale interrogativa"], answer: 1, explain: "\"Ma\" è una congiunzione coordinante avversativa: le due proposizioni sono sullo stesso livello." },
        { type: "tf", q: "\"Voglio partire\" contiene due proposizioni.", answer: false, explain: "\"Volere\" è un verbo servile: \"voglio partire\" è un unico predicato, quindi una sola proposizione." }
      ]
    },
    {
      type: "example",
      title: "Esempio guidato: analizziamo un periodo",
      html: `<p><i>"Poiché era tardi, Anna chiamò sua madre per dirle che sarebbe tornata in autobus."</i></p>
<ol>
<li><b>Conto i predicati</b>: era, chiamò, dire, sarebbe tornata → 4 proposizioni.</li>
<li><b>Principale</b>: <i>Anna chiamò sua madre</i> (ha senso da sola).</li>
<li><i>Poiché era tardi</i> → subordinata <b>causale</b> esplicita di 1° grado.</li>
<li><i>per dirle</i> → subordinata <b>finale</b> implicita (infinito) di 1° grado.</li>
<li><i>che sarebbe tornata in autobus</i> → subordinata <b>oggettiva</b> esplicita di 2° grado (dipende da "dirle").</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio pratico: trasformare implicita ↔ esplicita",
      html: `<p>Saper passare da una forma all'altra aiuta a scrivere meglio e a evitare ripetizioni di "che".</p>
<ul>
<li><i>"<b>Finiti</b> i compiti, uscì"</i> (temporale implicita, participio) → <i>"<b>Dopo che ebbe finito</b> i compiti, uscì"</i> (esplicita).</li>
<li><i>"Penso <b>di avere ragione</b>"</i> (oggettiva implicita) → <i>"Penso <b>che io abbia ragione</b>"</i>: la forma esplicita qui suona pesante, perché il soggetto è lo stesso. Quando il soggetto coincide si preferisce l'<b>implicita</b>.</li>
<li><i>"<b>Sbagliando</b> s'impara"</i> (gerundio con valore causale/strumentale) → <i>"<b>Poiché si sbaglia</b>, s'impara"</i>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Allenati: coordinata o subordinata?",
      widget: "classify",
      options: {
        groups: ["Coordinata", "Subordinata"],
        items: [
          ["…ma non avevo l'ombrello", 0],
          ["…perché avevo fame", 1],
          ["…e poi sono uscito", 0],
          ["…sebbene fosse stanco", 1],
          ["…quindi ho deciso di restare", 0],
          ["…che mi hai prestato", 1],
          ["…oppure guardiamo un film", 0],
          ["…affinché tu capisca", 1],
          ["…infatti era già buio", 0],
          ["…mentre leggevo", 1]
        ]
      },
      caption: "Guarda la congiunzione: le coordinanti mettono le frasi alla pari, le subordinanti creano dipendenza."
    },
    {
      type: "widget",
      title: "Abbina la subordinata al suo tipo",
      widget: "match",
      options: {
        pairs: [
          ["Se piove", "condizionale"],
          ["Benché fosse malato", "concessiva"],
          ["Per non fare tardi", "finale"],
          ["Mi domando chi sia", "interrogativa indiretta"],
          ["Era così buio che non vedevo", "consecutiva"],
          ["Dopo aver mangiato", "temporale"]
        ]
      },
      caption: "Chiediti sempre: a quale domanda risponde questa proposizione?"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Paratassi e ipotassi nella letteratura",
      html: `<p>Gli scrittori scelgono lo stile anche in base alla sintassi. <b>Giovanni Boccaccio</b> nel <i>Decameron</i> (1349–1353) imitava il periodo latino, con lunghissime catene di subordinate. Secoli dopo, <b>Giovanni Verga</b> e poi molti autori del Novecento preferirono una sintassi più <b>paratattica</b>, con frasi brevi e coordinate, più vicina al parlato. Prova a confrontare una pagina dei <i>Promessi sposi</i> con una di <i>Se questo è un uomo</i> di Primo Levi: noterai la differenza!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il periodo più lungo",
      html: `<p>Lo scrittore francese <b>Marcel Proust</b>, nel romanzo <i>Alla ricerca del tempo perduto</i>, scrisse un periodo di oltre <b>900 parole</b>! In italiano, Carlo Emilio Gadda è famoso per periodi intricati pieni di incisi. All'opposto, nei titoli dei giornali e nei messaggi si usano quasi solo frasi brevi: la sintassi cambia con lo scopo del testo.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare: il metodo in 5 mosse",
      html: `<ol>
<li>Sottolinea i <b>predicati</b> e dividi il periodo in proposizioni.</li>
<li>Trova la <b>principale</b> (ha senso da sola).</li>
<li>Per ogni altra proposizione chiediti: è <b>alla pari</b> (coordinata) o <b>dipende</b> (subordinata)?</li>
<li>Per le subordinate indica: <b>tipo</b> (causale, finale…), <b>forma</b> (esplicita/implicita), <b>grado</b>.</li>
<li>Disegna lo <b>schema ad albero</b>.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'analisi del periodo",
      intro: "Se lo schema tradizionale ti confonde, prova una di queste strade: un'analogia, un metodo usato all'estero, un modello 3D.",
      tabs: [
        {
          label: "🏢 L'edificio",
          html: `<p>Immagina il periodo come un <b>palazzo</b>:</p>
<ul>
<li>la <b>principale</b> è il <b>piano terra</b>: sta in piedi da sola;</li>
<li>le <b>subordinate di 1° grado</b> sono il <b>primo piano</b>: si appoggiano sul piano terra;</li>
<li>quelle di <b>2° grado</b> stanno al <b>secondo piano</b>, appoggiate al primo;</li>
<li>le <b>coordinate</b> sono stanze <b>affiancate sullo stesso piano</b>, collegate da una porta (e, ma, o…).</li>
</ul>
<p>Se togli il piano terra crolla tutto; se togli una stanza del secondo piano, il palazzo resta in piedi. Ecco perché la principale è l'unica che regge da sola!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#e0f2fe"/>
<rect x="100" y="200" width="400" height="60" fill="#2563eb"/>
<text x="300" y="237" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">Piano terra: PRINCIPALE</text>
<rect x="100" y="130" width="195" height="70" fill="#16a34a" stroke="#fff" stroke-width="3"/>
<rect x="305" y="130" width="195" height="70" fill="#22c55e" stroke="#fff" stroke-width="3"/>
<text x="197" y="170" font-size="16" text-anchor="middle" fill="#fff">1° grado</text>
<text x="402" y="170" font-size="16" text-anchor="middle" fill="#fff">coordinata (1° grado)</text>
<rect x="100" y="60" width="195" height="70" fill="#a855f7" stroke="#fff" stroke-width="3"/>
<text x="197" y="100" font-size="16" text-anchor="middle" fill="#fff">2° grado</text>
<polygon points="90,60 197,15 305,60" fill="#ef4444"/>
<rect x="290" y="150" width="30" height="40" fill="#f59e0b"/>
<text x="540" y="170" font-size="14" fill="#334155">porta</text>
<text x="540" y="188" font-size="14" fill="#334155">= "e"</text>
</svg>`
        },
        {
          label: "🇬🇧 Il metodo inglese: main & dependent clauses",
          html: `<p>Nelle scuole inglesi si parla di <b>main clause</b> (principale) e <b>subordinate</b> o <b>dependent clause</b>. Il test che insegnano è semplicissimo: <b>"Can it stand alone?"</b> – può stare in piedi da sola come frase?</p>
<p>Le subordinate si dividono in tre famiglie, in base alla funzione:</p>
<ul>
<li><b>noun clauses</b> (funzionano come un nome) → le nostre soggettive, oggettive, interrogative indirette;</li>
<li><b>adjective/relative clauses</b> (funzionano come un aggettivo) → le nostre relative;</li>
<li><b>adverbial clauses</b> (funzionano come un avverbio) → causali, temporali, finali, concessive…</li>
</ul>
<p>Tre famiglie invece di venti nomi: per iniziare è più facile! Poi dentro ogni famiglia trovi i tipi italiani.</p>`
        },
        {
          label: "🧩 Sostituisci con una parola",
          html: `<p>Trucco pratico: prova a <b>sostituire la subordinata con una sola parola</b>. Il tipo di parola ti dice il tipo di subordinata!</p>
<ul>
<li><i>"So <b>che hai vinto</b>"</i> → <i>"So <b>questo</b>"</i> (nome/pronome oggetto) → <b>oggettiva</b>.</li>
<li><i>"Il ragazzo <b>che corre</b> è mio fratello"</i> → <i>"Il ragazzo <b>veloce</b>"</i> (aggettivo) → <b>relativa</b>.</li>
<li><i>"Esco <b>quando smette di piovere</b>"</i> → <i>"Esco <b>dopo</b>"</i> (avverbio di tempo) → <b>temporale</b>.</li>
<li><i>"Lo faccio <b>per aiutarti</b>"</i> → <i>"Lo faccio <b>per te</b>"</i> (complemento di fine) → <b>finale</b>.</li>
</ul>`
        },
        {
          label: "🧊 Il periodo in 3D",
          html: `<p>Guarda questa "torre" a strati: ogni strato è un <b>grado</b> di subordinazione. Il nucleo centrale è la <b>principale</b>; più ti allontani dal centro, più la proposizione è "lontana" e dipendente. Ruota il modello: noterai che ogni strato esterno può esistere solo se c'è quello interno che lo regge.</p>`,
          scene: "layers",
          options: { layers: [
            { r: 1, color: "#c084fc", label: "Subordinata 3° grado" },
            { r: 0.78, color: "#a855f7", label: "Subordinata 2° grado" },
            { r: 0.56, color: "#22c55e", label: "Subordinata 1° grado" },
            { r: 0.32, color: "#2563eb", label: "Principale" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'analisi del periodo: tocca un nodo",
      nodes: [
        { id: "periodo", label: "Periodo", x: 50, y: 6, color: "#0f172a", html: "Frase complessa formata da più proposizioni, dalla maiuscola al punto fermo.", why: "Il termine viene dal greco <i>períodos</i>, \"giro, circuito\": i retori greci, come Aristotele nella <i>Retorica</i>, chiamavano così un pensiero completo che 'gira' e si chiude su se stesso." },
        { id: "proposizione", label: "Proposizione", x: 50, y: 26, color: "#334155", html: "Ogni parte del periodo con un proprio predicato.", why: "Dal latino <i>propositio</i>, \"ciò che viene posto davanti\", cioè un'affermazione. Si conta dai predicati perché è il verbo che regge soggetto e complementi." },
        { id: "principale", label: "Principale", x: 15, y: 46, color: "#2563eb", html: "La proposizione indipendente, che ha senso compiuto da sola.", why: "È indipendente perché contiene il messaggio essenziale: le altre aggiungono informazioni. Per questo nei verbi principali troviamo i modi della certezza o della volontà (indicativo, imperativo, condizionale)." },
        { id: "coordinazione", label: "Coordinazione (paratassi)", x: 50, y: 50, color: "#f97316", html: "Collegamento tra proposizioni dello stesso livello con e, ma, o, quindi…", why: "Dal greco <i>parà</i> (accanto) + <i>táxis</i> (ordine): \"mettere accanto\". È la sintassi tipica del parlato e delle lingue antiche più semplici, come il greco omerico." },
        { id: "subordinazione", label: "Subordinazione (ipotassi)", x: 85, y: 46, color: "#16a34a", html: "Una proposizione dipende da un'altra (reggente) e la completa.", why: "Dal greco <i>hypó</i> (sotto) + <i>táxis</i>: \"mettere sotto\". Il latino classico di Cicerone ne fece un'arte, e l'italiano scritto l'ha ereditata tramite Boccaccio e gli umanisti." },
        { id: "forma", label: "Esplicita / implicita", x: 70, y: 72, color: "#a855f7", html: "Esplicita: verbo di modo finito. Implicita: infinito, participio o gerundio.", why: "I modi indefiniti non indicano la persona, quindi il soggetto si ricava dalla reggente: per questo si usa l'implicita soprattutto quando il soggetto è lo stesso." },
        { id: "tipi", label: "Tipi di subordinate", x: 92, y: 72, color: "#22c55e", html: "Soggettive, oggettive, relative, causali, finali, temporali, concessive, consecutive, condizionali…", why: "Molte nascono da un complemento dell'analisi logica 'espanso' in frase: complemento di causa → causale, di fine → finale, di tempo → temporale. La grammatica le ha classificate seguendo il modello latino." },
        { id: "gradi", label: "Gradi", x: 40, y: 78, color: "#ef4444", html: "La distanza di una subordinata dalla principale: 1°, 2°, 3° grado…", why: "Si contano i 'gradini' di dipendenza, come in un albero genealogico: figlia della principale = 1° grado, 'nipote' = 2° grado." },
        { id: "logica", label: "Analisi logica", x: 15, y: 90, color: "#64748b", html: "Lo studio della frase semplice: soggetto, predicato, complementi.", why: "L'analisi del periodo è la stessa logica applicata a un livello più alto: ciò che nella frase semplice è un complemento, nel periodo diventa una proposizione." }
      ],
      edges: [
        ["periodo", "proposizione", "è formato da"],
        ["proposizione", "principale", "una è"],
        ["proposizione", "coordinazione", "si collegano per"],
        ["proposizione", "subordinazione", "si collegano per"],
        ["subordinazione", "forma", "può essere"],
        ["subordinazione", "tipi", "si divide in"],
        ["subordinazione", "gradi", "si misura in"],
        ["logica", "tipi", "complemento → frase"],
        ["principale", "gradi", "grado 0"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: tipi di subordinate",
      questions: [
        { type: "mc", q: "\"Sebbene fosse tardi, continuammo a giocare\": la prima proposizione è…", options: ["causale", "concessiva", "temporale"], answer: 1, explain: "\"Sebbene\" introduce una concessiva: indica un fatto che non impedisce l'azione della principale." },
        { type: "mc", q: "\"Dimmi dove sei stato\": \"dove sei stato\" è…", options: ["interrogativa indiretta", "relativa", "locativa"], answer: 0, explain: "È una domanda riferita, dipendente da \"dimmi\": interrogativa indiretta." },
        { type: "mc", q: "\"Uscendo, chiudi la porta\": la subordinata è…", options: ["esplicita", "implicita"], answer: 1, explain: "Il gerundio \"uscendo\" è un modo indefinito: subordinata implicita (temporale)." }
      ]
    }
  ],
  glossary: [
    { t: "Periodo", d: "Frase complessa formata da due o più proposizioni." },
    { t: "Proposizione", d: "Parte del periodo che contiene un predicato." },
    { t: "Principale", d: "Proposizione indipendente, con senso compiuto da sola." },
    { t: "Reggente", d: "Proposizione da cui dipende una subordinata." },
    { t: "Coordinata", d: "Proposizione collegata a un'altra dello stesso livello (e, ma, o, quindi…)." },
    { t: "Subordinata", d: "Proposizione che dipende da un'altra e ne completa il senso." },
    { t: "Asindeto", d: "Coordinazione fatta solo con la punteggiatura, senza congiunzioni." },
    { t: "Esplicita", d: "Subordinata con verbo di modo finito." },
    { t: "Implicita", d: "Subordinata con verbo di modo indefinito (infinito, participio, gerundio)." },
    { t: "Grado", d: "Livello di dipendenza di una subordinata rispetto alla principale." },
    { t: "Paratassi / ipotassi", d: "Costruzione per coordinazione / per subordinazione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quante proposizioni ci sono in: \"Mentre aspettavo l'autobus, ho letto un libro che mi aveva regalato Sara\"?", answer: 3, explain: "Predicati: aspettavo, ho letto, aveva regalato → 3." },
      { type: "mc", q: "Qual è la principale in \"Se avessi tempo, verrei con voi\"?", options: ["Se avessi tempo", "verrei con voi"], answer: 1, explain: "\"Verrei con voi\" ha senso da sola; \"se avessi tempo\" è una condizionale." },
      { type: "mc", q: "\"Corri, altrimenti perdi il treno\": la seconda proposizione è una coordinata…", options: ["copulativa", "disgiuntiva", "conclusiva"], answer: 1, explain: "\"Altrimenti\" equivale a \"o\": coordinata disgiuntiva." },
      { type: "mc", q: "\"È probabile che domani nevichi\": \"che domani nevichi\" è…", options: ["oggettiva", "soggettiva", "dichiarativa"], answer: 1, explain: "Fa da soggetto di \"è probabile\" (che cosa è probabile? che nevichi): soggettiva." },
      { type: "mc", q: "\"Parlava così piano che nessuno lo sentiva\": la subordinata è…", options: ["causale", "consecutiva", "finale"], answer: 1, explain: "\"Così… che\" indica la conseguenza: consecutiva." },
      { type: "tf", q: "Una subordinata implicita ha il verbo all'indicativo o al congiuntivo.", answer: false, explain: "L'implicita usa i modi indefiniti: infinito, participio, gerundio." },
      { type: "tf", q: "Una subordinata di 2° grado dipende da una subordinata di 1° grado.", answer: true, explain: "Il grado conta i livelli di dipendenza dalla principale." },
      { type: "text", q: "Come si chiama la coordinazione fatta solo con le virgole, senza congiunzioni?", answer: ["asindeto", "l'asindeto", "coordinazione per asindeto"], explain: "Asindeto, dal greco \"senza legami\"." },
      { type: "mc", q: "\"Ho comprato il libro che mi avevi consigliato\": la subordinata è…", options: ["relativa", "oggettiva", "dichiarativa"], answer: 0, explain: "\"Che\" è pronome relativo (= il quale) riferito a \"libro\": relativa." },
      { type: "order", q: "Metti in ordine i passi dell'analisi del periodo.", items: ["Sottolineare i predicati", "Dividere in proposizioni", "Trovare la principale", "Riconoscere coordinate e subordinate", "Indicare tipo, forma e grado"], explain: "Si parte dai verbi, si isola la principale e poi si classifica tutto il resto." },
      { type: "mc", q: "\"Per arrivare in tempo, prese un taxi\": \"per arrivare in tempo\" è…", options: ["finale implicita", "causale esplicita", "temporale implicita"], answer: 0, explain: "Indica lo scopo ed è all'infinito: finale implicita." },
      { type: "tf", q: "In \"Devo finire i compiti\" ci sono due proposizioni.", answer: false, explain: "\"Dovere\" è servile: forma un solo predicato con l'infinito." }
    ]
  }
});
