TOPIC('ro', {
  id: "p3-ing-clothes",
  title: "Clothes and weather",
  intro: "Hello! 👋 Ce vreme este azi? ☀️🌧️❄️ În funcție de vreme alegem <b>hainele</b>. Astăzi învățăm în engleză numele hainelor (<b>clothes</b>) și ale vremii (<b>the weather</b>) și cum să spunem propoziții precum <i>«It's cold. Put on your coat!»</i> 🧥",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The weather: ce vreme este? 🌦️",
      html: `<p>Ca să întrebi ce vreme este, se spune: <b>What's the weather like?</b> (uots dhe ue-dhăr laik?)</p>
<p>Se răspunde cu <b>It's…</b> (its…):</p>
<table><tr><th>Engleză</th><th>Se pronunță</th><th>Română</th></tr>
<tr><td>☀️ It's <b>sunny</b></td><td>să-ni</td><td>este soare</td></tr>
<tr><td>☁️ It's <b>cloudy</b></td><td>clau-di</td><td>este înnorat</td></tr>
<tr><td>🌧️ It's <b>rainy</b></td><td>rei-ni</td><td>plouă</td></tr>
<tr><td>💨 It's <b>windy</b></td><td>uin-di</td><td>bate vântul</td></tr>
<tr><td>❄️ It's <b>snowy</b></td><td>snou-i</td><td>ninge</td></tr>
<tr><td>🌫️ It's <b>foggy</b></td><td>fo-ghi</td><td>este ceață</td></tr>
<tr><td>🥵 It's <b>hot</b></td><td>hot</td><td>este cald</td></tr>
<tr><td>🥶 It's <b>cold</b></td><td>cauld</td><td>este frig</td></tr>
</table>
<p>Truc: aproape toate se formează dintr-un cuvânt + <b>-y</b>: sun → sunn<b>y</b>, cloud → cloud<b>y</b>, rain → rain<b>y</b>, wind → wind<b>y</b>, snow → snow<b>y</b>, fog → fogg<b>y</b>.</p>`
    },
    {
      type: "svg", title: "Weather symbols",
      caption: "Simbolurile meteo pe care le vezi la TV, cu numele lor englezesc.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#eff6ff"/>
<circle cx="75" cy="80" r="35" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
<line x1="75" y1="25" x2="75" y2="35" stroke="#ca8a04" stroke-width="4"/>
<line x1="75" y1="125" x2="75" y2="135" stroke="#ca8a04" stroke-width="4"/>
<line x1="20" y1="80" x2="30" y2="80" stroke="#ca8a04" stroke-width="4"/>
<line x1="120" y1="80" x2="130" y2="80" stroke="#ca8a04" stroke-width="4"/>
<text x="75" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="#a16207">sunny</text>
<ellipse cx="225" cy="85" rx="55" ry="28" fill="#94a3b8"/>
<circle cx="205" cy="68" r="25" fill="#94a3b8"/>
<circle cx="240" cy="62" r="30" fill="#94a3b8"/>
<text x="225" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="#475569">cloudy</text>
<ellipse cx="375" cy="70" rx="55" ry="26" fill="#64748b"/>
<circle cx="360" cy="55" r="24" fill="#64748b"/>
<line x1="345" y1="105" x2="338" y2="125" stroke="#2563eb" stroke-width="4"/>
<line x1="370" y1="105" x2="363" y2="125" stroke="#2563eb" stroke-width="4"/>
<line x1="395" y1="105" x2="388" y2="125" stroke="#2563eb" stroke-width="4"/>
<text x="375" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="#1d4ed8">rainy</text>
<path d="M470,60 Q520,45 560,60" stroke="#0891b2" stroke-width="5" fill="none"/>
<path d="M480,85 Q530,70 575,85" stroke="#0891b2" stroke-width="5" fill="none"/>
<path d="M470,110 Q515,95 550,110" stroke="#0891b2" stroke-width="5" fill="none"/>
<text x="520" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="#0e7490">windy</text>
<text x="150" y="250" font-size="44" text-anchor="middle">❄️</text>
<text x="150" y="290" font-size="20" font-weight="bold" text-anchor="middle" fill="#0369a1">snowy</text>
<rect x="250" y="215" width="100" height="8" rx="4" fill="#cbd5e1"/>
<rect x="240" y="232" width="120" height="8" rx="4" fill="#cbd5e1"/>
<rect x="255" y="249" width="90" height="8" rx="4" fill="#cbd5e1"/>
<text x="300" y="290" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b">foggy</text>
<text x="450" y="250" font-size="44" text-anchor="middle">🌡️</text>
<text x="450" y="290" font-size="20" font-weight="bold" text-anchor="middle" fill="#dc2626">hot / cold</text>
</svg>`
    },
    {
      type: "quiz", title: "Mini-test: the weather",
      questions: [
        { type: "mc", q: "«It's rainy» înseamnă…", options: ["este soare", "plouă", "bate vântul"], answer: 1, explain: "Rain = ploaie, rainy = ploios 🌧️." },
        { type: "mc", q: "Cum se spune «este frig»?", options: ["It's hot", "It's cold", "It's cloudy"], answer: 1, explain: "Cold = frig, rece 🥶." },
        { type: "text", q: "Completează: It's sun… (este soare)", answer: ["sunny", "it's sunny"], explain: "Sun → sunny: n se dublează și se adaugă -y." }
      ]
    },
    {
      type: "text", title: "Clothes: hainele 👕",
      html: `<ul>
<li>👕 <b>T-shirt</b> (ti-șert) – tricou · 👔 <b>shirt</b> – cămașă</li>
<li>🧶 <b>jumper</b> (gea-măr) – pulover · 🧥 <b>jacket</b> (ge-chet) – jachetă · <b>coat</b> (cout) – palton</li>
<li>👖 <b>trousers</b> (trau-zărz) – pantaloni · <b>jeans</b> (ginz) – blugi · 🩳 <b>shorts</b> – pantaloni scurți</li>
<li>👗 <b>dress</b> – rochie · <b>skirt</b> (skert) – fustă</li>
<li>🧦 <b>socks</b> – ciorapi scurți · 👟 <b>shoes</b> (șuuz) – pantofi · 🥾 <b>boots</b> – cizme, ghete</li>
<li>🧢 <b>cap</b> – șapcă · 👒 <b>hat</b> – pălărie · 🧣 <b>scarf</b> – fular · 🧤 <b>gloves</b> (glavz) – mănuși</li>
</ul>
<p>Și umbrela? ☂️ <b>umbrella</b> (am-bre-lă). Nu este o haină, dar când plouă este necesară!</p>`
    },
    {
      type: "remember", title: "Propozițiile de folosit",
      html: `<ul>
<li><b>I'm wearing</b> a red T-shirt. = Port (am pe mine) un tricou roșu.</li>
<li><b>Put on</b> your coat! = Pune-ți paltonul!</li>
<li><b>Take off</b> your jumper! = Dă-ți jos puloverul!</li>
<li>It's cold, so I <b>wear</b> my gloves. = Este frig, așa că port mănușile.</li>
</ul>
<p>⚠️ <b>trousers, jeans, shorts</b> sunt întotdeauna la <b>plural</b> (au două picioare!): <i>My jeans <b>are</b> blue.</i> Ca să le numeri se spune <b>a pair of</b> jeans = o pereche de blugi.</p>`
    },
    {
      type: "widget", title: "Joc: la ce vreme o îmbraci?",
      widget: "classify",
      caption: "Pune fiecare haină în grupul potrivit: o porți când este cald sau când este frig?",
      options: {
        groups: ["☀️ It's hot", "❄️ It's cold"],
        items: [["👕 T-shirt", 0], ["🩳 shorts", 0], ["🧢 cap", 0], ["👗 dress", 0], ["🩴 sandals", 0], ["🧥 coat", 1], ["🧣 scarf", 1], ["🧤 gloves", 1], ["🧶 jumper", 1], ["🥾 boots", 1]]
      }
    },
    {
      type: "widget", title: "Flashcards: hainele",
      widget: "flashcards",
      caption: "Spune cuvântul englezesc cu voce tare, apoi întoarce cartonașul.",
      options: {
        cards: [
          { front: "👕 T-shirt", back: "tricou" }, { front: "👔 shirt", back: "cămașă" }, { front: "🧶 jumper", back: "pulover" },
          { front: "🧥 coat", back: "palton" }, { front: "👖 trousers", back: "pantaloni" }, { front: "🩳 shorts", back: "pantaloni scurți" },
          { front: "👗 dress", back: "rochie" }, { front: "skirt", back: "fustă" }, { front: "🧦 socks", back: "ciorapi scurți" },
          { front: "👟 shoes", back: "pantofi" }, { front: "🧣 scarf", back: "fular" }, { front: "🧤 gloves", back: "mănuși" }, { front: "👒 hat", back: "pălărie" }
        ]
      }
    },
    {
      type: "example", title: "Exemplu: înainte de a ieși 🚪",
      html: `<p><b>Mum:</b> Look outside, Tom! What's the weather like?<br>
<b>Tom:</b> It's cold and windy. 💨<br>
<b>Mum:</b> Put on your coat and your scarf!<br>
<b>Tom:</b> And my gloves?<br>
<b>Mum:</b> Yes! And take your umbrella. It's cloudy… ☁️<br>
<b>Tom:</b> OK, mum. Bye! 👋</p>`
    },
    {
      type: "example", title: "Exemplu: valiza pentru vacanță 🧳",
      html: `<p>Anna merge la mare în august, iar Luca merge la munte în ianuarie. Iată listele lor:</p>
<table><tr><th>🏖️ Anna – It's hot and sunny</th><th>🏔️ Luca – It's cold and snowy</th></tr>
<tr><td>three T-shirts</td><td>two jumpers</td></tr>
<tr><td>two pairs of shorts</td><td>a coat</td></tr>
<tr><td>a dress</td><td>a hat, a scarf and gloves</td></tr>
<tr><td>a cap and sandals</td><td>boots and warm socks</td></tr></table>
<p>Acum scrie-ți lista ta: unde mergi? What's the weather like?</p>`
    },
    {
      type: "curiosity", title: "Știai că… blugii au un nume italian?",
      html: `<p>Pânza albastră a blugilor se folosea deja în 1500 la <b>Genova</b>, pentru hainele marinarilor și ale docherilor. Francezii numeau Genova <b>Gênes</b>: de aici s-a născut numele <b>jeans</b>! 👖</p>
<p>Și pânza <b>denim</b>? Vine de la orașul francez Nîmes: <i>de Nîmes</i> = „din Nîmes”. În 1873, la San Francisco, Levi Strauss și Jacob Davis au brevetat blugii cu nituri de metal, pentru căutătorii de aur și pentru mineri.</p>`
    },
    {
      type: "curiosity", title: "Știai că… englezii vorbesc mereu despre vreme?",
      html: `<p>În Marea Britanie vremea se schimbă des, chiar de mai multe ori într-o zi! De aceea a vorbi despre meteo este cel mai obișnuit mod de a începe o conversație cu oricine: <i>«Lovely day, isn't it?»</i> (Ce zi frumoasă, nu-i așa?) sau <i>«Terrible weather today!»</i>.</p>
<p>Și știi care este cea mai tipică îmbrăcăminte a elevilor englezi? <b>School uniform</b>, uniforma școlară: aproape toate școlile au una, cu <b>blazer</b> (sacou), cravată și pulover în culoarea școlii.</p>`
    },
    {
      type: "alternatives", title: "Alte moduri de a ține minte cuvintele",
      intro: "<p>Dacă cuvintele nu-ți intră în cap, încearcă un alt drum!</p>",
      tabs: [
        {
          label: "🧸 Îmbracă ursulețul",
          html: `<p>Ia o jucărie de pluș și niște hăinuțe (sau desenează-le și decupează-le). Un coleg spune vremea, iar tu îmbraci ursulețul spunând cu voce tare ce faci:</p>
<p><i>«It's snowy!»</i> → <i>«I put on his <b>hat</b>… his <b>scarf</b>… his <b>gloves</b>!»</i> 🧸❄️</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#e0f2fe"/>
<circle cx="300" cy="80" r="45" fill="#b45309"/>
<circle cx="262" cy="42" r="16" fill="#b45309"/>
<circle cx="338" cy="42" r="16" fill="#b45309"/>
<circle cx="285" cy="75" r="5" fill="#111827"/>
<circle cx="315" cy="75" r="5" fill="#111827"/>
<ellipse cx="300" cy="95" rx="12" ry="8" fill="#fcd9b6"/>
<path d="M255,48 Q300,0 345,48 Z" fill="#dc2626"/>
<circle cx="300" cy="10" r="10" fill="#ffffff"/>
<ellipse cx="300" cy="175" rx="60" ry="55" fill="#2563eb"/>
<rect x="250" y="120" width="100" height="18" rx="8" fill="#16a34a"/>
<rect x="320" y="125" width="18" height="55" fill="#16a34a"/>
<circle cx="235" cy="170" r="16" fill="#facc15"/>
<circle cx="365" cy="170" r="16" fill="#facc15"/>
<text x="120" y="25" font-size="20" font-weight="bold" fill="#dc2626">hat</text>
<text x="420" y="135" font-size="20" font-weight="bold" fill="#16a34a">scarf</text>
<text x="130" y="175" font-size="20" font-weight="bold" fill="#a16207">gloves</text>
<text x="420" y="210" font-size="20" font-weight="bold" fill="#1d4ed8">coat</text>
</svg>`
        },
        {
          label: "🇬🇧🇺🇸 Engleză britanică sau americană?",
          html: `<p>Unele haine au nume diferite în Marea Britanie și în Statele Unite. Nu sunt greșeli: sunt două „dialecte” ale englezei!</p>
<table><tr><th>🇬🇧 UK</th><th>🇺🇸 USA</th><th>🇷🇴</th></tr>
<tr><td>trousers</td><td>pants</td><td>pantaloni</td></tr>
<tr><td>jumper</td><td>sweater</td><td>pulover</td></tr>
<tr><td>trainers</td><td>sneakers</td><td>adidași</td></tr>
<tr><td>pants</td><td>underwear</td><td>chiloți 🙈</td></tr></table>
<p>Atenție la ultimul rând: la Londra <b>pants</b> sunt chiloții, la New York pantalonii! 😄</p>`
        },
        {
          label: "🎵 Cântecul vremii",
          html: `<p>Pe melodia <i>«Frère Jacques»</i> (<i>«Frate Iacob»</i>) cântă:</p>
<p style="font-size:1.15em"><i>What's the weather, what's the weather,<br>like today? Like today?<br>Is it sunny? ☀️ Is it rainy? 🌧️<br>Is it cloudy? ☁️ Is it snowy? ❄️<br>Let's go play! Let's go play!</i></p>
<p>În fiecare dimineață privește pe fereastră și răspunde: <i>«It's…!»</i></p>`
        },
        {
          label: "🔗 Potrivește vremea și haina",
          html: `<p>Leagă fiecare vreme de haina sau obiectul de care ai cel mai mult nevoie.</p>`,
          widget: "match",
          options: { pairs: [["It's rainy 🌧️", "umbrella"], ["It's snowy ❄️", "boots"], ["It's sunny ☀️", "cap"], ["It's cold 🥶", "coat"], ["It's hot 🥵", "shorts"], ["It's windy 💨", "scarf"]] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Hartă: vremea și hainele în engleză",
      nodes: [
        { id: "weather", label: "The weather", x: 25, y: 8, color: "#0ea5e9", html: "Starea vremii: <i>What's the weather like?</i>", why: "Vremea depinde de soare, nori, vânt și temperatura aerului. Englezii vorbesc foarte mult despre ea pentru că clima Marii Britanii, oceanică și umedă, se schimbă foarte repede." },
        { id: "y", label: "Cuvânt + y", x: 10, y: 38, color: "#f59e0b", html: "sun → sunny, rain → rainy, wind → windy.", why: "În engleză terminația <b>-y</b> transformă un substantiv într-un adjectiv: „cu soare”, „cu ploaie”. Dacă cuvântul se termină cu o vocală + o consoană, consoana se dublează: sun → sunny, fog → foggy." },
        { id: "temp", label: "Hot / cold", x: 40, y: 38, color: "#dc2626", html: "Este cald, este frig.", why: "În engleză vremea se descrie cu <b>It's</b> + adjectiv: <i>it</i> este un subiect „gol” care servește doar ca să susțină propoziția, pentru că în engleză subiectul nu poate fi niciodată omis (în română spunem doar „este cald”)." },
        { id: "clothes", label: "Clothes", x: 75, y: 8, color: "#a855f7", html: "Hainele: T-shirt, jumper, coat, shoes…", why: "Ne îmbrăcăm diferit după vreme ca să ținem corpul la temperatura potrivită: iarna hainele rețin căldura, vara lasă să treacă aerul." },
        { id: "pair", label: "Mereu la plural", x: 90, y: 38, color: "#2563eb", html: "trousers, jeans, shorts → a pair of…", why: "Sunt la plural pentru că sunt formate din două părți egale, cele două picioare, ca <i>scissors</i> (foarfece) și <i>glasses</i> (ochelari). Și în română spunem „pantalonii” și „o pereche de”." },
        { id: "warm", label: "Haine pentru frig", x: 60, y: 45, color: "#0f766e", html: "coat, scarf, gloves, boots, hat.", why: "Lâna și puful rețin un strat de aer nemișcat lângă corp: aerul nemișcat este un foarte bun izolant, așa că nu scapă căldura." },
        { id: "verbs", label: "Put on / take off / wear", x: 50, y: 78, color: "#16a34a", html: "A pune pe tine, a da jos, a purta.", why: "<i>Put on</i> și <i>take off</i> sunt „phrasal verbs”: un verb plus un cuvințel (on, off) care îi schimbă sensul. <i>On</i> = pe, deasupra; <i>off</i> = jos, departe." },
        { id: "uk", label: "UK și USA", x: 85, y: 78, color: "#e11d48", html: "trousers / pants, jumper / sweater.", why: "Când englezii au colonizat America (din 1600), cele două limbi s-au despărțit puțin și unele cuvinte s-au schimbat, cum se întâmplă între dialectele unei limbi." }
      ],
      edges: [
        ["weather", "y", "se spune cu"], ["weather", "temp", "It's…"], ["weather", "clothes", "hotărăște"],
        ["temp", "warm", "dacă e cold"], ["clothes", "pair", "unele sunt"], ["clothes", "warm", "iarna"], ["clothes", "verbs", "se folosesc cu"], ["clothes", "uk", "nume diferite"]
      ]
    },
    {
      type: "quiz", title: "Mini-test: clothes",
      questions: [
        { type: "mc", q: "Este frig. Ce îmbraci?", options: ["shorts", "a coat", "sandals"], answer: 1, explain: "It's cold → put on a coat 🧥." },
        { type: "mc", q: "«Gloves» sunt…", options: ["mănuși", "ciorapi", "cizme"], answer: 0, explain: "Gloves = mănuși 🧤." },
        { type: "tf", q: "Se spune «My jeans are blue», la plural.", answer: true, explain: "Jeans, trousers și shorts sunt întotdeauna la plural." }
      ]
    }
  ],
  glossary: [
    { t: "weather", d: "starea vremii. What's the weather like? = Ce vreme este?" },
    { t: "sunny · cloudy · rainy", d: "însorit · înnorat · ploios" },
    { t: "windy · snowy · foggy", d: "cu vânt · cu zăpadă · cu ceață" },
    { t: "hot · cold", d: "cald · rece, frig" },
    { t: "clothes", d: "haine" },
    { t: "T-shirt · shirt · jumper", d: "tricou · cămașă · pulover" },
    { t: "jacket · coat", d: "jachetă · palton" },
    { t: "trousers · jeans · shorts", d: "pantaloni · blugi · pantaloni scurți (mereu la plural)" },
    { t: "dress · skirt", d: "rochie · fustă" },
    { t: "socks · shoes · boots", d: "ciorapi scurți · pantofi · cizme" },
    { t: "hat · cap · scarf · gloves", d: "pălărie · șapcă · fular · mănuși" },
    { t: "umbrella", d: "umbrelă" },
    { t: "put on / take off / wear", d: "a pune pe tine / a da jos / a purta" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cum întrebi «Ce vreme este?»", options: ["What's the weather like?", "What colour is it?", "How old are you?"], answer: 0, explain: "What's the weather like? = Ce vreme este?" },
      { type: "mc", q: "«It's windy» înseamnă…", options: ["este ceață", "bate vântul", "ninge"], answer: 1, explain: "Wind = vânt, windy = cu vânt 💨." },
      { type: "text", q: "Scrie în engleză: ninge (It's …)", answer: ["snowy", "it's snowy", "it is snowy"], explain: "Snow = zăpadă, snowy = cu zăpadă ❄️." },
      { type: "mc", q: "Cum se spune «fular»?", options: ["scarf", "skirt", "shirt"], answer: 0, explain: "Scarf = fular. Skirt = fustă, shirt = cămașă." },
      { type: "text", q: "Scrie în engleză: ciorapi scurți", answer: ["socks"], explain: "Ciorapi scurți = socks 🧦." },
      { type: "mc", q: "It's hot and sunny. Ce îmbraci?", options: ["gloves", "a T-shirt and shorts", "boots and a coat"], answer: 1, explain: "Pe căldură se îmbracă haine ușoare." },
      { type: "mc", q: "«Put on your hat!» înseamnă…", options: ["Dă-ți jos pălăria!", "Pune-ți pălăria!", "Cumpără o pălărie!"], answer: 1, explain: "Put on = a pune pe tine; take off = a da jos." },
      { type: "tf", q: "În engleză «trousers» este un cuvânt la plural.", answer: true, explain: "My trousers are… → a pair of trousers." },
      { type: "tf", q: "La Londra «pants» sunt pantalonii.", answer: false, explain: "În Marea Britanie pants = chiloți; pantalonii sunt trousers. În America, în schimb, pants = pantaloni." },
      { type: "order", q: "Pune în ordine cuvintele ca să formezi propoziția: «Port un pulover roșu».", items: ["I'm", "wearing", "a", "red", "jumper"], explain: "I'm wearing a red jumper: culoarea stă înaintea hainei." },
      { type: "mc", q: "Numele «jeans» vine de la orașul…", options: ["Londra", "Genova", "Paris"], answer: 1, explain: "Din franțuzescul Gênes = Genova, unde se folosea acea pânză albastră." },
      { type: "mc", q: "Ce îți trebuie dacă «It's rainy»?", options: ["an umbrella", "sandals", "a cap"], answer: 0, explain: "Când plouă îți trebuie umbrela: umbrella ☂️." }
    ]
  }
});
