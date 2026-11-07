TOPIC('ro', {
  id: `m1-geo-clima-ambienti`,
  title: `Climă și medii naturale`,
  intro: `De ce la Palermo iarna se umblă în tricou, în timp ce la Moscova se patinează pe gheață? De ce în Alpi cresc brazi, iar în Sicilia măslini? Totul depinde de <b>climă</b>, care la rândul ei depinde de latitudine, altitudine, mare și vânturi. În Europa găsim climate foarte diferite, iar fiecare are <b>mediile</b> ei naturale, cu plante și animale potrivite.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Starea vremii și clima`,
      html: `<p>Atenție să nu le încurci:</p><ul><li><b>starea vremii</b> este situația atmosferei într-un loc și într-un <b>moment</b> precis („azi la Torino plouă și sunt 12 °C”);</li><li><b>clima</b> este ansamblul condițiilor <b>medii</b> dintr-un loc, calculate pe o perioadă lungă, de obicei <b>30 de ani</b> („la Torino iernile sunt reci, iar verile calde și înăbușitoare”).</li></ul><p><b>Elementele</b> climei sunt ceea ce se măsoară: <b>temperatura</b> (termometru), <b>precipitațiile</b> (pluviometru, în mm), <b>umiditatea</b> (higrometru), <b>presiunea</b> (barometru), <b>vânturile</b> (anemometru și girueta).</p><p>O dată importantă este <b>amplitudinea termică anuală</b>: diferența dintre temperatura medie a lunii celei mai calde și cea a lunii celei mai reci.</p>`
    },
    {
      type: `text`,
      title: `2. Factorii climei: de ce sunt climatele diferite`,
      html: `<ol><li><b>Latitudinea</b>: aproape de Ecuator, razele Soarelui ajung aproape perpendiculare și încălzesc mult; spre poli ajung înclinate, iar aceeași energie se distribuie pe o suprafață mai mare. De aceea, cu cât mergi mai spre nord, cu atât e mai frig.</li><li><b>Altitudinea</b>: urcând, aerul este mai rarefiat și reține mai puțină căldură. Temperatura scade în medie cu aproximativ <b>0,6 °C la fiecare 100 m</b> (aproximativ 6 °C la fiecare 1.000 m).</li><li><b>Distanța față de mare</b>: apa se încălzește și se răcește mai încet decât uscatul. Marea <b>îmblânzește</b> clima: ierni mai blânde, veri mai răcoroase, amplitudine termică mică. În interiorul continentelor amplitudinea este mare.</li><li><b>Curenții marini</b>: <b>Curentul Golfului</b> (cu prelungirea lui, Curentul Atlanticului de Nord) aduce apă caldă din Caraibe până la coastele Europei occidentale și ale Norvegiei, făcându-le mult mai blânde decât alte zone aflate la aceeași latitudine.</li><li><b>Vânturile</b> dominante: în Europa bat mai ales <b>vânturi vestice</b> dinspre Atlantic, umede și blânde.</li><li><b>Reliefurile</b>: munții fac de barieră. Alpii apără Italia de vânturile reci din nord; versantul expus vânturilor umede primește mai multă ploaie.</li></ol>`
    },
    {
      type: `svg`,
      title: `De ce e mai frig la poli?`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#0f172a"/><circle cx="420" cy="160" r="130" fill="#38bdf8"/><path d="M420 30 A130 130 0 0 1 525 85 L420 160 Z" fill="#e0f2fe" opacity="0.6"/><ellipse cx="420" cy="160" rx="130" ry="14" fill="none" stroke="#f97316" stroke-width="3"/><text x="430" y="182" font-size="15" font-family="sans-serif" fill="#7c2d12" font-weight="bold">Ecuator</text><g stroke="#fde047" stroke-width="5"><line x1="20" y1="145" x2="290" y2="145"/><line x1="20" y1="175" x2="290" y2="175"/><line x1="20" y1="45" x2="359" y2="45"/><line x1="20" y1="75" x2="322" y2="75"/></g><text x="40" y="130" font-size="15" font-family="sans-serif" fill="#fde047">raze aproape perpendiculare:</text><text x="40" y="205" font-size="15" font-family="sans-serif" fill="#fde047">energie concentrată → cald</text><rect x="288" y="145" width="6" height="30" fill="#ef4444"/><path d="M359 45 L322 75" stroke="#3b82f6" stroke-width="8"/><text x="40" y="30" font-size="15" font-family="sans-serif" fill="#93c5fd">raze înclinate: energie distribuită pe mai mult spațiu → frig</text><text x="420" y="300" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#e2e8f0">aceeași cantitate de raze, suprafețe diferite</text></svg>`,
      caption: `Două fascicule egale de raze: la Ecuator lovesc o suprafață mică (în roșu), lângă pol o suprafață mult mai mare (în albastru). Fiecare metru pătrat primește mai puțină energie.`
    },
    {
      type: `example`,
      title: `Exemplu practic: urcarea la munte`,
      html: `<p>La <b>Courmayeur</b> (aproximativ 1.200 m) sunt 20 °C. Câte grade vor fi pe <b>Punta Helbronner</b> (aproximativ 3.460 m), unde se ajunge cu telecabina?</p><ol><li>Diferența de nivel: 3.460 − 1.200 = 2.260 m</li><li>Scăderea temperaturii: 2.260 : 100 × 0,6 ≈ 13,6 °C</li><li>Temperatura la altitudine: 20 − 13,6 ≈ <b>6 °C</b></li></ol><p>De aceea la munte, chiar și în plină vară, îți trebuie mereu o geacă!</p>`
    },
    {
      type: `quiz`,
      title: `Mini-test 1`,
      questions: [
        { type: `tf`, q: `Clima este situația atmosferei de azi.`, answer: false, explain: `Aceea este starea vremii; clima este media a cel puțin 30 de ani.` },
        { type: `num`, q: `Cu câte grade scade aproximativ temperatura urcând 1.000 m?`, answer: 6, tol: 0.5, unit: `°C`, explain: `Aproximativ 0,6 °C la fiecare 100 m, deci aproximativ 6 °C la fiecare 1.000 m.` },
        { type: `mc`, q: `Ce curent face blânde coastele Norvegiei?`, options: [`Curentul Labrador`, `Curentul Golfului (Atlanticului de Nord)`, `Curentul Humboldt`, `Niciunul`], answer: 1, explain: `Aduce ape calde din Caraibe spre nord-vestul Europei.` }
      ]
    },
    {
      type: `text`,
      title: `3. Zonele climatice ale Pământului și ale Europei`,
      html: `<p>Tropicele și cercurile polare împart Pământul în <b>zone astronomice</b>: o zonă <b>toridă</b> (între tropice), două zone <b>temperate</b> și două zone <b>polare</b>. Europa se află aproape în întregime în zona <b>temperată boreală</b>, cu extremitatea nordică în zona polară. În interiorul ei găsim aceste climate:</p><table><tr><th>Clima</th><th>Unde</th><th>Caracteristici</th></tr><tr><td><b>Oceanică (atlantică)</b></td><td>Irlanda, Marea Britanie, Franța occidentală, Belgia, Țările de Jos, coastele norvegiene</td><td>Ierni blânde, veri răcoroase, ploi frecvente tot anul, amplitudine termică mică</td></tr><tr><td><b>Continentală</b></td><td>Europa centrală și de est (Germania de est, Polonia, Ucraina, Rusia europeană)</td><td>Ierni lungi și foarte reci, veri calde, ploi mai ales vara, amplitudine mare</td></tr><tr><td><b>Mediteraneană</b></td><td>Coastele Spaniei, sudul Franței, Italia, Grecia, Croația</td><td>Veri calde și secetoase, ierni blânde și ploioase</td></tr><tr><td><b>Alpină (de munte)</b></td><td>Alpi, Pirinei, Carpați, Caucaz</td><td>Ierni reci și cu multă zăpadă, veri răcoroase; se schimbă odată cu altitudinea</td></tr><tr><td><b>Subarctică (boreală)</b></td><td>Interiorul Scandinaviei, Finlanda, nordul Rusiei</td><td>Ierni foarte lungi și geroase, veri scurte</td></tr><tr><td><b>Polară (de tundră)</b></td><td>Nordul Islandei, extremitatea nordică a Scandinaviei și a Rusiei, Svalbard</td><td>Frig aproape tot anul, sol înghețat (permafrost)</td></tr><tr><td><b>De stepă (semiaridă)</b></td><td>Sudul Rusiei, coastele Mării Caspice, o parte din interiorul Spaniei</td><td>Puține ploi, veri calde, ierni reci</td></tr></table>`
    },
    {
      type: `3d`,
      title: `Zonele pe glob`,
      scene: `globe`,
      options: {
        points: [
          { lat: 53.35, lon: -6.26, label: `Dublin – oceanic`, color: `#0ea5e9` },
          { lat: 55.76, lon: 37.62, label: `Moscova – continental`, color: `#7c3aed` },
          { lat: 38.12, lon: 13.36, label: `Palermo – mediteranean`, color: `#f59e0b` },
          { lat: 46.0, lon: 7.75, label: `Zermatt – alpin`, color: `#78716c` },
          { lat: 65.0, lon: 25.47, label: `Oulu (Finlanda) – subarctic`, color: `#15803d` },
          { lat: 78.22, lon: 15.65, label: `Svalbard – polar`, color: `#e2e8f0` },
          { lat: 46.35, lon: 48.04, label: `Astrahan – de stepă`, color: `#ca8a04` },
          { lat: 69.65, lon: 18.96, label: `Tromsø – blând pentru latitudine (Curentul Golfului)`, color: `#06b6d4` }
        ]
      },
      caption: `Rotește globul: Tromsø se află dincolo de Cercul polar arctic, dar datorită Curentului Golfului portul lui nu îngheață iarna.`
    },
    {
      type: `text`,
      title: `4. Mediile naturale ale Europei`,
      html: `<p>Fiecare climă favorizează o anumită <b>vegetație</b> și anumite <b>animale</b>: împreună formează un <b>mediu</b> (sau biom).</p><ul><li><b>Tundra</b> (clima polară): niciun copac, doar mușchi, licheni și arbuști pitici. Animale: reni, vulpi polare, lemingi, păsări migratoare.</li><li><b>Taigaua</b> sau pădurea de conifere (clima subarctică): păduri uriașe de <b>brazi, pini, zadă, mesteacăn</b>. Animale: elani, lupi, urși bruni, linxi.</li><li><b>Pădurea de foioase</b> (clima oceanică și continentală umedă): <b>stejari, fagi, castani, carpeni</b> care își pierd frunzele toamna. Astăzi, în mare parte înlocuită de câmpuri și orașe. Animale: cerbi, mistreți, veverițe, vulpi.</li><li><b>Prerie și stepă</b> (clima continentală secetoasă și de stepă): întinderi de ierburi; astăzi cultivate cu cereale („grânarul” Ucrainei). Animale: rozătoare, păsări de pradă, saiga.</li><li><b>Maquis mediteranean</b> (clima mediteraneană): arbuști mereu verzi cu frunze mici și coriacee ca să reziste la secetă: <b>stejar de piatră, arbutus, mirt, lentisc, drob, rozmarin</b>, și culturi de măslin, viță-de-vie, citrice.</li><li><b>Mediul alpin</b>: vegetația se schimbă urcând, pe <b>etaje</b> (vezi mai jos). Animale: capre de munte, capre negre, marmote, vulturi de munte.</li></ul>`
    },
    {
      type: `svg`,
      title: `Urcarea unui munte este ca o călătorie spre Pol`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#e0f2fe"/><polygon points="60,300 300,20 540,300" fill="#a3a3a3"/><polygon points="250,78 300,20 350,78" fill="#ffffff"/><polygon points="215,118 250,78 350,78 385,118" fill="#a8a29e"/><polygon points="170,170 215,118 385,118 430,170" fill="#86efac"/><polygon points="120,228 170,170 430,170 480,228" fill="#15803d"/><polygon points="60,300 120,228 480,228 540,300" fill="#65a30d"/><g font-family="sans-serif" font-size="14" fill="#0f172a"><text x="345" y="45">zăpezi veșnice ≈ pol</text><text x="345" y="62">(peste 2.800–3.000 m)</text><text x="375" y="100">stânci și licheni</text><text x="375" y="116">≈ tundră</text><text x="440" y="150">pajiști alpine</text><text x="440" y="166">(2.000–2.500 m)</text><text x="470" y="205" fill="#14532d">conifere ≈ taiga</text><text x="470" y="221" fill="#14532d">(1.000–2.000 m)</text><text x="10" y="270" fill="#14532d">foioase și culturi</text><text x="10" y="286" fill="#14532d">(până la 1.000 m)</text></g><text x="300" y="316" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">altitudini orientative, în Alpi; se schimbă în funcție de expunerea la soare</text></svg>`,
      caption: `Etajele de vegetație de la munte repetă, în câțiva kilometri de urcare, ceea ce întâlnești călătorind mii de kilometri spre nord.`
    },
    {
      type: `widget`,
      title: `Potrivește mediul cu locuitorul său`,
      widget: `match`,
      options: { pairs: [ [`Tundra`, `🦌 Ren`], [`Taiga`, `🫎 Elan`], [`Pădurea de foioase`, `🐗 Mistreț`], [`Maquis mediteranean`, `🌿 Arbutus și mirt`], [`Mediul alpin`, `🐐 Capră de munte`], [`Stepa`, `🌾 Întinderi de iarbă și cereale`] ] },
      caption: `Fiecare mediu are plantele și animalele lui.`
    },
    {
      type: `text`,
      title: `5. Climatele Italiei`,
      html: `<p>Italia este lungă și îngustă, străbătută de munți și înconjurată de mare: de aceea are climate diferite într-un spațiu mic.</p><ul><li><b>Alpin</b>: în Alpi, ierni reci și cu multă zăpadă, veri răcoroase.</li><li><b>Padan</b> (continental): în Câmpia Padului, ierni reci cu ceață, veri calde și înăbușitoare, amplitudine termică mare. Alpii blochează vânturile reci, dar și circulația aerului (iar poluarea stagnează).</li><li><b>Apenin</b>: pe reliefurile din centru-sud, ierni reci și cu multă zăpadă, veri destul de răcoroase.</li><li><b>Mediteranean</b>: pe coaste și în insule, ierni blânde, veri calde și secetoase. Pe coasta <b>adriatică</b> iernile sunt mai reci (vântul <b>bora</b> dinspre nord-est), pe cea <b>tireniană</b> mai blânde.</li></ul>`
    },
    {
      type: `example`,
      title: `Exemplu practic: cum se citește o climogramă`,
      html: `<p>O <b>climogramă</b> arată temperaturile medii lunare (linie) și precipitațiile (coloane). Să comparăm trei orașe (valori medii orientative):</p><table><tr><th></th><th>Ianuarie</th><th>Iulie</th><th>Amplitudine</th><th>Ploi/an</th></tr><tr><td><b>Roma</b> (mediteranean)</td><td>≈ 8 °C</td><td>≈ 25 °C</td><td>≈ 17 °C</td><td>≈ 800 mm, puține vara</td></tr><tr><td><b>Moscova</b> (continental)</td><td>≈ −6 °C</td><td>≈ 19 °C</td><td>≈ 25 °C</td><td>≈ 700 mm, mai ales vara</td></tr><tr><td><b>Londra</b> (oceanic)</td><td>≈ 5 °C</td><td>≈ 19 °C</td><td>≈ 14 °C</td><td>≈ 600 mm, distribuite pe tot parcursul anului</td></tr></table><p>Calcul pentru Moscova: 19 − (−6) = 19 + 6 = <b>25 °C</b> de amplitudine. Cu cât ne îndepărtăm de mare, cu atât amplitudinea crește.</p>`
    },
    {
      type: `svg`,
      title: `Climograma Romei`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#ffffff"/><line x1="60" y1="270" x2="560" y2="270" stroke="#334155" stroke-width="2"/><line x1="60" y1="30" x2="60" y2="270" stroke="#dc2626" stroke-width="2"/><line x1="560" y1="30" x2="560" y2="270" stroke="#2563eb" stroke-width="2"/><g font-family="sans-serif" font-size="12" fill="#dc2626" text-anchor="end"><text x="55" y="274">0 °C</text><text x="55" y="194">10</text><text x="55" y="114">20</text><text x="55" y="34">30</text></g><g font-family="sans-serif" font-size="12" fill="#2563eb"><text x="565" y="274">0 mm</text><text x="565" y="194">40</text><text x="565" y="114">80</text><text x="565" y="34">120</text></g><g fill="#93c5fd"><rect x="70" y="136" width="28" height="134"/><rect x="111" y="124" width="28" height="146"/><rect x="152" y="154" width="28" height="116"/><rect x="193" y="108" width="28" height="162"/><rect x="234" y="164" width="28" height="106"/><rect x="275" y="202" width="28" height="68"/><rect x="316" y="232" width="28" height="38"/><rect x="357" y="196" width="28" height="74"/><rect x="398" y="124" width="28" height="146"/><rect x="439" y="44" width="28" height="226"/><rect x="480" y="48" width="28" height="222"/><rect x="521" y="108" width="28" height="162"/></g><polyline points="84,206 125,198 166,182 207,158 248,126 289,94 330,70 371,70 412,102 453,134 494,174 535,198" fill="none" stroke="#dc2626" stroke-width="4"/><g font-family="sans-serif" font-size="13" fill="#334155" text-anchor="middle"><text x="84" y="288">G</text><text x="125" y="288">F</text><text x="166" y="288">M</text><text x="207" y="288">A</text><text x="248" y="288">M</text><text x="289" y="288">G</text><text x="330" y="288">L</text><text x="371" y="288">A</text><text x="412" y="288">S</text><text x="453" y="288">O</text><text x="494" y="288">N</text><text x="535" y="288">D</text></g><text x="300" y="20" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#0f172a" font-weight="bold">Roma: vară caldă și secetoasă, toamnă ploioasă</text><text x="310" y="312" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#475569">linia roșie = temperatura medie · coloanele albastre = ploaia</text></svg>`,
      caption: `Valori medii orientative. Observă luna iulie: temperatura cea mai ridicată și ploaia cea mai scăzută. Este semnătura climei mediteraneene.`
    },
    {
      type: `curiosity`,
      title: `Palmieri în Irlanda?`,
      html: `<p>Pe coastele sud-vestice ale <b>Irlandei</b> și ale <b>Cornwallului</b> (Anglia), la aceeași latitudine cu sudul Canadei, cresc palmieri și plante subtropicale în grădini! Meritul îi aparține <b>Curentului Golfului</b>: iarna acolo îngheață rar. Labradorul, în Canada, la aceeași latitudine, este acoperit de zăpadă luni la rând.</p>`
    },
    {
      type: `curiosity`,
      title: `Ghețarii ca termometre`,
      html: `<p>Ghețarii alpini sunt „termometre” ale climei: se alungesc în anii reci și se retrag în cei calzi. Astăzi se retrag rapid din cauza <b>încălzirii globale</b>: Europa se încălzește mai repede decât media mondială. În 2022, o vară excepțional de caldă, prăbușirea unui bloc de gheață de pe ghețarul <b>Marmolada</b> a provocat o tragedie. Glaciologii fotografiază ghețarii în fiecare an ca să le măsoare schimbarea.</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege`,
      intro: `Dacă factorii climei ți se par mulți, încearcă aceste căi.`,
      tabs: [
        { label: `🔦 Lanterna`, html: `<p>Într-o cameră întunecată, îndreaptă o lanternă direct spre o foaie: vezi un cerc mic și foarte luminos. Acum înclin-o: lumina se întinde într-o elipsă mai mare și mai slabă. Cantitatea de lumină este aceeași, dar este distribuită pe mai mult spațiu. Asta se întâmplă cu razele Soarelui spre poli: de aceea <b>latitudinea</b> este primul factor al climei.</p>` },
        { label: `🍲 Oala cu apă`, html: `<p>Pune pe foc o oală goală și una cu apă: oala goală (<b>uscatul</b>) se încinge într-o clipă și se răcește repede; apa (<b>marea</b>) se încălzește încet și rămâne caldă mult timp. De aceea orașele de lângă mare au veri mai puțin toride și ierni mai puțin reci: marea face de „calorifer” iarna și de „aer condiționat” vara.</p>` },
        { label: `🏔️ Muntele în 3D`, html: `<p>Rotește peisajul și atinge părțile lui: de la mare până la vârf, clima se schimbă ca și cum ai călători spre Pol.</p>`, scene: `terrain`, options: { features: { sea: { label: `Mare`, html: `Îmblânzește clima: ierni blânde, veri mai puțin calde. Pe coaste: climă <b>mediteraneană</b>, maquis, măslini.` }, plain: { label: `Câmpie`, html: `Departe de mare (ca Câmpia Padului) amplitudinea crește: ierni reci cu ceață, veri înăbușitoare.` }, hill: { label: `Deal`, html: `Păduri de <b>foioase</b> (stejari, castani) și vii.` }, mountain: { label: `Munte`, html: `Cu cât urci mai sus, cu atât e mai frig (−0,6 °C la 100 m): păduri de <b>conifere</b>, ca în taiga.` }, peak: { label: `Vârf`, html: `Stânci, mușchi, licheni: un peisaj asemănător <b>tundrei</b>.` }, glacier: { label: `Ghețar`, html: `Zăpezi veșnice: ca la <b>poli</b>. Dar ghețarii se retrag din cauza încălzirii globale.` } } } },
        { label: `🌍 Călătoria lui Humboldt`, html: `<p>Naturalistul german <b>Alexander von Humboldt</b> a urcat în 1802 pe vulcanul Chimborazo, din Ecuador, și a observat că plantele se schimbau urcând exact așa cum se schimbă deplasându-te de la Ecuator spre poli. A desenat o celebră tablă, „Naturgemälde”, aflată la originea studiului mediilor și a ecologiei.</p>`, scene: `globe`, options: { points: [ { lat: -1.47, lon: -78.82, label: `Chimborazo (Humboldt, 1802)`, color: `#dc2626` }, { lat: 0, lon: -50, label: `Zona toridă`, color: `#f97316` }, { lat: 45, lon: 10, label: `Zona temperată`, color: `#16a34a` }, { lat: 75, lon: 20, label: `Zona polară`, color: `#0ea5e9` } ] } }
      ]
    },
    {
      type: `widget`,
      title: `Ce climă are acest oraș?`,
      widget: `classify`,
      options: { groups: [`Oceanică`, `Continentală`, `Mediteraneană`], items: [ [`Dublin`, 0], [`Londra`, 0], [`Brest (Franța)`, 0], [`Moscova`, 1], [`Varșovia`, 1], [`Kiev`, 1], [`Atena`, 2], [`Palermo`, 2], [`Sevilla`, 2] ] },
      caption: `Gândește-te cât de aproape este de Atlantic, în interiorul continentului sau de Mediterana.`
    },
    {
      type: `quiz`,
      title: `Mini-test 2`,
      questions: [
        { type: `mc`, q: `Ce mediu este format din mari păduri de conifere?`, options: [`Tundra`, `Taigaua`, `Stepa`, `Maquis mediteranean`], answer: 1, explain: `Taigaua, tipică pentru clima subarctică.` },
        { type: `num`, q: `La Varșovia media din ianuarie este −2 °C, iar cea din iulie 19 °C. Care este amplitudinea termică anuală?`, answer: 21, tol: 0, unit: `°C`, explain: `19 − (−2) = 19 + 2 = 21 °C.` },
        { type: `tf`, q: `Clima mediteraneană are veri calde și secetoase și ierni blânde și ploioase.`, answer: true, explain: `Este clima coastelor italiene.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Hartă conceptuală: de la Soare la medii`,
      nodes: [
        { id: `sole`, label: `Energia Soarelui`, x: 50, y: 6, color: `#f59e0b`, html: `<p>Motorul întregii clime.</p>`, why: `<p>Pământul este sferic, iar axa lui este înclinată cu aproximativ 23,4°: de aceea razele ajung sub unghiuri diferite în funcție de latitudine și de anotimp.</p>` },
        { id: `latitudine`, label: `Latitudine`, x: 15, y: 28, color: `#dc2626`, html: `<p>Zona toridă, temperate, polare.</p>`, why: `<p>Încă grecii (Parmenide, Aristotel) au împărțit Pământul în zone (klimata = „înclinații”): cuvântul <b>climă</b> vine chiar din greacă, <i>klíma</i>, „înclinare” a razelor solare!</p>` },
        { id: `altitudine`, label: `Altitudine`, x: 38, y: 30, color: `#78716c`, html: `<p>−0,6 °C la fiecare 100 m aproximativ.</p>`, why: `<p>Aerul care urcă se dilată pentru că presiunea este mai mică, iar dilatându-se se răcește. În plus, la altitudine aerul este mai rarefiat și reține mai puțină căldură.</p>` },
        { id: `mare`, label: `Mare și curenți`, x: 62, y: 30, color: `#0ea5e9`, html: `<p>Îmblânzesc clima; Curentul Golfului.</p>`, why: `<p>Apa are o <b>căldură specifică</b> mare: este nevoie de multă energie ca să fie încălzită, iar ea o eliberează încet. Curentul Golfului a fost descris și cartografiat de Benjamin Franklin în 1770.</p>` },
        { id: `venti`, label: `Vânturi și reliefuri`, x: 85, y: 28, color: `#475569`, html: `<p>Vânturi vestice, Alpii ca barieră.</p>`, why: `<p>Vânturile se nasc din diferențele de presiune dintre zonele calde și cele reci; munții obligă aerul umed să urce, să se răcească și să descarce ploaia pe un versant.</p>` },
        { id: `climi`, label: `Climate europene`, x: 50, y: 55, color: `#7c3aed`, html: `<p>Oceanică, continentală, mediteraneană, alpină, subarctică, polară, de stepă.</p>`, why: `<p>Clasificarea cea mai folosită este cea a climatologului Wladimir Köppen (1900, apoi actualizată), bazată pe temperaturi, ploi și vegetație.</p>` },
        { id: `ambienti`, label: `Medii (biomuri)`, x: 25, y: 82, color: `#16a34a`, html: `<p>Tundră, taiga, foioase, stepă, maquis, mediu alpin.</p>`, why: `<p>Plantele și animalele s-au adaptat în cursul evoluției: frunzele în formă de ac ale coniferelor rezistă la îngheț, cele mici și coriacee ale maquisului rețin apa.</p>` },
        { id: `uomo`, label: `Omul și schimbarea climatică`, x: 75, y: 82, color: `#be123c`, html: `<p>Agricultură, orașe, emisii de CO₂, încălzire globală.</p>`, why: `<p>De la Revoluția industrială ardem cărbune, petrol și gaz, care eliberează dioxid de carbon: efectul de seră crește. Datele de la termometre, sateliți și din carotele de gheață arată că Pământul s-a încălzit cu peste 1 °C.</p>` }
      ],
      edges: [ [`sole`, `latitudine`, `înclinare`], [`latitudine`, `climi`, ``], [`altitudine`, `climi`, ``], [`mare`, `climi`, ``], [`venti`, `climi`, ``], [`climi`, `ambienti`, `determină`], [`ambienti`, `uomo`, `resurse`], [`uomo`, `climi`, `modifică`] ]
    }
  ],
  glossary: [
    { t: `Starea vremii`, d: `Condițiile atmosferei într-un loc și într-un moment precise.` },
    { t: `Clima`, d: `Condițiile medii ale atmosferei unui loc, calculate pe cel puțin 30 de ani.` },
    { t: `Amplitudine termică`, d: `Diferența dintre temperatura cea mai ridicată și cea mai scăzută într-o perioadă.` },
    { t: `Precipitații`, d: `Apa care cade din atmosferă: ploaie, zăpadă, grindină; se măsoară în mm.` },
    { t: `Curentul Golfului`, d: `Curent oceanic cald care din Golful Mexic ajunge în nord-vestul Europei.` },
    { t: `Climogramă`, d: `Grafic care arată temperaturile și precipitațiile medii lunare ale unui loc.` },
    { t: `Tundră`, d: `Mediu polar fără copaci, cu mușchi și licheni.` },
    { t: `Taiga`, d: `Mare pădure de conifere din regiunile subarctice.` },
    { t: `Maquis mediteranean`, d: `Vegetație de arbuști mereu verzi adaptați secetei de vară.` },
    { t: `Permafrost`, d: `Sol înghețat permanent.` },
    { t: `Biom`, d: `Mare mediu natural caracterizat prin climă, vegetație și faună tipice.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Pe câți ani se calculează, de obicei, mediile care definesc o climă?`, options: [`1 an`, `5 ani`, `30 de ani`, `1.000 de ani`], answer: 2, explain: `Cel puțin 30 de ani.` },
      { type: `mc`, q: `Care dintre acestea NU este un factor al climei?`, options: [`Latitudinea`, `Altitudinea`, `Distanța față de mare`, `Numărul de locuitori ai unui oraș`], answer: 3, explain: `Factorii sunt latitudinea, altitudinea, marea, curenții, vânturile, reliefurile.` },
      { type: `tf`, q: `Marea mărește amplitudinea termică.`, answer: false, explain: `Marea o reduce: ierni mai blânde și veri mai răcoroase.` },
      { type: `num`, q: `La poalele unui munte (500 m) sunt 18 °C. Câte grade sunt aproximativ la 1.500 m?`, answer: 12, tol: 0.5, unit: `°C`, explain: `1.000 m diferență de nivel → aproximativ −6 °C: 18 − 6 = 12 °C.` },
      { type: `mc`, q: `Ce climă are Moscova?`, options: [`Oceanică`, `Continentală`, `Mediteraneană`, `Polară`], answer: 1, explain: `Ierni foarte reci și veri calde, departe de mare.` },
      { type: `text`, q: `Cum se numește mediul polar fără copaci, cu mușchi și licheni?`, answer: [`tundra`, `tundră`], explain: `Tundra.` },
      { type: `mc`, q: `Ce plantă este tipică pentru maquisul mediteranean?`, options: [`Molid`, `Arbutus`, `Mesteacăn pitic`, `Zadă`], answer: 1, explain: `Arbutus, alături de stejarul de piatră, mirt, lentisc.` },
      { type: `order`, q: `Ordonează etajele de vegetație de la baza la vârful unui munte alpin`, items: [`Foioase și culturi`, `Conifere`, `Pajiști alpine`, `Stânci, mușchi și licheni`, `Zăpezi veșnice`], explain: `Urcând, clima devine tot mai rece.` },
      { type: `num`, q: `La Moscova media din ianuarie este −6 °C, iar cea din iulie 19 °C. Care este amplitudinea termică anuală?`, answer: 25, tol: 0, unit: `°C`, explain: `19 − (−6) = 25 °C.` },
      { type: `mc`, q: `Ce climă are Câmpia Padului?`, options: [`Mediteraneană`, `Padană/continentală, cu ierni reci și cu ceață`, `Polară`, `Oceanică`], answer: 1, explain: `Departe de mare și închisă de reliefuri, are o amplitudine termică mare.` },
      { type: `tf`, q: `Cuvântul „climă” vine din greacă și înseamnă „înclinare”.`, answer: true, explain: `Se referă la înclinarea razelor solare.` }
    ],
    gen: [ [`intAdd`, 2] ]
  }
});
