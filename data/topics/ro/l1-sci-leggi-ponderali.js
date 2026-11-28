TOPIC('ro', {
  id: "l1-sci-leggi-ponderali",
  title: "Legile ponderale și teoria atomică",
  intro: "La sfârșitul secolului al XVIII-lea chimia devine știință datorită unei idei simple: <b>cântărirea</b>. Măsurând cu precizie masele substanțelor care reacționează, Lavoisier, Proust și Dalton au descoperit reguli numerice atât de exacte, încât a apărut o întrebare: de ce este natura atât de ordonată? Răspunsul a fost una dintre cele mai puternice idei din istorie: materia este alcătuită din <b>atomi</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Înainte de Lavoisier: misterul focului",
      html: `<p>În secolul al XVIII-lea se credea că un corp care arde pierde o substanță misterioasă, <b>flogistonul</b>. Dar exista o problemă: fierul care ruginește sau metalul „calcinat” în aer devine <b>mai greu</b>. Cum poate un corp care pierde ceva să devină mai greu?</p>
<p>Antoine-Laurent de <b>Lavoisier</b> (1743–1794) a transformat chimia într-o știință cantitativă: cântărea mereu totul, <b>înainte și după</b> reacție, și lucra în vase închise, astfel încât niciun gaz să nu poată scăpa. El a înțeles că arderea este o reacție cu <b>oxigenul</b> din aer (gaz izolat de Priestley în 1774 și numit „oxigen” de Lavoisier) și că metalul cântărește mai mult după ardere pentru că a <b>absorbit</b> oxigen.</p>`
    },
    {
      type: "text",
      title: "Legea conservării masei (Lavoisier, 1789)",
      html: `<p>În <i>Traité élémentaire de chimie</i> (1789), Lavoisier a formulat principiul care, tradus, sună astfel:</p>
<p><b>„Nimic nu se creează, nimic nu se pierde, totul se transformă.”</b></p>
<p>Într-o reacție chimică dintr-un <b>sistem închis</b>, masa totală a reactanților este egală cu masa totală a produșilor:</p>
<p><b>m(reactanți) = m(produși)</b></p>
<p>De ce pare uneori că nu e adevărat? Dacă arzi o bucată de hârtie, cenușa cântărește mai puțin decât hârtia inițială: restul masei s-a dus în gazele (CO₂ și vapori de apă) care s-au răspândit în aer. Dacă, în schimb, arzi lână de oțel, greutatea <b>crește</b>, pentru că fierul se combină cu oxigenul din aer.</p>
<p>Astăzi știm că această conservare este verificată cu mare precizie în reacțiile chimice; variațiile de masă asociate variației de energie (E = mc²) sunt prea mici ca să fie măsurate. Abia în reacțiile nucleare ele devin importante.</p>`
    },
    {
      type: "example",
      title: "Cântărim o ardere",
      html: `<p>Ardem <b>12 g de carbon</b> într-un vas închis cu oxigen. Se formează <b>44 g de dioxid de carbon</b>. Câtă masă de oxigen a reacționat?</p>
<ol>
<li>m(reactanți) = m(produși): m(C) + m(O₂) = m(CO₂).</li>
<li>12 g + m(O₂) = 44 g → m(O₂) = <b>32 g</b>.</li>
</ol>
<p>Alt caz: 5,6 g de fier reacționează cu sulf și formează 8,8 g de sulfură de fier. Sulful consumat este 8,8 − 5,6 = <b>3,2 g</b>.</p>`
    },
    {
      type: "text",
      title: "Legea proporțiilor definite (Proust, 1799)",
      html: `<p>Chimistul francez Joseph-Louis <b>Proust</b> (1754–1826) a analizat ani la rând probe de compuși de proveniențe diferite și a găsit un fapt surprinzător:</p>
<p><b>Într-un compus pur, elementele sunt întotdeauna combinate în același raport de masă, indiferent de proveniența compusului.</b></p>
<p>Apa este formată întotdeauna din <b>1 parte de hidrogen și 8 părți de oxigen</b> în masă (1 : 8): 9 g de apă conțin 1 g de H și 8 g de O; 90 g conțin 10 g de H și 80 g de O. Dacă pui 2 g de hidrogen cu 8 g de oxigen, reacționează doar 1 g de hidrogen: 1 g de H rămâne în exces, pentru că raportul trebuie respectat.</p>
<p>Legea a fost primită cu multe discuții: chimistul <b>Berthollet</b> susținea că proporțiile pot varia în funcție de condiții. Dezbaterea a durat aproape zece ani, dar datele tot mai precise ale lui Proust au învins. Unii compuși solizi, numiți <b>nestoechiometrici</b>, pot avea mici variații (de exemplu, anumiți oxizi de fier): nu sunt excepții de la lege, ci cazuri în care structura cristalină are „goluri”.</p>`
    },
    {
      type: "example",
      title: "Aplicăm legea lui Proust",
      html: `<p>Oxidul de calciu se formează din calciu și oxigen în raport de masă <b>5 : 2</b> (adică 5 g de Ca la 2 g de O). Câtă masă de oxigen este necesară pentru 35 g de calciu?</p>
<ol>
<li>Proporția: 5 : 2 = 35 : x</li>
<li>x = 2 × 35 / 5 = <b>14 g de oxigen</b>.</li>
<li>Se formează 35 + 14 = 49 g de oxid de calciu (conservarea masei).</li>
</ol>`
    },
    {
      type: "svg",
      title: "Raportul 1 : 8 în apă",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="320" y="26" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Apă din surse diferite: mereu 1 parte de H la 8 de O</text>
<line x1="30" y1="240" x2="610" y2="240" stroke="#475569" stroke-width="2"/>
<rect x="60" y="232" width="34" height="8" fill="#9ca3af" stroke="#475569"/><rect x="94" y="176" width="34" height="64" fill="#ef4444" stroke="#475569"/>
<text x="94" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Râu</text><text x="94" y="282" font-size="14" text-anchor="middle" fill="#1f2937">1 g H + 8 g O</text>
<rect x="240" y="224" width="34" height="16" fill="#9ca3af" stroke="#475569"/><rect x="274" y="112" width="34" height="128" fill="#ef4444" stroke="#475569"/>
<text x="274" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Ploaie</text><text x="274" y="282" font-size="14" text-anchor="middle" fill="#1f2937">2 g H + 16 g O</text>
<rect x="420" y="216" width="34" height="24" fill="#9ca3af" stroke="#475569"/><rect x="454" y="48" width="34" height="192" fill="#ef4444" stroke="#475569"/>
<text x="454" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Mare</text><text x="454" y="282" font-size="14" text-anchor="middle" fill="#1f2937">3 g H + 24 g O</text>
<rect x="530" y="60" width="16" height="16" fill="#9ca3af" stroke="#475569"/><text x="552" y="74" font-size="14" fill="#1f2937">hidrogen</text>
<rect x="530" y="86" width="16" height="16" fill="#ef4444" stroke="#475569"/><text x="552" y="100" font-size="14" fill="#1f2937">oxigen</text>
</svg>`,
      caption: "Bara roșie (oxigenul) este întotdeauna de 8 ori mai înaltă decât cea gri (hidrogenul), pentru fiecare probă de apă."
    },
    {
      type: "text",
      title: "Legea proporțiilor multiple (Dalton, 1803)",
      html: `<p>Englezul John <b>Dalton</b> (1766–1844), profesor și meteorolog, s-a întrebat ce se întâmplă atunci când <b>două elemente formează mai mulți compuși diferiți</b>. Exemplu: carbonul și oxigenul formează monoxidul (CO) și dioxidul (CO₂).</p>
<table>
<tr><th>Compus</th><th>g de O la 12 g de C</th></tr>
<tr><td>CO (monoxid de carbon)</td><td>16 g</td></tr>
<tr><td>CO₂ (dioxid de carbon)</td><td>32 g</td></tr>
</table>
<p>Raportul dintre masele de oxigen care se combină cu <b>aceeași masă</b> de carbon este 16 : 32 = <b>1 : 2</b>, un raport de <b>numere întregi mici</b>. Aceasta este legea:</p>
<p><b>Când două elemente se combină în mai multe moduri și formează compuși diferiți, masele unuia care se combină cu o masă fixă din celălalt se află în rapoarte exprimabile prin numere întregi mici.</b></p>
<p>Alt exemplu: azotul și oxigenul formează N₂O, NO, N₂O₃, NO₂, N₂O₅. Masele de oxigen la 28 g de azot sunt 16, 32, 48, 64 și 80 g: raport 1 : 2 : 3 : 4 : 5.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: cele trei legi",
      questions: [
        { type: "mc", q: "Care lege afirmă că, într-o reacție dintr-un sistem închis, masa se conservă?", options: ["Proust", "Lavoisier", "Dalton"], answer: 1, explain: "Este legea conservării masei a lui Lavoisier (1789)." },
        { type: "num", q: "Apa conține H și O în raport de masă 1 : 8. Câte grame de oxigen se combină cu 5 g de hidrogen?", answer: 40, unit: "g", explain: "5 × 8 = 40 g." },
        { type: "tf", q: "Conform lui Dalton, dacă două elemente formează compuși diferiți, rapoartele dintre masele unui element care se combină cu o cantitate fixă din celălalt sunt numere întregi mici.", answer: true, explain: "Este enunțul legii proporțiilor multiple." }
      ]
    },
    {
      type: "text",
      title: "Teoria atomică a lui Dalton (1808)",
      html: `<p>Cele trei legi sunt reguli experimentale: <b>descriu</b>, dar nu <b>explică</b>. În 1808 Dalton a propus (în <i>A New System of Chemical Philosophy</i>) un model capabil să le explice pe toate. Ideea de atom era veche (<b>Democrit</b> și Leucip, secolul al V-lea î.Hr.), dar era o speculație filosofică; Dalton a transformat-o într-o teorie care prevedea numere. Postulatele lui:</p>
<ol>
<li>Materia este formată din <b>atomi</b> foarte mici și indivizibili.</li>
<li>Atomii aceluiași element sunt <b>toți la fel</b> (aceeași masă, aceleași proprietăți); atomii unor elemente diferite sunt diferiți.</li>
<li>Atomii <b>nu se creează și nu se distrug</b> în reacții: se reorganizează.</li>
<li>Compușii se formează prin unirea atomilor unor elemente diferite în <b>rapoarte simple și fixe</b> (un atom de A cu unul, doi, trei atomi de B).</li>
</ol>
<p>Cum explică ele legile:</p>
<ul>
<li><b>Lavoisier</b>: dacă atomii nu se creează și nu se distrug, masa totală nu poate să se schimbe.</li>
<li><b>Proust</b>: dacă fiecare moleculă de apă are mereu aceeași structură (2 H + 1 O), raportul de masă dintre H și O este mereu același.</li>
<li><b>Dalton (proporții multiple)</b>: CO și CO₂ diferă prin 1 atom de O față de 2 atomi de O la fiecare atom de C: de aici raportul 1 : 2.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Un atom în 3D",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Na"] },
      caption: "Modelul lui Dalton vedea atomii ca sfere pline și indivizibile. Astăzi știm că au un nucleu și electroni în jurul lui: dar esența ideii sale rămâne valabilă pentru chimie."
    },
    {
      type: "text",
      title: "Ce s-a corectat după Dalton",
      html: `<p>Teoria lui Dalton era o idee excelentă, cu câteva erori pe care știința de mai târziu le-a corectat:</p>
<ul>
<li><b>Atomi indivizibili?</b> Nu: în 1897 <b>J.J. Thomson</b> a descoperit electronul; în 1911 <b>Rutherford</b> a descoperit nucleul; neutronul a fost descoperit de <b>Chadwick</b> în 1932.</li>
<li><b>Atomi toți la fel?</b> Nu tocmai: <b>izotopii</b> aceluiași element au mase diferite (carbon-12 și carbon-14).</li>
<li><b>Formulele compușilor</b>: Dalton credea că apa este HO. În 1811 <b>Avogadro</b> a propus că gazele conțin același număr de molecule la volum, temperatură și presiune egale și că elementele gazoase sunt molecule diatomice (H₂, O₂); dar a fost ignorat timp de 50 de ani, până când <b>Cannizzaro</b>, la congresul de la Karlsruhe din 1860, i-a arătat valoarea. Din cercetările lui Gay-Lussac (1808) se știa că 2 volume de hidrogen și 1 de oxigen dau 2 de vapori: formula H₂O explică acest raport.</li>
</ul>
<p>Nu toți au acceptat atomul: încă în 1900, oameni de știință celebri (precum <b>Ostwald</b> și <b>Mach</b>) îl considerau doar un instrument de calcul. Mișcarea browniană, explicată de Einstein în 1905 și confirmată de <b>Perrin</b> în 1908, i-a convins chiar și pe sceptici.</p>`
    },
    {
      type: "text",
      title: "Atomi, elemente, molecule și compuși",
      html: `<p>Un <b>element</b> este format din atomi cu același <b>număr atomic</b> Z (numărul de protoni). Elementele cunoscute sunt 118 și sunt ordonate în <b>tabelul periodic</b> al lui <b>Mendeleev</b> (1869), care a lăsat casete goale pentru elemente încă nedescoperite și le-a prezis proprietățile: galiul (1875) și germaniul (1886) le-au confirmat.</p>
<p>O <b>moleculă</b> este un grup de atomi legați: O₂, H₂O, CO₂. Un <b>compus</b> conține atomi de elemente diferite.</p>
<p><b>Masa atomică</b> se măsoară în <b>unități atomice de masă</b> (u): 1 u este a douăsprezecea parte din masa unui atom de carbon-12, aproximativ 1,66 × 10⁻²⁷ kg. Hidrogenul are aproximativ 1 u, carbonul 12 u, oxigenul 16 u. <b>Masa moleculară</b> a moleculei de apă este 2 × 1 + 16 = 18 u: regăsești raportul 2 : 16 = 1 : 8 al lui Proust!</p>`
    },
    {
      type: "widget",
      title: "Tabelul periodic",
      widget: "periodicTable",
      options: {},
      caption: "Atinge elementele: simbol, număr atomic, masă și familie. Găsește H, C, N, O, Na, Cl."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege legile ponderale",
      intro: "Dacă rapoartele de masă te încurcă, încearcă să gândești în termeni de atomi sau prin analogii.",
      tabs: [
        {
          label: "🧱 Cu piese de construcție",
          html: `<p>Imaginează-ți atomii de H ca pe niște piese albe de 1 g și atomii de O ca pe niște piese roșii de 16 g. O moleculă de apă înseamnă 2 piese albe + 1 roșie: 2 g + 16 g = 18 g, în raport 1 : 8. Oricâte molecule ar fi, fiecare „construcție” are același raport: iată legea lui Proust. Iar dacă faci construcții „duble” (H₂O₂, apa oxigenată: 2 piese albe + 2 roșii), raportul de O la aceeași masă de H se dublează: legea proporțiilor multiple (H₂O: 16 g de O la 2 g de H; H₂O₂: 32 g de O la 2 g de H, deci 1 : 2).</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🥪 Sandvișul",
          html: `<p>Un sandviș cere mereu 2 felii de pâine și 1 de șuncă: dacă ai 10 felii de pâine și 10 de șuncă, faci 5 sandvișuri și îți rămân 5 felii de șuncă. La fel, 2 g de hidrogen și 8 g de oxigen nu reacționează complet: reacționează 1 g de H cu 8 g de O și 1 g de H rămâne. Rapoartele fixe nu sunt o regulă inventată de oameni, ci consecința faptului că moleculele sunt „sandvișuri” de atomi.</p>`
        },
        {
          label: "🗂️ Puțină istorie",
          html: `<p>Trei idei în zece ani: <b>1789</b> (Lavoisier: masa se conservă), <b>1799</b> (Proust: rapoartele sunt fixe), <b>1803–1808</b> (Dalton: atomii explică totul). Fiecare a cerut instrumente mai precise: balanța lui Lavoisier, construită cu mare precizie pentru acea vreme, permitea să se observe diferențe de câteva miligrame. Așa, pas cu pas, chimia a trecut de la alchimie la știința exactă.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lavoisier și sfârșitul unui geniu",
      html: `<p>Lavoisier nu a fost doar chimist: era și funcționar al <b>Ferme Générale</b>, organismul privat care încasa impozitele pentru monarhia franceză. În timpul Revoluției a fost arestat și ghilotinat la 8 mai 1794. Se spune că matematicianul Lagrange ar fi comentat: „A fost nevoie de o clipă ca să taie acel cap, și poate nu vor ajunge o sută de ani ca să se producă unul la fel”. Soția sa, <b>Marie-Anne Paulze</b>, i-a fost colaboratoare: desena instrumentele, traducea texte englezești și a îngrijit publicarea operelor lui.</p>`
    },
    {
      type: "curiosity",
      title: "Câți atomi sunt într-o picătură de apă?",
      html: `<p>O picătură de apă de aproximativ 0,05 g conține circa <b>1,7 × 10²¹ molecule</b>, adică mai mult de o mie de miliarde de miliarde. Un atom are un diametru de ordinul 10⁻¹⁰ m (o zecime de nanometru): într-un fir de păr (circa 70 µm) încap, înșirați, în jur de 700 000. De aceea, ca să numere atomii, chimiștii folosesc <b>molul</b>: 1 mol conține 6,022 × 10²³ particule (numărul lui Avogadro) și are o masă în grame egală cu masa moleculară: 18 g de apă reprezintă un mol de molecule.</p>`
    },
    {
      type: "conceptMap",
      title: "Harta teoriei atomice: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "lav", label: "Conservarea masei", x: 15, y: 8, color: "#3b82f6", html: "Într-un sistem închis masa nu se schimbă.", why: "<b>Lavoisier</b> (1789) a obținut-o cântărind cu precizie reactanții și produșii în vase închise și a distrus astfel teoria flogistonului: arderea adaugă oxigen, nu scoate flogiston." },
        { id: "prou", label: "Proporții definite", x: 50, y: 8, color: "#22c55e", html: "Un compus are mereu aceeași compoziție în masă.", why: "<b>Proust</b> (1799) a demonstrat-o prin analize repetate pe carbonat de cupru și pe alți compuși naturali și artificiali, răspunzând obiecțiilor lui Berthollet." },
        { id: "mult", label: "Proporții multiple", x: 85, y: 8, color: "#f59e0b", html: "Rapoarte de numere întregi mici.", why: "<b>Dalton</b> (1803) a dedus-o din datele despre compușii carbonului cu oxigenul și ai azotului cu oxigenul: tocmai existența numerelor întregi a fost indiciul că materia este „granulară”." },
        { id: "dalton", label: "Teoria atomică a lui Dalton", x: 50, y: 38, color: "#a855f7", html: "Atomi indivizibili, identici pentru fiecare element, care se reorganizează.", why: "Dalton a reluat ideea de atom a lui Democrit și Leucip și a transformat-o în 1808 într-o teorie cantitativă, asociind fiecărui element o masă relativă (hidrogenul = 1)." },
        { id: "avog", label: "Avogadro și Cannizzaro", x: 20, y: 62, color: "#06b6d4", html: "Molecule și volume ale gazelor.", why: "Dalton nu făcea deosebire între atomi și molecule și dădea formule greșite (apa = HO). <b>Avogadro</b> (1811) a rezolvat problema, dar a fost ascultat abia după Cannizzaro (Karlsruhe, 1860)." },
        { id: "elettrone", label: "Electron, nucleu, neutron", x: 50, y: 70, color: "#ef4444", html: "Atomul are o structură internă.", why: "Thomson (1897), Rutherford (1911), Chadwick (1932): experimentele cu raze catodice și cu difuzia particulelor alfa au arătat că atomul nu este indivizibil." },
        { id: "tavola", label: "Tabelul periodic", x: 82, y: 62, color: "#14b8a6", html: "Elementele ordonate după numărul atomic.", why: "<b>Mendeleev</b> (1869) a ordonat elementele după masa atomică și proprietăți, lăsând casete goale; <b>Moseley</b> (1913) a arătat că adevărata ordine este cea a numărului atomic." },
        { id: "mole", label: "Molul", x: 50, y: 92, color: "#eab308", html: "Unitate pentru cantitatea de substanță.", why: "Permite trecerea de la scara atomilor individuali (u) la cea a gramelor, pentru că 1 mol conține același număr de particule (6,022 × 10²³) pentru orice substanță." }
      ],
      edges: [
        ["lav", "dalton", "explicată de"],
        ["prou", "dalton", "explicată de"],
        ["mult", "dalton", "explicată de"],
        ["dalton", "avog", "corectată de"],
        ["dalton", "elettrone", "depășită de"],
        ["avog", "tavola", "duce la"],
        ["elettrone", "tavola", "explică"],
        ["avog", "mole", "duce la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: atomii",
      questions: [
        { type: "mc", q: "Care postulat al lui Dalton a fost corectat de descoperirile ulterioare?", options: ["Atomii sunt indivizibili", "Materia este alcătuită din atomi", "Atomii se reorganizează în reacții"], answer: 0, explain: "Atomul are o structură internă: nucleu (protoni și neutroni) și electroni." },
        { type: "num", q: "Care este masa moleculară a apei în u? (H = 1, O = 16)", answer: 18, unit: "u", explain: "2 × 1 + 16 = 18 u." },
        { type: "tf", q: "Dalton credea că formula apei este H₂O.", answer: false, explain: "Credea că este HO, pentru că nu cunoștea natura diatomică a hidrogenului și a oxigenului gazos (Avogadro, 1811)." }
      ]
    }
  ],
  glossary: [
    { t: "Legea lui Lavoisier", d: "Într-o reacție chimică dintr-un sistem închis, masa reactanților este egală cu cea a produșilor." },
    { t: "Legea lui Proust", d: "Într-un compus, elementele sunt întotdeauna combinate în același raport de masă." },
    { t: "Legea lui Dalton", d: "Masele unui element care se combină cu o masă fixă din altul se află în raport de numere întregi mici." },
    { t: "Atom", d: "Cea mai mică particulă a unui element care îi păstrează proprietățile chimice." },
    { t: "Moleculă", d: "Ansamblu de doi sau mai mulți atomi legați." },
    { t: "Element", d: "Substanță pură formată din atomi având toți același număr atomic." },
    { t: "Compus", d: "Substanță pură formată din atomi de elemente diferite într-un raport fix." },
    { t: "Număr atomic (Z)", d: "Numărul de protoni din nucleu: identifică elementul." },
    { t: "Unitate atomică de masă (u)", d: "A douăsprezecea parte din masa unui atom de carbon-12." },
    { t: "Izotopi", d: "Atomi ai aceluiași element cu număr diferit de neutroni." },
    { t: "Mol", d: "Cantitatea de substanță care conține 6,022 × 10²³ particule." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cine a enunțat legea conservării masei?", options: ["Dalton", "Lavoisier", "Proust"], answer: 1, explain: "Lavoisier, în Traité élémentaire de chimie (1789)." },
      { type: "num", q: "10 g de magneziu ard și formează 16,6 g de oxid de magneziu. Câte grame de oxigen au reacționat?", answer: 6.6, tol: 0.05, unit: "g", explain: "16,6 − 10 = 6,6 g, conform conservării masei." },
      { type: "num", q: "Raportul de masă H : O în apă este 1 : 8. Câtă masă de hidrogen se află în 45 g de apă?", answer: 5, unit: "g", explain: "O parte din 9 este hidrogen: 45/9 = 5 g." },
      { type: "mc", q: "Care lege explică de ce CO și CO₂ conțin oxigen în raport 1 : 2 la aceeași masă de carbon?", options: ["Conservarea masei", "Proporțiile definite", "Proporțiile multiple"], answer: 2, explain: "Este legea proporțiilor multiple a lui Dalton." },
      { type: "tf", q: "Conform lui Dalton, atomii unui element sunt toți identici între ei.", answer: true, explain: "Era un postulat al lui; izotopii l-au nuanțat apoi." },
      { type: "mc", q: "Cine a descoperit electronul în 1897?", options: ["J.J. Thomson", "Rutherford", "Mendeleev"], answer: 0, explain: "Joseph John Thomson, studiind razele catodice." },
      { type: "text", q: "Cum se numește unitatea care conține 6,022 × 10²³ particule?", answer: ["mol", "molul", "un mol"], explain: "Un mol conține numărul lui Avogadro de particule." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Conservarea masei (Lavoisier)", "Proporții definite (Proust)", "Teoria atomică (Dalton)", "Congresul de la Karlsruhe (Cannizzaro)"], explain: "1789, 1799, 1808, 1860." },
      { type: "mc", q: "Ce a demonstrat Rutherford în 1911?", options: ["Că atomul are un nucleu mic și dens", "Că atomii nu există", "Că electronii sunt unde"], answer: 0, explain: "Prin experimentul de difuzie a particulelor alfa pe o folie de aur." },
      { type: "num", q: "Se pun să reacționeze 4 g de hidrogen cu 24 g de oxigen (raport 1 : 8). Câte grame de hidrogen rămân în exces?", answer: 1, unit: "g", explain: "24 g de O reacționează cu 3 g de H: rămâne în exces 4 − 3 = 1 g." }
    ]
  }
});
