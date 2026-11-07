TOPIC('de', {
  id: "p3-ing-clothes",
  title: "Clothes and weather",
  intro: "Hello! 👋 Wie ist das Wetter heute? ☀️🌧️❄️ Je nach Wetter suchen wir unsere <b>Kleidung</b> aus. Heute lernen wir auf Englisch die Namen der Kleidungsstücke (<b>clothes</b>) und des Wetters (<b>the weather</b>) und Sätze wie <i>„It's cold. Put on your coat!“</i> 🧥",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The weather: wie ist das Wetter? 🌦️",
      html: `<p>Um zu fragen, wie das Wetter ist, sagt man: <b>What's the weather like?</b> (wotz de wedder laik?)</p>
<p>Man antwortet mit <b>It's…</b> (itz…):</p>
<table><tr><th>Englisch</th><th>Aussprache</th><th>Deutsch</th></tr>
<tr><td>☀️ It's <b>sunny</b></td><td>sa-ni</td><td>die Sonne scheint</td></tr>
<tr><td>☁️ It's <b>cloudy</b></td><td>klau-di</td><td>es ist bewölkt</td></tr>
<tr><td>🌧️ It's <b>rainy</b></td><td>rei-ni</td><td>es regnet</td></tr>
<tr><td>💨 It's <b>windy</b></td><td>win-di</td><td>es ist windig</td></tr>
<tr><td>❄️ It's <b>snowy</b></td><td>snou-i</td><td>es schneit</td></tr>
<tr><td>🌫️ It's <b>foggy</b></td><td>fo-gi</td><td>es ist neblig</td></tr>
<tr><td>🥵 It's <b>hot</b></td><td>hot</td><td>es ist heiß</td></tr>
<tr><td>🥶 It's <b>cold</b></td><td>kould</td><td>es ist kalt</td></tr>
</table>
<p>Trick: Fast alle entstehen aus einem Wort + <b>-y</b>: sun → sunn<b>y</b>, cloud → cloud<b>y</b>, rain → rain<b>y</b>, wind → wind<b>y</b>, snow → snow<b>y</b>, fog → fogg<b>y</b>.</p>`
    },
    {
      type: "svg", title: "Weather symbols",
      caption: "Die Wettersymbole, die du im Fernsehen siehst, mit ihrem englischen Namen.",
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
      type: "quiz", title: "Mini-Quiz: the weather",
      questions: [
        { type: "mc", q: "„It's rainy“ bedeutet …", options: ["die Sonne scheint", "es regnet", "es ist windig"], answer: 1, explain: "Rain = Regen, rainy = regnerisch 🌧️." },
        { type: "mc", q: "Wie sagt man „es ist kalt“?", options: ["It's hot", "It's cold", "It's cloudy"], answer: 1, explain: "Cold = kalt 🥶." },
        { type: "text", q: "Ergänze: It's sun… (die Sonne scheint)", answer: ["sunny", "it's sunny"], explain: "Sun → sunny: Das n wird verdoppelt und -y kommt dazu." }
      ]
    },
    {
      type: "text", title: "Clothes: die Kleidung 👕",
      html: `<ul>
<li>👕 <b>T-shirt</b> (ti-schört) – T-Shirt · 👔 <b>shirt</b> – Hemd</li>
<li>🧶 <b>jumper</b> (dscham-per) – Pullover · 🧥 <b>jacket</b> (dschä-kit) – Jacke · <b>coat</b> (kout) – Mantel</li>
<li>👖 <b>trousers</b> (trau-serz) – Hose · <b>jeans</b> (dschiinz) – Jeans · 🩳 <b>shorts</b> – kurze Hose</li>
<li>👗 <b>dress</b> – Kleid · <b>skirt</b> (skört) – Rock</li>
<li>🧦 <b>socks</b> – Socken · 👟 <b>shoes</b> (schuus) – Schuhe · 🥾 <b>boots</b> – Stiefel</li>
<li>🧢 <b>cap</b> – Mütze mit Schirm · 👒 <b>hat</b> – Hut · 🧣 <b>scarf</b> – Schal · 🧤 <b>gloves</b> (glavs) – Handschuhe</li>
</ul>
<p>Und der Regenschirm? ☂️ <b>umbrella</b> (am-bre-la). Er ist zwar kein Kleidungsstück, aber bei Regen braucht man ihn!</p>`
    },
    {
      type: "remember", title: "Die Sätze zum Benutzen",
      html: `<ul>
<li><b>I'm wearing</b> a red T-shirt. = Ich trage ein rotes T-Shirt.</li>
<li><b>Put on</b> your coat! = Zieh deinen Mantel an!</li>
<li><b>Take off</b> your jumper! = Zieh deinen Pullover aus!</li>
<li>It's cold, so I <b>wear</b> my gloves. = Es ist kalt, also trage ich meine Handschuhe.</li>
</ul>
<p>⚠️ <b>trousers, jeans, shorts</b> stehen immer in der <b>Mehrzahl</b> (sie haben zwei Beine!): <i>My jeans <b>are</b> blue.</i> Zum Zählen sagt man <b>a pair of</b> jeans = eine Jeans (wörtlich: ein Paar Jeans).</p>`
    },
    {
      type: "widget", title: "Spiel: Bei welchem Wetter trägst du es?",
      widget: "classify",
      caption: "Ordne jedes Kleidungsstück der richtigen Gruppe zu: Trägst du es, wenn es heiß ist, oder wenn es kalt ist?",
      options: {
        groups: ["☀️ It's hot", "❄️ It's cold"],
        items: [["👕 T-shirt", 0], ["🩳 shorts", 0], ["🧢 cap", 0], ["👗 dress", 0], ["🩴 sandals", 0], ["🧥 coat", 1], ["🧣 scarf", 1], ["🧤 gloves", 1], ["🧶 jumper", 1], ["🥾 boots", 1]]
      }
    },
    {
      type: "widget", title: "Karteikarten: die Kleidung",
      widget: "flashcards",
      caption: "Sag das englische Wort laut, dann dreh die Karte um.",
      options: {
        cards: [
          { front: "👕 T-shirt", back: "T-Shirt" }, { front: "👔 shirt", back: "Hemd" }, { front: "🧶 jumper", back: "Pullover" },
          { front: "🧥 coat", back: "Mantel" }, { front: "👖 trousers", back: "Hose" }, { front: "🩳 shorts", back: "kurze Hose" },
          { front: "👗 dress", back: "Kleid" }, { front: "skirt", back: "Rock" }, { front: "🧦 socks", back: "Socken" },
          { front: "👟 shoes", back: "Schuhe" }, { front: "🧣 scarf", back: "Schal" }, { front: "🧤 gloves", back: "Handschuhe" }, { front: "👒 hat", back: "Hut" }
        ]
      }
    },
    {
      type: "example", title: "Beispiel: bevor man rausgeht 🚪",
      html: `<p><b>Mum:</b> Look outside, Tom! What's the weather like?<br>
<b>Tom:</b> It's cold and windy. 💨<br>
<b>Mum:</b> Put on your coat and your scarf!<br>
<b>Tom:</b> And my gloves?<br>
<b>Mum:</b> Yes! And take your umbrella. It's cloudy… ☁️<br>
<b>Tom:</b> OK, mum. Bye! 👋</p>`
    },
    {
      type: "example", title: "Beispiel: der Koffer für die Ferien 🧳",
      html: `<p>Anna fährt im August ans Meer und Luca im Januar in die Berge. Hier sind ihre Listen:</p>
<table><tr><th>🏖️ Anna – It's hot and sunny</th><th>🏔️ Luca – It's cold and snowy</th></tr>
<tr><td>three T-shirts</td><td>two jumpers</td></tr>
<tr><td>two pairs of shorts</td><td>a coat</td></tr>
<tr><td>a dress</td><td>a hat, a scarf and gloves</td></tr>
<tr><td>a cap and sandals</td><td>boots and warm socks</td></tr></table>
<p>Schreib jetzt deine eigene Liste: Wohin fährst du? What's the weather like?</p>`
    },
    {
      type: "curiosity", title: "Wusstest du, dass … Jeans einen italienischen Ursprung haben?",
      html: `<p>Den blauen Stoff der Jeans benutzte man schon im 16. Jahrhundert in <b>Genua</b>, für die Kleidung von Matrosen und Hafenarbeitern. Die Franzosen nannten Genua <b>Gênes</b>: Daraus entstand der Name <b>jeans</b>! 👖</p>
<p>Und der Stoff <b>Denim</b>? Er kommt von der französischen Stadt Nîmes: <i>de Nîmes</i> = „aus Nîmes“. 1873 ließen sich Levi Strauss und Jacob Davis in San Francisco Jeans mit Metallnieten patentieren, für Goldgräber und Bergleute.</p>`
    },
    {
      type: "curiosity", title: "Wusstest du, dass … die Engländer ständig über das Wetter reden?",
      html: `<p>In Großbritannien ändert sich das Wetter oft, manchmal mehrmals am Tag! Deshalb ist das Wetter das häufigste Thema, um mit irgendjemandem ein Gespräch anzufangen: <i>„Lovely day, isn't it?“</i> (Schöner Tag, nicht wahr?) oder <i>„Terrible weather today!“</i> (Schreckliches Wetter heute!).</p>
<p>Und weißt du, was die typischste Kleidung englischer Schulkinder ist? Die <b>school uniform</b>, die Schuluniform: Fast alle Schulen haben eine, mit <b>blazer</b> (Jackett), Krawatte und Pullover in der Farbe der Schule.</p>`
    },
    {
      type: "alternatives", title: "Andere Wege, sich die Wörter zu merken",
      intro: "<p>Wenn dir die Wörter nicht in den Kopf wollen, probier einen anderen Weg!</p>",
      tabs: [
        {
          label: "🧸 Zieh den Teddy an",
          html: `<p>Nimm ein Kuscheltier und ein paar Kleidungsstücke (oder zeichne und schneide sie aus). Ein Mitspieler nennt das Wetter und du ziehst den Teddy an und sagst laut, was du tust:</p>
<p><i>„It's snowy!“</i> → <i>„I put on his <b>hat</b>… his <b>scarf</b>… his <b>gloves</b>!“</i> 🧸❄️</p>`,
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
          label: "🇬🇧🇺🇸 Britisch oder amerikanisch?",
          html: `<p>Manche Kleidungsstücke heißen in Großbritannien und in den USA anders. Das sind keine Fehler: Es sind zwei „Dialekte“ des Englischen!</p>
<table><tr><th>🇬🇧 UK</th><th>🇺🇸 USA</th><th>🇩🇪</th></tr>
<tr><td>trousers</td><td>pants</td><td>Hose</td></tr>
<tr><td>jumper</td><td>sweater</td><td>Pullover</td></tr>
<tr><td>trainers</td><td>sneakers</td><td>Turnschuhe</td></tr>
<tr><td>pants</td><td>underwear</td><td>Unterhose 🙈</td></tr></table>
<p>Vorsicht bei der letzten Zeile: In London sind <b>pants</b> die Unterhosen, in New York die Hosen! 😄</p>`
        },
        {
          label: "🎵 Das Wetterlied",
          html: `<p>Sing auf die Melodie von <i>„Bruder Jakob“</i>:</p>
<p style="font-size:1.15em"><i>What's the weather, what's the weather,<br>like today? Like today?<br>Is it sunny? ☀️ Is it rainy? 🌧️<br>Is it cloudy? ☁️ Is it snowy? ❄️<br>Let's go play! Let's go play!</i></p>
<p>Schau jeden Morgen aus dem Fenster und antworte: <i>„It's…!“</i></p>`
        },
        {
          label: "🔗 Wetter und Kleidung zuordnen",
          html: `<p>Verbinde jedes Wetter mit dem Kleidungsstück oder Gegenstand, den du am dringendsten brauchst.</p>`,
          widget: "match",
          options: { pairs: [["It's rainy 🌧️", "umbrella"], ["It's snowy ❄️", "boots"], ["It's sunny ☀️", "cap"], ["It's cold 🥶", "coat"], ["It's hot 🥵", "shorts"], ["It's windy 💨", "scarf"]] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Landkarte: Wetter und Kleidung auf Englisch",
      nodes: [
        { id: "weather", label: "The weather", x: 25, y: 8, color: "#0ea5e9", html: "Das Wetter: <i>What's the weather like?</i>", why: "Das Wetter hängt von Sonne, Wolken, Wind und der Lufttemperatur ab. Die Engländer reden sehr viel darüber, weil sich das feuchte Meeresklima Großbritanniens sehr schnell ändert." },
        { id: "y", label: "Wort + y", x: 10, y: 38, color: "#f59e0b", html: "sun → sunny, rain → rainy, wind → windy.", why: "Im Englischen macht die Endung <b>-y</b> aus einem Nomen ein Adjektiv: „mit Sonne“, „mit Regen“. Wenn das Wort auf einen kurzen Vokal + einen Konsonanten endet, wird der Konsonant verdoppelt: sun → sunny, fog → foggy." },
        { id: "temp", label: "Hot / cold", x: 40, y: 38, color: "#dc2626", html: "Es ist heiß, es ist kalt.", why: "Im Englischen beschreibt man das Wetter mit <b>It's</b> + Adjektiv: <i>it</i> ist ein „leeres“ Subjekt, das nur den Satz zusammenhält – wie das deutsche „es“ in „es regnet“. Im Englischen darf das Subjekt nie fehlen." },
        { id: "clothes", label: "Clothes", x: 75, y: 8, color: "#a855f7", html: "Die Kleidung: T-shirt, jumper, coat, shoes…", why: "Wir ziehen uns je nach Wetter anders an, damit der Körper die richtige Temperatur behält: Im Winter halten die Kleider die Wärme fest, im Sommer lassen sie Luft durch." },
        { id: "pair", label: "Immer Mehrzahl", x: 90, y: 38, color: "#2563eb", html: "trousers, jeans, shorts → a pair of…", why: "Sie stehen in der Mehrzahl, weil sie aus zwei gleichen Teilen bestehen, den zwei Beinen – wie <i>scissors</i> (Schere) und <i>glasses</i> (Brille). Im Deutschen sagen wir dagegen „die Hose“ in der Einzahl." },
        { id: "warm", label: "Kleidung für die Kälte", x: 60, y: 45, color: "#0f766e", html: "coat, scarf, gloves, boots, hat.", why: "Wolle und Federn halten eine Schicht ruhiger Luft nahe am Körper: Ruhende Luft ist ein sehr guter Isolator, sodass die Wärme nicht entweicht." },
        { id: "verbs", label: "Put on / take off / wear", x: 50, y: 78, color: "#16a34a", html: "Anziehen, ausziehen, tragen.", why: "<i>Put on</i> und <i>take off</i> sind „Phrasal Verbs“: ein Verb plus ein kleines Wörtchen (on, off), das die Bedeutung verändert. <i>On</i> = darauf, an; <i>off</i> = weg." },
        { id: "uk", label: "UK und USA", x: 85, y: 78, color: "#e11d48", html: "trousers / pants, jumper / sweater.", why: "Als die Engländer ab dem 17. Jahrhundert Amerika besiedelten, entwickelten sich die beiden Sprachformen ein wenig auseinander und manche Wörter änderten sich – ähnlich wie bei deutschen Dialekten." }
      ],
      edges: [
        ["weather", "y", "sagt man mit"], ["weather", "temp", "It's…"], ["weather", "clothes", "bestimmt"],
        ["temp", "warm", "wenn es cold ist"], ["clothes", "pair", "manche sind"], ["clothes", "warm", "im Winter"], ["clothes", "verbs", "benutzt man mit"], ["clothes", "uk", "andere Namen"]
      ]
    },
    {
      type: "quiz", title: "Mini-Quiz: clothes",
      questions: [
        { type: "mc", q: "Es ist kalt. Was ziehst du an?", options: ["shorts", "a coat", "sandals"], answer: 1, explain: "It's cold → put on a coat 🧥." },
        { type: "mc", q: "„Gloves“ sind …", options: ["Handschuhe", "Socken", "Stiefel"], answer: 0, explain: "Gloves = Handschuhe 🧤." },
        { type: "tf", q: "Man sagt „My jeans are blue“, in der Mehrzahl.", answer: true, explain: "Jeans, trousers und shorts stehen immer in der Mehrzahl." }
      ]
    }
  ],
  glossary: [
    { t: "weather", d: "Wetter. What's the weather like? = Wie ist das Wetter?" },
    { t: "sunny · cloudy · rainy", d: "sonnig · bewölkt · regnerisch" },
    { t: "windy · snowy · foggy", d: "windig · verschneit · neblig" },
    { t: "hot · cold", d: "heiß · kalt" },
    { t: "clothes", d: "Kleidung" },
    { t: "T-shirt · shirt · jumper", d: "T-Shirt · Hemd · Pullover" },
    { t: "jacket · coat", d: "Jacke · Mantel" },
    { t: "trousers · jeans · shorts", d: "Hose · Jeans · kurze Hose (immer Mehrzahl)" },
    { t: "dress · skirt", d: "Kleid · Rock" },
    { t: "socks · shoes · boots", d: "Socken · Schuhe · Stiefel" },
    { t: "hat · cap · scarf · gloves", d: "Hut · Mütze · Schal · Handschuhe" },
    { t: "umbrella", d: "Regenschirm" },
    { t: "put on / take off / wear", d: "anziehen / ausziehen / tragen" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie fragst du „Wie ist das Wetter?“", options: ["What's the weather like?", "What colour is it?", "How old are you?"], answer: 0, explain: "What's the weather like? = Wie ist das Wetter?" },
      { type: "mc", q: "„It's windy“ bedeutet …", options: ["es ist neblig", "es ist windig", "es schneit"], answer: 1, explain: "Wind = Wind, windy = windig 💨." },
      { type: "text", q: "Schreibe auf Englisch: es schneit (It's …)", answer: ["snowy", "it's snowy", "it is snowy"], explain: "Snow = Schnee, snowy = verschneit ❄️." },
      { type: "mc", q: "Wie sagt man „Schal“?", options: ["scarf", "skirt", "shirt"], answer: 0, explain: "Scarf = Schal. Skirt = Rock, shirt = Hemd." },
      { type: "text", q: "Schreibe auf Englisch: Socken", answer: ["socks"], explain: "Socken = socks 🧦." },
      { type: "mc", q: "It's hot and sunny. Was ziehst du an?", options: ["gloves", "a T-shirt and shorts", "boots and a coat"], answer: 1, explain: "Bei Hitze trägt man leichte Kleidung." },
      { type: "mc", q: "„Put on your hat!“ bedeutet …", options: ["Nimm deinen Hut ab!", "Setz deinen Hut auf!", "Kauf einen Hut!"], answer: 1, explain: "Put on = anziehen; take off = ausziehen." },
      { type: "tf", q: "Im Englischen ist „trousers“ ein Wort in der Mehrzahl.", answer: true, explain: "My trousers are… → a pair of trousers." },
      { type: "tf", q: "In London sind „pants“ die Hosen.", answer: false, explain: "In Großbritannien sind pants = Unterhosen; Hosen heißen trousers. In Amerika dagegen bedeutet pants = Hosen." },
      { type: "order", q: "Bring die Wörter in die richtige Reihenfolge: „Ich trage einen roten Pullover.“", items: ["I'm", "wearing", "a", "red", "jumper"], explain: "I'm wearing a red jumper: Die Farbe steht vor dem Kleidungsstück." },
      { type: "mc", q: "Der Name „jeans“ kommt von der Stadt …", options: ["London", "Genua", "Paris"], answer: 1, explain: "Vom französischen Gênes = Genua, wo man diesen blauen Stoff benutzte." },
      { type: "mc", q: "Was brauchst du, wenn „It's rainy“?", options: ["an umbrella", "sandals", "a cap"], answer: 0, explain: "Bei Regen braucht man den Regenschirm: umbrella ☂️." }
    ]
  }
});
