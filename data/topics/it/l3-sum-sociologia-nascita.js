TOPIC('it', {
  id: "l3-sum-sociologia-nascita",
  title: "La nascita della sociologia",
  intro: "Perché le persone si comportano in modi simili pur non avendolo deciso insieme? Perché i tassi di suicidio, di matrimoni o di criminalità cambiano da Paese a Paese ma restano stabili negli anni? La <b>sociologia</b> nasce nell'Ottocento per rispondere a domande così, in un'Europa sconvolta dalla <b>Rivoluzione francese</b> e dalla <b>Rivoluzione industriale</b>. In questa lezione incontri <b>Auguste Comte</b> (il «padre» del nome e del positivismo), <b>Émile Durkheim</b> (il fondatore del metodo sociologico, con il <b>fatto sociale</b> e lo studio sul suicidio) e le altre voci dei classici (Marx, Weber, Simmel, Tönnies) per capire che cosa significa studiare la società in modo scientifico.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Perché la sociologia nasce nell'Ottocento",
      html: `<p>Per millenni filosofi e storici hanno riflettuto sulla società (pensa a Platone, Aristotele, Machiavelli, Hobbes, Montesquieu, Rousseau). Ma l'idea di una <b>scienza della società</b>, con un proprio metodo e un proprio oggetto, nasce tra Settecento e Ottocento, quando gli eventi rendono il cambiamento evidente e preoccupante.</p>
<ul>
<li>La <b>Rivoluzione francese</b> (1789) abbatte l'Antico Regime, mostra che l'ordine sociale <b>non è eterno</b> e può essere rovesciato.</li>
<li>La <b>Rivoluzione industriale</b> (dalla seconda metà del Settecento, in Inghilterra) trasforma il lavoro: fabbriche, operai, orari rigidi, nuove classi sociali.</li>
<li>L'<b>urbanizzazione</b>: milioni di persone lasciano le campagne per le città, tra sovraffollamento, miseria e nuove forme di solitudine.</li>
<li>Il successo delle <b>scienze naturali</b> (Newton, Darwin) suggerisce di applicare il metodo scientifico anche ai fatti umani.</li>
</ul>
<p>Il nuovo ordine solleva problemi concreti: che cosa tiene unita una società quando non c'è più la tradizione? Come si garantisce la coesione tra individui ormai liberi? Come si affrontano le disuguaglianze? La sociologia nasce come tentativo di capire (e talvolta di correggere) i problemi della società moderna con gli strumenti dell'osservazione e dei dati.</p>`
    },
    {
      type: "widget",
      title: "Linea del tempo dei fondatori",
      widget: "timeline",
      options: {
        unit: "anno",
        events: [
          { year: 1789, label: "Rivoluzione francese", icon: "🇫🇷" },
          { year: 1830, label: "Comte inizia il Corso di filosofia positiva", icon: "📘" },
          { year: 1848, label: "Manifesto del partito comunista (Marx ed Engels)", icon: "✊" },
          { year: 1887, label: "Tönnies, Comunità e società", icon: "🏘️" },
          { year: 1893, label: "Durkheim, La divisione del lavoro sociale", icon: "⚙️" },
          { year: 1895, label: "Le regole del metodo sociologico", icon: "📏" },
          { year: 1897, label: "Il suicidio", icon: "📊" },
          { year: 1905, label: "Weber, L'etica protestante", icon: "⛪" },
          { year: 1912, label: "Durkheim, Le forme elementari della vita religiosa", icon: "🔥" }
        ]
      },
      caption: "Le date delle opere principali: ricordale come tappe, non come elenco da imparare a memoria."
    },
    {
      type: "text",
      title: "2. Auguste Comte e il positivismo",
      html: `<p><b>Auguste Comte</b> (Montpellier 1798 - Parigi 1857) è il francese che coniò il termine <b>«sociologia»</b> (dal latino <i>socius</i>, «compagno», e dal greco <i>lógos</i>), usato in forma matura nel quarto volume del <i>Corso di filosofia positiva</i> (1830-1842), dopo avere inizialmente parlato di «fisica sociale». Collaborò da giovane con Saint-Simon, pensatore dell'industrializzazione.</p>
<p>La sua filosofia è il <b>positivismo</b>: la conoscenza vera è quella <b>positiva</b>, cioè fondata sull'osservazione dei fatti e sulla ricerca delle leggi che li collegano, senza ricorrere a spiegazioni soprannaturali o astratte. Il metodo delle scienze naturali va esteso alla società.</p>
<p>Comte formulò la <b>legge dei tre stadi</b>: ogni scienza e ogni società passano attraverso tre fasi nel modo di spiegare il mondo.</p>
<ol>
<li><b>Stadio teologico</b>: i fenomeni sono attribuiti a volontà divine o soprannaturali (società militari, monarchie assolute).</li>
<li><b>Stadio metafisico</b>: si invocano entità astratte come «natura» o «diritti» (età moderna fino alla Rivoluzione).</li>
<li><b>Stadio positivo</b>: si rinuncia a chiedersi «perché ultimo» e si cercano le <b>leggi dei fenomeni</b> osservabili (società industriale scientifica).</li>
</ol>
<p>Comte classificò le scienze in ordine di complessità crescente: matematica, astronomia, fisica, chimica, biologia e, al vertice, la <b>sociologia</b>, la «regina» delle scienze. Divise la sociologia in <b>statica sociale</b> (che cosa tiene unita una società in un dato momento: ordine) e <b>dinamica sociale</b> (come cambia nel tempo: progresso). Il suo motto: «Ordine e progresso» (lo ritrovi sulla bandiera del Brasile).</p>
<p>Oggi molte idee di Comte sembrano ingenue (la fiducia illimitata nella scienza, la pretesa di una «religione dell'umanità»), ma la sua intuizione resta: la società può essere studiata con metodo, osservando regolarità.</p>`
    },
    {
      type: "svg",
      title: "La legge dei tre stadi di Comte",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="110" width="170" height="110" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<rect x="215" y="110" width="170" height="110" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<rect x="410" y="110" width="170" height="110" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="105" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">1. Teologico</text>
<text x="105" y="168" font-size="14" text-anchor="middle" fill="#0f172a">gli dei spiegano</text>
<text x="105" y="190" font-size="14" text-anchor="middle" fill="#0f172a">i fenomeni</text>
<text x="300" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2. Metafisico</text>
<text x="300" y="168" font-size="14" text-anchor="middle" fill="#0f172a">entità astratte</text>
<text x="300" y="190" font-size="14" text-anchor="middle" fill="#0f172a">(natura, diritti)</text>
<text x="495" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">3. Positivo</text>
<text x="495" y="168" font-size="14" text-anchor="middle" fill="#0f172a">osservazione e</text>
<text x="495" y="190" font-size="14" text-anchor="middle" fill="#0f172a">leggi scientifiche</text>
<line x1="190" y1="165" x2="212" y2="165" stroke="#0f172a" stroke-width="3"/>
<polygon points="215,165 205,158 205,172" fill="#0f172a"/>
<line x1="385" y1="165" x2="407" y2="165" stroke="#0f172a" stroke-width="3"/>
<polygon points="410,165 400,158 400,172" fill="#0f172a"/>
<text x="300" y="50" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Il pensiero umano evolve in tre stadi</text>
<text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Esempio: la pioggia = ira degli dei, poi «forza della natura», poi cicli meteorologici</text>
</svg>`,
      caption: "Per Comte, ogni scienza attraversa i tre stadi. La sociologia, l'ultima nata, sarebbe la prima a entrare davvero nello stadio positivo."
    },
    {
      type: "quiz",
      title: "Controllo rapido (1)",
      questions: [
        { type: "mc", q: "Chi coniò il termine «sociologia»?", options: ["Auguste Comte", "Émile Durkheim", "Max Weber", "Karl Marx"], answer: 0, explain: "Comte usò il termine nel Corso di filosofia positiva (1830-1842)." },
        { type: "mc", q: "Qual è il terzo stadio della legge di Comte?", options: ["Positivo", "Teologico", "Metafisico", "Romantico"], answer: 0, explain: "Teologico, metafisico, positivo: nell'ultimo si cercano le leggi dei fenomeni osservabili." },
        { type: "tf", q: "Per Comte la statica sociale studia come una società cambia nel tempo.", answer: false, explain: "Studia l'ordine; il cambiamento è oggetto della dinamica sociale." }
      ]
    },
    {
      type: "text",
      title: "3. Émile Durkheim: la sociologia come scienza autonoma",
      html: `<p><b>Émile Durkheim</b> (Épinal 1858 - Parigi 1917), di famiglia ebraica con tradizione rabbinica, fu il primo a insegnare sociologia come disciplina universitaria in Francia: nel 1887 a Bordeaux, poi alla <b>Sorbona</b> di Parigi (dal 1902). Nel 1896 fondò la rivista <i>L'Année sociologique</i>, attorno a cui si formò una vera «scuola». Il suo obiettivo: dare alla sociologia un <b>oggetto proprio</b> e un <b>metodo rigoroso</b>, in modo che non fosse né psicologia né filosofia della storia.</p>
<p>Nelle <i>Regole del metodo sociologico</i> (1895) definisce l'oggetto: il <b>fatto sociale</b>. Sono «modi di agire, di pensare e di sentire, esterni all'individuo, e dotati di un potere di coercizione in virtù del quale si impongono a lui». Ha tre caratteristiche:</p>
<ul>
<li><b>Esteriorità</b>: esiste prima di noi e fuori di noi (la lingua, la moneta, le leggi, le regole di buona educazione c'erano prima che nascessimo).</li>
<li><b>Coercizione</b>: ci spinge a conformarci, con sanzioni formali (multe, bocciature) o informali (derisione, isolamento). La coercizione si nota se proviamo a trasgredire: parlare una lingua inventata, vestirsi in modo assolutamente fuori moda.</li>
<li><b>Generalità</b>: è diffuso in tutto il gruppo, non è il capriccio di un individuo.</li>
</ul>
<p>La regola fondamentale è: <b>«trattare i fatti sociali come cose»</b>. Non significa che le persone siano oggetti, ma che i fatti sociali si devono studiare dall'esterno, con <b>osservazione oggettiva</b>, mettendo da parte i pregiudizi, e cercando <b>cause sociali</b> (e non psicologiche individuali) per spiegare altri fatti sociali.</p>`
    },
    {
      type: "example",
      title: "Il fatto sociale nella vita quotidiana",
      html: `<p>Entri in un'aula all'inizio della lezione e ti siedi in silenzio. Nessuno te l'ha imposto con la forza; eppure se ti mettessi a cantare o a camminare sui banchi, subito ti guarderebbero storto, ti richiamerebbero, forse ti punirebbero. Ecco un <b>fatto sociale</b>: esiste «fuori di te», si impone, vale per tutti. Lo stesso accade con l'ora in cui si pranza, con il modo di salutare, con il fatto che per pagare si usa il denaro.</p>
<p>Un altro esempio: il numero di matrimoni di un Paese in un anno. Ogni coppia decide liberamente, ma la somma mostra <b>regolarità</b> (si sposano più persone in certe età, in certi mesi). La sociologia studia queste regolarità, non le scelte private di ciascuno.</p>`
    },
    {
      type: "text",
      title: "4. Solidarietà meccanica e organica",
      html: `<p>Nella tesi di dottorato <i>La divisione del lavoro sociale</i> (1893) Durkheim si chiede: che cosa tiene unita una società? La risposta è la <b>solidarietà</b>, di due tipi.</p>
<ul>
<li><b>Solidarietà meccanica</b>: tipica delle società tradizionali, piccole e poco differenziate. Le persone fanno cose simili, credono nelle stesse cose, condividono una forte <b>coscienza collettiva</b>. Chi si discosta è punito severamente (diritto repressivo).</li>
<li><b>Solidarietà organica</b>: tipica delle società moderne, in cui il lavoro è <b>diviso</b> in compiti specializzati (medico, ingegnere, panettiere, insegnante). Le persone sono diverse, ma <b>dipendono l'una dall'altra</b> come gli organi di un corpo. Il diritto diventa più cooperativo e restitutivo (riparare un danno, rispettare i contratti).</li>
</ul>
<p>La divisione del lavoro, per Durkheim, non è solo un fatto economico ma <b>morale</b>: crea legami di interdipendenza. Ma può generare problemi se le regole non seguono i cambiamenti rapidi, producendo <b>anomia</b>, cioè assenza o crisi di norme, condizione in cui l'individuo non sa più che cosa è giusto o possibile aspettarsi. Il concetto ci porta all'opera più famosa.</p>`
    },
    {
      type: "text",
      title: "5. Il suicidio: una prova di metodo",
      html: `<p>Il suicidio sembra l'atto più individuale che esista. Nel <i>Suicidio</i> (1897) Durkheim dimostra che <b>anche il suicidio ha cause sociali</b>. Raccolse dati statistici ufficiali di vari Paesi europei e notò che il <b>tasso di suicidi</b> (casi ogni 100.000 abitanti) è <b>stabile</b> in uno stesso gruppo e <b>diverso</b> tra gruppi: per esempio era più alto tra i protestanti che tra i cattolici, tra i celibi che tra gli sposati, tra chi non aveva figli, e aumentava nei periodi di crisi economica ma anche di rapida prosperità. Se le cause fossero solo psicologiche e individuali, non ci sarebbero queste regolarità.</p>
<p>Durkheim distinse <b>quattro tipi di suicidio</b>, a seconda del rapporto tra individuo e società (due dimensioni: integrazione e regolazione).</p>
<ul>
<li><b>Egoistico</b>: troppo poca <b>integrazione</b>; l'individuo, isolato, non ha legami che gli diano senso (più frequente tra chi vive solo).</li>
<li><b>Altruistico</b>: troppa integrazione; l'individuo si sacrifica per il gruppo (per esempio in certi contesti militari o rituali).</li>
<li><b>Anomico</b>: troppo poca <b>regolazione</b>; crisi o rapidi mutamenti (crack economici, ma anche improvvise ricchezze) fanno perdere i punti di riferimento.</li>
<li><b>Fatalistico</b>: troppa regolazione; un'oppressione così forte da togliere ogni speranza (Durkheim lo cita solo in nota, come caso raro).</li>
</ul>
<p>L'opera è importante per il <b>metodo</b>: usa dati quantitativi, propone ipotesi e le controlla. Va detto anche che oggi i suoi risultati sono discussi: i dati ufficiali dell'Ottocento erano imperfetti e il rischio di confondere correlazione e causa è sempre presente. Resta però un modello di come si può spiegare un fatto sociale con <b>cause sociali</b>.</p>`
    },
    {
      type: "svg",
      title: "I quattro tipi di suicidio secondo Durkheim",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="300" y1="30" x2="300" y2="280" stroke="#334155" stroke-width="2"/>
<line x1="40" y1="155" x2="580" y2="155" stroke="#334155" stroke-width="2"/>
<text x="170" y="22" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">POCA</text>
<text x="440" y="22" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">TROPPA</text>
<rect x="55" y="45" width="230" height="95" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="170" y="70" font-size="14" text-anchor="middle" fill="#0f172a">integrazione</text><text x="170" y="92" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Egoistico</text>
<text x="170" y="116" font-size="14" text-anchor="middle" fill="#0f172a">isolamento, solitudine</text>
<rect x="315" y="45" width="250" height="95" rx="10" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="440" y="70" font-size="14" text-anchor="middle" fill="#0f172a">integrazione</text><text x="440" y="92" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Altruistico</text>
<text x="440" y="116" font-size="14" text-anchor="middle" fill="#0f172a">sacrificio per il gruppo</text>
<rect x="55" y="170" width="230" height="95" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="170" y="195" font-size="14" text-anchor="middle" fill="#0f172a">regolazione</text><text x="170" y="217" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Anomico</text>
<text x="170" y="241" font-size="14" text-anchor="middle" fill="#0f172a">poche regole, crisi</text>
<rect x="315" y="170" width="250" height="95" rx="10" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="440" y="195" font-size="14" text-anchor="middle" fill="#0f172a">regolazione</text><text x="440" y="217" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">Fatalistico</text>
<text x="440" y="241" font-size="14" text-anchor="middle" fill="#0f172a">troppe regole, oppressione</text>
</svg>`,
      caption: "Riga alta: livello di integrazione (legami). Riga bassa: livello di regolazione (norme). Il suicidio nasce da uno squilibrio per difetto o per eccesso."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Durkheim studiò anche la religione?",
      html: `<p>Nel 1912 pubblicò <i>Le forme elementari della vita religiosa</i>, in cui analizza il <b>totemismo</b> di alcune popolazioni aborigene dell'Australia, che considerava la forma più semplice di religione. La sua tesi: quando un gruppo adora un totem, in realtà adora <b>sé stesso</b>, cioè la forza della società che trascende i singoli. Il rito rafforza i legami e produce una «effervescenza collettiva». Per Durkheim la religione è un fatto sociale: <i>«la società è l'anima della religione»</i>. È un esempio di come una sola teoria (il primato del sociale) possa spiegare fenomeni diversi.</p>`
    },
    {
      type: "text",
      title: "6. Gli altri «classici»: Marx, Weber, Simmel, Tönnies",
      html: `<p>La sociologia non nasce da una sola fonte. Accanto a Comte e Durkheim ci sono altri grandi autori, che incontrerai negli anni successivi.</p>
<ul>
<li><b>Karl Marx</b> (1818-1883). Per lui la società è divisa in <b>classi</b> (borghesia e proletariato) con interessi opposti, e la storia si muove attraverso il conflitto di classe. Le condizioni materiali (l'economia) condizionano le idee e le istituzioni. Opere: <i>Manifesto del partito comunista</i> (1848, con Engels), <i>Il Capitale</i> (1867). Fonda l'approccio del <b>conflitto</b>.</li>
<li><b>Max Weber</b> (1864-1920), tedesco. Per lui la sociologia è la scienza che vuole <b>comprendere</b> (<i>verstehen</i>) l'<b>azione sociale</b>, cioè le azioni a cui gli individui attribuiscono un significato e che sono orientate agli altri. Ne distinse quattro tipi: razionale rispetto allo scopo, razionale rispetto al valore, affettiva, tradizionale. In <i>L'etica protestante e lo spirito del capitalismo</i> (1904-05) sostenne che l'etica calvinista (lavoro, risparmio, vocazione) favorì lo sviluppo del capitalismo. Altri temi: burocrazia, forme di potere (tradizionale, carismatico, legale).</li>
<li><b>Georg Simmel</b> (1858-1918): studia le <b>forme dell'interazione</b> (il conflitto, lo straniero, il denaro, la vita nella metropoli).</li>
<li><b>Ferdinand Tönnies</b> (1855-1936): in <i>Comunità e società</i> (1887) contrappone la <b>comunità</b> (<i>Gemeinschaft</i>, legami affettivi, famiglia, villaggio) alla <b>società</b> (<i>Gesellschaft</i>, rapporti impersonali, contratti, città).</li>
</ul>
<p>Weber propone di <b>comprendere</b> dall'interno, Durkheim di <b>spiegare</b> dall'esterno; Marx guarda il <b>conflitto</b>. Sono tre sguardi diversi sulla stessa realtà, non tre errori.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il fatto sociale",
      intro: "Il concetto di Durkheim è più semplice di quanto sembri.",
      tabs: [
        { label: "🚦 Il semaforo", html: `<p>Nessun semaforo ti obbliga con la forza fisica a fermarti. Eppure quasi tutti si fermano. La regola esiste prima di te, è fuori da te, vale per tutti, e se la violi rischi sanzioni (una multa, un incidente, gli sguardi dei passanti). Il semaforo è un <b>fatto sociale</b> perfetto: esteriorità, coercizione, generalità.</p>` },
        { label: "🎻 L'orchestra", html: `<p>Una società con solidarietà organica funziona come un'orchestra: ogni strumento fa una cosa diversa (e nessuno potrebbe suonare tutta la sinfonia da solo), ma l'insieme produce un'unica musica. In una società a solidarietà meccanica, invece, sono tutti a cantare la stessa nota all'unisono.</p>` },
        { label: "🧪 Il laboratorio sociale", html: `<p>Il fisico non «ascolta l'opinione» del pendolo: lo misura. Durkheim propone lo stesso atteggiamento per i fenomeni sociali: raccogliere dati (i tassi di suicidio), cercare regolarità, formulare ipotesi. Non cerca di «scusare» o «condannare», ma di <b>spiegare</b>.</p>` }
      ]
    },
    {
      type: "decision",
      title: "Come spiegheresti il suicidio?",
      html: `<p>Sei nella Parigi del 1890. I giornali raccontano ogni giorno suicidi e dicono: «sono atti di persone malate, pazze o disperate». Hai a disposizione le statistiche ufficiali di tutta l'Europa, che mostrano tassi di suicidio molto diversi da Paese a Paese ma molto stabili da un anno all'altro.</p>`,
      question: "Quale spiegazione ti sembra più convincente?",
      options: [
        { label: "Sono solo fatti individuali: ognuno ha i suoi problemi psicologici", outcome: "Non spiega perché i tassi restino simili per anni all'interno di uno stesso gruppo e cambino tra gruppi diversi." },
        { label: "Dipendono anche da fattori sociali (isolamento, crisi di norme, integrazione)", outcome: "È la tesi di Durkheim: le regolarità statistiche indicano cause collettive che agiscono sulle persone." },
        { label: "Dipendono solo dal clima e dalla razza", outcome: "Durkheim controlla e scarta queste ipotesi: i dati non mostrano rapporti stabili con clima o ereditarietà." }
      ],
      answer: 1,
      explain: "Durkheim non nega i fattori psicologici individuali, ma sostiene che il compito della sociologia è spiegare i tassi di suicidio (fenomeni di gruppo) con cause sociali."
    },
    {
      type: "example",
      title: "Anomia: quando le regole saltano",
      html: `<p>Pensa a un Paese che attraversa un crollo improvviso (un fallimento di massa delle banche) o, all'opposto, un boom repentino in cui qualcuno si arricchisce da un giorno all'altro. In entrambi i casi le aspettative con cui le persone organizzavano la vita («con il mio stipendio posso permettermi questo») saltano. Durkheim osservò che i suicidi aumentavano sia nelle crisi sia nei boom economici: non è la povertà in sé a far male, ma la <b>perdita dei punti di riferimento</b>. Anche oggi si parla di anomia per descrivere l'incertezza di chi cambia Paese, di chi perde il lavoro, di chi vive in una trasformazione troppo veloce.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Comte e la bandiera del Brasile?",
      html: `<p>Il motto «Ordem e Progresso» sulla bandiera del Brasile deriva dalla formula di Comte («L'amore per principio, l'ordine per base, il progresso per fine»). Quando il Brasile divenne repubblica (1889), i militari repubblicani, influenzati dal positivismo, scelsero il motto per la nuova bandiera. È un caso raro in cui una teoria sociologica è finita su un simbolo nazionale.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: la nascita della sociologia",
      nodes: [
        { id: "soc", label: "Sociologia", x: 50, y: 6, color: "#3b82f6", html: "Scienza che studia la società e i fatti sociali con metodo empirico.", why: "Nasce quando i cambiamenti (rivoluzione francese, industriale, urbanizzazione) rendono evidente che l'ordine sociale non è dato una volta per tutte e va capito." },
        { id: "com", label: "Comte", x: 14, y: 40, color: "#10b981", html: "Coniò il termine; positivismo; legge dei tre stadi.", why: "Vuole portare nella società il metodo delle scienze naturali: osservare fatti e cercare leggi, per garantire ordine e progresso." },
        { id: "dur", label: "Durkheim", x: 38, y: 40, color: "#f59e0b", html: "Fatto sociale; solidarietà meccanica e organica; il suicidio.", why: "Dà alla sociologia un oggetto e un metodo propri, distinti da filosofia e psicologia, per spiegare il sociale con il sociale." },
        { id: "mar", label: "Marx", x: 62, y: 40, color: "#ef4444", html: "Classi e conflitto; condizioni materiali.", why: "Nasce dall'osservazione della Rivoluzione industriale e delle sue disuguaglianze: la società è attraversata da interessi contrapposti." },
        { id: "web", label: "Weber", x: 86, y: 40, color: "#8b5cf6", html: "Azione sociale, comprensione, potere, capitalismo.", why: "Contro il rischio di ridurre gli individui a «cose», insiste sul significato che gli attori attribuiscono alle loro azioni." },
        { id: "met", label: "Metodo scientifico", x: 30, y: 78, color: "#0ea5e9", html: "Osservazione, dati, ipotesi, controllo.", why: "Il prestigio delle scienze naturali spinge a cercare regolarità anche nei fatti umani, come i tassi di suicidio." },
        { id: "ano", label: "Anomia", x: 72, y: 78, color: "#ec4899", html: "Crisi o assenza di norme condivise.", why: "Durkheim la vede come costo della modernità: i cambiamenti troppo rapidi sfaldano le regole che orientano i comportamenti." }
      ],
      edges: [["soc", "com", "nome e positivismo"], ["soc", "dur", "metodo"], ["soc", "mar", "conflitto"], ["soc", "web", "comprensione"], ["dur", "ano", "descrive"], ["com", "met", "propone"]]
    },
    {
      type: "quiz",
      title: "Controllo rapido (2)",
      questions: [
        { type: "mc", q: "Quali sono le tre caratteristiche del fatto sociale secondo Durkheim?", options: ["Esteriorità, coercizione, generalità", "Libertà, scelta, singolarità", "Passato, presente, futuro", "Produzione, scambio, consumo"], answer: 0, explain: "Il fatto sociale è esterno all'individuo, lo costringe e vale per tutto il gruppo." },
        { type: "mc", q: "In quale tipo di suicidio l'individuo è troppo poco integrato nella società?", options: ["Egoistico", "Altruistico", "Fatalistico", "Anomico"], answer: 0, explain: "Altruistico: troppa integrazione; anomico: poca regolazione; fatalistico: troppa regolazione." },
        { type: "tf", q: "La solidarietà organica è tipica di società con forte divisione del lavoro.", answer: true, explain: "In esse le persone sono diverse ma interdipendenti, come organi del corpo." }
      ]
    }
  ],
  glossary: [
    { t: "Sociologia", d: "Scienza che studia la società, i gruppi, le istituzioni e i fatti sociali." },
    { t: "Positivismo", d: "Filosofia che considera valida solo la conoscenza fondata sull'osservazione dei fatti e sulle leggi scientifiche." },
    { t: "Legge dei tre stadi", d: "Teoria di Comte: stadio teologico, metafisico e positivo." },
    { t: "Fatto sociale", d: "Modo di agire, pensare e sentire esterno all'individuo, dotato di potere di coercizione (Durkheim)." },
    { t: "Coscienza collettiva", d: "Insieme di credenze e sentimenti comuni ai membri di una società." },
    { t: "Solidarietà meccanica", d: "Coesione basata sulla somiglianza tra gli individui (società tradizionali)." },
    { t: "Solidarietà organica", d: "Coesione basata sull'interdipendenza dei ruoli specializzati (società moderne)." },
    { t: "Anomia", d: "Condizione di assenza o crisi di norme che orientino il comportamento." },
    { t: "Azione sociale", d: "In Weber, azione a cui l'individuo attribuisce un significato e che è orientata agli altri." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale evento NON è tra quelli che favorirono la nascita della sociologia?", options: ["La scoperta dell'America", "La Rivoluzione francese", "La Rivoluzione industriale", "L'urbanizzazione"], answer: 0, explain: "La sociologia nasce nell'Ottocento in risposta ai grandi cambiamenti sociali di età moderna." },
      { type: "mc", q: "Come si chiama la filosofia di Comte che fonda la conoscenza sull'osservazione dei fatti?", options: ["Positivismo", "Idealismo", "Esistenzialismo", "Empirismo critico"], answer: 0, explain: "Il termine viene da «positivo», cioè basato sui fatti osservabili." },
      { type: "order", q: "Metti in ordine gli stadi della legge di Comte", items: ["Teologico", "Metafisico", "Positivo"], explain: "Il pensiero passa da spiegazioni divine a concetti astratti e infine a leggi scientifiche." },
      { type: "text", q: "Come si chiama l'oggetto di studio della sociologia secondo Durkheim?", answer: ["fatto sociale", "il fatto sociale", "fatti sociali"], explain: "Modi di agire, pensare e sentire esterni all'individuo e coercitivi." },
      { type: "tf", q: "Per Durkheim i fatti sociali vanno trattati «come cose», cioè osservati in modo oggettivo.", answer: true, explain: "Significa studiarli dall'esterno, evitando i pregiudizi." },
      { type: "mc", q: "Che cosa è la solidarietà organica?", options: ["Coesione basata sulla divisione del lavoro e sull'interdipendenza", "Coesione basata sulla somiglianza tra individui", "L'assenza di regole", "La solidarietà tra familiari"], answer: 0, explain: "È tipica delle società moderne con ruoli specializzati." },
      { type: "mc", q: "Perché Durkheim studiò i tassi di suicidio?", options: ["Per mostrare che anche un atto apparentemente individuale ha cause sociali", "Per condannare i suicidi", "Perché era uno psichiatra", "Per verificare le teorie di Comte"], answer: 0, explain: "La stabilità dei tassi in un gruppo indica fattori collettivi." },
      { type: "mc", q: "Che cos'è l'anomia?", options: ["Crisi o assenza di norme condivise", "Una malattia mentale", "Un tipo di legge", "Una forma di governo"], answer: 0, explain: "Si verifica nei periodi di rapidi cambiamenti e fa perdere i punti di riferimento." },
      { type: "mc", q: "Chi considerava la sociologia come scienza che vuole «comprendere» il significato dell'azione sociale?", options: ["Max Weber", "Auguste Comte", "Émile Durkheim", "Karl Marx"], answer: 0, explain: "Il concetto di Verstehen è centrale nella sua sociologia comprendente." },
      { type: "tf", q: "Per Marx le società sono attraversate da conflitti di classe.", answer: true, explain: "Borghesia e proletariato hanno interessi opposti e il conflitto muove la storia." }
    ]
  }
});
