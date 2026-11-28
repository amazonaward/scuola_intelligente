TOPIC('en', {
  id: "l3-ing-middle-ages-chaucer",
  title: "The Middle Ages and Chaucer",
  intro: "\"<i>Hwæt! We Gardena in geardagum...</i>\" This is how the oldest epic poem in English literature begins, in a language that an English speaker today could not understand without studying it. Between the 5th and the 15th century the language of England changed enormously: from the <b>Old English</b> of the Anglo-Saxons to the <b>Middle English</b> of <b>Geoffrey Chaucer</b>, whose <i>Canterbury Tales</i> create a gallery of characters as lively and ironic as a TV series. In this lesson you will look at the history, the language, <b>Beowulf</b>, Chaucer and his pilgrims. 🏰",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. From Celts to Normans: the story in short",
      html: `<p>The medieval history of England is a history of <b>successive invasions</b>, each of which left its mark on the language and the culture.</p>
<table>
<tr><th>Date</th><th>Event</th><th>Effect</th></tr>
<tr><td>43 AD – c. 410</td><td>Roman <b>Britannia</b></td><td>roads, towns (<i>-chester</i> from <i>castra</i>), Latin words</td></tr>
<tr><td>5th century</td><td><b>Anglo-Saxons</b> (Angles, Saxons, Jutes) arrive from northern Germany and Denmark</td><td><b>Old English</b> is born; «England» comes from <i>Angles</i></td></tr>
<tr><td>597</td><td><b>St Augustine</b> lands in Kent</td><td>conversion to Christianity; Canterbury becomes the primate's see</td></tr>
<tr><td>793 →</td><td><b>Vikings</b>: raid on Lindisfarne</td><td>Norse words remain in the <b>Danelaw</b> (<i>sky, egg, they</i>)</td></tr>
<tr><td>871 – 899</td><td><b>Alfred the Great</b>, king of Wessex</td><td>resists the Vikings, promotes education in English</td></tr>
<tr><td>1066</td><td><b>Norman Conquest</b>: Battle of Hastings</td><td>French becomes the language of the court and the law</td></tr>
<tr><td>1215</td><td><b>Magna Carta</b></td><td>the king is not above the law</td></tr>
<tr><td>1348</td><td><b>Black Death</b></td><td>about a third of the population dies; peasants gain social weight</td></tr>
<tr><td>1381</td><td><b>Peasants' Revolt</b></td><td>an uprising against the poll tax</td></tr>
<tr><td>1476</td><td><b>William Caxton</b> installs the first printing press in England</td><td>books circulate, the language becomes more uniform</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "How English changed",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif" font-size="14" text-anchor="middle">
<rect x="20" y="40" width="170" height="110" rx="12" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<text x="105" y="68" fill="#7f1d1d" font-weight="bold" font-size="16">Old English</text>
<text x="105" y="92" fill="#7f1d1d">c. 450 – 1100</text>
<text x="105" y="116" fill="#7f1d1d">Beowulf</text>
<text x="105" y="138" fill="#7f1d1d">«Hwæt!»</text>
<rect x="215" y="40" width="170" height="110" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="300" y="68" fill="#78350f" font-weight="bold" font-size="16">Middle English</text>
<text x="300" y="92" fill="#78350f">c. 1100 – 1500</text>
<text x="300" y="116" fill="#78350f">Chaucer</text>
<text x="300" y="138" fill="#78350f">«Whan that Aprill...»</text>
<rect x="410" y="40" width="170" height="110" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="495" y="68" fill="#14532d" font-weight="bold" font-size="16">Modern English</text>
<text x="495" y="92" fill="#14532d">from c. 1500</text>
<text x="495" y="116" fill="#14532d">Shakespeare</text>
<text x="495" y="138" fill="#14532d">«To be, or not to be»</text>
<path d="M190 95 L215 95 M385 95 L410 95" stroke="#334155" stroke-width="4"/>
<text x="300" y="195" fill="#0f172a" font-size="15" font-weight="bold">Influences on the vocabulary</text>
<text x="300" y="222" fill="#334155">Latin (church, law) · Norse (sky, egg, window) · French (beef, justice, court)</text>
<text x="300" y="256" fill="#475569" font-size="14">Cow, pig, sheep (Old English, the farmers) ≠ beef, pork, mutton (French, the table)</text>
</g>
</svg>`,
      caption: "Three stages of the English language, and three layers of vocabulary."
    },
    {
      type: "curiosity",
      title: "Why do we say «cow» but eat «beef»?",
      html: `<p>After 1066 the Norman aristocracy spoke French, while the Anglo-Saxon peasants who raised the animals kept using English. So the live animal kept its English name (<i>cow, pig, sheep, calf</i>) and the meat served at the lord's table got the French name (<i>beef</i> from <i>boeuf</i>, <i>pork</i> from <i>porc</i>, <i>mutton</i> from <i>mouton</i>, <i>veal</i> from <i>veau</i>). Even today, a difference in social class is fossilised in the English vocabulary. It also explains why so many «learned» English words (<i>justice, government, courage</i>) look so similar to their equivalents in French, Italian and the other Romance languages.</p>`
    },
    {
      type: "decision",
      title: "October 1066: march or wait?",
      html: `<p>You are <b>King Harold II</b> of England. On <b>25 September 1066</b> you have defeated the Norwegian king Harald Hardrada at <b>Stamford Bridge</b>, in Yorkshire. Three days later, William, Duke of Normandy, lands on the south coast at Pevensey with a large army and claims the throne. You are about 400 km away. Your men are tired and many are wounded. William is devastating the lands of your family in Sussex.</p>`,
      question: "What do you do?",
      options: [
        { label: "Rest the army, gather new troops and wait", outcome: "You would have fresher troops and a stronger army, but William would keep ravaging the south and your authority would suffer." },
        { label: "March south at once and fight", outcome: "You would meet William quickly and protect your people, but with an army that is tired and not yet complete." },
        { label: "Retreat to London and defend the city", outcome: "A safer position, but a long delay: William would be free to move and gain supporters." }
      ],
      answer: 1,
      explain: "Harold marched south in about two weeks and fought William on <b>14 October 1066</b> at <b>Hastings</b>. After a long day's fighting Harold was killed and the English army was defeated. William was crowned king on Christmas Day 1066: the <b>Norman Conquest</b> changed English society, law and language forever. Many historians still debate whether Harold should have waited."
    },
    {
      type: "text",
      title: "2. Old English literature and Beowulf",
      html: `<p>Anglo-Saxon literature is mainly <b>oral poetry</b>, sung by the <i>scops</i> (poets) in the halls of warrior chiefs. The metre is <b>alliterative</b>: each line is divided into two halves by a pause (<b>caesura</b>) and repeats the same initial sound in some of the stressed words (<i>"The cat came creeping..."</i>). There is no rhyme. Another typical feature is the <b>kenning</b>, a compound metaphor: <i>hronrad</i>, <b>whale-road</b> = the sea; <i>banhus</i>, <b>bone-house</b> = the body.</p>
<p>The masterpiece is <b>Beowulf</b>, an anonymous epic poem of <b>3,182 lines</b>, composed between the 8th and the 11th century and preserved in a single manuscript from <b>around 1000</b> (now in the British Library). The story is set in <b>Scandinavia</b>, not in England.</p>
<ul>
<li><b>Beowulf</b>, a young hero of the <b>Geats</b>, crosses the sea to help <b>Hrothgar</b>, king of the Danes, whose hall <b>Heorot</b> is being terrorised by a monster, <b>Grendel</b>.</li>
<li>Beowulf fights him with his bare hands and tears off his arm; then he also kills <b>Grendel's mother</b> in a cave beneath a lake.</li>
<li>Fifty years later, now a king, Beowulf fights a <b>dragon</b> guarding a treasure: he kills it, but dies of his wounds. The poem ends with his funeral.</li>
</ul>
<p>The poem mixes <b>pagan values</b> (glory, revenge, fate: <i>wyrd</i>) and <b>Christian values</b> (good against evil, God as protector): a sign of the recent conversion of the Anglo-Saxons. Its deeper theme is <b>fame</b> as the only form of immortality, and the weight of old age and death.</p>
<p>The first line is «<i>Hwæt! We Gardena in geardagum...</i>», that is, «<b>Listen!</b> We have heard of the glory of the Spear-Danes' kings in days gone by». <b>J.R.R. Tolkien</b>, who was a professor of Old English at Oxford, gave a lecture in 1936 that changed the way Beowulf is read: the monsters are not a flaw, but the heart of the poem. More recently the Irish poet <b>Seamus Heaney</b> produced a celebrated translation (1999).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: History and Beowulf",
      questions: [
        { type: "mc", q: "Which battle of 1066 led to the Norman Conquest?", options: ["Hastings", "Stamford Bridge", "Agincourt", "Bosworth"], answer: 0, explain: "At Hastings, on 14 October 1066, William the Conqueror defeated Harold II." },
        { type: "tf", q: "Beowulf is set in England.", answer: false, explain: "It is set in Scandinavia (Denmark and the land of the Geats)." },
        { type: "text", q: "A kenning for «the sea» in Old English poetry is the «whale-___». Complete the word.", answer: ["road", "whale-road"], explain: "Whale-road: the road of the whale, a compound metaphor." },
        { type: "mc", q: "Why do we use <i>beef</i> for the meat and <i>cow</i> for the animal?", options: ["The meat names come from Norman French; the animal names from Old English", "Because of Latin", "Because of Scandinavian settlers", "It is a modern invention"], answer: 0, explain: "The Normans ate the meat (boeuf), while the Anglo-Saxon peasants raised the cow (cu)." }
      ]
    },
    {
      type: "text",
      title: "3. Middle English and Geoffrey Chaucer",
      html: `<p>After 1066 English does not disappear, but it loses prestige: for about three centuries the court speaks French, while the Church and the universities use Latin. In the 14th century, however, English returns to official documents and to literature. The language of this period is <b>Middle English</b>: it has lost almost all the inflectional endings of Old English, it has absorbed many French words and its pronunciation is different from today's (the <b>Great Vowel Shift</b>, a change in the long vowels, takes place between the 15th and the 17th century).</p>
<p><b>Geoffrey Chaucer</b> (c. 1343 – 1400) is the greatest writer of this period. He was born in <b>London</b>, the son of a wine merchant. He worked as a page, soldier, diplomat (he travelled to France and Italy, where he probably came to know the works of Dante, Petrarch and Boccaccio) and customs official. He served King Edward III, Richard II and John of Gaunt. He translated the <i>Roman de la Rose</i> and wrote <i>The Book of the Duchess</i>, <i>The Parliament of Fowls</i> and <i>Troilus and Criseyde</i>, a great love poem. Above all, he chose to write in <b>English</b> (the London dialect), helping to make it the national literary language. He died in 1400 and was the first poet to be buried in what became «Poets' Corner» in <b>Westminster Abbey</b>.</p>`
    },
    {
      type: "text",
      title: "4. The Canterbury Tales",
      html: `<p><b>The Canterbury Tales</b> (written roughly between 1387 and 1400 and left <b>unfinished</b>) is his most famous work. The frame is simple: in spring, at the <b>Tabard Inn</b> in Southwark (London), <b>29 pilgrims</b> meet on their way to the shrine of <b>St Thomas Becket</b> in <b>Canterbury</b> (the archbishop murdered in the cathedral in 1170). With them is the narrator, «Chaucer». The host, <b>Harry Bailly</b>, proposes a game: during the journey each pilgrim will tell <b>two tales on the way there and two on the way back</b>; whoever tells the best one will win a free supper. The plan called for about 120 tales; Chaucer wrote <b>24</b> (some of them incomplete).</p>
<p>The opening is a famous description of spring:</p>
<p><i>«Whan that Aprill with his shoures soote<br>The droghte of March hath perced to the roote...»</i><br>(«When April with its sweet showers has pierced the drought of March to the root...»)</p>
<p>The text is in <b>verse</b> (mostly <b>rhyming couplets of iambic pentameter</b>, that is, lines of five feet), with a few tales in prose. It was something new: a <b>human comedy</b> featuring all the social classes of the 14th century.</p>`
    },
    {
      type: "example",
      title: "Meet some pilgrims",
      html: `<p>In the <b>General Prologue</b> Chaucer describes each pilgrim with a few strokes, always with irony. Here are some of the characters (in modern English, with a short description):</p>
<ul>
<li><b>The Knight</b>: «a worthy man» who has fought in many crusades and is humble and courteous. He represents the ideal of <b>chivalry</b>.</li>
<li><b>The Miller</b>: big, strong, noisy; he wins wrestling matches and can break a door with his head. His tale is a rude and funny story.</li>
<li><b>The Wife of Bath</b>: a cheerful, independent woman who has had five husbands. She talks openly about marriage and what women want.</li>
<li><b>The Pardoner</b>: sells «pardons» and false relics; he is a <b>satire</b> of corrupt church officials.</li>
<li><b>The Prioress</b>: a nun who speaks French badly and cares about her manners more than about poverty.</li>
<li><b>The Clerk</b>: a thin, poor student of Oxford who loves books more than money.</li>
</ul>
<p>Chaucer never gives a direct judgement: he describes the facts and lets the reader work out the hidden flaw. This <b>irony</b> is his signature.</p>`
    },
    {
      type: "example",
      title: "Reading Chaucer: can you guess the words?",
      html: `<p>Middle English looks difficult, but often it is enough to say the words out loud. Try it with the description of the Knight: <i>«He loved chivalrie, / Trouthe and honour, fredom and curteisie.»</i> Can you recognise <i>chivalrie</i> (chivalry), <i>trouthe</i> (truth, loyalty), <i>honour</i>, <i>fredom</i> (freedom) and <i>curteisie</i> (courtesy)? Most of them are words of French origin, still alive in modern English and in the Romance languages. A good trick: pronounce the consonants as they are written and don't try to «drop» the final letters, which were still pronounced.</p>`
    },
    {
      type: "remember",
      title: "Why Chaucer matters",
      html: `<ul>
<li><b>Society in a snapshot</b>: knights, merchants, clergy, workers, women; almost the whole of 14th-century England on one road.</li>
<li><b>Genres</b>: romance, fabliau (comic and rude), sermon, saint's life, beast fable: the book is an anthology of medieval forms.</li>
<li><b>Language</b>: it helped make London English the standard.</li>
<li><b>Voice</b>: irony, humour and a distance from the narrator that makes readers think.</li>
<li>It is also an example of a <b>frame story</b>, like Boccaccio's <i>Decameron</i>: one frame contains many tales.</li>
</ul>`
    },
    {
      type: "svg",
      title: "The road to Canterbury",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfdf5"/>
<g font-family="sans-serif" font-size="14" text-anchor="middle">
<path d="M70 200 C170 120 250 240 340 160 S480 130 530 100" stroke="#a16207" stroke-width="8" fill="none" stroke-linecap="round"/>
<circle cx="70" cy="200" r="14" fill="#1d4ed8"/><text x="70" y="240" fill="#1e3a8a" font-weight="bold">Tabard Inn</text><text x="70" y="260" fill="#1e3a8a">Southwark, London</text>
<circle cx="530" cy="100" r="14" fill="#b91c1c"/><text x="530" y="75" fill="#7f1d1d" font-weight="bold">Canterbury</text><text x="530" y="140" fill="#7f1d1d">Becket's shrine</text>
<text x="300" y="40" fill="#0f172a" font-size="17" font-weight="bold">About 60 miles, 4 days on foot or horseback</text>
<text x="300" y="70" fill="#334155">Each pilgrim tells a tale to pass the time</text>
<rect x="190" y="215" width="220" height="50" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="300" y="237" fill="#78350f">Knight · Miller · Wife of Bath</text>
<text x="300" y="257" fill="#78350f">Pardoner · Prioress · Clerk...</text>
</g>
</svg>`,
      caption: "The framework of the Tales: a pilgrimage from London to Canterbury."
    },
    {
      type: "curiosity",
      title: "A rude comedy, a medieval joke",
      html: `<p>The <i>Canterbury Tales</i> also include some coarse stories: in <i>The Miller's Tale</i>, a young student tricks an old carpenter by telling him that a second Flood is coming, and persuades him to spend the night in a tub hung from the roof beams while the student visits his wife. The 14th-century audience laughed at jokes that today may seem irreverent. Chaucer knows that some readers will be shocked and, with irony, warns them in the Miller's Prologue: anyone who does not want to read such stories should «turn over the leef» (turn the page) and choose another tale.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to study the Middle Ages",
      intro: "If the English Middle Ages feel like a list of dates and names, try looking at them from other angles.",
      tabs: [
        {
          label: "🕰️ Timeline",
          html: "<p>The key dates, from 43 to 1476.</p>",
          widget: "timeline",
          options: { events: [
            { year: 43, label: "Roman invasion of Britain", icon: "🏛️" },
            { year: 449, label: "Anglo-Saxons arrive (traditional date)", icon: "⛵" },
            { year: 597, label: "St Augustine in Kent", icon: "⛪" },
            { year: 793, label: "Viking raid on Lindisfarne", icon: "🛡️" },
            { year: 1066, label: "Battle of Hastings", icon: "⚔️" },
            { year: 1215, label: "Magna Carta", icon: "📜" },
            { year: 1348, label: "Black Death", icon: "☠️" },
            { year: 1387, label: "Canterbury Tales begun (approx.)", icon: "🐴" },
            { year: 1476, label: "Caxton's printing press", icon: "📖" }
          ], unit: "years" }
        },
        {
          label: "🃏 Flashcards",
          html: "<p>Flip the cards to revise key words.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "Kenning", back: "A compound metaphor: whale-road = sea" },
            { front: "Caesura", back: "A pause in the middle of the verse" },
            { front: "Alliteration", back: "Repetition of an initial sound" },
            { front: "Frame story", back: "A story that contains other stories (Canterbury Tales)" },
            { front: "Satire", back: "Criticism of vices through humour" },
            { front: "Pilgrim", back: "A person who travels to a holy place" },
            { front: "Heroic couplet", back: "Two rhyming lines of iambic pentameter" }
          ] }
        },
        {
          label: "🔗 Match author and work",
          html: "<p>Match each work with what it is.</p>",
          widget: "match",
          options: { pairs: [
            ["Beowulf", "Anonymous Old English epic poem"],
            ["Canterbury Tales", "Frame story in Middle English verse"],
            ["Troilus and Criseyde", "Chaucer's long love poem"],
            ["Ecclesiastical History", "Bede, written in Latin (731)"],
            ["Domesday Book", "Survey of England ordered by William I (1086)"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: the Middle Ages in English literature",
      nodes: [
        { id: "ma", label: "Middle Ages", x: 50, y: 8, color: "#ef4444", html: "From the Anglo-Saxon settlement (5th c.) to the late 15th century.", why: "Each invasion left a layer on the language: Latin, Norse, French. For this reason English is a «mixed» language." },
        { id: "oe", label: "Old English", x: 14, y: 42, color: "#0ea5e9", html: "Poetry of heroes: alliteration and kennings. Beowulf.", why: "Poems were sung in the lord's hall: alliteration and fixed formulas helped the poet to remember and improvise." },
        { id: "norman", label: "Norman Conquest", x: 50, y: 42, color: "#22c55e", html: "1066: French becomes the language of power.", why: "William I replaced the English nobility with Norman lords; French words enter the vocabulary of law, food and fashion." },
        { id: "me", label: "Middle English", x: 86, y: 42, color: "#8b5cf6", html: "English returns to literature in the 14th century.", why: "After the Black Death and the Hundred Years' War, French loses prestige and English becomes a national language." },
        { id: "beowulf", label: "Beowulf", x: 28, y: 78, color: "#f59e0b", html: "Hero, monsters, fame and death.", why: "The poem reflects a world where a warrior's reputation is the only lasting thing, mixed with Christian ideas." },
        { id: "chaucer", label: "Chaucer", x: 72, y: 78, color: "#64748b", html: "Canterbury Tales: a portrait of English society.", why: "Chaucer is a public servant and traveller: he knows all social classes and European literature (Dante, Boccaccio), and writes in the language of London." }
      ],
      edges: [["ma", "oe", "begins with"], ["ma", "norman", "is changed by the"], ["norman", "me", "leads to"], ["oe", "beowulf", "gives us"], ["me", "chaucer", "gives us"], ["norman", "oe", "pushes aside"]]
    },
    {
      type: "quiz",
      title: "Final mini-quiz",
      questions: [
        { type: "order", q: "Put the events in chronological order.", items: ["Roman conquest of Britain", "Arrival of the Anglo-Saxons", "Battle of Hastings", "Caxton's printing press"], explain: "43 AD, 5th century, 1066, 1476." },
        { type: "mc", q: "Where do the pilgrims in the Canterbury Tales meet?", options: ["At the Tabard Inn", "In Canterbury Cathedral", "At Westminster", "In Oxford"], answer: 0, explain: "The Tabard Inn, in Southwark." }
      ]
    }
  ],
  glossary: [
    { t: "Old English", d: "The language of the Anglo-Saxons (c. 450-1100), very different from modern English." },
    { t: "Middle English", d: "English in the period c. 1100-1500, the language of Chaucer." },
    { t: "Alliteration", d: "Repetition of the same initial sound in words close to each other." },
    { t: "Kenning", d: "A compound metaphor typical of Anglo-Saxon poetry (whale-road)." },
    { t: "Epic poem", d: "A long narrative poem about the deeds of a hero." },
    { t: "Frame story", d: "An outer story that contains other stories." },
    { t: "Pilgrimage", d: "A religious journey to a holy place." },
    { t: "Satire", d: "Criticism of vices and faults through irony and humour." },
    { t: "Heroic couplet", d: "A pair of rhyming lines of iambic pentameter." },
    { t: "Norman Conquest", d: "The conquest of England by William of Normandy (1066)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which language was spoken at the English court after 1066?", options: ["Norman French", "Old English", "Latin", "Danish"], answer: 0, explain: "The Normans spoke French." },
      { type: "tf", q: "Beowulf is a poem written in Latin.", answer: false, explain: "Beowulf is in Old English." },
      { type: "mc", q: "Who is the main monster Beowulf defeats first?", options: ["Grendel", "The dragon", "The Wife of Bath", "Hrothgar"], answer: 0, explain: "Grendel terrorises the hall of Heorot; then Beowulf kills Grendel's mother and finally the dragon." },
      { type: "text", q: "Who wrote the Canterbury Tales? (surname)", answer: ["chaucer", "geoffrey chaucer"], explain: "Geoffrey Chaucer (c. 1343-1400)." },
      { type: "mc", q: "Why are the pilgrims travelling to Canterbury?", options: ["To visit the shrine of St Thomas Becket", "To meet the king", "To fight in a war", "To study at a university"], answer: 0, explain: "Becket was murdered in the cathedral in 1170." },
      { type: "mc", q: "Which character is a satire of corrupt church officials?", options: ["The Pardoner", "The Knight", "The Clerk", "The Plowman"], answer: 0, explain: "The Pardoner sold false pardons and relics." },
      { type: "tf", q: "Chaucer completed all 120 stories he planned.", answer: false, explain: "He wrote about 24; the work was left unfinished." },
      { type: "mc", q: "Which poetic form is typical of Old English verse?", options: ["Alliteration and a caesura", "Rhyming sonnets", "Blank verse", "Free verse"], answer: 0, explain: "The alliterative line was divided into two halves by a pause." },
      { type: "order", q: "Put the stages of the language in order.", items: ["Old English", "Norman French influence", "Middle English of Chaucer", "Modern English"], explain: "From the 5th to the 16th century." },
      { type: "text", q: "Complete Chaucer's first line: «Whan that Aprill with his shoures ___»", answer: ["soote"], explain: "«Soote» means sweet." }
    ]
  }
});
