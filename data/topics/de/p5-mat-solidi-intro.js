TOPIC('de', {
  id: "p5-mat-solidi-intro",
  title: "Die Körper",
  intro: "Ein Würfel, eine Dose, eine Eistüte, ein Ball: Das sind alles <b>Körper</b>, Figuren, die nicht flach auf einem Blatt liegen, sondern Raum einnehmen. Wir lernen, die <b>Vielflächner</b> (Polyeder) von den <b>Rotationskörpern</b> zu unterscheiden, <b>Flächen, Kanten und Ecken</b> zu zählen und einen Körper in sein <b>Netz</b> „aufzuklappen“.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Von der Ebene in den Raum",
      html: `<p>Die Figuren, die du bisher kennengelernt hast (Quadrat, Dreieck, Kreis …), sind <b>ebene Figuren</b>: Sie haben nur <b>zwei Dimensionen</b>, Länge und Breite. Sie liegen alle auf einem Blatt.</p>
<p>Die <b>Körper</b> haben <b>drei Dimensionen</b>: Länge, Breite und <b>Höhe</b> (oder Tiefe). Sie nehmen Raum ein: Du kannst sie in die Hand nehmen, drehen, füllen.</p>
<p>Die geometrischen Körper teilen sich in zwei große Familien:</p>
<ul>
<li><b>Vielflächner</b> (Polyeder): Sie haben nur <b>ebene Flächen</b> in Form von Vielecken (z. B. Würfel, Pyramide). Wenn du sie hinlegst, rollen sie nie.</li>
<li><b>Rotationskörper</b> (oder „runde“ Körper): Sie haben mindestens eine <b>gekrümmte Fläche</b> (z. B. Zylinder, Kegel, Kugel). Sie können rollen!</li>
</ul>`
    },
    {
      type: "3d",
      title: "Drehe die Körper in 3D",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "box", "prism", "pyramid", "cylinder", "cone", "sphere"], labels: true, color: "#60a5fa" },
      caption: "Benutze die Knöpfe, um den Körper zu wechseln, und drehe ihn mit dem Finger oder der Maus. Welche haben nur ebene Flächen? Welche haben gekrümmte Flächen?"
    },
    {
      type: "text",
      title: "Flächen, Kanten und Ecken",
      html: `<p>Jeder Vielflächner hat drei „Zutaten“:</p>
<ul>
<li>die <b>Flächen</b>: die Vielecke, die ihn umschließen (beim Spielwürfel sind es die 6 Quadrate mit den Punkten);</li>
<li>die <b>Kanten</b>: die Strecken, an denen zwei Flächen zusammentreffen (wenn du mit dem Finger darüberfährst, spürst du den „Rand“);</li>
<li>die <b>Ecken</b>: die Punkte, an denen mehrere Kanten zusammentreffen (die „Spitzen“).</li>
</ul>
<table>
<tr><th>Vielflächner</th><th>Flächen</th><th>Kanten</th><th>Ecken</th></tr>
<tr><td>Würfel</td><td>6</td><td>12</td><td>8</td></tr>
<tr><td>Quader</td><td>6</td><td>12</td><td>8</td></tr>
<tr><td>Prisma mit dreieckiger Grundfläche</td><td>5</td><td>9</td><td>6</td></tr>
<tr><td>Pyramide mit quadratischer Grundfläche</td><td>5</td><td>8</td><td>5</td></tr>
<tr><td>Pyramide mit dreieckiger Grundfläche (Tetraeder)</td><td>4</td><td>6</td><td>4</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Erkenne die Teile des Würfels",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="200,110 380,110 380,290 200,290" fill="#93c5fd" stroke="#1e3a8a" stroke-width="4"/>
<polygon points="200,110 280,40 460,40 380,110" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="4"/>
<polygon points="380,110 460,40 460,220 380,290" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<line x1="200" y1="290" x2="280" y2="220" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="280" y1="220" x2="460" y2="220" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="280" y1="220" x2="280" y2="40" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="8 6"/>
<circle cx="460" cy="40" r="8" fill="#dc2626"/>
<line x1="380" y1="110" x2="380" y2="290" stroke="#f97316" stroke-width="8"/>
</svg>`,
        spots: [
          { x: 290, y: 200, label: "Fläche" },
          { x: 380, y: 200, label: "Kante" },
          { x: 460, y: 40, label: "Ecke" },
          { x: 370, y: 75, label: "Deckfläche" },
          { x: 280, y: 130, label: "Verdeckte Kante" }
        ]
      },
      caption: "Tippe auf jeden Punkt und wähle den richtigen Namen. Die gestrichelten Linien sind die Kanten, die man aus dieser Position nicht sieht."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Vielflächner und runde Körper",
      questions: [
        { type: "mc", q: "Welcher dieser Körper ist ein Vielflächner?", options: ["Der Ball", "Der Spielwürfel", "Die Dose"], answer: 1, explain: "Der Spielwürfel (Würfel) hat nur ebene Flächen: Er ist ein Vielflächner." },
        { type: "num", q: "Wie viele Kanten hat ein Würfel?", answer: 12, explain: "4 oben, 4 unten und 4 senkrechte: 12." },
        { type: "tf", q: "Der Kegel ist ein Rotationskörper.", answer: true, explain: "Er hat eine gekrümmte Fläche und entsteht, wenn man ein rechtwinkliges Dreieck dreht." }
      ]
    },
    {
      type: "text",
      title: "Prismen und Pyramiden",
      html: `<p>Zwei sehr wichtige Familien von Vielflächnern:</p>
<ul>
<li><b>Prisma</b>: Es hat <b>zwei gleiche, parallele Grundflächen</b> (eine oben und eine unten) und Seitenflächen, die <b>Rechtecke</b> sind. Es bekommt seinen Namen von der Form der Grundfläche: dreiseitiges, vierseitiges, fünfseitiges, sechsseitiges Prisma … Der <b>Würfel</b> und der <b>Quader</b> sind besondere Prismen.</li>
<li><b>Pyramide</b>: Sie hat <b>nur eine Grundfläche</b> und Seitenflächen, die <b>Dreiecke</b> sind und sich in einem Punkt oben treffen, der <b>Spitze</b>. Auch sie bekommt ihren Namen von der Grundfläche: dreiseitige Pyramide, vierseitige Pyramide …</li>
</ul>
<p>Trick: Wenn ein Prisma eine Grundfläche mit <b>n</b> Seiten hat, hat es <b>n + 2</b> Flächen. Eine Pyramide mit einer Grundfläche mit <b>n</b> Seiten hat <b>n + 1</b> Flächen.</p>`
    },
    {
      type: "text",
      title: "Die Rotationskörper",
      html: `<p>Warum heißen sie „Rotationskörper“? Weil man sie erhält, indem man eine <b>ebene Figur</b> um eine Linie (die <b>Achse</b>) <b>dreht</b>:</p>
<ul>
<li>ein <b>Rechteck</b>, das sich um eine Seite dreht, bildet einen <b>Zylinder</b> 🥫;</li>
<li>ein <b>rechtwinkliges Dreieck</b>, das sich um eine Kathete dreht, bildet einen <b>Kegel</b> 🍦;</li>
<li>ein <b>Halbkreis</b>, der sich um den Durchmesser dreht, bildet eine <b>Kugel</b> ⚽.</li>
</ul>
<p>Der Zylinder hat 2 kreisförmige Grundflächen, der Kegel hat 1, die Kugel keine: Sie ist ganz gekrümmt!</p>`
    },
    {
      type: "svg",
      title: "Figuren, die sich drehen und zu Körpern werden",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<line x1="100" y1="30" x2="100" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<rect x="100" y="60" width="60" height="140" fill="#fb923c" stroke="#9a3412" stroke-width="3"/>
<ellipse cx="100" cy="60" rx="60" ry="14" fill="none" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<ellipse cx="100" cy="200" rx="60" ry="14" fill="none" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M150 30 A40 12 0 1 1 50 30" fill="none" stroke="#dc2626" stroke-width="3"/>
<polygon points="50,24 44,34 58,34" fill="#dc2626"/>
<text x="100" y="265" font-size="20" text-anchor="middle" font-weight="bold">Rechteck → Zylinder</text>
<line x1="300" y1="30" x2="300" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<polygon points="300,60 300,200 360,200" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<ellipse cx="300" cy="200" rx="60" ry="14" fill="none" stroke="#3f6212" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="300" y1="60" x2="240" y2="200" stroke="#3f6212" stroke-width="2" stroke-dasharray="5 4"/>
<text x="300" y="265" font-size="20" text-anchor="middle" font-weight="bold">Dreieck → Kegel</text>
<line x1="500" y1="30" x2="500" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<path d="M500 60 A70 70 0 0 1 500 200 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<path d="M500 60 A70 70 0 0 0 500 200" fill="none" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="5 4"/>
<text x="500" y="265" font-size="20" text-anchor="middle" font-weight="bold">Halbkreis → Kugel</text>
<text x="300" y="292" font-size="16" text-anchor="middle" fill="#dc2626">die rote gestrichelte Linie ist die Drehachse</text>
</svg>`,
      caption: "Der farbige Teil dreht sich um die rote Achse: Der gestrichelte Umriss zeigt den Körper, der entsteht."
    },
    {
      type: "text",
      title: "Das Netz: einen Körper aufklappen",
      html: `<p>Wenn du eine Pappschachtel nimmst und sie an einigen Kanten „auftrennst“, kannst du sie flach auf den Tisch legen. Die ebene Figur, die du erhältst, heißt <b>Netz</b> (<i>sviluppo</i>) des Körpers.</p>
<ul>
<li>das Netz des <b>Würfels</b> besteht aus <b>6 gleichen Quadraten</b> (es gibt 11 verschiedene Möglichkeiten, es zu zeichnen!);</li>
<li>das Netz des <b>Quaders</b> besteht aus <b>6 Rechtecken</b>, je zwei gleich;</li>
<li>das Netz des <b>Zylinders</b> besteht aus einem <b>Rechteck</b> und <b>2 Kreisen</b>: Das Rechteck ist das Etikett der Dose!</li>
<li>das Netz des <b>Kegels</b> besteht aus einem <b>Kreisausschnitt</b> (einem „Fächer“) und einem Kreis.</li>
</ul>
<p>Die Kugel dagegen hat <b>kein</b> genaues Netz: Man kann sie nicht flach legen, ohne sie zu zerreißen oder zu verformen. Deshalb sind Weltkarten immer ein bisschen „falsch“!</p>`
    },
    {
      type: "svg",
      title: "Das Netz des Würfels",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<g stroke="#166534" stroke-width="3">
<rect x="110" y="20" width="65" height="65" fill="#86efac"/>
<rect x="45" y="85" width="65" height="65" fill="#4ade80"/>
<rect x="110" y="85" width="65" height="65" fill="#22c55e"/>
<rect x="175" y="85" width="65" height="65" fill="#4ade80"/>
<rect x="240" y="85" width="65" height="65" fill="#86efac"/>
<rect x="110" y="150" width="65" height="65" fill="#bbf7d0"/>
</g>
<text x="142" y="60" font-size="18" text-anchor="middle">oben</text>
<text x="142" y="124" font-size="18" text-anchor="middle">vorne</text>
<text x="142" y="190" font-size="18" text-anchor="middle">unten</text>
<text x="272" y="124" font-size="18" text-anchor="middle">hinten</text>
<text x="370" y="110" font-size="40" fill="#166534">→</text>
<polygon points="440,130 520,130 520,210 440,210" fill="#22c55e" stroke="#166534" stroke-width="3"/>
<polygon points="440,130 480,95 560,95 520,130" fill="#86efac" stroke="#166534" stroke-width="3"/>
<polygon points="520,130 560,95 560,175 520,210" fill="#4ade80" stroke="#166534" stroke-width="3"/>
<text x="300" y="270" font-size="20" text-anchor="middle" fill="#14532d">Falte entlang der Kanten: 6 Quadrate werden zu einem Würfel</text>
</svg>`,
      caption: "Eines der 11 möglichen Netze des Würfels. Versuche, es zu zeichnen, auszuschneiden und mit Klebeband zu schließen!"
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Körper-Jagd in der Küche",
      html: `<p>Öffne die Speisekammer und schau genau hin:</p>
<ul>
<li>die Müslipackung ist ein <b>Quader</b> (6 rechteckige Flächen);</li>
<li>die Tomatendose ist ein <b>Zylinder</b>;</li>
<li>die Eistüte ist ein <b>Kegel</b>;</li>
<li>die Orange ist (fast) eine <b>Kugel</b>;</li>
<li>die Toblerone-Packung ist ein <b>Prisma mit dreieckiger Grundfläche</b>;</li>
<li>der pyramidenförmige Teebeutel ist ein <b>Tetraeder</b>.</li>
</ul>
<p>Warum sind Dosen Zylinder und keine Würfel? Weil Zylinder dem Druck besser standhalten, sich gut stapeln lassen und auf den Fließbändern der Fabrik rollen können!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Wie viele Würfelchen?",
      html: `<p>Das <b>Volumen</b> (der Rauminhalt) eines Körpers ist der <b>Raum</b>, den er einnimmt. Man kann es messen, indem man zählt, wie viele gleiche Würfelchen hineinpassen.</p>
<p>Eine Schachtel ist <b>4</b> Würfelchen lang, <b>3</b> breit und <b>2</b> hoch:</p>
<ul>
<li>eine Schicht enthält 4 · 3 = <b>12</b> Würfelchen;</li>
<li>es gibt 2 Schichten: 12 · 2 = <b>24 Würfelchen</b>.</li>
</ul>
<p>Wenn jedes Würfelchen 1 cm Kantenlänge hat, ist das Volumen <b>24 cm³</b> (Kubikzentimeter). Probiere es unten mit den Reglern aus!</p>`
    },
    {
      type: "3d",
      title: "Fülle die Schachtel mit Würfelchen",
      scene: "blocks",
      options: { mode: "volume", a: 4, b: 3, c: 2 },
      caption: "Volumen = Länge · Breite · Höhe. Ändere die drei Maße und zähle die Würfelchen."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Die 5 vollkommenen Körper",
      html: `<p>Es gibt nur <b>5 regelmäßige Polyeder</b>, mit lauter gleichen, regelmäßigen Flächen: das <b>Tetraeder</b> (4 Dreiecke), den <b>Würfel</b> (6 Quadrate), das <b>Oktaeder</b> (8 Dreiecke), das <b>Dodekaeder</b> (12 Fünfecke) und das <b>Ikosaeder</b> (20 Dreiecke).</p>
<p>Man nennt sie auch <b>platonische Körper</b>, nach dem griechischen Philosophen <b>Platon</b>, der sie mit den Elementen verband: Feuer, Erde, Luft, Universum und Wasser. Du findest sie in den <b>Würfeln</b> der Rollenspiele: W4, W6, W8, W12, W20!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Die Bienen und die Sechsecke",
      html: `<p>Die Zellen der Bienenwaben sind <b>Prismen mit sechseckiger Grundfläche</b>. Mit dieser Form schaffen es die Bienen, mehr Zellen mit möglichst wenig Wachs zu bauen, ohne Lücken zu lassen. Schon der griechische Mathematiker Pappos von Alexandria fragte sich vor etwa 1700 Jahren, wie die Bienen so „gut in Geometrie“ sein können!</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Die <b>Körper</b> haben 3 Dimensionen.</li>
<li><b>Vielflächner</b>: nur ebene Flächen (Würfel, Quader, Prisma, Pyramide).</li>
<li><b>Rotationskörper</b>: gekrümmte Flächen (Zylinder, Kegel, Kugel).</li>
<li>Bei Vielflächnern zählen wir <b>Flächen</b>, <b>Kanten</b> und <b>Ecken</b>.</li>
<li>Das <b>Netz</b> ist der „aufgeklappte“, flach ausgebreitete Körper.</li>
<li>Das <b>Volumen</b> ist der eingenommene Raum: Er wird in Würfelchen (cm³) gemessen.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Vielflächner oder Rotationskörper?",
      widget: "classify",
      options: {
        groups: ["Vielflächner", "Rotationskörper"],
        items: [
          ["🎲 Spielwürfel", 0],
          ["⚽ Ball", 1],
          ["🥫 Dose", 1],
          ["📦 Schuhkarton", 0],
          ["🍦 Eistüte", 1],
          ["🔺 Cheops-Pyramide", 0],
          ["🧱 Ziegelstein", 0],
          ["🕯️ zylinderförmige Kerze", 1],
          ["🍫 Toblerone-Packung", 0],
          ["🌍 Globus", 1]
        ]
      },
      caption: "Ziehe oder tippe jeden Gegenstand an und lege ihn in die richtige Gruppe."
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Körper zu verstehen",
      intro: "Körper versteht man besser mit den Händen als mit den Augen: Versuche, sie zu bauen, anzufassen oder eine geheime Formel zu entdecken.",
      tabs: [
        {
          label: "🍡 Zahnstocher und Knete",
          html: `<p>Baue die Vielflächner mit <b>Zahnstochern</b> (den Kanten) und <b>Knetkugeln</b> (den Ecken):</p>
<ul>
<li>für einen Würfel brauchst du <b>12 Zahnstocher</b> und <b>8 Kugeln</b>;</li>
<li>für eine Pyramide mit quadratischer Grundfläche <b>8 Zahnstocher</b> und <b>5 Kugeln</b>;</li>
<li>für ein Tetraeder <b>6 Zahnstocher</b> und <b>4 Kugeln</b>.</li>
</ul>
<p>Dann zähle die leeren „Fenster“: Das sind die <b>Flächen</b>! So zählst du Kanten und Ecken nie wieder falsch.</p>`
        },
        {
          label: "✨ Die Formel von Euler",
          html: `<p>Der große Schweizer Mathematiker <b>Leonhard Euler</b> entdeckte 1750 eine magische Regel, die für alle „normalen“ Polyeder (ohne Löcher) gilt:</p>
<p style="font-size:1.3em;text-align:center"><b>Flächen + Ecken − Kanten = 2</b></p>
<ul>
<li>Würfel: 6 + 8 − 12 = <b>2</b> ✔</li>
<li>Quadratische Pyramide: 5 + 5 − 8 = <b>2</b> ✔</li>
<li>Dreiseitiges Prisma: 5 + 6 − 9 = <b>2</b> ✔</li>
</ul>
<p>Benutze sie, um zu überprüfen, ob du richtig gezählt hast!</p>`
        },
        {
          label: "🔺 Prisma oder Pyramide in 3D",
          html: `<p>Vergleiche ein <b>Prisma</b> und eine <b>Pyramide</b> mit derselben sechseckigen Grundfläche. Das Prisma hat <b>zwei Grundflächen</b> und rechteckige Seitenflächen; die Pyramide hat <b>eine Grundfläche</b> und dreieckige Flächen, die zur Spitze aufsteigen. Benutze die Knöpfe, um von einem zum anderen zu wechseln.</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 1.4, labels: true, color: "#f59e0b", shapes: ["prism", "pyramid"] }
        },
        {
          label: "🙈 Der geheimnisvolle Beutel",
          html: `<p>Spiel für zwei: Lege in einen Beutel einige Gegenstände (einen Würfel, eine Kugel, einen Korken, einen Radiergummi, einen Papierkegel). Der Mitspieler berührt <b>mit geschlossenen Augen</b> einen und muss sagen:</p>
<ul>
<li>hat er ebene oder gekrümmte Flächen? → Vielflächner oder Rotationskörper;</li>
<li>wie viele Spitzen (Ecken) spürt er?</li>
<li>wie viele Ränder (Kanten)?</li>
</ul>
<p>Blinde Kinder lernen Geometrie genau so: mit den <b>Händen</b>!</p>`
        },
        {
          label: "🌍 Berühmte Körper in der Welt",
          html: `<ul>
<li>🇪🇬 Die <b>Pyramiden</b> von Gizeh: Pyramiden mit quadratischer Grundfläche.</li>
<li>🇫🇷 Die <b>Pyramide des Louvre</b> in Paris: aus Glas, auch sie mit quadratischer Grundfläche.</li>
<li>🇮🇹 Der <b>Schiefe Turm von Pisa</b>: ein Zylinder (schief!).</li>
<li>🇧🇪 Das <b>Atomium</b> in Brüssel: 9 Kugeln, verbunden durch zylinderförmige Röhren.</li>
<li>🇯🇵 In Japan werden <b>würfelförmige Wassermelonen</b> angebaut, die in Glaskästen wachsen, weil sie so besser in den Kühlschrank passen!</li>
</ul>`
        },
        {
          label: "🇬🇷 Die fünf Körper des Platon",
          html: "<p>Ein Polyeder heißt <b>regelmäßig</b>, wenn alle seine Flächen <b>gleiche regelmäßige Vielecke</b> sind und sich in jeder Ecke <b>gleich viele</b> Flächen treffen. Der <b>griechische</b> Philosoph <b>Platon</b> (um 360 v. Chr.) sprach im Buch <i>Timaios</i> davon und verband sie mit Feuer, Erde, Luft, Wasser und dem Universum: Deshalb heißen sie <b>platonische Körper</b>. <b>Euklid</b> bewies, dass es <b>nur fünf</b> gibt!</p><table><tr><th>Körper</th><th>Flächen</th><th>Ecken</th><th>Kanten</th></tr><tr><td>Tetraeder</td><td>4 Dreiecke</td><td>4</td><td>6</td></tr><tr><td>Würfel (Hexaeder)</td><td>6 Quadrate</td><td>8</td><td>12</td></tr><tr><td>Oktaeder</td><td>8 Dreiecke</td><td>6</td><td>12</td></tr><tr><td>Dodekaeder</td><td>12 Fünfecke</td><td>20</td><td>30</td></tr><tr><td>Ikosaeder</td><td>20 Dreiecke</td><td>12</td><td>30</td></tr></table><p><b>Warum nur 5?</b> In einer Ecke müssen sich mindestens 3 Flächen treffen, und ihre Winkel müssen <b>weniger als 360°</b> ergeben (sonst wird der Körper flach):</p><ul><li>Dreiecke (60°): 3 → 180°, 4 → 240°, 5 → 300° ✔; 6 → 360° ✘ flach;</li><li>Quadrate (90°): 3 → 270° ✔; 4 → 360° ✘;</li><li>Fünfecke (108°): 3 → 324° ✔;</li><li>Sechsecke (120°): 3 → 360° ✘ schon flach.</li></ul><p>Das sind 3 + 1 + 1 = <b>5</b> Möglichkeiten. Überprüfe die Euler-Formel in jeder Zeile der Tabelle! Die Würfel der Rollenspiele mit 4, 6, 8, 12 und 20 Flächen sind genau die platonischen Körper.</p>"
        },
        {
          label: "🇩🇪 Kugel, Würfel, Zylinder: die Gabe von Fröbel (Deutschland)",
          html: "<p><b>Friedrich Fröbel</b>, der <b>deutsche</b> Pädagoge, der den <b>Kindergarten</b> erfand, schenkte den Kindern eine Holzschachtel mit drei Körpern: <b>Kugel, Würfel und Zylinder</b>. Das war seine „zweite Gabe“. Warum gerade diese drei? Weil sie sich am meisten voneinander unterscheiden und der Zylinder <b>zwischen</b> den beiden anderen steht.</p><ol><li><b>Kugel</b>: nur <b>gekrümmte</b> Fläche. Sie rollt in alle Richtungen und bleibt auf einer schiefen Ebene nie liegen.</li><li><b>Würfel</b>: nur <b>ebene</b> Flächen (6 Quadrate), 8 Ecken und 12 Kanten. Er rollt nicht: Er rutscht oder bleibt liegen.</li><li><b>Zylinder</b>: 2 ebene Flächen (zwei Kreise) und eine gekrümmte Fläche. Stellst du ihn hin, bleibt er stehen wie der Würfel; legst du ihn hin, rollt er wie die Kugel, aber nur <b>in eine Richtung</b>, geradeaus.</li></ol><p>🎯 Probiere es mit einem Ball, einem Würfel und einer Papprolle auf einem schräg gehaltenen Buch aus. Dann schau dir das Modell unten an und wechsle den Körper mit den Knöpfen: Welcher ist ein <b>Vielflächner</b>? Welche sind <b>Rotationskörper</b>?</p>",
          scene: "solid",
          options: {
            shapes: [
              "sphere",
              "cube",
              "cylinder"
            ],
            shape: "sphere",
            labels: true,
            color: "#f59e0b"
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Körper: Tippe auf einen Knoten und entdecke das Warum",
      nodes: [
        { id: "solido", label: "Körper", x: 50, y: 6, color: "#2563eb", html: "Geometrische Figur mit drei Dimensionen.", why: "Die wirkliche Welt hat 3 Dimensionen: Jeder Gegenstand hat Länge, Breite und Höhe. Die Geometrie der Körper wurde von <b>Euklid</b> in den letzten Büchern der <i>Elemente</i> (um 300 v. Chr.) gesammelt." },
        { id: "poliedri", label: "Vielflächner", x: 25, y: 28, color: "#16a34a", html: "Körper mit nur ebenen Flächen (Vielecken).", why: "Aus dem Griechischen <i>polýs</i> (viele) + <i>hédra</i> (Fläche, Sitz): „mit vielen Flächen“. Da sie aus Vielecken bestehen, kann man sie mit der ebenen Geometrie untersuchen, die du schon kennst." },
        { id: "rotazione", label: "Rotationskörper", x: 75, y: 28, color: "#f97316", html: "Körper mit gekrümmten Flächen: Zylinder, Kegel, Kugel.", why: "Man erhält sie, indem man eine ebene Figur um eine Achse dreht. So funktioniert die <b>Drehbank</b>, die schon in der Antike erfunden wurde, um vollkommen runde Gefäße und Holzgegenstände herzustellen." },
        { id: "fsv", label: "Flächen, Kanten, Ecken", x: 12, y: 52, color: "#a855f7", html: "Die Bestandteile eines Vielflächners.", why: "Die Flächen sind Vielecke; wo sich zwei Flächen berühren, entsteht eine Kante; wo sich mindestens drei Kanten treffen, entsteht eine Ecke. In einer Ecke können nicht weniger als 3 Flächen sein, sonst schließt sich der Körper nicht." },
        { id: "eulero", label: "F + E − K = 2", x: 12, y: 80, color: "#ec4899", html: "Die Eulersche Formel.", why: "Entdeckt von <b>Leonhard Euler</b> im Jahr 1750 (auch Descartes war ihr ein Jahrhundert früher fast auf der Spur). Sie gilt für alle Vielflächner ohne Löcher und ist der Ausgangspunkt eines Teils der Mathematik, der Topologie heißt." },
        { id: "prismipir", label: "Prismen und Pyramiden", x: 38, y: 62, color: "#0ea5e9", html: "Prisma: 2 gleiche Grundflächen und rechteckige Seitenflächen. Pyramide: 1 Grundfläche und dreieckige Seitenflächen.", why: "Das Prisma entsteht, indem man ein Vieleck nach oben „zieht“; die Pyramide, indem man alle Ecken der Grundfläche mit einem einzigen Punkt verbindet. <b>Demokrit</b> entdeckte, dass eine Pyramide ein Drittel des Volumens eines Prismas mit gleicher Grundfläche und Höhe hat; <b>Eudoxos</b> bewies es." },
        { id: "platonici", label: "Platonische Körper", x: 38, y: 90, color: "#14b8a6", html: "Die 5 regelmäßigen Polyeder: Tetraeder, Würfel, Oktaeder, Dodekaeder, Ikosaeder.", why: "Es sind nur 5, weil um eine Ecke die Summe der Winkel der Flächen kleiner als 360° sein muss: Bei Dreiecken passen 3, 4 oder 5 Flächen, bei Quadraten 3, bei Fünfecken 3; bei Sechsecken ergibt schon 3 · 120° = 360° und die Ecke wird flach. Euklid bewies es im letzten Buch der <i>Elemente</i>." },
        { id: "sviluppo", label: "Netz", x: 72, y: 58, color: "#84cc16", html: "Der aufgeklappte, auf der Ebene ausgebreitete Körper.", why: "Es dient zum Bauen von Schachteln und Verpackungen. Alle Vielflächner und auch Zylinder und Kegel kann man abwickeln; die Kugel nicht, weil sie in alle Richtungen gekrümmt ist: Deshalb ist keine ebene Weltkarte perfekt." },
        { id: "volume", label: "Volumen", x: 72, y: 86, color: "#64748b", html: "Der Raum, den ein Körper einnimmt, gemessen in Würfelchen (cm³, dm³, m³).", why: "Man misst es, indem man zählt, wie viele Würfelchen mit 1 cm Kantenlänge hineinpassen. 1 dm³ Wasser ist genau 1 Liter: Das metrische System, das Ende des 18. Jahrhunderts in Frankreich entstand, verbindet so Volumen und Fassungsvermögen." }
      ],
      edges: [
        ["solido", "poliedri", "ebene Flächen"],
        ["solido", "rotazione", "gekrümmte Flächen"],
        ["poliedri", "fsv", "haben"],
        ["fsv", "eulero", "verbunden durch"],
        ["poliedri", "prismipir", "z. B."],
        ["prismipir", "platonici", "die regelmäßigsten"],
        ["poliedri", "sviluppo", "werden aufgeklappt zum"],
        ["rotazione", "sviluppo", "Zylinder und Kegel"],
        ["solido", "volume", "nimmt ein"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Prismen, Pyramiden und Netze",
      questions: [
        { type: "mc", q: "Welcher Körper hat nur eine Grundfläche und dreieckige Seitenflächen?", options: ["Das Prisma", "Die Pyramide", "Der Zylinder"], answer: 1, explain: "Die Pyramide hat eine Grundfläche und Dreiecke, die sich in der Spitze treffen." },
        { type: "mc", q: "Das Netz eines Zylinders besteht aus …", options: ["6 Quadraten", "einem Rechteck und 2 Kreisen", "4 Dreiecken"], answer: 1, explain: "Die abgerollte Mantelfläche ist ein Rechteck; die zwei Grundflächen sind Kreise." },
        { type: "num", q: "Wie viele Ecken hat eine Pyramide mit quadratischer Grundfläche?", answer: 5, explain: "4 Ecken der Grundfläche + 1 an der Spitze = 5." }
      ]
    }
  ],
  glossary: [
    { t: "Körper (solido)", d: "Geometrische Figur mit drei Dimensionen: Länge, Breite, Höhe." },
    { t: "Vielflächner (poliedro)", d: "Körper, der nur von ebenen Flächen in Form von Vielecken begrenzt wird." },
    { t: "Rotationskörper", d: "Körper, der entsteht, wenn man eine ebene Figur um eine Achse dreht; er hat gekrümmte Flächen." },
    { t: "Fläche", d: "Jedes der Vielecke, die einen Vielflächner begrenzen." },
    { t: "Kante", d: "Strecke, an der zwei Flächen zusammentreffen." },
    { t: "Ecke", d: "Punkt, an dem drei oder mehr Kanten zusammentreffen." },
    { t: "Prisma", d: "Vielflächner mit zwei gleichen, parallelen Grundflächen und rechteckigen Seitenflächen." },
    { t: "Pyramide", d: "Vielflächner mit einer Grundfläche und dreieckigen Seitenflächen, die sich in der Spitze treffen." },
    { t: "Netz (sviluppo)", d: "Ebene Figur, die man erhält, wenn man einen Körper aufklappt." },
    { t: "Volumen", d: "Raum, den ein Körper einnimmt; es wird in cm³, dm³, m³ gemessen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie viele Dimensionen hat ein Körper?", options: ["2", "3", "4"], answer: 1, explain: "Länge, Breite und Höhe." },
      { type: "mc", q: "Welcher dieser Gegenstände ist ein Rotationskörper?", options: ["Ein Ziegelstein", "Eine Chipsdose", "Ein Spielwürfel"], answer: 1, explain: "Die Dose ist ein Zylinder: Sie hat eine gekrümmte Fläche." },
      { type: "num", q: "Wie viele Flächen hat ein Würfel?", answer: 6, explain: "Wie ein Spielwürfel: 6 quadratische Flächen." },
      { type: "num", q: "Wie viele Ecken hat ein Würfel?", answer: 8, explain: "4 oben und 4 unten." },
      { type: "tf", q: "Die Kugel hat eine Kante.", answer: false, explain: "Die Kugel hat weder Kanten noch Ecken: Sie ist ganz gekrümmt." },
      { type: "text", q: "Wie heißt die Strecke, an der zwei Flächen eines Vielflächners zusammentreffen?", answer: ["Kante", "die Kante", "spigolo", "lo spigolo"], explain: "Es ist die Kante." },
      { type: "mc", q: "Wenn man ein Rechteck um eine seiner Seiten dreht, erhält man …", options: ["einen Kegel", "einen Zylinder", "eine Kugel"], answer: 1, explain: "Das sich drehende Rechteck bildet einen Zylinder." },
      { type: "mc", q: "Welche Figur kann NICHT das Netz eines Würfels sein?", options: ["6 Quadrate in Kreuzform", "6 Quadrate alle in einer Reihe", "6 Quadrate in T-Form"], answer: 1, explain: "Bei 6 Quadraten in einer Reihe überlappen sich beim Falten zwei Flächen und zwei bleiben offen." },
      { type: "tf", q: "Der Würfel ist ein besonderes Prisma.", answer: true, explain: "Er hat zwei gleiche, parallele quadratische Grundflächen und Seitenflächen, die Quadrate (besondere Rechtecke) sind." },
      { type: "num", q: "Eine Schachtel enthält 5 Würfelchen in der Länge, 2 in der Breite und 3 in der Höhe. Wie viele Würfelchen insgesamt?", answer: 30, explain: "5 · 2 = 10 Würfelchen pro Schicht; 10 · 3 = 30." },
      { type: "order", q: "Ordne vom Körper mit den wenigsten Flächen zu dem mit den meisten.", items: ["Tetraeder (dreiseitige Pyramide)", "Pyramide mit quadratischer Grundfläche", "Würfel", "Prisma mit sechseckiger Grundfläche"], explain: "4, 5, 6 und 8 Flächen (6 seitliche + 2 Grundflächen)." }
    ],
    gen: [["volBox", 2]]
  }
});
