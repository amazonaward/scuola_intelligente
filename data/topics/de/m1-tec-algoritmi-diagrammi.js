TOPIC('de', {
  id: `m1-tec-algoritmi-diagrammi`,
  title: `Algorithmen und Flussdiagramme`,
  intro: `Ein Rezept, die Lego-Anleitung, der Weg zur Schule: Das sind alles <b>Algorithmen</b>, also Folgen genauer Schritte, mit denen man ein Problem löst. Computer tun nichts anderes, als Algorithmen auszuführen, die Menschen geschrieben haben. In dieser Lektion lernen wir, sie zu <b>schreiben</b> und mit <b>Flussdiagrammen</b> zu <b>zeichnen</b>. Das ist der erste Schritt, um Programmierer zu werden. 🤖➡️🔷`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. Was ist ein Algorithmus?`,
      html: `<p>Ein <b>Algorithmus</b> ist eine <b>endliche Folge klarer Anweisungen</b>, die der Reihe nach ausgeführt ein Problem lösen.</p>
<p>Ein guter Algorithmus muss:</p>
<ul>
<li><b>endlich</b> sein: Er muss nach einer begrenzten Zahl von Schritten enden;</li>
<li><b>eindeutig</b> sein: Jede Anweisung lässt sich nur auf eine Weise verstehen („gib etwas Salz dazu“ ist mehrdeutig, „gib 5 g Salz dazu“ nicht);</li>
<li><b>ausführbar</b> sein: Wer ihn ausführt (Mensch oder Maschine), muss jeden Schritt tatsächlich machen können;</li>
<li><b>allgemein</b> sein: Er muss für alle Fälle derselben Art funktionieren, nicht nur für einen.</li>
</ul>
<p>Wer den Algorithmus ausführt, heißt <b>Ausführender</b>. Ein Computer ist ein blitzschneller Ausführender, aber <b>ohne Fantasie</b>: Er tut genau das, was geschrieben steht, auch wenn es falsch ist!</p>`
    },
    {
      type: `example`, title: `Praxisbeispiel: der Algorithmus für Tee`,
      html: `<ol>
<li>Fülle den Wasserkocher mit Wasser.</li>
<li>Schalte den Wasserkocher ein.</li>
<li><b>Solange</b> das Wasser nicht kocht, warte.</li>
<li>Lege den Teebeutel in die Tasse.</li>
<li>Gieße das Wasser in die Tasse.</li>
<li>Warte 3 Minuten und nimm den Beutel heraus.</li>
<li><b>Wenn</b> du den Tee süß möchtest, gib Zucker dazu; <b>sonst</b> gib nichts dazu.</li>
<li>Ende: Trink den Tee! 🍵</li>
</ol>
<p>Beachte drei Dinge: Die Schritte folgen in einer <b>Sequenz</b> aufeinander; bei Schritt 3 gibt es eine <b>Wiederholung</b> (warte, solange …); bei Schritt 7 gibt es eine <b>Auswahl</b> (wenn … sonst …). Das sind die drei „Bausteine“ jedes Algorithmus.</p>`
    },
    {
      type: `text`, title: `2. Die Symbole der Flussdiagramme`,
      html: `<p>Ein <b>Flussdiagramm</b> (englisch <i>flowchart</i>) zeichnet einen Algorithmus mit Blöcken verschiedener Formen, die durch <b>Pfeile</b> verbunden sind, welche die Reihenfolge anzeigen.</p>
<table>
<tr><th>Form</th><th>Name</th><th>Bedeutung</th></tr>
<tr><td>⬭ Oval</td><td><b>Start / Ende</b></td><td>wo der Algorithmus beginnt und wo er endet</td></tr>
<tr><td>▱ Parallelogramm</td><td><b>Eingabe / Ausgabe</b></td><td>einen Wert einlesen (Eingabe) oder ein Ergebnis anzeigen (Ausgabe)</td></tr>
<tr><td>▭ Rechteck</td><td><b>Verarbeitung</b></td><td>eine Aktion oder eine Rechnung (z. B. Summe ← a + b)</td></tr>
<tr><td>◇ Raute</td><td><b>Entscheidung</b></td><td>eine Frage mit der Antwort <b>ja / nein</b> (wahr / falsch): Hier gehen zwei Pfeile heraus</td></tr>
<tr><td>→ Pfeil</td><td><b>Fluss</b></td><td>zeigt den nächsten Schritt an</td></tr>
</table>
<p>Regeln: nur ein <b>Start</b>, mindestens ein <b>Ende</b>, jeder Block hat einen eingehenden und einen ausgehenden Pfeil (die Raute hat zwei ausgehende).</p>`
    },
    {
      type: `svg`, title: `Ein Flussdiagramm: gerade oder ungerade?`,
      caption: `Der Algorithmus liest eine Zahl N, prüft, ob der Rest der Division durch 2 gleich 0 ist, und schreibt „gerade“ oder „ungerade“.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="fa" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#334155"/></marker></defs>
<ellipse cx="300" cy="25" rx="60" ry="18" fill="#86efac" stroke="#166534" stroke-width="2"/>
<text x="300" y="31" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">START</text>
<line x1="300" y1="43" x2="300" y2="58" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<polygon points="250,62 370,62 350,96 230,96" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="300" y="85" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">lies N</text>
<line x1="300" y1="96" x2="300" y2="112" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<polygon points="300,116 385,150 300,184 215,150" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="148" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">Rest von</text>
<text x="300" y="166" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">N : 2 = 0 ?</text>
<line x1="215" y1="150" x2="140" y2="150" stroke="#334155" stroke-width="2"/>
<line x1="140" y1="150" x2="140" y2="198" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<text x="175" y="142" font-size="15" fill="#166534" font-weight="bold">JA</text>
<line x1="385" y1="150" x2="460" y2="150" stroke="#334155" stroke-width="2"/>
<line x1="460" y1="150" x2="460" y2="198" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<text x="410" y="142" font-size="15" fill="#b91c1c" font-weight="bold">NEIN</text>
<polygon points="85,202 215,202 195,236 65,236" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="140" y="225" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">schreibe „gerade“</text>
<polygon points="405,202 535,202 515,236 385,236" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="460" y="225" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">schreibe „ungerade“</text>
<line x1="140" y1="236" x2="140" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="460" y1="236" x2="460" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="140" y1="270" x2="236" y2="270" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<line x1="460" y1="270" x2="364" y2="270" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<ellipse cx="300" cy="275" rx="60" ry="18" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
<text x="300" y="281" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">ENDE</text>
</svg>`
    },
    {
      type: `widget`, title: `Erkenne die Blöcke`,
      widget: `labelDiagram`,
      caption: `Klicke auf jeden Block und wähle seinen Namen.`,
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<ellipse cx="100" cy="60" rx="70" ry="28" fill="#86efac" stroke="#166534" stroke-width="3"/>
<polygon points="250,35 390,35 360,85 220,85" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<rect x="430" y="35" width="140" height="50" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
<polygon points="200,150 280,195 200,240 120,195" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<line x1="340" y1="195" x2="440" y2="195" stroke="#334155" stroke-width="4"/>
<polygon points="440,185 460,195 440,205" fill="#334155"/>
</svg>`,
        spots: [
          { x: 100, y: 60, label: `Start / Ende` },
          { x: 305, y: 60, label: `Eingabe / Ausgabe` },
          { x: 500, y: 60, label: `Verarbeitung` },
          { x: 200, y: 195, label: `Entscheidung` },
          { x: 400, y: 195, label: `Flusspfeil` }
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-Quiz: die Blöcke`,
      questions: [
        { type: `mc`, q: `Welche Form benutzt man für eine Frage mit der Antwort ja / nein?`, options: [`Rechteck`, `Raute`, `Oval`], answer: 1, explain: `Die Raute ist der Entscheidungsblock: Aus ihr gehen zwei Pfeile heraus.` },
        { type: `mc`, q: `„Lies die Zahl N ein“ gehört in einen Block für …`, options: [`Eingabe / Ausgabe (Parallelogramm)`, `Start`, `Entscheidung`], answer: 0, explain: `Einen Wert einzulesen ist eine Eingabe.` },
        { type: `tf`, q: `„Gib etwas Mehl dazu“ ist eine eindeutige Anweisung.`, answer: false, explain: `„Etwas“ kann man auf viele Arten verstehen: Es braucht eine genaue Menge.` }
      ]
    },
    {
      type: `text`, title: `3. Die drei Grundstrukturen`,
      html: `<p>Jeder Algorithmus, auch der komplizierteste, lässt sich nur aus <b>drei Strukturen</b> zusammenbauen:</p>
<ol>
<li><b>Sequenz</b>: Anweisungen eine nach der anderen (erst A, dann B, dann C).</li>
<li><b>Selektion</b> (oder Auswahl): <b>WENN</b> eine Bedingung wahr ist, tu A, <b>SONST</b> tu B. Im Diagramm ist das die Raute mit zwei Wegen, die sich danach wieder vereinen.</li>
<li><b>Iteration</b> (oder Schleife, Wiederholung): <b>WIEDERHOLE</b> Anweisungen, solange eine Bedingung wahr ist, oder eine festgelegte Anzahl von Malen. Im Diagramm ist das ein Pfeil, der <b>zurückführt</b>.</li>
</ol>
<p>Das haben zwei italienische Informatiker bewiesen, <b>Corrado Böhm</b> und <b>Giuseppe Jacopini</b>, im Jahr <b>1966</b>: Es ist der <b>Satz von Böhm und Jacopini</b>, eine der Grundlagen der Programmierung.</p>
<p>⚠️ Vorsicht vor <b>Endlosschleifen</b>: Wenn die Bedingung zum Verlassen der Schleife nie wahr wird, hört der Algorithmus nie mehr auf!</p>`
    },
    {
      type: `svg`, title: `Sequenz, Selektion, Iteration`,
      caption: `Die drei „Bausteine“ der Programmierung: Mit ihnen baut man jeden beliebigen Algorithmus.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<defs><marker id="fb" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#334155"/></marker></defs>
<text x="100" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">SEQUENZ</text>
<rect x="50" y="50" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="76" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<line x1="100" y1="90" x2="100" y2="116" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<rect x="50" y="120" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="146" font-size="16" text-anchor="middle" fill="#3b0764">B</text>
<line x1="100" y1="160" x2="100" y2="186" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<rect x="50" y="190" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="216" font-size="16" text-anchor="middle" fill="#3b0764">C</text>
<text x="300" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">SELEKTION</text>
<polygon points="300,50 360,85 300,120 240,85" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="300" y="91" font-size="15" text-anchor="middle" fill="#713f12">Bed.?</text>
<line x1="240" y1="85" x2="225" y2="85" stroke="#334155" stroke-width="2"/><line x1="225" y1="85" x2="225" y2="146" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<line x1="360" y1="85" x2="375" y2="85" stroke="#334155" stroke-width="2"/><line x1="375" y1="85" x2="375" y2="146" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="222" y="75" font-size="13" text-anchor="end" fill="#166534" font-weight="bold">ja</text><text x="378" y="75" font-size="13" fill="#b91c1c" font-weight="bold">nein</text>
<rect x="190" y="150" width="70" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="225" y="176" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<rect x="340" y="150" width="70" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="375" y="176" font-size="16" text-anchor="middle" fill="#3b0764">B</text>
<path d="M225 190 L225 230 L300 230 M375 190 L375 230 L300 230" stroke="#334155" stroke-width="2" fill="none"/>
<line x1="300" y1="230" x2="300" y2="256" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="500" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">ITERATION</text>
<rect x="450" y="60" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="500" y="86" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<line x1="500" y1="100" x2="500" y2="126" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<polygon points="500,130 560,165 500,200 440,165" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="500" y="171" font-size="15" text-anchor="middle" fill="#713f12">fertig?</text>
<path d="M440 165 L420 165 L420 80 L446 80" stroke="#dc2626" stroke-width="2" fill="none" marker-end="url(#fb)"/>
<text x="415" y="125" font-size="13" text-anchor="end" fill="#b91c1c" font-weight="bold">nein</text>
<line x1="500" y1="200" x2="500" y2="246" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="510" y="230" font-size="13" fill="#166534" font-weight="bold">ja</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#334155">Satz von Böhm und Jacopini (1966)</text>
</svg>`
    },
    {
      type: `example`, title: `Praxisbeispiel: der euklidische Algorithmus für den ggT`,
      html: `<p>Einer der ältesten Algorithmen der Welt (um 300 v. Chr.) findet den <b>größten gemeinsamen Teiler</b> zweier Zahlen A und B:</p>
<ol>
<li><b>Start</b>: Lies A und B ein.</li>
<li><b>Solange</b> B ungleich 0 ist, wiederhole:
<ul><li>berechne R = Rest von A : B;</li><li>setze A ← B und B ← R.</li></ul></li>
<li>Schreibe A: Das ist der ggT. <b>Ende</b>.</li>
</ol>
<p><b>Probieren wir es mit A = 48 und B = 18:</b></p>
<table>
<tr><th>A</th><th>B</th><th>Rest A : B</th></tr>
<tr><td>48</td><td>18</td><td>12</td></tr>
<tr><td>18</td><td>12</td><td>6</td></tr>
<tr><td>12</td><td>6</td><td>0</td></tr>
<tr><td><b>6</b></td><td>0</td><td>Stopp!</td></tr>
</table>
<p>ggT(48, 18) = <b>6</b>. Der Algorithmus enthält eine <b>Sequenz</b>, eine <b>Schleife</b> und eine <b>Bedingung</b>.</p>`
    },
    {
      type: `example`, title: `Praxisbeispiel: die Straße überqueren`,
      html: `<p>Zeichne (in dein Heft) das Flussdiagramm dieses Algorithmus:</p>
<ol>
<li>Start.</li>
<li>Geh zum Zebrastreifen.</li>
<li>Ist die Fußgängerampel grün? <b>Nein</b> → warte und prüfe noch einmal (Schleife). <b>Ja</b> → geh weiter.</li>
<li>Schau nach links und rechts: Kommen Autos? <b>Ja</b> → warte und prüfe noch einmal. <b>Nein</b> → geh hinüber.</li>
<li>Ende.</li>
</ol>
<p>Es gibt <b>zwei Rauten</b>, jede mit einem Pfeil, der zurückführt: zwei „Warte, bis …“-Schleifen.</p>`
    },
    {
      type: `widget`, title: `Spiel: Sequenz, Selektion oder Iteration?`,
      widget: `classify`,
      caption: `Welche Struktur benutzt jede Anweisung?`,
      options: {
        groups: [`➡️ Sequenz`, `🔀 Selektion (wenn …)`, `🔁 Iteration (wiederhole …)`],
        items: [
          [`Öffne das Buch, lies dann die Seite`, 0], [`Schalte den PC ein, gib das Passwort ein`, 0], [`Zieh die Socken an und dann die Schuhe`, 0],
          [`Wenn es regnet, nimm den Regenschirm`, 1], [`Wenn die Note mindestens 4 ist, schreibe „bestanden“`, 1], [`Wenn du Hunger hast, iss einen Apfel`, 1],
          [`Rühre, bis sich der Zucker auflöst`, 2], [`Mach 10 Liegestütze`, 2], [`Wiederhole das Gedicht, bis du es kannst`, 2]
        ]
      }
    },
    {
      type: `curiosity`, title: `Wusstest du, dass … „Algorithmus“ vom Namen eines persischen Mathematikers kommt?`,
      html: `<p>Um das Jahr <b>820 n. Chr.</b> arbeitete in Bagdad, im „Haus der Weisheit“, der Mathematiker <b>Muhammad ibn Musa al-Chwarizmi</b>. Er schrieb ein Buch über das Rechnen mit den indischen Ziffern (unseren Ziffern 0–9). Als es ins Lateinische übersetzt wurde, wurde sein Name zu <i>Algoritmi</i>: „Dixit Algoritmi“ = „So sprach al-Chwarizmi“. Von ihm kommt auch das Wort <b>Algebra</b> (von <i>al-dschabr</i> im Titel eines anderen seiner Bücher). In Italien verbreitete <b>Fibonacci</b> die indisch-arabischen Ziffern im Jahr 1202.</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du, dass … die erste Programmiererin eine Frau aus dem 19. Jahrhundert war?`,
      html: `<p>Im Jahr <b>1843</b> schrieb die englische Mathematikerin <b>Ada Lovelace</b> einen Algorithmus, mit dem die <b>Analytical Engine</b> von Charles Babbage, eine nie fertiggestellte mechanische Rechenmaschine, die „Bernoulli-Zahlen“ berechnen sollte. Er gilt als das erste Programm der Geschichte! Ada ahnte auch, dass eine solche Maschine eines Tages Musik komponieren könnte. Die Programmiersprache <b>Ada</b> trägt ihren Namen.</p>`
    },
    {
      type: `alternatives`, title: `Andere Wege zum Verstehen`,
      intro: `Wenn dir Flussdiagramme kompliziert vorkommen, probiere diese Wege.`,
      tabs: [
        {
          label: `🤖 Der Menschen-Roboter (Coding unplugged)`,
          html: `<p>Spielt zu zweit: Einer ist der <b>Programmierer</b>, der andere der <b>Roboter</b>. Der Roboter kennt nur 4 Befehle: <b>VORWÄRTS</b> (ein Schritt), <b>NACH RECHTS DREHEN</b>, <b>NACH LINKS DREHEN</b>, <b>NEHMEN</b>.</p>
<p>Der Programmierer schreibt auf ein Blatt den Algorithmus, mit dem der Roboter bis zum Federmäppchen auf dem Lehrerpult kommt und es nimmt. Der Roboter führt <b>genau</b> das aus, was geschrieben steht, auch wenn er gegen die Wand läuft! 😄</p>
<p>In Italien wurde diese Art von Aktivität durch <b>CodyRoby</b> bekannt, erfunden von Professor Alessandro Bogliolo von der Universität Urbino, einem Förderer der Programmierwoche (<i>Code Week</i>).</p>`
        },
        {
          label: `🧩 Mit den Blöcken von Scratch`,
          html: `<p>In <b>Scratch</b> (2007 am MIT in Boston entwickelt) schreibt man keinen Code: Man steckt <b>bunte Blöcke</b> wie Bausteine zusammen.</p>
<ul>
<li>die Blöcke untereinander sind die <b>Sequenz</b>;</li>
<li>der Block <b>„falls … dann … sonst“</b> ist die Selektion (die Raute!);</li>
<li>die Blöcke <b>„wiederhole 10-mal“</b> und <b>„wiederhole bis“</b> sind die Iteration (der Pfeil, der zurückführt).</li>
</ul>
<p>Jedes Scratch-Programm lässt sich in ein Flussdiagramm verwandeln und umgekehrt!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="60" y="15" width="220" height="36" rx="16" fill="#facc15"/><text x="170" y="39" font-size="16" text-anchor="middle" fill="#422006" font-weight="bold">Wenn angeklickt 🏁</text>
<rect x="60" y="55" width="200" height="34" rx="6" fill="#f59e0b"/><text x="160" y="78" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">wiederhole 4-mal</text>
<rect x="60" y="89" width="20" height="80" fill="#f59e0b"/>
<rect x="80" y="95" width="180" height="32" rx="6" fill="#3b82f6"/><text x="170" y="117" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">gehe 100 Schritte</text>
<rect x="80" y="131" width="180" height="32" rx="6" fill="#3b82f6"/><text x="170" y="153" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">drehe dich um 90 Grad</text>
<rect x="60" y="169" width="200" height="22" rx="6" fill="#f59e0b"/>
<rect x="360" y="40" width="180" height="140" fill="none" stroke="#3b82f6" stroke-width="5"/>
<text x="450" y="210" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Ergebnis: ein Quadrat!</text>
</svg>`
        },
        {
          label: `🍝 Das Rezept der Oma`,
          html: `<p>Ein Rezept ist ein Algorithmus für Menschen:</p>
<ul>
<li>die <b>Zutaten</b> sind die <b>Eingaben</b>;</li>
<li>die <b>Schritte</b> („koche das Wasser“, „gib die Nudeln hinein“) sind die <b>Verarbeitungen</b>;</li>
<li>„<b>koste: wenn</b> es fade ist, gib Salz dazu“ ist eine <b>Selektion</b>;</li>
<li>„<b>rühre, bis</b> die Creme dick wird“ ist eine <b>Iteration</b>;</li>
<li>das <b>fertige Gericht</b> ist die <b>Ausgabe</b>.</li>
</ul>
<p>Aber die Oma schreibt „Salz nach Geschmack“: Für einen Computer wäre das eine <b>mehrdeutige</b> Anweisung!</p>`
        },
        {
          label: `🔢 Euklid mit Zahlen`,
          html: `<p>Versuche selbst, den euklidischen Algorithmus wie ein Computer auszuführen, mit Divisionen mit Rest. Auf dem Zahlenstrahl siehst du die „Sprünge“ von 18 in 48: Zwei Sprünge führen zu 36, der Rest ist 12. Dann macht man mit 18 und 12 weiter …</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 50, step: 2, marks: [18, 36, 48] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Landkarte: vom Algorithmus zum Programm`,
      nodes: [
        { id: `prob`, label: `Problem`, x: 50, y: 6, color: `#ef4444`, html: `Eine Situation, die gelöst werden soll.`, why: `Jeder Algorithmus entsteht aus einem Problem: rechnen, ordnen, suchen, entscheiden. Der erste Schritt ist, es zu <b>analysieren</b>: Welche Daten habe ich (Eingabe)? Was will ich erreichen (Ausgabe)?` },
        { id: `alg`, label: `Algorithmus`, x: 50, y: 28, color: `#3b82f6`, html: `Endliche Folge eindeutiger Anweisungen.`, why: `Das Wort kommt von <b>al-Chwarizmi</b> (9. Jahrhundert). Aber Algorithmen sind älter: Die Babylonier hatten Rechenverfahren auf Tontafeln (um 1800 v. Chr.), und Euklid beschrieb das für den ggT um 300 v. Chr.` },
        { id: `prop`, label: `Eigenschaften`, x: 15, y: 28, color: `#0ea5e9`, html: `Endlich, eindeutig, ausführbar, allgemein.`, why: `Im Jahr <b>1936</b> gab der englische Mathematiker <b>Alan Turing</b> eine genaue Definition von „einer Prozedur, die eine Maschine ausführen kann“ (die Turingmaschine): Sie ist die theoretische Grundlage der Computer.` },
        { id: `fc`, label: `Flussdiagramm`, x: 22, y: 58, color: `#f59e0b`, html: `Grafische Darstellung mit Blöcken und Pfeilen.`, why: `Die ersten „flow process charts“ stellten die Ingenieure <b>Frank und Lillian Gilbreth</b> 1921 vor, um die Arbeit in Fabriken zu organisieren. 1947 benutzten <b>Goldstine und von Neumann</b> sie für die Programme der ersten Computer.` },
        { id: `pseudo`, label: `Pseudocode`, x: 50, y: 58, color: `#a855f7`, html: `Der Algorithmus in einfachen, strukturierten Worten (WENN…DANN, WIEDERHOLE…).`, why: `Er liegt zwischen der menschlichen Sprache und der Programmiersprache: So kann man über den Algorithmus nachdenken, ohne sich um die Syntax zu sorgen.` },
        { id: `strutt`, label: `Sequenz, Selektion, Iteration`, x: 82, y: 40, color: `#22c55e`, html: `Die drei Grundstrukturen.`, why: `Der <b>Satz von Böhm und Jacopini</b> (1966) beweist, dass diese drei Strukturen genügen, um jeden Algorithmus zu schreiben. Daraus entsteht die „strukturierte Programmierung“.` },
        { id: `prog`, label: `Programm`, x: 78, y: 78, color: `#14b8a6`, html: `Der Algorithmus, übersetzt in eine Sprache für den Computer.`, why: `Programmiersprachen (Scratch, Python, JavaScript …) übersetzen Algorithmen in Anweisungen, die der Prozessor versteht. Das erste Programm wird <b>Ada Lovelace</b> (1843) zugeschrieben.` },
        { id: `ese`, label: `Ausführender`, x: 40, y: 88, color: `#64748b`, html: `Wer ausführt: Mensch, Roboter, Computer.`, why: `Der Ausführende muss jede Anweisung kennen. Deshalb muss ein Algorithmus für einen Computer viel genauer sein als einer für einen Menschen, der den gesunden Menschenverstand benutzt.` }
      ],
      edges: [
        [`prob`, `alg`, `wird gelöst mit`], [`alg`, `prop`, `muss haben`], [`alg`, `fc`, `wird gezeichnet als`], [`alg`, `pseudo`, `wird geschrieben in`],
        [`alg`, `strutt`, `besteht aus`], [`pseudo`, `prog`, `wird übersetzt in`], [`fc`, `ese`, `leitet an`], [`prog`, `ese`, `ausgeführt von`]
      ]
    },
    {
      type: `quiz`, title: `Mini-Quiz: Strukturen und Schleifen`,
      questions: [
        { type: `mc`, q: `„Wiederhole, bis die Flasche voll ist“ ist ein Beispiel für …`, options: [`Sequenz`, `Selektion`, `Iteration`], answer: 2, explain: `Das ist eine Schleife: Man wiederholt, bis sich die Bedingung ändert.` },
        { type: `num`, q: `Wie groß ist der ggT von 30 und 12 mit dem euklidischen Algorithmus?`, answer: 6, tol: 0, explain: `30 : 12 Rest 6; 12 : 6 Rest 0 → ggT = 6.` },
        { type: `mc`, q: `Wer bewies, dass Sequenz, Selektion und Iteration genügen?`, options: [`Böhm und Jacopini`, `Euklid`, `Ada Lovelace`], answer: 0, explain: `Corrado Böhm und Giuseppe Jacopini, 1966.` }
      ]
    }
  ],
  glossary: [
    { t: `Algorithmus`, d: `Endliche Folge eindeutiger Anweisungen, die ein Problem löst.` },
    { t: `Ausführender`, d: `Wer (oder was) den Algorithmus ausführt: Mensch, Roboter, Computer.` },
    { t: `Flussdiagramm`, d: `Zeichnung eines Algorithmus mit Blöcken (Oval, Parallelogramm, Rechteck, Raute) und Pfeilen.` },
    { t: `Eingabe / Ausgabe`, d: `Daten, die hineingehen / Ergebnisse, die herauskommen.` },
    { t: `Sequenz`, d: `Anweisungen, die eine nach der anderen ausgeführt werden.` },
    { t: `Selektion`, d: `Auswahl zwischen zwei Wegen aufgrund einer Bedingung (wenn … sonst …).` },
    { t: `Iteration (Schleife)`, d: `Wiederholung von Anweisungen eine bestimmte Anzahl von Malen oder solange eine Bedingung gilt.` },
    { t: `Endlosschleife`, d: `Schleife, die nie endet, weil die Bedingung zum Verlassen nie eintritt.` },
    { t: `Pseudocode`, d: `Algorithmus, geschrieben in einfacher, strukturierter Sprache.` },
    { t: `Coding`, d: `Programmieren: Anweisungen für einen Computer schreiben.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Welche ist KEINE Eigenschaft eines Algorithmus?`, options: [`endlich`, `mehrdeutig`, `ausführbar`], answer: 1, explain: `Ein Algorithmus muss eindeutig sein, also NICHT mehrdeutig.` },
      { type: `mc`, q: `Im Flussdiagramm steht das Oval für …`, options: [`Start und Ende`, `eine Entscheidung`, `eine Rechnung`], answer: 0, explain: `Oval = Start / Ende.` },
      { type: `mc`, q: `Aus einer Entscheidungsraute gehen …`, options: [`ein Pfeil`, `zwei Pfeile (ja / nein)`, `kein Pfeil`], answer: 1, explain: `Einer für das Ja, einer für das Nein.` },
      { type: `tf`, q: `„Summe ← A + B“ gehört in ein Verarbeitungsrechteck.`, answer: true, explain: `Das ist eine Rechnung: Rechteck.` },
      { type: `order`, q: `Bring den Algorithmus zum Zähneputzen in die richtige Reihenfolge.`, items: [`Nimm die Zahnbürste`, `Gib Zahnpasta darauf`, `Putze die Zähne 2 Minuten lang`, `Spül den Mund aus`, `Wasch die Zahnbürste aus`], explain: `Zuerst bereitet man die Zahnbürste vor, dann putzt man, am Ende spült man aus und wäscht die Zahnbürste aus.` },
      { type: `mc`, q: `„Wenn die Temperatur über 25 °C steigt, schalte den Ventilator ein“ ist …`, options: [`eine Sequenz`, `eine Selektion`, `eine Schleife`], answer: 1, explain: `Es gibt eine Bedingung mit einer Auswahl: Selektion.` },
      { type: `text`, q: `Wie nennt man eine Schleife, die nie endet?`, answer: [`Endlosschleife`, `endlosschleife`, `Endlos-Schleife`, `unendliche Schleife`, `Loop`, `Endlosloop`], explain: `Endlosschleife (oder unendliche Schleife, Endlos-Loop).` },
      { type: `num`, q: `Benutze den euklidischen Algorithmus: ggT von 84 und 36?`, answer: 12, tol: 0, explain: `84 : 36 Rest 12; 36 : 12 Rest 0 → ggT = 12.` },
      { type: `mc`, q: `Das Wort „Algorithmus“ stammt von …`, options: [`einem persischen Mathematiker, al-Chwarizmi`, `einem griechischen Wort, das Zahl bedeutet`, `dem Namen eines Computers`], answer: 0, explain: `Vom lateinischen „Algoritmi“, dem Namen von al-Chwarizmi (9. Jahrhundert).` },
      { type: `tf`, q: `Ein Computer versteht mehrdeutige Anweisungen mit gesundem Menschenverstand.`, answer: false, explain: `Der Computer führt wörtlich aus: Die Anweisungen müssen genau sein.` },
      { type: `mc`, q: `Ein Algorithmus liest eine Zahl ein und wiederholt „schreibe hallo“ so oft. Wenn die Eingabe 3 ist, wie oft schreibt er „hallo“?`, options: [`1`, `3`, `unendlich oft`], answer: 1, explain: `Die Schleife wird 3-mal wiederholt.` },
      { type: `mc`, q: `Wer gilt als die erste Programmiererin der Geschichte?`, options: [`Marie Curie`, `Ada Lovelace`, `Rita Levi-Montalcini`], answer: 1, explain: `Ada Lovelace, 1843.` }
    ],
    gen: [[`gcd`, 2]]
  }
});
