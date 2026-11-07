TOPIC('ro', {
 "id": "m1-mat-geometria-base",
 "title": "Noțiunile geometrice fundamentale",
 "intro": "Toată geometria pornește de la trei idei foarte simple: <b>punctul</b>, <b>dreapta</b> și <b>planul</b>. Din acestea se construiesc semidrepte, segmente și <b>unghiuri</b>, cărămidele oricărei figuri. Să învățăm să le recunoaștem, să le măsurăm și să le comparăm.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Noțiunile primare: punct, dreaptă, plan",
   "html": "<p>În geometrie unele idei <b>nu se definesc</b>: sunt atât de simple, încât le înțelegem prin intuiție. Se numesc <b>noțiuni primare</b>.</p>\n<ul>\n<li><b>Punctul</b>: arată o poziție. Nu are dimensiuni (nici lungime, nici lățime, nici grosime). Se notează cu o literă <b>mare</b>: A, B, P.</li>\n<li><b>Dreapta</b>: o linie dreaptă <b>nemărginită</b> în ambele sensuri. Are o singură dimensiune, lungimea. Se notează cu o literă <b>mică</b>: r, s, t.</li>\n<li><b>Planul</b>: o suprafață plană <b>nemărginită</b> în toate direcțiile, fără grosime. Se notează cu o literă greacă: α (alfa), β (beta), π (pi).</li>\n</ul>\n<p><b>Spațiul</b> este mulțimea tuturor punctelor: este „recipientul” tuturor figurilor.</p>\n<p>Proprietățile noțiunilor primare sunt date de <b>postulate</b> (sau axiome): afirmații care se acceptă ca adevărate fără demonstrație. Iată cele mai importante:</p>\n<ol>\n<li>Printr-un <b>punct</b> trec <b>o infinitate de drepte</b> (se numesc <i>fascicul de drepte</i>).</li>\n<li>Prin <b>două puncte distincte</b> trece <b>o dreaptă și numai una</b>.</li>\n<li>O dreaptă conține o infinitate de puncte; între oricare două puncte ale unei drepte există întotdeauna o infinitate de alte puncte.</li>\n<li>Prin <b>trei puncte necoliniare</b> trece <b>un plan și numai unul</b>.</li>\n</ol>"
  },
  {
   "type": "svg",
   "title": "Punct, dreaptă, semidreaptă, segment",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<circle cx=\"70\" cy=\"50\" r=\"6\" fill=\"#dc2626\"/>\n<text x=\"84\" y=\"44\" font-size=\"18\" fill=\"#dc2626\" font-weight=\"bold\">A</text>\n<text x=\"200\" y=\"56\" font-size=\"17\" fill=\"#334155\">punct: doar o poziție</text>\n<line x1=\"20\" y1=\"110\" x2=\"580\" y2=\"110\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<polygon points=\"580,110 566,102 566,118\" fill=\"#2563eb\"/>\n<polygon points=\"20,110 34,102 34,118\" fill=\"#2563eb\"/>\n<text x=\"40\" y=\"100\" font-size=\"18\" fill=\"#2563eb\" font-weight=\"bold\">r</text>\n<text x=\"200\" y=\"140\" font-size=\"17\" fill=\"#334155\">dreaptă: infinită în ambele părți</text>\n<line x1=\"120\" y1=\"190\" x2=\"580\" y2=\"190\" stroke=\"#16a34a\" stroke-width=\"4\"/>\n<polygon points=\"580,190 566,182 566,198\" fill=\"#16a34a\"/>\n<circle cx=\"120\" cy=\"190\" r=\"6\" fill=\"#16a34a\"/>\n<text x=\"104\" y=\"182\" font-size=\"18\" fill=\"#16a34a\" font-weight=\"bold\">O</text>\n<text x=\"200\" y=\"220\" font-size=\"17\" fill=\"#334155\">semidreaptă: are originea O și nu se termină</text>\n<line x1=\"150\" y1=\"270\" x2=\"420\" y2=\"270\" stroke=\"#9333ea\" stroke-width=\"4\"/>\n<circle cx=\"150\" cy=\"270\" r=\"6\" fill=\"#9333ea\"/>\n<circle cx=\"420\" cy=\"270\" r=\"6\" fill=\"#9333ea\"/>\n<text x=\"136\" y=\"262\" font-size=\"18\" fill=\"#9333ea\" font-weight=\"bold\">A</text>\n<text x=\"426\" y=\"262\" font-size=\"18\" fill=\"#9333ea\" font-weight=\"bold\">B</text>\n<text x=\"200\" y=\"305\" font-size=\"17\" fill=\"#334155\">segmentul AB: are două capete și se poate măsura</text>\n</svg>",
   "caption": "Dreapta și semidreapta nu se pot măsura (sunt infinite); segmentul da."
  },
  {
   "type": "text",
   "title": "2. Semidrepte și segmente",
   "html": "<p>Un punct O de pe o dreaptă o împarte în două părți: fiecare, împreună cu O, este o <b>semidreaptă</b> cu <b>originea</b> în O.</p>\n<p>Două puncte A și B de pe o dreaptă determină <b>segmentul AB</b>: este partea de dreaptă cuprinsă între A și B, care sunt <b>capetele</b>. Spre deosebire de drepte și semidrepte, segmentul are o <b>lungime</b> pe care o putem măsura cu rigla.</p>\n<table>\n<tr><th>Tipuri de segmente</th><th>Ce înseamnă</th></tr>\n<tr><td><b>Consecutive</b></td><td>au în comun doar un capăt (ca laturile unei linii frânte)</td></tr>\n<tr><td><b>Adiacente</b></td><td>sunt consecutive <b>și</b> se află pe aceeași dreaptă</td></tr>\n<tr><td><b>Congruente</b> (≅)</td><td>se pot suprapune exact: au aceeași lungime</td></tr>\n<tr><td><b>Secante</b></td><td>se intersectează într-un punct interior</td></tr>\n</table>\n<p><b>Mijlocul</b> M al unui segment AB este punctul care îl împarte în două segmente congruente: AM ≅ MB.</p>\n<p>Mai multe segmente consecutive formează o <b>linie frântă</b>; dacă ultimul capăt coincide cu primul, linia frântă este <b>închisă</b> și delimitează un <b>poligon</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: adunarea și compararea segmentelor",
   "html": "<p>Pe o dreaptă se află, în ordine, punctele A, B, C. Știm că <b>AB = 7 cm</b> și <b>BC = 5 cm</b>.</p>\n<ul>\n<li>Segmentele AB și BC sunt <b>adiacente</b> (consecutive și pe aceeași dreaptă), deci AC = AB + BC = 7 + 5 = <b>12 cm</b>.</li>\n<li>Mijlocul M al lui AC se află față de A la: 12 : 2 = <b>6 cm</b>.</li>\n<li>Cât de departe este M de B? AB − AM = 7 − 6 = <b>1 cm</b>.</li>\n</ul>\n<p>Problema „invers”: dacă AC = 20 cm și AB este cu 4 cm mai mare decât BC, atunci BC = (20 − 4) : 2 = <b>8 cm</b> și AB = 8 + 4 = <b>12 cm</b>. Este metoda <b>sumei și diferenței</b>, foarte utilă la probleme!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: puncte, drepte și segmente",
   "questions": [
    {
     "type": "mc",
     "q": "Câte drepte trec prin două puncte distincte?",
     "options": [
      "Niciuna",
      "O singură dreaptă",
      "Două",
      "O infinitate"
     ],
     "answer": 1,
     "explain": "Este un postulat al lui Euclid: prin două puncte distincte trece o dreaptă și numai una."
    },
    {
     "type": "tf",
     "q": "O semidreaptă se poate măsura cu rigla.",
     "answer": false,
     "explain": "Semidreapta este nemărginită într-o parte: nu are o lungime finită. Numai segmentul se măsoară."
    },
    {
     "type": "num",
     "q": "A, B, C sunt coliniare în această ordine. AB = 9 cm și BC = 6 cm. Cât măsoară AC?",
     "answer": 15,
     "unit": "cm",
     "explain": "AB și BC sunt adiacente: AC = 9 + 6 = 15 cm."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Drepte în plan și în spațiu",
   "html": "<p>Două drepte din același plan pot fi:</p>\n<ul>\n<li><b>concurente</b>: au <b>un singur punct</b> comun;</li>\n<li><b>perpendiculare</b> (⊥): sunt concurente și formează <b>4 unghiuri drepte</b> (90°);</li>\n<li><b>paralele</b> (∥): <b>nu au niciun punct comun</b>, oricât le-am prelungi. Își păstrează mereu aceeași distanță.</li>\n</ul>\n<p><b>Distanța de la un punct la o dreaptă</b> este lungimea segmentului <b>perpendicular</b> care merge de la punct la dreaptă: este drumul cel mai scurt.</p>\n<p>În <b>spațiu</b> există un caz în plus: două drepte care nu se întâlnesc, dar <b>nu sunt paralele</b>, pentru că nu se află în același plan. Se numesc <b>drepte necoplanare</b>. Gândește-te la un drum și la un pod suprapus care îl traversează de-a curmezișul!</p>"
  },
  {
   "type": "svg",
   "title": "Pozițiile a două drepte în plan",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fefce8\"/>\n<line x1=\"20\" y1=\"40\" x2=\"180\" y2=\"190\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"20\" y1=\"190\" x2=\"180\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<circle cx=\"100\" cy=\"115\" r=\"6\" fill=\"#111827\"/>\n<text x=\"100\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#111827\">concurente</text>\n<line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"200\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"220\" y1=\"115\" x2=\"380\" y2=\"115\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<rect x=\"300\" y=\"95\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#111827\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#111827\">perpendiculare</text>\n<line x1=\"420\" y1=\"70\" x2=\"590\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"420\" y1=\"170\" x2=\"590\" y2=\"140\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<line x1=\"490\" y1=\"58\" x2=\"508\" y2=\"155\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n<text x=\"525\" y=\"112\" font-size=\"15\" fill=\"#16a34a\">distanța</text>\n<text x=\"505\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#111827\">paralele</text>\n</svg>",
   "caption": "Dreptele paralele rămân mereu la aceeași distanță; cele perpendiculare formează patru unghiuri drepte."
  },
  {
   "type": "3d",
   "title": "Drepte și plane în 3D: găsește dreptele necoplanare",
   "scene": "solid",
   "options": {
    "shape": "box",
    "w": 2,
    "h": 1.2,
    "d": 1.4,
    "color": "#38bdf8",
    "labels": true
   },
   "caption": "Fiecare față a paralelipipedului se află într-un plan, fiecare muchie pe o dreaptă. Rotește-l: găsește două muchii paralele, două perpendiculare și două necoplanare (nu se ating și nu sunt paralele)."
  },
  {
   "type": "text",
   "title": "4. Unghiul",
   "html": "<p>Două semidrepte cu aceeași origine împart planul în două părți. Fiecare parte, împreună cu semidreptele, este un <b>unghi</b>.</p>\n<ul>\n<li>Semidreptele sunt <b>laturile</b> unghiului; originea comună este <b>vârful</b>.</li>\n<li>Un unghi se notează cu vârful și câte un punct pe fiecare latură, astfel: <b>∢AOB</b>, sau cu o literă grecească: α, β, γ.</li>\n<li>Un unghi este <b>convex</b> dacă nu conține prelungirile laturilor sale, <b>concav</b> dacă le conține.</li>\n</ul>\n<p>Unghiurile se măsoară în <b>grade</b> (°) cu <b>raportorul</b>. O rotație completă valorează <b>360°</b>. Fiecare grad se împarte în <b>60 de minute</b> (′) și fiecare minut în <b>60 de secunde</b> (″): este <b>sistemul sexagesimal</b>, moștenit de la babilonieni.</p>\n<table>\n<tr><th>Unghiul</th><th>Măsura</th></tr>\n<tr><td><b>Nul</b></td><td>0° (laturile coincid)</td></tr>\n<tr><td><b>Ascuțit</b></td><td>între 0° și 90°</td></tr>\n<tr><td><b>Drept</b></td><td>90° (un sfert de rotație)</td></tr>\n<tr><td><b>Obtuz</b></td><td>între 90° și 180°</td></tr>\n<tr><td><b>Alungit</b></td><td>180° (laturile formează o dreaptă)</td></tr>\n<tr><td><b>Plin</b></td><td>360°</td></tr>\n</table>"
  },
  {
   "type": "svg",
   "title": "Tipurile de unghiuri",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<line x1=\"30\" y1=\"120\" x2=\"150\" y2=\"120\" stroke=\"#111827\" stroke-width=\"4\"/>\n<line x1=\"30\" y1=\"120\" x2=\"130\" y2=\"50\" stroke=\"#111827\" stroke-width=\"4\"/>\n<path d=\"M75 120 A45 45 0 0 0 67 94\" stroke=\"#dc2626\" stroke-width=\"4\" fill=\"none\"/>\n<text x=\"90\" y=\"160\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#dc2626\">ascuțit</text>\n<line x1=\"230\" y1=\"120\" x2=\"350\" y2=\"120\" stroke=\"#111827\" stroke-width=\"4\"/>\n<line x1=\"230\" y1=\"120\" x2=\"230\" y2=\"30\" stroke=\"#111827\" stroke-width=\"4\"/>\n<rect x=\"230\" y=\"96\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<text x=\"290\" y=\"160\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2563eb\">drept 90°</text>\n<line x1=\"450\" y1=\"120\" x2=\"570\" y2=\"120\" stroke=\"#111827\" stroke-width=\"4\"/>\n<line x1=\"450\" y1=\"120\" x2=\"390\" y2=\"40\" stroke=\"#111827\" stroke-width=\"4\"/>\n<path d=\"M490 120 A40 40 0 0 0 426 88\" stroke=\"#9333ea\" stroke-width=\"4\" fill=\"none\"/>\n<text x=\"490\" y=\"160\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#9333ea\">obtuz</text>\n<line x1=\"40\" y1=\"240\" x2=\"260\" y2=\"240\" stroke=\"#111827\" stroke-width=\"4\"/>\n<circle cx=\"150\" cy=\"240\" r=\"5\" fill=\"#111827\"/>\n<path d=\"M190 240 A40 40 0 0 0 110 240\" stroke=\"#ea580c\" stroke-width=\"4\" fill=\"none\"/>\n<text x=\"150\" y=\"285\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ea580c\">alungit 180°</text>\n<line x1=\"420\" y1=\"240\" x2=\"540\" y2=\"240\" stroke=\"#111827\" stroke-width=\"4\"/>\n<circle cx=\"420\" cy=\"240\" r=\"5\" fill=\"#111827\"/>\n<circle cx=\"420\" cy=\"240\" r=\"34\" stroke=\"#16a34a\" stroke-width=\"4\" fill=\"none\"/>\n<text x=\"470\" y=\"285\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#16a34a\">plin 360°</text>\n</svg>",
   "caption": "Arcul colorat arată ce parte a planului măsurăm."
  },
  {
   "type": "widget",
   "title": "Clasifică unghiurile",
   "widget": "classify",
   "options": {
    "groups": [
     "Ascuțit",
     "Drept",
     "Obtuz",
     "Alungit sau mai mult"
    ],
    "items": [
     [
      "35°",
      0
     ],
     [
      "90°",
      1
     ],
     [
      "120°",
      2
     ],
     [
      "180°",
      3
     ],
     [
      "89°",
      0
     ],
     [
      "91°",
      2
     ],
     [
      "270°",
      3
     ],
     [
      "🕒 acele la ora 3:00",
      1
     ],
     [
      "🕐 acele la ora 1:00",
      0
     ],
     [
      "🕔 acele la ora 5:00",
      2
     ],
     [
      "🕕 acele la ora 6:00",
      3
     ],
     [
      "📐 unghiul echerului",
      1
     ]
    ]
   },
   "caption": "Ține minte: fiecare oră de pe cadranul ceasului corespunde la 360° : 12 = 30°."
  },
  {
   "type": "text",
   "title": "5. Perechi de unghiuri",
   "html": "<ul>\n<li><b>Consecutive</b>: au vârful și o latură în comun.</li>\n<li><b>Adiacente</b>: consecutive și cu celelalte două laturi pe aceeași dreaptă: împreună formează un unghi <b>alungit</b> (180°).</li>\n<li><b>Complementare</b>: suma lor este <b>90°</b>. Complementul lui 30° este 60°.</li>\n<li><b>Suplementare</b>: suma lor este <b>180°</b>. Suplementul lui 130° este 50°.</li>\n<li><b>Conjugate</b> (explementare): suma lor este <b>360°</b>. Conjugatul lui 100° este 260°.</li>\n<li><b>Opuse la vârf</b>: când două drepte se intersectează, unghiurile „unul în fața celuilalt” sunt întotdeauna <b>congruente</b>.</li>\n</ul>\n<p>De ce sunt egale unghiurile opuse la vârf? Să numim α și β cele două unghiuri opuse și γ unghiul dintre ele. α + γ = 180° și, la fel, β + γ = 180°, pentru că sunt adiacente. Atunci α = 180° − γ = β. Este o adevărată <b>demonstrație</b>: prima teoremă pe care o întâlnești în geometrie!</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: calcule cu grade și minute",
   "html": "<p><b>Suma.</b> 35°40′ + 20°30′ = 55°70′. Dar 70′ = 1° 10′, deci rezultatul este <b>56°10′</b>.</p>\n<p><b>Complementul.</b> Complementul lui 52°25′ este 90° − 52°25′. Scriem 90° ca 89°60′: 89°60′ − 52°25′ = <b>37°35′</b>.</p>\n<p><b>Ceasul.</b> La ora 2:00 acele formează 2 × 30° = <b>60°</b>; la 4:00 formează 4 × 30° = <b>120°</b> (obtuz). La 9:00 formează 90°: un unghi drept!</p>\n<p><b>Navigația.</b> Piloții și marinarii indică direcția cu un unghi măsurat de la Nord în sensul acelor de ceasornic: Est = 90°, Sud = 180°, Vest = 270°.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… 360 vine din Babilon?",
   "html": "<p>Cercul împărțit în <b>360 de grade</b>, precum și <b>minutele</b> și <b>secundele</b> de câte 60, vin de la vechii <b>babilonieni</b>, care numărau în baza 60. Numărul 60 se împarte la 2, 3, 4, 5, 6, 10, 12, 15, 20, 30: foarte comod pentru a face calcule fără virgule!</p>\n<p>Și numele? În latina medievală se vorbea de <i>pars minuta prima</i> („prima parte mică”) și <i>pars minuta secunda</i> („a doua parte mică”): de aici <b>minut</b> și <b>secundă</b>, aceleași nume pe care le folosim pentru oră (minute și secunde, în engleză <i>minute</i> și <i>second</i>).</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… cea mai celebră carte de geometrie are 2300 de ani?",
   "html": "<p>Pe la <b>300 î.Hr.</b>, la Alexandria, în Egipt, matematicianul grec <b>Euclid</b> a scris <b>Elementele</b>, 13 cărți care pornesc de la câteva definiții și de la 5 <b>postulate</b> și de aici demonstrează sute de teoreme. Timp de peste 2000 de ani a fost textul după care se studia geometria: după Biblie, este poate cartea cu cele mai multe ediții din istorie.</p>\n<p>Al cincilea postulat al său, cel al <b>paralelelor</b>, a stârnit discuții între matematicieni timp de secole. În secolul al XIX-lea Lobacevski, Bolyai și Riemann au descoperit că, schimbându-l, se obțin <b>geometrii neeuclidiene</b>: chiar cele pe care Einstein le va folosi pentru a descrie spațiul curb al universului!</p>"
  },
  {
   "type": "widget",
   "title": "Potrivește termenul cu definiția",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "Complementare",
      "suma 90°"
     ],
     [
      "Suplementare",
      "suma 180°"
     ],
     [
      "Conjugate",
      "suma 360°"
     ],
     [
      "Paralele",
      "niciun punct comun, același plan"
     ],
     [
      "Necoplanare",
      "nu se întâlnesc, plane diferite"
     ],
     [
      "Mijlocul segmentului",
      "împarte segmentul în două părți egale"
     ]
    ]
   }
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege noțiunile geometrice",
   "intro": "Definițiile abstracte nu te conving? Încearcă să le vezi cu obiecte, cu corpul sau în 3D.",
   "tabs": [
    {
     "label": "🧵 Cu sfoara și cu corpul",
     "html": "<p>Întinde o <b>sfoară</b> între două cuie: este un <b>segment</b>. Dacă ai putea să o prelungești la infinit în ambele părți, ar fi o <b>dreaptă</b>. O <b>lanternă</b> aprinsă în întuneric este o semidreaptă excelentă: pornește dintr-un punct și ajunge foarte departe.</p>\n<p>Acum folosește <b>brațele</b>: ține-le lipite în fața ta (unghi nul), apoi ridică-l pe unul în sus până formezi un „L” (unghi drept), apoi desfă-le în linie (unghi alungit). Învârte-te pe loc: ai făcut un <b>unghi plin</b>!</p>\n<p>Podeaua clasei este o bucată de <b>plan</b>; liniile plăcilor de gresie sunt drepte paralele și perpendiculare.</p>"
    },
    {
     "label": "🕐 Unghiurile ceasului",
     "html": "<p>Cadranul ceasului este un raportor ascuns! Cercul (360°) este împărțit în 12 ore, deci fiecare oră valorează <b>30°</b>. Privește acele: la ora 3 formează un unghi drept, la 6 un unghi alungit, la 1 un unghi ascuțit de 30°.</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#eff6ff\"/>\n<circle cx=\"150\" cy=\"140\" r=\"110\" fill=\"#ffffff\" stroke=\"#1e3a8a\" stroke-width=\"6\"/>\n<text x=\"150\" y=\"55\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">12</text>\n<text x=\"242\" y=\"147\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">3</text>\n<text x=\"150\" y=\"240\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">6</text>\n<text x=\"58\" y=\"147\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">9</text>\n<line x1=\"150\" y1=\"140\" x2=\"150\" y2=\"62\" stroke=\"#dc2626\" stroke-width=\"6\"/>\n<line x1=\"150\" y1=\"140\" x2=\"215\" y2=\"140\" stroke=\"#111827\" stroke-width=\"8\"/>\n<rect x=\"150\" y=\"118\" width=\"22\" height=\"22\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<text x=\"400\" y=\"80\" font-size=\"20\" fill=\"#1e3a8a\" font-weight=\"bold\">Ora 3:00 = 90°</text>\n<text x=\"400\" y=\"120\" font-size=\"18\" fill=\"#334155\">1 oră = 30°</text>\n<text x=\"400\" y=\"155\" font-size=\"18\" fill=\"#334155\">ora 1:00 = 30°</text>\n<text x=\"400\" y=\"190\" font-size=\"18\" fill=\"#334155\">ora 4:00 = 120°</text>\n<text x=\"400\" y=\"225\" font-size=\"18\" fill=\"#334155\">ora 6:00 = 180°</text>\n</svg>"
    },
    {
     "label": "🧊 Cubul în 3D",
     "html": "<p>Pe un cub găsești totul: <b>vârfurile</b> sunt puncte, <b>muchiile</b> se află pe drepte, <b>fețele</b> în plane. Rotește-l și caută:</p>\n<ul><li>muchii <b>paralele</b> (aceeași direcție);</li><li>muchii <b>perpendiculare</b> (se întâlnesc la 90°);</li><li>muchii <b>necoplanare</b> (nu se ating și nu sunt paralele: există numai în spațiu!).</li></ul>",
     "scene": "solid",
     "options": {
      "shape": "cube",
      "color": "#a78bfa",
      "labels": true
     }
    },
    {
     "label": "🌍 Grade în alte țări și meserii",
     "html": "<p>Nu toți măsoară unghiurile în același fel:</p>\n<ul>\n<li><b>matematicienii</b> și fizicienii folosesc adesea <b>radianii</b>: un cerc complet valorează 2π ≈ 6,28 radiani;</li>\n<li>în <b>Franța</b>, după Revoluție, s-a încercat introducerea <b>gradelor centesimale</b> (sau gon): un unghi drept = 100 gon, un cerc complet = 400. Le folosesc încă topografii și le găsești pe calculatoare la tasta „GRAD”;</li>\n<li>armatele folosesc <b>miimile</b> (mil): un cerc complet = 6400 mil;</li>\n<li>în țările anglo-saxone dreapta care trece prin A și B se scrie cu o săgeată dublă deasupra: <b>AB</b> cu ↔.</li>\n</ul>\n<p>Sistemul sexagesimal (360°) rămâne cel mai răspândit din lume, pentru că 360 se împarte în foarte multe feluri.</p>"
    },
    {
     "label": "🇬🇷 Riglă și compas, ca grecii",
     "html": "<p>Vechii <b>greci</b> (de exemplu <b>Euclid</b>, la Alexandria în jurul anului 300 î.Hr.) construiau figurile folosind numai <b>două instrumente</b>: o <b>riglă fără gradații</b> (pentru a trasa drepte) și <b>compasul</b> (pentru a trasa cercuri). Fără riglă cu centimetri, fără raportor! Iată cum găsesc <b>mijlocul</b> unui segment și <b>perpendiculara</b> lui (se numește <b>mediatoarea segmentului</b>):</p><ol><li>Desenează segmentul <b>AB</b>.</li><li>Înfige compasul în <b>A</b> cu o deschidere <b>mai mare decât jumătatea</b> lui AB și trasează un arc deasupra și unul dedesubtul segmentului.</li><li><b>Fără să schimbi deschiderea</b>, înfige în <b>B</b> și trasează alte două arce: le taie pe primele în punctele <b>C</b> și <b>D</b>.</li><li>Unește C și D cu rigla: dreapta CD este <b>perpendiculară</b> pe AB și îl taie exact în <b>mijlocul M</b>.</li></ol><p><b>De ce funcționează?</b> C se află la aceeași distanță de A și de B (deschiderea compasului a fost aceeași), și D la fel. Toate punctele care sunt <b>la aceeași distanță de A și de B</b> se află pe o singură dreaptă: mediatoarea segmentului. Este propoziția 10 din prima carte a <i>Elementelor</i>.</p><p>🎯 <b>Încearcă și tu</b> să construiești <b>bisectoarea</b> unui unghi: înfige compasul în vârf și trasează un arc care taie cele două laturi; din acele două puncte trasează două arce egale care se intersectează; unește vârful cu punctul de intersecție. Ai împărțit unghiul în două părți egale fără să-l măsori!</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"150\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><circle cx=\"450\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><line x1=\"150\" y1=\"150\" x2=\"450\" y2=\"150\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><line x1=\"300\" y1=\"8\" x2=\"300\" y2=\"292\" stroke=\"#dc2626\" stroke-width=\"3\"/><circle cx=\"150\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"450\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"17.7\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"282.3\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"150\" r=\"6\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"2\"/><text x=\"128\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">A</text><text x=\"458\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">B</text><text x=\"310\" y=\"30\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">C</text><text x=\"310\" y=\"290\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">D</text><text x=\"308\" y=\"172\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">M</text><rect x=\"8\" y=\"8\" width=\"150\" height=\"50\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><text x=\"16\" y=\"30\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">Doar riglă</text><text x=\"16\" y=\"50\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">și compas!</text></svg>"
    },
    {
     "label": "🇨🇳 Echer și compas în China",
     "html": "<p>În <b>China</b>, în picturi și sculpturi străvechi de acum circa 2000 de ani (dinastia Han), cei doi strămoși legendari <b>Fuxi</b> și <b>Nüwa</b> sunt reprezentați ținând în mână un <b>echer</b> (矩, <i>ju</i>) și un <b>compas</b> (规, <i>gui</i>). Împreună, cele două cuvinte formează <b>规矩</b> (<i>guīju</i>), care în chineză înseamnă… <b>„reguli”</b>! Pentru vechii chinezi, cine știe să folosească echerul și compasul știe să pună ordine în lume.</p><p>Cu aceste două instrumente poți face tot ce studiezi în acest capitol:</p><ul><li><b>Perpendiculare</b>: sprijină o catetă a echerului pe o dreaptă și trasează de-a lungul celeilalte catete. Cele două drepte formează un <b>unghi drept</b> (90°).</li><li><b>Paralele</b> (metoda „echerului care alunecă”): sprijină rigla pe foaie și ține-o nemișcată; fă să <b>alunece</b> echerul de-a lungul riglei și trasează o dreaptă, apoi alta mai încolo. Toate dreptele au aceeași <b>direcție</b>: sunt paralele, pentru că toate formează același unghi cu rigla.</li><li><b>Distanța punct–dreaptă</b>: din punctul P trasează cu echerul perpendiculara pe dreaptă: segmentul perpendicular este <b>distanța</b> cea mai scurtă.</li><li><b>Cercul</b>: cu compasul, toate punctele aflate la aceeași distanță de centru.</li></ul><p>🎯 Încearcă: desenează o dreaptă și un punct în afara ei. Cu echerul care alunecă trasează <b>paralela</b> care trece prin punct. Câte poți trasa? Una singură (este chiar al cincilea postulat al lui Euclid!).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta noțiunilor geometrice: atinge și descoperă de ce",
   "nodes": [
    {
     "id": "postulati",
     "label": "Postulate",
     "x": 50,
     "y": 6,
     "color": "#a855f7",
     "html": "Afirmații acceptate ca adevărate fără demonstrație, care descriu cum se comportă punctele, dreptele și planele.",
     "why": "Nu se poate demonstra totul: orice raționament trebuie să pornească de la ceva. Euclid, în jurul anului 300 î.Hr., a ales câteva postulate evidente și de acolo a construit toată geometria cu demonstrații riguroase. În 1899 David Hilbert le-a rescris într-un mod și mai precis."
    },
    {
     "id": "punto",
     "label": "Punct",
     "x": 18,
     "y": 26,
     "color": "#dc2626",
     "html": "Arată o poziție; nu are dimensiuni.",
     "why": "Euclid l-a definit ca „ceea ce nu are părți”. Este o idee abstractă: punctul pe care îl desenezi cu creionul este doar un model, pentru că are mereu puțină grosime."
    },
    {
     "id": "retta",
     "label": "Dreaptă",
     "x": 50,
     "y": 30,
     "color": "#2563eb",
     "html": "Linie dreaptă nemărginită, cu o singură dimensiune.",
     "why": "Prin două puncte trece una singură: de aceea firul întins între două puncte este mereu drept, iar dreapta este drumul cel mai scurt în plan."
    },
    {
     "id": "piano",
     "label": "Plan",
     "x": 82,
     "y": 26,
     "color": "#0ea5e9",
     "html": "Suprafață plană nemărginită, cu două dimensiuni.",
     "why": "Trei puncte necoliniare determină un singur plan: de aceea un taburet cu 3 picioare nu se clatină niciodată, în timp ce un scaun cu 4 picioare uneori da!"
    },
    {
     "id": "semiretta",
     "label": "Semidreaptă și segment",
     "x": 30,
     "y": 54,
     "color": "#16a34a",
     "html": "Părți de dreaptă: semidreapta are o origine, segmentul două capete.",
     "why": "Apar „tăind” dreapta cu unul sau două puncte. Segmentul este finit și deci poate fi comparat și măsurat: de aici apar măsurile de lungime."
    },
    {
     "id": "parallele",
     "label": "Paralele și perpendiculare",
     "x": 72,
     "y": 54,
     "color": "#f59e0b",
     "html": "Poziții relative ale a două drepte.",
     "why": "Al cincilea postulat al lui Euclid spune, în esență, că printr-un punct exterior unei drepte trece o singură paralelă. Schimbându-l, în secolul al XIX-lea au apărut geometriile neeuclidiene."
    },
    {
     "id": "angolo",
     "label": "Unghi",
     "x": 30,
     "y": 80,
     "color": "#ef4444",
     "html": "Parte de plan dintre două semidrepte cu aceeași origine.",
     "why": "Două semidrepte care pornesc din același punct împart planul în două părți: fiecare este un unghi. Măsoară cât de „rotită” este o direcție față de alta."
    },
    {
     "id": "gradi",
     "label": "Grade sexagesimale",
     "x": 70,
     "y": 82,
     "color": "#14b8a6",
     "html": "Unitate de măsură a unghiurilor: cercul complet valorează 360°, 1° = 60′, 1′ = 60″.",
     "why": "Vine de la babilonieni, care numărau în baza 60 și observaseră că Soarele are nevoie de circa 360 de zile pentru a face ocolul cerului. Numărul 360 are foarte mulți divizori."
    },
    {
     "id": "teorema",
     "label": "Opuse la vârf",
     "x": 50,
     "y": 96,
     "color": "#6366f1",
     "html": "Unghiurile opuse la vârf sunt congruente.",
     "why": "Se demonstrează: fiecare este suplementar aceluiași unghi, deci sunt egale. Potrivit tradiției, Thales din Milet (secolul al VI-lea î.Hr.) a fost primul care a demonstrat acest lucru."
    }
   ],
   "edges": [
    [
     "postulati",
     "punto",
     "descriu"
    ],
    [
     "postulati",
     "retta",
     "descriu"
    ],
    [
     "postulati",
     "piano",
     "descriu"
    ],
    [
     "retta",
     "semiretta",
     "se împarte în"
    ],
    [
     "retta",
     "parallele",
     "două drepte pot fi"
    ],
    [
     "semiretta",
     "angolo",
     "două semidrepte formează"
    ],
    [
     "angolo",
     "gradi",
     "se măsoară în"
    ],
    [
     "angolo",
     "teorema",
     "demonstrăm"
    ],
    [
     "piano",
     "parallele",
     "în același"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: unghiurile",
   "questions": [
    {
     "type": "num",
     "q": "Care este suplementul unui unghi de 125°?",
     "answer": 55,
     "unit": "°",
     "explain": "180° − 125° = 55°."
    },
    {
     "type": "mc",
     "q": "Două unghiuri opuse la vârf: unul măsoară 40°. Cât măsoară celălalt?",
     "options": [
      "140°",
      "40°",
      "50°",
      "320°"
     ],
     "answer": 1,
     "explain": "Unghiurile opuse la vârf sunt întotdeauna congruente."
    },
    {
     "type": "mc",
     "q": "Un unghi de 100° este…",
     "options": [
      "ascuțit",
      "drept",
      "obtuz",
      "alungit"
     ],
     "answer": 2,
     "explain": "Este mai mare de 90° și mai mic de 180°: obtuz."
    }
   ]
  },
  {
   "type": "remember",
   "title": "De ținut minte",
   "html": "<ul>\n<li><b>Punctul, dreapta, planul</b> sunt noțiuni primare: nu se definesc, se descriu prin <b>postulate</b>.</li>\n<li>Prin două puncte trece <b>o singură dreaptă</b>; prin trei puncte necoliniare <b>un singur plan</b>.</li>\n<li><b>Segmentul</b> are două capete și se măsoară; dreapta și semidreapta nu.</li>\n<li>Drepte în plan: <b>concurente, perpendiculare, paralele</b>; în spațiu și <b>necoplanare</b>.</li>\n<li>Unghiuri: ascuțit (&lt;90°), drept (90°), obtuz, alungit (180°), plin (360°).</li>\n<li>Complementare 90°, suplementare 180°, conjugate 360°; opuse la vârf = congruente.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Noțiune primară",
   "d": "Concept de bază care nu se definește (punct, dreaptă, plan)."
  },
  {
   "t": "Postulat",
   "d": "Afirmație acceptată ca adevărată fără demonstrație."
  },
  {
   "t": "Semidreaptă",
   "d": "Fiecare dintre cele două părți în care un punct împarte o dreaptă."
  },
  {
   "t": "Segment",
   "d": "Parte de dreaptă cuprinsă între două puncte, numite capete."
  },
  {
   "t": "Mijlocul segmentului",
   "d": "Punctul care împarte un segment în două părți congruente."
  },
  {
   "t": "Congruente",
   "d": "Figuri care se suprapun punct cu punct (aceeași formă și măsură)."
  },
  {
   "t": "Drepte necoplanare",
   "d": "Drepte din spațiu care nu se întâlnesc și nu sunt paralele."
  },
  {
   "t": "Unghi",
   "d": "Parte de plan cuprinsă între două semidrepte cu aceeași origine."
  },
  {
   "t": "Raportor",
   "d": "Instrument pentru măsurarea unghiurilor în grade."
  },
  {
   "t": "Sistem sexagesimal",
   "d": "Sistem în baza 60: 1° = 60 de minute, 1 minut = 60 de secunde."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Care dintre aceste noțiuni se notează cu o literă mică?",
    "options": [
     "Punctul",
     "Dreapta",
     "Planul"
    ],
    "answer": 1,
    "explain": "Dreptele se notează cu litere mici (r, s), punctele cu litere mari, planele cu litere grecești."
   },
   {
    "type": "tf",
    "q": "Prin trei puncte necoliniare trece un plan și numai unul.",
    "answer": true,
    "explain": "Este un postulat: de aceea un taburet cu 3 picioare nu se clatină."
   },
   {
    "type": "mc",
    "q": "Două segmente consecutive care se află pe aceeași dreaptă se numesc…",
    "options": [
     "congruente",
     "adiacente",
     "secante",
     "paralele"
    ],
    "answer": 1,
    "explain": "Sunt adiacente: consecutive și coliniare."
   },
   {
    "type": "num",
    "q": "Segmentul AB măsoară 18 cm. Cât măsoară AM, dacă M este mijlocul?",
    "answer": 9,
    "unit": "cm",
    "explain": "Mijlocul împarte segmentul în două: 18 : 2 = 9 cm."
   },
   {
    "type": "num",
    "q": "AB + BC = 30 cm și AB este cu 6 cm mai mare decât BC. Cât măsoară BC?",
    "answer": 12,
    "unit": "cm",
    "explain": "BC = (30 − 6) : 2 = 12 cm; AB = 18 cm."
   },
   {
    "type": "text",
    "q": "Cum se numesc două drepte din spațiu care nu se întâlnesc și nu sunt paralele?",
    "answer": [
     "necoplanare",
     "drepte necoplanare"
    ],
    "explain": "Sunt dreptele necoplanare: nu se află în același plan."
   },
   {
    "type": "num",
    "q": "Care este complementul unui unghi de 37°?",
    "answer": 53,
    "unit": "°",
    "explain": "90° − 37° = 53°."
   },
   {
    "type": "num",
    "q": "Care este conjugatul unui unghi de 210°?",
    "answer": 150,
    "unit": "°",
    "explain": "360° − 210° = 150°."
   },
   {
    "type": "mc",
    "q": "Cât face 25°50′ + 14°20′?",
    "options": [
     "39°70′",
     "40°10′",
     "39°10′",
     "40°70′"
    ],
    "answer": 1,
    "explain": "25°50′ + 14°20′ = 39°70′ = 40°10′, pentru că 60′ = 1°."
   },
   {
    "type": "num",
    "q": "Câte grade formează acele unui ceas la ora 4:00?",
    "answer": 120,
    "unit": "°",
    "explain": "Fiecare oră valorează 30°: 4 × 30° = 120°."
   },
   {
    "type": "tf",
    "q": "Două drepte perpendiculare formează patru unghiuri ascuțite.",
    "answer": false,
    "explain": "Formează patru unghiuri drepte (90°)."
   },
   {
    "type": "order",
    "q": "Pune unghiurile de la cel mai mic la cel mai mare.",
    "items": [
     "ascuțit",
     "drept",
     "obtuz",
     "alungit",
     "plin"
    ],
    "explain": "Ascuțit (<90°), drept (90°), obtuz (90°–180°), alungit (180°), plin (360°)."
   }
  ]
 }
});
