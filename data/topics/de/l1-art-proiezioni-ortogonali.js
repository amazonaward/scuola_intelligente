TOPIC('de', {
  id: `l1-art-proiezioni-ortogonali`,
  title: `Zeichnen: Orthogonalprojektionen`,
  intro: `Wie erklärt ein Ingenieur einer Fabrik, wie ein Bauteil gefertigt wird, ohne das Objekt selbst zu verschicken? Er <b>zeichnet es von mehreren Seiten</b>, nach genauen Regeln, sodass es überall auf der Welt nachgebaut und nachgemessen werden kann. Die <b>Orthogonalprojektionen</b> sind die gemeinsame Sprache des technischen Zeichnens: Jeder Punkt, jede Strecke, jeder Körper wird auf zueinander senkrechte Ebenen „plattgedrückt“. Lernen wir, diese Sprache zu lesen und zu schreiben. 📐🧊`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Was ist eine Orthogonalprojektion?`,
      html: `<p>Einen Punkt auf eine Ebene zu projizieren bedeutet, von diesem Punkt aus eine Gerade (den <b>Projektionsstrahl</b>) bis zur Ebene zu ziehen. Steht der Strahl <b>senkrecht</b> auf der Ebene, ist die Projektion <b>orthogonal</b>. Das Bild, das entsteht, gleicht dem Schatten eines Gegenstands, der von einer sehr weit entfernten Lichtquelle senkrecht zur Ebene beleuchtet wird.</p>
<p>Eine einzige Projektion reicht nicht aus: Der Schatten eines Würfels, von vorn gesehen, ist ein Quadrat, aber dasselbe Quadrat könnte auch der Schatten eines sehr tiefen Quaders sein! Um einen Gegenstand eindeutig festzulegen, braucht man <b>mindestens zwei Projektionen auf zueinander senkrechten Ebenen</b>, oft drei.</p>
<p>Die Methode wurde von <b>Gaspard Monge</b> (1746–1818), einem französischen Mathematiker, für die Planung von Festungsanlagen ausgearbeitet. Jahrelang geheim gehalten, wurde sie 1795 an der École Normale gelehrt und unter dem Titel <i>Géométrie descriptive</i> veröffentlicht: Das ist die Geburtsstunde der <b>darstellenden Geometrie</b>. Man spricht deshalb vom <b>Mongeschen Verfahren</b>.</p>`
    },
    {
      type: `text`, title: `2. Die drei Ebenen und das Umklappen`,
      html: `<p>Stell dir die Ecke eines Zimmers vor: Zwei Wände und der Boden treffen sich im rechten Winkel. Das sind die drei Projektionsebenen:</p>
<ul>
<li><b>VE – Vertikalebene</b> (die Wand vor dir): Auf sie wird der <b>Aufriss</b> projiziert (Vorderansicht);</li>
<li><b>HE – Horizontalebene</b> (der Boden): Auf sie wird der <b>Grundriss</b> projiziert (Ansicht von oben);</li>
<li><b>SE – Seitenebene</b> (die Wand an der Seite): Auf sie wird der <b>Seitenriss</b> projiziert (Seitenansicht, meist von links).</li>
</ul>
<p>Die Schnittgeraden der Ebenen sind die Achsen des Systems: die <b>Rissachse</b> (VE ∩ HE) und die beiden anderen. Um alles auf ein einziges ebenes Blatt zu bringen, wird <b>umgeklappt</b>: Die VE bleibt stehen, die HE dreht sich um 90° um die Rissachse, bis sie auf der VE liegt, und die SE dreht sich um 90° um ihre eigene Rissachse.</p>
<p>Das Ergebnis ist die <b>Standardanordnung</b>: der <b>Aufriss</b> oben links, der <b>Grundriss</b> <b>unter</b> dem Aufriss (gleiche Breite), der <b>Seitenriss</b> <b>rechts</b> vom Aufriss (gleiche Höhe). Mithilfe der <b>Ordnungslinien</b> (dünne Hilfslinien) werden die drei Ansichten einander zugeordnet.</p>`
    },
    {
      type: `svg`, title: `Die drei Ansichten eines Quaders`,
      caption: `Aufriss (oben links), Grundriss (darunter) und Seitenriss (rechts) eines Quaders 120 × 70 × 80. Die dünnen Linien sind die Ordnungslinien: Aufriss und Grundriss haben dieselbe Breite, Aufriss und Seitenriss dieselbe Höhe.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="90" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="60" y="150" width="170" height="110" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<rect x="270" y="30" width="110" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"><line x1="60" y1="120" x2="60" y2="150"/><line x1="230" y1="120" x2="230" y2="150"/><line x1="230" y1="30" x2="270" y2="30"/><line x1="230" y1="120" x2="270" y2="120"/></g>
<line x1="20" y1="135" x2="250" y2="135" stroke="#dc2626" stroke-width="2"/>
<text x="26" y="130" font-size="14" fill="#dc2626">Rissachse</text>
<text x="145" y="80" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">AUFRISS</text>
<text x="145" y="210" font-size="17" font-weight="bold" fill="#166534" text-anchor="middle">GRUNDRISS</text>
<text x="325" y="80" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">SEITENRISS</text>
<text x="145" y="108" font-size="14" fill="#334155" text-anchor="middle">Breite × Höhe</text>
<text x="145" y="232" font-size="14" fill="#334155" text-anchor="middle">Breite × Tiefe</text>
<text x="325" y="104" font-size="14" fill="#334155" text-anchor="middle">Tiefe × Höhe</text>
<text x="420" y="60" font-size="15" fill="#1e293b">VE: Wand vorn</text>
<text x="420" y="90" font-size="15" fill="#1e293b">HE: Boden</text>
<text x="420" y="120" font-size="15" fill="#1e293b">SE: Wand seitlich</text>
<text x="420" y="180" font-size="15" fill="#334155">jede Ansicht zeigt</text>
<text x="420" y="205" font-size="15" fill="#334155">zwei Abmessungen und</text>
<text x="420" y="230" font-size="15" fill="#334155">verbirgt eine</text>
</svg>`
    },
    {
      type: `3d`, title: `Dreh den Körper: Woher betrachtest du ihn?`,
      scene: `solid`,
      options: { shape: `box`, w: 3, h: 2, d: 2, color: `#3b82f6`, labels: true, shapes: [`box`, `cube`, `prism`, `pyramid`, `cylinder`, `cone`, `sphere`] },
      caption: `Betrachte den Körper von oben (Grundriss), von vorn (Aufriss) und von der Seite (Seitenriss). Probiere dann Pyramide, Zylinder und Kegel aus: Welche Ansicht zeigt einen Kreis? Welche ein Dreieck?`
    },
    {
      type: `quiz`, title: `Mini-Quiz: die drei Ebenen`,
      questions: [
        { type: `mc`, q: `Auf welche Ebene wird der Grundriss projiziert?`, options: [`VE`, `HE`, `SE`], answer: 1, explain: `Der Grundriss ist die Ansicht von oben: Er wird auf die Horizontalebene (HE) projiziert.` },
        { type: `mc`, q: `Wo wird in der Standardanordnung der Grundriss im Verhältnis zum Aufriss gezeichnet?`, options: [`Darüber`, `Darunter`, `Rechts daneben`], answer: 1, explain: `Nach dem Umklappen der HE liegt der Grundriss unter dem Aufriss, mit gleicher Breite.` },
        { type: `tf`, q: `Eine einzige Orthogonalprojektion reicht aus, um einen Körper festzulegen.`, answer: false, explain: `Verschiedene Körper können dieselbe Projektion haben: Man braucht mindestens zwei Ansichten.` }
      ]
    },
    {
      type: `text`, title: `3. Punkte und Strecken`,
      html: `<p>Ein <b>Punkt</b> P im Raum hat drei Koordinaten (x, y, z). Seine Projektionen sind: <b>P'</b> auf der HE (Grundriss, zeigt Breite und Tiefe), <b>P''</b> auf der VE (Aufriss, zeigt Breite und Höhe). Nach dem Umklappen liegen P' und P'' auf <b>derselben Senkrechten zur Rissachse</b> (der „Ordnungslinie“). Der Abstand von P'' zur Rissachse ist die <b>Höhe</b> (Höhe von P über dem Boden); der Abstand von P' zur Rissachse ist die <b>Tiefe</b> (Abstand von P zur Wand).</p>
<p>Eine <b>Strecke</b> AB wird projiziert, indem man die Projektionen der beiden Endpunkte verbindet. Die wichtigen Lagen sind:</p>
<ul>
<li><b>parallel zur HE</b> (waagerecht): Im Grundriss erscheint sie in <b>wahrer Größe</b>, im Aufriss verläuft sie parallel zur Rissachse;</li>
<li><b>parallel zur VE</b>: Im Aufriss erscheint sie in wahrer Größe;</li>
<li><b>senkrecht zur HE</b> (lotrecht): Im Grundriss ist sie auf einen <b>Punkt</b> verkürzt, im Aufriss erscheint sie in wahrer Größe und steht senkrecht zur Rissachse;</li>
<li><b>senkrecht zur VE</b>: Im Aufriss ist sie ein Punkt, im Grundriss erscheint sie in wahrer Größe und steht senkrecht zur Rissachse;</li>
<li><b>allgemeine</b> (schiefe) Lage: In <b>beiden</b> Projektionen ist sie kürzer als in Wirklichkeit; die wahre Länge findet man mit einem Hilfsverfahren.</li>
</ul>
<p>Allgemeine Regel: Die Orthogonalprojektion einer Strecke ist <b>so lang wie die Strecke mal der Kosinus</b> des Winkels zur Ebene: Ist sie parallel (0°), ist der Kosinus 1 und die Länge ändert sich nicht; steht sie senkrecht (90°), ist der Kosinus 0 und sie schrumpft zu einem Punkt.</p>`
    },
    {
      type: `example`, title: `Beispiel: Wo hängt die Lampe?`,
      html: `<p>Eine Lampe hängt an der Decke eines Zimmers, 2,5 m über dem Boden und 1,2 m von der Rückwand entfernt. Wie stellst du sie dar?</p>
<ul>
<li>Der <b>Aufriss</b> (VE) zeigt die Lampe <b>2,5 m</b> über der Rissachse.</li>
<li>Der <b>Grundriss</b> (HE) zeigt sie (nach dem Umklappen) <b>1,2 m</b> unter der Rissachse.</li>
<li>Die beiden Projektionen liegen auf derselben Senkrechten (der Ordnungslinie).</li>
</ul>
<p>Aus zwei einfachen Maßen lässt sich die genaue Lage im Raum wiederfinden: Das ist das Prinzip hinter topografischen Karten mit Höhenangaben und hinter den Koordinaten der GPS-Systeme.</p>`
    },
    {
      type: `text`, title: `4. Ebene Figuren`,
      html: `<p>Eine <b>ebene Figur</b> (zum Beispiel ein Quadrat oder ein Kreis) wird Punkt für Punkt orthogonal projiziert. Was dabei geschieht, hängt von ihrer <b>Lage</b> ab:</p>
<ul>
<li><b>parallel zu einer Projektionsebene</b>: Auf dieser Ebene erscheint sie in <b>wahrer Gestalt</b> (gleiche Form und Abmessungen), auf der anderen ist sie auf eine <b>Strecke</b> verkürzt (parallel zur Rissachse);</li>
<li><b>senkrecht zu einer Ebene</b>: Auf dieser ist sie eine <b>Strecke</b>;</li>
<li><b>geneigt</b>: In beiden Projektionen ist sie <b>verzerrt</b> (ein Quadrat wird zum Parallelogramm, ein Kreis zu einer <b>Ellipse</b>).</li>
</ul>
<p>Beispiel: Ein <b>Quadrat mit 4 cm Seitenlänge</b>, das auf dem Boden liegt (parallel zur HE), ist im Grundriss ein Quadrat von 4 × 4 cm in wahrer Gestalt, im Aufriss eine waagerechte Strecke von 4 cm Länge. Stellen wir es hochkant (senkrecht zur VE) auf, ist es genau umgekehrt.</p>
<p>Ein <b>Kreis</b> parallel zur HE wird im Grundriss als Kreis und im Aufriss als Strecke von der Länge des Durchmessers projiziert. Ist er geneigt, wird er zur Ellipse: Ihre große Achse bleibt gleich dem Durchmesser.</p>`
    },
    {
      type: `text`, title: `5. Körper: Zeichenregeln`,
      html: `<p>Um die Orthogonalprojektionen eines Körpers zu zeichnen, der auf der Ebene steht, geht man so vor:</p>
<ol>
<li>Zeichne den <b>Grundriss</b> (die Grundfläche): Das ist der Umriss von oben gesehen.</li>
<li>Ziehe von jeder Ecke des Grundrisses eine senkrechte <b>Ordnungslinie</b> nach oben.</li>
<li>Trage im Aufriss die <b>Höhen</b> der Ecken ab, ausgehend von der Rissachse, und verbinde die Punkte.</li>
<li>Für den <b>Seitenriss</b> nimmst du waagerechte Ordnungslinien vom Aufriss (gleiche Höhen) und überträgst die Tiefen aus dem Grundriss, indem du sie mit einer 45°-Linie oder mit dem Zirkel umlegst.</li>
<li>Zeichne die <b>sichtbaren Kanten als durchgezogene Linie</b> und die <b>verdeckten Kanten gestrichelt</b> nach; <b>Symmetrieachsen</b> werden mit Strich-Punkt-Linie gezeichnet.</li>
</ol>
<p>Einige typische Ansichten:</p>
<ul>
<li><b>Würfel</b> (Grundfläche aufliegend): Aufriss und Seitenriss sind Quadrate, der Grundriss auch.</li>
<li><b>Gerades Prisma</b>: Aufriss ein Rechteck, Grundriss = Vieleck der Grundfläche.</li>
<li><b>Gerade Pyramide</b> mit quadratischer Grundfläche: Aufriss ein <b>Dreieck</b>, Grundriss ein Quadrat mit den <b>Diagonalen</b> (den Seitenkanten).</li>
<li><b>Zylinder</b> (senkrechte Achse): Aufriss ein Rechteck, Grundriss ein <b>Kreis</b>.</li>
<li><b>Kegel</b> (senkrechte Achse): Aufriss ein gleichschenkliges Dreieck, Grundriss ein Kreis mit Mittelpunkt.</li>
<li><b>Kugel</b>: Alle drei Projektionen sind gleich große <b>Kreise</b>.</li>
</ul>`
    },
    {
      type: `svg`, title: `Grundriss und Aufriss der wichtigsten Körper`,
      caption: `Rotationskörper (Zylinder, Kegel, Kugel) haben mindestens eine kreisförmige Ansicht: Daran erkennt man sie. Die Pyramide zeigt im Grundriss die Diagonalen, also die schrägen Kanten von oben gesehen.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#f8fafc"/><line x1="10" y1="150" x2="590" y2="150" stroke="#dc2626" stroke-width="2"/><text x="14" y="145" font-size="14" fill="#dc2626">Rissachse</text><text x="60" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Würfel</text><rect x="30" y="60" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="30" y="180" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="60" y1="122" x2="60" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="180" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Pyramide</text><polygon points="145,120 215,120 180,50" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="145" y="175" width="70" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="145" y1="175" x2="215" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="215" y1="175" x2="145" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="180" y1="122" x2="180" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Zylinder</text><rect x="270" y="50" width="60" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="300" cy="210" r="30" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="300" y1="122" x2="300" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="420" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Kegel</text><polygon points="385,120 455,120 420,45" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="3" fill="#1e3a8a"/><line x1="420" y1="122" x2="420" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="540" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Kugel</text><circle cx="540" cy="85" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="540" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="540" y1="122" x2="540" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="285" font-size="15" fill="#334155" text-anchor="middle">oben: Aufriss (auf der VE) – unten: Grundriss (auf der HE)</text><text x="300" y="308" font-size="14" fill="#475569" text-anchor="middle">die Projektionen desselben Punktes liegen auf derselben Senkrechten zur Rissachse</text></svg>`
    },
    {
      type: `example`, title: `Beispiel: der Pappbecher`,
      html: `<p>Ein Pappbecher ist ein <b>Kegelstumpf</b> mit der kleineren Grundfläche unten. Sein Aufriss ist ein <b>gleichschenkliges Trapez</b>; der Grundriss besteht aus <b>zwei konzentrischen Kreisen</b> (dem großen Rand oben und dem kleineren Boden). Wer nur den Aufriss betrachtet, könnte an eine Vase oder einen Eimer denken; der kreisförmige Grundriss mit zwei Kreisen verrät, dass es ein Rotationskörper ist. Erst durch das Zusammenführen der Ansichten „rekonstruiert“ man den Gegenstand.</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du, … dass Monge das Verfahren geheim halten musste?`,
      html: `<p>Gaspard Monge erfand die Methode als junger Mann (um 1765), als er an der Militärschule von Mézières als Zeichner arbeitete, um ohne lange Rechnungen zu bestimmen, wo Kanonen aufgestellt werden sollten. Sie galt als <b>militärisches Geheimnis</b> und blieb etwa dreißig Jahre lang vertraulich. Erst nach der Französischen Revolution konnte Monge, inzwischen Minister und Gründer der École polytechnique, sie öffentlich lehren. Er gehörte auch zu den wissenschaftlichen Beratern Napoleons beim Ägyptenfeldzug.</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du, … dass auch Videospiele und 3D-Drucker so denken?`,
      html: `<p>3D-Modellierungsprogramme (Blender, CAD) zeigen standardmäßig vier Ansichten: <b>Top</b> (Grundriss), <b>Front</b> (Aufriss), <b>Right/Left</b> (Seitenriss) und eine 3D-Ansicht. Das sind genau die Projektionen von Monge! 3D-Drucker arbeiten „schichtweise“: Jede Schicht ist der waagerechte Schnitt des Objekts, also ein „Grundriss“ in einer bestimmten Höhe.</p>`
    },
    {
      type: `remember`, title: `Merke dir`,
      html: `<ul>
<li><b>Orthogonale</b> Projektion: Die Strahlen stehen senkrecht zur Ebene.</li>
<li>Drei Ebenen: <b>VE</b> (Aufriss), <b>HE</b> (Grundriss), <b>SE</b> (Seitenriss). Nach dem Umklappen: Grundriss unter dem Aufriss, Seitenriss rechts.</li>
<li>Eine zu einer Ebene <b>parallele</b> Figur erscheint auf dieser Ebene in <b>wahrer Gestalt</b>; <b>senkrecht</b> → Strecke (bei einer Strecke: Punkt).</li>
<li>Sichtbare Kanten <b>durchgezogen</b>, verdeckte Kanten <b>gestrichelt</b>, Achsen mit <b>Strich-Punkt-Linie</b>.</li>
<li>Zylinder, Kegel und Kugel haben eine <b>kreisförmige</b> Ansicht.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Andere Wege zum Verständnis`,
      intro: `Orthogonalprojektionen versteht man am besten, wenn man sie mit Händen und Augen erkundet.`,
      tabs: [
        {
          label: `🔦 Die Schatten`,
          html: `<p>Stelle einen Gegenstand vor eine Wand und beleuchte ihn mit einer sehr weit entfernten Lampe (oder mit der Sonne): Der Schatten ist die Projektion. Steht die Wand senkrecht zu den Strahlen, ist der Schatten <b>orthogonal</b>. Probiere es mit einer Müslipackung: Von einer Seite ist der Schatten ein breites Rechteck, von der anderen ein schmales, von oben ein wieder anderes. Jeder davon ist eine Ansicht.</p>`
        },
        {
          label: `🧊 Der Glaswürfel`,
          html: `<p>Stell dir den Gegenstand in einer durchsichtigen Glasschachtel vor: Wenn du von der Vorderseite, von oben und von der Seite hineinschaust, siehst du die drei Ansichten auf das Glas „gezeichnet“. Öffnest du die Schachtel wie einen Pappkarton (also durch <b>Umklappen</b> der Flächen in eine Ebene), hast du genau die drei Ansichten so angeordnet wie auf dem Zeichenblatt.</p>`,
          scene: `solid`,
          options: { shape: `cube`, color: `#60a5fa`, labels: true, shapes: [`cube`, `box`, `pyramid`, `cone`] }
        },
        {
          label: `🇺🇸 Europäische und amerikanische Methode`,
          html: `<p>Auf der Welt gibt es zwei Konventionen:</p>
<ul>
<li><b>Europäische Methode</b> (Projektionsmethode 1, die wir in Europa verwenden): Der Gegenstand liegt <b>zwischen Betrachter und Ebene</b>: Der Grundriss kommt unter den Aufriss, der Seitenriss (Ansicht von links) nach rechts.</li>
<li><b>Amerikanische Methode</b> (Projektionsmethode 3): Die Ebene liegt zwischen Betrachter und Gegenstand wie eine durchsichtige Glasscheibe: Der Grundriss kommt <b>über</b> den Aufriss und der Seitenriss (Ansicht von links) nach links.</li>
</ul>
<p>In den internationalen Normen (ISO) zeigt ein kleines Symbol mit einem abgeschnittenen Kegel, welche Methode in der Zeichnung verwendet wurde.</p>`
        },
        {
          label: `🏷️ Ansichten erkennen`,
          html: `<p>Ordne jedem Körper seine Ansicht von oben zu.</p>`,
          widget: `match`,
          options: { pairs: [[`Würfel`, `Quadrat`], [`Zylinder`, `Kreis`], [`Pyramide mit quadratischer Grundfläche`, `Quadrat mit Diagonalen`], [`Kegel`, `Kreis mit Mittelpunkt`], [`Kugel`, `Kreis`]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Übersicht: die Orthogonalprojektionen`,
      nodes: [
        { id: `rapp`, label: `3D auf einem Blatt darstellen`, x: 50, y: 6, color: `#64748b`, html: `Wie man einen dreidimensionalen Gegenstand in ebene Zeichnungen überführt, ohne die Maße zu verlieren.`, why: `Eine ebene Zeichnung verliert immer eine Dimension. Man gewinnt sie zurück, indem man mehrere Ansichten auf verschiedenen Ebenen kombiniert.` },
        { id: `proj`, label: `Orthogonalprojektion`, x: 20, y: 30, color: `#0ea5e9`, html: `Strahlen senkrecht zur Ebene.`, why: `Steht der Strahl senkrecht, behält eine zur Ebene parallele Strecke ihre Länge: Deshalb bewahrt das Verfahren die Maße.` },
        { id: `piani`, label: `Drei Ebenen VE, HE, SE`, x: 52, y: 30, color: `#f59e0b`, html: `Wand vorn, Boden, Wand seitlich.`, why: `Zwei senkrechte Ebenen genügen, um einen Punkt festzulegen: x, y, z sind die kartesischen Koordinaten von Descartes (1637), auf die Ansichten angewandt.` },
        { id: `rib`, label: `Umklappen`, x: 82, y: 30, color: `#a855f7`, html: `Die Ebenen drehen, bis alles auf dem Blatt ausgebreitet ist.`, why: `Die geniale Idee von <b>Monge</b> (um 1765, veröffentlicht 1795–1799): einen dreidimensionalen Raum durch eine Drehung um 90° eben zu machen.` },
        { id: `vera`, label: `Wahre Größe`, x: 22, y: 62, color: `#22c55e`, html: `Eine zur Ebene parallele Strecke oder Figur wird nicht verzerrt.`, why: `Eine Projektion multipliziert die Längen mit dem Kosinus des Winkels zur Ebene: Ist der Winkel 0, ist der Kosinus 1.` },
        { id: `solidi`, label: `Die Körper`, x: 52, y: 62, color: `#ef4444`, html: `Grundriss + Aufriss (+ Seitenriss) legen einen Körper fest.`, why: `Jede Ansicht liefert zwei Abmessungen; mit zwei oder drei Ansichten erhält man alle drei. Verdeckte Kanten werden gestrichelt, um das Innere lesbar zu machen.` },
        { id: `norma`, label: `Normen und Konventionen`, x: 82, y: 62, color: `#14b8a6`, html: `Durchgezogene, gestrichelte, Strich-Punkt-Linien; europäische und amerikanische Methode.`, why: `Damit jemand, der in Turin zeichnet, und jemand, der in Tokio liest, dieselbe Zeichnung verstehen, braucht es gemeinsame Regeln: Normen wie DIN und ISO.` },
        { id: `uso`, label: `Anwendungen`, x: 50, y: 90, color: `#0ea5e9`, html: `Maschinenbau, Architektur, CAD, 3D-Druck.`, why: `Jedes in Serie gefertigte Teil wird durch eine bemaßte Zeichnung in Orthogonalprojektionen definiert.` }
      ],
      edges: [
        [`rapp`, `proj`, `Verfahren`], [`rapp`, `piani`, `nutzt`], [`piani`, `rib`, `ergibt`], [`proj`, `vera`, `wenn parallel`],
        [`rib`, `solidi`, `für`], [`piani`, `solidi`, `zeichnet`], [`solidi`, `norma`, `beachtet`], [`solidi`, `uso`, `für`]
      ]
    },
    {
      type: `quiz`, title: `Mini-Quiz: Strecken und Körper`,
      questions: [
        { type: `mc`, q: `Eine Strecke senkrecht zur Horizontalebene erscheint im Grundriss als …`, options: [`Strecke in wahrer Größe`, `Punkt`, `Strecke, auf die Hälfte verkürzt`], answer: 1, explain: `Der Projektionsstrahl fällt mit der Strecke zusammen: Die Projektion schrumpft zu einem Punkt.` },
        { type: `mc`, q: `Der Grundriss eines Kegels mit senkrechter Achse ist …`, options: [`ein Dreieck`, `ein Kreis mit Mittelpunkt`, `ein Rechteck`], answer: 1, explain: `Die kreisförmige Grundfläche und die Spitze, die in den Mittelpunkt projiziert wird.` },
        { type: `tf`, q: `Der Aufriss einer Kugel ist ein Kreis.`, answer: true, explain: `Bei der Kugel sind alle drei Projektionen kreisförmig, mit dem Radius der Kugel.` },
        { type: `num`, q: `Ein Würfel mit 5 cm Kantenlänge liegt auf einer Fläche. Wie groß ist der Flächeninhalt des Quadrats im Aufriss?`, answer: 25, tol: 0, unit: `cm²`, explain: `Der Aufriss ist ein Quadrat in wahrer Gestalt mit 5 cm Seitenlänge: 5 × 5 = 25 cm².` }
      ]
    }
  ],
  glossary: [
    { t: `Orthogonalprojektion`, d: `Projektion mit Strahlen, die senkrecht zur Projektionsebene stehen.` },
    { t: `Grundriss`, d: `Ansicht von oben: Projektion auf die Horizontalebene (HE).` },
    { t: `Aufriss`, d: `Vorderansicht: Projektion auf die Vertikalebene (VE).` },
    { t: `Seitenriss`, d: `Seitenansicht: Projektion auf die Seitenebene (SE).` },
    { t: `Rissachse`, d: `Schnittgerade von Vertikalebene und Horizontalebene.` },
    { t: `Umklappen`, d: `Drehung der Ebenen um 90°, um alle Ansichten auf dem Blatt auszubreiten.` },
    { t: `Wahre Größe`, d: `Projektion einer Strecke oder Figur, die deren tatsächliche Abmessungen beibehält.` },
    { t: `Ordnungslinie`, d: `Dünne Linie, die die Projektionen desselben Punktes einander zuordnet.` },
    { t: `Mongesches Verfahren`, d: `Darstellungsverfahren mit umgeklappten, zueinander senkrechten Ebenen, von Gaspard Monge entwickelt.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Wer hat das Verfahren der Orthogonalprojektionen (darstellende Geometrie) ausgearbeitet?`, options: [`Gaspard Monge`, `Filippo Brunelleschi`, `Euklid`], answer: 0, explain: `Monge, ein französischer Mathematiker, veröffentlichte die Géométrie descriptive (1795–1799).` },
      { type: `mc`, q: `Der Aufriss wird projiziert auf die …`, options: [`Horizontalebene`, `Vertikalebene`, `Seitenebene`], answer: 1, explain: `Der Aufriss ist die Vorderansicht: VE.` },
      { type: `tf`, q: `Eine zur Projektionsebene parallele Strecke wird in wahrer Größe projiziert.`, answer: true, explain: `Die Strecke und ihre Projektion sind gegenüberliegende Seiten eines Rechtecks.` },
      { type: `num`, q: `Eine senkrechte Strecke von 8 cm: Wie lang ist ihre Projektion auf die Horizontalebene (in cm)?`, answer: 0, tol: 0, unit: `cm`, explain: `Sie ist ein Punkt: Länge null.` },
      { type: `mc`, q: `Wie zeichnet man verdeckte Kanten?`, options: [`Dicke durchgezogene Linie`, `Gestrichelte Linie`, `Man zeichnet sie nie`], answer: 1, explain: `Konvention des technischen Zeichnens: gestrichelte Linie.` },
      { type: `mc`, q: `Ein Zylinder mit senkrechter Achse hat als Grundriss …`, options: [`ein Rechteck`, `einen Kreis`, `ein Dreieck`], answer: 1, explain: `Von oben sieht man die kreisförmige Grundfläche.` },
      { type: `order`, q: `Bringe die Schritte zum Zeichnen von Grundriss und Aufriss einer Pyramide in die richtige Reihenfolge.`, items: [`Zeichne den Grundriss der Grundfläche`, `Ziehe die senkrechten Ordnungslinien`, `Trage die Höhen im Aufriss ab`, `Verbinde die Punkte und zeichne nach`], explain: `Aus dem Grundriss ergeben sich die waagerechten Lagen, dann werden die Höhen übertragen.` },
      { type: `tf`, q: `Der Aufriss einer geraden Pyramide mit quadratischer Grundfläche ist, von vorn gesehen, ein Dreieck.`, answer: true, explain: `Man sieht die Grundfläche als Strecke und die Seitenflächen als Dreieck.` },
      { type: `text`, q: `Wie heißt die Schnittgerade von Vertikalebene und Horizontalebene?`, answer: [`Rissachse`, `die Rissachse`, `Projektionsachse`, `die Projektionsachse`, `Standlinie`, `Grundlinie`], explain: `Rissachse: Nach dem Umklappen trennt sie Aufriss und Grundriss.` },
      { type: `mc`, q: `Welcher Körper hat drei gleiche Projektionen, die alle Kreise sind?`, options: [`Kugel`, `Kegel`, `Zylinder`], answer: 0, explain: `Die Kugel ist in jeder Richtung symmetrisch.` }
    ]
  }
});
