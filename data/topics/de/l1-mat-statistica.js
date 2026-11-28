TOPIC('de', {
  id: "l1-mat-statistica",
  title: "Deskriptive Statistik",
  intro: "Jeden Tag werden wir von Zahlen überflutet: Umfragen, Prozentsätze, „im Durchschnitt“, „die Mehrheit der …“. Die <b>Statistik</b> ist die Wissenschaft, die uns erlaubt, Daten zu erheben, zu ordnen, zusammenzufassen und kritisch zu lesen. In dieser Lektion lernst du, Häufigkeitstabellen und Diagramme zu erstellen und die <b>Kennzahlen</b> zu berechnen, die eine Datenmenge zusammenfassen: <b>Mittelwert, Median, Modus</b> und die <b>Streuungsmaße</b> (Spannweite, Varianz, Standardabweichung).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Grundgesamtheit, Stichprobe, Merkmal",
      html: `<p>Die deskriptive Statistik beginnt mit einigen Begriffen:</p>
<ul>
<li><b>Grundgesamtheit</b> (Population): die Menge aller Individuen, über die man Erhebungen anstellt (die Schüler einer Schule, die Familien einer Stadt …). Jedes Element ist eine <b>statistische Einheit</b>.</li>
<li><b>Stichprobe</b>: eine Teilmenge der Grundgesamtheit, die man auswählt, um sie zu untersuchen, ohne alle zu befragen. Damit die Stichprobe verlässlich ist, muss sie <b>repräsentativ</b> sein (zufällig ausgewählt, nicht nur unter den eigenen Freunden!).</li>
<li><b>Merkmal</b>: das, was man an jeder Einheit beobachtet; seine möglichen Ausprägungen sind die <b>Merkmalsausprägungen</b>.</li>
</ul>
<p>Merkmale können sein:</p>
<ul>
<li><b>qualitativ</b>: Die Ausprägungen sind Namen (Augenfarbe, Lieblingsmannschaft, Schulzweig);</li>
<li><b>quantitativ diskret</b>: ganze Zahlen, die man durch Zählen erhält (Anzahl der Geschwister, ganzzahlige Noten);</li>
<li><b>quantitativ stetig</b>: gemessene Zahlen, die jeden Wert in einem Intervall annehmen können (Körpergröße, Gewicht, Zeit). Man fasst sie in <b>Klassen</b> zusammen.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Was für ein Merkmal ist es?",
      widget: "classify",
      options: { groups: ["Qualitativ", "Quantitativ diskret", "Quantitativ stetig"], items: [
        ["Augenfarbe", 0],
        ["Anzahl der Geschwister", 1],
        ["Körpergröße", 2],
        ["Lieblingsmannschaft", 0],
        ["Note im Zeugnis (ganzzahlig)", 1],
        ["Gewicht", 2],
        ["Zeit über 100 m", 2],
        ["pro Tag gesendete Nachrichten", 1]
      ] },
      caption: "Wenn du zählst, ist es diskret; wenn du misst, ist es stetig; wenn du mit Worten beschreibst, ist es qualitativ."
    },
    {
      type: "text",
      title: "Häufigkeiten und Tabellen",
      html: `<p>Nach dem Erheben der Daten zählt man, wie oft jede Ausprägung vorkommt. Diese Zählung ist die <b>Häufigkeit</b>:</p>
<ul>
<li><b>absolute Häufigkeit</b> (f): wie oft die Ausprägung vorkommt;</li>
<li><b>relative Häufigkeit</b> (f/n): der Anteil an der Gesamtzahl n der Beobachtungen (eine Zahl zwischen 0 und 1);</li>
<li><b>prozentuale Häufigkeit</b>: die relative × 100;</li>
<li><b>kumulierte Häufigkeit</b>: Summe der Häufigkeiten bis zu dieser Ausprägung (bei ordnungsfähigen Merkmalen).</li>
</ul>
<p><b>Beispiel</b>: die Noten von 20 Schülern in einer Klassenarbeit.</p>
<table>
<tr><th>Note</th><th>f</th><th>relative f</th><th>%</th><th>kumuliert</th></tr>
<tr><td>5</td><td>2</td><td>0,10</td><td>10 %</td><td>2</td></tr>
<tr><td>6</td><td>5</td><td>0,25</td><td>25 %</td><td>7</td></tr>
<tr><td>7</td><td>7</td><td>0,35</td><td>35 %</td><td>14</td></tr>
<tr><td>8</td><td>4</td><td>0,20</td><td>20 %</td><td>18</td></tr>
<tr><td>9</td><td>2</td><td>0,10</td><td>10 %</td><td>20</td></tr>
<tr><td><b>Summe</b></td><td><b>20</b></td><td><b>1</b></td><td><b>100 %</b></td><td></td></tr>
</table>
<p>Kontrolle: Die Summe der absoluten Häufigkeiten ist n und die der relativen immer <b>1</b>.</p>
<p>(Hinweis: In Italien reichen die Schulnoten von 1 bis 10, wobei 6 die Note „ausreichend“ ist.)</p>`
    },
    {
      type: "svg",
      title: "Das Diagramm der Noten",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="560" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="60" stroke="#475569" stroke-width="2"/>
<rect x="80" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="170" y="125" width="70" height="125" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="260" y="75" width="70" height="175" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
<rect x="350" y="150" width="70" height="100" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="440" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<g font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="115" y="278">5</text><text x="205" y="278">6</text><text x="295" y="278">7</text><text x="385" y="278">8</text><text x="475" y="278">9</text>
</g>
<g font-size="16" text-anchor="middle" fill="#1e3a8a">
<text x="115" y="192">2</text><text x="205" y="117">5</text><text x="295" y="67">7</text><text x="385" y="142">4</text><text x="475" y="192">2</text>
</g>
<line x1="290" y1="45" x2="290" y2="250" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<text x="300" y="38" font-size="16" fill="#dc2626" font-weight="bold">Mittelwert 6,95 · Median 7 · Modus 7</text>
<text x="570" y="296" font-size="14" text-anchor="end" fill="#475569">Note</text>
<text x="66" y="52" font-size="14" fill="#475569">Anzahl der Schüler</text>
</svg>`,
      caption: "Säulendiagramm der Notenverteilung: Der Gipfel ist der Modus, die gestrichelte Linie zeigt, wo Mittelwert und Median liegen."
    },
    {
      type: "text",
      title: "Grafische Darstellungen",
      html: `<p>Die Wahl des Diagramms hängt von der Art der Daten ab:</p>
<ul>
<li><b>Säulendiagramm (Balkendiagramm)</b>: für qualitative oder diskrete Merkmale; die Säulen sind getrennt und ihre Höhe ist proportional zur Häufigkeit.</li>
<li><b>Histogramm</b>: für in Klassen zusammengefasste stetige Merkmale; die Rechtecke sind <b>aneinandergrenzend</b>, und die <b>Fläche</b> (nicht die Höhe!) ist proportional zur Häufigkeit, wenn die Klassen verschieden breit sind.</li>
<li><b>Kreisdiagramm (Tortendiagramm)</b>: Jede Ausprägung ist ein Kreissektor mit dem Winkel = relative Häufigkeit × 360°. Nützlich, um die Teile eines Ganzen zu zeigen.</li>
<li><b>Liniendiagramm (kartesisches Diagramm)</b>: für die zeitliche Entwicklung (Verlauf der Temperaturen, der Bevölkerung).</li>
</ul>
<p>⚠️ Ein Diagramm kann täuschen: Eine senkrechte Achse, die nicht bei null beginnt, oder zu viele Dimensionen (3D-Diagramme) vergrößern kleine Unterschiede. Schau immer auf die Achsen!</p>
<p><b>Beispiel Kreisdiagramm</b>: 35 % der Noten sind 7 → Winkel 0,35 · 360° = <b>126°</b>.</p>`
    },
    {
      type: "text",
      title: "Lagemaße: Mittelwert, Median, Modus",
      html: `<p>Um eine Datenmenge mit einer einzigen Zahl zusammenzufassen, verwendet man die <b>Mittelwerte</b>:</p>
<ul>
<li><b>Arithmetisches Mittel</b>: Summe aller Werte geteilt durch die Anzahl der Daten. Bei einer Häufigkeitstabelle verwendet man das gewichtete Mittel: (Σ Wert · Häufigkeit)/n.</li>
<li><b>Median</b>: der Wert, der in der <b>Mitte</b> der geordneten Daten steht. Ist n ungerade, ist es der mittlere Wert; ist n gerade, ist es das Mittel der beiden mittleren Werte.</li>
<li><b>Modus</b> (Modalwert): der Wert mit der <b>größten Häufigkeit</b>. Er muss nicht eindeutig sein (bimodale Verteilung) und gilt auch für qualitative Merkmale.</li>
</ul>
<p><b>Beispiel</b>: die Daten 2, 4, 4, 4, 5, 5, 7, 9 (n = 8).</p>
<ul>
<li>Mittelwert: (2 + 4 + 4 + 4 + 5 + 5 + 7 + 9)/8 = 40/8 = <b>5</b>.</li>
<li>Median: Die Daten sind schon geordnet; die beiden mittleren sind der 4. und der 5. Wert (4 und 5): (4 + 5)/2 = <b>4,5</b>.</li>
<li>Modus: Die 4 kommt dreimal vor: <b>4</b>.</li>
</ul>
<p><b>Aus den Noten der Tabelle</b>: Mittelwert = (5·2 + 6·5 + 7·7 + 8·4 + 9·2)/20 = 139/20 = <b>6,95</b>; Median: Der 10. und der 11. Wert sind beide 7 → <b>7</b>; Modus <b>7</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Der Mittelwert, der täuscht",
      html: `<p>In einer kleinen Firma verdienen 9 Angestellte <b>1 500 €</b> im Monat und der Inhaber <b>11 500 €</b>. Was ist das „typische“ Gehalt?</p>
<ul>
<li>Mittelwert: (9 · 1 500 + 11 500)/10 = 25 000/10 = <b>2 500 €</b>.</li>
<li>Median: <b>1 500 €</b>. Modus: <b>1 500 €</b>.</li>
</ul>
<p>Wenn die Firma sagt „Durchschnittsgehalt 2 500 €“, stimmt das formal, aber kein Angestellter verdient eine Summe in der Nähe! Ein <b>Ausreißer</b> (<i>Outlier</i>) verschiebt den Mittelwert stark und den Median kaum. Deshalb bevorzugt man bei schiefen Daten (Einkommen, Immobilienpreise) den <b>Median</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Häufigkeiten und Mittelwerte",
      questions: [
        { type: "num", q: "In einer Klasse mit 25 Schülern fahren 5 mit dem Fahrrad zur Schule. Wie viel Prozent?", answer: 20, unit: "%", explain: "5/25 = 0,20 → 20 %." },
        { type: "num", q: "Wie groß ist der Mittelwert von 4, 6, 8, 10, 12?", answer: 8, explain: "40/5 = 8." },
        { type: "num", q: "Wie groß ist der Median von 3, 9, 4, 7, 5?", answer: 5, explain: "Geordnet: 3, 4, 5, 7, 9: Der mittlere Wert ist 5." }
      ]
    },
    {
      type: "text",
      title: "Streuungsmaße",
      html: `<p>Zwei Klassen können denselben Mittelwert haben und doch sehr verschieden sein: A = {6, 6, 6, 6}, B = {2, 4, 8, 10}: In beiden ist der Mittelwert 6, aber in B sind die Noten stark gestreut. Die <b>Streuungsmaße</b> messen, wie weit die Daten auseinanderliegen:</p>
<ul>
<li><b>Spannweite</b>: Maximum − Minimum. (A: 0, B: 8.) Einfach, hängt aber nur von den Extremwerten ab.</li>
<li><b>Abweichung</b> eines Datenwerts: Differenz zum Mittelwert (x − m). Die Abweichungen haben die <b>Summe null</b>, man kann sie also nicht direkt addieren.</li>
<li><b>Varianz</b> (σ²): der <b>Mittelwert der Quadrate der Abweichungen</b>. Durch das Quadrieren verschwinden die Vorzeichen, und große Abweichungen wiegen mehr.</li>
<li><b>Standardabweichung</b> (σ): die Quadratwurzel der Varianz; sie hat dieselbe <b>Maßeinheit</b> wie die Daten.</li>
</ul>
<p><b>Beispiel</b>: Daten 2, 4, 4, 4, 5, 5, 7, 9 (Mittelwert 5). Abweichungen: −3, −1, −1, −1, 0, 0, 2, 4. Quadrate: 9, 1, 1, 1, 0, 0, 4, 16, Summe 32. Varianz = 32/8 = <b>4</b>; Standardabweichung = √4 = <b>2</b>.</p>
<p>Für die Noten der Tabelle: Σx² = 991, also σ² = 991/20 − 6,95² = 49,55 − 48,3025 = <b>1,2475</b>, und σ ≈ <b>1,12</b>. Eine bequeme Formel ist σ² = (Mittelwert der Quadrate) − (Quadrat des Mittelwerts).</p>`
    },
    {
      type: "remember",
      title: "Wie wählt man die Kennzahl?",
      html: `<ul>
<li><b>Mittelwert</b>: numerische Daten ohne Ausreißer; verwendet alle Daten.</li>
<li><b>Median</b>: schiefe Daten oder Daten mit Ausreißern; man muss nur die Daten ordnen.</li>
<li><b>Modus</b>: der einzige, der bei qualitativen Merkmalen verwendbar ist (Lieblingsfarbe, Marke …).</li>
<li><b>Varianz / σ</b>: um zu sagen, ob der Mittelwert die Daten „gut repräsentiert“: kleines σ = Daten nahe am Mittelwert.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Das Huhn von Trilussa",
      html: `<p>Der römische Dichter <b>Trilussa</b> (1871–1950) schrieb ein Gedicht, <i>La statistica</i> („Die Statistik“), das die Mittelwerte auf die Schippe nimmt: Wenn einer zwei Hühner isst und ein anderer keines, haben sie „im Durchschnitt“ ein Huhn pro Kopf gegessen, aber einer hat sich den Magen verdorben und der andere ist hungrig geblieben. Der Mittelwert allein sagt nicht, <i>wie</i> die Daten verteilt sind: Deshalb braucht man auch Median und Streuung.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Florence Nightingale",
      html: `<p>Die Krankenschwester <b>Florence Nightingale</b> (1820–1910) sammelte während des Krimkriegs (1853–1856) Daten über die Todesfälle in den britischen Militärlagern und entdeckte, dass die meisten Soldaten nicht an ihren Verwundungen starben, sondern an Krankheiten, die durch mangelnde Hygiene verursacht wurden. Um die Regierung zu überzeugen, erfand sie ein sehr wirkungsvolles Sektordiagramm, das „Coxcomb-Diagramm“ (Hahnenkamm): Die darauf folgenden Gesundheitsreformen retteten sehr viele Leben. Sie war auch die erste Frau, die in die Royal Statistical Society gewählt wurde. Das Wort <i>Statistik</i> stammt von <i>Staat</i>: Sie entstand, um die Daten des Staates zu beschreiben (Bevölkerung, Steuern, Heere).</p>`
    },
    {
      type: "example",
      title: "Beispiel: Eine Umfrage kritisch lesen",
      html: `<p>„70 % der Italiener wollen eine längere Schulzeit“, sagt eine Schlagzeile. Fragen, die man sich stellen sollte: Wer wurde befragt (ist die <b>Stichprobe</b> repräsentativ, oder sind es 100 Personen aus einem einzigen Stadtviertel)? Wie wurde die Frage formuliert? Wie viele haben geantwortet? Eine relative Häufigkeit von 0,7 bei 10 Personen sagt viel weniger als bei 1 000. In der Statistik zählt die Qualität der Daten genauso wie die Berechnungen.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, statistische Kennzahlen zu verstehen",
      intro: "Mittelwert, Median und Varianz haben auch anschauliche, fast physikalische Deutungen.",
      tabs: [
        {
          label: "⚖️ Der Mittelwert als Schwerpunkt",
          html: `<p>Lege die Daten auf eine <b>Wippe</b>: Jeder Datenwert ist ein Steinchen an seiner Position auf dem Zahlenstrahl. Der <b>Mittelwert</b> ist der Punkt, an dem du den Drehpunkt setzen musst, damit die Wippe im <b>Gleichgewicht</b> bleibt. Daten, die weit von der Mitte entfernt sind, „wiegen“ mehr: Deshalb zieht ein Ausreißer den Mittelwert mit. Die Abweichungen links gleichen genau die rechts aus: Ihre Summe ist null.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="50" y1="170" x2="550" y2="170" stroke="#334155" stroke-width="4"/>
<g stroke="#334155" stroke-width="2"><line x1="150" y1="170" x2="150" y2="178"/><line x1="200" y1="170" x2="200" y2="178"/><line x1="250" y1="170" x2="250" y2="178"/><line x1="300" y1="170" x2="300" y2="178"/><line x1="350" y1="170" x2="350" y2="178"/><line x1="400" y1="170" x2="400" y2="178"/><line x1="450" y1="170" x2="450" y2="178"/><line x1="500" y1="170" x2="500" y2="178"/></g>
<g fill="#f59e0b" stroke="#92400e" stroke-width="2">
<circle cx="150" cy="152" r="14"/>
<circle cx="250" cy="152" r="14"/><circle cx="250" cy="124" r="14"/><circle cx="250" cy="96" r="14"/>
<circle cx="300" cy="152" r="14"/><circle cx="300" cy="124" r="14"/>
<circle cx="400" cy="152" r="14"/>
<circle cx="500" cy="152" r="14"/>
</g>
<polygon points="300,176 275,215 325,215" fill="#dc2626"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="150" y="240">2</text><text x="200" y="240">3</text><text x="250" y="240">4</text><text x="300" y="240">5</text><text x="350" y="240">6</text><text x="400" y="240">7</text><text x="450" y="240">8</text><text x="500" y="240">9</text>
</g>
<text x="300" y="268" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">Drehpunkt = Mittelwert = 5 (Gleichgewicht)</text>
<text x="300" y="40" font-size="17" text-anchor="middle" fill="#1f2937">Daten: 2, 4, 4, 4, 5, 5, 7, 9</text>
</svg>`
        },
        {
          label: "🍬 Umverteilen",
          html: `<p>Der Mittelwert ist der Wert, den jedes Individuum hätte, wenn die Gesamtmenge in <b>gleichen Teilen</b> verteilt würde. Vier Freunde haben 2, 4, 6 und 12 Bonbons: insgesamt 24. Legen sie sie zusammen und teilen sie, bekommt jeder 24/4 = <b>6</b>: der Mittelwert. Mit dieser Idee versteht man leicht, warum die Summe der Abweichungen null ist: Wer über dem Mittelwert liegt, gibt genau das ab, was der unter dem Mittelwert erhält.</p>`
        },
        {
          label: "🚶 Der Median: die Reihe",
          html: `<p>Stelle die Schüler der Größe nach in einer Reihe auf, vom kleinsten zum größten: Der <b>Median</b> ist die Körpergröße dessen, der in der <b>Mitte der Reihe</b> steht. Die Hälfte der Schüler ist kleiner oder gleich groß, die Hälfte größer oder gleich groß. Kommt ein sehr großer Basketballspieler dazu, wird die Reihe länger, aber <b>wer in der Mitte steht, ändert sich kaum</b>: Deshalb ist der Median robust gegenüber Ausreißern. Der Mittelwert dagegen verschiebt sich sofort zum Neuankömmling hin.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der deskriptiven Statistik",
      nodes: [
        { id: "pop", label: "Grundgesamtheit und Stichprobe", x: 50, y: 6, color: "#6366f1", html: "Alle Individuen oder eine repräsentative Teilmenge.", why: "Alle zu befragen ist oft unmöglich oder zu teuer: Man untersucht eine Stichprobe. Ist sie schlecht gewählt (nicht zufällig), sind die Ergebnisse verzerrt." },
        { id: "car", label: "Merkmal", x: 20, y: 26, color: "#16a34a", html: "Qualitativ, diskret, stetig.", why: "Die Art des Merkmals entscheidet, welche Diagramme und welche Kennzahlen sinnvoll sind: Man kann nicht den Mittelwert von Farben bilden." },
        { id: "freq", label: "Häufigkeiten", x: 80, y: 26, color: "#f59e0b", html: "Absolut, relativ, prozentual, kumuliert.", why: "Sie machen aus einer ungeordneten Liste von Daten eine lesbare Verteilung; die relativen erlauben den Vergleich von Stichproben verschiedener Größe." },
        { id: "graf", label: "Diagramme", x: 80, y: 52, color: "#a855f7", html: "Säulen, Histogramm, Kreisdiagramm, Linien.", why: "Florence Nightingale zeigte mit Diagrammen, dass die Gesundheitsreformen nötig waren: Ein Bild kann überzeugen, wo Tabellen es nicht schaffen." },
        { id: "pos", label: "Mittelwert, Median, Modus", x: 25, y: 52, color: "#0ea5e9", html: "Werte, die das „Zentrum“ der Daten zusammenfassen.", why: "Der Mittelwert (Gauß, Methode der kleinsten Quadrate) minimiert die Summe der quadrierten Abweichungen; der Median die Summe der Beträge; der Modus zeigt den typischsten Wert." },
        { id: "var", label: "Streuung", x: 50, y: 74, color: "#ef4444", html: "Spannweite, Varianz, Standardabweichung.", why: "Sie sind nötig, weil das Zentrum allein nicht genügt: Gleiche Mittelwerte können sehr gestreute Daten verbergen." },
        { id: "out", label: "Ausreißer", x: 82, y: 82, color: "#14b8a6", html: "Daten, die sehr weit von den anderen entfernt sind.", why: "Sie verschieben den Mittelwert, aber nicht den Median: Die Wahl der Kennzahl hängt vom Vorhandensein von Ausreißern ab." },
        { id: "inf", label: "Auf dem Weg zur Wahrscheinlichkeit", x: 20, y: 88, color: "#ec4899", html: "Vom Beschreiben zum Vorhersagen.", why: "Die schließende Statistik nutzt die Wahrscheinlichkeit, um das, was man an der Stichprobe beobachtet, mit einer Fehlerspanne auf die Grundgesamtheit zu übertragen." }
      ],
      edges: [
        ["pop", "car", "man beobachtet ein"],
        ["car", "freq", "man zählt mit"],
        ["freq", "graf", "man stellt dar mit"],
        ["freq", "pos", "man fasst zusammen mit"],
        ["pos", "var", "wird ergänzt durch"],
        ["var", "out", "empfindlich gegenüber"],
        ["pop", "inf", "führt zu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Streuung",
      questions: [
        { type: "tf", q: "Der Mittelwert einer Datenmenge reagiert empfindlich auf Ausreißer, der Median viel weniger.", answer: true, explain: "Ein Ausreißer verschiebt den Mittelwert; der Median hängt nur vom mittleren Wert ab." },
        { type: "num", q: "Wie groß ist die Spannweite von 3, 9, 4, 12, 7?", answer: 9, explain: "12 − 3 = 9." },
        { type: "mc", q: "Die Varianz ist …", options: ["der Mittelwert der Quadrate der Abweichungen vom Mittelwert", "die Differenz zwischen Maximum und Minimum", "der häufigste Wert"], answer: 0, explain: "Ihre Quadratwurzel ist die Standardabweichung." }
      ]
    }
  ],
  glossary: [
    { t: "Grundgesamtheit", d: "Die Menge aller untersuchten statistischen Einheiten." },
    { t: "Stichprobe", d: "Repräsentative Teilmenge der Grundgesamtheit." },
    { t: "Merkmal", d: "Die an jeder Einheit beobachtete Eigenschaft: qualitativ oder quantitativ (diskret oder stetig)." },
    { t: "Absolute / relative Häufigkeit", d: "Anzahl, wie oft eine Ausprägung vorkommt / ihr Anteil an der Gesamtzahl." },
    { t: "Arithmetisches Mittel", d: "Summe der Daten geteilt durch ihre Anzahl." },
    { t: "Median", d: "Mittlerer Wert der geordneten Daten." },
    { t: "Modus", d: "Ausprägung mit der größten Häufigkeit." },
    { t: "Spannweite", d: "Differenz zwischen dem größten und dem kleinsten Wert." },
    { t: "Varianz", d: "Mittelwert der Quadrate der Abweichungen vom Mittelwert." },
    { t: "Standardabweichung", d: "Quadratwurzel der Varianz." },
    { t: "Ausreißer (Outlier)", d: "Ungewöhnlicher Wert, der sehr weit von den anderen Daten entfernt ist." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Die Anzahl der Geschwister ist ein Merkmal, das …", options: ["quantitativ diskret ist", "qualitativ ist", "quantitativ stetig ist"], answer: 0, explain: "Man erhält sie durch Zählen: ganze Zahlen." },
      { type: "num", q: "Wie groß ist der Mittelwert von 4, 6, 8, 10, 12?", answer: 8, explain: "40/5 = 8." },
      { type: "num", q: "Wie groß ist der Median von 3, 9, 4, 7, 5?", answer: 5, explain: "Geordnet: 3, 4, 5, 7, 9; der mittlere Wert ist 5." },
      { type: "num", q: "Wie groß ist der Median von 2, 4, 6, 10?", answer: 5, explain: "n ist gerade: Mittel der beiden mittleren Werte, (4 + 6)/2 = 5." },
      { type: "mc", q: "Was ist der Modus von 1, 2, 2, 3, 3, 3, 4?", options: ["3", "2", "2,5"], answer: 0, explain: "Die 3 kommt dreimal vor, öfter als jeder andere Wert." },
      { type: "num", q: "In einer Stichprobe von 48 Personen bevorzugen 12 Tee. Wie groß ist die relative Häufigkeit?", answer: 0.25, tol: 0.001, explain: "12/48 = 0,25." },
      { type: "tf", q: "Ein sehr großer Ausreißer erhöht den Mittelwert stark, ändert aber den Median kaum.", answer: true, explain: "Das ist der Grund, warum man bei Einkommen oft den Median bevorzugt." },
      { type: "num", q: "Neun Angestellte verdienen 1 500 € und der Inhaber 11 500 €. Wie hoch ist das durchschnittliche Gehalt in Euro?", answer: 2500, unit: "€", explain: "(9 · 1 500 + 11 500)/10 = 2 500 €." },
      { type: "order", q: "Bringe die Schritte zur Berechnung der Varianz in die richtige Reihenfolge.", items: ["Den Mittelwert berechnen", "Die Abweichungen vom Mittelwert berechnen", "Die Abweichungen quadrieren", "Den Mittelwert der quadrierten Abweichungen bilden"], explain: "Die Quadratwurzel der Varianz ist die Standardabweichung." },
      { type: "num", q: "Wie groß ist die Standardabweichung der Daten 4 und 6?", answer: 1, explain: "Mittelwert 5; Abweichungen −1 und +1; Quadrate 1 und 1; Varianz 1; Wurzel 1." }
    ]
  }
});
