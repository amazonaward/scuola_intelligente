TOPIC('it', {
  id: "l5-spa-guerra-civil",
  title: "Guerra civile e dopoguerra",
  intro: "Tra il <b>1936</b> e il <b>1939</b> la Spagna vive una guerra che divide famiglie, città e intellettuali; poi arriva la <b>dittatura di Franco</b>, che dura fino al 1975. Che cosa significa scrivere in un Paese con la censura? E che cosa significa scrivere lontano da casa, in esilio? In questa lezione vedrai come la letteratura spagnola attraversa la guerra (Miguel Hernández), il dopoguerra (Cela, Laforet, Delibes, Buero Vallejo) e l'<b>esilio</b> (Alberti, Cernuda, Max Aub, Juan Ramón Jiménez). Leggerai brani in spagnolo e capirai perché il «tremendismo» e la «poesia social» sono la voce di un Paese ferito. 🕯️📖",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. La Guerra civile (1936-1939) in sintesi",
      html: `<p>Nel <b>1931</b> la Spagna diventa una <b>Repubblica</b> (la Seconda), con riforme sociali, voto alle donne (1931), laicità, autonomie regionali; ma il Paese è polarizzato fra conservatori, Chiesa ed esercito da una parte, operai, contadini, anarchici e socialisti dall'altra. Nelle elezioni del <b>febbraio 1936</b> vince il <b>Frente Popular</b>.</p>
<p>Il <b>17-18 luglio 1936</b> una parte dell'esercito (tra i generali <b>Francisco Franco</b>, Mola, Sanjurjo) si ribella contro il governo repubblicano. Il colpo di stato fallisce in parte e si trasforma in una <b>guerra civile</b>:</p>
<ul>
<li>da una parte i <b>nazionalisti</b> (o «sublevados»), appoggiati dalla Germania nazista e dall'Italia fascista;</li>
<li>dall'altra i <b>repubblicani</b>, aiutati dall'URSS e dalle <b>Brigate Internazionali</b> (volontari da molti Paesi, fra cui l'Italia antifascista); le democrazie europee scelsero la «non intervenzione».</li>
</ul>
<p>Eventi simbolo: l'assedio di <b>Madrid</b> (1936), il bombardamento di <b>Guernica</b> (26 aprile 1937, da parte dell'aviazione tedesca e italiana; Picasso ne trae il celebre dipinto, esposto a Parigi nello stesso 1937), la battaglia dell'<b>Ebro</b> (1938). La guerra finisce il <b>1° aprile 1939</b> con la vittoria di Franco, che governa come <b>Caudillo</b> fino alla morte, il <b>20 novembre 1975</b>.</p>
<p>La guerra costò centinaia di migliaia di morti, ci furono fucilazioni e repressioni da entrambe le parti, e dopo la vittoria una lunga <b>repressione</b>: carcere, lavori forzati, esecuzioni e <b>esilio</b> di mezzo milione di persone verso la Francia, il Messico, l'Argentina, il Cile e altri Paesi.</p>`
    },
    {
      type: "3d",
      title: "La Spagna in guerra: luoghi e tempi",
      scene: "spacetime",
      caption: "La base è la carta della Spagna, l'altezza è il tempo (1936-1975). Tocca gli eventi per vedere cause ed effetti.",
      options: {
        lat: [35.5, 44],
        lon: [-10, 4],
        years: [1936, 1975],
        places: [
          { lat: 40.42, lon: -3.7, label: "Madrid" },
          { lat: 41.39, lon: 2.17, label: "Barcelona" },
          { lat: 37.39, lon: -5.99, label: "Sevilla" },
          { lat: 40.97, lon: -5.66, label: "Salamanca" },
          { lat: 43.32, lon: -2.68, label: "Guernica" },
          { lat: 42.4, lon: 3.0, label: "Collioure" }
        ],
        events: [
          { id: "e1", lat: 40.42, lon: -3.7, year: 1936, label: "Colpo di stato e inizio della guerra (luglio 1936)", html: "Una parte dell'esercito si ribella alla Repubblica. Il fallimento parziale del golpe provoca la guerra civile." },
          { id: "e2", lat: 43.32, lon: -2.68, year: 1937, label: "Bombardamento di Guernica (26 aprile 1937)", html: "L'aviazione tedesca e italiana bombarda la città basca: Picasso dipinge il «Guernica».", causes: ["e1"] },
          { id: "e3", lat: 40.42, lon: -3.7, year: 1939, label: "Fine della guerra (1° aprile 1939)", html: "Vittoria di Franco: inizia la dittatura. Comincia l'esilio di massa.", causes: ["e2"] },
          { id: "e4", lat: 42.4, lon: 3.0, year: 1939, label: "Machado muore a Collioure (22 febbraio 1939)", html: "Il poeta lascia la Spagna con la madre e muore pochi giorni dopo l'arrivo in Francia.", causes: ["e1"] },
          { id: "e5", lat: 40.42, lon: -3.7, year: 1951, label: "Pubblicazione de «La colmena» (Buenos Aires)", html: "Il romanzo di Cela circola prima in Argentina perché la censura lo bloccò in Spagna.", causes: ["e3"] },
          { id: "e6", lat: 40.42, lon: -3.7, year: 1975, label: "Morte di Franco (20 novembre 1975)", html: "Fine della dittatura: comincia la transizione alla democrazia.", causes: ["e3"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Letteratura in guerra: Miguel Hernández",
      html: `<p><b>Miguel Hernández</b> (Orihuela 1910 – Alicante 1942) è il «poeta soldato». Figlio di un pastore di capre, quasi autodidatta, entra nell'ambiente letterario di Madrid; amico di Neruda e Aleixandre. Con la guerra si arruola nell'esercito repubblicano, scrive versi per i soldati (<i>Viento del pueblo</i>, 1937; <i>El hombre acecha</i>) e partecipa a recital al fronte.</p>
<p>Nel 1936 aveva pubblicato <b><i>El rayo que no cesa</i></b>, una raccolta di sonetti d'amore e dolore ispirata a Quevedo e a Garcilaso. Dopo la guerra viene arrestato, condannato a morte, poi la pena viene commutata in trent'anni; <b>muore di tubercolosi nel carcere di Alicante nel 1942</b>, a 31 anni.</p>
<p>Dal carcere scrive le <b>«Nanas de la cebolla»</b> (1939), una ninna nanna per il figlio piccolo, che aveva ricevuto una lettera della moglie Josefina: a casa mangiavano solo pane e cipolla. Il verso più celebre è «<i>La cebolla es escarcha / cerrada y pobre</i>»; e ancora, «<i>Alondra de mi casa, / ríete mucho</i>». Una poesia tenera e durissima: il dolore trasformato in canto.</p>`
    },
    {
      type: "example",
      title: "Esempio: una poesia di prigionia",
      html: `<p>Leggi il tema e la forma di un brano delle <b>Nanas de la cebolla</b>:</p>
<blockquote><i>La cebolla es escarcha<br>cerrada y pobre:<br>escarcha de tus días<br>y de mis noches.</i></blockquote>
<p><b>Come si legge</b>:</p>
<ul>
<li><b>Metro</b>: versi brevi (di cinque o sei sillabe), ritmo di ninna nanna: ripetitivo, semplice, quasi da bambino.</li>
<li><b>Immagine</b>: la <b>cipolla</b> è simbolo di miseria, ma anche di lacrime («escarcha» = brina). Un alimento povero diventa figura poetica.</li>
<li><b>Contrasto</b>: la forma gentile (una nanna) contrasta con il contenuto crudele (la fame del bambino).</li>
<li><b>Voce</b>: il padre prigioniero parla al figlio e alla moglie; il «tú» e l'«io» sono vicini, nella sofferenza.</li>
</ul>
<p>È un esempio di <b>poesia sociale e umana</b>: non cerca l'effetto sofisticato, ma la verità del sentimento.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: guerra e poesia",
      questions: [
        { type: "mc", q: "In quale anno finì la Guerra civile spagnola?", options: ["1939", "1936", "1945"], answer: 0, explain: "Il 1° aprile 1939 Franco annuncia la vittoria." },
        { type: "tf", q: "Miguel Hernández morì in carcere nel 1942.", answer: true, explain: "Morì di tubercolosi nel carcere di Alicante, a 31 anni." },
        { type: "mc", q: "Quale opera di Miguel Hernández è una ninna nanna dal carcere?", options: ["Nanas de la cebolla", "El rayo que no cesa", "Viento del pueblo"], answer: 0, explain: "Le scrisse nel 1939 per il figlio." }
      ]
    },
    {
      type: "text",
      title: "3. Il dopoguerra: censura e silenzio",
      html: `<p>Con la vittoria di Franco la cultura spagnola cambia volto. Molti dei migliori scrittori sono morti (Lorca, Machado, Hernández, Unamuno) o in esilio. Nel Paese comanda la <b>censura</b>: ogni libro, giornale, film o spettacolo deve ottenere un permesso preventivo, e sono vietati i temi politici, religiosi, sessuali o storici sgraditi al regime. I giovani scrittori devono trovare strade indirette: simbolo, allusione, ambientazioni «neutre», realismo crudo.</p>
<p>Gli anni del <b>dopoguerra</b> (anni Quaranta) sono segnati da <b>fame, miseria, paura</b>. Per questo la letteratura fa i conti con un mondo violento e disperato, e nascono due tendenze:</p>
<ul>
<li>il <b>tremendismo</b>: realismo crudo, personaggi marginali e violenti (<i>La familia de Pascual Duarte</i>);</li>
<li>il <b>realismo esistenziale</b> e sociale: la vita quotidiana di persone comuni (<i>Nada</i>, <i>La colmena</i>, <i>El camino</i>).</li>
</ul>
<p>La poesia si divide: da una parte una poesia «arraigada», legata a Dio, patria e armonia (Luis Rosales, Leopoldo Panero); dall'altra una poesia <b>«desarraigada»</b> e angosciata, come <i>Hijos de la ira</i> (1944) di <b>Dámaso Alonso</b>, che si apre con il celebre verso «<i>Madrid es una ciudad de más de un millón de cadáveres</i>». Più tardi, negli anni Cinquanta, si afferma la <b>poesía social</b> di <b>Blas de Otero</b> e <b>Gabriel Celaya</b>: «<i>La poesía es un arma cargada de futuro</i>» (Celaya, 1955).</p>`
    },
    {
      type: "example",
      title: "Esempio: «La familia de Pascual Duarte»",
      html: `<p>Il romanzo <b>La familia de Pascual Duarte</b> (1942) di <b>Camilo José Cela</b> (Padrón, Galizia, 1916 – Madrid 2002; <b>Premio Nobel 1989</b>) è il primo grande testo del dopoguerra. Racconta in prima persona la vita di Pascual, un contadino estremeño segnato da miseria e violenza: uccide il cane, il padre del suo nemico, la madre. Scrive la sua storia in carcere, in attesa dell'esecuzione.</p>
<p><b>Perché è «tremendista»?</b></p>
<ul>
<li>Il linguaggio è <b>crudo</b>, ma Pascual si giustifica, lo senti ingenuo e sincero: il lettore è disturbato, non solo scandalizzato.</li>
<li>Descrive un <b>mondo rurale brutale</b> senza abbellirlo: il «<i>tremendo</i>» è il quotidiano.</li>
<li>La censura lo accoglie con diffidenza, ma il libro ha un successo enorme.</li>
</ul>
<p>Il secondo grande romanzo di Cela, <b>La colmena</b> (1951, pubblicato a Buenos Aires perché la censura spagnola lo bloccò), mostra la vita di Madrid nel 1943 attraverso <b>oltre trecento personaggi</b> in pochi giorni: un «alveare» di persone affamate, tristi, umili, che si incrociano nei caffè. È un romanzo «corale», senza protagonista, che ricorda tecniche cinematografiche.</p>`
    },
    {
      type: "svg",
      title: "Mappa della letteratura spagnola dopo il 1936",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Tre strade dopo il 1936</text>
<rect x="20" y="50" width="170" height="210" rx="12" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
<text x="105" y="78" font-size="16" text-anchor="middle" fill="#991b1b" font-weight="bold">Dentro la Spagna</text>
<text x="105" y="108" font-size="14" text-anchor="middle" fill="#1e293b">Censura e miseria</text>
<text x="105" y="134" font-size="14" text-anchor="middle" fill="#1e293b">Cela, Laforet, Delibes</text>
<text x="105" y="160" font-size="14" text-anchor="middle" fill="#1e293b">Tremendismo,</text>
<text x="105" y="182" font-size="14" text-anchor="middle" fill="#1e293b">realismo sociale</text>
<text x="105" y="214" font-size="14" text-anchor="middle" fill="#991b1b">Buero Vallejo (teatro)</text>
<rect x="215" y="50" width="170" height="210" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="300" y="78" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">In esilio</text>
<text x="300" y="108" font-size="14" text-anchor="middle" fill="#1e293b">Francia, Messico,</text>
<text x="300" y="130" font-size="14" text-anchor="middle" fill="#1e293b">Argentina, USA</text>
<text x="300" y="160" font-size="14" text-anchor="middle" fill="#1e293b">Alberti, Cernuda,</text>
<text x="300" y="182" font-size="14" text-anchor="middle" fill="#1e293b">Max Aub, J. R. Jiménez</text>
<text x="300" y="214" font-size="14" text-anchor="middle" fill="#1e3a8a">Nostalgia e memoria</text>
<rect x="410" y="50" width="170" height="210" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
<text x="495" y="78" font-size="16" text-anchor="middle" fill="#92400e" font-weight="bold">In poesia</text>
<text x="495" y="108" font-size="14" text-anchor="middle" fill="#1e293b">Poesia «desarraigada»</text>
<text x="495" y="134" font-size="14" text-anchor="middle" fill="#1e293b">(Dámaso Alonso)</text>
<text x="495" y="164" font-size="14" text-anchor="middle" fill="#1e293b">Poesia social</text>
<text x="495" y="186" font-size="14" text-anchor="middle" fill="#1e293b">(Celaya, Blas de Otero)</text>
<text x="495" y="218" font-size="14" text-anchor="middle" fill="#92400e">«Arma cargada de futuro»</text>
</svg>`,
      caption: "La letteratura spagnola dopo la guerra si divide fra chi resta, chi parte e chi sceglie la poesia sociale."
    },
    {
      type: "text",
      title: "4. L'esilio: la «España peregrina»",
      html: `<p>Fra il 1936 e il 1939 e subito dopo, circa <b>mezzo milione</b> di spagnoli lascia il Paese. Fu uno degli esili più grandi del Novecento europeo e coinvolse gran parte degli intellettuali della Repubblica. I poeti e scrittori finirono in Francia (molti internati nei campi), in Messico (il presidente Lázaro Cárdenas offrì asilo), in Argentina, Cile, Cuba, Stati Uniti.</p>
<ul>
<li><b>Juan Ramón Jiménez</b> (Moguer 1881 – San Juan, Porto Rico, 1958): vive a Cuba, USA e Porto Rico. Premio Nobel <b>1956</b>.</li>
<li><b>Rafael Alberti</b> (Cádiz 1902 – 1999): esule in Argentina e a Roma; tornerà in Spagna nel 1977, dopo la morte del dittatore.</li>
<li><b>Luis Cernuda</b> (Siviglia 1902 – Città del Messico 1963): esule in Gran Bretagna, USA e Messico; <i>Ocnos</i> è un libro di prosa poetica sulla città natale perduta.</li>
<li><b>Max Aub</b> (Parigi 1903 – Città del Messico 1972): scrisse in spagnolo la serie <i>El laberinto mágico</i> (sei romanzi sulla guerra).</li>
<li><b>Rosa Chacel</b>, <b>María Zambrano</b> (filosofa), <b>León Felipe</b>, <b>Pedro Salinas</b>, <b>Jorge Guillén</b>.</li>
<li><b>Antonio Machado</b>, che attraversò i Pirenei in condizioni disperate e morì a Collioure il 22 febbraio 1939 con in tasca – dicono – un verso scritto a matita: «<i>Estos días azules y este sol de la infancia</i>». Fu il suo ultimo verso.</li>
</ul>
<p>Il tema dominante è la <b>nostalgia</b> della patria e la domanda sull'<b>identità</b>: che cosa sono, se scrivo in una lingua che non è più parlata intorno a me? Ma l'esilio ha anche portato la cultura spagnola nelle Americhe: molti esuli fecero crescere università, case editrici, riviste (a Città del Messico nasce il <i>Colegio de México</i>, e la <i>Casa de España</i>).</p>`
    },
    {
      type: "decision",
      title: "Restare o partire?",
      html: `<p>Siamo nel <b>gennaio 1939</b>. Sei un poeta o un insegnante repubblicano. Le truppe di Franco avanzano in Catalogna; la caduta della Repubblica è vicina. Ti aspettano probabilmente carcere, processo o addirittura la fucilazione se resti; se parti, ti attende l'esilio, la perdita di casa, lingua, lavoro.</p>`,
      question: "Che cosa avresti scelto?",
      options: [
        { label: "Restare e nascondersi", outcome: "Molti scelsero questa strada (era difficile partire): per anni vissero nel silenzio o nell'«exilio interior», cioè in esilio dentro il proprio Paese." },
        { label: "Partire verso la Francia o l'America", outcome: "Scelsero questa via centinaia di migliaia di persone, fra cui Alberti, Cernuda, Machado: la cultura spagnola nacque «altrove» per decenni." },
        { label: "Tentare la fuga e rischiare l'arresto", outcome: "È ciò che accadde a Miguel Hernández: arrestato mentre tentava di passare in Portogallo, poi processato; morì in carcere nel 1942." }
      ],
      answer: 1,
      explain: "Non c'era una risposta «giusta»: ciascuno scelse in base ai rischi. Molti partirono e portarono la letteratura spagnola in Messico, Argentina, Cile e altrove; chi restò visse spesso nel silenzio. Capire entrambi i destini è fondamentale per leggere gli autori della seconda metà del Novecento."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Guernica di Picasso",
      html: `<p>Il quadro <b>Guernica</b> (1937, 349 × 776 cm) fu dipinto da <b>Pablo Picasso</b> a Parigi per il padiglione spagnolo dell'Esposizione Universale. Picasso lo volle «in deposito» lontano dalla Spagna finché non fosse tornata la democrazia: oggi si trova a Madrid, al <i>Museo Reina Sofía</i>, dal 1992 (fu a New York al MoMA dal 1939 al 1981). È diventato un simbolo universale contro la guerra.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Nada di Carmen Laforet",
      html: `<p>La giovane <b>Carmen Laforet</b> (1921-2004) vinse con <i>Nada</i> il primo <b>Premio Nadal</b> (1944, assegnato nel gennaio 1945), a soli 23 anni. Il romanzo racconta Andrea, studentessa a Barcellona, nella casa di una famiglia opprimente e povera: un ritratto della Spagna postbellica visto da una giovane donna. Il titolo «nada» (niente) esprime un vuoto esistenziale e storico.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la letteratura sotto censura",
      intro: "Come si scrive quando non si può dire tutto? Prova queste strade.",
      tabs: [
        {
          label: "🎬 Con il cinema",
          html: `<p>Pensa a un film con un personaggio che non dice mai ciò che prova: lo si capisce dai silenzi, dai gesti, dall'ambiente. La letteratura del dopoguerra funziona così: <i>La colmena</i> usa tante scene brevi, come inquadrature. Il censore leggeva solo le parole, ma il lettore capiva il resto.</p>`
        },
        {
          label: "🧩 Con il codice",
          html: `<p>Immagina di dover scrivere un messaggio in un linguaggio «cifrato». Gli autori parlavano di <b>simboli</b> (la nebbia, il carcere, il silenzio) per dire la realtà senza nominarla. Il lettore decifrava. Anche oggi, nei regimi autoritari, avviene la stessa cosa.</p>`
        },
        {
          label: "🧳 Con l'esperienza dell'esilio",
          html: `<p>Pensa a una persona che lascia il suo Paese e conserva solo una lingua e una memoria. Che cosa porterebbe con sé? I poeti dell'esilio scrivono di una patria «immaginata», fatta di ricordi (patio, mare, voci). Per capirli, confronta questa esperienza con quella dei migranti di oggi.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: guerra, censura, esilio",
      nodes: [
        { id: "guerra", label: "Guerra civile 1936-39", x: 50, y: 8, color: "#dc2626", html: "Colpo di stato di luglio 1936; vittoria di Franco nel 1939.", why: "La Repubblica non regge alla ribellione di una parte dell'esercito, sostenuta da fascismi europei; la comunità internazionale non interviene." },
        { id: "dittatura", label: "Dittatura e censura", x: 15, y: 45, color: "#0f172a", html: "Franco governa fino al 1975.", why: "Il regime controlla la cultura con la censura preventiva: i libri vengono tagliati o vietati, e la lingua catalana, basca, galiziana è repressa nello spazio pubblico." },
        { id: "esilio", label: "Esilio", x: 85, y: 45, color: "#2563eb", html: "Circa mezzo milione di persone lascia il Paese.", why: "Chi aveva servito la Repubblica rischia carcere o morte: l'esilio diventa l'unica via per continuare a scrivere liberamente." },
        { id: "tremendismo", label: "Tremendismo e realismo", x: 12, y: 78, color: "#f59e0b", html: "Cela, Laforet, Delibes.", why: "Il realismo crudo è un modo di raccontare la miseria senza nominare il regime, e di fare i conti con una società ferita." },
        { id: "poesiasocial", label: "Poesia social", x: 50, y: 85, color: "#16a34a", html: "Celaya, Blas de Otero.", why: "Negli anni Cinquanta nasce l'idea che la poesia debba essere utile: dare voce al popolo, non solo cercare bellezza." },
        { id: "memoria", label: "Memoria nelle Americhe", x: 88, y: 80, color: "#a855f7", html: "Scrittori e editori spagnoli in Messico e Argentina.", why: "L'esilio trasforma l'America ispanica in un luogo di ricostruzione della cultura spagnola, poi favorisce il «boom»." }
      ],
      edges: [
        ["guerra", "dittatura", "porta a"],
        ["guerra", "esilio", "provoca"],
        ["dittatura", "tremendismo", "condiziona"],
        ["dittatura", "poesiasocial", "reazione"],
        ["esilio", "memoria", "crea"]
      ]
    },
    {
      type: "text",
      title: "5. Narrativa, poesia e teatro tra gli anni Quaranta e Sessanta",
      html: `<p>Un breve percorso per autori e titoli:</p>
<ul>
<li><b>Miguel Delibes</b> (Valladolid 1920-2010): <i>El camino</i> (1950), il ragazzo Daniel che sta per lasciare il villaggio per studiare in città e ripensa all'infanzia; poi <i>Los santos inocentes</i> (1981), sul mondo contadino oppresso dai latifondisti.</li>
<li><b>Carmen Laforet</b>: <i>Nada</i> (1944).</li>
<li><b>Camilo José Cela</b>: <i>Pascual Duarte</i> (1942), <i>La colmena</i> (1951); Nobel 1989 e Premio Cervantes 1995.</li>
<li><b>Luis Martín-Santos</b>: <i>Tiempo de silencio</i> (1962), svolta sperimentale nella narrativa spagnola, con influssi di Joyce.</li>
<li><b>Teatro</b>: <b>Antonio Buero Vallejo</b> con <i>Historia de una escalera</i> (1949), la storia di tre generazioni di vicini di una scala di condominio povero; e <b>Alfonso Sastre</b>.</li>
<li><b>Poesia</b>: <b>Blas de Otero</b> (<i>Pido la paz y la palabra</i>, 1955), <b>Gabriel Celaya</b>, <b>José Hierro</b>, <b>Gloria Fuertes</b> (poesia semplice e umana, famosa anche tra i bambini).</li>
</ul>
<p>Il <b>cinema</b> accompagna la letteratura: pensa a <i>Viridiana</i> di Buñuel (1961) o a <i>El espíritu de la colmena</i> di Víctor Erice (1973), ambientato proprio nel 1940, ancora oggi una riflessione sul silenzio imposto dopo la guerra.</p>
<p>Dopo il 1975 la <b>Transizione</b> porta democrazia (Costituzione del <b>1978</b>), libertà di stampa, ritorno degli esuli (Alberti nel 1977) e il fenomeno della <b>«memoria histórica»</b>: scrittori, storici e cineasti riscoprono il passato, spesso con una legge dedicata (la Ley de Memoria Histórica del 2007).</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>1936</b>: colpo di stato (luglio), inizia la Guerra civile. <b>1939</b>: vittoria di Franco. <b>1975</b>: morte di Franco.</li>
<li><b>Miguel Hernández</b>: poeta soldato, <i>Nanas de la cebolla</i>, morto in carcere nel 1942.</li>
<li><b>Cela</b>: <i>Pascual Duarte</i> (1942, tremendismo), <i>La colmena</i> (1951); Nobel 1989.</li>
<li><b>Laforet</b>: <i>Nada</i> (1944). <b>Delibes</b>: <i>El camino</i>. <b>Buero Vallejo</b>: <i>Historia de una escalera</i> (1949).</li>
<li><b>Esilio</b>: Alberti, Cernuda, Max Aub, Juan Ramón Jiménez (Nobel 1956), Machado morto a Collioure (1939).</li>
<li><b>Poesía social</b>: «La poesía es un arma cargada de futuro» (Celaya).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: dopoguerra ed esilio",
      questions: [
        { type: "mc", q: "Che cos'è il «tremendismo»?", options: ["Una tendenza narrativa che mostra una realtà cruda e violenta", "Un metro poetico", "Un movimento della Repubblica"], answer: 0, explain: "Il termine nasce dopo la Familia de Pascual Duarte." },
        { type: "tf", q: "La colmena fu pubblicata per la prima volta a Buenos Aires.", answer: true, explain: "Nel 1951 la censura spagnola ne impedì la pubblicazione." },
        { type: "mc", q: "Dove morì Antonio Machado?", options: ["Collioure, in Francia", "Madrid", "Buenos Aires"], answer: 0, explain: "Il 22 febbraio 1939, poco dopo aver passato la frontiera." },
        { type: "text", q: "Come si chiama il bombardamento che ispirò il dipinto di Picasso del 1937?", answer: ["guernica", "il bombardamento di guernica"], explain: "Il 26 aprile 1937 la città basca fu bombardata." }
      ]
    }
  ],
  glossary: [
    { t: "Frente Popular", d: "Coalizione di sinistra che vince le elezioni del febbraio 1936." },
    { t: "Caudillo", d: "Titolo con cui Franco governò la Spagna fino al 1975." },
    { t: "Brigate Internazionali", d: "Volontari stranieri che combatterono con i repubblicani." },
    { t: "Censura", d: "Controllo preventivo di libri, giornali, film e teatro da parte del regime." },
    { t: "Tremendismo", d: "Tendenza narrativa del dopoguerra che mostra una realtà cruda, violenta." },
    { t: "Poesía social", d: "Poesia degli anni Cinquanta che vuole parlare al popolo e denunciare." },
    { t: "Exilio interior", d: "Condizione di chi resta in Spagna ma vive nel silenzio o in disparte." },
    { t: "Nanas", d: "Ninne nanne; «Nanas de la cebolla» è una ninna nanna di Miguel Hernández." },
    { t: "Guernica", d: "Cittadina basca bombardata nel 1937; dà il nome al quadro di Picasso." },
    { t: "Transición", d: "Passaggio dalla dittatura alla democrazia dopo il 1975." },
    { t: "Memoria histórica", d: "Recupero del ricordo delle vittime della guerra e della dittatura." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In che anno iniziò la Guerra civile spagnola?", options: ["1936", "1931", "1939"], answer: 0, explain: "Il colpo di stato è del 17-18 luglio 1936." },
      { type: "mc", q: "Quale autore scrisse La familia de Pascual Duarte?", options: ["Camilo José Cela", "Miguel Delibes", "Carmen Laforet"], answer: 0, explain: "Cela la pubblicò nel 1942." },
      { type: "tf", q: "Miguel Hernández scrisse le Nanas de la cebolla dal carcere.", answer: true, explain: "Le scrisse nel 1939 per il suo bambino." },
      { type: "mc", q: "Quale premio ottenne Juan Ramón Jiménez nel 1956?", options: ["Il Nobel per la letteratura", "Il premio Nadal", "Il Cervantes"], answer: 0, explain: "Il Nobel fu assegnato mentre viveva in esilio a Porto Rico." },
      { type: "text", q: "Come si chiama l'autore di «Nada», premio Nadal 1944?", answer: ["carmen laforet", "laforet"], explain: "Carmen Laforet aveva appena 23 anni." },
      { type: "mc", q: "Quale frase è associata alla poesia sociale degli anni Cinquanta?", options: ["La poesía es un arma cargada de futuro", "Verde que te quiero verde", "Caminante, no hay camino"], answer: 0, explain: "È di Gabriel Celaya." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Colpo di stato (1936)", "Bombardamento di Guernica (1937)", "Vittoria di Franco (1939)", "Morte di Franco (1975)"], explain: "Dal golpe alla fine della dittatura." },
      { type: "tf", q: "Dopo la guerra la censura permetteva di pubblicare liberamente qualsiasi opera.", answer: false, explain: "Era preventiva e molto severa." },
      { type: "mc", q: "Dove si trova oggi il Guernica di Picasso?", options: ["Museo Reina Sofía di Madrid", "Museo del Prado di Madrid", "MoMA di New York"], answer: 0, explain: "È a Madrid dal 1992 (prima fu al MoMA)." },
      { type: "mc", q: "Qual è il tema centrale di Historia de una escalera di Buero Vallejo?", options: ["Le speranze frustrate di tre generazioni di vicini", "Una battaglia navale", "La vita di un re"], answer: 0, explain: "Il teatro di Buero Vallejo rappresenta con realismo la vita di gente comune." }
    ]
  }
});
