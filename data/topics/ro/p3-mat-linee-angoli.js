TOPIC('ro', {
  id: "p3-mat-linee-angoli",
  title: "Linii și unghiuri",
  intro: "Uită-te în jur: șinele trenului 🚆, colțurile băncii, acele ceasului 🕒… toate sunt făcute din <b>linii</b> și <b>unghiuri</b>! Învățăm să recunoaștem drepte, semidrepte și segmente și să dăm nume unghiurilor.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Multe feluri de linii",
      html: `<p>O <b>linie</b> este urma pe care o lasă vârful creionului când se mișcă pe foaie. Există linii:</p>
<ul>
<li><b>curbe</b> 〰️: își schimbă direcția lin, ca un val;</li>
<li><b>drepte</b> ➖: merg mereu drept, în aceeași direcție;</li>
<li><b>frânte</b> ⚡: făcute din bucăți drepte care își schimbă direcția brusc;</li>
<li><b>mixte</b>: puțin curbe și puțin drepte.</li>
</ul>
<p>O linie poate fi <b>deschisă</b> (capetele nu se ating) sau <b>închisă</b> (se termină unde a început, ca marginea unui cerc ⭕). O linie închisă împarte foaia într-o <b>regiune interioară</b> și una <b>exterioară</b>.</p>`
    },
    {
      type: "text",
      title: "Dreapta, semidreapta și segmentul",
      html: `<p>Liniile drepte au trei „veri” importanți:</p>
<ul>
<li><b>Dreapta</b> ↔️: nu are nici început, nici sfârșit, continuă <b>la infinit</b> în ambele direcții. Pe foaie desenăm doar o bucată.</li>
<li><b>Semidreapta</b> •→: are un <b>punct de început</b> (<b>originea</b>) și apoi continuă la infinit într-o singură parte, ca raza unei lanterne 🔦.</li>
<li><b>Segmentul</b> •—•: are un <b>început</b> și un <b>sfârșit</b> (două <b>capete</b>). Este singurul care se poate <b>măsura</b> cu rigla! 📏</li>
</ul>
<p>Punctele se notează cu <b>litere mari</b>: segmentul de la A la B se numește <b>AB</b>.</p>`
    },
    {
      type: "svg",
      title: "Dreaptă, semidreaptă, segment",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="fr" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#2563eb"/></marker><marker id="fl" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto-start-reverse"><path d="M0 0 L12 6 L0 12 z" fill="#2563eb"/></marker><marker id="fg" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#16a34a"/></marker></defs>
<line x1="60" y1="60" x2="540" y2="60" stroke="#2563eb" stroke-width="5" marker-start="url(#fl)" marker-end="url(#fr)"/>
<text x="300" y="95" font-size="22" fill="#1d4ed8" text-anchor="middle" font-weight="bold">DREAPTA: fără început și fără sfârșit</text>
<line x1="80" y1="150" x2="540" y2="150" stroke="#16a34a" stroke-width="5" marker-end="url(#fg)"/>
<circle cx="80" cy="150" r="9" fill="#16a34a"/>
<text x="70" y="135" font-size="20" fill="#166534" font-weight="bold">O</text>
<text x="300" y="185" font-size="22" fill="#166534" text-anchor="middle" font-weight="bold">SEMIDREAPTA: o origine, apoi la infinit</text>
<line x1="150" y1="240" x2="450" y2="240" stroke="#dc2626" stroke-width="5"/>
<circle cx="150" cy="240" r="9" fill="#dc2626"/><circle cx="450" cy="240" r="9" fill="#dc2626"/>
<text x="140" y="225" font-size="20" fill="#991b1b" font-weight="bold">A</text>
<text x="445" y="225" font-size="20" fill="#991b1b" font-weight="bold">B</text>
<text x="300" y="280" font-size="22" fill="#991b1b" text-anchor="middle" font-weight="bold">SEGMENTUL AB: două capete, se măsoară</text>
</svg>`,
      caption: "Săgețile arată că linia continuă la infinit; bilele sunt punctele unde începe sau se termină."
    },
    {
      type: "text",
      title: "Cum stau dreptele: poziția",
      html: `<p>Față de foaie (sau față de podea) o dreaptă poate fi:</p>
<ul>
<li><b>orizontală</b> ➖ ca orizontul mării;</li>
<li><b>verticală</b> | ca un fir cu plumb sau un stâlp de electricitate;</li>
<li><b>oblică</b> ⟋ adică înclinată, ca o tobogan 🛝.</li>
</ul>
<p>Două drepte, una față de cealaltă, pot fi:</p>
<ul>
<li><b>paralele</b> ⏸: nu se întâlnesc niciodată, rămân mereu la aceeași distanță, ca <b>șinele</b>;</li>
<li><b>concurente</b> ✖️: se întâlnesc într-un punct;</li>
<li><b>perpendiculare</b> ➕: sunt concurente și formează <b>4 unghiuri drepte</b>, ca liniile unui caiet de matematică.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Caută dreptele paralele și perpendiculare într-un cub",
      scene: "solid",
      options: { shape: "cube", color: "#60a5fa", labels: true },
      caption: "Rotește cubul: muchiile care stau „una lângă alta” fără să se atingă sunt paralele; cele care se întâlnesc într-un vârf formează unghiuri drepte, adică sunt perpendiculare."
    },
    {
      type: "quiz",
      title: "Mini-test: liniile",
      questions: [
        { type: "mc", q: "Care linie are două capete și se poate măsura?", options: ["Dreapta", "Semidreapta", "Segmentul"], answer: 2, explain: "Segmentul are un început și un sfârșit: se poate măsura cu rigla." },
        { type: "mc", q: "Șinele trenului sunt…", options: ["paralele", "perpendiculare", "concurente"], answer: 0, explain: "Nu se întâlnesc niciodată și rămân la aceeași distanță: paralele." },
        { type: "tf", q: "O dreaptă are un punct de început numit origine.", answer: false, explain: "Dreapta nu are nici început, nici sfârșit. Semidreapta are o origine." }
      ]
    },
    {
      type: "text",
      title: "Ce este un unghi",
      html: `<p>Dacă din același punct pornesc <b>două semidrepte</b>, ele împart foaia în două părți. Fiecare dintre aceste părți este un <b>unghi</b>.</p>
<ul>
<li>punctul din care pornesc se numește <b>vârf</b>;</li>
<li>cele două semidrepte se numesc <b>laturile</b> unghiului;</li>
<li>„deschiderea” dintre laturi este <b>măsura</b> (amplitudinea).</li>
</ul>
<p>⚠️ Măsura <b>nu depinde de lungimea</b> laturilor pe care le desenezi, ci doar de <b>cât de deschise sunt</b>! Un unghi cu laturi lungi nu este mai „mare” decât unul cu laturi scurte, dacă deschiderea este aceeași.</p>
<p>Măsura se exprimă în <b>grade</b> (°) cu ajutorul <b>raportorului</b>.</p>`
    },
    {
      type: "text",
      title: "Numele unghiurilor",
      html: `<table>
<tr><th>Unghiul</th><th>Cum este</th><th>Grade</th></tr>
<tr><td>📐 <b>Drept</b></td><td>ca unghiul unei foi; laturile sunt perpendiculare</td><td>90°</td></tr>
<tr><td>🔺 <b>Ascuțit</b></td><td>mai închis decât unul drept</td><td>mai puțin de 90°</td></tr>
<tr><td>🔓 <b>Obtuz</b></td><td>mai deschis decât unul drept, dar mai puțin decât unul alungit</td><td>între 90° și 180°</td></tr>
<tr><td>➖ <b>Alungit</b></td><td>laturile formează o linie dreaptă</td><td>180° (= 2 drepte)</td></tr>
<tr><td>🔄 <b>Plin</b></td><td>o latură face un tur complet și revine peste cealaltă</td><td>360° (= 4 drepte)</td></tr>
</table>
<p>Truc: ca să afli dacă un unghi este drept, pune peste el <b>colțul unei foi</b> sau al unei echere: dacă se potrivește, este drept!</p>`
    },
    {
      type: "svg",
      title: "Ascuțit, drept, obtuz, alungit",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<g stroke-width="5" stroke-linecap="round">
<line x1="30" y1="200" x2="140" y2="200" stroke="#1f2937"/><line x1="30" y1="200" x2="120" y2="110" stroke="#1f2937"/>
<line x1="180" y1="200" x2="280" y2="200" stroke="#1f2937"/><line x1="180" y1="200" x2="180" y2="100" stroke="#1f2937"/>
<line x1="350" y1="200" x2="440" y2="200" stroke="#1f2937"/><line x1="350" y1="200" x2="290" y2="120" stroke="#1f2937"/>
<line x1="460" y1="200" x2="590" y2="200" stroke="#1f2937"/>
</g>
<path d="M70 200 A40 40 0 0 0 58 172" fill="none" stroke="#16a34a" stroke-width="4"/>
<rect x="180" y="170" width="30" height="30" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M390 200 A40 40 0 0 0 326 168" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M565 200 A40 40 0 0 0 485 200" fill="none" stroke="#7c3aed" stroke-width="4"/>
<circle cx="525" cy="200" r="7" fill="#7c3aed"/>
<text x="85" y="245" font-size="22" fill="#16a34a" text-anchor="middle" font-weight="bold">ascuțit</text>
<text x="85" y="272" font-size="18" fill="#16a34a" text-anchor="middle">&lt; 90°</text>
<text x="230" y="245" font-size="22" fill="#2563eb" text-anchor="middle" font-weight="bold">drept</text>
<text x="230" y="272" font-size="18" fill="#2563eb" text-anchor="middle">90°</text>
<text x="370" y="245" font-size="22" fill="#dc2626" text-anchor="middle" font-weight="bold">obtuz</text>
<text x="370" y="272" font-size="18" fill="#dc2626" text-anchor="middle">între 90° și 180°</text>
<text x="525" y="245" font-size="22" fill="#7c3aed" text-anchor="middle" font-weight="bold">alungit</text>
<text x="525" y="272" font-size="18" fill="#7c3aed" text-anchor="middle">180°</text>
<text x="300" y="40" font-size="22" fill="#1f2937" text-anchor="middle">arcul colorat arată măsura</text>
</svg>`,
      caption: "Pătrățelul albastru este simbolul unghiului drept."
    },
    {
      type: "widget",
      title: "Ce unghi este?",
      widget: "classify",
      options: {
        groups: ["Ascuțit", "Drept", "Obtuz"],
        items: [
          ["📄 colțul unei foi", 1],
          ["🍕 vârful unei felii de pizza", 0],
          ["🕒 acele ceasului la ora 3:00", 1],
          ["🕐 acele ceasului la ora 1:00", 0],
          ["🕔 acele ceasului la ora 5:00", 2],
          ["💻 ecranul laptopului deschis mult", 2],
          ["🪟 colțul unei ferestre", 1],
          ["✂️ foarfeca abia deschisă", 0]
        ]
      },
      caption: "Trage fiecare obiect în grupul potrivit."
    },
    {
      type: "example",
      title: "Exemplu practic: ceasul",
      html: `<p>Acele ceasului sunt două semidrepte cu același vârf: axul din centru! ⏰</p>
<ul>
<li>La ora <b>3:00</b> formează un unghi <b>drept</b> (90°).</li>
<li>La ora <b>2:00</b> formează un unghi <b>ascuțit</b> (60°).</li>
<li>La ora <b>4:00</b> formează un unghi <b>obtuz</b> (120°).</li>
<li>La ora <b>6:00</b> formează un unghi <b>alungit</b> (180°).</li>
</ul>
<p>Într-o oră acul minutarului face un <b>tur complet</b>: 360°!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: vânătoarea de linii la școală",
      html: `<p>Fă o vânătoare de comori geometrică în clasă! 🔍</p>
<ul>
<li><b>Drepte paralele</b>: laturile lungi ale tablei, liniile caietului.</li>
<li><b>Drepte perpendiculare</b>: colțul peretelui care întâlnește podeaua, rândurile și coloanele pătrățelelor.</li>
<li><b>Segmente</b>: marginea radierei, creionul.</li>
<li><b>Unghiuri drepte</b>: colțurile băncii, ale ușii, ale cărții.</li>
<li><b>Unghiuri ascuțite</b>: vârful creionului ascuțit ✏️.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Turul complet măsoară <b>360 de grade</b> datorită vechilor <b>babilonieni</b>, care numărau în baza 60. Poate l-au ales pentru că anul durează aproximativ 360 de zile și pentru că 360 se poate împărți exact la foarte multe numere: 2, 3, 4, 5, 6, 8, 9, 10, 12…</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Matematicianul grec <b>Euclid</b>, acum cam 2300 de ani, a scris o carte faimoasă, <b>Elementele</b>, în care definea punctul ca <i>„ceea ce nu are părți”</i> și linia ca <i>„lungime fără lățime”</i>. Secole la rând a fost cartea de geometrie cea mai studiată din lume! 📜</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Dreapta: infinită în ambele părți. Semidreapta: are o origine. Segmentul: are două capete.</li>
<li>Paralele: nu se întâlnesc niciodată. Perpendiculare: se întâlnesc formând unghiuri drepte.</li>
<li>Unghi = două semidrepte cu aceeași origine (vârf).</li>
<li>Ascuțit &lt; 90° · Drept = 90° · Obtuz între 90° și 180° · Alungit = 180° · Plin = 360°.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege liniile și unghiurile",
      intro: "Geometria se înțelege mai bine mișcându-te și atingând. Încearcă unul dintre aceste drumuri!",
      tabs: [
        {
          label: "🙆 Cu brațele",
          html: `<p>Ridică-te în picioare! Corpul tău poate face unghiuri:</p>
<ul>
<li>un braț în sus și unul într-o parte → unghi <b>drept</b> 🙋;</li>
<li>brațele deschise în linie dreaptă → unghi <b>alungit</b> 🤸;</li>
<li>brațele aproape închise deasupra capului → unghi <b>ascuțit</b>;</li>
<li>o piruetă completă în jurul tău → unghi <b>plin</b>! 🔄</li>
</ul>
<p>Umărul tău este <b>vârful</b>, brațele sunt <b>laturile</b>.</p>`
        },
        {
          label: "🕒 Cu ceasul",
          html: `<p>Gândește-te la acul minutarului care pornește de la 12. La fiecare 5 minute se rotește cu <b>30°</b>.</p>
<ul>
<li>După 15 minute → <b>90°</b>, un unghi drept (un sfert de tur).</li>
<li>După 30 de minute → <b>180°</b>, unghi alungit (jumătate de tur).</li>
<li>După 60 de minute → <b>360°</b>, unghi plin (tur întreg).</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<circle cx="130" cy="130" r="100" fill="#ffffff" stroke="#1f2937" stroke-width="5"/>
<path d="M130 130 L130 30 A100 100 0 0 1 230 130 Z" fill="#93c5fd" opacity="0.8"/>
<line x1="130" y1="130" x2="130" y2="45" stroke="#1f2937" stroke-width="6" stroke-linecap="round"/>
<line x1="130" y1="130" x2="215" y2="130" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
<circle cx="130" cy="130" r="8" fill="#1f2937"/>
<text x="130" y="25" font-size="18" text-anchor="middle">12</text>
<text x="245" y="136" font-size="18">3</text>
<text x="300" y="80" font-size="24" fill="#1d4ed8" font-weight="bold">15 minute</text>
<text x="300" y="120" font-size="24" fill="#1f2937">= 1/4 de tur</text>
<text x="300" y="160" font-size="24" fill="#dc2626" font-weight="bold">= 90° (drept)</text>
</svg>`
        },
        {
          label: "🧊 În corpurile 3D",
          html: `<p>Și obiectele au linii și unghiuri! În această <b>cutie</b> (paralelipiped):</p>
<ul>
<li><b>muchiile</b> sunt segmente;</li>
<li>muchiile care se întâlnesc formează unghiuri <b>drepte</b>;</li>
<li>muchiile opuse ale unei fețe sunt <b>paralele</b>.</li>
</ul>
<p>Schimbă corpul cu butoanele: piramida are și unghiuri <b>ascuțite</b>!</p>`,
          scene: "solid",
          options: { shape: "box", w: 3, h: 2, d: 1.5, color: "#fbbf24", labels: true, shapes: ["box", "cube", "pyramid"] }
        },
        {
          label: "🗺️ Analogia străzilor",
          html: `<p>Gândește-te la străzile unui oraș:</p>
<ul>
<li>două străzi care merg una lângă alta fără să se încrucișeze niciodată sunt <b>paralele</b>;</li>
<li>o <b>intersecție</b> este locul unde două străzi <b>concurente</b> se întâlnesc;</li>
<li>dacă intersecția formează o cruce „perfectă” ➕, străzile sunt <b>perpendiculare</b>.</li>
</ul>
<p>La New York, la Torino și la Barcelona multe străzi sunt construite așa, ca o <b>tablă de șah</b>: toate paralele sau perpendiculare!</p>`
        },
        {
          label: "🔤 Literele alfabetului",
          html: `<p>Și literele mari ascund linii și unghiuri!</p>
<ul>
<li><b>L</b> și <b>T</b>: unghiuri <b>drepte</b>, segmente perpendiculare.</li>
<li><b>V</b> și <b>A</b>: unghiuri <b>ascuțite</b>.</li>
<li><b>H</b>, <b>=</b>: segmente <b>paralele</b>.</li>
<li><b>X</b>: segmente <b>concurente</b>.</li>
<li><b>O</b>, <b>C</b>, <b>S</b>: linii <b>curbe</b>; O este o linie <b>închisă</b>!</li>
</ul>
<p>Încearcă să-ți scrii numele și caută unghiurile! ✍️</p>`
        },
        {
          label: "𓂀 Echerul și firul cu plumb la egipteni",
          html: "<p>Vechii <b>egipteni</b> construiau piramide și temple uriașe, cu ziduri perfect drepte. Cum făceau fără instrumente electronice? Într-un mormânt din satul muncitorilor de la <b>Deir el-Medina</b>, cel al lui <b>Sennedjem</b>, care lucra la mormintele faraonilor acum mai bine de 3000 de ani, au fost găsite uneltele lui: un <b>echer</b> și o <b>nivelă în formă de A</b> cu un <b>fir cu plumb</b>.</p><ul><li><b>Firul cu plumb</b> este un fir cu o greutate: greutatea trage firul în jos, iar el devine mereu <b>vertical</b>.</li><li>Nivela în A: când firul trece exact pe <b>tăietura din mijloc</b>, baza lui A este <b>orizontală</b>.</li><li><b>Echerul</b> servește la verificarea <b>unghiurilor drepte</b>.</li></ul><p>🎯 <b>Construiește-ți propriul fir cu plumb</b>: leagă o radieră de un șnur și ține-l nemișcat. Firul este vertical. Sprijină un echer de fir: latura de jos este orizontală. Verticala și orizontala sunt <b>perpendiculare</b>: formează un unghi drept! Acum verifică: tocul ușii este vertical? Banca este orizontală?</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/><polyline points=\"150,260 300,40 450,260\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"12\" stroke-linejoin=\"round\"/><line x1=\"205\" y1=\"180\" x2=\"395\" y2=\"180\" stroke=\"#92400e\" stroke-width=\"10\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"215\" stroke=\"#1e293b\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"222\" r=\"10\" fill=\"#475569\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"300\" y1=\"172\" x2=\"300\" y2=\"188\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"110\" y1=\"266\" x2=\"490\" y2=\"266\" stroke=\"#16a34a\" stroke-width=\"4\"/><text x=\"320\" y=\"120\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">fir cu plumb</text><text x=\"320\" y=\"140\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">(vertical)</text><text x=\"410\" y=\"288\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">bază orizontală</text><text x=\"330\" y=\"200\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#dc2626\">tăietură centrală</text><polyline points=\"30,40 30,130 120,130\" fill=\"none\" stroke=\"#a16207\" stroke-width=\"12\"/><text x=\"30\" y=\"160\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#a16207\" font-weight=\"bold\">echer</text><rect x=\"30\" y=\"112\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/></svg>"
        },
        {
          label: "🇯🇵 Unghiul drept prin origami (Japonia)",
          html: "<p>În <b>Japonia</b> <b>origami</b>, arta plierii hârtiei, se face și la școală. Cu două îndoituri poți construi un <b>unghi drept</b> perfect, chiar pornind de la o bucată de hârtie cu marginea toată strâmbă!</p><ol><li>Ia o bucată de hârtie oarecare și îndoaie-o în două, unde vrei. Marginea îndoiturii este o <b>linie dreaptă</b>.</li><li>Acum îndoaie din nou astfel încât <b>îndoitura să se potrivească peste ea însăși</b> (o bucată de îndoitură peste cealaltă).</li><li>Desfă foaia: cele două îndoituri se încrucișează și formează <b>4 unghiuri drepte</b>! Cele două îndoituri sunt <b>perpendiculare</b>.</li><li>Închide la loc și îndoaie încă o dată în două unghiul drept: obții un unghi <b>ascuțit</b> (jumătate dintr-un unghi drept).</li></ol><p>🎯 Folosește-ți «unghiul drept de hârtie» ca pe o unealtă: sprijină-l de colțurile cărții, ale tablei, ale ferestrei. Dacă unghiul este mai mic, este <b>ascuțit</b>, dacă este mai mare, este <b>obtuz</b>.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta liniilor și unghiurilor: atinge un nod și descoperă de ce",
      nodes: [
        { id: "punto", label: "Punct", x: 50, y: 6, color: "#64748b", html: "Cel mai mic „loc” din geometrie: nu are dimensiuni. Se notează cu o literă mare.", why: "Euclid, în cartea <i>Elementele</i> (cam 300 î.Hr.), l-a definit ca „ceea ce nu are părți”. Este o idee: bila creionului este doar un mod de a-l vedea." },
        { id: "linea", label: "Linie", x: 50, y: 24, color: "#0ea5e9", html: "Curbă, dreaptă, frântă sau mixtă; deschisă sau închisă.", why: "Pentru Euclid este „lungime fără lățime”. O poți imagina ca drumul unui punct care se mișcă." },
        { id: "retta", label: "Dreaptă", x: 18, y: 42, color: "#2563eb", html: "Linie dreaptă fără început și fără sfârșit.", why: "Una dintre postulatele lui Euclid spune că prin două puncte trece o dreaptă și numai una: de aceea o riglă ajunge ca s-o desenezi." },
        { id: "semi", label: "Semidreaptă", x: 50, y: 48, color: "#16a34a", html: "O dreaptă tăiată într-un punct: are o origine.", why: "Dacă alegi un punct pe o dreaptă, o împarți în două semidrepte: „semi” înseamnă „jumătate”." },
        { id: "seg", label: "Segment", x: 82, y: 42, color: "#dc2626", html: "Bucata de dreaptă dintre două puncte: se poate măsura.", why: "Cuvântul vine din latinescul <i>secare</i>, „a tăia”: este o bucată tăiată din dreaptă. Este cea mai scurtă linie dintre două puncte." },
        { id: "pos", label: "Paralele și perpendiculare", x: 18, y: 72, color: "#f59e0b", html: "Paralele: nu se întâlnesc niciodată. Perpendiculare: se întâlnesc în unghi drept.", why: "Al cincilea postulat al lui Euclid se referă chiar la paralele. Timp de 2000 de ani matematicienii au încercat să-l demonstreze; în secolul al XIX-lea s-a descoperit că există și geometrii diferite, în care „dreptele” sunt curbe, ca pe suprafața unei sfere." },
        { id: "angolo", label: "Unghi", x: 60, y: 72, color: "#a855f7", html: "Parte de plan dintre două semidrepte cu aceeași origine (vârf).", why: "Cuvântul italian vine din latinescul <i>angulus</i>, „colț, cot”. Contează doar deschiderea, nu lungimea laturilor." },
        { id: "gradi", label: "Grade și tipuri de unghi", x: 60, y: 93, color: "#ec4899", html: "Ascuțit, drept (90°), obtuz, alungit (180°), plin (360°).", why: "Babilonienii au împărțit turul în 360 de părți pentru că numărau în baza 60 și pentru că 360 se împarte la foarte multe numere. Instrumentul de măsurat este raportorul (în italiană goniometro, din grecescul <i>gonia</i> = unghi)." }
      ],
      edges: [
        ["punto", "linea", "se mișcă și trasează"],
        ["linea", "retta", "dacă e dreaptă"],
        ["retta", "semi", "tăiată într-un punct"],
        ["retta", "seg", "tăiată în două puncte"],
        ["retta", "pos", "două drepte pot fi"],
        ["semi", "angolo", "două cu aceeași origine"],
        ["angolo", "gradi", "se măsoară în"],
        ["pos", "gradi", "perpendiculare = 90°"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: unghiurile",
      questions: [
        { type: "mc", q: "Un unghi de 120° este…", options: ["ascuțit", "drept", "obtuz"], answer: 2, explain: "Este mai mare de 90° și mai mic de 180°: obtuz." },
        { type: "num", q: "Câte grade măsoară un unghi alungit?", answer: 180, unit: "°", explain: "Un unghi alungit este cât două unghiuri drepte: 90° + 90° = 180°." },
        { type: "tf", q: "Dacă lungesc laturile unui unghi, unghiul devine mai mare.", answer: false, explain: "Măsura depinde doar de deschiderea laturilor, nu de lungimea lor." }
      ]
    }
  ],
  glossary: [
    { t: "Dreaptă", d: "Linie dreaptă fără început și fără sfârșit." },
    { t: "Semidreaptă", d: "Parte de dreaptă cu o origine, infinită într-o parte." },
    { t: "Segment", d: "Parte de dreaptă cuprinsă între două puncte (capete); se poate măsura." },
    { t: "Drepte paralele", d: "Drepte care nu se întâlnesc niciodată." },
    { t: "Drepte concurente", d: "Drepte care se întâlnesc într-un punct." },
    { t: "Drepte perpendiculare", d: "Drepte concurente care formează patru unghiuri drepte." },
    { t: "Unghi", d: "Parte de plan cuprinsă între două semidrepte cu aceeași origine." },
    { t: "Vârf", d: "Punctul din care pornesc laturile unui unghi." },
    { t: "Unghi drept", d: "Unghi de 90°, ca unghiul unei foi." },
    { t: "Raportor", d: "Instrument pentru măsurarea unghiurilor în grade." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care linie nu are nici început, nici sfârșit?", options: ["Segmentul", "Dreapta", "Semidreapta"], answer: 1, explain: "Dreapta continuă la infinit în ambele părți." },
      { type: "mc", q: "Cum se numește punctul de început al unei semidrepte?", options: ["Originea", "Capătul final", "Latura"], answer: 0, explain: "Semidreapta pornește din origine." },
      { type: "tf", q: "Două drepte paralele se întâlnesc mai devreme sau mai târziu.", answer: false, explain: "Dreptele paralele nu se întâlnesc niciodată." },
      { type: "mc", q: "Două drepte care se întâlnesc formând 4 unghiuri drepte sunt…", options: ["paralele", "perpendiculare", "oblice"], answer: 1, explain: "Sunt perpendiculare." },
      { type: "num", q: "Câte grade măsoară un unghi drept?", answer: 90, unit: "°", explain: "Unghiul drept măsoară 90°." },
      { type: "mc", q: "Un unghi de 45° este…", options: ["ascuțit", "obtuz", "alungit"], answer: 0, explain: "Este mai mic de 90°: ascuțit." },
      { type: "text", q: "Cum se numește punctul din care pornesc laturile unui unghi?", answer: ["vârf", "varf", "vârful", "varful"], explain: "Este vârful." },
      { type: "num", q: "Câte unghiuri drepte formează un unghi plin?", answer: 4, explain: "4 × 90° = 360°." },
      { type: "mc", q: "La ora 6:00 acele ceasului formează un unghi…", options: ["drept", "ascuțit", "alungit"], answer: 2, explain: "Unul arată spre 12 și celălalt spre 6: sunt în linie dreaptă, unghi alungit." },
      { type: "order", q: "Ordonează unghiurile de la cel mai închis la cel mai deschis.", items: ["ascuțit", "drept", "obtuz", "alungit", "plin"], explain: "Ascuțit < 90° < obtuz < 180° (alungit) < 360° (plin)." },
      { type: "tf", q: "Segmentul este singura dintre aceste linii care se poate măsura cu rigla.", answer: true, explain: "Dreapta și semidreapta sunt infinite; segmentul are două capete." }
    ]
  }
});
