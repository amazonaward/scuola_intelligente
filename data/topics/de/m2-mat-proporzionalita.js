TOPIC('de', {
  id: "m2-mat-proporzionalita",
  title: "Direkte und umgekehrte Proportionalität",
  intro: "Wenn du doppelt so viele Hefte kaufst, gibst du doppelt so viel aus. Wenn dagegen doppelt so viele Leute eine Pizza teilen, isst jeder die Hälfte. Im ersten Fall gibt es <b>direkte Proportionalität</b>, im zweiten <b>umgekehrte Proportionalität</b>. Wir lernen, sie mit <b>Tabellen</b>, <b>Formeln</b> und <b>Graphen</b> zu erkennen und mit ihnen Aufgaben zu lösen.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Konstante und veränderliche Größen",
      html: `<p>Eine <b>Größe</b> ist etwas, das man messen kann. In einer Aufgabe bleiben manche Größen <b>konstant</b> (der Preis eines Heftes), andere <b>verändern</b> sich (wie viele Hefte du kaufst, wie viel du ausgibst).</p>
<p>Wenn zwei veränderliche Größen <b>x</b> und <b>y</b> miteinander verbunden sind (wenn sich die eine ändert, ändert sich auch die andere), sagt man, dass <b>y von x abhängt</b>, oder dass y eine <b>Funktion</b> von x ist. Die einfachsten Arten der Abhängigkeit sind zwei: die <b>direkte Proportionalität</b> und die <b>umgekehrte Proportionalität</b>.</p>`
    },
    {
      type: "text",
      title: "Die direkte Proportionalität",
      html: `<p>Zwei Größen sind <b>direkt proportional</b>, wenn ihr <b>Verhältnis konstant</b> ist:</p>
<p style="text-align:center;font-size:1.3em"><b>y / x = k</b> &nbsp;&nbsp; also &nbsp;&nbsp; <b>y = k · x</b></p>
<p>Die Zahl <b>k</b> heißt <b>Proportionalitätsfaktor</b> (<i>costante di proporzionalità</i>).</p>
<p>Beispiel: Ein Heft kostet <b>2 €</b>.</p>
<table>
<tr><th>Hefte (x)</th><td>1</td><td>2</td><td>3</td><td>5</td><td>10</td></tr>
<tr><th>Ausgabe in € (y)</th><td>2</td><td>4</td><td>6</td><td>10</td><td>20</td></tr>
<tr><th>y / x</th><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
</table>
<p><b>Wie man sie erkennt</b>: Wenn sich x <b>verdoppelt</b>, verdoppelt sich auch y; wenn sich x <b>verdreifacht</b>, verdreifacht sich y; wenn sich x halbiert, halbiert sich y. Und wenn x = 0, ist auch y = 0.</p>
<p><b>Achtung</b>: «Sie wachsen zusammen» genügt nicht! Alter und Körpergröße eines Kindes wachsen zusammen, aber mit 10 Jahren bist du nicht doppelt so groß wie mit 5.</p>`
    },
    {
      type: "svg",
      title: "Der Graph der direkten Proportionalität",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<g stroke="#bbf7d0" stroke-width="1">
<line x1="60" y1="40" x2="60" y2="280"/><line x1="110" y1="40" x2="110" y2="280"/><line x1="160" y1="40" x2="160" y2="280"/><line x1="210" y1="40" x2="210" y2="280"/><line x1="260" y1="40" x2="260" y2="280"/><line x1="310" y1="40" x2="310" y2="280"/>
<line x1="60" y1="280" x2="330" y2="280"/><line x1="60" y1="240" x2="330" y2="240"/><line x1="60" y1="200" x2="330" y2="200"/><line x1="60" y1="160" x2="330" y2="160"/><line x1="60" y1="120" x2="330" y2="120"/><line x1="60" y1="80" x2="330" y2="80"/><line x1="60" y1="40" x2="330" y2="40"/>
</g>
<line x1="60" y1="290" x2="60" y2="30" stroke="#14532d" stroke-width="3"/>
<line x1="50" y1="280" x2="340" y2="280" stroke="#14532d" stroke-width="3"/>
<line x1="60" y1="280" x2="310" y2="80" stroke="#16a34a" stroke-width="5"/>
<circle cx="110" cy="240" r="7" fill="#dc2626"/><circle cx="160" cy="200" r="7" fill="#dc2626"/><circle cx="210" cy="160" r="7" fill="#dc2626"/><circle cx="260" cy="120" r="7" fill="#dc2626"/><circle cx="310" cy="80" r="7" fill="#dc2626"/>
<text x="110" y="302" font-size="14" text-anchor="middle">1</text><text x="160" y="302" font-size="14" text-anchor="middle">2</text><text x="210" y="302" font-size="14" text-anchor="middle">3</text><text x="260" y="302" font-size="14" text-anchor="middle">4</text><text x="310" y="302" font-size="14" text-anchor="middle">5</text>
<text x="45" y="245" font-size="14" text-anchor="end">2</text><text x="45" y="205" font-size="14" text-anchor="end">4</text><text x="45" y="165" font-size="14" text-anchor="end">6</text><text x="45" y="125" font-size="14" text-anchor="end">8</text><text x="45" y="85" font-size="14" text-anchor="end">10</text>
<text x="345" y="290" font-size="16" font-weight="bold">x</text><text x="68" y="30" font-size="16" font-weight="bold">y</text>
<text x="370" y="90" font-size="22" fill="#15803d" font-weight="bold">y = 2x</text>
<text x="370" y="130" font-size="16" fill="#14532d">• ist eine Gerade</text>
<text x="370" y="158" font-size="16" fill="#14532d">• geht durch den Ursprung (0;0)</text>
<text x="370" y="186" font-size="16" fill="#14532d">• je größer k,</text>
<text x="370" y="208" font-size="16" fill="#14532d">  desto steiler die Gerade</text>
</svg>`,
      caption: "Der Graph einer direkten Proportionalität ist eine Halbgerade (oder Gerade) durch den Ursprung des Koordinatensystems."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die direkte",
      questions: [
        { type: "tf", q: "Der Umfang eines Quadrats ist direkt proportional zur Seite.", answer: true, explain: "U = 4 · a: Das Verhältnis U/a ist immer 4." },
        { type: "mc", q: "Wenn y = 5x und x = 7, wie groß ist y?", options: ["12", "35", "1,4"], answer: 1, explain: "5 × 7 = 35." },
        { type: "tf", q: "Der Flächeninhalt eines Quadrats ist direkt proportional zur Seite.", answer: false, explain: "A = a²: Wenn sich die Seite verdoppelt, vervierfacht sich der Flächeninhalt, das Verhältnis A/a ist nicht konstant." }
      ]
    },
    {
      type: "text",
      title: "Die umgekehrte Proportionalität",
      html: `<p>Zwei Größen sind <b>umgekehrt proportional</b>, wenn ihr <b>Produkt konstant</b> ist:</p>
<p style="text-align:center;font-size:1.3em"><b>x · y = k</b> &nbsp;&nbsp; also &nbsp;&nbsp; <b>y = k / x</b></p>
<p>Beispiel: eine Reise von <b>120 km</b>. Je schneller du fährst, desto weniger Zeit brauchst du.</p>
<table>
<tr><th>Geschwindigkeit km/h (x)</th><td>20</td><td>30</td><td>40</td><td>60</td><td>120</td></tr>
<tr><th>Zeit in h (y)</th><td>6</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>
<tr><th>x · y</th><td>120</td><td>120</td><td>120</td><td>120</td><td>120</td></tr>
</table>
<p><b>Wie man sie erkennt</b>: Wenn sich x <b>verdoppelt</b>, <b>halbiert</b> sich y; wenn sich x verdreifacht, wird y ein Drittel. x und y können nie 0 sein.</p>
<p><b>Achtung</b>: «Die eine wächst und die andere nimmt ab» genügt nicht! Wenn du 10 € hast und ausgibst, nimmt das übrige Geld ab, aber 10 − Ausgabe ist kein konstantes Produkt: Das ist keine umgekehrte Proportionalität.</p>`
    },
    {
      type: "svg",
      title: "Der Graph der umgekehrten Proportionalität",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#eff6ff"/>
<line x1="60" y1="290" x2="60" y2="20" stroke="#1e3a8a" stroke-width="3"/>
<line x1="50" y1="280" x2="360" y2="280" stroke="#1e3a8a" stroke-width="3"/>
<path d="M88 52 L100 120 L120 173 L140 200 L180 227 L220 240 L260 248 L300 253 L345 257" fill="none" stroke="#2563eb" stroke-width="5" stroke-linejoin="round"/>
<circle cx="100" cy="120" r="7" fill="#dc2626"/><circle cx="140" cy="200" r="7" fill="#dc2626"/><circle cx="220" cy="240" r="7" fill="#dc2626"/>
<rect x="60" y="120" width="40" height="160" fill="#f59e0b" opacity="0.25"/>
<rect x="60" y="240" width="160" height="40" fill="#10b981" opacity="0.25"/>
<text x="100" y="302" font-size="14" text-anchor="middle">1</text><text x="140" y="302" font-size="14" text-anchor="middle">2</text><text x="220" y="302" font-size="14" text-anchor="middle">4</text>
<text x="45" y="125" font-size="14" text-anchor="end">4</text><text x="45" y="205" font-size="14" text-anchor="end">2</text><text x="45" y="245" font-size="14" text-anchor="end">1</text>
<text x="365" y="290" font-size="16" font-weight="bold">x</text><text x="68" y="20" font-size="16" font-weight="bold">y</text>
<text x="390" y="80" font-size="22" fill="#1d4ed8" font-weight="bold">x · y = 4</text>
<text x="390" y="118" font-size="16" fill="#1e3a8a">• ist ein Ast einer</text>
<text x="390" y="140" font-size="16" fill="#1e3a8a">  gleichseitigen Hyperbel</text>
<text x="390" y="168" font-size="16" fill="#1e3a8a">• berührt nie die Achsen</text>
<text x="390" y="196" font-size="16" fill="#1e3a8a">• die farbigen Rechtecke</text>
<text x="390" y="218" font-size="16" fill="#1e3a8a">  haben denselben Flächeninhalt (k)</text>
</svg>`,
      caption: "Der Graph ist eine Kurve namens gleichseitige Hyperbel: Sie nähert sich den Achsen, ohne sie je zu berühren."
    },
    {
      type: "widget",
      title: "Rechtecke mit demselben Flächeninhalt",
      widget: "areaGrid",
      options: { w: 6, h: 2, max: 12 },
      caption: "Versuche, alle Rechtecke mit dem Flächeninhalt 12 zu bauen: 1 × 12, 2 × 6, 3 × 4, 4 × 3, 6 × 2, 12 × 1. Grundseite und Höhe sind umgekehrt proportional!"
    },
    {
      type: "example",
      title: "Praxisbeispiel: direkt oder umgekehrt?",
      html: `<ul>
<li><b>Benzin und Kilometer</b>: Ein Auto fährt mit 1 Liter 20 km. Liter und km sind <b>direkt</b> proportional (k = 20 km/l): Mit 35 Litern fährt es 700 km.</li>
<li><b>Arbeiter und Tage</b>: 6 Arbeiter bauen eine Mauer in 10 Tagen. Arbeiter und Tage sind <b>umgekehrt</b> proportional (k = 60 «Arbeitertage»): 12 Arbeiter brauchen 60 : 12 = <b>5 Tage</b>; 4 Arbeiter 60 : 4 = <b>15 Tage</b>.</li>
<li><b>Zutaten und Personen</b>: direkt. <b>Pizzastücke und Freunde</b> (feste Pizza): umgekehrt.</li>
<li><b>Alter und Schuhgröße</b>: weder das eine noch das andere!</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: eine Aufgabe in drei Schritten lösen",
      html: `<p><i>Um ein Schwimmbecken zu füllen, braucht man mit 3 gleichen Pumpen 8 Stunden. Wie lange braucht man mit 4 Pumpen?</i></p>
<ol>
<li><b>Ich erkenne</b>: mehr Pumpen → weniger Zeit; mit doppelt so vielen Pumpen halbiert sich die Zeit → <b>umgekehrt</b>.</li>
<li><b>Ich finde k</b>: k = 3 × 8 = 24 («Pumpenstunden»).</li>
<li><b>Ich rechne</b>: Zeit = 24 : 4 = <b>6 Stunden</b>.</li>
</ol>
<p>Mit einer Proportion: Bei der umgekehrten schreibt man sie, indem man ein Verhältnis <b>umkehrt</b>: 3 : 4 = x : 8 → x = 3 × 8 : 4 = 6. ✓</p>`
    },
    {
      type: "widget",
      title: "Direkt oder umgekehrt?",
      widget: "classify",
      options: {
        groups: ["📈 Direkt (y/x konstant)", "📉 Umgekehrt (x·y konstant)", "🚫 Keine von beiden"],
        items: [
          ["Kilo Äpfel und bezahlter Preis", 0], ["Seite des Quadrats und Umfang", 0], ["Arbeitsstunden und Lohn (Stundenlohn)", 0],
          ["Geschwindigkeit und Zeit für 100 km", 1], ["Zahl der Freunde und Tortenstücke pro Person", 1], ["Arbeiter und Tage für eine Arbeit", 1],
          ["Alter und Körpergröße", 2], ["Seite des Quadrats und Flächeninhalt", 2], ["Ausgegebenes Geld und übriges Geld", 2]
        ]
      },
      caption: "Prüfe immer: Wenn sich x verdoppelt, verdoppelt sich y (direkt), halbiert sich y (umgekehrt) oder passiert etwas anderes?"
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Das Gesetz von Boyle",
      html: `<p>Im Jahr <b>1662</b> entdeckte der irische Chemiker <b>Robert Boyle</b>, dass bei konstanter Temperatur der <b>Druck</b> und das <b>Volumen</b> eines Gases <b>umgekehrt proportional</b> sind: p · V = konstant. Wenn du eine verschlossene Spritze auf das halbe Volumen zusammendrückst, verdoppelt sich der Druck der Luft darin. Deshalb «gehen die Ohren zu» im Flugzeug oder unter Wasser!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Das Gesetz von Hooke",
      html: `<p>Im Jahr <b>1678</b> veröffentlichte <b>Robert Hooke</b> sein Gesetz: Die <b>Dehnung</b> einer Feder ist <b>direkt proportional</b> zur Kraft, die an ihr zieht (solange man sie nicht verformt). Das ist das Prinzip des <b>Federkraftmessers</b> und der alten Federwaagen: Wenn du ein doppelt so schweres Gewicht aufhängst, dehnt sich die Feder doppelt so weit. Hooke gab das Gesetz zuerst als lateinisches Anagramm bekannt, «ceiiinosssttuv», damit ihm niemand die Idee stahl: Es bedeutet <i>ut tensio, sic vis</i>, «wie die Dehnung, so die Kraft».</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Proportionalität zu verstehen",
      intro: "Wenn dich die Formeln nicht überzeugen, versuche, die Proportionalität auf andere Weise zu sehen.",
      tabs: [
        {
          label: "🧊 Dieselben Würfelchen",
          html: `<p>Hier sind <b>12 Würfelchen</b> in 3 Reihen zu je 4. Bewege die Regler und versuche, sie <b>ohne Hinzufügen oder Wegnehmen</b> anders anzuordnen: 2 Reihen zu 6, 4 Reihen zu 3, 6 Reihen zu 2 … Die Zahl der Reihen und die Würfelchen pro Reihe sind <b>umgekehrt proportional</b> (das Produkt bleibt 12). Wenn du dagegen Reihen zu je 4 Würfelchen hinzufügst, wächst die Gesamtzahl <b>direkt</b>: 1 Reihe = 4, 2 Reihen = 8, 3 Reihen = 12.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "🇳🇱 Niederländische Verhältnistabelle",
          html: `<p>In niederländischen Schulen (Methode der <b>realistischen Mathematik</b>) benutzt man die <b>verhoudingstabel</b>, die «Verhältnistabelle»: Man schreibt die Paare in Spalten und führt einfache Rechnungen <b>in beiden Zeilen</b> aus.</p>
<table>
<tr><th>Hefte</th><td>4</td><td>2</td><td>1</td><td>10</td></tr>
<tr><th>€</th><td>8</td><td>4</td><td>2</td><td>20</td></tr>
<tr><td></td><td></td><td>:2</td><td>:2</td><td>×10</td></tr>
</table>
<p>Bei der direkten macht man <b>dieselbe Rechnung</b> oben und unten. Bei der umgekehrten macht man die <b>entgegengesetzte</b>: Wenn du oben mit 2 multiplizierst, teilst du unten durch 2.</p>`
        },
        {
          label: "🚲 Die Fahrrad-Analogie",
          html: `<p>Tritt in gleichmäßigem Tempo: Je <b>mehr Zeit</b> du fährst, desto <b>mehr Strecke</b> schaffst du → direkt (die Konstante ist die Geschwindigkeit).</p>
<p>Jetzt musst du eine feste Strecke von 30 km fahren: Je <b>schneller</b> du fährst, desto <b>weniger Zeit</b> brauchst du → umgekehrt (die Konstante ist die Entfernung).</p>
<p>Dasselbe Trio <b>Strecke = Geschwindigkeit × Zeit</b> ergibt eine direkte oder eine umgekehrte Proportionalität, je nachdem, <b>welche Größe du festhältst</b>!</p>`
        },
        {
          label: "📊 Die beiden Graphen im Vergleich",
          html: `<p>Sieh dir die beiden Formen an: Die direkte ist eine <b>Gerade, die im Ursprung beginnt</b>; die umgekehrte ist eine <b>fallende Kurve</b>, die sich den Achsen nähert. Wenn du eine Gerade siehst, die nicht durch den Ursprung geht, ist es keine direkte Proportionalität!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<line x1="40" y1="230" x2="40" y2="20" stroke="#334155" stroke-width="3"/><line x1="30" y1="220" x2="270" y2="220" stroke="#334155" stroke-width="3"/>
<line x1="40" y1="220" x2="250" y2="40" stroke="#16a34a" stroke-width="5"/>
<text x="150" y="250" font-size="17" text-anchor="middle" fill="#15803d" font-weight="bold">DIREKT: y = kx</text>
<line x1="330" y1="230" x2="330" y2="20" stroke="#334155" stroke-width="3"/><line x1="320" y1="220" x2="570" y2="220" stroke="#334155" stroke-width="3"/>
<path d="M345 30 Q360 160 400 180 Q460 205 560 210" fill="none" stroke="#2563eb" stroke-width="5"/>
<text x="450" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">UMGEKEHRT: y = k/x</text>
</svg>`
        },
        {
          label: "🇸🇬 Das Streifenmodell (Singapur)",
          html: "<p>In <b>Singapur</b>, einem der Länder mit den besten Mathematikergebnissen, löst man Verhältnisaufgaben, indem man <b>Streifen aus lauter gleichen Blöcken</b> zeichnet (das <b>bar model</b>). Das Verhältnis 3 : 2 heißt einfach «3 Blöcke gegen 2 Blöcke».</p><p><b>Aufgabe 1</b>: In einem Kuchen stehen Mehl und Zucker im Verhältnis <b>3 : 2</b>. Wenn ich 450 g Mehl benutze, wie viel Zucker brauche ich?</p><ol><li>Zeichne das Mehl mit <b>3 Blöcken</b> und den Zucker mit <b>2 Blöcken</b> gleicher Größe.</li><li>3 Blöcke = 450 g → 1 Block = 450 : 3 = <b>150 g</b>.</li><li>Zucker = 2 Blöcke = <b>300 g</b>.</li></ol><p><b>Aufgabe 2</b>: Anna und Luca teilen sich 45 € im Verhältnis <b>2 : 3</b>.</p><ol><li>Insgesamt gibt es 2 + 3 = <b>5 Blöcke</b> = 45 €.</li><li>1 Block = 45 : 5 = <b>9 €</b>.</li><li>Anna = 2 × 9 = <b>18 €</b>, Luca = 3 × 9 = <b>27 €</b>. Kontrolle: 18 + 27 = 45 ✔</li></ol><p>Das Geheimnis der direkten Proportionalität ist genau dies: <b>Die Blöcke sind alle gleich</b>. Wenn du das Mehl verdoppelst, verdoppelt sich der Block und damit auch der Zucker.</p>",
          svg: "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f8fafc\"/><text x=\"20\" y=\"40\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Mehl</text><rect x=\"110\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"180\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"250\" y=\"18\" width=\"70\" height=\"36\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"20\" y=\"98\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Zucker</text><rect x=\"110\" y=\"76\" width=\"70\" height=\"36\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"180\" y=\"76\" width=\"70\" height=\"36\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M110,10 Q215,-6 320,10\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"330\" y=\"42\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" font-weight=\"bold\">= 450 g → 1 Block = 150 g</text><text x=\"260\" y=\"100\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e3a8a\" font-weight=\"bold\">→ Zucker = 2 × 150 = 300 g</text><line x1=\"20\" y1=\"140\" x2=\"580\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"20\" y=\"190\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Anna</text><rect x=\"110\" y=\"168\" width=\"50\" height=\"36\" fill=\"#bbf7d0\" stroke=\"#166534\" stroke-width=\"2\"/><rect x=\"160\" y=\"168\" width=\"50\" height=\"36\" fill=\"#bbf7d0\" stroke=\"#166534\" stroke-width=\"2\"/><text x=\"20\" y=\"248\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Luca</text><rect x=\"110\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"160\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><rect x=\"210\" y=\"226\" width=\"50\" height=\"36\" fill=\"#fbcfe8\" stroke=\"#9d174d\" stroke-width=\"2\"/><path d=\"M268,168 Q290,215 268,262\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"290\" y=\"205\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">5 Blöcke = 45 € → 1 Block = 9 €</text><text x=\"290\" y=\"232\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">Anna 2 × 9 = 18 €   Luca 3 × 9 = 27 €</text></svg>"
        },
        {
          label: "🇫🇷 Das französische «produit en croix»",
          html: "<p>In den französischen Mittelschulen (dem <i>collège</i>) benutzt man sehr häufig das <b>tableau de proportionnalité</b> (Proportionalitätstabelle) und, um die fehlende Zahl zu finden, das <b>produit en croix</b>, das «Kreuzprodukt».</p><p><b>Beispiel</b>: 4 Hefte kosten 6 €. Wie viel kosten 10 Hefte?</p><ol><li>Schreibe die Tabelle: oben die Hefte (4 und 10), unten die Euro (6 und ?).</li><li>Multipliziere die beiden Zahlen, die du kennst, <b>über Kreuz</b>: 10 × 6 = 60.</li><li>Teile durch die übrig gebliebene Zahl: 60 : 4 = <b>15 €</b>.</li></ol><p><b>Warum funktioniert das?</b> Die Tabelle ist eine Proportion: 4 : 6 = 10 : ?. Nach der <b>Grundeigenschaft der Proportionen</b> ist das Produkt der Innenglieder gleich dem Produkt der Außenglieder: 4 × ? = 6 × 10.</p><p>⚠️ <b>Achtung</b>: Das Kreuzprodukt gilt <b>nur</b> für die <b>direkte</b> Proportionalität. Bei der umgekehrten multipliziert man die Zahlen <b>derselben Spalte</b>: Wenn 3 Arbeiter 8 Tage brauchen, brauchen 6 Arbeiter 3 × 8 : 6 = <b>4 Tage</b> (das Produkt 24 bleibt konstant).</p>",
          svg: "<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"250\" fill=\"#f8fafc\"/><rect x=\"120\" y=\"60\" width=\"120\" height=\"60\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/><rect x=\"240\" y=\"60\" width=\"120\" height=\"60\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/><rect x=\"120\" y=\"120\" width=\"120\" height=\"60\" fill=\"#fef9c3\" stroke=\"#a16207\" stroke-width=\"2\"/><rect x=\"240\" y=\"120\" width=\"120\" height=\"60\" fill=\"#fef9c3\" stroke=\"#a16207\" stroke-width=\"2\"/><rect x=\"20\" y=\"60\" width=\"100\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><rect x=\"20\" y=\"120\" width=\"100\" height=\"60\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"70\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">Hefte</text><text x=\"70\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">Euro</text><text x=\"180\" y=\"100\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"300\" y=\"100\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><text x=\"180\" y=\"160\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><text x=\"300\" y=\"160\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#dc2626\" text-anchor=\"middle\" font-weight=\"bold\">?</text><line x1=\"205\" y1=\"92\" x2=\"280\" y2=\"145\" stroke=\"#dc2626\" stroke-width=\"3\"/><line x1=\"205\" y1=\"150\" x2=\"280\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/><text x=\"390\" y=\"90\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">? = 10 × 6 : 4</text><text x=\"390\" y=\"125\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">? = 60 : 4 = 15 €</text><text x=\"390\" y=\"170\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">über Kreuz multiplizieren,</text><text x=\"390\" y=\"192\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">durch die übrige</text><text x=\"390\" y=\"214\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">Zahl teilen</text><text x=\"240\" y=\"230\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\" font-weight=\"bold\">Funktioniert nur bei DIREKTER Proportionalität!</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Proportionalität",
      nodes: [
        { id: "grand", label: "Veränderliche Größen", x: 50, y: 6, color: "#334155", html: "Mengen, die sich ändern können: x und y.", why: "Die Idee, dass eine Größe von einer anderen abhängt (Funktion), wurde im 17. Jahrhundert von <b>Galilei</b>, <b>Descartes</b> und dann <b>Leibniz</b> entwickelt, der als Erster das Wort «Funktion» benutzte (1673)." },
        { id: "dir", label: "Direkte Proportionalität", x: 22, y: 30, color: "#16a34a", html: "y / x = k → y = kx.", why: "Sie stammt aus der Theorie der Proportionen: Wenn y₁ : x₁ = y₂ : x₂ für alle Paare gilt, ist das Verhältnis immer dieselbe Zahl k." },
        { id: "inv", label: "Umgekehrte Proportionalität", x: 78, y: 30, color: "#2563eb", html: "x · y = k → y = k / x.", why: "Das bedeutet, dass y direkt proportional zu 1/x ist. In den mittelalterlichen Rechenbüchern war es der «umgekehrte Dreisatz»." },
        { id: "k", label: "Konstante k", x: 50, y: 48, color: "#ca8a04", html: "Die Zahl, die sich nicht ändert: Verhältnis oder Produkt.", why: "Oft hat sie eine physikalische Bedeutung: den Preis pro Einheit, die Geschwindigkeit, die feste Entfernung. Die Konstante zu finden heißt, die «Regel» des Phänomens zu verstehen." },
        { id: "retta", label: "Gerade durch den Ursprung", x: 18, y: 66, color: "#22c55e", html: "Graph der direkten.", why: "Das Koordinatensystem wurde von <b>René Descartes</b> in der <i>Géométrie</i> von 1637 erdacht: Er verband Algebra und Geometrie. Jeder Punkt (x; kx) liegt auf derselben Geraden, weil die «Steigung» y/x immer k ist." },
        { id: "iperb", label: "Gleichseitige Hyperbel", x: 82, y: 66, color: "#3b82f6", html: "Graph der umgekehrten.", why: "Der Name stammt von <b>Apollonios von Perge</b> (3. Jahrhundert v. Chr.), der die Kegelschnitte untersuchte: Ellipse, Parabel, Hyperbel. Alle Rechtecke zwischen dem Ursprung und einem Punkt der Kurve haben denselben Flächeninhalt k." },
        { id: "tab", label: "Tabellen", x: 50, y: 72, color: "#9333ea", html: "Wertepaare: Man prüft das Verhältnis oder das Produkt.", why: "Tabellen sind die älteste Art, eine Beziehung zu untersuchen: Die Babylonier hatten vor etwa 4000 Jahren Tafeln der Kehrwerte (1/x), um Divisionen auszuführen." },
        { id: "fisica", label: "Naturgesetze", x: 50, y: 92, color: "#dc2626", html: "Hooke (direkt), Boyle (umgekehrt) …", why: "Viele wissenschaftliche Gesetze, die im 17. Jahrhundert mit der <b>experimentellen Methode</b> entdeckt wurden, sind Proportionalitäten: Indem sie die Daten maßen und in Tabellen und Graphen eintrugen, erkannten die Wissenschaftler die Beziehung." }
      ],
      edges: [
        ["grand", "dir", "können sein"],
        ["grand", "inv", "können sein"],
        ["dir", "k", "Verhältnis ="],
        ["inv", "k", "Produkt ="],
        ["dir", "retta", "Graph"],
        ["inv", "iperb", "Graph"],
        ["k", "tab", "wird überprüft mit"],
        ["tab", "fisica", "enthüllt"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die umgekehrte und die Aufgaben",
      questions: [
        { type: "num", q: "x · y = 36. Wenn x = 9, wie groß ist y?", answer: 4, explain: "y = 36 : 9 = 4." },
        { type: "num", q: "5 Arbeiter beenden eine Arbeit in 12 Tagen. Wie viele Tage brauchen 10 Arbeiter?", answer: 6, unit: "Tage", explain: "Umgekehrt: k = 60 → 60 : 10 = 6." },
        { type: "mc", q: "Der Graph der umgekehrten Proportionalität ist …", options: ["eine Gerade durch den Ursprung", "eine gleichseitige Hyperbel", "eine Parabel"], answer: 1, explain: "Gleichseitige Hyperbel, die die Achsen nicht berührt." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li><b>Direkt</b>: y/x = k, y = kx; x verdoppelt sich → y verdoppelt sich; Graph: <b>Gerade durch den Ursprung</b>.</li>
<li><b>Umgekehrt</b>: x·y = k, y = k/x; x verdoppelt sich → y halbiert sich; Graph: <b>gleichseitige Hyperbel</b>.</li>
<li>Um zu entscheiden, prüfe das <b>Verhältnis</b> oder das <b>Produkt</b> in einer Tabelle: «Sie wachsen zusammen» oder «die eine wächst und die andere nimmt ab» genügt nicht.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Direkt proportionale Größen", d: "Größen, deren Verhältnis konstant ist (y = kx)." },
    { t: "Umgekehrt proportionale Größen", d: "Größen, deren Produkt konstant ist (y = k/x)." },
    { t: "Proportionalitätsfaktor", d: "Der Wert k, der für alle Paare gleich bleibt." },
    { t: "Funktion", d: "Vorschrift, die jedem Wert von x genau einen Wert von y zuordnet." },
    { t: "Koordinatensystem", d: "Ebene mit zwei senkrechten Achsen (x und y), um Zahlenpaare darzustellen." },
    { t: "Ursprung", d: "Der Punkt (0; 0), in dem sich die Achsen treffen." },
    { t: "Gleichseitige Hyperbel", d: "Kurve, die der Graph der umgekehrten Proportionalität ist." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was bleibt bei einer direkten Proportionalität konstant?", options: ["Die Summe x + y", "Das Verhältnis y / x", "Das Produkt x · y"], answer: 1, explain: "y/x = k." },
      { type: "mc", q: "Was bleibt bei einer umgekehrten Proportionalität konstant?", options: ["Das Produkt x · y", "Die Differenz y − x", "Das Verhältnis y / x"], answer: 0, explain: "x · y = k." },
      { type: "num", q: "y = 3x. Wie groß ist y, wenn x = 12?", answer: 36, explain: "3 × 12 = 36." },
      { type: "num", q: "3 kg Brot kosten 7,50 €. Wie viel kosten 5 kg (in €)?", answer: 12.5, tol: 0.01, unit: "€", explain: "Direkt: 7,50 : 3 = 2,50 €/kg → 2,50 × 5 = 12,50 €." },
      { type: "num", q: "Mit 60 km/h dauert eine Reise 3 Stunden. Wie viele Stunden dauert sie mit 90 km/h?", answer: 2, unit: "h", explain: "Umgekehrt: 60 × 3 = 180 km → 180 : 90 = 2 h." },
      { type: "tf", q: "Der Graph der direkten Proportionalität geht immer durch den Ursprung.", answer: true, explain: "Wenn x = 0, ist y = k · 0 = 0." },
      { type: "tf", q: "Wenn eine Größe zunimmt und die andere abnimmt, sind sie immer umgekehrt proportional.", answer: false, explain: "Das Produkt muss konstant sein: Z. B. ausgegebenes/übriges Geld ist es nicht." },
      { type: "mc", q: "Die Zahl der Eintrittskarten und die Gesamtkosten (Karte zu festem Preis) sind …", options: ["direkt proportional", "umgekehrt proportional", "nicht proportional"], answer: 0, explain: "Gesamtkosten / Karten = fester Preis." },
      { type: "num", q: "Eine Torte wird in gleiche Teile geteilt: Bei 4 Freunden bekommt jeder 150 g. Wie viele Gramm bekommt jeder bei 6 Freunden?", answer: 100, unit: "g", explain: "Umgekehrt: 4 × 150 = 600 g → 600 : 6 = 100 g." },
      { type: "mc", q: "Welche Tabelle zeigt eine umgekehrte Proportionalität?", options: ["x: 1, 2, 4 — y: 3, 6, 12", "x: 1, 2, 4 — y: 8, 4, 2", "x: 1, 2, 4 — y: 5, 6, 8"], answer: 1, explain: "1·8 = 2·4 = 4·2 = 8: konstantes Produkt." },
      { type: "order", q: "Bring die Schritte zur Lösung einer Proportionalitätsaufgabe in die richtige Reihenfolge.", items: ["Ich erkenne, ob sie direkt oder umgekehrt ist", "Ich berechne die Konstante k", "Ich berechne den gesuchten Wert", "Ich prüfe, ob das Ergebnis sinnvoll ist"], explain: "Erkennen, k finden, rechnen, überprüfen." }
    ],
    gen: [["proportion", 2]]
  }
});
