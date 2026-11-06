TOPIC('ro', {
 "id": "p3-geo-mare-coste",
 "title": "Marea și țărmurile",
 "intro": "Acolo unde pământul întâlnește marea se nasc multe forme diferite: insule, golfuri, peninsule, strâmtori… Au nume cam grele, dar azi învățăm să le recunoaștem <b>rotind un peisaj în 3D</b> și căutându-le pe harta Italiei și a lumii.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Ce este țărmul?",
   "html": "<p><b>Țărmul</b> (coasta) este fâșia de pământ care atinge marea. Linia exactă unde apa întâlnește uscatul se numește <b>linia țărmului</b>.</p>\n<ul>\n<li><b>Țărm înalt</b> (stâncos): uscatul se termină cu pereți abrupți, <b>falezele</b>. Marea este adâncă imediat. Exemplu: Cinque Terre în Liguria, Coasta Amalfitană.</li>\n<li><b>Țărm jos</b> (nisipos): uscatul coboară încet-încet în mare și formează plaje lungi. Exemplu: riviera din Romagna.</li>\n</ul>\n<p>Marea lucrează mereu asupra țărmului: <b>valurile</b> rod rocile (eroziune) și duc nisipul dintr-un loc în altul (depunere).</p>"
  },
  {
   "type": "3d",
   "title": "Peisajul de coastă în 3D",
   "scene": "terrain",
   "caption": "Rotește peisajul și atinge fiecare etichetă: partea respectivă se luminează. Încearcă să le găsești pe toate 13!",
   "options": {
    "features": {
     "sea": {
      "label": "Marea",
      "html": "O întindere mare de apă sărată. Italia este scăldată de Marea Mediterană."
     },
     "coast": {
      "label": "Țărmul",
      "html": "Fâșia de pământ care se învecinează cu marea. Poate fi <b>înalt</b> (faleze) sau <b>jos</b> (plaje)."
     },
     "beach": {
      "label": "Plaja",
      "html": "O porțiune de țărm jos acoperită cu nisip sau pietricele, aduse de valuri și de râuri."
     },
     "island": {
      "label": "Insula",
      "html": "Pământ înconjurat <b>din toate părțile</b> de apă. Cea mai mare insulă a Italiei (și a Mediteranei) este <b>Sicilia</b>."
     },
     "archipelago": {
      "label": "Arhipelagul",
      "html": "Un <b>grup de insule</b> apropiate între ele. Exemple: <b>Insulele Eoliene</b>, Arhipelagul Toscan, La Maddalena."
     },
     "peninsula": {
      "label": "Peninsula",
      "html": "Pământ înconjurat de apă <b>pe trei părți</b> și unit cu uscatul pe a patra. <b>Italia</b> este o peninsulă în formă de cizmă!"
     },
     "cape": {
      "label": "Capul (promontoriul)",
      "html": "Un vârf de pământ care intră în mare. Dacă este înalt și stâncos se numește și <b>promontoriu</b>, ca Gargano („pintenul” cizmei)."
     },
     "gulf": {
      "label": "Golful",
      "html": "Un intrând <b>mare</b>: marea pătrunde în uscat formând o curbă largă. Exemplu: <b>Golful Napoli</b>."
     },
     "bay": {
      "label": "Baia (golfulețul)",
      "html": "Un intrând <b>mic</b>, ca un golf în miniatură, adesea ferit de vânt: excelent pentru bărci."
     },
     "isthmus": {
      "label": "Istmul",
      "html": "O <b>fâșie îngustă de pământ</b> care unește două uscaturi mai mari și desparte două mări. Exemple: Istmul <b>Corint</b> în Grecia, Istmul <b>Panama</b>."
     },
     "strait": {
      "label": "Strâmtoarea",
      "html": "O <b>trecere îngustă de mare</b> între două uscaturi, care leagă două mări. Opusul istmului! Exemplu: <b>Strâmtoarea Messina</b>, între Sicilia și Calabria."
     },
     "lagoon": {
      "label": "Laguna",
      "html": "O întindere de apă sărată puțin adâncă, despărțită de mare prin fâșii de nisip (cordoane litorale). Exemplu: <b>Laguna Veneției</b>."
     },
     "delta": {
      "label": "Delta",
      "html": "Gura de vărsare a unui râu care se împarte în multe brațe, în formă de triunghi, pentru că râul depune multe aluviuni. Numele vine de la litera grecească Δ. Exemplu: <b>delta Padului</b>."
     }
    }
   }
  },
  {
   "type": "svg",
   "title": "Insulă, peninsulă, istm, strâmtoare: diferențele",
   "caption": "Uită-te bine unde este apă (albastru) și unde este uscat (verde).",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#7dd3fc\"/>\n<g>\n<ellipse cx=\"80\" cy=\"120\" rx=\"50\" ry=\"35\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"80\" y=\"200\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">INSULĂ</text>\n<text x=\"80\" y=\"222\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">apă de jur împrejur</text>\n</g>\n<g>\n<rect x=\"160\" y=\"20\" width=\"130\" height=\"50\" fill=\"#4ade80\"/>\n<path d=\"M200,70 L250,70 L240,150 L210,150 Z\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<text x=\"225\" y=\"200\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">PENINSULĂ</text>\n<text x=\"225\" y=\"222\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">apă pe 3 părți</text>\n</g>\n<g>\n<circle cx=\"345\" cy=\"70\" r=\"35\" fill=\"#4ade80\"/>\n<rect x=\"337\" y=\"100\" width=\"16\" height=\"45\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n<circle cx=\"345\" cy=\"170\" r=\"30\" fill=\"#4ade80\"/>\n<text x=\"345\" y=\"235\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">ISTM</text>\n<text x=\"345\" y=\"257\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">uscat îngust între două mări</text>\n</g>\n<g>\n<rect x=\"430\" y=\"40\" width=\"65\" height=\"130\" fill=\"#4ade80\"/>\n<rect x=\"520\" y=\"40\" width=\"65\" height=\"130\" fill=\"#4ade80\"/>\n<rect x=\"495\" y=\"40\" width=\"25\" height=\"130\" fill=\"#0284c7\"/>\n<text x=\"508\" y=\"200\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">STRÂMTOARE</text>\n<text x=\"508\" y=\"222\" font-size=\"13\" text-anchor=\"middle\" fill=\"#0c4a6e\">mare îngustă între două uscaturi</text>\n</g>\n</svg>"
  },
  {
   "type": "remember",
   "title": "Perechi de „contrarii”",
   "html": "<ul>\n<li><b>Istm ↔ Strâmtoare</b>: istmul este uscat îngust între două ape; strâmtoarea este apă îngustă între două uscaturi.</li>\n<li><b>Cap ↔ Golf</b>: capul este uscat care intră în mare; golful este mare care intră în uscat.</li>\n<li><b>Insulă ↔ Lac</b>: insula este uscat înconjurat de apă; lacul este apă înconjurată de uscat.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: Italia este un catalog de forme!",
   "html": "<p>Ia o hartă a Italiei și caută:</p>\n<ul>\n<li><b>Peninsula</b>: toată Italia, în formă de cizmă.</li>\n<li><b>Insulele</b> mari: <b>Sicilia</b> și <b>Sardinia</b>.</li>\n<li>Un <b>arhipelag</b>: <b>Insulele Eoliene</b> (Lipari, Vulcano, Stromboli, Salina, Panarea, Filicudi, Alicudi).</li>\n<li>Un <b>golf</b>: Golful Napoli, Golful Taranto (sub cizmă).</li>\n<li>Un <b>promontoriu</b>: Gargano, „pintenul”.</li>\n<li>O <b>strâmtoare</b>: Strâmtoarea Messina, lată de doar aproximativ 3 km în punctul cel mai îngust.</li>\n<li>O <b>lagună</b>: Laguna Veneției. O <b>deltă</b>: delta Padului.</li>\n</ul>"
  },
  {
   "type": "3d",
   "title": "Găsește exemplele reale pe glob",
   "scene": "globe",
   "caption": "Rotește globul: punctele portocalii sunt exemple reale de insule, strâmtori, istmuri, golfuri, lagune și delte.",
   "options": {
    "points": [
     {
      "lat": 37.6,
      "lon": 14,
      "label": "Sicilia (insulă)"
     },
     {
      "lat": 38.5,
      "lon": 14.95,
      "label": "Insulele Eoliene (arhipelag)"
     },
     {
      "lat": 42.5,
      "lon": 12.8,
      "label": "Peninsula Italică"
     },
     {
      "lat": 40.75,
      "lon": 14.2,
      "label": "Golful Napoli"
     },
     {
      "lat": 38.2,
      "lon": 15.6,
      "label": "Strâmtoarea Messina"
     },
     {
      "lat": 41.8,
      "lon": 15.95,
      "label": "Gargano (promontoriu)"
     },
     {
      "lat": 45.4,
      "lon": 12.33,
      "label": "Laguna Veneției"
     },
     {
      "lat": 44.95,
      "lon": 12.45,
      "label": "Delta Padului"
     },
     {
      "lat": 37.93,
      "lon": 22.98,
      "label": "Istmul Corint"
     },
     {
      "lat": 9.1,
      "lon": -79.7,
      "label": "Istmul Panama"
     },
     {
      "lat": 35.95,
      "lon": -5.6,
      "label": "Strâmtoarea Gibraltar"
     }
    ]
   }
  },
  {
   "type": "quiz",
   "title": "Mini-test: insulă sau peninsulă?",
   "questions": [
    {
     "type": "mc",
     "q": "Un pământ înconjurat de apă din toate părțile este…",
     "options": [
      "o peninsulă",
      "o insulă",
      "un istm"
     ],
     "answer": 1,
     "explain": "Insula are apă de jur împrejur."
    },
    {
     "type": "mc",
     "q": "Un grup de insule apropiate se numește…",
     "options": [
      "arhipelag",
      "golf",
      "deltă"
     ],
     "answer": 0,
     "explain": "Arhipelag, ca Insulele Eoliene."
    },
    {
     "type": "tf",
     "q": "Italia este o peninsulă.",
     "answer": true,
     "explain": "Este înconjurată de mare pe trei părți și unită cu Europa la nord."
    }
   ]
  },
  {
   "type": "widget",
   "title": "Joc: potrivește forma cu definiția",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "Insulă",
      "Uscat cu apă de jur împrejur"
     ],
     [
      "Peninsulă",
      "Uscat cu apă pe trei părți"
     ],
     [
      "Istm",
      "Fâșie de uscat între două mări"
     ],
     [
      "Strâmtoare",
      "Braț de mare între două uscaturi"
     ],
     [
      "Golf",
      "Intrând mare al mării"
     ],
     [
      "Cap",
      "Vârf de uscat în mare"
     ],
     [
      "Lagună",
      "Apă puțin adâncă despărțită de mare prin cordoane de nisip"
     ],
     [
      "Deltă",
      "Gura unui râu cu multe brațe"
     ]
    ]
   }
  },
  {
   "type": "widget",
   "title": "Joc: uscat sau apă?",
   "widget": "classify",
   "caption": "Unele forme sunt „bucăți de uscat”, altele sunt „bucăți de apă”. Pune-le în grupa potrivită.",
   "options": {
    "groups": [
     "🟩 Este făcut din uscat",
     "🟦 Este făcut din apă"
    ],
    "items": [
     [
      "insulă",
      0
     ],
     [
      "peninsulă",
      0
     ],
     [
      "istm",
      0
     ],
     [
      "cap",
      0
     ],
     [
      "promontoriu",
      0
     ],
     [
      "strâmtoare",
      1
     ],
     [
      "golf",
      1
     ],
     [
      "baie (golfuleț)",
      1
     ],
     [
      "lagună",
      1
     ],
     [
      "lac",
      1
     ]
    ]
   }
  },
  {
   "type": "curiosity",
   "title": "Știai că… la Veneția casele stau pe milioane de pari?",
   "html": "<p>Veneția este construită pe peste 100 de insulițe din <b>lagună</b>. Terenul este noroi moale, așa că venețienii au înfipt în fund <b>milioane de pari de lemn</b>, unul lângă altul, și deasupra au construit casele. Sub apă, fără aer, lemnul nu putrezește: unii pari stau acolo de peste o mie de ani!</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… Insulele Eoliene sunt vulcani?",
   "html": "<p>Insulele din arhipelagul <b>Eolian</b> sunt vârfurile unor vulcani care ies din mare. <b>Stromboli</b> este activ de mii de ani și aruncă lapilli la fiecare câteva minute: marinarii din vechime îl numeau „farul Mediteranei”, pentru că noaptea se vedea strălucind de departe.</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege",
   "intro": "Dacă încurci toate aceste cuvinte, încearcă trucurile acestea.",
   "tabs": [
    {
     "label": "🛁 În cada de baie",
     "html": "<p>Umple puțin cada (sau un lighean) și pune înăuntru obiecte diferite:</p>\n<ul>\n<li>Un <b>burete</b> care plutește departe de margini: este o <b>insulă</b>.</li>\n<li>Mai mulți bureței apropiați: un <b>arhipelag</b>.</li>\n<li><b>Brațul</b> tău sprijinit de margine, care intră în apă: o <b>peninsulă</b>; vârful degetelor este <b>capul</b>.</li>\n<li>Spațiul de apă dintre două degete desfăcute: o <b>strâmtoare</b>.</li>\n</ul>"
    },
    {
     "label": "🔤 Din cuvinte",
     "html": "<p>Multe denumiri vin din latină și greacă și conțin deja explicația:</p>\n<ul>\n<li><b>Peninsulă</b> = din latinescul <i>paene insula</i>, „<b>aproape</b> insulă”.</li>\n<li><b>Arhipelag</b> = din greacă, „marea principală”: era numele Mării Egee, plină de insule.</li>\n<li><b>Deltă</b> = litera grecească <b>Δ</b>, triunghi, ca forma gurii de vărsare.</li>\n<li><b>Cap</b> = „cap”: capul uscatului care iese în mare.</li>\n</ul>"
    },
    {
     "label": "🗺️ Desenul de sus",
     "html": "<p>Desenează văzut de sus cu două culori: <b>verde</b> uscatul, <b>albastru</b> apa. Apoi întreabă-te: <i>cine pe cine înconjoară?</i></p>\n<ul>\n<li>Verde înconjurat de albastru → insulă.</li>\n<li>Albastru înconjurat de verde → lac.</li>\n<li>Fâșie subțire verde → istm. Fâșie subțire albastră → strâmtoare.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"290\" height=\"220\" fill=\"#7dd3fc\"/>\n<ellipse cx=\"145\" cy=\"105\" rx=\"80\" ry=\"55\" fill=\"#4ade80\"/>\n<text x=\"145\" y=\"112\" font-size=\"18\" text-anchor=\"middle\" fill=\"#14532d\" font-weight=\"bold\">INSULĂ</text>\n<rect x=\"310\" y=\"0\" width=\"290\" height=\"220\" fill=\"#4ade80\"/>\n<ellipse cx=\"455\" cy=\"105\" rx=\"80\" ry=\"55\" fill=\"#38bdf8\"/>\n<text x=\"455\" y=\"112\" font-size=\"18\" text-anchor=\"middle\" fill=\"#0c4a6e\" font-weight=\"bold\">LAC</text>\n</svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Hartă: cum se nasc formele țărmului",
   "nodes": [
    {
     "id": "mare",
     "label": "Mare și uscat",
     "x": 50,
     "y": 8,
     "color": "#0ea5e9",
     "html": "Acolo unde se întâlnesc, se nasc formele de țărm.",
     "why": "Linia țărmului nu stă niciodată pe loc: marea o roade sau o lungește, nivelul mării urcă și coboară, râurile aduc aluviuni. Formele pe care le vedem sunt o „fotografie” a acestei munci continue."
    },
    {
     "id": "onde",
     "label": "Eroziunea valurilor",
     "x": 18,
     "y": 35,
     "color": "#ef4444",
     "html": "Valurile rod rocile.",
     "why": "Fiecare val lovește roca cu putere și aruncă nisip și pietre ca niște ciocănele. Rocile moi se rod înaintea celor tari: așa se nasc golfurile (unde roca era moale) și capurile (unde era tare)."
    },
    {
     "id": "deposito",
     "label": "Depunerea nisipului",
     "x": 50,
     "y": 35,
     "color": "#eab308",
     "html": "Râurile și curenții aduc și lasă nisip.",
     "why": "Când apa încetinește, nu mai poate căra nisipul și îl lasă să cadă. Așa se formează plaje, cordoane litorale, lagune și delte."
    },
    {
     "id": "livello",
     "label": "Nivelul mării și vulcanii",
     "x": 82,
     "y": 35,
     "color": "#a855f7",
     "html": "Marea urcă și coboară, vulcanii creează uscat nou.",
     "why": "În ultima glaciațiune (acum circa 20.000 de ani) marea era cu peste 100 de metri mai jos: multe insule de azi erau dealuri legate de continent. Când ghețarii s-au topit, marea a crescut și le-a înconjurat."
    },
    {
     "id": "golfo",
     "label": "Golfuri și capuri",
     "x": 12,
     "y": 68,
     "color": "#f97316",
     "html": "Intrânduri și vârfuri de uscat.",
     "why": "Se nasc din eroziunea diferită: rocile moi se retrag (golf), cele tari rezistă și ies în afară (cap)."
    },
    {
     "id": "spiaggia",
     "label": "Plaje și lagune",
     "x": 40,
     "y": 68,
     "color": "#facc15",
     "html": "Țărmuri joase și nisipoase.",
     "why": "Nisipul depus formează cordoane litorale lungi; dacă un cordon închide o porțiune de mare, în spatele lui se formează o lagună, ca la Veneția."
    },
    {
     "id": "delta",
     "label": "Delte",
     "x": 62,
     "y": 88,
     "color": "#22c55e",
     "html": "Gură de vărsare cu multe brațe.",
     "why": "Se formează când râul aduce mai multe aluviuni decât poate duce marea: gura avansează și râul se împarte în brațe."
    },
    {
     "id": "isola",
     "label": "Insule și arhipelaguri",
     "x": 85,
     "y": 68,
     "color": "#16a34a",
     "html": "Uscaturi înconjurate de mare.",
     "why": "Pot fi bucăți de continent despărțite de marea care a crescut (ca Sardinia) sau vârfuri de vulcani născuți pe fundul mării (ca Insulele Eoliene)."
    }
   ],
   "edges": [
    [
     "mare",
     "onde",
     "roade"
    ],
    [
     "mare",
     "deposito",
     "aduce"
    ],
    [
     "mare",
     "livello",
     "schimbă"
    ],
    [
     "onde",
     "golfo",
     "sapă"
    ],
    [
     "deposito",
     "spiaggia",
     "formează"
    ],
    [
     "deposito",
     "delta",
     "formează"
    ],
    [
     "livello",
     "isola",
     "desparte / creează"
    ]
   ]
  },
  {
   "type": "example",
   "title": "Exemplu practic: de ce trec navele prin strâmtori și canale?",
   "html": "<p>O navă care merge de la Genova la Veneția ar putea ocoli Sicilia, dar trecând prin <b>Strâmtoarea Messina</b> economisește mulți kilometri.</p>\n<p>Uneori omul a <b>tăiat chiar un istm</b> ca să creeze un canal: <b>Canalul Corint</b> (1893) taie istmul Corint, iar <b>Canalul Panama</b> (1914) unește Oceanul Atlantic cu Pacificul. Înainte, navele trebuiau să ocolească toată America de Sud!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: formele apei",
   "questions": [
    {
     "type": "mc",
     "q": "Strâmtoarea Messina desparte…",
     "options": [
      "Sardinia și Corsica",
      "Sicilia și Calabria",
      "Italia și Grecia"
     ],
     "answer": 1,
     "explain": "Desparte Sicilia de Calabria și unește Marea Tireniană cu Marea Ionică."
    },
    {
     "type": "mc",
     "q": "Un intrând mic și ferit este…",
     "options": [
      "o baie (golfuleț)",
      "un cap",
      "un istm"
     ],
     "answer": 0,
     "explain": "Baia este ca un golf mic."
    },
    {
     "type": "tf",
     "q": "Delta își ia numele de la o literă grecească.",
     "answer": true,
     "explain": "Litera Δ, în formă de triunghi."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Țărm",
   "d": "Fâșie de pământ care se învecinează cu marea; poate fi înalt sau jos."
  },
  {
   "t": "Insulă",
   "d": "Uscat înconjurat de apă din toate părțile."
  },
  {
   "t": "Arhipelag",
   "d": "Grup de insule apropiate."
  },
  {
   "t": "Peninsulă",
   "d": "Uscat înconjurat de apă pe trei părți."
  },
  {
   "t": "Cap / promontoriu",
   "d": "Vârf de uscat care iese în mare (promontoriul este înalt)."
  },
  {
   "t": "Golf",
   "d": "Intrând larg al mării."
  },
  {
   "t": "Baie (golfuleț)",
   "d": "Intrând mic și ferit."
  },
  {
   "t": "Istm",
   "d": "Fâșie îngustă de uscat care unește două uscaturi și desparte două mări."
  },
  {
   "t": "Strâmtoare",
   "d": "Braț îngust de mare care desparte două uscaturi și unește două mări."
  },
  {
   "t": "Lagună",
   "d": "Apă sărată puțin adâncă, despărțită de mare prin cordoane de nisip."
  },
  {
   "t": "Deltă",
   "d": "Gura unui râu împărțită în mai multe brațe, în formă de triunghi."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Un uscat înconjurat de apă pe trei părți este…",
    "options": [
     "o insulă",
     "o peninsulă",
     "un golf"
    ],
    "answer": 1,
    "explain": "Peninsulă = „aproape insulă”."
   },
   {
    "type": "mc",
    "q": "Care este cea mai mare insulă din Mediterana?",
    "options": [
     "Sardinia",
     "Sicilia",
     "Corsica"
    ],
    "answer": 1,
    "explain": "Sicilia, circa 25.700 km²."
   },
   {
    "type": "mc",
    "q": "Fâșia de uscat care unește două uscaturi și desparte două mări este…",
    "options": [
     "o strâmtoare",
     "un istm",
     "o lagună"
    ],
    "answer": 1,
    "explain": "Istmul, ca cel al Panamei."
   },
   {
    "type": "tf",
    "q": "O strâmtoare este o trecere de mare între două uscaturi.",
    "answer": true,
    "explain": "Exemplu: Strâmtoarea Messina, Strâmtoarea Gibraltar."
   },
   {
    "type": "text",
    "q": "Cum se numește un grup de insule apropiate?",
    "answer": [
     "arhipelag",
     "un arhipelag"
    ],
    "explain": "Arhipelag, ca Insulele Eoliene."
   },
   {
    "type": "mc",
    "q": "Un țărm cu faleze abrupte este…",
    "options": [
     "un țărm înalt",
     "un țărm jos",
     "o deltă"
    ],
    "answer": 0,
    "explain": "Țărmul înalt este stâncos și abrupt."
   },
   {
    "type": "mc",
    "q": "Veneția se află într-o…",
    "options": [
     "deltă",
     "lagună",
     "strâmtoare"
    ],
    "answer": 1,
    "explain": "Laguna Veneției, despărțită de mare prin cordoane de nisip."
   },
   {
    "type": "mc",
    "q": "Gargano este…",
    "options": [
     "un promontoriu",
     "un arhipelag",
     "o lagună"
    ],
    "answer": 0,
    "explain": "Este „pintenul” cizmei: un promontoriu."
   },
   {
    "type": "tf",
    "q": "Golful este uscat care intră în mare.",
    "answer": false,
    "explain": "Este invers: golful este mare care intră în uscat. Uscatul care intră în mare este capul."
   },
   {
    "type": "mc",
    "q": "Delta Padului se află la marea…",
    "options": [
     "Tireniană",
     "Adriatică",
     "Ionică"
    ],
    "answer": 1,
    "explain": "Padul se varsă în Marea Adriatică, între Veneto și Emilia-Romagna."
   },
   {
    "type": "mc",
    "q": "De ce se formează o deltă?",
    "options": [
     "Pentru că râul depune multe aluviuni la gura de vărsare",
     "Pentru că valurile sapă roca",
     "Pentru că există un vulcan"
    ],
    "answer": 0,
    "explain": "Aluviunile se adună și râul se împarte în multe brațe."
   }
  ]
 }
});
