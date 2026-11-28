TOPIC('ro', {
  id: "l1-mat-monomi-polinomi",
  title: "Monoame și polinoame",
  intro: "Cât este aria unei grădini pătrate cu latura <i>a</i>, dacă prelungim fiecare latură cu <i>b</i> metri? Și dacă vrem să scriem asta o singură dată, pentru orice a și b? <b>Calculul literal</b> permite folosirea literelor în locul numerelor pentru a scrie reguli generale. Învățăm „alfabetul” lui (<b>monoamele</b>), „cuvintele” lui (<b>polinoamele</b>) și câteva „formule magice” care economisesc ore de calcule: <b>formulele de calcul prescurtat</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "De ce folosim litere",
      html: `<p>O <b>expresie literală</b> conține numere, litere și operații. Literele indică numere oarecare (variabile) și permit enunțarea unei reguli valabile pentru o infinitate de cazuri. De exemplu:</p>
<ul>
<li>perimetrul unui dreptunghi cu baza b și înălțimea h este 2b + 2h, pentru <i>orice</i> dreptunghi;</li>
<li>un număr par oarecare se scrie 2n, unul impar 2n + 1 (n ∈ ℤ), iar trei numere consecutive sunt n, n + 1, n + 2.</li>
</ul>
<p><b>Valoarea numerică</b> a unei expresii se află înlocuind literele cu numere: pentru 3a − 2b cu a = 4 și b = −1 se obține 3·4 − 2·(−1) = 14.</p>
<p>Literele respectă aceleași proprietăți ca numerele (comutativitate, asociativitate, distributivitate); de aceea calculul literal nu are „reguli noi”, ci este o <b>extindere</b> a aritmeticii. Matematicianul francez François Viète (1540-1603) a introdus folosirea sistematică a literelor, iar Descartes a stabilit convenția modernă: primele litere (a, b, c…) pentru valorile cunoscute, ultimele (x, y, z) pentru necunoscute.</p>`
    },
    {
      type: "text",
      title: "Monoamele",
      html: `<p>Un <b>monom</b> este o expresie literală în care apar numai <b>înmulțiri</b> (și puteri cu exponent natural) între numere și litere. Exemple: 5a²b, −x, 3/4 xy³, 7. Nu sunt monoame: a + b (sumă), 1/x (literă la numitor), √x.</p>
<p>Într-un monom în <b>formă normală</b> (redusă) distingem:</p>
<ul>
<li><b>coeficientul</b>: factorul numeric (în monomul −3x²y este −3; în xy este 1);</li>
<li><b>partea literală</b>: literele cu exponenții lor (x²y);</li>
<li><b>gradul total</b>: suma exponenților (x²y are gradul 3);</li>
<li><b>gradul în raport cu o literă</b>: exponentul acelei litere (x²y are gradul 2 în raport cu x și 1 în raport cu y).</li>
</ul>
<p>Două monoame sunt <b>asemenea</b> dacă au <b>aceeași parte literală</b> (coeficienți oarecare): 3x²y, −5x²y și (1/2)yx² sunt asemenea. Sunt <b>opuse</b> dacă sunt asemenea cu coeficienți opuși (4ab și −4ab). Un monom cu coeficientul 0 este monomul nul (grad nedefinit); un număr nenul este un monom de grad 0.</p>
<p><b>Operații</b>:</p>
<ul>
<li><b>Suma algebrică</b>: <i>numai</i> între monoame asemenea: se adună coeficienții și se păstrează neschimbată partea literală. 5x²y − 8x²y + x²y = −2x²y. Monoamele care nu sunt asemenea rămân sumă indicată (3x + 2y nu se reduce).</li>
<li><b>Produsul</b>: se înmulțesc coeficienții și se adună exponenții acelorași litere: (3a²b)·(−2ab³) = −6a³b⁴.</li>
<li><b>Puterea</b>: (−2x²y)³ = (−2)³·x⁶·y³ = −8x⁶y³.</li>
<li><b>Câtul</b>: se împart coeficienții și se scad exponenții: 12a⁵b² : (−4a²b) = −3a³b. Rezultatul este un monom numai dacă fiecare literă a împărțitorului apare în deîmpărțit cu exponent cel puțin egal (altfel împărțirea dă o fracție algebrică).</li>
<li><b>C.m.m.d.c. și c.m.m.m.c.</b>: c.m.m.d.c. are literele <i>comune</i> cu exponentul <i>mai mic</i> și c.m.m.d.c. al coeficienților; c.m.m.m.c. are toate literele cu exponentul <i>mai mare</i> și c.m.m.m.c. al coeficienților. Pentru 12a³b și 18a²b²: c.m.m.d.c. = 6a²b, c.m.m.m.c. = 36a³b².</li>
</ul>`
    },
    {
      type: "widget",
      title: "Asemenea sau nu?",
      widget: "classify",
      options: { groups: ["Asemenea cu 3x²y", "Nu este asemenea cu 3x²y"], items: [
        ["−5x²y", 0], ["x²y", 0], ["7yx²", 0], ["(2/3)x²y", 0],
        ["3xy²", 1], ["3x²", 1], ["2x²y²", 1], ["3x + y", 1], ["4xy", 1]
      ] },
      caption: "Contează literele și exponenții lor, nu coeficienții și nici ordinea literelor (7yx² = 7x²y)."
    },
    {
      type: "example",
      title: "Exemplu: reducerea unei expresii cu monoame",
      html: `<p>Simplifică: <b>2a²b · (−3ab²) − 5a³b³ + (4a⁶b⁶) : (2a³b³)</b></p>
<ol>
<li>Primul produs: 2·(−3) = −6; a²·a = a³; b·b² = b³ → −6a³b³.</li>
<li>Câtul: 4 : 2 = 2; a⁶ : a³ = a³; b⁶ : b³ = b³ → 2a³b³.</li>
<li>Suma monoamelor asemenea (toate a³b³): −6 − 5 + 2 = −9 → <b>−9a³b³</b>.</li>
</ol>
<p>Verificare cu a = 1, b = 1: 2·(−3) − 5 + 4/2 = −6 − 5 + 2 = −9 ✔. Înlocuirea cu valori simple este o metodă rapidă de a verifica un rezultat (nu îl demonstrează complet, dar descoperă multe greșeli).</p>`
    },
    {
      type: "text",
      title: "Polinoamele",
      html: `<p>Un <b>polinom</b> este o <b>sumă algebrică de monoame</b>. Monoamele care îl compun se numesc <b>termeni</b>. Un polinom cu doi termeni se numește <b>binom</b>, cu trei <b>trinom</b>. De exemplu 3x²y − 5xy + 7 este un trinom.</p>
<p>Polinomul este în <b>formă normală</b> (redusă) când nu conține monoame asemenea (care trebuie adunate) și nici operații de efectuat. Se definesc:</p>
<ul>
<li><b>gradul polinomului</b>: maximul gradelor termenilor săi (3x²y − 5xy + 7 are gradul 3);</li>
<li><b>gradul în raport cu o literă</b>: cel mai mare exponent al acelei litere (în x²y: gradul 2 în x);</li>
<li><b>ordonat</b> după puterile descrescătoare (sau crescătoare) ale unei litere;</li>
<li><b>complet</b> în raport cu o literă, dacă apar toate puterile de la 0 până la grad (x³ − 2x² + x − 5 este complet; x³ + 4 nu este);</li>
<li><b>omogen</b>, dacă toți termenii au același grad (a² + 3ab − b² este omogen de gradul 2);</li>
<li><b>termen liber</b>: termenul de grad 0, fără litere.</li>
</ul>
<p>Două polinoame sunt <b>egale</b> dacă, aduse la forma normală, au aceiași termeni. Un polinom se numește <b>identic nul</b> dacă, redus, este 0.</p>
<p>Într-un polinom cu o variabilă, P(x) = aₙxⁿ + … + a₁x + a₀, <b>valoarea numerică</b> P(k) se calculează înlocuind x = k. Dacă P(k) = 0, k este un <b>zero</b> (o rădăcină) al polinomului, adică o soluție a ecuației P(x) = 0: este punctul de legătură cu ecuațiile.</p>`
    },
    {
      type: "text",
      title: "Operații cu polinoame",
      html: `<p><b>Suma și diferența</b>: se elimină parantezele (schimbând semnele dacă în față este un minus) și se reduc termenii asemenea.</p>
<p>(3x² − 2x + 1) − (x² − 5x − 4) = 3x² − 2x + 1 − x² + 5x + 4 = <b>2x² + 3x + 5</b>.</p>
<p><b>Produsul unui monom cu un polinom</b> (distributivitate): 2x · (3x² − x + 4) = 6x³ − 2x² + 8x.</p>
<p><b>Produsul a două polinoame</b>: se înmulțește <b>fiecare termen al primului cu fiecare termen al celui de-al doilea</b>, apoi se reduc termenii asemenea.</p>
<p>(x + 3)(2x − 5) = 2x² − 5x + 6x − 15 = <b>2x² + x − 15</b>.</p>
<p>Gradul produsului este <b>suma</b> gradelor (cu coeficienți nenuli): 1 + 1 = 2. Numărul de produse parțiale este produsul numărului de termeni: 2 × 2 = 4.</p>
<p><b>Câtul dintre un polinom și un monom</b>: se împarte fiecare termen: (6x³ − 9x² + 3x) : (3x) = 2x² − 3x + 1.</p>
<p><b>Împărțirea a două polinoame</b> este mai complexă: date A(x) (deîmpărțit) și B(x) (împărțitor, nenul), există două polinoame Q(x) (cât) și R(x) (rest), cu gradul lui R mai mic decât gradul lui B, astfel încât <b>A = B · Q + R</b>. Dacă R = 0, polinomul este <b>divizibil</b>. Procedeul (analog împărțirii în coloană a numerelor) și regula lui Ruffini vor fi văzute în lecția despre descompunerea în factori.</p>`
    },
    {
      type: "example",
      title: "Exemplu: aria unei grădini care se mărește",
      html: `<p>O grădină dreptunghiulară are laturile x și x + 4 metri. Mărești fiecare latură cu 2 m. Cu cât crește aria?</p>
<ol>
<li>Aria inițială: x(x + 4) = x² + 4x.</li>
<li>Laturile noi: (x + 2) și (x + 6). Aria: (x + 2)(x + 6) = x² + 6x + 2x + 12 = x² + 8x + 12.</li>
<li>Creșterea: (x² + 8x + 12) − (x² + 4x) = <b>4x + 12</b> m².</li>
</ol>
<p>Pentru x = 10 m: grădina inițială 10 × 14 = 140 m²; cea nouă 12 × 16 = 192 m²; creșterea 52 m². Verificare: 4·10 + 12 = 52 ✔. O singură formulă descrie toate grădinile posibile: aceasta este forța calculului literal.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: monoame și polinoame",
      questions: [
        { type: "mc", q: "Care este gradul total al monomului −7a²b³c?", options: ["3", "6", "7"], answer: 1, explain: "Se adună exponenții: 2 + 3 + 1 = 6." },
        { type: "num", q: "Calculează coeficientul monomului (−2x²y)·(3xy³) · (1/6).", answer: -1, explain: "(−2)·3·(1/6) = −1: monomul este −x³y⁴." },
        { type: "num", q: "Polinomul 5x³ − 2x + x⁴ − 7 are gradul…", answer: 4, explain: "Termenul de grad maxim este x⁴." },
        { type: "num", q: "Câți termeni are produsul neredus (a + b + c)(x + y), înainte de reducerea termenilor asemenea?", answer: 6, explain: "Fiecare termen al primului (3) cu fiecare termen al celui de-al doilea (2): 3 × 2 = 6." }
      ]
    },
    {
      type: "svg",
      title: "(a + b)² nu este a² + b²",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="170" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="230" y="30" width="70" height="170" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="60" y="200" width="170" height="70" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="230" y="200" width="70" height="70" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="145" y="122" font-size="26" text-anchor="middle" fill="#1e3a8a" font-weight="bold">a²</text>
<text x="265" y="122" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="145" y="242" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="265" y="242" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">b²</text>
<text x="145" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="265" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="40" y="120" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="40" y="240" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="330" y="100" font-size="20" fill="#1f2937" font-weight="bold">(a + b)² = a² + 2ab + b²</text>
<text x="330" y="140" font-size="17" fill="#475569">Pătratul mare se împarte în:</text>
<text x="330" y="168" font-size="17" fill="#1d4ed8">un pătrat de latură a (a²),</text>
<text x="330" y="194" font-size="17" fill="#15803d">un pătrat de latură b (b²),</text>
<text x="330" y="220" font-size="17" fill="#b45309">și două dreptunghiuri a × b (2ab).</text>
</svg>`,
      caption: "„Dublul produsului” 2ab este chiar aria celor două dreptunghiuri rămase: să-l uiți este cea mai frecventă greșeală."
    },
    {
      type: "text",
      title: "Formulele de calcul prescurtat",
      html: `<p>Unele produse de polinoame apar atât de des, încât merită să ținem minte rezultatul:</p>
<table>
<tr><th>Nume</th><th>Formula</th></tr>
<tr><td><b>Pătratul unui binom</b></td><td>(a + b)² = a² + 2ab + b² &nbsp;&nbsp; (a − b)² = a² − 2ab + b²</td></tr>
<tr><td><b>Suma înmulțită cu diferența</b></td><td>(a + b)(a − b) = a² − b²</td></tr>
<tr><td><b>Pătratul unui trinom</b></td><td>(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc</td></tr>
<tr><td><b>Cubul unui binom</b></td><td>(a + b)³ = a³ + 3a²b + 3ab² + b³ &nbsp;&nbsp; (a − b)³ = a³ − 3a²b + 3ab² − b³</td></tr>
<tr><td><b>Suma și diferența de cuburi (de descompus)</b></td><td>(a + b)(a² − ab + b²) = a³ + b³ &nbsp;&nbsp; (a − b)(a² + ab + b²) = a³ − b³</td></tr>
</table>
<p>Pătratul unui binom se ține minte cu fraza: „pătratul primului, plus dublul produsului, plus pătratul celui de-al doilea”. Semnul dublului produs este cel al binomului; ceilalți doi termeni sunt întotdeauna pozitivi.</p>
<p>Exemple:</p>
<ul>
<li>(2x + 3y)² = 4x² + 12xy + 9y²;</li>
<li>(5a − 1)² = 25a² − 10a + 1;</li>
<li>(3x + 2)(3x − 2) = 9x² − 4;</li>
<li>(x − 2)³ = x³ − 6x² + 12x − 8.</li>
</ul>
<p><b>Pentru calculul mental</b>: 51² = (50 + 1)² = 2500 + 100 + 1 = 2601; 49 · 51 = (50 − 1)(50 + 1) = 2500 − 1 = 2499; 99² = (100 − 1)² = 10 000 − 200 + 1 = 9801.</p>
<p><b>Coeficienții puterilor unui binom</b>: (a + b)ⁿ are ca coeficienți linia n din <b>triunghiul lui Pascal</b> (numit în Italia al lui Tartaglia; în China al lui Yang Hui): fiecare număr este suma celor două de deasupra lui.</p>
<p style="text-align:center;font-family:monospace;line-height:1.6">1<br>1&nbsp;&nbsp;1<br>1&nbsp;&nbsp;2&nbsp;&nbsp;1<br>1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1<br>1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1<br>1&nbsp;&nbsp;5&nbsp;&nbsp;10&nbsp;&nbsp;10&nbsp;&nbsp;5&nbsp;&nbsp;1</p>
<p>Deci (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴ și (a + b)⁵ = a⁵ + 5a⁴b + 10a³b² + 10a²b³ + 5ab⁴ + b⁵.</p>`
    },
    {
      type: "example",
      title: "Exemplu: de la o greșeală la o demonstrație",
      html: `<p>O greșeală clasică: (x + 3)² = x² + 9. Pentru x = 2 ar da 4 + 9 = 13, dar (2 + 3)² = 25. Același calcul cu formula corectă: x² + 6x + 9 = 4 + 12 + 9 = 25 ✔.</p>
<p>Calculul literal servește și la <b>demonstrații</b>. De exemplu: diferența pătratelor a două numere consecutive n și n + 1 este întotdeauna impară.</p>
<ol>
<li>(n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1.</li>
<li>2n + 1 este, prin definiție, un număr impar. ∎</li>
</ol>
<p>Verificare: 5² − 4² = 25 − 16 = 9, care este impar. Dar acum știm că se întâmplă pentru <i>toate</i> numerele consecutive, nu doar pentru cele încercate.</p>`
    },
    {
      type: "curiosity",
      title: "Al-Khwarizmi și „completarea pătratului”",
      html: `<p>Matematicianul persan Muhammad ibn Musa al-Khwarizmi (circa 780-850), care lucra la Casa Înțelepciunii din Bagdad, a scris în jurul anului 820 tratatul <i>al-Kitab al-mukhtasar fi hisab al-jabr wa-l-muqabala</i> („Cartea scurtă despre calculul prin completare și echilibrare”). Din cuvântul <i>al-jabr</i> provine cuvântul <b>algebră</b>, iar din numele său cuvântul <b>algoritm</b>. Al-Khwarizmi rezolva ecuațiile de gradul al doilea cu figuri geometrice, adăugând un pătrățel lipsă pentru a „completa” un pătrat: era exact pătratul binomului (a + b)² = a² + 2ab + b² citit geometric. Și Euclid, în Cartea a II-a din <i>Elementele</i> (circa 300 î.Hr.), demonstrează cu figuri identitatea pătratului unui binom.</p>`
    },
    {
      type: "curiosity",
      title: "De ce „monom” și „polinom”?",
      html: `<p>Cuvintele vin din greacă: <i>monos</i> (unul singur), <i>polys</i> (mulți) și din latină <i>nomen</i> (nume, termen). Deci „monom” = „un singur termen”, „polinom” = „mulți termeni”, „binom” = „doi termeni”. Termenul <i>polinom</i> s-a răspândit în Europa secolului al XVI-lea, în perioada în care matematicieni italieni ca Cardano, Tartaglia și Ferrari au descoperit formulele de rezolvare a ecuațiilor de gradul al treilea și al patrulea. O întrecere între Tartaglia și Antonio Maria Fior din 1535, pe tema ecuațiilor de gradul al treilea, este una dintre cele mai celebre provocări matematice din istorie.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înmulți polinoame",
      intro: "Să înmulțești fiecare termen cu fiecare termen e ușor de spus, dar ușor de greșit. Iată metode alternative, folosite în alte țări.",
      tabs: [
        {
          label: "🔲 Metoda tabelului (box)",
          html: `<p>Mulți profesori din țările anglo-saxone folosesc <b>tabelul ariilor</b>: scrii termenii unui polinom pe rânduri, pe ai celuilalt pe coloane și completezi fiecare celulă cu produsul. Apoi aduni celulele asemenea.</p>
<p>(x + 3)(2x − 5):</p>
<table>
<tr><th></th><th>2x</th><th>−5</th></tr>
<tr><th>x</th><td>2x²</td><td>−5x</td></tr>
<tr><th>+3</th><td>6x</td><td>−15</td></tr>
</table>
<p>Suma: 2x² + (−5x + 6x) − 15 = <b>2x² + x − 15</b>. Metoda evită omiterea unor produse și arată clar de ce produsele parțiale sunt tot atâtea câte rânduri × coloane.</p>`
        },
        {
          label: "📐 Pătratul desenat",
          html: `<p>Desenează un pătrat cu latura a + b și împarte-l ca în figură: aria totală (a + b)² este suma celor patru regiuni a², ab, ab, b². Această demonstrație geometrică era cunoscută deja de Euclid. Cu widgetul de mai jos construiești un pătrat 5 × 5: este (3 + 2)² și se împarte în 3² + 3·2 + 2·3 + 2² = 9 + 6 + 6 + 4 = 25 de pătrățele.</p>`,
          widget: "areaGrid",
          options: { w: 5, h: 5, max: 12 }
        },
        {
          label: "🧊 Cubul unui binom",
          html: `<p>(a + b)³ este volumul unui cub cu latura a + b. Cu a = 3 și b = 2, cubul cu latura 5 conține 125 de cubulețe, care se împart astfel: un cub mare a³ = 27, trei plăci a²b (3·9·2 = 54), trei bare ab² (3·3·4 = 36) și un cubuleț b³ = 8. Total: 27 + 54 + 36 + 8 = 125 ✔. Rotește modelul 3D și numără cubulețele.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 5, b: 5, c: 5 }
        },
        {
          label: "🔢 Cu numere (descompune și înmulțește)",
          html: `<p>Produsul de polinoame este o extindere a înmulțirii în coloană. Gândește-te la 23 × 14: este (2·10 + 3)(1·10 + 4). Produsul (2x + 3)(x + 4) cu x = 10 dă exact același calcul: 2x² + 11x + 12 → 200 + 110 + 12 = 322. Polinomul este ca un „număr în baza x”, iar a înmulți polinoame este ca a înmulți în coloană, fără reportări.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta calculului literal",
      nodes: [
        { id: "letterale", label: "Calcul literal", x: 50, y: 6, color: "#64748b", html: "Folosirea literelor în locul numerelor.", why: "Viète (1591) a introdus literele pentru a indica numere oarecare, trecând de la algebra cazurilor particulare la cea a regulilor generale. Descartes (1637) a fixat convenția modernă." },
        { id: "monomio", label: "Monom", x: 20, y: 28, color: "#2563eb", html: "Coeficient × parte literală; grad = suma exponenților.", why: "Este „atomul” calculului literal. Pentru a aduna este nevoie de asemănare (aceeași parte literală), pentru că literele reprezintă numere diferite și nu pot fi „amestecate”." },
        { id: "polinomio", label: "Polinom", x: 80, y: 28, color: "#16a34a", html: "Sumă algebrică de monoame.", why: "Funcții precum ariile și volumele sunt polinoame în măsurile laturilor. Mai târziu va fi modalitatea de a aproxima orice funcție (polinoamele Taylor)." },
        { id: "proprieta", label: "Proprietățile operațiilor", x: 50, y: 50, color: "#f59e0b", html: "Comutativitate, asociativitate, distributivitate.", why: "Sunt aceleași ca în ℤ și ℚ: orice formulă literală este valabilă pentru că este valabilă pentru numere. De aceea (a + b)² poate fi întotdeauna dezvoltat ca (a + b)(a + b)." },
        { id: "prodotto", label: "Produsul polinoamelor", x: 18, y: 68, color: "#9333ea", html: "Fiecare termen cu fiecare termen.", why: "Este distributivitatea aplicată de două ori: (a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd." },
        { id: "notevoli", label: "Formule de calcul prescurtat", x: 55, y: 80, color: "#ef4444", html: "Pătratul binomului, suma înmulțită cu diferența, cubul.", why: "Se demonstrează cu distributivitatea și se citesc cu figuri geometrice (Euclid, Cartea a II-a; al-Khwarizmi). Servesc la simplificarea calculelor și la descompunerea în factori." },
        { id: "tartaglia", label: "Triunghiul lui Pascal (Tartaglia)", x: 85, y: 62, color: "#0ea5e9", html: "Coeficienții lui (a + b)ⁿ.", why: "Fiecare coeficient numără în câte moduri se alege a sau b din fiecare paranteză: este un coeficient binomial, iar fiecare număr este suma celor două de deasupra pentru că (a + b)ⁿ = (a + b)(a + b)ⁿ⁻¹." },
        { id: "applicazioni", label: "Demonstrații și probleme", x: 82, y: 92, color: "#22c55e", html: "Adevăruri generale, arii, volume, ecuații.", why: "Cu litere se demonstrează că o afirmație este valabilă pentru toate numerele. Este pasul care separă matematica de aritmetică." }
      ],
      edges: [["letterale", "monomio", "cărămizi"], ["letterale", "polinomio", "alcătuite din"], ["monomio", "polinomio", "sumă de"], ["proprieta", "prodotto", "garantează"], ["polinomio", "prodotto", "operație"], ["prodotto", "notevoli", "cazuri frecvente"], ["notevoli", "tartaglia", "generalizate de"], ["notevoli", "applicazioni", "folosite în"]]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Monom = număr × litere. Se <b>adună</b> numai monoamele asemenea; la <b>produs</b> se <b>adună</b> exponenții, la <b>cât</b> se <b>scad</b>.</li>
<li>Gradul polinomului = gradul maxim al termenilor săi; gradul produsului = suma gradelor.</li>
<li>(a ± b)² = a² ± 2ab + b² — <b>nu</b> a² ± b².</li>
<li>(a + b)(a − b) = a² − b² (diferența pătratelor).</li>
<li>(a ± b)³ = a³ ± 3a²b + 3ab² ± b³; coeficienții din triunghiul lui Pascal (Tartaglia).</li>
<li>Pentru a verifica un rezultat, înlocuiește literele cu valori simple.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: formule de calcul prescurtat",
      questions: [
        { type: "num", q: "Calculează cu o formulă de calcul prescurtat: 103 · 97.", answer: 9991, explain: "(100 + 3)(100 − 3) = 100² − 3² = 10 000 − 9 = 9991." },
        { type: "mc", q: "Care expresie este egală cu (x − 4)²?", options: ["x² − 16", "x² − 8x + 16", "x² + 8x + 16"], answer: 1, explain: "Pătratul primului, minus dublul produsului (2·x·4 = 8x), plus pătratul celui de-al doilea (16)." },
        { type: "mc", q: "Care este coeficientul lui a²b în dezvoltarea lui (a + b)³?", options: ["1", "3", "6"], answer: 1, explain: "(a + b)³ = a³ + 3a²b + 3ab² + b³: linia 1-3-3-1 din triunghiul lui Pascal." },
        { type: "tf", q: "(x + y)² este întotdeauna egal cu x² + y².", answer: false, explain: "Lipsește dublul produs 2xy: egalitatea este valabilă numai dacă xy = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Monom", d: "Expresie literală cu numai produse între numere și litere (cu exponenți naturali)." },
    { t: "Coeficient", d: "Partea numerică a unui monom." },
    { t: "Parte literală", d: "Mulțimea literelor cu exponenții lor dintr-un monom." },
    { t: "Monoame asemenea", d: "Monoame cu aceeași parte literală." },
    { t: "Gradul unui monom", d: "Suma exponenților literelor (gradul total)." },
    { t: "Polinom", d: "Sumă algebrică de monoame." },
    { t: "Formă normală", d: "Scrierea unui polinom fără termeni asemenea și fără operații de efectuat." },
    { t: "Polinom omogen", d: "Polinom ai cărui termeni au toți același grad." },
    { t: "Formulă de calcul prescurtat", d: "Produs de polinoame cu un rezultat de formă standard, ca (a + b)²." },
    { t: "Triunghiul lui Pascal (Tartaglia)", d: "Tabel al coeficienților binomiali; linia n dă coeficienții lui (a + b)ⁿ." },
    { t: "Zero (rădăcină) al unui polinom", d: "Valoarea k a variabilei pentru care P(k) = 0." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre următoarele nu este un monom?", options: ["−5x²y", "3/x", "(2/3)ab"], answer: 1, explain: "O literă la numitor nu este permisă în monoame: 3/x este o fracție algebrică." },
      { type: "num", q: "Care este gradul total al lui 4a³b²c?", answer: 6, explain: "3 + 2 + 1 = 6." },
      { type: "mc", q: "Redu: 7x²y − 3xy² + 2x²y − xy²", options: ["9x²y − 4xy²", "9x²y + 4xy²", "5x²y − 2xy²"], answer: 0, explain: "Asemenea: x²y: 7 + 2 = 9; xy²: −3 − 1 = −4." },
      { type: "mc", q: "Cât este (−2a²b)³?", options: ["−8a⁶b³", "−6a⁶b³", "8a⁵b³"], answer: 0, explain: "(−2)³ = −8; (a²)³ = a⁶; b³." },
      { type: "num", q: "Calculează valoarea numerică a lui 3x² − 2x + 1 pentru x = −2.", answer: 17, explain: "3·4 − 2·(−2) + 1 = 12 + 4 + 1 = 17." },
      { type: "mc", q: "Dezvoltă (x + 3)(x − 5).", options: ["x² − 2x − 15", "x² + 2x − 15", "x² − 15"], answer: 0, explain: "x² − 5x + 3x − 15 = x² − 2x − 15." },
      { type: "mc", q: "Dezvoltă (2a − 3b)².", options: ["4a² − 9b²", "4a² − 12ab + 9b²", "4a² + 12ab + 9b²"], answer: 1, explain: "(2a)² − 2·2a·3b + (3b)² = 4a² − 12ab + 9b²." },
      { type: "num", q: "Calculează cu o formulă de calcul prescurtat: 62². Dă rezultatul.", answer: 3844, explain: "(60 + 2)² = 3600 + 240 + 4 = 3844." },
      { type: "tf", q: "(a + b)(a − b) = a² − 2ab + b².", answer: false, explain: "Suma înmulțită cu diferența dă a² − b²: dublele produse se anulează." },
      { type: "order", q: "Pune în ordine pașii pentru a înmulți (x + 2)(3x − 1).", items: ["Înmulțim x cu 3x și cu −1", "Înmulțim 2 cu 3x și cu −1", "Scriem toate produsele: 3x² − x + 6x − 2", "Reducem termenii asemenea", "Rezultat: 3x² + 5x − 2"], explain: "Fiecare termen cu fiecare termen, apoi se adună cei asemenea: −x + 6x = 5x." },
      { type: "text", q: "Cum se numește triunghiul numeric (numit în Italia „al lui Tartaglia”) care dă coeficienții lui (a + b)ⁿ?", answer: ["triunghiul lui pascal", "triunghiul pascal", "pascal", "triunghiul lui tartaglia", "tartaglia", "triunghiul lui pascal (tartaglia)"], explain: "În România îl numim triunghiul lui Pascal; în Italia, triunghiul lui Tartaglia." }
    ]
  }
});
