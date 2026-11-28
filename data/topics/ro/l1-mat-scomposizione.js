TOPIC('ro', {
  id: "l1-mat-scomposizione",
  title: "Descompunerea polinoamelor în factori",
  intro: "Așa cum un număr ca 84 se poate scrie 2·2·3·7, și un polinom poate fi descompus într-un <b>produs de factori</b> mai simpli. <b>A descompune</b> este operația inversă dezvoltării: este instrumentul care va face posibile fracțiile algebrice, ecuațiile de grad mai mare decât întâi și aproape toată algebra anilor următori. În această lecție vedem tehnicile fundamentale: factorul comun, formulele de calcul prescurtat, trinomul special și schema lui Ruffini.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Ce înseamnă a descompune",
      html: `<p><b>A descompune</b> un polinom înseamnă a-l scrie ca <b>produs de polinoame</b> de grad mai mic (<b>factorii</b>). Este operația inversă înmulțirii:</p>
<p style="text-align:center"><b>(x + 2)(x + 3) = x² + 5x + 6</b><br>dezvoltare →<br>← descompunere</p>
<p>Un polinom care nu mai poate fi împărțit în factori de grad mai mic (cu coeficienți raționali) se numește <b>ireductibil</b>, ca numerele prime: x + 1 și x² + 1 sunt ireductibile. A descompune „până la capăt” înseamnă a te opri doar când toți factorii sunt ireductibili.</p>
<p>La ce folosește? Un produs este <b>zero</b> numai dacă un factor este zero (legea anulării produsului), deci, după descompunere, se văd imediat valorile care anulează polinomul; în plus, factorii comuni se pot <b>simplifica</b> în fracții. Descompunerea este cheia a tot.</p>`
    },
    {
      type: "text",
      title: "1) Scoaterea factorului comun",
      html: `<p>Este aplicarea „în sens invers” a distributivității: a·b + a·c = <b>a(b + c)</b>. Se caută <b>cel mai mare divizor comun</b> (c.m.m.d.c.) al tuturor termenilor: cel mai mare coeficient numeric care îi împarte pe toți și literele comune cu <b>cel mai mic exponent</b>.</p>
<p>Exemplu: <b>6x³ − 9x² + 3x</b>. C.m.m.d.c. al coeficienților 6, 9, 3 este 3; litera x apare în toți cu exponentul minim 1. Deci:</p>
<p style="text-align:center">6x³ − 9x² + 3x = <b>3x(2x² − 3x + 1)</b></p>
<p>Verificare: înmulțește 3x cu fiecare termen din paranteză și regăsești expresia inițială. Atenție: dacă un termen coincide cu c.m.m.d.c., în paranteză rămâne <b>1</b> (nu zero!): 3x : 3x = 1.</p>
<p><b>Factor comun parțial (gruparea termenilor)</b>: cu patru termeni se scoate factorul comun pe grupe, sperând că în paranteză rămâne același factor:</p>
<p style="text-align:center">ax + ay + bx + by = a(x + y) + b(x + y) = <b>(x + y)(a + b)</b></p>`
    },
    {
      type: "svg",
      title: "A descompune înseamnă a reconstrui un dreptunghi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="50" width="160" height="150" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="220" y="50" width="90" height="150" fill="#86efac" stroke="#166534" stroke-width="3"/>
<rect x="60" y="200" width="160" height="60" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="220" y="200" width="90" height="60" fill="#fca5a5" stroke="#991b1b" stroke-width="3"/>
<text x="140" y="132" font-size="26" text-anchor="middle" fill="#1e1b4b" font-weight="bold">x²</text>
<text x="265" y="132" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">3x</text>
<text x="140" y="238" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">2x</text>
<text x="265" y="238" font-size="22" text-anchor="middle" fill="#7f1d1d" font-weight="bold">6</text>
<text x="140" y="38" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="265" y="38" font-size="18" text-anchor="middle" fill="#334155">3</text>
<text x="42" y="130" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="42" y="237" font-size="18" text-anchor="middle" fill="#334155">2</text>
<text x="340" y="100" font-size="18" fill="#1f2937" font-weight="bold">Aria totală:</text>
<text x="340" y="130" font-size="18" fill="#1f2937">x² + 3x + 2x + 6 = x² + 5x + 6</text>
<text x="340" y="170" font-size="18" fill="#1f2937" font-weight="bold">Laturi: (x + 3) și (x + 2)</text>
<text x="340" y="210" font-size="20" fill="#4338ca" font-weight="bold">x² + 5x + 6 = (x + 2)(x + 3)</text>
</svg>`,
      caption: "Un polinom de gradul al doilea văzut ca arie: a-l descompune înseamnă a găsi măsurile laturilor dreptunghiului."
    },
    {
      type: "text",
      title: "2) Descompunerea cu formulele de calcul prescurtat",
      html: `<p>Citind „invers” formulele de calcul prescurtat se obțin cele mai utile descompuneri:</p>
<table>
<tr><th>Polinom</th><th>Descompunere</th><th>Nume</th></tr>
<tr><td>A² − B²</td><td>(A + B)(A − B)</td><td>diferență de pătrate</td></tr>
<tr><td>A² + 2AB + B²</td><td>(A + B)²</td><td>pătratul unui binom</td></tr>
<tr><td>A² − 2AB + B²</td><td>(A − B)²</td><td>pătratul unui binom</td></tr>
<tr><td>A³ + 3A²B + 3AB² + B³</td><td>(A + B)³</td><td>cubul unui binom</td></tr>
<tr><td>A³ + B³</td><td>(A + B)(A² − AB + B²)</td><td>sumă de cuburi</td></tr>
<tr><td>A³ − B³</td><td>(A − B)(A² + AB + B²)</td><td>diferență de cuburi</td></tr>
</table>
<p><b>Exemple.</b></p>
<ul>
<li>4x² − 25 = (2x)² − 5² = <b>(2x + 5)(2x − 5)</b></li>
<li>9x² + 12x + 4: pătratele sunt (3x)² și 2²; dublul produs 2·3x·2 = 12x ✔ → <b>(3x + 2)²</b></li>
<li>x⁴ − 16 = (x²)² − 4² = (x² + 4)(x² − 4) = <b>(x² + 4)(x + 2)(x − 2)</b>: factorul x² + 4 este ireductibil, dar x² − 4 se poate descompune mai departe!</li>
<li>x³ + 8 = x³ + 2³ = <b>(x + 2)(x² − 2x + 4)</b></li>
</ul>
<p>⚠️ <b>Suma</b> a două pătrate (x² + 9) <b>nu</b> se descompune: (x + 3)² dă x² + 6x + 9, nu x² + 9.</p>`
    },
    {
      type: "example",
      title: "Calcul mental cu diferența de pătrate",
      html: `<p>Cât face <b>99 × 101</b> fără calculator? Scrie 99 = 100 − 1 și 101 = 100 + 1: este (a − b)(a + b) = a² − b².</p>
<p>99 × 101 = 100² − 1² = 10 000 − 1 = <b>9 999</b>.</p>
<p>La fel 48 × 52 = (50 − 2)(50 + 2) = 2 500 − 4 = <b>2 496</b>. O identitate algebrică devenită un truc de campioni ai calculului mental.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: factor comun și formule de calcul prescurtat",
      questions: [
        { type: "num", q: "6x + 12 = 6(x + ?). Ce număr trebuie pus în locul semnului întrebării?", answer: 2, explain: "12 : 6 = 2, deci 6x + 12 = 6(x + 2)." },
        { type: "mc", q: "Cum se descompune x² − 49?", options: ["(x − 7)²", "(x + 7)(x − 7)", "(x + 49)(x − 1)"], answer: 1, explain: "Este o diferență de pătrate: x² − 7² = (x + 7)(x − 7)." },
        { type: "tf", q: "x² + 9 = (x + 3)².", answer: false, explain: "(x + 3)² = x² + 6x + 9: lipsește dublul produs. Suma de pătrate x² + 9 este ireductibilă." }
      ]
    },
    {
      type: "text",
      title: "3) Trinomul special x² + sx + p",
      html: `<p>Un trinom de gradul al doilea cu coeficientul 1 în fața lui x² se descompune, când este posibil, căutând <b>două numere m și n</b> astfel încât:</p>
<p style="text-align:center">m + n = s (coeficientul lui x) &nbsp;&nbsp; și &nbsp;&nbsp; m · n = p (termenul liber)</p>
<p>Atunci <b>x² + sx + p = (x + m)(x + n)</b>. Motivul este simplu: (x + m)(x + n) = x² + (m + n)x + m·n.</p>
<p><b>Exemplul 1</b>: x² − 5x + 6. Caut două numere cu produsul 6 și suma −5: sunt −2 și −3. Deci <b>(x − 2)(x − 3)</b>.</p>
<p><b>Exemplul 2</b>: x² + x − 12. Produsul −12 (semne opuse), suma +1: perechile de factori ai lui 12 sunt (1,12), (2,6), (3,4); cea cu diferența 1 este 3 și 4, iar cel mai mare trebuie să fie pozitiv: +4 și −3. Deci <b>(x + 4)(x − 3)</b>.</p>
<p><b>Trucul semnelor</b>: dacă p &gt; 0, cele două numere au același semn (cel al lui s); dacă p &lt; 0, au semne opuse, iar cel mai mare în valoare absolută are semnul lui s. Dacă nu există numere întregi potrivite, trinomul este (de obicei) ireductibil.</p>`
    },
    {
      type: "widget",
      title: "Ce tehnică folosesc?",
      widget: "classify",
      options: { groups: ["Factor comun", "Diferență de pătrate", "Trinom special", "Pătratul unui binom"], items: [
        ["6x² + 9x", 0],
        ["x² − 36", 1],
        ["x² + 5x + 6", 2],
        ["4x² + 12x + 9", 3],
        ["4a² − 9b²", 1],
        ["x² − x − 12", 2],
        ["9x² − 6x + 1", 3],
        ["ab + ac", 0]
      ] },
      caption: "Înainte de a calcula, recunoaște forma: este jumătate din muncă."
    },
    {
      type: "text",
      title: "4) Regula lui Ruffini",
      html: `<p>Pentru polinoame de gradul 3 sau mai mare, fără o formă „specială”, se folosește <b>teorema lui Ruffini</b> (în manualele românești, teorema lui Bézout):</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Un polinom P(x) este divizibil cu (x − a) dacă și numai dacă P(a) = 0.</b></p>
<p>Așadar este suficient să găsim un număr <b>a</b> care anulează polinomul: atunci (x − a) este un factor. Pentru un polinom cu coeficienți întregi și coeficientul dominant 1, candidații întregi sunt <b>divizorii termenului liber</b> (cu ambele semne).</p>
<p><b>Exemplu</b>: P(x) = x³ − 2x² − 5x + 6. Termenul liber 6, divizori ±1, ±2, ±3, ±6.</p>
<ul>
<li>P(1) = 1 − 2 − 5 + 6 = 0 ✔ → (x − 1) este un factor.</li>
<li>Împărțirea cu <b>schema lui Ruffini</b>: scriu coeficienții 1, −2, −5, 6; cobor 1; înmulțesc cu a = 1 și adun pe coloană: 1 → (−2 + 1) = −1 → (−5 − 1) = −6 → (6 − 6) = 0 (rest zero ✔).</li>
<li>Câtul are coeficienții 1, −1, −6: x² − x − 6.</li>
<li>Acesta este un trinom special: suma −1, produsul −6 → −3 și +2: (x − 3)(x + 2).</li>
</ul>
<p>Rezultat: <b>x³ − 2x² − 5x + 6 = (x − 1)(x − 3)(x + 2)</b>. Rădăcinile (1, 3, −2) sunt chiar valorile care anulează polinomul.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Paolo Ruffini",
      html: `<p><b>Paolo Ruffini</b> (1765–1822) a fost un medic și matematician italian, născut la Valentano și care a trăit la Modena. A pus la punct metoda de împărțire care îi poartă numele la începutul secolului al XIX-lea, dar este și mai celebru pentru că a încercat, încă din 1799, să demonstreze că ecuația generală de <b>gradul al cincilea nu se rezolvă cu radicali</b>: demonstrația era incompletă, dar a deschis drumul lui Abel și apoi lui Galois, care au închis problema. O regulă pentru elevii din clasa a IX-a se naște, așadar, dintr-o mare poveste a matematicii.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: grădina cu strat de flori",
      html: `<p>O grădină pătrată cu latura de x metri are în centru un strat de flori pătrat cu latura de 3 m. Aria cu iarbă este x² − 9. Descompunând: <b>(x + 3)(x − 3)</b>. Înseamnă că poți gândi iarba ca pe un dreptunghi cu laturile (x + 3) și (x − 3). Pentru x = 13 m: 16 · 10 = 160 m², la fel ca 169 − 9 = 160 m², dar cu un calcul mai rapid.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Fermat și numerele mari",
      html: `<p>Matematicianul francez <b>Pierre de Fermat</b> (1601–1665) a folosit diferența de pătrate pentru a descompune numere întregi: dacă un număr N se scrie ca a² − b², atunci N = (a + b)(a − b). Metoda lui funcționează bine când cei doi factori sunt apropiați. Și securitatea multor sisteme moderne de criptografie se bazează pe faptul că descompunerea unor numere uriașe în factori primi este foarte dificilă.</p>`
    },
    {
      type: "remember",
      title: "Strategia: în ce ordine încercăm",
      html: `<ol>
<li><b>Factor comun total</b>: există un factor comun tuturor termenilor? Scoate-l întotdeauna primul.</li>
<li>Numără termenii: <b>2</b> → diferență de pătrate sau de cuburi; <b>3</b> → pătratul unui binom sau trinom special; <b>4</b> → grupare a termenilor sau cubul unui binom.</li>
<li>Dacă nu recunoști nicio formă și gradul este ≥ 3: <b>Ruffini</b>.</li>
<li><b>Controlează</b> dacă vreun factor se mai poate descompune (ca x² − 4).</li>
<li><b>Verifică</b> înmulțind factorii: trebuie să regăsești polinomul de la care ai pornit.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege descompunerea",
      intro: "Dacă descompunerea pare o colecție de formule de învățat pe de rost, încearcă aceste alte drumuri.",
      tabs: [
        {
          label: "📐 Cu arii",
          html: `<p>Diferența de pătrate se „vede”. Ia un pătrat cu latura <b>a</b> și scoate un pătrățel cu latura <b>b</b> dintr-un colț: rămâne un „L” cu aria <b>a² − b²</b>. Taie L-ul și reasamblează piesele: devine un <b>dreptunghi</b> cu laturile <b>(a + b)</b> și <b>(a − b)</b>. Aceeași arie, deci <b>a² − b² = (a + b)(a − b)</b>.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="60" width="160" height="160" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="130" y="60" width="60" height="60" fill="#ffffff" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="160" y="97" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">b²</text>
<text x="80" y="150" font-size="20" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a² − b²</text>
<text x="110" y="248" font-size="18" text-anchor="middle" fill="#334155">latura a</text>
<text x="270" y="150" font-size="34" text-anchor="middle" fill="#334155" font-weight="bold">→</text>
<rect x="330" y="90" width="160" height="100" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="490" y="90" width="60" height="100" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<text x="410" y="145" font-size="18" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a · (a − b)</text>
<text x="520" y="145" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">b·(a−b)</text>
<text x="440" y="75" font-size="18" text-anchor="middle" fill="#334155">baza a + b</text>
<text x="440" y="220" font-size="18" text-anchor="middle" fill="#334155">înălțimea a − b</text>
</svg>`
        },
        {
          label: "🇨🇳 Crucea (cross multiplication)",
          html: `<p>În China se folosește de secole <b>înmulțirea în cruce</b> (十字相乘) pentru trinom. Scrii cele două numere m și n într-un „X” și verifici două lucruri:</p>
<ul>
<li><b>pe verticală</b> (produsul m·n) trebuie să obții termenul liber;</li>
<li><b>pe diagonală</b> (suma m + n) trebuie să obții coeficientul lui x.</li>
</ul>
<p>Pentru x² − 5x + 6: produsul 6, suma −5. Încerci (−1, −6): suma −7 ✗. Încerci (−2, −3): suma −5 ✔. Deci (x − 2)(x − 3). În Statele Unite același joc se numește <i>diamond problem</i>. Aceeași idee, nume diferite: căutarea a două numere cu produs dat și sumă dată.</p>`
        },
        {
          label: "🔢 Ca numerele prime",
          html: `<p>84 = 2 · 2 · 3 · 7 se obține împărțind la numere prime cât se poate. Polinoamele se comportă la fel: „cărămizile” sunt polinoamele ireductibile.</p>
<p>x² − 1 = (x − 1)(x + 1) este ca 15 = 3 · 5. Și așa cum 15 se poate scrie într-un singur mod ca produs de numere prime (abstracție făcând de ordine), și un polinom are o <b>descompunere unică</b> în factori ireductibili. Scoaterea factorului comun corespunde căutării c.m.m.d.c., descompunerea completă corespunde descompunerii în factori primi: aceeași structură, într-o altă lume.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta descompunerii în factori",
      nodes: [
        { id: "scomp", label: "Descompunere în factori", x: 50, y: 6, color: "#6366f1", html: "A scrie un polinom ca produs de factori ireductibili.", why: "Servește pentru că un produs se anulează doar dacă un factor este zero: așa se rezolvă ecuațiile și se simplifică fracțiile algebrice." },
        { id: "distrib", label: "Distributivitate", x: 15, y: 30, color: "#64748b", html: "a(b + c) = ab + ac.", why: "Este axioma din care pornește totul: citită de la dreapta la stânga este factorul comun. Orice descompunere este o înmulțire citită invers." },
        { id: "racc", label: "Factor comun", x: 15, y: 55, color: "#16a34a", html: "Se extrage c.m.m.d.c. al termenilor.", why: "Extinde la calculul literal ideea de c.m.m.d.c. dintre numere: se extrage ceea ce este comun tuturor termenilor." },
        { id: "notevoli", label: "Formule de calcul prescurtat", x: 50, y: 32, color: "#f59e0b", html: "Pătratul unui binom, diferența de pătrate, cuburi.", why: "Sunt identități care se obțin înmulțind. Încă Euclid (Elementele, cartea a II-a) demonstra cu arii și dreptunghiuri pătratul unei sume." },
        { id: "trin", label: "Trinom special", x: 50, y: 58, color: "#a855f7", html: "x² + sx + p = (x + m)(x + n).", why: "Provine din dezvoltarea (x + m)(x + n) = x² + (m + n)x + mn: relațiile dintre suma și produsul rădăcinilor." },
        { id: "ruff", label: "Teorema lui Ruffini", x: 85, y: 40, color: "#ef4444", html: "P(a) = 0 ⟺ (x − a) divide P(x).", why: "Dacă împarți P(x) la (x − a) obții un cât Q și un rest constant R: P(x) = (x − a)Q(x) + R. Punând x = a se obține P(a) = R, deci restul este zero exact când P(a) = 0." },
        { id: "irr", label: "Factori ireductibili", x: 50, y: 88, color: "#0ea5e9", html: "Factori care nu mai pot fi descompuși.", why: "Sunt „numerele prime” ale polinoamelor: ca la numere, descompunerea completă este unică, abstracție făcând de ordine." },
        { id: "uso", label: "Ecuații și fracții", x: 85, y: 78, color: "#14b8a6", html: "Aplicații: rezolvarea ecuațiilor, simplificarea fracțiilor algebrice.", why: "La fracții se simplifică doar factorii, nu termenii: de aceea trebuie să descompunem mai întâi." }
      ],
      edges: [
        ["distrib", "racc", "citită invers"],
        ["notevoli", "scomp", "se recunosc"],
        ["racc", "scomp", "prima încercare"],
        ["trin", "scomp", "pentru trinoame"],
        ["ruff", "scomp", "grad ≥ 3"],
        ["scomp", "irr", "până la"],
        ["irr", "uso", "servește la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: trinom și Ruffini",
      questions: [
        { type: "num", q: "x² − 7x + 10 = (x − 2)(x − k). Cât este k?", answer: 5, explain: "Sunt necesare două numere cu suma −7 și produsul 10: −2 și −5." },
        { type: "num", q: "Fie P(x) = x³ − 7x + 6. Cât este P(1)?", answer: 0, explain: "1 − 7 + 6 = 0: deci (x − 1) divide P(x)." },
        { type: "mc", q: "Care dintre aceste polinoame este divizibil cu (x − 2)?", options: ["x³ − 8", "x³ + 8", "x² + 4"], answer: 0, explain: "Pentru x = 2: 2³ − 8 = 0. Într-adevăr, x³ − 8 = (x − 2)(x² + 2x + 4)." }
      ]
    }
  ],
  glossary: [
    { t: "Descompunere în factori", d: "Scrierea unui polinom ca produs de factori de grad mai mic." },
    { t: "Factor", d: "Fiecare dintre polinoamele care se înmulțesc într-un produs." },
    { t: "Polinom ireductibil", d: "Polinom care nu se poate scrie ca produs de polinoame de grad mai mic." },
    { t: "Factor comun total", d: "Extragerea celui mai mare divizor comun din toți termenii." },
    { t: "Factor comun parțial (grupare)", d: "Scoaterea factorului comun pe grupe de termeni, urmată de scoaterea unui factor comun." },
    { t: "Diferență de pătrate", d: "A² − B² = (A + B)(A − B)." },
    { t: "Trinom special", d: "Trinomul x² + sx + p, descompus în (x + m)(x + n) cu m + n = s și m·n = p." },
    { t: "Teorema lui Ruffini", d: "P(x) este divizibil cu (x − a) dacă și numai dacă P(a) = 0." },
    { t: "Rădăcină", d: "Valoarea variabilei care anulează polinomul." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este factorul comun total al lui 4x²y − 6xy²?", options: ["2xy(2x − 3y)", "4xy(x − y)", "2x²y²(2 − 3)"], answer: 0, explain: "C.m.m.d.c. al coeficienților 4 și 6 este 2; literele comune cu exponent minim sunt x și y. 4x²y : 2xy = 2x; 6xy² : 2xy = 3y." },
      { type: "mc", q: "Descompunerea lui 9x² + 12x + 4 este…", options: ["(3x + 2)²", "(9x + 4)²", "(3x + 4)(3x + 1)"], answer: 0, explain: "(3x)² + 2·3x·2 + 2² = (3x + 2)²." },
      { type: "num", q: "x² − 3x − 10 = (x + 2)(x − k). Află k.", answer: 5, explain: "Suma −3, produsul −10: numerele sunt +2 și −5." },
      { type: "num", q: "Calculează mental 98 × 102 folosind diferența de pătrate.", answer: 9996, explain: "(100 − 2)(100 + 2) = 100² − 2² = 10 000 − 4 = 9 996." },
      { type: "tf", q: "Dacă P(3) = 0, atunci (x − 3) este un factor al lui P(x).", answer: true, explain: "Este teorema lui Ruffini." },
      { type: "order", q: "Pune în ordine strategia de descompunere.", items: ["Factor comun total", "Recunoașterea formulelor de calcul prescurtat sau a trinomului special", "Grupare sau Ruffini", "Controlul că factorii sunt ireductibili", "Verificarea prin înmulțire"], explain: "Se pornește întotdeauna de la factorul comun total și se încheie cu verificarea." },
      { type: "text", q: "Care matematician italian dă numele unei reguli pentru împărțirea unui polinom la x − a?", answer: ["ruffini", "paolo ruffini"], explain: "Paolo Ruffini (1765–1822)." },
      { type: "num", q: "Descompune 2x³ − 8x = 2x(x − 2)(x + 2) și calculează valoarea pentru x = 3.", answer: 30, explain: "2·3·1·5 = 30. Direct: 2·27 − 24 = 30." },
      { type: "mc", q: "Descompunerea completă a lui x⁴ − 1 este…", options: ["(x² + 1)(x + 1)(x − 1)", "(x² − 1)²", "(x + 1)⁴"], answer: 0, explain: "x⁴ − 1 = (x² + 1)(x² − 1) = (x² + 1)(x + 1)(x − 1); x² + 1 este ireductibil." },
      { type: "mc", q: "De ce este utilă descompunerea pentru simplificarea fracțiilor algebrice?", options: ["Pentru că se pot simplifica doar factorii, nu termenii unei sume", "Pentru că face polinoamele mai lungi", "Pentru că elimină literele"], answer: 0, explain: "Se simplifică doar factorii comuni ai numărătorului și ai numitorului." }
    ]
  }
});
