TOPIC('ro', {
 "id": "m1-mat-potenze",
 "title": "Puterile",
 "intro": "<b>Puterea</b> este un mod rapid de a scrie o înmulțire cu factori toți egali: 2 × 2 × 2 × 2 × 2 = <b>2⁵</b>. Vom descoperi termenii, cazurile speciale, <b>proprietățile</b> care simplifică calculele și <b>notația științifică</b>, care ne permite să scriem numere uriașe (precum distanța până la stele) sau minuscule (precum mărimea unei bacterii).",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "Ce este o putere",
   "html": "<p><b>Puterea</b> unui număr este produsul mai multor factori <b>egali</b> cu acel număr.</p>\n<p style=\"font-size:1.3em;text-align:center\"><b>3⁴ = 3 × 3 × 3 × 3 = 81</b></p>\n<ul>\n<li><b>baza</b> (3) este factorul care se repetă;</li>\n<li><b>exponentul</b> (4), scris mic sus în dreapta, spune de <b>câte ori</b> se înmulțește baza cu ea însăși;</li>\n<li>rezultatul (81) se numește și el <b>putere</b>.</li>\n</ul>\n<p>Se citește „trei la puterea a patra”. Cu exponentul 2 se spune și „la <b>pătrat</b>” (5² = 25), cu exponentul 3 „la <b>cub</b>” (2³ = 8).</p>\n<p><b>Atenție la cea mai frecventă greșeală</b>: 3⁴ <b>nu</b> este 3 × 4 = 12! Este 3 × 3 × 3 × 3 = 81.</p>\n<p>Operația se numește <b>ridicare la putere</b>: este a cincea operație, după cele patru pe care le cunoști. Așa cum înmulțirea este o adunare repetată, puterea este o <b>înmulțire repetată</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Pătrate și cuburi: de ce se numesc așa",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g stroke=\"#1e3a8a\" stroke-width=\"2\" fill=\"#93c5fd\">\n<rect x=\"40\" y=\"70\" width=\"45\" height=\"45\"/><rect x=\"85\" y=\"70\" width=\"45\" height=\"45\"/><rect x=\"130\" y=\"70\" width=\"45\" height=\"45\"/>\n<rect x=\"40\" y=\"115\" width=\"45\" height=\"45\"/><rect x=\"85\" y=\"115\" width=\"45\" height=\"45\"/><rect x=\"130\" y=\"115\" width=\"45\" height=\"45\"/>\n<rect x=\"40\" y=\"160\" width=\"45\" height=\"45\"/><rect x=\"85\" y=\"160\" width=\"45\" height=\"45\"/><rect x=\"130\" y=\"160\" width=\"45\" height=\"45\"/>\n</g>\n<text x=\"107\" y=\"50\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e3a8a\">3² = 9</text>\n<text x=\"107\" y=\"240\" font-size=\"16\" text-anchor=\"middle\" fill=\"#334155\">un pătrat cu latura 3</text>\n<g stroke=\"#9a3412\" stroke-width=\"2\">\n<polygon points=\"330,120 450,120 450,240 330,240\" fill=\"#fdba74\"/>\n<polygon points=\"330,120 380,80 500,80 450,120\" fill=\"#fed7aa\"/>\n<polygon points=\"450,120 500,80 500,200 450,240\" fill=\"#fb923c\"/>\n<line x1=\"370\" y1=\"120\" x2=\"370\" y2=\"240\"/><line x1=\"410\" y1=\"120\" x2=\"410\" y2=\"240\"/>\n<line x1=\"330\" y1=\"160\" x2=\"450\" y2=\"160\"/><line x1=\"330\" y1=\"200\" x2=\"450\" y2=\"200\"/>\n<line x1=\"347\" y1=\"107\" x2=\"467\" y2=\"107\"/><line x1=\"363\" y1=\"93\" x2=\"483\" y2=\"93\"/>\n<line x1=\"370\" y1=\"120\" x2=\"420\" y2=\"80\"/><line x1=\"410\" y1=\"120\" x2=\"460\" y2=\"80\"/>\n<line x1=\"467\" y1=\"107\" x2=\"467\" y2=\"227\"/><line x1=\"483\" y1=\"93\" x2=\"483\" y2=\"213\"/>\n<line x1=\"450\" y1=\"160\" x2=\"500\" y2=\"120\"/><line x1=\"450\" y1=\"200\" x2=\"500\" y2=\"160\"/>\n</g>\n<text x=\"415\" y=\"50\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#9a3412\">3³ = 27</text>\n<text x=\"415\" y=\"275\" font-size=\"16\" text-anchor=\"middle\" fill=\"#334155\">un cub cu muchia 3</text>\n</svg>",
   "caption": "Grecii se gândeau la numere ca la figuri: 3² sunt pătrățelele unui pătrat cu latura 3, 3³ sunt cubulețele unui cub cu muchia 3."
  },
  {
   "type": "3d",
   "title": "Cubul unui număr în 3D",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 3,
    "b": 3,
    "c": 3
   },
   "caption": "3 × 3 × 3 = 3³ = 27 de cubulețe. Setează toate laturile la 4: obții 4³ = 64. Încearcă apoi cu 5: câte sunt?"
  },
  {
   "type": "remember",
   "title": "Cazurile speciale",
   "html": "<ul>\n<li><b>Exponentul 1</b>: a¹ = a (un singur factor). 7¹ = 7</li>\n<li><b>Exponentul 0</b>: a⁰ = <b>1</b> (cu a ≠ 0). 5⁰ = 1, 1000⁰ = 1 (vom vedea imediat de ce!)</li>\n<li><b>Baza 1</b>: 1ⁿ = 1. 1¹⁰⁰ = 1</li>\n<li><b>Baza 0</b>: 0ⁿ = 0 (cu n ≠ 0). 0⁵ = 0</li>\n<li><b>0⁰</b> nu are sens în aritmetică: este o formă <b>nedeterminată</b>.</li>\n<li><b>Baza 10</b>: 10ⁿ = 1 urmat de <b>n zerouri</b>. 10⁶ = 1.000.000 (un milion)</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: calculul puterilor",
   "questions": [
    {
     "type": "num",
     "q": "Cât face 2⁵?",
     "answer": 32,
     "tol": 0,
     "explain": "2 × 2 × 2 × 2 × 2 = 32."
    },
    {
     "type": "mc",
     "q": "Cât valorează 4³?",
     "options": [
      "12",
      "64",
      "43",
      "7"
     ],
     "answer": 1,
     "explain": "4 × 4 × 4 = 64. Nu 4 × 3!"
    },
    {
     "type": "num",
     "q": "Cât face 9⁰?",
     "answer": 1,
     "tol": 0,
     "explain": "Orice număr diferit de 0 ridicat la puterea 0 dă 1."
    },
    {
     "type": "tf",
     "q": "10⁴ = 10.000",
     "answer": true,
     "explain": "1 urmat de 4 zerouri."
    }
   ]
  },
  {
   "type": "text",
   "title": "Proprietățile puterilor",
   "html": "<p>Proprietățile permit să calculăm cu puteri <b>fără a le desfășura</b>. Sunt valabile numai în cazurile indicate!</p>\n<table>\n<tr><th>Proprietatea</th><th>Regula</th><th>Exemplu</th></tr>\n<tr><td><b>1. Produsul</b> puterilor cu <b>aceeași bază</b></td><td>aᵐ × aⁿ = aᵐ⁺ⁿ<br>(se adună exponenții)</td><td>2³ × 2⁴ = 2⁷ = 128</td></tr>\n<tr><td><b>2. Câtul</b> puterilor cu <b>aceeași bază</b></td><td>aᵐ : aⁿ = aᵐ⁻ⁿ<br>(se scad exponenții, m ≥ n)</td><td>5⁶ : 5⁴ = 5² = 25</td></tr>\n<tr><td><b>3. Puterea unei puteri</b></td><td>(aᵐ)ⁿ = aᵐ×ⁿ<br>(se înmulțesc exponenții)</td><td>(3²)³ = 3⁶ = 729</td></tr>\n<tr><td><b>4. Produsul</b> puterilor cu <b>același exponent</b></td><td>aⁿ × bⁿ = (a × b)ⁿ</td><td>2³ × 5³ = 10³ = 1000</td></tr>\n<tr><td><b>5. Câtul</b> puterilor cu <b>același exponent</b></td><td>aⁿ : bⁿ = (a : b)ⁿ</td><td>12² : 4² = 3² = 9</td></tr>\n</table>\n<p><b>De ce funcționează?</b> Este de ajuns să scriem factorii: 2³ × 2⁴ = (2×2×2) × (2×2×2×2) = șapte de 2 = 2⁷.</p>\n<p><b>Iată de ce a⁰ = 1</b>: 5³ : 5³ = 5³⁻³ = 5⁰; dar orice număr împărțit la el însuși dă 1. Deci 5⁰ = 1!</p>\n<p><b>Atenție</b>: nu există nicio regulă pentru <b>sumă</b>! 2³ + 2⁴ = 8 + 16 = 24, care <b>nu</b> este 2⁷ = 128.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: un exercițiu cu puteri",
   "html": "<p>În exercițiile cu mai multe operații puterile au <b>prioritate</b> față de înmulțiri și împărțiri. Ordinea: paranteze → <b>puteri</b> → × și : → + și −.</p>\n<p>Rezolvă: <b>[ (2⁴ × 2³) : 2⁵ + 3² ] × 2 − 5⁰</b></p>\n<ol>\n<li>parantezele rotunde cu proprietățile: 2⁴ × 2³ = 2⁷; 2⁷ : 2⁵ = 2² = 4</li>\n<li>3² = 9 → [ 4 + 9 ] = 13</li>\n<li>5⁰ = 1</li>\n<li>13 × 2 − 1 = 26 − 1 = <b>25</b></li>\n</ol>\n<p>Un alt truc: <b>25² × 4²</b> = (25 × 4)² = 100² = <b>10.000</b>. Fără proprietăți ar fi trebuit să calculezi 625 × 16!</p>"
  },
  {
   "type": "widget",
   "title": "Ce proprietate?",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "7² × 7⁵ = 7⁷",
      "produs, aceeași bază"
     ],
     [
      "9⁸ : 9³ = 9⁵",
      "cât, aceeași bază"
     ],
     [
      "(4³)² = 4⁶",
      "puterea unei puteri"
     ],
     [
      "2⁵ × 5⁵ = 10⁵",
      "produs, același exponent"
     ],
     [
      "15⁴ : 3⁴ = 5⁴",
      "cât, același exponent"
     ],
     [
      "8⁰ = 1",
      "exponent zero"
     ]
    ]
   },
   "caption": "Leagă fiecare egalitate de proprietatea care o justifică."
  },
  {
   "type": "text",
   "title": "Puterile lui 10 și notația științifică",
   "html": "<p><b>Puterile lui 10</b> sunt inima sistemului nostru zecimal:</p>\n<p>10¹ = 10 (zece), 10² = 100 (sută), 10³ = 1.000 (mie), 10⁶ = un milion, 10⁹ = un miliard.</p>\n<p>Orice număr se poate scrie în <b>formă dezvoltată</b> cu puterile lui 10:<br>4.705 = 4 × 10³ + 7 × 10² + 0 × 10¹ + 5 × 10⁰.</p>\n<p><b>Notația științifică</b> scrie un număr sub forma <b>a × 10ⁿ</b>, unde <b>a</b> este un număr cuprins între 1 (inclus) și 10 (exclus). Oamenii de știință o folosesc pentru numere foarte mari:</p>\n<ul>\n<li>distanța Pământ–Soare ≈ 150.000.000 km = <b>1,5 × 10⁸ km</b></li>\n<li>viteza luminii ≈ 300.000 km/s = <b>3 × 10⁵ km/s</b></li>\n<li>locuitorii Pământului ≈ 8.000.000.000 = <b>8 × 10⁹</b></li>\n</ul>\n<p><b>Cum se face</b>: mută virgula până când în față rămâne o singură cifră diferită de 0; exponentul este numărul de locuri cu care ai mutat-o. 47.000 → 4,7 (virgula se mută cu 4 locuri) → <b>4,7 × 10⁴</b>.</p>\n<p><b>Ordinul de mărime</b> este puterea lui 10 cea mai apropiată de număr: ajută la estimări rapide. De exemplu, 8 × 10⁹ are ordinul de mărime 10¹⁰ (pentru că 8 este mai aproape de 10 decât de 1).</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: pericolul zvonului",
   "html": "<p>Un mesaj fals este retrimis: în prima zi îl primește <b>1</b> persoană, care îl trimite la <b>3</b> prieteni. A doua zi fiecare dintre cei 3 îl trimite altor 3, și tot așa.</p>\n<table>\n<tr><th>Ziua</th><th>Persoane noi</th><th>Puterea</th></tr>\n<tr><td>1</td><td>3</td><td>3¹</td></tr>\n<tr><td>2</td><td>9</td><td>3²</td></tr>\n<tr><td>3</td><td>27</td><td>3³</td></tr>\n<tr><td>5</td><td>243</td><td>3⁵</td></tr>\n<tr><td>10</td><td>59.049</td><td>3¹⁰</td></tr>\n<tr><td>20</td><td>3.486.784.401</td><td>3²⁰ ≈ 3,5 × 10⁹</td></tr>\n</table>\n<p>În 20 de zile (teoretic) aproape jumătate din omenire! Această creștere se numește <b>exponențială</b>: de aceea știrile false se răspândesc atât de repede. Înainte de a retrimite, verifică!</p>"
  },
  {
   "type": "curiosity",
   "title": "Legenda tablei de șah",
   "html": "<p>O legendă indiană povestește că inventatorul șahului i-a cerut regelui ca recompensă: <b>1 bob de orez</b> pe prima căsuță, <b>2</b> pe a doua, <b>4</b> pe a treia, și tot așa, dublând până la a 64-a căsuță. Regele a râs de cererea atât de modestă…</p>\n<p>Dar pe ultima căsuță ar fi fost <b>2⁶³</b> boabe, iar în total <b>2⁶⁴ − 1 = 18.446.744.073.709.551.615</b> boabe: circa 18 miliarde de miliarde, de circa <b>600 de ori</b> producția mondială de orez dintr-un an!</p>"
  },
  {
   "type": "curiosity",
   "title": "Googolul și foaia îndoită până la Lună",
   "html": "<p>Numărul <b>10¹⁰⁰</b> (1 urmat de 100 de zerouri) se numește <b>googol</b>: numele l-a inventat în 1920 nepoțelul de 9 ani al matematicianului american Edward Kasner, Milton Sirotta. Fondatorii <b>Google</b> au ales numele companiei inspirându-se chiar din acest număr!</p>\n<p>Și un experiment imaginar: o foaie de hârtie groasă de <b>0,1 mm</b>, dacă o îndoi în două, își dublează grosimea. După <b>42 de îndoiri</b> grosimea ar fi 0,1 × 2⁴² mm ≈ <b>440.000 km</b>: mai mult decât distanța Pământ–Lună (circa 384.000 km)! În practică nimeni nu a reușit să îndoaie o foaie de mai mult de 12 ori.</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege",
   "intro": "Puterile cresc în mod surprinzător. Iată alte moduri de a le „simți”.",
   "tabs": [
    {
     "label": "🌳 Arborele dublărilor",
     "html": "<p>Imaginează-ți un arbore genealogic: tu ai 2 părinți, 4 bunici, 8 străbunici… Fiecare generație mai în urmă este o putere a lui 2. Acum zece generații (circa 300 de ani) aveai 2¹⁰ = <b>1.024</b> de strămoși!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"260\" fill=\"#f0fdf4\"/><g stroke=\"#166534\" stroke-width=\"2\"><line x1=\"300\" y1=\"225\" x2=\"160\" y2=\"165\"/><line x1=\"300\" y1=\"225\" x2=\"440\" y2=\"165\"/><line x1=\"160\" y1=\"165\" x2=\"90\" y2=\"105\"/><line x1=\"160\" y1=\"165\" x2=\"230\" y2=\"105\"/><line x1=\"440\" y1=\"165\" x2=\"370\" y2=\"105\"/><line x1=\"440\" y1=\"165\" x2=\"510\" y2=\"105\"/></g><g fill=\"#22c55e\"><circle cx=\"300\" cy=\"225\" r=\"18\"/><circle cx=\"160\" cy=\"165\" r=\"16\"/><circle cx=\"440\" cy=\"165\" r=\"16\"/><circle cx=\"90\" cy=\"105\" r=\"14\"/><circle cx=\"230\" cy=\"105\" r=\"14\"/><circle cx=\"370\" cy=\"105\" r=\"14\"/><circle cx=\"510\" cy=\"105\" r=\"14\"/></g><g fill=\"#86efac\">\n<circle cx=\"55\" cy=\"50\" r=\"11\"/><circle cx=\"125\" cy=\"50\" r=\"11\"/><circle cx=\"195\" cy=\"50\" r=\"11\"/><circle cx=\"265\" cy=\"50\" r=\"11\"/><circle cx=\"335\" cy=\"50\" r=\"11\"/><circle cx=\"405\" cy=\"50\" r=\"11\"/><circle cx=\"475\" cy=\"50\" r=\"11\"/><circle cx=\"545\" cy=\"50\" r=\"11\"/></g><g font-size=\"16\" font-weight=\"bold\" fill=\"#14532d\"><text x=\"320\" y=\"250\">tu: 2⁰ = 1</text><text x=\"470\" y=\"190\">părinți: 2¹ = 2</text><text x=\"10\" y=\"135\">bunici: 2² = 4</text><text x=\"200\" y=\"25\">străbunici: 2³ = 8</text></g></svg>"
    },
    {
     "label": "💻 Puterile în calculatoare",
     "html": "<p>Calculatoarele numără în <b>baza 2</b> (sistemul binar): folosesc doar 0 și 1. De aceea memoriile au numere „ciudate”:</p><ul><li>1 octet = 8 biți = 2³ biți, și poate avea 2⁸ = <b>256</b> de valori diferite;</li><li>1 kibioctet = 2¹⁰ = <b>1.024</b> de octeți (circa o mie);</li><li>un stick de 64 GB: 64 = 2⁶.</li></ul><p>În sistemul binar și numerele se scriu cu puterile lui 2: 13 = 8 + 4 + 1 = 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = <b>1101</b>. Este același principiu ca la forma dezvoltată în baza 10!</p>"
    },
    {
     "label": "🧊 Pătrate în 3D",
     "html": "<p>Un pătrat de cubulețe 5 × 5 conține 5² = 25 de cubulețe. Mărește latura cu 1: pătratul devine 6² = 36. Nu s-au adăugat doar 6 cubulețe, ci 11 (un rând, o coloană și colțul)! Încearcă cu cursoarele și descoperă regula pătratelor.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 5,
      "b": 5
     }
    },
    {
     "label": "🇨🇳 Un sistem fără exponenți",
     "html": "<p>În <b>chineză</b> și în <b>japoneză</b> numerele mari se grupează câte 4 cifre, nu câte 3: există un cuvânt pentru <b>10⁴</b> (万, <i>wàn</i> / <i>man</i>) și unul pentru <b>10⁸</b> (亿, <i>yì</i> / 億 <i>oku</i>). Deci „un milion” se spune „o sută de wàn” (100 × 10⁴).</p><p>În India se folosesc <b>lakh</b> (10⁵) și <b>crore</b> (10⁷), și se scrie 1,00,00,000 în loc de 10.000.000! Același număr, grupări diferite: puterile lui 10 sunt limbajul comun care îi pune pe toți de acord.</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: proprietăți și notația științifică",
   "questions": [
    {
     "type": "mc",
     "q": "3⁵ × 3² = ?",
     "options": [
      "3¹⁰",
      "3⁷",
      "9⁷",
      "3³"
     ],
     "answer": 1,
     "explain": "Aceeași bază: se adună exponenții, 5 + 2 = 7."
    },
    {
     "type": "mc",
     "q": "(2³)⁴ = ?",
     "options": [
      "2⁷",
      "2¹²",
      "2⁸¹",
      "8⁷"
     ],
     "answer": 1,
     "explain": "Puterea unei puteri: se înmulțesc exponenții, 3 × 4 = 12."
    },
    {
     "type": "mc",
     "q": "Cum se scrie 6.200.000 în notația științifică?",
     "options": [
      "62 × 10⁵",
      "6,2 × 10⁶",
      "0,62 × 10⁷",
      "6,2 × 10⁵"
     ],
     "answer": 1,
     "explain": "Virgula se mută cu 6 locuri; în față rămâne o singură cifră, 6,2."
    },
    {
     "type": "tf",
     "q": "2³ + 2² = 2⁵",
     "answer": false,
     "explain": "8 + 4 = 12, în timp ce 2⁵ = 32. Pentru sumă nu există proprietăți!"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta: de ce funcționează așa puterile",
   "nodes": [
    {
     "id": "moltiplicazione",
     "label": "Înmulțire repetată",
     "x": 50,
     "y": 5,
     "color": "#64748b",
     "html": "Factori toți egali: 2 × 2 × 2.",
     "why": "Așa cum înmulțirea prescurtează adunarea repetată, puterea prescurtează înmulțirea repetată."
    },
    {
     "id": "potenza",
     "label": "Puterea aⁿ",
     "x": 50,
     "y": 20,
     "color": "#2563eb",
     "html": "Baza a, exponentul n.",
     "why": "Notația cu exponentul scris sus a fost introdusă de René Descartes (Cartesius) în „La Géométrie”, în 1637. Înainte se scria desfășurat sau cu cuvinte (pătrat, cub)."
    },
    {
     "id": "figure",
     "label": "Pătrate și cuburi",
     "x": 15,
     "y": 32,
     "color": "#ea580c",
     "html": "a² = aria unui pătrat, a³ = volumul unui cub.",
     "why": "Pitagoreicii (secolul al VI-lea î.Hr.) reprezentau numerele cu pietricele așezate în figuri: de aici numele „pătrat” și „cub”."
    },
    {
     "id": "casi",
     "label": "Cazuri speciale",
     "x": 85,
     "y": 32,
     "color": "#0ea5e9",
     "html": "a¹ = a, a⁰ = 1, 1ⁿ = 1, 0ⁿ = 0.",
     "why": "a⁰ = 1 nu este o regulă inventată la întâmplare: este singura valoare care face adevărată proprietatea câtului (aⁿ : aⁿ = a⁰ = 1)."
    },
    {
     "id": "proprieta",
     "label": "Proprietăți",
     "x": 50,
     "y": 44,
     "color": "#9333ea",
     "html": "Aceeași bază: + sau − exponenții; puterea unei puteri: × exponenții; același exponent: × sau : bazele.",
     "why": "Toate derivă din numărarea factorilor: aᵐ × aⁿ are m factori plus n factori. Comutativitatea și asociativitatea înmulțirii permit gruparea lor."
    },
    {
     "id": "espressioni",
     "label": "Puterile în exerciții",
     "x": 20,
     "y": 64,
     "color": "#f59e0b",
     "html": "Paranteze → puteri → × și : → + și −.",
     "why": "Puterea „leagă” și mai tare decât înmulțirea, pentru că este o formă prescurtată a ei."
    },
    {
     "id": "dieci",
     "label": "Puterile lui 10",
     "x": 50,
     "y": 66,
     "color": "#16a34a",
     "html": "10ⁿ = 1 urmat de n zerouri.",
     "why": "Sunt baza sistemului zecimal pozițional: fiecare poziție valorează de 10 ori cât cea din dreapta. Arhimede (secolul al III-lea î.Hr.) a folosit în „Psamitul” un sistem asemănător pentru a număra grăunțele de nisip din univers."
    },
    {
     "id": "scientifica",
     "label": "Notația științifică",
     "x": 80,
     "y": 64,
     "color": "#dc2626",
     "html": "a × 10ⁿ cu 1 ≤ a < 10.",
     "why": "Oamenii de știință au nevoie de ea ca să compare mărimi foarte îndepărtate: de la galaxii la viruși. Face calculele mai simple și arată imediat ordinul de mărime."
    },
    {
     "id": "esponenziale",
     "label": "Creșterea exponențială",
     "x": 35,
     "y": 88,
     "color": "#db2777",
     "html": "A dubla sau a tripla la fiecare pas: se crește foarte repede.",
     "why": "Bacteriile, contagiunile, dobânzile de la bancă, știrile virale cresc așa. Legenda tablei de șah arată cât de mult subestimează intuiția noastră puterile."
    },
    {
     "id": "binario",
     "label": "Baza 2 și calculatoarele",
     "x": 70,
     "y": 88,
     "color": "#0f766e",
     "html": "Calculatoarele folosesc puterile lui 2.",
     "why": "Gottfried Leibniz a descris sistemul binar în 1703; în secolul al XX-lea Claude Shannon a arătat că circuitele electrice pornit/oprit pot calcula cu 0 și 1."
    }
   ],
   "edges": [
    [
     "moltiplicazione",
     "potenza",
     "se prescurtează în"
    ],
    [
     "potenza",
     "figure",
     "exponenți 2 și 3"
    ],
    [
     "potenza",
     "casi",
     "exponenți 0 și 1"
    ],
    [
     "potenza",
     "proprieta",
     "are"
    ],
    [
     "proprieta",
     "casi",
     "explică a⁰ = 1"
    ],
    [
     "proprieta",
     "espressioni",
     "simplifică"
    ],
    [
     "potenza",
     "dieci",
     "baza 10"
    ],
    [
     "dieci",
     "scientifica",
     "permite"
    ],
    [
     "potenza",
     "esponenziale",
     "descrie"
    ],
    [
     "esponenziale",
     "binario",
     "baza 2"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Putere",
   "d": "Produs de mai mulți factori egali: aⁿ."
  },
  {
   "t": "Baza",
   "d": "Factorul care se repetă într-o putere."
  },
  {
   "t": "Exponent",
   "d": "Numărul care arată de câte ori se înmulțește baza cu ea însăși."
  },
  {
   "t": "Pătrat",
   "d": "Putere cu exponentul 2."
  },
  {
   "t": "Cub",
   "d": "Putere cu exponentul 3."
  },
  {
   "t": "Putere a lui 10",
   "d": "10ⁿ: 1 urmat de n zerouri."
  },
  {
   "t": "Notație științifică",
   "d": "Scrierea unui număr sub forma a × 10ⁿ, cu a cuprins între 1 și 10 (exclus)."
  },
  {
   "t": "Ordin de mărime",
   "d": "Puterea lui 10 cea mai apropiată de un număr."
  },
  {
   "t": "Creștere exponențială",
   "d": "Creștere în care, la fiecare pas, cantitatea se înmulțește cu același număr."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Cât face 5³?",
    "answer": 125,
    "tol": 0,
    "explain": "5 × 5 × 5 = 125."
   },
   {
    "type": "mc",
    "q": "În 7⁴, numărul 4 se numește…",
    "options": [
     "bază",
     "exponent",
     "factor",
     "putere"
    ],
    "answer": 1,
    "explain": "Exponentul arată de câte ori se înmulțește baza 7 cu ea însăși."
   },
   {
    "type": "tf",
    "q": "1²⁰ = 20",
    "answer": false,
    "explain": "1 înmulțit cu el însuși de câte ori vrei dă mereu 1."
   },
   {
    "type": "mc",
    "q": "2⁶ : 2² = ?",
    "options": [
     "2³",
     "2⁴",
     "2⁸",
     "1³"
    ],
    "answer": 1,
    "explain": "Aceeași bază: se scad exponenții, 6 − 2 = 4."
   },
   {
    "type": "num",
    "q": "Calculează cu proprietatea: 4³ × 25³ = ? (scrie numărul)",
    "answer": 1000000,
    "tol": 0,
    "explain": "(4 × 25)³ = 100³ = 1.000.000."
   },
   {
    "type": "mc",
    "q": "Care număr este scris corect în notația științifică?",
    "options": [
     "35 × 10⁴",
     "0,7 × 10³",
     "3,5 × 10⁵",
     "10 × 10²"
    ],
    "answer": 2,
    "explain": "Numărul din față trebuie să fie între 1 (inclus) și 10 (exclus)."
   },
   {
    "type": "num",
    "q": "Rezolvă: 2³ + 3² × 2 − 4⁰",
    "answer": 25,
    "tol": 0,
    "explain": "8 + 9 × 2 − 1 = 8 + 18 − 1 = 25."
   },
   {
    "type": "num",
    "q": "Rezolvă: (5² − 4²)² : 3⁴",
    "answer": 1,
    "tol": 0,
    "explain": "25 − 16 = 9; 9² = 81; 3⁴ = 81; 81 : 81 = 1."
   },
   {
    "type": "mc",
    "q": "Cât valorează 10⁹?",
    "options": [
     "Un milion",
     "Un miliard",
     "O mie",
     "O sută de milioane"
    ],
    "answer": 1,
    "explain": "1 urmat de 9 zerouri: 1.000.000.000."
   },
   {
    "type": "text",
    "q": "Cum se citește „6²”? (șase la …)",
    "answer": [
     "pătrat",
     "la pătrat",
     "șase la pătrat"
    ],
    "explain": "Șase la pătrat = 36."
   },
   {
    "type": "order",
    "q": "Pune în ordine de la cel mai mic la cel mai mare",
    "items": [
     "2³",
     "3²",
     "2⁴",
     "5²",
     "3³"
    ],
    "explain": "8 < 9 < 16 < 25 < 27."
   },
   {
    "type": "mc",
    "q": "De ce 7⁰ = 1?",
    "options": [
     "Este o convenție fără motiv",
     "Pentru că 7³ : 7³ = 7⁰ și orice număr împărțit la el însuși dă 1",
     "Pentru că 7 × 0 = 0",
     "Pentru că 0 nu contează"
    ],
    "answer": 1,
    "explain": "Proprietatea câtului obligă a⁰ să valoreze 1."
   }
  ],
  "gen": [
   [
    "power",
    3
   ]
  ]
 }
});
