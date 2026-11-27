TOPIC('en', {
  id: "l1-sto-roma-repubblica",
  title: "Rome: from its origins to the Republic",
  intro: "A village of huts on a hill near a river, founded (according to legend) in <b>753 BC</b>. Three centuries later it was mistress of Italy; two centuries after that it ruled the whole Mediterranean. How was this possible? In this lesson we follow the birth of Rome between myth and archaeology, the rule of the kings, the <b>Republic</b> and its institutions, the struggle between patricians and plebeians, the conquest of Italy and the deadly duel with <b>Carthage</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. The origins of Rome: myth and archaeology",
      html: `<p>According to tradition, <b>Romulus</b> and <b>Remus</b>, twins descended from the Trojan hero <b>Aeneas</b> (who had fled from Troy), suckled by a she-wolf and raised by a shepherd, founded Rome on <b>21 April 753 BC</b>. Romulus ploughed the boundary furrow on the Palatine and killed Remus, who had jumped over it. The myth expresses the idea of a city born from violence but also from a divine mission.</p>
<p>Archaeology tells a different and more interesting story: between the 10th and 8th centuries BC there were <b>villages of Latin and Sabine shepherds and farmers</b> on the hills (Palatine, Capitoline, Quirinal...). The site was excellent: a ford across the <b>Tiber</b> (Tiber Island), the salt road (Via Salaria), hills that were easy to defend, close to the sea but not too close. Towards the end of the 8th-7th centuries BC the villages merged into a city, and the Forum (once a marsh) was drained with the <b>Cloaca Maxima</b>.</p>
<p>Historians therefore distinguish between <b>legend</b> (useful for understanding how the Romans saw themselves) and <b>historical sources</b> (archaeology, inscriptions).</p>`
    },
    {
      type: "3d",
      title: "3D map: the expansion of Rome",
      scene: "spacetime",
      caption: "The base is a map of Italy and the western Mediterranean, the height is time (753-146 BC). Tap the events: the arrows link causes and effects.",
      options: {
        lat: [34, 47],
        lon: [-2, 20],
        years: [-753, -140],
        places: [
          { lat: 41.9, lon: 12.5, label: "Rome" },
          { lat: 36.85, lon: 10.32, label: "Carthage" },
          { lat: 40.47, lon: 17.24, label: "Tarentum" },
          { lat: 38.19, lon: 15.55, label: "Messana" }
        ],
        events: [
          { id: "fondazione", lat: 41.89, lon: 12.49, year: -753, label: "Foundation of Rome", html: "Traditional date: 21 April 753 BC (Romulus).", causes: [] },
          { id: "cacciata", lat: 41.89, lon: 12.49, year: -509, label: "Expulsion of the kings", html: "In 509 BC, according to tradition, the Romans drive out the last king, Tarquin the Proud, and set up the Republic with two consuls.", causes: ["fondazione"] },
          { id: "secessione", lat: 41.89, lon: 12.5, year: -494, label: "First secession of the plebs", html: "The plebeians withdraw to the Sacred Mount: they obtain the tribunes of the plebs, with the right of veto.", causes: ["cacciata"] },
          { id: "dodici", lat: 41.89, lon: 12.49, year: -450, label: "Laws of the Twelve Tables", html: "Around 450 BC the laws, previously kept by the patricians, are engraved and made public: everyone can know them.", causes: ["secessione"] },
          { id: "veio", lat: 42.02, lon: 12.4, year: -396, label: "Conquest of Veii", html: "After a ten-year siege Rome takes the rich Etruscan city of Veii (Camillus).", causes: ["dodici"] },
          { id: "sannitiche", lat: 41.3, lon: 14.6, year: -321, label: "Samnite Wars", html: "Between 343 and 290 BC Rome defeats the Samnites of the Apennines; in 321 it suffers the humiliation of the Caudine Forks.", causes: ["veio"] },
          { id: "pirro", lat: 41.13, lon: 14.78, year: -275, label: "Pyrrhus defeated at Beneventum", html: "In 275 BC Rome beats Pyrrhus, king of Epirus, who had been called in by Tarentum. In 272 it also takes Tarentum: all of southern Italy is now Roman.", causes: ["sannitiche"] },
          { id: "messina", lat: 38.19, lon: 15.55, year: -264, label: "Start of the First Punic War", html: "In 264 BC Rome intervenes at Messana against Carthage: the struggle for Sicily begins.", causes: ["pirro"] },
          { id: "egadi", lat: 37.97, lon: 12.3, year: -241, label: "Battle of the Aegates", html: "In 241 BC the Roman fleet wins: Sicily becomes the first Roman province.", causes: ["messina"] },
          { id: "canne", lat: 41.3, lon: 16.13, year: -216, label: "Cannae", html: "In 216 BC Hannibal wipes out the Roman army: the worst defeat in Roman history, but the Italian allies (socii) remain loyal.", causes: ["egadi"] },
          { id: "zama", lat: 36.0, lon: 9.4, year: -202, label: "Zama", html: "In 202 BC Scipio defeats Hannibal in Africa: end of the Second Punic War.", causes: ["canne"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -146, label: "Destruction of Carthage", html: "In 146 BC, after the Third Punic War, Scipio Aemilianus destroys Carthage. In the same year Rome destroys Corinth.", causes: ["zama"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. The monarchy and the Etruscans",
      html: `<p>According to tradition Rome had <b>seven kings</b>: Romulus, Numa Pompilius, Tullus Hostilius, Ancus Marcius, Tarquinius Priscus, Servius Tullius and Tarquin the Proud. The last three were of <b>Etruscan</b> origin. The king was military leader, priest and supreme judge, elected by an assembly and assisted by the <b>Senate</b> (the council of elders, the <i>patres</i>).</p>
<p>The <b>Etruscans</b>, a people of Etruria (Tuscany and northern Lazio) organised in city-states, were skilled metalworkers, sailors and farmers. They dominated Rome in the 6th century BC, bringing: <b>urbanisation</b> (walls, waterworks, the temple of Jupiter on the Capitoline), the <b>alphabet</b> (derived from Greek), symbols of power (the <b>fasces</b> and <b>axe</b>, the toga, the curule chair), gladiatorial games and the art of divination practised by the haruspices.</p>
<p>King <b>Servius Tullius</b> divided the population into classes based on <b>census</b> (wealth), not just birth; Roman society was already divided into <b>patricians</b> (noble families, descendants of the <i>patres</i>) and <b>plebeians</b> (everyone else, free, often farmers and craftsmen, with no access to office), with <b>clients</b> bound to the patricians by a relationship of loyalty (<i>clientela</i>). In <b>509 BC</b> the patricians drove out the last king, Tarquin the Proud, accused of tyranny: the <b>Republic</b> was born (<i>res publica</i>, «the public thing»). From then on the title of king was hated in Rome.</p>`
    },
    {
      type: "svg",
      title: "The institutions of the Roman Republic",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="210" y="15" width="180" height="45" rx="8" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
<text x="300" y="44" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SENATE (300 members)</text>
<rect x="20" y="105" width="170" height="60" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="105" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2 CONSULS</text>
<text x="105" y="152" font-size="14" text-anchor="middle" fill="#0f172a">elected, serve 1 year</text>
<rect x="215" y="105" width="170" height="60" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">OTHER MAGISTRATES</text>
<text x="300" y="152" font-size="14" text-anchor="middle" fill="#0f172a">praetors, quaestors, aediles, censors</text>
<rect x="410" y="105" width="170" height="60" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="495" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">TRIBUNES OF THE PLEBS</text>
<text x="495" y="152" font-size="14" text-anchor="middle" fill="#0f172a">have the right of veto</text>
<rect x="150" y="215" width="300" height="55" rx="8" fill="#bae6fd" stroke="#075985" stroke-width="2"/>
<text x="300" y="240" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">COMITIA (people's assemblies)</text>
<text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">elect the magistrates and vote on laws</text>
<path d="M300 60 L300 105 M300 165 L300 215 M105 165 L105 190 L300 215 M495 165 L495 190 L300 215" stroke="#374151" stroke-width="2" fill="none"/>
</svg>`,
      caption: "Simplified diagram: power was divided among several bodies, to prevent any one person from becoming king."
    },
    {
      type: "text",
      title: "3. The institutions of the Republic",
      html: `<p>After their experience with the kings, the Romans built a state with a system of <b>checks and balances</b> (as the Greek historian <b>Polybius</b> later described it, seeing in it a «mixed constitution»: monarchy, aristocracy and democracy combined).</p>
<ul>
<li><b>Magistrates</b>: offices that were elected, annual, collegial (at least two people with the same power, who could block each other) and unpaid. The two <b>consuls</b> command the army and the city; the <b>praetors</b> administer justice; the <b>quaestors</b> handle finances; the <b>aediles</b> look after the city and the games; the <b>censors</b> (every 5 years) carry out the census and supervise public morals. In emergencies a <b>dictator</b> was appointed for a maximum of six months.</li>
<li><b>Senate</b>: about 300 former magistrates, members for life; it controls foreign policy, finances and religion. It was the real centre of power.</li>
<li><b>Comitia</b>: the people's assemblies (the <i>comitia centuriata</i> to elect senior magistrates and declare war, the <i>comitia tributa</i> for laws), with votes weighted by wealth.</li>
<li><b>Cursus honorum</b>: the fixed sequence of a political career: quaestor → aedile → praetor → consul.</li>
</ul>
<p>It was a system designed to <b>prevent tyranny</b>, but it was not a democracy: the votes of the rich counted for more, and for years access to the highest offices was reserved for patricians, and later for wealthy families. Women, slaves and foreigners were excluded.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: origins and institutions",
      questions: [
        { type: "mc", q: "In what year, according to tradition, was the last king of Rome driven out?", options: ["509 BC", "753 BC", "264 BC"], answer: 0, explain: "509 BC, Tarquin the Proud." },
        { type: "mc", q: "How many consuls were there and how long did they serve?", options: ["Two, one year", "One, for life", "Three, five years"], answer: 0, explain: "Two annual consuls: they could check each other." },
        { type: "tf", q: "The Roman Senate was made up of former magistrates.", answer: true, explain: "Members for life." },
        { type: "text", q: "What is the fixed sequence of offices in a Roman political career called?", answer: ["cursus honorum", "the cursus honorum"], explain: "Cursus honorum." }
      ]
    },
    {
      type: "text",
      title: "4. Patricians and plebeians: the Conflict of the Orders",
      html: `<p>In the early centuries of the Republic the <b>plebeians</b> (who served in the army but could not hold office or marry patricians) fought for equality. It was a long struggle but almost without civil war, using the weapon of <b>secession</b>: refusing to fight and withdrawing from the city.</p>
<ul>
<li><b>494 BC</b>: first secession to the Sacred Mount; the plebeians obtain the <b>tribunes of the plebs</b>, sacred and inviolable magistrates with the right of <b>veto</b> over the decisions of magistrates.</li>
<li><b>451-450 BC</b>: the <b>Laws of the Twelve Tables</b>, the first collection of written laws, displayed in the Forum: the law becomes knowable, no longer a monopoly of the patricians.</li>
<li><b>445 BC</b> (Lex Canuleia): marriages between patricians and plebeians are allowed.</li>
<li><b>367 BC</b> (Licinian-Sextian laws): one of the two consuls may be a plebeian; limits on holding public land.</li>
<li><b>287 BC</b> (Lex Hortensia): <b>plebiscites</b> (decisions of the plebeian assembly) have the force of law for all citizens.</li>
</ul>
<p>In the end a new ruling class emerged, the <b>nobilitas</b>, made up of patricians and wealthy plebeians who had held office. But the poor stayed poor: social problems (debts, land) returned later with the Gracchi.</p>`
    },
    {
      type: "decision",
      title: "Rome, 494 BC: should the plebs withdraw to the Sacred Mount?",
      html: `<p>You are a plebeian, a soldier and farmer. You are crushed by debt: patrician creditors can put those who don't pay in chains. Wars take you away from your fields. A group of plebeians proposes to <b>leave the city</b> and camp on the Sacred Mount: without them, Rome has no army to defend itself against its neighbours.</p>`,
      question: "What do you do?",
      options: [
        { label: "Obey and keep serving: the city needs everyone.", outcome: "You avoid a clash, but the patricians have no reason to change and the debts remain. The situation gets worse." },
        { label: "Join the secession to demand guarantees.", outcome: "The frightened Senate sends an envoy (Menenius Agrippa, who tells the fable of the belly and the limbs) and grants the tribunes of the plebs. A revolt without violence wins a fundamental gain." },
        { label: "Ask a famous general to seize power and punish the patricians.", outcome: "You risk ending up with a tyrant: the very danger the Republic wanted to avoid." }
      ],
      answer: 1,
      explain: "The plebs chose <b>secession</b>, a form of protest without weapons. The Senate gave in: the <b>tribunes of the plebs</b> were created. Roman history shows that even a group without formal power can win rights if it has a reliable weapon: withholding its military strength."
    },
    {
      type: "text",
      title: "5. The conquest of Italy",
      html: `<p>Between the 5th and 3rd centuries BC Rome went from a small town in Latium to mistress of the peninsula:</p>
<ul>
<li><b>Latium and Etruria</b>: after years of war against the Aequi, the Volsci and nearby Veii (taken in <b>396 BC</b> by Camillus). In <b>390 BC</b> the Gauls led by Brennus sacked Rome (but not the Capitoline, saved by the geese, according to legend).</li>
<li><b>Samnite Wars</b> (343-290 BC): against the Samnites of the Apennines. In 321 BC the Roman army suffered the humiliation of the <b>Caudine Forks</b>. Rome won by learning: it replaced the phalanx with the more flexible <b>manipular legion</b>.</li>
<li><b>Latin War</b> (340-338 BC): Rome dissolved the Latin League and annexed its cities.</li>
<li><b>Pyrrhus and Tarentum</b> (280-275 BC): Tarentum calls in the king of Epirus, <b>Pyrrhus</b>, who wins at Heraclea and Asculum but with very heavy losses (a «Pyrrhic victory»), and is then defeated at Beneventum (275 BC). In 272 Rome takes Tarentum: all of southern Italy is Roman.</li>
</ul>
<p><b>How did Rome govern Italy?</b> With a flexible system: not a single rule, but different agreements for each people.</p>
<ul>
<li>Full <b>citizenship</b> or citizenship <b>without the vote</b> for some nearby cities;</li>
<li><b>Allies</b> (<i>socii</i>) who kept their internal autonomy but had to provide soldiers;</li>
<li>Roman and Latin <b>colonies</b> in strategic positions;</li>
<li><b>Roads</b> (the Via Appia from 312 BC) to move the legions quickly.</li>
</ul>
<p>The strategy of «<b>divide et impera</b>» (divide and rule): reward the loyal, punish the rebels. It also offered a prospect: the allies could hope to gain citizenship. In this way Rome always had new recruits for its wars.</p>`
    },
    {
      type: "text",
      title: "6. Rome and Carthage: the Punic Wars",
      html: `<p>Carthage, a Phoenician colony (814 BC), was the naval and commercial power of the western Mediterranean, holding western Sicily, Sardinia and southern Spain. Rome, now mistress of Italy, found itself facing Carthage across the Strait of Messina. It was a struggle lasting more than a century.</p>
<ul>
<li><b>First Punic War</b> (264-241 BC): triggered by the intervention at Messana. Rome, which had no fleet, built one, copying Carthaginian ships and using the <b>corvus</b> («raven», a boarding bridge with a hook). Naval victories at Mylae (260) and the <b>Aegates Islands</b> (241 BC). Carthage gave up <b>Sicily</b>, the first Roman province; later also Sardinia and Corsica (238 BC).</li>
<li><b>Second Punic War</b> (218-201 BC): <b>Hannibal</b>, a young Carthaginian general, sets out from Spain and crosses the Alps with 37 elephants and about 26,000 men. He wins at the Ticinus and the Trebia (218), at <b>Lake Trasimene</b> (217) and at <b>Cannae</b> (216 BC), where he defeats a Roman army twice the size of his own by surrounding it (about 50,000 Roman dead). But most of the Italian allies stay loyal to Rome. <b>Fabius Maximus</b>, «the Delayer», wears Hannibal down by avoiding major battles. <b>Scipio</b> takes the war to Africa and defeats Hannibal at <b>Zama</b> (202 BC), earning the nickname «Africanus». Carthage loses its fleet and its colonies and has to pay a huge indemnity.</li>
<li><b>Third Punic War</b> (149-146 BC): <b>Cato the Censor</b> ended every speech with «Carthago delenda est» («Carthage must be destroyed»). Rome besieges and <b>destroys Carthage</b> (146 BC), under <b>Scipio Aemilianus</b>. The territory becomes the province of Africa.</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: why didn't Hannibal win?",
      html: `<p>Hannibal won almost every battle, yet he lost the war. Why? Try to reason like a historian:</p>
<ol>
<li><b>Allies</b>: he hoped the Italian allies would rebel against Rome: almost all stayed loyal, because Rome guaranteed them benefits and protection.</li>
<li><b>Supplies</b>: he lived «off the land» without a secure base, while Rome had almost unlimited reserves of men.</li>
<li><b>The sea</b>: Rome controlled the sea and could move troops to Spain and Africa.</li>
<li><b>Strategy</b>: Scipio's counter-attack in Africa forced Hannibal to return to Carthage.</li>
</ol>
<p>The lesson: winning battles is not enough; you need a <b>political and military structure</b> able to withstand defeats. Rome had one, thanks to its system of alliances.</p>`
    },
    {
      type: "example",
      title: "Worked example: reading the map of a Roman road",
      html: `<p>The consular roads linked Rome to the provinces: the <b>Via Appia</b> (312 BC) reached Brundisium (Brindisi), the Via Aurelia ran along the Tyrrhenian coast, the Via Flaminia led to the Adriatic, and the Via Aemilia (187 BC) crossed the Po Valley. Built with layers of gravel, sand and basalt slabs, they had <b>milestones</b> showing the distance from Rome. Many modern Italian roads still follow those routes: the SS 1 Aurelia, the Appia, the Flaminia. Check a map of your area: are there any Roman road names near you?</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Cincinnatus, the farmer dictator",
      html: `<p>In <b>458 BC</b> Rome was under attack from the Aequi. The Senate appointed as dictator <b>Lucius Quinctius Cincinnatus</b>, a former consul who farmed his small plot of land. They found him with his plough in hand. Cincinnatus defeated the enemy in sixteen days, then gave up his office and went back to his field. For the Romans he was the model of the virtuous citizen who uses power only to serve the state. George Washington was called «the American Cincinnatus» for giving up his command after the War of Independence.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The geese of the Capitol",
      html: `<p>In 390 BC the Gauls of Brennus were about to take the Romans sheltering on the Capitoline by surprise at night, but the geese sacred to Juno, woken by the noise, began to honk. The consul Manlius woke up and drove back the attack. After the ransom was agreed, according to tradition, Brennus threw his sword onto the scales used to weigh the gold: «Woe to the vanquished» (<i>Vae victis</i>). How much is history and how much legend? The Gauls really did sack Rome around that year, and the memory of that disaster marked the Romans for a long time.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand republican Rome",
      intro: "A complex political system, a gradual conquest: here are some analogies.",
      tabs: [
        {
          label: "🎭 A team without a single captain",
          html: `<p>Imagine a football team with <b>two captains</b> elected every year, who can block each other, and a <b>council of former captains</b> (the Senate) that advises and decides the most important questions. Every season they change: nobody stays captain too long. The fans, that is the assemblies, vote for the captains and the rules.</p>
<p>Why? To stop anyone from becoming a <b>tyrant</b>. After their experience with Tarquin, the Romans had an almost religious dread of monarchy. The system worked as long as Rome was small: with the empire and over-powerful generals it went into crisis (we will see this later).</p>`
        },
        {
          label: "🔗 The system of alliances",
          html: `<p>Rome's strength was not only its army, but its <b>network of allies</b>:</p>
<ul>
<li>Roman citizens (even without the vote): pay taxes, provide soldiers.</li>
<li>Latins: private rights similar to Romans, suppliers of troops.</li>
<li>Italian socii: local autonomy, but soldiers for Rome.</li>
</ul>
<p>Each ally was tied directly to Rome, not to the other allies: a hub and spokes, not a league. In return there was protection, plunder and the chance to gain citizenship. In the Second Punic War, after Cannae, this network held and made the difference.</p>`
        },
        {
          label: "🗺️ Spin the globe",
          html: `<p>Rotate the globe and follow the Punic Wars.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Rome", color: "#ef4444" },
              { lat: 36.85, lon: 10.32, label: "Carthage", color: "#7c3aed" },
              { lat: 37.97, lon: 12.3, label: "Aegates Islands", color: "#f97316" },
              { lat: 37.88, lon: -1.13, label: "Cartagena (Spain)", color: "#7c3aed" },
              { lat: 45.0, lon: 9.7, label: "Trebia", color: "#f97316" },
              { lat: 41.3, lon: 16.13, label: "Cannae", color: "#f97316" },
              { lat: 36.0, lon: 9.4, label: "Zama", color: "#f97316" }
            ],
            routes: [{ points: [3, 4, 5], color: "#7c3aed" }, { points: [0, 6], color: "#ef4444" }]
          }
        },
        {
          label: "📅 Timeline",
          html: `<p>Scroll through the key stages of Rome's history.</p>`,
          widget: "timeline",
          options: {
            unit: "years",
            events: [
              { year: -753, label: "Foundation (tradition)", icon: "🐺" },
              { year: -509, label: "Expulsion of the kings", icon: "👑" },
              { year: -494, label: "Secession and tribunes", icon: "✊" },
              { year: -450, label: "Twelve Tables", icon: "📜" },
              { year: -396, label: "Conquest of Veii", icon: "🏹" },
              { year: -312, label: "Via Appia", icon: "🛣️" },
              { year: -264, label: "First Punic War", icon: "⚓" },
              { year: -216, label: "Cannae", icon: "🐘" },
              { year: -202, label: "Zama", icon: "🛡️" },
              { year: -146, label: "End of Carthage", icon: "🔥" }
            ]
          }
        },
        {
          label: "🃏 Revision cards",
          html: `<p>Flip the cards to revise.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Patricians / plebeians", back: "Noble families with full rights / the people without access to office (at first)" },
              { front: "Tribune of the plebs", back: "Inviolable magistrate with the right of veto (494 BC)" },
              { front: "Twelve Tables", back: "Rome's first written laws (451-450 BC)" },
              { front: "Socii", back: "Italian allies who supplied soldiers to Rome" },
              { front: "Cannae", back: "216 BC: Rome's worst defeat, at the hands of Hannibal" },
              { front: "Zama", back: "202 BC: Scipio defeats Hannibal" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: why Rome won",
      nodes: [
        { id: "posizione", label: "Position and resources", x: 50, y: 6, color: "#16a34a", html: "Ford across the Tiber, fertile plain, defensible hills.", why: "A central position in the peninsula made it possible to control land and sea routes. The large Latin population supplied men for the legions." },
        { id: "istituzioni", label: "Mixed institutions", x: 20, y: 30, color: "#7c3aed", html: "Consuls, Senate, comitia, tribunes.", why: "Checks and balances prevented both tyranny and anarchy. The Senate's decisions gave continuity to foreign policy, even with annual magistrates." },
        { id: "lotta", label: "Conflict of the Orders", x: 80, y: 30, color: "#ef4444", html: "From the tribunes (494 BC) to the Lex Hortensia (287 BC).", why: "The plebeians, who fought in the army, won rights in return for their service: in this way civil war was avoided." },
        { id: "esercito", label: "Citizen army", x: 15, y: 58, color: "#f97316", html: "Manipular legion, discipline, roads.", why: "Citizen-soldiers were defending their own fields: they were motivated. The flexible legion adapted to different terrain and enemies." },
        { id: "alleanze", label: "System of alliances", x: 50, y: 58, color: "#0ea5e9", html: "Citizenship, socii, colonies.", why: "Rome offered the defeated a status and the hope of full citizenship: so their loyalty held firm even after Cannae." },
        { id: "mare", label: "Naval power", x: 85, y: 58, color: "#eab308", html: "The fleet built in the First Punic War.", why: "Rome learned from its enemy: to defeat Carthage it had to become a naval power." },
        { id: "conquista", label: "Rule of the Mediterranean", x: 50, y: 92, color: "#334155", html: "Sicily, Spain, Africa, Macedon, Greece.", why: "After Carthage no power could compete with Rome: in the 2nd century BC it conquered the Mediterranean and had to face new internal problems." }
      ],
      edges: [
        ["posizione", "esercito", "feeds the"],
        ["istituzioni", "lotta", "evolve through the"],
        ["lotta", "esercito", "motivates the"],
        ["esercito", "alleanze", "rests on the"],
        ["alleanze", "conquista", "make possible the"],
        ["mare", "conquista", "opens the way to"],
        ["istituzioni", "alleanze", "guarantee the"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Punic Wars",
      questions: [
        { type: "mc", q: "Who defeated Hannibal at Zama?", options: ["Scipio", "Fabius Maximus", "Pyrrhus"], answer: 0, explain: "Scipio, later called Africanus." },
        { type: "tf", q: "After the battle of Cannae the Italian allies abandoned Rome en masse.", answer: false, explain: "Most of them stayed loyal." },
        { type: "text", q: "What was the first Roman province, won in the First Punic War?", answer: ["sicily"], explain: "Sicily." },
        { type: "order", q: "Put in order.", items: ["First Punic War", "Cannae", "Zama", "Destruction of Carthage"], explain: "264, 216, 202, 146 BC." }
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Rome: traditional foundation 753 BC; seven kings, the last three Etruscan; expulsion of the kings in 509 BC → <b>Republic</b>.</li>
<li>Institutions: <b>consuls</b> (2, annual), <b>Senate</b>, <b>comitia</b>, magistrates, <b>tribunes of the plebs</b>.</li>
<li>Patricians vs plebeians: tribunes (494), Twelve Tables (450), Licinian-Sextian laws (367), Lex Hortensia (287).</li>
<li>Conquest of Italy: Veii, Samnites, Pyrrhus (275), Tarentum (272); allies and colonies.</li>
<li>Punic Wars (264-146 BC): Sicily, Hannibal (Cannae 216), Zama 202, destruction of Carthage 146.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Res publica", d: "«The public thing»: the Roman Republic." },
    { t: "Patricians", d: "Noble families who held the offices in the early centuries." },
    { t: "Plebeians", d: "Non-noble citizens, at first excluded from office." },
    { t: "Consul", d: "One of the two supreme magistrates, serving for one year." },
    { t: "Senate", d: "Council of former magistrates, the centre of power." },
    { t: "Tribune of the plebs", d: "Magistrate who protected the plebeians with the right of veto." },
    { t: "Dictator", d: "Magistrate with full powers for six months in an emergency." },
    { t: "Socii", d: "Rome's Italian allies." },
    { t: "Province", d: "Territory outside Italy governed by a Roman magistrate." },
    { t: "Legion", d: "The basic unit of the Roman army." },
    { t: "Carthago delenda est", d: "«Carthage must be destroyed»: Cato's motto." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which event marks the beginning of the Roman Republic?", options: ["The expulsion of Tarquin the Proud (509 BC)", "The foundation of Rome", "The destruction of Carthage"], answer: 0, explain: "According to tradition, 509 BC." },
      { type: "mc", q: "Which people dominated Rome in the 6th century BC?", options: ["The Etruscans", "The Samnites", "The Gauls"], answer: 0, explain: "The last three kings were Etruscan." },
      { type: "tf", q: "There were two consuls and they held office for one year.", answer: true, explain: "They could block each other." },
      { type: "text", q: "What was the plebeian magistrate with the right of veto called?", answer: ["tribune of the plebs", "tribune", "the tribune of the plebs", "plebeian tribune"], explain: "The tribune of the plebs." },
      { type: "mc", q: "What are the Laws of the Twelve Tables?", options: ["Rome's first written laws", "A treaty with Carthage", "A military reform"], answer: 0, explain: "Around 450 BC." },
      { type: "mc", q: "Which king, called in by Tarentum, tried to conquer southern Italy?", options: ["Pyrrhus", "Hannibal", "Brennus"], answer: 0, explain: "Pyrrhus, king of Epirus." },
      { type: "order", q: "Put in chronological order.", items: ["Expulsion of the kings", "Twelve Tables", "Conquest of Veii", "First Punic War", "Zama"], explain: "509, 450, 396, 264, 202 BC." },
      { type: "mc", q: "Why could Hannibal not defeat Rome despite winning at Cannae?", options: ["The Italian allies stayed loyal to Rome", "Rome had no soldiers", "Carthage did not want the war"], answer: 0, explain: "Rome's network of alliances held." },
      { type: "num", q: "In what year BC was Carthage destroyed?", answer: 146, tol: 0, explain: "146 BC." },
      { type: "tf", q: "Rome conquered Italy by imposing the same legal status on all peoples.", answer: false, explain: "It used different statuses: citizenship, alliance, colonies." },
      { type: "mc", q: "What was the first Roman province?", options: ["Sicily", "Egypt", "Greece"], answer: 0, explain: "After the First Punic War." }
    ]
  }
});
