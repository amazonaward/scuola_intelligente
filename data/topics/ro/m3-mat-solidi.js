TOPIC('ro', {
 "id": "m3-mat-solidi",
 "title": "Corpurile geometrice: arie și volum",
 "intro": "Cutii, doze, cornete de înghețată, mingi: suntem înconjurați de corpuri geometrice. Învățăm să le recunoaștem, să calculăm cât material trebuie ca să le construim (<b>aria</b>) și cât spațiu ocupă (<b>volumul</b>).",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Poliedre și corpuri de rotație",
   "html": "<p>Un <b>corp geometric</b> este o figură cu trei dimensiuni: lungime, lățime, înălțime. Se împart în două mari familii:</p><ul><li><b>Poliedre</b>: mărginite numai de poligoane (<b>fețele</b>). Fețele se întâlnesc în <b>muchii</b>, muchiile în <b>vârfuri</b>. Exemple: cubul, paralelipipedul, prisma, piramida.</li><li><b>Corpuri de rotație</b>: se obțin rotind o figură plană în jurul unei axe. Au suprafețe curbe. Exemple: cilindrul (dreptunghi care se rotește), conul (triunghi dreptunghic care se rotește), sfera (semicerc care se rotește).</li></ul>"
  },
  {
   "type": "3d",
   "title": "Explorează corpurile în 3D",
   "scene": "solid",
   "options": {
    "shape": "cube",
    "shapes": [
     "cube",
     "box",
     "prism",
     "pyramid",
     "cylinder",
     "cone",
     "sphere"
    ],
    "labels": true,
    "color": "#60a5fa"
   },
   "caption": "Rotește fiecare corp cu degetul sau cu mouse-ul. Numără fețele, muchiile și vârfurile poliedrelor."
  },
  {
   "type": "remember",
   "title": "Relația lui Euler",
   "html": "<p>În orice poliedru convex este adevărat: <b>F + V − M = 2</b> (fețe + vârfuri − muchii).</p><p>Cub: 6 + 8 − 12 = 2 ✔ &nbsp; Piramidă cu baza pătrat: 5 + 5 − 8 = 2 ✔</p>"
  },
  {
   "type": "text",
   "title": "2. Arie și volum: care e diferența?",
   "html": "<ul><li><b>Aria laterală</b> (A<sub>l</sub>) este aria fețelor laterale.</li><li><b>Aria totală</b> (A<sub>t</sub>) este A<sub>l</sub> + aria bazelor. Se măsoară în cm², m²…</li><li><b>Volumul</b> (V) este spațiul ocupat. Se măsoară în cm³, dm³, m³.</li></ul><p>Amintește-ți transformările: <b>1 dm³ = 1 litru</b>; 1 m³ = 1000 dm³ = 1000 de litri; 1 cm³ = 1 ml.</p><p>Ca să calculăm aria, este util să ne imaginăm <b>desfășurarea plană</b> a corpului: îl „deschidem” și îl întindem pe masă.</p>"
  },
  {
   "type": "svg",
   "title": "Desfășurarea cubului și a cilindrului",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#ffffff\"/><g fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"><rect x=\"80\" y=\"30\" width=\"60\" height=\"60\"/><rect x=\"20\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"140\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"200\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"150\" width=\"60\" height=\"60\"/></g><text x=\"140\" y=\"250\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cub: 6 pătrate egale</text><text x=\"140\" y=\"275\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">A<tspan font-size=\"12\" dy=\"4\">t</tspan><tspan dy=\"-4\"> = 6 · l²</tspan></text><g stroke=\"#9a3412\" stroke-width=\"2\"><rect x=\"330\" y=\"95\" width=\"220\" height=\"90\" fill=\"#fed7aa\"/><circle cx=\"440\" cy=\"60\" r=\"35\" fill=\"#fdba74\"/><circle cx=\"440\" cy=\"220\" r=\"35\" fill=\"#fdba74\"/></g><text x=\"440\" y=\"145\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\">baza = 2πr (lungimea cercului)</text><text x=\"560\" y=\"145\" font-size=\"16\" font-family=\"sans-serif\">h</text><text x=\"440\" y=\"290\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cilindru: 1 dreptunghi + 2 cercuri</text></svg>",
   "caption": "Desfășurarea plană: cubul se deschide în 6 pătrate, cilindrul într-un dreptunghi (suprafața laterală) și două cercuri."
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege: de ce formulele sunt așa",
   "intro": "Formulele volumelor nu trebuie doar învățate pe de rost: ele se pot „vedea” și chiar atinge.",
   "tabs": [
    {
     "label": "🪙 Principiul lui Cavalieri",
     "html": "<p>Ia o fișic de monede drept și apoi împinge-l într-o parte: devine strâmb, dar monedele sunt aceleași, deci <b>volumul nu se schimbă</b>. Bonaventura Cavalieri (1635), elev al lui Galilei, a transformat ideea într-un principiu: <b>dacă două corpuri au aceeași înălțime și, la fiecare înălțime, secțiuni cu aceeași arie, atunci au același volum</b>. De aceea o prismă oblică are același volum ca una dreaptă: V = A<sub>bazei</sub> × h.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><ellipse cx=\"150\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"400\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"420\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"438\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"453\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"463\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"469\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"471\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"468\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"462\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"454\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"150\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Fișic drept</text><text x=\"440\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Fișic strâmb</text><text x=\"300\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">Aceleași monede = același volum</text></svg>"
    },
    {
     "label": "📐 Desfășurări plane",
     "html": "<p>Taie corpul de-a lungul unor muchii și deschide-l pe masă: obții <b>desfășurarea</b>. Aria desfășurării este <b>aria totală</b>. Cilindrul devine un dreptunghi (lung cât lungimea cercului, 2πr) plus două cercuri; conul, un sector de cerc plus un cerc.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/><g transform=\"translate(20,40)\" stroke=\"#1e3a8a\" stroke-width=\"2\" fill=\"#bfdbfe\"><rect x=\"50\" y=\"0\" width=\"50\" height=\"50\"/><rect x=\"0\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"100\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"150\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"100\" width=\"50\" height=\"50\"/></g><text x=\"120\" y=\"230\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Cub: 6 pătrate</text><g transform=\"translate(260,30)\" stroke=\"#166534\" stroke-width=\"2\" fill=\"#bbf7d0\"><circle cx=\"60\" cy=\"25\" r=\"25\"/><rect x=\"0\" y=\"50\" width=\"157\" height=\"80\"/><circle cx=\"60\" cy=\"155\" r=\"25\"/></g><text x=\"340\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Cilindru: dreptunghi</text><text x=\"340\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">lung de 2πr + 2 cercuri</text><g transform=\"translate(470,40)\" stroke=\"#9a3412\" stroke-width=\"2\" fill=\"#fed7aa\"><path d=\"M60,0 L0,110 A125,125 0 0 0 120,110 Z\"/><circle cx=\"60\" cy=\"158\" r=\"28\"/></g><text x=\"530\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Con: sector</text><text x=\"530\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">de cerc + cerc</text></svg>"
    },
    {
     "label": "💧 Cu apă",
     "html": "<p>Ia un con și un cilindru de plastic cu <b>aceeași bază și aceeași înălțime</b>. Umple conul cu apă și toarnă-l în cilindru: trebuie exact <b>3 conuri</b> ca să-l umpli. Iată de ce V<sub>con</sub> = πr²h : 3. La fel e pentru piramidă și prismă. Arhimede a descoperit și că sfera are <b>2/3</b> din volumul cilindrului în care este înscrisă.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><g transform=\"translate(60,40)\"><polygon points=\"0,0 120,0 60,180\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">con plin cu apă</text></g><text x=\"235\" y=\"140\" font-size=\"28\" fill=\"#b91c1c\" font-weight=\"bold\">× 3 =</text><g transform=\"translate(340,40)\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#93c5fd\" opacity=\".85\"/><line x1=\"0\" y1=\"60\" x2=\"120\" y2=\"60\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><line x1=\"0\" y1=\"120\" x2=\"120\" y2=\"120\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">cilindru plin</text></g><text x=\"520\" y=\"100\" font-size=\"15\" fill=\"#1f2937\">aceeași bază</text><text x=\"520\" y=\"125\" font-size=\"15\" fill=\"#1f2937\">aceeași</text><text x=\"520\" y=\"148\" font-size=\"15\" fill=\"#1f2937\">înălțime</text></svg>"
    },
    {
     "label": "🧊 Cuburi 3D",
     "html": "<p>Volumul este <b>numărul de cuburi unitate</b> care umplu corpul. Un paralelipiped 4 × 3 × 2 conține 4 × 3 = 12 cuburi pe strat și sunt 2 straturi: 24 de cuburi. Schimbă dimensiunile cu cursoarele și numără!</p>",
     "scene": "blocks",
     "options": {
      "mode": "volume",
      "a": 4,
      "b": 3,
      "c": 2
     }
    },
    {
     "label": "🔺 3 piramide = 1 cub",
     "html": "<p>Un cub se poate împărți în <b>3 piramide egale</b> cu baza pătrat, toate cu vârful în același colț al cubului. Fiecare are deci o treime din volumul cubului: V = l² × l : 3. Rotește piramida și imaginează-ți că pui trei la un loc.</p>",
     "scene": "solid",
     "options": {
      "shape": "pyramid",
      "n": 4,
      "h": 1.4,
      "labels": true
     }
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Formularul",
   "html": "<table><tr><th>Corp</th><th>Aria laterală</th><th>Aria totală</th><th>Volum</th></tr><tr><td>Cub (muchia l)</td><td>4·l²</td><td>6·l²</td><td>l³</td></tr><tr><td>Paralelipiped (a, b, c)</td><td>P<sub>b</sub>·c = 2(a+b)·c</td><td>2(ab + bc + ac)</td><td>a·b·c</td></tr><tr><td>Prismă dreaptă</td><td>P<sub>b</sub>·h</td><td>A<sub>l</sub> + 2·A<sub>b</sub></td><td>A<sub>b</sub>·h</td></tr><tr><td>Piramidă regulată (apotema a)</td><td>P<sub>b</sub>·a / 2 (semiperimetru × apotemă)</td><td>A<sub>l</sub> + A<sub>b</sub></td><td>A<sub>b</sub>·h / 3</td></tr><tr><td>Cilindru</td><td>2πr·h</td><td>2πr·h + 2πr²</td><td>πr²·h</td></tr><tr><td>Con (generatoarea a)</td><td>πr·a</td><td>πr·a + πr²</td><td>πr²·h / 3</td></tr><tr><td>Sferă</td><td>—</td><td>4πr²</td><td>4/3·πr³</td></tr></table><p>La con, generatoarea (apotema) se află cu Pitagora: <b>a = √(r² + h²)</b>. La piramida cu baza pătrat de latură l: <b>a = √(h² + (l/2)²)</b>.</p>"
  },
  {
   "type": "remember",
   "title": "Regula „împărțit la 3”",
   "html": "<p>Piramida și conul au volumul egal cu <b>o treime</b> din volumul prismei și al cilindrului cu aceeași bază și aceeași înălțime. Cu un con plin cu apă se umple cilindrul corespunzător exact din <b>3 turnări</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu: câtă apă încape în acvariu?",
   "html": "<p>Un acvariu în formă de paralelipiped are 60 cm × 30 cm × 40 cm.</p><p>V = 60 × 30 × 40 = <b>72 000 cm³</b> = 72 dm³ = <b>72 de litri</b>.</p><p>Ca să știm câtă sticlă trebuie (fără capac): aria bazei 60×30 = 1800 cm², pereții 2·(60×40) + 2·(30×40) = 4800 + 2400 = 7200 cm². Total: <b>9000 cm²</b> = 0,9 m².</p>"
  },
  {
   "type": "example",
   "title": "Exemplu: eticheta dozei",
   "html": "<p>O doză cilindrică are raza de 3,3 cm și înălțimea de 11,5 cm.</p><ul><li>Eticheta (aria laterală): 2π·3,3·11,5 ≈ <b>238,4 cm²</b>.</li><li>Volumul: π·3,3²·11,5 ≈ 3,14·10,89·11,5 ≈ <b>393 cm³</b>, adică aproximativ 0,39 litri: este doza de 33 cl, cu puțin spațiu gol sus!</li></ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-test 1",
   "questions": [
    {
     "type": "num",
     "q": "Volumul unui cub cu muchia de 5 cm?",
     "answer": 125,
     "tol": 0,
     "unit": "cm³",
     "explain": "V = l³ = 5 × 5 × 5 = 125 cm³."
    },
    {
     "type": "mc",
     "q": "Care dintre acestea este un corp de rotație?",
     "options": [
      "Prisma",
      "Piramida",
      "Conul",
      "Cubul"
     ],
     "answer": 2,
     "explain": "Conul se obține rotind un triunghi dreptunghic în jurul unei catete."
    },
    {
     "type": "num",
     "q": "Câți litri sunt 3 dm³?",
     "answer": 3,
     "tol": 0,
     "unit": "litri",
     "explain": "1 dm³ = 1 litru."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Densitatea: de la volum la greutate",
   "html": "<p>Fiecare material are propria <b>densitate</b> (ρ): câte grame cântărește 1 cm³. <b>Masa = Volum × densitate</b>.</p><table><tr><th>Material</th><th>ρ (g/cm³)</th></tr><tr><td>Plută</td><td>0,25</td></tr><tr><td>Lemn de brad</td><td>0,5</td></tr><tr><td>Apă</td><td>1</td></tr><tr><td>Sticlă</td><td>2,5</td></tr><tr><td>Fier</td><td>7,8</td></tr><tr><td>Aur</td><td>19,3</td></tr></table><p>Un cub de fier cu muchia de 10 cm: V = 1000 cm³ → masa = 1000 × 7,8 = <b>7800 g = 7,8 kg</b>. Dacă densitatea este mai mică decât 1, obiectul <b>plutește</b> pe apă.</p>"
  },
  {
   "type": "curiosity",
   "title": "Premiul lui Arhimede",
   "html": "<p>Arhimede din Siracuza (secolul al III-lea î.Hr.) a demonstrat că volumul unei sfere este exact <b>2/3</b> din volumul cilindrului care o conține. Era atât de mândru încât a vrut o sferă înscrisă într-un cilindru pe mormântul său. Secole mai târziu, Cicero a regăsit mormântul tocmai datorită acelui desen.</p>"
  },
  {
   "type": "curiosity",
   "title": "De ce baloanele de săpun sunt sferice?",
   "html": "<p>Dintre toate corpurile cu același volum, <b>sfera</b> este cea cu aria cea mai mică. Pelicula de săpun „trage” ca să ocupe o suprafață cât mai mică și așa devine o sferă. Din același motiv animalele se fac ghem când e frig: își micșorează suprafața prin care pierd căldură.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test 2",
   "questions": [
    {
     "type": "num",
     "q": "Un paralelipiped are dimensiunile 4 cm, 5 cm, 10 cm. Volumul?",
     "answer": 200,
     "tol": 0,
     "unit": "cm³",
     "explain": "V = 4 × 5 × 10 = 200 cm³."
    },
    {
     "type": "mc",
     "q": "Un cilindru și un con au aceeași bază și aceeași înălțime. Volumul conului este:",
     "options": [
      "egal",
      "jumătate",
      "o treime",
      "dublu"
     ],
     "answer": 2,
     "explain": "V con = πr²h / 3."
    },
    {
     "type": "tf",
     "q": "Într-un poliedru este adevărat F + V − M = 2.",
     "answer": true,
     "explain": "Este relația lui Euler."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Hartă conceptuală: de unde vin formulele",
   "nodes": [
    {
     "id": "unita",
     "label": "Unitatea de volum: cubulețul",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "<p>1 cm³ este un cub cu muchia de 1 cm; 1 dm³ = 1 litru.</p>",
     "why": "<p>A măsura înseamnă a compara cu o unitate. Pentru lungimi folosim un segment, pentru arii un pătrățel, pentru volume un cubuleț. Sistemul metric (Franța, 1795) a legat litrul de decimetrul cub.</p>"
    },
    {
     "id": "par",
     "label": "Paralelipiped: V = a·b·c",
     "x": 22,
     "y": 24,
     "color": "#2563eb",
     "html": "<p>Straturi de cuburi: a·b cuburi pe strat, c straturi.</p>",
     "why": "<p>Este o simplă numărare: rânduri × coloane × straturi. Funcționează și cu măsuri care nu sunt numere întregi, trecând la cuburi din ce în ce mai mici.</p>"
    },
    {
     "id": "cav",
     "label": "Principiul lui Cavalieri",
     "x": 78,
     "y": 24,
     "color": "#7c3aed",
     "html": "<p>Aceleași secțiuni la fiecare înălțime → același volum.</p>",
     "why": "<p>Cavalieri (1635) își imagina corpul ca pe un teanc de foi foarte subțiri („indivizibili”). Este o idee care anticipează calculul integral al lui Newton și Leibniz.</p>"
    },
    {
     "id": "prisma",
     "label": "Prismă și cilindru: V = A_b · h",
     "x": 50,
     "y": 44,
     "color": "#0d9488",
     "html": "<p>Aria bazei ori înălțimea.</p>",
     "why": "<p>Orice prismă are aceleași secțiuni ca un paralelipiped cu aceeași arie a bazei: după Cavalieri au același volum. Cilindrul este ca o prismă cu o infinitate de laturi.</p>"
    },
    {
     "id": "piramide",
     "label": "Piramidă și con: V = A_b · h : 3",
     "x": 22,
     "y": 66,
     "color": "#ea580c",
     "html": "<p>O treime din prisma corespunzătoare.</p>",
     "why": "<p>Euclid (Elementele, cartea a XII-a) a demonstrat că o prismă triunghiulară se descompune în 3 piramide echivalente. Și mai înainte, egiptenii calculau volumul trunchiului de piramidă (Papirusul de la Moscova, cca 1850 î.Hr.).</p>"
    },
    {
     "id": "sfera",
     "label": "Sferă: V = 4/3 π r³",
     "x": 78,
     "y": 66,
     "color": "#dc2626",
     "html": "<p>Și aria A = 4πr².</p>",
     "why": "<p>Arhimede (sec. al III-lea î.Hr.) a demonstrat că sfera are 2/3 din volumul și din aria cilindrului circumscris. Era atât de mândru încât a vrut figura sferă-cilindru pe mormântul lui.</p>"
    },
    {
     "id": "eulero",
     "label": "Relația lui Euler F + V − M = 2",
     "x": 22,
     "y": 90,
     "color": "#a855f7",
     "html": "<p>Este adevărată pentru orice poliedru convex.</p>",
     "why": "<p>Euler a publicat-o în 1758. Dacă adaugi un vârf tăind un colț, cresc împreună fețele, vârfurile și muchiile astfel încât rezultatul să rămână 2: de aceea regula nu se schimbă niciodată.</p>"
    },
    {
     "id": "peso",
     "label": "Masă = Volum × densitate",
     "x": 78,
     "y": 90,
     "color": "#475569",
     "html": "<p>Din volum se află masa unui obiect.</p>",
     "why": "<p>Fiecare material are densitatea sa (apa 1 g/cm³, fierul aproximativ 7,8). Arhimede a înțeles că coroana lui Hieron nu era din aur curat măsurându-i volumul cu apa dezlocuită.</p>"
    }
   ],
   "edges": [
    [
     "unita",
     "par",
     "număr cuburile"
    ],
    [
     "par",
     "prisma",
     "generalizează"
    ],
    [
     "cav",
     "prisma",
     "demonstrează"
    ],
    [
     "prisma",
     "piramide",
     "÷ 3"
    ],
    [
     "cav",
     "sfera",
     "folosit pentru"
    ],
    [
     "prisma",
     "sfera",
     "comparare cu cilindrul"
    ],
    [
     "prisma",
     "peso",
     "servește la"
    ],
    [
     "piramide",
     "eulero",
     "poliedre"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Poliedru",
   "d": "Corp mărginit de poligoane."
  },
  {
   "t": "Corp de rotație",
   "d": "Corp obținut rotind o figură plană în jurul unei drepte (axă)."
  },
  {
   "t": "Muchie",
   "d": "Segmentul în care se întâlnesc două fețe ale unui poliedru."
  },
  {
   "t": "Apotemă",
   "d": "La piramidă, înălțimea unei fețe laterale; la con (generatoare), segmentul de la vârf la cercul bazei."
  },
  {
   "t": "Desfășurare plană",
   "d": "Figura plană care se obține „deschizând” suprafața unui corp."
  },
  {
   "t": "Volum",
   "d": "Măsura spațiului ocupat de un corp."
  },
  {
   "t": "Densitate",
   "d": "Masa unității de volum a unui material (de ex. g/cm³)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Aria totală a unui cub cu muchia de 3 cm?",
    "answer": 54,
    "tol": 0,
    "unit": "cm²",
    "explain": "6 × 3² = 54 cm²."
   },
   {
    "type": "num",
    "q": "Volumul unui cub cu muchia de 4 cm?",
    "answer": 64,
    "tol": 0,
    "unit": "cm³",
    "explain": "4³ = 64 cm³."
   },
   {
    "type": "num",
    "q": "O prismă are aria bazei de 12 cm² și înălțimea de 10 cm. Volumul?",
    "answer": 120,
    "tol": 0,
    "unit": "cm³",
    "explain": "V = A_b × h = 120 cm³."
   },
   {
    "type": "num",
    "q": "O piramidă are aria bazei de 36 cm² și înălțimea de 5 cm. Volumul?",
    "answer": 60,
    "tol": 0,
    "unit": "cm³",
    "explain": "V = 36 × 5 / 3 = 60 cm³."
   },
   {
    "type": "num",
    "q": "Con cu raza de 3 cm și înălțimea de 4 cm: cât măsoară generatoarea?",
    "answer": 5,
    "tol": 0,
    "unit": "cm",
    "explain": "a = √(9 + 16) = 5 cm."
   },
   {
    "type": "mc",
    "q": "Volumul cilindrului se calculează cu:",
    "options": [
     "2πr·h",
     "πr²·h",
     "4πr²",
     "πr·a"
    ],
    "answer": 1,
    "explain": "Aria bazei (πr²) ori înălțimea."
   },
   {
    "type": "mc",
    "q": "Câte fețe, muchii și vârfuri are un cub?",
    "options": [
     "6, 12, 8",
     "6, 8, 12",
     "8, 12, 6",
     "4, 6, 4"
    ],
    "answer": 0,
    "explain": "6 fețe, 12 muchii, 8 vârfuri: 6 + 8 − 12 = 2."
   },
   {
    "type": "tf",
    "q": "1 m³ corespunde la 1000 de litri.",
    "answer": true,
    "explain": "1 m³ = 1000 dm³ și 1 dm³ = 1 l."
   },
   {
    "type": "num",
    "q": "Cilindru cu raza de 2 cm și înălțimea de 10 cm. Volumul (folosește π = 3,14)?",
    "answer": 125.6,
    "tol": 0.1,
    "unit": "cm³",
    "explain": "3,14 × 4 × 10 = 125,6 cm³."
   },
   {
    "type": "mc",
    "q": "Un obiect plutește pe apă dacă densitatea lui este:",
    "options": [
     "mai mare decât 1",
     "mai mică decât 1",
     "egală cu 7,8",
     "oricare"
    ],
    "answer": 1,
    "explain": "Dacă este mai puțin dens decât apa (ρ < 1 g/cm³), plutește."
   },
   {
    "type": "text",
    "q": "Cum se numește corpul obținut rotind un dreptunghi în jurul unei laturi?",
    "answer": [
     "cilindru",
     "cilindrul"
    ],
    "explain": "Este cilindrul."
   }
  ],
  "gen": [
   [
    "volCube",
    1
   ],
   [
    "volBox",
    1
   ]
  ]
 }
});
