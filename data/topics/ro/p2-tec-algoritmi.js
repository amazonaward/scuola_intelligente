TOPIC('ro', {
  id: "p2-tec-algoritmi",
  title: "Algoritmii de zi cu zi",
  intro: "Știai că în fiecare dimineață urmezi niște <b>algoritmi</b>? 🪥 Să te speli pe dinți, să-ți pregătești ghiozdanul 🎒, să faci un tort 🎂… Un <b>algoritm</b> este o listă de <b>instrucțiuni în ordine</b> ca să ajungi la un rezultat. Calculatoarele și roboții 🤖 funcționează exact așa!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Ce este un algoritm? 📝",
      html: `<p>Un <b>algoritm</b> este o <b>secvență de instrucțiuni</b> (pași) care, urmată de la început până la sfârșit, rezolvă o problemă.</p>
<p>Un algoritm bun este:</p>
<ul>
<li>🔢 <b>ordonat</b>: pașii sunt în șir, unul după altul;</li>
<li>🎯 <b>precis</b>: fiecare instrucțiune se înțelege fără îndoială;</li>
<li>🏁 <b>finit</b>: mai devreme sau mai târziu ajunge la sfârșit.</li>
</ul>
<p>Exemplu: <b>spălatul pe mâini</b> 🧼</p>
<ol>
<li>Deschide apa 🚰</li>
<li>Udă mâinile</li>
<li>Pune săpun 🧼</li>
<li>Freacă 20 de secunde</li>
<li>Clătește</li>
<li>Închide apa</li>
<li>Șterge mâinile 🧻</li>
</ol>`
    },
    {
      type: "text",
      title: "Ordinea este importantă! 🔀",
      html: `<p>Dacă schimbi ordinea pașilor, rezultatul poate deveni… un dezastru! 😱</p>
<table>
<tr><th>✅ Ordine corectă</th><th>❌ Ordine greșită</th></tr>
<tr><td>1. Îmi pun șosetele 🧦<br>2. Îmi pun pantofii 👟</td><td>1. Îmi pun pantofii 👟<br>2. Îmi pun șosetele 🧦<br><i>…șosetele peste pantofi?!</i></td></tr>
<tr><td>1. Deschid umbrela ☂️<br>2. Ies în ploaie</td><td>1. Ies în ploaie<br>2. Deschid umbrela<br><i>…sunt deja ud!</i></td></tr>
</table>
<p>Un calculator execută instrucțiunile <b>exact</b> în ordinea în care le scrii: nu își dă seama dacă este o greșeală!</p>`
    },
    {
      type: "svg",
      title: "Algoritmul tortului 🎂",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fff7ed"/>
<rect x="200" y="10" width="200" height="40" rx="20" fill="#22c55e"/>
<text x="300" y="37" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">ÎNCEPUT</text>
<line x1="300" y1="50" x2="300" y2="65" stroke="#334155" stroke-width="3"/>
<polygon points="293,62 307,62 300,70" fill="#334155"/>
<rect x="160" y="70" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="95" font-size="16" text-anchor="middle" fill="#713f12">1. Sparge 3 ouă în castron</text>
<line x1="300" y1="108" x2="300" y2="120" stroke="#334155" stroke-width="3"/>
<polygon points="293,117 307,117 300,125" fill="#334155"/>
<rect x="160" y="125" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="150" font-size="16" text-anchor="middle" fill="#713f12">2. Adaugă zahăr și făină</text>
<line x1="300" y1="163" x2="300" y2="175" stroke="#334155" stroke-width="3"/>
<polygon points="293,172 307,172 300,180" fill="#334155"/>
<rect x="160" y="180" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="205" font-size="16" text-anchor="middle" fill="#713f12">3. Amestecă bine</text>
<line x1="300" y1="218" x2="300" y2="230" stroke="#334155" stroke-width="3"/>
<polygon points="293,227 307,227 300,235" fill="#334155"/>
<rect x="160" y="235" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="260" font-size="16" text-anchor="middle" fill="#713f12">4. Coace la cuptor 30 de minute</text>
<line x1="300" y1="273" x2="300" y2="280" stroke="#334155" stroke-width="3"/>
<rect x="200" y="280" width="200" height="36" rx="18" fill="#ef4444"/>
<text x="300" y="304" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">SFÂRȘIT: tort!</text>
<text x="80" y="160" font-size="50" text-anchor="middle">🥚</text>
<text x="520" y="200" font-size="50" text-anchor="middle">🎂</text>
</svg>`,
      caption: "Un algoritm se poate desena ca o diagramă: se pornește de la ÎNCEPUT, se urmează săgețile și se ajunge la SFÂRȘIT."
    },
    {
      type: "quiz",
      title: "Mini-test: în ordine!",
      questions: [
        { type: "order", q: "Pune în ordine: spălatul pe dinți 🪥", items: ["Iau periuța", "Pun pastă de dinți", "Periez dinții", "Clătesc gura"], explain: "Mai întâi se pregătește periuța, apoi se spală, apoi se clătește." },
        { type: "tf", q: "Într-un algoritm ordinea pașilor nu contează.", answer: false, explain: "Ordinea contează foarte mult: șosetele înaintea pantofilor!" },
        { type: "mc", q: "Un algoritm este…", options: ["o listă de instrucțiuni în ordine", "un fel de animal", "un joc de cărți"], answer: 0, explain: "Este o secvență ordonată de instrucțiuni." }
      ]
    },
    {
      type: "text",
      title: "Instrucțiuni precise pentru un robot 🤖",
      html: `<p>Un robot nu este isteț ca tine: face <b>doar</b> ce îi spui, <b>cuvânt cu cuvânt</b>.</p>
<p>Dacă îi spui robotului „<i>Pregătește gustarea</i>”, el nu știe de unde să înceapă! 🤷 Trebuie să explici fiecare pas:</p>
<ol>
<li>Deschide dulapul.</li>
<li>Ia pâinea.</li>
<li>Ia cuțitul pentru uns.</li>
<li>Unge dulceața pe pâine.</li>
</ol>
<p>Ca să muți un robot pe o tablă de șah se folosesc săgeți simple:</p>
<p style="font-size:1.2em">⬆️ <b>înainte 1</b> &nbsp; ↪️ <b>virează la dreapta</b> &nbsp; ↩️ <b>virează la stânga</b></p>
<p>A scrie instrucțiuni pentru un calculator sau un robot se numește <b>programare</b> (în engleză <b>coding</b>).</p>`
    },
    {
      type: "svg",
      title: "Ajută robotul să ajungă la măr 🍎",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" fill="#e0f2fe">
<rect x="40" y="20" width="70" height="70"/><rect x="110" y="20" width="70" height="70"/><rect x="180" y="20" width="70" height="70"/><rect x="250" y="20" width="70" height="70"/>
<rect x="40" y="90" width="70" height="70"/><rect x="110" y="90" width="70" height="70"/><rect x="180" y="90" width="70" height="70"/><rect x="250" y="90" width="70" height="70"/>
<rect x="40" y="160" width="70" height="70"/><rect x="110" y="160" width="70" height="70"/><rect x="180" y="160" width="70" height="70"/><rect x="250" y="160" width="70" height="70"/>
<rect x="40" y="230" width="70" height="70"/><rect x="110" y="230" width="70" height="70"/><rect x="180" y="230" width="70" height="70"/><rect x="250" y="230" width="70" height="70"/>
</g>
<rect x="55" y="245" width="40" height="40" rx="8" fill="#64748b"/>
<circle cx="68" cy="260" r="5" fill="#facc15"/>
<circle cx="82" cy="260" r="5" fill="#facc15"/>
<rect x="66" y="272" width="18" height="4" fill="#facc15"/>
<circle cx="285" cy="55" r="20" fill="#ef4444"/>
<rect x="283" y="30" width="4" height="10" fill="#78350f"/>
<path d="M75 245 L75 125 L285 125 L285 80" stroke="#f97316" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="460" y="60" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">Programul:</text>
<text x="460" y="95" font-size="17" text-anchor="middle" fill="#0f172a">înainte, înainte</text>
<text x="460" y="125" font-size="17" text-anchor="middle" fill="#0f172a">virează la dreapta</text>
<text x="460" y="155" font-size="17" text-anchor="middle" fill="#0f172a">înainte, înainte, înainte</text>
<text x="460" y="185" font-size="17" text-anchor="middle" fill="#0f172a">virează la stânga</text>
<text x="460" y="215" font-size="17" text-anchor="middle" fill="#0f172a">înainte</text>
<text x="460" y="260" font-size="18" text-anchor="middle" fill="#15803d" font-weight="bold">Măr atins!</text>
</svg>`,
      caption: "Robotul pornește din stânga jos, privind în sus. Urmărește cu degetul traseul portocaliu și verifică fiecare instrucțiune."
    },
    {
      type: "widget",
      title: "Instrucțiune precisă sau confuză?",
      widget: "classify",
      options: {
        groups: ["🎯 Precisă: robotul înțelege", "🤷 Confuză: robotul nu înțelege"],
        items: [
          ["Fă 2 pași înainte", 0],
          ["Mergi un pic mai încolo", 1],
          ["Virează la dreapta", 0],
          ["Fă ceva frumos", 1],
          ["Ia mingea roșie", 0],
          ["Pune totul în ordine", 1],
          ["Repetă de 3 ori: sari", 0],
          ["Fă cum vrei", 1]
        ]
      },
      caption: "O instrucțiune este precisă atunci când spune exact ce să faci, cât și care anume."
    },
    {
      type: "text",
      title: "Două trucuri ale algoritmilor: REPETĂ și DACĂ 🔁❓",
      html: `<p><b>🔁 REPETĂ (ciclu)</b><br>În loc să scriu „înainte, înainte, înainte, înainte”, scriu: <b>„repetă de 4 ori: înainte”</b>. Mai scurt și mai clar!</p>
<p>Exemplu: ca să urci scările 🪜 → <i>repetă până ajungi sus: urcă o treaptă</i>.</p>
<p><b>❓ DACĂ… ATUNCI… ALTFEL (condiție)</b><br>Uneori trebuie să alegi:</p>
<p>☔ <i><b>DACĂ</b> plouă, <b>ATUNCI</b> iau umbrela, <b>ALTFEL</b> iau șapca.</i></p>
<p>🚦 <i><b>DACĂ</b> semaforul este verde, <b>ATUNCI</b> traversez, <b>ALTFEL</b> aștept.</i></p>
<p>Cu <b>secvențe</b>, <b>cicluri</b> și <b>condiții</b> se pot construi toate programele din lume, chiar și jocurile video! 🎮</p>`
    },
    {
      type: "3d",
      title: "REPETĂ cu cubulețe 🧊",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "Algoritmul este: „REPETĂ de 3 ori: pune un rând de 4 cubulețe”. Mișcă cursoarele ca să schimbi de câte ori repeți și câte cubulețe pui de fiecare dată. Câte cubulețe sunt în total?"
    },
    {
      type: "example",
      title: "Exemplu practic: ghiozdanul pentru școală 🎒",
      html: `<p>În fiecare seară Tudor își urmează algoritmul:</p>
<ol>
<li>📅 Se uită la orarul de mâine.</li>
<li>🔁 <b>Repetă</b> pentru fiecare materie: pune în ghiozdan manualul și caietul.</li>
<li>✏️ Verifică penarul.</li>
<li>❓ <b>Dacă</b> mâine este educație fizică, <b>atunci</b> pregătește adidașii 👟.</li>
<li>🚪 Pune ghiozdanul lângă ușă.</li>
</ol>
<p>Sunt o <b>secvență</b>, un <b>ciclu</b> (repetă) și o <b>condiție</b> (dacă)! Așa nu uită nimic.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: jocul robotului uman 🧍‍♂️🤖",
      html: `<p>La clasă se joacă în perechi: unul este <b>programatorul</b>, celălalt <b>robotul</b>.</p>
<ul>
<li>Programatorul scrie pe o foaie săgețile ca să-l ducă pe robot de la bancă la tablă: ⬆️⬆️↪️⬆️⬆️⬆️</li>
<li>Robotul execută <b>doar</b> ce este scris, fără să gândească.</li>
<li>Dacă robotul se lovește de un scaun… este o <b>greșeală</b> în program! Se numește <b>bug</b> 🐞.</li>
<li>Programatorul găsește greșeala și o corectează: se numește <b>debug</b>.</li>
</ul>
<p>Să greșești este foarte bine: și cei mai buni programatori găsesc și corectează greșeli în fiecare zi!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? 📜",
      html: `<p>Cuvântul <b>algoritm</b> vine de la numele unui mare matematician, <b>al-Khwarizmi</b>, care a trăit cu aproximativ <b>1200 de ani în urmă</b> la <b>Bagdad</b> (astăzi în Irak). A scris o carte ca să explice cum se fac calculele cu numerele pe care le folosim și astăzi, 0 1 2 3… Când cartea a fost tradusă în latină, numele lui a devenit „Algoritmi”!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? 🦋",
      html: `<p>De ce se numește <b>bug</b> (în engleză „insectă”) o greșeală din programe? În <b>1947</b>, în Statele Unite, un calculator uriaș s-a stricat: înăuntru, oamenii de știință din echipa lui <b>Grace Hopper</b> au găsit o <b>molie</b> rămasă prinsă! Au lipit-o cu bandă adezivă în caietul lor, scriind că au găsit primul „bug” adevărat. Caietul cu molia se află și acum într-un muzeu!</p>`
    },
    {
      type: "widget",
      title: "Istoria algoritmilor",
      widget: "timeline",
      options: {
        unit: "ani",
        events: [
          { year: -300, label: "Euclid scrie un algoritm pentru numere", icon: "📐" },
          { year: 825, label: "Al-Khwarizmi la Bagdad", icon: "📜" },
          { year: 1843, label: "Ada Lovelace scrie primul program", icon: "👩‍💻" },
          { year: 1947, label: "Primul „bug”: o molie!", icon: "🦋" },
          { year: 2007, label: "Se naște Scratch, programarea cu blocuri", icon: "🐱" },
          { year: 2013, label: "Prima Europe Code Week", icon: "🇪🇺" }
        ]
      },
      caption: "Algoritmii există de mult înainte de calculatoare!"
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege algoritmii",
      intro: "Algoritmii se pot învăța și fără calculator: cu corpul, cu muzica, cu cărțile!",
      tabs: [
        {
          label: "🃏 CodyRoby, jocul italian",
          html: `<p><b>CodyRoby</b> este un joc de cărți inventat în <b>Italia</b> de profesorul <b>Alessandro Bogliolo</b> de la Universitatea din Urbino pentru <b>Code Week</b>.</p>
<ul>
<li>Există cărți cu <b>trei săgeți</b>: ⬆️ înainte, ↩️ virează la stânga, ↪️ virează la dreapta.</li>
<li>Pe o tablă desenată pe jos sau pe o foaie, un copil (sau un pion) este robotul <b>Roby</b>.</li>
<li>Se pun cărțile în șir ca să se facă <b>programul</b>, apoi Roby îl execută.</li>
</ul>
<p>Se joacă fără ecrane: se numește <b>coding unplugged</b> („programare fără ștecher”) 🔌.</p>`
        },
        {
          label: "💃 Dansul este un algoritm",
          html: `<p>Orice dans este un algoritm! Încearcă asta:</p>
<p>🎵 <b>REPETĂ de 2 ori:</b><br>👏 bate din palme<br>🦶 bate cu piciorul drept<br>🔄 învârte-te în loc<br><b>SFÂRȘIT REPETĂ</b><br>🙌 ridică brațele!</p>
<p>Și <b>cântecele</b> funcționează așa: <b>refrenul</b> este un ciclu care se repetă. Și dansurile în grup și jocurile cu mâinile (ca „bate palma, bate palma”) sunt algoritmi!</p>`
        },
        {
          label: "🔢 Sărituri pe axă",
          html: `<p>Iată un algoritm cu numere: <b>pornești de la 0. REPETĂ de 5 ori: sari înainte cu 3.</b> Unde ajungi?</p>
<p>Încearcă pe axa de mai jos: 0 → 3 → 6 → 9 → 12 → <b>15</b>. Este tabla înmulțirii cu 3! Tablele înmulțirii sunt algoritmi care repetă o adunare.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [3, 6, 9, 12, 15] }
        },
        {
          label: "🍝 Rețete în lume",
          html: `<p><b>Rețetele</b> sunt cei mai vechi și mai îndrăgiți algoritmi din lume!</p>
<ul>
<li>🇮🇹 <b>Pastele cu sos de roșii</b>: ingrediente (= datele) + pași în ordine (= instrucțiunile).</li>
<li>🇯🇵 <b>Origami</b> japonez: instrucțiuni precise ca să îndoi hârtia, pas cu pas, până la o cocoară de hârtie 🦢.</li>
<li>🧶 <b>Andrelele</b> de tricotat: „repetă de 20 de ori: un ochi față, un ochi dos” este chiar un ciclu!</li>
</ul>
<p>O tăbliță de argilă din <b>Babilon</b>, de aproximativ 3700 de ani, conține rețete scrise: unele dintre cele mai vechi din lume.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta algoritmilor",
      nodes: [
        { id: "algoritmo", label: "Algoritm", x: 50, y: 6, color: "#6366f1", html: "<p>O secvență de instrucțiuni ordonate, precise și finite pentru a rezolva o problemă.</p>", why: "<p>Numele vine de la <b>al-Khwarizmi</b>, matematician din Bagdad din secolul al IX-lea. Dar primul algoritm celebru este și mai vechi: cel al lui <b>Euclid</b> (circa 300 î.Hr.) pentru a afla cel mai mare divizor comun al două numere.</p>" },
        { id: "sequenza", label: "Secvență", x: 18, y: 32, color: "#22c55e", html: "<p>Pașii unul după altul, în ordine.</p>", why: "<p>Multe acțiuni depind de cele dinainte: nu poți coace tortul dacă n-ai amestecat ingredientele. De aceea ordinea este importantă.</p>" },
        { id: "ciclo", label: "Ciclu (REPETĂ)", x: 50, y: 32, color: "#f59e0b", html: "<p>A repeta aceleași instrucțiuni de mai multe ori.</p>", why: "<p>Mașinile sunt foarte bune la repetat fără să obosească. Cu un ciclu un program scurt poate face foarte multă muncă: calculatorul repetă de milioane de ori fără să se plictisească!</p>" },
        { id: "condizione", label: "Condiție (DACĂ)", x: 82, y: 32, color: "#ef4444", html: "<p>A alege ce faci în funcție de o situație.</p>", why: "<p>Lumea se schimbă (plouă, nu plouă), iar programul trebuie să se adapteze. Cu <b>DACĂ</b> calculatorul verifică dacă un lucru este adevărat sau fals și apoi decide.</p>" },
        { id: "preciso", label: "Instrucțiuni precise", x: 18, y: 62, color: "#0ea5e9", html: "<p>Fiecare instrucțiune trebuie să fie clară, fără îndoieli.</p>", why: "<p>Calculatorul nu poate „ghici” ce vrem: execută întocmai. De aceea limbajele de programare au reguli foarte stricte.</p>" },
        { id: "programma", label: "Program", x: 50, y: 62, color: "#a855f7", html: "<p>Un algoritm scris într-o limbă pe care calculatorul o înțelege.</p>", why: "<p>Prima persoană care a scris un program a fost <b>Ada Lovelace</b>, în <b>1843</b>, pentru o mașină de calcul imaginată de Charles Babbage, care nu a fost terminată niciodată. De aceea este amintită ca prima programatoare din istorie.</p>" },
        { id: "bug", label: "Bug și debug", x: 82, y: 62, color: "#64748b", html: "<p>Bug = greșeală. Debug = a găsi și a corecta greșeala.</p>", why: "<p>În 1947 echipa lui Grace Hopper a găsit o adevărată molie într-un calculator. De atunci „bug” este numele tuturor greșelilor din programe.</p>" },
        { id: "coding", label: "Coding", x: 50, y: 92, color: "#14b8a6", html: "<p>A învăța să programezi, chiar și jucându-te, cu sau fără calculator.</p>", why: "<p>Programarea te învață să împarți o problemă mare în bucăți mici: acest mod de a raționa se numește <b>gândire computațională</b>. Programele școlare o prevăd încă de la școala primară.</p>" }
      ],
      edges: [
        ["algoritmo", "sequenza", "este făcut din"],
        ["algoritmo", "ciclo", "poate folosi"],
        ["algoritmo", "condizione", "poate folosi"],
        ["sequenza", "preciso", "de"],
        ["algoritmo", "programma", "scris pentru PC ="],
        ["programma", "bug", "poate avea"],
        ["programma", "coding", "se învață prin"],
        ["ciclo", "programma", "în interiorul"],
        ["condizione", "programma", "în interiorul"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: repetă și dacă",
      questions: [
        { type: "mc", q: "„Repetă de 3 ori: sari”. Câte sărituri faci?", options: ["1", "3", "6"], answer: 1, explain: "Ciclul repetă săritura de 3 ori." },
        { type: "mc", q: "„DACĂ plouă ATUNCI iau umbrela”. Azi este soare. Iau umbrela?", options: ["Da", "Nu"], answer: 1, explain: "Condiția „plouă” este falsă, deci nu iau umbrela." },
        { type: "text", q: "Cum se numește în engleză o greșeală dintr-un program?", answer: ["bug", "un bug"], explain: "Bug, ca insecta găsită în 1947!" }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte 📌",
      html: `<ul>
<li>Un <b>algoritm</b> este o listă de instrucțiuni <b>ordonate</b>, <b>precise</b> și <b>finite</b>.</li>
<li>Rețetele și rutinele de fiecare zi sunt algoritmi.</li>
<li>🔁 <b>Repetă</b> = ciclu; ❓ <b>Dacă… atunci… altfel</b> = condiție.</li>
<li>Un algoritm scris pentru calculator este un <b>program</b>; o greșeală este un <b>bug</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Algoritm", d: "Secvență ordonată de instrucțiuni precise pentru a rezolva o problemă." },
    { t: "Instrucțiune", d: "Un singur pas care spune ce să faci." },
    { t: "Secvență", d: "Pași puși în ordine, unul după altul." },
    { t: "Ciclu", d: "Instrucțiuni care se repetă de mai multe ori (REPETĂ)." },
    { t: "Condiție", d: "O alegere: DACĂ se întâmplă ceva ATUNCI fă asta, ALTFEL fă aia." },
    { t: "Program", d: "Un algoritm scris într-un limbaj pe care calculatorul îl înțelege." },
    { t: "Coding", d: "Programare; și jucându-te, fără calculator." },
    { t: "Bug", d: "O greșeală într-un program." },
    { t: "Debug", d: "A găsi și a corecta greșelile." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce este un algoritm?", options: ["O secvență de instrucțiuni în ordine", "Un desen la întâmplare", "Un fel de calculator"], answer: 0, explain: "Instrucțiuni ordonate, precise și finite." },
      { type: "order", q: "Pune în ordine: ne îmbrăcăm ca să ieșim.", items: ["Îmi pun șosetele", "Îmi pun pantofii", "Îmi leg șireturile", "Ies din casă"], explain: "Șosetele se pun înaintea pantofilor!" },
      { type: "order", q: "Pune în ordine: pregătim un ceai.", items: ["Încălzesc apa", "Torn apa în cană", "Pun pliculețul", "Aștept câteva minute", "Scot pliculețul și beau"], explain: "Fiecare pas depinde de cel de dinainte." },
      { type: "tf", q: "Un robot înțelege instrucțiunea „Fă ceva frumos”.", answer: false, explain: "Este o instrucțiune confuză: robotul are nevoie de instrucțiuni precise." },
      { type: "mc", q: "Care instrucțiune este PRECISĂ?", options: ["Mergi încolo", "Fă 3 pași înainte", "Mișcă-te un pic"], answer: 1, explain: "Spune exact ce să faci și cât." },
      { type: "num", q: "„Repetă de 4 ori: pune 2 bomboane în pungă”. Câte bomboane sunt la sfârșit?", answer: 8, tol: 0, unit: "bomboane", explain: "4 ori 2 = 8." },
      { type: "mc", q: "„DACĂ semaforul este roșu ATUNCI mă opresc ALTFEL traversez”. Semaforul este verde: ce fac?", options: ["Mă opresc", "Traversez", "Mă întorc acasă"], answer: 1, explain: "Condiția „roșu” este falsă: se aplică ALTFEL." },
      { type: "text", q: "Cum se numește a găsi și a corecta greșelile unui program?", answer: ["debug", "debugging", "debugul"], explain: "Debug: a scoate bug-urile." },
      { type: "mc", q: "De unde vine cuvântul „algoritm”?", options: ["De la numele unui matematician din Bagdad", "De la un robot japonez", "De la un joc video"], answer: 0, explain: "De la numele lui al-Khwarizmi." },
      { type: "tf", q: "Se poate face coding și fără calculator.", answer: true, explain: "Se numește coding unplugged: cu cărți, săgeți, jocuri." },
      { type: "num", q: "Pornești de la 0 și „repetă de 5 ori: sari înainte cu 2”. La ce număr ajungi?", answer: 10, tol: 0, explain: "0 → 2 → 4 → 6 → 8 → 10." },
      { type: "mc", q: "Cine este considerată prima programatoare din istorie?", options: ["Ada Lovelace", "Cleopatra", "Grace Kelly"], answer: 0, explain: "Ada Lovelace a scris primul program în 1843." }
    ]
  }
});
