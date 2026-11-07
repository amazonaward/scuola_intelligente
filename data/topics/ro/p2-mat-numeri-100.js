TOPIC('ro', {
 "id": "p2-mat-numeri-100",
 "title": "Numerele până la 100",
 "intro": "După 20 numerele continuă… până la <b>100</b>! 💯 Învățăm să le numărăm cu <b>zeci</b> și <b>unități</b>, să facem <b>salturi</b> și să aflăm care număr este mai mare.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Zeci și unități",
   "html": "<p>Când avem <b>10 unități</b>, le punem împreună într-un pachețel: este o <b>zece</b> (o zeci)! 📦</p>\n<p><b>10 unități = 1 zece</b></p>\n<p>Fiecare număr de două cifre este format din <b>zeci</b> și <b>unități</b>:</p>\n<ul>\n<li><b>47</b> = <span style=\"color:#dc2626\"><b>4</b> zeci</span> și <span style=\"color:#2563eb\"><b>7</b> unități</span> = 40 + 7</li>\n<li><b>30</b> = 3 zeci și 0 unități</li>\n<li><b>85</b> = 8 zeci și 5 unități = 80 + 5</li>\n</ul>\n<p>Cifra din <b>stânga</b> numără zecile (Z), cea din <b>dreapta</b> unitățile (U). <b>Poziția</b> este foarte importantă: 47 și 74 sunt numere foarte diferite!</p>"
  },
  {
   "type": "svg",
   "title": "47 cu bețișoare și cubulețe",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<g fill=\"#f87171\" stroke=\"#991b1b\" stroke-width=\"2\">\n<rect x=\"40\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/><rect x=\"80\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/>\n<rect x=\"120\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/><rect x=\"160\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/>\n</g>\n<g stroke=\"#991b1b\" stroke-width=\"1.5\">\n<line x1=\"40\" y1=\"60\" x2=\"188\" y2=\"60\"/><line x1=\"40\" y1=\"80\" x2=\"188\" y2=\"80\"/><line x1=\"40\" y1=\"100\" x2=\"188\" y2=\"100\"/><line x1=\"40\" y1=\"120\" x2=\"188\" y2=\"120\"/>\n<line x1=\"40\" y1=\"140\" x2=\"188\" y2=\"140\"/><line x1=\"40\" y1=\"160\" x2=\"188\" y2=\"160\"/><line x1=\"40\" y1=\"180\" x2=\"188\" y2=\"180\"/><line x1=\"40\" y1=\"200\" x2=\"188\" y2=\"200\"/><line x1=\"40\" y1=\"220\" x2=\"188\" y2=\"220\"/>\n</g>\n<g fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"230\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"265\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"300\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"335\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/>\n<rect x=\"230\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"265\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"300\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/>\n</g>\n<text x=\"114\" y=\"275\" font-size=\"22\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">4 zeci = 40</text>\n<text x=\"296\" y=\"275\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">7 unități = 7</text>\n<rect x=\"400\" y=\"70\" width=\"170\" height=\"150\" rx=\"14\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n<text x=\"450\" y=\"105\" font-size=\"22\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">Z</text>\n<text x=\"520\" y=\"105\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">U</text>\n<text x=\"450\" y=\"180\" font-size=\"64\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">4</text>\n<text x=\"520\" y=\"180\" font-size=\"64\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">7</text>\n</svg>",
   "caption": "Fiecare bețișor roșu are 10 cubulețe: este o zece. Cubulețele albastre separate sunt unitățile."
  },
  {
   "type": "3d",
   "title": "Construiește numerele cu cubulețe 3D",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 47
   },
   "caption": "Rotește modelul și schimbă numărul cu glisorul: uită-te cum cresc bețișoarele zecilor."
  },
  {
   "type": "widget",
   "title": "Abacul",
   "widget": "abacus",
   "options": {
    "columns": [
     "Z",
     "U"
    ],
    "value": 47
   },
   "caption": "Adaugă și scoate bile. Când unitățile ajung la 10, devin 1 bilă a zecilor!"
  },
  {
   "type": "quiz",
   "title": "Mini-test: zeci și unități",
   "questions": [
    {
     "type": "num",
     "q": "Câte zeci sunt în 63?",
     "answer": 6,
     "explain": "63 = 6 zeci și 3 unități."
    },
    {
     "type": "num",
     "q": "Ce număr are 5 zeci și 2 unități?",
     "answer": 52,
     "explain": "50 + 2 = 52."
    },
    {
     "type": "tf",
     "q": "În 38 cifra 8 arată zecile.",
     "answer": false,
     "explain": "8 este în dreapta: arată unitățile. Zecile sunt 3."
    }
   ]
  },
  {
   "type": "text",
   "title": "Numărarea din salt în salt",
   "html": "<p>Să numeri câte unul până la 100 durează mult! Putem face <b>salturi</b> 🦘:</p>\n<ul>\n<li>salturi de câte <b>10</b>: 10, 20, 30, 40, 50, 60, 70, 80, 90, <b>100</b></li>\n<li>salturi de câte <b>5</b>: 5, 10, 15, 20, 25, 30…</li>\n<li>salturi de câte <b>2</b>: 2, 4, 6, 8, 10, 12… sunt numerele <b>pare</b>!</li>\n</ul>\n<p>Numerele la care nu ajungi sărind din 2 în 2 de la 0 (1, 3, 5, 7…) sunt numerele <b>impare</b>. Truc: uită-te la unități! Dacă sunt 0, 2, 4, 6, 8, numărul este par.</p>"
  },
  {
   "type": "widget",
   "title": "Salturi de câte 10 pe axa numerelor",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 100,
    "step": 10,
    "marks": [
     10,
     20,
     30,
     40,
     50,
     60,
     70,
     80,
     90,
     100
    ]
   },
   "caption": "Fiecare salt adaugă o zece. Cu 10 salturi ajungi la 100!"
  },
  {
   "type": "text",
   "title": "Înainte, după și comparare",
   "html": "<ul>\n<li><b>Predecesorul</b> unui număr este cel care vine <b>imediat înainte</b> (−1): predecesorul lui 40 este <b>39</b>.</li>\n<li><b>Succesorul</b> este cel care vine <b>imediat după</b> (+1): succesorul lui 59 este <b>60</b>.</li>\n</ul>\n<p>Ca să <b>comparăm</b> două numere:</p>\n<ol>\n<li>ne uităm întâi la <b>zeci</b>: câștigă cel care are mai multe → 72 &gt; 58;</li>\n<li>dacă zecile sunt egale, ne uităm la <b>unități</b> → 46 &gt; 43.</li>\n</ol>\n<p>Semnul <b>&gt;</b> înseamnă „mai mare”, <b>&lt;</b> înseamnă „mai mic”, <b>=</b> „egal”. Gura crocodilului 🐊 se deschide mereu spre numărul mai mare!</p>"
  },
  {
   "type": "example",
   "title": "Exemplu: cartonașele lui Tommaso ⚽",
   "html": "<p>Tommaso are <b>6 plicuri</b> cu câte 10 cartonașe și <b>8 cartonașe separate</b>.</p>\n<p>Câte cartonașe are? 6 zeci și 8 unități = 60 + 8 = <b>68</b> de cartonașe.</p>\n<p>Prietenul lui, Elia, are <b>71</b>. Cine are mai multe? Elia are 7 zeci, Tommaso 6: <b>71 &gt; 68</b>. Câștigă Elia!</p>"
  },
  {
   "type": "example",
   "title": "Exemplu: ouăle de la piață 🥚",
   "html": "<p>Fermierul pune ouăle în cofraje de câte <b>10</b>. A umplut <b>9</b> cofraje și i-au mai rămas <b>4</b> ouă.</p>\n<p>Ouă în total: 9 zeci și 4 unități = <b>94</b>.</p>\n<p>Câte mai lipsesc până la 100? Succesorul lui 94 este 95, apoi 96, 97, 98, 99, 100: mai lipsesc <b>6</b>!</p>"
  },
  {
   "type": "text",
   "title": "Citim și scriem numerele în cuvinte",
   "html": "<p>Zecile se numesc: zece, douăzeci, treizeci, patruzeci, cincizeci, șaizeci, șaptezeci, optzeci, nouăzeci, <b>o sută</b>.</p>\n<p>Apoi adăugăm unitățile cu „și”: douăzeci și trei = <b>douăzeci și trei</b> (23), patruzeci și cinci = <b>patruzeci și cinci</b> (45).</p>\n<p>⚠️ Atenție: numerele se scriu în <b>cuvinte separate</b>: <b>douăzeci și unu</b>, nu „douăzecișiunu”; <b>treizeci și opt</b>.</p>\n<p>Și atenție la scriere: <b>cincizeci</b> (nu „cinzeci”), <b>șaizeci</b> (nu „șasezeci”). 😉</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…?",
   "html": "<p>În <b>franceză</b> numărul 80 se spune <i>quatre-vingts</i>, adică „<b>de patru ori douăzeci</b>”! 🇫🇷 Iar 90 se spune „patru-douăzeci-zece”.</p>\n<p>Este o amintire a unui mod vechi de a număra în grupe de 20, poate folosind degetele de la mâini <b>și</b> de la picioare. Și <b>mayașii</b> din America numărau în grupe de 20.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…?",
   "html": "<p>De ce numărăm tocmai în grupe de <b>10</b>? Foarte probabil pentru că avem <b>10 degete</b>! 🖐️🖐️</p>\n<p>Cifrele pe care le folosim (0, 1, 2… 9) s-au născut în <b>India</b>, au trecut la <b>arabi</b> și au ajuns în Italia datorită lui <b>Leonardo Fibonacci</b> din Pisa, care le-a explicat în cartea sa <i>Liber Abaci</i> în <b>1202</b>. Înainte se foloseau cifrele romane: 47 se scria XLVII!</p>"
  },
  {
   "type": "remember",
   "title": "De reținut",
   "html": "<ul>\n<li><b>10 unități = 1 zece</b>; <b>10 zeci = 1 sută = 100</b>.</li>\n<li>La numerele de două cifre: în stânga <b>zecile</b>, în dreapta <b>unitățile</b>.</li>\n<li>Ca să comparăm: întâi zecile, apoi unitățile.</li>\n<li>Predecesor = −1, succesor = +1.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege numerele până la 100",
   "intro": "Numerele pot fi văzute, atinse, ascultate… Alege modul care ți se potrivește.",
   "tabs": [
    {
     "label": "💶 Cu bani",
     "html": "<p>Ai monede de <b>10 cenți</b> și de <b>1 cent</b>.</p>\n<ul>\n<li>Monedele de 10 cenți sunt <b>zecile</b> 🪙.</li>\n<li>Monedele de 1 cent sunt <b>unitățile</b>.</li>\n</ul>\n<p>Ca să plătești <b>35 de cenți</b> folosești 3 monede de 10 și 5 monede de 1. Cu <b>10 monede de 10 cenți</b> ajungi la <b>100 de cenți = 1 euro</b>! (La fel cu leul: 100 de bani = 1 leu.)</p>"
    },
    {
     "label": "🧮 Tabelul lui 100",
     "html": "<p>Pune numerele de la 1 la 100 într-un tabel cu 10 rânduri și 10 coloane.</p>\n<ul>\n<li>Coborând un rând adaugi <b>10</b> (12 → 22 → 32).</li>\n<li>Mergând spre dreapta adaugi <b>1</b>.</li>\n<li>Toate numerele dintr-o coloană se termină cu aceeași cifră a unităților!</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">\n<rect x=\"50\" y=\"20\" width=\"500\" height=\"25\" fill=\"#fee2e2\"/>\n<text x=\"75\" y=\"38\">1</text><text x=\"125\" y=\"38\">2</text><text x=\"175\" y=\"38\">3</text><text x=\"225\" y=\"38\">4</text><text x=\"275\" y=\"38\">5</text><text x=\"325\" y=\"38\">6</text><text x=\"375\" y=\"38\">7</text><text x=\"425\" y=\"38\">8</text><text x=\"475\" y=\"38\">9</text><text x=\"525\" y=\"38\">10</text>\n<text x=\"75\" y=\"68\">11</text><text x=\"125\" y=\"68\">12</text><text x=\"175\" y=\"68\">13</text><text x=\"225\" y=\"68\">14</text><text x=\"275\" y=\"68\">15</text><text x=\"325\" y=\"68\">16</text><text x=\"375\" y=\"68\">17</text><text x=\"425\" y=\"68\">18</text><text x=\"475\" y=\"68\">19</text><text x=\"525\" y=\"68\">20</text>\n<text x=\"75\" y=\"98\">21</text><text x=\"125\" y=\"98\">22</text><text x=\"175\" y=\"98\">23</text><text x=\"225\" y=\"98\">24</text><text x=\"275\" y=\"98\">25</text><text x=\"325\" y=\"98\">26</text><text x=\"375\" y=\"98\">27</text><text x=\"425\" y=\"98\">28</text><text x=\"475\" y=\"98\">29</text><text x=\"525\" y=\"98\">30</text>\n<text x=\"75\" y=\"128\">31</text><text x=\"125\" y=\"128\">32</text><text x=\"175\" y=\"128\">33</text><text x=\"225\" y=\"128\">34</text><text x=\"275\" y=\"128\">35</text><text x=\"325\" y=\"128\">36</text><text x=\"375\" y=\"128\">37</text><text x=\"425\" y=\"128\">38</text><text x=\"475\" y=\"128\">39</text><text x=\"525\" y=\"128\">40</text>\n<text x=\"300\" y=\"165\" font-size=\"22\">⋮</text>\n<text x=\"75\" y=\"218\">81</text><text x=\"125\" y=\"218\">82</text><text x=\"175\" y=\"218\">83</text><text x=\"225\" y=\"218\">84</text><text x=\"275\" y=\"218\">85</text><text x=\"325\" y=\"218\">86</text><text x=\"375\" y=\"218\">87</text><text x=\"425\" y=\"218\">88</text><text x=\"475\" y=\"218\">89</text><text x=\"525\" y=\"218\">90</text>\n<text x=\"75\" y=\"248\">91</text><text x=\"125\" y=\"248\">92</text><text x=\"175\" y=\"248\">93</text><text x=\"225\" y=\"248\">94</text><text x=\"275\" y=\"248\">95</text><text x=\"325\" y=\"248\">96</text><text x=\"375\" y=\"248\">97</text><text x=\"425\" y=\"248\">98</text><text x=\"475\" y=\"248\">99</text><text x=\"525\" y=\"248\" font-weight=\"bold\" fill=\"#dc2626\">100</text>\n</g>\n<rect x=\"105\" y=\"50\" width=\"40\" height=\"205\" rx=\"8\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"285\" font-size=\"16\" text-anchor=\"middle\" fill=\"#2563eb\">coloana albastră: 2, 12, 22, 32… +10 la fiecare rând</text>\n</svg>"
    },
    {
     "label": "🇨🇳 Numărăm ca în China",
     "html": "<p>În <b>chineză</b> (și în japoneză și coreeană) numerele se spun foarte logic:</p>\n<ul>\n<li>11 = „<b>zece-unu</b>” (shí-yī)</li>\n<li>20 = „<b>doi-zece</b>” (èr-shí)</li>\n<li>47 = „<b>patru-zece-șapte</b>” (sì-shí-qī)</li>\n</ul>\n<p>Chiar numele îți spune câte zeci și câte unități sunt! De fapt, și româna face la fel: <b>patru-zeci și șapte</b>! La numerele de la 11 la 19 spunem „unu-spre-zece”: unul peste zece.</p>"
    },
    {
     "label": "🧊 Cubulețe 3D",
     "html": "<p>Încearcă să construiești <b>100</b>: câte bețișoare de 10 îți trebuie? Rotește modelul și uită-te: 10 bețișoare formează un <b>pătrat</b>, „placa” sutei!</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 100
     }
    },
    {
     "label": "🦘 Salturi de câte 5",
     "html": "<p>Numără din 5 în 5, ca degetele unei mâini: 5, 10, 15, 20… Câte salturi îți trebuie ca să ajungi la 50?</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 50,
      "step": 5,
      "marks": [
       5,
       10,
       15,
       20,
       25,
       30,
       35,
       40,
       45,
       50
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta numerelor până la 100",
   "nodes": [
    {
     "id": "unita",
     "label": "Unitate",
     "x": 15,
     "y": 10,
     "color": "#2563eb",
     "html": "Fiecare obiect numărat în parte: 1.",
     "why": "Este punctul de plecare al oricărei numărători: un deget, o pietricică, o crestătură pe un băț. Oamenii numără așa de zeci de mii de ani."
    },
    {
     "id": "decina",
     "label": "Zece",
     "x": 50,
     "y": 10,
     "color": "#dc2626",
     "html": "Un grup de 10 unități.",
     "why": "Grupăm câte 10 pentru că avem 10 degete: aproape toate popoarele lumii au ales numărul 10 ca bază."
    },
    {
     "id": "cento",
     "label": "O sută",
     "x": 85,
     "y": 10,
     "color": "#a855f7",
     "html": "10 zeci = 100.",
     "why": "În italiană se spune <i>cento</i>, din latinescul <i>centum</i>. De aici vin și centimetru (a suta parte din metru) și cent (a suta parte din euro)."
    },
    {
     "id": "posizione",
     "label": "Valoarea poziției",
     "x": 50,
     "y": 40,
     "color": "#f59e0b",
     "html": "Aceeași cifră valorează mai mult dacă e mai la stânga: în 44 primul 4 valorează 40.",
     "why": "Este ideea genială a matematicienilor din <b>India</b> (acum circa 1500 de ani): cu doar 10 cifre se scriu toate numerele. Romanii foloseau în schimb simboluri diferite pentru fiecare valoare (X, L, C)."
    },
    {
     "id": "zero",
     "label": "Zero",
     "x": 18,
     "y": 65,
     "color": "#64748b",
     "html": "Semnul care spune „aici nu e nimic”: 30 = 3 zeci și 0 unități.",
     "why": "Fără zero n-am deosebi 3 de 30! Matematicianul indian <b>Brahmagupta</b> (anul 628) a scris primele reguli pentru a calcula cu zero."
    },
    {
     "id": "salti",
     "label": "Numărarea din salt în salt",
     "x": 82,
     "y": 40,
     "color": "#16a34a",
     "html": "Numărăm din 2 în 2, din 5 în 5, din 10 în 10.",
     "why": "Să sari e mai repede decât să numeri câte unul și este baza tablei înmulțirii: salturile de câte 5 sunt înmulțirea cu 5!"
    },
    {
     "id": "confronto",
     "label": "Comparare > <",
     "x": 50,
     "y": 68,
     "color": "#0ea5e9",
     "html": "Întâi ne uităm la zeci, apoi la unități.",
     "why": "Zecile valorează mai mult: nici 9 unități nu ajung să facă o zece, deci 60 > 59. Semnele > și < au fost inventate de matematicianul englez <b>Thomas Harriot</b> (publicate în 1631)."
    },
    {
     "id": "pari",
     "label": "Par și impar",
     "x": 82,
     "y": 72,
     "color": "#14b8a6",
     "html": "Pare: unități 0, 2, 4, 6, 8. Impare: 1, 3, 5, 7, 9.",
     "why": "Un număr este par dacă se poate împărți în două grupuri egale, fără rest. E destul să ne uităm la unități, pentru că fiecare zece se împarte mereu în două părți de câte 5."
    },
    {
     "id": "fibonacci",
     "label": "Cifre indo-arabe",
     "x": 30,
     "y": 90,
     "color": "#ef4444",
     "html": "Cifrele 0–9 pe care le folosim azi.",
     "why": "Născute în India, aduse de arabi și răspândite în Europa de <b>Leonardo Fibonacci</b> prin <i>Liber Abaci</i> (1202)."
    }
   ],
   "edges": [
    [
     "unita",
     "decina",
     "10 formează"
    ],
    [
     "decina",
     "cento",
     "10 formează"
    ],
    [
     "decina",
     "posizione",
     "se scrie cu"
    ],
    [
     "posizione",
     "zero",
     "are nevoie de"
    ],
    [
     "decina",
     "salti",
     "se numără cu"
    ],
    [
     "posizione",
     "confronto",
     "servește la"
    ],
    [
     "unita",
     "pari",
     "decide"
    ],
    [
     "fibonacci",
     "posizione",
     "folosește"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: comparări și salturi",
   "questions": [
    {
     "type": "mc",
     "q": "Care număr este mai mare?",
     "options": [
      "69",
      "71",
      "17"
     ],
     "answer": 1,
     "explain": "71 are 7 zeci: mai mult decât 69 (6 zeci)."
    },
    {
     "type": "num",
     "q": "Care este succesorul lui 79?",
     "answer": 80,
     "explain": "79 + 1 = 80: 9 unități + 1 fac o zece nouă."
    },
    {
     "type": "mc",
     "q": "Numărând din 10 în 10: 30, 40, 50, …",
     "options": [
      "51",
      "60",
      "55"
     ],
     "answer": 1,
     "explain": "50 + 10 = 60."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Unitate",
   "d": "Un singur element. Se scrie în dreapta la numerele de două cifre."
  },
  {
   "t": "Zece",
   "d": "Grup de 10 unități."
  },
  {
   "t": "Sută",
   "d": "Grup de 10 zeci, adică 100."
  },
  {
   "t": "Predecesor",
   "d": "Numărul care vine imediat înainte (−1)."
  },
  {
   "t": "Succesor",
   "d": "Numărul care vine imediat după (+1)."
  },
  {
   "t": "Număr par",
   "d": "Număr care se termină cu 0, 2, 4, 6, 8."
  },
  {
   "t": "Număr impar",
   "d": "Număr care se termină cu 1, 3, 5, 7, 9."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Ce număr are 7 zeci și 4 unități?",
    "answer": 74,
    "explain": "70 + 4 = 74."
   },
   {
    "type": "num",
    "q": "Câte unități sunt în 58 (pe lângă zeci)?",
    "answer": 8,
    "explain": "58 = 5 zeci și 8 unități."
   },
   {
    "type": "mc",
    "q": "Câte zeci sunt în 100?",
    "options": [
     "1",
     "10",
     "100"
    ],
    "answer": 1,
    "explain": "10 zeci = 100."
   },
   {
    "type": "num",
    "q": "Care este predecesorul lui 60?",
    "answer": 59,
    "explain": "60 − 1 = 59."
   },
   {
    "type": "mc",
    "q": "Care comparare este corectă?",
    "options": [
     "45 > 54",
     "45 < 54",
     "45 = 54"
    ],
    "answer": 1,
    "explain": "45 are 4 zeci, 54 are 5."
   },
   {
    "type": "tf",
    "q": "36 este un număr par.",
    "answer": true,
    "explain": "Se termină cu 6: este par."
   },
   {
    "type": "tf",
    "q": "Numărul 21 se scrie „douăzecișiunu”, într-un singur cuvânt.",
    "answer": false,
    "explain": "Se scrie „douăzeci și unu”, în trei cuvinte separate."
   },
   {
    "type": "mc",
    "q": "Numărând din 5 în 5: 15, 20, 25, …",
    "options": [
     "26",
     "30",
     "35"
    ],
    "answer": 1,
    "explain": "25 + 5 = 30."
   },
   {
    "type": "text",
    "q": "Scrie în litere numărul 38.",
    "answer": [
     "treizeci și opt",
     "treizeci si opt"
    ],
    "explain": "Treizeci + opt = treizeci și opt."
   },
   {
    "type": "order",
    "q": "Pune în ordine de la cel mai mic la cel mai mare.",
    "items": [
     "19",
     "41",
     "47",
     "74",
     "91"
    ],
    "explain": "Întâi ne uităm la zeci, apoi la unități."
   },
   {
    "type": "num",
    "q": "Luca are 3 cutii cu câte 10 creioane și 9 creioane separate. Câte creioane are?",
    "answer": 39,
    "explain": "3 zeci și 9 unități = 39."
   }
  ],
  "gen": [
   [
    "tensUnits",
    2
   ],
   [
    "compare100",
    2
   ]
  ]
 }
});
