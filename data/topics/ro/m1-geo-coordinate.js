TOPIC('ro', {
  id: `m1-geo-coordinate`,
  title: `Latitudine și longitudine`,
  intro: `Cum se poate indica precis un punct oarecare de pe Pământ, chiar și în mijlocul oceanului? Se folosește o grilă imaginară de <b>paralele</b> și <b>meridiane</b>, <b>rețeaua geografică</b>. Fiecare loc are „adresa” lui, făcută din două numere: <b>latitudinea</b> și <b>longitudinea</b>. De longitudine depind și <b>fusurile orare</b>.`,
  minutes: 35,
  sections: [
    {
      type: `text`,
      title: `1. Rețeaua geografică`,
      html: `<p>Pământul se rotește în jurul unei axe care trece prin <b>Polul Nord</b> și <b>Polul Sud</b>. Pe această bază, geografii au trasat două familii de linii imaginare:</p><ul><li><b>Paralelele</b>: cercuri orizontale, paralele între ele, care înconjoară Pământul de la Vest la Est. Cel mai lung este <b>Ecuatorul</b> (aproximativ <b>40.075 km</b>), care împarte Pământul în <b>emisfera boreală</b> (Nord) și <b>emisfera australă</b> (Sud). Cu cât ne apropiem de poli, cu atât paralelele sunt mai mici; polii sunt doar puncte.</li><li><b>Meridianele</b>: semicercuri care merg de la un pol la altul. Sunt toate <b>egale</b> (aproximativ 20.000 km). Meridianul de referință trece prin observatorul de la <b>Greenwich</b>, lângă Londra (ales în <b>1884</b> la Conferința internațională de la Washington) și împarte Pământul în <b>emisfera estică</b> (Est) și <b>vestică</b> (Vest).</li></ul>`
    },
    {
      type: `svg`,
      title: `Paralele și meridiane`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#0f172a"/><circle cx="160" cy="165" r="120" fill="#38bdf8" stroke="#e0f2fe" stroke-width="2"/><g fill="none" stroke="#fef08a" stroke-width="2"><ellipse cx="160" cy="165" rx="120" ry="18"/><ellipse cx="160" cy="105" rx="104" ry="15"/><ellipse cx="160" cy="225" rx="104" ry="15"/><ellipse cx="160" cy="60" rx="60" ry="9"/><ellipse cx="160" cy="270" rx="60" ry="9"/></g><ellipse cx="160" cy="165" rx="120" ry="18" fill="none" stroke="#f97316" stroke-width="4"/><text x="160" y="30" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#fef08a">PARALELE</text><text x="30" y="170" font-size="14" font-family="sans-serif" fill="#fdba74" text-anchor="end">0°</text><circle cx="440" cy="165" r="120" fill="#38bdf8" stroke="#e0f2fe" stroke-width="2"/><g fill="none" stroke="#bbf7d0" stroke-width="2"><ellipse cx="440" cy="165" rx="40" ry="120"/><ellipse cx="440" cy="165" rx="80" ry="120"/><ellipse cx="440" cy="165" rx="110" ry="120"/></g><line x1="440" y1="45" x2="440" y2="285" stroke="#ef4444" stroke-width="4"/><text x="440" y="30" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#bbf7d0">MERIDIANE</text><text x="448" y="300" font-size="14" font-family="sans-serif" fill="#fca5a5">Greenwich 0°</text><circle cx="440" cy="45" r="5" fill="#ffffff"/><text x="455" y="50" font-size="14" font-family="sans-serif" fill="#ffffff">Polul Nord</text><text x="160" y="196" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#7c2d12" font-weight="bold">Ecuator</text></svg>`,
      caption: `În stânga: paralelele, cercuri tot mai mici spre poli. În dreapta: meridianele, toate egale, care se întâlnesc la poli.`
    },
    {
      type: `text`,
      title: `2. Latitudine și longitudine`,
      html: `<p>Coordonatele se măsoară în <b>grade</b> (°), împărțite în <b>minute</b> (′, 1° = 60′) și <b>secunde</b> (″, 1′ = 60″), pentru că sunt <b>unghiuri</b> măsurate de la centrul Pământului.</p><ul><li><b>Latitudinea</b>: distanța unghiulară a unui punct față de <b>Ecuator</b>. Merge de la <b>0°</b> (Ecuator) la <b>90°</b> (poli) și se indică <b>Nord</b> sau <b>Sud</b>. Toate punctele aceluiași paralel au aceeași latitudine.</li><li><b>Longitudinea</b>: distanța unghiulară a unui punct față de <b>meridianul Greenwich</b>. Merge de la <b>0°</b> la <b>180°</b> și se indică <b>Est</b> sau <b>Vest</b>. Toate punctele aceluiași meridian au aceeași longitudine.</li></ul><p>Se scrie întotdeauna <b>mai întâi latitudinea, apoi longitudinea</b>. Exemplu: <b>Roma 41° 54′ N, 12° 30′ E</b>. În sistemele de navigație și pe Internet se folosesc gradele zecimale și semnele: 41,9 / 12,5 (Nord și Est pozitive, Sud și Vest negative).</p>`
    },
    {
      type: `remember`,
      title: `Truc ca să nu le încurci`,
      html: `<p><b>Latitudine</b> → „<b>lat</b>”, „lățime”: liniile sunt <b>orizontale</b>, ca treptele unei <b>scări</b>: urci și cobori între Nord și Sud.<br><b>Longitudine</b> → „<b>lung</b>”: meridianele sunt linii <b>lungi</b> care merg de la pol la pol; te deplasezi între Est și Vest.</p>`
    },
    {
      type: `text`,
      title: `3. Paralelele speciale`,
      html: `<p>Din cauza înclinării axei Pământului (aproximativ <b>23° 27′</b>), unele paralele au o semnificație astronomică:</p><table><tr><th>Paralela</th><th>Latitudinea</th><th>De ce este specială</th></tr><tr><td>Ecuator</td><td>0°</td><td>Soarele este la zenit (drept deasupra) la echinocții</td></tr><tr><td>Tropicul Racului</td><td>23° 27′ N</td><td>Soarele este la zenit la 21 iunie</td></tr><tr><td>Tropicul Capricornului</td><td>23° 27′ S</td><td>Soarele este la zenit la 21–22 decembrie</td></tr><tr><td>Cercul polar arctic</td><td>66° 33′ N</td><td>Dincolo de el, cel puțin o zi pe an cu soare la miezul nopții și una de noapte polară</td></tr><tr><td>Cercul polar antarctic</td><td>66° 33′ S</td><td>La fel, în emisfera australă</td></tr></table><p>Aceste paralele delimitează <b>zonele astronomice</b> (toridă, temperate, polare), pe care le vei studia în lecția despre climă.</p>`
    },
    {
      type: `3d`,
      title: `Găsește orașele pe glob`,
      scene: `globe`,
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: `Roma 41,9° N – 12,5° E`, color: `#16a34a` },
          { lat: 45.46, lon: 9.19, label: `Milano 45,5° N – 9,2° E`, color: `#16a34a` },
          { lat: 51.48, lon: 0, label: `Greenwich 51,5° N – 0°`, color: `#dc2626` },
          { lat: 40.71, lon: -74.0, label: `New York 40,7° N – 74° V`, color: `#2563eb` },
          { lat: -33.87, lon: 151.21, label: `Sydney 33,9° S – 151,2° E`, color: `#f97316` },
          { lat: -0.18, lon: -78.47, label: `Quito (aproape pe Ecuator)`, color: `#a855f7` },
          { lat: 35.68, lon: 139.69, label: `Tokyo 35,7° N – 139,7° E`, color: `#f97316` },
          { lat: -34.6, lon: -58.38, label: `Buenos Aires 34,6° S – 58,4° V`, color: `#2563eb` }
        ]
      },
      caption: `Rotește globul: observă că Roma și New York au aproape aceeași latitudine (sunt aproape pe același paralel), dar longitudini foarte diferite.`
    },
    {
      type: `example`,
      title: `Exemplu practic: cât de lung este un grad?`,
      html: `<p>Un meridian merge de la pol la pol: 180° de latitudine pentru aproximativ 20.000 km. Deci <b>1° de latitudine ≈ 20.000 : 180 ≈ 111 km</b>.</p><p>Milano se află la aproximativ 45,5° N, Roma la aproximativ 41,9° N. Diferența este 45,5 − 41,9 = <b>3,6°</b>; 3,6 × 111 ≈ <b>400 km</b> pe direcția Nord-Sud. (Distanța reală în linie dreaptă este de aproximativ 480 km, pentru că Milano se află și mai la Vest.)</p><p>Un grad de longitudine, în schimb, are 111 km doar la Ecuator și se scurtează spre poli, unde devine zero.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-test 1`,
      questions: [
        { type: `mc`, q: `Care este latitudinea Ecuatorului?`, options: [`0°`, `45°`, `90°`, `180°`], answer: 0, explain: `Ecuatorul este paralela de referință: 0°.` },
        { type: `mc`, q: `Ce valoare maximă poate avea longitudinea?`, options: [`90°`, `180°`, `360°`, `23° 27′`], answer: 1, explain: `180° Est sau Vest: dincolo de asta te întorci de cealaltă parte.` },
        { type: `tf`, q: `Toate meridianele au aceeași lungime.`, answer: true, explain: `Merg toate de la un pol la altul; paralelele, în schimb, se scurtează spre poli.` },
        { type: `num`, q: `Câți km măsoară aproximativ 1° de latitudine?`, answer: 111, tol: 2, unit: `km`, explain: `20.000 km : 180° ≈ 111 km.` }
      ]
    },
    {
      type: `text`,
      title: `4. Fusurile orare`,
      html: `<p>Pământul face o rotație completă (<b>360°</b>) în <b>24 de ore</b>. Într-o oră se rotește deci cu 360 : 24 = <b>15°</b>. De aceea Pământul a fost împărțit în <b>24 de fusuri orare</b>, felii late de aproximativ 15° de longitudine: în interiorul fiecărui fus se folosește aceeași oră.</p><ul><li>Fusul de referință este cel de la Greenwich: ora se numește <b>UTC</b> (timp universal coordonat).</li><li>Mergând spre <b>Est</b> se <b>adaugă</b> o oră pentru fiecare fus (unde Soarele răsare mai devreme); mergând spre <b>Vest</b> se <b>scade</b>.</li><li><b>Italia</b> se află în fusul <b>UTC+1</b> (ora Europei Centrale); vara, cu <b>ora de vară</b>, devine UTC+2.</li><li>Limitele fusurilor nu sunt linii drepte: urmează adesea granițele statelor. <b>China</b>, lată cât 5 fusuri, folosește o singură oră pentru toată țara.</li></ul><p>Pe meridianul de 180°, în Oceanul Pacific, trece (cu multe abateri) <b>linia de schimbare a datei</b>: traversând-o spre Vest se adaugă o zi, spre Est se scade una.</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: îl sunăm pe unchi la New York`,
      html: `<p>La Roma este ora <b>18:00</b> (iarnă, UTC+1). New York se află în fusul <b>UTC−5</b>. Diferența este 1 − (−5) = <b>6 ore</b>, iar New York este la Vest: deci acolo este 18 − 6 = <b>12:00</b>, prânzul. Unchiul este în pauza de masă!</p><p>Și la <b>Tokyo</b> (UTC+9)? Diferența 9 − 1 = 8 ore spre Est: 18 + 8 = 26 → <b>2:00 noaptea</b> din ziua următoare. Mai bine să nu sunăm!</p>`
    },
    {
      type: `widget`,
      title: `Axa fusurilor orare`,
      widget: `numberLine`,
      options: { min: -12, max: 14, step: 1, marks: [-5, 0, 1, 9] },
      caption: `Fiecare liniuță este un fus (UTC). Marchează: New York (−5), Greenwich (0), Italia (+1), Tokyo (+9). A număra salturile dintre două liniuțe = diferența de ore. Kiribati folosește chiar UTC+14!`
    },
    {
      type: `curiosity`,
      title: `Problema longitudinii`,
      html: `<p>Latitudinea se măsura încă din Evul Mediu observând înălțimea Stelei Polare sau a Soarelui. Longitudinea nu: trebuia să știi ce oră este <b>în același timp</b> la bord și în portul de plecare (fiecare oră de diferență = 15°). Dar ceasurile cu pendul de pe corăbiile care se legănau nu funcționau. Multe corăbii se scufundau. În 1714, Parlamentul englez a oferit o recompensă uriașă celui care ar fi rezolvat problema. A câștigat-o un tâmplar și ceasornicar, <b>John Harrison</b>: cronometrul lui marin <b>H4</b>, încercat în 1761–62, a greșit cu doar câteva secunde într-o călătorie de două luni până în Jamaica.</p>`
    },
    {
      type: `curiosity`,
      title: `Un loc cu toate orele`,
      html: `<p>La <b>Polul Nord</b> și la <b>Polul Sud</b> se întâlnesc toate meridianele, deci toate fusurile orare! Mergând în jurul polului poți traversa 24 de fusuri în câteva secunde. De aceea bazele științifice din Antarctica aleg o oră pentru comoditate: baza americană <b>Amundsen-Scott</b>, chiar la Polul Sud, folosește ora Noii Zeelande, de unde vin proviziile.</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege`,
      intro: `Dacă latitudinea și longitudinea ți se par abstracte, încearcă aceste metode.`,
      tabs: [
        { label: `🚢 Bătălia navală`, html: `<p>În jocul „Bătălia navală”, fiecare căsuță are o <b>literă</b> (rând) și un <b>număr</b> (coloană): „B4, lovit!”. Coordonatele geografice funcționează la fel: latitudinea spune pe ce „rând” (paralel) te afli, longitudinea pe ce „coloană” (meridian). Singura diferență: pe Pământ grila este înfășurată pe o sferă, iar numerele pornesc din centru (0°) și merg spre Nord/Sud și Est/Vest.</p>`, svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#e0f2fe"/><g stroke="#0369a1" stroke-width="1.5"><line x1="100" y1="40" x2="100" y2="280"/><line x1="180" y1="40" x2="180" y2="280"/><line x1="260" y1="40" x2="260" y2="280"/><line x1="340" y1="40" x2="340" y2="280"/><line x1="420" y1="40" x2="420" y2="280"/><line x1="500" y1="40" x2="500" y2="280"/><line x1="100" y1="40" x2="500" y2="40"/><line x1="100" y1="100" x2="500" y2="100"/><line x1="100" y1="160" x2="500" y2="160"/><line x1="100" y1="220" x2="500" y2="220"/><line x1="100" y1="280" x2="500" y2="280"/></g><line x1="100" y1="160" x2="500" y2="160" stroke="#f97316" stroke-width="4"/><line x1="300" y1="40" x2="300" y2="280" stroke="#dc2626" stroke-width="4"/><g font-family="sans-serif" font-size="14" fill="#0c4a6e"><text x="510" y="45">60° N</text><text x="510" y="105">30° N</text><text x="510" y="165" fill="#c2410c" font-weight="bold">0° Ecuator</text><text x="510" y="225">30° S</text><text x="85" y="30">90° O</text><text x="165" y="30">60° O</text><text x="285" y="30" fill="#b91c1c" font-weight="bold">0°</text><text x="400" y="30">60° E</text></g><circle cx="335" cy="78" r="10" fill="#16a34a"/><text x="350" y="83" font-size="15" font-family="sans-serif" fill="#14532d" font-weight="bold">Roma ≈ 42° N, 12° E</text><circle cx="180" cy="82" r="10" fill="#2563eb"/><text x="110" y="70" font-size="14" font-family="sans-serif" fill="#1e3a8a">New York ≈ 41° N, 74° V</text></svg>` },
        { label: `📐 Planul cartezian`, html: `<p>În matematică, un punct din plan se indică prin două numere (x; y). Pe Pământ: <b>longitudinea</b> este ca <b>x</b> (dreapta = Est pozitiv, stânga = Vest negativ), iar <b>latitudinea</b> este ca <b>y</b> (sus = Nord pozitiv, jos = Sud negativ). Originea (0; 0) se află în Golful Guineei, unde Ecuatorul întâlnește Greenwich. Atenție însă: în geografie se scrie mai întâi latitudinea (y) și apoi longitudinea (x)!</p>` },
        { label: `🍊 Portocala pe felii`, html: `<p>Ia o portocală: felioarele merg de la un „pol” la altul ca <b>meridianele</b> și sunt toate egale ca <b>fusurile orare</b>. Dacă o tai în felii orizontale, fiecare felie este un <b>paralel</b>: felia din mijloc (Ecuatorul) este cea mai mare, cele spre capete tot mai mici. O portocală cu 24 de felioare ar fi un model perfect al fusurilor orare!</p>` },
        { label: `🌍 Glob cu trasee`, html: `<p>Urmărește pe glob paralela de 40–42° N: unește Roma, Madridul, New York-ul, Beijingul. Sunt toate orașe cu anotimpuri asemănătoare, pentru că primesc Soarele sub înclinări asemănătoare.</p>`, scene: `globe`, options: { points: [ { lat: 41.9, lon: 12.5, label: `Roma`, color: `#16a34a` }, { lat: 40.42, lon: -3.7, label: `Madrid`, color: `#16a34a` }, { lat: 40.71, lon: -74.0, label: `New York`, color: `#16a34a` }, { lat: 39.9, lon: 116.4, label: `Beijing`, color: `#16a34a` }, { lat: 41.0, lon: 28.97, label: `Istanbul`, color: `#16a34a` } ], routes: [ { points: [2, 1, 0, 4, 3], color: `#f97316` } ] } }
      ]
    },
    {
      type: `widget`,
      title: `În ce emisferă se află?`,
      widget: `classify`,
      options: { groups: [`Emisfera boreală (Nord)`, `Emisfera australă (Sud)`], items: [ [`🇮🇹 Roma`, 0], [`🇦🇺 Sydney`, 1], [`🇯🇵 Tokyo`, 0], [`🇦🇷 Buenos Aires`, 1], [`🇿🇦 Cape Town`, 1], [`🇺🇸 New York`, 0], [`🇧🇷 Rio de Janeiro`, 1], [`🇪🇬 Cairo`, 0] ] },
      caption: `Ține minte: orașele din emisfera australă au latitudine Sud (S).`
    },
    {
      type: `quiz`,
      title: `Mini-test 2`,
      questions: [
        { type: `num`, q: `Cu câte grade se rotește Pământul într-o oră?`, answer: 15, tol: 0, unit: `°`, explain: `360° : 24 h = 15° pe oră.` },
        { type: `num`, q: `La Roma (UTC+1) este amiază (ora 12). Ce oră este la Moscova (UTC+3)?`, answer: 14, tol: 0, unit: `h`, explain: `Moscova este cu 2 fusuri mai la Est: 12 + 2 = 14.` },
        { type: `mc`, q: `Ce paralelă se află la 23° 27′ Nord?`, options: [`Tropicul Capricornului`, `Cercul polar arctic`, `Tropicul Racului`, `Ecuatorul`], answer: 2, explain: `Tropicul Racului: la 21 iunie Soarele este acolo la zenit.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Hartă conceptuală: adresa locurilor`,
      nodes: [
        { id: `sfera`, label: `Pământ sferic care se rotește`, x: 50, y: 8, color: `#0ea5e9`, html: `<p>Axa de rotație, polii, rotația în 24 de ore.</p>`, why: `<p>Încă Eratostene (secolul al III-lea î.Hr.) a măsurat circumferința Pământului cu umbra unui băț: a găsit o valoare foarte apropiată de cei 40.000 km reali.</p>` },
        { id: `angoli`, label: `Măsurare în grade`, x: 82, y: 22, color: `#ca8a04`, html: `<p>Grade, minute, secunde (sistem sexagesimal).</p>`, why: `<p>Cercul împărțit în 360° și submultiplii lui 60 vin de la astronomii babilonieni, care numărau în baza 60 (cum facem și astăzi cu orele și minutele).</p>` },
        { id: `paralleli`, label: `Paralele → latitudine`, x: 20, y: 35, color: `#f97316`, html: `<p>De la 0° (Ecuator) la 90° N sau S.</p>`, why: `<p>Ecuatorul este „natural”: este cercul perpendicular pe axa de rotație. De aceea latitudinea se putea măsura cu ajutorul stelelor încă din antichitate.</p>` },
        { id: `meridiani`, label: `Meridiane → longitudine`, x: 50, y: 40, color: `#dc2626`, html: `<p>De la 0° (Greenwich) la 180° E sau V.</p>`, why: `<p>Meridianul zero este o <b>convenție</b>: de-a lungul timpului s-au folosit multe (Paris, Roma, insula Ferro). În 1884, la Washington, 25 de țări au ales Greenwich, pentru că majoritatea hărților nautice îl foloseau deja.</p>` },
        { id: `tropici`, label: `Tropice și cercuri polare`, x: 15, y: 70, color: `#a855f7`, html: `<p>23° 27′ e 66° 33′.</p>`, why: `<p>Depind de înclinarea axei Pământului (aproximativ 23,4°): tropicele se află la 23,4° de Ecuator, cercurile polare la 90° − 23,4° ≈ 66,6°.</p>` },
        { id: `coordinate`, label: `Coordonate geografice`, x: 42, y: 70, color: `#16a34a`, html: `<p>Mai întâi latitudinea, apoi longitudinea.</p>`, why: `<p>Rețeaua a fost folosită sistematic de Ptolemeu (secolul al II-lea d.Hr.) în <i>Geografia</i> sa, care enumera aproximativ 8.000 de locuri cu coordonatele lor.</p>` },
        { id: `fusi`, label: `Fusuri orare`, x: 78, y: 62, color: `#2563eb`, html: `<p>24 de fusuri de 15°, UTC, ora de vară, linia de schimbare a datei.</p>`, why: `<p>Până în secolul al XIX-lea, fiecare oraș folosea ora propriului Soare. Odată cu căile ferate erau necesare ore comune: canadianul Sandford Fleming a propus cele 24 de fusuri (1879). Italia a adoptat ora Europei Centrale în 1893.</p>` },
        { id: `gps`, label: `Navigație și GPS`, x: 68, y: 90, color: `#475569`, html: `<p>De la cronometrul lui Harrison la GPS.</p>`, why: `<p>Măsurarea longitudinii cere măsurarea <b>timpului</b>: GPS-ul funcționează tocmai datorită ceasurilor atomice aflate la bordul sateliților, foarte precise.</p>` }
      ],
      edges: [ [`sfera`, `paralleli`, `axa și Ecuatorul`], [`sfera`, `meridiani`, `polii`], [`angoli`, `meridiani`, `măsoară`], [`angoli`, `paralleli`, `măsoară`], [`paralleli`, `tropici`, `speciale`], [`paralleli`, `coordinate`, `latitudine`], [`meridiani`, `coordinate`, `longitudine`], [`meridiani`, `fusi`, `15° = 1 oră`], [`fusi`, `gps`, `timp`] ]
    }
  ],
  glossary: [
    { t: `Rețea geografică`, d: `Ansamblul de paralele și meridiane trasate ideal pe Pământ.` },
    { t: `Paralelă`, d: `Cerc imaginar paralel cu Ecuatorul.` },
    { t: `Meridian`, d: `Semicerc imaginar care unește cei doi poli.` },
    { t: `Latitudine`, d: `Distanța unghiulară a unui punct față de Ecuator (0°–90° N sau S).` },
    { t: `Longitudine`, d: `Distanța unghiulară a unui punct față de meridianul Greenwich (0°–180° E sau V).` },
    { t: `Emisferă`, d: `Jumătate a Pământului: boreală/australă (separate de Ecuator), estică/vestică (de Greenwich și de 180°).` },
    { t: `Fus orar`, d: `Felie de aproximativ 15° de longitudine în care este valabilă aceeași oră.` },
    { t: `UTC`, d: `Timp universal coordonat, ora de referință mondială.` },
    { t: `Linia de schimbare a datei`, d: `Linie apropiată de meridianul 180° unde se schimbă data din calendar.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Ce linie împarte Pământul în emisfera boreală și australă?`, options: [`Meridianul Greenwich`, `Ecuatorul`, `Tropicul Racului`, `Linia de schimbare a datei`], answer: 1, explain: `Ecuatorul separă Nordul de Sud.` },
      { type: `text`, q: `Cum se numește meridianul fundamental (0°)?`, answer: [`greenwich`, `meridianul greenwich`, `meridianul de la greenwich`], explain: `Trece prin observatorul de la Greenwich, lângă Londra.` },
      { type: `mc`, q: `Cum se scriu coordonatele unui punct?`, options: [`Mai întâi longitudinea, apoi latitudinea`, `Mai întâi latitudinea, apoi longitudinea`, `Doar latitudinea`, `Nu există o ordine`], answer: 1, explain: `De ex. Roma 41° 54′ N, 12° 30′ E.` },
      { type: `tf`, q: `Toate paralelele au aceeași lungime.`, answer: false, explain: `Ecuatorul este cel mai lung; spre poli se scurtează.` },
      { type: `num`, q: `Câte fusuri orare principale există?`, answer: 24, tol: 0, explain: `Unul pentru fiecare oră din zi.` },
      { type: `num`, q: `La Roma (UTC+1) este ora 10. Ce oră este la Londra (UTC+0)?`, answer: 9, tol: 0, unit: `h`, explain: `Londra este cu un fus mai la Vest: 10 − 1 = 9.` },
      { type: `num`, q: `Dacă la Roma (UTC+1) este ora 20, ce oră este la Los Angeles (UTC−8)?`, answer: 11, tol: 0, unit: `h`, explain: `Diferența 1 − (−8) = 9 ore spre Vest: 20 − 9 = 11.` },
      { type: `mc`, q: `Ce latitudine are Polul Sud?`, options: [`0°`, `90° N`, `90° S`, `180°`], answer: 2, explain: `Polii au latitudinea de 90°, Nord sau Sud.` },
      { type: `order`, q: `Ordonează paralelele de la Nord la Sud`, items: [`Cercul polar arctic`, `Tropicul Racului`, `Ecuatorul`, `Tropicul Capricornului`, `Cercul polar antarctic`], explain: `66° 33′ N, 23° 27′ N, 0°, 23° 27′ S, 66° 33′ S.` },
      { type: `mc`, q: `De ce era greu să măsori longitudinea pe mare?`, options: [`Lipseau stelele`, `Erau necesare ceasuri precise, care pe corăbii nu funcționau`, `Busola nu indica Estul`, `Marea era prea adâncă`], answer: 1, explain: `Problema a fost rezolvată de cronometrul lui John Harrison în secolul al XVIII-lea.` },
      { type: `tf`, q: `Roma și New York au o latitudine asemănătoare.`, answer: true, explain: `Roma aproximativ 42° N, New York aproximativ 41° N.` }
    ],
    gen: [ [`intAdd`, 2] ]
  }
});
