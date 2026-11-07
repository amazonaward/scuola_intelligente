TOPIC('de', {
  id: "p3-geo-fiumi-laghi",
  title: "Flüsse und Seen",
  intro: `Jeder Fluss macht eine lange Reise: Er entsteht im Gebirge aus einer kleinen <b>Quelle</b>, stürzt schnell zwischen den Felsen hinab, durchquert die Ebene in weiten Bögen und fließt am Ende an der <b>Mündung</b> ins Meer. Unterwegs trifft er andere Flüsse und macht manchmal Halt in einem <b>See</b>. Wir folgen dieser Reise, auch in <b>3D</b>!`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Woher kommt das Wasser der Flüsse?",
      html: `<p>Das Wasser der Flüsse kommt vom <b>Himmel</b>: Es sind der <b>Regen</b> und der <b>Schnee</b>, die auf die Berge fallen. Ein Teil fließt sofort über den Boden ab, ein Teil sickert in die Erde und tritt dann aus den <b>Quellen</b> wieder hervor, und ein Teil bleibt in den <b>Gletschern</b> gefroren und schmilzt im Sommer ganz langsam.</p>
<p>Der Fluss bringt das Wasser zum <b>Meer</b>; vom Meer lässt die Sonne es verdunsten, es bilden sich Wolken und es regnet wieder auf die Berge. Das ist der <b>Wasserkreislauf</b>: Die Flüsse sind die „Straßen“, auf denen das Wasser zum Meer zurückkehrt.</p>
<p>Wasser fließt immer <b>abwärts</b>, wegen der Schwerkraft: Deshalb entstehen Flüsse oben und enden unten, im Meer, in einem See oder in einem anderen Fluss.</p>`
    },
    {
      type: "text",
      title: "Schritt 1: die Reise des Flusses",
      html: `<ol>
<li>💧 <b>Quelle</b>: der Punkt, an dem der Fluss entsteht, meist im Gebirge, aus einer Quelle oder einem Gletscher.</li>
<li>⛰️ <b>Oberlauf</b> (im Gebirge): Das Flussbett ist eng und steil, das Wasser ist <b>schnell</b>, bildet Stromschnellen und <b>Wasserfälle</b> und gräbt tiefe <b>Täler</b> in <b>V</b>-Form. Es schleppt große Steine mit.</li>
<li>🌳 <b>Mittellauf</b> (im Hügelland): Der Fluss wird langsamer und breiter und nimmt andere Flüsse auf.</li>
<li>🌾 <b>Unterlauf</b> (in der Ebene): Das Wasser ist <b>langsam</b> und der Fluss zeichnet große Bögen, die <b>Mäander</b> heißen. Er lagert Sand und feinen Schlamm ab.</li>
<li>🌊 <b>Mündung</b>: der Punkt, an dem der Fluss endet, im Meer, in einem See oder in einem anderen Fluss.</li>
</ol>
<p>Die „Rinne“, in der das Wasser fließt, heißt <b>Flussbett</b>; ihre Ränder sind die <b>Ufer</b>; die Erdwälle, die man gegen Überschwemmungen baut, sind die <b>Deiche</b>. Schaut man zur Mündung hin, ist das Ufer rechts das <b>rechte Ufer</b> und das links das <b>linke Ufer</b>.</p>`
    },
    {
      type: "svg",
      title: "Von der Quelle bis zur Mündung",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#e0f2fe"/>
<path d="M0 150 L70 40 L130 110 L180 60 L250 170 L600 250 L600 330 L0 330 Z" fill="#a8a29e"/>
<path d="M50 70 L70 40 L90 68 Z M165 82 L180 60 L196 86 Z" fill="#ffffff"/>
<path d="M200 180 L600 250 L600 330 L120 330 Z" fill="#86efac"/>
<path d="M480 260 L600 250 L600 330 L460 330 Z" fill="#3b82f6"/>
<path d="M95 85 Q110 120 140 150 Q170 175 200 190 Q260 215 300 235 Q260 250 320 262 Q390 270 360 285 Q420 300 475 290" stroke="#2563eb" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M475 290 L500 275 M475 290 L505 300 M475 290 L495 315" stroke="#2563eb" stroke-width="5"/>
<path d="M250 140 Q240 180 230 200" stroke="#60a5fa" stroke-width="5" fill="none"/>
<circle cx="95" cy="85" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="3"/>
<g font-size="15" font-weight="bold" fill="#0f172a">
<text x="20" y="25">💧 Quelle</text>
<text x="100" y="175">Oberlauf</text>
<text x="100" y="193" font-size="12" font-weight="normal">schnell, V-Tal</text>
<text x="275" y="200">Nebenfluss</text>
<text x="270" y="310">Mäander</text>
<text x="480" y="245">Mündung/Delta</text>
<text x="545" y="320" fill="#ffffff">Meer</text>
</g>
<path d="M120 30 L160 30" stroke="#f59e0b" stroke-width="3"/>
<text x="165" y="35" font-size="13" fill="#78350f">oben: schnelles Wasser → unten: langsames Wasser</text>
</svg>`,
      caption: "Die Reise eines Flusses: Im Gebirge rast und gräbt das Wasser, in der Ebene wird es langsamer und zeichnet Bögen, an der Mündung fließt es ins Meer."
    },
    {
      type: "3d",
      title: "Die Flusslandschaft in 3D",
      scene: "terrain",
      caption: "Dreh die Landschaft und tippe auf jedes Schild: Der Teil leuchtet auf. Folge dem Weg des Wassers vom Gletscher bis zum Meer.",
      options: {
        features: {
          glacier: { label: "Gletscher", html: "Eine große Eismasse auf den höchsten Bergen. Im Sommer schmilzt sie ein wenig und gibt den Flüssen Wasser, auch wenn es nicht regnet. Die <b>Dora Baltea</b> entspringt den Gletschern des Montblanc." },
          peak: { label: "Gipfel", html: "Die Spitze des Berges. Die Kammlinien zwischen den Gipfeln sind die <b>Wasserscheiden</b>: Der Regen, der auf der einen Seite fällt, fließt in einen Fluss, der Regen auf der anderen Seite in einen anderen." },
          mountain: { label: "Berg", html: "Hier regnet und schneit es am meisten: Die Berge sind die „Wasserspeicher“ der Flüsse." },
          source: { label: "Quelle", html: "Der Punkt, an dem der Fluss entsteht. Der <b>Po</b> entspringt im Piemont, am <b>Pian del Re</b>, auf etwa 2000 Metern Höhe, am Fuß des Monviso." },
          valley: { label: "Tal", html: "Der Fluss gräbt mit der Kraft des Wassers und der Steine den Fels aus: Flusstäler haben die Form eines <b>V</b>. Von Gletschern ausgehobelte Täler haben dagegen die Form eines <b>U</b>." },
          river: { label: "Fluss", html: "Ein Gewässer, das das ganze Jahr über fließt. In der Ebene wird er langsamer und bildet <b>Mäander</b>, große S-förmige Bögen." },
          lake: { label: "See", html: "Süßwasser, das sich in einer Mulde im Gelände sammelt. Der Fluss, der in den See hineinfließt, heißt <b>Zufluss</b>, der, der herausfließt, <b>Abfluss</b>." },
          plain: { label: "Ebene", html: "Oft hat gerade der Fluss sie aufgebaut, indem er Tausende von Jahren lang Sand und Schlamm ablagerte: Die <b>Poebene</b> wurde vom Po und seinen Nebenflüssen gebildet." },
          delta: { label: "Delta", html: "Eine dreieckige, in viele Arme geteilte Mündung, die entsteht, wenn der Fluss mehr Schutt bringt, als das Meer wegtragen kann. Beispiel: das <b>Podelta</b>." },
          sea: { label: "Meer", html: "Das Ende der Reise. Das Süßwasser des Flusses vermischt sich mit dem Salzwasser des Meeres … und irgendwann verdunstet es und regnet wieder auf die Berge." }
        }
      }
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Reise des Flusses",
      questions: [
        { type: "mc", q: "Wie heißt der Punkt, an dem ein Fluss entsteht?", options: ["Mündung", "Quelle", "Delta"], answer: 1, explain: "Der Fluss entsteht an der Quelle und endet an der Mündung." },
        { type: "mc", q: "Wo ist das Wasser des Flusses am schnellsten?", options: ["Im Gebirge", "In der Ebene", "An der Mündung"], answer: 0, explain: "Im Gebirge ist das Gefälle stark und das Wasser rast." },
        { type: "tf", q: "Mäander sind die großen Bögen, die der Fluss in der Ebene macht.", answer: true, explain: "In der Ebene ist das Wasser langsam und der Fluss schlängelt sich in Mäandern." }
      ]
    },
    {
      type: "text",
      title: "Schritt 2: Nebenflüsse, Bäche und Einzugsgebiet",
      html: `<ul>
<li>Ein <b>Nebenfluss</b> ist ein Fluss, der in einen größeren Fluss mündet. Der Po hat sehr viele Nebenflüsse: von links (aus den Alpen) die <b>Dora Baltea</b>, den <b>Ticino</b>, die <b>Adda</b>, den <b>Oglio</b>, den <b>Mincio</b>; von rechts (aus dem Apennin) den <b>Tanaro</b>, die <b>Trebbia</b>, den <b>Taro</b>, den <b>Panaro</b>.</li>
<li>Der Punkt, an dem zwei Flüsse zusammenkommen, heißt <b>Zusammenfluss</b>.</li>
<li>Ein <b>Wildbach</b> (italienisch <i>torrente</i>) ist ein Gewässer, das im Sommer fast trocken sein kann und nach Gewittern plötzlich anschwillt. In Italien gibt es viele davon, vor allem im Apennin und im Süden, wo es im Sommer wenig regnet.</li>
<li>Der <b>Bach</b> ist ein kleines Gewässer.</li>
<li>Das <b>Einzugsgebiet</b> ist das ganze Gebiet, aus dem das Regenwasser in einen bestimmten Fluss gelangt. Das Einzugsgebiet des Po ist etwa <b>71.000 km²</b> groß: fast ein Viertel Italiens!</li>
</ul>
<p>Die Wassermenge eines Flusses ändert sich im Lauf des Jahres: Das nennt man <b>Abflussregime</b>. Die Alpenflüsse führen im Frühling und Sommer am meisten Wasser, wenn Schnee und Gletscher schmelzen; die Flüsse des Apennin im Herbst und Winter, wenn es am meisten regnet.</p>`
    },
    {
      type: "widget",
      title: "Die Teile des Flusses",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<path d="M0 0 L200 0 L120 120 L0 160 Z" fill="#a8a29e"/>
<path d="M60 20 Q70 10 80 22 Z" fill="#ffffff"/>
<path d="M500 220 L600 200 L600 300 L470 300 Z" fill="#3b82f6"/>
<path d="M70 40 Q100 90 150 120 Q230 150 260 180 Q300 210 360 200 Q420 190 430 230 Q440 260 490 255" stroke="#2563eb" stroke-width="9" fill="none" stroke-linecap="round"/>
<path d="M330 40 Q320 100 285 190" stroke="#60a5fa" stroke-width="6" fill="none"/>
<ellipse cx="200" cy="245" rx="70" ry="30" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
<path d="M240 190 Q230 205 220 218" stroke="#2563eb" stroke-width="5" fill="none"/>
<circle cx="70" cy="40" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 70, y: 40, label: "Quelle" },
          { x: 325, y: 70, label: "Nebenfluss" },
          { x: 285, y: 192, label: "Zusammenfluss" },
          { x: 420, y: 200, label: "Mäander" },
          { x: 200, y: 245, label: "See" },
          { x: 490, y: 255, label: "Mündung" },
          { x: 90, y: 120, label: "Gebirge" }
        ]
      },
      caption: "Tippe auf jeden Punkt und wähle den richtigen Namen."
    },
    {
      type: "text",
      title: "Schritt 3: zwei Arten von Mündung",
      html: `<p>Nicht alle Flüsse enden auf dieselbe Weise:</p>
<ul>
<li><b>Deltamündung</b>: Der Fluss teilt sich in viele Arme und bildet ein Dreieck aus neuem Land, weil er viel Schutt mitbringt und das Meer (mit wenig Gezeiten) ihn nicht wegtragen kann. Beispiele: der <b>Po</b>, der <b>Nil</b>, die <b>Donau</b>.</li>
<li><b>Trichtermündung (Ästuar)</b>: Der Fluss endet mit einer einzigen breiten, trichterförmigen Öffnung, die von den ein- und ausströmenden <b>Gezeiten</b> „sauber gespült“ wird. Beispiele: die <b>Themse</b> in London, die <b>Seine</b> in Frankreich, der <b>Río de la Plata</b> in Südamerika.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Delta und Ästuar",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<rect x="10" y="10" width="280" height="240" fill="#86efac"/>
<rect x="10" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M150 10 L150 110" stroke="#2563eb" stroke-width="10"/>
<path d="M150 110 L90 175 M150 110 L130 178 M150 110 L170 178 M150 110 L210 175" stroke="#2563eb" stroke-width="6"/>
<path d="M150 110 L70 170 L230 170 Z" fill="#facc15" opacity="0.45"/>
<text x="150" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">DELTA</text>
<text x="150" y="225" font-size="14" text-anchor="middle" fill="#ffffff">viele Arme, Dreieck</text>
<rect x="310" y="10" width="280" height="240" fill="#86efac"/>
<rect x="310" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M450 10 L450 90" stroke="#2563eb" stroke-width="10"/>
<path d="M445 90 L380 172 L520 172 L455 90 Z" fill="#3b82f6"/>
<text x="450" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ÄSTUAR</text>
<text x="450" y="225" font-size="14" text-anchor="middle" fill="#ffffff">eine einzige Trichtermündung</text>
</svg>`,
      caption: "Im Delta baut der Fluss neues Land auf; im Ästuar dringt das Meer mit den Gezeiten in den Fluss ein."
    },
    {
      type: "text",
      title: "Schritt 4: die Seen",
      html: `<p>Ein <b>See</b> ist eine Wassermasse (meist Süßwasser), die eine <b>Mulde</b>, ein „Loch“ im Gelände, füllt. Er ist nicht direkt mit dem Meer verbunden. Er wird von Flüssen (den <b>Zuflüssen</b>), von Quellen am Grund und vom Regen gespeist; oft fließt ein Fluss aus ihm heraus (der <b>Abfluss</b>).</p>
<p>Seen werden danach eingeteilt, wie die Mulde entstanden ist:</p>
<ul>
<li>🧊 <b>Gletscherseen</b>: von Gletschern in den Eiszeiten ausgehobelt. Sie sind lang und schmal, wie die großen Seen am Alpenrand: <b>Gardasee</b>, <b>Lago Maggiore</b>, <b>Comer See</b>, <b>Iseosee</b>, <b>Ortasee</b>. Auch die kleinen Bergseen in den Alpen sind Gletscherseen.</li>
<li>🌋 <b>Vulkanseen</b>: im Krater eines erloschenen Vulkans. Sie sind fast rund: <b>Bolsenasee</b>, <b>Braccianosee</b>, <b>Vicosee</b>, <b>Albanersee</b> (in Latium).</li>
<li>🪨 <b>Tektonische Seen</b>: in einer Mulde, die durch Bewegungen der Erdkruste entstand, wie der <b>Trasimenische See</b> in Umbrien.</li>
<li>🏖️ <b>Küstenseen</b>: nahe am Meer, durch Sandstreifen abgetrennt, wie <b>Lesina</b> und <b>Varano</b> in Apulien.</li>
<li>🏗️ <b>Stauseen</b>: vom Menschen mit einer <b>Staumauer</b> angelegt, um Wasser zu haben und Strom zu erzeugen, wie der See von <b>Ceresole Reale</b> im Piemont.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Was für ein See ist das?",
      widget: "classify",
      caption: "Ordne jeden See der richtigen Gruppe zu.",
      options: {
        groups: ["🧊 Gletschersee", "🌋 Vulkansee", "🏖️ Küstensee", "🏗️ Stausee"],
        items: [
          ["Gardasee", 0], ["Lago Maggiore", 0], ["Comer See", 0],
          ["Bolsenasee", 1], ["Braccianosee", 1], ["Albanersee", 1],
          ["Lago di Lesina", 2], ["Lago di Varano", 2],
          ["See von Ceresole Reale (mit Staumauer)", 3]
        ]
      }
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Reise des Po",
      html: `<p>Der <b>Po</b> ist der längste Fluss Italiens: <b>652 km</b>.</p>
<ul>
<li>Er entspringt im <b>Piemont</b>, am <b>Pian del Re</b> (etwa 2000 m), am Fuß des <b>Monviso</b>.</li>
<li>Er stürzt schnell durch das Tal, erreicht dann die Ebene und durchfließt <b>Turin</b>.</li>
<li>Er fließt von Westen nach Osten durch die <b>Poebene</b>, zwischen Piemont, Lombardei, Emilia-Romagna und Venetien, vorbei an Piacenza, Cremona und Ferrara.</li>
<li>Er nimmt mehr als 140 Nebenflüsse auf.</li>
<li>Er mündet mit einem großen <b>Delta</b> in die <b>Adria</b>, zwischen Venetien und Emilia-Romagna, heute ein Naturpark.</li>
</ul>
<p>Nach dem Po sind die längsten Flüsse Italiens die <b>Etsch</b> (Adige, etwa 410 km) und der <b>Tiber</b> (Tevere, etwa 405 km), der durch Rom fließt.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: wozu brauchen wir Flüsse und Seen?",
      html: `<ul>
<li>🚰 <b>Wasser</b> zum Trinken und für die Haushalte (nachdem es gereinigt wurde).</li>
<li>🌾 <b>Bewässerung</b>: Kanäle, die das Wasser auf die Felder bringen. Die Poebene ist voller Kanäle, wie dem <b>Canale Cavour</b> im Piemont.</li>
<li>⚡ <b>Energie</b>: Staumauern und Wasserkraftwerke verwandeln die Kraft des fallenden Wassers in Strom.</li>
<li>🚢 <b>Transport</b>: Früher brachten Boote und Lastkähne Waren auf den Flüssen; noch heute fahren auf dem Rhein und der Donau große Schiffe.</li>
<li>🐟 <b>Fischerei</b>, Sport und Tourismus: Kanufahren, Segeln, Schwimmen in Seen.</li>
<li>🏙️ Viele <b>Städte</b> sind an Flüssen entstanden: Rom am Tiber, Florenz am Arno, Turin am Po, Paris an der Seine, London an der Themse.</li>
</ul>
<p>Aber Flüsse müssen <b>respektiert</b> werden: Sie können über die Ufer treten und <b>Überschwemmungen</b> verursachen. Deshalb darf man nicht zu nah an den Deichen bauen und muss die Flüsse sauber halten.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass … im Baikalsee ein Fünftel des Süßwassers aller Seen der Welt steckt?",
      html: `<p>Der <b>Baikalsee</b> in Sibirien (Russland) ist der <b>tiefste</b> See der Welt: <b>1642 Meter</b>! Er enthält etwa <b>20 %</b> des gesamten flüssigen Süßwassers der Seen und Flüsse der Erde. Er ist außerdem einer der ältesten: Er ist etwa 25 Millionen Jahre alt. Im Winter friert er zu und das Eis ist so dick, dass Autos darüberfahren können.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass … der größte „See“ der Welt Meer heißt?",
      html: `<p>Das <b>Kaspische Meer</b> zwischen Europa und Asien ist in Wirklichkeit der größte See der Welt: etwa <b>371.000 km²</b>, größer als Italien (etwa 302.000 km²)! Es heißt „Meer“, weil sein Wasser ein wenig <b>salzig</b> ist. Der größte Süßwassersee ist der <b>Obere See</b> (Lake Superior) zwischen Kanada und den Vereinigten Staaten.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass … Nil oder Amazonas?",
      html: `<p>Der <b>Nil</b> (etwa 6650 km) und der <b>Amazonas</b> (etwa 6400 km, aber manche Forscher sagen mehr) streiten um den Titel des längsten Flusses der Welt: Es hängt davon ab, wo man die Quelle ansetzt! Bei der Wassermenge dagegen gibt es keinen Wettstreit: Der Amazonas bringt etwa <b>ein Fünftel</b> des gesamten Flusswassers der Welt ins Meer.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Flüsse und Seen zu verstehen",
      intro: "Wenn es viele Wörter sind, versuche den Fluss einmal anders zu sehen.",
      tabs: [
        {
          label: "🌳 Der Fluss als Baum",
          html: `<p>Schau dir einen Fluss mit allen seinen Nebenflüssen von oben an: Er sieht aus wie ein umgekehrter <b>Baum</b>!</p>
<ul>
<li>die <b>Wurzeln</b> und kleinsten Zweige sind die Bäche im Gebirge;</li>
<li>die <b>Äste</b> sind die Nebenflüsse;</li>
<li>der <b>Stamm</b> ist der Hauptfluss;</li>
<li>der Punkt, an dem der Stamm den Boden berührt, ist die <b>Mündung</b>.</li>
</ul>
<p>Und die ganze Baumkrone? Das ist das <b>Einzugsgebiet</b>. Auf Englisch heißt ein Fluss mit seinen Nebenflüssen <i>river system</i>, und baumförmige Muster nennt man <b>dendritisch</b> (vom griechischen <i>déndron</i>, Baum).</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<path d="M300 250 L300 160" stroke="#2563eb" stroke-width="12"/>
<path d="M300 160 Q240 120 180 90 M300 160 Q360 120 420 90 M300 190 Q230 180 160 170 M300 190 Q380 185 450 165" stroke="#2563eb" stroke-width="7" fill="none"/>
<path d="M180 90 Q150 60 120 40 M180 90 Q190 55 200 30 M420 90 Q450 60 480 40 M420 90 Q400 55 390 25 M160 170 Q120 150 90 130 M450 165 Q490 145 520 120" stroke="#60a5fa" stroke-width="4" fill="none"/>
<text x="310" y="245" font-size="15" fill="#1e3a8a" font-weight="bold">Mündung (Stamm)</text>
<text x="420" y="200" font-size="15" fill="#1e3a8a" font-weight="bold">Nebenflüsse (Äste)</text>
<text x="60" y="30" font-size="15" fill="#1e3a8a" font-weight="bold">Bäche und Quellen</text>
</svg>`
        },
        {
          label: "🧪 Das Backblech-Experiment",
          html: `<p>Baue einen Fluss im Kleinformat:</p>
<ol>
<li>Gib feuchten <b>Sand</b> in ein Backblech, auf der einen Seite höher (das „Gebirge“).</li>
<li>Stelle das Blech leicht schräg, mit dem tiefen Ende über einem Waschbecken oder einer Schüssel (das „Meer“).</li>
<li>Gieße langsam Wasser aus einem Glas auf den oberen Teil.</li>
</ol>
<p>Beobachte: Das Wasser gräbt eine <b>Rinne</b> (das Tal), teilt sich und vereint sich wieder (Nebenflüsse und Zusammenflüsse), unten wird es langsamer und lässt den Sand liegen, sodass ein kleines <b>Delta</b> entsteht! Wenn du ein Loch in den Sand machst, füllt das Wasser es: Das ist ein <b>See</b> mit seinem Zufluss und seinem Abfluss.</p>`
        },
        {
          label: "🌍 Die großen Flüsse der Welt",
          html: `<p>Dreh den Globus und finde die Mündungen der berühmtesten Flüsse. Beachte, dass die großen alten Kulturen nahe an Flüssen entstanden: die Ägypter am Nil, die Sumerer zwischen Euphrat und Tigris, die Inder am Indus, die Chinesen am Gelben Fluss.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.5, lon: 31.0, label: "Nil (~6650 km)", color: "#2563eb" },
              { lat: -0.5, lon: -50.0, label: "Amazonas (~6400 km)", color: "#16a34a" },
              { lat: 31.4, lon: 121.9, label: "Jangtse (~6300 km)", color: "#f97316" },
              { lat: 29.0, lon: -89.3, label: "Mississippi", color: "#a855f7" },
              { lat: 45.2, lon: 29.6, label: "Donau", color: "#0ea5e9" },
              { lat: 44.95, lon: 12.45, label: "Po (652 km)", color: "#dc2626" },
              { lat: 53.5, lon: 108.0, label: "Baikalsee", color: "#06b6d4" },
              { lat: 42.0, lon: 50.5, label: "Kaspisches Meer", color: "#06b6d4" }
            ]
          }
        },
        {
          label: "🇬🇧 Die Wörter auf Englisch",
          html: `<p>Dreh die Karten um: Viele englische Wörter ähneln den deutschen!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🏞️ river", back: "Fluss" },
              { front: "💧 spring / source", back: "Quelle" },
              { front: "🌊 mouth", back: "Mündung (wörtlich „Mund“ des Flusses)" },
              { front: "🔀 tributary", back: "Nebenfluss" },
              { front: "〰️ meander", back: "Mäander" },
              { front: "🏔️ glacier", back: "Gletscher" },
              { front: "🛶 lake", back: "See" },
              { front: "🧱 dam", back: "Staumauer" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte: Warum sind Flüsse und Seen so? Tippe auf die Knoten",
      nodes: [
        { id: "ciclo", label: "🌧️ Wasserkreislauf", x: 50, y: 5, color: "#0ea5e9", html: "Verdunstung, Wolken, Regen und Schnee.", why: "Die Sonne lässt das Wasser der Meere verdunsten; der Dampf steigt auf, kühlt ab und bildet Wolken; dann fällt er als Regen oder Schnee. Dass das Wasser der Flüsse ganz vom Regen stammt, bewies der Franzose Pierre Perrault 1674, indem er den Regen und das Wasser der Seine maß." },
        { id: "gravita", label: "⬇️ Schwerkraft", x: 20, y: 25, color: "#7c3aed", html: "Wasser fließt immer abwärts.", why: "Es ist dieselbe Kraft, die Äpfel fallen lässt, beschrieben von Isaac Newton im Jahr 1687. Je steiler das Gelände, desto mehr beschleunigt das Wasser: Deshalb sind die Flüsse im Gebirge schnell." },
        { id: "sorgente", label: "💧 Quelle", x: 80, y: 25, color: "#06b6d4", html: "Wo der Fluss entsteht.", why: "Das Regenwasser sickert in poröse oder zerklüftete Gesteine, fließt unterirdisch und tritt dort aus, wo es auf eine wasserundurchlässige Gesteinsschicht trifft, die es aufhält." },
        { id: "erosione", label: "⛏️ Erosion", x: 20, y: 50, color: "#b45309", html: "Schnelles Wasser gräbt und transportiert Steine.", why: "Das rasende Wasser schleppt Steine und Sand mit, die wie eine Feile am Boden scheuern: In Tausenden von Jahren gräbt es tiefe Täler. Der Grand Canyon wurde vom Colorado River in einigen Millionen Jahren ausgehöhlt." },
        { id: "deposito", label: "🏝️ Ablagerung", x: 50, y: 50, color: "#eab308", html: "Langsames Wasser lässt Sand und Schlamm liegen.", why: "Je langsamer das Wasser, desto weniger Last kann es tragen: Zuerst lässt es die Steine fallen, dann den Sand, am Ende den feinsten Schlamm. So entstehen Schwemmlandebenen und Deltas." },
        { id: "meandri", label: "〰️ Mäander und Delta", x: 80, y: 55, color: "#2563eb", html: "Bögen in der Ebene, Mündung mit Armen.", why: "In der Kurve ist das Wasser am äußeren Ufer schneller (es wird ausgehöhlt) und am inneren langsamer (dort lagert sich Sand ab): Die Kurve wird immer weiter. Der Name kommt vom Fluss Mäander in der Türkei, der für seine Windungen berühmt ist." },
        { id: "ghiacciai", label: "🧊 Eiszeitgletscher", x: 25, y: 80, color: "#38bdf8", html: "In den Eiszeiten haben sie große Mulden ausgehoben.", why: "Bis vor etwa 20.000 Jahren stiegen riesige Eiszungen von den Alpen bis in die Ebene hinab. Sie hobelten tiefe Mulden aus (der Grund des Comer Sees liegt unter dem Meeresspiegel!) und hinterließen Hügel aus Schutt, die Moränen, die wie ein Damm wirken." },
        { id: "laghi", label: "🛶 Seen", x: 60, y: 90, color: "#0369a1", html: "Gletscher-, Vulkan-, tektonische, Küsten- und Stauseen.", why: "Ein See entsteht überall dort, wo eine Mulde das Wasser festhält: ein Krater, ein vom Eis ausgehobeltes Tal, eine Absenkung der Erdkruste, eine Düne oder eine Staumauer. Früher oder später füllen die Flüsse ihn mit Schutt auf: Auch Seen „altern“ langsam." }
      ],
      edges: [
        ["ciclo", "sorgente", "speist die"],
        ["ciclo", "gravita", "das Wasser fällt durch"],
        ["gravita", "erosione", "schnelles Wasser:"],
        ["erosione", "deposito", "der Schutt landet in der"],
        ["deposito", "meandri", "bildet"],
        ["sorgente", "meandri", "der Fluss fließt bis zu"],
        ["ghiacciai", "laghi", "heben die Mulden der aus"],
        ["erosione", "ghiacciai", "auch Eis gräbt:"]
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Der Fluss entsteht an der <b>Quelle</b>, fließt in seinem <b>Flussbett</b> und endet an der <b>Mündung</b>.</li>
<li>Im Gebirge ist er <b>schnell</b> und gräbt V-Täler; in der Ebene ist er <b>langsam</b> und bildet <b>Mäander</b>.</li>
<li><b>Nebenflüsse</b> münden in einen größeren Fluss; der <b>Wildbach</b> kann im Sommer trocken fallen.</li>
<li>Die Mündung kann ein <b>Delta</b> (viele Arme) oder ein <b>Ästuar</b> (eine Trichtermündung) sein.</li>
<li>Der <b>See</b> füllt eine Mulde: Er kann ein Gletscher-, Vulkan-, tektonischer, Küsten- oder Stausee sein. Der Fluss, der hineinfließt, ist der <b>Zufluss</b>, der, der herausfließt, der <b>Abfluss</b>.</li>
<li>Der Po (652 km) ist der längste Fluss Italiens; der Gardasee ist der größte See.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Seen",
      questions: [
        { type: "mc", q: "Wie heißt der Fluss, der aus einem See herausfließt?", options: ["Zufluss", "Abfluss", "Nebenfluss"], answer: 1, explain: "Der Abfluss fließt heraus, der Zufluss fließt hinein." },
        { type: "mc", q: "Die fast runden Seen Bolsena und Bracciano sind entstanden durch …", options: ["Gletscher", "Vulkane", "Menschen"], answer: 1, explain: "Sie liegen in den Kratern alter Vulkane in Latium." },
        { type: "mc", q: "Welcher ist der größte See Italiens?", options: ["Comer See", "Gardasee", "Trasimenischer See"], answer: 1, explain: "Der Gardasee, etwa 370 km²." }
      ]
    }
  ],
  glossary: [
    { t: "Quelle", d: "Der Punkt, an dem ein Fluss entsteht." },
    { t: "Mündung", d: "Der Punkt, an dem ein Fluss endet, im Meer, in einem See oder in einem anderen Fluss." },
    { t: "Flussbett", d: "Die Rinne, in der das Wasser des Flusses fließt." },
    { t: "Deich", d: "Erdwall am Fluss, der verhindert, dass das Wasser über die Ufer tritt." },
    { t: "Nebenfluss", d: "Fluss, der in einen anderen Fluss mündet." },
    { t: "Zusammenfluss", d: "Punkt, an dem zwei Flüsse zusammenkommen." },
    { t: "Wildbach", d: "Gewässer mit viel Wasser nach Regenfällen und wenig oder keinem im Sommer." },
    { t: "Mäander", d: "Großer S-förmiger Bogen, den der Fluss in der Ebene bildet." },
    { t: "Delta", d: "Mündung, die in viele Arme geteilt ist, in Form eines Dreiecks." },
    { t: "Ästuar", d: "Mündung mit nur einem Arm, breit und trichterförmig." },
    { t: "Einzugsgebiet", d: "Gebiet, aus dem alle Gewässer in einen bestimmten Fluss gelangen." },
    { t: "Zufluss / Abfluss", d: "Der Fluss, der in einen See hineinfließt / der Fluss, der aus einem See herausfließt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Bring die Reise des Flusses in die richtige Reihenfolge.", items: ["Quelle", "Oberlauf (Gebirge)", "Unterlauf (Ebene)", "Mündung"], explain: "Der Fluss entsteht im Gebirge und endet an der Mündung." },
      { type: "mc", q: "Woher kommt das Wasser der Flüsse?", options: ["Vom Regen, vom Schnee und von den Gletschern", "Nur vom Meer", "Aus den Wasserhähnen"], answer: 0, explain: "Es ist das Wasser aus dem Wasserkreislauf: Regen, Schnee und schmelzendes Eis." },
      { type: "text", q: "Wie nennt man einen Fluss, der in einen anderen Fluss mündet?", answer: ["Nebenfluss", "ein Nebenfluss", "der Nebenfluss", "Zufluss"], explain: "Er heißt Nebenfluss; der Punkt, an dem sie zusammentreffen, ist der Zusammenfluss." },
      { type: "tf", q: "In der Ebene ist das Wasser des Flusses schneller als im Gebirge.", answer: false, explain: "In der Ebene ist das Gelände fast flach und das Wasser wird langsamer." },
      { type: "mc", q: "Welcher ist der längste Fluss Italiens?", options: ["Der Tiber", "Der Arno", "Der Po"], answer: 2, explain: "Der Po, 652 km, entspringt am Monviso und mündet in die Adria." },
      { type: "num", q: "Der Po ist 652 km lang und der Tiber 405 km. Wie viele km länger ist der Po?", answer: 247, tol: 0, unit: "km", explain: "652 − 405 = 247 km." },
      { type: "mc", q: "Eine in viele Arme geteilte Mündung in Form eines Dreiecks heißt …", options: ["Ästuar", "Delta", "Mäander"], answer: 1, explain: "Delta, wie der griechische Buchstabe Δ." },
      { type: "mc", q: "Was ist ein Wildbach (torrente)?", options: ["Ein Gewässer, das im Sommer fast trocken sein kann", "Ein Bergsee", "Ein Fluss ohne Mündung"], answer: 0, explain: "Wildbäche hängen vom Regen ab: Im Sommer können sie austrocknen." },
      { type: "mc", q: "Die großen Seen Norditaliens (Garda, Maggiore, Como) sind entstanden durch …", options: ["Vulkane", "Gletscher", "das Meer an der Küste"], answer: 1, explain: "Ihre Mulden wurden von den Gletschern der Eiszeiten ausgehobelt." },
      { type: "tf", q: "Der Abfluss ist der Fluss, der aus einem See herausfließt.", answer: true, explain: "Der Zufluss fließt hinein, der Abfluss fließt heraus." },
      { type: "mc", q: "Welcher ist der tiefste See der Welt?", options: ["Das Kaspische Meer", "Der Baikalsee", "Der Gardasee"], answer: 1, explain: "Der Baikalsee in Sibirien, 1642 Meter tief." },
      { type: "text", q: "Wie heißt der große S-förmige Bogen, den der Fluss in der Ebene macht?", answer: ["Mäander", "der Mäander", "Mäander (Mehrzahl)", "Maeander"], explain: "Der Mäander." }
    ],
    gen: [["sub100", 2]]
  }
});
