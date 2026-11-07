TOPIC('fr', {
  id: "p3-ing-clothes",
  title: "Clothes and weather",
  intro: "Hello! 👋 Quel temps fait-il aujourd'hui ? ☀️🌧️❄️ Selon le temps, nous choisissons nos <b>vêtements</b>. Aujourd'hui, nous apprenons en anglais les noms des vêtements (<b>clothes</b>) et du temps qu'il fait (<b>the weather</b>), et à dire des phrases comme <i>« It's cold. Put on your coat! »</i> 🧥",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The weather : quel temps fait-il ? 🌦️",
      html: `<p>Pour demander quel temps il fait, on dit : <b>What's the weather like?</b> (ouotse the ouè-theur laïk ?)</p>
<p>On répond avec <b>It's…</b> (itse…) :</p>
<table><tr><th>Anglais</th><th>Se prononce</th><th>Français</th></tr>
<tr><td>☀️ It's <b>sunny</b></td><td>sa-ni</td><td>il y a du soleil</td></tr>
<tr><td>☁️ It's <b>cloudy</b></td><td>claou-di</td><td>il est nuageux</td></tr>
<tr><td>🌧️ It's <b>rainy</b></td><td>reï-ni</td><td>il pleut</td></tr>
<tr><td>💨 It's <b>windy</b></td><td>ouine-di</td><td>il y a du vent</td></tr>
<tr><td>❄️ It's <b>snowy</b></td><td>snô-i</td><td>il neige</td></tr>
<tr><td>🌫️ It's <b>foggy</b></td><td>fo-gui</td><td>il y a du brouillard</td></tr>
<tr><td>🥵 It's <b>hot</b></td><td>hotte</td><td>il fait chaud</td></tr>
<tr><td>🥶 It's <b>cold</b></td><td>côlde</td><td>il fait froid</td></tr>
</table>
<p>Astuce : presque tous viennent d'un mot + <b>-y</b> : sun → sunn<b>y</b>, cloud → cloud<b>y</b>, rain → rain<b>y</b>, wind → wind<b>y</b>, snow → snow<b>y</b>, fog → fogg<b>y</b>.</p>`
    },
    {
      type: "svg", title: "Weather symbols",
      caption: "Les symboles de la météo que tu vois à la télé, avec leur nom anglais.",
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
      type: "quiz", title: "Mini-quiz : the weather",
      questions: [
        { type: "mc", q: "« It's rainy » veut dire…", options: ["il y a du soleil", "il pleut", "il y a du vent"], answer: 1, explain: "Rain = pluie, rainy = pluvieux 🌧️." },
        { type: "mc", q: "Comment dit-on « il fait froid » ?", options: ["It's hot", "It's cold", "It's cloudy"], answer: 1, explain: "Cold = froid 🥶." },
        { type: "text", q: "Complète : It's sun… (il y a du soleil)", answer: ["sunny", "it's sunny"], explain: "Sun → sunny : le n est doublé et on ajoute -y." }
      ]
    },
    {
      type: "text", title: "Clothes : les vêtements 👕",
      html: `<ul>
<li>👕 <b>T-shirt</b> (ti-cheurte) – tee-shirt · 👔 <b>shirt</b> – chemise</li>
<li>🧶 <b>jumper</b> (djam-peur) – pull · 🧥 <b>jacket</b> (djaké-tt) – veste · <b>coat</b> (côte) – manteau</li>
<li>👖 <b>trousers</b> (trao-zeurz) – pantalon · <b>jeans</b> (djiinz) – jean · 🩳 <b>shorts</b> – short</li>
<li>👗 <b>dress</b> – robe · <b>skirt</b> (skeurte) – jupe</li>
<li>🧦 <b>socks</b> – chaussettes · 👟 <b>shoes</b> (chouz) – chaussures · 🥾 <b>boots</b> – bottes</li>
<li>🧢 <b>cap</b> – casquette · 👒 <b>hat</b> – chapeau · 🧣 <b>scarf</b> – écharpe · 🧤 <b>gloves</b> (glavz) – gants</li>
</ul>
<p>Et le parapluie ? ☂️ <b>umbrella</b> (am-brè-la). Ce n'est pas un vêtement, mais il est bien utile quand il pleut !</p>`
    },
    {
      type: "remember", title: "Les phrases à utiliser",
      html: `<ul>
<li><b>I'm wearing</b> a red T-shirt. = Je porte un tee-shirt rouge.</li>
<li><b>Put on</b> your coat! = Mets ton manteau !</li>
<li><b>Take off</b> your jumper! = Enlève ton pull !</li>
<li>It's cold, so I <b>wear</b> my gloves. = Il fait froid, alors je mets mes gants.</li>
</ul>
<p>⚠️ <b>trousers, jeans, shorts</b> sont toujours au <b>pluriel</b> (ils ont deux jambes !) : <i>My jeans <b>are</b> blue.</i> Pour les compter, on dit <b>a pair of</b> jeans = un jean (littéralement « une paire de jeans »).</p>`
    },
    {
      type: "widget", title: "Jeu : par quel temps le mets-tu ?",
      widget: "classify",
      caption: "Range chaque vêtement dans le bon groupe : le mets-tu quand il fait chaud ou quand il fait froid ?",
      options: {
        groups: ["☀️ It's hot", "❄️ It's cold"],
        items: [["👕 T-shirt", 0], ["🩳 shorts", 0], ["🧢 cap", 0], ["👗 dress", 0], ["🩴 sandals", 0], ["🧥 coat", 1], ["🧣 scarf", 1], ["🧤 gloves", 1], ["🧶 jumper", 1], ["🥾 boots", 1]]
      }
    },
    {
      type: "widget", title: "Flashcards : les vêtements",
      widget: "flashcards",
      caption: "Dis le mot anglais à voix haute, puis retourne la carte.",
      options: {
        cards: [
          { front: "👕 T-shirt", back: "tee-shirt" }, { front: "👔 shirt", back: "chemise" }, { front: "🧶 jumper", back: "pull" },
          { front: "🧥 coat", back: "manteau" }, { front: "👖 trousers", back: "pantalon" }, { front: "🩳 shorts", back: "short" },
          { front: "👗 dress", back: "robe" }, { front: "skirt", back: "jupe" }, { front: "🧦 socks", back: "chaussettes" },
          { front: "👟 shoes", back: "chaussures" }, { front: "🧣 scarf", back: "écharpe" }, { front: "🧤 gloves", back: "gants" }, { front: "👒 hat", back: "chapeau" }
        ]
      }
    },
    {
      type: "example", title: "Exemple : avant de sortir 🚪",
      html: `<p><b>Mum:</b> Look outside, Tom! What's the weather like?<br>
<b>Tom:</b> It's cold and windy. 💨<br>
<b>Mum:</b> Put on your coat and your scarf!<br>
<b>Tom:</b> And my gloves?<br>
<b>Mum:</b> Yes! And take your umbrella. It's cloudy… ☁️<br>
<b>Tom:</b> OK, mum. Bye! 👋</p>`
    },
    {
      type: "example", title: "Exemple : la valise pour les vacances 🧳",
      html: `<p>Anna va à la mer en août et Luca va à la montagne en janvier. Voici leurs listes :</p>
<table><tr><th>🏖️ Anna – It's hot and sunny</th><th>🏔️ Luca – It's cold and snowy</th></tr>
<tr><td>three T-shirts</td><td>two jumpers</td></tr>
<tr><td>two pairs of shorts</td><td>a coat</td></tr>
<tr><td>a dress</td><td>a hat, a scarf and gloves</td></tr>
<tr><td>a cap and sandals</td><td>boots and warm socks</td></tr></table>
<p>Maintenant, écris ta liste : où vas-tu ? What's the weather like?</p>`
    },
    {
      type: "curiosity", title: "Le savais-tu ? Le mot jeans vient d'une ville italienne !",
      html: `<p>La toile bleue des jeans était déjà utilisée vers 1500 à <b>Gênes</b>, en Italie, pour les vêtements des marins et des dockers. Les Anglais appelaient cette ville <b>Genoa</b> et la toile « <i>jean</i> » (d'après le vieux français <i>Gênes</i>) : de là est né le mot <b>jeans</b> ! 👖</p>
<p>Et la toile <b>denim</b> ? Elle vient de la ville française de Nîmes : <i>de Nîmes</i>. En 1873, à San Francisco, Levi Strauss et Jacob Davis ont fait breveter les jeans avec des rivets en métal, pour les chercheurs d'or et les mineurs.</p>`
    },
    {
      type: "curiosity", title: "Le savais-tu ? Les Anglais parlent toujours de la météo !",
      html: `<p>En Grande-Bretagne, le temps change souvent, parfois plusieurs fois par jour ! C'est pourquoi parler de la météo est la façon la plus courante d'engager la conversation avec n'importe qui : <i>« Lovely day, isn't it? »</i> (Belle journée, n'est-ce pas ?) ou <i>« Terrible weather today! »</i>.</p>
<p>Et sais-tu quel est le vêtement le plus typique des écoliers anglais ? La <b>school uniform</b>, l'uniforme scolaire : presque toutes les écoles en ont un, avec un <b>blazer</b> (veste), une cravate et un pull aux couleurs de l'école.</p>`
    },
    {
      type: "alternatives", title: "D'autres façons de retenir les mots",
      intro: "<p>Si les mots ne rentrent pas dans ta tête, essaie une autre voie !</p>",
      tabs: [
        {
          label: "🧸 Habille l'ourson",
          html: `<p>Prends une peluche et des petits vêtements (ou dessine-les et découpe-les). Un camarade annonce le temps et tu habilles l'ourson en disant à voix haute ce que tu fais :</p>
<p><i>« It's snowy! »</i> → <i>« I put on his <b>hat</b>… his <b>scarf</b>… his <b>gloves</b>! »</i> 🧸❄️</p>`,
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
          label: "🇬🇧🇺🇸 Anglais ou américain ?",
          html: `<p>Certains vêtements ont des noms différents en Grande-Bretagne et aux États-Unis. Ce ne sont pas des erreurs : ce sont deux « dialectes » de l'anglais !</p>
<table><tr><th>🇬🇧 UK</th><th>🇺🇸 USA</th><th>🇫🇷</th></tr>
<tr><td>trousers</td><td>pants</td><td>pantalon</td></tr>
<tr><td>jumper</td><td>sweater</td><td>pull</td></tr>
<tr><td>trainers</td><td>sneakers</td><td>baskets</td></tr>
<tr><td>pants</td><td>underwear</td><td>slip / caleçon 🙈</td></tr></table>
<p>Attention à la dernière ligne : à Londres, <b>pants</b> désigne les sous-vêtements, à New York le pantalon ! 😄</p>`
        },
        {
          label: "🎵 La chanson du temps",
          html: `<p>Sur l'air de <i>« Frère Jacques »</i>, chante :</p>
<p style="font-size:1.15em"><i>What's the weather, what's the weather,<br>like today? Like today?<br>Is it sunny? ☀️ Is it rainy? 🌧️<br>Is it cloudy? ☁️ Is it snowy? ❄️<br>Let's go play! Let's go play!</i></p>
<p>Chaque matin, regarde par la fenêtre et réponds : <i>« It's…! »</i></p>`
        },
        {
          label: "🔗 Associe temps et vêtement",
          html: `<p>Relie chaque temps au vêtement ou à l'objet qui te sert le plus.</p>`,
          widget: "match",
          options: { pairs: [["It's rainy 🌧️", "umbrella"], ["It's snowy ❄️", "boots"], ["It's sunny ☀️", "cap"], ["It's cold 🥶", "coat"], ["It's hot 🥵", "shorts"], ["It's windy 💨", "scarf"]] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Carte : temps et vêtements en anglais",
      nodes: [
        { id: "weather", label: "The weather", x: 25, y: 8, color: "#0ea5e9", html: "Le temps qu'il fait : <i>What's the weather like?</i>", why: "Le temps dépend du soleil, des nuages, du vent et de la température de l'air. Les Anglais en parlent énormément parce que le climat de la Grande-Bretagne, océanique et humide, change très vite." },
        { id: "y", label: "Mot + y", x: 10, y: 38, color: "#f59e0b", html: "sun → sunny, rain → rainy, wind → windy.", why: "En anglais, la terminaison <b>-y</b> transforme un nom en adjectif : \"qui a du soleil\", \"qui a de la pluie\". Si le mot finit par une voyelle + une consonne, la consonne est doublée : sun → sunny, fog → foggy." },
        { id: "temp", label: "Hot / cold", x: 40, y: 38, color: "#dc2626", html: "Il fait chaud, il fait froid.", why: "En anglais, on décrit le temps avec <b>It's</b> + adjectif : <i>it</i> est un sujet \"vide\" qui sert seulement à soutenir la phrase, car en anglais on ne peut jamais supprimer le sujet (en français aussi, on dit « il fait chaud »)." },
        { id: "clothes", label: "Clothes", x: 75, y: 8, color: "#a855f7", html: "Les vêtements : T-shirt, jumper, coat, shoes…", why: "Nous nous habillons différemment selon le temps pour garder le corps à la bonne température : l'hiver, les vêtements retiennent la chaleur, l'été, ils laissent passer l'air." },
        { id: "pair", label: "Toujours au pluriel", x: 90, y: 38, color: "#2563eb", html: "trousers, jeans, shorts → a pair of…", why: "Ils sont au pluriel parce qu'ils sont formés de deux parties identiques, les deux jambes, comme <i>scissors</i> (ciseaux) et <i>glasses</i> (lunettes). En français aussi, on dit « les ciseaux » et « une paire de »." },
        { id: "warm", label: "Vêtements pour le froid", x: 60, y: 45, color: "#0f766e", html: "coat, scarf, gloves, boots, hat.", why: "La laine et les plumes retiennent une couche d'air immobile près du corps : l'air immobile est un excellent isolant, ainsi la chaleur ne s'échappe pas." },
        { id: "verbs", label: "Put on / take off / wear", x: 50, y: 78, color: "#16a34a", html: "Mettre, enlever, porter.", why: "<i>Put on</i> et <i>take off</i> sont des \"phrasal verbs\" : un verbe plus un petit mot (on, off) qui change son sens. <i>On</i> = sur, sur soi ; <i>off</i> = loin, ôté." },
        { id: "uk", label: "UK et USA", x: 85, y: 78, color: "#e11d48", html: "trousers / pants, jumper / sweater.", why: "Quand les Anglais ont colonisé l'Amérique (à partir de 1600), les deux langues se sont un peu séparées et certains mots ont changé, comme entre les régions françaises." }
      ],
      edges: [
        ["weather", "y", "se dit avec"], ["weather", "temp", "It's…"], ["weather", "clothes", "décide"],
        ["temp", "warm", "s'il fait cold"], ["clothes", "pair", "certains sont"], ["clothes", "warm", "l'hiver"], ["clothes", "verbs", "s'utilisent avec"], ["clothes", "uk", "noms différents"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz : clothes",
      questions: [
        { type: "mc", q: "Il fait froid. Que mets-tu ?", options: ["shorts", "a coat", "sandals"], answer: 1, explain: "It's cold → put on a coat 🧥." },
        { type: "mc", q: "« Gloves » sont…", options: ["des gants", "des chaussettes", "des bottes"], answer: 0, explain: "Gloves = gants 🧤." },
        { type: "tf", q: "On dit « My jeans are blue », au pluriel.", answer: true, explain: "Jeans, trousers et shorts sont toujours au pluriel." }
      ]
    }
  ],
  glossary: [
    { t: "weather", d: "temps qu'il fait. What's the weather like? = Quel temps fait-il ?" },
    { t: "sunny · cloudy · rainy", d: "ensoleillé · nuageux · pluvieux" },
    { t: "windy · snowy · foggy", d: "venteux · neigeux · brumeux" },
    { t: "hot · cold", d: "chaud · froid" },
    { t: "clothes", d: "vêtements" },
    { t: "T-shirt · shirt · jumper", d: "tee-shirt · chemise · pull" },
    { t: "jacket · coat", d: "veste · manteau" },
    { t: "trousers · jeans · shorts", d: "pantalon · jean · short (toujours au pluriel)" },
    { t: "dress · skirt", d: "robe · jupe" },
    { t: "socks · shoes · boots", d: "chaussettes · chaussures · bottes" },
    { t: "hat · cap · scarf · gloves", d: "chapeau · casquette · écharpe · gants" },
    { t: "umbrella", d: "parapluie" },
    { t: "put on / take off / wear", d: "mettre / enlever / porter" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Comment demandes-tu « Quel temps fait-il ? »", options: ["What's the weather like?", "What colour is it?", "How old are you?"], answer: 0, explain: "What's the weather like? = Quel temps fait-il ?" },
      { type: "mc", q: "« It's windy » veut dire…", options: ["il y a du brouillard", "il y a du vent", "il neige"], answer: 1, explain: "Wind = vent, windy = venteux 💨." },
      { type: "text", q: "Écris en anglais : il neige (It's …)", answer: ["snowy", "it's snowy", "it is snowy"], explain: "Snow = neige, snowy = neigeux ❄️." },
      { type: "mc", q: "Comment dit-on « écharpe » ?", options: ["scarf", "skirt", "shirt"], answer: 0, explain: "Scarf = écharpe. Skirt = jupe, shirt = chemise." },
      { type: "text", q: "Écris en anglais : chaussettes", answer: ["socks"], explain: "Chaussettes = socks 🧦." },
      { type: "mc", q: "It's hot and sunny. Que mets-tu ?", options: ["gloves", "a T-shirt and shorts", "boots and a coat"], answer: 1, explain: "Quand il fait chaud, on met des vêtements légers." },
      { type: "mc", q: "« Put on your hat! » veut dire…", options: ["Enlève ton chapeau !", "Mets ton chapeau !", "Achète un chapeau !"], answer: 1, explain: "Put on = mettre ; take off = enlever." },
      { type: "tf", q: "En anglais, « trousers » est un mot pluriel.", answer: true, explain: "My trousers are… → a pair of trousers." },
      { type: "tf", q: "À Londres, « pants » désigne le pantalon.", answer: false, explain: "En Grande-Bretagne, pants = sous-vêtements ; le pantalon, c'est trousers. En Amérique, en revanche, pants = pantalon." },
      { type: "order", q: "Remets les mots dans l'ordre pour former la phrase : « Je porte un pull rouge ».", items: ["I'm", "wearing", "a", "red", "jumper"], explain: "I'm wearing a red jumper : la couleur se place avant le vêtement." },
      { type: "mc", q: "Le nom « jeans » vient de la ville de…", options: ["Londres", "Gênes", "Paris"], answer: 1, explain: "Du vieux français Gênes, ville où l'on utilisait cette toile bleue." },
      { type: "mc", q: "Qu'est-ce qu'il te faut s'il fait « It's rainy » ?", options: ["an umbrella", "sandals", "a cap"], answer: 0, explain: "Quand il pleut, il faut un parapluie : umbrella ☂️." }
    ]
  }
});
