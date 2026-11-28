TOPIC('ro', {
  id: "l1-mat-geometria-euclidea",
  title: "Geometria euclidiană: axiome și triunghiuri",
  intro: "Cu aproape două mii trei sute de ani în urmă, la Alexandria Egiptului, Euclid a avut o idee revoluționară: să pornească de la foarte puține afirmații acceptate fără demonstrație și să <b>deducă</b> tot restul prin raționamente riguroase. Așa s-a născut metoda ipotetico-deductivă, baza întregii matematici. În această lecție vezi cum funcționează: <b>noțiunile primitive</b>, <b>axiomele și postulatele</b> și primul mare rezultat, <b>cazurile de congruență ale triunghiurilor</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Euclid și metoda deductivă",
      html: `<p><b>Euclid</b> a trăit la Alexandria Egiptului în jurul anului 300 î.Hr. și a scris <b>Elementele</b>, în 13 cărți: un tratat care adună și ordonează sistematic geometria greacă (și puțină teorie a numerelor). Peste două mii de ani a fost manualul de geometrie prin excelență, al doilea ca răspândire doar după Biblie.</p>
<p>Metoda este aceasta:</p>
<ul>
<li><b>Noțiuni primitive</b>: concepte care nu se definesc, pentru că orice definiție ar cere alte cuvinte, care la rândul lor ar trebui definite, la nesfârșit. În geometrie: <b>punct, dreaptă, plan</b> (și „a fi între”). Le descriem prin proprietățile lor, nu printr-o definiție.</li>
<li><b>Definiții</b>: pentru noile concepte se explică sensul folosind concepte deja cunoscute (segment, unghi, triunghi, bisectoare…).</li>
<li><b>Axiome și postulate</b>: afirmații care se acceptă ca adevărate fără demonstrație. Euclid numea <i>noțiuni comune</i> pe cele valabile peste tot („lucrurile egale cu același lucru sunt egale între ele”) și <i>postulate</i> pe cele specifice geometriei.</li>
<li><b>Teoreme</b>: afirmații care se <b>demonstrează</b>, adică se deduc logic din axiome, postulate și teoreme deja demonstrate.</li>
</ul>
<p>O teoremă se enunță cu o <b>ipoteză</b> (ceea ce se presupune adevărat) și o <b>concluzie</b> (ceea ce se vrea demonstrat). Dacă H este ipoteza și T concluzia, teorema spune: „dacă H, atunci T”.</p>`
    },
    {
      type: "text",
      title: "Cele cinci postulate ale lui Euclid",
      html: `<ol>
<li>Prin două puncte distincte trece o dreaptă (și numai una), adică se poate trasa un segment între două puncte.</li>
<li>Un segment poate fi prelungit nelimitat în linie dreaptă.</li>
<li>Dându-se un centru și o rază, se poate descrie un cerc.</li>
<li>Toate unghiurile drepte sunt egale între ele.</li>
<li><b>Postulatul al cincilea</b>: dacă o dreaptă care taie alte două formează, de aceeași parte, unghiuri interne a căror sumă este mai mică decât două unghiuri drepte, cele două drepte, prelungite, se întâlnesc de acea parte. (Echivalent, în formă modernă, cu: „printr-un punct exterior unei drepte trece <b>o singură</b> paralelă la ea”.)</li>
</ol>
<p>Primele patru par evidente. Al cincilea este lung și complicat: secole la rând matematicienii au încercat să-l demonstreze pornind de la celelalte, fără să reușească. Vorbim despre el în lecția despre dreptele paralele.</p>`
    },
    {
      type: "svg",
      title: "De ce este triunghiul special",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="34" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">Triunghiul: rigid</text>
<polygon points="50,240 250,240 150,80" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<circle cx="50" cy="240" r="8" fill="#166534"/><circle cx="250" cy="240" r="8" fill="#166534"/><circle cx="150" cy="80" r="8" fill="#166534"/>
<text x="150" y="272" font-size="16" text-anchor="middle" fill="#14532d">trei laturi fixate → formă fixată (LLL)</text>
<text x="430" y="34" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Patrulaterul: se deformează</text>
<polygon points="340,240 520,240 520,100 340,100" fill="#fed7aa" stroke="#9a3412" stroke-width="4"/>
<polygon points="340,240 520,240 560,100 380,100" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="340" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="100" r="8" fill="#9a3412"/><circle cx="340" cy="100" r="8" fill="#9a3412"/>
<text x="430" y="272" font-size="16" text-anchor="middle" fill="#7c2d12">patru laturi fixate, formă variabilă</text>
</svg>`,
      caption: "De aceea piloanele, podurile și macaralele sunt făcute din triunghiuri: triunghiurile nu se deformează."
    },
    {
      type: "text",
      title: "Triunghiul și elementele lui",
      html: `<p>Un <b>triunghi</b> este partea de plan delimitată de trei segmente (<b>laturi</b>) care unesc trei puncte necoliniare (<b>vârfuri</b>). Are trei <b>unghiuri interne</b>.</p>
<ul>
<li><b>După laturi</b>: <b>scalen</b> (trei laturi diferite), <b>isoscel</b> (două laturi egale), <b>echilateral</b> (trei laturi egale).</li>
<li><b>După unghiuri</b>: <b>ascuțitunghic</b>, <b>dreptunghic</b> (un unghi drept), <b>obtuzunghic</b>.</li>
<li><b>Segmente importante</b>: <b>mediana</b> unește un vârf cu mijlocul laturii opuse; <b>bisectoarea</b> împarte unghiul în două părți egale; <b>înălțimea</b> este segmentul perpendicular dus din vârf pe dreapta laturii opuse. Cele trei mediane se intersectează în <b>centrul de greutate</b>, cele trei bisectoare în <b>centrul cercului înscris</b>, cele trei înălțimi în <b>ortocentru</b>.</li>
</ul>
<p>Două figuri sunt <b>congruente</b> dacă pot fi suprapuse printr-o mișcare rigidă (translație, rotație, răsturnare): aceeași formă și aceleași dimensiuni. La un triunghi, congruența cere 6 egalități (3 laturi și 3 unghiuri), dar <b>cazurile de congruență</b> ne spun că sunt suficiente <b>trei</b>, bine alese.</p>
<p><b>Inegalitatea triunghiului</b>: în orice triunghi fiecare latură este <b>mai mică decât suma</b> celorlalte două (și mai mare decât diferența lor). Cu trei bețișoare de 2, 3 și 7 cm nu poți construi niciun triunghi: 2 + 3 &lt; 7!</p>`
    },
    {
      type: "remember",
      title: "Cele trei cazuri de congruență",
      html: `<p>Două triunghiuri sunt congruente dacă au congruente, în ordine:</p>
<ol>
<li><b>Cazul 1 (LUL)</b>: două laturi și <b>unghiul cuprins</b> între ele.</li>
<li><b>Cazul 2 (ULU)</b>: o latură și <b>cele două unghiuri adiacente</b> ei.</li>
<li><b>Cazul 3 (LLL)</b>: <b>cele trei laturi</b>.</li>
</ol>
<p>⚠️ <b>Nu sunt cazuri de congruență</b>: trei unghiuri egale (triunghiuri asemenea, dar de dimensiuni diferite), două laturi și un unghi <b>necuprins</b> între ele (LLU: pot exista mai multe triunghiuri posibile).</p>`
    },
    {
      type: "widget",
      title: "Care caz?",
      widget: "classify",
      options: { groups: ["Cazul 1 (LUL)", "Cazul 2 (ULU)", "Cazul 3 (LLL)", "Nu este suficient"], items: [
        ["două laturi și unghiul cuprins", 0],
        ["o latură și cele două unghiuri adiacente", 1],
        ["cele trei laturi", 2],
        ["trei unghiuri egale", 3],
        ["două laturi și un unghi necuprins", 3],
        ["AB = DE, BC = EF și unghiul B = unghiul E", 0],
        ["AB = DE, unghiul A = D și unghiul B = E", 1]
      ] },
      caption: "Unghiul trebuie să fie cuprins între cele două laturi; latura trebuie să fie adiacentă celor două unghiuri."
    },
    {
      type: "example",
      title: "O demonstrație: unghiurile de la baza triunghiului isoscel",
      html: `<p><b>Teoremă</b>: într-un triunghi isoscel unghiurile de la bază sunt congruente.</p>
<p><b>Ipoteză</b>: ABC cu AC = BC. <b>Concluzie</b>: unghiul A = unghiul B.</p>
<p><b>Demonstrație</b>: trasez bisectoarea unghiului C, care intersectează AB în D. Consider triunghiurile ACD și BCD:</p>
<ul>
<li>AC = BC din ipoteză;</li>
<li>unghiul ACD = unghiul BCD pentru că CD este bisectoare;</li>
<li>CD este latură comună.</li>
</ul>
<p>Au două laturi și unghiul cuprins congruente: conform <b>cazului 1</b>, ACD ≅ BCD. Deci unghiurile corespunzătoare, din A și din B, sunt congruente. <b>q.e.d.</b> (ceea ce trebuia demonstrat)</p>
<p>Această teoremă (Elementele, I.5) a fost numită de medievali <i>pons asinorum</i>, „podul măgarilor”, pentru că era primul obstacol în fața căruia se opreau elevii mai slabi.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: axiome și cazuri de congruență",
      questions: [
        { type: "mc", q: "Care sunt noțiunile primitive ale geometriei?", options: ["Punctul, dreapta și planul", "Triunghiul, pătratul și cercul", "Unghiul, segmentul și aria"], answer: 0, explain: "Punctul, dreapta și planul nu se definesc: se descriu prin axiome." },
        { type: "tf", q: "Un postulat trebuie demonstrat înainte de a putea fi folosit.", answer: false, explain: "Un postulat este o afirmație acceptată fără demonstrație." },
        { type: "num", q: "Câte sunt postulatele lui Euclid?", answer: 5, explain: "Cinci; al cincilea este celebrul postulat al paralelelor." }
      ]
    },
    {
      type: "example",
      title: "Exemplu practic: cum măsori un râu fără să-l traversezi",
      html: `<p>Cum măsori lățimea AT a unui râu? De pe malul unde te afli, în A, în fața unui copac T de pe celălalt mal:</p>
<ol>
<li>mergi de-a lungul malului pe o direcție perpendiculară pe AT până la un punct B și înfigi un par;</li>
<li>continui pe aceeași lungime până la C (adică AB = BC);</li>
<li>din C îndepărtează-te perpendicular pe mal până când, privind înapoi, copacul T și parul B sunt aliniate cu tine: ai ajuns în D.</li>
</ol>
<p>Triunghiurile ABT și CBD au AB = CB, unghiurile din A și din C drepte, iar unghiurile din B egale fiind opuse la vârf: conform <b>cazului 2</b> sunt congruente. Deci CD = AT: distanța măsurată pe uscat este lățimea râului. Desenul se află în fișa „Râul” dintre explicațiile alternative.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Podul măgarilor și Thales",
      html: `<p>Primul care a demonstrat teoreme de geometrie, potrivit tradiției, a fost <b>Thales din Milet</b> (secolele VII–VI î.Hr.). Se povestește că folosea chiar congruența triunghiurilor pentru a calcula distanța unei corăbii față de țărm, o aplicație foarte asemănătoare problemei râului. Euclid, trei secole mai târziu, a pus totul într-un sistem.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Hilbert și rigoarea modernă",
      html: `<p><i>Elementele</i> lui Euclid, deși geniale, au unele goluri logice: Euclid folosește uneori lucruri „evidente” din desen care nu se află în postulate. În 1899 matematicianul german <b>David Hilbert</b> a publicat <i>Grundlagen der Geometrie</i> („Fundamentele geometriei”) cu un sistem de axiome complet și fără lacune. Hilbert spunea că, în loc de puncte, drepte și plane, s-ar putea spune „mese, scaune și halbe de bere”: contează relațiile dintre obiecte, nu numele lor.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege geometria euclidiană",
      intro: "Geometria se înțelege mai bine cu mâinile și cu desenul. Încearcă aceste drumuri.",
      tabs: [
        {
          label: "📏 Riglă și compas",
          html: `<p>În prima teoremă din <i>Elemente</i> (I.1) Euclid construiește un <b>triunghi echilateral</b> pe un segment AB folosind doar primele trei postulate. Cu compasul (postulatul 3) desenezi cercul cu centrul A și raza AB, apoi cel cu centrul B și raza AB. Se intersectează în C, iar AC = AB (raze ale primului), BC = AB (raze ale celui de-al doilea): cele trei laturi sunt egale. Nicio măsurătoare, doar logică!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="225" cy="190" r="90" fill="none" stroke="#6366f1" stroke-width="3"/>
<circle cx="315" cy="190" r="90" fill="none" stroke="#f97316" stroke-width="3"/>
<polygon points="225,190 315,190 270,112" fill="#fde68a" stroke="#1f2937" stroke-width="4"/>
<circle cx="225" cy="190" r="6" fill="#1f2937"/><circle cx="315" cy="190" r="6" fill="#1f2937"/><circle cx="270" cy="112" r="6" fill="#1f2937"/>
<text x="212" y="212" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="322" y="212" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="262" y="100" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="470" y="140" font-size="16" fill="#4338ca">AC = raza cercului A</text>
<text x="470" y="170" font-size="16" fill="#c2410c">BC = raza cercului B</text>
<text x="470" y="200" font-size="16" fill="#1f2937">AB = raza ambelor</text>
<text x="470" y="232" font-size="16" fill="#166534" font-weight="bold">→ ABC echilateral</text>
</svg>`
        },
        {
          label: "🌊 Râul (cu desen)",
          html: `<p>Iată schema problemei râului: triunghiurile ABT și CBD sunt „unul răsturnatul celuilalt”, rotite cu o jumătate de tură în jurul lui B. Dacă două triunghiuri se suprapun printr-o rotație, ele sunt congruente.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="70" width="600" height="110" fill="#bae6fd"/>
<text x="500" y="125" font-size="18" fill="#0369a1" font-weight="bold">râu</text>
<circle cx="150" cy="70" r="9" fill="#16a34a"/><text x="130" y="60" font-size="18" fill="#166534" font-weight="bold">T (copac)</text>
<line x1="150" y1="70" x2="150" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="180" x2="450" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="450" y1="180" x2="450" y2="280" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="70" x2="450" y2="280" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="150" cy="180" r="6" fill="#1f2937"/><circle cx="300" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="280" r="6" fill="#1f2937"/>
<text x="128" y="206" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="293" y="206" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="458" y="206" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="458" y="285" font-size="18" fill="#1f2937" font-weight="bold">D</text>
<text x="225" y="228" font-size="16" text-anchor="middle" fill="#1f2937">AB = BC</text>
<text x="105" y="130" font-size="16" fill="#1f2937">AT</text>
<text x="470" y="240" font-size="16" fill="#1f2937">CD = AT</text>
</svg>`
        },
        {
          label: "🥢 Cu bețișoare",
          html: `<p>Ia bețișoare sau paie de lungimi 3, 4 și 5 cm și unește-le la capete cu puțină plastilină: vei obține <b>un singur triunghi posibil</b> (abstracție făcând de răsturnare). Orice alt triunghi construit cu aceleași trei lungimi se suprapune peste al tău: este cazul 3. Acum unește patru bețișoare: patrulaterul se turtește și își schimbă forma. De aceea este suficientă o diagonală (încă un bețișor) ca să-l întărești și de aceea în piloane și în poduri se văd triunghiuri peste tot.</p>
<p>Încearcă să construiești și cu 2, 3 și 7 cm: nu reușești, pentru că 2 + 3 &lt; 7 (inegalitatea triunghiului).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta geometriei euclidiene",
      nodes: [
        { id: "prim", label: "Noțiuni primitive", x: 50, y: 6, color: "#6366f1", html: "Punct, dreaptă, plan: nu se definesc.", why: "O definiție folosește alte cuvinte care la rândul lor trebuie definite: ca să nu mergem la infinit, pornim de la unele concepte luate ca cunoscute. Hilbert (1899) le-a lăsat intenționat „fără nume”." },
        { id: "ass", label: "Axiome și postulate", x: 20, y: 28, color: "#f59e0b", html: "Adevăruri acceptate fără demonstrație.", why: "Servesc pentru că orice demonstrație pornește de la ceva deja admis. Euclid a ales puține și simple: cele cinci postulate și noțiunile comune." },
        { id: "def", label: "Definiții", x: 80, y: 28, color: "#16a34a", html: "Concepte noi se explică prin cele deja cunoscute.", why: "Dau nume precise (triunghi, bisectoare…) folosind doar ceea ce a fost deja introdus." },
        { id: "teo", label: "Teoreme și demonstrații", x: 50, y: 52, color: "#a855f7", html: "Ipoteză → concluzie, prin deducții logice.", why: "Metoda ipotetico-deductivă, prezentă deja la Thales și Pitagora și adusă la rang de sistem de Euclid, garantează că un adevăr este la fel de sigur ca postulatele din care derivă." },
        { id: "cong", label: "Congruență", x: 20, y: 76, color: "#0ea5e9", html: "Aceeași formă și aceleași dimensiuni: figuri suprapozabile.", why: "Euclid o introduce prin „suprapunere” (o mișcare rigidă); Hilbert o ia ca relație primitivă cu axiome proprii." },
        { id: "crit", label: "Cazuri de congruență a triunghiurilor", x: 50, y: 92, color: "#ef4444", html: "LUL, ULU, LLL.", why: "Derivă din postulate: date trei elemente potrivite, triunghiul este determinat în mod unic. Este fundamentul triangulației folosite de topografi și navigatori." },
        { id: "isos", label: "Triunghi isoscel", x: 85, y: 76, color: "#22c55e", html: "Unghiuri congruente la bază (și invers).", why: "Este prima teoremă „adevărată” din cartea I (pons asinorum): se demonstrează cu cazul 1." },
        { id: "v", label: "Postulatul al cincilea", x: 85, y: 52, color: "#14b8a6", html: "Condiție pentru ca două drepte să se întâlnească; echivalent cu unicitatea paralelei.", why: "Negarea lui duce la geometriile neeuclidiene (Lobacevski, Bolyai, Riemann în secolul al XIX-lea): o altă geometrie, la fel de coerentă." }
      ],
      edges: [
        ["prim", "ass", "descrise de"],
        ["prim", "def", "bază pentru"],
        ["ass", "teo", "premise pentru"],
        ["def", "teo", "limbajul"],
        ["teo", "cong", "studiază"],
        ["cong", "crit", "se verifică cu"],
        ["crit", "isos", "demonstrează"],
        ["ass", "v", "include"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: triunghiuri",
      questions: [
        { type: "mc", q: "Două triunghiuri au cele trei laturi congruente, în ordine. Sunt congruente conform…", options: ["cazului 1", "cazului 2", "cazului 3"], answer: 2, explain: "Trei laturi congruente: cazul LLL, al treilea." },
        { type: "tf", q: "Două triunghiuri cu cele trei unghiuri respectiv egale sunt întotdeauna congruente.", answer: false, explain: "Pot avea aceeași formă, dar dimensiuni diferite (sunt asemenea, nu congruente)." },
        { type: "num", q: "Un triunghi isoscel are unghiul de la vârf de 40°. Cât măsoară fiecare unghi de la bază? (Suma unghiurilor interne este 180°.)", answer: 70, unit: "°", explain: "(180 − 40)/2 = 70° fiecare." }
      ]
    }
  ],
  glossary: [
    { t: "Noțiune primitivă", d: "Concept care nu se definește (punct, dreaptă, plan)." },
    { t: "Axiomă / postulat", d: "Afirmație acceptată fără demonstrație." },
    { t: "Teoremă", d: "Afirmație demonstrată pornind de la axiome și teoreme deja cunoscute." },
    { t: "Ipoteză și concluzie", d: "Ipoteza este ceea ce se presupune adevărat; concluzia este ceea ce se vrea demonstrat." },
    { t: "Congruență", d: "Relație între figuri care pot fi suprapuse printr-o mișcare rigidă." },
    { t: "Cazuri de congruență", d: "Condiții minime (LUL, ULU, LLL) care garantează congruența a două triunghiuri." },
    { t: "Triunghi isoscel", d: "Triunghi cu cel puțin două laturi congruente." },
    { t: "Mediană, bisectoare, înălțime", d: "Segmente importante ale unui triunghi: spre mijlocul laturii opuse, care înjumătățește unghiul, perpendiculară pe latura opusă." },
    { t: "Inegalitatea triunghiului", d: "Fiecare latură a unui triunghi este mai mică decât suma celorlalte două." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "De ce sunt punctul, dreapta și planul noțiuni primitive?", options: ["Pentru că nu se definesc: orice definiție ar cere alți termeni de definit", "Pentru că sunt cele mai ușor de desenat", "Pentru că au fost demonstrate primele"], answer: 0, explain: "Sunt conceptele de pornire ale teoriei, descrise de axiome." },
      { type: "tf", q: "Un postulat este o afirmație acceptată fără demonstrație.", answer: true, explain: "Axiomele și postulatele sunt punctul de plecare al demonstrațiilor." },
      { type: "text", q: "Cine a scris Elementele în jurul anului 300 î.Hr.?", answer: ["euclid", "euclide"], explain: "Euclid, la Alexandria Egiptului." },
      { type: "mc", q: "Cazul 1 de congruență a triunghiurilor cere…", options: ["două laturi și unghiul cuprins", "două laturi și un unghi oarecare", "trei unghiuri"], answer: 0, explain: "LUL: două laturi și unghiul cuprins între ele." },
      { type: "mc", q: "Cazul 2 cere…", options: ["o latură și cele două unghiuri adiacente", "trei laturi", "două unghiuri și două laturi"], answer: 0, explain: "ULU: o latură și cele două unghiuri adiacente ei." },
      { type: "num", q: "Un triunghi isoscel are perimetrul 40 cm și baza 12 cm. Cât măsoară fiecare latură laterală?", answer: 14, unit: "cm", explain: "(40 − 12)/2 = 14 cm." },
      { type: "order", q: "Pune în ordine pașii unei demonstrații.", items: ["Scrierea ipotezei", "Scrierea concluziei", "Realizarea desenului și identificarea triunghiurilor de comparat", "Aplicarea unui caz de congruență", "Încheierea"], explain: "Se pornește de la ipoteză și concluzie, apoi se construiește lanțul de deducții." },
      { type: "mc", q: "De ce se folosesc triunghiuri la piloane?", options: ["Pentru că, având trei laturi fixate, forma nu se poate deforma (cazul 3)", "Pentru că sunt mai ieftine decât pătratele", "Pentru că au unghiurile mai mari"], answer: 0, explain: "Triunghiul este singurul poligon rigid." },
      { type: "tf", q: "Într-un triunghi isoscel unghiurile de la bază sunt congruente.", answer: true, explain: "Se demonstrează cu cazul 1, trasând bisectoarea unghiului de la vârf." },
      { type: "num", q: "Un triunghi are două laturi de 3 cm și 5 cm; a treia este un număr întreg de cm. Care este valoarea maximă posibilă?", answer: 7, unit: "cm", explain: "A treia latură trebuie să fie mai mică decât 3 + 5 = 8 și mai mare decât 5 − 3 = 2: maximul întreg este 7." }
    ]
  }
});
