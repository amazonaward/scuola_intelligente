TOPIC('ro', {
  id: "p2-geo-mappe",
  title: "Planuri și hărți",
  intro: "Închipuie-ți că ești o <b>păsărică</b> 🐦 care zboară deasupra clasei tale: ce ai vedea? Doar <b>acoperișurile</b>, <b>partea de sus</b> a băncilor și a scaunelor! Astăzi învățăm să <b>vedem de sus</b> și să citim <b>planuri</b>, <b>hărți</b> și <b>legende</b> 🗺️.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Trei moduri de a privi un obiect 👀",
      html: `<p>Același obiect pare diferit dacă îl privești din locuri diferite. Ia un <b>pahar</b> 🥛:</p>
<ul>
<li>👁️ <b>Din față</b> (vedere frontală): vezi un dreptunghi.</li>
<li>↘️ <b>Din ușor lateral</b> (vedere oblică, puțin de sus): vezi paharul și puțin din marginea rotundă.</li>
<li>⬇️ <b>De sus</b> (vedere zenitală, „din zbor de pasăre”): vezi doar un <b>cerc</b>!</li>
</ul>
<p><b>Planurile</b> și <b>hărțile</b> se desenează mereu <b>de sus</b>, așa cum le-ar vedea o păsărică.</p>`
    },
    {
      type: "svg",
      title: "O masă văzută în trei feluri",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="110" width="140" height="18" fill="#b45309"/>
<rect x="50" y="128" width="14" height="80" fill="#92400e"/>
<rect x="156" y="128" width="14" height="80" fill="#92400e"/>
<polygon points="250,110 400,110 370,145 220,145" fill="#d97706"/>
<rect x="220" y="145" width="150" height="12" fill="#b45309"/>
<rect x="226" y="157" width="12" height="60" fill="#92400e"/>
<rect x="355" y="157" width="12" height="60" fill="#92400e"/>
<rect x="388" y="125" width="10" height="60" fill="#92400e"/>
<rect x="450" y="90" width="120" height="120" fill="#f59e0b" stroke="#92400e" stroke-width="4"/>
<text x="110" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">din față</text>
<text x="300" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">din lateral</text>
<text x="510" y="250" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">de sus</text>
<text x="510" y="275" font-size="15" text-anchor="middle" fill="#475569">(ca într-un plan)</text>
<text x="300" y="40" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Aceeași masă!</text>
</svg>`,
      caption: "De sus, masa devine un pătrat: picioarele nu se mai văd, sunt ascunse dedesubt."
    },
    {
      type: "3d",
      title: "Rotește corpul și privește-l de sus 🔄",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "cylinder", "cone", "pyramid", "sphere"], color: "#38bdf8" },
      caption: "Schimbă corpul cu butoanele și rotește-l până îl vezi chiar de sus. Cubul devine un pătrat, cilindrul și conul devin un cerc, piramida un pătrat cu un X!"
    },
    {
      type: "text",
      title: "A micșora: reducerea 🔍",
      html: `<p>O cameră adevărată este mare; foaia este mică. Ca s-o desenăm, trebuie să <b>micșorăm</b> totul <b>în același fel</b>. Aceasta se numește <b>reducere la scară</b>.</p>
<p>Un mod ușor este să folosim <b>pătrățelele</b> caietului:</p>
<p style="font-size:1.1em">📏 <b>1 pătrățel = 1 pas</b> (sau 1 metru)</p>
<p>Dacă catedra are 2 pași lungime, o desenezi lungă de <b>2 pătrățele</b>. Dacă clasa are 8 pași lungime, o desenezi lungă de <b>8 pătrățele</b>. Așa totul rămâne <b>proporțional</b>: lucrurile mari rămân mai mari, cele mici mai mici.</p>`
    },
    {
      type: "widget",
      title: "Desenează planul unei camere pe pătrățele",
      widget: "areaGrid",
      options: { w: 6, h: 4, max: 12 },
      caption: "Fiecare pătrățel este 1 pas. Mișcă cursoarele: câte pătrățele trebuie pentru o cameră lungă de 6 pași și lată de 4?"
    },
    {
      type: "text",
      title: "Plan, hartă, hartă geografică 🗺️",
      html: `<p>Cu cât spațiul este mai mare, cu atât trebuie să micșorăm mai mult. Se schimbă și numele desenului:</p>
<table>
<tr><th>Nume</th><th>Ce arată</th><th>Exemplu</th></tr>
<tr><td>📐 <b>Plan</b></td><td>un spațiu mic, cu multe detalii</td><td>camera ta, clasa, o casă</td></tr>
<tr><td>🗺️ <b>Hartă</b></td><td>un spațiu mai mare: străzi, piețe, parcuri</td><td>cartierul, centrul orașului</td></tr>
<tr><td>🌍 <b>Hartă geografică</b></td><td>spații foarte mari: regiuni, state, continente</td><td>harta Italiei, globul pământesc</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-test: de sus",
      questions: [
        { type: "mc", q: "Văzută de sus, o minge pare…", options: ["un pătrat", "un cerc", "un triunghi"], answer: 1, explain: "Mingea, de deasupra, se vede ca un cerc." },
        { type: "mc", q: "Cum se numește desenul unei camere văzute de sus?", options: ["Plan", "Portret", "Benzi desenate"], answer: 0, explain: "Este planul." },
        { type: "num", q: "1 pătrățel = 1 pas. Un dulap lat de 3 pași: câte pătrățele?", answer: 3, tol: 0, unit: "pătrățele", explain: "3 pași = 3 pătrățele." }
      ]
    },
    {
      type: "text",
      title: "Legenda: dicționarul hărții 🔑",
      html: `<p>Pe planuri și pe hărți nu se desenează totul cu precizie: se folosesc <b>simboluri</b> 🔣 (desene mici, culori, linii).</p>
<p>Ca să înțelegem ce înseamnă fiecare simbol există <b>legenda</b>: un chenar, de obicei într-un colț, care explică toate simbolurile. Este ca un mic <b>dicționar</b>!</p>
<p>Unele culori se folosesc aproape mereu în același fel:</p>
<ul>
<li>🟦 <b>albastru</b>: apă (râuri, lacuri, mare);</li>
<li>🟩 <b>verde</b>: pajiști, parcuri, câmpii;</li>
<li>🟫 <b>maro</b>: munți și dealuri;</li>
<li>⬜ <b>gri</b> sau <b>alb</b>: străzi și piețe.</li>
</ul>`
    },
    {
      type: "svg",
      title: "O hartă cu legendă",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<rect x="10" y="10" width="400" height="300" fill="#bbf7d0" stroke="#0f172a" stroke-width="2"/>
<path d="M10 220 C120 200 200 260 410 230" stroke="#3b82f6" stroke-width="16" fill="none"/>
<rect x="10" y="110" width="400" height="22" fill="#d1d5db"/>
<rect x="190" y="10" width="22" height="300" fill="#d1d5db"/>
<rect x="60" y="40" width="70" height="50" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<rect x="260" y="40" width="50" height="50" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<circle cx="340" cy="170" r="16" fill="#15803d"/>
<circle cx="370" cy="160" r="16" fill="#15803d"/>
<circle cx="80" cy="165" r="16" fill="#15803d"/>
<rect x="430" y="10" width="160" height="300" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
<text x="510" y="38" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">LEGENDĂ</text>
<rect x="445" y="60" width="28" height="22" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<text x="482" y="77" font-size="15" fill="#0f172a">școală</text>
<rect x="445" y="100" width="28" height="22" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<text x="482" y="117" font-size="15" fill="#0f172a">magazin</text>
<circle cx="459" cy="152" r="12" fill="#15803d"/>
<text x="482" y="157" font-size="15" fill="#0f172a">copac</text>
<rect x="445" y="182" width="28" height="14" fill="#d1d5db"/>
<text x="482" y="195" font-size="15" fill="#0f172a">stradă</text>
<rect x="445" y="222" width="28" height="12" fill="#3b82f6"/>
<text x="482" y="234" font-size="15" fill="#0f172a">râu</text>
<rect x="445" y="258" width="28" height="22" fill="#bbf7d0" stroke="#0f172a" stroke-width="1"/>
<text x="482" y="275" font-size="15" fill="#0f172a">pajiște</text>
</svg>`,
      caption: "Datorită legendei înțelegi imediat unde sunt școala, magazinul, copacii și râul."
    },
    {
      type: "widget",
      title: "Potrivește simbolul cu semnificația",
      widget: "match",
      options: {
        pairs: [
          ["🟦 linie albastră", "râu"],
          ["🟩 zonă verde", "parc sau pajiște"],
          ["🔺 triunghi maro", "munte"],
          ["✝️ cruce", "biserică"],
          ["🅿️ P albastru", "parcare"],
          ["➕ cruce verde", "farmacie"]
        ]
      },
      caption: "Sunt simboluri foarte folosite pe hărțile adevărate."
    },
    {
      type: "example",
      title: "Exemplu practic: planul clasei mele ✏️",
      html: `<p>Iată cum desenează Matteo planul clasei sale:</p>
<ol>
<li>👣 <b>Măsoară</b> clasa în pași: 8 pași lungime, 6 lățime.</li>
<li>📏 În caiet desenează un dreptunghi de <b>8 × 6 pătrățele</b>.</li>
<li>🚪 Marchează <b>ușa</b> și <b>ferestrele</b> pe laturile potrivite.</li>
<li>🟫 Desenează <b>băncile</b> ca niște dreptunghiuri mici, <b>catedra</b> ca un dreptunghi mai mare, <b>tabla</b> ca o linie groasă pe perete.</li>
<li>🔑 Face <b>legenda</b>: bancă = dreptunghi mic maro, catedră = dreptunghi albastru…</li>
</ol>
<p>Acum un coleg din altă clasă, privind planul, știe unde este banca lui Matteo!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: vânătoarea de comori 🏴‍☠️",
      html: `<p>Învățătoarea ascunde o comoară în grădină și le dă copiilor o <b>hartă</b>:</p>
<ul>
<li>🌳 Trei cercuri verzi = cei trei copaci.</li>
<li>🟫 Un dreptunghi maro = banca.</li>
<li>❌ Un X roșu = comoara, între bancă și cel mai mare copac.</li>
</ul>
<p>Copiii <b>învârt harta</b> până când desenele sunt așezate ca lucrurile adevărate din fața lor (se spune <b>a orienta harta</b>) și… găsesc comoara! 🎁</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? 🏛️",
      html: `<p>Acum mai bine de <b>1800 de ani</b>, la Roma, s-a făcut un plan uriaș al orașului, gravat în <b>marmură</b>: <b>Forma Urbis</b>. Avea aproximativ <b>18 metri</b> lățime și <b>13</b> înălțime, cât fațada unei clădiri, și arăta fiecare casă și fiecare cameră! Astăzi au rămas doar fragmente, iar arheologii încearcă să le pună la loc ca pe un puzzle.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? 🛰️",
      html: `<p>Astăzi hărțile se fac și cu <b>fotografiile sateliților</b>, care se rotesc în jurul Pământului la sute de kilometri înălțime și fotografiază totul <b>de sus</b>. Aplicațiile cu hărți de pe telefon folosesc tocmai aceste fotografii: poți vedea acoperișul școlii tale!</p>`
    },
    {
      type: "3d",
      title: "De la realitate la hartă: peisajul 3D",
      scene: "terrain",
      caption: "Rotește peisajul și privește-l chiar de sus: vei vedea muntele ca pe o pată maro, lacul și râul ca forme albastre, câmpia verde. Așa se naște o hartă geografică!",
      options: {
        features: {
          mountain: { label: "Munte", html: "Pe hărți se colorează în <b>maro</b>: cu cât este mai închis, cu atât este mai înalt." },
          hill: { label: "Deal", html: "Pe hărți este maro deschis sau galben." },
          plain: { label: "Câmpie", html: "Pe hărți se colorează în <b>verde</b>." },
          river: { label: "Râu", html: "Pe hărți este o <b>linie albastră</b> care se lărgește spre mare." },
          lake: { label: "Lac", html: "Pe hărți este o pată <b>albastră</b> închisă." },
          sea: { label: "Mare", html: "Pe hărți este <b>albastră</b>: cu cât este mai închisă, cu atât este mai adâncă." }
        }
      }
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege hărțile",
      intro: "Ți se par grele hărțile? Încearcă aceste alte moduri.",
      tabs: [
        {
          label: "🧱 Cu piesele de construcție",
          html: `<p>Construiește-ți camera cu <b>piese de construcție</b> sau cu cutiuțe: o piesă lungă pentru pat, una pătrată pentru noptieră…</p>
<p>Apoi așază-le pe o <b>foaie</b> și <b>conturează</b> cu creionul marginea fiecărei piese. Ia piesele: pe foaie a rămas <b>planul</b> camerei tale! Este exact ca și cum ai vedea-o de sus.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 1 }
        },
        {
          label: "🔦 Jocul umbrelor",
          html: `<p>În întuneric, ține o lanternă <b>chiar deasupra</b> unui obiect (o cană, o jucărie). <b>Umbra</b> de pe masă este forma pe care ai vedea-o de sus!</p>
<ul>
<li>☕ cana face o umbră rotundă;</li>
<li>📦 o cutie face o umbră dreptunghiulară;</li>
<li>🧸 un ursuleț face o umbră în formă de pată.</li>
</ul>
<p>Planurile sunt un pic ca „umbrele de sus” ale lucrurilor.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#1e293b"/>
<rect x="270" y="10" width="60" height="30" rx="6" fill="#facc15"/>
<polygon points="280,40 320,40 420,200 180,200" fill="#fef9c3" opacity="0.25"/>
<rect x="265" y="120" width="70" height="60" fill="#60a5fa"/>
<ellipse cx="300" cy="205" rx="45" ry="14" fill="#0f172a"/>
<rect x="0" y="200" width="600" height="40" fill="#78350f"/>
<ellipse cx="300" cy="215" rx="50" ry="12" fill="#1c1917"/>
<text x="480" y="90" font-size="17" fill="#fef9c3" text-anchor="middle">lanternă deasupra</text>
<text x="480" y="225" font-size="17" fill="#fef9c3" text-anchor="middle">umbră = forma de sus</text>
</svg>`
        },
        {
          label: "🌍 Hărțile altor popoare",
          html: `<p>În lume s-au făcut hărți în multe feluri:</p>
<ul>
<li>🐚 Locuitorii din <b>Insulele Marshall</b> (Oceanul Pacific) construiau <b>hărți din bețișoare și scoici</b>: scoicile erau insulele, bețișoarele arătau cum se mișcă valurile.</li>
<li>🏺 În <b>Mesopotamia</b> (Irakul de astăzi), acum aproximativ 2600 de ani, a fost gravată pe o tăbliță de lut una dintre cele mai vechi „hărți ale lumii”.</li>
<li>📜 <b>Tabula Peutingeriana</b> este o copie medievală a unei hărți romane a drumurilor: are aproape <b>7 metri</b> lungime și doar 34 cm lățime, ca un sul foarte lung!</li>
</ul>`
        },
        {
          label: "🧩 Citește planul parcului",
          html: `<p>Privește planul și apasă pe puncte: poți spune ce este fiecare lucru, uitându-te doar la forma văzută de sus?</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#bbf7d0"/>
<path d="M0 150 L600 150" stroke="#d6d3d1" stroke-width="26"/>
<ellipse cx="130" cy="70" rx="80" ry="40" fill="#60a5fa"/>
<circle cx="330" cy="70" r="22" fill="#15803d"/>
<circle cx="380" cy="80" r="22" fill="#15803d"/>
<rect x="470" y="210" width="80" height="20" fill="#a16207"/>
<rect x="100" y="210" width="90" height="60" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<circle cx="320" cy="240" r="30" fill="#e5e7eb" stroke="#64748b" stroke-width="4"/>
</svg>`,
            spots: [
              { x: 130, y: 70, label: "Lăcușor" },
              { x: 355, y: 75, label: "Copaci" },
              { x: 300, y: 150, label: "Alee" },
              { x: 510, y: 220, label: "Bancă" },
              { x: 145, y: 240, label: "Groapă cu nisip" },
              { x: 320, y: 240, label: "Fântână" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta hărților",
      nodes: [
        { id: "alto", label: "Vedere de sus", x: 50, y: 6, color: "#6366f1", html: "<p>A privi lucrurile de deasupra, ca o păsărică.</p>", why: "<p>De sus se văd toate lucrurile <b>împreună</b> și în poziția lor adevărată, fără ca unul să-l ascundă pe altul. De aceea cartografii (cei care fac hărți) desenează mereu de sus.</p>" },
        { id: "riduzione", label: "Reducere la scară", x: 20, y: 30, color: "#f97316", html: "<p>A micșora totul în același fel.</p>", why: "<p>O foaie nu poate fi cât un oraș! Micșorând totul <b>cu aceeași măsură</b> (de exemplu 1 pătrățel = 1 metru), formele și distanțele rămân corecte.</p>" },
        { id: "simboli", label: "Simboluri", x: 50, y: 30, color: "#0ea5e9", html: "<p>Desene mici, culori și linii în locul lucrurilor adevărate.</p>", why: "<p>Dacă am desena fiecare casă cu toate ferestrele, harta ar fi încurcată. Simbolurile sunt <b>simple</b> și rapid de recunoscut.</p>" },
        { id: "legenda", label: "Legendă", x: 80, y: 30, color: "#a855f7", html: "<p>Chenarul care explică simbolurile.</p>", why: "<p>Cuvântul vine din latinescul <i>legenda</i>, „lucrurile de citit”. Fără legendă, simbolurile ar fi un cod secret!</p>" },
        { id: "pianta", label: "Plan", x: 20, y: 62, color: "#16a34a", html: "<p>Spații mici: o cameră, o casă, școala.</p>", why: "<p>Se folosește puțină reducere, deci se văd multe detalii: uși, ferestre, mobilă. <b>Arhitecții</b> desenează planurile înainte de a construi o casă.</p>" },
        { id: "mappa", label: "Hartă", x: 50, y: 62, color: "#eab308", html: "<p>Spații mai mari: cartierul, orașul.</p>", why: "<p>Se micșorează mai mult: casele devin dreptunghiuri mici și se văd mai ales străzile, piețele și parcurile.</p>" },
        { id: "carta", label: "Hartă geografică", x: 80, y: 62, color: "#ef4444", html: "<p>Spații uriașe: Italia, continentele.</p>", why: "<p>Se micșorează foarte mult: un oraș devine un punct. Geograful grec <b>Ptolemeu</b>, acum aproximativ 1900 de ani, a scris cum se desenează lumea cu paralele și meridiane.</p>" },
        { id: "colori", label: "Culori convenționale", x: 50, y: 92, color: "#14b8a6", html: "<p>Albastru = apă, verde = câmpie, maro = munte.</p>", why: "<p>„Convențional” înseamnă <b>hotărât de toți laolaltă</b>. Dacă toți folosesc aceleași culori, oricine din lume poate citi o hartă fără să știe limba celui care a făcut-o.</p>" }
      ],
      edges: [
        ["alto", "riduzione", "apoi se face"],
        ["alto", "simboli", "se folosesc"],
        ["simboli", "legenda", "explicate în"],
        ["riduzione", "pianta", "puțină:"],
        ["riduzione", "mappa", "mai multă:"],
        ["riduzione", "carta", "foarte multă:"],
        ["simboli", "colori", "ca"],
        ["carta", "colori", "folosește"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: legenda",
      questions: [
        { type: "mc", q: "La ce servește legenda?", options: ["Să explice simbolurile hărții", "Să coloreze harta", "Să măsoare temperatura"], answer: 0, explain: "Legenda este „dicționarul” simbolurilor." },
        { type: "mc", q: "De obicei, pe hărți, albastrul arată…", options: ["munții", "apa", "străzile"], answer: 1, explain: "Albastru = mări, lacuri și râuri." },
        { type: "tf", q: "Pentru a desena cartierul se folosește aceeași reducere ca pentru cameră.", answer: false, explain: "Cartierul este mai mare: trebuie să micșorăm mai mult." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte 📌",
      html: `<ul>
<li>Planurile și hărțile arată locurile <b>văzute de sus</b>.</li>
<li>Ca să le desenăm, <b>micșorăm</b> totul în același fel (reducere la scară).</li>
<li><b>Plan</b> = spații mici; <b>hartă</b> = spații mai mari; <b>hartă geografică</b> = spații uriașe.</li>
<li><b>Simbolurile</b> sunt explicate în <b>legendă</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Plan", d: "Desen de sus al unui spațiu mic, ca o cameră." },
    { t: "Hartă", d: "Desen de sus al unui spațiu mai mare, ca un cartier." },
    { t: "Hartă geografică", d: "Desen al unor teritorii foarte mari: regiuni, state, continente." },
    { t: "Vedere zenitală", d: "A privi de sus, chiar de deasupra." },
    { t: "Reducere la scară", d: "A micșora totul în același fel ca să încapă pe foaie." },
    { t: "Simbol", d: "Un desen mic sau o culoare care ține locul unui lucru adevărat." },
    { t: "Legendă", d: "Chenarul care explică ce înseamnă simbolurile." },
    { t: "Cartograf", d: "Persoana care desenează hărți." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Văzut de sus, un pahar pare…", options: ["un dreptunghi", "un cerc", "o stea"], answer: 1, explain: "De deasupra se vede marginea rotundă: un cerc." },
      { type: "mc", q: "Cum se numește vederea „din zbor de pasăre”, chiar de sus?", options: ["Frontală", "Zenitală", "Laterală"], answer: 1, explain: "Vedere zenitală = de sus." },
      { type: "text", q: "Cum se numește chenarul care explică simbolurile unei hărți?", answer: ["legenda", "legendă", "o legendă"], explain: "Legenda." },
      { type: "order", q: "Pune în ordine, de la desenul unui spațiu mai mic la unul mai mare.", items: ["Planul camerei", "Harta cartierului", "Harta geografică a Italiei"], explain: "Plan → hartă → hartă geografică." },
      { type: "num", q: "1 pătrățel = 1 pas. Clasa are 9 pași lungime. Câte pătrățele desenezi?", answer: 9, tol: 0, unit: "pătrățele", explain: "9 pași = 9 pătrățele." },
      { type: "tf", q: "Pe hărțile geografice câmpia este adesea colorată în verde.", answer: true, explain: "Verde = câmpie, maro = munte, albastru = apă." },
      { type: "mc", q: "Văzut de sus, un pat pare…", options: ["un dreptunghi", "un cerc", "un triunghi"], answer: 0, explain: "Patul, de deasupra, este un dreptunghi." },
      { type: "mc", q: "De ce se folosesc simbolurile pe hărți?", options: ["Ca să fie mai ușor de citit", "Ca să le ascundă de pirați", "Pentru că desenele adevărate sunt interzise"], answer: 0, explain: "Simbolurile sunt simple și rapid de recunoscut." },
      { type: "tf", q: "A micșora „la scară” înseamnă a micșora fiecare lucru în alt fel.", answer: false, explain: "Totul trebuie micșorat în același fel, ca proporțiile să rămână corecte." },
      { type: "order", q: "Pune în ordine pașii pentru a desena planul clasei.", items: ["Măsor clasa în pași", "Desenez conturul pe pătrățele", "Desenez uși, ferestre și bănci", "Fac legenda"], explain: "Mai întâi se măsoară, apoi se desenează conturul, apoi interiorul, în sfârșit se explică simbolurile." },
      { type: "mc", q: "Ce era Forma Urbis?", options: ["Un plan al Romei gravat în marmură", "O aplicație pentru hărți", "O busolă romană"], answer: 0, explain: "Un uriaș plan de marmură al Romei antice." }
    ]
  }
});
