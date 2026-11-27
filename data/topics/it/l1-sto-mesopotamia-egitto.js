TOPIC('it', {
  id: "l1-sto-mesopotamia-egitto",
  title: "Mesopotamia ed Egitto",
  intro: "Due grandi fiumi, il <b>Tigri e l'Eufrate</b>, e uno ancora più celebre, il <b>Nilo</b>, hanno visto nascere le prime città, le prime leggi scritte e i primi Stati della storia. In queste «civiltà fluviali» l'acqua era vita e potere: chi la sapeva controllare comandava. In questa lezione confrontiamo due mondi molto diversi tra loro, la <b>Mesopotamia</b> delle città-stato e l'<b>Egitto</b> del faraone, e scopriamo che cosa ci hanno lasciato: la scrittura, la matematica, i codici di leggi, le piramidi.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Le civiltà fluviali: il dono (e il rischio) dell'acqua",
      html: `<p>Tra il IV e il III millennio a.C. nacquero quattro grandi civiltà lungo i fiumi: <b>Mesopotamia</b> (Tigri ed Eufrate), <b>Egitto</b> (Nilo), <b>valle dell'Indo</b> e <b>valle del Fiume Giallo</b>. Che cosa le accomuna?</p>
<ul>
<li><b>Terreni fertili</b>: i fiumi depositano limo che rende il suolo molto produttivo.</li>
<li><b>Controllo dell'acqua</b>: bisogna scavare <b>canali</b>, costruire argini e serbatoi. Servono lavoro collettivo, calendari, funzionari: nasce uno <b>Stato</b>.</li>
<li><b>Surplus</b>: raccolti abbondanti mantengono artigiani, sacerdoti, scribi e soldati.</li>
<li><b>Scrittura</b> per tenere i conti dei magazzini e le leggi.</li>
</ul>
<p>Lo storico Karl Wittfogel parlò di «società idrauliche»; oggi la definizione si discute, ma resta un'idea utile: <b>acqua → organizzazione → potere</b>.</p>
<p><b>Mesopotamia</b> significa «terra tra i due fiumi» (in greco). Il Nilo, invece, ha una piena prevedibile (da luglio a ottobre) e un deserto ai lati: l'<b>Egitto</b> è «dono del Nilo», come scrisse lo storico greco Erodoto.</p>`
    },
    {
      type: "3d",
      title: "Mappa 3D: da Uruk a Ramses",
      scene: "spacetime",
      caption: "La base è la carta del Vicino Oriente e dell'Egitto, l'altezza è il tempo (3500-1000 a.C.). Tocca gli eventi: le frecce collegano cause ed effetti.",
      options: {
        lat: [22, 38],
        lon: [28, 52],
        years: [-3500, -1000],
        places: [
          { lat: 30.05, lon: 31.25, label: "Menfi / Cairo" },
          { lat: 25.7, lon: 32.65, label: "Tebe" },
          { lat: 32.5, lon: 44.4, label: "Babilonia" },
          { lat: 36.35, lon: 43.15, label: "Ninive" },
          { lat: 30.96, lon: 46.1, label: "Ur" }
        ],
        events: [
          { id: "uruk", lat: 31.32, lon: 45.64, year: -3300, label: "Uruk: città e scrittura", html: "Nella città sumera di Uruk nasce la <b>scrittura</b>: segni su tavolette d'argilla per registrare grano, birra, greggi. È uno dei primi centri urbani della storia." },
          { id: "unif", lat: 29.85, lon: 31.25, year: -3100, label: "Unificazione dell'Egitto", html: "Intorno al 3100 a.C. (tradizione: re Menes/Narmer) l'Alto e il Basso Egitto sono uniti in un solo regno con capitale Menfi.", causes: [] },
          { id: "sargon", lat: 32.5, lon: 44.3, year: -2334, label: "Sargon di Akkad", html: "Sargon sconfigge le città sumere e crea il primo <b>impero</b> della storia, dal Golfo Persico al Mediterraneo." , causes: ["uruk"] },
          { id: "giza", lat: 29.98, lon: 31.13, year: -2560, label: "Piramide di Cheope", html: "Il faraone Cheope (Khufu) fa costruire a Giza la Grande Piramide, alta in origine circa 146 m: simbolo del potere assoluto del faraone-dio.", causes: ["unif"] },
          { id: "hammurabi", lat: 32.54, lon: 44.42, year: -1754, label: "Codice di Hammurabi", html: "Il re di Babilonia Hammurabi (1792-1750 a.C. circa) fa incidere su una stele di basalto 282 leggi: la raccolta più completa del mondo mesopotamico.", causes: ["sargon"] },
          { id: "hyksos", lat: 30.9, lon: 31.8, year: -1650, label: "Gli Hyksos in Egitto", html: "Popolazioni asiatiche dotate di carri e cavalli conquistano il Delta del Nilo; saranno cacciate intorno al 1550 a.C. dagli Egizi, che imparano a usare carri e armi di bronzo migliori.", causes: ["giza"] },
          { id: "nuovo", lat: 25.7, lon: 32.65, year: -1550, label: "Nuovo Regno", html: "Con la cacciata degli Hyksos inizia il Nuovo Regno (1550-1070 a.C.): l'Egitto diventa una potenza militare con capitale Tebe; faraoni come Thutmose III conquistano la Siria.", causes: ["hyksos"] },
          { id: "akhenaton", lat: 27.65, lon: 30.9, year: -1350, label: "Akhenaton e Aton", html: "Il faraone Amenofi IV si fa chiamare Akhenaton e impone il culto di un solo dio, il disco solare <b>Aton</b>, fondando la città di Akhetaton (Amarna). Alla sua morte si torna al politeismo.", causes: ["nuovo"] },
          { id: "qadesh", lat: 34.57, lon: 36.52, year: -1274, label: "Battaglia di Qadesh", html: "Ramses II affronta gli Ittiti a Qadesh (Siria): non c'è un vincitore netto. Nel 1259 a.C. circa i due regni firmano il <b>primo trattato di pace scritto</b> conservato.", causes: ["nuovo"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. La Mesopotamia: città-stato e imperi",
      html: `<p>Nella pianura tra Tigri ed Eufrate, povera di pietre e metalli ma ricca di argilla, si successero molti popoli.</p>
<ul>
<li><b>Sumeri</b> (dal IV millennio a.C.): vivono in <b>città-stato</b> indipendenti e spesso in guerra: Uruk, Ur, Lagash, Kish. Al centro di ogni città c'era lo <b>ziggurat</b>, torre a gradoni con un tempio in cima. Il re-sacerdote governava a nome del dio della città.</li>
<li><b>Accadi</b>: <b>Sargon</b> (circa 2334 a.C.) unifica la regione nel primo impero.</li>
<li><b>Babilonesi</b>: la città di <b>Babilonia</b> diventa potente con <b>Hammurabi</b> (1792-1750 a.C. circa). Una seconda fioritura con <b>Nabucodonosor II</b> (VI sec. a.C.).</li>
<li><b>Assiri</b>: dall'alta Mesopotamia, dal IX al VII sec. a.C. creano un impero con un esercito di ferro e di crudeltà celebre; Ninive ospitava la biblioteca di <b>Assurbanipal</b> (oltre 20.000 tavolette).</li>
</ul>
<p>Con il tempo la regione fu conquistata dai Persiani di <b>Ciro il Grande</b> (539 a.C. caduta di Babilonia).</p>`
    },
    {
      type: "text",
      title: "3. La scrittura cuneiforme e la cultura mesopotamica",
      html: `<p>La scrittura nacque per esigenze molto pratiche: <b>contare</b>. I primi segni (circa 3300 a.C.) sono pittogrammi su tavolette d'argilla: una testa di bue, una spiga, un numero. Poi i segni diventano sempre più stilizzati e si imprimono con una canna dalla punta triangolare: la scrittura <b>cuneiforme</b> (da «cuneo», forma a chiodo). Si adatta a più lingue (sumero, accadico, ittita, persiano antico).</p>
<ul>
<li>Gli <b>scribi</b> imparavano per anni nelle «case delle tavolette» (edubba): erano la burocrazia dello Stato.</li>
<li><b>Letteratura</b>: l'<b>Epopea di Gilgameš</b>, poema del re di Uruk in cerca dell'immortalità, con un racconto di <b>diluvio</b> molto simile a quello biblico.</li>
<li><b>Matematica</b>: sistema numerico a base <b>sessagesimale</b> (60). Da qui derivano i 60 minuti dell'ora e i 360 gradi del cerchio.</li>
<li><b>Astronomia</b>: osservarono con precisione il cielo, previdero le eclissi e idearono lo zodiaco.</li>
<li><b>Tecnologia</b>: la ruota (circa 3500 a.C.), l'aratro, i canali.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Dal disegno al cuneo: come cambia la scrittura",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<text x="300" y="32" font-size="18" font-weight="bold" text-anchor="middle" fill="#78350f">Dall'immagine al segno</text>
<g stroke="#78350f" stroke-width="3" fill="none">
<path d="M70 120 Q55 90 80 80 Q110 70 120 100 Q130 130 105 150 Z"/>
<path d="M200 140 L260 90 M215 100 L260 140 M190 120 L270 120"/>
<path d="M360 80 L380 140 M395 80 L415 140 M420 100 L440 100"/>
</g>
<g fill="#78350f"><polygon points="500,90 520,90 510,130"/><polygon points="530,90 550,90 540,130"/><polygon points="510,135 530,135 520,175"/></g>
<text x="95" y="190" font-size="15" text-anchor="middle" fill="#0f172a">disegno di una</text>
<text x="95" y="210" font-size="15" text-anchor="middle" fill="#0f172a">testa di bue</text>
<text x="230" y="190" font-size="15" text-anchor="middle" fill="#0f172a">segno ruotato</text>
<text x="230" y="210" font-size="15" text-anchor="middle" fill="#0f172a">e semplificato</text>
<text x="400" y="190" font-size="15" text-anchor="middle" fill="#0f172a">segni più rapidi</text>
<text x="400" y="210" font-size="15" text-anchor="middle" fill="#0f172a">sull'argilla</text>
<text x="520" y="190" font-size="15" text-anchor="middle" fill="#0f172a">cuneiforme</text>
<text x="520" y="210" font-size="15" text-anchor="middle" fill="#0f172a">con la canna</text>
<text x="300" y="262" font-size="15" text-anchor="middle" fill="#7c2d12">Schema semplificato: l'evoluzione richiese molti secoli.</text>
</svg>`,
      caption: "Il cuneiforme nasce da pittogrammi su argilla fresca, usati per tenere i conti."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Mesopotamia",
      questions: [
        { type: "mc", q: "Che cos'era lo ziggurat?", options: ["Una torre a gradoni con un tempio in cima", "Un tipo di nave", "Un codice di leggi"], answer: 0, explain: "Era il centro religioso della città sumera." },
        { type: "mc", q: "Perché l'ora ha 60 minuti?", options: ["Per l'eredità del sistema sessagesimale mesopotamico", "Per decisione di Ramses II", "Per la lunghezza del Nilo"], answer: 0, explain: "I Babilonesi contavano in base 60 e la tradizione è arrivata fino a noi." },
        { type: "tf", q: "La scrittura cuneiforme era incisa con una punta su pietra.", answer: false, explain: "Si imprimeva con una canna a punta triangolare su argilla fresca." }
      ]
    },
    {
      type: "text",
      title: "4. Il codice di Hammurabi e la giustizia scritta",
      html: `<p>Intorno al <b>1754 a.C.</b> il re di Babilonia <b>Hammurabi</b> fece incidere in una stele di basalto nera (alta più di 2 metri, oggi al museo del Louvre) <b>282 leggi</b>. In cima, il re riceve l'incarico dal dio della giustizia, <b>Shamash</b>. Non è il primo codice (prima ci fu quello di <b>Ur-Nammu</b>, circa 2100 a.C.) ma è il più completo.</p>
<ul>
<li><b>Legge del taglione</b>: «occhio per occhio, dente per dente» — la pena deve essere proporzionata all'offesa e non superiore: una forma di limitazione della vendetta privata.</li>
<li>Ma la pena <b>dipende dalla classe sociale</b>: se un nobile ferisce un altro nobile paga con la stessa ferita; se ferisce un uomo di rango inferiore paga una multa.</li>
<li>Regole su <b>commercio, prestiti, matrimonio, eredità, salari</b> e responsabilità di muratori e medici.</li>
<li>Le leggi sono <b>scritte e pubbliche</b>: il giudice non può decidere a capriccio.</li>
</ul>
<p>Per noi la novità importante è il principio di <b>certezza del diritto</b>: tutti devono conoscere la legge. Oggi ci sembrano dure e diseguali, ma al tempo erano un passo avanti rispetto alla giustizia arbitraria del più forte.</p>`
    },
    {
      type: "decision",
      title: "Babilonia, circa 1760 a.C.: la giustizia deve essere scritta?",
      html: `<p>Sei un consigliere di Hammurabi. Il regno è cresciuto e conta molte città con usi e giudici diversi. I mercanti si lamentano: la stessa lite può avere esiti opposti da città a città. I sacerdoti-giudici sostengono che la giustizia è nelle mani degli dèi e delle loro decisioni caso per caso.</p>`,
      question: "Che cosa consigli al re?",
      options: [
        { label: "Lasciare che i giudici locali decidano caso per caso, come sempre.", outcome: "Si conservano le tradizioni locali, ma la giustizia resta imprevedibile e i mercanti non si fidano: gli scambi ne soffrono." },
        { label: "Raccogliere leggi uguali per tutto il regno e farle incidere in luoghi pubblici.", outcome: "Il regno diventa più unito e prevedibile: i sudditi sanno che cosa rischiano. Il re rafforza la propria autorità, presentandosi come garante della giustizia." },
        { label: "Affidare tutto a un solo grande tribunale del re a Babilonia.", outcome: "Si centralizza la giustizia, ma i tempi diventano lunghissimi e molti sudditi non possono raggiungere la capitale." }
      ],
      answer: 1,
      explain: "Hammurabi scelse la via delle <b>leggi scritte e pubbliche</b>: la stele fu collocata in luoghi dove poteva essere letta (ma molti non sapevano leggere: i giudici e gli scribi facevano da intermediari). Era anche uno strumento di propaganda: il re giusto, voluto dagli dèi."
    },
    {
      type: "text",
      title: "5. L'Egitto: il dono del Nilo e il faraone",
      html: `<p>L'Egitto è una striscia di terra fertile (il «Paese Nero») circondata dal deserto (il «Paese Rosso»). Il Nilo scorre da sud a nord e si divide in un grande <b>delta</b>. Ogni anno in estate esonda e deposita limo; per questo gli Egizi inventarono un <b>calendario di 365 giorni</b> basato sulle piene e sulla stella Sirio.</p>
<p><b>Una storia di 3000 anni</b> divisa in:</p>
<ul>
<li><b>Periodo predinastico</b> e unificazione (circa <b>3100 a.C.</b>): Alto Egitto (sud) e Basso Egitto (nord, con il Delta) si uniscono sotto un solo re.</li>
<li><b>Antico Regno</b> (circa 2686-2181 a.C.): capitale Menfi, le grandi <b>piramidi di Giza</b> (Cheope, Chefren, Micerino).</li>
<li><b>Medio Regno</b> (circa 2055-1650 a.C.): riunificazione, capitale Tebe, arte e letteratura; poi invasione degli <b>Hyksos</b>.</li>
<li><b>Nuovo Regno</b> (circa 1550-1070 a.C.): l'epoca imperiale e dei grandi faraoni: <b>Hatshepsut</b> (una donna faraone), <b>Thutmose III</b>, <b>Amenofi IV/Akhenaton</b>, <b>Tutankhamon</b>, <b>Ramses II</b>.</li>
<li><b>Epoca tarda</b>: invasioni di Assiri, Persiani (525 a.C.), poi la conquista di <b>Alessandro Magno</b> (332 a.C.) e dei Tolomei, infine Roma (30 a.C.).</li>
</ul>
<p><b>Il faraone</b> era re e dio vivente, figlio del dio Horus e garante dell'<b>ordine cosmico</b> (Maat). Possedeva in teoria tutta la terra. Governava con l'aiuto di un <b>visir</b>, di funzionari-<b>scribi</b> e di sacerdoti.</p>`
    },
    {
      type: "svg",
      title: "La piramide sociale dell'Egitto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef9c3"/>
<polygon points="300,20 160,270 440,270" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<line x1="270" y1="80" x2="330" y2="80" stroke="#92400e" stroke-width="2"/>
<line x1="235" y1="140" x2="365" y2="140" stroke="#92400e" stroke-width="2"/>
<line x1="200" y1="200" x2="400" y2="200" stroke="#92400e" stroke-width="2"/>
<text x="300" y="68" font-size="16" font-weight="bold" text-anchor="middle" fill="#7c2d12">Faraone</text>
<text x="300" y="118" font-size="14" text-anchor="middle" fill="#0f172a">Visir, sacerdoti, nobili</text>
<text x="300" y="175" font-size="14" text-anchor="middle" fill="#0f172a">Scribi, soldati, artigiani</text>
<text x="300" y="240" font-size="14" text-anchor="middle" fill="#0f172a">Contadini (la gran maggioranza)</text>
<text x="500" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Schiavi (pochi)</text>
<text x="90" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Prigionieri</text>
</svg>`,
      caption: "La società egiziana era fortemente gerarchica; i contadini, durante la piena, lavoravano anche ai grandi cantieri dello Stato."
    },
    {
      type: "text",
      title: "6. Scrittura, religione e vita dopo la morte",
      html: `<ul>
<li><b>Geroglifici</b> («incisioni sacre»): scrittura per immagini che combina segni che indicano suoni, idee e categorie. Accanto, per la vita quotidiana, la scrittura <b>ieratica</b> e poi la <b>demotica</b>. Si scriveva su <b>papiro</b>, ricavato da una pianta del Nilo.</li>
<li>I geroglifici furono dimenticati e decifrati nel <b>1822</b> da <b>Jean-François Champollion</b> grazie alla <b>stele di Rosetta</b> (scoperta nel 1799), che riporta lo stesso testo in geroglifico, demotico e greco.</li>
<li><b>Religione politeista</b>: Ra (sole), Osiride (aldilà), Iside, Horus, Anubi. Gli dèi hanno spesso teste di animali.</li>
<li><b>Aldilà</b>: dopo la morte il defunto viene giudicato: il suo cuore è pesato contro la piuma di Maat. Per questo si praticava la <b>mummificazione</b> (conservare il corpo) e si costruivano <b>tombe</b> con tesori e il «Libro dei morti».</li>
<li><b>Scienze</b>: geometria per ritracciare i confini dopo le piene, medicina pratica (papiri medici), astronomia.</li>
</ul>
<p>Le <b>piramidi</b> sono tombe monumentali dei faraoni dell'Antico Regno, costruite da operai organizzati (non da schiavi, secondo le scoperte archeologiche presso Giza) con rampe e blocchi di pietra. Poi, per paura dei saccheggi, i faraoni del Nuovo Regno si fecero seppellire in tombe scavate nella roccia della <b>Valle dei Re</b>, vicino a Tebe.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggere un cartiglio",
      html: `<p>Il nome di un faraone si scriveva dentro un ovale allungato, il <b>cartiglio</b>. Champollion capì che i geroglifici dentro i cartigli di Tolomeo e Cleopatra, nella stele di Rosetta, indicavano <b>suoni</b> e non solo idee: da lì iniziò a decifrare tutto. Prova a ragionare come lui:</p>
<ol>
<li>La stele ha lo stesso testo in <b>tre scritture</b>: il greco si leggeva, quindi dava la traduzione.</li>
<li>Il nome «Tolomeo» nel greco compare più volte: cerca la stessa sequenza nei geroglifici, dentro un cartiglio.</li>
<li>Associa ogni segno a un suono e confronta con «Cleopatra»: le lettere in comune (P, O, L, T) corrispondono agli stessi segni.</li>
</ol>
<p>È il metodo con cui si decifra qualunque scrittura perduta: serve una chiave comparativa e molta pazienza.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il tuo orologio è babilonese",
      html: `<p>Ogni volta che guardi l'ora o misuri un angolo usi eredità mesopotamiche:</p>
<ul>
<li>1 ora = 60 minuti, 1 minuto = 60 secondi: base 60;</li>
<li>il cerchio ha 360 gradi (6 × 60);</li>
<li>i giorni della settimana sono legati a sette astri visibili a occhio nudo (Sole, Luna, Marte, Mercurio, Giove, Venere, Saturno), come si vede ancora nei nomi italiani: lunedì, martedì...</li>
</ul>
<p>E dall'Egitto ereditiamo il <b>calendario solare di 365 giorni</b>, poi corretto dai Romani con Giulio Cesare (anno bisestile).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La maledizione di Tutankhamon",
      html: `<p>Nel <b>1922</b> l'archeologo britannico <b>Howard Carter</b> scoprì nella Valle dei Re la tomba quasi intatta di <b>Tutankhamon</b>, faraone morto giovanissimo (circa 18-19 anni) intorno al 1323 a.C., figlio o parente di Akhenaton. Quando morì nel 1923 il finanziatore Lord Carnarvon, si parlò di «maledizione del faraone». Ma gli archeologi dimostrarono che la maggior parte dei partecipanti morì di morte naturale e in età avanzata (Carter nel 1939): la «maledizione» è un'invenzione dei giornali. La tomba conteneva oltre 5000 oggetti, tra cui la celebre maschera funeraria d'oro.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il primo «trattato di pace» della storia",
      html: `<p>Dopo la battaglia di Qadesh (circa 1274 a.C.) il faraone <b>Ramses II</b> e il re ittita <b>Hattusili III</b> firmarono, circa nel 1259 a.C., un trattato di pace e alleanza di cui possediamo sia la versione egiziana (incisa sui muri del tempio di Karnak) sia quella ittita (tavolette d'argilla). Una copia è appesa nella sede dell'ONU a New York come esempio di accordo internazionale antico.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire Mesopotamia ed Egitto",
      intro: "Due civiltà fluviali, due soluzioni. Ecco alcuni modi per metterle a confronto.",
      tabs: [
        {
          label: "⚖️ Confronto a due colonne",
          html: `<table>
<tr><th></th><th>Mesopotamia</th><th>Egitto</th></tr>
<tr><td><b>Fiume</b></td><td>Tigri ed Eufrate: piene improvvise e distruttive</td><td>Nilo: piena regolare e prevedibile</td></tr>
<tr><td><b>Territorio</b></td><td>Pianura aperta, facile da invadere</td><td>Deserti ai lati: ben protetto</td></tr>
<tr><td><b>Stato</b></td><td>Molte città-stato, poi imperi</td><td>Un regno unito sotto il faraone</td></tr>
<tr><td><b>Re</b></td><td>Re-sacerdote, vicario degli dèi</td><td>Faraone: dio vivente</td></tr>
<tr><td><b>Scrittura</b></td><td>Cuneiforme su argilla</td><td>Geroglifici su papiro</td></tr>
<tr><td><b>Monumenti</b></td><td>Ziggurat, in mattoni</td><td>Piramidi e templi, in pietra</td></tr>
<tr><td><b>Aldilà</b></td><td>Triste e polveroso</td><td>Vita felice per chi supera il giudizio</td></tr>
</table>
<p>La geografia spiega molto: un fiume capriccioso e un territorio aperto producono città in conflitto e popoli aggressivi; un fiume regolare e un deserto protettivo producono un'unità stabile e una visione ottimista della vita.</p>`
        },
        {
          label: "🗺️ Dove sono: gira il globo",
          html: `<p>Ruota il globo per localizzare le grandi città delle due civiltà.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.3, lon: 45.6, label: "Uruk", color: "#f97316" },
              { lat: 30.96, lon: 46.1, label: "Ur", color: "#f97316" },
              { lat: 32.5, lon: 44.4, label: "Babilonia", color: "#ef4444" },
              { lat: 36.35, lon: 43.15, label: "Ninive", color: "#ef4444" },
              { lat: 29.98, lon: 31.13, label: "Giza", color: "#2563eb" },
              { lat: 25.7, lon: 32.65, label: "Tebe", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 3], color: "#f97316" }, { points: [4, 5], color: "#2563eb" }]
          }
        },
        {
          label: "📅 Linea del tempo",
          html: `<p>Posiziona sulla linea del tempo gli eventi: vedi quanto sono lunghe queste storie.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -3300, label: "Scrittura a Uruk", icon: "✍️" },
              { year: -3100, label: "Unificazione Egitto", icon: "👑" },
              { year: -2560, label: "Piramide di Cheope", icon: "🔺" },
              { year: -2334, label: "Sargon di Akkad", icon: "⚔️" },
              { year: -1754, label: "Codice di Hammurabi", icon: "⚖️" },
              { year: -1550, label: "Nuovo Regno", icon: "🏛️" },
              { year: -1350, label: "Akhenaton", icon: "☀️" },
              { year: -1274, label: "Qadesh", icon: "🛡️" },
              { year: -539, label: "Persiani a Babilonia", icon: "🏰" },
              { year: -332, label: "Alessandro in Egitto", icon: "🐎" }
            ]
          }
        },
        {
          label: "🃏 Carte di ripasso",
          html: `<p>Gira le carte per ripassare le parole chiave.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Ziggurat", back: "Torre a gradoni con un tempio in cima, centro della città sumera" },
              { front: "Cuneiforme", back: "Scrittura con segni a forma di cuneo su argilla" },
              { front: "Hammurabi", back: "Re di Babilonia (1792-1750 a.C. ca.), autore del celebre codice di 282 leggi" },
              { front: "Faraone", back: "Re-dio dell'Egitto, garante dell'ordine (Maat)" },
              { front: "Rosetta", back: "Stele con lo stesso testo in tre scritture: chiave per decifrare i geroglifici" },
              { front: "Legge del taglione", back: "Pena proporzionata all'offesa («occhio per occhio»)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle civiltà fluviali: tocca i nodi e scopri il perché",
      nodes: [
        { id: "fiumi", label: "Grandi fiumi", x: 50, y: 6, color: "#0ea5e9", html: "Tigri, Eufrate e Nilo offrono acqua, limo e vie di trasporto.", why: "Dove l'acqua è abbondante e prevedibile (o gestibile) la terra rende molto: più cibo significa più persone e un surplus per mantenere specialisti." },
        { id: "canali", label: "Irrigazione e controllo", x: 18, y: 30, color: "#16a34a", html: "Canali, argini, calendari delle piene.", why: "Per scavare e mantenere i canali servono lavoro collettivo e coordinamento. Il potere centrale si afferma proprio perché organizza e difende queste opere." },
        { id: "surplus", label: "Surplus e magazzini", x: 82, y: 30, color: "#eab308", html: "I raccolti si accumulano nei granai del tempio o del palazzo.", why: "Chi amministra i magazzini ha bisogno di registrare quanto entra e quanto esce: nasce la contabilità." },
        { id: "scrittura", label: "Scrittura", x: 50, y: 50, color: "#a855f7", html: "Cuneiforme in Mesopotamia, geroglifici in Egitto.", why: "Inventata per contare le scorte e i debiti, poi usata per leggi, lettere, preghiere e racconti. Segna la nascita della storia." },
        { id: "stato", label: "Stato e re", x: 20, y: 75, color: "#ef4444", html: "Città-stato sumere, imperi mesopotamici, regno unito d'Egitto.", why: "Il potere si legittima con la religione: il re è vicario del dio (Mesopotamia) o è egli stesso un dio (Egitto). Esercito, tasse e burocrazia sostengono lo Stato." },
        { id: "leggi", label: "Leggi scritte", x: 80, y: 75, color: "#7c2d12", html: "Codice di Ur-Nammu, codice di Hammurabi.", why: "In società grandi e complesse non si può più fidarsi solo della tradizione orale: occorrono regole comuni e pubbliche per risolvere conflitti e garantire commerci." },
        { id: "cultura", label: "Scienza e religione", x: 50, y: 95, color: "#0f766e", html: "Matematica, astronomia, mummificazione, templi.", why: "Calcolare il calendario, misurare i campi dopo le piene e costruire grandi opere stimola matematica e astronomia; la paura della morte e il bisogno di ordine producono miti e riti." }
      ],
      edges: [
        ["fiumi", "canali", "richiedono"],
        ["fiumi", "surplus", "producono"],
        ["canali", "stato", "rafforzano lo"],
        ["surplus", "scrittura", "richiede la"],
        ["scrittura", "leggi", "permette le"],
        ["stato", "leggi", "emana"],
        ["scrittura", "cultura", "trasmette"],
        ["stato", "cultura", "finanzia"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Egitto",
      questions: [
        { type: "mc", q: "Chi decifrò i geroglifici nel 1822?", options: ["Howard Carter", "Jean-François Champollion", "Erodoto"], answer: 1, explain: "Champollion usò la stele di Rosetta." },
        { type: "mc", q: "Che cos'era il faraone per gli Egizi?", options: ["Un re-dio garante dell'ordine cosmico", "Un semplice giudice", "Un capo militare eletto"], answer: 0, explain: "Era considerato figlio di dèi e garante di Maat." },
        { type: "tf", q: "Le piramidi di Giza appartengono al Nuovo Regno.", answer: false, explain: "Furono costruite nell'Antico Regno (circa 2600-2500 a.C.)." },
        { type: "text", q: "Come si chiama la scrittura egizia per immagini?", answer: ["geroglifici", "geroglifico", "i geroglifici"], explain: "Geroglifici, «incisioni sacre»." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Le civiltà fluviali nascono dove l'acqua dà surplus e richiede organizzazione: Mesopotamia, Egitto, Indo, Fiume Giallo.</li>
<li><b>Mesopotamia</b>: Sumeri (città-stato, ziggurat, cuneiforme), Accadi (Sargon, primo impero), Babilonesi (<b>Hammurabi</b>, 1792-1750 a.C. ca.), Assiri.</li>
<li><b>Codice di Hammurabi</b>: 282 leggi scritte, taglione, pene diverse per classe sociale.</li>
<li><b>Egitto</b>: unificazione circa 3100 a.C.; Antico (piramidi), Medio, Nuovo Regno; faraone re-dio; geroglifici decifrati nel 1822.</li>
<li>Eredità: scrittura, base 60, calendario di 365 giorni, geometria, leggi scritte.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Civiltà fluviale", d: "Società nata lungo un grande fiume, che ne sfrutta e ne controlla le acque." },
    { t: "Città-stato", d: "Città indipendente con il proprio governo e territorio." },
    { t: "Ziggurat", d: "Torre a gradoni mesopotamica con un tempio in cima." },
    { t: "Cuneiforme", d: "Scrittura mesopotamica con segni a cuneo impressi su argilla." },
    { t: "Scriba", d: "Funzionario che sapeva leggere e scrivere." },
    { t: "Taglione", d: "Principio della pena uguale al danno subito." },
    { t: "Faraone", d: "Re dell'Egitto, considerato un dio." },
    { t: "Geroglifico", d: "Scrittura per immagini dell'antico Egitto." },
    { t: "Papiro", d: "Materiale per scrivere ricavato da una pianta del Nilo." },
    { t: "Mummificazione", d: "Tecnica di conservazione del corpo dei defunti." },
    { t: "Impero", d: "Stato esteso che domina molti popoli." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa significa «Mesopotamia»?", options: ["Terra tra i due fiumi", "Terra del Nilo", "Terra del sole"], answer: 0, explain: "Dal greco: «terra in mezzo ai fiumi» (Tigri ed Eufrate)." },
      { type: "mc", q: "Qual è la scrittura dei Sumeri?", options: ["Geroglifica", "Cuneiforme", "Alfabetica"], answer: 1, explain: "Cuneiforme, su tavolette d'argilla." },
      { type: "tf", q: "Il codice di Hammurabi prevedeva pene identiche per nobili e plebei.", answer: false, explain: "Le pene dipendevano dalla classe sociale." },
      { type: "text", q: "Come si chiama il primo re che unificò la Mesopotamia in un impero, intorno al 2334 a.C.?", answer: ["sargon", "sargon di akkad"], explain: "Sargon di Akkad." },
      { type: "mc", q: "In quale periodo furono costruite le piramidi di Giza?", options: ["Antico Regno", "Nuovo Regno", "Epoca tolemaica"], answer: 0, explain: "Antico Regno, circa 2600-2500 a.C." },
      { type: "mc", q: "Che cosa permise di decifrare i geroglifici?", options: ["La stele di Rosetta", "La tomba di Tutankhamon", "Il codice di Hammurabi"], answer: 0, explain: "Il testo in tre scritture, di cui una greca, fu la chiave." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Nascita della scrittura a Uruk", "Unificazione dell'Egitto", "Piramide di Cheope", "Codice di Hammurabi", "Battaglia di Qadesh"], explain: "3300, 3100, 2560, 1754, 1274 a.C. circa." },
      { type: "mc", q: "Perché l'Egitto era più stabile della Mesopotamia?", options: ["Aveva un Nilo regolare e confini protetti dal deserto", "Non aveva fiumi", "Era un'isola"], answer: 0, explain: "La piena prevedibile e la protezione naturale favorirono un regno unito." },
      { type: "num", q: "Quante leggi contiene il codice di Hammurabi? (circa)", answer: 282, tol: 2, explain: "282 articoli, incisi sulla stele di basalto." },
      { type: "tf", q: "Akhenaton introdusse in Egitto il culto di un solo dio, Aton.", answer: true, explain: "Fu un tentativo di monoteismo, abbandonato dopo la sua morte." },
      { type: "mc", q: "Quale eredità mesopotamica usiamo ancora oggi?", options: ["La divisione dell'ora in 60 minuti", "I numeri romani", "La moneta"], answer: 0, explain: "Il sistema sessagesimale." }
    ]
  }
});
