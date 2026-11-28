TOPIC('en', {
  id: `l3-lat-cesare`,
  title: `Julius Caesar`,
  intro: `The general who conquered Gaul is also the author of the book that tells the story of the conquest. <b>Gaius Julius Caesar</b> (100-44 BC) is perhaps the only politician in history who wrote his own story in crystal-clear prose and turned it into top-quality <b>propaganda</b>. His <i>Commentarii</i> are the Latin text with which students start reading real authors: straightforward sentences, fast-moving narrative, an "objective" tone. And that is exactly what makes them interesting: Caesar talks about himself in the <b>third person</b> ("Caesar...") and so seems like a neutral reporter, while he is building his own portrait as the indispensable commander. This lesson teaches you to read his texts both as <b>historical narrative</b> and as a <b>political message</b>. ⚔️`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. The man and his times`,
      html: `<p><b>Gaius Julius Caesar</b> was born in Rome on <b>12 or 13 July 100 BC</b> (some sources say 102) into a patrician family, the <i>gens Iulia</i>, which claimed descent from Iulus, son of Aeneas, and therefore from the goddess Venus. Politically he sided with the <b>populares</b> (the faction that sought the support of the people), and he was related by marriage to Gaius Marius (his aunt Julia was Marius' wife).</p>
<p>The main stages:</p>
<ul>
<li><b>60 BC</b>: the first triumvirate, a private agreement with <b>Pompey</b> and <b>Crassus</b>;</li>
<li><b>59 BC</b>: consul; then proconsul in the Gallic provinces (Cisalpine Gaul, Narbonese Gaul, Illyricum) for five years, later extended;</li>
<li><b>58-50 BC</b>: conquest of Gaul;</li>
<li><b>49 BC</b>: he crosses the <b>Rubicon</b> and starts the civil war against Pompey and the senate;</li>
<li><b>48 BC</b>: he defeats Pompey at <b>Pharsalus</b> (Greece); Pompey flees to Egypt and is murdered;</li>
<li><b>46-44 BC</b>: dictator, reforms (the <b>Julian calendar</b>, 45 BC);</li>
<li><b>15 March 44 BC</b> (the Ides of March): murdered in the senate by conspirators led by Brutus and Cassius.</li>
</ul>
<p>He was also a first-class <b>orator</b> (Cicero praised him), a grammarian (he wrote <i>De analogia</i>, on language) and a minor poet; but it is the <i>Commentarii</i> that have survived.</p>`
    },
    {
      type: `widget`, title: `Timeline of Caesar`,
      widget: `timeline`,
      options: {
        events: [
          { year: -100, label: `Birth`, icon: `👶` },
          { year: -60, label: `First triumvirate`, icon: `🤝` },
          { year: -58, label: `Start of the war in Gaul`, icon: `⚔️` },
          { year: -52, label: `Alesia: Vercingetorix surrenders`, icon: `🏰` },
          { year: -49, label: `Rubicon`, icon: `🌊` },
          { year: -48, label: `Pharsalus`, icon: `🛡️` },
          { year: -44, label: `Ides of March`, icon: `🗡️` }
        ],
        unit: `years`
      },
      caption: `From birth to death: all in 56 years.`
    },
    {
      type: `text`, title: `2. The Commentarii: what are they?`,
      html: `<p>The word <i>commentarii</i> ("notes, memoirs", from <i>commentari</i>, "to reflect") originally meant <b>rough notes</b>, raw material for historians. Caesar claims that this is all he is writing, but in reality he composes them with great skill; in the <i>Brutus</i> (262) Cicero writes that they are "<b>nudi, rectos et venusti</b>", "bare, straight and graceful" (free of ornament), and that they took away from professional historians any wish to rewrite the same events.</p>
<p>There are two works:</p>
<table>
<tr><th>Work</th><th>Content</th><th>Structure</th></tr>
<tr><td><b>De bello Gallico</b></td><td>conquest of Gaul, 58-52 BC (plus the events of 51 in Book VIII)</td><td>7 books by Caesar (one per year); Book <b>VIII</b> is by <b>Aulus Hirtius</b>, his officer</td></tr>
<tr><td><b>De bello civili</b></td><td>civil war against Pompey, 49-48 BC</td><td>3 books; unfinished (it breaks off in Egypt, in 48)</td></tr>
</table>
<p>The <i>De bello Gallico</i> opens with a famous description: <b>"Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur"</b> ("Gaul as a whole is divided into three parts: one is inhabited by the Belgae, another by the Aquitani, the third by those who in their own language are called Celts, in ours Gauls"). Caesar says "the Gauls", but he already has in mind the whole territory to be conquered.</p>`
    },
    {
      type: `svg`, title: `Caesar's Gaul`,
      caption: `The three parts of Gaul (Belgae, Celts, Aquitani) and the Roman Province in the south-east.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="26" font-size="19" font-weight="bold" fill="#1e3a8a" text-anchor="middle">GALLIA EST OMNIS DIVISA IN PARTES TRES</text>
<polygon points="260,50 480,50 500,120 280,110" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<text x="385" y="86" font-size="17" font-weight="bold" fill="#78350f" text-anchor="middle">BELGAE</text>
<polygon points="150,115 280,110 500,120 480,200 330,230 180,200" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<text x="330" y="168" font-size="17" font-weight="bold" fill="#14532d" text-anchor="middle">CELTAE (GALLI)</text>
<polygon points="110,200 180,200 330,230 340,275 120,275" fill="#fecaca" stroke="#991b1b" stroke-width="3"/>
<text x="225" y="255" font-size="17" font-weight="bold" fill="#7f1d1d" text-anchor="middle">AQUITANI</text>
<polygon points="330,230 480,200 570,230 560,275 340,275" fill="#e9d5ff" stroke="#6b21a8" stroke-width="3"/>
<text x="450" y="255" font-size="15" font-weight="bold" fill="#4c1d95" text-anchor="middle">PROVINCIA</text>
<text x="430" y="40" font-size="14" fill="#334155">Rhine ➜</text>
<text x="60" y="130" font-size="14" fill="#334155" text-anchor="middle">Atlantic</text>
<text x="60" y="150" font-size="14" fill="#334155" text-anchor="middle">Ocean</text>
<text x="570" y="90" font-size="14" fill="#334155" text-anchor="end">Germans</text>
</svg>`
    },
    {
      type: `remember`, title: `Caesar's style`,
      html: `<ul>
<li><b>Third person</b>: Caesar writes "Caesar", not "I": an effect of objectivity, of distance, almost of impersonality.</li>
<li><b>Linear syntax</b>: sentences with ablative absolutes, participles, clear subordinate clauses; few adjectives and metaphors. Ideal for Latin learners.</li>
<li><b>Fast narrative</b>: short sentences and chains of actions, concrete, technical (military) vocabulary.</li>
<li><b>Ethnographic excursuses</b>: Gauls (Book VI), Germans, druids, Britain, with digressions on the customs of peoples.</li>
<li><b>Indirect speech</b>: Caesar reports speeches in <i>oratio obliqua</i> (accusative + infinitive), without letting his enemies speak directly.</li>
<li><b>Propaganda</b>: he presents the wars as <b>defensive</b> or necessary (helping allies, the Germanic threat), the Gauls as traitors, the enemies as barbarians, and himself as a far-sighted and merciful commander.</li>
</ul>`
    },
    {
      type: `example`, title: `An episode: the Helvetii and Ariovistus`,
      html: `<p>In <b>58 BC</b> (Book I) the <b>Helvetii</b>, a people of present-day Switzerland, led by Orgetorix, decide to migrate towards western Gaul. Caesar, consul the year before and now governor, opposes them: he presents the migration as a <b>threat to the Roman Province</b>. He fights them at <b>Bibracte</b> and forces them to turn back. Then he moves against the Germanic king <b>Ariovistus</b>, who had occupied land belonging to the Aedui, allies of Rome, and defeats him near the Rhine (in present-day Alsace). In the narrative Caesar describes the speech with which he calms his soldiers, who are frightened of the Germans, and, with a clever psychological twist, declares that even if nobody follows him "he will go with the tenth legion alone". It is an ideal passage for understanding his propaganda and his storytelling skill.</p>`
    },
    {
      type: `example`, title: `Alesia (52 BC)`,
      html: `<p>52 BC is the year of the great revolt of <b>Vercingetorix</b>, the young leader of the Arverni. After his defeat at Gergovia, Caesar besieges him in the <i>oppidum</i> of <b>Alesia</b> (Burgundy). The Romans build <b>two concentric lines of fortifications</b>: an inner one of about 16 km facing the besieged, and an outer one of about 21 km facing the Gallic relief army (tens of thousands of men). Once both the besieged and the relief army are beaten, Vercingetorix surrenders. He was taken to Rome, kept prisoner for six years and executed after Caesar's triumph (46 BC). The Gallic war was over. In the <i>Commentarii</i> Caesar left an accurate technical description of the fortifications, still studied by archaeologists today (the excavations at Alise-Sainte-Reine have confirmed it).</p>`
    },
    {
      type: `3d`, title: `Caesar's campaigns in space and time`,
      scene: `spacetime`,
      options: {
        lat: [30, 56], lon: [-6, 32], years: [-60, -44],
        places: [
          { lat: 41.9, lon: 12.5, label: `Rome` },
          { lat: 48.9, lon: 2.3, label: `Lutetia (Paris)` }
        ],
        events: [
          { id: `elv`, lat: 46.9, lon: 4.3, year: -58, label: `Helvetii and Ariovistus`, html: `Caesar stops the migration of the Helvetii at Bibracte and defeats Ariovistus near the Rhine.` },
          { id: `bri`, lat: 51.1, lon: 1.4, year: -55, label: `First expedition to Britain`, html: `Caesar lands near Dover; a year later he repeats it with larger forces.`, causes: [`elv`] },
          { id: `ale`, lat: 47.5, lon: 4.5, year: -52, label: `Alesia`, html: `Vercingetorix surrenders: Gaul is conquered.`, causes: [`bri`] },
          { id: `rub`, lat: 44.1, lon: 12.4, year: -49, label: `Rubicon`, html: `Caesar crosses the river with his army: civil war begins.`, causes: [`ale`] },
          { id: `far`, lat: 39.3, lon: 22.4, year: -48, label: `Pharsalus`, html: `Victory over Pompey in Thessaly.`, causes: [`rub`] },
          { id: `ide`, lat: 41.9, lon: 12.5, year: -44, label: `Ides of March`, html: `Caesar is murdered in Rome.`, causes: [`far`] }
        ]
      },
      caption: `Rotate the map and climb through time: the base is space, the height is the year.`
    },
    {
      type: `decision`, title: `January 49 BC: cross the Rubicon?`,
      html: `<p>The senate, led by Pompey's supporters and by Cato, has ordered him to disband his army and return to Rome as a private citizen, where he risks being put on trial. Caesar is at <b>Ravenna</b> with a single legion: the <b>Rubicon</b> is the border between his province (Cisalpine Gaul) and Italy: entering Italy under arms is illegal and means civil war.</p>`,
      question: `What would you have done?`,
      options: [
        { label: `Obey, disband the army and go to Rome`, outcome: `He would have lost the immunity his command gave him: his enemies could have put him on trial and had him convicted. He would have avoided war, but risked his career and perhaps his life.` },
        { label: `Keep negotiating, wait and play for time`, outcome: `He had already tried: negotiations had failed. Time was on Pompey's side, as he would raise new legions.` },
        { label: `Cross the Rubicon with the army`, outcome: `Speed and surprise: Pompey and the senate abandoned Rome. Within two months Caesar controlled Italy, but he had started a civil war.` }
      ],
      answer: 2,
      explain: `Caesar crossed the river on the night of 10-11 January 49 BC (the traditional date; the calendar before the reform was out of step with the seasons). Suetonius attributes to him the phrase "alea iacta est" ("the die is cast"); Plutarch reports it in Greek. The civil war lasted years: Caesar won at Pharsalus (48), Thapsus (46) and Munda (45), but paid with his life: he was killed on the Ides of March 44.`
    },
    {
      type: `quiz`, title: `Mini-quiz: Caesar`,
      questions: [
        { type: `mc`, q: `How many books of the De bello Gallico were written by Caesar?`, options: [`7`, `8`, `3`], answer: 0, explain: `Seven books by Caesar; the eighth is by Hirtius.` },
        { type: `tf`, q: `Caesar writes the Commentarii in the first person.`, answer: false, explain: `He uses the third person: "Caesar".` },
        { type: `mc`, q: `In which year does Vercingetorix surrender?`, options: [`52 BC`, `58 BC`, `44 BC`], answer: 0, explain: `After the siege of Alesia.` },
        { type: `text`, q: `What is the name of the river crossed in 49 BC? (one word)`, answer: [`rubicon`, `the rubicon`, `rubicone`], explain: `The border between Cisalpine Gaul and Italy.` }
      ]
    },
    {
      type: `text`, title: `3. The De bello civili: Romans against Romans`,
      html: `<p>The <i>De bello civili</i> tells the story of the civil war in 3 books (49-48 BC): Book I, Spain and Italy; II, Massilia (Marseille) and Africa; III, Pharsalus and Egypt. Caesar needed to justify himself: he had led an army against Rome. So:</p>
<ul>
<li>he presents Pompey and the senators as <b>stubborn</b> and responsible for the war;</li>
<li>he stresses his own <b>mercy</b> (<i>clementia</i>), pardoning captured enemies, as at Corfinium;</li>
<li>he builds an image of himself as the <b>defender of legality and of the rights of the tribunes</b> (who had been driven out of Rome);</li>
<li>he tones down every emotion and every graphic description of massacres.</li>
</ul>
<p>Here too the prose is plain, but more bitter: a war between fellow citizens (<i>bellum civile</i>) is a tragedy, and after Pharsalus Caesar orders his men to spare the fellow citizens who surrender. The work breaks off in 48 BC in Egypt; other texts by his collaborators continue the story (<i>Bellum Alexandrinum, Africum, Hispaniense</i>).</p>`
    },
    {
      type: `text`, title: `4. Writing to win: politics in the Commentarii`,
      html: `<p>Historians ask: why does Caesar write? The traditional answers:</p>
<ul>
<li><b>Reporting to the homeland</b>: every year he sent a report to Rome, which was read in the senate and by the citizens. It made his achievements known and strengthened his reputation against his rivals;</li>
<li><b>Justification</b>: proving that the wars were legitimate. In Book I he presents the threat from the Helvetii and the Germans as the "casus belli"; in Book VII the Gauls rebel out of "treachery", not for freedom;</li>
<li><b>Memory</b>: leaving the official version to posterity. For two thousand years, what we know about the conquest of Gaul has come from him: <b>whoever writes history wins twice</b>.</li>
</ul>
<p>And yet there is a streak of honesty: Caesar describes his own tactical mistakes (such as the assault on Gergovia) and admits the defeat. The Gauls, too, are given noble features: Vercingetorix addresses his council with dignity, presenting himself as a defender of freedom (VII, 89).</p>`
    },
    {
      type: `curiosity`, title: `Did you know… "Veni, vidi, vici" is not in the Commentarii?`,
      html: `<p>The famous phrase <b>"Veni, vidi, vici"</b> ("I came, I saw, I conquered") is attributed to Caesar by Plutarch and Suetonius, after his lightning victory over King Pharnaces of Pontus at <b>Zela</b> (47 BC). It is not in the Commentarii but belongs to his triumph: the placards carried in the procession bore the words. Like "alea iacta est" (the die is cast) for the Rubicon, it is a summary that has conquered popular culture. Even "Tu quoque, Brute?" (Shakespeare's "Et tu, Brute?") is a later formula: at most, Suetonius reports, as a possibility, the Greek phrase "you too, my son?".</p>`
    },
    {
      type: `curiosity`, title: `Did you know… Caesar left words in our calendar?`,
      html: `<p>In 46 BC Caesar, with the help of the Alexandrian astronomer Sosigenes, reformed the calendar: this created the <b>Julian calendar</b>, with a year of 365 days and a leap year every four years. The month <i>Quintilis</i> was renamed <b>Iulius</b> (<b>July</b>) in his honour. The Julian calendar remained in use until 1582, when Pope Gregory XIII corrected it with the Gregorian calendar. And there is more: the Russian word <b>"tsar"</b> and the German <b>"Kaiser"</b> come from his family name <i>Caesar</i>: the emperor is "the Caesar".</p>`
    },
    {
      type: `widget`, title: `Practice: work and content`,
      widget: `match`,
      options: {
        pairs: [
          [`De bello Gallico`, `conquest of Gaul, 58-52 BC`],
          [`De bello civili`, `civil war against Pompey`],
          [`Book VIII of the Gallic War`, `written by Aulus Hirtius`],
          [`Alesia`, `siege and surrender of Vercingetorix`],
          [`Pharsalus`, `victory over Pompey, 48 BC`],
          [`Julian calendar`, `reform of 46-45 BC`]
        ]
      },
      caption: `Match each item with its content.`
    },
    {
      type: `alternatives`, title: `Other ways to read Caesar`,
      intro: `Caesar is an author to be "used": here are three approaches.`,
      tabs: [
        {
          label: `🧭 As war reporting`,
          html: `<p>Read the <i>De bello Gallico</i> as a correspondent's report: each book = one year of campaigning: <b>who</b> the enemies are, <b>where</b> the fighting happens, <b>how</b> the army advances, <b>what</b> Caesar decides. Mark the places on a map (Bibracte, Alesia, the Rhine, Britain): you will notice that the narrative follows the lines of march.</p>`
        },
        {
          label: `🕵️ As a case of propaganda`,
          html: `<p>Always ask yourself: <b>who is speaking, to whom, to achieve what?</b> Caesar writes for the Romans, whose support he wants. Notice where he uses words like <i>coactus</i> ("forced"), <i>iniuria</i> ("wrong, offence") or <i>perfidia</i> ("treachery"): they serve to prove Rome right. Compare him with other sources (Cicero, Plutarch, archaeology).</p>`
        },
        {
          label: `✏️ As a syntax workshop`,
          html: `<p>Caesar is the ideal author for practising <b>syntax</b>: in his pages you find ablative absolutes, conjunct participles, gerundives, accusative and infinitive, and <i>oratio obliqua</i> with the subjunctive. Take a paragraph, underline the main verb and the subordinate clauses, and build a tree diagram: his orderly prose is easier to "take apart" than Cicero's.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map of Caesar's work`,
      nodes: [
        { id: `ces`, label: `Caesar`, x: 50, y: 8, color: `#a855f7`, html: `General, politician, writer (100-44 BC).`, why: `His career shows the crisis of the Republic: a single man with a loyal army becomes stronger than the institutions. He writes to explain and justify this power.` },
        { id: `gal`, label: `De bello Gallico`, x: 20, y: 42, color: `#f59e0b`, html: `7 books (58-52), plus a Book VIII by Hirtius.`, why: `It tells the conquest of Gaul as a defensive necessity for Rome. Caesar gains glory, wealth and a loyal army.` },
        { id: `civ`, label: `De bello civili`, x: 50, y: 42, color: `#16a34a`, html: `3 books on the war with Pompey.`, why: `It aims to show that Caesar did not want the war and that his enemies are to blame. It highlights his clementia.` },
        { id: `sty`, label: `Style`, x: 80, y: 42, color: `#3b82f6`, html: `Third person, linearity, technical vocabulary.`, why: `Choosing to appear "unadorned" is a device: simplicity makes the account believable and hides the interpretation.` },
        { id: `pol`, label: `Propaganda`, x: 32, y: 78, color: `#ef4444`, html: `Defensive wars, barbarian enemies, a far-sighted and merciful Caesar.`, why: `In Rome what counts is public support: the account of his victories helps him keep power and avoid being put on trial by his rivals.` },
        { id: `rep`, label: `Legacy`, x: 70, y: 78, color: `#06b6d4`, html: `Calendar, the title "Caesar", a model of prose.`, why: `His language will be a model of purity for centuries; his name becomes an imperial title.` }
      ],
      edges: [
        [`ces`, `gal`, `writes`], [`ces`, `civ`, `writes`], [`gal`, `sty`, ``], [`civ`, `sty`, ``], [`gal`, `pol`, `serves`], [`civ`, `pol`, `serves`], [`ces`, `rep`, ``]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: style and content`,
      questions: [
        { type: `mc`, q: `Who wrote Book VIII of the De bello Gallico?`, options: [`Aulus Hirtius`, `Pompey`, `Cicero`], answer: 0, explain: `One of Caesar's officers.` },
        { type: `tf`, q: `Caesar was stabbed on the Ides of March 44 BC.`, answer: true, explain: `15 March 44 BC, in the senate.` },
        { type: `mc`, q: `What famous judgement does Cicero give on the Commentarii?`, options: [`bare, straight and graceful`, `long and boring`, `full of ornament`], answer: 0, explain: `Brutus 262.` },
        { type: `text`, q: `Which people, led by Orgetorix, attempted to migrate in 58 BC? (one word)`, answer: [`helvetii`, `the helvetii`, `helvetians`], explain: `The Helvetii.` }
      ]
    }
  ],
  glossary: [
    { t: `Commentarii`, d: `"Memoirs, notes": the name of Caesar's works.` },
    { t: `Populares`, d: `Roman political faction that sought the support of the people.` },
    { t: `Triumvirate`, d: `Private agreement between three powerful men (Caesar, Pompey, Crassus).` },
    { t: `Rubicon`, d: `River on the border between Cisalpine Gaul and Italy: crossing it under arms (49 BC) meant civil war.` },
    { t: `Oratio obliqua`, d: `Indirect speech: accusative + infinitive and subjunctive.` },
    { t: `Clementia`, d: `Mercy towards the defeated: Caesar's virtue in the De bello civili.` },
    { t: `Oppidum`, d: `Fortified town of the Gauls.` },
    { t: `Excursus`, d: `Descriptive digression (e.g. on the Gauls or the Germans).` },
    { t: `Casus belli`, d: `A reason that justifies going to war.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Which sentence opens the De bello Gallico?`, options: [`Gallia est omnis divisa in partes tres`, `Arma virumque cano`, `Quo usque tandem`], answer: 0, explain: `A famous opening.` },
      { type: `mc`, q: `What are the three parts of Gaul according to Caesar?`, options: [`Belgae, Aquitani and Celts (Gauls)`, `Helvetii, Germans and Britons`, `Gauls, Iberians and Ligurians`], answer: 0, explain: `Belgae, Aquitani, Celtae.` },
      { type: `tf`, q: `Book VIII of the De bello Gallico is by Caesar.`, answer: false, explain: `It is by Aulus Hirtius.` },
      { type: `text`, q: `What was the name of the Gallic chief who surrendered at Alesia? (one name)`, answer: [`vercingetorix`], explain: `Vercingetorix, of the Arverni.` },
      { type: `mc`, q: `Why does Caesar write in the third person?`, options: [`to give an impression of objectivity`, `because he could not use the first person`, `to copy Homer`], answer: 0, explain: `A rhetorical strategy.` },
      { type: `mc`, q: `Where was Pompey defeated in 48 BC?`, options: [`Pharsalus`, `Munda`, `Alesia`], answer: 0, explain: `In Thessaly.` },
      { type: `mc`, q: `What reform did Caesar carry out in 46-45 BC?`, options: [`the Julian calendar`, `the silver coinage`, `the republican constitution`], answer: 0, explain: `With Sosigenes.` },
      { type: `tf`, q: `The De bello civili is a complete work that tells the whole civil war up to 44 BC.`, answer: false, explain: `It breaks off in 48 BC, in Egypt.` },
      { type: `mc`, q: `What does "clementia" mean for Caesar?`, options: [`pardoning defeated enemies`, `punishing harshly`, `fleeing from battle`], answer: 0, explain: `A political virtue and a public image.` },
      { type: `order`, q: `Put in chronological order.`, items: [`First triumvirate`, `Start of the war in Gaul`, `Surrender of Vercingetorix`, `Crossing of the Rubicon`], explain: `60, 58, 52, 49 BC.` }
    ]
  }
});
