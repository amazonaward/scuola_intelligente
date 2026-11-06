TOPIC('it', {
  id: "p2-sto-fonti",
  title: "Le fonti",
  intro: "Come facciamo a sapere che cosa è successo tanto tempo fa, quando noi non c'eravamo? 🤔 Facciamo come i <b>detective</b> 🕵️: cerchiamo le <b>tracce</b> del passato. Queste tracce si chiamano <b>fonti</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cos'è una fonte?",
      html: `<p>Una <b>fonte storica</b> è <b>qualsiasi cosa</b> che ci dà informazioni sul passato.</p>
<p>La parola «fonte» vuol dire anche <b>sorgente</b> ⛲: come dalla sorgente esce l'acqua, dalla fonte storica escono le <b>informazioni</b>.</p>
<p>Le persone che studiano le fonti per ricostruire il passato si chiamano <b>storici</b> 📚. Quelli che cercano le tracce scavando nel terreno si chiamano <b>archeologi</b> ⛏️.</p>`
    },
    {
      type: "text",
      title: "I quattro tipi di fonti",
      html: `<ul>
<li>📜 <b>Fonti scritte</b>: tutto ciò che contiene parole scritte. Lettere, diari, libri, giornali, pagelle, cartoline, documenti, iscrizioni sui monumenti.</li>
<li>🧸 <b>Fonti materiali</b>: oggetti che si possono toccare. Giocattoli, vestiti, attrezzi, monete, case, ossa, vasi.</li>
<li>🖼️ <b>Fonti iconografiche</b> (o visive): immagini. Fotografie, disegni, dipinti, video, mappe.</li>
<li>🗣️ <b>Fonti orali</b>: i racconti a voce. I ricordi dei nonni, le canzoni, le filastrocche, le interviste registrate.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Le fonti della storia del nonno",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="20" y="30" width="130" height="170" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<rect x="165" y="30" width="130" height="170" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<rect x="310" y="30" width="130" height="170" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="455" y="30" width="130" height="170" rx="12" fill="#fce7f3" stroke="#be185d" stroke-width="3"/>
<rect x="45" y="60" width="80" height="95" fill="#ffffff" stroke="#92400e" stroke-width="2"/>
<line x1="55" y1="80" x2="115" y2="80" stroke="#92400e" stroke-width="3"/><line x1="55" y1="97" x2="115" y2="97" stroke="#92400e" stroke-width="3"/><line x1="55" y1="114" x2="105" y2="114" stroke="#92400e" stroke-width="3"/><line x1="55" y1="131" x2="110" y2="131" stroke="#92400e" stroke-width="3"/>
<text x="230" y="125" font-size="56" text-anchor="middle">🧸</text>
<rect x="335" y="60" width="80" height="95" fill="#ffffff" stroke="#1e3a8a" stroke-width="4"/>
<circle cx="375" cy="95" r="15" fill="#94a3b8"/><path d="M350 150 Q375 105 400 150 Z" fill="#94a3b8"/>
<text x="520" y="125" font-size="56" text-anchor="middle">👴</text>
<text x="85" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#92400e">scritta</text>
<text x="85" y="252" font-size="14" text-anchor="middle" fill="#78350f">una lettera</text>
<text x="230" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#166534">materiale</text>
<text x="230" y="252" font-size="14" text-anchor="middle" fill="#14532d">il suo orsetto</text>
<text x="375" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#1d4ed8">iconografica</text>
<text x="375" y="252" font-size="14" text-anchor="middle" fill="#1e3a8a">una vecchia foto</text>
<text x="520" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#be185d">orale</text>
<text x="520" y="252" font-size="14" text-anchor="middle" fill="#831843">i suoi racconti</text>
<text x="300" y="288" font-size="17" text-anchor="middle" fill="#334155">insieme, raccontano com'era la sua infanzia</text>
</svg>`,
      caption: "Una lettera, un giocattolo, una foto e un racconto: quattro fonti diverse per conoscere la storia del nonno."
    },
    {
      type: "widget",
      title: "Che tipo di fonte è?",
      widget: "classify",
      options: {
        groups: ["📜 Scritta", "🧸 Materiale", "🖼️ Iconografica", "🗣️ Orale"],
        items: [
          ["la pagella della mamma", 0],
          ["una moneta antica", 1],
          ["una foto del matrimonio dei nonni", 2],
          ["il racconto della bisnonna", 3],
          ["un diario", 0],
          ["un vaso romano", 1],
          ["un dipinto in un museo", 2],
          ["una ninna nanna cantata dal nonno", 3],
          ["un vecchio biglietto del treno", 0],
          ["la mia prima scarpina", 1]
        ]
      },
      caption: "Ricorda: se ci sono parole scritte è scritta; se è un'immagine è iconografica; se è un oggetto è materiale; se è un racconto a voce è orale."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i tipi di fonti",
      questions: [
        { type: "mc", q: "Una vecchia fotografia è una fonte…", options: ["scritta", "iconografica", "orale"], answer: 1, explain: "Le immagini (foto, disegni, dipinti) sono fonti iconografiche." },
        { type: "mc", q: "Il racconto del nonno è una fonte…", options: ["orale", "materiale", "scritta"], answer: 0, explain: "Le informazioni raccontate a voce sono fonti orali." },
        { type: "tf", q: "Un giocattolo antico è una fonte materiale.", answer: true, explain: "È un oggetto che si può toccare: fonte materiale." }
      ]
    },
    {
      type: "example",
      title: "Esempio: la mia storia personale 👶",
      html: `<p>Anche tu hai una storia! Per ricostruirla puoi usare tante fonti:</p>
<ul>
<li>📜 il <b>certificato di nascita</b> o il braccialetto dell'ospedale (scritta): ti dice <b>quando e dove</b> sei nato;</li>
<li>🖼️ le <b>foto</b> e i video di quando eri piccolo (iconografiche): com'eri;</li>
<li>🧸 il primo <b>ciuccio</b>, le scarpine, il primo disegno (materiali);</li>
<li>🗣️ i <b>racconti di mamma e papà</b> (orali): la tua prima parola, i primi passi.</li>
</ul>
<p>Mettendole in ordine sulla <b>linea del tempo</b> ricostruisci la tua storia!</p>`
    },
    {
      type: "widget",
      title: "La linea del tempo di Marco",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: 2019, label: "Nasce Marco (certificato di nascita)", icon: "👶" },
          { year: 2020, label: "I primi passi (video della mamma)", icon: "🚶" },
          { year: 2022, label: "Scuola dell'infanzia (foto del primo giorno)", icon: "🎒" },
          { year: 2023, label: "Perde il primo dentino (lo conserva in una scatolina)", icon: "🦷" },
          { year: 2025, label: "Prima elementare (il primo quaderno)", icon: "✏️" },
          { year: 2026, label: "Seconda elementare", icon: "📚" }
        ]
      },
      caption: "Ogni momento della storia di Marco è raccontato da una fonte diversa."
    },
    {
      type: "text",
      title: "Lo storico è un detective",
      html: `<p>Per capire bene il passato, lo storico fa così:</p>
<ol>
<li>🔍 <b>Cerca</b> le fonti: in casa, nei musei, negli <b>archivi</b> (dove si conservano i documenti), nelle biblioteche, sotto terra.</li>
<li>❓ <b>Fa domande</b> alla fonte: che cos'è? Chi l'ha fatta? Quando? A che cosa serviva?</li>
<li>⚖️ <b>Confronta</b> più fonti: se dicono la stessa cosa, l'informazione è più sicura.</li>
<li>✍️ <b>Racconta</b>: scrive la storia di quello che ha scoperto.</li>
</ol>
<p>⚠️ Attenzione: anche le fonti possono <b>sbagliare</b>! Il nonno può ricordare male una data; una foto può mostrare solo una parte della scena. Per questo bisogna confrontarle.</p>`
    },
    {
      type: "widget",
      title: "Lo scavo dell'archeologo",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<rect y="40" width="600" height="60" fill="#a3e635"/>
<rect y="100" width="600" height="70" fill="#d6a46b"/>
<rect y="170" width="600" height="70" fill="#b07a4a"/>
<rect y="240" width="600" height="80" fill="#7c4a2a"/>
<text x="560" y="78" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">oggi</text>
<text x="560" y="300" font-size="16" text-anchor="end" fill="#fde68a" font-weight="bold">tantissimo tempo fa</text>
<rect x="80" y="62" width="40" height="22" rx="4" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
<circle cx="230" cy="135" r="16" fill="#facc15" stroke="#a16207" stroke-width="3"/>
<path d="M350 185 L400 185 L392 225 L358 225 Z" fill="#ea580c" stroke="#7c2d12" stroke-width="3"/>
<path d="M160 270 L240 285 M175 262 L170 295" stroke="#f5f5f4" stroke-width="8" stroke-linecap="round"/>
<line x1="0" y1="100" x2="600" y2="100" stroke="#78350f" stroke-width="2"/>
<line x1="0" y1="170" x2="600" y2="170" stroke="#78350f" stroke-width="2"/>
<line x1="0" y1="240" x2="600" y2="240" stroke="#78350f" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 100, y: 73, label: "Lattina di oggi" },
          { x: 230, y: 135, label: "Moneta di 100 anni fa" },
          { x: 375, y: 205, label: "Vaso romano" },
          { x: 200, y: 278, label: "Ossa preistoriche" }
        ]
      },
      caption: "Il terreno si forma a strati, come una torta: gli strati più in basso sono i più antichi. Clicca ogni oggetto e scegli che cosa è, partendo dall'alto (il più recente)."
    },
    {
      type: "example",
      title: "Esempio: la scuola dei nonni 🏫",
      html: `<p>Vuoi sapere com'era la scuola del nonno, 60 anni fa?</p>
<ul>
<li>🗣️ <b>Lo intervisti</b>: «C'era una sola maestra, si scriveva con il pennino e l'inchiostro.»</li>
<li>🖼️ Guardi la <b>foto di classe</b>: grembiuli neri e colletti bianchi, banchi di legno.</li>
<li>📜 Leggi la sua <b>pagella</b>: i voti erano scritti a mano.</li>
<li>🧸 Trovi in soffitta il suo <b>calamaio</b>.</li>
</ul>
<p>Le quattro fonti dicono la stessa cosa: ora sei sicuro! ✅</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Ötzi, l'uomo venuto dal ghiaccio",
      html: `<p>Nel <b>1991</b> due escursionisti tedeschi trovarono un corpo nel ghiacciaio del Similaun, sulle Alpi, al confine tra Italia e Austria. Pensavano fosse un alpinista sfortunato… invece era un uomo vissuto più di <b>5000 anni fa</b>! ❄️</p>
<p>Lo chiamarono <b>Ötzi</b>. Il ghiaccio lo aveva conservato con i vestiti, l'ascia di rame, l'arco e le frecce: fonti materiali preziosissime! Oggi si trova nel Museo Archeologico di <b>Bolzano</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La città sotto la cenere",
      html: `<p>Nell'anno <b>79 d.C.</b> il vulcano <b>Vesuvio</b> eruttò e seppellì la città romana di <b>Pompei</b> sotto metri di cenere e lapilli. 🌋</p>
<p>La cenere ha conservato case, strade, pitture, pane nei forni e perfino le scritte sui muri, come i nostri graffiti! Gli scavi sono cominciati nel <b>1748</b> e continuano ancora oggi: Pompei è una gigantesca fonte per conoscere la vita dei Romani.</p>`
    },
    {
      type: "3d",
      title: "Viaggio nel tempo: fonti famose",
      scene: "spacetime",
      caption: "La mappa è la base, l'altezza è il tempo. In basso c'è quando la fonte è stata fatta, più in alto quando è stata scoperta o capita. Tocca gli eventi e segui le frecce.",
      options: {
        lat: [30, 56],
        lon: [-5, 32],
        years: [-3500, 2000],
        places: [
          { lat: 46.5, lon: 11.35, label: "Bolzano" },
          { lat: 40.75, lon: 14.49, label: "Pompei" },
          { lat: 31.4, lon: 30.42, label: "Rosetta (Egitto)" },
          { lat: 48.85, lon: 2.35, label: "Parigi" },
          { lat: 55.0, lon: -2.36, label: "Vindolanda" }
        ],
        events: [
          { id: "otzi", lat: 46.78, lon: 10.84, year: -3300, label: "Ötzi muore sulle Alpi", html: "Un uomo dell'<b>età del rame</b> muore su un passo alpino, a più di 3200 metri. La neve e il ghiaccio lo coprono e lo conservano per oltre 5000 anni, con i suoi vestiti e i suoi attrezzi." },
          { id: "otzi2", lat: 46.5, lon: 11.35, year: 1991, label: "Ötzi viene ritrovato", html: "Il 19 settembre 1991 due escursionisti trovano il corpo nel ghiacciaio del Similaun. Gli scienziati studiano tutto: che cosa aveva mangiato, le sue malattie, perfino i <b>61 tatuaggi</b>. Oggi è al Museo Archeologico di Bolzano.", causes: ["otzi"] },
          { id: "rosetta", lat: 31.4, lon: 30.42, year: -196, label: "La Stele di Rosetta", html: "In Egitto viene scolpita una pietra con lo stesso testo in tre scritture: <b>geroglifico</b>, <b>demotico</b> e <b>greco</b>. È una fonte scritta che diventerà la «chiave» per leggere i geroglifici." },
          { id: "champollion", lat: 48.85, lon: 2.35, year: 1822, label: "Champollion legge i geroglifici", html: "Confrontando il greco della Stele (ritrovata nel 1799) con i geroglifici, il francese <b>Jean-François Champollion</b> riesce a decifrarli. Migliaia di fonti scritte egizie diventano finalmente leggibili!", causes: ["rosetta"] },
          { id: "pompei", lat: 40.75, lon: 14.49, year: 79, label: "Il Vesuvio seppellisce Pompei", html: "L'eruzione del <b>Vesuvio</b> copre Pompei ed Ercolano. Lo scrittore romano <b>Plinio il Giovane</b> la vide da lontano e la descrisse in due lettere: una fonte scritta che conferma quella materiale." },
          { id: "scavi", lat: 40.76, lon: 14.5, year: 1748, label: "Cominciano gli scavi di Pompei", html: "Iniziano gli scavi. Più tardi, nel 1863, l'archeologo <b>Giuseppe Fiorelli</b> inventa un metodo: versa il gesso nei vuoti lasciati nella cenere e ottiene i <b>calchi</b> delle persone e degli animali.", causes: ["pompei"] },
          { id: "vindolanda", lat: 55.0, lon: -2.36, year: 100, label: "Le tavolette di Vindolanda", html: "In un forte romano in Britannia, soldati e famiglie scrivono lettere su sottili <b>tavolette di legno</b>. Ce n'è anche un invito a una festa di compleanno! Ritrovate dal 1973, sono tra le lettere scritte a mano più antiche d'Europa." },
          { id: "foto", lat: 46.72, lon: 4.85, year: 1827, label: "La prima fotografia", html: "In Francia <b>Nicéphore Niépce</b> riesce a fissare l'immagine della vista dalla sua finestra: è la più antica fotografia arrivata fino a noi (1826–1827). Da allora le foto diventano fonti iconografiche preziose." },
          { id: "voce", lat: 48.86, lon: 2.34, year: 1860, label: "La prima voce registrata", html: "A Parigi <b>Édouard-Léon Scott de Martinville</b> registra una persona che canta «Au clair de la lune» con una macchina che disegna il suono. Solo nel 2008 gli scienziati sono riusciti a riascoltarla: la fonte orale registrata più antica!", causes: ["foto"] }
        ]
      }
    },
    {
      type: "decision",
      title: "1991: avete trovato un corpo nel ghiaccio!",
      html: `<p>Sei in montagna, a più di 3000 metri, con un amico. Nel ghiaccio che si sta sciogliendo vedete spuntare la schiena e la testa di una persona. Vicino ci sono pezzi di legno e di cuoio.</p>`,
      question: "Che cosa fate?",
      options: [
        { label: "Lo tiriamo fuori da soli con le piccozze e portiamo a casa gli oggetti come ricordo.", outcome: "Rischiereste di rompere il corpo e gli oggetti, e soprattutto si perderebbe la cosa più importante: <b>dove</b> e <b>come</b> si trovava ogni cosa. Per gli archeologi la posizione degli oggetti è un'informazione preziosa." },
        { label: "Facciamo una foto, non tocchiamo niente e avvisiamo subito il rifugio e le autorità.", outcome: "È la scelta giusta: la foto è già una fonte, e gli esperti potranno recuperare tutto con cura e studiarlo." },
        { label: "Facciamo finta di niente e torniamo a valle.", outcome: "Il ghiaccio, sciogliendosi, avrebbe lasciato il corpo al sole e alle intemperie: in poco tempo si sarebbe rovinato, e una fonte unica sarebbe andata perduta." }
      ],
      answer: 1,
      explain: "Erika e Helmut Simon, il 19 settembre 1991, fotografarono il corpo e avvisarono il rifugio. All'inizio tutti pensavano a un alpinista morto da poco, e il primo recupero fu fatto in fretta con un martello pneumatico, rovinando un po' il corpo e alcuni oggetti. Poi l'archeologo <b>Konrad Spindler</b> capì che aveva più di 4000 anni (oggi sappiamo: circa 5300). Da allora Ötzi è uno dei reperti più studiati al mondo. La regola degli archeologi è: <b>non toccare, documentare, avvisare</b>. In Italia chi trova reperti antichi deve avvisare le autorità: appartengono a tutti."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le fonti",
      intro: "Le fonti si capiscono meglio giocando a fare gli storici.",
      tabs: [
        {
          label: "📦 La scatola dei ricordi",
          html: `<p>Prepara a casa una <b>scatola del tempo</b>: metti dentro una tua foto, un disegno, un giocattolo che non usi più e una lettera scritta da te («Oggi ho 7 anni e mi piace…»). Chiudila e scrivi sopra: «Da aprire fra 10 anni».</p>
<p>Fra 10 anni quella scatola sarà una piccola raccolta di <b>fonti</b> su di te! In tutto il mondo si seppelliscono così le «capsule del tempo» per i posteri.</p>`
        },
        {
          label: "🕵️ Le domande del detective",
          html: `<p>Davanti a ogni fonte, fai le <b>5 domande</b> del detective. Gira le carte!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "❓ Che cos'è?", back: "Una lettera, un vaso, una foto, un racconto…" },
              { front: "👤 Chi l'ha fatta?", back: "Una persona famosa, un bambino, un soldato, un artigiano…" },
              { front: "📅 Quando?", back: "Guardo la data, lo strato del terreno, com'è fatta." },
              { front: "📍 Dove?", back: "Dov'è stata trovata o scritta." },
              { front: "🎯 Perché?", back: "A che cosa serviva? Che cosa voleva raccontare?" }
            ]
          }
        },
        {
          label: "🌍 Fonti in giro per il mondo",
          html: `<p>Alcune fonti sono così importanti che sono famose in tutto il mondo. Gira il globo e trovale!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 46.78, lon: 10.84, label: "Ötzi (Alpi)", color: "#0ea5e9" },
              { lat: 40.75, lon: 14.49, label: "Pompei", color: "#ef4444" },
              { lat: 45.05, lon: 1.17, label: "Grotta di Lascaux: pitture di circa 17.000 anni fa", color: "#a16207" },
              { lat: 31.4, lon: 30.42, label: "Stele di Rosetta (Egitto)", color: "#eab308" },
              { lat: 34.38, lon: 109.27, label: "Esercito di terracotta (Cina)", color: "#b45309" },
              { lat: -13.16, lon: -72.55, label: "Machu Picchu (Perù)", color: "#16a34a" }
            ]
          }
        },
        {
          label: "🍰 La torta a strati",
          html: `<p>Immagina di fare una torta a strati: prima metti il pan di Spagna, poi la crema, poi la cioccolata, poi la panna. Lo strato <b>in fondo</b> l'hai messo <b>per primo</b>, quello in cima per ultimo.</p>
<p>Il terreno funziona allo stesso modo: la terra, la polvere e i detriti si accumulano piano piano. Per questo l'archeologo sa che, di solito, più scava <b>in profondità</b>, più trova oggetti <b>antichi</b>. Questa idea si chiama <b>stratigrafia</b>.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf2f8"/>
<rect x="150" y="40" width="300" height="35" rx="6" fill="#ffffff" stroke="#9ca3af" stroke-width="2"/>
<rect x="150" y="75" width="300" height="35" fill="#78350f"/>
<rect x="150" y="110" width="300" height="35" fill="#fde68a"/>
<rect x="150" y="145" width="300" height="45" rx="6" fill="#fbbf24"/>
<text x="470" y="63" font-size="16" fill="#334155" font-weight="bold">4. panna (ultimo)</text>
<text x="470" y="98" font-size="16" fill="#78350f" font-weight="bold">3. cioccolata</text>
<text x="470" y="133" font-size="16" fill="#a16207" font-weight="bold">2. crema</text>
<text x="470" y="173" font-size="16" fill="#b45309" font-weight="bold">1. pan di Spagna</text>
<text x="20" y="63" font-size="16" fill="#16a34a" font-weight="bold">più recente ↑</text>
<text x="20" y="173" font-size="16" fill="#7c2d12" font-weight="bold">più antico ↓</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle fonti: tocca i nodi e scopri il perché",
      nodes: [
        { id: "passato", label: "Il passato", x: 50, y: 6, color: "#64748b", html: "Tutto quello che è già successo.", why: "Il passato non si può rivedere: non esiste la macchina del tempo! Possiamo conoscerlo solo attraverso le tracce che ha lasciato." },
        { id: "fonti", label: "Le fonti", x: 50, y: 28, color: "#a855f7", html: "Tutte le tracce che ci danno informazioni sul passato.", why: "Ogni persona, ogni giorno, lascia tracce: oggetti, scritte, foto, ricordi. Alcune si conservano per secoli, altre si perdono. Per questo gli storici lavorano con le fonti che sono arrivate fino a noi." },
        { id: "scritte", label: "Scritte", x: 12, y: 50, color: "#b45309", html: "Lettere, diari, libri, documenti, iscrizioni.", why: "Esistono da quando è stata inventata la <b>scrittura</b>, circa <b>5000 anni fa</b> in Mesopotamia. Per questo il periodo prima della scrittura si chiama <b>Preistoria</b>: «prima della storia scritta»." },
        { id: "materiali", label: "Materiali", x: 37, y: 55, color: "#16a34a", html: "Oggetti, case, attrezzi, ossa, monete.", why: "Sono le fonti più antiche: ci raccontano anche la Preistoria, quando non si scriveva. Molte si trovano scavando, perché nel tempo vengono coperte dalla terra." },
        { id: "iconografiche", label: "Iconografiche", x: 63, y: 55, color: "#1d4ed8", html: "Foto, disegni, dipinti, video.", why: "«Iconografica» viene dal greco <i>eikón</i> = immagine. Le prime immagini sono le pitture nelle grotte, di decine di migliaia di anni fa; la prima fotografia è del 1826–1827." },
        { id: "orali", label: "Orali", x: 88, y: 50, color: "#be185d", html: "Racconti, ricordi, canzoni tramandate a voce.", why: "Per migliaia di anni le storie passarono da nonno a nipote solo a voce. Anche i poemi di Omero, l'Iliade e l'Odissea, furono cantati a memoria per secoli prima di essere scritti." },
        { id: "storico", label: "Storico e archeologo", x: 30, y: 82, color: "#0ea5e9", html: "Chi cerca, studia e confronta le fonti.", why: "Lo storico greco <b>Erodoto</b> (circa 2500 anni fa) è chiamato il «padre della storia»: viaggiò e fece domande per raccogliere le notizie. L'archeologia moderna, che scava con metodo strato per strato, è nata negli ultimi 200 anni." },
        { id: "luoghi", label: "Musei e archivi", x: 70, y: 85, color: "#ef4444", html: "Dove si conservano le fonti.", why: "Nei <b>musei</b> si conservano gli oggetti, negli <b>archivi</b> i documenti, nelle <b>biblioteche</b> i libri. Il Museo Capitolino di Roma, aperto nel 1734, è uno dei più antichi musei pubblici del mondo." }
      ],
      edges: [
        ["passato", "fonti", "lascia tracce:"],
        ["fonti", "scritte", "possono essere"],
        ["fonti", "materiali", "possono essere"],
        ["fonti", "iconografiche", "possono essere"],
        ["fonti", "orali", "possono essere"],
        ["materiali", "storico", "le scava l'"],
        ["scritte", "storico", "le legge lo"],
        ["storico", "luoghi", "le conserva in"],
        ["iconografiche", "luoghi", "esposte nei"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: detective della storia",
      questions: [
        { type: "mc", q: "Chi cerca le tracce del passato scavando nel terreno?", options: ["L'archeologo", "Il cuoco", "L'astronauta"], answer: 0, explain: "L'archeologo scava e studia le fonti materiali." },
        { type: "tf", q: "Negli strati del terreno, di solito, gli oggetti più in basso sono i più antichi.", answer: true, explain: "Gli strati si depositano uno sopra l'altro: i più profondi sono i più vecchi." },
        { type: "mc", q: "Perché è utile confrontare più fonti?", options: ["Per perdere tempo", "Perché una fonte da sola può sbagliare", "Perché le fonti sono tutte uguali"], answer: 1, explain: "Se più fonti dicono la stessa cosa, l'informazione è più sicura." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Le <b>fonti</b> sono le tracce del passato.</li>
<li>Ci sono fonti <b>scritte</b>, <b>materiali</b>, <b>iconografiche</b> e <b>orali</b>.</li>
<li>Lo <b>storico</b> le cerca, fa domande, le <b>confronta</b> e racconta.</li>
<li>L'<b>archeologo</b> scava: più in basso = più antico.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Fonte storica", d: "Qualsiasi traccia che ci dà informazioni sul passato." },
    { t: "Fonte scritta", d: "Fonte con parole scritte: lettere, diari, documenti." },
    { t: "Fonte materiale", d: "Un oggetto: giocattoli, attrezzi, vasi, case, ossa." },
    { t: "Fonte iconografica", d: "Un'immagine: foto, disegni, dipinti, video." },
    { t: "Fonte orale", d: "Un racconto fatto a voce, come i ricordi dei nonni." },
    { t: "Storico", d: "Chi studia le fonti per ricostruire il passato." },
    { t: "Archeologo", d: "Chi cerca e studia le tracce del passato scavando." },
    { t: "Archivio", d: "Luogo dove si conservano i documenti." },
    { t: "Reperto", d: "Oggetto antico ritrovato durante uno scavo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è una fonte storica?", options: ["Una fontana in piazza", "Una traccia che ci dà informazioni sul passato", "Un libro di favole"], answer: 1, explain: "Le fonti sono le tracce del passato." },
      { type: "mc", q: "Una lettera della bisnonna è una fonte…", options: ["scritta", "orale", "materiale"], answer: 0, explain: "Contiene parole scritte: fonte scritta." },
      { type: "mc", q: "Un'antica spada è una fonte…", options: ["iconografica", "materiale", "orale"], answer: 1, explain: "È un oggetto: fonte materiale." },
      { type: "mc", q: "Un dipinto è una fonte…", options: ["iconografica", "scritta", "orale"], answer: 0, explain: "Le immagini sono fonti iconografiche." },
      { type: "tf", q: "I ricordi raccontati dal nonno sono una fonte orale.", answer: true, explain: "Sono informazioni raccontate a voce." },
      { type: "tf", q: "Una sola fonte basta sempre per essere sicuri.", answer: false, explain: "Le fonti possono sbagliare: meglio confrontarne più di una." },
      { type: "text", q: "Come si chiama chi scava per trovare le tracce del passato?", answer: ["archeologo", "l'archeologo", "archeologa", "l'archeologa"], explain: "L'archeologo." },
      { type: "order", q: "Uno scavo: metti in ordine dagli oggetti più recenti (in alto) ai più antichi (in basso).", items: ["lattina di oggi", "moneta del nonno", "vaso romano", "ossa preistoriche"], explain: "Gli strati più profondi sono i più antichi." },
      { type: "mc", q: "Dove si trova oggi Ötzi, l'uomo venuto dal ghiaccio?", options: ["A Bolzano", "A Parigi", "A New York"], answer: 0, explain: "Al Museo Archeologico dell'Alto Adige, a Bolzano." },
      { type: "mc", q: "Quale vulcano seppellì Pompei nel 79 d.C.?", options: ["L'Etna", "Il Vesuvio", "Lo Stromboli"], answer: 1, explain: "Il Vesuvio, vicino a Napoli." },
      { type: "mc", q: "Dove si conservano i documenti antichi?", options: ["Negli archivi", "Nei frigoriferi", "In palestra"], answer: 0, explain: "Gli archivi conservano i documenti." }
    ]
  }
});
