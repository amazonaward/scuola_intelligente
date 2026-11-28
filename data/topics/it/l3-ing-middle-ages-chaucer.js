TOPIC('it', {
  id: "l3-ing-middle-ages-chaucer",
  title: "The Middle Ages and Chaucer",
  intro: "\"<i>Hwæt! We Gardena in geardagum...</i>\" Così comincia, in una lingua che un inglese di oggi non capirebbe senza studio, il più antico poema epico della letteratura inglese. Tra il 5° e il 15° secolo la lingua d'Inghilterra cambia moltissimo: dall'<b>Old English</b> degli Anglosassoni al <b>Middle English</b> di <b>Geoffrey Chaucer</b>, che con i <i>Canterbury Tales</i> crea una galleria di personaggi viva e ironica come una serie televisiva. In questa lezione (spiegazioni in italiano, testi ed esercizi in inglese) vedi la storia, la lingua, <b>Beowulf</b>, Chaucer e i suoi pellegrini. 🏰",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. From Celts to Normans: the story in short",
      html: `<p>La storia medievale dell'Inghilterra è la storia di <b>invasioni successive</b>, ciascuna delle quali ha lasciato tracce nella lingua e nella cultura.</p>
<table>
<tr><th>Date</th><th>Event</th><th>Effect</th></tr>
<tr><td>43 AD – c. 410</td><td>Roman <b>Britannia</b></td><td>strade, città (<i>-chester</i> da <i>castra</i>), parole latine</td></tr>
<tr><td>5th century</td><td><b>Anglo-Saxons</b> (Angles, Saxons, Jutes) arrive from northern Germany and Denmark</td><td>nasce l'<b>Old English</b>; da <i>Angles</i> deriva «England»</td></tr>
<tr><td>597</td><td><b>St Augustine</b> lands in Kent</td><td>conversione al cristianesimo; Canterbury sede primaziale</td></tr>
<tr><td>793 →</td><td><b>Vikings</b>: raid on Lindisfarne</td><td>nel <b>Danelaw</b> restano parole norrene (<i>sky, egg, they</i>)</td></tr>
<tr><td>871 – 899</td><td><b>Alfred the Great</b>, king of Wessex</td><td>resiste ai Vichinghi, promuove l'istruzione in inglese</td></tr>
<tr><td>1066</td><td><b>Norman Conquest</b>: Battle of Hastings</td><td>il francese diventa lingua di corte e di legge</td></tr>
<tr><td>1215</td><td><b>Magna Carta</b></td><td>il re non è al di sopra della legge</td></tr>
<tr><td>1348</td><td><b>Black Death</b></td><td>muore circa un terzo della popolazione; i contadini guadagnano peso sociale</td></tr>
<tr><td>1381</td><td><b>Peasants' Revolt</b></td><td>rivolta contro la poll tax</td></tr>
<tr><td>1476</td><td><b>William Caxton</b> installs the first printing press in England</td><td>i libri circolano, la lingua si uniforma</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "How English changed",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif" font-size="14" text-anchor="middle">
<rect x="20" y="40" width="170" height="110" rx="12" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<text x="105" y="68" fill="#7f1d1d" font-weight="bold" font-size="16">Old English</text>
<text x="105" y="92" fill="#7f1d1d">c. 450 – 1100</text>
<text x="105" y="116" fill="#7f1d1d">Beowulf</text>
<text x="105" y="138" fill="#7f1d1d">«Hwæt!»</text>
<rect x="215" y="40" width="170" height="110" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="300" y="68" fill="#78350f" font-weight="bold" font-size="16">Middle English</text>
<text x="300" y="92" fill="#78350f">c. 1100 – 1500</text>
<text x="300" y="116" fill="#78350f">Chaucer</text>
<text x="300" y="138" fill="#78350f">«Whan that Aprill...»</text>
<rect x="410" y="40" width="170" height="110" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="495" y="68" fill="#14532d" font-weight="bold" font-size="16">Modern English</text>
<text x="495" y="92" fill="#14532d">from c. 1500</text>
<text x="495" y="116" fill="#14532d">Shakespeare</text>
<text x="495" y="138" fill="#14532d">«To be, or not to be»</text>
<path d="M190 95 L215 95 M385 95 L410 95" stroke="#334155" stroke-width="4"/>
<text x="300" y="195" fill="#0f172a" font-size="15" font-weight="bold">Influences on the vocabulary</text>
<text x="300" y="222" fill="#334155">Latin (church, law) · Norse (sky, egg, window) · French (beef, justice, court)</text>
<text x="300" y="256" fill="#475569" font-size="14">Cow, pig, sheep (Old English, the farmers) ≠ beef, pork, mutton (French, the table)</text>
</g>
</svg>`,
      caption: "Three stages of the English language, and three layers of vocabulary."
    },
    {
      type: "curiosity",
      title: "Why do we say «cow» but eat «beef»?",
      html: `<p>After 1066 the Norman aristocracy spoke French, while the Anglo-Saxon peasants who raised the animals kept using English. So the live animal kept its English name (<i>cow, pig, sheep, calf</i>) and the meat served at the lord's table got the French name (<i>beef</i> from <i>boeuf</i>, <i>pork</i> from <i>porc</i>, <i>mutton</i> from <i>mouton</i>, <i>veal</i> from <i>veau</i>). Ancora oggi in inglese la differenza di classe sociale è fossilizzata nel vocabolario. Per un italiano è un aiuto: molte parole inglesi «colte» (<i>justice, government, courage</i>) hanno forma simile alla nostra proprio per questo.</p>`
    },
    {
      type: "decision",
      title: "October 1066: march or wait?",
      html: `<p>You are <b>King Harold II</b> of England. On <b>25 September 1066</b> you have defeated the Norwegian king Harald Hardrada at <b>Stamford Bridge</b>, in Yorkshire. Three days later, William, Duke of Normandy, lands on the south coast at Pevensey with a large army and claims the throne. You are about 400 km away. Your men are tired and many are wounded. William is devastating the lands of your family in Sussex.</p>`,
      question: "What do you do?",
      options: [
        { label: "Rest the army, gather new troops and wait", outcome: "You would have fresher troops and a stronger army, but William would keep ravaging the south and your authority would suffer." },
        { label: "March south at once and fight", outcome: "You would meet William quickly and protect your people, but with an army that is tired and not yet complete." },
        { label: "Retreat to London and defend the city", outcome: "A safer position, but a long delay: William would be free to move and gain supporters." }
      ],
      answer: 1,
      explain: "Harold marched south in about two weeks and fought William on <b>14 October 1066</b> at <b>Hastings</b>. After a long day's fighting Harold was killed and the English army was defeated. William was crowned king on Christmas Day 1066: the <b>Norman Conquest</b> changed English society, law and language forever. Many historians still debate whether Harold should have waited."
    },
    {
      type: "text",
      title: "2. Old English literature and Beowulf",
      html: `<p>La letteratura anglosassone è soprattutto <b>poesia orale</b>, cantata dagli <i>scops</i> (i poeti) nelle sale dei capi guerrieri. La metrica è <b>allitterativa</b>: ogni verso è diviso in due metà da una pausa (<b>caesura</b>) e ripete lo stesso suono iniziale in alcune parole accentate (<i>"The cat came creeping..."</i>). Non c'è rima. Un altro tratto tipico sono i <b>kennings</b>, metafore composte: <i>hronrad</i>, «strada della balena» = <b>whale-road</b> = il mare; <i>banhus</i>, «casa di ossa» = <b>bone-house</b> = il corpo.</p>
<p>Il capolavoro è <b>Beowulf</b>, poema epico anonimo di <b>3182 versi</b>, composto tra l'VIII e l'XI secolo e conservato in un unico manoscritto del <b>1000 circa</b> (oggi alla British Library). La storia è ambientata in <b>Scandinavia</b>, non in Inghilterra.</p>
<ul>
<li><b>Beowulf</b>, giovane eroe dei <b>Geats</b>, attraversa il mare per aiutare <b>Hrothgar</b>, re dei Danesi, la cui sala <b>Heorot</b> è terrorizzata da un mostro, <b>Grendel</b>.</li>
<li>Beowulf lo affronta a mani nude e gli strappa un braccio; poi uccide anche la <b>madre di Grendel</b> in una caverna sotto un lago.</li>
<li>Cinquant'anni dopo, diventato re, Beowulf combatte un <b>drago</b> che custodisce un tesoro: lo uccide, ma muore per le ferite. Il poema si chiude con i suoi funerali.</li>
</ul>
<p>Il poema mescola <b>valori pagani</b> (gloria, vendetta, destino: <i>wyrd</i>) e <b>valori cristiani</b> (il bene contro il male, Dio che protegge): un segno della conversione recente degli Anglosassoni. Il tema profondo è la <b>fama</b> come unica forma di immortalità e il peso della vecchiaia e della morte.</p>
<p>Il primo verso è «<i>Hwæt! We Gardena in geardagum...</i>», cioè «<b>Listen!</b> We have heard of the glory of the Spear-Danes' kings in days gone by». <b>J.R.R. Tolkien</b>, che era professore di Old English a Oxford, nel 1936 tenne una conferenza che cambiò il modo di leggere Beowulf: i mostri non sono un difetto, ma il cuore del poema. In tempi recenti il poeta irlandese <b>Seamus Heaney</b> ne ha fatto una celebre traduzione (1999).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: History and Beowulf",
      questions: [
        { type: "mc", q: "Which battle of 1066 led to the Norman Conquest?", options: ["Hastings", "Stamford Bridge", "Agincourt", "Bosworth"], answer: 0, explain: "A Hastings, il 14 ottobre 1066, Guglielmo il Conquistatore sconfisse Harold II." },
        { type: "tf", q: "Beowulf is set in England.", answer: false, explain: "È ambientato in Scandinavia (Danimarca e terra dei Geats)." },
        { type: "text", q: "A kenning for «the sea» in Old English poetry is the «whale-___». Complete the word.", answer: ["road", "whale-road"], explain: "Whale-road: «la strada della balena», una metafora composta." },
        { type: "mc", q: "Why do we use <i>beef</i> for the meat and <i>cow</i> for the animal?", options: ["The meat names come from Norman French; the animal names from Old English", "Because of Latin", "Because of Scandinavian settlers", "It is a modern invention"], answer: 0, explain: "I Normanni mangiavano la carne (boeuf), i contadini anglosassoni allevavano la mucca (cu)." }
      ]
    },
    {
      type: "text",
      title: "3. Middle English and Geoffrey Chaucer",
      html: `<p>Dopo il 1066 l'inglese non scompare, ma perde prestigio: per circa tre secoli la corte parla francese, la Chiesa e l'università il latino. Nel Trecento, però, l'inglese ritorna nei documenti ufficiali e nella letteratura. La lingua di questo periodo è il <b>Middle English</b>: ha perso quasi tutte le desinenze dell'Old English, ha assorbito molte parole francesi e ha una pronuncia diversa da quella moderna (la <b>Great Vowel Shift</b>, cambiamento delle vocali lunghe, avviene tra il Quattrocento e il Seicento).</p>
<p><b>Geoffrey Chaucer</b> (circa 1343 – 1400) è il più grande scrittore di questa epoca. Nasce a <b>Londra</b>, figlio di un mercante di vino. Lavora come paggio, soldato, diplomatico (viaggia in Francia e in Italia, dove forse conosce le opere di Dante, Petrarca e Boccaccio), funzionario della dogana. Serve il re Edoardo III, Riccardo II e John of Gaunt. Traduce il <i>Roman de la Rose</i>, scrive <i>The Book of the Duchess</i>, <i>The Parliament of Fowls</i> e <i>Troilus and Criseyde</i>, un grande poema d'amore. Soprattutto, sceglie di scrivere in <b>inglese</b> (il dialetto di Londra), contribuendo a farne la lingua letteraria nazionale. Muore nel 1400 ed è il primo poeta sepolto nel «Poets' Corner» di <b>Westminster Abbey</b>.</p>`
    },
    {
      type: "text",
      title: "4. The Canterbury Tales",
      html: `<p>I <b>Canterbury Tales</b> (scritti circa tra il 1387 e il 1400, lasciati <b>incompiuti</b>) sono la sua opera più famosa. La cornice è semplice: in primavera, nella locanda <b>Tabard Inn</b> di Southwark (a Londra), si incontrano <b>29 pellegrini</b> diretti alla tomba di <b>San Tommaso Becket</b> a <b>Canterbury</b> (l'arcivescovo ucciso nella cattedrale nel 1170). Insieme a loro c'è il narratore, «Chaucer». L'oste <b>Harry Bailly</b> propone un gioco: durante il viaggio ognuno racconterà <b>due storie all'andata e due al ritorno</b>; chi racconta la migliore avrà una cena gratis. Il piano prevedeva circa 120 storie; Chaucer ne scrisse <b>24</b> (alcune incomplete).</p>
<p>L'apertura è una celebre descrizione della primavera:</p>
<p><i>«Whan that Aprill with his shoures soote<br>The droghte of March hath perced to the roote...»</i><br>(«When April with its sweet showers has pierced the drought of March to the root...»)</p>
<p>Il testo è in <b>versi</b> (soprattutto <b>distici a rima baciata di pentametri giambici</b>, cioè a cinque piedi), con alcune storie in prosa. È una novità: una <b>commedia umana</b> con tutte le classi sociali del Trecento.</p>`
    },
    {
      type: "example",
      title: "Meet some pilgrims",
      html: `<p>Nel <b>General Prologue</b> Chaucer descrive ogni pellegrino con pochi tratti, sempre con ironia. Ecco alcuni personaggi (in inglese moderno, con una piccola descrizione):</p>
<ul>
<li><b>The Knight</b>: «a worthy man» who has fought in many crusades and is humble and courteous. He represents the ideal of <b>chivalry</b>.</li>
<li><b>The Miller</b>: big, strong, noisy; he wins wrestling matches and can break a door with his head. His tale is a rude and funny story.</li>
<li><b>The Wife of Bath</b>: a cheerful, independent woman who has had five husbands. She talks openly about marriage and what women want.</li>
<li><b>The Pardoner</b>: sells «pardons» and false relics; he is a <b>satire</b> of corrupt church officials.</li>
<li><b>The Prioress</b>: a nun who speaks French badly and cares about her manners more than about poverty.</li>
<li><b>The Clerk</b>: a thin, poor student of Oxford who loves books more than money.</li>
</ul>
<p>Chaucer non dà mai un giudizio diretto: descrive i fatti, e lascia che sia il lettore a capire il difetto nascosto. Questa <b>ironia</b> è la sua firma.</p>`
    },
    {
      type: "example",
      title: "Reading Chaucer: can you guess the words?",
      html: `<p>Il Middle English sembra difficile, ma spesso basta pronunciare le parole ad alta voce. Prova con la descrizione del Knight: <i>«He loved chivalrie, / Trouthe and honour, fredom and curteisie.»</i> Riconosci <i>chivalrie</i> (cavalleria), <i>trouthe</i> (truth, lealtà), <i>honour</i>, <i>fredom</i> (freedom) e <i>curteisie</i> (courtesy)? Sono quasi tutte parole di origine francese, presenti anche in italiano (<i>onore, cortesia, libertà</i>). Un buon trucco: leggi le consonanti come sono scritte e non cercare di «cancellare» le lettere finali, che erano ancora pronunciate.</p>`
    },
    {
      type: "remember",
      title: "Why Chaucer matters",
      html: `<ul>
<li><b>Society in a snapshot</b>: knights, merchants, clergy, workers, women; almost the whole of 14th-century England on one road.</li>
<li><b>Genres</b>: romance, fabliau (comic and rude), sermon, saint's life, beast fable: the book is an anthology of medieval forms.</li>
<li><b>Language</b>: it helped make London English the standard.</li>
<li><b>Voice</b>: irony, humour and a distance from the narrator that makes readers think.</li>
<li>È anche un esempio di <b>narrazione a cornice</b> (frame story), come il <i>Decameron</i> di Boccaccio: una cornice contiene molte novelle.</li>
</ul>`
    },
    {
      type: "svg",
      title: "The road to Canterbury",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfdf5"/>
<g font-family="sans-serif" font-size="14" text-anchor="middle">
<path d="M70 200 C170 120 250 240 340 160 S480 130 530 100" stroke="#a16207" stroke-width="8" fill="none" stroke-linecap="round"/>
<circle cx="70" cy="200" r="14" fill="#1d4ed8"/><text x="70" y="240" fill="#1e3a8a" font-weight="bold">Tabard Inn</text><text x="70" y="260" fill="#1e3a8a">Southwark, London</text>
<circle cx="530" cy="100" r="14" fill="#b91c1c"/><text x="530" y="75" fill="#7f1d1d" font-weight="bold">Canterbury</text><text x="530" y="140" fill="#7f1d1d">Becket's shrine</text>
<text x="300" y="40" fill="#0f172a" font-size="17" font-weight="bold">About 60 miles, 4 days on foot or horseback</text>
<text x="300" y="70" fill="#334155">Each pilgrim tells a tale to pass the time</text>
<rect x="190" y="215" width="220" height="50" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="300" y="237" fill="#78350f">Knight · Miller · Wife of Bath</text>
<text x="300" y="257" fill="#78350f">Pardoner · Prioress · Clerk...</text>
</g>
</svg>`,
      caption: "The framework of the Tales: a pilgrimage from London to Canterbury."
    },
    {
      type: "curiosity",
      title: "A rude comedy, a medieval joke",
      html: `<p>Tra i <i>Canterbury Tales</i> ci sono anche racconti volgari: nel <i>Miller's Tale</i>, un giovane studente inganna un vecchio carpentiere raccontandogli che arriverà un secondo diluvio, e lo convince a restare appeso in una tinozza sul tetto mentre lui visita la moglie. Il pubblico del Trecento rideva di scherzi che oggi sembrano irriverenti. Chaucer sa che alcuni lettori si scandalizzeranno e, con ironia, nel Prologo del Mugnaio (<i>Miller's Prologue</i>) avverte: chi non vuole leggere certe storie, «turn over the leef» (giri pagina) e scelga un'altra storia.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to study the Middle Ages",
      intro: "Se il Medioevo inglese ti sembra un elenco di date e nomi, prova a guardarlo da altre angolature.",
      tabs: [
        {
          label: "🕰️ Timeline",
          html: "<p>Le date chiave, dal 43 al 1476.</p>",
          widget: "timeline",
          options: { events: [
            { year: 43, label: "Roman invasion of Britain", icon: "🏛️" },
            { year: 449, label: "Anglo-Saxons arrive (traditional date)", icon: "⛵" },
            { year: 597, label: "St Augustine in Kent", icon: "⛪" },
            { year: 793, label: "Viking raid on Lindisfarne", icon: "🛡️" },
            { year: 1066, label: "Battle of Hastings", icon: "⚔️" },
            { year: 1215, label: "Magna Carta", icon: "📜" },
            { year: 1348, label: "Black Death", icon: "☠️" },
            { year: 1387, label: "Canterbury Tales begun (approx.)", icon: "🐴" },
            { year: 1476, label: "Caxton's printing press", icon: "📖" }
          ], unit: "years" }
        },
        {
          label: "🃏 Flashcards",
          html: "<p>Flip the cards to revise key words.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "Kenning", back: "A compound metaphor: whale-road = sea" },
            { front: "Caesura", back: "A pause in the middle of the verse" },
            { front: "Alliteration", back: "Repetition of an initial sound" },
            { front: "Frame story", back: "A story that contains other stories (Canterbury Tales)" },
            { front: "Satire", back: "Criticism of vices through humour" },
            { front: "Pilgrim", back: "A person who travels to a holy place" },
            { front: "Heroic couplet", back: "Two rhyming lines of iambic pentameter" }
          ] }
        },
        {
          label: "🔗 Match author and work",
          html: "<p>Match each work with what it is.</p>",
          widget: "match",
          options: { pairs: [
            ["Beowulf", "Anonymous Old English epic poem"],
            ["Canterbury Tales", "Frame story in Middle English verse"],
            ["Troilus and Criseyde", "Chaucer's long love poem"],
            ["Ecclesiastical History", "Bede, written in Latin (731)"],
            ["Domesday Book", "Survey of England ordered by William I (1086)"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: the Middle Ages in English literature",
      nodes: [
        { id: "ma", label: "Middle Ages", x: 50, y: 8, color: "#ef4444", html: "From the Anglo-Saxon settlement (5th c.) to the late 15th century.", why: "Each invasion left a layer on the language: Latin, Norse, French. For this reason English is a «mixed» language." },
        { id: "oe", label: "Old English", x: 14, y: 42, color: "#0ea5e9", html: "Poetry of heroes: alliteration and kennings. Beowulf.", why: "Poems were sung in the lord's hall: alliteration and fixed formulas helped the poet to remember and improvise." },
        { id: "norman", label: "Norman Conquest", x: 50, y: 42, color: "#22c55e", html: "1066: French becomes the language of power.", why: "William I replaced the English nobility with Norman lords; French words enter the vocabulary of law, food and fashion." },
        { id: "me", label: "Middle English", x: 86, y: 42, color: "#8b5cf6", html: "English returns to literature in the 14th century.", why: "After the Black Death and the Hundred Years' War, French loses prestige and English becomes a national language." },
        { id: "beowulf", label: "Beowulf", x: 28, y: 78, color: "#f59e0b", html: "Hero, monsters, fame and death.", why: "The poem reflects a world where a warrior's reputation is the only lasting thing, mixed with Christian ideas." },
        { id: "chaucer", label: "Chaucer", x: 72, y: 78, color: "#64748b", html: "Canterbury Tales: a portrait of English society.", why: "Chaucer is a public servant and traveller: he knows all social classes and European literature (Dante, Boccaccio), and writes in the language of London." }
      ],
      edges: [["ma", "oe", "begins with"], ["ma", "norman", "is changed by the"], ["norman", "me", "leads to"], ["oe", "beowulf", "gives us"], ["me", "chaucer", "gives us"], ["norman", "oe", "pushes aside"]]
    },
    {
      type: "quiz",
      title: "Final mini-quiz",
      questions: [
        { type: "order", q: "Put the events in chronological order.", items: ["Roman conquest of Britain", "Arrival of the Anglo-Saxons", "Battle of Hastings", "Caxton's printing press"], explain: "43 AD, V secolo, 1066, 1476." },
        { type: "mc", q: "Where do the pilgrims in the Canterbury Tales meet?", options: ["At the Tabard Inn", "In Canterbury Cathedral", "At Westminster", "In Oxford"], answer: 0, explain: "La locanda Tabard, a Southwark." }
      ]
    }
  ],
  glossary: [
    { t: "Old English", d: "Lingua degli Anglosassoni (c. 450-1100), molto diversa dall'inglese moderno." },
    { t: "Middle English", d: "Inglese del periodo c. 1100-1500, la lingua di Chaucer." },
    { t: "Alliteration", d: "Ripetizione dello stesso suono iniziale in parole vicine." },
    { t: "Kenning", d: "Metafora composta tipica della poesia anglosassone (whale-road)." },
    { t: "Epic poem", d: "Lungo poema narrativo su imprese di un eroe." },
    { t: "Frame story", d: "Racconto-cornice che contiene altre storie." },
    { t: "Pilgrimage", d: "Viaggio religioso verso un luogo sacro." },
    { t: "Satire", d: "Critica dei vizi e dei difetti attraverso ironia e umorismo." },
    { t: "Heroic couplet", d: "Distico di pentametri giambici a rima baciata." },
    { t: "Norman Conquest", d: "Conquista dell'Inghilterra da parte di Guglielmo di Normandia (1066)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which language was spoken at the English court after 1066?", options: ["Norman French", "Old English", "Latin", "Danish"], answer: 0, explain: "I Normanni parlavano francese." },
      { type: "tf", q: "Beowulf is a poem written in Latin.", answer: false, explain: "Beowulf è in Old English." },
      { type: "mc", q: "Who is the main monster Beowulf defeats first?", options: ["Grendel", "The dragon", "The Wife of Bath", "Hrothgar"], answer: 0, explain: "Grendel terrorizza la sala Heorot; poi Beowulf uccide la madre e infine il drago." },
      { type: "text", q: "Who wrote the Canterbury Tales? (surname)", answer: ["chaucer", "geoffrey chaucer"], explain: "Geoffrey Chaucer (c. 1343-1400)." },
      { type: "mc", q: "Why are the pilgrims travelling to Canterbury?", options: ["To visit the shrine of St Thomas Becket", "To meet the king", "To fight in a war", "To study at a university"], answer: 0, explain: "Becket fu ucciso nella cattedrale nel 1170." },
      { type: "mc", q: "Which character is a satire of corrupt church officials?", options: ["The Pardoner", "The Knight", "The Clerk", "The Plowman"], answer: 0, explain: "Il Pardoner vendeva false indulgenze e reliquie." },
      { type: "tf", q: "Chaucer completed all 120 stories he planned.", answer: false, explain: "Ne scrisse circa 24; l'opera restò incompiuta." },
      { type: "mc", q: "Which poetic form is typical of Old English verse?", options: ["Alliteration and a caesura", "Rhyming sonnets", "Blank verse", "Free verse"], answer: 0, explain: "Il verso allitterativo era diviso in due metà da una pausa." },
      { type: "order", q: "Put in order the lives of the language.", items: ["Old English", "Norman French influence", "Middle English of Chaucer", "Modern English"], explain: "Dal V secolo al XVI secolo." },
      { type: "text", q: "Complete Chaucer's first line: «Whan that Aprill with his shoures ___»", answer: ["soote"], explain: "«Soote» significa dolci (sweet)." }
    ]
  }
});
