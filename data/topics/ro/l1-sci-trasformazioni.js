TOPIC('ro', {
  id: "l1-sci-trasformazioni",
  title: "Transformări fizice și chimice",
  intro: "Un cub de gheață care se topește și un cui care ruginește sunt două schimbări, dar profund diferite: în prima substanța rămâne apă, în a doua fierul se transformă în ceva nou. A înțelege această diferență este primul pas pentru a face chimie. În această lecție studiem <b>schimbările de stare</b>, citim o <b>curbă de încălzire</b> și descoperim cum se recunoaște și cum se scrie o <b>reacție chimică</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Transformări fizice și chimice",
      html: `<p>O <b>transformare fizică</b> schimbă aspectul sau starea materiei, dar <b>nu</b> natura substanțelor: compoziția particulelor rămâne aceeași. Exemple: topirea gheții, evaporarea apei, dizolvarea zahărului în ceai, spargerea unui pahar. Adesea sunt <b>reversibile</b>.</p>
<p>Într-o <b>transformare chimică</b> (sau <b>reacție chimică</b>) substanțele inițiale, <b>reactanții</b>, se transformă în substanțe noi, <b>produșii</b>, cu proprietăți diferite. Atomii nu sunt nici creați, nici distruși: se reorganizează, rupând și formând legături. Exemple: arderea metanului, rugina, fierberea unui ou, fotosinteza.</p>
<p>Cum se recunoaște o reacție chimică? Adesea (nu întotdeauna) se observă:</p>
<ul>
<li>degajare de <b>gaz</b> (bule, efervescență);</li>
<li>formarea unui <b>precipitat</b> (solid care apare într-o soluție limpede);</li>
<li><b>schimbarea culorii</b> care nu se datorează unei simple diluări;</li>
<li>producerea sau absorbția de <b>căldură</b> sau de <b>lumină</b>.</li>
</ul>
<p>Acestea sunt doar indicii: apa care fierbe produce bule și absoarbe căldură, dar este o transformare fizică. Dovada decisivă este că după aceea există <b>substanțe noi</b>.</p>`
    },
    {
      type: "widget",
      title: "Fizică sau chimică?",
      widget: "classify",
      options: { groups: ["Transformare fizică", "Transformare chimică"], items: [
        ["Untul se topește în tigaie", 0],
        ["Un cui de fier ruginește", 1],
        ["Laptele devine iaurt", 1],
        ["Apa fierbe în oală", 0],
        ["O lumânare arde", 1],
        ["Se taie o foaie de hârtie", 0],
        ["Un măr mușcat se brunifică", 1],
        ["Sarea se dizolvă în apă", 0],
        ["O tabletă efervescentă în pahar", 1],
        ["Naftalina sublimează", 0]
      ] },
      caption: "La lumânare ceara se topește (fizică), dar apoi arde (chimică): aceeași scenă poate conține amândouă."
    },
    {
      type: "text",
      title: "Schimbările de stare",
      html: `<p>Schimbarea stării de agregare a unei substanțe este o transformare fizică. Fiecare trecere are un nume:</p>
<table>
<tr><th>Trecerea</th><th>Din → în</th><th>Căldura</th></tr>
<tr><td><b>Topirea</b></td><td>solid → lichid</td><td>absorbită</td></tr>
<tr><td><b>Solidificarea</b></td><td>lichid → solid</td><td>cedată</td></tr>
<tr><td><b>Evaporarea</b> / <b>fierberea</b></td><td>lichid → gaz</td><td>absorbită</td></tr>
<tr><td><b>Condensarea</b></td><td>gaz → lichid</td><td>cedată</td></tr>
<tr><td><b>Sublimarea</b></td><td>solid → gaz</td><td>absorbită</td></tr>
<tr><td><b>Desublimarea</b> (sau depunerea)</td><td>gaz → solid</td><td>cedată</td></tr>
</table>
<p><b>Evaporarea</b> are loc doar la suprafață și la orice temperatură (rufele se usucă și la 15 °C); <b>fierberea</b> are loc în tot lichidul, când presiunea vaporilor egalează presiunea exterioară, la o temperatură precisă. De aceea la munte, unde presiunea este mai mică, apa fierbe sub 100 °C (la aproximativ 3000 m în jur de 90 °C), iar pastele se fierb mai încet. În oala sub presiune se întâmplă invers.</p>`
    },
    {
      type: "svg",
      title: "Curba de încălzire a apei",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<line x1="70" y1="20" x2="70" y2="270" stroke="#1f2937" stroke-width="2"/>
<line x1="70" y1="270" x2="620" y2="270" stroke="#1f2937" stroke-width="2"/>
<text x="20" y="150" font-size="15" fill="#1f2937" transform="rotate(-90 20 150)" text-anchor="middle">Temperatura (°C)</text>
<text x="350" y="305" font-size="15" fill="#1f2937" text-anchor="middle">Căldura furnizată în timp</text>
<line x1="62" y1="200" x2="70" y2="200" stroke="#1f2937" stroke-width="2"/><text x="56" y="205" font-size="14" text-anchor="end" fill="#1f2937">0</text>
<line x1="62" y1="70" x2="70" y2="70" stroke="#1f2937" stroke-width="2"/><text x="56" y="75" font-size="14" text-anchor="end" fill="#1f2937">100</text>
<line x1="70" y1="200" x2="620" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<line x1="70" y1="70" x2="620" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<polyline points="70,250 150,200 250,200 400,70 520,70 600,25" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="110" y="240" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">gheață</text>
<text x="200" y="185" font-size="14" fill="#0369a1" font-weight="bold" text-anchor="middle">topire</text>
<text x="330" y="150" font-size="14" fill="#15803d" font-weight="bold" text-anchor="middle">apă lichidă</text>
<text x="460" y="55" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle">fierbere</text>
<text x="570" y="70" font-size="14" fill="#b45309" font-weight="bold" text-anchor="middle" dy="30">vapori</text>
</svg>`,
      caption: "În cele două porțiuni orizontale (topirea la 0 °C și fierberea la 100 °C) temperatura nu se schimbă: căldura furnizată servește la ruperea legăturilor dintre molecule, nu la accelerarea lor."
    },
    {
      type: "text",
      title: "Cum citim curba de încălzire",
      html: `<p>Dacă încălzești cu o flacără constantă un bloc de gheață și măsori temperatura în timp, obții o curbă pe porțiuni:</p>
<ol>
<li><b>Porțiunile înclinate</b>: căldura mărește energia cinetică a particulelor și deci temperatura. Cât de multă căldură este necesară depinde de <b>căldura specifică</b> (apă lichidă: 4,18 J/(g·°C); gheață aproximativ 2,1 J/(g·°C)).</li>
<li><b>Palierele (porțiunile orizontale)</b>: în timpul schimbării de stare temperatura rămâne constantă. Căldura furnizată servește la învingerea forțelor dintre particule: este <b>căldura latentă</b>.</li>
</ol>
<p>Pentru apă: căldura latentă de topire ≈ <b>334 J/g</b>; căldura latentă de vaporizare ≈ <b>2260 J/g</b>. Evaporarea apei cere de aproape șapte ori energia necesară pentru a o topi.</p>
<p>Formula căldurii schimbate fără schimbare de stare este <b>Q = m · c · ΔT</b>; cu schimbare de stare este <b>Q = m · L</b>.</p>`
    },
    {
      type: "example",
      title: "Cât de multă căldură este necesară?",
      html: `<p>Cât de multă căldură este necesară pentru a încălzi <b>200 g de apă de la 20 °C la 70 °C</b>?</p>
<ol>
<li>Q = m · c · ΔT = 200 g × 4,18 J/(g·°C) × (70 − 20) °C</li>
<li>Q = 200 × 4,18 × 50 = <b>41 800 J ≈ 41,8 kJ</b>.</li>
</ol>
<p>Acum: cât pentru a evapora 100 g de apă aflată deja la 100 °C? Q = m · L = 100 × 2260 = <b>226 000 J</b>. De aceea transpirația este un excelent «aer condiționat»: evaporându-se, ia mult căldură din corp.</p>`
    },
    {
      type: "curiosity",
      title: "De ce topește sarea gheața de pe drumuri",
      html: `<p>O soluție de apă și sare îngheață la o temperatură <b>mai joasă</b> de 0 °C: se numește <b>scădere crioscopică</b>. O soluție saturată de NaCl îngheață la aproximativ −21 °C. Presărarea de sare pe drumurile înghețate nu încălzește gheața: îi scade punctul de topire, și de fapt la temperaturi mult sub −10 °C sarea devine puțin eficientă. La fel, într-un amestec de apă și sare fierberea are loc puțin peste 100 °C (<b>creștere ebulioscopică</b>).</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: stări și curbe",
      questions: [
        { type: "mc", q: "Trecerea din starea solidă în starea gazoasă se numește…", options: ["topire", "sublimare", "condensare"], answer: 1, explain: "Sublimare: are loc, de exemplu, la naftalină și la gheața carbonică (CO₂ solid)." },
        { type: "tf", q: "În timpul topirii gheții temperatura crește.", answer: false, explain: "Rămâne la 0 °C până când toată gheața este topită: căldura servește la schimbarea stării." },
        { type: "num", q: "Cât de multă căldură este necesară pentru a topi 50 g de gheață la 0 °C (L = 334 J/g)?", answer: 16700, unit: "J", explain: "Q = m · L = 50 × 334 = 16 700 J." }
      ]
    },
    {
      type: "text",
      title: "Reacția chimică și ecuația ei",
      html: `<p>O reacție chimică se descrie printr-o <b>ecuație chimică</b>: în stânga <b>reactanții</b>, în dreapta <b>produșii</b>, legați printr-o săgeată. De exemplu arderea metanului:</p>
<p><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>
<p>Numerele din fața formulelor sunt <b>coeficienții stoechiometrici</b>; cele din partea de jos (indicii) arată câți atomi sunt într-o moleculă și nu pot fi schimbate. Ecuația trebuie să fie <b>echilibrată</b>: atomii fiecărui element trebuie să fie în număr egal în stânga și în dreapta, pentru că într-o reacție masa se conservă (legea lui Lavoisier, pe care o vom vedea).</p>
<p>Verificare pentru metan: în stânga 1 C, 4 H, 4 O; în dreapta 1 C, 4 H (2×2), 4 O (2 + 2×1). Echilibrată.</p>
<p>Cum se echilibrează, pas cu pas:</p>
<ol>
<li>scrie formulele corecte ale reactanților și ale produșilor;</li>
<li>numără atomii fiecărui element dintr-o parte și din cealaltă;</li>
<li>adaugă coeficienți în fața formulelor (nu schimba niciodată indicii), începând cu elementele care apar în mai puține substanțe și lăsând la urmă oxigenul sau hidrogenul;</li>
<li>numără din nou și simplifică coeficienții.</li>
</ol>`
    },
    {
      type: "example",
      title: "Echilibrarea sintezei apei",
      html: `<p>Reacția brută: <b>H₂ + O₂ → H₂O</b>. Atomii de O nu sunt egali (2 față de 1).</p>
<ol>
<li>Pun 2 în fața lui H₂O: H₂ + O₂ → 2 H₂O. Acum O: 2 = 2 ✔️ dar H: 2 în stânga, 4 în dreapta.</li>
<li>Pun 2 în fața lui H₂: <b>2 H₂ + O₂ → 2 H₂O</b>. H: 4 = 4 ✔️.</li>
</ol>
<p>Se citește: două molecule de hidrogen reacționează cu una de oxigen și dau două molecule de apă. Raportul 2 : 1 : 2 este valabil și pentru volumele gazelor (în aceleași condiții): idee care va duce la teoria lui Avogadro.</p>`
    },
    {
      type: "widget",
      title: "Laboratorul de chimie",
      widget: "chemLab",
      options: {},
      caption: "Alege reactanții, pune-i în pahar și observă reacția echilibrată, masa înainte și după și reactantul limitativ."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a privi o reacție",
      intro: "Dacă echilibrarea ți se pare un truc de algebră, încearcă s-o privești în aceste moduri.",
      tabs: [
        {
          label: "🧱 Piesele LEGO",
          html: `<p>Atomii sunt piese de construcție: o reacție nu le creează și nu le distruge, ci le <b>reasamblează</b>. Pentru a face 2 molecule de apă sunt necesare 4 piese H și 2 piese O. Dacă ai doar molecule de H₂ și O₂, trebuie să numeri piesele și să folosești un număr de «bucăți» care să dea același total înainte și după: acesta este tot rostul coeficienților.</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🍳 Rețeta de bucătărie",
          html: `<p>O ecuație chimică este o <b>rețetă</b>: «1 ou + 100 g de făină → 1 clătită» se poate dubla la 2 ouă și 200 g de făină. Și CH₄ + 2 O₂ → CO₂ + 2 H₂O spune că pentru fiecare moleculă de metan sunt necesare două molecule de oxigen; pentru 10 molecule de metan sunt necesare 20. <b>Reactantul limitativ</b> este ingredientul care se termină primul și oprește producția.</p>`
        },
        {
          label: "⚖️ Balanța",
          html: `<p>Ca o ecuație algebrică, și o ecuație chimică este o balanță: ceea ce ai în stânga trebuie să cântărească tot atât cât ceea ce ai în dreapta, atom cu atom. Este aceeași idee, în formă intuitivă, care a dus la descoperirea conservării masei: dacă cântărirea unei reacții «nu iese», ai uitat să cântărești un gaz.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Reacții exoterme și endoterme",
      html: `<p>Orice reacție schimbă energie cu mediul, de obicei sub formă de căldură:</p>
<ul>
<li><b>exotermă</b>: eliberează căldură (arderi, explozii, neutralizări; oxidarea fierului din pungile încălzitoare pentru mâini);</li>
<li><b>endotermă</b>: absoarbe căldură (fotosinteza, fierberea unui ou, «gheața instantanee» din trusele de prim ajutor).</li>
</ul>
<p>Pentru a porni, multe reacții au nevoie de o mică cantitate de energie, <b>energia de activare</b>: un chibrit trebuie frecat, dar apoi arderea continuă singură. Un <b>catalizator</b> scade energia de activare și accelerează reacția fără să se consume (precum catalizatorii din țevile de eșapament ale mașinilor sau enzimele din corpul nostru).</p>`
    },
    {
      type: "curiosity",
      title: "Gheața carbonică și punctul triplu",
      html: `<p>Așa-numita <b>gheață carbonică</b> este dioxid de carbon solid: la presiune atmosferică nu se topește, <b>sublimează</b> direct la −78,5 °C, fără să lase bălți (de aceea este folosită pentru păstrarea înghețatei și pentru ceața de pe scene). CO₂ poate fi lichid doar peste aproximativ 5,2 atmosfere. Fiecare substanță are un <b>punct triplu</b>, o combinație unică de temperatură și presiune în care solidul, lichidul și gazul coexistă: pentru apă este la 0,01 °C și a fost folosit până în 2019 pentru a defini kelvinul.</p>`
    },
    {
      type: "remember",
      title: "Recapitulare fulger",
      html: `<ul>
<li>Fizică: se schimbă <b>starea sau forma</b>; substanțele rămân aceleași.</li>
<li>Chimică: apar <b>substanțe noi</b>; atomii se reorganizează.</li>
<li>În timpul schimbărilor de stare ale unei substanțe pure, <b>temperatura este constantă</b>.</li>
<li>Q = m · c · ΔT (încălzire), Q = m · L (schimbare de stare).</li>
<li>O ecuație chimică trebuie să fie <b>echilibrată</b>.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Harta transformărilor: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "trasf", label: "Transformări", x: 50, y: 6, color: "#a855f7", html: "Schimbări ale materiei: fizice sau chimice.", why: "Alchimiștii credeau că orice schimbare transformă substanța însăși; abia cu chimia modernă (Lavoisier, 1780-90) s-a înțeles că trebuie să deosebim ceea ce schimbă starea de ceea ce creează substanțe noi." },
        { id: "fisica", label: "Fizice", x: 22, y: 30, color: "#3b82f6", html: "Schimbări de stare, dizolvări, ruperi.", why: "Nu schimbă moleculele, ci doar dispunerea și mișcarea lor: de aceea sunt în general reversibile printr-o schimbare de temperatură sau de presiune." },
        { id: "chimica", label: "Chimice (reacții)", x: 78, y: 30, color: "#ef4444", html: "Reactanți → produși.", why: "Se rup legăturile reactanților și se formează altele noi. În 1808, <b>Dalton</b> a explicat că reacțiile sunt o redistribuire de atomi, care rămân aceiași: de aici provine echilibrarea." },
        { id: "stato", label: "Schimbări de stare", x: 10, y: 58, color: "#0ea5e9", html: "Topire, evaporare, sublimare…", why: "Depind de temperatură și de presiune: diagrama de fază a unei substanțe arată regiunile în care este solidă, lichidă sau gazoasă și <b>punctul triplu</b> în care coexistă (apă: 0,01 °C și aproximativ 611 Pa)." },
        { id: "latente", label: "Căldura latentă", x: 30, y: 82, color: "#f59e0b", html: "Căldură schimbată fără variația temperaturii.", why: "A descoperit-o scoțianul <b>Joseph Black</b> pe la 1760: încălzind gheața care se topește, termometrul nu se mișca, dar căldura era totuși absorbită, iar el a numit-o «căldură ascunsă»." },
        { id: "equazione", label: "Ecuația chimică", x: 70, y: 58, color: "#22c55e", html: "Descrie reactanții și produșii cu coeficienți.", why: "Simbolismul formulelor precum H₂O a fost pus la punct de <b>Berzelius</b> (1813-14), care a introdus literele ca simboluri ale elementelor." },
        { id: "bilancio", label: "Echilibrarea", x: 70, y: 82, color: "#14b8a6", html: "Același număr de atomi înainte și după.", why: "Consecință directă a <b>conservării masei</b> a lui Lavoisier (1789): într-un sistem închis masa totală nu se schimbă." },
        { id: "energia", label: "Energia reacției", x: 92, y: 80, color: "#f97316", html: "Exotermă sau endotermă.", why: "Ruperea legăturilor cere energie, formarea lor eliberează energie: bilanțul dintre cele două determină dacă reacția încălzește sau răcește." }
      ],
      edges: [
        ["trasf", "fisica", "poate fi"],
        ["trasf", "chimica", "poate fi"],
        ["fisica", "stato", "exemplu"],
        ["stato", "latente", "cere"],
        ["chimica", "equazione", "se descrie prin"],
        ["equazione", "bilancio", "trebuie să aibă"],
        ["chimica", "energia", "schimbă"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: reacții",
      questions: [
        { type: "mc", q: "Într-o reacție chimică…", options: ["atomii se transformă în atomi ai altor elemente", "atomii se reorganizează formând substanțe noi", "masa totală scade"], answer: 1, explain: "Atomii se conservă; se schimbă legăturile dintre ei." },
        { type: "mc", q: "Care sunt coeficienții corecți: __ Al + __ O₂ → __ Al₂O₃ ?", options: ["2, 3, 1", "4, 3, 2", "2, 2, 2"], answer: 1, explain: "4 Al + 3 O₂ → 2 Al₂O₃: 4 Al și 6 O de fiecare parte." },
        { type: "tf", q: "Un catalizator se consumă în timpul reacției.", answer: false, explain: "Accelerează reacția scăzând energia de activare, dar la final se regăsește neschimbat." }
      ]
    }
  ],
  glossary: [
    { t: "Transformare fizică", d: "Schimbare care nu modifică natura substanțelor." },
    { t: "Reacție chimică", d: "Transformare în care din reactanți se formează produși diferiți." },
    { t: "Reactant", d: "Substanță care se consumă într-o reacție." },
    { t: "Produs de reacție", d: "Substanță care se formează într-o reacție." },
    { t: "Topire", d: "Trecerea din starea solidă în cea lichidă." },
    { t: "Sublimare", d: "Trecerea directă din starea solidă în cea gazoasă." },
    { t: "Căldură latentă", d: "Căldură schimbată în timpul unei schimbări de stare fără variația temperaturii." },
    { t: "Căldură specifică", d: "Energia necesară pentru a crește cu 1 °C temperatura unui gram de substanță." },
    { t: "Ecuație chimică", d: "Reprezentarea unei reacții prin formule și coeficienți." },
    { t: "Reacție exotermă", d: "Reacție care cedează căldură mediului." },
    { t: "Catalizator", d: "Substanță care accelerează o reacție fără să se consume." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre acestea este o transformare chimică?", options: ["Topirea gheții", "Arderea lemnului", "Evaporarea apei"], answer: 1, explain: "Din ardere se formează cenușă, dioxid de carbon și vapori: substanțe noi." },
      { type: "tf", q: "Evaporarea are loc doar la 100 °C.", answer: false, explain: "Evaporarea are loc la orice temperatură, de la suprafață; la 100 °C (la nivelul mării) are loc fierberea." },
      { type: "mc", q: "Cum se numește trecerea din starea gazoasă în starea solidă?", options: ["Desublimare", "Condensare", "Topire"], answer: 0, explain: "Este desublimarea (sau depunerea): bruma se formează astfel." },
      { type: "num", q: "Cât de multă căldură este necesară pentru a încălzi 100 g de apă cu 30 °C? (c = 4,18 J/g·°C)", answer: 12540, unit: "J", explain: "Q = 100 × 4,18 × 30 = 12 540 J." },
      { type: "mc", q: "Pe graficul de încălzire, porțiunile orizontale corespund…", options: ["unei creșteri de temperatură", "unei schimbări de stare", "unei reacții chimice"], answer: 1, explain: "Temperatura rămâne constantă în timpul schimbării de stare." },
      { type: "num", q: "În ecuația 2 H₂ + O₂ → 2 H₂O, câți atomi de hidrogen sunt în total în dreapta?", answer: 4, explain: "2 molecule × 2 atomi = 4." },
      { type: "tf", q: "Într-o reacție echilibrată, numărul de atomi ai fiecărui element este egal între reactanți și produși.", answer: true, explain: "Este conservarea masei." },
      { type: "mc", q: "O reacție care absoarbe căldură se numește…", options: ["exotermă", "endotermă", "catalitică"], answer: 1, explain: "Endotermă: ia căldură din mediu, care se răcește." },
      { type: "order", q: "Pune în ordine etapele apei când încălzești un cub de gheață de la −10 °C până la 120 °C.", items: ["Încălzirea gheții", "Topirea la 0 °C", "Încălzirea apei lichide", "Fierberea la 100 °C", "Încălzirea vaporilor"], explain: "Fiecare porțiune înclinată (încălzire) este urmată de un palier (schimbare de stare)." },
      { type: "text", q: "Cum se numește substanța care accelerează o reacție fără să se consume?", answer: ["catalizator", "catalizatorul"], explain: "Catalizatorii scad energia de activare; enzimele sunt catalizatori biologici." }
    ]
  }
});
