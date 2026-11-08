TOPIC('de', {
  id: "m3-mat-probabilita",
  title: "Wahrscheinlichkeit und Statistik",
  intro: "Wie viele Mitschüler mögen Fußball am liebsten? Welche Note kommt am häufigsten vor? Wie groß ist meine Chance, mit einem Würfel eine 6 zu werfen? Die <b>Statistik</b> sammelt und fasst Daten zusammen, die <b>Wahrscheinlichkeit</b> misst, wie leicht ein Ereignis eintritt. Gemeinsam helfen sie uns, Entscheidungen zu treffen, wenn nicht alles sicher ist.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Was ist eine statistische Erhebung?",
      html: `<p>Die <b>Statistik</b> untersucht <b>kollektive</b> Erscheinungen, also solche, die viele Einzelne betreffen (Personen, Gegenstände, Ereignisse). Eine statistische Erhebung läuft in 4 Schritten ab:</p>
<ol>
<li><b>Das Problem</b> und die <b>Grundgesamtheit</b> festlegen (die Menge aller Elemente, die man untersuchen will: z. B. alle Schüler der Schule).</li>
<li><b>Die Daten sammeln</b>: an der ganzen Grundgesamtheit (<b>Volkszählung</b>, Vollerhebung) oder an einem gut gewählten Teil, der <b>Stichprobe</b>.</li>
<li><b>Die Daten ordnen</b> in Tabellen und mit Diagrammen darstellen.</li>
<li><b>Auswerten und deuten</b>: Häufigkeiten und Kennwerte (Mittelwert, Modus, Median) berechnen und Schlüsse ziehen.</li>
</ol>
<p>Jede Eigenschaft, die wir beobachten, heißt <b>Merkmal</b>. Ein Merkmal kann sein:</p>
<ul>
<li><b>qualitativ</b>, in Worten ausgedrückt (Lieblingsfarbe, ausgeübte Sportart);</li>
<li><b>quantitativ</b>, in Zahlen ausgedrückt (Körpergröße, Anzahl der Geschwister, Note). Seine Werte heißen <b>Ausprägungen</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "2. Die Häufigkeiten: absolut, relativ, prozentual",
      html: `<p>Wir fragen die 25 Schüler einer 3. Klasse der Mittelschule: <i>„Welchen Sport machst du?“</i>. Wir zählen die Antworten:</p>
<table>
<tr><th>Sport</th><th>Absolute Häufigkeit</th><th>Relative Häufigkeit</th><th>Prozentuale Häufigkeit</th></tr>
<tr><td>⚽ Fußball</td><td>10</td><td>10/25 = 0,40</td><td>40 %</td></tr>
<tr><td>🏐 Volleyball</td><td>6</td><td>6/25 = 0,24</td><td>24 %</td></tr>
<tr><td>🏊 Schwimmen</td><td>5</td><td>5/25 = 0,20</td><td>20 %</td></tr>
<tr><td>🤸 Turnen</td><td>4</td><td>4/25 = 0,16</td><td>16 %</td></tr>
<tr><td><b>Gesamt</b></td><td><b>25</b></td><td><b>1</b></td><td><b>100 %</b></td></tr>
</table>
<ul>
<li><b>Absolute Häufigkeit</b> (f): wie oft eine Ausprägung vorkommt.</li>
<li><b>Relative Häufigkeit</b>: f geteilt durch die Gesamtzahl der Daten. Die Summe der relativen Häufigkeiten ist immer <b>1</b>.</li>
<li><b>Prozentuale Häufigkeit</b>: relative Häufigkeit × 100. Die Summe ist immer <b>100 %</b>.</li>
</ul>
<p>Die relativen Häufigkeiten dienen dazu, Gruppen unterschiedlicher Größe zu <b>vergleichen</b>: 10 Fußballer von 25 (40 %) sind „mehr“ als 12 Fußballer von 40 (30 %)!</p>`
    },
    {
      type: "svg",
      title: "Dieselben Daten in zwei Diagrammen",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<text x="160" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#1e293b">Säulendiagramm</text>
<line x1="40" y1="270" x2="300" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="40" y1="270" x2="40" y2="50" stroke="#334155" stroke-width="2"/>
<text x="32" y="274" font-size="14" text-anchor="end" fill="#334155">0</text>
<text x="32" y="174" font-size="14" text-anchor="end" fill="#334155">5</text>
<text x="32" y="74" font-size="14" text-anchor="end" fill="#334155">10</text>
<line x1="40" y1="170" x2="300" y2="170" stroke="#cbd5e1" stroke-dasharray="4"/>
<line x1="40" y1="70" x2="300" y2="70" stroke="#cbd5e1" stroke-dasharray="4"/>
<rect x="55" y="70" width="45" height="200" fill="#ef4444"/>
<rect x="115" y="150" width="45" height="120" fill="#3b82f6"/>
<rect x="175" y="170" width="45" height="100" fill="#22c55e"/>
<rect x="235" y="190" width="45" height="80" fill="#f59e0b"/>
<text x="77" y="62" font-size="15" text-anchor="middle" fill="#1e293b">10</text>
<text x="137" y="142" font-size="15" text-anchor="middle" fill="#1e293b">6</text>
<text x="197" y="162" font-size="15" text-anchor="middle" fill="#1e293b">5</text>
<text x="257" y="182" font-size="15" text-anchor="middle" fill="#1e293b">4</text>
<text x="77" y="292" font-size="13" text-anchor="middle" fill="#1e293b">Fußball</text>
<text x="137" y="292" font-size="13" text-anchor="middle" fill="#1e293b">Volleyb.</text>
<text x="197" y="292" font-size="13" text-anchor="middle" fill="#1e293b">Schwimm.</text>
<text x="257" y="292" font-size="13" text-anchor="middle" fill="#1e293b">Turnen</text>
<text x="480" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#1e293b">Kreisdiagramm</text>
<path d="M480 165 L480 55 A110 110 0 0 1 544.66 254 Z" fill="#ef4444"/>
<path d="M480 165 L544.66 254 A110 110 0 0 1 395.25 235.1 Z" fill="#3b82f6"/>
<path d="M480 165 L395.25 235.1 A110 110 0 0 1 387.1 106.1 Z" fill="#22c55e"/>
<path d="M480 165 L387.1 106.1 A110 110 0 0 1 480 55 Z" fill="#f59e0b"/>
<text x="520" y="140" font-size="16" font-weight="bold" fill="#ffffff">40 %</text>
<text x="472" y="235" font-size="16" font-weight="bold" fill="#ffffff">24 %</text>
<text x="398" y="178" font-size="16" font-weight="bold" fill="#ffffff">20 %</text>
<text x="430" y="112" font-size="16" font-weight="bold" fill="#ffffff">16 %</text>
<text x="480" y="300" font-size="14" text-anchor="middle" fill="#334155">Winkel = Prozent × 3,6°  (40 % → 144°)</text>
</svg>`,
      caption: "Das Säulendiagramm vergleicht Mengen gut; das Kreisdiagramm zeigt die Teile eines Ganzen. Im Kreisdiagramm hat jeder Sektor einen Winkel, der zur Häufigkeit proportional ist: 100 % = 360°."
    },
    {
      type: "text",
      title: "3. Die Kennwerte: Mittelwert, Modus, Median",
      html: `<p>Um viele Daten mit <b>einer einzigen Zahl</b> zusammenzufassen, benutzt man die <b>Lagemaße</b>. Nehmen wir Lucas Mathematiknoten: <b>5, 7, 6, 8, 7, 9, 7</b>.</p>
<ul>
<li><b>Arithmetisches Mittel</b>: Summe aller Werte geteilt durch ihre Anzahl.<br>(5+7+6+8+7+9+7) : 7 = 49 : 7 = <b>7</b>.</li>
<li><b>Modus</b>: der häufigste Wert. Die 7 kommt 3-mal vor: Modus = <b>7</b>. (Eine Verteilung kann mehrere Modi oder keinen haben. Der Modus gilt auch für qualitative Merkmale: In der Sporttabelle ist der Modus „Fußball“.)</li>
<li><b>Median</b>: Man ordnet die Daten <b>der Größe nach</b> und nimmt den <b>mittleren</b>.<br>5, 6, 7, <b>7</b>, 7, 8, 9 → Median = <b>7</b>. Bei einer geraden Anzahl von Daten ist der Median der Mittelwert der beiden mittleren.</li>
<li><b>Spannweite</b>: Maximum − Minimum = 9 − 5 = <b>4</b>. Sie sagt, wie „verstreut“ die Daten sind.</li>
</ul>
<p>⚠️ Der Mittelwert reagiert empfindlich auf Extremwerte: Wenn in einer Firma 9 Personen 1.500 € verdienen und der Chef 30.000 €, beträgt der Mittelwert 4.350 €, aber kein Angestellter verdient so viel! In solchen Fällen beschreibt der <b>Median</b> (1.500 €) die Lage besser.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Temperaturen der Woche",
      html: `<p>In Turin waren die Höchsttemperaturen in einer Aprilwoche: <b>14, 16, 15, 19, 21, 16, 18 °C</b>.</p>
<ul>
<li>Mittelwert: (14+16+15+19+21+16+18) : 7 = 119 : 7 = <b>17 °C</b>;</li>
<li>Geordnet: 14, 15, 16, <b>16</b>, 18, 19, 21 → Median = <b>16 °C</b>;</li>
<li>Modus = <b>16 °C</b> (kommt 2-mal vor);</li>
<li>Spannweite = 21 − 14 = <b>7 °C</b>.</li>
</ul>
<p>Die Meteorologen benutzen genau diese Kennwerte, um zu sagen, ob ein Monat „wärmer als der Durchschnitt“ war.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Statistik",
      questions: [
        { type: "num", q: "Berechne den Mittelwert von 4, 8, 6, 10.", answer: 7, explain: "(4+8+6+10) : 4 = 28 : 4 = 7." },
        { type: "num", q: "Was ist der Median von 3, 9, 4, 7, 5?", answer: 5, explain: "Geordnet: 3, 4, 5, 7, 9. Der mittlere Wert ist 5." },
        { type: "mc", q: "Die Augenfarbe ist ein Merkmal, das …", options: ["quantitativ ist", "qualitativ ist", "numerisch stetig ist"], answer: 1, explain: "Sie wird in Worten ausgedrückt (blau, braun …), also ist sie qualitativ." },
        { type: "num", q: "In einer Klasse mit 20 Schülern haben 5 eine Katze. Wie groß ist die prozentuale Häufigkeit?", answer: 25, unit: "%", explain: "5/20 = 0,25 → 25 %." }
      ]
    },
    {
      type: "text",
      title: "4. Ereignisse: sicher, unmöglich, wahrscheinlich",
      html: `<p>Ein <b>Ereignis</b> ist ein Vorgang, der als Ergebnis eines Experiments eintreten kann oder nicht (einen Würfel werfen, eine Karte ziehen …). Ereignisse können sein:</p>
<ul>
<li><b>sicher</b>: Sie treten immer ein (beim Würfeln erscheint eine Zahl kleiner als 7);</li>
<li><b>unmöglich</b>: Sie treten nie ein (es erscheint 8);</li>
<li><b>zufällig</b> oder <b>wahrscheinlich</b>: Sie können eintreten oder nicht (es erscheint 6).</li>
</ul>
<p>Die Menge aller möglichen Ergebnisse heißt <b>Ergebnisraum</b> (spazio campionario). Für einen Würfel: {1, 2, 3, 4, 5, 6}.</p>`
    },
    {
      type: "widget",
      title: "Sicher, wahrscheinlich oder unmöglich?",
      widget: "classify",
      options: {
        groups: ["✅ Sicher", "🎲 Wahrscheinlich", "🚫 Unmöglich"],
        items: [
          ["Morgen kommt nach Montag der Dienstag", 0],
          ["Beim Würfeln erscheint eine gerade Zahl", 1],
          ["Beim Würfeln erscheint 7", 2],
          ["Beim Ziehen einer Karte aus einem Stapel mit 40 erscheint ein Ass", 1],
          ["Beim Münzwurf erscheint Kopf oder Zahl", 0],
          ["Aus einem Beutel mit nur roten Murmeln ziehe ich eine blaue Murmel", 2],
          ["Morgen wird es in Mailand regnen", 1],
          ["Beim Würfeln mit zwei Würfeln ist die Summe 1", 2]
        ]
      },
      caption: "Ziehe oder tippe jedes Ereignis in die richtige Gruppe."
    },
    {
      type: "text",
      title: "5. Die klassische Wahrscheinlichkeit",
      html: `<p>Wenn alle Ergebnisse <b>gleich möglich</b> sind (fairer Würfel, ausgewogene Münze …), ist die Wahrscheinlichkeit eines Ereignisses E:</p>
<p style="text-align:center;font-size:1.25em"><b>p(E) = günstige Fälle / mögliche Fälle</b></p>
<p>Beispiele mit einem Würfel:</p>
<ul>
<li>p(6 erscheint) = <b>1/6</b> ≈ 0,167 ≈ 16,7 %;</li>
<li>p(eine gerade Zahl erscheint) = 3/6 = <b>1/2</b> = 50 % (günstig: 2, 4, 6);</li>
<li>p(eine Zahl kleiner als 7 erscheint) = 6/6 = <b>1</b> → <b>sicheres</b> Ereignis;</li>
<li>p(8 erscheint) = 0/6 = <b>0</b> → <b>unmögliches</b> Ereignis.</li>
</ul>
<p>Die Wahrscheinlichkeit ist also immer eine Zahl <b>zwischen 0 und 1</b> (also zwischen 0 % und 100 %) und lässt sich als Bruch, Dezimalzahl oder Prozentsatz schreiben.</p>
<p><b>Gegenereignis</b>: „6 erscheint nicht“ hat die Wahrscheinlichkeit 1 − 1/6 = <b>5/6</b>. Allgemein gilt p(nicht E) = 1 − p(E).</p>`
    },
    {
      type: "3d",
      title: "Der Würfel: 6 Flächen, 6 mögliche Fälle",
      scene: "solid",
      options: { shape: "cube", color: "#f8fafc", labels: true },
      caption: "Ein Würfel ist ein Kubus: 6 gleiche Flächen, also hat (wenn er nicht gezinkt ist) jede Fläche dieselbe Wahrscheinlichkeit, 1/6. Dreh ihn: Die gegenüberliegenden Flächen eines echten Würfels ergeben immer die Summe 7 (1-6, 2-5, 3-4)."
    },
    {
      type: "widget",
      title: "Die Wahrscheinlichkeit als Teil eines Ganzen",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "Eine Wahrscheinlichkeit ist ein Bruchteil des Ganzen (das Ganze = sicheres Ereignis = 1). Probiere: 3/6 ist die Wahrscheinlichkeit für eine gerade Zahl, 2/6 die für „mehr als 4“ …"
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Summe zweier Würfel",
      html: `<p>Wir werfen zwei Würfel (einen roten und einen blauen) und addieren die Augen. Die möglichen Fälle sind <b>6 × 6 = 36</b> (jede Seite des roten mit jeder Seite des blauen).</p>
<p>Die Summe 7 erhält man auf <b>6 Arten</b>: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1 → p = 6/36 = <b>1/6</b>.<br>
Die Summe 2 nur auf 1 Art (1+1) → p = <b>1/36</b>. Die Summe 12 nur mit 6+6 → <b>1/36</b>.</p>
<p>Darum kommt bei Brettspielen mit zwei Würfeln die 7 so oft! Die Summen sind nicht gleich wahrscheinlich, auch wenn jeder Würfel fair ist.</p>`
    },
    {
      type: "3d",
      title: "Die 36 Fälle der zwei Würfel in 3D",
      scene: "blocks",
      options: { mode: "array", a: 6, b: 6 },
      caption: "Jedes Würfelchen ist ein Paar (roter Würfel, blauer Würfel). Die Paare mit der Summe 7 liegen auf einer Diagonale: Es sind 6 von 36."
    },
    {
      type: "text",
      title: "6. Statistische Wahrscheinlichkeit und zusammengesetzte Ereignisse",
      html: `<p>Nicht immer sind die Fälle gleich möglich (ein gezinkter Würfel, die Wahrscheinlichkeit, dass ein Auto einen Defekt hat …). Dann macht man viele <b>Versuche</b> und berechnet die <b>relative Häufigkeit</b>:</p>
<p style="text-align:center"><b>f = Anzahl der Male, in denen E eingetreten ist / Anzahl der Versuche</b></p>
<p>Das <b>Gesetz der großen Zahlen</b> sagt, dass sich die relative Häufigkeit mit wachsender Zahl der Versuche immer mehr der Wahrscheinlichkeit nähert. Bei 10 Münzwürfen kannst du 7-mal Kopf haben; bei 10.000 Würfen bist du sehr nah an 50 %.</p>
<p><b>Zusammengesetzte Ereignisse</b>:</p>
<ul>
<li><b>Unvereinbare Ereignisse</b> (können nicht zusammen eintreten): p(A <b>oder</b> B) = p(A) + p(B). Z. B. Würfel: p(1 oder 2) = 1/6 + 1/6 = 1/3.</li>
<li><b>Unabhängige Ereignisse</b> (eines beeinflusst das andere nicht): p(A <b>und</b> B) = p(A) × p(B). Z. B. zwei Münzen: p(Kopf und Kopf) = 1/2 × 1/2 = 1/4.</li>
</ul>
<p>⚠️ <b>Der Würfel hat kein Gedächtnis!</b> Wenn 5-mal hintereinander „Kopf“ gefallen ist, ist die Wahrscheinlichkeit für Zahl beim nächsten Wurf immer noch 1/2. Das Gegenteil zu glauben, heißt <b>Spielerfehlschluss</b>: Er ist einer der Gründe, warum Glücksspiel süchtig macht und Geld kostet.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Wahrscheinlichkeit entstand aus einem Würfelspiel",
      html: `<p>Im Jahr <b>1654</b> fragte ein französischer Spieler, der Chevalier de Méré, den Mathematiker <b>Blaise Pascal</b>, wie man den Einsatz eines unterbrochenen Spiels aufteilen solle. Pascal diskutierte darüber brieflich mit <b>Pierre de Fermat</b>: Aus diesen Briefen entstand die Wahrscheinlichkeitsrechnung. Schon ein Jahrhundert zuvor hatte der Italiener <b>Gerolamo Cardano</b> ein Buch über Würfelspiele geschrieben, das <i>Liber de ludo aleae</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Das Geburtstagsparadoxon",
      html: `<p>In einer Klasse mit <b>23 Personen</b> besteht eine Wahrscheinlichkeit von mehr als <b>50 %</b>, dass mindestens zwei am selben Tag Geburtstag haben; bei 30 Personen sind es etwa <b>70 %</b>! Das scheint seltsam, aber die möglichen Paare unter 23 Personen sind ganze 253. Versucht, es in eurer Klasse zu überprüfen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Ein Diagramm, das Leben rettete",
      html: `<p>Die englische Krankenschwester <b>Florence Nightingale</b> zeichnete während des Krimkriegs (1854–1856) spezielle Kreisdiagramme, um zu zeigen, dass die meisten Soldaten an Infektionen in den Lazaretten starben und nicht an Verwundungen. Dank ihrer Daten verbesserte sich die Hygiene in den Militärkrankenhäusern. In Italien sammelt das <b>ISTAT</b> mit der Volkszählung die Daten über die Bevölkerung.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Wahrscheinlichkeit zu verstehen",
      intro: "Wenn dich die Formel „günstige durch mögliche“ nicht überzeugt, probiere einen dieser Wege.",
      tabs: [
        {
          label: "🌳 Baumdiagramm",
          html: `<p>Bei Ereignissen in mehreren Stufen zeichnet man einen <b>Baum</b>: Jeder Ast ist ein Ergebnis und trägt seine Wahrscheinlichkeit. Um die Wahrscheinlichkeit eines Pfades zu erhalten, <b>multipliziert</b> man die Wahrscheinlichkeiten auf den Ästen. Beispiel: Ich werfe eine Münze zweimal. Es gibt 4 Pfade, jeder mit der Wahrscheinlichkeit 1/2 × 1/2 = 1/4. „Mindestens einmal Kopf“ = KK, KZ, ZK → 3/4.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="60" cy="150" r="12" fill="#0f172a"/>
<line x1="60" y1="150" x2="230" y2="80" stroke="#2563eb" stroke-width="4"/>
<line x1="60" y1="150" x2="230" y2="220" stroke="#dc2626" stroke-width="4"/>
<text x="130" y="100" font-size="16" fill="#2563eb">1/2</text>
<text x="130" y="215" font-size="16" fill="#dc2626">1/2</text>
<circle cx="245" cy="80" r="20" fill="#2563eb"/><text x="245" y="86" font-size="17" fill="#fff" text-anchor="middle">K</text>
<circle cx="245" cy="220" r="20" fill="#dc2626"/><text x="245" y="226" font-size="17" fill="#fff" text-anchor="middle">Z</text>
<line x1="265" y1="80" x2="400" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="265" y1="80" x2="400" y2="115" stroke="#dc2626" stroke-width="4"/>
<line x1="265" y1="220" x2="400" y2="185" stroke="#2563eb" stroke-width="4"/>
<line x1="265" y1="220" x2="400" y2="260" stroke="#dc2626" stroke-width="4"/>
<circle cx="418" cy="40" r="18" fill="#2563eb"/><text x="418" y="46" font-size="16" fill="#fff" text-anchor="middle">K</text>
<circle cx="418" cy="115" r="18" fill="#dc2626"/><text x="418" y="121" font-size="16" fill="#fff" text-anchor="middle">Z</text>
<circle cx="418" cy="185" r="18" fill="#2563eb"/><text x="418" y="191" font-size="16" fill="#fff" text-anchor="middle">K</text>
<circle cx="418" cy="260" r="18" fill="#dc2626"/><text x="418" y="266" font-size="16" fill="#fff" text-anchor="middle">Z</text>
<text x="450" y="46" font-size="16" fill="#0f172a">KK → 1/4</text>
<text x="450" y="121" font-size="16" fill="#0f172a">KZ → 1/4</text>
<text x="450" y="191" font-size="16" fill="#0f172a">ZK → 1/4</text>
<text x="450" y="266" font-size="16" fill="#0f172a">ZZ → 1/4</text>
<text x="20" y="290" font-size="15" fill="#475569">1. Wurf</text>
<text x="300" y="290" font-size="15" fill="#475569">2. Wurf</text>
</svg>`
        },
        {
          label: "🍬 Der Bonbonbeutel",
          html: `<p>Stell dir einen Beutel mit <b>10 Bonbons</b> vor: 3 Erdbeer-, 5 Zitronen-, 2 Minzbonbons. Du ziehst mit geschlossenen Augen. Die Wahrscheinlichkeit, ein Erdbeerbonbon zu ziehen, ist das <b>Tortenstück</b>, das die Erdbeerbonbons einnehmen: 3 von 10. Bewege die Regler: Wenn du Erdbeerbonbons hinzufügst, wächst das Stück (und die Wahrscheinlichkeit); wenn du Bonbons anderer Sorten hinzufügst, wächst der Nenner, und die Wahrscheinlichkeit sinkt.</p>`,
          widget: "fractionPie",
          options: { n: 3, d: 10 }
        },
        {
          label: "🧊 Vierfeldertafel in 3D",
          html: `<p>Bei zwei Würfeln baust du statt der Formel das <b>Gitter</b>: Zeilen = roter Würfel, Spalten = blauer Würfel. Jedes Würfelchen ist ein Fall. Zähle die Würfelchen, die dich interessieren: Das ist die am meisten benutzte Methode in den Schulen des Vereinigten Königreichs und der Vereinigten Staaten („sample space diagram“). Ändere die Zahlen: Mit einem 4er- und einem 6er-Würfel gibt es 24 Fälle.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 6, b: 6 }
        },
        {
          label: "🇬🇧 Die „odds“ (Wettquoten)",
          html: `<p>In den angelsächsischen Ländern benutzt man oft die <b>odds</b>: Statt „günstige durch mögliche“ sagt man „günstige <b>gegen</b> ungünstige“. Für die 6 eines Würfels: odds <b>1 zu 5</b> (1 günstiger Fall, 5 ungünstige), während die Wahrscheinlichkeit 1/6 beträgt.</p>
<table><tr><th>Ereignis</th><th>Wahrscheinlichkeit</th><th>Odds</th></tr>
<tr><td>Kopf bei einer Münze</td><td>1/2</td><td>1 zu 1</td></tr>
<tr><td>6 erscheint</td><td>1/6</td><td>1 zu 5</td></tr>
<tr><td>Ass aus 40 Karten</td><td>4/40 = 1/10</td><td>4 zu 36 = 1 zu 9</td></tr></table>
<p>Um von den odds „a gegen b“ zur Wahrscheinlichkeit zu gelangen: p = a / (a + b).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte: von den Daten zur Wahrscheinlichkeit",
      nodes: [
        { id: "dati", label: "Daten und Grundgesamtheit", x: 50, y: 6, color: "#0ea5e9", html: "Die gesammelten Werte, die man beobachtet, wenn man ein Merkmal an einer Grundgesamtheit oder Stichprobe untersucht.", why: "Staaten sammeln seit Jahrtausenden Daten: Volkszählungen gab es schon in Ägypten, China und Rom (der <i>census</i> diente für Steuern und Wehrdienst). Das Wort <b>Statistik</b> kommt von „Staat“: Im 18. Jahrhundert bezeichnete es die Wissenschaft der Informationen, die zum Regieren nützlich sind." },
        { id: "frequenze", label: "Häufigkeiten", x: 20, y: 28, color: "#22c55e", html: "Absolut, relativ (f/n) und prozentual (×100).", why: "Sie dienen dazu, Gruppen unterschiedlicher Größe zu vergleichen: Wenn man durch die Gesamtzahl teilt, bringt man alles auf denselben Maßstab („auf 1“ oder „auf 100“)." },
        { id: "grafici", label: "Diagramme", x: 50, y: 30, color: "#f59e0b", html: "Säulendiagramme, Kreisdiagramme, Koordinatendiagramme, Piktogramme.", why: "Das Balkendiagramm und das Kreisdiagramm erfand der Schotte <b>William Playfair</b> zwischen 1786 und 1801: Ein Bild zeigt auf einen Blick, was eine Tabelle verbirgt." },
        { id: "indici", label: "Mittelwert, Modus, Median", x: 80, y: 28, color: "#a855f7", html: "Kennwerte, die eine Verteilung mit einem einzigen zentralen Wert zusammenfassen.", why: "Der Mittelwert entsteht aus der Idee, die Gesamtsumme „in gleiche Teile zu teilen“; der Median ist robuster gegenüber Extremwerten; der Modus ist der einzige, den man bei nicht numerischen Daten benutzen kann." },
        { id: "evento", label: "Ereignis", x: 30, y: 55, color: "#ef4444", html: "Ein mögliches Ergebnis eines Zufallsexperiments: sicher, unmöglich oder wahrscheinlich.", why: "Ein Experiment ist zufällig, wenn wir die möglichen Ergebnisse kennen, aber nicht, welches eintritt: Das ist beim Würfel so, aber auch beim Wetter oder in der Genetik (Mendel benutzte gerade die Wahrscheinlichkeit, um die Vererbung zu erklären)." },
        { id: "classica", label: "Klassische Wahrscheinlichkeit", x: 15, y: 80, color: "#2563eb", html: "p = günstige Fälle / mögliche Fälle, wenn die Fälle gleich wahrscheinlich sind.", why: "Sie entsteht aus den Briefen zwischen <b>Pascal</b> und <b>Fermat</b> (1654) über Glücksspiele; Laplace formulierte sie 1812 vollständig. Sie funktioniert nur, wenn alle Fälle dieselbe Wahrscheinlichkeit haben." },
        { id: "frequentista", label: "Statistische Wahrscheinlichkeit", x: 50, y: 80, color: "#14b8a6", html: "Die Wahrscheinlichkeit, geschätzt als relative Häufigkeit nach sehr vielen Versuchen.", why: "Sie beruht auf dem <b>Gesetz der großen Zahlen</b>, bewiesen von <b>Jakob Bernoulli</b> (veröffentlicht 1713): Je mehr Versuche man macht, desto mehr nähert sich die Häufigkeit der Wahrscheinlichkeit. So berechnen Versicherungen Risiken." },
        { id: "composti", label: "Zusammengesetzte Ereignisse", x: 85, y: 62, color: "#db2777", html: "Summe bei unvereinbaren Ereignissen (oder), Produkt bei unabhängigen Ereignissen (und).", why: "Wenn sich zwei Ereignisse nicht überschneiden, addieren sich ihre günstigen Fälle; wenn sie unabhängig sind, verbindet sich jeder Fall des ersten mit jedem Fall des zweiten, wie im 6×6-Gitter der zwei Würfel: Darum multipliziert man." },
        { id: "decisioni", label: "Entscheidungen bei Unsicherheit", x: 85, y: 92, color: "#64748b", html: "Wettervorhersagen, Medizin, Versicherungen, Umfragen, Sport.", why: "Statistik und Wahrscheinlichkeit erlauben es, vernünftig zu entscheiden, wenn man nicht sicher sein kann: Zum Beispiel wird ein Medikament zugelassen, indem man statistisch eine Gruppe, die es nimmt, mit einer, die es nicht nimmt, vergleicht." }
      ],
      edges: [
        ["dati", "frequenze", "werden gezählt"],
        ["dati", "grafici", "werden dargestellt"],
        ["dati", "indici", "werden zusammengefasst"],
        ["frequenze", "frequentista", "schätzen die"],
        ["evento", "classica", "wird gemessen mit der"],
        ["evento", "frequentista", "oder mit der"],
        ["classica", "composti", "verbindet sich zu"],
        ["composti", "decisioni", "helfen bei"],
        ["indici", "decisioni", "helfen bei"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Wahrscheinlichkeit",
      questions: [
        { type: "mc", q: "Wie groß ist die Wahrscheinlichkeit, aus einem Stapel von 52 französischen Karten (13 Herz) eine Herzkarte zu ziehen?", options: ["1/13", "1/4", "1/2"], answer: 1, explain: "13/52 = 1/4." },
        { type: "tf", q: "Eine Wahrscheinlichkeit kann 1,5 betragen.", answer: false, explain: "Die Wahrscheinlichkeit liegt immer zwischen 0 (unmöglich) und 1 (sicher)." },
        { type: "num", q: "Ein Beutel enthält 4 rote und 6 blaue Murmeln. Wie groß ist die Wahrscheinlichkeit (in %), eine rote Murmel zu ziehen?", answer: 40, unit: "%", explain: "4/10 = 0,4 = 40 %." },
        { type: "mc", q: "Es ist 4-mal hintereinander Zahl gefallen. Beim 5. Wurf ist die Wahrscheinlichkeit für Zahl …", options: ["kleiner als 1/2", "1/2", "größer als 1/2"], answer: 1, explain: "Die Würfe sind unabhängig: Die Münze erinnert sich nicht an die vorherigen Ergebnisse." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Relative Häufigkeit = f / n; Prozentsatz = relative Häufigkeit × 100.</li>
<li><b>Mittelwert</b> = Summe : Anzahl der Daten; <b>Modus</b> = häufigster Wert; <b>Median</b> = mittlerer Wert der geordneten Daten.</li>
<li><b>p(E) = günstige / mögliche</b>, mit 0 ≤ p ≤ 1. Sicheres Ereignis: 1; unmögliches: 0.</li>
<li>p(nicht E) = 1 − p(E).</li>
<li>Unvereinbar: p(A oder B) = p(A) + p(B). Unabhängig: p(A und B) = p(A) × p(B).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Popolazione statistica (Grundgesamtheit)", d: "Die Menge aller Elemente, an denen eine Erhebung durchgeführt wird." },
    { t: "Campione (Stichprobe)", d: "Ein Teil der Grundgesamtheit, so gewählt, dass er sie repräsentiert." },
    { t: "Carattere (Merkmal)", d: "Die beobachtete Eigenschaft (qualitativ oder quantitativ)." },
    { t: "Frequenza assoluta (absolute Häufigkeit)", d: "Wie oft ein Wert vorkommt." },
    { t: "Frequenza relativa (relative Häufigkeit)", d: "Absolute Häufigkeit geteilt durch die Gesamtzahl der Daten." },
    { t: "Media aritmetica (arithmetisches Mittel)", d: "Summe der Werte geteilt durch ihre Anzahl." },
    { t: "Moda (Modus)", d: "Der Wert, der am häufigsten vorkommt." },
    { t: "Mediana (Median)", d: "Der mittlere Wert der geordneten Daten." },
    { t: "Evento aleatorio (Zufallsereignis)", d: "Ein Ereignis, das eintreten kann oder nicht." },
    { t: "Spazio campionario (Ergebnisraum)", d: "Die Menge aller möglichen Ergebnisse eines Experiments." },
    { t: "Eventi indipendenti (unabhängige Ereignisse)", d: "Ereignisse, bei denen das Eintreten des einen die Wahrscheinlichkeit des anderen nicht verändert." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Berechne den Mittelwert von 12, 15, 18, 15.", answer: 15, explain: "(12+15+18+15) : 4 = 60 : 4 = 15." },
      { type: "num", q: "Was ist der Median von 2, 8, 5, 10, 4, 9?", answer: 6.5, tol: 0.01, explain: "Geordnet: 2, 4, 5, 8, 9, 10. Die beiden mittleren sind 5 und 8: (5+8):2 = 6,5." },
      { type: "text", q: "Wie heißt der Wert, der in einer Datenreihe am häufigsten vorkommt?", answer: ["modus", "der modus", "moda", "la moda"], explain: "Es ist der Modus." },
      { type: "mc", q: "Die Anzahl der Geschwister ist ein Merkmal, das …", options: ["qualitativ ist", "quantitativ ist", "weder das eine noch das andere ist"], answer: 1, explain: "Es wird mit einer Zahl ausgedrückt." },
      { type: "num", q: "Wie viele Grad nimmt in einem Kreisdiagramm ein Sektor ein, der 25 % darstellt?", answer: 90, unit: "°", explain: "25 × 3,6° = 90°." },
      { type: "mc", q: "Wie groß ist beim Würfeln die Wahrscheinlichkeit, dass eine Zahl größer als 4 erscheint?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 1, explain: "Günstig: 5 und 6 → 2/6 = 1/3." },
      { type: "tf", q: "Das Ereignis „beim Würfeln erscheint 0“ hat die Wahrscheinlichkeit 0.", answer: true, explain: "Es ist ein unmögliches Ereignis." },
      { type: "num", q: "Die Wahrscheinlichkeit, dass es morgen regnet, ist 0,3. Wie groß ist die Wahrscheinlichkeit, dass es NICHT regnet?", answer: 0.7, tol: 0.001, explain: "1 − 0,3 = 0,7." },
      { type: "mc", q: "Wie groß ist beim Werfen von zwei Würfeln die Wahrscheinlichkeit, dass die Summe 2 ist?", options: ["1/36", "1/12", "1/6", "2/36"], answer: 0, explain: "Nur 1+1 von 36 möglichen Fällen." },
      { type: "mc", q: "Ich werfe eine Münze und einen Würfel. Wahrscheinlichkeit für „Kopf und 6“?", options: ["1/8", "1/12", "2/3", "7/12"], answer: 1, explain: "Unabhängige Ereignisse: 1/2 × 1/6 = 1/12." },
      { type: "tf", q: "Nach dem Gesetz der großen Zahlen nähert sich bei vielen Versuchen die relative Häufigkeit der Wahrscheinlichkeit.", answer: true, explain: "Es ist das Fundament der statistischen Wahrscheinlichkeit." },
      { type: "order", q: "Bringe die Phasen einer statistischen Erhebung in die richtige Reihenfolge.", items: ["Problem und Grundgesamtheit festlegen", "Daten sammeln", "Daten in Tabellen und Diagrammen ordnen", "Kennwerte berechnen und deuten"], explain: "Zuerst entscheidet man, was man untersucht, dann sammelt, ordnet und wertet man die Daten aus." }
    ],
    gen: [["percent", 2], ["fracEquiv", 1]]
  }
});
