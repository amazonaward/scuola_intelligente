TOPIC('ro', {
 "id": "p5-tec-ia-intro",
 "title": "Ce este inteligența artificială",
 "intro": "Telefonul care îți recunoaște fața, asistentul vocal care răspunde la întrebări, programul care traduce un text într-o clipă: în spatele lor se află <b>inteligența artificială</b> (IA). Dar cum „învață” o mașină? Este cu adevărat inteligentă ca noi? Astăzi aflăm, și învățăm și să o folosim cu cap. 🤖🧠",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Programe obișnuite și programe care învață",
   "html": "<p>Un <b>program obișnuit</b> urmează niște <b>instrucțiuni</b> scrise de o persoană, pas cu pas, ca o rețetă: <i>„dacă numărul este par, scrie PAR; altfel scrie IMPAR”</i>. Programatorul trebuie să prevadă totul.</p>\n<p>Dar încearcă să scrii instrucțiunile pentru a recunoaște o <b>pisică</b> într-o poză: „are urechile ascuțite”… și vulpile! „Are mustăți”… și șoarecii! Este aproape imposibil să scrii toate regulile.</p>\n<p><b>Inteligența artificială</b> folosește o altă cale: în loc să-i dăm mașinii regulile, îi dăm <b>foarte multe exemple</b>, iar ea descoperă singură „regulile ascunse”. Acest mod se numește <b>învățare automată</b> (în engleză <i>machine learning</i>).</p>\n<p>Este cam cum ai învățat tu să recunoști câinii: nimeni nu ți-a dat o definiție, ai văzut mulți câini și ai înțeles cum sunt făcuți!</p>"
  },
  {
   "type": "text",
   "title": "2. Cum învață o mașină: 4 pași",
   "html": "<ol>\n<li><b>Colectarea datelor</b>: de exemplu 10.000 de poze cu pisici și 10.000 de poze cu câini.</li>\n<li><b>Etichetarea</b>: o persoană scrie pe fiecare poză „pisică” sau „câine”. Acestea sunt <b>datele de antrenare</b>.</li>\n<li><b>Antrenarea</b> (<i>training</i>): mașina se uită la poze, încearcă să ghicească, verifică eticheta și, dacă a greșit, se corectează puțin. Repetă asta de mii și mii de ori. La final a construit un <b>model</b>.</li>\n<li><b>Folosirea și verificarea</b>: îi arătăm o poză <b>nouă</b>, nemaivăzută. Modelul răspunde: „pisică 95%”. Se verifică de câte ori are dreptate.</li>\n</ol>\n<p>Notă: IA nu este sigură 100%, ea dă o <b>probabilitate</b>. Și învață doar din ceea ce îi dăm: dacă în poze sunt doar pisici negre, s-ar putea să nu recunoască o pisică albă!</p>"
  },
  {
   "type": "svg",
   "title": "De la exemple la model",
   "caption": "Multe exemple cu etichetă ➜ antrenare ➜ un model care recunoaște și exemple noi.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f5f3ff\"/>\n<text x=\"95\" y=\"30\" font-size=\"16\" text-anchor=\"middle\" fill=\"#4c1d95\" font-weight=\"bold\">1. Exemple + etichete</text>\n<rect x=\"20\" y=\"45\" width=\"70\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"55\" y=\"85\" font-size=\"30\" text-anchor=\"middle\">🐱</text>\n<rect x=\"100\" y=\"45\" width=\"70\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"135\" y=\"85\" font-size=\"30\" text-anchor=\"middle\">🐶</text>\n<rect x=\"20\" y=\"125\" width=\"70\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"55\" y=\"165\" font-size=\"30\" text-anchor=\"middle\">🐈</text>\n<rect x=\"100\" y=\"125\" width=\"70\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"135\" y=\"165\" font-size=\"30\" text-anchor=\"middle\">🐕</text>\n<text x=\"55\" y=\"120\" font-size=\"13\" text-anchor=\"middle\" fill=\"#16a34a\" font-weight=\"bold\">pisică</text>\n<text x=\"135\" y=\"120\" font-size=\"13\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">câine</text>\n<text x=\"55\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" fill=\"#16a34a\" font-weight=\"bold\">pisică</text>\n<text x=\"135\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">câine</text>\n<text x=\"95\" y=\"230\" font-size=\"14\" text-anchor=\"middle\" fill=\"#4c1d95\">… mii de poze</text>\n<text x=\"200\" y=\"130\" font-size=\"34\" fill=\"#7c3aed\">➜</text>\n<rect x=\"240\" y=\"70\" width=\"140\" height=\"120\" rx=\"16\" fill=\"#7c3aed\"/>\n<text x=\"310\" y=\"110\" font-size=\"34\" text-anchor=\"middle\">⚙️</text>\n<text x=\"310\" y=\"145\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">2. Antrenare</text>\n<text x=\"310\" y=\"168\" font-size=\"13\" text-anchor=\"middle\" fill=\"#ede9fe\">încearcă, greșește, corectează</text>\n<text x=\"390\" y=\"130\" font-size=\"34\" fill=\"#7c3aed\">➜</text>\n<rect x=\"430\" y=\"45\" width=\"150\" height=\"80\" rx=\"12\" fill=\"#ffffff\" stroke=\"#7c3aed\" stroke-width=\"3\"/>\n<text x=\"505\" y=\"75\" font-size=\"15\" text-anchor=\"middle\" fill=\"#4c1d95\" font-weight=\"bold\">3. Poză nouă</text>\n<text x=\"505\" y=\"112\" font-size=\"30\" text-anchor=\"middle\">🐈‍⬛</text>\n<rect x=\"430\" y=\"150\" width=\"150\" height=\"80\" rx=\"12\" fill=\"#22c55e\"/>\n<text x=\"505\" y=\"182\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">4. Răspuns</text>\n<text x=\"505\" y=\"212\" font-size=\"18\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">pisică: 95%</text>\n<line x1=\"505\" y1=\"125\" x2=\"505\" y2=\"150\" stroke=\"#7c3aed\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"275\" font-size=\"16\" text-anchor=\"middle\" fill=\"#4c1d95\">Mai multe exemple bune și variate = răspunsuri mai bune</text>\n</svg>"
  },
  {
   "type": "widget",
   "title": "Încearcă tu să-ți „antrenezi” creierul",
   "widget": "classify",
   "caption": "Fă ca o IA: privește exemplele și împarte-le în două grupuri. Ce „regulă ascunsă” ai folosit?",
   "options": {
    "groups": [
     "🍎 Fructe",
     "🥕 Legume"
    ],
    "items": [
     [
      "🍎 măr",
      0
     ],
     [
      "🍌 banană",
      0
     ],
     [
      "🍇 struguri",
      0
     ],
     [
      "🍓 căpșună",
      0
     ],
     [
      "🍐 pară",
      0
     ],
     [
      "🥕 morcov",
      1
     ],
     [
      "🥦 broccoli",
      1
     ],
     [
      "🥬 salată verde",
      1
     ],
     [
      "🧅 ceapă",
      1
     ],
     [
      "🥔 cartof",
      1
     ]
    ]
   }
  },
  {
   "type": "quiz",
   "title": "Mini-test: cum învață IA",
   "questions": [
    {
     "type": "mc",
     "q": "Cum învață un sistem de învățare automată?",
     "options": [
      "Citește o carte de reguli",
      "Din multe exemple",
      "Întrebând-o pe învățătoare"
     ],
     "answer": 1,
     "explain": "Învață din datele de antrenare: multe exemple, adesea cu etichete."
    },
    {
     "type": "tf",
     "q": "IA este mereu sigură 100% de răspunsurile ei.",
     "answer": false,
     "explain": "Dă o probabilitate și poate greși."
    },
    {
     "type": "order",
     "q": "Pune pașii în ordine.",
     "items": [
      "Colectarea datelor",
      "Etichetarea exemplelor",
      "Antrenarea modelului",
      "Testarea cu date noi"
     ],
     "explain": "Date ➜ etichete ➜ antrenare ➜ verificare."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Rețelele neuronale: un „creier” făcut din numere",
   "html": "<p>Multe IA de astăzi folosesc <b>rețele neuronale artificiale</b>, inspirate (foarte de departe) de <b>neuronii</b> creierului nostru.</p>\n<ul>\n<li>O rețea este făcută din mulți „neuroni” artificiali așezați pe <b>straturi</b>.</li>\n<li>Primul strat primește datele (de exemplu pixelii unei poze).</li>\n<li>Straturile din mijloc, numite <b>ascunse</b>, descoperă lucruri din ce în ce mai complexe: întâi linii și pete, apoi forme precum ochi și urechi, apoi „bot de pisică”.</li>\n<li>Ultimul strat dă răspunsul.</li>\n</ul>\n<p>Fiecare legătură are o <b>pondere</b> (greutate), un număr care spune cât de importantă este. A antrena rețeaua înseamnă a <b>ajusta ponderile</b> puțin câte puțin, până când răspunsurile devin corecte. Cele mai mari rețele au <b>miliarde</b> de ponderi!</p>\n<p>Când rețelele au multe straturi se vorbește despre <b>deep learning</b> (învățare profundă).</p>"
  },
  {
   "type": "3d",
   "title": "O rețea neuronală în 3D",
   "scene": "molecule",
   "caption": "Rotește rețeaua: în stânga intrările (I, cu albastru), la mijloc stratul ascuns (A, cu mov), în dreapta ieșirile (pisică P și câine C, cu verde). Fiecare bastonaș este o legătură cu „ponderea” ei.",
   "options": {
    "atoms": [
     {
      "x": -1.6,
      "y": 0.9,
      "z": 0,
      "r": 0.25,
      "color": "#3b82f6",
      "label": "I"
     },
     {
      "x": -1.6,
      "y": 0.3,
      "z": 0,
      "r": 0.25,
      "color": "#3b82f6",
      "label": "I"
     },
     {
      "x": -1.6,
      "y": -0.3,
      "z": 0,
      "r": 0.25,
      "color": "#3b82f6",
      "label": "I"
     },
     {
      "x": -1.6,
      "y": -0.9,
      "z": 0,
      "r": 0.25,
      "color": "#3b82f6",
      "label": "I"
     },
     {
      "x": 0,
      "y": 0.75,
      "z": 0.3,
      "r": 0.28,
      "color": "#a855f7",
      "label": "A"
     },
     {
      "x": 0,
      "y": 0,
      "z": -0.3,
      "r": 0.28,
      "color": "#a855f7",
      "label": "A"
     },
     {
      "x": 0,
      "y": -0.75,
      "z": 0.3,
      "r": 0.28,
      "color": "#a855f7",
      "label": "A"
     },
     {
      "x": 1.6,
      "y": 0.4,
      "z": 0,
      "r": 0.32,
      "color": "#22c55e",
      "label": "P"
     },
     {
      "x": 1.6,
      "y": -0.4,
      "z": 0,
      "r": 0.32,
      "color": "#22c55e",
      "label": "C"
     }
    ],
    "bonds": [
     [
      0,
      4
     ],
     [
      0,
      5
     ],
     [
      0,
      6
     ],
     [
      1,
      4
     ],
     [
      1,
      5
     ],
     [
      1,
      6
     ],
     [
      2,
      4
     ],
     [
      2,
      5
     ],
     [
      2,
      6
     ],
     [
      3,
      4
     ],
     [
      3,
      5
     ],
     [
      3,
      6
     ],
     [
      4,
      7
     ],
     [
      4,
      8
     ],
     [
      5,
      7
     ],
     [
      5,
      8
     ],
     [
      6,
      7
     ],
     [
      6,
      8
     ]
    ]
   }
  },
  {
   "type": "text",
   "title": "4. Unde găsești IA în fiecare zi",
   "html": "<ul>\n<li>📷 <b>Recunoașterea imaginilor</b>: deblocarea cu fața, pozele grupate pe persoane, mașina care citește indicatoarele rutiere.</li>\n<li>🗣️ <b>Înțelegerea vocii</b>: asistenții vocali, subtitrările automate.</li>\n<li>🌐 <b>Traducerea</b>: traducătoarele automate.</li>\n<li>🎬 <b>Recomandarea</b>: clipurile și cântecele „care ți-ar putea plăcea”.</li>\n<li>💬 <b>Generarea de texte și imagini</b>: chatboții și programele care creează desene dintr-o descriere (IA <b>generativă</b>).</li>\n<li>🏥 <b>Medicina</b>: ajutarea medicilor să găsească boli în radiografii.</li>\n<li>🌦️ <b>Știința</b>: prezicerea vremii, descoperirea formei proteinelor.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: filtrul antispam",
   "html": "<p>Căsuța de e-mail separă singură mesajele utile de cele publicitare sau înșelătoare (<b>spam</b>). Cum?</p>\n<ol>\n<li>Milioane de utilizatori au apăsat butonul „Raportează ca spam”: acestea sunt <b>etichetele</b>.</li>\n<li>Sistemul a învățat că anumite lucruri apar des în spam: „AI CÂȘTIGAT!!!”, linkuri ciudate, expeditori necunoscuți.</li>\n<li>Când sosește un mesaj nou, calculează probabilitatea să fie spam. Dacă este mare, îl mută în dosarul de spam.</li>\n</ol>\n<p>De fiecare dată când raportezi un spam, o ajuți pe IA să învețe!</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: de ce poate greși chatbotul",
   "html": "<p>Un <b>chatbot</b> (precum asistenții cu care poți „sta de vorbă”) a fost antrenat pe o cantitate uriașă de texte. A învățat să prezică <b>ce cuvânt urmează</b>, atât de bine încât scrie propoziții care par scrise de o persoană.</p>\n<p>Dar el <b>nu „știe”</b> lucrurile așa cum le știi tu: uneori inventează răspunsuri greșite, scrise foarte convingător (se numesc „<b>halucinații</b>”).</p>\n<p>Exemplu: întrebi „Cine a câștigat cursa de alergare din școala mea?”. Chatbotul nu poate ști, dar ar putea inventa un nume! De aceea trebuie mereu să <b>verifici</b> informațiile pe surse de încredere: o carte, un profesor, un site serios.</p>"
  },
  {
   "type": "decision",
   "title": "Tu ce ai face?",
   "html": "<p>Trebuie să faci o cercetare despre egipteni pentru școală. Un chatbot îți scrie într-o clipă un text foarte frumos, care spune și că „piramidele au fost construite în anul 1200 d.Hr.”.</p>",
   "question": "Ce faci?",
   "options": [
    {
     "label": "Copiez textul așa cum este și îl predau.",
     "outcome": "Textul nu este al tău și conține o greșeală gravă: piramidele din Giza au circa 4500 de ani (2600–2500 î.Hr.)! Învățătoarea își dă seama, și mai ales tu n-ai învățat nimic."
    },
    {
     "label": "Folosesc chatbotul ca să-mi explice ideile principale, verific datele în carte și scriu textul cu cuvintele mele.",
     "outcome": "Excelent! Folosești IA ca pe un ajutor, nu ca pe cineva care lucrează în locul tău. Verificând, descoperi și greșeala din dată."
    },
    {
     "label": "Nu folosesc niciodată nicio IA pentru că toate greșesc.",
     "outcome": "Este prudent, dar IA poate fi utilă: explică în moduri diferite, ajută la schițe, la exersat. Important este s-o folosești împreună cu un adult, cu permisiunile potrivite, și să verifici mereu."
    }
   ],
   "answer": 1,
   "explain": "IA este o <b>unealtă</b>: te poate ajuta să înțelegi și să-ți organizezi ideile, dar poate greși și nu îți ia locul creierului. Regula de aur: <b>folosește-o, dar verifică mereu și scrie cu cuvintele tale</b>. Și ține minte că pentru multe servicii de IA este nevoie de permisiunea părinților, mai ales sub 14 ani."
  },
  {
   "type": "remember",
   "title": "Regulile pentru a folosi bine IA",
   "html": "<ul>\n<li>✅ <b>Verifică</b>: IA poate greși sau inventa. Controlează pe surse de încredere.</li>\n<li>🔒 <b>Confidențialitate</b>: nu scrie niciodată numele tău complet, adresa, școala, parolele sau fotografii personale.</li>\n<li>🧠 <b>Gândește tu</b>: folosește-o ca să înțelegi mai bine, nu ca să copiezi.</li>\n<li>👨‍👩‍👧 <b>Întreabă un adult</b>: multe servicii cer permisiunea părinților.</li>\n<li>⚖️ <b>Respect</b>: nu o folosi ca să iei în râs pe cineva sau să creezi imagini false cu persoane reale.</li>\n</ul>"
  },
  {
   "type": "widget",
   "title": "Joc: IA sau nu?",
   "widget": "classify",
   "caption": "Care dintre aceste lucruri folosesc învățarea automată și care urmează doar reguli fixe?",
   "options": {
    "groups": [
     "🤖 Folosește IA (învață din date)",
     "⚙️ Urmează reguli fixe"
    ],
    "items": [
     [
      "Deblocarea telefonului cu fața",
      0
     ],
     [
      "Traducător automat",
      0
     ],
     [
      "Clipuri recomandate",
      0
     ],
     [
      "Asistent vocal",
      0
     ],
     [
      "Filtru antispam",
      0
     ],
     [
      "Calculator de buzunar",
      1
     ],
     [
      "Semafor cu timer",
      1
     ],
     [
      "Ceas deșteptător",
      1
     ],
     [
      "Termostat care pornește la 20 °C",
      1
     ]
    ]
   }
  },
  {
   "type": "curiosity",
   "title": "Știai că… întrebarea „pot mașinile să gândească?” are mai mult de 75 de ani?",
   "html": "<p>În <b>1950</b>, matematicianul englez <b>Alan Turing</b> a propus un joc: o persoană conversează în scris cu doi interlocutori ascunși, un om și o mașină. Dacă nu reușește să-și dea seama care este mașina, atunci mașina se comportă „inteligent”. Este celebrul <b>test Turing</b>. Numele „inteligență artificială” s-a născut în schimb în <b>1956</b>, la o conferință de la Dartmouth College (SUA) organizată de <b>John McCarthy</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… un computer a învins campionul mondial de șah?",
   "html": "<p>În <b>1997</b>, computerul <b>Deep Blue</b> de la IBM l-a învins pe campionul mondial de șah <b>Garry Kasparov</b>. În <b>2016</b>, programul <b>AlphaGo</b> l-a învins pe campionul <b>Lee Sedol</b> la <b>Go</b>, un joc chinezesc cu mai multe poziții posibile decât atomii din univers. AlphaGo învățase studiind partide ale oamenilor și apoi jucând milioane de partide… cu el însuși!</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… Europa a făcut prima lege despre IA?",
   "html": "<p>În <b>2024</b>, Uniunea Europeană a aprobat <b>AI Act</b>, prima mare lege din lume despre inteligența artificială. Împarte IA în funcție de <b>risc</b>: unele sunt interzise (de exemplu cele care manipulează oamenii), altele, precum cele folosite în spital sau la școală, trebuie să respecte reguli stricte. Și Italia și-a făcut, în 2025, propria lege despre IA.</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege",
   "intro": "Învățarea automată este o idee grea. Iată alte câteva căi.",
   "tabs": [
    {
     "label": "🐕 Ca la dresajul unui câine",
     "html": "<p>Când înveți un câine să șadă, nu-i explici regulile: spui „șezi” și, când o face, îi dai o recompensă 🦴. Dacă greșește, nicio recompensă. După multe încercări, câinele „a înțeles”.</p>\n<p>Unele IA învață exact așa! Se numește <b>învățare prin recompensă</b> (învățare prin întărire): mașina încearcă acțiuni, primește „puncte” când face bine și, încet-încet, învață cea mai bună strategie. Așa a devenit AlphaGo campion.</p>"
    },
    {
     "label": "🍝 Rețeta și bucătarul",
     "html": "<table>\n<tr><th>Program obișnuit</th><th>Inteligență artificială</th></tr>\n<tr><td>Ca și cum ai urma o <b>rețetă</b> cuvânt cu cuvânt: 200 g de paste, 10 minute, sare.</td><td>Ca un bucătar care a gustat <b>o mie de feluri de mâncare</b> și a înțeles singur ce le face bune.</td></tr>\n<tr><td>Reguli ➜ răspunsuri</td><td>Exemple + răspunsuri ➜ reguli</td></tr>\n<tr><td>Face doar ce scrie.</td><td>Poate aborda cazuri noi, dar poate și greși.</td></tr>\n</table>"
    },
    {
     "label": "📈 Ghicește regula",
     "html": "<p>Privește aceste exemple: 1 ➜ 3 · 2 ➜ 5 · 3 ➜ 7 · 4 ➜ 9. Care va fi rezultatul pentru 10?</p>\n<p>Ai descoperit regula „<b>dublul plus unu</b>” și ai răspuns <b>21</b>, deși nimeni nu ți-a spus-o. Exact asta face o mașină care învață: găsește regula ascunsă din exemple! Pe dreapta de mai jos sunt marcate rezultatele: vezi șablonul?</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 22,
      "step": 1,
      "marks": [
       3,
       5,
       7,
       9,
       21
      ]
     }
    },
    {
     "label": "🔗 Cuvintele IA",
     "html": "<p>Potrivește fiecare cuvânt cu semnificația lui.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Date de antrenare",
        "Exemplele din care învață mașina"
       ],
       [
        "Etichetă",
        "Răspunsul corect scris pe un exemplu"
       ],
       [
        "Model",
        "Rezultatul antrenării"
       ],
       [
        "Rețea neuronală",
        "Straturi de neuroni artificiali legați între ei"
       ],
       [
        "Halucinație",
        "Răspuns inventat, dar convingător"
       ],
       [
        "Chatbot",
        "Program cu care se conversează"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Hartă: rădăcinile inteligenței artificiale",
   "nodes": [
    {
     "id": "ia",
     "label": "Inteligență artificială",
     "x": 50,
     "y": 8,
     "color": "#7c3aed",
     "html": "Sisteme care îndeplinesc sarcini ce necesită de obicei inteligență umană.",
     "why": "Numele a fost ales de <b>John McCarthy</b> pentru conferința de la Dartmouth din 1956. Oamenii de știință de atunci credeau că vor rezolva problema în câțiva ani… au fost necesare zeci de ani!"
    },
    {
     "id": "turing",
     "label": "Alan Turing",
     "x": 15,
     "y": 25,
     "color": "#64748b",
     "html": "„Părintele” informaticii și al IA.",
     "why": "În 1936 a descris „mașina Turing”, modelul oricărui computer. În 1950 s-a întrebat dacă mașinile pot gândi și a propus testul său. În timpul războiului a ajutat la descifrarea codurilor secrete naziste."
    },
    {
     "id": "dati",
     "label": "Date",
     "x": 85,
     "y": 25,
     "color": "#0ea5e9",
     "html": "Exemplele din care învață mașina.",
     "why": "IA modernă funcționează pentru că astăzi, datorită internetului, există cantități uriașe de texte, poze și sunete. Un mare proiect, <b>ImageNet</b> (2009), a adunat mai mult de 14 milioane de imagini etichetate de mână."
    },
    {
     "id": "ml",
     "label": "Învățare automată",
     "x": 50,
     "y": 35,
     "color": "#a855f7",
     "html": "A învăța din exemple în loc de reguli scrise.",
     "why": "Termenul <i>machine learning</i> a fost folosit în 1959 de <b>Arthur Samuel</b>, care a creat un program de dame capabil să se îmbunătățească jucând împotriva lui însuși."
    },
    {
     "id": "neuro",
     "label": "Neuronii creierului",
     "x": 15,
     "y": 60,
     "color": "#ec4899",
     "html": "Inspirația biologică.",
     "why": "În 1943, McCulloch și Pitts au descris un „neuron matematic”. Creierul nostru are circa 86 de miliarde de neuroni legați între ei: rețelele artificiale le imită ideea, nu funcționarea exactă."
    },
    {
     "id": "rete",
     "label": "Rețele neuronale",
     "x": 40,
     "y": 62,
     "color": "#8b5cf6",
     "html": "Straturi de neuroni artificiali cu ponderi de reglat.",
     "why": "Prima, <b>Perceptron</b>, a fost construită de Frank Rosenblatt în 1958. Rețelele profunde au devenit puternice abia după 2012, datorită mai multor date și unor cipuri foarte rapide (GPU, născute pentru jocuri video!)."
    },
    {
     "id": "usi",
     "label": "Folosiri de zi cu zi",
     "x": 70,
     "y": 62,
     "color": "#22c55e",
     "html": "Traducători, asistenți vocali, poze, medicină.",
     "why": "Funcționează bine acolo unde sunt multe exemple și reguli greu de scris de mână: imagini, voce, limbi."
    },
    {
     "id": "etica",
     "label": "Folosire responsabilă",
     "x": 55,
     "y": 88,
     "color": "#ef4444",
     "html": "A verifica, a proteja confidențialitatea, a evita nedreptățile.",
     "why": "Dacă datele de antrenare sunt incomplete sau pline de prejudecăți, și IA va fi la fel (se numește <b>bias</b>). De aceea sunt necesare reguli, precum AI Act european din 2024, și oameni care controlează."
    }
   ],
   "edges": [
    [
     "turing",
     "ia",
     "pune întrebarea"
    ],
    [
     "ia",
     "ml",
     "astăzi mai ales"
    ],
    [
     "dati",
     "ml",
     "hrănesc"
    ],
    [
     "neuro",
     "rete",
     "inspiră"
    ],
    [
     "ml",
     "rete",
     "folosește"
    ],
    [
     "rete",
     "usi",
     "permit"
    ],
    [
     "usi",
     "etica",
     "necesită"
    ],
    [
     "dati",
     "etica",
     "pot avea bias"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: IA în viața de zi cu zi",
   "questions": [
    {
     "type": "mc",
     "q": "Ce este o „halucinație” a unui chatbot?",
     "options": [
      "Un vis al computerului",
      "Un răspuns inventat, dar scris convingător",
      "Un virus"
     ],
     "answer": 1,
     "explain": "Chatbotul poate inventa fapte: trebuie mereu să verifici."
    },
    {
     "type": "tf",
     "q": "Este o idee bună să-ți scrii adresa de acasă într-un chatbot.",
     "answer": false,
     "explain": "Nu împărtăși niciodată date personale online."
    },
    {
     "type": "mc",
     "q": "Care dintre aceste lucruri NU folosește IA?",
     "options": [
      "Traducătorul automat",
      "Un calculator de buzunar",
      "Deblocarea cu fața"
     ],
     "answer": 1,
     "explain": "Calculatorul urmează reguli fixe, nu învață."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Inteligență artificială (IA)",
   "d": "Sisteme informatice capabile să îndeplinească sarcini precum a recunoaște, a traduce, a prezice, învățând din date."
  },
  {
   "t": "Învățare automată",
   "d": "Machine learning: mașina învață din exemple în loc de reguli scrise."
  },
  {
   "t": "Date de antrenare",
   "d": "Exemplele folosite pentru a învăța o IA."
  },
  {
   "t": "Etichetă",
   "d": "Răspunsul corect asociat unui exemplu (ex. „pisică”)."
  },
  {
   "t": "Model",
   "d": "Rezultatul antrenării, care dă răspunsuri pentru date noi."
  },
  {
   "t": "Rețea neuronală",
   "d": "Ansamblu de neuroni artificiali așezați pe straturi și legați prin ponderi."
  },
  {
   "t": "Chatbot",
   "d": "Program cu care poți conversa scriind sau vorbind."
  },
  {
   "t": "Halucinație",
   "d": "Răspuns fals inventat de o IA, dar prezentat ca adevărat."
  },
  {
   "t": "Bias",
   "d": "Prejudecată: eroare sistematică datorată unor date incomplete sau dezechilibrate."
  },
  {
   "t": "Algoritm",
   "d": "Succesiune de instrucțiuni precise pentru a rezolva o problemă."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Care este diferența principală dintre un program obișnuit și o IA care învață?",
    "options": [
     "IA este mai colorată",
     "Programul obișnuit urmează reguli scrise; IA găsește regulile din exemple",
     "Nu există nicio diferență"
    ],
    "answer": 1,
    "explain": "IA învață din exemple (date de antrenare)."
   },
   {
    "type": "text",
    "q": "Cum se numește în engleză învățarea automată?",
    "answer": [
     "machine learning"
    ],
    "explain": "Machine learning."
   },
   {
    "type": "order",
    "q": "Pune în ordine pașii antrenării.",
    "items": [
     "Colectez multe poze",
     "Scriu eticheta pe fiecare poză",
     "Mașina încearcă, greșește și se corectează",
     "Testez modelul cu poze noi"
    ],
    "explain": "Date ➜ etichete ➜ antrenare ➜ verificare."
   },
   {
    "type": "mc",
    "q": "Cine a propus în 1950 un test pentru a afla dacă o mașină „gândește”?",
    "options": [
     "Alan Turing",
     "Leonardo da Vinci",
     "Albert Einstein"
    ],
    "answer": 0,
    "explain": "Testul Turing."
   },
   {
    "type": "num",
    "q": "În ce an s-a născut numele „inteligență artificială”?",
    "answer": 1956,
    "tol": 0,
    "explain": "La conferința de la Dartmouth, în 1956."
   },
   {
    "type": "tf",
    "q": "Dacă o IA învață doar din poze cu pisici negre, s-ar putea să nu recunoască o pisică albă.",
    "answer": true,
    "explain": "IA învață doar din ceea ce vede: sunt necesare date variate (altfel apare bias)."
   },
   {
    "type": "mc",
    "q": "Rețelele neuronale artificiale sunt inspirate…",
    "options": [
     "de neuronii creierului",
     "de pânzele de păianjen",
     "de plasele de pescuit"
    ],
    "answer": 0,
    "explain": "Sunt inspirate, foarte de departe, de neuroni."
   },
   {
    "type": "mc",
    "q": "Un chatbot îți dă o dată istorică. Ce faci?",
    "options": [
     "Cred imediat",
     "O verific într-o carte sau pe un site de încredere",
     "O schimb la întâmplare"
    ],
    "answer": 1,
    "explain": "IA poate greși: verifică mereu."
   },
   {
    "type": "mc",
    "q": "Ce informație NU trebuie scrisă niciodată într-un chatbot?",
    "options": [
     "O întrebare despre dinozauri",
     "Parola ta",
     "Un cuvânt de tradus"
    ],
    "answer": 1,
    "explain": "Parolele și datele personale trebuie mereu protejate."
   },
   {
    "type": "tf",
    "q": "În 1997, computerul Deep Blue a învins campionul mondial de șah.",
    "answer": true,
    "explain": "L-a învins pe Garry Kasparov."
   },
   {
    "type": "text",
    "q": "Cum se numește legea europeană privind IA din 2024? (în engleză)",
    "answer": [
     "ai act",
     "l'ai act",
     "artificial intelligence act"
    ],
    "explain": "AI Act, prima mare lege din lume despre IA."
   },
   {
    "type": "mc",
    "q": "Ce înseamnă să „antrenezi” o rețea neuronală?",
    "options": [
     "S-o pornești",
     "Să ajustezi ponderile legăturilor până când răspunsurile sunt corecte",
     "S-o conectezi la internet"
    ],
    "answer": 1,
    "explain": "Antrenarea reglează ponderile puțin câte puțin."
   }
  ]
 }
});
