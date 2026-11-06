TOPIC('it', {
  id: "p3-ing-clothes",
  title: "Clothes and weather",
  intro: "Hello! 👋 Che tempo fa oggi? ☀️🌧️❄️ In base al tempo scegliamo i <b>vestiti</b>. Oggi impariamo in inglese i nomi dei vestiti (<b>clothes</b>) e del tempo atmosferico (<b>the weather</b>), e a dire frasi come <i>«It's cold. Put on your coat!»</i> 🧥",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The weather: che tempo fa? 🌦️",
      html: `<p>Per chiedere che tempo fa si dice: <b>What's the weather like?</b> (uots dhe uè-dher laik?)</p>
<p>Si risponde con <b>It's…</b> (è…):</p>
<table><tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>
<tr><td>☀️ It's <b>sunny</b></td><td>sà-ni</td><td>c'è il sole</td></tr>
<tr><td>☁️ It's <b>cloudy</b></td><td>clàu-di</td><td>è nuvoloso</td></tr>
<tr><td>🌧️ It's <b>rainy</b></td><td>rèi-ni</td><td>piove</td></tr>
<tr><td>💨 It's <b>windy</b></td><td>uìn-di</td><td>c'è vento</td></tr>
<tr><td>❄️ It's <b>snowy</b></td><td>snòu-i</td><td>nevica</td></tr>
<tr><td>🌫️ It's <b>foggy</b></td><td>fò-ghi</td><td>c'è nebbia</td></tr>
<tr><td>🥵 It's <b>hot</b></td><td>hot</td><td>fa caldo</td></tr>
<tr><td>🥶 It's <b>cold</b></td><td>cold</td><td>fa freddo</td></tr>
</table>
<p>Trucco: quasi tutte nascono da una parola + <b>-y</b>: sun → sunn<b>y</b>, cloud → cloud<b>y</b>, rain → rain<b>y</b>, wind → wind<b>y</b>, snow → snow<b>y</b>, fog → fogg<b>y</b>.</p>`
    },
    {
      type: "svg", title: "Weather symbols",
      caption: "I simboli del meteo che vedi in TV, con il loro nome inglese.",
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
      type: "quiz", title: "Mini-quiz: the weather",
      questions: [
        { type: "mc", q: "«It's rainy» vuol dire…", options: ["c'è il sole", "piove", "c'è vento"], answer: 1, explain: "Rain = pioggia, rainy = piovoso 🌧️." },
        { type: "mc", q: "Come si dice «fa freddo»?", options: ["It's hot", "It's cold", "It's cloudy"], answer: 1, explain: "Cold = freddo 🥶." },
        { type: "text", q: "Completa: It's sun… (c'è il sole)", answer: ["sunny", "it's sunny"], explain: "Sun → sunny: la n raddoppia e si aggiunge -y." }
      ]
    },
    {
      type: "text", title: "Clothes: i vestiti 👕",
      html: `<ul>
<li>👕 <b>T-shirt</b> (tì-shert) – maglietta · 👔 <b>shirt</b> – camicia</li>
<li>🧶 <b>jumper</b> (giàm-per) – maglione · 🧥 <b>jacket</b> (gè-chet) – giacca · <b>coat</b> (cout) – cappotto</li>
<li>👖 <b>trousers</b> (tràu-sers) – pantaloni · <b>jeans</b> (giins) – jeans · 🩳 <b>shorts</b> – pantaloncini</li>
<li>👗 <b>dress</b> – vestito da donna · <b>skirt</b> (skert) – gonna</li>
<li>🧦 <b>socks</b> – calzini · 👟 <b>shoes</b> (shuuz) – scarpe · 🥾 <b>boots</b> – stivali</li>
<li>🧢 <b>cap</b> – berretto · 👒 <b>hat</b> – cappello · 🧣 <b>scarf</b> – sciarpa · 🧤 <b>gloves</b> (glavs) – guanti</li>
</ul>
<p>E l'ombrello? ☂️ <b>umbrella</b> (am-brè-la). Non è un vestito, ma con la pioggia serve!</p>`
    },
    {
      type: "remember", title: "Le frasi da usare",
      html: `<ul>
<li><b>I'm wearing</b> a red T-shirt. = Indosso (porto) una maglietta rossa.</li>
<li><b>Put on</b> your coat! = Mettiti il cappotto!</li>
<li><b>Take off</b> your jumper! = Togliti il maglione!</li>
<li>It's cold, so I <b>wear</b> my gloves. = Fa freddo, quindi metto i guanti.</li>
</ul>
<p>⚠️ <b>trousers, jeans, shorts</b> sono sempre <b>plurali</b> (hanno due gambe!): <i>My jeans <b>are</b> blue.</i> Per contarli si dice <b>a pair of</b> jeans = un paio di jeans.</p>`
    },
    {
      type: "widget", title: "Gioco: con che tempo lo metti?",
      widget: "classify",
      caption: "Metti ogni vestito nel gruppo giusto: lo usi quando fa caldo o quando fa freddo?",
      options: {
        groups: ["☀️ It's hot", "❄️ It's cold"],
        items: [["👕 T-shirt", 0], ["🩳 shorts", 0], ["🧢 cap", 0], ["👗 dress", 0], ["🩴 sandals", 0], ["🧥 coat", 1], ["🧣 scarf", 1], ["🧤 gloves", 1], ["🧶 jumper", 1], ["🥾 boots", 1]]
      }
    },
    {
      type: "widget", title: "Flashcards: i vestiti",
      widget: "flashcards",
      caption: "Di' la parola inglese ad alta voce, poi gira la carta.",
      options: {
        cards: [
          { front: "👕 T-shirt", back: "maglietta" }, { front: "👔 shirt", back: "camicia" }, { front: "🧶 jumper", back: "maglione" },
          { front: "🧥 coat", back: "cappotto" }, { front: "👖 trousers", back: "pantaloni" }, { front: "🩳 shorts", back: "pantaloncini" },
          { front: "👗 dress", back: "vestito" }, { front: "skirt", back: "gonna" }, { front: "🧦 socks", back: "calzini" },
          { front: "👟 shoes", back: "scarpe" }, { front: "🧣 scarf", back: "sciarpa" }, { front: "🧤 gloves", back: "guanti" }, { front: "👒 hat", back: "cappello" }
        ]
      }
    },
    {
      type: "example", title: "Esempio: prima di uscire 🚪",
      html: `<p><b>Mum:</b> Look outside, Tom! What's the weather like?<br>
<b>Tom:</b> It's cold and windy. 💨<br>
<b>Mum:</b> Put on your coat and your scarf!<br>
<b>Tom:</b> And my gloves?<br>
<b>Mum:</b> Yes! And take your umbrella. It's cloudy… ☁️<br>
<b>Tom:</b> OK, mum. Bye! 👋</p>`
    },
    {
      type: "example", title: "Esempio: la valigia per le vacanze 🧳",
      html: `<p>Anna va al mare ad agosto e Luca va in montagna a gennaio. Ecco le loro liste:</p>
<table><tr><th>🏖️ Anna – It's hot and sunny</th><th>🏔️ Luca – It's cold and snowy</th></tr>
<tr><td>three T-shirts</td><td>two jumpers</td></tr>
<tr><td>two pairs of shorts</td><td>a coat</td></tr>
<tr><td>a dress</td><td>a hat, a scarf and gloves</td></tr>
<tr><td>a cap and sandals</td><td>boots and warm socks</td></tr></table>
<p>Ora scrivi la tua lista: dove vai? What's the weather like?</p>`
    },
    {
      type: "curiosity", title: "Lo sapevi che… i jeans hanno un nome italiano?",
      html: `<p>La stoffa blu dei jeans si usava già nel 1500 a <b>Genova</b>, per i vestiti dei marinai e dei portuali. I francesi chiamavano Genova <b>Gênes</b>: da lì è nato il nome <b>jeans</b>! 👖</p>
<p>E la stoffa <b>denim</b>? Viene dalla città francese di Nîmes: <i>de Nîmes</i> = "di Nîmes". Nel 1873 a San Francisco Levi Strauss e Jacob Davis brevettarono i jeans con i rivetti di metallo, per i cercatori d'oro e i minatori.</p>`
    },
    {
      type: "curiosity", title: "Lo sapevi che… gli inglesi parlano sempre del tempo?",
      html: `<p>In Gran Bretagna il tempo cambia spesso, anche più volte in un giorno! Per questo parlare del meteo è il modo più comune per iniziare una conversazione con chiunque: <i>«Lovely day, isn't it?»</i> (Bella giornata, vero?) oppure <i>«Terrible weather today!»</i>.</p>
<p>E sai qual è il vestito più tipico degli scolari inglesi? La <b>school uniform</b>, la divisa scolastica: quasi tutte le scuole ne hanno una, con <b>blazer</b> (giacca), cravatta e maglione del colore della scuola.</p>`
    },
    {
      type: "alternatives", title: "Altri modi per ricordare le parole",
      intro: "<p>Se le parole non ti entrano in testa, prova un'altra strada!</p>",
      tabs: [
        {
          label: "🧸 Vesti l'orsetto",
          html: `<p>Prendi un pupazzo e dei vestitini (o disegnali e ritagliali). Un compagno dice il tempo e tu vesti l'orsetto dicendo ad alta voce cosa fai:</p>
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
          label: "🇬🇧🇺🇸 Inglese o americano?",
          html: `<p>Alcuni vestiti hanno nomi diversi in Gran Bretagna e negli Stati Uniti. Non sono errori: sono due "dialetti" dell'inglese!</p>
<table><tr><th>🇬🇧 UK</th><th>🇺🇸 USA</th><th>🇮🇹</th></tr>
<tr><td>trousers</td><td>pants</td><td>pantaloni</td></tr>
<tr><td>jumper</td><td>sweater</td><td>maglione</td></tr>
<tr><td>trainers</td><td>sneakers</td><td>scarpe da ginnastica</td></tr>
<tr><td>pants</td><td>underwear</td><td>mutande 🙈</td></tr></table>
<p>Attenzione all'ultima riga: a Londra <b>pants</b> sono le mutande, a New York i pantaloni! 😄</p>`
        },
        {
          label: "🎵 La canzone del tempo",
          html: `<p>Sull'aria di <i>«Fra Martino»</i> canta:</p>
<p style="font-size:1.15em"><i>What's the weather, what's the weather,<br>like today? Like today?<br>Is it sunny? ☀️ Is it rainy? 🌧️<br>Is it cloudy? ☁️ Is it snowy? ❄️<br>Let's go play! Let's go play!</i></p>
<p>Ogni mattina guarda dalla finestra e rispondi: <i>«It's…!»</i></p>`
        },
        {
          label: "🔗 Abbina tempo e vestito",
          html: `<p>Collega ogni tempo al vestito o all'oggetto che ti serve di più.</p>`,
          widget: "match",
          options: { pairs: [["It's rainy 🌧️", "umbrella"], ["It's snowy ❄️", "boots"], ["It's sunny ☀️", "cap"], ["It's cold 🥶", "coat"], ["It's hot 🥵", "shorts"], ["It's windy 💨", "scarf"]] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Mappa: tempo e vestiti in inglese",
      nodes: [
        { id: "weather", label: "The weather", x: 25, y: 8, color: "#0ea5e9", html: "Il tempo atmosferico: <i>What's the weather like?</i>", why: "Il tempo dipende da sole, nuvole, vento e temperatura dell'aria. Gli inglesi ne parlano tantissimo perché il clima della Gran Bretagna, oceanico e umido, cambia molto in fretta." },
        { id: "y", label: "Parola + y", x: 10, y: 38, color: "#f59e0b", html: "sun → sunny, rain → rainy, wind → windy.", why: "In inglese la fine <b>-y</b> trasforma un nome in un aggettivo: \"che ha sole\", \"che ha pioggia\". Se la parola finisce con una vocale + una consonante, la consonante si raddoppia: sun → sunny, fog → foggy." },
        { id: "temp", label: "Hot / cold", x: 40, y: 38, color: "#dc2626", html: "Fa caldo, fa freddo.", why: "In inglese il tempo si descrive con <b>It's</b> + aggettivo: <i>it</i> è un soggetto \"vuoto\" che serve solo a reggere la frase, perché in inglese il soggetto non si può mai togliere (in italiano diciamo solo \"fa caldo\")." },
        { id: "clothes", label: "Clothes", x: 75, y: 8, color: "#a855f7", html: "I vestiti: T-shirt, jumper, coat, shoes…", why: "Ci vestiamo in modo diverso secondo il tempo per tenere il corpo alla temperatura giusta: d'inverno i vestiti trattengono il calore, d'estate lasciano passare l'aria." },
        { id: "pair", label: "Sempre plurali", x: 90, y: 38, color: "#2563eb", html: "trousers, jeans, shorts → a pair of…", why: "Sono plurali perché sono formati da due parti uguali, le due gambe, come <i>scissors</i> (forbici) e <i>glasses</i> (occhiali). Anche in italiano diciamo \"i pantaloni\" e \"un paio di\"." },
        { id: "warm", label: "Vestiti per il freddo", x: 60, y: 45, color: "#0f766e", html: "coat, scarf, gloves, boots, hat.", why: "Lana e piume trattengono uno strato di aria ferma vicino al corpo: l'aria ferma è un ottimo isolante, così il calore non scappa." },
        { id: "verbs", label: "Put on / take off / wear", x: 50, y: 78, color: "#16a34a", html: "Mettersi, togliersi, indossare.", why: "<i>Put on</i> e <i>take off</i> sono \"phrasal verbs\": un verbo più una piccola parola (on, off) che ne cambia il significato. <i>On</i> = sopra, addosso; <i>off</i> = via." },
        { id: "uk", label: "UK e USA", x: 85, y: 78, color: "#e11d48", html: "trousers / pants, jumper / sweater.", why: "Quando gli inglesi colonizzarono l'America (dal 1600), le due lingue si separarono un po' e alcune parole cambiarono, come succede tra i dialetti italiani." }
      ],
      edges: [
        ["weather", "y", "si dice con"], ["weather", "temp", "It's…"], ["weather", "clothes", "decide"],
        ["temp", "warm", "se è cold"], ["clothes", "pair", "alcuni sono"], ["clothes", "warm", "d'inverno"], ["clothes", "verbs", "si usano con"], ["clothes", "uk", "nomi diversi"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz: clothes",
      questions: [
        { type: "mc", q: "Fa freddo. Che cosa ti metti?", options: ["shorts", "a coat", "sandals"], answer: 1, explain: "It's cold → put on a coat 🧥." },
        { type: "mc", q: "«Gloves» sono…", options: ["guanti", "calzini", "stivali"], answer: 0, explain: "Gloves = guanti 🧤." },
        { type: "tf", q: "Si dice «My jeans are blue», al plurale.", answer: true, explain: "Jeans, trousers e shorts sono sempre plurali." }
      ]
    }
  ],
  glossary: [
    { t: "weather", d: "tempo atmosferico. What's the weather like? = Che tempo fa?" },
    { t: "sunny · cloudy · rainy", d: "soleggiato · nuvoloso · piovoso" },
    { t: "windy · snowy · foggy", d: "ventoso · nevoso · nebbioso" },
    { t: "hot · cold", d: "caldo · freddo" },
    { t: "clothes", d: "vestiti" },
    { t: "T-shirt · shirt · jumper", d: "maglietta · camicia · maglione" },
    { t: "jacket · coat", d: "giacca · cappotto" },
    { t: "trousers · jeans · shorts", d: "pantaloni · jeans · pantaloncini (sempre plurali)" },
    { t: "dress · skirt", d: "vestito · gonna" },
    { t: "socks · shoes · boots", d: "calzini · scarpe · stivali" },
    { t: "hat · cap · scarf · gloves", d: "cappello · berretto · sciarpa · guanti" },
    { t: "umbrella", d: "ombrello" },
    { t: "put on / take off / wear", d: "mettersi / togliersi / indossare" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come chiedi «Che tempo fa?»", options: ["What's the weather like?", "What colour is it?", "How old are you?"], answer: 0, explain: "What's the weather like? = Che tempo fa?" },
      { type: "mc", q: "«It's windy» vuol dire…", options: ["c'è nebbia", "c'è vento", "nevica"], answer: 1, explain: "Wind = vento, windy = ventoso 💨." },
      { type: "text", q: "Scrivi in inglese: nevica (It's …)", answer: ["snowy", "it's snowy", "it is snowy"], explain: "Snow = neve, snowy = nevoso ❄️." },
      { type: "mc", q: "Come si dice «sciarpa»?", options: ["scarf", "skirt", "shirt"], answer: 0, explain: "Scarf = sciarpa. Skirt = gonna, shirt = camicia." },
      { type: "text", q: "Scrivi in inglese: calzini", answer: ["socks"], explain: "Calzini = socks 🧦." },
      { type: "mc", q: "It's hot and sunny. Che cosa metti?", options: ["gloves", "a T-shirt and shorts", "boots and a coat"], answer: 1, explain: "Con il caldo si mettono vestiti leggeri." },
      { type: "mc", q: "«Put on your hat!» vuol dire…", options: ["Togliti il cappello!", "Mettiti il cappello!", "Compra un cappello!"], answer: 1, explain: "Put on = mettersi; take off = togliersi." },
      { type: "tf", q: "In inglese «trousers» è una parola plurale.", answer: true, explain: "My trousers are… → a pair of trousers." },
      { type: "tf", q: "A Londra «pants» sono i pantaloni.", answer: false, explain: "In Gran Bretagna pants = mutande; i pantaloni sono trousers. In America invece pants = pantaloni." },
      { type: "order", q: "Metti in ordine le parole per formare la frase: «Indosso un maglione rosso».", items: ["I'm", "wearing", "a", "red", "jumper"], explain: "I'm wearing a red jumper: il colore va prima del vestito." },
      { type: "mc", q: "Il nome «jeans» viene dalla città di…", options: ["Londra", "Genova", "Parigi"], answer: 1, explain: "Dal francese Gênes = Genova, dove si usava quella stoffa blu." },
      { type: "mc", q: "Che cosa ti serve se «It's rainy»?", options: ["an umbrella", "sandals", "a cap"], answer: 0, explain: "Con la pioggia serve l'ombrello: umbrella ☂️." }
    ]
  }
});
