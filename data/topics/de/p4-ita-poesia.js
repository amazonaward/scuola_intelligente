TOPIC('de', {
  id: "p4-ita-poesia",
  title: "Das Gedicht (la poesia)",
  intro: "Das Gedicht ist ein besonderer Text: Die Zeile bricht um, bevor die Seite zu Ende ist, es hat einen Rhythmus wie ein Lied und benutzt Wörter wie Farben, damit <b>Bilder</b> und <b>Gefühle</b> entstehen. Wir lernen, <b>Verse</b> (<i>versi</i>), <b>Strophen</b> (<i>strofe</i>), <b>Reime</b> (<i>rime</i>) und die wichtigsten <b>rhetorischen Figuren</b> wie den <b>Vergleich</b> (<i>similitudine</i>) zu erkennen. Die Beispielgedichte bleiben auf Italienisch, damit du Reim und Klang wirklich hörst.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Was ist ein Gedicht?",
      html: `<p>Das <b>Gedicht</b> (<i>poesia</i>, oder poetischer Text) ist ein Text, der <b>Gefühle</b>, <b>Empfindungen</b> und <b>Gedanken</b> musikalisch ausdrückt. Der Dichter wählt jedes Wort mit großer Sorgfalt, wegen seiner <b>Bedeutung</b>, aber auch wegen seines <b>Klangs</b>.</p>
<p>Man erkennt es sofort daran, dass:</p>
<ul>
<li>es in <b>Versen</b> geschrieben ist: Zeilen, die umbrechen, bevor der Seitenrand erreicht ist;</li>
<li>die Verse in <b>Strophen</b> zusammengefasst sind, getrennt durch einen weißen Zwischenraum;</li>
<li>es oft einen <b>Rhythmus</b> und <b>Reime</b> hat;</li>
<li>es eine Sprache voller <b>Bilder</b> benutzt: die <b>rhetorischen Figuren</b>.</li>
</ul>
<p>Das italienische Wort „poesia“ kommt vom griechischen <i>poiéin</i>, das <b>„machen, schaffen“</b> bedeutet: Der Dichter ist „der, der mit Worten schafft“.</p>`
    },
    {
      type: "text",
      title: "Schritt 1 – Verse und Strophen",
      html: `<p>Der <b>Vers</b> (<i>verso</i>) ist die einzelne Zeile des Gedichts. Er bricht nicht um, weil der Platz zu Ende ist, sondern weil der Dichter es so entscheidet, um den Wörtern Rhythmus und Gewicht zu geben.</p>
<p>Die <b>Strophe</b> (<i>strofa</i>) ist eine Gruppe von Versen. Die Strophen haben je nach Anzahl der Verse verschiedene Namen:</p>
<table>
<tr><th>Verse</th><th>Name der Strophe</th></tr>
<tr><td>2</td><td><b>Distichon</b> (<i>distico</i>)</td></tr>
<tr><td>3</td><td><b>Terzine</b> (<i>terzina</i>; Dante benutzt sie in der <i>Divina Commedia</i>)</td></tr>
<tr><td>4</td><td><b>Quartett</b> (<i>quartina</i>, Vierzeiler)</td></tr>
<tr><td>6</td><td><b>Sestine</b> (<i>sestina</i>)</td></tr>
<tr><td>8</td><td><b>Stanze</b> (<i>ottava</i>)</td></tr>
</table>
<p>Die Verse werden gemessen, indem man die <b>Silben</b> zählt: Ein Vers mit 7 Silben heißt <b>Siebensilbler</b> (<i>settenario</i>), einer mit 11 Silben <b>Elfsilbler</b> (<i>endecasillabo</i>; der wichtigste Vers der italienischen Dichtung). Viele moderne Dichter schreiben dagegen in <b>freien Versen</b> (<i>versi liberi</i>), also ohne feste Länge und ohne Reime.</p>`
    },
    {
      type: "widget",
      title: "Finde die Teile des Gedichts",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#fffbeb"/>
<rect x="20" y="15" width="400" height="310" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="3"/>
<text x="220" y="50" font-size="22" text-anchor="middle" fill="#b45309" font-weight="bold">La luna</text>
<text x="50" y="95" font-size="18" fill="#1f2937">La luna stanotte è un <tspan fill="#dc2626" font-weight="bold">sorriso</tspan></text>
<text x="50" y="122" font-size="18" fill="#1f2937">appeso nel cielo di seta,</text>
<text x="50" y="149" font-size="18" fill="#1f2937">si specchia nel lago, sul <tspan fill="#dc2626" font-weight="bold">viso</tspan></text>
<text x="50" y="176" font-size="18" fill="#1f2937">ha l'aria di un vecchio poeta.</text>
<text x="50" y="225" font-size="18" fill="#1f2937">Le stelle le fanno corona</text>
<text x="50" y="252" font-size="18" fill="#1f2937">come lucciole in fila,</text>
<text x="50" y="279" font-size="18" fill="#1f2937">e il vento una ninna nanna</text>
<text x="50" y="306" font-size="18" fill="#1f2937">piano piano le canta.</text>
<path d="M330 92 Q400 120 290 146" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4" fill="none"/>
<path d="M435 80 L455 80 L455 185 L435 185" stroke="#2563eb" stroke-width="3" fill="none"/>
</svg>`,
        spots: [
          { x: 320, y: 44, label: "Titel" },
          { x: 34, y: 116, label: "Vers" },
          { x: 470, y: 132, label: "Strophe" },
          { x: 400, y: 120, label: "Reim" },
          { x: 34, y: 246, label: "Vergleich" },
          { x: 34, y: 273, label: "Personifikation" }
        ]
      },
      caption: "Tippe auf einen Punkt und wähle die richtige Beschriftung: Titel, ein Vers, die Strophe, der Reim sorriso/viso, der Vergleich und die Personifikation. (Für diese Lektion erfundenes Gedicht.)"
    },
    {
      type: "text",
      title: "Schritt 2 – Die Reime (le rime)",
      html: `<p>Zwei Verse stehen im <b>Reim</b>, wenn ihre Schlusswörter <b>ab dem letzten betonten Vokal gleich</b> sind: <i>c<b>uore</b> – am<b>ore</b></i>, <i>gi<b>ardino</b> – matt<b>ino</b></i>, <i>s<b>ole</b> – vi<b>ole</b></i>.</p>
<p>Um die Reime zu beschreiben, benutzt man <b>Buchstaben des Alphabets</b>: Verse, die sich miteinander reimen, bekommen denselben Buchstaben.</p>
<ul>
<li><b>Paarreim</b> (<i>rima baciata</i>, AABB): Zwei aufeinanderfolgende Verse reimen sich.<br><i>Il gatto nel <b>prato</b> (A) / si è addormentato (A) / sogna una <b>trota</b> (B) / che nuota e che ruota (B).</i></li>
<li><b>Kreuzreim</b> (<i>rima alternata</i>, ABAB): Der 1. reimt sich mit dem 3. und der 2. mit dem 4.<br><i>Cade la <b>neve</b> (A) / sul tetto <b>bianco</b> (B) / leggera e <b>breve</b> (A) / sul passo <b>stanco</b> (B).</i></li>
<li><b>umarmender Reim</b> (<i>rima incrociata</i>, ABBA): Der 1. reimt sich mit dem 4. und der 2. mit dem 3.<br><i>Nel mare <b>blu</b> (A) / nuota il <b>delfino</b> (B) / vicino al <b>bambino</b> (B) / e salta <b>su</b> (A).</i></li>
</ul>
<p>Nicht alle Gedichte haben Reime! Gedichte in <b>freien Versen</b> spielen mit Rhythmus, Pausen und Bildern.</p>`
    },
    {
      type: "svg",
      title: "Drei Arten von Reim",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="100" y="35" font-size="20" text-anchor="middle" fill="#6d28d9" font-weight="bold">PAARREIM</text>
<text x="300" y="35" font-size="20" text-anchor="middle" fill="#be185d" font-weight="bold">KREUZREIM</text>
<text x="500" y="35" font-size="20" text-anchor="middle" fill="#0f766e" font-weight="bold">UMARMEND</text>
<g font-size="30" font-weight="bold" text-anchor="middle">
<text x="70" y="90" fill="#ef4444">A</text><text x="70" y="145" fill="#ef4444">A</text><text x="70" y="200" fill="#2563eb">B</text><text x="70" y="255" fill="#2563eb">B</text>
<text x="270" y="90" fill="#ef4444">A</text><text x="270" y="145" fill="#2563eb">B</text><text x="270" y="200" fill="#ef4444">A</text><text x="270" y="255" fill="#2563eb">B</text>
<text x="470" y="90" fill="#ef4444">A</text><text x="470" y="145" fill="#2563eb">B</text><text x="470" y="200" fill="#2563eb">B</text><text x="470" y="255" fill="#ef4444">A</text>
</g>
<g fill="none" stroke-width="4">
<path d="M95 80 Q130 112 95 135" stroke="#ef4444"/><path d="M95 190 Q130 222 95 245" stroke="#2563eb"/>
<path d="M295 80 Q345 135 295 190" stroke="#ef4444"/><path d="M295 135 Q345 190 295 245" stroke="#2563eb"/>
<path d="M495 80 Q570 162 495 245" stroke="#ef4444"/><path d="M495 135 Q525 162 495 190" stroke="#2563eb"/>
</g>
<text x="300" y="290" font-size="16" text-anchor="middle" fill="#1f2937">Die Linien verbinden die Verse, die sich reimen.</text>
</svg>`,
      caption: "Jeder Buchstabe ist ein Vers: gleicher Buchstabe = gleicher Reim."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Verse, Strophen und Reime",
      questions: [
        { type: "mc", q: "Eine Strophe mit 4 Versen heißt …", options: ["Terzine (terzina)", "Quartett (quartina)", "Distichon (distico)"], answer: 1, explain: "4 Verse = Quartett (quartina)." },
        { type: "mc", q: "Welches Wortpaar reimt sich?", options: ["mare – sole", "fiore – colore", "casa – cane"], answer: 1, explain: "Fi-ORE / col-ORE: gleich ab dem letzten betonten Vokal." },
        { type: "mc", q: "Das Schema ABAB bezeichnet einen …", options: ["Paarreim", "Kreuzreim", "umarmenden Reim"], answer: 1, explain: "Der 1. reimt sich mit dem 3., der 2. mit dem 4.: Kreuzreim (rima alternata)." }
      ]
    },
    {
      type: "text",
      title: "Schritt 3 – Der Vergleich und die anderen rhetorischen Figuren",
      html: `<p>Die <b>rhetorischen Figuren</b> (<i>figure retoriche</i>) sind besondere Arten, Wörter zu benutzen, um Bilder, Klänge und Gefühle zu erzeugen. Hier sind die wichtigsten:</p>
<ul>
<li><b>Vergleich</b> (<i>similitudine</i>): ein <b>Vergleich</b> zweier Dinge mit Wörtern wie <b>wie, scheint, ähnlich wie</b> (ital. <i>come, sembra, simile a, pare</i>): <i>„Gli occhi brillavano <b>come</b> stelle“</i> (Die Augen funkelten wie Sterne), <i>„Le nuvole <b>sembrano</b> panna montata“</i> (Die Wolken sehen aus wie Schlagsahne).</li>
<li><b>Metapher</b> (<i>metafora</i>): ein Vergleich <b>ohne „wie“</b>, stärker und direkter: <i>„I tuoi occhi <b>sono stelle</b>“</i> (Deine Augen sind Sterne), <i>„Quel bambino è un <b>terremoto</b>“</i> (Dieses Kind ist ein Erdbeben).</li>
<li><b>Personifikation</b> (<i>personificazione</i>): Tieren, Dingen oder Ideen werden menschliche Eigenschaften gegeben: <i>„Il vento <b>canta</b>“</i> (Der Wind singt), <i>„La luna <b>sorride</b>“</i> (Der Mond lächelt).</li>
<li><b>Lautmalerei</b> (<i>onomatopea</i>): Wörter, die ein Geräusch nachahmen: <i>tic tac, din don, splash, miao, bum</i>.</li>
<li><b>Anapher</b> (<i>anafora</i>): die Wiederholung eines oder mehrerer Wörter am Anfang mehrerer Verse: <i>„<b>Ti aspetto</b> al mattino, / <b>ti aspetto</b> la sera…“</i> (Ich warte am Morgen auf dich, ich warte am Abend auf dich …).</li>
<li><b>Alliteration</b> (<i>allitterazione</i>): Wiederholung gleicher Laute in nahe beieinanderstehenden Wörtern: <i>„<b>tr</b>otta il <b>tr</b>enino <b>tr</b>a i <b>tr</b>ifogli“</i> (der Zug trabt zwischen den Kleeblättern).</li>
</ul>
<p>Beispiel aus der italienischen Dichtung: Giosuè Carducci schreibt in <i>San Martino</i> (1883), dass <i>„sotto il maestrale / <b>urla</b> e biancheggia il mar“</i> (unter dem Nordwestwind heult das Meer und schäumt weiß): Das Meer „heult“ wie ein Mensch. Das ist eine <b>Personifikation</b>!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Wir analysieren ein Gedicht",
      html: `<p>Lies dieses Gedicht (für die Lektion erfunden):</p>
<p style="padding-left:1em"><i><b>Il temporale</b><br>
Bum! Rimbomba il tuono sul monte,<br>
la pioggia corre come un cavallo,<br>
lava le strade, lava la fonte,<br>
e il cielo diventa di cristallo.</i></p>
<p>(Das Gewitter: Bum! Der Donner dröhnt auf dem Berg, der Regen rennt wie ein Pferd, wäscht die Straßen, wäscht die Quelle, und der Himmel wird zu Kristall.)</p>
<ul>
<li><b>Verse</b>: 4 → es ist ein <b>Quartett</b> (<i>quartina</i>).</li>
<li><b>Reime</b>: mont<b>e</b>/font<b>e</b> (A) und cav<b>allo</b>/crist<b>allo</b> (B) → Schema <b>ABAB</b>, <b>Kreuzreim</b>.</li>
<li><b>Lautmalerei</b>: „Bum!“ ahmt den Donner nach.</li>
<li><b>Vergleich</b>: „corre <b>come</b> un cavallo“ (rennt wie ein Pferd).</li>
<li><b>Anapher</b>: „<b>lava</b> le strade, <b>lava</b> la fonte“ (Wiederholung).</li>
<li><b>Metapher</b>: „il cielo diventa di cristallo“ (klar und durchsichtig, ohne „wie“).</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Schreib ein Gedicht mit Vergleichen",
      html: `<p>Probiere diese Übung aus, die viele Lehrerinnen und Lehrer benutzen:</p>
<ol>
<li>Wähle einen Gegenstand oder ein Tier (z. B. <b>die Katze</b>, <i>il gatto</i>).</li>
<li>Schreibe 4 Verse, die alle mit demselben Namen beginnen (Anapher) und ein „come“ (wie) enthalten:<br>
<i>Il mio gatto è morbido <b>come</b> una nuvola,<br>
il mio gatto è silenzioso <b>come</b> la neve,<br>
il mio gatto è veloce <b>come</b> il vento,<br>
il mio gatto è pigro <b>come</b> una domenica.</i><br>
(Meine Katze ist weich wie eine Wolke, still wie der Schnee, schnell wie der Wind, faul wie ein Sonntag.)</li>
<li>Verwandle nun einen Vergleich in eine <b>Metapher</b>: <i>„Il mio gatto è una nuvola che fa le fusa.“</i> (Meine Katze ist eine Wolke, die schnurrt.)</li>
</ol>
<p>Du hast ein Gedicht in <b>freien Versen</b> mit <b>Anapher</b>, <b>Vergleichen</b> und einer <b>Metapher</b> geschrieben!</p>`
    },
    {
      type: "widget",
      title: "Spiel: Welche rhetorische Figur ist das?",
      widget: "classify",
      options: {
        groups: ["Vergleich", "Metapher", "Personifikation", "Lautmalerei"],
        items: [
          ["Bianco come il latte", 0], ["Correva veloce come una lepre", 0], ["Le foglie sembrano farfalle", 0],
          ["Sei un leone!", 1], ["Il mare è uno specchio", 1], ["Ha un cuore di pietra", 1],
          ["Il sole sorride", 2], ["Gli alberi danzano nel vento", 2], ["La sveglia mi chiama", 2],
          ["Drin drin!", 3], ["Cip cip", 3], ["Splash!", 3]
        ]
      },
      caption: "Merke dir: Wenn „come“ (wie) oder „sembra“ (scheint) dasteht, ist es ein Vergleich."
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Das japanische Haiku",
      html: `<p>In <b>Japan</b> gibt es ein ganz kurzes Gedicht: das <b>Haiku</b>. Es hat nur <b>3 Verse</b> mit <b>5, 7 und 5 Silben</b> (im Japanischen zählt man etwas andere Klangeinheiten als unsere Silben) und handelt meist von der <b>Natur</b> und den <b>Jahreszeiten</b>.</p>
<p>Der berühmteste Meister war <b>Matsuo Bashō</b> (1644–1694). Sein bekanntestes Haiku lautet übersetzt: <i>„Der alte Teich / ein Frosch springt hinein: / das Geräusch des Wassers.“</i></p>
<p>Versuche, selbst eines zu schreiben: 5 – 7 – 5!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Die Divina Commedia in Terzinen",
      html: `<p><b>Dante Alighieri</b> schrieb zu Beginn des 14. Jahrhunderts die <i>Divina Commedia</i> (Göttliche Komödie): mehr als <b>14 000 Verse</b>, alle <b>Elfsilbler</b> (11 Silben), zu <b>Terzinen</b> zusammengefasst mit dem <b>Kettenreim</b> (<i>rima incatenata</i>, ABA BCB CDC …): Jede Terzine „hakt“ sich in die nächste ein wie die Glieder einer Kette.</p>
<p>Den ersten Vers kennen fast alle Italiener: <i>„Nel mezzo del cammin di nostra vita“</i> (Auf halbem Weg des Lebens, das uns bestimmt ist).</p>`
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li><b>Vers</b> (<i>verso</i>) = eine Zeile des Gedichts; <b>Strophe</b> (<i>strofa</i>) = Gruppe von Versen (Distichon, Terzine, Quartett …).</li>
<li><b>Reim</b> = gleiche Wörter ab dem letzten betonten Vokal.</li>
<li>Schemata: <b>Paarreim AABB</b>, <b>Kreuzreim ABAB</b>, <b>umarmender Reim ABBA</b>.</li>
<li><b>Vergleich</b> = Vergleich mit „wie“ (<i>come</i>); <b>Metapher</b> = Vergleich ohne „wie“.</li>
<li><b>Personifikation</b> = Dinge handeln wie Menschen; <b>Lautmalerei</b> = Klangwörter.</li>
<li><b>Freie Verse</b> haben weder feste Länge noch vorgeschriebene Reime.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das Gedicht zu verstehen",
      intro: "Gedichte kann man hören, singen, zeichnen und sogar wie ein Spiel bauen. Wähle den Weg, der zu dir passt.",
      tabs: [
        {
          label: "🎵 Wie ein Lied",
          html: `<p><b>Lieder</b> sind Gedichte mit Musik! Sie haben:</p>
<ul>
<li><b>Strophen</b>, genau wie Gedichte;</li>
<li>den <b>Refrain</b>, der sich wiederholt (ein bisschen wie die <b>Anapher</b>);</li>
<li><b>Reime</b>, die helfen, sich die Wörter leicht zu merken;</li>
<li>den <b>Rhythmus</b>, den man mit den Händen klatschen kann.</li>
</ul>
<p>Auch der <b>Rap</b> ist voller Reime und Alliterationen. Versuche, bei jeder Silbe eines Verses zu klatschen: <i>„Nel / mez / zo / del / cam / min / di / no / stra / vi / ta“</i> → 11 Schläge: ein Elfsilbler!</p>`
        },
        {
          label: "🖼️ Das Figurengedicht",
          html: `<p>Der französische Dichter <b>Guillaume Apollinaire</b> veröffentlichte <b>1918</b> ein Buch mit dem Titel <i>Calligrammes</i>: Gedichte, in denen die Wörter so angeordnet sind, dass sie das <b>zeichnen</b>, wovon sie sprechen. Auch die italienischen <b>Futuristen</b> wie Filippo Tommaso Marinetti spielten mit der Form der Wörter.</p>
<p>Versuche es selbst: Schreibe ein Gedicht über den Regen, indem du die Wörter „fallen“ lässt, oder ein Gedicht über die Sonne, indem du die Wörter im Kreis anordnest.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<g font-size="17" fill="#1d4ed8" font-style="italic">
<text x="60" y="40">gocce</text><text x="75" y="80">di</text><text x="65" y="120">pioggia</text><text x="80" y="160">cadono</text><text x="70" y="200">piano</text>
<text x="150" y="60">tic</text><text x="160" y="100">tic</text><text x="150" y="140">sul</text><text x="160" y="180">vetro</text><text x="155" y="220">tic</text>
<text x="230" y="30">e</text><text x="235" y="70">il</text><text x="225" y="110">cielo</text><text x="235" y="150">piange</text><text x="230" y="190">piano</text>
</g>
<circle cx="450" cy="130" r="45" fill="#fde047" stroke="#ca8a04" stroke-width="3"/>
<g font-size="16" fill="#b45309" font-weight="bold" text-anchor="middle">
<text x="450" y="60">luce</text><text x="530" y="135">calda</text><text x="450" y="215">sole</text><text x="370" y="135">oro</text>
<text x="510" y="80">brilla</text><text x="510" y="190">scalda</text><text x="390" y="190">ride</text><text x="390" y="80">gioca</text>
</g>
</svg>`
        },
        {
          label: "🇯🇵 Schreib ein Haiku",
          html: `<p>Die japanische Methode ist perfekt für alle, die Gedichte schwierig finden: Es genügen <b>3 Verse</b> und viel <b>Beobachtung</b>.</p>
<ol>
<li><b>Schau</b> dir etwas in der Natur an (ein Blatt, eine Schnecke, den Schnee).</li>
<li>Erster Vers, <b>5 Silben</b>: was du siehst. <i>„Foglia d'autunno“</i> (fo-glia-d'au-tun-no) – Herbstblatt.</li>
<li>Zweiter Vers, <b>7 Silben</b>: was geschieht. <i>„scende lenta sul prato“</i> (scen-de-len-ta-sul-pra-to) – sinkt langsam auf die Wiese.</li>
<li>Dritter Vers, <b>5 Silben</b>: eine Überraschung oder ein Gefühl. <i>„il vento tace“</i> (il-ven-to-ta-ce) – der Wind schweigt.</li>
</ol>
<p>Mach dir keine Sorgen, wenn die Silben nicht perfekt stimmen: Auch die Übersetzer von Haiku halten das 5-7-5 oft nicht genau ein!</p>`
        },
        {
          label: "🃏 Karteikarten der Figuren",
          html: `<p>Wiederhole die rhetorischen Figuren mit den Karten: Lies die Vorderseite, versuche zu antworten, dann dreh die Karte um.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "\"Dolce come il miele\"", back: "Vergleich (es steht „come“ da)" },
              { front: "\"Sei il mio sole\"", back: "Metapher (Vergleich ohne „come“)" },
              { front: "\"La pioggia bussa ai vetri\"", back: "Personifikation" },
              { front: "\"Toc toc\"", back: "Lautmalerei" },
              { front: "Reim AABB", back: "Paarreim" },
              { front: "Strophe mit 3 Versen", back: "Terzine (terzina)" },
              { front: "Vers mit 11 Silben", back: "Elfsilbler (endecasillabo)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Gedichts",
      nodes: [
        { id: "poesia", label: "Gedicht", x: 50, y: 6, color: "#2563eb", html: "Text in Versen, der Gefühle und Bilder musikalisch ausdrückt.", why: "Vom griechischen <i>poiéin</i>, „machen, schaffen“. Die ersten Gedichte wurden <b>gesungen</b>: Vor der Schrift halfen Rhythmus und Reime, sich lange Erzählungen zu merken, wie die <i>Ilias</i> und die <i>Odyssee</i>, die Homer zugeschrieben werden." },
        { id: "verso", label: "Vers", x: 20, y: 30, color: "#ef4444", html: "Die einzelne Zeile des Gedichts.", why: "Vom lateinischen <i>versus</i>, „gewendet, umgedreht“: Wie der Pflug, der am Ende des Feldes ankommt und zurückfährt, „wendet“ der Vers an einer Stelle und bricht um." },
        { id: "strofa", label: "Strophe", x: 50, y: 30, color: "#f59e0b", html: "Gruppe von Versen: Distichon, Terzine, Quartett …", why: "Vom griechischen <i>strophé</i>, „Wendung, Drehung“: Im griechischen Theater sang der Chor einen Teil, indem er sich in eine Richtung drehte, und kehrte dann mit der Antistrophe zurück." },
        { id: "rima", label: "Reim", x: 80, y: 30, color: "#a855f7", html: "Klanggleichheit ab dem letzten betonten Vokal.", why: "Die Griechen und die klassischen Römer benutzten den Reim fast nicht: Sie zählten lange und kurze Silben. Der Reim verbreitete sich im Mittelalter, mit den christlichen lateinischen Hymnen und dann mit den provenzalischen Dichtern und der <b>Sizilianischen Dichterschule</b> (13. Jahrhundert), die auch das Sonett schuf." },
        { id: "metrica", label: "Länge des Verses", x: 20, y: 58, color: "#0ea5e9", html: "Man zählt die Silben: Siebensilbler (7), Elfsilbler (11) …", why: "Der Elfsilbler ist der Vers, den die großen italienischen Dichter (Dante, Petrarca, Leopardi) am meisten benutzen, weil er einen abwechslungsreichen, natürlichen Rhythmus hat, nah an unserer Sprechweise." },
        { id: "liberi", label: "Freie Verse", x: 20, y: 86, color: "#64748b", html: "Verse ohne feste Länge und ohne vorgeschriebene Reime.", why: "Sie verbreiteten sich zwischen dem Ende des 19. und dem 20. Jahrhundert: Dichter wie der Amerikaner Walt Whitman und später viele Italiener des 20. Jahrhunderts wollten sich von den Regeln befreien, um dem Rhythmus des Denkens zu folgen." },
        { id: "figure", label: "Rhetorische Figuren", x: 65, y: 58, color: "#16a34a", html: "Besondere Arten, Wörter zu benutzen: Vergleich, Metapher, Personifikation, Lautmalerei, Anapher …", why: "„Rhetorik“ war im antiken Griechenland die Kunst, wirkungsvoll zu sprechen. Aristoteles (4. Jahrhundert v. Chr.) untersuchte schon die Metapher, die er als „Übertragung“ eines Namens von einer Sache auf eine andere bestimmte." },
        { id: "similitudine", label: "Vergleich", x: 50, y: 86, color: "#14b8a6", html: "Vergleich mit „wie“, „scheint“, „ähnlich wie“.", why: "Unser Gehirn versteht Neues, indem es es mit Bekanntem vergleicht: Der Vergleich tut genau das. Homer benutzt unzählige: Die Helden kämpfen „wie Löwen“." },
        { id: "metafora", label: "Metapher", x: 82, y: 86, color: "#be185d", html: "Vergleich ohne „wie“: <i>sei un leone</i> (du bist ein Löwe).", why: "Vom griechischen <i>metaphérein</i>, „übertragen“: Die Bedeutung wird von einer Sache auf die andere übertragen. Sie ist ein „verkürzter“ Vergleich, stärker und überraschender." }
      ],
      edges: [
        ["poesia", "verso", "besteht aus"],
        ["verso", "strofa", "werden gruppiert zu"],
        ["poesia", "rima", "hat oft"],
        ["verso", "metrica", "wird gemessen"],
        ["metrica", "liberi", "oder"],
        ["poesia", "figure", "benutzt"],
        ["figure", "similitudine", ""],
        ["figure", "metafora", ""],
        ["similitudine", "metafora", "ohne „wie“"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Die rhetorischen Figuren",
      questions: [
        { type: "mc", q: "\"Il fiume è un serpente d'argento.\" (Der Fluss ist eine silberne Schlange.) Das ist ein/e …", options: ["Vergleich", "Metapher", "Lautmalerei"], answer: 1, explain: "Vergleich ohne „wie“: Metapher." },
        { type: "mc", q: "\"Le campane cantano a festa.\" (Die Glocken singen zum Fest.) Das ist eine …", options: ["Personifikation", "Reim", "Vergleich"], answer: 0, explain: "Die Glocken „singen“ wie Menschen: Personifikation." },
        { type: "tf", q: "\"Leggero come una piuma\" (leicht wie eine Feder) ist ein Vergleich.", answer: true, explain: "Es steht „come“ (wie) da: Vergleich." }
      ]
    }
  ],
  glossary: [
    { t: "Vers (verso)", d: "Jede Zeile eines Gedichts." },
    { t: "Strophe (strofa)", d: "Gruppe von Versen, durch einen Zwischenraum von den anderen getrennt." },
    { t: "Reim (rima)", d: "Klanggleichheit zwischen Wörtern ab dem letzten betonten Vokal." },
    { t: "Paarreim (rima baciata)", d: "Schema AABB: Zwei aufeinanderfolgende Verse reimen sich." },
    { t: "Kreuzreim (rima alternata)", d: "Schema ABAB: Der 1. und 3., der 2. und 4. Vers reimen sich." },
    { t: "Umarmender Reim (rima incrociata)", d: "Schema ABBA: Der 1. und 4., der 2. und 3. Vers reimen sich." },
    { t: "Vergleich (similitudine)", d: "Vergleich zweier Dinge mit „wie“, „scheint“, „ähnlich wie“." },
    { t: "Metapher (metafora)", d: "Vergleich ohne „wie“." },
    { t: "Personifikation (personificazione)", d: "Dingen, Tieren oder Ideen menschliche Handlungen oder Eigenschaften geben." },
    { t: "Lautmalerei (onomatopea)", d: "Wort, das einen Klang oder ein Geräusch nachahmt." },
    { t: "Elfsilbler (endecasillabo)", d: "Vers mit 11 Silben, der in der italienischen Dichtung am häufigsten benutzte." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie heißt jede Zeile eines Gedichts?", options: ["Strophe", "Vers", "Reim"], answer: 1, explain: "Die Zeile ist der Vers (verso)." },
      { type: "mc", q: "Eine Strophe mit 3 Versen heißt …", options: ["Terzine (terzina)", "Quartett (quartina)", "Distichon (distico)"], answer: 0, explain: "3 Verse = Terzine." },
      { type: "mc", q: "Welches Paar reimt sich?", options: ["luna – lana", "stella – bella", "notte – note"], answer: 1, explain: "St-ELLA / b-ELLA." },
      { type: "mc", q: "Das Schema ABBA bezeichnet einen …", options: ["Paarreim", "Kreuzreim", "umarmenden Reim"], answer: 2, explain: "1. mit 4., 2. mit 3.: umarmender Reim (rima incrociata)." },
      { type: "tf", q: "Alle Gedichte müssen Reime haben.", answer: false, explain: "Gedichte in freien Versen können ohne Reime sein." },
      { type: "mc", q: "\"Il bambino dormiva come un ghiro.\" (Das Kind schlief wie ein Murmeltier.) Das ist ein/e …", options: ["Metapher", "Vergleich", "Anapher"], answer: 1, explain: "Vergleich mit „come“: Vergleich (similitudine)." },
      { type: "mc", q: "\"Tic tac, fa l'orologio.\" (Tick tack, macht die Uhr.) „Tic tac“ ist …", options: ["eine Lautmalerei", "eine Metapher", "eine Personifikation"], answer: 0, explain: "Es ahmt ein Geräusch nach: Lautmalerei (onomatopea)." },
      { type: "text", q: "Wie heißt der Vergleich, der OHNE das Wort „come“ (wie) gemacht wird?", answer: ["metafora", "la metafora", "una metafora", "Metapher", "die Metapher", "eine Metapher"], explain: "Die Metapher." },
      { type: "num", q: "Wie viele Silben hat ein Elfsilbler (endecasillabo)?", answer: 11, explain: "Endeca = elf auf Griechisch." },
      { type: "tf", q: "Das Haiku ist ein japanisches Gedicht mit 3 Versen.", answer: true, explain: "Drei Verse mit 5, 7, 5 Klangeinheiten." },
      { type: "order", q: "Ordne die Strophen von der kürzesten zur längsten.", items: ["Distichon (distico)", "Terzine (terzina)", "Quartett (quartina)", "Sestine (sestina)", "Stanze (ottava)"], explain: "2, 3, 4, 6, 8 Verse." },
      { type: "mc", q: "\"Il vento sussurra tra gli alberi.\" (Der Wind flüstert zwischen den Bäumen.) Welche rhetorische Figur steckt darin?", options: ["Personifikation", "Vergleich", "Reim"], answer: 0, explain: "Der Wind „flüstert“ wie ein Mensch." }
    ]
  }
});
