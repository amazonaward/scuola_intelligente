TOPIC('de', {
  id: "m2-mat-trasformazioni",
  title: "Die geometrischen Abbildungen",
  intro: "Verschieben, drehen, umklappen, vergrößern: Die <b>geometrischen Abbildungen</b> sind die Regeln, nach denen eine Figur in der Ebene ihre Lage oder Größe ändert. Du findest sie in Fliesen, Logos, Spiegeln, Videospielen und sogar in den Flügeln eines Schmetterlings.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "1. Was ist eine Abbildung?",
      html: `<p>Eine <b>geometrische Abbildung</b> ist eine Regel, die jedem Punkt <b>P</b> der Ebene genau einen Punkt <b>P'</b> (gesprochen «P Strich») zuordnet, den <b>Bildpunkt</b> von P.</p>
<p>Wendet man die Regel auf alle Punkte einer Figur <b>F</b> an, erhält man die abgebildete Figur <b>F'</b>.</p>
<p>Die Abbildungen teilen sich in zwei große Familien:</p>
<ul>
<li><b>Isometrien</b> (vom Griechischen <i>isos</i> = gleich, <i>metron</i> = Maß): Sie erhalten die <b>Längen</b> der Strecken und die Größe der Winkel. Die Figur wird verschoben, bleibt aber zur Ausgangsfigur <b>kongruent</b> (deckungsgleich). Isometrien sind die <b>Verschiebung</b>, die <b>Drehung</b> und die <b>Spiegelung</b> (an einer Achse und an einem Punkt).</li>
<li><b>Ähnlichkeitsabbildungen</b>: Sie erhalten die <b>Form</b> (die Winkel), können aber die Größe ändern. Die Figur wird um einen bestimmten <b>Ähnlichkeitsfaktor k</b> vergrößert oder verkleinert.</li>
</ul>
<p>Ein Punkt, der mit seinem Bildpunkt zusammenfällt (P = P'), heißt <b>Fixpunkt</b>.</p>`
    },
    {
      type: "text",
      title: "2. Die Verschiebung: gleiten",
      html: `<p>Bei der <b>Verschiebung</b> bewegen sich alle Punkte um dieselbe Strecke, in dieselbe Richtung und in denselben Richtungssinn. Diese Verschiebung beschreibt man mit einem <b>Vektor</b> <b>v</b>: einem Pfeil mit</p>
<ul>
<li><b>Betrag</b> (Länge der Verschiebung),</li>
<li><b>Richtung</b> (die Gerade, auf der sie stattfindet),</li>
<li><b>Orientierung</b> (wohin der Pfeil zeigt).</li>
</ul>
<p>Im Koordinatensystem schreibt man einen Vektor mit seinen Komponenten, zum Beispiel <b>v(3; −2)</b>: «3 nach rechts und 2 nach unten». Der Punkt A(1; 4) wird zu A'(1+3; 4−2) = <b>A'(4; 2)</b>.</p>
<p>Regel: <b>P(x; y) → P'(x + a; y + b)</b> mit v(a; b).</p>
<p>Die Verschiebung hat <b>keine Fixpunkte</b> (außer beim Nullvektor) und erhält den <b>Umlaufsinn</b>: Wenn man die Ecken eines Dreiecks gegen den Uhrzeigersinn liest, liest man auch die Ecken des Bildes gegen den Uhrzeigersinn.</p>`
    },
    {
      type: "svg",
      title: "Die vier Isometrien im Vergleich",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<line x1="300" y1="0" x2="300" y2="340" stroke="#cbd5e1" stroke-width="2"/>
<line x1="0" y1="170" x2="600" y2="170" stroke="#cbd5e1" stroke-width="2"/>
<text x="150" y="22" font-size="17" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Verschiebung</text>
<polygon points="30,140 80,140 30,70" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<polygon points="170,140 220,140 170,70" fill="#1d4ed8" fill-opacity="0.75" stroke="#1e3a8a" stroke-width="2"/>
<line x1="85" y1="110" x2="160" y2="110" stroke="#f97316" stroke-width="4"/>
<polygon points="160,102 175,110 160,118" fill="#f97316"/>
<text x="122" y="100" font-size="16" fill="#c2410c" text-anchor="middle">v</text>
<text x="450" y="22" font-size="17" font-weight="bold" fill="#15803d" text-anchor="middle">Achsenspiegelung</text>
<line x1="450" y1="35" x2="450" y2="160" stroke="#15803d" stroke-width="3" stroke-dasharray="8,6"/>
<polygon points="380,140 430,140 430,70" fill="#86efac" stroke="#15803d" stroke-width="2"/>
<polygon points="520,140 470,140 470,70" fill="#15803d" fill-opacity="0.75" stroke="#14532d" stroke-width="2"/>
<text x="458" y="160" font-size="15" fill="#15803d">Achse r</text>
<text x="150" y="195" font-size="17" font-weight="bold" fill="#7c3aed" text-anchor="middle">Drehung um 90°</text>
<circle cx="150" cy="270" r="5" fill="#7c3aed"/>
<text x="140" y="292" font-size="15" fill="#7c3aed">O</text>
<polygon points="160,260 220,260 220,220" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
<polygon points="140,260 140,320 100,320" fill="#7c3aed" fill-opacity="0.75" stroke="#4c1d95" stroke-width="2"/>
<path d="M205 245 A60 60 0 0 1 135 305" fill="none" stroke="#f97316" stroke-width="3" stroke-dasharray="5,4"/>
<text x="450" y="195" font-size="17" font-weight="bold" fill="#be123c" text-anchor="middle">Punktspiegelung</text>
<circle cx="450" cy="270" r="5" fill="#be123c"/>
<text x="456" y="288" font-size="15" fill="#be123c">O</text>
<polygon points="470,255 530,255 470,215" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
<polygon points="430,285 370,285 430,325" fill="#be123c" fill-opacity="0.75" stroke="#881337" stroke-width="2"/>
<line x1="530" y1="255" x2="370" y2="285" stroke="#be123c" stroke-width="1.5" stroke-dasharray="5,4"/>
</svg>`,
      caption: "Die helle Figur ist die Ausgangsfigur (F), die dunkle ist das Bild (F'). In allen vier Fällen sind F und F' kongruent."
    },
    {
      type: "text",
      title: "3. Die Drehung: um einen Punkt drehen",
      html: `<p>Eine <b>Drehung</b> ist durch drei Elemente festgelegt:</p>
<ol>
<li>das <b>Drehzentrum O</b>, der einzige Punkt, der fest bleibt (Fixpunkt);</li>
<li>den <b>Drehwinkel α</b> (zum Beispiel 90°, 180°, 60° …);</li>
<li>den <b>Drehsinn</b>: <b>gegen den Uhrzeigersinn</b> (per Konvention positiv, +) oder <b>im Uhrzeigersinn</b> (negativ, −).</li>
</ol>
<p>Jeder Punkt P bewegt sich auf einem Kreis um O: Die Strecke OP bleibt gleich OP', und der Winkel POP' ist genau α.</p>
<p>Im Koordinatensystem, mit dem Zentrum im Ursprung:</p>
<ul>
<li>Drehung um +90°: <b>(x; y) → (−y; x)</b></li>
<li>Drehung um 180°: <b>(x; y) → (−x; −y)</b></li>
<li>Drehung um −90° (oder +270°): <b>(x; y) → (y; −x)</b></li>
</ul>
<p>Eine Drehung um 360° bringt jeden Punkt an seinen Platz zurück: Sie ist die <b>Identität</b>.</p>`
    },
    {
      type: "text",
      title: "4. Die Spiegelungen: der Spiegel",
      html: `<p><b>Achsenspiegelung</b> (oder Umklappung): Sie ist durch eine Gerade <b>r</b> gegeben, die <b>Symmetrieachse</b>. Der Punkt P' ist so gewählt, dass die Achse r die <b>Mittelsenkrechte der Strecke PP'</b> ist: PP' steht senkrecht auf r, und der Mittelpunkt von PP' liegt auf r. Die Punkte der Achse sind alle Fixpunkte.</p>
<p>Die Achsenspiegelung <b>kehrt den Umlaufsinn um</b>: Es ist wie der Blick in den Spiegel, wo die rechte Hand wie eine linke aussieht.</p>
<ul>
<li>x-Achse: (x; y) → (x; −y)</li>
<li>y-Achse: (x; y) → (−x; y)</li>
<li>Winkelhalbierende y = x: (x; y) → (y; x)</li>
</ul>
<p><b>Punktspiegelung</b>: Sie ist durch einen Punkt <b>O</b> gegeben, das <b>Symmetriezentrum</b>, das der Mittelpunkt jeder Strecke PP' ist. Sie entspricht einer <b>Drehung um 180°</b> um O. Mit dem Zentrum im Ursprung: (x; y) → (−x; −y).</p>
<p>Eine Figur hat eine <b>Symmetrieachse</b>, wenn die Spiegelung an dieser Achse sie in sich selbst überführt. Das Quadrat hat 4, das Rechteck 2, das gleichseitige Dreieck 3, der Kreis unendlich viele.</p>`
    },
    {
      type: "widget",
      title: "Labor: Bilde den Punkt ab",
      widget: "numberLine",
      options: { min: -8, max: 8, step: 1, marks: [-3, 3] },
      caption: "Auf einer Geraden bildet die Spiegelung am Nullpunkt 3 auf −3 ab: Dasselbe geschieht mit der x-Koordinate bei der Spiegelung an der y-Achse. Springe von 3 nach −3: Wie groß ist der Sprung? (6 = zweimal der Abstand von der Achse)."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Isometrien",
      questions: [
        { type: "mc", q: "Welche Abbildung wird durch einen Vektor beschrieben?", options: ["Drehung", "Verschiebung", "Achsenspiegelung"], answer: 1, explain: "Die Verschiebung bewegt alle Punkte nach demselben Vektor (Betrag, Richtung, Orientierung)." },
        { type: "mc", q: "Der Punkt A(2; 5) wird mit v(−4; 1) verschoben. Wohin kommt er?", options: ["A'(6; 6)", "A'(−2; 6)", "A'(−2; 4)"], answer: 1, explain: "x: 2 + (−4) = −2; y: 5 + 1 = 6. Also A'(−2; 6)." },
        { type: "tf", q: "Die Punktspiegelung ist dasselbe wie eine Drehung um 180° um das Zentrum.", answer: true, explain: "Jeder Punkt landet auf der gegenüberliegenden Seite von O, im selben Abstand: Es ist eine halbe Drehung." },
        { type: "num", q: "Wie viele Symmetrieachsen hat ein Quadrat?", answer: 4, explain: "2 Mittellinien (senkrecht und waagerecht) und 2 Diagonalen." }
      ]
    },
    {
      type: "text",
      title: "5. Verkettung von Isometrien",
      html: `<p>Man kann zwei Abbildungen nacheinander ausführen: Man spricht von <b>Verkettung</b>. Einige wichtige Ergebnisse:</p>
<ul>
<li>zwei Verschiebungen ergeben eine Verschiebung (die Vektoren werden addiert);</li>
<li>zwei Achsenspiegelungen an <b>parallelen</b> Achsen ergeben eine <b>Verschiebung</b>, deren Betrag das Doppelte des Abstands der Achsen ist;</li>
<li>zwei Achsenspiegelungen an Achsen, die sich in O <b>schneiden</b>, ergeben eine <b>Drehung</b> um O mit dem doppelten Winkel zwischen den Achsen;</li>
<li>zwei Punktspiegelungen ergeben eine Verschiebung.</li>
</ul>
<p>Deshalb nennt man die Achsenspiegelung die «Baustein»-Abbildung: Durch Verkettung von höchstens drei Achsenspiegelungen erhält man <b>jede Isometrie</b> der Ebene.</p>`
    },
    {
      type: "text",
      title: "6. Zentrische Streckung und Ähnlichkeit: vergrößern und verkleinern",
      html: `<p>Die <b>zentrische Streckung</b> mit dem Zentrum O und dem Faktor <b>k</b> bildet jeden Punkt P auf einen Punkt P' auf der Geraden OP ab, sodass <b>OP' = k · OP</b>.</p>
<ul>
<li>Wenn <b>k &gt; 1</b>, wird die Figur <b>vergrößert</b>;</li>
<li>wenn <b>0 &lt; k &lt; 1</b>, wird die Figur <b>verkleinert</b>;</li>
<li>wenn <b>k = 1</b>, ändert sie sich nicht (Identität);</li>
<li>wenn k negativ ist, liegt das Bild auf der anderen Seite von O (mit k = −1 ist es die Punktspiegelung).</li>
</ul>
<p>Zwei Figuren heißen <b>ähnlich</b>, wenn sich die eine aus der anderen durch eine zentrische Streckung, gegebenenfalls gefolgt von einer Isometrie, ergibt. In ähnlichen Figuren gilt:</p>
<ul>
<li>die <b>entsprechenden Winkel sind gleich</b>;</li>
<li>die <b>entsprechenden Seiten sind proportional</b>, mit dem Faktor k;</li>
<li>die <b>Umfänge</b> stehen im Verhältnis <b>k</b>;</li>
<li>die <b>Flächeninhalte</b> stehen im Verhältnis <b>k²</b> (und die Volumen der Körper im Verhältnis k³).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Eine zentrische Streckung mit dem Faktor 2",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<circle cx="60" cy="260" r="7" fill="#dc2626"/>
<text x="40" y="290" font-size="18" fill="#dc2626" font-weight="bold">O</text>
<line x1="60" y1="260" x2="540" y2="260" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<line x1="60" y1="260" x2="300" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<line x1="60" y1="260" x2="540" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<polygon points="180,260 300,190 180,150" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<polygon points="300,260 540,120 300,40" fill="#f59e0b" fill-opacity="0.35" stroke="#b45309" stroke-width="3"/>
<text x="150" y="160" font-size="18" fill="#92400e" font-weight="bold">A</text>
<text x="290" y="34" font-size="18" fill="#92400e" font-weight="bold">A'</text>
<text x="300" y="215" font-size="18" fill="#92400e" font-weight="bold">B</text>
<text x="545" y="115" font-size="18" fill="#92400e" font-weight="bold">B'</text>
<text x="380" y="215" font-size="17" fill="#0f172a">OA' = 2 · OA</text>
<text x="380" y="240" font-size="17" fill="#0f172a">Flächeninhalt F' = 4 · Flächeninhalt F</text>
</svg>`,
      caption: "Mit k = 2 verdoppelt sich jede Seite, aber der Flächeninhalt wird 4-mal so groß (2² = 4)."
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Landkarte und der Maßstab",
      html: `<p>Eine Karte im Maßstab <b>1 : 25 000</b> ist eine zum wirklichen Gelände <b>ähnliche</b> Figur mit dem Faktor k = 1/25 000.</p>
<p>Wenn zwei Dörfer auf der Karte <b>8 cm</b> voneinander entfernt sind, sind sie in Wirklichkeit 8 × 25 000 = 200 000 cm = <b>2 km</b> entfernt.</p>
<p>Achtung bei den Flächeninhalten: Ein Feld, das auf der Karte 2 cm × 2 cm = 4 cm² groß ist, misst in Wirklichkeit 500 m × 500 m = 250 000 m², also 4 cm² × 25 000² = 2,5 Milliarden cm². Die Flächeninhalte skalieren mit <b>k²</b>!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Koordinaten eines Dreiecks",
      html: `<p>Das Dreieck ABC hat die Ecken A(1; 1), B(4; 1), C(1; 3).</p>
<table>
<tr><th>Abbildung</th><th>A'</th><th>B'</th><th>C'</th></tr>
<tr><td>Verschiebung v(2; 3)</td><td>(3; 4)</td><td>(6; 4)</td><td>(3; 6)</td></tr>
<tr><td>Spiegelung an der y-Achse</td><td>(−1; 1)</td><td>(−4; 1)</td><td>(−1; 3)</td></tr>
<tr><td>Drehung +90° (Zentrum O)</td><td>(−1; 1)</td><td>(−1; 4)</td><td>(−3; 1)</td></tr>
<tr><td>Streckung k = 2 (Zentrum O)</td><td>(2; 2)</td><td>(8; 2)</td><td>(2; 6)</td></tr>
</table>
<p>Kontrolle: AB = 3 und A'B' = 3 in den ersten drei Zeilen (Isometrien); bei der Streckung ist A'B' = 6 = 2 · 3.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Abbildungen zu verstehen",
      intro: "Wenn dich die Regeln mit den Koordinaten nicht überzeugen, versuche es mit den Händen, mit Kunst oder mit 3D.",
      tabs: [
        {
          label: "✂️ Papier, Schere und Transparentpapier",
          html: `<p>Die Methode, die in vielen Schulen Nordeuropas benutzt wird, ist <b>handelnd</b>:</p>
<ul>
<li><b>Verschiebung</b>: Pause die Figur auf einem durchsichtigen Blatt ab und lass es <b>gleiten</b>, ohne es zu drehen.</li>
<li><b>Drehung</b>: Setze einen Bleistift auf das Zentrum O und <b>drehe</b> das durchsichtige Blatt.</li>
<li><b>Achsenspiegelung</b>: Falte das Blatt entlang der Achse oder <b>wende</b> das Transparentpapier. Mit einem Tropfen Farbe auf einer Seite und dem Falten erhältst du sofort die symmetrische Figur (den «Schmetterling»).</li>
<li><b>Punktspiegelung</b>: Drehe das Transparentpapier um eine halbe Drehung um das Zentrum.</li>
</ul>
<p>Schlüsselfrage: Musstest du das Transparentpapier <b>wenden</b>, um F' zu erhalten? Wenn ja, kehrt die Isometrie den Umlaufsinn um (es ist eine Achsenspiegelung oder eine Verkettung mit ihr).</p>`
        },
        {
          label: "🎨 Escher und die Mosaike der Alhambra",
          html: `<p>Der niederländische Künstler <b>M. C. Escher</b> (1898–1972) schuf, nachdem er die <b>Alhambra</b> in Granada (Spanien) besucht hatte, Zeichnungen von Fischen, Vögeln und Eidechsen, die die Ebene lückenlos ausfüllen: die <b>Parkettierungen</b>.</p>
<p>Der Trick: Man geht von einem Quadrat aus, «beißt» ein Stück an einer Seite heraus und <b>verschiebt</b> es an die gegenüberliegende Seite (oder man <b>dreht</b> es um eine Ecke). Das neue Plättchen passt perfekt zu seinen Kopien.</p>
<p>Mathematiker haben bewiesen (Fjodorow, 1891), dass es genau <b>17 Arten</b> von Symmetrien für Muster gibt, die sich in der Ebene wiederholen: Die arabischen Handwerker der Alhambra benutzten sehr viele davon Jahrhunderte früher!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#eff6ff"/>
<g stroke="#1e3a8a" stroke-width="2">
<path d="M20 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M100 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M180 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M260 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M340 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M420 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M500 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
</g>
<text x="300" y="165" font-size="18" fill="#1e3a8a" text-anchor="middle">Dasselbe «angebissene» Plättchen, immer wieder verschoben,</text>
<text x="300" y="192" font-size="18" fill="#1e3a8a" text-anchor="middle">füllt den Streifen lückenlos aus.</text>
</svg>`
        },
        {
          label: "🎮 Wie in Videospielen",
          html: `<p>In Videospielen ist jede Figur eine Menge von Punkten mit Koordinaten. Der Computer bildet sie dutzende Male pro Sekunde ab:</p>
<ul>
<li>die Figur <b>läuft</b> → Verschiebung (x + 2; y);</li>
<li>die Figur <b>dreht sich</b> nach links → Spiegelung an einer senkrechten Achse (−x; y);</li>
<li>die Kamera <b>zoomt</b> → zentrische Streckung mit k &gt; 1;</li>
<li>ein Rad <b>dreht sich</b> → Drehung.</li>
</ul>
<p>Grafikkarten führen Milliarden dieser Berechnungen pro Sekunde mit <b>Matrizen</b> aus, Zahlentabellen, die du in der Oberstufe kennenlernen wirst.</p>`
        },
        {
          label: "🧊 Einen Körper in 3D drehen",
          html: `<p>Drehungen gibt es auch im Raum, um eine <b>Achse</b> statt um einen Punkt. Ziehe am sechseckigen Prisma: Wenn du es um <b>60°</b> um seine Achse drehst, sieht es wieder identisch aus, weil seine Grundfläche ein regelmäßiges Sechseck ist (360° : 6 = 60°). Man sagt, es hat eine <b>Drehsymmetrie der Ordnung 6</b>.</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 1.4, color: "#a78bfa", labels: true }
        },
        {
          "label": "🇬🇷 Der griechische Mäander: eine unendliche Verschiebung",
          "html": "<p>Auf Vasen, Mosaiken und Tempeln des antiken <b>Griechenlands</b> findet man oft einen eckigen Spiralrahmen: den <b>Mäander</b>, der auch «griechischer Schlüssel» genannt wird. Der Name kommt vom Fluss Mäander (in der Türkei), der für seine Windungen berühmt ist.</p><p>Der Mäander wird mit nur einer Abbildung gebaut: der <b>Verschiebung</b>.</p><ol><li>Zeichne auf kariertem Papier den <b>«Baustein»</b>: ein Stück der Spirale (in der Zeichnung steht er im gelben Kasten).</li><li>Wähle einen <b>Vektor</b>: zum Beispiel 8 Kästchen nach rechts.</li><li>Pause den Baustein ab, verschiebe ihn um diesen Vektor und pause ihn wieder ab … und wieder.</li><li>Verbinde die Bausteine mit den Randlinien: Da ist der Fries!</li></ol><p>Jeder Baustein ist das <b>Bild</b> des vorherigen: gleiche Form, gleiche Größe, gleiche Orientierung. Eine Zeichnung, die sich so entlang eines Streifens wiederholt, heißt <b>Fries</b>. Mathematiker haben bewiesen, dass es bei Kombination von Verschiebungen, Spiegelungen und halben Drehungen <b>nur 7 verschiedene Friesarten</b> gibt.</p><p>🎯 Hat der Mäander auch eine <b>Achsensymmetrie</b>? Versuche, die Zeichnung entlang einer senkrechten Geraden zu falten, und prüfe es nach.</p>",
          "svg": "<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"250\" fill=\"#fff7ed\"/><polyline points=\"60,120 60,40 120,40 120,100 80,100 80,60 100,60 100,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"140,120 140,40 200,40 200,100 160,100 160,60 180,60 180,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"220,120 220,40 280,40 280,100 240,100 240,60 260,60 260,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"300,120 300,40 360,40 360,100 320,100 320,60 340,60 340,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"380,120 380,40 440,40 440,100 400,100 400,60 420,60 420,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"460,120 460,40 520,40 520,100 480,100 480,60 500,60 500,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><line x1=\"56\" y1=\"120\" x2=\"544\" y2=\"120\" stroke=\"#1e3a8a\" stroke-width=\"7\"/><line x1=\"56\" y1=\"32\" x2=\"544\" y2=\"32\" stroke=\"#1e3a8a\" stroke-width=\"7\"/><rect x=\"56\" y=\"28\" width=\"80\" height=\"96\" fill=\"#fde68a\" fill-opacity=\"0.35\" stroke=\"#d97706\" stroke-width=\"3\"/><defs><marker id=\"arrM\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 Z\" fill=\"#dc2626\"/></marker></defs><line x1=\"60\" y1=\"170\" x2=\"136\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><line x1=\"140\" y1=\"170\" x2=\"216\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><line x1=\"220\" y1=\"170\" x2=\"296\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><text x=\"320\" y=\"176\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">derselbe Vektor, immer wiederholt</text><text x=\"96\" y=\"225\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">Der farbige «Baustein», oft verschoben, bildet den Fries.</text></svg>"
        },
        {
          "label": "🇲🇩 Teppiche und Stickereien aus Moldawien",
          "html": "<p>In <b>Moldawien</b> und in <b>Rumänien</b> sind die traditionellen Teppiche (<i>covoare</i>) und die Stickereien der Hemden voller Geometrie: Rauten, Sterne, Kreuze, stilisierte Bäume. Im Jahr 2016 hat die <b>UNESCO</b> die Kunst der traditionellen Wandteppiche Rumäniens und der Republik Moldau zum <b>immateriellen Kulturerbe der Menschheit</b> erklärt.</p><p>Die Stickerinnen arbeiten auf dem <b>Gewebe</b>, das ein Raster aus Kästchen ist, genau wie dein Heft. Um ein Muster zu schaffen, benutzen sie (oft ohne sie so zu nennen) die <b>geometrischen Abbildungen</b>:</p><ol><li>Sie zeichnen <b>ein Viertel</b> des Musters, Kästchen für Kästchen.</li><li>Sie <b>klappen</b> es an einer senkrechten Geraden um (<b>Achsenspiegelung</b>): Jedes Kästchen kommt auf die andere Seite, im selben Abstand von der Achse.</li><li>Sie klappen die erhaltene Hälfte an einer waagerechten Geraden um: Das Muster ist vollständig.</li><li>Dann <b>verschieben</b> sie es am Rand des Teppichs entlang, um eine Bordüre zu machen.</li></ol><p>Das Muster, das du erhältst, hat <b>zwei Symmetrieachsen</b> und bleibt gleich, auch wenn du es um <b>90°</b> um die Mitte <b>drehst</b>.</p><p>🎯 Probiere es aus: Zeichne auf kariertem Papier ein eigenes Viertel eines Musters in einem 6 × 6-Quadrat und vervollständige es mit zwei Spiegelungen. Dann verschiebe das Muster, um eine Bordüre zu machen!</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"30\" x2=\"274\" y2=\"30\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"58\" y1=\"30\" x2=\"58\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"48\" x2=\"274\" y2=\"48\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"76\" y1=\"30\" x2=\"76\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"66\" x2=\"274\" y2=\"66\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"94\" y1=\"30\" x2=\"94\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"84\" x2=\"274\" y2=\"84\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"112\" y1=\"30\" x2=\"112\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"102\" x2=\"274\" y2=\"102\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"120\" x2=\"274\" y2=\"120\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"148\" y1=\"30\" x2=\"148\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"138\" x2=\"274\" y2=\"138\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"166\" y1=\"30\" x2=\"166\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"156\" x2=\"274\" y2=\"156\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"184\" y1=\"30\" x2=\"184\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"174\" x2=\"274\" y2=\"174\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"202\" y1=\"30\" x2=\"202\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"192\" x2=\"274\" y2=\"192\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"220\" y1=\"30\" x2=\"220\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"210\" x2=\"274\" y2=\"210\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"238\" y1=\"30\" x2=\"238\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"228\" x2=\"274\" y2=\"228\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"256\" y1=\"30\" x2=\"256\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"246\" x2=\"274\" y2=\"246\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"274\" y1=\"30\" x2=\"274\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"264\" x2=\"274\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><rect x=\"41\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"121\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"121\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"157\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"157\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"31\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"247\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"49\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"229\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"67\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"211\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"85\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"193\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"103\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"175\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"121\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"157\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"157\" y1=\"20\" x2=\"157\" y2=\"274\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"30\" y1=\"147\" x2=\"284\" y2=\"147\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><text x=\"320\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">Symmetrieachsen (blau):</text><text x=\"320\" y=\"84\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">falte entlang einer Achse, und die</text><text x=\"320\" y=\"104\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">beiden Hälften passen aufeinander.</text><text x=\"320\" y=\"144\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">Drehung: Drehe um 90°</text><text x=\"320\" y=\"168\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">um die Mitte, und das</text><text x=\"320\" y=\"188\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">Muster bleibt gleich.</text><text x=\"320\" y=\"228\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">Jedes Kästchen = ein Kreuz-</text><text x=\"320\" y=\"248\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">stich auf dem Gewebe.</text></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Symmetrien im Körper und in der Natur",
      html: `<p>Fast alle Tiere haben eine <b>Bilateralsymmetrie</b> (eine Achse, die den Körper in rechts und links teilt), während erwachsene Seesterne eine Drehsymmetrie der Ordnung <b>5</b> haben. Schneeflocken haben eine Symmetrie der Ordnung <b>6</b>, die von der Form der Wassermoleküle herrührt, die sich im Eis zu Sechsecken verbinden.</p>
<p>Unser Gesicht ist allerdings nicht vollkommen symmetrisch: Wenn du ein Foto nimmst und ein Gesicht aus zwei linken Hälften zusammensetzt, wirkt es fast wie eine andere Person!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Felix Klein und die Geometrie der Abbildungen",
      html: `<p>Im Jahr <b>1872</b> stellte der deutsche Mathematiker <b>Felix Klein</b> mit 23 Jahren das <b>Erlanger Programm</b> vor: die Idee, dass man jede Geometrie durch die Abbildungen definieren kann, die bestimmte Eigenschaften <b>nicht</b> verändern. Die euklidische Geometrie untersucht, was bei Isometrien gleich bleibt (Längen, Winkel); die Geometrie der Ähnlichkeiten, was beim Vergrößern gleich bleibt (Winkel, Verhältnisse). Diese Idee liegt der modernen Physik zugrunde, auch der Relativitätstheorie Einsteins.</p>`
    },
    {
      type: "widget",
      title: "Ordne die Abbildungen ein",
      widget: "classify",
      options: {
        groups: ["Isometrie (gleiches Maß)", "Ähnlichkeit, keine Isometrie (Maß ändert sich)"],
        items: [
          ["🪞 Spiegelbild", 0],
          ["🎡 Gondel, die sich im Riesenrad dreht", 0],
          ["🛗 Aufzug, der hochfährt", 0],
          ["🗺️ Karte im Maßstab 1:100 000", 1],
          ["📷 Foto in größerem Format gedruckt", 1],
          ["🔍 Lupe", 1],
          ["🧩 Verschobenes Puzzleteil", 0],
          ["🏠 Modell eines Hauses", 1]
        ]
      },
      caption: "Frage dich immer: Bleiben die Längen gleich?"
    },
    {
      type: "conceptMap",
      title: "Landkarte der Abbildungen: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "trasf", label: "Abbildung", x: 50, y: 6, color: "#0ea5e9", html: "Regel, die jedem Punkt P einen einzigen Punkt P' zuordnet.", why: "Die Idee, Figuren durch Bewegungen zu untersuchen, geht auf Euklid zurück (um 300 v. Chr.), der die Gleichheit von Dreiecken bewies, indem er sie «aufeinanderlegte». Felix Klein stellte 1872 die Abbildungen ins Zentrum der gesamten Geometrie." },
        { id: "iso", label: "Isometrien", x: 25, y: 28, color: "#16a34a", html: "Abbildungen, die Längen und Winkel erhalten.", why: "Der Name kommt vom Griechischen isos (gleich) und metron (Maß). Wenn alle Abstände gleich bleiben, ist die Figur kongruent: Für Euklid sind zwei Figuren genau dann gleich, wenn man sie durch eine starre Bewegung zur Deckung bringen kann." },
        { id: "simil", label: "Ähnlichkeitsabbildungen", x: 75, y: 28, color: "#f59e0b", html: "Abbildungen, die die Form erhalten: gleiche Winkel, proportionale Seiten.", why: "Sie beruhen auf dem Strahlensatz des Thales (6. Jahrhundert v. Chr.): Parallele Geraden schneiden auf zwei Transversalen proportionale Strecken ab. Thales soll der Überlieferung nach so die Höhe der Pyramiden aus ihrem Schatten gemessen haben." },
        { id: "trasl", label: "Verschiebung", x: 8, y: 55, color: "#2563eb", html: "Verschiebung aller Punkte nach einem Vektor.", why: "Der Begriff des Vektors (Größe mit Betrag, Richtung und Orientierung) wurde im 19. Jahrhundert von Mathematikern wie Hamilton und Grassmann formalisiert, als sie Kräfte und Geschwindigkeiten in der Physik untersuchten." },
        { id: "rot", label: "Drehung", x: 28, y: 62, color: "#7c3aed", html: "Drehung um einen Winkel α um ein Zentrum O.", why: "Sie beruht auf dem Kreis: Jeder Punkt bleibt im selben Abstand von O. Der Drehsinn gegen den Uhrzeigersinn ist per Konvention positiv, dieselbe, die man in der Trigonometrie benutzt, um Winkel von der x-Achse aus zu messen." },
        { id: "simass", label: "Achsenspiegelung", x: 48, y: 50, color: "#15803d", html: "Umklappung an einer Geraden (Achse).", why: "Die Achse ist der Ort der Punkte, die von P und P' gleich weit entfernt sind, also die Mittelsenkrechte der Strecke PP'. Durch Verkettung von höchstens drei Achsenspiegelungen erhält man jede Isometrie der Ebene: Deshalb ist sie die grundlegende Abbildung." },
        { id: "simcen", label: "Punktspiegelung", x: 40, y: 82, color: "#be123c", html: "Jeder Punkt geht auf die andere Seite von O, im selben Abstand.", why: "O ist der Mittelpunkt von PP'. Sie entspricht einer Drehung um 180° und ist auch eine zentrische Streckung mit k = −1: Sie ist der Treffpunkt der beiden Familien von Abbildungen." },
        { id: "omot", label: "Zentrische Streckung (Faktor k)", x: 75, y: 58, color: "#ea580c", html: "Vergrößerung oder Verkleinerung von einem Zentrum O aus: OP' = k · OP.", why: "Sie ist das Prinzip der Lochkamera und des Projektors: Die Lichtstrahlen gehen von einem Punkt aus und entfernen sich geradlinig, sodass das Bild größer ist, je weiter die Leinwand entfernt ist." },
        { id: "aree", label: "Umfänge ×k, Flächeninhalte ×k²", x: 82, y: 85, color: "#a16207", html: "In ähnlichen Figuren ändert sich der Umfang um k, der Flächeninhalt um k², das Volumen um k³.", why: "Der Flächeninhalt ist ein Produkt aus zwei Längen, und jede wird mit k multipliziert: k · k = k². Aus demselben Grund bemerkte Galilei (1638), dass ein Riesentier nicht dieselben Proportionen haben kann wie ein kleines: Das Gewicht wächst wie k³, der Querschnitt der Knochen nur wie k²." }
      ],
      edges: [
        ["trasf", "iso", "erhält die Maße"],
        ["trasf", "simil", "erhält die Form"],
        ["iso", "trasl", ""],
        ["iso", "rot", ""],
        ["iso", "simass", ""],
        ["rot", "simcen", "um 180°"],
        ["simass", "simcen", "zwei Achsen ⊥"],
        ["simil", "omot", "wird konstruiert mit"],
        ["omot", "aree", "Auswirkungen auf"],
        ["omot", "simcen", "mit k = −1"]
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li><b>Isometrien</b>: Verschiebung (Vektor), Drehung (Zentrum, Winkel, Drehsinn), Achsenspiegelung (Achse), Punktspiegelung (Zentrum). Sie erhalten Längen und Winkel.</li>
<li>Verschiebung und Drehung erhalten den <b>Umlaufsinn</b>; die Achsenspiegelung <b>kehrt</b> ihn um.</li>
<li><b>Ähnlichkeit</b> mit dem Faktor k: gleiche Winkel, Seiten × k, Umfänge × k, Flächeninhalte × k².</li>
<li>Koordinaten: Verschiebung (x+a; y+b); Spiegelung an der x-Achse (x; −y); an der y-Achse (−x; y); Punktspiegelung an O (−x; −y); Drehung +90° (−y; x).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Ähnlichkeit",
      questions: [
        { type: "num", q: "Ein Dreieck hat den Umfang 15 cm. Ein ähnliches Dreieck hat den Ähnlichkeitsfaktor k = 3. Wie groß ist sein Umfang?", answer: 45, unit: "cm", explain: "Die Umfänge stehen im Verhältnis k: 15 × 3 = 45 cm." },
        { type: "num", q: "Ein Quadrat hat den Flächeninhalt 9 cm². Ich vergrößere es mit k = 2. Welchen Flächeninhalt hat die neue Figur?", answer: 36, unit: "cm²", explain: "Die Flächeninhalte stehen im Verhältnis k² = 4: 9 × 4 = 36 cm²." },
        { type: "tf", q: "Zwei ähnliche Figuren haben immer gleiche entsprechende Winkel.", answer: true, explain: "Die Ähnlichkeit erhält die Form, also die Winkel." }
      ]
    }
  ],
  glossary: [
    { t: "Geometrische Abbildung", d: "Regel, die jedem Punkt P der Ebene einen einzigen Punkt P' zuordnet." },
    { t: "Isometrie", d: "Abbildung, die die Abstände erhält: Die Figur bleibt kongruent." },
    { t: "Vektor", d: "Gerichtete Strecke mit Betrag, Richtung und Orientierung; beschreibt eine Verschiebung." },
    { t: "Drehzentrum", d: "Punkt, der bei einer Drehung fest bleibt." },
    { t: "Symmetrieachse", d: "Gerade, an der sich eine Figur in sich selbst umklappt." },
    { t: "Fixpunkt", d: "Punkt, der mit seinem Bildpunkt zusammenfällt." },
    { t: "Umlaufsinn", d: "Richtung (im oder gegen den Uhrzeigersinn), in der man die Ecken einer Figur liest." },
    { t: "Zentrische Streckung", d: "Abbildung, die Figuren von einem Zentrum aus mit dem Faktor k vergrößert oder verkleinert." },
    { t: "Ähnlichkeitsfaktor", d: "Zahl k, mit der alle Längen einer ähnlichen Figur multipliziert werden." },
    { t: "Kongruent", d: "Deckungsgleiche Figuren mit denselben Maßen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche davon ist KEINE Isometrie?", options: ["Verschiebung", "Zentrische Streckung mit k = 3", "Punktspiegelung", "Drehung um 45°"], answer: 1, explain: "Die Streckung mit k = 3 verdreifacht die Längen, erhält also die Abstände nicht." },
      { type: "mc", q: "Der Spiegelpunkt von P(3; −2) an der x-Achse ist …", options: ["(−3; −2)", "(3; 2)", "(−3; 2)", "(−2; 3)"], answer: 1, explain: "Bei der Spiegelung an der x-Achse bleibt x gleich und y wechselt das Vorzeichen." },
      { type: "mc", q: "Der Punkt Q(2; 5), um +90° um den Ursprung gedreht, wird zu …", options: ["(5; 2)", "(−5; 2)", "(5; −2)", "(−2; −5)"], answer: 1, explain: "Regel der Drehung um +90°: (x; y) → (−y; x) = (−5; 2)." },
      { type: "tf", q: "Die Achsenspiegelung erhält den Umlaufsinn der Figuren.", answer: false, explain: "Sie kehrt ihn um: Das ist der Spiegeleffekt, rechts wird links." },
      { type: "tf", q: "Eine Verschiebung hat keine Fixpunkte (wenn der Vektor nicht null ist).", answer: true, explain: "Alle Punkte bewegen sich um dieselbe Strecke: Keiner bleibt fest." },
      { type: "num", q: "Der Punkt A(−1; 4) wird mit dem Vektor v(5; −3) verschoben. Wie lautet die x-Koordinate von A'?", answer: 4, explain: "x' = −1 + 5 = 4 (und y' = 4 − 3 = 1)." },
      { type: "num", q: "Zwei ähnliche Rechtecke haben den Ähnlichkeitsfaktor k = 3. Das kleinere hat den Flächeninhalt 5 cm². Wie groß ist der Flächeninhalt des größeren?", answer: 45, unit: "cm²", explain: "Die Flächeninhalte stehen im Verhältnis k² = 9: 5 × 9 = 45 cm²." },
      { type: "num", q: "Wie viele Symmetrieachsen hat ein gleichseitiges Dreieck?", answer: 3, explain: "Jede Höhe (die zugleich Seitenhalbierende und Winkelhalbierende ist) ist eine Symmetrieachse." },
      { type: "text", q: "Wie heißt die Abbildung, die eine Figur von einem Zentrum O aus vergrößert oder verkleinert?", answer: ["zentrische Streckung", "die zentrische Streckung", "streckung", "omotetia"], explain: "Es ist die zentrische Streckung mit dem Faktor k." },
      { type: "mc", q: "Verkettet man zwei Achsenspiegelungen an parallelen Achsen mit 3 cm Abstand, erhält man …", options: ["eine Drehung um 3°", "eine Verschiebung um 6 cm", "eine Punktspiegelung", "eine Verschiebung um 3 cm"], answer: 1, explain: "Das Ergebnis ist eine Verschiebung senkrecht zu den Achsen, deren Betrag das Doppelte ihres Abstands ist: 2 × 3 = 6 cm." },
      { type: "order", q: "Ordne die Figuren von der kleinsten zur größten Zahl an Symmetrieachsen.", items: ["Ungleichseitiges Dreieck (0)", "Gleichschenkliges Dreieck (1)", "Rechteck (2)", "Quadrat (4)", "Kreis (unendlich viele)"], explain: "0, 1, 2, 4, unendlich viele." },
      { type: "mc", q: "Auf einer Karte im Maßstab 1:50 000 sind zwei Städte 6 cm voneinander entfernt. Wie weit sind sie in Wirklichkeit voneinander entfernt?", options: ["300 m", "3 km", "30 km", "50 km"], answer: 1, explain: "6 × 50 000 = 300 000 cm = 3000 m = 3 km." }
    ],
    gen: [["proportion", 2]]
  }
});
