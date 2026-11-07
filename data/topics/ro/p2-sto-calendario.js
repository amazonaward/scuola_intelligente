TOPIC('ro', {
  id: "p2-sto-calendario",
  title: "Calendarul",
  intro: "Când este ziua ta de naștere? 🎂 Câte zile mai sunt până la vacanță? 🏖️ <b>Calendarul</b> ne ajută să numărăm timpul lung: <b>zilele</b>, <b>săptămânile</b>, <b>lunile</b>, <b>anotimpurile</b> și <b>anii</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Ziua și săptămâna",
      html: `<p>O <b>zi</b> durează <b>24 de ore</b>: există partea cu lumină (ziua) și partea întunecată (noaptea). 🌞🌙</p>
<p><b>7 zile</b> alcătuiesc o <b>săptămână</b>:</p>
<p><b>luni – marți – miercuri – joi – vineri – sâmbătă – duminică</b></p>
<p>Apoi se reia de la capăt, ca într-un cerc! 🔄</p>
<ul>
<li><b>Ieri</b> = ziua dinainte de azi.</li>
<li><b>Azi</b> = ziua în care ne aflăm.</li>
<li><b>Mâine</b> = ziua de după azi.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Roata săptămânii",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<circle cx="300" cy="150" r="115" fill="none" stroke="#c4b5fd" stroke-width="10"/>
<g font-size="17" font-weight="bold" text-anchor="middle">
<circle cx="300" cy="35" r="34" fill="#fecaca"/><text x="300" y="41" fill="#7f1d1d">luni</text>
<circle cx="390" cy="78" r="34" fill="#fed7aa"/><text x="390" y="84" fill="#7c2d12">marți</text>
<circle cx="412" cy="175" r="34" fill="#fef08a"/><text x="412" y="181" fill="#713f12">miercuri</text>
<circle cx="350" cy="255" r="34" fill="#bbf7d0"/><text x="350" y="261" fill="#14532d">joi</text>
<circle cx="250" cy="255" r="34" fill="#bae6fd"/><text x="250" y="261" fill="#0c4a6e">vineri</text>
<circle cx="188" cy="175" r="34" fill="#c7d2fe"/><text x="188" y="181" fill="#312e81">sâmbătă</text>
<circle cx="210" cy="78" r="34" fill="#f5d0fe"/><text x="210" y="84" fill="#701a75">duminică</text>
</g>
<text x="300" y="145" font-size="24" text-anchor="middle" fill="#5b21b6" font-weight="bold">7 zile</text>
<text x="300" y="172" font-size="20" text-anchor="middle" fill="#5b21b6">și apoi se reia ↻</text>
</svg>`,
      caption: "După duminică se întoarce luni: săptămâna este un ciclu."
    },
    {
      type: "text",
      title: "Cele 12 luni ale anului",
      html: `<p>Un <b>an</b> are <b>12 luni</b>:</p>
<p>ianuarie, februarie, martie, aprilie, mai, iunie, iulie, august, septembrie, octombrie, noiembrie, decembrie.</p>
<p>Lunile nu sunt toate la fel de lungi. O poezioară ne ajută:</p>
<p>🎵 <i>„Treizeci de zile are noiembrie, cu aprilie, iunie și septembrie. Februarie are doar douăzeci și opt, iar toate celelalte au treizeci și una.”</i></p>
<p>Luna scurtă este <b>februarie</b>: are 28 de zile, dar din 4 în 4 ani are <b>29</b>!</p>`
    },
    {
      type: "widget",
      title: "Câte zile are luna?",
      widget: "classify",
      options: {
        groups: ["30 de zile", "31 de zile", "28 sau 29 de zile"],
        items: [
          ["ianuarie", 1], ["februarie", 2], ["martie", 1], ["aprilie", 0],
          ["mai", 1], ["iunie", 0], ["iulie", 1], ["august", 1],
          ["septembrie", 0], ["octombrie", 1], ["noiembrie", 0], ["decembrie", 1]
        ]
      },
      caption: "Repetă poezioara sau folosește trucul cu încheieturile degetelor (îl găsești mai jos)!"
    },
    {
      type: "quiz",
      title: "Mini-test: zile și luni",
      questions: [
        { type: "num", q: "Câte zile are o săptămână?", answer: 7, explain: "Luni, marți, miercuri, joi, vineri, sâmbătă, duminică: 7 zile." },
        { type: "mc", q: "Dacă azi este miercuri, mâine este…", options: ["marți", "joi", "vineri"], answer: 1, explain: "După miercuri vine joi." },
        { type: "mc", q: "Care lună are 28 sau 29 de zile?", options: ["Februarie", "Aprilie", "August"], answer: 0, explain: "Februarie este cea mai scurtă lună." }
      ]
    },
    {
      type: "text",
      title: "Cele patru anotimpuri",
      html: `<p>Anul este împărțit și în <b>4 anotimpuri</b>, fiecare de aproximativ 3 luni:</p>
<ul>
<li>🌸 <b>Primăvara</b>: de pe la 21 martie. Zilele se lungesc, înfloresc florile.</li>
<li>☀️ <b>Vara</b>: de pe la 21 iunie. Este cald, zilele sunt cele mai lungi.</li>
<li>🍂 <b>Toamna</b>: de pe la 23 septembrie. Cad frunzele, se culege strugurele.</li>
<li>❄️ <b>Iarna</b>: de pe la 21 decembrie. Este frig, zilele sunt cele mai scurte.</li>
</ul>
<p>Anotimpurile există pentru că Pământul se rotește în jurul Soarelui <b>înclinat</b>: jumătate din an emisfera noastră primește razele mai drepte (este cald), cealaltă jumătate mai piezișe (este frig).</p>`
    },
    {
      type: "svg",
      title: "Anul într-un cerc",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<path d="M300 160 L300 20 A140 140 0 0 1 440 160 Z" fill="#bbf7d0" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L440 160 A140 140 0 0 1 300 300 Z" fill="#fde68a" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L300 300 A140 140 0 0 1 160 160 Z" fill="#fdba74" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L160 160 A140 140 0 0 1 300 20 Z" fill="#bfdbfe" stroke="#ffffff" stroke-width="4"/>
<text x="360" y="95" font-size="34" text-anchor="middle">🌸</text>
<text x="360" y="245" font-size="34" text-anchor="middle">☀️</text>
<text x="240" y="245" font-size="34" text-anchor="middle">🍂</text>
<text x="240" y="95" font-size="34" text-anchor="middle">❄️</text>
<text x="470" y="60" font-size="18" fill="#166534" font-weight="bold">primăvara</text>
<text x="470" y="82" font-size="15" fill="#166534">mar · apr · mai</text>
<text x="470" y="260" font-size="18" fill="#a16207" font-weight="bold">vara</text>
<text x="470" y="282" font-size="15" fill="#a16207">iun · iul · aug</text>
<text x="20" y="260" font-size="18" fill="#c2410c" font-weight="bold">toamna</text>
<text x="20" y="282" font-size="15" fill="#c2410c">sep · oct · noi</text>
<text x="20" y="60" font-size="18" fill="#1d4ed8" font-weight="bold">iarna</text>
<text x="20" y="82" font-size="15" fill="#1d4ed8">dec · ian · feb</text>
<circle cx="300" cy="160" r="30" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
<text x="300" y="167" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">an</text>
</svg>`,
      caption: "Cele 4 anotimpuri se repetă în fiecare an, mereu în aceeași ordine (lunile indicate sunt aproximative: anotimpurile încep pe la 21 ale lunii)."
    },
    {
      type: "remember",
      title: "Numerele calendarului",
      html: `<ul>
<li>1 <b>săptămână</b> = 7 zile</li>
<li>1 <b>lună</b> = 28, 29, 30 sau 31 de zile (aproximativ 4 săptămâni)</li>
<li>1 <b>an</b> = 12 luni = <b>365 de zile</b></li>
<li>din 4 în 4 ani există anul <b>bisect</b>, cu <b>366 de zile</b> (29 februarie). Următorii: <b>2028</b>, 2032…</li>
<li>1 <b>anotimp</b> = aproximativ 3 luni; 4 anotimpuri într-un an.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu: cât mai este până la ziua de naștere? 🎂",
      html: `<p>Azi este <b>10 martie</b>. Ziua de naștere a Sofiei este pe <b>17 martie</b>.</p>
<p>Număr pe calendar: 11, 12, 13, 14, 15, 16, 17 → mai sunt <b>7 zile</b>, adică <b>o săptămână</b>!</p>
<p>Dacă azi este marți, și ziua de naștere va fi tot într-o marți (după 7 zile ajungi din nou la aceeași zi a săptămânii).</p>`
    },
    {
      type: "example",
      title: "Exemplu: cum se scrie data ✏️",
      html: `<p>În Italia (ca și la noi) data se scrie: <b>zi – lună – an</b>.</p>
<ul>
<li>În cuvinte: <b>marți, 3 noiembrie 2026</b>;</li>
<li>cu cifre: <b>3.11.2026</b> (11 pentru că noiembrie este a <b>11-a</b> lună).</li>
</ul>
<p>În caiet, în fiecare dimineață, scriem data sus: așa știm când am făcut fiecare lucrare.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Numele zilelor vin de pe cer",
      html: `<p>Romanii au dat zilelor numele <b>astrelor</b> pe care le vedeau mișcându-se pe cer:</p>
<ul>
<li><b>luni</b> = ziua <b>Lunii</b> 🌙; <b>marți</b> = a lui <b>Marte</b>; <b>miercuri</b> = a lui <b>Mercur</b>; <b>joi</b> = a lui <b>Jupiter</b>; <b>vineri</b> = a lui <b>Venus</b>.</li>
<li><b>sâmbătă</b> vine din ebraicul <i>șabat</i>, ziua de odihnă; <b>duminică</b> din latinescul <i>dies Dominica</i>, „ziua Domnului”.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Septembrie era a șaptea lună",
      html: `<p>Primul calendar al Romei începea în <b>martie</b>. De aceea <b>sept</b>embrie era a 7-a lună, <b>oct</b>ombrie a 8-a, <b>noi</b>embrie a 9-a și <b>dec</b>embrie a 10-a!</p>
<p>Apoi anul a început în ianuarie, iar numele au rămas „greșite”. <b>Iulie</b> se numește așa în cinstea lui <b>Iulius Cezar</b>, iar <b>august</b> în cinstea împăratului <b>Augustus</b>.</p>`
    },
    {
      type: "3d",
      title: "Călătorie în timp: istoria calendarului",
      scene: "spacetime",
      caption: "Harta este baza, înălțimea este timpul: cu cât un eveniment este mai sus, cu atât este mai recent. Atinge evenimentele și urmărește săgețile de la cauză la efect.",
      options: {
        lat: [20, 60],
        lon: [-10, 50],
        years: [-3000, 2000],
        places: [
          { lat: 30.05, lon: 31.23, label: "Egipt" },
          { lat: 32.54, lon: 44.42, label: "Babilon" },
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 24.47, lon: 39.61, label: "Medina" },
          { lat: 55.75, lon: 37.6, label: "Moscova" }
        ],
        events: [
          { id: "egizi", lat: 29.9, lon: 31.2, year: -2800, label: "Anul egiptean de 365 de zile", html: "Egiptenii observă că revărsările Nilului revin la aproximativ 365 de zile. Creează un calendar cu <b>12 luni de câte 30 de zile</b> plus <b>5 zile de sărbătoare</b>: în total 365!" },
          { id: "settimana", lat: 32.54, lon: 44.42, year: -600, label: "Săptămâna de 7 zile", html: "La babilonieni și la evrei se răspândește <b>săptămâna de 7 zile</b>. Poate vine de la Lună: fiecare fază a ei (nouă, crescătoare, plină, descrescătoare) durează aproximativ 7 zile." },
          { id: "romolo", lat: 41.9, lon: 12.5, year: -753, label: "Calendarul lui Romulus", html: "După legendă, Romulus dă Romei un calendar de <b>10 luni</b> care începe în <b>martie</b>. Mai târziu, regele Numa adaugă ianuarie și februarie." },
          { id: "cesare", lat: 41.89, lon: 12.49, year: -46, label: "Iulius Cezar reformează calendarul", html: "Calendarul roman era plin de greșeli. <b>Iulius Cezar</b>, sfătuit de astronomul <b>Sosigene din Alexandria</b>, creează un an de <b>365 de zile</b> cu o zi în plus <b>din 4 în 4 ani</b> (anul bisect). Este <b>calendarul iulian</b>.", causes: ["egizi", "romolo"] },
          { id: "agosto", lat: 41.91, lon: 12.48, year: -8, label: "Se naște luna august", html: "Luna numită <i>Sextilis</i> (a șasea) primește numele de <b>Augustus</b>, în cinstea primului împărat roman. Luna lui Iulius Cezar devenise deja <b>iulie</b>.", causes: ["cesare"] },
          { id: "dionigi", lat: 41.88, lon: 12.5, year: 525, label: "Anii de la nașterea lui Hristos", html: "Călugărul <b>Dionisie Exiguul</b>, la Roma, propune să se numere anii începând de la nașterea lui Isus. De aceea astăzi spunem „înainte de Hristos” (î.Hr.) și „după Hristos” (d.Hr.).", causes: ["cesare"] },
          { id: "egira", lat: 24.47, lon: 39.61, year: 622, label: "Calendarul islamic", html: "Profetul <b>Mahomed</b> se mută de la Mecca la Medina (<b>Hegira</b>). Din acel an începe calendarul islamic, bazat pe <b>Lună</b>: 12 luni lunare, aproximativ <b>354 de zile</b>.", causes: ["settimana"] },
          { id: "gregorio", lat: 41.9, lon: 12.45, year: 1582, label: "Calendarul gregorian", html: "Calendarul iulian era puțin prea lung: în 1600 de ani adunase <b>10 zile</b> de întârziere față de anotimpuri. Papa <b>Grigore al XIII-lea</b>, cu calculele medicului calabrez <b>Luigi Lilio</b>, hotărăște ca după joi, <b>4 octombrie 1582</b>, să urmeze vineri, <b>15 octombrie</b>. Este calendarul pe care îl folosim astăzi!", causes: ["cesare", "dionigi"] },
          { id: "russia", lat: 55.75, lon: 37.6, year: 1918, label: "Rusia își schimbă calendarul", html: "Rusia folosea încă calendarul iulian: de aceea „Revoluția din Octombrie” din 1917 a avut loc, pentru noi, în <b>noiembrie</b>! În <b>1918</b> și Rusia trece la calendarul gregorian, sărind 13 zile.", causes: ["gregorio"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Roma, 1582: ești papa Grigore al XIII-lea",
      html: `<p>Astronomii îți aduc o veste proastă: calendarul lui Iulius Cezar este <b>puțin prea lung</b> (aproximativ 11 minute pe an). Pare nimic, dar după atâtea secole calendarul are <b>10 zile întârziere</b> față de Soare!</p>
<p>Adevărata primăvară începe pe 11 martie, în loc de 21, iar sărbătoarea <b>Paștelui</b>, care se calculează după primăvară, riscă să cadă într-o zi greșită.</p>`,
      question: "Ce hotărăști?",
      options: [
        { label: "Lăsăm totul cum este: 10 zile nu sunt o problemă.", outcome: "Întârzierea ar continua să crească: peste câteva mii de ani Crăciunul ar cădea toamna și apoi vara!" },
        { label: "Sărim 10 zile o singură dată și schimbăm regula anilor bisecți.", outcome: "O dată, calendarul „sare” înainte și se potrivește din nou cu Soarele. Cu o regulă nouă (eliminăm 3 ani bisecți la fiecare 400 de ani), greșeala devine foarte mică." },
        { label: "Adăugăm din când în când o lună întreagă în plus.", outcome: "Calendarul ar deveni dezordonat: nimeni nu ar mai ști în ce lună se află, iar contractele și sărbătorile ar trebui refăcute." }
      ],
      answer: 1,
      explain: "Grigore al XIII-lea a ales a doua variantă prin bula <i>Inter gravissimas</i>: după <b>joi, 4 octombrie 1582</b> a urmat imediat <b>vineri, 15 octombrie</b>. Regulă nouă: anii care se termină cu „00” sunt bisecți doar dacă se împart la 400 (anul 2000 da, 1900 nu). Ideea a fost a medicului calabrez <b>Luigi Lilio</b>. Italia, Spania și Portugalia au schimbat imediat; alte țări mult mai târziu: Anglia în 1752 și Rusia în 1918. Calendarul gregorian este folosit astăzi în aproape toată lumea."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege calendarul",
      intro: "Calendarul se poate învăța cu mâinile, cu Luna și cu jocuri diferite.",
      tabs: [
        {
          label: "✊ Trucul cu încheieturile",
          html: `<p>Un truc folosit de copiii din <b>toată lumea</b>: strânge mâinile pumn și ține-le una lângă alta. Numără lunile atingând <b>încheieturile</b> (vârfurile) și <b>văile</b> dintre încheieturi, de la stânga la dreapta:</p>
<ul>
<li>pe <b>încheietură</b> → lună de <b>31</b> de zile;</li>
<li>în <b>vale</b> → lună de <b>30</b> de zile (sau februarie).</li>
</ul>
<p>Ianuarie (încheietură), februarie (vale), martie (încheietură)… iulie (ultima încheietură de pe prima mână), august (prima încheietură de pe cealaltă mână)!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fff7ed"/>
<path d="M30 140 Q30 60 70 60 Q90 40 110 60 Q130 40 150 60 Q170 40 190 60 Q210 40 230 60 Q270 60 270 140 Z" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<path d="M320 140 Q320 60 360 60 Q380 40 400 60 Q420 40 440 60 Q460 40 480 60 Q500 40 520 60 Q560 60 560 140 Z" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<g font-size="14" font-weight="bold" text-anchor="middle">
<text x="90" y="34" fill="#b91c1c">IAN</text><text x="110" y="95" fill="#1d4ed8">FEB</text><text x="130" y="34" fill="#b91c1c">MAR</text><text x="150" y="95" fill="#1d4ed8">APR</text>
<text x="170" y="34" fill="#b91c1c">MAI</text><text x="190" y="95" fill="#1d4ed8">IUN</text><text x="210" y="34" fill="#b91c1c">IUL</text>
<text x="380" y="34" fill="#b91c1c">AUG</text><text x="400" y="95" fill="#1d4ed8">SEP</text><text x="420" y="34" fill="#b91c1c">OCT</text><text x="440" y="95" fill="#1d4ed8">NOI</text><text x="460" y="34" fill="#b91c1c">DEC</text>
</g>
<text x="300" y="185" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">roșu, pe încheietură = 31 de zile</text>
<text x="300" y="212" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">albastru, în vale = 30 de zile (februarie 28/29)</text>
</svg>`
        },
        {
          label: "🌙 Calendarul Lunii",
          html: `<p>Nu toți numără lunile ca noi. Calendarul <b>islamic</b> și cel <b>chinezesc</b> urmează <b>Luna</b>: o lună merge de la o Lună nouă la următoarea, aproximativ <b>29 de zile și jumătate</b>.</p>
<p>12 luni lunare fac aproximativ 354 de zile, cu 11 mai puțin decât anul nostru. De aceea <b>Ramadanul</b> cade în fiecare an cu aproximativ 11 zile mai devreme, iar <b>Anul Nou chinezesc</b> își schimbă data în fiecare an (între 21 ianuarie și 20 februarie).</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🌑 Lună nouă", back: "Nu se vede: începe o nouă lună lunară" },
              { front: "🌓 Primul pătrar", back: "După aproximativ 7 zile: jumătate de Lună" },
              { front: "🌕 Lună plină", back: "După aproximativ 15 zile: toată luminată" },
              { front: "🌗 Ultimul pătrar", back: "După aproximativ 22 de zile: din nou jumătate" },
              { front: "📅 Lună lunară", back: "Aproximativ 29 de zile și jumătate" }
            ]
          }
        },
        {
          label: "🌍 Anotimpurile pe dos",
          html: `<p>Când la noi este <b>iarnă</b>, în <b>Australia</b>, în Argentina și în Africa de Sud este <b>vară</b>! De ce? Pământul este înclinat: când jumătatea nordică este întoarsă spre Soare, jumătatea sudică este întoarsă în cealaltă parte, și invers. În Australia mulți sărbătoresc <b>Crăciunul pe plajă</b> 🎄🏖️. Rotește globul și compară.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Italia: în decembrie este iarnă ❄️", color: "#2563eb" },
              { lat: -33.9, lon: 151.2, label: "Sydney: în decembrie este vară ☀️", color: "#f97316" },
              { lat: -34.6, lon: -58.4, label: "Buenos Aires: în decembrie este vară ☀️", color: "#f97316" },
              { lat: -33.9, lon: 18.4, label: "Cape Town: în decembrie este vară ☀️", color: "#f97316" },
              { lat: 40.7, lon: -74, label: "New York: în decembrie este iarnă ❄️", color: "#2563eb" }
            ]
          }
        },
        {
          label: "📜 Linia timpului",
          html: `<p>Parcurge pe linia timpului etapele calendarului, de la egipteni până astăzi.</p>`,
          widget: "timeline",
          options: {
            unit: "ani",
            events: [
              { year: -2800, label: "Anul egiptean de 365 de zile", icon: "🌊" },
              { year: -46, label: "Calendarul lui Iulius Cezar", icon: "🏛️" },
              { year: 525, label: "Anii de la nașterea lui Hristos", icon: "✝️" },
              { year: 622, label: "Începutul calendarului islamic", icon: "🌙" },
              { year: 1582, label: "Calendarul gregorian", icon: "📅" },
              { year: 2028, label: "Următorul an bisect", icon: "🐸" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta calendarului: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "terra", label: "Pământul se rotește", x: 50, y: 6, color: "#0ea5e9", html: "Pământul se rotește în jurul axei sale și în jurul Soarelui.", why: "Tot calendarul se naște din trei mișcări ale cerului: Pământul care se rotește în jurul său (ziua), Luna care se rotește în jurul Pământului (luna), Pământul care se rotește în jurul Soarelui (anul)." },
        { id: "giorno", label: "Ziua", x: 15, y: 30, color: "#eab308", html: "24 de ore: un tur al Pământului în jurul său.", why: "Când partea noastră de Pământ este întoarsă spre Soare, este zi; când este întoarsă în cealaltă parte, este noapte. Este cel mai simplu ritm de văzut: de aceea este prima unitate a calendarului." },
        { id: "settimana", label: "Săptămâna", x: 15, y: 60, color: "#a855f7", html: "7 zile, cu numele astrelor.", why: "Săptămâna de 7 zile vine din Orientul Mijlociu antic (babilonieni și evrei) și poate din fazele Lunii, care durează aproximativ 7 zile fiecare. Romanii au adoptat-o, dând zilelor numele Lunii, al lui Marte, Mercur, Jupiter, Venus." },
        { id: "mese", label: "Luna", x: 50, y: 35, color: "#64748b", html: "28–31 de zile: la origine, un tur al Lunii.", why: "„Lună” (de calendar) și „Lună” (astrul) sunt rude: Luna are nevoie de aproximativ 29 de zile și jumătate ca să arate din nou la fel. Calendarul nostru a lungit puțin lunile ca să încapă exact 12 într-un an." },
        { id: "anno", label: "Anul", x: 85, y: 30, color: "#16a34a", html: "365 de zile (366 la cei bisecți): un tur al Pământului în jurul Soarelui.", why: "Un tur în jurul Soarelui durează aproximativ <b>365 de zile și 6 ore</b>. Cele 6 ore, după 4 ani, fac o zi întreagă: iată de ce din 4 în 4 ani există 29 februarie." },
        { id: "stagioni", label: "Anotimpurile", x: 85, y: 60, color: "#f97316", html: "Primăvara, vara, toamna, iarna.", why: "Axa Pământului este înclinată cu aproximativ 23 de grade și jumătate. În cursul anului, emisfera noastră primește razele Soarelui mai drepte (vara) sau mai piezișe (iarna). Nu depinde de distanța față de Soare: în ianuarie Pământul este chiar puțin mai aproape!" },
        { id: "giuliano", label: "Calendarul lui Cezar", x: 35, y: 85, color: "#ef4444", html: "46 î.Hr.: 365 de zile și un an bisect din 4 în 4 ani.", why: "<b>Iulius Cezar</b> a copiat ideea celor 365 de zile de la egipteni, cu ajutorul astronomului <b>Sosigene din Alexandria</b>, și a adăugat ziua bisectă." },
        { id: "gregoriano", label: "Calendarul gregorian", x: 70, y: 88, color: "#db2777", html: "1582: calendarul pe care îl folosim astăzi.", why: "Anul adevărat este cu 11 minute mai scurt decât 365 de zile și 6 ore. Calabrezul <b>Luigi Lilio</b> a găsit corecția, iar papa <b>Grigore al XIII-lea</b> a transformat-o în lege: s-au sărit 10 zile și s-a schimbat regula anilor bisecți." }
      ],
      edges: [
        ["terra", "giorno", "în jurul său:"],
        ["terra", "anno", "în jurul Soarelui:"],
        ["terra", "mese", "Luna se rotește:"],
        ["giorno", "settimana", "7 alcătuiesc o"],
        ["mese", "anno", "12 alcătuiesc un"],
        ["anno", "stagioni", "împărțit în 4"],
        ["anno", "giuliano", "măsurat de"],
        ["giuliano", "gregoriano", "corectat de"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: anotimpuri, ani și istorie",
      questions: [
        { type: "mc", q: "Ce anotimp vine după vară?", options: ["Primăvara", "Toamna", "Iarna"], answer: 1, explain: "Primăvara → vara → toamna → iarna." },
        { type: "num", q: "Câte zile are un an bisect?", answer: 366, explain: "Are o zi în plus: 29 februarie." },
        { type: "mc", q: "Luna iulie poartă numele lui…", options: ["Iulius Cezar", "Augustus", "Romulus"], answer: 0, explain: "Iulie vine de la Iulius Cezar." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>1 săptămână = <b>7 zile</b>; 1 an = <b>12 luni</b> = <b>365 de zile</b>.</li>
<li>„Treizeci de zile are noiembrie, cu aprilie, iunie și septembrie…”</li>
<li>Din 4 în 4 ani există anul <b>bisect</b> (366 de zile).</li>
<li>4 anotimpuri: <b>primăvara, vara, toamna, iarna</b>.</li>
<li>Folosim calendarul <b>gregorian</b> (1582).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Calendar", d: "Sistem pentru a împărți și a număra timpul în zile, săptămâni, luni și ani." },
    { t: "Săptămână", d: "Grup de 7 zile." },
    { t: "Lună", d: "Fiecare dintre cele 12 părți ale anului, de la 28 la 31 de zile." },
    { t: "An", d: "365 de zile: timpul în care Pământul se rotește în jurul Soarelui." },
    { t: "An bisect", d: "An de 366 de zile, cu 29 februarie; vine din 4 în 4 ani." },
    { t: "Anotimp", d: "Fiecare dintre cele 4 părți ale anului, cu un alt climat." },
    { t: "Dată", d: "Indicarea zilei, a lunii și a anului." },
    { t: "î.Hr. / d.Hr.", d: "Înainte de Hristos / după Hristos: înainte sau după anul 1." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Câte luni are un an?", answer: 12, explain: "De la ianuarie la decembrie: 12 luni." },
      { type: "num", q: "Câte zile are un an obișnuit?", answer: 365, explain: "Un an obișnuit are 365 de zile." },
      { type: "order", q: "Pune în ordine zilele săptămânii.", items: ["luni", "marți", "miercuri", "joi", "vineri", "sâmbătă", "duminică"], explain: "Săptămâna începe de luni." },
      { type: "order", q: "Pune în ordine anotimpurile, începând cu primăvara.", items: ["primăvara", "vara", "toamna", "iarna"], explain: "Anotimpurile se repetă mereu în această ordine." },
      { type: "mc", q: "Câte zile are aprilie?", options: ["30", "31", "28"], answer: 0, explain: "„Treizeci de zile are noiembrie, cu aprilie, iunie și septembrie”." },
      { type: "mc", q: "Dacă azi este vineri, ieri a fost…", options: ["sâmbătă", "joi", "duminică"], answer: 1, explain: "Înainte de vineri vine joi." },
      { type: "tf", q: "August are 31 de zile.", answer: true, explain: "August cade pe o încheietură: 31 de zile." },
      { type: "tf", q: "În Australia, când la noi este iarnă, este vară.", answer: true, explain: "Australia și Italia sunt în emisfere diferite: anotimpurile sunt inversate." },
      { type: "text", q: "Cum se numește anul de 366 de zile?", answer: ["bisect", "an bisect", "anul bisect"], explain: "Anul bisect, cu 29 februarie." },
      { type: "mc", q: "Ziua „luni” își ia numele de la…", options: ["Lună", "un rege", "un erou"], answer: 0, explain: "Luni = ziua Lunii." },
      { type: "mc", q: "Cine a creat, în 1582, calendarul pe care îl folosim astăzi?", options: ["Iulius Cezar", "Papa Grigore al XIII-lea", "Galileo Galilei"], answer: 1, explain: "Calendarul gregorian, de către papa Grigore al XIII-lea." },
      { type: "num", q: "Azi este 5 mai. Peste o săptămână, ce zi din mai va fi?", answer: 12, explain: "5 + 7 = 12: 12 mai." }
    ]
  }
});
