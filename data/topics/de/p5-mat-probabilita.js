TOPIC('de', {
  id: "p5-mat-probabilita",
  title: "Wahrscheinlichkeit und Statistik",
  intro: "Regnet es morgen? Welche Eissorte mag deine Klasse am liebsten? Wer gewinnt bei Kopf oder Zahl? Die <b>Statistik</b> sammelt und liest Daten, die <b>Wahrscheinlichkeit</b> misst, wie leicht etwas passieren kann. Wir lernen <b>Mittelwert, Modus und Median</b> kennen und erkennen <b>sichere, mögliche und unmögliche</b> Ereignisse.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Was ist Statistik?",
      html: `<p>Die <b>Statistik</b> ist der Teil der Mathematik, der Daten <b>sammelt</b>, <b>ordnet</b> und <b>auswertet</b>, um ein Phänomen zu verstehen.</p>
<p>Eine statistische Erhebung läuft in 4 Schritten ab:</p>
<ol>
<li><b>Frage</b>: Was will ich wissen? (z. B. „Was ist der Lieblingssport der Klasse?“)</li>
<li><b>Daten sammeln</b>: mit einem Fragebogen, einem Interview, durch Messungen.</li>
<li><b>Ordnen</b>: Man zählt die Daten in einer <b>Häufigkeitstabelle</b> (wie oft jede Antwort vorkommt).</li>
<li><b>Darstellen und Lesen</b>: Man zeichnet ein <b>Diagramm</b> (Säulendiagramm, Bilddiagramm, Kreisdiagramm …) und berechnet die <b>Kennzahlen</b>: Modus, Mittelwert, Median.</li>
</ol>
<p>Die Dinge, die wir untersuchen (Sport, Alter, Körpergröße …), heißen <b>Merkmale</b>; die möglichen Antworten heißen <b>Ausprägungen</b>.</p>`
    },
    {
      type: "svg",
      title: "Der Lieblingssport der 5 B (Säulendiagramm)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<line x1="70" y1="270" x2="570" y2="270" stroke="#1f2937" stroke-width="3"/>
<line x1="70" y1="270" x2="70" y2="30" stroke="#1f2937" stroke-width="3"/>
<g stroke="#cbd5e1" stroke-width="1">
<line x1="70" y1="230" x2="570" y2="230"/><line x1="70" y1="190" x2="570" y2="190"/><line x1="70" y1="150" x2="570" y2="150"/><line x1="70" y1="110" x2="570" y2="110"/><line x1="70" y1="70" x2="570" y2="70"/>
</g>
<g font-size="16" fill="#1f2937" text-anchor="end">
<text x="60" y="275">0</text><text x="60" y="235">2</text><text x="60" y="195">4</text><text x="60" y="155">6</text><text x="60" y="115">8</text><text x="60" y="75">10</text>
</g>
<rect x="100" y="110" width="70" height="160" fill="#22c55e"/>
<rect x="200" y="190" width="70" height="80" fill="#3b82f6"/>
<rect x="300" y="210" width="70" height="60" fill="#f97316"/>
<rect x="400" y="230" width="70" height="40" fill="#a855f7"/>
<rect x="500" y="250" width="50" height="20" fill="#ef4444"/>
<g font-size="17" text-anchor="middle" fill="#1f2937">
<text x="135" y="295">⚽ Fußball</text><text x="235" y="295">🏊 Schwimmen</text><text x="335" y="295">🏐 Volleyball</text><text x="435" y="295">🤸 Tanzen</text><text x="525" y="295">🏀 Basketball</text>
</g>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="135" y="102">8</text><text x="235" y="182">4</text><text x="335" y="202">3</text><text x="435" y="222">2</text><text x="525" y="242">1</text>
</g>
<text x="330" y="40" font-size="20" fill="#166534" font-weight="bold" text-anchor="middle">Modus = Fußball (die höchste Säule)</text>
</svg>`,
      caption: "18 Kinder haben geantwortet. Die Häufigkeit ist die Zahl, wie oft eine Antwort vorkommt."
    },
    {
      type: "text",
      title: "Modus, Mittelwert und Median",
      html: `<p>Das sind drei verschiedene Arten, mit <b>nur einer Zahl</b> zu sagen, wie eine Gruppe von Daten aussieht.</p>
<p>Beispiel: Martas Mathematiknoten: <b>6, 8, 7, 8, 9, 10, 8</b></p>
<ul>
<li><b>Modus</b>: der Wert, der <b>am häufigsten</b> vorkommt. Hier kommt die 8 dreimal vor → Modus = <b>8</b>. (Es kann auch zwei Modi geben oder keinen.)</li>
<li><b>Arithmetisches Mittel</b>: Man <b>addiert</b> alle Daten und <b>teilt</b> durch ihre Anzahl.<br>6 + 8 + 7 + 8 + 9 + 10 + 8 = 56 → 56 : 7 = <b>8</b>.</li>
<li><b>Median</b>: Man bringt die Daten <b>in eine Reihenfolge</b> und nimmt den, der <b>in der Mitte</b> steht.<br>6, 7, 8, <b>8</b>, 8, 9, 10 → Median = <b>8</b>.<br>Bei einer geraden Anzahl von Daten ist der Median das Mittel der beiden mittleren.</li>
</ul>
<p>Den <b>Modus</b> kann man auch bei Daten benutzen, die keine Zahlen sind (z. B. Farben, Sportarten). Mittelwert und Median gibt es nur bei Zahlen.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Temperaturen der Woche",
      html: `<p>Die Klasse hat 5 Tage lang mittags die Temperatur gemessen: <b>12 °C, 15 °C, 14 °C, 11 °C, 18 °C</b>.</p>
<ul>
<li>Summe: 12 + 15 + 14 + 11 + 18 = 70</li>
<li>Mittelwert: 70 : 5 = <b>14 °C</b></li>
<li>Geordnet: 11, 12, <b>14</b>, 15, 18 → Median = <b>14 °C</b></li>
<li>Kein Wert wiederholt sich → es gibt <b>keinen Modus</b>.</li>
</ul>
<p>Die <b>Spannweite</b> ist der Unterschied zwischen dem höchsten und dem niedrigsten Wert: 18 − 11 = <b>7 °C</b>. Sie sagt uns, wie „verstreut“ die Daten sind.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: wenn der Mittelwert täuscht",
      html: `<p>In einer Straße gibt es 5 Geschäfte. Jeden Tag nehmen sie ein: <b>100 €, 120 €, 90 €, 110 €</b> und der Supermarkt <b>1580 €</b>.</p>
<ul>
<li>Mittelwert: (100 + 120 + 90 + 110 + 1580) : 5 = 2000 : 5 = <b>400 €</b></li>
<li>Median: 90, 100, <b>110</b>, 120, 1580 → <b>110 €</b></li>
</ul>
<p>Welche Zahl beschreibt ein „typisches“ Geschäft der Straße besser? Der <b>Median</b>! Ein einziger sehr großer Wert „zieht“ den Mittelwert nach oben. Deshalb schauen Statistiker immer auf mehrere Kennzahlen zugleich.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Modus, Mittelwert, Median",
      questions: [
        { type: "num", q: "Wie groß ist der Mittelwert von 4, 6, 8?", answer: 6, explain: "4 + 6 + 8 = 18; 18 : 3 = 6." },
        { type: "num", q: "Was ist der Modus von 3, 5, 5, 7, 5, 2?", answer: 5, explain: "Die 5 kommt dreimal vor, öfter als alle anderen." },
        { type: "num", q: "Was ist der Median von 9, 2, 7, 4, 5?", answer: 5, explain: "Geordnet: 2, 4, 5, 7, 9. Der mittlere ist 5." },
        { type: "tf", q: "Den Modus kann man auch für Lieblingsfarben berechnen.", answer: true, explain: "Der Modus ist die häufigste Antwort: Er gilt auch für Daten, die keine Zahlen sind." }
      ]
    },
    {
      type: "text",
      title: "Sicher, möglich, unmöglich",
      html: `<p>Ein <b>Ereignis</b> ist etwas, das passieren kann (oder nicht). Wenn man einen normalen Würfel mit 6 Seiten wirft:</p>
<ul>
<li><b>Sicheres Ereignis</b>: Es passiert <b>immer</b>. „Es fällt eine Zahl von 1 bis 6.“ ✅</li>
<li><b>Unmögliches Ereignis</b>: Es passiert <b>nie</b>. „Es fällt die 7.“ ❌</li>
<li><b>Mögliches</b> (oder wahrscheinliches) <b>Ereignis</b>: Es <b>kann passieren oder nicht</b>. „Es fällt die 4.“ 🤔</li>
</ul>
<p>Unter den möglichen Ereignissen sind einige <b>wahrscheinlicher</b> als andere: „Es fällt eine gerade Zahl“ (3 Fälle von 6) ist wahrscheinlicher als „Es fällt die 6“ (1 Fall von 6).</p>`
    },
    {
      type: "widget",
      title: "Sicher, möglich oder unmöglich?",
      widget: "classify",
      options: {
        groups: ["✅ Sicher", "🤔 Möglich", "❌ Unmöglich"],
        items: [
          ["🎲 Beim Würfeln fällt eine Zahl kleiner als 7", 0],
          ["🎲 Beim Würfeln fällt die 3", 1],
          ["🎲 Beim Würfeln fällt die 0", 2],
          ["🪙 Beim Münzwurf fällt Kopf", 1],
          ["📅 Nach Montag kommt Dienstag", 0],
          ["🐘 Ein Elefant passt in dein Federmäppchen", 2],
          ["🌧️ Morgen regnet es", 1],
          ["🔴 Ich ziehe eine rote Kugel aus einem Beutel mit lauter blauen Kugeln", 2],
          ["🔵 Ich ziehe eine blaue Kugel aus einem Beutel mit lauter blauen Kugeln", 0]
        ]
      },
      caption: "Ordne jedes Ereignis der richtigen Gruppe zu."
    },
    {
      type: "text",
      title: "Wahrscheinlichkeit mit einem Bruch messen",
      html: `<p>Die <b>Wahrscheinlichkeit</b> eines Ereignisses kann man mit einem <b>Bruch</b> schreiben:</p>
<p style="text-align:center;font-size:1.2em"><b>Wahrscheinlichkeit = günstige Fälle / mögliche Fälle</b></p>
<ul>
<li><b>Mögliche Fälle</b>: alle Ergebnisse, die herauskommen können (alle gleich wahrscheinlich).</li>
<li><b>Günstige Fälle</b>: die Ergebnisse, die zu unserem Ereignis passen.</li>
</ul>
<p>Beispiele mit einem Würfel:</p>
<ul>
<li>„Es fällt die 5“: 1 günstiger Fall von 6 → <b>1/6</b></li>
<li>„Es fällt eine gerade Zahl“ (2, 4, 6): 3 von 6 → <b>3/6 = 1/2</b>, also 50 %</li>
<li><b>Sicheres</b> Ereignis: 6/6 = <b>1</b> (100 %)</li>
<li><b>Unmögliches</b> Ereignis: 0/6 = <b>0</b> (0 %)</li>
</ul>
<p>Die Wahrscheinlichkeit ist also immer eine Zahl <b>zwischen 0 und 1</b>: Je näher an 1, desto wahrscheinlicher das Ereignis.</p>`
    },
    {
      type: "svg",
      title: "Die Skala der Wahrscheinlichkeit",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="pg" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ef4444"/><stop offset="0.5" stop-color="#facc15"/><stop offset="1" stop-color="#22c55e"/></linearGradient></defs>
<rect width="600" height="260" fill="#ffffff"/>
<rect x="50" y="110" width="500" height="30" rx="15" fill="url(#pg)"/>
<g font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="60" y="170">0</text><text x="175" y="170">1/6</text><text x="300" y="170">1/2</text><text x="540" y="170">1</text>
</g>
<g stroke="#1f2937" stroke-width="3">
<line x1="60" y1="100" x2="60" y2="150"/><line x1="133" y1="100" x2="133" y2="150"/><line x1="300" y1="100" x2="300" y2="150"/><line x1="540" y1="100" x2="540" y2="150"/>
</g>
<g font-size="17" text-anchor="middle">
<text x="60" y="60" fill="#b91c1c">unmöglich</text><text x="60" y="85" fill="#b91c1c">die 7 fällt</text>
<text x="133" y="210" fill="#92400e">die 5 fällt</text>
<text x="300" y="60" fill="#854d0e">Kopf oder Zahl</text><text x="300" y="85" fill="#854d0e">Kopf fällt</text>
<text x="300" y="210" fill="#854d0e">gerade Zahl fällt</text>
<text x="530" y="60" fill="#166534">sicher</text><text x="530" y="85" fill="#166534">1 bis 6 fällt</text>
</g>
<text x="300" y="245" font-size="16" fill="#475569" text-anchor="middle">weiter rechts = wahrscheinlicher</text>
</svg>`,
      caption: "Jedes Ereignis hat seinen Platz zwischen 0 (unmöglich) und 1 (sicher)."
    },
    {
      type: "widget",
      title: "Die Wahrscheinlichkeit als Kuchen",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "Der Nenner ist die Zahl der möglichen Fälle, der Zähler die der günstigen Fälle. 1/6 = Wahrscheinlichkeit, dass eine bestimmte Zahl des Würfels fällt. Probiere 3/6: Das ist die Wahrscheinlichkeit für eine gerade Zahl."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Das Spiel, aus dem die Wahrscheinlichkeit entstand",
      html: `<p>Die Wahrscheinlichkeitsrechnung als Wissenschaft entstand im Jahr <b>1654</b> aus einer Frage zum Würfelspiel. Ein französischer Spieler, der Chevalier de Méré, fragte den Mathematiker <b>Blaise Pascal</b>, wie man den Einsatz eines abgebrochenen Spiels gerecht aufteilt. Pascal schrieb darüber Briefe an <b>Pierre de Fermat</b>, und gemeinsam erfanden sie die Wahrscheinlichkeitsrechnung.</p>
<p>Auch ein Italiener war schon ein Jahrhundert früher nah dran: der Arzt und Mathematiker <b>Gerolamo Cardano</b>, ein großer Würfelfan!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Die Münze hat kein Gedächtnis",
      html: `<p>Du hast eine Münze 5-mal geworfen, und es ist immer Kopf gefallen. Ist beim sechsten Wurf Zahl wahrscheinlicher? <b>Nein!</b> Die Münze erinnert sich nicht an die vorigen Würfe: Die Wahrscheinlichkeit für Zahl ist immer noch <b>1/2</b>.</p>
<p>Das Gegenteil zu glauben, nennt man „Spielerfehlschluss“. Im Jahr 1913 fiel in einem Casino in Monte Carlo beim Roulette <b>26-mal hintereinander</b> Schwarz, und viele Spieler verloren sehr viel Geld, weil sie auf Rot setzten, überzeugt, dass „jetzt endlich Rot kommen muss“.</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Modus</b> = der häufigste Wert.</li>
<li><b>Mittelwert</b> = Summe der Daten : Anzahl der Daten.</li>
<li><b>Median</b> = der mittlere Wert, nachdem man die Daten geordnet hat.</li>
<li><b>Sicheres</b> Ereignis (Wahrscheinlichkeit 1), <b>mögliches</b> (zwischen 0 und 1), <b>unmögliches</b> (0).</li>
<li><b>Wahrscheinlichkeit</b> = günstige Fälle / mögliche Fälle.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Statistik und Wahrscheinlichkeit zu verstehen",
      intro: "Mittelwert und Wahrscheinlichkeit versteht man am besten durch Tun: Türme ausgleichen, Kugeln ziehen, Würfe zählen. Wähle deinen Weg!",
      tabs: [
        {
          label: "🧱 Der Mittelwert, der „ausgleicht“",
          html: `<p>Stell dir die Daten als <b>Würfeltürme</b> vor: 2, 5, 3, 6.</p>
<p>Der <b>Mittelwert</b> ist die Höhe, die alle Türme hätten, wenn du Würfel von den hohen zu den niedrigen Türmen verschiebst, bis sie <b>alle gleich</b> sind.</p>
<p>Insgesamt sind es 2 + 5 + 3 + 6 = 16 Würfel. Auf 4 Türme verteilt: 16 : 4 = je <b>4 Würfel</b>. Der Mittelwert ist 4!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<g fill="#60a5fa" stroke="#1e3a8a" stroke-width="2">
<rect x="30" y="190" width="30" height="30"/><rect x="30" y="160" width="30" height="30"/>
<rect x="70" y="190" width="30" height="30"/><rect x="70" y="160" width="30" height="30"/><rect x="70" y="130" width="30" height="30"/><rect x="70" y="100" width="30" height="30"/><rect x="70" y="70" width="30" height="30"/>
<rect x="110" y="190" width="30" height="30"/><rect x="110" y="160" width="30" height="30"/><rect x="110" y="130" width="30" height="30"/>
<rect x="150" y="190" width="30" height="30"/><rect x="150" y="160" width="30" height="30"/><rect x="150" y="130" width="30" height="30"/><rect x="150" y="100" width="30" height="30"/><rect x="150" y="70" width="30" height="30"/><rect x="150" y="40" width="30" height="30"/>
</g>
<text x="105" y="245" font-size="18" text-anchor="middle">2, 5, 3, 6</text>
<text x="290" y="140" font-size="44" fill="#1e3a8a" text-anchor="middle">→</text>
<g fill="#34d399" stroke="#065f46" stroke-width="2">
<rect x="380" y="190" width="30" height="30"/><rect x="380" y="160" width="30" height="30"/><rect x="380" y="130" width="30" height="30"/><rect x="380" y="100" width="30" height="30"/>
<rect x="420" y="190" width="30" height="30"/><rect x="420" y="160" width="30" height="30"/><rect x="420" y="130" width="30" height="30"/><rect x="420" y="100" width="30" height="30"/>
<rect x="460" y="190" width="30" height="30"/><rect x="460" y="160" width="30" height="30"/><rect x="460" y="130" width="30" height="30"/><rect x="460" y="100" width="30" height="30"/>
<rect x="500" y="190" width="30" height="30"/><rect x="500" y="160" width="30" height="30"/><rect x="500" y="130" width="30" height="30"/><rect x="500" y="100" width="30" height="30"/>
</g>
<line x1="370" y1="100" x2="545" y2="100" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="455" y="245" font-size="18" text-anchor="middle">Mittelwert = 4</text>
</svg>`
        },
        {
          label: "🎨 Der Kugelbeutel",
          html: `<p>In einem Beutel sind <b>3 rote Kugeln</b>, <b>2 blaue</b> und <b>5 gelbe</b> (insgesamt 10). Du ziehst, ohne hinzusehen:</p>
<ul>
<li>Wahrscheinlichkeit für <b>Gelb</b>: 5/10 = <b>1/2</b> (die wahrscheinlichste);</li>
<li>Wahrscheinlichkeit für <b>Rot</b>: <b>3/10</b>;</li>
<li>Wahrscheinlichkeit für <b>Blau</b>: 2/10 = <b>1/5</b>;</li>
<li>Wahrscheinlichkeit für <b>Grün</b>: 0/10 = <b>0</b> (unmöglich).</li>
</ul>
<p>Addiere alle Wahrscheinlichkeiten: 5/10 + 3/10 + 2/10 = 10/10 = <b>1</b>. Irgendetwas muss ja herauskommen!</p>`,
          widget: "counter",
          options: { emoji: "🔴", max: 20 }
        },
        {
          label: "🎲 Probiere das Werfen aus!",
          html: `<p>Die Wahrscheinlichkeit sagt, was <b>„im Durchschnitt“ nach vielen Versuchen</b> passiert. Mache das Experiment:</p>
<ol>
<li>Wirf eine Münze <b>10-mal</b> und zähle die Köpfe: Vielleicht fallen 7-mal Kopf und 3-mal Zahl;</li>
<li>wirf sie nun <b>100-mal</b> (lass dir von der ganzen Klasse helfen!): Die Köpfe werden viel näher bei <b>50</b> liegen.</li>
</ol>
<p>Das nennt man das <b>Gesetz der großen Zahlen</b>: Je mehr Versuche du machst, desto näher kommt die Häufigkeit der Wahrscheinlichkeit. Der Mathematiker Karl Pearson warf eine Münze <b>24 000-mal</b> und erhielt 12 012-mal Kopf: fast genau die Hälfte!</p>`
        },
        {
          label: "🍕 Die Kreisdiagramme",
          html: `<p>Eine andere Darstellung ist das <b>Kreisdiagramm</b> (Tortendiagramm): Der Kreis ist das Ganze, und jedes Stück ist so groß wie sein Anteil.</p>
<p>Von 18 Kindern mögen 9 Fußball am liebsten: Das ist die <b>halbe Torte</b>. 6 mögen Schwimmen: ein Drittel. 3 mögen Tanzen: ein Sechstel.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<path d="M160 130 L160 30 A100 100 0 0 1 160 230 Z" fill="#22c55e" stroke="#ffffff" stroke-width="3"/>
<path d="M160 130 L160 230 A100 100 0 0 1 73.4 80 Z" fill="#3b82f6" stroke="#ffffff" stroke-width="3"/>
<path d="M160 130 L73.4 80 A100 100 0 0 1 160 30 Z" fill="#a855f7" stroke="#ffffff" stroke-width="3"/>
<rect x="320" y="60" width="26" height="26" fill="#22c55e"/><text x="356" y="80" font-size="20">⚽ Fußball: 9 (1/2)</text>
<rect x="320" y="115" width="26" height="26" fill="#3b82f6"/><text x="356" y="135" font-size="20">🏊 Schwimmen: 6 (1/3)</text>
<rect x="320" y="170" width="26" height="26" fill="#a855f7"/><text x="356" y="190" font-size="20">🤸 Tanzen: 3 (1/6)</text>
</svg>`
        },
        {
          label: "🌍 Statistik in der Welt",
          html: `<ul>
<li>🇮🇹 Das <b>ISTAT</b> (das italienische Statistikamt) zählt jedes Jahr die Einwohner Italiens: etwa <b>59 Millionen</b>. In Deutschland macht das das <b>Statistische Bundesamt</b>.</li>
<li>🏛️ Die alten <b>Römer</b> machten alle 5 Jahre den <b>census</b> (die Volkszählung), um die Bürger und ihren Besitz zu zählen: Daher kommt das Wort!</li>
<li>🇬🇧 Die englische Krankenschwester <b>Florence Nightingale</b> benutzte 1858 bunte Kreisdiagramme, um die Regierung zu überzeugen, dass Soldaten mehr an Krankheiten starben als an Verwundungen. Dank ihrer Daten wurden die Krankenhäuser sauberer, und Tausende Leben wurden gerettet.</li>
<li>🌦️ Wenn der Wetterbericht sagt „<b>70 % Regenwahrscheinlichkeit</b>“, heißt das: An 7 von 10 Tagen mit einem solchen Wetter regnet es.</li>
</ul>`
        },
        {
          "label": "🇫🇷 Pascal und Fermat: das abgebrochene Spiel (Frankreich)",
          "html": "<p>Im Jahr <b>1654</b> schrieben sich in <b>Frankreich</b> zwei Mathematiker, <b>Blaise Pascal</b> und <b>Pierre de Fermat</b>, Briefe, um ein Problem zu lösen: Wie teilt man das Geld eines Wettkampfs gerecht auf, der vor dem Ende <b>abgebrochen</b> wurde? Aus diesen Briefen entstand die Wahrscheinlichkeitsrechnung.</p><p><b>Das Problem</b>: Anna (A) und Bruno (B) spielen. Jede Partie kann mit gleicher Wahrscheinlichkeit der eine oder der andere gewinnen. Den Wettkampf gewinnt, wer als Erster <b>3 Punkte</b> hat, und bekommt den Preis von <b>24 Stickern</b>. Beim Stand von <b>2 zu 1</b> für Anna müssen sie aufhören. Wie teilen sie die Sticker auf?</p><p>Fermats Methode: <b>Stell dir vor, die fehlenden Partien würden trotzdem gespielt</b> (höchstens 2), und zeichne den <b>Baum</b> der Möglichkeiten:</p><ul><li>AA → Anna gewinnt; AB → Anna gewinnt (sie hat ja schon in der ersten gewonnen!); BA → Anna gewinnt; BB → Bruno gewinnt.</li></ul><p>Es gibt 4 Fälle, alle gleich wahrscheinlich: Anna gewinnt in <b>3 von 4</b>, Bruno in <b>1 von 4</b>. Es ist also gerecht, <b>3/4</b> der Sticker Anna zu geben (<b>18</b>) und <b>1/4</b> Bruno (<b>6</b>). Sie zur Hälfte zu teilen, wäre für Anna ungerecht; sie alle Anna zu geben, wäre für Bruno ungerecht, der ja noch gewinnen konnte.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"80\" cy=\"150\" r=\"24\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"80\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2–1</text><line x1=\"104\" y1=\"150\" x2=\"218\" y2=\"80\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"104\" y1=\"150\" x2=\"218\" y2=\"220\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"80\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"240\" y=\"86\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"240\" cy=\"220\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"240\" y=\"226\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><line x1=\"262\" y1=\"80\" x2=\"378\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"80\" x2=\"378\" y2=\"110\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"220\" x2=\"378\" y2=\"190\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"262\" y1=\"220\" x2=\"378\" y2=\"250\" stroke=\"#334155\" stroke-width=\"2\"/><circle cx=\"400\" cy=\"50\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"56\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"400\" cy=\"110\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"116\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><circle cx=\"400\" cy=\"190\" r=\"22\" fill=\"#bbf7d0\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"196\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A</text><circle cx=\"400\" cy=\"250\" r=\"22\" fill=\"#fecaca\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"400\" y=\"256\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">B</text><text x=\"436\" y=\"56\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">AA → A gewinnt</text><text x=\"436\" y=\"116\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">AB → A gewinnt</text><text x=\"436\" y=\"196\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">BA → A gewinnt</text><text x=\"436\" y=\"256\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">BB → B gewinnt</text><text x=\"160\" y=\"290\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">1. Partie</text><text x=\"320\" y=\"290\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">2. Partie</text><text x=\"510\" y=\"290\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">A: 3/4  B: 1/4</text></svg>"
        },
        {
          "label": "🇬🇷 Die Astragale der Griechen: ungleiche Seiten",
          "html": "<p>Vor den Würfeln mit 6 Seiten spielten die alten <b>Griechen</b> und Römer mit <b>Astragalen</b>: kleinen Knochen aus dem Fuß von Schafen oder Ziegen. Ein Astragal kann auf <b>4 Seiten</b> fallen, denen man die Werte <b>1, 3, 4 und 6</b> gab. Die Römer nannten den Wurf von 4 Astragalen mit 4 lauter verschiedenen Werten „Venuswurf“.</p><p>Aber Vorsicht: Die 4 Seiten sind <b>nicht gleich</b>! Zwei Seiten sind breit (3 und 4) und zwei sind schmal (1 und 6). Der Astragal fällt viel öfter auf eine breite Seite: etwa <b>4-mal von 10</b> je Seite, gegenüber etwa <b>1-mal von 10</b> für jede schmale Seite.</p><p>Beim Astragal kann man also <b>nicht</b> sagen „Wahrscheinlichkeit der 6 = 1/4“, denn die Regel <b>günstige Fälle : mögliche Fälle</b> gilt nur, wenn alle Fälle <b>gleich wahrscheinlich</b> sind, wie bei einem guten Würfel. Wenn die Fälle nicht gleich sind, schätzt man die Wahrscheinlichkeit mit <b>Experimenten</b>: Man wirft oft und berechnet die <b>Häufigkeit</b>.</p><p>🎯 <b>Experiment</b>: Wirf 50-mal einen Flaschenverschluss. Wie oft fällt er mit der Öffnung nach oben? Berechne die Häufigkeit (zum Beispiel 18/50). Ist sie nah bei 1/2? Lege die Ergebnisse der ganzen Klasse zusammen: Mit mehr Würfen wird die Schätzung verlässlicher.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Statistik und Wahrscheinlichkeit: Tippe auf einen Knoten",
      nodes: [
        { id: "dati", label: "Daten", x: 30, y: 6, color: "#2563eb", html: "Die gesammelten Informationen: Zahlen, Antworten, Messungen.", why: "Ohne Daten gibt es keine Statistik. Das Wort <i>Statistik</i> kommt von „Staat“: Sie entstand im 17.–18. Jahrhundert, um Einwohner, Geburten, Todesfälle und Steuern der Staaten zu zählen." },
        { id: "frequenza", label: "Häufigkeit und Tabellen", x: 15, y: 30, color: "#0ea5e9", html: "Wie oft jede Antwort vorkommt.", why: "Daten in eine Tabelle zu setzen macht sie lesbar: Eine Liste von 100 Antworten verwirrt, eine Tabelle mit 5 Zeilen nicht. 1662 untersuchte der Engländer <b>John Graunt</b> so die Sterbelisten von London und erfand die moderne Statistik." },
        { id: "grafici", label: "Diagramme", x: 45, y: 30, color: "#f97316", html: "Säulendiagramme, Bilddiagramme, Kreisdiagramme (Torten).", why: "Die Augen erfassen Höhen und Flächen schneller als Zahlen. Der Schotte <b>William Playfair</b> erfand das Säulendiagramm (1786) und das Kreisdiagramm (1801)." },
        { id: "indici", label: "Modus, Mittelwert, Median", x: 30, y: 55, color: "#16a34a", html: "Zahlen, die eine Gruppe von Daten zusammenfassen.", why: "Der Mittelwert ist die Höhe, die die „ausgeglichenen“ Daten hätten (das Ganze in gleiche Teile geteilt); der Median teilt die Daten in der Mitte; der Modus ist der Beliebteste. Jeder erzählt etwas anderes, deshalb benutzt man mehrere." },
        { id: "evento", label: "Ereignis", x: 72, y: 6, color: "#a855f7", html: "Etwas, das passieren kann oder nicht.", why: "Im Leben gibt es sichere und unsichere Dinge. Um Entscheidungen zu treffen (Regenschirm mitnehmen? spielen?), lohnt es sich, die Unsicherheit zu messen." },
        { id: "tipi", label: "Sicher, möglich, unmöglich", x: 85, y: 30, color: "#ec4899", html: "Die drei Arten von Ereignissen.", why: "Wenn alle möglichen Fälle günstig sind, ist das Ereignis sicher; wenn keiner es ist, ist es unmöglich; sonst ist es möglich." },
        { id: "prob", label: "Wahrscheinlichkeit", x: 72, y: 55, color: "#ef4444", html: "Günstige Fälle / mögliche Fälle: eine Zahl von 0 bis 1.", why: "Die „klassische“ Definition schrieb der Franzose <b>Pierre-Simon Laplace</b> (1812) nach den Arbeiten von <b>Pascal und Fermat</b> (1654). Sie funktioniert, wenn alle Fälle gleich wahrscheinlich sind, wie die Seiten eines ehrlichen Würfels." },
        { id: "frazioni", label: "Brüche und Prozente", x: 72, y: 82, color: "#14b8a6", html: "Die Wahrscheinlichkeit schreibt man als Bruch (1/2) oder Prozentsatz (50 %).", why: "Eine Wahrscheinlichkeit ist ein „Teil“ der möglichen Fälle, genau wie ein Bruch ein Teil des Ganzen ist." },
        { id: "grandi", label: "Gesetz der großen Zahlen", x: 30, y: 85, color: "#64748b", html: "Wiederholt man ein Experiment oft, nähert sich die Häufigkeit der Wahrscheinlichkeit.", why: "Bewiesen hat es der Schweizer <b>Jakob Bernoulli</b> im Jahr 1713. Es ist die Brücke zwischen Statistik (den beobachteten Daten) und Wahrscheinlichkeit (der Vorhersage)." }
      ],
      edges: [
        ["dati", "frequenza", "ordnet man in"],
        ["frequenza", "grafici", "zeichnet man als"],
        ["frequenza", "indici", "fasst man zusammen mit"],
        ["evento", "tipi", "kann sein"],
        ["evento", "prob", "misst man mit der"],
        ["prob", "frazioni", "schreibt man als"],
        ["indici", "grandi", "beobachtete Häufigkeiten"],
        ["prob", "grandi", "Vorhersage"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Wahrscheinlichkeit",
      questions: [
        { type: "mc", q: "Wie groß ist beim Würfeln die Wahrscheinlichkeit, dass die 2 fällt?", options: ["1/2", "1/6", "2/6"], answer: 1, explain: "1 günstiger Fall von 6 möglichen." },
        { type: "mc", q: "„Ich ziehe eine Herzkarte aus einem Stapel, der nur aus Herzen besteht“ ist ein Ereignis, das …", options: ["sicher ist", "möglich ist", "unmöglich ist"], answer: 0, explain: "Alle Karten sind Herz: Es passiert immer." },
        { type: "tf", q: "Eine Wahrscheinlichkeit kann 3/2 sein.", answer: false, explain: "Die günstigen Fälle können nicht mehr sein als die möglichen: Die Wahrscheinlichkeit liegt zwischen 0 und 1." }
      ]
    }
  ],
  glossary: [
    { t: "Statistik", d: "Wissenschaft, die Daten sammelt, ordnet und auswertet." },
    { t: "Häufigkeit", d: "Anzahl, wie oft ein Wert vorkommt." },
    { t: "Modus", d: "Der Wert mit der höchsten Häufigkeit." },
    { t: "Arithmetisches Mittel", d: "Summe der Daten geteilt durch ihre Anzahl." },
    { t: "Median", d: "Der mittlere Wert einer geordneten Liste." },
    { t: "Säulendiagramm", d: "Diagramm mit Säulen: Die Höhe zeigt die Häufigkeit." },
    { t: "Kreisdiagramm", d: "Tortendiagramm: Jedes Stück ist proportional zu seinem Anteil." },
    { t: "Ereignis", d: "Etwas, das geschehen kann oder nicht." },
    { t: "Wahrscheinlichkeit", d: "Maß dafür, wie wahrscheinlich ein Ereignis ist: günstige Fälle / mögliche Fälle." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Berechne den Mittelwert von 10, 20, 30, 40.", answer: 25, explain: "10 + 20 + 30 + 40 = 100; 100 : 4 = 25." },
      { type: "num", q: "Was ist der Modus von 2, 4, 4, 6, 4, 2, 8?", answer: 4, explain: "Die 4 kommt dreimal vor." },
      { type: "num", q: "Was ist der Median von 15, 3, 8, 12, 6?", answer: 8, explain: "Geordnet: 3, 6, 8, 12, 15 → der mittlere ist 8." },
      { type: "mc", q: "Um den Median zu finden, muss man zuerst …", options: ["die Daten addieren", "die Daten ordnen", "den häufigsten Wert zählen"], answer: 1, explain: "Der Median ist der mittlere Wert der geordneten Daten." },
      { type: "mc", q: "„Morgen geht die Sonne im Westen auf“ ist ein Ereignis, das …", options: ["sicher ist", "möglich ist", "unmöglich ist"], answer: 2, explain: "Die Sonne geht immer im Osten auf." },
      { type: "mc", q: "In einem Beutel sind 4 rote und 6 grüne Kugeln. Wie groß ist die Wahrscheinlichkeit, eine rote zu ziehen?", options: ["4/6", "4/10", "6/10"], answer: 1, explain: "4 günstige Fälle von 10 möglichen." },
      { type: "tf", q: "Die Wahrscheinlichkeit eines sicheren Ereignisses ist 1.", answer: true, explain: "Alle Fälle sind günstig: n/n = 1." },
      { type: "text", q: "Wie heißt das Diagramm mit Säulen?", answer: ["Säulendiagramm", "das Säulendiagramm", "Balkendiagramm", "das Balkendiagramm", "Histogramm", "das Histogramm", "istogramma", "l'istogramma"], explain: "Es ist das Säulendiagramm." },
      { type: "mc", q: "Welches Ereignis ist beim Würfeln am wahrscheinlichsten?", options: ["Die 6 fällt", "Eine ungerade Zahl fällt", "Eine Zahl größer als 6 fällt"], answer: 1, explain: "Ungerade: 3/6. Die 6: 1/6. Größer als 6: unmöglich (0)." },
      { type: "order", q: "Ordne vom unwahrscheinlichsten zum wahrscheinlichsten (Würfelwurf).", items: ["Die 8 fällt", "Die 3 fällt", "Eine gerade Zahl fällt", "Eine Zahl von 1 bis 6 fällt"], explain: "0, dann 1/6, dann 3/6, dann 6/6 = 1." },
      { type: "num", q: "Wie groß ist beim Münzwurf die Wahrscheinlichkeit für Kopf als Prozentsatz? (nur die Zahl)", answer: 50, unit: "%", explain: "1/2 = 50 %." },
      { type: "tf", q: "Wenn bei einer Münze 4-mal hintereinander Zahl gefallen ist, ist beim fünften Wurf Kopf wahrscheinlicher.", answer: false, explain: "Die Münze hat kein Gedächtnis: Die Wahrscheinlichkeit bleibt 1/2." }
    ]
  }
});
