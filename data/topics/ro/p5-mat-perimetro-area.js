TOPIC('ro', {
 "id": "p5-mat-perimetro-area",
 "title": "Perimetrul și aria",
 "intro": "De câtă panglică e nevoie ca să decorezi marginea unui tablou? Câte plăci trebuie ca să acoperi podeaua? Ca să răspundem avem nevoie de două măsuri diferite: <b>perimetrul</b> și <b>aria</b>.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Perimetru și arie: care e diferența?",
   "html": "<p>Orice figură plană are două măsuri importante:</p>\n<ul>\n<li><b>perimetrul</b> este <b>lungimea conturului</b> figurii. Se măsoară în unități de lungime: <b>cm, m, km…</b> Se notează cu <b>P</b>.</li>\n<li><b>aria</b> este <b>măsura suprafeței</b>, adică a spațiului pe care îl ocupă figura „înăuntrul” conturului. Se măsoară în unități pătrate: <b>cm², m², km²…</b> Se notează cu <b>A</b>.</li>\n</ul>\n<p>Imaginează-ți un teren de fotbal: <b>perimetrul</b> este lungimea liniei albe care îl înconjoară; <b>aria</b> este toată iarba de tuns.</p>\n<p><b>1 cm²</b> (centimetru pătrat) este aria unui pătrățel cu latura de 1 cm. A calcula o arie înseamnă a număra câte astfel de pătrățele „încap” în figură.</p>"
  },
  {
   "type": "svg",
   "title": "Contur și suprafață",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<text x=\"150\" y=\"30\" font-size=\"18\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">PERIMETRU = contur</text>\n<rect x=\"50\" y=\"60\" width=\"200\" height=\"120\" fill=\"#fff7ed\" stroke=\"#dc2626\" stroke-width=\"6\"/>\n<text x=\"150\" y=\"55\" font-size=\"15\" text-anchor=\"middle\" fill=\"#dc2626\">5 cm</text>\n<text x=\"150\" y=\"200\" font-size=\"15\" text-anchor=\"middle\" fill=\"#dc2626\">5 cm</text>\n<text x=\"40\" y=\"125\" font-size=\"15\" text-anchor=\"end\" fill=\"#dc2626\">3 cm</text>\n<text x=\"260\" y=\"125\" font-size=\"15\" fill=\"#dc2626\">3 cm</text>\n<text x=\"150\" y=\"235\" font-size=\"16\" text-anchor=\"middle\" fill=\"#111\">P = 5+3+5+3 = 16 cm</text>\n<text x=\"450\" y=\"30\" font-size=\"18\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">ARIE = suprafață</text>\n<g fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"2\">\n<rect x=\"350\" y=\"60\" width=\"40\" height=\"40\"/><rect x=\"390\" y=\"60\" width=\"40\" height=\"40\"/><rect x=\"430\" y=\"60\" width=\"40\" height=\"40\"/><rect x=\"470\" y=\"60\" width=\"40\" height=\"40\"/><rect x=\"510\" y=\"60\" width=\"40\" height=\"40\"/>\n<rect x=\"350\" y=\"100\" width=\"40\" height=\"40\"/><rect x=\"390\" y=\"100\" width=\"40\" height=\"40\"/><rect x=\"430\" y=\"100\" width=\"40\" height=\"40\"/><rect x=\"470\" y=\"100\" width=\"40\" height=\"40\"/><rect x=\"510\" y=\"100\" width=\"40\" height=\"40\"/>\n<rect x=\"350\" y=\"140\" width=\"40\" height=\"40\"/><rect x=\"390\" y=\"140\" width=\"40\" height=\"40\"/><rect x=\"430\" y=\"140\" width=\"40\" height=\"40\"/><rect x=\"470\" y=\"140\" width=\"40\" height=\"40\"/><rect x=\"510\" y=\"140\" width=\"40\" height=\"40\"/>\n</g>\n<text x=\"450\" y=\"235\" font-size=\"16\" text-anchor=\"middle\" fill=\"#111\">A = 5 × 3 = 15 cm²</text>\n</svg>",
   "caption": "Același dreptunghi: în stânga măsurăm marginea (perimetrul), în dreapta numărăm pătrățelele de 1 cm² (aria)."
  },
  {
   "type": "text",
   "title": "Cum se calculează perimetrul",
   "html": "<p>Ca să calculezi perimetrul unui <b>poligon</b>, e de ajuns să <b>aduni lungimile tuturor laturilor</b>.</p>\n<p>Pentru unele figuri există scurtături:</p>\n<table>\n<tr><th>Figura</th><th>Perimetru</th></tr>\n<tr><td>Pătrat (4 laturi egale)</td><td>P = latura × 4</td></tr>\n<tr><td>Dreptunghi</td><td>P = (baza + înălțimea) × 2</td></tr>\n<tr><td>Triunghi echilateral (3 laturi egale)</td><td>P = latura × 3</td></tr>\n<tr><td>Romb (4 laturi egale)</td><td>P = latura × 4</td></tr>\n<tr><td>Poligon regulat cu n laturi</td><td>P = latura × n</td></tr>\n</table>\n<p><b>Atenție:</b> înainte să aduni, toate măsurile trebuie să aibă <b>aceeași unitate</b> (de exemplu toate în cm).</p>"
  },
  {
   "type": "svg",
   "title": "Formulele ariilor",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#ffffff\"/>\n<g font-size=\"15\" fill=\"#111\">\n<rect x=\"20\" y=\"30\" width=\"80\" height=\"80\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"60\" y=\"130\" text-anchor=\"middle\" font-weight=\"bold\">Pătrat</text>\n<text x=\"60\" y=\"150\" text-anchor=\"middle\">A = l × l</text>\n<rect x=\"140\" y=\"45\" width=\"130\" height=\"65\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<text x=\"205\" y=\"130\" text-anchor=\"middle\" font-weight=\"bold\">Dreptunghi</text>\n<text x=\"205\" y=\"150\" text-anchor=\"middle\">A = b × h</text>\n<polygon points=\"320,110 350,40 450,40 420,110\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<line x1=\"350\" y1=\"40\" x2=\"350\" y2=\"110\" stroke=\"#1d4ed8\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<text x=\"356\" y=\"85\" font-size=\"13\">h</text>\n<text x=\"385\" y=\"130\" text-anchor=\"middle\" font-weight=\"bold\">Paralelogram</text>\n<text x=\"385\" y=\"150\" text-anchor=\"middle\">A = b × h</text>\n<polygon points=\"500,110 560,30 620,110\" fill=\"#fbcfe8\" stroke=\"#be185d\" stroke-width=\"3\"/>\n<line x1=\"560\" y1=\"30\" x2=\"560\" y2=\"110\" stroke=\"#be185d\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<text x=\"566\" y=\"80\" font-size=\"13\">h</text>\n<text x=\"560\" y=\"130\" text-anchor=\"middle\" font-weight=\"bold\">Triunghi</text>\n<text x=\"560\" y=\"150\" text-anchor=\"middle\">A = b × h : 2</text>\n<polygon points=\"110,180 160,230 110,280 60,230\" fill=\"#ddd6fe\" stroke=\"#6d28d9\" stroke-width=\"3\"/>\n<line x1=\"60\" y1=\"230\" x2=\"160\" y2=\"230\" stroke=\"#6d28d9\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"180\" x2=\"110\" y2=\"280\" stroke=\"#6d28d9\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<text x=\"250\" y=\"220\" font-weight=\"bold\">Romb</text>\n<text x=\"250\" y=\"240\">A = D × d : 2</text>\n<text x=\"250\" y=\"260\" font-size=\"13\">(D și d = diagonale)</text>\n<polygon points=\"420,280 450,190 540,190 600,280\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"3\"/>\n<line x1=\"450\" y1=\"190\" x2=\"450\" y2=\"280\" stroke=\"#c2410c\" stroke-dasharray=\"5 4\" stroke-width=\"2\"/>\n<text x=\"510\" y=\"235\" text-anchor=\"middle\" font-weight=\"bold\">Trapez</text>\n<text x=\"510\" y=\"255\" text-anchor=\"middle\">A = (B + b) × h : 2</text>\n</g>\n</svg>",
   "caption": "b = baza, h = înălțimea, l = latura. Înălțimea (punctată) este mereu perpendiculară pe bază."
  },
  {
   "type": "text",
   "title": "De ce funcționează formulele?",
   "html": "<p>Formulele nu sunt magice: se înțeleg cu puțină foarfecă!</p>\n<ul>\n<li><b>Dreptunghiul</b>: dacă baza este 5 cm și înălțimea 3 cm, sunt 3 rânduri a câte 5 pătrățele: 5 × 3 = 15 cm².</li>\n<li><b>Paralelogramul</b>: tai triunghiul din stânga și îl muți în dreapta: devine un dreptunghi cu aceeași bază și aceeași înălțime. Deci A = b × h.</li>\n<li><b>Triunghiul</b>: două triunghiuri egale, puse împreună, formează un paralelogram. Deci aria triunghiului este <b>jumătate</b>: A = b × h : 2.</li>\n<li><b>Rombul</b>: este jumătate din dreptunghiul care are ca laturi cele două diagonale: A = D × d : 2.</li>\n<li><b>Trapezul</b>: două trapeze egale, unul răsturnat, formează un paralelogram cu baza B + b: A = (B + b) × h : 2.</li>\n</ul>"
  },
  {
   "type": "widget",
   "title": "Laborator: schimbă dreptunghiul",
   "widget": "areaGrid",
   "options": {
    "w": 5,
    "h": 3,
    "max": 12
   },
   "caption": "Mișcă cursoarele și observă cum se schimbă perimetrul și aria. Reușești să găsești două dreptunghiuri cu aceeași arie, dar cu perimetre diferite?"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege perimetrul și aria",
   "intro": "Formulele nu-ți intră în cap? Nicio problemă: iată alte drumuri ca să înțelegi cu adevărat ce calculezi.",
   "tabs": [
    {
     "label": "🐜 Furnica și pictorul",
     "html": "<p>Imaginează-ți o figură desenată pe podea.</p><ul><li>O <b>furnică</b> merge pe margine până se întoarce la punctul de plecare: drumul pe care îl parcurge este <b>perimetrul</b>. Se măsoară în cm, m… (o lungime).</li><li>Un <b>pictor</b> trebuie să coloreze tot interiorul: cantitatea de podea de vopsit este <b>aria</b>. Se măsoară în cm², m²… (pătrățele).</li></ul><p>De aceea perimetrul și aria nu se pot compara: unul este un drum, cealaltă o suprafață!</p>"
    },
    {
     "label": "🟦 Numără pătrățelele",
     "html": "<p>Folosește cursoarele: fiecare pătrățel este 1 cm². Numără pătrățelele de pe un rând, apoi câte rânduri sunt. Rânduri × pătrățele pe rând = aria. Îți dai seama că este exact <b>baza × înălțimea</b>! Apoi fă turul marginii numărând laturile pătrățelelor: acesta este perimetrul.</p>",
     "widget": "areaGrid",
     "options": {
      "w": 6,
      "h": 4,
      "max": 12
     }
    },
    {
     "label": "🧊 Cu cuburi 3D",
     "html": "<p>Așază cuburile în rânduri ordonate: 5 cuburi pe rând, 3 rânduri. Câte sunt? 5 × 3 = 15. Privește-le de sus: „amprenta” lor este un dreptunghi cu aria de 15 pătrățele. Schimbă numerele cu cursoarele și observă cum crește dreptunghiul.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 5,
      "b": 3
     }
    },
    {
     "label": "✂️ Decupează și recompune",
     "html": "<p>Trucul matematicienilor: <b>transformă o figură în alta pe care știm deja s-o măsurăm</b>, fără să pierdem sau să adăugăm hârtie.</p><ul><li><b>Paralelogramul</b>: tai triunghiul din stânga și îl muți în dreapta: devine un dreptunghi cu aceeași bază și aceeași înălțime. Aria = b × h.</li><li><b>Triunghiul</b>: două triunghiuri egale puse împreună formează un paralelogram. Deci triunghiul este jumătate: Aria = b × h : 2.</li><li><b>Trapezul</b>: două trapeze egale, unul răsturnat, formează un paralelogram cu baza (B + b). Aria = (B + b) × h : 2.</li></ul><p>Încearcă de-adevăratelea cu o foaie și o foarfecă!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"40,200 100,80 260,80 200,200\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"200\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/><polygon points=\"40,200 100,80 100,200\" fill=\"#fca5a5\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"150\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">paralelogram</text><text x=\"300\" y=\"150\" font-size=\"40\" text-anchor=\"middle\" fill=\"#334155\">→</text><rect x=\"360\" y=\"80\" width=\"160\" height=\"120\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><polygon points=\"460,200 520,80 520,200\" fill=\"#fca5a5\" stroke=\"#b91c1c\" stroke-width=\"2\"/><text x=\"440\" y=\"235\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">dreptunghi: b × h</text><text x=\"130\" y=\"40\" font-size=\"16\" text-anchor=\"middle\" fill=\"#b91c1c\">tai aici triunghiul roșu…</text><text x=\"470\" y=\"40\" font-size=\"16\" text-anchor=\"middle\" fill=\"#b91c1c\">…și îl mut aici</text></svg>"
    },
    {
     "label": "🏺 Agrimensorii egipteni",
     "html": "<p>În fiecare an <b>Nilul</b> se revărsa și ștergea hotarele câmpurilor. „Întinzătorii de frânghii” egipteni (agrimensorii) trebuiau să măsoare din nou terenurile ca să știe câte taxe trebuia să plătească fiecare țăran.</p><p>Foloseau o <b>frânghie cu 12 noduri</b> la distanțe egale: întinzând-o în formă de triunghi cu laturi de 3, 4 și 5 spații, obțineau un <b>unghi drept</b> perfect, iar de acolo trasau dreptunghiuri. Împărțeau apoi câmpurile neregulate în dreptunghiuri și triunghiuri, exact cum facem noi!</p><p>Cuvântul <b>geometrie</b> vine din greacă și înseamnă chiar „măsurarea pământului”.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"240\" fill=\"#fef3c7\"/><polygon points=\"180,210 315,210 315,30\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"5\"/><g fill=\"#78350f\"><circle cx=\"180\" cy=\"210\" r=\"7\"/><circle cx=\"225\" cy=\"210\" r=\"7\"/><circle cx=\"270\" cy=\"210\" r=\"7\"/><circle cx=\"315\" cy=\"210\" r=\"7\"/><circle cx=\"315\" cy=\"165\" r=\"7\"/><circle cx=\"315\" cy=\"120\" r=\"7\"/><circle cx=\"315\" cy=\"75\" r=\"7\"/><circle cx=\"315\" cy=\"30\" r=\"7\"/><circle cx=\"288\" cy=\"66\" r=\"7\"/><circle cx=\"261\" cy=\"102\" r=\"7\"/><circle cx=\"234\" cy=\"138\" r=\"7\"/><circle cx=\"207\" cy=\"174\" r=\"7\"/></g><rect x=\"297\" y=\"192\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"248\" y=\"234\" font-size=\"18\" text-anchor=\"middle\" fill=\"#78350f\" font-weight=\"bold\">3 spații</text><text x=\"330\" y=\"125\" font-size=\"18\" fill=\"#78350f\" font-weight=\"bold\">4 spații</text><text x=\"225\" y=\"95\" font-size=\"18\" text-anchor=\"end\" fill=\"#78350f\" font-weight=\"bold\">5 spații</text><text x=\"470\" y=\"205\" font-size=\"16\" text-anchor=\"middle\" fill=\"#dc2626\">unghi drept!</text><text x=\"470\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" fill=\"#78350f\">12 noduri în total</text></svg>"
    },
    {
     "label": "📐 Formula lui Heron",
     "html": "<p>Și dacă la un triunghi cunoști doar <b>cele trei laturi</b> și nu înălțimea? Heron din Alexandria (secolul I d.Hr.) a găsit o formulă specială:</p><ol><li>calculezi semiperimetrul: s = (a + b + c) : 2</li><li>Aria = √( s × (s − a) × (s − b) × (s − c) )</li></ol><p><b>Exemplu</b>: laturile 3, 4 și 5 cm → s = 6; Aria = √(6 × 3 × 2 × 1) = √36 = <b>6 cm²</b>. Verifică cu formula obișnuită: triunghiul este dreptunghic, baza 3 și înălțimea 4 → 3 × 4 : 2 = 6 cm². Același rezultat pe două drumuri diferite!</p>"
    }
   ]
  },
  {
   "type": "curiosity",
   "title": "Același perimetru, arie diferită!",
   "html": "<p>Un dreptunghi de 6 × 2 și un pătrat de 4 × 4 au perimetre <b>egale</b> (16 cm), dar arii diferite: 12 cm² și 16 cm²!</p>\n<p>Și invers: un dreptunghi de 12 × 1 și unul de 4 × 3 au <b>aceeași arie</b> (12 cm²), dar perimetre de 26 cm și 14 cm.</p>\n<p>La perimetru egal, dreptunghiul cu aria cea mai mare este întotdeauna <b>pătratul</b>. De aceea albinele construiesc celule hexagonale, iar țăranii de odinioară căutau câmpuri cât mai „pătrate”: mai puțin gard pentru mai mult teren!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: perimetrul",
   "questions": [
    {
     "type": "num",
     "q": "Un pătrat are latura de 7 cm. Cât este perimetrul?",
     "answer": 28,
     "tol": 0,
     "unit": "cm",
     "explain": "P = 7 × 4 = 28 cm."
    },
    {
     "type": "num",
     "q": "Un dreptunghi are baza de 9 cm și înălțimea de 4 cm. Cât este perimetrul?",
     "answer": 26,
     "tol": 0,
     "unit": "cm",
     "explain": "P = (9 + 4) × 2 = 26 cm."
    },
    {
     "type": "mc",
     "q": "În ce unitate se măsoară perimetrul?",
     "options": [
      "cm²",
      "cm",
      "kg",
      "litri"
     ],
     "answer": 1,
     "explain": "Perimetrul este o lungime: se măsoară în cm, m, km…"
    }
   ]
  },
  {
   "type": "example",
   "title": "Exemplu practic: gardul grădinii de legume",
   "html": "<p>Bunicul are o grădină dreptunghiulară lungă de <b>12 m</b> și lată de <b>8 m</b>. Vrea s-o împrejmuiască cu o plasă care costă <b>3 € pe metru</b>.</p>\n<ol>\n<li>Câtă plasă trebuie? Este <b>perimetrul</b>: P = (12 + 8) × 2 = <b>40 m</b>.</li>\n<li>Cât cheltuiește? 40 × 3 = <b>120 €</b>.</li>\n<li>Vrea și să semene tot terenul: ce suprafață are? Este <b>aria</b>: A = 12 × 8 = <b>96 m²</b>.</li>\n<li>Un plic de semințe ajunge pentru 8 m²: trebuie 96 : 8 = <b>12 plicuri</b>.</li>\n</ol>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: plăcile din cameră",
   "html": "<p>Podeaua camerei este un dreptunghi de <b>4 m × 3 m</b>. Vrem s-o acoperim cu plăci pătrate cu latura de <b>50 cm</b>.</p>\n<ol>\n<li>Aria podelei: 4 × 3 = <b>12 m²</b>.</li>\n<li>O placă: 0,5 m × 0,5 m = <b>0,25 m²</b>.</li>\n<li>Plăci necesare: 12 : 0,25 = <b>48 de plăci</b>.</li>\n</ol>\n<p>Verificare cu altă metodă: pe 4 m încap 8 plăci, pe 3 m încap 6. 8 × 6 = 48. ✔️</p>"
  },
  {
   "type": "remember",
   "title": "Unitățile de măsură pentru suprafețe",
   "html": "<p>Măsurile de suprafață „sar” din <b>100 în 100</b>, pentru că un pătrat mare conține 10 rânduri a câte 10 pătrate mici:</p>\n<p><b>1 m² = 100 dm² = 10.000 cm²</b></p>\n<p><b>1 dm² = 100 cm²</b> &nbsp;&nbsp; <b>1 cm² = 100 mm²</b></p>\n<p>Pentru terenuri se folosesc și <b>hectarul</b> (1 ha = 10.000 m², cam un teren și jumătate de fotbal) și <b>km²</b> (1 km² = 1.000.000 m²).</p>"
  },
  {
   "type": "curiosity",
   "title": "Cât de mare este Italia?",
   "html": "<p>Italia are o suprafață de circa <b>302.000 km²</b>. Cea mai mare regiune este <b>Sicilia</b> (circa 25.800 km²), cea mai mică este <b>Valle d'Aosta</b> (circa 3.260 km²).</p>\n<p>Cel mai mic stat din lume, <b>Vaticanul</b>, măsoară doar 0,44 km²: mai puțin de 62 de terenuri de fotbal!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: aria",
   "questions": [
    {
     "type": "num",
     "q": "Aria unui dreptunghi cu baza de 8 cm și înălțimea de 5 cm?",
     "answer": 40,
     "tol": 0,
     "unit": "cm²",
     "explain": "A = 8 × 5 = 40 cm²."
    },
    {
     "type": "num",
     "q": "Aria unui triunghi cu baza de 10 cm și înălțimea de 6 cm?",
     "answer": 30,
     "tol": 0,
     "unit": "cm²",
     "explain": "A = 10 × 6 : 2 = 30 cm²."
    },
    {
     "type": "tf",
     "q": "Două figuri cu același perimetru au întotdeauna aceeași arie.",
     "answer": false,
     "explain": "Nu: un dreptunghi de 6 × 2 și un pătrat de 4 × 4 au același perimetru (16), dar arii diferite (12 și 16)."
    },
    {
     "type": "num",
     "q": "Câți cm² sunt într-un dm²?",
     "answer": 100,
     "tol": 0,
     "unit": "cm²",
     "explain": "1 dm² = 10 cm × 10 cm = 100 cm²."
    }
   ]
  },
  {
   "type": "3d",
   "title": "De la arie la volum: adăugăm etaje",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 4,
    "b": 3,
    "c": 2
   },
   "caption": "Un dreptunghi de 4 × 3 = 12 pătrățele este baza. Dacă stivuiești 2 etaje de cuburi obții 12 × 2 = 24 de cuburi: acesta este volumul, pe care îl vei studia la gimnaziu. Aria numără pătrățelele, volumul numără cuburile."
  },
  {
   "type": "conceptMap",
   "title": "Hartă: de la unitățile de măsură la formule",
   "nodes": [
    {
     "id": "unita",
     "label": "Unități de măsură",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Ca să măsori ai nevoie de un etalon la fel pentru toți: metrul (m), cu multiplii și submultiplii lui.",
     "why": "Înainte, fiecare oraș avea măsurile lui (picioare, coți, palme…) și apăreau certuri în comerț. În timpul Revoluției Franceze (1791-1799) a fost inventat metrul, legat de măsurarea Pământului, iar de atunci sistemul metric s-a răspândit în aproape toată lumea."
    },
    {
     "id": "lunghezza",
     "label": "Lungime (cm, m)",
     "x": 22,
     "y": 26,
     "color": "#3b82f6",
     "html": "Măsura unei linii: o latură, un contur, un drum.",
     "why": "Numărăm de câte ori încape unitatea (de exemplu 1 cm) de-a lungul liniei."
    },
    {
     "id": "quadratino",
     "label": "Pătratul unitate (cm²)",
     "x": 78,
     "y": 26,
     "color": "#f59e0b",
     "html": "Un pătrat cu latura de 1 cm: aria lui este 1 cm².",
     "why": "Ca să măsori o suprafață, ai nevoie de o bucățică de suprafață ca etalon. Se alege pătratul pentru că se îmbină cu alte pătrate fără să lase goluri și acoperă tot planul."
    },
    {
     "id": "perimetro",
     "label": "Perimetrul",
     "x": 22,
     "y": 48,
     "color": "#2563eb",
     "html": "Suma lungimilor tuturor laturilor.",
     "why": "Este lungimea conturului: e de ajuns să aduni bucățile. La poligoanele regulate laturile sunt egale, deci latura × numărul laturilor."
    },
    {
     "id": "rettangolo",
     "label": "Aria dreptunghiului: b × h",
     "x": 78,
     "y": 48,
     "color": "#ea580c",
     "html": "Baza ori înălțimea.",
     "why": "În dreptunghi pătrățelele se așază pe rânduri și coloane: sunt h rânduri a câte b pătrățele, deci b × h pătrățele în total. Este înmulțirea ca șir!"
    },
    {
     "id": "parall",
     "label": "Paralelogramul: b × h",
     "x": 55,
     "y": 68,
     "color": "#16a34a",
     "html": "Aceeași formulă ca la dreptunghi.",
     "why": "Tăind un triunghi și mutându-l, se obține un dreptunghi cu aceeași bază și aceeași înălțime: aria nu se schimbă pentru că nu se ia și nu se adaugă nimic (principiul echidescompunerii)."
    },
    {
     "id": "triangolo",
     "label": "Triunghiul: b × h : 2",
     "x": 85,
     "y": 76,
     "color": "#dc2626",
     "html": "Baza ori înălțimea, împărțit la 2.",
     "why": "Două triunghiuri egale formează un paralelogram: triunghiul este jumătate din el."
    },
    {
     "id": "trapezio",
     "label": "Trapezul: (B + b) × h : 2",
     "x": 30,
     "y": 82,
     "color": "#9333ea",
     "html": "Suma bazelor ori înălțimea, împărțit la 2.",
     "why": "Două trapeze egale, unul răsturnat, formează un paralelogram cu baza B + b: trapezul este jumătate din el."
    },
    {
     "id": "rombo",
     "label": "Rombul: D × d : 2",
     "x": 60,
     "y": 94,
     "color": "#0891b2",
     "html": "Diagonala mare ori diagonala mică, împărțit la 2.",
     "why": "Rombul stă într-un dreptunghi cu laturile egale cu diagonalele și ocupă exact jumătate din el (cele 4 triunghiuri de afară sunt egale cu cele 4 dinăuntru)."
    }
   ],
   "edges": [
    [
     "unita",
     "lunghezza",
     "pentru linii"
    ],
    [
     "unita",
     "quadratino",
     "pentru suprafețe"
    ],
    [
     "lunghezza",
     "perimetro",
     "se adună"
    ],
    [
     "quadratino",
     "rettangolo",
     "se numără pe rânduri"
    ],
    [
     "rettangolo",
     "parall",
     "decupare"
    ],
    [
     "parall",
     "triangolo",
     "jumătate"
    ],
    [
     "parall",
     "trapezio",
     "jumătate din două trapeze"
    ],
    [
     "rettangolo",
     "rombo",
     "jumătate"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Perimetru",
   "d": "Lungimea conturului unei figuri plane."
  },
  {
   "t": "Arie",
   "d": "Măsura suprafeței cuprinse într-o figură."
  },
  {
   "t": "Poligon",
   "d": "Figură plană închisă, mărginită de segmente (laturi)."
  },
  {
   "t": "Bază",
   "d": "Latura pe care „se sprijină” figura."
  },
  {
   "t": "Înălțime",
   "d": "Segment perpendicular pe bază, care ajunge la latura sau vârful opus."
  },
  {
   "t": "Diagonală",
   "d": "Segment care unește două vârfuri neconsecutive ale unui poligon."
  },
  {
   "t": "Metru pătrat (m²)",
   "d": "Aria unui pătrat cu latura de 1 metru."
  },
  {
   "t": "Echivalente",
   "d": "Figuri care au aceeași arie, chiar dacă au forme diferite."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Perimetrul este…",
    "options": [
     "suprafața figurii",
     "lungimea conturului",
     "numărul laturilor",
     "înălțimea figurii"
    ],
    "answer": 1,
    "explain": "Perimetrul este lungimea conturului."
   },
   {
    "type": "mc",
    "q": "Care este formula ariei triunghiului?",
    "options": [
     "b × h",
     "b + h",
     "b × h : 2",
     "l × 3"
    ],
    "answer": 2,
    "explain": "Triunghiul este jumătate dintr-un paralelogram: A = b × h : 2."
   },
   {
    "type": "num",
    "q": "Perimetrul unui triunghi echilateral cu latura de 9 cm?",
    "answer": 27,
    "tol": 0,
    "unit": "cm",
    "explain": "P = 9 × 3 = 27 cm."
   },
   {
    "type": "num",
    "q": "Aria unui pătrat cu latura de 6 m?",
    "answer": 36,
    "tol": 0,
    "unit": "m²",
    "explain": "A = 6 × 6 = 36 m²."
   },
   {
    "type": "num",
    "q": "Aria unui romb cu diagonalele de 10 cm și 6 cm?",
    "answer": 30,
    "tol": 0,
    "unit": "cm²",
    "explain": "A = D × d : 2 = 10 × 6 : 2 = 30 cm²."
   },
   {
    "type": "num",
    "q": "Aria unui trapez cu bazele de 8 cm și 4 cm și înălțimea de 5 cm?",
    "answer": 30,
    "tol": 0,
    "unit": "cm²",
    "explain": "A = (8 + 4) × 5 : 2 = 30 cm²."
   },
   {
    "type": "tf",
    "q": "Aria se măsoară în unități pătrate, ca cm² sau m².",
    "answer": true,
    "explain": "Aria măsoară o suprafață: se folosesc unități pătrate."
   },
   {
    "type": "num",
    "q": "Un dreptunghi are aria de 24 cm² și baza de 6 cm. Cât este înălțimea?",
    "answer": 4,
    "tol": 0,
    "unit": "cm",
    "explain": "Formula inversă: h = A : b = 24 : 6 = 4 cm."
   },
   {
    "type": "num",
    "q": "Un pătrat are perimetrul de 36 cm. Cât este latura?",
    "answer": 9,
    "tol": 0,
    "unit": "cm",
    "explain": "Formula inversă: l = P : 4 = 36 : 4 = 9 cm."
   },
   {
    "type": "mc",
    "q": "Care dreptunghi are aria mai mare?",
    "options": [
     "10 × 1",
     "5 × 2",
     "4 × 3",
     "6 × 1"
    ],
    "answer": 2,
    "explain": "Arii: 10, 10, 12, 6. 4 × 3 câștigă cu 12."
   },
   {
    "type": "num",
    "q": "Câți m² sunt într-un hectar?",
    "answer": 10000,
    "tol": 0,
    "unit": "m²",
    "explain": "1 hectar = 10.000 m² (un pătrat de 100 m × 100 m)."
   }
  ],
  "gen": [
   [
    "perimRect",
    1
   ],
   [
    "areaRect",
    1
   ],
   [
    "areaTri",
    1
   ]
  ]
 }
});
