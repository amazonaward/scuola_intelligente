TOPIC('de', {
  id: "m1-sci-animali-invertebrati-vertebrati",
  title: "Die Tiere: Wirbellose und Wirbeltiere",
  intro: "Vom Schwamm bis zum Oktopus, vom Schmetterling bis zum Wal: Das Reich der <b>Tiere</b> zählt über <b>1,5 Millionen</b> beschriebene Arten. Wir lernen, sie in die zwei großen Gruppen <b>Wirbellose</b> und <b>Wirbeltiere</b> einzuteilen und die Merkmale jeder Gruppe zu erkennen.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Was ist ein Tier?",
      html: `<p>Tiere sind Organismen, die:</p>
<ul>
<li><b>mehrzellig</b> sind, mit <b>eukaryotischen</b> Zellen ohne Zellwand;</li>
<li><b>heterotroph</b> sind: Sie müssen andere Organismen <b>fressen</b> (Pflanzenfresser, Fleischfresser, Allesfresser, Filtrierer …);</li>
<li>fast immer in der Lage sind, sich zumindest in einer Lebensphase zu <b>bewegen</b>;</li>
<li>Zellen haben, die in <b>Gewebe</b> und meist in <b>Organe</b> und <b>Organsysteme</b> spezialisiert sind (Nervensystem, Muskeln …).</li>
</ul>
<p>Die große Einteilung ist einfach: Tiere <b>ohne Wirbelsäule</b> sind die <b>Wirbellosen</b>; solche <b>mit Wirbelsäule</b> (einem inneren Skelett aus Knochen oder Knorpel) sind die <b>Wirbeltiere</b>.</p>
<p>Überraschung: Die Wirbellosen machen etwa <b>95 %</b> aller Tierarten aus! Die Wirbeltiere sind „nur“ etwa 70 000 Arten.</p>
<p>Ein weiteres nützliches Kriterium ist die <b>Symmetrie</b> des Körpers: Schwämme sind <b>asymmetrisch</b>, Quallen und Seesterne haben eine <b>radiale</b> Symmetrie (wie ein Rad), fast alle anderen haben eine <b>bilaterale</b> Symmetrie (eine rechte Hälfte gleich der linken, wie wir).</p>`
    },
    {
      type: "text",
      title: "2. Die Wirbellosen",
      html: `<table>
<tr><th>Gruppe (Stamm)</th><th>Merkmale</th><th>Beispiele</th></tr>
<tr><td><b>Schwämme</b> (Poriferen)</td><td>die einfachsten: keine Organe, der Körper ist voller Poren, durch die sie das Wasser filtern</td><td>Schwämme</td></tr>
<tr><td><b>Hohltiere</b> (Nesseltiere)</td><td>radiale Symmetrie, Tentakel mit Nesselzellen</td><td>Quallen, Korallen, Seeanemonen</td></tr>
<tr><td><b>Plattwürmer</b></td><td>flache Würmer</td><td>Strudelwurm, Bandwurm</td></tr>
<tr><td><b>Ringelwürmer</b></td><td>Würmer, deren Körper in Ringe (Segmente) gegliedert ist</td><td>Regenwurm, Blutegel</td></tr>
<tr><td><b>Weichtiere</b> (Mollusken)</td><td>weicher Körper, oft mit Schale; haben einen muskulösen „Fuß“</td><td>Schnecken (Weinbergschnecke, Nacktschnecke), Muscheln (Miesmuschel, Venusmuschel), Kopffüßer (Oktopus, Tintenfisch, Kalmar)</td></tr>
<tr><td><b>Gliederfüßer</b></td><td>gegliederte Beine und ein <b>Außenskelett</b> aus Chitin</td><td>Insekten, Spinnentiere, Krebstiere, Tausendfüßer</td></tr>
<tr><td><b>Stachelhäuter</b></td><td>„stachlige Haut“, als Erwachsene fünfstrahlige radiale Symmetrie</td><td>Seestern, Seeigel</td></tr>
</table>
<p><b>Die Gliederfüßer</b> sind die zahlreichste Gruppe im ganzen Tierreich. Ihr äußeres Skelett (<b>Außenskelett</b>) ist wie eine Rüstung: Es schützt, wächst aber nicht mit. Um zu wachsen, müssen sie sich <b>häuten</b> und lassen das alte „Kleid“ zurück.</p>
<ul>
<li><b>Insekten</b>: Körper in 3 Teilen (<b>Kopf, Brust, Hinterleib</b>), <b>6 Beine</b>, 2 Fühler, oft Flügel (Ameise, Biene, Schmetterling, Käfer).</li>
<li><b>Spinnentiere</b>: Körper in 2 Teilen, <b>8 Beine</b>, keine Fühler (Spinne, Skorpion, Zecke).</li>
<li><b>Krebstiere</b>: 2 Paar Fühler, oft 10 Beine, atmen mit Kiemen (Krabbe, Garnele, Hummer; und die Assel!).</li>
<li><b>Tausendfüßer</b>: sehr viele Segmente, jedes mit 1 oder 2 Beinpaaren (Hundertfüßer, Doppelfüßer).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Der Körper eines Insekts",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<ellipse cx="160" cy="150" rx="45" ry="40" fill="#92400e"/>
<ellipse cx="270" cy="150" rx="60" ry="45" fill="#b45309"/>
<ellipse cx="420" cy="150" rx="95" ry="55" fill="#d97706"/>
<path d="M130 120 Q100 60 70 50 M140 115 Q130 55 110 35" stroke="#78350f" stroke-width="4" fill="none"/>
<circle cx="140" cy="140" r="9" fill="#111827"/>
<g stroke="#78350f" stroke-width="5" fill="none">
<path d="M240 190 L215 250 L200 260"/><path d="M270 195 L270 260 L260 275"/><path d="M300 190 L330 250 L345 260"/>
<path d="M240 110 L215 55 L200 45"/><path d="M270 105 L270 40 L260 25"/><path d="M300 110 L330 55 L345 45"/>
</g>
<ellipse cx="300" cy="80" rx="80" ry="25" fill="#bfdbfe" opacity="0.8" stroke="#1e40af" stroke-width="2"/>
<path d="M400 120 L440 120 M390 150 L460 150 M400 180 L440 180" stroke="#92400e" stroke-width="3"/>
</svg>`,
        spots: [
          { x: 160, y: 165, label: "Kopf" },
          { x: 270, y: 150, label: "Brust" },
          { x: 430, y: 150, label: "Hinterleib" },
          { x: 100, y: 55, label: "Fühler" },
          { x: 140, y: 140, label: "Facettenauge" },
          { x: 330, y: 250, label: "Bein (3 Paar)" },
          { x: 320, y: 80, label: "Flügel" }
        ]
      },
      caption: "Die Beine und Flügel der Insekten sitzen alle an der Brust."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Wirbellosen",
      questions: [
        { type: "mc", q: "Wie viele Beine hat eine Spinne?", options: ["6", "8", "10", "Das hängt von der Art ab"], answer: 1, explain: "Spinnentiere haben 8 Beine; Insekten 6." },
        { type: "mc", q: "Zu welcher Gruppe gehört der Oktopus?", options: ["Hohltiere", "Weichtiere", "Gliederfüßer", "Stachelhäuter"], answer: 1, explain: "Der Oktopus ist ein Weichtier, ein Kopffüßer: Seine Schale ist im Lauf der Evolution verschwunden." },
        { type: "tf", q: "Gliederfüßer wachsen durch Häutung, weil sich das Außenskelett nicht erweitert.", answer: true, explain: "Das starre Außenskelett wird abgelegt und durch ein größeres ersetzt." }
      ]
    },
    {
      type: "text",
      title: "3. Die Wirbeltiere",
      html: `<p>Die Wirbeltiere gehören zum Stamm der <b>Chordatiere</b>. Sie haben ein <b>inneres Skelett</b> (Endoskelett) mit der <b>Wirbelsäule</b>, die das <b>Rückenmark</b> schützt, einen Schädel, der das Gehirn schützt, und meist zwei Paar Gliedmaßen (Flossen, Beine, Flügel, Arme).</p>
<p>Sie teilen sich in <b>5 Klassen</b>:</p>
<table>
<tr><th>Klasse</th><th>Haut</th><th>Atmung</th><th>Temperatur</th><th>Fortpflanzung</th></tr>
<tr><td>🐟 <b>Fische</b></td><td>Schuppen</td><td>Kiemen</td><td>veränderlich (wechselwarm)</td><td>fast alle eierlegend, Eier im Wasser</td></tr>
<tr><td>🐸 <b>Amphibien</b></td><td>nackt und feucht</td><td>als Larven Kiemen, dann Lungen und Haut</td><td>veränderlich</td><td>eierlegend, Eier im Wasser; <b>Metamorphose</b></td></tr>
<tr><td>🦎 <b>Reptilien</b></td><td>Hornschuppen</td><td>Lungen</td><td>veränderlich</td><td>eierlegend, Eier mit Schale an Land</td></tr>
<tr><td>🐦 <b>Vögel</b></td><td>Federn und Daunen</td><td>Lungen mit Luftsäcken</td><td><b>konstant</b> (gleichwarm)</td><td>eierlegend, brüten die Eier aus</td></tr>
<tr><td>🐻 <b>Säugetiere</b></td><td>Haare</td><td>Lungen</td><td><b>konstant</b></td><td>fast alle lebendgebärend; <b>säugen</b> ihre Jungen</td></tr>
</table>
<p><b>Wechselwarme und gleichwarme Tiere.</b> Die <b>Wechselwarmen</b> (früher „Kaltblüter“ genannt) haben eine Temperatur, die der der Umgebung folgt: Die Eidechse wärmt sich morgens in der Sonne auf. Die <b>Gleichwarmen</b> (Vögel und Säugetiere) erzeugen Wärme und halten eine konstante Temperatur (wir etwa 37 °C), sodass sie auch in den kältesten Klimazonen leben können, aber viel mehr fressen müssen.</p>
<p><b>Fortpflanzung.</b> <b>Eierlegend</b>: Sie legen Eier, die außerhalb der Mutter schlüpfen. <b>Lebendgebärend</b>: Das Junge entwickelt sich in der Mutter und kommt schon fertig geformt zur Welt. <b>Ei-lebendgebärend</b>: Die Eier bleiben und schlüpfen im Körper der Mutter (Viper, einige Haie).</p>`
    },
    {
      type: "svg",
      title: "Die Metamorphose des Frosches",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<rect y="150" width="600" height="150" fill="#a5f3fc"/>
<g fill="#111827"><circle cx="80" cy="200" r="7"/><circle cx="95" cy="210" r="7"/><circle cx="75" cy="220" r="7"/><circle cx="92" cy="228" r="7"/></g>
<g fill="none" stroke="#475569" stroke-width="2"><circle cx="80" cy="200" r="12"/><circle cx="95" cy="210" r="12"/><circle cx="75" cy="220" r="12"/><circle cx="92" cy="228" r="12"/></g>
<text x="85" y="275" font-size="16" text-anchor="middle" font-weight="bold">1 Laich</text>
<ellipse cx="220" cy="215" rx="20" ry="14" fill="#4b5563"/>
<path d="M240 215 Q265 200 280 220 Q262 222 240 220 Z" fill="#6b7280"/>
<text x="235" y="275" font-size="16" text-anchor="middle" font-weight="bold">2 Kaulquappe</text>
<text x="235" y="293" font-size="14" text-anchor="middle">Kiemen</text>
<ellipse cx="380" cy="210" rx="26" ry="18" fill="#4d7c0f"/>
<path d="M406 210 Q430 200 445 214" stroke="#4d7c0f" stroke-width="8" fill="none"/>
<path d="M365 225 L350 245 M395 225 L410 245" stroke="#4d7c0f" stroke-width="6"/>
<text x="390" y="275" font-size="16" text-anchor="middle" font-weight="bold">3 Beine</text>
<ellipse cx="530" cy="130" rx="40" ry="26" fill="#16a34a"/>
<circle cx="510" cy="108" r="9" fill="#ffffff"/><circle cx="550" cy="108" r="9" fill="#ffffff"/>
<circle cx="510" cy="108" r="4" fill="#111827"/><circle cx="550" cy="108" r="4" fill="#111827"/>
<path d="M495 150 L470 170 M565 150 L590 170" stroke="#16a34a" stroke-width="8"/>
<text x="530" y="200" font-size="16" text-anchor="middle" font-weight="bold">4 erwachsener Frosch</text>
<text x="530" y="218" font-size="14" text-anchor="middle">Lungen</text>
<text x="300" y="40" font-size="18" text-anchor="middle" fill="#0e7490" font-weight="bold">Vom Wasser aufs Land: „Amphibium“ = Doppelleben</text>
</svg>`,
      caption: "Die Kaulquappe lebt im Wasser und atmet mit Kiemen; der erwachsene Frosch hat Lungen und lebt auch an Land."
    },
    {
      type: "widget",
      title: "Wirbeltier oder Wirbelloses?",
      widget: "classify",
      options: {
        groups: ["Wirbellose", "Wirbeltiere"],
        items: [["🐌 Weinbergschnecke", 0], ["🦋 Schmetterling", 0], ["🪱 Regenwurm", 0], ["🦀 Krabbe", 0], ["🐙 Oktopus", 0], ["⭐ Seestern", 0], ["🪼 Qualle", 0], ["🦈 Hai", 1], ["🐍 Schlange", 1], ["🐬 Delfin", 1], ["🦇 Fledermaus", 1], ["🐸 Frosch", 1]]
      },
      caption: "Der Hai hat ein Skelett aus Knorpel, aber er hat die Wirbelsäule: Er ist ein Wirbeltier."
    },
    {
      type: "widget",
      title: "Ordne die Klasse ihrem Merkmal zu",
      widget: "match",
      options: {
        pairs: [
          ["Fische", "Kiemen und Flossen"],
          ["Amphibien", "nackte Haut und Metamorphose"],
          ["Reptilien", "Hornschuppen und Eier mit Schale"],
          ["Vögel", "Federn, Schnabel und hohle Knochen"],
          ["Säugetiere", "Haare und Milchdrüsen"]
        ]
      }
    },
    {
      type: "3d",
      title: "Das Ei mit Schale: ein „Raumschiff“ für das Leben an Land",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fef3c7", label: "Schale (Kalk, mit Poren)" },
          { r: 0.96, color: "#e2e8f0", label: "Häute" },
          { r: 0.92, color: "#e0f2fe", label: "Eiweiß (Wasser und Proteine)" },
          { r: 0.48, color: "#facc15", label: "Dotter (Nahrungsvorrat)" },
          { r: 0.12, color: "#f97316", label: "Embryo (Keimscheibe)" }
        ]
      },
      caption: "Das Ei der Reptilien und Vögel trägt Wasser und Nahrung mit sich und lässt durch die Poren der Schale Luft durch: Darum kann es an Land abgelegt werden, weit weg vom Wasser."
    },
    {
      type: "example",
      title: "Praxisbeispiel: eine Wurmfarm beobachten",
      html: `<ol>
<li>Nimm ein großes Glas und fülle es abwechselnd schichtweise mit <b>Erde</b> und hellem <b>Sand</b>.</li>
<li>Lege oben einige trockene Blätter und 3–4 im Garten gefundene <b>Regenwürmer</b> darauf; befeuchte ein wenig.</li>
<li>Decke das Glas mit schwarzem Karton ab (Regenwürmer meiden das Licht) und stelle es an einen kühlen Ort.</li>
<li>Nach einer Woche sind die Schichten <b>vermischt</b> und die Blätter sind unter der Erde verschwunden!</li>
</ol>
<p>Die Regenwürmer (Ringelwürmer) graben Gänge, durch die Luft und Wasser in den Boden gelangen und die ihn fruchtbar machen. Charles Darwin hat sie 40 Jahre lang untersucht. Am Ende <b>setzt du die Regenwürmer wieder in den Garten</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: ein Schlüssel zum Erkennen der Wirbeltiere",
      html: `<p>Du hast ein Tier mit Wirbelsäule gefunden. Folge den Fragen:</p>
<ol>
<li>Hat es <b>Haare</b> und säugt es seine Jungen? → <b>Säugetier</b>. Sonst geh zu 2.</li>
<li>Hat es <b>Federn</b>? → <b>Vogel</b>. Sonst geh zu 3.</li>
<li>Atmet es sein Leben lang mit <b>Kiemen</b> und hat Flossen? → <b>Fisch</b>. Sonst geh zu 4.</li>
<li>Hat es eine <b>nackte und feuchte</b> Haut? → <b>Amphibium</b>. Wenn es <b>trockene Hornschuppen</b> hat → <b>Reptil</b>.</li>
</ol>
<p>Probiere es mit dem <b>Delfin</b>: Er hat als Jungtier einige Haare und säugt → Säugetier, auch wenn er im Wasser lebt und Flossen hat!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … das Schnabeltier ist ein Säugetier, das Eier legt?",
      html: `<p>Als 1798 das erste ausgestopfte Schnabeltier aus Australien in England ankam, hielten die Wissenschaftler es für einen Scherz: Entenschnabel, Biberschwanz, Schwimmfüße … Und doch ist es ein <b>Säugetier</b>: Es hat ein Fell und säugt seine Jungen. Aber es <b>legt Eier</b>! Es ist ein <b>Kloakentier</b>, wie der Ameisenigel. Außerdem hat das Männchen an den Hinterbeinen einen giftigen Sporn.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … der Oktopus hat drei Herzen?",
      html: `<p>Der <b>Oktopus</b> hat <b>3 Herzen</b> (zwei pumpen das Blut zu den Kiemen, eines zum Rest des Körpers), <b>blaues</b> Blut (weil es Kupfer statt Eisen enthält) und etwa zwei Drittel seiner Neuronen liegen in den <b>Armen</b>, die teilweise „allein entscheiden“ können. Er kann Gläser öffnen und im Nu die Farbe wechseln.</p>
<p>Und das größte Tier, das je gelebt hat, ist kein Dinosaurier: Es ist der <b>Blauwal</b>, ein Säugetier, das bis zu etwa <b>30 Meter</b> lang und bis zu etwa 150–190 Tonnen schwer wird. Sein Herz wiegt so viel wie ein Kleinwagen!</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Tiere zu verstehen",
      intro: "Tabellen reichen nicht? Versuche es mit einem Vergleich, mit dem Baum des Lebens oder mit Lernkarten.",
      tabs: [
        {
          label: "🛡️ Rüstung oder inneres Skelett?",
          html: `<p>Stell dir zwei Ritter vor:</p>
<ul>
<li>Der erste trägt eine <b>Rüstung</b> aus Metall (wie das Außenskelett der Gliederfüßer): Er ist bestens geschützt, aber wenn er wächst, muss er sie ablegen und sich eine neue machen lassen, und in der Zwischenzeit ist er verwundbar. Eine sehr große Rüstung wäre zu schwer: Darum sind Insekten klein.</li>
<li>Der zweite hat ein inneres <b>Gerüst</b>, wie die Stangen eines Zeltes (das Skelett der Wirbeltiere): Es wächst mit dem Körper mit und trägt auch riesige Tiere wie Elefanten und Wale.</li>
</ul>
<p>Weichtiere und Würmer sind dagegen wie Menschen ohne Rüstung und ohne Gerüst: Sie stützen sich mit Wasser oder mit Muskeln und bauen sich manchmal ein „Haus“ (die Schale).</p>`
        },
        {
          label: "🌳 Der Baum des Lebens",
          html: `<p>Wissenschaftler zeichnen die Tiere wie die Äste eines <b>Stammbaums</b>: Näher beieinanderliegende Gruppen haben jüngere gemeinsame Vorfahren. Beachte: Die Wirbeltiere sind ein kleiner Zweig inmitten eines riesigen Baums aus Wirbellosen!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f7fee7"/>
<path d="M300 290 L300 240" stroke="#78350f" stroke-width="12"/>
<path d="M300 240 L60 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L150 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L250 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L350 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L450 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L550 60" stroke="#15803d" stroke-width="8"/>
<text x="60" y="45" font-size="16" text-anchor="middle" font-weight="bold">Schwämme</text>
<text x="150" y="45" font-size="16" text-anchor="middle" font-weight="bold">Quallen</text>
<text x="250" y="45" font-size="16" text-anchor="middle" font-weight="bold">Würmer</text>
<text x="350" y="45" font-size="16" text-anchor="middle" font-weight="bold">Weichtiere</text>
<text x="450" y="45" font-size="16" text-anchor="middle" font-weight="bold">Gliederfüßer</text>
<text x="550" y="35" font-size="16" text-anchor="middle" font-weight="bold" fill="#15803d">Chordatiere</text>
<text x="550" y="55" font-size="14" text-anchor="middle" fill="#15803d">(Wirbeltiere)</text>
<text x="300" y="275" font-size="15" text-anchor="start" dx="15">gemeinsamer Vorfahre</text>
</svg>`
        },
        {
          label: "🃏 Lernkarten der Tiere",
          html: `<p>Dreh die Karten um und überprüfe, ob du weißt, zu welcher Gruppe jedes Tier gehört.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🦐 Garnele", back: "Gliederfüßer, Krebstier" },
              { front: "🕷️ Skorpion", back: "Gliederfüßer, Spinnentier (8 Beine)" },
              { front: "🐚 Venusmuschel", back: "Weichtier, Muschel" },
              { front: "🐢 Schildkröte", back: "Wirbeltier, Reptil" },
              { front: "🐧 Pinguin", back: "Wirbeltier, Vogel (fliegt nicht, schwimmt)" },
              { front: "🐋 Wal", back: "Wirbeltier, Säugetier" },
              { front: "🦎 Salamander", back: "Wirbeltier, Amphibium (keine Eidechse!)" },
              { front: "🪸 Koralle", back: "Hohltier (Nesseltier)" }
            ]
          }
        },
        {
          label: "🌍 Wie man sie weltweit zählt",
          html: `<p>Von etwa 1,5 Millionen beschriebenen Tierarten sind:</p>
<ul>
<li>Insekten: etwa <b>1 Million</b> (allein die Käfer sind etwa 400 000!);</li>
<li>andere Wirbellose (Weichtiere, Spinnentiere, Krebstiere, Würmer …): einige Hunderttausend;</li>
<li>Fische: etwa 36 000; Vögel: etwa 11 000; Reptilien: etwa 12 000; Amphibien: etwa 8 700; Säugetiere: etwa 6 500.</li>
</ul>
<p>Der britische Biologe J.B.S. Haldane antwortete auf die Frage, was er beim Studium der Natur über den Schöpfer gelernt habe, scherzhaft: „Dass er eine übermäßige Vorliebe für Käfer hat.“</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Tierreichs: Tippe und entdecke das Warum",
      nodes: [
        { id: "animali", label: "Tiere", x: 50, y: 5, color: "#f97316", html: "Mehrzellig, eukaryotisch, heterotroph.", why: "Die ersten Tiere erschienen vor mehr als 600 Millionen Jahren in den Meeren. Da sie keine Fotosynthese betreiben, entwickelten sie sich so, dass sie sich bewegen und Nahrung suchen konnten: Daher Muskeln und Nervensystem." },
        { id: "invert", label: "Wirbellose", x: 25, y: 25, color: "#a16207", html: "Ohne Wirbelsäule: etwa 95 % der Arten.", why: "Es ist keine echte Verwandtschaftsgruppe, sondern alle, die „keine Wirbeltiere sind“: Darum umfasst sie sehr verschiedene Tiere, vom Schwamm bis zum Oktopus." },
        { id: "vert", label: "Wirbeltiere", x: 75, y: 25, color: "#2563eb", html: "Mit Wirbelsäule und innerem Skelett.", why: "Sie stammen von kleinen marinen Chordatieren mit einer biegsamen Rückensaite ab. Die ersten kieferlosen Fische erschienen vor etwa 500 Millionen Jahren." },
        { id: "artropodi", label: "Gliederfüßer", x: 10, y: 52, color: "#d97706", html: "Gegliederte Beine und Außenskelett aus Chitin.", why: "Das Außenskelett schützt und verhindert das Austrocknen: Darum gehörten die Gliederfüßer zu den ersten Tieren, die vor über 400 Millionen Jahren das Festland eroberten." },
        { id: "molluschi", label: "Weichtiere", x: 35, y: 52, color: "#ca8a04", html: "Weicher Körper, oft mit Schale.", why: "Die Schale besteht aus Kalziumkarbonat, das vom Mantel gebildet wird: Sie wächst mit dem Tier mit, ohne dass eine Häutung nötig ist." },
        { id: "eterotermi", label: "Wechselwarme", x: 60, y: 52, color: "#0ea5e9", html: "Fische, Amphibien, Reptilien: veränderliche Temperatur.", why: "Sie nutzen die Wärme der Umgebung: Sie verbrauchen wenig Energie und können wochenlang ohne Nahrung auskommen, werden aber bei Kälte langsam." },
        { id: "omeotermi", label: "Gleichwarme", x: 88, y: 52, color: "#ef4444", html: "Vögel und Säugetiere: konstante Temperatur.", why: "Sie erzeugen Wärme, indem sie Nahrung verbrennen, und halten sie mit Federn oder Haaren fest: Sie können auch bei Kälte aktiv sein, müssen aber viel mehr fressen." },
        { id: "uovo", label: "Ei mit Schale", x: 45, y: 80, color: "#facc15", html: "Das Amnioten-Ei der Reptilien und Vögel.", why: "Es enthält sein eigenes „Schwimmbecken“ aus Flüssigkeit: Es erschien vor etwa 310 Millionen Jahren und erlaubte den Wirbeltieren, sich fern vom Wasser fortzupflanzen, anders als die Amphibien." },
        { id: "evoluzione", label: "Evolution", x: 50, y: 97, color: "#16a34a", html: "Alle Tiere stammen von gemeinsamen Vorfahren ab.", why: "Charles Darwin erklärte es 1859 mit der natürlichen Selektion. Darum spiegelt die Klassifikation einen Stammbaum der Verwandtschaft wider." }
      ],
      edges: [
        ["animali", "invert", "ohne Wirbelsäule"],
        ["animali", "vert", "mit Wirbelsäule"],
        ["invert", "artropodi", "die größte Gruppe"],
        ["invert", "molluschi", "umfasst"],
        ["vert", "eterotermi", "Fische, Amphibien, Reptilien"],
        ["vert", "omeotermi", "Vögel, Säugetiere"],
        ["eterotermi", "uovo", "die Reptilien erfinden das"],
        ["uovo", "evoluzione", "Beispiel für"],
        ["artropodi", "evoluzione", "Beispiel für"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Wirbeltiere",
      questions: [
        { type: "mc", q: "Welche Wirbeltiere sind gleichwarm?", options: ["Fische und Amphibien", "Reptilien und Vögel", "Vögel und Säugetiere", "Alle"], answer: 2, explain: "Vögel und Säugetiere halten ihre Körpertemperatur konstant." },
        { type: "tf", q: "Die Fledermaus ist ein Vogel, weil sie fliegt.", answer: false, explain: "Die Fledermaus hat Haare und säugt: Sie ist ein Säugetier." },
        { type: "mc", q: "Welche Klasse macht die Metamorphose von der Wasserlarve zum Erwachsenen durch?", options: ["Reptilien", "Amphibien", "Vögel"], answer: 1, explain: "Die Amphibien: Die Kaulquappe wird zum Frosch." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Tiere: <b>mehrzellig, eukaryotisch, heterotroph</b>.</li>
<li><b>Wirbellose</b> (95 % der Arten): Schwämme, Hohltiere, Würmer, Weichtiere, <b>Gliederfüßer</b>, Stachelhäuter.</li>
<li>Insekten: 3 Teile, <b>6 Beine</b>; Spinnentiere: 2 Teile, <b>8 Beine</b>.</li>
<li><b>Wirbeltiere</b>: Fische, Amphibien, Reptilien (<b>wechselwarm</b>); Vögel, Säugetiere (<b>gleichwarm</b>).</li>
<li>Eierlegend, lebendgebärend, ei-lebendgebärend.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Wirbelloses Tier", d: "Tier ohne Wirbelsäule." },
    { t: "Wirbeltier", d: "Tier mit Wirbelsäule und innerem Skelett." },
    { t: "Außenskelett", d: "Äußeres Skelett aus Chitin bei den Gliederfüßern." },
    { t: "Häutung", d: "Wechsel des Außenskeletts (oder der Haut) während des Wachstums." },
    { t: "Metamorphose", d: "Große Umwandlung des Körpers während der Entwicklung (Kaulquappe → Frosch, Raupe → Schmetterling)." },
    { t: "Wechselwarm", d: "Tier, dessen Temperatur sich mit der der Umgebung ändert." },
    { t: "Gleichwarm", d: "Tier, das seine Körpertemperatur konstant hält." },
    { t: "Eierlegend", d: "Tier, das Eier legt." },
    { t: "Lebendgebärend", d: "Tier, dessen Junges sich im Körper der Mutter entwickelt und schon fertig geformt zur Welt kommt." },
    { t: "Bilaterale Symmetrie", d: "Körper, der sich in zwei spiegelbildliche Hälften, rechts und links, teilen lässt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was unterscheidet Wirbeltiere von Wirbellosen?", options: ["Die Beine", "Die Wirbelsäule", "Die Flügel", "Die Farbe des Blutes"], answer: 1, explain: "Wirbeltiere haben eine Wirbelsäule." },
      { type: "tf", q: "Es gibt viel mehr Arten von Wirbellosen als von Wirbeltieren.", answer: true, explain: "Sie machen etwa 95 % aller Tierarten aus." },
      { type: "num", q: "Wie viele Beine hat ein Insekt?", answer: 6, explain: "Insekten haben 3 Beinpaare, die an der Brust sitzen." },
      { type: "mc", q: "Der Seestern ist …", options: ["ein Fisch", "ein Weichtier", "ein Stachelhäuter", "ein Hohltier"], answer: 2, explain: "Seesterne und Seeigel sind Stachelhäuter, „stachelige Haut“." },
      { type: "mc", q: "Welches Tier ist eine Muschel (zweiklappiges Weichtier)?", options: ["Weinbergschnecke", "Miesmuschel", "Tintenfisch", "Krabbe"], answer: 1, explain: "Die Miesmuschel hat eine Schale aus zwei Klappen." },
      { type: "text", q: "Wie heißt das äußere Skelett der Gliederfüßer?", answer: ["exoskelett", "das exoskelett", "Exoskelett", "Außenskelett", "das Außenskelett", "außenskelett", "Das Exoskelett"], explain: "Das Außenskelett (Exoskelett), aus Chitin." },
      { type: "mc", q: "Welche Wirbeltierklasse hat nackte, feuchte Haut?", options: ["Reptilien", "Amphibien", "Vögel", "Fische"], answer: 1, explain: "Amphibien atmen auch durch die Haut, die feucht bleiben muss." },
      { type: "mc", q: "Was haben nur Säugetiere?", options: ["Eier", "Milchdrüsen und Haare", "Lungen", "Die Wirbelsäule"], answer: 1, explain: "Haare und Milchdrüsen gibt es nur bei Säugetieren." },
      { type: "tf", q: "Die Eidechse ist ein gleichwarmes Tier.", answer: false, explain: "Sie ist ein wechselwarmes Reptil: Sie wärmt sich in der Sonne auf." },
      { type: "order", q: "Bringe die Lebensphasen eines Frosches in die richtige Reihenfolge.", items: ["Laich im Wasser", "Kaulquappe mit Kiemen", "Kaulquappe mit Beinen", "Erwachsener Frosch mit Lungen"], explain: "Das ist die Metamorphose der Amphibien." },
      { type: "mc", q: "Ein Tier, dessen Eier im Körper der Mutter schlüpfen, ist …", options: ["eierlegend", "lebendgebärend", "ei-lebendgebärend"], answer: 2, explain: "Ei-lebendgebärend, wie die Viper." },
      { type: "mc", q: "Das Schnabeltier ist ein besonderes Säugetier, weil es …", options: ["keine Haare hat", "Eier legt", "mit Kiemen atmet"], answer: 1, explain: "Es ist ein Kloakentier: Es säugt seine Jungen, legt aber Eier." }
    ]
  }
});
