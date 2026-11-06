TOPIC('it', {
  id: "m3-ita-letteratura-ottocento",
  title: "Letteratura dell'Ottocento",
  intro: "L'Ottocento è il secolo in cui nasce l'Italia unita, e la letteratura accompagna questo cammino. Conosceremo quattro grandi autori: <b>Ugo Foscolo</b>, <b>Giacomo Leopardi</b>, <b>Alessandro Manzoni</b> e <b>Giovanni Verga</b>, e tre movimenti: <b>Neoclassicismo</b>, <b>Romanticismo</b> e <b>Verismo</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Il contesto: un secolo di rivoluzioni",
      html: `<p>L'Ottocento si apre con <b>Napoleone</b>, che domina l'Europa e anche l'Italia fino al 1815. Dopo il <b>Congresso di Vienna</b> (1814–1815) tornano i vecchi sovrani, ma le idee di libertà e di nazione non si spengono: arrivano i <b>moti</b> del 1820–21, del 1831 e del 1848, le guerre d'indipendenza e infine l'<b>Unità d'Italia (1861)</b> e Roma capitale (1871).</p>
<p>Intanto l'Europa cambia con la <b>rivoluzione industriale</b>, le ferrovie, la crescita delle città e la nascita della "questione sociale". La letteratura riflette tutto questo:</p>
<ul>
<li><b>Neoclassicismo</b> (fine Settecento – inizio Ottocento): ammirazione per la bellezza armoniosa dell'arte greca e romana.</li>
<li><b>Romanticismo</b> (dal 1816 circa in Italia): sentimento, storia, popolo, patria, fede.</li>
<li><b>Verismo</b> (dal 1878 circa): rappresentare la realtà, soprattutto quella degli umili, in modo oggettivo.</li>
</ul>`
    },
    {
      type: "widget",
      title: "La linea del tempo degli autori e delle opere",
      widget: "timeline",
      options: { unit: "anni", events: [
        { year: 1802, label: "Foscolo: Ultime lettere di Jacopo Ortis", icon: "✉️" },
        { year: 1807, label: "Foscolo: Dei Sepolcri", icon: "🪦" },
        { year: 1819, label: "Leopardi: L'infinito", icon: "🌄" },
        { year: 1821, label: "Manzoni: Il cinque maggio", icon: "🦅" },
        { year: 1827, label: "Manzoni: I promessi sposi (1ª ed.)", icon: "📖" },
        { year: 1831, label: "Leopardi: Canti (1ª ed.)", icon: "🎶" },
        { year: 1840, label: "Manzoni: edizione definitiva dei Promessi sposi", icon: "🖋️" },
        { year: 1861, label: "Unità d'Italia", icon: "🇮🇹" },
        { year: 1881, label: "Verga: I Malavoglia", icon: "⛵" },
        { year: 1889, label: "Verga: Mastro-don Gesualdo", icon: "🏚️" }
      ] },
      caption: "Tocca gli eventi: in meno di novant'anni la letteratura italiana passa dai sonetti neoclassici al romanzo verista."
    },
    {
      type: "text",
      title: "Ugo Foscolo (1778–1827): la bellezza contro il nulla",
      html: `<p>Nato a <b>Zante</b>, isola greca allora veneziana, da padre veneziano e madre greca, Foscolo visse da esule e morì a Londra. Fu soldato nell'esercito napoleonico, ma rimase deluso quando Napoleone cedette Venezia all'Austria con il <b>trattato di Campoformio (1797)</b>.</p>
<ul>
<li><b><i>Ultime lettere di Jacopo Ortis</i></b> (1802): romanzo epistolare. Jacopo, giovane patriota deluso in politica e in amore, si toglie la vita. È il primo romanzo moderno italiano.</li>
<li><b>Sonetti</b>: <i>Alla sera</i>, <i>A Zacinto</i>, <i>In morte del fratello Giovanni</i>.</li>
<li><b><i>Dei Sepolcri</i></b> (1807): carme in endecasillabi sciolti. Le tombe dei grandi non servono ai morti ma ai <b>vivi</b>: mantengono la memoria e ispirano grandi azioni.</li>
</ul>
<p>Temi chiave: la <b>morte</b> come "nulla eterno", l'<b>esilio</b>, la <b>patria</b>, e le "illusioni" (bellezza, poesia, amore, gloria) che danno senso alla vita.</p>`
    },
    {
      type: "text",
      title: "Giacomo Leopardi (1798–1837): il poeta dell'infinito",
      html: `<p>Nato a <b>Recanati</b> (nelle Marche, allora nello Stato Pontificio), passò l'adolescenza nella grande biblioteca del padre Monaldo: sette anni di "<i>studio matto e disperatissimo</i>" in cui imparò da solo latino, greco ed ebraico. Morì a <b>Napoli</b> nel 1837.</p>
<ul>
<li><b><i>Canti</i></b>: raccolta delle sue poesie, tra cui <i>L'infinito</i> (1819), <i>A Silvia</i> (1828), <i>Il sabato del villaggio</i> (1829), <i>La ginestra</i> (1836).</li>
<li><b><i>Operette morali</i></b> (1827): dialoghi in prosa, ironici e filosofici (es. <i>Dialogo della Natura e di un Islandese</i>).</li>
<li><b><i>Zibaldone</i></b>: un enorme diario di pensieri, oltre 4500 pagine.</li>
</ul>
<p>Il suo pensiero si chiama <b>pessimismo</b>: l'uomo desidera una felicità infinita, ma la realtà non può dargliela. All'inizio ne dà la colpa alla storia e alla civiltà (pessimismo <b>storico</b>), poi alla <b>Natura</b> stessa, "matrigna" indifferente (pessimismo <b>cosmico</b>). Nella <i>Ginestra</i> propone però una risposta: la <b>solidarietà</b> tra gli uomini.</p>`
    },
    {
      type: "svg",
      title: "L'infinito: la siepe e lo sguardo",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e3a8a"/><stop offset="1" stop-color="#93c5fd"/></linearGradient></defs>
<rect width="640" height="300" fill="url(#cielo)"/>
<path d="M0 200 Q160 150 320 190 T640 180 L640 300 L0 300 Z" fill="#65a30d"/>
<path d="M0 230 Q200 210 400 235 T640 225 L640 300 L0 300 Z" fill="#3f6212"/>
<g fill="#166534">
<circle cx="230" cy="215" r="28"/><circle cx="270" cy="205" r="30"/><circle cx="310" cy="212" r="28"/><circle cx="350" cy="205" r="30"/><circle cx="390" cy="215" r="28"/>
</g>
<circle cx="110" cy="250" r="12" fill="#fde68a"/>
<rect x="104" y="262" width="12" height="28" fill="#1f2937"/>
<path d="M118 255 L230 200" stroke="#fde68a" stroke-width="3" stroke-dasharray="6 6"/>
<text x="300" y="60" font-size="20" fill="#fff" font-style="italic" text-anchor="middle">"Sempre caro mi fu quest'ermo colle,</text>
<text x="300" y="88" font-size="20" fill="#fff" font-style="italic" text-anchor="middle">e questa siepe, che da tanta parte</text>
<text x="300" y="116" font-size="20" fill="#fff" font-style="italic" text-anchor="middle">dell'ultimo orizzonte il guardo esclude."</text>
<text x="310" y="270" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">la siepe nasconde l'orizzonte → l'immaginazione crea l'infinito</text>
<text x="560" y="40" font-size="30">✨</text>
</svg>`,
      caption: "Proprio perché la siepe impedisce di vedere, il poeta immagina \"interminati spazi\" e \"sovrumani silenzi\"."
    },
    {
      type: "text",
      title: "Alessandro Manzoni (1785–1873): la storia degli umili",
      html: `<p>Milanese, nipote dell'illuminista Cesare Beccaria, Manzoni si convertì al cattolicesimo nel 1810. Fu la voce più importante del <b>Romanticismo italiano</b>.</p>
<ul>
<li><b>Odi civili</b>: <i>Marzo 1821</i> e <i>Il cinque maggio</i> (1821), scritta di getto alla notizia della morte di Napoleone.</li>
<li><b>Tragedie</b>: <i>Il conte di Carmagnola</i> e <i>Adelchi</i>.</li>
<li><b><i>I promessi sposi</i></b>: il primo grande romanzo storico italiano, ambientato in Lombardia tra il 1628 e il 1630, sotto la dominazione spagnola. Protagonisti sono due giovani <b>umili</b>, Renzo e Lucia, ostacolati dal prepotente don Rodrigo.</li>
</ul>
<p>Il romanzo ebbe tre redazioni: <i>Fermo e Lucia</i> (1821–23), la "Ventisettana" (1827) e la "Quarantana" (1840–42), riscritta dopo che Manzoni andò a Firenze a "<b>risciacquare i panni in Arno</b>", cioè a usare il fiorentino colto parlato come modello di <b>lingua comune</b> per tutti gli italiani.</p>
<p>Le idee chiave: il <b>vero storico</b> come base del racconto, l'attenzione agli <b>umili</b>, la <b>Provvidenza</b> divina che agisce nella storia.</p>`
    },
    {
      type: "text",
      title: "Giovanni Verga (1840–1922) e il Verismo",
      html: `<p>Catanese, Verga iniziò con romanzi sentimentali ambientati a Firenze e Milano. Poi, influenzato dal <b>Naturalismo</b> francese di Émile Zola, scelse di raccontare la Sicilia dei pescatori, dei contadini, dei minatori.</p>
<ul>
<li><b><i>Rosso Malpelo</i></b> (1878): la novella di un ragazzo che lavora in una cava di sabbia, maltrattato da tutti per i capelli rossi.</li>
<li><b><i>Vita dei campi</i></b> (1880) e <b><i>Novelle rusticane</i></b> (1883): raccolte di novelle.</li>
<li><b><i>I Malavoglia</i></b> (1881): la famiglia di pescatori Toscano di Aci Trezza perde la barca, la <i>Provvidenza</i>, e un carico di lupini, e la sua vita va in rovina.</li>
<li><b><i>Mastro-don Gesualdo</i></b> (1889): un muratore diventato ricco, ma solo e infelice.</li>
</ul>
<p>Il Verismo usa la tecnica dell'<b>impersonalità</b>: l'autore "si eclissa", non commenta, e lascia parlare i personaggi con il loro modo di pensare (<b>regressione</b> e <b>discorso indiretto libero</b>). Per Verga chi prova a cambiare la propria condizione viene travolto: è l'"<b>ideale dell'ostrica</b>" e il "<b>ciclo dei vinti</b>".</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: autori e opere",
      questions: [
        { type: "mc", q: "Chi ha scritto \"Dei Sepolcri\"?", options: ["Leopardi", "Foscolo", "Manzoni"], answer: 1, explain: "Ugo Foscolo, nel 1807." },
        { type: "mc", q: "In quale città nacque Leopardi?", options: ["Recanati", "Milano", "Catania"], answer: 0, explain: "Recanati, nelle Marche, nel 1798." },
        { type: "tf", q: "I Malavoglia è un romanzo verista.", answer: true, explain: "Scritto da Verga nel 1881, è il capolavoro del Verismo." }
      ]
    },
    {
      type: "widget",
      title: "Abbina l'autore all'opera",
      widget: "match",
      options: { pairs: [
        ["Foscolo", "Ultime lettere di Jacopo Ortis"],
        ["Leopardi", "Operette morali"],
        ["Manzoni", "Il cinque maggio"],
        ["Verga", "Rosso Malpelo"],
        ["Leopardi", "A Silvia"],
        ["Manzoni", "Adelchi"]
      ] },
      caption: "Ripassa le opere principali di ogni autore."
    },
    {
      type: "example",
      title: "Esempio: leggere un testo e riconoscere il movimento",
      html: `<p>Leggi questi due inizi:</p>
<ol>
<li><i>"Quel ramo del lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti…"</i> → descrizione precisa di un luogo reale, inizio di un romanzo storico con personaggi umili: <b>Manzoni, Romanticismo</b>.</li>
<li><i>"Malpelo si chiamava così perché aveva i capelli rossi; ed aveva i capelli rossi perché era un ragazzo malizioso e cattivo…"</i> → il narratore ragiona come la gente del paese, con un pregiudizio: è la <b>regressione</b> tipica del <b>Verismo</b> di Verga.</li>
</ol>
<p>Indizi utili: lingua aulica e miti classici → Neoclassicismo/Foscolo; sentimento, storia, patria, fede → Romanticismo; dialoghi popolari, proverbi, narratore che "scompare" → Verismo.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: perché i Sepolcri parlano anche a noi",
      html: `<p>Nel 1804 Napoleone emanò l'<b>editto di Saint-Cloud</b>, esteso all'Italia nel 1806: i cimiteri dovevano stare fuori dalle città e le tombe dovevano essere uguali, con iscrizioni controllate. Da una discussione su questa legge nacque il carme di Foscolo.</p>
<p>Oggi ritroviamo la stessa idea quando visitiamo la Basilica di <b>Santa Croce a Firenze</b> (dove riposano Michelangelo, Galileo, Machiavelli, Alfieri – e dal 1871 anche Foscolo stesso) o un monumento ai caduti: le tombe e i memoriali "parlano" ai vivi e tengono viva la memoria collettiva. Pensa alle <b>pietre d'inciampo</b> davanti alle case dei deportati: sono un modo moderno di fare memoria.</p>`
    },
    {
      type: "3d",
      title: "I luoghi degli autori sul globo",
      scene: "globe",
      options: {
        points: [
          { lat: 37.78, lon: 20.9, label: "Zante (Foscolo)", color: "#2563eb" },
          { lat: 51.49, lon: -0.26, label: "Londra (morte di Foscolo)", color: "#2563eb" },
          { lat: 43.4, lon: 13.55, label: "Recanati (Leopardi)", color: "#16a34a" },
          { lat: 40.85, lon: 14.27, label: "Napoli (morte di Leopardi)", color: "#16a34a" },
          { lat: 45.46, lon: 9.19, label: "Milano (Manzoni)", color: "#dc2626" },
          { lat: 43.77, lon: 11.25, label: "Firenze (\"risciacquare i panni in Arno\")", color: "#dc2626" },
          { lat: 37.5, lon: 15.09, label: "Catania (Verga)", color: "#a855f7" },
          { lat: 37.56, lon: 15.16, label: "Aci Trezza (I Malavoglia)", color: "#a855f7" }
        ],
        routes: [ { points: [0, 1], color: "#2563eb" }, { points: [2, 3], color: "#16a34a" } ]
      },
      caption: "Ruota il globo: le vite di Foscolo e Leopardi furono anche viaggi, tra esilio e ricerca."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Leopardi e i gelati",
      html: `<p>Negli ultimi anni a Napoli, Leopardi era un grande goloso: amava i <b>gelati</b> e i dolci, e frequentava i caffè della città. Per molto tempo l'immagine del "poeta triste e malato" ha nascosto un uomo curioso, ironico e pieno di interessi, dalla filosofia all'astronomia: da ragazzo scrisse perfino una <i>Storia dell'astronomia</i>, a soli 15 anni!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Verdi e Manzoni",
      html: `<p>Giuseppe Verdi ammirava così tanto Manzoni che, quando lo scrittore morì (22 maggio 1873), compose in suo onore la <b>Messa da Requiem</b>, eseguita per la prima volta un anno dopo, il 22 maggio 1874, nella chiesa di San Marco a Milano. E il famoso inizio "<i>Quel ramo del lago di Como</i>" è uno dei più citati della letteratura italiana.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<table>
<tr><th>Autore</th><th>Movimento</th><th>Opera chiave</th><th>Idea chiave</th></tr>
<tr><td>Foscolo</td><td>Neoclassicismo / preromanticismo</td><td>Dei Sepolcri</td><td>Illusioni e memoria contro il nulla</td></tr>
<tr><td>Leopardi</td><td>Romanticismo (posizione personale)</td><td>Canti</td><td>Pessimismo, infinito, solidarietà</td></tr>
<tr><td>Manzoni</td><td>Romanticismo</td><td>I promessi sposi</td><td>Vero storico, umili, Provvidenza</td></tr>
<tr><td>Verga</td><td>Verismo</td><td>I Malavoglia</td><td>Impersonalità, ciclo dei vinti</td></tr>
</table>`
    },
    {
      type: "alternatives",
      title: "Altri modi per conoscere questi autori",
      intro: "La letteratura non è solo date e titoli. Ecco altre strade per entrare nel mondo degli scrittori dell'Ottocento.",
      tabs: [
        {
          label: "📱 Se avessero un profilo social",
          html: `<p>Immagina i quattro autori con un profilo online:</p>
<ul>
<li><b>Foscolo</b> 🏛️ – <i>"Esule. Poeta. Ex soldato. Amo la Grecia e odio i tiranni."</i> Pubblica foto di tombe e statue antiche.</li>
<li><b>Leopardi</b> 🌙 – <i>"Studio tutto. Guardo le stelle. Domande scomode sulla felicità."</i> Posta lunghi pensieri di notte (lo <i>Zibaldone</i>!).</li>
<li><b>Manzoni</b> 📖 – <i>"Romanziere storico. Correggo i testi all'infinito. Lingua comune per tutti."</i> Il suo libro ha tre versioni.</li>
<li><b>Verga</b> ⛵ – <i>"Racconto la vita vera dei pescatori e dei contadini. Niente filtri."</i> Le sue storie finiscono spesso male.</li>
</ul>`
        },
        {
          label: "🇫🇷🇬🇧 Gli autori stranieri dello stesso periodo",
          html: `<p>Collegare gli italiani agli stranieri aiuta a capire che i movimenti erano <b>europei</b>:</p>
<ul>
<li>Lo <i>Jacopo Ortis</i> di Foscolo si ispira al <b><i>Werther</i></b> del tedesco <b>Goethe</b> (1774).</li>
<li>Manzoni ammirava i romanzi storici dello scozzese <b>Walter Scott</b>, come <i>Ivanhoe</i> (1819).</li>
<li>Leopardi è spesso accostato ai romantici inglesi come <b>Byron</b>, <b>Shelley</b> e <b>Keats</b>, suoi contemporanei.</li>
<li>Il Verismo di Verga nasce dal <b>Naturalismo</b> francese di <b>Émile Zola</b> e dei fratelli Goncourt; Verga ammirava anche Flaubert.</li>
</ul>`
        },
        {
          label: "🃏 Flashcard: incipit famosi",
          html: `<p>Riconosci l'autore dall'inizio del testo! Gira le carte.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "\"Né più mai toccherò le sacre sponde…\"", back: "Foscolo, A Zacinto" },
            { front: "\"Sempre caro mi fu quest'ermo colle…\"", back: "Leopardi, L'infinito" },
            { front: "\"Silvia, rimembri ancora…\"", back: "Leopardi, A Silvia" },
            { front: "\"Ei fu. Siccome immobile…\"", back: "Manzoni, Il cinque maggio" },
            { front: "\"Quel ramo del lago di Como…\"", back: "Manzoni, I promessi sposi" },
            { front: "\"Malpelo si chiamava così perché aveva i capelli rossi…\"", back: "Verga, Rosso Malpelo" }
          ] }
        },
        {
          label: "🗂️ Classifica i temi",
          html: `<p>A quale movimento appartiene ciascun tema o tecnica?</p>`,
          widget: "classify",
          options: { groups: ["Neoclassicismo", "Romanticismo", "Verismo"], items: [
            ["Bellezza armoniosa dei classici", 0],
            ["Miti greci e romani", 0],
            ["Sentimento e patria", 1],
            ["Romanzo storico", 1],
            ["Impersonalità del narratore", 2],
            ["Vita dei pescatori e dei contadini", 2],
            ["Valore della fede e della storia", 1],
            ["Influenza di Zola", 2]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'Ottocento letterario",
      nodes: [
        { id: "storia", label: "Napoleone → Unità d'Italia", x: 50, y: 6, color: "#64748b", html: "Il contesto storico: dominio napoleonico, Restaurazione, Risorgimento, Unità (1861).", why: "Le rivoluzioni politiche e industriali cambiano il pubblico dei lettori e i temi: la patria, la libertà, il popolo, la società moderna." },
        { id: "neoclassicismo", label: "Neoclassicismo", x: 15, y: 28, color: "#0ea5e9", html: "Ritorno alla bellezza ideale dell'arte greca e romana.", why: "Nasce dagli scavi di Ercolano (1738) e Pompei (1748) e dagli scritti dello studioso tedesco Johann J. Winckelmann, che parlava di \"nobile semplicità e quieta grandezza\"." },
        { id: "romanticismo", label: "Romanticismo", x: 50, y: 28, color: "#dc2626", html: "Sentimento, individuo, storia, popolo, nazione.", why: "Nato in Germania e Inghilterra a fine Settecento, arriva in Italia con la polemica del 1816, quando Madame de Staël invitò gli italiani a tradurre gli autori stranieri." },
        { id: "verismo", label: "Verismo", x: 85, y: 28, color: "#a855f7", html: "Rappresentazione oggettiva della realtà, soprattutto degli umili.", why: "Deriva dal Naturalismo francese di Zola e dal Positivismo, la filosofia che voleva studiare la società con il metodo delle scienze. In Italia lo teorizzò Luigi Capuana." },
        { id: "foscolo", label: "Foscolo", x: 15, y: 58, color: "#2563eb", html: "Ortis, sonetti, Dei Sepolcri. Illusioni, esilio, memoria.", why: "Unisce forme classiche (endecasillabi, miti) e passioni romantiche: per questo è detto poeta di passaggio tra Neoclassicismo e Romanticismo." },
        { id: "leopardi", label: "Leopardi", x: 38, y: 62, color: "#16a34a", html: "Canti, Operette morali, Zibaldone. Pessimismo e infinito.", why: "Il suo pensiero nasce dagli studi filologici e filosofici (illuministi francesi, classici greci) e dalla riflessione sulla propria sofferenza fisica: ne ricava una visione lucida della condizione umana." },
        { id: "manzoni", label: "Manzoni", x: 62, y: 62, color: "#b91c1c", html: "I promessi sposi, odi, tragedie. Vero storico e Provvidenza.", why: "Unisce la formazione illuminista (il nonno Beccaria) e la fede cattolica ritrovata nel 1810: la storia vera è il terreno in cui si vede l'azione di Dio e la dignità degli umili." },
        { id: "verga", label: "Verga", x: 85, y: 58, color: "#7c3aed", html: "Rosso Malpelo, I Malavoglia, Mastro-don Gesualdo.", why: "Dopo il successo dei romanzi mondani, nel 1878 'scopre' la Sicilia degli umili: applica il metodo di Zola alla realtà meridionale dopo l'Unità, segnata da povertà ed emigrazione." },
        { id: "lingua", label: "La lingua italiana comune", x: 50, y: 90, color: "#eab308", html: "Il problema di una lingua per tutti gli italiani.", why: "Nel 1861 solo una piccola minoranza parlava italiano (le stime vanno dal 2,5% al 10%). Manzoni propose il fiorentino colto; Verga mescolò italiano e modi di dire siciliani." }
      ],
      edges: [
        ["storia", "neoclassicismo", "età napoleonica"],
        ["storia", "romanticismo", "Risorgimento"],
        ["storia", "verismo", "dopo l'Unità"],
        ["neoclassicismo", "foscolo", "forme classiche"],
        ["romanticismo", "leopardi", "in modo personale"],
        ["romanticismo", "manzoni", "capofila italiano"],
        ["verismo", "verga", "maestro"],
        ["manzoni", "lingua", "risciacqua in Arno"],
        ["verga", "lingua", "lingua parlata"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: idee e tecniche",
      questions: [
        { type: "mc", q: "Il \"pessimismo cosmico\" di Leopardi attribuisce l'infelicità…", options: ["alla società moderna", "alla Natura", "agli dei greci"], answer: 1, explain: "Nella fase cosmica Leopardi vede la Natura come \"matrigna\", indifferente all'uomo." },
        { type: "mc", q: "Che cosa significa \"risciacquare i panni in Arno\"?", options: ["Fare un viaggio di piacere", "Usare il fiorentino colto come modello di lingua", "Scrivere in dialetto milanese"], answer: 1, explain: "Manzoni rivide il romanzo sul fiorentino parlato colto per offrire una lingua comune." },
        { type: "tf", q: "Nell'impersonalità verista il narratore commenta spesso le vicende.", answer: false, explain: "Al contrario: l'autore \"si eclissa\" e lascia parlare i fatti e i personaggi." }
      ]
    }
  ],
  glossary: [
    { t: "Neoclassicismo", d: "Movimento che imita la bellezza ideale dell'arte greco-romana." },
    { t: "Romanticismo", d: "Movimento che valorizza sentimento, storia, popolo e nazione." },
    { t: "Verismo", d: "Movimento italiano che rappresenta la realtà in modo oggettivo, soprattutto quella degli umili." },
    { t: "Romanzo epistolare", d: "Romanzo scritto in forma di lettere (es. Jacopo Ortis)." },
    { t: "Carme", d: "Componimento poetico solenne, come Dei Sepolcri." },
    { t: "Pessimismo storico / cosmico", d: "Le due fasi del pensiero di Leopardi sull'infelicità umana." },
    { t: "Provvidenza", d: "Secondo Manzoni, l'intervento di Dio nella storia degli uomini." },
    { t: "Impersonalità", d: "Tecnica verista in cui l'autore non interviene con commenti." },
    { t: "Regressione", d: "Il narratore adotta il punto di vista e il linguaggio dei personaggi." },
    { t: "Ciclo dei vinti", d: "Progetto di Verga di romanzi su chi viene travolto dal desiderio di migliorare." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dove nacque Ugo Foscolo?", options: ["Venezia", "Zante", "Londra"], answer: 1, explain: "A Zante (Zacinto), isola greca allora veneziana." },
      { type: "mc", q: "Quale opera NON è di Leopardi?", options: ["L'infinito", "Il sabato del villaggio", "Il cinque maggio"], answer: 2, explain: "Il cinque maggio è di Manzoni, sulla morte di Napoleone." },
      { type: "num", q: "In che anno uscì la prima edizione dei Promessi sposi (la \"Ventisettana\")?", answer: 1827, explain: "Nel 1827; l'edizione definitiva uscì nel 1840–42." },
      { type: "mc", q: "In quale periodo è ambientato il romanzo I promessi sposi?", options: ["1628–1630", "1815–1820", "1492–1500"], answer: 0, explain: "Nella Lombardia spagnola, durante la carestia e la peste del 1630." },
      { type: "text", q: "Come si chiama la barca della famiglia Toscano nei Malavoglia?", answer: ["provvidenza", "la provvidenza"], explain: "La Provvidenza: un nome ironico, perché porterà alla rovina." },
      { type: "tf", q: "Secondo Foscolo nei Sepolcri, le tombe sono utili soprattutto ai vivi.", answer: true, explain: "Conservano la memoria e ispirano grandi azioni." },
      { type: "mc", q: "Da quale movimento francese deriva il Verismo?", options: ["Simbolismo", "Naturalismo", "Illuminismo"], answer: 1, explain: "Dal Naturalismo di Émile Zola." },
      { type: "order", q: "Metti in ordine cronologico queste opere.", items: ["Ultime lettere di Jacopo Ortis", "L'infinito", "I promessi sposi (1ª ed.)", "I Malavoglia"], explain: "1802, 1819, 1827, 1881." },
      { type: "mc", q: "Nella \"Ginestra\" Leopardi propone come risposta al dolore…", options: ["la fuga dalla società", "la solidarietà tra gli uomini", "la fede nella Provvidenza"], answer: 1, explain: "Gli uomini devono unirsi contro la Natura ostile." },
      { type: "tf", q: "Manzoni e Verga raccontano entrambi personaggi umili.", answer: true, explain: "Sì, ma con visioni diverse: in Manzoni c'è la Provvidenza, in Verga un destino senza riscatto." },
      { type: "text", q: "Come si chiama il ragazzo dai capelli rossi protagonista di una novella di Verga?", answer: ["rosso malpelo", "malpelo"], explain: "Rosso Malpelo, nella raccolta Vita dei campi (1880)." }
    ]
  }
});
