TOPIC('ro', {
  id: "l1-geo-strumenti",
  title: "Instrumentele geografiei",
  intro: "Geograful nu se limitează să descrie lumea: o <b>măsoară</b>, o <b>reprezintă</b> și o <b>interpretează</b>. În această lecție înveți să citești o <b>hartă</b>, să folosești <b>scara</b> și <b>coordonatele</b>, să înțelegi de ce orice hartă deformează realitatea și descoperi cum <b>GPS</b> și <b>GIS</b> au schimbat felul în care se studiază teritoriul.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Reprezentarea Pământului: planuri, hărți",
      html: `<p>Pământul este (aproape) o sferă, dar noi avem nevoie să-l reprezentăm pe o foaie sau pe un ecran plat. Orice reprezentare este o <b>reducere</b> a realității, făcută cu un anumit scop. Cele principale sunt:</p>
<ul>
<li><b>Planul</b> 🏙️: reprezintă o zonă foarte mică (un oraș, o clădire) cu foarte multe detalii; scări tipice de la 1:1.000 la 1:10.000.</li>
<li><b>Harta topografică</b> 🥾: arată un teritoriu cu drumuri, râuri, păduri, clădiri și relieful, de exemplu hărțile IGM (Institutul Geografic Militar italian) la scara 1:25.000, cele folosite de drumeți și alpiniști.</li>
<li><b>Harta geografică</b> 🗺️: zonă mai vastă (o regiune, un stat), mai puține detalii, scara în jur de 1:100.000–1:1.000.000.</li>
<li><b>Planisfera</b> 🌍: întreaga suprafață a Pământului pe un plan; scări de sute de milioane.</li>
<li><b>Harta tematică</b> 📊: arată <b>un singur fenomen</b> (densitatea populației, clima, venitul, votul) pe o bază geografică simplă.</li>
</ul>
<p>Orice hartă are câteva elemente fixe: <b>titlul</b>, <b>orientarea</b> (de obicei nordul în sus), <b>scara</b>, <b>legenda</b> (care explică simbolurile și culorile) și, dacă este nevoie, <b>rețeaua geografică</b>.</p>`
    },
    {
      type: "text",
      title: "2. Scara: cât este redusă realitatea",
      html: `<p><b>Scara</b> este raportul dintre o distanță măsurată pe hartă și distanța reală corespunzătoare. Se poate indica în trei moduri:</p>
<ul>
<li><b>numerică</b>: 1:50.000 înseamnă că 1 cm pe hartă corespunde la 50.000 cm (adică <b>500 m</b>) în realitate;</li>
<li><b>grafică</b>: un segment gradat cu distanțele reale (utilă pentru că nu se schimbă dacă mărești sau micșorezi fotocopia);</li>
<li><b>în cuvinte</b>: „1 cm = 500 m”.</li>
</ul>
<p>Atenție la paradox: o scară <b>mare</b> precum 1:1.000 (fracție mare, 1/1.000) arată o zonă <b>mică</b> cu multe detalii; o scară <b>mică</b> precum 1:10.000.000 arată o zonă <b>vastă</b> cu puține detalii.</p>
<p><b>Formule utile</b> (cu D = distanța pe hartă, R = distanța reală, N = numitorul scării):</p>
<p style="text-align:center"><b>R = D × N</b> &nbsp;&nbsp;&nbsp; <b>D = R ÷ N</b> &nbsp;&nbsp;&nbsp; <b>N = R ÷ D</b></p>`
    },
    {
      type: "example",
      title: "Exemplu practic: măsurarea unui traseu",
      html: `<p>Pe o hartă la scara <b>1:50.000</b> poteca de la cabană până la vârf măsoară <b>7,2 cm</b>. Cât este de lungă în realitate?</p>
<p>R = 7,2 cm × 50.000 = 360.000 cm = <b>3.600 m = 3,6 km</b>.</p>
<p>Dacă un drumeț merge cu 3 km/h pe teren plat, dar diferența de nivel îl încetinește, poate socoti circa 1 h 15 min. Atenție: harta măsoară distanța <b>pe orizontală</b>; dacă poteca urcă abrupt, drumul real este puțin mai lung decât sugerează rigla.</p>
<p><b>În sens invers</b>: două sate sunt la 12 km distanță și vrei o hartă de 24 cm. Îți trebuie N = 12 km ÷ 24 cm = 1.200.000 cm ÷ 24 cm = 50.000: scara <b>1:50.000</b>.</p>`
    },
    {
      type: "text",
      title: "3. Rețeaua geografică: latitudine și longitudine",
      html: `<p>Pentru a indica cu precizie un punct de pe Pământ se folosește <b>rețeaua geografică</b>, formată din două familii de cercuri imaginare:</p>
<ul>
<li><b>paralelele</b>: cercuri paralele cu <b>Ecuatorul</b> (0°). Măsoară <b>latitudinea</b>, adică distanța unghiulară față de Ecuator, de la 0° la <b>90° Nord</b> (Polul Nord) și de la 0° la <b>90° Sud</b> (Polul Sud). Paralelele principale sunt: Ecuatorul, Tropicul Racului (circa 23°26′ N), Tropicul Capricornului (circa 23°26′ S), Cercurile polare arctic și antarctic (circa 66°34′ N și S).</li>
<li><b>meridianele</b>: semicercuri care unesc polii. Măsoară <b>longitudinea</b>, adică distanța unghiulară față de <b>meridianul Greenwich</b> (0°), de la 0° la <b>180° Est</b> și de la 0° la <b>180° Vest</b>.</li>
</ul>
<p>Meridianul de referință trece prin observatorul de la <b>Greenwich</b>, la Londra: a fost ales de Conferința internațională de la Washington în <b>1884</b>. Coordonatele se scriu în grade (°), minute (′) și secunde (″): <b>Roma</b> se află la circa <b>41°54′ N, 12°30′ E</b>; București la circa 44°26′ N, 26°06′ E.</p>
<p>Un grad de latitudine corespunde întotdeauna la circa <b>111 km</b> pe suprafață. Un grad de longitudine, în schimb, măsoară 111 km doar la Ecuator și se <b>scurtează</b> pe măsură ce ne apropiem de poli, unde meridianele se întâlnesc.</p>`
    },
    {
      type: "svg",
      title: "Rețeaua geografică",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="170" cy="150" r="115" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<ellipse cx="170" cy="150" rx="115" ry="30" fill="none" stroke="#dc2626" stroke-width="3"/>
<ellipse cx="170" cy="95" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="205" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="35" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="80" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<line x1="170" y1="25" x2="170" y2="275" stroke="#15803d" stroke-width="4"/>
<circle cx="214" cy="116" r="6" fill="#f59e0b" stroke="#111827" stroke-width="2"/>
<text x="170" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polul Nord 90°N</text>
<text x="170" y="294" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polul Sud 90°S</text>
<text x="330" y="60" font-size="16" fill="#dc2626" font-weight="bold">Ecuatorul = 0° (paralelă)</text>
<text x="330" y="100" font-size="16" fill="#15803d" font-weight="bold">Meridianul Greenwich = 0°</text>
<text x="330" y="140" font-size="16" fill="#1e3a8a">Paralele: latitudine</text>
<text x="330" y="170" font-size="16" fill="#1e3a8a">Meridiane: longitudine</text>
<text x="330" y="215" font-size="16" fill="#92400e" font-weight="bold">Un punct = latitudine + longitudine</text>
<text x="330" y="245" font-size="15" fill="#111827">ex. 45°N, 10°E (Câmpia Padului)</text>
</svg>`,
      caption: "Paralelele (orizontale) dau latitudinea, meridianele (verticale) longitudinea. Intersecția lor identifică un punct unic pe Pământ."
    },
    {
      type: "quiz",
      title: "Mini-test: scară și coordonate",
      questions: [
        { type: "num", q: "Pe o hartă la scara 1:25.000 două puncte sunt la 6 cm distanță. Câți kilometri sunt în realitate?", answer: 1.5, tol: 0.01, unit: "km", explain: "6 cm × 25.000 = 150.000 cm = 1.500 m = 1,5 km." },
        { type: "mc", q: "Care hartă are cea mai mică scară?", options: ["1:1.000", "1:50.000", "1:10.000.000"], answer: 2, explain: "Cu cât numitorul este mai mare, cu atât scara este mai mică: 1:10.000.000 reprezintă o zonă foarte vastă cu puține detalii." },
        { type: "mc", q: "Ce măsoară latitudinea?", options: ["Distanța unghiulară față de Ecuator", "Distanța unghiulară față de Greenwich", "Înălțimea față de nivelul mării"], answer: 0, explain: "Latitudinea merge de la 0° (Ecuator) la 90° N sau S (poli). Distanța față de Greenwich este longitudinea." }
      ]
    },
    {
      type: "text",
      title: "4. Orice hartă deformează: proiecțiile",
      html: `<p>O sferă nu poate fi aplatizată fără a fi întinsă sau ruptă (încearcă să întinzi o coajă de portocală). Metoda matematică de transfer al rețelei de pe sferă pe plan se numește <b>proiecție cartografică</b>. Nicio proiecție nu păstrează toate proprietățile deodată: trebuie să <b>alegi ce sacrifici</b>.</p>
<ul>
<li><b>Proiecții conforme</b>: păstrează <b>unghiurile</b> și formele locale, dar deformează ariile. Cea mai faimoasă este <b>proiecția Mercator</b> (Gerardus Mercator, 1569), născută pentru <b>navigație</b>: o rută cu direcție constantă (busolă fixă) devine o linie dreaptă. În schimb mărește enorm zonele apropiate de poli: <b>Groenlanda</b> pare cât Africa, deși Africa este de circa <b>14 ori mai mare</b>.</li>
<li><b>Proiecții echivalente</b>: păstrează <b>ariile</b>, dar deformează formele (de exemplu proiecția <b>Gall-Peters</b>, popularizată în anii '70 de Arno Peters, sau proiecția Mollweide). Utile pentru compararea suprafețelor și pentru hărțile tematice.</li>
<li><b>Proiecții afilactice</b>: compromisuri care nu păstrează exact nimic, dar limitează deformările (de exemplu proiecția Robinson, folosită mult timp de National Geographic).</li>
</ul>
<p>Pentru Italia și restul Europei hărțile oficiale folosesc proiecții conforme de tip <b>cilindric transvers</b> (precum Gauss-Boaga și UTM), pentru că pe zone mici deformările devin neglijabile.</p>`
    },
    {
      type: "svg",
      title: "De ce pare Groenlanda uriașă",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Mercator (conformă)</text>
<text x="450" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Echivalentă (arii reale)</text>
<ellipse cx="150" cy="95" rx="55" ry="38" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="150" y="100" font-size="15" text-anchor="middle" fill="#111827">Groenlanda</text>
<ellipse cx="150" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="150" y="220" font-size="15" text-anchor="middle" fill="#111827">Africa</text>
<ellipse cx="450" cy="105" rx="20" ry="14" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="450" y="140" font-size="15" text-anchor="middle" fill="#111827">Groenlanda</text>
<ellipse cx="450" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="450" y="220" font-size="15" text-anchor="middle" fill="#111827">Africa</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#111827">Groenlanda: circa 2,2 milioane km². Africa: circa 30 milioane km².</text>
</svg>`,
      caption: "Schemă simplificată: în proiecția Mercator zonele apropiate de poli sunt mărite. În realitate Africa este de circa 14 ori mai mare decât Groenlanda."
    },
    {
      type: "curiosity",
      title: "Știai că… Pământul nu este o sferă perfectă?",
      html: `<p>Pământul este un <b>geoid</b>: turtit la poli și umflat la Ecuator, pentru că se rotește în jurul axei sale. Raza ecuatorială este de circa <b>6.378 km</b>, cea polară de circa <b>6.357 km</b>: o diferență de circa 21 km. Pentru măsurătorile obișnuite este suficientă sfera (circumferință de circa <b>40.000 km</b>: nu întâmplător <b>metrul</b> a fost definit la sfârșitul secolului al XVIII-lea ca a zecea milioana parte din distanța Polul Nord–Ecuator); pentru calculele de precizie se folosește un <b>elipsoid</b> de referință.</p>`
    },
    {
      type: "text",
      title: "5. Citirea reliefului și a simbolurilor",
      html: `<p>Cum se reprezintă pe o foaie plată <b>a treia dimensiune</b>, adică înălțimea? Metodele principale sunt:</p>
<ul>
<li><b>Curbele de nivel</b> (izohipse): linii care unesc toate punctele aflate la aceeași altitudine. Sunt despărțite de o <b>echidistanță</b> fixă (de exemplu 25 m). Unde curbele sunt <b>dese</b>, panta este <b>abruptă</b>; unde sunt <b>rare</b>, este lină. Cercurile concentrice indică un deal sau un vârf; curbele în formă de „V” arată în sus de-a lungul unei văi.</li>
<li><b>Culorile hipsometrice</b>: benzi de culoare pentru altitudini diferite (verde pentru câmpii, maro pentru munți, alb pentru vârfurile de peste o anumită cotă; albastru tot mai închis pentru adâncimile mării, cu <b>izobatele</b>).</li>
<li><b>Umbrirea și modelele 3D</b>: dau iluzia reliefului, calculate astăzi din <b>modele digitale ale terenului</b>.</li>
</ul>
<p><b>Hărțile tematice</b> folosesc în schimb alte limbaje: <b>coropletice</b> (culoare diferită pentru fiecare regiune după valoarea datei, de exemplu densitatea), hărți cu <b>simboluri proporționale</b> (un cerc mai mare pentru un oraș mai populat), hărți cu <b>puncte</b> și hărți cu <b>izolinii</b> (izoterme pentru temperatură, izobare pentru presiune, izohiete pentru ploi).</p>`
    },
    {
      type: "svg",
      title: "Curbe de nivel: un deal văzut de sus și din lateral",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<ellipse cx="150" cy="150" rx="120" ry="95" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<ellipse cx="150" cy="150" rx="85" ry="65" fill="#86efac" stroke="#166534" stroke-width="2"/>
<ellipse cx="135" cy="148" rx="50" ry="38" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<ellipse cx="125" cy="146" rx="18" ry="14" fill="#16a34a" stroke="#166534" stroke-width="2"/>
<text x="125" y="151" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">300</text>
<text x="45" y="153" font-size="14" fill="#111827">100</text>
<text x="80" y="153" font-size="14" fill="#111827">200</text>
<text x="150" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">De sus (hartă)</text>
<path d="M330 250 L400 230 L440 180 L470 120 L500 180 L540 230 L580 250 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<line x1="320" y1="250" x2="590" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="352" y1="236" x2="568" y2="236" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="423" y1="206" x2="518" y2="206" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="455" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Din lateral (secțiune)</text>
<text x="470" y="108" font-size="14" text-anchor="middle" fill="#111827">vârf</text>
<text x="450" y="280" font-size="14" text-anchor="middle" fill="#111827">curbe la fiecare 100 m: abrupt în dreapta, lin în stânga</text>
</svg>`,
      caption: "Fiecare curbă unește puncte aflate la aceeași cotă. Cu cât curbele sunt mai apropiate, cu atât panta este mai abruptă."
    },
    {
      type: "text",
      title: "6. Orientare și măsurarea timpului: busolă, GPS și fusuri orare",
      html: `<p>A te orienta înseamnă a găsi punctele cardinale. Timp de secole s-au folosit <b>Soarele</b>, <b>Steaua Polară</b> (în emisfera nordică indică Nordul) și <b>busola</b>, care folosește câmpul magnetic terestru. Atenție: acul indică <b>Nordul magnetic</b>, care nu coincide cu Nordul geografic (diferența se numește <b>declinație magnetică</b>).</p>
<p>Astăzi metoda cea mai folosită este <b>GNSS</b> (Global Navigation Satellite System), al cărui înaintaș este <b>GPS</b>-ul american. Principiul: un receptor (precum telefonul tău) calculează cât timp îi ia semnalului radio să călătorească de la mai mulți sateliți și deduce distanța față de fiecare; cu cel puțin <b>patru sateliți</b> (trei pentru poziție, unul pentru corectarea ceasului) stabilește latitudinea, longitudinea și altitudinea. Principalele sisteme sunt GPS (SUA), <b>Galileo</b> (Uniunea Europeană), GLONASS (Rusia) și BeiDou (China); fiecare are zeci de sateliți pe orbită, la circa 20.000 km altitudine.</p>
<p>Și <b>timpul</b> depinde de poziție. Pământul face o rotație de 360° în 24 de ore: fiecare <b>15° de longitudine</b> corespund la <b>1 oră</b>. Globul este împărțit în <b>24 de fusuri orare</b>; în lume (din motive politice) fusurile reale sunt mai multe. România se află în fusul Europei de Est (<b>UTC+2</b>, <b>UTC+3</b> cu ora de vară), iar Italia în cel al Europei Centrale (<b>UTC+1</b>, <b>UTC+2</b> cu ora de vară). Traversând <b>linia de schimbare a datei</b> (aproape de meridianul de 180°) se câștigă sau se pierde o zi.</p>`
    },
    {
      type: "3d",
      title: "Pe glob: coordonatele unor orașe",
      scene: "globe",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Roma (41,9° N, 12,5° E)", color: "#dc2626" },
          { lat: 51.48, lon: 0, label: "Greenwich (0°)", color: "#16a34a" },
          { lat: 0, lon: -78.5, label: "Quito (aproape pe Ecuator)", color: "#f59e0b" },
          { lat: -33.9, lon: 151.2, label: "Sydney (33,9° S)", color: "#2563eb" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#7c3aed" },
          { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#0ea5e9" }
        ],
        routes: [ { points: [0, 4], color: "#dc2626" }, { points: [0, 5], color: "#2563eb" } ]
      },
      caption: "Rotește globul: observă că Greenwich este pe meridianul 0°, iar Quito este aproape pe Ecuator (orașul se află în țara care își ia numele de la el: Ecuador = Ecuator)."
    },
    {
      type: "text",
      title: "7. GIS, teledetecție și date: geografia digitală",
      html: `<p><b>GIS</b>-ul (<i>Geographic Information System</i>, în română <b>Sistem Informatic Geografic</b>) este un sistem informatic care stochează, leagă și analizează date raportate la poziție. Ideea-cheie este cea a <b>straturilor suprapuse</b> (<i>layers</i>): drumuri, râuri, clădiri, utilizarea terenului, populația… fiecare într-un strat care poate fi pornit și oprit și încrucișat cu celelalte. Datele sunt de două tipuri: <b>vectoriale</b> (puncte, linii, poligoane: o stație, un drum, o comună) și <b>raster</b> (grile de pixeli: o fotografie prin satelit, un model de altitudine).</p>
<p>Un exemplu istoric de „GIS înainte de GIS”: în <b>1854</b>, în timpul unei epidemii de <b>holeră</b> la Londra, medicul <b>John Snow</b> a marcat pe o hartă casele celor morți și a descoperit că se concentrau în jurul unei pompe de apă din Broad Street. A pus să fie scos mânerul pompei, iar cazurile au scăzut: <b>harta</b> arătase cauza (apa contaminată) înainte chiar să fie cunoscută bacteria.</p>
<p><b>Teledetecția</b> obține informații despre suprafața Pământului de la distanță, cu sateliți și drone. Programe precum <b>Copernicus</b> (UE, sateliții Sentinel) și Landsat (SUA) produc imagini gratuite folosite pentru urmărirea incendiilor, inundațiilor, ghețarilor, recoltelor și a creșterii orașelor. Imaginile în infraroșu, de exemplu, dezvăluie starea de sănătate a vegetației.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: unde construim o școală?",
      html: `<p>O comună trebuie să aleagă unde să construiască o școală nouă. Cu un GIS se suprapun patru straturi:</p>
<ol>
<li>locuința copiilor de vârstă școlară (date din evidența populației: puncte);</li>
<li>rețeaua stradală și stațiile de transport public (linii și puncte);</li>
<li>zonele cu risc de inundație (poligoane);</li>
<li>terenurile libere din proprietate publică (poligoane).</li>
</ol>
<p>Sistemul calculează terenurile libere, <b>în afara riscului de inundație</b>, la cel mult 500 m de o stație, care <b>reduc la minimum distanța medie</b> de casa copiilor. În câteva secunde propune 2 sau 3 amplasamente: decizia rămâne oamenilor, dar se bazează pe date, nu pe impresii. Este aceeași metodă cu care se proiectează spitale, linii de autobuz și planuri de protecție civilă.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… GPS-ul are nevoie de relativitate?",
      html: `<p>Ceasurile atomice de pe sateliții GPS merg <b>puțin mai repede</b> decât cele de pe Pământ (gravitația este mai slabă la altitudine: relativitatea generală) și puțin mai încet (pentru că sateliții se mișcă repede: relativitatea restrânsă). Rezultatul net este un avans de circa <b>38 de microsecunde pe zi</b>. Fără corectare, eroarea de poziție ar crește cu circa <b>10 km pe zi</b>! De fiecare dată când îți folosești smartphone-ul ca să te orientezi, folosești (fără să știi) teoria lui Einstein.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege hărțile și coordonatele",
      intro: "Dacă scara sau coordonatele nu ți se par clare, încearcă să le privești din alt unghi.",
      tabs: [
        {
          label: "🏀 Coaja de portocală",
          html: `<p>Ia o coajă de portocală și încearcă s-o strivești pe masă: se rupe sau se întinde. Exact aceasta este problema proiecțiilor! Ca să ai o hartă continuă trebuie să <b>întinzi</b> unele zone (cum face Mercator cu polii) sau să <b>tai</b> suprafața în „felii” (hărți pe fusuri, precum cele ale lui Goode). Iată de ce nicio hartă plană nu este „corectă”: fiecare este o alegere între forme, arii, distanțe și direcții.</p>`
        },
        {
          label: "🧭 Adresa lumii",
          html: `<p>Gândește-te la coordonate ca la o <b>adresă</b> de tipul „stradă, număr” într-un oraș cu rețea de străzi (ca New York sau Torino): <b>latitudinea</b> este ca „rândul” (cât de la nord sau de la sud ești față de Ecuator), iar <b>longitudinea</b> este ca „coloana” (cât de la est sau de la vest ești față de Greenwich). Două numere sunt suficiente pentru a identifica un punct: iar un telefon îți poate spune chiar câți metri te despart de poștă.</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="260" fill="#eff6ff"/><line x1="40" y1="130" x2="470" y2="130" stroke="#dc2626" stroke-width="3"/><line x1="250" y1="20" x2="250" y2="240" stroke="#15803d" stroke-width="3"/><circle cx="360" cy="70" r="8" fill="#f59e0b" stroke="#111827" stroke-width="2"/><circle cx="130" cy="190" r="8" fill="#2563eb" stroke="#111827" stroke-width="2"/></svg>`,
            spots: [
              { x: 120, y: 130, label: "Ecuatorul (0° latitudine)" },
              { x: 250, y: 40, label: "Meridianul Greenwich (0° longitudine)" },
              { x: 360, y: 70, label: "Punct la Nord și la Est" },
              { x: 130, y: 190, label: "Punct la Sud și la Vest" }
            ]
          }
        },
        {
          label: "👣 Pasul-măsură",
          html: `<p>Un mod simplu de a simți scara: măsoară-ți <b>pasul</b>. Un pas de adult are circa 70–75 cm; <b>1.000 de pași</b> sunt deci circa 700 m, iar distanța de acasă până la școală o poți estima așa. Apoi trece-o pe o hartă a orașului la scara 1:10.000: dacă obții 7 cm, scara funcționează. Sau compară cu „scara umană”: pe o hartă 1:25.000, 4 cm înseamnă 1 km, circa 15 minute pe jos.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă conceptuală: instrumentele geografului",
      nodes: [
        { id: "carta", label: "Harta", x: 50, y: 8, color: "#2563eb", html: "Reprezentare redusă, simbolică și aproximativă a suprafeței Pământului.", why: "Primele hărți cunoscute datează din Babilon (tăblița din Nippur și „mappa mundi babiloniană”, circa secolul al VI-lea î.Hr.). Grecii, cu Eratostene (circa 240 î.Hr.), au măsurat circumferința Pământului cu o abatere de doar câteva procente față de valoarea actuală, iar Ptolemeu (secolul al II-lea d.Hr.) a fixat ideea unei rețele de coordonate." },
        { id: "scala", label: "Scara", x: 15, y: 38, color: "#16a34a", html: "Raportul dintre distanța de pe hartă și distanța reală.", why: "Este un simplu raport de proporționalitate: servește la măsurarea pe hartă și la aflarea dimensiunilor reale. Scara este motivul pentru care o hartă este întotdeauna o alegere între detaliu și întindere." },
        { id: "coordinate", label: "Coordonate", x: 50, y: 38, color: "#dc2626", html: "Latitudinea și longitudinea identifică fiecare punct.", why: "Ecuatorul și polii sunt definiți de rotația Pământului, deci latitudinea este un reper natural. Longitudinea, în schimb, nu are un reper natural: este o convenție, fixată la Greenwich în 1884. Măsurarea ei pe mare a fost secole întregi o problemă: a rezolvat-o în secolul al XVIII-lea ceasul de navigație (cronometrul) al lui John Harrison." },
        { id: "proiezioni", label: "Proiecții", x: 85, y: 38, color: "#a855f7", html: "Cum se trece de la sferă la plan.", why: "O teoremă a lui Gauss (Theorema Egregium, 1827) demonstrează că o sferă nu poate fi întinsă pe un plan fără deformări ale distanțelor sau ariilor: deformarea nu este un defect al cartografilor, ci o proprietate matematică a suprafeței." },
        { id: "rilievo", label: "Relief și simboluri", x: 25, y: 68, color: "#f59e0b", html: "Curbe de nivel, culori hipsometrice, legendă.", why: "Curbele de nivel au fost introduse între secolele al XVIII-lea și al XIX-lea, când armatele au avut nevoie de hărți care să permită prevederea mișcărilor pe teren. Încă și azi hărțile topografice italiene ale IGM derivă din această nevoie militară." },
        { id: "gps", label: "GPS și sateliți", x: 60, y: 68, color: "#0ea5e9", html: "Poziție calculată din distanța față de mai mulți sateliți.", why: "GPS-ul a fost dezvoltat de Departamentul Apărării al SUA (primii sateliți în anii '70, sistemul complet în anii '90) în scopuri militare. Din 2000 semnalul civil este disponibil cu o precizie mult mai mare." },
        { id: "gis", label: "GIS și date", x: 50, y: 93, color: "#ec4899", html: "Straturi suprapuse de informații georeferențiate.", why: "Primul adevărat GIS a fost Canada Geographic Information System, conceput de Roger Tomlinson în anii '60 pentru inventarierea resurselor teritoriului canadian; de aceea este numit „părintele GIS”." }
      ],
      edges: [
        ["carta", "scala", "are o"],
        ["carta", "coordinate", "are rețeaua de"],
        ["carta", "proiezioni", "provine dintr-o"],
        ["carta", "rilievo", "arată"],
        ["coordinate", "gps", "sunt calculate de"],
        ["gps", "gis", "alimentează"],
        ["proiezioni", "gis", "servesc la"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Scara</b> = distanța pe hartă ÷ distanța reală. R = D × N. Scară mare = zonă mică, multe detalii.</li>
<li><b>Latitudinea</b> (paralele, de la 0° la 90° N/S față de Ecuator); <b>longitudinea</b> (meridiane, de la 0° la 180° E/V față de Greenwich).</li>
<li>Orice <b>proiecție</b> deformează: Mercator păstrează unghiurile, Gall-Peters ariile.</li>
<li><b>Curbe de nivel</b> dese = pantă abruptă.</li>
<li><b>GPS</b>-ul folosește cel puțin 4 sateliți; <b>GIS</b>-ul suprapune straturi de date georeferențiate.</li>
<li>15° de longitudine = 1 oră de diferență.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: proiecții și GIS",
      questions: [
        { type: "mc", q: "De ce pare Groenlanda cât Africa în proiecția Mercator?", options: ["Pentru că zonele apropiate de poli sunt mărite", "Pentru că Groenlanda este cu adevărat foarte mare", "Pentru că scara este greșită"], answer: 0, explain: "Mercator păstrează unghiurile (util navigației), dar mărește mult zonele îndepărtate de Ecuator." },
        { type: "tf", q: "Nordul indicat de acul busolei coincide exact cu Nordul geografic.", answer: false, explain: "Acul indică Nordul magnetic, care diferă de Nordul geografic printr-un unghi numit declinație magnetică." },
        { type: "text", q: "Cum se numește sistemul care suprapune straturi de date georeferențiate (sigla din trei litere)?", answer: ["gis", "sig"], explain: "GIS: Geographic Information System, în română Sistem Informatic Geografic (SIG)." }
      ]
    }
  ],
  glossary: [
    { t: "Scara", d: "Raportul dintre o distanță măsurată pe hartă și distanța reală corespunzătoare (ex. 1:50.000)." },
    { t: "Latitudine", d: "Distanța unghiulară a unui punct față de Ecuator, de la 0° la 90° Nord sau Sud; se măsoară cu paralelele." },
    { t: "Longitudine", d: "Distanța unghiulară a unui punct față de meridianul Greenwich, de la 0° la 180° Est sau Vest; se măsoară cu meridianele." },
    { t: "Proiecție cartografică", d: "Metodă matematică ce transferă rețeaua de pe sfera terestră pe un plan, întotdeauna cu o anumită deformare." },
    { t: "Curbe de nivel", d: "Linii care unesc punctele de la aceeași altitudine; permit citirea reliefului pe hartă." },
    { t: "Hartă tematică", d: "Hartă care arată un singur fenomen (climă, populație, venit…) pe o bază geografică simplificată." },
    { t: "GPS / GNSS", d: "Sistem de poziționare prin satelit: receptorul calculează poziția din distanța față de cel puțin patru sateliți." },
    { t: "GIS", d: "Sistem informatic geografic: stochează, suprapune și analizează date legate de poziție." },
    { t: "Teledetecție", d: "Obținerea de informații despre suprafața Pământului de la distanță, cu sateliți, avioane sau drone." },
    { t: "Fus orar", d: "Fiecare dintre cele 24 de benzi de 15° de longitudine în care este împărțit Pământul, cu aceeași oră convențională." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Pe o hartă la scara 1:100.000 două orașe sunt la 8,5 cm distanță. Câți km le despart în realitate?", answer: 8.5, tol: 0.05, unit: "km", explain: "8,5 cm × 100.000 = 850.000 cm = 8.500 m = 8,5 km." },
      { type: "mc", q: "Care dintre aceste scări arată mai multe detalii?", options: ["1:5.000", "1:500.000", "1:50.000.000"], answer: 0, explain: "Scara 1:5.000 este cea mai mare (numitor mai mic): reprezintă o zonă mică cu multe detalii." },
      { type: "mc", q: "În ce an a fost ales meridianul Greenwich ca meridian internațional de referință?", options: ["1492", "1884", "1969", "1990"], answer: 1, explain: "Conferința internațională de la Washington din 1884 a ales Greenwich ca meridian 0°." },
      { type: "tf", q: "Un grad de longitudine măsoară întotdeauna circa 111 km, oriunde pe Pământ.", answer: false, explain: "Este adevărat doar la Ecuator: meridianele converg spre poli, deci distanța dintre două meridiane scade odată cu latitudinea." },
      { type: "mc", q: "Ce proiecție păstrează unghiurile și a apărut pentru navigație?", options: ["Gall-Peters", "Mercator", "Mollweide"], answer: 1, explain: "Mercator (1569): rutele cu direcție constantă devin linii drepte, dar ariile de la poli sunt umflate." },
      { type: "mc", q: "Pe o hartă topografică curbele de nivel sunt foarte apropiate între ele. Ce indică asta?", options: ["O pantă abruptă", "O câmpie", "Un lac"], answer: 0, explain: "Curbele dese înseamnă o variație mare de cotă pe o distanță mică: o pantă abruptă." },
      { type: "order", q: "Pune în ordine de la scara cea mai mare (mai multe detalii) la cea mai mică (mai puține detalii).", items: ["1:1.000", "1:25.000", "1:500.000", "1:30.000.000"], explain: "Cu cât numitorul este mai mic, cu atât scara este mai mare: plan, hartă topografică, hartă regională, planisferă." },
      { type: "num", q: "Câți sateliți sunt necesari cel puțin unui receptor GPS pentru a calcula poziția și a corecta ceasul?", answer: 4, tol: 0, explain: "Trei sunt necesari pentru poziția în spațiu, al patrulea pentru corectarea erorii ceasului receptorului." },
      { type: "text", q: "Cum se numește linia care unește punctele de la aceeași altitudine pe o hartă?", answer: ["curbă de nivel", "curbe de nivel", "izohipsă", "izohipse"], explain: "Curbă de nivel (sau izohipsă)." },
      { type: "tf", q: "John Snow, studiind pe o hartă decesele provocate de holeră la Londra în 1854, a identificat în pompa din Broad Street sursa contagiunii.", answer: true, explain: "Unul dintre primele exemple de analiză spațială a datelor: concentrarea cazurilor în jurul pompei a indicat apa contaminată." }
    ]
  }
});
