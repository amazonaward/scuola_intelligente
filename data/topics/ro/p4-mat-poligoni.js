TOPIC('ro', {
 "id": "p4-mat-poligoni",
 "title": "Poligoanele",
 "intro": "Uită-te în jur: caietul este un dreptunghi, indicatorul STOP este un octogon, celulele albinelor sunt hexagoane. Toate sunt <b>poligoane</b>! Să învățăm să le recunoaștem, să le dăm un nume și să descoperim secretele <b>triunghiurilor</b> și ale <b>patrulaterelor</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Ce este un poligon",
   "html": "<p>Ia un creion și desenează o linie care pornește dintr-un punct și, făcută din <b>multe bucăți drepte</b>, se întoarce chiar în punctul de plecare fără să se încrucișeze vreodată. Ai desenat o <b>linie frântă închisă</b>.</p>\n<p><b>Poligonul</b> este partea de plan închisă de o linie frântă închisă, <b>împreună</b> cu linia însăși (conturul ei).</p>\n<p>Fiecare poligon are:</p>\n<ul>\n<li><b>laturi</b>: segmentele drepte ale conturului;</li>\n<li><b>vârfuri</b>: punctele în care se întâlnesc două laturi;</li>\n<li><b>unghiuri</b>: „deschiderile” dintre două laturi vecine, în fiecare vârf;</li>\n<li><b>diagonale</b>: segmentele care unesc două vârfuri <b>care nu sunt vecine</b>.</li>\n</ul>\n<p>În orice poligon numărul laturilor, al vârfurilor și al unghiurilor este <b>mereu același</b>: un poligon cu 5 laturi are și 5 vârfuri și 5 unghiuri.</p>\n<p><b>Nu sunt poligoane</b>: cercul (conturul este curb), o figură deschisă, o figură cu laturi care se încrucișează.</p>"
  },
  {
   "type": "svg",
   "title": "Părțile unui poligon",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<polygon points=\"120,230 90,120 200,50 310,110 280,230\" fill=\"#bae6fd\" stroke=\"#1e40af\" stroke-width=\"5\"/>\n<line x1=\"90\" y1=\"120\" x2=\"310\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<line x1=\"200\" y1=\"50\" x2=\"120\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<circle cx=\"200\" cy=\"50\" r=\"9\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"2\"/>\n<path d=\"M 105 210 A 25 25 0 0 1 140 228\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<text x=\"350\" y=\"60\" font-size=\"20\" fill=\"#f59e0b\" font-weight=\"bold\">● vârf</text>\n<text x=\"350\" y=\"110\" font-size=\"20\" fill=\"#1e40af\" font-weight=\"bold\">━ latură</text>\n<text x=\"350\" y=\"160\" font-size=\"20\" fill=\"#16a34a\" font-weight=\"bold\">◜ unghi</text>\n<text x=\"350\" y=\"210\" font-size=\"20\" fill=\"#dc2626\" font-weight=\"bold\">┅ diagonală</text>\n<text x=\"200\" y=\"280\" font-size=\"18\" fill=\"#1f2937\" text-anchor=\"middle\">Pentagon: 5 laturi, 5 vârfuri, 5 unghiuri</text>\n</svg>",
   "caption": "Pentagonul are 5 laturi, 5 vârfuri, 5 unghiuri și 5 diagonale (aici vezi 2 dintre ele)."
  },
  {
   "type": "text",
   "title": "Numele depinde de numărul laturilor",
   "html": "<p>Cuvântul <b>poligon</b> vine din greacă: <i>polýs</i> = „mulți” și <i>gonía</i> = „unghi”. Deci „poligon” înseamnă „figură cu multe unghiuri”.</p>\n<table>\n<tr><th>Laturi</th><th>Nume</th><th>Unde îl vezi</th></tr>\n<tr><td>3</td><td><b>Triunghi</b></td><td>indicator de pericol ⚠️</td></tr>\n<tr><td>4</td><td><b>Patrulater</b></td><td>fereastră, foaie, ecran</td></tr>\n<tr><td>5</td><td><b>Pentagon</b></td><td>petele negre ale mingii ⚽</td></tr>\n<tr><td>6</td><td><b>Hexagon</b></td><td>celulele albinelor 🐝, piulița unui șurub</td></tr>\n<tr><td>7</td><td><b>Heptagon</b></td><td>unele monede englezești</td></tr>\n<tr><td>8</td><td><b>Octogon</b></td><td>indicator STOP 🛑</td></tr>\n<tr><td>9</td><td><b>Enagon</b></td><td></td></tr>\n<tr><td>10</td><td><b>Decagon</b></td><td></td></tr>\n</table>\n<p>Poligonul cu <b>cel mai mic număr de laturi</b> este triunghiul: cu doar 2 segmente nu se poate închide o figură!</p>"
  },
  {
   "type": "text",
   "title": "Convexe, concave și regulate",
   "html": "<ul>\n<li>Un poligon este <b>convex</b> dacă nicio latură, prelungită, nu intră în interiorul figurii. Toate unghiurile lui sunt mai mici decât un unghi alungit (180°).</li>\n<li>Un poligon este <b>concav</b> dacă are o „intrătură”, ca o stea sau o săgeată: cel puțin o latură prelungită intră în figură și cel puțin un unghi este mai mare de 180°.</li>\n<li>Un poligon este <b>regulat</b> dacă are <b>toate laturile egale</b> și <b>toate unghiurile egale</b>: triunghiul echilateral, pătratul, hexagonul albinelor…</li>\n</ul>\n<p>Atenție: <b>rombul</b> are 4 laturi egale, dar unghiurile nu, deci <b>nu</b> este regulat. <b>Dreptunghiul</b> are 4 unghiuri egale, dar laturile nu, deci nici el <b>nu</b> este regulat. Numai <b>pătratul</b> le are pe amândouă!</p>"
  },
  {
   "type": "svg",
   "title": "Convex, concav, regulat",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fefce8\"/>\n<polygon points=\"40,200 70,80 170,60 190,190\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"4\"/>\n<text x=\"115\" y=\"245\" font-size=\"20\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">convex</text>\n<polygon points=\"300,50 325,120 395,125 340,165 360,235 300,195 240,235 260,165 205,125 275,120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"270\" font-size=\"20\" fill=\"#991b1b\" text-anchor=\"middle\" font-weight=\"bold\">concav (stea)</text>\n<polygon points=\"490,60 550,95 550,165 490,200 430,165 430,95\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<text x=\"490\" y=\"245\" font-size=\"20\" fill=\"#1e3a8a\" text-anchor=\"middle\" font-weight=\"bold\">regulat (hexagon)</text>\n</svg>",
   "caption": "Steaua are „intrături”: este concavă. Hexagonul are toate laturile și unghiurile egale: este regulat."
  },
  {
   "type": "widget",
   "title": "Găsește părțile poligonului",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<polygon points=\"150,250 100,110 300,40 500,110 450,250\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"5\"/>\n<line x1=\"100\" y1=\"110\" x2=\"500\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/>\n<path d=\"M 420 250 A 30 30 0 0 1 462 226\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\"/>\n<circle cx=\"300\" cy=\"40\" r=\"9\" fill=\"#1d4ed8\"/>\n</svg>",
    "spots": [
     {
      "x": 300,
      "y": 40,
      "label": "Vârf"
     },
     {
      "x": 300,
      "y": 250,
      "label": "Latură"
     },
     {
      "x": 300,
      "y": 110,
      "label": "Diagonală"
     },
     {
      "x": 440,
      "y": 235,
      "label": "Unghi"
     },
     {
      "x": 300,
      "y": 180,
      "label": "Regiune interioară"
     }
    ]
   },
   "caption": "Atinge fiecare punct și alege numele potrivit."
  },
  {
   "type": "quiz",
   "title": "Mini-test: recunoașterea poligoanelor",
   "questions": [
    {
     "type": "mc",
     "q": "Care dintre aceste figuri NU este un poligon?",
     "options": [
      "Pătratul",
      "Cercul",
      "Triunghiul"
     ],
     "answer": 1,
     "explain": "Cercul are conturul curb: un poligon are numai laturi drepte."
    },
    {
     "type": "num",
     "q": "Câte vârfuri are un octogon?",
     "answer": 8,
     "explain": "Laturile, vârfurile și unghiurile sunt mereu în același număr: 8."
    },
    {
     "type": "tf",
     "q": "Rombul este un poligon regulat.",
     "answer": false,
     "explain": "Are laturile egale, dar unghiurile nu: ca să fie regulat trebuie ambele."
    }
   ]
  },
  {
   "type": "text",
   "title": "Triunghiurile",
   "html": "<p>Triunghiul are 3 laturi, 3 vârfuri, 3 unghiuri și <b>nicio diagonală</b>. Este cel mai „robust” poligon: dacă construiești un triunghi din trei bețișoare, nu se deformează!</p>\n<p><b>Clasificare după laturi</b>:</p>\n<ul>\n<li><b>echilateral</b>: 3 laturi egale (și 3 unghiuri egale de 60°);</li>\n<li><b>isoscel</b>: 2 laturi egale (și 2 unghiuri egale la bază);</li>\n<li><b>scalen</b>: 3 laturi diferite.</li>\n</ul>\n<p><b>Clasificare după unghiuri</b>:</p>\n<ul>\n<li><b>dreptunghic</b>: are un unghi <b>drept</b> (90°), ca unghiul unei foi;</li>\n<li><b>ascuțitunghic</b>: 3 unghiuri <b>ascuțite</b> (mai mici de 90°);</li>\n<li><b>obtuzunghic</b>: un unghi <b>obtuz</b> (mai mare de 90°).</li>\n</ul>\n<p>⭐ Regula de aur: <b>suma unghiurilor interioare ale unui triunghi este întotdeauna 180°</b>, adică un unghi alungit.</p>\n<p>O altă regulă: într-un triunghi <b>fiecare latură este mai mică decât suma celorlalte două</b>. Cu bețișoare de 2, 3 și 10 cm triunghiul nu se închide!</p>"
  },
  {
   "type": "svg",
   "title": "Familia triunghiurilor",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fdf4ff\"/>\n<text x=\"300\" y=\"26\" font-size=\"18\" fill=\"#6b21a8\" text-anchor=\"middle\" font-weight=\"bold\">După laturi</text>\n<polygon points=\"40,125 140,125 90,40\" fill=\"#f0abfc\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<text x=\"90\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">echilateral</text>\n<polygon points=\"250,125 350,125 300,35\" fill=\"#c4b5fd\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">isoscel</text>\n<polygon points=\"440,125 570,125 470,55\" fill=\"#a5b4fc\" stroke=\"#3730a3\" stroke-width=\"4\"/>\n<text x=\"505\" y=\"148\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">scalen</text>\n<text x=\"300\" y=\"176\" font-size=\"18\" fill=\"#9a3412\" text-anchor=\"middle\" font-weight=\"bold\">După unghiuri</text>\n<polygon points=\"40,280 150,280 40,195\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"4\"/>\n<rect x=\"40\" y=\"262\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n<text x=\"140\" y=\"215\" font-size=\"16\" fill=\"#1f2937\">dreptunghic</text>\n<polygon points=\"250,280 360,280 290,190\" fill=\"#fcd34d\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<text x=\"350\" y=\"215\" font-size=\"16\" fill=\"#1f2937\">ascuțitunghic</text>\n<polygon points=\"420,280 580,280 450,240\" fill=\"#bef264\" stroke=\"#3f6212\" stroke-width=\"4\"/>\n<text x=\"500\" y=\"225\" font-size=\"16\" fill=\"#1f2937\">obtuzunghic</text>\n</svg>",
   "caption": "Fiecare triunghi are două „nume de familie”: unul după laturi și unul după unghiuri. De ex.: triunghi dreptunghic isoscel."
  },
  {
   "type": "widget",
   "title": "Clasifică triunghiurile după laturi",
   "widget": "classify",
   "options": {
    "groups": [
     "Echilateral",
     "Isoscel",
     "Scalen"
    ],
    "items": [
     [
      "laturi 5, 5, 5 cm",
      0
     ],
     [
      "laturi 4, 4, 6 cm",
      1
     ],
     [
      "laturi 3, 4, 5 cm",
      2
     ],
     [
      "laturi 7, 7, 7 cm",
      0
     ],
     [
      "laturi 10, 6, 10 cm",
      1
     ],
     [
      "laturi 6, 8, 9 cm",
      2
     ],
     [
      "⚠️ indicator de pericol",
      0
     ],
     [
      "🏠 acoperiș cu două ape egale",
      1
     ]
    ]
   },
   "caption": "Numără câte laturi sunt egale: 3 → echilateral, 2 → isoscel, niciuna → scalen."
  },
  {
   "type": "text",
   "title": "Patrulaterele",
   "html": "<p>Patrulaterele au 4 laturi, 4 vârfuri, 4 unghiuri și <b>2 diagonale</b>. <b>Suma unghiurilor lor interioare este 360°</b>: într-adevăr, o diagonală împarte patrulaterul în <b>2 triunghiuri</b>, iar 180° + 180° = 360°.</p>\n<p>Se clasifică uitându-ne la <b>laturile paralele</b> (care nu se întâlnesc niciodată, ca șinele de tren):</p>\n<ul>\n<li><b>Trapezul</b>: are <b>o singură pereche</b> de laturi paralele (cele două baze). Poate fi <i>dreptunghic</i>, <i>isoscel</i> sau <i>scalen</i>.</li>\n<li><b>Paralelogramul</b>: are <b>două perechi</b> de laturi paralele; laturile opuse sunt egale și unghiurile opuse sunt egale.</li>\n<li><b>Rombul</b>: paralelogram cu <b>4 laturi egale</b>; diagonalele sunt perpendiculare.</li>\n<li><b>Dreptunghiul</b>: paralelogram cu <b>4 unghiuri drepte</b>; diagonalele sunt egale.</li>\n<li><b>Pătratul</b>: are 4 laturi egale <b>și</b> 4 unghiuri drepte. Este în același timp romb și dreptunghi!</li>\n</ul>\n<p>Un patrulater fără laturi paralele se numește <b>patrulater oarecare</b> (it. trapezoide), ca un zmeu 🪁.</p>"
  },
  {
   "type": "svg",
   "title": "Arborele genealogic al patrulaterelor",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#ecfeff\"/>\n<rect x=\"215\" y=\"10\" width=\"170\" height=\"36\" rx=\"10\" fill=\"#0e7490\"/>\n<text x=\"300\" y=\"34\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">Patrulatere</text>\n<line x1=\"300\" y1=\"46\" x2=\"140\" y2=\"80\" stroke=\"#0e7490\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"46\" x2=\"460\" y2=\"80\" stroke=\"#0e7490\" stroke-width=\"3\"/>\n<polygon points=\"80,140 200,140 170,90 110,90\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/>\n<text x=\"140\" y=\"165\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Trapez (1 pereche ∥)</text>\n<polygon points=\"390,140 510,140 540,90 420,90\" fill=\"#a7f3d0\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<text x=\"465\" y=\"165\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Paralelogram (2 perechi ∥)</text>\n<line x1=\"465\" y1=\"172\" x2=\"370\" y2=\"200\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<line x1=\"465\" y1=\"172\" x2=\"540\" y2=\"200\" stroke=\"#065f46\" stroke-width=\"3\"/>\n<polygon points=\"370,205 405,240 370,275 335,240\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"3\"/>\n<text x=\"370\" y=\"298\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Romb</text>\n<rect x=\"495\" y=\"215\" width=\"90\" height=\"50\" fill=\"#c7d2fe\" stroke=\"#3730a3\" stroke-width=\"3\"/>\n<text x=\"540\" y=\"298\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Dreptunghi</text>\n<rect x=\"430\" y=\"245\" width=\"42\" height=\"42\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"3\"/>\n<text x=\"451\" y=\"314\" font-size=\"16\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">Pătrat</text>\n<line x1=\"395\" y1=\"262\" x2=\"430\" y2=\"266\" stroke=\"#991b1b\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<line x1=\"495\" y1=\"250\" x2=\"472\" y2=\"262\" stroke=\"#991b1b\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<polygon points=\"120,210 160,240 120,300 80,240\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"210\" y=\"260\" font-size=\"16\" fill=\"#1f2937\">Patrulater oarecare</text>\n<text x=\"210\" y=\"280\" font-size=\"14\" fill=\"#5b21b6\">(zmeu, niciun ∥)</text>\n</svg>",
   "caption": "Pătratul este copilul a doi „părinți”: este și romb (laturi egale) și dreptunghi (unghiuri drepte)."
  },
  {
   "type": "3d",
   "title": "Poligoanele în corpuri",
   "scene": "solid",
   "options": {
    "shape": "prism",
    "n": 6,
    "r": 1,
    "h": 1.2,
    "color": "#f59e0b",
    "labels": true,
    "shapes": [
     "cube",
     "prism",
     "pyramid"
    ]
   },
   "caption": "Fețele corpurilor sunt poligoane: prisma hexagonală are 2 hexagoane și 6 dreptunghiuri, piramida are triunghiuri. Schimbă corpul cu butoanele și numără fețele."
  },
  {
   "type": "example",
   "title": "Exemplu practic: gresiera",
   "html": "<p>Doamna Anna trebuie să pună gresie pe podeaua băii <b>fără să lase goluri</b>. Ce plăci regulate poate folosi?</p>\n<ul>\n<li><b>Pătrate</b>: în jurul unui punct încap 4, pentru că 4 × 90° = 360° ✅</li>\n<li><b>Triunghiuri echilaterale</b>: încap 6, pentru că 6 × 60° = 360° ✅</li>\n<li><b>Hexagoane regulate</b>: încap 3, pentru că 3 × 120° = 360° ✅</li>\n<li><b>Pentagoane regulate</b>: fiecare unghi are 108°; 3 × 108° = 324°, rămâne un gol ❌</li>\n</ul>\n<p>Numai aceste trei poligoane regulate reușesc să acopere singure o podea: se numesc <b>pavări regulate</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: unghiul care lipsește",
   "html": "<p>Luca a desenat un triunghi. Cu raportorul măsoară două unghiuri: <b>50°</b> și <b>70°</b>. Cât măsoară al treilea, fără să-l măsoare?</p>\n<ol>\n<li>Adun unghiurile pe care le știu: 50° + 70° = 120°</li>\n<li>Scad din 180°: 180° − 120° = <b>60°</b></li>\n</ol>\n<p>Toate cele trei unghiuri sunt mai mici de 90°: este un triunghi <b>ascuțitunghic</b>.</p>\n<p>La un patrulater se face la fel, dar pornind de la <b>360°</b>: dacă trei unghiuri măsoară 90°, 90° și 120°, al patrulea este 360° − 300° = <b>60°</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? Albinele matematiciene",
   "html": "<p>Albinele construiesc fagurii cu celule în formă de <b>hexagon</b>. Dintre figurile care acoperă planul fără goluri, hexagonul este cea care închide cel mai mult spațiu folosind cea mai puțină ceară pentru pereți. În 1999 matematicianul Thomas Hales a demonstrat că este într-adevăr cea mai bună soluție („conjectura fagurelui”, propusă încă din antichitate)!</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? Mingea de fotbal",
   "html": "<p>Mingea de fotbal clasică este făcută din <b>12 pentagoane</b> negre și <b>20 de hexagoane</b> albe cusute împreună. Același desen se găsește într-o moleculă de carbon numită <b>fulerenă</b> (C₆₀), descoperită în 1985.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? De ce macaralele sunt făcute din triunghiuri",
   "html": "<p>Uită-te la o macara, la un stâlp de înaltă tensiune sau la Turnul Eiffel: sunt pline de <b>triunghiuri</b>. Un pătrat din bare se „turtește” și devine romb, dar un triunghi nu: dacă cele trei laturi sunt fixe, forma este fixă. De aceea inginerii folosesc triunghiurile ca să facă structurile rigide.</p>"
  },
  {
   "type": "remember",
   "title": "De ținut minte",
   "html": "<ul>\n<li>Poligon = parte de plan închisă de o linie frântă închisă. Laturi = vârfuri = unghiuri.</li>\n<li>Triunghiuri: după laturi <b>echilateral, isoscel, scalen</b>; după unghiuri <b>dreptunghic, ascuțitunghic, obtuzunghic</b>. Suma unghiurilor = <b>180°</b>.</li>\n<li>Patrulatere: trapez (1 pereche de laturi paralele), paralelogram, romb, dreptunghi, pătrat (2 perechi). Suma unghiurilor = <b>360°</b>.</li>\n<li>Regulat = laturi egale <b>și</b> unghiuri egale.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege poligoanele",
   "intro": "Dacă definițiile ți se par grele, încearcă să atingi, să pliezi, să mergi sau să construiești. Alege calea care îți place!",
   "tabs": [
    {
     "label": "🐢 Mergi ca o broască țestoasă",
     "html": "<p>În anii '60, la MIT (SUA), Seymour Papert a inventat limbajul <b>Logo</b>: copiii desenează comandând o broască țestoasă care merge și se rotește. Încearcă în curte sau în sala de sport!</p>\n<ul>\n<li><b>Pătrat</b>: repetă de 4 ori „înainte 5 pași, rotește-te cu 90°”.</li>\n<li><b>Triunghi echilateral</b>: repetă de 3 ori „înainte 5 pași, rotește-te cu 120°”.</li>\n<li><b>Hexagon</b>: repetă de 6 ori „înainte 5 pași, rotește-te cu 60°”.</li>\n</ul>\n<p>Ai observat? La final ai făcut mereu <b>o rotație completă: 360°</b>! 4 × 90 = 3 × 120 = 6 × 60 = 360. Pentru a face un poligon regulat cu <b>n</b> laturi trebuie să te rotești de fiecare dată cu 360° : n.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0fdf4\"/>\n<rect x=\"60\" y=\"50\" width=\"160\" height=\"160\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"5\" stroke-dasharray=\"14 8\"/>\n<text x=\"60\" y=\"40\" font-size=\"30\">🐢</text>\n<text x=\"140\" y=\"240\" font-size=\"18\" text-anchor=\"middle\" fill=\"#14532d\">4 × (înainte, rotește 90°)</text>\n<polygon points=\"420,40 510,200 330,200\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\" stroke-dasharray=\"14 8\"/>\n<text x=\"405\" y=\"30\" font-size=\"30\">🐢</text>\n<text x=\"420\" y=\"240\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1e3a8a\">3 × (înainte, rotește 120°)</text>\n</svg>"
    },
    {
     "label": "🪢 Cu elastice (geoplan)",
     "html": "<p><b>Geoplanul</b> este o tăbliță cu cuie în rânduri, inventată de matematicianul egipteano-britanic <b>Caleb Gattegno</b> în anii '50. Se întind elastice colorate de la un cui la altul.</p>\n<p>Poți să-l construiești dintr-o planșetă de plută și din pioneze: încearcă să faci</p>\n<ul>\n<li>un pătrat, apoi mută un singur colț al elasticului: devine un trapez sau un patrulater oarecare;</li>\n<li>un triunghi cu un unghi drept (urmează rândurile de cuie);</li>\n<li>o figură cu o intrătură: un poligon <b>concav</b>.</li>\n</ul>\n<p>Cu mâinile înțelegi imediat că numărul de „vârfuri” este egal cu numărul de porțiuni de elastic (laturi).</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"150\" y=\"10\" width=\"300\" height=\"240\" rx=\"14\" fill=\"#d6a76b\" stroke=\"#78350f\" stroke-width=\"4\"/>\n<g fill=\"#374151\">\n<circle cx=\"190\" cy=\"50\" r=\"6\"/><circle cx=\"245\" cy=\"50\" r=\"6\"/><circle cx=\"300\" cy=\"50\" r=\"6\"/><circle cx=\"355\" cy=\"50\" r=\"6\"/><circle cx=\"410\" cy=\"50\" r=\"6\"/>\n<circle cx=\"190\" cy=\"105\" r=\"6\"/><circle cx=\"245\" cy=\"105\" r=\"6\"/><circle cx=\"300\" cy=\"105\" r=\"6\"/><circle cx=\"355\" cy=\"105\" r=\"6\"/><circle cx=\"410\" cy=\"105\" r=\"6\"/>\n<circle cx=\"190\" cy=\"160\" r=\"6\"/><circle cx=\"245\" cy=\"160\" r=\"6\"/><circle cx=\"300\" cy=\"160\" r=\"6\"/><circle cx=\"355\" cy=\"160\" r=\"6\"/><circle cx=\"410\" cy=\"160\" r=\"6\"/>\n<circle cx=\"190\" cy=\"215\" r=\"6\"/><circle cx=\"245\" cy=\"215\" r=\"6\"/><circle cx=\"300\" cy=\"215\" r=\"6\"/><circle cx=\"355\" cy=\"215\" r=\"6\"/><circle cx=\"410\" cy=\"215\" r=\"6\"/>\n</g>\n<polygon points=\"190,50 300,50 245,160\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"5\"/>\n<polygon points=\"300,105 410,105 410,215 355,160 300,215\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"5\"/>\n</svg>"
    },
    {
     "label": "📄 Pliind o foaie (origami)",
     "html": "<p>În <b>Japonia</b> geometria se învață și cu <b>origami</b>, arta de a plia hârtia.</p>\n<ol>\n<li>Ia o foaie dreptunghiulară (A4). Pliază un colț până atinge latura opusă și taie fâșia care rămâne: obții un <b>pătrat</b>!</li>\n<li>Pliază pătratul pe diagonală: obții 2 <b>triunghiuri dreptunghice isoscele</b> egale.</li>\n<li>Rupe cele 3 unghiuri ale unui triunghi de hârtie oarecare și pune-le unul lângă altul: formează mereu o <b>linie dreaptă</b>, adică un unghi alungit de <b>180°</b>!</li>\n</ol>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fff7ed\"/>\n<polygon points=\"40,200 240,200 110,50\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"4\"/>\n<path d=\"M 70 200 A 30 30 0 0 0 52 172\" fill=\"#ef4444\"/>\n<path d=\"M 210 200 A 30 30 0 0 1 222 179\" fill=\"#3b82f6\"/>\n<text x=\"110\" y=\"85\" font-size=\"22\" fill=\"#16a34a\">●</text>\n<text x=\"270\" y=\"130\" font-size=\"34\" fill=\"#1f2937\">➜</text>\n<line x1=\"330\" y1=\"180\" x2=\"580\" y2=\"180\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<path d=\"M 455 180 L 395 180 A 60 60 0 0 1 420 131 Z\" fill=\"#ef4444\"/>\n<path d=\"M 455 180 L 420 131 A 60 60 0 0 1 480 125 Z\" fill=\"#16a34a\"/>\n<path d=\"M 455 180 L 480 125 A 60 60 0 0 1 515 180 Z\" fill=\"#3b82f6\"/>\n<text x=\"455\" y=\"220\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">= 180°</text>\n</svg>"
    },
    {
     "label": "🧊 Poligoane în corpurile 3D",
     "html": "<p>Poligoanele sunt „plate”, dar le găsești ca <b>fețe</b> ale corpurilor. Rotește piramida: baza este un poligon, fețele laterale sunt <b>triunghiuri</b>. Schimbă corpul și numără fețele de fiecare fel.</p>",
     "scene": "solid",
     "options": {
      "shape": "pyramid",
      "n": 5,
      "r": 1.1,
      "h": 1.3,
      "color": "#a855f7",
      "labels": true,
      "shapes": [
       "pyramid",
       "prism",
       "cube"
      ]
     }
    },
    {
     "label": "🔺 Paie și curățătoare de pipă",
     "html": "<p>În multe școli din <b>nordul Europei</b> se construiește înainte de a desena. Ia paie și curățătoare de pipă (sau scobitori și plastilină):</p>\n<ul>\n<li>fă un pătrat și împinge-l de un colț: se deformează și devine un <b>romb</b>. Unghiurile se schimbă, laturile nu!</li>\n<li>fă un triunghi și împinge-l: <b>nu se mișcă</b>. Triunghiul este rigid.</li>\n<li>adaugă o diagonală la pătrat: acum sunt 2 triunghiuri și nu se mai deformează. Este trucul porților și al macaralelor!</li>\n</ul>"
    },
    {
     "label": "🇬🇷 Arhimede: poligonul care devine cerc",
     "html": "<p><b>Arhimede</b> a fost un mare matematician <b>grec</b> care trăia la <b>Siracuza</b>, în Sicilia, în secolul al III-lea î.Hr. Voia să afle de câte ori cuprinde circumferința diametrul (numărul pe care îl numim azi <b>π</b>). Ideea lui: să deseneze <b>poligoane regulate</b> în interiorul cercului, cu tot <b>mai multe laturi</b>: 6, 12, 24, 48, 96. Cu cât poligonul are mai multe laturi, cu atât seamănă mai mult cu cercul!</p><p>Cu poligonul de 96 de laturi a descoperit că π este puțin mai mare decât 3 10/71 și puțin mai mic decât 3 1/7, adică aproximativ <b>3,14</b>.</p><p>🎯 <b>Construiește hexagonul lui Arhimede</b>:</p><ol><li>Desenează un cerc cu compasul. <b>Nu schimba deschiderea!</b></li><li>Așază compasul într-un punct al cercului și fă un semn pe cerc. Așază-l pe semn și fă alt semn. Continuă: semnele sunt exact <b>6</b>.</li><li>Unește semnele cu rigla: iată un <b>hexagon regulat</b>.</li></ol><p>Latura hexagonului are lungimea egală cu <b>raza</b>! Deci perimetrul este 6 raze = 3 diametre. Cercul este puțin mai lung decât hexagonul: de aceea π este puțin mai mare decât 3.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"160\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"160,30 263.9,90 263.9,210 160,270 56.1,210 56.1,90\" fill=\"#fde68a\" fill-opacity=\"0.8\" stroke=\"#b45309\" stroke-width=\"3\"/><line x1=\"160\" y1=\"150\" x2=\"160\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"166\" y=\"95\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">r</text><text x=\"222\" y=\"56\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" font-weight=\"bold\">r</text><circle cx=\"440\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"440,30 500,46.1 543.9,90 560,150 543.9,210 500,253.9 440,270 380,253.9 336.1,210 320,150 336.1,90 380,46.1\" fill=\"#bbf7d0\" fill-opacity=\"0.8\" stroke=\"#15803d\" stroke-width=\"3\"/><text x=\"160\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6 laturi</text><text x=\"440\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">12 laturi: aproape un cerc!</text></svg>"
    },
    {
     "label": "🕌 Stelele geometrice din arta arabă",
     "html": "<p>În moschei, în palate și în cărțile lumii <b>arabe</b> și islamice există decorațiuni făcute numai din <b>poligoane regulate</b>: stele, hexagoane, octogoane care se îmbină. Meșterii le desenau cu <b>rigla și compasul</b>, pornind mereu de la un cerc. Una dintre cele mai faimoase stele este <b>steaua cu 8 colțuri</b>.</p><ol><li>Desenează un cerc și un <b>pătrat</b> cu vârfurile pe cerc.</li><li>Desenează un <b>al doilea pătrat egal</b>, cu același centru, dar <b>rotit cu 45°</b> (vârfurile lui sunt la jumătatea distanței dintre cele ale primului).</li><li>Cele două pătrate împreună formează o <b>stea cu 8 colțuri</b>.</li></ol><p>Acum caută poligoanele ascunse: în centru este un <b>octogon</b> (8 laturi, contur roșu); pe colțuri sunt <b>8 triunghiuri</b> isoscele. Câte laturi are conturul stelei? <b>16</b>! Este un poligon <b>concav</b>: unele dintre unghiurile lui sunt mai mari decât un unghi alungit.</p><p>🎯 Încearcă cu <b>două triunghiuri echilaterale</b>: unul cu vârful în sus și unul cu vârful în jos. Ce stea obții? Și ce poligon se află în centru?</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><circle cx=\"300\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><polygon points=\"300,25 425,150 300,275 175,150\" fill=\"#2563eb\" fill-opacity=\"0.55\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"388.4,61.6 388.4,238.4 211.6,238.4 211.6,61.6\" fill=\"#f59e0b\" fill-opacity=\"0.55\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"336.6,61.6 388.4,113.4 388.4,186.6 336.6,238.4 263.4,238.4 211.6,186.6 211.6,113.4 263.4,61.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"40\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e3a8a\" font-weight=\"bold\">pătratul 1</text><text x=\"40\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" font-weight=\"bold\">+ pătratul 2</text><text x=\"40\" y=\"104\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\">rotit cu 45°</text><text x=\"450\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">în centru:</text><text x=\"450\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">un octogon</text><text x=\"450\" y=\"220\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">pe colțuri:</text><text x=\"450\" y=\"242\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">8 triunghiuri</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta poligoanelor: atinge un nod și află de ce",
   "nodes": [
    {
     "id": "piano",
     "label": "Puncte, drepte și plan",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "„Ingredientele” de bază ale geometriei: punctul, linia dreaptă și planul.",
     "why": "Nu se definesc: se acceptă ca idei de pornire. Matematicianul grec <b>Euclid</b>, la Alexandria Egiptului, în jurul anului 300 î.Hr., a scris <i>Elementele</i>, pornind de la puține <b>postulate</b> (adevăruri de pornire) precum „prin două puncte trece o singură dreaptă”. Tot restul se demonstrează de acolo."
    },
    {
     "id": "spezzata",
     "label": "Linie frântă închisă",
     "x": 50,
     "y": 24,
     "color": "#0ea5e9",
     "html": "O linie făcută din segmente consecutive care se întoarce în punctul de plecare fără să se încrucișeze.",
     "why": "Servește ca să „împrejmuiești” o parte de plan. Dacă linia ar fi curbă am avea figuri precum cercul; dacă ar fi deschisă, nu ar închide nimic."
    },
    {
     "id": "poligono",
     "label": "Poligon",
     "x": 50,
     "y": 42,
     "color": "#16a34a",
     "html": "Partea de plan închisă de o linie frântă închisă, inclusiv conturul.",
     "why": "Din greacă <i>polýs</i> (mulți) + <i>gonía</i> (unghi). Vechii egipteni și babilonieni măsurau deja câmpuri în formă de triunghiuri și trapeze; grecii au dat numele și demonstrațiile."
    },
    {
     "id": "elementi",
     "label": "Laturi, vârfuri, unghiuri, diagonale",
     "x": 15,
     "y": 42,
     "color": "#f59e0b",
     "html": "Părțile oricărui poligon. Laturile, vârfurile și unghiurile sunt mereu în același număr.",
     "why": "Fiecare latură se termină într-un vârf unde începe latura următoare: mergând în jurul figurii întâlnești pe rând o latură și un vârf, deci sunt în număr egal."
    },
    {
     "id": "regolare",
     "label": "Poligon regulat",
     "x": 85,
     "y": 42,
     "color": "#a855f7",
     "html": "Are toate laturile și toate unghiurile egale.",
     "why": "Poate fi desenat mereu în interiorul unui cerc cu vârfurile pe circumferință. Euclid învăța să construiești triunghiul echilateral, pătratul, pentagonul și hexagonul regulat numai cu rigla și compasul. În 1796 tânărul <b>Gauss</b> a descoperit că se poate construi și poligonul regulat cu 17 laturi!"
    },
    {
     "id": "triangolo",
     "label": "Triunghi",
     "x": 25,
     "y": 70,
     "color": "#ef4444",
     "html": "Poligon cu 3 laturi. Se clasifică după laturi și după unghiuri.",
     "why": "Este cel mai simplu și mai rigid poligon: trei laturi fixează forma. Orice alt poligon poate fi împărțit în triunghiuri trasând diagonalele dintr-un vârf."
    },
    {
     "id": "somma180",
     "label": "Suma unghiurilor = 180°",
     "x": 25,
     "y": 92,
     "color": "#dc2626",
     "html": "Unghiurile interioare ale oricărui triunghi însumează mereu 180°.",
     "why": "Se demonstrează cu <b>postulatul al cincilea al lui Euclid</b> (al paralelelor): trasează din vârf o paralelă la bază, și cele trei unghiuri se regăsesc unul lângă altul pe dreaptă, adică formează un unghi alungit. Pe o sferă (ca Pământul) postulatul nu este valabil, iar suma depășește 180°!"
    },
    {
     "id": "quadrilatero",
     "label": "Patrulatere",
     "x": 75,
     "y": 70,
     "color": "#2563eb",
     "html": "Poligoane cu 4 laturi: trapeze, paralelograme, romburi, dreptunghiuri, pătrate.",
     "why": "Se clasifică după <b>perechile de laturi paralele</b>: 0 (patrulater oarecare), 1 (trapez), 2 (paralelogram și „copiii” lui romb, dreptunghi și pătrat)."
    },
    {
     "id": "somma360",
     "label": "Suma unghiurilor = 360°",
     "x": 75,
     "y": 92,
     "color": "#1d4ed8",
     "html": "Unghiurile interioare ale oricărui patrulater însumează 360°.",
     "why": "O diagonală îl împarte în 2 triunghiuri: 2 × 180° = 360°. În general un poligon cu n laturi se împarte în (n − 2) triunghiuri, deci suma este (n − 2) × 180°: pentru pentagon 540°, pentru hexagon 720°."
    }
   ],
   "edges": [
    [
     "piano",
     "spezzata",
     "din segmente se formează"
    ],
    [
     "spezzata",
     "poligono",
     "închide"
    ],
    [
     "poligono",
     "elementi",
     "are"
    ],
    [
     "poligono",
     "regolare",
     "poate fi"
    ],
    [
     "poligono",
     "triangolo",
     "3 laturi"
    ],
    [
     "poligono",
     "quadrilatero",
     "4 laturi"
    ],
    [
     "triangolo",
     "somma180",
     "proprietate"
    ],
    [
     "quadrilatero",
     "somma360",
     "= 2 triunghiuri"
    ],
    [
     "somma180",
     "somma360",
     "× 2"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: triunghiuri și patrulatere",
   "questions": [
    {
     "type": "num",
     "q": "Într-un triunghi două unghiuri măsoară 90° și 35°. Cât măsoară al treilea?",
     "answer": 55,
     "unit": "°",
     "explain": "180 − 90 − 35 = 55°."
    },
    {
     "type": "mc",
     "q": "Un patrulater cu o singură pereche de laturi paralele este un…",
     "options": [
      "romb",
      "trapez",
      "dreptunghic"
     ],
     "answer": 1,
     "explain": "Trapezul are o singură pereche de laturi paralele, bazele."
    },
    {
     "type": "tf",
     "q": "Pătratul este și dreptunghi.",
     "answer": true,
     "explain": "Are 4 unghiuri drepte: deci este un dreptunghi special (cu toate laturile egale)."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Poligon",
   "d": "Parte de plan mărginită de o linie frântă închisă, cu tot cu contur."
  },
  {
   "t": "Latură",
   "d": "Fiecare dintre segmentele care formează conturul poligonului."
  },
  {
   "t": "Vârf",
   "d": "Punctul în care se întâlnesc două laturi consecutive."
  },
  {
   "t": "Diagonală",
   "d": "Segment care unește două vârfuri neconsecutive."
  },
  {
   "t": "Poligon regulat",
   "d": "Poligon cu toate laturile și toate unghiurile egale."
  },
  {
   "t": "Poligon concav",
   "d": "Poligon cu o intrătură: cel puțin un unghi depășește 180°."
  },
  {
   "t": "Triunghi isoscel",
   "d": "Triunghi cu două laturi egale."
  },
  {
   "t": "Triunghi scalen",
   "d": "Triunghi cu trei laturi diferite."
  },
  {
   "t": "Unghi drept",
   "d": "Unghi de 90°, ca unghiul unei foi."
  },
  {
   "t": "Laturi paralele",
   "d": "Laturi care se află pe drepte ce nu se întâlnesc niciodată."
  },
  {
   "t": "Trapez",
   "d": "Patrulater cu o singură pereche de laturi paralele."
  },
  {
   "t": "Paralelogram",
   "d": "Patrulater cu două perechi de laturi paralele."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Cum se numește poligonul cu 6 laturi?",
    "options": [
     "Pentagon",
     "Hexagon",
     "Octogon"
    ],
    "answer": 1,
    "explain": "6 laturi: hexagon, ca celulele albinelor."
   },
   {
    "type": "num",
    "q": "Câte laturi are un decagon?",
    "answer": 10,
    "explain": "Deca = zece."
   },
   {
    "type": "tf",
    "q": "Un triunghi poate avea două unghiuri drepte.",
    "answer": false,
    "explain": "90° + 90° = 180°: pentru al treilea unghi nu ar rămâne nimic."
   },
   {
    "type": "num",
    "q": "Într-un triunghi două unghiuri măsoară 60° și 80°. Cât măsoară al treilea?",
    "answer": 40,
    "unit": "°",
    "explain": "180 − 60 − 80 = 40°."
   },
   {
    "type": "mc",
    "q": "Un triunghi cu laturile de 6 cm, 6 cm și 4 cm este…",
    "options": [
     "echilateral",
     "isoscel",
     "scalen"
    ],
    "answer": 1,
    "explain": "Are două laturi egale: isoscel."
   },
   {
    "type": "mc",
    "q": "Care patrulater are 4 laturi egale, dar unghiurile NU sunt drepte?",
    "options": [
     "Romb",
     "Dreptunghi",
     "Trapez"
    ],
    "answer": 0,
    "explain": "Rombul are laturile egale și unghiurile opuse egale, dar nu drepte."
   },
   {
    "type": "num",
    "q": "Trei unghiuri ale unui patrulater măsoară 90°, 90° și 100°. Cât măsoară al patrulea?",
    "answer": 80,
    "unit": "°",
    "explain": "360 − 90 − 90 − 100 = 80°."
   },
   {
    "type": "text",
    "q": "Cum se numește segmentul care unește două vârfuri care nu sunt vecine?",
    "answer": [
     "diagonală",
     "diagonala"
    ],
    "explain": "Este diagonala."
   },
   {
    "type": "tf",
    "q": "Triunghiul nu are diagonale.",
    "answer": true,
    "explain": "În triunghi fiecare vârf este vecin cu celelalte două: nu există vârfuri neconsecutive."
   },
   {
    "type": "order",
    "q": "Pune în ordine de la poligonul cu cele mai puține laturi la cel cu cele mai multe.",
    "items": [
     "Triunghi",
     "Patrulater",
     "Pentagon",
     "Hexagon",
     "Octogon"
    ],
    "explain": "3, 4, 5, 6, 8 laturi."
   },
   {
    "type": "mc",
    "q": "Un poligon regulat trebuie să aibă…",
    "options": [
     "doar laturile egale",
     "doar unghiurile egale",
     "laturile și unghiurile toate egale"
    ],
    "answer": 2,
    "explain": "Sunt necesare amândouă."
   }
  ],
  "gen": [
   [
    "triAngle",
    2
   ]
  ]
 }
});
