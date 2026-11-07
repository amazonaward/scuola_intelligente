TOPIC('ro', {
  id: `m1-geo-strumenti`,
  title: `Instrumentele geografiei`,
  intro: `Geograful studiază Pământul și relația dintre om și teritoriu. Pentru asta folosește <b>instrumente</b>: hărți de multe feluri, <b>scara</b> pentru măsurarea distanțelor, orientarea, coordonatele, fotografiile din satelit, GPS-ul, iar apoi <b>tabele și grafice</b> pentru a citi datele. În această lecție înveți să le folosești pe toate.`,
  minutes: 35,
  sections: [
    {
      type: `text`,
      title: `1. Ce este o hartă geografică`,
      html: `<p>O <b>hartă geografică</b> este o reprezentare <b>redusă</b>, <b>aproximativă</b> și <b>simbolică</b> a unei părți din suprafața Pământului, văzută de sus:</p><ul><li><b>redusă</b>: totul este micșorat după o <b>scară</b>;</li><li><b>aproximativă</b>: Pământul este (aproape) o sferă și nu poate fi „aplatizat” pe o foaie fără a-l deforma;</li><li><b>simbolică</b>: folosește culori, linii și simboluri explicate în <b>legendă</b>.</li></ul><p>Fiecare hartă bine făcută are: <b>titlu</b>, <b>legendă</b>, <b>scară</b> (numerică sau grafică) și indicarea <b>Nordului</b> (roza vânturilor sau săgeată).</p>`
    },
    {
      type: `widget`,
      title: `Elementele unei hărți`,
      widget: `labelDiagram`,
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="340" fill="#f8fafc"/><rect x="20" y="20" width="560" height="300" fill="#bfdbfe" stroke="#334155" stroke-width="3"/><text x="300" y="50" font-size="20" font-family="sans-serif" text-anchor="middle" fill="#0f172a" font-weight="bold">Insula Soarelui – hartă fizică</text><path d="M120 110 Q200 70 300 100 Q400 80 430 150 Q460 240 330 270 Q200 290 150 230 Q90 180 120 110 Z" fill="#86efac" stroke="#166534" stroke-width="2"/><path d="M230 140 Q290 120 330 160 Q320 210 260 210 Q210 190 230 140 Z" fill="#fde047"/><path d="M265 160 Q290 150 305 175 Q290 195 268 188 Z" fill="#a16207"/><polygon points="285,155 278,172 292,172" fill="#ffffff"/><path d="M300 190 Q330 230 380 255" fill="none" stroke="#2563eb" stroke-width="3"/><circle cx="380" cy="255" r="7" fill="#dc2626"/><text x="392" y="260" font-size="14" font-family="sans-serif" fill="#7f1d1d">Portosole</text><rect x="455" y="200" width="115" height="110" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="465" y="218" font-size="13" font-family="sans-serif" font-weight="bold" fill="#0f172a">Legendă</text><rect x="465" y="226" width="14" height="10" fill="#86efac"/><text x="485" y="235" font-size="12" font-family="sans-serif" fill="#0f172a">câmpie</text><rect x="465" y="244" width="14" height="10" fill="#fde047"/><text x="485" y="253" font-size="12" font-family="sans-serif" fill="#0f172a">deal</text><rect x="465" y="262" width="14" height="10" fill="#a16207"/><text x="485" y="271" font-size="12" font-family="sans-serif" fill="#0f172a">munte</text><circle cx="472" cy="290" r="5" fill="#dc2626"/><text x="485" y="294" font-size="12" font-family="sans-serif" fill="#0f172a">oraș</text><line x1="40" y1="300" x2="140" y2="300" stroke="#0f172a" stroke-width="4"/><line x1="90" y1="294" x2="90" y2="306" stroke="#0f172a" stroke-width="2"/><text x="40" y="290" font-size="12" font-family="sans-serif" fill="#0f172a">0</text><text x="120" y="290" font-size="12" font-family="sans-serif" fill="#0f172a">10 km</text><polygon points="520,70 510,110 520,100 530,110" fill="#dc2626"/><text x="520" y="64" font-size="16" font-family="sans-serif" text-anchor="middle" font-weight="bold" fill="#dc2626">N</text></svg>`,
        spots: [
          { x: 300, y: 45, label: `Titlu` },
          { x: 510, y: 250, label: `Legendă` },
          { x: 90, y: 300, label: `Scară grafică` },
          { x: 520, y: 92, label: `Indicarea Nordului` },
          { x: 285, y: 170, label: `Munte` },
          { x: 345, y: 225, label: `Râu` },
          { x: 380, y: 255, label: `Oraș` }
        ]
      },
      caption: `Atinge un punct și alege eticheta potrivită.`
    },
    {
      type: `text`,
      title: `2. Scara: cât a fost micșorat?`,
      html: `<p><b>Scara numerică</b> se scrie <b>1 : 100.000</b> și se citește „unu la o sută de mii”: <b>1 cm pe hartă</b> corespunde la <b>100.000 cm în realitate</b>, adică 1.000 m = <b>1 km</b>.</p><p>Ca să afli o distanță reală: <b>distanța pe hartă × numitorul scării</b>, apoi se transformă în km.</p><ul><li><b>Scară mare</b> (numitor mic, până la 1 : 10.000): planul unui oraș, harta cartierului, multe detalii.</li><li><b>Scară medie</b> (de la 1 : 10.000 la 1 : 1.000.000): hărți topografice și regionale.</li><li><b>Scară mică</b> (peste 1 : 1.000.000): hărți de state, continente, planisferă. Puține detalii, teritoriu mare.</li></ul><p>Atenție la capcană: <b>cu cât numărul de după două puncte este mai mare, cu atât scara este mai mică!</b></p><p><b>Scara grafică</b> este un segment împărțit în părți, cu indicarea kilometrilor: este comodă pentru că rămâne corectă chiar dacă harta este mărită sau micșorată (de exemplu la copiator sau pe ecran).</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: de acasă la școală`,
      html: `<p>Pe o hartă la scara <b>1 : 25.000</b>, distanța dintre casa ta și școală măsoară <b>6 cm</b>.</p><ol><li>6 × 25.000 = 150.000 cm</li><li>150.000 cm = 1.500 m (împarți la 100)</li><li>1.500 m = <b>1,5 km</b> (împarți la 1.000)</li></ol><p>Și invers: două orașe se află la 80 km distanță. Pe o hartă 1 : 1.000.000 (unde 1 cm = 10 km), câți cm le despart? 80 : 10 = <b>8 cm</b>.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-test 1`,
      questions: [
        { type: `num`, q: `Pe o hartă 1 : 100.000, două sate se află la 7 cm unul de altul. Câți km le despart în realitate?`, answer: 7, tol: 0, unit: `km`, explain: `7 × 100.000 = 700.000 cm = 7.000 m = 7 km.` },
        { type: `mc`, q: `Care scară este cea mai mare (arată mai multe detalii)?`, options: [`1 : 5.000`, `1 : 250.000`, `1 : 10.000.000`], answer: 0, explain: `Numitorul mai mic indică scara mai mare.` },
        { type: `tf`, q: `Scara grafică rămâne corectă chiar dacă harta este mărită.`, answer: true, explain: `Segmentul se mărește odată cu harta, deci proporțiile rămân corecte.` }
      ]
    },
    {
      type: `text`,
      title: `3. Multe tipuri de hărți`,
      html: `<ul><li><b>Plan</b> (până la 1 : 10.000): orașe, clădiri, cartiere.</li><li><b>Hartă topografică</b> (1 : 10.000–1 : 150.000): teritoriu detaliat, poteci, curbe de nivel. În Italia le realizează <b>Institutul Geografic Militar</b> din Florența.</li><li><b>Hartă corografică</b> (1 : 150.000–1 : 1.000.000): regiuni.</li><li><b>Hartă geografică</b> (peste 1 : 1.000.000): state, continente, planisferă.</li></ul><p>După <b>conținut</b>:</p><ul><li><b>fizică</b>: relief, câmpii, râuri, lacuri, mări, cu culori diferite pentru altitudine (verde, galben, maro, alb) și pentru adâncime (albastru mai închis);</li><li><b>politică</b>: granițe, state, regiuni, orașe, fiecare de altă culoare;</li><li><b>tematică</b>: un singur subiect (climă, populație, limbi, turism, risc seismic…).</li></ul>`
    },
    {
      type: `svg`,
      title: `Curbele de nivel`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#f8fafc"/><text x="150" y="28" font-size="17" font-family="sans-serif" text-anchor="middle" fill="#0f172a" font-weight="bold">Vedere laterală</text><text x="450" y="28" font-size="17" font-family="sans-serif" text-anchor="middle" fill="#0f172a" font-weight="bold">Vedere de sus (hartă)</text><path d="M20 280 Q90 270 120 200 Q150 90 175 90 Q200 100 230 200 Q250 260 280 280 Z" fill="#a3a3a3"/><g stroke="#b45309" stroke-width="2" stroke-dasharray="5 4"><line x1="20" y1="240" x2="280" y2="240"/><line x1="20" y1="190" x2="280" y2="190"/><line x1="20" y1="140" x2="280" y2="140"/></g><g font-family="sans-serif" font-size="13" fill="#7c2d12"><text x="22" y="236">200 m</text><text x="22" y="186">400 m</text><text x="22" y="136">600 m</text></g><line x1="300" y1="40" x2="300" y2="300" stroke="#cbd5e1" stroke-width="2"/><ellipse cx="450" cy="175" rx="125" ry="110" fill="#bbf7d0" stroke="#b45309" stroke-width="2.5"/><ellipse cx="458" cy="170" rx="85" ry="72" fill="#fde68a" stroke="#b45309" stroke-width="2.5"/><ellipse cx="468" cy="162" rx="42" ry="34" fill="#fdba74" stroke="#b45309" stroke-width="2.5"/><polygon points="472,150 464,166 480,166" fill="#7c2d12"/><g font-family="sans-serif" font-size="13" fill="#7c2d12"><text x="330" y="180">200</text><text x="378" y="175">400</text><text x="430" y="200">600</text></g><text x="450" y="306" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#0f172a">curbe apropiate = pantă abruptă</text></svg>`,
      caption: `Curbele de nivel (izohipse) unesc punctele aflate la aceeași altitudine. Unde sunt dese, panta este abruptă; unde sunt depărtate, este lină.`
    },
    {
      type: `text`,
      title: `4. Orientarea`,
      html: `<p>A te orienta înseamnă a găsi <b>punctele cardinale</b>: <b>Nord</b> (sau miazănoapte), <b>Sud</b> (sau miazăzi), <b>Est</b> (sau răsărit), <b>Vest</b> (sau apus).</p><ul><li><b>Cu Soarele</b>: răsare la Est, apune la Vest; la prânz, în Italia, se află la Sud.</li><li><b>Cu Steaua Polară</b>: noaptea indică Nordul (se găsește prelungind de aproximativ cinci ori latura din spate a Carului Mare).</li><li><b>Cu busola</b>: acul magnetic arată spre <b>Nordul magnetic</b>, aproape de (dar nu identic cu) Polul Nord geografic.</li><li><b>Cu GPS-ul</b>: smartphone-ul primește semnale de la cel puțin 4 sateliți și își calculează poziția cu o precizie de câțiva metri.</li></ul><p>Pentru a găsi un punct exact pe Pământ se folosesc <b>coordonatele geografice</b>: <b>latitudinea</b> și <b>longitudinea</b> (le vei studia în lecția dedicată).</p>`
    },
    {
      type: `text`,
      title: `5. Proiecțiile: a aplatiza o portocală`,
      html: `<p>Încearcă să cureți o portocală și să întinzi coaja pe masă: se rupe sau se deformează. Se întâmplă același lucru când desenezi Pământul pe o foaie. Cartografii folosesc <b>proiecții</b>, metode matematice care aleg ce se păstrează:</p><ul><li><b>Proiecția Mercator</b> (1569): păstrează <b>unghiurile</b> și direcțiile, foarte utilă pentru navigație; dar <b>mărește</b> enorm pământurile apropiate de poli. Groenlanda pare la fel de mare ca Africa, deși în realitate Africa este de aproximativ <b>14 ori</b> mai mare!</li><li><b>Proiecția Peters</b> (Gall-Peters): păstrează <b>ariile</b> (suprafețele sunt în proporție corectă), dar deformează formele.</li><li>Multe atlase folosesc proiecții de compromis (precum cea a lui Robinson sau a lui Winkel).</li></ul><p>Singura reprezentare fără deformări este <b>globul</b>.</p>`
    },
    {
      type: `3d`,
      title: `Globul: singura hartă fără deformări`,
      scene: `globe`,
      options: { points: [ { lat: 72, lon: -40, label: `Groenlanda (2,2 milioane km²)`, color: `#0ea5e9` }, { lat: 5, lon: 20, label: `Africa (30 de milioane km²)`, color: `#f97316` }, { lat: 42, lon: 12.5, label: `Italia`, color: `#16a34a` }, { lat: 90, lon: 0, label: `Polul Nord`, color: `#7c3aed` }, { lat: 0, lon: 0, label: `Intersecția Ecuator – Greenwich`, color: `#dc2626` } ] },
      caption: `Rotește globul și compară Groenlanda cu Africa: pe glob proporțiile sunt adevărate. Pe multe hărți plate (Mercator), Groenlanda pare la fel de mare ca Africa.`
    },
    {
      type: `curiosity`,
      title: `Mercator și cuvântul „Atlas”`,
      html: `<p><b>Gerardus Mercator</b> (Gerhard Kremer, 1512–1594), flamand, a fost și primul care a folosit cuvântul <b>„Atlas”</b> pentru o colecție de hărți, în cinstea mitologicului rege Atlas. Proiecția lui este folosită și astăzi de multe hărți online (precum cele de navigație rutieră) într-o versiune modificată numită „Web Mercator”.</p>`
    },
    {
      type: `text`,
      title: `6. Instrumente moderne: de sus și la calculator`,
      html: `<ul><li><b>Fotografii aeriene</b> (din avioane și drone) și <b>imagini din satelit</b>: <b>teledetecția</b> observă Pământul de departe și măsoară temperatura, vegetația, gheața, poluarea. Programul european <b>Copernicus</b> (sateliții Sentinel) oferă imagini gratuite ale întregii planete.</li><li><b>GPS</b> (sistemul american) și <b>Galileo</b> (sistemul european): sateliți care permit localizarea unui punct oriunde.</li><li><b>GIS</b> (Sisteme Informatice Geografice): programe care suprapun pe o hartă digitală multe „straturi” de date (drumuri, râuri, populație, clădiri, risc de alunecări de teren…). Sunt folosite de primării, de Protecția civilă, de companii.</li></ul>`
    },
    {
      type: `text`,
      title: `7. A citi datele: tabele și grafice`,
      html: `<p>Geograful adună date (locuitori, temperaturi, producții…) și le organizează în <b>tabele</b>. Apoi le transformă în <b>grafice</b>, mai ușor de citit dintr-o privire:</p><ul><li><b>Histogramă</b> (cu coloane sau bare): compară cantități (locuitorii regiunilor).</li><li><b>Diagramă cartesiană</b> (cu linii): arată cum se schimbă o dată în timp (populația Italiei din 1861 până azi).</li><li><b>Diagramă circulară</b> (cu sectoare): arată părțile unui întreg în procente (cum se folosește solul).</li><li><b>Pictogramă</b>: folosește simboluri sau desene (fiecare omuleț = 1 milion de persoane).</li><li><b>Cartogramă</b>: o hartă în care ariile sunt colorate după o dată (densitatea populației).</li><li><b>Climogramă</b>: unește temperaturile (linie) și ploile (coloane) ale unei localități.</li></ul>`
    },
    {
      type: `svg`,
      title: `Trei grafice, trei utilizări`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="15" text-anchor="middle" font-weight="bold" fill="#0f172a"><text x="100" y="28">Histogramă</text><text x="300" y="28">Cartesian</text><text x="500" y="28">Diagramă circulară</text></g><line x1="30" y1="240" x2="180" y2="240" stroke="#334155" stroke-width="2"/><rect x="40" y="110" width="30" height="130" fill="#3b82f6"/><rect x="85" y="160" width="30" height="80" fill="#3b82f6"/><rect x="130" y="80" width="30" height="160" fill="#3b82f6"/><g font-family="sans-serif" font-size="13" text-anchor="middle" fill="#334155"><text x="55" y="258">A</text><text x="100" y="258">B</text><text x="145" y="258">C</text></g><line x1="220" y1="240" x2="380" y2="240" stroke="#334155" stroke-width="2"/><line x1="220" y1="60" x2="220" y2="240" stroke="#334155" stroke-width="2"/><polyline points="230,220 265,190 300,170 335,120 370,90" fill="none" stroke="#dc2626" stroke-width="4"/><g fill="#dc2626"><circle cx="230" cy="220" r="5"/><circle cx="265" cy="190" r="5"/><circle cx="300" cy="170" r="5"/><circle cx="335" cy="120" r="5"/><circle cx="370" cy="90" r="5"/></g><text x="300" y="258" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">timp →</text><circle cx="500" cy="145" r="85" fill="#22c55e"/><path d="M500 145 L500 60 A85 85 0 0 1 581 171 Z" fill="#facc15"/><path d="M500 145 L581 171 A85 85 0 0 1 452 215 Z" fill="#a8a29e"/><g font-family="sans-serif" font-size="13" fill="#0f172a"><text x="525" y="115">câmpuri</text><text x="510" y="195">orașe</text><text x="440" y="140">păduri</text></g><g font-family="sans-serif" font-size="14" text-anchor="middle" fill="#475569"><text x="100" y="285">compară cantități</text><text x="300" y="285">arată o schimbare</text><text x="500" y="285">arată părțile unui întreg</text></g></svg>`,
      caption: `Înainte de a alege un grafic, întreabă-te: vreau să compar, să arăt o evoluție sau să împart un întreg în părți?`
    },
    {
      type: `example`,
      title: `Exemplu practic: densitatea populației`,
      html: `<p><b>Densitatea</b> arată câte persoane trăiesc, în medie, pe 1 km²: se calculează <b>locuitori : suprafață</b>.</p><p>Italia are aproximativ <b>59 de milioane</b> de locuitori pe aproximativ <b>302.000 km²</b>: 59.000.000 : 302.000 ≈ <b>195 locuitori pe km²</b>. Lombardia depășește 400 loc./km², Valle d’Aosta are mai puțin de 40. Pe o <b>cartogramă</b>, regiunile cele mai dense se colorează închis, cele mai puțin dense deschis.</p>`
    },
    {
      type: `curiosity`,
      title: `Cea mai veche hartă a Italiei?`,
      html: `<p>În Val Camonica (Lombardia), la <b>Bedolina</b>, se află o gravură rupestră din epoca fierului (acum aproximativ 2.500 de ani) care reprezintă câmpuri, poteci și case văzute de sus: după mulți cercetători este una dintre cele mai vechi „hărți” din Europa. Încă de atunci, oamenii simțeau nevoia să-și deseneze teritoriul.</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege`,
      intro: `Scara și hărțile nu ți se par clare? Încearcă aceste căi.`,
      tabs: [
        { label: `🏠 Scara în camera ta`, html: `<p>Măsoară-ți camera: de exemplu 4 m × 3 m. Desenează-o într-un caiet cu pătrățele astfel încât <b>1 pătrățel (0,5 cm) = 50 cm</b>: camera devine 8 × 6 pătrățele. Ai făcut un plan la scara <b>1 : 100</b> (0,5 cm pe hartă = 50 cm în realitate, adică de 100 de ori mai mult)! Acum adaugă patul și biroul.</p>`, widget: `areaGrid`, options: { w: 8, h: 6, max: 12 } },
        { label: `🗺️ Hărți ale altor popoare`, html: `<p>Nu toți au desenat lumea cu Nordul sus. Pe hărțile medievale europene (<i>mappae mundi</i>) sus se afla <b>Estul</b>, Orientul (de aici „a se orienta”), cu Ierusalimul în centru. Geograful arab <b>al-Idrisi</b>, la curtea lui Roger al II-lea la Palermo (1154), a pus <b>Sudul</b> sus. Locuitorii Insulelor Marshall din Pacific făceau hărți din <b>bețișoare și scoici</b> pentru a reprezenta valurile și insulele.</p>` },
        { label: `🧭 Exercițiu în 3D`, html: `<p>O hartă fizică traduce în culori un peisaj adevărat. Rotește peisajul 3D și atinge părțile lui: apoi gândește-te ce culoare ar avea pe o hartă fizică (verde = câmpie, galben = deal, maro = munte, alb = ghețari, albastru = ape).</p>`, scene: `terrain`, options: { features: { plain: { label: `Câmpie`, html: `Pe o hartă fizică: <b>verde</b> (sub 200 m).` }, hill: { label: `Deal`, html: `Pe o hartă fizică: <b>galben / portocaliu deschis</b> (aproximativ 200–600 m).` }, mountain: { label: `Munte`, html: `Pe o hartă fizică: <b>maro</b>, tot mai închis cu cât urci.` }, glacier: { label: `Ghețar`, html: `Pe o hartă fizică: <b>alb</b>.` }, river: { label: `Râu`, html: `Pe o hartă fizică: linie <b>albastră</b> care se îngroașă spre gura de vărsare.` }, lake: { label: `Lac`, html: `Pe o hartă fizică: pată <b>albastră</b>.` }, sea: { label: `Mare`, html: `Pe o hartă fizică: <b>albastru</b>, mai închis acolo unde este mai adâncă.` } } } },
        { label: `📱 Ca un zoom`, html: `<p>Gândește-te la o hartă pe smartphone. Când faci <b>zoom înainte</b> vezi străzile și magazinele: este ca și cum ai trece la o <b>scară mare</b>. Când faci <b>zoom înapoi</b> vezi toată Italia sau lumea, dar detaliile dispar: este o <b>scară mică</b>. Segmentul de jos, care se schimbă când faci zoom, este chiar o <b>scară grafică</b>!</p>` }
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test 2`,
      questions: [
        { type: `mc`, q: `Ce hartă ai folosi ca să vezi densitatea populației regiunilor italiene?`, options: [`Hartă fizică`, `Hartă tematică (cartogramă)`, `Plan`, `Hartă nautică`], answer: 1, explain: `O hartă tematică reprezintă un singur subiect.` },
        { type: `mc`, q: `Care grafic este cel mai potrivit pentru a arăta cum s-a schimbat populația în timp?`, options: [`Diagramă circulară`, `Diagramă cartesiană`, `Pictogramă`, `Legendă`], answer: 1, explain: `Linia arată bine evoluția în timp.` },
        { type: `tf`, q: `În proiecția Mercator, Groenlanda apare mai mică decât este.`, answer: false, explain: `Apare mult mai mare: pământurile apropiate de poli sunt mărite.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Hartă conceptuală: instrumentele geografului`,
      nodes: [
        { id: `terra`, label: `Pământul este (aproape) sferic`, x: 50, y: 8, color: `#0ea5e9`, html: `<p>Un geoid, ușor turtit la poli.</p>`, why: `<p>Au demonstrat-o încă grecii: Aristotel observând umbra circulară a Pământului pe Lună în timpul eclipselor; Eratostene (aproximativ 240 î.Hr.) i-a măsurat circumferința comparând umbrele de la Siene și Alexandria.</p>` },
        { id: `globo`, label: `Glob`, x: 18, y: 30, color: `#16a34a`, html: `<p>Model sferic fără deformări.</p>`, why: `<p>Cel mai vechi glob ajuns până la noi este „Erdapfel” al lui Martin Behaim (Nürnberg, 1492): America nu există încă!</p>` },
        { id: `proiezioni`, label: `Proiecții`, x: 50, y: 32, color: `#7c3aed`, html: `<p>Mercator, Peters, Robinson…</p>`, why: `<p>Matematicianul Gauss a demonstrat în 1827 (Theorema egregium) că este imposibil să reprezinți o sferă pe un plan fără a deforma ceva: orice proiecție este un compromis.</p>` },
        { id: `scala`, label: `Scară`, x: 82, y: 30, color: `#ca8a04`, html: `<p>Raportul dintre măsura de pe hartă și măsura reală.</p>`, why: `<p>Este o <b>proporție</b>: același raționament ca la fracții și rapoarte în matematică. Fără scară nu s-ar putea măsura distanțele.</p>` },
        { id: `carte`, label: `Tipuri de hărți`, x: 62, y: 58, color: `#dc2626`, html: `<p>Planuri, topografice, corografice, geografice; fizice, politice, tematice.</p>`, why: `<p>Fiecare hartă pornește de la o întrebare diferită: „unde sunt munții?”, „unde sunt granițele?”, „unde trăiesc mai mulți oameni?”. Curbele de nivel s-au răspândit în secolele al XVIII-lea–al XIX-lea datorită ridicărilor topografice militare.</p>` },
        { id: `orientamento`, label: `Orientare și coordonate`, x: 18, y: 62, color: `#2563eb`, html: `<p>Puncte cardinale, busolă, latitudine și longitudine.</p>`, why: `<p>Busola a ajuns în Europa din China (secolul al XII-lea). Rețeaua de paralele și meridiane a fost folosită încă de Ptolemeu (secolul al II-lea d.Hr.).</p>` },
        { id: `satelliti`, label: `Sateliți, GPS, GIS`, x: 25, y: 90, color: `#475569`, html: `<p>Teledetecție, localizare, hărți digitale pe straturi.</p>`, why: `<p>GPS-ul, născut în scopuri militare în SUA, este deschis civililor din anii ’80–’90; primul GIS a fost creat în Canada în anii ’60 de Roger Tomlinson pentru inventarierea pădurilor.</p>` },
        { id: `grafici`, label: `Tabele și grafice`, x: 72, y: 88, color: `#ea580c`, html: `<p>Histograme, diagrame cartesiene, diagrame circulare, cartograme.</p>`, why: `<p>Graficele moderne (cu bare, cu linii, circulare) au fost inventate de scoțianul William Playfair între 1786 și 1801 pentru a face datele economice ușor de înțeles pentru toți.</p>` }
      ],
      edges: [ [`terra`, `globo`, `se reprezintă cu`], [`terra`, `proiezioni`, `se aplatizează cu`], [`proiezioni`, `carte`, `produc`], [`scala`, `carte`, `reduce`], [`orientamento`, `carte`, `poziționează`], [`satelliti`, `orientamento`, `măsoară`], [`grafici`, `carte`, `cartogramă`], [`satelliti`, `grafici`, `furnizează date`] ]
    }
  ],
  glossary: [
    { t: `Hartă geografică`, d: `Reprezentare redusă, aproximativă și simbolică a suprafeței Pământului.` },
    { t: `Scară`, d: `Raportul dintre o distanță pe hartă și distanța reală corespunzătoare.` },
    { t: `Legendă`, d: `Explicația simbolurilor și a culorilor folosite pe o hartă.` },
    { t: `Curbă de nivel (izohipsă)`, d: `Linie care unește puncte aflate la aceeași altitudine.` },
    { t: `Proiecție`, d: `Metodă matematică de a reprezenta suprafața sferică a Pământului pe un plan.` },
    { t: `Teledetecție`, d: `Observarea Pământului de la distanță, cu avioane, drone sau sateliți.` },
    { t: `GPS`, d: `Sistem de localizare prin satelit.` },
    { t: `GIS`, d: `Sistem informatic geografic: hărți digitale cu straturi de date.` },
    { t: `Cartogramă`, d: `Hartă tematică în care ariile sunt colorate pe baza unei date statistice.` },
    { t: `Densitatea populației`, d: `Numărul mediu de locuitori pe km².` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Ce înseamnă scara 1 : 50.000?`, options: [`1 cm pe hartă = 50.000 cm în realitate`, `1 km pe hartă = 50.000 km`, `Harta este de 50.000 de ori mai mare decât realitatea`, `1 m = 50 km`], answer: 0, explain: `1 cm = 50.000 cm = 500 m.` },
      { type: `num`, q: `Pe o hartă 1 : 200.000, două orașe se află la 5 cm unul de altul. Câți km le despart?`, answer: 10, tol: 0, unit: `km`, explain: `5 × 200.000 = 1.000.000 cm = 10 km.` },
      { type: `num`, q: `Pe o hartă 1 : 1.000.000, un drum lung de 45 km măsoară câți cm?`, answer: 4.5, tol: 0, unit: `cm`, explain: `1 cm = 10 km, deci 45 : 10 = 4,5 cm.` },
      { type: `order`, q: `Ordonează de la cea mai mare scară la cea mai mică`, items: [`1 : 2.000 (plan)`, `1 : 25.000 (topografică)`, `1 : 500.000 (corografică)`, `1 : 20.000.000 (planisferă)`], explain: `Cu cât numitorul este mai mic, cu atât scara este mai mare.` },
      { type: `mc`, q: `Pe o hartă fizică, de ce culoare este de obicei câmpia?`, options: [`Maro`, `Verde`, `Alb`, `Violet`], answer: 1, explain: `Verde pentru câmpii, galben pentru dealuri, maro pentru munți.` },
      { type: `tf`, q: `Dacă curbele de nivel sunt foarte apropiate, panta este abruptă.`, answer: true, explain: `Pe o distanță orizontală mică se urcă mult.` },
      { type: `text`, q: `Cum se numește lista care explică simbolurile și culorile unei hărți?`, answer: [`legendă`, `legenda`], explain: `Legenda.` },
      { type: `mc`, q: `Ce proiecție păstrează unghiurile și este utilă pentru navigație, dar mărește zonele polare?`, options: [`Peters`, `Mercator`, `Robinson`, `Niciuna`], answer: 1, explain: `Proiecția Mercator (1569).` },
      { type: `mc`, q: `Ce grafic folosești pentru a arăta procentele de utilizare a solului?`, options: [`Diagramă circulară`, `Diagramă cartesiană`, `Curbă de nivel`, `Scară grafică`], answer: 0, explain: `Diagrama circulară (cu sectoare) arată părțile unui întreg.` },
      { type: `text`, q: `Cum se numește sistemul european de navigație prin satelit?`, answer: [`galileo`], explain: `Galileo, „GPS-ul european”.` },
      { type: `mc`, q: `Unde răsare Soarele?`, options: [`La Nord`, `La Sud`, `La Est`, `La Vest`], answer: 2, explain: `Răsare la Est (răsărit) și apune la Vest (apus).` }
    ],
    gen: [ [`lengthConv`, 2], [`proportion`, 1] ]
  }
});
