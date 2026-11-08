TOPIC('ro', {
  id: "m3-mat-piano-cartesiano",
  title: "Planul cartezian",
  intro: "Bătălia navală, hărțile, GPS-ul, ecranele jocurilor video: pentru a indica un punct este suficientă o <b>pereche de numere</b>. Aceasta este ideea genială a <b>planului cartezian</b>, care unește geometria cu algebra. Vom învăța să folosim coordonatele, să calculăm distanțe și să desenăm <b>funcții</b> și <b>drepte</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Axe, origine, coordonate",
      html: `<p><b>Planul cartezian</b> este format din două axe numerice <b>perpendiculare</b>:</p>
<ul>
<li><b>axa x</b> (axa <b>absciselor</b>), orizontală;</li>
<li><b>axa y</b> (axa <b>ordonatelor</b>), verticală;</li>
<li>se intersectează în <b>originea O(0; 0)</b>.</li>
</ul>
<p>Fiecare punct P se determină printr-o <b>pereche ordonată</b> de numere, <b>coordonatele</b> sale: <b>P(x; y)</b>. Mai întâi se citește <b>abscisa</b> (deplasarea orizontală), apoi <b>ordonata</b> (deplasarea verticală). Ordinea contează: A(2; 5) și B(5; 2) sunt puncte diferite!</p>
<p>Axele împart planul în <b>patru cadrane</b>, numerotate în sens trigonometric (invers acelor de ceasornic):</p>
<ul>
<li>cadranul I: x &gt; 0, y &gt; 0 &nbsp;(+; +)</li>
<li>cadranul II: x &lt; 0, y &gt; 0 &nbsp;(−; +)</li>
<li>cadranul III: x &lt; 0, y &lt; 0 &nbsp;(−; −)</li>
<li>cadranul IV: x &gt; 0, y &lt; 0 &nbsp;(+; −)</li>
</ul>
<p>Punctele de pe axa x au y = 0; cele de pe axa y au x = 0.</p>`
    },
    {
      type: "svg",
      title: "Planul cartezian și cele patru cadrane",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#ffffff"/>
<g stroke="#e2e8f0" stroke-width="1">
<line x1="140" y1="20" x2="140" y2="320"/><line x1="180" y1="20" x2="180" y2="320"/><line x1="220" y1="20" x2="220" y2="320"/><line x1="260" y1="20" x2="260" y2="320"/><line x1="300" y1="20" x2="300" y2="320"/><line x1="340" y1="20" x2="340" y2="320"/><line x1="380" y1="20" x2="380" y2="320"/><line x1="420" y1="20" x2="420" y2="320"/><line x1="460" y1="20" x2="460" y2="320"/><line x1="500" y1="20" x2="500" y2="320"/>
<line x1="100" y1="50" x2="540" y2="50"/><line x1="100" y1="90" x2="540" y2="90"/><line x1="100" y1="130" x2="540" y2="130"/><line x1="100" y1="210" x2="540" y2="210"/><line x1="100" y1="250" x2="540" y2="250"/><line x1="100" y1="290" x2="540" y2="290"/>
</g>
<line x1="100" y1="170" x2="545" y2="170" stroke="#1f2937" stroke-width="3"/>
<polygon points="550,170 538,164 538,176" fill="#1f2937"/>
<line x1="320" y1="325" x2="320" y2="15" stroke="#1f2937" stroke-width="3"/>
<polygon points="320,10 314,22 326,22" fill="#1f2937"/>
<text x="555" y="190" font-size="20" fill="#1f2937" font-weight="bold">x</text>
<text x="330" y="22" font-size="20" fill="#1f2937" font-weight="bold">y</text>
<text x="305" y="190" font-size="16" fill="#1f2937">O</text>
<text x="470" y="40" font-size="18" fill="#2563eb" font-weight="bold">I (+;+)</text>
<text x="120" y="40" font-size="18" fill="#16a34a" font-weight="bold">II (−;+)</text>
<text x="120" y="315" font-size="18" fill="#dc2626" font-weight="bold">III (−;−)</text>
<text x="460" y="315" font-size="18" fill="#a855f7" font-weight="bold">IV (+;−)</text>
<line x1="440" y1="170" x2="440" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="320" y1="50" x2="440" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="440" cy="50" r="7" fill="#2563eb"/>
<text x="450" y="75" font-size="17" fill="#2563eb" font-weight="bold">A(3; 3)</text>
<circle cx="200" cy="90" r="7" fill="#16a34a"/>
<text x="150" y="80" font-size="17" fill="#16a34a" font-weight="bold">B(−3; 2)</text>
<circle cx="240" cy="250" r="7" fill="#dc2626"/>
<text x="180" y="275" font-size="17" fill="#dc2626" font-weight="bold">C(−2; −2)</text>
<circle cx="480" cy="210" r="7" fill="#a855f7"/>
<text x="490" y="235" font-size="17" fill="#a855f7" font-weight="bold">D(4; −1)</text>
<g font-size="13" fill="#475569" text-anchor="middle"><text x="360" y="188">1</text><text x="400" y="188">2</text><text x="440" y="188">3</text><text x="480" y="188">4</text><text x="280" y="188">−1</text><text x="240" y="188">−2</text><text x="200" y="188">−3</text></g>
</svg>`,
      caption: "Fiecare pătrat al grilei este o unitate. Pentru a-l găsi pe A(3; 3): 3 pași spre dreapta, apoi 3 în sus."
    },
    {
      type: "text",
      title: "Distanța dintre două puncte și mijlocul segmentului",
      html: `<ul>
<li><b>Segment orizontal</b> (același y): distanța = diferența absciselor în valoare absolută. A(1; 4), B(7; 4) → AB = |7 − 1| = <b>6</b>.</li>
<li><b>Segment vertical</b> (același x): diferența ordonatelor. C(2; −3), D(2; 5) → CD = |5 − (−3)| = <b>8</b>.</li>
<li><b>Segment oblic</b>: este ipotenuza unui triunghi dreptunghic! Se folosește <b>teorema lui Pitagora</b>:<br><b>AB = √[(x₂ − x₁)² + (y₂ − y₁)²]</b>.<br>A(1; 2), B(4; 6) → AB = √(3² + 4²) = √25 = <b>5</b>.</li>
<li><b>Mijlocul</b> M al segmentului AB: media coordonatelor: <b>M((x₁ + x₂)/2; (y₁ + y₂)/2)</b>. A(2; 1), B(8; 5) → M(5; 3).</li>
</ul>
<p>Cu ajutorul coordonatelor se pot calcula <b>perimetre și arii</b> ale poligoanelor desenate în plan.</p>`
    },
    {
      type: "widget",
      title: "Pitagora în plan",
      widget: "pythagoras",
      options: {},
      caption: "Catetele sunt deplasările orizontală (Δx) și verticală (Δy) dintre cele două puncte; ipotenuza este distanța lor."
    },
    {
      type: "quiz",
      title: "Mini-test: coordonate și distanțe",
      questions: [
        { type: "mc", q: "În ce cadran se află P(−4; 7)?", options: ["I", "II", "III", "IV"], answer: 1, explain: "x negativ și y pozitiv: cadranul II." },
        { type: "num", q: "Distanța dintre A(−2; 3) și B(6; 3)?", answer: 8, explain: "Aceeași ordonată: |6 − (−2)| = 8." },
        { type: "num", q: "Distanța dintre O(0; 0) și P(6; 8)?", answer: 10, explain: "√(36 + 64) = √100 = 10." }
      ]
    },
    {
      type: "text",
      title: "Funcțiile și graficele lor",
      html: `<p>O <b>funcție</b> este o relație care asociază fiecărei valori a lui <b>x</b> <b>una și numai una</b> dintre valorile lui <b>y</b>. Se scrie <b>y = f(x)</b>. Pentru a o desena: construiești un <b>tabel</b> de valori (x; y), marchezi punctele în plan și le unești.</p>
<ul>
<li><b>Proporționalitatea directă</b> <b>y = kx</b>: dacă x se dublează, y se dublează. Graficul este o <b>dreaptă care trece prin origine</b>. Exemplu: cost = 2 € × numărul de caiete.</li>
<li><b>Proporționalitatea inversă</b> <b>y = k/x</b>: dacă x se dublează, y se înjumătățește (xy = k constant). Graficul este o <b>ramură de hiperbolă</b>. Exemplu: timpul pentru o călătorie de 120 km = 120 / viteza.</li>
<li><b>Funcția liniară</b> <b>y = mx + q</b>: graficul este o <b>dreaptă</b>. Exemplu: taxi cu 3 € la pornire și 1,50 € pe km → y = 1,5x + 3.</li>
<li><b>Funcția pătratică</b> <b>y = ax²</b>: graficul este o <b>parabolă</b> cu vârful în origine. Exemplu: aria pătratului în funcție de latură.</li>
</ul>`
    },
    {
      type: "text",
      title: "Dreapta: y = mx + q",
      html: `<ul>
<li><b>m</b> este <b>coeficientul unghiular</b> (panta): cu cât urcă y când x crește cu 1. Dacă m &gt; 0 dreapta <b>urcă</b>, dacă m &lt; 0 <b>coboară</b>, dacă m = 0 este <b>orizontală</b>. Se calculează cu două puncte: <b>m = (y₂ − y₁) / (x₂ − x₁)</b>.</li>
<li><b>q</b> este <b>ordonata la origine</b> (intersecția cu axa): punctul în care dreapta taie axa y, adică (0; q).</li>
<li>Cazuri particulare: <b>y = k</b> este o dreaptă orizontală; <b>x = k</b> este o dreaptă verticală (nu este o funcție!); axa x are ecuația y = 0, axa y x = 0; <b>y = x</b> este bisectoarea cadranelor I și III.</li>
<li>Drepte <b>paralele</b>: același m (y = 2x + 1 și y = 2x − 5).</li>
<li>Drepte <b>perpendiculare</b>: m · m′ = −1 (y = 2x și y = −½x + 3).</li>
<li>Un punct <b>aparține</b> unei drepte dacă coordonatele sale verifică ecuația ei: P(2; 7) se află pe y = 3x + 1? 3·2 + 1 = 7 ✔️</li>
</ul>`
    },
    {
      type: "svg",
      title: "Drepte comparate",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#f8fafc"/>
<line x1="60" y1="190" x2="440" y2="190" stroke="#1f2937" stroke-width="2"/>
<line x1="250" y1="330" x2="250" y2="10" stroke="#1f2937" stroke-width="2"/>
<text x="445" y="195" font-size="16">x</text><text x="256" y="20" font-size="16">y</text>
<line x1="170" y1="350" x2="350" y2="-10" stroke="#2563eb" stroke-width="4"/>
<line x1="130" y1="350" x2="290" y2="30" stroke="#60a5fa" stroke-width="4" stroke-dasharray="10 6"/>
<line x1="60" y1="95" x2="440" y2="285" stroke="#dc2626" stroke-width="4"/>
<line x1="60" y1="110" x2="440" y2="110" stroke="#16a34a" stroke-width="4"/>
<circle cx="250" cy="190" r="6" fill="#1f2937"/>
<circle cx="250" cy="110" r="6" fill="#16a34a"/>
<text x="460" y="60" font-size="18" fill="#2563eb" font-weight="bold">y = 2x  (urcă, trece prin O)</text>
<text x="460" y="95" font-size="18" fill="#60a5fa" font-weight="bold">y = 2x + 2  (paralelă)</text>
<text x="460" y="130" font-size="18" fill="#dc2626" font-weight="bold">y = −½x  (coboară,</text>
<text x="478" y="152" font-size="18" fill="#dc2626" font-weight="bold">perpendiculară pe y = 2x)</text>
<text x="460" y="190" font-size="18" fill="#16a34a" font-weight="bold">y = 2  (orizontală, m = 0)</text>
<text x="460" y="240" font-size="15" fill="#475569">1 pătrățel = 40 px</text>
</svg>`,
      caption: "Cele două drepte albastre au aceeași pantă m = 2: sunt paralele. Cea roșie are m = −½: 2 · (−½) = −1, deci este perpendiculară pe cea albastră."
    },
    {
      type: "example",
      title: "Exemplu practic: două abonamente comparate",
      html: `<p>Sala A: <b>30 € taxă de înscriere + 20 € pe lună</b>. Sala B: <b>fără taxă de înscriere, 26 € pe lună</b>.</p>
<ul>
<li>A: y = 20x + 30 &nbsp;&nbsp; B: y = 26x</li>
<li>Când costă la fel? 20x + 30 = 26x → 6x = 30 → <b>x = 5 luni</b> (cost 130 €).</li>
<li>În grafic este punctul în care cele două drepte se <b>intersectează</b>: (5; 130). Înainte de 5 luni se merită B, după aceea se merită A.</li>
</ul>
<table><tr><th>luni</th><th>1</th><th>3</th><th>5</th><th>8</th><th>12</th></tr><tr><td>A</td><td>50</td><td>90</td><td>130</td><td>190</td><td>270</td></tr><tr><td>B</td><td>26</td><td>78</td><td>130</td><td>208</td><td>312</td></tr></table>`
    },
    {
      type: "example",
      title: "Exemplu practic: un poligon în plan",
      html: `<p>Desenează punctele A(1; 1), B(7; 1), C(7; 5), D(1; 5).</p>
<ul>
<li>Este un <b>dreptunghi</b>: AB = 7 − 1 = 6, BC = 5 − 1 = 4.</li>
<li>Perimetrul = 2·(6 + 4) = <b>20</b> unități; Aria = 6 · 4 = <b>24</b> unități².</li>
<li>Diagonala AC = √(6² + 4²) = √52 ≈ <b>7,21</b>.</li>
<li>Centrul (mijlocul lui AC) = ((1 + 7)/2; (1 + 5)/2) = <b>(4; 3)</b>.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Descartes și musca",
      html: `<p>Planul poartă numele filosofului și matematicianului francez <b>René Descartes</b> (în latină <i>Cartesius</i>, 1596–1650), care l-a descris în <i>Geometria</i>, un anexă a <i>Discursului asupra metodei</i> (1637). O legendă spune că ideea i-a venit în pat, observând o <b>muscă</b> pe tavan și întrebându-se cum i-ar putea descrie poziția cu două numere: distanțele față de doi pereți! În aceiași ani a ajuns la ea, independent, un alt francez: <b>Pierre de Fermat</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Coordonate peste tot",
      html: `<ul>
<li><b>Ecranul</b> pe care citești este o grilă de pixeli cu coordonate: dar în calculatoare originea este în <b>stânga sus</b>, iar y crește în jos!</li>
<li><b>GPS-ul</b> folosește latitudinea și longitudinea: coordonate pe o sferă. Roma se află aproximativ la (41,9° N; 12,5° E).</li>
<li><b>Șahul</b> folosește coordonate: „Calul în f3” = coloana f, rândul 3.</li>
<li>Multe orașe sunt construite în grilă, ca <b>Manhattan</b> (planul din 1811) sau centrul <b>Torinoului</b>, care păstrează planul ortogonal al castrumului roman <i>Augusta Taurinorum</i>.</li>
</ul>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>P(x; y): mai întâi abscisa (orizontală), apoi ordonata (verticală).</li>
<li>Distanța: AB = √[(Δx)² + (Δy)²]; mijlocul = media coordonatelor.</li>
<li>y = kx → dreaptă prin origine (proporționalitate directă); y = k/x → hiperbolă (proporționalitate inversă).</li>
<li>y = mx + q: m = panta, q = ordonata la origine. Paralele: același m. Perpendiculare: m·m′ = −1.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege planul cartezian",
      intro: "Dacă axele și formulele ți se par abstracte, încearcă cu un joc, cu globul pământesc sau cu o scară.",
      tabs: [
        {
          label: "🚢 Bătălia navală",
          html: `<p>În <b>bătălia navală</b> spui „B5”: o <b>coloană</b> (literă) și un <b>rând</b> (număr). Este chiar o pereche de coordonate!</p>
<p>În planul cartezian este la fel, dar: coloanele sunt numere (chiar și negative), originea este în centru și se spune mai întâi <b>x</b> (coloana) și apoi <b>y</b> (rândul). Truc ca să ții minte ordinea: „<b>mai întâi mergi pe coridor, apoi urci scările</b>” (mai întâi orizontal, apoi vertical), sau „x vine înaintea lui y în alfabet”.</p>
<p>Joacă-te cu un prieten: desenați o grilă de la −5 la 5 și ascundeți 3 nave. „Trageți” cu perechi ca (−2; 3)!</p>`
        },
        {
          label: "🌍 Coordonatele Pământului",
          html: `<p>Pământul folosește un „plan cartezian” înfășurat pe o sferă: <b>longitudinea</b> (est-vest, ca x) și <b>latitudinea</b> (nord-sud, ca y). „Originea” este intersecția dintre <b>ecuator</b> și <b>meridianul Greenwich</b>, în mijlocul Oceanului Atlantic, în Golful Guineei.</p>
<p>Cele patru „cadrane” sunt: Nord-Est (Italia), Nord-Vest (SUA), Sud-Vest (Brazilia), Sud-Est (Australia). Rotește globul și găsește punctele.</p>`,
          scene: "globe",
          options: { points: [
            { lat: 0, lon: 0, label: "Origine (0°; 0°)", color: "#1f2937" },
            { lat: 41.9, lon: 12.5, label: "Roma (N; E)", color: "#2563eb" },
            { lat: 40.7, lon: -74, label: "New York (N; V)", color: "#16a34a" },
            { lat: -22.9, lon: -43.2, label: "Rio de Janeiro (S; V)", color: "#dc2626" },
            { lat: -33.9, lon: 151.2, label: "Sydney (S; E)", color: "#a855f7" }
          ] }
        },
        {
          label: "🪜 Panta ca o scară",
          html: `<p>Coeficientul unghiular <b>m</b> este ca <b>panta unei scări sau a unui drum</b>: „cât urci la fiecare pas înainte”.</p>
<ul>
<li>m = 1: la fiecare pas înainte urci 1 (pantă de 100%, 45°).</li>
<li>m = 0,1: la fiecare 10 m înainte urci 1 m: este panta de <b>10%</b> de pe indicatoarele rutiere!</li>
<li>m negativ: drumul coboară.</li>
</ul>
<p>În Statele Unite se învață cu formula „<b>rise over run</b>”: urcarea împărțită la parcurgere, m = Δy / Δx.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0fdf4"/>
<path d="M60 210 L140 210 L140 170 L220 170 L220 130 L300 130 L300 90 L380 90 L380 50" fill="none" stroke="#166534" stroke-width="5"/>
<line x1="60" y1="210" x2="380" y2="50" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 6"/>
<text x="100" y="232" font-size="16" text-anchor="middle" fill="#b45309">run = 2</text>
<text x="165" y="195" font-size="16" fill="#dc2626">rise = 1</text>
<text x="430" y="110" font-size="22" fill="#1f2937" font-weight="bold">m = rise / run</text>
<text x="430" y="145" font-size="22" fill="#2563eb" font-weight="bold">= 1/2</text>
</svg>`
        },
        {
          label: "🔗 Asociază ecuația cu graficul",
          html: `<p>Leagă fiecare ecuație de descrierea graficului ei.</p>`,
          widget: "match",
          options: { pairs: [
            ["y = 3x", "dreaptă prin origine care urcă"],
            ["y = −2x + 4", "dreaptă care coboară și taie axa y în 4"],
            ["y = 5", "dreaptă orizontală"],
            ["x = −1", "dreaptă verticală"],
            ["y = 12/x", "hiperbolă (proporționalitate inversă)"],
            ["y = x²", "parabolă cu vârful în O"]
          ] }
        },
        {
          "label": "🇬🇧 «Along the corridor, then up the stairs» (Anglia)",
          "html": "<p>Care este x și care este y? În <b>Anglia</b> elevii țin minte cu o frază: <b>«along the corridor, then up the stairs»</b>, adică <b>«mai întâi pe coridor, apoi sus pe scări»</b>.</p><ol><li>Pornești din <b>origine</b> O, ca și cum ai fi la intrarea unei clădiri.</li><li><b>Mai întâi</b> mergi pe coridor: este <b>x</b> (orizontală). În punctul (3; 5) faci 3 pași spre dreapta.</li><li><b>Apoi</b> urci scările: este <b>y</b> (verticală). Urci 5 trepte.</li></ol><p>Nu poți urca scările înainte de a ajunge în locul potrivit de pe coridor: de aceea <b>x vine întotdeauna primul</b>. Și numerele negative? În punctul (−2; −4) coridorul merge spre <b>stânga</b>, iar scările coboară <b>în pivniță</b>!</p><p>🎯 Unde ajungi cu (−3; 2)? Dar cu (4; −1)? În ce cadran se află fiecare punct?</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"98\" y1=\"20\" x2=\"98\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"132\" y1=\"20\" x2=\"132\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"166\" y1=\"20\" x2=\"166\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"234\" y1=\"20\" x2=\"234\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"268\" y1=\"20\" x2=\"268\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"302\" y1=\"20\" x2=\"302\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"336\" y1=\"20\" x2=\"336\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"404\" y1=\"20\" x2=\"404\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"438\" y1=\"20\" x2=\"438\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"472\" y1=\"20\" x2=\"472\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"506\" y1=\"20\" x2=\"506\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"540\" y1=\"20\" x2=\"540\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"284\" x2=\"560\" y2=\"284\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"250\" x2=\"560\" y2=\"250\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"216\" x2=\"560\" y2=\"216\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"182\" x2=\"560\" y2=\"182\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"148\" x2=\"560\" y2=\"148\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"114\" x2=\"560\" y2=\"114\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"80\" x2=\"560\" y2=\"80\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"46\" x2=\"560\" y2=\"46\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"250\" x2=\"560\" y2=\"250\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"200\" y1=\"290\" x2=\"200\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"565\" y=\"255\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">x</text><text x=\"206\" y=\"24\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">y</text><line x1=\"200\" y1=\"246\" x2=\"302\" y2=\"246\" stroke=\"#16a34a\" stroke-width=\"8\"/><line x1=\"302\" y1=\"250\" x2=\"302\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"5\"/><line x1=\"292\" y1=\"216\" x2=\"312\" y2=\"216\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"182\" x2=\"312\" y2=\"182\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"148\" x2=\"312\" y2=\"148\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"114\" x2=\"312\" y2=\"114\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"80\" x2=\"312\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"4\"/><circle cx=\"302\" cy=\"80\" r=\"8\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"2\"/><text x=\"316\" y=\"74\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">(3; 5)</text><text x=\"222\" y=\"280\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">1) along the corridor →</text><text x=\"340\" y=\"150\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#ea580c\" font-weight=\"bold\">2) up the stairs ↑</text><circle cx=\"200\" cy=\"250\" r=\"5\" fill=\"#334155\" stroke=\"none\" stroke-width=\"2\"/><text x=\"182\" y=\"270\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">O</text></svg>"
        },
        {
          "label": "🇺🇸 Panta «rise over run» (SUA)",
          "html": "<p>În <b>Statele Unite</b> coeficientul unghiular m (<b>panta</b>, în engleză <i>slope</i>) se învață cu o rimă: <b>«rise over run»</b>, adică «urcarea împărțită la parcurgere».</p><ul><li><b>run</b> = cât te deplasezi pe orizontală (diferența x-urilor);</li><li><b>rise</b> = cât urci pe verticală (diferența y-ilor);</li><li><b>m = rise : run</b>.</li></ul><p><b>Exemplu</b>: dreapta trece prin A(1; 2) și B(5; 4).</p><ol><li>run = 5 − 1 = <b>4</b></li><li>rise = 4 − 2 = <b>2</b></li><li>m = 2 / 4 = <b>1/2</b>: la fiecare pas înainte urci o jumătate de pătrățel.</li><li>Găsește q cu punctul A: 2 = ½ · 1 + q → q = 3/2. Dreapta este <b>y = ½x + 3/2</b>. Verificare cu B: ½ · 5 + 3/2 = 4 ✔</li></ol><p>Cazuri speciale: dacă dreapta <b>coboară</b>, rise este <b>negativ</b> și m &lt; 0; dacă este <b>orizontală</b>, rise = 0 și m = 0; dacă este <b>verticală</b>, run = 0 și nu se poate împărți la zero: panta nu există.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"200\" y1=\"10\" x2=\"200\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"260\" y1=\"10\" x2=\"260\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"320\" y1=\"10\" x2=\"320\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"380\" y1=\"10\" x2=\"380\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"440\" y1=\"10\" x2=\"440\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"500\" y1=\"10\" x2=\"500\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"260\" x2=\"520\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"210\" x2=\"520\" y2=\"210\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"160\" x2=\"520\" y2=\"160\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"110\" x2=\"520\" y2=\"110\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"60\" x2=\"520\" y2=\"60\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"10\" x2=\"520\" y2=\"10\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"260\" x2=\"530\" y2=\"260\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"80\" y1=\"270\" x2=\"80\" y2=\"5\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"140\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><text x=\"200\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">2</text><text x=\"260\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">3</text><text x=\"320\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">4</text><text x=\"380\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">5</text><text x=\"440\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">6</text><text x=\"500\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">7</text><text x=\"68\" y=\"215\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">1</text><text x=\"68\" y=\"165\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">2</text><text x=\"68\" y=\"115\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">3</text><text x=\"68\" y=\"65\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">4</text><text x=\"68\" y=\"15\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">5</text><line x1=\"80\" y1=\"185\" x2=\"500\" y2=\"10\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"140\" y1=\"160\" x2=\"380\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"5\"/><line x1=\"380\" y1=\"160\" x2=\"380\" y2=\"60\" stroke=\"#ea580c\" stroke-width=\"5\"/><circle cx=\"140\" cy=\"160\" r=\"7\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"380\" cy=\"60\" r=\"7\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><text x=\"130\" y=\"146\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">A(1; 2)</text><text x=\"366\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">B(5; 4)</text><text x=\"260\" y=\"184\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#16a34a\" text-anchor=\"middle\" font-weight=\"bold\">run = 4</text><text x=\"390\" y=\"115\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#ea580c\" font-weight=\"bold\">rise = 2</text><text x=\"380\" y=\"200\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">m = rise / run</text><text x=\"380\" y=\"226\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">m = 2 / 4 = 1/2</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta planului cartezian",
      nodes: [
        { id: "retta", label: "Axa numerică", x: 50, y: 6, color: "#64748b", html: "O dreaptă cu origine, sens și unitate: fiecare punct este un număr.", why: "Vine de la numerele relative: o singură dreaptă ajunge pentru o dimensiune. Pentru plan sunt necesare două." },
        { id: "piano", label: "Plan cartezian", x: 50, y: 26, color: "#2563eb", html: "Două axe numerice perpendiculare care se intersectează în origine.", why: "Descris de Descartes în <i>Géométrie</i> (1637) și, independent, de Fermat. Chiar și cei vechi foloseau ceva asemănător: Ptolemeu (secolul al II-lea) dădea latitudinea și longitudinea orașelor." },
        { id: "coordinate", label: "Coordonate P(x; y)", x: 18, y: 46, color: "#16a34a", html: "Abscisa și ordonata: „buletinul” unui punct.", why: "„Abscisă” vine din latinescul <i>abscissa</i>, „tăiată” (un segment tăiat pe axă); „coordonate” a fost folosit de Leibniz în 1692." },
        { id: "quadranti", label: "Cadrane", x: 10, y: 70, color: "#22c55e", html: "Cele 4 regiuni ale planului, cu semnele (+;+), (−;+), (−;−), (+;−).", why: "Sunt o consecință a numerelor relative de pe axe; se numerotează în sens trigonometric, același sens în care se măsoară unghiurile în matematică." },
        { id: "distanza", label: "Distanță și mijloc", x: 36, y: 72, color: "#f59e0b", html: "AB = √[(Δx)² + (Δy)²]; M = media coordonatelor.", why: "Formula distanței este teorema lui Pitagora (secolul al VI-lea î.Hr.) aplicată triunghiului dreptunghic format din deplasările orizontală și verticală." },
        { id: "funzioni", label: "Funcții y = f(x)", x: 72, y: 46, color: "#a855f7", html: "Fiecărui x îi corespunde un singur y; graficul este mulțimea punctelor (x; f(x)).", why: "Termenul „funcție” a fost introdus de Leibniz (1673), iar notația f(x) de Euler (1734). Planul cartezian permite să „vedem” o lege numerică." },
        { id: "rette", label: "Drepte y = mx + q", x: 64, y: 72, color: "#ef4444", html: "m = panta, q = ordonata la origine. Paralele: același m; perpendiculare: m·m′ = −1.", why: "Orice ecuație de gradul întâi în x și y are ca grafic o dreaptă: este marea descoperire a lui Descartes, care transformă problemele geometrice în ecuații." },
        { id: "proporzionalita", label: "Proporționalitate", x: 88, y: 70, color: "#0ea5e9", html: "Directă y = kx (dreaptă prin O); inversă y = k/x (hiperbolă).", why: "Leagă planul de proporțiile studiate în clasa a doua: constanta k este raportul (directă) sau produsul (inversă) dintre x și y." },
        { id: "applicazioni", label: "Aplicații", x: 50, y: 92, color: "#14b8a6", html: "GPS, ecrane, grafice științifice și economice, jocuri video, robotică.", why: "Ori de câte ori o poziție sau o relație dintre două mărimi trebuie descrisă prin numere, se folosesc coordonate: de la pixeli la hărțile digitale." }
      ],
      edges: [
        ["retta", "piano", "două perpendiculare"],
        ["piano", "coordinate", "fiecare punct are"],
        ["coordinate", "quadranti", "semnul indică"],
        ["coordinate", "distanza", "permit calcularea"],
        ["piano", "funzioni", "reprezintă"],
        ["funzioni", "rette", "liniare"],
        ["funzioni", "proporzionalita", "cazuri"],
        ["rette", "applicazioni", "modelează"],
        ["distanza", "applicazioni", "folosită în"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: drepte și funcții",
      questions: [
        { type: "mc", q: "Dreapta y = −3x + 2 taie axa y în punctul…", options: ["(0; 2)", "(2; 0)", "(0; −3)"], answer: 0, explain: "Ordonata la origine q = 2: punctul (0; 2)." },
        { type: "mc", q: "Care dreaptă este paralelă cu y = 4x − 1?", options: ["y = −4x + 1", "y = 4x + 7", "y = ¼x"], answer: 1, explain: "Dreptele paralele au același coeficient unghiular m = 4." },
        { type: "tf", q: "Punctul P(3; 10) aparține dreptei y = 3x + 1.", answer: true, explain: "3·3 + 1 = 10 ✔️" }
      ]
    }
  ],
  glossary: [
    { t: "Plan cartezian", d: "Plan cu două axe numerice perpendiculare care se intersectează în origine." },
    { t: "Abscisa", d: "Prima coordonată (x): deplasarea orizontală." },
    { t: "Ordonata", d: "A doua coordonată (y): deplasarea verticală." },
    { t: "Originea", d: "Punctul O(0; 0), intersecția axelor." },
    { t: "Cadran", d: "Fiecare dintre cele patru părți în care axele împart planul." },
    { t: "Funcție", d: "Relație care asociază fiecărui x unul și numai un y." },
    { t: "Coeficient unghiular", d: "Numărul m din y = mx + q: indică panta dreptei." },
    { t: "Ordonata la origine", d: "Numărul q din y = mx + q: locul unde dreapta taie axa y." },
    { t: "Hiperbola", d: "Graficul proporționalității inverse y = k/x." },
    { t: "Parabola", d: "Graficul funcției y = ax²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Punctul (0; −5) se află…", options: ["pe axa x", "pe axa y", "în cadranul IV"], answer: 1, explain: "x = 0: punctul este pe axa y." },
      { type: "mc", q: "În ce cadran punctele au x > 0 și y < 0?", options: ["I", "II", "III", "IV"], answer: 3, explain: "(+; −): cadranul IV." },
      { type: "num", q: "Distanța dintre A(1; 1) și B(4; 5)?", answer: 5, explain: "√(3² + 4²) = √25 = 5." },
      { type: "mc", q: "Mijlocul segmentului A(−2; 4), B(6; 0)?", options: ["(2; 2)", "(4; 4)", "(2; 4)"], answer: 0, explain: "((−2 + 6)/2; (4 + 0)/2) = (2; 2)." },
      { type: "num", q: "Coeficientul unghiular al dreptei prin A(1; 3) și B(3; 11)?", answer: 4, explain: "m = (11 − 3)/(3 − 1) = 8/2 = 4." },
      { type: "tf", q: "Graficul lui y = 5x trece prin origine.", answer: true, explain: "Pentru x = 0, y = 0: proporționalitate directă." },
      { type: "mc", q: "y = 24/x reprezintă…", options: ["o proporționalitate directă", "o proporționalitate inversă", "o parabolă"], answer: 1, explain: "xy = 24 constant: proporționalitate inversă (hiperbolă)." },
      { type: "mc", q: "Care dreaptă este perpendiculară pe y = 3x?", options: ["y = 3x + 1", "y = −⅓x", "y = −3x"], answer: 1, explain: "3 · (−⅓) = −1." },
      { type: "num", q: "Pentru ce valoare a lui x dreapta y = 2x − 8 intersectează axa x?", answer: 4, explain: "y = 0 → 2x = 8 → x = 4." },
      { type: "num", q: "Aria triunghiului cu vârfurile O(0; 0), A(6; 0), B(0; 4)?", answer: 12, explain: "Triunghi dreptunghic cu catetele 6 și 4: 6·4/2 = 12." },
      { type: "text", q: "Cum se numește prima coordonată a unui punct?", answer: ["abscisa", "abscisă", "absciza"], explain: "Abscisa (x); a doua este ordonata (y)." }
    ],
    gen: [["pythagoras", 2]]
  }
});
