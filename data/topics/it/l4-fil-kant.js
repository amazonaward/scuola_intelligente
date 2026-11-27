TOPIC('it', {
  id: "l4-fil-kant",
  title: "Kant",
  intro: "«Due cose riempiono l'animo di ammirazione e venerazione sempre nuova e crescente: il cielo stellato sopra di me e la legge morale in me.» Così scrive <b>Immanuel Kant</b> alla fine della <i>Critica della ragion pratica</i>. In queste due immagini c'è il suo progetto: capire che cosa possiamo <b>conoscere</b> (la scienza della natura), che cosa dobbiamo <b>fare</b> (la morale) e che cosa possiamo <b>sperare</b>. Kant mette d'accordo razionalisti ed empiristi con una «rivoluzione copernicana»: non è la mente che si adegua alle cose, ma le cose (come ci appaiono) che si adeguano alle strutture della mente. È il passaggio più importante della filosofia moderna.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "1. Vita e opere",
      html: `<p><b>Immanuel Kant</b> nacque a <b>Königsberg</b> (Prussia orientale, oggi Kaliningrad, in Russia) nel <b>1724</b> e vi morì nel <b>1804</b>. Visse sempre lì, senza viaggiare, in una vita così regolare che, si racconta, i vicini regolavano gli orologi sulla sua passeggiata quotidiana. Insegnò all'università (logica e metafisica, ma anche fisica, geografia, antropologia). Il periodo detto <b>precritico</b> lo vede vicino alla filosofia razionalista di Leibniz e Wolff e interessato alla scienza newtoniana; poi, per sua stessa ammissione, la lettura di <b>Hume</b> lo «svegliò dal sonno dogmatico».</p>
<p>Le tre <b>Critiche</b>, che indagano le facoltà della mente (la «critica» è l'esame dei limiti e delle condizioni di validità):</p>
<ul>
<li><i>Critica della ragion pura</i> (1781, seconda edizione 1787): che cosa possiamo <b>sapere</b>?</li>
<li><i>Critica della ragion pratica</i> (1788): che cosa dobbiamo <b>fare</b>? (Preparata dalla <i>Fondazione della metafisica dei costumi</i>, 1785.)</li>
<li><i>Critica del giudizio</i> (1790): che cosa possiamo <b>sperare</b>? Il bello, il sublime, i fini della natura.</li>
</ul>
<p>Altri scritti: <i>Prolegomeni a ogni futura metafisica</i> (1783), <i>Risposta alla domanda: che cos'è l'illuminismo?</i> (1784), <i>La religione entro i limiti della sola ragione</i> (1793), <i>Per la pace perpetua</i> (1795). Le domande della filosofia, secondo Kant, si riassumono in quattro: che cosa posso sapere? che cosa devo fare? che cosa mi è lecito sperare? che cos'è l'uomo?</p>`
    },
    {
      type: "text",
      title: "2. Il problema: può esistere una conoscenza certa?",
      html: `<p>Dopo Hume sembrava che la scienza non avesse fondamento: se tutto deriva dall'esperienza, non c'è nulla di <b>necessario</b> e <b>universale</b>. Eppure la fisica di Newton e la matematica sono certe. Kant si chiede: <b>come sono possibili i giudizi che ampliano la conoscenza e sono nello stesso tempo necessari?</b> Introduce due distinzioni:</p>
<ul>
<li><b>analitici / sintetici</b>: il giudizio è <i>analitico</i> se il predicato è già contenuto nel soggetto («tutti i corpi sono estesi»): non aggiunge nulla; è <i>sintetico</i> se aggiunge qualcosa di nuovo («i corpi sono pesanti»);</li>
<li><b>a priori / a posteriori</b>: il giudizio è <i>a posteriori</i> se dipende dall'esperienza (e quindi non è universale né necessario); <i>a priori</i> se vale indipendentemente da essa (universale e necessario).</li>
</ul>
<p>I giudizi analitici sono sempre a priori, ma non ampliano la conoscenza; i sintetici a posteriori la ampliano, ma non sono necessari. La scienza ha bisogno dei giudizi <b>sintetici a priori</b>: aggiungono qualcosa di nuovo e valgono universalmente. Esempi: «7+5=12» (la matematica), «ogni evento ha una causa» (la fisica). La domanda della <i>Critica della ragion pura</i> è dunque: <b>come sono possibili i giudizi sintetici a priori?</b></p>
<table>
<tr><th></th><th>A priori</th><th>A posteriori</th></tr>
<tr><td><b>Analitici</b></td><td>«Il triangolo ha tre lati»</td><td>(non esistono)</td></tr>
<tr><td><b>Sintetici</b></td><td><b>«7+5=12»; «ogni evento ha una causa»</b></td><td>«Oggi piove»</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "La rivoluzione copernicana di Kant",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="20" width="260" height="260" rx="14" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<text x="150" y="50" font-size="18" font-weight="bold" text-anchor="middle" fill="#7f1d1d">Prima di Kant</text>
<circle cx="150" cy="160" r="38" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="150" y="166" font-size="16" text-anchor="middle" fill="#451a03">OGGETTO</text>
<circle cx="150" cy="240" r="22" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="150" y="246" font-size="14" text-anchor="middle" fill="#1e3a8a">mente</text>
<path d="M150 218 V198" stroke="#475569" stroke-width="3"/>
<text x="150" y="88" font-size="15" text-anchor="middle" fill="#7f1d1d">la conoscenza si adegua</text>
<text x="150" y="108" font-size="15" text-anchor="middle" fill="#7f1d1d">all'oggetto</text>
<rect x="320" y="20" width="260" height="260" rx="14" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="450" y="50" font-size="18" font-weight="bold" text-anchor="middle" fill="#14532d">Con Kant</text>
<circle cx="450" cy="160" r="38" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="450" y="166" font-size="16" text-anchor="middle" fill="#1e3a8a">SOGGETTO</text>
<circle cx="450" cy="240" r="22" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="450" y="246" font-size="13" text-anchor="middle" fill="#451a03">cosa</text>
<path d="M450 198 V218" stroke="#475569" stroke-width="3"/>
<text x="450" y="88" font-size="15" text-anchor="middle" fill="#14532d">gli oggetti (fenomeni)</text>
<text x="450" y="108" font-size="15" text-anchor="middle" fill="#14532d">si adeguano al soggetto</text>
</svg>`,
      caption: "Come Copernico, Kant sposta il centro: è il soggetto, con le sue forme a priori, a costituire l'oggetto dell'esperienza."
    },
    {
      type: "text",
      title: "3. La Critica della ragion pura: estetica e analitica",
      html: `<p>Kant paragona il suo metodo alla rivoluzione di Copernico: invece di supporre che la nostra conoscenza si regoli sugli oggetti, supponiamo che <b>gli oggetti si regolino sulla nostra conoscenza</b>. Conosciamo le cose non come sono «in sé», ma come <b>appaiono</b> a noi, cioè attraverso le forme del soggetto. La conoscenza richiede due elementi: la <b>materia</b> (le sensazioni, dall'esperienza) e la <b>forma</b> (a priori, dalla mente). «I pensieri senza contenuto sono vuoti, le intuizioni senza concetti sono cieche.»</p>
<p>La <i>Critica</i> segue tre livelli:</p>
<ol>
<li><b>Estetica trascendentale</b> (dalla <i>aisthesis</i>, sensazione): la <b>sensibilità</b> riceve le sensazioni e le ordina in <b>spazio</b> e <b>tempo</b>, forme a priori dell'intuizione. Spazio e tempo non sono cose, né concetti ricavati dall'esperienza: sono le «lenti» con cui vediamo. Questo fonda la <b>geometria</b> (spazio) e l'<b>aritmetica</b> (tempo, successione) come scienze sintetiche a priori.</li>
<li><b>Analitica trascendentale</b>: l'<b>intelletto</b> pensa gli oggetti con i <b>concetti puri</b> o <b>categorie</b> (12, tra cui unità, pluralità, sostanza, causa-effetto, possibilità, necessità). Le categorie sono unificate dall'<b>«io penso»</b> (appercezione trascendentale), che accompagna tutte le nostre rappresentazioni. Il principio di causa non viene dall'abitudine, come credeva Hume: è una categoria a priori con cui la mente organizza l'esperienza. Per questo ogni esperienza possibile è governata dalla causalità, e la fisica newtoniana è fondata.</li>
<li><b>Dialettica trascendentale</b>: la <b>ragione</b> vuole spingersi oltre l'esperienza, verso l'incondizionato.</li>
</ol>
<p>La conoscenza è così fondata, ma anche <b>limitata</b>: vale solo per il <b>fenomeno</b> (la cosa come appare nello spazio e nel tempo, secondo le categorie). La <b>cosa in sé</b> o <b>noumeno</b> (la realtà come sarebbe indipendentemente da noi) resta inconoscibile: possiamo pensarla (come concetto limite), non conoscerla.</p>`
    },
    {
      type: "text",
      title: "4. La Dialettica: i limiti della metafisica",
      html: `<p>La ragione ha una tendenza naturale a spingersi oltre i limiti dell'esperienza, cercando l'<b>incondizionato</b>. Produce così tre <b>idee</b> (non concetti dell'intelletto): <b>anima</b> (unità del soggetto), <b>mondo</b> (totalità dei fenomeni) e <b>Dio</b> (fondamento di tutto). Ma usandole come se fossero conoscenze dà luogo a <b>illusioni</b> e a contraddizioni:</p>
<ul>
<li><b>Paralogismi</b>: errori sull'anima (da «penso» non segue che io sia una sostanza semplice e immortale).</li>
<li><b>Antinomie</b>: due tesi opposte entrambe dimostrabili sul mondo. Per esempio: «il mondo ha un inizio nel tempo e confini nello spazio» / «il mondo è infinito». La ragione si contraddice quando pretende di parlare dell'universo come totalità.</li>
<li><b>Prove dell'esistenza di Dio</b>: Kant critica le prove ontologica (l'esistenza non è un predicato: cento talleri reali non contengono una moneta più dei cento talleri possibili), cosmologica e fisico-teologica.</li>
</ul>
<p>Conclusione: la <b>metafisica</b> come scienza (conoscenza dell'anima, del mondo, di Dio) <b>non è possibile</b>. Ma Kant non ne fa un semplice nulla: le idee hanno un uso <b>regolativo</b> (orientano la ricerca verso l'unità), e la loro vera sede è la <b>ragione pratica</b>. «Ho dovuto sopprimere il sapere per far posto alla fede.»</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: conoscenza e limiti",
      questions: [
        { type: "mc", q: "Quali sono le forme a priori della sensibilità?", options: ["Spazio e tempo", "Causa ed effetto", "Anima, mondo, Dio"], answer: 0, explain: "Spazio e tempo sono le forme dell'intuizione sensibile." },
        { type: "tf", q: "Per Kant conosciamo la cosa in sé così com'è, indipendentemente da noi.", answer: false, explain: "Conosciamo solo i fenomeni; la cosa in sé è pensabile ma non conoscibile." },
        { type: "mc", q: "Quale tipo di giudizio fonda la scienza?", options: ["Sintetici a priori", "Analitici a priori", "Sintetici a posteriori"], answer: 0, explain: "Ampliano la conoscenza e sono universali e necessari." }
      ]
    },
    {
      type: "text",
      title: "5. La morale: il dovere e l'imperativo categorico",
      html: `<p>Nella <i>Critica della ragion pratica</i> (e nella <i>Fondazione</i>) Kant risponde alla domanda «che cosa devo fare?». Per lui la morale non nasce dall'esperienza, dalla felicità o dal sentimento, ma dalla <b>ragione</b> stessa: l'uomo, in quanto essere razionale, ha una <b>legge morale</b> in sé, e la avverte come <b>dovere</b>. È una morale <b>formale</b>: non dice <i>che cosa</i> fare, ma <i>come</i> deve essere la regola che seguiamo.</p>
<ul>
<li>Una sola cosa è buona senza limitazioni: la <b>buona volontà</b>, cioè la volontà di agire per dovere (e non solo conforme al dovere). Un commerciante onesto solo per non perdere clienti agisce <i>conformemente</i> al dovere, ma non <i>per</i> dovere.</li>
<li>Gli <b>imperativi ipotetici</b> comandano mezzi per fini: «se vuoi superare l'esame, studia». Valgono solo se si vuole il fine.</li>
<li>L'<b>imperativo categorico</b> comanda in modo incondizionato, senza «se». È la forma della legge morale. Ha tre formulazioni principali:
<ol>
<li><b>Universalità</b>: «agisci soltanto secondo quella massima che tu puoi volere, nello stesso tempo, che diventi legge universale».</li>
<li><b>Umanità come fine</b>: «agisci in modo da trattare l'umanità, sia nella tua persona sia in quella di ogni altro, sempre anche come fine e mai semplicemente come mezzo».</li>
<li><b>Autonomia</b>: la volontà è legislatrice universale: obbedendo alla legge morale l'uomo obbedisce a se stesso, non a un'autorità esterna.</li>
</ol></li>
</ul>
<p>Esempio classico: posso fare una promessa che so di non poter mantenere? Se questa massima diventasse universale, nessuno crederebbe più alle promesse e la promessa stessa non avrebbe senso: la massima si autodistrugge, quindi è immorale. Per Kant, anche se per mentire c'è un buon motivo, la menzogna viola la legge morale.</p>
<p>La morale richiede la <b>libertà</b>: «devi, dunque puoi». Come sono liberi gli uomini, se nella natura tutto è causalità? Come <b>fenomeni</b> siamo parte della natura, come esseri razionali (<b>noumeni</b>) siamo liberi e autonomi. Per questo la libertà è conosciuta non dalla teoria, ma dalla coscienza della legge morale (<i>ratio cognoscendi</i>). Seguono i <b>postulati della ragion pratica</b>: la <b>libertà</b>, l'<b>immortalità dell'anima</b> (per avvicinarsi alla santità serve un progresso infinito) e l'<b>esistenza di Dio</b> (che accorda virtù e felicità, il «sommo bene»). Non sono conoscenze, ma presupposti morali.</p>`
    },
    {
      type: "decision",
      title: "Mentire per salvare un amico?",
      html: `<p>Un amico, perseguitato ingiustamente, si è nascosto in casa tua. Alla porta si presenta un uomo armato che chiede se è lì. Se dici la verità, lo uccideranno; se menti, lo salvi.</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Mento: la vita dell'amico conta più della verità.", outcome: "È la scelta che molti farebbero, e che un'etica delle conseguenze approva; per Kant però la menzogna non può diventare legge universale." },
        { label: "Dico sempre la verità: il dovere non ammette eccezioni.", outcome: "È la posizione estrema di Kant nel saggio «Su un presunto diritto di mentire per amore dell'umanità» (1797); molti la giudicano troppo rigida." },
        { label: "Rifiuto di rispondere e cerco di proteggerlo in altro modo.", outcome: "Una via d'uscita: non dire il falso, ma non collaborare con chi vuole fare del male." }
      ],
      answer: 1,
      explain: "Per Kant il dovere di veracità è assoluto: l'imperativo categorico non ammette eccezioni dettate dalle conseguenze. Molti studiosi e filosofi successivi hanno criticato questo rigorismo; ma la forza della sua morale sta nell'idea che ogni persona ha una dignità che non può essere sacrificata."
    },
    {
      type: "text",
      title: "6. La Critica del giudizio e la pace perpetua",
      html: `<p>Nella <i>Critica del giudizio</i> (1790) Kant cerca un ponte fra natura (necessità) e libertà, e studia il <b>giudizio</b>, la facoltà di collegare il particolare all'universale.</p>
<ul>
<li><b>Giudizio estetico</b> (il bello): quando diciamo «questo tramonto è bello» non esprimiamo un semplice gusto personale. Il giudizio di gusto è <b>disinteressato</b> (non desideriamo possedere l'oggetto), <b>universale</b> (pretende l'accordo degli altri, pur senza concetti né dimostrazioni), e coglie una <b>finalità senza scopo</b>: la forma dell'oggetto sembra fatta per la nostra facoltà di conoscere, ma non ha alcuno scopo pratico. Nasce dal «libero gioco» di immaginazione e intelletto.</li>
<li><b>Il sublime</b>: sentimento che nasce davanti a ciò che supera ogni misura (il cielo stellato, l'oceano in tempesta), come <b>sublime matematico</b> (l'immensità), o <b>dinamico</b> (la potenza della natura). Ci sentiamo piccoli come esseri sensibili, ma grandi come esseri razionali, capaci di pensare l'infinito e di opporre la legge morale alla natura.</li>
<li><b>Giudizio teleologico</b>: negli organismi vediamo parti che sembrano esistere in vista del tutto. Non possiamo dimostrare che la natura abbia davvero scopi; è un principio <b>regolativo</b> con cui giudichiamo gli esseri viventi.</li>
</ul>
<p>Anche in politica Kant è illuminista: nel saggio sull'<b>illuminismo</b> (1784) lo definisce «l'uscita dell'uomo dallo stato di minorità che egli deve imputare a se stesso» e invita: <b><i>sapere aude</i></b>, «abbi il coraggio di servirti della tua propria intelligenza». Nella <i>Pace perpetua</i> (1795) propone che gli Stati siano <b>repubbliche</b> (con separazione dei poteri e consenso dei cittadini), uniti in una <b>federazione di Stati liberi</b>, e che si riconosca un diritto cosmopolitico di ospitalità. Un'idea che anticipa la Società delle Nazioni e le Nazioni Unite.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: il sistema critico",
      nodes: [
        { id: "hume", label: "Hume e Newton", x: 50, y: 3, color: "#64748b", html: "Dubbio sulla causalità; successo della fisica.", why: "Kant vuole salvare la scienza di Newton dal dubbio di Hume: da qui i giudizi sintetici a priori." },
        { id: "copernicana", label: "Rivoluzione copernicana", x: 50, y: 24, color: "#f59e0b", html: "Gli oggetti si regolano sul soggetto.", why: "Se le forme sono nel soggetto, l'esperienza ha una struttura necessaria e universale." },
        { id: "sensibilita", label: "Sensibilità", x: 16, y: 48, color: "#2563eb", html: "Spazio e tempo, forme a priori.", why: "Rendono possibile la matematica come scienza sintetica a priori." },
        { id: "intelletto", label: "Intelletto", x: 50, y: 52, color: "#16a34a", html: "12 categorie, io penso.", why: "Con la categoria di causa si fonda la fisica e si risponde a Hume." },
        { id: "ragione", label: "Ragione e limiti", x: 84, y: 48, color: "#ef4444", html: "Idee di anima, mondo, Dio; antinomie.", why: "La ragione pretende di conoscere l'incondizionato, ma cade in illusioni: la metafisica come scienza è impossibile." },
        { id: "morale", label: "Ragione pratica", x: 30, y: 82, color: "#7c3aed", html: "Imperativo categorico, libertà, postulati.", why: "Ciò che non si può sapere si può credere per ragioni morali: libertà, immortalità, Dio." },
        { id: "giudizio", label: "Giudizio", x: 74, y: 82, color: "#14b8a6", html: "Bello, sublime, finalità.", why: "Unisce natura e libertà: nel bello sentiamo un accordo tra le nostre facoltà." }
      ],
      edges: [
        ["hume", "copernicana", "stimola"],
        ["copernicana", "sensibilita", "fonda"],
        ["copernicana", "intelletto", "fonda"],
        ["intelletto", "ragione", "limita"],
        ["ragione", "morale", "lascia spazio a"],
        ["morale", "giudizio", "ponte con"]
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire Kant",
      intro: "Il pensiero di Kant è astratto: ecco tre immagini concrete.",
      tabs: [
        {
          label: "🕶️ Gli occhiali colorati",
          html: `<p>Immagina di portare dalla nascita occhiali con lenti verdi, che non puoi togliere. Tutto ciò che vedi è verde: non perché il mondo sia verde, ma perché gli occhiali lo colorano. Spazio, tempo e categorie sono le nostre «lenti», con la differenza che non possiamo toglierle. Non vedremo mai la cosa «in sé» senza le lenti, ma sappiamo che, qualunque cosa vediamo, la vedremo sempre con queste lenti: questo dà alla scienza una validità necessaria.</p>`
        },
        {
          label: "🧪 Lo stampo dei biscotti",
          html: `<p>La pasta (le sensazioni) ci arriva dall'esterno, ma la forma del biscotto dipende dallo stampo (le forme a priori). Qualunque pasta usiamo, i biscotti avranno sempre la stessa forma: per questo possiamo prevedere con certezza che ogni esperienza avrà una forma spaziale, temporale e causale. Non possiamo sapere com'era la pasta prima di essere stampata.</p>`
        },
        {
          label: "⚖️ Il test dell'universalità",
          html: `<p>Prova con una massima: «copierò al compito se non mi vedono». Se tutti facessero lo stesso, i voti non avrebbero più senso e la regola si distruggerebbe da sola. Passo 1: scrivi la massima. Passo 2: immagina che tutti la seguano. Passo 3: se è autocontraddittoria o inaccettabile, non è morale. Altre due domande kantiane: sto trattando l'altro anche come un fine, o solo come un mezzo? Potrei dare questa legge a me stesso, senza costrizioni?</p>`
        }
      ]
    },
    {
      type: "example",
      title: "Un esempio: l'esame di una promessa",
      html: `<p>Hai bisogno di soldi e pensi di chiederli in prestito promettendo di restituirli, sapendo che non potrai. Massima: «quando sono nei guai prometto di restituire anche se so che non lo farò». Se diventasse legge universale, nessuno crederebbe più alle promesse e nessuno presterebbe soldi. Inoltre tratti chi ti presta solo come <b>mezzo</b>, ingannandolo. Quindi, per Kant, la massima è immorale: non per le conseguenze, ma per la sua <b>forma</b>, perché non può essere voluta come legge per tutti.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che...?",
      html: `<p>Kant non uscì mai dalla regione di Königsberg, eppure insegnava geografia fisica con grande successo. Quando nel 1804 morì, le sue ultime parole furono, secondo la tradizione, «<i>Es ist gut</i>» («va bene»). Sulla sua tomba è inciso il passo della <i>Critica della ragion pratica</i> sul cielo stellato e la legge morale. Nel 1755 propose la teoria nebulare sull'origine del sistema solare (poi ripresa da Laplace): era anche scienziato.</p>`
    },
    {
      type: "curiosity",
      title: "Il rigorismo di Kant: davvero mai una bugia?",
      html: `<p>Il saggio del 1797 «Su un presunto diritto di mentire» scatenò polemiche: l'amico (Benjamin Constant) gli aveva posto proprio il caso dell'assassino alla porta, e Kant rispose che anche allora non si può mentire. Molti kantiani moderni (per esempio Christine Korsgaard) cercano di mostrare che l'imperativo categorico ammette di rifiutare la cooperazione con il male anche con l'inganno. Il dibattito mostra come una morale senza eccezioni abbia pregi (dignità, uguaglianza) e limiti (rigidità).</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Kant (1724-1804): <i>Critica della ragion pura</i> (1781), <i>della ragion pratica</i> (1788), <i>del giudizio</i> (1790).</li>
<li><b>Rivoluzione copernicana</b>: gli oggetti si regolano sul soggetto. <b>Giudizi sintetici a priori</b> fondano la scienza.</li>
<li><b>Estetica</b>: spazio e tempo; <b>Analitica</b>: 12 categorie, io penso; <b>Dialettica</b>: idee di anima, mondo, Dio e limiti della metafisica.</li>
<li><b>Fenomeno</b> (conoscibile) e <b>noumeno</b> o cosa in sé (pensabile ma non conoscibile).</li>
<li><b>Morale</b>: buona volontà, imperativo categorico (universalità, umanità come fine, autonomia); postulati: libertà, immortalità, Dio.</li>
<li><b>Giudizio</b>: bello, sublime, finalità. <i>Sapere aude</i>; <i>Per la pace perpetua</i> (1795).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: morale e giudizio",
      questions: [
        { type: "mc", q: "Qual è la differenza tra imperativo ipotetico e categorico?", options: ["L'ipotetico vale solo se si vuole il fine; il categorico comanda senza condizioni", "Il categorico riguarda il piacere", "Non c'è differenza"], answer: 0, explain: "Il categorico è la forma della legge morale." },
        { type: "tf", q: "Per Kant un'azione è morale solo se compiuta per dovere, non soltanto conformemente al dovere.", answer: true, explain: "È il valore della buona volontà." },
        { type: "mc", q: "Che cosa è il giudizio estetico per Kant?", options: ["Disinteressato e universale pur senza concetti", "Una questione di gusto personale", "Una dimostrazione scientifica"], answer: 0, explain: "Il bello piace universalmente, senza concetto e senza interesse." }
      ]
    }
  ],
  glossary: [
    { t: "A priori", d: "Indipendente dall'esperienza; universale e necessario." },
    { t: "Giudizio sintetico a priori", d: "Giudizio che amplia la conoscenza ed è universale e necessario; fonda matematica e fisica." },
    { t: "Fenomeno", d: "La cosa come appare a noi, secondo le forme della sensibilità e dell'intelletto." },
    { t: "Noumeno (cosa in sé)", d: "La realtà indipendente da noi: pensabile, ma non conoscibile." },
    { t: "Categorie", d: "I dodici concetti puri dell'intelletto, come sostanza e causa." },
    { t: "Trascendentale", d: "Che riguarda le condizioni a priori della conoscenza." },
    { t: "Antinomia", d: "Contraddizione tra due tesi opposte entrambe dimostrabili dalla ragione." },
    { t: "Imperativo categorico", d: "Comando morale incondizionato: agisci secondo una massima universalizzabile." },
    { t: "Autonomia", d: "Capacità della volontà di darsi da sé la legge morale." },
    { t: "Postulati della ragion pratica", d: "Libertà, immortalità dell'anima, esistenza di Dio, presupposti della morale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In che anno uscì la prima edizione della Critica della ragion pura?", options: ["1781", "1788", "1790"], answer: 0, explain: "1781; seconda edizione 1787." },
      { type: "mc", q: "Che cosa intende Kant con «rivoluzione copernicana»?", options: ["Gli oggetti si regolano sulla nostra conoscenza, non viceversa", "Il Sole è al centro", "La Terra è piatta"], answer: 0, explain: "Il soggetto struttura l'esperienza." },
      { type: "mc", q: "Quali sono i giudizi su cui si fonda la scienza?", options: ["Sintetici a priori", "Analitici a posteriori", "Tautologici"], answer: 0, explain: "Estendono la conoscenza e sono necessari." },
      { type: "text", q: "Come si chiama la realtà indipendente da noi, inconoscibile secondo Kant?", answer: ["cosa in sé", "noumeno", "la cosa in sé"], explain: "Cosa in sé o noumeno." },
      { type: "tf", q: "Per Kant le categorie derivano dall'abitudine, come sostiene Hume.", answer: false, explain: "Sono concetti a priori dell'intelletto." },
      { type: "mc", q: "Perché per Kant la metafisica come scienza è impossibile?", options: ["La ragione, oltre l'esperienza, cade in illusioni e antinomie", "Perché Dio non esiste", "Perché la scienza è sbagliata"], answer: 0, explain: "Non c'è intuizione sensibile per anima, mondo e Dio." },
      { type: "mc", q: "Quale di queste è una formula dell'imperativo categorico?", options: ["Tratta l'umanità sempre anche come fine e mai solo come mezzo", "Cerca il massimo piacere", "Obbedisci all'autorità"], answer: 0, explain: "Seconda formula, dell'umanità come fine." },
      { type: "tf", q: "Per Kant una azione compiuta solo per paura delle sanzioni ha pieno valore morale.", answer: false, explain: "Ha valore morale solo l'azione fatta per dovere." },
      { type: "mc", q: "Quale motto riassume l'illuminismo secondo Kant?", options: ["Sapere aude", "Cogito ergo sum", "Esse est percipi"], answer: 0, explain: "«Abbi il coraggio di servirti della tua propria intelligenza»." },
      { type: "order", q: "Metti in ordine le tre Critiche.", items: ["Critica della ragion pura", "Critica della ragion pratica", "Critica del giudizio"], explain: "1781, 1788, 1790." }
    ]
  }
});
