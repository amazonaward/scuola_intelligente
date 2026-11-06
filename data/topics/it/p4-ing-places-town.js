TOPIC('it', {
  id: "p4-ing-places-town",
  title: "Places in town",
  intro: "Sei a Londra e vuoi trovare la biblioteca 📚, il cinema 🎬 o… il bagno! Impariamo i nomi dei <b>luoghi della città</b> in inglese, le parole per dire <b>dove si trova</b> qualcosa (next to, opposite, between…) e come <b>chiedere e dare indicazioni</b>: <i>«Excuse me, where's the station?» – «Go straight on and turn left!»</i> 🗺️",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Places in town: i luoghi della città",
      html: `<table>
<tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>
<tr><td>🏫 <b>school</b></td><td>scuul</td><td>scuola</td></tr>
<tr><td>🏥 <b>hospital</b></td><td>hòspital</td><td>ospedale</td></tr>
<tr><td>📚 <b>library</b></td><td>làibreri</td><td>biblioteca (attenzione! non libreria)</td></tr>
<tr><td>📖 <b>bookshop</b></td><td>bùkshop</td><td>libreria</td></tr>
<tr><td>🛒 <b>supermarket</b></td><td>supermàrket</td><td>supermercato</td></tr>
<tr><td>🥖 <b>baker's</b> / bakery</td><td>bèikers</td><td>panetteria</td></tr>
<tr><td>💊 <b>chemist's</b> / pharmacy</td><td>kèmists / fàrmasi</td><td>farmacia</td></tr>
<tr><td>🏦 <b>bank</b></td><td>benk</td><td>banca</td></tr>
<tr><td>📮 <b>post office</b></td><td>pòust òfis</td><td>ufficio postale</td></tr>
<tr><td>🚉 <b>train station</b></td><td>trein stèiscion</td><td>stazione dei treni</td></tr>
<tr><td>🚓 <b>police station</b></td><td>polìis stèiscion</td><td>stazione di polizia</td></tr>
<tr><td>🎬 <b>cinema</b></td><td>sìnema</td><td>cinema</td></tr>
<tr><td>🏛️ <b>museum</b></td><td>miuzìam</td><td>museo</td></tr>
<tr><td>🌳 <b>park</b></td><td>paak</td><td>parco</td></tr>
<tr><td>🏊 <b>swimming pool</b></td><td>suìmmin puul</td><td>piscina</td></tr>
<tr><td>🍽️ <b>restaurant</b></td><td>rèstront</td><td>ristorante</td></tr>
</table>
<p>⚠️ <b>Falso amico</b>: <i>library</i> sembra "libreria" ma vuol dire <b>biblioteca</b> (dove i libri si prendono in prestito). La libreria dove si comprano i libri è il <b>bookshop</b>.</p>`
    },
    {
      type: "widget",
      title: "Abbina il luogo",
      widget: "match",
      options: {
        pairs: [
          ["library", "biblioteca"],
          ["chemist's", "farmacia"],
          ["post office", "ufficio postale"],
          ["baker's", "panetteria"],
          ["swimming pool", "piscina"],
          ["hospital", "ospedale"],
          ["train station", "stazione"],
          ["bookshop", "libreria"]
        ]
      },
      caption: "Tocca una parola inglese e poi la sua traduzione. Occhio a library e bookshop!"
    },
    {
      type: "text",
      title: "2. Dove si trova? Le preposizioni di luogo",
      html: `<p>Per dire dove si trova un edificio usiamo <b>It's…</b> + una preposizione:</p>
<ul>
<li>➡️ <b>next to</b> = accanto a → <i>The bank is next to the school.</i></li>
<li>↔️ <b>opposite</b> = di fronte a (dall'altra parte della strada) → <i>The park is opposite the museum.</i></li>
<li>⬅️➡️ <b>between</b> = tra (due cose) → <i>The baker's is between the bank and the cinema.</i></li>
<li>🔙 <b>behind</b> = dietro → <i>The car park is behind the supermarket.</i></li>
<li>🔜 <b>in front of</b> = davanti a → <i>The bus stop is in front of the hospital.</i></li>
<li>📍 <b>near</b> = vicino a → <i>The station is near the park.</i></li>
<li>🛣️ <b>on the corner</b> = all'angolo · <b>in … Street</b> = in via… → <i>The library is in Green Street.</i></li>
</ul>
<p>Domanda: <b>Where's the…?</b> (Dov'è…?) · <b>Is there a … near here?</b> (C'è un… qui vicino?) → <b>Yes, there is.</b> / <b>No, there isn't.</b></p>`
    },
    {
      type: "svg",
      title: "La mappa di Greentown",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#dcfce7"/>
<rect x="0" y="150" width="600" height="50" fill="#94a3b8"/>
<rect x="270" y="0" width="60" height="340" fill="#94a3b8"/>
<g stroke="#ffffff" stroke-width="4" stroke-dasharray="14 10"><line x1="0" y1="175" x2="270" y2="175"/><line x1="330" y1="175" x2="600" y2="175"/><line x1="300" y1="0" x2="300" y2="150"/><line x1="300" y1="200" x2="300" y2="340"/></g>
<g stroke="#1e293b" stroke-width="3">
<rect x="20" y="40" width="70" height="90" fill="#fca5a5"/>
<rect x="100" y="40" width="70" height="90" fill="#fde68a"/>
<rect x="180" y="40" width="70" height="90" fill="#c4b5fd"/>
<rect x="350" y="40" width="110" height="90" fill="#86efac"/>
<rect x="470" y="40" width="110" height="90" fill="#93c5fd"/>
<rect x="20" y="220" width="110" height="90" fill="#fdba74"/>
<rect x="140" y="220" width="110" height="90" fill="#f9a8d4"/>
<rect x="350" y="220" width="230" height="90" fill="#a5f3fc"/>
</g>
<g font-size="15" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="55" y="80">🏦</text><text x="55" y="105">bank</text>
<text x="135" y="80">🥖</text><text x="135" y="105">baker's</text>
<text x="215" y="80">🎬</text><text x="215" y="105">cinema</text>
<text x="405" y="80">🌳</text><text x="405" y="105">park</text>
<text x="525" y="80">📚</text><text x="525" y="105">library</text>
<text x="75" y="260">🏫</text><text x="75" y="285">school</text>
<text x="195" y="260">💊</text><text x="195" y="285">chemist's</text>
<text x="465" y="260">🚉</text><text x="465" y="285">train station</text>
</g>
<text x="135" y="25" font-size="16" fill="#166534" text-anchor="middle" font-weight="bold">Green Street</text>
<text x="465" y="335" font-size="16" fill="#0f172a" text-anchor="middle">The baker's is BETWEEN the bank and the cinema.</text>
</svg>`,
      caption: "Il baker's è between (tra) bank e cinema. La school è opposite (di fronte a) la bank. Il chemist's è next to (accanto a) la school."
    },
    {
      type: "quiz",
      title: "Mini-quiz: luoghi e preposizioni",
      questions: [
        { type: "mc", q: "«Library» significa…", options: ["libreria", "biblioteca", "laboratorio"], answer: 1, explain: "È un falso amico: library = biblioteca. La libreria è il bookshop." },
        { type: "mc", q: "Guarda la mappa: il cinema è ___ il baker's.", options: ["next to", "behind", "opposite"], answer: 0, explain: "Cinema e baker's sono uno accanto all'altro: next to." },
        { type: "mc", q: "«Opposite» vuol dire…", options: ["accanto", "di fronte", "dietro"], answer: 1, explain: "Opposite = di fronte, dall'altra parte della strada." },
        { type: "tf", q: "Per comprare le medicine vai al «chemist's».", answer: true, explain: "Chemist's (inglese britannico) o pharmacy = farmacia." }
      ]
    },
    {
      type: "text",
      title: "3. Chiedere e dare indicazioni",
      html: `<p>Prima di tutto la gentilezza: si comincia sempre con <b>Excuse me…</b> (Mi scusi…) e si finisce con <b>Thank you!</b></p>
<p><b>Per chiedere:</b></p>
<ul>
<li><b>Excuse me, where's the museum?</b> = Mi scusi, dov'è il museo?</li>
<li><b>How do I get to the station?</b> = Come arrivo alla stazione?</li>
<li><b>Is it far?</b> = È lontano? → <i>No, it's near. / It's five minutes on foot.</i></li>
</ul>
<p><b>Per rispondere:</b></p>
<ul>
<li>⬆️ <b>Go straight on.</b> = Vai sempre dritto.</li>
<li>⬅️ <b>Turn left.</b> = Gira a sinistra. · ➡️ <b>Turn right.</b> = Gira a destra.</li>
<li>1️⃣ <b>Take the first on the left.</b> = Prendi la prima a sinistra. (2️⃣ second, 3️⃣ third)</li>
<li>🚦 <b>Go past the traffic lights.</b> = Supera il semaforo.</li>
<li>🚸 <b>Cross the road.</b> = Attraversa la strada.</li>
<li>📍 <b>It's on your left / on your right.</b> = È alla tua sinistra / destra.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Le frecce delle indicazioni",
      svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<g stroke="#1d4ed8" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M90 160 L90 50"/><path d="M65 75 L90 50 L115 75"/>
<path d="M300 160 L300 100 L230 100"/><path d="M255 75 L230 100 L255 125"/>
<path d="M480 160 L480 100 L550 100"/><path d="M525 75 L550 100 L525 125"/>
</g>
<g font-size="22" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="90" y="200">Go straight on</text>
<text x="300" y="200">Turn left</text>
<text x="500" y="200">Turn right</text>
</g>
<text x="300" y="30" font-size="16" fill="#6b7280" text-anchor="middle">L = left (sinistra) · R = right (destra)</text>
</svg>`,
      caption: "Trucco per non confondere left e right: con la mano SINISTRA, pollice e indice aperti formano una L, come Left!"
    },
    {
      type: "example",
      title: "Esempio pratico: come arrivo alla biblioteca?",
      html: `<p><b>Tourist:</b> Excuse me, how do I get to the library?<br>
<b>Girl:</b> Go straight on along Green Street. Go past the traffic lights and take the first on the right.<br>
<b>Tourist:</b> The first on the right?<br>
<b>Girl:</b> Yes. The library is on your left, opposite the park. 📚<br>
<b>Tourist:</b> Is it far?<br>
<b>Girl:</b> No, it isn't. It's five minutes on foot.<br>
<b>Tourist:</b> Thank you very much!<br>
<b>Girl:</b> You're welcome! 😊</p>
<p><i>You're welcome</i> = Prego. Si risponde così quando qualcuno ti ringrazia.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la mia città",
      html: `<p>Ecco come Giulia descrive il suo paese a un'amica di penna inglese:</p>
<p><i>«In my town there is a big park and there are two supermarkets. There isn't a cinema, but there is a library. My school is in Roma Street, next to the post office and opposite the church. ⛪ The swimming pool is behind the school. My favourite place is the park: I play there with my friends!»</i></p>
<p>Nota: <b>there is</b> + una cosa (c'è), <b>there are</b> + più cose (ci sono), <b>there isn't</b> (non c'è). Prova a scrivere la descrizione della tua città!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Inglese di Londra e di New York",
      html: `<p>Inglesi e americani usano parole diverse per alcuni luoghi:</p>
<ul>
<li>🇬🇧 <b>chemist's</b> → 🇺🇸 <b>drugstore</b> / pharmacy</li>
<li>🇬🇧 <b>cinema</b> → 🇺🇸 <b>movie theater</b></li>
<li>🇬🇧 <b>shop</b> → 🇺🇸 <b>store</b></li>
<li>🇬🇧 <b>underground</b> / Tube → 🇺🇸 <b>subway</b> (metropolitana)</li>
<li>🇬🇧 <b>car park</b> → 🇺🇸 <b>parking lot</b></li>
</ul>
<p>E la metropolitana di Londra, la <b>Tube</b>, è la più antica del mondo: la prima linea fu aperta nel <b>1863</b>, con treni a vapore! 🚂</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Nel Regno Unito si guida a sinistra",
      html: `<p>Nel Regno Unito (e anche in Irlanda, Australia, Giappone, India…) le auto viaggiano sul <b>lato sinistro</b> della strada. Per questo a Londra sulle strisce pedonali c'è scritto per terra <b>LOOK RIGHT</b> o <b>LOOK LEFT</b>: ricorda ai turisti da che parte arrivano le auto! 🚗👀</p>
<p>Anche i famosi autobus rossi a due piani si chiamano <b>double-decker</b> ("a due ponti", come una nave).</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Library = biblioteca; bookshop = libreria.</li>
<li>Posizione: <b>next to</b>, <b>opposite</b>, <b>between … and …</b>, <b>behind</b>, <b>in front of</b>, <b>near</b>.</li>
<li>Chiedere: <b>Excuse me, where's…? / How do I get to…?</b></li>
<li>Indicazioni: <b>go straight on</b>, <b>turn left / right</b>, <b>take the first / second on the left</b>, <b>it's on your right</b>.</li>
<li><b>There is</b> (c'è) / <b>there are</b> (ci sono).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per orientarsi",
      intro: "Le indicazioni stradali non si danno nello stesso modo in tutto il mondo! Scopri come si fa a New York e in Giappone, prova a pensare come un robot e gioca con la mappa.",
      tabs: [
        {
          label: "🇺🇸 I blocks di New York",
          html: `<p>Molte città americane, come New York, sono costruite a <b>griglia</b>: strade dritte che si incrociano ad angolo retto, come i quadretti del quaderno. Lo spazio tra quattro strade si chiama <b>block</b> (isolato).</p>
<p>Per questo gli americani danno indicazioni così: <i>«Walk <b>three blocks</b> north and turn right.»</i> = Cammina per tre isolati verso nord e gira a destra.</p>
<p>A Manhattan le strade (<i>Streets</i>) sono numerate: 1st Street, 2nd Street… e le grandi vie verticali si chiamano <i>Avenues</i>. È come una battaglia navale!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#94a3b8"/>
<g fill="#e2e8f0" stroke="#475569" stroke-width="2">
<rect x="20" y="20" width="120" height="60"/><rect x="160" y="20" width="120" height="60"/><rect x="300" y="20" width="120" height="60"/><rect x="440" y="20" width="120" height="60"/>
<rect x="20" y="100" width="120" height="60"/><rect x="160" y="100" width="120" height="60"/><rect x="300" y="100" width="120" height="60"/><rect x="440" y="100" width="120" height="60"/>
<rect x="20" y="180" width="120" height="60"/><rect x="160" y="180" width="120" height="60"/><rect x="300" y="180" width="120" height="60"/><rect x="440" y="180" width="120" height="60"/>
</g>
<path d="M150 250 L150 90 L430 90" stroke="#dc2626" stroke-width="7" fill="none"/>
<circle cx="150" cy="250" r="9" fill="#16a34a"/>
<circle cx="430" cy="90" r="9" fill="#dc2626"/>
<g font-size="15" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="80" y="215">block</text>
<text x="80" y="55">block</text>
<text x="360" y="215">block</text>
</g>
<text x="290" y="135" font-size="15" fill="#7f1d1d" font-weight="bold" text-anchor="middle">2 blocks up, then right</text>
</svg>`
        },
        {
          label: "🇯🇵 Il Giappone senza nomi di via",
          html: `<p>In Giappone la maggior parte delle strade <b>non ha un nome</b>! Gli indirizzi sono fatti di <b>numeri di zona e di isolato</b>: si dice in quale quartiere, in quale isolato e quale numero ha l'edificio.</p>
<p>Per questo i giapponesi danno indicazioni usando i <b>punti di riferimento</b> (landmarks): "dopo il konbini (negozio aperto 24 ore), gira al semaforo dove c'è la banca…". E spesso disegnano una piccola mappa! ✏️🗺️</p>
<p>Anche in inglese funziona: <i>«Turn left <b>at the bank</b>. The museum is <b>after the bridge</b>.»</i></p>`
        },
        {
          label: "🤖 Pensa come un robot",
          html: `<p>Le indicazioni sono come un piccolo <b>programma</b> per un robot (lo fai anche in coding!). Ogni frase inglese è un comando:</p>
<table>
<tr><th>Comando</th><th>Il robot…</th></tr>
<tr><td>Go straight on (2)</td><td>⬆️⬆️ avanza di 2 caselle</td></tr>
<tr><td>Turn right</td><td>↪️ ruota a destra</td></tr>
<tr><td>Go straight on (1)</td><td>⬆️ avanza di 1</td></tr>
<tr><td>Turn left</td><td>↩️ ruota a sinistra</td></tr>
<tr><td>It's on your right</td><td>🏁 l'arrivo è a destra</td></tr>
</table>
<p>Attenzione: "turn right" dipende da <b>dove guarda</b> il robot, non dal foglio! Per questo, se ti perdi, girati sulla mappa nel verso in cui stai camminando.</p>`
        },
        {
          label: "🗺️ Gioca con la mappa",
          html: `<p>Guarda la mappa e tocca ogni numero: scegli il luogo che si trova lì leggendo gli indizi.</p>
<ul>
<li>The <b>museum</b> is opposite the hospital.</li>
<li>The <b>post office</b> is next to the hospital.</li>
<li>The <b>swimming pool</b> is next to the park, on the corner.</li>
<li>The <b>supermarket</b> is between the museum and the cinema.</li>
</ul>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<rect x="0" y="130" width="600" height="44" fill="#94a3b8"/>
<g stroke="#1e293b" stroke-width="3">
<rect x="30" y="30" width="150" height="85" fill="#e2e8f0"/>
<rect x="200" y="30" width="150" height="85" fill="#e2e8f0"/>
<rect x="370" y="30" width="150" height="85" fill="#fde68a"/>
<rect x="30" y="190" width="150" height="85" fill="#fecaca"/>
<rect x="200" y="190" width="150" height="85" fill="#e2e8f0"/>
<rect x="370" y="190" width="110" height="85" fill="#86efac"/>
<rect x="490" y="190" width="90" height="85" fill="#e2e8f0"/>
</g>
<g font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="445" y="80">🎬 cinema</text>
<text x="105" y="240">🏥 hospital</text>
<text x="425" y="240">🌳 park</text>
</g>
</svg>`,
            spots: [
              { x: 105, y: 72, label: "museum" },
              { x: 275, y: 72, label: "supermarket" },
              { x: 275, y: 232, label: "post office" },
              { x: 535, y: 232, label: "swimming pool" }
            ]
          }
        },
        {
          label: "🖐️ Left o right?",
          html: `<p>Molti bambini (e anche adulti!) confondono destra e sinistra. Due trucchi:</p>
<ul>
<li>✋ Allunga le mani davanti a te con il dorso verso l'alto, pollici aperti: la mano che forma una <b>L</b> diritta è la <b>Left</b> (sinistra).</li>
<li>✍️ <b>Right</b> somiglia a <b>write</b> (scrivere): per la maggior parte delle persone è la mano con cui si scrive. (Se sei mancino, ricordalo al contrario!)</li>
</ul>
<p>E <b>straight on</b>? <i>Straight</i> vuol dire "dritto": vai dritto davanti a te.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: muoversi in città in inglese",
      nodes: [
        { id: "town", label: "Town / city", x: 50, y: 8, color: "#2563eb", html: "Town = cittadina; city = città grande; village = paese piccolo.", why: "<i>Town</i> viene dall'inglese antico <i>tūn</i>, che significava \"recinto, terreno chiuso\": i primi villaggi erano gruppi di case protetti da una palizzata. Lo trovi ancora in tanti nomi di luoghi: Brighton, Southampton." },
        { id: "luoghi", label: "Places", x: 18, y: 32, color: "#16a34a", html: "school, library, bank, post office, chemist's, train station…", why: "Molti nomi vengono dal latino o dal francese, perché dopo il 1066 i Normanni portarono in Inghilterra il francese: <i>hospital</i>, <i>museum</i>, <i>library</i> (dal latino <i>liber</i>, libro) somigliano all'italiano." },
        { id: "falsi", label: "Falsi amici", x: 18, y: 62, color: "#ef4444", html: "library = biblioteca, non libreria.", why: "Sono parole che hanno la stessa origine latina ma nel tempo hanno preso significati diversi nelle due lingue. Per questo sembrano uguali ma ingannano." },
        { id: "possessivo", label: "baker's, chemist's", x: 18, y: 88, color: "#a855f7", html: "Negozi indicati con il nome di chi ci lavora + 's.", why: "È un'abbreviazione: <i>the baker's</i> = <i>the baker's shop</i>, \"il negozio del fornaio\". La parola <i>shop</i> si è persa perché tutti la capivano lo stesso." },
        { id: "prep", label: "Preposizioni di luogo", x: 50, y: 40, color: "#f59e0b", html: "next to, opposite, between, behind, in front of, near.", why: "Descrivono la posizione rispetto a un punto di riferimento: per capirle bisogna sempre sapere \"rispetto a che cosa\". <i>Between</i> viene da \"by two\", cioè \"presso due\": per questo si usa con due cose." },
        { id: "chiedere", label: "Excuse me, where's…?", x: 82, y: 32, color: "#0ea5e9", html: "Formule per chiedere la strada in modo educato.", why: "In inglese la cortesia è molto importante: senza <i>Excuse me</i> e <i>please</i> una richiesta suona brusca. <i>Excuse me</i> serve per attirare l'attenzione di uno sconosciuto." },
        { id: "indicazioni", label: "Directions", x: 82, y: 62, color: "#14b8a6", html: "go straight on, turn left/right, take the first on the left.", why: "Sono frasi all'<b>imperativo</b>, la forma dei comandi: in inglese è facilissima, perché è il verbo da solo senza soggetto (Go! Turn! Cross!). Gli stessi comandi si usano per programmare i robot." },
        { id: "uk-us", label: "UK e USA", x: 82, y: 88, color: "#64748b", html: "chemist's/drugstore, cinema/movie theater, underground/subway.", why: "Dopo l'indipendenza degli Stati Uniti (1776) l'inglese d'America ha continuato a cambiare per conto suo. Il dizionario di Noah Webster (1828) fissò anche un'ortografia diversa: colour → color, centre → center." },
        { id: "thereis", label: "There is / there are", x: 50, y: 70, color: "#db2777", html: "C'è / ci sono: There is a park. There are two shops.", why: "<i>There</i> qui non vuol dire \"là\": è un soggetto \"finto\" che serve perché in inglese ogni frase deve avere un soggetto. L'italiano usa \"ci\" nello stesso modo: c'è." }
      ],
      edges: [
        ["town", "luoghi", "è fatta di"],
        ["luoghi", "falsi", "attenzione ai"],
        ["luoghi", "possessivo", "negozi con 's"],
        ["town", "prep", "posizione con"],
        ["town", "chiedere", "se ti perdi"],
        ["chiedere", "indicazioni", "ti rispondono con"],
        ["indicazioni", "uk-us", "parole diverse in"],
        ["prep", "thereis", "si usano con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: indicazioni",
      questions: [
        { type: "mc", q: "«Turn right» significa…", options: ["gira a destra", "gira a sinistra", "vai dritto"], answer: 0, explain: "Right = destra." },
        { type: "mc", q: "Come si dice «Prendi la seconda a sinistra»?", options: ["Take the second on the right.", "Take the second on the left.", "Go second left straight."], answer: 1, explain: "Second = seconda, left = sinistra." },
        { type: "mc", q: "Qualcuno ti dice «Thank you!». Rispondi…", options: ["Excuse me!", "You're welcome!", "Turn left!"], answer: 1, explain: "You're welcome = prego." },
        { type: "text", q: "Come si dice «Vai sempre dritto» in inglese? (Go … on)", answer: ["go straight on", "straight on"], explain: "Go straight on." }
      ]
    }
  ],
  glossary: [
    { t: "Library", d: "Biblioteca (falso amico: non è la libreria)." },
    { t: "Bookshop", d: "Libreria, il negozio dove si comprano libri." },
    { t: "Chemist's / pharmacy", d: "Farmacia (in USA: drugstore)." },
    { t: "Post office", d: "Ufficio postale." },
    { t: "Next to / opposite / between", d: "Accanto a / di fronte a / tra." },
    { t: "Behind / in front of", d: "Dietro / davanti a." },
    { t: "Go straight on", d: "Vai sempre dritto." },
    { t: "Turn left / turn right", d: "Gira a sinistra / gira a destra." },
    { t: "Excuse me", d: "Mi scusi: per attirare l'attenzione in modo educato." },
    { t: "Block", d: "Isolato: lo spazio tra quattro strade, usato nelle città americane." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dove vai per prendere un libro in prestito?", options: ["bookshop", "library", "bank"], answer: 1, explain: "In biblioteca = library." },
      { type: "mc", q: "Dove compri il pane?", options: ["baker's", "chemist's", "post office"], answer: 0, explain: "Baker's = panetteria." },
      { type: "mc", q: "«The bank is between the school and the park.» La banca è…", options: ["dietro la scuola", "tra la scuola e il parco", "di fronte al parco"], answer: 1, explain: "Between … and … = tra … e …" },
      { type: "mc", q: "«Behind» significa…", options: ["davanti", "dietro", "accanto"], answer: 1, explain: "Behind = dietro; in front of = davanti." },
      { type: "tf", q: "«Opposite» vuol dire «accanto a».", answer: false, explain: "Opposite = di fronte a. Accanto a = next to." },
      { type: "tf", q: "Negli Stati Uniti il cinema si chiama spesso «movie theater».", answer: true, explain: "Cinema (UK) = movie theater (USA)." },
      { type: "text", q: "Come si dice «stazione dei treni» in inglese?", answer: ["train station", "station", "railway station"], explain: "Train station (o railway station)." },
      { type: "text", q: "Completa: «Excuse me, ___ is the museum?» (dove)", answer: ["where"], explain: "Where = dove." },
      { type: "mc", q: "«Is there a supermarket near here?» – Risposta corretta:", options: ["Yes, there is.", "Yes, it are.", "Yes, I am."], answer: 0, explain: "Alla domanda con «Is there…?» si risponde «Yes, there is / No, there isn't»." },
      { type: "order", q: "Metti in ordine il dialogo.", items: ["Excuse me, where's the cinema?", "Go straight on and turn left.", "Is it far?", "No, it's five minutes on foot.", "Thank you!", "You're welcome!"], explain: "Si chiede con Excuse me, si danno le indicazioni, si chiede la distanza, si ringrazia e si risponde «prego»." },
      { type: "mc", q: "Come si dice «Attraversa la strada»?", options: ["Cross the road.", "Turn the road.", "Go past the road."], answer: 0, explain: "Cross = attraversare." }
    ]
  }
});
