TOPIC('ro', {
  id: "p2-tec-computer",
  title: "Calculatorul și părțile lui",
  intro: "<b>Calculatorul</b> 💻 este o mașină care <b>primește</b> informații, le <b>prelucrează</b> (lucrează cu ele) și ne <b>dă</b> un rezultat. Astăzi descoperim părțile lui: <b>tastatura</b> ⌨️, <b>mouse-ul</b> 🖱️, <b>ecranul</b> 🖥️ și <b>memoria</b> 🧠… și cum lucrează împreună!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Ce face un calculator? 🤔",
      html: `<p>Calculatorul lucrează mereu în <b>trei pași</b>:</p>
<ol>
<li>📥 <b>INTRARE</b> (în engleză <i>input</i>): îi dăm noi informații, de exemplu scriem cu tastatura.</li>
<li>⚙️ <b>PRELUCRARE</b>: calculatorul „gândește” și lucrează cu informațiile, foarte repede.</li>
<li>📤 <b>IEȘIRE</b> (în engleză <i>output</i>): calculatorul ne arată rezultatul, de exemplu pe ecran.</li>
</ol>
<p>Este ca atunci când învățătoarea îți pune o întrebare 👂 (intrare), tu te gândești 🤔 (prelucrare) și răspunzi 🗣️ (ieșire)!</p>`
    },
    {
      type: "text",
      title: "Părțile prin care dăm informații (intrare) 📥",
      html: `<ul>
<li>⌨️ <b>Tastatura</b>: are multe taste cu litere, numere și simboluri. Servește pentru <b>a scrie</b>.</li>
<li>🖱️ <b>Mouse-ul</b>: se mișcă pe masă și mișcă <b>săgeata</b> de pe ecran. Cu <b>clicul</b> alegem lucrurile.</li>
<li>👆 <b>Touchpad-ul</b> și <b>ecranul tactil</b>: se ating cu degetul, ca pe tabletă.</li>
<li>🎤 <b>Microfonul</b>: face să intre <b>vocea</b> noastră.</li>
<li>📷 <b>Camera web</b>: o mică cameră video care face să intre <b>imaginile</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Părțile care ne dau rezultatul (ieșire) 📤",
      html: `<ul>
<li>🖥️ <b>Ecranul</b> (sau <b>monitorul</b>): ne face să <b>vedem</b> texte, desene și filme.</li>
<li>🔊 <b>Boxele</b> și <b>căștile</b> 🎧: ne fac să <b>auzim</b> sunete și muzică.</li>
<li>🖨️ <b>Imprimanta</b>: pune pe <b>hârtie</b> ce se află pe ecran.</li>
</ul>`
    },
    {
      type: "text",
      title: "Creierul și memoria 🧠",
      html: `<p>În interiorul calculatorului, ascunse în carcasă (sau sub tastatură, la laptop), se află cele mai importante părți:</p>
<ul>
<li>⚙️ <b>Procesorul</b> (CPU): este <b>creierul</b>. Face calculele, miliarde într-o secundă!</li>
<li>📝 <b>Memoria RAM</b>: este memoria <b>„pentru acum”</b>. Își amintește ce faci acum. Când oprești calculatorul, se <b>șterge</b>.</li>
<li>💾 <b>Discul</b> (sau memoria de stocare): este memoria <b>„pentru totdeauna”</b>. Păstrează desenele, fotografiile și jocurile chiar și când calculatorul este oprit.</li>
</ul>
<p>De aceea este important să <b>salvezi</b> 💾 munca: a salva înseamnă a o muta din memoria „pentru acum” în cea „pentru totdeauna”!</p>`
    },
    {
      type: "svg",
      title: "Părțile calculatorului",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f1f5f9"/>
<rect x="170" y="20" width="260" height="170" rx="12" fill="#1e293b"/>
<rect x="185" y="35" width="230" height="140" rx="4" fill="#38bdf8"/>
<circle cx="300" cy="28" r="4" fill="#94a3b8"/>
<rect x="285" y="190" width="30" height="30" fill="#475569"/>
<rect x="240" y="218" width="120" height="10" rx="4" fill="#475569"/>
<rect x="150" y="245" width="270" height="55" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
<rect x="165" y="256" width="240" height="10" rx="2" fill="#94a3b8"/>
<rect x="165" y="272" width="240" height="10" rx="2" fill="#94a3b8"/>
<rect x="220" y="287" width="130" height="8" rx="2" fill="#94a3b8"/>
<ellipse cx="480" cy="270" rx="25" ry="35" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
<line x1="480" y1="235" x2="480" y2="262" stroke="#475569" stroke-width="2"/>
<rect x="30" y="60" width="90" height="200" rx="8" fill="#334155"/>
<circle cx="75" cy="90" r="8" fill="#22c55e"/>
<rect x="45" y="120" width="60" height="8" fill="#64748b"/>
<rect x="470" y="70" width="50" height="80" rx="10" fill="#0f172a"/>
<circle cx="495" cy="100" r="15" fill="#475569"/>
<circle cx="495" cy="133" r="9" fill="#475569"/>
<text x="300" y="110" font-size="22" text-anchor="middle" fill="#0f172a" font-weight="bold">ECRAN</text>
<text x="285" y="315" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">tastatură</text>
<text x="545" y="310" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">mouse</text>
<text x="75" y="285" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">unitate centrală</text>
<text x="75" y="160" font-size="13" text-anchor="middle" fill="#ffffff">CPU</text>
<text x="75" y="180" font-size="13" text-anchor="middle" fill="#ffffff">memorie</text>
<text x="545" y="60" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">boxă</text>
</svg>`,
      caption: "Un calculator fix (desktop): unitatea centrală conține procesorul (CPU) și memoria."
    },
    {
      type: "widget",
      title: "Intrare sau ieșire?",
      widget: "classify",
      options: {
        groups: ["📥 Intrare (input)", "📤 Ieșire (output)"],
        items: [
          ["⌨️ tastatură", 0],
          ["🖱️ mouse", 0],
          ["🎤 microfon", 0],
          ["📷 cameră web", 0],
          ["🖥️ ecran", 1],
          ["🖨️ imprimantă", 1],
          ["🔊 boxe", 1],
          ["🎧 căști", 1]
        ]
      },
      caption: "Părțile de intrare fac să INTRE informațiile în calculator; cele de ieșire le fac să IASĂ spre noi."
    },
    {
      type: "quiz",
      title: "Mini-test: părțile",
      questions: [
        { type: "mc", q: "Cu ce scrii literele la calculator?", options: ["Cu tastatura", "Cu imprimanta", "Cu boxele"], answer: 0, explain: "Tastatura servește pentru a scrie." },
        { type: "mc", q: "Care este „creierul” calculatorului?", options: ["Ecranul", "Procesorul (CPU)", "Mouse-ul"], answer: 1, explain: "Procesorul face toate calculele." },
        { type: "tf", q: "Imprimanta este o parte de ieșire.", answer: true, explain: "Scoate munca pe hârtie." }
      ]
    },
    {
      type: "3d",
      title: "Calculatorul în 3D: totul este legat de procesor",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.55, color: "#f59e0b", label: "Procesor (CPU)" },
          { x: -1.6, y: 0.9, z: 0, r: 0.35, color: "#22c55e", label: "Tastatură" },
          { x: -1.6, y: -0.9, z: 0.3, r: 0.35, color: "#22c55e", label: "Mouse" },
          { x: -1.1, y: 0, z: 1.4, r: 0.3, color: "#22c55e", label: "Microfon" },
          { x: 1.6, y: 0.9, z: 0, r: 0.4, color: "#3b82f6", label: "Ecran" },
          { x: 1.6, y: -0.9, z: 0.3, r: 0.32, color: "#3b82f6", label: "Imprimantă" },
          { x: 1.1, y: 0, z: 1.4, r: 0.3, color: "#3b82f6", label: "Boxe" },
          { x: 0, y: 1.5, z: -0.8, r: 0.35, color: "#a855f7", label: "RAM (memorie pentru acum)" },
          { x: 0, y: -1.5, z: -0.8, r: 0.38, color: "#ec4899", label: "Disc (memorie pentru totdeauna)" }
        ],
        bonds: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [7, 8]]
      },
      caption: "Rotește modelul. Verde = intrare, albastru = ieșire, mov și roz = memorii. În centru, în portocaliu, procesorul care comandă totul."
    },
    {
      type: "example",
      title: "Exemplu practic: scriu și imprim o felicitare 💌",
      html: `<p>Giulia vrea să facă o felicitare pentru ziua mamei:</p>
<ol>
<li>⌨️ Scrie „Te iubesc, mamă!” cu <b>tastatura</b>. → <i>intrare</i></li>
<li>🖱️ Cu <b>mouse-ul</b> alege culoarea roșie și o inimioară. → <i>intrare</i></li>
<li>⚙️ <b>Procesorul</b> pune laolaltă literele, culorile și desenele. → <i>prelucrare</i></li>
<li>🖥️ Giulia vede felicitarea pe <b>ecran</b>. → <i>ieșire</i></li>
<li>💾 Apasă pe <b>Salvează</b>, așa încât felicitarea ajunge pe <b>disc</b>.</li>
<li>🖨️ O <b>imprimă</b> pe hârtie. → <i>ieșire</i> 🎉</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemplu practic: pornim și oprim corect 🔌",
      html: `<p>Calculatorul trebuie tratat cu grijă. Iată regulile de aur:</p>
<ul>
<li>🔘 Pentru a-l porni, apasă <b>butonul de pornire</b> și așteaptă să fie gata.</li>
<li>💾 Înainte de a închide, <b>salvează</b> munca.</li>
<li>⏻ Pentru a-l opri, folosește comanda <b>Oprire</b> de pe ecran: nu scoate ștecherul!</li>
<li>🥤 Nicio băutură lângă tastatură.</li>
<li>🪑 Stai cu spatele drept, cu ecranul în fața ochilor, și fă din când în când o <b>pauză</b> ca să-ți odihnești ochii 👀.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Găsește părțile calculatorului",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<rect x="150" y="30" width="260" height="160" rx="10" fill="#1e293b"/>
<rect x="163" y="43" width="234" height="134" rx="4" fill="#a7f3d0"/>
<rect x="265" y="190" width="30" height="25" fill="#475569"/>
<rect x="150" y="235" width="250" height="50" rx="8" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
<ellipse cx="460" cy="260" rx="22" ry="30" fill="#f8fafc" stroke="#475569" stroke-width="3"/>
<rect x="30" y="80" width="80" height="190" rx="8" fill="#334155"/>
<rect x="470" y="40" width="100" height="70" rx="8" fill="#f8fafc" stroke="#475569" stroke-width="3"/>
<rect x="490" y="25" width="60" height="18" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="268" y="8" width="24" height="14" rx="4" fill="#0f172a"/>
</svg>`,
        spots: [
          { x: 280, y: 110, label: "Ecran" },
          { x: 275, y: 260, label: "Tastatură" },
          { x: 460, y: 260, label: "Mouse" },
          { x: 70, y: 175, label: "Unitate centrală" },
          { x: 520, y: 75, label: "Imprimantă" },
          { x: 280, y: 15, label: "Cameră web" }
        ]
      },
      caption: "Apasă pe fiecare punct și alege numele potrivit."
    },
    {
      type: "curiosity",
      title: "Știai că…? 🐘",
      html: `<p>Unul dintre primele calculatoare, <b>ENIAC</b>, a fost pornit în Statele Unite în <b>1946</b>. Cântărea aproximativ <b>27 de tone</b> (cât 4 elefanți!) și ocupa o cameră de aproximativ 170 de metri pătrați, cât trei săli de clasă. Și totuși făcea mai puține calcule decât smartphone-ul pe care îl ai acasă!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? 🇮🇹",
      html: `<p>Unul dintre primele <b>calculatoare de birou</b> din istorie este <b>italian</b>! Se numea <b>Programma 101</b> și a fost construit de <b>Olivetti</b> din Ivrea, în Piemont, și prezentat la New York în <b>1965</b>. L-a folosit și NASA, agenția spațială americană. Iar primul <b>mouse</b>, inventat de Douglas Engelbart în 1964, era o cutiuță din <b>lemn</b> cu două rotițe! 🖱️</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege calculatorul",
      intro: "Ți se pare misterios calculatorul? Încearcă să ți-l închipui în alt fel!",
      tabs: [
        {
          label: "👩‍🍳 Calculatorul este o bucătărie",
          html: `<p>Închipuie-ți un <b>bucătar</b> în bucătărie:</p>
<ul>
<li>👩‍🍳 <b>bucătarul</b> este <b>procesorul</b>: lucrează și pregătește;</li>
<li>🍽️ <b>masa de lucru</b> este <b>RAM-ul</b>: pui pe ea doar ce folosești acum. Când închizi bucătăria, masa este strânsă;</li>
<li>🗄️ <b>cămara</b> este <b>discul</b>: acolo păstrezi totul, chiar și luni de zile;</li>
<li>📝 <b>comenzile</b> clienților sunt <b>intrarea</b> (tastatură, mouse);</li>
<li>🍝 <b>felul gata</b> este <b>ieșirea</b> (ecran, imprimantă).</li>
</ul>
<p>Cu cât masa este mai mare (RAM), cu atât bucătarul poate pregăti mai multe lucruri deodată!</p>`
        },
        {
          label: "🧍 Calculatorul este ca un corp",
          html: `<p>Și corpul nostru funcționează cu <b>intrare → prelucrare → ieșire</b>!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<circle cx="300" cy="70" r="45" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<circle cx="283" cy="62" r="6" fill="#0f172a"/>
<circle cx="317" cy="62" r="6" fill="#0f172a"/>
<path d="M285 90 Q300 102 315 90" stroke="#7c2d12" stroke-width="4" fill="none"/>
<rect x="265" y="118" width="70" height="100" rx="12" fill="#60a5fa"/>
<text x="120" y="50" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">ochi = cameră web</text>
<text x="120" y="80" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">urechi = microfon</text>
<text x="120" y="110" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">degete = tastatură</text>
<text x="300" y="245" font-size="16" text-anchor="middle" fill="#b45309" font-weight="bold">creier = procesor + memorie</text>
<text x="480" y="60" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">gură = boxe</text>
<text x="480" y="90" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">mâna care desenează</text>
<text x="480" y="112" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">= imprimantă</text>
<text x="120" y="150" font-size="18" text-anchor="middle" fill="#15803d">INTRARE</text>
<text x="480" y="150" font-size="18" text-anchor="middle" fill="#1d4ed8">IEȘIRE</text>
</svg>`
        },
        {
          label: "💡 Limbajul becurilor",
          html: `<p>Calculatorul, în interior, înțelege doar <b>două lucruri</b>: curent <b>pornit</b> (1) sau <b>oprit</b> (0). Ca un șir de becuri!</p>
<p>Cu multe becuri aprinse și stinse se pot scrie numere, litere, culori. Fiecare bec se numește <b>bit</b>. Cu 8 becuri (8 biți = 1 <b>octet</b>) se poate scrie o literă.</p>
<p>Încearcă: mișcă cubulețele de mai jos. Fiecare cubuleț este o informație pe care calculatorul o ține în memorie: memoria este ca un enorm depozit de cubulețe aprinse și stinse!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 8, b: 4 }
        },
        {
          label: "🎮 Joc: cine ce face?",
          html: `<p>Potrivește fiecare parte cu munca ei.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Tastatura", "a scrie"],
              ["Mouse-ul", "a mișca săgeata și a da clic"],
              ["Ecranul", "a vedea"],
              ["Boxele", "a auzi"],
              ["Procesorul", "a face calculele"],
              ["Discul", "a păstra pentru totdeauna"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: cum funcționează calculatorul",
      nodes: [
        { id: "computer", label: "Calculator", x: 50, y: 6, color: "#6366f1", html: "<p>O mașină care primește, prelucrează și returnează informații.</p>", why: "<p>Cuvântul vine din „a calcula”. La început, calculatoarele serveau doar pentru calcule foarte grele, de exemplu pentru știință.</p>" },
        { id: "input", label: "Intrare (input)", x: 15, y: 32, color: "#22c55e", html: "<p>Tastatură, mouse, microfon, cameră web, atingere.</p>", why: "<p>Calculatorul nu știe nimic singur: are nevoie ca cineva să-i dea informații. <b>Tastatura</b> vine de la vechile mașini de scris din secolul al XIX-lea: de aceea literele sunt în ordinea «QWERTY» și nu alfabetică.</p>" },
        { id: "cpu", label: "Procesor (CPU)", x: 50, y: 32, color: "#f59e0b", html: "<p>Creierul care face calculele.</p>", why: "<p>Este făcut din miliarde de întrerupătoare minuscule numite <b>tranzistoare</b>, inventate în 1947. Primul microprocesor, din 1971, a fost proiectat și de un italian: <b>Federico Faggin</b>.</p>" },
        { id: "output", label: "Ieșire (output)", x: 85, y: 32, color: "#3b82f6", html: "<p>Ecran, boxe, căști, imprimantă.</p>", why: "<p>Rezultatul muncii trebuie să ne revină într-o formă pe care simțurile noastre o înțeleg: imagini pentru ochi, sunete pentru urechi, foi de atins.</p>" },
        { id: "ram", label: "RAM", x: 30, y: 62, color: "#a855f7", html: "<p>Memorie „pentru acum”: se șterge când oprești.</p>", why: "<p>RAM-ul este foarte rapid, dar are nevoie de curent electric ca să țină minte: fără curent, întrerupătoarele din el revin toate în poziția oprit.</p>" },
        { id: "disco", label: "Disc", x: 70, y: 62, color: "#ec4899", html: "<p>Memorie „pentru totdeauna”: păstrează fișierele și când e oprit.</p>", why: "<p>Discul salvează informațiile astfel încât să rămână și fără curent: odinioară pe discuri magnetice care se roteau, astăzi adesea pe cipuri speciale (SSD), ca în stick-urile USB.</p>" },
        { id: "salvare", label: "A salva", x: 50, y: 82, color: "#14b8a6", html: "<p>A muta munca din RAM pe disc.</p>", why: "<p>Dacă nu salvezi și curentul se întrerupe, tot ce era doar în RAM se pierde. De aceea simbolul pentru „salvează” este o veche <b>dischetă</b> 💾.</p>" },
        { id: "bit", label: "Bit: 0 și 1", x: 50, y: 97, color: "#64748b", html: "<p>Calculatorul înțelege doar pornit (1) și oprit (0).</p>", why: "<p>Cu doar două simboluri se poate scrie orice număr: a demonstrat-o matematicianul german <b>Leibniz</b> încă din 1703, mult înainte să existe calculatoare.</p>" }
      ],
      edges: [
        ["computer", "input", "primește de la"],
        ["computer", "cpu", "prelucrează cu"],
        ["computer", "output", "returnează prin"],
        ["input", "cpu", "→"],
        ["cpu", "output", "→"],
        ["cpu", "ram", "folosește"],
        ["ram", "salvare", "cu comanda"],
        ["salvare", "disco", "ajunge pe"],
        ["cpu", "bit", "lucrează cu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: memoria",
      questions: [
        { type: "mc", q: "Care memorie se șterge când oprești calculatorul?", options: ["RAM-ul", "Discul", "Niciuna"], answer: 0, explain: "RAM-ul este memoria „pentru acum”." },
        { type: "tf", q: "Dacă salvez desenul, îl regăsesc și mâine.", answer: true, explain: "Salvând, desenul ajunge pe disc, memoria „pentru totdeauna”." },
        { type: "order", q: "Pune în ordine cum lucrează calculatorul.", items: ["Intrare", "Prelucrare", "Ieșire"], explain: "Mai întâi primește, apoi prelucrează, apoi dă rezultatul." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte 📌",
      html: `<ul>
<li>Calculatorul lucrează în 3 pași: <b>intrare → prelucrare → ieșire</b>.</li>
<li>Intrare: <b>tastatură, mouse, microfon, cameră web</b>.</li>
<li>Ieșire: <b>ecran, boxe, imprimantă</b>.</li>
<li><b>Procesorul</b> este creierul; <b>RAM-ul</b> este memoria „pentru acum”, <b>discul</b> cea „pentru totdeauna”.</li>
<li>Nu uita să <b>salvezi</b> și să oprești cu comanda potrivită!</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Calculator", d: "Mașină care primește informații, le prelucrează și dă un rezultat." },
    { t: "Tastatură", d: "Parte de intrare cu taste pentru scris." },
    { t: "Mouse", d: "Parte de intrare care mișcă săgeata pe ecran." },
    { t: "Ecran (monitor)", d: "Parte de ieșire care arată imagini și texte." },
    { t: "Procesor (CPU)", d: "„Creierul” calculatorului, care face calculele." },
    { t: "RAM", d: "Memorie rapidă care se șterge când se oprește calculatorul." },
    { t: "Disc", d: "Memorie care păstrează fișierele și când calculatorul este oprit." },
    { t: "Input / Output", d: "Intrarea / ieșirea informațiilor." },
    { t: "A salva", d: "A păstra munca în memoria „pentru totdeauna”." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre acestea este o parte de INTRARE?", options: ["Imprimanta", "Mouse-ul", "Boxele"], answer: 1, explain: "Mouse-ul face să intre în calculator comenzile noastre." },
      { type: "mc", q: "Care dintre acestea este o parte de IEȘIRE?", options: ["Ecranul", "Tastatura", "Microfonul"], answer: 0, explain: "Ecranul ne arată rezultatul." },
      { type: "text", q: "Cum se numește „creierul” calculatorului?", answer: ["procesor", "cpu", "procesorul", "unitatea centrală de procesare"], explain: "Procesorul, sau CPU." },
      { type: "order", q: "Pune în ordine cei 3 pași ai calculatorului.", items: ["Intrare (input)", "Prelucrare", "Ieșire (output)"], explain: "Primește, prelucrează, returnează." },
      { type: "tf", q: "RAM-ul păstrează fișierele și când calculatorul este oprit.", answer: false, explain: "RAM-ul se șterge; discul păstrează fișierele." },
      { type: "mc", q: "Ce trebuie să faci înainte de a închide un desen?", options: ["Să-l salvezi", "Să scoți ștecherul", "Să stingi ecranul"], answer: 0, explain: "Salvându-l, îl regăsești data viitoare." },
      { type: "mc", q: "Cu ce auzi muzica de la calculator?", options: ["Cu camera web", "Cu boxele sau căștile", "Cu mouse-ul"], answer: 1, explain: "Boxele și căștile sunt părți de ieșire pentru sunete." },
      { type: "tf", q: "Microfonul face să intre vocea în calculator.", answer: true, explain: "Este o parte de intrare." },
      { type: "mc", q: "Cum se oprește corect calculatorul?", options: ["Scoțând ștecherul", "Cu comanda Oprire", "Închizând ecranul cu forța"], answer: 1, explain: "Comanda Oprire închide totul în ordine." },
      { type: "text", q: "Cum se numește partea cu tastele pentru scris?", answer: ["tastatura", "tastatură", "o tastatură"], explain: "Tastatura." },
      { type: "mc", q: "Cum se numea calculatorul de birou italian din 1965?", options: ["Programma 101", "ENIAC", "Super Mario"], answer: 0, explain: "Programma 101 de la Olivetti." }
    ]
  }
});
