TOPIC('ro', {
 "id": "m1-mat-numeri-naturali",
 "title": "Numerele naturale și cele patru operații",
 "intro": "<b>Numerele naturale</b> sunt numerele cu care numărăm: 0, 1, 2, 3… La gimnaziu învățăm să le privim ca pe o adevărată <b>mulțime</b> (ℕ), să cunoaștem bine <b>sistemul zecimal pozițional</b> și să folosim <b>proprietățile</b> celor patru operații ca să calculăm mai repede și să rezolvăm <b>exercițiile cu mai multe operații</b>.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "Mulțimea ℕ și axa numerelor",
   "html": "<p>Mulțimea numerelor naturale se notează cu <b>ℕ</b>: ℕ = { 0, 1, 2, 3, 4, … }.</p>\n<ul>\n<li>Are un <b>prim</b> element, <b>0</b>, dar <b>nu are un ultim</b> element: este infinită. Fiecare număr n are un <b>succesor</b> n + 1.</li>\n<li>Fiecare număr (cu excepția lui 0) are un <b>predecesor</b> n − 1.</li>\n<li>Este o mulțime <b>ordonată</b>: date două numere diferite, unul este întotdeauna mai mic decât celălalt (simbolurile <b>&lt;</b>, <b>&gt;</b>, <b>=</b>).</li>\n<li>Este <b>discretă</b>: între două numere naturale consecutive (de ex. 4 și 5) nu mai există niciun alt număr natural.</li>\n</ul>\n<p>Numerele naturale se pot reprezenta pe o <b>semidreaptă orientată</b>: se alege un punct pentru 0 (<b>originea</b>), un sens (săgeata) și o <b>unitate de măsură</b> (un segment mereu egal). Fiecărui număr îi corespunde un punct.</p>"
  },
  {
   "type": "widget",
   "title": "Semidreapta numerelor naturale",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 20,
    "step": 1,
    "marks": [
     7,
     15
    ]
   },
   "caption": "Fă salturile: de la 7 la 15 câți pași sunt? Este scăderea 15 − 7 = 8!"
  },
  {
   "type": "text",
   "title": "Sistemul zecimal pozițional",
   "html": "<p>Sistemul nostru de numerație este:</p>\n<ul>\n<li><b>zecimal</b>: folosește 10 cifre (0, 1, 2, … 9) și fiecare 10 unități de un anumit ordin formează 1 unitate de ordin superior (10 unități = 1 zece, 10 zeci = 1 sută…);</li>\n<li><b>pozițional</b>: valoarea unei cifre depinde de <b>poziția</b> ei. În <b>333</b> cele trei cifre sunt la fel, dar valorează 300, 30 și 3!</li>\n</ul>\n<p>Cifrele se grupează în <b>clase</b> de câte trei: unități, mii, milioane, miliarde. Se citește de la stânga și clasele se despart printr-un punct (sau un spațiu): <b>4.507.230</b> = patru milioane cinci sute șapte mii două sute treizeci.</p>\n<p><b>Forma dezvoltată</b>: 4.507 = 4 × 1000 + 5 × 100 + 0 × 10 + 7 × 1.</p>\n<p><b>Valoarea</b> unei cifre se schimbă după poziție, iar <b>zeroul</b> este esențial: arată că acea poziție este goală (407 ≠ 47).</p>"
  },
  {
   "type": "3d",
   "title": "Valoarea de poziție cu cubulețe",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 245
   },
   "caption": "O placă = 1 sută (10 × 10 cubulețe), o bară = 1 zece, un cubuleț = 1 unitate. 245 = 2 sute + 4 zeci + 5 unități. Schimbă numărul cu cursorul."
  },
  {
   "type": "text",
   "title": "Cele patru operații și termenii lor",
   "html": "<table>\n<tr><th>Operația</th><th>Termenii</th><th>Rezultatul</th><th>Exemplu</th></tr>\n<tr><td><b>Adunarea</b> +</td><td>termeni</td><td>sumă</td><td>12 + 8 = 20</td></tr>\n<tr><td><b>Scăderea</b> −</td><td>descăzut, scăzător</td><td>diferență (sau rest)</td><td>20 − 8 = 12</td></tr>\n<tr><td><b>Înmulțirea</b> ×</td><td>factori</td><td>produs</td><td>6 × 4 = 24</td></tr>\n<tr><td><b>Împărțirea</b> :</td><td>deîmpărțit, împărțitor</td><td>cât (și rest)</td><td>24 : 4 = 6</td></tr>\n</table>\n<p>Scăderea și împărțirea sunt operațiile <b>inverse</b> ale adunării și ale înmulțirii: 20 − 8 = 12 pentru că 12 + 8 = 20; 24 : 4 = 6 pentru că 6 × 4 = 24.</p>\n<p><b>În ℕ nu se poate face întotdeauna orice</b>:</p>\n<ul>\n<li>adunarea și înmulțirea dau <b>întotdeauna</b> un număr natural: spunem că sunt operații <b>interne</b> în ℕ;</li>\n<li>scăderea se poate face doar dacă descăzutul este ≥ scăzător (3 − 5 nu dă un număr natural);</li>\n<li>împărțirea exactă se poate face doar dacă deîmpărțitul este un <b>multiplu</b> al împărțitorului; altfel există un <b>rest</b>: 25 : 4 = 6 rest 1, adică 25 = 4 × 6 + 1.</li>\n</ul>"
  },
  {
   "type": "remember",
   "title": "Zero și unu: numere speciale",
   "html": "<ul>\n<li><b>0 este elementul neutru al adunării</b>: a + 0 = a. De asemenea a − 0 = a.</li>\n<li><b>1 este elementul neutru al înmulțirii</b>: a × 1 = a. De asemenea a : 1 = a.</li>\n<li><b>0 este elementul absorbant al înmulțirii</b>: a × 0 = 0 (dacă un produs este 0, cel puțin un factor este 0).</li>\n<li><b>0 : a = 0</b> (cu a ≠ 0): zero bomboane împărțite la 5 prieteni = 0 bomboane fiecăruia.</li>\n<li><b>a : 0 este imposibil</b>: niciun număr înmulțit cu 0 nu dă a.</li>\n<li><b>0 : 0 este nedeterminat</b>: orice număr înmulțit cu 0 dă 0, deci nu există un singur răspuns.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Proprietățile operațiilor",
   "html": "<p>Proprietățile sunt „regulile jocului”, mereu adevărate, care ne ajută să <b>calculăm în minte</b> mai repede.</p>\n<ul>\n<li><b>Comutativitatea</b> (adunarea și înmulțirea): dacă schimbăm ordinea termenilor, rezultatul nu se schimbă.<br>7 + 25 = 25 + 7 &nbsp;&nbsp; 4 × 9 = 9 × 4</li>\n<li><b>Asociativitatea</b> (adunarea și înmulțirea): putem înlocui doi sau mai mulți termeni cu rezultatul lor.<br>17 + 8 + 2 = 17 + (8 + 2) = 17 + 10 = 27 &nbsp;&nbsp; 25 × 7 × 4 = (25 × 4) × 7 = 700</li>\n<li><b>Descompunerea</b>: putem descompune un termen într-o sumă (sau într-un produs).<br>48 + 7 = 48 + 2 + 5 = 55 &nbsp;&nbsp; 15 × 6 = 15 × 2 × 3 = 30 × 3 = 90</li>\n<li><b>Distributivitatea</b> înmulțirii față de adunare (și față de scădere):<br>7 × 12 = 7 × (10 + 2) = 70 + 14 = 84 &nbsp;&nbsp; 9 × 98 = 9 × (100 − 2) = 900 − 18 = 882</li>\n<li><b>Proprietatea de invarianță a scăderii</b>: dacă adăugăm sau scădem același număr la descăzut și la scăzător, diferența nu se schimbă.<br>83 − 29 = (83 + 1) − (29 + 1) = 84 − 30 = 54</li>\n<li><b>Proprietatea de invarianță a împărțirii</b>: dacă înmulțim sau împărțim deîmpărțitul și împărțitorul cu același număr (≠ 0), câtul nu se schimbă.<br>350 : 50 = 35 : 5 = 7 &nbsp;&nbsp; 140 : 5 = 280 : 10 = 28</li>\n</ul>\n<p>Atenție: scăderea și împărțirea <b>nu</b> sunt comutative (8 − 3 ≠ 3 − 8) și nici asociative ((24 : 4) : 2 = 3, dar 24 : (4 : 2) = 12).</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: calcul rapid la supermarket",
   "html": "<p>Cumperi <b>4</b> pachete de sucuri a câte <b>€ 2,99</b>... să socotim în cenți: 299 de cenți.</p>\n<p>4 × 299 = 4 × (300 − 1) = 1200 − 4 = <b>1196</b> cenți = <b>€ 11,96</b> (proprietatea distributivă).</p>\n<p>Apoi plătești cu <b>€ 20</b>: 2000 − 1196 = ? Cu proprietatea de invarianță adaug 4 la amândouă: 2004 − 1200 = <b>804</b> cenți = <b>€ 8,04</b> rest.</p>\n<p>În sfârșit, împarți cheltuiala de <b>€ 36</b> la <b>4</b> prieteni, folosind invarianța împărțirii: 36 : 4 = 18 : 2 = <b>€ 9</b> fiecare.</p>\n<p>Fără calculator: doar proprietăți!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: proprietăți",
   "questions": [
    {
     "type": "mc",
     "q": "Ce proprietate este folosită în 25 × 13 × 4 = (25 × 4) × 13?",
     "options": [
      "Distributivitatea",
      "Comutativitatea și asociativitatea",
      "Invarianța",
      "Descompunerea"
     ],
     "answer": 1,
     "explain": "Se schimbă ordinea (comutativitatea) și se grupează 25 × 4 = 100 (asociativitatea)."
    },
    {
     "type": "num",
     "q": "Calculează în minte cu distributivitatea: 6 × 102 = ?",
     "answer": 612,
     "tol": 0,
     "explain": "6 × 100 + 6 × 2 = 600 + 12 = 612."
    },
    {
     "type": "tf",
     "q": "Scăderea are proprietatea de comutativitate.",
     "answer": false,
     "explain": "10 − 4 = 6, dar 4 − 10 nici măcar nu este un număr natural."
    },
    {
     "type": "mc",
     "q": "Cât face 7 : 0?",
     "options": [
      "0",
      "7",
      "1",
      "Este imposibil"
     ],
     "answer": 3,
     "explain": "Niciun număr înmulțit cu 0 nu dă 7: împărțirea la zero este imposibilă."
    }
   ]
  },
  {
   "type": "text",
   "title": "Exercițiile cu mai multe operații: ordinea efectuării operațiilor",
   "html": "<p>Un <b>exercițiu cu mai multe operații</b> este un șir de operații de efectuat. Ca toți să obținem același rezultat, urmăm o ordine precisă:</p>\n<ol>\n<li>mai întâi se rezolvă <b>parantezele</b>: rotunde ( ), apoi drepte [ ], apoi acolade { };</li>\n<li>în paranteze (și în afara lor) se fac mai întâi <b>înmulțirile și împărțirile</b>, în ordinea în care apar, de la stânga la dreapta;</li>\n<li>apoi <b>adunările și scăderile</b>, de la stânga la dreapta.</li>\n</ol>\n<p>Exemplu: <b>{ 30 − [ 4 × (7 − 2) + 3 ] } : 7</b></p>\n<ul>\n<li>rotunde: 7 − 2 = 5 → { 30 − [ 4 × 5 + 3 ] } : 7</li>\n<li>drepte: 4 × 5 + 3 = 20 + 3 = 23 → { 30 − 23 } : 7</li>\n<li>acolade: 30 − 23 = 7 → 7 : 7 = <b>1</b></li>\n</ul>\n<p>Greșeală tipică: în 2 + 3 × 4 să faci mai întâi 2 + 3 = 5 și apoi × 4 = 20. Greșit! Mai întâi înmulțirea: 2 + 12 = <b>14</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: de la problemă la exercițiu",
   "html": "<p><b>Problema</b>: clasa a V-a A pleacă în excursie. Autocarul costă 450 € și intrarea la muzeu 6 € de persoană. Elevii sunt 22 și însoțitorii 3 (care plătesc și ei intrarea). Profesorii împart cheltuiala totală numai între <b>elevi</b>. Cât plătește fiecare elev?</p>\n<p><b>Exercițiul</b>: [ 450 + 6 × (22 + 3) ] : 22</p>\n<ul>\n<li>(22 + 3) = 25 de persoane</li>\n<li>6 × 25 = 150 € de intrări</li>\n<li>450 + 150 = 600 € în total</li>\n<li>600 : 22 = 27 rest 6 → fiecare elev plătește 27 € și rămân 6 € de acoperit (sau se rotunjește: 22 × 28 = 616 €, rămân 16 € pentru gustare!).</li>\n</ul>\n<p>Scrierea unui singur exercițiu ne ajută să vedem toată structura problemei.</p>"
  },
  {
   "type": "curiosity",
   "title": "Zeroul: o invenție indiană",
   "html": "<p>Vechii romani nu aveau zeroul și foloseau un sistem <b>nepozițional</b>: în MMXXVI litera M valorează mereu 1000, oriunde s-ar afla. Să faci o înmulțire cu cifre romane era un coșmar: se folosea abacul!</p>\n<p>Cifrele pe care le folosim și <b>zeroul</b> ca număr au apărut în <b>India</b>: matematicianul <b>Brahmagupta</b> a scris în <b>628 d.Hr.</b> primele reguli pentru a calcula cu zero. Arabii le-au răspândit (de aceea le numim „cifre arabe”), iar în Europa le-a adus <b>Leonardo Fibonacci</b> din Pisa prin <i>Liber abaci</i>, în <b>1202</b>. Cuvântul „zero” vine din arabă, <i>ṣifr</i>, „gol”, de la care vine și cuvântul „cifră”!</p>"
  },
  {
   "type": "curiosity",
   "title": "Micul Gauss și suma de la 1 la 100",
   "html": "<p>Se povestește că, pe la 1785, învățătorul lui <b>Carl Friedrich Gauss</b>, care avea vreo 8 ani, a cerut clasei să adune toate numerele de la 1 la 100, ca s-o țină ocupată. Gauss a răspuns după câteva secunde: <b>5050</b>!</p>\n<p>Trucul lui folosește comutativitatea și asociativitatea: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… Sunt 50 de perechi care valorează 101: 50 × 101 = <b>5050</b>.</p>\n<p>Încearcă tu: cât face suma de la 1 la 20? (10 perechi de câte 21 = 210)</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înmulți",
   "intro": "În lume și în istorie se înmulțește în multe feluri diferite. Toate funcționează datorită proprietății distributive!",
   "tabs": [
    {
     "label": "🇯🇵 Metoda liniilor",
     "html": "<p>În Japonia și în China se învață să se înmulțească desenând linii: zecile unui factor într-o direcție, unitățile în cealaltă. Se numără punctele de intersecție din fiecare zonă: sunt sute, zeci și unități. Privește animația.</p>",
     "widget": "lineMultiply",
     "options": {
      "a": 23,
      "b": 12
     }
    },
    {
     "label": "🇷🇺 Țăranul rus",
     "html": "<p>O metodă foarte veche, folosită de țăranii ruși: se <b>înjumătățește</b> un număr și se <b>dublează</b> celălalt; se taie rândurile în care numărul înjumătățit este par și se adună cele rămase. Funcționează pentru că, în fond, scrie numărul în baza 2!</p>",
     "widget": "russianPeasant",
     "options": {
      "a": 37,
      "b": 24
     }
    },
    {
     "label": "🏺 Metoda egipteană",
     "html": "<p>Egiptenii, acum 4.000 de ani (papirusul Rhind), înmulțeau doar prin <b>dublări</b>: 1, 2, 4, 8, 16… ori numărul, apoi adunau rândurile potrivite. Este proprietatea distributivă: 13 × 21 = (8 + 4 + 1) × 21.</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 13,
      "b": 21
     }
    },
    {
     "label": "🔢 Metoda gelozie (Fibonacci)",
     "html": "<p>Metoda gelozie (se numește așa pentru că grila amintește de grilajele ferestrelor, numite „gelozii”) a ajuns în Europa cu Fibonacci din lumea arabă. Fiecare căsuță conține produsul a două cifre și se adună diagonalele.</p>",
     "widget": "lattice",
     "options": {
      "a": 47,
      "b": 36
     }
    },
    {
     "label": "Distributivitatea cu cubulețe",
     "html": "<p>Un dreptunghi de 7 × 12 cubulețe poate fi împărțit într-un dreptunghi 7 × 10 și unul 7 × 2: 70 + 14 = 84. Este chiar proprietatea distributivă, văzută în 3D. Încearcă să schimbi dimensiunile.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 7,
      "b": 12
     }
    }
   ]
  },
  {
   "type": "widget",
   "title": "Recunoaște proprietatea",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "5 + 9 = 9 + 5",
      "comutativitatea"
     ],
     [
      "(6 + 4) + 7 = 6 + (4 + 7)",
      "asociativitatea"
     ],
     [
      "8 × 15 = 8 × 10 + 8 × 5",
      "distributivitatea"
     ],
     [
      "90 − 38 = 92 − 40",
      "invarianța scăderii"
     ],
     [
      "600 : 30 = 60 : 3",
      "invarianța împărțirii"
     ],
     [
      "a × 1 = a",
      "element neutru"
     ],
     [
      "a × 0 = 0",
      "element absorbant"
     ]
    ]
   },
   "caption": "Leagă fiecare egalitate de proprietatea pe care o folosește."
  },
  {
   "type": "quiz",
   "title": "Mini-test: exerciții cu mai multe operații",
   "questions": [
    {
     "type": "num",
     "q": "Cât face 5 + 3 × 4?",
     "answer": 17,
     "tol": 0,
     "explain": "Mai întâi înmulțirea: 3 × 4 = 12; apoi 5 + 12 = 17."
    },
    {
     "type": "num",
     "q": "Cât face (5 + 3) × 4?",
     "answer": 32,
     "tol": 0,
     "explain": "Mai întâi paranteza: 8 × 4 = 32."
    },
    {
     "type": "num",
     "q": "Rezolvă: [ 20 − (3 + 2) × 3 ] × 2",
     "answer": 10,
     "tol": 0,
     "explain": "(3 + 2) = 5; 5 × 3 = 15; 20 − 15 = 5; 5 × 2 = 10."
    },
    {
     "type": "mc",
     "q": "În 48 : 6 × 2 care este rezultatul corect?",
     "options": [
      "4",
      "16",
      "8",
      "96"
     ],
     "answer": 1,
     "explain": "Înmulțirile și împărțirile se fac de la stânga la dreapta: 48 : 6 = 8; 8 × 2 = 16."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta: de ce funcționează așa operațiile",
   "nodes": [
    {
     "id": "contare",
     "label": "A număra",
     "x": 50,
     "y": 5,
     "color": "#64748b",
     "html": "A asocia un număr fiecărui obiect: 1, 2, 3…",
     "why": "Osul de la Ishango (Congo, acum circa 20.000 de ani) are niște crestături care poate serveau la numărat: nevoia de a număra este foarte veche."
    },
    {
     "id": "naturali",
     "label": "Mulțimea ℕ",
     "x": 50,
     "y": 20,
     "color": "#2563eb",
     "html": "0, 1, 2, 3… ordonată, infinită, discretă.",
     "why": "Giuseppe Peano, matematician din Cuneo, a descris în 1889 mulțimea ℕ prin cinci axiome: există 0, fiecare număr are un succesor, numere diferite au succesori diferiți, 0 nu este succesorul niciunui număr, este valabil principiul inducției."
    },
    {
     "id": "posizionale",
     "label": "Sistem pozițional",
     "x": 15,
     "y": 34,
     "color": "#0ea5e9",
     "html": "10 cifre, valoarea depinde de poziție.",
     "why": "Folosim baza 10 probabil pentru că avem 10 degete. Zeroul indian (Brahmagupta, 628) a făcut posibil sistemul; Fibonacci l-a adus în Europa în 1202."
    },
    {
     "id": "addizione",
     "label": "Adunarea",
     "x": 35,
     "y": 42,
     "color": "#16a34a",
     "html": "A uni cantități; element neutru 0.",
     "why": "Peano o definește prin „succesor”: a + 1 este succesorul lui a, a + 2 succesorul succesorului… De aici derivă comutativitatea și asociativitatea."
    },
    {
     "id": "moltiplicazione",
     "label": "Înmulțirea",
     "x": 65,
     "y": 42,
     "color": "#ea580c",
     "html": "Adunare repetată; element neutru 1, absorbant 0.",
     "why": "3 × 4 = 4 + 4 + 4. Desenată ca un dreptunghi cu 3 rânduri și 4 coloane, se vede că, dacă îl rotim (4 × 3), numărul de pătrățele nu se schimbă: iată comutativitatea."
    },
    {
     "id": "inverse",
     "label": "Scăderea și împărțirea",
     "x": 85,
     "y": 30,
     "color": "#dc2626",
     "html": "Operații inverse; nu sunt întotdeauna posibile în ℕ.",
     "why": "Pentru ca scăderea să fie mereu posibilă, matematicienii au inventat numerele negative (ℤ); pentru împărțire, fracțiile (ℚ)."
    },
    {
     "id": "distributiva",
     "label": "Distributivitatea",
     "x": 50,
     "y": 62,
     "color": "#9333ea",
     "html": "a × (b + c) = a × b + a × c.",
     "why": "Un dreptunghi cu latura a și (b + c) se împarte în două dreptunghiuri a × b și a × c. Este baza tuturor algoritmilor de înmulțire în coloană."
    },
    {
     "id": "invariantive",
     "label": "Proprietăți de invarianță",
     "x": 85,
     "y": 62,
     "color": "#db2777",
     "html": "Scădere: + sau − același număr; împărțire: × sau : același număr.",
     "why": "Scădere: dacă două persoane îmbătrânesc cu un an, diferența lor de vârstă nu se schimbă. Împărțire: este același principiu ca la fracțiile echivalente."
    },
    {
     "id": "espressioni",
     "label": "Exerciții cu mai multe operații",
     "x": 30,
     "y": 84,
     "color": "#f59e0b",
     "html": "Paranteze, apoi × și :, apoi + și −.",
     "why": "Este o convenție acceptată de matematicieni (stabilită între secolele XVII și XIX) ca toți să obțină același rezultat; înmulțirea „leagă mai tare” pentru că este o adunare prescurtată."
    },
    {
     "id": "calcolomentale",
     "label": "Calcul rapid",
     "x": 70,
     "y": 86,
     "color": "#0f766e",
     "html": "Proprietăți folosite ca să calculăm în minte.",
     "why": "Metodele din alte țări (liniile japoneze, țăranul rus, egiptean, gelozia) sunt toate moduri diferite de a aplica proprietatea distributivă."
    }
   ],
   "edges": [
    [
     "contare",
     "naturali",
     "apare"
    ],
    [
     "naturali",
     "posizionale",
     "se scrie cu"
    ],
    [
     "naturali",
     "addizione",
     "operație"
    ],
    [
     "addizione",
     "moltiplicazione",
     "repetată"
    ],
    [
     "addizione",
     "inverse",
     "inversă"
    ],
    [
     "moltiplicazione",
     "inverse",
     "inversă"
    ],
    [
     "moltiplicazione",
     "distributiva",
     "față de +"
    ],
    [
     "inverse",
     "invariantive",
     "au"
    ],
    [
     "distributiva",
     "calcolomentale",
     "permite"
    ],
    [
     "addizione",
     "espressioni",
     "ordine"
    ],
    [
     "moltiplicazione",
     "espressioni",
     "ordine"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Numere naturale (ℕ)",
   "d": "Numerele 0, 1, 2, 3… folosite pentru a număra."
  },
  {
   "t": "Sistem pozițional",
   "d": "Sistem în care valoarea unei cifre depinde de poziția ei."
  },
  {
   "t": "Termeni / sumă",
   "d": "Termenii și rezultatul adunării."
  },
  {
   "t": "Descăzut, scăzător, diferență",
   "d": "Termenii și rezultatul scăderii."
  },
  {
   "t": "Factori / produs",
   "d": "Termenii și rezultatul înmulțirii."
  },
  {
   "t": "Deîmpărțit, împărțitor, cât",
   "d": "Termenii și rezultatul împărțirii."
  },
  {
   "t": "Element neutru",
   "d": "Număr care, într-o operație, lasă neschimbat celălalt termen (0 pentru +, 1 pentru ×)."
  },
  {
   "t": "Element absorbant",
   "d": "Zero la înmulțire: orice număr înmulțit cu 0 dă 0."
  },
  {
   "t": "Proprietatea distributivă",
   "d": "a × (b + c) = a × b + a × c."
  },
  {
   "t": "Exercițiu cu mai multe operații",
   "d": "Șir de operații de efectuat într-o ordine stabilită."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "tf",
    "q": "Mulțimea numerelor naturale are un ultim element.",
    "answer": false,
    "explain": "Fiecare număr are un succesor: ℕ este infinită."
   },
   {
    "type": "mc",
    "q": "În numărul 3.582.104 cifra 8 valorează…",
    "options": [
     "8",
     "8.000",
     "80.000",
     "800.000"
    ],
    "answer": 2,
    "explain": "Se află la poziția zecilor de mii: 80.000."
   },
   {
    "type": "mc",
    "q": "Cum se numește rezultatul împărțirii?",
    "options": [
     "Produs",
     "Diferență",
     "Cât",
     "Sumă"
    ],
    "answer": 2,
    "explain": "Deîmpărțit : împărțitor = cât."
   },
   {
    "type": "num",
    "q": "Calculează cu proprietatea de invarianță: 1.000 − 397 = ?",
    "answer": 603,
    "tol": 0,
    "explain": "Adaug 3 la amândouă: 1.003 − 400 = 603."
   },
   {
    "type": "num",
    "q": "Calculează cu distributivitatea: 15 × 99 = ?",
    "answer": 1485,
    "tol": 0,
    "explain": "15 × 100 − 15 = 1500 − 15 = 1485."
   },
   {
    "type": "mc",
    "q": "Care egalitate arată proprietatea de asociativitate?",
    "options": [
     "3 + 7 = 7 + 3",
     "(2 × 5) × 9 = 2 × (5 × 9)",
     "4 × (3 + 2) = 12 + 8",
     "40 : 8 = 20 : 4"
    ],
    "answer": 1,
    "explain": "Factorii sunt grupați altfel, produsul nu se schimbă."
   },
   {
    "type": "num",
    "q": "Rezolvă: 36 : (2 + 7) × 5 − 4",
    "answer": 16,
    "tol": 0,
    "explain": "(2 + 7) = 9; 36 : 9 = 4; 4 × 5 = 20; 20 − 4 = 16."
   },
   {
    "type": "num",
    "q": "Rezolvă: { 50 − [ 3 × (4 + 6) − 5 ] } : 5",
    "answer": 5,
    "tol": 0,
    "explain": "(4 + 6) = 10; 3 × 10 − 5 = 25; 50 − 25 = 25; 25 : 5 = 5."
   },
   {
    "type": "tf",
    "q": "0 : 8 = 0",
    "answer": true,
    "explain": "Într-adevăr 0 × 8 = 0. Este însă imposibil 8 : 0."
   },
   {
    "type": "num",
    "q": "Cât este suma tuturor numerelor de la 1 la 10 (trucul lui Gauss)?",
    "answer": 55,
    "tol": 0,
    "explain": "5 perechi de câte 11: 5 × 11 = 55."
   },
   {
    "type": "order",
    "q": "Pune în ordine pașii pentru rezolvarea unui exercițiu cu mai multe operații",
    "items": [
     "Paranteze rotunde",
     "Paranteze drepte",
     "Acolade",
     "În afara parantezelor: × și :",
     "În afara parantezelor: + și −"
    ],
    "explain": "Din interior spre exterior; în fiecare nivel mai întâi × și :, apoi + și −."
   },
   {
    "type": "mc",
    "q": "Cine a adus în Europa cifrele indo-arabe prin Liber abaci (1202)?",
    "options": [
     "Pitagora",
     "Leonardo Fibonacci",
     "Galileo",
     "Euclid"
    ],
    "answer": 1,
    "explain": "Leonardo Pisano, numit Fibonacci."
   }
  ],
  "gen": [
   [
    "mult2",
    1
   ],
   [
    "div2",
    1
   ]
  ]
 }
});
