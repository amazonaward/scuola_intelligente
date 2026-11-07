TOPIC('en', {
  id: `m1-ing-adverbs-frequency`,
  title: `Adverbs of frequency`,
  intro: `<i>I <b>always</b> have breakfast. I <b>sometimes</b> eat vegetables. I <b>never</b> go to bed before 9!</i> <b>Adverbs of frequency</b> tell us <b>how often</b> we do something. They go hand in hand with the present simple and they have a precise place in the sentence. We learn the "scale" from 100% to 0% and the question <b>How often…?</b> 📅🔁`,
  minutes: 30,
  sections: [
    {
      type: `text`, title: `1. The frequency scale`,
      html: `<p>Each adverb corresponds, more or less, to a percentage of the times:</p>
<table>
<tr><th>Adverb</th><th>Meaning</th><th>How often</th></tr>
<tr><td><b>always</b></td><td>every time</td><td>100%</td></tr>
<tr><td><b>usually</b></td><td>most of the time</td><td>about 90%</td></tr>
<tr><td><b>often</b></td><td>many times</td><td>about 70%</td></tr>
<tr><td><b>sometimes</b></td><td>now and then</td><td>about 50%</td></tr>
<tr><td><b>rarely / seldom</b></td><td>not many times</td><td>about 10%</td></tr>
<tr><td><b>hardly ever</b></td><td>almost never</td><td>about 5%</td></tr>
<tr><td><b>never</b></td><td>not at any time</td><td>0%</td></tr>
</table>
<p>The percentages are not as exact as in maths: they help you remember the <b>order</b>.</p>`
    },
    {
      type: `svg`, title: `The frequency thermometer`,
      caption: `From 100% (always) to 0% (never): the fuller the bar, the more often it happens.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<g font-size="17" font-weight="bold">
<rect x="160" y="20" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="20" width="400" height="30" rx="6" fill="#16a34a"/><text x="20" y="42" fill="#14532d">always</text><text x="570" y="42" font-size="13" fill="#14532d" text-anchor="end">100%</text>
<rect x="160" y="58" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="58" width="360" height="30" rx="6" fill="#65a30d"/><text x="20" y="80" fill="#14532d">usually</text>
<rect x="160" y="96" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="96" width="280" height="30" rx="6" fill="#ca8a04"/><text x="20" y="118" fill="#14532d">often</text>
<rect x="160" y="134" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="134" width="200" height="30" rx="6" fill="#ea580c"/><text x="20" y="156" fill="#14532d">sometimes</text>
<rect x="160" y="172" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="172" width="40" height="30" rx="6" fill="#dc2626"/><text x="20" y="194" fill="#14532d">rarely</text>
<rect x="160" y="210" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="210" width="20" height="30" rx="6" fill="#b91c1c"/><text x="20" y="232" fill="#14532d">hardly ever</text>
<rect x="160" y="248" width="400" height="30" rx="6" fill="#e5e7eb"/><text x="20" y="270" fill="#14532d">never</text><text x="570" y="270" font-size="13" fill="#7f1d1d" text-anchor="end">0%</text>
</g>
</svg>`
    },
    {
      type: `text`, title: `2. Where they go in the sentence`,
      html: `<p>This is the most important part. There are two rules:</p>
<ol>
<li><b>BEFORE the main verb</b>:<br><i>I <b>always</b> walk to school.</i> · <i>She <b>often</b> plays chess.</i> · <i>We <b>never</b> eat fish.</i></li>
<li><b>AFTER the verb to be</b> (am, is, are):<br><i>I am <b>always</b> happy.</i> · <i>He is <b>never</b> late.</i> · <i>They are <b>usually</b> tired on Monday.</i></li>
</ol>
<p>With negatives and questions the adverb goes <b>after the auxiliary</b> and before the verb:</p>
<ul>
<li><i>I <b>don't usually</b> watch TV.</i> (I normally don't watch TV)</li>
<li><i><b>Do</b> you <b>often</b> go to the cinema?</i></li>
</ul>
<p>⚠️ <b>Never</b> is already negative: <i>I <b>never</b> eat meat</i> ✅ — <i>I <b>don't never</b> eat meat</i> ❌ (in English we don't use two negatives!).</p>
<p>💡 <b>Sometimes</b> and <b>usually</b> can also go at the start of the sentence: <i><b>Sometimes</b> I play the guitar.</i></p>`
    },
    {
      type: `remember`, title: `The sandwich rule`,
      html: `<p>🥪 The adverb is the filling of a sandwich:</p>
<ul>
<li>normal verb: <b>subject + ADVERB + verb</b> → <i>She <b>always</b> sings.</i></li>
<li>verb be: <b>subject + be + ADVERB</b> → <i>She is <b>always</b> cheerful.</i></li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-quiz: the position`,
      questions: [
        { type: `mc`, q: `Choose the correct sentence.`, options: [`I go always to bed at 10.`, `I always go to bed at 10.`, `Always I go to bed at 10.`], answer: 1, explain: `With a normal verb the adverb goes before the verb: I always go.` },
        { type: `mc`, q: `Choose the correct sentence.`, options: [`She is often late.`, `She often is late.`], answer: 0, explain: `With to be the adverb goes after: she is often late.` },
        { type: `tf`, q: `"I don't never eat sweets" is correct.`, answer: false, explain: `Never is already negative: I never eat sweets.` }
      ]
    },
    {
      type: `text`, title: `3. How often…? and frequency expressions`,
      html: `<p>To ask how often someone does something: <b>How often</b> + do/does + subject + verb?</p>
<p><i><b>How often do</b> you go swimming?</i> – <i>I <b>usually</b> go twice a week.</i></p>
<p>You can also answer with <b>frequency expressions</b>, which usually go <b>at the end</b> of the sentence:</p>
<ul>
<li><b>once</b> a week = one time every week</li>
<li><b>twice</b> a month = two times every month</li>
<li><b>three times</b> a year = three times every year (from 3 on: <i>number + times</i>)</li>
<li><b>every</b> day / week / Sunday = each day / week / Sunday</li>
<li><b>on</b> Mondays = every Monday</li>
</ul>
<p><i>I play football <b>three times a week</b>. We visit our grandparents <b>every Sunday</b>.</i></p>`
    },
    {
      type: `example`, title: `Practical example: the class survey`,
      html: `<p>Do a survey in English! Everyone answers: <i>How often do you…</i></p>
<table>
<tr><th>Activity</th><th>Marta's answer</th></tr>
<tr><td>…eat fruit?</td><td><i>I <b>always</b> eat fruit at lunch.</i></td></tr>
<tr><td>…play video games?</td><td><i>I play video games <b>twice a week</b>.</i></td></tr>
<tr><td>…read comics?</td><td><i>I <b>often</b> read comics.</i></td></tr>
<tr><td>…go to the museum?</td><td><i>I <b>hardly ever</b> go to the museum.</i></td></tr>
<tr><td>…drink coffee?</td><td><i>I <b>never</b> drink coffee!</i></td></tr>
</table>
<p>Then report: <i>Marta <b>always</b> eats fruit, but she <b>never</b> drinks coffee.</i> Remember the <b>-s</b> of the 3rd person!</p>`
    },
    {
      type: `example`, title: `Practical example: an animal profile`,
      html: `<p><i>The koala lives in Australia. It <b>usually</b> sleeps about 18-22 hours a day! It <b>always</b> eats eucalyptus leaves and it <b>hardly ever</b> drinks water, because the leaves are full of water. It <b>rarely</b> comes down from the trees. It is <b>never</b> in a hurry.</i></p>
<p>According to a widespread explanation, the name "koala" comes from an Aboriginal language and means "no water".</p>`
    },
    {
      type: `widget`, title: `Game: match adverb and meaning`,
      widget: `match`,
      options: {
        pairs: [[`always`, `every time`], [`usually`, `most of the time`], [`often`, `many times`], [`sometimes`, `now and then`], [`rarely`, `not many times`], [`hardly ever`, `almost never`], [`never`, `not at any time`], [`twice a week`, `two times every week`]]
      }
    },
    {
      type: `widget`, title: `Game: before the verb or after "be"?`,
      widget: `classify`,
      caption: `Where does the adverb go? Before the main verb or after the verb be?`,
      options: {
        groups: [`Before the verb (I always play)`, `After be (I am always…)`],
        items: [
          [`I ___ walk to school.`, 0], [`She ___ eats pasta.`, 0], [`We ___ watch films.`, 0], [`They ___ get up early.`, 0],
          [`He is ___ hungry.`, 1], [`I am ___ late.`, 1], [`You are ___ kind.`, 1], [`It is ___ cold in January.`, 1]
        ]
      }
    },
    {
      type: `curiosity`, title: `Did you know… "always" means "all the way"?`,
      html: `<p><b>Always</b> comes from Old English <i>ealne weg</i>, that is "<b>all the way</b>", the whole journey. In time it took the meaning "all the time", that is, every time. And <b>never</b> was born from the union of <i>ne</i> (not) + <i>ever</i> (at any time): "not at any time"!</p>`
    },
    {
      type: `curiosity`, title: `Did you know… for English speakers "often" has a silent "t"?`,
      html: `<p>The most common pronunciation of <b>often</b> is "off-en", with a <b>silent t</b>, as in <i>listen</i> and <i>castle</i>. But in the seventeenth century the t was pronounced, and today many people in England and the United States have started saying it again ("off-ten"): dictionaries accept both pronunciations. Languages keep changing!</p>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `If you struggle to remember the order or the position, try these paths.`,
      tabs: [
        {
          label: `📏 The percentage line`,
          html: `<p>Put the adverbs on a line like numbers: 0 = never, 50 = sometimes, 100 = always. Move the mark: at what percentage would you put <i>often</i>? And <i>usually</i>? The closer you get to 100, the more frequent it is.</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 100, step: 10, marks: [0, 10, 50, 70, 90, 100] }
        },
        {
          label: `📅 The calendar`,
          html: `<p>Think of a week of 7 days and colour the days when you do something:</p>
<ul>
<li>7 days out of 7 → <b>always</b> 🟩🟩🟩🟩🟩🟩🟩</li>
<li>5-6 days → <b>usually</b> 🟩🟩🟩🟩🟩🟩⬜</li>
<li>4-5 days → <b>often</b> 🟩🟩🟩🟩⬜⬜⬜</li>
<li>2-3 days → <b>sometimes</b> 🟩🟩⬜⬜⬜⬜⬜</li>
<li>1 day now and then → <b>rarely</b> 🟩⬜⬜⬜⬜⬜⬜</li>
<li>no days → <b>never</b> ⬜⬜⬜⬜⬜⬜⬜</li>
</ul>`
        },
        {
          label: `🇮🇹🇬🇧 Italian versus English`,
          html: `<p>In Italian the adverb usually goes <b>after</b> the verb: <i>Io gioco <b>sempre</b></i>. In English it goes <b>before</b>: <i>I <b>always</b> play</i>. With "to be", instead, the two languages do the same: <i>Sono <b>sempre</b> felice = I am <b>always</b> happy</i>.</p>
<p>Other languages: in 🇫🇷 French <i>Je joue <b>toujours</b></i> and in 🇩🇪 German <i>Ich spiele <b>immer</b></i>, like Italian. English is "the odd one out" of the family: the main verb wants the adverb <b>in front</b> of it.</p>`
        },
        {
          label: `🃏 Revision flashcards`,
          html: `<p>On the front a situation, on the back the sentence with the adverb in the right place.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `Every morning: breakfast (100%)`, back: `I always have breakfast.` },
              { front: `He is tired many times`, back: `He is often tired.` },
              { front: `I don't drink coffee at any time`, back: `I never drink coffee.` },
              { front: `We walk most of the time`, back: `We usually walk.` },
              { front: `She is late only a few times`, back: `She is rarely late.` },
              { front: `Swimming: 2 times every week`, back: `I swim twice a week.` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: saying how often`,
      nodes: [
        { id: `freq`, label: `Frequency`, x: 50, y: 8, color: `#16a34a`, html: `How many times an action happens.`, why: `It connects to the present simple, the tense of habits: a habit is exactly something that repeats with a certain frequency.` },
        { id: `avv`, label: `Adverbs of frequency`, x: 25, y: 32, color: `#3b82f6`, html: `always, usually, often, sometimes, rarely, hardly ever, never.`, why: `They are "indefinite adverbs": they don't give a precise number but an estimate. That is why teachers put them on a scale from 100% to 0%.` },
        { id: `espr`, label: `Frequency expressions`, x: 75, y: 32, color: `#f59e0b`, html: `once / twice / three times a week, every day.`, why: `They give a precise number. <i>Once</i> and <i>twice</i> are old forms of "one" and "two" with the adverb ending <i>-es</i> of Old English; from three on we use <i>times</i>.` },
        { id: `prima`, label: `Before the verb`, x: 12, y: 60, color: `#ef4444`, html: `I always play / She never eats.`, why: `In medieval English the verb could come before the adverb (as in Italian). With the spread of auxiliaries (do) main verbs stayed "fixed" and the adverb settled in front of them.` },
        { id: `dopo`, label: `After "be"`, x: 38, y: 60, color: `#a855f7`, html: `I am always…, He is never…`, why: `<i>Be</i> behaves like an auxiliary: in questions it is inverted (<i>Are you…?</i>) and the adverb follows it, as it follows <i>do</i>, <i>can</i>, <i>have</i>.` },
        { id: `never`, label: `Never = negation`, x: 25, y: 86, color: `#b91c1c`, html: `Never together with not/don't.`, why: `Standard English does not allow the double negative: "<i>I don't never</i>" would deny twice. In Old English, instead, the double negative was normal, and it still is in Italian (<i>non</i> vengo <i>mai</i>).` },
        { id: `how`, label: `How often…?`, x: 75, y: 60, color: `#0ea5e9`, html: `The question to ask about frequency.`, why: `<i>Often</i> comes from the old <i>oft</i> (still used in poetry: "oft-repeated"). <i>How often</i> = "how many times".` },
        { id: `ps`, label: `Present simple`, x: 75, y: 86, color: `#14b8a6`, html: `The tense of habits.`, why: `Habits repeat: that is why adverbs and expressions of frequency are the "clue words" of the present simple.` }
      ],
      edges: [
        [`freq`, `avv`, `is expressed with`], [`freq`, `espr`, `is expressed with`], [`avv`, `prima`, `position`], [`avv`, `dopo`, `position`],
        [`avv`, `never`, `watch out`], [`freq`, `how`, `is asked with`], [`how`, `ps`, `uses`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: how often?`,
      questions: [
        { type: `mc`, q: `"Two times every month" is said…`, options: [`two times month`, `twice a month`, `second a month`], answer: 1, explain: `Twice = two times; a month = every month.` },
        { type: `mc`, q: `Which is the most frequent?`, options: [`sometimes`, `usually`, `rarely`], answer: 1, explain: `Usually (about 90%) > sometimes (50%) > rarely (10%).` },
        { type: `text`, q: `Complete the question: How ___ do you go to the gym?`, answer: [`often`], explain: `How often = how many times.` }
      ]
    }
  ],
  glossary: [
    { t: `Adverb of frequency`, d: `An adverb that shows how often: always, usually, often, sometimes, rarely, hardly ever, never.` },
    { t: `Always`, d: `Every time (100%).` },
    { t: `Usually`, d: `Most of the time.` },
    { t: `Often`, d: `Many times.` },
    { t: `Sometimes`, d: `Now and then (about half of the times).` },
    { t: `Rarely / seldom`, d: `Not many times.` },
    { t: `Hardly ever`, d: `Almost never.` },
    { t: `Never`, d: `Not at any time (0%). It is already negative: we don't use it with not.` },
    { t: `Once / twice`, d: `One time / two times.` },
    { t: `How often…?`, d: `How many times…?` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `"Always" means…`, options: [`not at any time`, `every time`, `many times`], answer: 1, explain: `Always = every time.` },
      { type: `order`, q: `Put the adverbs from the most frequent to the least frequent.`, items: [`always`, `usually`, `often`, `sometimes`, `rarely`, `never`], explain: `100% → 0%.` },
      { type: `mc`, q: `Choose the sentence with the adverb in the right place.`, options: [`I always eat breakfast.`, `I eat always breakfast.`, `I eat breakfast always.`], answer: 0, explain: `Before the main verb: I always eat.` },
      { type: `mc`, q: `Choose the correct sentence.`, options: [`My dad usually is tired.`, `My dad is usually tired.`], answer: 1, explain: `With be the adverb goes after: is usually.` },
      { type: `tf`, q: `"She never watches TV" is correct.`, answer: true, explain: `Never before the verb, -s of the 3rd person on watches.` },
      { type: `text`, q: `Write the two-word adverb that means "almost never".`, answer: [`hardly ever`], explain: `Hardly ever = almost never.` },
      { type: `mc`, q: `"One time every week" is said…`, options: [`one time week`, `once a week`, `one a week`], answer: 1, explain: `Once a week.` },
      { type: `mc`, q: `Which sentence is WRONG?`, options: [`I don't usually walk.`, `I don't never walk.`, `I never walk.`], answer: 1, explain: `Never is not used with don't: double negative.` },
      { type: `text`, q: `Complete: "How ___ do you visit your grandparents?" – "Every Sunday."`, answer: [`often`], explain: `How often…?` },
      { type: `mc`, q: `Lucia goes to the swimming pool 7 days out of 7. Lucia ___ goes swimming.`, options: [`sometimes`, `always`, `rarely`], answer: 1, explain: `Every day → always.` },
      { type: `order`, q: `Put the words in order.`, items: [`Tom`, `is`, `never`, `late`, `for school`], explain: `With be: Tom is never late for school.` },
      { type: `tf`, q: `Expressions like "twice a week" usually go at the end of the sentence.`, answer: true, explain: `Example: I play tennis twice a week.` }
    ]
  }
});
