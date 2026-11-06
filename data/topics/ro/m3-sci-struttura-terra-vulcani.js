TOPIC('ro', {
 "id": "m3-sci-struttura-terra-vulcani",
 "title": "Structura Pământului, vulcani și cutremure",
 "intro": "Pământul pare nemișcat, dar sub picioarele noastre este o planetă vie: este făcut din straturi cu temperaturi foarte mari, suprafața lui este împărțită în plăci care se mișcă, iar acolo unde ele se ciocnesc sau se depărtează se nasc vulcani, cutremure și munți.",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Cum cunoaștem interiorul Pământului?",
   "html": "<p>Cea mai adâncă gaură săpată vreodată, puțul super-adânc Kola din Rusia, ajunge la aproximativ <b>12 km</b>: mai puțin de 0,2% din raza Pământului (aproximativ <b>6371 km</b>). Cum știm atunci ce este înăuntru?</p><p>Datorită <b>undelor seismice</b> ale cutremurelor: ele călătoresc prin Pământ și își schimbă viteza și direcția când trec prin materiale diferite. Undele <b>S</b> nu trec prin lichide: de aceea știm că <b>nucleul extern este lichid</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Straturile Pământului",
   "scene": "layers",
   "options": {
    "layers": [
     {
      "r": 1,
      "color": "#65a30d",
      "label": "Scoarța (5–70 km)"
     },
     {
      "r": 0.97,
      "color": "#ea580c",
      "label": "Mantaua (până la 2900 km)"
     },
     {
      "r": 0.55,
      "color": "#facc15",
      "label": "Nucleul extern lichid"
     },
     {
      "r": 0.19,
      "color": "#fef9c3",
      "label": "Nucleul intern solid"
     }
    ]
   },
   "caption": "Rotește modelul: felia tăiată arată straturile. Proporțiile razelor sunt aproape reale (scoarța este foarte subțire!)."
  },
  {
   "type": "text",
   "title": "2. Straturile, unul câte unul",
   "html": "<table><tr><th>Strat</th><th>Adâncime</th><th>Stare și compoziție</th><th>Temperatură</th></tr><tr><td><b>Scoarța</b></td><td>0–35 km (continente, până la 70 sub lanțurile muntoase); 5–10 km (oceane)</td><td>Solidă, roci granitice (continentală) și bazaltice (oceanică)</td><td>până la ~1000 °C la bază</td></tr><tr><td><b>Mantaua</b></td><td>până la ~2900 km</td><td>Roci din silicați de fier și magneziu; solidă, dar capabilă să „curgă” încet</td><td>1000–3700 °C</td></tr><tr><td><b>Nucleul extern</b></td><td>2900–5150 km</td><td>Lichid, fier și nichel</td><td>~4000–5000 °C</td></tr><tr><td><b>Nucleul intern</b></td><td>5150–6371 km</td><td>Solid (din cauza presiunii enorme), fier și nichel</td><td>~5000–5500 °C, ca suprafața Soarelui</td></tr></table><p>Scoarța împreună cu partea de sus, rigidă, a mantalei formează <b>litosfera</b> (aproximativ 100 km), care „plutește” pe <b>astenosferă</b>, mai caldă și plastică.</p>"
  },
  {
   "type": "curiosity",
   "title": "Pământul este un magnet",
   "html": "<p>Fierul lichid care se mișcă în nucleul extern produce <b>câmpul magnetic al Pământului</b>: de aceea acul busolei arată spre Nord. Câmpul magnetic ne protejează de vântul solar și creează <b>aurorele polare</b>. De-a lungul istoriei Pământului, polii magnetici s-au inversat de sute de ori!</p>"
  },
  {
   "type": "text",
   "title": "3. Tectonica plăcilor",
   "html": "<p>În 1912 germanul <b>Alfred Wegener</b> a observat că țărmurile Americii de Sud și ale Africii se potrivesc ca piesele unui puzzle și a propus <b>deriva continentelor</b>: acum 250–300 de milioane de ani uscatul forma un singur supercontinent, <b>Pangeea</b>.</p><p>Astăzi știm că litosfera este împărțită în aproximativ <b>15 plăci mari</b> care se deplasează cu câțiva centimetri pe an, împinse de <b>curenții de convecție</b> din manta. Marginile dintre plăci pot fi:</p><ul><li><b>divergente</b>: plăcile se depărtează, magma urcă și creează scoarță nouă (dorsale oceanice, ca cea medio-atlantică; Islanda);</li><li><b>convergente</b>: plăcile se ciocnesc; una poate coborî sub cealaltă (<b>subducție</b>), formând fose oceanice, vulcani și lanțuri muntoase (Anzi, Himalaya, Alpi, Carpați);</li><li><b>transformante</b>: plăcile alunecă una pe lângă alta (falia San Andreas, în California).</li></ul>"
  },
  {
   "type": "svg",
   "title": "Marginile dintre plăci",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/><rect x=\"0\" y=\"180\" width=\"600\" height=\"120\" fill=\"#fb923c\"/><text x=\"300\" y=\"285\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#7c2d12\">manta (astenosferă): curenți de convecție</text><rect x=\"0\" y=\"130\" width=\"190\" height=\"50\" fill=\"#a16207\"/><rect x=\"210\" y=\"130\" width=\"170\" height=\"50\" fill=\"#a16207\"/><polygon points=\"190,180 210,180 205,120 195,120\" fill=\"#dc2626\"/><path d=\"M200 230 L200 190\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"150\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">←</text><text x=\"230\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"200\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">DIVERGENTĂ</text><text x=\"200\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">dorsală oceanică</text><polygon points=\"380,130 470,130 600,130 600,180 470,180 380,180\" fill=\"#a16207\"/><polygon points=\"380,130 470,130 520,250 470,250\" fill=\"#854d0e\"/><polygon points=\"470,130 520,70 570,130\" fill=\"#57534e\"/><polygon points=\"512,80 528,80 520,60\" fill=\"#dc2626\"/><text x=\"430\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"490\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">CONVERGENTĂ</text><text x=\"490\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">subducție + vulcan</text></svg>",
   "caption": "În stânga, două plăci se depărtează și magma urcă; în dreapta, o placă coboară sub cealaltă și alimentează un vulcan."
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege: modele și dovezi",
   "intro": "Nimeni nu a coborât vreodată în manta. Cum știm cum este făcut Pământul? Cu modele care ne ajută să ne imaginăm și cu dovezi indirecte.",
   "tabs": [
    {
     "label": "🥚 Oul fiert",
     "html": "<p>Taie în două un ou fiert tare: coaja, albușul și gălbenușul amintesc de scoarță, manta și nucleu. Dacă strivești coaja, se sparge în bucăți care rămân „plutind” pe albuș: exact ca plăcile pe manta.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><ellipse cx=\"160\" cy=\"150\" rx=\"110\" ry=\"130\" fill=\"#fff\" stroke=\"#a16207\" stroke-width=\"5\"/><circle cx=\"160\" cy=\"165\" r=\"62\" fill=\"#facc15\"/><text x=\"160\" y=\"172\" font-size=\"16\" text-anchor=\"middle\" fill=\"#713f12\">gălbenuș</text><text x=\"160\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" fill=\"#57534e\">albuș</text><text x=\"300\" y=\"70\" font-size=\"17\" fill=\"#1f2937\">coaja → scoarța (subțire și rigidă, se sparge)</text><text x=\"300\" y=\"120\" font-size=\"17\" fill=\"#1f2937\">albușul → mantaua (solidă, dar „plastică”)</text><text x=\"300\" y=\"170\" font-size=\"17\" fill=\"#1f2937\">gălbenușul → nucleul (în centru, dens)</text><text x=\"300\" y=\"230\" font-size=\"15\" fill=\"#b91c1c\">Atenție: proporțional, scoarța</text><text x=\"300\" y=\"252\" font-size=\"15\" fill=\"#b91c1c\">este și mai subțire decât coaja!</text></svg>"
    },
    {
     "label": "🍑 Piersica",
     "html": "<p>O piersică tăiată are patru părți: coaja subțire, pulpa groasă, sâmburele tare și miezul din el. Este un model cu patru straturi, ca Pământul cu nucleul împărțit în extern și intern.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><circle cx=\"160\" cy=\"150\" r=\"125\" fill=\"#fdba74\" stroke=\"#c2410c\" stroke-width=\"4\"/><path d=\"M160,150 L160,25 A125,125 0 0 1 285,150 Z\" fill=\"#fde68a\" stroke=\"#c2410c\" stroke-width=\"2\"/><ellipse cx=\"160\" cy=\"150\" rx=\"55\" ry=\"68\" fill=\"#92400e\"/><ellipse cx=\"160\" cy=\"150\" rx=\"20\" ry=\"26\" fill=\"#78350f\" stroke=\"#fde68a\" stroke-dasharray=\"3 3\"/><text x=\"310\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">coaja → scoarța</text><text x=\"310\" y=\"130\" font-size=\"17\" fill=\"#1f2937\">pulpa → mantaua</text><text x=\"310\" y=\"180\" font-size=\"17\" fill=\"#1f2937\">sâmburele → nucleul extern</text><text x=\"310\" y=\"230\" font-size=\"17\" fill=\"#1f2937\">miezul → nucleul intern</text></svg>"
    },
    {
     "label": "🌊 Undele seismice",
     "html": "<p>Aceasta este dovada adevărată. Undele cutremurelor traversează Pământul: <b>undele P</b> trec prin solide și lichide, <b>undele S</b> doar prin solide. În partea opusă a planetei există o <b>zonă de umbră</b> unde undele S nu ajung: înseamnă că la o anumită adâncime este un <b>lichid</b>, nucleul extern. Așa a descoperit R. D. Oldham (1906) nucleul, B. Gutenberg (1914) i-a măsurat adâncimea (aproximativ 2900 km), iar daneza Inge Lehmann (1936) a descoperit nucleul intern solid.</p>",
     "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#0f172a\"/><circle cx=\"300\" cy=\"160\" r=\"140\" fill=\"#ea580c\"/><circle cx=\"300\" cy=\"160\" r=\"77\" fill=\"#facc15\"/><circle cx=\"300\" cy=\"160\" r=\"27\" fill=\"#fef9c3\"/><circle cx=\"300\" cy=\"20\" r=\"7\" fill=\"#fff\"/><text x=\"312\" y=\"16\" font-size=\"14\" fill=\"#fff\">cutremur</text><path d=\"M300,20 Q215,80 175,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 Q385,80 425,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 L300,300\" stroke=\"#a7f3d0\" stroke-width=\"3\" stroke-dasharray=\"7 4\"/><path d=\"M178,235 A140,140 0 0 0 422,235\" stroke=\"#f87171\" stroke-width=\"8\" fill=\"none\" opacity=\".7\"/><text x=\"300\" y=\"315\" font-size=\"14\" text-anchor=\"middle\" fill=\"#fecaca\">zona de umbră a undelor S</text><text x=\"20\" y=\"40\" font-size=\"14\" fill=\"#93c5fd\">undele S: doar prin solide</text><text x=\"20\" y=\"62\" font-size=\"14\" fill=\"#a7f3d0\">undele P: solide și lichide</text></svg>"
    },
    {
     "label": "🍪 Biscuiți cu cremă",
     "html": "<p>Ia un biscuit cu cremă și rupe-l în două: cele două bucăți sunt <b>plăcile</b>, crema este mantaua care se deformează. Depărtează-le (margine <b>divergentă</b>): crema iese la mijloc ca magma în dorsale. Împinge-le una spre alta (margine <b>convergentă</b>): una se ridică sau ajunge sub cealaltă, ca la lanțurile muntoase și la fosele oceanice. Fă-le să alunece lateral (margine <b>transformantă</b>): se înțepenesc și apoi se smucesc, ca într-un cutremur.</p>"
    },
    {
     "label": "🏔️ Peisaj 3D",
     "html": "<p>Rotește peisajul și atinge părțile lui: vulcan, munte, mare… Fiecare este rezultatul mișcărilor din interiorul Pământului sau al eroziunii.</p>",
     "scene": "terrain",
     "options": {
      "features": {
       "volcano": {
        "label": "Vulcan",
        "html": "<p>Se formează acolo unde magma urcă la suprafață: la marginile plăcilor (Etna, vulcanii din Anzi) sau deasupra unui „punct fierbinte” (Hawaii).</p>"
       },
       "mountain": {
        "label": "Lanț muntos",
        "html": "<p>Se naște din ciocnirea plăcilor (Alpi, Himalaya): scoarța se cutează și se ridică.</p>"
       },
       "sea": {
        "label": "Mare",
        "html": "<p>Sub mări scoarța este oceanică: mai subțire (5–10 km) și mai grea decât cea continentală.</p>"
       }
      }
     }
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test 1",
   "questions": [
    {
     "type": "mc",
     "q": "Ce strat al Pământului este lichid?",
     "options": [
      "Scoarța",
      "Mantaua",
      "Nucleul extern",
      "Nucleul intern"
     ],
     "answer": 2,
     "explain": "Nucleul extern este fier și nichel topit; o dovedește faptul că undele S nu îl traversează."
    },
    {
     "type": "num",
     "q": "Cât măsoară aproximativ raza Pământului, în km?",
     "answer": 6371,
     "tol": 30,
     "unit": "km",
     "explain": "Aproximativ 6371 km."
    },
    {
     "type": "text",
     "q": "Cum se numea supercontinentul unic de acum aproximativ 250 de milioane de ani?",
     "answer": [
      "pangeea",
      "pangea"
     ],
     "explain": "Pangeea, care înseamnă „tot Pământul”."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Vulcanii",
   "html": "<p>Un <b>vulcan</b> este o crăpătură a scoarței prin care iese <b>magma</b>, rocă topită bogată în gaze. Când ajunge la suprafață se numește <b>lavă</b>.</p><ul><li><b>Vulcani-scut</b> (Hawaii): lavă fluidă și săracă în siliciu, erupții <b>efuzive</b> și liniștite; formă largă și puțin abruptă.</li><li><b>Stratovulcani</b> (Vezuviu, în parte Etna, Fuji): lavă vâscoasă și bogată în gaze, erupții <b>explozive</b> cu cenușă, lapili, bombe și <b>nori arzători</b> (curgeri piroclastice).</li></ul><p>Fenomene legate de vulcanism: <b>gheizere</b>, <b>fumarole</b>, <b>izvoare termale</b>, emanații de vapori (Larderello, în Toscana, unde în 1904 s-a aprins primul bec cu energie geotermală).</p>"
  },
  {
   "type": "widget",
   "title": "Părțile vulcanului",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 360\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"360\" fill=\"#e0f2fe\"/><ellipse cx=\"300\" cy=\"40\" rx=\"120\" ry=\"28\" fill=\"#9ca3af\" opacity=\"0.8\"/><ellipse cx=\"250\" cy=\"55\" rx=\"60\" ry=\"20\" fill=\"#6b7280\" opacity=\"0.8\"/><polygon points=\"60,280 270,90 330,90 540,280\" fill=\"#78716c\"/><polygon points=\"120,240 280,110 320,110 480,240\" fill=\"#a8a29e\" opacity=\"0.6\"/><rect x=\"0\" y=\"280\" width=\"600\" height=\"80\" fill=\"#57534e\"/><ellipse cx=\"300\" cy=\"325\" rx=\"110\" ry=\"28\" fill=\"#ea580c\"/><rect x=\"290\" y=\"95\" width=\"20\" height=\"230\" fill=\"#ea580c\"/><path d=\"M310 200 L420 200\" stroke=\"#ea580c\" stroke-width=\"10\"/><path d=\"M305 95 Q340 140 360 220 Q370 250 390 270\" stroke=\"#f97316\" stroke-width=\"10\" fill=\"none\"/></svg>",
    "spots": [
     {
      "x": 300,
      "y": 325,
      "label": "Camera magmatică"
     },
     {
      "x": 300,
      "y": 230,
      "label": "Coșul principal"
     },
     {
      "x": 300,
      "y": 92,
      "label": "Craterul"
     },
     {
      "x": 415,
      "y": 200,
      "label": "Coș secundar"
     },
     {
      "x": 300,
      "y": 40,
      "label": "Nor de cenușă și gaze"
     },
     {
      "x": 385,
      "y": 265,
      "label": "Curgere de lavă"
     },
     {
      "x": 150,
      "y": 250,
      "label": "Conul vulcanic"
     }
    ]
   },
   "caption": "Apasă pe fiecare punct și alege numele potrivit."
  },
  {
   "type": "3d",
   "title": "Peisaj 3D: forme născute din Pământul care se mișcă",
   "scene": "terrain",
   "options": {
    "features": {
     "volcano": {
      "label": "Vulcan",
      "html": "<p>Magma urcă din <b>camera magmatică</b> prin <b>coș</b> și iese prin <b>crater</b>. Strat după strat de lavă și cenușă construiește conul. În Italia: Etna, Vezuviu, Stromboli, Câmpiile Flegree. În România, munții Călimani și Harghita sunt vulcani stinși.</p>"
     },
     "mountain": {
      "label": "Lanț muntos",
      "html": "<p>Alpii s-au născut din ciocnirea plăcii africane (cu microplaca adriatică) cu cea eurasiatică, începând de acum aproximativ 65 de milioane de ani. Ciocnirea continuă și azi: de aceea în Italia au loc cutremure.</p>"
     },
     "peak": {
      "label": "Vârf",
      "html": "<p>Cele mai înalte vârfuri sunt cele mai tinere: munții vechi (ca Uralii) au fost tociți de eroziune timp de sute de milioane de ani.</p>"
     },
     "valley": {
      "label": "Vale",
      "html": "<p>Săpată de râuri (formă de V) sau de ghețari (formă de U). Eroziunea lucrează împotriva înălțării munților.</p>"
     },
     "sea": {
      "label": "Mare",
      "html": "<p>Fundurile oceanice se lărgesc în dorsale și coboară în manta în fose (subducție). Cel mai vechi fund oceanic are „doar” aproximativ 180 de milioane de ani.</p>"
     },
     "island": {
      "label": "Insulă",
      "html": "<p>Multe insule sunt vulcanice: s-au născut din erupții submarine, ca insulele Eoliene, Islanda (pe dorsala atlantică) și Hawaii (pe un punct fierbinte).</p>"
     },
     "lake": {
      "label": "Lac",
      "html": "<p>Unele lacuri ocupă cratere vechi (lacul Bolsena, Bracciano, Albano în Italia; lacul Sfânta Ana în România): sunt lacurile vulcanice. Altele au fost săpate de ghețari, ca lacul Garda.</p>"
     },
     "plain": {
      "label": "Câmpie",
      "html": "<p>Câmpia Padului este o depresiune enormă umplută cu materialele aduse de Pad și afluenții lui. Sub sedimente, plăcile continuă să se miște.</p>"
     }
    }
   },
   "caption": "Rotește peisajul și atinge părțile ca să citești cum s-au format."
  },
  {
   "type": "3d",
   "title": "Globul vulcanilor și al cutremurelor",
   "scene": "globe",
   "options": {
    "points": [
     {
      "lat": -38.24,
      "lon": -73.05,
      "label": "Valdivia, Chile – cutremurul din 1960 (M 9,5, cel mai puternic înregistrat vreodată)",
      "color": "#dc2626"
     },
     {
      "lat": -16.5,
      "lon": -72,
      "label": "Anzii peruvieni",
      "color": "#f97316"
     },
     {
      "lat": 19,
      "lon": -98.6,
      "label": "Popocatépetl, Mexic",
      "color": "#f97316"
     },
     {
      "lat": 46.2,
      "lon": -122.18,
      "label": "Muntele Sfânta Elena, SUA – erupția din 1980",
      "color": "#f97316"
     },
     {
      "lat": 61.3,
      "lon": -152.25,
      "label": "Alaska",
      "color": "#f97316"
     },
     {
      "lat": 56.06,
      "lon": 160.64,
      "label": "Kamceatka",
      "color": "#f97316"
     },
     {
      "lat": 35.36,
      "lon": 138.73,
      "label": "Muntele Fuji, Japonia",
      "color": "#f97316"
     },
     {
      "lat": 15.14,
      "lon": 120.35,
      "label": "Pinatubo, Filipine – erupția din 1991",
      "color": "#f97316"
     },
     {
      "lat": -6.1,
      "lon": 105.42,
      "label": "Krakatau, Indonezia – erupția din 1883",
      "color": "#f97316"
     },
     {
      "lat": 19.41,
      "lon": -155.29,
      "label": "Kīlauea, Hawaii (punct fierbinte)",
      "color": "#eab308"
     },
     {
      "lat": 63.63,
      "lon": -19.62,
      "label": "Islanda – dorsala medio-atlantică",
      "color": "#eab308"
     },
     {
      "lat": 37.75,
      "lon": 14.99,
      "label": "Etna",
      "color": "#f97316"
     },
     {
      "lat": 40.82,
      "lon": 14.43,
      "label": "Vezuviu – Pompei, 79 d.Hr.",
      "color": "#f97316"
     },
     {
      "lat": 38.3,
      "lon": 142.37,
      "label": "Tōhoku, Japonia – cutremur și tsunami în 2011",
      "color": "#dc2626"
     },
     {
      "lat": 3.3,
      "lon": 95.98,
      "label": "Sumatra – cutremur și tsunami în 2004",
      "color": "#dc2626"
     },
     {
      "lat": 38.2,
      "lon": 15.55,
      "label": "Messina – cutremurul din 1908",
      "color": "#dc2626"
     },
     {
      "lat": 0,
      "lon": -17,
      "label": "",
      "color": "#eab308"
     },
     {
      "lat": -35,
      "lon": -15,
      "label": "",
      "color": "#eab308"
     }
    ],
    "routes": [
     {
      "points": [
       0,
       1,
       2,
       3,
       4,
       5,
       6,
       7,
       8
      ],
      "color": "#ef4444"
     },
     {
      "points": [
       10,
       16,
       17
      ],
      "color": "#eab308"
     }
    ]
   },
   "caption": "Cu roșu „Cercul de foc al Pacificului”, unde se află aproximativ 75% dintre vulcanii activi; cu galben o porțiune din dorsala medio-atlantică. Rotește globul: vulcanii și cutremurele se concentrează de-a lungul marginilor plăcilor."
  },
  {
   "type": "example",
   "title": "Exemplu: vulcanii din Italia",
   "html": "<p>Italia este una dintre cele mai vulcanice țări din Europa pentru că se află acolo unde placa africană împinge în cea eurasiatică.</p><ul><li><b>Etna</b> (Sicilia, aproximativ 3350 m): cel mai înalt vulcan activ din Europa, cu erupții frecvente.</li><li><b>Stromboli</b>: mici explozii continue la fiecare 10–20 de minute, de mii de ani („Farul Mediteranei”).</li><li><b>Vezuviul</b>: în anul <b>79 d.Hr.</b> a îngropat Pompei și Herculaneum; ultima erupție a fost în 1944. Astăzi este supravegheat zi și noapte de Observatorul Vezuvian, cel mai vechi din lume (1841).</li><li><b>Câmpiile Flegree</b>: o caldeiră mare lângă Napoli, unde solul se ridică și coboară (<b>bradiseism</b>).</li></ul>"
  },
  {
   "type": "text",
   "title": "5. Cutremurele",
   "html": "<p>Rocile scoarței, împinse de mișcarea plăcilor, acumulează energie până când se rup de-a lungul unei <b>falii</b>. Energia se eliberează brusc sub formă de <b>unde seismice</b>.</p><ul><li><b>Hipocentrul</b>: punctul din adâncime unde începe ruperea.</li><li><b>Epicentrul</b>: punctul de la suprafață aflat exact deasupra hipocentrului, unde cutremurul este cel mai puternic.</li></ul><p>Cutremurele se înregistrează cu <b>seismograful</b> și se măsoară cu două scări:</p><ul><li><b>Magnitudinea</b> (Richter, astăzi magnitudinea de moment): măsoară <b>energia</b> eliberată. Fiecare grad în plus înseamnă aproximativ de <b>32 de ori</b> mai multă energie.</li><li><b>Scara Mercalli</b> (12 grade): măsoară <b>efectele</b> asupra oamenilor și clădirilor.</li></ul>"
  },
  {
   "type": "example",
   "title": "Exemplu: ce să faci în timpul unui cutremur",
   "html": "<ol><li><b>În interior</b>: adăpostește-te sub o masă solidă sau lângă un perete de rezistență; stai departe de ferestre, geamuri și mobile care pot cădea.</li><li><b>Nu folosi liftul</b> și nu alerga pe scări în timpul seismului.</li><li><b>Afară</b>: îndepărtează-te de clădiri, copaci și linii electrice.</li><li>După seism ieși calm și mergi la <b>punctul de adunare</b> stabilit de planul de protecție civilă al localității tale.</li></ol><p>Cutremurele nu se pot prevedea, dar se pot construi <b>clădiri antiseismice</b> care rezistă la seisme: aceasta este adevărata prevenire.</p>"
  },
  {
   "type": "curiosity",
   "title": "Himalaya crește încă",
   "html": "<p>India se deplasează spre nord și împinge în Asia de aproximativ 50 de milioane de ani: ciocnirea a înălțat <b>Himalaya</b>. Everestul (8849 m) mai crește cu câțiva milimetri pe an. Pe vârfurile lui se găsesc fosile de animale marine: cândva acele roci erau fundul unui ocean!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test 2",
   "questions": [
    {
     "type": "mc",
     "q": "Punctul de la suprafață aflat deasupra originii cutremurului se numește:",
     "options": [
      "Hipocentru",
      "Epicentru",
      "Falie",
      "Crater"
     ],
     "answer": 1,
     "explain": "Epicentrul este deasupra hipocentrului."
    },
    {
     "type": "mc",
     "q": "Ce scară măsoară efectele unui cutremur?",
     "options": [
      "Richter",
      "Mercalli",
      "Celsius",
      "Beaufort"
     ],
     "answer": 1,
     "explain": "Scara Mercalli măsoară pagubele și efectele; magnitudinea măsoară energia."
    },
    {
     "type": "tf",
     "q": "Vezuviul a distrus Pompei în anul 79 d.Hr.",
     "answer": true,
     "explain": "Erupția a îngropat Pompei, Herculaneum și Stabiae."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Hartă conceptuală: de la deriva continentelor la tectonică",
   "nodes": [
    {
     "id": "indizi",
     "label": "Indiciile lui Wegener",
     "x": 20,
     "y": 8,
     "color": "#16a34a",
     "html": "<p>Țărmuri care se potrivesc (America de Sud–Africa), aceleași fosile (Mesosaurus, Glossopteris) pe continente îndepărtate, aceleași roci, urme de ghețari străvechi la tropice.</p>",
     "why": "<p>Dacă continentele ar fi fost mereu unde sunt azi, cum ar fi traversat oceanul o reptilă de apă dulce ca Mesosaurus? Explicația cea mai simplă este că odinioară continentele erau unite.</p>"
    },
    {
     "id": "wegener",
     "label": "Deriva continentelor (1912)",
     "x": 50,
     "y": 8,
     "color": "#2563eb",
     "html": "<p>Alfred Wegener: continentele se deplasează; acum 250 de milioane de ani formau Pangeea.</p>",
     "why": "<p>Wegener era meteorolog, nu geolog, iar ideile lui au fost multă vreme respinse.</p>"
    },
    {
     "id": "motore",
     "label": "Problema: ce motor?",
     "x": 80,
     "y": 8,
     "color": "#b91c1c",
     "html": "<p>Wegener nu știa să explice <b>ce forță</b> mișcă continentele.</p>",
     "why": "<p>O teorie științifică bună trebuie să explice nu doar „ce”, ci și „cum”. Fără un mecanism, majoritatea geologilor din acea vreme nu au acceptat-o. Este un exemplu despre cum avansează știința: ideile sunt puse la încercare.</p>"
    },
    {
     "id": "onde",
     "label": "Undele seismice și structura internă",
     "x": 20,
     "y": 40,
     "color": "#ea580c",
     "html": "<p>Scoarța, mantaua, nucleul extern lichid, nucleul intern solid.</p>",
     "why": "<p>Undele P și S își schimbă viteza și direcția trecând dintr-un material în altul: studiindu-le de la mii de stații seismice se reconstituie interiorul Pământului (Oldham, Gutenberg, Lehmann, Mohorovičić).</p>"
    },
    {
     "id": "fondali",
     "label": "Dorsale și funduri oceanice",
     "x": 50,
     "y": 40,
     "color": "#0891b2",
     "html": "<p>În anii '50 se descoperă dorsalele, munți submarini lungi de zeci de mii de km.</p>",
     "why": "<p>Marie Tharp și Bruce Heezen au cartografiat fundul Atlanticului cu sonare și au găsit o crăpătură lungă în centru. Harry Hess (1962) a propus <b>expansiunea fundului oceanic</b>: scoarța nouă se naște în dorsale și se lărgește.</p>"
    },
    {
     "id": "magnetismo",
     "label": "Benzi magnetice",
     "x": 80,
     "y": 40,
     "color": "#7c3aed",
     "html": "<p>Rocile de pe fundul oceanului înregistrează câmpul magnetic al Pământului, care se inversează în timp.</p>",
     "why": "<p>Vine și Matthews (1963) au observat benzi magnetice simetrice de o parte și de alta a dorsalelor: dovada că fundul oceanului se formează în centru și se depărtează, ca o bandă rulantă.</p>"
    },
    {
     "id": "convezione",
     "label": "Curenții de convecție din manta",
     "x": 30,
     "y": 70,
     "color": "#dc2626",
     "html": "<p>Căldura internă face ca rocile calde să urce încet și cele reci să coboare.</p>",
     "why": "<p>Este același fenomen ca la apa care fierbe într-o oală, dar foarte lent (câțiva centimetri pe an). Este „motorul” care îi lipsea lui Wegener.</p>"
    },
    {
     "id": "tettonica",
     "label": "Tectonica plăcilor (anii '60)",
     "x": 65,
     "y": 70,
     "color": "#1d4ed8",
     "html": "<p>Litosfera este împărțită în plăci care se deplasează cu 2–10 cm pe an.</p>",
     "why": "<p>Unește toate dovezile: structura internă, dorsalele, magnetismul, distribuția vulcanilor și a cutremurelor. Astăzi sateliții GPS măsoară direct deplasarea continentelor: Atlanticul se lărgește cu aproximativ 2–3 cm pe an.</p>"
    },
    {
     "id": "effetti",
     "label": "Vulcani, cutremure, munți",
     "x": 50,
     "y": 92,
     "color": "#475569",
     "html": "<p>Se concentrează de-a lungul marginilor plăcilor.</p>",
     "why": "<p>Unde plăcile se depărtează urcă magmă; unde se ciocnesc se formează munți și fose; unde alunecă se acumulează tensiune care se eliberează prin cutremure. De aceea Italia, la granița dintre placa africană și cea eurasiatică, are vulcani și cutremure (iar în România zona Vrancea este cea mai activă seismic).</p>"
    }
   ],
   "edges": [
    [
     "indizi",
     "wegener",
     "duc la"
    ],
    [
     "wegener",
     "motore",
     "lipsește"
    ],
    [
     "onde",
     "convezione",
     "dezvăluie mantaua"
    ],
    [
     "fondali",
     "tettonica",
     "dovadă"
    ],
    [
     "magnetismo",
     "tettonica",
     "dovadă"
    ],
    [
     "motore",
     "convezione",
     "răspuns"
    ],
    [
     "convezione",
     "tettonica",
     "mișcă"
    ],
    [
     "wegener",
     "tettonica",
     "devine"
    ],
    [
     "tettonica",
     "effetti",
     "explică"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Litosferă",
   "d": "Înveliș rigid format din scoarță și partea de sus a mantalei, împărțit în plăci."
  },
  {
   "t": "Astenosferă",
   "d": "Partea caldă și plastică a mantalei pe care se mișcă plăcile."
  },
  {
   "t": "Subducție",
   "d": "Proces în care o placă coboară sub alta."
  },
  {
   "t": "Magmă",
   "d": "Rocă topită cu gaze, sub suprafață. La suprafață se numește lavă."
  },
  {
   "t": "Falie",
   "d": "Fractură a scoarței de-a lungul căreia rocile se deplasează."
  },
  {
   "t": "Hipocentru",
   "d": "Punctul din adâncime unde se naște un cutremur."
  },
  {
   "t": "Epicentru",
   "d": "Punctul de la suprafață aflat deasupra hipocentrului."
  },
  {
   "t": "Magnitudine",
   "d": "Măsura energiei eliberate de un cutremur."
  },
  {
   "t": "Bradiseism",
   "d": "Ridicarea și coborârea lentă a solului în zone vulcanice."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "order",
    "q": "Pune în ordine straturile de la suprafață spre centru",
    "items": [
     "Scoarța",
     "Mantaua",
     "Nucleul extern",
     "Nucleul intern"
    ],
    "explain": "Scoarța, mantaua, nucleul extern (lichid), nucleul intern (solid)."
   },
   {
    "type": "mc",
    "q": "Din ce este făcut în principal nucleul?",
    "options": [
     "Granit",
     "Fier și nichel",
     "Siliciu și oxigen",
     "Apă"
    ],
    "answer": 1,
    "explain": "Fier și nichel."
   },
   {
    "type": "tf",
    "q": "Nucleul intern este solid în ciuda temperaturii foarte mari.",
    "answer": true,
    "explain": "Presiunea enormă împiedică fierul să se topească."
   },
   {
    "type": "mc",
    "q": "Cine a propus teoria derivei continentelor?",
    "options": [
     "Darwin",
     "Wegener",
     "Galilei",
     "Richter"
    ],
    "answer": 1,
    "explain": "Alfred Wegener, în 1912."
   },
   {
    "type": "mc",
    "q": "Ce se întâmplă la o margine divergentă?",
    "options": [
     "Plăcile se ciocnesc",
     "Plăcile se depărtează și se formează scoarță nouă",
     "Plăcile alunecă lateral",
     "Nimic"
    ],
    "answer": 1,
    "explain": "Magma urcă și creează scoarță oceanică nouă: este cazul dorsalelor."
   },
   {
    "type": "mc",
    "q": "Erupțiile explozive sunt tipice pentru lavele:",
    "options": [
     "fluide și sărace în gaze",
     "vâscoase și bogate în gaze",
     "reci",
     "de apă"
    ],
    "answer": 1,
    "explain": "Gazul prins în lava vâscoasă explodează."
   },
   {
    "type": "text",
    "q": "Cum se numește cel mai înalt vulcan activ din Europa?",
    "answer": [
     "etna",
     "vulcanul etna",
     "muntele etna"
    ],
    "explain": "Etna, în Sicilia."
   },
   {
    "type": "tf",
    "q": "Magnitudinea măsoară pagubele clădirilor.",
    "answer": false,
    "explain": "Magnitudinea măsoară energia; pagubele se măsoară cu scara Mercalli."
   },
   {
    "type": "mc",
    "q": "În timpul unui cutremur, în casă e mai bine să:",
    "options": [
     "Iei liftul",
     "Te adăpostești sub o masă solidă",
     "Te uiți pe fereastră",
     "Alergi pe scări"
    ],
    "answer": 1,
    "explain": "Te adăpostești sub o masă sau lângă un perete de rezistență."
   },
   {
    "type": "mc",
    "q": "Cum s-a format Himalaya?",
    "options": [
     "Dintr-un vulcan",
     "Din ciocnirea plăcii indiene cu placa eurasiatică",
     "Din eroziune",
     "Dintr-un meteorit"
    ],
    "answer": 1,
    "explain": "Este un lanț născut la o margine convergentă."
   },
   {
    "type": "num",
    "q": "Aproximativ la câți km adâncime este granița dintre manta și nucleu?",
    "answer": 2900,
    "tol": 100,
    "unit": "km",
    "explain": "Aproximativ 2900 km."
   }
  ]
 }
});
