TOPIC('en', {
  id: "p2-ita-aggettivi",
  title: "Qualifying adjectives",
  intro: "Un gatto (a cat). Un gatto <b>nero</b>, <b>piccolo</b> e <b>morbido</b> (a black, small and soft cat)! 🐈‍⬛ The words that describe what things are like are called <b>qualifying adjectives</b>: they fill what we say with colour.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "What is a qualifying adjective",
      html: `<p>The <b>qualifying adjective</b> is a word that tells us <b>what a person, an animal or a thing is like</b>.</p>
<p>It always stays <b>close to a noun</b> and adds a <b>quality</b> to it:</p>
<ul>
<li>una mela <b>rossa</b> 🍎 (colour: a red apple)</li>
<li>un pallone <b>rotondo</b> ⚽ (shape: a round ball)</li>
<li>un elefante <b>enorme</b> 🐘 (size: a huge elephant)</li>
<li>un amico <b>simpatico</b> 😄 (character: a nice friend)</li>
<li>un gelato <b>dolce</b> 🍦 (taste: a sweet ice cream)</li>
</ul>
<p>To find it, ask yourself: <b>com'è? (what is it like?)</b></p>`
    },
    {
      type: "svg",
      title: "With or without adjectives?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="20" width="270" height="260" rx="16" fill="#e5e7eb" stroke="#6b7280" stroke-width="3"/>
<rect x="310" y="20" width="270" height="260" rx="16" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
<rect x="95" y="100" width="120" height="90" fill="#9ca3af" stroke="#4b5563" stroke-width="3"/>
<polygon points="85,100 155,50 225,100" fill="#6b7280"/>
<rect x="140" y="140" width="30" height="50" fill="#4b5563"/>
<text x="155" y="240" font-size="26" text-anchor="middle" fill="#374151" font-weight="bold">una casa</text>
<rect x="385" y="110" width="120" height="80" fill="#f472b6" stroke="#9d174d" stroke-width="3"/>
<polygon points="370,110 445,45 520,110" fill="#dc2626"/>
<rect x="430" y="140" width="30" height="50" fill="#7c2d12"/>
<rect x="395" y="125" width="25" height="22" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<rect x="472" y="125" width="25" height="22" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<circle cx="540" cy="60" r="22" fill="#facc15"/>
<rect x="320" y="190" width="250" height="10" fill="#22c55e"/>
<text x="445" y="235" font-size="22" text-anchor="middle" fill="#9d174d" font-weight="bold">una casa <tspan fill="#db2777">rosa</tspan>,</text>
<text x="445" y="263" font-size="22" text-anchor="middle" fill="#9d174d" font-weight="bold"><tspan fill="#ca8a04">allegra</tspan> e <tspan fill="#2563eb">piccola</tspan></text>
</svg>`,
      caption: "Without adjectives the house (una casa) is grey and lifeless; with adjectives (pink, cheerful and small) we can really see it!"
    },
    {
      type: "widget",
      title: "Game: which quality does it describe?",
      widget: "classify",
      options: { groups: ["Colour 🎨", "Size 📏", "Character 😊", "Taste 👅"], items: [
        ["verde (green)", 0], ["giallo (yellow)", 0], ["azzurro (light blue)", 0],
        ["grande (big)", 1], ["minuscolo (tiny)", 1], ["alto (tall)", 1],
        ["gentile (kind)", 2], ["coraggioso (brave)", 2], ["timido (shy)", 2],
        ["salato (salty)", 3], ["dolce (sweet)", 3], ["amaro (bitter)", 3]
      ] },
      caption: "Each adjective describes a kind of quality. Put it in the right group."
    },
    {
      type: "quiz",
      title: "Mini-quiz: find the adjective",
      questions: [
        { type: "mc", q: "In «Il cielo azzurro» (the light-blue sky) the adjective is…", options: ["il", "cielo", "azzurro"], answer: 2, explain: "What is the sky like? Azzurro (light blue)." },
        { type: "mc", q: "Which word is an adjective?", options: ["corre", "veloce", "bicicletta"], answer: 1, explain: "Veloce (fast) tells what something is like." },
        { type: "tf", q: "The adjective answers the question «com'è?» (what is it like?).", answer: true, explain: "That's right: it describes a quality." }
      ]
    },
    {
      type: "text",
      title: "The adjective agrees with the noun",
      html: `<p>The adjective is a true friend of the noun: it <b>dresses like it</b>! If the noun is feminine or plural, the adjective changes too.</p>
<table>
<tr><th></th><th>Singular</th><th>Plural</th></tr>
<tr><td>Masculine</td><td>gatto ner<b>o</b></td><td>gatti ner<b>i</b></td></tr>
<tr><td>Feminine</td><td>gatta ner<b>a</b></td><td>gatte ner<b>e</b></td></tr>
</table>
<p>This is called <b>agreement</b>: noun and adjective have the same <b>gender</b> and the same <b>number</b>.</p>
<p>Some adjectives end in <b>-e</b> and have only two forms: un cane grand<b>e</b>, una casa grand<b>e</b>, cani grand<b>i</b>, case grand<b>i</b>.</p>`
    },
    {
      type: "text",
      title: "Opposites and «degree»",
      html: `<p>Many adjectives have an <b>opposite</b>: alto ↔ basso (tall ↔ short), caldo ↔ freddo (hot ↔ cold), felice ↔ triste (happy ↔ sad), pieno ↔ vuoto (full ↔ empty), veloce ↔ lento (fast ↔ slow) 🐇🐢.</p>
<p>We can also say a quality is <b>very, very strong</b> by adding <b>-issimo</b>: bello → <b>bellissimo</b>, buono → <b>buonissimo</b>, alta → <b>altissima</b>. 🌟</p>`
    },
    {
      type: "example",
      title: "Example: I describe my pet 🐶",
      html: `<p>Without adjectives: «Ho un cane. Ha il pelo e le orecchie.» (I have a dog. It has fur and ears.)</p>
<p>With adjectives: «Ho un cane <b>piccolo</b> e <b>vivace</b>. Ha il pelo <b>marrone</b> e <b>morbido</b> e le orecchie <b>lunghe</b>. È <b>buonissimo</b>!» (I have a small, lively dog. It has soft brown fur and long ears. It's super good!)</p>
<p>Now you can imagine it! Adjectives are like the <b>crayons</b> of words. 🖍️</p>`
    },
    {
      type: "example",
      title: "Example: guess who it is! 🕵️",
      html: `<p>«È <b>grande</b> e <b>grigio</b>. Ha le orecchie <b>enormi</b> e il naso <b>lunghissimo</b>.» (It's big and grey. It has huge ears and a very long nose.)</p>
<p>Who is it? An elephant! 🐘</p>
<p>«È <b>piccola</b>, <b>verde</b> e <b>saltellante</b>. Vive vicino allo stagno.» (It's small, green and hoppy. It lives near the pond.) A frog! 🐸</p>
<p>Now you try inventing a riddle for a classmate using only adjectives.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…?",
      html: `<p>In Italian, the position of the adjective can change the meaning! Un <b>uomo grande</b> is a tall, big man; un <b>grande uomo</b> is an important person who has done extraordinary things. 🦸</p>
<p>The same goes for «un <b>amico vecchio</b>» (an elderly friend) and «un <b>vecchio amico</b>» (a friend you've known for a long time).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…?",
      html: `<p>In <b>English</b> adjectives never change: <i>a red car</i> (una macchina rossa), <i>two red cars</i> (due macchine rosse). Always <i>red</i>! And they go <b>before</b> the noun. 🇬🇧</p>
<p>In Italian too there are «lazy» adjectives that never change: <b>blu</b>, <b>rosa</b>, <b>viola</b>. We say «un fiore rosa» and «due magliette rosa», «un mare blu» and «gli occhi blu»! 💙</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>The qualifying adjective tells <b>what a noun is like</b>.</li>
<li>It agrees with the noun in <b>gender</b> and <b>number</b>: gatta nera, gatti neri.</li>
<li>Many adjectives have an <b>opposite</b>.</li>
<li>With <b>-issimo</b> we say a quality is at its highest: bellissimo.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand adjectives",
      intro: "Here are other paths to discover and use adjectives.",
      tabs: [
        {
          label: "🖍️ The crayons",
          html: `<p>The <b>noun</b> is the pencil drawing, just the outlines. <b>Adjectives</b> are the <b>crayons</b>: they colour it in, add details, show whether it's big or small, happy or sad.</p>
<p>Try it: draw «un albero» (a tree). Then draw «un albero <b>altissimo</b>, <b>spoglio</b> e <b>storto</b>» (a very tall, bare and crooked tree). They are two completely different drawings!</p>`
        },
        {
          label: "👃 The five senses",
          html: `<p>Use the five senses like a magnifying glass 🔍 to find adjectives:</p>
<ul>
<li>👀 <b>Sight</b>: rosso, rotondo, lucido (red, round, shiny)</li>
<li>👂 <b>Hearing</b>: rumoroso, silenzioso, squillante (noisy, silent, ringing)</li>
<li>👃 <b>Smell</b>: profumato, puzzolente (fragrant, smelly)</li>
<li>👅 <b>Taste</b>: dolce, salato, aspro (sweet, salty, sour)</li>
<li>✋ <b>Touch</b>: morbido, ruvido, freddo (soft, rough, cold)</li>
</ul>
<p>Take an apple and find an adjective for each sense!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0fdf4"/>
<circle cx="300" cy="115" r="60" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>
<rect x="296" y="40" width="8" height="25" fill="#78350f"/>
<path d="M304 50 Q330 30 345 50 Q325 60 304 55 Z" fill="#22c55e"/>
<g font-size="20" font-weight="bold">
<text x="40" y="50" fill="#1d4ed8">👀 rossa</text>
<text x="40" y="120" fill="#7c3aed">✋ liscia</text>
<text x="40" y="190" fill="#b45309">👃 profumata</text>
<text x="420" y="60" fill="#be185d">👅 dolce</text>
<text x="420" y="150" fill="#0f766e">👂 croccante</text>
</g>
</svg>`
        },
        {
          label: "🔗 Opposites",
          html: `<p>Match each adjective to its opposite.</p>`,
          widget: "match",
          options: { pairs: [
            ["alto (tall)", "basso (short)"],
            ["caldo (hot)", "freddo (cold)"],
            ["veloce (fast)", "lento (slow)"],
            ["felice (happy)", "triste (sad)"],
            ["pieno (full)", "vuoto (empty)"],
            ["pulito (clean)", "sporco (dirty)"]
          ] }
        },
        {
          label: "🇬🇧 In English",
          html: `<p>Want a trick to remember agreement? Compare with English, where the adjective never changes:</p>
<ul>
<li><i>a <b>big</b> dog</i> → un cane grand<b>e</b></li>
<li><i>two <b>big</b> dogs</i> → due cani grand<b>i</b></li>
<li><i>a <b>black</b> cat</i> → un gatto ner<b>o</b> / una gatta ner<b>a</b></li>
</ul>
<p>In Italian the adjective is more «polite»: it always dresses like the noun it goes with. 🤝</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of adjectives",
      nodes: [
        { id: "agg", label: "Qualifying adjective", x: 50, y: 8, color: "#2563eb", html: "Word that describes a quality of the noun.", why: "«Adjective» comes from the Latin <i>adiectivum</i>, «added»: it's a word added to the noun. «Qualifying» because it shows a quality." },
        { id: "nome", label: "Noun", x: 18, y: 30, color: "#16a34a", html: "The word the adjective leans on.", why: "The adjective can't stand on its own: «red» what? It needs a noun to describe." },
        { id: "qualita", label: "Quality", x: 82, y: 30, color: "#f59e0b", html: "Colour, shape, size, character, taste…", why: "We discover qualities with our five senses and by watching how people and things behave." },
        { id: "concordanza", label: "Agreement", x: 30, y: 56, color: "#dc2626", html: "Adjective and noun have the same gender and number: gatte nere.", why: "It's an inheritance from Latin, where noun and adjective always agreed. It helps us understand who is being described, even when the words are far apart." },
        { id: "genere", label: "Gender and number", x: 10, y: 80, color: "#a855f7", html: "Masculine/feminine, singular/plural: nero, nera, neri, nere.", why: "Adjectives ending in -o have 4 forms, those ending in -e only 2 (grande, grandi): it depends on what they were like in Latin." },
        { id: "contrari", label: "Opposites", x: 60, y: 56, color: "#0ea5e9", html: "Pairs of opposite adjectives: alto/basso.", why: "Our brain understands a quality better by comparing it with its opposite: «hot» makes sense because «cold» exists." },
        { id: "grado", label: "Degree (-issimo)", x: 85, y: 56, color: "#14b8a6", html: "bello → bellissimo: the quality at its highest.", why: "The suffix -issimo comes from the Latin <i>-issimus</i> (<i>altissimus</i>). It's called the absolute superlative." },
        { id: "posizione", label: "Before or after the noun", x: 50, y: 84, color: "#64748b", html: "Usually after the noun (casa rossa), sometimes before (bella giornata).", why: "Before the noun the adjective often has a more emotional or figurative meaning: un grande uomo ≠ un uomo grande." }
      ],
      edges: [
        ["agg", "nome", "describes"],
        ["agg", "qualita", "shows"],
        ["agg", "concordanza", "follows"],
        ["concordanza", "genere", "in"],
        ["agg", "contrari", "has"],
        ["agg", "grado", "has a"],
        ["agg", "posizione", "changes with"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: agreement",
      questions: [
        { type: "mc", q: "Le mele sono… (The apples are… red)", options: ["rosso", "rosse", "rossi"], answer: 1, explain: "Mele is feminine plural: rosse." },
        { type: "mc", q: "The opposite of «pieno» (full) is…", options: ["vuoto", "grande", "pesante"], answer: 0, explain: "Pieno ↔ vuoto (full ↔ empty)." },
        { type: "tf", q: "«I bambini allegri» (the cheerful children) is correct.", answer: true, explain: "Bambini is masculine plural and so is allegri." }
      ]
    }
  ],
  glossary: [
    { t: "Qualifying adjective", d: "Word that tells what a noun is like." },
    { t: "Quality", d: "A feature: colour, shape, size, character…" },
    { t: "Agreement", d: "Noun and adjective have the same gender and number." },
    { t: "Opposite", d: "Adjective with the opposite meaning: alto/basso." },
    { t: "Superlative", d: "Form that shows a quality at its highest: bellissimo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which word is a qualifying adjective?", options: ["mangiare", "morbido", "cuscino"], answer: 1, explain: "Morbido (soft) tells what a thing is like." },
      { type: "mc", q: "In «La giraffa alta mangia» (the tall giraffe eats) the adjective is…", options: ["giraffa", "alta", "mangia"], answer: 1, explain: "What is the giraffe like? Alta (tall)." },
      { type: "mc", q: "I fiori… (The flowers… fragrant)", options: ["profumato", "profumata", "profumati"], answer: 2, explain: "Fiori is masculine plural: profumati." },
      { type: "mc", q: "La torta è… (The cake is… good)", options: ["buono", "buona", "buoni"], answer: 1, explain: "Torta is feminine singular: buona." },
      { type: "tf", q: "«Una casa grande» and «due case grandi» are both correct.", answer: true, explain: "Grande has only two forms: grande (singular) and grandi (plural)." },
      { type: "tf", q: "«Dolce» describes a colour.", answer: false, explain: "Dolce (sweet) describes a taste." },
      { type: "text", q: "Write the Italian opposite of «caldo» (hot).", answer: ["freddo"], explain: "Caldo ↔ freddo." },
      { type: "text", q: "Write the superlative of «bello» (with -issimo).", answer: ["bellissimo"], explain: "Bello → bellissimo." },
      { type: "mc", q: "Which sentence has more adjectives?", options: ["Il gatto dorme.", "Il gatto grigio e grasso dorme.", "Il gatto dorme sul letto."], answer: 1, explain: "Grigio e grasso (grey and fat): two adjectives." },
      { type: "mc", q: "Le scarpe… (The shoes… new)", options: ["nuovo", "nuove", "nuovi"], answer: 1, explain: "Scarpe is feminine plural: nuove." },
      { type: "order", q: "Put in order from smallest to biggest.", items: ["minuscolo", "piccolo", "grande", "enorme"], explain: "Minuscolo < piccolo < grande < enorme (tiny < small < big < huge)." }
    ]
  }
});
