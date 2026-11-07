TOPIC('fr', {
  id: "p2-ing-family",
  title: "My family",
  intro: "Hello! 👋 Aujourd'hui, nous apprenons à présenter notre <b>famille</b> en anglais : <b>family</b> (on dit <i>fa-mi-li</i>). À la fin, tu sauras dire : <i>« This is my mum! »</i> 👩 et <i>« I have got a brother! »</i> 👦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "The family : les noms de la famille 👨‍👩‍👧‍👦",
      html: "<table><tr><th>Anglais</th><th>Se prononce</th><th>Français</th></tr>" +
        "<tr><td>👩 <b>mother</b> / <b>mum</b></td><td>meu-zeur / meum</td><td>mère / maman</td></tr>" +
        "<tr><td>👨 <b>father</b> / <b>dad</b></td><td>fa-zeur / dad</td><td>père / papa</td></tr>" +
        "<tr><td>👧 <b>sister</b></td><td>sis-teur</td><td>sœur</td></tr>" +
        "<tr><td>👦 <b>brother</b></td><td>breu-zeur</td><td>frère</td></tr>" +
        "<tr><td>👶 <b>baby</b></td><td>bèi-bi</td><td>bébé</td></tr>" +
        "<tr><td>👵 <b>grandmother</b> / <b>grandma</b></td><td>grand-meu-zeur / grand-ma</td><td>grand-mère / mamie</td></tr>" +
        "<tr><td>👴 <b>grandfather</b> / <b>grandpa</b></td><td>grand-fa-zeur / grand-pa</td><td>grand-père / papy</td></tr>" +
        "<tr><td>👩‍🦰 <b>aunt</b></td><td>ânt</td><td>tante</td></tr>" +
        "<tr><td>👨‍🦱 <b>uncle</b></td><td>on-keul</td><td>oncle</td></tr>" +
        "<tr><td>🧒 <b>cousin</b></td><td>keu-zine</td><td>cousin / cousine</td></tr></table>" +
        "<p>💡 <b>Mum</b> et <b>dad</b> sont les mots affectueux, comme « maman » et « papa ». <b>Mother</b> et <b>father</b> sont plus formels, comme « mère » et « père ».</p>"
    },
    {
      type: "svg",
      title: "My family tree 🌳 (mon arbre généalogique)",
      svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="320" fill="#f0fdf4"/>' +
        '<line x1="150" y1="75" x2="450" y2="75" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="300" y1="75" x2="300" y2="140" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="200" y1="170" x2="400" y2="170" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="300" y1="170" x2="300" y2="225" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="150" y1="225" x2="450" y2="225" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="150" y1="225" x2="150" y2="245" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="300" y1="225" x2="300" y2="245" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="450" y1="225" x2="450" y2="245" stroke="#15803d" stroke-width="4"/>' +
        '<rect x="80" y="45" width="140" height="55" rx="12" fill="#c4b5fd"/>' +
        '<text x="150" y="70" font-size="17" text-anchor="middle" fill="#3b0764" font-weight="bold">grandpa</text>' +
        '<text x="150" y="91" font-size="14" text-anchor="middle" fill="#3b0764">papy</text>' +
        '<rect x="380" y="45" width="140" height="55" rx="12" fill="#c4b5fd"/>' +
        '<text x="450" y="70" font-size="17" text-anchor="middle" fill="#3b0764" font-weight="bold">grandma</text>' +
        '<text x="450" y="91" font-size="14" text-anchor="middle" fill="#3b0764">mamie</text>' +
        '<rect x="130" y="140" width="140" height="55" rx="12" fill="#93c5fd"/>' +
        '<text x="200" y="165" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">dad</text>' +
        '<text x="200" y="186" font-size="14" text-anchor="middle" fill="#1e3a8a">papa</text>' +
        '<rect x="330" y="140" width="140" height="55" rx="12" fill="#f9a8d4"/>' +
        '<text x="400" y="165" font-size="17" text-anchor="middle" fill="#831843" font-weight="bold">mum</text>' +
        '<text x="400" y="186" font-size="14" text-anchor="middle" fill="#831843">maman</text>' +
        '<rect x="85" y="245" width="130" height="55" rx="12" fill="#fde68a"/>' +
        '<text x="150" y="270" font-size="17" text-anchor="middle" fill="#78350f" font-weight="bold">brother</text>' +
        '<text x="150" y="291" font-size="14" text-anchor="middle" fill="#78350f">frère</text>' +
        '<rect x="235" y="245" width="130" height="55" rx="12" fill="#fb923c"/>' +
        '<text x="300" y="270" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">ME</text>' +
        '<text x="300" y="291" font-size="14" text-anchor="middle" fill="#ffffff">moi</text>' +
        '<rect x="385" y="245" width="130" height="55" rx="12" fill="#fde68a"/>' +
        '<text x="450" y="270" font-size="17" text-anchor="middle" fill="#78350f" font-weight="bold">sister</text>' +
        '<text x="450" y="291" font-size="14" text-anchor="middle" fill="#78350f">sœur</text>' +
        '</svg>',
      caption: "En haut les grands-parents (grandparents), au milieu les parents (parents), en bas les enfants (children). Le papa est ici le fils du grandpa et de la grandma."
    },
    {
      type: "widget",
      title: "Flashcards : la famille",
      widget: "flashcards",
      options: {
        cards: [
          { front: "👩 mum", back: "maman" },
          { front: "👨 dad", back: "papa" },
          { front: "👧 sister", back: "sœur" },
          { front: "👦 brother", back: "frère" },
          { front: "👶 baby", back: "bébé" },
          { front: "👵 grandma", back: "mamie" },
          { front: "👴 grandpa", back: "papy" },
          { front: "👩‍🦰 aunt", back: "tante" },
          { front: "👨‍🦱 uncle", back: "oncle" },
          { front: "🧒 cousin", back: "cousin / cousine" },
          { front: "👫 parents", back: "parents (papa et maman)" },
          { front: "👴👵 grandparents", back: "grands-parents" }
        ]
      },
      caption: "Lis à voix haute le mot anglais, puis retourne la carte."
    },
    {
      type: "quiz",
      title: "Mini-quiz : who is it?",
      questions: [
        { type: "mc", q: "Comment dit-on « frère » en anglais ?", options: ["sister", "brother", "father"], answer: 1, explain: "Brother = frère. Sister = sœur." },
        { type: "mc", q: "« Grandma » veut dire…", options: ["mamie", "tante", "maman"], answer: 0, explain: "Grandma = mamie (grand = grand, ma = maman)." },
        { type: "text", q: "Écris en anglais : papa", answer: ["dad", "daddy", "father"], explain: "Papa = dad (formel : father)." }
      ]
    },
    {
      type: "remember",
      title: "Les phrases pour présenter la famille 🗣️",
      html: "<p>👉 Pour <b>présenter</b> quelqu'un : <b>This is my…</b> = Voici mon / ma…</p>" +
        "<p>🖼️ <i>This is my mum.</i> = Voici ma maman.<br>🖼️ <i>This is my grandpa.</i> = Voici mon papy.</p>" +
        "<p>👉 Pour dire qui il y a dans ta famille : <b>I have got a…</b> = J'ai un / une…</p>" +
        "<p>👧 <i>I have got a sister.</i> = J'ai une sœur.<br>👦👦 <i>I have got two brothers.</i> = J'ai deux frères.</p>" +
        "<p>👉 Pour demander : <b>Have you got a brother?</b> = As-tu un frère ?<br>✅ <b>Yes, I have.</b> ❌ <b>No, I haven't.</b></p>" +
        "<p>💡 Remarque : en anglais, <b>my</b> vaut pour tout le monde : my mum, my dad, my sisters. Pas de « mon / ma / mes » !</p>"
    },
    {
      type: "example",
      title: "Exemple : Emma présente sa famille 📸",
      html: "<p>Emma montre une photo à ses camarades :</p>" +
        "<p><b>Emma:</b> Look! This is my family! 📸<br>" +
        "This is my <b>dad</b>. His name is Paul. 👨<br>" +
        "This is my <b>mum</b>. Her name is Lucy. 👩<br>" +
        "I have got a <b>brother</b>. His name is Tom. He is ten. 👦<br>" +
        "And this is my <b>baby sister</b>, Lily! 👶<br>" +
        "I love my family! ❤️</p>" +
        "<p>💡 <b>His name is…</b> = Son nom est… (pour un garçon). <b>Her name is…</b> = Son nom est… (pour une fille).</p>"
    },
    {
      type: "example",
      title: "Exemple : un dialogue au parc 🌳",
      html: "<p><b>Sam:</b> Hi! Who is that? 👀<br>" +
        "<b>Mia:</b> That's my <b>grandma</b>. 👵<br>" +
        "<b>Sam:</b> Have you got a brother?<br>" +
        "<b>Mia:</b> No, I haven't. But I have got two <b>cousins</b>! 🧒🧒<br>" +
        "<b>Sam:</b> Cool! I have got a sister. She's six.</p>" +
        "<p>💡 <b>Who is that?</b> = Qui est-ce (là-bas) ?</p>"
    },
    {
      type: "widget",
      title: "Garçon ou fille ?",
      widget: "classify",
      options: {
        groups: ["👦 Boys and men (garçons)", "👧 Girls and women (filles)"],
        items: [
          ["brother", 0],
          ["sister", 1],
          ["dad", 0],
          ["mum", 1],
          ["uncle", 0],
          ["aunt", 1],
          ["grandpa", 0],
          ["grandma", 1]
        ]
      },
      caption: "Attention : cousin et baby conviennent aussi bien aux garçons qu'aux filles, c'est pour cela qu'ils ne sont pas là !"
    },
    {
      type: "widget",
      title: "Associe les mots",
      widget: "match",
      options: {
        pairs: [
          ["parents", "papa et maman"],
          ["grandparents", "grands-parents"],
          ["uncle", "oncle"],
          ["aunt", "tante"],
          ["cousin", "cousin/cousine"],
          ["family", "famille"]
        ]
      },
      caption: "Clique sur un mot anglais, puis sur sa traduction."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🇬🇧🇺🇸",
      html: "<p>En <b>Grande-Bretagne</b>, maman se dit <b>mum</b>, alors qu'aux <b>États-Unis</b> on dit <b>mom</b> ! Et les petits enfants disent <b>mummy</b> et <b>daddy</b>. La grand-mère peut aussi être <b>granny</b> ou <b>nan</b>.</p>"
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🌍",
      html: "<p>Dans énormément de langues du monde, le mot pour « maman » est très proche : <b>mamma</b> en italien, <b>mum</b> en anglais, <b>maman</b> en français, <b>mama</b> en russe et en swahili, <b>māma</b> en chinois ! Les spécialistes pensent que c'est parce que « ma-ma » est l'un des premiers sons faciles que les bébés arrivent à dire. 👶</p>"
    },
    {
      type: "3d",
      title: "« Mum » around the world 🌍",
      scene: "globe",
      options: {
        points: [
          { lat: 51.5, lon: -0.1, label: "🇬🇧 mum", color: "#2563eb" },
          { lat: 40.7, lon: -74, label: "🇺🇸 mom", color: "#ef4444" },
          { lat: 41.9, lon: 12.5, label: "🇮🇹 mamma", color: "#16a34a" },
          { lat: 48.9, lon: 2.35, label: "🇫🇷 maman", color: "#1d4ed8" },
          { lat: 40.4, lon: -3.7, label: "🇪🇸 mamá", color: "#f59e0b" },
          { lat: 55.75, lon: 37.6, label: "🇷🇺 mama", color: "#dc2626" },
          { lat: 39.9, lon: 116.4, label: "🇨🇳 māma", color: "#ef4444" },
          { lat: -6.8, lon: 39.3, label: "🇹🇿 mama", color: "#22c55e" },
          { lat: 47.0, lon: 28.8, label: "🇲🇩 mama", color: "#facc15" }
        ]
      },
      caption: "Fais tourner le globe : dans presque tout le monde, maman se dit de façon proche !"
    },
    {
      type: "alternatives",
      title: "D'autres façons de retenir la famille",
      intro: "<p>Tu n'arrives pas à retenir tous les mots ? Essaie l'une de ces astuces !</p>",
      tabs: [
        {
          label: "🖐️ Finger family",
          html: "<p>Chaque doigt de la main est un membre de la famille ! C'est une comptine très célèbre dans les pays de langue anglaise :</p>" +
            "<ul><li>👍 pouce = <b>Daddy finger</b></li><li>☝️ index = <b>Mummy finger</b></li><li>🖕 majeur = <b>Brother finger</b></li><li>💍 annulaire = <b>Sister finger</b></li><li>🤙 auriculaire = <b>Baby finger</b></li></ul>" +
            "<p>Chante : <i>« Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do? »</i> et bouge le bon doigt ! 🎵</p>",
          svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="600" height="260" fill="#fff7ed"/>' +
            '<rect x="200" y="140" width="200" height="110" rx="40" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="140" y="130" width="60" height="40" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="210" y="40" width="40" height="110" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="258" y="20" width="40" height="130" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="306" y="35" width="40" height="115" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="354" y="70" width="36" height="85" rx="18" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<text x="110" y="150" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Daddy</text>' +
            '<text x="190" y="30" font-size="16" text-anchor="middle" fill="#be185d" font-weight="bold">Mummy</text>' +
            '<text x="278" y="14" font-size="16" text-anchor="middle" fill="#b45309" font-weight="bold">Brother</text>' +
            '<text x="400" y="30" font-size="16" text-anchor="middle" fill="#7e22ce" font-weight="bold">Sister</text>' +
            '<text x="450" y="90" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">Baby</text>' +
            '</svg>'
        },
        {
          label: "🔗 Mots jumeaux",
          html: "<p>Certains mots se construisent comme des briques :</p>" +
            "<ul><li><b>grand</b> (grand) + <b>mother</b> = <b>grandmother</b> 👵 (la « grande mère »)</li>" +
            "<li><b>grand</b> + <b>father</b> = <b>grandfather</b> 👴</li>" +
            "<li><b>grand</b> + <b>parents</b> = <b>grandparents</b> (grands-parents)</li></ul>" +
            "<p>Et regarde ces mots : <b>mother – brother</b> et <b>father</b> contiennent tous <b>-ther</b> ! <b>Sister</b> finit aussi par <b>-er</b>. Les mots de la famille « se ressemblent », comme les membres d'une famille ! 😄</p>"
        },
        {
          label: "🎭 Jeu : la famille en carton",
          html: "<p>Dessine et découpe ta famille (même les animaux de la maison !). Puis présente-la à un ami ou à une peluche, comme dans un spectacle :</p>" +
            "<p>🎤 <i>« Hello! This is my dad. This is my mum. I have got a sister. And this is my dog, Max! »</i> 🐶</p>" +
            "<p>Jouer la scène avec les mains aide le cerveau à retenir les mots bien mieux que de simplement les lire.</p>"
        },
        {
          label: "🃏 Trouve les paires",
          html: "<p>Associe le mot affectueux au mot formel :</p>",
          widget: "match",
          options: { pairs: [["mum", "mother"], ["dad", "father"], ["grandma", "grandmother"], ["grandpa", "grandfather"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la famille en anglais",
      nodes: [
        { id: "family", label: "Family", x: 50, y: 6, color: "#8b5cf6", html: "<p><b>Family</b> = famille.</p>", why: "<p>Il vient du latin <i>familia</i>, le même mot d'où vient « famille ». C'est pour cela qu'ils se ressemblent tant ! En latin, il désignait toutes les personnes qui vivaient dans une maison.</p>" },
        { id: "parents", label: "Parents", x: 25, y: 30, color: "#3b82f6", html: "<p>Mum and dad = papa et maman.</p>", why: "<p><b>Parents</b> vient du latin <i>parens</i>, « celui qui fait naître ». Attention : en anglais, <b>parents</b> veut dire seulement papa et maman ; la famille au sens large (oncles, tantes, cousins…) se dit <b>relatives</b>. En français, « parents » a les deux sens !</p>" },
        { id: "children", label: "Children", x: 75, y: 30, color: "#f59e0b", html: "<p>Les enfants : brother, sister, baby.</p>", why: "<p>Un enfant est <b>a child</b>, deux enfants sont <b>two children</b> : c'est un pluriel spécial, on n'ajoute pas seulement un -s.</p>" },
        { id: "grand", label: "Grandparents", x: 25, y: 58, color: "#a855f7", html: "<p>Grandma et grandpa : les grands-parents.</p>", why: "<p>Le morceau <b>grand-</b> vient du français et veut dire « grand » : les grands-parents sont la maman et le papa « grands », d'une génération avant.</p>" },
        { id: "relatives", label: "Aunt, uncle, cousin", x: 75, y: 58, color: "#ec4899", html: "<p>Tante, oncle, cousin/cousine.</p>", why: "<p>Les mots <b>aunt</b> et <b>uncle</b> sont arrivés en anglais depuis l'ancien français, il y a environ 800 ans. <b>Cousin</b> vaut aussi bien pour les garçons que pour les filles (en français, on distingue cousin et cousine).</p>" },
        { id: "this", label: "This is my…", x: 20, y: 88, color: "#22c55e", html: "<p>Pour présenter : <i>This is my sister.</i></p>", why: "<p><b>This</b> indique quelque chose de proche de toi (ce, cette). <b>That</b> indique quelque chose de lointain (celui-là). <b>My</b> ne change jamais.</p>" },
        { id: "haveGot", label: "I have got…", x: 50, y: 88, color: "#0ea5e9", html: "<p>Pour dire ce que tu as : <i>I have got a brother.</i></p>", why: "<p>En anglais britannique, on utilise beaucoup <b>have got</b> pour dire « avoir ». En Amérique, on dit plus souvent seulement <b>I have a brother</b>.</p>" },
        { id: "hisHer", label: "His / Her", x: 80, y: 88, color: "#ef4444", html: "<p>His name = son nom (à lui). Her name = son nom (à elle).</p>", why: "<p>En français, « son » change avec la chose possédée ; en anglais, il change avec <b>celui qui possède</b> : his pour un garçon, her pour une fille.</p>" }
      ],
      edges: [
        ["family", "parents", "a des"],
        ["family", "children", "a des"],
        ["parents", "grand", "enfants des"],
        ["family", "relatives", "et des"],
        ["parents", "this", "présente-les avec"],
        ["children", "haveGot", "dis-le avec"],
        ["relatives", "hisHer", "avec les noms :"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : phrases",
      questions: [
        { type: "mc", q: "Comment dit-on « Voici ma maman » ?", options: ["This is my mum.", "I have got mum.", "My is mum."], answer: 0, explain: "This is my mum." },
        { type: "mc", q: "« Have you got a sister? » Si tu n'as pas de sœur, tu réponds…", options: ["Yes, I have.", "No, I haven't.", "I am sister."], answer: 1, explain: "No, I haven't = Non, je n'en ai pas." },
        { type: "tf", q: "En anglais, « parents » désigne aussi les oncles, les tantes et les cousins.", answer: false, explain: "Parents = seulement papa et maman. La famille au sens large se dit relatives." }
      ]
    }
  ],
  glossary: [
    { t: "Family", d: "Famille." },
    { t: "Mum / Mother", d: "Maman / mère." },
    { t: "Dad / Father", d: "Papa / père." },
    { t: "Brother / Sister", d: "Frère / sœur." },
    { t: "Grandma / Grandpa", d: "Mamie / papy." },
    { t: "Aunt / Uncle", d: "Tante / oncle." },
    { t: "Cousin", d: "Cousin ou cousine." },
    { t: "Parents", d: "Papa et maman (les autres membres de la famille se disent relatives)." },
    { t: "This is my…", d: "Voici mon / ma…" },
    { t: "I have got…", d: "J'ai…" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Comment dit-on « sœur » ?", options: ["sister", "brother", "aunt"], answer: 0, explain: "Sister = sœur." },
      { type: "mc", q: "« Uncle » veut dire…", options: ["grand-père", "oncle", "cousin"], answer: 1, explain: "Uncle = oncle. Aunt = tante." },
      { type: "text", q: "Écris en anglais : papy (mot affectueux)", answer: ["grandpa", "grandad", "granddad"], explain: "Grandpa = papy (formel : grandfather)." },
      { type: "text", q: "Écris en anglais : maman", answer: ["mum", "mom", "mummy", "mother"], explain: "Mum (en Amérique mom) ; formel : mother." },
      { type: "tf", q: "« Cousin » s'utilise aussi bien pour le cousin que pour la cousine.", answer: true, explain: "En anglais, cousin vaut pour les deux." },
      { type: "mc", q: "Complète : « This is ___ dad. »", options: ["my", "I", "me"], answer: 0, explain: "This is my dad = Voici mon papa." },
      { type: "mc", q: "Comment dit-on « J'ai un frère » ?", options: ["I have got a brother.", "This is brother.", "I am a brother got."], answer: 0, explain: "I have got a brother." },
      { type: "order", q: "Mets la phrase dans l'ordre : « J'ai deux sœurs ».", items: ["I", "have", "got", "two", "sisters"], explain: "I have got two sisters." },
      { type: "mc", q: "Le papa de ta maman est ton…", options: ["uncle", "grandpa", "brother"], answer: 1, explain: "Le papa de maman est le grand-père : grandpa." },
      { type: "mc", q: "Comment dit-on « Elle s'appelle Anna » (son nom à elle) ?", options: ["His name is Anna.", "Her name is Anna.", "My name is Anna."], answer: 1, explain: "Pour une fille, on utilise her." },
      { type: "tf", q: "« Grandparents » veut dire « grands-parents ».", answer: true, explain: "Grand + parents = les parents « grands » : les grands-parents." }
    ]
  }
});
