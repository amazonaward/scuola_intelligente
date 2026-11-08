TOPIC('de', {
  id: "m2-ita-poesia",
  title: "Die Dichtung und die rhetorischen Figuren",
  intro: "Die Dichtung ist die „konzentrierteste“ Art, Wörter zu benutzen: Sie sagt viel auf wenig Raum und spielt mit <b>Klängen</b>, <b>Rhythmus</b> und <b>Bildern</b>. Wir lernen, ein Gedicht so zu lesen, wie es die Dichter tun: Silben zählen, Reime hören und die <b>rhetorischen Figuren</b> entdecken, die „Tricks“, die Wörter unvergesslich machen. (Die Gedichtbeispiele bleiben italienisch, mit deutscher Übersetzung in Klammern; die Erklärungen sind auf Deutsch.)",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Der poetische Text: Vers, Strophe, Reim",
      html: `<ul>
<li>Der <b>Vers</b> (<i>verso</i>) ist die Zeile des Gedichts. Er bricht nicht um, weil der Platz zu Ende ist, sondern nach der Entscheidung des Dichters.</li>
<li>Die <b>Strophe</b> (<i>strofa</i>) ist eine Gruppe von Versen, die durch einen weißen Zwischenraum von den anderen getrennt ist: <b>Distichon</b> (2 Verse), <b>Terzine</b> (3), <b>Quartett</b> (4), <b>Sextine</b> (6), <b>Stanze / Ottava</b> (8).</li>
<li>Der <b>Reim</b> (<i>rima</i>) ist die Gleichheit der Klänge vom betonten Vokal an: <i>am<b>ore</b> / cu<b>ore</b></i> (Liebe / Herz), <i>s<b>ole</b> / par<b>ole</b></i> (Sonne / Worte). Die wichtigsten Schemata (mit Buchstaben angegeben):
<ul>
<li><b>Paarreim</b> (<i>baciata</i>): AABB</li>
<li><b>Kreuzreim</b> (<i>alternata</i>): ABAB</li>
<li><b>Umarmender Reim</b> (<i>incrociata</i>): ABBA</li>
<li><b>Verketteter Reim</b> (<i>incatenata</i>, Terzinenreim): ABA BCB CDC (der von Dante)</li>
</ul></li>
<li>Gibt es keine Reime, spricht man von <b>reimlosen Versen</b> (<i>versi sciolti</i>); gibt es nicht einmal ein festes Maß, von <b>freien Versen</b> (<i>versi liberi</i>, im 20. Jahrhundert viel benutzt: Ungaretti, Montale).</li>
</ul>`
    },
    {
      type: "text",
      title: "Silben zählen: die Metrik",
      html: `<p>Die italienischen Verse werden nach der Zahl der <b>metrischen Silben</b> eingeteilt: <b>Siebensilber</b> (<i>settenario</i>, 7), <b>Achtsilber</b> (<i>ottonario</i>, 8), <b>Neunsilber</b> (<i>novenario</i>, 9), <b>Elfsilber</b> (<i>endecasillabo</i>, 11, der wichtigste Vers unserer Dichtung).</p>
<p>Die metrischen Silben sind nicht immer gleich den grammatischen, wegen dreier Regeln:</p>
<ol>
<li><b>Verschleifung</b> (<i>sinalefe</i>): Der Endvokal eines Wortes und der Anfangsvokal des folgenden Wortes verschmelzen zu einer einzigen Silbe: <i>mi / ri / tro / vai / per / u / na / sel / <b>va‿o</b> / scu / ra</i> → «selva oscura» liest man «sel-vao-scu-ra»: 11 metrische Silben statt 12 grammatischer.</li>
<li>Die <b>letzte betonte Silbe</b> zählt: Man zählt bis zur letzten Betonung und addiert 1. Endet der Vers mit einem <b>endbetonten</b> Wort (<i>tronca</i>, z. B. <i>città</i>), fügt man eine Silbe hinzu; endet er mit einem <b>drittletzt betonten</b> Wort (<i>sdrucciola</i>, z. B. <i>tavola</i>), zieht man eine ab.</li>
<li><b>Diärese</b> (<i>dieresi</i>) und <b>Synärese</b> (<i>sineresi</i>): Manchmal zählen zwei benachbarte Vokale als zwei Silben (Diärese, mit ¨ gekennzeichnet: <i>sopra la rïa</i>) oder als eine (Synärese).</li>
</ol>
<p>Beispiel: <i>Nel / mez / zo / del / cam / min / di / no / stra / vi / ta</i> = <b>11 Silben</b> → Elfsilber.</p>`
    },
    {
      type: "svg",
      title: "Das Reimschema",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fdf4ff"/>
<text x="20" y="32" font-size="18" font-weight="bold" fill="#701a75">Paarreim (AABB)</text>
<rect x="20" y="44" width="16" height="16" fill="#ec4899"/><text x="44" y="58" font-size="15" fill="#1f2937">…la sera fresca e piana <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="66" width="16" height="16" fill="#ec4899"/><text x="44" y="80" font-size="15" fill="#1f2937">…suona la campana <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="88" width="16" height="16" fill="#3b82f6"/><text x="44" y="102" font-size="15" fill="#1f2937">…il gatto sul cuscino <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="110" width="16" height="16" fill="#3b82f6"/><text x="44" y="124" font-size="15" fill="#1f2937">…dorme col suo micino <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<text x="320" y="32" font-size="18" font-weight="bold" fill="#701a75">Kreuzreim (ABAB)</text>
<rect x="320" y="44" width="16" height="16" fill="#ec4899"/><text x="344" y="58" font-size="15" fill="#1f2937">…il vento <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="66" width="16" height="16" fill="#3b82f6"/><text x="344" y="80" font-size="15" fill="#1f2937">…le foglie <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="88" width="16" height="16" fill="#ec4899"/><text x="344" y="102" font-size="15" fill="#1f2937">…lento <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="110" width="16" height="16" fill="#3b82f6"/><text x="344" y="124" font-size="15" fill="#1f2937">…raccoglie <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<text x="20" y="175" font-size="18" font-weight="bold" fill="#701a75">Umarmender Reim (ABBA)</text>
<rect x="20" y="187" width="16" height="16" fill="#ec4899"/><text x="44" y="201" font-size="15" fill="#1f2937">…mare <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="209" width="16" height="16" fill="#3b82f6"/><text x="44" y="223" font-size="15" fill="#1f2937">…stella <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="231" width="16" height="16" fill="#3b82f6"/><text x="44" y="245" font-size="15" fill="#1f2937">…bella <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="253" width="16" height="16" fill="#ec4899"/><text x="44" y="267" font-size="15" fill="#1f2937">…navigare <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<text x="320" y="175" font-size="18" font-weight="bold" fill="#701a75">Verketteter Reim (ABA BCB)</text>
<rect x="320" y="187" width="16" height="16" fill="#ec4899"/><text x="344" y="201" font-size="15" fill="#1f2937">…vita <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="209" width="16" height="16" fill="#3b82f6"/><text x="344" y="223" font-size="15" fill="#1f2937">…oscura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="231" width="16" height="16" fill="#ec4899"/><text x="344" y="245" font-size="15" fill="#1f2937">…smarrita <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="253" width="16" height="16" fill="#3b82f6"/><text x="344" y="267" font-size="15" fill="#1f2937">…dura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="275" width="16" height="16" fill="#22c55e"/><text x="344" y="289" font-size="15" fill="#1f2937">…forte <tspan font-weight="bold" fill="#22c55e">(C)</tspan></text>
<rect x="320" y="297" width="16" height="16" fill="#3b82f6"/><text x="344" y="311" font-size="15" fill="#1f2937">…paura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
</svg>`,
      caption: "Gleiche Farbe = gleicher Reim. Der verkettete Reim ist der der Göttlichen Komödie."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Verse und Reime",
      questions: [
        { type: "num", q: "Wie viele metrische Silben hat ein Elfsilber (endecasillabo)?", answer: 11, explain: "Vom griechischen héndeka = elf." },
        { type: "mc", q: "Das Schema ABAB ist ein …", options: ["Paarreim", "Kreuzreim", "umarmender Reim"], answer: 1, explain: "Die Verse reimen sich abwechselnd, einer ja, einer nein: Kreuzreim (alternata)." },
        { type: "tf", q: "Bei der Verschleifung (sinalefe) zählen zwei Vokale benachbarter Wörter als nur eine Silbe.", answer: true, explain: "Z. B. «selva oscura»: das «a» von selva und das «o» von oscura verschmelzen zu einer einzigen metrischen Silbe." }
      ]
    },
    {
      type: "text",
      title: "Die rhetorischen Klangfiguren",
      html: `<ul>
<li><b>Alliteration</b> (<i>allitterazione</i>): Wiederholung desselben Lautes am Anfang oder im Inneren benachbarter Wörter. <i>«<b>F</b>resche le mie parole ne la sera / ti sien come il <b>f</b>ruscìo che <b>f</b>an le <b>f</b>oglie»</i> (D'Annunzio; sinngemäß: Frisch seien meine Worte dir am Abend wie das Rauschen, das die Blätter machen).</li>
<li><b>Lautmalerei</b> (<i>onomatopea</i>): Wort, das ein Geräusch nachahmt. <i>«<b>Tin tin</b> / di campanelle»</i> (Klingeling der Glöckchen); <i>«<b>Don… Don…</b> E mi dicono, Dormi!»</i> (Pascoli, <i>La mia sera</i>: Dong … Dong … Und sie sagen mir: Schlaf!).</li>
<li><b>Paronomasie</b> (<i>paronomasia</i>): Nebeneinanderstellen von Wörtern mit ähnlichem Klang, aber verschiedener Bedeutung. <i>«Chi <b>dice</b> donna dice <b>danno</b>»</i> (Wer „Frau“ sagt, sagt „Schaden“); <i>«<b>traduttore</b>, <b>traditore</b>»</i> (Übersetzer, Verräter).</li>
<li><b>Assonanz</b> und <b>Konsonanz</b> (<i>assonanza, consonanza</i>): „unreine“ Reime mit gleichen Vokalen (<i>c<b>a</b>s<b>a</b> / l<b>a</b>n<b>a</b></i>) oder gleichen Konsonanten (<i>ca<b>nt</b>o / te<b>nt</b>a</i>).</li>
</ul>`
    },
    {
      type: "text",
      title: "Die rhetorischen Bedeutungsfiguren",
      html: `<ul>
<li><b>Vergleich</b> (<i>similitudine</i>): Gegenüberstellung zweier Elemente mit <b>wie, ähnlich, scheint</b> (<i>come, simile a, sembra, pare</i>). <i>«Si sta <b>come</b> / d'autunno / sugli alberi / le foglie»</i> (Ungaretti, <i>Soldati</i>, 1918: Man ist wie im Herbst an den Bäumen die Blätter).</li>
<li><b>Metapher</b> (<i>metafora</i>): ein „verkürzter“ Vergleich ohne das „wie“: Man ersetzt ein Wort durch ein anderes aufgrund einer Ähnlichkeit. <i>«Sei <b>un leone</b>»</i> (Du bist ein Löwe); <i>«la <b>primavera</b> della vita»</i> (der Frühling des Lebens); <i>«il mare è <b>una tavola</b>»</i> (das Meer ist ein Tisch, also spiegelglatt).</li>
<li><b>Personifikation</b> (<i>personificazione</i>): Man schreibt Dingen, Tieren, Ideen menschliche Eigenschaften zu. <i>«Il <b>sole</b> ride»</i> (Die Sonne lacht); <i>«<b>La nebbia</b> agli irti colli / piovigginando <b>sale</b>»</i> (Carducci: Der Nebel steigt zu den schroffen Hügeln nieselnd hinauf).</li>
<li><b>Anapher</b> (<i>anafora</i>): Wiederholung desselben Wortes am Anfang mehrerer Verse. <i>«<b>Per me</b> si va ne la città dolente, / <b>per me</b> si va ne l'etterno dolore, / <b>per me</b> si va tra la perduta gente»</i> (Dante, Inferno III: Durch mich geht man in die Stadt der Schmerzen, durch mich geht man in den ewigen Schmerz, durch mich geht man zu den verlorenen Menschen).</li>
<li><b>Hyperbel</b> (<i>iperbole</i>): Übertreibung. <i>«Te l'ho detto <b>mille volte</b>»</i> (Ich habe es dir tausendmal gesagt); <i>«ho una fame <b>da lupi</b>»</i> (ich habe einen Bärenhunger, wörtlich Wolfshunger).</li>
<li><b>Synästhesie</b> (<i>sinestesia</i>): Man verbindet Empfindungen verschiedener Sinne. <i>«<b>urlo nero</b>»</i> (schwarzer Schrei; Quasimodo: Gehör + Sicht); <i>«<b>voce calda</b>»</i> (warme Stimme).</li>
<li><b>Oxymoron</b> (<i>ossimoro</i>): Verbindung zweier Wörter mit entgegengesetzter Bedeutung. <i>«<b>ghiaccio bollente</b>»</i> (kochendes Eis), <i>«<b>silenzio assordante</b>»</i> (ohrenbetäubende Stille), <i>«<b>dolce</b> <b>amaro</b>»</i> (süß-bitter).</li>
<li><b>Metonymie</b> (<i>metonimia</i>): Man benutzt ein Wort anstelle eines anderen, das mit ihm zusammenhängt (das Gefäß für den Inhalt, den Autor für das Werk): <i>«bere <b>un bicchiere</b>»</i> (ein Glas trinken), <i>«leggere <b>un Montale</b>»</i> (einen Montale lesen).</li>
<li><b>Synekdoche</b> (<i>sineddoche</i>): der Teil für das Ganze. <i>«avere un <b>tetto</b>»</i> (ein Dach haben = ein Haus), <i>«cento <b>vele</b>»</i> (hundert Segel = hundert Schiffe).</li>
</ul>`
    },
    {
      type: "text",
      title: "Die rhetorischen Ordnungsfiguren",
      html: `<ul>
<li><b>Aufzählung</b> (<i>enumerazione</i>): Liste von Wörtern. <i>«Le donne, i cavallier, l'arme, gli amori, / le cortesie, l'audaci imprese io canto»</i> (Ariosto, <i>Orlando furioso</i>: Die Frauen, die Ritter, die Waffen, die Lieben, die Höflichkeiten, die kühnen Taten besinge ich).</li>
<li><b>Klimax</b> (<i>climax</i>): Aufzählung, in der die Intensität <b>zunimmt</b> (oder abnimmt, «Antiklimax»). <i>«Mi piace, mi entusiasma, mi fa impazzire!»</i> (Es gefällt mir, es begeistert mich, es macht mich verrückt!)</li>
<li><b>Anastrophe</b> (<i>anastrofe</i>): Umkehrung der normalen Wortstellung. <i>«Sempre caro <b>mi fu</b> quest'ermo colle»</i> (Leopardi, <i>L'infinito</i>) statt «quest'ermo colle mi fu sempre caro».</li>
<li><b>Chiasmus</b> (<i>chiasmo</i>): Überkreuzung von Elementen nach dem Schema AB-BA. <i>«Bisogna <b>mangiare</b> per <b>vivere</b>, non <b>vivere</b> per <b>mangiare</b>»</i> (Man muss essen, um zu leben, nicht leben, um zu essen). Bei Ariost: <i>«Le <b>donne</b>, i <b>cavallier</b>, l'<b>arme</b>, gli <b>amori</b>»</i> → donne (A) und amori (A) gehören zusammen, wie cavallieri (B) und armi (B).</li>
<li><b>Enjambement</b> (französisch „Überschreiten“): Der Satz endet nicht mit dem Vers, sondern „springt“ in den nächsten Vers hinüber. <i>«e il naufragar m'è dolce / in questo mare»</i> (und das Ertrinken ist mir süß in diesem Meer).</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Wir analysieren «Soldati» von Ungaretti",
      html: `<p><i>Bosco di Courton luglio 1918</i></p>
<p style="font-size:1.2em"><i>Si sta come<br>d'autunno<br>sugli alberi<br>le foglie</i></p>
<p>(Man ist wie im Herbst an den Bäumen die Blätter.)</p>
<ul>
<li><b>Zusammenhang</b>: Giuseppe Ungaretti kämpfte im Ersten Weltkrieg; Datum und Ort (ein Wald in Frankreich) sagen, wo das Gedicht entsteht.</li>
<li><b>Form</b>: vier ganz kurze, freie Verse, ohne Reim und ohne Zeichensetzung. Jedes Wort wiegt schwer.</li>
<li><b>Rhetorische Figur</b>: ein <b>Vergleich</b> (eingeleitet durch «come», wie): Die Soldaten sind wie die Blätter im Herbst, die jeden Augenblick fallen können.</li>
<li><b>Bedeutung</b>: die <b>Zerbrechlichkeit</b> und Unsicherheit des Lebens im Krieg. Der Titel «Soldati» ist nötig, um den Vergleich zu verstehen.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Paraphrase und der Kommentar",
      html: `<p>Nehmen wir den Anfang von <i>L'infinito</i> von Giacomo Leopardi (1819):</p>
<p><i>Sempre caro mi fu quest'ermo colle,<br>e questa siepe, che da tanta parte<br>dell'ultimo orizzonte il guardo esclude.</i></p>
<ol>
<li><b>Paraphrase</b> (<i>parafrasi</i>: in Prosa mit heutigen Wörtern in normaler Reihenfolge neu schreiben): <i>Questo colle solitario mi è sempre stato caro, e anche questa siepe, che impedisce allo sguardo di vedere gran parte dell'orizzonte più lontano.</i> (Dieser einsame Hügel war mir immer lieb, und auch diese Hecke, die dem Blick den größten Teil des fernsten Horizonts verwehrt.)</li>
<li><b>Figuren</b>: <b>Anastrophe</b> («sempre caro mi fu»), <b>Enjambement</b> («tanta parte / dell'ultimo orizzonte»), literarische Wörter («ermo» = einsam, «guardo» = Blick).</li>
<li><b>Kommentar</b>: Die Hecke, die die Sicht <b>verdeckt</b>, regt die Fantasie an, sich unendliche Räume vorzustellen. Paradox: Gerade die Grenze lässt an das Unendliche denken.</li>
</ol>`
    },
    {
      type: "widget",
      title: "Erkenne die rhetorische Figur",
      widget: "classify",
      options: {
        groups: ["🪞 Vergleich", "🎭 Metapher", "🙋 Personifikation", "🔁 Anapher", "🎈 Hyperbel"],
        items: [
          ["Forte come un toro (Stark wie ein Stier)", 0], ["Bianca come la neve (Weiß wie Schnee)", 0],
          ["Sei un vulcano di idee (Du bist ein Vulkan von Ideen)", 1], ["Quel ragazzo è una volpe (Dieser Junge ist ein Fuchs)", 1],
          ["Il vento sussurra tra i rami (Der Wind flüstert zwischen den Zweigen)", 2], ["La città dorme (Die Stadt schläft)", 2],
          ["Ti amo per… ti amo per… ti amo per… (Ich liebe dich wegen …)", 3], ["Ogni giorno… ogni sera… ogni notte… (Jeden Tag … jeden Abend … jede Nacht …)", 3],
          ["Ho aspettato un secolo (Ich habe ein Jahrhundert gewartet)", 4], ["Ti ho chiamato un milione di volte (Ich habe dich eine Million Mal angerufen)", 4]
        ]
      },
      caption: "Tippe ein Beispiel an und dann die richtige rhetorische Figur."
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Das kürzeste Gedicht",
      html: `<p>Eines der berühmtesten (und kürzesten) Gedichte der italienischen Literatur ist <b>«Mattina»</b> von Giuseppe Ungaretti (1917): <i>«M'illumino / d'immenso»</i> (Ich erhelle mich mit Unermesslichem). Nur <b>zwei Verse und drei Wörter</b>! In Japan gibt es eine ganz kurze Gedichtform, das <b>Haiku</b>: drei Verse mit 5, 7 und 5 Silben, die meist von der Natur und den Jahreszeiten handeln.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Rhetorische Figuren in der Werbung",
      html: `<p>Rhetorische Figuren stehen nicht nur in Büchern: <b>Werbung</b>, Slogans und Lieder sind voll davon! Alliterationen und Reime helfen, sich eine Marke zu merken, Hyperbeln lassen ein Produkt außergewöhnlich wirken, Metaphern erzeugen starke Bilder. Auch in Redewendungen benutzen wir jeden Tag rhetorische Figuren: «sei la luce dei miei occhi» (du bist das Licht meiner Augen: Metapher), «piove a catinelle» (es gießt in Strömen, wörtlich: in Schüsseln: Hyperbel), «bere un bicchiere» (ein Glas trinken: Metonymie).</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Dichtung zu verstehen",
      intro: "Dichtung versteht man mit den Ohren, den Augen und dem Körper. Probiere diese Wege.",
      tabs: [
        {
          label: "🎧 Wie ein Lied",
          html: `<p>Lieder sind Gedichte mit Musik! Sie haben <b>Strophen</b> und einen <b>Refrain</b> (der eine riesige <b>Anapher</b> ist), <b>Reime</b> und <b>Rhythmus</b>. Nimm den Text deines Lieblingsliedes und versuche zu finden: Wie viele Strophen gibt es? Welche Wörter reimen sich? Gibt es eine Metapher oder eine Hyperbel? Besonders der <b>Rap</b> ist voll von Binnenreimen, Alliterationen und Wortspielen: Rapper sind Meister der rhetorischen Figuren!</p>`
        },
        {
          label: "🥁 Schlag den Rhythmus",
          html: `<p>Der Vers hat einen <b>Rhythmus</b>, der durch die <b>Betonungen</b> entsteht, wie bei einem Schlagzeug. Lies laut und schlage mit der Hand auf den Tisch bei den betonten Silben:</p>
<p><i>nel mez-<b>ZO</b> del cam-<b>MIN</b> di <b>NO</b>-stra <b>VI</b>-ta</i></p>
<p>Die Betonungen fallen auf die 2., 6., 8. und 10. Silbe. Im Elfsilber liegt <b>immer eine Betonung auf der 10.</b> Silbe; die anderen wechseln und geben dem Vers seine „Musik“. Teile den Vers in Schläge und zähle sie an den Fingern ab!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#eff6ff"/>
<g font-size="16" text-anchor="middle" font-weight="bold">
<rect x="10" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="34" y="92" fill="#1e3a8a">nel</text>
<rect x="62" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="86" y="92" fill="#fff">mez</text>
<rect x="114" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="138" y="92" fill="#1e3a8a">zo</text>
<rect x="166" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="190" y="92" fill="#1e3a8a">del</text>
<rect x="218" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="242" y="92" fill="#1e3a8a">cam</text>
<rect x="270" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="294" y="92" fill="#fff">min</text>
<rect x="322" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="346" y="92" fill="#1e3a8a">di</text>
<rect x="374" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="398" y="92" fill="#fff">no</text>
<rect x="426" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="450" y="92" fill="#1e3a8a">stra</text>
<rect x="478" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="502" y="92" fill="#fff">vi</text>
<rect x="530" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="554" y="92" fill="#1e3a8a">ta</text>
</g>
<g font-size="14" text-anchor="middle" fill="#334155">
<text x="34" y="135">1</text><text x="86" y="135">2</text><text x="138" y="135">3</text><text x="190" y="135">4</text><text x="242" y="135">5</text><text x="294" y="135">6</text><text x="346" y="135">7</text><text x="398" y="135">8</text><text x="450" y="135">9</text><text x="502" y="135">10</text><text x="554" y="135">11</text>
</g>
<text x="300" y="40" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">🥁 = betonte Silbe (blau)</text>
<text x="300" y="175" font-size="15" text-anchor="middle" fill="#334155">11 Silben, feste Betonung auf der 10.: Elfsilber</text>
</svg>`
        },
        {
          label: "🖼️ Zeichne die Metapher",
          html: `<p>Eine Metapher ist ein <b>Bild</b>. Versuche, sie wörtlich zu zeichnen: «quel ragazzo è un <b>leone</b>» (dieser Junge ist ein Löwe) → zeichne einen Jungen mit Mähne! Dann frag dich: <i>Was haben</i> der Junge und der Löwe <i>gemeinsam</i>? Den <b>Mut</b>, die Kraft. Diese gemeinsame Eigenschaft ist die „Brücke“ der Metapher. Beim Vergleich wird die Brücke ausgesprochen (<i>mutig <b>wie</b> ein Löwe</i>); bei der Metapher musst du sie selbst finden.</p>`
        },
        {
          label: "🇯🇵 Das japanische Haiku",
          html: `<p>In Japan lernen Kinder die Dichtung mit dem <b>Haiku</b>: <b>3 Verse</b> mit <b>5 – 7 – 5 Silben</b>, ein Bild aus der Natur und ein Wort, das die Jahreszeit anzeigt. Das berühmteste stammt von <b>Matsuo Bashō</b> (1686):</p>
<p><i>Il vecchio stagno — / una rana vi salta: / il suono dell'acqua.</i> (Der alte Teich — ein Frosch springt hinein: der Klang des Wassers.)</p>
<p>Versuche selbst, eines zu schreiben: Zähle die Silben an den Fingern! Es ist ein ausgezeichnetes Training für die Metrik.</p>`
        },
        {
          label: "🃏 Karteikarten der Figuren",
          html: `<p>Dreh die Karten um und wiederhole.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Similitudine (Vergleich)", back: "Vergleich mit «wie»: schnell wie der Wind" },
              { front: "Metafora (Metapher)", back: "Vergleich ohne «wie»: du bist ein Blitz" },
              { front: "Anafora (Anapher)", back: "Dasselbe Wort am Anfang mehrerer Verse" },
              { front: "Allitterazione (Alliteration)", back: "Wiederholung von Lauten: il fruscìo che fan le foglie" },
              { front: "Onomatopea (Lautmalerei)", back: "Wort, das ein Geräusch nachahmt: tic tac, din don" },
              { front: "Ossimoro (Oxymoron)", back: "Verbundene Gegensätze: ghiaccio bollente (kochendes Eis)" },
              { front: "Sinestesia (Synästhesie)", back: "Verbundene verschiedene Sinne: urlo nero (schwarzer Schrei)" },
              { front: "Enjambement", back: "Der Satz geht im nächsten Vers weiter" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Dichtung",
      nodes: [
        { id: "poesia", label: "Poetischer Text", x: 50, y: 6, color: "#86198f", html: "Text in Versen, der Klang, Rhythmus und Bilder benutzt.", why: "Das Wort kommt vom griechischen <i>poiéin</i>, «machen, schaffen». Ursprünglich wurde Dichtung <b>gesungen</b>: Reim und Rhythmus halfen, die Texte auswendig zu behalten, als die Schrift selten war (wie bei Ilias und Odyssee)." },
        { id: "metrica", label: "Metrik", x: 20, y: 28, color: "#2563eb", html: "Das Zählen von Silben und Betonungen.", why: "Die lateinische Metrik beruhte auf der Dauer der Silben (lang und kurz). Als im Volgare der Unterschied in der Dauer verloren ging, begann man, <b>Silben</b> und <b>Betonungen</b> zu zählen: So entsteht der Elfsilber." },
        { id: "endec", label: "Elfsilber", x: 12, y: 54, color: "#0ea5e9", html: "Der Vers mit 11 Silben, König der italienischen Dichtung.", why: "Er stammt von provenzalischen und mittelalterlichen lateinischen Versen; Dante und Petrarca machten ihn vollkommen. Er ist lang genug für einen vollständigen Satz und in den Betonungen abwechslungsreich genug, um nicht zu langweilen." },
        { id: "rima", label: "Reim", x: 38, y: 44, color: "#ec4899", html: "Gleichheit des Klangs vom betonten Vokal an.", why: "In der klassischen lateinischen Dichtung gab es den Reim fast nicht; er verbreitete sich in den <b>mittelalterlichen religiösen Hymnen</b> und in der Dichtung der provenzalischen Trobadors, von wo er zur Sizilianischen Schule gelangte." },
        { id: "figure", label: "Rhetorische Figuren", x: 70, y: 28, color: "#16a34a", html: "Besondere Verwendungen der Sprache, um dem Text Kraft zu geben.", why: "Sie wurden von den griechischen und römischen Lehrern der <b>Rhetorik</b> — der Kunst, öffentlich zu reden — wie <b>Aristoteles</b> und <b>Quintilian</b> (<i>Institutio oratoria</i>, 1. Jahrhundert n. Chr.) eingeteilt. Die griechischen Namen (Metapher, Anapher, Hyperbel) stammen von dort." },
        { id: "suono", label: "Klangfiguren", x: 62, y: 56, color: "#f97316", html: "Alliteration, Lautmalerei, Paronomasie.", why: "Unser Gehirn reagiert auf wiederholte Klänge: Deshalb merkt man sich Kinderreime und Slogans leicht. Pascoli und D'Annunzio machten Ende des 19. Jahrhunderts sehr kunstvollen Gebrauch davon." },
        { id: "signif", label: "Bedeutungsfiguren", x: 88, y: 52, color: "#dc2626", html: "Vergleich, Metapher, Personifikation, Hyperbel, Oxymoron …", why: "<i>Metapher</i> bedeutet auf Griechisch «Übertragung»: Man «überträgt» die Bedeutung von einer Sache auf die andere. Die Sprachwissenschaftler Lakoff und Johnson (1980) haben gezeigt, dass wir auch in der Alltagssprache in Metaphern denken («Zeit ist Geld»)." },
        { id: "ordine", label: "Ordnungsfiguren", x: 74, y: 82, color: "#ca8a04", html: "Anapher, Anastrophe, Chiasmus, Klimax, Enjambement.", why: "Wenn man die normale Wortstellung ändert, hebt man ein Element hervor. Das Lateinische hatte eine freie Wortstellung, und die italienischen Dichter haben die Vorliebe für Umstellungen geerbt." },
        { id: "versolib", label: "Freier Vers", x: 30, y: 82, color: "#64748b", html: "Verse ohne festes Maß und ohne Reimzwang.", why: "Er entsteht im 19. Jahrhundert in Frankreich und Amerika (Walt Whitman) und verbreitet sich im 20. Jahrhundert: Dichter wie Ungaretti wollten das Wort von den Regeln befreien, damit es das Wesentliche ausdrückt." }
      ],
      edges: [
        ["poesia", "metrica", "hat eine"],
        ["metrica", "endec", "Hauptvers"],
        ["poesia", "rima", "benutzt oft"],
        ["poesia", "figure", "benutzt"],
        ["figure", "suono", ""],
        ["figure", "signif", ""],
        ["figure", "ordine", ""],
        ["metrica", "versolib", "befreit sich im"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: rhetorische Figuren",
      questions: [
        { type: "mc", q: "«Il mare è una tavola blu» (Das Meer ist ein blauer Tisch) enthält …", options: ["einen Vergleich", "eine Metapher", "eine Lautmalerei"], answer: 1, explain: "Der Vergleich ist ohne «wie»: Metapher." },
        { type: "mc", q: "«Silenzio assordante» (ohrenbetäubende Stille) ist ein …", options: ["Oxymoron", "Klimax", "Chiasmus"], answer: 0, explain: "Es verbindet zwei entgegengesetzte Begriffe: Oxymoron." },
        { type: "mc", q: "«Per me si va… / per me si va… / per me si va…» ist ein Beispiel für …", options: ["Anapher", "Hyperbel", "Synästhesie"], answer: 0, explain: "Wiederholung am Anfang der Verse: Anapher." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li><b>Vers</b>, <b>Strophe</b>, <b>Reim</b> (Paarreim AABB, Kreuzreim ABAB, umarmender Reim ABBA, verketteter Reim ABA BCB).</li>
<li>Metrische Silben: <b>Verschleifung</b>, letzte Betonung + 1; Elfsilber = 11.</li>
<li><b>Klangfiguren</b>: Alliteration, Lautmalerei, Paronomasie.</li>
<li><b>Bedeutungsfiguren</b>: Vergleich (mit «wie»), Metapher (ohne), Personifikation, Hyperbel, Oxymoron, Synästhesie, Metonymie.</li>
<li><b>Ordnungsfiguren</b>: Anapher, Anastrophe, Klimax, Chiasmus, Enjambement.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Verso (Vers)", d: "Jede Zeile eines Gedichts." },
    { t: "Strofa (Strophe)", d: "Gruppe von Versen, die durch einen Zwischenraum von den anderen getrennt ist." },
    { t: "Rima (Reim)", d: "Gleichheit der Klänge im Schlussteil zweier Wörter vom betonten Vokal an." },
    { t: "Endecasillabo (Elfsilber)", d: "Vers mit 11 metrischen Silben und Betonung auf der 10." },
    { t: "Sinalefe (Verschleifung)", d: "Verschmelzung des Endvokals eines Wortes mit dem Anfangsvokal des nächsten zu einer einzigen Silbe." },
    { t: "Similitudine (Vergleich)", d: "Gegenüberstellung zweier Elemente, eingeleitet durch «wie» oder Ähnliches." },
    { t: "Metafora (Metapher)", d: "Ersetzung eines Wortes durch ein anderes aufgrund einer Ähnlichkeit, ohne «wie»." },
    { t: "Anafora (Anapher)", d: "Wiederholung eines Wortes am Anfang aufeinanderfolgender Verse oder Sätze." },
    { t: "Ossimoro (Oxymoron)", d: "Nebeneinanderstellung zweier Wörter mit entgegengesetzter Bedeutung." },
    { t: "Enjambement", d: "Wenn der Satz über das Ende des Verses hinausgeht." },
    { t: "Parafrasi (Paraphrase)", d: "Neuschreiben des Inhalts eines Gedichts in Prosa und mit einfachen Wörtern." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "«Veloce come il vento» (Schnell wie der Wind) ist …", options: ["eine Metapher", "ein Vergleich", "eine Anapher"], answer: 1, explain: "Es gibt ein «come» (wie): Vergleich." },
      { type: "mc", q: "Das Schema ABBA ist ein …", options: ["umarmender Reim", "Kreuzreim", "Paarreim"], answer: 0, explain: "Der erste Vers reimt sich mit dem vierten, der zweite mit dem dritten." },
      { type: "num", q: "Wie viele Verse hat ein Sonett?", answer: 14, explain: "Zwei Quartette und zwei Terzette: 4+4+3+3 = 14." },
      { type: "tf", q: "Bei der Lautmalerei ahmt ein Wort ein Geräusch nach.", answer: true, explain: "Z. B. «tic tac», «bau», «din don»." },
      { type: "mc", q: "«Il sole sorride ai bambini» (Die Sonne lächelt den Kindern zu) enthält …", options: ["eine Personifikation", "ein Oxymoron", "eine Synästhesie"], answer: 0, explain: "Die Sonne führt eine menschliche Handlung aus: Personifikation." },
      { type: "text", q: "Wie heißt die Figur, in der zwei verschiedene Sinne verbunden werden, wie in «voce calda» (warme Stimme)?", answer: ["sinestesia", "la sinestesia", "Synästhesie", "die Synästhesie", "Sinestesia"], explain: "Gehör (Stimme) + Tastsinn (warm): Synästhesie (sinestesia)." },
      { type: "mc", q: "Was ist ein Enjambement?", options: ["Ein Reim zwischen endbetonten Wörtern", "Der Satz, der im nächsten Vers weitergeht", "Die Wiederholung eines Klanges"], answer: 1, explain: "Der Satz «springt» über das Ende des Verses." },
      { type: "mc", q: "«Te l'ho detto mille volte» (Ich habe es dir tausendmal gesagt) ist …", options: ["eine Hyperbel", "ein Chiasmus", "eine Metonymie"], answer: 0, explain: "Es ist eine Übertreibung: Hyperbel." },
      { type: "tf", q: "Freie Verse müssen sich immer reimen.", answer: false, explain: "Freie Verse haben weder ein festes Maß noch einen Reimzwang." },
      { type: "mc", q: "Wer schrieb «Soldati» («Si sta come d'autunno…»)?", options: ["Leopardi", "Ungaretti", "Pascoli"], answer: 1, explain: "Giuseppe Ungaretti, im Jahr 1918." },
      { type: "mc", q: "«Bere un bicchiere» (ein Glas trinken) ist ein Beispiel für …", options: ["Metonymie", "Anapher", "Lautmalerei"], answer: 0, explain: "Das Gefäß (Glas) anstelle des Inhalts: Metonymie." },
      { type: "order", q: "Ordne die Verse vom kürzesten zum längsten.", items: ["Settenario (Siebensilber)", "Ottonario (Achtsilber)", "Novenario (Neunsilber)", "Endecasillabo (Elfsilber)"], explain: "7, 8, 9, 11 Silben." }
    ]
  }
});
