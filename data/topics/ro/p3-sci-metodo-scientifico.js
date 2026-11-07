TOPIC('ro', {
  id: "p3-sci-metodo-scientifico",
  title: "Metoda științifică",
  intro: "De ce își schimbă frunzele culoarea toamna? 🍂 De ce plutește gheața? Oamenii de știință răspund la întrebări urmând niște pași preciși: <b>metoda științifică</b>. Învățăm să <b>observăm, să facem ipoteze și să experimentăm</b> ca adevărații oameni de știință!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Ce este metoda științifică",
      html: `<p><b>Metoda științifică</b> este un mod ordonat de a descoperi cum funcționează lumea. Nu ajunge să spui <i>„după mine e așa”</i>: trebuie să o <b>dovedești</b> cu un experiment!</p>
<p>A făcut-o celebră savantul italian <b>Galileo Galilei</b> (Pisa, 1564 – Arcetri, 1642). Galileo spunea că pentru a înțelege natura sunt nevoie de <b>„sensate esperienze”</b> (adică a observa și a experimenta) și de <b>„necessarie dimostrazioni”</b> (adică a raționa și a măsura).</p>`
    },
    {
      type: "text",
      title: "Pașii metodei",
      html: `<ol>
<li>👀 <b>Observația</b>: privesc cu atenție un fenomen folosind simțurile și instrumentele. <i>„Planta de pe pervaz este aplecată spre fereastră.”</i></li>
<li>❓ <b>Întrebarea</b> (problema): <i>„De ce se apleacă așa?”</i></li>
<li>💡 <b>Ipoteza</b>: încerc să dau un răspuns posibil. <i>„Poate planta crește spre lumină.”</i></li>
<li>🧪 <b>Experimentul</b>: pregătesc o probă ca să văd dacă ipoteza este corectă. Pun două plante la fel: una lângă lumina care vine dintr-o parte, una la întuneric într-o cutie cu o singură gaură.</li>
<li>📋 <b>Culegerea datelor</b>: în fiecare zi observ, măsor, desenez și scriu.</li>
<li>✅ <b>Concluzia</b>: ipoteza a fost corectă (<b>confirmată</b>) sau greșită (<b>infirmată</b>)? Dacă este greșită… nu e un eșec! Se face o <b>nouă ipoteză</b> și se încearcă din nou.</li>
</ol>
<p>La sfârșit se <b>comunică</b> rezultatele, ca și alți oameni de știință să poată repeta experimentul și să verifice.</p>`
    },
    {
      type: "svg",
      title: "Ciclul metodei științifice",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0f9ff"/>
<defs><marker id="m" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<g stroke="#475569" stroke-width="3" fill="none" marker-end="url(#m)">
<path d="M220 60 L360 60"/><path d="M470 85 L500 130"/><path d="M500 195 L470 240"/><path d="M360 265 L240 265"/><path d="M125 240 L95 195"/><path d="M95 130 L125 85"/>
</g>
<g stroke-width="3">
<rect x="110" y="35" width="110" height="50" rx="14" fill="#fde68a" stroke="#b45309"/>
<rect x="365" y="35" width="120" height="50" rx="14" fill="#fecaca" stroke="#b91c1c"/>
<rect x="450" y="135" width="140" height="55" rx="14" fill="#bbf7d0" stroke="#15803d"/>
<rect x="355" y="240" width="140" height="50" rx="14" fill="#bfdbfe" stroke="#1d4ed8"/>
<rect x="110" y="240" width="130" height="50" rx="14" fill="#e9d5ff" stroke="#7e22ce"/>
<rect x="10" y="135" width="150" height="55" rx="14" fill="#fed7aa" stroke="#c2410c"/>
</g>
<g font-size="17" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="165" y="66">👀 Observ</text>
<text x="425" y="66">❓ Întrebare</text>
<text x="520" y="168">💡 Ipoteză</text>
<text x="425" y="271">🧪 Experiment</text>
<text x="175" y="271">📋 Date</text>
<text x="85" y="168">✅ Concluzie</text>
</g>
<text x="300" y="150" font-size="18" fill="#0f172a" text-anchor="middle">Dacă ipoteza e greșită,</text>
<text x="300" y="175" font-size="18" fill="#0f172a" text-anchor="middle">se reia cu una nouă!</text>
</svg>`,
      caption: "Metoda științifică este un cerc: fiecare concluzie poate face să se nască întrebări noi."
    },
    {
      type: "quiz",
      title: "Mini-test: pașii",
      questions: [
        { type: "mc", q: "„Poate că gheața se topește mai repede la soare decât la umbră.” Această frază este…", options: ["o observație", "o ipoteză", "o concluzie"], answer: 1, explain: "Este un posibil răspuns de verificat: o ipoteză." },
        { type: "mc", q: "Care om de știință italian a făcut celebră metoda științifică?", options: ["Galileo Galilei", "Cristofor Columb", "Leonardo Fibonacci"], answer: 0, explain: "Galileo Galilei, care a trăit între 1564 și 1642." },
        { type: "tf", q: "Dacă o ipoteză este infirmată, experimentul a fost inutil.", answer: false, explain: "Și a descoperi că o ipoteză este greșită este un rezultat important: ne face să căutăm altă explicație." }
      ]
    },
    {
      type: "text",
      title: "Regula de aur: schimbă un singur lucru",
      html: `<p>Un experiment este <b>corect</b> (oamenii de știință spun „controlat”) dacă se schimbă <b>un singur lucru o dată</b>. Tot restul trebuie să rămână <b>la fel</b>.</p>
<p>Exemplu: vreau să știu dacă semințele au nevoie de <b>apă</b> ca să încolțească 🌱.</p>
<ul>
<li>Vasul A: vată + 5 boabe de fasole + <b>apă</b>.</li>
<li>Vasul B: vată + 5 boabe de fasole + <b>fără apă</b>.</li>
<li>Aceeași temperatură, aceeași lumină, aceleași boabe, aceleași vase.</li>
</ul>
<p>Dacă aș schimba și lumina, nu aș mai ști dacă diferența depinde de apă sau de lumină! 🤔</p>
<p>În plus, este mai bine să folosești <b>mai multe semințe</b> și să <b>repeți</b> proba: o singură sămânță ar putea fi „defectă”.</p>`
    },
    {
      type: "decision",
      title: "Care experiment este corect?",
      html: "Sofia vrea să afle dacă plantele cresc mai mult cu lumină. Are două plante de busuioc la fel.",
      question: "Ce experiment ar trebui să facă?",
      options: [
        { label: "Una la soare cu multă apă, cealaltă la întuneric fără apă", outcome: "Nu este bine: schimbă două lucruri deodată (lumina și apa). Dacă planta de la întuneric moare, nu se știe dacă e din cauza întunericului sau a setei." },
        { label: "Una la soare și una la întuneric, amândouă cu aceeași apă", outcome: "Perfect! Se schimbă doar lumina: orice diferență va depinde de lumină." },
        { label: "Amândouă la soare, una cu ghiveci roșu și una cu ghiveci albastru", outcome: "Așa nu se studiază lumina: cele două plante primesc aceeași lumină și se schimbă doar culoarea ghiveciului." }
      ],
      answer: 1,
      explain: "Într-un experiment corect se schimbă o singură variabilă (lumina) și se păstrează la fel tot restul (apa, pământul, ghiveciul, tipul de plantă). După o săptămână Sofia va vedea că planta de la întuneric a devenit galbenă și alungită: fără lumină plantele nu pot face fotosinteza și nu pot produce clorofila verde."
    },
    {
      type: "text",
      title: "Instrumentele omului de știință",
      html: `<p>Cele <b>cinci simțuri</b> ale noastre sunt primele instrumente, dar uneori ne înșală (apa călduță pare fierbinte dacă ai mâinile reci!). De aceea se folosesc instrumente care <b>măsoară</b>:</p>
<ul>
<li>🌡️ <b>termometrul</b> – temperatura</li>
<li>⚖️ <b>cântarul</b> – greutatea (masa)</li>
<li>📏 <b>rigla</b> și metrul – lungimea</li>
<li>⏱️ <b>cronometrul</b> – timpul</li>
<li>🔍 <b>lupa</b> și <b>microscopul</b> – lucrurile foarte mici</li>
<li>🔭 <b>luneta</b> – lucrurile foarte îndepărtate</li>
<li>📓 <b>caietul de laborator</b> – ca să scrii tot!</li>
</ul>`
    },
    {
      type: "widget",
      title: "Observație, ipoteză sau concluzie?",
      widget: "classify",
      options: {
        groups: ["Observație", "Ipoteză", "Concluzie"],
        items: [
          ["🍂 Frunzele copacului sunt galbene", 0],
          ["💭 Poate sarea face gheața să se topească mai repede", 1],
          ["📋 După 3 probe, gheața cu sare s-a topit mereu mai repede", 2],
          ["🐌 Melcul lasă o dâră lucioasă", 0],
          ["💭 După mine, lumânarea se stinge pentru că se termină aerul", 1],
          ["📋 Fasolea fără apă nu a încolțit: apa este necesară", 2]
        ]
      },
      caption: "Pune fiecare frază în căsuța potrivită."
    },
    {
      type: "example",
      title: "Exemplu practic: care hârtie absoarbe mai mult?",
      html: `<p><b>Întrebarea</b>: care hârtie absoarbe mai multă apă: șervețelul, hârtia de bucătărie sau foaia de caiet?</p>
<p><b>Ipoteza</b>: hârtia de bucătărie, pentru că este groasă și moale.</p>
<p><b>Experimentul</b>: tai 3 fâșii <b>de aceeași mărime</b>, introduc vârful fiecăreia într-un pahar cu <b>aceeași cantitate</b> de apă colorată, aștept <b>5 minute</b> pentru toate.</p>
<p><b>Datele</b>: măsor cu rigla cât a urcat apa.</p>
<table><tr><th>Hârtia</th><th>Apa urcată</th></tr><tr><td>Hârtie de bucătărie</td><td>7 cm</td></tr><tr><td>Șervețel</td><td>5 cm</td></tr><tr><td>Caiet</td><td>1 cm</td></tr></table>
<p><b>Concluzia</b>: ipoteza este confirmată! 🎉 (Ține minte: numerele tale ar putea fi diferite, depinde de hârtie.)</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: lumânarea sub pahar",
      html: `<p><b>Observația</b>: dacă acopăr o lumânare aprinsă cu un pahar, după puțin timp se stinge. 🕯️ (Fă-o doar cu un adult!)</p>
<p><b>Ipoteza</b>: flacăra are nevoie de ceva care se află în aer și care sub pahar se termină.</p>
<p><b>Experimentul</b>: încerc cu un pahar mic și cu un borcan mare, măsurând timpul cu cronometrul.</p>
<p><b>Datele</b>: sub paharul mic se stinge după câteva secunde, sub borcanul mare durează mai mult.</p>
<p><b>Concluzia</b>: cu cât este mai mult aer, cu atât lumânarea arde mai mult. Oamenii de știință au descoperit că este nevoie de <b>oxigen</b>, unul dintre gazele din aer.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Mai bine de 1900 de ani toți l-au crezut pe <b>Aristotel</b>, care spunea că obiectele grele cad mai repede decât cele ușoare. <b>Galileo</b> a vrut să verifice rostogolind niște bile pe planuri înclinate și măsurând timpul. A descoperit că, fără aerul care frânează, <b>toate obiectele cad cu aceeași viteză</b>! În 1971 astronautul <b>David Scott</b> a încercat pe Lună, unde nu e aer: un ciocan și o pană au atins solul împreună. 🪶🔨</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Unele mari descoperiri s-au născut dintr-o „greșeală” bine observată! În <b>1928 Alexander Fleming</b> a găsit un mucegai crescut din greșeală pe o farfurioară din laboratorul său: în jurul acelui mucegai bacteriile nu creșteau. În loc să arunce totul, s-a întrebat <b>de ce</b>… și a descoperit <b>penicilina</b>, primul antibiotic, care a salvat milioane de vieți. 🧫</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Observație → întrebare → ipoteză → experiment → date → concluzie.</li>
<li>O ipoteză este un <b>răspuns posibil</b> care trebuie verificat.</li>
<li>În experiment se schimbă <b>un singur lucru</b> o dată.</li>
<li>Se măsoară, se scrie tot și se <b>repetă</b> proba.</li>
<li>O ipoteză infirmată este totuși o descoperire!</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege metoda științifică",
      intro: "Metoda științifică o folosești deja în fiecare zi, chiar fără să știi! Iată câteva moduri de a o recunoaște.",
      tabs: [
        {
          label: "🕵️ Detectivul",
          html: `<p>Un om de știință lucrează ca un <b>detectiv</b>:</p>
<ul>
<li>găsește <b>indicii</b> (observația);</li>
<li>se gândește la un <b>suspect</b> (ipoteza);</li>
<li>caută <b>dovezi</b> (experimentul);</li>
<li>hotărăște dacă suspectul este vinovat sau nevinovat (concluzia).</li>
</ul>
<p>Dacă dovezile spun „nevinovat”, detectivul nu se supără: caută alt suspect!</p>`
        },
        {
          label: "🍳 În bucătărie",
          html: `<p>Ai făcut vreodată biscuiți? 🍪 Dacă ies prea tari, <b>observi</b> problema; faci o <b>ipoteză</b> („poate au stat prea mult în cuptor”); data viitoare schimbi <b>doar timpul</b> de coacere (experiment); guști (date); și înțelegi dacă ai avut dreptate (concluzie).</p>
<p>Dacă ai fi schimbat și făina și zahărul, nu ai mai ști care era problema!</p>`
        },
        {
          label: "🔭 Ca Galileo",
          html: `<p>În <b>1609</b> Galileo a construit o lunetă și a îndreptat-o spre cer. În ianuarie <b>1610</b> a văzut patru punctișoare lângă Jupiter care în fiecare noapte își schimbau poziția. A <b>observat</b> multe nopți la rând, a desenat tot și a ajuns la <b>concluzia</b>: sunt <b>luni</b> care se rotesc în jurul lui Jupiter! Era o dovadă că nu totul se învârte în jurul Pământului.</p>
<p>Explorează Sistemul Solar în 3D și caută Jupiter.</p>`,
          scene: "solar",
          options: { labels: true }
        },
        {
          label: "📅 Istoria științei",
          html: `<p>Metoda științifică a fost construită încet-încet de mulți oameni, în multe țări. Parcurge axa timpului!</p>`,
          widget: "timeline",
          options: {
            events: [
              { year: -350, label: "Aristotel observă și clasifică animalele", icon: "🐟" },
              { year: 1021, label: "Alhazen (Ibn al-Haytham) studiază lumina prin experimente", icon: "💡" },
              { year: 1610, label: "Galileo descoperă lunile lui Jupiter", icon: "🔭" },
              { year: 1668, label: "Francesco Redi: muștele nu se nasc din carnea stricată", icon: "🪰" },
              { year: 1928, label: "Fleming descoperă penicilina", icon: "🧫" },
              { year: 1971, label: "Ciocanul și pana cad împreună pe Lună", icon: "🌕" }
            ],
            unit: "ani"
          }
        },
        {
          label: "🪰 Experimentul lui Redi",
          html: `<p>Pe vremuri se credea că viermii se nasc singuri din carnea stricată. În <b>1668</b> medicul toscan <b>Francesco Redi</b> a făcut un experiment perfect:</p>
<ul>
<li>borcanul A: carne <b>deschis</b> → după câteva zile, viermi (larve de muscă);</li>
<li>borcanul B: carne <b>acoperită cu o tifon</b> → aerul trece, muștele nu → <b>niciun vierme</b> pe carne!</li>
</ul>
<p>Schimba <b>un singur lucru</b>: dacă muștele puteau atinge carnea. Concluzia: viermii se nasc din <b>ouăle muștelor</b>.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="80" y="80" width="140" height="140" rx="12" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<ellipse cx="150" cy="190" rx="50" ry="20" fill="#dc2626"/>
<text x="120" y="60" font-size="28">🪰</text><text x="170" y="185" font-size="22">🐛</text>
<text x="150" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">A: deschis</text>
<rect x="380" y="80" width="140" height="140" rx="12" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<path d="M375 80 L525 80" stroke="#a3a3a3" stroke-width="10" stroke-dasharray="4 3"/>
<ellipse cx="450" cy="190" rx="50" ry="20" fill="#dc2626"/>
<text x="430" y="55" font-size="28">🪰</text>
<text x="450" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">B: cu tifon</text>
<text x="300" y="150" font-size="22" text-anchor="middle" fill="#1f2937">vs</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta metodei științifice: atinge un nod și descoperă de ce",
      nodes: [
        { id: "oss", label: "Observația", x: 50, y: 6, color: "#f59e0b", html: "A privi cu atenție folosind simțurile și instrumentele.", why: "Toată știința pornește de la curiozitatea față de ceea ce vedem. Galileo o numea „sensata esperienza”." },
        { id: "dom", label: "Întrebarea", x: 82, y: 22, color: "#ef4444", html: "Problema de rezolvat: de ce? cum? ce se întâmplă dacă…?", why: "O întrebare bună trebuie să poată fi verificată printr-o probă: „sarea topește gheața?” da; „care este cea mai frumoasă culoare?” nu, este o preferință personală." },
        { id: "ipo", label: "Ipoteza", x: 82, y: 50, color: "#16a34a", html: "Un posibil răspuns de pus la încercare.", why: "Din grecescul <i>hypóthesis</i>, „ceea ce se pune dedesubt”, adică la baza unui raționament. O ipoteză științifică trebuie să poată fi infirmată de un experiment." },
        { id: "esp", label: "Experimentul", x: 60, y: 72, color: "#2563eb", html: "O probă pregătită cu grijă ca să verifice ipoteza.", why: "Galileo a înțeles că nu ajunge să raționezi: trebuie să interoghezi natura prin probe repetabile. De aceea se schimbă o singură variabilă și se păstrează tot restul la fel." },
        { id: "var", label: "Un lucru o dată", x: 88, y: 88, color: "#0ea5e9", html: "Într-un experiment se schimbă un singur factor.", why: "Dacă aș schimba două lucruri deodată, nu aș putea ști care dintre ele a cauzat rezultatul. Este ideea experimentului „controlat”, folosită încă de Francesco Redi în 1668." },
        { id: "dati", label: "Date și măsurători", x: 30, y: 72, color: "#a855f7", html: "Ceea ce se observă și se măsoară în timpul experimentului.", why: "Simțurile pot înșela; instrumentele (termometru, cântar, cronometru) dau numere pe care oricine le poate verifica." },
        { id: "concl", label: "Concluzia", x: 18, y: 45, color: "#14b8a6", html: "Ipoteza este confirmată sau infirmată.", why: "Dacă este infirmată, se revine la ipoteză. Dacă este confirmată de multe ori, de mulți oameni de știință diferiți, poate deveni o lege sau o teorie." },
        { id: "galileo", label: "Galileo Galilei", x: 18, y: 15, color: "#64748b", html: "Savant din Pisa (1564–1642), părintele metodei științifice moderne.", why: "Unea experimentele cu matematica: „cartea naturii este scrisă în limbaj matematic”, a scris în <i>Il Saggiatore</i> (1623)." }
      ],
      edges: [
        ["oss", "dom", "face să se nască o"],
        ["dom", "ipo", "se răspunde cu o"],
        ["ipo", "esp", "se verifică cu un"],
        ["esp", "var", "regula de aur"],
        ["esp", "dati", "produce"],
        ["dati", "concl", "duc la"],
        ["concl", "oss", "întrebări noi"],
        ["galileo", "oss", "„sensate esperienze”"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: experimente corecte",
      questions: [
        { type: "tf", q: "Într-un experiment bun se schimbă mai multe lucruri deodată ca să mergi mai repede.", answer: false, explain: "Se schimbă un singur lucru o dată, altfel nu se înțelege ce a cauzat rezultatul." },
        { type: "mc", q: "Ce instrument folosești ca să măsori temperatura apei?", options: ["cântar", "termometru", "cronometru"], answer: 1, explain: "Termometrul măsoară temperatura." },
        { type: "mc", q: "De ce este mai bine să repeți un experiment de mai multe ori?", options: ["Ca să fim siguri că rezultatul nu este o întâmplare", "Pentru că e distractiv", "Nu e nevoie să-l repeți"], answer: 0, explain: "Repetând, verifici că rezultatul este mereu același și nu depinde de o greșeală sau de întâmplare." }
      ]
    }
  ],
  glossary: [
    { t: "Metoda științifică", d: "Procedeu ordonat pentru a studia natura prin observații și experimente." },
    { t: "Observație", d: "A privi cu atenție un fenomen cu simțurile și cu instrumentele." },
    { t: "Ipoteză", d: "Posibil răspuns la o întrebare, de verificat." },
    { t: "Experiment", d: "Probă pregătită pentru a verifica o ipoteză." },
    { t: "Variabilă", d: "Lucrul care se schimbă într-un experiment (unul singur o dată)." },
    { t: "Date", d: "Informațiile culese observând și măsurând." },
    { t: "Concluzie", d: "Rezultatul final: ipoteza este confirmată sau infirmată." },
    { t: "Fenomen", d: "Orice fapt care se petrece în natură și care poate fi observat." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Pune în ordine pașii metodei științifice.", items: ["Observația", "Întrebarea", "Ipoteza", "Experimentul", "Culegerea datelor", "Concluzia"], explain: "Se observă, ne întrebăm de ce, se face o ipoteză, se experimentează, se culeg datele și se trage concluzia." },
      { type: "text", q: "Cum se numește posibilul răspuns la o întrebare științifică, de verificat printr-un experiment?", answer: ["ipoteza", "ipoteză", "o ipoteză"], explain: "Este ipoteza." },
      { type: "mc", q: "În ce secol a trăit Galileo Galilei?", options: ["În 1200 (secolul al XIII-lea)", "Între 1500 și 1600 (secolele al XVI-lea–al XVII-lea)", "În 1900 (secolul al XX-lea)"], answer: 1, explain: "Galileo s-a născut în 1564 și a murit în 1642." },
      { type: "tf", q: "Simțurile noastre ne pot înșela uneori: de aceea folosim instrumente de măsură.", answer: true, explain: "Termometrul, cântarul, rigla dau măsurători precise și verificabile." },
      { type: "mc", q: "Vreau să știu dacă sarea face gheața să se topească mai repede. Ce schimb între cele două cuburi?", options: ["Doar prezența sării", "Sarea și mărimea cubului", "Sarea și locul unde le pun"], answer: 0, explain: "Se schimbă doar sarea; mărimea și locul trebuie să rămână la fel." },
      { type: "mc", q: "„Fasolea cu apă a încolțit, cea fără apă nu.” Această frază este…", options: ["o ipoteză", "o dată/un rezultat", "o întrebare"], answer: 1, explain: "Descrie ceea ce s-a observat în experiment." },
      { type: "tf", q: "O ipoteză infirmată este un eșec și nu folosește la nimic.", answer: false, explain: "Și a ști că o ipoteză este greșită este o descoperire: se trece la o nouă ipoteză." },
      { type: "mc", q: "Ce a descoperit Galileo în 1610 cu luneta?", options: ["Lunile lui Jupiter", "Penicilina", "Electricitatea"], answer: 0, explain: "A văzut patru luni care se roteau în jurul lui Jupiter." },
      { type: "text", q: "Ce instrument folosești ca să măsori timpul unui experiment?", answer: ["cronometru", "cronometrul", "ceas", "ceasul", "timer"], explain: "Cronometrul măsoară timpul." },
      { type: "mc", q: "În experimentul lui Redi, de ce era un borcan acoperit cu tifon?", options: ["Ca să nu intre muștele, dar să treacă aerul", "Ca să țină carnea caldă", "Ca să-l decoreze"], answer: 0, explain: "Așa schimba un singur lucru: dacă muștele puteau atinge carnea." },
      { type: "tf", q: "După experiment este corect să comunici rezultatele ca și alții să-l poată repeta.", answer: true, explain: "Știința funcționează pentru că rezultatele sunt verificate de alte persoane." }
    ]
  }
});
