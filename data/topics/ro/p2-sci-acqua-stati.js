TOPIC('ro', {
  id: "p2-sci-acqua-stati",
  title: "Apa și stările ei",
  intro: "Apa este o adevărată vrăjitoare 🎩: poate fi <b>gheață</b> 🧊 tare, <b>apă</b> 💧 care curge sau <b>vapori</b> ♨️ invizibili. Acestea sunt cele trei <b>stări</b> ale apei: <b>solidă</b>, <b>lichidă</b> și <b>gazoasă</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Trei feluri de a fi apă",
      html: `<ul>
<li>🧊 <b>Solidă</b>: <b>gheața</b>, <b>zăpada</b>, grindina. Are <b>forma ei</b>: un cub de gheață rămâne cub chiar dacă îl pui pe o farfurie.</li>
<li>💧 <b>Lichidă</b>: <b>apa</b> de la robinet, din mare, din ploaie. <b>Nu are forma ei</b>: ia forma vasului (pahar, sticlă, cadă).</li>
<li>♨️ <b>Gazoasă</b>: <b>vaporii de apă</b>. Sunt <b>invizibili</b> și se răspândesc peste tot în aer.</li>
</ul>
<p>Este mereu <b>aceeași apă</b>! Se schimbă doar starea ei.</p>`
    },
    {
      type: "svg",
      title: "Solid, lichid, gazos",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<rect x="60" y="110" width="90" height="90" rx="10" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<path d="M75 125 L100 125" stroke="#ffffff" stroke-width="6"/>
<path d="M250 100 L265 220 L335 220 L350 100" fill="none" stroke="#475569" stroke-width="4"/>
<path d="M256 150 L262 216 L338 216 L344 150 Z" fill="#3b82f6"/>
<path d="M465 210 Q450 180 470 160 Q490 140 470 115 Q455 95 475 75" stroke="#94a3b8" stroke-width="6" fill="none" stroke-dasharray="4 8"/>
<path d="M505 210 Q490 180 510 160 Q530 140 510 115 Q495 95 515 75" stroke="#94a3b8" stroke-width="6" fill="none" stroke-dasharray="4 8"/>
<path d="M440 220 L540 220 L530 250 L450 250 Z" fill="#64748b"/>
<text x="105" y="60" font-size="24" text-anchor="middle" font-weight="bold" fill="#0369a1">SOLID</text>
<text x="300" y="60" font-size="24" text-anchor="middle" font-weight="bold" fill="#1d4ed8">LICHID</text>
<text x="490" y="45" font-size="24" text-anchor="middle" font-weight="bold" fill="#475569">GAZOS</text>
<text x="105" y="240" font-size="17" text-anchor="middle" fill="#0c4a6e">gheață</text>
<text x="105" y="262" font-size="15" text-anchor="middle" fill="#0c4a6e">formă proprie</text>
<text x="300" y="250" font-size="17" text-anchor="middle" fill="#1e3a8a">apă</text>
<text x="300" y="272" font-size="15" text-anchor="middle" fill="#1e3a8a">forma vasului</text>
<text x="490" y="275" font-size="17" text-anchor="middle" fill="#334155">vapori: se răspândesc</text>
</svg>`,
      caption: "Gheața are forma ei, apa ia forma paharului, vaporii se răspândesc în aer."
    },
    {
      type: "text",
      title: "Ce face să se schimbe starea? Căldura!",
      html: `<p>🔥 Dacă <b>încălzim</b>:</p>
<ul>
<li>🧊 → 💧 gheața <b>se topește</b> și devine apă: <b>topire</b> (are loc la <b>0 °C</b>);</li>
<li>💧 → ♨️ apa devine vapori: <b>evaporare</b>. Dacă o încălzim foarte tare, la <b>100 °C</b>, <b>fierbe</b>: <b>fierbere</b>.</li>
</ul>
<p>❄️ Dacă <b>răcim</b>:</p>
<ul>
<li>♨️ → 💧 vaporii se transformă la loc în picături: <b>condensare</b>;</li>
<li>💧 → 🧊 apa <b>îngheață</b>: <b>solidificare</b> (la <b>0 °C</b>).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Circuitul schimbărilor",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<circle cx="100" cy="150" r="60" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<circle cx="300" cy="150" r="60" fill="#93c5fd" stroke="#1d4ed8" stroke-width="4"/>
<circle cx="500" cy="150" r="60" fill="#e2e8f0" stroke="#64748b" stroke-width="4"/>
<text x="100" y="162" font-size="38" text-anchor="middle">🧊</text>
<text x="300" y="162" font-size="38" text-anchor="middle">💧</text>
<text x="500" y="162" font-size="38" text-anchor="middle">♨️</text>
<path d="M150 115 Q200 70 250 115" stroke="#dc2626" stroke-width="5" fill="none"/><polygon points="242,104 258,122 238,124" fill="#dc2626"/>
<path d="M350 115 Q400 70 450 115" stroke="#dc2626" stroke-width="5" fill="none"/><polygon points="442,104 458,122 438,124" fill="#dc2626"/>
<path d="M450 185 Q400 230 350 185" stroke="#2563eb" stroke-width="5" fill="none"/><polygon points="358,196 342,178 362,176" fill="#2563eb"/>
<path d="M250 185 Q200 230 150 185" stroke="#2563eb" stroke-width="5" fill="none"/><polygon points="158,196 142,178 162,176" fill="#2563eb"/>
<text x="200" y="62" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">topire 🔥</text>
<text x="400" y="62" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">evaporare 🔥</text>
<text x="400" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">condensare ❄️</text>
<text x="200" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">solidificare ❄️</text>
<text x="100" y="235" font-size="15" text-anchor="middle" fill="#0c4a6e">solid</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#1e3a8a">lichid</text>
<text x="500" y="235" font-size="15" text-anchor="middle" fill="#334155">gazos</text>
<text x="300" y="25" font-size="16" text-anchor="middle" fill="#7f1d1d">roșu = încălzesc · albastru = răcesc</text>
</svg>`,
      caption: "Săgețile roșii apar când încălzim, cele albastre când răcim."
    },
    {
      type: "quiz",
      title: "Mini-test: cele trei stări",
      questions: [
        { type: "mc", q: "Gheața este apă în stare…", options: ["solidă", "lichidă", "gazoasă"], answer: 0, explain: "Gheața este solidă: are forma ei." },
        { type: "tf", q: "Apa lichidă ia forma vasului.", answer: true, explain: "În pahar are forma paharului, în sticlă forma sticlei." },
        { type: "mc", q: "Ce se întâmplă cu gheața dacă o încălzești?", options: ["Se topește", "Devine mai tare", "Dispare în neant"], answer: 0, explain: "Gheața se topește și devine apă lichidă: este topirea." }
      ]
    },
    {
      type: "example",
      title: "Exemplu: acadeaua de gheață la soare 🍧",
      html: `<p>Vara, o acadea de gheață la soare <b>se topește</b>: căldura o face să treacă din stare <b>solidă</b> în stare <b>lichidă</b> (topire).</p>
<p>Sucul care cade pe asfaltul fierbinte, după un timp, <b>dispare</b>: s-a <b>evaporat</b>, a devenit vapori invizibili în aer.</p>`
    },
    {
      type: "example",
      title: "Exemplu: oglinda din baie 🪞",
      html: `<p>După un duș fierbinte, oglinda se <b>aburește</b>.</p>
<p>Vaporii apei calde ating oglinda, care este mai <b>rece</b>, și se transformă la loc în multe picături mici: este <b>condensarea</b>. Poți chiar să scrii pe ea cu degetul!</p>
<p>Se întâmplă la fel când o sticlă rece scoasă din frigider „transpiră” picături.</p>`
    },
    {
      type: "widget",
      title: "În ce stare este?",
      widget: "classify",
      options: {
        groups: ["🧊 Solidă", "💧 Lichidă", "♨️ Gazoasă"],
        items: [
          ["❄️ zăpadă", 0],
          ["🌧️ ploaie", 1],
          ["aburul din oală", 2],
          ["🧊 cub din congelator", 0],
          ["🌊 mare", 1],
          ["umezeala invizibilă din aer", 2],
          ["grindină", 0],
          ["🚿 apa de la duș", 1]
        ]
      },
      caption: "Atenție: „norișorul” alb de deasupra oalei este făcut din picături deja condensate. Adevăratul vapor este invizibil!"
    },
    {
      type: "3d",
      title: "Molecula de apă",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.6, color: "#ef4444", label: "O (oxigen)" },
          { x: 0.76, y: 0.58, z: 0, r: 0.38, color: "#f8fafc", label: "H (hidrogen)" },
          { x: -0.76, y: 0.58, z: 0, r: 0.38, color: "#f8fafc", label: "H (hidrogen)" }
        ],
        bonds: [[0, 1], [0, 2]]
      },
      caption: "Apa este făcută din particule minuscule, moleculele H₂O: un atom de oxigen și doi de hidrogen. Sunt atât de mici, încât într-o picătură sunt miliarde de miliarde! Rotește-o."
    },
    {
      type: "text",
      title: "Ce fac particulele?",
      html: `<p>Moleculele de apă se mișcă <b>mereu</b>. Căldura le face să se miște <b>mai tare</b>:</p>
<ul>
<li>🧊 în <b>gheață</b> sunt <b>aproape una de alta și nemișcate la locul lor</b>: doar vibrează, ca niște copii în rând care se țin de mână;</li>
<li>💧 în <b>apă</b> sunt aproape una de alta, dar <b>alunecă</b> una pe lângă alta, ca niște copii care se plimbă prin curte;</li>
<li>♨️ în <b>vapori</b> sunt <b>departe</b> una de alta și aleargă peste tot, ca niște copii care se joacă de-a prinselea pe o pajiște uriașă.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Gheața plutește",
      html: `<p>Aproape toate substanțele, când devin solide, se strâng. Apa nu! Când îngheață, se <b>dilată</b> (cu aproximativ o zecime): de aceea o sticlă plină uitată în congelator poate <b>exploda</b>. 💥</p>
<p>Din același motiv, gheața este mai ușoară decât apa și <b>plutește</b>: aisbergurile plutesc în mare, iar iarna lacurile îngheață doar la suprafață. Dedesubt, peștii continuă să înoate! 🐟</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? La munte pastele se fierb mai greu",
      html: `<p>În oraș, apa fierbe la <b>100 °C</b>. La munte, sus, aerul „apasă” mai puțin pe apă și aceasta fierbe mai devreme: pe vârful <b>Everest</b> (8849 m) fierbe la aproximativ <b>70 °C</b>!</p>
<p>Așa că acolo sus pastele și ouăle se gătesc mult mai încet. 🍝🏔️</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege stările apei",
      intro: "Dacă cuvintele grele te încurcă, încearcă cu jocuri, desene și 3D.",
      tabs: [
        {
          label: "💃 Dansul particulelor",
          html: `<p>Jucați-vă în clasă! Fiecare copil este o moleculă de apă.</p>
<ul>
<li>🧊 <b>Gheață</b>: toți strânși, vă țineți de mână și vă legănați pe loc.</li>
<li>💧 Învățătoarea spune „<b>încălzesc!</b>”: dați drumul mâinilor și mergeți aproape unul de altul, alunecând pe lângă ceilalți.</li>
<li>♨️ „<b>Încălzesc și mai mult!</b>”: alergați prin toată sala de sport, departe unii de alții.</li>
<li>❄️ „<b>Răcesc!</b>”: încetiniți și vă apropiați din nou…</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="20" y="30" width="170" height="150" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
<rect x="215" y="30" width="170" height="150" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="410" y="30" width="170" height="150" fill="#f1f5f9" stroke="#64748b" stroke-width="3"/>
<g fill="#38bdf8" stroke="#0369a1" stroke-width="2">
<circle cx="55" cy="65" r="14"/><circle cx="90" cy="65" r="14"/><circle cx="125" cy="65" r="14"/><circle cx="160" cy="65" r="14"/>
<circle cx="55" cy="100" r="14"/><circle cx="90" cy="100" r="14"/><circle cx="125" cy="100" r="14"/><circle cx="160" cy="100" r="14"/>
<circle cx="55" cy="135" r="14"/><circle cx="90" cy="135" r="14"/><circle cx="125" cy="135" r="14"/><circle cx="160" cy="135" r="14"/>
</g>
<g fill="#3b82f6" stroke="#1e3a8a" stroke-width="2">
<circle cx="245" cy="150" r="14"/><circle cx="275" cy="160" r="14"/><circle cx="305" cy="148" r="14"/><circle cx="340" cy="158" r="14"/>
<circle cx="260" cy="122" r="14"/><circle cx="292" cy="120" r="14"/><circle cx="325" cy="125" r="14"/><circle cx="360" cy="130" r="14"/>
</g>
<g fill="#cbd5e1" stroke="#475569" stroke-width="2">
<circle cx="440" cy="60" r="14"/><circle cx="540" cy="80" r="14"/><circle cx="480" cy="150" r="14"/><circle cx="555" cy="155" r="14"/><circle cx="500" cy="95" r="14"/>
</g>
<text x="105" y="205" font-size="18" text-anchor="middle" fill="#0369a1" font-weight="bold">gheață: în rând</text>
<text x="300" y="205" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">apă: alunecă</text>
<text x="495" y="205" font-size="18" text-anchor="middle" fill="#475569" font-weight="bold">vapori: aleargă</text>
</svg>`
        },
        {
          label: "🇺🇸 Gradele americane",
          html: `<p>În România măsurăm temperatura în <b>grade Celsius</b> (°C): gheața se topește la <b>0 °C</b>, iar apa fierbe la <b>100 °C</b>.</p>
<p>În <b>Statele Unite</b> folosesc <b>gradele Fahrenheit</b> (°F): acolo gheața se topește la <b>32 °F</b>, iar apa fierbe la <b>212 °F</b>! Dacă un copil american spune „afară sunt 90 de grade”, nu se pârjolește: sunt aproximativ 32 °C, o zi de vară.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Gheața se topește", "0 °C = 32 °F"],
              ["Apa fierbe", "100 °C = 212 °F"],
              ["Corpul nostru", "aproximativ 37 °C = 98,6 °F"],
              ["O zi frumoasă de vară", "aproximativ 30 °C = 86 °F"]
            ]
          }
        },
        {
          label: "🌍 Apa pe planetă",
          html: `<p>Pe Pământ apa se găsește în toate cele trei stări: <b>solidă</b> în ghețurile de la Poli și de pe munți, <b>lichidă</b> în mări, lacuri și râuri, <b>gazoasă</b> în aer. Mările acoperă aproximativ <b>7 zecimi</b> din suprafața Pământului: de aceea din spațiu pare o planetă albastră! Rotește globul.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -80, lon: 0, label: "🧊 Antarctica: gheață", color: "#38bdf8" },
              { lat: 72, lon: -40, label: "🧊 Groenlanda: gheață", color: "#38bdf8" },
              { lat: 0, lon: -150, label: "💧 Oceanul Pacific", color: "#1d4ed8" },
              { lat: 46, lon: 8, label: "🏔️ Ghețarii din Alpi", color: "#7dd3fc" },
              { lat: -3, lon: -60, label: "♨️ Amazonia: aer foarte umed", color: "#64748b" }
            ]
          }
        },
        {
          label: "🃏 Cartonașe cu schimbările",
          html: `<p>Întoarce cartonașele și repetă numele schimbărilor de stare.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🧊 → 💧", back: "Topire (prin încălzire, la 0 °C)" },
              { front: "💧 → 🧊", back: "Solidificare (prin răcire, la 0 °C)" },
              { front: "💧 → ♨️", back: "Evaporare (fierbere la 100 °C)" },
              { front: "♨️ → 💧", back: "Condensare (prin răcire)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta stărilor apei: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "molecole", label: "Molecule H₂O", x: 50, y: 8, color: "#ef4444", html: "Particulele foarte mici din care este făcută apa: 1 oxigen + 2 hidrogeni.", why: "În <b>1783–1784</b>, francezul <b>Antoine Lavoisier</b> a demonstrat că apa nu este un „element”, cum se credea de 2000 de ani, ci este făcută din două gaze: hidrogen și oxigen. Englezul Henry Cavendish obținuse deja apă arzând hidrogenul." },
        { id: "calore", label: "Căldură", x: 50, y: 32, color: "#f97316", html: "Mai multă căldură = particule mai agitate.", why: "Căldura este energie: face moleculele să se miște tot mai repede. Când se mișcă destul de tare, se desprind unele de altele și apa își schimbă starea." },
        { id: "solido", label: "Solid (gheață)", x: 15, y: 55, color: "#0ea5e9", html: "Formă și volum proprii; particule nemișcate la locul lor.", why: "În gheață, moleculele se „agață” între ele în multe hexagoane: de aceea fulgii de zăpadă au <b>6 vârfuri</b>. Această structură are multe spații goale: de aceea gheața plutește." },
        { id: "liquido", label: "Lichid (apă)", x: 50, y: 60, color: "#2563eb", html: "Volum propriu, dar forma vasului; particule care alunecă.", why: "Moleculele rămân aproape una de alta pentru că se atrag, dar pot curge una pe lângă alta. De aceea apa se poate turna și umple orice colț al paharului." },
        { id: "gas", label: "Gazos (vapori)", x: 85, y: 55, color: "#64748b", html: "Nici formă, nici volum proprii; particule îndepărtate care aleargă.", why: "Moleculele sunt atât de rapide, încât se desprind complet și ocupă tot spațiul pe care îl găsesc. De aceea mirosul de tort ajunge până în cameră!" },
        { id: "termometro", label: "Termometrul și gradele", x: 20, y: 85, color: "#a855f7", html: "Instrument care măsoară temperatura în grade.", why: "În <b>1742</b>, suedezul <b>Anders Celsius</b> și-a inventat scara folosind două puncte fixe ale apei. La început, însă, o făcuse „pe dos”: 0 pentru apa care fierbe și 100 pentru gheață! Puțin mai târziu a fost răsturnată și este cea pe care o folosim azi." },
        { id: "punti", label: "0 °C și 100 °C", x: 55, y: 85, color: "#16a34a", html: "Apa îngheață la 0 °C și fierbe la 100 °C (la nivelul mării).", why: "Sunt numere „rotunde” pentru că scara Celsius a fost construită chiar pe apă. La munte, apa fierbe sub 100 °C, pentru că aerul apasă mai puțin." },
        { id: "ciclo", label: "Circuitul apei", x: 85, y: 85, color: "#14b8a6", html: "În natură, apa își schimbă mereu starea: mări, nori, ploaie.", why: "Soarele evaporă marea, vaporii urcă și se condensează în nori, apoi cad înapoi ca ploaie sau zăpadă. Este aceeași apă de miliarde de ani: poate ai băut o gură de apă pe care a băut-o și un dinozaur! 🦕" }
      ],
      edges: [
        ["molecole", "calore", "se agită odată cu"],
        ["calore", "solido", "puțină"],
        ["calore", "liquido", "mai multă"],
        ["calore", "gas", "multă"],
        ["solido", "liquido", "topire"],
        ["liquido", "gas", "evaporare"],
        ["termometro", "punti", "măsoară"],
        ["liquido", "punti", "își schimbă starea la"],
        ["gas", "ciclo", "formează norii din"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: schimbările",
      questions: [
        { type: "mc", q: "La câte grade fierbe apa (la nivelul mării)?", options: ["0 °C", "37 °C", "100 °C"], answer: 2, explain: "Apa fierbe la 100 °C." },
        { type: "mc", q: "Oglinda aburită după duș este un exemplu de…", options: ["topire", "condensare", "solidificare"], answer: 1, explain: "Vaporii ating oglinda rece și redevin lichizi: condensare." },
        { type: "tf", q: "Gheața se scufundă în apă.", answer: false, explain: "Gheața este mai ușoară decât apa și plutește." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Apa are 3 stări: <b>solidă</b> (gheață), <b>lichidă</b> (apă), <b>gazoasă</b> (vapori).</li>
<li>Prin încălzire: <b>topire</b> (🧊→💧) și <b>evaporare</b> (💧→♨️).</li>
<li>Prin răcire: <b>condensare</b> (♨️→💧) și <b>solidificare</b> (💧→🧊).</li>
<li>Îngheață la <b>0 °C</b>, fierbe la <b>100 °C</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Stare solidă", d: "Are formă și volum proprii, ca gheața." },
    { t: "Stare lichidă", d: "Are volum propriu, dar ia forma vasului, ca apa." },
    { t: "Stare gazoasă", d: "Nu are nici formă, nici volum proprii și se răspândește peste tot, ca vaporii." },
    { t: "Topire", d: "Trecerea din stare solidă în stare lichidă." },
    { t: "Solidificare", d: "Trecerea din stare lichidă în stare solidă." },
    { t: "Evaporare", d: "Trecerea din stare lichidă în stare gazoasă." },
    { t: "Condensare", d: "Trecerea din stare gazoasă în stare lichidă." },
    { t: "Fierbere", d: "Evaporare rapidă, cu bule, la 100 °C." },
    { t: "Termometru", d: "Instrument care măsoară temperatura." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "În ce stare se află zăpada?", options: ["Solidă", "Lichidă", "Gazoasă"], answer: 0, explain: "Zăpada este apă solidă." },
      { type: "mc", q: "Cum se numește trecerea de la gheață la apă?", options: ["Topire", "Condensare", "Evaporare"], answer: 0, explain: "Topirea: solidul devine lichid." },
      { type: "num", q: "La câte grade Celsius îngheață apa?", answer: 0, unit: "°C", explain: "Apa îngheață la 0 °C." },
      { type: "num", q: "La câte grade Celsius fierbe apa la nivelul mării?", answer: 100, unit: "°C", explain: "Apa fierbe la 100 °C." },
      { type: "tf", q: "Vaporii de apă sunt invizibili.", answer: true, explain: "Adevăratul vapor este invizibil; „norișorul” alb este făcut din picături." },
      { type: "tf", q: "Apa lichidă are forma ei.", answer: false, explain: "Apa ia forma vasului." },
      { type: "mc", q: "Rufele întinse se usucă pentru că apa…", options: ["îngheață", "se evaporă", "se condensează"], answer: 1, explain: "Căldura și vântul fac apa din rufe să se evapore." },
      { type: "order", q: "Pune în ordine: un cub de gheață într-o oală pe foc.", items: ["Gheață solidă", "Gheața se topește", "Apă lichidă", "Apa fierbe și devine vapori"], explain: "Prin încălzire: mai întâi topirea, apoi evaporarea." },
      { type: "text", q: "Cum se numește trecerea de la vapori la apă lichidă?", answer: ["condensare", "condensarea"], explain: "Condensarea." },
      { type: "mc", q: "De ce poate exploda o sticlă plină cu apă în congelator?", options: ["Pentru că apa se dilată când îngheață", "Pentru că congelatorul este prea cald", "Pentru că gheața este grea"], answer: 0, explain: "Când îngheață, apa își mărește volumul." },
      { type: "mc", q: "Ce face apa să-și schimbe starea?", options: ["Culoarea", "Căldura", "Zgomotul"], answer: 1, explain: "Prin încălzire sau răcire, apa își schimbă starea." },
      { type: "tf", q: "Gheața, apa și vaporii sunt aceeași substanță.", answer: true, explain: "Toate sunt făcute din molecule H₂O: se schimbă doar starea." }
    ]
  }
});
