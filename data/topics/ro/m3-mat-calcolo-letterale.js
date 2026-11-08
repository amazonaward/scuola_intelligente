TOPIC('ro', {
  id: "m3-mat-calcolo-letterale",
  title: "Calculul literal",
  intro: "Ce au în comun formula ariei dreptunghiului (A = L × l), prețul a 3 caiete și o regulă valabilă pentru toate numerele? Folosesc <b>litere</b> în locul numerelor. Cu <b>calculul literal</b> învățăm să facem operații cu <b>monoame</b> și <b>polinoame</b>: este poarta de intrare în algebră.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "De ce folosim litere",
      html: `<p>O <b>literă</b> în matematică reprezintă un <b>număr oarecare</b> (o <b>variabilă</b>) sau un număr pe care nu-l cunoaștem încă (o <b>necunoscută</b>). Servește la:</p>
<ul>
<li>a <b>generaliza</b> o regulă: „suma dintre un număr și opusul său este 0” → <b>a + (−a) = 0</b>;</li>
<li>a scrie <b>formule</b>: perimetrul pătratului <b>P = 4l</b>; aria cercului <b>A = πr²</b>;</li>
<li>a <b>traduce</b> probleme: „dublul unui număr mărit cu 5” → <b>2x + 5</b>.</li>
</ul>
<p>O expresie cu numere și litere se numește <b>expresie literală</b>. Dacă în locul literelor pui numere, îi poți calcula <b>valoarea</b>: pentru x = 3, 2x + 5 = 2·3 + 5 = 11.</p>
<p>Convenții: semnul × dintre un număr și o literă se omite (2·x = <b>2x</b>), iar mai întâi se scrie numărul și apoi literele în ordine alfabetică (<b>3ab²</b>, nu b²3a).</p>`
    },
    {
      type: "text",
      title: "Monoamele",
      html: `<p>Un <b>monom</b> este o expresie literală în care există <b>doar înmulțiri</b> între numere și litere (cu exponenți naturali). Exemple: <b>5x²</b>, <b>−3ab</b>, <b>¾y</b>, <b>7</b>.</p>
<ul>
<li><b>Coeficientul</b>: partea numerică, cu semn (în −3ab este −3). Dacă nu este scris, este 1 (x²y = 1·x²y).</li>
<li><b>Partea literală</b>: literele cu exponenții lor (în −3ab este ab).</li>
<li><b>Gradul</b>: <b>suma exponenților</b> literelor. 5x²y³ are gradul 2 + 3 = <b>5</b>. Un număr singur are gradul 0.</li>
</ul>
<p>Două monoame sunt:</p>
<ul>
<li><b>asemenea</b> dacă au aceeași <b>parte literală</b>: 4x²y și −7x²y;</li>
<li><b>egale</b> dacă sunt asemenea și au același coeficient;</li>
<li><b>opuse</b> dacă sunt asemenea și au coeficienți opuși: 3ab și −3ab.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Anatomia unui monom",
      svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#f0fdf4"/>
<text x="320" y="130" font-size="78" text-anchor="middle" font-family="serif"><tspan fill="#dc2626">−5</tspan><tspan fill="#2563eb">a</tspan><tspan fill="#2563eb" font-size="42" dy="-34">3</tspan><tspan fill="#2563eb" dy="34">b</tspan><tspan fill="#2563eb" font-size="42" dy="-34">2</tspan></text>
<path d="M210 150 L210 175 L270 175 L270 150" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="240" y="205" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">coeficient</text>
<text x="240" y="228" font-size="15" text-anchor="middle" fill="#dc2626">(număr cu semn)</text>
<path d="M285 150 L285 175 L440 175 L440 150" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="362" y="205" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">parte literală</text>
<text x="362" y="228" font-size="15" text-anchor="middle" fill="#2563eb">a³b²</text>
<rect x="470" y="40" width="150" height="80" rx="10" fill="#a855f7"/>
<text x="545" y="72" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">grad</text>
<text x="545" y="100" font-size="20" text-anchor="middle" fill="#fff">3 + 2 = 5</text>
<text x="545" y="150" font-size="14" text-anchor="middle" fill="#6b21a8">grad în raport cu a: 3</text>
<text x="545" y="170" font-size="14" text-anchor="middle" fill="#6b21a8">grad în raport cu b: 2</text>
</svg>`,
      caption: "Fiecare monom are un coeficient, o parte literală și un grad."
    },
    {
      type: "text",
      title: "Operații cu monoame",
      html: `<ul>
<li><b>Suma algebrică</b>: se pot aduna <b>doar monoame asemenea</b>. Se adună coeficienții și se păstrează partea literală: 3x² + 5x² − x² = <b>7x²</b>. Dacă nu sunt asemenea, suma rămâne indicată: 2a + 3b nu se poate simplifica (nu este un monom, este un <b>polinom</b>).</li>
<li><b>Înmulțirea</b>: se înmulțesc coeficienții și se înmulțesc literele <b>adunând exponenții</b> literelor egale: (2a²b)·(−3ab³) = <b>−6a³b⁴</b>.</li>
<li><b>Împărțirea</b>: se împart coeficienții și se <b>scad exponenții</b>: (12x⁵y²) : (4x²y) = <b>3x³y</b>. (Rezultatul este un monom doar dacă fiecare exponent al împărțitorului nu depășește pe cel al deîmpărțitului.)</li>
<li><b>Puterea</b>: se ridică coeficientul la putere și se <b>înmulțesc exponenții</b>: (−2a³b)² = <b>4a⁶b²</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: monoame",
      questions: [
        { type: "num", q: "Care este gradul monomului 7x³y⁴z?", answer: 8, explain: "3 + 4 + 1 = 8 (z are exponentul 1)." },
        { type: "mc", q: "Care monom este asemenea cu −2ab²?", options: ["5a²b", "9ab²", "−2ab"], answer: 1, explain: "Are aceeași parte literală ab²." },
        { type: "mc", q: "(3x²)·(4x³) = ?", options: ["12x⁵", "12x⁶", "7x⁵"], answer: 0, explain: "3·4 = 12; x²·x³ = x⁵ (se adună exponenții)." }
      ]
    },
    {
      type: "text",
      title: "Polinoamele și operațiile lor",
      html: `<p>Un <b>polinom</b> este <b>suma algebrică de monoame</b> neasemenea între ele (după ce a fost „redus”). Cu 2 termeni este un <b>binom</b> (a + b), cu 3 un <b>trinom</b> (x² + 2x + 1).</p>
<ul>
<li><b>Reducerea</b>: se adună monoamele asemenea: 3x + 2y − x + 5y = <b>2x + 7y</b>.</li>
<li><b>Gradul</b> polinomului: gradul <b>cel mai mare</b> dintre monoamele sale. x³ + 4x² − 1 are gradul 3.</li>
<li><b>Ordonarea</b>: se scriu termenii după puterile descrescătoare ale unei litere.</li>
<li><b>Suma/diferența</b> polinoamelor: se elimină parantezele (atenție la − care schimbă semnele!) și se reduce: (2x + 3) − (x − 5) = 2x + 3 − x + 5 = <b>x + 8</b>.</li>
<li><b>Monom × polinom</b>: proprietatea <b>distributivă</b>: 3a(2a − 4) = <b>6a² − 12a</b>.</li>
<li><b>Polinom × polinom</b>: fiecare termen al primului ori fiecare termen al celui de-al doilea: (x + 2)(x + 3) = x² + 3x + 2x + 6 = <b>x² + 5x + 6</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Formulele de calcul prescurtat",
      html: `<p>Unele produse apar atât de des încât merită să le ții minte pe de rost:</p>
<ul>
<li><b>Pătratul unui binom</b>: (a + b)² = <b>a² + 2ab + b²</b> &nbsp;&nbsp; (a − b)² = <b>a² − 2ab + b²</b></li>
<li><b>Suma ori diferența</b>: (a + b)(a − b) = <b>a² − b²</b></li>
</ul>
<p>⚠️ Greșeală clasică: (a + b)² <b>nu</b> este a² + b²! Lipsește „dublul produsului” 2ab. Verifică cu numere: (3 + 2)² = 25, dar 3² + 2² = 13.</p>
<p>Truc de calcul mintal: 21 × 19 = (20 + 1)(20 − 1) = 400 − 1 = <b>399</b>.</p>`
    },
    {
      type: "svg",
      title: "Pătratul binomului, văzut cu ajutorul ariilor",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fff7ed"/>
<rect x="60" y="40" width="180" height="180" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="240" y="40" width="80" height="180" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="60" y="220" width="180" height="80" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="240" y="220" width="80" height="80" fill="#f87171" stroke="#991b1b" stroke-width="3"/>
<text x="150" y="140" font-size="34" text-anchor="middle" fill="#fff" font-weight="bold">a²</text>
<text x="280" y="140" font-size="26" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="150" y="270" font-size="26" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="280" y="270" font-size="26" text-anchor="middle" fill="#fff" font-weight="bold">b²</text>
<text x="150" y="30" font-size="20" text-anchor="middle" fill="#1f2937">a</text>
<text x="280" y="30" font-size="20" text-anchor="middle" fill="#1f2937">b</text>
<text x="40" y="135" font-size="20" text-anchor="middle" fill="#1f2937">a</text>
<text x="40" y="265" font-size="20" text-anchor="middle" fill="#1f2937">b</text>
<text x="480" y="130" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">(a + b)² =</text>
<text x="480" y="175" font-size="26" text-anchor="middle" fill="#1f2937"><tspan fill="#2563eb">a²</tspan> + <tspan fill="#b45309">2ab</tspan> + <tspan fill="#dc2626">b²</tspan></text>
<text x="480" y="230" font-size="16" text-anchor="middle" fill="#78350f">cele două dreptunghiuri galbene</text>
<text x="480" y="252" font-size="16" text-anchor="middle" fill="#78350f">sunt „dublul produsului”</text>
</svg>`,
      caption: "Un pătrat cu latura a + b se împarte într-un pătrat a², un pătrat b² și două dreptunghiuri ab. O știau deja grecii: este propoziția II.4 din Elementele lui Euclid."
    },
    {
      type: "example",
      title: "Exemplu practic: de la problemă la expresie",
      html: `<p>La cafenea un corn costă <b>c</b> lei și un cappuccino <b>p</b> lei. O clasă comandă 12 cornuri și 9 cappuccino; profesorii 3 cornuri și 4 cappuccino.</p>
<ul>
<li>Cheltuiala clasei: <b>12c + 9p</b></li>
<li>Cheltuiala profesorilor: <b>3c + 4p</b></li>
<li>Cheltuiala totală: (12c + 9p) + (3c + 4p) = <b>15c + 13p</b> (se adună monoamele asemenea: cornuri cu cornuri, cappuccino cu cappuccino!)</li>
<li>Dacă c = 1,20 lei și p = 1,50 lei: 15·1,20 + 13·1,50 = 18 + 19,50 = <b>37,50 lei</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: răsadnița cu bordură",
      html: `<p>O răsadniță pătrată are latura de <b>x</b> metri. Se adaugă în jur o bordură de pietriș lată de 1 m: noul pătrat are latura <b>x + 2</b>.</p>
<ul>
<li>Aria totală: (x + 2)² = <b>x² + 4x + 4</b></li>
<li>Aria pietrișului = aria totală − aria răsadniței = x² + 4x + 4 − x² = <b>4x + 4</b></li>
<li>Dacă x = 5 m: pietriș = 4·5 + 4 = <b>24 m²</b>. Verificare: 7² − 5² = 49 − 25 = 24 ✔️</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cine a inventat literele în matematică",
      html: `<p>Timp de secole problemele se scriau <b>în cuvinte</b> (algebră „retorică”). Grecul <b>Diofant</b> (secolul al III-lea d.Hr.) a folosit primele abrevieri. Francezul <b>François Viète</b>, în 1591, a avut ideea de a folosi literele în mod sistematic: vocalele pentru necunoscute, consoanele pentru numerele cunoscute. Apoi <b>Descartes</b>, în <i>Geometria</i> din 1637, a ales ultimele litere ale alfabetului (<b>x, y, z</b>) pentru necunoscute și primele (<b>a, b, c</b>) pentru numerele cunoscute: convenția pe care o folosim și azi!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Numele „algebră”",
      html: `<p>Cuvântul <b>algebră</b> vine din arabă, <i>al-jabr</i>, „a pune la loc, a reface” (același termen îl desemna pe cel care reașeza oasele rupte!). Se află în titlul cărții matematicianului persan <b>al-Khwārizmī</b>, scrisă la Bagdad în jurul anului 820 d.Hr. De la numele lui vine și cuvântul <b>algoritm</b>.</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Monom: doar produse. Grad = suma exponenților.</li>
<li>Se adună <b>doar monoamele asemenea</b> (aceeași parte literală).</li>
<li>Produs: exponenții se <b>adună</b>; cât: se <b>scad</b>; putere: se <b>înmulțesc</b>.</li>
<li>(a + b)² = a² + 2ab + b²; &nbsp;(a + b)(a − b) = a² − b².</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege calculul literal",
      intro: "Literele te încurcă? Încearcă să le vezi ca obiecte, ca arii sau ca blocuri de construit.",
      tabs: [
        {
          label: "🍎 Mere și pere",
          html: `<p>Imaginează-ți că <b>x</b> este un măr 🍎 și <b>y</b> o pară 🍐.</p>
<ul>
<li>3x + 2x = 🍎🍎🍎 + 🍎🍎 = <b>5x</b> (5 mere).</li>
<li>3x + 2y = 🍎🍎🍎 + 🍐🍐: nu pot spune „5 merepere”! Rămâne <b>3x + 2y</b>. Iată de ce se adună doar monoamele <b>asemenea</b>.</li>
<li>Dar atenție: x și x² sunt obiecte diferite (un măr și o ladă pătrată de mere), deci x + x² <b>nu</b> face 2x³!</li>
</ul>
<p>Analogia funcționează pentru adunări și scăderi; pentru înmulțiri este mai bine să folosim ariile (fila următoare).</p>`
        },
        {
          label: "🇺🇸 Algebra tiles: ariile",
          html: `<p>În Statele Unite se folosesc <b>algebra tiles</b>: un pătrat mare = x², un dreptunghi = x, un pătrățel = 1.</p>
<p>A înmulți două polinoame înseamnă a construi un <b>dreptunghi</b> cu acele laturi și a număra plăcuțele. (x + 2)(x + 3):</p>
<ul><li>1 pătrat x², 5 dreptunghiuri x (2 + 3), 6 pătrățele → <b>x² + 5x + 6</b>.</li></ul>
<p>În figură: baza x + 3, înălțimea x + 2. Numără plăcuțele de fiecare culoare!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="40" width="150" height="150" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="135" y="125" font-size="30" text-anchor="middle" fill="#fff" font-weight="bold">x²</text>
<g fill="#4ade80" stroke="#166534" stroke-width="3">
<rect x="210" y="40" width="40" height="150"/><rect x="250" y="40" width="40" height="150"/><rect x="290" y="40" width="40" height="150"/>
<rect x="60" y="190" width="150" height="40"/><rect x="60" y="230" width="150" height="40"/>
</g>
<g fill="#facc15" stroke="#854d0e" stroke-width="3">
<rect x="210" y="190" width="40" height="40"/><rect x="250" y="190" width="40" height="40"/><rect x="290" y="190" width="40" height="40"/>
<rect x="210" y="230" width="40" height="40"/><rect x="250" y="230" width="40" height="40"/><rect x="290" y="230" width="40" height="40"/>
</g>
<text x="135" y="30" font-size="18" text-anchor="middle">x</text><text x="270" y="30" font-size="18" text-anchor="middle">+ 3</text>
<text x="40" y="120" font-size="18" text-anchor="middle">x</text><text x="40" y="235" font-size="18" text-anchor="middle">+2</text>
<text x="460" y="110" font-size="22" text-anchor="middle" fill="#1e3a8a">1 × x²</text>
<text x="460" y="150" font-size="22" text-anchor="middle" fill="#166534">5 × x</text>
<text x="460" y="190" font-size="22" text-anchor="middle" fill="#854d0e">6 × 1</text>
<text x="460" y="240" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">x² + 5x + 6</text>
</svg>`
        },
        {
          label: "🧊 Monoame în 3D",
          html: `<p>Un monom de <b>gradul 3</b> ca <b>abc</b> este <b>volumul</b> unei cutii cu muchiile a, b, c. Un monom de gradul 2 (ab) este o arie, unul de gradul 1 (a) o lungime. Iată de ce „gradul” și „dimensiunile” sunt legate!</p>
<p>Schimbă măsurile: dacă a = 4, b = 3, c = 2, volumul este 4·3·2 = 24 de cubulețe. Dacă dublezi doar a, volumul se dublează; dacă le dublezi pe toate trei, devine de 2³ = 8 ori mai mare: (2a)(2b)(2c) = 8abc.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 2 }
        },
        {
          label: "📐 Dreptunghiul care crește",
          html: `<p>Un dreptunghi cu baza <b>b</b> și înălțimea <b>h</b> are aria <b>bh</b> și perimetrul <b>2b + 2h</b>: două polinoame! Folosește widgetul: mărește baza cu 1. Aria crește cu <b>h</b> (o coloană de pătrățele), iar perimetrul cu <b>2</b>. În litere: (b + 1)h = bh + h.</p>`,
          widget: "areaGrid",
          options: { w: 5, h: 3, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta calculului literal",
      nodes: [
        { id: "lettere", label: "Litere în locul numerelor", x: 50, y: 6, color: "#64748b", html: "Variabile și necunoscute care reprezintă numere.", why: "De la algebra „retorică” în cuvinte (babilonieni, al-Khwārizmī) s-a trecut la cea „sincopată” (Diofant) și apoi la cea „simbolică” cu Viète (1591) și Descartes (1637). Literele permit scrierea unor reguli valabile pentru toate numerele." },
        { id: "monomio", label: "Monom", x: 25, y: 28, color: "#2563eb", html: "Produs dintre un coeficient și litere cu exponenți naturali.", why: "Din greacă <i>mónos</i>, „unul singur”: un singur termen. Este „cărămida” tuturor expresiilor algebrice." },
        { id: "polinomio", label: "Polinom", x: 75, y: 28, color: "#16a34a", html: "Suma algebrică de monoame.", why: "Din greacă <i>polýs</i>, „mulți”: mulți termeni. Orice număr scris în baza 10 este, în fond, un polinom: 345 = 3·10² + 4·10 + 5." },
        { id: "grado", label: "Grad", x: 10, y: 52, color: "#a855f7", html: "Suma exponenților (monom) sau gradul maxim (polinom).", why: "Leagă algebra de geometrie: gradul 1 = lungime, 2 = arie, 3 = volum. Grecii numeau de fapt x² „pătrat” și x³ „cub”." },
        { id: "simili", label: "Monoame asemenea", x: 38, y: 52, color: "#f59e0b", html: "Aceeași parte literală: se pot aduna.", why: "Este proprietatea distributivă invers: 3x + 5x = (3 + 5)x = 8x. Dacă părțile literale sunt diferite, nu există un factor comun de dat în factor." },
        { id: "potenze", label: "Proprietățile puterilor", x: 62, y: 52, color: "#ef4444", html: "aᵐ·aⁿ = aᵐ⁺ⁿ; aᵐ:aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.", why: "Provin din definiția puterii ca înmulțire repetată: a²·a³ = (a·a)·(a·a·a) = a⁵. Le folosea deja Nicolas Chuquet în 1484; notația cu exponentul sus se datorează lui Descartes." },
        { id: "distributiva", label: "Proprietatea distributivă", x: 88, y: 52, color: "#0ea5e9", html: "a(b + c) = ab + ac: pentru a înmulți polinoamele.", why: "Este o proprietate a numerelor care se vede bine cu ariile: un dreptunghi cu baza b + c și înălțimea a se împarte în două dreptunghiuri ab și ac." },
        { id: "notevoli", label: "Formule de calcul prescurtat", x: 75, y: 80, color: "#14b8a6", html: "(a + b)² = a² + 2ab + b²; (a + b)(a − b) = a² − b².", why: "Euclid le-a demonstrat cu figuri în Elemente (cartea a II-a, aproximativ 300 î.Hr.), fără litere algebrice: pentru el erau proprietăți ale pătratelor și dreptunghiurilor." },
        { id: "equazioni", label: "Spre ecuații", x: 30, y: 85, color: "#7c3aed", html: "Calculul literal ajută la rezolvarea ecuațiilor și la folosirea formulelor.", why: "Pentru a găsi o necunoscută trebuie să știi să simplifici expresiile: este pasul următor al algebrei." }
      ],
      edges: [
        ["lettere", "monomio", "formează"],
        ["monomio", "polinomio", "adunate dau"],
        ["monomio", "grado", "are un"],
        ["monomio", "simili", "pot fi"],
        ["monomio", "potenze", "se înmulțesc cu"],
        ["polinomio", "distributiva", "se înmulțesc cu"],
        ["distributiva", "notevoli", "cazuri speciale"],
        ["polinomio", "equazioni", "servesc pentru"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: polinoame",
      questions: [
        { type: "mc", q: "Redu: 4a + 3b − a + 2b", options: ["3a + 5b", "8ab", "5a + 5b"], answer: 0, explain: "4a − a = 3a; 3b + 2b = 5b." },
        { type: "mc", q: "(x + 5)² = ?", options: ["x² + 25", "x² + 10x + 25", "x² + 5x + 25"], answer: 1, explain: "Pătratul binomului: x² + 2·5·x + 25." },
        { type: "num", q: "Cât face 31 × 29 folosind suma ori diferența?", answer: 899, explain: "(30 + 1)(30 − 1) = 900 − 1 = 899." }
      ]
    }
  ],
  glossary: [
    { t: "Expresie literală", d: "Expresie cu numere și litere legate prin operații." },
    { t: "Monom", d: "Expresie literală cu doar înmulțiri între numere și litere." },
    { t: "Coeficient", d: "Partea numerică a unui monom, cu semn." },
    { t: "Parte literală", d: "Literele unui monom cu exponenții lor." },
    { t: "Grad", d: "Suma exponenților literelor unui monom; pentru un polinom, gradul maxim al termenilor săi." },
    { t: "Monoame asemenea", d: "Monoame cu aceeași parte literală." },
    { t: "Polinom", d: "Suma algebrică de monoame (binom: 2 termeni; trinom: 3)." },
    { t: "Formule de calcul prescurtat", d: "Produse cu rezultat cunoscut, precum pătratul binomului și suma ori diferența." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este coeficientul lui −x²y?", options: ["1", "−1", "2"], answer: 1, explain: "Când există doar semnul minus, coeficientul este −1." },
      { type: "num", q: "Gradul polinomului 3x⁴ − 2x²y³ + 5", answer: 5, explain: "Gradele termenilor sunt 4, 5 și 0: maximul este 5." },
      { type: "mc", q: "5ab − 8ab = ?", options: ["−3ab", "3ab", "−3a²b²"], answer: 0, explain: "Monoame asemenea: 5 − 8 = −3." },
      { type: "mc", q: "(−2x³)·(5x²y) = ?", options: ["−10x⁵y", "10x⁶y", "3x⁵y"], answer: 0, explain: "−2·5 = −10; x³·x² = x⁵; y rămâne." },
      { type: "mc", q: "(18a⁶b³) : (6a²b) = ?", options: ["3a³b³", "3a⁴b²", "12a⁴b²"], answer: 1, explain: "18 : 6 = 3; a⁶⁻² = a⁴; b³⁻¹ = b²." },
      { type: "mc", q: "(3a²)³ = ?", options: ["9a⁵", "27a⁶", "27a⁵"], answer: 1, explain: "3³ = 27; (a²)³ = a⁶." },
      { type: "tf", q: "(a + b)² = a² + b²", answer: false, explain: "Lipsește dublul produsului: (a + b)² = a² + 2ab + b²." },
      { type: "mc", q: "(x + 4)(x − 4) = ?", options: ["x² − 16", "x² + 16", "x² − 8x − 16"], answer: 0, explain: "Suma ori diferența: x² − 4² = x² − 16." },
      { type: "num", q: "Calculează valoarea lui 2x² − 3x + 1 pentru x = 3.", answer: 10, explain: "2·9 − 9 + 1 = 18 − 9 + 1 = 10." },
      { type: "mc", q: "Triplul unui număr micșorat cu 7 se scrie…", options: ["3(x − 7)", "3x − 7", "x³ − 7"], answer: 1, explain: "Mai întâi triplul (3x), apoi se scade 7." },
      { type: "mc", q: "2a(3a − 5) = ?", options: ["6a² − 10a", "6a − 10", "5a² − 10a"], answer: 0, explain: "Proprietatea distributivă: 2a·3a − 2a·5." },
      { type: "text", q: "Cum se numește un polinom format din doi termeni?", answer: ["binom", "un binom"], explain: "Binom (bi = doi)." }
    ],
    gen: [["power", 2]]
  }
});
