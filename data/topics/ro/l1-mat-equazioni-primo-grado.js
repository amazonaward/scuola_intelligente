TOPIC('ro', {
  id: "l1-mat-equazioni-primo-grado",
  title: "Ecuații de gradul întâi",
  intro: "La câte minute de telefon devine mai avantajos un abonament față de altul? Când se întâlnesc două trenuri care pleacă din orașe diferite? Sunt întrebări cu o <b>necunoscută</b>, iar răspunsul trece printr-o <b>ecuație</b>. În gimnaziu ai învățat ecuațiile numerice; acum le consolidăm folosind riguros <b>principiile de echivalență</b>, adăugăm <b>ecuațiile fracționare</b> (cu condițiile de existență) și învățăm să transformăm problemele reale în ecuații.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Ecuații și principii de echivalență",
      html: `<p>O <b>ecuație</b> este o egalitate între două expresii care conține cel puțin o <b>necunoscută</b> și este adevărată numai pentru anumite valori ale ei (<b>soluțiile</b> sau rădăcinile). Este de <b>gradul întâi</b> dacă, după reducere, necunoscuta apare la exponentul 1.</p>
<p>Două ecuații sunt <b>echivalente</b> dacă au aceleași soluții. A rezolva înseamnă a trece, prin transformări sigure, la ecuații echivalente din ce în ce mai simple:</p>
<ul>
<li><b>Principiul 1</b>: adunând sau scăzând din ambii membri <b>aceeași expresie</b> se obține o ecuație echivalentă. (De aici regula transferului: un termen trece în celălalt membru schimbându-și semnul.)</li>
<li><b>Principiul 2</b>: înmulțind sau împărțind ambii membri cu același număr <b>diferit de zero</b> se obține o ecuație echivalentă.</li>
</ul>
<p>⚠️ Atenție la principiul 2 cu <b>expresii care conțin x</b>: dacă împarți la x, pierzi posibilitatea ca x = 0 să fie soluție; dacă înmulțești cu (x − 2) poți introduce „soluția” x = 2 care nu exista. Cu expresiile în x nu se poate înmulți sau împărți ușuratic: de aceea ecuațiile fracționare cer CE.</p>
<p>Redusă la <b>forma normală ax = b</b>, ecuația este: <b>determinată</b> dacă a ≠ 0 (x = b/a), <b>imposibilă</b> dacă a = 0 și b ≠ 0, <b>nedeterminată</b> dacă a = 0 și b = 0.</p>`
    },
    {
      type: "remember",
      title: "Metoda pentru ecuațiile cu coeficienți întregi",
      html: `<ol>
<li>Elimină <b>parantezele</b> (distributivitate).</li>
<li>Dacă există <b>numitori numerici</b>, înmulțește totul cu c.m.m.m.c. al lor.</li>
<li><b>Transferă</b>: termenii cu x în stânga, numerele în dreapta.</li>
<li><b>Redu</b>: obții ax = b.</li>
<li><b>Împarte</b> la a, dacă a ≠ 0.</li>
<li><b>Verifică</b> înlocuind în ecuația inițială.</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemplu ghidat: ecuație cu fracții numerice",
      html: `<p>Rezolvă <b>(2x − 1)/3 − (x + 2)/2 = 1</b>.</p>
<ol>
<li>c.m.m.m.c.(3, 2) = 6: înmulțesc totul cu 6 → 2(2x − 1) − 3(x + 2) = 6</li>
<li>Paranteze (atenție la semnul minus!): 4x − 2 − 3x − 6 = 6</li>
<li>Reduc: x − 8 = 6 → <b>x = 14</b></li>
<li>Verificare: (28 − 1)/3 − (14 + 2)/2 = 9 − 8 = 1 ✔️</li>
</ol>`
    },
    {
      type: "svg",
      title: "Soluția este o intersecție",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="260" x2="40" y2="30" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="187" x2="540" y2="113" stroke="#2563eb" stroke-width="4"/>
<line x1="40" y1="260" x2="540" y2="40" stroke="#ea580c" stroke-width="4"/>
<line x1="290" y1="150" x2="290" y2="260" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="290" cy="150" r="8" fill="#16a34a"/>
<text x="290" y="282" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">100 de minute</text>
<text x="300" y="140" font-size="16" fill="#166534" font-weight="bold">cost egal: 15 €</text>
<text x="400" y="85" font-size="16" fill="#9a3412" font-weight="bold">Planul B: 0,15 · m</text>
<text x="330" y="215" font-size="16" fill="#1d4ed8" font-weight="bold">Planul A: 10 + 0,05 · m</text>
<text x="50" y="24" font-size="16" fill="#334155">Cost (€)</text>
<text x="545" y="282" font-size="16" fill="#334155" text-anchor="end">minute pe lună</text>
</svg>`,
      caption: "Ecuația 10 + 0,05m = 0,15m se rezolvă căutând punctul în care cele două drepte se intersectează."
    },
    {
      type: "example",
      title: "Exemplu practic: ce abonament este mai avantajos?",
      html: `<p>Planul <b>A</b> costă 10 € pe lună plus 0,05 € pe minut; planul <b>B</b> nu are abonament, dar costă 0,15 € pe minut. De la câte minute este mai avantajos A?</p>
<ul>
<li>Necunoscuta: m = minute pe lună.</li>
<li>Costuri egale: 10 + 0,05m = 0,15m → 10 = 0,10m → <b>m = 100</b>.</li>
<li>Interpretare: sub 100 de minute este mai avantajos B, peste este mai avantajos A. Soluția ecuației este punctul de „echilibru” (<i>break-even</i>), concept folosit în economie de orice companie.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: întâlnirea trenurilor",
      html: `<p>Două gări sunt la 360 km distanță. La ora 9:00 un tren pleacă din prima cu 80 km/h, iar altul din a doua spre prima cu 100 km/h. Când se întâlnesc?</p>
<ul>
<li>Necunoscuta: t = orele scurse. Distanțele parcurse: 80t și 100t, iar împreună acoperă 360 km.</li>
<li>Ecuația: 80t + 100t = 360 → 180t = 360 → <b>t = 2 ore</b>: se întâlnesc la ora 11:00, la 160 km de prima gară.</li>
<li>Verificare: 160 + 200 = 360 ✔️</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: ecuații cu coeficienți întregi",
      questions: [
        { type: "num", q: "Rezolvă: 3x − 7 = 11", answer: 6, explain: "3x = 18, deci x = 6." },
        { type: "num", q: "Rezolvă: x/4 + 1 = 4", answer: 12, explain: "x/4 = 3, deci x = 12." },
        { type: "tf", q: "Pentru a rezolva o ecuație se poate împărți întotdeauna ambii membri la x.", answer: false, explain: "Dacă x = 0, împărțirea nu este permisă și se poate pierde soluția x = 0: de exemplu x² = 3x." }
      ]
    },
    {
      type: "text",
      title: "Ecuații fracționare: condițiile de existență",
      html: `<p>O ecuație este <b>fracționară</b> când necunoscuta apare la numitor. Drumul se schimbă pentru că trebuie excluse valorile care anulează un numitor:</p>
<ol>
<li><b>Descompune</b> numitorii în factori.</li>
<li>Scrie <b>CE</b>: numitori ≠ 0.</li>
<li>Calculează c.m.m.m.c. și <b>înmulțește ambii membri</b> cu el (este permis pentru că, având CE, c.m.m.m.c. nu este zero): numitorii dispar.</li>
<li>Rezolvă ecuația obținută.</li>
<li><b>Compară cu CE</b>: soluția este <b>acceptabilă</b> numai dacă nu încalcă CE; altfel se elimină.</li>
</ol>
<p><b>Exemplul 1</b>: 1/(x − 1) + 1/(x + 1) = 4/(x² − 1). CE: x ≠ ±1. Înmulțesc cu (x − 1)(x + 1): (x + 1) + (x − 1) = 4 → 2x = 4 → <b>x = 2</b>, acceptabilă.</p>
<p><b>Exemplul 2</b>: x/(x − 3) = 3/(x − 3). CE: x ≠ 3. Înmulțesc cu (x − 3): x = 3. Dar x = 3 încalcă CE! Soluția nu este acceptabilă: ecuația este <b>imposibilă</b>.</p>
<p><b>Exemplul 3</b>: x/(x − 2) = 2/(x − 2) + 1. CE: x ≠ 2. Înmulțesc cu (x − 2): x = 2 + x − 2 → x = x: identitate. Sunt soluții <b>toate numerele, în afară de 2</b>.</p>`
    },
    {
      type: "widget",
      title: "Câte soluții are?",
      widget: "classify",
      options: { groups: ["O soluție", "Imposibilă", "Nedeterminată"], items: [
        ["3x − 5 = 2x + 1", 0],
        ["2(x + 1) = 2x + 3", 1],
        ["4x − 4 = 4(x − 1)", 2],
        ["x/(x − 3) = 3/(x − 3)", 1],
        ["x/2 + x/3 = 5", 0],
        ["x/(x − 2) = 2/(x − 2) + 1", 2],
        ["5 − x = x − 5", 0]
      ] },
      caption: "Redu la ax = b și, la cele fracționare, nu uita să verifici CE."
    },
    {
      type: "curiosity",
      title: "Știai că…? Cuvântul „algebră”",
      html: `<p>Cuvântul <b>algebră</b> vine din arabă, <i>al-jabr</i>, „recompunere”, și se află în titlul tratatului pe care matematicianul persan <b>Muhammad ibn Mūsā al-Khwārizmī</b> l-a scris la Bagdad în jurul anului 820 d.Hr. Numele său latinizat, <i>Algoritmi</i>, a dat cuvântul <b>algoritm</b>. Al-jabr indica trecerea unui termen scăzut în celălalt membru; <i>al-muqābala</i> („echilibrare”) reducerea termenilor asemenea: sunt cele două principii de echivalență ale noastre, dar fără simboluri, totul în cuvinte!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cine a inventat literele?",
      html: `<p>Secole la rând, ecuațiile au fost scrise în cuvinte. Francezul <b>François Viète</b> (1540–1603) a fost primul care a folosit sistematic litere pentru cantități, chiar și pentru datele cunoscute. <b>René Descartes</b>, în secolul al XVII-lea, a fixat uzul pe care îl cunoaștem astăzi: x, y, z pentru necunoscute și a, b, c pentru valorile cunoscute, în timp ce semnul = îi aparține galezului <b>Robert Recorde</b> (1557).</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a rezolva o ecuație",
      intro: "Metoda mecanică funcționează, dar a înțelege de ce funcționează este altceva. Iată metode istorice și vizuale.",
      tabs: [
        {
          label: "🕌 Al-jabr și al-muqābala",
          html: `<p>Al-Khwārizmī rezolva raționând cu „lucruri” (<i>shay</i>, x-ul nostru) și numere. Exemplu, în simbolurile noastre: <b>5x − 3 = 2x + 9</b>.</p>
<ul>
<li><b>al-jabr</b> („a recompune”): −3 face membrul „incomplet”; adun 3 în ambele părți: 5x = 2x + 12.</li>
<li><b>al-muqābala</b> („a compara”): scad 2x din ambele părți: 3x = 12.</li>
<li>Împart: <b>x = 4</b>.</li>
</ul>
<p>Sunt exact transferul termenilor și reducerea pe care le faci și tu, dar povestite ca „restabilirea” și „egalizarea” unei situații de echilibru.</p>`
        },
        {
          label: "🏺 Falsa poziție (Egipt)",
          html: `<p>Scribii egipteni rezolvau problema „o cantitate și a șaptea parte din ea fac 19” (x + x/7 = 19) cu metoda <b>falsei poziții</b>: alegi o valoare comodă (7), calculezi rezultatul (7 + 1 = 8) și îl corectezi proporțional.</p>
<ul>
<li>Încerc x = 7: 7 + 1 = 8, dar trebuie să obțin 19.</li>
<li>Factorul de corecție: 19/8. Deci x = 7 · 19/8 = <b>133/8</b>.</li>
<li>Verificare: 133/8 + 19/8 = 152/8 = 19 ✔️</li>
</ul>
<p>Funcționează pentru că într-o ecuație ax = b rezultatul este <b>proporțional</b> cu x: dublând x se dublează rezultatul. Este metoda „încercării și corecției”, folosită și astăzi (sub alt nume) în algoritmii numerici.</p>`
        },
        {
          label: "📈 Cu graficul",
          html: `<p>Fiecare membru al unei ecuații de gradul întâi este o <b>dreaptă</b> dacă îl privești ca funcție de x. A rezolva ecuația înseamnă a găsi pentru ce x cele două drepte au aceeași <b>valoare</b>, adică unde se intersectează (ca în graficul planurilor telefonice). Dacă dreptele sunt paralele nu se întâlnesc niciodată: ecuație <b>imposibilă</b>; dacă sunt aceeași dreaptă se întâlnesc peste tot: ecuație <b>nedeterminată</b>.</p>`
        },
        {
          label: "🔁 Operații inverse",
          html: `<p>Dacă necunoscuta apare o singură dată, poți „desfășura” șirul de operații în sens invers. 3x − 7 = 11 înseamnă: pornesc de la x, înmulțesc cu 3, scad 7, obțin 11. Parcurg drumul înapoi cu operațiile inverse: 11 + 7 = 18, apoi 18 : 3 = 6. Deci <b>x = 6</b>.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [6, 11, 18] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta ecuațiilor de gradul întâi",
      nodes: [
        { id: "eq", label: "Ecuație", x: 50, y: 6, color: "#6366f1", html: "Egalitate adevărată numai pentru unele valori ale necunoscutei.", why: "Exprimă în formă matematică o problemă: „găsește valoarea care îndeplinește această condiție”. Se găsesc exemple deja în papirusul Rhind și în tăblițele babiloniene." },
        { id: "p1", label: "Principiul 1", x: 20, y: 28, color: "#16a34a", html: "Se adună sau se scade aceeași expresie din ambii membri.", why: "Dacă două cantități sunt egale, adăugând aceeași cantitate rămân egale: una dintre „noțiunile comune” ale lui Euclid. Este al-jabr al lui al-Khwārizmī." },
        { id: "p2", label: "Principiul 2", x: 80, y: 28, color: "#f59e0b", html: "Se înmulțește sau se împarte cu același număr ≠ 0.", why: "A înmulți cu 0 șterge orice informație; cu expresii în x, a înmulți poate introduce soluții străine, a împărți poate pierde soluții." },
        { id: "forma", label: "Forma normală ax = b", x: 50, y: 50, color: "#a855f7", html: "Rezultatul transformărilor.", why: "De aici, cu cazul a ≠ 0 / a = 0, se clasifică orice ecuație de gradul întâi." },
        { id: "casi", label: "Trei cazuri", x: 20, y: 72, color: "#ef4444", html: "Determinată, imposibilă, nedeterminată.", why: "Geometric: drepte concurente, paralele distincte, confundate." },
        { id: "fratte", label: "Ecuații fracționare", x: 80, y: 62, color: "#0ea5e9", html: "Necunoscuta apare la numitor: sunt necesare CE.", why: "Împărțirea la zero este imposibilă, deci valorile care anulează un numitor trebuie excluse înainte de rezolvare." },
        { id: "acc", label: "Acceptabilitate", x: 80, y: 88, color: "#14b8a6", html: "O soluție care încalcă CE se elimină.", why: "Înmulțind cu c.m.m.m.c. se obține o ecuație care poate avea soluții „străine” de ecuația inițială." },
        { id: "probl", label: "Probleme", x: 40, y: 92, color: "#22c55e", html: "Alegi necunoscuta, traduci, rezolvi, interpretezi.", why: "Pasul fundamental este modelarea: de la limbajul natural la limbajul algebric, cu Viète și Descartes." }
      ],
      edges: [
        ["eq", "p1", "se transformă cu"],
        ["eq", "p2", "se transformă cu"],
        ["p1", "forma", "duce la"],
        ["p2", "forma", "duce la"],
        ["forma", "casi", "decide"],
        ["eq", "fratte", "dacă x la numitor"],
        ["fratte", "acc", "verificare finală"],
        ["probl", "eq", "se traduc în"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: ecuații fracționare și probleme",
      questions: [
        { type: "mc", q: "Ecuația x/(x − 3) = 3/(x − 3) are ca soluții…", options: ["x = 3", "nicio soluție", "toate numerele"], answer: 1, explain: "Se obține x = 3, dar x = 3 anulează numitorul: soluție inacceptabilă, deci ecuația este imposibilă." },
        { type: "num", q: "Rezolvă: 2/(x + 1) = 1", answer: 1, explain: "Cu x ≠ −1: 2 = x + 1, deci x = 1." },
        { type: "num", q: "Tripla unui număr micșorată cu 4 este 26. Care este numărul?", answer: 10, explain: "3x − 4 = 26 → 3x = 30 → x = 10." }
      ]
    }
  ],
  glossary: [
    { t: "Ecuație", d: "Egalitate între expresii verificată numai pentru unele valori ale necunoscutei." },
    { t: "Soluție (rădăcină)", d: "Valoarea necunoscutei care face ecuația adevărată." },
    { t: "Ecuații echivalente", d: "Ecuații cu aceleași soluții." },
    { t: "Principii de echivalență", d: "Reguli (adunare/scădere și înmulțire/împărțire cu un număr ≠ 0) care transformă o ecuație într-una echivalentă." },
    { t: "Forma normală", d: "Forma ax = b la care se reduce o ecuație de gradul întâi." },
    { t: "Ecuație fracționară", d: "Ecuație cu necunoscuta la numitor." },
    { t: "Condiții de existență", d: "Valori ale necunoscutei care trebuie excluse pentru că anulează un numitor." },
    { t: "Soluție acceptabilă", d: "Soluție care respectă condițiile de existență." },
    { t: "Break-even", d: "Punct de echilibru în care două costuri, sau costurile și veniturile, sunt egale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Rezolvă: 5(x − 2) − 3 = 2x + 8", answer: 7, explain: "5x − 13 = 2x + 8 → 3x = 21 → x = 7." },
      { type: "num", q: "Rezolvă: (2x − 1)/3 − (x + 2)/2 = 1", answer: 14, explain: "Înmulțind cu 6: 4x − 2 − 3x − 6 = 6 → x = 14." },
      { type: "mc", q: "Ecuația 3(x − 1) + 2 = 3x − 1 este…", options: ["determinată", "imposibilă", "nedeterminată"], answer: 2, explain: "3x − 1 = 3x − 1: se reduce la 0x = 0, deci are o infinitate de soluții." },
      { type: "mc", q: "Ecuația x/(x − 4) = 4/(x − 4) are…", options: ["soluția x = 4", "nicio soluție acceptabilă", "o infinitate de soluții"], answer: 1, explain: "Cu CE x ≠ 4, înmulțind cu (x − 4) se obține x = 4, care încalcă CE: ecuația este imposibilă." },
      { type: "num", q: "Rezolvă: 1/(x − 1) + 1/(x + 1) = 4/(x² − 1)", answer: 2, explain: "CE x ≠ ±1; 2x = 4 → x = 2, acceptabilă." },
      { type: "tf", q: "A înmulți ambii membri cu o expresie care conține x este întotdeauna o transformare echivalentă.", answer: false, explain: "Dacă expresia se poate anula, se pot introduce soluții străine: de aceea se verifică CE." },
      { type: "num", q: "Două trenuri pleacă în același moment din două gări aflate la 450 km distanță și se mișcă unul spre celălalt cu 70 km/h și 80 km/h. După câte ore se întâlnesc?", answer: 3, unit: "h", explain: "(70 + 80)t = 450 → t = 3." },
      { type: "order", q: "Pune în ordine pașii pentru o ecuație fracționară.", items: ["Descompunem numitorii în factori", "Scriem CE", "Înmulțim cu c.m.m.m.c.", "Rezolvăm ecuația obținută", "Verificăm soluția cu CE"], explain: "CE se scriu mai întâi, iar verificarea acceptabilității încheie procedeul." },
      { type: "text", q: "Cum se numea matematicianul persan de la care provin cuvintele „algebră” și „algoritm”?", answer: ["al-khwarizmi", "al khwarizmi", "khwarizmi", "alkhwarizmi", "al-khuwarizmi", "al khuwarizmi", "khuwarizmi", "al-horezmi", "al horezmi", "horezmi", "al-khwārizmī"], explain: "Al-Khwārizmī (secolul al IX-lea): al-jabr din titlul operei sale, iar numele lui latinizat dă „algoritm”." },
      { type: "num", q: "Planul A: 12 € fix + 0,04 €/min. Planul B: 0,10 €/min. La câte minute costă la fel cele două planuri?", answer: 200, unit: "min", explain: "12 + 0,04m = 0,10m → 12 = 0,06m → m = 200." }
    ]
  }
});
