TOPIC('ro', {
  id: "p4-ing-places-town",
  title: "Places in town",
  intro: "Ești la Londra și vrei să găsești biblioteca 📚, cinematograful 🎬 sau… toaleta! Învățăm numele <b>locurilor din oraș</b> în engleză, cuvintele pentru a spune <b>unde se află</b> ceva (next to, opposite, between…) și cum să <b>ceri și să dai indicații</b>: <i>«Excuse me, where's the station?» – «Go straight on and turn left!»</i> 🗺️",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Places in town: locurile din oraș",
      html: `<table>
<tr><th>Engleză</th><th>Se pronunță</th><th>Română</th></tr>
<tr><td>🏫 <b>school</b></td><td>scuul</td><td>școală</td></tr>
<tr><td>🏥 <b>hospital</b></td><td>hospital</td><td>spital</td></tr>
<tr><td>📚 <b>library</b></td><td>laibrări</td><td>bibliotecă (atenție! nu librărie)</td></tr>
<tr><td>📖 <b>bookshop</b></td><td>bukșop</td><td>librărie</td></tr>
<tr><td>🛒 <b>supermarket</b></td><td>supămarchet</td><td>supermarket</td></tr>
<tr><td>🥖 <b>baker's</b> / bakery</td><td>beicăz</td><td>brutărie</td></tr>
<tr><td>💊 <b>chemist's</b> / pharmacy</td><td>chemists / farmăsi</td><td>farmacie</td></tr>
<tr><td>🏦 <b>bank</b></td><td>benk</td><td>bancă</td></tr>
<tr><td>📮 <b>post office</b></td><td>poust ofis</td><td>oficiu poștal</td></tr>
<tr><td>🚉 <b>train station</b></td><td>trein steișăn</td><td>gara</td></tr>
<tr><td>🚓 <b>police station</b></td><td>pălis steișăn</td><td>secție de poliție</td></tr>
<tr><td>🎬 <b>cinema</b></td><td>sinămă</td><td>cinematograf</td></tr>
<tr><td>🏛️ <b>museum</b></td><td>miuziăm</td><td>muzeu</td></tr>
<tr><td>🌳 <b>park</b></td><td>paak</td><td>parc</td></tr>
<tr><td>🏊 <b>swimming pool</b></td><td>suimin puul</td><td>piscină</td></tr>
<tr><td>🍽️ <b>restaurant</b></td><td>restărănt</td><td>restaurant</td></tr>
</table>
<p>⚠️ <b>Fals prieten</b>: <i>library</i> seamănă cu „librărie”, dar înseamnă <b>bibliotecă</b> (unde cărțile se iau cu împrumut). Librăria unde se cumpără cărți este <b>bookshop</b>.</p>`
    },
    {
      type: "widget",
      title: "Potrivește locul",
      widget: "match",
      options: {
        pairs: [
          ["library", "bibliotecă"],
          ["chemist's", "farmacie"],
          ["post office", "oficiu poștal"],
          ["baker's", "brutărie"],
          ["swimming pool", "piscină"],
          ["hospital", "spital"],
          ["train station", "gară"],
          ["bookshop", "librărie"]
        ]
      },
      caption: "Atinge un cuvânt englezesc și apoi traducerea lui. Atenție la library și bookshop!"
    },
    {
      type: "text",
      title: "2. Unde se află? Prepozițiile de loc",
      html: `<p>Pentru a spune unde se află o clădire folosim <b>It's…</b> + o prepoziție:</p>
<ul>
<li>➡️ <b>next to</b> = lângă → <i>The bank is next to the school.</i></li>
<li>↔️ <b>opposite</b> = vizavi de (de cealaltă parte a străzii) → <i>The park is opposite the museum.</i></li>
<li>⬅️➡️ <b>between</b> = între (două lucruri) → <i>The baker's is between the bank and the cinema.</i></li>
<li>🔙 <b>behind</b> = în spatele → <i>The car park is behind the supermarket.</i></li>
<li>🔜 <b>in front of</b> = în fața → <i>The bus stop is in front of the hospital.</i></li>
<li>📍 <b>near</b> = aproape de → <i>The station is near the park.</i></li>
<li>🛣️ <b>on the corner</b> = la colț · <b>in … Street</b> = pe strada… → <i>The library is in Green Street.</i></li>
</ul>
<p>Întrebare: <b>Where's the…?</b> (Unde este…?) · <b>Is there a … near here?</b> (Este un… pe aproape?) → <b>Yes, there is.</b> / <b>No, there isn't.</b></p>`
    },
    {
      type: "svg",
      title: "Harta orașului Greentown",
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
      caption: "Baker's este between (între) bank și cinema. School este opposite (vizavi de) bank. Chemist's este next to (lângă) school."
    },
    {
      type: "quiz",
      title: "Mini-test: locuri și prepoziții",
      questions: [
        { type: "mc", q: "«Library» înseamnă…", options: ["librărie", "bibliotecă", "laborator"], answer: 1, explain: "Este un fals prieten: library = bibliotecă. Librăria este bookshop." },
        { type: "mc", q: "Uită-te pe hartă: cinematograful este ___ baker's.", options: ["next to", "behind", "opposite"], answer: 0, explain: "Cinema și baker's sunt unul lângă altul: next to." },
        { type: "mc", q: "«Opposite» înseamnă…", options: ["lângă", "vizavi", "în spate"], answer: 1, explain: "Opposite = vizavi, de cealaltă parte a străzii." },
        { type: "tf", q: "Pentru a cumpăra medicamente mergi la «chemist's».", answer: true, explain: "Chemist's (engleza britanică) sau pharmacy = farmacie." }
      ]
    },
    {
      type: "text",
      title: "3. A cere și a da indicații",
      html: `<p>Înainte de toate, politețea: se începe mereu cu <b>Excuse me…</b> (Scuzați-mă…) și se termină cu <b>Thank you!</b></p>
<p><b>Pentru a cere:</b></p>
<ul>
<li><b>Excuse me, where's the museum?</b> = Scuzați-mă, unde este muzeul?</li>
<li><b>How do I get to the station?</b> = Cum ajung la gară?</li>
<li><b>Is it far?</b> = Este departe? → <i>No, it's near. / It's five minutes on foot.</i></li>
</ul>
<p><b>Pentru a răspunde:</b></p>
<ul>
<li>⬆️ <b>Go straight on.</b> = Mergi tot înainte.</li>
<li>⬅️ <b>Turn left.</b> = Virează la stânga. · ➡️ <b>Turn right.</b> = Virează la dreapta.</li>
<li>1️⃣ <b>Take the first on the left.</b> = Ia prima la stânga. (2️⃣ second, 3️⃣ third)</li>
<li>🚦 <b>Go past the traffic lights.</b> = Depășește semaforul.</li>
<li>🚸 <b>Cross the road.</b> = Traversează strada.</li>
<li>📍 <b>It's on your left / on your right.</b> = Este în stânga ta / în dreapta ta.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Săgețile indicațiilor",
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
<text x="300" y="30" font-size="16" fill="#6b7280" text-anchor="middle">L = left (stânga) · R = right (dreapta)</text>
</svg>`,
      caption: "Truc ca să nu confunzi left și right: cu mâna STÂNGĂ, degetul mare și arătătorul desfăcute formează un L, ca la Left!"
    },
    {
      type: "example",
      title: "Exemplu practic: cum ajung la bibliotecă?",
      html: `<p><b>Tourist:</b> Excuse me, how do I get to the library?<br>
<b>Girl:</b> Go straight on along Green Street. Go past the traffic lights and take the first on the right.<br>
<b>Tourist:</b> The first on the right?<br>
<b>Girl:</b> Yes. The library is on your left, opposite the park. 📚<br>
<b>Tourist:</b> Is it far?<br>
<b>Girl:</b> No, it isn't. It's five minutes on foot.<br>
<b>Tourist:</b> Thank you very much!<br>
<b>Girl:</b> You're welcome! 😊</p>
<p><i>You're welcome</i> = Cu plăcere. Așa se răspunde atunci când cineva îți mulțumește.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: orașul meu",
      html: `<p>Iată cum își descrie Giulia orașul unei prietene de corespondență din Anglia:</p>
<p><i>«In my town there is a big park and there are two supermarkets. There isn't a cinema, but there is a library. My school is in Roma Street, next to the post office and opposite the church. ⛪ The swimming pool is behind the school. My favourite place is the park: I play there with my friends!»</i></p>
<p>Notă: <b>there is</b> + un singur lucru (este), <b>there are</b> + mai multe lucruri (sunt), <b>there isn't</b> (nu este). Încearcă să scrii descrierea orașului tău!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Engleza din Londra și cea din New York",
      html: `<p>Englezii și americanii folosesc cuvinte diferite pentru unele locuri:</p>
<ul>
<li>🇬🇧 <b>chemist's</b> → 🇺🇸 <b>drugstore</b> / pharmacy</li>
<li>🇬🇧 <b>cinema</b> → 🇺🇸 <b>movie theater</b></li>
<li>🇬🇧 <b>shop</b> → 🇺🇸 <b>store</b></li>
<li>🇬🇧 <b>underground</b> / Tube → 🇺🇸 <b>subway</b> (metrou)</li>
<li>🇬🇧 <b>car park</b> → 🇺🇸 <b>parking lot</b></li>
</ul>
<p>Iar metroul din Londra, <b>Tube</b>, este cel mai vechi din lume: prima linie a fost deschisă în <b>1863</b>, cu trenuri cu abur! 🚂</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? În Regatul Unit se circulă pe stânga",
      html: `<p>În Regatul Unit (și în Irlanda, Australia, Japonia, India…) mașinile circulă pe <b>partea stângă</b> a drumului. De aceea, la Londra, pe trecerile de pietoni scrie pe jos <b>LOOK RIGHT</b> sau <b>LOOK LEFT</b>: le amintește turiștilor din ce parte vin mașinile! 🚗👀</p>
<p>Și celebrele autobuze roșii cu două etaje se numesc <b>double-decker</b> („cu două punți”, ca o navă).</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Library = bibliotecă; bookshop = librărie.</li>
<li>Poziție: <b>next to</b>, <b>opposite</b>, <b>between … and …</b>, <b>behind</b>, <b>in front of</b>, <b>near</b>.</li>
<li>A cere: <b>Excuse me, where's…? / How do I get to…?</b></li>
<li>Indicații: <b>go straight on</b>, <b>turn left / right</b>, <b>take the first / second on the left</b>, <b>it's on your right</b>.</li>
<li><b>There is</b> (este) / <b>there are</b> (sunt).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a te orienta",
      intro: "Indicațiile nu se dau la fel peste tot în lume! Descoperă cum se face la New York și în Japonia, încearcă să gândești ca un robot și joacă-te cu harta.",
      tabs: [
        {
          label: "🇺🇸 Blocks din New York",
          html: `<p>Multe orașe americane, ca New York, sunt construite în <b>grilă</b>: străzi drepte care se încrucișează în unghi drept, ca pătrățelele din caiet. Spațiul dintre patru străzi se numește <b>block</b> (cvartal).</p>
<p>De aceea americanii dau indicații așa: <i>«Walk <b>three blocks</b> north and turn right.»</i> = Mergi trei cvartale spre nord și virează la dreapta.</p>
<p>În Manhattan străzile (<i>Streets</i>) sunt numerotate: 1st Street, 2nd Street… iar marile artere verticale se numesc <i>Avenues</i>. E ca la Bătălia navală!</p>`,
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
          label: "🇯🇵 Japonia fără nume de străzi",
          html: `<p>În Japonia cele mai multe străzi <b>nu au nume</b>! Adresele sunt făcute din <b>numere de zonă și de cvartal</b>: se spune în ce cartier, în ce cvartal și ce număr are clădirea.</p>
<p>De aceea japonezii dau indicații folosind <b>repere</b> (landmarks): „după konbini (magazin deschis non-stop), virează la semafor unde este banca…”. Și adesea desenează o hartă mică! ✏️🗺️</p>
<p>Funcționează și în engleză: <i>«Turn left <b>at the bank</b>. The museum is <b>after the bridge</b>.»</i></p>`
        },
        {
          label: "🤖 Gândește ca un robot",
          html: `<p>Indicațiile sunt ca un mic <b>program</b> pentru un robot (faci asta și la programare!). Fiecare propoziție englezească este o comandă:</p>
<table>
<tr><th>Comanda</th><th>Robotul…</th></tr>
<tr><td>Go straight on (2)</td><td>⬆️⬆️ înaintează 2 căsuțe</td></tr>
<tr><td>Turn right</td><td>↪️ se rotește la dreapta</td></tr>
<tr><td>Go straight on (1)</td><td>⬆️ înaintează 1</td></tr>
<tr><td>Turn left</td><td>↩️ se rotește la stânga</td></tr>
<tr><td>It's on your right</td><td>🏁 sosirea este în dreapta</td></tr>
</table>
<p>Atenție: „turn right” depinde de <b>încotro se uită</b> robotul, nu de foaie! De aceea, dacă te pierzi, rotește harta în direcția în care mergi.</p>`
        },
        {
          label: "🗺️ Joacă-te cu harta",
          html: `<p>Uită-te pe hartă și atinge fiecare număr: alege locul care se află acolo citind indiciile.</p>
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
          label: "🖐️ Left sau right?",
          html: `<p>Mulți copii (și adulți!) confundă dreapta și stânga. Două trucuri:</p>
<ul>
<li>✋ Întinde mâinile în față cu dosul în sus, degetele mari desfăcute: mâna care formează un <b>L</b> drept este <b>Left</b> (stânga).</li>
<li>✍️ <b>Right</b> seamănă cu <b>write</b> (a scrie): pentru cei mai mulți oameni este mâna cu care scriu. (Dacă ești stângaci, ține minte invers!)</li>
</ul>
<p>Și <b>straight on</b>? <i>Straight</i> înseamnă „drept”: mergi drept înainte.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta: cum ne mișcăm prin oraș în engleză",
      nodes: [
        { id: "town", label: "Town / city", x: 50, y: 8, color: "#2563eb", html: "Town = oraș mic; city = oraș mare; village = sat mic.", why: "<i>Town</i> vine din engleza veche <i>tūn</i>, care însemna „împrejmuire, teren închis”: primele sate erau grupuri de case apărate de un gard de lemn. Îl găsești încă în multe nume de locuri: Brighton, Southampton." },
        { id: "luoghi", label: "Places", x: 18, y: 32, color: "#16a34a", html: "school, library, bank, post office, chemist's, train station…", why: "Multe nume vin din latină sau din franceză, pentru că după 1066 normanzii au adus franceza în Anglia: <i>hospital</i>, <i>museum</i>, <i>library</i> (din latinescul <i>liber</i>, carte) seamănă cu româna." },
        { id: "falsi", label: "Fals prieteni", x: 18, y: 62, color: "#ef4444", html: "library = bibliotecă, nu librărie.", why: "Sunt cuvinte care au aceeași origine latină, dar cu timpul au căpătat sensuri diferite în cele două limbi. De aceea par la fel, dar te păcălesc." },
        { id: "possessivo", label: "baker's, chemist's", x: 18, y: 88, color: "#a855f7", html: "Magazine numite după cel care lucrează în ele + 's.", why: "Este o prescurtare: <i>the baker's</i> = <i>the baker's shop</i>, „magazinul brutarului”. Cuvântul <i>shop</i> s-a pierdut pentru că toată lumea înțelegea oricum." },
        { id: "prep", label: "Prepoziții de loc", x: 50, y: 40, color: "#f59e0b", html: "next to, opposite, between, behind, in front of, near.", why: "Descriu poziția față de un punct de reper: ca să le înțelegi trebuie să știi mereu „față de ce”. <i>Between</i> vine de la „by two”, adică „lângă doi”: de aceea se folosește cu două lucruri." },
        { id: "chiedere", label: "Excuse me, where's…?", x: 82, y: 32, color: "#0ea5e9", html: "Formule pentru a cere politicos drumul.", why: "În engleză politețea este foarte importantă: fără <i>Excuse me</i> și <i>please</i> o cerere sună brusc. <i>Excuse me</i> servește ca să atragi atenția unui necunoscut." },
        { id: "indicazioni", label: "Directions", x: 82, y: 62, color: "#14b8a6", html: "go straight on, turn left/right, take the first on the left.", why: "Sunt propoziții la <b>imperativ</b>, forma poruncilor: în engleză este foarte ușor, pentru că este doar verbul fără subiect (Go! Turn! Cross!). Aceleași comenzi se folosesc pentru a programa roboții." },
        { id: "uk-us", label: "UK și SUA", x: 82, y: 88, color: "#64748b", html: "chemist's/drugstore, cinema/movie theater, underground/subway.", why: "După independența Statelor Unite (1776) engleza americană a continuat să se schimbe pe cont propriu. Dicționarul lui Noah Webster (1828) a fixat și o ortografie diferită: colour → color, centre → center." },
        { id: "thereis", label: "There is / there are", x: 50, y: 70, color: "#db2777", html: "Este / sunt: There is a park. There are two shops.", why: "<i>There</i> aici nu înseamnă „acolo”: este un subiect „fals” care există pentru că în engleză orice propoziție trebuie să aibă subiect. Româna spune pur și simplu „este” sau „există”." }
      ],
      edges: [
        ["town", "luoghi", "este alcătuit din"],
        ["luoghi", "falsi", "atenție la"],
        ["luoghi", "possessivo", "magazine cu 's"],
        ["town", "prep", "poziție cu"],
        ["town", "chiedere", "dacă te pierzi"],
        ["chiedere", "indicazioni", "ți se răspunde cu"],
        ["indicazioni", "uk-us", "cuvinte diferite în"],
        ["prep", "thereis", "se folosesc cu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: indicații",
      questions: [
        { type: "mc", q: "«Turn right» înseamnă…", options: ["virează la dreapta", "virează la stânga", "mergi drept"], answer: 0, explain: "Right = dreapta." },
        { type: "mc", q: "Cum se spune «Ia a doua la stânga»?", options: ["Take the second on the right.", "Take the second on the left.", "Go second left straight."], answer: 1, explain: "Second = a doua, left = stânga." },
        { type: "mc", q: "Cineva îți spune «Thank you!». Răspunzi…", options: ["Excuse me!", "You're welcome!", "Turn left!"], answer: 1, explain: "You're welcome = cu plăcere." },
        { type: "text", q: "Cum se spune «Mergi tot înainte» în engleză? (Go … on)", answer: ["go straight on", "straight on"], explain: "Go straight on." }
      ]
    }
  ],
  glossary: [
    { t: "Library", d: "Bibliotecă (fals prieten: nu este librăria)." },
    { t: "Bookshop", d: "Librărie, magazinul unde se cumpără cărți." },
    { t: "Chemist's / pharmacy", d: "Farmacie (în SUA: drugstore)." },
    { t: "Post office", d: "Oficiu poștal." },
    { t: "Next to / opposite / between", d: "Lângă / vizavi de / între." },
    { t: "Behind / in front of", d: "În spatele / în fața." },
    { t: "Go straight on", d: "Mergi tot înainte." },
    { t: "Turn left / turn right", d: "Virează la stânga / virează la dreapta." },
    { t: "Excuse me", d: "Scuzați-mă: pentru a atrage atenția în mod politicos." },
    { t: "Block", d: "Cvartal: spațiul dintre patru străzi, folosit în orașele americane." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Unde mergi ca să iei o carte cu împrumut?", options: ["bookshop", "library", "bank"], answer: 1, explain: "La bibliotecă = library." },
      { type: "mc", q: "Unde cumperi pâine?", options: ["baker's", "chemist's", "post office"], answer: 0, explain: "Baker's = brutărie." },
      { type: "mc", q: "«The bank is between the school and the park.» Banca este…", options: ["în spatele școlii", "între școală și parc", "vizavi de parc"], answer: 1, explain: "Between … and … = între … și …" },
      { type: "mc", q: "«Behind» înseamnă…", options: ["în fața", "în spatele", "lângă"], answer: 1, explain: "Behind = în spatele; in front of = în fața." },
      { type: "tf", q: "«Opposite» înseamnă «lângă».", answer: false, explain: "Opposite = vizavi de. Lângă = next to." },
      { type: "tf", q: "În Statele Unite cinematograful se numește adesea «movie theater».", answer: true, explain: "Cinema (UK) = movie theater (SUA)." },
      { type: "text", q: "Cum se spune «gara» în engleză?", answer: ["train station", "station", "railway station"], explain: "Train station (sau railway station)." },
      { type: "text", q: "Completează: «Excuse me, ___ is the museum?» (unde)", answer: ["where"], explain: "Where = unde." },
      { type: "mc", q: "«Is there a supermarket near here?» – Răspuns corect:", options: ["Yes, there is.", "Yes, it are.", "Yes, I am."], answer: 0, explain: "La întrebarea cu «Is there…?» se răspunde «Yes, there is / No, there isn't»." },
      { type: "order", q: "Pune în ordine dialogul.", items: ["Excuse me, where's the cinema?", "Go straight on and turn left.", "Is it far?", "No, it's five minutes on foot.", "Thank you!", "You're welcome!"], explain: "Se cere cu Excuse me, se dau indicațiile, se întreabă distanța, se mulțumește și se răspunde «cu plăcere»." },
      { type: "mc", q: "Cum se spune «Traversează strada»?", options: ["Cross the road.", "Turn the road.", "Go past the road."], answer: 0, explain: "Cross = a traversa." }
    ]
  }
});
