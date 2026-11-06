TOPIC('it', {
  id: "p3-ita-fiaba-favola",
  title: "Fiaba e favola",
  intro: "«C'era una volta…» 🏰 Fiabe e favole sono tra le storie più antiche del mondo. Si somigliano, ma non sono la stessa cosa! Scopriamo come riconoscerle: nella <b>fiaba</b> c'è la <b>magia</b> ✨, nella <b>favola</b> gli <b>animali parlano</b> 🦊 e alla fine c'è una <b>morale</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "La fiaba: magia e lieto fine",
      html: `<p>La <b>fiaba</b> è un racconto fantastico, nato tanto tempo fa e tramandato a voce dai nonni ai nipoti. Le sue caratteristiche:</p>
<ul>
<li>✨ <b>Magia</b>: fate, streghe, orchi, draghi, oggetti magici (la scarpetta, la lampada, gli stivali delle sette leghe).</li>
<li>🕰️ <b>Tempo indefinito</b>: «C'era una volta…», «Tanto tempo fa…».</li>
<li>🌲 <b>Luogo indefinito</b>: «in un regno lontano», «in un bosco fitto».</li>
<li>👑 <b>Personaggi fissi</b>: il protagonista (eroe o eroina), l'antagonista (il cattivo), l'aiutante, l'oggetto magico.</li>
<li>⚔️ Il protagonista deve superare <b>prove</b> difficili.</li>
<li>😊 <b>Lieto fine</b>: «…e vissero felici e contenti».</li>
</ul>
<p>Fiabe famose: <i>Cenerentola</i>, <i>Biancaneve</i>, <i>Hänsel e Gretel</i>, <i>Il gatto con gli stivali</i>, <i>La bella addormentata</i>.</p>`
    },
    {
      type: "text",
      title: "La favola: animali e morale",
      html: `<p>La <b>favola</b> è un racconto <b>breve</b> che vuole <b>insegnare qualcosa</b>. Le sue caratteristiche:</p>
<ul>
<li>🦊 I protagonisti sono quasi sempre <b>animali</b> che parlano e si comportano come persone.</li>
<li>🎭 Ogni animale rappresenta un <b>carattere</b>: la volpe è furba, il leone è forte e prepotente, la formica è laboriosa, l'asino è testardo, l'agnello è indifeso.</li>
<li>⚡ La storia è <b>corta</b>, con pochi personaggi (spesso solo due) e spesso un dialogo.</li>
<li>📜 Alla fine c'è la <b>morale</b>: un insegnamento su come comportarsi. A volte è scritta, a volte devi scoprirla tu.</li>
<li>❌ Non c'è magia e non sempre c'è il lieto fine.</li>
</ul>
<p>Favole famose: <i>La volpe e l'uva</i>, <i>La cicala e la formica</i>, <i>La lepre e la tartaruga</i>, <i>Il lupo e l'agnello</i>.</p>`
    },
    {
      type: "svg",
      title: "Fiaba o favola? A colpo d'occhio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<rect x="20" y="20" width="270" height="260" rx="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
<rect x="310" y="20" width="270" height="260" rx="20" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
<text x="155" y="60" font-size="30" font-weight="bold" text-anchor="middle" fill="#5b21b6">FIABA</text>
<text x="445" y="60" font-size="30" font-weight="bold" text-anchor="middle" fill="#92400e">FAVOLA</text>
<text x="155" y="105" font-size="34" text-anchor="middle">🧚 🐉 👑</text>
<text x="445" y="105" font-size="34" text-anchor="middle">🦊 🍇 🐢</text>
<g font-size="18" fill="#1f2937">
<text x="40" y="145">✨ magia</text>
<text x="40" y="175">📖 storia lunga</text>
<text x="40" y="205">🧍 personaggi umani</text>
<text x="40" y="235">⚔️ prove da superare</text>
<text x="40" y="265">😊 lieto fine</text>
<text x="330" y="145">🚫 niente magia</text>
<text x="330" y="175">⚡ storia breve</text>
<text x="330" y="205">🐾 animali parlanti</text>
<text x="330" y="235">🎭 un difetto o un pregio</text>
<text x="330" y="265">📜 morale finale</text>
</g>
</svg>`,
      caption: "Due generi diversi: la fiaba fa sognare, la favola fa riflettere."
    },
    {
      type: "quiz",
      title: "Mini-quiz: fiaba o favola?",
      questions: [
        { type: "mc", q: "Una storia con una fata, un principe e un incantesimo è…", options: ["una fiaba", "una favola"], answer: 0, explain: "La magia e i personaggi fantastici sono tipici della fiaba." },
        { type: "mc", q: "Una storia breve in cui un corvo e una volpe parlano e alla fine c'è un insegnamento è…", options: ["una fiaba", "una favola"], answer: 1, explain: "Animali parlanti + morale = favola." },
        { type: "tf", q: "Nella favola la volpe rappresenta di solito la furbizia.", answer: true, explain: "Gli animali delle favole hanno caratteri fissi: la volpe è furba." }
      ]
    },
    {
      type: "text",
      title: "Gli autori: chi ha scritto fiabe e favole",
      html: `<p><b>Favole</b></p>
<ul>
<li><b>Esopo</b> 🇬🇷: vissuto in Grecia nel <b>VI secolo a.C.</b>; secondo la tradizione era uno schiavo molto saggio. Le sue favole (<i>La volpe e l'uva</i>, <i>La lepre e la tartaruga</i>) sono arrivate fino a noi.</li>
<li><b>Fedro</b> 🏛️: poeta latino del <b>I secolo d.C.</b>, riscrisse in versi molte favole di Esopo (<i>Il lupo e l'agnello</i>).</li>
<li><b>Jean de La Fontaine</b> 🇫🇷: nel <b>1668</b> pubblicò in Francia le sue <i>Favole</i> in versi (<i>La cicala e la formica</i>).</li>
</ul>
<p><b>Fiabe</b></p>
<ul>
<li><b>Giambattista Basile</b> 🇮🇹: napoletano, scrisse <i>Lo cunto de li cunti</i> (pubblicato nel <b>1634–1636</b>), una delle prime raccolte di fiabe d'Europa, dove c'è già <i>La gatta Cenerentola</i>.</li>
<li><b>Charles Perrault</b> 🇫🇷: nel <b>1697</b> pubblicò <i>Cappuccetto Rosso</i>, <i>Il gatto con gli stivali</i>, <i>Cenerentola</i>.</li>
<li><b>Fratelli Grimm</b> 🇩🇪: Jacob e Wilhelm raccolsero le fiabe popolari tedesche e le pubblicarono dal <b>1812</b> (<i>Hänsel e Gretel</i>, <i>Biancaneve</i>).</li>
<li><b>Hans Christian Andersen</b> 🇩🇰: dal <b>1835</b> scrisse fiabe nuove: <i>La sirenetta</i>, <i>Il brutto anatroccolo</i>.</li>
<li><b>Italo Calvino</b> 🇮🇹: nel <b>1956</b> raccolse e riscrisse 200 <i>Fiabe italiane</i> da tutte le regioni.</li>
</ul>`
    },
    {
      type: "widget",
      title: "La linea del tempo di fiabe e favole",
      widget: "timeline",
      options: {
        events: [
          { year: -550, label: "Esopo", icon: "🦊", text: "Favole greche, VI secolo a.C. (data indicativa)." },
          { year: 40, label: "Fedro", icon: "🐺", text: "Favole in latino, I secolo d.C. (data indicativa)." },
          { year: 1634, label: "Basile", icon: "📜", text: "Lo cunto de li cunti, Napoli (1634–1636)." },
          { year: 1668, label: "La Fontaine", icon: "🦗", text: "Le Favole, Francia." },
          { year: 1697, label: "Perrault", icon: "🐈", text: "Cappuccetto Rosso, Cenerentola, Il gatto con gli stivali." },
          { year: 1812, label: "Fratelli Grimm", icon: "🍬", text: "Fiabe per bambini e famiglie: Hänsel e Gretel, Biancaneve." },
          { year: 1835, label: "Andersen", icon: "🧜", text: "Prime fiabe; poi La sirenetta, Il brutto anatroccolo." },
          { year: 1956, label: "Calvino", icon: "📚", text: "Fiabe italiane: 200 fiabe dalle regioni d'Italia." }
        ]
      },
      caption: "Tocca un punto per scoprire l'autore. Le storie sono molto più antiche dei libri: si raccontavano a voce."
    },
    {
      type: "text",
      title: "La struttura della fiaba",
      html: `<p>Quasi tutte le fiabe seguono lo stesso percorso in <b>cinque tappe</b>:</p>
<ol>
<li><b>Situazione iniziale</b>: «C'era una volta una ragazza buona che viveva con la matrigna…»</li>
<li><b>Rottura dell'equilibrio</b> (il problema): un divieto infranto, un incantesimo, un rapimento.</li>
<li><b>Peripezie</b>: il protagonista parte, affronta prove, incontra aiutanti e antagonisti, riceve un oggetto magico.</li>
<li><b>Scioglimento</b>: il cattivo viene sconfitto, l'incantesimo si spezza.</li>
<li><b>Situazione finale</b>: il protagonista è felice (e spesso si sposa o diventa re).</li>
</ol>
<p>La favola invece è più semplice: <b>situazione → fatto → conclusione → morale</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la favola «La volpe e l'uva» (Esopo)",
      html: `<p><i>Una volpe affamata vide dei grappoli d'uva matura che pendevano da una pergola alta. Saltò una volta, due volte, tre volte, ma non riuscì a raggiungerli. Allora se ne andò dicendo: «Tanto quell'uva è acerba!»</i></p>
<ul>
<li>Personaggio: la volpe (animale che parla).</li>
<li>Situazione: ha fame e vede l'uva.</li>
<li>Fatto: prova a prenderla ma non ci riesce.</li>
<li>Conclusione: dice che l'uva non è buona.</li>
<li><b>Morale</b>: chi non riesce a ottenere qualcosa spesso finge di non volerla. Da qui il modo di dire «fare come la volpe con l'uva».</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: la fiaba di Cenerentola",
      html: `<ul>
<li><b>Situazione iniziale</b>: Cenerentola vive con la matrigna e le sorellastre, che la trattano come una serva.</li>
<li><b>Rottura</b>: il principe organizza un ballo, ma a lei è vietato andare.</li>
<li><b>Aiutante e oggetti magici</b>: la fata madrina trasforma una zucca in carrozza e le dà un vestito e le scarpette di cristallo (nella versione di Perrault).</li>
<li><b>Prova</b>: deve tornare entro mezzanotte; scappando perde una scarpetta.</li>
<li><b>Antagonisti</b>: matrigna e sorellastre, che cercano di ingannare il principe.</li>
<li><b>Scioglimento e lieto fine</b>: la scarpetta calza solo a lei; sposa il principe.</li>
</ul>
<p>La stessa fiaba si racconta in tutto il mondo con nomi diversi: in Cina esiste una storia simile, <i>Ye Xian</i>, scritta già nel IX secolo!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le 31 «mosse» della fiaba",
      html: `<p>Nel <b>1928</b> lo studioso russo <b>Vladimir Propp</b> lesse e confrontò un centinaio di fiabe di magia russe e scoprì che erano tutte costruite con gli stessi «mattoncini»: <b>31 funzioni</b>, cioè azioni tipiche (allontanamento, divieto, infrazione del divieto, dono dell'oggetto magico, lotta, vittoria, nozze…). Le fiabe sembrano tutte diverse, ma sotto sotto hanno lo stesso scheletro!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Rodari e le favole al telefono",
      html: `<p>Lo scrittore italiano <b>Gianni Rodari</b> nel <b>1962</b> pubblicò <i>Favole al telefono</i>: le storie che il ragionier Bianchi, sempre in viaggio per lavoro, raccontava ogni sera alla figlia per telefono. Dovevano essere brevi perché pagava a gettoni! Nel <b>1970</b> Rodari vinse il <b>Premio Hans Christian Andersen</b>, il più importante premio al mondo per gli scrittori per ragazzi: è l'unico scrittore italiano ad averlo vinto.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<table>
<tr><th></th><th>FIABA</th><th>FAVOLA</th></tr>
<tr><td>Personaggi</td><td>umani e fantastici (fate, orchi)</td><td>animali che parlano</td></tr>
<tr><td>Magia</td><td>sì</td><td>no</td></tr>
<tr><td>Lunghezza</td><td>più lunga, con tante prove</td><td>breve</td></tr>
<tr><td>Tempo e luogo</td><td>indefiniti («c'era una volta»)</td><td>indefiniti</td></tr>
<tr><td>Finale</td><td>lieto fine</td><td>morale</td></tr>
<tr><td>Autori</td><td>Basile, Perrault, Grimm, Andersen, Calvino</td><td>Esopo, Fedro, La Fontaine</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Gioco: personaggi della fiaba",
      widget: "classify",
      options: {
        groups: ["Protagonista", "Antagonista", "Aiutante", "Oggetto magico"],
        items: [
          ["👧 Cappuccetto Rosso", 0], ["👸 Biancaneve", 0], ["🧒 Hänsel", 0],
          ["🐺 il lupo", 1], ["🧙‍♀️ la strega", 1], ["👹 l'orco", 1],
          ["🧚 la fata madrina", 2], ["🪓 il cacciatore", 2], ["🐦 gli uccellini", 2],
          ["👠 la scarpetta di cristallo", 3], ["🪄 la bacchetta", 3], ["👢 gli stivali delle sette leghe", 3]
        ]
      },
      caption: "Ogni personaggio ha un ruolo preciso nella fiaba: mettilo al posto giusto."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire fiabe e favole",
      intro: "Puoi capire la differenza anche con un fumetto, con le carte di Propp, abbinando le morali o viaggiando nel mondo con Cenerentola.",
      tabs: [
        {
          label: "🎨 La fiaba a fumetti",
          html: `<p>Ecco le cinque tappe della fiaba disegnate come una striscia a fumetti. Prova a raccontare <i>Hänsel e Gretel</i> seguendo le vignette!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<g stroke="#1f2937" stroke-width="3">
<rect x="10" y="20" width="108" height="150" fill="#dbeafe"/>
<rect x="128" y="20" width="108" height="150" fill="#fee2e2"/>
<rect x="246" y="20" width="108" height="150" fill="#fef3c7"/>
<rect x="364" y="20" width="108" height="150" fill="#dcfce7"/>
<rect x="482" y="20" width="108" height="150" fill="#fce7f3"/>
</g>
<g font-size="40" text-anchor="middle">
<text x="64" y="95">🏠</text><text x="182" y="95">🌲</text><text x="300" y="95">🍬</text><text x="418" y="95">🔥</text><text x="536" y="95">🤗</text>
</g>
<g font-size="14" text-anchor="middle" fill="#1f2937">
<text x="64" y="135">famiglia</text><text x="64" y="155">povera</text>
<text x="182" y="135">abbandonati</text><text x="182" y="155">nel bosco</text>
<text x="300" y="135">casa di</text><text x="300" y="155">marzapane</text>
<text x="418" y="135">Gretel</text><text x="418" y="155">batte la strega</text>
<text x="536" y="135">tornano</text><text x="536" y="155">a casa</text>
</g>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#7c3aed">
<text x="64" y="200">1. inizio</text><text x="182" y="200">2. problema</text><text x="300" y="200">3. prove</text><text x="418" y="200">4. soluzione</text><text x="536" y="200">5. lieto fine</text>
</g>
</svg>`
        },
        {
          label: "🃏 Le carte di Propp",
          html: `<p>Lo scrittore <b>Gianni Rodari</b>, nel libro <i>Grammatica della fantasia</i> (1973), propose di trasformare le funzioni di Propp in <b>carte da gioco</b>: peschi alcune carte in ordine e inventi una fiaba nuova! Prova con queste:</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "1. Allontanamento", back: "Qualcuno lascia la casa (il papà parte, l'eroe va nel bosco)." },
              { front: "2. Divieto", back: "«Non aprire quella porta!», «Non parlare con il lupo!»" },
              { front: "3. Infrazione", back: "Il divieto viene violato… ed ecco i guai!" },
              { front: "4. Dono magico", back: "Un aiutante regala un oggetto magico all'eroe." },
              { front: "5. Lotta", back: "L'eroe affronta l'antagonista." },
              { front: "6. Vittoria", back: "Il cattivo è sconfitto." },
              { front: "7. Ritorno", back: "L'eroe torna a casa." },
              { front: "8. Nozze", back: "Lieto fine: l'eroe si sposa o diventa re." }
            ]
          }
        },
        {
          label: "🔗 Abbina favola e morale",
          html: `<p>Collega ogni favola alla sua morale.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["La lepre e la tartaruga", "Chi va piano va sano e va lontano"],
              ["La cicala e la formica", "Bisogna pensare al futuro"],
              ["La volpe e l'uva", "Chi non ottiene una cosa finge di non volerla"],
              ["Il lupo e l'agnello", "Il prepotente trova sempre una scusa"],
              ["Il leone e il topo", "Anche i piccoli possono aiutare i grandi"]
            ]
          }
        },
        {
          label: "🌍 Cenerentola nel mondo (3D)",
          html: `<p>La stessa storia viaggia per il mondo e cambia vestito. Gira il globo e trova i luoghi:</p>
<ul>
<li>🇨🇳 <b>Ye Xian</b> (Cina, IX secolo): l'aiutante magico è un pesce, e lei perde una scarpetta d'oro.</li>
<li>🇮🇹 <b>La gatta Cenerentola</b> (Basile, Napoli, 1634): la protagonista si chiama Zezolla.</li>
<li>🇫🇷 <b>Cendrillon</b> (Perrault, Parigi, 1697): arrivano la fata, la zucca-carrozza e la scarpetta di cristallo.</li>
<li>🇩🇪 <b>Aschenputtel</b> (Grimm, 1812): niente fata, la aiutano un albero magico e degli uccellini.</li>
</ul>
<p>Gli studiosi hanno raccolto centinaia di versioni diverse di questa fiaba nel mondo!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 23, lon: 109, label: "Ye Xian (Cina)", color: "#ef4444" },
              { lat: 40.85, lon: 14.27, label: "Basile (Napoli)", color: "#22c55e" },
              { lat: 48.86, lon: 2.35, label: "Perrault (Parigi)", color: "#3b82f6" },
              { lat: 50.32, lon: 9.4, label: "Grimm (Germania)", color: "#f59e0b" }
            ]
          }
        },
        {
          label: "🎭 Gli animali-maschera",
          html: `<p>Nella favola ogni animale è come una <b>maschera</b> del teatro: appena lo vedi sai già com'è.</p>
<table>
<tr><th>Animale</th><th>Carattere</th></tr>
<tr><td>🦊 volpe</td><td>furba, imbrogliona</td></tr>
<tr><td>🦁 leone</td><td>forte, potente, a volte prepotente</td></tr>
<tr><td>🐺 lupo</td><td>cattivo, prepotente</td></tr>
<tr><td>🐑 agnello</td><td>innocente, indifeso</td></tr>
<tr><td>🐜 formica</td><td>laboriosa, previdente</td></tr>
<tr><td>🦗 cicala</td><td>spensierata, pigra</td></tr>
<tr><td>🐢 tartaruga</td><td>lenta ma costante</td></tr>
</table>
<p>Usare gli animali permetteva a Esopo e a Fedro di criticare i potenti… senza nominarli!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di fiabe e favole: tocca un nodo e scopri il perché",
      nodes: [
        { id: "racconto", label: "Racconto fantastico", x: 50, y: 6, color: "#2563eb", html: "Storia inventata con elementi che nella realtà non esistono.", why: "Gli esseri umani raccontano storie da quando esiste il linguaggio: servivano a divertire, a spiegare il mondo e a insegnare ai più giovani come comportarsi." },
        { id: "orale", label: "Tradizione orale", x: 50, y: 26, color: "#64748b", html: "Le storie passavano a voce, di generazione in generazione.", why: "Per secoli quasi nessuno sapeva leggere: le storie si raccontavano la sera, accanto al fuoco. Per ricordarle si usavano formule fisse («C'era una volta») e ripetizioni (tre prove, tre fratelli)." },
        { id: "fiaba", label: "Fiaba", x: 22, y: 45, color: "#7c3aed", html: "Racconto con magia, prove e lieto fine.", why: "La parola viene dal latino <i>fabula</i>, «racconto». Le fiabe danno speranza: anche il più piccolo e povero, se è coraggioso e buono, può vincere." },
        { id: "favola", label: "Favola", x: 78, y: 45, color: "#d97706", html: "Racconto breve con animali parlanti e una morale.", why: "Anche «favola» viene da <i>fabula</i>. Nell'antichità era un modo per insegnare e per criticare i potenti senza correre rischi, facendo parlare gli animali al posto delle persone." },
        { id: "personaggi", label: "Ruoli dei personaggi", x: 10, y: 70, color: "#ec4899", html: "Protagonista, antagonista, aiutante, oggetto magico.", why: "Propp scoprì che nelle fiabe di magia i personaggi cambiano nome ma i <b>ruoli</b> sono sempre gli stessi: ne individuò sette (tra cui l'eroe, l'antagonista, il donatore e l'aiutante)." },
        { id: "propp", label: "Le 31 funzioni di Propp", x: 34, y: 70, color: "#a855f7", html: "Le azioni tipiche che costruiscono ogni fiaba.", why: "Vladimir Propp le descrisse nel libro <i>Morfologia della fiaba</i> (1928), confrontando un centinaio di fiabe di magia russe. Il suo metodo fu poi usato per studiare anche film e romanzi." },
        { id: "morale", label: "Morale", x: 66, y: 70, color: "#16a34a", html: "L'insegnamento finale della favola.", why: "Esopo e Fedro scrivevano per insegnare a vivere: la morale riassume in una frase la lezione della storia. Molti modi di dire («fare come la volpe con l'uva») vengono proprio dalle favole." },
        { id: "animali", label: "Animali-simbolo", x: 90, y: 70, color: "#f59e0b", html: "Volpe furba, leone forte, formica laboriosa.", why: "Gli animali hanno caratteri «fissi» che tutti riconoscono subito: così la favola può essere brevissima, perché non serve spiegare com'è il personaggio." },
        { id: "autori", label: "Raccoglitori e autori", x: 50, y: 92, color: "#0ea5e9", html: "Esopo, Fedro, Basile, Perrault, Grimm, Andersen, Calvino, Rodari.", why: "Molti di loro non inventarono le storie: le <b>raccolsero</b> dalla voce del popolo e le misero per iscritto, salvandole dall'oblio. Altri, come Andersen e Rodari, ne scrissero di nuove." }
      ],
      edges: [
        ["racconto", "orale", "nasce dalla"],
        ["orale", "fiaba", "ha dato origine alla"],
        ["orale", "favola", "e alla"],
        ["fiaba", "personaggi", "ha"],
        ["fiaba", "propp", "studiata da"],
        ["favola", "morale", "finisce con la"],
        ["favola", "animali", "usa gli"],
        ["orale", "autori", "messa per iscritto da"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: autori e struttura",
      questions: [
        { type: "mc", q: "Chi è l'autore greco più famoso di favole?", options: ["Esopo", "Andersen", "Perrault"], answer: 0, explain: "Esopo visse in Grecia nel VI secolo a.C." },
        { type: "mc", q: "Come si chiama il «cattivo» della fiaba?", options: ["aiutante", "antagonista", "protagonista"], answer: 1, explain: "L'antagonista ostacola il protagonista." },
        { type: "order", q: "Metti in ordine la struttura della fiaba.", items: ["Situazione iniziale", "Rottura dell'equilibrio", "Peripezie e prove", "Scioglimento", "Situazione finale"], explain: "Inizio, problema, prove, soluzione, lieto fine." }
      ]
    }
  ],
  glossary: [
    { t: "Fiaba", d: "Racconto fantastico con magia, prove da superare e lieto fine." },
    { t: "Favola", d: "Racconto breve con animali parlanti che termina con una morale." },
    { t: "Morale", d: "L'insegnamento che si ricava da una favola." },
    { t: "Protagonista", d: "Il personaggio principale della storia." },
    { t: "Antagonista", d: "Il personaggio che ostacola il protagonista." },
    { t: "Aiutante", d: "Il personaggio che aiuta il protagonista (fata, animale magico)." },
    { t: "Oggetto magico", d: "Oggetto con poteri speciali che aiuta l'eroe (bacchetta, stivali)." },
    { t: "Lieto fine", d: "Finale felice della storia." },
    { t: "Tradizione orale", d: "Storie tramandate a voce di generazione in generazione." },
    { t: "Funzioni di Propp", d: "Le 31 azioni tipiche delle fiabe di magia individuate da Vladimir Propp (1928)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale elemento c'è nella fiaba ma di solito non nella favola?", options: ["la magia", "i personaggi", "un inizio"], answer: 0, explain: "La magia (fate, incantesimi, oggetti magici) è tipica della fiaba." },
      { type: "mc", q: "«La cicala e la formica» è…", options: ["una fiaba", "una favola"], answer: 1, explain: "Animali parlanti e morale: è una favola (Esopo, poi La Fontaine)." },
      { type: "tf", q: "Le fiabe cominciano spesso con «C'era una volta».", answer: true, explain: "È la formula che indica un tempo indefinito." },
      { type: "text", q: "Come si chiama l'insegnamento alla fine di una favola?", answer: ["morale", "la morale"], explain: "La morale." },
      { type: "mc", q: "Nella fiaba di Cenerentola, la fata madrina è…", options: ["l'antagonista", "l'aiutante", "la protagonista"], answer: 1, explain: "Aiuta Cenerentola ad andare al ballo." },
      { type: "mc", q: "Chi raccolse le fiabe popolari tedesche, come Hänsel e Gretel?", options: ["i fratelli Grimm", "Esopo", "Fedro"], answer: 0, explain: "Jacob e Wilhelm Grimm, dal 1812." },
      { type: "tf", q: "Nelle favole ogni animale rappresenta un carattere umano.", answer: true, explain: "Per esempio la volpe è la furbizia, la formica la laboriosità." },
      { type: "order", q: "Metti gli autori in ordine di tempo, dal più antico.", items: ["Esopo", "Fedro", "Perrault", "Fratelli Grimm", "Italo Calvino"], explain: "VI sec. a.C., I sec. d.C., 1697, 1812, 1956." },
      { type: "mc", q: "Qual è la morale di «La lepre e la tartaruga»?", options: ["Chi va piano va sano e va lontano", "L'unione fa la forza", "Il più forte vince sempre"], answer: 0, explain: "La tartaruga, lenta ma costante, batte la lepre presuntuosa." },
      { type: "mc", q: "Quale scrittore italiano raccolse 200 «Fiabe italiane» nel 1956?", options: ["Gianni Rodari", "Italo Calvino", "Carlo Collodi"], answer: 1, explain: "Italo Calvino, da tutte le regioni d'Italia." },
      { type: "tf", q: "Nella favola c'è sempre il lieto fine.", answer: false, explain: "Non sempre: nel «Lupo e l'agnello» l'agnello viene mangiato. La favola ha sempre una morale, non sempre un finale felice." },
      { type: "mc", q: "Il napoletano Giambattista Basile scrisse…", options: ["Lo cunto de li cunti", "Le avventure di Pinocchio", "Favole al telefono"], answer: 0, explain: "Una delle prime raccolte di fiabe d'Europa (1634–1636)." }
    ]
  }
});
