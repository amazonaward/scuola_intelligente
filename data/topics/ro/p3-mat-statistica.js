TOPIC('ro', {
  id: "p3-mat-statistica",
  title: "Anchete și grafice",
  intro: "Care este gustul preferat de înghețată al clasei tale? 🍦 Ca să afli, trebuie să faci o <b>anchetă</b>: pui o întrebare, aduni răspunsurile (<b>datele</b>), le numeri și le desenezi într-un <b>grafic</b>. Devenim mici statisticieni!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Etapele unei anchete",
      html: `<p>O <b>anchetă statistică</b> este o cercetare ca să afli ceva despre un grup de persoane, animale sau lucruri. Se face în <b>5 etape</b>:</p>
<ol>
<li>❓ <b>Întrebarea</b>: hotărăsc ce vreau să aflu. Ex. <i>„Care este animalul tău preferat?”</i></li>
<li>👥 <b>Grupul</b>: hotărăsc pe cine întreb (ex. cei 20 de copii din clasa a III-a B).</li>
<li>📝 <b>Culegerea datelor</b>: întreb pe fiecare și notez răspunsurile.</li>
<li>🔢 <b>Numărarea</b>: pun datele într-un <b>tabel</b>.</li>
<li>📊 <b>Graficul</b>: desenez datele ca să le văd „dintr-o privire” și să trag <b>concluziile</b>.</li>
</ol>
<p>Răspunsurile pe care le adunăm se numesc <b>date</b>. Pot fi <b>cuvinte</b> (culoare, gust, sport) sau <b>numere</b> (vârstă, număr de frați, înălțime).</p>`
    },
    {
      type: "text",
      title: "Culegerea datelor: liniuțele",
      html: `<p>Ca să numeri repede se folosesc <b>liniuțele</b>: o liniuță | pentru fiecare răspuns. La fiecare 5 răspunsuri se face un <b>mănunchi</b>: patru liniuțe și o bară peste ele. Așa datele se numără din 5 în 5!</p>
<p>Apoi se scrie totalul în coloana <b>frecvenței</b>, adică <b>de câte ori</b> a apărut fiecare răspuns.</p>
<table>
<tr><th>Animalul</th><th>Liniuțe</th><th>Frecvența</th></tr>
<tr><td>🐶 Câine</td><td>卌 |||</td><td>8</td></tr>
<tr><td>🐱 Pisică</td><td>卌</td><td>5</td></tr>
<tr><td>🐰 Iepure</td><td>|||</td><td>3</td></tr>
<tr><td>🐟 Pește</td><td>||||</td><td>4</td></tr>
<tr><td><b>Total</b></td><td></td><td><b>20</b></td></tr>
</table>
<p>✅ Verificare: totalul frecvențelor trebuie să fie egal cu numărul persoanelor întrebate (20).</p>`
    },
    {
      type: "svg",
      title: "Histograma animalelor preferate",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<text x="320" y="28" font-size="20" fill="#1f2937" text-anchor="middle" font-weight="bold">Animalele preferate din clasa a III-a B</text>
<g stroke="#e2e8f0" stroke-width="2">
<line x1="80" y1="250" x2="560" y2="250"/><line x1="80" y1="225" x2="560" y2="225"/><line x1="80" y1="200" x2="560" y2="200"/><line x1="80" y1="175" x2="560" y2="175"/>
<line x1="80" y1="150" x2="560" y2="150"/><line x1="80" y1="125" x2="560" y2="125"/><line x1="80" y1="100" x2="560" y2="100"/><line x1="80" y1="75" x2="560" y2="75"/><line x1="80" y1="50" x2="560" y2="50"/>
</g>
<line x1="80" y1="275" x2="560" y2="275" stroke="#1f2937" stroke-width="3"/>
<line x1="80" y1="40" x2="80" y2="275" stroke="#1f2937" stroke-width="3"/>
<g font-size="16" fill="#1f2937" text-anchor="end">
<text x="72" y="280">0</text><text x="72" y="230">2</text><text x="72" y="180">4</text><text x="72" y="130">6</text><text x="72" y="80">8</text>
</g>
<rect x="110" y="75" width="80" height="200" fill="#f97316"/>
<rect x="230" y="150" width="80" height="125" fill="#3b82f6"/>
<rect x="350" y="200" width="80" height="75" fill="#22c55e"/>
<rect x="470" y="175" width="80" height="100" fill="#a855f7"/>
<g font-size="20" text-anchor="middle" font-weight="bold">
<text x="150" y="68" fill="#c2410c">8</text><text x="270" y="143" fill="#1d4ed8">5</text><text x="390" y="193" fill="#15803d">3</text><text x="510" y="168" fill="#7e22ce">4</text>
</g>
<g font-size="18" text-anchor="middle" fill="#1f2937">
<text x="150" y="300">🐶 câine</text><text x="270" y="300">🐱 pisică</text><text x="390" y="300">🐰 iepure</text><text x="510" y="300">🐟 pește</text>
</g>
<text x="30" y="160" font-size="16" fill="#475569" transform="rotate(-90 30 160)" text-anchor="middle">numărul de copii</text>
</svg>`,
      caption: "Fiecare coloană este la fel de înaltă ca frecvența: se vede imediat că cel mai votat animal este câinele."
    },
    {
      type: "text",
      title: "Tipurile de grafice",
      html: `<ul>
<li>📊 <b>Histograma</b> (grafic cu bare sau coloane): fiecare răspuns are o coloană la fel de înaltă ca frecvența lui. Pe axa orizontală sunt răspunsurile, pe cea verticală numerele. Coloanele trebuie să aibă <b>toate aceeași lățime</b>.</li>
<li>🖼️ <b>Ideograma</b> (pictograma): se folosesc <b>desenașe</b> (simboluri). Atenție la <b>legendă</b>: un desen poate valora 1, dar și 2, 5 sau 10!</li>
<li>🟦 <b>Diagrama cu pătrățele</b>: ca histograma, dar se colorează un pătrățel pentru fiecare dată.</li>
<li>🥧 <b>Graficul circular</b> (în formă de tort): cercul întreg este totalul, iar fiecare felie este o parte. Îl vei folosi mai mult în anii următori.</li>
</ul>`
    },
    {
      type: "svg",
      title: "O ideogramă cu legendă",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fff7ed"/>
<text x="300" y="30" font-size="20" text-anchor="middle" font-weight="bold" fill="#1f2937">Înghețate vândute într-o săptămână</text>
<text x="20" y="85" font-size="20" fill="#1f2937">🍫 ciocolată</text>
<text x="20" y="145" font-size="20" fill="#1f2937">🍓 căpșuni</text>
<text x="20" y="205" font-size="20" fill="#1f2937">🍋 lămâie</text>
<g fill="#f472b6" stroke="#9d174d" stroke-width="2">
<circle cx="210" cy="78" r="18"/><circle cx="260" cy="78" r="18"/><circle cx="310" cy="78" r="18"/><circle cx="360" cy="78" r="18"/><circle cx="410" cy="78" r="18"/><circle cx="460" cy="78" r="18"/>
<circle cx="210" cy="138" r="18"/><circle cx="260" cy="138" r="18"/><circle cx="310" cy="138" r="18"/><circle cx="360" cy="138" r="18"/>
<circle cx="210" cy="198" r="18"/><circle cx="260" cy="198" r="18"/>
</g>
<path d="M260 216 L260 180 A18 18 0 0 1 260 216 Z" fill="#fff7ed"/>
<text x="520" y="85" font-size="20" fill="#9d174d" font-weight="bold">60</text>
<text x="520" y="145" font-size="20" fill="#9d174d" font-weight="bold">40</text>
<text x="520" y="205" font-size="20" fill="#9d174d" font-weight="bold">15</text>
<rect x="150" y="235" width="300" height="34" rx="8" fill="#ffffff" stroke="#9d174d" stroke-width="2"/>
<circle cx="180" cy="252" r="12" fill="#f472b6" stroke="#9d174d" stroke-width="2"/>
<text x="200" y="259" font-size="18" fill="#1f2937">Legendă: 1 bilă = 10 înghețate</text>
</svg>`,
      caption: "Cu legenda „1 bilă = 10”, o jumătate de bilă valorează 5: lămâia are 10 + 5 = 15 înghețate."
    },
    {
      type: "quiz",
      title: "Mini-test: citirea datelor",
      questions: [
        { type: "num", q: "În histograma animalelor, câți copii au ales pisica?", answer: 5, explain: "Coloana pisicii ajunge la 5." },
        { type: "mc", q: "În ideograma înghețatelor, fiecare bilă valorează…", options: ["1 înghețată", "10 înghețate", "5 înghețate"], answer: 1, explain: "O spune legenda: 1 bilă = 10 înghețate." },
        { type: "num", q: "Câte înghețate de căpșuni au fost vândute?", answer: 40, explain: "4 bile × 10 = 40 de înghețate." }
      ]
    },
    {
      type: "text",
      title: "Citirea unui grafic: moda și comparația",
      html: `<p>Un grafic servește ca să răspunzi la întrebări. Uitându-ne la histograma animalelor:</p>
<ul>
<li>Care este răspunsul <b>cel mai frecvent</b>? <b>Câinele</b> (8). Se numește <b>moda</b>: este răspunsul care apare <b>de cele mai multe ori</b>. 👑</li>
<li>Care este cel mai puțin ales? Iepurele (3).</li>
<li>Cu câți copii mai mulți preferă câinele față de pisică? 8 − 5 = <b>3</b>.</li>
<li>Câți copii au răspuns în total? 8 + 5 + 3 + 4 = <b>20</b>.</li>
</ul>
<p>Atenție: moda <b>nu</b> este un număr din tabel, este <b>răspunsul</b> („câine”)!</p>`
    },
    {
      type: "widget",
      title: "Date cu cuvinte sau date cu numere?",
      widget: "classify",
      options: {
        groups: ["Răspuns cu cuvinte", "Răspuns cu numere"],
        items: [
          ["🎨 Culoarea preferată", 0],
          ["🎂 Ce vârstă ai?", 1],
          ["⚽ Sportul preferat", 0],
          ["👨‍👩‍👧 Câți frați ai?", 1],
          ["🍝 Mâncarea preferată", 0],
          ["👟 Numărul la încălțăminte", 1],
          ["🚌 Cum vii la școală?", 0],
          ["📚 Câte cărți ai citit anul acesta?", 1]
        ]
      },
      caption: "Fiecare întrebare dintr-o anchetă dă date de alt fel: împarte-le în cele două grupuri."
    },
    {
      type: "example",
      title: "Exemplu practic: cum veniți la școală?",
      html: `<p>Clasa a III-a A (24 de elevi) face o anchetă: <i>„Cum vii la școală?”</i></p>
<table>
<tr><th>Mijlocul</th><th>Frecvența</th></tr>
<tr><td>🚶 pe jos</td><td>9</td></tr>
<tr><td>🚗 cu mașina</td><td>7</td></tr>
<tr><td>🚌 cu autobuzul școlar</td><td>5</td></tr>
<tr><td>🚲 cu bicicleta</td><td>3</td></tr>
</table>
<p>Verificare: 9 + 7 + 5 + 3 = <b>24</b> ✔. Moda este <b>pe jos</b>. Concluzie: mai mult de o treime din clasă vine pe jos… iar clasa propune primăriei un <b>pedibus</b> (un „autobuz” de copii care merg pe jos, în grup)! 🚸</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: vremea unei săptămâni",
      html: `<p>În fiecare dimineață Marta se uită pe cer și notează vremea timp de 2 săptămâni (14 zile):</p>
<ul>
<li>☀️ soare: |||| | → <b>6</b></li>
<li>☁️ înnorat: |||| → <b>4</b></li>
<li>🌧️ ploaie: ||| → <b>3</b></li>
<li>❄️ zăpadă: | → <b>1</b></li>
</ul>
<p>Total 6 + 4 + 3 + 1 = 14 ✔. Vremea cea mai frecventă (moda) este <b>soarele</b>. A plouat jumătate din zilele cu soare (3 este jumătatea lui 6).</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>În Italia <b>ISTAT</b> (institutul de statistică) face o anchetă uriașă pe toată populația: <b>recensământul</b>. Astăzi se face în fiecare an cu eșantioane de familii. Încă vechii <b>romani</b> făceau recensământul din 5 în 5 ani ca să numere cetățenii: magistratul care se ocupa de asta se numea <b>cenzor</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Graficul cu bare și graficul circular au fost inventate de un scoțian, <b>William Playfair</b>, între 1786 și 1801. Înaintea lui, datele se scriau doar în tabele lungi de numere! Iar asistenta <b>Florence Nightingale</b> a folosit grafice colorate în 1858 ca să convingă guvernul englez să îmbunătățească igiena din spitale, salvând foarte multe vieți. 🏥</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Ancheta: întrebare → culegerea datelor → tabel → grafic → concluzii.</li>
<li><b>Frecvența</b> = de câte ori apare un răspuns.</li>
<li><b>Moda</b> = răspunsul cel mai frecvent.</li>
<li>La ideogramă citește mereu <b>legenda</b>!</li>
<li>Totalul frecvențelor = numărul persoanelor întrebate.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege graficele",
      intro: "Graficele ți se par desene misterioase? Iată alte moduri de a le vedea și de a le construi.",
      tabs: [
        {
          label: "🧱 Turnuri de cuburi",
          html: `<p>Construiește o histogramă cu <b>cuburi</b> sau cubulețe! Pentru fiecare copil care votează „câine” pui un cubuleț pe turnul câinelui și tot așa.</p>
<p>La sfârșit pune turnurile la rând: cel mai înalt este <b>moda</b>! Mai jos cubulețele formează un turn: schimbă numerele și încearcă să-ți imaginezi turnurile pentru fiecare răspuns.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 8, b: 1 }
        },
        {
          label: "🙋 Graficul uman",
          html: `<p>Se poate face un grafic… cu oameni! În sala de sport sau în curte:</p>
<ol>
<li>desenați pe jos cu creta categoriile (câine, pisică, iepure, pește);</li>
<li>fiecare copil se pune <b>la rând</b> în spatele răspunsului lui;</li>
<li>priviți de sus (sau faceți o poză de la fereastră): rândurile sunt <b>coloanele</b> histogramei! 📸</li>
</ol>
<p>Așa înțelegi că fiecare pătrățel al graficului este <b>o persoană adevărată</b>.</p>`
        },
        {
          label: "🔢 Numără cu liniuțe",
          html: `<p>Încearcă să numeri ca statisticienii: adaugă un 🖊️ pentru fiecare răspuns și oprește-te când ai terminat. La fiecare 5 faci un mănunchi!</p>
<p>În multe țări liniuțele se fac în alt fel: în <b>China și în Japonia</b> se scrie caracterul <b>正</b> (care are 5 trăsături), o trăsătură pentru fiecare vot; în <b>America Latină</b> se desenează un pătrat cu o diagonală (4 laturi + 1 = 5).</p>`,
          widget: "counter",
          options: { emoji: "🖊️", max: 30 }
        },
        {
          label: "🥧 Graficul circular",
          html: `<p>Dacă clasa este un <b>tort întreg</b>, fiecare răspuns ia o <b>felie</b>. Cu 20 de copii: câinele (8 voturi) ia aproape jumătate din tort, iepurele (3) o felie mică.</p>
<p>Este un mod folosit foarte mult în ziare și la TV și îți va folosi când vei studia fracțiile și procentele!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<path d="M150 130 L150 30 A100 100 0 0 1 209 211 Z" fill="#f97316"/>
<path d="M150 130 L209 211 A100 100 0 0 1 69 189 Z" fill="#3b82f6"/>
<path d="M150 130 L69 189 A100 100 0 0 1 55 99 Z" fill="#22c55e"/>
<path d="M150 130 L55 99 A100 100 0 0 1 150 30 Z" fill="#a855f7"/>
<circle cx="150" cy="130" r="100" fill="none" stroke="#1f2937" stroke-width="3"/>
<g font-size="20" fill="#1f2937">
<rect x="300" y="50" width="22" height="22" fill="#f97316"/><text x="332" y="68">câine 8</text>
<rect x="300" y="90" width="22" height="22" fill="#3b82f6"/><text x="332" y="108">pisică 5</text>
<rect x="300" y="130" width="22" height="22" fill="#22c55e"/><text x="332" y="148">iepure 3</text>
<rect x="300" y="170" width="22" height="22" fill="#a855f7"/><text x="332" y="188">pește 4</text>
</g>
<text x="300" y="230" font-size="18" fill="#475569">tortul întreg = 20 de copii</text>
</svg>`
        },
        {
          label: "🕵️ Detectivul datelor",
          html: `<p>Gândește-te la anchetă ca la munca unui <b>detectiv</b> 🔍:</p>
<ul>
<li><b>misterul</b> este întrebarea;</li>
<li><b>indiciile</b> sunt datele pe care le aduni;</li>
<li><b>carnețelul</b> este tabelul;</li>
<li><b>panoul</b> cu fotografii legate între ele este graficul;</li>
<li><b>soluția</b> cazului este concluzia!</li>
</ul>
<p>Un detectiv bun nu sare niciun indiciu și nu inventează niciunul: și statisticianul trebuie să numere <b>toate</b> datele, cu cinste.</p>`
        },
        {
          label: "🇺🇸 «Line plot» cu cruciulițe (SUA)",
          html: "<p>În școlile din <b>Statele Unite</b>, în clasa a doua și a treia, se învață <b>line plot</b>-ul: un grafic foarte rapid de făcut, cu o <b>linie de numere</b> și multe <b>cruciulițe</b>.</p><ol><li>Pune o întrebare cu răspunsuri <b>numerice</b>: «Câți frați sau surori ai?».</li><li>Desenează o linie și scrie dedesubt numerele posibile: 0, 1, 2, 3.</li><li>Pentru fiecare răspuns pune o <b>✕ deasupra numărului</b>, una peste alta.</li><li>Citește graficul: 3 copii nu au frați, 6 au 1, 4 au 2, 1 are 3.</li></ol><p>Coloana de cruciulițe cea mai înaltă este <b>moda</b>: aici este <b>1</b>. Numărând toate cruciulițele afli câți copii au răspuns: 3 + 6 + 4 + 1 = <b>14</b>.</p><p>🎯 Fă un line plot al clasei tale cu întrebarea: «Câte litere are prenumele tău?».</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"60\" y1=\"240\" x2=\"540\" y2=\"240\" stroke=\"#334155\" stroke-width=\"3\"/><line x1=\"120\" y1=\"232\" x2=\"120\" y2=\"248\" stroke=\"#334155\" stroke-width=\"3\"/><text x=\"120\" y=\"272\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">0</text><text x=\"120\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"120\" y=\"192\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"120\" y=\"162\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"240\" y1=\"232\" x2=\"240\" y2=\"248\" stroke=\"#334155\" stroke-width=\"3\"/><text x=\"240\" y=\"272\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"240\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"192\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"162\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"132\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"102\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"240\" y=\"72\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"360\" y1=\"232\" x2=\"360\" y2=\"248\" stroke=\"#334155\" stroke-width=\"3\"/><text x=\"360\" y=\"272\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><text x=\"360\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"360\" y=\"192\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"360\" y=\"162\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"360\" y=\"132\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><line x1=\"480\" y1=\"232\" x2=\"480\" y2=\"248\" stroke=\"#334155\" stroke-width=\"3\"/><text x=\"480\" y=\"272\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><text x=\"480\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">✕</text><text x=\"300\" y=\"296\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">Câți frați sau surori ai?</text><text x=\"400\" y=\"70\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Coloana cea mai înaltă</text><text x=\"400\" y=\"90\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">este moda: 1</text></svg>"
        },
        {
          label: "🇬🇧 «Roza» lui Florence Nightingale (Anglia)",
          html: "<p><b>Florence Nightingale</b> era o asistentă <b>engleză</b>. În timpul războiului din Crimeea (1853–1856) îngrijea soldații și a observat că foarte mulți se îmbolnăveau din cauza <b>murdăriei</b> din spitale. Ca să convingă guvernul să le cureţe, în 1858 a desenat un grafic nou, în formă de <b>roză</b>: un cerc împărțit în <b>12 felii</b>, câte una pentru fiecare lună. Cu cât felia este mai lungă, cu atât numărul este mai mare. Și datorită graficelor ei, spitalele au devenit mai curate și mai sigure.</p><p>Construiește <b>roza zilelor de naștere</b> ale clasei tale:</p><ol><li>Desenează cu compasul câteva cercuri cu același centru, la 1, 2, 3, 4 pătrățele: fiecare cerc valorează <b>1 copil</b>.</li><li>Împarte cercul în <b>12 felii</b> egale (ca orele ceasului) și scrie lunile.</li><li>Pentru fiecare lună colorează felia până la cercul potrivit: dacă în mai își serbează ziua 4 copii, ajungi până la al patrulea cerc.</li></ol><p>Dintr-o privire vezi luna cu cele mai multe zile de naștere. În august nu este nimeni!</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fdf2f8\"/><circle cx=\"200\" cy=\"150\" r=\"30\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><circle cx=\"200\" cy=\"150\" r=\"60\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><circle cx=\"200\" cy=\"150\" r=\"90\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><circle cx=\"200\" cy=\"150\" r=\"120\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><path d=\"M200,150 L200,90 A60,60 0 0 1 230,98 Z\" fill=\"#60a5fa\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"235.7\" y=\"21.7\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">I</text><path d=\"M200,150 L215,124 A30,30 0 0 1 226,135 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"297.6\" y=\"57.4\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">F</text><path d=\"M200,150 L277.9,105 A90,90 0 0 1 290,150 Z\" fill=\"#34d399\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"333.3\" y=\"119.3\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">M</text><path d=\"M200,150 L260,150 A60,60 0 0 1 252,180 Z\" fill=\"#fbbf24\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"333.3\" y=\"190.7\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><path d=\"M200,150 L303.9,210 A120,120 0 0 1 260,253.9 Z\" fill=\"#60a5fa\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"297.6\" y=\"252.6\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">M</text><path d=\"M200,150 L215,176 A30,30 0 0 1 200,180 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"235.7\" y=\"288.3\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">I</text><path d=\"M200,150 L200,210 A60,60 0 0 1 170,202 Z\" fill=\"#34d399\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"164.3\" y=\"288.3\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">I</text><text x=\"102.4\" y=\"252.6\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><path d=\"M200,150 L122.1,195 A90,90 0 0 1 110,150 Z\" fill=\"#60a5fa\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"66.7\" y=\"190.7\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">S</text><path d=\"M200,150 L140,150 A60,60 0 0 1 148,120 Z\" fill=\"#f472b6\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"66.7\" y=\"119.3\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">O</text><path d=\"M200,150 L174,135 A30,30 0 0 1 185,124 Z\" fill=\"#34d399\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"102.4\" y=\"57.4\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">N</text><path d=\"M200,150 L170,98 A60,60 0 0 1 200,90 Z\" fill=\"#fbbf24\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"164.3\" y=\"21.7\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">D</text><text x=\"370\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Zilele de naștere ale clasei</text><text x=\"370\" y=\"90\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">• 12 felii = 12 luni</text><text x=\"370\" y=\"114\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">• fiecare felie = 30°</text><text x=\"370\" y=\"138\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">• 1 cerculeț = 1 copil</text><text x=\"370\" y=\"172\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Mai are cea mai lungă</text><text x=\"370\" y=\"194\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">felie: 4 copii!</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta anchetei: atinge un nod și descoperă de ce",
      nodes: [
        { id: "domanda", label: "Întrebare", x: 50, y: 6, color: "#f59e0b", html: "Ceea ce vrem să aflăm despre un grup.", why: "Orice anchetă se naște dintr-o curiozitate sau dintr-o nevoie: să afli câte persoane sunt, ce preferă, de ce au nevoie." },
        { id: "gruppo", label: "Grup (populație)", x: 18, y: 24, color: "#64748b", html: "Persoanele, animalele sau lucrurile pe care le întrebăm.", why: "În statistică grupul se numește „populație” chiar dacă sunt… copaci sau mașini! Când grupul este uriaș se alege doar o parte, „eșantionul”." },
        { id: "dati", label: "Date", x: 50, y: 30, color: "#16a34a", html: "Răspunsurile culese: cuvinte sau numere.", why: "„Dată” înseamnă „ceea ce ne este dat”, adică răspunsul pe care îl primim. Fără date reale, concluziile sunt doar păreri." },
        { id: "tacche", label: "Liniuțe", x: 82, y: 24, color: "#0ea5e9", html: "Liniuțe pentru numărat, în mănunchiuri de câte 5.", why: "Sunt unul dintre cele mai vechi moduri de a număra: osul de la Ishango, găsit în Africa centrală și vechi de cam 20 000 de ani, are crestate șiruri de liniuțe." },
        { id: "tabella", label: "Tabel și frecvență", x: 50, y: 52, color: "#2563eb", html: "Pentru fiecare răspuns se scrie de câte ori apare.", why: "A pune datele în ordine, pe rânduri și coloane, le face ușor de numărat și de verificat: totalul trebuie să se potrivească." },
        { id: "grafici", label: "Grafice", x: 25, y: 74, color: "#a855f7", html: "Histogramă, ideogramă, cu pătrățele, circular.", why: "Creierul înțelege mai repede un desen decât o listă de numere. William Playfair a inventat graficul cu bare în 1786 și pe cel circular în 1801." },
        { id: "moda", label: "Moda", x: 75, y: 74, color: "#ec4899", html: "Răspunsul cel mai frecvent.", why: "Se numește așa pentru că arată ceea ce „este la modă”, adică alegerea cea mai răspândită în grup." },
        { id: "conclusioni", label: "Concluzii", x: 50, y: 93, color: "#14b8a6", html: "Ce am descoperit și ce putem face.", why: "Anchetele servesc la luarea deciziilor: primăriile hotărăsc unde să facă școli și drumuri, medicii care tratamente funcționează mai bine." }
      ],
      edges: [
        ["domanda", "gruppo", "pe cine întreb?"],
        ["domanda", "dati", "răspunsurile sunt"],
        ["dati", "tacche", "se numără cu"],
        ["dati", "tabella", "se ordonează în"],
        ["tabella", "grafici", "se desenează"],
        ["tabella", "moda", "se găsește"],
        ["grafici", "conclusioni", "ajută la tragerea"],
        ["moda", "conclusioni", "duce la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: moda și graficele",
      questions: [
        { type: "mc", q: "În exemplul „Cum vii la școală?”, care este moda?", options: ["cu mașina", "pe jos", "cu bicicleta"], answer: 1, explain: "„Pe jos” are cea mai mare frecvență: 9." },
        { type: "tf", q: "Într-o histogramă coloanele trebuie să aibă lățimi diferite.", answer: false, explain: "Toate coloanele au aceeași lățime: se schimbă doar înălțimea." },
        { type: "num", q: "Cu legenda „1 🍎 = 2 copii”, câți copii arată 4 mere?", answer: 8, explain: "4 × 2 = 8 copii." }
      ]
    }
  ],
  glossary: [
    { t: "Anchetă statistică", d: "Cercetare pentru a afla informații despre un grup, culegând date." },
    { t: "Date", d: "Răspunsurile culese în timpul anchetei." },
    { t: "Frecvență", d: "De câte ori apare un răspuns." },
    { t: "Tabel", d: "Schemă pe rânduri și coloane în care se ordonează datele." },
    { t: "Histogramă", d: "Grafic cu coloane: fiecare coloană este la fel de înaltă ca frecvența." },
    { t: "Ideogramă", d: "Grafic făcut din simboluri; fiecare simbol valorează cât spune legenda." },
    { t: "Legendă", d: "Explicația a cât valorează fiecare simbol sau culoare dintr-un grafic." },
    { t: "Moda", d: "Răspunsul cu cea mai mare frecvență." },
    { t: "Recensământ", d: "Anchetă care numără toată populația unei țări." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Pune în ordine etapele unei anchete.", items: ["Alegerea întrebării", "Culegerea datelor", "Ordonarea datelor în tabel", "Desenarea graficului", "Tragerea concluziilor"], explain: "Mai întâi se hotărăște ce să întrebi, apoi se culeg, se numără, se desenează și se interpretează datele." },
      { type: "text", q: "Cum se numește răspunsul care apare de cele mai multe ori?", answer: ["moda", "moda datelor"], explain: "Răspunsul cel mai frecvent este moda." },
      { type: "mc", q: "Un grafic făcut din desenașe se numește…", options: ["histogramă", "ideogramă", "tabel"], answer: 1, explain: "Ideograma folosește simboluri." },
      { type: "num", q: "Câte voturi arată acest mănunchi de liniuțe: 卌 卌 || ?", answer: 12, explain: "Două mănunchiuri de câte 5 = 10, plus 2 liniuțe = 12." },
      { type: "tf", q: "Totalul frecvențelor trebuie să fie egal cu numărul persoanelor întrebate.", answer: true, explain: "Fiecare persoană dă un răspuns: adunându-le se regăsesc toate." },
      { type: "num", q: "Legendă: 1 ⭐ = 5 copii. Câți copii arată 3 stele?", answer: 15, explain: "3 × 5 = 15." },
      { type: "mc", q: "Care întrebare dă un răspuns cu un număr?", options: ["Care este culoarea ta preferată?", "Câte animale ai acasă?", "Care este sportul tău preferat?"], answer: 1, explain: "„Câte” cere un număr." },
      { type: "num", q: "Pizza 7, paste 6, risotto 2: câți copii au răspuns în total?", answer: 15, explain: "7 + 6 + 2 = 15." },
      { type: "num", q: "Pizza 7, paste 6, risotto 2: cu câți copii mai mulți preferă pizza față de risotto?", answer: 5, explain: "7 − 2 = 5." },
      { type: "tf", q: "În ideogramă fiecare simbol valorează mereu 1.", answer: false, explain: "Depinde de legendă: poate valora 1, 2, 5, 10…" },
      { type: "mc", q: "Cine a inventat graficul cu bare?", options: ["William Playfair", "Leonardo da Vinci", "Galileo Galilei"], answer: 0, explain: "Scoțianul William Playfair, în 1786." }
    ]
  }
});
