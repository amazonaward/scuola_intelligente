TOPIC('ro', {
  id: "p5-ita-testo-regolativo",
  title: "Textul regulativ",
  intro: "Rețete, instrucțiuni pentru montarea unui dulap, regulile unui joc, regulamentul clasei, chiar și Constituția: toate sunt <b>texte regulative</b>. Servesc ca să spună cuiva <b>ce să facă</b> și <b>cum să facă</b>, clar și în ordine.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Ce este un text regulativ",
      html: `<p><b>Textul regulativ</b> (<i>testo regolativo</i>, numit și <b>prescriptiv</b>) are scopul de a <b>ghida comportamentul</b> cititorului. Există două mari familii:</p>
<ul>
<li><b>Texte cu instrucțiuni</b>: explică <b>cum se face</b> ceva, pas cu pas. Rețete, instrucțiuni de montaj, manuale de utilizare, reguli pentru a face un zmeu.</li>
<li><b>Texte cu reguli și norme</b>: spun <b>cum să te porți</b> și ce este permis sau interzis. Regulamentul școlii, regulile unui joc sau ale unui sport, codul rutier, legile.</li>
</ul>
<p>Dacă instrucțiunile nu sunt clare, rezultatul nu iese: prăjitura nu crește, mobila se clatină, jocul se termină cu ceartă!</p>`
    },
    {
      type: "text",
      title: "Caracteristicile",
      html: `<ul>
<li><b>Titlu</b> clar care spune scopul: «Cum se prepară…», «Regulamentul…».</li>
<li><b>Materiale / ingrediente / participanți</b> enumerate la început, cu <b>cantitățile</b>.</li>
<li><b>Succesiune ordonată</b> de acțiuni: numere (1, 2, 3…), liste cu buline, conectori de timp (<i>mai întâi, apoi, după aceea, în sfârșit</i>).</li>
<li><b>Verbe</b> la <b>imperativ</b> («Amestecă», «Nu alerga») sau la <b>infinitiv</b> («A amesteca», «A nu alerga»); uneori forme impersonale («Trebuie…», «Este interzis…»).</li>
<li><b>Propoziții scurte</b>, o acțiune pe propoziție; <b>limbaj precis</b> (numere, măsuri, timpi: «coace 20 de minute la 180 °C»).</li>
<li>Adesea <b>imagini, desene, simboluri</b> care ajută la înțelegere.</li>
<li>La reguli: <b>interdicții, obligații, permisiuni</b> și uneori <b>sancțiuni</b> (ce se întâmplă dacă nu se respectă regula).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Anatomia unei rețete",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fff7ed"/>
<rect x="30" y="20" width="360" height="285" rx="12" fill="#ffffff" stroke="#fb923c" stroke-width="3"/>
<text x="210" y="52" font-size="22" text-anchor="middle" font-weight="bold" fill="#c2410c">Clătite ușoare 🥞</text>
<text x="50" y="84" font-size="16" font-weight="bold" fill="#1f2937">Ingrediente (4 persoane):</text>
<text x="60" y="106" font-size="15" fill="#1f2937">• 200 g de făină  • 2 ouă</text>
<text x="60" y="126" font-size="15" fill="#1f2937">• 250 ml de lapte  • 1 lingură de zahăr</text>
<text x="50" y="160" font-size="16" font-weight="bold" fill="#1f2937">Mod de preparare:</text>
<text x="60" y="184" font-size="15" fill="#1f2937">1. <tspan font-weight="bold" fill="#dc2626">Bate</tspan> ouăle cu zahărul.</text>
<text x="60" y="206" font-size="15" fill="#1f2937">2. <tspan font-weight="bold" fill="#dc2626">Adaugă</tspan> laptele și făina.</text>
<text x="60" y="228" font-size="15" fill="#1f2937">3. <tspan font-weight="bold" fill="#dc2626">Amestecă</tspan> până dispar cocoloașele.</text>
<text x="60" y="250" font-size="15" fill="#1f2937">4. Împreună cu un adult, <tspan font-weight="bold" fill="#dc2626">coace</tspan> câte o</text>
<text x="76" y="270" font-size="15" fill="#1f2937">polonic, 1 minut pe fiecare parte.</text>
<g font-size="15" fill="#1f2937">
<line x1="395" y1="52" x2="440" y2="52" stroke="#2563eb" stroke-width="3"/><text x="446" y="57" fill="#1d4ed8" font-weight="bold">titlu = scop</text>
<line x1="395" y1="110" x2="440" y2="110" stroke="#16a34a" stroke-width="3"/><text x="446" y="106" fill="#15803d" font-weight="bold">materiale</text><text x="446" y="124" fill="#15803d">cu cantități</text>
<line x1="395" y1="200" x2="440" y2="200" stroke="#9333ea" stroke-width="3"/><text x="446" y="196" fill="#7e22ce" font-weight="bold">pași numerotați</text><text x="446" y="214" fill="#7e22ce">în ordine</text>
<line x1="395" y1="250" x2="440" y2="250" stroke="#dc2626" stroke-width="3"/><text x="446" y="246" fill="#b91c1c" font-weight="bold">verbe la imperativ</text><text x="446" y="264" fill="#b91c1c">timpi și măsuri precise</text>
</g>
</svg>`,
      caption: "O rețetă bine făcută: titlu, materiale cu cantități, pași numerotați, verbe la imperativ, măsuri precise."
    },
    {
      type: "example",
      title: "Exemplu de instrucțiuni: bărcuța de hârtie",
      html: `<p><b>Material</b>: o foaie A4 dreptunghiulară.</p>
<ol>
<li><b>Îndoaie</b> foaia în două, de sus în jos.</li>
<li><b>Adu</b> cele două colțuri de sus spre centru, formând un triunghi.</li>
<li><b>Îndoaie</b> în sus fâșiile de jos, una în față și una în spate.</li>
<li><b>Deschide</b> figura de jos și <b>turtește-o</b> până formează un pătrat.</li>
<li><b>Îndoaie</b> în sus cele două vârfuri de jos, câte unul pe fiecare parte.</li>
<li><b>Deschide</b> din nou de jos și <b>turtește</b>; apoi <b>trage</b> ușor cele două vârfuri laterale în afară: iată bărcuța! ⛵</li>
</ol>
<p>Observă: fiecare pas începe cu un <b>verb la imperativ</b> și conține <b>o singură acțiune</b> principală.</p>`
    },
    {
      type: "example",
      title: "Exemplu de reguli: regulamentul bibliotecii clasei",
      html: `<ol>
<li>Fiecare elev poate împrumuta <b>o carte pe rând</b>.</li>
<li>Împrumutul durează <b>cel mult 15 zile</b>.</li>
<li>Este <b>obligatoriu</b> să-ți scrii numele și data în registru.</li>
<li>Este <b>interzis</b> să scrii sau să subliniezi în cărți.</li>
<li>Cine strică o carte <b>trebuie</b> s-o înlocuiască sau s-o repare cu ajutorul învățătoarei. <i>(sancțiune)</i></li>
</ol>
<p>Aici găsești expresiile tipice ale regulilor: <b>este obligatoriu, este interzis, se poate, trebuie, nu este permis</b> (în italiană: <i>è obbligatorio, è vietato, si può, si deve, non è permesso</i>).</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: recunoaște textul regulativ",
      questions: [
        { type: "mc", q: "Care dintre acestea este un text regulativ?", options: ["un basm", "regulamentul de minifotbal", "o poezie despre toamnă"], answer: 1, explain: "Regulamentul spune cum să te porți în timpul jocului." },
        { type: "mc", q: "Într-un text cu instrucțiuni, verbele sunt de obicei…", options: ["la perfectul simplu", "la imperativ sau la infinitiv", "la condițional"], answer: 1, explain: "Imperativ (amestecă) sau infinitiv (a amesteca): dau o poruncă sau o indicație." },
        { type: "tf", q: "Într-o rețetă ordinea pașilor nu este importantă.", answer: false, explain: "Dacă schimbi ordinea (de ex. coci înainte de a amesteca) rezultatul nu iese." }
      ]
    },
    {
      type: "text",
      title: "Cum se scrie unul, pas cu pas",
      html: `<ol>
<li><b>Hotărăște scopul</b> și cine va citi (un copil de 6 ani? un adult?).</li>
<li><b>Fă acțiunea</b> cu adevărat (sau imaginează-ți-o) și notează fiecare pas.</li>
<li><b>Enumeră</b> materialele și cantitățile.</li>
<li><b>Scrie pașii</b> în ordine, numerotați, cu un verb la imperativ sau la infinitiv la început. <b>Folosește mereu aceeași formă</b> (nu amesteca «amestecă» și «a amesteca»).</li>
<li><b>Adaugă</b> avertismente de siguranță («Cere ajutorul unui adult»).</li>
<li><b>Încearcă</b>: dă textul unui coleg să-l citească și roagă-l să-l execute <b>fără ajutor</b>. Dacă greșește, textul trebuie îmbunătățit!</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Instrucțiuni fără cuvinte",
      html: `<p>Multe instrucțiuni de montaj pentru mobilă, precum cele ale firmei suedeze <b>IKEA</b>, sunt făcute <b>doar din desene</b>, fără cuvinte: așa le poate înțelege oricine, în orice limbă! Și <b>indicatoarele rutiere</b> și simbolurile de siguranță (interdicția este un cerc roșu tăiat, obligația un cerc albastru) sunt texte regulative „fără cuvinte”, la fel în multe țări.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cele mai vechi reguli scrise",
      html: `<p>Unul dintre cele mai vechi texte de legi scrise care au ajuns până la noi este <b>Codul lui Hammurabi</b>, regele Babilonului, săpat pe o mare stelă de piatră neagră în jurul anului <b>1750 î.Hr.</b>: conține aproximativ 280 de legi. Astăzi se află la Muzeul Luvru din Paris. Legea cea mai importantă pentru italieni este <b>Constituția</b>, în vigoare din <b>1 ianuarie 1948</b>, cu <b>139 de articole</b>.</p>`
    },
    {
      type: "widget",
      title: "Joc: instrucțiuni sau reguli?",
      widget: "classify",
      options: {
        groups: ["Instrucțiuni (cum se face)", "Reguli (cum să te porți)"],
        items: [["🍝 Rețeta de paste cu roșii", 0], ["🪁 Cum se construiește un zmeu", 0], ["📱 Manual pentru pornirea tabletei", 0], ["🌱 Cum se seamănă fasolea", 0], ["⚽ Regulamentul fotbalului", 1], ["🚦 Codul rutier", 1], ["🏫 Regulamentul școlii", 1], ["🏊 Regulile piscinei", 1]]
      },
      caption: "Instrucțiunile explică cum obții un rezultat; regulile spun ce este permis sau interzis."
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Scop: <b>să ghideze cititorul</b> să facă ceva sau să se poarte într-un anumit fel.</li>
<li>Instrucțiuni (cum se face) și reguli (cum să te porți).</li>
<li>Titlu, materiale, <b>pași numerotați în ordine</b>, verbe la <b>imperativ</b> sau la <b>infinitiv</b>, propoziții scurte, măsuri precise, imagini.</li>
<li>Încearcă mereu instrucțiunile tale cu altcineva!</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege textul regulativ",
      intro: "Instrucțiunile seamănă cu un program de calculator, pot fi doar desene, iar cele mai importante reguli dintre toate sunt legile. Explorează!",
      tabs: [
        {
          label: "🤖 Ca un algoritm",
          html: `<p>Un <b>algoritm</b> este o succesiune de instrucțiuni precise pentru rezolvarea unei probleme: este chiar un text regulativ pentru un <b>calculator</b> sau un <b>robot</b>!</p>
<p>Robotul însă este „prost”: execută <b>exact</b> ce scrii. Dacă scrii «pune pâinea în prăjitor», dar nu ai scris «ia pâinea», se blochează! De aceea instrucțiunile trebuie să fie:</p>
<ul>
<li><b>complete</b> (niciun pas uitat),</li>
<li><b>fără ambiguități</b> (un singur sens),</li>
<li><b>în ordine</b>,</li>
<li>cu un <b>sfârșit</b>.</li>
</ul>
<p>Cu <b>Scratch</b> sau cu jocurile de coding unplugged (colegii fac pe roboții) poți încerca să dai instrucțiuni perfecte.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<rect x="30" y="20" width="240" height="40" rx="10" fill="#f59e0b"/><text x="150" y="46" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">când se dă clic ▶</text>
<rect x="30" y="66" width="240" height="40" rx="6" fill="#3b82f6"/><text x="150" y="92" font-size="17" text-anchor="middle" fill="#ffffff">ia pâinea</text>
<rect x="30" y="112" width="240" height="40" rx="6" fill="#3b82f6"/><text x="150" y="138" font-size="17" text-anchor="middle" fill="#ffffff">pune-o în prăjitor</text>
<rect x="30" y="158" width="240" height="40" rx="6" fill="#a855f7"/><text x="150" y="184" font-size="17" text-anchor="middle" fill="#ffffff">așteaptă 2 minute</text>
<rect x="30" y="204" width="240" height="40" rx="6" fill="#3b82f6"/><text x="150" y="230" font-size="17" text-anchor="middle" fill="#ffffff">scoate pâinea</text>
<text x="430" y="120" font-size="80" text-anchor="middle">🤖</text>
<text x="430" y="190" font-size="17" text-anchor="middle" fill="#166534">execută blocurile</text>
<text x="430" y="212" font-size="17" text-anchor="middle" fill="#166534">unul după altul</text>
</svg>`
        },
        {
          label: "🖼️ Doar desene",
          html: `<p>Încearcă să scrii instrucțiuni <b>fără cuvinte</b>, doar cu desene numerotate, așa cum fac broșurile pentru mobilă și pentru piesele de construit. Funcționează pentru cine nu știe bine să citească sau vorbește altă limbă!</p>
<p>Iată cum te speli pe mâini în 4 imagini:</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#eff6ff"/>
<g font-size="56" text-anchor="middle">
<rect x="15" y="20" width="130" height="130" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="3"/><text x="80" y="105">🚰</text>
<rect x="160" y="20" width="130" height="130" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="3"/><text x="225" y="105">🧼</text>
<rect x="305" y="20" width="130" height="130" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="3"/><text x="370" y="105">👐</text>
<rect x="450" y="20" width="130" height="130" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="3"/><text x="515" y="105">🧻</text>
</g>
<g font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
<text x="80" y="180">1</text><text x="225" y="180">2</text><text x="370" y="180">3</text><text x="515" y="180">4</text>
</g>
</svg>`
        },
        {
          label: "📜 Regulile Statului",
          html: `<p>Și <b>legile</b> sunt texte regulative, scrise într-un limbaj foarte precis, împărțite în <b>articole</b> și <b>alineate</b>.</p>
<p><b>Constituția italiană</b> este legea fundamentală. Ascultă cum este scris <b>articolul 34</b>: «<i>La scuola è aperta a tutti. L'istruzione inferiore, impartita per almeno otto anni, è obbligatoria e gratuita.</i>» (Școala este deschisă tuturor. Învățământul de bază, predat timp de cel puțin opt ani, este obligatoriu și gratuit.)</p>
<p>Vezi? Propoziții scurte, prezent indicativ cu valoare de obligație, cuvinte precise („cel puțin opt ani”). Astăzi obligația de instruire în Italia durează <b>10 ani</b> (de la 6 la 16 ani).</p>`
        },
        {
          label: "🎲 Inventează un joc",
          html: `<p>Cel mai bun mod de a înțelege regulile este să <b>inventezi</b> unele noi! Împreună cu clasa inventați un joc și scrieți-i regulamentul:</p>
<ol>
<li><b>Numele jocului</b> și <b>scopul</b> (cum se câștigă?).</li>
<li><b>Jucători</b> (câți?) și <b>material</b> (zar, minge, cărți…).</li>
<li><b>Desfășurare</b>: cine începe, ce se face la fiecare tură.</li>
<li><b>Interdicții</b> și <b>penalizări</b>.</li>
<li><b>Sfârșitul jocului</b>.</li>
</ol>
<p>Apoi dați regulamentul altei clase: dacă reușesc să joace fără să vă pună întrebări, textul este perfect! Potrivește părțile cu jocul de mai jos.</p>`,
          widget: "match",
          options: { pairs: [["Scop", "Câștigă cine ajunge primul la linia de sosire"], ["Jucători", "De la 2 la 4"], ["Material", "Un zar și 4 pioni"], ["Interdicție", "Nu se poate sări peste rând"], ["Penalizare", "Cine trișează se întoarce la start"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta textului regulativ",
      nodes: [
        { id: "regolativo", label: "Text regulativ", x: 50, y: 6, color: "#2563eb", html: "Text care ghidează comportamentul cititorului.", why: "Din latinescul <i>regula</i> = „riglă, regulă”: așa cum rigla ghidează creionul să tragă o linie dreaptă, textul regulativ ghidează acțiunile." },
        { id: "istruzioni", label: "Instrucțiuni", x: 25, y: 30, color: "#16a34a", html: "Explică cum să faci ceva: rețete, montaje, manuale.", why: "Se nasc din nevoia de a transmite o îndemânare celui care nu era de față: primele rețete scrise sunt pe tăblițe babiloniene vechi de aproape 4000 de ani." },
        { id: "regole", label: "Reguli și norme", x: 75, y: 30, color: "#dc2626", html: "Spun cum să te porți: regulamente, legi, regulile jocurilor.", why: "Comunitățile au nevoie de reguli comune ca să trăiască împreună în mod corect; scrierea lor le face egale pentru toți și nu pot fi schimbate după toane (de ex. Codul lui Hammurabi, secolul al XVIII-lea î.Hr.)." },
        { id: "sequenza", label: "Succesiune ordonată", x: 15, y: 56, color: "#a855f7", html: "Pași numerotați, conectori de timp (mai întâi, apoi, în sfârșit).", why: "Multe acțiuni depind de cele dinainte: nu poți coace ce nu ai frământat încă. Ordinea oglindește timpul real al acțiunilor." },
        { id: "verbi", label: "Imperativ / infinitiv", x: 40, y: 56, color: "#f97316", html: "Verbe care dau porunci sau indicații: amestecă / a amesteca.", why: "Imperativul este modul verbal al poruncii și al sfatului; infinitivul este mai impersonal și se folosește în rețete și în manuale." },
        { id: "precisione", label: "Limbaj precis", x: 28, y: 82, color: "#0ea5e9", html: "Numere, măsuri, timpi, numele exacte ale obiectelor.", why: "Cine citește nu-ți poate cere lămuriri: orice cuvânt vag («puțin», «destul») poate face să greșească." },
        { id: "obblighi", label: "Obligații, interdicții, permisiuni", x: 75, y: 56, color: "#eab308", html: "Trebuie, este interzis, se poate.", why: "Sunt cele trei moduri fundamentale prin care o regulă orientează comportamentul; uneori se adaugă sancțiunea pentru cine nu le respectă." },
        { id: "algoritmo", label: "Algoritm", x: 60, y: 82, color: "#64748b", html: "Instrucțiuni precise, complete și finite pentru un executant (chiar o mașină).", why: "Numele vine de la matematicianul persan al-Khwārizmī (secolul al IX-lea). Un program de calculator este un text regulativ atât de precis încât îl poate executa o mașină." },
        { id: "immagini", label: "Imagini și simboluri", x: 88, y: 82, color: "#14b8a6", html: "Desene, scheme, pictograme, indicatoare.", why: "O imagine depășește barierele limbii: de aceea indicatoarele rutiere și instrucțiunile de montaj folosesc desene." }
      ],
      edges: [
        ["regolativo", "istruzioni", "poate da"],
        ["regolativo", "regole", "poate da"],
        ["istruzioni", "sequenza", "au o"],
        ["istruzioni", "verbi", "folosesc"],
        ["sequenza", "precisione", "cu"],
        ["regole", "obblighi", "exprimă"],
        ["istruzioni", "algoritmo", "dacă sunt riguroase devin"],
        ["regole", "immagini", "adesea cu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: scrie bine instrucțiunile",
      questions: [
        { type: "mc", q: "Care instrucțiune este scrisă mai bine?", options: ["Pune puțină sare.", "Adaugă 5 g de sare.", "Sarea, dacă vrei, pune-o."], answer: 1, explain: "Indică o cantitate precisă, cu un verb la imperativ." },
        { type: "mc", q: "«È vietato correre nei corridoi.» (Este interzis să alergi pe coridoare.) Această propoziție exprimă…", options: ["o permisiune", "o interdicție", "o instrucțiune de montaj"], answer: 1, explain: "«È vietato» introduce o interdicție." },
        { type: "tf", q: "Este mai bine să pui o singură acțiune în fiecare pas.", answer: true, explain: "Pașii scurți, cu o singură acțiune, sunt mai ușor de urmat." }
      ]
    }
  ],
  glossary: [
    { t: "Text regulativ", d: "Text care oferă instrucțiuni sau reguli pentru a ghida comportamentul cititorului." },
    { t: "Instrucțiuni", d: "Indicații despre cum să faci ceva, pas cu pas." },
    { t: "Regulament", d: "Ansamblu de reguli care stabilesc cum să te porți într-un loc sau într-o activitate." },
    { t: "Imperativ", d: "Modul verbului care exprimă o poruncă sau un sfat: citește, scrieți." },
    { t: "Interdicție", d: "Regulă care interzice ceva (este interzis…)." },
    { t: "Obligație", d: "Regulă care impune ceva (este obligatoriu…, trebuie…)." },
    { t: "Sancțiune", d: "Consecința prevăzută pentru cine nu respectă o regulă." },
    { t: "Algoritm", d: "Succesiune finită de instrucțiuni precise pentru rezolvarea unei probleme." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este scopul unui text regulativ?", options: ["să distreze cu o poveste", "să ghideze cititorul să facă ceva sau să se poarte într-un fel", "să descrie un peisaj"], answer: 1, explain: "Regulativ = care reglează, care ghidează comportamentul." },
      { type: "mc", q: "Care NU este un text regulativ?", options: ["manualul mașinii de spălat", "regulamentul sălii de sport", "jurnalul vacanței"], answer: 2, explain: "Jurnalul povestește experiențe: este un text narativ personal." },
      { type: "mc", q: "«A bate ouăle» este un verb la modul…", options: ["imperativ", "infinitiv", "indicativ"], answer: 1, explain: "«A bate» este la infinitiv, foarte folosit în rețete." },
      { type: "tf", q: "Instrucțiunile trebuie să indice cantități și timpi precişi.", answer: true, explain: "Precizia evită greșelile: cine citește nu-ți poate pune întrebări." },
      { type: "order", q: "Pune în ordine instrucțiunile pentru a planta o sămânță.", items: ["Umple ghiveciul cu pământ", "Fă o gaură de 2 cm cu degetul", "Pune sămânța în gaură și acoper-o", "Udă cu puțină apă"], explain: "Mai întâi se pregătește pământul, apoi gaura, apoi sămânța, la urmă apa." },
      { type: "mc", q: "Care expresie indică o OBLIGAȚIE?", options: ["se poate", "este interzis", "trebuie"], answer: 2, explain: "«Trebuie» (si deve) exprimă o obligație; «se poate» o permisiune; «este interzis» o interdicție." },
      { type: "text", q: "Cum se numește o succesiune de instrucțiuni precise pe care o poate executa și un calculator?", answer: ["algoritm", "un algoritm", "algoritmo", "program"], explain: "Un algoritm (sau program, când este scris într-un limbaj pentru calculator)." },
      { type: "tf", q: "În același text este bine să amesteci imperativul («amestecă») și infinitivul («a amesteca»).", answer: false, explain: "Trebuie să alegi o formă și s-o folosești mereu: textul este mai clar." },
      { type: "num", q: "În ce an a intrat în vigoare Constituția italiană?", answer: 1948, explain: "La 1 ianuarie 1948." },
      { type: "mc", q: "Instrucțiunile IKEA sunt celebre pentru că…", options: ["sunt foarte lungi", "sunt făcute aproape numai din desene", "sunt în latină"], answer: 1, explain: "Folosesc desene ca să fie înțelese în orice limbă." },
      { type: "mc", q: "Cum poți verifica dacă instrucțiunile tale funcționează?", options: ["le recitești o dată singur", "le dai cuiva să le execute fără să-l ajuți", "le scrii mai lungi"], answer: 1, explain: "Dacă altă persoană reușește să le execute singură, sunt clare." }
    ]
  }
});
