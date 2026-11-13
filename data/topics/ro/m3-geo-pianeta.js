TOPIC('ro', {
  id: "m3-geo-pianeta",
  title: "Planeta Pământ",
  intro: "Înainte de a călători printre continente, să privim Pământul de sus: cum este alcătuit, cum ne orientăm pe el, cum se împarte în <b>continente</b> și <b>oceane</b> și de ce are <b>climate</b> atât de diferite, de la ghețurile polare la pădurile ecuatoriale. Este trusa de unelte a geografului pentru tot anul al treilea.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. O sferă (aproape) perfectă",
      html: `<p>Pământul este a treia planetă din Sistemul Solar. Are forma unei sfere ușor <b>turtite la poli</b> (oamenii de știință o numesc <i>geoid</i>):</p>
<ul>
<li>circumferința la ecuator: aproximativ <b>40.075 km</b>;</li>
<li>raza medie: aproximativ <b>6371 km</b>;</li>
<li>suprafața totală: aproximativ <b>510 milioane de km²</b>, din care aproximativ <b>71% acoperită de ape</b> și <b>29% uscat</b>.</li>
</ul>
<p>Pământul face două mișcări:</p>
<ul>
<li><b>rotația</b> în jurul propriei axe, de la vest spre est, în aproximativ <b>24 de ore</b> → ziua și noaptea;</li>
<li><b>revoluția</b> în jurul Soarelui în aproximativ <b>365 de zile și 6 ore</b> → anul. Deoarece axa Pământului este <b>înclinată cu aproximativ 23,5°</b>, în timpul anului razele Soarelui ajung mai mult sau mai puțin înclinate: așa apar <b>anotimpurile</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "2. Orientarea: paralele, meridiane și coordonate",
      html: `<p>Pentru a indica precis un punct de pe Pământ se folosește o rețea de linii imaginare:</p>
<ul>
<li><b>Paralele</b>: cercuri paralele cu <b>ecuatorul</b> (0°). Cel mai lung este ecuatorul; spre poli devin tot mai mici. <b>Latitudinea</b> merge de la 0° la 90° Nord sau Sud.</li>
<li><b>Meridiane</b>: semicercuri care merg de la un pol la altul, toate de aceeași lungime. Meridianul de bază (0°) trece prin observatorul de la <b>Greenwich</b>, lângă Londra. <b>Longitudinea</b> merge de la 0° la 180° Est sau Vest.</li>
</ul>
<p>Paralele importante: <b>Tropicul Racului</b> (aproximativ 23,5° N), <b>Tropicul Capricornului</b> (aproximativ 23,5° S), <b>Cercul polar de nord</b> și <b>de sud</b> (aproximativ 66,5°). Roma se află la aproximativ <b>41,9° N, 12,5° E</b>.</p>
<p>Deoarece Pământul se rotește cu 360° în 24 de ore, la fiecare 15° de longitudine ora se schimbă cu 1: de aceea există <b>fusurile orare</b>.</p>`
    },
    {
      type: "3d",
      title: "Globul: găsește liniile și punctele",
      scene: "globe",
      options: {
        points: [
          { lat: 0, lon: 0, label: "Ecuator × Greenwich (0°, 0°)", color: "#ef4444" },
          { lat: 51.48, lon: 0, label: "Greenwich", color: "#2563eb" },
          { lat: 41.9, lon: 12.5, label: "Roma", color: "#16a34a" },
          { lat: 23.44, lon: -82.4, label: "Tropicul Racului (Cuba)", color: "#f59e0b" },
          { lat: -23.44, lon: -46.6, label: "Tropicul Capricornului (São Paulo)", color: "#f59e0b" },
          { lat: 66.56, lon: 25.7, label: "Cercul polar de nord (Finlanda)", color: "#0ea5e9" },
          { lat: -90, lon: 0, label: "Polul Sud", color: "#a855f7" },
          { lat: 90, lon: 0, label: "Polul Nord", color: "#a855f7" }
        ]
      },
      caption: "Rotește globul: urmărește meridianul Greenwich de la un pol la altul și găsește Italia în emisfera nordică, la est de Greenwich."
    },
    {
      type: "text",
      title: "3. Continente și oceane",
      html: `<p>Uscatul formează <b>6 continente</b> (dacă socotim America ca un singur continent și Oceania drept continent; alte școli, de exemplu în SUA, numără 7):</p>
<table>
<tr><th>Continent</th><th>Suprafață (aprox.)</th><th>Locuitori (aprox., 2024)</th></tr>
<tr><td>Asia</td><td>44,6 milioane km²</td><td>4,8 miliarde</td></tr>
<tr><td>America (Nord + Sud)</td><td>42,5 milioane km²</td><td>1,05 miliarde</td></tr>
<tr><td>Africa</td><td>30,4 milioane km²</td><td>1,5 miliarde</td></tr>
<tr><td>Antarctica</td><td>14 milioane km²</td><td>niciun locuitor permanent</td></tr>
<tr><td>Europa</td><td>10,2 milioane km²</td><td>745 milioane</td></tr>
<tr><td>Oceania</td><td>8,5 milioane km²</td><td>46 milioane</td></tr>
</table>
<p><b>Oceanele</b> sunt cinci: <b>Pacific</b> (cel mai mare: singur este mai întins decât tot uscatul la un loc!), <b>Atlantic</b>, <b>Indian</b>, <b>Antarctic</b> (sau Austral) și <b>Arctic</b> (cel mai mic, în mare parte înghețat).</p>`
    },
    {
      type: "svg",
      title: "Planiglob schematic: continente și oceane",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#7dd3fc"/>
<line x1="0" y1="160" x2="600" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="8 5"/>
<text x="560" y="154" font-size="13" fill="#b91c1c" text-anchor="end">Ecuator</text>
<line x1="0" y1="118" x2="600" y2="118" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="0" y1="202" x2="600" y2="202" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4"/>
<path d="M40 50 L170 40 L190 90 L150 120 L130 140 L100 120 L60 90 Z" fill="#86efac" stroke="#166534" stroke-width="2"/>
<text x="115" y="85" font-size="14" text-anchor="middle" font-weight="bold" fill="#14532d">America de N.</text>
<path d="M140 150 L190 160 L200 200 L170 270 L150 270 L145 210 Z" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<text x="170" y="210" font-size="13" text-anchor="middle" font-weight="bold" fill="#14532d">America de S.</text>
<path d="M270 50 L330 45 L330 95 L280 100 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="300" y="78" font-size="13" text-anchor="middle" font-weight="bold" fill="#78350f">Europa</text>
<path d="M270 110 L340 105 L360 150 L340 230 L310 240 L290 180 L265 150 Z" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
<text x="310" y="170" font-size="14" text-anchor="middle" font-weight="bold" fill="#7c2d12">Africa</text>
<path d="M335 40 L520 35 L540 90 L500 130 L430 140 L380 120 L340 100 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
<text x="440" y="85" font-size="16" text-anchor="middle" font-weight="bold" fill="#7f1d1d">Asia</text>
<path d="M470 200 L540 195 L550 240 L490 250 Z" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/>
<text x="510" y="228" font-size="13" text-anchor="middle" font-weight="bold" fill="#4c1d95">Oceania</text>
<rect x="0" y="292" width="600" height="28" fill="#f1f5f9"/>
<text x="300" y="312" font-size="14" text-anchor="middle" font-weight="bold" fill="#334155">Antarctica</text>
<text x="40" y="200" font-size="15" fill="#0c4a6e" font-weight="bold">Pacific</text>
<text x="225" y="140" font-size="14" fill="#0c4a6e" font-weight="bold">Atlantic</text>
<text x="410" y="200" font-size="15" fill="#0c4a6e" font-weight="bold">Indian</text>
<text x="300" y="22" font-size="14" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Arctic</text>
<text x="300" y="285" font-size="13" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Antarctic</text>
</svg>`,
      caption: "Schemă care nu respectă scara. Liniile portocalii punctate sunt Tropicul Racului (sus) și Tropicul Capricornului (jos)."
    },
    {
      type: "quiz",
      title: "Mini-test: formă și coordonate",
      questions: [
        { type: "mc", q: "Ce procent din suprafața Pământului este acoperit de ape?", options: ["Aproximativ 29%", "Aproximativ 50%", "Aproximativ 71%"], answer: 2, explain: "Aproximativ 71% este apă, 29% uscat." },
        { type: "mc", q: "Cum se numește distanța unui punct față de ecuator, în grade?", options: ["Longitudine", "Latitudine", "Altitudine"], answer: 1, explain: "Latitudinea merge de la 0° (ecuator) la 90° (poli)." },
        { type: "num", q: "Câte grade de longitudine cuprinde un fus orar?", answer: 15, tol: 0, unit: "°", explain: "360° : 24 de ore = 15° pentru fiecare oră." }
      ]
    },
    {
      type: "text",
      title: "4. Pământul în mișcare: plăci și relief",
      html: `<p>Scoarța terestră este împărțită în <b>plăci</b> mari care se mișcă cu câțiva centimetri pe an (cam cât cresc unghiile). Acolo unde se ciocnesc apar <b>lanțuri muntoase</b> (Alpii, Himalaya, Anzii), <b>vulcani</b> și <b>cutremure</b>; acolo unde se depărtează se deschid oceane.</p>
<p>Acum aproximativ 300 de milioane de ani, tot uscatul era unit într-un singur supercontinent, <b>Pangeea</b>. Această idee a fost propusă în <b>1912</b> de germanul <b>Alfred Wegener</b> (deriva continentelor) și demonstrată în anii '60 prin <b>tectonica plăcilor</b>.</p>
<p>Cel mai înalt vârf: <b>Everest</b> (8849 m, în Asia, între Nepal și China). Cel mai adânc punct al oceanelor: <b>Groapa Marianelor</b> (aproape 11.000 m, în Pacific).</p>`
    },
    {
      type: "3d",
      title: "Peisajul Pământului în 3D",
      scene: "terrain",
      options: {
        features: {
          mountain: { label: "Lanț muntos", html: "Se formează din ciocnirea plăcilor. Exemple: <b>Himalaya</b> (Asia), <b>Anzii</b> (America de Sud, cel mai lung lanț, aproximativ 7000 km), <b>Alpii</b>." },
          peak: { label: "Vârf", html: "Cel mai înalt punct al unui munte. Cel mai înalt vârf din lume este <b>Everest</b>, 8849 m." },
          glacier: { label: "Ghețar", html: "Masă de gheață care se formează acolo unde ninge mai mult decât se topește. Aproximativ 70% din apa dulce a Pământului este înghețată, mai ales în Antarctica și Groenlanda." },
          plain: { label: "Câmpie", html: "Câmpii mari: <b>Câmpia Sarmatică</b> (Europa de Est), <b>Marile Câmpii</b> din SUA, <b>Pampa</b> argentiniană. Sunt zonele cele mai cultivate și mai populate." },
          river: { label: "Râu", html: "Cele mai lungi fluvii: <b>Nilul</b> (aproximativ 6650 km) și <b>Amazonul</b> (cel mai bogat în apă din lume)." },
          volcano: { label: "Vulcan", html: "Aproximativ 75% din vulcanii activi se află în jurul Pacificului, în <b>Centura de foc</b>." },
          sea: { label: "Ocean", html: "Pacificul acoperă aproximativ o treime din suprafața Pământului." },
          island: { label: "Insulă", html: "Cea mai mare insulă din lume este <b>Groenlanda</b> (aproximativ 2,2 milioane de km²). Australia este considerată continent." },
          lake: { label: "Lac", html: "<b>Marea Caspică</b> este cel mai mare lac; <b>Baikal</b> (Rusia) este cel mai adânc, peste 1600 m." },
          delta: { label: "Deltă", html: "Vărsare în formă de evantai. Cele mai mari delte: Gange-Brahmaputra (Bangladesh), Nil, Mississippi." }
        }
      },
      caption: "Rotește peisajul și atinge părțile lui: pentru fiecare descoperi recordul mondial."
    },
    {
      type: "text",
      title: "5. Climatele: de ce e cald sau frig",
      html: `<p><b>Vremea</b> este cea de azi (plouă, e soare). <b>Clima</b> este ansamblul condițiilor medii dintr-un loc, calculate pe cel puțin <b>30 de ani</b>.</p>
<p><b>Factorii climei</b>:</p>
<ul>
<li><b>Latitudinea</b>: la ecuator razele Soarelui ajung aproape perpendicular și încălzesc mult; la poli ajung foarte înclinate și încălzesc puțin.</li>
<li><b>Altitudinea</b>: urcând, temperatura scade cu aproximativ <b>0,6 °C la fiecare 100 m</b>.</li>
<li><b>Apropierea de mare</b>: marea se încălzește și se răcește încet și face clima mai blândă.</li>
<li><b>Curenții marini</b>: <b>Curentul Golfului</b> aduce apă caldă spre nordul Europei.</li>
<li><b>Vânturile și relieful</b>: munții pot opri ploile (ca Himalaya în cazul musonilor).</li>
</ul>
<p>Omul de știință ruso-german <b>Wladimir Köppen</b> a clasificat climatele (1900–1936) în mari grupe:</p>
<table>
<tr><th>Climă</th><th>Unde</th><th>Mediu</th></tr>
<tr><td>🌴 Ecuatorială / tropicală</td><td>între Tropice</td><td>pădure tropicală umedă, savană</td></tr>
<tr><td>🏜️ Aridă</td><td>lângă Tropice, în interiorul continentelor</td><td>deșert, stepă</td></tr>
<tr><td>🌳 Temperată</td><td>latitudini medii (Italia!)</td><td>vegetație mediteraneeană, pădure de foioase</td></tr>
<tr><td>🌲 Rece (continentală)</td><td>nordul Europei, Asiei și Americii</td><td>taiga (pădure de conifere)</td></tr>
<tr><td>🧊 Polară</td><td>dincolo de cercurile polare</td><td>tundră, ghețuri</td></tr>
</table>`
    },
    {
      type: "3d",
      title: "Zonele climatice ca niște straturi",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#e0f2fe", label: "Polară (peste 66,5°)" },
          { r: 0.85, color: "#166534", label: "Rece continentală (taiga)" },
          { r: 0.7, color: "#84cc16", label: "Temperată (latitudini medii)" },
          { r: 0.52, color: "#facc15", label: "Aridă (deșerturile Tropicelor)" },
          { r: 0.35, color: "#15803d", label: "Ecuatorială (pădure tropicală umedă)" }
        ]
      },
      caption: "Model simplificat: imaginează-ți că pleci de la un pol (stratul exterior) și cobori spre ecuator (centru). În realitate, zonele sunt întrerupte de mări, munți și curenți."
    },
    {
      type: "example",
      title: "Exemplu practic: de ce la Londra e mai puțin frig decât la Montréal?",
      html: `<p><b>Londra</b> (51,5° N) este mai la nord decât <b>Montréal</b> (45,5° N), și totuși în ianuarie temperatura medie la Londra este de aproximativ <b>+5 °C</b>, iar la Montréal de aproximativ <b>−10 °C</b>.</p>
<p>De ce? Londra primește vânturile umede dinspre Atlantic, încălzit de <b>Curentul Golfului</b>; Montréal se află în interiorul continentului și iarna primește aer înghețat din Arctica canadiană. Deci latitudinea nu e de ajuns: contează și <b>marea</b>, <b>curenții</b> și <b>vânturile</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: calculează ora la New York",
      html: `<p>La Roma este ora <b>15:00</b>. New York se află la aproximativ 74° vest, Roma la aproximativ 12° est: în total aproximativ <b>86° diferență</b>, adică aproape 6 fusuri. În practică, între Roma și New York sunt <b>6 ore</b> diferență (fusurile urmează și granițele statelor).</p>
<p>New York este mai la vest, deci Soarele ajunge acolo mai târziu: acolo este ora <b>9:00</b> dimineața. Dacă suni un prieten din <b>Tokyo</b> (+8 ore față de Roma, fără ora de vară), acolo este ora <b>23:00</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… Eratostene a măsurat Pământul cu un băț?",
      html: `<p>Pe la <b>240 î.Hr.</b>, grecul <b>Eratostene</b>, bibliotecar la Alexandria, în Egipt, a observat că la Syene (actualul Assuan), la amiaza solstițiului de vară, Soarele lumina fundul unei fântâni, în timp ce la Alexandria un băț făcea o umbră de aproximativ <b>7°</b>. Cunoscând distanța dintre cele două orașe, a calculat circumferința Pământului: aproximativ <b>250.000 de stadii</b>, o valoare foarte apropiată de cea adevărată. Acum mai bine de 2200 de ani, fără sateliți!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… punctul cel mai îndepărtat de centrul Pământului nu este Everestul?",
      html: `<p>Deoarece Pământul este mai „umflat” la ecuator, punctul cel mai îndepărtat de centrul Pământului este vârful vulcanului <b>Chimborazo</b> din Ecuador (6263 m), aflat aproape pe ecuator: este cu aproximativ 2 km mai „departe” de centru decât vârful Everestului, deși este mai jos față de nivelul mării.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege planeta",
      intro: "Coordonatele, fusurile și climatele pot părea abstracte: încearcă așa.",
      tabs: [
        {
          label: "🍊 Analogie: portocala",
          html: `<p>Ia o portocală și un marker.</p>
<ul>
<li>Desenează o linie în jurul „burții”: este <b>ecuatorul</b>.</li>
<li>Desenează alte cercuri mai mici deasupra și dedesubt: sunt <b>paralelele</b>.</li>
<li>Acum urmărește „feliile” de la un pol la altul: sunt <b>meridianele</b>! Fiecare felie lată de 15° corespunde unei ore de fus orar.</li>
</ul>
<p>Încearcă să cojești portocala și să întinzi coaja: se rupe. De aceea <b>nicio hartă a lumii nu este perfectă</b>: toate deformează ceva (în proiecția Mercator, Groenlanda pare la fel de mare ca Africa, care în realitate este de aproximativ 14 ori mai mare!).</p>`
        },
        {
          label: "🔦 Experiment: lanterna",
          html: `<p>Pe întuneric, îndreaptă o lanternă <b>drept</b> spre o foaie: vezi un cerc mic și foarte luminos (ca la ecuator). Acum înclină lanterna: lumina se lărgește într-o elipsă mare și mai slabă (ca la poli). <b>Aceeași energie împrăștiată pe o suprafață mai mare încălzește mai puțin</b>: acesta este primul factor al climei.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#1e293b"/>
<rect x="40" y="180" width="520" height="30" fill="#e2e8f0"/>
<rect x="120" y="20" width="40" height="70" rx="6" fill="#f59e0b"/>
<polygon points="125,90 155,90 175,180 105,180" fill="#fde047" opacity="0.85"/>
<text x="140" y="230" font-size="16" fill="#fde047" text-anchor="middle" font-weight="bold">Ecuator: lumină concentrată</text>
<rect x="380" y="30" width="40" height="70" rx="6" fill="#f59e0b" transform="rotate(-45 400 65)"/>
<polygon points="420,95 440,110 560,180 340,180" fill="#fde047" opacity="0.4"/>
<text x="450" y="230" font-size="16" fill="#fde047" text-anchor="middle" font-weight="bold">Poli: lumină împrăștiată</text>
</svg>`
        },
        {
          label: "🧩 Joc: potrivește clima cu mediul",
          html: `<p>Fiecare climă are mediul ei tipic. Potrivește-le.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Ecuatorială", "Pădure tropicală umedă"],
              ["Tropicală uscată/umedă", "Savană"],
              ["Aridă", "Deșert"],
              ["Mediteraneeană", "Vegetație mediteraneeană (maquis)"],
              ["Rece continentală", "Taiga"],
              ["Polară", "Tundră și ghețuri"]
            ]
          }
        },
        {
          label: "🗺️ Cum se numără în lume",
          html: `<p>Numărul continentelor depinde de țara în care mergi la școală!</p>
<ul>
<li><b>Italia</b>: de obicei 6 (Europa, Asia, Africa, America, Oceania, Antarctica), cu America uneori împărțită în două.</li>
<li><b>SUA, China, India, Regatul Unit</b>: 7 (America de Nord și America de Sud separate).</li>
<li><b>Multe țări din America Latină, Spania, Grecia</b>: adesea 6, cu America unică.</li>
<li><b>Simbolul olimpic</b>: 5 inele = 5 continente locuite (fără Antarctica, cu America unită).</li>
</ul>
<p>Nu este o chestiune de corect sau greșit: este o <b>convenție</b>, adică o înțelegere între oameni.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta planetei: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "sfera", label: "Pământul sferic", x: 50, y: 6, color: "#2563eb", html: "O sferă ușor turtită la poli, cu raza de aproximativ 6371 km.", why: "Încă Aristotel (sec. IV î.Hr.) a observat umbra rotundă a Pământului pe Lună în timpul eclipselor; Eratostene l-a măsurat; Newton a înțeles că rotația îl „turtește” la poli, iar expedițiile franceze din 1735–1744 au confirmat acest lucru." },
        { id: "rotazione", label: "Rotația", x: 15, y: 25, color: "#0ea5e9", html: "O rotație completă în jurul propriei axe în aproximativ 24 de ore.", why: "Demonstrată spectaculos de fizicianul francez Léon Foucault în 1851, cu un pendul mare atârnat în Panthéonul din Paris, care își schimbă încet direcția." },
        { id: "rivoluzione", label: "Revoluția și axa înclinată", x: 85, y: 25, color: "#f59e0b", html: "O rotație în jurul Soarelui în aproximativ 365 de zile; axa înclinată cu aproximativ 23,5°.", why: "Copernic (1543) a propus ideea că Pământul se rotește în jurul Soarelui; Galilei și Kepler au confirmat-o. Înclinarea axei face ca înălțimea Soarelui să varieze în timpul anului: de aceea există anotimpuri." },
        { id: "reticolo", label: "Rețeaua geografică", x: 15, y: 50, color: "#a855f7", html: "Paralele, meridiane, latitudine și longitudine.", why: "Rețeaua era folosită deja de Ptolemeu (sec. II d.Hr.). Meridianul zero a fost stabilit la Greenwich în 1884, la Conferința internațională de la Washington, pentru că majoritatea hărților nautice foloseau deja Greenwich." },
        { id: "fusi", label: "Fusurile orare", x: 15, y: 78, color: "#6366f1", html: "24 de fusuri, fiecare de 15°.", why: "Odată cu căile ferate din secolul al XIX-lea, fiecare oraș avea propria oră solară, iar orarele trenurilor erau un haos: de aceea s-au adoptat fusuri standard." },
        { id: "placche", label: "Plăcile tectonice", x: 50, y: 40, color: "#b45309", html: "Scoarța este împărțită în plăci care se mișcă încet.", why: "Wegener (1912) a observat că țărmurile Africii și ale Americii de Sud se potrivesc ca piesele unui puzzle și că pe ele se găsesc aceleași fosile. În anii '60, studiul fundului oceanelor a demonstrat că plăcile se mișcă." },
        { id: "continenti", label: "Continente și oceane", x: 50, y: 66, color: "#16a34a", html: "6 (sau 7) continente, 5 oceane; 29% uscat, 71% apă.", why: "Sunt rezultatul a sute de milioane de ani de mișcare a plăcilor: cândva tot uscatul era unit în Pangeea." },
        { id: "fattori", label: "Factorii climei", x: 85, y: 50, color: "#ef4444", html: "Latitudine, altitudine, mare, curenți, vânturi, relief.", why: "Toți depind de felul în care energia Soarelui ajunge și este distribuită: cu cât razele sunt mai înclinate, cu atât e mai puțină căldură; aerul de la înălțime este rarefiat și reține mai puțină căldură; apa are o mare capacitate de a păstra căldura." },
        { id: "climi", label: "Climate și medii", x: 85, y: 78, color: "#22c55e", html: "Ecuatorială, aridă, temperată, rece, polară.", why: "Cea mai folosită clasificare este a lui Wladimir Köppen, bazată pe temperaturi, ploi și vegetație: plantele sunt cel mai bun „termometru” al climei." },
        { id: "uomo", label: "Populația", x: 50, y: 92, color: "#ec4899", html: "Peste 8 miliarde de oameni, distribuiți foarte inegal.", why: "Oamenii trăiesc mai ales acolo unde clima, apa și câmpiile permit agricultura: zonele temperate și marile văi ale fluviilor din Asia. Deșerturile, polii și munții înalți sunt aproape goi." }
      ],
      edges: [
        ["sfera", "rotazione", "face"],
        ["sfera", "rivoluzione", "face"],
        ["rotazione", "reticolo", "axă și poli →"],
        ["reticolo", "fusi", "15° = 1 oră"],
        ["rivoluzione", "fattori", "anotimpuri →"],
        ["sfera", "placche", "scoarță împărțită în"],
        ["placche", "continenti", "formează"],
        ["fattori", "climi", "determină"],
        ["continenti", "uomo", "găzduiesc"],
        ["climi", "uomo", "influențează"]
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Pământul este o sferă turtită la poli; <b>71% apă</b>, <b>29% uscat</b>.</li>
<li><b>Rotația</b> (24 h) → ziua și noaptea; <b>revoluția</b> (365 de zile) + axa înclinată → anotimpurile.</li>
<li><b>Latitudinea</b> (paralele, de la 0° la 90° N/S) și <b>longitudinea</b> (meridiane, de la 0° la 180° E/V, de la Greenwich).</li>
<li>Continente: Asia, America, Africa, Antarctica, Europa, Oceania. Oceane: Pacific, Atlantic, Indian, Antarctic, Arctic.</li>
<li>Factorii climei: latitudine, altitudine, mare, curenți, vânturi. Climate: ecuatorială, aridă, temperată, rece, polară.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: continente și climate",
      questions: [
        { type: "mc", q: "Care este cel mai mare ocean?", options: ["Atlantic", "Indian", "Pacific"], answer: 2, explain: "Pacificul, mai întins decât tot uscatul la un loc." },
        { type: "tf", q: "Când urci pe munte, temperatura scade cu aproximativ 0,6 °C la fiecare 100 m.", answer: true, explain: "Este gradientul termic vertical mediu." },
        { type: "mc", q: "În ce zonă climatică se află taigaua?", options: ["Ecuatorială", "Rece continentală", "Aridă"], answer: 1, explain: "Taigaua este pădurea de conifere din clima rece continentală." }
      ]
    }
  ],
  glossary: [
    { t: "Geoid", d: "Forma reală a Pământului: o sferă ușor turtită la poli și neregulată." },
    { t: "Latitudine", d: "Distanța unghiulară a unui punct față de ecuator (0°–90° N sau S)." },
    { t: "Longitudine", d: "Distanța unghiulară a unui punct față de meridianul Greenwich (0°–180° E sau V)." },
    { t: "Fus orar", d: "Felie de aproximativ 15° de longitudine cu aceeași oră convențională." },
    { t: "Tropice", d: "Paralele la aproximativ 23,5° N (Racul) și S (Capricornul): Soarele poate fi la zenit doar între ele." },
    { t: "Placă tectonică", d: "Porțiune mare și rigidă a scoarței terestre care se mișcă încet." },
    { t: "Pangeea", d: "Supercontinent unic care a existat acum aproximativ 300–200 de milioane de ani." },
    { t: "Climă", d: "Condițiile atmosferice medii ale unui loc, calculate pe cel puțin 30 de ani." },
    { t: "Curent marin", d: "Un mare „râu” de apă în interiorul oceanelor, cald sau rece." },
    { t: "Taiga", d: "Pădure de conifere din regiunile cu climă rece continentală." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce mișcare a Pământului provoacă alternanța zilei și a nopții?", options: ["Revoluția", "Rotația", "Deriva continentelor"], answer: 1, explain: "Rotația în jurul propriei axe, în aproximativ 24 de ore." },
      { type: "mc", q: "De ce există anotimpuri?", options: ["Pentru că vara Pământul este mai aproape de Soare", "Pentru că axa Pământului este înclinată", "Pentru că Luna acoperă Soarele"], answer: 1, explain: "Înclinarea axei (aproximativ 23,5°) schimbă înclinarea razelor Soarelui în timpul anului. Ba chiar, Pământul este mai aproape de Soare în ianuarie!" },
      { type: "text", q: "Prin ce localitate trece meridianul de bază (0°)?", answer: ["greenwich"], explain: "Prin observatorul de la Greenwich, lângă Londra." },
      { type: "num", q: "Câte grade de latitudine are Polul Nord?", answer: 90, tol: 0, unit: "°", explain: "Polii sunt la 90° N și 90° S." },
      { type: "mc", q: "Care este cel mai mare și cel mai populat continent?", options: ["Africa", "America", "Asia"], answer: 2, explain: "Asia: aproximativ 44,6 milioane de km² și 4,8 miliarde de locuitori." },
      { type: "tf", q: "Antarctica are o populație permanentă de multe milioane de oameni.", answer: false, explain: "În Antarctica trăiesc doar oameni de știință în baze de cercetare, pentru perioade limitate." },
      { type: "mc", q: "Cine a propus teoria derivei continentelor în 1912?", options: ["Alfred Wegener", "Galileo Galilei", "Wladimir Köppen"], answer: 0, explain: "Geofizicianul german Alfred Wegener." },
      { type: "order", q: "Pune în ordine climatele mergând de la ecuator spre pol.", items: ["Ecuatorială", "Aridă (tropicală)", "Temperată", "Rece continentală", "Polară"], explain: "Pe măsură ce ne îndepărtăm de ecuator, razele Soarelui sunt tot mai înclinate și e tot mai frig." },
      { type: "mc", q: "De ce iarna Londra este mai blândă decât Montréal, deși este mai la nord?", options: ["Pentru că este un oraș mai mare", "Din cauza influenței Atlanticului și a Curentului Golfului", "Pentru că este mai sus față de nivelul mării"], answer: 1, explain: "Marea și curentul cald îndulcesc clima Europei de nord-vest." },
      { type: "num", q: "La Roma este ora 12:00. Cât este ora la New York (cu 6 ore în urmă)?", answer: 6, tol: 0, explain: "12 − 6 = 6: este ora 6 dimineața." },
      { type: "tf", q: "Clima este vremea care e azi.", answer: false, explain: "Vremea este cea de moment; clima este media pe cel puțin 30 de ani." },
      { type: "text", q: "Cum se numește supercontinentul unic de acum aproximativ 300 de milioane de ani?", answer: ["pangeea", "pangea"], explain: "Pangeea, care înseamnă „tot pământul”." }
    ]
  }
});
