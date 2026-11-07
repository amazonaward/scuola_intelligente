TOPIC('ro', {
  id: "p4-tec-condizioni",
  title: "Dacă… atunci: condițiile",
  intro: "<i>Dacă plouă, atunci iau umbrela. ☔ Altfel iau șapca. 🧢</i> În fiecare zi iei o grămadă de decizii de felul acesta, fără să-ți dai seama. Și calculatoarele, jocurile video și roboții decid cu ajutorul <b>condițiilor</b>: <b>DACĂ</b> ceva este adevărat, <b>ATUNCI</b> fac o acțiune, <b>ALTFEL</b> fac alta. Hai să descoperim cum o „învățăm să decidă” pe o mașină!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Ce este o condiție",
      html: `<p>O <b>condiție</b> este o întrebare la care se poate răspunde doar cu <b>DA</b> sau <b>NU</b>, adică <b>ADEVĂRAT</b> sau <b>FALS</b>.</p>
<ul>
<li>„Plouă?” → da / nu ✅</li>
<li>„Semaforul este roșu?” → da / nu ✅</li>
<li>„Scorul este mai mare decât 100?” → da / nu ✅</li>
<li>„Cât este ceasul?” → ❌ <b>nu</b> este o condiție: răspunsul nu este da sau nu!</li>
</ul>
<p>Calculatorul verifică condiția și, în funcție de răspuns, alege <b>ce drum</b> urmează în program. Această alegere se numește <b>selecție</b> sau <b>instrucțiune condițională</b>.</p>`
    },
    {
      type: "text",
      title: "2. DACĂ… ATUNCI (if… then)",
      html: `<p>Forma cea mai simplă este:</p>
<p style="font-size:1.2em">🟨 <b>DACĂ</b> <i>condiție</i> <b>ATUNCI</b> <i>acțiune</i></p>
<p>Dacă condiția este <b>adevărată</b>, calculatorul face acțiunea. Dacă este <b>falsă</b>, o sare și merge mai departe.</p>
<ul>
<li>DACĂ bateria este sub 20% ATUNCI afișează „Baterie descărcată” 🔋</li>
<li>DACĂ pisica atinge peștele ATUNCI adaugă 1 punct 🐱🐟</li>
<li>DACĂ se întunecă ATUNCI aprinde felinarele 💡</li>
</ul>
<p>În engleză, limba programatorilor, <b>DACĂ</b> se spune <b>if</b>, iar <b>ATUNCI</b> se spune <b>then</b>.</p>`
    },
    {
      type: "text",
      title: "3. DACĂ… ATUNCI… ALTFEL (if… else)",
      html: `<p>Adesea vrem să facem un lucru dacă condiția este adevărată și <b>altceva</b> dacă este falsă:</p>
<p style="font-size:1.2em">🟨 <b>DACĂ</b> <i>condiție</i> <b>ATUNCI</b> <i>acțiunea A</i> <b>ALTFEL</b> <i>acțiunea B</i></p>
<ul>
<li>DACĂ răspunsul este corect ATUNCI spune „Bravo!” 🎉 ALTFEL spune „Mai încearcă!” 🔁</li>
<li>DACĂ semaforul este verde ATUNCI traversează 🚶 ALTFEL așteaptă ✋</li>
</ul>
<p><b>Altfel</b> în engleză se spune <b>else</b>. Cu „altfel”, programul face <b>întotdeauna</b> una dintre cele două acțiuni, <b>niciodată ambele</b> și <b>niciodată niciuna</b>.</p>`
    },
    {
      type: "svg",
      title: "Organigrama: rombul deciziilor",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<ellipse cx="300" cy="35" rx="70" ry="24" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="300" y="42" font-size="18" font-weight="bold" fill="#14532d" text-anchor="middle">START</text>
<line x1="300" y1="59" x2="300" y2="85" stroke="#1e293b" stroke-width="3"/>
<polygon points="300,85 410,145 300,205 190,145" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="300" y="140" font-size="18" font-weight="bold" fill="#78350f" text-anchor="middle">Plouă?</text>
<text x="300" y="162" font-size="14" fill="#78350f" text-anchor="middle">(condiția)</text>
<line x1="190" y1="145" x2="110" y2="145" stroke="#1e293b" stroke-width="3"/>
<line x1="110" y1="145" x2="110" y2="225" stroke="#1e293b" stroke-width="3"/>
<line x1="410" y1="145" x2="490" y2="145" stroke="#1e293b" stroke-width="3"/>
<line x1="490" y1="145" x2="490" y2="225" stroke="#1e293b" stroke-width="3"/>
<text x="150" y="135" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">DA</text>
<text x="450" y="135" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">NU</text>
<rect x="30" y="225" width="160" height="50" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="110" y="256" font-size="17" fill="#1e3a8a" text-anchor="middle">Iei umbrela ☔</text>
<rect x="410" y="225" width="160" height="50" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="490" y="256" font-size="17" fill="#1e3a8a" text-anchor="middle">Iei șapca 🧢</text>
<line x1="110" y1="275" x2="110" y2="305" stroke="#1e293b" stroke-width="3"/>
<line x1="490" y1="275" x2="490" y2="305" stroke="#1e293b" stroke-width="3"/>
<line x1="110" y1="305" x2="490" y2="305" stroke="#1e293b" stroke-width="3"/>
<text x="300" y="330" font-size="16" fill="#334155" text-anchor="middle">apoi mergi mai departe: ieși din casă 🚪</text>
</svg>`,
      caption: "În organigrame, condiția se desenează într-un romb: are o intrare și două ieșiri, DA (adevărat) și NU (fals)."
    },
    {
      type: "quiz",
      title: "Mini-test: recunoaște condițiile",
      questions: [
        { type: "mc", q: "Care dintre acestea este o condiție?", options: ["Ce culoare are cerul?", "Scorul este mai mare decât 10?", "Câți ani ai?"], answer: 1, explain: "O condiție are doar două răspunsuri: adevărat sau fals. „Scorul este mai mare decât 10?” → da sau nu." },
        { type: "mc", q: "Într-o organigramă, condiția se desenează într-un…", options: ["dreptunghi", "romb", "oval"], answer: 1, explain: "Rombul este simbolul deciziei, cu două ieșiri (da / nu)." },
        { type: "tf", q: "Cu DACĂ… ATUNCI… ALTFEL programul poate executa ambele acțiuni în același timp.", answer: false, explain: "Execută întotdeauna una singură: pe cea de la DA sau pe cea de la NU." },
        { type: "mc", q: "Cum se spune «altfel» în limbajele de programare?", options: ["then", "if", "else"], answer: 2, explain: "if = dacă, then = atunci, else = altfel." }
      ]
    },
    {
      type: "text",
      title: "4. Comparații: mai mare, mai mic, egal",
      html: `<p>Multe condiții <b>compară numere</b>. Se folosesc simbolurile pe care le cunoști de la matematică:</p>
<table>
<tr><th>Simbol</th><th>Înseamnă</th><th>Exemplu</th><th>Adevărat sau fals?</th></tr>
<tr><td><b>&gt;</b></td><td>mai mare decât</td><td>puncte &gt; 100 (cu puncte = 120)</td><td>✅ adevărat</td></tr>
<tr><td><b>&lt;</b></td><td>mai mic decât</td><td>vieți &lt; 1 (cu vieți = 3)</td><td>❌ fals</td></tr>
<tr><td><b>=</b></td><td>egal cu</td><td>vârstă = 9 (cu vârstă = 9)</td><td>✅ adevărat</td></tr>
</table>
<p>Valorile precum „puncte”, „vieți”, „vârstă”, care se pot schimba în timpul jocului, se numesc <b>variabile</b>: sunt ca niște cutii cu etichetă în care calculatorul păstrează un număr.</p>`
    },
    {
      type: "text",
      title: "5. Condiții compuse: ȘI, SAU, NU",
      html: `<p>Uneori avem nevoie de mai multe condiții împreună. Ele se leagă cu trei cuvinte magice, <b>operatorii logici</b>:</p>
<ul>
<li>🤝 <b>ȘI</b> (and): adevărat doar dacă <b>ambele</b> condiții sunt adevărate.<br><i>DACĂ mi-am terminat temele <b>ȘI</b> nu plouă ATUNCI merg în parc.</i></li>
<li>🔀 <b>SAU</b> (or): adevărat dacă <b>cel puțin o</b> condiție este adevărată.<br><i>DACĂ este sâmbătă <b>SAU</b> este duminică ATUNCI nu e școală.</i></li>
<li>🔄 <b>NU</b> (not): <b>răstoarnă</b> răspunsul: adevăratul devine fals, iar falsul devine adevărat.<br><i>DACĂ <b>NU</b> am gustarea ATUNCI o cumpăr.</i></li>
</ul>
<p>Se pot pune și condiții <b>una în alta</b> (condiții imbricate): DACĂ este vară ATUNCI (DACĂ este soare ATUNCI merg la mare ALTFEL merg la piscină).</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: jocul în Scratch",
      html: `<p>În <b>Scratch</b> blocurile pentru condiții sunt portocalii (categoria <i>Control</i>) și au un spațiu în formă de hexagon în care se potrivește condiția.</p>
<p>Programul pisicii care strânge merele 🍎:</p>
<p style="font-family:monospace;background:#fff7ed;padding:8px;border-radius:8px">
când se dă clic pe steagul verde<br>
repetă la nesfârșit<br>
&nbsp;&nbsp;<b>dacă</b> &lt;atinge Mărul?&gt; <b>atunci</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;schimbă puncte cu 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;redă sunetul „pop”<br>
&nbsp;&nbsp;<b>dacă</b> &lt;puncte = 10&gt; <b>atunci</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;spune „Ai câștigat!” 🏆<br>
&nbsp;&nbsp;&nbsp;&nbsp;oprește tot
</p>
<p>Observă: condiția este verificată <b>în permanență</b> pentru că se află într-un ciclu „repetă la nesfârșit”. Fără ciclu ar fi verificată o singură dată, la început!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: condițiile din jurul tău",
      html: `<p>Mașinile de zi cu zi sunt pline de DACĂ… ATUNCI:</p>
<ul>
<li>🚪 <b>Ușa automată</b> a supermarketului: DACĂ senzorul vede o persoană ATUNCI deschide ALTFEL închide.</li>
<li>🌡️ <b>Termostatul</b> de la încălzire: DACĂ temperatura &lt; 20 °C ATUNCI pornește centrala ALTFEL oprește-o.</li>
<li>🚗 <b>Senzorul de parcare</b>: DACĂ obstacolul este la mai puțin de 30 cm ATUNCI sună mai repede.</li>
<li>📱 <b>Telefonul</b>: DACĂ codul este corect ATUNCI deblochează ALTFEL după 5 greșeli blochează pentru o vreme.</li>
<li>🌿 <b>Irigarea grădinii</b>: DACĂ este ora 7 ȘI solul este uscat ATUNCI deschide apa.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Adevărat sau fals? Încearcă tu",
      widget: "classify",
      options: {
        groups: ["✅ ADEVĂRAT", "❌ FALS"],
        items: [
          ["7 > 5", 0],
          ["3 > 8", 1],
          ["10 = 10", 0],
          ["4 < 2", 1],
          ["(2 < 5) ȘI (6 > 1)", 0],
          ["(2 > 5) ȘI (6 > 1)", 1],
          ["(2 > 5) SAU (6 > 1)", 0],
          ["(1 > 3) SAU (0 > 9)", 1],
          ["NU (3 = 3)", 1],
          ["NU (5 < 1)", 0]
        ]
      },
      caption: "Atinge fiecare condiție și pune-o în cutia potrivită. Ține minte: ȘI cere ca toate să fie adevărate, SAU cere cel puțin una, NU răstoarnă."
    },
    {
      type: "decision",
      title: "Programează robotul aspirator",
      html: "Programezi un robot aspirator 🤖. Are în față un senzor care spune dacă există un <b>obstacol</b> (un perete, piciorul mesei, pisica…). Robotul trebuie să curețe toată camera fără să rămână blocat.",
      question: "Ce regulă ai scrie?",
      options: [
        { label: "DACĂ există un obstacol ATUNCI oprește-te pentru totdeauna.", outcome: "Robotul se blochează la primul perete și nu mai curăță nimic: camera rămâne murdară!" },
        { label: "DACĂ există un obstacol ATUNCI virează puțin ALTFEL mergi înainte (și repetă la nesfârșit).", outcome: "Robotul ocolește obstacolele, își schimbă direcția și continuă să curețe: funcționează!" },
        { label: "Mergi mereu înainte, fără condiții.", outcome: "Robotul se lovește de perete și continuă să împingă: roțile se învârt în gol." }
      ],
      answer: 1,
      explain: "Primii roboți aspiratori pentru casă (cei vânduți începând cu anii 2000) foloseau chiar reguli simple de acest fel: DACĂ lovesc ceva ATUNCI virez și pornesc din nou, totul într-un ciclu care se repetă. Sunt necesare o <b>condiție</b> (există un obstacol?), cele <b>două drumuri</b> (virează / mergi înainte) și un <b>ciclu</b> care repetă verificarea. Astăzi mulți roboți folosesc și hărți și camere, dar înăuntru există mereu o mulțime de DACĂ… ATUNCI."
    },
    {
      type: "curiosity",
      title: "Știai că…? George Boole și adevărat/fals",
      html: `<p>În <b>1854</b> matematicianul englez <b>George Boole</b> a publicat o carte, <i>Legile gândirii</i>, în care trata ADEVĂRATUL și FALSUL ca pe niște numere: <b>1</b> și <b>0</b>. A inventat o algebră cu operațiile ȘI, SAU, NU.</p>
<p>Pe vremea lui părea doar un joc de matematicieni. Aproape un secol mai târziu, inginerii au înțeles că circuitele electrice funcționează la fel (curent da = 1, curent nu = 0): astăzi orice calculator și orice smartphone „gândește” cu <b>algebra booleană</b>. În cinstea lui, în limbajele de programare valorile adevărat/fals se numesc <b>booleene</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cărțile-joc",
      html: `<p>Există cărți în care tu decizi cum merge povestea: la sfârșitul unei pagini citești <i>„Dacă vrei să intri în peșteră, mergi la pagina 42, altfel mergi la pagina 17”</i>. Se numesc <b>cărți-joc</b> (în engleză <i>gamebooks</i>) și au devenit celebre în anii '80.</p>
<p>O carte-joc este chiar un <b>program făcut din DACĂ… ALTFEL</b>, iar cititorul face pe calculatorul! Și jocurile video cu povești cu răscruci funcționează la fel.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>O <b>condiție</b> este o întrebare cu răspuns <b>adevărat</b> sau <b>fals</b>.</li>
<li><b>DACĂ … ATUNCI</b> (if … then): acțiunea se face doar dacă condiția este adevărată.</li>
<li><b>DACĂ … ATUNCI … ALTFEL</b> (if … else): se face întotdeauna una dintre cele două acțiuni.</li>
<li>Comparații: <b>&gt;</b> mai mare, <b>&lt;</b> mai mic, <b>=</b> egal.</li>
<li><b>ȘI</b> = toate adevărate; <b>SAU</b> = cel puțin una adevărată; <b>NU</b> = răstoarnă.</li>
<li>În organigrame condiția este un <b>romb</b> cu două ieșiri.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege condițiile",
      intro: "Aceeași idee se poate scrie și vedea în multe feluri: cu blocuri, într-un limbaj de programare adevărat, ca o răscruce în pădure, ca regulile unui joc sau ca un joc de asocieri.",
      tabs: [
        {
          label: "🧩 Cu blocuri (Scratch)",
          html: `<p>În Scratch (creat la <b>MIT</b> din Boston și lansat în 2007) blocul <b>dacă… atunci… altfel</b> este ca o <b>gură dublă în formă de C</b>: în prima gură pui blocurile pentru DA, în a doua pe cele pentru NU. Condiția are forma unui <b>hexagon</b>: doar blocurile hexagonale (care dau adevărat sau fals) se potrivesc acolo!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<path d="M60 20 H420 V70 H120 V120 H420 V150 H120 V200 H420 V240 H60 Z" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>
<text x="80" y="52" font-size="20" font-weight="bold" fill="#ffffff">dacă</text>
<polygon points="120,32 140,22 330,22 350,32 330,62 140,62" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
<text x="235" y="50" font-size="17" fill="#ffffff" text-anchor="middle" font-weight="bold">atinge Mărul?</text>
<text x="360" y="52" font-size="20" font-weight="bold" fill="#ffffff">atunci</text>
<rect x="130" y="80" width="230" height="32" rx="6" fill="#a855f7"/>
<text x="245" y="102" font-size="17" fill="#ffffff" text-anchor="middle">spune „Ham!” 🍎</text>
<text x="80" y="142" font-size="20" font-weight="bold" fill="#ffffff">altfel</text>
<rect x="130" y="160" width="230" height="32" rx="6" fill="#3b82f6"/>
<text x="245" y="182" font-size="17" fill="#ffffff" text-anchor="middle">fă 10 pași 🐾</text>
<text x="440" y="100" font-size="16" fill="#15803d" font-weight="bold">← dacă ADEVĂRAT</text>
<text x="440" y="182" font-size="16" fill="#b91c1c" font-weight="bold">← dacă FALS</text>
</svg>`
        },
        {
          label: "🐍 Ca adevărații programatori",
          html: `<p>Mai târziu vei scrie programele cu cuvinte. Iată aceeași idee în <b>Python</b>, unul dintre cele mai folosite limbaje din lume (inclusiv pentru inteligența artificială):</p>
<p style="font-family:monospace;background:#0f172a;color:#e2e8f0;padding:10px;border-radius:8px">
punti = 12<br>
<span style="color:#f472b6">if</span> punti &gt; 10:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("Hai vinto!")<br>
<span style="color:#f472b6">else</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("Continua a giocare")
</p>
<p>Rândurile mutate spre dreapta (alineatul) sunt cele care se află „în interiorul” condiției, exact ca blocurile din gura blocului din Scratch. Acest program scrie <b>„Hai vinto!”</b> (adică „Ai câștigat!”) pentru că 12 &gt; 10 este adevărat.</p>`
        },
        {
          label: "🌲 Răscrucea din pădure",
          html: `<p>Imaginează-ți că mergi pe o potecă și ajungi la o <b>răscruce</b> cu un panou: <i>„Ai lanterna? DA → poteca spre peșteră. NU → poteca spre lac.”</i></p>
<p>Nu poți merge pe ambele poteci și nu poți rămâne pe loc: <b>trebuie s-o alegi pe una</b> în funcție de răspuns. Un program este o pădure plină de răscruci: calculatorul ajunge la fiecare răscruce, citește panoul (condiția) și alege un drum.</p>
<p>Și dacă panoul spune doar <i>„Ți-e sete? DA → treci pe la fântână”</i>? Atunci, dacă răspunzi NU, mergi drept înainte: este cazul lui <b>DACĂ… ATUNCI fără ALTFEL</b>.</p>`
        },
        {
          label: "🚦 Regulile jocurilor",
          html: `<p>Toate jocurile de societate sunt pline de condiții, chiar și cele din alte țări:</p>
<ul>
<li>🎲 <b>Jocul gâștei</b>: DACĂ ajungi pe căsuța fântânii ATUNCI stai pe loc până vine alt jucător.</li>
<li>🐍 <b>Șerpi și scări</b> (născut în India, se numea <i>Moksha Patam</i>): DACĂ ajungi pe o scară ATUNCI urci, DACĂ ajungi pe capul unui șarpe ATUNCI cobori.</li>
<li>🃏 <b>UNO</b>: DACĂ cartea are aceeași culoare SAU același număr ATUNCI o poți juca ALTFEL tragi o carte.</li>
</ul>
<p>Încearcă: scrie cu DACĂ… ATUNCI… ALTFEL regulile jocului tău preferat!</p>`
        },
        {
          label: "🎮 Potrivește condiția cu acțiunea",
          html: `<p>Fiecare mașină are regula ei. Potrivește condiția (DACĂ…) cu acțiunea corectă (ATUNCI…).</p>`,
          widget: "match",
          options: {
            pairs: [
              ["DACĂ se întunecă", "aprinde felinarele"],
              ["DACĂ temperatura este sub 20 °C", "pornește încălzirea"],
              ["DACĂ senzorul vede o persoană", "deschide ușa"],
              ["DACĂ bateria este sub 20%", "afișează „Baterie descărcată”"],
              ["DACĂ robotul lovește un obstacol", "virează și pornește din nou"],
              ["DACĂ codul este greșit", "nu debloca"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta condițiilor: atinge un nod",
      nodes: [
        { id: "algoritmo", label: "Algoritm", x: 50, y: 6, color: "#2563eb", html: "O succesiune de instrucțiuni precise pentru a rezolva o problemă.", why: "Numele vine de la <b>al-Khwarizmi</b>, matematician persan care a trăit la Bagdad în jurul anului 800, ale cărui cărți au făcut cunoscute în Europa cifrele indo-arabe și metodele de calcul." },
        { id: "condizione", label: "Condiție", x: 50, y: 30, color: "#f59e0b", html: "O întrebare cu răspuns adevărat sau fals.", why: "Un calculator nu știe să „gândească” ca noi: știe doar să verifice dacă un lucru este adevărat sau fals, de milioane de ori pe secundă. De aceea orice decizie trebuie transformată în întrebări cu da/nu." },
        { id: "booleani", label: "Adevărat / Fals (booleene)", x: 18, y: 30, color: "#a855f7", html: "Singurele două valori posibile ale unei condiții: adevărat (1) și fals (0).", why: "Le-a studiat <b>George Boole</b> în 1854. În 1937 <b>Claude Shannon</b> a arătat că întrerupătoarele circuitelor electrice urmează regulile lui Boole: de aici au apărut calculatoarele digitale." },
        { id: "ifthen", label: "DACĂ… ATUNCI", x: 30, y: 58, color: "#16a34a", html: "if … then: acțiunea se face doar dacă condiția este adevărată.", why: "Este ideea de <b>selecție</b>: împreună cu <b>secvența</b> (instrucțiuni una după alta) și <b>repetiția</b> (ciclurile) este una dintre cele trei cărămizi cu care, după cum au demonstrat Böhm și Jacopini în 1966, se poate construi orice program." },
        { id: "else", label: "ALTFEL", x: 30, y: 84, color: "#ef4444", html: "else: drumul de urmat când condiția este falsă.", why: "Ajută ca programul să nu rămână „fără răspuns”: cu if… else calculatorul face întotdeauna exact unul dintre cele două lucruri." },
        { id: "confronti", label: "Comparații > < =", x: 70, y: 58, color: "#0ea5e9", html: "Condiții care compară numere sau variabile.", why: "Sunt aceleași simboluri din matematică. Simbolurile &gt; și &lt; au fost introduse de matematicianul englez Thomas Harriot (publicat în 1631); semnul = l-a inventat Robert Recorde în 1557, „pentru că nimic nu este mai egal decât două linii paralele”." },
        { id: "logici", label: "ȘI · SAU · NU", x: 82, y: 30, color: "#db2777", html: "Operatori logici pentru a uni sau a răsturna condițiile.", why: "Vin din logica filosofilor greci (Aristotel) și au fost transformați în calcule de Boole. În circuite se numesc <i>porți logice</i> AND, OR, NOT: într-un procesor există miliarde." },
        { id: "rombo", label: "Organigramă", x: 70, y: 84, color: "#64748b", html: "Desenul programului: condiția este un romb cu ieșirile DA și NU.", why: "Organigramele au fost folosite în informatică încă din anii '40 (Goldstine și von Neumann, 1947) pentru a proiecta programele înainte de a le scrie; simbolurile au fost apoi standardizate. Ajută să vezi toate drumurile posibile." }
      ],
      edges: [
        ["algoritmo", "condizione", "decide cu"],
        ["condizione", "booleani", "are valoarea"],
        ["condizione", "ifthen", "se folosește în"],
        ["ifthen", "else", "+ drumul lui NU"],
        ["condizione", "confronti", "adesea este o"],
        ["condizione", "logici", "se combină cu"],
        ["ifthen", "rombo", "se desenează cu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: urmărește programul",
      questions: [
        { type: "mc", q: "puncte = 7. DACĂ puncte > 5 ATUNCI spune «Bine» ALTFEL spune «Hai!». Ce spune?", options: ["Bine", "Hai!", "Nimic"], answer: 0, explain: "7 > 5 este adevărat, deci se urmează drumul lui DA: «Bine»." },
        { type: "mc", q: "DACĂ este sâmbătă SAU este duminică ATUNCI nu e școală. Astăzi este duminică. Este școală?", options: ["Da", "Nu"], answer: 1, explain: "Cu SAU este suficient ca o condiție să fie adevărată: este duminică, deci nu e școală." },
        { type: "tf", q: "(3 > 1) ȘI (2 > 5) este adevărat.", answer: false, explain: "Cu ȘI trebuie ca ambele să fie adevărate: 2 > 5 este fals, deci totul este fals." },
        { type: "mc", q: "NU (adevărat) este egal cu…", options: ["adevărat", "fals"], answer: 1, explain: "NU răstoarnă valoarea." }
      ]
    }
  ],
  glossary: [
    { t: "Condiție", d: "Întrebare care are ca răspuns doar adevărat sau fals." },
    { t: "Instrucțiune condițională (selecție)", d: "Parte a programului care alege ce să facă în funcție de o condiție." },
    { t: "if / then / else", d: "Dacă / atunci / altfel, în limbajele de programare." },
    { t: "Variabilă", d: "O „cutie” cu nume care conține o valoare ce se poate schimba (puncte, vieți…)." },
    { t: "Operatori de comparare", d: "Simbolurile > (mai mare), < (mai mic), = (egal)." },
    { t: "Operatori logici", d: "ȘI (and), SAU (or), NU (not): unesc sau răstoarnă condiții." },
    { t: "Boolean", d: "Valoare care poate fi doar adevărat sau fals, după numele lui George Boole." },
    { t: "Organigramă", d: "Desenul unui algoritm: deciziile sunt romburi cu ieșirile DA/NU." },
    { t: "Senzor", d: "Dispozitiv care măsoară ceva (lumină, temperatură, distanță) și oferă date condițiilor." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "O condiție poate avea ca răspuns…", options: ["orice număr", "doar adevărat sau fals", "doar cuvinte"], answer: 1, explain: "O condiție este adevărată sau falsă." },
      { type: "mc", q: "Cum se spune «dacă» în engleză în programe?", options: ["then", "if", "else"], answer: 1, explain: "if = dacă." },
      { type: "mc", q: "vieți = 0. DACĂ vieți = 0 ATUNCI «Game over» ALTFEL «Continuă». Ce apare?", options: ["Game over", "Continuă"], answer: 0, explain: "vieți = 0 este adevărat → Game over." },
      { type: "mc", q: "vârstă = 8. DACĂ vârstă > 10 ATUNCI «Poți urca» ALTFEL «Ești prea mic». Ce apare?", options: ["Poți urca", "Ești prea mic"], answer: 1, explain: "8 > 10 este fals → se urmează ALTFEL." },
      { type: "tf", q: "Cu operatorul SAU este suficient ca o singură condiție să fie adevărată.", answer: true, explain: "SAU este adevărat dacă cel puțin o condiție este adevărată." },
      { type: "tf", q: "(5 = 5) ȘI (1 < 4) este adevărat.", answer: true, explain: "Ambele sunt adevărate, deci ȘI dă adevărat." },
      { type: "tf", q: "În organigrame, decizia se desenează într-un cerc.", answer: false, explain: "Se desenează într-un romb." },
      { type: "text", q: "Cum se numește, în programe, cuvântul care înseamnă «altfel»?", answer: ["else"], explain: "else = altfel." },
      { type: "num", q: "puncte = 4. DACĂ puncte < 5 ATUNCI adaugă 10 la puncte. Câte puncte sunt la final?", answer: 14, explain: "4 < 5 este adevărat, deci 4 + 10 = 14." },
      { type: "num", q: "x = 9. DACĂ x > 5 ȘI x < 8 ATUNCI x devine 0 ALTFEL x devine 1. Cât valorează x la final?", answer: 1, explain: "9 > 5 este adevărat, dar 9 < 8 este fals: cu ȘI rezultatul este fals, deci x devine 1." },
      { type: "mc", q: "Ce obiect folosește regula «DACĂ temperatura este scăzută ATUNCI pornește»?", options: ["termostatul", "cartea", "creionul"], answer: 0, explain: "Termostatul măsoară temperatura și pornește sau oprește încălzirea." },
      { type: "order", q: "Pune în ordine cum lucrează un program cu o condiție.", items: ["ajunge la condiție", "verifică dacă este adevărată sau falsă", "alege drumul DA sau NU", "execută acțiunile acelui drum", "continuă cu restul programului"], explain: "Calculatorul verifică, alege un drum, execută și apoi merge mai departe." }
    ]
  }
});
