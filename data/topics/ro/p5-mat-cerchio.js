TOPIC('ro', {
  id: "p5-mat-cerchio",
  title: "Cercul",
  intro: "Roți, pizza, ceasuri, monede: <b>cercul</b> este peste tot! Să învățăm diferența dintre <b>disc</b> și <b>cerc</b>, ce sunt <b>raza</b> și <b>diametrul</b> și să descoperim cel mai faimos număr din matematică: <b>π (pi)</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Cercul și discul: nu sunt același lucru!",
      html: `<p>Ia un compas, înfige vârful într-o foaie și fă un tur complet cu mina.</p>
<ul>
<li><b>Linia curbă închisă</b> pe care ai desenat-o este <b>cercul</b>: toate punctele ei sunt la <b>aceeași distanță</b> de punctul în care ai înfipt vârful.</li>
<li>Acel punct se numește <b>centru</b>.</li>
<li><b>Suprafața</b> din interiorul cercului (pe care o poți colora) este <b>discul</b>.</li>
</ul>
<p>Pe scurt: cercul este <b>conturul</b> (ca marginea pizzei), discul este <b>toată pizza</b>. Cercul are o <b>lungime</b>; discul are o <b>arie</b>.</p>
<p><i>Notă: în limba italiană se spune <b>circonferenza</b> (cerc) și <b>cerchio</b> (disc). În română, în școală, se folosesc „cerc” pentru contur și „disc” pentru suprafață.</i></p>`
    },
    {
      type: "svg",
      title: "Părțile cercului",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<circle cx="200" cy="160" r="130" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="6"/>
<circle cx="200" cy="160" r="6" fill="#111827"/>
<line x1="200" y1="160" x2="292" y2="68" stroke="#dc2626" stroke-width="5"/>
<line x1="70" y1="160" x2="330" y2="160" stroke="#16a34a" stroke-width="5"/>
<line x1="110" y1="254" x2="310" y2="240" stroke="#9333ea" stroke-width="4"/>
<path d="M90 90 A130 130 0 0 1 150 40" fill="none" stroke="#f97316" stroke-width="9"/>
<text x="188" y="185" font-size="16" fill="#111827">centru</text>
<text x="252" y="108" font-size="18" fill="#dc2626" font-weight="bold">r</text>
<text x="128" y="152" font-size="18" fill="#16a34a" font-weight="bold">d</text>
<text x="360" y="60" font-size="20" fill="#dc2626">— rază (r)</text>
<text x="360" y="95" font-size="20" fill="#16a34a">— diametru (d = 2 × r)</text>
<text x="360" y="130" font-size="20" fill="#1d4ed8">— cerc (marginea)</text>
<text x="360" y="165" font-size="20" fill="#3b82f6">▇ disc (suprafața)</text>
<text x="360" y="200" font-size="20" fill="#f97316">— arc (o bucată din margine)</text>
<text x="360" y="235" font-size="20" fill="#9333ea">— coardă (unește 2 puncte)</text>
</svg>`,
      caption: "Diametrul este cea mai lungă coardă: trece prin centru și are lungimea a două raze."
    },
    {
      type: "text",
      title: "Raza, diametrul, coarda și arcul",
      html: `<ul>
<li><b>Raza</b> (r) este segmentul care merge de la <b>centru</b> la un punct al cercului. Toate razele unui cerc sunt <b>egale</b>.</li>
<li><b>Diametrul</b> (d) este segmentul care unește două puncte ale cercului <b>trecând prin centru</b>. Are lungimea de <b>două ori</b> raza:
<br><b>d = r × 2</b> și <b>r = d : 2</b>.</li>
<li><b>Coarda</b> este un segment care unește două puncte oarecare ale cercului. Diametrul este cea mai lungă coardă.</li>
<li><b>Arcul</b> este o bucată din cerc.</li>
<li><b>Sectorul de disc</b> este o „felie” de disc, mărginită de două raze și un arc (exact ca o felie de pizza!).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: părțile cercului",
      questions: [
        { type: "mc", q: "Linia care face conturul discului se numește…", options: ["diametru", "cerc", "rază"], answer: 1, explain: "Cercul este linia curbă închisă; discul este suprafața dinăuntru." },
        { type: "num", q: "Un cerc are raza de 6 cm. Cât măsoară diametrul?", answer: 12, unit: "cm", explain: "d = r × 2 = 6 × 2 = 12 cm." },
        { type: "num", q: "O farfurie are diametrul de 26 cm. Cât măsoară raza?", answer: 13, unit: "cm", explain: "r = d : 2 = 26 : 2 = 13 cm." },
        { type: "tf", q: "Într-un cerc toate razele au aceeași lungime.", answer: true, explain: "Da: este chiar definiția cercului (puncte la aceeași distanță de centru)." }
      ]
    },
    {
      type: "text",
      title: "Numărul magic π (pi)",
      html: `<p>Fă un experiment: ia un borcan, înfășoară un șnur în jurul marginii și măsoară-l. Apoi măsoară diametrul și fă împărțirea <b>lungimea cercului : diametru</b>.</p>
<p>Cu orice obiect rotund (monedă, farfurie, roata bicicletei) vei obține <b>întotdeauna aproximativ 3,14</b>!</p>
<p>Acest număr se numește <b>π</b> (se citește „pi”, după litera greacă <i>pi</i>). Cifrele lui după virgulă nu se termină niciodată și nu se repetă: π = 3,14159265358979… Pentru calculele de la școală folosim <b>π ≈ 3,14</b>.</p>
<p>Deci lungimea cercului este <b>puțin mai mult de 3 ori</b> diametrul.</p>`
    },
    {
      type: "remember",
      title: "Formulele lungimii cercului",
      html: `<ul>
<li><b>C = d × 3,14</b> (diametrul înmulțit cu pi)</li>
<li><b>C = r × 2 × 3,14</b> (raza înmulțită cu doi și cu pi)</li>
<li>Formula inversă: <b>d = C : 3,14</b> și apoi <b>r = d : 2</b></li>
</ul>`
    },
    {
      type: "svg",
      title: "Desfășurarea roții",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<circle cx="80" cy="120" r="50" fill="#fde68a" stroke="#b45309" stroke-width="6"/>
<line x1="30" y1="120" x2="130" y2="120" stroke="#16a34a" stroke-width="5"/>
<text x="80" y="110" font-size="16" fill="#16a34a" text-anchor="middle">d</text>
<line x1="30" y1="200" x2="344" y2="200" stroke="#b45309" stroke-width="8"/>
<g stroke="#16a34a" stroke-width="5">
<line x1="30" y1="225" x2="130" y2="225"/><line x1="134" y1="225" x2="234" y2="225"/><line x1="238" y1="225" x2="338" y2="225"/>
</g>
<line x1="338" y1="225" x2="344" y2="225" stroke="#dc2626" stroke-width="5"/>
<text x="80" y="250" font-size="16" fill="#16a34a" text-anchor="middle">1 d</text>
<text x="184" y="250" font-size="16" fill="#16a34a" text-anchor="middle">2 d</text>
<text x="288" y="250" font-size="16" fill="#16a34a" text-anchor="middle">3 d</text>
<text x="370" y="232" font-size="16" fill="#dc2626">+ 0,14 d</text>
<path d="M80 172 Q80 195 40 198" fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="5 4"/>
<text x="360" y="120" font-size="22" fill="#78350f">Roata face un tur:</text>
<text x="360" y="150" font-size="22" fill="#78350f">marginea desfășurată este</text>
<text x="360" y="180" font-size="22" fill="#b45309" font-weight="bold">≈ 3,14 diametre</text>
</svg>`,
      caption: "Dacă rostogolești o roată pentru un tur complet, parcurge un drum lung cât aproximativ 3,14 ori diametrul ei."
    },
    {
      type: "example",
      title: "Exemplu practic: roata bicicletei",
      html: `<p>Roata bicicletei Anei are diametrul de <b>60 cm</b>. Ce distanță parcurge bicicleta la fiecare tură de roată?</p>
<p>C = d × 3,14 = 60 × 3,14 = <b>188,4 cm</b>, adică aproape <b>1,9 metri</b>.</p>
<p>După <b>100 de ture</b> de roată, Ana a parcurs 188,4 × 100 = 18 840 cm = <b>188,4 metri</b>. Așa funcționează kilometrajul bicicletei: numără turele roții!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: panglica pentru tort",
      html: `<p>Mama vrea să pună o panglică în jurul unui tort rotund cu <b>raza de 12 cm</b>. De câtă panglică are nevoie?</p>
<ol>
<li>Diametrul: 12 × 2 = 24 cm</li>
<li>Lungimea cercului: 24 × 3,14 = <b>75,36 cm</b></li>
</ol>
<p>Îi convine să cumpere <b>cel puțin 80 cm</b> de panglică, așa încât să rămână și o bucățică pentru fundă 🎀.</p>`
    },
    {
      type: "text",
      title: "Pentru cei mai curioși: aria discului",
      html: `<p>Și aria discului se calculează cu π:</p>
<p><b>A = r × r × 3,14</b> (raza înmulțită cu raza și cu pi)</p>
<p>Exemplu: o pizza cu raza de 15 cm are aria 15 × 15 × 3,14 = 225 × 3,14 = <b>706,5 cm²</b>.</p>
<p>De ce? Taie discul în multe felii subțiri și pune-le în zigzag, una în sus și una în jos: obții aproape un <b>dreptunghi</b> cu baza jumătate din lungimea cercului (r × 3,14) și înălțimea r. Aria lui este r × 3,14 × r!</p>`
    },
    {
      type: "3d",
      title: "Cercul în corpurile geometrice",
      scene: "solid",
      options: { shape: "cylinder", r: 1, h: 1.6, color: "#38bdf8", labels: true, shapes: ["cylinder", "cone", "sphere"] },
      caption: "Cilindrul are două baze în formă de disc; conul are una. Dacă tai o sferă cu un plan obții întotdeauna un disc!"
    },
    {
      type: "curiosity",
      title: "Știai că…? Ziua lui π",
      html: `<p>Pe <b>14 martie</b> se sărbătorește în toată lumea <b>Pi Day</b>, ziua numărului pi, pentru că în Statele Unite data se scrie <b>3/14</b>. Din 2020 UNESCO a proclamat-o <b>Ziua Internațională a Matematicii</b>.</p>
<p>Coincidență: pe 14 martie 1879 s-a născut <b>Albert Einstein</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cifre fără sfârșit",
      html: `<p>Cu supercalculatoarele s-au calculat peste <b>100 000 de miliarde de cifre</b> ale lui π, dar nu se termină niciodată. Pentru a trimite sonde în spațiu, NASA folosește doar <b>15</b>!</p>
<p>Unii se antrenează să-și amintească cât mai multe: recordul mondial recunoscut depășește <b>70 000 de cifre</b> recitate din memorie.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege cercul",
      intro: "Cercul se înțelege mai bine atingându-l, măsurându-l și descoperind cum l-au studiat alte popoare. Alege drumul care îți place!",
      tabs: [
        {
          label: "🧵 Șnurul și borcanul",
          html: `<p>Fă tu experimentul pe care l-a făcut omenirea acum mii de ani:</p>
<ol>
<li>ia 3 obiecte rotunde (un borcan, o rolă de scotch, o monedă mare);</li>
<li>înfășoară un șnur în jurul fiecăruia, însemnează și măsoară cu rigla: este <b>lungimea cercului</b>;</li>
<li>măsoară <b>diametrul</b> trecând prin centru;</li>
<li>împarte lungimea cercului : diametru.</li>
</ol>
<table><tr><th>Obiectul</th><th>C</th><th>d</th><th>C : d</th></tr>
<tr><td>Borcan</td><td>25,1 cm</td><td>8 cm</td><td>≈ 3,14</td></tr>
<tr><td>Scotch</td><td>31,4 cm</td><td>10 cm</td><td>≈ 3,14</td></tr></table>
<p>De fiecare dată iese aproximativ <b>3,14</b>: ai descoperit π singur!</p>`
        },
        {
          label: "🍕 Felii în zigzag",
          html: `<p>Cum se află aria? Taie o pizza în multe felii și pune-le la rând, una cu vârful în sus și una cu vârful în jos. Se formează aproape un <b>dreptunghi</b>:</p>
<ul><li>baza este <b>jumătate din lungimea cercului</b> = r × 3,14;</li><li>înălțimea este <b>raza</b> r.</li></ul>
<p>Aria dreptunghiului = baza × înălțimea = <b>r × 3,14 × r</b>. Cu cât faci mai multe felii, cu atât dreptunghiul este mai perfect!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<g stroke="#9a3412" stroke-width="2">
<path d="M40 180 L65 80 L90 180 Z" fill="#fbbf24"/><path d="M65 80 L90 180 L115 80 Z" fill="#f97316"/>
<path d="M90 180 L115 80 L140 180 Z" fill="#fbbf24"/><path d="M115 80 L140 180 L165 80 Z" fill="#f97316"/>
<path d="M140 180 L165 80 L190 180 Z" fill="#fbbf24"/><path d="M165 80 L190 180 L215 80 Z" fill="#f97316"/>
<path d="M190 180 L215 80 L240 180 Z" fill="#fbbf24"/><path d="M215 80 L240 180 L265 80 Z" fill="#f97316"/>
<path d="M240 180 L265 80 L290 180 Z" fill="#fbbf24"/><path d="M265 80 L290 180 L315 80 Z" fill="#f97316"/>
<path d="M290 180 L315 80 L340 180 Z" fill="#fbbf24"/><path d="M315 80 L340 180 L365 80 Z" fill="#f97316"/>
</g>
<line x1="40" y1="205" x2="340" y2="205" stroke="#1d4ed8" stroke-width="4"/>
<text x="190" y="230" font-size="18" fill="#1d4ed8" text-anchor="middle">jumătate din cerc = r × 3,14</text>
<line x1="380" y1="80" x2="380" y2="180" stroke="#dc2626" stroke-width="4"/>
<text x="392" y="136" font-size="20" fill="#dc2626">r</text>
<text x="430" y="110" font-size="20" fill="#78350f">≈ dreptunghi</text>
<text x="430" y="145" font-size="20" fill="#78350f" font-weight="bold">A = r × r × 3,14</text>
</svg>`
        },
        {
          label: "🏛️ Arhimede și poligoanele",
          html: `<p>Marele matematician sicilian <b>Arhimede din Siracuza</b> (aproximativ 287–212 î.Hr.) nu avea calculatoare. Cum a calculat π?</p>
<p>A desenat un <b>hexagon</b> în interiorul cercului și unul în exterior. Lungimea cercului trebuia să fie <b>între cele două</b> perimetre. Apoi a dublat laturile: 12, 24, 48, până la <b>96 de laturi</b>! Cu cât are mai multe laturi poligonul, cu atât seamănă mai mult cu cercul.</p>
<p>A găsit că π se află între <b>3 10/71</b> și <b>3 1/7</b>, adică între 3,1408 și 3,1428. Un rezultat extraordinar pentru acum 2200 de ani!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f5f3ff"/>
<circle cx="150" cy="130" r="100" fill="#ddd6fe" stroke="#6d28d9" stroke-width="4"/>
<polygon points="250,130 200,216.6 100,216.6 50,130 100,43.4 200,43.4" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="265.5,130 207.7,230 92.3,230 34.5,130 92.3,30 207.7,30" fill="none" stroke="#16a34a" stroke-width="4"/>
<text x="320" y="80" font-size="20" fill="#dc2626">hexagon interior: perimetru = 6 r</text>
<text x="320" y="115" font-size="20" fill="#16a34a">hexagon exterior: perimetru ≈ 6,93 r</text>
<text x="320" y="150" font-size="20" fill="#6d28d9">cercul: la mijloc!</text>
<text x="320" y="200" font-size="18" fill="#1f2937">Cu 96 de laturi: π ≈ 3,14</text>
</svg>`
        },
        {
          label: "🌍 π în lumea antică",
          html: `<p>Multe popoare au căutat numărul cercului:</p>
<ul>
<li>🇪🇬 <b>egiptenii</b> (papirusul Rhind, aproximativ 1650 î.Hr.) foloseau o valoare de aproximativ <b>3,16</b>;</li>
<li>🏺 <b>babilonienii</b> foloseau <b>3</b> sau <b>3 + 1/8 = 3,125</b>;</li>
<li>🇬🇷 <b>Arhimede</b> l-a închis între 3,1408 și 3,1428;</li>
<li>🇨🇳 chinezul <b>Zu Chongzhi</b> (secolul al V-lea d.Hr.) a găsit fracția <b>355/113 = 3,1415929…</b>, corectă pentru 6 zecimale: nimeni n-a făcut mai bine timp de aproape 1000 de ani!</li>
<li>🇬🇧 Simbolul <b>π</b> l-a folosit primul galezul William Jones în 1706, iar elvețianul Leonhard Euler l-a făcut celebru.</li>
</ul>`
        },
        {
          label: "🧭 Compasul și frânghia",
          html: `<p>N-ai compas? Fă ca grădinarii: înfige un țăruș în pământ, leagă o frânghie, iar la celălalt capăt un bețișor. Ține frânghia întinsă și învârte totul în jur: desenezi un <b>cerc perfect</b>!</p>
<ul><li>Țărușul este <b>centrul</b>.</li><li>Frânghia întinsă este <b>raza</b>.</li><li>Urma de pe pământ este <b>cercul</b>.</li></ul>
<p>Așa se trasează rondurile rotunde de flori și cercul de la mijlocul terenurilor de fotbal (raza de 9,15 m).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta cercului: atinge un nod și descoperă de ce",
      nodes: [
        { id: "centro", label: "Centrul", x: 50, y: 6, color: "#111827", html: "Punctul fix din care pornesc toate razele.", why: "Fără centru nu există cerc: este punctul în care înfigi vârful compasului. <b>Euclid</b>, în <i>Elementele</i> sale (aproximativ 300 î.Hr.), definește cercul chiar pornind de la centru." },
        { id: "circonf", label: "Cercul", x: 25, y: 30, color: "#1d4ed8", html: "Linia curbă închisă formată din toate punctele aflate la aceeași distanță de centru.", why: "Este definiția lui Euclid. Numele italian <i>circonferenza</i> vine din latinescul <i>circum ferre</i>, „a duce în jur”: este linia care se învârte în jurul centrului." },
        { id: "cerchio", label: "Discul", x: 75, y: 30, color: "#3b82f6", html: "Partea de plan închisă de cerc.", why: "Cuvântul „disc” vine din greacă și latină (<i>discus</i>), iar italienescul <i>cerchio</i> din latinescul <i>circulus</i>, „mic cerc”. Este printre primele forme folosite de om: <b>roata</b> a apărut în Mesopotamia acum aproximativ 5500 de ani." },
        { id: "raggio", label: "Raza", x: 15, y: 55, color: "#dc2626", html: "Segment de la centru la cerc.", why: "Toate razele sunt egale pentru că cercul este alcătuit chiar din punctele aflate la acea distanță de centru. Numele amintește de spițele roții și de razele Soarelui." },
        { id: "diametro", label: "Diametrul", x: 45, y: 55, color: "#16a34a", html: "Coardă care trece prin centru: d = 2 × r.", why: "Din grecescul <i>diá</i> (prin) + <i>métron</i> (măsură): „măsură care traversează”. Este alcătuit din două raze puse cap la cap, una de o parte și una de cealaltă parte a centrului." },
        { id: "pi", label: "π ≈ 3,14", x: 75, y: 55, color: "#a855f7", html: "Raportul dintre lungimea cercului și diametru, același pentru toate cercurile.", why: "Toate cercurile sunt „mărimi” ale aceluiași cerc, deci raportul C : d nu se schimbă. Arhimede l-a calculat cu poligoane de 96 de laturi; în 1761 elvețianul <b>Lambert</b> a demonstrat că cifrele lui nu se termină niciodată și nu se repetă." },
        { id: "formulaC", label: "C = d × 3,14", x: 30, y: 82, color: "#f59e0b", html: "Formula pentru lungimea cercului.", why: "Vine direct din π: dacă C : d = π, atunci C = d × π. Cum d = 2 × r, se poate scrie și C = 2 × r × π." },
        { id: "area", label: "A = r × r × 3,14", x: 72, y: 82, color: "#14b8a6", html: "Formula pentru aria discului.", why: "Arhimede a demonstrat că discul are aceeași arie cu un triunghi având baza egală cu lungimea cercului și înălțimea egală cu raza. Este același truc ca la feliile în zigzag care formează un dreptunghi." }
      ],
      edges: [
        ["centro", "circonf", "puncte la aceeași distanță"],
        ["circonf", "cerchio", "închide"],
        ["centro", "raggio", "de aici pornește"],
        ["raggio", "diametro", "× 2"],
        ["diametro", "pi", "C : d ="],
        ["pi", "formulaC", "dă"],
        ["pi", "area", "dă"],
        ["raggio", "area", "se folosește în"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: calculăm lungimea cercului",
      questions: [
        { type: "num", q: "Un cerc are diametrul de 10 cm. Cât măsoară lungimea cercului? (π = 3,14)", answer: 31.4, tol: 0.01, unit: "cm", explain: "C = 10 × 3,14 = 31,4 cm." },
        { type: "num", q: "Un cerc are raza de 5 cm. Cât măsoară lungimea cercului? (π = 3,14)", answer: 31.4, tol: 0.01, unit: "cm", explain: "d = 10 cm; C = 10 × 3,14 = 31,4 cm." },
        { type: "mc", q: "De aproximativ câte ori este lungimea cercului mai mare decât diametrul?", options: ["de 2 ori", "puțin mai mult de 3 ori", "de 10 ori"], answer: 1, explain: "C : d = π ≈ 3,14." }
      ]
    }
  ],
  glossary: [
    { t: "Cerc", d: "Linie curbă închisă ale cărei puncte sunt toate la aceeași distanță de centru." },
    { t: "Disc", d: "Partea de plan închisă de cerc." },
    { t: "Centru", d: "Punct aflat la aceeași distanță de toate punctele cercului." },
    { t: "Rază", d: "Segment care unește centrul cu un punct al cercului." },
    { t: "Diametru", d: "Coardă care trece prin centru; are lungimea dublă față de rază." },
    { t: "Coardă", d: "Segment care unește două puncte ale cercului." },
    { t: "Arc", d: "Parte din cerc cuprinsă între două puncte." },
    { t: "Sector de disc", d: "Parte din disc mărginită de două raze și un arc (o „felie”)." },
    { t: "π (pi)", d: "Raport fix între lungimea cercului și diametru: aproximativ 3,14." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este diferența dintre disc și cerc?", options: ["Sunt același lucru", "Cercul este marginea, discul este suprafața", "Discul este marginea, cercul este suprafața"], answer: 1, explain: "Cercul este linia; discul este partea de plan pe care o închide." },
      { type: "num", q: "Raza este de 9 cm. Cât măsoară diametrul?", answer: 18, unit: "cm", explain: "9 × 2 = 18 cm." },
      { type: "num", q: "Diametrul este de 50 cm. Cât măsoară raza?", answer: 25, unit: "cm", explain: "50 : 2 = 25 cm." },
      { type: "tf", q: "Diametrul este cea mai lungă coardă a unui cerc.", answer: true, explain: "Trece prin centru: nicio coardă nu poate fi mai lungă." },
      { type: "text", q: "Cum se numește numărul obținut împărțind lungimea cercului la diametru?", answer: ["pi", "π", "numarul pi", "numărul pi", "pi greco", "pigreco", "pi greca"], explain: "Este π (pi), aproximativ 3,14." },
      { type: "num", q: "O monedă are diametrul de 2 cm. Cât măsoară lungimea cercului ei? (π = 3,14)", answer: 6.28, tol: 0.01, unit: "cm", explain: "2 × 3,14 = 6,28 cm." },
      { type: "num", q: "Un bazin rotund are raza de 3 m. Cât măsoară marginea lui? (π = 3,14)", answer: 18.84, tol: 0.01, unit: "m", explain: "d = 6 m; C = 6 × 3,14 = 18,84 m." },
      { type: "mc", q: "O felie de pizza în formă de triunghi curbat este…", options: ["un sector de disc", "o coardă", "un diametru"], answer: 0, explain: "Este mărginită de două raze și un arc: sector de disc." },
      { type: "num", q: "Un cerc măsoară 31,4 cm. Cât măsoară diametrul? (π = 3,14)", answer: 10, tol: 0.01, unit: "cm", explain: "d = C : 3,14 = 31,4 : 3,14 = 10 cm." },
      { type: "order", q: "Ordonează pașii pentru a afla lungimea cercului pornind de la rază.", items: ["Citesc raza", "Înmulțesc raza cu 2 și aflu diametrul", "Înmulțesc diametrul cu 3,14", "Scriu rezultatul cu unitatea de măsură"], explain: "r → d = r × 2 → C = d × 3,14." },
      { type: "mc", q: "Cine a calculat π folosind poligoane cu 96 de laturi?", options: ["Pitagora", "Arhimede", "Galilei"], answer: 1, explain: "Arhimede din Siracuza, în secolul al III-lea î.Hr." }
    ],
    gen: [["circle", 3]]
  }
});
