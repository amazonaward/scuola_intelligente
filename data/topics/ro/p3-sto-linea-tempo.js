TOPIC('ro', {
  id: "p3-sto-linea-tempo",
  title: "Axa timpului",
  intro: `Istoricii așază faptele în ordine pe o <b>axă a timpului</b>, ca mărgelele pe un fir. Să învățăm ce înseamnă <b>î.Hr.</b> și <b>d.Hr.</b>, cum se numără <b>deceniile</b>, <b>secolele</b> și <b>mileniile</b> și cum se scriu cu <b>cifre romane</b>.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Ce este axa timpului?",
      html: `<p><b>Axa timpului</b> este o linie dreaptă pe care așezăm faptele în ordinea în care s-au petrecut. Se citește <b>de la stânga la dreapta</b>: în stânga sunt faptele cele mai <b>vechi</b>, în dreapta cele mai <b>recente</b>.</p>
<p>Poți face axa timpului vieții tale: nașterea, primii pași, prima zi de școală, azi… Fiecare bucățică de linie reprezintă același timp (de exemplu <b>1 pătrățel = 1 an</b>): aceasta este <b>scara</b>.</p>
<p>Istoricii fac la fel cu toată istoria omenirii, dar pătrățelele valorează 100 sau 1000 de ani!</p>`
    },
    {
      type: "svg",
      title: "Axa timpului Giuliei",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="lt" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker></defs>
<rect width="600" height="260" fill="#fff7ed"/>
<line x1="40" y1="150" x2="570" y2="150" stroke="#1e293b" stroke-width="5" marker-end="url(#lt)"/>
<g font-size="14" fill="#1e293b" text-anchor="middle">
<line x1="60" y1="140" x2="60" y2="160" stroke="#1e293b" stroke-width="3"/><text x="60" y="180">2017</text>
<line x1="125" y1="140" x2="125" y2="160" stroke="#1e293b" stroke-width="3"/><text x="125" y="180">2018</text>
<line x1="190" y1="140" x2="190" y2="160" stroke="#1e293b" stroke-width="3"/><text x="190" y="180">2019</text>
<line x1="255" y1="140" x2="255" y2="160" stroke="#1e293b" stroke-width="3"/><text x="255" y="180">2020</text>
<line x1="320" y1="140" x2="320" y2="160" stroke="#1e293b" stroke-width="3"/><text x="320" y="180">2021</text>
<line x1="385" y1="140" x2="385" y2="160" stroke="#1e293b" stroke-width="3"/><text x="385" y="180">2022</text>
<line x1="450" y1="140" x2="450" y2="160" stroke="#1e293b" stroke-width="3"/><text x="450" y="180">2023</text>
<line x1="515" y1="140" x2="515" y2="160" stroke="#1e293b" stroke-width="3"/><text x="515" y="180">2024</text>
</g>
<circle cx="60" cy="150" r="9" fill="#ec4899"/><text x="60" y="110" font-size="15" text-anchor="middle" fill="#be185d">👶 se naște</text>
<circle cx="125" cy="150" r="9" fill="#f97316"/><text x="125" y="80" font-size="15" text-anchor="middle" fill="#c2410c">🚶 primii pași</text>
<circle cx="320" cy="150" r="9" fill="#22c55e"/><text x="320" y="110" font-size="15" text-anchor="middle" fill="#15803d">🎒 grădiniță</text>
<circle cx="450" cy="150" r="9" fill="#3b82f6"/><text x="450" y="80" font-size="15" text-anchor="middle" fill="#1d4ed8">✏️ clasa pregătitoare</text>
<text x="60" y="230" font-size="15" fill="#475569">◀ trecut (mai vechi)</text>
<text x="560" y="230" font-size="15" fill="#475569" text-anchor="end">mai recent ▶</text>
</svg>`,
      caption: "Fiecare liniuță este un an: distanța dintre liniuțe este mereu aceeași. Aceasta este scara axei."
    },
    {
      type: "text",
      title: "Pasul 1: anul 1 și nașterea lui Hristos",
      html: `<p>Ca să numărăm anii, avem nevoie de un <b>punct de plecare</b>. În Italia, în România și în cea mai mare parte a lumii se pornește de la <b>nașterea lui Iisus Hristos</b>.</p>
<ul>
<li>Anii de <b>după</b> nașterea lui Hristos se scriu cu <b>d.Hr.</b> („după Hristos”). Se numără înainte: 1, 2, 3… până astăzi. De obicei <b>d.Hr. nu se scrie</b>: „2025” înseamnă „2025 d.Hr.”.</li>
<li>Anii de <b>dinainte</b> se scriu cu <b>î.Hr.</b> („înainte de Hristos”). Se numără <b>invers</b>: cu cât numărul este mai mare, cu atât anul este mai <b>vechi</b>!</li>
</ul>
<p>Așadar <b>3000 î.Hr.</b> este mai vechi decât <b>500 î.Hr.</b>, în timp ce 1500 d.Hr. este mai recent decât 500 d.Hr.</p>
<p>Atenție: <b>anul zero nu există</b>! După 1 î.Hr. urmează imediat 1 d.Hr.</p>`
    },
    {
      type: "svg",
      title: "î.Hr. și d.Hr.: oglinda",
      svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0f9ff"/>
<rect x="20" y="105" width="280" height="30" fill="#fca5a5"/>
<rect x="300" y="105" width="280" height="30" fill="#86efac"/>
<line x1="300" y1="70" x2="300" y2="170" stroke="#7c3aed" stroke-width="6"/>
<text x="300" y="60" font-size="16" text-anchor="middle" fill="#6d28d9" font-weight="bold">✝ nașterea lui Hristos</text>
<g font-size="15" text-anchor="middle" fill="#1e293b">
<text x="60" y="160">3000</text><text x="125" y="160">2000</text><text x="190" y="160">1000</text><text x="255" y="160">1</text>
<text x="345" y="160">1</text><text x="410" y="160">1000</text><text x="475" y="160">2000</text>
</g>
<text x="160" y="95" font-size="18" text-anchor="middle" fill="#991b1b" font-weight="bold">◀ î.Hr. (se numără invers)</text>
<text x="440" y="95" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">d.Hr. (se numără înainte) ▶</text>
<text x="300" y="210" font-size="15" text-anchor="middle" fill="#334155">Cu cât te îndepărtezi de linia violet, cu atât numărul crește</text>
</svg>`,
      caption: "Anii î.Hr. sunt ca o oglindă a anilor d.Hr.: cresc pe măsură ce mergem spre stânga."
    },
    {
      type: "widget",
      title: "Încearcă pe axa numerelor",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 1, marks: [-5, 3] },
      caption: "Imaginează-ți că numerele din stânga lui zero sunt anii î.Hr., iar cele din dreapta sunt anii d.Hr. (dar ține minte: în calendar zero nu există!). De la 5 î.Hr. la 3 d.Hr. trec 7 ani, nu 8, tocmai pentru că lipsește anul zero."
    },
    {
      type: "quiz",
      title: "Mini-test: înainte sau după?",
      questions: [
        { type: "mc", q: "Care an este mai vechi?", options: ["800 î.Hr.", "200 î.Hr.", "100 d.Hr."], answer: 0, explain: "La anii î.Hr., numărul mai mare este cel mai îndepărtat în timp." },
        { type: "tf", q: "Anul 2010 este un an d.Hr.", answer: true, explain: "Când nu scrie nimic, se înțelege d.Hr." },
        { type: "tf", q: "După anul 1 î.Hr. urmează anul 0.", answer: false, explain: "Anul zero nu există: după 1 î.Hr. urmează 1 d.Hr." }
      ]
    },
    {
      type: "text",
      title: "Pasul 2: decenii, secole și milenii",
      html: `<p>Ca să vorbim despre mulți ani la un loc, folosim niște „unități” de măsură ale timpului:</p>
<table>
<tr><td>📅 <b>Anul</b></td><td>12 luni, 365 de zile (366 dacă este bisect)</td></tr>
<tr><td>🔟 <b>Deceniul</b></td><td>10 ani</td></tr>
<tr><td>💯 <b>Secolul</b></td><td>100 de ani</td></tr>
<tr><td>🏛️ <b>Mileniul</b></td><td>1000 de ani</td></tr>
<tr><td>🌍 <b>Era</b></td><td>o perioadă foarte lungă (de exemplu era dinozaurilor)</td></tr>
</table>
<p>Un mileniu = 10 secole = 100 de decenii = 1000 de ani.</p>`
    },
    {
      type: "text",
      title: "Pasul 3: în ce secol suntem?",
      html: `<p><b>Primul secol</b> merge de la anul <b>1</b> până la anul <b>100</b>. Al doilea, de la anul 101 la 200, și tot așa. De aceea anul 1492 se află în <b>secolul al XV-lea</b> (al cincisprezecelea), nu în al paisprezecelea!</p>
<p><b>Trucul:</b> șterge ultimele două cifre și adaugă 1.</p>
<ul>
<li>1492 → 14 + 1 = <b>secolul al 15-lea</b> (XV)</li>
<li>2025 → 20 + 1 = <b>secolul al 21-lea</b> (XXI)</li>
<li>476 → 4 + 1 = <b>secolul al 5-lea</b> (V)</li>
</ul>
<p><b>Atenție:</b> dacă anul se termină cu <b>00</b>, nu adăuga nimic: 1900 este ultimul an al <b>secolului al 19-lea</b> (XIX).</p>
<p>În italiană, secolele de la 1200 încoace au și o poreclă: secolul al XV-lea este <b>Quattrocento</b> (anii 14..), secolul al XX-lea este <b>Novecento</b> (anii 19..).</p>`
    },
    {
      type: "text",
      title: "Secolele se scriu cu cifre romane",
      html: `<p>Pentru secole se folosesc <b>cifrele romane</b>, inventate de vechii romani:</p>
<table>
<tr><td><b>I</b> = 1</td><td><b>V</b> = 5</td><td><b>X</b> = 10</td><td><b>L</b> = 50</td><td><b>C</b> = 100</td><td><b>D</b> = 500</td><td><b>M</b> = 1000</td></tr>
</table>
<ul>
<li>Un simbol <b>după</b> unul mai mare se <b>adună</b>: VI = 5 + 1 = 6; XV = 10 + 5 = 15.</li>
<li>Un simbol <b>înaintea</b> unuia mai mare se <b>scade</b>: IV = 5 − 1 = 4; IX = 10 − 1 = 9; XIX = 10 + 9 = 19.</li>
<li>Același simbol se repetă cel mult de <b>3 ori</b>: III = 3, XXX = 30.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Potrivește secolul cu cifra romană",
      widget: "match",
      options: {
        pairs: [
          ["secolul 5", "V"],
          ["secolul 4", "IV"],
          ["secolul 9", "IX"],
          ["secolul 15", "XV"],
          ["secolul 19", "XIX"],
          ["secolul 21", "XXI"]
        ]
      },
      caption: "Ține minte: un simbol mic înaintea unuia mare se scade."
    },
    {
      type: "widget",
      title: "Marea axă a timpului a istoriei",
      widget: "timeline",
      options: {
        unit: "ani",
        events: [
          { year: -3200, label: "Apare scrierea (sfârșitul Preistoriei)", icon: "✍️" },
          { year: -2560, label: "Piramida lui Keops", icon: "🔺" },
          { year: -776, label: "Primele Olimpiade în Grecia", icon: "🏅" },
          { year: -753, label: "Întemeierea Romei (după legendă)", icon: "🐺" },
          { year: 1, label: "Începutul erei creștine (anul 1 d.Hr.)", icon: "✝️" },
          { year: 476, label: "Sfârșitul Imperiului Roman de Apus", icon: "🏛️" },
          { year: 1492, label: "Columb ajunge în America", icon: "⛵" },
          { year: 1861, label: "Se naște Regatul Italiei", icon: "🇮🇹" },
          { year: 1969, label: "Primul om pe Lună", icon: "🌕" }
        ]
      },
      caption: "Parcurge axa: Preistoria se termină când apare scrierea, acum aproximativ 5200 de ani."
    },
    {
      type: "example",
      title: "Exemplu practic: câți ani au trecut?",
      html: `<p><b>Între doi ani d.Hr.:</b> faci o <b>scădere</b>. Columb a ajuns în America în 1492. Până în 2025 au trecut 2025 − 1492 = <b>533 de ani</b>.</p>
<p><b>Între doi ani î.Hr.:</b> faci tot o <b>scădere</b> (cel mai mare minus cel mai mic). De la piramida lui Keops (2560 î.Hr.) până la întemeierea Romei (753 î.Hr.): 2560 − 753 = <b>1807 ani</b>.</p>
<p><b>Între un an î.Hr. și unul d.Hr.:</b> faci o <b>adunare</b> și scazi 1 (pentru că lipsește anul zero). De la întemeierea Romei (753 î.Hr.) până la sfârșitul Imperiului de Apus (476 d.Hr.): 753 + 476 − 1 = <b>1228 de ani</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: datele familiei tale",
      html: `<p>Întreabă-i pe bunicii tăi în ce an s-au născut. Dacă bunicul s-a născut în <b>1955</b>:</p>
<ul>
<li>s-a născut în <b>secolul al XX-lea</b> (19 + 1 = 20), adică în <b>Novecento</b> (anii 1900);</li>
<li>în <b>anii ’50</b> (deceniul 1950–1959);</li>
<li>în <b>mileniul al II-lea</b> d.Hr. (anii de la 1001 la 2000).</li>
</ul>
<p>Tu, în schimb, te-ai născut în <b>secolul al XXI-lea</b> și în <b>mileniul al III-lea</b>! Încearcă să pui toată familia pe aceeași axă a timpului.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… cel care a inventat „î.Hr.” și „d.Hr.” a greșit socotelile?",
      html: `<p>Modul de a număra anii de la nașterea lui Hristos a fost propus în anul <b>525</b> de un călugăr, <b>Dionisie Exiguul</b> (Dionisie cel Mic). Dar a făcut o mică greșeală de calcul: astăzi istoricii cred că Iisus s-a născut cu câțiva ani mai devreme, între <b>7 și 4 î.Hr.</b>! Însă sistemul era deja folosit de toți și nimeni nu l-a mai schimbat.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… noul mileniu a început în 2001?",
      html: `<p>Pe 31 decembrie 1999 toată lumea a sărbătorit sosirea anului 2000 ca început al noului mileniu. Dar matematicienii au protestat: întrucât nu există anul zero, primul mileniu merge de la 1 la 1000, al doilea de la 1001 la 2000… iar <b>al treilea mileniu</b> începe la <b>1 ianuarie 2001</b>!</p>`
    },
    {
      type: "3d",
      title: "Harta 3D spațiu-timp: istoria în lume",
      scene: "spacetime",
      caption: "Baza este harta, înălțimea este timpul: cu cât un eveniment este mai sus, cu atât este mai recent. Folosește cursorul timpului ca să vezi istoria cum „crește”. Atinge un eveniment: săgețile leagă cauzele de efecte.",
      options: {
        lat: [-10, 62],
        lon: [-90, 125],
        years: [-3500, 2000],
        places: [
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 30.0, lon: 31.2, label: "Egipt" },
          { lat: 32.5, lon: 44.4, label: "Mesopotamia" },
          { lat: 37.9, lon: 23.7, label: "Grecia" },
          { lat: 35.0, lon: 110.0, label: "China" },
          { lat: 25.0, lon: -77.0, label: "Americile" }
        ],
        events: [
          { id: "scrittura", lat: 31.3, lon: 45.6, year: -3200, label: "Apare scrierea", html: "În <b>Mesopotamia</b>, în orașul Uruk, oamenii încep să graveze semne pe tăblițe de lut ca să numere grâul și vitele. Odată cu scrierea se termină <b>Preistoria</b> și începe <b>Istoria</b>." },
          { id: "piramidi", lat: 29.98, lon: 31.13, year: -2560, label: "Piramida lui Keops", html: "În Egipt se construiește Marea Piramidă. Egiptenii aveau deja un calendar de <b>365 de zile</b> pentru a prevedea revărsările Nilului.", causes: ["scrittura"] },
          { id: "olimpiadi", lat: 37.64, lon: 21.63, year: -776, label: "Primele Olimpiade", html: "În Grecia, la Olimpia, au loc primele jocuri olimpice înregistrate. Grecii numărau anii în grupuri de 4, <b>Olimpiadele</b>: a spune „anul al 2-lea al Olimpiadei a 10-a” era ca și cum ai spune o dată.", causes: ["scrittura"] },
          { id: "roma", lat: 41.89, lon: 12.49, year: -753, label: "Întemeierea Romei", html: "După legendă, Romulus întemeiază Roma la <b>21 aprilie 753 î.Hr.</b>. Romanii numărau anii „<b>ab Urbe condita</b>”, adică de la întemeierea orașului.", causes: ["olimpiadi"] },
          { id: "giuliano", lat: 41.9, lon: 12.48, year: -46, label: "Calendarul lui Iulius Cezar", html: "<b>Iulius Cezar</b> reformează calendarul roman: an de 365 de zile cu o zi în plus la fiecare 4 ani (anul <b>bisect</b>). Se numește <b>calendarul iulian</b>.", causes: ["roma", "piramidi"] },
          { id: "dionigi", lat: 41.91, lon: 12.46, year: 525, label: "Dionisie numără de la Hristos", html: "La Roma, călugărul <b>Dionisie Exiguul</b> propune să se numere anii de la nașterea lui Iisus (<i>Anno Domini</i>). Sistemul se va răspândi încet în Europa în secolele următoare.", causes: ["giuliano"] },
          { id: "egira", lat: 24.47, lon: 39.61, year: 622, label: "Hegira", html: "Profetul <b>Mahomed</b> se mută de la Mecca la Medina: este <b>Hegira</b>. De la acest an, musulmanii numără anii calendarului islamic, care urmează Luna." },
          { id: "colombo", lat: 24.0, lon: -74.5, year: 1492, label: "Columb în America", html: "Cristofor Columb ajunge în America: pentru mulți istorici aici se încheie <b>Evul Mediu</b> și începe <b>Epoca modernă</b>." },
          { id: "gregoriano", lat: 41.9, lon: 12.45, year: 1582, label: "Calendarul gregorian", html: "Calendarul iulian era puțin prea lung și se „mutase” cu 10 zile. Papa <b>Grigore al XIII-lea</b> îl corectează: după 4 octombrie 1582 urmează imediat <b>15 octombrie</b>! Este calendarul pe care îl folosim astăzi în aproape toată lumea.", causes: ["giuliano", "dionigi"] },
          { id: "luna", lat: 28.6, lon: -80.6, year: 1969, label: "Primul om pe Lună", html: "La 20 iulie 1969, misiunea <b>Apollo 11</b>, plecată din Florida, îi duce pe Neil Armstrong și Buzz Aldrin pe Lună. O dată pe care toți oamenii din lume o scriu la fel, datorită calendarului gregorian.", causes: ["gregoriano"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Anul 525: de unde începem să numărăm?",
      html: `<p>Ești un călugăr priceput la calcule și lucrezi la <b>Roma</b>. Papa îți cere să pregătești tabelele cu datele Paștelui pentru anii următori.</p>
<p>Dar există o problemă: fiecare numără anii în felul lui. Tabelele pe care le primești numără de la domnia împăratului <b>Dioclețian</b>, care îi persecutase pe creștini. Alții numără de la <b>întemeierea Romei</b>, grecii de la <b>Olimpiade</b>…</p>`,
      question: "Ce punct de plecare alegi?",
      options: [
        { label: "Continui să număr de la domnia lui Dioclețian: toți îl folosesc deja în aceste tabele.", outcome: "Ar fi alegerea cea mai comodă, dar pentru creștini era neplăcut să-și amintească în fiecare an de un persecutor." },
        { label: "Număr de la întemeierea Romei (ab Urbe condita).", outcome: "Era o dată celebră, dar legată doar de un oraș și de o legendă; iar Imperiul Roman de Apus nu mai exista din 476." },
        { label: "Număr de la nașterea lui Iisus Hristos.", outcome: "Un punct de plecare important pentru toți creștinii din Europa, fără să amintească de un persecutor. Dar trebuia calculat când se născuse Iisus, și nu era ușor." }
      ],
      answer: 2,
      explain: "<b>Dionisie Exiguul</b> a ales să numere anii „<i>ab incarnatione Domini</i>”, de la nașterea lui Hristos. Sistemul său s-a răspândit încet: l-a folosit călugărul englez <b>Beda</b> în anul 731 în istoria Angliei, apoi imperiul lui Carol cel Mare. Anii „înainte de Hristos” au fost folosiți mult mai târziu. Dionisie a greșit cu câțiva ani, iar în Europa <b>zero</b> nu era încă cunoscut (a venit din India prin arabi și a fost răspândit de Fibonacci în 1202): de aceea anul zero nu există."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege axa timpului",
      intro: "Timpul nu se vede și nu se atinge: iată alte moduri de a-l „vedea”.",
      tabs: [
        {
          label: "🌏 Calendare din alte țări",
          html: `<p>Nu toată lumea a numărat anii ca noi! Iată câteva exemple:</p>
<ul>
<li>🕌 <b>Calendarul islamic</b>: numără de la <b>Hegira</b> (622 d.Hr.) și urmează Luna, de aceea anul este mai scurt (354 sau 355 de zile).</li>
<li>✡️ <b>Calendarul ebraic</b>: numără de la crearea lumii, după tradiție fixată în <b>3761 î.Hr.</b>: de aceea anul lui are un număr mult mai mare decât al nostru.</li>
<li>🇯🇵 <b>Japonia</b>: pe lângă calendarul nostru folosește <b>erele</b> împăraților. Din 2019 este era <b>Reiwa</b>: 2025 este „Reiwa 7”.</li>
<li>🇹🇭 <b>Thailanda</b>: numără de la moartea lui Buddha și adaugă <b>543</b> la anii noștri: 2025 este 2568.</li>
<li>🇨🇳 <b>China</b>: Anul Nou chinezesc își schimbă data în fiecare an, iar fiecărui an îi este legat un animal (șobolan, bou, tigru…).</li>
</ul>`
        },
        {
          label: "📏 Metrul timpului",
          html: `<p>Ia o ruletă de croitorie lungă de <b>150 cm</b> și închipuie-ți că fiecare centimetru valorează <b>100 de ani</b> (un secol):</p>
<ul>
<li>toată ruleta = 15.000 de ani, adică de la Paleolitic până astăzi;</li>
<li>scrierea apare la aproximativ <b>52 cm</b> de capăt;</li>
<li>Roma este întemeiată la aproximativ <b>28 cm</b> de capăt;</li>
<li>Columb este la aproximativ <b>5 cm</b> de capăt;</li>
<li>toată viața ta (8 ani) încape în <b>mai puțin de un milimetru</b>!</li>
</ul>
<p>Ca să simți cât de lungă este istoria, poți face la fel cu o <b>rolă de hârtie igienică</b>, o foaie pentru fiecare secol.</p>`
        },
        {
          label: "🧊 Secole ca niște cubulețe",
          html: `<p>Construiește anii din cubulețe: o <b>placă</b> de 100 de cubulețe este un <b>secol</b>, o <b>baghetă</b> de 10 este un <b>deceniu</b>, un <b>cubuleț</b> este un an. Mișcă cursorul și încearcă cu 476 sau 1492: câte plăci (secole întregi) sunt? Secolul în care cade anul este cel <b>următor</b>: cu 14 plăci și ceva în plus, ești în secolul al 15-lea!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 476 }
        },
        {
          label: "🎵 Poezioara",
          html: `<p>O poezioară pentru a ține minte regulile:</p>
<p style="font-size:1.15em"><i>Înainte de Hristos număr înapoi,<br>cu cât numărul e mai mare, cu atât e mai vechi, să știi.<br>După Hristos număr înainte,<br>și anii cresc, unul după altul, cuminte.<br>La secole, trucul e regal:<br>două cifre tai, unu adaugi, și e normal!</i></p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: de ce măsurăm timpul așa?",
      nodes: [
        { id: "cielo", label: "☀️🌙 Cerul", x: 50, y: 6, color: "#f59e0b", html: "Ziua, luna și anul vin din mișcarea Pământului, a Lunii și a Soarelui.", why: "Ziua este o rotație a Pământului; luna vine de la fazele Lunii (aproximativ 29 de zile și jumătate); anul este o rotație completă a Pământului în jurul Soarelui: aproximativ <b>365 de zile și 6 ore</b>." },
        { id: "anno", label: "📅 Anul", x: 20, y: 25, color: "#ef4444", html: "365 de zile, 366 în anii bisecți.", why: "Cele 6 ore în plus în fiecare an, după 4 ani, fac o zi întreagă: iată de ce la fiecare 4 ani există 29 februarie. Ideea a fost pusă în practică de Iulius Cezar în 46 î.Hr. cu ajutorul astronomului Sosigene din Alexandria." },
        { id: "decimale", label: "🔟 A număra din 10 în 10", x: 80, y: 25, color: "#3b82f6", html: "Deceniile, secolele și mileniile sunt grupuri de 10, 100 și 1000 de ani.", why: "Numărăm în grupuri de zece pentru că avem 10 degete! Sistemul nostru de numere, cu cifrele de la 0 la 9, s-a născut în India și a ajuns în Europa datorită arabilor." },
        { id: "zero", label: "Plecare: anul 1", x: 50, y: 42, color: "#7c3aed", html: "Anii se numără de la nașterea lui Hristos: î.Hr. și d.Hr.", why: "A fost propus de Dionisie Exiguul în 525. A ales anul 1, pentru că în Europa zero nu se folosea încă: de aceea de la 1 î.Hr. se trece la 1 d.Hr." },
        { id: "ac", label: "î.Hr.", x: 20, y: 62, color: "#dc2626", html: "Anii dinainte de Hristos, numărați invers.", why: "Cu cât ne îndepărtăm de anul 1, cu atât numărul crește, ca temperaturile sub zero pe termometru: −10 °C este mai frig decât −2 °C." },
        { id: "dc", label: "d.Hr.", x: 80, y: 62, color: "#16a34a", html: "Anii de după Hristos, numărați înainte.", why: "Sunt anii pe care îi folosim în fiecare zi; de aceea „d.Hr.” de obicei nu se scrie." },
        { id: "secolo", label: "Secole în cifre romane", x: 50, y: 78, color: "#0ea5e9", html: "Primul secol merge de la 1 la 100; al XXI-lea de la 2001 la 2100.", why: "Se pornește de la anul 1 și nu de la 0, așa că fiecare secol se termină cu anul „rotund” (100, 200… 2000). Cifrele romane se folosesc din tradiție, pentru că latina a fost limba culturii în Europa timp de secole." },
        { id: "periodi", label: "Preistorie și Istorie", x: 50, y: 95, color: "#92400e", html: "Marile perioade: Preistoria, Antichitatea, Evul Mediu, Epoca modernă, Epoca contemporană.", why: "Istoricii au ales câteva date importante drept „granițe”: scrierea (aproximativ 3200 î.Hr.), sfârșitul Imperiului Roman de Apus (476), descoperirea Americii (1492), Revoluția franceză (1789)." }
      ],
      edges: [
        ["cielo", "anno", "dă măsura"],
        ["cielo", "decimale", "măsurat în grupuri"],
        ["anno", "zero", "numărați de la un punct de"],
        ["decimale", "secolo", "grupuri de 100"],
        ["zero", "ac", "înainte"],
        ["zero", "dc", "după"],
        ["dc", "secolo", "se grupează în"],
        ["secolo", "periodi", "formează marile"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Axa timpului</b> se citește de la stânga (mai vechi) la dreapta (mai recent).</li>
<li><b>î.Hr.</b> = înainte de Hristos, se numără invers; <b>d.Hr.</b> = după Hristos, se numără înainte. Anul zero nu există.</li>
<li><b>Deceniul</b> = 10 ani; <b>secolul</b> = 100 de ani; <b>mileniul</b> = 1000 de ani.</li>
<li>Ca să afli secolul: șterge ultimele două cifre și adaugă 1 (dacă anul nu se termină cu 00).</li>
<li>Secolele se scriu cu <b>cifre romane</b>: XV, XX, XXI…</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: secole și cifre romane",
      questions: [
        { type: "mc", q: "În ce secol este anul 1861?", options: ["XVIII", "XIX", "XX"], answer: 1, explain: "18 + 1 = 19, adică secolul al XIX-lea." },
        { type: "num", q: "Câți ani sunt în 3 secole?", answer: 300, tol: 0, unit: "ani", explain: "1 secol = 100 de ani, deci 3 secole = 300 de ani." },
        { type: "text", q: "Scrie cu cifre romane numărul 9.", answer: ["ix"], explain: "IX = 10 − 1 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Axa timpului", d: "Linie pe care se așază faptele în ordine, de la cel mai vechi la cel mai recent." },
    { t: "î.Hr.", d: "Înainte de Hristos: anii dinaintea nașterii lui Hristos, numărați invers." },
    { t: "d.Hr.", d: "După Hristos: anii de după nașterea lui Hristos, numărați înainte." },
    { t: "Deceniu", d: "Perioadă de 10 ani." },
    { t: "Secol", d: "Perioadă de 100 de ani." },
    { t: "Mileniu", d: "Perioadă de 1000 de ani." },
    { t: "An bisect", d: "An de 366 de zile, cu 29 februarie; vine la fiecare 4 ani (cu câteva excepții)." },
    { t: "Cifre romane", d: "Sistem de numerație al vechilor romani, cu literele I, V, X, L, C, D, M." },
    { t: "Preistorie", d: "Perioada vieții oamenilor dinainte de inventarea scrierii." },
    { t: "Calendar", d: "Sistem pentru a împărți și a număra timpul în zile, luni și ani." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cum se citește axa timpului?", options: ["De la dreapta la stânga", "De la stânga (mai vechi) la dreapta (mai recent)", "De sus în jos"], answer: 1, explain: "În stânga sunt faptele cele mai vechi, în dreapta cele mai recente." },
      { type: "mc", q: "Care an este mai vechi?", options: ["1500 î.Hr.", "300 î.Hr.", "1500 d.Hr."], answer: 0, explain: "La anii î.Hr., numărul mai mare este cel mai vechi." },
      { type: "num", q: "Câți ani sunt într-un mileniu?", answer: 1000, tol: 0, unit: "ani", explain: "Un mileniu = 1000 de ani = 10 secole." },
      { type: "mc", q: "În ce secol a avut loc descoperirea Americii (1492)?", options: ["secolul al XIV-lea", "secolul al XV-lea", "secolul al XVI-lea"], answer: 1, explain: "14 + 1 = 15: secolul al XV-lea." },
      { type: "tf", q: "Anul 1900 aparține secolului al XIX-lea.", answer: true, explain: "Anii care se termină cu 00 sunt ultimul an al secolului: al XIX-lea merge de la 1801 la 1900." },
      { type: "text", q: "Scrie cu cifre romane secolul în care trăim (al 21-lea).", answer: ["xxi"], explain: "XXI = 10 + 10 + 1 = 21." },
      { type: "num", q: "Columb a ajuns în America în 1492. Câți ani mai târziu, în 1969, omul a ajuns pe Lună?", answer: 477, tol: 0, unit: "ani", explain: "1969 − 1492 = 477 de ani." },
      { type: "tf", q: "Anul zero există.", answer: false, explain: "După 1 î.Hr. urmează imediat 1 d.Hr." },
      { type: "order", q: "Pune în ordine de la cel mai vechi la cel mai recent.", items: ["Apariția scrierii (3200 î.Hr.)", "Întemeierea Romei (753 î.Hr.)", "Sfârșitul Imperiului Roman de Apus (476)", "Sosirea lui Columb în America (1492)"], explain: "Mai întâi anii î.Hr. (de la cel mai mare la cel mai mic), apoi anii d.Hr. (de la cel mai mic la cel mai mare)." },
      { type: "mc", q: "Câte decenii sunt într-un secol?", options: ["10", "100", "1000"], answer: 0, explain: "100 de ani : 10 ani = 10 decenii." },
      { type: "mc", q: "Ce înseamnă „d.Hr.”?", options: ["Data Calendarului Hotărât", "După Hristos", "Deceniul Hotărâtor"], answer: 1, explain: "d.Hr. înseamnă „după Hristos”." },
      { type: "mc", q: "Care cifră romană valorează 4?", options: ["IIII", "VI", "IV"], answer: 2, explain: "IV = 5 − 1 = 4 (I-ul din fața lui V se scade)." }
    ]
  }
});
