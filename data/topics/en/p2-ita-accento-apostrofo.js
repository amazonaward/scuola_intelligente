TOPIC('en', {
  id: "p2-ita-accento-apostrofo",
  title: "The accent and the apostrophe",
  intro: "Two tiny little marks, but super important! The <b>accent</b> ( è ) tells you where your voice beats strongest; the <b>apostrophe</b> ( ' ) takes the place of a vowel that has run away. 🏃",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "The accent: the strongest vowel",
      html: `<p>In every Italian word there is one syllable we say <b>more strongly</b>: ta-<b>vo</b>-lo, <b>ma</b>-re, ca-<b>set</b>-ta.</p>
<p>Usually nothing is written. But when the voice beats strongly on the <b>last vowel</b> of the word, we put a little mark on top: the <b>accent</b>.</p>
<p>Examples: città, papà, caffè, perché, virtù, però, tivù. ☕</p>
<p>Try saying them while clapping hard on the last syllable: cit-<b>TÀ</b> 👏!</p>`
    },
    {
      type: "svg",
      title: "Papa or papà?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<rect x="20" y="20" width="270" height="260" rx="20" fill="#fef9c3" stroke="#ca8a04" stroke-width="4"/>
<rect x="310" y="20" width="270" height="260" rx="20" fill="#e0f2fe" stroke="#0284c7" stroke-width="4"/>
<path d="M125 70 L155 30 L185 70 Z" fill="#fde047" stroke="#a16207" stroke-width="3"/>
<circle cx="155" cy="105" r="35" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<path d="M105 230 L120 145 L190 145 L205 230 Z" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
<circle cx="445" cy="95" r="35" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<path d="M415 80 Q445 45 475 80" fill="#78350f"/>
<rect x="405" y="135" width="80" height="95" rx="12" fill="#2563eb"/>
<circle cx="510" cy="190" r="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<text x="155" y="268" font-size="44" text-anchor="middle" font-weight="bold" fill="#854d0e"><tspan fill="#dc2626">PA</tspan>pa</text>
<text x="445" y="268" font-size="44" text-anchor="middle" font-weight="bold" fill="#075985">pa<tspan fill="#dc2626">PÀ</tspan></text>
</svg>`,
      caption: "PA-pa is the Pope, head of the Catholic Church; pa-PÀ is your dad. The accent changes everything!"
    },
    {
      type: "text",
      title: "The one-syllable little words",
      html: `<p>Some very short Italian words change meaning with the accent. Here they are:</p>
<table>
<tr><th>With accent</th><th>Without accent</th></tr>
<tr><td><b>è</b> (verb "to be" = is): il cane <b>è</b> nero</td><td><b>e</b> (joins = and): il cane <b>e</b> il gatto</td></tr>
<tr><td><b>là</b> (place = there): vai <b>là</b></td><td><b>la</b> (= the): <b>la</b> mela</td></tr>
<tr><td><b>lì</b> (place = there): siediti <b>lì</b></td><td><b>li</b> (= them): <b>li</b> vedo</td></tr>
<tr><td><b>sì</b> (answer = yes): <b>sì</b>, grazie!</td><td><b>si</b> (= himself/herself): <b>si</b> lava</td></tr>
<tr><td><b>dà</b> (verb "to give" = gives): mi <b>dà</b> un bacio</td><td><b>da</b> (= from): vengo <b>da</b> Roma</td></tr>
<tr><td><b>tè</b> (the drink = tea) 🍵</td><td><b>te</b> (= you): vengo con <b>te</b></td></tr>
</table>
<p>But careful: <b>qui</b>, <b>qua</b>, <b>su</b>, <b>blu</b>, <b>tre</b>, <b>re</b>, <b>fa</b> do <b>not</b> take an accent!</p>`
    },
    {
      type: "remember",
      title: "The nursery rhyme",
      html: `<p style="font-size:1.2em">🎵 <i>Su qui e su qua<br>l'accento non va.<br>Su lì e su là<br>l'accento ci va!</i> 🎵</p><p>(On "qui" and "qua" the accent doesn't go; on "lì" and "là" the accent does go!)</p>`
    },
    {
      type: "widget",
      title: "Game: accent or no accent?",
      widget: "classify",
      options: { groups: ["Needs an accent", "No accent"], items: [
        ["🏙️ citta…", 0], ["☕ caffe…", 0], ["❓ perche…", 0], ["👨 papa… (my dad)", 0], ["📺 tivu…", 0],
        ["📍 qui", 1], ["📍 qua", 1], ["🔵 blu", 1], ["3️⃣ tre", 1], ["👑 re", 1]
      ] },
      caption: "Put each word in the right group. Remember the rhyme!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: the accent",
      questions: [
        { type: "mc", q: "Il gatto … sul divano. (The cat … on the sofa.)", options: ["e", "è"], answer: 1, explain: "Here we have the verb \"to be\": «il gatto è» (the cat is)." },
        { type: "mc", q: "Mangio pane … marmellata. (I eat bread … jam.)", options: ["e", "è"], answer: 0, explain: "Here «e» joins two things (and): no accent." },
        { type: "tf", q: "«Qui» is written with an accent.", answer: false, explain: "On «qui» and «qua» the accent doesn't go!" }
      ]
    },
    {
      type: "text",
      title: "The apostrophe: the vowel that runs away",
      html: `<p>When a word ends with a vowel and the next word <b>begins with a vowel</b>, the first vowel often <b>runs away</b> 🏃 and in its place we put the <b>apostrophe</b> ( ' ).</p>
<ul>
<li>lo + albero → <b>l'albero</b> 🌳 (the tree)</li>
<li>la + ape → <b>l'ape</b> 🐝 (the bee)</li>
<li>una + amica → <b>un'amica</b> (a friend, girl)</li>
<li>c<b>i</b> + è → <b>c'è</b> (there is)</li>
<li>dove + è → <b>dov'è</b> (where is)</li>
<li>questo + anno → <b>quest'anno</b> (this year)</li>
</ul>
<p>We do this because two vowels next to each other are hard to say: «la ape» sounds strange, «l'ape» slides along smoothly! This is called <b>elision</b>.</p>`
    },
    {
      type: "svg",
      title: "How the apostrophe is born",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<rect x="40" y="40" width="120" height="70" rx="14" fill="#86efac" stroke="#15803d" stroke-width="3"/>
<text x="100" y="88" font-size="40" text-anchor="middle" font-weight="bold" fill="#14532d">L<tspan fill="#dc2626">A</tspan></text>
<text x="190" y="88" font-size="40" font-weight="bold" fill="#1f2937">+</text>
<rect x="230" y="40" width="140" height="70" rx="14" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="300" y="88" font-size="40" text-anchor="middle" font-weight="bold" fill="#713f12">APE</text>
<text x="440" y="90" font-size="46">🐝</text>
<path d="M95 115 Q80 160 40 170" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 5"/>
<text x="20" y="200" font-size="34" fill="#dc2626" font-weight="bold">A</text>
<text x="50" y="230" font-size="16" fill="#dc2626">the vowel runs away!</text>
<rect x="230" y="160" width="200" height="70" rx="14" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="330" y="210" font-size="44" text-anchor="middle" font-weight="bold" fill="#1e3a8a">L<tspan fill="#dc2626">'</tspan>APE</text>
<text x="450" y="205" font-size="18" fill="#1d4ed8">in its place</text>
<text x="450" y="228" font-size="18" fill="#1d4ed8">the apostrophe</text>
</svg>`,
      caption: "The A of «la» runs away and leaves its place-holder behind: the apostrophe."
    },
    {
      type: "text",
      title: "Un or un'? The masculine and feminine trick",
      html: `<ul>
<li>Before a <b>feminine</b> word starting with a vowel: <b>un'</b> with the apostrophe → un'amica, un'ape, un'isola. (It comes from <b>una</b>, the A ran away!)</li>
<li>Before a <b>masculine</b> word: <b>un</b> without the apostrophe → un amico, un albero, un ombrello. (No vowel ran away!)</li>
</ul>
<p>Trick: try putting «<b>una</b>» in front of the word. If it works (una amica), then write <b>un'</b>.</p>`
    },
    {
      type: "example",
      title: "Example: Matteo's postcard 📮",
      html: `<p>Matteo writes from the seaside: «Ciao nonna! Qui <b>c'è</b> il sole. Ieri ho visto <b>un'</b>enorme medusa e <b>un</b> granchio. Papà mi <b>dà</b> sempre il gelato. Il mare <b>è</b> blu e l'acqua <b>è</b> calda!» (Hi Grandma! The sun is out here. Yesterday I saw a huge jellyfish and a crab. Dad always gives me ice cream. The sea is blue and the water is warm!)</p>
<p>Look at the marks: c'è (ci + è), un'enorme (medusa is feminine), un granchio (masculine), dà (verb "to give"), è (verb "to be"), blu (no accent).</p>`
    },
    {
      type: "example",
      title: "Example: in the kitchen 🍳",
      html: `<p>Mum asks: «<b>Dov'è</b> l'olio?» (Where is the oil?)</p>
<p>Giulia answers: «È <b>lì</b>, sulla mensola! Lo vedi?» (It's there, on the shelf! Can you see it?)</p>
<p>«<b>Sì</b>! Ora prendo anche <b>un po'</b> di sale.» (Yes! Now I'll take a bit of salt too.)</p>
<p>Did you know? In <b>po'</b> there is an apostrophe because long ago people said «poco»: a whole syllable fell off!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…?",
      html: `<p>The apostrophe and accents spread in Italian books after <b>1501</b>, when the Venetian printer <b>Aldo Manuzio</b> printed Petrarch's poems edited by the writer <b>Pietro Bembo</b>. Before that, in handwritten books, they were often not used! 📜</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…?",
      html: `<p>«<b>Qual è</b>» (which is) is written <b>without</b> an apostrophe! Why? Because «qual» can also be said on its own: «qual buon vento ti porta?». No vowel ran away, so no apostrophe. It's one of the most common mistakes, even among grown-ups! 😮</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the accent and the apostrophe",
      intro: "Try these different paths: with your voice, with a drawing, with other languages or with a game.",
      tabs: [
        {
          label: "📣 The megaphone",
          html: `<p>Imagine calling a friend at the park with a megaphone 📣. The syllable you shout loudest is the one with the accent!</p>
<ul>
<li>«Vieni in cit-<b>TÀÀÀ</b>!» → the strong syllable is the last one → write the accent.</li>
<li>«Andiamo al <b>MAAA</b>-re!» → the strong syllable is not the last one → no written accent.</li>
</ul>`
        },
        {
          label: "🪑 The empty seat",
          html: `<p>Think of the apostrophe as a <b>jacket hanging on a chair</b> 🧥: it means «someone was here, but went out».</p>
<p>In <b>l'ape</b> the jacket reminds us that the A of «la» was there. In <b>un amico</b> there is no jacket, because «un» never had a vowel at the end.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<rect x="60" y="90" width="90" height="12" fill="#92400e"/>
<rect x="60" y="30" width="12" height="160" fill="#92400e"/>
<rect x="138" y="102" width="12" height="88" fill="#92400e"/>
<rect x="72" y="102" width="12" height="88" fill="#92400e"/>
<path d="M50 30 L90 30 L95 95 L45 95 Z" fill="#ef4444"/>
<text x="210" y="80" font-size="34" font-weight="bold" fill="#1f2937">l<tspan fill="#ef4444">'</tspan>ape</text>
<text x="210" y="120" font-size="20" fill="#b91c1c">the A was here</text>
<text x="400" y="80" font-size="34" font-weight="bold" fill="#1f2937">un amico</text>
<text x="400" y="120" font-size="20" fill="#475569">nobody went out</text>
</svg>`
        },
        {
          label: "🌍 In other languages",
          html: `<ul>
<li>🇫🇷 In <b>French</b> the apostrophe is used as in Italian: <i>l'école</i> (the school), <i>l'ami</i> (the friend).</li>
<li>🇬🇧 In <b>English</b> the apostrophe joins two words: <i>it is</i> → <i>it's</i>, <i>do not</i> → <i>don't</i>.</li>
<li>🇪🇸 In <b>Spanish</b> the accent is also written in the middle of the word: <i>árbol</i> (tree), <i>música</i>.</li>
</ul>
<p>Every language uses these marks in its own way, but the idea is always the same: they help us <b>read correctly</b>.</p>`
        },
        {
          label: "🔗 Match",
          html: `<p>Match each little word to the right sentence.</p>`,
          widget: "match",
          options: { pairs: [
            ["è", "Il cielo … azzurro (The sky … blue)"],
            ["e", "Pane … burro (Bread … butter)"],
            ["là", "Guarda laggiù, …! (Look over …!)"],
            ["la", "… mela rossa (… red apple)"],
            ["sì", "«Vuoi giocare?» «…!» (Want to play? …!)"],
            ["dà", "Il nonno mi … un bacio (Grandpa … me a kiss)"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the accent and the apostrophe",
      nodes: [
        { id: "segni", label: "Marks on words", x: 50, y: 8, color: "#2563eb", html: "Little marks that help us read and understand words.", why: "Writing tries to «photograph» the voice: the marks tell us how a word is pronounced and help tell apart words that are spelled almost the same." },
        { id: "accento", label: "Accent", x: 25, y: 30, color: "#dc2626", html: "The mark on the final vowel where the voice beats strongly: città, perché.", why: "The Italian name comes from the Latin <i>ad cantus</i>, «close to the song»: it's the most «sung» part of the word. In Italian it is written only on the last syllable, because that's where it is hardest to guess." },
        { id: "graveacuto", label: "Grave and acute", x: 10, y: 55, color: "#f97316", html: "È (grave, sloping down to the left) and perché (acute, sloping up to the right).", why: "They show whether the E or the O is «open» (è, però) or «closed» (perché, né). The names come from ancient Greek music: acute = high sound, grave = low sound." },
        { id: "monosillabi", label: "One-syllable little words", x: 38, y: 55, color: "#a855f7", html: "è/e, là/la, lì/li, sì/si, dà/da, tè/te.", why: "They are words that sound the same but mean different things: the accent tells them apart on paper. The other little words (qui, qua, su, tre) have no «twin», so the accent isn't needed." },
        { id: "apostrofo", label: "Apostrophe", x: 72, y: 30, color: "#16a34a", html: "The mark ' that takes the place of a fallen vowel: l'ape, c'è.", why: "It comes from the Greek <i>apóstrophos</i>, «turned away»: the vowel turned and went away. Pietro Bembo and Aldo Manuzio made it common in books from 1501." },
        { id: "elisione", label: "Elision", x: 62, y: 58, color: "#0ea5e9", html: "When the final vowel drops before another vowel: lo albero → l'albero.", why: "Two vowels next to each other make the voice «stumble» a little (hiatus). Removing one makes the sentence flow better: it's a law of easy speaking." },
        { id: "unun", label: "Un or un'?", x: 88, y: 58, color: "#14b8a6", html: "un' before feminine nouns (un'amica), un before masculine ones (un amico).", why: "Un' is «una» with the A dropped, so it has the apostrophe; un is already short on its own, no vowel has dropped." },
        { id: "troncamento", label: "Po' and qual è", x: 75, y: 85, color: "#64748b", html: "Po' has the apostrophe; qual è doesn't.", why: "In «po'» a whole syllable has dropped (poco → po'). «Qual» instead also exists on its own (qual buon vento!), so it doesn't lose anything: we write qual è." }
      ],
      edges: [
        ["segni", "accento", ""],
        ["segni", "apostrofo", ""],
        ["accento", "graveacuto", "can be"],
        ["accento", "monosillabi", "tells apart"],
        ["apostrofo", "elisione", "marks"],
        ["apostrofo", "unun", "rule"],
        ["apostrofo", "troncamento", "special cases"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the apostrophe",
      questions: [
        { type: "mc", q: "How is it written?", options: ["un amica", "un'amica", "una'amica"], answer: 1, explain: "Amica is feminine: una amica → un'amica." },
        { type: "mc", q: "How is it written?", options: ["un'albero", "un albero", "u'nalbero"], answer: 1, explain: "Albero is masculine: un albero, without an apostrophe." },
        { type: "tf", q: "«lo + elefante» becomes «l'elefante».", answer: true, explain: "The O of «lo» drops before the vowel: l'elefante." }
      ]
    }
  ],
  glossary: [
    { t: "Accent", d: "Mark on the final vowel where the voice beats strongly: città." },
    { t: "Apostrophe", d: "The mark ' that takes the place of a dropped vowel: l'ape." },
    { t: "Elision", d: "Dropping the final vowel before a word that starts with a vowel." },
    { t: "Monosyllable", d: "Word with only one syllable: è, tre, qui, sì." },
    { t: "Stressed syllable", d: "The syllable we say most strongly in a word." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which word needs an accent?", options: ["qua", "citta", "tre"], answer: 1, explain: "Città: the voice beats on the last syllable." },
      { type: "mc", q: "La mela … rossa. (The apple … red.)", options: ["e", "è"], answer: 1, explain: "It's the verb \"to be\": la mela è rossa." },
      { type: "mc", q: "How is it written?", options: ["l'ombrello", "lo ombrello", "l ombrello"], answer: 0, explain: "The O of «lo» drops before the vowel: l'ombrello." },
      { type: "tf", q: "«Qual è» is written with an apostrophe.", answer: false, explain: "We write qual è, without an apostrophe: «qual» also exists on its own." },
      { type: "tf", q: "«Blu» is written without an accent.", answer: true, explain: "Blu is a one-syllable little word with no twin: no accent." },
      { type: "mc", q: "«Vuoi una caramella?» «…, grazie!» (Want a sweet? …, thanks!)", options: ["Si", "Sì"], answer: 1, explain: "The answer \"yes\" needs the accent: sì." },
      { type: "mc", q: "Which one is written correctly?", options: ["un'isola", "un isola", "una isola'"], answer: 0, explain: "Isola is feminine: un'isola." },
      { type: "mc", q: "Which one is written correctly?", options: ["un'orso", "un orso", "uno'orso"], answer: 1, explain: "Orso is masculine: un orso, without an apostrophe." },
      { type: "mc", q: "ci + è becomes…", options: ["cie", "c'è", "ci'è"], answer: 1, explain: "The I drops and we put the apostrophe: c'è." },
      { type: "mc", q: "Vorrei un … di acqua. (I'd like a bit of water.)", options: ["po", "po'", "pò"], answer: 1, explain: "We write po', with the apostrophe, because it comes from «poco»." },
      { type: "order", q: "Put the steps for writing «l'ape» in order.", items: ["I write «la» and «ape»", "Two vowels meet: a + a", "The vowel of «la» drops", "In its place I put the apostrophe: l'ape"], explain: "It's elision: the vowel drops and the apostrophe stays." }
    ]
  }
});
