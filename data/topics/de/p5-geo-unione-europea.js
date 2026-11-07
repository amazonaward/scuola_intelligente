TOPIC('de', {
  id: `p5-geo-unione-europea`,
  title: `Die Europäische Union`,
  intro: `Mit dem Personalausweis kannst du in Spanien oder Österreich Urlaub machen, ohne Reisepass, und in vielen Ländern dein Eis in <b>Euro</b> bezahlen wie zu Hause. Das verdanken wir der <b>Europäischen Union</b> (EU): 27 Staaten, die beschlossen haben zusammenzuarbeiten. Wir entdecken, wie sie entstanden ist, wer ihre Mitglieder sind und wie ihre <b>Institutionen</b> funktionieren.`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Warum die Europäische Union entstanden ist`,
      html: `<p>In der ersten Hälfte des 20. Jahrhunderts wurde Europa durch <b>zwei Weltkriege</b> zerstört (1914–1918 und 1939–1945). Millionen Tote, Städte, die dem Erdboden gleichgemacht wurden. Einige Politiker dachten: <i>„Wenn die europäischen Länder zusammenarbeiten und voneinander abhängen, werden sie keinen Krieg mehr gegeneinander führen.“</i></p>
<ul>
<li><b>1941</b>: Auf die Insel <b>Ventotene</b> vom Faschismus verbannt, schreiben Altiero Spinelli und Ernesto Rossi das <b>Manifest von Ventotene</b>, das von einem vereinten und freien Europa träumt.</li>
<li><b>9. Mai 1950</b>: Der französische Minister <b>Robert Schuman</b> schlägt vor, die <b>Kohle und den Stahl</b> Frankreichs und Deutschlands gemeinsam zu verwalten, die Rohstoffe für den Bau von Waffen. Deshalb ist der <b>9. Mai</b> der <b>Europatag</b>.</li>
<li><b>1951</b>: Die <b>EGKS</b> (Europäische Gemeinschaft für Kohle und Stahl) entsteht mit 6 Ländern.</li>
<li><b>1957</b>: Mit den <b>Römischen Verträgen</b> entsteht die <b>EWG</b> (Europäische Wirtschaftsgemeinschaft): Waren und Menschen bewegen sich freier.</li>
<li><b>1992</b>: Mit dem <b>Vertrag von Maastricht</b> (Niederlande) entsteht die <b>Europäische Union</b>, in Kraft seit 1993.</li>
<li><b>2002</b>: Münzen und Scheine in <b>Euro</b> kommen in die Geldbörse.</li>
</ul>`
    },
    {
      type: `text`, title: `2. Die Gründerländer und die 27 Mitgliedstaaten`,
      html: `<p>Die <b>6 Gründerländer</b> (1957) waren: <b>Belgien, Frankreich, (West-)Deutschland, Italien, Luxemburg und die Niederlande</b>.</p>
<p>Dann hat sich die Union mehrmals <b>erweitert</b>. Heute gibt es <b>27</b> Mitgliedstaaten:</p>
<p>Belgien · Bulgarien · Dänemark · Deutschland · Estland · Finnland · Frankreich · Griechenland · Irland · Italien · Kroatien · Lettland · Litauen · Luxemburg · Malta · Niederlande · Österreich · Polen · Portugal · Rumänien · Schweden · Slowakei · Slowenien · Spanien · Tschechien · Ungarn · Zypern</p>
<p>Das <b>Vereinigte Königreich</b> trat 1973 bei und ist am 31. Januar 2020 <b>ausgetreten</b> (der „Brexit“). Einige Länder, wie die <b>Ukraine, Moldau, Albanien, Montenegro, Serbien</b>, sind <b>Kandidaten</b> für den Beitritt. Andere europäische Länder, wie die <b>Schweiz</b> und <b>Norwegen</b>, haben sich entschieden, nicht dazuzugehören.</p>
<p>In der EU leben etwa <b>450 Millionen</b> Menschen, und es werden <b>24 Amtssprachen</b> gesprochen.</p>`
    },
    {
      type: `widget`, title: `Die Erweiterungen der Union`,
      widget: `timeline`,
      caption: `Von 6 auf 28 Länder, dann 27 nach dem Austritt des Vereinigten Königreichs.`,
      options: {
        unit: `Jahre`,
        events: [
          { year: 1957, label: `6 Gründer: Belgien, Frankreich, Deutschland, Italien, Luxemburg, Niederlande`, icon: `🌱` },
          { year: 1973, label: `+ Dänemark, Irland, Vereinigtes Königreich (9)`, icon: `➕` },
          { year: 1981, label: `+ Griechenland (10)`, icon: `➕` },
          { year: 1986, label: `+ Spanien, Portugal (12)`, icon: `➕` },
          { year: 1995, label: `+ Österreich, Finnland, Schweden (15)`, icon: `➕` },
          { year: 2004, label: `+ 10 Länder, darunter Polen, Malta, Zypern (25)`, icon: `🎉` },
          { year: 2007, label: `+ Bulgarien, Rumänien (27)`, icon: `➕` },
          { year: 2013, label: `+ Kroatien (28)`, icon: `➕` },
          { year: 2020, label: `Das Vereinigte Königreich tritt aus (27)`, icon: `👋` }
        ]
      }
    },
    {
      type: `3d`, title: `Die Hauptstädte Europas auf dem Globus`,
      scene: `globe`,
      caption: `Dreh den Globus: In Grün die 6 Gründer, in Blau die anderen Mitgliedstaaten, in Orange die Sitze der Institutionen.`,
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: `Rom`, color: `#22c55e` },
          { lat: 48.85, lon: 2.35, label: `Paris`, color: `#22c55e` },
          { lat: 52.52, lon: 13.4, label: `Berlin`, color: `#22c55e` },
          { lat: 52.37, lon: 4.9, label: `Amsterdam`, color: `#22c55e` },
          { lat: 50.85, lon: 4.35, label: `Brüssel (Kommission, Rat)`, color: `#f97316` },
          { lat: 49.61, lon: 6.13, label: `Luxemburg (Gerichtshof)`, color: `#f97316` },
          { lat: 48.58, lon: 7.75, label: `Straßburg (Europäisches Parlament)`, color: `#f97316` },
          { lat: 50.11, lon: 8.68, label: `Frankfurt (Europäische Zentralbank)`, color: `#f97316` },
          { lat: 40.42, lon: -3.7, label: `Madrid`, color: `#3b82f6` },
          { lat: 38.72, lon: -9.14, label: `Lissabon`, color: `#3b82f6` },
          { lat: 53.35, lon: -6.26, label: `Dublin`, color: `#3b82f6` },
          { lat: 55.68, lon: 12.57, label: `Kopenhagen`, color: `#3b82f6` },
          { lat: 59.33, lon: 18.07, label: `Stockholm`, color: `#3b82f6` },
          { lat: 60.17, lon: 24.94, label: `Helsinki`, color: `#3b82f6` },
          { lat: 59.44, lon: 24.75, label: `Tallinn`, color: `#3b82f6` },
          { lat: 56.95, lon: 24.1, label: `Riga`, color: `#3b82f6` },
          { lat: 54.69, lon: 25.28, label: `Vilnius`, color: `#3b82f6` },
          { lat: 52.23, lon: 21.01, label: `Warschau`, color: `#3b82f6` },
          { lat: 50.08, lon: 14.44, label: `Prag`, color: `#3b82f6` },
          { lat: 48.15, lon: 17.11, label: `Bratislava`, color: `#3b82f6` },
          { lat: 48.21, lon: 16.37, label: `Wien`, color: `#3b82f6` },
          { lat: 47.5, lon: 19.04, label: `Budapest`, color: `#3b82f6` },
          { lat: 46.06, lon: 14.51, label: `Ljubljana`, color: `#3b82f6` },
          { lat: 45.81, lon: 15.98, label: `Zagreb`, color: `#3b82f6` },
          { lat: 44.43, lon: 26.1, label: `Bukarest`, color: `#3b82f6` },
          { lat: 42.7, lon: 23.32, label: `Sofia`, color: `#3b82f6` },
          { lat: 37.98, lon: 23.73, label: `Athen`, color: `#3b82f6` },
          { lat: 35.9, lon: 14.51, label: `Valletta`, color: `#3b82f6` },
          { lat: 35.17, lon: 33.36, label: `Nikosia`, color: `#3b82f6` }
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-Quiz: die Geschichte der EU`,
      questions: [
        { type: `num`, q: `Wie viele Mitgliedstaaten hat die Europäische Union heute?`, answer: 27, tol: 0, explain: `27, nach dem Austritt des Vereinigten Königreichs im Jahr 2020.` },
        { type: `mc`, q: `In welcher Stadt wurden die Verträge von 1957 unterzeichnet?`, options: [`Paris`, `Rom`, `Maastricht`], answer: 1, explain: `Die Römischen Verträge vom 25. März 1957 schufen die EWG.` },
        { type: `tf`, q: `Italien ist eines der 6 Gründerländer.`, answer: true, explain: `Zusammen mit Belgien, Frankreich, Deutschland, Luxemburg und den Niederlanden.` }
      ]
    },
    {
      type: `text`, title: `3. Die Institutionen: Wer in der EU entscheidet`,
      html: `<p>Wie ein Staat hat auch die EU ihre Organe. Die wichtigsten sind:</p>
<table>
<tr><th>Institution</th><th>Wer dazugehört</th><th>Was sie tut</th><th>Sitz</th></tr>
<tr><td>🗳️ <b>Europäisches Parlament</b></td><td>720 Abgeordnete, alle 5 Jahre von den Bürgern gewählt (76 Italiener)</td><td>Beschließt gemeinsam mit dem Rat die europäischen Gesetze und den Haushalt</td><td>Straßburg und Brüssel</td></tr>
<tr><td>🤝 <b>Rat der Europäischen Union</b></td><td>Ein Minister pro Staat (wechselt je nach Thema)</td><td>Beschließt die Gesetze gemeinsam mit dem Parlament</td><td>Brüssel</td></tr>
<tr><td>⭐ <b>Europäischer Rat</b></td><td>Die Staats- oder Regierungschefs der 27 Länder</td><td>Legt die großen politischen Richtungen fest</td><td>Brüssel</td></tr>
<tr><td>🏢 <b>Europäische Kommission</b></td><td>27 Kommissare, einer pro Land, mit einer Präsidentin oder einem Präsidenten</td><td>Schlägt die Gesetze vor und kontrolliert, dass sie eingehalten werden; sie ist die „Regierung“ der EU</td><td>Brüssel</td></tr>
<tr><td>⚖️ <b>Gerichtshof</b></td><td>Ein Richter pro Staat</td><td>Kontrolliert, dass die europäischen Gesetze überall gleich angewendet werden</td><td>Luxemburg</td></tr>
<tr><td>💶 <b>Europäische Zentralbank</b></td><td>Die Präsidenten der Zentralbanken</td><td>Verwaltet den Euro</td><td>Frankfurt</td></tr>
</table>
<p>Kurz gesagt: Die <b>Kommission schlägt vor</b>, das <b>Parlament und der Rat beschließen</b>, der <b>Gerichtshof kontrolliert</b>.</p>`
    },
    {
      type: `svg`, title: `Wie ein europäisches Gesetz entsteht`,
      caption: `Das „Dreieck“ der Institutionen: Die Kommission schlägt vor, Parlament und Rat entscheiden gemeinsam.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#1e3a8a"/>
<g fill="#facc15" font-size="22" text-anchor="middle">
<text x="300" y="38">★</text><text x="345" y="50">★</text><text x="378" y="82">★</text><text x="390" y="125">★</text>
<text x="378" y="168">★</text><text x="345" y="200">★</text><text x="300" y="212">★</text><text x="255" y="200">★</text>
<text x="222" y="168">★</text><text x="210" y="125">★</text><text x="222" y="82">★</text><text x="255" y="50">★</text>
</g>
<rect x="200" y="100" width="200" height="50" rx="10" fill="#f97316"/>
<text x="300" y="122" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">KOMMISSION</text>
<text x="300" y="141" font-size="13" text-anchor="middle" fill="#ffffff">schlägt das Gesetz vor</text>
<rect x="20" y="240" width="210" height="60" rx="10" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
<text x="125" y="265" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">PARLAMENT</text>
<text x="125" y="286" font-size="13" text-anchor="middle" fill="#ffffff">Stimme der Bürger</text>
<rect x="370" y="240" width="210" height="60" rx="10" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
<text x="475" y="265" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">EU-RAT</text>
<text x="475" y="286" font-size="13" text-anchor="middle" fill="#ffffff">Stimme der Regierungen</text>
<line x1="250" y1="150" x2="140" y2="238" stroke="#ffffff" stroke-width="4"/>
<line x1="350" y1="150" x2="460" y2="238" stroke="#ffffff" stroke-width="4"/>
<line x1="230" y1="270" x2="370" y2="270" stroke="#facc15" stroke-width="4" stroke-dasharray="8 5"/>
<text x="300" y="262" font-size="14" text-anchor="middle" fill="#facc15" font-weight="bold">beschließen gemeinsam</text>
<text x="300" y="300" font-size="14" text-anchor="middle" fill="#e0e7ff">= europäisches Gesetz</text>
</svg>`
    },
    {
      type: `widget`, title: `Spiel: Ordne die Institution ihrer Aufgabe zu`,
      widget: `match`,
      options: {
        pairs: [
          [`Europäisches Parlament`, `Von den Bürgern gewählt, beschließt die Gesetze`],
          [`Europäische Kommission`, `Schlägt die Gesetze vor`],
          [`Rat der EU`, `Die Minister der 27 Staaten`],
          [`Europäischer Rat`, `Die Staats- oder Regierungschefs`],
          [`Gerichtshof`, `Kontrolliert die Einhaltung des EU-Rechts`],
          [`Europäische Zentralbank`, `Verwaltet den Euro`]
        ]
      }
    },
    {
      type: `text`, title: `4. Was sich für uns ändert`,
      html: `<ul>
<li>🚶 <b>Freizügigkeit</b>: Die Europäer können in jedem Land der EU leben, studieren und arbeiten.</li>
<li>🛂 <b>Schengen-Raum</b>: Zwischen fast allen EU-Ländern (und auch der Schweiz, Norwegen, Island und Liechtenstein) gibt es keine festen Grenzkontrollen.</li>
<li>💶 <b>Euro</b>: Die gemeinsame Währung wird von <b>21 EU-Ländern</b> benutzt (Bulgarien ist 2026 als Letztes dazugekommen). Den Euro nutzen nicht: Dänemark, Polen, Tschechien, Rumänien, Schweden und Ungarn.</li>
<li>🎓 <b>Erasmus</b>: Seit 1987 haben Millionen Studierende eine Zeit lang in einem anderen europäischen Land studiert.</li>
<li>📱 <b>Roaming</b>: Seit 2017 kann man aus den anderen EU-Ländern ohne Mehrkosten telefonieren und im Internet surfen.</li>
<li>🛒 <b>Binnenmarkt</b>: Waren reisen ohne Zölle und mit denselben Sicherheitsregeln (das <b>CE</b>-Zeichen auf Spielzeug!).</li>
<li>🌍 <b>Umwelt</b>: gemeinsame Regeln für Luft, Wasser, Recycling.</li>
</ul>`
    },
    {
      type: `widget`, title: `Spiel: Wer benutzt den Euro?`,
      widget: `classify`,
      caption: `Alle diese Länder gehören zur EU. Welche bezahlen in Euro?`,
      options: {
        groups: [`💶 Benutzt den Euro`, `🪙 Hat eine andere Währung`],
        items: [
          [`Italien`, 0], [`Deutschland`, 0], [`Spanien`, 0], [`Kroatien`, 0], [`Griechenland`, 0], [`Bulgarien`, 0], [`Irland`, 0],
          [`Schweden`, 1], [`Polen`, 1], [`Dänemark`, 1], [`Rumänien`, 1], [`Ungarn`, 1]
        ]
      }
    },
    {
      type: `example`, title: `Beispiel aus der Praxis: ein Ausflug nach Wien`,
      html: `<p>Lucas Klasse macht einen Ausflug von Turin nach <b>Wien</b> in Österreich:</p>
<ul>
<li>An der Grenze gibt es keine feste Kontrolle: Italien und Österreich gehören zum <b>Schengen-Raum</b>. Es genügt, den Personalausweis dabeizuhaben.</li>
<li>Luca kauft eine Postkarte und bezahlt in <b>Euro</b>: Man muss kein Geld wechseln.</li>
<li>Mit dem Handy seiner Mama ruft er zum gewohnten Preis zu Hause an, dank der Regeln zum <b>Roaming</b>.</li>
<li>Wenn er sich verletzt, gibt ihm die <b>Europäische Krankenversicherungskarte</b> (die Rückseite der Gesundheitskarte) Anspruch auf die öffentliche Behandlung.</li>
</ul>`
    },
    {
      type: `example`, title: `Beispiel aus der Praxis: der am Flaschenhals befestigte Deckel`,
      html: `<p>Hast du bemerkt, dass die Deckel von Plastikflaschen heute an der Flasche <b>befestigt</b> bleiben? Das ist eine europäische Regel (eine <b>Richtlinie</b> von 2019, verpflichtend seit Juli 2024) gegen Plastik, das in die Natur gelangt: Deckel gehörten zu den am häufigsten an Stränden gefundenen Abfällen.</p>
<p>So funktioniert das: Die <b>Kommission</b> hat die Regel vorgeschlagen, das <b>Parlament</b> und der <b>Rat</b> haben sie beschlossen, dann hat jeder Staat sie in seine Gesetze übernommen. Eine Entscheidung, die in Brüssel und Straßburg getroffen wurde, kommt bis zu deinem Pausenbrot!</p>`
    },
    {
      type: `remember`, title: `Das solltest du dir merken`,
      html: `<ul>
<li><b>1957</b> Römische Verträge (6 Gründer) → <b>1992</b> Maastricht: Die EU entsteht → <b>2002</b> Euro in der Geldbörse.</li>
<li><b>27</b> Mitgliedstaaten, etwa <b>450 Millionen</b> Einwohner, <b>24</b> Amtssprachen.</li>
<li>Die Kommission <b>schlägt vor</b>, Parlament + Rat <b>beschließen</b>, der Gerichtshof <b>kontrolliert</b>.</li>
<li>Symbole: Flagge mit <b>12 goldenen Sternen</b>, Hymne „<b>Ode an die Freude</b>“, Motto „<b>In Vielfalt geeint</b>“, Feiertag am <b>9. Mai</b>.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Wusstest du schon…? Die 12 Sterne sind nicht die Länder`,
      html: `<p>Viele denken, dass die Sterne der europäischen Flagge für jeden Staat einer sind. Dabei sind es <b>immer 12</b>, auch wenn es 27 Länder gibt! Die Zahl 12 ist ein Symbol für <b>Vollkommenheit und Harmonie</b> (wie die Monate des Jahres oder die Stunden auf dem Zifferblatt der Uhr), und der Kreis stellt die <b>Einheit</b> der Völker dar.</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du schon…? Die europäische Hymne hat keinen Text`,
      html: `<p>Die Hymne der EU ist die <b>Ode an die Freude</b> aus der Neunten Sinfonie von <b>Ludwig van Beethoven</b> (1824). Sie wird nur als Musik gespielt, ohne Text, damit keine Sprache bevorzugt wird: Musik ist eine Sprache, die alle verstehen. (Beethoven vertonte Schillers Gedicht „An die Freude“, deshalb kennst du vielleicht die deutschen Worte.)</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du schon…? Die EU hat einen Nobelpreis gewonnen`,
      html: `<p>Im Jahr <b>2012</b> erhielt die Europäische Union den <b>Friedensnobelpreis</b>, weil sie einen Kontinent der Kriege in einen Kontinent des Friedens verwandelt und die Aussöhnung zwischen alten Feinden wie Frankreich und Deutschland gefördert hat.</p>`
    },
    {
      type: `alternatives`, title: `Andere Wege, es zu verstehen`,
      intro: `Die EU ist ein kompliziertes Gebilde. Hier sind weitere Möglichkeiten, sie sich vorzustellen.`,
      tabs: [
        {
          label: `🏘️ Wie ein Mietshaus`,
          html: `<p>Stell dir ein großes <b>Mietshaus</b> mit 27 Wohnungen vor. Jede Familie (Staat) entscheidet bei sich zu Hause allein: Einrichtung, Zeiten, Abendessen. Aber über die <b>gemeinsamen</b> Dinge (Aufzug, Garten, Dach) wird <b>zusammen</b> in der Eigentümerversammlung entschieden.</p>
<ul>
<li>Die <b>Hausverwaltung</b>, die die Vorschläge vorbereitet und kontrolliert, dass die Regeln eingehalten werden, ist wie die <b>Kommission</b>.</li>
<li>Die <b>Versammlung der Bewohner</b> ist wie das <b>Parlament</b> und der <b>Rat</b>.</li>
<li>Die <b>Hausordnung</b> ist wie die <b>Verträge</b>.</li>
</ul>
<p>Keine Familie verliert ihr Zuhause: Sie legt nur einige Dinge zusammen, um besser zu leben.</p>`
        },
        {
          label: `🧩 Regeln wie Matrjoschkas`,
          html: `<p>Du bist Bürger vieler „Ebenen“, eine in der anderen, wie Matrjoschkas:</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<ellipse cx="300" cy="130" rx="285" ry="120" fill="#1e3a8a"/>
<ellipse cx="330" cy="140" rx="215" ry="95" fill="#16a34a"/>
<ellipse cx="365" cy="150" rx="150" ry="70" fill="#f59e0b"/>
<ellipse cx="400" cy="160" rx="85" ry="45" fill="#ef4444"/>
<text x="90" y="135" font-size="17" fill="#facc15" font-weight="bold">EU ★</text>
<text x="175" y="150" font-size="17" fill="#ffffff" font-weight="bold">ITALIEN</text>
<text x="235" y="160" font-size="16" fill="#ffffff" font-weight="bold">Region</text>
<text x="400" y="166" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">Gemeinde</text>
</svg>`
        },
        {
          label: `🇪🇺 Die Flaggen`,
          html: `<p>Erkennst du die Länder am Aussehen der Flagge? Dreh die Karten um!</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `🇮🇹`, back: `Italien – Rom` },
              { front: `🇫🇷`, back: `Frankreich – Paris` },
              { front: `🇩🇪`, back: `Deutschland – Berlin` },
              { front: `🇪🇸`, back: `Spanien – Madrid` },
              { front: `🇵🇹`, back: `Portugal – Lissabon` },
              { front: `🇧🇪`, back: `Belgien – Brüssel` },
              { front: `🇳🇱`, back: `Niederlande – Amsterdam` },
              { front: `🇦🇹`, back: `Österreich – Wien` },
              { front: `🇬🇷`, back: `Griechenland – Athen` },
              { front: `🇷🇴`, back: `Rumänien – Bukarest` },
              { front: `🇵🇱`, back: `Polen – Warschau` },
              { front: `🇸🇪`, back: `Schweden – Stockholm` }
            ]
          }
        },
        {
          label: `🌍 Andere Zusammenschlüsse in der Welt`,
          html: `<p>Die EU ist nicht der einzige Zusammenschluss von Ländern. Es gibt andere, aber keiner ist so eng:</p>
<ul>
<li><b>Afrikanische Union</b> (55 Länder, Sitz in Addis Abeba).</li>
<li><b>ASEAN</b> (Länder Südostasiens, Sitz in Jakarta).</li>
<li><b>Mercosur</b> (Südamerika: Brasilien, Argentinien, Uruguay, Paraguay, Bolivien).</li>
</ul>
<p>Nur die EU hat ein <b>direkt gewähltes Parlament</b> der Bürger vieler Länder und eine gemeinsame Währung für viele Mitglieder.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 50.85, lon: 4.35, label: `Europäische Union – Brüssel`, color: `#1e3a8a` },
              { lat: 9.03, lon: 38.74, label: `Afrikanische Union – Addis Abeba`, color: `#16a34a` },
              { lat: -6.2, lon: 106.85, label: `ASEAN – Jakarta`, color: `#ef4444` },
              { lat: -34.9, lon: -56.16, label: `Mercosur – Montevideo`, color: `#f59e0b` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mindmap: Vom Krieg zur Union`,
      nodes: [
        { id: `guerre`, label: `Zwei Weltkriege`, x: 50, y: 6, color: `#64748b`, html: `1914–1918 und 1939–1945: das zerstörte Europa.`, why: `Frankreich und Deutschland hatten in 70 Jahren dreimal gegeneinander gekämpft (1870, 1914, 1939). Man brauchte einen Weg, den Krieg unmöglich zu machen, nicht nur zu verbieten.` },
        { id: `ventotene`, label: `Manifest von Ventotene`, x: 18, y: 28, color: `#a855f7`, html: `1941: der Traum von einem föderalen Europa.`, why: `Spinelli und Rossi, politische Gefangene des Faschismus, schrieben auf Zigarettenpapier, dass Europa nur Frieden haben würde, wenn es den Nationalismus überwindet. Der Text gelangte heimlich von der Insel.` },
        { id: `schuman`, label: `Schuman-Erklärung`, x: 50, y: 28, color: `#3b82f6`, html: `9. Mai 1950: Kohle und Stahl gemeinsam.`, why: `Die von Jean Monnet vorbereitete Idee war praktisch: Wer Kohle und Stahl (die man für Waffen braucht) gemeinsam kontrolliert, kann nicht heimlich einen Krieg vorbereiten. „Europa wird durch konkrete Tatsachen entstehen.“` },
        { id: `roma`, label: `Römische Verträge`, x: 82, y: 28, color: `#22c55e`, html: `1957: Die EWG der 6 Gründer entsteht.`, why: `Nach dem Erfolg der EGKS beschlossen die 6 Länder, die ganze Wirtschaft zu verbinden: ein gemeinsamer Markt ohne Zölle. Sie wurden am 25. März 1957 auf dem Kapitol unterzeichnet.` },
        { id: `maastricht`, label: `Maastricht`, x: 50, y: 52, color: `#f59e0b`, html: `1992: Die Europäische Union und die Unionsbürgerschaft entstehen.`, why: `Nach dem Fall der Berliner Mauer (1989) und der deutschen Wiedervereinigung wollten die Länder auch eine politische Union, mit einer gemeinsamen Währung und gemeinsamen Rechten für die Bürger.` },
        { id: `istituzioni`, label: `Institutionen`, x: 18, y: 78, color: `#0ea5e9`, html: `Kommission, Parlament, Rat, Gerichtshof, EZB.`, why: `Sie sind ein Gleichgewicht zwischen zwei Anforderungen: den <b>Bürgern</b> eine Stimme zu geben (gewähltes Parlament, seit 1979) und den <b>Regierungen</b> der Staaten (Räte), mit einem Organ „von allen“, das vorschlägt (Kommission).` },
        { id: `euro`, label: `Euro`, x: 50, y: 78, color: `#eab308`, html: `Gemeinsame Währung seit 1999 (in der Geldbörse seit 2002).`, why: `Mit einer einzigen Währung verliert man keine Zeit und kein Geld beim Wechseln, und man kann die Preise leicht vergleichen. Um beizutreten, muss ein Staat seine Finanzen in Ordnung haben (die „Maastricht-Kriterien“).` },
        { id: `cittadini`, label: `Rechte der Bürger`, x: 82, y: 78, color: `#ef4444`, html: `Freizügigkeit, Schengen, Erasmus.`, why: `Der Schengen-Raum trägt den Namen des kleinen Ortes in Luxemburg, wo 1985 das Abkommen unterzeichnet wurde. Erasmus trägt den Namen des Humanisten Erasmus von Rotterdam, der durch ganz Europa reiste und studierte.` }
      ],
      edges: [
        [`guerre`, `ventotene`, `inspiriert`], [`guerre`, `schuman`, `drängt zu`], [`schuman`, `roma`, `führt zu`],
        [`roma`, `maastricht`, `erweitert sich zu`], [`ventotene`, `maastricht`, `verwirklichter Traum`],
        [`maastricht`, `istituzioni`, `stärkt`], [`maastricht`, `euro`, `schafft`], [`maastricht`, `cittadini`, `gibt`]
      ]
    },
    {
      type: `quiz`, title: `Mini-Quiz: Institutionen und Symbole`,
      questions: [
        { type: `mc`, q: `Welche Institution schlägt die europäischen Gesetze vor?`, options: [`Die Europäische Kommission`, `Der Gerichtshof`, `Die Europäische Zentralbank`], answer: 0, explain: `Die Kommission hat das „Initiativrecht“: Sie schlägt die Gesetze vor.` },
        { type: `mc`, q: `Wie viele Sterne sind auf der europäischen Flagge?`, options: [`27`, `12`, `6`], answer: 1, explain: `Es sind 12, ein Symbol für Vollkommenheit, und sie ändern sich nicht mit der Zahl der Länder.` },
        { type: `tf`, q: `Das Europäische Parlament wird direkt von den Bürgern gewählt.`, answer: true, explain: `Seit 1979 wählen die Bürger es alle 5 Jahre.` }
      ]
    }
  ],
  glossary: [
    { t: `Europäische Union (EU)`, d: `Politischer und wirtschaftlicher Zusammenschluss von 27 europäischen Staaten.` },
    { t: `Mitgliedstaat`, d: `Land, das zur Europäischen Union gehört.` },
    { t: `Vertrag`, d: `Schriftliches Abkommen zwischen Staaten; die Verträge sind die „Grundregeln“ der EU.` },
    { t: `Europäische Kommission`, d: `Institution, die die Gesetze vorschlägt und ihre Anwendung kontrolliert.` },
    { t: `Europäisches Parlament`, d: `Versammlung von 720 von den europäischen Bürgern gewählten Abgeordneten.` },
    { t: `Rat der EU`, d: `Treffen der Minister der Mitgliedstaaten; beschließt die Gesetze mit dem Parlament.` },
    { t: `Euro`, d: `Gemeinsame Währung, die von 21 EU-Ländern benutzt wird.` },
    { t: `Schengen-Raum`, d: `Gebiet ohne feste Kontrollen an den Binnengrenzen.` },
    { t: `Erasmus`, d: `Programm, das es ermöglicht, in einem anderen europäischen Land zu studieren.` },
    { t: `Brexit`, d: `Austritt des Vereinigten Königreichs aus der EU (31. Januar 2020).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `Wie viele Gründerländer gab es 1957?`, answer: 6, tol: 0, explain: `Belgien, Frankreich, Deutschland, Italien, Luxemburg, Niederlande.` },
      { type: `mc`, q: `Welches dieser Länder ist KEIN Gründer?`, options: [`Italien`, `Spanien`, `Belgien`], answer: 1, explain: `Spanien trat 1986 bei.` },
      { type: `order`, q: `Bring in die richtige Reihenfolge.`, items: [`Manifest von Ventotene`, `Schuman-Erklärung`, `Römische Verträge`, `Vertrag von Maastricht`, `Euro in der Geldbörse`], explain: `1941 → 1950 → 1957 → 1992 → 2002.` },
      { type: `mc`, q: `Wo hat der Gerichtshof der EU seinen Sitz?`, options: [`Brüssel`, `Luxemburg`, `Frankfurt`], answer: 1, explain: `In Luxemburg.` },
      { type: `text`, q: `Wie heißt die gemeinsame europäische Währung?`, answer: [`euro`, `der euro`], explain: `Der Euro.` },
      { type: `tf`, q: `Alle Länder der EU benutzen den Euro.`, answer: false, explain: `6 EU-Länder haben noch ihre eigene Währung, wie Polen und Schweden.` },
      { type: `mc`, q: `Was feiert man am 9. Mai?`, options: [`Den Europatag`, `Den Tag der Republik`, `Das Kriegsende`], answer: 0, explain: `Er erinnert an die Schuman-Erklärung vom 9. Mai 1950.` },
      { type: `mc`, q: `Welches Land ist 2020 aus der EU ausgetreten?`, options: [`Irland`, `Vereinigtes Königreich`, `Norwegen`], answer: 1, explain: `Das Vereinigte Königreich, mit dem Brexit.` },
      { type: `mc`, q: `Wer beschließt die europäischen Gesetze?`, options: [`Nur die Kommission`, `Europäisches Parlament und Rat der EU gemeinsam`, `Die Europäische Zentralbank`], answer: 1, explain: `Die Kommission schlägt vor, Parlament und Rat beschließen.` },
      { type: `text`, q: `Wie heißt die europäische Hymne?`, answer: [`ode an die freude`, `die ode an die freude`, `an die freude`], explain: `Die „Ode an die Freude“ von Beethoven.` },
      { type: `tf`, q: `Dank Schengen gibt es zwischen Italien und Frankreich keine festen Kontrollen an der Grenze.`, answer: true, explain: `Beide Länder gehören zum Schengen-Raum.` },
      { type: `num`, q: `Wie viele Amtssprachen hat die EU?`, answer: 24, tol: 0, explain: `24 Amtssprachen, darunter Deutsch und Italienisch.` }
    ]
  }
});
