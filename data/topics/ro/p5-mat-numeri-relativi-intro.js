TOPIC('ro', {
  id: "p5-mat-numeri-relativi-intro",
  title: "Numerele relative (întregi)",
  intro: "Iarna termometrul arată <b>−3 °C</b>, liftul coboară la etajul <b>−1</b>, Marea Moartă se află la <b>430 de metri sub</b> nivelul mării. Pentru toate acestea ne trebuie numerele care stau „sub zero”: <b>numerele negative</b>. Împreună cu cele pozitive și cu zero formează <b>numerele relative</b> (numerele întregi).",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Pozitive, negative și zero",
      html: `<p>Până acum ai folosit <b>numerele naturale</b>: 0, 1, 2, 3… Dar uneori trebuie să indicăm cantități <b>sub zero</b> sau <b>în direcție opusă</b>.</p>
<ul>
<li><b>Numerele pozitive</b> sunt mai mari decât zero: se scriu cu semnul <b>+</b> (sau fără semn): <b>+1, +2, +15</b>.</li>
<li><b>Numerele negative</b> sunt mai mici decât zero: se scriu <b>întotdeauna</b> cu semnul <b>−</b>: <b>−1, −2, −15</b>. Se citesc „minus unu”, „minus doi”…</li>
<li><b>Zero</b> nu este nici pozitiv, nici negativ: este <b>punctul de plecare</b> (originea).</li>
</ul>
<p>Împreună formează <b>numerele relative</b> (sau <b>numerele întregi</b>). Se numesc „relative” pentru că valoarea lor este <b>relativă</b> la un punct de referință: zero.</p>`
    },
    {
      type: "svg",
      title: "Axa numerelor relative",
      svg: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="220" fill="#f8fafc"/>
<line x1="20" y1="110" x2="620" y2="110" stroke="#1f2937" stroke-width="4"/>
<polygon points="620,100 638,110 620,120" fill="#1f2937"/>
<rect x="20" y="102" width="300" height="16" fill="#bfdbfe" opacity="0.6"/>
<rect x="320" y="102" width="300" height="16" fill="#fecaca" opacity="0.6"/>
<g stroke="#1f2937" stroke-width="3">
<line x1="70" y1="98" x2="70" y2="122"/><line x1="120" y1="98" x2="120" y2="122"/><line x1="170" y1="98" x2="170" y2="122"/><line x1="220" y1="98" x2="220" y2="122"/><line x1="270" y1="98" x2="270" y2="122"/>
<line x1="320" y1="90" x2="320" y2="130"/>
<line x1="370" y1="98" x2="370" y2="122"/><line x1="420" y1="98" x2="420" y2="122"/><line x1="470" y1="98" x2="470" y2="122"/><line x1="520" y1="98" x2="520" y2="122"/><line x1="570" y1="98" x2="570" y2="122"/>
</g>
<g font-size="18" text-anchor="middle" font-weight="bold">
<text x="70" y="152" fill="#1d4ed8">−5</text><text x="120" y="152" fill="#1d4ed8">−4</text><text x="170" y="152" fill="#1d4ed8">−3</text><text x="220" y="152" fill="#1d4ed8">−2</text><text x="270" y="152" fill="#1d4ed8">−1</text>
<text x="320" y="152" fill="#1f2937">0</text>
<text x="370" y="152" fill="#b91c1c">+1</text><text x="420" y="152" fill="#b91c1c">+2</text><text x="470" y="152" fill="#b91c1c">+3</text><text x="520" y="152" fill="#b91c1c">+4</text><text x="570" y="152" fill="#b91c1c">+5</text>
</g>
<text x="170" y="60" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">← NEGATIVE</text>
<text x="470" y="60" font-size="18" text-anchor="middle" fill="#b91c1c" font-weight="bold">POZITIVE →</text>
<text x="320" y="60" font-size="16" text-anchor="middle" fill="#1f2937">origine</text>
<path d="M270,90 Q320,40 370,90" fill="none" stroke="#16a34a" stroke-width="3" stroke-dasharray="6 4"/>
<text x="320" y="196" font-size="15" text-anchor="middle" fill="#15803d">−1 și +1 sunt opuse: aceeași distanță față de 0, în părți opuse</text>
</svg>`,
      caption: "În dreapta lui zero numerele pozitive, în stânga cele negative. Cu cât mergi mai la dreapta, cu atât numărul este mai mare."
    },
    {
      type: "text",
      title: "Compararea numerelor relative",
      html: `<p>Pe axă, <b>un număr este mai mare decât toate cele aflate la stânga lui</b>.</p>
<ul>
<li>Orice număr pozitiv este mai mare decât zero și decât orice număr negativ: <b>+1 &gt; −100</b>.</li>
<li>Între două numere negative este <b>mai mare cel mai apropiat de zero</b>: <b>−2 &gt; −7</b>. (Gândește-te la temperatură: −2 °C este mai puțin frig decât −7 °C!)</li>
</ul>
<p><b>Valoarea absolută</b> (modulul) a unui număr este <b>distanța lui față de zero</b>, fără semn. Se scrie între două bare: |−7| = 7, |+7| = 7.</p>
<p>Două numere cu aceeași valoare absolută și semne diferite sunt <b>opuse</b>: +4 și −4. Suma lor este <b>zero</b>.</p>`
    },
    {
      type: "widget",
      title: "Explorează axa",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 1, marks: [-6, 4] },
      caption: "Fă salturi pe axă: spre dreapta aduni, spre stânga scazi. De la −6 la +4 câte salturi trebuie? (10)"
    },
    {
      type: "example",
      title: "Exemplu practic: termometrul",
      html: `<p>La ora 7 dimineața, la Cortina, termometrul arată <b>−4 °C</b>. La prânz temperatura a <b>crescut cu 9 grade</b>. Câte grade sunt?</p>
<p>Pornesc de la −4 și urc 9: −4 + 9 = <b>+5 °C</b>.</p>
<p>Pe axă: de la −4 fac 4 salturi ca să ajung la 0, apoi alte 5 salturi până la +5. În total 4 + 5 = 9 salturi. ✅</p>
<p>Noaptea scade cu 7 grade: +5 − 7 = <b>−2 °C</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: liftul din zgârie-nori",
      html: `<p>Într-o clădire parterul este <b>0</b>, iar garajele sunt la etajele <b>−1</b> și <b>−2</b>.</p>
<ul>
<li>Luca este la etajul +3 și coboară la garajul −2: câte etaje parcurge? De la +3 la 0 sunt 3 etaje, de la 0 la −2 încă 2: în total <b>5 etaje</b>.</li>
<li>În Europa, parterul este 0, iar „etajul 1” este cel de deasupra. În <b>Statele Unite</b>, în schimb, parterul se numește adesea <b>1st floor</b>! De aceea este important să știi unde este zero: numerele sunt <b>relative</b> la punctul de referință.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: citește și compară",
      questions: [
        { type: "mc", q: "Care număr este mai mare?", options: ["−8", "−3", "−5"], answer: 1, explain: "Între numerele negative este mai mare cel mai apropiat de zero: −3." },
        { type: "tf", q: "Zero este un număr pozitiv.", answer: false, explain: "Zero nu este nici pozitiv, nici negativ." },
        { type: "num", q: "Care este opusul lui +6?", answer: -6, explain: "Aceeași distanță față de zero, semn opus: −6." },
        { type: "num", q: "Cât este |−12| (valoarea absolută)?", answer: 12, explain: "Valoarea absolută este distanța față de zero: 12." }
      ]
    },
    {
      type: "text",
      title: "Primele calcule: a urca și a coborî",
      html: `<p>Putem face deja adunări și scăderi simple gândindu-ne la <b>axă</b> (sau la termometru):</p>
<ul>
<li><b>A aduna</b> un număr pozitiv = <b>a urca</b> / a merge la dreapta: −3 + 5 = +2.</li>
<li><b>A scădea</b> un număr pozitiv = <b>a coborî</b> / a merge la stânga: 2 − 6 = −4.</li>
<li><b>Adunarea a două numere negative</b>: este ca și cum ai avea două datorii, datoria crește! (−3) + (−4) = −7.</li>
<li>Suma a două numere <b>opuse</b> dă întotdeauna zero: (+5) + (−5) = 0.</li>
</ul>
<p><b>Regula pentru adunarea</b> a două numere relative:</p>
<ol>
<li>dacă au <b>același semn</b>: aduni valorile absolute și păstrezi semnul. (+3)+(+4)=+7; (−3)+(−4)=−7.</li>
<li>dacă au <b>semne diferite</b>: faci diferența valorilor absolute și iei semnul numărului „mai depărtat de zero”. (−9)+(+4) = −5; (+9)+(−4) = +5.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Frigul recordurilor",
      html: `<p>Cea mai joasă temperatură măsurată vreodată cu instrumente pe Pământ este <b>−89,2 °C</b>, la stația rusă <b>Vostok</b> din Antarctica, la 21 iulie 1983. În Italia s-au înregistrat valori în jur de <b>−50 °C</b> în depresiuni din Dolomiți, precum Busa Fradusta (Pale di San Martino). Iar în spațiu? Cea mai joasă temperatură posibilă, <b>zero absolut</b>, este <b>−273,15 °C</b>: nimic nu poate fi mai rece!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Sub nivelul mării",
      html: `<p>Și <b>altitudinile</b> sunt numere relative, măsurate față de <b>nivelul mării</b> (zero). Everestul se află la <b>+8.849 m</b>; malul <b>Mării Moarte</b> este cel mai jos punct de pe uscat, la aproximativ <b>−430 m</b> (și coboară în fiecare an). <b>Groapa Marianelor</b>, din Oceanul Pacific, ajunge la aproape <b>−11.000 m</b>! În Italia, unele zone de lângă Ferrara și Veneția se află câțiva metri <b>sub</b> nivelul mării.</p>`
    },
    {
      type: "svg",
      title: "De la Everest la Groapa Marianelor",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="160" fill="#e0f2fe"/>
<rect y="160" width="640" height="160" fill="#1e3a8a"/>
<polygon points="40,160 160,40 280,160" fill="#78716c"/>
<polygon points="140,60 160,40 180,60" fill="#ffffff"/>
<polygon points="380,160 470,300 560,160" fill="#0f172a"/>
<line x1="0" y1="160" x2="640" y2="160" stroke="#0284c7" stroke-width="4"/>
<text x="600" y="152" font-size="16" text-anchor="end" fill="#0369a1" font-weight="bold">0 m nivelul mării</text>
<text x="160" y="30" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">Everest +8849 m</text>
<text x="330" y="150" font-size="15" text-anchor="middle" fill="#1f2937">Marea Moartă −430 m</text>
<circle cx="330" cy="164" r="6" fill="#facc15"/>
<text x="470" y="200" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">Groapa Marianelor</text>
<text x="470" y="222" font-size="15" text-anchor="middle" fill="#ffffff">aproximativ −11 000 m</text>
<text x="110" y="250" font-size="16" fill="#bfdbfe">sub zero → negative</text>
<text x="110" y="100" font-size="16" fill="#1f2937">peste zero → pozitive</text>
</svg>`,
      caption: "Înălțimile deasupra nivelului mării sunt pozitive, adâncimile de sub el sunt negative (desen nu la scară)."
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Numerele <b>relative</b> = pozitive (+), negative (−) și zero.</li>
<li>Pe axă, mai la <b>dreapta</b> = mai <b>mare</b>. Între numerele negative câștigă cel mai apropiat de 0.</li>
<li><b>Valoarea absolută</b> = distanța față de 0. <b>Opuse</b>: aceeași distanță, semn diferit; adunate dau 0.</li>
<li>Același semn: adun și păstrez semnul. Semne diferite: scad și iau semnul celui „mai puternic”.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege numerele negative",
      intro: "Numerele negative au fost grele chiar și pentru marii matematicieni! Încearcă să le înțelegi cu banii, cu jetoanele colorate, cu bețișoarele chinezești sau cu liftul 3D.",
      tabs: [
        {
          label: "💰 Bani și datorii",
          html: `<p>Gândește-te la numerele pozitive ca la <b>banii pe care îi ai</b> și la cele negative ca la <b>datorii</b> (bani pe care trebuie să-i dai înapoi).</p>
<ul>
<li>Ai 10 € și îi datorezi 4 surorii tale: 10 + (−4) = <b>6 €</b> cu adevărat ai tăi.</li>
<li>Ai 3 €, dar datorezi 8 €: 3 + (−8) = <b>−5</b>: ești tot în datorie cu 5 €.</li>
<li>Două datorii se adună: (−5) + (−2) = <b>−7</b>: datorezi 7 €.</li>
</ul>
<p>Chiar așa a explicat matematicianul indian <b>Brahmagupta</b>, în <b>628 d.Hr.</b>, regulile numerelor negative: „avuții” și „datorii”!</p>`
        },
        {
          label: "🔴🔵 Jetoanele",
          html: `<p>Folosește <b>jetoane roșii</b> (+1) și <b>jetoane albastre</b> (−1). Unul roșu și unul albastru împreună se <b>anulează</b>: fac zero (se numește „pereche zero”).</p>
<p>Exemplu: (+5) + (−3). Pune 5 roșii și 3 albastre, scoate perechile zero: rămân <b>2 roșii</b> → <b>+2</b>.</p>
<p>Această metodă se folosește mult în școlile din Singapore și din țările anglo-saxone („zero pairs”).</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fafafa"/>
<g stroke="#1f2937" stroke-width="2">
<circle cx="60" cy="70" r="24" fill="#ef4444"/><circle cx="120" cy="70" r="24" fill="#ef4444"/><circle cx="180" cy="70" r="24" fill="#ef4444"/><circle cx="240" cy="70" r="24" fill="#ef4444"/><circle cx="300" cy="70" r="24" fill="#ef4444"/>
<circle cx="60" cy="140" r="24" fill="#3b82f6"/><circle cx="120" cy="140" r="24" fill="#3b82f6"/><circle cx="180" cy="140" r="24" fill="#3b82f6"/>
</g>
<g font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">
<text x="60" y="78">+</text><text x="120" y="78">+</text><text x="180" y="78">+</text><text x="240" y="78">+</text><text x="300" y="78">+</text>
<text x="60" y="148">−</text><text x="120" y="148">−</text><text x="180" y="148">−</text>
</g>
<rect x="30" y="40" width="180" height="130" rx="14" fill="none" stroke="#16a34a" stroke-width="4" stroke-dasharray="8 6"/>
<text x="120" y="200" font-size="16" text-anchor="middle" fill="#15803d">3 perechi zero = 0</text>
<text x="450" y="90" font-size="22" text-anchor="middle" fill="#1f2937">(+5) + (−3)</text>
<text x="450" y="140" font-size="30" text-anchor="middle" fill="#dc2626" font-weight="bold">= +2</text>
</svg>`
        },
        {
          label: "🇨🇳 Bețișoarele chinezești",
          html: `<p>Acum mai bine de 2000 de ani, în cartea chineză <b>„Cele nouă capitole despre arta matematică”</b>, calculatorii foloseau niște <b>bețișoare</b>: cele <b>roșii</b> pentru numerele pozitive și cele <b>negre</b> pentru numerele negative. Aveau deja reguli pentru a le aduna și a le scădea!</p>
<p>Curios: și astăzi, în contabilitate, se spune „a fi <b>pe roșu</b>” pentru „a avea o datorie”. În China, însă, culorile erau invers: roșul era pozitiv!</p>
<p>În Europa, în schimb, mulți matematicieni au considerat numerele negative „absurde” sau „false” până în <b>secolele al XVI-lea–al XVII-lea</b>.</p>`
        },
        {
          label: "🧊 Zgârie-norii 3D",
          html: `<p>Imaginează-ți acest model din cubulețe ca pe un <b>zgârie-nori</b> văzut din lateral: fiecare cubuleț este un etaj. Nivelul străzii este <b>0</b>. Etajele de deasupra străzii sunt pozitive, cele săpate dedesubt (garaje, pivnițe) negative.</p>
<p>Dacă clădirea are 4 etaje deasupra și 2 dedesubt, de la cel mai de jos garaj (−2) până la ultimul etaj (+4) sunt 4 − (−2) = <b>6 etaje</b> de diferență. Folosește cursoarele ca să construiești turnuri diferite și numără etajele!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 6, b: 1 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta numerelor relative",
      nodes: [
        { id: "naturali", label: "Numere naturale", x: 50, y: 6, color: "#64748b", html: "0, 1, 2, 3… numerele pentru numărat.", why: "Sunt primele numere inventate de om, pentru a număra obiecte. Dar cu ele nu se poate scădea mereu: 3 − 5 nu are rezultat printre numerele naturale!" },
        { id: "relativi", label: "Numere relative", x: 50, y: 28, color: "#2563eb", html: "Pozitive, negative și zero: …, −2, −1, 0, +1, +2, …", why: "Au fost „inventate” ca să se poată face mereu scăderea și ca să măsurăm mărimi care au două sensuri (sus/jos, câștig/pierdere, cald/rece)." },
        { id: "zero", label: "Zero", x: 18, y: 28, color: "#1f2937", html: "Punctul de referință: nici pozitiv, nici negativ.", why: "Zero ca număr propriu-zis a fost definit în India: <b>Brahmagupta</b> (628 d.Hr.) a scris regulile de calcul cu zero și cu numerele negative. A ajuns în Europa odată cu cifrele indo-arabe, datorită și lui Fibonacci (1202)." },
        { id: "positivi", label: "Pozitive", x: 82, y: 50, color: "#dc2626", html: "Mai mari decât zero: +1, +2, …", why: "Corespund numerelor naturale (în afară de 0): de aceea semnul + poate fi și omis." },
        { id: "negativi", label: "Negative", x: 18, y: 50, color: "#3b82f6", html: "Mai mici decât zero: −1, −2, …", why: "Folosite în China acum peste 2000 de ani (bețișoare negre) și în India ca „datorii”. În Europa au fost acceptate pe deplin abia între secolele al XVI-lea și al XVII-lea." },
        { id: "retta", label: "Axa numerelor", x: 50, y: 56, color: "#16a34a", html: "Linie pe care fiecare număr își are locul: în dreapta cele pozitive, în stânga cele negative.", why: "Așezarea numerelor pe o linie, cu zero în mijloc, s-a răspândit odată cu geometria analitică a lui <b>Descartes</b> (1637): astfel numerele negative devin simple „puncte de cealaltă parte”." },
        { id: "assoluto", label: "Valoare absolută", x: 25, y: 80, color: "#a855f7", html: "Distanța unui număr față de zero: |−5| = 5.", why: "O distanță nu poate fi negativă: de aceea valoarea absolută nu are semn. Simbolul |x| a fost introdus de matematicianul german <b>Karl Weierstrass</b> în 1841." },
        { id: "opposti", label: "Numere opuse", x: 55, y: 80, color: "#f97316", html: "Aceeași valoare absolută, semn diferit: +3 și −3. Adunate dau 0.", why: "Sunt simetrice față de zero pe axă, ca un obiect și imaginea lui în oglindă." },
        { id: "usi", label: "Folosiri în viață", x: 85, y: 80, color: "#14b8a6", html: "Temperaturi, altitudini, etaje, conturi bancare, anii î.Hr./d.Hr., scoruri.", why: "Ori de câte ori o mărime are un punct de referință și două direcții posibile, numerele relative sunt instrumentul perfect." }
      ],
      edges: [
        ["naturali", "relativi", "se extind în"],
        ["relativi", "zero", "referință"],
        ["relativi", "positivi", "cuprind"],
        ["relativi", "negativi", "cuprind"],
        ["relativi", "retta", "se reprezintă pe"],
        ["retta", "assoluto", "distanța față de 0"],
        ["retta", "opposti", "simetrice"],
        ["positivi", "usi", "servesc la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: adunarea numerelor relative",
      questions: [
        { type: "num", q: "(−6) + (+10) = ?", answer: 4, explain: "Semne diferite: 10 − 6 = 4, câștigă pozitivul: +4." },
        { type: "num", q: "(−4) + (−5) = ?", answer: -9, explain: "Același semn: 4 + 5 = 9, semnul minus: −9." },
        { type: "num", q: "Temperatura este −2 °C și scade cu 3 grade. Câte grade arată termometrul?", answer: -5, unit: "°C", explain: "−2 − 3 = −5 °C." }
      ]
    }
  ],
  glossary: [
    { t: "Numere relative", d: "Mulțimea numerelor pozitive, a numerelor negative și a lui zero." },
    { t: "Număr pozitiv", d: "Număr mai mare decât zero, cu semnul + (de ex. +7)." },
    { t: "Număr negativ", d: "Număr mai mic decât zero, întotdeauna cu semnul − (de ex. −7)." },
    { t: "Origine", d: "Punctul de pe axă care corespunde lui zero." },
    { t: "Valoare absolută (modul)", d: "Distanța unui număr față de zero, fără semn: |−7| = 7." },
    { t: "Numere opuse", d: "Numere cu aceeași valoare absolută și semn diferit (+4 și −4)." },
    { t: "Nivelul mării", d: "Zero-ul de la care se măsoară altitudinile (+) și adâncimile (−)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care număr este mai mic?", options: ["−1", "0", "−10"], answer: 2, explain: "−10 este cel mai depărtat de zero spre stânga: este cel mai mic." },
      { type: "tf", q: "−5 este mai mare decât −2.", answer: false, explain: "−2 este mai aproape de zero: −2 > −5." },
      { type: "order", q: "Ordonează de la cel mai mic la cel mai mare.", items: ["−7", "−3", "0", "+2", "+5"], explain: "Pe axă, de la stânga la dreapta: −7, −3, 0, +2, +5." },
      { type: "num", q: "Termometrul arată +3 °C, apoi temperatura scade cu 8 grade. Ce temperatură este?", answer: -5, unit: "°C", explain: "3 − 8 = −5 °C." },
      { type: "num", q: "Ești la etajul −2 și urci 5 etaje. La ce etaj ajungi?", answer: 3, explain: "−2 + 5 = +3." },
      { type: "num", q: "Cât este |−15|?", answer: 15, explain: "Valoarea absolută este distanța față de zero: 15." },
      { type: "mc", q: "Care este opusul lui −9?", options: ["+9", "−9", "0"], answer: 0, explain: "Opusul are aceeași valoare absolută și semn contrar: +9." },
      { type: "num", q: "(+7) + (−7) = ?", answer: 0, explain: "Suma a două numere opuse este zero." },
      { type: "mc", q: "Care matematician indian a scris în 628 d.Hr. regulile pentru zero și numerele negative?", options: ["Pitagora", "Brahmagupta", "Arhimede"], answer: 1, explain: "Brahmagupta, în Brahmasphutasiddhanta." },
      { type: "tf", q: "Zero este un număr negativ.", answer: false, explain: "Zero nu este nici pozitiv, nici negativ." },
      { type: "num", q: "Ziua sunt +6 °C, noaptea −4 °C. Cu câte grade a scăzut temperatura?", answer: 10, unit: "°C", explain: "De la +6 la 0 sunt 6 grade, de la 0 la −4 încă 4: 10 grade." }
    ],
    gen: [["intAdd", 3]]
  }
});
