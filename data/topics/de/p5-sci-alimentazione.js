TOPIC('de', {
  id: "p5-sci-alimentazione",
  title: "Die Ernährung",
  intro: "Essen dient nicht nur dazu, den Hunger zu stillen: Es ist der <b>Treibstoff</b> und das <b>Baumaterial</b> deines Körpers. Wir entdecken, welche <b>Nährstoffe</b> es gibt, wozu sie dienen, wie man die <b>Ernährungspyramide</b> liest und warum die <b>mediterrane Ernährung</b> als eine der gesündesten der Welt gilt.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Warum essen wir?",
      html: `<p>Unser Körper braucht Nahrung aus drei Gründen:</p>
<ul>
<li>⚡ <b>Energie</b>: um sich zu bewegen, zu atmen, zu denken, den Körper auf etwa 37 °C warm zu halten (auch wenn du schläfst!);</li>
<li>🧱 <b>Aufbau</b>: um zu wachsen und Gewebe (Knochen, Muskeln, Haut, Haare) zu reparieren;</li>
<li>🛡️ <b>Schutz und Regulierung</b>: damit alle Organe gut funktionieren und wir uns gegen Krankheiten wehren können.</li>
</ul>
<p>Die nützlichen Stoffe in den Lebensmitteln heißen <b>Nährstoffe</b>. Kein Lebensmittel enthält sie alle in der richtigen Menge: Deshalb muss man <b>abwechslungsreich</b> essen.</p>`
    },
    {
      type: "text",
      title: "Die Nährstoffe und ihre Aufgabe",
      html: `<table>
<tr><th>Nährstoff</th><th>Wozu er dient</th><th>Wo er vorkommt</th></tr>
<tr><td>🍝 <b>Kohlenhydrate</b> (Zucker und Stärke)</td><td>liefern schnell verfügbare <b>Energie</b></td><td>Nudeln, Brot, Reis, Kartoffeln, Obst, Honig</td></tr>
<tr><td>🥩 <b>Eiweiße</b> (Proteine)</td><td><b>bauen</b> Muskeln und Gewebe auf und reparieren sie</td><td>Fleisch, Fisch, Eier, Hülsenfrüchte, Milch und Käse</td></tr>
<tr><td>🫒 <b>Fette</b> (Lipide)</td><td><b>Reserve</b>energie, isolieren gegen Kälte, werden von den Zellen gebraucht</td><td>Öl, Butter, Nüsse, fetter Fisch</td></tr>
<tr><td>🍊 <b>Vitamine</b></td><td><b>schützen</b> und regulieren den Körper</td><td>vor allem Obst und Gemüse</td></tr>
<tr><td>🥛 <b>Mineralstoffe</b></td><td>bauen Knochen und Zähne (Kalzium), das Blut (Eisen) auf …</td><td>Milch, Gemüse, Hülsenfrüchte, Wasser</td></tr>
<tr><td>💧 <b>Wasser</b></td><td>transportiert, kühlt, macht 60 % des Körpers aus</td><td>zum Trinken, aber auch in Obst und Gemüse</td></tr>
</table>
<p>Es gibt auch die <b>Ballaststoffe</b> (in Gemüse, Obst, Vollkorngetreide und Hülsenfrüchten): Sie nähren nicht, aber sie helfen dem Darm, gut zu arbeiten.</p>`
    },
    {
      type: "widget",
      title: "Welcher Nährstoff überwiegt?",
      widget: "classify",
      options: {
        groups: ["⚡ Kohlenhydrate", "🧱 Eiweiße", "🫒 Fette", "🍊 Vitamine und Ballaststoffe"],
        items: [
          ["🍝 Nudeln", 0],
          ["🍞 Brot", 0],
          ["🥔 Kartoffeln", 0],
          ["🐟 Fisch", 1],
          ["🥚 Eier", 1],
          ["🫘 Linsen", 1],
          ["🧈 Butter", 2],
          ["🫒 Olivenöl", 2],
          ["🥕 Karotten", 3],
          ["🥦 Brokkoli", 3],
          ["🍊 Orange", 3]
        ]
      },
      caption: "Jedes Lebensmittel enthält mehrere Nährstoffe: Lege es in die Gruppe des Nährstoffs, der überwiegt."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Nährstoffe",
      questions: [
        { type: "mc", q: "Welche Nährstoffe dienen vor allem dazu, die Muskeln aufzubauen?", options: ["Kohlenhydrate", "Eiweiße", "Fette"], answer: 1, explain: "Die Eiweiße sind das „Baumaterial“ des Körpers." },
        { type: "mc", q: "Nudeln enthalten vor allem …", options: ["Kohlenhydrate", "Eiweiße", "Vitamine"], answer: 0, explain: "Nudeln sind reich an Stärke, einem Kohlenhydrat." },
        { type: "tf", q: "Es gibt ein Lebensmittel, das alle Nährstoffe in der richtigen Menge enthält.", answer: false, explain: "Kein Lebensmittel ist vollständig: Deshalb muss man abwechseln." }
      ]
    },
    {
      type: "text",
      title: "Die Ernährungspyramide",
      html: `<p>Die <b>Ernährungspyramide</b> ist eine Zeichnung, die zeigt, <b>wie oft</b> man jede Lebensmittelgruppe essen soll:</p>
<ul>
<li><b>ganz unten</b> (jeden Tag, reichlich): <b>Wasser</b>, <b>Obst und Gemüse</b> (mindestens 5 Portionen am Tag) und <b>Getreide</b> (Brot, Nudeln, Reis, am besten Vollkorn);</li>
<li><b>in der Mitte</b> (jeden Tag, in Maßen): <b>Milch und Joghurt</b>, <b>natives Olivenöl extra</b>, Nüsse, Kräuter und Gewürze;</li>
<li><b>weiter oben</b> (einige Male pro Woche): <b>Hülsenfrüchte</b>, <b>Fisch</b>, <b>Eier</b>, helles Fleisch, Käse;</li>
<li><b>ganz oben</b> (selten, in kleinen Mengen): <b>rotes Fleisch</b> und Wurst, <b>Süßigkeiten</b>, gezuckerte Getränke.</li>
</ul>
<p>Ganz unten in der Pyramide steht auch die <b>körperliche Bewegung</b> jeden Tag: Für ein Kind mindestens <b>60 Minuten</b> Bewegung!</p>`
    },
    {
      type: "svg",
      title: "Die Pyramide der mediterranen Ernährung",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#fffbeb"/>
<polygon points="300,20 345,80 255,80" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<polygon points="255,80 345,80 390,140 210,140" fill="#fb923c" stroke="#7c2d12" stroke-width="2"/>
<polygon points="210,140 390,140 435,200 165,200" fill="#facc15" stroke="#713f12" stroke-width="2"/>
<polygon points="165,200 435,200 480,260 120,260" fill="#a3e635" stroke="#365314" stroke-width="2"/>
<polygon points="120,260 480,260 525,320 75,320" fill="#38bdf8" stroke="#0c4a6e" stroke-width="2"/>
<text x="300" y="70" font-size="22" text-anchor="middle">🍰🥓</text>
<text x="300" y="120" font-size="16" text-anchor="middle" font-weight="bold">Fisch, Eier, Hülsenfrüchte, helles Fleisch</text>
<text x="300" y="180" font-size="16" text-anchor="middle" font-weight="bold">Milch, Joghurt, Olivenöl, Nüsse</text>
<text x="300" y="238" font-size="16" text-anchor="middle" font-weight="bold">Obst, Gemüse, Brot, Nudeln, Reis</text>
<text x="300" y="298" font-size="16" text-anchor="middle" font-weight="bold">💧 Wasser und 🏃 Bewegung jeden Tag</text>
<text x="490" y="55" font-size="15" fill="#7f1d1d">selten</text>
<text x="410" y="115" font-size="15" fill="#7c2d12">pro Woche</text>
<text x="450" y="175" font-size="15" fill="#713f12">täglich, wenig</text>
<text x="40" y="235" font-size="15" fill="#365314">bei jeder Mahlzeit</text>
</svg>`,
      caption: "Je weiter unten und breiter eine Gruppe ist, desto öfter soll man sie essen. Je weiter oben und schmaler, desto seltener."
    },
    {
      type: "text",
      title: "Der Essensplan des Tages und der gesunde Teller",
      html: `<p>Es ist besser, das Essen auf <b>5 Mahlzeiten</b> zu verteilen:</p>
<ul>
<li>🥣 <b>Frühstück</b> (etwa 15–20 % der Tagesenergie): Lass es nicht aus, du brauchst Energie für die Schule!</li>
<li>🍎 <b>Pausensnack</b> am Vormittag (Obst, Joghurt);</li>
<li>🍝 <b>Mittagessen</b> (etwa 35–40 %);</li>
<li>🥪 <b>Nachmittagsimbiss</b>;</li>
<li>🍲 <b>Abendessen</b> (etwa 30 %).</li>
</ul>
<p>Ein Trick für den Teller: <b>die Hälfte Gemüse und Obst</b>, <b>ein Viertel Getreide</b> (am besten Vollkorn), <b>ein Viertel Eiweiß</b> (Hülsenfrüchte, Fisch, Eier, Fleisch), ein Schuss Olivenöl und ein Glas <b>Wasser</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Etikett lesen",
      html: `<p>Auf der Keksverpackung findest du die <b>Nährwerttabelle</b>. Pro 100 g:</p>
<table>
<tr><td>Energie</td><td>480 kcal</td></tr>
<tr><td>Fett</td><td>20 g</td></tr>
<tr><td>Kohlenhydrate</td><td>68 g</td></tr>
<tr><td>— davon Zucker</td><td><b>25 g</b></td></tr>
<tr><td>Eiweiß</td><td>7 g</td></tr>
</table>
<p>Von 100 g Keksen sind ganze <b>25 g Zucker</b>: ein Viertel! Wenn du 50 g isst (etwa 6–7 Kekse), nimmst du 12,5 g Zucker zu dir, also etwa <b>3 Teelöffel</b>. Die Weltgesundheitsorganisation empfiehlt, nicht mehr als etwa <b>25 g</b> zugesetzten Zucker pro Tag zu essen.</p>
<p>Auch die <b>Zutaten</b> sind nützlich: Sie stehen in der Reihenfolge vom häufigsten zum seltensten.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: ein kluger Imbiss",
      html: `<p>Vergleichen wir zwei Imbisse:</p>
<ul>
<li>🥤 eine Dose Limonade (330 ml) enthält etwa <b>35 g Zucker</b> (7 Teelöffel!) und sonst nichts Nützliches;</li>
<li>🍎 ein Apfel mit einer Handvoll Walnüssen liefert Fruchtzucker, <b>Ballaststoffe</b>, <b>Vitamine</b>, <b>gute Fette</b> und etwas Eiweiß und macht länger satt.</li>
</ul>
<p>Bei gleichem Hunger nährt der zweite Imbiss viel besser. Gezuckerte Getränke stehen oben in der Pyramide: ab und zu ja, jeden Tag nein.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Der Skorbut der Seeleute",
      html: `<p>Früher erkrankten auf langen Schiffsreisen viele Seeleute an <b>Skorbut</b>: Das Zahnfleisch blutete, und die Zähne fielen aus. Im Jahr <b>1747</b> machte der schottische Arzt <b>James Lind</b> eines der ersten wissenschaftlichen Experimente der Medizin: Er gab einigen kranken Seeleuten Orangen und Zitronen, und sie wurden in wenigen Tagen gesund.</p>
<p>Heute wissen wir, dass das <b>Vitamin C</b> fehlte. Die englischen Seeleute bekamen später den Spitznamen „Limeys“, weil sie Limettensaft an Bord mitführten!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Welterbe der Menschheit",
      html: `<p>Im Jahr <b>2010</b> hat die UNESCO die <b>mediterrane Ernährung</b> als <b>immaterielles Kulturerbe der Menschheit</b> anerkannt, zusammen mit Spanien, Griechenland und Marokko (später auch Zypern, Kroatien und Portugal).</p>
<p>Berühmt machte sie der amerikanische Arzt <b>Ancel Keys</b>, der in den 1950er-Jahren die Bewohner des Cilento in Kampanien untersuchte: Sie aßen Brot, Nudeln, Gemüse, Hülsenfrüchte, Fisch und Olivenöl und lebten länger und mit weniger Herzkrankheiten als die Amerikaner. Keys selbst lebte viele Jahre in Pioppi im Cilento, übernahm diese Ernährung und wurde 100 Jahre alt!</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Die <b>Nährstoffe</b>: Kohlenhydrate (Energie), Eiweiße (Aufbau), Fette (Reserve), Vitamine und Mineralstoffe (Schutz), Wasser.</li>
<li>Iss <b>abwechslungsreich</b>: Kein Lebensmittel ist vollständig.</li>
<li>Pyramide: <b>unten</b> = jeden Tag (Obst, Gemüse, Getreide, Wasser); <b>oben</b> = selten (Süßigkeiten, rotes Fleisch, Limonaden).</li>
<li><b>5 Mahlzeiten</b> am Tag, Frühstück eingeschlossen, und mindestens <b>1 Stunde Bewegung</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Ernährung zu verstehen",
      intro: "Essen versteht man besser mit den Händen, mit einem Vergleich oder wenn man schaut, wie man in anderen Teilen der Welt isst.",
      tabs: [
        {
          label: "🚗 Der Körper als Auto",
          html: `<p>Denk an den Körper als ein Auto:</p>
<ul>
<li>die <b>Kohlenhydrate</b> sind das <b>Benzin</b>, das du sofort verbrauchst;</li>
<li>die <b>Fette</b> sind der <b>Reservekanister</b> im Kofferraum;</li>
<li>die <b>Eiweiße</b> sind die <b>Ersatzteile</b> und die Karosserie;</li>
<li><b>Vitamine und Mineralstoffe</b> sind das <b>Öl</b> des Motors und die kleinen Schrauben: Man braucht wenig davon, aber ohne sie klemmt alles;</li>
<li>das <b>Wasser</b> ist die <b>Kühlflüssigkeit</b>.</li>
</ul>
<p>Nur Benzin und kein Öl? Der Motor geht kaputt. Nur Ersatzteile und kein Benzin? Das Auto springt nicht an!</p>`
        },
        {
          label: "🍽️ Der Teller in der Welt",
          html: `<p>Statt der Pyramide verwendet man in vielen Ländern das Bild eines <b>Tellers</b>:</p>
<ul>
<li>🇺🇸 <b>MyPlate</b> (USA, seit 2011): ein in 4 Segmente geteilter Teller (Obst, Gemüse, Getreide, Eiweiß) plus ein Glas Milch;</li>
<li>🇬🇧 <b>Eatwell Guide</b> (Vereinigtes Königreich): ein Teller mit unterschiedlich großen Stücken;</li>
<li>🇯🇵 in Japan verwendet man einen <b>Kreisel</b>: Fehlt ein Teil oder bewegst du dich nicht, fällt der Kreisel um!</li>
<li>🇩🇪 in Deutschland gibt es neben der Pyramide den <b>Ernährungskreis</b> der Deutschen Gesellschaft für Ernährung, der in Schulen verwendet wird.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<circle cx="200" cy="130" r="115" fill="#ffffff" stroke="#94a3b8" stroke-width="6"/>
<path d="M200 130 L200 15 A115 115 0 0 0 85 130 Z" fill="#4ade80"/>
<path d="M200 130 L85 130 A115 115 0 0 0 200 245 Z" fill="#f87171"/>
<path d="M200 130 L200 245 A115 115 0 0 0 315 130 Z" fill="#fbbf24"/>
<path d="M200 130 L315 130 A115 115 0 0 0 200 15 Z" fill="#c084fc"/>
<text x="150" y="85" font-size="16" text-anchor="middle" font-weight="bold">Gemüse</text>
<text x="145" y="185" font-size="16" text-anchor="middle" font-weight="bold">Obst</text>
<text x="255" y="185" font-size="16" text-anchor="middle" font-weight="bold">Getreide</text>
<text x="255" y="85" font-size="16" text-anchor="middle" font-weight="bold">Eiweiß</text>
<rect x="370" y="90" width="50" height="80" rx="6" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/>
<text x="395" y="200" font-size="16" text-anchor="middle">Wasser</text>
<text x="470" y="120" font-size="16" fill="#334155">halber Teller</text>
<text x="470" y="142" font-size="16" fill="#334155">Obst und Gemüse!</text>
</svg>`
        },
        {
          label: "🧪 Das Stärke-Experiment",
          html: `<p>Wie findet man heraus, ob ein Lebensmittel <b>Stärke</b> (ein Kohlenhydrat) enthält? Mit <b>Jodtinktur</b> (frage einen Erwachsenen, es gibt sie in der Apotheke):</p>
<ol>
<li>lege auf einen Teller eine Scheibe Brot, eine Scheibe Kartoffel, ein Stückchen Apfel, etwas Zucker und Käse;</li>
<li>gib auf jedes einen Tropfen Jod;</li>
<li>wo Stärke ist, wird die Farbe <b>blauschwarz</b>!</li>
</ol>
<p>Brot und Kartoffel werden dunkelblau; Zucker und Käse nicht. Und die <b>Fette</b>? Reibe das Lebensmittel auf einem Blatt Papier: Bleibt ein durchscheinender Fleck, enthält es Fett!</p>`
        },
        {
          label: "⚛️ Der Zucker in 3D",
          html: `<p>Die <b>Glukose</b> (Traubenzucker) ist der Zucker, den die Zellen als Treibstoff nutzen. Die Stärke in Nudeln und Brot besteht aus langen Ketten von Glukose, die die Verdauung Stück für Stück „auseinandernimmt“.</p>
<p>Hier siehst du ein vereinfachtes Modell ihres „Rings“: 5 <b>Kohlenstoff</b>atome (schwarz) und 1 <b>Sauerstoff</b>atom (rot). Die vollständige Glukose hat 6 Kohlenstoff-, 12 Wasserstoff- und 6 Sauerstoffatome: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 1, z: 0, r: 0.35, color: "#ef4444", label: "O" },
              { x: 0.87, y: 0.5, z: 0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: 0.87, y: -0.5, z: -0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: 0, y: -1, z: 0, r: 0.38, color: "#1f2937", label: "C" },
              { x: -0.87, y: -0.5, z: 0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: -0.87, y: 0.5, z: -0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: -1.6, y: 1.1, z: 0, r: 0.38, color: "#1f2937", label: "C" }
            ],
            bonds: [ [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [5, 6] ]
          }
        },
        {
          label: "🃏 Nährstoff-Karten",
          html: `<p>Drehe die Karten um und wiederhole: Wozu dient jeder Nährstoff?</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🍝 Kohlenhydrate", back: "Schnelle Energie: Nudeln, Brot, Reis, Kartoffeln, Obst" },
              { front: "🥚 Eiweiße", back: "Bauen auf und reparieren: Fleisch, Fisch, Eier, Hülsenfrüchte, Milch" },
              { front: "🫒 Fette", back: "Reserveenergie und Kälteschutz: Öl, Butter, Nüsse" },
              { front: "🍊 Vitamine", back: "Schützen und regulieren: Obst und Gemüse" },
              { front: "🦴 Kalzium", back: "Mineralstoff für Knochen und Zähne: Milch, Käse, grünes Gemüse" },
              { front: "🩸 Eisen", back: "Mineralstoff für das Blut: Hülsenfrüchte, Fleisch, Blattgemüse" },
              { front: "💧 Wasser", back: "Transportiert und kühlt: etwa 60 % des Körpers" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Ernährung: Tippe auf einen Knoten",
      nodes: [
        { id: "cibo", label: "Lebensmittel", x: 50, y: 6, color: "#2563eb", html: "Alles, was wir essen und trinken.", why: "Tiere, der Mensch eingeschlossen, können sich ihre Nahrung nicht selbst herstellen wie die Pflanzen mit der Fotosynthese: Sie müssen sie von anderen Lebewesen nehmen (sie sind <b>heterotroph</b>)." },
        { id: "nutrienti", label: "Nährstoffe", x: 50, y: 28, color: "#16a34a", html: "Die nützlichen Stoffe in den Lebensmitteln.", why: "Der deutsche Chemiker <b>Justus von Liebig</b> (Mitte des 19. Jahrhunderts) und andere Wissenschaftler entdeckten, dass Nahrung aus wenigen Arten von Stoffen besteht: Zucker, Fette und Eiweiße." },
        { id: "energia", label: "Kohlenhydrate und Fette", x: 15, y: 50, color: "#f59e0b", html: "Nährstoffe, die Energie liefern.", why: "In den Zellen „verbrennen“ Zucker und Fette langsam mit Sauerstoff (Zellatmung) und setzen Energie frei. Teilweise entdeckte das <b>Antoine Lavoisier</b> im 18. Jahrhundert, als er die Wärme maß, die ein Meerschweinchen erzeugte." },
        { id: "proteine", label: "Eiweiße", x: 40, y: 54, color: "#ef4444", html: "Nährstoffe zum Aufbauen und Reparieren.", why: "Muskeln, Haut, Haare, Enzyme und Antikörper bestehen aus Eiweißen. Den Namen, vom Griechischen <i>prôtos</i> („erster, der wichtigste“), schlug der Chemiker <b>Berzelius</b> 1838 vor." },
        { id: "vitamine", label: "Vitamine und Mineralstoffe", x: 65, y: 54, color: "#a855f7", html: "Schützende Stoffe, die in kleinen Mengen nötig sind.", why: "Sie wurden bei der Erforschung von Mangelkrankheiten wie Skorbut und Beriberi entdeckt. Den Namen <i>Vitamine</i> („Amine des Lebens“) erfand der polnische Biochemiker <b>Casimir Funk</b> 1912." },
        { id: "acqua", label: "Wasser", x: 88, y: 50, color: "#0ea5e9", html: "Etwa 60 % unseres Körpers.", why: "Alle Reaktionen der Zellen laufen in Wasser ab; das Blut besteht überwiegend aus Wasser. Wir verlieren jeden Tag welches durch Schweiß, Atem und Urin, deshalb muss man es durch Trinken ersetzen (etwa 1,5 Liter am Tag für ein Kind)." },
        { id: "piramide", label: "Ernährungspyramide", x: 30, y: 80, color: "#84cc16", html: "Zeichnung, die zeigt, wie oft man jede Lebensmittelgruppe essen soll.", why: "Die erste Ernährungspyramide wurde <b>1974</b> in <b>Schweden</b> geschaffen, um Familien zu helfen, sich gesund und günstig zu ernähren. Dann verbreitete sich die Idee auf der ganzen Welt." },
        { id: "mediterranea", label: "Mediterrane Ernährung", x: 70, y: 80, color: "#14b8a6", html: "Die traditionelle Art zu essen in den Ländern des Mittelmeers.", why: "Von <b>Ancel Keys</b> seit den 1950er-Jahren untersucht, auch im Cilento. Viel Pflanzliches, Getreide, Hülsenfrüchte, Fisch und Olivenöl schützen Herz und Blutgefäße. UNESCO: Welterbe der Menschheit seit 2010." },
        { id: "movimento", label: "Bewegung", x: 50, y: 96, color: "#64748b", html: "Mindestens 60 Minuten am Tag für Kinder.", why: "Der Körper nutzt die Energie der Nahrung zum Bewegen: Nimmt er mehr auf, als er verbraucht, wird sie als Fett gespeichert. Die Weltgesundheitsorganisation empfiehlt 1 Stunde körperliche Aktivität pro Tag zwischen 5 und 17 Jahren." }
      ],
      edges: [
        ["cibo", "nutrienti", "enthalten"],
        ["nutrienti", "energia", "für die Energie"],
        ["nutrienti", "proteine", "zum Aufbauen"],
        ["nutrienti", "vitamine", "zum Schützen"],
        ["nutrienti", "acqua", "und dann das"],
        ["energia", "piramide", "Grundlage der"],
        ["piramide", "mediterranea", "italienisches Vorbild"],
        ["piramide", "movimento", "ganz unten steht die"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Pyramide",
      questions: [
        { type: "mc", q: "Was steht ganz unten in der Ernährungspyramide?", options: ["Süßigkeiten und Limonaden", "Obst, Gemüse, Getreide und Wasser", "Rotes Fleisch"], answer: 1, explain: "Unten stehen die Lebensmittel, die man jeden Tag essen soll." },
        { type: "num", q: "Wie viele Portionen Obst und Gemüse soll man (mindestens) jeden Tag essen?", answer: 5, explain: "Mindestens 5 Portionen am Tag." },
        { type: "tf", q: "Das Frühstück auszulassen hilft, in der Schule mehr Energie zu haben.", answer: false, explain: "Das Frühstück liefert die Energie für den Vormittag: Man sollte es nicht auslassen." }
      ]
    }
  ],
  glossary: [
    { t: "Nährstoffe", d: "Stoffe in den Lebensmitteln, die dem Körper nützen." },
    { t: "Kohlenhydrate", d: "Zucker und Stärke: liefern schnelle Energie." },
    { t: "Eiweiße (Proteine)", d: "Nährstoffe, die Gewebe aufbauen und reparieren." },
    { t: "Fette (Lipide)", d: "Nährstoffe, die Reserveenergie liefern." },
    { t: "Vitamine", d: "Schützende Stoffe, die in kleinen Mengen nötig sind." },
    { t: "Mineralstoffe", d: "Stoffe wie Kalzium und Eisen, nützlich für Knochen, Blut und viele Funktionen." },
    { t: "Ballaststoffe", d: "Unverdauliche Pflanzenteile, die dem Darm helfen." },
    { t: "Ernährungspyramide", d: "Schema, das zeigt, wie oft man die Lebensmittelgruppen verzehren soll." },
    { t: "Mediterrane Ernährung", d: "Traditionelle Ernährung der Mittelmeerländer, reich an Pflanzlichem, Getreide, Hülsenfrüchten, Fisch und Olivenöl." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welcher Nährstoff liefert vor allem schnelle Energie?", options: ["Kohlenhydrate", "Mineralstoffe", "Vitamine"], answer: 0, explain: "Kohlenhydrate sind der schnellste Treibstoff." },
      { type: "mc", q: "Welches Lebensmittel ist reich an Eiweiß?", options: ["Linsen", "Zucker", "Öl"], answer: 0, explain: "Hülsenfrüchte sind reich an pflanzlichem Eiweiß." },
      { type: "tf", q: "Vitamine kommen vor allem in Obst und Gemüse vor.", answer: true, explain: "Obst und Gemüse sind die wichtigsten Quellen für Vitamine." },
      { type: "text", q: "Welches Vitamin fehlt, wenn man an Skorbut erkrankt?", answer: ["C", "Vitamin C", "das Vitamin C", "vitamina c"], explain: "Das Vitamin C, das in Zitrusfrüchten steckt." },
      { type: "mc", q: "Welche Lebensmittel stehen oben in der Pyramide (selten zu essen)?", options: ["Brot und Nudeln", "Süßigkeiten und rotes Fleisch", "Gemüse"], answer: 1, explain: "Süßigkeiten, rotes Fleisch und gezuckerte Getränke soll man selten verzehren." },
      { type: "num", q: "Wie viele Mahlzeiten am Tag werden empfohlen?", answer: 5, explain: "Frühstück, Pausensnack, Mittagessen, Nachmittagsimbiss und Abendessen." },
      { type: "mc", q: "Wie viel unseres Körpers ist ungefähr Wasser?", options: ["10 %", "60 %", "95 %"], answer: 1, explain: "Etwa 60 % des Gewichts eines Erwachsenen." },
      { type: "tf", q: "Ballaststoffe helfen dem Darm, gut zu arbeiten.", answer: true, explain: "Ballaststoffe fördern die Darmtätigkeit." },
      { type: "order", q: "Bringe die Gruppen in die Reihenfolge von unten nach oben in der Pyramide.", items: ["Wasser, Obst und Gemüse", "Getreide (Brot, Nudeln, Reis)", "Hülsenfrüchte, Fisch und Eier", "Süßigkeiten"], explain: "Je weiter oben, desto seltener isst man es." },
      { type: "mc", q: "In welchem Jahr hat die UNESCO die mediterrane Ernährung als Welterbe der Menschheit anerkannt?", options: ["1950", "2010", "2023"], answer: 1, explain: "Im Jahr 2010." },
      { type: "num", q: "Eine Limonade hat 35 g Zucker. Ein Teelöffel enthält etwa 5 g. Wie viele Teelöffel enthält die Limonade?", answer: 7, explain: "35 : 5 = 7 Teelöffel." }
    ]
  }
});
