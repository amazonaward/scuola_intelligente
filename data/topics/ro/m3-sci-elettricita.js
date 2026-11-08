TOPIC('ro', {
 "id": "m3-sci-elettricita",
 "title": "Electricitate și magnetism",
 "intro": "Aprinzi lumina, încarci telefonul, busola arată spre Nord, un fulger sfâșie cerul: în spatele tuturor acestora se află <b>sarcinile electrice</b> și <b>magnetismul</b>, două fețe ale aceluiași fenomen. Vom descoperi ce sunt curentul, tensiunea și rezistența, cum funcționează un circuit, <b>legea lui Ohm</b> și cum poate un magnet să producă electricitate.",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "1. Sarcina electrică",
   "html": "<p>Toată materia este făcută din <b>atomi</b>. În nucleu se află <b>protonii</b> (sarcină <b>pozitivă +</b>) și neutronii (fără sarcină); în jur se mișcă <b>electronii</b> (sarcină <b>negativă −</b>). De obicei un atom are tot atâția protoni câți electroni: este <b>neutru</b>.</p>\n<p>Electronii cei mai exteriori se pot muta de pe un corp pe altul. Un corp care are <b>electroni în plus</b> este încărcat negativ; unul care are <b>mai puțini</b> este încărcat pozitiv.</p>\n<ul>\n<li>Sarcinile <b>de același semn se resping</b> (+ și +, − și −);</li>\n<li>sarcinile <b>de semn opus se atrag</b> (+ și −).</li>\n</ul>\n<p>Un corp se poate <b>electriza</b> în trei moduri:</p>\n<ol>\n<li><b>prin frecare</b>: freacă un balon de păr; electronii trec de pe păr pe balon, care apoi se lipește de perete;</li>\n<li><b>prin contact</b>: un corp încărcat îl atinge pe unul neutru și îi cedează o parte din sarcină;</li>\n<li><b>prin influență</b>: un corp încărcat se apropie fără să atingă și „mută” sarcinile celuilalt (așa atrage balonul bucățelele de hârtie).</li>\n</ol>\n<p>Sarcina se măsoară în <b>coulombi (C)</b>, după fizicianul francez Charles-Augustin de Coulomb, care în 1785 a măsurat forța dintre sarcini.</p>"
  },
  {
   "type": "3d",
   "title": "De ce conduc metalele? Privește atomul",
   "scene": "atom",
   "options": {
    "elements": [
     "Cu",
     "Na",
     "C",
     "O",
     "Fe"
    ]
   },
   "caption": "Alege cuprul (Cu): are 29 de electroni, iar ultimul, singur pe orbita cea mai exterioară, este legat slab. În metale acești electroni părăsesc atomul și formează o „mare” de electroni liberi să se miște: de aceea metalele conduc curentul."
  },
  {
   "type": "text",
   "title": "2. Conductori și izolatori",
   "html": "<ul>\n<li><b>Conductori</b>: lasă sarcinile să treacă ușor. Sunt <b>metalele</b> (argint, cupru, aur, aluminiu, fier), <b>grafitul</b>, <b>apa</b> cu săruri dizolvate (chiar și cea de la robinet!) și <b>corpul uman</b>.</li>\n<li><b>Izolatori</b>: nu lasă sarcinile să treacă. Plastic, cauciuc, sticlă, ceramică, lemn uscat, aer uscat.</li>\n<li><b>Semiconductori</b>: precum <b>siliciul</b>, conduc „la comandă”: sunt baza cipurilor din calculatoare și telefoane.</li>\n</ul>\n<p>În cablurile electrice, cuprul (conductor) este învelit în plastic (izolator): curentul merge unde trebuie, iar noi suntem protejați.</p>"
  },
  {
   "type": "widget",
   "title": "Conductor sau izolator?",
   "widget": "classify",
   "options": {
    "groups": [
     "⚡ Conductor",
     "🛡️ Izolator"
    ],
    "items": [
     [
      "🔩 Cui de fier",
      0
     ],
     [
      "🧤 Mănușă de cauciuc",
      1
     ],
     [
      "🥄 Lingură de oțel",
      0
     ],
     [
      "🥛 Pahar de sticlă",
      1
     ],
     [
      "✏️ Mină de creion (grafit)",
      0
     ],
     [
      "🪵 Riglă de lemn uscat",
      1
     ],
     [
      "💧 Apă sărată",
      0
     ],
     [
      "🧸 Plasticul unei jucării",
      1
     ],
     [
      "🪙 Monedă",
      0
     ]
    ]
   },
   "caption": "Atinge un obiect și apoi grupul potrivit. Le-ai putea verifica cu o baterie, un bec și două fire."
  },
  {
   "type": "text",
   "title": "3. Curent, tensiune și rezistență",
   "html": "<p>Când sarcinile se mișcă ordonat într-un conductor, avem un <b>curent electric</b>. Pentru a-l descrie sunt necesare trei mărimi:</p>\n<table>\n<tr><th>Mărimea</th><th>Ce este</th><th>Unitatea</th><th>Instrumentul</th></tr>\n<tr><td><b>Intensitatea curentului (I)</b></td><td>Câtă sarcină trece într-o secundă printr-o secțiune a firului: I = Q : t</td><td><b>amper (A)</b></td><td>ampermetru (în serie)</td></tr>\n<tr><td><b>Tensiunea sau diferența de potențial (V)</b></td><td>„Împingerea” care pune sarcinile în mișcare, dată de generator (baterie, priză)</td><td><b>volt (V)</b></td><td>voltmetru (în paralel)</td></tr>\n<tr><td><b>Rezistența (R)</b></td><td>Cât se opune un material trecerii curentului</td><td><b>ohm (Ω)</b></td><td>ohmmetru</td></tr>\n</table>\n<p>Rezistența unui fir este mai mare dacă firul este <b>mai lung</b>, <b>mai subțire</b> sau dintr-un material <b>mai puțin conductor</b>; de obicei crește și cu temperatura.</p>\n<p>Câteva valori: o baterie AA dă <b>1,5 V</b>, o baterie de mașină <b>12 V</b>, prizele din casă în Italia <b>230 V</b> (curent alternativ la 50 Hz). Un bec LED consumă aproximativ 0,04 A, un cuptor electric aproximativ 9 A.</p>"
  },
  {
   "type": "text",
   "title": "4. Legea lui Ohm",
   "html": "<p>În <b>1827</b> fizicianul german <b>Georg Simon Ohm</b> a descoperit că, pentru mulți conductori (la temperatură constantă), curentul este <b>direct proporțional</b> cu tensiunea:</p>\n<p style=\"text-align:center;font-size:1.3em\"><b>V = R × I</b></p>\n<p>de unde: <b>I = V : R</b> și <b>R = V : I</b>.</p>\n<p>Dacă dublezi tensiunea, se dublează curentul; dacă dublezi rezistența, curentul se înjumătățește. Graficul tensiune–curent al unui conductor „ohmic” este o <b>dreaptă care trece prin origine</b>: panta este rezistența.</p>\n<p><b>Putere și energie</b>: <b>puterea</b> electrică, adică câtă energie se folosește în fiecare secundă, este <b>P = V × I</b> și se măsoară în <b>wați (W)</b>. Energia consumată este <b>E = P × t</b>: pe factură se măsoară în <b>kilowatt-oră (kWh)</b>, energia folosită de un aparat de 1.000 W aprins timp de 1 oră.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: calcule cu legea lui Ohm",
   "html": "<ol>\n<li><b>Lanternă</b>: baterie de 4,5 V, bec de 9 Ω. I = V : R = 4,5 : 9 = <b>0,5 A</b>.</li>\n<li><b>Prăjitor de pâine</b>: la priza de 230 V consumă 4 A. R = V : I = 230 : 4 = <b>57,5 Ω</b>. Putere: P = 230 × 4 = <b>920 W</b>.</li>\n<li><b>Încărcătorul telefonului</b>: 5 V și 2 A → P = 5 × 2 = <b>10 W</b>. În 2 ore folosește 10 × 2 = 20 Wh = 0,02 kWh: foarte puțin!</li>\n<li><b>Uscător de păr</b> de 2.000 W folosit o jumătate de oră: E = 2 kW × 0,5 h = <b>1 kWh</b>. Dacă 1 kWh costă aproximativ 0,25 €, sunt 25 de cenți.</li>\n</ol>\n<p>Iată de ce un bec LED de 8 W, care dă aceeași lumină ca un vechi bec cu incandescență de 60 W, economisește peste 85% din energie.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: sarcini și legea lui Ohm",
   "questions": [
    {
     "type": "tf",
     "q": "Două corpuri cu sarcină negativă se atrag.",
     "answer": false,
     "explain": "Sarcinile de același semn se resping."
    },
    {
     "type": "num",
     "q": "O rezistență de 20 Ω este conectată la 10 V. Câți amperi trec?",
     "answer": 0.5,
     "tol": 0.001,
     "unit": "A",
     "explain": "I = V : R = 10 : 20 = 0,5 A."
    },
    {
     "type": "num",
     "q": "O sobă electrică consumă 8 A la 230 V. Care este puterea ei în wați?",
     "answer": 1840,
     "unit": "W",
     "explain": "P = V × I = 230 × 8 = 1840 W."
    },
    {
     "type": "mc",
     "q": "În ce unitate se măsoară rezistența?",
     "options": [
      "Volt",
      "Amper",
      "Ohm",
      "Watt"
     ],
     "answer": 2,
     "explain": "În ohmi (Ω)."
    }
   ]
  },
  {
   "type": "text",
   "title": "5. Circuitul electric: serie și paralel",
   "html": "<p>Un <b>circuit</b> este un drum <b>închis</b> în care circulă curentul. Cuprinde: un <b>generator</b> (baterie), <b>conductori</b> (fire), unul sau mai mulți <b>consumatori</b> (becuri, motoare) și un <b>întrerupător</b>. Dacă întrerupătorul este deschis, circuitul este întrerupt și curentul nu trece.</p>\n<p><b>Conectarea în serie</b> (unul după altul, un singur drum):</p>\n<ul>\n<li>curentul este <b>același</b> în toți consumatorii;</li>\n<li>rezistențele se <b>adună</b>: R = R₁ + R₂ + …;</li>\n<li>dacă un bec se arde, <b>se sting toate</b> (ca unele luminițe vechi de brad).</li>\n</ul>\n<p><b>Conectarea în paralel</b> (fiecare pe o ramură diferită):</p>\n<ul>\n<li>tensiunea este <b>aceeași</b> pentru toți;</li>\n<li>rezistența totală <b>scade</b>: 1/R = 1/R₁ + 1/R₂ + …;</li>\n<li>dacă un bec se arde, <b>celelalte rămân aprinse</b>. De aceea instalația din casă este în paralel: fiecare priză are 230 V și funcționează de sine stătătoare.</li>\n</ul>\n<p>Exemplu: R₁ = 6 Ω și R₂ = 3 Ω. În serie: 9 Ω. În paralel: 1/R = 1/6 + 1/3 = 3/6 → R = <b>2 Ω</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Circuit în serie și în paralel",
   "svg": "<svg viewBox=\"0 0 640 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"300\" fill=\"#f8fafc\"/>\n<text x=\"150\" y=\"28\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">ÎN SERIE</text>\n<rect x=\"40\" y=\"60\" width=\"220\" height=\"180\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\"/>\n<rect x=\"25\" y=\"125\" width=\"30\" height=\"50\" fill=\"#f8fafc\"/>\n<line x1=\"28\" y1=\"135\" x2=\"52\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<line x1=\"33\" y1=\"150\" x2=\"47\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n<line x1=\"28\" y1=\"160\" x2=\"52\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<text x=\"10\" y=\"200\" font-size=\"14\" fill=\"#334155\">baterie</text>\n<circle cx=\"110\" cy=\"60\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M98 48 L122 72 M122 48 L98 72\" stroke=\"#334155\" stroke-width=\"2\"/>\n<circle cx=\"190\" cy=\"60\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M178 48 L202 72 M202 48 L178 72\" stroke=\"#334155\" stroke-width=\"2\"/>\n<text x=\"150\" y=\"275\" font-size=\"14\" text-anchor=\"middle\" fill=\"#334155\">un singur drum: același curent</text>\n<path d=\"M120 240 L150 240\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<polygon points=\"150,234 162,240 150,246\" fill=\"#2563eb\"/>\n<text x=\"470\" y=\"28\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0f172a\">ÎN PARALEL</text>\n<rect x=\"360\" y=\"60\" width=\"240\" height=\"180\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\"/>\n<line x1=\"480\" y1=\"60\" x2=\"480\" y2=\"240\" stroke=\"#334155\" stroke-width=\"4\"/>\n<rect x=\"345\" y=\"125\" width=\"30\" height=\"50\" fill=\"#f8fafc\"/>\n<line x1=\"348\" y1=\"135\" x2=\"372\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<line x1=\"353\" y1=\"150\" x2=\"367\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"5\"/>\n<line x1=\"348\" y1=\"160\" x2=\"372\" y2=\"160\" stroke=\"#dc2626\" stroke-width=\"5\"/>\n<circle cx=\"480\" cy=\"150\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M468 138 L492 162 M492 138 L468 162\" stroke=\"#334155\" stroke-width=\"2\"/>\n<circle cx=\"600\" cy=\"150\" r=\"18\" fill=\"#fde047\" stroke=\"#334155\" stroke-width=\"3\"/>\n<path d=\"M588 138 L612 162 M612 138 L588 162\" stroke=\"#334155\" stroke-width=\"2\"/>\n<text x=\"480\" y=\"275\" font-size=\"14\" text-anchor=\"middle\" fill=\"#334155\">mai multe ramuri: aceeași tensiune</text>\n</svg>",
   "caption": "Simboluri: liniile roșii și negre sunt bateria, cercul cu X este becul. În stânga, deșurubând un bec se stinge și celălalt; în dreapta nu."
  },
  {
   "type": "widget",
   "title": "Recunoaște părțile circuitului",
   "widget": "labelDiagram",
   "options": {
    "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ecfeff\"/>\n<rect x=\"100\" y=\"60\" width=\"400\" height=\"180\" fill=\"none\" stroke=\"#475569\" stroke-width=\"5\"/>\n<rect x=\"70\" y=\"110\" width=\"60\" height=\"80\" rx=\"6\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"3\"/>\n<rect x=\"88\" y=\"98\" width=\"24\" height=\"12\" fill=\"#78350f\"/>\n<circle cx=\"300\" cy=\"60\" r=\"28\" fill=\"#fef08a\" stroke=\"#475569\" stroke-width=\"4\"/>\n<path d=\"M285 60 Q 300 40 315 60\" stroke=\"#b45309\" stroke-width=\"3\" fill=\"none\"/>\n<rect x=\"255\" y=\"230\" width=\"90\" height=\"20\" fill=\"#ecfeff\"/>\n<circle cx=\"260\" cy=\"240\" r=\"6\" fill=\"#475569\"/>\n<circle cx=\"340\" cy=\"240\" r=\"6\" fill=\"#475569\"/>\n<line x1=\"260\" y1=\"240\" x2=\"330\" y2=\"210\" stroke=\"#475569\" stroke-width=\"5\"/>\n<circle cx=\"500\" cy=\"150\" r=\"30\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"4\"/>\n<text x=\"500\" y=\"158\" font-size=\"22\" text-anchor=\"middle\" fill=\"#0f172a\">A</text>\n</svg>",
    "spots": [
     {
      "x": 100,
      "y": 150,
      "label": "Generator (baterie)"
     },
     {
      "x": 300,
      "y": 60,
      "label": "Consumator (bec)"
     },
     {
      "x": 295,
      "y": 225,
      "label": "Întrerupător deschis"
     },
     {
      "x": 500,
      "y": 150,
      "label": "Ampermetru"
     },
     {
      "x": 200,
      "y": 240,
      "label": "Fir conductor"
     }
    ]
   },
   "caption": "Atinge fiecare punct și alege numele. Cu întrerupătorul deschis becul este stins: circuitul nu este închis."
  },
  {
   "type": "text",
   "title": "6. Efectele curentului și siguranța",
   "html": "<ul>\n<li><b>Efectul termic</b> (efectul Joule): un conductor parcurs de curent se încălzește. Îl folosesc sobele, cuptoarele, fiarele de călcat, uscătoarele de păr, boilerele.</li>\n<li><b>Efectul luminos</b>: becurile și LED-urile.</li>\n<li><b>Efectul magnetic</b>: curentul creează un câmp magnetic (electromagneți, sonerii, motoare).</li>\n<li><b>Efectul chimic</b>: curentul poate separa substanțele (<b>electroliza</b>); invers, o reacție chimică poate produce curent (baterii și acumulatori).</li>\n</ul>\n<p>⚠️ <b>Curentul este periculos</b> pentru corpul uman, care este un conductor: deja curenți de aproximativ <b>30 de miliamperi</b> prin corp pot fi foarte periculoși pentru inimă. Reguli de aur:</p>\n<ul>\n<li>nu atinge niciodată aparate electrice cu mâinile ude sau în baie lângă apă;</li>\n<li>nu băga obiecte în prize și nu trage de cabluri;</li>\n<li>nu supraîncărca prelungitoarele cu mai multe prize;</li>\n<li>în casă, <b>întrerupătorul diferențial</b> („salvavita”) taie curentul într-o fracțiune de secundă dacă detectează o scurgere spre pământ (de obicei deja la 30 mA); <b>firul de împământare</b> (galben-verde) duce la pământ curenții de defect. Instalațiile trebuie realizate și certificate de tehnicieni autorizați.</li>\n<li>în timpul unei furtuni nu te adăposti sub un copac izolat.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "7. Magnetismul",
   "html": "<p>Un <b>magnet</b> atrage obiecte din <b>fier</b>, <b>nichel</b> și <b>cobalt</b>. Fiecare magnet are doi <b>poli</b>, Nord și Sud: polii <b>identici se resping</b>, polii <b>opuși se atrag</b>. Dacă rupi un magnet obții doi magneți mai mici, fiecare cu Nordul și Sudul lui: nu se poate izola un singur pol.</p>\n<p>În jurul unui magnet există un <b>câmp magnetic</b>, care se „vede” presărând pilitură de fier pe o foaie: aceasta se așază de-a lungul <b>liniilor de câmp</b>, care ies din polul Nord și intră în polul Sud.</p>\n<p>Și <b>Pământul</b> este un magnet uriaș, datorită fierului topit care se mișcă în nucleul exterior. Acul <b>busolei</b> (inventată în China, folosită de navigatorii europeni din secolele XII–XIII) se orientează după câmpul terestru și arată Nordul. Câmpul magnetic ne protejează și de vântul solar: când particulele Soarelui ajung lângă poli, se văd <b>aurorele polare</b>.</p>"
  },
  {
   "type": "text",
   "title": "8. Electricitatea și magnetismul sunt rude",
   "html": "<p>În <b>1820</b> danezul <b>Hans Christian Ørsted</b> a observat, în timpul unei lecții, că acul unei busole se mișca atunci când pe aproape trecea curent printr-un fir: <b>curentul electric creează un câmp magnetic</b>. Înfășurând un fir în jurul unui cui de fier se obține un <b>electromagnet</b>, care se „stinge” dacă scoți curentul (folosit în macaralele pentru fier vechi, în sonerii, în relee).</p>\n<p>În <b>1831</b> englezul <b>Michael Faraday</b> a descoperit contrariul: <b>mișcând un magnet în interiorul unei bobine de fir se produce curent</b> (inducție electromagnetică). De aici se nasc:</p>\n<ul>\n<li><b>generatorul</b> (alternatorul): în centralele hidroelectrice, eoliene, termoelectrice o turbină rotește magneți și bobine și produce curent. Dinamul bicicletei funcționează la fel;</li>\n<li><b>motorul electric</b>: face drumul invers, transformă energia electrică în mișcare (blendere, mașini electrice, ventilatoare). Italianul <b>Galileo Ferraris</b> a descoperit în 1885 câmpul magnetic rotitor, baza motoarelor de curent alternativ;</li>\n<li><b>transformatorul</b>, care ridică sau coboară tensiunea: curentul călătorește pe liniile de înaltă tensiune (până la 380.000 V în Italia) și ajunge în casă la 230 V.</li>\n</ul>\n<p>În 1865 scoțianul <b>James Clerk Maxwell</b> a unit totul în patru ecuații și a înțeles că <b>lumina</b> însăși este o undă electromagnetică.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: construiește un electromagnet",
   "html": "<p>Ai nevoie de: un cui de fier de aproximativ 8 cm, 1 metru de fir de cupru izolat subțire, o baterie de 1,5 V, câteva agrafe de birou. Fă-l împreună cu un adult.</p>\n<ol>\n<li>Înfășoară firul în jurul cuiului făcând 30–40 de spire strânse, lăsând libere cele două capete.</li>\n<li>Îndepărtează plasticul de la capetele firului pe aproximativ 1 cm.</li>\n<li>Ține capetele pe polii bateriei câteva secunde: cuiul <b>atrage agrafele</b>!</li>\n<li>Desprinde un capăt: agrafele cad.</li>\n</ol>\n<p>Încearcă să dublezi spirele: câte agrafe ridică acum? Mai multe spire și mai mult curent = câmp magnetic mai puternic. ⚠️ Nu-l ține conectat mult timp: firul se încălzește (efectul Joule) și bateria se descarcă.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? Bateria este italiană",
   "html": "<p>În <b>1799</b>, <b>Alessandro Volta</b>, din Como, a suprapus discuri de zinc și cupru separate de pânze îmbibate în apă sărată și a obținut prima <b>pilă electrică</b>, primul generator de curent continuu (a anunțat-o în 1800). A făcut-o ca să demonstreze că Luigi Galvani greșea în privința „electricității animale” a broaștelor. În cinstea lui, unitatea tensiunii se numește <b>volt</b>. Iar cuvântul „electricitate” vine din greaca <i>élektron</i>, care înseamnă <b>chihlimbar</b>: încă filosoful Thales, în secolul al VI-lea î.Hr., observase că un chihlimbar frecat atrăgea firicele de paie.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? Fulgerul și paratrăsnetul",
   "html": "<p>Un <b>fulger</b> este o descărcare gigantică între nor și pământ: tensiunea poate ajunge la sute de milioane de volți, iar curentul la zeci de mii de amperi, dar durează mai puțin de o miime de secundă. Aerul din jur se încălzește la aproximativ 30.000 °C (mai mult decât suprafața Soarelui) și se dilată brusc: este <b>tunetul</b>. În 1752 Benjamin Franklin a demonstrat cu un zmeu că fulgerele sunt electricitate și a inventat <b>paratrăsnetul</b>. Ca să afli cât de departe este o furtună: numără secundele dintre fulger și tunet și împarte la 3: obții kilometrii.</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege curentul",
   "intro": "Curentul nu se vede: iată câteva imagini care ajută să-l „vezi”.",
   "tabs": [
    {
     "label": "💧 Analogia cu apa",
     "html": "<p>Gândește-te la un circuit ca la o instalație hidraulică:</p>\n<ul>\n<li><b>bateria</b> este o <b>pompă</b> care ridică apa: <b>tensiunea</b> este diferența de nivel (presiunea);</li>\n<li><b>curentul</b> este cantitatea de apă care trece în fiecare secundă prin conductă;</li>\n<li><b>rezistența</b> este o conductă îngustă sau un robinet aproape închis;</li>\n<li><b>întrerupătorul</b> este o vană.</li>\n</ul>\n<p>Cu mai multă presiune trece mai multă apă (V mai mare → I mai mare); cu o conductă mai îngustă trece mai puțină (R mai mare → I mai mic). Este legea lui Ohm!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<rect x=\"40\" y=\"40\" width=\"80\" height=\"60\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"76\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0c4a6e\">rezervor sus</text>\n<rect x=\"40\" y=\"190\" width=\"80\" height=\"40\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"215\" font-size=\"14\" text-anchor=\"middle\" fill=\"#0c4a6e\">jos</text>\n<path d=\"M120 70 L360 70 L360 210 L120 210\" fill=\"none\" stroke=\"#0369a1\" stroke-width=\"16\"/>\n<rect x=\"340\" y=\"110\" width=\"40\" height=\"60\" fill=\"#f59e0b\" stroke=\"#78350f\" stroke-width=\"3\"/>\n<text x=\"400\" y=\"145\" font-size=\"15\" fill=\"#78350f\">îngustare = rezistență</text>\n<circle cx=\"80\" cy=\"150\" r=\"22\" fill=\"#a78bfa\" stroke=\"#5b21b6\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"156\" font-size=\"14\" text-anchor=\"middle\" fill=\"#fff\">pompă</text>\n<line x1=\"80\" y1=\"128\" x2=\"80\" y2=\"100\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<line x1=\"80\" y1=\"172\" x2=\"80\" y2=\"190\" stroke=\"#5b21b6\" stroke-width=\"4\"/>\n<text x=\"240\" y=\"60\" font-size=\"15\" text-anchor=\"middle\" fill=\"#0c4a6e\">curgerea apei = curent →</text>\n<text x=\"180\" y=\"130\" font-size=\"15\" fill=\"#5b21b6\">pompă = baterie</text>\n<text x=\"180\" y=\"150\" font-size=\"15\" fill=\"#5b21b6\">diferență de nivel = tensiune</text>\n</svg>"
    },
    {
     "label": "🔺 Triunghiul magic",
     "html": "<p>În școlile englezești se folosește <b>triunghiul VRI</b>. Acoperă cu degetul mărimea pe care o cauți și citește ce rămâne:</p>\n<ul><li>acoperi <b>V</b> → rămâne R lângă I → <b>V = R × I</b>;</li>\n<li>acoperi <b>I</b> → rămâne V deasupra lui R → <b>I = V : R</b>;</li>\n<li>acoperi <b>R</b> → rămâne V deasupra lui I → <b>R = V : I</b>.</li></ul>\n<p>Același truc funcționează pentru putere, cu P sus și V, I jos.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fdf4ff\"/>\n<polygon points=\"300,20 470,230 130,230\" fill=\"#f0abfc\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<line x1=\"210\" y1=\"130\" x2=\"390\" y2=\"130\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<line x1=\"300\" y1=\"130\" x2=\"300\" y2=\"230\" stroke=\"#86198f\" stroke-width=\"4\"/>\n<text x=\"300\" y=\"110\" font-size=\"44\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4a044e\">V</text>\n<text x=\"240\" y=\"200\" font-size=\"40\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4a044e\">R</text>\n<text x=\"360\" y=\"200\" font-size=\"40\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4a044e\">I</text>\n<text x=\"300\" y=\"255\" font-size=\"15\" text-anchor=\"middle\" fill=\"#4a044e\">linia orizontală = împărțit · linia verticală = ori</text>\n</svg>"
    },
    {
     "label": "⚛️ Electronii în 3D",
     "html": "<p>Privește atomii de aproape: în metale precum <b>cuprul</b>, electronul cel mai exterior este departe de nucleu și slab reținut. Când conectezi o baterie, toți acești electroni liberi „alunecă” în aceeași direcție, de la polul negativ spre cel pozitiv. Curios: se deplasează foarte încet (câțiva milimetri pe minut!), dar „împingerea” se propagă aproape cu viteza luminii, ca atunci când împingi un șir de bile într-un tub plin.</p>",
     "scene": "atom",
     "options": {
      "elements": [
       "Cu",
       "Ag",
       "Au",
       "Al"
      ]
     }
    },
    {
     "label": "🧲 Asociază savantul cu descoperirea",
     "html": "<p>Istoria electricității este o ștafetă între savanți din multe țări. Asociază fiecare nume cu descoperirea lui.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "Alessandro Volta",
        "Bateria (1799)"
       ],
       [
        "Hans Christian Ørsted",
        "Curentul mișcă acul busolei (1820)"
       ],
       [
        "Georg Simon Ohm",
        "V = R × I (1827)"
       ],
       [
        "Michael Faraday",
        "Inducția electromagnetică (1831)"
       ],
       [
        "Galileo Ferraris",
        "Câmpul magnetic rotitor (1885)"
       ],
       [
        "Benjamin Franklin",
        "Paratrăsnetul (1752)"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta electricității și magnetismului: atinge nodurile și descoperă de ce",
   "nodes": [
    {
     "id": "carica",
     "label": "Sarcină electrică",
     "x": 50,
     "y": 6,
     "color": "#ef4444",
     "html": "Proprietate a protonilor (+) și a electronilor (−).",
     "why": "Electronul a fost descoperit de J. J. Thomson în 1897; cea mai mică sarcină (cea a electronului, 1,6 × 10⁻¹⁹ C) a fost măsurată de Robert Millikan în 1909 cu picături de ulei."
    },
    {
     "id": "coulomb",
     "label": "Atracție și respingere",
     "x": 15,
     "y": 22,
     "color": "#f97316",
     "html": "Sarcinile identice se resping, cele opuse se atrag.",
     "why": "<b>Coulomb</b> a măsurat în 1785, cu o balanță de torsiune, că forța scade cu pătratul distanței, exact ca gravitația lui Newton."
    },
    {
     "id": "conduttori",
     "label": "Conductori și izolatori",
     "x": 85,
     "y": 22,
     "color": "#f59e0b",
     "html": "Materiale care lasă sau nu lasă sarcinile să se miște.",
     "why": "Depinde de electronii exteriori: în metale sunt liberi să se miște între atomi, în izolatori rămân legați de atomii lor."
    },
    {
     "id": "corrente",
     "label": "Curent, tensiune, rezistență",
     "x": 50,
     "y": 38,
     "color": "#2563eb",
     "html": "I (amper), V (volt), R (ohm).",
     "why": "Curentul continuu a devenit studiabil abia după <b>pila lui Volta</b> (1799): înainte se cunoșteau doar descărcări instantanee."
    },
    {
     "id": "ohm",
     "label": "Legea lui Ohm",
     "x": 20,
     "y": 60,
     "color": "#0ea5e9",
     "html": "V = R × I.",
     "why": "<b>Ohm</b> a dedus-o în 1827 măsurând cu grijă curentul în fire de lungimi diferite. La început a fost criticat; apoi Royal Society l-a premiat în 1841."
    },
    {
     "id": "circuiti",
     "label": "Circuite serie și paralel",
     "x": 20,
     "y": 85,
     "color": "#14b8a6",
     "html": "Conectări diferite ale consumatorilor.",
     "why": "Din legea lui Ohm și din conservarea sarcinii (legile lui Kirchhoff, 1845) rezultă cum se adună rezistențele în serie și în paralel."
    },
    {
     "id": "potenza",
     "label": "Putere și energie",
     "x": 50,
     "y": 85,
     "color": "#22c55e",
     "html": "P = V × I (wați); E = P × t (kWh).",
     "why": "James Prescott Joule (1840) a măsurat căldura produsă de curent și a demonstrat că energia se transformă, dar se conservă."
    },
    {
     "id": "magnetismo",
     "label": "Magneți și câmp magnetic",
     "x": 82,
     "y": 55,
     "color": "#a855f7",
     "html": "Poli Nord și Sud, linii de câmp, magnetismul terestru.",
     "why": "William Gilbert în 1600 (<i>De Magnete</i>) a înțeles că Pământul este un mare magnet. Câmpul terestru provine din fierul lichid în mișcare din nucleul exterior."
    },
    {
     "id": "elettromagnetismo",
     "label": "Electromagnetism",
     "x": 82,
     "y": 85,
     "color": "#7c3aed",
     "html": "Curentul creează magnetism; magnetismul în mișcare creează curent.",
     "why": "<b>Ørsted</b> (1820) și <b>Faraday</b> (1831) l-au descoperit; <b>Maxwell</b> (1865) l-a descris cu 4 ecuații, prevăzând undele electromagnetice (radio, lumină) găsite apoi de Hertz în 1887."
    }
   ],
   "edges": [
    [
     "carica",
     "coulomb",
     "exercită forțe"
    ],
    [
     "carica",
     "conduttori",
     "se mișcă în"
    ],
    [
     "conduttori",
     "corrente",
     "permit"
    ],
    [
     "corrente",
     "ohm",
     "este legat prin"
    ],
    [
     "ohm",
     "circuiti",
     "explică"
    ],
    [
     "corrente",
     "potenza",
     "transportă"
    ],
    [
     "corrente",
     "elettromagnetismo",
     "generează magnetism"
    ],
    [
     "magnetismo",
     "elettromagnetismo",
     "în mișcare generează curent"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: circuite și magneți",
   "questions": [
    {
     "type": "mc",
     "q": "De ce este instalația din casă conectată în paralel?",
     "options": [
      "Ca să economisească fir",
      "Pentru că fiecare aparat primește 230 V și funcționează de sine stătător",
      "Pentru că curentul este mai slab"
     ],
     "answer": 1,
     "explain": "În paralel fiecare ramură are aceeași tensiune și este independentă."
    },
    {
     "type": "num",
     "q": "Două rezistențe de 4 Ω și 6 Ω sunt în serie. Care este rezistența totală?",
     "answer": 10,
     "unit": "Ω",
     "explain": "În serie se adună: 4 + 6 = 10 Ω."
    },
    {
     "type": "tf",
     "q": "Mișcând un magnet în interiorul unei bobine se produce curent.",
     "answer": true,
     "explain": "Este inducția electromagnetică descoperită de Faraday."
    }
   ]
  },
  {
   "type": "remember",
   "title": "De reținut",
   "html": "<ul>\n<li>Sarcinile identice se resping, cele opuse se atrag. Electrizare: frecare, contact, influență.</li>\n<li><b>I</b> în amperi, <b>V</b> în volți, <b>R</b> în ohmi. Legea lui Ohm: <b>V = R × I</b>.</li>\n<li><b>P = V × I</b> (wați); energia <b>E = P × t</b> (kWh).</li>\n<li>Serie: același curent, R se adună. Paralel: aceeași tensiune, ramuri independente.</li>\n<li>Polii magnetici identici se resping; Pământul este un magnet.</li>\n<li>Curent → magnetism (Ørsted); magnet în mișcare → curent (Faraday).</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Sarcină electrică",
   "d": "Proprietate a materiei: pozitivă (protoni) sau negativă (electroni)."
  },
  {
   "t": "Conductor",
   "d": "Material în care sarcinile se mișcă ușor."
  },
  {
   "t": "Izolator",
   "d": "Material care nu lasă curentul să treacă."
  },
  {
   "t": "Curent electric",
   "d": "Flux ordonat de sarcini; se măsoară în amperi (A)."
  },
  {
   "t": "Tensiune",
   "d": "Diferența de potențial care împinge sarcinile; se măsoară în volți (V)."
  },
  {
   "t": "Rezistență",
   "d": "Opoziția la trecerea curentului; se măsoară în ohmi (Ω)."
  },
  {
   "t": "Putere electrică",
   "d": "Energia folosită în fiecare secundă: P = V × I, în wați."
  },
  {
   "t": "Kilowatt-oră",
   "d": "Energia folosită de un aparat de 1.000 W într-o oră."
  },
  {
   "t": "Circuit",
   "d": "Drum închis în care circulă curentul."
  },
  {
   "t": "Câmp magnetic",
   "d": "Zona din jurul unui magnet sau al unui curent în care acționează forțe magnetice."
  },
  {
   "t": "Inducție electromagnetică",
   "d": "Producerea de curent cu un câmp magnetic variabil."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Un balon frecat de păr se încarcă…",
    "options": [
     "prin contact",
     "prin frecare",
     "prin influență"
    ],
    "answer": 1,
    "explain": "Frecarea transferă electroni de pe păr pe balon."
   },
   {
    "type": "mc",
    "q": "Care dintre aceste materiale este un izolator?",
    "options": [
     "Cupru",
     "Cauciuc",
     "Apă sărată",
     "Grafit"
    ],
    "answer": 1,
    "explain": "Cauciucul nu lasă curentul să treacă."
   },
   {
    "type": "num",
    "q": "Un bec are rezistența de 6 Ω, iar bateria dă 12 V. Câți amperi trec?",
    "answer": 2,
    "unit": "A",
    "explain": "I = 12 : 6 = 2 A."
   },
   {
    "type": "num",
    "q": "Într-un circuit trec 0,5 A printr-o rezistență de 18 Ω. Care este tensiunea?",
    "answer": 9,
    "unit": "V",
    "explain": "V = R × I = 18 × 0,5 = 9 V."
   },
   {
    "type": "num",
    "q": "Un cuptor de 2 kW rămâne aprins 3 ore. Câți kWh consumă?",
    "answer": 6,
    "unit": "kWh",
    "explain": "E = 2 kW × 3 h = 6 kWh."
   },
   {
    "type": "num",
    "q": "Două rezistențe de 10 Ω sunt în paralel. Care este rezistența totală?",
    "answer": 5,
    "unit": "Ω",
    "explain": "1/R = 1/10 + 1/10 = 2/10 → R = 5 Ω."
   },
   {
    "type": "tf",
    "q": "Într-un circuit în serie, dacă un bec se arde, celelalte rămân aprinse.",
    "answer": false,
    "explain": "În serie există un singur drum: se sting toate."
   },
   {
    "type": "text",
    "q": "Cum se numește savantul italian care a inventat pila electrică?",
    "answer": [
     "volta",
     "alessandro volta"
    ],
    "explain": "Alessandro Volta, în 1799."
   },
   {
    "type": "mc",
    "q": "Ce a descoperit Ørsted în 1820?",
    "options": [
     "Că  curentul creează un câmp magnetic",
     "Legea V = R × I",
     "Electronul"
    ],
    "answer": 0,
    "explain": "Un fir parcurs de curent rotește acul busolei."
   },
   {
    "type": "mc",
    "q": "Pe ce principiu se bazează generatoarele centralelor electrice?",
    "options": [
     "Efectul Joule",
     "Inducția electromagnetică",
     "Electrizarea prin frecare"
    ],
    "answer": 1,
    "explain": "Magneții și bobinele în rotație produc curent."
   },
   {
    "type": "tf",
    "q": "Doi poli Nord a doi magneți se atrag.",
    "answer": false,
    "explain": "Polii identici se resping."
   },
   {
    "type": "order",
    "q": "Pune în ordine cronologică descoperirile.",
    "items": [
     "Paratrăsnetul lui Franklin",
     "Pila lui Volta",
     "Experimentul lui Ørsted",
     "Legea lui Ohm",
     "Inducția lui Faraday"
    ],
    "explain": "1752, 1799, 1820, 1827, 1831."
   }
  ],
  "gen": [
   [
    "proportion",
    2
   ]
  ]
 }
});
