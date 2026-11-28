TOPIC('en', {
  id: "l3-sto-monarchie-nazionali",
  title: "The national monarchies",
  intro: "In the Late Middle Ages power was fragmented: feudal lords, cities, bishops, emperor and pope. Between the 14th and 15th centuries, in some parts of Europe, kings managed to impose themselves on the other powers and to build <b>territorial states</b> with an administration, an army, a tax system and a shared identity: the <b>national monarchies</b> were born. The testing ground was the long <b>Hundred Years' War</b> between France and England (1337-1453), which changed the way war was fought and strengthened national feeling (with the figure of <b>Joan of Arc</b>). In Spain, the union of the kingdoms of Castile and Aragon and the end of the <b>Reconquista</b> with the capture of Granada (1492) created another great state. Meanwhile Germany and Italy remained fragmented, with consequences that lasted for centuries.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "1. What is a national monarchy?",
      html: `<p>Under feudalism the king was "first among equals": the great lords had their own lands, armies and courts of justice. Between the end of the Middle Ages and the beginning of the modern age, some rulers transformed the feudal monarchy into a <b>national monarchy</b>, that is, a central power with these features:</p>
<ul>
<li>a relatively compact <b>territory</b>, with increasingly well-defined borders;</li>
<li>royal <b>officials</b> (lawyers, officers, treasurers) who administer and collect taxes in the name of the Crown, instead of relying on the nobles;</li>
<li><b>regular taxation</b>: permanent taxes that make it possible to pay a professional <b>army</b>, with mercenaries and foot soldiers in the king's service, and not only feudal knights;</li>
<li><b>royal justice</b> that prevails over that of the lords;</li>
<li>an idea of <b>common identity</b>: language, traditions, loyalty to the sovereign and to the "realm".</li>
</ul>
<p>The process was neither linear nor the same everywhere. Kings were helped by the <b>bourgeoisie</b> (merchants, lawyers, bankers), who preferred a strong power able to guarantee order and trade; they were opposed by the great feudal lords, the cities and the clergy. Where the king managed to centralise power (France, Spain), a strong state was born; where the tradition of parliaments and councils prevailed (England), a monarchy with more limited powers emerged; where the princes remained strong (Germany, Italy), no unified state was formed.</p>`
    },
    {
      type: "text",
      title: "2. France and England: the start of the Hundred Years' War",
      html: `<p>France and England had been intertwined for centuries: from 1066, with William's Norman Conquest, the kings of England were also dukes of Normandy and, under the Plantagenets, lords of vast lands in France (Aquitaine, Gascony). They were therefore <b>sovereign kings</b> in England but <b>vassals</b> of the King of France for their French fiefs: an intolerable situation for both sides.</p>
<p>In <b>1328</b> Charles IV died without sons, and the direct Capetian line died out. The throne passed to his cousin <b>Philip VI of Valois</b>; but the King of England, <b>Edward III</b>, nephew of Charles IV on his mother's side (Isabella, daughter of Philip IV the Fair), claimed the French crown. There were other reasons for conflict too: control of <b>Flanders</b>, whose rich textile towns bought English wool but were fiefs of the King of France; and <b>Gascony</b> and the wine trade. In <b>1337</b> began what later generations would call the <b>Hundred Years' War</b>, because it lasted (with long truces) until <b>1453</b>, a full 116 years, in several phases.</p>
<p>The first phase went England's way. The English, few in number but well organised, had their <b>longbowmen</b>, archers with long yew bows who could shoot 10-12 arrows a minute at over 200 metres. At <b>Crécy</b> (1346) the English archers cut down the French cavalry; in 1347 they captured <b>Calais</b>; at <b>Poitiers</b> (1356) the Black Prince, Edward III's son, defeated the French and captured King <b>John II</b>. With the Peace of <b>Brétigny</b> (1360) France gave up large regions. The same period saw the plague and the Jacquerie: France seemed ruined.</p>
<p>Then the French, under <b>Charles V</b> (1364-1380) and the commander Bertrand du Guesclin, avoided pitched battles, retook towns and castles, and rebuilt a regular army funded by permanent taxes.</p>`
    },
    {
      type: "svg",
      title: "The longbow against the cavalry",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect x="0" y="220" width="600" height="80" fill="#a3e635"/>
<rect x="30" y="170" width="120" height="50" rx="6" fill="#bae6fd" stroke="#075985" stroke-width="2"/>
<text x="90" y="202" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">English archers</text>
<path d="M155 180 Q300 40 440 170" stroke="#475569" stroke-width="3" stroke-dasharray="6 5" fill="none"/>
<path d="M155 190 Q300 80 440 185" stroke="#475569" stroke-width="3" stroke-dasharray="6 5" fill="none"/>
<path d="M155 200 Q300 120 440 200" stroke="#475569" stroke-width="3" stroke-dasharray="6 5" fill="none"/>
<text x="300" y="60" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">a rain of arrows (10-12 a minute)</text>
<rect x="440" y="160" width="130" height="60" rx="6" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="505" y="187" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">French</text>
<text x="505" y="207" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">cavalry</text>
<text x="300" y="262" font-size="15" text-anchor="middle" fill="#0f172a">Crécy 1346 · Poitiers 1356 · Agincourt 1415</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#0f172a">Mud, narrow ground and arrows stop the armoured knight</text>
</svg>`,
      caption: "The armoured knight, symbol of feudalism, loses his military supremacy."
    },
    {
      type: "3d",
      title: "3D map: the Hundred Years' War",
      scene: "spacetime",
      caption: "Height = time (1330-1490). Tap the events to see causes and effects.",
      options: {
        lat: [36, 56],
        lon: [-10, 8],
        years: [1330, 1495],
        places: [
          { lat: 48.86, lon: 2.35, label: "Paris" },
          { lat: 51.5, lon: -0.12, label: "London" },
          { lat: 40.4, lon: -3.7, label: "Madrid" },
          { lat: 37.18, lon: -3.6, label: "Granada" }
        ],
        events: [
          { id: "inizio", lat: 48.86, lon: 2.35, year: 1337, label: "The war begins", html: "Edward III claims the crown of France.", causes: [] },
          { id: "crecy", lat: 50.25, lon: 1.88, year: 1346, label: "Crécy", html: "The English archers rout the French cavalry.", causes: ["inizio"] },
          { id: "poitiers", lat: 46.58, lon: 0.34, year: 1356, label: "Poitiers", html: "John II of France is captured by the Black Prince.", causes: ["crecy"] },
          { id: "bretigny", lat: 46.4, lon: 1.0, year: 1360, label: "Peace of Brétigny", html: "France cedes large territories to England.", causes: ["poitiers"] },
          { id: "azincourt", lat: 50.46, lon: 2.13, year: 1415, label: "Agincourt", html: "Henry V of England defeats the French again.", causes: ["bretigny"] },
          { id: "troyes", lat: 48.3, lon: 4.08, year: 1420, label: "Treaty of Troyes", html: "Henry V is recognised as heir to the French throne.", causes: ["azincourt"] },
          { id: "orleans", lat: 47.9, lon: 1.9, year: 1429, label: "Orléans relieved", html: "Joan of Arc breaks the siege; Charles VII is crowned at Reims.", causes: ["troyes"] },
          { id: "rouen", lat: 49.44, lon: 1.1, year: 1431, label: "Joan burned at the stake", html: "Joan is condemned and burned in Rouen.", causes: ["orleans"] },
          { id: "castillon", lat: 44.85, lon: -0.03, year: 1453, label: "Castillon", html: "The last battle: the war ends, won with French cannons.", causes: ["rouen"] },
          { id: "granada", lat: 37.18, lon: -3.6, year: 1492, label: "Fall of Granada", html: "End of the Spanish Reconquista.", causes: [] },
          { id: "bosworth", lat: 52.58, lon: -1.41, year: 1485, label: "Bosworth", html: "Henry Tudor wins and ends the Wars of the Roses.", causes: ["castillon"] }
        ]
      }
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Hundred Years' War (part one)",
      questions: [
        { type: "mc", q: "Why did Edward III claim the throne of France?", options: ["He was Philip IV's grandson on his mother's side", "He was the pope's vassal", "He was Joan of Arc's son"], answer: 0, explain: "His mother Isabella was the daughter of Philip IV the Fair." },
        { type: "mc", q: "Which weapon gave the English victory at Crécy?", options: ["The longbow", "The arquebus", "The cannon"], answer: 0, explain: "The archers cut down the cavalry." },
        { type: "num", q: "In what year did the Hundred Years' War begin?", answer: 1337, tol: 0, explain: "It ended in 1453, after 116 years (with long truces)." }
      ]
    },
    {
      type: "text",
      title: "3. Agincourt, Joan of Arc and the French victory",
      html: `<p>In the 15th century the war became entangled with a French civil war between the factions of the <b>Armagnacs</b> (loyal to the Dauphin) and the <b>Burgundians</b> (allies of the English). The young and ambitious King <b>Henry V</b> of England landed in Normandy and won at <b>Agincourt</b> (25 October 1415), a muddy battle in which the English archers, few against many, defeated the French nobility. With the Treaty of <b>Troyes</b> (1420), Henry V married Catherine of France and was recognised as heir to the throne, bypassing the Dauphin <b>Charles</b>. France seemed lost: Paris and the North were in the hands of the English and the Burgundians.</p>
<p>At this point, in 1429, <b>Joan of Arc</b> appeared: a young peasant girl from Lorraine (born around 1412), convinced that God had given her the mission of freeing France. She obtained an audience with the Dauphin Charles, led the army to <b>Orléans</b>, which was besieged by the English, and on 8 May 1429 the city was relieved. On 17 July Charles VII was crowned at <b>Reims</b>, the traditional coronation city. In 1430 Joan was captured by the Burgundians and handed over to the English: after a church trial, she was condemned as a heretic and <b>burned in Rouen</b> on 30 May 1431. A new trial rehabilitated her in 1456; she was canonised in 1920.</p>
<p>Joan is a symbol of the birth of a <b>national feeling</b>: the French began to see themselves as a people with a "legitimate" king to defend against the foreigner. The recovery was both military and political: <b>Charles VII</b> made peace with Burgundy (Peace of Arras, 1435), created a standing army with the <i>compagnies d'ordonnance</i> and a regular tax (the <i>taille</i>), and used <b>artillery</b> (the cannons of the Bureau brothers), which brought down the walls of fortresses. The victory at Formigny in 1450 and the one at <b>Castillon</b> in <b>1453</b> (where French artillery routed the English) ended the conflict. The English Crown kept only Calais (lost in 1558).</p>`
    },
    {
      type: "decision",
      title: "1429: what to do with Joan of Arc?",
      html: `<p>You are the Dauphin Charles, heir to an almost lost kingdom. One day a girl of about 17 turns up at Chinon: she cannot read or write, says she speaks with angels and promises to free Orléans and have you crowned king at Reims. Your advisers are sceptical: some think she is a fraud, others that she is dangerous. You have very few resources and a demoralised army.</p>`,
      question: "What would you have done?",
      options: [
        { label: "Turn her away: you cannot trust a peasant girl who has visions.", outcome: "You would have avoided the risk of looking foolish, but also lost the chance to restore the troops' morale." },
        { label: "Have her examined by theologians, then give her a chance: entrust her with a contingent and see.", outcome: "This is what happened. At Poitiers theologians questioned her and found nothing suspicious. Charles sent her to Orléans." },
        { label: "Use her only as a symbol, keeping her away from the fighting.", outcome: "You would have exploited the symbol without the risk, but Joan's strength lay precisely in leading the soldiers on the field." }
      ],
      answer: 1,
      explain: "Charles VII gambled on Joan: the relief of Orléans (May 1429) and the coronation at Reims gave back legitimacy and confidence to the French cause. But when Joan was captured in 1430, the king did nothing to ransom her: a choice judged ungrateful today, but consistent with the reason of state of the time."
    },
    {
      type: "text",
      title: "4. After the war: France and England compared",
      html: `<p><b>France.</b> With the end of the war the French monarchy emerged stronger. <b>Louis XI</b> (1461-1483), nicknamed "the universal spider" for his web of intrigues, defeated the powerful house of <b>Burgundy</b>: Duke <b>Charles the Bold</b> died on the battlefield at <b>Nancy</b> (1477) and much of his territory passed to France. The king established regular taxation, a standing army and a system of officials. The <b>Estates General</b> (an assembly of clergy, nobility and Third Estate) had only an advisory role and were rarely summoned. It was an increasingly <b>centralised</b> monarchy, foreshadowing absolutism.</p>
<p><b>England.</b> Defeat left a legacy of instability: for thirty years, from 1455 to 1485, the <b>Wars of the Roses</b> were fought between two branches of the Plantagenet dynasty, the house of <b>Lancaster</b> (red rose) and the house of <b>York</b> (white rose). In 1485, at <b>Bosworth</b>, Richard III of York was defeated and killed by <b>Henry Tudor</b> (Henry VII), related to the Lancasters, who married Elizabeth of York and united the two branches: the Tudor rose is red and white. The Tudors built a strong monarchy, making shrewd use of Parliament.</p>
<p>The English <b>Parliament</b>, born in the 13th century (after <b>Magna Carta</b> in 1215, by which King John "Lackland" acknowledged that he had to respect certain rules and could not impose taxes without the barons' consent), divided into the <b>House of Lords</b> (nobles and higher clergy) and the <b>House of Commons</b> (representatives of the counties and towns). The king could not impose new taxes without its consent: here is a fundamental difference between England and France, which would have consequences in the following centuries.</p>`
    },
    {
      type: "text",
      title: "5. The Spain of the Catholic Monarchs",
      html: `<p>In the Iberian peninsula the story was different. After the Arab conquest (711) the Christian kingdoms of the North had begun the <b>Reconquista</b>, a slow reconquest. In the 15th century five kingdoms remained: <b>Castile</b> (the largest), <b>Aragon</b> (with possessions in the Mediterranean: Sardinia, Sicily, later Naples), <b>Navarre</b>, <b>Portugal</b> and the Muslim kingdom of <b>Granada</b>.</p>
<p>In <b>1469</b> <b>Isabella of Castile</b> and <b>Ferdinand of Aragon</b> married: the two kingdoms remained separate in their laws and institutions, but followed a common policy. Called the "<b>Catholic Monarchs</b>" (a title granted by Pope Alexander VI in 1496), they strengthened royal power against the high nobility, reorganised justice and policing (the <i>Santa Hermandad</i>) and brought the military orders under control.</p>
<p>On 2 January <b>1492</b> <b>Granada</b>, the last Muslim kingdom in Spain, fell after ten years of war: the Reconquista was complete. The state project was also <b>religious</b>: Isabella and Ferdinand wanted unity of faith. In 1478 they had obtained the pope's permission to set up the <b>Spanish Inquisition</b>, a state tribunal led by the Dominican Tomás de Torquemada, which persecuted above all the <b>conversos</b> (converted Jews suspected of still practising their old faith). With the Alhambra Decree (March 1492) the <b>Jews</b> were forced to choose between baptism and exile: around 100,000-200,000 people (estimates vary) left Spain, many for Portugal, the Ottoman Empire or Italy. Later it would be the turn of converted Muslims (the moriscos).</p>
<p>In 1492 the monarchs also financed the voyage of <b>Christopher Columbus</b>, which would open a whole continent to the Spanish empire. A Spain unified under one faith, rich with gold from overseas, would become, under Charles V, the dominant power of the 16th century.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the national monarchies",
      intro: "A comparison table, a metaphor and a classification activity.",
      tabs: [
        {
          label: "⚖️ Three monarchies compared",
          html: `<table>
<tr><th></th><th>France</th><th>England</th><th>Spain</th></tr>
<tr><td>Dynasty</td><td>Valois</td><td>Tudor (from 1485)</td><td>Trastámara (Isabella and Ferdinand)</td></tr>
<tr><td>Key event</td><td>Victory in the Hundred Years' War (1453)</td><td>Bosworth (1485)</td><td>Granada (1492)</td></tr>
<tr><td>Relationship with the assembly</td><td>Weak Estates General</td><td>Strong Parliament (taxes)</td><td>Cortes of Castile and Aragon with limited weight</td></tr>
<tr><td>Identity</td><td>Joan of Arc, the French language</td><td>The English language, a Church tied to the Crown (later)</td><td>Unity of the Catholic faith</td></tr>
</table>`
        },
        {
          label: "🏘️ From \"block of flats\" to \"house\"",
          html: `<p>The feudal system is like a block of flats where every tenant has the keys to their own flat and each one defends themselves. The national monarchy is like turning it into a single house with a single owner (the king), who charges a regular rent (taxes), pays permanent guards (the army), enforces a single set of rules (royal justice) and gives everyone the same flag. Who gains? The merchants and the lawyers. Who loses? The old feudal lords, who see their privileges disappear: that is why they often rebel.</p>`
        },
        {
          label: "🗂️ Classify the features",
          html: `<p>Which features belong to the feudal state and which to the national monarchy?</p>`,
          widget: "classify",
          options: { groups: ["Feudal state", "National monarchy"], items: [
            ["🏰 Justice of the local lords", 0],
            ["💰 Regular tax", 1],
            ["🛡️ Standing army", 1],
            ["🐎 Feudal knights", 0],
            ["📜 Royal officials", 1],
            ["🗺️ Uncertain borders and fragmented power", 0]
          ] }
        }
      ]
    },
    {
      type: "text",
      title: "6. Those left behind: Germany and Italy",
      html: `<p>In the Holy Roman Empire the emperor was elected: the <b>Golden Bull</b> of Charles IV (1356) fixed the number of <b>electors</b> at seven (three archbishops, the King of Bohemia, the Count Palatine, the Duke of Saxony, the Margrave of Brandenburg). Princes and free cities grew ever more powerful, and the emperor became almost a figure of prestige, whose only real strength came from his hereditary lands: from 1438 the <b>Habsburg</b> dynasty held the crown almost without interruption. In 1495 the Diet of Worms proclaimed a perpetual "public peace", but a unified German state did not emerge.</p>
<p>In Italy, as we will see in the next lesson, a system of regional states prevailed (Milan, Venice, Florence, the Papal States, the Kingdom of Naples): lively and rich, but unable to unite. When in 1494 the France of Charles VIII invaded Italy, the peninsula discovered its own weakness: the national monarchies, larger and better organised, were by now stronger than the small Italian states.</p>`
    },
    {
      type: "example",
      title: "Example: cannons change warfare",
      html: `<p>A medieval castle, with high, thin walls, could resist a siege for months. With the bombards of the 15th century (like those used by the French in 1449-1453), a stone wall collapsed within a few days: in 1453 itself, just as the Hundred Years' War was ending, the Turks of Mehmed II conquered Constantinople with huge cannons. Whoever could afford artillery, gun-founders and trained infantry had an enormous advantage. Only a state with a powerful tax system could buy it: that is why the cannon favoured kings and harmed the feudal lords with their private castles.</p>`
    },
    {
      type: "example",
      title: "Example: the tax that creates a state",
      html: `<p>Under feudalism, when the king wanted to wage war, he had to ask the lords to bring their knights for forty days a year: then they went home. With the permanent <i>taille</i> of Charles VII (1439), however, the king collected a fixed sum every year and used it to pay professional soldiers all year round. The result: the army no longer depended on the goodwill of the nobles. A regular tax, then, is the real "engine" of a modern state: whoever collects it controls men, weapons and officials.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The Agincourt gesture",
      html: `<p>It is said that before Agincourt the French had threatened to cut off two fingers (index and middle) of any English archers they captured, to stop them drawing the bow. After the victory, the archers supposedly showed the enemy their intact fingers: the "V" gesture as a sign of defiance. It is most likely a later legend; what remains true is that the archers were the heart of the English army.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The Catholic Monarchs and Columbus",
      html: `<p>In 1492 Spain and Columbus came together in the same year in which Granada fell and the Jews were expelled. For many historians this is no coincidence: the Spanish monarchy, busy consolidating its state and its prestige, was looking for new wealth and new spaces for the spread of the faith. It was the very men of the Reconquista (the conquistadores, "conquerors") who set out for America.</p>`
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>National monarchy: royal officials, taxation, army, royal justice, common identity.</li>
<li>Hundred Years' War (1337-1453): Crécy 1346, Poitiers 1356, Agincourt 1415, Orléans 1429, Castillon 1453.</li>
<li>Joan of Arc, burned in Rouen in 1431, symbol of French national feeling.</li>
<li>England: Magna Carta, Parliament, Wars of the Roses (1455-85), the Tudors.</li>
<li>Spain: marriage of Isabella and Ferdinand (1469), <b>Granada 1492</b>, the Inquisition, expulsion of the Jews.</li>
<li>Germany and Italy remain fragmented.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Map: the birth of the national monarchies",
      nodes: [
        { id: "crisi", label: "Crisis of feudalism", x: 50, y: 4, color: "#f59e0b", html: "Plague, wars, decline of the cavalry.", why: "The 14th-century crisis weakened the lords and opened up space for the kings, who had officials and taxes at their disposal." },
        { id: "guerra", label: "Hundred Years' War", x: 20, y: 30, color: "#ef4444", html: "France and England (1337-1453).", why: "War forces kings to create permanent armies and taxes: war produces the state." },
        { id: "arma", label: "New weapons", x: 50, y: 30, color: "#0ea5e9", html: "Longbow, infantry, artillery.", why: "The new weapons undermine the feudal cavalry and the lords' castles, and favour those who can pay for them." },
        { id: "borg", label: "Bourgeoisie", x: 80, y: 30, color: "#16a34a", html: "Merchants and lawyers.", why: "The bourgeoisie wants order and the same laws for everyone: it supports the king against the feudal lords." },
        { id: "francia", label: "Centralised France", x: 15, y: 65, color: "#7c3aed", html: "Charles VII, Louis XI.", why: "By defeating England and Burgundy, the king imposes taxes and royal justice." },
        { id: "ing", label: "England and Parliament", x: 50, y: 65, color: "#14b8a6", html: "Magna Carta, House of Commons, the Tudors.", why: "Taxes require the consent of Parliament: royal power is limited." },
        { id: "spagna", label: "United Spain", x: 85, y: 65, color: "#b91c1c", html: "Isabella, Ferdinand, Granada 1492.", why: "The Reconquista provides a common goal, and the faith a basis for identity." }
      ],
      edges: [
        ["crisi", "guerra", "fuels"],
        ["guerra", "arma", "produces"],
        ["borg", "francia", "supports"],
        ["guerra", "francia", "strengthens"],
        ["arma", "ing", "changes"],
        ["crisi", "spagna", "favours"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: France, England, Spain",
      questions: [
        { type: "mc", q: "What happened at Granada in 1492?", options: ["The last Muslim kingdom in Spain fell", "The university was founded", "Magna Carta was signed"], answer: 0, explain: "The end of the Reconquista." },
        { type: "tf", q: "The Wars of the Roses ended with Henry Tudor's victory at Bosworth.", answer: true, explain: "In 1485 Richard III was killed in battle." },
        { type: "mc", q: "Which city did Joan of Arc free in 1429?", options: ["Orléans", "Calais", "Rouen"], answer: 0, explain: "A few months later Charles VII was crowned at Reims." },
        { type: "order", q: "Put in order", items: ["Crécy", "Agincourt", "Orléans", "Castillon"], explain: "1346, 1415, 1429, 1453." }
      ]
    }
  ],
  glossary: [
    { t: "National monarchy", d: "A territorial state with a king who centralises taxation, the army and justice." },
    { t: "Hundred Years' War", d: "Conflict between France and England (1337-1453)." },
    { t: "Longbow", d: "The English long bow, a decisive weapon at Crécy and Agincourt." },
    { t: "Magna Carta", d: "Document of 1215 by which the King of England accepted limits on his own power." },
    { t: "Parliament", d: "English assembly of nobles, clergy and representatives of the towns, with power over taxation." },
    { t: "Reconquista", d: "The Christian reconquest of the Iberian peninsula, completed in 1492." },
    { t: "Spanish Inquisition", d: "State tribunal set up in 1478 to prosecute heretics." },
    { t: "Conversos", d: "Jews in Spain who had converted to Christianity." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which feature distinguishes a national monarchy from the feudal system?", options: ["The king has his own officials, taxes and army", "The lords have private armies", "The pope appoints the king"], answer: 0, explain: "Power is centralised in the hands of the sovereign." },
      { type: "num", q: "In what year did the Hundred Years' War end?", answer: 1453, tol: 0, explain: "With the Battle of Castillon." },
      { type: "tf", q: "At Crécy the French cavalry was defeated by the English archers.", answer: true, explain: "The longbow was a deadly long-range weapon." },
      { type: "text", q: "What is the name of the military leader who was burned in Rouen in 1431?", answer: ["joan of arc", "joan", "jeanne d'arc", "saint joan of arc"], explain: "She was later rehabilitated and canonised." },
      { type: "mc", q: "What were the Wars of the Roses?", options: ["A struggle between Lancaster and York for the English throne", "A war between France and Spain", "A peasant revolt"], answer: 0, explain: "1455-1485, ended at Bosworth." },
      { type: "mc", q: "Which event of 1469 foreshadows a united Spain?", options: ["The marriage of Isabella of Castile and Ferdinand of Aragon", "Magna Carta", "The Golden Bull"], answer: 0, explain: "The two kingdoms kept separate institutions but a common policy." },
      { type: "tf", q: "The Spanish Inquisition was set up in 1478 with the pope's consent.", answer: true, explain: "It was, however, controlled by the Crown." },
      { type: "mc", q: "Why could the King of England not impose taxes as he pleased?", options: ["Parliament's consent was needed", "The pope forbade it", "There were no merchants"], answer: 0, explain: "It is a consequence of Magna Carta and of the development of Parliament." },
      { type: "order", q: "Put in order", items: ["Start of the war", "Poitiers", "Agincourt", "Granada"], explain: "1337, 1356, 1415, 1492." },
      { type: "mc", q: "Why did artillery favour kings?", options: ["It was expensive and only kings had the means to buy it", "It was forbidden to nobles", "It was invented by the popes"], answer: 0, explain: "The walls of feudal castles could not withstand cannons." }
    ]
  }
});
