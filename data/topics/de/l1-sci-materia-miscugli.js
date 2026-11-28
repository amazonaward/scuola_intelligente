TOPIC('de', {
  id: "l1-sci-materia-miscugli",
  title: "Materie: Reinstoffe und Gemische",
  intro: "Alles, was uns umgibt, von der Luft, die du atmest, bis zum Bildschirm, auf den du schaust, ist <b>Materie</b>: Sie hat eine Masse und nimmt Raum ein. Aber Materie ist nicht alles gleich: Leitungswasser, das Gold eines Rings und der Sand am Strand sind sehr verschiedene Dinge. In dieser Lektion lernen wir, sie einzuteilen (<b>Aggregatzustände</b>, <b>Reinstoffe</b> und <b>Gemische</b>) und das zu trennen, was die Natur vermischt hat, wie es jeden Tag ein Chemielabor tut.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Was ist Materie?",
      html: `<p><b>Materie</b> ist alles, was eine <b>Masse</b> hat und ein <b>Volumen</b> einnimmt. Die Luft, die wir nicht sehen, ist Materie: Ein aufgepumpter Ball wiegt mehr als ein leerer.</p>
<p>Die physikalischen Größen eines Körpers teilen sich in zwei Familien:</p>
<ul>
<li><b>extensive Eigenschaften</b>: Sie hängen von der Stoffmenge ab (Masse, Volumen);</li>
<li><b>intensive Eigenschaften</b>: Sie hängen nicht von der Menge ab, sondern kennzeichnen den Stoff (Dichte, Schmelztemperatur, Siedetemperatur, Farbe).</li>
</ul>
<p>Eine sehr häufig verwendete intensive Eigenschaft ist die <b>Dichte</b>: ρ = m / V. Man misst sie in g/cm³ (oder kg/m³). Wasser hat bei 4 °C die Dichte 1,00 g/cm³; Eisen etwa 7,9 g/cm³; Gold etwa 19,3 g/cm³. Bestehen zwei Gegenstände aus demselben Material, haben sie dieselbe Dichte, auch wenn der eine groß und der andere klein ist.</p>
<p>Denk an den Unterschied zwischen <b>Masse</b> (Stoffmenge, in kg, überall gleich) und <b>Gewichtskraft</b> (Kraft, mit der die Schwerkraft den Körper anzieht, in Newton: auf dem Mond etwa 1/6 des Werts auf der Erde).</p>`
    },
    {
      type: "example",
      title: "Schwimmt es oder sinkt es? Die Dichteberechnung",
      html: `<p>Ein Würfelchen aus unbekanntem Material hat die Masse <b>54 g</b> und das Volumen <b>20 cm³</b>. Wie groß ist die Dichte? Schwimmt es im Wasser?</p>
<ol>
<li>ρ = m / V = 54 g / 20 cm³ = <b>2,7 g/cm³</b> (das ist die Dichte von Aluminium).</li>
<li>Wasser hat die Dichte 1 g/cm³: Ein Körper mit größerer Dichte <b>sinkt</b>, einer mit kleinerer <b>schwimmt</b>.</li>
<li>2,7 &gt; 1: Das Würfelchen sinkt.</li>
</ol>
<p>Ein Eisenschiff schwimmt, weil es hohl ist: Seine <i>mittlere</i> Dichte (Stahl + Luft im Inneren) ist kleiner als die des Wassers.</p>`
    },
    {
      type: "text",
      title: "Die drei Aggregatzustände",
      html: `<p>Je nach Temperatur und Druck kann derselbe Stoff in drei Hauptzuständen auftreten. Um sie zu unterscheiden, betrachten wir <b>Form</b> und <b>Volumen</b> und auf mikroskopischer Ebene, wie sich die Teilchen (Atome, Moleküle oder Ionen) bewegen.</p>
<table>
<tr><th>Zustand</th><th>Form</th><th>Volumen</th><th>Teilchen</th></tr>
<tr><td><b>Fest</b></td><td>eigene</td><td>eigenes</td><td>dicht beieinander, an festen Plätzen (sie schwingen nur); in kristallinen Festkörpern geordnet</td></tr>
<tr><td><b>Flüssig</b></td><td>die des Gefäßes</td><td>eigenes</td><td>nah beieinander, aber gegeneinander verschiebbar</td></tr>
<tr><td><b>Gasförmig</b> (Gas oder Dampf)</td><td>die des Gefäßes</td><td>das des Gefäßes</td><td>weit voneinander entfernt, in schneller, ungeordneter Bewegung</td></tr>
</table>
<p>Das <b>kinetische Teilchenmodell</b> erklärt alles mit zwei Ideen: Die Teilchen sind immer in Bewegung, und ihre <b>mittlere kinetische Energie</b> wächst mit der Temperatur. Ein Gas ist komprimierbar, weil zwischen den Teilchen fast nur leerer Raum ist; eine Flüssigkeit nicht, weil sie sich schon berühren.</p>`
    },
    {
      type: "svg",
      title: "Die Teilchen in den drei Zuständen",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<rect x="15" y="40" width="190" height="190" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="225" y="40" width="190" height="190" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<rect x="435" y="40" width="190" height="190" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<g fill="#0369a1">
<circle cx="45" cy="70" r="12"/><circle cx="75" cy="70" r="12"/><circle cx="105" cy="70" r="12"/><circle cx="135" cy="70" r="12"/><circle cx="165" cy="70" r="12"/>
<circle cx="45" cy="100" r="12"/><circle cx="75" cy="100" r="12"/><circle cx="105" cy="100" r="12"/><circle cx="135" cy="100" r="12"/><circle cx="165" cy="100" r="12"/>
<circle cx="45" cy="130" r="12"/><circle cx="75" cy="130" r="12"/><circle cx="105" cy="130" r="12"/><circle cx="135" cy="130" r="12"/><circle cx="165" cy="130" r="12"/>
<circle cx="45" cy="160" r="12"/><circle cx="75" cy="160" r="12"/><circle cx="105" cy="160" r="12"/><circle cx="135" cy="160" r="12"/><circle cx="165" cy="160" r="12"/>
<circle cx="45" cy="190" r="12"/><circle cx="75" cy="190" r="12"/><circle cx="105" cy="190" r="12"/><circle cx="135" cy="190" r="12"/><circle cx="165" cy="190" r="12"/>
</g>
<g fill="#15803d">
<circle cx="250" cy="170" r="12"/><circle cx="276" cy="196" r="12"/><circle cx="302" cy="170" r="12"/><circle cx="330" cy="200" r="12"/><circle cx="358" cy="178" r="12"/><circle cx="386" cy="200" r="12"/>
<circle cx="262" cy="144" r="12"/><circle cx="292" cy="120" r="12"/><circle cx="330" cy="150" r="12"/><circle cx="364" cy="128" r="12"/><circle cx="392" cy="152" r="12"/><circle cx="318" cy="118" r="12"/>
</g>
<g fill="#b45309">
<circle cx="470" cy="75" r="12"/><circle cx="560" cy="62" r="12"/><circle cx="600" cy="120" r="12"/><circle cx="520" cy="130" r="12"/><circle cx="465" cy="180" r="12"/><circle cx="585" cy="195" r="12"/><circle cx="530" cy="205" r="12"/>
</g>
<g stroke="#b45309" stroke-width="2"><line x1="470" y1="75" x2="500" y2="95"/><line x1="560" y1="62" x2="535" y2="45"/><line x1="585" y1="195" x2="560" y2="215"/></g>
<text x="110" y="30" font-size="20" text-anchor="middle" fill="#0c4a6e" font-weight="bold">FEST</text>
<text x="320" y="30" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">FLÜSSIG</text>
<text x="530" y="30" font-size="20" text-anchor="middle" fill="#78350f" font-weight="bold">GASFÖRMIG</text>
<text x="110" y="256" font-size="15" text-anchor="middle" fill="#1f2937">geordnet und dicht</text>
<text x="320" y="256" font-size="15" text-anchor="middle" fill="#1f2937">dicht, aber ungeordnet</text>
<text x="530" y="256" font-size="15" text-anchor="middle" fill="#1f2937">weit auseinander und schnell</text>
<text x="320" y="287" font-size="15" text-anchor="middle" fill="#334155">Die Linien zeigen die Bewegung der Gasteilchen</text>
</svg>`,
      caption: "Derselbe Stoff, drei Anordnungen der Teilchen: Es ändern sich die Abstände und die Bewegungsfreiheit."
    },
    {
      type: "curiosity",
      title: "Der vierte Zustand: das Plasma",
      html: `<p>Über 99 % der sichtbaren Materie des Universums sind weder fest noch flüssig noch gasförmig: Sie sind <b>Plasma</b>, ein Gas, das so heiß ist, dass die Atome ihre Elektronen verlieren und zu frei beweglichen Ionen werden. Plasma sind die Sonne und die Sterne, Blitze, Polarlichter und Neonröhren. Es gibt auch einen fünften Zustand, das <b>Bose-Einstein-Kondensat</b>, das 1995 beobachtet wurde, als man Atome auf wenige Milliardstel Grad über dem absoluten Nullpunkt abkühlte.</p>`
    },
    {
      type: "text",
      title: "Reinstoffe und Gemische",
      html: `<p>Ein <b>Reinstoff</b> hat eine bestimmte Zusammensetzung und konstante intensive Eigenschaften (zum Beispiel eine genaue Siedetemperatur). Er kann sein:</p>
<ul>
<li><b>Element</b>: aus nur einer Atomsorte aufgebaut (Sauerstoff O₂, Eisen Fe, Gold Au);</li>
<li><b>Verbindung</b>: aus Atomen verschiedener Elemente in festem Verhältnis aufgebaut (Wasser H₂O, Kochsalz NaCl); sie lässt sich nur durch chemische Reaktionen zerlegen.</li>
</ul>
<p>Ein <b>Gemisch</b> besteht aus zwei oder mehr Stoffen (den <b>Bestandteilen</b>), die vermischt sind, ohne zu reagieren, in <b>veränderlichen</b> Anteilen. Jeder Bestandteil behält seine Eigenschaften und lässt sich mit <b>physikalischen</b> Methoden trennen.</p>
<ul>
<li><b>Homogen</b> (<b>Lösung</b>): hat nur eine Phase, einheitliches Aussehen auch unter dem Lichtmikroskop. Beispiele: Salzwasser, Luft, Bronze (Legierung aus Kupfer und Zinn), Essig.</li>
<li><b>Heterogen</b>: hat zwei oder mehr unterscheidbare Phasen. Beispiele: Wasser und Sand (Suspension), Öl und Wasser (Emulsion, wenn man schüttelt), Granit, Nebel (Flüssigkeit in Gas), Rauch (Feststoff in Gas).</li>
</ul>
<p>Eine <b>Phase</b> ist ein Materiebereich mit einheitlichen Eigenschaften. Wasser mit drei Eiswürfeln ist ein System aus <b>zwei Phasen</b>, obwohl es nur ein Stoff ist: Vorsicht, Phase und Stoff sind nicht dasselbe.</p>`
    },
    {
      type: "widget",
      title: "Ordne die Materie ein",
      widget: "classify",
      options: { groups: ["Reinstoff", "Homogenes Gemisch", "Heterogenes Gemisch"], items: [
        ["Gold, 24 Karat", 0],
        ["Destilliertes Wasser", 0],
        ["Saubere Luft", 1],
        ["Wasser mit gelöstem Zucker", 1],
        ["Wasser und Sand", 2],
        ["Granit", 2],
        ["Sauerstoff", 0],
        ["Bronze", 1],
        ["Milch", 2],
        ["Öl und Wasser", 2]
      ] },
      caption: "Milch sieht einheitlich aus, aber unter dem Mikroskop erkennt man in Wasser schwebende Fetttröpfchen: Sie ist eine Emulsion, also heterogen."
    },
    {
      type: "remember",
      title: "Reinstoff oder Gemisch? Ein praktischer Test",
      html: `<p>Ein Reinstoff behält bei einer Zustandsänderung die <b>Temperatur konstant</b> (reines Wasser siedet auf Meereshöhe bei 100 °C und bleibt bei 100 °C, solange Flüssigkeit da ist). Ein Gemisch ändert seine Temperatur während der Zustandsänderung: Salzwasser beginnt knapp über 100 °C zu sieden, und die Temperatur steigt, während das Wasser verdampft und die Lösung sich konzentriert. Das ist der Unterschied, der es möglich macht, sie im Labor zu erkennen.</p>`
    },
    {
      type: "text",
      title: "Lösungen und die Konzentration",
      html: `<p>In einer <b>Lösung</b> ist der Bestandteil in geringerer Menge der <b>gelöste Stoff</b>, der in größerer Menge das <b>Lösungsmittel</b>. Das wichtigste Lösungsmittel ist Wasser.</p>
<p>Die <b>Konzentration</b> gibt an, wie viel gelöster Stoff enthalten ist. Die gebräuchlichsten Angaben:</p>
<ul>
<li><b>Massenprozent</b> (% m/m) = (Masse des gelösten Stoffs / Masse der Lösung) × 100;</li>
<li><b>Volumenprozent</b> (% V/V), verwendet für Alkohol in Getränken;</li>
<li><b>Masse pro Volumen</b> (g/L).</li>
</ul>
<p>Bei einer bestimmten Temperatur kann das Lösungsmittel nur eine Höchstmenge an gelöstem Stoff aufnehmen: die <b>Löslichkeit</b>. Jenseits dieser Grenze ist die Lösung <b>gesättigt</b>, und der überschüssige Stoff bleibt am Boden. Im Allgemeinen wächst die Löslichkeit von Feststoffen mit der Temperatur; die von <b>Gasen</b> nimmt ab (deshalb verliert ein warmes Getränk sofort sein Kohlenstoffdioxid).</p>`
    },
    {
      type: "example",
      title: "Wie viel Salz ist enthalten?",
      html: `<p>Du löst <b>30 g</b> Salz in <b>220 g</b> Wasser. Wie groß ist der Massenprozentgehalt?</p>
<ol>
<li>Masse der Lösung: 30 + 220 = 250 g.</li>
<li>% m/m = 30 / 250 × 100 = <b>12 %</b>.</li>
</ol>
<p>Zum Vergleich: Meerwasser hat im Mittel etwa <b>3,5 %</b> gelöste Salze (also etwa 35 g pro kg), das Tote Meer über 30 %: Deshalb schwimmt man dort leicht, weil die Dichte des Wassers stark erhöht ist.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: einteilen und rechnen",
      questions: [
        { type: "mc", q: "Welcher dieser Stoffe ist ein Reinstoff?", options: ["Meerwasser", "Destilliertes Wasser", "Luft", "Milch"], answer: 1, explain: "Destilliertes Wasser besteht nur aus H₂O. Die anderen sind Gemische." },
        { type: "num", q: "Ein Gegenstand hat die Masse 120 g und das Volumen 15 cm³. Wie groß ist seine Dichte?", answer: 8, unit: "g/cm³", explain: "ρ = m/V = 120/15 = 8 g/cm³." },
        { type: "tf", q: "In einem Gemisch verlieren die Bestandteile ihre Eigenschaften.", answer: false, explain: "In Gemischen behalten die Bestandteile ihre Eigenschaften: Man kann sie mit physikalischen Methoden trennen." }
      ]
    },
    {
      type: "text",
      title: "Wie man Gemische trennt",
      html: `<p>Da die Stoffe in Gemischen nicht reagiert haben, trennt man sie mit <b>physikalischen Methoden</b>, die einen Unterschied in den Eigenschaften nutzen. Die Methode wählt man je nach Art des Gemischs.</p>
<table>
<tr><th>Methode</th><th>Gemisch</th><th>Genutzte Eigenschaft</th></tr>
<tr><td><b>Filtrieren</b></td><td>unlöslicher Feststoff + Flüssigkeit (Wasser und Sand)</td><td>Teilchengröße</td></tr>
<tr><td><b>Dekantieren</b></td><td>Feststoff + Flüssigkeit oder zwei nicht mischbare Flüssigkeiten (Öl und Wasser, mit dem Scheidetrichter)</td><td>Dichte</td></tr>
<tr><td><b>Zentrifugieren</b></td><td>feine Suspensionen (Blut: Plasma und Blutkörperchen)</td><td>Dichte, durch die Drehung verstärkt</td></tr>
<tr><td><b>Sieben</b></td><td>Feststoffe unterschiedlicher Korngröße (Sand und Kies)</td><td>Größe</td></tr>
<tr><td><b>Magnetische Trennung</b></td><td>Eisen + andere Feststoffe</td><td>Magnetismus</td></tr>
<tr><td><b>Eindampfen</b></td><td>fester gelöster Stoff + Lösungsmittel (Salz und Wasser)</td><td>Flüchtigkeit</td></tr>
<tr><td><b>Destillieren</b></td><td>mischbare Flüssigkeiten oder Lösungen (Wasser und Alkohol)</td><td>Siedetemperatur</td></tr>
<tr><td><b>Chromatografie</b></td><td>Gemische aus Farbstoffen oder komplexen Stoffen</td><td>unterschiedliche Affinität zu einer festen und einer beweglichen Phase</td></tr>
<tr><td><b>Extraktion mit Lösungsmittel</b></td><td>in einem Lösungsmittel gelöster Stoff</td><td>Löslichkeit in einem anderen Lösungsmittel</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Ordne die Methode dem Gemisch zu",
      widget: "match",
      options: { pairs: [
        ["Wasser und Sand", "Filtrieren"],
        ["Öl und Wasser", "Dekantieren (Scheidetrichter)"],
        ["In Wasser gelöstes Salz", "Eindampfen"],
        ["Wasser und Ethanol", "Destillieren"],
        ["Eisenfeilspäne und Schwefel", "Magnet"],
        ["Farbpigmente einer Tinte", "Chromatografie"],
        ["Plasma und Blutkörperchen", "Zentrifugieren"]
      ] },
      caption: "Finde für jedes Gemisch die Eigenschaft, die es trennbar macht."
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Destillation zu verstehen",
      intro: "Die Destillation beruht auf einem Unterschied der Siedetemperaturen. Wenn sie dir nicht klar ist, versuche es mit diesen Bildern.",
      tabs: [
        {
          label: "🔬 Das Schema der Apparatur",
          html: `<p>Man erhitzt das Gemisch im Kolben: Der Bestandteil mit dem niedrigeren Siedepunkt (zum Beispiel Ethanol, 78 °C, gegenüber Wasser, 100 °C) verdampft zuerst. Der Dampf steigt auf, geht durch den <b>Kühler</b> (ein Rohr, das von außen von fließendem kaltem Wasser gekühlt wird) und <b>kondensiert</b>: Die reine Flüssigkeit tropft in das Auffanggefäß, das sogenannte <b>Destillat</b>.</p>`,
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<circle cx="110" cy="190" r="60" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<path d="M56 205 A60 60 0 0 0 164 205 Z" fill="#7dd3fc"/>
<rect x="100" y="95" width="20" height="45" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<rect x="60" y="255" width="100" height="20" rx="4" fill="#f59e0b"/>
<text x="110" y="270" font-size="14" text-anchor="middle" fill="#1f2937">Brenner</text>
<line x1="110" y1="95" x2="250" y2="95" stroke="#334155" stroke-width="3"/>
<line x1="250" y1="95" x2="470" y2="160" stroke="#334155" stroke-width="3"/>
<rect x="300" y="100" width="130" height="38" transform="rotate(16 365 119)" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="365" y="75" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">Kühler</text>
<path d="M470 160 L470 215" stroke="#334155" stroke-width="3"/>
<path d="M440 220 L500 220 L492 280 L448 280 Z" fill="#dcfce7" stroke="#334155" stroke-width="3"/>
<text x="470" y="298" font-size="14" text-anchor="middle" fill="#14532d">Destillat</text>
<text x="110" y="75" font-size="14" text-anchor="middle" fill="#7c2d12">Dampf steigt auf</text>
<text x="560" y="150" font-size="14" text-anchor="middle" fill="#0369a1">kaltes Wasser</text>
</svg>`
        },
        {
          label: "☕ Die Analogie mit dem Espressokocher",
          html: `<p>Im Espressokocher erhitzt du Wasser: Der Dampf drückt die Flüssigkeit durch den Filter nach oben. Auch im Destillierapparat überträgt die Wärme einen Stoff aus der Flüssigkeit in den Dampf, aber hier <b>kühlt der Dampf danach ab und wird wieder flüssig</b>: Du siehst es jedes Mal, wenn der Dampf eines Topfes am Deckel kondensiert und heruntertropft. Destillieren ist genau das, nur kontrolliert durchgeführt.</p>`
        },
        {
          label: "🧪 Ein Wettlauf",
          html: `<p>Stell dir zwei Läufer vor: Ethanol wird am schnellsten zu Dampf, Wasser ist langsamer. Wenn du vorsichtig erhitzt und den Lauf im richtigen Moment stoppst, kommen im Auffanggefäß fast nur die Schnellen an. Da die Trennung im ersten Anlauf nie perfekt ist, verwendet man in der Industrie die <b>fraktionierte Destillation</b> (Kolonnen mit vielen „Böden“), was dem vielfachen Wiederholen des Wettlaufs entspricht: So gewinnt man aus Erdöl Benzin, Diesel, Kerosin und andere Produkte.</p>`
        }
      ]
    },
    {
      type: "example",
      title: "Aufgabe: Sand, Salz und Eisenfeilspäne trennen",
      html: `<p>Du hast ein Gemisch aus <b>Sand, Salz und Eisenfeilspänen</b>. Wie gewinnst du die drei reinen Bestandteile?</p>
<ol>
<li><b>Magnet</b>: Er zieht die Eisenfeilspäne an, die man trocken entfernt.</li>
<li><b>Wasser</b>: Man gibt Wasser zu und rührt um; das Salz löst sich, der Sand nicht.</li>
<li><b>Filtrieren</b>: Der Sand bleibt im Filter (und wird getrocknet).</li>
<li><b>Eindampfen</b> des Filtrats: Das Wasser verschwindet, das Salz kristallisiert.</li>
</ol>
<p>Die Reihenfolge zählt: Würdest du das Wasser vor dem Magneten zugeben, könnte das Eisen rosten. Einen „Trennplan“ zu durchdenken ist eine typische Überlegung der analytischen Chemie.</p>`
    },
    {
      type: "curiosity",
      title: "Salinen und Chromatografie",
      html: `<p>Kochsalz gewinnt man noch heute in vielen italienischen Salinen wie Trapani oder Cervia durch <b>Verdunstung</b> von Meerwasser in flachen Becken, die von Sonne und Wind erwärmt werden. Zur Chromatografie: Der Name bedeutet „Schreiben mit Farben“; der russische Botaniker <b>Michail Tswett</b> setzte sie um 1900 ein, um die Pigmente von Blättern zu trennen. Heute ist sie das Werkzeug, mit dem man nach Doping, Arzneimitteln und Schadstoffen sucht. Du kannst sie zu Hause ausprobieren: Ein Streifen Filterpapier, ein Punkt aus schwarzem, auswaschbarem Filzstift und etwas Wasser, das durch Kapillarkraft aufsteigt, trennen die gemischten Farben.</p>`
    },
    {
      type: "conceptMap",
      title: "Begriffslandkarte der Materie: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "materia", label: "Materie", x: 50, y: 6, color: "#a855f7", html: "Alles, was Masse und Volumen hat.", why: "Die Definition geht auf die griechischen Philosophen zurück: <b>Demokrit</b> (5. Jh. v. Chr.) stellte sich die Materie aus unteilbaren Atomen vor, <b>Aristoteles</b> aus vier kontinuierlichen Elementen. Erst 1800 machte die Atomtheorie von <b>Dalton</b> sie wissenschaftlich." },
        { id: "stati", label: "Aggregatzustände", x: 18, y: 28, color: "#3b82f6", html: "Fest, flüssig, gasförmig.", why: "Sie werden durch das <b>kinetische Teilchenmodell</b> erklärt, das im 19. Jahrhundert von Clausius, Maxwell und Boltzmann entwickelt wurde: Mit der Temperatur ändern sich die Bewegungsenergie der Teilchen und die Stärke der Kräfte, die sie zusammenhalten." },
        { id: "pura", label: "Reinstoffe", x: 50, y: 32, color: "#22c55e", html: "Elemente und Verbindungen mit bestimmter Zusammensetzung.", why: "Der Begriff der bestimmten Zusammensetzung geht auf das <b>Gesetz von Proust</b> (1799) zurück: Eine Verbindung enthält immer dieselben Elemente in denselben Massenverhältnissen." },
        { id: "miscugli", label: "Gemische", x: 82, y: 28, color: "#f97316", html: "Mehrere vermischte Stoffe, veränderliche Anteile.", why: "Würden die Stoffe nicht miteinander reagieren und wären die Anteile fest, hätten wir keine Gemische, sondern Verbindungen: Deshalb unterscheiden sich Gemische dadurch, dass man die Mengen verändern und die Bestandteile mit physikalischen Methoden trennen kann." },
        { id: "omo", label: "Homogen (Lösungen)", x: 68, y: 56, color: "#0ea5e9", html: "Nur eine Phase: Luft, Bronze, Salzwasser.", why: "Die Teilchen des gelösten Stoffs sind auf der Ebene einzelner Moleküle oder Ionen verteilt, zu klein, um gesehen oder von einem Filter zurückgehalten zu werden: Deshalb braucht man Destillation oder Eindampfen." },
        { id: "etero", label: "Heterogen", x: 92, y: 56, color: "#ef4444", html: "Mehrere sichtbare Phasen: Wasser und Sand, Granit.", why: "Die verteilten Teilchen sind groß oder zusammengeballt, also dichter oder größer als das Medium: Sie lassen sich durch Dekantieren, Filtrieren oder Sieben trennen." },
        { id: "metodi", label: "Trennverfahren", x: 76, y: 82, color: "#14b8a6", html: "Filtrieren, Destillieren, Chromatografie …", why: "Jedes Verfahren nutzt eine andere <b>intensive</b> Eigenschaft der Bestandteile (Dichte, Siedetemperatur, Löslichkeit, Größe): Deshalb hängt die Wahl vom Gemisch ab." },
        { id: "densita", label: "Dichte", x: 28, y: 62, color: "#eab308", html: "ρ = m/V, intensive Eigenschaft.", why: "Man sagt, <b>Archimedes</b> (3. Jh. v. Chr.) habe das Prinzip des hydrostatischen Auftriebs gerade bei der Suche nach einer Möglichkeit entdeckt, zu prüfen, ob die Krone des Hieron aus reinem Gold sei, indem er die Dichte verglich, ohne den Gegenstand zu beschädigen." }
      ],
      edges: [
        ["materia", "stati", "tritt auf in"],
        ["materia", "pura", "wird eingeteilt in"],
        ["materia", "miscugli", "wird eingeteilt in"],
        ["miscugli", "omo", "kann sein"],
        ["miscugli", "etero", "kann sein"],
        ["omo", "metodi", "wird getrennt durch"],
        ["etero", "metodi", "wird getrennt durch"],
        ["pura", "densita", "hat eine eigene"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Trennungen",
      questions: [
        { type: "mc", q: "Um Öl und Wasser zu trennen, verwendet man …", options: ["die Destillation", "den Scheidetrichter (Dekantieren)", "den Magneten"], answer: 1, explain: "Die beiden Flüssigkeiten mischen sich nicht und haben verschiedene Dichte: Das weniger dichte Öl schwimmt oben." },
        { type: "mc", q: "Luft ist …", options: ["ein Reinstoff", "ein homogenes Gasgemisch", "ein heterogenes Gemisch"], answer: 1, explain: "Sie ist ein Gemisch aus Stickstoff (78 %), Sauerstoff (21 %) und anderen Gasen: nur eine Phase." },
        { type: "tf", q: "Beim Sieden eines Reinstoffs bleibt die Temperatur konstant.", answer: true, explain: "Die zugeführte Wärme dient dazu, den Zustand zu ändern, nicht die Temperatur zu erhöhen." }
      ]
    }
  ],
  glossary: [
    { t: "Materie", d: "Alles, was eine Masse hat und ein Volumen einnimmt." },
    { t: "Dichte", d: "Verhältnis von Masse und Volumen eines Körpers: ρ = m/V." },
    { t: "Intensive Eigenschaft", d: "Eigenschaft, die nicht von der Stoffmenge abhängt (Dichte, Siedetemperatur)." },
    { t: "Aggregatzustand", d: "Art, wie die Teilchen angeordnet sind: fest, flüssig, gasförmig." },
    { t: "Reinstoff", d: "Materie mit bestimmter Zusammensetzung: ein Element oder eine Verbindung." },
    { t: "Gemisch", d: "Mehrere Stoffe, die nicht chemisch verbunden sind, in veränderlichen Anteilen." },
    { t: "Phase", d: "Materiebereich mit einheitlichen Eigenschaften, vom Rest durch eine Grenzfläche getrennt." },
    { t: "Lösung", d: "Homogenes Gemisch aus einem gelösten Stoff in einem Lösungsmittel." },
    { t: "Löslichkeit", d: "Höchstmenge an gelöstem Stoff, die sich bei einer bestimmten Temperatur in einer Menge Lösungsmittel löst." },
    { t: "Destillation", d: "Trennung von Flüssigkeiten aufgrund unterschiedlicher Siedetemperaturen." },
    { t: "Chromatografie", d: "Trennverfahren, das auf der unterschiedlichen Affinität der Bestandteile zu einer festen und einer beweglichen Phase beruht." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche Eigenschaft hängt NICHT von der Stoffmenge ab?", options: ["Masse", "Volumen", "Dichte"], answer: 2, explain: "Die Dichte ist eine intensive Eigenschaft: Sie ist für ein Gramm und für ein Kilogramm desselben Materials gleich." },
      { type: "num", q: "Ein Block hat die Masse 540 g und das Volumen 200 cm³. Wie groß ist seine Dichte?", answer: 2.7, tol: 0.01, unit: "g/cm³", explain: "ρ = 540/200 = 2,7 g/cm³." },
      { type: "mc", q: "In welchem Zustand sind die Teilchen weit voneinander entfernt und in schneller, ungeordneter Bewegung?", options: ["Fest", "Flüssig", "Gasförmig"], answer: 2, explain: "In Gasen sind die Kräfte zwischen den Teilchen vernachlässigbar, und das Volumen ist das des Gefäßes." },
      { type: "tf", q: "Bronze, eine Legierung aus Kupfer und Zinn, ist ein homogenes Gemisch.", answer: true, explain: "Es hat nur eine Phase und veränderliche Anteile der Bestandteile." },
      { type: "tf", q: "Ein Gemisch hat immer eine konstante Siedetemperatur.", answer: false, explain: "Nur Reinstoffe haben während der Zustandsänderung eine konstante Temperatur." },
      { type: "mc", q: "Um aus Meerwasser Trinkwasser zu gewinnen, indem man die unterschiedliche Flüchtigkeit nutzt, verwendet man …", options: ["das Filtrieren", "die Destillation", "das Sieben"], answer: 1, explain: "Das Wasser verdampft und kondensiert dann, die Salze bleiben zurück: Das ist das Prinzip der thermischen Meerwasserentsalzungsanlagen." },
      { type: "num", q: "Du löst 15 g Zucker in 135 g Wasser. Wie groß ist der Massenprozentgehalt (% m/m)?", answer: 10, unit: "%", explain: "15 / (15 + 135) × 100 = 10 %." },
      { type: "order", q: "Bringe die Schritte zur Trennung von Sand, Salz und Eisen in die richtige Reihenfolge.", items: ["Den Magneten darüberführen", "Wasser zugeben und umrühren", "Filtrieren", "Das Filtrat eindampfen"], explain: "Zuerst entfernt man das Eisen trocken, dann löst man das Salz, filtriert den Sand ab und gewinnt zuletzt das Salz zurück." },
      { type: "text", q: "Wie heißt der Bestandteil in größerer Menge in einer Lösung?", answer: ["lösungsmittel", "das lösungsmittel"], explain: "Das Lösungsmittel ist der überwiegende Bestandteil; der gelöste Stoff ist der, der sich löst." },
      { type: "mc", q: "Eine Suspension aus roten Blutkörperchen im Plasma trennt man durch …", options: ["Zentrifugieren", "Eindampfen", "Chromatografie"], answer: 0, explain: "Die schnelle Drehung verstärkt den Dichteunterschied, und die Blutkörperchen setzen sich am Boden ab." }
    ]
  }
});
