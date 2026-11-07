TOPIC('de', {
  id: "p3-mat-linee-angoli",
  title: "Linien und Winkel",
  intro: "Schau dich um: die Schienen des Zuges 🚆, die Kanten deines Tisches, die Zeiger der Uhr 🕒 … alles besteht aus <b>Linien</b> und <b>Winkeln</b>! Wir lernen, Geraden, Strahlen und Strecken zu erkennen und den Winkeln einen Namen zu geben.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Viele Arten von Linien",
      html: `<p>Eine <b>Linie</b> ist die Spur, die die Bleistiftspitze hinterlässt, wenn sie sich über das Blatt bewegt. Es gibt:</p>
<ul>
<li><b>krumme Linien</b> 〰️: Sie ändern sanft die Richtung, wie eine Welle;</li>
<li><b>gerade Linien</b> ➖: Sie gehen immer geradeaus in dieselbe Richtung;</li>
<li><b>Linienzüge</b> ⚡: Sie bestehen aus geraden Stücken, die plötzlich die Richtung wechseln;</li>
<li><b>gemischte Linien</b>: ein bisschen krumm und ein bisschen gerade.</li>
</ul>
<p>Eine Linie kann <b>offen</b> sein (die Enden berühren sich nicht) oder <b>geschlossen</b> (sie endet dort, wo sie angefangen hat, wie der Rand eines Kreises ⭕). Eine geschlossene Linie teilt das Blatt in ein <b>Innengebiet</b> und ein <b>Außengebiet</b>.</p>`
    },
    {
      type: "text",
      title: "Gerade, Strahl und Strecke",
      html: `<p>Die geraden Linien haben drei wichtige „Cousins“:</p>
<ul>
<li><b>Gerade</b> ↔️: Sie hat weder Anfang noch Ende, sie geht <b>unendlich</b> weiter, in beide Richtungen. Auf dem Blatt zeichnen wir nur ein Stück davon.</li>
<li><b>Strahl</b> •→: Er hat einen <b>Anfangspunkt</b> (den <b>Ursprung</b>) und geht dann nur in eine Richtung unendlich weiter, wie der Lichtstrahl einer Taschenlampe 🔦.</li>
<li><b>Strecke</b> •—•: Sie hat einen <b>Anfang</b> und ein <b>Ende</b> (zwei <b>Endpunkte</b>). Nur sie kann man mit dem Lineal <b>messen</b>! 📏</li>
</ul>
<p>Punkte bezeichnet man mit <b>Großbuchstaben</b>: Die Strecke von A nach B heißt <b>AB</b>.</p>`
    },
    {
      type: "svg",
      title: "Gerade, Strahl, Strecke",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="fr" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#2563eb"/></marker><marker id="fl" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto-start-reverse"><path d="M0 0 L12 6 L0 12 z" fill="#2563eb"/></marker><marker id="fg" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12 z" fill="#16a34a"/></marker></defs>
<line x1="60" y1="60" x2="540" y2="60" stroke="#2563eb" stroke-width="5" marker-start="url(#fl)" marker-end="url(#fr)"/>
<text x="300" y="95" font-size="22" fill="#1d4ed8" text-anchor="middle" font-weight="bold">GERADE: ohne Anfang und Ende</text>
<line x1="80" y1="150" x2="540" y2="150" stroke="#16a34a" stroke-width="5" marker-end="url(#fg)"/>
<circle cx="80" cy="150" r="9" fill="#16a34a"/>
<text x="70" y="135" font-size="20" fill="#166534" font-weight="bold">O</text>
<text x="300" y="185" font-size="22" fill="#166534" text-anchor="middle" font-weight="bold">STRAHL: ein Ursprung, dann unendlich</text>
<line x1="150" y1="240" x2="450" y2="240" stroke="#dc2626" stroke-width="5"/>
<circle cx="150" cy="240" r="9" fill="#dc2626"/><circle cx="450" cy="240" r="9" fill="#dc2626"/>
<text x="140" y="225" font-size="20" fill="#991b1b" font-weight="bold">A</text>
<text x="445" y="225" font-size="20" fill="#991b1b" font-weight="bold">B</text>
<text x="300" y="280" font-size="22" fill="#991b1b" text-anchor="middle" font-weight="bold">STRECKE AB: zwei Endpunkte, messbar</text>
</svg>`,
      caption: "Die Pfeile zeigen, dass die Linie unendlich weitergeht; die Punkte sind dort, wo sie anfängt oder endet."
    },
    {
      type: "text",
      title: "Wie Geraden liegen: die Lage",
      html: `<p>Im Verhältnis zum Blatt (oder zum Boden) kann eine Gerade sein:</p>
<ul>
<li><b>waagerecht</b> ➖ wie der Horizont am Meer;</li>
<li><b>senkrecht</b> | wie ein Lot oder ein Laternenpfahl;</li>
<li><b>schräg</b> ⟋ also geneigt, wie eine Rutsche 🛝.</li>
</ul>
<p>Zwei Geraden können zueinander sein:</p>
<ul>
<li><b>parallel</b> ⏸: Sie treffen sich nie, sie bleiben immer im gleichen Abstand, wie die <b>Schienen</b>;</li>
<li><b>sich schneidend</b> ✖️: Sie treffen sich in einem Punkt;</li>
<li><b>senkrecht zueinander (orthogonal)</b> ➕: Sie schneiden sich und bilden <b>4 rechte Winkel</b>, wie die Linien in einem karierten Heft.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Suche parallele und senkrechte Geraden in einem Würfel",
      scene: "solid",
      options: { shape: "cube", color: "#60a5fa", labels: true },
      caption: "Dreh den Würfel: Die Kanten, die „nebeneinander“ liegen, ohne sich zu berühren, sind parallel; die, die sich in einer Ecke treffen, bilden rechte Winkel, sind also senkrecht zueinander."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Linien",
      questions: [
        { type: "mc", q: "Welche Linie hat zwei Endpunkte und kann gemessen werden?", options: ["Die Gerade", "Der Strahl", "Die Strecke"], answer: 2, explain: "Die Strecke hat einen Anfang und ein Ende: Man kann sie mit dem Lineal messen." },
        { type: "mc", q: "Die Eisenbahnschienen sind …", options: ["parallel", "senkrecht zueinander", "sich schneidend"], answer: 0, explain: "Sie treffen sich nie und bleiben im gleichen Abstand: parallel." },
        { type: "tf", q: "Eine Gerade hat einen Anfangspunkt, der Ursprung heißt.", answer: false, explain: "Die Gerade hat weder Anfang noch Ende. Der Strahl hat einen Ursprung." }
      ]
    },
    {
      type: "text",
      title: "Was ist ein Winkel?",
      html: `<p>Wenn von demselben Punkt aus <b>zwei Strahlen</b> ausgehen, teilen sie die Ebene in zwei Teile. Jeder dieser Teile ist ein <b>Winkel</b>.</p>
<ul>
<li>der Punkt, von dem sie ausgehen, heißt <b>Scheitel</b>;</li>
<li>die beiden Strahlen heißen <b>Schenkel</b> des Winkels;</li>
<li>die „Öffnung“ zwischen den Schenkeln ist die <b>Weite</b> (die Größe des Winkels).</li>
</ul>
<p>⚠️ Die Weite <b>hängt nicht von der Länge</b> der Schenkel ab, die du zeichnest, sondern nur davon, <b>wie weit sie geöffnet</b> sind! Ein Winkel mit langen Schenkeln ist nicht „größer“ als einer mit kurzen Schenkeln, wenn die Öffnung gleich ist.</p>
<p>Die Weite misst man in <b>Grad</b> (°) mit dem <b>Winkelmesser</b>.</p>`
    },
    {
      type: "text",
      title: "Die Namen der Winkel",
      html: `<table>
<tr><th>Winkel</th><th>Wie er ist</th><th>Grad</th></tr>
<tr><td>📐 <b>Rechter Winkel</b></td><td>wie die Ecke eines Blattes; die Schenkel stehen senkrecht zueinander</td><td>90°</td></tr>
<tr><td>🔺 <b>Spitzer Winkel</b></td><td>enger als ein rechter</td><td>weniger als 90°</td></tr>
<tr><td>🔓 <b>Stumpfer Winkel</b></td><td>weiter als ein rechter, aber enger als ein gestreckter</td><td>zwischen 90° und 180°</td></tr>
<tr><td>➖ <b>Gestreckter Winkel</b></td><td>die Schenkel bilden eine gerade Linie</td><td>180° (= 2 rechte)</td></tr>
<tr><td>🔄 <b>Voller Winkel</b></td><td>ein Schenkel macht eine ganze Drehung und kommt zum anderen zurück</td><td>360° (= 4 rechte)</td></tr>
</table>
<p>Trick: Um zu erkennen, ob ein Winkel rechtwinklig ist, leg die <b>Ecke eines Blattes</b> oder eines Geodreiecks an: Passt sie genau, ist er ein rechter Winkel!</p>`
    },
    {
      type: "svg",
      title: "Spitz, recht, stumpf, gestreckt",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<g stroke-width="5" stroke-linecap="round">
<line x1="30" y1="200" x2="140" y2="200" stroke="#1f2937"/><line x1="30" y1="200" x2="120" y2="110" stroke="#1f2937"/>
<line x1="180" y1="200" x2="280" y2="200" stroke="#1f2937"/><line x1="180" y1="200" x2="180" y2="100" stroke="#1f2937"/>
<line x1="350" y1="200" x2="440" y2="200" stroke="#1f2937"/><line x1="350" y1="200" x2="290" y2="120" stroke="#1f2937"/>
<line x1="460" y1="200" x2="590" y2="200" stroke="#1f2937"/>
</g>
<path d="M70 200 A40 40 0 0 0 58 172" fill="none" stroke="#16a34a" stroke-width="4"/>
<rect x="180" y="170" width="30" height="30" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M390 200 A40 40 0 0 0 326 168" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M565 200 A40 40 0 0 0 485 200" fill="none" stroke="#7c3aed" stroke-width="4"/>
<circle cx="525" cy="200" r="7" fill="#7c3aed"/>
<text x="85" y="245" font-size="22" fill="#16a34a" text-anchor="middle" font-weight="bold">spitz</text>
<text x="85" y="272" font-size="18" fill="#16a34a" text-anchor="middle">&lt; 90°</text>
<text x="230" y="245" font-size="22" fill="#2563eb" text-anchor="middle" font-weight="bold">recht</text>
<text x="230" y="272" font-size="18" fill="#2563eb" text-anchor="middle">90°</text>
<text x="370" y="245" font-size="22" fill="#dc2626" text-anchor="middle" font-weight="bold">stumpf</text>
<text x="370" y="272" font-size="18" fill="#dc2626" text-anchor="middle">zwischen 90° und 180°</text>
<text x="525" y="245" font-size="22" fill="#7c3aed" text-anchor="middle" font-weight="bold">gestreckt</text>
<text x="525" y="272" font-size="18" fill="#7c3aed" text-anchor="middle">180°</text>
<text x="300" y="40" font-size="22" fill="#1f2937" text-anchor="middle">der farbige Bogen zeigt die Weite</text>
</svg>`,
      caption: "Das blaue Quadrat ist das Zeichen für den rechten Winkel."
    },
    {
      type: "widget",
      title: "Was für ein Winkel ist das?",
      widget: "classify",
      options: {
        groups: ["Spitz", "Recht", "Stumpf"],
        items: [
          ["📄 die Ecke eines Blattes", 1],
          ["🍕 die Spitze eines Pizzastücks", 0],
          ["🕒 die Uhrzeiger um 3:00", 1],
          ["🕐 die Uhrzeiger um 1:00", 0],
          ["🕔 die Uhrzeiger um 5:00", 2],
          ["💻 der weit aufgeklappte Computerbildschirm", 2],
          ["🪟 die Ecke eines Fensters", 1],
          ["✂️ eine kaum geöffnete Schere", 0]
        ]
      },
      caption: "Zieh jeden Gegenstand in die richtige Gruppe."
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Uhr",
      html: `<p>Die Zeiger der Uhr sind zwei Strahlen mit demselben Scheitel: der Achse in der Mitte! ⏰</p>
<ul>
<li>Um <b>3:00</b> bilden sie einen <b>rechten</b> Winkel (90°).</li>
<li>Um <b>2:00</b> bilden sie einen <b>spitzen</b> Winkel (60°).</li>
<li>Um <b>4:00</b> bilden sie einen <b>stumpfen</b> Winkel (120°).</li>
<li>Um <b>6:00</b> bilden sie einen <b>gestreckten</b> Winkel (180°).</li>
</ul>
<p>In einer Stunde macht der Minutenzeiger eine <b>ganze Umdrehung</b>: 360°!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Linienjagd in der Schule",
      html: `<p>Mach in der Klasse eine geometrische Schatzsuche! 🔍</p>
<ul>
<li><b>Parallele Geraden</b>: die langen Seiten der Tafel, die Zeilen im Heft.</li>
<li><b>Senkrechte Geraden</b>: die Wandkante, die auf den Boden trifft, die Zeilen und Spalten der Karos.</li>
<li><b>Strecken</b>: die Kante des Radiergummis, der Bleistift.</li>
<li><b>Rechte Winkel</b>: die Ecken des Tisches, der Tür, des Buches.</li>
<li><b>Spitze Winkel</b>: die Spitze des gespitzten Bleistifts ✏️.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …?",
      html: `<p>Die volle Umdrehung misst <b>360 Grad</b> dank der alten <b>Babylonier</b>, die im Sechzigersystem rechneten. Vielleicht wählten sie die Zahl, weil das Jahr etwa 360 Tage dauert und weil sich 360 durch sehr viele Zahlen genau teilen lässt: 2, 3, 4, 5, 6, 8, 9, 10, 12 …</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …?",
      html: `<p>Der griechische Mathematiker <b>Euklid</b> schrieb vor etwa 2300 Jahren ein berühmtes Buch, die <b>Elemente</b>, in dem er den Punkt als <i>„das, was keine Teile hat“</i> und die Linie als <i>„Länge ohne Breite“</i> bestimmte. Jahrhundertelang war es das meistgelesene Geometriebuch der Welt! 📜</p>`
    },
    {
      type: "remember",
      title: "Merk dir das",
      html: `<ul>
<li>Gerade: unendlich in beide Richtungen. Strahl: hat einen Ursprung. Strecke: hat zwei Endpunkte.</li>
<li>Parallel: treffen sich nie. Senkrecht zueinander: treffen sich und bilden rechte Winkel.</li>
<li>Winkel = zwei Strahlen mit demselben Ursprung (Scheitel).</li>
<li>Spitz &lt; 90° · Recht = 90° · Stumpf zwischen 90° und 180° · Gestreckt = 180° · Voll = 360°.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Linien und Winkel zu verstehen",
      intro: "Geometrie versteht man am besten, wenn man sich bewegt und etwas anfasst. Probier einen dieser Wege!",
      tabs: [
        {
          label: "🙆 Mit den Armen",
          html: `<p>Steh auf! Dein Körper kann Winkel machen:</p>
<ul>
<li>ein Arm nach oben und einer zur Seite → <b>rechter</b> Winkel 🙋;</li>
<li>Arme in einer geraden Linie ausgebreitet → <b>gestreckter</b> Winkel 🤸;</li>
<li>Arme fast geschlossen über dem Kopf → <b>spitzer</b> Winkel;</li>
<li>eine ganze Drehung um dich selbst → <b>voller</b> Winkel! 🔄</li>
</ul>
<p>Deine Schulter ist der <b>Scheitel</b>, die Arme sind die <b>Schenkel</b>.</p>`
        },
        {
          label: "🕒 Mit der Uhr",
          html: `<p>Denk an den Minutenzeiger, der bei der 12 startet. Alle 5 Minuten dreht er sich um <b>30°</b>.</p>
<ul>
<li>Nach 15 Minuten → <b>90°</b>, ein rechter Winkel (eine Vierteldrehung).</li>
<li>Nach 30 Minuten → <b>180°</b>, gestreckter Winkel (eine halbe Drehung).</li>
<li>Nach 60 Minuten → <b>360°</b>, voller Winkel (eine ganze Drehung).</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<circle cx="130" cy="130" r="100" fill="#ffffff" stroke="#1f2937" stroke-width="5"/>
<path d="M130 130 L130 30 A100 100 0 0 1 230 130 Z" fill="#93c5fd" opacity="0.8"/>
<line x1="130" y1="130" x2="130" y2="45" stroke="#1f2937" stroke-width="6" stroke-linecap="round"/>
<line x1="130" y1="130" x2="215" y2="130" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
<circle cx="130" cy="130" r="8" fill="#1f2937"/>
<text x="130" y="25" font-size="18" text-anchor="middle">12</text>
<text x="245" y="136" font-size="18">3</text>
<text x="300" y="80" font-size="24" fill="#1d4ed8" font-weight="bold">15 Minuten</text>
<text x="300" y="120" font-size="24" fill="#1f2937">= 1/4 Drehung</text>
<text x="300" y="160" font-size="24" fill="#dc2626" font-weight="bold">= 90° (recht)</text>
</svg>`
        },
        {
          label: "🧊 In 3D-Körpern",
          html: `<p>Auch Gegenstände haben Linien und Winkel! An dieser <b>Schachtel</b> (Quader):</p>
<ul>
<li>die <b>Kanten</b> sind Strecken;</li>
<li>Kanten, die sich treffen, bilden <b>rechte</b> Winkel;</li>
<li>gegenüberliegende Kanten einer Fläche sind <b>parallel</b>.</li>
</ul>
<p>Wechsle den Körper mit den Knöpfen: Die Pyramide hat auch <b>spitze</b> Winkel!</p>`,
          scene: "solid",
          options: { shape: "box", w: 3, h: 2, d: 1.5, color: "#fbbf24", labels: true, shapes: ["box", "cube", "pyramid"] }
        },
        {
          label: "🗺️ Der Vergleich mit den Straßen",
          html: `<p>Denk an die Straßen einer Stadt:</p>
<ul>
<li>zwei Straßen, die nebeneinander verlaufen, ohne sich je zu kreuzen, sind <b>parallel</b>;</li>
<li>eine <b>Kreuzung</b> ist dort, wo sich zwei <b>sich schneidende</b> Straßen treffen;</li>
<li>bildet die Kreuzung ein „perfektes“ Kreuz ➕, stehen die Straßen <b>senkrecht zueinander</b>.</li>
</ul>
<p>In New York, in Mannheim und in Barcelona sind viele Straßen so gebaut, wie ein <b>Schachbrett</b>: alle parallel oder senkrecht zueinander!</p>`
        },
        {
          label: "🔤 Die Buchstaben des Alphabets",
          html: `<p>Auch die Großbuchstaben verstecken Linien und Winkel!</p>
<ul>
<li><b>L</b> und <b>T</b>: <b>rechte</b> Winkel, senkrechte Strecken.</li>
<li><b>V</b> und <b>A</b>: <b>spitze</b> Winkel.</li>
<li><b>H</b>, <b>=</b>: <b>parallele</b> Strecken.</li>
<li><b>X</b>: sich <b>schneidende</b> Strecken.</li>
<li><b>O</b>, <b>C</b>, <b>S</b>: <b>krumme</b> Linien; das O ist eine <b>geschlossene</b> Linie!</li>
</ul>
<p>Schreib deinen Namen und such die Winkel! ✍️</p>`
        },
        {
          "label": "𓂀 Winkel und Lot der alten Ägypter",
          "html": "<p>Die alten <b>Ägypter</b> bauten Pyramiden und riesige Tempel mit makellos geraden Mauern. Wie machten sie das ohne elektronische Geräte? In einem Grab im Arbeiterdorf von <b>Deir el-Medina</b>, dem von <b>Sennedjem</b>, der vor mehr als 3000 Jahren an den Gräbern der Pharaonen arbeitete, wurden seine Werkzeuge gefunden: ein <b>Winkel</b> und eine <b>A-förmige Setzwaage</b> mit einem <b>Lot</b>.</p><ul><li>Das <b>Lot</b> ist ein Faden mit einem Gewicht: Das Gewicht zieht den Faden nach unten, und er wird immer <b>senkrecht</b>.</li><li>Die A-Setzwaage: Wenn der Faden genau über die <b>mittlere Kerbe</b> läuft, ist die Grundlinie des A <b>waagerecht</b>.</li><li>Der <b>Winkel</b> dient dazu, <b>rechte Winkel</b> zu prüfen.</li></ul><p>🎯 <b>Bau dir dein eigenes Lot</b>: Binde einen Radiergummi an eine Schnur und halte sie still. Die Schnur ist senkrecht. Leg einen Winkel an die Schnur: Die untere Seite ist waagerecht. Senkrecht und waagerecht stehen <b>senkrecht zueinander</b>: Sie bilden einen rechten Winkel! Jetzt prüfe: Ist der Türrahmen senkrecht? Ist der Tisch waagerecht?</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/><polyline points=\"150,260 300,40 450,260\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"12\" stroke-linejoin=\"round\"/><line x1=\"205\" y1=\"180\" x2=\"395\" y2=\"180\" stroke=\"#92400e\" stroke-width=\"10\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"215\" stroke=\"#1e293b\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"222\" r=\"10\" fill=\"#475569\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"300\" y1=\"172\" x2=\"300\" y2=\"188\" stroke=\"#dc2626\" stroke-width=\"4\"/><line x1=\"110\" y1=\"266\" x2=\"490\" y2=\"266\" stroke=\"#16a34a\" stroke-width=\"4\"/><text x=\"320\" y=\"120\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Lot</text><text x=\"320\" y=\"140\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">(senkrecht)</text><text x=\"410\" y=\"288\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">Grundlinie waagerecht</text><text x=\"330\" y=\"200\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#dc2626\">mittlere Kerbe</text><polyline points=\"30,40 30,130 120,130\" fill=\"none\" stroke=\"#a16207\" stroke-width=\"12\"/><text x=\"30\" y=\"160\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#a16207\" font-weight=\"bold\">Winkel</text><rect x=\"30\" y=\"112\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/></svg>"
        },
        {
          "label": "🇯🇵 Der rechte Winkel mit Origami (Japan)",
          "html": "<p>In <b>Japan</b> wird <b>Origami</b>, die Kunst des Papierfaltens, auch in der Schule gemacht. Mit zwei Falten kannst du einen perfekten <b>rechten Winkel</b> bauen, selbst aus einem Stück Papier mit ganz schiefem Rand!</p><ol><li>Nimm ein beliebiges Stück Papier und falte es irgendwo in der Mitte. Die Kante der Falte ist eine <b>gerade Linie</b>.</li><li>Falte jetzt noch einmal so, dass die <b>Falte genau auf sich selbst</b> zu liegen kommt (ein Stück der Falte über dem anderen).</li><li>Öffne das Blatt: Die beiden Falten kreuzen sich und bilden <b>4 rechte Winkel</b>! Die beiden Falten stehen <b>senkrecht zueinander</b>.</li><li>Falte den rechten Winkel wieder zusammen und noch einmal in der Mitte: Du erhältst einen <b>spitzen</b> Winkel (die Hälfte eines rechten).</li></ol><p>🎯 Benutze deinen „Papier-Winkel“ als Werkzeug: Leg ihn an die Ecken des Buches, der Tafel, des Fensters. Ist der Winkel kleiner, ist er <b>spitz</b>; ist er größer, ist er <b>stumpf</b>.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Linien und Winkel: Tipp einen Knoten an und entdecke das Warum",
      nodes: [
        { id: "punto", label: "Punkt", x: 50, y: 6, color: "#64748b", html: "Der kleinste „Ort“ der Geometrie: Er hat keine Ausdehnung. Man bezeichnet ihn mit einem Großbuchstaben.", why: "Euklid bestimmte ihn in den <i>Elementen</i> (um 300 v. Chr.) als „das, was keine Teile hat“. Er ist eine Idee: Der Bleistiftpunkt ist nur eine Möglichkeit, ihn zu sehen." },
        { id: "linea", label: "Linie", x: 50, y: 24, color: "#0ea5e9", html: "Krumm, gerade, Linienzug oder gemischt; offen oder geschlossen.", why: "Für Euklid ist sie „Länge ohne Breite“. Du kannst sie dir als den Weg eines sich bewegenden Punktes vorstellen." },
        { id: "retta", label: "Gerade", x: 18, y: 42, color: "#2563eb", html: "Gerade Linie ohne Anfang und Ende.", why: "Eines der Postulate Euklids sagt, dass durch zwei Punkte genau eine Gerade geht: Deshalb genügt ein Lineal, um sie zu zeichnen." },
        { id: "semi", label: "Strahl", x: 50, y: 48, color: "#16a34a", html: "Eine in einem Punkt durchgeschnittene Gerade: Er hat einen Ursprung.", why: "Wenn du auf einer Geraden einen Punkt wählst, teilst du sie in zwei Strahlen." },
        { id: "seg", label: "Strecke", x: 82, y: 42, color: "#dc2626", html: "Das Stück Gerade zwischen zwei Punkten: Es lässt sich messen.", why: "Das Wort „Strecke“ kommt von „strecken“: ein gespanntes, gerades Stück. Sie ist die kürzeste Verbindung zwischen zwei Punkten." },
        { id: "pos", label: "Parallele und senkrechte Geraden", x: 18, y: 72, color: "#f59e0b", html: "Parallel: treffen sich nie. Senkrecht zueinander: treffen sich im rechten Winkel.", why: "Das fünfte Postulat Euklids betrifft genau die Parallelen. 2000 Jahre lang versuchten Mathematiker, es zu beweisen; im 19. Jahrhundert entdeckte man, dass es auch andere Geometrien gibt, in denen die „Geraden“ gekrümmt sind, etwa auf der Oberfläche einer Kugel." },
        { id: "angolo", label: "Winkel", x: 60, y: 72, color: "#a855f7", html: "Teil der Ebene zwischen zwei Strahlen mit demselben Ursprung (Scheitel).", why: "Das Wort kommt vom lateinischen <i>angulus</i>, „Ecke, Biegung“. Es zählt nur die Öffnung, nicht die Länge der Schenkel." },
        { id: "gradi", label: "Grad und Winkelarten", x: 60, y: 93, color: "#ec4899", html: "Spitz, recht (90°), stumpf, gestreckt (180°), voll (360°).", why: "Die Babylonier teilten die volle Drehung in 360 Teile, weil sie im Sechzigersystem rechneten und weil sich 360 durch sehr viele Zahlen teilen lässt. Das Messgerät ist der Winkelmesser." }
      ],
      edges: [
        ["punto", "linea", "bewegt sich und zeichnet"],
        ["linea", "retta", "wenn sie gerade ist"],
        ["retta", "semi", "an einem Punkt geteilt"],
        ["retta", "seg", "an zwei Punkten geteilt"],
        ["retta", "pos", "zwei Geraden können sein"],
        ["semi", "angolo", "zwei mit demselben Ursprung"],
        ["angolo", "gradi", "gemessen in"],
        ["pos", "gradi", "senkrecht = 90°"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Winkel",
      questions: [
        { type: "mc", q: "Ein Winkel von 120° ist …", options: ["spitz", "recht", "stumpf"], answer: 2, explain: "Er ist größer als 90° und kleiner als 180°: stumpf." },
        { type: "num", q: "Wie viele Grad misst ein gestreckter Winkel?", answer: 180, unit: "°", explain: "Ein gestreckter Winkel ist wie zwei rechte Winkel: 90° + 90° = 180°." },
        { type: "tf", q: "Wenn ich die Schenkel eines Winkels verlängere, wird der Winkel weiter.", answer: false, explain: "Die Weite hängt nur von der Öffnung der Schenkel ab, nicht von ihrer Länge." }
      ]
    }
  ],
  glossary: [
    { t: "Gerade", d: "Gerade Linie ohne Anfang und Ende." },
    { t: "Strahl", d: "Teil einer Geraden mit einem Ursprung, auf einer Seite unendlich." },
    { t: "Strecke", d: "Teil einer Geraden zwischen zwei Punkten (Endpunkten); sie lässt sich messen." },
    { t: "Parallele Geraden", d: "Geraden, die sich nie treffen." },
    { t: "Sich schneidende Geraden", d: "Geraden, die sich in einem Punkt treffen." },
    { t: "Senkrechte Geraden", d: "Sich schneidende Geraden, die vier rechte Winkel bilden." },
    { t: "Winkel", d: "Teil der Ebene zwischen zwei Strahlen mit demselben Ursprung." },
    { t: "Scheitel", d: "Der Punkt, von dem die Schenkel eines Winkels ausgehen." },
    { t: "Rechter Winkel", d: "Winkel von 90°, wie die Ecke eines Blattes." },
    { t: "Winkelmesser", d: "Gerät, um die Weite von Winkeln in Grad zu messen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche Linie hat weder Anfang noch Ende?", options: ["Strecke", "Gerade", "Strahl"], answer: 1, explain: "Die Gerade geht in beide Richtungen unendlich weiter." },
      { type: "mc", q: "Wie heißt der Anfangspunkt eines Strahls?", options: ["Ursprung", "Endpunkt", "Schenkel"], answer: 0, explain: "Der Strahl geht vom Ursprung aus." },
      { type: "tf", q: "Zwei parallele Geraden treffen sich früher oder später.", answer: false, explain: "Parallele Geraden treffen sich nie." },
      { type: "mc", q: "Zwei Geraden, die sich treffen und 4 rechte Winkel bilden, sind …", options: ["parallel", "senkrecht zueinander", "schräg"], answer: 1, explain: "Sie stehen senkrecht zueinander." },
      { type: "num", q: "Wie viele Grad misst ein rechter Winkel?", answer: 90, unit: "°", explain: "Der rechte Winkel misst 90°." },
      { type: "mc", q: "Ein Winkel von 45° ist …", options: ["spitz", "stumpf", "gestreckt"], answer: 0, explain: "Er ist kleiner als 90°: spitz." },
      { type: "text", q: "Wie heißt der Punkt, von dem die Schenkel eines Winkels ausgehen?", answer: ["scheitel", "der scheitel", "scheitelpunkt", "vertice"], explain: "Es ist der Scheitel." },
      { type: "num", q: "Wie viele rechte Winkel ergeben einen vollen Winkel?", answer: 4, explain: "4 × 90° = 360°." },
      { type: "mc", q: "Um 6:00 bilden die Uhrzeiger einen …", options: ["rechten Winkel", "spitzen Winkel", "gestreckten Winkel"], answer: 2, explain: "Einer zeigt auf die 12 und der andere auf die 6: Sie liegen in einer geraden Linie, gestreckter Winkel." },
      { type: "order", q: "Ordne die Winkel vom engsten zum weitesten.", items: ["spitz", "recht", "stumpf", "gestreckt", "voll"], explain: "Spitz < 90° < stumpf < 180° (gestreckt) < 360° (voll)." },
      { type: "tf", q: "Die Strecke ist die einzige dieser Linien, die man mit dem Lineal messen kann.", answer: true, explain: "Gerade und Strahl sind unendlich; die Strecke hat zwei Endpunkte." }
    ]
  }
});
