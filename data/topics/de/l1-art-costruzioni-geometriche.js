TOPIC('de', {
  id: `l1-art-costruzioni-geometriche`,
  title: `Zeichnen: geometrische Konstruktionen`,
  intro: `Bevor man ein Haus, eine Maschine oder ein Logo zeichnet, muss man <b>Senkrechte, Parallelen, Winkel und Vielecke</b> genau konstruieren können. Die Werkzeuge sind wenige: <b>Lineal, Zeichendreiecke und Zirkel</b>. Die geometrischen Konstruktionen sind die Grammatik des technischen Zeichnens: Jeder Schritt hat einen mathematischen Grund, und jeder Fehler fällt sofort auf. Lernen wir, „mit dem Zirkel zu denken“, wie es die griechischen Geometer taten! 📐✏️`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Die Werkzeuge und die Spielregeln`,
      html: `<p>Die klassische euklidische Geometrie lässt nur zwei Werkzeuge zu: das <b>Lineal ohne Skala</b> (um Geraden zu ziehen) und den <b>Zirkel</b> (um Kreise zu ziehen und Strecken abzutragen). Im technischen Zeichnen verwendet man auch <b>Zeichendreiecke</b> und den <b>Winkelmesser</b>, die die Arbeit beschleunigen, aber die Konstruktionen „mit Lineal und Zirkel“ bleiben grundlegend.</p>
<ul>
<li><b>Bleistifte</b>: hart (H, 2H) für dünne, leichte Konstruktionslinien; weicher (HB, B) zum Nachziehen der fertigen Zeichnung.</li>
<li><b>Zeichendreiecke</b>: das <b>45°</b>-Dreieck (gleichschenklig-rechtwinkliges Dreieck) und das <b>30°/60°</b>-Dreieck (die Hälfte eines gleichseitigen Dreiecks). Mit einem am Lineal anliegenden Dreieck zieht man Senkrechte und Parallelen; kombiniert man die beiden Dreiecke, erhält man auch Winkel von 15°, 75°, 105°.</li>
<li><b>Zirkel</b>: Man setzt die Spitze in den Mittelpunkt und dreht die Mine. Goldene Regel: <b>die Öffnung nie verändern</b>, solange es die Konstruktion nicht verlangt.</li>
</ul>
<p>Konventionen: Punkte bezeichnet man mit <b>Großbuchstaben</b> (A, B, C), Geraden mit Kleinbuchstaben (r, s); die Konstruktionsbögen bleiben <b>sichtbar und dünn</b>: Wer hinsieht, soll deinen Gedankengang „lesen“ können. Die fertige Zeichnung wird mit kräftigem Strich nachgezogen.</p>`
    },
    {
      type: `text`, title: `2. Mittelsenkrechte einer Strecke und Mittelpunkt`,
      html: `<p>Die <b>Mittelsenkrechte</b> einer Strecke AB ist die Gerade, die senkrecht auf AB steht und durch ihren Mittelpunkt geht. Sie ist auch die Menge der Punkte, die von A und B <b>gleich weit entfernt</b> sind: Darum funktioniert die Konstruktion.</p>
<ol>
<li>Setze den Zirkel in <b>A</b> ein, mit einer Öffnung, die <b>größer als die Hälfte von AB</b> ist, und zeichne je einen Bogen über und unter der Strecke.</li>
<li>Setze ohne die Öffnung zu verändern in <b>B</b> ein und zeichne zwei Bögen, die die vorherigen in den Punkten <b>C</b> und <b>D</b> schneiden.</li>
<li>Verbinde C und D: Die Gerade CD ist die <b>Mittelsenkrechte</b>; der Punkt M, in dem sie AB schneidet, ist der <b>Mittelpunkt</b>.</li>
</ol>
<p>Warum es funktioniert: C und D haben gleichen Abstand von A und B (gleicher Radius), liegen also beide auf der Mittelsenkrechten; zwei Punkte genügen, um die Gerade zu bestimmen. Die vier Seiten AC, BC, AD, BD sind gleich lang, und ACBD ist eine <b>Raute</b> (ein Rhombus): Die Diagonalen einer Raute stehen senkrecht aufeinander und halbieren sich.</p>`
    },
    {
      type: `svg`, title: `Die Mittelsenkrechte einer Strecke, Schritt für Schritt`,
      caption: `Zwei Bögen mit gleichem Radius, um A und um B, schneiden sich in C und D: Die Gerade CD steht senkrecht auf AB und geht durch den Mittelpunkt M.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="340" y2="150" stroke="#1e293b" stroke-width="3"/>
<path d="M200 52 A140 140 0 0 1 200 248" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M200 52 A140 140 0 0 0 200 248" fill="none" stroke="#dc2626" stroke-width="2"/>
<line x1="200" y1="30" x2="200" y2="270" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/>
<g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="52" r="5"/><circle cx="200" cy="248" r="5"/><circle cx="200" cy="150" r="5" fill="#16a34a"/></g>
<g font-size="18" font-weight="bold" fill="#1e293b"><text x="82" y="140">A</text><text x="308" y="140">B</text><text x="210" y="50">C</text><text x="210" y="266">D</text><text x="210" y="142" fill="#16a34a">M</text></g>
<text x="400" y="100" font-size="16" fill="#2563eb">Bogen um A</text>
<text x="400" y="130" font-size="16" fill="#dc2626">Bogen um B</text>
<text x="400" y="160" font-size="16" fill="#16a34a">Mittelsenkrechte CD</text>
<text x="400" y="200" font-size="15" fill="#334155">gleicher Radius: AC = BC = AD = BD</text>
</svg>`
    },
    {
      type: `text`, title: `3. Senkrechte und Parallelen`,
      html: `<p><b>Senkrechte zu einer Geraden r durch einen Punkt P</b></p>
<ul>
<li><b>P auf r</b>: Zeichne mit P als Mittelpunkt einen Bogen, der r in zwei Punkten X und Y schneidet; konstruiere dann die Mittelsenkrechte der Strecke XY (das ist die gesuchte Senkrechte, sie geht durch P).</li>
<li><b>P außerhalb von r</b>: Zeichne mit P als Mittelpunkt einen Bogen, der r in X und Y schneidet; zeichne von X und von Y aus mit gleicher Öffnung zwei Bögen, die sich in Q treffen; die Gerade PQ ist die Senkrechte.</li>
<li><b>Mit den Zeichendreiecken</b>: Lege eine Kathete des Dreiecks an die Gerade, schiebe, bis die andere Kathete durch P geht, und zeichne.</li>
</ul>
<p><b>Parallele zu einer Geraden r durch einen Punkt P</b></p>
<ul>
<li><b>Mit zwei Zeichendreiecken</b>: Lege die Hypotenuse (oder eine Kathete) eines Dreiecks an r, das zweite Dreieck dient als „Führung“ und liegt am ersten an; schiebe das erste bis P und zeichne. Das ist die am Zeichentisch am häufigsten verwendete Methode.</li>
<li><b>Mit dem Zirkel (Raute)</b>: Wähle auf r einen Punkt A; schlage mit Mittelpunkt A und Radius AP einen Bogen, der r in B schneidet; schlage mit demselben Radius um B und um P zwei Bögen, die sich in Q treffen (auf der Seite von P). APQB ist eine Raute, also ist PQ parallel zu r.</li>
<li><b>Mit zwei Senkrechten</b>: Zwei Geraden, die senkrecht auf derselben Geraden r stehen, sind zueinander parallel.</li>
</ul>
<p>Ein wichtiger Fall sind die <b>Parallelen im gegebenen Abstand d</b>: Konstruiere eine Senkrechte zu r, trage auf ihr den Abstand d ab und zeichne dort die Senkrechte zur Senkrechten.</p>`
    },
    {
      type: `example`, title: `Praxisbeispiel: der Heftrand und ein Rahmen`,
      html: `<p>Du willst einen <b>1,5 cm</b> breiten Rahmen um ein Rechteck zeichnen. Man muss nur vier <b>Parallelen zu den Seiten im Abstand 1,5 cm</b> ziehen: Für jede konstruierst du eine Senkrechte, trägst mit dem Zirkel 1,5 cm ab und ziehst die Parallele mit den Zeichendreiecken. Die Winkel bleiben 90°, weil Parallelen zu senkrechten Seiten ihrerseits senkrecht aufeinander stehen. So macht es ein Grafiker für die Ränder einer Seite.</p>`
    },
    {
      type: `text`, title: `4. Die Winkelhalbierende und die Teilung einer Strecke`,
      html: `<p><b>Winkelhalbierende</b> (der Strahl, der den Winkel in zwei gleiche Winkel teilt), gegeben der Winkel mit Scheitel V:</p>
<ol>
<li>Zeichne mit V als Mittelpunkt einen Bogen, der die beiden Schenkel in A und B schneidet.</li>
<li>Zeichne um A und dann um B mit gleicher Öffnung zwei Bögen, die sich in E treffen.</li>
<li>Der Strahl VE ist die Winkelhalbierende. Es funktioniert, weil VAEB eine Raute (oder ein Drachenviereck) ist und die Diagonale einer Raute die Winkel halbiert.</li>
</ol>
<p>Mit der Winkelhalbierenden kannst du Winkel von <b>45°</b> (Halbierende von 90°), <b>30°</b> (Halbierende von 60°), <b>15°</b>, <b>22,5°</b> und so weiter konstruieren. Der Winkel von <b>60°</b> ergibt sich aus einem gleichseitigen Dreieck (Zirkel mit derselben Öffnung für drei Seiten); der von <b>90°</b> mit der Senkrechten.</p>
<p><b>Eine Strecke in n gleiche Teile teilen</b> (Strahlensatz, in Italien „Satz von Thales“): Um AB in 5 Teile zu teilen:</p>
<ol>
<li>Zeichne von A einen beliebigen Strahl, der nicht mit AB zusammenfällt.</li>
<li>Trage mit beliebiger Zirkelöffnung auf ihm <b>5 gleich lange Strecken</b> hintereinander ab: A1, A2, … A5.</li>
<li>Verbinde A5 mit B und ziehe durch A4, A3, A2, A1 die <b>Parallelen zu A5B</b>: Sie teilen AB in 5 gleiche Teile.</li>
</ol>
<p>Der Grund: Ein Büschel paralleler Geraden schneidet auf zwei Transversalen proportionale Strecken ab (Strahlensatz). Sind die Strecken auf der einen Transversale gleich, dann auch auf der anderen.</p>`
    },
    {
      type: `quiz`, title: `Mini-Quiz: die ersten Werkzeuge`,
      questions: [
        { type: `mc`, q: `Welche Eigenschaft haben alle Punkte der Mittelsenkrechten einer Strecke AB?`, options: [`Sie sind von A und B gleich weit entfernt`, `Sie haben nur zu A denselben Abstand`, `Sie liegen auf einer Geraden mit A und B`], answer: 0, explain: `Die Mittelsenkrechte ist der Ort der Punkte, die von den Endpunkten gleich weit entfernt sind: Darum konstruiert man sie mit zwei Bögen gleichen Radius.` },
        { type: `num`, q: `Wie viele Grad misst die Winkelhalbierende eines rechten Winkels zu jedem Schenkel?`, answer: 45, tol: 0, unit: `°`, explain: `90° : 2 = 45°.` },
        { type: `tf`, q: `Um eine Strecke in 7 gleiche Teile zu teilen, genügt es, 7 gleiche Strecken auf einem Hilfsstrahl abzutragen und Parallelen zu ziehen.`, answer: true, explain: `Das ist die Anwendung des Strahlensatzes: Die Parallelen teilen die Strecke in gleiche Teile.` }
      ]
    },
    {
      type: `text`, title: `5. Regelmäßige Vielecke im Kreis`,
      html: `<p>Ein <b>regelmäßiges Vieleck</b> hat lauter gleiche Seiten und gleiche Winkel. Einem Kreis mit Radius r einbeschrieben, liegen seine Ecken auf dem Kreis: Der Kreis wird in <b>n gleiche Bögen</b> geteilt, jeder zu 360°/n.</p>
<ul>
<li><b>Gleichseitiges Dreieck</b>: Teile den Kreis in 3 Teile (Bögen zu 120°) oder konstruiere die drei gleichen Seiten. Die Seite ist l = r√3 ≈ 1,732 r.</li>
<li><b>Quadrat</b>: Zeichne zwei senkrechte Durchmesser: Ihre Endpunkte sind die 4 Ecken. Die Seite ist l = r√2 ≈ 1,414 r.</li>
<li><b>Regelmäßiges Sechseck</b>: Die <b>Seite ist gleich dem Radius</b> (l = r). Mit derselben Zirkelöffnung trägst du sie 6-mal auf dem Kreis ab und kommst genau zum Ausgangspunkt zurück. Verbindest du jede zweite Ecke, erhältst du das <b>gleichseitige Dreieck</b>.</li>
<li><b>Achteck</b>: Du gehst vom Quadrat aus und findest die Mittelpunkte der Bögen (Winkelhalbierende); die Seitenzahl verdoppelt sich: 4 → 8 → 16.</li>
<li><b>Fünfeck</b>: komplizierter, die Seite hängt mit dem <b>Goldenen Schnitt</b> zusammen. Man erhält es mit einer Konstruktion, die den Mittelpunkt eines Radius verwendet (siehe unten).</li>
<li><b>Zehneck</b>: Die Seite ist der größere Teil des Radius beim Goldenen Schnitt; verdoppelt man das Zehneck, erhält man 20 Seiten.</li>
</ul>
<p>Das Sechseck ist am einfachsten, weil 360° : 6 = 60° und das Dreieck aus zwei Radien und einer Seite <b>gleichseitig</b> ist. Deshalb taucht das Sechseck überall in der Natur auf: Bienenwaben, Schneekristalle, die Struktur des Graphens.</p>`
    },
    {
      type: `svg`, title: `Das regelmäßige Sechseck mit dem Zirkel`,
      caption: `Man zeichnet den Kreis mit Radius r; ohne die Öffnung zu verändern, trägt man den Radius 6-mal auf dem Kreis ab. Verbunden bilden die 6 Punkte das Sechseck. Sechs gleichseitige Dreiecke füllen das Sechseck aus.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="110" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/>
<polygon points="280,150 225,245.3 115,245.3 60,150 115,54.7 225,54.7" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3" stroke-linejoin="round"/>
<g stroke="#1e3a8a" stroke-width="1.5"><line x1="170" y1="150" x2="280" y2="150"/><line x1="170" y1="150" x2="225" y2="245.3"/><line x1="170" y1="150" x2="115" y2="245.3"/><line x1="170" y1="150" x2="60" y2="150"/><line x1="170" y1="150" x2="115" y2="54.7"/><line x1="170" y1="150" x2="225" y2="54.7"/></g>
<g fill="#dc2626"><circle cx="280" cy="150" r="5"/><circle cx="225" cy="245.3" r="5"/><circle cx="115" cy="245.3" r="5"/><circle cx="60" cy="150" r="5"/><circle cx="115" cy="54.7" r="5"/><circle cx="225" cy="54.7" r="5"/></g>
<circle cx="170" cy="150" r="5" fill="#1e293b"/>
<text x="180" y="170" font-size="16" fill="#1e293b">O</text>
<text x="222" y="142" font-size="16" fill="#92400e" font-weight="bold">r</text>
<polygon points="450,150 490,81 570,81 610,150 570,219 490,219" fill="none"/>
<text x="330" y="60" font-size="17" font-weight="bold" fill="#1e3a8a">Regelmäßiges Sechseck</text>
<text x="330" y="95" font-size="16" fill="#334155">Seite = Radius (l = r)</text>
<text x="330" y="125" font-size="16" fill="#334155">Mittelpunktswinkel = 60°</text>
<text x="330" y="155" font-size="16" fill="#334155">Innenwinkel = 120°</text>
<text x="330" y="185" font-size="16" fill="#334155">6 gleichseitige Dreiecke</text>
<text x="330" y="225" font-size="16" fill="#334155">jede zweite Ecke verbunden:</text>
<text x="330" y="250" font-size="16" fill="#334155">einbeschriebenes gleichseitiges Dreieck</text>
</svg>`
    },
    {
      type: `3d`, title: `Das sechseckige Prisma: eine Konstruktion bekommt Volumen`,
      scene: `solid`,
      options: { shape: `prism`, n: 6, r: 1, h: 1.6, color: `#3b82f6`, labels: true, shapes: [`prism`, `pyramid`, `cube`, `cylinder`] },
      caption: `Die Grundfläche dieses Prismas ist das Sechseck, das du gerade konstruiert hast. Wenn du Flächen, Kanten und Ecken zählst, findest du F + V - E = 2 (Eulerscher Polyedersatz). Ein waagrechter Schnitt gibt deine Konstruktion wieder.`
    },
    {
      type: `text`, title: `6. Ein beliebiges Vieleck: allgemeine Methode und Fünfeck`,
      html: `<p><b>Andere Vielecke</b>: Für jedes n kann man den Kreis mit dem Winkelmesser in Bögen zu 360°/n teilen (zum Beispiel 40° für das Neuneck). Mit Lineal und Zirkel sind dagegen nur einige Vielecke exakt konstruierbar: die durch Verdoppeln der Seiten entstehenden (4, 8, 16; 6, 12; 5, 10, 20) sowie das Dreieck und das 17-Eck. Für die anderen (7, 9, 11…) verwendet man Näherungsverfahren.</p>
<p><b>Regelmäßiges Fünfeck im Kreis</b> mit Mittelpunkt O (klassische Konstruktion):</p>
<ol>
<li>Zeichne zwei senkrechte Durchmesser: AB waagrecht und CD senkrecht.</li>
<li>Finde den Mittelpunkt M des Radius OB.</li>
<li>Zeichne mit M als Mittelpunkt und dem Radius MC (von M zum Endpunkt C des senkrechten Durchmessers) einen Bogen, der den Durchmesser AB in N schneidet, auf der Seite gegenüber von B.</li>
<li>Die Strecke CN ist die <b>Seite des Fünfecks</b>. Trage diese Öffnung 5-mal auf dem Kreis ab, von C aus.</li>
</ol>
<p>Das Verhältnis von Diagonale zu Seite des Fünfecks ist <b>(1+√5)/2 ≈ 1,618</b>, die <b>goldene Zahl φ</b>. Die Pythagoreer übernahmen das Pentagramm (fünfzackiger Stern) als Geheimzeichen.</p>`
    },
    {
      type: `example`, title: `Praxisbeispiel: das Logo mit dem Stern`,
      html: `<p>Du willst für ein Logo einen fünfzackigen Stern zeichnen. Du konstruierst das regelmäßige Fünfeck im Kreis und verbindest dann jede Ecke mit der übernächsten: Du erhältst ein perfektes <b>Pentagramm</b>. Würdest du es „nach Augenmaß“ zeichnen, würde es schief; mit dem Zirkel sind alle Zacken gleich, weil der Kreis in 5 Bögen zu 72° geteilt ist.</p>
<p>Dasselbe gilt für eine Uhr: Die 12 Zahlen liegen an den Ecken eines regelmäßigen Zwölfecks, im Abstand von 30°. Man erhält es aus dem Sechseck, indem man die Bögen halbiert.</p>`
    },
    {
      type: `text`, title: `7. Tangenten und Übergangsbögen`,
      html: `<p>Eine <b>Tangente</b> an einen Kreis berührt die Kurve in nur einem Punkt, dem <b>Berührpunkt</b>, und steht <b>senkrecht auf dem Radius</b>, der zu diesem Punkt führt. Diese Eigenschaft ist der Schlüssel zu allen Übergangsbögen.</p>
<p>Ein <b>Übergangsbogen</b> (Ausrundung) ist ein Kreisbogen, der zwei Linien (zwei Geraden oder eine Gerade und eine Kurve) „sanft“ ohne Ecken verbindet. Man sieht ihn bei Straßen, Gleisen, an den abgerundeten Kanten von Möbeln und Telefonen.</p>
<p><b>Ausrundung zweier sich schneidender Geraden mit einem Bogen vom Radius r</b>:</p>
<ol>
<li>Zeichne zu jeder der beiden gegebenen Geraden eine <b>Parallele</b> im Abstand <b>r</b> (auf der Innenseite des Winkels).</li>
<li>Ihr Schnittpunkt <b>C</b> ist der <b>Mittelpunkt des Bogens</b>: Er hat von beiden Geraden den Abstand r.</li>
<li>Zeichne vom Mittelpunkt C die <b>Senkrechten</b> zu den beiden Geraden: Die Fußpunkte T₁ und T₂ sind die <b>Berührpunkte</b>.</li>
<li>Zeichne mit Mittelpunkt C und Radius r den Bogen von T₁ nach T₂. Ziehe mit kräftigem Strich <b>nur</b> die Geradenstücke bis T₁ und T₂ und den Bogen nach.</li>
</ol>
<p><b>Ausrundung zwischen Gerade und Kreis</b> oder zwischen zwei Kreisen: Der Mittelpunkt des Bogens liegt im Abstand r von der Geraden und im Abstand (R + r) (äußere Ausrundung) oder (R − r) (innere Ausrundung) vom Mittelpunkt des Kreises. Der Berührpunkt liegt immer auf der <b>Geraden durch die Mittelpunkte</b>.</p>`
    },
    {
      type: `svg`, title: `Ausrundung zweier senkrechter Geraden`,
      caption: `Der Mittelpunkt C hat von beiden Geraden den Abstand r; T1 und T2 sind die Berührpunkte, und der Bogen verbindet sie stetig. Die gestrichelten Geraden sind die Hilfsparallelen.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"><line x1="120" y1="240" x2="120" y2="40"/><line x1="120" y1="240" x2="520" y2="240"/></g>
<g stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 4"><line x1="200" y1="40" x2="200" y2="270"/><line x1="90" y1="160" x2="520" y2="160"/></g>
<g stroke="#1e293b" stroke-width="4" stroke-linecap="round" fill="none"><path d="M120 40 L120 160 A80 80 0 0 0 200 240 L520 240"/></g>
<g stroke="#16a34a" stroke-width="2"><line x1="200" y1="160" x2="120" y2="160"/><line x1="200" y1="160" x2="200" y2="240"/></g>
<g fill="#dc2626"><circle cx="200" cy="160" r="6"/><circle cx="120" cy="160" r="5"/><circle cx="200" cy="240" r="5"/></g>
<g font-size="17" font-weight="bold" fill="#1e293b"><text x="208" y="152">C</text><text x="70" y="156">T1</text><text x="208" y="262">T2</text></g>
<text x="240" y="200" font-size="16" fill="#16a34a">r</text>
<text x="150" y="190" font-size="16" fill="#16a34a">r</text>
<text x="320" y="110" font-size="16" fill="#334155">1) Parallelen im Abstand r</text>
<text x="320" y="135" font-size="16" fill="#334155">2) ihr Schnittpunkt ist der Mittelpunkt C</text>
<text x="320" y="190" font-size="16" fill="#334155">3) Senkrechte: Punkte T1 und T2</text>
<text x="320" y="215" font-size="16" fill="#334155">4) Bogen um C mit Radius r</text>
</svg>`
    },
    {
      type: `curiosity`, title: `Wusstest du, dass… Euklid die Regeln vor 2300 Jahren aufgeschrieben hat?`,
      html: `<p>Die <i>Elemente</i> des <b>Euklid</b> (Alexandria in Ägypten, um 300 v. Chr.) beginnen mit der Konstruktion eines gleichseitigen Dreiecks über einer gegebenen Strecke: Dabei werden genau zwei Kreise wie bei der Mittelsenkrechten verwendet. Über zweitausend Jahre lang wurde diskutiert, welche Konstruktionen mit Lineal und Zirkel allein möglich sind. Erst im 19. Jahrhundert wurde bewiesen, dass man mit diesen Werkzeugen drei berühmte Probleme <b>nicht lösen kann</b>: <b>einen beliebigen Winkel dreiteilen</b>, <b>den Würfel verdoppeln</b> und <b>den Kreis quadrieren</b>. Der junge <b>Carl Friedrich Gauß</b> entdeckte dagegen 1796, mit 19 Jahren, dass man das regelmäßige <b>17-Eck</b> konstruieren kann: Er war so stolz darauf, dass er es auf seinem Grabstein haben wollte.</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du, dass… Bienen Sechsecke „zeichnen“?`,
      html: `<p>Die Zellen der Waben sind <b>regelmäßige Sechsecke</b>. Unter den Formen, die die Ebene lückenlos überdecken (gleichseitiges Dreieck, Quadrat, Sechseck), hat das Sechseck bei gleicher Fläche <b>den kleinsten Umfang</b>: Es braucht weniger Wachs für die Wände. Schon Pappos von Alexandria (4. Jh. n. Chr.) hatte das bemerkt; der vollständige mathematische Beweis, die „Wabenvermutung“, wurde 1999 von Thomas Hales erbracht.</p>`
    },
    {
      type: `remember`, title: `Zum Merken`,
      html: `<ul>
<li><b>Mittelsenkrechte</b> einer Strecke: Bögen gleichen Radius um A und um B; die Gerade durch die Schnittpunkte steht senkrecht und geht durch den Mittelpunkt.</li>
<li><b>Winkelhalbierende</b>: Bogen vom Scheitel, zwei gleiche Bögen von den auf den Schenkeln gefundenen Punkten.</li>
<li><b>Strahlensatz</b> (italienisch Thales) zum Teilen einer Strecke in gleiche Teile, mit einem Strahl und Parallelen.</li>
<li><b>Sechseck</b>: Seite = Radius; <b>Quadrat</b>: zwei senkrechte Durchmesser; <b>Fünfeck</b>: Seite hängt mit dem Goldenen Schnitt zusammen.</li>
<li><b>Ausrundung</b>: Mittelpunkt im Abstand r von beiden Linien; Berührpunkte auf den Senkrechten vom Mittelpunkt.</li>
<li>Konstruktionslinien bleiben <b>dünn und sichtbar</b>, das Ergebnis wird mit <b>kräftigem Strich</b> nachgezogen.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Andere Wege, es zu verstehen`,
      intro: `Wenn dir der Zirkel wie ein geheimnisvolles Ritual vorkommt, betrachte dieselben Konstruktionen von anderen Seiten.`,
      tabs: [
        {
          label: `🧠 Das Warum: die Ortslinien`,
          html: `<p>Jede Konstruktion ist die Antwort auf eine Frage der Art „<b>wo liegen alle Punkte, die…?</b>“ (geometrischer Ort, Ortslinie).</p>
<ul>
<li>Die Punkte im Abstand <i>r</i> von O → <b>Kreis</b>.</li>
<li>Die Punkte, die von A und B gleich weit entfernt sind → <b>Mittelsenkrechte</b> der Strecke.</li>
<li>Die Punkte, die von zwei sich schneidenden Geraden gleich weit entfernt sind → <b>Winkelhalbierende</b>.</li>
<li>Die Punkte im Abstand <i>r</i> von einer Geraden → zwei <b>parallele Geraden</b>.</li>
</ul>
<p>Der Zirkel dient dazu, gleiche Abstände zu erhalten, das Lineal, um Punkte zu verbinden. Eine Ausrundung ist der Schnitt zweier Ortslinien: <b>Mittelpunkt = (Parallele zu r) ∩ (Parallele zu r)</b>.</p>`
        },
        {
          label: `✂️ Mit gefaltetem Papier (Origami)`,
          html: `<p>Ein Blatt Papier ist ein Geometer-Werkzeug! Falte ein Blatt so, dass zwei Punkte A und B aufeinanderfallen: Die <b>Faltlinie</b> ist die Mittelsenkrechte der Strecke AB. Falte so, dass zwei Schenkel eines Winkels aufeinanderfallen: Die Faltlinie ist die <b>Winkelhalbierende</b>. Faltest du ein Quadrat diagonal in zwei Hälften, erhältst du einen Winkel von 45°.</p>
<p>Mit Origami kann man auch <b>einen Winkel dreiteilen</b> und den Würfel verdoppeln, was mit Lineal und Zirkel unmöglich ist: 1980 zeigte es der Japaner <b>Hisashi Abe</b>.</p>`
        },
        {
          label: `💻 Wie der Computer es macht (CAD)`,
          html: `<p>In Zeichenprogrammen (CAD, Illustrator, Inkscape) führen Befehle wie „<i>Offset</i>“ (Parallele im gegebenen Abstand), „<i>Fillet</i>“ (Ausrundung) und „<i>Polygon</i>“ (regelmäßiges Vieleck) diese Konstruktionen automatisch aus: <b>Offset</b> zeichnet die Parallelen im Abstand r, und <b>Fillet</b> sucht den Mittelpunkt des Bogens als Schnittpunkt der Parallelen. Wenn du das Verfahren verstehst, benutzt du die Software, ohne herumzuprobieren.</p>`
        },
        {
          label: `🏷️ Erkenne die Punkte`,
          html: `<p>Klicke bei der Mittelsenkrechten einer Strecke auf einen Punkt und gib ihm den richtigen Namen.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><line x1="40" y1="150" x2="360" y2="150" stroke="#1e293b" stroke-width="3"/><path d="M200 35 A130 130 0 0 1 200 265" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M200 35 A130 130 0 0 0 200 265" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/><g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="35" r="5"/><circle cx="200" cy="265" r="5"/><circle cx="200" cy="150" r="5"/></g></svg>`,
            spots: [
              { x: 100, y: 150, label: `Endpunkt A` },
              { x: 300, y: 150, label: `Endpunkt B` },
              { x: 200, y: 150, label: `Mittelpunkt M` },
              { x: 200, y: 35, label: `Schnittpunkt der Bögen (C)` },
              { x: 200, y: 22, label: `Mittelsenkrechte der Strecke` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mindmap: die geometrischen Konstruktionen`,
      nodes: [
        { id: `eucl`, label: `Lineal und Zirkel`, x: 50, y: 6, color: `#64748b`, html: `Zwei Werkzeuge: Gerade und Kreis.`, why: `Die Postulate des <b>Euklid</b> (Elemente, um 300 v. Chr.) lassen nur „eine Gerade zwischen zwei Punkten ziehen“ und „einen Kreis mit gegebenem Mittelpunkt und Radius beschreiben“ zu. Alles andere muss man konstruieren.` },
        { id: `asse`, label: `Mittelsenkrechte und Senkrechte`, x: 18, y: 32, color: `#2563eb`, html: `Mittelsenkrechte der Strecke, Senkrechte, Mittelpunkt.`, why: `Aus der Gleichabständigkeit: Zwei Kreise gleichen Radius schneiden sich in den zwei Punkten, die von den Mittelpunkten gleich weit entfernt sind (Raute mit senkrechten Diagonalen).` },
        { id: `bis`, label: `Winkelhalbierende`, x: 50, y: 32, color: `#f59e0b`, html: `Einen Winkel halbieren: 45°, 30°, 15°…`, why: `Man verwendet eine Raute: Die Diagonale halbiert die Winkel. Mit der Winkelhalbierenden halbiert man die Seitenzahl der Vielecke.` },
        { id: `tal`, label: `Strahlensatz und Proportionen`, x: 82, y: 32, color: `#a855f7`, html: `Teilung einer Strecke in gleiche Teile.`, why: `<b>Thales von Milet</b> (6. Jh. v. Chr.): Ein Büschel von Parallelen bestimmt auf zwei Transversalen proportionale Strecken. Daraus leitet sich auch die Ähnlichkeit ab.` },
        { id: `pol`, label: `Regelmäßige Vielecke`, x: 30, y: 62, color: `#ef4444`, html: `Dreieck, Quadrat, Sechseck, Fünfeck, Achteck…`, why: `Den Kreis in n gleiche Bögen teilen. Gauß (1801) bewies, dass das regelmäßige n-Eck mit Lineal und Zirkel konstruierbar ist, wenn n ein Produkt aus einer Zweierpotenz und verschiedenen Fermatschen Primzahlen (3, 5, 17, 257, 65537) ist.` },
        { id: `tan`, label: `Tangenten und Übergangsbögen`, x: 70, y: 62, color: `#16a34a`, html: `Bögen, die Linien ohne Ecken verbinden.`, why: `Die Tangente steht im Berührpunkt senkrecht auf dem Radius. Der Mittelpunkt der Ausrundung ist der Punkt im Abstand r von beiden Linien: Schnitt zweier Ortslinien.` },
        { id: `app`, label: `Anwendungen`, x: 50, y: 90, color: `#0ea5e9`, html: `Architektur, Maschinenbau, Design, Grafik, CAD.`, why: `Von der gotischen Fensterrose (mit dem Zirkel gezeichnete Bögen) über Straßen (Übergangskurven) bis zu mechanischen Teilen mit abgerundeten Kanten: Alles beginnt mit diesen Konstruktionen.` }
      ],
      edges: [
        [`eucl`, `asse`, `erzeugt`], [`eucl`, `bis`, `erzeugt`], [`eucl`, `tal`, `verwendet`], [`asse`, `pol`, `dient zu`], [`bis`, `pol`, `verdoppelt Seiten`],
        [`tal`, `pol`, `verallgemeinert`], [`asse`, `tan`, `Senkrechte`], [`pol`, `app`, `für`], [`tan`, `app`, `für`]
      ]
    },
    {
      type: `quiz`, title: `Mini-Quiz: Vielecke und Übergangsbögen`,
      questions: [
        { type: `mc`, q: `Wie lang ist die Seite eines regelmäßigen Sechsecks, das einem Kreis mit Radius 4 cm einbeschrieben ist?`, options: [`2 cm`, `4 cm`, `8 cm`], answer: 1, explain: `Beim regelmäßigen Sechseck ist die Seite gleich dem Radius: l = r = 4 cm.` },
        { type: `mc`, q: `Wo liegt der Mittelpunkt eines Übergangsbogens zwischen zwei sich schneidenden Geraden?`, options: [`In dem Punkt, in dem sich die beiden Geraden schneiden`, `Im Schnittpunkt der Parallelen zu den beiden Geraden im Abstand r`, `Im Mittelpunkt zwischen den beiden Geraden`], answer: 1, explain: `Der Mittelpunkt muss von beiden Geraden den Abstand r haben: Er ist der Schnittpunkt der beiden Parallelen im Abstand r.` },
        { type: `tf`, q: `Eine Tangente an einen Kreis steht im Berührpunkt senkrecht auf dem Radius.`, answer: true, explain: `Das ist die Grundeigenschaft der Tangenten, auf der die Ausrundungen beruhen.` },
        { type: `num`, q: `Wie viele Grad misst der Mittelpunktswinkel eines regelmäßigen Achtecks?`, answer: 45, tol: 0, unit: `°`, explain: `360° : 8 = 45°.` }
      ]
    }
  ],
  glossary: [
    { t: `Mittelsenkrechte einer Strecke`, d: `Gerade, die im Mittelpunkt senkrecht auf der Strecke steht; Ort der Punkte, die von den Endpunkten gleich weit entfernt sind.` },
    { t: `Winkelhalbierende`, d: `Strahl, der einen Winkel in zwei gleiche Winkel teilt.` },
    { t: `Senkrechte`, d: `Gerade, die mit einer anderen einen Winkel von 90° bildet.` },
    { t: `Parallelen`, d: `Geraden derselben Ebene, die sich nie schneiden.` },
    { t: `Regelmäßiges Vieleck`, d: `Vieleck mit lauter gleichen Seiten und Winkeln; es lässt sich einem Kreis einbeschreiben.` },
    { t: `Tangente`, d: `Gerade, die einen Kreis in nur einem Punkt berührt, senkrecht zum Radius.` },
    { t: `Übergangsbogen (Ausrundung)`, d: `Kreisbogen, der zwei Linien ohne Ecken verbindet und an beide tangential anschließt.` },
    { t: `Geometrischer Ort`, d: `Menge aller Punkte, die dieselbe Eigenschaft haben.` },
    { t: `Goldener Schnitt`, d: `Verhältnis φ = (1+√5)/2 ≈ 1,618, verbunden mit dem regelmäßigen Fünfeck.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Um die Mittelsenkrechte von AB zu konstruieren, muss die Zirkelöffnung…`, options: [`kleiner als die Hälfte von AB sein`, `größer als die Hälfte von AB sein`, `genau AB sein`], answer: 1, explain: `Wäre sie kleiner oder gleich der Hälfte, würden sich die Bögen nicht schneiden (oder nur berühren): Man braucht mehr als die Hälfte.` },
      { type: `tf`, q: `Die Mittelsenkrechte einer Strecke geht durch ihren Mittelpunkt.`, answer: true, explain: `Sie steht genau im Mittelpunkt M senkrecht auf der Strecke.` },
      { type: `num`, q: `Wie groß ist jeder Innenwinkel eines regelmäßigen Sechsecks?`, answer: 120, tol: 0, unit: `°`, explain: `Summe der Innenwinkel (6−2)·180° = 720°; 720° : 6 = 120°.` },
      { type: `mc`, q: `Mit dem 30°/60°-Dreieck und dem 45°-Dreieck zusammen angelegt kann man einen Winkel von… erhalten.`, options: [`15°`, `20°`, `25°`], answer: 0, explain: `45° − 30° = 15°; man erhält auch 75° (45° + 30°).` },
      { type: `num`, q: `Bei einer Ausrundung mit Radius r = 3 cm zwischen zwei senkrechten Geraden: In welchem Abstand vom Scheitel (entlang jeder Geraden gemessen) liegen die Berührpunkte?`, answer: 3, tol: 0, unit: `cm`, explain: `Der Mittelpunkt ist 3 cm von jeder Geraden entfernt; die Berührpunkte liegen 3 cm vom Scheitel entlang jeder Geraden (das Quadrat mit Seite r).` },
      { type: `order`, q: `Bring die Schritte für die Winkelhalbierende in die richtige Reihenfolge.`, items: [`Bogen um den Scheitel: schneidet die Schenkel in A und B`, `Bogen um A`, `Gleicher Radius, Bogen um B: Schnittpunkt E`, `Den Strahl vom Scheitel nach E ziehen`], explain: `Zuerst die Punkte auf den Schenkeln, dann zwei gleiche Bögen, die sich schneiden, zuletzt der Strahl.` },
      { type: `text`, q: `Wie heißt der Satz, mit dem man eine Strecke mithilfe von Parallelen in gleiche Teile teilt?`, answer: [`strahlensatz`, `der strahlensatz`, `thales`, `satz von thales`, `talete`, `teorema di talete`, `intercept theorem`], explain: `Der Strahlensatz (in Italien „Satz von Thales“): Ein Büschel paralleler Geraden bestimmt auf den Transversalen proportionale Strecken.` },
      { type: `mc`, q: `Welches regelmäßige Vieleck hat eine Seite, die gleich dem Radius des Umkreises ist?`, options: [`Quadrat`, `Fünfeck`, `Sechseck`], answer: 2, explain: `Der Mittelpunktswinkel beträgt 60°, und das Dreieck aus zwei Radien und einer Seite ist gleichseitig.` },
      { type: `tf`, q: `Der Berührpunkt einer Ausrundung liegt auf der Senkrechten zur Geraden vom Mittelpunkt des Bogens aus.`, answer: true, explain: `Der Radius im Berührpunkt steht senkrecht auf der Tangente, also ist der Fußpunkt der Senkrechten vom Mittelpunkt der Berührpunkt.` },
      { type: `mc`, q: `Welcher Bleistift wird für Konstruktionslinien verwendet?`, options: [`Hart (H) und leicht`, `Weich (B) und sehr kräftig`, `Filzstift`], answer: 0, explain: `Konstruktionslinien müssen dünn sein; die fertige Zeichnung wird mit kräftigerem Strich nachgezogen.` }
    ]
  }
});
