TOPIC('it', {
  id: "p5-sci-luce-suono",
  title: "Luce e suono",
  intro: "Durante un temporale vedi prima il <b>lampo</b> e poi senti il <b>tuono</b>. Perché? Perché <b>luce</b> e <b>suono</b> viaggiano in modo molto diverso! Scopriamo come si <b>propagano</b>, perché ci sono le <b>ombre</b>, come nascono l'<b>arcobaleno</b> e l'<b>eco</b>, e che cosa sono le <b>vibrazioni</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "La luce: da dove arriva",
      html: `<p>La <b>luce</b> è una forma di energia che ci permette di <b>vedere</b>.</p>
<ul>
<li>I corpi che producono luce propria si chiamano <b>sorgenti luminose</b> (o corpi luminosi): il <b>Sole</b>, le stelle, il fuoco, una lampadina, una lucciola.</li>
<li>Tutti gli altri corpi sono <b>illuminati</b>: li vediamo perché la luce li colpisce e "rimbalza" fino ai nostri occhi. Anche la <b>Luna</b> è un corpo illuminato: riflette la luce del Sole!</li>
</ul>
<p>La luce si <b>propaga in linea retta</b>, in tutte le direzioni, e non ha bisogno di aria: attraversa anche il <b>vuoto</b> dello spazio. È la cosa più veloce dell'universo: circa <b>300 000 km al secondo</b>. In un secondo farebbe più di 7 volte il giro della Terra!</p>`
    },
    {
      type: "text",
      title: "Trasparenti, traslucidi, opachi e le ombre",
      html: `<p>Quando la luce incontra un oggetto:</p>
<ul>
<li>i corpi <b>trasparenti</b> la lasciano passare tutta: vedi bene attraverso (vetro, aria, acqua limpida);</li>
<li>i corpi <b>traslucidi</b> ne lasciano passare solo una parte: vedi forme confuse (vetro smerigliato, carta da forno, tenda sottile);</li>
<li>i corpi <b>opachi</b> non la lasciano passare: dietro di loro si forma un'<b>ombra</b> (legno, muro, il tuo corpo).</li>
</ul>
<p>L'ombra esiste proprio <b>perché la luce va dritta</b> e non può "girare intorno" agli oggetti. Più la sorgente è bassa (come il Sole al tramonto), più l'ombra è <b>lunga</b>.</p>`
    },
    {
      type: "svg",
      title: "Come si forma un'ombra",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<rect x="0" y="240" width="600" height="60" fill="#d9f99d"/>
<circle cx="70" cy="70" r="36" fill="#facc15" stroke="#ca8a04" stroke-width="4"/>
<g stroke="#f59e0b" stroke-width="3" stroke-dasharray="10 6">
<line x1="100" y1="88" x2="270" y2="150"/><line x1="100" y1="92" x2="560" y2="240"/>
<line x1="100" y1="80" x2="300" y2="100"/>
</g>
<rect x="255" y="150" width="30" height="90" fill="#78350f"/>
<circle cx="270" cy="128" r="30" fill="#16a34a"/>
<polygon points="285,240 560,240 285,150" fill="#334155" opacity="0.55"/>
<text x="70" y="135" font-size="18" text-anchor="middle" font-weight="bold">Sole</text>
<text x="270" y="275" font-size="18" text-anchor="middle" font-weight="bold">corpo opaco</text>
<text x="440" y="275" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e293b">ombra</text>
<text x="420" y="130" font-size="16" fill="#92400e">i raggi viaggiano dritti</text>
</svg>`,
      caption: "I raggi di luce che colpiscono l'albero si fermano: dietro resta una zona buia, l'ombra."
    },
    {
      type: "text",
      title: "Riflessione e rifrazione",
      html: `<ul>
<li><b>Riflessione</b>: la luce "rimbalza" su una superficie. Su una superficie liscia e lucida, come uno <b>specchio</b> o l'acqua calma, rimbalza in modo ordinato e vedi un'immagine. Regola: l'angolo con cui arriva è <b>uguale</b> all'angolo con cui riparte.</li>
<li><b>Rifrazione</b>: quando la luce passa da un materiale a un altro (es. dall'aria all'acqua) <b>cambia velocità</b> e quindi <b>devia</b>. Per questo una matita in un bicchiere d'acqua sembra <b>spezzata</b>! Le <b>lenti</b> di occhiali, lenti d'ingrandimento e microscopi funzionano grazie alla rifrazione.</li>
</ul>`
    },
    {
      type: "text",
      title: "I colori della luce",
      html: `<p>La luce del Sole sembra bianca, ma è un <b>miscuglio di tutti i colori</b>. Facendola passare attraverso un <b>prisma</b> di vetro, si separa nei colori dell'<b>arcobaleno</b>: rosso, arancione, giallo, verde, azzurro, indaco, violetto.</p>
<p>L'<b>arcobaleno</b> si forma quando il Sole illumina le goccioline di pioggia: ogni goccia fa da piccolo prisma. Per vederlo devi avere il Sole <b>alle spalle</b> e la pioggia davanti.</p>
<p>E perché una mela è rossa? Perché <b>assorbe</b> tutti i colori tranne il rosso, che viene <b>riflesso</b> verso i nostri occhi. Un oggetto bianco li riflette tutti; uno nero li assorbe tutti (per questo d'estate una maglietta nera scalda di più!).</p>`
    },
    {
      type: "svg",
      title: "Il prisma separa i colori",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#0f172a"/>
<line x1="20" y1="150" x2="230" y2="125" stroke="#ffffff" stroke-width="7"/>
<polygon points="300,40 380,190 220,190" fill="#bae6fd" fill-opacity="0.35" stroke="#e0f2fe" stroke-width="3"/>
<g stroke-width="7">
<line x1="330" y1="120" x2="580" y2="70" stroke="#ef4444"/>
<line x1="330" y1="122" x2="580" y2="92" stroke="#f97316"/>
<line x1="330" y1="124" x2="580" y2="114" stroke="#facc15"/>
<line x1="330" y1="126" x2="580" y2="136" stroke="#22c55e"/>
<line x1="330" y1="128" x2="580" y2="158" stroke="#38bdf8"/>
<line x1="330" y1="130" x2="580" y2="180" stroke="#4f46e5"/>
<line x1="330" y1="132" x2="580" y2="202" stroke="#a855f7"/>
</g>
<line x1="230" y1="125" x2="330" y2="126" stroke="#ffffff" stroke-width="5"/>
<text x="90" y="120" font-size="18" fill="#ffffff">luce bianca</text>
<text x="300" y="230" font-size="18" fill="#e0f2fe" text-anchor="middle">prisma</text>
<text x="590" y="45" font-size="16" fill="#fca5a5" text-anchor="end">rosso: devia di meno</text>
<text x="590" y="235" font-size="16" fill="#d8b4fe" text-anchor="end">violetto: devia di più</text>
</svg>`,
      caption: "Isaac Newton fece questo esperimento nel 1666 e capì che la luce bianca è fatta di tutti i colori."
    },
    {
      type: "quiz",
      title: "Mini-quiz: la luce",
      questions: [
        { type: "mc", q: "La Luna è…", options: ["una sorgente luminosa", "un corpo illuminato", "un corpo trasparente"], answer: 1, explain: "La Luna non produce luce: riflette quella del Sole." },
        { type: "mc", q: "Una tenda sottile che lascia passare un po' di luce è…", options: ["trasparente", "traslucida", "opaca"], answer: 1, explain: "Lascia passare solo una parte della luce: è traslucida." },
        { type: "tf", q: "Le ombre si formano perché la luce viaggia in linea retta.", answer: true, explain: "La luce non può aggirare gli oggetti opachi." }
      ]
    },
    {
      type: "text",
      title: "Il suono: tutto nasce da una vibrazione",
      html: `<p>Appoggia due dita sulla gola e di' "aaaa": senti un <b>tremolio</b>. Tutti i suoni nascono da qualcosa che <b>vibra</b>, cioè si muove avanti e indietro velocissimo: le corde vocali, la corda di una chitarra, la pelle di un tamburo.</p>
<p>La vibrazione spinge le particelle d'aria vicine, che spingono quelle accanto, e così via: si forma un'<b>onda sonora</b> che arriva fino al nostro <b>orecchio</b>. È un po' come una "ola" allo stadio: le persone restano al loro posto, ma l'onda viaggia!</p>
<p>Il suono ha bisogno di un <b>mezzo</b> per propagarsi (aria, acqua, legno, metallo). <b>Nel vuoto il suono non si propaga</b>: nello spazio regna il silenzio assoluto, anche durante un'esplosione!</p>`
    },
    {
      type: "text",
      title: "Quanto è veloce il suono",
      html: `<table>
<tr><th>Mezzo</th><th>Velocità del suono (circa)</th></tr>
<tr><td>🌬️ Aria (20 °C)</td><td>340 metri al secondo</td></tr>
<tr><td>💧 Acqua</td><td>1 500 metri al secondo</td></tr>
<tr><td>🔩 Acciaio</td><td>5 000–6 000 metri al secondo</td></tr>
<tr><td>🌌 Vuoto</td><td>non si propaga</td></tr>
</table>
<p>Il suono è velocissimo per noi (più di 1200 km/h nell'aria), ma è quasi <b>un milione di volte più lento</b> della luce. Per questo il lampo si vede subito e il tuono arriva dopo.</p>
<p>Nei solidi e nei liquidi le particelle sono più vicine e "si passano" la spinta più in fretta: per questo i nativi americani appoggiavano l'orecchio a terra o sui binari per sentire arrivare cavalli e treni.</p>`
    },
    {
      type: "svg",
      title: "Lampo e tuono",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#1e293b"/>
<ellipse cx="110" cy="50" rx="90" ry="35" fill="#64748b"/>
<polygon points="110,80 85,140 108,140 90,200 140,120 115,120 130,80" fill="#fde047"/>
<rect x="0" y="230" width="600" height="50" fill="#365314"/>
<circle cx="520" cy="185" r="16" fill="#fcd34d"/>
<rect x="508" y="200" width="24" height="32" rx="6" fill="#3b82f6"/>
<line x1="150" y1="130" x2="495" y2="180" stroke="#fde047" stroke-width="3"/>
<text x="320" y="135" font-size="17" fill="#fde047" text-anchor="middle">luce: arriva subito ⚡</text>
<g fill="none" stroke="#93c5fd" stroke-width="3">
<path d="M160 195 Q170 210 160 225"/><path d="M190 190 Q205 210 190 230"/><path d="M220 185 Q240 210 220 235"/>
</g>
<text x="320" y="215" font-size="17" fill="#93c5fd" text-anchor="middle">suono: 340 m ogni secondo… 🔊</text>
<text x="300" y="265" font-size="16" fill="#f8fafc" text-anchor="middle">conta i secondi tra lampo e tuono e dividi per 3 → distanza in km</text>
</svg>`,
      caption: "In 3 secondi il suono percorre circa 1 km (3 × 340 = 1020 m)."
    },
    {
      type: "text",
      title: "Le caratteristiche del suono e l'eco",
      html: `<ul>
<li><b>Intensità</b> (volume): suono <b>forte</b> o <b>debole</b>. Dipende da quanto è ampia la vibrazione. Si misura in <b>decibel</b> (dB): un sussurro circa 30 dB, una conversazione 60 dB, un concerto rock oltre 100 dB. Sopra gli 85 dB, a lungo, l'udito si può danneggiare!</li>
<li><b>Altezza</b>: suono <b>acuto</b> (come un fischietto) o <b>grave</b> (come un contrabbasso). Dipende da quante vibrazioni al secondo (la <b>frequenza</b>): più sono veloci, più il suono è acuto. Le corde più corte e tese danno suoni più acuti.</li>
<li><b>Timbro</b>: è la "voce" particolare di ogni strumento o persona. Lo stesso <i>do</i> suonato al pianoforte e alla tromba è diverso: riconosci il timbro!</li>
</ul>
<p>L'<b>eco</b> è un suono <b>riflesso</b>: rimbalza contro una parete lontana (una montagna, un muro) e torna indietro. Per sentire l'eco distinta dalla tua voce, l'ostacolo deve essere ad almeno <b>17 metri</b> circa.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: quanto è lontano il temporale?",
      html: `<p>Vedi un lampo e cominci a contare: "uno, due, tre…". Senti il tuono dopo <b>6 secondi</b>.</p>
<ul>
<li>Il suono percorre circa <b>340 metri</b> al secondo.</li>
<li>340 × 6 = <b>2 040 metri</b>, cioè circa <b>2 km</b>.</li>
<li>Trucco veloce: secondi <b>: 3</b> = chilometri (6 : 3 = 2 km).</li>
</ul>
<p>Se i secondi diminuiscono a ogni lampo, il temporale si sta <b>avvicinando</b>: meglio mettersi al riparo in un edificio! ⛈️</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il telefono a barattoli",
      html: `<p>Costruisci un "telefono" con due barattoli di yogurt e uno spago lungo 10 metri:</p>
<ol>
<li>fai un forellino sul fondo di ogni barattolo;</li>
<li>infila lo spago e fai un nodo all'interno;</li>
<li>allontanatevi finché lo spago è <b>ben teso</b>;</li>
<li>uno parla nel barattolo, l'altro lo appoggia all'orecchio.</li>
</ol>
<p>Funziona perché la voce fa vibrare il fondo del barattolo, la vibrazione corre lungo lo <b>spago</b> (un solido) e fa vibrare l'altro barattolo. Se lo spago è molle o qualcuno lo tocca, la vibrazione si ferma e non si sente più nulla!</p>`
    },
    {
      type: "widget",
      title: "Luce o suono?",
      widget: "classify",
      options: {
        groups: ["💡 Luce", "🔊 Suono", "💡🔊 Entrambi"],
        items: [
          ["Si propaga anche nel vuoto", 0],
          ["Nasce da una vibrazione", 1],
          ["Viaggia a circa 300 000 km al secondo", 0],
          ["Viaggia a circa 340 m al secondo nell'aria", 1],
          ["Può essere riflesso (specchio / eco)", 2],
          ["Si scompone nei colori con un prisma", 0],
          ["Si misura in decibel", 1],
          ["È una forma di energia", 2]
        ]
      },
      caption: "Metti ogni frase nel gruppo giusto."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La luce del passato",
      html: `<p>La luce del Sole impiega circa <b>8 minuti e 20 secondi</b> per arrivare fino a noi. Quindi il Sole che vedi è il Sole di 8 minuti fa!</p>
<p>La luce di alcune stelle che vedi di notte è partita centinaia o migliaia di anni fa: guardare il cielo è come guardare nel <b>passato</b>. Alcune di quelle stelle potrebbero non esistere più!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Suoni che non sentiamo",
      html: `<p>Noi sentiamo suoni da circa <b>20</b> a <b>20 000</b> vibrazioni al secondo (hertz). Sotto ci sono gli <b>infrasuoni</b>: gli <b>elefanti</b> li usano per "parlarsi" a chilometri di distanza. Sopra ci sono gli <b>ultrasuoni</b>: i <b>pipistrelli</b> e i <b>delfini</b> li emettono e ascoltano l'eco per trovare prede e ostacoli al buio (si chiama <b>ecolocalizzazione</b>).</p>
<p>Anche i medici usano gli ultrasuoni per fare l'<b>ecografia</b> e vedere dentro il corpo senza fare male.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<table>
<tr><th></th><th>💡 Luce</th><th>🔊 Suono</th></tr>
<tr><td>Nasce da</td><td>sorgenti luminose</td><td>vibrazioni</td></tr>
<tr><td>Nel vuoto</td><td>si propaga</td><td>non si propaga</td></tr>
<tr><td>Velocità</td><td>300 000 km/s</td><td>340 m/s nell'aria</td></tr>
<tr><td>Rimbalza</td><td>riflessione (specchio)</td><td>eco</td></tr>
<tr><td>Caratteristiche</td><td>colori</td><td>intensità, altezza, timbro</td></tr>
</table>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire luce e suono",
      intro: "Luce e suono si capiscono meglio con esperimenti, analogie e modelli. Scegli il tuo!",
      tabs: [
        {
          label: "🌊 Il sasso nello stagno",
          html: `<p>Lancia un sasso in uno stagno: si formano <b>cerchi</b> che si allargano. L'acqua non va verso la riva: ogni punto si alza e si abbassa, ma l'<b>onda</b> viaggia.</p>
<p>Il suono fa lo stesso nell'aria, ma in <b>3D</b>: si allarga come una <b>sfera</b> sempre più grande intorno a chi parla. Per questo ti sentono anche le persone dietro di te. E più la sfera è grande, più il suono è "spalmato" e debole: per questo da lontano si sente meno.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#e0f2fe"/>
<g fill="none" stroke="#0284c7">
<circle cx="200" cy="120" r="20" stroke-width="5"/><circle cx="200" cy="120" r="50" stroke-width="4"/><circle cx="200" cy="120" r="80" stroke-width="3"/><circle cx="200" cy="120" r="110" stroke-width="2"/>
</g>
<circle cx="200" cy="120" r="7" fill="#78716c"/>
<text x="430" y="100" font-size="20" fill="#075985" text-anchor="middle">le onde si allargano,</text>
<text x="430" y="130" font-size="20" fill="#075985" text-anchor="middle">l'acqua resta lì</text>
<text x="430" y="170" font-size="18" fill="#0369a1" text-anchor="middle">lontano = onda più debole</text>
</svg>`
        },
        {
          label: "🎸 Il righello vibrante",
          html: `<p>Tieni fermo un <b>righello</b> sul bordo del banco e fai vibrare la parte che sporge:</p>
<ul>
<li>con una parte <b>lunga</b> fuori dal banco, vibra <b>lentamente</b> → suono <b>grave</b>;</li>
<li>con una parte <b>corta</b>, vibra <b>velocemente</b> → suono <b>acuto</b>;</li>
<li>se lo spingi <b>più forte</b>, vibra più ampio → suono più <b>intenso</b> (più forte).</li>
</ul>
<p>Hai appena scoperto altezza e intensità! È lo stesso principio di chitarre, violini e arpe.</p>`
        },
        {
          label: "🫙 Lo xilofono di bicchieri",
          html: `<p>Metti in fila 6 bicchieri di vetro uguali con quantità d'acqua diverse e colpiscili piano con un cucchiaino.</p>
<ul>
<li>più <b>acqua</b> c'è, più il suono è <b>grave</b> (il vetro con tanta acqua vibra più lentamente);</li>
<li>se invece <b>soffi</b> su delle bottiglie, succede il contrario: più acqua → meno aria → suono più <b>acuto</b>, perché a vibrare è la colonna d'aria!</li>
</ul>
<p>Con un po' di pazienza puoi accordarli e suonare <i>Fra Martino</i>!</p>`,
          widget: "counter",
          options: { emoji: "🥛", max: 8 }
        },
        {
          label: "🔦 Torcia e specchi",
          html: `<p>In una stanza buia con un po' di polvere (o il vapore di una doccia) accendi una <b>torcia</b>: vedi il raggio <b>dritto</b>.</p>
<p>Ora mettilo contro uno <b>specchio</b>: il raggio rimbalza con lo stesso angolo, come una palla da biliardo contro la sponda. Con 2–3 specchi puoi far arrivare la luce dove vuoi, come in un <b>periscopio</b> dei sottomarini.</p>
<p>Infine metti una matita in un bicchiere d'acqua e guardala di lato: sembra spezzata. È la <b>rifrazione</b>!</p>`
        },
        {
          label: "⚛️ La luce nasce dagli atomi (3D)",
          html: `<p>Da dove viene la luce? Dagli <b>atomi</b>! Quando un atomo riceve energia (per esempio viene scaldato), un elettrone "salta" su un'orbita più lontana. Quando torna giù, restituisce l'energia sotto forma di un pacchetto di <b>luce</b>.</p>
<p>Ogni elemento emette colori particolari: il <b>sodio</b> (Na) dà la luce gialla dei vecchi lampioni stradali e il giallo dei fuochi d'artificio. Guarda il modello dell'atomo.</p>`,
          scene: "atom",
          options: { elements: ["H", "He", "Na"], element: "Na" }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di luce e suono: tocca un nodo e scopri il perché",
      nodes: [
        { id: "energia", label: "Energia", x: 50, y: 6, color: "#f59e0b", html: "Luce e suono sono due modi in cui l'energia viaggia.", why: "Un pannello solare trasforma la luce in elettricità; un suono fortissimo può far tremare i vetri: entrambi trasportano energia da un posto all'altro senza trasportare materia." },
        { id: "luce", label: "Luce", x: 25, y: 26, color: "#eab308", html: "Energia che ci permette di vedere; viaggia anche nel vuoto.", why: "Nel 1865 lo scozzese <b>James Clerk Maxwell</b> capì che la luce è un'onda elettromagnetica, come le onde radio. Nel 1905 <b>Einstein</b> spiegò che è fatta anche di \"pacchetti\" di energia, i fotoni." },
        { id: "velluce", label: "300 000 km/s", x: 8, y: 48, color: "#facc15", html: "La velocità della luce.", why: "<b>Galileo</b> provò a misurarla con due lanterne su due colline, ma era troppo veloce. Nel 1676 il danese <b>Ole Rømer</b> la stimò per primo osservando le lune di Giove. È la velocità più alta possibile nell'universo." },
        { id: "rifl", label: "Riflessione e rifrazione", x: 30, y: 62, color: "#38bdf8", html: "La luce rimbalza (specchi) o devia cambiando materiale (lenti).", why: "La legge della riflessione era già nota a <b>Euclide</b> ed <b>Erone</b>. La legge della rifrazione la trovarono <b>Ibn Sahl</b> (Baghdad, 984) e, secoli dopo, <b>Snell</b> e <b>Cartesio</b>. Galileo la usò nel suo cannocchiale (1609)." },
        { id: "colori", label: "Colori", x: 15, y: 86, color: "#a855f7", html: "La luce bianca contiene tutti i colori dell'arcobaleno.", why: "<b>Isaac Newton</b> nel 1666 separò la luce con un prisma e poi la ricompose con un secondo prisma, dimostrando che il bianco è un miscuglio. Fu lui a scegliere 7 colori, come le 7 note musicali." },
        { id: "suono", label: "Suono", x: 75, y: 26, color: "#2563eb", html: "Vibrazione che si propaga in un mezzo come onda.", why: "Già <b>Pitagora</b> (VI secolo a.C.) scoprì che corde lunghe la metà suonano un'ottava più acuta. Nel 1660 <b>Robert Boyle</b> mise una sveglia in una campana di vetro e ne tolse l'aria: il suono sparì. Prova che serve un mezzo!" },
        { id: "velsuono", label: "340 m/s", x: 92, y: 48, color: "#0ea5e9", html: "La velocità del suono nell'aria.", why: "Nel Seicento si misurava sparando un cannone e cronometrando il tempo tra lampo e boato a distanza nota. È più veloce nei liquidi e nei solidi perché lì le particelle sono più vicine e rigide." },
        { id: "caratt", label: "Intensità, altezza, timbro", x: 70, y: 62, color: "#16a34a", html: "Le tre caratteristiche del suono.", why: "Intensità = ampiezza della vibrazione; altezza = frequenza (vibrazioni al secondo, misurate in <b>hertz</b>, dal fisico tedesco Heinrich Hertz); timbro = forma dell'onda, diversa per ogni strumento." },
        { id: "eco", label: "Eco ed ecolocalizzazione", x: 85, y: 86, color: "#14b8a6", html: "Il suono che rimbalza e torna indietro.", why: "Il nome viene dalla ninfa Eco della mitologia greca. Nel 1794 l'italiano <b>Lazzaro Spallanzani</b> scoprì che i pipistrelli si orientano al buio con l'udito; nel 1938 si capì che usano ultrasuoni. Da qui sono nati il sonar e l'ecografia." }
      ],
      edges: [
        ["energia", "luce", "viaggia come"],
        ["energia", "suono", "viaggia come"],
        ["luce", "velluce", "velocità"],
        ["luce", "rifl", "può subire"],
        ["rifl", "colori", "il prisma separa i"],
        ["suono", "velsuono", "velocità"],
        ["suono", "caratt", "ha"],
        ["suono", "eco", "riflesso diventa"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: il suono",
      questions: [
        { type: "mc", q: "Da che cosa nasce ogni suono?", options: ["Da una luce", "Da una vibrazione", "Dal vento"], answer: 1, explain: "Ogni suono nasce da un oggetto che vibra." },
        { type: "tf", q: "Nello spazio vuoto si può sentire un'esplosione.", answer: false, explain: "Il suono ha bisogno di un mezzo: nel vuoto non si propaga." },
        { type: "num", q: "Tra lampo e tuono passano 9 secondi. A quanti km circa è il temporale?", answer: 3, unit: "km", explain: "9 : 3 = 3 km (340 × 9 = 3060 m)." }
      ]
    }
  ],
  glossary: [
    { t: "Sorgente luminosa", d: "Corpo che produce luce propria, come il Sole o una lampadina." },
    { t: "Corpo opaco", d: "Corpo che non lascia passare la luce e produce ombra." },
    { t: "Corpo trasparente", d: "Corpo che lascia passare la luce, permettendo di vedere attraverso." },
    { t: "Riflessione", d: "Rimbalzo della luce (o del suono) su una superficie." },
    { t: "Rifrazione", d: "Deviazione della luce quando passa da un materiale a un altro." },
    { t: "Vibrazione", d: "Movimento rapido avanti e indietro che produce il suono." },
    { t: "Eco", d: "Suono riflesso da un ostacolo che torna a chi l'ha prodotto." },
    { t: "Decibel", d: "Unità di misura dell'intensità del suono." },
    { t: "Ultrasuoni", d: "Suoni troppo acuti per l'orecchio umano, usati da pipistrelli e delfini." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di questi è una sorgente luminosa?", options: ["La Luna", "Una candela accesa", "Uno specchio"], answer: 1, explain: "La candela produce luce propria; Luna e specchio la riflettono." },
      { type: "mc", q: "Un muro di mattoni è un corpo…", options: ["trasparente", "traslucido", "opaco"], answer: 2, explain: "Non lascia passare la luce: è opaco." },
      { type: "tf", q: "La luce viaggia in linea retta.", answer: true, explain: "Per questo si formano le ombre." },
      { type: "text", q: "Come si chiama il fenomeno per cui una matita in un bicchiere d'acqua sembra spezzata?", answer: ["rifrazione", "la rifrazione"], explain: "È la rifrazione: la luce devia passando dall'acqua all'aria." },
      { type: "mc", q: "Chi scoprì, con un prisma, che la luce bianca contiene tutti i colori?", options: ["Galileo Galilei", "Isaac Newton", "Alessandro Volta"], answer: 1, explain: "Isaac Newton, nel 1666." },
      { type: "mc", q: "Perché vediamo il lampo prima di sentire il tuono?", options: ["Perché il tuono parte dopo", "Perché la luce è molto più veloce del suono", "Perché gli occhi sono più vicini al cervello"], answer: 1, explain: "La luce viaggia a 300 000 km/s, il suono a circa 340 m/s." },
      { type: "mc", q: "In quale mezzo il suono è più veloce?", options: ["Aria", "Acqua", "Acciaio"], answer: 2, explain: "Nei solidi il suono viaggia più velocemente: nell'acciaio circa 5000 m/s." },
      { type: "mc", q: "Un suono acuto è prodotto da vibrazioni…", options: ["lente", "veloci", "assenti"], answer: 1, explain: "Più vibrazioni al secondo = suono più acuto." },
      { type: "text", q: "Come si chiama il suono che rimbalza su una parete lontana e torna indietro?", answer: ["eco", "l'eco", "l eco"], explain: "È l'eco." },
      { type: "num", q: "Il suono viaggia a 340 m al secondo. Quanti metri percorre in 5 secondi?", answer: 1700, unit: "m", explain: "340 × 5 = 1700 m." },
      { type: "order", q: "Ordina il viaggio di un suono.", items: ["La corda della chitarra vibra", "L'aria vicina viene spinta", "L'onda sonora viaggia nell'aria", "Il timpano dell'orecchio vibra", "Il cervello riconosce il suono"], explain: "Vibrazione → onda nel mezzo → orecchio → cervello." },
      { type: "tf", q: "I pipistrelli usano gli ultrasuoni per orientarsi al buio.", answer: true, explain: "Emettono ultrasuoni e ascoltano l'eco: è l'ecolocalizzazione." }
    ]
  }
});
