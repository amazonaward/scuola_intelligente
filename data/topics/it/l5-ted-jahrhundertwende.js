TOPIC('it', {
  id: "l5-ted-jahrhundertwende",
  title: "La letteratura di inizio Novecento",
  intro: "Un Impero che sembra eterno e che sta per sgretolarsi, una Vienna di caffè, psicanalisi e valzer, una Lubecca di mercanti che si spegne lentamente, un poeta che guarda una pantera dietro le sbarre dello zoo di Parigi: è la <b>Jahrhundertwende</b>, la «svolta del secolo» (circa 1890–1914). Dopo il Realismo di Fontane, la letteratura di lingua tedesca si interroga sull'<b>io</b>, sul <b>linguaggio</b> e sulla <b>decadenza</b> della società borghese. In questa lezione incontriamo <b>Thomas Mann</b>, <b>Rainer Maria Rilke</b> e <b>Arthur Schnitzler</b>, con qualche sguardo a Hofmannsthal. 🎩📖",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Un'epoca di passaggio",
      html: `<p>Verso il 1900 il mondo di lingua tedesca vive una contraddizione. Da fuori appare sicuro e prospero: il <b>Reich tedesco</b> (fondato nel 1871) è una potenza industriale, l'<b>Impero austro-ungarico</b> di Francesco Giuseppe è un enorme Stato multietnico. Dentro, però, si moltiplicano i dubbi: nuove scoperte scientifiche, metropoli rumorose, crisi dei valori religiosi e borghesi. La grande guerra del 1914 spezzerà quel mondo, che Stefan Zweig chiamerà più tardi «il mondo di ieri» (<i>Die Welt von Gestern</i>).</p>
<p>In letteratura convivono tendenze diverse, spesso sovrapposte:</p>
<ul>
<li>il <b>Naturalismo</b> (Gerhart Hauptmann, <i>Die Weber</i>, 1892), che mostra le condizioni sociali con precisione quasi scientifica;</li>
<li>l'<b>Impressionismo</b> e il <b>Simbolismo</b>: contano le sensazioni fugaci, l'atmosfera, la musicalità del verso;</li>
<li>la <b>Wiener Moderne</b> (o <i>Jung-Wien</i>), il gruppo di scrittori viennesi attorno al Café Griensteidl: Schnitzler, Hofmannsthal, Hermann Bahr;</li>
<li>la <b>Décadence</b>: il fascino per la malattia, la stanchezza, la fine di un mondo;</li>
<li>la <b>crisi del linguaggio</b> (<i>Sprachkrise</i>): le parole sembrano non bastare più a dire la realtà.</li>
</ul>
<p>Sullo sfondo ci sono le idee di tre pensatori che cambiano la cultura europea: <b>Friedrich Nietzsche</b> (la crisi dei valori tradizionali), <b>Sigmund Freud</b> (<i>Die Traumdeutung</i>, «L'interpretazione dei sogni», 1899/1900: l'inconscio guida più di quanto crediamo) e <b>Ernst Mach</b> (l'«io» è un insieme di sensazioni, non un'unità solida).</p>`
    },
    {
      type: "svg",
      title: "Le tre città della Jahrhundertwende",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="28" font-size="18" text-anchor="middle" fill="#334155" font-weight="bold">Tre sguardi, una stessa crisi</text>
<rect x="20" y="50" width="175" height="215" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<text x="107" y="80" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Lubecca</text>
<text x="107" y="106" font-size="15" text-anchor="middle" fill="#1e3a8a">Thomas Mann</text>
<text x="107" y="142" font-size="15" text-anchor="middle" fill="#1e3a8a">Buddenbrooks</text>
<text x="107" y="166" font-size="15" text-anchor="middle" fill="#1e3a8a">(1901)</text>
<text x="107" y="204" font-size="15" text-anchor="middle" fill="#1e3a8a">declino di una</text>
<text x="107" y="226" font-size="15" text-anchor="middle" fill="#1e3a8a">famiglia borghese</text>
<rect x="212" y="50" width="175" height="215" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
<text x="300" y="80" font-size="18" text-anchor="middle" fill="#78350f" font-weight="bold">Vienna</text>
<text x="300" y="106" font-size="15" text-anchor="middle" fill="#78350f">Schnitzler, Hofmannsthal</text>
<text x="300" y="142" font-size="15" text-anchor="middle" fill="#78350f">Leutnant Gustl</text>
<text x="300" y="166" font-size="15" text-anchor="middle" fill="#78350f">(1900)</text>
<text x="300" y="204" font-size="15" text-anchor="middle" fill="#78350f">monologo interiore,</text>
<text x="300" y="226" font-size="15" text-anchor="middle" fill="#78350f">psicologia, Freud</text>
<rect x="404" y="50" width="175" height="215" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="492" y="80" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Praga e Parigi</text>
<text x="492" y="106" font-size="15" text-anchor="middle" fill="#14532d">Rilke</text>
<text x="492" y="142" font-size="15" text-anchor="middle" fill="#14532d">Neue Gedichte</text>
<text x="492" y="166" font-size="15" text-anchor="middle" fill="#14532d">(1907–08)</text>
<text x="492" y="204" font-size="15" text-anchor="middle" fill="#14532d">la «poesia delle</text>
<text x="492" y="226" font-size="15" text-anchor="middle" fill="#14532d">cose», la solitudine</text>
</svg>`,
      caption: "Tre luoghi, tre modi di raccontare la fine di un mondo: il romanzo familiare, l'analisi psicologica, la poesia dell'oggetto."
    },
    {
      type: "text",
      title: "2. Thomas Mann: la borghesia e l'arte",
      html: `<p><b>Thomas Mann</b> (Lubecca 1875 – Zurigo 1955) è il grande romanziere tedesco del Novecento. Figlio di un commerciante e senatore della città anseatica di Lubecca, dopo la morte del padre si trasferì a Monaco. Nel 1929 ricevette il <b>premio Nobel per la letteratura</b>, motivato soprattutto dal suo primo romanzo. Suo fratello <b>Heinrich Mann</b> fu anch'egli scrittore importante (<i>Der Untertan</i>, «Il suddito», satira del Reich guglielmino).</p>
<p>Le opere da conoscere:</p>
<ul>
<li><b>Buddenbrooks. Verfall einer Familie</b> (1901), «Declino di una famiglia»: il romanzo segue per quattro generazioni una dinastia di mercanti di Lubecca. Più l'azienda perde slancio, più i discendenti diventano raffinati, sensibili, malati: Hanno, l'ultimo erede, ama la musica e muore giovanissimo di tifo. È il romanzo del <b>decadere della vitalità borghese</b> a favore di una sensibilità artistica che però «non è fatta per vivere».</li>
<li><b>Tonio Kröger</b> (1903), novella: il protagonista si sente diviso fra il mondo ordinato e «normale» dei borghesi e la vocazione dell'artista. È il nucleo del tema manniano <b>Bürger und Künstler</b> (borghese e artista).</li>
<li><b>Der Tod in Venedig</b> (1912), «La morte a Venezia»: lo scrittore Gustav von Aschenbach, simbolo della disciplina e del decoro, si reca a Venezia, dove si innamora della bellezza del giovane polacco <b>Tadzio</b>. Sotto la superficie ordinata si rivela una passione che lo distrugge; la città è colpita dal colera, e Aschenbach muore. Il film di Luchino Visconti (1971) ha reso celebre il racconto.</li>
<li><b>Der Zauberberg</b> (1924), «La montagna incantata»: il giovane Hans Castorp visita il cugino in un sanatorio svizzero a Davos per tre settimane e vi resta <b>sette anni</b>. È un grande romanzo di formazione e di idee, in cui si scontrano i pensieri dell'umanista Settembrini e del gesuita Naphta; il tempo, la malattia e la morte sono i temi centrali. Termina con lo scoppio della guerra.</li>
</ul>
<p>Mann scrive con uno stile <b>ironico</b>, di periodi lunghi e ben costruiti, e con la tecnica del <b>Leitmotiv</b> imparata da Wagner: certi dettagli (un gesto, una frase, un oggetto) ritornano più volte e acquistano un significato simbolico. Dopo il 1933, come vedremo nelle prossime lezioni, Mann sceglierà l'esilio.</p>`
    },
    {
      type: "example",
      title: "Che cosa vuol dire «Leitmotiv»? Un esempio",
      html: `<p>Nei <i>Buddenbrooks</i> la salute dei personaggi è legata ai <b>denti</b>: nel corso del romanzo i denti di Hanno e di altri discendenti si rovinano e fanno soffrire. Il dettaglio fisico torna e torna, e a poco a poco è chiaro che non si parla solo di dentisti: è un segno della <b>fragilità</b> e del declino della famiglia. Il lettore impara a riconoscere il motivo come si riconosce un tema musicale in un'opera di Wagner.</p>
<p>In <i>Der Tod in Venedig</i>, invece, i motivi ricorrenti sono gli <b>stranieri inquietanti</b> (un viandante all'inizio, un gondoliere senza licenza, un cantante da strada) che annunciano la morte: figure che non si capisce se siano reali o simboliche. Quando ritrovi lo stesso elemento in luoghi diversi del testo, prova a chiederti: che cosa vuole farmi sentire l'autore?</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Thomas Mann",
      questions: [
        { type: "mc", q: "Quale romanzo di Thomas Mann racconta il declino di una famiglia di mercanti di Lubecca?", options: ["Buddenbrooks", "Der Zauberberg", "Der Untertan"], answer: 0, explain: "Buddenbrooks. Verfall einer Familie, 1901." },
        { type: "tf", q: "Thomas Mann ricevette il premio Nobel per la letteratura nel 1929.", answer: true, explain: "Il Nobel gli fu assegnato nel 1929." },
        { type: "mc", q: "Dove si svolge «Der Zauberberg»?", options: ["In un sanatorio a Davos", "In un castello a Praga", "In una nave nel Baltico"], answer: 0, explain: "Hans Castorp resta sette anni in un sanatorio svizzero." },
        { type: "text", q: "Come si chiama il giovane polacco di cui si innamora Aschenbach a Venezia? (una parola)", answer: ["tadzio"], explain: "Tadzio, simbolo della bellezza perfetta." }
      ]
    },
    {
      type: "text",
      title: "3. Vienna: Schnitzler, Hofmannsthal e la psiche",
      html: `<p>Vienna, capitale dell'Impero, è intorno al 1900 un laboratorio di idee: vi lavorano Freud, il compositore Gustav Mahler, il pittore Gustav Klimt, il filosofo Ludwig Wittgenstein, l'architetto Adolf Loos. Gli scrittori della <b>Wiener Moderne</b> sono affascinati dalla <b>psicologia</b> e dall'inconscio.</p>
<p><b>Arthur Schnitzler</b> (Vienna 1862–1931) era un medico, figlio di un laringologo, e portò nella letteratura lo sguardo clinico di chi osserva i sintomi. Le opere principali:</p>
<ul>
<li><b>Leutnant Gustl</b> (1900): una novella scritta quasi interamente come <b>monologo interiore</b>. Il giovane ufficiale Gustl, dopo un concerto, viene insultato da un fornaio; secondo il codice d'onore militare dovrebbe uccidersi, ma tutto ciò che il lettore ascolta sono i suoi pensieri frammentari, la sua paura, la sua vanità. È una critica spietata della società ufficiale austriaca e uno dei primi esempi di monologo interiore in lingua tedesca. Per questa novella Schnitzler perse il grado di ufficiale della riserva.</li>
<li><b>Reigen</b> («Girotondo», scritto nel 1896–97, stampato nel 1900 in forma privata): dieci scene dialogate in cui i personaggi, di ceto diverso, si scambiano come in una catena di incontri amorosi. Mostra l'ipocrisia sociale e la fragilità dei sentimenti; per lungo tempo fu giudicato scandaloso.</li>
<li><b>Fräulein Else</b> (1924): un altro monologo interiore, quello di una ragazza costretta dai genitori a una scelta umiliante per salvare la famiglia dai debiti.</li>
<li><b>Traumnovelle</b> («Doppio sogno», 1926): la coppia borghese di Fridolin e Albertine scopre, attraverso confessioni e sogni, il desiderio nascosto sotto un matrimonio apparentemente sereno. Da essa Stanley Kubrick ha tratto <i>Eyes Wide Shut</i> (1999).</li>
</ul>
<p><b>Hugo von Hofmannsthal</b> (1874–1929), poeta precocissimo, scrisse nel 1902 il celebre <b>Ein Brief</b> («Lettera di Lord Chandos»): un immaginario nobile inglese del Seicento scrive a Francis Bacon che non riesce più a scrivere né a pensare, perché le parole «si sbriciolano in bocca come funghi ammuffiti». È il testo-simbolo della <b>Sprachkrise</b>. Hofmannsthal fu poi librettista di Richard Strauss (<i>Der Rosenkavalier</i>, 1911) e, con Max Reinhardt, fondò nel 1920 il <b>Festival di Salisburgo</b>, dove ancora oggi si rappresenta il suo <i>Jedermann</i> (1911).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il monologo interiore ha un padre letterario?",
      html: `<p>Il monologo interiore (<i>innerer Monolog</i>) è la tecnica che riporta i pensieri del personaggio nel momento in cui nascono, senza il filtro di un narratore. Schnitzler lo conobbe leggendo il romanzo francese <i>Les lauriers sont coupés</i> di <b>Édouard Dujardin</b> (1887) e lo usò in <i>Leutnant Gustl</i> (1900), quindi più di vent'anni prima dell'<i>Ulisse</i> di James Joyce (1922), che lo avrebbe reso universale. Anche in Italia lo usò Svevo ne <i>La coscienza di Zeno</i> (1923), con uno scavo psicologico affine, e Svevo fu in rapporto con la cultura triestina e viennese, dove la psicanalisi circolava.</p>`
    },
    {
      type: "text",
      title: "4. Rainer Maria Rilke: la poesia delle cose",
      html: `<p><b>Rainer Maria Rilke</b> (Praga 1875 – Val-Mont, Svizzera, 1926) è uno dei più grandi poeti europei del Novecento. Nato a Praga da famiglia di lingua tedesca, viaggiò per tutta la vita: Russia con Lou Andreas-Salomé, Worpswede, <b>Parigi</b> (dove fu segretario dello scultore Auguste Rodin), Duino sul mare Adriatico, infine la Svizzera. Soffriva di solitudine e la considerava la condizione necessaria della poesia.</p>
<ul>
<li><b>Das Stunden-Buch</b> («Il libro d'ore», 1905): preghiere in versi a un Dio cercato dentro di sé.</li>
<li><b>Neue Gedichte</b> (1907–08): le «poesie-cosa» (<i>Dinggedichte</i>). Imparando da Rodin a <b>guardare</b> con pazienza, Rilke descrive un oggetto o un animale (una pantera, una fontana romana, un'antica statua di Apollo) come se fosse una scultura, e da essa fa nascere un significato.</li>
<li><b>Die Aufzeichnungen des Malte Laurids Brigge</b> (1910): romanzo-diario di un giovane poeta danese a Parigi, tra angoscia della città e della morte.</li>
<li><b>Duineser Elegien</b> («Elegie duinesi», 1912–1922, pubblicate nel 1923) e <b>Sonette an Orpheus</b> (1923): i grandi cicli dell'ultimo periodo, dedicati all'uomo, all'angelo, alla morte e alla trasformazione.</li>
<li><b>Briefe an einen jungen Dichter</b> («Lettere a un giovane poeta», scritte fra il 1903 e il 1908, pubblicate nel 1929): a chi gli chiede un consiglio sulle proprie poesie, Rilke risponde di guardare dentro di sé e di chiedersi se <i>deve</i> scrivere.</li>
</ul>`
    },
    {
      type: "example",
      title: "Leggere «Der Panther» (1902/1903)",
      html: `<p>La poesia, scritta nel 1902 allo Jardin des Plantes di Parigi e raccolta nei <i>Neue Gedichte</i>, comincia così:</p>
<p style="text-align:center"><i>«Sein Blick ist vom Vorübergehn der Stäbe<br>so müd geworden, dass er nichts mehr hält.<br>Ihm ist, als ob es tausend Stäbe gäbe<br>und hinter tausend Stäben keine Welt.»</i></p>
<p>Traduzione: «Il suo sguardo, dal passare delle sbarre, è diventato così stanco da non trattenere più nulla. Gli sembra che vi siano mille sbarre e dietro le mille sbarre nessun mondo».</p>
<p><b>Osserviamo la tecnica.</b> (1) Il poeta non dice «io sono triste»: descrive lo <i>sguardo</i> dell'animale. (2) La ripetizione di «Stäbe» (sbarre) in versi consecutivi ricrea il movimento ossessivo del felino in gabbia. (3) Il verbo al <b>Konjunktiv</b> «<i>als ob es tausend Stäbe gäbe</i>» (come se ci fossero mille sbarre) riporta una sensazione soggettiva, non un fatto. (4) Gli <b>enjambement</b> e le rime incrociate (<i>Stäbe – hält – gäbe – Welt</i>) suggeriscono una ruota senza fine. Il tema, la <b>perdita del mondo</b> di chi vive in prigionia, vale anche per l'uomo moderno.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… «Herbsttag» è la poesia tedesca più citata?",
      html: `<p>Scritta a Parigi nel 1902, <i>Herbsttag</i> («Giorno d'autunno») comincia con «<i>Herr: es ist Zeit. Der Sommer war sehr groß.</i>» («Signore: è tempo. L'estate è stata grande») e si chiude con un verso che molti tedeschi sanno a memoria: «<i>Wer jetzt kein Haus hat, baut sich keines mehr.</i>» («Chi ora non ha casa, non se la costruirà più»). Bastano tre strofe per dire la maturità, la solitudine e il tempo che passa, senza una sola parola difficile. Se vuoi iniziare a leggere Rilke in originale, parti da qui.</p>`
    },
    {
      type: "decision",
      title: "Come si risponde alla crisi del linguaggio?",
      html: `<p>Sei un giovane scrittore del 1902. Come Lord Chandos, senti che le parole di tutti i giorni («Geist», «Seele», «Körper») ti sembrano vuote. Che cosa fai?</p>`,
      question: "Quale strada scegli?",
      options: [
        { label: "Smetto di scrivere: se il linguaggio non dice la realtà, tanto vale tacere", outcome: "È la strada estrema di Lord Chandos nella finzione di Hofmannsthal. Il silenzio è un tema affascinante, ma non un programma di lavoro: Hofmannsthal stesso continuò invece a scrivere, per il teatro e per la musica." },
        { label: "Guardo le cose con pazienza e le descrivo con precisione, come uno scultore", outcome: "È la via di Rilke e dei Neue Gedichte: al posto delle parole astratte, la concretezza di una pantera, di una statua, di una fontana. La poesia trova il significato nell'oggetto." },
        { label: "Entro nella testa di un personaggio e riporto i suoi pensieri così come arrivano", outcome: "È la strada di Schnitzler e del monologo interiore: il linguaggio diventa flusso di coscienza e mostra ciò che il personaggio stesso non vorrebbe ammettere." }
      ],
      answer: 1,
      explain: "Non c'è una risposta unica: Hofmannsthal la formulò come crisi, Rilke la superò con lo sguardo sulle cose, Schnitzler con l'analisi dei pensieri. Rilke è il poeta che risponde alla Sprachkrise con la concretezza delle cose."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<p><b>Jahrhundertwende</b> (1890–1914): sicurezza esteriore, crisi interiore. <b>Thomas Mann</b>: <i>Buddenbrooks</i> (1901), <i>Tonio Kröger</i> (1903), <i>Der Tod in Venedig</i> (1912), <i>Der Zauberberg</i> (1924), Nobel 1929. <b>Schnitzler</b>: <i>Leutnant Gustl</i> (1900, monologo interiore), <i>Reigen</i>, <i>Traumnovelle</i> (1926). <b>Hofmannsthal</b>: <i>Ein Brief</i> (1902), Sprachkrise. <b>Rilke</b>: <i>Neue Gedichte</i> (1907–08), <i>Duineser Elegien</i> (1923), <i>Sonette an Orpheus</i> (1923), <i>Der Panther</i>, <i>Herbsttag</i>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la Jahrhundertwende",
      intro: "Una letteratura fatta di crisi e di sguardi interiori si capisce meglio con confronti e con immagini.",
      tabs: [
        {
          label: "🖼️ Un'immagine: l'iceberg",
          html: `<p>Pensa a un <b>iceberg</b>. Sopra la superficie, ciò che si vede: il lavoro, le buone maniere, il decoro dell'Impero. Sotto, la parte molto più grande: paure, desideri, pulsioni che Freud chiama <i>inconscio</i>. I narratori dell'epoca (Schnitzler, Mann) scrivono per mostrare la parte nascosta di quell'iceberg.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#e0f2fe"/><rect x="0" y="120" width="600" height="180" fill="#38bdf8" opacity="0.55"/><polygon points="250,120 300,40 350,120" fill="#f8fafc" stroke="#475569" stroke-width="2"/><polygon points="250,120 200,200 240,260 330,270 400,210 350,120" fill="#bae6fd" stroke="#475569" stroke-width="2"/><text x="300" y="25" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Ciò che si vede: decoro, ruolo, parole</text><text x="300" y="180" font-size="15" text-anchor="middle" fill="#0c4a6e">paure, desideri,</text><text x="300" y="202" font-size="15" text-anchor="middle" fill="#0c4a6e">ricordi rimossi</text><text x="300" y="290" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">L'inconscio secondo Freud</text></svg>`
        },
        {
          label: "🇮🇹 Confronto con l'Italia",
          html: `<p>Negli stessi anni anche in Italia la letteratura guarda dentro l'uomo: <b>Pirandello</b> (<i>Il fu Mattia Pascal</i>, 1904) racconta la crisi dell'identità, <b>Svevo</b> (<i>La coscienza di Zeno</i>, 1923) usa la psicanalisi, <b>Pascoli</b> e <b>D'Annunzio</b> sono i poeti del Decadentismo. Rilke e Montale cercano nelle <i>cose</i> (la pantera, il «correlativo oggettivo» di Montale) l'espressione di un'emozione che le parole astratte non rendono.</p>`
        },
        {
          label: "🎴 Flashcard: autori e opere",
          html: `<p>Gira le carte per ripassare.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Buddenbrooks", back: "Thomas Mann, 1901: declino di una famiglia di mercanti di Lubecca" },
              { front: "Der Tod in Venedig", back: "Thomas Mann, 1912: Aschenbach e Tadzio" },
              { front: "Leutnant Gustl", back: "Schnitzler, 1900: monologo interiore di un ufficiale" },
              { front: "Ein Brief (Chandos)", back: "Hofmannsthal, 1902: la crisi del linguaggio" },
              { front: "Der Panther", back: "Rilke, 1902: poesia-cosa nei Neue Gedichte" },
              { front: "Duineser Elegien", back: "Rilke, 1923: il capolavoro dell'ultimo periodo" }
            ]
          }
        }
      ]
    },
    {
      type: "widget",
      title: "Autore e opera",
      widget: "match",
      options: {
        pairs: [
          ["Thomas Mann", "Buddenbrooks"],
          ["Arthur Schnitzler", "Leutnant Gustl"],
          ["Hugo von Hofmannsthal", "Ein Brief (Lord Chandos)"],
          ["Rainer Maria Rilke", "Duineser Elegien"],
          ["Heinrich Mann", "Der Untertan"]
        ]
      },
      caption: "Collega ogni autore alla sua opera."
    },
    {
      type: "conceptMap",
      title: "Mappa della Jahrhundertwende: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "crisi", label: "Crisi dell'io", x: 50, y: 6, color: "#a855f7", html: "Il soggetto non è più padrone di sé.", why: "Nietzsche mette in dubbio i valori tradizionali, Mach riduce l'io a un fascio di sensazioni, Freud scopre l'inconscio: dopo di loro l'uomo non può più credersi del tutto razionale e unitario." },
        { id: "mann", label: "Thomas Mann", x: 14, y: 40, color: "#2563eb", html: "Borghesia, arte, decadenza.", why: "Mann legge Schopenhauer, Nietzsche e Wagner e li usa per mostrare come la vitalità della borghesia si trasformi in sensibilità e malattia; il suo ideale è un equilibrio fra vita e spirito." },
        { id: "schn", label: "Schnitzler", x: 38, y: 42, color: "#d97706", html: "Monologo interiore, Vienna.", why: "Medico e lettore di Freud, Schnitzler analizza i meccanismi psicologici dei suoi personaggi; la società viennese, fondata su onore e apparenze, gli offre il materiale per la critica." },
        { id: "hof", label: "Hofmannsthal", x: 62, y: 42, color: "#0ea5e9", html: "Sprachkrise, teatro e musica.", why: "Dopo la poesia giovanile, Hofmannsthal sente che il linguaggio non basta e lo ritrova nel teatro e nell'opera lirica, cioè in forme in cui la parola si unisce a gesto e musica." },
        { id: "rilke", label: "Rilke", x: 86, y: 42, color: "#16a34a", html: "Poesia-cosa, solitudine, trasformazione.", why: "L'incontro con Rodin a Parigi (1902) insegna a Rilke che il lavoro dell'artista è osservare; con la guerra e le crisi personali arriva poi alla poesia metafisica delle Elegie." },
        { id: "fine", label: "1914", x: 50, y: 76, color: "#dc2626", html: "La guerra chiude un'epoca.", why: "La Prima guerra mondiale distrugge l'ordine dell'Impero e fa apparire ingenua la sicurezza del secolo precedente: è il punto di partenza dell'Espressionismo e delle avanguardie." }
      ],
      edges: [
        ["crisi", "mann", "decadenza"],
        ["crisi", "schn", "psiche"],
        ["crisi", "hof", "linguaggio"],
        ["crisi", "rilke", "sguardo"],
        ["crisi", "fine", "esito"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Schnitzler e Rilke",
      questions: [
        { type: "mc", q: "Quale tecnica narrativa usa Schnitzler in «Leutnant Gustl»?", options: ["Il monologo interiore", "La narrazione in cornice", "Il diario epistolare"], answer: 0, explain: "Il lettore segue i pensieri del protagonista in presa diretta." },
        { type: "tf", q: "Rilke fu per un periodo segretario dello scultore Rodin a Parigi.", answer: true, explain: "Da Rodin imparò a osservare le cose con pazienza: da qui i Neue Gedichte." },
        { type: "mc", q: "Come si chiamano le poesie di Rilke che descrivono animali e oggetti come sculture?", options: ["Dinggedichte (poesie-cosa)", "Zeitgedichte", "Lieder"], answer: 0, explain: "Dinggedichte: poesie dedicate a una «cosa» (Ding)." },
        { type: "mc", q: "Qual è il tema principale di «Ein Brief» di Hofmannsthal?", options: ["La crisi del linguaggio", "La guerra di Troia", "L'unità tedesca"], answer: 0, explain: "Lord Chandos non riesce più a esprimersi con le parole: Sprachkrise." }
      ]
    }
  ],
  glossary: [
    { t: "Jahrhundertwende", d: "La «svolta del secolo» (circa 1890–1914), epoca di crisi e di rinnovamento." },
    { t: "Wiener Moderne", d: "Gruppo di scrittori viennesi attorno al 1900 (Schnitzler, Hofmannsthal, Bahr)." },
    { t: "Sprachkrise", d: "Crisi del linguaggio: le parole non sembrano più capaci di dire la realtà." },
    { t: "Innerer Monolog", d: "Monologo interiore: i pensieri del personaggio riportati senza narratore." },
    { t: "Dinggedicht", d: "Poesia-cosa: poesia che descrive con precisione un oggetto o un animale (Rilke)." },
    { t: "Verfall", d: "Declino, decadenza: parola chiave dei Buddenbrooks." },
    { t: "Leitmotiv", d: "Motivo conduttore che ritorna nell'opera (tecnica presa da Wagner)." },
    { t: "Bürger und Künstler", d: "«Borghese e artista»: il contrasto al centro di Tonio Kröger." },
    { t: "Décadence", d: "Gusto per la fine di un mondo, la malattia, la raffinatezza stanca." },
    { t: "Traum", d: "Sogno: in Freud e in Schnitzler è una via verso l'inconscio." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa indica il termine «Jahrhundertwende»?", options: ["La svolta fra Ottocento e Novecento", "La fine della guerra dei trent'anni", "Una poesia di Rilke"], answer: 0, explain: "Il periodo circa 1890–1914, di crisi e di rinnovamento." },
      { type: "mc", q: "Di chi è «Buddenbrooks. Verfall einer Familie» (1901)?", options: ["Thomas Mann", "Arthur Schnitzler", "Franz Kafka"], answer: 0, explain: "È il primo grande romanzo di Thomas Mann." },
      { type: "tf", q: "In «Der Tod in Venedig» il protagonista Aschenbach muore a Venezia durante un'epidemia di colera.", answer: true, explain: "La passione per Tadzio e il colera si intrecciano nel finale." },
      { type: "text", q: "Qual è il titolo tedesco del romanzo di Mann ambientato in un sanatorio di Davos? (due parole)", answer: ["der zauberberg", "zauberberg"], explain: "Der Zauberberg, 1924." },
      { type: "mc", q: "Quale tecnica caratterizza «Leutnant Gustl»?", options: ["Monologo interiore", "Narratore onnisciente classico", "Dialogo teatrale"], answer: 0, explain: "È quasi interamente il flusso dei pensieri di Gustl." },
      { type: "mc", q: "Chi scrisse la «Lettera di Lord Chandos» (1902)?", options: ["Hofmannsthal", "Rilke", "Brecht"], answer: 0, explain: "Ein Brief, testo-simbolo della Sprachkrise." },
      { type: "order", q: "Metti in ordine cronologico:", items: ["Leutnant Gustl", "Buddenbrooks", "Der Tod in Venedig", "Duineser Elegien (pubblicate)"], explain: "Gustl 1900, Buddenbrooks 1901, Tod in Venedig 1912, Elegien 1923." },
      { type: "mc", q: "Che cosa significa «Dinggedicht»?", options: ["Poesia che descrive un oggetto come una scultura", "Poesia d'amore popolare", "Inno politico"], answer: 0, explain: "Tipica dei Neue Gedichte di Rilke (Der Panther)." },
      { type: "tf", q: "«Wer jetzt kein Haus hat, baut sich keines mehr» è un verso di «Herbsttag» di Rilke.", answer: true, explain: "È l'ultima strofa di Herbsttag (1902)." },
      { type: "mc", q: "Quale pensatore, attivo a Vienna, influenzò gli scrittori con la teoria dell'inconscio?", options: ["Sigmund Freud", "Immanuel Kant", "Karl Marx"], answer: 0, explain: "Freud, autore dell'Interpretazione dei sogni (1899/1900)." }
    ]
  }
});
