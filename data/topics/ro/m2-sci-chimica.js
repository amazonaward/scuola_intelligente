TOPIC('ro', {
 "id": "m2-sci-chimica",
 "title": "Elemente, compuși, reacții",
 "intro": "Ce se întâmplă când amesteci oțetul cu bicarbonatul? De ce ruginește fierul? Unde „dispare” lemnul care arde? În această lecție intrăm în lumea <b>atomilor</b> și a <b>moleculelor</b>, învățăm să scriem și să <b>egalăm</b> reacțiile și să calculăm cât produs se obține: sunt <b>rapoartele stoechiometrice</b>. Și apoi… mergem în <b>laborator</b>!",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "1. Materia este făcută din atomi",
   "html": "<p>Tot ce ne înconjoară este făcut din particule foarte mici numite <b>atomi</b>. Un atom este atât de mic încât într-un grăunte de sare sunt cam un miliard de miliarde.</p>\n<p>Fiecare atom are:</p>\n<ul>\n<li>un <b>nucleu</b> în centru, cu <b>protoni</b> (sarcină +) și <b>neutroni</b> (fără sarcină);</li>\n<li>în jur, <b>electronii</b> (sarcină −), mult mai ușori, așezați pe niveluri de energie („straturi”).</li>\n</ul>\n<p><b>Numărul atomic Z</b> este numărul de protoni: este „buletinul de identitate” al elementului. Toți atomii cu 6 protoni sunt carbon, toți cei cu 8 protoni sunt oxigen.</p>\n<p>Un atom este <b>neutru</b>: are tot atâția electroni câți protoni.</p>"
  },
  {
   "type": "3d",
   "title": "Atomul în 3D (modelul lui Bohr)",
   "scene": "atom",
   "caption": "Alege un element: uită-te cum sunt așezați electronii pe straturi. Primul strat conține cel mult 2 electroni, al doilea 8.",
   "options": {
    "elements": [
     "H",
     "He",
     "C",
     "N",
     "O",
     "Na",
     "Mg",
     "Cl"
    ]
   }
  },
  {
   "type": "text",
   "title": "2. Elemente și compuși",
   "html": "<p>Un <b>element</b> (substanță simplă) este o substanță făcută dintr-un singur fel de atomi: fier (Fe), oxigen (O₂), aur (Au). Astăzi cunoaștem <b>118 elemente</b>, ordonate în <b>tabelul periodic</b>.</p>\n<p>Un <b>compus</b> este o substanță făcută din atomi ai unor elemente diferite legați între ei <b>în proporții fixe</b>: apa (H₂O) are mereu 2 atomi de hidrogen pentru fiecare atom de oxigen.</p>\n<p>Atenție: un compus are proprietăți <b>complet diferite</b> de ale elementelor care îl formează. Sodiul (Na) este un metal care explodează în contact cu apa, clorul (Cl₂) este un gaz otrăvitor… dar împreună formează <b>sarea de bucătărie</b> (NaCl)!</p>\n<p>Un <b>amestec</b>, în schimb, este doar o combinare (apă și nisip, aerul): componentele rămân ele însele și se pot separa prin metode fizice.</p>"
  },
  {
   "type": "widget",
   "title": "Tabelul periodic interactiv",
   "widget": "periodicTable",
   "caption": "Atinge un element ca să vezi numărul atomic, masa și curiozități. Elementele din aceeași coloană (grupă) se comportă asemănător.",
   "options": {}
  },
  {
   "type": "text",
   "title": "3. Moleculele",
   "html": "<p>O <b>moleculă</b> este un grup de atomi legați. <b>Formula chimică</b> spune ce atomi sunt și câți:</p>\n<ul>\n<li><b>H₂O</b> (apa): 2 hidrogen + 1 oxigen.</li>\n<li><b>CO₂</b> (dioxidul de carbon): 1 carbon + 2 oxigen.</li>\n<li><b>CH₄</b> (metanul, gazul de la aragaz): 1 carbon + 4 hidrogen.</li>\n</ul>\n<p>Sarea <b>NaCl</b> nu formează molecule separate, ci o <b>rețea cristalină</b>: ioni Na⁺ și Cl⁻ alternând ca pe o tablă de șah tridimensională. De aceea cristalele de sare sunt cubulețe!</p>"
  },
  {
   "type": "alternatives",
   "title": "Moleculele în 3D",
   "intro": "Rotește moleculele: forma contează! Apa este „îndoită”, dioxidul de carbon este drept.",
   "tabs": [
    {
     "label": "💧 H₂O apa",
     "html": "<p>Oxigenul (roșu) stă în centru, cei doi hidrogeni formează un unghi de aproximativ <b>104,5°</b>. Această formă îndoită face ca apa să poată dizolva foarte multe substanțe.</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0.2,
        "z": 0,
        "r": 0.55,
        "color": "#ef4444",
        "label": "O"
       },
       {
        "x": 0.76,
        "y": -0.39,
        "z": 0,
        "r": 0.35,
        "color": "#94a3b8",
        "label": "H"
       },
       {
        "x": -0.76,
        "y": -0.39,
        "z": 0,
        "r": 0.35,
        "color": "#94a3b8",
        "label": "H"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ]
      ]
     }
    },
    {
     "label": "🫧 CO₂",
     "html": "<p>O moleculă <b>liniară</b>: O=C=O. Este gazul din băuturile acidulate și cel pe care îl expirăm. Plantele îl folosesc pentru fotosinteză.</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0,
        "z": 0,
        "r": 0.5,
        "color": "#374151",
        "label": "C"
       },
       {
        "x": 1.16,
        "y": 0,
        "z": 0,
        "r": 0.5,
        "color": "#ef4444",
        "label": "O"
       },
       {
        "x": -1.16,
        "y": 0,
        "z": 0,
        "r": 0.5,
        "color": "#ef4444",
        "label": "O"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ]
      ]
     }
    },
    {
     "label": "🔥 CH₄ metan",
     "html": "<p>Carbonul în centru și 4 hidrogeni în vârfurile unui <b>tetraedru</b> (unghiuri de 109,5°): atomii se așază cât mai departe unii de alții.</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0,
        "z": 0,
        "r": 0.5,
        "color": "#374151",
        "label": "C"
       },
       {
        "x": 0.63,
        "y": 0.63,
        "z": 0.63,
        "r": 0.32,
        "color": "#94a3b8",
        "label": "H"
       },
       {
        "x": -0.63,
        "y": -0.63,
        "z": 0.63,
        "r": 0.32,
        "color": "#94a3b8",
        "label": "H"
       },
       {
        "x": -0.63,
        "y": 0.63,
        "z": -0.63,
        "r": 0.32,
        "color": "#94a3b8",
        "label": "H"
       },
       {
        "x": 0.63,
        "y": -0.63,
        "z": -0.63,
        "r": 0.32,
        "color": "#94a3b8",
        "label": "H"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ],
       [
        0,
        3
       ],
       [
        0,
        4
       ]
      ]
     }
    },
    {
     "label": "🧂 NaCl sare",
     "html": "<p>O bucățică din <b>rețeaua cristalină</b>: Na⁺ (violet, mici) și Cl⁻ (verzi, mari) alternează de-a lungul tuturor muchiilor cubului.</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": -0.8,
        "y": -0.8,
        "z": -0.8,
        "r": 0.3,
        "color": "#8b5cf6",
        "label": "Na"
       },
       {
        "x": 0.8,
        "y": -0.8,
        "z": -0.8,
        "r": 0.45,
        "color": "#22c55e",
        "label": "Cl"
       },
       {
        "x": -0.8,
        "y": 0.8,
        "z": -0.8,
        "r": 0.45,
        "color": "#22c55e",
        "label": "Cl"
       },
       {
        "x": 0.8,
        "y": 0.8,
        "z": -0.8,
        "r": 0.3,
        "color": "#8b5cf6",
        "label": "Na"
       },
       {
        "x": -0.8,
        "y": -0.8,
        "z": 0.8,
        "r": 0.45,
        "color": "#22c55e",
        "label": "Cl"
       },
       {
        "x": 0.8,
        "y": -0.8,
        "z": 0.8,
        "r": 0.3,
        "color": "#8b5cf6",
        "label": "Na"
       },
       {
        "x": -0.8,
        "y": 0.8,
        "z": 0.8,
        "r": 0.3,
        "color": "#8b5cf6",
        "label": "Na"
       },
       {
        "x": 0.8,
        "y": 0.8,
        "z": 0.8,
        "r": 0.45,
        "color": "#22c55e",
        "label": "Cl"
       }
      ],
      "bonds": [
       [
        0,
        1
       ],
       [
        0,
        2
       ],
       [
        1,
        3
       ],
       [
        2,
        3
       ],
       [
        4,
        5
       ],
       [
        4,
        6
       ],
       [
        5,
        7
       ],
       [
        6,
        7
       ],
       [
        0,
        4
       ],
       [
        1,
        5
       ],
       [
        2,
        6
       ],
       [
        3,
        7
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: atomi și molecule",
   "questions": [
    {
     "type": "mc",
     "q": "Numărul atomic Z indică numărul de…",
     "options": [
      "neutroni",
      "protoni",
      "molecule"
     ],
     "answer": 1,
     "explain": "Z = numărul de protoni din nucleu: identifică elementul."
    },
    {
     "type": "mc",
     "q": "Care dintre aceste substanțe este un compus?",
     "options": [
      "O₂",
      "Fe",
      "H₂O"
     ],
     "answer": 2,
     "explain": "H₂O conține atomi din două elemente diferite (H și O)."
    },
    {
     "type": "tf",
     "q": "Sarea de bucătărie are aceleași proprietăți ca sodiul și clorul.",
     "answer": false,
     "explain": "Un compus are proprietăți noi: sodiul este exploziv și clorul otrăvitor, sarea nu."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Reacțiile chimice",
   "html": "<p>Într-o <b>reacție chimică</b> legăturile dintre atomi se rup și se formează altele noi: substanțele de pornire (<b>reactanții</b>) se transformă în substanțe noi (<b>produșii de reacție</b>).</p>\n<p>Cum îți dai seama că a avut loc o reacție? Caută aceste <b>indicii</b>:</p>\n<ul>\n<li>🫧 se formează <b>bule</b> de gaz;</li>\n<li>🎨 se schimbă <b>culoarea</b>;</li>\n<li>🌫️ apare un solid care „tulbură” lichidul (<b>precipitat</b>);</li>\n<li>🔥 se produce sau se absoarbe <b>căldură</b>, lumină sau o flacără.</li>\n</ul>\n<p>O reacție se scrie cu o <b>ecuație chimică</b>: reactanții în stânga, săgeata, produșii în dreapta.</p>\n<p style=\"text-align:center;font-size:1.2em\"><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>\n<p>Numerele din fața formulelor se numesc <b>coeficienți</b>: spun câte molecule participă.</p>"
  },
  {
   "type": "text",
   "title": "5. Cele două mari legi",
   "html": "<p><b>Legea lui Lavoisier (conservarea masei, 1789)</b>: „Nimic nu se pierde, nimic nu se creează, totul se transformă”. Într-o reacție într-un vas închis, <b>masa reactanților este egală cu masa produșilor</b>. Atomii nu dispar: se reorganizează.</p>\n<p><b>Legea lui Proust (proporțiilor definite, 1799)</b>: într-un compus elementele sunt combinate mereu în <b>același raport de masă</b>. În sulfura de fier (FeS) sunt mereu <b>7 g de fier la 4 g de sulf</b>. Dacă pui mai mult fier, ce e în plus <b>rămâne</b>.</p>\n<p>De aceea o ecuație trebuie <b>egalată</b>: în stânga și în dreapta trebuie să fie același număr de atomi din fiecare element.</p>"
  },
  {
   "type": "svg",
   "title": "Balanța lui Lavoisier",
   "caption": "Înainte și după reacție balanța arată aceeași valoare, dacă vasul este închis.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<rect x=\"295\" y=\"80\" width=\"10\" height=\"170\" fill=\"#475569\"/>\n<rect x=\"220\" y=\"250\" width=\"160\" height=\"16\" rx=\"4\" fill=\"#334155\"/>\n<rect x=\"90\" y=\"76\" width=\"420\" height=\"8\" rx=\"4\" fill=\"#64748b\"/>\n<polygon points=\"300,60 290,80 310,80\" fill=\"#334155\"/>\n<line x1=\"120\" y1=\"84\" x2=\"120\" y2=\"150\" stroke=\"#64748b\" stroke-width=\"2\"/>\n<line x1=\"480\" y1=\"84\" x2=\"480\" y2=\"150\" stroke=\"#64748b\" stroke-width=\"2\"/>\n<rect x=\"60\" y=\"150\" width=\"120\" height=\"10\" rx=\"3\" fill=\"#94a3b8\"/>\n<rect x=\"420\" y=\"150\" width=\"120\" height=\"10\" rx=\"3\" fill=\"#94a3b8\"/>\n<rect x=\"85\" y=\"100\" width=\"70\" height=\"50\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n<rect x=\"445\" y=\"100\" width=\"70\" height=\"50\" rx=\"6\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/>\n<text x=\"120\" y=\"130\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e3a8a\">4 g H₂</text>\n<text x=\"120\" y=\"146\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e3a8a\">32 g O₂</text>\n<text x=\"480\" y=\"132\" font-size=\"14\" text-anchor=\"middle\" fill=\"#14532d\">36 g H₂O</text>\n<text x=\"120\" y=\"190\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">ÎNAINTE: 36 g</text>\n<text x=\"480\" y=\"190\" font-size=\"17\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">DUPĂ: 36 g</text>\n<text x=\"300\" y=\"30\" font-size=\"18\" text-anchor=\"middle\" fill=\"#7c3aed\" font-weight=\"bold\">2 H₂ + O₂ → 2 H₂O</text>\n</svg>"
  },
  {
   "type": "example",
   "title": "Exemplu ghidat 1: egalarea unei ecuații",
   "html": "<p>Egalăm reacția hidrogenului cu oxigenul: <b>H₂ + O₂ → H₂O</b></p>\n<ol>\n<li>Număr atomii: în stânga H = 2, O = 2; în dreapta H = 2, O = 1. Oxigenul nu se potrivește.</li>\n<li>Pun un <b>2</b> în fața lui H₂O: <b>H₂ + O₂ → 2 H₂O</b>. Acum în dreapta H = 4, O = 2.</li>\n<li>Hidrogenul nu se mai potrivește: pun un <b>2</b> în fața lui H₂: <b>2 H₂ + O₂ → 2 H₂O</b>.</li>\n<li>Verific: stânga H = 4, O = 2; dreapta H = 4, O = 2. ✅ Egalată!</li>\n</ol>\n<p>⚠️ Se schimbă doar <b>coeficienții</b>, niciodată cifrele mici din formule: H₂O₂ nu este apă, este apă oxigenată!</p>"
  },
  {
   "type": "text",
   "title": "6. Molul și rapoartele stoechiometrice",
   "html": "<p>Atomii sunt prea mici ca să-i numărăm unul câte unul. Chimiștii îi numără „la pachet”, cum ouăle se numără cu duzina. Pachetul chimiștilor se numește <b>mol</b> și conține <b>6,022 × 10²³</b> particule (numărul lui Avogadro).</p>\n<p><b>Masa molară</b> este masa unui mol, în grame. Se calculează adunând masele atomice (din tabelul periodic): H = 1, C = 12, O = 16, Na = 23, S = 32, Cl = 35,5, Fe = 56.</p>\n<ul>\n<li>H₂ → 2 × 1 = <b>2 g/mol</b></li>\n<li>O₂ → 2 × 16 = <b>32 g/mol</b></li>\n<li>H₂O → 2 × 1 + 16 = <b>18 g/mol</b></li>\n<li>CO₂ → 12 + 2 × 16 = <b>44 g/mol</b></li>\n</ul>\n<p><b>Coeficienții</b> unei ecuații egalate indică <b>rapoartele în moli</b>: în 2 H₂ + O₂ → 2 H₂O, <b>2 moli</b> de hidrogen reacționează cu <b>1 mol</b> de oxigen și dau <b>2 moli</b> de apă. Acestea sunt <b>rapoartele stoechiometrice</b> (din grecescul <i>stoicheion</i> = element și <i>metron</i> = măsură).</p>"
  },
  {
   "type": "example",
   "title": "Exemplu ghidat 2: câtă apă obțin?",
   "html": "<p>Reacția: <b>2 H₂ + O₂ → 2 H₂O</b>. Am <b>4 g de H₂</b> și <b>32 g de O₂</b>.</p>\n<ol>\n<li>Transform gramele în moli: H₂ → 4 g ÷ 2 g/mol = <b>2 mol</b>; O₂ → 32 g ÷ 32 g/mol = <b>1 mol</b>.</li>\n<li>Raportul cerut este 2 : 1 și este exact cel pe care îl am. Reacționează amândouă complet.</li>\n<li>Se formează 2 mol de H₂O → 2 × 18 g = <b>36 g</b>.</li>\n<li>Verific cu Lavoisier: 4 g + 32 g = 36 g ✅</li>\n</ol>"
  },
  {
   "type": "example",
   "title": "Exemplu ghidat 3: reactantul limitativ",
   "html": "<p>Acum am <b>10 g de H₂</b> și tot <b>32 g de O₂</b>.</p>\n<ol>\n<li>Moli: H₂ = 10 ÷ 2 = <b>5 mol</b>; O₂ = 32 ÷ 32 = <b>1 mol</b>.</li>\n<li>1 mol de O₂ are nevoie de 2 mol de H₂. Eu am 5: hidrogenul este în exces.</li>\n<li>Oxigenul se termină primul: este <b>reactantul limitativ</b>. El decide cât produs se formează: 2 mol de H₂O = <b>36 g</b>.</li>\n<li>Rămân 5 − 2 = 3 mol de H₂ = <b>6 g</b> de hidrogen care nu a reacționat.</li>\n<li>Verificare: 10 + 32 = 42 g înainte; 36 + 6 = 42 g după ✅</li>\n</ol>\n<p>Același raționament pentru fier și sulf (Fe + S → FeS): cu <b>14 g de Fe</b> și <b>10 g de S</b> reacționează 14 g de Fe cu 8 g de S (raport 7 : 4), se formează <b>22 g de FeS</b> și rămân <b>2 g de sulf</b>.</p>"
  },
  {
   "type": "widget",
   "title": "🧪 Laborator online",
   "widget": "chemLab",
   "caption": "Ia reactanții de pe raft, alege câte grame pui și toarnă-i în pahar. Laboratorul îți spune dacă are loc o reacție, arată ecuația egalată, molii, reactantul limitativ, produșii și verifică conservarea masei.",
   "options": {}
  },
  {
   "type": "remember",
   "title": "Experimente de încercat în laborator",
   "html": "<ul>\n<li>🫧 <b>Bicarbonat + oțet</b>: NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂ (bule de dioxid de carbon). Dacă paharul este deschis, gazul scapă și balanța arată mai puțin: de ce?</li>\n<li>🔩 <b>Fier + sulf</b>: Fe + S → FeS. Încearcă 56 g + 32 g, apoi 56 g + 50 g: ce rămâne?</li>\n<li>⚖️ <b>Hidroxid de sodiu + acid clorhidric</b>: NaOH + HCl → NaCl + H₂O (neutralizare: se formează sare și apă și se încălzește).</li>\n<li>🌫️ <b>Azotat de argint + clorură de sodiu</b>: AgNO₃ + NaCl → AgCl↓ + NaNO₃ (precipitat alb).</li>\n<li>🔥 <b>Arderea metanului</b>: CH₄ + 2 O₂ → CO₂ + 2 H₂O.</li>\n<li>✨ <b>Magneziu + oxigen</b>: 2 Mg + O₂ → 2 MgO (lumină foarte albă).</li>\n<li>🎈 <b>Zinc + acid clorhidric</b>: Zn + 2 HCl → ZnCl₂ + H₂ (se eliberează hidrogen).</li>\n</ul>\n<p>⚠️ Sunt experimente <b>virtuale</b>: mulți dintre acești reactivi sunt periculoși și se folosesc doar într-un laborator adevărat, cu un profesor și cu echipament de protecție.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… atunci când arzi lemne nu „dispare” nimic?",
   "html": "<p>Un buștean de 1 kg lasă doar câteva grame de cenușă. Pare că masa a dispărut, dar nu este așa: carbonul și hidrogenul din lemn s-au unit cu <b>oxigenul din aer</b> și au devenit <b>CO₂ și vapori de apă</b>, care au zburat. Dacă ai cântări și toate gazele, masa produșilor ar fi chiar <b>mai mare</b> decât cea a lemnului, pentru că include oxigenul luat din aer!</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… Mendeleev a lăsat goluri în tabel?",
   "html": "<p>În 1869 Dmitri Mendeleev a ordonat cele 63 de elemente cunoscute și a observat că proprietățile se repetă la intervale regulate. Acolo unde socotelile nu se potriveau a lăsat <b>căsuțe goale</b> și a prezis proprietățile unor elemente încă necunoscute. Câțiva ani mai târziu au fost descoperite <b>galiul</b> (1875) și <b>germaniul</b> (1886), cu proprietăți aproape identice cu cele prezise de el!</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege stoechiometria",
   "intro": "Dacă molii și coeficienții te încurcă, încearcă să te gândești la ei așa.",
   "tabs": [
    {
     "label": "🥞 O rețetă de bucătărie",
     "html": "<p>Rețeta de clătite: <b>2 ouă + 1 cană de lapte → 4 clătite</b>. Este o ecuație egalată!</p>\n<ul>\n<li>Cu 6 ouă și 3 căni de lapte → 12 clătite (totul de trei ori).</li>\n<li>Cu 6 ouă și <b>o singură cană</b> de lapte → doar 4 clătite: laptele este <b>reactantul limitativ</b> și rămân 4 ouă.</li>\n</ul>\n<p>Molii sunt ca „duzinile” din rețetă: numără ingredientele în grupe.</p>"
    },
    {
     "label": "🧱 Cărămizi de construcție",
     "html": "<p>Imaginează-ți atomii ca pe niște piese de construcție: <b>albe</b> = H, <b>roșii</b> = O. O moleculă de apă = 1 roșie + 2 albe.</p>\n<p>Dacă ai 10 albe și 3 roșii, câte „ape” construiești? Fiecare apă folosește 2 albe: cu 10 albe ai face 5, dar cu 3 roșii doar 3. Construiești <b>3</b> și rămân 4 albe. Piesele nu dispar niciodată: la sfârșitul jocului le numeri pe toate (Lavoisier!).</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 3
     }
    },
    {
     "label": "⚖️ Balanța cu două talere",
     "html": "<p>A egala o ecuație e ca și cum ai echilibra o balanță: pe fiecare taler trebuie să fie același număr de atomi din fiecare fel. Poți adăuga <b>molecule întregi</b> (coeficienții), dar nu poți „tăia” o moleculă în jumătate și nici transforma un atom în altul.</p>\n<p>Încearcă cu metanul: CH₄ + O₂ → CO₂ + H₂O. În dreapta trebuie 2 H₂O ca să ai 4 H; atunci în dreapta sunt 4 O, iar în stânga trebuie 2 O₂. Rezultat: <b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b>.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Hartă: cum am descoperit atomii",
   "nodes": [
    {
     "id": "democrito",
     "label": "Democrit (sec. al V-lea î.Hr.)",
     "x": 12,
     "y": 12,
     "color": "#a855f7",
     "html": "Filozoful grec și-a imaginat că materia este făcută din particule indivizibile: „átomos” = care nu se poate tăia.",
     "why": "Era doar un raționament, fără experimente: dacă tai un obiect în bucăți tot mai mici, mai devreme sau mai târziu trebuie să ajungi la o bucată care nu se mai poate împărți. Timp de 2000 de ani ideea a rămas o filozofie."
    },
    {
     "id": "lavoisier",
     "label": "Lavoisier (1789)",
     "x": 38,
     "y": 30,
     "color": "#ef4444",
     "html": "Conservarea masei: în reacții masa totală nu se schimbă.",
     "why": "Lavoisier a folosit balanța foarte riguros și a făcut reacțiile în vase închise. A descoperit că metalele încălzite cresc în greutate pentru că se combină cu un gaz din aer, pe care l-a numit oxigen. Așa chimia a devenit o știință a măsurătorilor."
    },
    {
     "id": "proust",
     "label": "Proust (1799)",
     "x": 62,
     "y": 30,
     "color": "#f97316",
     "html": "Proporțiile definite: un compus are mereu aceeași compoziție în masă.",
     "why": "Analizând probe de carbonat de cupru preparate în moduri diferite, Proust a găsit mereu aceleași procente. Era un indiciu că elementele se unesc „în bucăți întregi”."
    },
    {
     "id": "dalton",
     "label": "Dalton (1808)",
     "x": 50,
     "y": 52,
     "color": "#3b82f6",
     "html": "Teoria atomică: fiecare element este făcut din atomi toți la fel; compușii sunt combinații de atomi în numere întregi.",
     "why": "Dalton a înțeles că legile lui Lavoisier și Proust se explică ușor dacă există atomii: masa se conservă pentru că atomii nu se creează și nu se distrug; proporțiile sunt fixe pentru că se combină mereu în rapoarte de numere întregi."
    },
    {
     "id": "mendeleev",
     "label": "Mendeleev (1869)",
     "x": 22,
     "y": 76,
     "color": "#22c55e",
     "html": "Tabelul periodic: elementele ordonate după masă arată proprietăți care se repetă.",
     "why": "Mendeleev a observat periodicitatea și a îndrăznit să lase căsuțe goale pentru elemente necunoscute. Când acestea au fost descoperite cu proprietățile prezise, toți au înțeles că tabelul reflecta o structură ascunsă a atomilor."
    },
    {
     "id": "bohr",
     "label": "Bohr (1913)",
     "x": 78,
     "y": 76,
     "color": "#0ea5e9",
     "html": "Modelul atomic: electroni pe orbite (niveluri) de energie în jurul nucleului.",
     "why": "După ce Rutherford (1911) a descoperit nucleul, Bohr a explicat de ce atomii emit lumină doar de anumite culori: electronii sar între niveluri de energie fixe. Nivelurile explică și de ce tabelul se repetă."
    },
    {
     "id": "stechiometria",
     "label": "Stoechiometria",
     "x": 50,
     "y": 95,
     "color": "#eab308",
     "html": "Calculul cantităților de reactanți și produși cu moli și coeficienți.",
     "why": "Dacă atomii se combină în numere întregi (Dalton) și masa se conservă (Lavoisier), atunci putem prevedea precis câte grame de produs vom obține: este baza industriei chimice și farmaceutice."
    }
   ],
   "edges": [
    [
     "democrito",
     "dalton",
     "ideea revine"
    ],
    [
     "lavoisier",
     "dalton",
     "explicată de"
    ],
    [
     "proust",
     "dalton",
     "explicată de"
    ],
    [
     "dalton",
     "mendeleev",
     "mase atomice"
    ],
    [
     "mendeleev",
     "bohr",
     "structură ascunsă"
    ],
    [
     "dalton",
     "stechiometria",
     "numere întregi"
    ],
    [
     "lavoisier",
     "stechiometria",
     "masă constantă"
    ]
   ]
  },
  {
   "type": "decision",
   "title": "1770: ce se întâmplă când arde un metal?",
   "html": "<p>În secolul al XVIII-lea aproape toți chimiștii credeau în <b>teoria flogisticului</b>: orice substanță care arde ar conține un „principiu al focului”, flogisticul, care iese în timpul arderii. Dar exista o problemă: când se încălzește staniul sau plumbul în aer, pulberea care se obține („varul” metalului) <b>cântărește mai mult</b> decât metalul de la început.</p>",
   "question": "Tu, în locul lui Lavoisier, ce explicație ai fi ales?",
   "options": [
    {
     "label": "Flogisticul are greutate negativă: când iese, metalul devine mai greu.",
     "outcome": "Chiar a fost propusă de unii chimiști ca să salveze teoria. Dar este o ipoteză inventată „pe măsură”, care nu se poate verifica și care contrazice toate celelalte experiențe cu greutăți."
    },
    {
     "label": "Metalul ia ceva din aer: de aceea cântărește mai mult.",
     "outcome": "Este ipoteza lui Lavoisier. Se poate verifica: dacă încălzesc metalul într-un vas închis, aerul dinăuntru trebuie să scadă, iar greutatea totală să rămână aceeași."
    },
    {
     "label": "Balanța greșește: este doar o eroare de măsurare.",
     "outcome": "Creșterea în greutate se repeta mereu, cu metale și balanțe diferite: nu putea fi o eroare întâmplătoare."
    }
   ],
   "answer": 1,
   "explain": "Lavoisier a încălzit metale în vase sigilate: greutatea totală nu se schimba, dar când deschidea vasul intra aer. Metalul „luase” un gaz, pe care l-a numit <b>oxigen</b> (1777). Știința a ales explicația lui nu pentru că era mai faimoasă, ci pentru că <b>făcea predicții măsurabile care se dovedeau adevărate</b>, în timp ce flogisticul avea nevoie de excepții inventate. A fost nașterea chimiei moderne."
  },
  {
   "type": "quiz",
   "title": "Mini-test: reacții și calcule",
   "questions": [
    {
     "type": "num",
     "q": "Masa molară a CO₂ (C = 12, O = 16)?",
     "answer": 44,
     "unit": "g/mol",
     "explain": "12 + 2 × 16 = 44 g/mol."
    },
    {
     "type": "mc",
     "q": "În 2 H₂ + O₂ → 2 H₂O, câți moli de O₂ trebuie pentru 4 moli de H₂?",
     "options": [
      "1",
      "2",
      "4"
     ],
     "answer": 1,
     "explain": "Raportul este 2 : 1, deci 4 mol de H₂ cer 2 mol de O₂."
    },
    {
     "type": "tf",
     "q": "Reactantul limitativ este cel care se termină primul.",
     "answer": true,
     "explain": "El decide cât produs se poate forma."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Atom",
   "d": "Cea mai mică particulă a unui element: nucleu (protoni și neutroni) și electroni."
  },
  {
   "t": "Număr atomic (Z)",
   "d": "Numărul de protoni din nucleu; identifică elementul."
  },
  {
   "t": "Element",
   "d": "Substanță formată dintr-un singur fel de atomi."
  },
  {
   "t": "Compus",
   "d": "Substanță formată din atomi ai unor elemente diferite în proporții fixe."
  },
  {
   "t": "Moleculă",
   "d": "Grup de atomi legați între ei."
  },
  {
   "t": "Reacție chimică",
   "d": "Transformare în care reactanții devin produși noi."
  },
  {
   "t": "Coeficient",
   "d": "Numărul din fața unei formule într-o ecuație: indică câte molecule sau câți moli."
  },
  {
   "t": "Mol",
   "d": "Cantitatea care conține 6,022 × 10²³ particule."
  },
  {
   "t": "Masă molară",
   "d": "Masa în grame a unui mol de substanță (g/mol)."
  },
  {
   "t": "Raport stoechiometric",
   "d": "Raportul în moli dintre reactanți și produși, dat de coeficienți."
  },
  {
   "t": "Reactant limitativ",
   "d": "Reactantul care se consumă primul și limitează cantitatea de produs."
  },
  {
   "t": "Precipitat",
   "d": "Solid care se formează într-o soluție în timpul unei reacții."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Ce spune legea lui Lavoisier?",
    "options": [
     "Masa produșilor este egală cu cea a reactanților",
     "Gazele cântăresc mereu mai puțin decât solidele",
     "Elementele se pot transforma în alte elemente"
    ],
    "answer": 0,
    "explain": "Nimic nu se pierde, nimic nu se creează, totul se transformă."
   },
   {
    "type": "num",
    "q": "Masa molară a apei H₂O (H = 1, O = 16)?",
    "answer": 18,
    "unit": "g/mol",
    "explain": "2 × 1 + 16 = 18 g/mol."
   },
   {
    "type": "num",
    "q": "Egalează: CH₄ + ? O₂ → CO₂ + 2 H₂O. Ce coeficient se pune în fața lui O₂?",
    "answer": 2,
    "explain": "În dreapta sunt 2 + 2 = 4 atomi de O, deci trebuie 2 O₂."
   },
   {
    "type": "num",
    "q": "Câte grame de O₂ reacționează complet cu 8 g de H₂? (2 H₂ + O₂ → 2 H₂O)",
    "answer": 64,
    "unit": "g",
    "explain": "8 g H₂ = 4 mol; trebuie 2 mol O₂ = 2 × 32 = 64 g."
   },
   {
    "type": "num",
    "q": "Câți moli de apă se formează din 3 moli de O₂ (cu hidrogen în exces)?",
    "answer": 6,
    "unit": "mol",
    "explain": "Raportul O₂ : H₂O este 1 : 2, deci 3 × 2 = 6 mol."
   },
   {
    "type": "num",
    "q": "14 g de fier reacționează exact cu 8 g de sulf. Câte grame de FeS se formează?",
    "answer": 22,
    "unit": "g",
    "explain": "După Lavoisier: 14 + 8 = 22 g."
   },
   {
    "type": "mc",
    "q": "Cu 10 g de H₂ și 32 g de O₂, care este reactantul limitativ?",
    "options": [
     "H₂",
     "O₂",
     "Niciunul"
    ],
    "answer": 1,
    "explain": "5 mol de H₂ și 1 mol de O₂: oxigenul se termină primul și rămân 6 g de H₂."
   },
   {
    "type": "num",
    "q": "Câți moli sunt 88 g de CO₂?",
    "answer": 2,
    "unit": "mol",
    "explain": "88 ÷ 44 = 2 mol."
   },
   {
    "type": "mc",
    "q": "Amestecând azotat de argint și clorură de sodiu se formează un precipitat…",
    "options": [
     "albastru",
     "alb",
     "roșu"
    ],
    "answer": 1,
    "explain": "Clorura de argint (AgCl) este un solid alb."
   },
   {
    "type": "mc",
    "q": "Care dintre acestea este un amestec și nu un compus?",
    "options": [
     "apa distilată",
     "sarea de bucătărie",
     "aerul"
    ],
    "answer": 2,
    "explain": "Aerul este un amestec de gaze (azot, oxigen, argon…)."
   },
   {
    "type": "order",
    "q": "Pune în ordine cronologică.",
    "items": [
     "Democrit",
     "Lavoisier",
     "Dalton",
     "Mendeleev",
     "Bohr"
    ],
    "explain": "Sec. al V-lea î.Hr., 1789, 1808, 1869, 1913."
   },
   {
    "type": "tf",
    "q": "Într-o ecuație se pot schimba cifrele mici din formule ca s-o egalezi.",
    "answer": false,
    "explain": "Se schimbă doar coeficienții: a schimba formulele ar însemna a schimba substanța."
   }
  ]
 }
});
