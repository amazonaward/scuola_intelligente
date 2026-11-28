TOPIC('en', {
  id: "l2-ita-testo-poetico",
  title: "The poetic text",
  intro: "You don't read a poem the way you read a newspaper article: it has a <b>rhythm</b>, a <b>music</b> and a form that speak as loudly as the words. In this lesson you will learn to “take apart” a poem: count syllables, recognise stresses, identify rhymes and stanzas, and tell a sonnet, a canzone, an ode and free verse apart. With these tools every poem, from Dante to Ungaretti, becomes easier to understand and more enjoyable to read.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "The line and its syllables",
      html: `<p>A poem is written in <b>lines</b> (verses): lines that break according to a rhythm chosen by the poet, not because the page has run out of space. The traditional Italian line is measured in <b>metrical syllables</b>, and its name depends on how many it has.</p>
<table>
<tr><th>Line</th><th>Syllables</th><th>Main stress on the</th></tr>
<tr><td>Quinario</td><td>5</td><td>4th</td></tr>
<tr><td>Senario</td><td>6</td><td>5th</td></tr>
<tr><td>Settenario</td><td>7</td><td>6th</td></tr>
<tr><td>Ottonario</td><td>8</td><td>7th</td></tr>
<tr><td>Novenario</td><td>9</td><td>8th</td></tr>
<tr><td>Decasillabo</td><td>10</td><td>9th</td></tr>
<tr><td>Endecasillabo (hendecasyllable)</td><td>11</td><td>10th (plus internal stresses: 4th and 7th, or 6th)</td></tr>
</table>
<p>The two most important lines in the Italian tradition are the <b>hendecasyllable</b> (<i>endecasillabo</i>, 11 syllables, the line of the <i>Divine Comedy</i>) and the <b>settenario</b> (7 syllables). They are often mixed in the same poem.</p>`
    },
    {
      type: "remember",
      title: "How to count metrical syllables",
      html: `<p>Syllables are counted “as they sound”, following a few rules:</p>
<ul>
<li><b>Synaloepha</b> (<i>sinalefe</i>): when a word ends in a vowel and the next one begins with a vowel, the two syllables merge into one. <i>«Tanto gentile e tanto onesta pare»</i> (“So gentle and so honest she appears”, Dante): <i>gentile e</i> counts as one syllable, and so does <i>tanto onesta</i>.</li>
<li><b>Dialoepha</b> (<i>dialefe</i>): the two vowels stay separate (an exception, often for expressive effect).</li>
<li><b>Synaeresis</b> (<i>sineresi</i>): two neighbouring vowels in the same word count as one syllable (e.g. <i>mia</i> as one syllable instead of two).</li>
<li><b>Diaeresis</b> (<i>dieresi</i>): two vowels that are normally pronounced together are split (e.g. <i>pa-ùra</i>).</li>
<li><b>Last word</b>: if it is <b>piana</b> (stress on the second-to-last syllable, the most common case) you count the real syllables; if it is <b>tronca</b> (stress on the last syllable) you <b>add</b> one syllable; if it is <b>sdrucciola</b> (stress on the third-to-last) you <b>take away</b> one.</li>
</ul>
<p>The last fixed stress of the line is what gives it its name: the hendecasyllable always has its stress on the <b>tenth syllable</b>.</p>`
    },
    {
      type: "example",
      title: "Let's count a line: «Tanto gentile e tanto onesta pare»",
      html: `<p>The line (Dante, <i>Vita nova</i>) is scanned like this:</p>
<p>Syllables: <i>Tan(1)-to(2)-gen(3)-ti(4)-le+e(5)-tan(6)-to+o(7)-ne(8)-sta(9)-pa(10)-re(11)</i>. The two synaloephas (<i>gentile e</i>, <i>tanto onesta</i>) each turn two syllables into one.</p>
<p>Total: <b>11 syllables</b>. The last word, <i>pare</i>, is piana, and the stress falls on the tenth syllable (<i>pa</i>): it is a <b>hendecasyllable</b>. Another example: <i>«Sempre caro mi fu quest'ermo colle»</i> (“This lonely hill was always dear to me”, Leopardi, <i>L'infinito</i>): <i>Sem-pre-ca-ro-mi-fu-ques-ter-mo-col-le</i> = 11 syllables. For practice, try <i>«Silvia, rimembri ancora»</i> (“Silvia, do you still remember”, <i>A Silvia</i>): <i>Sil-via-ri-mem-brian-co-ra</i>, with a synaloepha between <i>rimembri</i> and <i>ancora</i>: that makes 7 syllables, a <b>settenario</b>.</p>`
    },
    {
      type: "svg",
      title: "Scanning a hendecasyllable",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="300" y="34" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">Sempre caro mi fu quest'ermo colle</text>
<g font-size="16" fill="#0f172a" text-anchor="middle">
<rect x="20" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="43" y="110">Sem</text>
<rect x="72" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="95" y="110">pre</text>
<rect x="124" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="147" y="110">ca</text>
<rect x="176" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="199" y="110">ro</text>
<rect x="228" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="251" y="110">mi</text>
<rect x="280" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="303" y="110">fu</text>
<rect x="332" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="355" y="110">ques</text>
<rect x="384" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="407" y="110">ter</text>
<rect x="436" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="459" y="110">mo</text>
<rect x="488" y="80" width="46" height="46" rx="8" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/><text x="511" y="110" font-weight="bold">col</text>
<rect x="540" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="563" y="110">le</text>
</g>
<g font-size="14" fill="#475569" text-anchor="middle">
<text x="43" y="150">1</text><text x="95" y="150">2</text><text x="147" y="150">3</text><text x="199" y="150">4</text><text x="251" y="150">5</text><text x="303" y="150">6</text><text x="355" y="150">7</text><text x="407" y="150">8</text><text x="459" y="150">9</text><text x="511" y="150">10</text><text x="563" y="150">11</text>
</g>
<text x="300" y="196" font-size="15" text-anchor="middle" fill="#1e293b">quest'ermo: elision merges two words (ques-ter-mo)</text>
<text x="300" y="224" font-size="15" text-anchor="middle" fill="#b91c1c">The strong stress falls on the 10th syllable (col): a hendecasyllable.</text>
<text x="300" y="262" font-size="15" text-anchor="middle" fill="#334155">There are 11 syllables: the last word (colle) is piana.</text>
</g>
</svg>`,
      caption: "Each square is a metrical syllable. The stress on the tenth syllable is the distinctive mark of the hendecasyllable."
    },
    {
      type: "text",
      title: "Rhyme and rhyme schemes",
      html: `<p><b>Rhyme</b> is the identity of sounds from the stressed vowel to the end of two words (<i>vita – smarrita</i>). Rhyming words close the lines and create the music of the text.</p>
<ul>
<li><b>Assonance</b>: only the vowels after the stress match (<i>cuore – morte</i>).</li>
<li><b>Consonance</b>: only the consonants match (<i>tetto – tutto</i>).</li>
<li><b>Internal rhyme</b>: one of the rhyming words is inside the line.</li>
</ul>
<p>Letters (A, B, C…) are used to describe the rhyme scheme:</p>
<table>
<tr><th>Scheme</th><th>Lines</th><th>Name</th></tr>
<tr><td>AABB</td><td>1-2, 3-4</td><td>couplet rhyme (<i>rima baciata</i>)</td></tr>
<tr><td>ABAB</td><td>1-3, 2-4</td><td>alternate rhyme (<i>rima alternata</i>)</td></tr>
<tr><td>ABBA</td><td>1-4, 2-3</td><td>enclosed rhyme (<i>rima incrociata</i> or <i>chiusa</i>)</td></tr>
<tr><td>ABA BCB CDC</td><td>the middle line rhymes with the first and third lines of the next tercet</td><td>chain rhyme (<i>rima incatenata</i>, Dante's terza rima)</td></tr>
<tr><td>ABC ABC</td><td>the rhymes repeat in the same order</td><td>repeated rhyme (<i>rima ripetuta</i>)</td></tr>
</table>
<p>Lines that do not rhyme are called <b>blank verse</b> (<i>versi sciolti</i>): Leopardi's <i>L'infinito</i> is written in unrhymed hendecasyllables.</p>`
    },
    {
      type: "example",
      title: "The scheme of Dante's tercet",
      html: `<p>Let's look at the opening of the <i>Comedy</i>:</p>
<p><i>Nel mezzo del cammin di nostra <b>vita</b></i> (A)<br>
<i>mi ritrovai per una selva <b>oscura</b>,</i> (B)<br>
<i>ché la diritta via era smar<b>rita</b>.</i> (A)</p>
<p><i>Ahi quanto a dir qual era è cosa <b>dura</b></i> (B)<br>
<i>esta selva selvaggia e aspra e <b>forte</b></i> (C)<br>
<i>che nel pensier rinova la pa<b>ura</b>!</i> (B)</p>
<p>(“Midway upon the journey of our life / I found myself within a forest dark, / for the straightforward pathway had been lost. / Ah me! how hard a thing it is to say / what was this forest savage, rough and stern, / which in the very thought renews the fear!”)</p>
<p>The scheme is <b>ABA BCB</b>: the middle rhyme of the first tercet (<i>oscura</i>) becomes the outer rhyme of the second (<i>dura, paura</i>), and the new middle rhyme (<i>forte</i>) will come back in the following tercet. Dante invented it for the <i>Comedy</i> and it is called the chained <b>tercet</b> (<i>terzina incatenata</i>, or terza rima): the lines seem hooked onto each other like links in a chain.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: metre and rhyme",
      questions: [
        { type: "mc", q: "Where does the main stress of the hendecasyllable fall?", options: ["On the 10th syllable", "On the 7th", "On the 11th", "On the 5th"], answer: 0, explain: "The hendecasyllable always has its strong stress on the tenth syllable." },
        { type: "mc", q: "What is the AABB rhyme scheme called?", options: ["Couplet rhyme (baciata)", "Alternate rhyme", "Enclosed rhyme", "Chain rhyme"], answer: 0, explain: "In couplet rhyme the lines rhyme in pairs." },
        { type: "tf", q: "A line ending with a sdrucciola word (stress on the third-to-last syllable) has one syllable less in the metrical count.", answer: true, explain: "If the final word is sdrucciola you take away one syllable; if it is tronca you add one." }
      ]
    },
    {
      type: "text",
      title: "Stanzas and poetic forms",
      html: `<p>Lines are grouped into <b>stanzas</b>, groups with a fixed number of lines:</p>
<ul>
<li><b>Couplet</b> (<i>distico</i>): 2 lines. <b>Tercet</b> (<i>terzina</i>): 3. <b>Quatrain</b> (<i>quartina</i>): 4. <b>Sestet</b> (<i>sestina</i>): 6. <b>Ottava</b> (octave): 8 (usually hendecasyllables rhyming ABABABCC, as in Ariosto's <i>Orlando furioso</i>).</li>
</ul>
<p>Some combinations of stanzas form <b>poems</b> with a specific name:</p>
<ul>
<li><b>Sonnet</b>: 14 hendecasyllables in two quatrains and two tercets (typical scheme ABAB ABAB CDC DCD, but there are variants). It was invented in the 13th century by the Sicilian poet <b>Giacomo da Lentini</b> and is the form of Petrarch, Foscolo and Montale. Examples: Foscolo's <i>A Zacinto</i> and <i>Alla sera</i>.</li>
<li><b>Canzone</b>: a long, solemn form with stanzas of identical structure; Petrarch uses it in the <i>Canzoniere</i>.</li>
<li><b>Ballata</b>: created to be sung and danced, with a refrain.</li>
<li><b>Madrigal</b>: a short poem about love, often set to music.</li>
<li><b>Ode</b>: a solemn poem in honour of a person or a theme (Manzoni, <i>Il cinque maggio</i>; Parini; Carducci).</li>
<li><b>Long poem</b> (<i>poema</i>): a long text in verse, divided into cantos (<i>Divine Comedy</i>, <i>Orlando furioso</i>).</li>
</ul>`
    },
    {
      type: "text",
      title: "Free verse and 20th-century poetry",
      html: `<p>From the early 20th century many poets abandoned metre and rhyme: <b>free verse</b> was born, in which the length and layout of the lines depend on meaning. A line can be very short, even a single word. Here are two famous examples:</p>
<p><i>Mi illumino / d'immenso</i> (“I light myself up / with immensity”) — <b>Giuseppe Ungaretti</b>, <i>Mattina</i> (1917), which expresses an emotion of great openness in just two lines.</p>
<p><i>Si sta come / d'autunno / sugli alberi / le foglie</i> (“We are like / in autumn / on the trees / the leaves”) — <b>Ungaretti</b>, <i>Soldati</i> (1918): the lines are short because the tone is one of suspension and fragility.</p>
<p>Quasimodo also wrote in free verse: <i>«Ognuno sta solo sul cuor della terra / trafitto da un raggio di sole: / ed è subito sera»</i> (“Everyone stands alone on the heart of the earth / pierced by a ray of sunlight: / and suddenly it's evening”, <i>Ed è subito sera</i>, 1930). The poet does not give up music, but builds it with rhythm, pauses and silences on the white page.</p>`
    },
    {
      type: "remember",
      title: "Enjambment, caesura and pause",
      html: `<p><b>Punctuation</b> and the end of the line do not always coincide. When a sentence runs on into the next line we have an <b>enjambment</b> (“straddling”): <i>«ma sedendo e mirando, interminati / spazi di là da quella…»</i> (“but sitting and gazing, endless / spaces beyond that…”, Leopardi). Enjambment slows down the reading, highlights a word and creates suspense. A <b>caesura</b>, instead, is a pause inside the line. When lines are long, the poet uses the caesura to breathe.</p>`
    },
    {
      type: "curiosity",
      title: "Sonnets and innovations",
      html: `<p>The sonnet was born around 1230 at the court of Frederick II and was used for centuries all over Europe (Shakespeare wrote 154 sonnets, with a different scheme from the Italian one). And yet in the 20th century it is still alive: Montale and Ungaretti wrote sonnets, and some singer-songwriters imitate its structure: fourteen lines are a good container for a complete idea.</p>`
    },
    {
      type: "curiosity",
      title: "Why does poetry have rhythm?",
      html: `<p>Before writing existed, poetry was memorised and sung: <b>rhythm</b> and <b>rhyme</b> helped people remember long texts (think of the <i>Iliad</i>). Even today rappers use metre and rhyme to fix their lines: “metre” is not just a school rule, but a human invention to make words reach our memory and our ears.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand metre",
      intro: "If counting syllables feels abstract, try to hear the rhythm.",
      tabs: [
        {
          label: "🥁 Beat the rhythm",
          html: "<p>Read the line aloud, clapping your hand on every syllable and <b>harder</b> on the stressed ones. After a while you will feel that the tenth syllable of the hendecasyllable is like a “final beat”; in the settenario the beat is on the sixth. It is a way to <b>feel</b> before you calculate.</p>"
        },
        {
          label: "🎵 Like a song",
          html: "<p>A poem is like song lyrics: the <b>lines</b> are the bars, the <b>rhymes</b> are like a chorus that keeps coming back, the <b>stanzas</b> are the blocks of the song. If you can imagine the melody, the structure is easier. Rap, pop and traditional poetry share many tricks: rhyme, repetition, rhythm.</p>"
        },
        {
          label: "🔎 Colour-coded rhyme scheme",
          html: "<p>This is how you can “see” the chained tercet: each colour is a rhyme. The middle line of the first tercet (red) comes back as the first and third lines of the second.</p>",
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fffbeb"/><g font-family="sans-serif" font-size="16"><rect x="40" y="30" width="520" height="34" rx="8" fill="#bfdbfe"/><text x="60" y="53" fill="#1e3a8a">Nel mezzo del cammin di nostra vita  (A)</text><rect x="40" y="70" width="520" height="34" rx="8" fill="#fecaca"/><text x="60" y="93" fill="#7f1d1d">mi ritrovai per una selva oscura,  (B)</text><rect x="40" y="110" width="520" height="34" rx="8" fill="#bfdbfe"/><text x="60" y="133" fill="#1e3a8a">ché la diritta via era smarrita.  (A)</text><rect x="40" y="165" width="520" height="34" rx="8" fill="#fecaca"/><text x="60" y="188" fill="#7f1d1d">Ahi quanto a dir qual era è cosa dura  (B)</text><rect x="40" y="205" width="520" height="34" rx="8" fill="#bbf7d0"/><text x="60" y="228" fill="#14532d">esta selva selvaggia e aspra e forte  (C)</text><rect x="40" y="245" width="520" height="34" rx="8" fill="#fecaca"/><text x="60" y="268" fill="#7f1d1d">che nel pensier rinova la paura!  (B)</text></g></svg>`
        },
        {
          label: "🕰️ Poetic forms over time",
          html: "<p>Some key dates.</p>",
          widget: "timeline",
          options: { events: [
            { year: 1224, label: "Canticle of the Creatures", icon: "🌞" },
            { year: 1230, label: "Sonnet (Giacomo da Lentini)", icon: "✒️" },
            { year: 1304, label: "Dante begins the Comedy (c.)", icon: "📜" },
            { year: 1516, label: "Orlando furioso", icon: "⚔️" },
            { year: 1807, label: "Foscolo, Dei Sepolcri", icon: "🕯️" },
            { year: 1917, label: "Ungaretti, Mattina", icon: "🌅" }
          ], unit: "years" }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the poetic text",
      nodes: [
        { id: "poesia", label: "Poetic text", x: 50, y: 8, color: "#ef4444", html: "A text in verse, in which sound and meaning are closely intertwined.", why: "In poetry form is not decoration: rhythm and sound contribute to meaning, just as in a song." },
        { id: "metro", label: "Metre", x: 12, y: 42, color: "#0ea5e9", html: "The measure of the lines: syllables and stresses (hendecasyllable, settenario, quinario...).", why: "Italian metre is based on the number of syllables and on stress: a system born in medieval poetry and consolidated by Dante and Petrarch." },
        { id: "rima", label: "Rhyme", x: 50, y: 42, color: "#22c55e", html: "Identity of final sounds: couplet, alternate, enclosed, chain rhyme.", why: "It helped people learn texts by heart when they were recited aloud, and it creates a recognisable structure." },
        { id: "strofe", label: "Stanzas and forms", x: 88, y: 42, color: "#8b5cf6", html: "Couplet, tercet, quatrain, ottava; sonnet, canzone, ballata, ode.", why: "Fixed forms organise thought: a sonnet, for example, develops a theme in the quatrains and concludes it in the tercets." },
        { id: "libero", label: "Free verse", x: 28, y: 78, color: "#f59e0b", html: "Lines of varying length, often without rhyme, born in the 20th century.", why: "After the collapse of certainties at the start of the century, poets rejected traditional forms to express a more fragmented experience." },
        { id: "figure", label: "Sound and figures", x: 72, y: 78, color: "#64748b", html: "Alliteration, enjambment, repetition: effects that strengthen the meaning.", why: "Poetry packs many meanings into few words: sounds and pauses are part of the message." }
      ],
      edges: [["poesia", "metro", "is measured by"], ["poesia", "rima", "is enriched by"], ["poesia", "strofe", "is organised into"], ["metro", "libero", "is overcome by"], ["rima", "figure", "is a form of"], ["strofe", "libero", "is overcome by"]]
    },
    {
      type: "quiz",
      title: "Final mini-quiz",
      questions: [
        { type: "order", q: "Put these stanzas in order from shortest to longest.", items: ["Couplet", "Tercet", "Quatrain", "Ottava"], explain: "Couplet (2 lines), tercet (3), quatrain (4), ottava (8)." },
        { type: "text", q: "What is it called when a sentence runs on into the next line?", answer: ["enjambment", "enjambement", "run-on line", "run on line", "inarcatura"], explain: "Enjambment splits the sentence across two lines, creating emphasis." },
        { type: "mc", q: "How many lines does a sonnet have?", options: ["14", "12", "16", "10"], answer: 0, explain: "Two quatrains and two tercets, all hendecasyllables." }
      ]
    }
  ],
  glossary: [
    { t: "Line (verse)", d: "A line of a poem, whose length depends on the number of syllables and on the stresses." },
    { t: "Hendecasyllable (endecasillabo)", d: "A line of 11 syllables with the stress on the 10th; it is the main line of Italian poetry." },
    { t: "Synaloepha (sinalefe)", d: "The merging into a single syllable of the final vowel of a word with the initial vowel of the next one." },
    { t: "Rhyme", d: "Identity of sound from the last stressed vowel onwards between two words at the end of lines." },
    { t: "Stanza", d: "A group of lines with a fixed number and arrangement (couplet, tercet, quatrain...)." },
    { t: "Sonnet", d: "A poem of 14 hendecasyllables in two quatrains and two tercets." },
    { t: "Enjambment", d: "The sentence runs on into the next line, breaking the syntactic unity of the line." },
    { t: "Free verse", d: "Verse without fixed metre or rhyme, typical of 20th-century poetry." },
    { t: "Tercet (terzina)", d: "A stanza of three lines; Dante's tercet has the chain rhyme ABA BCB." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "How many syllables does a hendecasyllable ending in a piana word have?", options: ["11", "10", "9", "12"], answer: 0, explain: "The hendecasyllable has 11 metrical syllables and the stress on the 10th." },
      { type: "tf", q: "If the final word of the line is tronca (stress on the last syllable), you add one syllable to the count.", answer: true, explain: "In a tronco line you count one extra syllable, in a sdrucciolo line one less." },
      { type: "mc", q: "What is the scheme of Dante's tercet?", options: ["ABA BCB CDC", "ABB ACC", "AAB CCB", "ABC ABC"], answer: 0, explain: "It is chain rhyme (terza rima), invented by Dante for the Comedy." },
      { type: "text", q: "What do we call the merging of the final vowel of a word with the initial vowel of the next one?", answer: ["synaloepha", "synalepha", "synaloephe", "synalephe", "sinalefe"], explain: "Synaloepha reduces two syllables to one in the metrical count." },
      { type: "mc", q: "Apart from the sonnet, what is the most common metrical form in Petrarch's Canzoniere?", options: ["The canzone", "The barbarian ode", "The long poem in ottava rima", "Free verse"], answer: 0, explain: "The Canzoniere collects 366 poems, mostly sonnets and canzoni." },
      { type: "mc", q: "What are versi sciolti (blank verse)?", options: ["Lines without rhyme", "Lines with many rhymes", "Sung lines", "Nine-syllable lines"], answer: 0, explain: "Leopardi's L'infinito is in unrhymed hendecasyllables." },
      { type: "tf", q: "Ungaretti wrote only in rhymed hendecasyllables.", answer: false, explain: "Ungaretti used free verse, with lines sometimes made of a single word." },
      { type: "order", q: "Put the stanzas in order of increasing number of lines.", items: ["Couplet", "Tercet", "Quatrain", "Sestet"], explain: "2, 3, 4 and 6 lines respectively." },
      { type: "mc", q: "Who invented the sonnet?", options: ["Giacomo da Lentini", "Dante Alighieri", "Francesco Petrarca", "Ugo Foscolo"], answer: 0, explain: "The notary Giacomo da Lentini of the Sicilian School is considered the inventor of the sonnet." },
      { type: "mc", q: "What is an enjambment?", options: ["A sentence that continues into the next line", "An internal rhyme", "A line without stress", "A two-line stanza"], answer: 0, explain: "It breaks the unity between line and syntax, highlighting words." }
    ]
  }
});
