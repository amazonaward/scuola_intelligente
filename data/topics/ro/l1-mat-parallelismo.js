TOPIC('ro', {
  id: "l1-mat-parallelismo",
  title: "Drepte paralele și patrulatere",
  intro: "Două linii ferate merg alăturat și nu se întâlnesc niciodată. Pare evident, dar este una dintre cele mai subtile idei ale matematicii: a demonstra că există paralele este ușor, dar a înțelege câte sunt a cerut <b>două mii de ani</b> și a dus la descoperirea unor geometrii complet noi. În această lecție vedem <b>unghiurile formate de paralele</b>, <b>suma unghiurilor</b> unui triunghi și proprietățile <b>patrulaterelor</b> (paralelograme și trapeze).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Drepte paralele și secantă",
      html: `<p>Două drepte din plan sunt <b>paralele</b> dacă nu au niciun punct comun (sau coincid). Se scrie <b>r ∥ s</b>. Două drepte neparalele, în plan, se întâlnesc într-un punct.</p>
<p>Când o a treia dreaptă, <b>secanta</b>, taie două drepte, se formează opt unghiuri. Perechile importante sunt:</p>
<ul>
<li><b>alterne interne</b>: se află între cele două drepte, de părți opuse ale secantei;</li>
<li><b>alterne externe</b>: în afara celor două drepte, de părți opuse ale secantei;</li>
<li><b>corespondente</b>: în aceeași poziție față de cele două drepte și față de secantă;</li>
<li><b>interne de aceeași parte a secantei</b> (sau externe): de aceeași parte a secantei, ambele între drepte (sau ambele în afara lor).</li>
</ul>
<p><b>Teoremă.</b> Două drepte tăiate de o secantă sunt paralele dacă și numai dacă este îndeplinită una dintre aceste condiții:</p>
<ul>
<li>unghiurile <b>alterne interne</b> (sau externe) sunt <b>congruente</b>;</li>
<li>unghiurile <b>corespondente</b> sunt <b>congruente</b>;</li>
<li>unghiurile <b>interne de aceeași parte a secantei</b> sunt <b>suplementare</b> (suma 180°).</li>
</ul>
<p>„Dacă și numai dacă” înseamnă că este valabil în ambele sensuri. Partea „dacă unghiurile alterne interne sunt congruente, atunci dreptele sunt paralele” se demonstrează doar cu primele patru postulate; sensul opus, „dacă sunt paralele, atunci unghiurile alterne interne sunt congruente”, <b>cere postulatul al cincilea</b>.</p>`
    },
    {
      type: "svg",
      title: "Unghiurile dintre două paralele",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="100" x2="560" y2="100" stroke="#1f2937" stroke-width="3"/>
<line x1="40" y1="200" x2="560" y2="200" stroke="#1f2937" stroke-width="3"/>
<line x1="200" y1="40" x2="400" y2="260" stroke="#6366f1" stroke-width="3"/>
<text x="500" y="90" font-size="16" fill="#1f2937">r</text>
<text x="500" y="190" font-size="16" fill="#1f2937">s</text>
<text x="420" y="268" font-size="16" fill="#4338ca">secanta</text>
<circle cx="255" cy="100" r="5" fill="#1f2937"/><circle cx="345" cy="200" r="5" fill="#1f2937"/>
<text x="272" y="132" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="300" y="186" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="368" y="226" font-size="22" fill="#ea580c" font-weight="bold">α</text>
<text x="212" y="132" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="340" y="170" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="40" y="30" font-size="16" fill="#16a34a" font-weight="bold">verde: alterne interne (egale)</text>
<text x="40" y="52" font-size="16" fill="#ea580c" font-weight="bold">portocaliu: corespondente (egale)</text>
<text x="330" y="30" font-size="16" fill="#dc2626" font-weight="bold">β = 180° − α (de aceeași parte)</text>
</svg>`,
      caption: "Dacă r ∥ s: unghiurile verzi (alterne interne) și cel portocaliu (corespondent) sunt egale cu α; unghiul roșu β este suplementul."
    },
    {
      type: "example",
      title: "Exemplu: calculul unghiurilor",
      html: `<p>Două drepte paralele sunt tăiate de o secantă; unul dintre cele opt unghiuri măsoară <b>65°</b>. Cât măsoară celelalte?</p>
<ul>
<li>Fiecare unghi este fie <b>65°</b>, fie suplementul său <b>180° − 65° = 115°</b>.</li>
<li>Patru unghiuri (cele două alterne interne, corespondentele, cele opuse la vârf) au 65°; celelalte patru au 115°.</li>
<li>În fiecare dintre cele două puncte de intersecție, două unghiuri adiacente formează un unghi alungit (180°); unghiurile opuse la vârf sunt egale.</li>
</ul>`
    },
    {
      type: "text",
      title: "Suma unghiurilor unui triunghi",
      html: `<p>Primul mare rezultat care decurge din postulatul al cincilea:</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>În orice triunghi suma unghiurilor interne este 180°.</b></p>
<p><b>Demonstrație.</b> Fie ABC un triunghi. Prin vârful C duc paralela r la latura AB. Unghiurile pe care r le formează cu laturile CA și CB sunt alterne interne cu unghiurile A și B ale triunghiului (față de secantele CA și CB): deci sunt congruente cu A și cu B. Împreună cu unghiul C, aceste unghiuri formează un <b>unghi alungit</b>: A + B + C = 180°. ∎</p>
<p>Consecințe:</p>
<ul>
<li><b>Unghiul extern</b>: într-un triunghi, un unghi extern este egal cu <b>suma celor două unghiuri interne neadiacente</b> (pentru că 180° − C = A + B).</li>
<li><b>Poligon cu n laturi</b>: se împarte în (n − 2) triunghiuri, deci suma unghiurilor interne este <b>(n − 2) · 180°</b>. Patrulater: 360°; pentagon: 540°; hexagon: 720°.</li>
<li>Suma <b>unghiurilor externe</b> ale unui poligon convex (câte unul pe vârf) este întotdeauna <b>360°</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Paralelograme",
      html: `<p>Un <b>paralelogram</b> este un patrulater cu <b>laturile opuse paralele</b>. Din această singură definiție, cu teoremele despre unghiurile dintre paralele și congruența triunghiurilor, se demonstrează proprietățile lui:</p>
<ul>
<li>laturile opuse sunt <b>congruente</b>;</li>
<li>unghiurile opuse sunt <b>congruente</b>, iar cele adiacente unei laturi sunt <b>suplementare</b>;</li>
<li><b>diagonalele</b> se înjumătățesc reciproc (în mijlocul lor comun).</li>
</ul>
<p>Este valabilă și reciproca: un patrulater este paralelogram dacă are laturile opuse congruente, sau două laturi opuse paralele și congruente, sau diagonalele care se înjumătățesc.</p>
<p><b>Paralelograme particulare</b>:</p>
<ul>
<li><b>Dreptunghi</b>: patru unghiuri drepte; diagonalele sunt <b>congruente</b>.</li>
<li><b>Romb</b>: patru laturi congruente; diagonalele sunt <b>perpendiculare</b> și sunt bisectoarele unghiurilor.</li>
<li><b>Pătrat</b>: dreptunghi și romb în același timp (patru laturi și patru unghiuri congruente).</li>
</ul>
<p><b>Trapez</b>: patrulater cu <b>o singură pereche de laturi paralele</b> (bazele). Dacă laturile neparalele sunt congruente este <b>isoscel</b> (unghiuri congruente la bază, diagonale congruente); dacă o latură neparalelă este perpendiculară pe baze este <b>dreptunghic</b>. În orice trapez, unghiurile adiacente unei laturi neparalele sunt suplementare (interne de aceeași parte a secantei).</p>`
    },
    {
      type: "widget",
      title: "Potrivește proprietatea cu patrulaterul",
      widget: "match",
      options: { pairs: [
        ["Laturi opuse paralele și congruente", "Paralelogram"],
        ["Diagonale congruente care se înjumătățesc", "Dreptunghi"],
        ["Diagonale perpendiculare și patru laturi egale", "Romb"],
        ["Patru laturi și patru unghiuri congruente", "Pătrat"],
        ["O singură pereche de laturi paralele", "Trapez"]
      ] },
      caption: "Fiecare patrulater are proprietățile sale caracteristice."
    },
    {
      type: "svg",
      title: "Familia patrulaterelor",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="16" text-anchor="middle" font-weight="bold">
<rect x="210" y="14" width="180" height="40" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="300" y="40" fill="#312e81">Patrulater</text>
<rect x="60" y="110" width="150" height="40" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><text x="135" y="136" fill="#78350f">Trapez</text>
<rect x="390" y="110" width="170" height="40" rx="8" fill="#dcfce7" stroke="#166534" stroke-width="2"/><text x="475" y="136" fill="#14532d">Paralelogram</text>
<rect x="290" y="210" width="110" height="40" rx="8" fill="#fce7f3" stroke="#9d174d" stroke-width="2"/><text x="345" y="236" fill="#831843">Romb</text>
<rect x="450" y="210" width="130" height="40" rx="8" fill="#cffafe" stroke="#0e7490" stroke-width="2"/><text x="515" y="236" fill="#164e63">Dreptunghi</text>
<rect x="360" y="266" width="120" height="30" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="420" y="287" fill="#78350f">Pătrat</text>
</g>
<g stroke="#334155" stroke-width="2" fill="none">
<line x1="270" y1="54" x2="150" y2="110"/><line x1="330" y1="54" x2="450" y2="110"/>
<line x1="440" y1="150" x2="365" y2="210"/><line x1="500" y1="150" x2="515" y2="210"/>
<line x1="365" y1="250" x2="400" y2="266"/><line x1="515" y1="250" x2="460" y2="266"/>
</g>
<text x="20" y="215" font-size="14" fill="#475569">fiecare figură de jos are toate</text>
<text x="20" y="235" font-size="14" fill="#475569">proprietățile celei de deasupra</text>
</svg>`,
      caption: "Pătratul este romb și dreptunghi și paralelogram, dar nu invers."
    },
    {
      type: "example",
      title: "Exemplu practic: pantograful și lampa cu brațe",
      html: `<p><b>Pantograful</b> este un instrument făcut din bare articulate care formează un paralelogram: se folosea pentru a copia desene mărite sau micșorate. Funcționează pentru că, atunci când paralelogramul se deformează, laturile opuse rămân <b>paralele și de aceeași lungime</b>. Aceleași paralelograme articulate le vezi la lămpile de birou cu brațe, la elevatoarele auto și la pantografele trenurilor electrice: partea de sus rămâne paralelă cu baza în timp ce urcă și coboară.</p>
<p>Aici <b>nerigiditatea</b> paralelogramului (spre deosebire de triunghi) este un avantaj: tocmai este nevoie ca forma să se poată schimba.</p>`
    },
    {
      type: "example",
      title: "Exemplu: unghiurile unui paralelogram",
      html: `<p>Într-un paralelogram ABCD unghiul A măsoară <b>70°</b>. Cât măsoară celelalte unghiuri și, dacă AB = 12 cm și BC = 8 cm, care este perimetrul?</p>
<ul>
<li>Unghiul opus C este congruent cu A: <b>70°</b>.</li>
<li>Unghiul B este suplementar cu A: 180° − 70° = <b>110°</b>; și D = 110°.</li>
<li>Verificare: 70 + 110 + 70 + 110 = 360° ✔️</li>
<li>Perimetrul: 2(12 + 8) = <b>40 cm</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: unghiuri și paralele",
      questions: [
        { type: "num", q: "Două drepte paralele sunt tăiate de o secantă. Un unghi măsoară 65°: cât măsoară unghiul său altern intern?", answer: 65, unit: "°", explain: "Unghiurile alterne interne dintre paralele sunt congruente." },
        { type: "mc", q: "Două unghiuri interne de aceeași parte a secantei, între paralele, sunt…", options: ["congruente", "suplementare", "complementare"], answer: 1, explain: "Suma lor este 180° (unghi alungit)." },
        { type: "tf", q: "Dacă două drepte tăiate de o secantă formează unghiuri corespondente congruente, atunci sunt paralele.", answer: true, explain: "Este una dintre condițiile din teorema despre paralelism." }
      ]
    },
    {
      type: "decision",
      title: "Postulatul pe care nimeni nu reușea să-l demonstreze",
      html: `<p>Ești matematician la începutul secolului al XIX-lea. Postulatul al cincilea al lui Euclid („printr-un punct trece o singură paralelă la o dreaptă dată”) ți se pare prea complicat pentru a fi un postulat: de două mii de ani mii de savanți, de la Proclus la Saccheri, au încercat să-l <b>demonstreze</b> din celelalte patru, dar fiecare „demonstrație” ascunde o greșeală.</p>`,
      question: "Tu ce ai fi încercat?",
      options: [
        { label: "Să continui să caut o demonstrație", outcome: "Este drumul parcurs două milenii, fără succes: fiecare încercare presupunea (pe ascuns) ceva echivalent cu postulatul însuși." },
        { label: "Să presupun că este FALS și să văd dacă se ajunge la o contradicție", outcome: "Este ideea demonstrației prin reducere la absurd: dacă negarea lui duce la un absurd, postulatul este demonstrat. Dar ce se întâmplă dacă absurdul nu apare niciodată?" },
        { label: "Să-l accept ca postulat și să merg mai departe", outcome: "Este ceea ce a făcut Euclid, pe bună dreptate. Dar rămâne îndoiala: este într-adevăr singura geometrie posibilă?" }
      ],
      answer: 1,
      explain: "Saccheri (1733) a încercat chiar prin reducere la absurd, dar a crezut că a găsit o contradicție care nu exista. Apoi Gauss (în privat), Lobacevski (1829) și Bolyai (1832) au înțeles că, negând postulatul, nu apare nicio contradicție: apar geometrii neeuclidiene, la fel de coerente ca cea a lui Euclid. În secolul al XIX-lea Riemann a extins tabloul, iar în secolul al XX-lea Einstein a folosit o geometrie neeuclidiană pentru a descrie gravitația în relativitatea generală."
    },
    {
      type: "curiosity",
      title: "Știai că…? Triunghiuri cu trei unghiuri drepte",
      html: `<p>Pe suprafața Pământului poți construi un triunghi cu <b>trei unghiuri drepte</b>: pornești de la Polul Nord, cobori de-a lungul unui meridian până la ecuator, parcurgi un sfert din ecuator, apoi urci de-a lungul altui meridian până la Pol. Suma unghiurilor este 270°! Nu este o greșeală: pe sferă nu sunt valabile postulatele lui Euclid, pentru că acolo <b>nu există drepte paralele</b> (două „drepte”, adică cercuri mari, se întâlnesc întotdeauna). De aceea piloții de avion zboară pe traiectorii care pe hartă par curbe.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Broasca țestoasă din Logo",
      html: `<p>Suma <b>unghiurilor externe</b> ale oricărui poligon convex este <b>360°</b>: se înțelege mergând de-a lungul conturului. La fiecare vârf te întorci cu un anumit unghi, iar când ajungi înapoi în punctul de plecare ai făcut o tură completă. Este ideea de la baza limbajului de programare <i>Logo</i> („broasca țestoasă” a lui Seymour Papert, anii ’60): pentru a desena un pătrat, broasca țestoasă înaintează și se întoarce de 4 ori cu 90°.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege paralelismul și patrulaterele",
      intro: "Dacă numele unghiurilor te încurcă, încearcă să le legi de imagini și mișcări.",
      tabs: [
        {
          label: "🚂 Șine și treceri de pietoni",
          html: `<p>Dungile de la <b>trecerea de pietoni</b> sunt paralele; <b>strada</b> care le taie este secanta. Mergând dintr-o parte în alta te rotești mereu cu același unghi față de dungi. De aceea unghiurile corespondente sunt egale: „aceeași poziție = aceeași înclinare”. Unghiurile alterne interne sunt egale din același motiv (este suficientă o rotație cu o jumătate de tură în jurul mijlocului porțiunii de secantă). Unghiurile de aceeași parte formează împreună un unghi alungit, de 180°, ca cele două laturi ale unei uși deschise.</p>`
        },
        {
          label: "🐢 Broasca țestoasă care merge",
          html: `<p>Imaginează-ți că mergi de-a lungul conturului unui poligon și la fiecare vârf te întorci cu un unghi (<b>unghiul extern</b>). Când ajungi înapoi în punctul de plecare, cu fața în direcția inițială, te-ai rotit în total cu <b>360°</b>. Așadar suma unghiurilor externe este 360° <b>oricare ar fi numărul laturilor</b>.</p>
<p>Un poligon regulat cu n laturi are n unghiuri externe egale: fiecare măsoară 360°/n. Unghiul intern este 180° − 360°/n. Pentru hexagon: 180° − 60° = 120°; pentru octogon: 180° − 45° = 135°. Compară cu formula (n − 2) · 180°/n: se obține același rezultat.</p>`
        },
        {
          label: "🌍 Pe sferă (3D)",
          html: `<p>Rotește globul: triunghiul care pornește de la Polul Nord, coboară la ecuator la 0° longitudine, parcurge ecuatorul până la 90° est și urcă la Pol are <b>trei unghiuri drepte</b>. Pe o suprafață curbă, suma unghiurilor unui triunghi este mai mare de 180°: geometria lui Euclid este valabilă pentru plan, nu pentru sferă.</p>`,
          scene: "globe",
          options: { points: [ { lat: 90, lon: 0, label: "Polul Nord", color: "#ef4444" }, { lat: 0, lon: 0, label: "Ecuator 0°", color: "#2563eb" }, { lat: 0, lon: 90, label: "Ecuator 90° E", color: "#16a34a" } ], routes: [ { points: [0, 1, 2, 0], color: "#f97316" } ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta paralelismului",
      nodes: [
        { id: "v", label: "Postulatul al cincilea", x: 50, y: 6, color: "#ef4444", html: "Printr-un punct exterior unei drepte trece o singură paralelă.", why: "Euclid l-a formulat lung și puțin „evident”; două milenii s-a încercat deducerea lui din celelalte. Playfair (1795) i-a dat forma modernă." },
        { id: "par", label: "Drepte paralele", x: 20, y: 28, color: "#6366f1", html: "Drepte coplanare fără puncte comune.", why: "Existența se demonstrează fără postulatul al V-lea (unghiuri alterne congruente); unicitatea însă îl cere." },
        { id: "ang", label: "Unghiuri cu secantă", x: 50, y: 40, color: "#16a34a", html: "Alterne, corespondente, interne de aceeași parte.", why: "Sunt „traducerea” paralelismului în măsuri de unghiuri: permit să demonstrăm că două drepte sunt paralele măsurând unghiuri." },
        { id: "tri", label: "Suma unghiurilor = 180°", x: 80, y: 28, color: "#f59e0b", html: "În orice triunghi A + B + C = 180°.", why: "Se demonstrează ducând printr-un vârf paralela la latura opusă: depinde de postulatul al V-lea (pe sferă suma este mai mare de 180°)." },
        { id: "pol", label: "Unghiurile poligoanelor", x: 80, y: 55, color: "#a855f7", html: "Suma internă (n − 2)·180°, cea externă 360°.", why: "Un poligon se descompune în n − 2 triunghiuri; suma externă este o tură completă." },
        { id: "parall", label: "Paralelograme", x: 20, y: 62, color: "#0ea5e9", html: "Laturi opuse paralele: proprietăți ale laturilor, unghiurilor, diagonalelor.", why: "Toate proprietățile derivă din unghiurile alterne dintre paralele și din congruența triunghiurilor formate de o diagonală." },
        { id: "part", label: "Dreptunghi, romb, pătrat", x: 20, y: 88, color: "#22c55e", html: "Paralelograme cu proprietăți în plus.", why: "Adăugând o proprietate (unghiuri drepte, laturi egale) familia se restrânge: este logica clasificărilor." },
        { id: "trap", label: "Trapez", x: 55, y: 80, color: "#14b8a6", html: "O singură pereche de laturi paralele.", why: "Unghiurile adiacente laturii neparalele sunt interne de aceeași parte între bazele paralele și deci suplementare." },
        { id: "non", label: "Geometrii neeuclidiene", x: 85, y: 88, color: "#ec4899", html: "Geometrii în care postulatul al V-lea este fals.", why: "Lobacevski (1829), Bolyai (1832) și Riemann (1854): negat al V-lea, apar geometrii coerente. Einstein le folosește pentru gravitație." }
      ],
      edges: [
        ["v", "par", "reglementează"],
        ["par", "ang", "se traduce în"],
        ["ang", "tri", "demonstrează"],
        ["tri", "pol", "se generalizează la"],
        ["par", "parall", "definește"],
        ["parall", "part", "se specializează în"],
        ["par", "trap", "definește"],
        ["v", "non", "negat de"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: poligoane",
      questions: [
        { type: "num", q: "Cât este suma unghiurilor interne ale unui hexagon?", answer: 720, unit: "°", explain: "(6 − 2) · 180° = 720°." },
        { type: "num", q: "Într-un paralelogram un unghi măsoară 70°. Cât măsoară un unghi adiacent?", answer: 110, unit: "°", explain: "Unghiurile adiacente unei laturi sunt suplementare: 180° − 70° = 110°." },
        { type: "mc", q: "Diagonalele unui romb sunt…", options: ["perpendiculare", "întotdeauna congruente", "paralele"], answer: 0, explain: "În romb diagonalele sunt perpendiculare și sunt bisectoarele unghiurilor." }
      ]
    }
  ],
  glossary: [
    { t: "Drepte paralele", d: "Drepte coplanare care nu au puncte comune." },
    { t: "Secantă", d: "Dreaptă care taie două sau mai multe drepte." },
    { t: "Unghiuri alterne interne", d: "Unghiuri situate între cele două drepte, de părți opuse ale secantei." },
    { t: "Unghiuri corespondente", d: "Unghiuri în aceeași poziție față de cele două drepte și față de secantă." },
    { t: "Unghiuri de aceeași parte a secantei", d: "Unghiuri de aceeași parte a secantei, ambele interne sau ambele externe." },
    { t: "Unghi extern", d: "Unghi format de o latură a unui poligon și de prelungirea laturii adiacente." },
    { t: "Paralelogram", d: "Patrulater cu laturile opuse paralele." },
    { t: "Trapez", d: "Patrulater cu o singură pereche de laturi paralele (bazele)." },
    { t: "Geometrie neeuclidiană", d: "Geometrie în care nu este valabil postulatul al cincilea al lui Euclid." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Două drepte paralele sunt tăiate de o secantă. Două unghiuri interne de aceeași parte a secantei sunt…", options: ["suplementare", "congruente", "complementare"], answer: 0, explain: "Sunt de aceeași parte a secantei, iar suma lor este 180°." },
      { type: "num", q: "Într-un triunghi două unghiuri interne măsoară 50° și 60°. Cât măsoară unghiul extern adiacent celui de-al treilea unghi?", answer: 110, unit: "°", explain: "Unghiul extern este suma celor două unghiuri interne neadiacente: 50° + 60° = 110°." },
      { type: "num", q: "Care este suma unghiurilor interne ale unui pentagon?", answer: 540, unit: "°", explain: "(5 − 2) · 180° = 540°." },
      { type: "num", q: "Cât măsoară fiecare unghi intern al unui hexagon regulat?", answer: 120, unit: "°", explain: "720°/6 = 120°, sau 180° − 360°/6." },
      { type: "mc", q: "Care patrulater are diagonalele congruente care se înjumătățesc reciproc?", options: ["Dreptunghiul", "Rombul (nepătrat)", "Trapezul scalen"], answer: 0, explain: "Este o proprietate a dreptunghiului." },
      { type: "tf", q: "În orice paralelogram diagonalele sunt congruente.", answer: false, explain: "Sunt congruente doar în dreptunghi (și deci în pătrat). În general se înjumătățesc, dar au lungimi diferite." },
      { type: "mc", q: "Patrulaterul cu o singură pereche de laturi paralele se numește…", options: ["trapez", "paralelogram", "romb"], answer: 0, explain: "Bazele trapezului sunt laturile paralele." },
      { type: "num", q: "Un paralelogram are perimetrul 50 cm și o latură de 15 cm. Cât măsoară latura adiacentă?", answer: 10, unit: "cm", explain: "Semiperimetrul 25 cm: 25 − 15 = 10 cm." },
      { type: "order", q: "Pune în ordine pașii demonstrației că suma unghiurilor unui triunghi este 180°.", items: ["Printr-un vârf duc paralela la latura opusă", "Identific unghiurile alterne interne, congruente cu unghiurile triunghiului", "Cele trei unghiuri din acel vârf formează un unghi alungit", "Concluzionez: suma este 180°"], explain: "Ideea-cheie este paralela dusă printr-un vârf." },
      { type: "mc", q: "Pe o sferă, suma unghiurilor unui triunghi este…", options: ["mai mare de 180°", "exact 180°", "mai mică de 180°"], answer: 0, explain: "În geometria sferică (eliptică) suma depășește 180°: de exemplu 270° pentru un triunghi cu trei unghiuri drepte." }
    ]
  }
});
