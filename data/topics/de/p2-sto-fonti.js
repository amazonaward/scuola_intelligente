TOPIC('de', {
  id: "p2-sto-fonti",
  title: "Die Quellen",
  intro: "Woher wissen wir, was vor langer Zeit geschehen ist, als wir noch nicht da waren? 🤔 Wir machen es wie die <b>Detektive</b> 🕵️: Wir suchen die <b>Spuren</b> der Vergangenheit. Diese Spuren heißen <b>Quellen</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Was ist eine Quelle?",
      html: `<p>Eine <b>historische Quelle</b> ist <b>alles</b>, was uns Informationen über die Vergangenheit gibt.</p>
<p>Das Wort „Quelle“ bedeutet auch <b>Wasserquelle</b> ⛲: So wie aus der Quelle das Wasser kommt, kommen aus der historischen Quelle die <b>Informationen</b>.</p>
<p>Die Menschen, die Quellen untersuchen, um die Vergangenheit zu rekonstruieren, heißen <b>Historiker</b> 📚. Diejenigen, die Spuren suchen, indem sie im Boden graben, heißen <b>Archäologen</b> ⛏️.</p>`
    },
    {
      type: "text",
      title: "Die vier Arten von Quellen",
      html: `<ul>
<li>📜 <b>Schriftliche Quellen</b>: alles, was geschriebene Worte enthält. Briefe, Tagebücher, Bücher, Zeitungen, Zeugnisse, Postkarten, Urkunden, Inschriften auf Denkmälern.</li>
<li>🧸 <b>Gegenständliche Quellen</b>: Dinge, die man anfassen kann. Spielzeug, Kleidung, Werkzeuge, Münzen, Häuser, Knochen, Gefäße.</li>
<li>🖼️ <b>Bildliche Quellen</b> (oder visuelle): Bilder. Fotografien, Zeichnungen, Gemälde, Videos, Karten.</li>
<li>🗣️ <b>Mündliche Quellen</b>: mündliche Erzählungen. Die Erinnerungen der Großeltern, Lieder, Kinderreime, aufgenommene Interviews.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Die Quellen zur Geschichte des Opas",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="20" y="30" width="130" height="170" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<rect x="165" y="30" width="130" height="170" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<rect x="310" y="30" width="130" height="170" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="455" y="30" width="130" height="170" rx="12" fill="#fce7f3" stroke="#be185d" stroke-width="3"/>
<rect x="45" y="60" width="80" height="95" fill="#ffffff" stroke="#92400e" stroke-width="2"/>
<line x1="55" y1="80" x2="115" y2="80" stroke="#92400e" stroke-width="3"/><line x1="55" y1="97" x2="115" y2="97" stroke="#92400e" stroke-width="3"/><line x1="55" y1="114" x2="105" y2="114" stroke="#92400e" stroke-width="3"/><line x1="55" y1="131" x2="110" y2="131" stroke="#92400e" stroke-width="3"/>
<text x="230" y="125" font-size="56" text-anchor="middle">🧸</text>
<rect x="335" y="60" width="80" height="95" fill="#ffffff" stroke="#1e3a8a" stroke-width="4"/>
<circle cx="375" cy="95" r="15" fill="#94a3b8"/><path d="M350 150 Q375 105 400 150 Z" fill="#94a3b8"/>
<text x="520" y="125" font-size="56" text-anchor="middle">👴</text>
<text x="85" y="230" font-size="16" text-anchor="middle" font-weight="bold" fill="#92400e">schriftlich</text>
<text x="85" y="252" font-size="14" text-anchor="middle" fill="#78350f">ein Brief</text>
<text x="230" y="230" font-size="16" text-anchor="middle" font-weight="bold" fill="#166534">gegenständlich</text>
<text x="230" y="252" font-size="14" text-anchor="middle" fill="#14532d">sein Teddybär</text>
<text x="375" y="230" font-size="16" text-anchor="middle" font-weight="bold" fill="#1d4ed8">bildlich</text>
<text x="375" y="252" font-size="14" text-anchor="middle" fill="#1e3a8a">ein altes Foto</text>
<text x="520" y="230" font-size="16" text-anchor="middle" font-weight="bold" fill="#be185d">mündlich</text>
<text x="520" y="252" font-size="14" text-anchor="middle" fill="#831843">seine Erzählungen</text>
<text x="300" y="288" font-size="17" text-anchor="middle" fill="#334155">zusammen erzählen sie, wie seine Kindheit war</text>
</svg>`,
      caption: "Ein Brief, ein Spielzeug, ein Foto und eine Erzählung: vier verschiedene Quellen, um die Geschichte des Opas kennenzulernen."
    },
    {
      type: "widget",
      title: "Was für eine Quelle ist es?",
      widget: "classify",
      options: {
        groups: ["📜 Schriftlich", "🧸 Gegenständlich", "🖼️ Bildlich", "🗣️ Mündlich"],
        items: [
          ["das Zeugnis der Mama", 0],
          ["eine antike Münze", 1],
          ["ein Foto von der Hochzeit der Großeltern", 2],
          ["die Erzählung der Urgroßmutter", 3],
          ["ein Tagebuch", 0],
          ["ein römisches Gefäß", 1],
          ["ein Gemälde in einem Museum", 2],
          ["ein vom Opa gesungenes Wiegenlied", 3],
          ["eine alte Zugfahrkarte", 0],
          ["mein erstes Babyschühchen", 1]
        ]
      },
      caption: "Merke: Wenn geschriebene Worte da sind, ist sie schriftlich; wenn es ein Bild ist, ist sie bildlich; wenn es ein Gegenstand ist, ist sie gegenständlich; wenn es eine mündliche Erzählung ist, ist sie mündlich."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Arten von Quellen",
      questions: [
        { type: "mc", q: "Ein altes Foto ist eine … Quelle.", options: ["schriftliche", "bildliche", "mündliche"], answer: 1, explain: "Bilder (Fotos, Zeichnungen, Gemälde) sind bildliche Quellen." },
        { type: "mc", q: "Die Erzählung des Opas ist eine … Quelle.", options: ["mündliche", "gegenständliche", "schriftliche"], answer: 0, explain: "Informationen, die mündlich erzählt werden, sind mündliche Quellen." },
        { type: "tf", q: "Ein antikes Spielzeug ist eine gegenständliche Quelle.", answer: true, explain: "Es ist ein Gegenstand, den man anfassen kann: eine gegenständliche Quelle." }
      ]
    },
    {
      type: "example",
      title: "Beispiel: meine persönliche Geschichte 👶",
      html: `<p>Auch du hast eine Geschichte! Um sie zu rekonstruieren, kannst du viele Quellen benutzen:</p>
<ul>
<li>📜 die <b>Geburtsurkunde</b> oder das Krankenhausarmband (schriftlich): Sie sagt dir, <b>wann und wo</b> du geboren bist;</li>
<li>🖼️ die <b>Fotos</b> und Videos aus deiner Babyzeit (bildlich): wie du ausgesehen hast;</li>
<li>🧸 dein erster <b>Schnuller</b>, die Schühchen, deine erste Zeichnung (gegenständlich);</li>
<li>🗣️ die <b>Erzählungen von Mama und Papa</b> (mündlich): dein erstes Wort, deine ersten Schritte.</li>
</ul>
<p>Wenn du sie auf der <b>Zeitleiste</b> der Reihe nach ordnest, rekonstruierst du deine Geschichte!</p>`
    },
    {
      type: "widget",
      title: "Die Zeitleiste von Marco",
      widget: "timeline",
      options: {
        unit: "Jahre",
        events: [
          { year: 2019, label: "Marco wird geboren (Geburtsurkunde)", icon: "👶" },
          { year: 2020, label: "Die ersten Schritte (Video der Mama)", icon: "🚶" },
          { year: 2022, label: "Kindergarten (Foto vom ersten Tag)", icon: "🎒" },
          { year: 2023, label: "Er verliert den ersten Milchzahn (er bewahrt ihn in einem Döschen auf)", icon: "🦷" },
          { year: 2025, label: "Erste Klasse (das erste Heft)", icon: "✏️" },
          { year: 2026, label: "Zweite Klasse", icon: "📚" }
        ]
      },
      caption: "Jeder Moment in Marcos Geschichte wird von einer anderen Quelle erzählt."
    },
    {
      type: "text",
      title: "Der Historiker ist ein Detektiv",
      html: `<p>Um die Vergangenheit gut zu verstehen, geht der Historiker so vor:</p>
<ol>
<li>🔍 Er <b>sucht</b> Quellen: zu Hause, in Museen, in <b>Archiven</b> (wo Urkunden aufbewahrt werden), in Bibliotheken, unter der Erde.</li>
<li>❓ Er <b>stellt der Quelle Fragen</b>: Was ist das? Wer hat es gemacht? Wann? Wozu diente es?</li>
<li>⚖️ Er <b>vergleicht</b> mehrere Quellen: Wenn sie dasselbe sagen, ist die Information sicherer.</li>
<li>✍️ Er <b>erzählt</b>: Er schreibt die Geschichte dessen auf, was er herausgefunden hat.</li>
</ol>
<p>⚠️ Achtung: Auch Quellen können sich <b>irren</b>! Der Opa kann sich falsch an ein Datum erinnern; ein Foto kann nur einen Teil der Szene zeigen. Darum muss man sie vergleichen.</p>`
    },
    {
      type: "widget",
      title: "Die Ausgrabung des Archäologen",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<rect y="40" width="600" height="60" fill="#a3e635"/>
<rect y="100" width="600" height="70" fill="#d6a46b"/>
<rect y="170" width="600" height="70" fill="#b07a4a"/>
<rect y="240" width="600" height="80" fill="#7c4a2a"/>
<text x="560" y="78" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">heute</text>
<text x="560" y="300" font-size="16" text-anchor="end" fill="#fde68a" font-weight="bold">vor sehr langer Zeit</text>
<rect x="80" y="62" width="40" height="22" rx="4" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
<circle cx="230" cy="135" r="16" fill="#facc15" stroke="#a16207" stroke-width="3"/>
<path d="M350 185 L400 185 L392 225 L358 225 Z" fill="#ea580c" stroke="#7c2d12" stroke-width="3"/>
<path d="M160 270 L240 285 M175 262 L170 295" stroke="#f5f5f4" stroke-width="8" stroke-linecap="round"/>
<line x1="0" y1="100" x2="600" y2="100" stroke="#78350f" stroke-width="2"/>
<line x1="0" y1="170" x2="600" y2="170" stroke="#78350f" stroke-width="2"/>
<line x1="0" y1="240" x2="600" y2="240" stroke="#78350f" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 100, y: 73, label: "Getränkedose von heute" },
          { x: 230, y: 135, label: "Münze von vor 100 Jahren" },
          { x: 375, y: 205, label: "Römisches Gefäß" },
          { x: 200, y: 278, label: "Vorgeschichtliche Knochen" }
        ]
      },
      caption: "Der Boden entsteht in Schichten, wie eine Torte: Die weiter unten liegenden Schichten sind die ältesten. Klicke auf jeden Gegenstand und wähle, was es ist, von oben (dem jüngsten) angefangen."
    },
    {
      type: "example",
      title: "Beispiel: die Schule der Großeltern 🏫",
      html: `<p>Du willst wissen, wie die Schule des Opas vor 60 Jahren war?</p>
<ul>
<li>🗣️ <b>Du interviewst ihn</b>: „Es gab nur eine Lehrerin, man schrieb mit Feder und Tinte.“</li>
<li>🖼️ Du schaust dir das <b>Klassenfoto</b> an: schwarze Kittel und weiße Kragen, Holzbänke.</li>
<li>📜 Du liest sein <b>Zeugnis</b>: Die Noten waren von Hand geschrieben.</li>
<li>🧸 Du findest auf dem Dachboden sein <b>Tintenfass</b>.</li>
</ul>
<p>Die vier Quellen sagen dasselbe: Jetzt bist du sicher! ✅</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Ötzi, der Mann aus dem Eis",
      html: `<p>Im Jahr <b>1991</b> fanden zwei deutsche Wanderer im Gletscher am Similaun in den Alpen, an der Grenze zwischen Italien und Österreich, eine Leiche. Sie dachten, es sei ein verunglückter Bergsteiger … aber es war ein Mann, der vor mehr als <b>5000 Jahren</b> gelebt hatte! ❄️</p>
<p>Man nannte ihn <b>Ötzi</b>. Das Eis hatte ihn samt Kleidung, Kupferbeil, Bogen und Pfeilen aufbewahrt: sehr wertvolle gegenständliche Quellen! Heute befindet er sich im Südtiroler Archäologiemuseum in <b>Bozen</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Stadt unter der Asche",
      html: `<p>Im Jahr <b>79 n. Chr.</b> brach der Vulkan <b>Vesuv</b> aus und begrub die römische Stadt <b>Pompeji</b> unter meterhoher Asche und Lapilli. 🌋</p>
<p>Die Asche hat Häuser, Straßen, Wandmalereien, Brot in den Backöfen und sogar Aufschriften auf den Mauern bewahrt, wie unsere Graffiti! Die Ausgrabungen begannen im Jahr <b>1748</b> und gehen noch heute weiter: Pompeji ist eine riesige Quelle, um das Leben der Römer kennenzulernen.</p>`
    },
    {
      type: "3d",
      title: "Reise durch die Zeit: berühmte Quellen",
      scene: "spacetime",
      caption: "Die Karte ist die Grundfläche, die Höhe ist die Zeit. Unten steht, wann die Quelle entstanden ist, weiter oben, wann sie entdeckt oder verstanden wurde. Tippe auf die Ereignisse und folge den Pfeilen.",
      options: {
        lat: [30, 56],
        lon: [-5, 32],
        years: [-3500, 2000],
        places: [
          { lat: 46.5, lon: 11.35, label: "Bozen" },
          { lat: 40.75, lon: 14.49, label: "Pompeji" },
          { lat: 31.4, lon: 30.42, label: "Rosetta (Ägypten)" },
          { lat: 48.85, lon: 2.35, label: "Paris" },
          { lat: 55.0, lon: -2.36, label: "Vindolanda" }
        ],
        events: [
          { id: "otzi", lat: 46.78, lon: 10.84, year: -3300, label: "Ötzi stirbt in den Alpen", html: "Ein Mann aus der <b>Kupferzeit</b> stirbt auf einem Alpenpass, in mehr als 3200 Metern Höhe. Schnee und Eis bedecken ihn und bewahren ihn über 5000 Jahre lang auf, samt seiner Kleidung und seinen Werkzeugen." },
          { id: "otzi2", lat: 46.5, lon: 11.35, year: 1991, label: "Ötzi wird wiedergefunden", html: "Am 19. September 1991 finden zwei Wanderer die Leiche im Gletscher am Similaun. Die Wissenschaftler untersuchen alles: was er gegessen hatte, seine Krankheiten, sogar die <b>61 Tätowierungen</b>. Heute ist er im Südtiroler Archäologiemuseum in Bozen.", causes: ["otzi"] },
          { id: "rosetta", lat: 31.4, lon: 30.42, year: -196, label: "Der Stein von Rosetta", html: "In Ägypten wird ein Stein mit demselben Text in drei Schriften gemeißelt: <b>Hieroglyphen</b>, <b>Demotisch</b> und <b>Griechisch</b>. Es ist eine schriftliche Quelle, die zum „Schlüssel“ zum Lesen der Hieroglyphen werden wird." },
          { id: "champollion", lat: 48.85, lon: 2.35, year: 1822, label: "Champollion liest die Hieroglyphen", html: "Indem er das Griechisch des Steins (1799 wiedergefunden) mit den Hieroglyphen vergleicht, gelingt es dem Franzosen <b>Jean-François Champollion</b>, sie zu entziffern. Tausende ägyptische Schriftquellen werden endlich lesbar!", causes: ["rosetta"] },
          { id: "pompei", lat: 40.75, lon: 14.49, year: 79, label: "Der Vesuv begräbt Pompeji", html: "Der Ausbruch des <b>Vesuvs</b> bedeckt Pompeji und Herculaneum. Der römische Schriftsteller <b>Plinius der Jüngere</b> sah ihn aus der Ferne und beschrieb ihn in zwei Briefen: eine schriftliche Quelle, die die gegenständliche bestätigt." },
          { id: "scavi", lat: 40.76, lon: 14.5, year: 1748, label: "Die Ausgrabungen von Pompeji beginnen", html: "Die Ausgrabungen beginnen. Später, im Jahr 1863, erfindet der Archäologe <b>Giuseppe Fiorelli</b> eine Methode: Er gießt Gips in die Hohlräume in der Asche und erhält die <b>Abgüsse</b> von Menschen und Tieren.", causes: ["pompei"] },
          { id: "vindolanda", lat: 55.0, lon: -2.36, year: 100, label: "Die Täfelchen von Vindolanda", html: "In einem römischen Kastell in Britannien schreiben Soldaten und Familien Briefe auf dünne <b>Holztäfelchen</b>. Darunter ist sogar eine Einladung zu einer Geburtstagsfeier! Seit 1973 wiedergefunden, gehören sie zu den ältesten handgeschriebenen Briefen Europas." },
          { id: "foto", lat: 46.72, lon: 4.85, year: 1827, label: "Die erste Fotografie", html: "In Frankreich gelingt es <b>Nicéphore Niépce</b>, das Bild der Aussicht aus seinem Fenster festzuhalten: Es ist die älteste Fotografie, die bis zu uns gekommen ist (1826–1827). Seitdem werden Fotos zu wertvollen Bildquellen." },
          { id: "voce", lat: 48.86, lon: 2.34, year: 1860, label: "Die erste aufgenommene Stimme", html: "In Paris nimmt <b>Édouard-Léon Scott de Martinville</b> eine singende Person („Au clair de la lune“) mit einer Maschine auf, die den Schall zeichnet. Erst 2008 gelang es Wissenschaftlern, sie wieder anzuhören: die älteste aufgenommene mündliche Quelle!", causes: ["foto"] }
        ]
      }
    },
    {
      type: "decision",
      title: "1991: Ihr habt eine Leiche im Eis gefunden!",
      html: `<p>Du bist in den Bergen, in mehr als 3000 Metern Höhe, mit einem Freund. Im schmelzenden Eis seht ihr den Rücken und den Kopf eines Menschen herausragen. In der Nähe liegen Holz- und Lederstücke.</p>`,
      question: "Was tut ihr?",
      options: [
        { label: "Wir ziehen ihn allein mit den Eispickeln heraus und nehmen die Gegenstände als Andenken mit nach Hause.", outcome: "Ihr würdet riskieren, den Körper und die Gegenstände zu zerbrechen, und vor allem ginge das Wichtigste verloren: <b>wo</b> und <b>wie</b> jedes Ding lag. Für Archäologen ist die Lage der Gegenstände eine wertvolle Information." },
        { label: "Wir machen ein Foto, fassen nichts an und benachrichtigen sofort die Hütte und die Behörden.", outcome: "Das ist die richtige Wahl: Das Foto ist schon eine Quelle, und die Fachleute können alles sorgfältig bergen und untersuchen." },
        { label: "Wir tun so, als wäre nichts, und gehen ins Tal zurück.", outcome: "Das schmelzende Eis hätte den Körper Sonne und Wetter ausgesetzt: In kurzer Zeit wäre er verdorben, und eine einzigartige Quelle wäre verloren gegangen." }
      ],
      answer: 1,
      explain: "Erika und Helmut Simon fotografierten am 19. September 1991 die Leiche und benachrichtigten die Hütte. Am Anfang dachten alle an einen vor Kurzem verstorbenen Bergsteiger, und die erste Bergung wurde in Eile mit einem Presslufthammer durchgeführt, wodurch der Körper und einige Gegenstände etwas beschädigt wurden. Dann erkannte der Archäologe <b>Konrad Spindler</b>, dass er mehr als 4000 Jahre alt war (heute wissen wir: etwa 5300). Seitdem ist Ötzi einer der meistuntersuchten Funde der Welt. Die Regel der Archäologen lautet: <b>nicht anfassen, dokumentieren, melden</b>. Wer antike Funde macht, muss die Behörden benachrichtigen: Sie gehören allen."
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Quellen zu verstehen",
      intro: "Quellen versteht man besser, wenn man Historiker spielt.",
      tabs: [
        {
          label: "📦 Die Erinnerungskiste",
          html: `<p>Bereite zu Hause eine <b>Zeitkiste</b> vor: Leg ein Foto von dir hinein, eine Zeichnung, ein Spielzeug, das du nicht mehr benutzt, und einen von dir geschriebenen Brief („Heute bin ich 7 Jahre alt und mag gern …“). Verschließe sie und schreibe darauf: „In 10 Jahren zu öffnen“.</p>
<p>In 10 Jahren wird diese Kiste eine kleine Sammlung von <b>Quellen</b> über dich sein! Auf der ganzen Welt vergräbt man so „Zeitkapseln“ für die Nachwelt.</p>`
        },
        {
          label: "🕵️ Die Fragen des Detektivs",
          html: `<p>Stelle zu jeder Quelle die <b>5 Fragen</b> des Detektivs. Dreh die Karten um!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "❓ Was ist das?", back: "Ein Brief, ein Gefäß, ein Foto, eine Erzählung …" },
              { front: "👤 Wer hat es gemacht?", back: "Eine berühmte Person, ein Kind, ein Soldat, ein Handwerker …" },
              { front: "📅 Wann?", back: "Ich schaue auf das Datum, die Bodenschicht, wie es gemacht ist." },
              { front: "📍 Wo?", back: "Wo es gefunden oder geschrieben wurde." },
              { front: "🎯 Warum?", back: "Wozu diente es? Was wollte es erzählen?" }
            ]
          }
        },
        {
          label: "🌍 Quellen rund um die Welt",
          html: `<p>Manche Quellen sind so wichtig, dass sie auf der ganzen Welt berühmt sind. Dreh den Globus und finde sie!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 46.78, lon: 10.84, label: "Ötzi (Alpen)", color: "#0ea5e9" },
              { lat: 40.75, lon: 14.49, label: "Pompeji", color: "#ef4444" },
              { lat: 45.05, lon: 1.17, label: "Höhle von Lascaux: Malereien von vor etwa 17.000 Jahren", color: "#a16207" },
              { lat: 31.4, lon: 30.42, label: "Stein von Rosetta (Ägypten)", color: "#eab308" },
              { lat: 34.38, lon: 109.27, label: "Terrakotta-Armee (China)", color: "#b45309" },
              { lat: -13.16, lon: -72.55, label: "Machu Picchu (Peru)", color: "#16a34a" }
            ]
          }
        },
        {
          label: "🍰 Die Schichttorte",
          html: `<p>Stell dir vor, du machst eine Schichttorte: Zuerst kommt der Biskuit, dann die Creme, dann die Schokolade, dann die Sahne. Die Schicht <b>ganz unten</b> hast du <b>zuerst</b> hingelegt, die ganz oben zuletzt.</p>
<p>Der Boden funktioniert genauso: Erde, Staub und Schutt sammeln sich langsam an. Darum weiß der Archäologe, dass er in der Regel <b>antike</b> Gegenstände findet, je <b>tiefer</b> er gräbt. Diese Idee heißt <b>Stratigrafie</b>.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf2f8"/>
<rect x="150" y="40" width="300" height="35" rx="6" fill="#ffffff" stroke="#9ca3af" stroke-width="2"/>
<rect x="150" y="75" width="300" height="35" fill="#78350f"/>
<rect x="150" y="110" width="300" height="35" fill="#fde68a"/>
<rect x="150" y="145" width="300" height="45" rx="6" fill="#fbbf24"/>
<text x="470" y="63" font-size="16" fill="#334155" font-weight="bold">4. Sahne (zuletzt)</text>
<text x="470" y="98" font-size="16" fill="#78350f" font-weight="bold">3. Schokolade</text>
<text x="470" y="133" font-size="16" fill="#a16207" font-weight="bold">2. Creme</text>
<text x="470" y="173" font-size="16" fill="#b45309" font-weight="bold">1. Biskuit</text>
<text x="20" y="63" font-size="16" fill="#16a34a" font-weight="bold">jünger ↑</text>
<text x="20" y="173" font-size="16" fill="#7c2d12" font-weight="bold">älter ↓</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Quellen: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "passato", label: "Die Vergangenheit", x: 50, y: 6, color: "#64748b", html: "Alles, was schon geschehen ist.", why: "Die Vergangenheit kann man nicht noch einmal ansehen: Es gibt keine Zeitmaschine! Wir können sie nur durch die Spuren kennenlernen, die sie hinterlassen hat." },
        { id: "fonti", label: "Die Quellen", x: 50, y: 28, color: "#a855f7", html: "Alle Spuren, die uns Informationen über die Vergangenheit geben.", why: "Jeder Mensch hinterlässt jeden Tag Spuren: Gegenstände, Aufschriften, Fotos, Erinnerungen. Manche bleiben jahrhundertelang erhalten, andere gehen verloren. Darum arbeiten Historiker mit den Quellen, die bis zu uns gekommen sind." },
        { id: "scritte", label: "Schriftliche", x: 12, y: 50, color: "#b45309", html: "Briefe, Tagebücher, Bücher, Urkunden, Inschriften.", why: "Es gibt sie, seit die <b>Schrift</b> erfunden wurde, vor etwa <b>5000 Jahren</b> in Mesopotamien. Darum heißt die Zeit davor <b>Vorgeschichte</b>: „vor der geschriebenen Geschichte“." },
        { id: "materiali", label: "Gegenständliche", x: 37, y: 55, color: "#16a34a", html: "Gegenstände, Häuser, Werkzeuge, Knochen, Münzen.", why: "Sie sind die ältesten Quellen: Sie erzählen uns auch von der Vorgeschichte, als man noch nicht schrieb. Viele findet man beim Graben, weil sie mit der Zeit von Erde bedeckt werden." },
        { id: "iconografiche", label: "Bildliche", x: 63, y: 55, color: "#1d4ed8", html: "Fotos, Zeichnungen, Gemälde, Videos.", why: "Das griechische Wort <i>eikón</i> heißt „Bild“ (daher auch das Wort „Ikone“). Die ersten Bilder sind die Malereien in Höhlen, Zehntausende von Jahren alt; die erste Fotografie stammt von 1826–1827." },
        { id: "orali", label: "Mündliche", x: 88, y: 50, color: "#be185d", html: "Erzählungen, Erinnerungen, mündlich überlieferte Lieder.", why: "Jahrtausendelang wurden Geschichten nur mündlich vom Großvater an den Enkel weitergegeben. Auch die Epen Homers, die Ilias und die Odyssee, wurden jahrhundertelang auswendig gesungen, bevor sie aufgeschrieben wurden." },
        { id: "storico", label: "Historiker und Archäologe", x: 30, y: 82, color: "#0ea5e9", html: "Wer die Quellen sucht, untersucht und vergleicht.", why: "Der griechische Geschichtsschreiber <b>Herodot</b> (vor etwa 2500 Jahren) wird der „Vater der Geschichtsschreibung“ genannt: Er reiste und stellte Fragen, um Nachrichten zu sammeln. Die moderne Archäologie, die methodisch Schicht für Schicht gräbt, entstand in den letzten 200 Jahren." },
        { id: "luoghi", label: "Museen und Archive", x: 70, y: 85, color: "#ef4444", html: "Wo die Quellen aufbewahrt werden.", why: "In <b>Museen</b> werden die Gegenstände aufbewahrt, in <b>Archiven</b> die Urkunden, in <b>Bibliotheken</b> die Bücher. Das Kapitolinische Museum in Rom, 1734 eröffnet, ist eines der ältesten öffentlichen Museen der Welt." }
      ],
      edges: [
        ["passato", "fonti", "hinterlässt Spuren:"],
        ["fonti", "scritte", "können sein"],
        ["fonti", "materiali", "können sein"],
        ["fonti", "iconografiche", "können sein"],
        ["fonti", "orali", "können sein"],
        ["materiali", "storico", "gräbt der"],
        ["scritte", "storico", "liest der"],
        ["storico", "luoghi", "bewahrt sie auf in"],
        ["iconografiche", "luoghi", "ausgestellt in den"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Detektive der Geschichte",
      questions: [
        { type: "mc", q: "Wer sucht Spuren der Vergangenheit, indem er im Boden gräbt?", options: ["Der Archäologe", "Der Koch", "Der Astronaut"], answer: 0, explain: "Der Archäologe gräbt und untersucht die gegenständlichen Quellen." },
        { type: "tf", q: "In den Bodenschichten sind die Gegenstände weiter unten in der Regel die ältesten.", answer: true, explain: "Die Schichten lagern sich übereinander ab: Die tiefsten sind die ältesten." },
        { type: "mc", q: "Warum ist es nützlich, mehrere Quellen zu vergleichen?", options: ["Um Zeit zu verschwenden", "Weil eine Quelle allein sich irren kann", "Weil alle Quellen gleich sind"], answer: 1, explain: "Wenn mehrere Quellen dasselbe sagen, ist die Information sicherer." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Die <b>Quellen</b> sind die Spuren der Vergangenheit.</li>
<li>Es gibt <b>schriftliche</b>, <b>gegenständliche</b>, <b>bildliche</b> und <b>mündliche</b> Quellen.</li>
<li>Der <b>Historiker</b> sucht sie, stellt Fragen, <b>vergleicht</b> sie und erzählt.</li>
<li>Der <b>Archäologe</b> gräbt: weiter unten = älter.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Historische Quelle", d: "Jede Spur, die uns Informationen über die Vergangenheit gibt." },
    { t: "Schriftliche Quelle", d: "Quelle mit geschriebenen Worten: Briefe, Tagebücher, Urkunden." },
    { t: "Gegenständliche Quelle", d: "Ein Gegenstand: Spielzeug, Werkzeuge, Gefäße, Häuser, Knochen." },
    { t: "Bildliche Quelle", d: "Ein Bild: Fotos, Zeichnungen, Gemälde, Videos." },
    { t: "Mündliche Quelle", d: "Eine mündliche Erzählung, wie die Erinnerungen der Großeltern." },
    { t: "Historiker", d: "Wer die Quellen untersucht, um die Vergangenheit zu rekonstruieren." },
    { t: "Archäologe", d: "Wer die Spuren der Vergangenheit durch Graben sucht und untersucht." },
    { t: "Archiv", d: "Ort, an dem Urkunden aufbewahrt werden." },
    { t: "Fund", d: "Antiker Gegenstand, der bei einer Ausgrabung gefunden wurde." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was ist eine historische Quelle?", options: ["Ein Brunnen auf dem Platz", "Eine Spur, die uns Informationen über die Vergangenheit gibt", "Ein Märchenbuch"], answer: 1, explain: "Quellen sind die Spuren der Vergangenheit." },
      { type: "mc", q: "Ein Brief der Urgroßmutter ist eine … Quelle.", options: ["schriftliche", "mündliche", "gegenständliche"], answer: 0, explain: "Er enthält geschriebene Worte: eine schriftliche Quelle." },
      { type: "mc", q: "Ein antikes Schwert ist eine … Quelle.", options: ["bildliche", "gegenständliche", "mündliche"], answer: 1, explain: "Es ist ein Gegenstand: eine gegenständliche Quelle." },
      { type: "mc", q: "Ein Gemälde ist eine … Quelle.", options: ["bildliche", "schriftliche", "mündliche"], answer: 0, explain: "Bilder sind bildliche Quellen." },
      { type: "tf", q: "Die vom Opa erzählten Erinnerungen sind eine mündliche Quelle.", answer: true, explain: "Es sind mündlich erzählte Informationen." },
      { type: "tf", q: "Eine einzige Quelle reicht immer, um sicher zu sein.", answer: false, explain: "Quellen können sich irren: Besser, man vergleicht mehr als eine." },
      { type: "text", q: "Wie nennt man jemanden, der gräbt, um die Spuren der Vergangenheit zu finden?", answer: ["Archäologe", "der Archäologe", "Archäologin", "die Archäologin"], explain: "Der Archäologe." },
      { type: "order", q: "Eine Ausgrabung: Bring die Gegenstände in die richtige Reihenfolge, von den jüngsten (oben) zu den ältesten (unten).", items: ["Getränkedose von heute", "Münze des Opas", "römisches Gefäß", "vorgeschichtliche Knochen"], explain: "Die tiefsten Schichten sind die ältesten." },
      { type: "mc", q: "Wo befindet sich Ötzi, der Mann aus dem Eis, heute?", options: ["In Bozen", "In Paris", "In New York"], answer: 0, explain: "Im Südtiroler Archäologiemuseum in Bozen." },
      { type: "mc", q: "Welcher Vulkan begrub Pompeji im Jahr 79 n. Chr.?", options: ["Der Ätna", "Der Vesuv", "Der Stromboli"], answer: 1, explain: "Der Vesuv, in der Nähe von Neapel." },
      { type: "mc", q: "Wo werden antike Urkunden aufbewahrt?", options: ["In Archiven", "In Kühlschränken", "In der Turnhalle"], answer: 0, explain: "Archive bewahren Urkunden auf." }
    ]
  }
});
