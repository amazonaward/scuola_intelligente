TOPIC('en', {
  id: `m3-lat-motti-celebri`,
  title: `Famous Latin mottos and sayings`,
  intro: `<i>Veni, vidi, vici. Carpe diem. Alea iacta est.</i> These sentences are more than two thousand years old, but we still hear them in films, on tattoos, and on the coats of arms of cities and football clubs. We discover <b>who</b> said or wrote them, <b>when</b>, what they <b>really mean</b>, and how to <b>analyse</b> them with the Latin grammar you already know. 🏛️💬`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Why are Latin phrases so famous?`,
      html: `<p>For centuries Latin was the language of Rome, then of the <b>Church</b>, of <b>universities</b>, of <b>science</b> and of <b>law</b> across Europe: until the eighteenth century, books on science and philosophy were often written in Latin. This is why many phrases have become common heritage.</p>
<p>Latin phrases work well as mottos because Latin is:</p>
<ul>
<li><b>brief</b>: with no articles and often no pronouns, a few words are enough (<i>Veni, vidi, vici</i> = 3 words, in English 6: "I came, I saw, I conquered");</li>
<li><b>musical</b>: it loves alliteration (the same sounds at the start: <b>v</b>eni, <b>v</b>idi, <b>v</b>ici) and rhythm;</li>
<li><b>solemn</b>: it gives the phrase an ancient and authoritative air.</li>
</ul>
<p>These phrases are divided into <b>quotations</b> (phrases said or written by a specific author), <b>proverbs</b> (popular wisdom, often without an author) and <b>mottos</b> (phrases chosen as a "programme" by a person, a family, a city, a school).</p>`
    },
    {
      type: `text`, title: `2. The phrases of Julius Caesar`,
      html: `<ul>
<li><b>Alea iacta est</b> = "The die is cast". According to the historian Suetonius, Caesar said it on <b>10 January 49 BC</b> while crossing the river <b>Rubicon</b> with his troops, a border that a general could not cross under arms. It was the start of the civil war. The Greek historian Plutarch reports that he said it in Greek, quoting the comic playwright Menander. Today it is said when a decision is taken from which there is no turning back (like "crossing the Rubicon").</li>
<li><b>Veni, vidi, vici</b> = "I came, I saw, I conquered". Caesar wrote it in <b>47 BC</b> to announce to Rome his very swift victory at <b>Zela</b> (today in Turkey) over King Pharnaces of Pontus. Suetonius reports that it was written on a placard carried during his triumph.</li>
<li><b>Tu quoque, Brute, fili mi!</b> = "You too, Brutus, my son!". According to tradition, these were Caesar's last words, when he was killed on <b>15 March 44 BC</b> (the Ides of March). In fact Suetonius reports a phrase in <b>Greek</b> (<i>kai sy, teknon</i> = you too, my child) and adds that others say Caesar died <b>without saying anything</b>. The most famous Latin version is Shakespeare's: <i>Et tu, Brute?</i></li>
</ul>`
    },
    {
      type: `3d`, title: `Famous phrases in space and time`,
      scene: `spacetime`,
      options: {
        lat: [35, 55], lon: [-5, 40], years: [-250, 1700],
        places: [
          { lat: 41.9, lon: 12.5, label: `Rome` },
          { lat: 44.1, lon: 12.4, label: `Rubicon` },
          { lat: 40.3, lon: 35.9, label: `Zela` },
          { lat: 41.49, lon: 13.81, label: `Montecassino` },
          { lat: 52.16, lon: 4.49, label: `Leiden` }
        ],
        events: [
          { id: `plauto`, lat: 41.9, lon: 12.5, year: -211, label: `Plautus: "lupus est homo homini"`, html: `In the comedy <i>Asinaria</i> (around 211 BC) Plautus writes that man is a wolf to man when he does not know him. In 1600 the English philosopher Thomas Hobbes will make the form <i>homo homini lupus</i> famous.` },
          { id: `rubi`, lat: 44.1, lon: 12.4, year: -49, label: `Alea iacta est`, html: `10 January 49 BC: Caesar crosses the Rubicon with a legion, challenging the Senate. The civil war against Pompey begins.` },
          { id: `zela`, lat: 40.3, lon: 35.9, year: -47, label: `Veni, vidi, vici`, html: `August 47 BC: in a battle lasting just a few hours Caesar defeats Pharnaces II of Pontus and announces it with just three words.`, causes: [`rubi`] },
          { id: `idi`, lat: 41.9, lon: 12.5, year: -44, label: `Tu quoque, Brute`, html: `15 March 44 BC: Caesar, by now dictator for life, is killed in the Senate by a group of conspirators, including Brutus.`, causes: [`rubi`, `zela`] },
          { id: `orazio`, lat: 41.9, lon: 12.5, year: -23, label: `Horace: carpe diem`, html: `The poet Horace publishes the first three books of the <i>Odes</i>. In ode 1,11 he invites Leuconoe to "seize the moment". It is the age of Augustus, after years of civil wars.`, causes: [`idi`] },
          { id: `giov`, lat: 41.9, lon: 12.5, year: 120, label: `Juvenal: mens sana in corpore sano`, html: `In <i>Satire X</i> (early 2nd century AD) Juvenal says that one should ask the gods only for a healthy mind in a healthy body. In the same period he mocks the people who want only <i>panem et circenses</i>.` },
          { id: `bene`, lat: 41.49, lon: 13.81, year: 529, label: `Benedict: ora et labora`, html: `Around 529 Saint Benedict founds the monastery of Montecassino. His Rule organises the day between prayer and work: hence the Benedictine motto <i>ora et labora</i> (which, as a formula, spread only later).` },
          { id: `gali`, lat: 41.9, lon: 12.5, year: 1633, label: `Galileo: "Eppur si muove"`, html: `Galileo Galilei is tried in Rome and forced to abjure the theory of Copernicus. The phrase "Eppur si muove" ("And yet it moves"), in Italian, is probably a legend that arose after his death.` },
          { id: `cart`, lat: 52.16, lon: 4.49, year: 1637, label: `Descartes: cogito, ergo sum`, html: `In Leiden the <i>Discourse on the Method</i> by Descartes is published: "Je pense, donc je suis". The Latin version <i>cogito, ergo sum</i> appears in the <i>Principles of Philosophy</i> (1644). After the condemnation of Galileo, Descartes had given up publishing his treatise <i>The World</i>.`, causes: [`gali`] }
        ]
      },
      caption: `The base is the map, the height is time. Tap an event to read the story of the phrase; the arrows link causes and effects.`
    },
    {
      type: `decision`, title: `49 BC: Caesar at the Rubicon`,
      html: `<p>You are <b>Julius Caesar</b>. You have conquered Gaul in eight years of war and your soldiers adore you. In Rome, however, the Senate, led by your opponents and by Pompey, orders you to <b>disband your army</b> and return as a private citizen: without the protection of your office, you risk a trial and the end of your political career.</p>
<p>You are on the bank of the <b>Rubicon</b>, the small river that marks the border of Italy: the law forbids a general to cross it with his troops.</p>`,
      question: `What would you have done?`,
      options: [
        { label: `Obey: disband the army and return to Rome alone`, outcome: `You would have respected the law and avoided civil war, but your enemies would probably have put you on trial and excluded you from politics, perhaps exiled you.` },
        { label: `Cross the river with the legion`, outcome: `You become a rebel against the State: a civil war breaks out across the whole Mediterranean. If you win, you will have enormous power; if you lose, death.` },
        { label: `Stay at the border and negotiate again with the Senate`, outcome: `Caesar had indeed proposed compromises (for example that Pompey too should give up his army), but the Senate had rejected them. Waiting would have given his enemies time to organise.` }
      ],
      answer: 1,
      explain: `Caesar crossed the Rubicon on 10 January 49 BC, saying (according to Suetonius) "alea iacta est". Pompey and many senators fled from Rome; Caesar won the civil war (battle of Pharsalus, 48 BC) and became dictator. His personal power, however, worried many senators, who killed him in 44 BC. His choice marked the end of the Roman Republic: a few years later his adopted son Octavian became the first emperor, Augustus.`
    },
    {
      type: `quiz`, title: `Mini-quiz: Caesar's phrases`,
      questions: [
        { type: `mc`, q: `"Alea iacta est" refers to…`, options: [`the victory at Zela`, `the crossing of the Rubicon`, `the death of Caesar`], answer: 1, explain: `49 BC, the start of the civil war.` },
        { type: `mc`, q: `What does "Veni, vidi, vici" mean?`, options: [`I came, I saw, I conquered`, `Come, see, win`, `I see, I come, I live`], answer: 0, explain: `Three perfect forms, 1st person singular.` },
        { type: `num`, q: `In what year BC was Julius Caesar killed? (write only the number)`, answer: 44, tol: 0, explain: `At the Ides of March (15 March) of 44 BC.` }
      ]
    },
    {
      type: `text`, title: `3. Poets and writers: wisdom for life`,
      html: `<table>
<tr><th>Phrase</th><th>Meaning</th><th>Author and work</th></tr>
<tr><td><b>Carpe diem</b> (quam minimum credula postero)</td><td>Seize the day (trusting tomorrow as little as possible)</td><td>Horace, <i>Odes</i> 1,11 (23 BC)</td></tr>
<tr><td><b>Mens sana in corpore sano</b></td><td>Healthy mind in a healthy body</td><td>Juvenal, <i>Satires</i> X</td></tr>
<tr><td><b>Panem et circenses</b></td><td>Bread and circus games: what the people ask for in order to stay quiet</td><td>Juvenal, <i>Satires</i> X</td></tr>
<tr><td><b>Audentes fortuna iuvat</b></td><td>Fortune helps the bold</td><td>Virgil, <i>Aeneid</i> X, 284</td></tr>
<tr><td><b>Omnia vincit amor</b></td><td>Love conquers all</td><td>Virgil, <i>Eclogues</i> X, 69</td></tr>
<tr><td><b>Homo sum, humani nihil a me alienum puto</b></td><td>I am a man: nothing human is alien to me</td><td>Terence, <i>Heautontimorumenos</i> (163 BC)</td></tr>
<tr><td><b>Festina lente</b></td><td>Make haste slowly</td><td>motto of Augustus (reported by Suetonius, in Greek)</td></tr>
<tr><td><b>Si vis pacem, para bellum</b></td><td>If you want peace, prepare for war</td><td>adaptation from Vegetius (4th-5th century AD)</td></tr>
</table>
<p>⚠️ Watch the true meaning: <i>Mens sana in corpore sano</i> for Juvenal was <b>not</b> an invitation to do sport, but advice on what to ask the gods for in prayers (instead of wealth and power). <i>Carpe diem</i> does not mean "do whatever you want", but "make the most of the present, because the future is uncertain".</p>`
    },
    {
      type: `text`, title: `4. Proverbs, law, science: everyday phrases`,
      html: `<ul>
<li><b>Verba volant, scripta manent</b> = words fly away, writings remain (medieval proverb).</li>
<li><b>Errare humanum est, perseverare autem diabolicum</b> = to err is human, but to persist (in error) is diabolical (medieval, inspired by Seneca and Saint Augustine).</li>
<li><b>Repetita iuvant</b> = repeated things help (a perfect motto for students!).</li>
<li><b>Dura lex, sed lex</b> = the law is harsh, but it is the law.</li>
<li><b>Per aspera ad astra</b> = through difficulties to the stars.</li>
<li><b>Ora et labora</b> = pray and work (motto of the Benedictine monks).</li>
<li><b>Cogito, ergo sum</b> = I think, therefore I am (Descartes).</li>
<li><b>Memento mori</b> = remember that you must die (an invitation to humility).</li>
</ul>
<p>And in everyday life: <i>ad hoc</i> (for this purpose), <i>alter ego</i> (another self), <i>lapsus</i> (slip), <i>ultimatum</i>, <i>gratis</i> (from <i>gratiis</i> = for grace, without paying), <i>bis</i> (twice), <i>post scriptum</i> (P.S.), <i>et cetera</i> (etc.).</p>`
    },
    {
      type: `widget`, title: `Match the phrase to its meaning`,
      widget: `match`,
      options: { pairs: [
        [`Carpe diem`, `Seize the moment`],
        [`Alea iacta est`, `The die is cast`],
        [`Verba volant, scripta manent`, `Words fly away, writings remain`],
        [`Mens sana in corpore sano`, `Healthy mind in a healthy body`],
        [`Audentes fortuna iuvat`, `Fortune helps the bold`],
        [`Festina lente`, `Make haste slowly`],
        [`Repetita iuvant`, `Repetition helps`]
      ] },
      caption: `Try without looking at the tables!`
    },
    {
      type: `text`, title: `5. Let's analyse the phrases with grammar`,
      html: `<p>Now that you know cases and verbs, you can "take apart" the mottos:</p>
<ul>
<li><b>Carpe diem</b>: <i>carpe</i> = imperative of <i>carpo, carpis, carpĕre</i> (3rd conj.: to seize); <i>diem</i> = accusative singular of <i>dies</i> (5th declension) ➜ direct object: "seize the day".</li>
<li><b>Veni, vidi, vici</b>: three <b>perfect</b> forms (1st person sing.) of <i>venio</i> (4th), <i>video</i> (2nd), <i>vinco</i> (3rd). No pronoun, no conjunction (it is called <b>asyndeton</b>): the effect is speed, just like the battle!</li>
<li><b>Verba volant, scripta manent</b>: <i>verba</i> (the words) and <i>scripta</i> (the writings) are nominative plural neuter ➜ subjects; <i>volant</i> (1st conj.) and <i>manent</i> (2nd conj.) present tense, 3rd plural.</li>
<li><b>Audentes fortuna iuvat</b>: <i>fortuna</i> = nominative (subject, 1st decl.); <i>audentes</i> = accusative plural (the bold, object); <i>iuvat</i> = helps (1st conj.). The subject sits in the middle: in Latin the word order is free!</li>
<li><b>Cogito, ergo sum</b>: <i>cogito</i> = I think (1st conj.), <i>ergo</i> = therefore, <i>sum</i> = I am (the verb you have already studied!).</li>
</ul>`
    },
    {
      type: `svg`, title: `Taking apart "Audentes fortuna iuvat"`,
      caption: `The ending shows the function: the subject "fortuna" sits in the middle, but it remains the subject.`,
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fffbeb"/>
<rect x="30" y="40" width="200" height="70" rx="12" fill="#3b82f6"/>
<rect x="250" y="40" width="160" height="70" rx="12" fill="#ef4444"/>
<rect x="430" y="40" width="140" height="70" rx="12" fill="#334155"/>
<text x="130" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">audent<tspan fill="#fde047">es</tspan></text>
<text x="330" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">fortun<tspan fill="#fde047">a</tspan></text>
<text x="500" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">iuva<tspan fill="#fde047">t</tspan></text>
<text x="130" y="140" font-size="15" fill="#1d4ed8" text-anchor="middle" font-weight="bold">ACCUSATIVE PLURAL</text>
<text x="330" y="140" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">NOMINATIVE</text>
<text x="500" y="140" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">3RD SING. PRESENT</text>
<text x="130" y="165" font-size="15" fill="#334155" text-anchor="middle">direct object</text>
<text x="330" y="165" font-size="15" fill="#334155" text-anchor="middle">subject</text>
<text x="500" y="165" font-size="15" fill="#334155" text-anchor="middle">predicate</text>
<path d="M130 180 C 130 230, 470 210, 470 235" stroke="#3b82f6" stroke-width="3" fill="none"/>
<path d="M330 180 C 330 210, 130 210, 130 235" stroke="#ef4444" stroke-width="3" fill="none"/>
<path d="M500 180 C 500 210, 300 215, 300 235" stroke="#334155" stroke-width="3" fill="none"/>
<text x="300" y="265" font-size="20" fill="#0f172a" text-anchor="middle" font-weight="bold">Fortune   helps   the bold</text>
</svg>`
    },
    {
      type: `example`, title: `Practical example: mottos around us`,
      html: `<ul>
<li>The coat of arms of the city of <b>Paris</b>: <i>Fluctuat nec mergitur</i> = it is tossed by the waves but does not sink.</li>
<li>The <b>Olympics</b>: <i>Citius, altius, fortius</i> = faster, higher, stronger (proposed by Pierre de Coubertin in 1894; since 2021 <i>communiter</i>, "together", has been added).</li>
<li>The <b>United States</b>: <i>E pluribus unum</i> = from many, one, (the States forming a single nation), written on the coins.</li>
<li>The <b>European Union</b>: <i>In varietate concordia</i> = united in diversity.</li>
<li>The sports brand <b>ASICS</b> is an acronym of <i>Anima sana in corpore sano</i>!</li>
</ul>`
    },
    {
      type: `example`, title: `Practical example: using a motto in an essay`,
      html: `<p>A Latin quotation, used well, makes an argumentative text more effective. For example, in an essay on the importance of study:</p>
<p><i>"As the Romans said, <b>repetita iuvant</b>: reviewing a little every day is more useful than studying everything the night before the test."</i></p>
<p>Golden rules: write the phrase in <b>italics</b> (or in quotation marks), <b>translate</b> it or explain it straight after, and make sure you know its <b>true meaning</b> (and the author, if there is one).</p>`
    },
    {
      type: `curiosity`, title: `Did you know… many "Caesar" phrases are not really his?`,
      html: `<p><i>Alea iacta est</i> was a Greek proverb that Caesar (according to Plutarch) quoted from the comic playwright Menander. <i>Tu quoque, Brute</i> is a later invention: the ancient sources speak of a phrase in Greek or of silence. And Suetonius's word order is in fact <i>iacta alea est</i>! Even "<i>Eppur si muove</i>" by Galileo appears for the first time in a painting and a book written more than a hundred years after the trial. Moral: always check the sources, even for famous quotations!</p>`
    },
    {
      type: `curiosity`, title: `Did you know… doctors' oaths and football speak Latin?`,
      html: `<p>The doctors' principle <i>Primum non nocere</i> (first of all, do no harm) is inspired by the Hippocratic Oath. Many English football clubs have Latin mottos: <b>Tottenham</b> has <i>Audere est facere</i> (to dare is to do) and <b>Everton</b> <i>Nil satis nisi optimum</i> (nothing but the best is enough). And the motto of the State of Kansas (USA) is precisely <i>Ad astra per aspera</i>!</p>`
    },
    {
      type: `remember`, title: `To remember`,
      html: `<ul>
<li>Caesar: <b>Alea iacta est</b> (Rubicon, 49 BC), <b>Veni, vidi, vici</b> (Zela, 47 BC); <b>Tu quoque, Brute</b> is tradition (44 BC).</li>
<li>Horace: <b>Carpe diem</b>. Juvenal: <b>Mens sana in corpore sano</b>, <b>Panem et circenses</b>. Virgil: <b>Audentes fortuna iuvat</b>.</li>
<li>Before using a quotation: <b>true meaning</b>, <b>author</b>, <b>context</b>.</li>
<li>Phrases are analysed like any Latin sentence: verb, subject (nominative), object (accusative)…</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Other ways to learn them`,
      intro: `Latin phrases are easier to remember if you link them to images, stories and languages you already know.`,
      tabs: [
        {
          label: `🃏 Flashcards`,
          html: `<p>Read the Latin motto, try to translate it, then turn the card over.</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `Veni, vidi, vici`, back: `I came, I saw, I conquered (Caesar, 47 BC)` },
            { front: `Carpe diem`, back: `Seize the day (Horace)` },
            { front: `Panem et circenses`, back: `Bread and circus games (Juvenal)` },
            { front: `Per aspera ad astra`, back: `Through difficulties to the stars` },
            { front: `Cogito, ergo sum`, back: `I think, therefore I am (Descartes)` },
            { front: `Dura lex, sed lex`, back: `The law is harsh, but it is the law` },
            { front: `Memento mori`, back: `Remember that you must die` },
            { front: `E pluribus unum`, back: `From many, one (motto of the USA)` }
          ] }
        },
        {
          label: `🖼️ The mental cartoon`,
          html: `<p>Link each phrase to a funny and precise image: memory remembers images better than words.</p>
<ul>
<li>🎲 <b>Alea iacta est</b>: Caesar throwing a giant die into a river.</li>
<li>🍞🎪 <b>Panem et circenses</b>: an enormous loaf of bread sitting in the stands of the Circus Maximus.</li>
<li>🐢🏃 <b>Festina lente</b>: a tortoise wearing running shoes.</li>
<li>🧠💪 <b>Mens sana in corpore sano</b>: a brain lifting weights.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#e0f2fe"/>
<path d="M0 150 Q 150 120 300 150 T 600 150 L600 220 L0 220 Z" fill="#38bdf8"/>
<rect x="250" y="70" width="80" height="80" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="4" transform="rotate(-15 290 110)"/>
<circle cx="270" cy="95" r="7" fill="#0f172a"/><circle cx="305" cy="115" r="7" fill="#0f172a"/><circle cx="285" cy="130" r="7" fill="#0f172a"/>
<text x="110" y="120" font-size="64" text-anchor="middle">🤴</text>
<text x="300" y="40" font-size="22" fill="#0f172a" text-anchor="middle" font-weight="bold">ALEA IACTA EST!</text>
<text x="470" y="140" font-size="18" fill="#075985" font-weight="bold">Rubicon</text>
<text x="300" y="205" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">49 BC – the die is cast: there is no turning back</text>
</svg>`
        },
        {
          label: `🌍 Sister phrases in other languages`,
          html: `<p>Many languages have proverbs with the same meaning as the Latin mottos:</p>
<ul>
<li><i>Festina lente</i> ➜ 🇮🇹 "Chi va piano va sano e va lontano" (he who goes slowly goes safely and far); 🇬🇧 <i>More haste, less speed</i>; 🇯🇵 <i>Isogaba maware</i> (if you are in a hurry, take the long way round).</li>
<li><i>Repetita iuvant</i> ➜ 🇬🇧 <i>Practice makes perfect</i>; 🇷🇺 <i>Повторение — мать учения</i> (repetition is the mother of learning).</li>
<li><i>Audentes fortuna iuvat</i> ➜ 🇬🇧 <i>Fortune favours the bold</i>; 🇫🇷 <i>La fortune sourit aux audacieux</i>.</li>
<li><i>Verba volant…</i> ➜ 🇮🇹 "Carta canta" (paper sings: the written word is what counts).</li>
</ul>`
        },
        {
          label: `⏳ Timeline`,
          html: `<p>Put the phrases in chronological order: in which era was each one born?</p>`,
          widget: `timeline`,
          options: { events: [
            { year: -211, label: `Plautus: lupus est homo homini`, icon: `🐺` },
            { year: -49, label: `Alea iacta est`, icon: `🎲` },
            { year: -47, label: `Veni, vidi, vici`, icon: `⚔️` },
            { year: -23, label: `Horace: Carpe diem`, icon: `🌹` },
            { year: 120, label: `Juvenal: Mens sana…`, icon: `🧠` },
            { year: 1644, label: `Descartes: Cogito, ergo sum`, icon: `💭` },
            { year: 1894, label: `Citius, altius, fortius`, icon: `🏅` }
          ], unit: `years` }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: where Latin phrases come from`,
      nodes: [
        { id: `lat`, label: `Latin`, x: 50, y: 6, color: `#64748b`, html: `The language of Rome, then the common language of European culture.`, why: `After the fall of the Western Empire (476 AD) Latin remained the language of the Church, of schools and universities (Bologna, 1088) and of science until the eighteenth century: Newton wrote the <i>Principia</i> (1687) in Latin.` },
        { id: `stor`, label: `Historians`, x: 15, y: 30, color: `#ef4444`, html: `Suetonius, Plutarch: they hand down the phrases of the powerful.`, why: `Suetonius wrote the <i>Lives of the Caesars</i> around 121 AD, more than 150 years after Caesar, using archives and stories: this is why some phrases are uncertain.` },
        { id: `cesare`, label: `Julius Caesar`, x: 15, y: 58, color: `#dc2626`, html: `Alea iacta est, Veni vidi vici.`, why: `Caesar was also a great writer (<i>On the Gallic War</i>), famous for his dry and clear style: short and powerful phrases were his "signature".` },
        { id: `poeti`, label: `Poets`, x: 50, y: 30, color: `#a855f7`, html: `Horace, Virgil, Juvenal, Terence.`, why: `Latin poetry uses the rhythm of long and short syllables (metre): short, rhythmic verses are easy to remember, and many phrases are pieces of verse.` },
        { id: `orazio`, label: `Carpe diem`, x: 40, y: 58, color: `#c084fc`, html: `Horace, Odes 1,11.`, why: `Horace followed the philosophy of <b>Epicurus</b>: to be happy one must enjoy the present in moderation, without anxiety about a future we cannot control.` },
        { id: `giov`, label: `Mens sana…`, x: 62, y: 58, color: `#9333ea`, html: `Juvenal, Satire X.`, why: `Juvenal wrote <b>satires</b>, biting criticisms of Roman society: the phrase was an invitation to desire simple things, not wealth and power.` },
        { id: `med`, label: `Middle Ages and Church`, x: 85, y: 30, color: `#0ea5e9`, html: `Ora et labora, Errare humanum est, Verba volant…`, why: `In monasteries and universities Latin was the everyday language: new proverbs were born, short and in rhyme, easy to memorise.` },
        { id: `oggi`, label: `Mottos today`, x: 50, y: 88, color: `#22c55e`, html: `Olympics, states, cities, teams, schools.`, why: `Latin no longer belongs to a single nation: for this reason it is "neutral" and solemn, perfect for the mottos of international institutions, such as the EU or the Olympics.` }
      ],
      edges: [
        [`lat`, `stor`, `sources`], [`lat`, `poeti`, `sources`], [`lat`, `med`, `continues`], [`stor`, `cesare`, `recount`],
        [`poeti`, `orazio`, `Horace`], [`poeti`, `giov`, `Juvenal`], [`med`, `oggi`, `heritage`], [`cesare`, `oggi`, `still quoted`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: authors and meanings`,
      questions: [
        { type: `mc`, q: `Who wrote "Carpe diem"?`, options: [`Virgil`, `Horace`, `Caesar`], answer: 1, explain: `Horace, Odes 1,11.` },
        { type: `tf`, q: `For Juvenal "Mens sana in corpore sano" was an invitation to do sport.`, answer: false, explain: `It was advice on what to ask the gods for: health of body and mind instead of wealth and power.` },
        { type: `text`, q: `Complete: "Verba volant, scripta ___".`, answer: [`manent`], explain: `Words fly away, writings remain.` }
      ]
    }
  ],
  glossary: [
    { t: `Motto`, d: `Short phrase that expresses an ideal or a programme (of a person, city, institution).` },
    { t: `Quotation`, d: `Phrase taken from a specific author or work.` },
    { t: `Proverb`, d: `Phrase of popular wisdom, usually without an author.` },
    { t: `Asyndeton`, d: `A list of words without conjunctions: veni, vidi, vici.` },
    { t: `Alliteration`, d: `Repetition of the same sounds at the start of nearby words.` },
    { t: `Rubicon`, d: `River in Romagna, the border of Roman Italy crossed by Caesar in 49 BC.` },
    { t: `Ides of March`, d: `15 March in the Roman calendar: the day Caesar was killed (44 BC).` },
    { t: `Satire`, d: `Literary genre that criticises the faults of society with irony.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `"Veni, vidi, vici" announced Caesar's victory to…`, options: [`Pharsalus`, `Zela`, `Alesia`], answer: 1, explain: `Zela, 47 BC, against Pharnaces of Pontus.` },
      { type: `mc`, q: `"Alea iacta est" means…`, options: [`The die is cast`, `Fortune is against us`, `The river is wide`], answer: 0, explain: `Alea = die, iacta est = has been thrown.` },
      { type: `num`, q: `In what year BC did Caesar cross the Rubicon?`, answer: 49, tol: 0, explain: `On 10 January 49 BC.` },
      { type: `order`, q: `Put in chronological order.`, items: [`Alea iacta est (Rubicon)`, `Veni, vidi, vici (Zela)`, `Death of Caesar at the Ides of March`, `Horace publishes the Odes (Carpe diem)`, `Descartes: Cogito, ergo sum`], explain: `49 BC, 47 BC, 44 BC, 23 BC, 1637/1644 AD.` },
      { type: `mc`, q: `"Panem et circenses" criticises…`, options: [`a people who are content with food and shows`, `Roman bakers`, `horse races`], answer: 0, explain: `Juvenal accuses the people of no longer caring about politics.` },
      { type: `text`, q: `Translate "Carpe diem".`, answer: [`seize the day`, `seize the moment`, `seize the day.`], explain: `carpe = seize (imperative), diem = the day (accusative).` },
      { type: `mc`, q: `In "Carpe diem", "diem" is…`, options: [`nominative, subject`, `accusative, direct object`, `ablative, time`], answer: 1, explain: `Accusative singular of dies (5th declension).` },
      { type: `tf`, q: `"Tu quoque, Brute, fili mi" is certainly the phrase spoken by Caesar.`, answer: false, explain: `Suetonius reports a phrase in Greek or silence; the Latin version is traditional.` },
      { type: `mc`, q: `"Cogito, ergo sum" is by…`, options: [`Cicero`, `Descartes`, `Galileo`], answer: 1, explain: `The French philosopher René Descartes, 17th century.` },
      { type: `mc`, q: `Which motto belongs to the Olympics?`, options: [`E pluribus unum`, `Citius, altius, fortius`, `Fluctuat nec mergitur`], answer: 1, explain: `Faster, higher, stronger (since 2021 + communiter).` },
      { type: `text`, q: `Complete Virgil's motto: "Audentes fortuna ___" (helps).`, answer: [`iuvat`, `juvat`], explain: `iuvat = helps (3rd pers. sing., 1st conjugation).` },
      { type: `mc`, q: `"Festina lente" means…`, options: [`Hold a party slowly`, `Make haste slowly`, `The slow one wins the party`], answer: 1, explain: `Act quickly but without rash haste: motto of Augustus.` }
    ]
  }
});
