TOPIC('ro', {
 "id": "p3-sci-ciclo-acqua",
 "title": "Circuitul apei în natură",
 "intro": "Apa de pe Pământ nu se termină niciodată: călătorește încontinuu între mare, cer și uscat. Această călătorie fără sfârșit se numește <b>circuitul apei</b>.",
 "minutes": 25,
 "sections": [
  {
   "type": "text",
   "title": "Apa își schimbă forma",
   "html": "<p>Apa se poate găsi în <b>trei stări</b>:</p>\n<ul>\n<li><b>Solidă</b>: gheață, zăpadă, grindină. Are o formă proprie.</li>\n<li><b>Lichidă</b>: apa de la robinet, din râuri și din mare. Ia forma vasului.</li>\n<li><b>Gazoasă</b>: vaporii de apă. Sunt invizibili și se împrăștie în aer.</li>\n</ul>\n<p>Cea care schimbă starea apei este <b>căldura</b>: când încălzim, gheața se topește și apa se evaporă; când răcim, vaporii redevin lichid, iar apa îngheață.</p>"
  },
  {
   "type": "3d",
   "title": "Cum este făcută o picătură de apă?",
   "scene": "molecule",
   "options": {
    "atoms": [
     {
      "x": 0,
      "y": 0,
      "z": 0,
      "r": 0.6,
      "color": "#ef4444",
      "label": "O (oxigen)"
     },
     {
      "x": 0.75,
      "y": -0.55,
      "z": 0,
      "r": 0.38,
      "color": "#f8fafc",
      "label": "H (hidrogen)"
     },
     {
      "x": -0.75,
      "y": -0.55,
      "z": 0,
      "r": 0.38,
      "color": "#f8fafc",
      "label": "H (hidrogen)"
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
   },
   "caption": "Fiecare picătură de apă este făcută din miliarde de molecule minuscule H₂O: un atom de oxigen și doi de hidrogen. Rotește-o!"
  },
  {
   "type": "text",
   "title": "Etapele călătoriei",
   "html": "<ol>\n<li><b>Evaporarea</b>: Soarele încălzește apa mărilor, lacurilor și râurilor. O parte devine <b>vapori</b> și urcă spre cer. Și plantele „transpiră” vapori prin frunze (<b>transpirație</b>).</li>\n<li><b>Condensarea</b>: sus este frig. Vaporii se răcesc și se transformă în picături foarte mici: se nasc <b>norii</b>.</li>\n<li><b>Precipitațiile</b>: picăturile se unesc, devin grele și cad ca <b>ploaie</b> sau ca <b>zăpadă</b> ori <b>grindină</b> dacă este foarte frig.</li>\n<li><b>Scurgerea și infiltrarea</b>: apa căzută curge în râuri până la mare sau pătrunde în pământ și formează <b>pânzele freatice</b> subterane.</li>\n</ol>\n<p>Apoi Soarele încălzește din nou apa… și circuitul începe iar!</p>"
  },
  {
   "type": "svg",
   "title": "Circuitul apei",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#e0f2fe\"/>\n<circle cx=\"540\" cy=\"55\" r=\"35\" fill=\"#facc15\"/>\n<path d=\"M0 230 L170 110 L300 230z\" fill=\"#78716c\"/>\n<path d=\"M140 132 L170 110 L200 132 L185 140 L170 128 L155 140z\" fill=\"#ffffff\"/>\n<rect y=\"230\" width=\"600\" height=\"90\" fill=\"#65a30d\"/>\n<path d=\"M330 320 L330 250 Q450 225 600 245 L600 320z\" fill=\"#2563eb\"/>\n<path d=\"M200 200 Q240 240 330 255\" stroke=\"#3b82f6\" stroke-width=\"10\" fill=\"none\"/>\n<ellipse cx=\"190\" cy=\"65\" rx=\"70\" ry=\"28\" fill=\"#94a3b8\"/>\n<ellipse cx=\"240\" cy=\"55\" rx=\"55\" ry=\"25\" fill=\"#cbd5e1\"/>\n<path d=\"M150 100 l-6 16 M180 100 l-6 16 M210 100 l-6 16 M240 100 l-6 16\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<path d=\"M470 235 Q480 180 460 130 M500 235 Q510 180 490 130 M530 235 Q540 180 520 130\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-dasharray=\"6 6\" fill=\"none\"/>\n<path d=\"M440 110 Q360 60 310 60\" stroke=\"#475569\" stroke-width=\"4\" fill=\"none\" marker-end=\"url(#f)\"/>\n<defs><marker id=\"f\" markerWidth=\"10\" markerHeight=\"10\" refX=\"6\" refY=\"5\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10z\" fill=\"#475569\"/></marker></defs>\n<text x=\"500\" y=\"290\" font-size=\"18\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">1 Evaporare</text>\n<text x=\"380\" y=\"45\" font-size=\"18\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2 Condensare</text>\n<text x=\"80\" y=\"150\" font-size=\"18\" fill=\"#1e3a8a\" text-anchor=\"middle\" font-weight=\"bold\">3 Precipitații</text>\n<text x=\"230\" y=\"290\" font-size=\"18\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">4 Scurgere</text>\n</svg>",
   "caption": "Soarele evaporă apa mării, vaporii formează norii, ploaia cade pe munți, iar râurile o aduc înapoi la mare."
  },
  {
   "type": "widget",
   "title": "Găsește etapele circuitului",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/>\n<circle cx=\"540\" cy=\"50\" r=\"30\" fill=\"#facc15\"/>\n<path d=\"M0 220 L160 100 L290 220z\" fill=\"#78716c\"/>\n<rect y=\"220\" width=\"600\" height=\"80\" fill=\"#65a30d\"/>\n<path d=\"M330 300 L330 240 Q450 215 600 235 L600 300z\" fill=\"#2563eb\"/>\n<path d=\"M190 195 Q240 235 330 245\" stroke=\"#3b82f6\" stroke-width=\"10\" fill=\"none\"/>\n<ellipse cx=\"200\" cy=\"60\" rx=\"70\" ry=\"28\" fill=\"#94a3b8\"/>\n<path d=\"M160 95 l-6 16 M190 95 l-6 16 M220 95 l-6 16\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<path d=\"M480 225 Q490 170 470 120 M510 225 Q520 170 500 120\" stroke=\"#ffffff\" stroke-width=\"4\" stroke-dasharray=\"6 6\" fill=\"none\"/>\n</svg>",
    "spots": [
     {
      "x": 490,
      "y": 170,
      "label": "Evaporare"
     },
     {
      "x": 200,
      "y": 60,
      "label": "Condensare (nor)"
     },
     {
      "x": 190,
      "y": 105,
      "label": "Precipitații"
     },
     {
      "x": 260,
      "y": 228,
      "label": "Scurgere (râu)"
     },
     {
      "x": 470,
      "y": 270,
      "label": "Mare"
     }
    ]
   },
   "caption": "Apasă pe fiecare punct și alege denumirea corectă."
  },
  {
   "type": "quiz",
   "title": "Mini-test: etapele",
   "questions": [
    {
     "type": "mc",
     "q": "Cum se numește trecerea apei din lichid în vapori?",
     "options": [
      "Condensare",
      "Evaporare",
      "Solidificare"
     ],
     "answer": 1,
     "explain": "Când apa se încălzește și devine vapori vorbim de evaporare."
    },
    {
     "type": "mc",
     "q": "Din ce sunt făcuți norii?",
     "options": [
      "Din fum",
      "Din vată",
      "Din picături de apă sau cristale de gheață"
     ],
     "answer": 2,
     "explain": "Norii sunt milioane de picături foarte mici (sau cristale de gheață)."
    },
    {
     "type": "tf",
     "q": "Motorul circuitului apei este Soarele.",
     "answer": true,
     "explain": "Căldura Soarelui evaporă apa și pornește circuitul."
    }
   ]
  },
  {
   "type": "example",
   "title": "Exemplu practic: circuitul în bucătărie",
   "html": "<p>Când mama sau tata fierb apă pentru paste:</p>\n<ul>\n<li>din oală iese <b>abur</b> (evaporare);</li>\n<li>dacă se pune un capac, dedesubt se formează multe <b>picături</b> (condensare);</li>\n<li>picăturile devin mari și <b>cad înapoi</b> în oală (precipitații)!</li>\n</ul>\n<p>Oala este ca un mic circuit al apei. ⚠️ Fă această observație doar cu un adult: aburul frige!</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: un circuit al apei într-o pungă",
   "html": "<p>Îți trebuie: o pungă de plastic transparentă cu închidere, puțină apă colorată în albastru, bandă adezivă.</p>\n<ol>\n<li>Pune un deget de apă în pungă și închide-o bine.</li>\n<li>Lipește-o cu bandă de o fereastră însorită.</li>\n<li>După câteva ore vei vedea picături sus („norii”) care apoi alunecă în jos („ploaia”).</li>\n</ol>\n<p>Apa din pungă nu iese niciodată: exact ca apa Pământului!</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…?",
   "html": "<p>Apa pe care o bei azi ar putea fi aceeași pe care o beau dinozaurii! Apa de pe Pământ circulă de miliarde de ani, iar cantitatea ei rămâne aproape mereu aceeași.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…?",
   "html": "<p>Circa <b>97%</b> din apa Pământului este sărată (mări și oceane). Doar 3% este dulce, iar cea mai mare parte este înghețată la poli și pe munți. De aceea nu trebuie risipită!</p>"
  },
  {
   "type": "widget",
   "title": "Solid, lichid sau gazos?",
   "widget": "classify",
   "options": {
    "groups": [
     "🧊 Solid",
     "💧 Lichid",
     "💨 Gazos"
    ],
    "items": [
     [
      "❄️ zăpadă",
      0
     ],
     [
      "🧊 cub de gheață",
      0
     ],
     [
      "🌨️ grindină",
      0
     ],
     [
      "🌧️ ploaie",
      1
     ],
     [
      "🏞️ apa râului",
      1
     ],
     [
      "🚿 apa de la duș",
      1
     ],
     [
      "♨️ aburul din oală",
      2
     ],
     [
      "🌫️ vapori de apă în aer",
      2
     ]
    ]
   },
   "caption": "Pune fiecare exemplu în grupa potrivită."
  },
  {
   "type": "remember",
   "title": "De reținut",
   "html": "<p>Circuitul apei are 4 etape: <b>evaporare → condensare → precipitații → scurgere/infiltrare</b>. Motorul este <b>Soarele</b>. Apa nu se creează și nu se consumă: <b>circulă</b>.</p>"
  },
  {
   "type": "3d",
   "title": "Circuitul apei într-un peisaj 3D",
   "scene": "terrain",
   "caption": "Rotește peisajul și atinge părțile lui: descoperă ce rol are fiecare în călătoria apei.",
   "options": {
    "features": {
     "sea": {
      "label": "Marea",
      "html": "Marea conține aproape toată apa Pământului (circa 97%). Soarele o încălzește și apa se <b>evaporă</b>: aici începe cea mai mare parte a circuitului. Sarea în schimb rămâne în mare: de aceea ploaia este dulce!"
     },
     "mountain": {
      "label": "Muntele",
      "html": "Aerul umed care vine dinspre mare se lovește de munți și trebuie să urce. Urcând se răcește, vaporii <b>condensează</b> și se formează nori: iată de ce la munte plouă și ninge des."
     },
     "glacier": {
      "label": "Ghețarul",
      "html": "Pe vârfurile cele mai înalte zăpada se adună și devine gheață. Ghețarul este o <b>rezervă de apă</b>: vara se topește încet și alimentează pâraiele și râurile. Aici apa poate sta pe loc chiar mii de ani!"
     },
     "source": {
      "label": "Izvorul",
      "html": "Apa de ploaie pătrunde în pământ (<b>infiltrare</b>), curge pe sub pământ și apoi iese printr-un izvor. Adesea este apă rece și curată, filtrată de roci."
     },
     "river": {
      "label": "Râul",
      "html": "Râul adună apa de ploaie, de la izvoare și de la ghețari și o duce înapoi spre mare: este <b>scurgerea</b>, ultima parte a circuitului."
     },
     "lake": {
      "label": "Lacul",
      "html": "Lacul este o depresiune plină cu apă dulce. Și din lac apa se evaporă, iar lacul poate fi un „rezervor” pentru râuri."
     },
     "delta": {
      "label": "Gura de vărsare în deltă",
      "html": "Râul ajunge la mare și se împarte în multe brațe: apa dulce se întoarce în mare și circuitul poate începe din nou."
     }
    }
   }
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege",
   "intro": "Dacă schema cu săgeți nu îți ajunge, încearcă unul dintre aceste moduri: o poveste, un experiment, o „oală uriașă” sau particulele văzute de aproape.",
   "tabs": [
    {
     "label": "💧 Călătoria Picăturii",
     "html": "<p>Salut! Eu sunt <b>Picătura</b> și locuiesc în mare. Într-o dimineață Soarele mă încălzește atât de tare încât devin foarte ușoară: m-am transformat în <b>vapori</b> și urc spre cer, invizibilă. ☀️</p>\n<p>Acolo sus e frig! Mă strâng cu alte picături în jurul unui fir de praf: împreună formăm un <b>nor</b>. ☁️</p>\n<p>Vântul ne duce deasupra munților. Devenim atât de multe și de grele încât cădem: este <b>ploaia</b>! 🌧️ Eu cad pe o pajiște, mă strecor în pământ și curg pe sub pământ până la un <b>izvor</b>.</p>\n<p>Apoi sar în pârâu, alerg în <b>râu</b>… și după câteva săptămâni iată-mă din nou în mare. Călătoria mea nu se termină niciodată! 🔄</p>"
    },
    {
     "label": "🧪 Experiment acasă",
     "html": "<p>Poți crea un mic circuit al apei în bucătărie, <b>cu ajutorul unui adult</b>:</p>\n<ol>\n<li>Pune puțină apă într-o oală și încălzește-o (aragazul joacă rolul <b>Soarelui</b>).</li>\n<li>Un adult ține deasupra oalei un capac rece cu cuburi de gheață pe el (este <b>cerul rece</b>).</li>\n<li>Uită-te sub capac: se formează picături (<b>condensare</b>) care apoi cad înapoi în oală (<b>ploaie</b>)!</li>\n</ol>\n<p><b>Varianta fără foc:</b> pune puțină apă într-o pungă de plastic transparentă bine închisă și lipește-o de o fereastră însorită. După câteva ore vei vedea picături pe pereți care alunecă în jos.</p>"
    },
    {
     "label": "🍲 Oala uriașă",
     "html": "<p>Gândește-te la Pământ ca la o <b>oală uriașă cu capac</b>:</p>\n<ul>\n<li><b>Soarele</b> este aragazul care încălzește;</li>\n<li><b>marea</b> este apa din oală;</li>\n<li><b>aerul rece de sus</b> este capacul, unde vaporii redevin apă;</li>\n<li>picăturile care cad înapoi sunt <b>ploaia</b>.</li>\n</ul>\n<p>Diferența? Oala Pământului nu e niciodată închisă cu cheia: apa se poate opri în ghețari, în lacuri, sub pământ sau în plante și animale (chiar și în tine!).</p>"
    },
    {
     "label": "🔬 Particulele de aproape",
     "html": "<p>Apa este făcută din particule minuscule (molecule). Dacă se schimbă temperatura, se schimbă felul în care se mișcă:</p>\n<ul>\n<li><b>Gheața</b>: moleculele stau strânse și nemișcate la locul lor, ca niște copii așezați în rând.</li>\n<li><b>Apa lichidă</b>: moleculele alunecă una lângă alta, ca niște copii care se joacă în curte.</li>\n<li><b>Vaporii</b>: moleculele aleargă libere și departe, ca niște copii care fug pe o pajiște uriașă.</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"10\" y=\"20\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<rect x=\"210\" y=\"20\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<rect x=\"410\" y=\"20\" width=\"180\" height=\"180\" rx=\"12\" fill=\"#f1f5f9\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<g fill=\"#2563eb\">\n<circle cx=\"45\" cy=\"55\" r=\"12\"/><circle cx=\"80\" cy=\"55\" r=\"12\"/><circle cx=\"115\" cy=\"55\" r=\"12\"/><circle cx=\"150\" cy=\"55\" r=\"12\"/>\n<circle cx=\"45\" cy=\"95\" r=\"12\"/><circle cx=\"80\" cy=\"95\" r=\"12\"/><circle cx=\"115\" cy=\"95\" r=\"12\"/><circle cx=\"150\" cy=\"95\" r=\"12\"/>\n<circle cx=\"45\" cy=\"135\" r=\"12\"/><circle cx=\"80\" cy=\"135\" r=\"12\"/><circle cx=\"115\" cy=\"135\" r=\"12\"/><circle cx=\"150\" cy=\"135\" r=\"12\"/>\n<circle cx=\"45\" cy=\"175\" r=\"12\"/><circle cx=\"80\" cy=\"175\" r=\"12\"/><circle cx=\"115\" cy=\"175\" r=\"12\"/><circle cx=\"150\" cy=\"175\" r=\"12\"/>\n<circle cx=\"240\" cy=\"120\" r=\"12\"/><circle cx=\"268\" cy=\"140\" r=\"12\"/><circle cx=\"300\" cy=\"118\" r=\"12\"/><circle cx=\"330\" cy=\"145\" r=\"12\"/><circle cx=\"360\" cy=\"125\" r=\"12\"/>\n<circle cx=\"250\" cy=\"170\" r=\"12\"/><circle cx=\"285\" cy=\"175\" r=\"12\"/><circle cx=\"318\" cy=\"172\" r=\"12\"/><circle cx=\"352\" cy=\"175\" r=\"12\"/><circle cx=\"290\" cy=\"90\" r=\"12\"/>\n<circle cx=\"440\" cy=\"50\" r=\"12\"/><circle cx=\"545\" cy=\"70\" r=\"12\"/><circle cx=\"490\" cy=\"120\" r=\"12\"/><circle cx=\"430\" cy=\"170\" r=\"12\"/><circle cx=\"560\" cy=\"165\" r=\"12\"/>\n</g>\n<text x=\"100\" y=\"235\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\">🧊 Solid</text>\n<text x=\"300\" y=\"235\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\">💧 Lichid</text>\n<text x=\"500\" y=\"235\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1e3a8a\">♨️ Gazos</text>\n</svg>"
    },
    {
     "label": "⚛️ Molecula în 3D",
     "html": "<p>Iată o moleculă de apă: un atom de <b>oxigen</b> (roșu) și doi de <b>hidrogen</b> (albi). Se scrie <b>H₂O</b>. Rotește-o cu degetul: are forma unui mic „V”, ca urechile lui Mickey Mouse!</p>",
     "scene": "molecule",
     "options": {
      "atoms": [
       {
        "x": 0,
        "y": 0,
        "z": 0,
        "r": 0.55,
        "color": "#ef4444",
        "label": "O"
       },
       {
        "x": 0.75,
        "y": 0.58,
        "z": 0,
        "r": 0.35,
        "color": "#e5e7eb",
        "label": "H"
       },
       {
        "x": -0.75,
        "y": 0.58,
        "z": 0,
        "r": 0.35,
        "color": "#e5e7eb",
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
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta circuitului apei: atinge nodurile și descoperă de ce",
   "nodes": [
    {
     "id": "sole",
     "label": "Soare ☀️",
     "x": 50,
     "y": 6,
     "color": "#f59e0b",
     "html": "Soarele dă energia (căldura) care pune în mișcare tot circuitul.",
     "why": "Fără căldura Soarelui apa nu s-ar evapora: tot circuitul este ca un motor care funcționează cu energie solară. Și vântul, care mută norii, se naște pentru că Soarele încălzește Pământul diferit de la un loc la altul."
    },
    {
     "id": "evaporazione",
     "label": "Evaporare",
     "x": 18,
     "y": 30,
     "color": "#f97316",
     "html": "Apa lichidă se transformă în vapori invizibili.",
     "why": "Moleculele de apă se mișcă mereu. Când sunt încălzite, cele mai rapide reușesc să „sară afară” de la suprafață și zboară în aer. De aceea rufele întinse se usucă mai repede la soare și în vânt."
    },
    {
     "id": "condensazione",
     "label": "Condensare",
     "x": 50,
     "y": 32,
     "color": "#64748b",
     "html": "Vaporii se răcesc și redevin picături: se nasc norii.",
     "why": "Cu cât urci mai sus, cu atât aerul este mai rece. Vaporii răciți se lipesc de fire minuscule de praf sau de sare și formează picături. Norii nu cad pentru că picăturile sunt foarte mici (e nevoie de circa un milion pentru o singură picătură de ploaie!), iar curenții de aer îi țin sus."
    },
    {
     "id": "precipitazione",
     "label": "Precipitații",
     "x": 82,
     "y": 30,
     "color": "#3b82f6",
     "html": "Ploaie, zăpadă sau grindină care cad pe pământ.",
     "why": "Picăturile din nor se ciocnesc și se unesc: când devin prea grele, curenții nu le mai pot ține și cad. Dacă este foarte frig, cad ca zăpadă sau grindină."
    },
    {
     "id": "infiltrazione",
     "label": "Infiltrare",
     "x": 80,
     "y": 62,
     "color": "#92400e",
     "html": "O parte din apă pătrunde în pământ și formează pânzele subterane.",
     "why": "Pământul este plin de spații mici între granule, ca un burete. Apa se strecoară înăuntru, este filtrată de roci și poate ieși la izvoare după zile sau ani."
    },
    {
     "id": "scorrimento",
     "label": "Scurgere",
     "x": 50,
     "y": 72,
     "color": "#0ea5e9",
     "html": "Pâraiele și râurile duc apa înapoi la mare.",
     "why": "Apa coboară mereu în jos din cauza gravitației. În 1674 francezul <b>Pierre Perrault</b> a măsurat ploaia căzută lângă Sena și a descoperit că ajungea (ba chiar prisosea!) pentru a alimenta râul: a fost prima dovadă că râurile se nasc din ploaie."
    },
    {
     "id": "mare",
     "label": "Mări și oceane",
     "x": 18,
     "y": 72,
     "color": "#1d4ed8",
     "html": "Marele rezervor: conține circa 97% din toată apa Pământului.",
     "why": "La câțiva ani după Perrault, astronomul englez <b>Edmond Halley</b> a calculat câtă apă se evaporă din Marea Mediterană și a văzut că este cam câtă aduc râurile: astfel marea nu se revarsă și nici nu se golește."
    },
    {
     "id": "piante",
     "label": "Plantele",
     "x": 50,
     "y": 94,
     "color": "#16a34a",
     "html": "Plantele absorb apa prin rădăcini și o eliberează ca vapori prin frunze (transpirație).",
     "why": "Frunzele au deschideri minuscule, stomatele, prin care ies vapori de apă. O pădure mare ca Amazonia trimite înapoi spre cer atât de multă apă încât își „fabrică” o parte din propria ploaie."
    }
   ],
   "edges": [
    [
     "sole",
     "evaporazione",
     "încălzește și provoacă"
    ],
    [
     "evaporazione",
     "condensazione",
     "vaporii urcă →"
    ],
    [
     "condensazione",
     "precipitazione",
     "picături grele →"
    ],
    [
     "precipitazione",
     "infiltrazione",
     "în pământ"
    ],
    [
     "precipitazione",
     "scorrimento",
     "la suprafață"
    ],
    [
     "infiltrazione",
     "scorrimento",
     "izvoare"
    ],
    [
     "scorrimento",
     "mare",
     "se întoarce la"
    ],
    [
     "mare",
     "evaporazione",
     "o ia de la capăt"
    ],
    [
     "piante",
     "evaporazione",
     "transpirație"
    ],
    [
     "infiltrazione",
     "piante",
     "rădăcini"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: apa în toate stările",
   "questions": [
    {
     "type": "tf",
     "q": "Gheața este apă în stare solidă.",
     "answer": true,
     "explain": "Gheața este apă solidă."
    },
    {
     "type": "mc",
     "q": "Unde ajunge apa care pătrunde în pământ?",
     "options": [
      "Dispare",
      "Formează pânzele freatice subterane",
      "Se întoarce imediat în nori"
     ],
     "answer": 1,
     "explain": "Apa se infiltrează și formează rezerve subterane numite pânze freatice."
    },
    {
     "type": "num",
     "q": "Câte etape principale are circuitul apei?",
     "answer": 4,
     "explain": "Evaporare, condensare, precipitații, scurgere."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Evaporare",
   "d": "Trecerea apei din lichid în vapori, datorită căldurii."
  },
  {
   "t": "Condensare",
   "d": "Trecerea vaporilor în picături de apă lichidă, din cauza frigului."
  },
  {
   "t": "Precipitații",
   "d": "Căderea apei din nori: ploaie, zăpadă, grindină."
  },
  {
   "t": "Infiltrare",
   "d": "Apa care pătrunde în pământ."
  },
  {
   "t": "Pânză freatică",
   "d": "Rezervă de apă sub pământ."
  },
  {
   "t": "Transpirație",
   "d": "Vaporii de apă pe care plantele îi eliberează prin frunze."
  },
  {
   "t": "Vapori de apă",
   "d": "Apă în stare gazoasă, invizibilă."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Ce pornește circuitul apei?",
    "options": [
     "Vântul",
     "Căldura Soarelui",
     "Luna"
    ],
    "answer": 1,
    "explain": "Căldura Soarelui evaporă apa."
   },
   {
    "type": "order",
    "q": "Pune în ordine etapele circuitului apei.",
    "items": [
     "Evaporare",
     "Condensare",
     "Precipitații",
     "Scurgere spre mare"
    ],
    "explain": "Apa se evaporă, formează nori, cade și se întoarce la mare."
   },
   {
    "type": "tf",
    "q": "Cantitatea de apă de pe Pământ scade în fiecare zi pentru că o bem.",
    "answer": false,
    "explain": "Apa circulă continuu: se întoarce mereu în circuit."
   },
   {
    "type": "mc",
    "q": "Cum se numește apa care cade sub formă de bobițe de gheață?",
    "options": [
     "Zăpadă",
     "Grindină",
     "Rouă"
    ],
    "answer": 1,
    "explain": "Grindina este făcută din bobițe de gheață."
   },
   {
    "type": "text",
    "q": "Cum se numește trecerea din vapori în picături?",
    "answer": [
     "condensare",
     "condensarea"
    ],
    "explain": "Se numește condensare."
   },
   {
    "type": "mc",
    "q": "Câtă apă de pe Pământ este sărată?",
    "options": [
     "Circa 3%",
     "Cam jumătate",
     "Circa 97%"
    ],
    "answer": 2,
    "explain": "Circa 97% din apă este în mări și oceane."
   },
   {
    "type": "tf",
    "q": "Și plantele eliberează vapori de apă.",
    "answer": true,
    "explain": "Se numește transpirație."
   },
   {
    "type": "mc",
    "q": "Aburul care iese din oala care fierbe este apă în stare…",
    "options": [
     "solidă",
     "lichidă",
     "gazoasă"
    ],
    "answer": 2,
    "explain": "Vaporii sunt apă gazoasă."
   },
   {
    "type": "mc",
    "q": "Din ce atomi este făcută o moleculă de apă?",
    "options": [
     "2 de hidrogen și 1 de oxigen",
     "1 de carbon și 2 de oxigen",
     "Doar oxigen"
    ],
    "answer": 0,
    "explain": "H₂O: doi atomi de hidrogen și unul de oxigen."
   },
   {
    "type": "tf",
    "q": "Norii se formează pentru că sus aerul este mai rece.",
    "answer": true,
    "explain": "Frigul face ca vaporii să condenseze în picături."
   }
  ]
 }
});
