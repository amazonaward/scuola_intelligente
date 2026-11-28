TOPIC('ro', {
  id: "l1-mat-frazioni-algebriche",
  title: "Fracții algebrice",
  intro: "Fracțiile numerice le cunoști de ani de zile. Ce se întâmplă dacă numărătorul și numitorul conțin <b>litere</b>? Apar <b>fracțiile algebrice</b>: servesc la descrierea vitezelor medii, a rezistențelor electrice, a rapoartelor dintre mărimi care variază. Secretul este unul singur: tot ce știi despre fracții rămâne valabil, dar trebuie să ne ferim de un dușman, <b>numitorul care se anulează</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Ce este o fracție algebrică",
      html: `<p>O <b>fracție algebrică</b> este o expresie de forma <b>A / B</b> în care A și B sunt polinoame, iar B <b>nu este polinomul nul</b>. De exemplu:</p>
<p style="text-align:center">(x + 1)/(x − 3) &nbsp;&nbsp;&nbsp; 5/(x² − 4) &nbsp;&nbsp;&nbsp; (a² + b)/(2a)</p>
<p>O fracție algebrică nu este întotdeauna un număr: depinde de valoarea pe care o dăm literelor. Iar pentru anumite valori <b>nu există</b>: împărțirea la zero este imposibilă. Așadar:</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Condiții de existență (CE)</b>: sunt valorile literelor pentru care numitorul este <b>diferit de zero</b>. Se află punând condiția <b>numitor ≠ 0</b>.</p>
<p>Exemplu: pentru 5/(x² − 4) se impune x² − 4 ≠ 0, adică (x − 2)(x + 2) ≠ 0, deci <b>x ≠ 2 și x ≠ −2</b>. Trucul este întotdeauna același: <b>descompune numitorul în factori</b> și exclude valorile care anulează fiecare factor (conform legii anulării produsului).</p>
<p>CE se scriu <b>înainte</b> de orice simplificare, pentru că transformările pot face să „dispară” problema fără să o rezolve.</p>`
    },
    {
      type: "svg",
      title: "Gaura din grafic",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="240" x2="560" y2="240" stroke="#475569" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="70" y1="270" x2="420" y2="40" stroke="#2563eb" stroke-width="4"/>
<circle cx="293" cy="176" r="9" fill="#f8fafc" stroke="#dc2626" stroke-width="4"/>
<line x1="293" y1="176" x2="293" y2="240" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="150" y1="176" x2="293" y2="176" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<text x="293" y="262" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">x = 2</text>
<text x="118" y="181" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">4</text>
<text x="430" y="40" font-size="16" fill="#1d4ed8" font-weight="bold">y = x + 2</text>
<text x="330" y="150" font-size="16" fill="#334155">pentru x = 2 fracția nu există</text>
<text x="300" y="25" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">y = (x² − 4)/(x − 2) = x + 2 cu x ≠ 2</text>
</svg>`,
      caption: "Fracția (x² − 4)/(x − 2) se simplifică în x + 2, dar graficul ei are o gaură în x = 2: simplificarea nu trebuie să ne facă să uităm CE."
    },
    {
      type: "text",
      title: "Simplificarea unei fracții algebrice",
      html: `<p>Ca la numere (15/35 = 3/5 împărțind la 5), se poate simplifica împărțind numărătorul și numitorul la un <b>factor comun</b>. Dar atenție: se simplifică doar <b>factorii</b>, niciodată <b>termenii unei sume</b>!</p>
<p><b>Procedură</b>:</p>
<ol>
<li>Descompune în factori numărătorul și numitorul (factor comun, formule de calcul prescurtat, trinom…).</li>
<li>Scrie <b>CE</b> pe baza numitorului <b>inițial</b> descompus.</li>
<li>Simplifică factorii egali.</li>
</ol>
<p>Exemplu: <b>(x² − 4)/(x² − 2x)</b> = (x + 2)(x − 2)/[x(x − 2)] = <b>(x + 2)/x</b>, cu CE <b>x ≠ 0 și x ≠ 2</b>.</p>
<p>⚠️ Greșeală tipică: (x + 2)/(x + 3) <b>nu</b> este egal cu 2/3. Semnul „+” leagă x și 2: nu sunt factori. Încearcă cu x = 1: 3/4 ≠ 2/3. O verificare numerică demască imediat majoritatea greșelilor.</p>`
    },
    {
      type: "widget",
      title: "Potrivește fracția cu forma ei simplificată",
      widget: "match",
      options: { pairs: [
        ["(x² − 9)/(x − 3)", "x + 3"],
        ["(x² − 2x)/x", "x − 2"],
        ["(2x + 4)/(x + 2)", "2"],
        ["(x² + 2x + 1)/(x + 1)", "x + 1"],
        ["(x² − 1)/(x² + x)", "(x − 1)/x"]
      ] },
      caption: "Descompune, simplifică factorii comuni, amintește-ți CE."
    },
    {
      type: "example",
      title: "Exemplu: simplificare cu un trinom",
      html: `<p>Simplifică <b>(x² − 5x + 6)/(x² − 4)</b>.</p>
<ul>
<li>Numărător: trinom special, suma −5 și produsul 6 → (x − 2)(x − 3).</li>
<li>Numitor: diferență de pătrate → (x − 2)(x + 2).</li>
<li>CE: x ≠ 2 și x ≠ −2.</li>
<li>Simplific (x − 2): rezultat <b>(x − 3)/(x + 2)</b>.</li>
<li>Verificare cu x = 4: inițială (16 − 20 + 6)/(16 − 4) = 2/12 = 1/6; simplificată (4 − 3)/(4 + 2) = 1/6 ✔️</li>
</ul>`
    },
    {
      type: "text",
      title: "Înmulțirea, împărțirea și puterea",
      html: `<p>Regulile sunt cele ale fracțiilor numerice:</p>
<ul>
<li><b>Produsul</b>: A/B · C/D = (A·C)/(B·D). Este indicat să descompui și să simplifici <b>înainte</b> de a înmulți.</li>
<li><b>Câtul</b>: A/B : C/D = A/B · <b>D/C</b> (se înmulțește cu <b>inversul</b>). În plus, împărțitorul trebuie să fie diferit de zero: <b>C ≠ 0</b>.</li>
<li><b>Puterea</b>: (A/B)ⁿ = Aⁿ/Bⁿ.</li>
</ul>
<p><b>Exemplu de produs</b>: (x² − 1)/(x² + 2x) · x/(x + 1) = (x − 1)(x + 1)/[x(x + 2)] · x/(x + 1) = <b>(x − 1)/(x + 2)</b>, cu CE x ≠ 0, −2, −1.</p>
<p><b>Exemplu de cât</b>: x/(x − 2) : x²/(x² − 4) = x/(x − 2) · (x − 2)(x + 2)/x² = <b>(x + 2)/x</b>. CE: x ≠ 2, −2 și, de asemenea, x ≠ 0 (împărțitorul x²/(x² − 4) nu trebuie să fie zero, iar x apare la numitor).</p>`
    },
    {
      type: "text",
      title: "Adunarea și scăderea",
      html: `<p>Ca la 1/6 + 1/4, avem nevoie de <b>numitori egali</b>: se folosește <b>c.m.m.m.c.</b> al numitorilor <b>descompuși în factori</b>.</p>
<ol>
<li>Descompune numitorii și scrie CE.</li>
<li>Calculează c.m.m.m.c. (factorii comuni și necomuni, cu exponentul cel mai mare).</li>
<li>Transformă fiecare fracție: înmulțește numărătorul cu factorul care lipsește.</li>
<li>Adună numărătorii (atenție la semnele din fața parantezelor!).</li>
<li>Simplifică dacă este posibil.</li>
</ol>
<p><b>Exemplu</b>: 1/(x − 1) + 1/(x + 1). C.m.m.m.c. este (x − 1)(x + 1) = x² − 1. Atunci [(x + 1) + (x − 1)]/(x² − 1) = <b>2x/(x² − 1)</b>, cu CE x ≠ ±1.</p>
<p><b>Exemplu cu scădere</b>: 3/x − 2/(x + 1) = [3(x + 1) − 2x]/[x(x + 1)] = (3x + 3 − 2x)/[x(x + 1)] = <b>(x + 3)/[x(x + 1)]</b>. Semnul minus schimbă toți termenii lui −2x: greșeala clasică este să-l uiți!</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: CE și simplificare",
      questions: [
        { type: "num", q: "Pentru ce valoare a lui x fracția 1/(x − 5) nu există?", answer: 5, explain: "Numitorul se anulează pentru x = 5." },
        { type: "mc", q: "CE pentru (x + 3)/(x² − 9) sunt…", options: ["x ≠ 3 și x ≠ −3", "x ≠ 9", "numai x ≠ −3"], answer: 0, explain: "x² − 9 = (x − 3)(x + 3), care se anulează pentru x = 3 și pentru x = −3." },
        { type: "tf", q: "(x + 2)/(x + 3) = 2/3, pentru că se simplifică x.", answer: false, explain: "x este un termen al sumei, nu un factor: nu se poate simplifica. Cu x = 1 se obține 3/4, nu 2/3." }
      ]
    },
    {
      type: "example",
      title: "Exemplu practic: dus cu 60 km/h, întors cu 40",
      html: `<p>Mergi în oraș cu 60 km/h și te întorci cu 40 km/h pe același drum. Care este viteza medie pe întreaga călătorie? Nu este 50! Dacă distanța este d km: timpul de dus d/60, timpul de întors d/40; timpul total <b>d/60 + d/40 = 5d/120 = d/24</b>. Viteza medie este (2d)/(d/24) = <b>48 km/h</b>. Litera d se simplifică: rezultatul nu depinde de distanță. În general, viteza medie este 2v₁v₂/(v₁ + v₂): o fracție algebrică în toată regula (<b>media armonică</b>).</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: rezistențe în paralel",
      html: `<p>În fizică, două rezistențe R₁ și R₂ legate în <b>paralel</b> echivalează cu o rezistență R cu <b>1/R = 1/R₁ + 1/R₂</b>. Adunând fracțiile: 1/R = (R₂ + R₁)/(R₁R₂), de unde <b>R = R₁R₂/(R₁ + R₂)</b>. Cu R₁ = 6 Ω și R₂ = 3 Ω: R = 18/9 = <b>2 Ω</b>. Circuitul în paralel are o rezistență mai mică decât fiecare dintre cele două: este ca și cum ai deschide o a doua bandă pe autostradă.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Demonstrația că 1 = 2",
      html: `<p>Ia a = b. Înmulțește cu a: a² = ab. Scade b²: a² − b² = ab − b². Descompune: (a + b)(a − b) = b(a − b). „Simplifică” (a − b): a + b = b, adică 2b = b, deci <b>2 = 1</b>! Unde este păcăleala? Dacă a = b, atunci a − b = 0 și ai împărțit la zero. Exact acesta este motivul pentru care <b>condițiile de existență</b> nu sunt o simplă formalitate.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Egiptenii și fracțiile unitare",
      html: `<p>În <b>papirusul Rhind</b> (Egipt, circa 1650 î.Hr.) există un tabel care scrie 2/n, pentru n impar de la 3 la 101, ca sumă de <b>fracții cu numărătorul 1</b>: de exemplu 2/5 = 1/3 + 1/15. Vechii egipteni nu foloseau aproape deloc alte fracții (în afară de 2/3). Cu fracțiile, pe scurt, omenirea se confruntă de cel puțin patru mii de ani.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege fracțiile algebrice",
      intro: "Dacă literele te sperie, readu totul la numere sau privește aceeași idee dintr-un alt unghi.",
      tabs: [
        {
          label: "🔢 Ca la numere",
          html: `<p>Pentru a simplifica 84/126 descompui în factori primi: 84 = 2²·3·7 și 126 = 2·3²·7. Simplifici 2·3·7 și rămâne 2/3. Cu polinoamele faci <b>exact același lucru</b>: descompui în factori ireductibili și simplifici pe cei egali.</p>
<p>Și suma este identică: 1/6 + 1/4 → c.m.m.m.c. 12 → 2/12 + 3/12 = 5/12. Înlocuiește 6 și 4 cu x − 1 și x + 1 și obții suma de mai înainte. Dacă nu ești sigur de un pas, <b>încearcă cu un număr</b> în locul lui x.</p>`
        },
        {
          label: "✨ Înmulțirea cu 1",
          html: `<p>De ce, pentru a aduna, înmulțim numărătorul cu „factorul care lipsește”? Pentru că înmulțim fracția cu <b>un 1 deghizat</b>:</p>
<p style="text-align:center">1/(x − 1) = 1/(x − 1) · <b>(x + 1)/(x + 1)</b> = (x + 1)/(x² − 1)</p>
<p>(x + 1)/(x + 1) este egal cu 1 (pentru x ≠ −1), deci valoarea fracției nu se schimbă: doar „hainele” ei. Este proprietatea invariantivă: înmulțind sau împărțind numărătorul și numitorul cu același polinom nenul, fracția nu se schimbă.</p>`
        },
        {
          label: "🧪 Testul cu un număr",
          html: `<p>Ai simplificat și nu ești sigur? Alege o valoare pentru x care respectă CE și calculează <b>atât fracția de la care ai pornit, cât și rezultatul</b>.</p>
<p>(x² − 1)/(x + 1) → x − 1. Încearcă x = 5: (25 − 1)/6 = 24/6 = 4 și 5 − 1 = 4 ✔️. Încearcă acum cu x = −1: fracția inițială nu există, în timp ce x − 1 este −2: iată de ce CE trebuie declarate. Testul nu este o demonstrație, dar dacă cele două numere sunt diferite, cu siguranță ai greșit.</p>`,
          widget: "numberLine",
          options: { min: -5, max: 10, step: 1, marks: [-1, 5] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta fracțiilor algebrice",
      nodes: [
        { id: "frnum", label: "Fracție numerică", x: 15, y: 8, color: "#64748b", html: "Raport între două numere întregi (numitor ≠ 0).", why: "Fracțiile au apărut pentru a măsura și a împărți: le foloseau deja egiptenii (papirusul Rhind) și babilonienii. Numitorul nu poate fi zero pentru că niciun număr înmulțit cu 0 nu dă un număr diferit de 0." },
        { id: "fralg", label: "Fracție algebrică", x: 55, y: 8, color: "#6366f1", html: "Raport A/B între două polinoame, cu B nenul.", why: "Când o mărime depinde de o variabilă (viteză, rezistență, preț mediu), raportul devine o fracție cu litere." },
        { id: "ce", label: "Condiții de existență", x: 85, y: 30, color: "#ef4444", html: "Valorile literelor care nu anulează numitorul.", why: "Împărțirea la zero este imposibilă: a/0 = c ar implica c·0 = a, dar c·0 = 0 pentru orice c, deci ar fi a = 0 și orice valoare a lui c ar fi bună." },
        { id: "scomp", label: "Descompunere în factori", x: 20, y: 38, color: "#16a34a", html: "Pregătirea numărătorului și a numitorului sub formă de factori.", why: "Se simplifică factorii, nu termenii: numai un produs poate fi împărțit la un factor comun." },
        { id: "inv", label: "Proprietatea invariantivă", x: 55, y: 42, color: "#f59e0b", html: "Înmulțind sau împărțind num. și num. cu același factor ≠ 0, fracția nu se schimbă.", why: "Provine din faptul că a/a = 1, iar 1 este elementul neutru al înmulțirii." },
        { id: "sempl", label: "Simplificare", x: 20, y: 68, color: "#22c55e", html: "Se simplifică factorii comuni.", why: "Se aplică proprietatea invariantivă împărțind la factorul comun." },
        { id: "mcm", label: "c.m.m.m.c. și adunare", x: 55, y: 70, color: "#a855f7", html: "Fracțiile se aduc la același numitor.", why: "Se pot aduna doar mărimi „de aceeași unitate”, ca 3 mere + 2 mere: numitorul este unitatea." },
        { id: "prod", label: "Produs și cât", x: 85, y: 70, color: "#0ea5e9", html: "Se înmulțește cu inversul.", why: "A împărți la C/D echivalează cu a înmulți cu D/C, pentru că C/D · D/C = 1." },
        { id: "app", label: "Aplicații", x: 50, y: 94, color: "#14b8a6", html: "Viteza medie, rezistențe în paralel, ecuații fracționare.", why: "Fracțiile algebrice leagă algebra de fizică și pregătesc ecuațiile fracționare și funcțiile raționale." }
      ],
      edges: [
        ["frnum", "fralg", "se generalizează în"],
        ["fralg", "ce", "necesită"],
        ["fralg", "inv", "are"],
        ["scomp", "sempl", "permite"],
        ["inv", "sempl", "justifică"],
        ["inv", "mcm", "justifică"],
        ["fralg", "prod", "operații"],
        ["mcm", "app", "folosește"],
        ["prod", "app", "folosește"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: operațiile",
      questions: [
        { type: "num", q: "Valoarea lui 5/x + 5/x pentru x = 5 este…", answer: 2, explain: "5/5 + 5/5 = 1 + 1 = 2." },
        { type: "mc", q: "Inversul lui (x − 1)/(x + 2) este…", options: ["(x + 2)/(x − 1)", "(1 − x)/(x + 2)", "(x − 1)/(x + 2)"], answer: 0, explain: "Inversul se obține schimbând între ele numărătorul și numitorul." },
        { type: "num", q: "Calculează (x² − 4)/(x − 2) pentru x = 7.", answer: 9, explain: "Se simplifică în x + 2; pentru x = 7 valorează 9. Verificare: 45/5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Fracție algebrică", d: "Raport A/B între două polinoame, cu B diferit de polinomul nul." },
    { t: "Condiții de existență (CE)", d: "Valorile literelor pentru care numitorul este diferit de zero." },
    { t: "Simplificare", d: "Împărțirea numărătorului și a numitorului la un factor comun al lor." },
    { t: "c.m.m.m.c.", d: "Cel mai mic multiplu comun al numitorilor, folosit ca numitor comun la adunare." },
    { t: "Invers", d: "Fracția obținută schimbând între ele numărătorul și numitorul." },
    { t: "Proprietatea invariantivă", d: "Valoarea unei fracții nu se schimbă dacă numărătorul și numitorul se înmulțesc sau se împart cu același factor nenul." },
    { t: "Media armonică", d: "Inversul mediei inverselor: de exemplu viteza medie la dus și întors." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "CE pentru (x + 1)/(x² − 4x + 3) sunt…", options: ["x ≠ 1 și x ≠ 3", "x ≠ −1", "numai x ≠ 3"], answer: 0, explain: "x² − 4x + 3 = (x − 1)(x − 3), nul pentru x = 1 și x = 3." },
      { type: "mc", q: "Simplificând (x² − 6x + 9)/(x² − 9) se obține…", options: ["(x − 3)/(x + 3)", "(x + 3)/(x − 3)", "−6x/(−9)"], answer: 0, explain: "(x − 3)²/[(x − 3)(x + 3)] = (x − 3)/(x + 3), cu x ≠ ±3." },
      { type: "num", q: "Calculează (x² − 1)/(x + 1) pentru x = 10.", answer: 9, explain: "Se simplifică în x − 1 = 9. Verificare: 99/11 = 9." },
      { type: "tf", q: "(x + 5)/5 = x + 1.", answer: false, explain: "Se poate simplifica doar dacă 5 este factor al întregului numărător: (x + 5)/5 = x/5 + 1." },
      { type: "mc", q: "1/(x − 2) + 1/(x + 2) =", options: ["2x/(x² − 4)", "2/(x² − 4)", "2/(2x)"], answer: 0, explain: "[(x + 2) + (x − 2)]/[(x − 2)(x + 2)] = 2x/(x² − 4)." },
      { type: "num", q: "O mașină parcurge un tronson cu 30 km/h și îl parcurge din nou la întoarcere cu 60 km/h. Care este viteza medie pe întregul parcurs, în km/h?", answer: 40, unit: "km/h", explain: "2·30·60/(30 + 60) = 3600/90 = 40." },
      { type: "order", q: "Pune în ordine pașii pentru a aduna două fracții algebrice.", items: ["Descompunem numitorii și scriem CE", "Calculăm c.m.m.m.c.", "Aducem fracțiile la numitor comun", "Adunăm numărătorii", "Simplificăm rezultatul"], explain: "CE trebuie scrise întotdeauna înainte de orice transformare." },
      { type: "text", q: "Cum se numesc condițiile care exclud valorile ce anulează numitorul?", answer: ["condiții de existență", "condițiile de existență", "condiții de existență (ce)", "ce", "c.e."], explain: "Sunt condițiile de existență (CE)." },
      { type: "mc", q: "A împărți la fracția A/B echivalează cu…", options: ["a înmulți cu B/A", "a înmulți cu A/B", "a scădea B/A"], answer: 0, explain: "Se înmulțește cu inversul (cu A ≠ 0)." },
      { type: "num", q: "Două rezistențe de 6 Ω și 3 Ω sunt legate în paralel. Care este rezistența echivalentă, în ohmi?", answer: 2, unit: "Ω", explain: "R = 6·3/(6 + 3) = 2 Ω." }
    ]
  }
});
