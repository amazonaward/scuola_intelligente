TOPIC('ro', {
  id: "p3-mat-divisioni",
  title: "Împărțirile",
  intro: "A împărți înseamnă <b>a face părți egale</b> 🍬 sau <b>a afla de câte ori</b> încape un număr în altul. Învățăm numele termenilor, împărțirea în coloană, <b>restul</b> și <b>proba</b> pentru a verifica dacă rezultatul este corect.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Două feluri de a împărți",
      html: `<p>Împărțirea răspunde la <b>două întrebări diferite</b>:</p>
<ul>
<li>🍬 <b>Partiție</b> (a face părți egale): <i>„Am 12 bomboane și 3 prieteni. Câte bomboane primește fiecare?”</i> → 12 : 3 = <b>4</b> bomboane de fiecare.</li>
<li>📦 <b>Cuprindere</b> (de câte ori încape): <i>„Am 12 ouă și cutii de câte 3. Câte cutii umplu?”</i> → 12 : 3 = <b>4</b> cutii.</li>
</ul>
<p>Calculul este același, dar întrebarea se schimbă! Semnul împărțirii este <b>:</b> (două puncte). În alte țări se folosește și <b>÷</b> sau <b>/</b>.</p>`
    },
    {
      type: "text",
      title: "Numele termenilor",
      html: `<p>În <b>24 : 6 = 4</b>:</p>
<ul>
<li><b>24</b> este <b>deîmpărțitul</b>: numărul care se împarte;</li>
<li><b>6</b> este <b>împărțitorul</b>: numărul cu care se împarte;</li>
<li><b>4</b> este <b>câtul</b>: rezultatul.</li>
</ul>
<p>Împărțirea este <b>operația inversă a înmulțirii</b>: 24 : 6 = 4 pentru că <b>4 × 6 = 24</b>. De aceea, a ști bine tabla înmulțirii ajută foarte mult! 🧠</p>`
    },
    {
      type: "svg",
      title: "12 bomboane pentru 3 copii",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<text x="300" y="34" font-size="22" font-weight="bold" fill="#86198f" text-anchor="middle">12 : 3 = 4</text>
<g>
<rect x="30" y="60" width="160" height="150" rx="16" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="220" y="60" width="160" height="150" rx="16" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<rect x="410" y="60" width="160" height="150" rx="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
</g>
<g fill="#ef4444" stroke="#7f1d1d" stroke-width="2">
<circle cx="80" cy="110" r="18"/><circle cx="140" cy="110" r="18"/><circle cx="80" cy="165" r="18"/><circle cx="140" cy="165" r="18"/>
<circle cx="270" cy="110" r="18"/><circle cx="330" cy="110" r="18"/><circle cx="270" cy="165" r="18"/><circle cx="330" cy="165" r="18"/>
<circle cx="460" cy="110" r="18"/><circle cx="520" cy="110" r="18"/><circle cx="460" cy="165" r="18"/><circle cx="520" cy="165" r="18"/>
</g>
<text x="110" y="245" font-size="20" fill="#92400e" text-anchor="middle" font-weight="bold">Ana: 4</text>
<text x="300" y="245" font-size="20" fill="#166534" text-anchor="middle" font-weight="bold">Luca: 4</text>
<text x="490" y="245" font-size="20" fill="#1e40af" text-anchor="middle" font-weight="bold">Sara: 4</text>
<text x="300" y="285" font-size="18" fill="#1f2937" text-anchor="middle">deîmpărțit 12 · împărțitor 3 · cât 4</text>
</svg>`,
      caption: "Partiție: cele 12 bomboane sunt împărțite în 3 grupe egale de câte 4."
    },
    {
      type: "text",
      title: "Când rămâne ceva: restul",
      html: `<p>Nu întotdeauna împărțirea este <b>exactă</b>. Dacă am <b>14 bomboane</b> pentru <b>3 prieteni</b>:</p>
<ul>
<li>dau câte 4 fiecăruia (4 × 3 = 12);</li>
<li>îmi <b>rămân 2</b>: nu ajung să mai dau încă una tuturor.</li>
</ul>
<p>Scriem: <b>14 : 3 = 4 rest 2</b> (se poate scrie și <b>4 r 2</b>).</p>
<p>⚠️ <b>Restul</b> trebuie să fie întotdeauna <b>mai mic decât împărțitorul</b>. Dacă este egal sau mai mare, înseamnă că mai puteai da o bomboană tuturor!</p>`
    },
    {
      type: "widget",
      title: "Încearcă tu să faci părți egale",
      widget: "counter",
      options: { emoji: "🍬", max: 30 },
      caption: "Pune 14 bomboane, apoi încearcă să le împarți în grupe de câte 3: câte grupe reușești să faci? Câte rămân?"
    },
    {
      type: "quiz",
      title: "Mini-test: termenii și restul",
      questions: [
        { type: "mc", q: "În 35 : 5 = 7, numărul 35 se numește…", options: ["împărțitor", "deîmpărțit", "cât"], answer: 1, explain: "Deîmpărțitul este numărul care se împarte: 35." },
        { type: "num", q: "17 : 5 = 3 cu restul…", answer: 2, explain: "5 × 3 = 15; 17 − 15 = 2." },
        { type: "tf", q: "Într-o împărțire la 4 restul poate fi 5.", answer: false, explain: "Restul trebuie să fie mai mic decât împărțitorul: la împărțitorul 4 restul poate fi doar 0, 1, 2 sau 3." }
      ]
    },
    {
      type: "text",
      title: "Împărțirea în coloană, pas cu pas",
      html: `<p>Calculăm <b>85 : 3</b>. Se începe <b>din stânga</b>, adică de la cifrele cele mai mari!</p>
<ol>
<li>Mă uit la <b>zeci</b>: 8 : 3 = <b>2</b> (pentru că 2 × 3 = 6). Scriu 2 la cât.</li>
<li>Înmulțesc și scad: 8 − 6 = <b>2</b> zeci rămân.</li>
<li><b>Cobor</b> unitățile: lângă 2 scriu 5 → obțin <b>25</b>.</li>
<li>Împart: 25 : 3 = <b>8</b> (pentru că 8 × 3 = 24). Scriu 8 la cât.</li>
<li>Scad: 25 − 24 = <b>1</b>. Nu mai sunt alte cifre de coborât: 1 este <b>restul</b>.</li>
</ol>
<p>Rezultat: <b>85 : 3 = 28 rest 1</b>.</p>`
    },
    {
      type: "svg",
      title: "85 : 3 în coloană (metoda italiană)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<text x="90" y="70" font-size="42" font-family="monospace" fill="#1d4ed8" font-weight="bold">8</text>
<text x="125" y="70" font-size="42" font-family="monospace" fill="#1d4ed8" font-weight="bold">5</text>
<line x1="170" y1="30" x2="170" y2="260" stroke="#1f2937" stroke-width="4"/>
<text x="190" y="70" font-size="42" font-family="monospace" fill="#b45309" font-weight="bold">3</text>
<line x1="170" y1="85" x2="290" y2="85" stroke="#1f2937" stroke-width="4"/>
<text x="190" y="128" font-size="42" font-family="monospace" fill="#15803d" font-weight="bold">28</text>
<text x="70" y="120" font-size="34" font-family="monospace" fill="#6b7280">-6</text>
<line x1="70" y1="132" x2="115" y2="132" stroke="#6b7280" stroke-width="3"/>
<text x="90" y="170" font-size="38" font-family="monospace" fill="#1f2937">2</text>
<text x="125" y="170" font-size="38" font-family="monospace" fill="#dc2626" font-weight="bold">5</text>
<path d="M140 80 Q155 115 140 140" stroke="#dc2626" stroke-width="3" fill="none"/>
<text x="70" y="215" font-size="34" font-family="monospace" fill="#6b7280">-24</text>
<line x1="70" y1="227" x2="160" y2="227" stroke="#6b7280" stroke-width="3"/>
<text x="125" y="265" font-size="38" font-family="monospace" fill="#7c3aed" font-weight="bold">1</text>
<text x="320" y="70" font-size="18" fill="#1d4ed8">deîmpărțit</text>
<text x="320" y="100" font-size="18" fill="#b45309">împărțitor (sus în dreapta)</text>
<text x="320" y="130" font-size="18" fill="#15803d">cât (sub împărțitor)</text>
<text x="320" y="170" font-size="18" fill="#dc2626">cobor 5 → 25</text>
<text x="320" y="265" font-size="18" fill="#7c3aed">rest: 1 (mai mic decât 3 ✔)</text>
</svg>`,
      caption: "În Italia împărțitorul se scrie în dreapta, separat printr-o linie; câtul merge sub împărțitor."
    },
    {
      type: "text",
      title: "Proba împărțirii",
      html: `<p>Ca să verifici dacă o împărțire este corectă se folosește <b>înmulțirea</b>:</p>
<p style="font-size:1.2em"><b>cât × împărțitor + rest = deîmpărțit</b></p>
<p>Proba lui 85 : 3 = 28 r 1 → 28 × 3 = 84; 84 + 1 = <b>85</b> ✔ Este corectă!</p>
<p>Dacă restul este 0, ajunge să faci cât × împărțitor: 24 : 6 = 4 → 4 × 6 = 24 ✔</p>`
    },
    {
      type: "remember",
      title: "Cazuri speciale",
      html: `<ul>
<li>Un număr împărțit la <b>1</b> rămâne la fel: 9 : 1 = 9.</li>
<li>Un număr împărțit la <b>el însuși</b> dă 1: 7 : 7 = 1.</li>
<li><b>0</b> împărțit la un număr dă 0: 0 : 5 = 0 (nicio bomboană de împărțit!).</li>
<li>🚫 <b>Nu se poate împărți la 0</b>: a împărți 5 bomboane la 0 copii nu are sens!</li>
<li>Împărțirea la <b>10</b>: dacă numărul se termină cu 0, se șterge zeroul: 70 : 10 = 7; la <b>100</b> se șterg două zerouri: 300 : 100 = 3.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: excursia cu microbuzele",
      html: `<p>La excursie participă <b>58 de copii</b>. Fiecare microbuz are <b>9 locuri</b>. Câte microbuze trebuie?</p>
<ul>
<li>58 : 9 = <b>6 rest 4</b> (6 × 9 = 54; 58 − 54 = 4).</li>
<li>6 microbuze sunt pline, dar <b>4 copii</b> ar rămâne acasă! 😮</li>
<li>Deci trebuie <b>7 microbuze</b>.</li>
</ul>
<p>👉 În probleme trebuie să te gândești mereu <b>ce înseamnă restul</b>!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: abțibildurile din album",
      html: `<p>Giulia are <b>96 de abțibilduri</b> și vrea să le pună într-un album cu <b>4 abțibilduri pe pagină</b>. Câte pagini umple?</p>
<ol>
<li>9 zeci : 4 = 2 (2 × 4 = 8), rămâne 1 zece.</li>
<li>Cobor 6: 16 : 4 = 4.</li>
<li>Rezultat: <b>96 : 4 = 24 de pagini</b>, rest 0.</li>
</ol>
<p>Proba: 24 × 4 = 96 ✔</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Semnul <b>÷</b> se numește <b>obel</b> și a fost folosit pentru împărțire de elvețianul <b>Johann Rahn</b> în 1659. Cele două puncte <b>:</b> le-a făcut celebre matematicianul german <b>Gottfried Leibniz</b> în jurul anului 1684. Iată de ce în Italia (și la noi) folosim <b>:</b>, iar în Anglia sau în SUA adesea <b>÷</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>De ce are o oră <b>60 de minute</b>? Pentru că vechii <b>babilonieni</b> iubeau numărul 60: se poate împărți exact la 2, 3, 4, 5, 6, 10, 12, 15, 20 și 30! Este foarte ușor să împarți o oră în jumătăți de oră, sferturi de oră, zece minute… 🕐</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege împărțirea",
      intro: "Împărțirea în coloană nu te convinge? Iată alte drumuri spre același rezultat: alege-l pe cel care îți place mai mult!",
      tabs: [
        {
          label: "🧊 Cubulețe 3D",
          html: `<p>Iată <b>24 de cubulețe</b> așezate într-un dreptunghi de <b>4 rânduri de câte 6</b>. Uită-te:</p>
<ul>
<li>24 : 4 = <b>6</b> (fiecare rând are 6 cubulețe);</li>
<li>24 : 6 = <b>4</b> (sunt 4 rânduri).</li>
</ul>
<p>Împărțirea este înmulțirea „pe dos”: cunoști totalul și una dintre cele două dimensiuni, o cauți pe cealaltă. Schimbă cursoarele și inventează împărțiri noi!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 4, b: 6 }
        },
        {
          label: "🐸 Salturi înapoi",
          html: `<p>O broscuță pornește de la <b>20</b> și sare înapoi câte <b>4</b> o dată: 20 → 16 → 12 → 8 → 4 → 0.</p>
<p>A făcut <b>5 salturi</b>: deci <b>20 : 4 = 5</b>. Aceasta este <b>cuprinderea</b>: de câte ori încape 4 în 20? Încearcă pe axă!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [0, 4, 8, 12, 16, 20] }
        },
        {
          label: "🇬🇧 Metoda pe bucăți (chunking)",
          html: `<p>În școlile englezești mulți copii împart <b>scăzând bucăți mari</b> pe care le cunosc bine. Exemplu: <b>85 : 3</b></p>
<ul>
<li>scad de 10 ori 3 = 30 → rămâne 55;</li>
<li>scad încă de 10 ori 3 = 30 → rămâne 25;</li>
<li>scad de 8 ori 3 = 24 → rămâne <b>1</b>.</li>
</ul>
<p>De câte ori am scăzut 3? 10 + 10 + 8 = <b>28</b>, rest <b>1</b>. Același rezultat ca la metoda în coloană! 🎉</p>`
        },
        {
          label: "🇺🇸 Metoda „căsuței”",
          html: `<p>În Statele Unite și în Anglia împărțirea se scrie altfel: împărțitorul stă <b>în stânga</b>, deîmpărțitul într-un fel de <b>căsuță</b>, iar câtul <b>deasupra acoperișului</b>. Pașii sunt însă identici cu ai noștri: împarți, înmulțești, scazi, cobori!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<text x="150" y="60" font-size="40" font-family="monospace" fill="#15803d" font-weight="bold">28 r1</text>
<path d="M120 75 Q135 110 120 150 M120 75 L320 75" stroke="#1f2937" stroke-width="4" fill="none"/>
<text x="70" y="125" font-size="40" font-family="monospace" fill="#b45309" font-weight="bold">3</text>
<text x="150" y="125" font-size="40" font-family="monospace" fill="#1d4ed8" font-weight="bold">85</text>
<text x="360" y="60" font-size="18" fill="#15803d">câtul pe acoperiș</text>
<text x="360" y="110" font-size="18" fill="#1d4ed8">deîmpărțitul în căsuță</text>
<text x="360" y="150" font-size="18" fill="#b45309">împărțitorul afară, în stânga</text>
<text x="300" y="230" font-size="20" fill="#1f2937" text-anchor="middle">Aceiași pași: împarți · înmulțești · scazi · cobori</text>
</svg>`
        },
        {
          label: "🍕 Analogia cu pizzeria",
          html: `<p>Gândește-te la un pizzar cu <b>26 de felii</b> de pus în farfurii, <b>4 felii pe farfurie</b>.</p>
<p>Umple o farfurie, apoi alta, apoi alta… la sfârșit are <b>6 farfurii pline</b> și rămân <b>2 felii</b> pe tejghea: prea puține pentru o farfurie întreagă. Cele 2 felii sunt <b>restul</b>!</p>
<p>26 : 4 = 6 r 2 → proba: 6 × 4 + 2 = 26 ✔</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta împărțirii: atinge un nod și descoperă de ce",
      nodes: [
        { id: "div", label: "Împărțirea", x: 50, y: 8, color: "#7c3aed", html: "Operație care servește la a face părți egale sau la a afla de câte ori încape un număr în altul.", why: "Cuvântul vine din latinescul <i>dividere</i>, „a separa”. Oamenii împart dintotdeauna: recolte, terenuri, pâine. Vechii egipteni împărțeau cu ajutorul dublărilor, după cum povestește papirusul Rhind (cam 1650 î.Hr.)." },
        { id: "rip", label: "Partiție", x: 18, y: 30, color: "#f59e0b", html: "A împărți în părți egale: cât revine fiecăruia?", why: "Este sensul cel mai vechi: a da fiecăruia aceeași cantitate, în mod drept." },
        { id: "cont", label: "Cuprindere", x: 82, y: 30, color: "#0ea5e9", html: "De câte ori încape un număr în altul: câte grupe pot face?", why: "Echivalează cu a scădea mereu același număr cât se poate: 20 − 4 − 4 − 4 − 4 − 4 = 0 → de 5 ori." },
        { id: "termini", label: "Deîmpărțit, împărțitor, cât", x: 50, y: 45, color: "#16a34a", html: "Deîmpărțit : împărțitor = cât.", why: "„Quoziente” (cât) vine din latinescul <i>quotiens</i>, care înseamnă „de câte ori”: chiar întrebarea cuprinderii!" },
        { id: "molt", label: "Inversa înmulțirii", x: 18, y: 65, color: "#ef4444", html: "24 : 6 = 4 pentru că 4 × 6 = 24.", why: "A înmulți înseamnă a pune laolaltă grupe egale; a împărți înseamnă a le despărți la loc. De aceea tabla înmulțirii servește la împărțit." },
        { id: "resto", label: "Restul", x: 82, y: 65, color: "#ec4899", html: "Ce rămâne când împărțirea nu este exactă. Este mereu mai mic decât împărțitorul.", why: "Dacă restul ar fi egal sau mai mare decât împărțitorul, s-ar mai putea face o grupă: ar însemna că  câtul este prea mic." },
        { id: "prova", label: "Proba", x: 50, y: 82, color: "#14b8a6", html: "cât × împărțitor + rest = deîmpărțit.", why: "Dacă pui la loc grupele și adaugi ce rămăsese, trebuie să regăsești tot ce aveai la început: nimic nu se creează și nimic nu se pierde." },
        { id: "zero", label: "Niciodată împărțit la 0", x: 18, y: 92, color: "#64748b", html: "Împărțirea la zero nu este posibilă.", why: "Niciun număr înmulțit cu 0 nu dă 5: deci 5 : 0 nu are răspuns. Încă matematicienii indieni precum Brahmagupta (secolul al VII-lea) se întrebau ce se întâmplă împărțind la zero." }
      ],
      edges: [
        ["div", "rip", "poate însemna"],
        ["div", "cont", "poate însemna"],
        ["div", "termini", "se scrie cu"],
        ["termini", "molt", "se verifică cu"],
        ["termini", "resto", "uneori există"],
        ["resto", "prova", "intră în"],
        ["molt", "prova", "servește la"],
        ["molt", "zero", "explică de ce"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: coloana și proba",
      questions: [
        { type: "num", q: "Cât face 72 : 4?", answer: 18, explain: "7 : 4 = 1 rest 3; cobor 2 → 32 : 4 = 8. Câtul 18." },
        { type: "mc", q: "Care este proba pentru 50 : 7 = 7 rest 1?", options: ["7 × 7 + 1 = 50", "7 × 7 − 1 = 50", "50 × 7 + 1"], answer: 0, explain: "Cât × împărțitor + rest: 49 + 1 = 50 ✔" },
        { type: "num", q: "Sunt 30 de copii și câte 4 la o masă. Câte mese trebuie ca toți să fie așezați?", answer: 8, explain: "30 : 4 = 7 rest 2: 7 mese pline și 2 copii în plus, deci trebuie a opta masă." }
      ]
    }
  ],
  glossary: [
    { t: "Împărțire", d: "Operație pentru a face părți egale sau pentru a afla de câte ori încape un număr în altul." },
    { t: "Deîmpărțit", d: "Numărul care se împarte (primul)." },
    { t: "Împărțitor", d: "Numărul cu care se împarte (al doilea)." },
    { t: "Cât", d: "Rezultatul împărțirii." },
    { t: "Rest", d: "Ce rămâne când împărțirea nu este exactă; este mereu mai mic decât împărțitorul." },
    { t: "Împărțire exactă", d: "Împărțire cu rest 0." },
    { t: "Partiție", d: "Împărțire care servește la a face părți egale." },
    { t: "Cuprindere", d: "Împărțire care servește la a afla de câte ori încape un număr în altul." },
    { t: "Probă", d: "Verificarea rezultatului: cât × împărțitor + rest = deîmpărțit." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Cât face 45 : 5?", answer: 9, explain: "9 × 5 = 45." },
      { type: "mc", q: "În 63 : 9 = 7, numărul 9 este…", options: ["deîmpărțitul", "împărțitorul", "câtul"], answer: 1, explain: "Împărțitorul este numărul cu care se împarte." },
      { type: "num", q: "29 : 6 = 4 cu restul…", answer: 5, explain: "6 × 4 = 24; 29 − 24 = 5 (mai mic decât 6 ✔)." },
      { type: "tf", q: "Se poate împărți un număr la 0.", answer: false, explain: "Nu există un număr care înmulțit cu 0 să dea, de exemplu, 8: împărțirea la 0 este imposibilă." },
      { type: "num", q: "Cât face 84 : 3?", answer: 28, explain: "8 : 3 = 2 r 2; cobor 4 → 24 : 3 = 8. Câtul 28." },
      { type: "mc", q: "„Am 40 de lei și fiecare carte costă 8 lei. Câte cărți cumpăr?” Este o împărțire de…", options: ["partiție", "cuprindere", "niciuna dintre cele două"], answer: 1, explain: "Caut de câte ori încape 8 în 40: cuprindere. 40 : 8 = 5 cărți." },
      { type: "text", q: "Cum se numește rezultatul împărțirii?", answer: ["cât", "câtul", "catul", "cat"], explain: "Rezultatul se numește cât." },
      { type: "tf", q: "Restul trebuie să fie mereu mai mic decât împărțitorul.", answer: true, explain: "Altfel s-ar mai putea face o grupă." },
      { type: "num", q: "Cât face 600 : 100?", answer: 6, explain: "Împărțind la 100 se șterg două zerouri: 6." },
      { type: "order", q: "Pune în ordine pașii împărțirii în coloană.", items: ["Împart prima cifră", "Înmulțesc câtul cu împărțitorul", "Scad", "Cobor cifra următoare"], explain: "Împarți, înmulțești, scazi, cobori… și o iei de la capăt!" },
      { type: "num", q: "Bunica are 50 de biscuiți și îi pune în pungi de câte 6. Câți biscuiți rămân?", answer: 2, explain: "50 : 6 = 8 rest 2 (8 × 6 = 48)." },
      { type: "mc", q: "Care probă este corectă pentru 38 : 5 = 7 r 3?", options: ["7 × 5 + 3 = 38", "7 × 3 + 5 = 38", "38 × 5 = 7"], answer: 0, explain: "7 × 5 = 35; 35 + 3 = 38 ✔" }
    ],
    gen: [["divExact", 2], ["divRem", 2]]
  }
});
