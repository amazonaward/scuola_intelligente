TOPIC('de', {
  id: "m3-sci-universo",
  title: "Das Universum",
  intro: "Die Sonne ist nur einer von Hunderten Milliarden Sternen unserer Galaxie, der <b>Milchstraße</b>, die ihrerseits eine von Milliarden Galaxien ist. Wie werden Sterne geboren und wie sterben sie? Wie groß ist das Universum? Und wie hat alles angefangen, vor <b>13,8 Milliarden Jahren</b>?",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Riesige Entfernungen messen",
      html: `<p>Im Weltraum sind Kilometer eine zu kleine Einheit. Astronomen benutzen:</p>
<ul>
<li>die <b>Astronomische Einheit (AE)</b>: die mittlere Entfernung Erde–Sonne, etwa <b>150 Millionen km</b> (149,6). Sie wird innerhalb des Sonnensystems benutzt: Jupiter ist etwa 5,2 AE entfernt, Neptun etwa 30 AE.</li>
<li>das <b>Lichtjahr (Lj)</b>: die Strecke, die das Licht in einem Jahr zurücklegt. Das Licht reist mit etwa <b>300.000 km pro Sekunde</b>, also:<br>
300.000 km/s × 31.557.600 s ≈ <b>9.460 Milliarden km</b> (9,46 × 10<sup>12</sup> km).</li>
</ul>
<p>⚠️ Das Lichtjahr ist <b>keine</b> Zeitangabe, sondern eine <b>Entfernung</b>!</p>
<p>Überraschende Folge: <b>In die Ferne zu schauen heißt, in die Vergangenheit zu schauen</b>. Das Licht der Sonne braucht etwa 8 Minuten und 20 Sekunden bis zu uns: Wir sehen die Sonne so, wie sie vor 8 Minuten war. Der nächste Stern nach der Sonne, <b>Proxima Centauri</b>, ist <b>4,24 Lichtjahre</b> entfernt: Wir sehen ihn so, wie er vor mehr als 4 Jahren war.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Wie lange braucht das Sonnenlicht?",
      html: `<p>Entfernung Erde–Sonne ≈ 150.000.000 km. Lichtgeschwindigkeit ≈ 300.000 km/s.</p>
<p>Zeit = Entfernung : Geschwindigkeit = 150.000.000 : 300.000 = <b>500 Sekunden</b> = 8 Minuten und 20 Sekunden.</p>
<p>Und mit einem Raumschiff? Die Sonde <b>Voyager 1</b>, 1977 gestartet, ist das am weitesten entfernte menschengemachte Objekt und fliegt mit etwa 17 km/s. Um Proxima Centauri zu erreichen (etwa 40.000 Milliarden km), würde sie brauchen:<br>
40.000.000.000.000 : 17 ≈ 2,35 × 10<sup>12</sup> Sekunden ≈ <b>75.000 Jahre</b>!</p>`
    },
    {
      type: "3d",
      title: "Unsere Nachbarschaft: das Sonnensystem",
      scene: "solar",
      options: { labels: true },
      caption: "Das Sonnensystem: die Sonne, 8 Planeten, ihre Monde, Asteroiden und Kometen. Die wirklichen Entfernungen wären viel größer: Maßstabsgetreu wären die Planeten unsichtbar."
    },
    {
      type: "text",
      title: "2. Was ist ein Stern?",
      html: `<p>Ein <b>Stern</b> ist eine riesige Kugel aus sehr heißem Gas (vor allem <b>Wasserstoff</b> und <b>Helium</b>), die von selbst Licht und Wärme erzeugt. In seinem <b>Kern</b> sind Temperatur und Druck so hoch (bei der Sonne etwa <b>15 Millionen °C</b>), dass Wasserstoffkerne verschmelzen und Helium bilden: Das ist die <b>Kernfusion</b>.</p>
<p>Bei der Fusion verschwindet ein kleiner Teil der Masse und wird zu Energie, nach der berühmten Formel von Einstein <b>E = mc²</b>. Die Sonne verwandelt jede Sekunde etwa <b>600 Millionen Tonnen</b> Wasserstoff in Helium.</p>
<p>Die Sterne haben je nach Oberflächentemperatur unterschiedliche <b>Farben</b>:</p>
<ul>
<li>🔵 <b>blau/weiß</b>: die heißesten (über 10.000 °C), z. B. Rigel;</li>
<li>🟡 <b>gelb</b>: mittlere, wie die Sonne (etwa 5.500 °C);</li>
<li>🔴 <b>rot</b>: die „kältesten“ (etwa 3.000 °C), z. B. Beteigeuze.</li>
</ul>
<p>Genau wie das Eisen eines Schmieds: Erst wird es rot, dann gelb, dann weiß, je heißer es wird.</p>`
    },
    {
      type: "3d",
      title: "Im Inneren der Sonne",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fbbf24", label: "Photosphäre (die Oberfläche, ~5.500 °C)" },
          { r: 0.97, color: "#f97316", label: "Konvektionszone: Das Gas steigt auf und sinkt ab" },
          { r: 0.7, color: "#ef4444", label: "Strahlungszone: Die Energie kommt sehr langsam heraus" },
          { r: 0.25, color: "#fef9c3", label: "Kern: Fusion bei ~15 Millionen °C" }
        ]
      },
      caption: "Dreh die Sonne: Die im Kern erzeugte Energie braucht Zehntausende Jahre, um die Strahlungszone zu durchqueren und die Oberfläche zu erreichen, und dann nur 8 Minuten bis zur Erde."
    },
    {
      type: "3d",
      title: "Die Atome, die die Sterne zum Leuchten bringen",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Fe"] },
      caption: "Wasserstoff (1 Proton) ist der Brennstoff der Sterne: Durch Fusion wird er zu Helium (2 Protonen). Die größten Sterne fusionieren weiter und erzeugen Kohlenstoff, Sauerstoff … bis zum Eisen."
    },
    {
      type: "text",
      title: "3. Das Leben eines Sterns",
      html: `<p>Sterne werden geboren, leben und sterben. Ihr Schicksal hängt vor allem von der <b>Masse</b> ab.</p>
<ol>
<li><b>Nebel</b>: Eine Wolke aus Gas und Staub zieht sich durch die Schwerkraft zusammen.</li>
<li><b>Protostern</b>: Das Zentrum erhitzt sich; bei etwa 10 Millionen °C zündet die Fusion und es entsteht ein <b>Stern</b>.</li>
<li><b>Stabile Phase</b> (Hauptreihe): Der Stern verbrennt Wasserstoff für Millionen oder Milliarden Jahre. Die Sonne ist in der Mitte ihres Lebens: Sie ist etwa <b>4,6 Milliarden Jahre</b> alt und wird noch etwa 5 leben.</li>
<li><b>Roter Riese</b>: Ist der Wasserstoff im Kern aufgebraucht, bläht sich der Stern gewaltig auf.</li>
<li><b>Das Ende</b>:
<ul>
<li>Sterne wie die Sonne stoßen ihre äußeren Schichten ab (ein <b>planetarischer Nebel</b>) und hinterlassen einen kleinen, sehr dichten Stern, den <b>Weißen Zwerg</b>, so groß wie die Erde;</li>
<li>Sterne mit mehr als etwa 8 Sonnenmassen explodieren in einer <b>Supernova</b>, die einige Wochen lang heller leuchten kann als eine ganze Galaxie. Zurück bleibt ein <b>Neutronenstern</b> oder, wenn die Masse riesig ist, ein <b>Schwarzes Loch</b>, so dicht, dass nicht einmal das Licht entkommen kann.</li>
</ul></li>
</ol>
<p>Paradox: Je größer ein Stern ist, desto <b>kürzer lebt er</b>, weil er seinen Brennstoff viel schneller verbraucht. Riesensterne leben wenige Millionen Jahre; die kleinen Roten Zwerge Tausende von Milliarden.</p>`
    },
    {
      type: "svg",
      title: "Der Lebenszyklus der Sterne",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#0f172a"/>
<ellipse cx="60" cy="160" rx="48" ry="34" fill="#7c3aed" opacity="0.7"/>
<ellipse cx="55" cy="150" rx="30" ry="20" fill="#c084fc" opacity="0.6"/>
<text x="60" y="220" font-size="15" fill="#e2e8f0" text-anchor="middle">Nebel</text>
<line x1="112" y1="160" x2="150" y2="110" stroke="#94a3b8" stroke-width="3"/>
<line x1="112" y1="160" x2="150" y2="215" stroke="#94a3b8" stroke-width="3"/>
<circle cx="175" cy="95" r="16" fill="#facc15"/>
<text x="175" y="70" font-size="14" fill="#fde68a" text-anchor="middle">Stern wie die Sonne</text>
<circle cx="175" cy="230" r="24" fill="#60a5fa"/>
<text x="175" y="275" font-size="14" fill="#bfdbfe" text-anchor="middle">Massereicher Stern</text>
<line x1="195" y1="95" x2="265" y2="95" stroke="#94a3b8" stroke-width="3"/>
<line x1="202" y1="230" x2="265" y2="230" stroke="#94a3b8" stroke-width="3"/>
<circle cx="310" cy="95" r="36" fill="#ef4444"/>
<text x="310" y="150" font-size="14" fill="#fecaca" text-anchor="middle">Roter Riese</text>
<circle cx="310" cy="230" r="44" fill="#dc2626"/>
<text x="310" y="292" font-size="14" fill="#fecaca" text-anchor="middle">Roter Überriese</text>
<line x1="348" y1="95" x2="410" y2="95" stroke="#94a3b8" stroke-width="3"/>
<line x1="356" y1="230" x2="410" y2="230" stroke="#94a3b8" stroke-width="3"/>
<circle cx="445" cy="95" r="28" fill="none" stroke="#22d3ee" stroke-width="6" opacity="0.8"/>
<text x="445" y="145" font-size="13" fill="#a5f3fc" text-anchor="middle">Planetarischer Nebel</text>
<polygon points="445,195 455,220 482,222 461,238 468,264 445,249 422,264 429,238 408,222 435,220" fill="#fde047"/>
<text x="445" y="292" font-size="14" fill="#fef08a" text-anchor="middle">Supernova!</text>
<line x1="475" y1="95" x2="540" y2="95" stroke="#94a3b8" stroke-width="3"/>
<line x1="485" y1="225" x2="540" y2="200" stroke="#94a3b8" stroke-width="3"/>
<line x1="485" y1="235" x2="540" y2="265" stroke="#94a3b8" stroke-width="3"/>
<circle cx="565" cy="95" r="8" fill="#f8fafc"/>
<text x="565" y="125" font-size="14" fill="#f8fafc" text-anchor="middle">Weißer Zwerg</text>
<circle cx="565" cy="195" r="6" fill="#a5b4fc"/>
<text x="565" y="222" font-size="13" fill="#c7d2fe" text-anchor="middle">Neutronenstern</text>
<circle cx="565" cy="270" r="14" fill="#000000" stroke="#f97316" stroke-width="3"/>
<text x="565" y="305" font-size="14" fill="#fdba74" text-anchor="middle">Schwarzes Loch</text>
</svg>`,
      caption: "Der obere Zweig ist die Zukunft der Sonne; der untere der Weg der viel größeren Sterne."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Licht und Sterne",
      questions: [
        { type: "tf", q: "Das Lichtjahr ist eine Einheit zur Messung der Zeit.", answer: false, explain: "Es ist eine Entfernung: die Strecke, die das Licht in einem Jahr zurücklegt, etwa 9.460 Milliarden km." },
        { type: "mc", q: "Was erzeugt die Energie eines Sterns?", options: ["Die Verbrennung von Kohle", "Die Kernfusion von Wasserstoff", "Die Elektrizität von Blitzen"], answer: 1, explain: "Im Kern verschmilzt Wasserstoff zu Helium und setzt dabei Energie frei." },
        { type: "mc", q: "Welcher Stern ist an der Oberfläche am heißesten?", options: ["Ein roter Stern", "Ein gelber Stern", "Ein blauer Stern"], answer: 2, explain: "Blaue Sterne sind die heißesten, rote die am wenigsten heißen." },
        { type: "mc", q: "Wie wird die Sonne enden?", options: ["Als Schwarzes Loch", "Als Weißer Zwerg", "Sie wird in einer Supernova explodieren"], answer: 1, explain: "Die Sonne hat nicht genug Masse, um zu explodieren: Sie wird zum Roten Riesen und dann zum Weißen Zwerg." }
      ]
    },
    {
      type: "text",
      title: "4. Die Galaxien und die Milchstraße",
      html: `<p>Eine <b>Galaxie</b> ist eine riesige Ansammlung von Sternen, Gas, Staub und dunkler Materie, die von der Schwerkraft zusammengehalten wird. Nach der Einteilung von <b>Edwin Hubble</b> (1926) gibt es drei Haupttypen:</p>
<ul>
<li><b>Spiralgalaxien</b> (mit Armen, die sich um ein Zentrum drehen, wie unsere);</li>
<li><b>elliptische Galaxien</b> (in Form eines abgeplatteten Balls, oft mit alten Sternen);</li>
<li><b>irreguläre Galaxien</b> (ohne feste Form, wie die Magellanschen Wolken).</li>
</ul>
<p>Unsere Galaxie ist die <b>Milchstraße</b>: eine Spirale mit einem zentralen Balken, etwa <b>100.000 Lichtjahre</b> breit, mit <b>100–400 Milliarden Sternen</b>. Die Sonne liegt in einem Randarm, etwa 26.000 Lichtjahre vom Zentrum entfernt, und braucht rund <b>230 Millionen Jahre</b> für einen vollen Umlauf. Im Zentrum sitzt ein riesiges Schwarzes Loch, <b>Sagittarius A*</b>, mit einer Masse von etwa 4 Millionen Sonnen: Sein erstes „Foto“ wurde 2022 veröffentlicht.</p>
<p>In dunklen Nächten, fern von Lichtern, sieht man die Milchstraße als helles Band am Himmel: Wir betrachten sie „von der Kante“, von innen. Es war <b>Galilei</b>, der 1610 mit dem Fernrohr entdeckte, dass dieses Band aus unzähligen Sternen besteht.</p>
<p>Die nächste große Galaxie ist <b>Andromeda</b>, etwa <b>2,5 Millionen Lichtjahre</b> entfernt: Sie ist das am weitesten entfernte Objekt, das man mit bloßem Auge sehen kann. In etwa 4–5 Milliarden Jahren wird sie mit der Milchstraße zusammenstoßen.</p>`
    },
    {
      type: "svg",
      title: "Die Milchstraße von oben (und wo wir sind)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#020617"/>
<ellipse cx="300" cy="160" rx="60" ry="30" fill="#fde68a" opacity="0.9"/>
<path d="M300 160 C 380 100, 470 140, 470 200 C 470 260, 380 290, 300 280" fill="none" stroke="#93c5fd" stroke-width="22" opacity="0.55"/>
<path d="M300 160 C 220 220, 130 180, 130 120 C 130 60, 220 30, 300 40" fill="none" stroke="#93c5fd" stroke-width="22" opacity="0.55"/>
<path d="M340 150 C 420 60, 540 90, 545 170" fill="none" stroke="#c4b5fd" stroke-width="14" opacity="0.45"/>
<path d="M260 170 C 180 260, 60 230, 55 150" fill="none" stroke="#c4b5fd" stroke-width="14" opacity="0.45"/>
<circle cx="440" cy="245" r="7" fill="#facc15" stroke="#ffffff" stroke-width="2"/>
<line x1="447" y1="250" x2="500" y2="285" stroke="#facc15" stroke-width="2"/>
<text x="505" y="295" font-size="16" fill="#facc15">Die Sonne (wir!)</text>
<text x="300" y="166" font-size="14" fill="#0f172a" text-anchor="middle" font-weight="bold">Zentrum</text>
<line x1="50" y1="25" x2="550" y2="25" stroke="#e2e8f0" stroke-width="2"/>
<text x="300" y="18" font-size="15" fill="#e2e8f0" text-anchor="middle">etwa 100.000 Lichtjahre</text>
<line x1="300" y1="160" x2="440" y2="245" stroke="#f472b6" stroke-width="2" stroke-dasharray="6"/>
<text x="360" y="225" font-size="14" fill="#f9a8d4">26.000 Lj</text>
</svg>`,
      caption: "Vereinfachte Zeichnung: Die Milchstraße ist eine Balkenspirale; das Sonnensystem liegt am Rand."
    },
    {
      type: "text",
      title: "5. Der Urknall: Wie alles begann",
      html: `<p>Im Jahr 1929 entdeckte der amerikanische Astronom <b>Edwin Hubble</b>, dass sich fast alle Galaxien von uns <b>entfernen</b>, und zwar umso schneller, je weiter sie weg sind. Der Belgier <b>Georges Lemaître</b> (ein Priester und Physiker) hatte es schon 1927 vorhergesagt: Das Universum <b>dehnt sich aus</b>.</p>
<p>Wenn sich heute alles voneinander entfernt, musste in der Vergangenheit alles näher, dichter und heißer gewesen sein. Vor etwa <b>13,8 Milliarden Jahren</b> war das Universum winzig klein und glühend heiß: Von da an beginnt seine Ausdehnung, genannt <b>Urknall</b> (Big Bang).</p>
<ul>
<li>In den ersten Minuten bildeten sich die Kerne von <b>Wasserstoff</b> und <b>Helium</b>.</li>
<li>Nach etwa <b>380.000 Jahren</b> kühlte das Universum genug ab, dass sich Atome bilden konnten, und es wurde für Licht durchsichtig.</li>
<li>Nach einigen Hundert Millionen Jahren leuchteten die <b>ersten Sterne</b> und die ersten Galaxien auf.</li>
<li>Vor etwa <b>4,6 Milliarden Jahren</b> entstanden die Sonne und die Erde.</li>
</ul>
<p><b>Die Beweise</b> für den Urknall: (1) die von Hubble beobachtete Ausdehnung; (2) die <b>kosmische Hintergrundstrahlung</b>, die „schwache Wärme“, die vom Urknall übrig blieb und 1965 zufällig von Arno Penzias und Robert Wilson entdeckt wurde (Nobelpreis 1978); (3) die Menge an Wasserstoff und Helium im Universum, genau die, die die Theorie vorhersagt.</p>
<p>⚠️ Der Urknall war <b>keine</b> Explosion an einem Punkt im Raum: Es ist der Raum selbst, der sich überall ausdehnt.</p>`
    },
    {
      type: "widget",
      title: "Die Geschichte des Universums (logarithmische Skala)",
      widget: "timeline",
      options: {
        scale: "log",
        events: [
          { year: -13800000000, label: "Urknall", icon: "💥" },
          { year: -13500000000, label: "Erste Sterne", icon: "✨" },
          { year: -4600000000, label: "Die Sonne entsteht", icon: "☀️" },
          { year: -3800000000, label: "Erstes Leben", icon: "🦠" },
          { year: -66000000, label: "Ende der Dinosaurier", icon: "🦖" },
          { year: -300000, label: "Homo sapiens", icon: "🧑" },
          { year: 1610, label: "Galilei: Fernrohr", icon: "🔭" },
          { year: 1969, label: "Mensch auf dem Mond", icon: "🌕" }
        ]
      },
      caption: "Auf einer normalen Skala wäre die ganze Menschheitsgeschichte ein unsichtbarer Punkt am rechten Ende: Deshalb benutzt man eine logarithmische Skala."
    },
    {
      type: "example",
      title: "Praxisbeispiel: den Himmel beobachten",
      html: `<p>In einer klaren Nacht, fern von den Lichtern der Stadt, kannst du beobachten:</p>
<ul>
<li>etwa <b>2.000–3.000 Sterne</b> mit bloßem Auge (in der Stadt vielleicht 50!);</li>
<li>den <b>Polarstern</b>, der nach Norden zeigt: Du findest ihn, indem du die hintere Seite des „Wagens“ des Großen Bären 5-mal verlängerst;</li>
<li><b>Sirius</b>, den hellsten Stern am Nachthimmel, 8,6 Lichtjahre entfernt;</li>
<li>die <b>Andromedagalaxie</b>, ein heller Fleck im Herbst: Ihr Licht ist vor 2,5 Millionen Jahren losgeflogen, als auf der Erde die ersten Menschen der Gattung <i>Homo</i> lebten.</li>
</ul>
<p>Mit einer Astronomie-App oder einer Sternkarte kannst du Sternbilder wie Orion, Kassiopeia und den Skorpion erkennen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Wir bestehen aus Sternenstaub",
      html: `<p>Der Kohlenstoff in deiner DNA, der Sauerstoff, den du atmest, das Kalzium deiner Knochen und das Eisen deines Blutes wurden im Inneren alter Sterne erzeugt und dann durch deren Explosionen im Weltraum verteilt. Nur Wasserstoff und Helium (und ein wenig Lithium) stammen direkt vom Urknall. Wie der Astronom Carl Sagan sagte: <i>„Wir sind aus demselben Stoff wie die Sterne.“</i></p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Das Universum, das wir nicht sehen",
      html: `<p>Alles, was wir sehen – Sterne, Planeten, Gas, wir selbst – ist nur etwa <b>5 %</b> des Universums. Rund <b>27 %</b> sind <b>dunkle Materie</b>, die kein Licht aussendet, sich aber durch ihre Schwerkraft bemerkbar macht; die restlichen etwa <b>68 %</b> sind die <b>dunkle Energie</b>, die die Ausdehnung beschleunigt. Niemand weiß bisher, was sie sind: Vielleicht findest du es heraus!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Ein sehr schwerer Teelöffel",
      html: `<p>Ein <b>Neutronenstern</b> hat mehr Masse als die Sonne, zusammengepresst in eine Kugel von etwa 20 km Durchmesser: Ein Teelöffel seiner Materie würde auf der Erde Hunderte Millionen Tonnen wiegen, mehr als ein Berg. Und das Weltraumteleskop <b>James Webb</b>, am 25. Dezember 2021 gestartet, beobachtet Galaxien, deren Licht vor mehr als 13 Milliarden Jahren losgeflogen ist.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, sich das Universum vorzustellen",
      intro: "Zahlen wie „Milliarden Lichtjahre“ sagen unserem Gehirn nichts. Hier sind ein paar Tricks, um sie greifbar zu machen.",
      tabs: [
        {
          label: "⚽ Das Sonnensystem im Maßstab",
          html: `<p>Verkleinern wir alles um etwa <b>4,6 Milliarden</b>: Die Sonne wird zu einem Ball von <b>30 cm</b>.</p>
<table>
<tr><th>Objekt</th><th>Im Maßstab</th><th>Entfernung vom Ball</th></tr>
<tr><td>☀️ Sonne</td><td>Ball von 30 cm</td><td>—</td></tr>
<tr><td>🌍 Erde</td><td>Körnchen von 2,7 mm</td><td>etwa 32 m</td></tr>
<tr><td>🪐 Jupiter</td><td>Murmel von 3 cm</td><td>etwa 170 m</td></tr>
<tr><td>🔵 Neptun</td><td>Kügelchen von 1 cm</td><td>fast 1 km</td></tr>
<tr><td>⭐ Proxima Centauri</td><td>eine Kirsche</td><td>etwa <b>8.600 km</b>: wie von Italien nach China!</td></tr>
</table>
<p>Das Universum besteht vor allem aus … <b>leerem Raum</b>.</p>`
        },
        {
          label: "📅 Der kosmische Kalender",
          html: `<p>Der Astronom <b>Carl Sagan</b> schlug vor, die ganze Geschichte des Universums auf <b>ein einziges Jahr</b> zusammenzupressen. Jeder Tag entspricht etwa 38 Millionen Jahren; jede Sekunde etwa 440 Jahren.</p>
<ul>
<li>1. Januar, Mitternacht: <b>Urknall</b>;</li>
<li>Anfang September: Die <b>Sonne</b> und die <b>Erde</b> entstehen;</li>
<li>Ende September: Das <b>Leben</b> erscheint (Bakterien);</li>
<li>30. Dezember, morgens: Die <b>Dinosaurier</b> sterben aus;</li>
<li>31. Dezember, 23:48 Uhr: Der <b>Homo sapiens</b> erscheint;</li>
<li>die letzten <b>11 Sekunden</b> vor Mitternacht: die ganze schriftlich überlieferte Geschichte, von den Ägyptern bis heute.</li>
</ul>`
        },
        {
          label: "🎈 Der Ballon, der sich aufbläst",
          html: `<p>Male Punkte auf einen leeren Luftballon und blase ihn dann auf: Alle Punkte entfernen sich voneinander, und die weiter entfernten entfernen sich schneller. Kein Punkt ist „das Zentrum“. Die Galaxien sind wie die Punkte und der Raum ist das Gummi des Ballons: Es ist der Raum, der sich dehnt.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<circle cx="120" cy="130" r="55" fill="#f87171"/>
<circle cx="105" cy="115" r="5" fill="#1e293b"/><circle cx="135" cy="120" r="5" fill="#1e293b"/><circle cx="120" cy="148" r="5" fill="#1e293b"/>
<line x1="120" y1="185" x2="120" y2="230" stroke="#64748b" stroke-width="2"/>
<text x="120" y="250" font-size="15" text-anchor="middle" fill="#0f172a">gestern</text>
<text x="255" y="135" font-size="40" text-anchor="middle" fill="#64748b">→</text>
<circle cx="430" cy="125" r="110" fill="#f87171"/>
<circle cx="385" cy="85" r="7" fill="#1e293b"/><circle cx="470" cy="95" r="7" fill="#1e293b"/><circle cx="430" cy="170" r="7" fill="#1e293b"/>
<line x1="385" y1="85" x2="470" y2="95" stroke="#1e293b" stroke-dasharray="5"/>
<line x1="385" y1="85" x2="430" y2="170" stroke="#1e293b" stroke-dasharray="5"/>
<text x="430" y="252" font-size="15" text-anchor="middle" fill="#0f172a">heute: Alle Abstände haben sich verdoppelt</text>
</svg>`
        },
        {
          label: "🪐 In 3D erkunden",
          html: `<p>Beginne bei der „Nachbarschaft“, die du kennst, dem Sonnensystem: Dreh es und schau dir die Bahnen an. Dann denk daran, dass <b>all das</b>, maximal vergrößert, ein unsichtbarer Punkt in der Milchstraße ist, die ihrerseits ein Punkt unter Milliarden Galaxien ist.</p>`,
          scene: "solar",
          options: { labels: true }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Universums: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "bigbang", label: "Urknall", x: 50, y: 6, color: "#f97316", html: "Der Beginn der Ausdehnung des Universums, vor etwa 13,8 Milliarden Jahren.", why: "Vorgeschlagen von <b>Lemaître</b> (1927) auf der Grundlage der Gleichungen der Allgemeinen Relativitätstheorie von Einstein; bestätigt durch die von <b>Hubble</b> (1929) beobachtete Ausdehnung und die Hintergrundstrahlung, die <b>Penzias und Wilson</b> (1965) entdeckten. Das Alter ergibt sich aus der Messung der Ausdehnungsgeschwindigkeit und der Hintergrundstrahlung (Planck-Satellit)." },
        { id: "elementi", label: "Wasserstoff und Helium", x: 20, y: 24, color: "#38bdf8", html: "Die ersten Elemente, in den ersten Minuten entstanden.", why: "Das Universum war zu heiß und kühlte zu schnell ab, um schwerere Kerne aufzubauen: Deshalb sind noch heute etwa 74 % der normalen Materie Wasserstoff und etwa 24 % Helium." },
        { id: "gravita", label: "Schwerkraft", x: 80, y: 24, color: "#a855f7", html: "Die Kraft, die Massen gegenseitig anzieht.", why: "Beschrieben von <b>Newton</b> (1687) und dann von <b>Einstein</b> mit der Allgemeinen Relativitätstheorie (1915) als Krümmung der Raumzeit. Sie lässt Gaswolken zu Sternen verdichten und hält die Galaxien zusammen." },
        { id: "nebulose", label: "Nebel", x: 50, y: 34, color: "#c084fc", html: "Wolken aus Gas und Staub: die „Wiegen“ der Sterne.", why: "Wo das Gas etwas dichter ist, zieht die Schwerkraft es an und presst es immer mehr zusammen, bis es sich erhitzt: So entstehen die Sterne, oft in Gruppen." },
        { id: "stelle", label: "Sterne", x: 30, y: 55, color: "#facc15", html: "Gaskugeln, die durch Kernfusion Energie erzeugen.", why: "1920 vermutete Arthur Eddington, dass die Sterne durch die Fusion von Wasserstoff leuchten; 1938–39 erklärte <b>Hans Bethe</b> die genauen Reaktionen. Die Energie entsteht aus der Masse, die „verschwindet“, nach E = mc²." },
        { id: "nuovielementi", label: "Neue Elemente", x: 12, y: 78, color: "#22c55e", html: "Kohlenstoff, Sauerstoff, Eisen, Gold … von den Sternen erzeugt.", why: "1957 zeigte ein berühmter Artikel (Burbidge, Burbidge, Fowler und Hoyle), wie die Sterne die Elemente „kochen“; die schwereren als Eisen entstehen in Supernovae und bei Zusammenstößen von Neutronensternen." },
        { id: "fine", label: "Weiße Zwerge, Supernovae, Schwarze Löcher", x: 50, y: 78, color: "#64748b", html: "Das Endschicksal der Sterne hängt von ihrer Masse ab.", why: "Der Inder <b>Subrahmanyan Chandrasekhar</b> berechnete 1930, dass ein sterbender Stern oberhalb einer bestimmten Masse sich nicht mehr halten kann: Er kollabiert. Schwarze Löcher waren eine Vorhersage der Relativitätstheorie; das erste Bild von einem stammt von 2019." },
        { id: "galassie", label: "Galaxien", x: 80, y: 55, color: "#3b82f6", html: "Riesige Sternsysteme; unsere ist die Milchstraße.", why: "Bis 1924 glaubten viele, die Milchstraße sei das ganze Universum. <b>Hubble</b> maß die Entfernung von Andromeda und zeigte, dass sie eine eigene, viel weiter entfernte Galaxie ist." },
        { id: "noi", label: "Sonnensystem und Leben", x: 85, y: 92, color: "#16a34a", html: "Die Sonne, die Erde und wir, vor 4,6 Milliarden Jahren entstanden.", why: "Die Sonne bildete sich aus einer Wolke, die mit den Resten früherer Sterne angereichert war: Ohne deren Explosionen gäbe es keinen Kohlenstoff, Sauerstoff und kein Eisen, also die Bausteine des Lebens." }
      ],
      edges: [
        ["bigbang", "elementi", "erzeugt"],
        ["bigbang", "gravita", "dann wirkt die"],
        ["elementi", "nebulose", "bilden die"],
        ["gravita", "nebulose", "presst die"],
        ["nebulose", "stelle", "lassen entstehen"],
        ["stelle", "nuovielementi", "stellen her"],
        ["stelle", "fine", "sterben als"],
        ["fine", "nuovielementi", "verstreuen"],
        ["gravita", "galassie", "hält zusammen die"],
        ["stelle", "galassie", "bilden die"],
        ["nuovielementi", "noi", "bauen auf"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Galaxien und Urknall",
      questions: [
        { type: "mc", q: "Wie heißt unsere Galaxie?", options: ["Andromeda", "Milchstraße", "Magellansche Wolke"], answer: 1, explain: "Wir leben in der Milchstraße, einer Balkenspiralgalaxie." },
        { type: "num", q: "Wie viele Milliarden Jahre ist der Urknall ungefähr her?", answer: 13.8, tol: 0.2, explain: "Etwa 13,8 Milliarden Jahre." },
        { type: "mc", q: "Wer beobachtete 1929, dass sich die Galaxien entfernen?", options: ["Galileo Galilei", "Edwin Hubble", "Isaac Newton"], answer: 1, explain: "Edwin Hubble, am Mount-Wilson-Observatorium." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>1 Lichtjahr ≈ 9.460 Milliarden km: Es ist eine <b>Entfernung</b>. In die Ferne schauen = in die Vergangenheit schauen.</li>
<li>Die Sterne leuchten dank der <b>Kernfusion</b> von Wasserstoff zu Helium.</li>
<li>Kreislauf: Nebel → Stern → Roter Riese → <b>Weißer Zwerg</b> (kleine Sterne) oder <b>Supernova</b> → Neutronenstern oder <b>Schwarzes Loch</b> (große Sterne).</li>
<li>Die <b>Milchstraße</b> ist eine Spiralgalaxie von 100.000 Lichtjahren; Andromeda ist 2,5 Millionen Lichtjahre entfernt.</li>
<li>Das Universum dehnt sich seit dem <b>Urknall</b> vor 13,8 Milliarden Jahren aus.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Lichtjahr", d: "Strecke, die das Licht in einem Jahr zurücklegt: etwa 9.460 Milliarden km." },
    { t: "Astronomische Einheit", d: "Mittlere Entfernung Erde–Sonne, etwa 150 Millionen km." },
    { t: "Kernfusion", d: "Verschmelzung leichter Kerne zu schwereren Kernen, wobei Energie frei wird." },
    { t: "Nebel", d: "Wolke aus Gas und Staub im Weltraum, in der Sterne entstehen." },
    { t: "Weißer Zwerg", d: "Kleiner, sehr dichter Überrest eines Sterns wie der Sonne." },
    { t: "Supernova", d: "Explosion eines sehr massereichen Sterns am Ende seines Lebens." },
    { t: "Schwarzes Loch", d: "Raumgebiet mit so starker Schwerkraft, dass nicht einmal das Licht entkommen kann." },
    { t: "Galaxie", d: "Riesiges System aus Sternen, Gas und Staub, das von der Schwerkraft zusammengehalten wird." },
    { t: "Urknall", d: "Der Beginn der Ausdehnung des Universums vor 13,8 Milliarden Jahren." },
    { t: "Kosmische Hintergrundstrahlung", d: "Schwache Strahlung, die vom frühen Universum übrig blieb, 1965 entdeckt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Das Lichtjahr misst …", options: ["eine Zeit", "eine Entfernung", "eine Geschwindigkeit", "eine Temperatur"], answer: 1, explain: "Es ist die Strecke, die das Licht in einem Jahr zurücklegt." },
      { type: "num", q: "Das Licht reist mit 300.000 km/s. Wie viele Sekunden braucht es für 150.000.000 km?", answer: 500, unit: "s", explain: "150.000.000 : 300.000 = 500 s (8 min 20 s)." },
      { type: "text", q: "Wie heißt das Hauptgas, das in den Sternen „verbrannt“ (fusioniert) wird?", answer: ["wasserstoff", "der wasserstoff", "h", "idrogeno"], explain: "Wasserstoff, der durch Fusion zu Helium wird." },
      { type: "tf", q: "Die massereichsten Sterne leben länger als die kleinen.", answer: false, explain: "Sie verbrauchen den Brennstoff viel schneller: Sie leben kürzer." },
      { type: "order", q: "Bringe das Leben eines Sterns wie der Sonne in die richtige Reihenfolge.", items: ["Nebel", "Protostern", "Stabiler Stern (wie heute)", "Roter Riese", "Weißer Zwerg"], explain: "Von der Gaswolke bis zum Weißen Zwerg am Ende." },
      { type: "mc", q: "Was kann nach der Explosion einer Supernova übrig bleiben?", options: ["Ein Weißer Zwerg", "Ein Neutronenstern oder ein Schwarzes Loch", "Ein gasförmiger Planet"], answer: 1, explain: "Massereiche Sterne hinterlassen einen Neutronenstern oder ein Schwarzes Loch." },
      { type: "mc", q: "Wie breit ist die Milchstraße ungefähr?", options: ["100 Lichtjahre", "100.000 Lichtjahre", "100 Milliarden Lichtjahre"], answer: 1, explain: "Etwa 100.000 Lichtjahre." },
      { type: "text", q: "Wie heißt die nächste große Spiralgalaxie, die man mit bloßem Auge sehen kann?", answer: ["andromeda", "andromedagalaxie", "die andromedagalaxie", "galaxie andromeda", "m31"], explain: "Andromeda (M31), etwa 2,5 Millionen Lichtjahre entfernt." },
      { type: "mc", q: "Welcher dieser Punkte ist KEIN Beweis für den Urknall?", options: ["Die Entfernung der Galaxien voneinander", "Die kosmische Hintergrundstrahlung", "Die Mondphasen", "Die Häufigkeit von Wasserstoff und Helium"], answer: 2, explain: "Die Mondphasen hängen von der Stellung von Mond, Erde und Sonne ab." },
      { type: "tf", q: "Das Eisen in unserem Blut wurde im Inneren von Sternen erzeugt.", answer: true, explain: "Alle Elemente, die schwerer sind als Helium (bis auf ein wenig Lithium), stammen aus Sternen." },
      { type: "mc", q: "Welche Farbe haben die kältesten Sterne?", options: ["Blau", "Gelb", "Rot"], answer: 2, explain: "Etwa 3.000 °C an der Oberfläche: Sie erscheinen rot." },
      { type: "num", q: "Proxima Centauri ist 4,24 Lichtjahre entfernt. Wie viele Jahre ist das Licht unterwegs gewesen, das wir heute sehen?", answer: 4.24, tol: 0.01, unit: "Jahre", explain: "Das Licht braucht 1 Jahr für jedes Lichtjahr: 4,24 Jahre." }
    ]
  }
});
