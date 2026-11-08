TOPIC('ro', {
  id: "m3-mat-cerchio",
  title: "Cercul și discul",
  intro: "Roți, pizza, ceasuri, monede, pista de atletism: cercul este peste tot. Vom învăța părțile lui, vom descoperi misteriosul număr <b>π</b> (pi) și vom calcula <b>lungimea cercului</b>, <b>aria discului</b>, a <b>arcelor</b>, a <b>sectoarelor</b> și a <b>coroanelor circulare</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Cercul și discul: nu sunt același lucru",
      html: `<p><b>Cercul</b> este <b>linia</b> închisă formată din toate punctele planului aflate la <b>aceeași distanță</b> de un punct fix, <b>centrul</b>. <b>Discul</b> este <b>partea de plan</b> închisă de cerc (cercul inclus).</p>
<p>Gândește-te la un inel 💍 (cercul: are doar o lungime) și la o monedă 🪙 (discul: are o arie).</p>
<ul>
<li><b>Raza</b> (r): segmentul de la centru la un punct al cercului.</li>
<li><b>Diametrul</b> (d): segmentul care trece prin centru și unește două puncte ale cercului: <b>d = 2r</b>. Este cea mai lungă coardă.</li>
<li><b>Coarda</b>: segmentul care unește două puncte oarecare ale cercului.</li>
<li><b>Arcul</b>: partea de cerc cuprinsă între două puncte.</li>
<li><b>Unghiul la centru</b>: unghi cu vârful în centru.</li>
<li><b>Sectorul de disc</b>: partea de disc dintre două raze (o „felie de pizza”).</li>
<li><b>Segmentul de disc</b>: partea de disc dintre o coardă și un arc.</li>
<li><b>Coroana circulară</b>: partea de plan dintre două cercuri cu același centru (<b>concentrice</b>), ca un CD sau un covrig.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Părțile discului",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fffbeb"/>
<circle cx="200" cy="160" r="130" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<path d="M200 160 L330 160 A130 130 0 0 0 292 68 Z" fill="#f97316" opacity="0.85"/>
<path d="M95 236 A130 130 0 0 0 200 290 L95 236 Z" fill="#60a5fa" opacity="0.9"/>
<line x1="95" y1="236" x2="200" y2="290" stroke="#1d4ed8" stroke-width="3"/>
<line x1="70" y1="160" x2="200" y2="160" stroke="#16a34a" stroke-width="4"/>
<line x1="108" y1="68" x2="292" y2="252" stroke="#7c3aed" stroke-width="4" stroke-dasharray="10 5"/>
<circle cx="200" cy="160" r="6" fill="#1f2937"/>
<text x="185" y="185" font-size="16" fill="#1f2937" font-weight="bold">O</text>
<text x="400" y="50" font-size="18" fill="#b45309" font-weight="bold">— cercul (linia)</text>
<text x="400" y="85" font-size="18" fill="#92400e" font-weight="bold">▇ discul (suprafața)</text>
<text x="400" y="120" font-size="18" fill="#16a34a" font-weight="bold">— raza r</text>
<text x="400" y="155" font-size="18" fill="#7c3aed" font-weight="bold">- - diametrul d = 2r</text>
<text x="400" y="190" font-size="18" fill="#ea580c" font-weight="bold">▇ sector de disc</text>
<text x="400" y="225" font-size="18" fill="#1d4ed8" font-weight="bold">— coarda și ▇ segment de disc</text>
<text x="400" y="260" font-size="18" fill="#c2410c">∠ unghiul la centru al sectorului</text>
</svg>`,
      caption: "Sectorul portocaliu este delimitat de două raze și de un arc; segmentul albastru de o coardă și de un arc."
    },
    {
      type: "text",
      title: "Drepte și cerc, unghiuri înscrise în cerc",
      html: `<p>O dreaptă față de un cerc poate fi (d = distanța dreptei față de centru):</p>
<ul>
<li><b>exterioară</b>: niciun punct comun (d &gt; r);</li>
<li><b>tangentă</b>: un singur punct comun (d = r); tangenta este <b>perpendiculară pe rază</b> în punctul de contact;</li>
<li><b>secantă</b>: două puncte comune (d &lt; r).</li>
</ul>
<p>Un <b>unghi înscris în cerc</b> are vârful pe cerc și laturile care îl taie. Proprietate importantă: <b>un unghi înscris în cerc este jumătate din unghiul la centru</b> care subîntinde același arc. Consecință: orice unghi înscris în cerc care subîntinde un <b>semicerc</b> este <b>drept</b> (90°): orice triunghi înscris cu o latură pe diametru este dreptunghic (teoremă atribuită lui <b>Thales</b>).</p>`
    },
    {
      type: "text",
      title: "Numărul π și lungimea cercului",
      html: `<p>Ia un obiect rotund oarecare, măsoară cu un sfoară lungimea cercului C și diametrul d și calculează C : d. Cu o doză, o farfurie sau o roată vei obține mereu aproximativ <b>3,14</b>! Acest număr se numește <b>π</b> (pi):</p>
<p style="text-align:center;font-size:1.2em"><b>π = C : d ≈ 3,14159265…</b></p>
<p>π este un număr <b>irațional</b>: are o infinitate de zecimale care nu se repetă niciodată cu regularitate. În calcule se folosește de obicei <b>3,14</b>.</p>
<p>Formule:</p>
<ul>
<li><b>C = π · d = 2 · π · r</b></li>
<li>Formule inverse: <b>d = C : π</b>, <b>r = C : (2π)</b></li>
<li><b>Lungimea unui arc</b> cu unghiul la centru α: <b>l = C · α / 360°</b>. Arcul este proporțional cu unghiul său: jumătate din unghi, jumătate din arc.</li>
</ul>
<p>Exemplu: r = 5 cm → C = 2 · 3,14 · 5 = <b>31,4 cm</b>. Un arc de 72° este 72/360 = 1/5 → 31,4 : 5 = <b>6,28 cm</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: părți și cerc",
      questions: [
        { type: "mc", q: "Cea mai lungă coardă a unui cerc este…", options: ["raza", "diametrul", "arcul"], answer: 1, explain: "Diametrul trece prin centru și este coarda maximă." },
        { type: "num", q: "Lungimea cercului cu raza de 10 cm (π = 3,14)?", answer: 62.8, tol: 0.01, unit: "cm", explain: "2 · 3,14 · 10 = 62,8 cm." },
        { type: "tf", q: "O dreaptă tangentă are două puncte comune cu cercul.", answer: false, explain: "Tangenta are un singur punct comun; secanta are două." }
      ]
    },
    {
      type: "text",
      title: "Aria discului, a sectorului și a coroanei",
      html: `<ul>
<li><b>Aria discului</b>: <b>A = π · r²</b>. Formula inversă: <b>r = √(A : π)</b>.</li>
<li><b>Aria sectorului de disc</b> cu unghiul α: <b>A<sub>s</sub> = π r² · α / 360°</b>. Un sfert de disc (90°) are aria πr²/4.</li>
<li>Formulă alternativă a sectorului: <b>A<sub>s</sub> = l · r / 2</b> (ca un „triunghi” cu baza arcul și înălțimea raza).</li>
<li><b>Aria coroanei circulare</b>: <b>A = π (R² − r²)</b>, unde R este raza exterioară și r cea interioară.</li>
</ul>
<p>⚠️ Atenție: dacă raza se <b>dublează</b>, lungimea cercului se dublează, dar aria devine de <b>4 ori</b> mai mare (pentru că r este la pătrat)!</p>
<p>Exemplu: r = 6 cm → A = 3,14 · 36 = <b>113,04 cm²</b>. Sector de 60° → 113,04 · 60/360 = 113,04 : 6 = <b>18,84 cm²</b>.</p>`
    },
    {
      type: "widget",
      title: "Sectoarele ca fracții de disc",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "Un sector este o fracție din disc: 1/6 din disc corespunde unui unghi de 360° : 6 = 60°. Schimbă cursoarele și calculează unghiul fiecărui sector."
    },
    {
      type: "example",
      title: "Exemplu practic: roata bicicletei",
      html: `<p>O roată de bicicletă are un diametru de <b>66 cm</b> (roată de 26 de inci).</p>
<ul>
<li>Într-o rotație parcurge C = 3,14 · 66 = <b>207,24 cm ≈ 2,07 m</b>.</li>
<li>Pentru a parcurge <b>1 km</b> (100 000 cm) câte rotații face? 100 000 : 207,24 ≈ <b>483 de rotații</b>.</li>
<li>Exact așa funcționează <b>kilometrajul</b> bicicletei: un magnet de pe roată numără rotațiile și le înmulțește cu lungimea cercului!</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: o pizza mare sau două medii?",
      html: `<p>La pizzerie: o pizza <b>mare</b> are diametrul de <b>40 cm</b>, una <b>medie</b> are diametrul de <b>28 cm</b>. Se merită una mare sau două medii?</p>
<ul>
<li>Mare: r = 20 → A = 3,14 · 400 = <b>1256 cm²</b>.</li>
<li>Două medii: r = 14 → A = 3,14 · 196 = 615,44 → × 2 = <b>1230,88 cm²</b>.</li>
</ul>
<p>Surpriză: <b>o singură pizza mare</b> are mai multă pizza decât două medii! Pentru că aria crește cu <b>pătratul</b> razei.</p>
<p><b>Bonus – coroana</b>: marginea lată de 2 cm a pizzei mari este o coroană circulară cu R = 20 și r = 18: A = 3,14 · (400 − 324) = 3,14 · 76 ≈ <b>238,6 cm²</b>, aproape o cincime din pizza!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Vânătoarea de π",
      html: `<ul>
<li>În <b>papirusul Rhind</b> (Egipt, aproximativ 1650 î.Hr.) aria discului se calcula ca și cum π ar fi avut valoarea de aproximativ <b>3,16</b>.</li>
<li><b>Arhimede</b> din Siracuza (secolul al III-lea î.Hr.) a înscris și circumscris discului poligoane cu până la <b>96 de laturi</b> și a demonstrat că π se află între <b>3 + 10/71</b> și <b>3 + 1/7</b> (adică între 3,1408 și 3,1429).</li>
<li>În China, <b>Zu Chongzhi</b> (secolul al V-lea) a găsit fracția <b>355/113</b>, exactă până la a șasea zecimală.</li>
<li>Simbolul π a fost folosit de William Jones în 1706 și făcut celebru de Euler; vine de la inițiala cuvântului grecesc <i>perímetros</i>.</li>
<li>Astăzi calculatoarele au calculat peste <b>100 000 de miliarde</b> de cifre ale lui π. Pe <b>14 martie</b> (3/14 în stil american) se sărbătorește <b>Ziua Pi</b>, pe care din 2019 UNESCO a proclamat-o Ziua internațională a matematicii.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? De ce roțile și capacele de canal sunt rotunde",
      html: `<p>O roată rotundă ține axul <b>mereu la aceeași înălțime</b>, pentru că toate punctele cercului sunt la aceeași distanță de centru: de aceea drumul este lin. Iar <b>capacele de canal</b> sunt adesea rotunde pentru că un capac circular <b>nu poate cădea în gaură</b>: lățimea lui este aceeași în orice direcție. Un capac pătrat, în schimb, întors pe diagonală, poate intra în gaură!</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<table>
<tr><th>Mărime</th><th>Formula</th></tr>
<tr><td>Diametrul</td><td>d = 2r</td></tr>
<tr><td>Lungimea cercului</td><td>C = 2πr = πd</td></tr>
<tr><td>Arcul</td><td>l = C · α / 360°</td></tr>
<tr><td>Aria discului</td><td>A = πr²</td></tr>
<tr><td>Aria sectorului</td><td>A<sub>s</sub> = πr² · α / 360° = l · r / 2</td></tr>
<tr><td>Coroana circulară</td><td>A = π(R² − r²)</td></tr>
</table>
<p>π ≈ 3,14. Unghiul înscris în cerc = jumătate din unghiul la centru corespunzător.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege π și aria discului",
      intro: "De ce tocmai πr²? Iată patru moduri de a „vedea” formulele în loc să le înveți pe de rost.",
      tabs: [
        {
          label: "🍕 Pizza tăiată în felii",
          html: `<p>Taie discul în multe felii subțiri și așază-le <b>una așa, una invers</b>, una lângă alta. Obții o figură care seamănă din ce în ce mai mult cu un <b>dreptunghi</b>:</p>
<ul>
<li><b>baza</b> este jumătate din lungimea cercului: <b>πr</b>;</li>
<li><b>înălțimea</b> este raza: <b>r</b>.</li>
</ul>
<p>Aria = bază × înălțime = πr × r = <b>πr²</b>! Cu cât faci mai multe felii, cu atât figura devine un dreptunghi perfect. Această idee se găsește în scrierile lui Leonardo da Vinci și ale lui Kepler.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<g stroke="#92400e" stroke-width="2">
<path d="M40 180 L65 80 L90 180 Z" fill="#fbbf24"/><path d="M65 80 L90 180 L115 80 Z" fill="#f97316"/>
<path d="M90 180 L115 80 L140 180 Z" fill="#fbbf24"/><path d="M115 80 L140 180 L165 80 Z" fill="#f97316"/>
<path d="M140 180 L165 80 L190 180 Z" fill="#fbbf24"/><path d="M165 80 L190 180 L215 80 Z" fill="#f97316"/>
<path d="M190 180 L215 80 L240 180 Z" fill="#fbbf24"/><path d="M215 80 L240 180 L265 80 Z" fill="#f97316"/>
<path d="M240 180 L265 80 L290 180 Z" fill="#fbbf24"/><path d="M265 80 L290 180 L315 80 Z" fill="#f97316"/>
<path d="M290 180 L315 80 L340 180 Z" fill="#fbbf24"/><path d="M315 80 L340 180 L365 80 Z" fill="#f97316"/>
</g>
<line x1="40" y1="205" x2="365" y2="205" stroke="#1d4ed8" stroke-width="3"/>
<text x="200" y="232" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">bază ≈ jumătate din cerc = πr</text>
<line x1="385" y1="80" x2="385" y2="180" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="135" font-size="20" fill="#16a34a" font-weight="bold">înălțime = r</text>
<text x="300" y="45" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">A = πr · r = πr²</text>
</svg>`
        },
        {
          label: "🏛️ Metoda lui Arhimede",
          html: `<p>Arhimede nu știa să „măsoare” o curbă, așa că a prins-o între două <b>poligoane</b>: unul <b>înăuntru</b> (înscris) și unul <b>în afară</b> (circumscris). Cercul este mai lung decât perimetrul celui interior și mai scurt decât al celui exterior.</p>
<ul>
<li>Cu un <b>hexagon</b> înscris (laturi = r) perimetrul este 6r = 3d → π &gt; 3.</li>
<li>Dublând laturile (12, 24, 48, <b>96</b>) poligoanele se apropie tot mai mult de cerc.</li>
</ul>
<p>Cu 96 de laturi a obținut 3,1408 &lt; π &lt; 3,1429. Fără calculator, acum mai bine de 2200 de ani!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<circle cx="150" cy="130" r="100" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<polygon points="250,130 200,217 100,217 50,130 100,43 200,43" fill="#86efac" fill-opacity="0.5" stroke="#16a34a" stroke-width="3"/>
<polygon points="265,130 208,230 92,230 35,130 92,30 208,30" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="330" y="80" font-size="18" fill="#16a34a" font-weight="bold">hexagon înscris: perimetrul 6r</text>
<text x="330" y="120" font-size="18" fill="#1d4ed8" font-weight="bold">lungimea cercului 2πr</text>
<text x="330" y="160" font-size="18" fill="#dc2626" font-weight="bold">hexagon circumscris: ≈ 6,93r</text>
<text x="330" y="210" font-size="20" fill="#1f2937" font-weight="bold">→ 3 &lt; π &lt; 3,47</text>
</svg>`
        },
        {
          label: "🥫 Doza care se rostogolește (3D)",
          html: `<p>Ia un <b>cilindru</b>, ca o doză: baza lui este un disc. Rostogolește-l un <b>tur complet</b> pe o foaie: distanța parcursă este <b>lungimea cercului</b> său. Dacă măsori cu rigla, vei vedea că este de aproximativ <b>3,14 ori</b> diametrul.</p>
<p>Rotește modelul: suprafața laterală a cilindrului, desfășurată, este un dreptunghi cu baza chiar <b>2πr</b>. Iată de ce formula ariei laterale este 2πr · h!</p>`,
          scene: "solid",
          options: { shape: "cylinder", r: 1, h: 1.6, color: "#f59e0b", labels: true, shapes: ["cylinder", "cone", "sphere"] }
        },
        {
          label: "🇯🇵 Numărarea pătrățelelor",
          html: `<p>În Japonia și în multe alte țări se începe estimând aria prin <b>numărarea pătrățelelor</b>. Desenează un cerc cu raza de 10 pătrățele pe hârtie cu pătrățele: înăuntru sunt aproximativ <b>314 pătrățele</b>, adică 3,14 × 10².</p>
<p>Pătratul care conține cercul are aria (2r)² = 4r² = 400 de pătrățele: discul ocupă aproximativ <b>¾</b> din el (mai exact π/4 ≈ 0,785). Încearcă cu widgetul: construiește un pătrat 10 × 10 și imaginează-ți un cerc cu raza 5 înăuntru: ocupă aproximativ 78 de pătrățele din 100.</p>`,
          widget: "areaGrid",
          options: { w: 10, h: 10, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta cercului și a discului",
      nodes: [
        { id: "def", label: "Cercul", x: 50, y: 6, color: "#b45309", html: "Locul geometric al punctelor egal depărtate de un centru.", why: "Este al 15-lea termen definit în <i>Elementele</i> lui Euclid (aproximativ 300 î.Hr.); al treilea postulat afirmă că se poate trasa mereu un cerc cu centrul și raza date: este compasul!" },
        { id: "cerchio", label: "Discul", x: 20, y: 26, color: "#f59e0b", html: "Partea de plan închisă de cerc.", why: "Cercul este o „frontieră” (o linie, are lungime), discul este o „regiune” (are arie). Distincția este importantă pentru formule." },
        { id: "parti", label: "Raza, diametrul, coarda, arcul", x: 80, y: 26, color: "#16a34a", html: "Elementele cercului; d = 2r.", why: "Rezultă din definiție: toate razele sunt egale, iar diametrul este format din două raze aliniate." },
        { id: "pi", label: "π ≈ 3,14", x: 50, y: 42, color: "#7c3aed", html: "Raport constant între lungimea cercului și diametru.", why: "Este constant pentru că toate cercurile sunt asemenea (mărimi una a celeilalte). Arhimede l-a estimat cu poligoane; în 1761 Johann Lambert a demonstrat că este irațional, iar în 1882 Ferdinand von Lindemann că este transcendent (de aici imposibilitatea „cvadraturii cercului” cu rigla și compasul)." },
        { id: "lunghezza", label: "C = 2πr", x: 25, y: 64, color: "#2563eb", html: "Lungimea cercului.", why: "Vine direct din definiția lui π: dacă C/d = π, atunci C = πd = 2πr." },
        { id: "area", label: "A = πr²", x: 75, y: 64, color: "#dc2626", html: "Aria discului.", why: "Arhimede a demonstrat-o în <i>Măsurarea cercului</i>: discul este echivalent cu un triunghi cu baza lungimea cercului și înălțimea raza, adică 2πr · r / 2 = πr²." },
        { id: "arco", label: "Arce", x: 10, y: 86, color: "#0ea5e9", html: "l = C · α/360°.", why: "Arcele și unghiurile la centru sunt direct proporționale. Împărțirea turului complet în 360° vine de la babilonieni, care foloseau baza 60 și un an de aproximativ 360 de zile." },
        { id: "settore", label: "Sectoare", x: 40, y: 86, color: "#f97316", html: "A = πr² · α/360°.", why: "Și aria sectorului este proporțională cu unghiul: un sector de 90° este 1/4 din disc." },
        { id: "corona", label: "Coroana circulară", x: 70, y: 86, color: "#14b8a6", html: "A = π(R² − r²).", why: "Este diferența dintre două discuri concentrice: aria mare minus aria mică, dând π factor comun." },
        { id: "angoli", label: "Unghiuri înscrise", x: 92, y: 86, color: "#a855f7", html: "Jumătate din unghiul la centru corespunzător.", why: "Demonstrat de Euclid (cartea III, propoziția 20). Caz special: unghiul înscris într-un semicerc este drept, teoremă atribuită lui Thales (secolul al VI-lea î.Hr.)." }
      ],
      edges: [
        ["def", "cerchio", "închide"],
        ["def", "parti", "are"],
        ["parti", "pi", "C : d ="],
        ["pi", "lunghezza", "dă"],
        ["pi", "area", "dă"],
        ["lunghezza", "arco", "fracție"],
        ["area", "settore", "fracție"],
        ["area", "corona", "diferență"],
        ["parti", "angoli", "proprietate"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: arii",
      questions: [
        { type: "num", q: "Aria unui disc cu raza de 4 cm (π = 3,14)?", answer: 50.24, tol: 0.01, unit: "cm²", explain: "3,14 · 16 = 50,24 cm²." },
        { type: "mc", q: "Dacă raza se triplează, aria devine…", options: ["de 3 ori mai mare", "de 6 ori mai mare", "de 9 ori mai mare"], answer: 2, explain: "Aria depinde de r²: 3² = 9." },
        { type: "num", q: "Un sector de 90° dintr-un disc cu aria de 200 cm² are aria…", answer: 50, unit: "cm²", explain: "90° este 1/4 din 360°: 200 : 4 = 50 cm²." }
      ]
    }
  ],
  glossary: [
    { t: "Cerc", d: "Linie închisă formată din punctele egal depărtate de centru." },
    { t: "Disc", d: "Parte de plan delimitată de un cerc." },
    { t: "Rază", d: "Segment care unește centrul cu un punct al cercului." },
    { t: "Diametru", d: "Coardă care trece prin centru; este dublul razei." },
    { t: "Coardă", d: "Segment care unește două puncte ale cercului." },
    { t: "Arc", d: "Parte de cerc între două puncte." },
    { t: "Sector de disc", d: "Parte de disc cuprinsă între două raze și un arc." },
    { t: "Coroană circulară", d: "Parte de plan între două cercuri concentrice." },
    { t: "π (pi)", d: "Raportul dintre lungimea cercului și diametru, aproximativ 3,14; număr irațional." },
    { t: "Tangentă", d: "Dreaptă cu un singur punct comun cu cercul, perpendiculară pe rază în acel punct." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "Cercul este o linie, discul este o suprafață.", answer: true, explain: "Cercul are o lungime, discul o arie." },
      { type: "num", q: "Diametrul este 18 cm. Cât măsoară raza?", answer: 9, unit: "cm", explain: "r = d : 2 = 9 cm." },
      { type: "num", q: "Lungimea cercului cu diametrul de 50 cm (π = 3,14)?", answer: 157, tol: 0.01, unit: "cm", explain: "3,14 · 50 = 157 cm." },
      { type: "num", q: "Un cerc are lungimea de 94,2 cm. Cât măsoară raza? (π = 3,14)", answer: 15, tol: 0.01, unit: "cm", explain: "r = 94,2 : (2 · 3,14) = 94,2 : 6,28 = 15 cm." },
      { type: "num", q: "Aria discului cu raza de 10 cm (π = 3,14)?", answer: 314, tol: 0.01, unit: "cm²", explain: "3,14 · 100 = 314 cm²." },
      { type: "num", q: "Lungimea unui arc de 60° dintr-un cerc lung de 36 cm?", answer: 6, unit: "cm", explain: "60/360 = 1/6 → 36 : 6 = 6 cm." },
      { type: "num", q: "Aria coroanei circulare cu R = 5 cm și r = 3 cm (π = 3,14)?", answer: 50.24, tol: 0.01, unit: "cm²", explain: "3,14 · (25 − 9) = 3,14 · 16 = 50,24 cm²." },
      { type: "mc", q: "O dreaptă aflată la o distanță față de centru mai mică decât raza este…", options: ["exterioară", "tangentă", "secantă"], answer: 2, explain: "Dacă d < r, dreapta taie cercul în două puncte." },
      { type: "mc", q: "Un unghi la centru măsoară 80°. Cât măsoară unghiul înscris în cerc care subîntinde același arc?", options: ["160°", "40°", "80°"], answer: 1, explain: "Este jumătate: 40°." },
      { type: "mc", q: "Cine a estimat π cu poligoane de 96 de laturi?", options: ["Pitagora", "Arhimede", "Descartes"], answer: 1, explain: "Arhimede din Siracuza, secolul al III-lea î.Hr." },
      { type: "order", q: "Ordonează aceste aproximări ale lui π de la cea mai puțin precisă la cea mai precisă.", items: ["3", "3,14", "22/7 (≈ 3,1429)", "355/113 (≈ 3,1415929)"], explain: "π = 3,14159265…: 355/113 greșește abia la a șaptea zecimală; 22/7 este mai precisă decât 3,14 (eroare aproximativ 0,0013 față de 0,0016)." },
      { type: "tf", q: "Dacă raza se dublează, și aria se dublează.", answer: false, explain: "Aria devine de 4 ori mai mare, pentru că depinde de r²." }
    ],
    gen: [["circle", 3]]
  }
});
