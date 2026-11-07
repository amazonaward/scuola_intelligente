TOPIC('ro', {
  id: "p3-mat-misure-lunghezza",
  title: "Măsurile de lungime",
  intro: "Cât de lungă este banca ta? Și cât de înalt ești tu? 📏 Ca să răspundem folosim <b>metrul</b> și „copiii” lui mai mici: <b>decimetrul, centimetrul și milimetrul</b>. Învățăm să măsurăm și să trecem de la o unitate la alta.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "De ce avem nevoie de o unitate de măsură la fel pentru toți",
      html: `<p>A <b>măsura</b> înseamnă a afla <b>de câte ori</b> încape o unitate de măsură într-o lungime.</p>
<p>Încearcă să măsori banca cu <b>palma</b> ✋: tu găsești 6 palme, învățătoarea 4! Cine are dreptate? Amândoi… dar mâinile voastre sunt diferite.</p>
<p>De aceea avem nevoie de o unitate <b>la fel pentru toți</b>, în toată lumea: <b>metrul</b> (simbol <b>m</b>). Se scrie fără punct: 3 m, nu 3 m. sau 3 mt!</p>`
    },
    {
      type: "text",
      title: "Metrul și submultiplii lui",
      html: `<p>Metrul este cam prea lung ca să măsori un creion. Atunci îl împărțim în părți mai mici, <b>submultiplii</b>:</p>
<ul>
<li>împărțind metrul în <b>10</b> părți egale → <b>decimetrul</b> (<b>dm</b>), lat cam cât palma ta;</li>
<li>împărțind decimetrul în <b>10</b> părți → <b>centimetrul</b> (<b>cm</b>), lat cam cât vârful degetului tău mic;</li>
<li>împărțind centimetrul în <b>10</b> părți → <b>milimetrul</b> (<b>mm</b>), gros cam cât o monedă mică de 1 ban (care are cam 1,7 mm).</li>
</ul>
<p>Deci: <b>1 m = 10 dm = 100 cm = 1000 mm</b>.</p>
<p>Numele vin din latină: <i>deci</i> = 10, <i>centi</i> = 100, <i>milli</i> = 1000. Un decimetru este <b>a zecea parte</b> dintr-un metru, un centimetru <b>a suta</b>, un milimetru <b>a mia</b>.</p>`
    },
    {
      type: "svg",
      title: "În interiorul unui metru",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="40" y="40" width="500" height="50" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<text x="290" y="75" font-size="26" fill="#78350f" text-anchor="middle" font-weight="bold">1 metru (m)</text>
<g stroke="#1e3a8a" stroke-width="3">
<rect x="40" y="120" width="50" height="40" fill="#93c5fd"/><rect x="90" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="140" y="120" width="50" height="40" fill="#93c5fd"/><rect x="190" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="240" y="120" width="50" height="40" fill="#93c5fd"/>
<rect x="290" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="340" y="120" width="50" height="40" fill="#93c5fd"/><rect x="390" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="440" y="120" width="50" height="40" fill="#93c5fd"/><rect x="490" y="120" width="50" height="40" fill="#bfdbfe"/>
</g>
<text x="565" y="148" font-size="20" fill="#1e3a8a" font-weight="bold">10 dm</text>
<line x1="40" y1="160" x2="60" y2="215" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="90" y1="160" x2="540" y2="215" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 4"/>
<g stroke="#166534" stroke-width="2" fill="#bbf7d0">
<rect x="60" y="215" width="48" height="40"/><rect x="108" y="215" width="48" height="40"/><rect x="156" y="215" width="48" height="40"/><rect x="204" y="215" width="48" height="40"/><rect x="252" y="215" width="48" height="40"/>
<rect x="300" y="215" width="48" height="40"/><rect x="348" y="215" width="48" height="40"/><rect x="396" y="215" width="48" height="40"/><rect x="444" y="215" width="48" height="40"/><rect x="492" y="215" width="48" height="40"/>
</g>
<text x="300" y="285" font-size="20" fill="#166534" text-anchor="middle" font-weight="bold">1 dm = 10 cm (mărit)</text>
</svg>`,
      caption: "Fiecare trecere împarte în 10 părți egale: metru → decimetri → centimetri → milimetri."
    },
    {
      type: "text",
      title: "Tabelul și regula lui 10",
      html: `<table>
<tr><th>m</th><th>dm</th><th>cm</th><th>mm</th></tr>
<tr><td>metru</td><td>decimetru</td><td>centimetru</td><td>milimetru</td></tr>
<tr><td>1</td><td>10</td><td>100</td><td>1000</td></tr>
</table>
<p>Fiecare unitate este de <b>10 ori</b> mai mare decât cea din dreapta ei. Deci:</p>
<ul>
<li>de la o unitate <b>mai mare</b> la una <b>mai mică</b> (spre dreapta) → <b>× 10</b> la fiecare pas: 3 m = 30 dm = 300 cm.</li>
<li>de la o unitate <b>mai mică</b> la una <b>mai mare</b> (spre stânga) → <b>: 10</b> la fiecare pas: 500 cm = 50 dm = 5 m.</li>
</ul>
<p>💡 Gândește așa: <b>unități mai mici → trebuie mai multe bucăți → numărul devine mai mare</b>.</p>`
    },
    {
      type: "remember",
      title: "Și distanțele lungi? Multiplii",
      html: `<p>Ca să măsori drumuri și călătorii, metrul este prea mic. Se folosesc <b>multiplii</b>:</p>
<ul>
<li><b>decametrul</b> (dam) = 10 m</li>
<li><b>hectometrul</b> (hm) = 100 m</li>
<li><b>kilometrul</b> (km) = <b>1000 m</b> 🚗</li>
</ul>
<p>Cel mai folosit este <b>kilometrul</b>: de la Torino la Milano sunt cam 140 km de autostradă. În clasa a treia ne concentrăm pe <b>m, dm, cm, mm</b>.</p>`
    },
    {
      type: "widget",
      title: "Potrivește măsurile egale",
      widget: "match",
      options: {
        pairs: [
          ["1 m", "100 cm"],
          ["1 dm", "10 cm"],
          ["1 cm", "10 mm"],
          ["5 dm", "50 cm"],
          ["2 m", "20 dm"],
          ["30 mm", "3 cm"]
        ]
      },
      caption: "Leagă fiecare măsură de egala ei scrisă în altă unitate."
    },
    {
      type: "quiz",
      title: "Mini-test: unitățile",
      questions: [
        { type: "num", q: "Câți centimetri are 1 metru?", answer: 100, unit: "cm", explain: "1 m = 10 dm = 100 cm." },
        { type: "mc", q: "Ce unitate folosești ca să măsori lungimea unei furnici?", options: ["metri", "milimetri", "kilometri"], answer: 1, explain: "O furnică are câțiva milimetri lungime." },
        { type: "num", q: "40 mm câți cm sunt?", answer: 4, unit: "cm", explain: "De la mm la cm se face : 10 → 40 : 10 = 4 cm." }
      ]
    },
    {
      type: "text",
      title: "Măsuri cu mai multe unități: tabelul pozițiilor",
      html: `<p>Uneori o măsură se scrie cu mai multe unități: <b>1 m 3 dm 5 cm</b>. Este ca valoarea de poziție a numerelor!</p>
<table>
<tr><th>m</th><th>dm</th><th>cm</th></tr>
<tr><td>1</td><td>3</td><td>5</td></tr>
</table>
<p>Citind tot rândul până la centimetri: <b>135 cm</b>. Exact cum 1 sută, 3 zeci și 5 unități fac 135!</p>
<p>Invers: <b>247 cm</b> = 2 m 4 dm 7 cm.</p>`
    },
    {
      type: "3d",
      title: "Centimetri ca cubulețe",
      scene: "blocks",
      options: { mode: "base10", value: 135 },
      caption: "Dacă fiecare cubuleț este 1 cm: un bețișor de 10 este 1 dm, iar o placă de 100 este 1 m (pusă în șir). 135 cm = 1 m 3 dm 5 cm."
    },
    {
      type: "example",
      title: "Exemplu practic: cât de înalt ești?",
      html: `<p>Luca se măsoară lângă ușă: este înalt de <b>1 m și 32 cm</b>.</p>
<ul>
<li>În centimetri: 100 + 32 = <b>132 cm</b>.</li>
<li>Sora lui, Emma, are <b>118 cm</b>. Cine este mai înalt? Luca, cu 132 − 118 = <b>14 cm</b>.</li>
<li>Tatăl are <b>178 cm</b> = 1 m 7 dm 8 cm. 👨</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: panglica pentru cadou",
      html: `<p>Mama are o panglică lungă de <b>2 m</b>. Folosește <b>65 cm</b> pentru un pachet 🎁. Cât a rămas din panglică?</p>
<ol>
<li>Mai întâi transform totul în aceeași unitate: 2 m = <b>200 cm</b>.</li>
<li>200 − 65 = <b>135 cm</b> = 1 m 3 dm 5 cm.</li>
</ol>
<p>⚠️ Ca să faci calcule cu măsuri trebuie să folosești mereu <b>aceeași unitate</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Metrul s-a născut în <b>Franța</b> în <b>1791</b>, în timpul Revoluției franceze. Savanții au hotărât că trebuia să fie <b>o parte din 10 milioane</b> din distanța dintre Polul Nord și Ecuator! Doi astronomi, Delambre și Méchain, au avut nevoie de aproximativ 7 ani ca să măsoare meridianul de la Dunkerque la Barcelona. Azi metrul este definit cu ajutorul <b>vitezei luminii</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Înainte de metru, fiecare oraș avea măsurile lui! La Torino se folosea <b>trabucco</b> (cam 3 metri), la Milano <b>braccio</b> (brațul), la Veneția <b>passo</b> (pasul). Pe zidurile unor palate comunale medievale mai sunt și azi sculptate sau zidite măsurile oficiale, ca să nu fie înșelăciuni la târg. 🏛️</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege măsurile",
      intro: "Trecerea de la o unitate la alta te încurcă? Încearcă una dintre aceste metode!",
      tabs: [
        {
          label: "🪜 Scăricica",
          html: `<p>Imaginează-ți unitățile ca <b>trepte de scară</b>: m sus, apoi dm, cm și mm jos.</p>
<ul>
<li>Dacă <b>cobori</b> o treaptă → <b>× 10</b> (adaugi un zero).</li>
<li>Dacă <b>urci</b> o treaptă → <b>: 10</b> (scoți un zero).</li>
</ul>
<p>Exemplu: 4 m → cm. Cobor 2 trepte: × 10 × 10 → <b>400 cm</b>.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g stroke="#1f2937" stroke-width="3">
<rect x="40" y="30" width="130" height="50" fill="#fbbf24"/>
<rect x="160" y="90" width="130" height="50" fill="#60a5fa"/>
<rect x="280" y="150" width="130" height="50" fill="#4ade80"/>
<rect x="400" y="210" width="130" height="50" fill="#f472b6"/>
</g>
<text x="105" y="64" font-size="26" text-anchor="middle" font-weight="bold">m</text>
<text x="225" y="124" font-size="26" text-anchor="middle" font-weight="bold">dm</text>
<text x="345" y="184" font-size="26" text-anchor="middle" font-weight="bold">cm</text>
<text x="465" y="244" font-size="26" text-anchor="middle" font-weight="bold">mm</text>
<text x="200" y="60" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="320" y="120" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="440" y="180" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="40" y="170" font-size="20" fill="#1d4ed8" font-weight="bold">urc ↖ : 10</text>
</svg>`
        },
        {
          label: "💶 Ca banii",
          html: `<p>Măsurile funcționează ca banii!</p>
<ul>
<li>1 leu = 100 bani ↔ 1 m = 100 <b>centi</b>metri. Același cuvânt: „sută”!</li>
<li>10 bani ↔ 10 cm = 1 dm.</li>
</ul>
<p>Dacă știi că 2 lei sunt 200 de bani, știi deja că 2 m sunt 200 cm. 🪙</p>`
        },
        {
          label: "🇺🇸 Inci și picioare",
          html: `<p>În <b>Statele Unite</b> se folosesc încă unități vechi: <b>inch-ul</b> (țolul) și <b>foot</b> (piciorul).</p>
<ul>
<li>1 inch = <b>2,54 cm</b> (cam lățimea degetului tău mare când vei crește 👍)</li>
<li>1 foot = 12 inci = cam <b>30 cm</b></li>
</ul>
<p>Măsurile americane nu merg din 10 în 10: 12 inci fac un picior, 3 picioare fac un yard… Este mult mai greu! De aceea aproape toată lumea folosește <b>sistemul metric zecimal</b>. Și ecranele televizoarelor se măsoară în inci: un televizor de 50 de inci are diagonala de cam 127 cm. 📺</p>`
        },
        {
          label: "✋ Corpul ca riglă",
          html: `<p>Cunoaște-ți „rigla personală” și vei putea estima măsurile fără instrumente!</p>
<ul>
<li><b>Degetul tău mic</b> este lat cam de <b>1 cm</b>.</li>
<li><b>Mâna</b> ta strânsă (4 degete) este lată cam de <b>6–7 cm</b>; când vei fi mare va fi cam <b>1 dm</b>.</li>
<li>Un <b>pas</b> lung de adult este cam de <b>1 m</b>.</li>
</ul>
<p>Vechii egipteni măsurau cu <b>cubitul</b>: lungimea de la cot până la vârful degetului mijlociu, cam 52 cm pentru cubitul regal.</p>`
        },
        {
          label: "📏 Pe riglă",
          html: `<p>Uită-te la rigla ta: <b>numerele</b> arată centimetrii, <b>liniuțele mici</b> dintre un număr și altul sunt <b>milimetrii</b> (sunt 10!).</p>
<p>Pe axa de mai jos fiecare salt este 1 cm: încearcă să numeri de la 0 la 10 cm, adică <b>1 dm</b>. Ține minte: se măsoară mereu pornind de la <b>0</b>, nu de la marginea riglei!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 15, step: 1, marks: [10] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta măsurilor de lungime: atinge un nod și descoperă de ce",
      nodes: [
        { id: "misurare", label: "A măsura", x: 50, y: 6, color: "#64748b", html: "A compara o lungime cu o unitate și a număra de câte ori încape.", why: "Oamenii măsoară de mii de ani ca să construiască case, să împartă câmpuri și să facă negoț. La început foloseau părți ale corpului: piciorul, palma, cubitul." },
        { id: "unita", label: "Unitate la fel pentru toți", x: 50, y: 24, color: "#f59e0b", html: "O măsură care valorează la fel peste tot.", why: "Cu palmele sau cu picioarele fiecare găsea numere diferite, iar la târg apăreau certuri și înșelăciuni. Era nevoie de un etalon unic." },
        { id: "metro", label: "Metrul (m)", x: 50, y: 44, color: "#2563eb", html: "Unitatea fundamentală de lungime.", why: "Născut în Franța în 1791 ca 1/10 000 000 din distanța Polul Nord–Ecuator. Numele vine din grecescul <i>metron</i> = măsură. În Italia este lege din 1861. Din 1983 este definit cu viteza luminii." },
        { id: "sotto", label: "Submultipli", x: 22, y: 64, color: "#16a34a", html: "dm, cm, mm: părți ale metrului.", why: "Din latină: <i>deci</i> = a zecea parte, <i>centi</i> = a suta, <i>milli</i> = a mia." },
        { id: "multi", label: "Multipli", x: 78, y: 64, color: "#dc2626", html: "dam, hm, km: mai mari decât metrul.", why: "Din greacă: <i>deca</i> = 10, <i>hecto</i> = 100, <i>kilo</i> = 1000. Așa: latina pentru părțile mici, greaca pentru cele mari!" },
        { id: "dieci", label: "Regula lui 10", x: 50, y: 78, color: "#a855f7", html: "Fiecare unitate este de 10 ori cea din dreapta ei.", why: "Sistemul metric este zecimal ca numerele noastre: de aceea a converti este ca a muta cifre între sute, zeci și unități." },
        { id: "conv", label: "Echivalențe", x: 22, y: 92, color: "#14b8a6", html: "A scrie aceeași măsură cu altă unitate: 3 m = 300 cm.", why: "Servesc ca să comparăm și să facem calcule: se pot aduna sau scădea doar măsuri în aceeași unitate." },
        { id: "strumenti", label: "Instrumente", x: 78, y: 92, color: "#ec4899", html: "Riglă, centimetru de croitorie, ruletă, rotiță de măsurat.", why: "Fiecare instrument este potrivit pentru lungimi diferite: rigla pentru caiet, ruleta pentru cameră." }
      ],
      edges: [
        ["misurare", "unita", "are nevoie de"],
        ["unita", "metro", "este"],
        ["metro", "sotto", "se împarte în"],
        ["metro", "multi", "se înmulțește în"],
        ["sotto", "dieci", "urmează"],
        ["multi", "dieci", "urmează"],
        ["dieci", "conv", "permite"],
        ["dieci", "strumenti", "se citește pe"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: echivalențe",
      questions: [
        { type: "num", q: "3 m = … dm", answer: 30, unit: "dm", explain: "De la m la dm cobori o treaptă: 3 × 10 = 30 dm." },
        { type: "num", q: "1 m 4 dm 6 cm = … cm", answer: 146, unit: "cm", explain: "100 + 40 + 6 = 146 cm." },
        { type: "mc", q: "Care măsură este cea mai lungă?", options: ["90 cm", "1 m", "9 dm"], answer: 1, explain: "1 m = 100 cm; 9 dm = 90 cm. Cea mai lungă este 1 m." }
      ]
    }
  ],
  glossary: [
    { t: "A măsura", d: "A afla de câte ori încape o unitate de măsură într-o mărime." },
    { t: "Metru (m)", d: "Unitatea fundamentală de măsură a lungimii." },
    { t: "Decimetru (dm)", d: "A zecea parte dintr-un metru: 1 m = 10 dm." },
    { t: "Centimetru (cm)", d: "A suta parte dintr-un metru: 1 m = 100 cm." },
    { t: "Milimetru (mm)", d: "A mia parte dintr-un metru: 1 m = 1000 mm; 1 cm = 10 mm." },
    { t: "Kilometru (km)", d: "Multiplu al metrului: 1 km = 1000 m." },
    { t: "Submultipli", d: "Unități mai mici decât unitatea fundamentală." },
    { t: "Multipli", d: "Unități mai mari decât unitatea fundamentală." },
    { t: "Echivalență", d: "Aceeași măsură scrisă cu o altă unitate (ex. 2 m = 200 cm)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "text", q: "Care este unitatea fundamentală de măsură a lungimii?", answer: ["metru", "metrul", "m"], explain: "Metrul (m)." },
      { type: "num", q: "1 dm = … cm", answer: 10, unit: "cm", explain: "Decimetrul conține 10 centimetri." },
      { type: "num", q: "5 cm = … mm", answer: 50, unit: "mm", explain: "De la cm la mm: × 10 → 50 mm." },
      { type: "num", q: "700 cm = … m", answer: 7, unit: "m", explain: "De la cm la m urci două trepte: 700 : 100 = 7 m." },
      { type: "mc", q: "Ca să măsori lungimea clasei folosești…", options: ["milimetrii", "metrii", "kilometrii"], answer: 1, explain: "O clasă are câțiva metri lungime." },
      { type: "tf", q: "1 m = 1000 mm.", answer: true, explain: "1 m = 10 dm = 100 cm = 1000 mm." },
      { type: "mc", q: "Prefixul „centi” înseamnă…", options: ["de zece ori mai mare", "a suta parte", "o mie"], answer: 1, explain: "Centi = a suta parte: 1 cm = 1/100 dintr-un metru." },
      { type: "num", q: "2 m 5 dm = … dm", answer: 25, unit: "dm", explain: "2 m = 20 dm; 20 + 5 = 25 dm." },
      { type: "order", q: "Ordonează de la cea mai scurtă la cea mai lungă măsură.", items: ["8 mm", "3 cm", "5 dm", "90 cm", "2 m"], explain: "În mm: 8, 30, 500, 900, 2000." },
      { type: "num", q: "O panglică are 1 m lungime. Tai 35 cm. Câți cm rămân?", answer: 65, unit: "cm", explain: "1 m = 100 cm; 100 − 35 = 65 cm." },
      { type: "tf", q: "Ca să aduni 1 m și 20 cm ajunge să faci 1 + 20 = 21.", answer: false, explain: "Trebuie să folosești aceeași unitate: 100 cm + 20 cm = 120 cm." },
      { type: "mc", q: "În ce an și în ce țară s-a născut metrul?", options: ["1791, în Franța", "1492, în Spania", "1861, în Italia"], answer: 0, explain: "A fost definit în Franța în 1791; Italia l-a adoptat prin lege în 1861." }
    ],
    gen: [["lengthConv", 3]]
  }
});
