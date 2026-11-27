TOPIC('en', {
  id: "l1-sto-guerre-persiane-pericle",
  title: "The Persian Wars and the Age of Pericles",
  intro: "In <b>490 BC</b> a small army of Athenian citizens faced the troops of the greatest empire in the world at Marathon and defeated them. Ten years later, at Salamis, a Greek fleet destroyed that of Xerxes. It was the moment when a handful of free cities saved the West from the rule of an absolute king: or at least that is how the Greeks told it. From that victory came the <b>golden age of Athens</b>, with <b>Pericles</b>, the most advanced democracy of the ancient world, the Parthenon, theatre and philosophy. But Athens' very power sparked the war with Sparta, which brought it to ruin.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. The Persian Empire and the revolt of the Ionian cities",
      html: `<p>In the 6th century BC the <b>Persians</b>, led by <b>Cyrus the Great</b> (559-530 BC), created the largest empire ever seen: from the Aegean to India, including Babylon, Lydia and Egypt (conquered by Cambyses in 525 BC). Under <b>Darius I</b> (522-486 BC) the empire was divided into <b>satrapies</b> ruled by satraps and linked by the <b>Royal Road</b> with its relay stations; the Persians respected the languages and religions of the peoples they ruled, but demanded <b>tribute</b> and soldiers.</p>
<p>The <b>Greek cities of Asia Minor</b> (Ionia: Miletus, Ephesus, Phocaea) were subjects of the Persians. In <b>499 BC</b> they rebelled (the <b>Ionian Revolt</b>) and <b>Athens</b> and <b>Eretria</b> sent a few ships to help. The Persians crushed the revolt, destroying Miletus (494 BC), and Darius decided to punish the two «rebel» cities of mainland Greece. For the Persians it was a matter of imperial order; for the Greeks it would become a struggle for freedom.</p>`
    },
    {
      type: "text",
      title: "2. The First Persian War and Marathon (490 BC)",
      html: `<p>In <b>490 BC</b> a Persian fleet landed on the plain of <b>Marathon</b>, about 40 km from Athens, after destroying Eretria. The Athenians, led by the general <b>Miltiades</b>, fielded about 10,000 hoplites (helped by around a thousand Plataeans) against Persian forces estimated at many thousands. Sparta, for religious reasons, arrived late.</p>
<p>The Greek <b>phalanx</b>, with bronze armour, shields and long spears, charged at a run, strengthening its wings and surrounding the Persian centre. It was a crushing victory: the Persians lost about 6,400 men, the Athenians 192. Legend says that a messenger, <b>Pheidippides</b>, ran all the way to Athens to announce «We have won!» and died from the effort (hence the <b>marathon</b> of 42.195 km). The historian Herodotus says instead that Pheidippides ran to Sparta to ask for help before the battle, about 240 km in two days.</p>
<p>After Marathon, Darius prepared a new expedition, but he died in 486 BC.</p>`
    },
    {
      type: "3d",
      title: "3D map: from the Persian Wars to the Peloponnesian War",
      scene: "spacetime",
      caption: "The base is a map of the eastern Mediterranean, the height is time (500-400 BC). Tap the events: the arrows link causes and effects.",
      options: {
        lat: [33, 42],
        lon: [14, 30],
        years: [-500, -400],
        places: [
          { lat: 37.97, lon: 23.72, label: "Athens" },
          { lat: 37.08, lon: 22.43, label: "Sparta" },
          { lat: 37.53, lon: 27.28, label: "Miletus" },
          { lat: 37.07, lon: 15.29, label: "Syracuse" }
        ],
        events: [
          { id: "ionica", lat: 37.53, lon: 27.28, year: -499, label: "Ionian Revolt", html: "The Greek cities of Asia rebel against the Persians. Athens and Eretria send ships: this is the pretext for war.", causes: [] },
          { id: "maratona", lat: 38.15, lon: 23.96, year: -490, label: "Marathon", html: "Miltiades' Athenians defeat the Persian landing: 192 Athenian dead against about 6,400 Persians. A victory for the citizen army.", causes: ["ionica"] },
          { id: "termopili", lat: 38.8, lon: 22.54, year: -480, label: "Thermopylae", html: "August 480 BC: Leonidas, with 300 Spartiates and a few thousand allies, holds back Xerxes' army for three days, then is outflanked and dies with his men.", causes: ["maratona"] },
          { id: "atene480", lat: 37.97, lon: 23.72, year: -480, label: "Athens evacuated and burned", html: "The Persians occupy Athens and burn the Acropolis. On Themistocles' advice the Athenians had taken refuge on their ships and on Salamis.", causes: ["termopili"] },
          { id: "salamina", lat: 37.95, lon: 23.5, year: -480, label: "Salamis", html: "September 480 BC: Themistocles' Greek fleet lures the Persian ships into the strait of Salamis and destroys them: Xerxes returns to Asia.", causes: ["atene480"] },
          { id: "platea", lat: 38.22, lon: 23.27, year: -479, label: "Plataea and Mycale", html: "In 479 BC the Greeks win at Plataea (on land) and Mycale (at sea): the Persian threat is over.", causes: ["salamina"] },
          { id: "delo", lat: 37.4, lon: 25.27, year: -478, label: "Delian League", html: "In 478-477 BC Athens leads a league of poleis based on Delos to continue the war: each city pays tribute or supplies ships. Athens soon turns it into an empire.", causes: ["platea"] },
          { id: "partenone", lat: 37.97, lon: 23.72, year: -447, label: "Parthenon", html: "Under Pericles work begins (447 BC) on the Parthenon on the Acropolis, partly funded by the League's treasury (moved to Athens in 454).", causes: ["delo"] },
          { id: "peloponneso", lat: 37.08, lon: 22.43, year: -431, label: "Peloponnesian War", html: "In 431 BC war breaks out between Athens and Sparta (with the Peloponnesian League): it will last until 404 BC.", causes: ["partenone"] },
          { id: "sicilia", lat: 37.07, lon: 15.29, year: -413, label: "Disaster in Sicily", html: "The Athenian expedition to Syracuse (415-413 BC) ends with the destruction of the fleet and the army.", causes: ["peloponneso"] },
          { id: "egospotami", lat: 40.35, lon: 26.55, year: -405, label: "Aegospotami", html: "In 405 BC the Spartan fleet, funded by the Persians, destroys the Athenian fleet. Athens surrenders in 404.", causes: ["sicilia"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. The Second Persian War: Thermopylae and Salamis (480-479 BC)",
      html: `<p>In <b>480 BC</b> the new king <b>Xerxes</b> invaded Greece with an immense army (Herodotus' figure of over a million is exaggerated: perhaps 100,000-200,000 men) and a large fleet. The Greek poleis, though divided, formed an alliance, with Sparta leading the army and Athens the fleet.</p>
<ul>
<li><b>Thermopylae</b>: in the narrow pass, the Spartan king <b>Leonidas</b> holds out for three days; betrayed by a Greek who shows the Persians a mountain path, he is outflanked and dies with his men. It is a sacrifice that strengthens the resistance.</li>
<li><b>Athens evacuated</b>: the Athenians leave the city, which is looted and burned.</li>
<li><b>Salamis</b> (September 480 BC): <b>Themistocles</b>, an Athenian general, had had a large fleet of <b>triremes</b> (warships with three banks of oars) built with the income from the silver mines of Laurium. He lures the Persians into the strait, where their larger ships get in each other's way. It was a decisive victory.</li>
<li><b>Plataea and Mycale</b> (479 BC): victories on land and at sea that free Greece.</li>
</ul>
<p>For the Greeks it was the victory of the citizens' <b>freedom</b> over the despotism of a king, as <b>Herodotus</b>, the «father of history», told it in his <i>Histories</i>. But remember that this story too was written by the winners: for the Persians it was a minor expedition to a distant province.</p>`
    },
    {
      type: "svg",
      title: "The Battle of Salamis (diagram)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#bae6fd"/>
<path d="M0 0 L600 0 L600 60 Q520 90 480 130 L480 300 L0 300 Z" fill="#d6d3d1"/>
<path d="M0 300 L0 120 Q80 160 120 200 L200 300 Z" fill="#a8a29e"/>
<text x="60" y="260" font-size="16" font-weight="bold" fill="#0f172a">ATTICA</text>
<text x="500" y="40" font-size="16" font-weight="bold" fill="#0f172a">SALAMIS</text>
<g fill="#2563eb" stroke="#1e3a8a" stroke-width="2">
<polygon points="260,210 300,200 300,220"/><polygon points="260,240 300,230 300,250"/><polygon points="250,180 290,170 290,190"/>
</g>
<g fill="#dc2626" stroke="#7f1d1d" stroke-width="2">
<polygon points="440,130 400,120 400,140"/><polygon points="430,170 390,160 390,180"/><polygon points="460,100 420,90 420,110"/><polygon points="420,210 380,200 380,220"/>
</g>
<path d="M330 140 L360 140" stroke="#dc2626" stroke-width="3"/>
<text x="120" y="110" font-size="15" fill="#1e3a8a" font-weight="bold">Greek fleet</text>
<text x="400" y="260" font-size="15" fill="#7f1d1d" font-weight="bold">Persian fleet</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#0f172a">Simplified diagram: in the strait the Persian ships cannot manoeuvre.</text>
</svg>`,
      caption: "At Salamis the smaller, more agile Greek ships used the narrow space against the larger Persian fleet."
    },
    {
      type: "quiz",
      title: "Mini-quiz: the Persian Wars",
      questions: [
        { type: "mc", q: "Who led the Athenians at Marathon?", options: ["Miltiades", "Pericles", "Leonidas"], answer: 0, explain: "The general Miltiades, in 490 BC." },
        { type: "mc", q: "In which naval battle did Themistocles defeat the Persians?", options: ["Salamis", "Mycale", "Aegospotami"], answer: 0, explain: "At Salamis, September 480 BC." },
        { type: "tf", q: "Leonidas and his men defended the pass of Thermopylae for months.", answer: false, explain: "They held out for three days, then were outflanked." },
        { type: "text", q: "What is the name of the «father of history» who told the story of the Persian Wars?", answer: ["herodotus", "herodotos"], explain: "Herodotus of Halicarnassus." }
      ]
    },
    {
      type: "text",
      title: "4. From the Delian League to the Athenian Empire",
      html: `<p>After the victory, in <b>478-477 BC</b> Athens founded the <b>Delian League</b> (named after Delos, where the treasury was kept) with hundreds of poleis around the Aegean. Each ally supplied ships or paid a <b>tribute</b> (<i>phoros</i>). Athens commanded the fleet and used the money to its own advantage: in <b>454 BC</b> the treasury was moved to Athens, and anyone who wanted to leave the League (like Naxos and Thasos) was forced back into line. The League became a true <b>maritime empire</b>, which made Athens rich and made Sparta fear it.</p>
<p>The fact that a democratic power oppressed other free cities is an example of a contradiction that the Greeks themselves already noticed: the freedom of Athenian citizens rested on the allies' tribute and on the work of slaves.</p>`
    },
    {
      type: "text",
      title: "5. Pericles and Athenian democracy",
      html: `<p><b>Pericles</b> (c. 495-429 BC), an aristocrat but leader of the popular party, was re-elected <b>strategos</b> (military commander, one of the few elected offices) almost every year from 443 to 429 BC. The historian <b>Thucydides</b> said that Athens was «a democracy in name, but in fact the rule of its first citizen».</p>
<ul>
<li><b>Ecclesia</b>: the assembly of all adult male citizens (about 30,000-40,000), which decides on war, peace, laws and tribute; voting is by show of hands.</li>
<li><b>Boule of 500</b>: a council chosen by lot that prepares proposals; each of its sections takes turns to run day-to-day government.</li>
<li><b>Heliaia</b>: large people's courts with jurors chosen by lot (as many as 501).</li>
<li><b>Lot</b>: almost all offices are assigned by drawing lots, because everyone is considered equally capable.</li>
<li><b>Misthos</b>: Pericles introduces payment for those holding public office, so that the poor can also take part without losing out.</li>
</ul>
<p>In his famous <b>Funeral Oration</b> in honour of the fallen (431 or 430 BC), reported by Thucydides, Pericles says: «our constitution is called a democracy because power is in the hands not of a few but of the many». But remember the limits: <b>women, slaves and metics</b> (resident foreigners) were left out of power: about 3/4 of the population.</p>`
    },
    {
      type: "text",
      title: "6. The golden age: art, theatre, thought",
      html: `<p>With the League's tribute, Athens became the cultural centre of the Greek world.</p>
<ul>
<li><b>Architecture</b>: on the Acropolis, rebuilt after the Persian fire, rises the <b>Parthenon</b> (447-432 BC), the temple of Athena designed by Ictinus and Callicrates with sculptures directed by <b>Phidias</b>. It is a model of harmony and proportion (Doric order).</li>
<li><b>Theatre</b>: born in the festivals of Dionysus, with the tragedies of <b>Aeschylus</b> (<i>The Persians</i>), <b>Sophocles</b> (<i>Oedipus the King</i>, <i>Antigone</i>) and <b>Euripides</b> (<i>Medea</i>), and the comedies of <b>Aristophanes</b>. Theatre was a civic experience: citizens debated justice and power.</li>
<li><b>History</b>: <b>Herodotus</b> and <b>Thucydides</b> (author of a history of the Peloponnesian War based on evidence and interviews, without divine intervention).</li>
<li><b>Philosophy</b>: the <b>sophists</b> teach the art of speaking; <b>Socrates</b> (469-399 BC) questions citizens about virtue and justice («I know that I know nothing»).</li>
<li><b>Medicine</b>: <b>Hippocrates</b> of Kos, who looks for natural causes of disease.</li>
</ul>
<p>At that time Athens had about 250,000-300,000 inhabitants (including Attica), with a port, the Piraeus, among the busiest in the Mediterranean.</p>`
    },
    {
      type: "decision",
      title: "Athens, 431 BC: face Sparta in the field or shut yourself behind the Long Walls?",
      html: `<p>You are Pericles. Sparta and the Peloponnesian League are about to invade Attica with an army of hoplites far stronger than yours. But Athens has the most powerful <b>fleet</b> in the Mediterranean and the <b>Long Walls</b> connecting the city to the port of Piraeus, through which it can receive grain by sea.</p>`,
      question: "Which strategy do you choose?",
      options: [
        { label: "Face the Spartans in open battle outside the walls.", outcome: "Sparta has the best land army: Athens risks a decisive defeat right from the start." },
        { label: "Bring the whole population inside the walls, let the fields be ravaged and strike from the sea with the fleet.", outcome: "It is a sensible strategy: Athens cannot be starved as long as it controls the sea. But overcrowding in the city will have a terrible cost: the plague." },
        { label: "Ask for peace at once, giving up control of the Aegean.", outcome: "Athens would lose its empire and its tribute: its wealth and its power." }
      ],
      answer: 1,
      explain: "Pericles chose the <b>defensive strategy</b>: shelter inside the walls and strike by sea. In 430 BC a <b>plague</b> broke out in the overcrowded city and killed perhaps a third of the population, including Pericles himself (429 BC). Without him Athens followed more reckless leaders."
    },
    {
      type: "text",
      title: "7. The Peloponnesian War (431-404 BC)",
      html: `<p>The growth of Athens frightened Sparta and its allies (Corinth in particular). Thucydides wrote that «the truest cause was the growth of Athenian power and the fear this caused in Sparta». The war is divided into phases:</p>
<ul>
<li><b>Archidamian War</b> (431-421 BC): Spartan invasions of Attica, raids by the Athenian fleet, plague (430-426). It ends with the fragile <b>Peace of Nicias</b> (421 BC).</li>
<li><b>Sicilian Expedition</b> (415-413 BC): urged on by the ambitious <b>Alcibiades</b>, the Athenians attack Syracuse; the expedition ends in catastrophe: the fleet destroyed, thousands taken prisoner.</li>
<li><b>Final phase</b> (413-404 BC): Sparta, funded by Persia, builds a fleet; in <b>405 BC</b> at <b>Aegospotami</b> it destroys the Athenian fleet. In <b>404 BC</b> Athens surrenders: its walls are pulled down and its empire is lost. For a short time a pro-Spartan oligarchy rules, the <b>Thirty Tyrants</b>, then democracy is restored (403 BC).</li>
</ul>
<p><b>Consequences</b>: the whole of Greece comes out exhausted, with devastated cities, civil wars and an unpopular Spartan hegemony. In 399 BC Socrates was sentenced to death on charges of impiety and corrupting the young, in a climate of fear and resentment. The weakened poleis would be conquered in the 4th century by the king of Macedon, Philip II.</p>`
    },
    {
      type: "example",
      title: "Worked example: the voices of the winners and the losers",
      html: `<p>Almost everything we know about the Persian Wars comes from <b>Herodotus</b>, a Greek, and from Athenian texts. The Persians left few written accounts of these events. What questions does a historian ask?</p>
<ol>
<li><b>Who is telling the story and why?</b> Herodotus wants to celebrate the deeds of the Greeks and explain the conflict between Greeks and barbarians.</li>
<li><b>What do we know from other sources?</b> Persian inscriptions (such as that of Darius at Behistun) and excavations show that the empire was highly organised and tolerant; for the Persians the war was a border campaign.</li>
<li><b>What is exaggerated?</b> The figures for Xerxes' army, which are certainly inflated.</li>
</ol>
<p>A story told by only one side is always incomplete: to understand it we need different sources.</p>`
    },
    {
      type: "example",
      title: "Worked example: today's marathon",
      html: `<p>The <b>42.195 km</b> race comes from an idea by the Frenchman Michel Bréal for the first modern Olympic Games in Athens in <b>1896</b>, who wanted to commemorate the legend of the messenger. The official distance was set only in 1921, based on the length of the 1908 London marathon. Marathon and Athens are about 40 km apart: the legend of Pheidippides is therefore more symbolic than historical, but it still inspires us.</p>
<p>Another example of this legacy: the word <b>«democracy»</b>. Today in our schools we elect class representatives; in Athens every citizen voted directly in the assembly.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The painted Parthenon",
      html: `<p>Today the Parthenon is the colour of pale marble, but in ancient times its statues and friezes were <b>painted in bright colours</b> (blue, red, yellow). Time has erased the pigments. In 1687, during the war between Venice and the Turks, a Venetian shell blew up the Ottoman gunpowder store kept in the temple, destroying much of its roof. The famous marbles of the frieze, taken to London in 1801-1812 by Lord Elgin, are now in the British Museum, and Greece is asking for them to be returned.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The plague described by someone who lived through it",
      html: `<p>Thucydides, who caught the plague and survived, described its symptoms with such clinical precision that modern doctors have been able to suggest what the disease was (perhaps typhus or typhoid fever; the question is still open). His aim: to leave «a possession for all time». His «History of the Peloponnesian War» is considered the first example of scientific history writing.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand classical Greece",
      intro: "Events, people and ideas: try looking at them with other tools.",
      tabs: [
        {
          label: "🏁 David and Goliath",
          html: `<p>The Persian Wars can be seen as a clash between a <b>giant</b> (the Persian Empire, 20 million subjects) and some <b>little ones</b> (the Greek poleis, a few hundred thousand citizens). But be careful: this was not a story of good guys and bad guys.</p>
<ul>
<li>The Greeks won because they were fighting <b>close to home</b>, on narrow, mountainous ground, with suitable tactics (phalanx, triremes).</li>
<li>The Persians were numerous but had supply problems and difficulty coordinating troops from many different peoples.</li>
<li>For Athens the victory had political effects: the citizen-rowers of the fleet demanded more political weight, and democracy expanded.</li>
</ul>`
        },
        {
          label: "📅 Timeline",
          html: `<p>Scroll through the major events from 499 to 399 BC.</p>`,
          widget: "timeline",
          options: {
            unit: "years",
            events: [
              { year: -499, label: "Ionian Revolt", icon: "🔥" },
              { year: -490, label: "Marathon", icon: "🏃" },
              { year: -480, label: "Thermopylae and Salamis", icon: "⚓" },
              { year: -478, label: "Delian League", icon: "🤝" },
              { year: -447, label: "Parthenon begun", icon: "🏛️" },
              { year: -431, label: "Peloponnesian War", icon: "⚔️" },
              { year: -429, label: "Death of Pericles", icon: "🕯️" },
              { year: -404, label: "Athens surrenders", icon: "🏳️" },
              { year: -399, label: "Death of Socrates", icon: "🍷" }
            ]
          }
        },
        {
          label: "🗺️ Spin the globe",
          html: `<p>Rotate the globe: the key places of the Persian and Peloponnesian Wars.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Athens", color: "#2563eb" },
              { lat: 38.15, lon: 23.96, label: "Marathon", color: "#ef4444" },
              { lat: 38.8, lon: 22.54, label: "Thermopylae", color: "#ef4444" },
              { lat: 37.95, lon: 23.5, label: "Salamis", color: "#ef4444" },
              { lat: 37.08, lon: 22.43, label: "Sparta", color: "#f97316" },
              { lat: 37.07, lon: 15.29, label: "Syracuse", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persepolis", color: "#7c3aed" }
            ],
            routes: [{ points: [6, 0, 1], color: "#7c3aed" }]
          }
        },
        {
          label: "🃏 Revision cards",
          html: `<p>Flip the cards to revise.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Marathon", back: "490 BC: Athenian victory under Miltiades over the Persians" },
              { front: "Salamis", back: "480 BC: Themistocles' naval victory" },
              { front: "Delian League", back: "Alliance led by Athens from 478 BC, later an empire" },
              { front: "Pericles", back: "Strategos, leader of Athenian democracy; the Parthenon" },
              { front: "Aegospotami", back: "405 BC: the Spartan fleet destroys the Athenian fleet" },
              { front: "Misthos", back: "Payment for public office introduced by Pericles" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: from victory to the fall of Athens",
      nodes: [
        { id: "persia", label: "Persian Empire", x: 50, y: 6, color: "#7c3aed", html: "The largest empire of its time, under Darius and Xerxes.", why: "The revolt of the Ionian cities, backed by Athens, pushed Darius to punish Greece and secure the western border." },
        { id: "vittoria", label: "Greek victory", x: 25, y: 28, color: "#ef4444", html: "Marathon (490), Thermopylae and Salamis (480), Plataea (479).", why: "The Greeks won because they fought on favourable ground, with the phalanx and triremes, and with a strong motivation to defend their own cities." },
        { id: "lega", label: "Delian League", x: 75, y: 28, color: "#f97316", html: "A naval alliance that becomes the Athenian Empire.", why: "Athens had the strongest fleet: the allies preferred to pay tribute rather than equip ships. So Athens became master of the Aegean." },
        { id: "democrazia", label: "Pericles' democracy", x: 20, y: 55, color: "#16a34a", html: "Assembly, lot, payment for office.", why: "The poor rowers of the fleet had helped win the victory: they demanded more rights. The tribute paid for the allowances." },
        { id: "cultura", label: "Golden age", x: 50, y: 55, color: "#eab308", html: "Parthenon, theatre, philosophy, history.", why: "Wealth and pride in victory paid for public works and encouraged critical thinking and public debate." },
        { id: "paura", label: "Sparta's fear", x: 82, y: 55, color: "#0ea5e9", html: "Sparta and Corinth fear Athenian power.", why: "Thucydides identifies the growth of Athens and Sparta's fear as the underlying cause of the war." },
        { id: "guerra", label: "Peloponnesian War", x: 50, y: 78, color: "#7c2d12", html: "431-404 BC: plague, Sicily, Aegospotami.", why: "The war was long and exhausting; strategic mistakes and the plague weakened Athens, while the Persians funded Sparta." },
        { id: "crisi", label: "Crisis of the polis", x: 50, y: 96, color: "#334155", html: "Unstable hegemonies, civil wars, the rise of Macedon.", why: "After the war no polis managed to unite Greece; this weakness opened the way for Philip II of Macedon." }
      ],
      edges: [
        ["persia", "vittoria", "defeated by the"],
        ["vittoria", "lega", "leads to the"],
        ["lega", "democrazia", "funds"],
        ["democrazia", "cultura", "stimulates the"],
        ["lega", "paura", "causes"],
        ["paura", "guerra", "triggers the"],
        ["cultura", "guerra", "does not prevent the"],
        ["guerra", "crisi", "leads to the"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Pericles and the war",
      questions: [
        { type: "mc", q: "What did Pericles build on the Acropolis?", options: ["The Parthenon", "The Colosseum", "The walls of Troy"], answer: 0, explain: "The Parthenon, temple of Athena (447-432 BC)." },
        { type: "mc", q: "Who won the Peloponnesian War?", options: ["Sparta", "Athens", "Persia"], answer: 0, explain: "Sparta, with financial help from the Persians." },
        { type: "tf", q: "Pericles himself died during the plague.", answer: true, explain: "He died in 429 BC." },
        { type: "order", q: "Put in order.", items: ["Marathon", "Salamis", "Delian League", "Peloponnesian War"], explain: "490, 480, 478, 431 BC." }
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Persians</b>: a vast empire (Cyrus, Darius, Xerxes); Ionian Revolt (499 BC).</li>
<li>First war: <b>Marathon</b> (490, Miltiades). Second: <b>Thermopylae</b> (Leonidas) and <b>Salamis</b> (Themistocles) in 480; <b>Plataea</b> and <b>Mycale</b> (479).</li>
<li><b>Delian League</b> (478-477): Athens leads the alliance and creates an empire.</li>
<li><b>Pericles</b>: direct democracy with payment for office; the Parthenon; theatre, Herodotus, Thucydides, Socrates.</li>
<li><b>Peloponnesian War</b> (431-404): Athens defeated by Sparta; crisis of the poleis.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Satrapy", d: "Province of the Persian Empire ruled by a satrap." },
    { t: "Phalanx", d: "Tight formation of hoplites with shields and spears." },
    { t: "Trireme", d: "Warship with three banks of rowers." },
    { t: "Strategos", d: "Athenian military commander, an elected office." },
    { t: "Delian League", d: "Alliance of Aegean poleis led by Athens (478-477 BC)." },
    { t: "Tribute", d: "Sum paid by a subject or allied state." },
    { t: "Misthos", d: "Allowance paid to citizens for holding public office." },
    { t: "Ecclesia", d: "Assembly of the citizens of Athens." },
    { t: "Sophist", d: "Teacher of rhetoric and practical knowledge." },
    { t: "Plague of Athens", d: "Epidemic of 430-426 BC during the war." },
    { t: "Hegemony", d: "Supremacy of one city or state over others." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What triggered the Persian intervention in Greece?", options: ["Support from Athens and Eretria for the Ionian Revolt", "The founding of the Delian League", "The Olympic Games"], answer: 0, explain: "Athens and Eretria helped the rebel cities." },
      { type: "mc", q: "Who led the Greeks at Salamis?", options: ["Themistocles", "Miltiades", "Alcibiades"], answer: 0, explain: "The Athenian general Themistocles." },
      { type: "tf", q: "The Persians won at Marathon.", answer: false, explain: "The Athenians won, in 490 BC." },
      { type: "text", q: "What is the Greek warship with three banks of oars called?", answer: ["trireme", "the trireme", "a trireme"], explain: "The trireme." },
      { type: "mc", q: "What was the Delian League?", options: ["An alliance of Aegean poleis led by Athens", "An alliance led by Sparta", "A merchants' association"], answer: 0, explain: "Founded in 478-477 BC, it became an empire." },
      { type: "mc", q: "Which measure by Pericles allowed the poor to take part in political life?", options: ["Payment for public office", "The abolition of slavery", "Votes for women"], answer: 0, explain: "The misthos." },
      { type: "order", q: "Put in chronological order.", items: ["Marathon", "Thermopylae and Salamis", "Delian League", "Parthenon begun", "Peloponnesian War"], explain: "490, 480, 478, 447, 431 BC." },
      { type: "mc", q: "What was the outcome of the Peloponnesian War?", options: ["Sparta wins, Athens loses its walls and empire", "Athens wins and conquers Sparta", "Persia wins"], answer: 0, explain: "In 404 BC Athens surrenders." },
      { type: "num", q: "In what year BC was the Battle of Marathon fought?", answer: 490, tol: 0, explain: "490 BC." },
      { type: "tf", q: "Athenian democracy was open to women and slaves.", answer: false, explain: "Only adult male citizens voted." },
      { type: "mc", q: "What caused Pericles' death?", options: ["The plague", "A battle", "Ostracism"], answer: 0, explain: "He died of the plague in 429 BC." }
    ]
  }
});
