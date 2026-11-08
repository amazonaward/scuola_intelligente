TOPIC('ro', {
  id: `m2-mat-radici`,
  title: `Rădăcina pătrată`,
  intro: `Dacă știi aria unui pătrat, cât este lungimea laturii lui? Pentru a răspunde, avem nevoie de operația inversă ridicării la pătrat: <b>rădăcina pătrată</b>. Vom descoperi <b>pătratele perfecte</b>, cum se calculează rădăcinile cu <b>descompunerea în factori primi</b>, cum se <b>aproximează</b> și de ce √2 a zdruncinat matematicienii din Antichitate.`,
  minutes: 50,
  sections: [
    {
      type: `text`,
      title: `Ce este rădăcina pătrată`,
      html: `<p><b>Rădăcina pătrată</b> a unui număr <i>a</i> este numărul care, <b>înmulțit cu el însuși</b> (adică ridicat la pătrat), dă <i>a</i>.</p>
<p style="font-size:1.2em;text-align:center"><b>√a = b</b> &nbsp;pentru că&nbsp; <b>b² = a</b></p>
<ul>
<li>√25 = 5 pentru că 5² = 25;</li>
<li>√81 = 9 pentru că 9² = 81;</li>
<li>√0 = 0, √1 = 1.</li>
</ul>
<p>Simbolul <b>√</b> se numește <b>radical</b>, iar numărul de sub simbol se numește <b>numărul de sub radical</b> (sau radicand). Extragerea rădăcinii este <b>operația inversă</b> a ridicării la pătrat, așa cum scăderea este a adunării.</p>
<p>În mulțimea numerelor pe care le cunoști, <b>nu există</b> rădăcina pătrată a unui număr negativ: niciun număr înmulțit cu el însuși nu dă un rezultat negativ (chiar și (−3)² = +9).</p>`
    },
    {
      type: `svg`,
      title: `Aria și latura pătratului`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<g stroke="#0c4a6e" stroke-width="2" fill="#38bdf8">
<rect x="40" y="40" width="44" height="44"/><rect x="84" y="40" width="44" height="44"/><rect x="128" y="40" width="44" height="44"/><rect x="172" y="40" width="44" height="44"/><rect x="216" y="40" width="44" height="44"/>
<rect x="40" y="84" width="44" height="44"/><rect x="84" y="84" width="44" height="44"/><rect x="128" y="84" width="44" height="44"/><rect x="172" y="84" width="44" height="44"/><rect x="216" y="84" width="44" height="44"/>
<rect x="40" y="128" width="44" height="44"/><rect x="84" y="128" width="44" height="44"/><rect x="128" y="128" width="44" height="44"/><rect x="172" y="128" width="44" height="44"/><rect x="216" y="128" width="44" height="44"/>
<rect x="40" y="172" width="44" height="44"/><rect x="84" y="172" width="44" height="44"/><rect x="128" y="172" width="44" height="44"/><rect x="172" y="172" width="44" height="44"/><rect x="216" y="172" width="44" height="44"/>
<rect x="40" y="216" width="44" height="44"/><rect x="84" y="216" width="44" height="44"/><rect x="128" y="216" width="44" height="44"/><rect x="172" y="216" width="44" height="44"/><rect x="216" y="216" width="44" height="44"/>
</g>
<text x="150" y="285" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">latura = 5</text>
<text x="300" y="80" font-size="22" fill="#0c4a6e" font-weight="bold">Aria = 25 pătrățele</text>
<text x="300" y="130" font-size="22" fill="#0369a1">5² = 25</text>
<text x="300" y="170" font-size="22" fill="#dc2626" font-weight="bold">√25 = 5</text>
<text x="300" y="215" font-size="16" fill="#334155">ridicarea la pătrat: de la latură la arie</text>
<text x="300" y="240" font-size="16" fill="#334155">rădăcina pătrată: de la arie la latură</text>
</svg>`,
      caption: `Cuvântul „pătrat” nu este întâmplător: 5² este chiar aria unui pătrat cu latura 5.`
    },
    {
      type: `text`,
      title: `Pătratele perfecte`,
      html: `<p>Un număr se numește <b>pătrat perfect</b> dacă este pătratul unui număr natural: rădăcina lui este un număr întreg.</p>
<table>
<tr><td>1²=1</td><td>2²=4</td><td>3²=9</td><td>4²=16</td><td>5²=25</td><td>6²=36</td><td>7²=49</td><td>8²=64</td></tr>
<tr><td>9²=81</td><td>10²=100</td><td>11²=121</td><td>12²=144</td><td>13²=169</td><td>14²=196</td><td>15²=225</td><td>20²=400</td></tr>
</table>
<p><b>Cum le recunoști</b>: descompune numărul în factori primi. Este pătrat perfect dacă <b>toți exponenții sunt pari</b>.</p>
<ul>
<li>144 = 2⁴ × 3² → exponenții 4 și 2, pari → <b>da</b>;</li>
<li>72 = 2³ × 3² → exponentul 3 este impar → <b>nu</b>.</li>
</ul>
<p>Truc rapid: un pătrat perfect <b>nu se termină niciodată</b> cu cifrele 2, 3, 7 sau 8.</p>`
    },
    {
      type: `widget`,
      title: `Construiește un pătrat`,
      widget: `areaGrid`,
      options: { w: 6, h: 6, max: 12 },
      caption: `Pune baza și înălțimea egale: aria este un pătrat perfect, iar latura este rădăcina lui. Încearcă 7 × 7, 9 × 9, 12 × 12.`
    },
    {
      type: `text`,
      title: `Calculăm rădăcina prin descompunere`,
      html: `<p>Pentru a calcula rădăcina pătrată a unui pătrat perfect:</p>
<ol>
<li><b>descompune</b> numărul în factori primi;</li>
<li><b>înjumătățește</b> toți exponenții;</li>
<li><b>înmulțește</b> factorii obținuți.</li>
</ol>
<p>Exemplu: √576 → 576 = 2⁶ × 3² → √576 = 2³ × 3¹ = 8 × 3 = <b>24</b>. Verificare: 24 × 24 = 576 ✓</p>
<p>Exemplu: √1225 → 1225 = 5² × 7² → √1225 = 5 × 7 = <b>35</b>.</p>
<p>De ce se înjumătățesc exponenții? Pentru că, ridicând la pătrat, exponenții se <b>dublează</b>: (2³ × 3)² = 2⁶ × 3². Rădăcina face invers.</p>`
    },
    {
      type: `text`,
      title: `Proprietățile rădăcinilor`,
      html: `<ul>
<li><b>Produs</b>: √(a × b) = √a × √b → √(4 × 9) = 2 × 3 = 6 (într-adevăr √36 = 6).</li>
<li><b>Cât</b>: √(a : b) = √a : √b → √(100/25) = 10/5 = 2.</li>
<li><b>Fracții</b>: √(9/16) = 3/4.</li>
<li><b>Atenție!</b> Rădăcina <b>nu</b> se distribuie față de sume și diferențe: √(9 + 16) = √25 = 5, dar √9 + √16 = 3 + 4 = 7. <b>Sunt diferite!</b></li>
</ul>`
    },
    {
      type: `quiz`,
      title: `Mini-test: pătrate perfecte și rădăcini exacte`,
      questions: [
        { type: `num`, q: `√144 = ?`, answer: 12, explain: `12 × 12 = 144.` },
        { type: `mc`, q: `Care număr este un pătrat perfect?`, options: [`48`, `196`, `250`], answer: 1, explain: `196 = 14² (= 2² × 7²).` },
        { type: `tf`, q: `√(16 + 9) = 4 + 3.`, answer: false, explain: `√25 = 5, în timp ce 4 + 3 = 7: rădăcina nu se distribuie față de sumă.` }
      ]
    },
    {
      type: `text`,
      title: `Rădăcini neexacte: aproximarea`,
      html: `<p>Cele mai multe numere <b>nu</b> sunt pătrate perfecte: √2, √10, √50… În aceste cazuri rădăcina este un număr <b>zecimal infinit neperiodic</b> (un număr <b>irațional</b>) și o putem doar <b>aproxima</b>.</p>
<p><b>Metoda încercărilor</b> (√50):</p>
<ol>
<li>Găsește pătratele perfecte apropiate: 49 = 7² și 64 = 8² → 7 &lt; √50 &lt; 8.</li>
<li>Încearcă cu zecimile: 7,0² = 49; 7,1² = 50,41 → prea mult! Deci √50 ≈ <b>7,0</b> prin lipsă, 7,1 prin adaos.</li>
<li>Încearcă cu sutimile: 7,07² = 49,98…; 7,08² = 50,12… → √50 ≈ <b>7,07</b> cu o eroare mai mică de o sutime.</li>
</ol>
<p>Astăzi se folosesc și <b>tabelele numerice</b> (din manualele școlare) și <b>calculatorul</b> (tasta √): √50 = 7,0710678…</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: gresia pătrată`,
      html: `<p>O pardoseală pătrată are aria de <b>20,25 m²</b>. Cât măsoară latura?</p>
<ol>
<li>Latura = √20,25.</li>
<li>Transform în fracție: 20,25 = 2025/100.</li>
<li>√2025 = 45 (pentru că 2025 = 3⁴ × 5² → 3² × 5 = 45) și √100 = 10.</li>
<li>Latura = 45/10 = <b>4,5 m</b>. Verificare: 4,5 × 4,5 = 20,25 ✓</li>
</ol>
<p>Perimetrul pardoselii este 4 × 4,5 = <b>18 m</b>: îl folosești ca să cumperi plinta!</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: ecranul televizorului`,
      html: `<p>Un televizor „de 50 de inci” are <b>diagonala</b> de 50″. Cu teorema lui Pitagora, diagonala se calculează cu o rădăcină: pentru un ecran lat de <b>40″</b> și înalt de <b>30″</b>:</p>
<p>diagonala = √(40² + 30²) = √(1600 + 900) = √2500 = <b>50″</b>.</p>
<p>Rădăcinile pătrate servesc de fiecare dată când se cunoaște o <b>arie</b> și se vrea o <b>lungime</b>: proiectarea camerelor, a terenurilor de sport, a ecranelor, a hărților.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Scandalul lui √2`,
      html: `<p><b>Pitagoreicii</b> (secolele VI–V î.Hr.) credeau că tot ce există se poate exprima prin rapoarte de numere întregi. Apoi au descoperit că <b>diagonala unui pătrat cu latura 1</b>, care măsoară √2, <b>nu este o fracție</b>! Potrivit unei legende, pitagoreicul <b>Hippasos din Metapont</b>, care a dezvăluit secretul, a murit într-un naufragiu, ca „pedeapsă a zeilor”. Astăzi știm că √2 = 1,41421356… continuă la infinit fără să se repete vreodată.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Simbolul √`,
      html: `<p>Simbolul <b>√</b> provine probabil dintr-un <b>„r” stilizat</b>, inițiala latinescului <i>radix</i> („rădăcină”). A apărut tipărit în <b>1525</b> în cartea germanului <b>Christoph Rudolff</b>; liniuța de deasupra numărului de sub radical a fost adăugată de <b>Descartes</b> în 1637. Iar tăblița babiloniană <b>YBC 7289</b> (circa 1800–1600 î.Hr.) arată un pătrat cu diagonala și valoarea lui √2 cu o eroare de mai puțin de o milionime!</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege rădăcina pătrată`,
      intro: `Rădăcina pătrată se poate vedea, construi și chiar „ghici”, așa cum făceau babilonienii.`,
      tabs: [
        {
          label: `🧊 Pătrat de cubulețe 3D`,
          html: `<p>Iată <b>49 de cubulețe</b> așezate într-un pătrat 7 × 7. Latura pătratului este rădăcina: √49 = 7. Mișcă cursoarele: reușești să faci un pătrat cu 50 de cubulețe? Nu! 50 nu este un pătrat perfect: rămâne mereu ceva în plus sau lipsește ceva.</p>`,
          scene: `blocks`,
          options: { mode: `array`, a: 7, b: 7 }
        },
        {
          label: `🏺 Metoda babiloniană`,
          html: `<p>Babilonienii (și apoi <b>Heron din Alexandria</b>, secolul I d.Hr.) calculau rădăcinile cu o metodă genială: „<b>ghicește și fă media</b>”.</p>
<p>Pentru √10: pornesc de la o încercare, 3.</p>
<ol>
<li>10 : 3 = 3,33. Rădăcina se află între 3 și 3,33 → media: (3 + 3,33) : 2 = <b>3,17</b>.</li>
<li>10 : 3,17 = 3,155. Media: (3,17 + 3,155) : 2 = <b>3,1625</b>.</li>
</ol>
<p>Deja la al doilea pas: 3,1625² = 10,0014. Valoarea adevărată este 3,16227…! Fiecare pas dublează aproximativ cifrele exacte. Calculatoarele folosesc metode asemănătoare.</p>`
        },
        {
          label: `🔢 Suma numerelor impare`,
          html: `<p>Uite ce minunăție: fiecare pătrat perfect este <b>suma primelor numere impare</b>!</p>
<ul>
<li>1 = 1 = 1²</li><li>1 + 3 = 4 = 2²</li><li>1 + 3 + 5 = 9 = 3²</li><li>1 + 3 + 5 + 7 = 16 = 4²</li>
</ul>
<p>Deci, ca să găsești √n, poți <b>scădea</b> din n numerele impare 1, 3, 5, 7… și număra câte scăderi sunt necesare ca să ajungi la 0. √25: 25−1−3−5−7−9 = 0 → <b>5</b> scăderi → √25 = 5. De ce se vede în desen: fiecare număr impar este un „L” care mărește pătratul.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="40" y="170" width="40" height="40" fill="#ef4444" stroke="#fff" stroke-width="2"/>
<rect x="80" y="170" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/><rect x="80" y="130" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/><rect x="40" y="130" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/>
<rect x="120" y="170" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="120" y="130" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="120" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="80" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="40" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/>
<rect x="160" y="170" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="130" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="90" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="120" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="80" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="40" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<text x="260" y="80" font-size="20" fill="#ef4444" font-weight="bold">1</text>
<text x="290" y="80" font-size="20" fill="#f97316" font-weight="bold">+ 3</text>
<text x="345" y="80" font-size="20" fill="#16a34a" font-weight="bold">+ 5</text>
<text x="400" y="80" font-size="20" fill="#2563eb" font-weight="bold">+ 7</text>
<text x="455" y="80" font-size="20" fill="#1f2937" font-weight="bold">= 16</text>
<text x="260" y="130" font-size="20" fill="#1f2937">4 „straturi” în formă de L</text>
<text x="260" y="170" font-size="22" fill="#1f2937" font-weight="bold">√16 = 4</text>
</svg>`
        },
        {
          label: `📐 Triunghiul lui Pitagora`,
          html: `<p>Rădăcinile pătrate apar de fiecare dată când folosești <b>teorema lui Pitagora</b>: ipotenuza este rădăcina sumei pătratelor catetelor. Mișcă cursoarele și observă: aria pătratului mare este un număr, latura este rădăcina lui.</p>`,
          widget: `pythagoras`,
          options: {}
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta rădăcinii pătrate`,
      nodes: [
        { id: `quad`, label: `Ridicarea la pătrat`, x: 50, y: 6, color: `#2563eb`, html: `b² = b × b.`, why: `Se numește „pătrat” pentru că b² este <b>aria unui pătrat</b> cu latura b: grecii gândeau numerele ca figuri geometrice (numere „pătrate”, „triunghiulare”…).` },
        { id: `radice`, label: `Rădăcina pătrată`, x: 50, y: 28, color: `#dc2626`, html: `√a = b dacă b² = a.`, why: `Este operația <b>inversă</b> a pătratului. Numele „rădăcină” vine din traducerea latină a arabului <i>jidhr</i> („rădăcina unei plante”), folosit de <b>al-Khwarizmi</b> în secolul al IX-lea: numărul din care „crește” pătratul.` },
        { id: `perfetti`, label: `Pătrate perfecte`, x: 18, y: 50, color: `#16a34a`, html: `1, 4, 9, 16, 25… rădăcină întreagă.`, why: `Sunt pătrate perfecte dacă în descompunere toți exponenții sunt pari, pentru că ridicarea la pătrat dublează fiecare exponent (proprietatea puterilor).` },
        { id: `scomp`, label: `Descompunere`, x: 18, y: 76, color: `#0d9488`, html: `Factori primi, exponenți înjumătățiți.`, why: `Se bazează pe <b>teorema fundamentală a aritmeticii</b> (deja la Euclid, Elementele, cartea a IX-a): orice număr se descompune într-un singur fel în factori primi.` },
        { id: `approx`, label: `Aproximare`, x: 50, y: 56, color: `#ea580c`, html: `Prin încercări, tabele, calculator.`, why: `Când rădăcina nu este întreagă, se caută între două pătrate perfecte consecutive și se restrânge intervalul cifră cu cifră. Metoda lui <b>Heron</b> (secolul I d.Hr.) o face mult mai repede.` },
        { id: `irraz`, label: `Numere iraționale`, x: 82, y: 50, color: `#7c3aed`, html: `√2, √3, √5…: zecimale infinite neperiodice.`, why: `Demonstrația că √2 nu este o fracție este atribuită <b>pitagoreicilor</b> și se găsește la Aristotel: dacă √2 = p/q ireductibilă, atunci p și q ar trebui să fie amândouă pare, ceea ce este imposibil.` },
        { id: `propr`, label: `Proprietăți`, x: 82, y: 76, color: `#ca8a04`, html: `√(a·b) = √a·√b; √(a/b) = √a/√b; NU față de sumă.`, why: `Derivă din proprietățile puterilor: (√a·√b)² = a·b. Pentru sumă nu funcționează pentru că (√a + √b)² = a + b + 2√a√b, există o bucată în plus.` },
        { id: `pitagora`, label: `Teorema lui Pitagora`, x: 50, y: 88, color: `#64748b`, html: `Ipotenuza = √(c₁² + c₂²).`, why: `Teorema leagă ariile pătratelor construite pe laturi: pentru a ne întoarce de la arii la lungimi este nevoie de rădăcină. Acolo au întâlnit grecii pentru prima dată √2.` }
      ],
      edges: [
        [`quad`, `radice`, `inversă`],
        [`radice`, `perfetti`, `exactă dacă`],
        [`perfetti`, `scomp`, `se calculează cu`],
        [`radice`, `approx`, `altfel`],
        [`approx`, `irraz`, `pentru că sunt`],
        [`radice`, `propr`, `are`],
        [`approx`, `pitagora`, `servește în`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: aproximarea`,
      questions: [
        { type: `mc`, q: `Între ce numere întregi se află √30?`, options: [`4 și 5`, `5 și 6`, `6 și 7`], answer: 1, explain: `25 < 30 < 36, deci 5 < √30 < 6.` },
        { type: `mc`, q: `√2 este…`, options: [`un număr întreg`, `o fracție`, `un număr irațional`], answer: 2, explain: `√2 = 1,41421… este infinit și neperiodic.` },
        { type: `num`, q: `√(9/25) = 3/? (scrie numitorul)`, answer: 5, explain: `√9/√25 = 3/5.` }
      ]
    },
    {
      type: `remember`,
      title: `De ținut minte`,
      html: `<ul>
<li>√a = b înseamnă b² = a. Rădăcina este operația inversă a pătratului.</li>
<li><b>Pătrat perfect</b>: toți exponenții factorilor primi sunt pari.</li>
<li>Rădăcina prin descompunere: <b>înjumătățește exponenții</b>.</li>
<li>Rădăcini neexacte: se <b>aproximează</b> (prin lipsă/adaos) și sunt numere iraționale.</li>
<li>√(a·b) = √a·√b, dar √(a + b) ≠ √a + √b.</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Rădăcină pătrată`, d: `Număr care, ridicat la pătrat, dă numărul de sub radical.` },
    { t: `Număr de sub radical (radicand)`, d: `Numărul care se află sub semnul radicalului.` },
    { t: `Pătrat perfect`, d: `Număr natural care este pătratul altui număr natural.` },
    { t: `Aproximare prin lipsă`, d: `Valoare puțin mai mică decât cea adevărată.` },
    { t: `Aproximare prin adaos`, d: `Valoare puțin mai mare decât cea adevărată.` },
    { t: `Număr irațional`, d: `Zecimal infinit neperiodic, care nu se poate scrie ca fracție.` },
    { t: `Operație inversă`, d: `Operație care anulează efectul alteia (rădăcină ↔ pătrat).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `√225 = ?`, answer: 15, explain: `15 × 15 = 225.` },
      { type: `mc`, q: `Care dintre aceste numere NU este un pătrat perfect?`, options: [`121`, `169`, `180`], answer: 2, explain: `180 = 2² × 3² × 5: exponentul lui 5 este impar.` },
      { type: `num`, q: `Folosind descompunerea 2⁴ × 3² × 5², calculează rădăcina pătrată a acestui număr.`, answer: 60, explain: `Înjumătățesc exponenții: 2² × 3 × 5 = 60.` },
      { type: `tf`, q: `√36 + √64 = √100.`, answer: false, explain: `6 + 8 = 14, în timp ce √100 = 10.` },
      { type: `mc`, q: `√70 se află între…`, options: [`7 și 8`, `8 și 9`, `9 și 10`], answer: 1, explain: `64 < 70 < 81.` },
      { type: `num`, q: `Un pătrat are aria 81 cm². Cât măsoară latura?`, answer: 9, unit: `cm`, explain: `√81 = 9 cm.` },
      { type: `num`, q: `√(4 × 49) = ?`, answer: 14, explain: `√4 × √49 = 2 × 7 = 14.` },
      { type: `mc`, q: `Un pătrat perfect se poate termina cu cifra…`, options: [`7`, `6`, `8`], answer: 1, explain: `Pătratele se termină cu 0, 1, 4, 5, 6, 9 (de ex. 16, 36).` },
      { type: `num`, q: `Aproximează √20 cu o eroare mai mică de o zecime, prin lipsă.`, answer: 4.4, tol: 0.001, explain: `4,4² = 19,36 și 4,5² = 20,25: √20 ≈ 4,4.` },
      { type: `tf`, q: `Nu există (printre numerele pe care le cunoști) rădăcina pătrată a lui −9.`, answer: true, explain: `Niciun număr ridicat la pătrat nu dă un rezultat negativ.` },
      { type: `order`, q: `Ordonează de la cel mai mic la cel mai mare.`, items: [`√10`, `√16`, `4,5`, `√25`], explain: `3,16… < 4 < 4,5 < 5.` }
    ],
    gen: [[`sqrt`, 3]]
  }
});
