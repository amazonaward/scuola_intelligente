TOPIC('ro', {
 "id": "m2-mat-pitagora",
 "title": "Teorema lui Pitagora",
 "intro": "Teorema lui Pitagora este una dintre cele mai faimoase descoperiri ale matematicii: leagă cele trei laturi ale oricărui <b>triunghi dreptunghic</b> și ne permite să calculăm distanțe pe care nu le putem măsura direct.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Triunghiul dreptunghic",
   "html": "<p>Un <b>triunghi dreptunghic</b> are un unghi drept (90°). Laturile lui au nume speciale:</p><ul><li>cele două laturi care formează unghiul drept se numesc <b>catete</b> (le notăm cu <i>a</i> și <i>b</i>);</li><li>latura opusă unghiului drept este <b>ipotenuza</b> (<i>c</i>): este întotdeauna latura cea mai lungă.</li></ul><p>Pitagora a fost un matematician și filozof grec care a trăit în secolul al VI-lea î.Hr. la Crotona, în sudul Italiei.</p>"
  },
  {
   "type": "svg",
   "title": "Catete și ipotenuză",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><polygon points=\"150,250 450,250 150,50\" fill=\"#dbeafe\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><rect x=\"150\" y=\"225\" width=\"25\" height=\"25\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"300\" y=\"280\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">cateta b</text><text x=\"95\" y=\"155\" font-size=\"20\" fill=\"#b91c1c\" text-anchor=\"middle\" font-family=\"sans-serif\">cateta a</text><text x=\"330\" y=\"135\" font-size=\"20\" fill=\"#15803d\" font-family=\"sans-serif\">ipotenuza c</text><text x=\"190\" y=\"240\" font-size=\"16\" fill=\"#1e3a8a\" font-family=\"sans-serif\">90°</text></svg>",
   "caption": "Catetele formează unghiul drept; ipotenuza se află în fața lui."
  },
  {
   "type": "remember",
   "title": "Enunțul",
   "html": "<p>În orice triunghi dreptunghic <b>pătratul construit pe ipotenuză este echivalent cu suma pătratelor construite pe catete</b>.</p><p style=\"font-size:1.3em;text-align:center\"><b>c² = a² + b²</b></p><p>Formulele inverse: <b>c = √(a² + b²)</b> &nbsp; <b>a = √(c² − b²)</b> &nbsp; <b>b = √(c² − a²)</b></p>"
  },
  {
   "type": "svg",
   "title": "Demonstrația cu pătrate (3, 4, 5)",
   "svg": "<svg viewBox=\"0 0 600 370\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"370\" fill=\"#ffffff\"/><g stroke=\"#334155\" stroke-width=\"2\"><rect x=\"150\" y=\"230\" width=\"120\" height=\"120\" fill=\"#fde68a\"/><rect x=\"60\" y=\"140\" width=\"90\" height=\"90\" fill=\"#bfdbfe\"/><polygon points=\"150,140 270,230 360,110 240,20\" fill=\"#bbf7d0\"/><polygon points=\"150,230 270,230 150,140\" fill=\"#e2e8f0\" stroke-width=\"3\"/></g><text x=\"210\" y=\"297\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">b² = 16</text><text x=\"105\" y=\"192\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">a² = 9</text><text x=\"255\" y=\"130\" font-size=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\">c² = 25</text><text x=\"400\" y=\"220\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e3a8a\">a = 3, b = 4, c = 5</text><text x=\"400\" y=\"255\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#15803d\">9 + 16 = 25 ✔</text><text x=\"400\" y=\"290\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">aria galbenă + aria albastră</text><text x=\"400\" y=\"312\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\">= aria verde</text></svg>",
   "caption": "Construind un pătrat pe fiecare latură, aria pătratului verde (pe ipotenuză) este egală cu suma celorlalte două."
  },
  {
   "type": "widget",
   "title": "Încearcă tu: mișcă catetele",
   "widget": "pythagoras",
   "options": {
    "a": 3,
    "b": 4
   },
   "caption": "Schimbă lungimea catetelor și observă cum se schimbă pătratele: suma ariilor mici este mereu egală cu aria mare."
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege: 6 demonstrații din lume",
   "intro": "Teorema lui Pitagora are peste 350 de demonstrații diferite! Dacă una nu te convinge, încearcă alta: fiecăruia îi „face clic” cea potrivită.",
   "tabs": [
    {
     "label": "🇨🇳 China: Gougu",
     "html": "<p>În <b>Zhou Bi Suan Jing</b>, un vechi text chinezesc de astronomie și matematică (conținutul lui datează de acum aproximativ 2000 de ani), teorema se numește <b>Gougu</b> (gou = cateta scurtă, gu = cateta lungă). Figura clasică este un pătrat cu latura a + b care conține patru triunghiuri egale: spațiul din mijloc este pătratul ipotenuzei.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#fffbeb\"/><g transform=\"translate(40,20)\"><rect x=\"0\" y=\"0\" width=\"260\" height=\"260\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><polygon points=\"0,0 100,0 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,0 260,100\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"260,100 260,260 160,260\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"160,260 0,260 0,160\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,0 260,100 160,260 0,160\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/><text x=\"130\" y=\"138\" font-size=\"28\" text-anchor=\"middle\" fill=\"#7f1d1d\" font-weight=\"bold\">c²</text><text x=\"50\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">a</text><text x=\"180\" y=\"-4\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1e3a8a\">b</text></g><text x=\"330\" y=\"70\" font-size=\"18\" fill=\"#1f2937\">Pătratul mare: latura a + b</text><text x=\"330\" y=\"105\" font-size=\"18\" fill=\"#1f2937\">Aria = (a + b)²</text><text x=\"330\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">= 4 triunghiuri + pătratul c²</text><text x=\"330\" y=\"175\" font-size=\"18\" fill=\"#1f2937\">= 4 · (a·b : 2) + c²</text><text x=\"330\" y=\"220\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">a² + 2ab + b² = 2ab + c²</text><text x=\"330\" y=\"255\" font-size=\"20\" fill=\"#b91c1c\" font-weight=\"bold\">a² + b² = c²</text></svg>"
    },
    {
     "label": "🏛️ Euclid",
     "html": "<p>În <b>Elementele</b> (cca 300 î.Hr.), propoziția I.47, Euclid duce din vârful unghiului drept o dreaptă perpendiculară pe ipotenuză. Aceasta împarte pătratul mare în două dreptunghiuri și, cu triunghiuri congruente, demonstrează că fiecare dreptunghi este <b>echivalent</b> (are aceeași arie) cu pătratul de pe una dintre catete. Este „figura morii de vânt”.</p>",
     "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#f5f3ff\"/><g transform=\"translate(150,30)\"><polygon points=\"0,90 120,90 0,0\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"2\"/><polygon points=\"0,0 -90,0 -90,90 0,90\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,0 120,90 210,-30 90,-120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\" opacity=\".8\"/><polygon points=\"0,90 120,90 120,210 0,210\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\" opacity=\".8\"/><line x1=\"0\" y1=\"90\" x2=\"133\" y2=\"-88\" stroke=\"#7c3aed\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"-45\" y=\"50\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">a²</text><text x=\"60\" y=\"160\" font-size=\"20\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\">b²</text><text x=\"105\" y=\"-15\" font-size=\"20\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">c²</text></g><text x=\"360\" y=\"200\" font-size=\"16\" fill=\"#1f2937\">Linia violet, din vârful</text><text x=\"360\" y=\"222\" font-size=\"16\" fill=\"#1f2937\">unghiului drept, împarte c²</text><text x=\"360\" y=\"244\" font-size=\"16\" fill=\"#1f2937\">în două dreptunghiuri: unul valorează a²,</text><text x=\"360\" y=\"266\" font-size=\"16\" fill=\"#1f2937\">celălalt valorează b² (Elementele, I.47)</text></svg>"
    },
    {
     "label": "🇺🇸 Președintele Garfield",
     "html": "<p>În 1876 deputatul (și viitorul președinte al Statelor Unite) <b>James Garfield</b> a găsit o demonstrație cu un <b>trapez</b> format din două triunghiuri dreptunghice egale și un triunghi isoscel. Calculând aria trapezului în două moduri diferite se obține teorema.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#ecfeff\"/><g transform=\"translate(40,30)\"><polygon points=\"0,240 0,80 100,240\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"100,240 260,240 260,140\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"0,80 100,240 260,140\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"2\"/><line x1=\"0\" y1=\"80\" x2=\"260\" y2=\"140\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"-12\" y=\"165\" font-size=\"16\" fill=\"#1e3a8a\">a</text><text x=\"45\" y=\"262\" font-size=\"16\" fill=\"#1e3a8a\">b</text><text x=\"175\" y=\"262\" font-size=\"16\" fill=\"#92400e\">a</text><text x=\"268\" y=\"195\" font-size=\"16\" fill=\"#92400e\">b</text><text x=\"120\" y=\"160\" font-size=\"20\" fill=\"#7f1d1d\" font-weight=\"bold\">c²/2</text></g><text x=\"340\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">Trapez cu bazele a și b, înălțimea a + b</text><text x=\"340\" y=\"115\" font-size=\"17\" fill=\"#1f2937\">Aria = (a + b)(a + b) : 2</text><text x=\"340\" y=\"150\" font-size=\"17\" fill=\"#1f2937\">= ab/2 + ab/2 + c²/2</text><text x=\"340\" y=\"195\" font-size=\"18\" fill=\"#b91c1c\" font-weight=\"bold\">→ a² + b² = c²</text><text x=\"340\" y=\"240\" font-size=\"14\" fill=\"#475569\">James Garfield, 1876 (apoi președinte al SUA)</text></svg>"
    },
    {
     "label": "🧩 Puzzle",
     "html": "<p>Ia <b>4 triunghiuri dreptunghice egale</b> și un pătrat cu latura a + b. Așezate într-un fel, lasă libere două pătrate, a² și b². Așezate în alt fel, lasă liber un singur pătrat înclinat, c². Spațiul liber este același, deci <b>a² + b² = c²</b>. Fără calcule, doar cu ochii!</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f0fdf4\"/><g transform=\"translate(30,20)\"><rect width=\"240\" height=\"240\" fill=\"#fff\" stroke=\"#14532d\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"90\" height=\"90\" fill=\"#93c5fd\"/><rect x=\"90\" y=\"90\" width=\"150\" height=\"150\" fill=\"#86efac\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 90,90 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"0,90 90,90 0,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,90 90,240 0,240\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"45\" y=\"52\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1e3a8a\">a²</text><text x=\"165\" y=\"172\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#166534\">b²</text></g><g transform=\"translate(330,20)\"><rect width=\"240\" height=\"240\" fill=\"#fca5a5\" stroke=\"#14532d\" stroke-width=\"3\"/><polygon points=\"0,0 90,0 0,150\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"90,0 240,0 240,90\" fill=\"#fcd34d\" stroke=\"#92400e\"/><polygon points=\"240,90 240,240 150,240\" fill=\"#fde68a\" stroke=\"#92400e\"/><polygon points=\"150,240 0,240 0,150\" fill=\"#fcd34d\" stroke=\"#92400e\"/><text x=\"120\" y=\"128\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7f1d1d\">c²</text></g><text x=\"300\" y=\"275\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Aceleași 4 triunghiuri, același pătrat: spațiul liber este egal!</text></svg>"
    },
    {
     "label": "🪢 Sfoara egipteană",
     "html": "<p>Constructorii și topografii din Egiptul antic („harpedonapții”, întinzătorii de sfori) ar fi folosit, după o tradiție, o sfoară cu <b>12 bucăți egale</b> despărțite de noduri. Întinzând-o în forma unui triunghi cu laturile 3, 4 și 5 se obține un <b>unghi drept</b> perfect: util pentru a trasa câmpuri și fundații. Este <b>reciproca teoremei</b> în acțiune: dacă 3² + 4² = 5², triunghiul este dreptunghic. Și astăzi zidarii folosesc trucul „3-4-5” cu ruleta.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><polyline points=\"100,250 340,250 100,70 100,250\" fill=\"#fed7aa\" stroke=\"#9a3412\" stroke-width=\"5\"/><circle cx=\"100\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"160\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"220\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"280\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"340\" cy=\"250\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"190\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"130\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"100\" cy=\"70\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"148\" cy=\"106\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"196\" cy=\"142\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"244\" cy=\"178\" r=\"7\" fill=\"#7c2d12\"/><circle cx=\"292\" cy=\"214\" r=\"7\" fill=\"#7c2d12\"/><rect x=\"100\" y=\"230\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\"/><text x=\"220\" y=\"282\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">4 bucăți</text><text x=\"70\" y=\"165\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">3 bucăți</text><text x=\"250\" y=\"140\" font-size=\"18\" fill=\"#1f2937\">5 bucăți</text><text x=\"380\" y=\"110\" font-size=\"17\" fill=\"#1f2937\">Sfoară cu 12 bucăți egale</text><text x=\"380\" y=\"140\" font-size=\"17\" fill=\"#1f2937\">întinsă în triunghi 3-4-5:</text><text x=\"380\" y=\"170\" font-size=\"17\" fill=\"#b91c1c\" font-weight=\"bold\">unghi drept garantat!</text></svg>"
    },
    {
     "label": "🧊 Cu cuburi 3D",
     "html": "<p>Pătratul 3 × 3 are <b>9</b> cuburi, cel de 4 × 4 are <b>16</b>. Împreună fac 25: exact câte trebuie ca să umpli pătratul de <b>5 × 5</b> construit pe ipotenuză. Încearcă să schimbi numerele cu cursoarele: cu 6 și 8 sunt necesare 36 + 64 = 100 de cuburi, adică un pătrat de 10 × 10.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 5,
      "b": 5
     }
    }
   ]
  },
  {
   "type": "text",
   "title": "2. Cum se folosește: pas cu pas",
   "html": "<p><b>Aflarea ipotenuzei</b> (cunosc cele două catete):</p><ol><li>ridic la pătrat fiecare catetă;</li><li>adun cele două pătrate;</li><li>extrag rădăcina pătrată.</li></ol><p><b>Aflarea unei catete</b> (cunosc ipotenuza și cealaltă catetă):</p><ol><li>ridic la pătrat ipotenuza și cateta cunoscută;</li><li><b>scad</b> pătratul catetei din pătratul ipotenuzei;</li><li>extrag rădăcina pătrată.</li></ol><p>Atenție: pentru catetă se <b>scade</b>, pentru ipotenuză se <b>adună</b>!</p>"
  },
  {
   "type": "example",
   "title": "Exemplu: scara sprijinită de perete",
   "html": "<p>O scară lungă de <b>5 m</b> este sprijinită de un perete; piciorul scării este la <b>3 m</b> de perete. La ce înălțime ajunge?</p><p>Scara este ipotenuza, distanța până la perete este o catetă: <br>h = √(5² − 3²) = √(25 − 9) = √16 = <b>4 m</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu: diagonala ecranului",
   "html": "<p>Inchii unui televizor indică <b>diagonala</b>. Un ecran lat de 88,6 cm și înalt de 49,8 cm are diagonala:</p><p>d = √(88,6² + 49,8²) = √(7849,96 + 2480,04) = √10330 ≈ <b>101,6 cm</b>, adică aproximativ 40 de inchi (1 inch = 2,54 cm).</p><p>La fel se calculează diagonala unui dreptunghi sau a unui pătrat: într-un pătrat cu latura <i>l</i>, d = l·√2 ≈ l × 1,414.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test 1",
   "questions": [
    {
     "type": "mc",
     "q": "Care este latura cea mai lungă a unui triunghi dreptunghic?",
     "options": [
      "Cateta mai mare",
      "Ipotenuza",
      "Depinde de triunghi"
     ],
     "answer": 1,
     "explain": "Ipotenuza se află în fața unghiului drept, cel mai mare din triunghi, deci este mereu latura cea mai lungă."
    },
    {
     "type": "num",
     "q": "Catetele au 6 cm și 8 cm. Cât măsoară ipotenuza?",
     "answer": 10,
     "tol": 0,
     "unit": "cm",
     "explain": "√(36 + 64) = √100 = 10 cm."
    },
    {
     "type": "tf",
     "q": "Teorema lui Pitagora este adevărată pentru toate triunghiurile.",
     "answer": false,
     "explain": "Este adevărată doar pentru triunghiurile dreptunghice."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Tripletele pitagoreice",
   "html": "<p>Un <b>triplet pitagoreic</b> este un grup de trei numere naturale care verifică a² + b² = c². Cele mai folosite:</p><table><tr><th>a</th><th>b</th><th>c</th></tr><tr><td>3</td><td>4</td><td>5</td></tr><tr><td>5</td><td>12</td><td>13</td></tr><tr><td>8</td><td>15</td><td>17</td></tr><tr><td>7</td><td>24</td><td>25</td></tr><tr><td>20</td><td>21</td><td>29</td></tr></table><p>Înmulțind un triplet cu același număr se obține alt triplet: 3-4-5 × 2 = <b>6-8-10</b>, × 3 = <b>9-12-15</b>.</p><p>Teorema funcționează și invers: dacă a² + b² = c², triunghiul este <b>dreptunghic</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Sfoara cu 12 noduri",
   "html": "<p>Vechii egipteni, ca să traseze unghiuri drepte pe câmpuri după revărsările Nilului, foloseau o sfoară cu <b>12 noduri</b> la distanțe egale: întinzând-o în forma unui triunghi cu laturile 3, 4 și 5 obțineau un unghi drept perfect. Zidarii folosesc și astăzi acest truc (3-4-5 metri) ca să verifice dacă pereții sunt în echer.</p>"
  },
  {
   "type": "curiosity",
   "title": "Peste 370 de demonstrații",
   "html": "<p>Teorema este cunoscută de cel puțin 3800 de ani: tăblița babiloniană <b>Plimpton 322</b> conține triplete pitagoreice. În 1940 matematicianul Elisha Loomis a adunat <b>367 de demonstrații</b> diferite; una a fost găsită chiar de un președinte al Statelor Unite, James Garfield, în 1876.</p>"
  },
  {
   "type": "text",
   "title": "4. Aplicații în geometrie",
   "html": "<ul><li><b>Diagonala dreptunghiului</b>: d = √(L² + l²).</li><li><b>Înălțimea triunghiului echilateral</b> cu latura l: h = √(l² − (l/2)²) ≈ l × 0,866.</li><li><b>Latura oblică a trapezului dreptunghic</b>: se folosește triunghiul format de înălțime și diferența bazelor.</li><li><b>Distanța dintre două puncte</b> în sistemul de axe: d = √((x₂−x₁)² + (y₂−y₁)²).</li><li><b>Diagonala cubului</b> cu muchia l: D = l·√3.</li></ul>"
  },
  {
   "type": "conceptMap",
   "title": "Hartă conceptuală: de unde vine teorema?",
   "nodes": [
    {
     "id": "def",
     "label": "Definiții: punct, dreaptă, plan",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "<p>Obiectele de bază ale geometriei.</p>",
     "why": "<p>Euclid începe Elementele cu 23 de definiții („punctul este ceea ce nu are părți”). Ele nu se pot demonstra: sunt vocabularul comun de la care pornim.</p>"
    },
    {
     "id": "post",
     "label": "Primele 4 postulate ale lui Euclid",
     "x": 22,
     "y": 24,
     "color": "#a855f7",
     "html": "<p>Prin două puncte trece o dreaptă; un segment se poate prelungi; se poate trasa un cerc; toate unghiurile drepte sunt egale.</p>",
     "why": "<p>Un <b>postulat</b> (sau axiomă) este o regulă acceptată fără demonstrație pentru că pare evidentă. Orice teoremă trebuie să se sprijine pe ceva: dacă am vrea să demonstrăm totul la nesfârșit, n-am porni niciodată. Euclid a ales foarte puține reguli și din ele a dedus sute de teoreme.</p>"
    },
    {
     "id": "quinto",
     "label": "Postulatul 5: paralelele",
     "x": 78,
     "y": 24,
     "color": "#7c3aed",
     "html": "<p>Printr-un punct exterior unei drepte trece <b>o singură</b> paralelă (în forma lui Playfair).</p>",
     "why": "<p>Timp de peste 2000 de ani matematicienii au încercat să-l demonstreze pornind de la celelalte patru, fără succes. În secolul al XIX-lea Lobacevski, Bolyai și Gauss au înțeles de ce: el poate fi <b>înlocuit</b> cu un alt postulat, obținând geometrii la fel de coerente! (János Bolyai s-a născut la Cluj.)</p>"
    },
    {
     "id": "angoli",
     "label": "Suma unghiurilor = 180°",
     "x": 78,
     "y": 46,
     "color": "#2563eb",
     "html": "<p>În orice triunghi unghiurile interioare au suma de 180°.</p>",
     "why": "<p>Se demonstrează ducând paralela la o latură: sunt necesare unghiurile alterne interne, care depind tocmai de postulatul 5.</p>"
    },
    {
     "id": "aree",
     "label": "Arii și figuri echivalente",
     "x": 22,
     "y": 46,
     "color": "#0d9488",
     "html": "<p>Figurile descompuse în aceleași bucăți au aceeași arie; dreptunghiul are aria L × l.</p>",
     "why": "<p>Euclid compară ariile mutând și recompunând figuri congruente (criteriile de congruență a triunghiurilor). Și dreptunghiurile și pătratele „funcționează” bine doar în geometria cu postulatul 5.</p>"
    },
    {
     "id": "pit",
     "label": "Teorema lui Pitagora",
     "x": 50,
     "y": 66,
     "color": "#dc2626",
     "html": "<p>c² = a² + b² în triunghiurile dreptunghice.</p>",
     "why": "<p>Se demonstrează combinând arii echivalente (Euclid, I.47) sau asemănarea triunghiurilor. Este atribuită lui Pitagora (sec. al VI-lea î.Hr.), dar babilonienii cunoșteau deja triplete ca 3-4-5: tăblița <b>Plimpton 322</b> (cca 1800 î.Hr.) enumeră multe. Meritul grecilor este <b>demonstrația</b> generală, nu doar exemplul.</p>"
    },
    {
     "id": "inverso",
     "label": "Reciproca teoremei",
     "x": 18,
     "y": 86,
     "color": "#ea580c",
     "html": "<p>Dacă a² + b² = c², triunghiul este dreptunghic.</p>",
     "why": "<p>Este propoziția I.48 a lui Euclid. Servește la construirea unghiurilor drepte (sfoara 3-4-5) și la verificarea dacă un triunghi este dreptunghic.</p>"
    },
    {
     "id": "distanza",
     "label": "Distanța în sistemul de axe",
     "x": 50,
     "y": 92,
     "color": "#16a34a",
     "html": "<p>d = √((x₂ − x₁)² + (y₂ − y₁)²)</p>",
     "why": "<p>Deplasarea orizontală și cea verticală sunt catetele unui triunghi dreptunghic: distanța este ipotenuza. Așa funcționează și GPS-ul, jocurile video și hărțile digitale.</p>"
    },
    {
     "id": "noneuclide",
     "label": "Geometrii neeuclidiene",
     "x": 84,
     "y": 82,
     "color": "#be185d",
     "html": "<p>Pe o sferă, teorema lui Pitagora <b>nu este adevărată</b>.</p>",
     "why": "<p>Pe suprafața Pământului, un triunghi cu un vârf la Polul Nord și două pe ecuator poate avea <b>trei unghiuri drepte</b> (suma 270°). Schimbând postulatul 5 se schimbă și Pitagora, și suma unghiurilor. Einstein a folosit tocmai o geometrie neeuclidiană ca să descrie spațiu-timpul curbat în relativitatea generală (1915).</p>"
    }
   ],
   "edges": [
    [
     "def",
     "post",
     "baza pentru"
    ],
    [
     "def",
     "quinto",
     "baza pentru"
    ],
    [
     "post",
     "aree",
     "permit"
    ],
    [
     "quinto",
     "angoli",
     "demonstrează"
    ],
    [
     "aree",
     "pit",
     "demonstrează"
    ],
    [
     "angoli",
     "pit",
     "servesc la"
    ],
    [
     "pit",
     "inverso",
     "se inversează"
    ],
    [
     "pit",
     "distanza",
     "se aplică"
    ],
    [
     "quinto",
     "noneuclide",
     "dacă îl schimbi…"
    ],
    [
     "noneuclide",
     "pit",
     "nu mai e valabilă"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test 2",
   "questions": [
    {
     "type": "num",
     "q": "Ipotenuza 13 cm, o catetă 5 cm. Cât măsoară cealaltă catetă?",
     "answer": 12,
     "tol": 0,
     "unit": "cm",
     "explain": "√(169 − 25) = √144 = 12 cm."
    },
    {
     "type": "mc",
     "q": "Care dintre acestea este un triplet pitagoreic?",
     "options": [
      "4, 5, 6",
      "6, 8, 10",
      "2, 3, 4"
     ],
     "answer": 1,
     "explain": "36 + 64 = 100 = 10². Este dublul tripletului 3-4-5."
    },
    {
     "type": "num",
     "q": "Dreptunghi cu lungimea 12 cm și lățimea 5 cm: cât măsoară diagonala?",
     "answer": 13,
     "tol": 0,
     "unit": "cm",
     "explain": "√(144 + 25) = √169 = 13 cm."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Triunghi dreptunghic",
   "d": "Triunghi cu un unghi de 90°."
  },
  {
   "t": "Catete",
   "d": "Cele două laturi care formează unghiul drept."
  },
  {
   "t": "Ipotenuză",
   "d": "Latura opusă unghiului drept; este cea mai lungă."
  },
  {
   "t": "Triplet pitagoreic",
   "d": "Trei numere naturale a, b, c astfel încât a² + b² = c²."
  },
  {
   "t": "Rădăcina pătrată",
   "d": "Numărul care, înmulțit cu el însuși, dă numărul de pornire: √49 = 7."
  },
  {
   "t": "Echivalent",
   "d": "Care are aceeași arie (sau același volum), chiar dacă forma este diferită."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Teorema lui Pitagora se scrie:",
    "options": [
     "c = a + b",
     "c² = a² + b²",
     "a² = b² + c²",
     "c² = a² − b²"
    ],
    "answer": 1,
    "explain": "Pătratul ipotenuzei (c) este egal cu suma pătratelor catetelor."
   },
   {
    "type": "num",
    "q": "Catetele 9 cm și 12 cm. Ipotenuza?",
    "answer": 15,
    "tol": 0,
    "unit": "cm",
    "explain": "√(81 + 144) = √225 = 15 cm (tripletul 3-4-5 × 3)."
   },
   {
    "type": "num",
    "q": "Ipotenuza 17 cm, o catetă 8 cm. Cealaltă catetă?",
    "answer": 15,
    "tol": 0,
    "unit": "cm",
    "explain": "√(289 − 64) = √225 = 15 cm."
   },
   {
    "type": "tf",
    "q": "Un triunghi cu laturile 5, 12, 13 este dreptunghic.",
    "answer": true,
    "explain": "25 + 144 = 169 = 13²: se aplică reciproca teoremei."
   },
   {
    "type": "tf",
    "q": "Un triunghi cu laturile 4, 6, 7 este dreptunghic.",
    "answer": false,
    "explain": "16 + 36 = 52, dar 7² = 49: nu sunt egale."
   },
   {
    "type": "num",
    "q": "Latura unui pătrat este de 10 cm. Diagonala (rotunjește la zecimi)?",
    "answer": 14.1,
    "tol": 0.05,
    "unit": "cm",
    "explain": "d = 10 × √2 ≈ 14,1 cm."
   },
   {
    "type": "mc",
    "q": "Ca să aflu o catetă cunoscând ipotenuza și cealaltă catetă trebuie să:",
    "options": [
     "adun pătratele",
     "scad pătratele",
     "adun laturile",
     "înmulțesc laturile"
    ],
    "answer": 1,
    "explain": "a = √(c² − b²): se scade pătratul catetei cunoscute din pătratul ipotenuzei."
   },
   {
    "type": "num",
    "q": "O scară de 10 m are piciorul la 6 m de perete. La ce înălțime ajunge?",
    "answer": 8,
    "tol": 0,
    "unit": "m",
    "explain": "√(100 − 36) = √64 = 8 m."
   },
   {
    "type": "text",
    "q": "Cum se numește latura opusă unghiului drept?",
    "answer": [
     "ipotenuza",
     "ipotenuză"
    ],
    "explain": "Este ipotenuza."
   },
   {
    "type": "order",
    "q": "Pune în ordine pașii pentru a calcula ipotenuza",
    "items": [
     "Ridic la pătrat catetele",
     "Adun pătratele",
     "Extrag rădăcina pătrată"
    ],
    "explain": "Întâi pătratele, apoi suma, la sfârșit rădăcina."
   }
  ],
  "gen": [
   [
    "pythagoras",
    2
   ]
  ]
 }
});
