TOPIC('ro', {
 "id": "p4-mat-perimetro",
 "title": "Perimetrul",
 "intro": "Câtă plasă trebuie ca să îngrădești grădina de legume? Câtă panglică trebuie ca să înconjori un cadou? Ca să răspunzi trebuie să măsori <b>conturul</b> figurilor, adică <b>perimetrul</b> lor.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Ce este perimetrul",
   "html": "<p><b>Perimetrul</b> este <b>lungimea conturului</b> unei figuri plane.</p>\n<p>Cuvântul vine din greacă: <i>perí</i> = „în jur” și <i>métron</i> = „măsură”. Perimetru înseamnă chiar „măsura înconjurului”.</p>\n<p>Pentru un poligon, perimetrul se află foarte simplu:</p>\n<p style=\"font-size:1.2em\"><b>Perimetru = suma lungimilor tuturor laturilor</b></p>\n<p>Perimetrul este o <b>lungime</b>: se măsoară în <b>mm, cm, dm, m, km</b>… Se notează de obicei cu litera <b>P</b> (sau 2p).</p>\n<p>⚠️ Înainte de a aduna, verifică dacă toate laturile sunt în <b>aceeași unitate de măsură</b>! Nu se pot aduna centimetri cu metri.</p>"
  },
  {
   "type": "svg",
   "title": "Furnica care face înconjurul",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<polygon points=\"80,240 120,70 330,50 420,200 260,250\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"6\" stroke-dasharray=\"16 6\"/>\n<text x=\"72\" y=\"236\" font-size=\"30\">🐜</text>\n<text x=\"80\" y=\"155\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"200\" y=\"45\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">6 cm</text>\n<text x=\"385\" y=\"115\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">4 cm</text>\n<text x=\"350\" y=\"245\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"140\" y=\"270\" font-size=\"20\" fill=\"#1f2937\" font-weight=\"bold\">5 cm</text>\n<text x=\"440\" y=\"60\" font-size=\"20\" fill=\"#15803d\" font-weight=\"bold\">P = 5 + 6 + 4</text>\n<text x=\"470\" y=\"88\" font-size=\"20\" fill=\"#15803d\" font-weight=\"bold\">+ 5 + 5</text>\n<text x=\"470\" y=\"120\" font-size=\"24\" fill=\"#b91c1c\" font-weight=\"bold\">= 25 cm</text>\n</svg>",
   "caption": "Furnica pornește dintr-un vârf și merge de-a lungul tuturor laturilor până se întoarce în punctul de plecare: drumul parcurs este perimetrul."
  },
  {
   "type": "text",
   "title": "Cele mai folosite formule",
   "html": "<p>Pentru unele figuri există scurtături, pentru că au laturi egale.</p>\n<table>\n<tr><th>Figura</th><th>Perimetrul</th><th>De ce</th></tr>\n<tr><td><b>Pătrat</b> (latura l)</td><td>P = l × 4</td><td>4 laturi egale</td></tr>\n<tr><td><b>Dreptunghi</b> (baza b, înălțimea h)</td><td>P = (b + h) × 2</td><td>2 baze și 2 înălțimi egale</td></tr>\n<tr><td><b>Triunghi echilateral</b></td><td>P = l × 3</td><td>3 laturi egale</td></tr>\n<tr><td><b>Triunghi isoscel</b></td><td>P = bază + latură × 2</td><td>2 laturi oblice egale</td></tr>\n<tr><td><b>Romb</b></td><td>P = l × 4</td><td>4 laturi egale</td></tr>\n<tr><td><b>Paralelogram</b></td><td>P = (a + b) × 2</td><td>laturi opuse egale</td></tr>\n<tr><td><b>Poligon regulat</b> cu n laturi</td><td>P = l × n</td><td>n laturi egale</td></tr>\n<tr><td>Poligon oarecare</td><td>suma tuturor laturilor</td><td>—</td></tr>\n</table>"
  },
  {
   "type": "widget",
   "title": "Joacă-te cu dreptunghiul",
   "widget": "areaGrid",
   "options": {
    "w": 6,
    "h": 3,
    "max": 12
   },
   "caption": "Mută cursoarele: numără pătrățelele din contur și verifică perimetrul. Încearcă să găsești dreptunghiuri diferite cu același perimetru!"
  },
  {
   "type": "quiz",
   "title": "Mini-test: calcularea perimetrului",
   "questions": [
    {
     "type": "num",
     "q": "Un pătrat are latura de 7 cm. Care este perimetrul lui?",
     "answer": 28,
     "unit": "cm",
     "explain": "7 × 4 = 28 cm."
    },
    {
     "type": "num",
     "q": "Un dreptunghi are baza de 9 cm și înălțimea de 4 cm. Care este perimetrul?",
     "answer": 26,
     "unit": "cm",
     "explain": "(9 + 4) × 2 = 13 × 2 = 26 cm."
    },
    {
     "type": "tf",
     "q": "Perimetrul se măsoară în metri, centimetri sau alte unități de lungime.",
     "answer": true,
     "explain": "Este o lungime: conturul figurii."
    }
   ]
  },
  {
   "type": "text",
   "title": "Probleme invers: formulele inverse",
   "html": "<p>Uneori cunoști perimetrul și trebuie să găsești o latură. Se face operația <b>inversă</b>:</p>\n<ul>\n<li><b>Pătrat</b>: latura = P : 4. Dacă P = 36 cm → l = 36 : 4 = <b>9 cm</b>.</li>\n<li><b>Triunghi echilateral</b>: latura = P : 3. Dacă P = 27 m → l = <b>9 m</b>.</li>\n<li><b>Dreptunghi</b>: bază + înălțime = P : 2, apoi scad latura pe care o cunosc. Dacă P = 30 cm și b = 10 cm → b + h = 15 → h = 15 − 10 = <b>5 cm</b>.</li>\n<li><b>Poligon regulat</b>: latura = P : n (n = numărul laturilor).</li>\n</ul>\n<p>Verifică mereu: refă calculul „înainte” și vezi dacă ai obținut perimetrul de la care ai pornit!</p>"
  },
  {
   "type": "svg",
   "title": "Același perimetru, forme diferite",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#eff6ff\"/>\n<rect x=\"30\" y=\"100\" width=\"240\" height=\"40\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"4\"/>\n<text x=\"150\" y=\"90\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">6 cm</text>\n<text x=\"290\" y=\"127\" font-size=\"18\" fill=\"#1f2937\">1 cm</text>\n<text x=\"150\" y=\"175\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">P = (6+1)×2 = 14 cm</text>\n<rect x=\"380\" y=\"60\" width=\"160\" height=\"120\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<text x=\"460\" y=\"50\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">4 cm</text>\n<text x=\"550\" y=\"127\" font-size=\"18\" fill=\"#1f2937\">3 cm</text>\n<text x=\"460\" y=\"215\" font-size=\"20\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">P = (4+3)×2 = 14 cm</text>\n<text x=\"300\" y=\"260\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1f2937\">Același înconjur de sfoară… dar înăuntru este mai mult sau mai puțin loc!</text>\n</svg>",
   "caption": "Două dreptunghiuri cu același perimetru (14 cm) pot fi foarte diferite: perimetrul măsoară conturul, nu spațiul din interior."
  },
  {
   "type": "example",
   "title": "Exemplu practic: gardul grădinii de legume",
   "html": "<p>Bunicul are o grădină dreptunghiulară cu lungimea de <b>12 m</b> și lățimea de <b>8 m</b>. Vrea s-o îngrădească cu o plasă, lăsând o poartă lată de <b>1 m</b>. Câți metri de plasă trebuie să cumpere?</p>\n<ol>\n<li>Perimetrul grădinii: (12 + 8) × 2 = 20 × 2 = <b>40 m</b></li>\n<li>Scad poarta: 40 − 1 = <b>39 m</b> de plasă</li>\n</ol>\n<p>Dacă plasa costă 3 € metrul, va cheltui 39 × 3 = <b>117 €</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: rama și panglica",
   "html": "<p>Sofia vrea să lipească o panglică în jurul unui desen pătrat de-al ei cu latura de <b>25 cm</b>. Are un sul de panglică de <b>1 m</b>. Îi ajunge?</p>\n<ol>\n<li>Perimetrul pătratului: 25 × 4 = <b>100 cm</b></li>\n<li>1 m = 100 cm → panglica ajunge <b>taman</b>, fără rest! 🎀</li>\n</ol>\n<p>Și pentru un afiș triunghiular echilateral cu latura de 40 cm? 40 × 3 = 120 cm = 1,2 m: <b>nu ajunge</b>, lipsesc 20 cm.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: terenul de fotbal",
   "html": "<p>Înainte de meci copiii aleargă 2 ture în jurul unui teren de minifotbal lung de <b>40 m</b> și lat de <b>20 m</b>. Câți metri aleargă?</p>\n<ol>\n<li>O tură = perimetrul = (40 + 20) × 2 = <b>120 m</b></li>\n<li>Două ture = 120 × 2 = <b>240 m</b></li>\n</ol>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? Coasta infinită",
   "html": "<p>Cât de lungă este coasta Marii Britanii? Depinde de riglă! Măsurând-o în porțiuni drepte de 200 km se obțin aproximativ 2400 km, dar cu porțiuni de 50 km aproximativ 3400 km: cu cât instrumentul este mai mic, cu atât „intri” în fiecare golf și coasta se lungește. Matematicianul <b>Benoît Mandelbrot</b> a studiat acest fapt ciudat în 1967: este „paradoxul liniei de coastă”, din care s-au născut <b>fractalii</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? Regina Didona și pielea de bou",
   "html": "<p>O legendă spune că regina feniciană <b>Didona</b>, ajunsă în Africa, a cerut atâta pământ „cât poate cuprinde o piele de bou”. A tăiat pielea în fâșii foarte subțiri și cu acea lungă sfoară a înconjurat un deal întreg, unde a întemeiat <b>Cartagina</b>. A ales forma care, cu un anumit perimetru, închide cel mai mult spațiu: <b>cercul</b> (folosind și malul mării drept graniță)!</p>"
  },
  {
   "type": "remember",
   "title": "De ținut minte",
   "html": "<ul>\n<li>Perimetru = <b>suma tuturor laturilor</b>. Este o lungime (cm, m…).</li>\n<li>Pătrat: <b>l × 4</b>. Dreptunghi: <b>(b + h) × 2</b>. Triunghi echilateral: <b>l × 3</b>. Poligon regulat: <b>l × n</b>.</li>\n<li>Formule inverse: latura pătratului = <b>P : 4</b>; la dreptunghi b + h = <b>P : 2</b>.</li>\n<li>Înainte de a aduna, adu toate laturile la <b>aceeași unitate de măsură</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege perimetrul",
   "intro": "Perimetrul se poate atinge, desfășura, parcurge. Iată alte căi ca să-l înțelegi.",
   "tabs": [
    {
     "label": "🧵 Sfoara",
     "html": "<p>Ia o sfoară și așază-o bine de-a lungul marginii unui obiect (o carte, banca, o farfurie). Fă un semn acolo unde se închide înconjurul. Acum <b>desfă-o</b> și măsoar-o cu rigla: aceea este măsura perimetrului!</p>\n<p>Acest truc funcționează și cu figurile curbe, ca marginea unei farfurii, unde formulele poligoanelor nu ajung.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#fffbeb\"/>\n<rect x=\"40\" y=\"40\" width=\"160\" height=\"110\" fill=\"#fde68a\" stroke=\"#b91c1c\" stroke-width=\"6\"/>\n<text x=\"120\" y=\"102\" font-size=\"20\" text-anchor=\"middle\" fill=\"#78350f\">carte</text>\n<text x=\"230\" y=\"105\" font-size=\"36\" fill=\"#1f2937\">➜</text>\n<line x1=\"290\" y1=\"95\" x2=\"570\" y2=\"95\" stroke=\"#b91c1c\" stroke-width=\"6\"/>\n<rect x=\"290\" y=\"115\" width=\"280\" height=\"30\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n<g stroke=\"#0369a1\" stroke-width=\"2\">\n<line x1=\"318\" y1=\"115\" x2=\"318\" y2=\"130\"/><line x1=\"346\" y1=\"115\" x2=\"346\" y2=\"130\"/><line x1=\"374\" y1=\"115\" x2=\"374\" y2=\"130\"/><line x1=\"402\" y1=\"115\" x2=\"402\" y2=\"130\"/><line x1=\"430\" y1=\"115\" x2=\"430\" y2=\"135\"/><line x1=\"458\" y1=\"115\" x2=\"458\" y2=\"130\"/><line x1=\"486\" y1=\"115\" x2=\"486\" y2=\"130\"/><line x1=\"514\" y1=\"115\" x2=\"514\" y2=\"130\"/><line x1=\"542\" y1=\"115\" x2=\"542\" y2=\"130\"/>\n</g>\n<text x=\"430\" y=\"190\" font-size=\"22\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">sfoara desfășurată = perimetru</text>\n</svg>"
    },
    {
     "label": "📏 Pe axa numerelor",
     "html": "<p>Imaginează-ți că „deschizi” conturul unui dreptunghi cu baza 5 și înălțimea 3 și îl întinzi pe o dreaptă. Faci o săritură pentru fiecare latură: <b>5, apoi 3, apoi 5, apoi 3</b>. Unde ajungi? La <b>16</b>: este perimetrul! Săriturile sunt în perechi egale, de aceea se poate face (5 + 3) × 2.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 20,
      "step": 1,
      "marks": [
       5,
       8,
       13,
       16
      ]
     }
    },
    {
     "label": "🚶 Numărarea pașilor",
     "html": "<p>În Finlanda și în multe țări din nord matematica se face adesea <b>în aer liber</b>. Încearcă în curte:</p>\n<ol>\n<li>Mergi de-a lungul marginii terenului sau a straturilor de flori și numără pașii.</li>\n<li>Măsoară cu metrul cât de lung este un pas de-al tău (de exemplu 50 cm).</li>\n<li>Înmulțește: 80 de pași × 50 cm = 4000 cm = <b>40 m</b> de perimetru.</li>\n</ol>\n<p>Vechii romani măsurau drumurile chiar așa: <b>o mie de pași</b> (<i>mille passus</i>) făceau o <b>milă</b>, aproximativ 1480 m. „Pasul” lor era format din două pasuri.</p>"
    },
    {
     "label": "🟦 Pătrățele și scobitori",
     "html": "<p>Desenează o figură pe caietul cu pătrățele urmând liniile. Perimetrul este numărul de <b>laturi de pătrățel</b> aflate pe margine.</p>\n<p>Sau construiește figuri cu <b>scobitori</b>, toate la fel de lungi: perimetrul este numărul de scobitori folosite! Cu 12 scobitori poți face un pătrat 3 × 3, un dreptunghi 5 × 1, un dreptunghi 4 × 2… toate cu perimetrul 12, dar de mărimi diferite.</p>",
     "widget": "areaGrid",
     "options": {
      "w": 3,
      "h": 3,
      "max": 10
     }
    },
    {
     "label": "🏛️ Ca grecii",
     "html": "<p>La poligoanele regulate grecii au observat că perimetrul este mereu <b>latura × numărul laturilor</b>. Marele <b>Arhimede</b> din Siracuza (secolul al III-lea î.Hr.) a folosit chiar perimetrele poligoanelor regulate cu 6, 12, 24, 48 și 96 de laturi, desenate înăuntrul și în afara unui cerc, ca să calculeze cât de lungă este circumferința. A descoperit că „înconjurul” cercului este puțin mai mare de <b>3 ori</b> diametrul lui: este celebrul număr π ≈ 3,14!</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"240\" fill=\"#faf5ff\"/>\n<circle cx=\"150\" cy=\"120\" r=\"90\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"4\"/>\n<polygon points=\"240,120 195,198 105,198 60,120 105,42 195,42\" fill=\"#ddd6fe\" fill-opacity=\"0.6\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<circle cx=\"420\" cy=\"120\" r=\"90\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"4\"/>\n<polygon points=\"510,120 498,165 465,198 420,210 375,198 342,165 330,120 342,75 375,42 420,30 465,42 498,75\" fill=\"#ddd6fe\" fill-opacity=\"0.6\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"232\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">6 laturi</text>\n<text x=\"420\" y=\"232\" font-size=\"17\" text-anchor=\"middle\" fill=\"#1f2937\">12 laturi: aproape un cerc!</text>\n</svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta perimetrului: atinge un nod și află de ce",
   "nodes": [
    {
     "id": "lunghezza",
     "label": "Măsuri de lungime",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "Metrul și multiplii și submultiplii lui: km, hm, dam, m, dm, cm, mm.",
     "why": "Metrul s-a născut în Franța în 1791, în timpul Revoluției, ca a zecea milioana parte din distanța dintre Polul Nord și Ecuator. Înainte fiecare oraș avea măsurile lui (coți, picioare, palme), iar comerțul era un haos."
    },
    {
     "id": "poligono",
     "label": "Poligon",
     "x": 18,
     "y": 28,
     "color": "#16a34a",
     "html": "Figură plană închisă de segmente: laturile.",
     "why": "Fiindcă conturul este făcut din segmente drepte, le putem măsura unul câte unul cu rigla."
    },
    {
     "id": "perimetro",
     "label": "Perimetru",
     "x": 50,
     "y": 40,
     "color": "#dc2626",
     "html": "Lungimea conturului unei figuri: suma laturilor.",
     "why": "Din greacă <i>perí</i> (în jur) + <i>métron</i> (măsură). Agrimensorii egipteni îl calculau după fiecare revărsare a Nilului ca să redeseneze hotarele câmpurilor și să știe cât zid sau gard viu era nevoie."
    },
    {
     "id": "somma",
     "label": "Suma laturilor",
     "x": 82,
     "y": 28,
     "color": "#f59e0b",
     "html": "Metoda care funcționează întotdeauna: adun toate laturile.",
     "why": "A parcurge conturul înseamnă a parcurge fiecare latură o singură dată: drumul total este suma bucăților."
    },
    {
     "id": "quadrato",
     "label": "Pătrat: l × 4",
     "x": 15,
     "y": 66,
     "color": "#2563eb",
     "html": "4 laturi egale: P = l × 4.",
     "why": "Înmulțirea este o adunare repetată: l + l + l + l = l × 4."
    },
    {
     "id": "rettangolo",
     "label": "Dreptunghi: (b + h) × 2",
     "x": 40,
     "y": 72,
     "color": "#0ea5e9",
     "html": "Două baze și două înălțimi egale.",
     "why": "Laturile opuse ale dreptunghiului sunt egale. Se poate face b × 2 + h × 2, sau (b + h) × 2: datorită <b>proprietății distributive</b> rezultatul este același."
    },
    {
     "id": "regolare",
     "label": "Regulat: l × n",
     "x": 65,
     "y": 72,
     "color": "#a855f7",
     "html": "Poligon regulat cu n laturi: P = l × n.",
     "why": "Toate laturile sunt egale: se adună de n ori aceeași lungime. Arhimede a folosit perimetrele poligoanelor regulate ca să se apropie de lungimea cercului."
    },
    {
     "id": "inverse",
     "label": "Formule inverse",
     "x": 88,
     "y": 66,
     "color": "#14b8a6",
     "html": "Din perimetru aflu latura: l = P : 4 (pătrat), l = P : n (regulat).",
     "why": "Împărțirea este operația inversă a înmulțirii: dacă l × 4 = P, atunci P : 4 = l."
    },
    {
     "id": "area",
     "label": "Nu este aria!",
     "x": 50,
     "y": 94,
     "color": "#be185d",
     "html": "Perimetrul măsoară marginea, aria măsoară spațiul din interior.",
     "why": "Figuri cu același perimetru pot avea arii diferite. Dintre toate dreptunghiurile cu același perimetru, pătratul are aria cea mai mare; dintre toate figurile, cercul (problema izoperimetrică, cunoscută deja de greci)."
    }
   ],
   "edges": [
    [
     "lunghezza",
     "perimetro",
     "se măsoară în"
    ],
    [
     "poligono",
     "perimetro",
     "are o"
    ],
    [
     "perimetro",
     "somma",
     "se calculează cu"
    ],
    [
     "perimetro",
     "quadrato",
     "scurtătură"
    ],
    [
     "perimetro",
     "rettangolo",
     "scurtătură"
    ],
    [
     "perimetro",
     "regolare",
     "scurtătură"
    ],
    [
     "regolare",
     "inverse",
     "invers"
    ],
    [
     "perimetro",
     "area",
     "a nu se confunda cu"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: formule inverse și probleme",
   "questions": [
    {
     "type": "num",
     "q": "Perimetrul unui pătrat este 48 cm. Cât măsoară latura?",
     "answer": 12,
     "unit": "cm",
     "explain": "48 : 4 = 12 cm."
    },
    {
     "type": "num",
     "q": "Un hexagon regulat are latura de 5 m. Care este perimetrul?",
     "answer": 30,
     "unit": "m",
     "explain": "5 × 6 = 30 m."
    },
    {
     "type": "mc",
     "q": "Un dreptunghi are perimetrul 20 cm și baza 7 cm. Înălțimea este…",
     "options": [
      "3 cm",
      "6 cm",
      "13 cm"
     ],
     "answer": 0,
     "explain": "20 : 2 = 10 (bază + înălțime); 10 − 7 = 3 cm."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Perimetru",
   "d": "Lungimea conturului unei figuri plane; la poligoane este suma laturilor."
  },
  {
   "t": "Contur",
   "d": "Linia care delimitează o figură."
  },
  {
   "t": "Bază",
   "d": "La dreptunghi, latura pe care „se sprijină” figura."
  },
  {
   "t": "Înălțime",
   "d": "La dreptunghi, latura perpendiculară pe bază."
  },
  {
   "t": "Formulă",
   "d": "O regulă scrisă pe scurt cu litere și simboluri, de exemplu P = l × 4."
  },
  {
   "t": "Formulă inversă",
   "d": "Regula pentru a găsi o latură pornind de la perimetru."
  },
  {
   "t": "Unitate de măsură",
   "d": "Mărimea folosită pentru comparație, de exemplu metrul."
  },
  {
   "t": "Izoperimetrice",
   "d": "Figuri care au același perimetru."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Perimetrul este…",
    "options": [
     "spațiul din interiorul unei figuri",
     "lungimea conturului unei figuri",
     "numărul laturilor"
    ],
    "answer": 1,
    "explain": "Perimetru = măsura înconjurului."
   },
   {
    "type": "num",
    "q": "Un triunghi are laturile de 6 cm, 8 cm și 10 cm. Care este perimetrul?",
    "answer": 24,
    "unit": "cm",
    "explain": "6 + 8 + 10 = 24 cm."
   },
   {
    "type": "num",
    "q": "Un pătrat are latura de 15 m. Care este perimetrul?",
    "answer": 60,
    "unit": "m",
    "explain": "15 × 4 = 60 m."
   },
   {
    "type": "num",
    "q": "Un dreptunghi are baza de 25 cm și înălțimea de 10 cm. Care este perimetrul?",
    "answer": 70,
    "unit": "cm",
    "explain": "(25 + 10) × 2 = 70 cm."
   },
   {
    "type": "num",
    "q": "Un triunghi echilateral are perimetrul 36 dm. Cât măsoară o latură?",
    "answer": 12,
    "unit": "dm",
    "explain": "36 : 3 = 12 dm."
   },
   {
    "type": "tf",
    "q": "Două dreptunghiuri cu același perimetru au întotdeauna aceeași formă.",
    "answer": false,
    "explain": "De exemplu 6×1 și 4×3 au amândouă perimetrul 14, dar forme diferite."
   },
   {
    "type": "mc",
    "q": "Care este formula perimetrului dreptunghiului?",
    "options": [
     "b × h",
     "(b + h) × 2",
     "l × 4"
    ],
    "answer": 1,
    "explain": "Două baze plus două înălțimi."
   },
   {
    "type": "num",
    "q": "Un octogon regulat are latura de 4 cm. Care este perimetrul?",
    "answer": 32,
    "unit": "cm",
    "explain": "4 × 8 = 32 cm."
   },
   {
    "type": "num",
    "q": "Un dreptunghi are perimetrul 50 m și înălțimea 10 m. Cât măsoară baza?",
    "answer": 15,
    "unit": "m",
    "explain": "50 : 2 = 25; 25 − 10 = 15 m."
   },
   {
    "type": "text",
    "q": "Din ce limbă veche vine cuvântul „perimetru”?",
    "answer": [
     "greacă",
     "din greacă",
     "greaca"
    ],
    "explain": "Din greacă perí (în jur) și métron (măsură)."
   },
   {
    "type": "order",
    "q": "Pune în ordine pașii pentru a rezolva: „Un pătrat are latura de 2 m. Câți cm de panglică trebuie ca să faci înconjurul?”",
    "items": [
     "Transform latura: 2 m = 200 cm",
     "Aplic formula: P = l × 4",
     "Calculez 200 × 4 = 800",
     "Răspund: trebuie 800 cm de panglică"
    ],
    "explain": "Mai întâi aduc unitățile la aceeași măsură, apoi aplic formula, calculez și răspund."
   },
   {
    "type": "num",
    "q": "Un dreptunghi are baza de 1 m și înălțimea de 30 cm. Cât este perimetrul în cm?",
    "answer": 260,
    "unit": "cm",
    "explain": "1 m = 100 cm; (100 + 30) × 2 = 260 cm."
   }
  ],
  "gen": [
   [
    "perimRect",
    3
   ],
   [
    "lengthConv",
    1
   ]
  ]
 }
});
