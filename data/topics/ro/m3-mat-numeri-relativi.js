TOPIC('ro', {
  id: "m3-mat-numeri-relativi",
  title: "Numerele întregi (relative)",
  intro: "Iarna temperatura scade sub zero, Marea Moartă se află sub nivelul mării, contul din bancă poate ajunge „pe minus”. Pentru a descrie aceste situații avem nevoie de <b>numerele relative</b>: numere cu <b>semnul</b> + sau −. Vom învăța să le comparăm și să facem cu ele toate cele patru operații.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Ce sunt numerele relative",
      html: `<p><b>Numerele relative</b> sunt numere precedate de un <b>semn</b>:</p>
<ul>
<li><b>pozitive</b> (+): mai mari decât zero → +1, +5, +3,7, +2/3;</li>
<li><b>negative</b> (−): mai mici decât zero → −1, −8, −0,5, −3/4;</li>
<li><b>zero</b> nu este nici pozitiv, nici negativ.</li>
</ul>
<p>Se numesc „relative” pentru că valoarea lor este raportată (<i>relativă</i>) la un punct de pornire, zero: 0 °C, nivelul mării, parterul unei clădiri.</p>
<p><b>Numerele întregi relative</b> formează mulțimea <b>ℤ</b> = {…, −3, −2, −1, 0, +1, +2, +3, …}. Litera Z vine din germană, <i>Zahlen</i>, „numere”. Dacă includem și fracțiile și zecimalele cu semn, obținem <b>numerele raționale ℚ</b>.</p>`
    },
    {
      type: "text",
      title: "Valoare absolută, numere opuse și de același semn",
      html: `<ul>
<li><b>Valoarea absolută</b> (sau modulul) este numărul fără semn: este <b>distanța față de zero</b>. Se scrie între bare: |−7| = 7, |+7| = 7.</li>
<li>Două numere sunt <b>opuse</b> dacă au aceeași valoare absolută și semn diferit: +5 și −5. Suma lor este 0.</li>
<li>Două numere sunt <b>de același semn</b> dacă au <b>același semn</b> (+3 și +8; −2 și −9), <b>de semne contrare</b> dacă au semne diferite (+4 și −6).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Axa numerelor",
      svg: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="230" fill="#f8fafc"/>
<line x1="20" y1="120" x2="620" y2="120" stroke="#1f2937" stroke-width="4"/>
<polygon points="620,120 604,111 604,129" fill="#1f2937"/>
<g stroke="#1f2937" stroke-width="3">
<line x1="70" y1="110" x2="70" y2="130"/><line x1="120" y1="110" x2="120" y2="130"/><line x1="170" y1="110" x2="170" y2="130"/><line x1="220" y1="110" x2="220" y2="130"/><line x1="270" y1="110" x2="270" y2="130"/>
<line x1="320" y1="102" x2="320" y2="138"/>
<line x1="370" y1="110" x2="370" y2="130"/><line x1="420" y1="110" x2="420" y2="130"/><line x1="470" y1="110" x2="470" y2="130"/><line x1="520" y1="110" x2="520" y2="130"/><line x1="570" y1="110" x2="570" y2="130"/>
</g>
<g font-size="17" text-anchor="middle">
<text x="70" y="158" fill="#dc2626">−5</text><text x="120" y="158" fill="#dc2626">−4</text><text x="170" y="158" fill="#dc2626">−3</text><text x="220" y="158" fill="#dc2626">−2</text><text x="270" y="158" fill="#dc2626">−1</text>
<text x="320" y="160" fill="#1f2937" font-weight="bold">0</text>
<text x="370" y="158" fill="#2563eb">+1</text><text x="420" y="158" fill="#2563eb">+2</text><text x="470" y="158" fill="#2563eb">+3</text><text x="520" y="158" fill="#2563eb">+4</text><text x="570" y="158" fill="#2563eb">+5</text>
</g>
<text x="170" y="200" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">← NEGATIVE</text>
<text x="470" y="200" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">POZITIVE →</text>
<circle cx="170" cy="120" r="8" fill="#a855f7"/><circle cx="470" cy="120" r="8" fill="#a855f7"/>
<path d="M170 100 Q245 40 320 100" fill="none" stroke="#a855f7" stroke-width="3"/>
<path d="M320 100 Q395 40 470 100" fill="none" stroke="#a855f7" stroke-width="3"/>
<text x="245" y="55" font-size="15" text-anchor="middle" fill="#7e22ce">distanța 3</text>
<text x="395" y="55" font-size="15" text-anchor="middle" fill="#7e22ce">distanța 3</text>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#7e22ce">−3 și +3 sunt opuse: |−3| = |+3| = 3</text>
</svg>`,
      caption: "Cu cât un număr se află mai la dreapta, cu atât este mai mare. Numerele opuse sunt simetrice față de zero."
    },
    {
      type: "text",
      title: "Compararea numerelor relative",
      html: `<p>Pe axa numerelor <b>este mai mare numărul care se află mai la dreapta</b>. De aici regulile:</p>
<ul>
<li>orice număr <b>pozitiv</b> este mai mare decât zero și decât orice număr negativ: +1 &gt; −100;</li>
<li>între două numere <b>pozitive</b> este mai mare cel cu valoarea absolută mai mare: +8 &gt; +3;</li>
<li>între două numere <b>negative</b> este mai mare cel cu valoarea absolută <b>mai mică</b>: −3 &gt; −8 (este „mai puțin frig” la −3 °C decât la −8 °C!).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Sari pe axa numerelor",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 3, start: 2, marks: [-5, 0, 5] },
      caption: "Pornește de la +2 și fă sărituri înapoi de câte 3: −1, −4, −7… Fiecare săritură spre stânga este ca și cum ai aduna −3."
    },
    {
      type: "text",
      title: "Adunarea și scăderea",
      html: `<p><b>Adunarea</b> (suma algebrică):</p>
<ul>
<li><b>numere de același semn</b>: se adună valorile absolute și se pune <b>semnul comun</b>. (+3) + (+5) = +8; (−3) + (−5) = −8.</li>
<li><b>numere de semne contrare</b>: se scade valoarea absolută mai mică din cea mai mare și se pune <b>semnul numărului cu valoarea absolută mai mare</b>. (+7) + (−4) = +3; (−9) + (+2) = −7.</li>
</ul>
<p><b>Scăderea</b>: a scădea un număr înseamnă a <b>aduna opusul său</b>.</p>
<ul>
<li>(+5) − (+8) = (+5) + (−8) = −3</li>
<li>(−4) − (−6) = (−4) + (+6) = +2</li>
</ul>
<p>Datorită numerelor relative scăderea este <b>întotdeauna posibilă</b>: 3 − 7 nu mai este „imposibil”, face −4!</p>
<p><b>Regula parantezelor</b>: un <b>+</b> în fața parantezei o elimină lăsând semnele; un <b>−</b> în față o elimină <b>schimbând</b> toate semnele: −(+3 − 5) = −3 + 5.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: comparare și sumă",
      questions: [
        { type: "mc", q: "Care este cel mai mare număr?", options: ["−12", "−2", "−7"], answer: 1, explain: "Între numerele negative este mai mare cel mai apropiat de zero: −2." },
        { type: "num", q: "(−6) + (+10) = ?", answer: 4, explain: "Semne contrare: 10 − 6 = 4, semnul celui mai mare în valoare absolută (+): +4." },
        { type: "num", q: "(−3) − (+5) = ?", answer: -8, explain: "(−3) + (−5) = −8." }
      ]
    },
    {
      type: "text",
      title: "Înmulțirea, împărțirea și puterile",
      html: `<p>Se înmulțesc (sau se împart) valorile absolute și se aplică <b>regula semnelor</b>:</p>
<table>
<tr><th>×  :</th><th>+</th><th>−</th></tr>
<tr><th>+</th><td>+</td><td>−</td></tr>
<tr><th>−</th><td>−</td><td>+</td></tr>
</table>
<p>Pe scurt: <b>semne la fel → +</b>, <b>semne diferite → −</b>.</p>
<ul>
<li>(−4) × (−3) = +12 &nbsp; (+4) × (−3) = −12 &nbsp; (−20) : (+5) = −4 &nbsp; (−20) : (−5) = +4</li>
</ul>
<p><b>Puterile</b>: dacă baza este pozitivă, rezultatul este mereu pozitiv. Dacă baza este <b>negativă</b>:</p>
<ul>
<li>exponent <b>par</b> → rezultat <b>pozitiv</b>: (−2)<sup>4</sup> = +16;</li>
<li>exponent <b>impar</b> → rezultat <b>negativ</b>: (−2)<sup>3</sup> = −8.</li>
</ul>
<p>⚠️ Atenție: (−3)<sup>2</sup> = +9, dar −3<sup>2</sup> = −9, pentru că fără paranteze exponentul se referă doar la 3!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: termometrul",
      html: `<p>La ora 6 dimineața la Cortina sunt <b>−7 °C</b>. La prânz temperatura a urcat cu <b>12 °C</b>. Noaptea scade cu <b>9 °C</b> față de prânz.</p>
<ul>
<li>Prânz: (−7) + (+12) = <b>+5 °C</b></li>
<li>Noapte: (+5) + (−9) = <b>−4 °C</b></li>
<li>Amplitudinea termică între maximă și minimă: (+5) − (−7) = 5 + 7 = <b>12 °C</b></li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: liftul și contul din bancă",
      html: `<p><b>Liftul</b>: parterul este 0, garajele sunt la etajele −1 și −2. Marta urcă de la etajul −2 la etajul +5: câte etaje a parcurs? (+5) − (−2) = <b>7 etaje</b>.</p>
<p><b>Contul din bancă</b>: Luca are 40 €. Plătește 3 abonamente a câte 18 € fiecare: 40 + 3 × (−18) = 40 − 54 = <b>−14 €</b>. Contul este „pe minus” cu 14 €: este o <b>datorie</b>.</p>
<p><b>Expresie</b>: −2 × (−3 + 5) − (−4)² : 8 = −2 × (+2) − 16 : 8 = −4 − 2 = <b>−6</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Bețișoare roșii și negre",
      html: `<p>Acum mai bine de 2000 de ani, în cartea chineză <i>Cele nouă capitole despre arta matematicii</i>, calculele se făceau cu <b>bețișoare</b>: cele <b>roșii</b> pentru numerele pozitive și cele <b>negre</b> pentru cele negative. În India matematicianul <b>Brahmagupta</b>, în anul 628 d.Hr., a scris regulile semnelor vorbind despre <b>„averi”</b> (pozitive) și <b>„datorii”</b> (negative): <i>„o datorie luată dintr-o datorie este o avere”</i>. În Europa numerele negative au fost acceptate mult mai târziu: încă în secolul al XVI-lea unii le numeau „numere absurde”.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Recorduri de temperatură și altitudine",
      html: `<ul>
<li>Cea mai joasă temperatură măsurată pe Pământ este <b>−89,2 °C</b>, la stația Vostok din Antarctica, la 21 iulie 1983.</li>
<li>Malul <b>Mării Moarte</b> este cel mai jos punct de uscat de pe planetă: aproximativ <b>−430 m</b> sub nivelul mării (și continuă să coboare).</li>
<li><b>Groapa Marianelor</b> ajunge la aproximativ <b>−10 900 m</b>, în timp ce Everestul are <b>+8849 m</b>: între cele două sunt aproape 20 km!</li>
<li>Zero pe scara <b>Kelvin</b> (zero absolut) corespunde la <b>−273,15 °C</b>: nu există nimic mai rece.</li>
</ul>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Valoare absolută = distanța față de zero. Opuse: aceeași valoare absolută, semn diferit.</li>
<li>Suma: <b>același semn</b> → adun și păstrez semnul; <b>semne contrare</b> → scad și iau semnul celui „mai puternic”.</li>
<li>A scădea = a aduna opusul.</li>
<li>Produs și cât: <b>semne la fel +</b>, <b>semne diferite −</b>.</li>
<li>Bază negativă: exponent par → +, impar → −.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege numerele relative",
      intro: "Regula semnelor nu te convinge? Iată alte moduri de a o „vedea”: bețișoarele chinezești, perechile care se anulează, filmul derulat invers, axa de parcurs.",
      tabs: [
        {
          label: "🇨🇳 Bețișoare roșii și negre",
          html: `<p>Ca în China antică, folosește două culori: <b style="color:#dc2626">roșu = +1</b> și <b>negru = −1</b>. Un roșu și un negru împreună se <b>anulează</b> (fac 0): este o „pereche zero”.</p>
<p>(+5) + (−3): pune 5 roșii și 3 negre. Elimină 3 perechi roșu-negru. Rămân <b>2 roșii → +2</b>.</p>
<p>(+2) − (+5): trebuie să scot 5 roșii, dar am doar 2! Adaug 3 perechi zero (3 roșii + 3 negre: valoarea nu se schimbă), acum scot 5 roșii. Rămân <b>3 negre → −3</b>. Iată de ce a scădea = a aduna opusul!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fefce8"/>
<text x="20" y="35" font-size="20" fill="#1f2937" font-weight="bold">(+5) + (−3) = +2</text>
<g stroke-width="10" stroke-linecap="round">
<line x1="40" y1="60" x2="40" y2="140" stroke="#dc2626"/><line x1="70" y1="60" x2="70" y2="140" stroke="#dc2626"/><line x1="100" y1="60" x2="100" y2="140" stroke="#dc2626"/><line x1="130" y1="60" x2="130" y2="140" stroke="#dc2626"/><line x1="160" y1="60" x2="160" y2="140" stroke="#dc2626"/>
<line x1="100" y1="160" x2="100" y2="220" stroke="#111827"/><line x1="130" y1="160" x2="130" y2="220" stroke="#111827"/><line x1="160" y1="160" x2="160" y2="220" stroke="#111827"/>
</g>
<rect x="85" y="50" width="90" height="180" rx="12" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 5"/>
<text x="190" y="140" font-size="16" fill="#7c3aed">3 perechi roșu+negru = 0</text>
<text x="20" y="235" font-size="15" fill="#dc2626">rămân 2 roșii</text>
<text x="390" y="80" font-size="20" fill="#dc2626" font-weight="bold">roșu = +1</text>
<text x="390" y="120" font-size="20" fill="#111827" font-weight="bold">negru = −1</text>
<text x="390" y="160" font-size="20" fill="#7c3aed" font-weight="bold">roșu + negru = 0</text>
</svg>`
        },
        {
          label: "🎬 Filmul derulat invers",
          html: `<p>De ce „minus ori minus face plus”? Imaginează-ți un videoclip cu o mașină:</p>
<ul>
<li>viteza <b>+</b> (înainte) × timpul <b>+</b> (video normal) → mașina merge înainte: <b>+</b></li>
<li>viteza <b>−</b> (marșarier) × timpul <b>+</b> → mașina merge înapoi: <b>−</b></li>
<li>viteza <b>+</b> × timpul <b>−</b> (video derulat invers) → pare că merge înapoi: <b>−</b></li>
<li>viteza <b>−</b> (marșarier) × timpul <b>−</b> (video derulat invers) → pare că merge <b>înainte</b>: <b>+</b>!</li>
</ul>
<p>Două „inversări” se anulează, ca în limba română „nu e adevărat că nu plouă” înseamnă „plouă”.</p>`
        },
        {
          label: "🐸 Broasca pe axă",
          html: `<p>Folosește axa: broasca pornește de la primul număr. <b>A aduna un număr pozitiv</b> = a sări la dreapta; <b>a aduna un număr negativ</b> = a sări la stânga. <b>A scădea</b> = a te întoarce în partea cealaltă înainte să sari.</p>
<p>Încearcă: pornește de la −4, sari de două ori cu +3: unde ajungi? (−4) + 2 × (+3) = <b>+2</b>.</p>`,
          widget: "numberLine",
          options: { min: -12, max: 12, step: 3, start: -4 }
        },
        {
          label: "🇺🇸 Algebra tiles",
          html: `<p>În școlile americane se folosesc plăcuțe colorate numite <b>algebra tiles</b>: pătrățele galbene (+1) și roșii (−1). Metoda este aceeași cu a bețișoarelor chinezești: <b>zero pairs</b> (perechile zero) se elimină.</p>
<p>Pentru înmulțire: (−2) × (+3) = „ia de 3 ori câte 2 plăcuțe roșii” = 6 roșii = −6. Și (−2) × (−3)? „<b>Scoate</b> de 3 ori câte 2 plăcuțe roșii”: pornești de la zero (multe perechi zero), scoți 6 roșii… rămân 6 galbene = <b>+6</b>!</p>
<p>Mai jos poți construi un dreptunghi din cubulețe: rânduri × coloane este valoarea absolută a produsului; semnul îl dă regula.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta numerelor relative",
      nodes: [
        { id: "naturali", label: "Numere naturale ℕ", x: 50, y: 6, color: "#64748b", html: "0, 1, 2, 3, … numerele pentru numărat.", why: "Sunt cele mai vechi: apar pentru a număra obiecte. Dar cu ele scăderea nu este întotdeauna posibilă (3 − 7 = ?)." },
        { id: "relativi", label: "Numere întregi relative ℤ", x: 50, y: 28, color: "#2563eb", html: "…, −2, −1, 0, +1, +2, … numere cu semn.", why: "Apar pentru a face scăderea mereu posibilă și pentru a reprezenta mărimi cu două sensuri (datorii/creanțe, deasupra/dedesubt). Folosite în China (Cele nouă capitole) și în India (Brahmagupta, 628); în Europa acceptate pe deplin abia din secolul al XVII-lea." },
        { id: "retta", label: "Axa numerelor", x: 15, y: 48, color: "#16a34a", html: "O dreaptă cu o origine (0), un sens și o unitate de măsură.", why: "Ideea de a reprezenta numerele ca puncte pe o dreaptă, cu cele negative în stânga, se răspândește în secolul al XVII-lea odată cu geometria analitică a lui Descartes și cu matematicieni ca John Wallis (1685)." },
        { id: "assoluto", label: "Valoare absolută", x: 85, y: 48, color: "#a855f7", html: "Distanța față de zero: |−5| = 5.", why: "O distanță nu poate fi negativă: de aceea valoarea absolută este întotdeauna ≥ 0. Simbolul |x| a fost introdus de Karl Weierstrass în 1841." },
        { id: "somma", label: "Suma algebrică", x: 25, y: 72, color: "#f59e0b", html: "Același semn: sumă și semnul comun. Semne contrare: diferență și semnul celui mai mare în valoare absolută.", why: "Gândește-te la mișcările pe axă: a merge la dreapta și la stânga se compensează. Roșii și negre care se anulează în perechi." },
        { id: "sottrazione", label: "Scăderea", x: 50, y: 60, color: "#ef4444", html: "a − b = a + (−b): se adună opusul.", why: "Transformarea scăderii în adunare permite folosirea unei singure reguli; este mereu posibilă pentru că în ℤ fiecare număr are opusul său." },
        { id: "segni", label: "Regula semnelor", x: 75, y: 72, color: "#0ea5e9", html: "Semne la fel → +; semne diferite → −.", why: "Nu este o regulă arbitrară: este singura care păstrează valabilă proprietatea de distributivitate. Într-adevăr (−1)·(1 + (−1)) = (−1)·0 = 0, deci (−1)·1 + (−1)·(−1) = 0 → (−1)·(−1) trebuie să fie +1." },
        { id: "potenze", label: "Puteri", x: 75, y: 92, color: "#7c3aed", html: "Bază negativă: exponent par → +, impar → −.", why: "Este regula semnelor aplicată de mai multe ori: fiecare pereche de factori negativi dă un pozitiv; dacă rămâne un factor „fără pereche” rezultatul este negativ." },
        { id: "realta", label: "În realitate", x: 25, y: 92, color: "#14b8a6", html: "Temperaturi, altitudini, etaje, solduri bancare, fusuri orare, anii î.Hr.", why: "Oriunde este nevoie de un punct de referință (zero) și de două direcții opuse. Curiozitate: în numărarea anilor nu există anul 0: de la 1 î.Hr. se trece la 1 d.Hr." }
      ],
      edges: [
        ["naturali", "relativi", "se extind în"],
        ["relativi", "retta", "se reprezintă pe"],
        ["relativi", "assoluto", "au"],
        ["relativi", "sottrazione", "fac posibilă"],
        ["sottrazione", "somma", "devine"],
        ["relativi", "segni", "se înmulțesc cu"],
        ["segni", "potenze", "repetată dă"],
        ["retta", "realta", "modelează"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: produse și puteri",
      questions: [
        { type: "num", q: "(−7) × (−6) = ?", answer: 42, explain: "Semne la fel → +; 7 × 6 = 42." },
        { type: "num", q: "(−2)⁵ = ?", answer: -32, explain: "Bază negativă, exponent impar → −; 2⁵ = 32." },
        { type: "mc", q: "Cât este −4² (fără paranteze)?", options: ["+16", "−16", "−8"], answer: 1, explain: "Exponentul se referă doar la 4: −(4²) = −16." }
      ]
    }
  ],
  glossary: [
    { t: "Număr relativ", d: "Număr precedat de un semn + sau −." },
    { t: "ℤ", d: "Mulțimea numerelor întregi relative." },
    { t: "Valoare absolută", d: "Numărul fără semn, adică distanța lui față de zero." },
    { t: "Numere opuse", d: "Aceeași valoare absolută și semn diferit; suma lor este 0." },
    { t: "Același semn / semne contrare", d: "Numere cu același semn / cu semne diferite." },
    { t: "Suma algebrică", d: "Adunarea între numere relative (include și scăderile)." },
    { t: "Regula semnelor", d: "La produs și la cât: semne la fel dau +, semne diferite dau −." },
    { t: "Axa numerelor", d: "Dreaptă cu origine, sens și unitate de măsură pe care se reprezintă numerele." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "|−15| = ?", answer: 15, explain: "Valoarea absolută este distanța față de zero: 15." },
      { type: "mc", q: "Care este opusul lui −9?", options: ["+9", "−9", "1/9"], answer: 0, explain: "Aceeași valoare absolută, semn opus: +9." },
      { type: "order", q: "Ordonează de la cel mai mic la cel mai mare.", items: ["−8", "−3", "0", "+2", "+5"], explain: "Pe axă, de la stânga la dreapta." },
      { type: "num", q: "(+4) + (−11) = ?", answer: -7, explain: "Semne contrare: 11 − 4 = 7, semnul lui −11 → −7." },
      { type: "num", q: "(−5) − (−12) = ?", answer: 7, explain: "(−5) + (+12) = +7." },
      { type: "num", q: "(−36) : (+9) = ?", answer: -4, explain: "Semne diferite → −; 36 : 9 = 4." },
      { type: "tf", q: "Produsul a trei numere negative este pozitiv.", answer: false, explain: "(−)·(−) = +, apoi (+)·(−) = −: produsul este negativ." },
      { type: "num", q: "(−3)⁴ = ?", answer: 81, explain: "Exponent par → +; 3⁴ = 81." },
      { type: "num", q: "Noaptea sunt −6 °C, ziua +9 °C. Cu câte grade a urcat temperatura?", answer: 15, unit: "°C", explain: "(+9) − (−6) = 15." },
      { type: "num", q: "Calculează: −3 + 2 × (−4) − (−5)", answer: -6, explain: "−3 − 8 + 5 = −6 (mai întâi înmulțirea)." },
      { type: "mc", q: "Dacă a este negativ, −a este…", options: ["întotdeauna negativ", "întotdeauna pozitiv", "zero"], answer: 1, explain: "−a este opusul lui a: dacă a = −4, −a = +4." }
    ],
    gen: [["intAdd", 2], ["intMul", 2]]
  }
});
