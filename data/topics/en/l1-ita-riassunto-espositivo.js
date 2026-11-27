TOPIC('en', {
  id: "l1-ita-riassunto-espositivo",
  title: "Summary, paraphrase and expository writing",
  intro: "Studying almost always means <b>understanding a text and giving it back</b> in other words: summarising it, paraphrasing it, explaining it to someone who has not read it. These are three different skills, used every day in upper secondary school, from history to physics. In this lesson we learn to <b>read in depth</b>, to <b>tell apart</b> summary, paraphrase and commentary, and to <b>write an expository text</b> that is clear and well organised.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Understand before you write",
      html: `<p>You cannot summarise what you have not understood. Reading for study is not reading «with your eyes closed»: it is done in <b>three steps</b>.</p>
<ol>
<li><b>Skim reading</b>: read the title, subheadings, the first and last sentence of each paragraph, any images. Ask yourself: what is it about? How is it organised?</li>
<li><b>Close reading</b>: read everything with a pencil in your hand. Look for the <b>key words</b>, underline sparingly (at most one sentence in three), write a short heading in the margin for each paragraph, look up every unknown word in the dictionary.</li>
<li><b>Checking reread</b>: make sure you have followed the thread of the argument. If you cannot explain it out loud, repeat the step.</li>
</ol>
<p>In every paragraph of a well-written text there is usually a <b>main idea</b> (often in the first or last sentence) and <b>supporting ideas</b> (examples, data, details) that back it up. Learning to tell them apart is the key to everything.</p>`
    },
    {
      type: "text",
      title: "Summary, paraphrase, commentary: three different things",
      html: `<table>
<tr><th></th><th>Summary</th><th>Paraphrase</th><th>Commentary</th></tr>
<tr><td>Aim</td><td>to reduce the text to its essentials</td><td>to rewrite it more clearly, without shortening it</td><td>to interpret and evaluate</td></tr>
<tr><td>Length</td><td>shorter (about 1/3 or 1/4)</td><td>similar to the original (or longer)</td><td>free</td></tr>
<tr><td>Words</td><td>a synthesis in your own words</td><td>replaces difficult words and syntax</td><td>adds opinions and connections</td></tr>
<tr><td>Used for</td><td>studying, revising</td><td>poetry and old texts</td><td>text analysis, essays</td></tr>
<tr><td>Personal opinions</td><td>no</td><td>no</td><td>yes</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Which operation is it?",
      widget: "classify",
      options: { groups: ["Summary", "Paraphrase", "Commentary"], items: [
        ["I rewrite a poem by Leopardi in simple prose, line by line", 1],
        ["I reduce a 3-page chapter to 10 lines", 0],
        ["I explain why I think this story is still relevant today", 2],
        ["I remove the examples and keep only the main concepts", 0],
        ["I replace 'ermo colle' with 'colle solitario' (lonely hill)", 1],
        ["I link the text to other authors and assess its style", 2]
      ] },
      caption: "Match each action with the type of writing."
    },
    {
      type: "text",
      title: "How to write a good summary",
      html: `<ol>
<li><b>Divide the text into sequences</b> (parts with uniform content) and give each one a short heading.</li>
<li><b>For each sequence, identify the main idea</b>; drop examples, repetitions, details, unnecessary adjectives, reported dialogue.</li>
<li><b>Write in your own words</b>, without copying whole sentences.</li>
<li>Use the <b>third person</b> and the same tense as the text, normally the present for informative texts (even when summarising a historical text, a short summary can use the historic present).</li>
<li><b>No opinions, no comments, no direct quotations</b>: the summary is faithful to the original.</li>
<li><b>Link sentences with connectives</b> (in fact, therefore, however): a summary is not a list of disconnected sentences.</li>
<li><b>Check the length</b> (usually a third of the original text, unless the task says otherwise) and reread it: someone who does not know the text must be able to understand it.</li>
</ol>`
    },
    {
      type: "example",
      title: "Example: from text to summary",
      html: `<p><b>Original text (about 100 words):</b><br>
<i>«Photosynthesis is the process by which plants produce their own food. In the leaves, thanks to chlorophyll, a green pigment, sunlight is absorbed and used to transform water, taken up by the roots, and carbon dioxide from the air into glucose, a sugar that serves as a source of energy. As a by-product, oxygen is released and passes into the atmosphere. Besides feeding the plant, the process is enormously important for the whole planet: most of the oxygen we breathe comes from photosynthesis, and glucose is the basis of food chains.»</i></p>
<p><b>Summary (about 30 words):</b><br>
<i>Photosynthesis lets plants produce glucose from water and carbon dioxide, using sunlight and chlorophyll. It releases oxygen and is the basis of life and of food chains.</i></p>
<p>What has been removed? Adjectives, details («by the roots», «green pigment»), linking sentences. What is left? <b>Who does what, with what, and why it matters</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the summary",
      questions: [
        { type: "tf", q: "In a summary it is a good idea to include your own opinion of the text.", answer: false, explain: "A summary stays faithful to the original: opinions belong in the commentary." },
        { type: "mc", q: "How long should a summary normally be?", options: ["The same as the original", "About a third of the original", "A single sentence", "Twice the original"], answer: 1, explain: "It is usually reduced to 1/3 or 1/4, unless instructed otherwise." },
        { type: "text", q: "What do we call each part with uniform content into which a text is divided in order to summarise it?", answer: ["sequence", "sequences", "a sequence", "section", "sections"], explain: "Sequences are the units of content: each has a short heading and a main idea." }
      ]
    },
    {
      type: "text",
      title: "The paraphrase",
      html: `<p>A <b>paraphrase</b> (from the Greek «to say alongside, in another way») rewrites a text in a <b>simpler and clearer</b> form, <b>without reducing</b> its content. It is used above all for poetry, old texts or texts with complex syntax.</p>
<ul>
<li>Difficult or archaic words are <b>replaced</b> with current ones;</li>
<li>the <b>syntax is rearranged</b> into normal order (subject, verb, complement) when the text uses inversions (hyperbaton, anastrophe);</li>
<li>figures of speech (metaphors, similes) are <b>explained</b> when they block understanding;</li>
<li>nothing important is <b>added</b> or removed, and no judgements are included.</li>
</ul>
<p>Example from the first lines of Leopardi's <i>L'infinito</i> (The Infinite): «Sempre caro mi fu quest'ermo colle, / e questa siepe, che da tanta parte / dell'ultimo orizzonte il guardo esclude».</p>
<p><b>Paraphrase (in Italian):</b> <i>«Questo colle solitario mi è sempre stato caro, e anche questa siepe, che impedisce allo sguardo di vedere gran parte dell'orizzonte più lontano».</i> (This lonely hill has always been dear to me, and so has this hedge, which stops my gaze from seeing a large part of the farthest horizon.)</p>`
    },
    {
      type: "remember",
      title: "Summarising does not mean cutting at random",
      html: `<p>A summary that removes the examples but keeps the concepts is correct. A summary that skips half the argument and keeps only the curious details is wrong. Before deleting something, ask yourself: <b>«Without this sentence, would a reader still understand the text?»</b>. If yes, cut it; if not, keep it (perhaps in a shorter form).</p>`
    },
    {
      type: "text",
      title: "The expository text",
      html: `<p>The <b>expository text</b> (or informative, or popular-science text) explains a topic <b>objectively</b>: school textbooks, encyclopedia entries, newspaper reports, reports, scientific articles. Its aim is to <b>inform and help people understand</b>, not to convince (that is the argumentative text) and not to tell a story (the narrative text).</p>
<p><b>Features:</b></p>
<ul>
<li><b>Clarity and precision</b>: specific vocabulary (technical terms), sentences that are not too long;</li>
<li><b>Objectivity</b>: normally the third person and an impersonal tone, no opinions;</li>
<li><b>Logical order</b>: the information is organised according to a pattern;</li>
<li><b>Verifiability</b>: data, examples, definitions, sometimes sources.</li>
</ul>
<p><b>Typical structure:</b></p>
<ol>
<li><b>Introduction</b>: presents the topic and the aim, perhaps with a question or a fact;</li>
<li><b>Body</b>: the paragraphs, each with a main idea, in logical sequence;</li>
<li><b>Conclusion</b>: sums up the key points or suggests a perspective.</li>
</ol>`
    },
    {
      type: "svg",
      title: "The patterns of an expository text",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0fdf4"/>
<g font-family="sans-serif">
<text x="320" y="26" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">Four ways to organise an explanation</text>
<rect x="20" y="45" width="140" height="220" rx="10" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
<text x="90" y="75" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Chronological</text>
<text x="90" y="105" font-size="14" text-anchor="middle" fill="#14532d">first, then,</text>
<text x="90" y="125" font-size="14" text-anchor="middle" fill="#14532d">finally</text>
<text x="90" y="170" font-size="20" text-anchor="middle" fill="#16a34a">1 → 2 → 3</text>
<text x="90" y="215" font-size="14" text-anchor="middle" fill="#14532d">history, biographies</text>
<rect x="175" y="45" width="140" height="220" rx="10" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
<text x="245" y="75" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Cause-effect</text>
<text x="245" y="105" font-size="14" text-anchor="middle" fill="#1e3a8a">because, so,</text>
<text x="245" y="125" font-size="14" text-anchor="middle" fill="#1e3a8a">as a result</text>
<text x="245" y="170" font-size="20" text-anchor="middle" fill="#2563eb">A ⇒ B</text>
<text x="245" y="215" font-size="14" text-anchor="middle" fill="#1e3a8a">science, economics</text>
<rect x="330" y="45" width="140" height="220" rx="10" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="400" y="75" font-size="16" text-anchor="middle" fill="#78350f" font-weight="bold">Comparison</text>
<text x="400" y="105" font-size="14" text-anchor="middle" fill="#78350f">instead, while,</text>
<text x="400" y="125" font-size="14" text-anchor="middle" fill="#78350f">on the contrary</text>
<text x="400" y="170" font-size="20" text-anchor="middle" fill="#d97706">A ≠ B</text>
<text x="400" y="215" font-size="14" text-anchor="middle" fill="#78350f">two eras, two theses</text>
<rect x="485" y="45" width="140" height="220" rx="10" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
<text x="555" y="75" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Problem</text>
<text x="555" y="95" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">-solution</text>
<text x="555" y="125" font-size="14" text-anchor="middle" fill="#7f1d1d">the issue,</text>
<text x="555" y="145" font-size="14" text-anchor="middle" fill="#7f1d1d">the proposal</text>
<text x="555" y="190" font-size="20" text-anchor="middle" fill="#dc2626">? → !</text>
<text x="555" y="235" font-size="14" text-anchor="middle" fill="#7f1d1d">environment, health</text>
</g>
</svg>`,
      caption: "The structure depends on the aim: the text changes according to the question it answers."
    },
    {
      type: "text",
      title: "Outline and connectives",
      html: `<p>A well-made expository text starts from an <b>outline</b> (<i>scaletta</i>): before writing, list the main ideas in order and place them under the headings «introduction, body, conclusion». Then link the ideas with <b>connectives</b>, the words that show the logical relationship between one sentence and the next:</p>
<table>
<tr><th>Function</th><th>Connectives</th></tr>
<tr><td>Addition</td><td>moreover, in addition, also, on top of this</td></tr>
<tr><td>Cause</td><td>because, since, given that, in fact</td></tr>
<tr><td>Consequence</td><td>so, therefore, as a result, thus</td></tr>
<tr><td>Contrast</td><td>but, however, instead, on the contrary, yet</td></tr>
<tr><td>Example</td><td>for example, for instance, such as</td></tr>
<tr><td>Conclusion</td><td>in conclusion, in short, all in all</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Connective and function",
      widget: "match",
      options: { pairs: [
        ["however", "contrast"],
        ["therefore", "consequence"],
        ["in fact", "cause/explanation"],
        ["for example", "example"],
        ["moreover", "addition"],
        ["in short", "conclusion"]
      ] },
      caption: "Link each connective to its logical function."
    },
    {
      type: "example",
      title: "A short expository text",
      html: `<p><b>Topic: why do we use the international system of units?</b></p>
<p><b>Introduction.</b> For centuries every European city had its own units of measurement, and this created problems for trade and experiments.</p>
<p><b>Body.</b> At the end of the 18th century, in France, it was decided to create a common system based on natural rules and decimal calculation: the metre was born. The system was then extended to other units. Since it allows data to be compared anywhere, in 1960 it was adopted as the International System of Units.</p>
<p><b>Conclusion.</b> In short, a common language of measurement is essential for trade, for science and for everyday life.</p>
<p>Notice: a clear title, a three-part structure, connectives (since, in short), the third person and no opinions.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to summarise",
      intro: "If a prose summary does not come easily, try one of these approaches.",
      tabs: [
        {
          label: "🗺️ Mind map",
          html: "<p>Put the topic in the centre, then draw branches for the main ideas and sub-branches for the details. It helps you see the text <b>all at once</b> and revise it; then the map can be turned into a summary by following the branches in order.</p>"
        },
        {
          label: "❓ The questions",
          html: "<p>For each paragraph, write the question it answers: <i>Who? What? Where? When? Why? How?</i> Put the answers in a row and you have an almost ready summary. It works very well for history texts and news articles.</p>"
        },
        {
          label: "🗣️ Explain it to a friend",
          html: "<p>Close the book and explain out loud, in one minute, to a friend (or to the mirror) what the text is about. Then open it again and check what you forgot. This is the <b>Feynman technique</b>: if you can explain it simply, you have really understood it.</p>"
        },
        {
          label: "📝 The tweet",
          html: "<p>Try to sum up the whole text in <b>a single sentence of 20-25 words</b>, like a newspaper headline. It forces you to choose the most important idea. Then expand it to the required length by adding the supporting ideas.</p>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "The most famous summary",
      html: `<p>English-language journalism uses the <b>«5 Ws»</b> rule (<i>Who, What, When, Where, Why</i>): the first lines of an article must already answer these five questions. It is the <b>inverted pyramid</b> technique: the most important information comes first, the details come afterwards. That way, anyone who stops after the first sentence has still understood the essentials.</p>`
    },
    {
      type: "curiosity",
      title: "Chinese whispers",
      html: `<p>Every summary is a small translation, and translating can distort. In the game of «Chinese whispers» (or «telephone») the message changes as it passes from mouth to mouth: the same thing happens when we copy from memory or quote «from hearsay». This is why, at school, when we report someone else's idea we must <b>always check the source</b> and distinguish what the author says from what we think.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of summary writing",
      nodes: [
        { id: "capire", label: "Understanding the text", x: 50, y: 8, color: "#8b5cf6", html: "Skim reading, close reading, checking reread; identifying main ideas and key words.", why: "Every written synthesis depends on understanding: someone who writes a summary without understanding just copies sentences at random. Understanding means being able to tell what is essential from what is secondary." },
        { id: "riassunto", label: "Summary", x: 15, y: 50, color: "#0ea5e9", html: "A short, faithful version of the text, in your own words.", why: "It is used to study and remember: memory holds on to an idea rephrased in your own words better than to a copied text. That is why it shortens, and does not comment." },
        { id: "parafrasi", label: "Paraphrase", x: 50, y: 50, color: "#f59e0b", html: "A rewriting in clearer form, without reducing the content.", why: "Poetry and old texts use syntax and words far from today's language. A paraphrase is a kind of translation within the same language, which lets you understand before interpreting." },
        { id: "commento", label: "Commentary", x: 85, y: 50, color: "#ef4444", html: "A personal interpretation and evaluation of the text.", why: "After understanding (summary, paraphrase), you can discuss: commentary adds analysis, connections and reasoned opinions. It must never be confused with a synthesis." },
        { id: "espositivo", label: "Expository text", x: 30, y: 85, color: "#22c55e", html: "A text that explains a topic objectively: introduction, body, conclusion.", why: "Explaining requires order: the patterns (chronological, cause-effect, comparison, problem-solution) match the ways the mind builds relationships between pieces of information." },
        { id: "connettivi", label: "Connectives", x: 72, y: 85, color: "#64748b", html: "Words that signal the logical relationships between sentences.", why: "Without connectives a text is a list of sentences. They tell us whether a fact is a cause or a consequence, whether a sentence is an example or a contrast: they make the reasoning visible." }
      ],
      edges: [["capire", "riassunto", "leads to"], ["capire", "parafrasi", "leads to"], ["capire", "commento", "leads to"], ["capire", "espositivo", "feeds"], ["espositivo", "connettivi", "uses"], ["riassunto", "connettivi", "uses"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the expository text",
      questions: [
        { type: "mc", q: "What is the main aim of an expository text?", options: ["To tell a story", "To inform and explain objectively", "To convince at all costs", "To express emotions"], answer: 1, explain: "The expository text informs and explains; convincing is the aim of the argumentative text." },
        { type: "mc", q: "'Therefore' introduces a relationship of:", options: ["Cause", "Consequence", "Contrast", "Example"], answer: 1, explain: "Therefore, so and as a result introduce what follows from what has just been said." }
      ]
    }
  ],
  glossary: [
    { t: "Summary", d: "A shorter version of a text, faithful to the essential content and written in your own words." },
    { t: "Paraphrase", d: "A rewriting of a text in a simpler form, without reducing its content." },
    { t: "Expository text", d: "A text that explains a topic objectively and in an orderly way." },
    { t: "Sequence", d: "A part of a text with uniform content." },
    { t: "Main idea", d: "The central concept of a paragraph or a text." },
    { t: "Outline", d: "An ordered list of the ideas to be dealt with in a text (scaletta)." },
    { t: "Connective", d: "A word or phrase that links sentences and ideas, showing their logical relationship." },
    { t: "Key words", d: "Terms that are essential for understanding and remembering the content of a text." },
    { t: "Anastrophe", d: "An inversion of the normal word order in a sentence, frequent in poetry." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which operation does NOT reduce the length of the text?", options: ["Summary", "Paraphrase", "One-sentence synthesis", "Outline"], answer: 1, explain: "A paraphrase rewrites without shortening, while the other operations reduce." },
      { type: "tf", q: "A summary must contain the personal judgement of the person writing it.", answer: false, explain: "A summary is faithful to the original and contains no opinions." },
      { type: "mc", q: "Which part of a paragraph often contains the main idea?", options: ["Always the middle", "Often the first or last sentence", "Never the first sentence", "Only the examples"], answer: 1, explain: "In many expository texts the main idea is at the beginning or end of the paragraph." },
      { type: "text", q: "What is the ordered list of ideas you prepare before writing called?", answer: ["outline", "an outline", "the outline", "plan", "scaletta"], explain: "The outline organises introduction, body and conclusion." },
      { type: "mc", q: "Which connective expresses contrast?", options: ["In fact", "Therefore", "However", "Moreover"], answer: 2, explain: "However introduces an idea that opposes or limits the previous one." },
      { type: "mc", q: "For which type of text is a paraphrase particularly useful?", options: ["News articles", "Poetry and old texts", "Maths textbooks", "Business emails"], answer: 1, explain: "A paraphrase makes texts with difficult syntax or vocabulary, such as poems, understandable." },
      { type: "tf", q: "The third person and an impersonal tone are typical of the expository text.", answer: true, explain: "The expository text aims at objectivity." },
      { type: "order", q: "Put the stages of writing a summary in order.", items: ["Skim reading", "Close reading with underlining", "Dividing into sequences with headings", "Writing in your own words", "Rereading and checking the length"], explain: "First you understand, then you select, then you write, and finally you check." },
      { type: "mc", q: "In which expository pattern are words like 'since' and 'as a result' used?", options: ["Chronological", "Cause-effect", "Comparison", "Descriptive"], answer: 1, explain: "Since and as a result link causes and effects." },
      { type: "mc", q: "What is the fundamental difference between paraphrase and commentary?", options: ["The paraphrase is longer", "The paraphrase rephrases without opinions, the commentary interprets and evaluates", "There is no difference", "Commentary is only done on poems"], answer: 1, explain: "The paraphrase stays faithful to the text; the commentary adds interpretation and judgement." }
    ]
  }
});
