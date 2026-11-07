TOPIC('ro', {
  id: "p3-mat-frazioni-intro",
  title: "Fracțiile: introducere",
  intro: "Ai împărțit vreodată o tortă 🎂 cu prietenii tăi? Atunci cunoști deja <b>fracțiile</b>! Învățăm să <b>împărțim întregul în părți egale</b>, să citim și să scriem fracțiile și să aflăm fracția dintr-un grup de obiecte.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Întregul și părțile egale",
      html: `<p><b>Întregul</b> este un lucru întreg: o pizza 🍕, o foaie 📄, o tabletă de ciocolată 🍫, un grup de 12 bile…</p>
<p>A <b>fracționa</b> înseamnă a împărți întregul în <b>părți egale</b>.</p>
<ul>
<li>✅ O pizza tăiată în 4 felii <b>toate egale</b>: fiecare felie este <b>un sfert</b> (o pătrime).</li>
<li>❌ O pizza tăiată în 4 felii, una mare și trei mici: <b>nu</b> sunt sferturi!</li>
</ul>
<p>Fiecare parte egală se numește <b>unitate fracționară</b>. Dacă împart în 2 → <b>o jumătate</b> (1/2); în 3 → <b>o treime</b> (1/3); în 4 → <b>un sfert</b> (1/4); în 5 → <b>o cincime</b> (1/5)…</p>`
    },
    {
      type: "svg",
      title: "Părți egale sau nu?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="40" width="220" height="160" fill="#86efac" stroke="#166534" stroke-width="4"/>
<line x1="150" y1="40" x2="150" y2="200" stroke="#166534" stroke-width="4"/>
<line x1="40" y1="120" x2="260" y2="120" stroke="#166534" stroke-width="4"/>
<text x="150" y="240" font-size="24" fill="#166534" text-anchor="middle" font-weight="bold">✔ 4 părți egale</text>
<text x="150" y="270" font-size="20" fill="#166534" text-anchor="middle">fiecare parte = 1/4</text>
<rect x="340" y="40" width="220" height="160" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<line x1="490" y1="40" x2="490" y2="200" stroke="#991b1b" stroke-width="4"/>
<line x1="340" y1="90" x2="490" y2="90" stroke="#991b1b" stroke-width="4"/>
<line x1="490" y1="150" x2="560" y2="150" stroke="#991b1b" stroke-width="4"/>
<text x="450" y="240" font-size="24" fill="#991b1b" text-anchor="middle" font-weight="bold">✘ părți diferite</text>
<text x="450" y="270" font-size="20" fill="#991b1b" text-anchor="middle">nu sunt sferturi!</text>
</svg>`,
      caption: "Ambele foi sunt împărțite în 4 bucăți, dar doar prima este împărțită în sferturi."
    },
    {
      type: "text",
      title: "Cum se scrie o fracție",
      html: `<p>O fracție se scrie cu <b>două numere</b> și o <b>linie</b> la mijloc:</p>
<ul>
<li>dedesubt este <b>numitorul</b> 👇: în câte părți egale am împărțit întregul;</li>
<li>deasupra este <b>numărătorul</b> 👆: câte părți iau (sau colorez);</li>
<li>la mijloc <b>linia de fracție</b>.</li>
</ul>
<p>Exemplu: <b>2/5</b> → am împărțit întregul în 5 părți egale și iau 2. Se citește <b>„două cincimi”</b>.</p>
<p>Cum se citesc: 1/2 o jumătate · 1/3 o treime · 3/4 trei sferturi · 2/5 două cincimi · 5/6 cinci șesimi · 3/8 trei optimi · 7/10 șapte zecimi.</p>`
    },
    {
      type: "widget",
      title: "Construiește-ți fracția",
      widget: "fractionPie",
      options: { n: 1, d: 4 },
      caption: "Mișcă cursoarele: numitorul taie tortul, numărătorul colorează feliile."
    },
    {
      type: "quiz",
      title: "Mini-test: citirea fracțiilor",
      questions: [
        { type: "mc", q: "Un tort este tăiat în 8 felii egale și colorez 3. Ce fracție este?", options: ["8/3", "3/8", "3/5"], answer: 1, explain: "8 felii în total (numitor), 3 colorate (numărător): 3/8." },
        { type: "mc", q: "Cum se citește 1/3?", options: ["o treime", "unu și trei", "trei unități"], answer: 0, explain: "Numitorul 3 se citește „treimi”: o treime." },
        { type: "tf", q: "Dacă tai un măr în 2 bucăți diferite, fiecare este 1/2.", answer: false, explain: "Ca să fie jumătate, părțile trebuie să fie egale." }
      ]
    },
    {
      type: "text",
      title: "Partea care rămâne",
      html: `<p>Dacă împart o pizza în <b>6 felii</b> și mănânc <b>4</b>, am mâncat <b>4/6</b>.</p>
<p>Cât a rămas? 6 − 4 = 2 felii, adică <b>2/6</b>.</p>
<p>Și dacă pun la un loc toate feliile? <b>6/6</b> = <b>1 pizza întreagă</b>! Când numărătorul și numitorul sunt <b>egali</b>, fracția valorează <b>un întreg</b>.</p>`
    },
    {
      type: "text",
      title: "Fracția dintr-un grup de obiecte",
      html: `<p>Întregul poate fi și un <b>grup</b> de lucruri. Ca să aflu <b>1/3 din 12 bile</b>:</p>
<ol>
<li>împart cele 12 bile în <b>3 grupe egale</b>: 12 : 3 = <b>4</b>;</li>
<li>o grupă, adică <b>1/3</b>, conține <b>4 bile</b>.</li>
</ol>
<p>Și <b>2/3 din 12</b>? Iau 2 grupe: 4 × 2 = <b>8 bile</b>.</p>
<p>🔑 Regula: <b>împart la numărul de jos</b> (numitor), apoi <b>înmulțesc cu numărul de sus</b> (numărător).</p>`
    },
    {
      type: "svg",
      title: "1/3 din 12 bile",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="30" y="40" width="170" height="120" rx="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="4"/>
<rect x="215" y="40" width="170" height="120" rx="20" fill="#ffffff" stroke="#6b7280" stroke-width="3" stroke-dasharray="8 6"/>
<rect x="400" y="40" width="170" height="120" rx="20" fill="#ffffff" stroke="#6b7280" stroke-width="3" stroke-dasharray="8 6"/>
<g fill="#2563eb"><circle cx="80" cy="80" r="18"/><circle cx="150" cy="80" r="18"/><circle cx="80" cy="125" r="18"/><circle cx="150" cy="125" r="18"/></g>
<g fill="#a3a3a3"><circle cx="265" cy="80" r="18"/><circle cx="335" cy="80" r="18"/><circle cx="265" cy="125" r="18"/><circle cx="335" cy="125" r="18"/>
<circle cx="450" cy="80" r="18"/><circle cx="520" cy="80" r="18"/><circle cx="450" cy="125" r="18"/><circle cx="520" cy="125" r="18"/></g>
<text x="115" y="195" font-size="24" fill="#1d4ed8" text-anchor="middle" font-weight="bold">1/3 = 4</text>
<text x="300" y="195" font-size="22" fill="#6b7280" text-anchor="middle">1/3</text>
<text x="485" y="195" font-size="22" fill="#6b7280" text-anchor="middle">1/3</text>
<text x="300" y="240" font-size="22" fill="#1f2937" text-anchor="middle">12 : 3 = 4 bile în fiecare grupă</text>
</svg>`,
      caption: "Grupul de 12 bile este împărțit în 3 grupe egale: fiecare este o treime."
    },
    {
      type: "example",
      title: "Exemplu practic: tableta de ciocolată",
      html: `<p>O tabletă are <b>10 pătrățele</b>. Marco mănâncă <b>3</b> și Sofia <b>2</b>.</p>
<ul>
<li>Marco a mâncat <b>3/10</b> din tabletă.</li>
<li>Sofia a mâncat <b>2/10</b>.</li>
<li>În total au mâncat 5 pătrățele, adică <b>5/10</b>… care este chiar <b>jumătate</b> de tabletă! 🍫</li>
<li>Rămân <b>5/10</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: creioanele colorate",
      html: `<p>Într-un penar sunt <b>20 de creioane colorate</b>. <b>1/4</b> sunt roșii. Câte sunt creioanele roșii?</p>
<ol>
<li>20 : 4 = <b>5</b> (un sfert din creioane).</li>
<li>Numărătorul 1 → <b>5 creioane roșii</b> ✏️</li>
</ol>
<p>Și dacă ar fi <b>3/4</b>? 5 × 3 = <b>15 creioane</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Cuvântul <b>fracție</b> vine din latinescul <i>frangere</i>, care înseamnă <b>a rupe</b>. O fracție este un întreg „rupt” în bucăți egale! Și cuvântul <b>fragil</b> 🥚 vine de acolo.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Când spui <b>„un sfert de oră”</b> folosești o fracție! O oră are 60 de minute: 60 : 4 = <b>15 minute</b>. Iar <b>„jumătate de oră”</b> este 1/2 de oră = <b>30 de minute</b>. ⏰</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Părțile trebuie să fie <b>toate egale</b>.</li>
<li>Numitor (jos) = în câte părți împart. Numărător (sus) = câte părți iau.</li>
<li>Dacă sus și jos este același număr, este <b>un întreg</b>: 4/4 = 1.</li>
<li>Fracția dintr-un număr: <b>: numitor</b>, apoi <b>× numărător</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege fracțiile",
      intro: "Fracțiile se pot vedea în multe feluri. Încearcă-l pe cel care ți se pare mai clar!",
      tabs: [
        {
          label: "📄 Îndoaie foaia",
          html: `<p>Ia o foaie de hârtie adevărată!</p>
<ol>
<li>Îndoaie-o în două: desfăcând-o vezi <b>2 părți egale</b> → fiecare este <b>1/2</b>.</li>
<li>Îndoaie-o încă o dată în două: acum părțile sunt <b>4</b> → fiecare este <b>1/4</b>.</li>
<li>Încă o dată: <b>8 părți</b> → fiecare este <b>1/8</b>.</li>
</ol>
<p>Colorează 3 dreptunghiuri mici: ai colorat <b>3/8</b> din foaie. Cu cât îndoi mai mult, cu atât părțile devin mai <b>mici</b>!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<rect x="20" y="40" width="160" height="120" fill="#fde68a" stroke="#1f2937" stroke-width="3"/>
<line x1="100" y1="40" x2="100" y2="160" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<text x="100" y="195" font-size="22" text-anchor="middle">1/2</text>
<rect x="220" y="40" width="160" height="120" fill="#bbf7d0" stroke="#1f2937" stroke-width="3"/>
<line x1="300" y1="40" x2="300" y2="160" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="220" y1="100" x2="380" y2="100" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<text x="300" y="195" font-size="22" text-anchor="middle">1/4</text>
<rect x="420" y="40" width="160" height="120" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<rect x="420" y="40" width="40" height="60" fill="#f472b6"/><rect x="460" y="40" width="40" height="60" fill="#f472b6"/><rect x="500" y="40" width="40" height="60" fill="#f472b6"/>
<g stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"><line x1="460" y1="40" x2="460" y2="160"/><line x1="500" y1="40" x2="500" y2="160"/><line x1="540" y1="40" x2="540" y2="160"/><line x1="420" y1="100" x2="580" y2="100"/></g>
<text x="500" y="195" font-size="22" text-anchor="middle" fill="#be185d" font-weight="bold">3/8</text>
</svg>`
        },
        {
          label: "🧊 Cubulețe 3D",
          html: `<p>Aici sunt <b>12 cubulețe</b> în 3 rânduri de câte 4.</p>
<ul>
<li>Un <b>rând</b> este <b>1/3</b> din cubulețe: 4 cubulețe.</li>
<li>O <b>coloană</b> este <b>1/4</b> din cubulețe: 3 cubulețe.</li>
</ul>
<p>Rotește modelul și schimbă cursoarele: câte cubulețe sunt în 1/3? Dar în 1/4?</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "📏 Pe axă",
          html: `<p>Fracțiile sunt și <b>numere</b> care se află între 0 și 1 pe axă. Imaginează-ți că segmentul de la 0 la 1 este împărțit în <b>4 salturi egale</b>: un salt este <b>1/4</b>, două salturi <b>2/4</b> (adică jumătatea!), patru salturi ajung la <b>1</b>.</p>
<p>Aici axa merge de la 0 la 8: gândește-te că fiecare porțiune de la 0 la 4 este <b>un întreg</b> împărțit în sferturi. Semnul de la 2 este jumătatea, adică 2/4!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 8, step: 1, marks: [2, 4] }
        },
        {
          label: "👨‍🍳 Analogia bucătarului",
          html: `<p>O rețetă spune: <b>„1/2 litru de lapte”</b>. Bucătarul ia o sticlă de 1 litru și toarnă <b>jumătate</b>.</p>
<p>Apoi spune: <b>„3/4 dintr-un pachet de unt”</b>. Taie pachetul în <b>4 bucăți egale</b> și folosește <b>3</b>.</p>
<p>În bucătărie fracțiile se folosesc mereu: o jumătate de kilogram, un sfert de litru, o treime de cană… 🥛🧈</p>`
        },
        {
          label: "🇬🇧 Cum se spune în engleză",
          html: `<p>Și în engleză fracțiile au nume speciale:</p>
<ul>
<li>1/2 = <b>one half</b> (o jumătate)</li>
<li>1/4 = <b>one quarter</b> (un sfert) — ca „quarter”-ul de 25 de cenți de dolar, care este chiar 1/4 de dolar! 💵</li>
<li>1/3 = <b>one third</b>, 2/5 = <b>two fifths</b></li>
</ul>
<p>În multe țări, în loc de linia orizontală, fracția se scrie cu bara oblică: <b>3/4</b>. Sunt două moduri de a scrie același lucru.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta fracțiilor: atinge un nod și descoperă de ce",
      nodes: [
        { id: "intero", label: "Întregul", x: 50, y: 8, color: "#2563eb", html: "Lucrul întreg: o pizza, o foaie, un grup de obiecte.", why: "Fără să știm care este întregul, o fracție nu are sens: jumătatea unei pizza mici este mai puțin decât jumătatea unei pizza uriașe!" },
        { id: "uguali", label: "Părți egale", x: 50, y: 28, color: "#16a34a", html: "Ca să fracționezi întregul, bucățile trebuie să fie toate egale.", why: "Fracțiile s-au născut ca să împartă în mod drept: terenuri, recolte, pâine. Dacă părțile nu sunt egale, cineva primește mai mult!" },
        { id: "unita", label: "Unitate fracționară", x: 15, y: 45, color: "#a855f7", html: "O singură parte din întreg: 1/2, 1/3, 1/4…", why: "Vechii egipteni, acum aproape 4000 de ani, foloseau aproape numai aceste fracții cu numărătorul 1. Papirusul Rhind (cam 1650 î.Hr.) este plin de ele." },
        { id: "den", label: "Numitor", x: 30, y: 65, color: "#f59e0b", html: "Numărul de sub linie: în câte părți egale împart.", why: "Se numește așa pentru că „dă numele” părților: 4 → sferturi, 5 → cincimi, 10 → zecimi." },
        { id: "num", label: "Numărător", x: 70, y: 65, color: "#ef4444", html: "Numărul de deasupra liniei: câte părți iau.", why: "Vine de la „a număra”: numără părțile luate." },
        { id: "intera", label: "Fracție = 1 întreg", x: 85, y: 45, color: "#0ea5e9", html: "Când numărătorul și numitorul sunt egali: 5/5 = 1.", why: "Dacă iau toate părțile în care am împărțit, am pus la loc întregul." },
        { id: "gruppo", label: "Fracția dintr-un număr", x: 50, y: 85, color: "#14b8a6", html: "Se împarte la numitor și se înmulțește cu numărătorul.", why: "Împărțirea la numitor face grupele egale (cât valorează o parte); înmulțirea cu numărătorul ia numărul potrivit de grupe." },
        { id: "linea", label: "Linia de fracție", x: 85, y: 88, color: "#64748b", html: "Liniuța dintre numărător și numitor.", why: "A fost folosită de matematicienii arabi și adusă în Europa de Leonardo Fibonacci din Pisa în cartea <i>Liber Abaci</i> (1202)." }
      ],
      edges: [
        ["intero", "uguali", "se împarte în"],
        ["uguali", "unita", "fiecare este"],
        ["uguali", "den", "câte sunt →"],
        ["uguali", "num", "câte iau →"],
        ["num", "intera", "dacă e egal cu num."],
        ["den", "gruppo", ": la numitor"],
        ["num", "gruppo", "× cu numărător"],
        ["num", "linea", "despărțit de"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: fracția dintr-un număr",
      questions: [
        { type: "num", q: "Cât este 1/2 din 16?", answer: 8, explain: "16 : 2 = 8." },
        { type: "num", q: "Cât este 1/5 din 30?", answer: 6, explain: "30 : 5 = 6." },
        { type: "mc", q: "Care fracție valorează un întreg?", options: ["3/4", "6/6", "1/6"], answer: 1, explain: "6 părți din 6: tot întregul." }
      ]
    }
  ],
  glossary: [
    { t: "Întreg", d: "Lucrul sau grupul întreg pe care vrem să-l împărțim." },
    { t: "Fracție", d: "Una sau mai multe părți egale dintr-un întreg." },
    { t: "A fracționa", d: "A împărți un întreg în părți egale." },
    { t: "Unitate fracționară", d: "O singură parte egală, cu numărătorul 1 (ex. 1/4)." },
    { t: "Numărător", d: "Numărul de deasupra liniei: câte părți iau." },
    { t: "Numitor", d: "Numărul de sub linie: în câte părți egale împart întregul." },
    { t: "Linia de fracție", d: "Liniuța care desparte numărătorul de numitor." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ca să faci o fracție, părțile trebuie să fie…", options: ["toate egale", "toate diferite", "mai mult de zece"], answer: 0, explain: "Părțile trebuie să fie egale." },
      { type: "mc", q: "În 3/7 numărătorul este…", options: ["7", "3", "10"], answer: 1, explain: "Numărătorul este deasupra liniei: 3." },
      { type: "text", q: "Cum se numește numărul de sub linia de fracție?", answer: ["numitor", "numitorul"], explain: "Este numitorul: spune în câte părți împart." },
      { type: "mc", q: "Cum se citește 2/5?", options: ["două cincimi", "cinci jumătăți", "doi și cinci"], answer: 0, explain: "Două (numărător) cincimi (numitor 5)." },
      { type: "tf", q: "4/4 este egal cu un întreg.", answer: true, explain: "Iau toate cele 4 părți: întregul." },
      { type: "num", q: "O pizza este tăiată în 8 felii și mănânci 3. Câte felii rămân?", answer: 5, explain: "8 − 3 = 5 felii, adică 5/8." },
      { type: "num", q: "Cât este 1/4 din 20?", answer: 5, explain: "20 : 4 = 5." },
      { type: "num", q: "Cât este 2/3 din 9?", answer: 6, explain: "9 : 3 = 3; 3 × 2 = 6." },
      { type: "tf", q: "Cu cât numitorul este mai mare, cu atât fiecare parte este mai mare.", answer: false, explain: "Este invers: dacă tai în mai multe bucăți, fiecare bucată este mai mică. 1/8 este mai mic decât 1/2." },
      { type: "order", q: "Ordonează de la cea mai mare parte la cea mai mică.", items: ["1/2", "1/3", "1/4", "1/10"], explain: "Cu numărătorul 1, cu cât numitorul este mai mare, cu atât partea este mai mică." },
      { type: "mc", q: "Un sfert de oră câte minute sunt?", options: ["25", "15", "4"], answer: 1, explain: "60 : 4 = 15 minute." }
    ],
    gen: [["fracOf", 3]]
  }
});
