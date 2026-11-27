TOPIC('it', {
  id: "l1-dir-sistemi-economici",
  title: "I sistemi economici",
  intro: "Chi decide quanti telefoni, quante case e quante scuole produrre in un Paese? Il mercato, cioè milioni di scelte di compratori e venditori? Oppure lo Stato, con un piano? O un mix dei due? Le risposte a queste domande danno origine ai <b>sistemi economici</b>. In questa lezione conosci gli <b>operatori economici</b> (famiglie, imprese, Stato), il <b>flusso circolare</b> del reddito e i tre grandi modelli: <b>liberismo</b>, <b>collettivismo</b> ed <b>economia mista</b>, quello dell'Italia.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Gli operatori economici",
      html: `<p>Nel sistema economico agiscono soggetti con ruoli diversi, detti <b>operatori economici</b>:</p>
<ul>
<li><b>Le famiglie</b>: <b>consumano</b> beni e servizi e <b>offrono lavoro</b> (e talvolta capitale e terra) in cambio di un reddito: stipendi, interessi, affitti. Parte del reddito è <b>risparmiata</b>.</li>
<li><b>Le imprese</b>: <b>producono</b> beni e servizi combinando i fattori produttivi, con l'obiettivo di vendere e ottenere un <b>profitto</b>. Pagano salari, affitti, interessi e imposte.</li>
<li><b>Lo Stato</b> (o <b>pubblica amministrazione</b>: Stato, Regioni, Comuni, enti): produce e offre <b>servizi pubblici</b> (scuola, sanità, sicurezza, giustizia), <b>redistribuisce</b> il reddito con le imposte e i trasferimenti (pensioni, sussidi), regola l'economia.</li>
<li><b>Il resto del mondo</b>: gli altri Paesi, con cui si scambiano beni, servizi e capitali (<b>importazioni</b> ed <b>esportazioni</b>).</li>
</ul>
<p>Si dice <b>operatore</b> perché ciascuno prende decisioni di consumo, produzione e risparmio, e tutte queste decisioni si intrecciano nei <b>mercati</b>: il mercato dei beni (dove si vendono prodotti), il mercato del lavoro (dove si offre lavoro), il mercato finanziario (dove circolano risparmi e prestiti).</p>`
    },
    {
      type: "svg",
      title: "Il flusso circolare del reddito",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flusso circolare tra famiglie e imprese">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="110" width="140" height="70" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="100" y="152" text-anchor="middle" font-size="18" font-weight="bold" fill="#14532d">FAMIGLIE</text>
<rect x="430" y="110" width="140" height="70" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="500" y="152" text-anchor="middle" font-size="18" font-weight="bold" fill="#1e3a8a">IMPRESE</text>
<path d="M170,125 C250,40 350,40 430,125" fill="none" stroke="#b45309" stroke-width="3"/>
<polygon points="430,125 418,112 414,128" fill="#b45309"/>
<text x="300" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="#78350f">Lavoro e capitale (fattori)</text>
<path d="M430,165 C350,250 250,250 170,165" fill="none" stroke="#b91c1c" stroke-width="3"/>
<polygon points="170,165 182,178 186,162" fill="#b91c1c"/>
<text x="300" y="260" text-anchor="middle" font-size="14" font-weight="bold" fill="#7f1d1d">Salari, interessi, affitti (reddito)</text>
<text x="300" y="148" text-anchor="middle" font-size="14" fill="#334155">e, in senso opposto:</text>
<text x="300" y="168" text-anchor="middle" font-size="14" fill="#334155">beni/servizi ↔ spesa</text>
</svg>`,
      caption: "Le famiglie offrono lavoro e ricevono reddito; con il reddito comprano i beni e i servizi prodotti dalle imprese: così il denaro circola."
    },
    {
      type: "text",
      title: "2. Il mercato, la domanda e l'offerta",
      html: `<p>Il <b>mercato</b> è l'insieme degli scambi tra chi vuole comprare (<b>domanda</b>) e chi vuole vendere (<b>offerta</b>) un certo bene. Il <b>prezzo</b> è il segnale che coordina le decisioni:</p>
<ul>
<li>La <b>domanda</b> è la quantità che i consumatori vogliono comprare a ciascun prezzo: di regola, se il prezzo sale, la domanda <b>scende</b>.</li>
<li>L'<b>offerta</b> è la quantità che i produttori vogliono vendere: se il prezzo sale, l'offerta <b>sale</b> (vendere diventa più conveniente).</li>
<li>Il <b>prezzo di equilibrio</b> è quello a cui la quantità domandata e quella offerta coincidono.</li>
</ul>
<p>Se il prezzo è troppo alto, i venditori hanno merce invenduta e abbassano il prezzo; se è troppo basso, i beni finiscono presto e i prezzi salgono. Questo meccanismo spontaneo fu chiamato da Adam Smith la <b>"mano invisibile"</b> del mercato.</p>
<p>Il mercato può avere forme diverse:</p>
<ul>
<li><b>concorrenza perfetta</b>: molti venditori e compratori, nessuno può influenzare il prezzo;</li>
<li><b>monopolio</b>: un solo venditore, che può decidere il prezzo;</li>
<li><b>oligopolio</b>: pochi grandi venditori (ad esempio i produttori di telefonia mobile o le compagnie petrolifere);</li>
</ul>
<p>Per questo molti Stati hanno leggi che tutelano la <b>concorrenza</b>: in Italia c'è l'Autorità garante della concorrenza e del mercato.</p>`
    },
    {
      type: "example",
      title: "Il prezzo dei biglietti di un concerto",
      html: `<p>Un concerto ha 5.000 posti ma 20.000 fan vogliono andarci. Se il biglietto costa 30 euro, la domanda (20.000) supera l'offerta (5.000): si formano code e nasce il bagarinaggio. Se gli organizzatori alzano il prezzo a 120 euro, molti rinunciano: la domanda scende finché coincide con i posti disponibili. Il prezzo ha smistato i biglietti tra chi li desidera di più. Se invece il biglietto costasse 120 euro ma i fan fossero solo 1.000, resterebbero posti vuoti e gli organizzatori dovrebbero abbassare il prezzo.</p>`
    },
    {
      type: "text",
      title: "3. Il sistema liberista (capitalista)",
      html: `<p>In un sistema <b>liberista</b> o di <b>economia di mercato</b> le risorse sono, di regola, di proprietà <b>privata</b> e le decisioni (cosa, come e per chi produrre) sono prese da individui e imprese in base ai <b>prezzi</b> e alla ricerca del <b>profitto</b>. Lo Stato interviene il meno possibile: fa rispettare la proprietà e i contratti, difende il Paese, garantisce la giustizia (<i>laissez-faire</i>: "lasciate fare").</p>
<p>Il teorico più famoso fu lo scozzese <b>Adam Smith</b>, autore nel <b>1776</b> di <i>La ricchezza delle nazioni</i>: secondo lui, perseguendo il proprio interesse, ciascuno contribuisce, come guidato da una "mano invisibile", al benessere di tutti; la <b>divisione del lavoro</b> aumenta enormemente la produttività.</p>
<p><b>Vantaggi</b>: stimola l'efficienza, l'innovazione e la libertà di iniziativa; i prezzi trasmettono informazioni; il sistema si adatta rapidamente.</p>
<p><b>Limiti</b>: tende a generare forti <b>disuguaglianze</b>; può produrre monopoli; non garantisce beni pubblici (sicurezza, istruzione); non tiene conto delle <b>esternalità</b> (come l'inquinamento: un costo per tutti che non paga chi lo causa); è soggetto a <b>crisi</b> (come quella del 1929, la grande depressione).</p>`
    },
    {
      type: "text",
      title: "4. Il sistema collettivista (pianificato)",
      html: `<p>Nel sistema <b>collettivista</b> i principali mezzi di produzione (terre, fabbriche, banche) sono di <b>proprietà pubblica</b> e le decisioni economiche sono prese dallo Stato attraverso un <b>piano</b> centrale: lo Stato stabilisce cosa produrre, in che quantità e a quali prezzi. L'ispirazione teorica viene da <b>Karl Marx</b> (<i>Il Capitale</i>, 1867), che criticava lo sfruttamento dei lavoratori da parte dei proprietari del capitale e immaginava una società senza classi.</p>
<p>Esempio storico è l'<b>Unione Sovietica</b>, dove dal <b>1928</b> i <b>piani quinquennali</b> guidarono una rapidissima industrializzazione. Il sistema crollò con la caduta dei regimi comunisti dell'Europa orientale (<b>1989</b>, caduta del Muro di Berlino) e la dissoluzione dell'URSS nel <b>1991</b>.</p>
<p><b>Vantaggi (teorici)</b>: ridurre le disuguaglianze, garantire occupazione e servizi essenziali a tutti, indirizzare le risorse a obiettivi collettivi.</p>
<p><b>Limiti</b>: pianificare l'intera economia è complicatissimo (mancano informazioni e incentivi), con conseguenti sprechi, scarsità di beni di consumo, poca innovazione; l'assenza di libertà economica si accompagnava, nei regimi reali, alla mancanza di libertà politica.</p>
<p>Oggi non esistono grandi economie interamente pianificate. La <b>Cina</b> ha avviato dal <b>1978</b> (con Deng Xiaoping) riforme verso il mercato, mantenendo il controllo politico del Partito comunista e un forte ruolo dello Stato (la chiama "economia socialista di mercato").</p>`
    },
    {
      type: "widget",
      title: "Quale sistema?",
      widget: "classify",
      options: {
        groups: ["Liberista (mercato)", "Collettivista (piano)"],
        items: [
          ["I prezzi sono decisi dall'incontro di domanda e offerta", 0],
          ["Lo Stato decide quanti beni produrre con un piano quinquennale", 1],
          ["Le fabbriche sono di proprietà privata", 0],
          ["I principali mezzi di produzione appartengono allo Stato", 1],
          ["Si cerca il profitto", 0],
          ["Si punta sull'uguaglianza e il controllo statale", 1],
          ["Lo Stato interviene il meno possibile", 0],
          ["Ispirazione tratta da Marx", 1]
        ]
      },
      caption: "Assegna ciascuna caratteristica al sistema economico giusto."
    },
    {
      type: "quiz",
      title: "Controlla subito",
      questions: [
        { type: "mc", q: "Chi offre lavoro in cambio di un reddito?", options: ["Le famiglie", "Le imprese", "Lo Stato soltanto"], answer: 0, explain: "Le famiglie offrono lavoro e ricevono reddito; le imprese lo domandano." },
        { type: "tf", q: "In un sistema liberista i prezzi sono decisi da un piano dello Stato.", answer: false, explain: "I prezzi nascono dall'incontro tra domanda e offerta." },
        { type: "mc", q: "Chi scrisse La ricchezza delle nazioni (1776)?", options: ["Adam Smith", "Karl Marx", "John Maynard Keynes"], answer: 0, explain: "Fu l'opera fondatrice del liberismo economico." }
      ]
    },
    {
      type: "text",
      title: "5. L'economia mista",
      html: `<p>Quasi tutti i Paesi di oggi hanno <b>economie miste</b>: combinano il mercato e un intervento significativo dello Stato. La proprietà privata e l'iniziativa individuale restano il motore principale, ma lo Stato <b>regola</b> i mercati, produce alcuni servizi, <b>redistribuisce</b> reddito e tutela i più deboli.</p>
<p>Un passaggio decisivo fu la <b>grande crisi del 1929</b>. Il mercato, lasciato a se stesso, produsse una depressione con milioni di disoccupati. L'economista inglese <b>John Maynard Keynes</b>, nella <i>Teoria generale</i> (<b>1936</b>), sostenne che lo Stato dovesse intervenire con la spesa pubblica per sostenere la domanda e l'occupazione nei periodi di crisi. Negli Stati Uniti il presidente <b>Roosevelt</b> varò dal <b>1933</b> il <b>New Deal</b>. Dopo la Seconda guerra mondiale nacque in Europa il <b>welfare state</b> (Stato sociale), che garantisce sanità, istruzione, pensioni e sussidi: nel Regno Unito il <b>rapporto Beveridge</b> (1942) ne fu il progetto. In Italia il <b>Servizio sanitario nazionale</b> fu istituito nel <b>1978</b> (legge 833).</p>
<p>Lo Stato svolge nell'economia mista tre funzioni:</p>
<ul>
<li><b>allocazione</b>: produce beni e servizi che il mercato non fornirebbe o fornirebbe male (beni pubblici: difesa, illuminazione, giustizia);</li>
<li><b>redistribuzione</b>: riduce le disuguaglianze con imposte progressive e trasferimenti;</li>
<li><b>stabilizzazione</b>: contrasta crisi, disoccupazione e inflazione con la politica economica (fiscale e monetaria).</li>
</ul>
<p>Esistono molte varianti: più mercato (Stati Uniti) o più Stato (Paesi nordici, Francia).</p>`
    },
    {
      type: "svg",
      title: "Dal mercato al piano: lo spettro dei sistemi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spettro dei sistemi economici">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0%" stop-color="#93c5fd"/><stop offset="50%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fca5a5"/></linearGradient></defs>
<rect x="40" y="110" width="520" height="40" rx="10" fill="url(#g1)" stroke="#334155" stroke-width="2"/>
<text x="100" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e3a8a">Liberismo</text>
<text x="300" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="#78350f">Economia mista</text>
<text x="500" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="#7f1d1d">Collettivismo</text>
<text x="100" y="185" text-anchor="middle" font-size="14" fill="#1e293b">Più mercato</text>
<text x="100" y="205" text-anchor="middle" font-size="14" fill="#1e293b">Stato minimo</text>
<text x="300" y="185" text-anchor="middle" font-size="14" fill="#1e293b">Mercato + Stato</text>
<text x="300" y="205" text-anchor="middle" font-size="14" fill="#1e293b">Italia, UE, USA</text>
<text x="500" y="185" text-anchor="middle" font-size="14" fill="#1e293b">Più Stato</text>
<text x="500" y="205" text-anchor="middle" font-size="14" fill="#1e293b">Piano centrale</text>
<text x="300" y="268" text-anchor="middle" font-size="14" fill="#334155">I sistemi reali stanno in un continuum, non in tre caselle</text>
</svg>`,
      caption: "I sistemi economici non sono compartimenti stagni: sono posizioni lungo una scala."
    },
    {
      type: "text",
      title: "6. L'economia nella Costituzione italiana",
      html: `<p>L'Italia ha un'<b>economia mista</b>, e la Costituzione ne dà il fondamento:</p>
<ul>
<li><b>Art. 41</b>: l'iniziativa economica privata è <b>libera</b>; non può svolgersi in contrasto con l'<b>utilità sociale</b> o in modo da recare danno alla salute, all'ambiente, alla sicurezza, alla libertà e alla dignità umana (formula modificata nel 2022). La legge può indirizzare e coordinare l'attività economica pubblica e privata a fini sociali e ambientali.</li>
<li><b>Art. 42</b>: la <b>proprietà privata</b> è riconosciuta e garantita; la legge ne determina i modi di acquisto, di godimento e i limiti, per assicurarne la <b>funzione sociale</b>.</li>
<li><b>Art. 43</b>: per fini di utilità generale la legge può riservare allo Stato determinate imprese di servizi essenziali o di monopolio.</li>
<li><b>Art. 53</b>: tutti concorrono alle spese pubbliche in base alla capacità contributiva, con un sistema tributario progressivo.</li>
<li><b>Art. 35 e 36</b>: tutela del lavoro e retribuzione dignitosa. <b>Art. 38</b>: assistenza sociale e previdenza.</li>
</ul>
<p>Negli anni Trenta lo Stato italiano creò l'<b>IRI</b> (Istituto per la ricostruzione industriale, 1933), che salvò banche e imprese in crisi e controllò per decenni grandi settori. Dagli anni Novanta molte imprese pubbliche sono state <b>privatizzate</b>.</p>
<p>L'Italia fa inoltre parte dell'<b>Unione europea</b> e, dal 2002, dell'<b>euro</b>: la politica monetaria è affidata alla Banca centrale europea.</p>`
    },
    {
      type: "decision",
      title: "Una crisi economica: lasciare fare o intervenire?",
      html: `<p>Immagina di essere il governo di un Paese colpito da una grave recessione: le fabbriche chiudono, la disoccupazione sale al 20%, le famiglie riducono i consumi e questo peggiora ancora le cose. Gli economisti sono divisi.</p>`,
      question: "Tu cosa faresti?",
      options: [
        { label: "Non intervenire: il mercato si aggiusterà da solo", outcome: "Era l'idea prevalente prima del 1929. Ma negli anni Trenta la depressione durò anni, con milioni di disoccupati." },
        { label: "Intervenire con investimenti pubblici e sostegni per rilanciare la domanda", outcome: "È la ricetta keynesiana: spesa pubblica per stimolare l'economia. Funziona se non produce debito eccessivo e viene riassorbita a crisi finita." },
        { label: "Nazionalizzare tutte le imprese e pianificare la produzione", outcome: "Il modello sovietico funzionò solo in parte e al prezzo di scarsità di beni e mancanza di libertà; nelle economie occidentali non è stato adottato." }
      ],
      answer: 1,
      explain: "Dopo il 1929 la maggioranza dei Paesi occidentali adottò una forma di economia mista: mercato, ma con un forte ruolo dello Stato nel sostenere la domanda e le persone in difficoltà (Keynes, New Deal). È la logica che ha ispirato il welfare state."
    },
    {
      type: "example",
      title: "Il flusso circolare in una città",
      html: `<p>Una pizzeria paga lo stipendio a un cameriere (famiglia), che con quel reddito compra le scarpe in un negozio (impresa), il quale a sua volta paga i fornitori e le imposte. Lo Stato usa le imposte per pagare gli insegnanti, che spendono il loro stipendio anche in pizzeria. Il denaro passa di mano in mano: ogni spesa è il reddito di qualcun altro. Se tutti smettessero di spendere per paura della crisi, il circuito si fermerebbe.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Operatori: <b>famiglie, imprese, Stato, resto del mondo</b>.</li>
<li><b>Liberismo</b>: proprietà privata, mercato, Stato minimo (Adam Smith, 1776).</li>
<li><b>Collettivismo</b>: proprietà pubblica, piano centrale (Marx; URSS dal 1928; crollo 1989-1991).</li>
<li><b>Economia mista</b>: mercato + intervento dello Stato (Keynes 1936; welfare state). È il modello dell'Italia (artt. 41-43, 53).</li>
<li>Funzioni dello Stato: allocazione, redistribuzione, stabilizzazione.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i sistemi economici",
      intro: "Tre analogie per ricordare le differenze.",
      tabs: [
        {
          label: "🍽️ Un grande ristorante",
          html: `<p>Nel <b>liberismo</b> tanti cuochi indipendenti cucinano ciò che pensano piacerà ai clienti: sopravvivono i più apprezzati. Nel <b>collettivismo</b> c'è un unico menu deciso dalla direzione: tutti mangiano, ma senza scelta e con rischi di spreco. Nell'<b>economia mista</b> ci sono molti cuochi indipendenti, ma l'autorità sanitaria controlla le regole d'igiene e c'è una mensa pubblica per chi non può permettersi di pagare.</p>`
        },
        {
          label: "⚽ Una partita di calcio",
          html: `<p>Il mercato è la partita: le squadre competono. Lo Stato in un'economia mista è l'<b>arbitro</b> (fa rispettare le regole), il <b>medico</b> (aiuta chi si fa male) e l'organizzatore del campionato (evita che una squadra compri tutti i giocatori). In un'economia pianificata lo Stato sarebbe l'allenatore di tutte le squadre insieme e deciderebbe anche i risultati.</p>`
        },
        {
          label: "🚦 Il traffico",
          html: `<p>Il traffico può funzionare con soli automobilisti che decidono (liberismo), con un controllo totale che fissa ogni percorso (pianificazione) o con semafori, segnali e regole che coordinano le scelte individuali (economia mista). La seconda soluzione è la meno flessibile, la prima può creare ingorghi: la terza funziona quasi ovunque.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: i sistemi economici",
      nodes: [
        { id: "sistema", label: "Sistema economico", x: 50, y: 8, color: "#2563eb", html: "Modo in cui una società risponde a: cosa, come, per chi produrre.", why: "Nasce dal problema della scarsità: ogni società deve organizzare produzione e distribuzione. Le risposte possono basarsi sul mercato, sul piano, o su una combinazione." },
        { id: "operatori", label: "Operatori", x: 18, y: 36, color: "#16a34a", html: "Famiglie, imprese, Stato, resto del mondo.", why: "Il flusso circolare mostra che il reddito di uno è la spesa di un altro: se le famiglie spendono meno, le imprese vendono meno, e tagliano il lavoro: il circuito rallenta (idea alla base di Keynes)." },
        { id: "liberismo", label: "Liberismo", x: 82, y: 36, color: "#f59e0b", html: "Proprietà privata, mercato, Stato minimo.", why: "Si afferma con la rivoluzione industriale e le idee di Adam Smith (1776): contro i privilegi e i monopoli del mercantilismo, propone la libera concorrenza." },
        { id: "collettivismo", label: "Collettivismo", x: 18, y: 66, color: "#dc2626", html: "Proprietà pubblica, piano centrale.", why: "Nasce come reazione alle condizioni dei lavoratori nella prima industrializzazione (Marx). La sua applicazione sovietica mostrò i limiti dell'assenza di prezzi e incentivi." },
        { id: "mista", label: "Economia mista", x: 82, y: 66, color: "#a855f7", html: "Mercato più intervento dello Stato.", why: "Dopo la crisi del 1929 e la guerra, l'idea che lo Stato debba stabilizzare l'economia (Keynes) e garantire diritti sociali (welfare) diventa dominante in Occidente." },
        { id: "costituzione", label: "Italia: artt. 41-43, 53", x: 50, y: 90, color: "#0891b2", html: "Libera iniziativa, proprietà con funzione sociale, tributi progressivi.", why: "I Costituenti, di culture diverse, scelsero un modello misto: libertà di impresa ma limitata dall'utilità sociale e dai diritti dei lavoratori, in linea con i principi di solidarietà e uguaglianza (artt. 2 e 3)." }
      ],
      edges: [["sistema", "operatori", "coinvolge"], ["sistema", "liberismo", "può essere"], ["sistema", "collettivismo", "può essere"], ["sistema", "mista", "può essere"], ["mista", "costituzione", "è il modello di"]]
    },
    {
      type: "curiosity",
      title: "La mano invisibile e la guerra dei prezzi del pane",
      html: `<p>Smith scrisse nel 1776: "Non è dalla benevolenza del macellaio, del birraio o del fornaio che ci aspettiamo la nostra cena, ma dal loro interesse". Intendeva dire che il mercato trasforma il comune egoismo in beneficio per tutti, a patto che ci sia concorrenza. Lo stesso Smith, però, sapeva che quando i produttori si accordano tra loro (cartelli) il consumatore ci rimette: oggi i cartelli sono vietati nell'Unione europea.</p>`
    },
    {
      type: "curiosity",
      title: "Quando lo Stato era imprenditore",
      html: `<p>Fino agli anni Novanta in Italia erano pubbliche banche, telefoni, energia, autostrade, acciaio. Negli anni del "boom economico" (circa 1958-1963) l'IRI contribuì alla ricostruzione e alla crescita industriale. Con le <b>privatizzazioni</b> degli anni Novanta e l'ingresso nell'Unione europea molte di queste imprese sono passate a proprietari privati, mentre lo Stato mantiene il controllo su altre (ad esempio Poste Italiane ed Enel sono ancora in parte partecipate dallo Stato).</p>`
    },
    {
      type: "quiz",
      title: "Secondo controllo",
      questions: [
        { type: "mc", q: "Quale economista propose l'intervento dello Stato nelle crisi con la spesa pubblica?", options: ["John Maynard Keynes", "Adam Smith", "Karl Marx"], answer: 0, explain: "Keynes, nella Teoria generale (1936)." },
        { type: "tf", q: "Secondo l'art. 42 della Costituzione la proprietà privata è garantita ma deve avere una funzione sociale.", answer: true, explain: "La legge ne determina modi di acquisto, godimento e limiti per assicurarne la funzione sociale." },
        { type: "mc", q: "Quale sistema è il modello dell'Italia?", options: ["Economia mista", "Collettivismo", "Liberismo puro"], answer: 0, explain: "Mercato e intervento dello Stato convivono (artt. 41-43 Cost.)." }
      ]
    }
  ],
  glossary: [
    { t: "Sistema economico", d: "Insieme di istituzioni e regole con cui una società decide cosa, come e per chi produrre." },
    { t: "Operatori economici", d: "Famiglie, imprese, Stato e resto del mondo." },
    { t: "Mercato", d: "Luogo (anche virtuale) in cui si incontrano domanda e offerta di un bene." },
    { t: "Prezzo di equilibrio", d: "Prezzo al quale la quantità domandata è uguale a quella offerta." },
    { t: "Liberismo", d: "Dottrina economica che affida le decisioni al mercato e riduce al minimo l'intervento statale." },
    { t: "Collettivismo", d: "Sistema fondato sulla proprietà pubblica dei mezzi di produzione e sulla pianificazione." },
    { t: "Economia mista", d: "Sistema in cui coesistono mercato e intervento dello Stato." },
    { t: "Welfare state", d: "Stato sociale: sanità, istruzione, previdenza e assistenza garantite dallo Stato." },
    { t: "Monopolio", d: "Mercato con un solo venditore, che può determinare il prezzo." },
    { t: "Esternalità", d: "Costo o beneficio che ricade su terzi senza essere pagato (ad esempio l'inquinamento)." },
    { t: "Privatizzazione", d: "Passaggio di un'impresa dalla proprietà pubblica a quella privata." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale operatore produce beni e servizi per ottenere un profitto?", options: ["L'impresa", "La famiglia", "Il resto del mondo"], answer: 0, explain: "Le imprese combinano i fattori produttivi e vendono sul mercato." },
      { type: "tf", q: "In un'economia di mercato il prezzo si forma dall'incontro tra domanda e offerta.", answer: true, explain: "Il prezzo di equilibrio è quello a cui domanda e offerta coincidono." },
      { type: "mc", q: "Chi scrisse nel 1776 La ricchezza delle nazioni?", options: ["Adam Smith", "John Keynes", "Karl Marx"], answer: 0, explain: "Smith è il padre del liberismo economico." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["La ricchezza delle nazioni (1776)", "Piani quinquennali sovietici (1928)", "Teoria generale di Keynes (1936)", "Caduta del Muro di Berlino (1989)"], explain: "1776, 1928, 1936, 1989." },
      { type: "mc", q: "Qual è una funzione dello Stato nell'economia mista?", options: ["Redistribuire il reddito con imposte progressive", "Decidere ogni prezzo", "Vietare ogni impresa privata"], answer: 0, explain: "Redistribuzione, allocazione e stabilizzazione." },
      { type: "text", q: "Come si chiama il Paese che dal 1928 adottò i piani quinquennali?", answer: ["unione sovietica", "urss", "l'unione sovietica", "unione sovietica (urss)"], explain: "L'Unione Sovietica (URSS)." },
      { type: "mc", q: "Cosa stabilisce l'art. 41 della Costituzione?", options: ["L'iniziativa economica privata è libera ma non può contrastare l'utilità sociale", "L'economia è pianificata", "La proprietà è abolita"], answer: 0, explain: "Libera iniziativa con limiti di utilità sociale, salute, ambiente, sicurezza, libertà e dignità." },
      { type: "tf", q: "Il monopolio è un mercato con molti venditori in concorrenza.", answer: false, explain: "Nel monopolio c'è un solo venditore." },
      { type: "mc", q: "Quale fu la grande crisi che spinse molti Stati a intervenire nell'economia?", options: ["La crisi del 1929", "La crisi del 1789", "La crisi del 1861"], answer: 0, explain: "La grande depressione degli anni Trenta." },
      { type: "mc", q: "Cos'è l'economia mista?", options: ["Un sistema con mercato e intervento dello Stato", "Un sistema senza imprese private", "Un sistema senza Stato"], answer: 0, explain: "È il modello prevalente nelle democrazie occidentali, Italia compresa." }
    ]
  }
});
