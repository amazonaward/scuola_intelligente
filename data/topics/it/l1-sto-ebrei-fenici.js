TOPIC('it', {
  id: "l1-sto-ebrei-fenici",
  title: "Ebrei, Fenici e popoli del Mediterraneo",
  intro: "Intorno al <b>1200 a.C.</b> il Vicino Oriente attraversa una grande crisi: imperi che crollano, città distrutte, migrazioni di «Popoli del mare». Dalle rovine emergono popoli più piccoli ma destinati a lasciare un'eredità enorme. Gli <b>Ebrei</b> sviluppano l'idea di un <b>solo Dio</b> e un patrimonio di leggi e racconti che sta alla base di ebraismo, cristianesimo e islam. I <b>Fenici</b>, abili navigatori e commercianti, fondano colonie in tutto il Mediterraneo e diffondono l'<b>alfabeto</b> da cui derivano quelli che usiamo oggi. In questa lezione li incontriamo, insieme ai loro vicini.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Il Vicino Oriente dopo il 1200 a.C.",
      html: `<p>Verso il <b>1200 a.C.</b> molte civiltà dell'età del bronzo crollarono quasi insieme: gli Ittiti scomparvero, le città micenee e Ugarit furono distrutte, l'Egitto fu indebolito. Gli Egizi parlano di <b>Popoli del mare</b>, gruppi misteriosi che attaccavano dal mare. Le cause sono ancora discusse: siccità, terremoti, migrazioni, rotture dei commerci del bronzo, rivolte interne.</p>
<p>Nel vuoto di potere nascono o si rafforzano <b>piccoli regni</b> nella striscia di terra tra il Mediterraneo e il deserto siro-arabico, la regione di <b>Canaan</b> (oggi Libano, Israele, Palestina):</p>
<ul>
<li>i <b>Fenici</b> sulla costa (Libano);</li>
<li>gli <b>Ebrei</b> (o Israeliti) nelle colline interne;</li>
<li>i <b>Filistei</b> sulla costa meridionale (da cui «Palestina»);</li>
<li>gli <b>Aramei</b> in Siria, la cui lingua diventerà lingua franca del Vicino Oriente.</li>
</ul>
<p>Più a ovest, intorno al VII sec. a.C. nel regno di <b>Lidia</b> (Anatolia) appare un'altra invenzione fondamentale: la <b>moneta</b> coniata (re Creso).</p>`
    },
    {
      type: "3d",
      title: "Mappa 3D: Fenici ed Ebrei nel Mediterraneo",
      scene: "spacetime",
      caption: "La base è il Mediterraneo, l'altezza è il tempo (1200-500 a.C.). Tocca gli eventi: le frecce collegano cause ed effetti.",
      options: {
        lat: [29, 42],
        lon: [-8, 40],
        years: [-1250, -500],
        places: [
          { lat: 33.27, lon: 35.2, label: "Tiro" },
          { lat: 31.78, lon: 35.22, label: "Gerusalemme" },
          { lat: 36.85, lon: 10.32, label: "Cartagine" },
          { lat: 36.53, lon: -6.29, label: "Cadice" }
        ],
        events: [
          { id: "mare", lat: 33.5, lon: 36.0, year: -1200, label: "Crisi e Popoli del mare", html: "Intorno al 1200 a.C. crollano molti regni dell'età del bronzo: spazio per nuovi popoli e città-stato.", causes: [] },
          { id: "fenici", lat: 34.1, lon: 35.65, year: -1100, label: "Le città fenicie", html: "Biblo, Sidone e Tiro diventano potenze commerciali. Mettono a punto un <b>alfabeto di 22 segni</b> (soltanto consonanti).", causes: ["mare"] },
          { id: "davide", lat: 31.78, lon: 35.22, year: -1000, label: "Davide e Gerusalemme", html: "Re Davide unifica le tribù d'Israele e fa di Gerusalemme la capitale (circa 1000 a.C.). Suo figlio Salomone costruisce il Tempio (circa 960 a.C.).", causes: ["mare"] },
          { id: "cadice", lat: 36.53, lon: -6.29, year: -1000, label: "Gadir (Cadice)", html: "Tra le più antiche colonie fenicie dell'Occidente (tradizionalmente circa 1100 a.C.): cercano argento e stagno della Spagna.", causes: ["fenici"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -814, label: "Fondazione di Cartagine", html: "Secondo la tradizione nel 814 a.C. la principessa Elissa-Didone di Tiro fonda Cartagine («città nuova») in Africa, che diventerà la più grande potenza del Mediterraneo occidentale.", causes: ["fenici"] },
          { id: "scisma", lat: 32.2, lon: 35.2, year: -930, label: "Il regno si divide", html: "Alla morte di Salomone (circa 930 a.C.) il regno si spacca: Israele a nord (capitale Samaria) e Giuda a sud (Gerusalemme).", causes: ["davide"] },
          { id: "assiri", lat: 32.2, lon: 35.2, year: -722, label: "Gli Assiri distruggono Israele", html: "Nel 722 a.C. gli Assiri conquistano Samaria e deportano gran parte della popolazione: le «dieci tribù perdute».", causes: ["scisma"] },
          { id: "babilonia", lat: 31.78, lon: 35.22, year: -586, label: "Distruzione del Tempio", html: "Nel 586 a.C. Nabucodonosor II conquista Gerusalemme, distrugge il Tempio e deporta l'élite a Babilonia: è l'<b>esilio babilonese</b>. Gli Ebrei fissano per iscritto molti testi sacri.", causes: ["assiri"] },
          { id: "ciro", lat: 31.78, lon: 35.22, year: -539, label: "Ritorno da Babilonia", html: "Nel 539 a.C. Ciro il Grande, re dei Persiani, conquista Babilonia e permette agli esuli di tornare. Il Secondo Tempio sarà inaugurato intorno al 516 a.C.", causes: ["babilonia"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Gli Ebrei: una storia, una fede",
      html: `<p>Le nostre fonti principali sono i testi sacri raccolti nella <b>Bibbia ebraica</b> (<i>Tanakh</i>), che gli storici leggono come fonte religiosa e storica da incrociare con l'archeologia.</p>
<ul>
<li><b>I patriarchi</b>: secondo la tradizione, <b>Abramo</b> lascia Ur in Mesopotamia per Canaan con la promessa di Dio: una terra e una discendenza. Seguono Isacco e Giacobbe (Israele).</li>
<li><b>L'Esodo</b>: gli Ebrei, secondo il racconto biblico, vivono schiavi in Egitto e sono guidati da <b>Mosè</b> verso Canaan (tradizionalmente nel XIII sec. a.C.). Sul <b>Sinai</b> ricevono la Legge (i <b>Dieci comandamenti</b>) e stringono un'<b>Alleanza</b> con Dio. La Pasqua ebraica (<i>Pesach</i>) ricorda questa liberazione.</li>
<li><b>Giudici e re</b>: dopo l'insediamento in Canaan le dodici tribù sono guidate da capi carismatici (i giudici). Per difendersi dai Filistei scelgono un re: <b>Saul</b>, poi <b>Davide</b> (circa 1000 a.C.), che conquista <b>Gerusalemme</b>, e <b>Salomone</b>, costruttore del Tempio.</li>
<li><b>Divisione</b> (circa 930 a.C.): <b>Israele</b> al nord e <b>Giuda</b> al sud. Gli Assiri distruggono Israele (722 a.C.), Babilonia distrugge Giuda (586 a.C.).</li>
<li><b>Ritorno</b> con la tolleranza persiana (539 a.C.): ricostruzione del Tempio e definizione della <b>Torah</b> come legge. Il popolo di Giuda prende il nome di <b>Giudei</b> (da cui «ebrei» nel senso moderno).</li>
</ul>
<p>Attenzione: per gli storici molti dettagli (Esodo, patriarchi, dimensioni del regno di Davide) restano discussi, perché mancano prove archeologiche dirette.</p>`
    },
    {
      type: "text",
      title: "3. La grande novità: un solo Dio",
      html: `<p>Quasi tutti i popoli antichi erano <b>politeisti</b>: molti dèi, spesso legati a una città, a un fenomeno naturale, a un mestiere. Gli Ebrei sviluppano gradualmente il <b>monoteismo</b>: un solo Dio, <b>Yahweh</b>, creatore di tutto, invisibile (non va rappresentato in immagini), giusto e legato al suo popolo da un'<b>alleanza</b>.</p>
<ul>
<li>Dio non è la natura: è <b>sopra</b> la natura e la storia. La storia ha un senso e una direzione (liberazione, giustizia, attesa del Messia).</li>
<li>La <b>Legge</b> riguarda tutta la vita: culto, giustizia, famiglia, cibo, rapporti con lo straniero e con il povero.</li>
<li>I <b>profeti</b> (Isaia, Geremia, Ezechiele...) non predicono il futuro come indovini, ma richiamano il popolo e i re alla giustizia sociale e alla fedeltà.</li>
<li>I libri sacri (<b>Torah</b>, Profeti, Scritti) vengono fissati per iscritto soprattutto dopo l'esilio e diventano l'identità comune del popolo anche senza Stato e senza Tempio.</li>
</ul>
<p>Dal <b>giudaismo</b> deriveranno il <b>cristianesimo</b> (I sec. d.C.) e l'<b>islam</b> (VII sec. d.C.): le tre grandi religioni monoteiste.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: gli Ebrei",
      questions: [
        { type: "mc", q: "Chi guidò gli Ebrei fuori dall'Egitto secondo la tradizione?", options: ["Mosè", "Davide", "Abramo"], answer: 0, explain: "Mosè, che sul Sinai ricevette la Legge." },
        { type: "mc", q: "Quale re fece di Gerusalemme la capitale?", options: ["Saul", "Davide", "Nabucodonosor"], answer: 1, explain: "Davide, intorno al 1000 a.C." },
        { type: "tf", q: "Il monoteismo ebraico prevedeva un solo Dio da non rappresentare con immagini.", answer: true, explain: "Dio è unico e invisibile." },
        { type: "mc", q: "Che cosa fu l'esilio babilonese?", options: ["La deportazione di Ebrei a Babilonia dopo il 586 a.C.", "La fuga dall'Egitto", "Un viaggio di Abramo"], answer: 0, explain: "Nabucodonosor II distrusse il Tempio e deportò l'élite." }
      ]
    },
    {
      type: "text",
      title: "4. I Fenici: mercanti del mare",
      html: `<p>I Fenici abitavano una stretta striscia di costa (oggi Libano), con alle spalle montagne coperte di <b>cedri</b> e poco spazio per i campi. Il mare era la loro via di crescita.</p>
<ul>
<li><b>Città-stato</b> indipendenti (Biblo, Sidone, Tiro, Arwad), ciascuna con un proprio re e una flotta; non formarono mai un unico regno. Tiro era la più ricca, costruita su un'isola vicino alla costa.</li>
<li><b>Navi e navigazione</b>: costruivano navi da carico e da guerra (con legno di cedro), si orientavano con le stelle, in particolare con l'Orsa Minore (la «stella dei Fenici»).</li>
<li><b>Merci</b>: legno di cedro, vetro, <b>porpora</b> (colorante ricavato dal mollusco murex, così prezioso che il «color porpora» fu simbolo di re e imperatori; il nome «Fenici» forse viene dal greco <i>phoinix</i>, «rosso porpora»), stoffe, avorio, metalli.</li>
<li><b>Commercio</b>: scambiavano prodotti tra Oriente e Occidente: dalla Spagna prendevano argento e stagno, dall'Egitto lino e oro.</li>
</ul>
<p>I Fenici non erano conquistatori: cercavano <b>mercati e approdi</b>, non territori. Il loro dominio era quello del commercio.</p>`
    },
    {
      type: "text",
      title: "5. Le colonie e Cartagine",
      html: `<p>Fra il X e il VII sec. a.C. i Fenici fondarono <b>empori</b> (scali commerciali) e colonie lungo le rotte del Mediterraneo: a Cipro, a Malta, in <b>Sicilia</b> (Mozia, Palermo/<i>Zyz</i>, Solunto), in <b>Sardegna</b> (Nora, Tharros, Sulky), in Nord Africa (<b>Utica</b>, <b>Cartagine</b>), in Spagna (<b>Gadir</b>, oggi Cadice).</p>
<p>La più importante fu <b>Cartagine</b> (nell'attuale Tunisia), fondata, secondo la tradizione, nell'<b>814 a.C.</b> dalla principessa tiria <b>Elissa (Didone)</b>. Quando Tiro fu indebolita dagli Assiri e poi da Babilonia, Cartagine diventò una potenza autonoma: aveva una flotta grandissima, un'aristocrazia di mercanti e un impero commerciale nel Mediterraneo occidentale. Divenne la grande rivale di <b>Roma</b>, che la distrusse nel 146 a.C. (lo vedremo con le guerre puniche; «punico» deriva da <i>poenus</i>, «fenicio»).</p>`
    },
    {
      type: "svg",
      title: "La scoperta dell'alfabeto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Un segno per ogni suono: l'evoluzione della lettera «A»</text>
<g stroke="#1e3a8a" stroke-width="4" fill="none">
<path d="M50 90 L80 140 L110 90 M80 140 L80 110" />
<path d="M200 150 L230 90 L260 150 M215 125 L245 125"/>
<path d="M350 150 L380 90 L410 150 M360 128 L400 128"/>
<path d="M490 150 L520 90 L550 150 M502 130 L538 130"/>
</g>
<g font-size="15" fill="#0f172a" text-anchor="middle">
<text x="80" y="185">geroglifico:</text><text x="80" y="205">testa di bue</text>
<text x="230" y="185">fenicio</text><text x="230" y="205">aleph («bue»)</text>
<text x="380" y="185">greco</text><text x="380" y="205">alpha</text>
<text x="520" y="185">latino</text><text x="520" y="205">A</text>
</g>
<g stroke="#b45309" stroke-width="3" fill="#b45309"><line x1="115" y1="115" x2="170" y2="115"/><polygon points="170,108 186,115 170,122"/>
<line x1="270" y1="115" x2="320" y2="115"/><polygon points="320,108 336,115 320,122"/>
<line x1="425" y1="115" x2="470" y2="115"/><polygon points="470,108 486,115 470,122"/></g>
<text x="300" y="265" font-size="15" text-anchor="middle" fill="#7c2d12">Schema semplificato: la forma rovesciata della lettera ricorda la testa di un bue.</text>
</svg>`,
      caption: "L'alfabeto fenicio (22 segni, solo consonanti) fu ripreso dai Greci, che aggiunsero le vocali; dal greco derivano l'alfabeto latino e cirillico."
    },
    {
      type: "text",
      title: "6. L'alfabeto: la rivoluzione dei 22 segni",
      html: `<p>I sistemi di scrittura precedenti (cuneiforme, geroglifici) avevano centinaia di segni e richiedevano anni di apprendimento: era una cosa da scribi. L'<b>alfabeto fenicio</b>, messo a punto intorno al <b>1200-1000 a.C.</b> a partire da precedenti scritture semitiche, ha soltanto <b>22 segni</b>, uno per ogni <b>consonante</b>. Imparare a leggere e scrivere diventa molto più rapido, e utile ai mercanti.</p>
<ul>
<li>Il nome delle prime lettere significa un oggetto: <i>aleph</i> = bue, <i>bet</i> = casa, <i>gimel</i> = cammello. Da qui <b>alfa, beta, gamma</b> e la parola «alfabeto».</li>
<li>I <b>Greci</b> (circa IX-VIII sec. a.C.) ripresero l'alfabeto e usarono alcuni segni per le <b>vocali</b>, rendendolo adatto alle lingue indoeuropee.</li>
<li>Dal greco derivano l'alfabeto <b>etrusco</b>, poi <b>latino</b> (il nostro) e <b>cirillico</b> (russo, bulgaro...).</li>
<li>Anche l'<b>ebraico</b> e l'<b>arabo</b> derivano da scritture semitiche vicine a quella fenicia, e si scrivono da destra a sinistra.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Tiro, circa 800 a.C.: esplorare il mare o restare in patria?",
      html: `<p>Sei un ricco mercante di Tiro. La città è sovraffollata, la terra è poca, gli Assiri chiedono tributi sempre più pesanti. Alcuni capitani raccontano che al di là del mare, nell'estremo Occidente, ci sono miniere d'argento e stagno e coste libere da imperi. Ma il viaggio dura settimane e il rischio è alto.</p>`,
      question: "Che cosa decidi?",
      options: [
        { label: "Restare a Tiro e pagare il tributo agli Assiri: non conviene rischiare.", outcome: "Si evita il rischio, ma il commercio si riduce e le tasse crescono. Con il tempo Tiro perderebbe ricchezza e importanza." },
        { label: "Fondare empori e colonie nel Mediterraneo occidentale, lontano dagli imperi.", outcome: "È la scelta dei Fenici: scali ogni pochi giorni di navigazione, alleanze con i popoli locali e sicurezza dei commerci. Alcune colonie, come Cartagine, diventeranno ricche quanto la madrepatria." },
        { label: "Armare un esercito e conquistare territori vicini per ampliare il regno.", outcome: "Una città-stato commerciale non ha le risorse per sostenere una guerra contro un impero come quello assiro: sarebbe una scommessa troppo rischiosa." }
      ],
      answer: 1,
      explain: "I Fenici scelsero di <b>espandersi per mare</b>: le colonie assicurarono materie prime e mercati. Quando Tiro cadde sotto gli imperi orientali, le colonie, e Cartagine in particolare, continuarono a prosperare."
    },
    {
      type: "example",
      title: "Esempio pratico: da dove viene la parola «biblioteca»?",
      html: `<p>La città fenicia di <b>Biblo</b> esportava papiro egiziano. I Greci chiamarono perciò <i>byblos</i> il papiro, e <i>biblíon</i> il «libro» fatto di papiro. Da qui:</p>
<ul>
<li><b>Bibbia</b> (letteralmente: «i libri»), <b>biblioteca</b> («deposito di libri»), <b>bibliografia</b>.</li>
</ul>
<p>Anche molte parole del commercio mediterraneo vengono da lingue semitiche: «magazzino» e «tariffa» (arabo), «cotone» e «zucchero» (arabo). Le parole viaggiano come le merci: seguire una parola è un modo di fare storia.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggere un testo antico con spirito critico",
      html: `<p>La Bibbia è una fonte storica sui regni di Israele e Giuda, ma non è un resoconto neutrale: è un testo religioso scritto e rielaborato nei secoli. Come lo usa lo storico?</p>
<ol>
<li><b>Chi scrive e quando?</b> I testi sono stati redatti e ritoccati a lungo, in gran parte dopo gli eventi.</li>
<li><b>Con che scopo?</b> Trasmettere un messaggio religioso: giustizia e fedeltà all'Alleanza.</li>
<li><b>Che cosa dicono altre fonti?</b> Iscrizioni assire (come quelle di Sennacherib che assedia Gerusalemme), testi babilonesi e scavi archeologici confermano alcuni eventi e ne correggono altri.</li>
</ol>
<p>Per esempio, i testi assiri confermano la distruzione di Samaria nel 722 a.C. e la deportazione dei suoi abitanti. Incrociare le fonti è il metodo centrale della storia.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il «color porpora» costava più dell'oro",
      html: `<p>Per ottenere un solo grammo di colorante di porpora servivano migliaia di molluschi murex, da cui si estraeva una ghiandola e la si lasciava macerare. Il risultato era un rosso-violaceo che non sbiadiva. Nell'antichità un tessuto di porpora poteva costare più del suo peso in argento. Per questo era riservato a re, sacerdoti e, a Roma, a senatori e imperatori: «nascere nella porpora» significava nascere nella famiglia imperiale.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il circumnavigatore dell'Africa",
      html: `<p>Lo storico greco Erodoto racconta che intorno al <b>600 a.C.</b> il faraone Necho II incaricò una spedizione di marinai fenici di circumnavigare l'Africa. Partirono dal Mar Rosso, in tre anni tornarono dalle Colonne d'Ercole e raccontarono che durante la navigazione avevano «il sole alla destra»: un dettaglio che Erodoto non credeva, ma che prova che avevano passato l'equatore verso sud. Se il viaggio avvenne davvero, precederebbe di oltre 2000 anni quello del portoghese Vasco da Gama.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire Ebrei e Fenici",
      intro: "Due popoli piccoli, due eredità enormi. Ecco alcune chiavi per ricordarli.",
      tabs: [
        {
          label: "⚓ Strumento vs idea",
          html: `<p>Un modo semplice: i Fenici hanno lasciato <b>uno strumento</b>, gli Ebrei <b>un'idea</b>.</p>
<ul>
<li><b>Fenici → l'alfabeto</b>: un modo rapido di scrivere ogni lingua; ha cambiato la comunicazione.</li>
<li><b>Ebrei → il monoteismo etico</b>: un solo Dio, una Legge che riguarda anche giustizia e povertà, un testo sacro che tiene unito un popolo anche in esilio.</li>
</ul>
<p>Due popoli senza grandi eserciti né vasti imperi hanno lasciato un segno più duraturo di molti imperi.</p>`
        },
        {
          label: "🗺️ Gira il globo",
          html: `<p>Ruota il globo: le rotte fenicie dalla costa del Libano a Cadice e a Cartagine.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 33.27, lon: 35.2, label: "Tiro", color: "#7c3aed" },
              { lat: 35.1, lon: 33.4, label: "Cipro", color: "#f97316" },
              { lat: 35.9, lon: 14.4, label: "Malta", color: "#f97316" },
              { lat: 37.9, lon: 12.5, label: "Mozia", color: "#f97316" },
              { lat: 36.85, lon: 10.32, label: "Cartagine", color: "#ef4444" },
              { lat: 36.53, lon: -6.29, label: "Gadir (Cadice)", color: "#f97316" },
              { lat: 31.78, lon: 35.22, label: "Gerusalemme", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 4, 5], color: "#7c3aed" }]
          }
        },
        {
          label: "🔤 Abbina lettera e significato",
          html: `<p>Alcune lettere fenicie avevano un nome che indicava un oggetto. Abbinale ai loro significati.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Aleph", "Bue"],
              ["Bet", "Casa"],
              ["Gimel", "Cammello"],
              ["Mem", "Acqua"],
              ["Ayin", "Occhio"]
            ]
          }
        },
        {
          label: "📅 Linea del tempo",
          html: `<p>Scorri le date principali di Ebrei e Fenici.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -1200, label: "Crisi e Popoli del mare", icon: "🌊" },
              { year: -1000, label: "Davide a Gerusalemme", icon: "👑" },
              { year: -960, label: "Tempio di Salomone", icon: "🏛️" },
              { year: -930, label: "Divisione del regno", icon: "✂️" },
              { year: -814, label: "Cartagine", icon: "⚓" },
              { year: -722, label: "Fine di Israele", icon: "⚔️" },
              { year: -586, label: "Esilio babilonese", icon: "⛓️" },
              { year: -539, label: "Ritorno con Ciro", icon: "🏠" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: popoli piccoli, eredità grandi",
      nodes: [
        { id: "crisi", label: "Crisi del 1200 a.C.", x: 50, y: 6, color: "#64748b", html: "Crollo di regni dell'età del bronzo, Popoli del mare.", why: "Il crollo dei grandi imperi lasciò spazi liberi: città costiere e popoli delle colline poterono crescere senza essere soffocati da un potere centrale." },
        { id: "fenici", label: "Fenici", x: 20, y: 32, color: "#7c3aed", html: "Città-stato mercantili sulla costa libanese.", why: "Poca terra coltivabile e molto legno: la loro risorsa era il mare. Scelsero il commercio e non la conquista." },
        { id: "ebrei", label: "Ebrei", x: 80, y: 32, color: "#2563eb", html: "Tribù, poi regni di Israele e Giuda; fede in un solo Dio.", why: "Piccolo popolo stretto tra grandi imperi (Egitto, Assiria, Babilonia): nell'esilio la religione e la Legge scritta diventarono il suo vero legame." },
        { id: "colonie", label: "Colonie e Cartagine", x: 15, y: 60, color: "#f97316", html: "Empori fenici dal Libano alla Spagna; Cartagine fondata nell'814 a.C.", why: "Cercavano metalli e mercati sicuri lontano dagli imperi orientali; le colonie formarono una rete autonoma che sopravvisse a Tiro." },
        { id: "alfabeto", label: "Alfabeto", x: 50, y: 60, color: "#16a34a", html: "22 segni consonantici.", why: "I mercanti avevano bisogno di una scrittura semplice e rapida per contratti e lettere: l'alfabeto la rese accessibile a molti, non solo agli scribi." },
        { id: "mono", label: "Monoteismo", x: 85, y: 60, color: "#0ea5e9", html: "Un solo Dio, una Legge, un'Alleanza.", why: "Dopo la distruzione del Tempio, l'idea di un Dio non legato a un luogo permise di conservare l'identità in esilio e aprì la strada a cristianesimo e islam." },
        { id: "eredita", label: "Eredità nel Mediterraneo", x: 50, y: 92, color: "#7c2d12", html: "Alfabeti greco, latino; Bibbia; commerci.", why: "Greci e Romani ereditarono sia l'alfabeto sia le rotte marittime; dal giudaismo nacquero cristianesimo e islam." }
      ],
      edges: [
        ["crisi", "fenici", "libera spazio ai"],
        ["crisi", "ebrei", "libera spazio agli"],
        ["fenici", "colonie", "fondano"],
        ["fenici", "alfabeto", "diffondono l'"],
        ["ebrei", "mono", "sviluppano il"],
        ["colonie", "eredita", "lasciano reti e città"],
        ["alfabeto", "eredita", "passa ai Greci e ai Romani"],
        ["mono", "eredita", "genera religioni"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: i Fenici",
      questions: [
        { type: "mc", q: "Quante lettere (consonanti) aveva l'alfabeto fenicio?", options: ["12", "22", "50"], answer: 1, explain: "Ventidue segni, solo consonanti." },
        { type: "tf", q: "I Fenici formarono un grande impero unito sotto un solo re.", answer: false, explain: "Erano città-stato indipendenti." },
        { type: "text", q: "Come si chiama la colonia fenicia in Africa settentrionale che divenne grande potenza?", answer: ["cartagine"], explain: "Cartagine, fondata (tradizionalmente) nel 814 a.C." },
        { type: "mc", q: "Chi aggiunse le vocali all'alfabeto fenicio?", options: ["I Greci", "I Romani", "Gli Egizi"], answer: 0, explain: "I Greci adattarono i segni alle loro vocali." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Dopo la crisi del <b>1200 a.C.</b> emergono popoli minori: Fenici, Ebrei, Filistei, Aramei.</li>
<li><b>Ebrei</b>: Abramo, Mosè (Esodo, Legge), regni di Davide e Salomone, divisione in Israele e Giuda, esilio babilonese (586 a.C.). Eredità: <b>monoteismo</b> e Torah.</li>
<li><b>Fenici</b>: città-stato (Tiro, Sidone, Biblo), commerci, porpora, colonie; <b>Cartagine</b> (814 a.C.).</li>
<li><b>Alfabeto</b> fenicio di 22 consonanti → greco (con vocali) → latino.</li>
<li>La <b>moneta</b> nasce in Lidia (VII sec. a.C.).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Popoli del mare", d: "Gruppi di invasori che, intorno al 1200 a.C., attaccarono le coste orientali del Mediterraneo." },
    { t: "Monoteismo", d: "Fede in un solo Dio." },
    { t: "Politeismo", d: "Fede in molti dèi." },
    { t: "Alleanza", d: "Patto tra Dio e il popolo ebraico, base della Legge." },
    { t: "Torah", d: "La Legge: i primi cinque libri della Bibbia ebraica." },
    { t: "Profeta", d: "Chi parla a nome di Dio richiamando il popolo alla giustizia." },
    { t: "Esilio babilonese", d: "Deportazione degli Ebrei di Giuda a Babilonia dopo il 586 a.C." },
    { t: "Emporio", d: "Scalo commerciale in terra straniera." },
    { t: "Porpora", d: "Colorante pregiato ricavato dal mollusco murex." },
    { t: "Alfabeto", d: "Sistema di scrittura in cui ogni segno indica un suono." },
    { t: "Punico", d: "Relativo ai Fenici d'Occidente e a Cartagine." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa accadde intorno al 1200 a.C. nel Mediterraneo orientale?", options: ["Crollo di molti regni dell'età del bronzo", "Nascita dell'impero romano", "Invenzione della moneta"], answer: 0, explain: "Crisi generale con i cosiddetti Popoli del mare." },
      { type: "mc", q: "Quale sovrano fece di Gerusalemme la capitale degli Ebrei?", options: ["Davide", "Salomone", "Saul"], answer: 0, explain: "Davide, intorno al 1000 a.C. (Salomone vi costruì il Tempio)." },
      { type: "tf", q: "Il regno ebraico si divise in Israele (nord) e Giuda (sud).", answer: true, explain: "Dopo la morte di Salomone, circa 930 a.C." },
      { type: "mc", q: "Che cosa fu l'esilio babilonese?", options: ["La deportazione degli Ebrei di Giuda a Babilonia", "La fuga dall'Egitto", "La conquista di Canaan"], answer: 0, explain: "Dopo la distruzione del Tempio nel 586 a.C." },
      { type: "text", q: "Come si chiama la principale città fenicia fondata su un'isola, con una grande flotta?", answer: ["tiro"], explain: "Tiro." },
      { type: "mc", q: "Perché i Fenici fondarono colonie?", options: ["Per avere scali commerciali e materie prime", "Per fondare imperi territoriali", "Per diffondere il monoteismo"], answer: 0, explain: "Cercavano mercati e metalli, non conquista." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Davide a Gerusalemme", "Fondazione di Cartagine", "Caduta di Samaria", "Distruzione del Tempio", "Ritorno degli esuli con Ciro"], explain: "1000, 814, 722, 586, 539 a.C. circa." },
      { type: "mc", q: "Qual è la principale differenza tra l'alfabeto fenicio e il cuneiforme?", options: ["Il fenicio ha pochi segni, uno per suono", "Il fenicio ha migliaia di segni", "Il fenicio usa solo disegni"], answer: 0, explain: "22 segni contro centinaia." },
      { type: "num", q: "Quanti segni aveva l'alfabeto fenicio?", answer: 22, tol: 0, explain: "Ventidue consonanti." },
      { type: "tf", q: "L'alfabeto latino deriva da quello greco, che deriva da quello fenicio.", answer: true, explain: "Fenicio → greco → etrusco/latino." },
      { type: "mc", q: "Quale tra queste NON è una religione derivata dal giudaismo?", options: ["Cristianesimo", "Islam", "Zoroastrismo"], answer: 2, explain: "Lo zoroastrismo è la religione persiana, di origine diversa." }
    ]
  }
});
