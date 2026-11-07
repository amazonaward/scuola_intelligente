TOPIC('ro', {
 "id": "m1-mat-triangoli",
 "title": "Triunghiurile",
 "intro": "<b>Triunghiul</b> este cel mai simplu poligon: doar 3 laturi și 3 unghiuri. Și totuși este cea mai „puternică” figură din geometrie: este rigid, nu se deformează și de aceea îl găsești în poduri, în macarale și în acoperișuri. Să descoperim cum se clasifică, de ce unghiurile lui fac mereu 180° și care sunt <b>punctele lui remarcabile</b>.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "1. Ce este un triunghi",
   "html": "<p>Un <b>triunghi</b> este un poligon cu <b>3 laturi</b>, <b>3 vârfuri</b> și <b>3 unghiuri interioare</b>. Se notează cu literele vârfurilor: triunghiul <b>ABC</b>.</p>\n<ul>\n<li>Laturile opuse vârfurilor A, B, C se notează adesea cu literele mici <b>a, b, c</b>.</li>\n<li>Unghiurile interioare se notează cu <b>α, β, γ</b> (sau Â, B̂, Ĉ).</li>\n<li><b>Perimetrul</b> este suma laturilor: 2p = a + b + c.</li>\n</ul>\n<p><b>Inegalitatea triunghiului.</b> Nu orice trei segmente formează un triunghi! Fiecare latură trebuie să fie <b>mai mică decât suma</b> celorlalte două (și mai mare decât diferența lor).</p>\n<p>Cu 3, 4 și 5 cm triunghiul se poate construi (5 &lt; 3 + 4). Cu 2, 3 și 7 cm nu: 7 este mai lung decât 2 + 3 = 5 și cele două laturi scurte nu reușesc să se „închidă”.</p>"
  },
  {
   "type": "text",
   "title": "2. Suma unghiurilor interioare este 180°",
   "html": "<p>În <b>orice</b> triunghi, mare sau mic, suma unghiurilor interioare este întotdeauna <b>180°</b>, adică un unghi alungit:</p>\n<p style=\"text-align:center\"><b>α + β + γ = 180°</b></p>\n<p><b>De ce?</b> Desenează prin vârful C dreapta <b>paralelă</b> cu latura AB. În jurul lui C se formează un unghi alungit împărțit în trei părți: cea din mijloc este γ, iar cele două laterale sunt congruente cu α și cu β (sunt unghiuri <i>alterne interne</i> între drepte paralele). Deci α + β + γ = un unghi alungit = 180°. Este teorema 32 din prima carte a <b>Elementelor</b> lui Euclid.</p>\n<p><b>Consecințe utile:</b></p>\n<ul>\n<li>dacă știi două unghiuri, îl găsești pe al treilea: γ = 180° − α − β;</li>\n<li>un triunghi poate avea cel mult <b>un</b> unghi drept sau obtuz;</li>\n<li><b>unghiul exterior</b> (format dintr-o latură și prelungirea alteia) este egal cu <b>suma celor două unghiuri interioare neadiacente</b>.</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "Demonstrația cu paralela",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/>\n<line x1=\"40\" y1=\"60\" x2=\"560\" y2=\"60\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<polygon points=\"110,250 500,250 330,60\" fill=\"#fde68a\" stroke=\"#111827\" stroke-width=\"4\"/>\n<path d=\"M160 250 A50 50 0 0 0 147 220\" stroke=\"#dc2626\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M450 250 A50 50 0 0 1 468 214\" stroke=\"#2563eb\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M310 82 A30 30 0 0 0 350 83\" stroke=\"#9333ea\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M290 60 A40 40 0 0 0 300 87\" stroke=\"#dc2626\" stroke-width=\"5\" fill=\"none\"/>\n<path d=\"M370 60 A40 40 0 0 1 356 89\" stroke=\"#2563eb\" stroke-width=\"5\" fill=\"none\"/>\n<text x=\"175\" y=\"238\" font-size=\"22\" fill=\"#dc2626\" font-weight=\"bold\">α</text>\n<text x=\"420\" y=\"238\" font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n<text x=\"322\" y=\"115\" font-size=\"22\" fill=\"#9333ea\" font-weight=\"bold\">γ</text>\n<text x=\"262\" y=\"88\" font-size=\"22\" fill=\"#dc2626\" font-weight=\"bold\">α</text>\n<text x=\"380\" y=\"88\" font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\">β</text>\n<text x=\"95\" y=\"275\" font-size=\"18\" font-weight=\"bold\">A</text>\n<text x=\"505\" y=\"275\" font-size=\"18\" font-weight=\"bold\">B</text>\n<text x=\"322\" y=\"48\" font-size=\"18\" font-weight=\"bold\">C</text>\n<text x=\"60\" y=\"40\" font-size=\"16\" fill=\"#16a34a\">dreapta paralelă cu AB care trece prin C</text>\n<text x=\"300\" y=\"295\" font-size=\"18\" text-anchor=\"middle\" fill=\"#111827\">α + γ + β = unghi alungit = 180°</text>\n</svg>",
   "caption": "Sus, în jurul lui C, cele trei unghiuri α, γ, β formează un unghi alungit."
  },
  {
   "type": "example",
   "title": "Exemplu practic: aflarea unghiului lipsă",
   "html": "<p><b>1.</b> Un triunghi are α = 48° și β = 67°. Atunci γ = 180° − 48° − 67° = <b>65°</b>.</p>\n<p><b>2.</b> Într-un triunghi <b>isoscel</b> unghiul din vârf măsoară 40°. Unghiurile de la bază sunt egale: (180° − 40°) : 2 = <b>70°</b> fiecare.</p>\n<p><b>3.</b> Într-un triunghi <b>dreptunghic</b> un unghi ascuțit este de 35°. Celălalt este 90° − 35° = <b>55°</b>: cele două unghiuri ascuțite ale unui triunghi dreptunghic sunt întotdeauna <b>complementare</b>.</p>\n<p><b>4.</b> Unghiul exterior: dacă două unghiuri interioare sunt de 50° și 60°, unghiul exterior de la al treilea vârf este 50° + 60° = <b>110°</b>.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: laturi și unghiuri",
   "questions": [
    {
     "type": "num",
     "q": "Două unghiuri ale unui triunghi măsoară 72° și 38°. Cât măsoară al treilea?",
     "answer": 70,
     "unit": "°",
     "explain": "180° − 72° − 38° = 70°."
    },
    {
     "type": "tf",
     "q": "Cu segmente lungi de 4 cm, 5 cm și 10 cm se poate construi un triunghi.",
     "answer": false,
     "explain": "10 este mai mare decât 4 + 5 = 9: inegalitatea triunghiului nu este respectată."
    },
    {
     "type": "mc",
     "q": "Câte unghiuri obtuze poate avea cel mult un triunghi?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answer": 1,
     "explain": "Două unghiuri obtuze ar depăși deja 180°."
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Clasificarea triunghiurilor",
   "html": "<p><b>După laturi</b>:</p>\n<ul>\n<li><b>echilateral</b>: 3 laturi congruente și, de asemenea, 3 unghiuri congruente de <b>60°</b>;</li>\n<li><b>isoscel</b>: 2 laturi congruente (<b>laturile laterale</b>); a treia este <b>baza</b>. Unghiurile de la bază sunt congruente;</li>\n<li><b>scalen</b>: 3 laturi diferite și 3 unghiuri diferite.</li>\n</ul>\n<p><b>După unghiuri</b>:</p>\n<ul>\n<li><b>ascuțitunghic</b>: 3 unghiuri ascuțite;</li>\n<li><b>dreptunghic</b>: un unghi drept. Laturile care îl formează sunt <b>catetele</b>, latura opusă este <b>ipotenuza</b> (întotdeauna latura cea mai lungă);</li>\n<li><b>obtuzunghic</b>: un unghi obtuz.</li>\n</ul>\n<p>Cele două clasificări se combină: există triunghiul <b>dreptunghic isoscel</b> (unghiuri 90°, 45°, 45°: jumătate dintr-un pătrat), triunghiul <b>scalen obtuzunghic</b> și așa mai departe. Dar un triunghi echilateral este întotdeauna ascuțitunghic!</p>"
  },
  {
   "type": "svg",
   "title": "Familia triunghiurilor",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f0f9ff\"/>\n<text x=\"300\" y=\"24\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">După laturi</text>\n<polygon points=\"40,140 160,140 100,36\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/>\n<text x=\"100\" y=\"164\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">echilateral</text>\n<polygon points=\"240,140 360,140 300,40\" fill=\"#fde047\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<line x1=\"264\" y1=\"92\" x2=\"276\" y2=\"86\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<line x1=\"324\" y1=\"86\" x2=\"336\" y2=\"92\" stroke=\"#854d0e\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"164\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">isoscel</text>\n<polygon points=\"420,140 580,140 460,50\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"3\"/>\n<text x=\"500\" y=\"164\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">scalen</text>\n<text x=\"300\" y=\"194\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">După unghiuri</text>\n<polygon points=\"40,295 170,295 120,215\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"105\" y=\"315\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">ascuțitunghic</text>\n<polygon points=\"250,295 360,295 250,210\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<rect x=\"250\" y=\"279\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n<text x=\"300\" y=\"315\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">dreptunghic</text>\n<polygon points=\"420,295 580,295 450,250\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<text x=\"500\" y=\"315\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\">obtuzunghic</text>\n</svg>",
   "caption": "Liniuțele de pe laturi arată laturile congruente; pătrățelul arată unghiul drept."
  },
  {
   "type": "widget",
   "title": "Ce triunghi este?",
   "widget": "classify",
   "options": {
    "groups": [
     "Ascuțitunghic",
     "Dreptunghic",
     "Obtuzunghic"
    ],
    "items": [
     [
      "60°, 60°, 60°",
      0
     ],
     [
      "90°, 45°, 45°",
      1
     ],
     [
      "120°, 30°, 30°",
      2
     ],
     [
      "70°, 60°, 50°",
      0
     ],
     [
      "90°, 30°, 60°",
      1
     ],
     [
      "100°, 50°, 30°",
      2
     ],
     [
      "80°, 80°, 20°",
      0
     ],
     [
      "laturi de 3, 4, 5 cm",
      1
     ],
     [
      "un unghi de 95°",
      2
     ]
    ]
   },
   "caption": "Triunghiul cu laturile 3, 4, 5 este dreptunghic pentru că 3² + 4² = 5² (vei vedea la teorema lui Pitagora)."
  },
  {
   "type": "text",
   "title": "4. Înălțimi, mediane, bisectoare, mediatoare",
   "html": "<p>În orice triunghi se pot trasa 4 tipuri de segmente sau drepte speciale, <b>câte trei de fiecare tip</b>. Cele trei linii de fiecare tip se întâlnesc întotdeauna într-<b>un singur punct</b>: sunt <b>punctele remarcabile</b>.</p>\n<table>\n<tr><th>Linia</th><th>Ce este</th><th>Punctul remarcabil</th></tr>\n<tr><td><b>Înălțimea</b></td><td>segment perpendicular din vârf pe latura opusă (sau pe prelungirea ei)</td><td><b>Ortocentrul</b></td></tr>\n<tr><td><b>Mediana</b></td><td>segment din vârf la <b>mijlocul</b> laturii opuse</td><td><b>Centrul de greutate</b>: împarte fiecare mediană în două părți, una dublul celeilalte (2 : 1)</td></tr>\n<tr><td><b>Bisectoarea</b></td><td>semidreaptă care împarte un unghi în două unghiuri congruente</td><td><b>Centrul cercului înscris</b> (incentrul)</td></tr>\n<tr><td><b>Mediatoarea</b></td><td>dreaptă perpendiculară pe o latură în mijlocul ei</td><td><b>Centrul cercului circumscris</b> (circumcentrul)</td></tr>\n</table>\n<p><b>Unde se află?</b> Centrul de greutate și centrul cercului înscris sunt întotdeauna <b>interioare</b>. Ortocentrul și circumcentrul sunt interioare în triunghiul ascuțitunghic; în cel dreptunghic ortocentrul este în vârful unghiului drept, iar circumcentrul în mijlocul ipotenuzei; în cel obtuzunghic sunt <b>exterioare</b>.</p>\n<p>În triunghiul <b>echilateral</b> cele patru puncte remarcabile <b>coincid</b>.</p>"
  },
  {
   "type": "widget",
   "title": "Recunoaște liniile triunghiului",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<polygon points=\"60,280 540,280 220,40\" fill=\"#e0f2fe\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n<line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"280\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/>\n<rect x=\"220\" y=\"264\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"540\" y1=\"280\" x2=\"140\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"3\"/>\n<circle cx=\"140\" cy=\"160\" r=\"6\" fill=\"#16a34a\"/>\n<circle cx=\"300\" cy=\"280\" r=\"6\" fill=\"#9333ea\"/>\n<text x=\"40\" y=\"300\" font-size=\"18\" font-weight=\"bold\">A</text>\n<text x=\"548\" y=\"300\" font-size=\"18\" font-weight=\"bold\">B</text>\n<text x=\"212\" y=\"30\" font-size=\"18\" font-weight=\"bold\">C</text>\n</svg>",
    "spots": [
     {
      "x": 220,
      "y": 170,
      "label": "Înălțimea"
     },
     {
      "x": 340,
      "y": 220,
      "label": "Mediana"
     },
     {
      "x": 140,
      "y": 160,
      "label": "Mijlocul lui AC"
     },
     {
      "x": 220,
      "y": 272,
      "label": "Unghi drept"
     },
     {
      "x": 300,
      "y": 280,
      "label": "Baza AB"
     }
    ]
   },
   "caption": "Înălțimea formează un unghi drept cu baza; mediana ajunge în mijlocul laturii opuse."
  },
  {
   "type": "example",
   "title": "Exemplu practic: centrul de greutate și perimetrul",
   "html": "<p><b>Centrul de greutate în echilibru.</b> Decupează un triunghi din carton, trasează două mediane și găsește punctul lor de întâlnire: <b>centrul de greutate</b>. Așază-l pe vârful unui creion: triunghiul rămâne în <b>echilibru</b>! Centrul de greutate este într-adevăr „centrul de masă” al figurii.</p>\n<p>Dacă o mediană are 12 cm, centrul de greutate o împarte în <b>8 cm</b> (spre vârf) și <b>4 cm</b> (spre latură).</p>\n<p><b>Perimetrul.</b> Un triunghi isoscel are baza de 10 cm și laturile laterale de 13 cm: 2p = 10 + 13 + 13 = <b>36 cm</b>. Un triunghi echilateral cu perimetrul de 27 cm are laturile de 27 : 3 = <b>9 cm</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Triunghiuri în spațiu: tetraedrul",
   "scene": "solid",
   "options": {
    "shape": "pyramid",
    "n": 3,
    "r": 1.2,
    "h": 1.6,
    "color": "#f97316",
    "labels": true,
    "shapes": [
     "pyramid",
     "prism"
    ]
   },
   "caption": "O piramidă cu baza triunghiulară are 4 fețe, toate triunghiuri. Prisma triunghiulară are două baze triunghiulare: o găsești în corturile de camping și în prismele care descompun lumina."
  },
  {
   "type": "curiosity",
   "title": "Știai că… triunghiul nu se deformează?",
   "html": "<p>Ia 4 bețișoare unite la colțuri cu piuneze: pătratul se turtește ușor și devine un romb. Cu 3 bețișoare, în schimb, triunghiul <b>nu se mișcă</b>: trei laturi determină un singur triunghi (este al treilea criteriu de congruență).</p>\n<p>De aceea triunghiurile sunt peste tot în <b>structuri</b>: <b>Turnul Eiffel</b>, macaralele, stâlpii de înaltă tensiune, podurile de fier, fermele acoperișurilor și chiar cadrele bicicletelor sunt făcute din triunghiuri.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… pe Pământ triunghiurile „trișează”?",
   "html": "<p>Regula celor 180° este valabilă în <b>plan</b>. Pe o sferă nu! Pornește de la Polul Nord, coboară până la ecuator, parcurge un sfert din ecuator și întoarce-te la Pol: ai desenat un triunghi cu <b>trei unghiuri drepte</b>, adică 270°!</p>\n<p>Marele matematician <b>Carl Friedrich Gauss</b>, la începutul secolului al XIX-lea, a măsurat un triunghi uriaș între trei munți germani (Brocken, Hohehagen și Inselsberg) ca să verifice dacă spațiul este cu adevărat „plat”. A găsit 180°, în limita erorilor de măsurare.</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege triunghiurile",
   "intro": "Dacă demonstrația cu paralele nu te convinge, încearcă cu mâinile, cu corpul sau cu tehnologia.",
   "tabs": [
    {
     "label": "✂️ Rupe unghiurile",
     "html": "<p>Metoda cea mai folosită în școlile din toată lumea pentru a <b>vedea</b> cei 180°:</p>\n<ol>\n<li>desenează un triunghi oarecare pe o foaie și colorează cele trei unghiuri cu culori diferite;</li>\n<li>decupează-l și <b>rupe</b> cele trei unghiuri;</li>\n<li>așază-le alăturate cu vârfurile în același punct: formează întotdeauna o <b>linie dreaptă</b>, adică un unghi alungit!</li>\n</ol>\n<p>Încearcă cu triunghiuri diferite: funcționează întotdeauna.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fdf4ff\"/>\n<polygon points=\"30,180 230,180 150,40\" fill=\"#ffffff\" stroke=\"#111827\" stroke-width=\"3\"/>\n<path d=\"M30 180 L70 180 A40 40 0 0 0 64 160 Z\" fill=\"#ef4444\"/>\n<path d=\"M230 180 L190 180 A40 40 0 0 1 210 145 Z\" fill=\"#3b82f6\"/>\n<path d=\"M150 40 L132 72 A36 36 0 0 0 170 75 Z\" fill=\"#22c55e\"/>\n<text x=\"280\" y=\"120\" font-size=\"30\" fill=\"#111827\">→</text>\n<line x1=\"330\" y1=\"160\" x2=\"580\" y2=\"160\" stroke=\"#111827\" stroke-width=\"3\"/>\n<path d=\"M455 160 L525 160 A70 70 0 0 0 516 125 Z\" fill=\"#ef4444\"/>\n<path d=\"M455 160 L516 125 A70 70 0 0 0 420 99 Z\" fill=\"#22c55e\"/>\n<path d=\"M455 160 L420 99 A70 70 0 0 0 385 160 Z\" fill=\"#3b82f6\"/>\n<text x=\"455\" y=\"200\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\">cele trei unghiuri = 180°</text>\n</svg>"
    },
    {
     "label": "🚶 Mergi pe triunghi",
     "html": "<p>Desenează un triunghi mare în curte, cu creta. Pornește dintr-un vârf privind de-a lungul unei laturi, mergi până la vârful următor și <b>întoarce-te</b> ca să privești de-a lungul laturii noi. Fă la fel la celelalte vârfuri, până când privești din nou în direcția de plecare.</p>\n<p>Ai făcut o <b>rotație completă</b>: 360°. Cele trei „întoarceri” sunt <b>unghiurile exterioare</b>, deci suma lor este 360°. Fiecare unghi exterior + unghiul său interior = 180°: 3 × 180° − 360° = <b>180°</b> pentru unghiurile interioare. Această metodă place foarte mult în țările anglo-saxone și stă la baza programării cu „broscuța țestoasă” (Logo, Scratch).</p>"
    },
    {
     "label": "📐 Triunghiul dreptunghic interactiv",
     "html": "<p>Mișcă cursoarele catetelor: triunghiul își schimbă forma, dar rămâne mereu <b>dreptunghic</b>. Observă că <b>ipotenuza</b> este întotdeauna latura cea mai lungă și că cele două unghiuri ascuțite sunt complementare. Pătratele de pe laturi te pregătesc pentru teorema lui Pitagora, pe care o vei studia în clasa a VIII-a.</p>",
     "widget": "pythagoras",
     "options": {
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "🏗️ Analogie: triunghiul inginer",
     "html": "<p>Gândește-te la triunghiuri ca la <b>inginerii</b> geometriei. Un dreptunghi de carton se îndoaie sub o greutate; dacă îi adaugi o <b>diagonală</b>, devine două triunghiuri și nu se mai îndoaie.</p>\n<p>Topograful folosește triunghiurile și pentru a <b>măsura</b> distanțe care nu pot fi atinse (râuri, munți): este <b>triangulația</b>, cu care au fost desenate hărțile geografice ale întregii Europe. Iar GPS-ul telefonului calculează poziția ta cu un principiu asemănător, trilaterația.</p>"
    },
    {
     "label": "🇬🇷 Demonstrația lui Euclid (paralela)",
     "html": "<p>Ruperea unghiurilor ne face să <b>vedem</b> că suma este 180°, dar matematicienii <b>greci</b> voiau să fie <b>siguri</b> că este valabilă pentru <b>toate</b> triunghiurile, chiar și pentru cele pe care nimeni nu le-a desenat vreodată. Iată demonstrația din <i>Elementele</i> lui <b>Euclid</b> (cartea I, propoziția 32):</p><ol><li>Ia un triunghi oarecare ABC cu unghiurile α, β, γ.</li><li>Din vârful <b>C</b> trasează dreapta <b>paralelă</b> cu latura AB.</li><li>În stânga lui C se formează un unghi <b>egal cu α</b>: sunt <b>unghiuri alterne interne</b> între două paralele tăiate de dreapta AC.</li><li>În dreapta lui C se formează un unghi <b>egal cu β</b>, din același motiv, cu dreapta BC.</li><li>Acum, în jurul lui C, pe dreapta paralelă, se află α, γ și β unul lângă altul: împreună formează un <b>unghi alungit</b>, adică <b>180°</b>.</li></ol><p>Deci α + β + γ = 180° <b>întotdeauna</b>. Observă că am folosit faptul că prin C trece <b>o singură</b> paralelă la AB: este celebrul <b>postulat al cincilea</b>. Pe o sferă (ca Pământul) acel postulat nu este valabil și, într-adevăr, acolo unghiurile unui triunghi însumează <b>mai mult</b> de 180°!</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><polygon points=\"100,250 500,250 260,70\" fill=\"#e0f2fe\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><line x1=\"30\" y1=\"70\" x2=\"570\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/><path d=\"M140,250 A40,40 0 0 0 126.6,220.1\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"7\"/><path d=\"M460,250 A40,40 0 0 1 468,226\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"7\"/><path d=\"M236.8,96.1 A35,35 0 0 0 288,91\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"7\"/><path d=\"M225,70 A35,35 0 0 0 236.8,96.1\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"7\"/><path d=\"M288,91 A35,35 0 0 0 295,70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"7\"/><text x=\"78\" y=\"275\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">A</text><text x=\"508\" y=\"275\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">B</text><text x=\"252\" y=\"58\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">C</text><text x=\"150\" y=\"240\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">α</text><text x=\"430\" y=\"240\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">β</text><text x=\"253\" y=\"125\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">γ</text><text x=\"180\" y=\"62\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">α</text><text x=\"315\" y=\"62\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">β</text><text x=\"400\" y=\"100\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">dreapta paralelă cu AB</text><text x=\"300\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">α + γ + β = unghi alungit = 180°</text></svg>"
    },
    {
     "label": "𓂀 „Seked”-ul vechilor egipteni",
     "html": "<p>În <b>papirusul Rhind</b> (Egipt, circa 1550 î.Hr., copiat de scribul <b>Ahmes</b>) există probleme despre piramide. Ca să spună cât de <b>abruptă</b> este o față, egiptenii foloseau <b>seked</b>-ul: cu câte <b>palme</b> te deplasezi <b>pe orizontală</b> urcând <b>1 cot</b> (1 cot = 7 palme).</p><p>Seked-ul descrie un <b>triunghi dreptunghic</b>: cateta verticală este întotdeauna 1 cot, cateta orizontală este seked-ul. Toate piramidele cu același seked au fețe cu <b>aceeași înclinare</b>, chiar dacă sunt mari sau mici: triunghiurile lor sunt <b>asemenea</b>. Marea piramidă a lui Keops are un seked de 5 palme și jumătate (unghi de circa 52°).</p><p><b>Problema 56 din papirus</b>: o piramidă are baza de <b>360</b> de coți și înălțimea de <b>250</b> de coți. Care este seked-ul?</p><ol><li>Ia <b>jumătate din bază</b>: 360 : 2 = 180 de coți (este cateta orizontală a triunghiului dreptunghic din interiorul piramidei).</li><li>Urcând 250 de coți te deplasezi cu 180: urcând 1 cot te deplasezi cu 180 : 250 = 0,72 coți.</li><li>Transformă în palme: 0,72 × 7 = <b>5,04 palme</b>. Ahmes scrie „5 palme și 1/25”: este chiar 5,04!</li></ol><p>Atenție: <b>seked mai mic = piramidă mai abruptă</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/><polygon points=\"200,260 200,50 365,260\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><polygon points=\"200,260 200,50 35,260\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/><rect x=\"200\" y=\"240\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"190\" y=\"160\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">1 cot</text><text x=\"190\" y=\"180\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">= 7 palme</text><text x=\"282\" y=\"284\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">seked = 5 palme și ½</text><text x=\"390\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Piramida lui Keops:</text><text x=\"390\" y=\"115\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">la fiecare cot de urcare</text><text x=\"390\" y=\"137\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">te deplasezi cu 5½ palme</text><text x=\"390\" y=\"159\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">pe orizontală.</text><text x=\"390\" y=\"195\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" font-weight=\"bold\">Unghi ≈ 52°</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta triunghiurilor: atinge și descoperă de ce",
   "nodes": [
    {
     "id": "tri",
     "label": "Triunghi",
     "x": 50,
     "y": 6,
     "color": "#f97316",
     "html": "Poligon cu 3 laturi, 3 vârfuri, 3 unghiuri.",
     "why": "Este poligonul cu cel mai mic număr posibil de laturi: cu 2 segmente nu se poate închide o figură. Orice alt poligon poate fi împărțit în triunghiuri prin diagonale."
    },
    {
     "id": "disug",
     "label": "Inegalitatea triunghiului",
     "x": 16,
     "y": 26,
     "color": "#ef4444",
     "html": "Fiecare latură este mai mică decât suma celorlalte două.",
     "why": "Drumul drept este cel mai scurt: a merge de la A la B prin C este întotdeauna mai lung decât a merge direct. Euclid o demonstrează în propoziția 20 din prima carte."
    },
    {
     "id": "somma",
     "label": "Suma unghiurilor = 180°",
     "x": 50,
     "y": 30,
     "color": "#a855f7",
     "html": "α + β + γ = 180° în orice triunghi din plan.",
     "why": "Derivă din postulatul al cincilea al lui Euclid (cel al paralelelor): trasând paralela la o latură prin vârful opus, cele trei unghiuri se recompun într-un unghi alungit."
    },
    {
     "id": "rigido",
     "label": "Rigiditate",
     "x": 84,
     "y": 26,
     "color": "#64748b",
     "html": "Triunghiul nu se deformează dacă laturile sunt fixe.",
     "why": "Trei laturi determină un singur triunghi (criteriul de congruență LLL). De aceea inginerii construiesc grinzi cu zăbrele făcute din triunghiuri."
    },
    {
     "id": "lati",
     "label": "Clasificare după laturi",
     "x": 25,
     "y": 54,
     "color": "#eab308",
     "html": "Echilateral, isoscel, scalen.",
     "why": "Dacă două laturi sunt egale, și unghiurile opuse lor sunt egale (teorema triunghiului isoscel, numită în Evul Mediu pons asinorum, „podul măgarilor”, pentru că îi punea în dificultate pe elevi)."
    },
    {
     "id": "angoli",
     "label": "Clasificare după unghiuri",
     "x": 75,
     "y": 54,
     "color": "#3b82f6",
     "html": "Ascuțitunghic, dreptunghic, obtuzunghic.",
     "why": "Pentru că suma este 180°, cel mult un unghi poate fi drept sau obtuz: celelalte două trebuie să-și împartă ce rămâne."
    },
    {
     "id": "punti",
     "label": "Puncte remarcabile",
     "x": 50,
     "y": 74,
     "color": "#16a34a",
     "html": "Ortocentru, centru de greutate, incentru, circumcentru.",
     "why": "Cele trei înălțimi, mediane, bisectoare sau mediatoare se întâlnesc întotdeauna într-un singur punct: este un fapt care se poate demonstra, nu o coincidență. Vechii greci cunoșteau deja centrul de greutate, incentrul și circumcentrul."
    },
    {
     "id": "eulero",
     "label": "Dreapta lui Euler",
     "x": 25,
     "y": 94,
     "color": "#14b8a6",
     "html": "Ortocentrul, centrul de greutate și circumcentrul se află întotdeauna pe aceeași dreaptă.",
     "why": "A fost descoperită de matematicianul elvețian Leonhard Euler în 1765. Centrul de greutate se află întotdeauna la 1/3 din distanța dintre circumcentru și ortocentru."
    },
    {
     "id": "pitagora",
     "label": "Spre Pitagora",
     "x": 75,
     "y": 94,
     "color": "#ec4899",
     "html": "În triunghiul dreptunghic: a² + b² = c².",
     "why": "O vei studia în clasa a VIII-a. Babilonienii și chinezii o cunoșteau deja; tradiția atribuie prima demonstrație lui Pitagora (secolul al VI-lea î.Hr.)."
    }
   ],
   "edges": [
    [
     "tri",
     "disug",
     "există dacă"
    ],
    [
     "tri",
     "somma",
     "proprietate"
    ],
    [
     "tri",
     "rigido",
     "proprietate"
    ],
    [
     "tri",
     "lati",
     "se clasifică"
    ],
    [
     "tri",
     "angoli",
     "se clasifică"
    ],
    [
     "somma",
     "angoli",
     "limitează"
    ],
    [
     "tri",
     "punti",
     "are"
    ],
    [
     "punti",
     "eulero",
     "coliniare pe"
    ],
    [
     "angoli",
     "pitagora",
     "dacă dreptunghic"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: clasificare și puncte remarcabile",
   "questions": [
    {
     "type": "mc",
     "q": "Cum se numește punctul de întâlnire al medianelor?",
     "options": [
      "Ortocentru",
      "Centru de greutate",
      "Incentru",
      "Circumcentru"
     ],
     "answer": 1,
     "explain": "Medianele se întâlnesc în centrul de greutate."
    },
    {
     "type": "mc",
     "q": "Un triunghi cu unghiurile 90°, 45°, 45° este…",
     "options": [
      "dreptunghic scalen",
      "dreptunghic isoscel",
      "echilateral",
      "obtuzunghic"
     ],
     "answer": 1,
     "explain": "Are un unghi drept și două unghiuri (și deci două laturi) egale."
    },
    {
     "type": "num",
     "q": "Într-un triunghi isoscel unghiul din vârf este de 50°. Cât măsoară fiecare unghi de la bază?",
     "answer": 65,
     "unit": "°",
     "explain": "(180° − 50°) : 2 = 65°."
    }
   ]
  },
  {
   "type": "remember",
   "title": "De ținut minte",
   "html": "<ul>\n<li>Fiecare latură este <b>mai mică decât suma</b> celorlalte două.</li>\n<li>Suma unghiurilor interioare este <b>180°</b>; unghiul exterior = suma celor două unghiuri interioare neadiacente.</li>\n<li>Laturi: <b>echilateral, isoscel, scalen</b>. Unghiuri: <b>ascuțitunghic, dreptunghic, obtuzunghic</b>.</li>\n<li>Înălțimi → <b>ortocentru</b>; mediane → <b>centru de greutate</b> (2:1); bisectoare → <b>incentru</b>; mediatoare → <b>circumcentru</b>.</li>\n<li>Triunghiul este <b>rigid</b>: de aceea se folosește în construcții.</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Triunghi",
   "d": "Poligon cu trei laturi și trei unghiuri."
  },
  {
   "t": "Inegalitatea triunghiului",
   "d": "Fiecare latură este mai mică decât suma celorlalte două."
  },
  {
   "t": "Unghi exterior",
   "d": "Unghiul dintre o latură și prelungirea laturii consecutive."
  },
  {
   "t": "Catete",
   "d": "Cele două laturi care formează unghiul drept într-un triunghi dreptunghic."
  },
  {
   "t": "Ipotenuză",
   "d": "Latura opusă unghiului drept; este cea mai lungă."
  },
  {
   "t": "Înălțime",
   "d": "Segment perpendicular dus dintr-un vârf pe latura opusă."
  },
  {
   "t": "Mediană",
   "d": "Segment care unește un vârf cu mijlocul laturii opuse."
  },
  {
   "t": "Bisectoare",
   "d": "Semidreaptă care împarte un unghi în două părți congruente."
  },
  {
   "t": "Mediatoarea unui segment",
   "d": "Dreapta perpendiculară pe segment în mijlocul lui."
  },
  {
   "t": "Centru de greutate",
   "d": "Punctul de întâlnire al medianelor; punctul de echilibru al triunghiului."
  },
  {
   "t": "Ortocentru, incentru, circumcentru",
   "d": "Punctele de întâlnire ale înălțimilor, bisectoarelor și mediatoarelor."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Două unghiuri ale unui triunghi măsoară 55° și 85°. Cât măsoară al treilea?",
    "answer": 40,
    "unit": "°",
    "explain": "180° − 55° − 85° = 40°."
   },
   {
    "type": "mc",
    "q": "Cu care grup de segmente se poate construi un triunghi?",
    "options": [
     "2, 3, 6 cm",
     "3, 4, 8 cm",
     "5, 6, 9 cm",
     "1, 1, 3 cm"
    ],
    "answer": 2,
    "explain": "9 < 5 + 6 = 11: este singurul grup care respectă inegalitatea triunghiului."
   },
   {
    "type": "tf",
    "q": "Un triunghi echilateral are toate unghiurile de 60°.",
    "answer": true,
    "explain": "Trei unghiuri egale: 180° : 3 = 60°."
   },
   {
    "type": "mc",
    "q": "Într-un triunghi dreptunghic, latura opusă unghiului drept se numește…",
    "options": [
     "catetă",
     "bază",
     "ipotenuză",
     "mediană"
    ],
    "answer": 2,
    "explain": "Este ipotenuza, latura cea mai lungă."
   },
   {
    "type": "text",
    "q": "Cum se numește punctul de întâlnire al celor trei înălțimi?",
    "answer": [
     "ortocentru",
     "ortocentrul"
    ],
    "explain": "Înălțimile se întâlnesc în ortocentru."
   },
   {
    "type": "mc",
    "q": "Centrul cercului înscris într-un triunghi este…",
    "options": [
     "centrul de greutate",
     "incentrul",
     "circumcentrul",
     "ortocentrul"
    ],
    "answer": 1,
    "explain": "Incentrul, intersecția bisectoarelor, este egal depărtat de cele trei laturi."
   },
   {
    "type": "num",
    "q": "Un unghi ascuțit al unui triunghi dreptunghic măsoară 28°. Cât măsoară celălalt unghi ascuțit?",
    "answer": 62,
    "unit": "°",
    "explain": "Unghiurile ascuțite ale unui triunghi dreptunghic sunt complementare: 90° − 28° = 62°."
   },
   {
    "type": "num",
    "q": "Două unghiuri interioare măsoară 45° și 70°. Cât măsoară unghiul exterior adiacent cu al treilea unghi?",
    "answer": 115,
    "unit": "°",
    "explain": "Unghiul exterior este suma celor două unghiuri interioare neadiacente: 45° + 70° = 115°."
   },
   {
    "type": "num",
    "q": "O mediană are 18 cm. Cât măsoară partea dintre vârf și centrul de greutate?",
    "answer": 12,
    "unit": "cm",
    "explain": "Centrul de greutate împarte mediana în raportul 2:1: 18 : 3 × 2 = 12 cm."
   },
   {
    "type": "tf",
    "q": "Într-un triunghi obtuzunghic ortocentrul se află în afara triunghiului.",
    "answer": true,
    "explain": "Două înălțimi cad pe prelungirile laturilor, deci ortocentrul este exterior."
   },
   {
    "type": "num",
    "q": "Un triunghi isoscel are baza de 12 cm și latura laterală de 10 cm. Cât măsoară perimetrul?",
    "answer": 32,
    "unit": "cm",
    "explain": "12 + 10 + 10 = 32 cm."
   },
   {
    "type": "order",
    "q": "Pune în ordine pașii pentru a găsi centrul de greutate.",
    "items": [
     "Află mijlocul unei laturi",
     "Unește-l cu vârful opus (mediana)",
     "Repetă cu o altă latură",
     "Punctul de întâlnire al medianelor este centrul de greutate"
    ],
    "explain": "Sunt de ajuns două mediane: a treia trece prin același punct."
   }
  ],
  "gen": [
   [
    "triAngle",
    3
   ]
  ]
 }
});
