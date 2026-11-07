TOPIC('ro', {
  id: "p3-tec-coding-blocchi",
  title: "Programarea cu blocuri",
  intro: "Un calculator este foarte rapid, dar singur nu știe să facă nimic: cineva trebuie să-i spună <b>ce să facă</b>, pas cu pas. Asta se numește <b>programare</b> (coding). Astăzi învățăm să o facem cu <b>blocuri colorate</b>, ca în Scratch, și descoperim două idei fundamentale: <b>secvența</b> și <b>ciclul</b>. 🧩🤖",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Pasul 1: ce este un algoritm?",
      html: `<p>Un <b>algoritm</b> este o listă de <b>instrucțiuni</b> clare, într-o ordine precisă, pentru a rezolva o problemă sau pentru a face ceva.</p>
<p>Și tu folosești algoritmi în fiecare zi! De exemplu, ca să te speli pe dinți:</p>
<ol><li>ia periuța;</li><li>pune pasta de dinți;</li><li>periază dinții;</li><li>clătește-ți gura;</li><li>spală periuța.</li></ol>
<p>Un <b>program</b> este un algoritm scris într-o limbă pe care calculatorul o înțelege: un <b>limbaj de programare</b>.</p>
<p>⚠️ Calculatorul este un executant <b>precis, dar fără fantezie</b>: face exact ce scrii, nici mai mult, nici mai puțin. Dacă uiți un pas, nu-l ghicește!</p>`
    },
    {
      type: "text", title: "Pasul 2: blocurile",
      html: `<p>În limbajele <b>cu blocuri</b> (precum <b>Scratch</b> sau <b>Code.org</b>) nu e nevoie să scrii: instrucțiunile sunt <b>cărămizi colorate</b> care se îmbină ca piesele unui puzzle. 🧩</p>
<ul>
<li>🟨 <b>Evenimente</b> (galben): <i>când se dă clic pe steagul verde</i> → programul pornește.</li>
<li>🟦 <b>Mișcare</b> (albastru): <i>fă 10 pași</i>, <i>rotește cu 90 de grade</i>.</li>
<li>🟪 <b>Aspect</b> (violet): <i>spune "Salut!"</i>, <i>schimbă costumul</i>.</li>
<li>🟧 <b>Control</b> (portocaliu): <i>repetă de 4 ori</i>, <i>așteaptă 1 secundă</i>.</li>
</ul>
<p>Dacă două blocuri nu pot sta împreună, <b>nu se îmbină</b>: așa este greu să greșești când „scrii”.</p>`
    },
    {
      type: "svg", title: "Un program cu blocuri: pătratul",
      caption: "În stânga: secvența lungă (8 blocuri). În dreapta: același program cu un ciclu «repetă de 4 ori» (3 blocuri înăuntru). Rezultatul este același pătrat!",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#f8fafc"/>
<text x="110" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SECVENȚA</text>
<rect x="20" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="30" y="51" font-size="14" fill="#422006">când se dă clic 🏁</text>
<rect x="20" y="60" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="77" font-size="14" fill="#ffffff">fă 100 de pași</text>
<rect x="20" y="86" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="103" font-size="14" fill="#ffffff">rotește ↻ 90 de grade</text>
<rect x="20" y="112" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="129" font-size="14" fill="#ffffff">fă 100 de pași</text>
<rect x="20" y="138" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="155" font-size="14" fill="#ffffff">rotește ↻ 90 de grade</text>
<rect x="20" y="164" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="181" font-size="14" fill="#ffffff">fă 100 de pași</text>
<rect x="20" y="190" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="207" font-size="14" fill="#ffffff">rotește ↻ 90 de grade</text>
<rect x="20" y="216" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="233" font-size="14" fill="#ffffff">fă 100 de pași</text>
<rect x="20" y="242" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="259" font-size="14" fill="#ffffff">rotește ↻ 90 de grade</text>
<text x="315" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">CICLUL</text>
<rect x="225" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="235" y="51" font-size="14" fill="#422006">când se dă clic 🏁</text>
<path d="M225,60 L405,60 L405,86 L250,86 L250,140 L405,140 L405,162 L225,162 Z" fill="#f97316"/>
<text x="235" y="78" font-size="14" fill="#ffffff" font-weight="bold">repetă de 4 ori</text>
<rect x="250" y="88" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="105" font-size="14" fill="#ffffff">fă 100 de pași</text>
<rect x="250" y="114" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="131" font-size="13" fill="#ffffff">rotește ↻ 90 de grade</text>
<text x="315" y="200" font-size="15" text-anchor="middle" fill="#15803d" font-weight="bold">3 blocuri în loc de 8!</text>
<text x="510" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">REZULTAT</text>
<rect x="450" y="60" width="120" height="120" fill="none" stroke="#7c3aed" stroke-width="5"/>
<text x="510" y="58" font-size="22" text-anchor="middle">🐱</text>
<text x="510" y="215" font-size="15" text-anchor="middle" fill="#0f172a">4 laturi egale</text>
<text x="510" y="235" font-size="15" text-anchor="middle" fill="#0f172a">4 unghiuri de 90°</text>
</svg>`
    },
    {
      type: "remember", title: "Secvență și ciclu",
      html: `<ul>
<li><b>Secvența</b>: instrucțiunile se execută <b>una după alta</b>, de sus în jos. <b>Ordinea</b> contează! Mai întâi ciorapii, apoi pantofii. 🧦👟</li>
<li><b>Ciclul</b> (loop): un bloc care face să se <b>repete</b> instrucțiunile din interiorul lui de un anumit număr de ori (<i>repetă de 4 ori</i>) sau la nesfârșit (<i>întruna</i>).</li>
</ul>
<p>Când vezi instrucțiuni care se repetă identic, întreabă-te: <b>pot folosi un ciclu?</b> Programul devine mai scurt, mai ușor de citit și de corectat.</p>`
    },
    {
      type: "example", title: "Exemplu practic: robotul în labirint",
      html: `<p>Un robot 🤖 trebuie să ajungă la măr 🍎. Cunoaște doar trei instrucțiuni: <b>⬆️ înainte o căsuță</b>, <b>↪️ întoarce-te la stânga</b>, <b>↩️ întoarce-te la dreapta</b>.</p>
<p>Mărul este la 3 căsuțe în față, apoi 2 căsuțe la dreapta. Programul este:</p>
<p>⬆️ ⬆️ ⬆️ ↩️ ⬆️ ⬆️</p>
<p>Cu cicluri devine: <b>repetă de 3 ori</b> [⬆️] → ↩️ → <b>repetă de 2 ori</b> [⬆️].</p>
<p>Dacă scrii din greșeală ↪️ în loc de ↩️, robotul merge la stânga și se lovește de perete: ai găsit un <b>bug</b> (eroare)! A-l corecta se numește a face <b>debug</b>. 🐞🔧</p>`
    },
    {
      type: "svg", title: "Traseul robotului",
      caption: "Urmărește săgețile: 3 căsuțe înainte, o curbă la dreapta, 2 căsuțe înainte. Iată mărul!",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ecfeff"/>
<g stroke="#94a3b8" stroke-width="2" fill="#ffffff">
<rect x="150" y="20" width="60" height="60"/><rect x="210" y="20" width="60" height="60"/><rect x="270" y="20" width="60" height="60"/><rect x="330" y="20" width="60" height="60"/>
<rect x="150" y="80" width="60" height="60"/><rect x="210" y="80" width="60" height="60"/><rect x="270" y="80" width="60" height="60"/><rect x="330" y="80" width="60" height="60"/>
<rect x="150" y="140" width="60" height="60"/><rect x="210" y="140" width="60" height="60"/><rect x="270" y="140" width="60" height="60"/><rect x="330" y="140" width="60" height="60"/>
<rect x="150" y="200" width="60" height="60"/><rect x="210" y="200" width="60" height="60"/><rect x="270" y="200" width="60" height="60"/><rect x="330" y="200" width="60" height="60"/>
</g>
<rect x="210" y="80" width="60" height="60" fill="#475569"/>
<rect x="270" y="140" width="60" height="60" fill="#475569"/>
<path d="M180,230 L180,50 L300,50" stroke="#16a34a" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="180" y="245" font-size="34" text-anchor="middle">🤖</text>
<text x="300" y="62" font-size="34" text-anchor="middle">🍎</text>
<text x="460" y="70" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️ ⬆️</text>
<text x="460" y="110" font-size="18" font-weight="bold" fill="#0f172a">↩️ dreapta</text>
<text x="460" y="150" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️</text>
<text x="460" y="200" font-size="15" fill="#475569">gri = perete</text>
</svg>`
    },
    {
      type: "quiz", title: "Mini-test: secvențe",
      questions: [
        { type: "mc", q: "O listă de instrucțiuni clare și ordonate pentru a rezolva o problemă este…", options: ["un algoritm", "un desen", "un calculator"], answer: 0, explain: "Algoritm = instrucțiuni în ordine." },
        { type: "order", q: "Pune în ordine secvența pentru a-ți încălța picioarele.", items: ["pune-ți ciorapii", "pune-ți pantofii", "leagă șireturile"], explain: "Într-o secvență ordinea contează: mai întâi ciorapii, apoi pantofii!" },
        { type: "tf", q: "Calculatorul ghicește singur instrucțiunile pe care le-am uitat.", answer: false, explain: "Calculatorul execută doar ce este scris: dacă lipsește un pas, nu-l face." }
      ]
    },
    {
      type: "3d", title: "Un ciclu este ca o înmulțire",
      scene: "blocks",
      options: { mode: "array", a: 4, b: 3 },
      caption: "«Repetă de 4 ori: pune 3 cubulețe» → 4 rânduri de câte 3 = 12 cubulețe. Mișcă cursoarele și gândește-te: de câte ori repet? Câte cubulețe pun de fiecare dată?"
    },
    {
      type: "example", title: "Exemplu practic: petrecerea pisicii din Scratch",
      html: `<p>Vrei ca pisica 🐱 să danseze. Iată programul:</p>
<ul>
<li>🟨 când se dă clic pe steagul verde</li>
<li>🟧 <b>repetă de 10 ori</b>:
<ul><li>🟦 fă 10 pași</li><li>🟪 schimbă costumul</li><li>🟧 așteaptă 0,2 secunde</li><li>🟦 fă -10 pași (întoarce-te)</li></ul></li>
<li>🟪 spune "Ce petrecere frumoasă!" timp de 2 secunde</li>
</ul>
<p>De câte ori își schimbă pisica costumul? <b>10</b>, o dată la fiecare tur al ciclului. Câți pași face în total înainte? 10 × 10 = <b>100</b>.</p>`
    },
    {
      type: "widget", title: "Joc: secvență sau ciclu?",
      widget: "classify",
      caption: "Aceste activități sunt o secvență de pași diferiți sau același pas repetat de multe ori (ciclu)?",
      options: {
        groups: ["➡️ Secvență (pași diferiți)", "🔁 Ciclu (repetare)"],
        items: [["A pregăti un sandviș", 0], ["A te spăla pe dinți", 0], ["A porni calculatorul și a deschide Scratch", 0], ["A te îmbrăca pentru a ieși", 0], ["A sări coarda de 20 de ori", 1], ["Acele ceasului care se învârt", 1], ["A urca 15 trepte", 1], ["Refrenul unui cântec", 1], ["Anotimpurile în fiecare an", 1]]
      }
    },
    {
      type: "widget", title: "Potrivește blocul cu ce face",
      widget: "match",
      options: { pairs: [["când se dă clic 🏁", "pornește programul"], ["fă 10 pași", "mută personajul"], ["rotește 90°", "face personajul să se întoarcă"], ["repetă de 4 ori", "repetă blocurile din interior"], ["întruna", "repetă fără să se oprească niciodată"], ["așteaptă 1 secundă", "face o pauză"]] }
    },
    {
      type: "curiosity", title: "Știai că… prima programatoare a fost o femeie din secolul al XIX-lea?",
      html: `<p>În <b>1843</b> matematiciana engleză <b>Ada Lovelace</b> a scris instrucțiunile prin care „Mașina analitică”, inventată de Charles Babbage, trebuia să calculeze niște numere speciale. Mașina nu a fost niciodată construită, dar acele instrucțiuni sunt considerate <b>primul program</b> din istorie! Ada înțelesese deja ideea de <b>ciclu</b>: repetarea acelorași operații de mai multe ori.</p>
<p>Și mai devreme, în <b>1804</b>, francezul Joseph-Marie Jacquard a inventat un război de țesut care țesea modele urmând niște <b>cartele perforate</b>: un fel de program pentru țesături!</p>`
    },
    {
      type: "curiosity", title: "Știai că… primul «bug» a fost un insect adevărat?",
      html: `<p>În engleză <b>bug</b> înseamnă „insectă”. În <b>1947</b>, la Universitatea Harvard, un calculator uriaș numit Mark II s-a blocat. Tehnicienii au deschis mașina și au găsit… o <b>molie</b> blocat între contacte! 🦋 Au lipit-o cu scotch în registru și au scris „primul caz real de bug găsit”. Foaia există și astăzi, într-un muzeu din Washington.</p>
<p>Inginerii numeau „bug” defecțiunile și mai înainte, dar de atunci povestea moliei a devenit foarte celebră, povestită adesea de programatoarea <b>Grace Hopper</b>.</p>`
    },
    {
      type: "alternatives", title: "Alte moduri de a înțelege",
      intro: "Dacă blocurile de pe ecran nu te conving, încearcă să programezi într-un alt mod.",
      tabs: [
        {
          label: "🃏 Coding unplugged (fără calculator)",
          html: `<p>În Italia s-a născut <b>CodyRoby</b>, un joc de cărți inventat la Universitatea din Urbino pentru a învăța programarea <b>fără calculator</b>. Cărțile au trei săgeți: <b>înainte</b>, <b>întoarce-te la stânga</b>, <b>întoarce-te la dreapta</b>.</p>
<ol><li>Desenează o tablă de joc pe podea cu creta sau cu bandă adezivă.</li>
<li>Un copil face pe <b>robotul</b>, altul pe <b>programatorul</b>.</li>
<li>Programatorul așază cărțile în șir; robotul le execută <b>întocmai</b>, fără să gândească.</li>
<li>Dacă robotul nu ajunge la țintă, căutați împreună bugul!</li></ol>`
        },
        {
          label: "🧁 Rețeta",
          html: `<p>O <b>rețetă</b> este un algoritm pentru bucătărie:</p>
<ul><li><b>Secvență</b>: sparge ouăle → adaugă zahărul → amestecă → adaugă făina → dă la cuptor.</li>
<li><b>Ciclu</b>: "<i>amestecă până când</i> aluatul este neted", "<i>repetă pentru fiecare</i> forma de brioșă: toarnă o lingură de aluat".</li></ul>
<p>Dacă schimbi ordinea (pui la cuptor înainte de a amesteca 😱) rezultatul este un dezastru: exact ca într-un program!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="200" fill="#fff7ed"/>
<text x="60" y="80" font-size="44" text-anchor="middle">🥚</text>
<text x="60" y="125" font-size="15" text-anchor="middle" fill="#0f172a">1. ouă</text>
<text x="120" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="180" y="80" font-size="44" text-anchor="middle">🍚</text>
<text x="180" y="125" font-size="15" text-anchor="middle" fill="#0f172a">2. zahăr</text>
<text x="240" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="300" y="80" font-size="44" text-anchor="middle">🥣</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#0f172a">3. amestecă</text>
<path d="M270,140 Q300,180 330,140" stroke="#7c3aed" stroke-width="4" fill="none"/>
<text x="300" y="190" font-size="15" text-anchor="middle" fill="#7c3aed" font-weight="bold">🔁 până e neted</text>
<text x="360" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="420" y="80" font-size="44" text-anchor="middle">🌾</text>
<text x="420" y="125" font-size="15" text-anchor="middle" fill="#0f172a">4. făină</text>
<text x="480" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="540" y="80" font-size="44" text-anchor="middle">🧁</text>
<text x="540" y="125" font-size="15" text-anchor="middle" fill="#0f172a">5. la cuptor</text>
</svg>`
        },
        {
          label: "🎵 Refrenul",
          html: `<p>Cântecele sunt pline de <b>cicluri</b>! În cărțile de muzică, în loc să rescrii totul, se folosește semnul de <b>repetiție</b> 𝄆 … 𝄇: înseamnă "<b>repetă</b> această parte".</p>
<p>Este exact ca blocul "repetă de 2 ori". Muzicienii folosesc ciclurile de secole, cu mult înainte de calculatoare! Încearcă să bați din palme: <b>repetă de 4 ori</b> [👏 👏 🦶].</p>`
        },
        {
          label: "🧊 Cicluri cu cuburi 3D",
          html: `<p>Fiecare tur al ciclului adaugă un rând de cubulețe. Schimbă numerele: cu <b>5 ture de câte 2</b> câte cubulețe ai? Dar cu 2 ture de câte 5? Rezultatul este același (10), dar programul este diferit!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 5, b: 2 }
        }
      ]
    },
    {
      type: "conceptMap", title: "Hartă: ideile programării",
      nodes: [
        { id: "problema", label: "O problemă", x: 50, y: 6, color: "#ef4444", html: "Ceva de făcut sau de rezolvat: a desena un pătrat, a duce robotul la măr.", why: "Programarea începe întotdeauna cu o întrebare: ce vreau să obțin? Apoi problema mare se împarte în bucăți mai mici, ceea ce este inima „gândirii computaționale”." },
        { id: "algoritmo", label: "Algoritm", x: 50, y: 28, color: "#f97316", html: "Instrucțiuni clare, finite, în ordine.", why: "Cuvântul vine de la numele matematicianului persan <b>al-Khwarizmi</b> (secolul al IX-lea), care a scris la Bagdad o carte despre cum se fac calculele pas cu pas. În latină numele lui a devenit „Algorismus”." },
        { id: "sequenza", label: "Secvență", x: 18, y: 52, color: "#3b82f6", html: "Instrucțiuni executate una după alta.", why: "Calculatorul are un singur „executant” principal care citește o instrucțiune pe rând, de sus în jos: de aceea ordinea este fundamentală." },
        { id: "ciclo", label: "Ciclu (repetă)", x: 50, y: 52, color: "#a855f7", html: "A repeta instrucțiuni de mai multe ori.", why: "Calculatoarele se pricep de minune să repete fără să obosească sau să greșească. Ada Lovelace descria deja în 1843 cum să faci Mașina analitică să repete un grup de operații." },
        { id: "evento", label: "Eveniment", x: 82, y: 52, color: "#eab308", html: "Ceea ce pornește programul (clic pe steag, o tastă).", why: "Programele moderne „așteaptă” să se întâmple ceva: un clic, o atingere pe ecran. De aceea în Scratch orice program începe cu un bloc galben în formă de pălărie." },
        { id: "blocchi", label: "Limbaj cu blocuri", x: 25, y: 78, color: "#0ea5e9", html: "Instrucțiuni ca niște cărămizi care se îmbină.", why: "Scratch a fost creat la MIT din Boston de grupul lui Mitchel Resnick și lansat în 2007. Se inspiră din limbajul Logo al lui Seymour Papert (anii '60), cel cu broasca țestoasă care desenează. Blocurile evită greșelile de scriere." },
        { id: "bug", label: "Bug și debug", x: 75, y: 78, color: "#16a34a", html: "Eroarea și corectarea ei.", why: "A greși este normal chiar și pentru programatorii experimentați! Se încearcă programul, se vede unde rezultatul diferă de cel așteptat și se corectează: așa se învață." },
        { id: "computer", label: "Calculatorul execută", x: 50, y: 95, color: "#475569", html: "Execută instrucțiunile întocmai, foarte repede.", why: "Un calculator modern execută miliarde de instrucțiuni pe secundă, dar doar pe cele pe care i le dăm: nu are intenții și nici fantezie. Inteligența programului vine de la cel care îl scrie." }
      ],
      edges: [
        ["problema", "algoritmo", "se rezolvă cu"], ["algoritmo", "sequenza", "are"], ["algoritmo", "ciclo", "are"], ["algoritmo", "evento", "pornește cu"],
        ["sequenza", "blocchi", "se scrie cu"], ["ciclo", "blocchi", "se scrie cu"], ["blocchi", "computer", "comandă"], ["computer", "bug", "dacă greșesc"], ["bug", "algoritmo", "corectez"]
      ]
    },
    {
      type: "quiz", title: "Mini-test: ciclurile",
      questions: [
        { type: "num", q: "«Repetă de 5 ori: sari de 2 ori». Câte sărituri faci în total?", answer: 10, tol: 0, explain: "5 ture × 2 sărituri = 10 sărituri." },
        { type: "mc", q: "Pentru a desena un pătrat cu un ciclu scriu…", options: ["repetă de 4 ori: înainte, rotește 90°", "repetă de 3 ori: înainte, rotește 90°", "repetă de 4 ori: înainte"], answer: 0, explain: "Pătratul are 4 laturi și 4 unghiuri drepte (90°)." },
        { type: "tf", q: "O eroare într-un program se numește bug.", answer: true, explain: "Bug = eroare; debug = a o corecta." }
      ]
    }
  ],
  glossary: [
    { t: "Coding / a programa", d: "A scrie instrucțiuni pe care un calculator sau un robot le poate executa." },
    { t: "Algoritm", d: "Listă de instrucțiuni clare și ordonate pentru a rezolva o problemă." },
    { t: "Instrucțiune", d: "O singură comandă: \"fă 10 pași\", \"întoarce-te la dreapta\"." },
    { t: "Program", d: "Un algoritm scris într-un limbaj pe care calculatorul îl înțelege." },
    { t: "Secvență", d: "Instrucțiuni executate una după alta, în ordine." },
    { t: "Ciclu (loop)", d: "Bloc care face să se repete instrucțiunile pe care le conține." },
    { t: "Eveniment", d: "Ceea ce pornește programul, cum este clicul pe steagul verde." },
    { t: "Bug", d: "Eroare într-un program." },
    { t: "Debug", d: "A găsi și a corecta erorile." },
    { t: "Scratch", d: "Limbaj de programare cu blocuri creat la MIT în 2007." },
    { t: "Unplugged", d: "Activități de programare făcute fără calculator, cu cărți, cretă sau cu propriul corp." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce este un algoritm?", options: ["O listă de instrucțiuni ordonate pentru a rezolva o problemă", "Un tip de calculator", "Un joc cu mingea"], answer: 0, explain: "Algoritm = instrucțiuni clare în ordine." },
      { type: "mc", q: "Într-o secvență instrucțiunile se execută…", options: ["toate deodată", "una după alta, în ordine", "în ordine aleatorie"], answer: 1, explain: "Una după alta, de sus în jos." },
      { type: "mc", q: "La ce folosește un ciclu?", options: ["Ca să repete niște instrucțiuni", "Ca să oprească calculatorul", "Ca să schimbe culoarea blocurilor"], answer: 0, explain: "Ciclul repetă blocurile din interiorul lui." },
      { type: "num", q: "«Repetă de 3 ori: fă 4 pași». Câți pași face personajul în total?", answer: 12, tol: 0, unit: "pași", explain: "3 × 4 = 12 pași." },
      { type: "num", q: "Pentru a desena un triunghi cu laturi egale folosesc «repetă … ori: înainte, rotește». De câte ori?", answer: 3, tol: 0, explain: "Triunghiul are 3 laturi: repetă de 3 ori." },
      { type: "text", q: "Cum se numește o eroare într-un program?", answer: ["bug", "un bug", "eroare", "o eroare", "greșeală", "greseala"], explain: "Bug (în română se spune și «eroare»)." },
      { type: "tf", q: "În limbajele cu blocuri instrucțiunile se îmbină ca piesele unui puzzle.", answer: true, explain: "Blocurile care nu pot sta împreună nu se îmbină." },
      { type: "tf", q: "Într-un program ordinea instrucțiunilor nu este importantă.", answer: false, explain: "Ordinea este fundamentală: mai întâi ciorapii, apoi pantofii!" },
      { type: "order", q: "Pune în ordine programul ca pisica să spună «Salut» după ce se dă clic pe steag.", items: ["când se dă clic pe steagul verde", "fă 10 pași", "spune «Salut!» timp de 2 secunde"], explain: "Blocul eveniment (steagul) stă întotdeauna deasupra." },
      { type: "mc", q: "Care bloc pornește programul în Scratch?", options: ["repetă de 10 ori", "când se dă clic pe steagul verde", "rotește 90 de grade"], answer: 1, explain: "Este un bloc eveniment, galben, în formă de pălărie." },
      { type: "mc", q: "Cine a scris în 1843 ceea ce este considerat primul program din istorie?", options: ["Ada Lovelace", "Leonardo da Vinci", "Galileo Galilei"], answer: 0, explain: "Ada Lovelace, pentru Mașina analitică a lui Babbage." },
      { type: "mc", q: "Robotul trebuie să meargă înainte 4 căsuțe. Care este cel mai scurt program?", options: ["înainte, înainte, înainte, înainte", "repetă de 4 ori: înainte", "repetă de 2 ori: înainte"], answer: 1, explain: "Ciclul «repetă de 4 ori» face aceeași treabă cu mai puține blocuri." }
    ]
  }
});
