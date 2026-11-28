TOPIC('de', {
  id: "l1-fis-ottica-geometrica",
  title: "Geometrische Optik",
  intro: "Warum sieht ein Strohhalm im Glas wie geknickt aus? Wie schafft es ein Mikroskop, eine Zelle zu vergrößern, und eine Brille, Kurzsichtigkeit zu korrigieren? Warum bringen Glasfasern das Internet in unsere Häuser? Um das zu beantworten, muss man nicht wissen, was Licht im Innersten ist: Es genügt, seinen Weg mit <b>geraden Linien</b>, den <b>Lichtstrahlen</b>, und zwei ganz einfachen Gesetzen zu beschreiben, <b>Reflexion</b> und <b>Brechung</b>. Das ist die <b>geometrische Optik</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Das Licht und die Strahlen",
      html: `<p>Eine <b>Lichtquelle</b> sendet Licht aus (die Sonne, eine Glühbirne, ein Bildschirm); ein <b>beleuchteter Körper</b> wirft es zu unseren Augen zurück (der Mond, ein Buch). In einem <b>homogenen, durchsichtigen Medium</b> (Luft, Wasser, Glas) breitet sich das Licht <b>geradlinig</b> aus: Das ist die Grundlage der geometrischen Optik. Sein Weg wird durch einen <b>Lichtstrahl</b> dargestellt, eine einfache gerichtete Linie; mehrere Strahlen bilden ein <b>Bündel</b> (paralleles, divergentes oder konvergentes Bündel).</p>
<p>Das Licht breitet sich auch im <b>Vakuum</b> aus, und zwar mit der Geschwindigkeit</p>
<p style="text-align:center"><b>c = 299 792 458 m/s ≈ 3,00 × 10<sup>8</sup> m/s</b></p>
<p>Die Sonne ist etwa 150 Millionen km entfernt: Ihr Licht braucht etwa 8 Minuten und 20 Sekunden bis zur Erde. Das <b>Lichtjahr</b> ist die Strecke, die das Licht in einem Jahr zurücklegt (etwa 9,46 × 10<sup>12</sup> km).</p>
<p>Aus der geradlinigen Ausbreitung entstehen die <b>Schatten</b>: Hinter einem undurchsichtigen Hindernis, das von einer punktförmigen Lichtquelle beleuchtet wird, liegt ein scharf begrenzter dunkler Bereich (<b>Kernschatten</b>); ist die Quelle ausgedehnt, erscheint auch ein <b>Halbschatten</b>, der nur teilweise beleuchtet ist. <b>Finsternisse</b> sind astronomische Schatten und Halbschatten: Bei der Sonnenfinsternis wirft der Mond seinen Schatten auf die Erde; bei der Mondfinsternis verdunkelt die Erde den Mond.</p>
<p>Ein Körper kann <b>durchsichtig</b> sein (lässt Licht hindurch), <b>durchscheinend</b> (streut es) oder <b>undurchsichtig</b> (absorbiert oder reflektiert es). Trifft ein Strahl auf eine Fläche, die zwei Medien trennt, wird im Allgemeinen ein Teil <b>reflektiert</b>, ein Teil <b>gebrochen</b> und ein Teil <b>absorbiert</b>.</p>`
    },
    {
      type: "example",
      title: "Beispiel: die Höhe eines Baumes mit dem Schatten messen",
      html: `<p>Um 15 Uhr wirft ein Pfahl von 1,5 m Höhe einen Schatten von 2 m; der Schatten des Baumes ist 14 m lang. Die Sonnenstrahlen (sehr weit entfernt) sind praktisch parallel, also sind die beiden Dreiecke aus Gegenstand, Schatten und Strahl ähnlich:</p>
<ol>
<li>Höhe Baum / Schatten Baum = Höhe Pfahl / Schatten Pfahl</li>
<li>h / 14 = 1,5 / 2</li>
<li>h = 14 × 0,75 = <b>10,5 m</b></li>
</ol>
<p>Mit dieser Methode, die auf der geradlinigen Ausbreitung beruht, soll nach der Überlieferung schon Thales (6. Jahrhundert v. Chr.) die Höhe der Pyramiden gemessen haben.</p>`
    },
    {
      type: "text",
      title: "Die Reflexion und ebene Spiegel",
      html: `<p>Trifft ein Strahl auf eine glatte Fläche (einen Spiegel, ruhiges Wasser, glänzendes Metall), wird er zurückgeworfen: Das ist die <b>Reflexion</b>. Die Winkel misst man gegen das <b>Einfallslot</b>, die Senkrechte zur Fläche im Auftreffpunkt.</p>
<p><b>Reflexionsgesetz</b>:</p>
<ol>
<li>Der einfallende Strahl, der reflektierte Strahl und das Lot liegen <b>in derselben Ebene</b>;</li>
<li>der <b>Reflexionswinkel ist gleich dem Einfallswinkel</b>: α' = α.</li>
</ol>
<p>Ist die Fläche glatt, spricht man von <b>gerichteter Reflexion</b> (parallele Strahlen bleiben parallel); ist sie rau, werden die Strahlen in alle Richtungen zurückgeworfen: <b>diffuse Reflexion (Streuung)</b>. Dank der Streuung sehen wir die Gegenstände aus jeder Position, auch wenn sie keine Spiegel sind.</p>
<p><b>Ebener Spiegel.</b> Das Bild eines Gegenstands ist:</p>
<ul>
<li><b>virtuell</b> (hinter dem Spiegel: Die Strahlen gehen nicht wirklich dort durch, sie scheinen nur von dort zu kommen);</li>
<li><b>aufrecht</b> und <b>gleich groß</b>;</li>
<li><b>symmetrisch</b> zum Spiegel: Das Bild liegt im gleichen Abstand hinter dem Spiegel, in dem der Gegenstand davor steht. Deshalb erscheinen rechts und links vertauscht (deine rechte Hand wird zur linken des Bildes).</li>
</ul>
<p>Um dich ganz in einem ebenen Spiegel zu sehen, genügt es, dass er <b>halb</b> so hoch ist wie du und dass seine Unterkante in der halben Augenhöhe über dem Boden liegt.</p>`
    },
    {
      type: "svg",
      title: "Reflexion und Brechung",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="150" fill="#f0f9ff"/>
<rect y="150" width="600" height="150" fill="#bae6fd"/>
<line x1="0" y1="150" x2="600" y2="150" stroke="#0369a1" stroke-width="3"/>
<line x1="300" y1="20" x2="300" y2="280" stroke="#64748b" stroke-width="2" stroke-dasharray="8 6"/>
<text x="308" y="35" font-size="16" fill="#475569">Lot</text>
<line x1="130" y1="50" x2="300" y2="150" stroke="#f59e0b" stroke-width="4"/>
<polygon points="300,150 284,130 274,142" fill="#f59e0b"/>
<line x1="300" y1="150" x2="470" y2="50" stroke="#ef4444" stroke-width="4"/>
<polygon points="470,50 450,52 460,66" fill="#ef4444"/>
<line x1="300" y1="150" x2="390" y2="270" stroke="#16a34a" stroke-width="4"/>
<polygon points="390,270 380,252 368,262" fill="#16a34a"/>
<text x="95" y="45" font-size="17" fill="#b45309" font-weight="bold">einfallender Strahl</text>
<text x="445" y="38" font-size="17" fill="#b91c1c" font-weight="bold">reflektiert</text>
<text x="400" y="275" font-size="17" fill="#15803d" font-weight="bold">gebrochen</text>
<text x="215" y="120" font-size="17" fill="#1f2937" font-weight="bold">α</text>
<text x="345" y="120" font-size="17" fill="#1f2937" font-weight="bold">α' = α</text>
<text x="335" y="205" font-size="17" fill="#1f2937" font-weight="bold">β</text>
<text x="20" y="100" font-size="18" fill="#0c4a6e" font-weight="bold">Luft (n1 = 1)</text>
<text x="20" y="190" font-size="18" fill="#0c4a6e" font-weight="bold">Wasser (n2 = 1,33)</text>
</svg>`,
      caption: "Ein Strahl, der von Luft in Wasser übergeht, teilt sich: Ein Teil wird mit α' = α reflektiert, ein Teil dringt ins Wasser ein und nähert sich dem Lot (β < α)."
    },
    {
      type: "text",
      title: "Die Brechung und das Snelliussche Gesetz",
      html: `<p>Geht das Licht von einem Medium in ein anderes über, <b>ändert es seine Geschwindigkeit</b> und, wenn es schräg einfällt, <b>seine Richtung</b>: Das ist die <b>Brechung</b>. Jedes durchsichtige Medium wird durch seine <b>Brechzahl</b> beschrieben:</p>
<p style="text-align:center"><b>n = c / v</b></p>
<p>Dabei ist v die Lichtgeschwindigkeit in diesem Medium (also ist immer n ≥ 1). Typische Werte: Luft etwa 1,000; Wasser 1,33; gewöhnliches Glas etwa 1,5; Diamant 2,42.</p>
<p><b>Snelliussches Brechungsgesetz</b>, um 1621 vom Niederländer Willebrord Snell formuliert und von Descartes bekannt gemacht:</p>
<p style="text-align:center"><b>n<sub>1</sub> · sin α = n<sub>2</sub> · sin β</b></p>
<p>wobei die Winkel gegen das Lot gemessen werden. Folgerungen:</p>
<ul>
<li>Beim Übergang in ein Medium mit <b>größerem</b> n (optisch „dichter“, z. B. Luft → Wasser) <b>nähert sich der Strahl dem Lot</b>;</li>
<li>beim Übergang in ein Medium mit <b>kleinerem</b> n (Wasser → Luft) <b>entfernt sich der Strahl vom Lot</b>;</li>
<li>ein Strahl, der senkrecht auf die Fläche trifft (α = 0), wird nicht abgelenkt.</li>
</ul>
<p>Die Brechung erklärt, warum der Strohhalm im Glas geknickt aussieht, warum ein Schwimmbecken weniger tief erscheint, als es ist, und warum die Sonne beim Untergang abgeplattet aussieht: Die Atmosphäre hat eine Brechzahl, die nach unten zunimmt, und krümmt die Strahlen.</p>`
    },
    {
      type: "example",
      title: "Beispiel: von der Luft ins Wasser",
      html: `<p>Ein Strahl trifft mit einem Einfallswinkel von 45° auf die Oberfläche eines Schwimmbeckens. Unter welchem Winkel verläuft er im Wasser (n = 1,33) weiter?</p>
<ol>
<li>1,00 · sin 45° = 1,33 · sin β</li>
<li>sin β = 0,7071 / 1,33 ≈ 0,532</li>
<li>β ≈ <b>32°</b></li>
</ol>
<p>Der Strahl hat sich dem Lot genähert (von 45° auf 32°). Deshalb scheint ein von oben betrachteter Fisch näher an der Oberfläche zu sein, als er wirklich ist, und ein Fischer mit einem Speer muss tiefer zielen, als er ihn sieht.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Reflexion und Brechung",
      questions: [
        { type: "num", q: "Ein Strahl trifft unter einem Winkel von 35° gegen das Lot auf einen Spiegel. Wie groß ist der Winkel zwischen einfallendem und reflektiertem Strahl?", answer: 70, unit: "°", explain: "α' = α = 35°, also liegen zwischen den beiden Strahlen 35° + 35° = 70°." },
        { type: "mc", q: "Ein Strahl geht von Luft in Glas (n = 1,5) über und fällt schräg ein. Der gebrochene Strahl …", options: ["entfernt sich vom Lot", "nähert sich dem Lot", "ändert seine Richtung nicht"], answer: 1, explain: "Beim Übergang in ein Medium mit größerer Brechzahl nähert er sich dem Lot: sin β = sin α / 1,5 < sin α." },
        { type: "num", q: "In einem Material breitet sich das Licht mit 2,0 × 10^8 m/s aus. Wie groß ist die Brechzahl (c = 3,0 × 10^8 m/s)?", answer: 1.5, tol: 0.01, explain: "n = c/v = 3,0 × 10^8 / 2,0 × 10^8 = 1,5." }
      ]
    },
    {
      type: "text",
      title: "Die Totalreflexion und die Glasfasern",
      html: `<p>Geht das Licht von einem Medium mit größerem n in eines mit kleinerem n über (zum Beispiel von Wasser in Luft), entfernt sich der Strahl vom Lot. Vergrößert man den Einfallswinkel, erreicht man einen <b>Grenzwinkel</b> α<sub>G</sub>, bei dem der gebrochene Strahl an der Oberfläche „entlangstreift“ (β = 90°):</p>
<p style="text-align:center"><b>sin α<sub>G</sub> = n<sub>2</sub> / n<sub>1</sub></b> (mit n<sub>2</sub> &lt; n<sub>1</sub>)</p>
<p>Über diesen Winkel hinaus gibt es keinen gebrochenen Strahl mehr: Das gesamte Licht wird reflektiert. Das ist die <b>Totalreflexion</b>. Für Wasser–Luft ist α<sub>G</sub> = arcsin(1/1,33) ≈ 48,8°; für Glas–Luft (n = 1,5) ≈ 41,8°. Das ist der Grund für die „silbrigen“ Spiegelungen, die du siehst, wenn du unter Wasser nach oben auf die Wasseroberfläche schaust, und für das Funkeln des Diamanten (α<sub>G</sub> ≈ 24,4°, sehr klein: Das Licht springt im Stein hin und her, bevor es austritt).</p>
<p><b>Glasfasern</b> sind hauchdünne Glasfäden: Das Licht, das mit einer kleinen Neigung eintritt, erfährt an den Wänden fortwährend Totalreflexionen und wandert, den Biegungen folgend, sogar über Hunderte von km. Sie transportieren einen großen Teil des Internetverkehrs und werden in der Medizin eingesetzt (Endoskope).</p>`
    },
    {
      type: "text",
      title: "Kugelspiegel",
      html: `<p>Ein <b>Kugelspiegel</b> ist eine Kugelkalotte mit dem Radius R. Er hat einen <b>Krümmungsmittelpunkt</b> M, einen <b>Scheitel</b> S und eine <b>optische Achse</b> (die Gerade MS). Für achsennahe Strahlen (Gaußsche Bedingung) treffen sich die zur Achse parallelen Strahlen in einem Punkt, dem <b>Brennpunkt</b> F, im Abstand</p>
<p style="text-align:center"><b>f = R / 2</b></p>
<ul>
<li><b>Hohlspiegel</b> (reflektiert auf der Innenseite, wie ein Löffel): Er <b>bündelt</b> die Strahlen, reeller Brennpunkt; mit f &gt; 0. Er wird in Scheinwerfern, Parabolantennen, Spiegelteleskopen und Schminkspiegeln eingesetzt;</li>
<li><b>Wölbspiegel</b> (reflektiert auf der Außenseite): Er <b>streut</b> die Strahlen, virtueller Brennpunkt (f &lt; 0). Er liefert immer ein virtuelles, aufrechtes, verkleinertes Bild mit großem Blickfeld: Das ist der Spiegel der Rückspiegel und der Parkhäuser.</li>
</ul>
<p>Bezeichnet man mit <b>g</b> den Abstand des Gegenstands vom Spiegel und mit <b>b</b> den des Bildes, gilt die <b>Abbildungsgleichung</b>:</p>
<p style="text-align:center"><b>1/g + 1/b = 1/f</b></p>
<p>und der <b>Abbildungsmaßstab</b> V = −b/g (V &lt; 0: Bild auf dem Kopf; |V| &gt; 1: vergrößert). Beim Hohlspiegel ist das Bild reell, umgekehrt und verkleinert, wenn der Gegenstand jenseits des Mittelpunkts M liegt; zwischen M und F reell, umgekehrt und vergrößert; zwischen F und S virtuell, aufrecht und vergrößert (wie beim Rasierspiegel).</p>`
    },
    {
      type: "example",
      title: "Beispiel: das Bild in einem Hohlspiegel",
      html: `<p>Ein Hohlspiegel hat den Krümmungsradius R = 40 cm. Eine Kerze steht g = 60 cm vom Scheitel entfernt. Wo entsteht das Bild?</p>
<ol>
<li>Brennweite: f = R/2 = 20 cm.</li>
<li>1/b = 1/f − 1/g = 1/20 − 1/60 = 3/60 − 1/60 = 2/60 = 1/30 → <b>b = 30 cm</b> (positiv: reelles Bild, vor dem Spiegel).</li>
<li>Abbildungsmaßstab: V = −b/g = −30/60 = <b>−0,5</b>: umgekehrtes Bild, halb so groß.</li>
</ol>
<p>Rücken wir die Kerze auf g = 10 cm heran (zwischen F und S): 1/b = 1/20 − 1/10 = −1/20 → b = −20 cm (virtuell, hinter dem Spiegel), V = −(−20)/10 = +2: aufrecht und doppelt so groß. Das siehst du im Schminkspiegel.</p>`
    },
    {
      type: "text",
      title: "Dünne Linsen",
      html: `<p>Eine <b>Linse</b> ist ein Stück durchsichtiges Material (Glas oder Kunststoff), das von gekrümmten Flächen begrenzt wird; die Strahlen werden zweimal durch Brechung abgelenkt, beim Eintreten und beim Austreten. Für eine <b>dünne Linse</b> gelten dieselben Beziehungen wie für Spiegel:</p>
<p style="text-align:center"><b>1/g + 1/b = 1/f &nbsp;&nbsp;&nbsp; V = −b/g</b></p>
<ul>
<li><b>Sammellinse</b> (in der Mitte dicker, f &gt; 0): Die zur Achse parallelen Strahlen laufen im Brennpunkt zusammen. Liegt der Gegenstand jenseits des Brennpunkts, entsteht ein reelles, umgekehrtes Bild (wie bei Fotoapparat, Projektor, unserem Auge); liegt er zwischen Linse und Brennpunkt, entsteht ein virtuelles, aufrechtes, vergrößertes Bild: Das ist die <b>Lupe</b>;</li>
<li><b>Zerstreuungslinse</b> (in der Mitte dünner, f &lt; 0): Die Strahlen werden auseinandergeleitet; das Bild ist immer virtuell, aufrecht und verkleinert.</li>
</ul>
<p>Die <b>Brechkraft</b> einer Linse misst man in <b>Dioptrien</b> (dpt): D = 1/f mit f in Metern. Eine Linse mit f = 50 cm = 0,5 m hat D = +2 dpt; eine mit f = −25 cm hat D = −4 dpt. Je höher die Brechkraft, desto stärker lenkt die Linse die Strahlen ab.</p>
<p><b>Auge und Brille.</b> Im Auge erzeugen Hornhaut und Linse auf der Netzhaut ein reelles, umgekehrtes Bild (das Gehirn richtet es wieder auf). Bei <b>Kurzsichtigkeit</b> entsteht das Bild eines fernen Gegenstands <b>vor</b> der Netzhaut (Auge zu lang): Man korrigiert sie mit einer <b>Zerstreuungslinse</b> (negative Dioptrien). Bei <b>Weitsichtigkeit</b> entsteht es <b>hinter</b> der Netzhaut: Man korrigiert sie mit einer <b>Sammellinse</b> (positive Dioptrien). Auch die Alterssichtigkeit, typisch nach dem 45. Lebensjahr, wird mit Sammellinsen korrigiert.</p>`
    },
    {
      type: "widget",
      title: "Spiegel oder Linse, sammelnd oder zerstreuend?",
      widget: "classify",
      options: { groups: ["Bündelt die Strahlen", "Streut die Strahlen"], items: [
        ["🪞 Hohlspiegel", 0],
        ["🔍 Lupe (Sammellinse)", 0],
        ["👓 Linse bei Kurzsichtigkeit", 1],
        ["🚗 Rückspiegel (Wölbspiegel)", 1],
        ["👓 Linse bei Weitsichtigkeit", 0],
        ["🔭 Hauptspiegel eines Spiegelteleskops", 0],
        ["🪞 Überwachungsspiegel im Laden (Wölbspiegel)", 1],
        ["📷 Objektiv eines Fotoapparats (insgesamt sammelnd)", 0]
      ] },
      caption: "Merke: Hohl und sammelnd bündeln die Strahlen (f > 0); gewölbt und zerstreuend streuen sie (f < 0)."
    },
    {
      type: "curiosity",
      title: "Alhazen und das erste Buch über Optik",
      html: `<p>Die Optik als experimentelle Wissenschaft entsteht in der islamischen Welt. <b>Ibn al-Haytham</b> (latinisiert Alhazen, etwa 965–1040), in Basra geboren und in Kairo tätig, schrieb zwischen 1011 und 1021 das <i>Buch der Optik</i>. Er zeigte durch Experimente mit der Camera obscura, dass wir sehen, weil das Licht von einem Gegenstand ins Auge <b>eintritt</b>, und nicht, weil das Auge Strahlen „aussendet“, wie viele griechische Philosophen glaubten. Seine Methode aus Hypothesen, die durch wiederholbare Experimente überprüft werden, gilt als Vorläufer der modernen wissenschaftlichen Methode. Ins Lateinische übersetzt, beeinflusste sein Buch Roger Bacon, Kepler und Leonardo.</p>`
    },
    {
      type: "curiosity",
      title: "Fata Morgana und die „zu früh“ stehende Sonne",
      html: `<p>Auf Sommerstraßen sehen wir manchmal „Wasserlachen“, die verschwinden, wenn wir näher kommen: Das ist eine <b>Fata Morgana</b> (Luftspiegelung). Der heiße Asphalt erwärmt die Luft an der Oberfläche, die eine kleinere Brechzahl hat als die darüberliegende Luft: Die Strahlen vom Himmel krümmen sich nach oben, bevor sie unser Auge erreichen, und wir sehen ein Stück Himmel „am Boden“, das wie Wasser aussieht. Auch der Sonnenuntergang ist ein Brechungseffekt: Wenn die Sonne den Horizont gerade zu berühren scheint, steht sie in Wirklichkeit schon etwa einen halben Grad darunter, und ihr Bild ist etwas abgeplattet, weil die Atmosphäre die Strahlen krümmt.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Brechung zu verstehen",
      intro: "Warum knickt das Licht ab, wenn es das Medium wechselt? Drei verschiedene Bilder, die zum selben Gesetz führen.",
      tabs: [
        {
          label: "🏖️ Der Rettungsschwimmer von Fermat",
          html: `<p>Ein Rettungsschwimmer soll einen Schwimmer im Meer erreichen und startet am Strand. Im Sand läuft er schnell, im Wasser schwimmt er langsamer. Der schnellste Weg <b>ist nicht die Gerade</b>: Es lohnt sich, etwas länger im Sand zu laufen und weniger im Wasser zu schwimmen. Pierre de Fermat (1601–1665) erkannte, dass das Licht dasselbe tut: Zwischen zwei Punkten wählt es den Weg, der die <b>kürzeste Zeit</b> braucht (<b>Fermatsches Prinzip</b>). Aus diesem Prinzip folgen sowohl die Reflexion als auch das Snelliussche Gesetz, und es erklärt, warum sich das Licht zum Lot hin biegt, wenn es langsamer wird (beim Eintritt in ein Medium mit größerem n).</p>`
        },
        {
          label: "🛒 Der Wagen auf der Wiese",
          html: `<p>Ein Wagen mit nebeneinanderliegenden Rädern fährt schräg vom glatten Asphalt auf eine Wiese. Das Rad, das als erstes das Gras berührt, wird langsamer, während das andere schnell weiterrollt: Der Wagen <b>dreht</b> sich zum langsamen Rad hin und ändert seine Richtung. Ebenso dreht sich eine Lichtfront, die schräg in ein langsameres Medium eintritt. Diese Analogie ähnelt sehr der von Huygens und den Verfechtern der Wellentheorie des Lichts im 17. Jahrhundert.</p>`
        },
        {
          label: "✏️ Wie man einen Strahl durch Linsen zeichnet",
          html: `<p>Um das Bild eines Gegenstands in einer Sammellinse zu konstruieren, genügen zwei „besondere“ Strahlen, die von der Pfeilspitze ausgehen:</p>
<ol>
<li>der Strahl <b>parallel</b> zur Achse: Hinter der Linse geht er durch den <b>Brennpunkt</b>;</li>
<li>der Strahl durch die <b>Mitte</b> der Linse: Er wird nicht abgelenkt.</li>
</ol>
<p>Wo sie sich treffen (oder ihre Verlängerungen), entsteht die Spitze des Bildes.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#64748b" stroke-width="2"/>
<path d="M300 40 Q320 150 300 260 Q280 150 300 40 Z" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/>
<circle cx="210" cy="150" r="5" fill="#111827"/><text x="203" y="178" font-size="16" fill="#111827" font-weight="bold">F</text>
<circle cx="390" cy="150" r="5" fill="#111827"/><text x="383" y="178" font-size="16" fill="#111827" font-weight="bold">F'</text>
<line x1="100" y1="150" x2="100" y2="100" stroke="#16a34a" stroke-width="5"/>
<polygon points="100,95 93,110 107,110" fill="#16a34a"/>
<text x="60" y="130" font-size="16" fill="#15803d" font-weight="bold">Gegenstand</text>
<line x1="100" y1="100" x2="300" y2="100" stroke="#f59e0b" stroke-width="3"/>
<line x1="300" y1="100" x2="490" y2="205" stroke="#f59e0b" stroke-width="3"/>
<line x1="100" y1="100" x2="490" y2="198" stroke="#ef4444" stroke-width="3"/>
<line x1="490" y1="150" x2="490" y2="200" stroke="#dc2626" stroke-width="5"/>
<polygon points="490,205 483,190 497,190" fill="#dc2626"/>
<text x="500" y="232" font-size="16" fill="#b91c1c" font-weight="bold">reelles, umgekehrtes Bild</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Begriffslandkarte der geometrischen Optik",
      nodes: [
        { id: "luce", label: "Lichtstrahlen", x: 50, y: 6, color: "#64748b", html: "Modell: Das Licht breitet sich in einem homogenen Medium geradlinig aus.", why: "Es ist ein genähertes Modell, das gilt, wenn die Gegenstände viel größer sind als die Wellenlänge des Lichts (etwa ein halbes Tausendstel mm). Sonst treten Beugung und Interferenz auf." },
        { id: "ombre", label: "Schatten und Finsternisse", x: 15, y: 25, color: "#94a3b8", html: "Bereiche hinter einem Hindernis, die das Licht nicht erreicht.", why: "Sie sind der einfachste Beweis für die geradlinige Ausbreitung: Schon die alten Griechen maßen mit Schatten und Geometrie die Größe der Erde (Eratosthenes) und astronomische Entfernungen." },
        { id: "riflessione", label: "Reflexion", x: 50, y: 28, color: "#ef4444", html: "α' = α, Strahlen in derselben Ebene.", why: "Sie folgt aus dem Fermatschen Prinzip: Der kürzeste reflektierte Weg ist der mit gleichen Winkeln. Euklid und Heron kannten sie schon." },
        { id: "rifrazione", label: "Brechung", x: 82, y: 28, color: "#16a34a", html: "n1 sin α = n2 sin β.", why: "Das Licht wird in Medien mit größerem n langsamer (n = c/v). Snell (1621) und Descartes formulierten sie; Fermat leitete sie aus dem Prinzip der kürzesten Zeit ab (1662)." },
        { id: "specchi", label: "Spiegel", x: 28, y: 55, color: "#f59e0b", html: "Eben und kugelförmig: 1/g + 1/b = 1/f.", why: "Beim Kugelspiegel liegt der Brennpunkt bei R/2, weil bei achsennahen Strahlen die Geometrie des Kreises die reflektierten Strahlen auf halbem Weg zwischen Scheitel und Mittelpunkt zusammenlaufen lässt." },
        { id: "riftot", label: "Totalreflexion", x: 82, y: 55, color: "#0ea5e9", html: "Jenseits des Grenzwinkels sin α_G = n2/n1 gibt es keinen gebrochenen Strahl.", why: "Es ist das Snelliussche Gesetz im Grenzfall: Müsste sin β größer als 1 sein, gibt es keine Lösung, und das gesamte Licht wird reflektiert. Sie macht Glasfasern möglich." },
        { id: "lenti", label: "Linsen", x: 62, y: 78, color: "#9333ea", html: "Sammelnd und zerstreuend, Brechkraft in Dioptrien.", why: "Eine Linse ist eine Folge von zwei Brechungen an gekrümmten Flächen; die Form lenkt Strahlen, die weiter von der Mitte entfernt sind, stärker ab, sodass sie sich in einem Punkt treffen." },
        { id: "occhio", label: "Auge und Instrumente", x: 30, y: 92, color: "#22c55e", html: "Brille, Mikroskop, Teleskop, Fotoapparat.", why: "Alle kombinieren Linsen oder Spiegel. Das Fernrohr wurde 1609 von Galilei verbessert; Kepler erkannte 1604 die Funktionsweise des Auges und wie man seine Fehler korrigiert." }
      ],
      edges: [["luce", "ombre", "beweist"], ["luce", "riflessione", "an Flächen"], ["luce", "rifrazione", "zwischen Medien"], ["riflessione", "specchi", "Anwendung"], ["rifrazione", "riftot", "Grenzfall"], ["rifrazione", "lenti", "Anwendung"], ["lenti", "occhio", "Instrumente"], ["specchi", "occhio", "Instrumente"]]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Das Licht breitet sich geradlinig aus; im Vakuum ist c = 3,00 × 10<sup>8</sup> m/s.</li>
<li><b>Reflexion</b>: α' = α. Der ebene Spiegel liefert ein virtuelles, aufrechtes, symmetrisches Bild.</li>
<li><b>Brechung</b>: n = c/v; n<sub>1</sub> sin α = n<sub>2</sub> sin β. Zu größerem n hin nähert man sich dem Lot.</li>
<li><b>Totalreflexion</b>, wenn n<sub>1</sub> &gt; n<sub>2</sub> und α &gt; α<sub>G</sub>, mit sin α<sub>G</sub> = n<sub>2</sub>/n<sub>1</sub>.</li>
<li>Spiegel und dünne Linsen: <b>1/g + 1/b = 1/f</b>, V = −b/g; Kugelspiegel f = R/2; Brechkraft D = 1/f (Dioptrien).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Spiegel und Linsen",
      questions: [
        { type: "num", q: "Eine Sammellinse hat die Brennweite 10 cm. Ein Gegenstand steht 30 cm entfernt. In welchem Abstand (in cm) entsteht das Bild?", answer: 15, unit: "cm", explain: "1/b = 1/10 − 1/30 = 2/30, also b = 15 cm." },
        { type: "num", q: "Wie viele Dioptrien hat eine Sammellinse mit der Brennweite 25 cm?", answer: 4, unit: "dpt", explain: "D = 1/f = 1/0,25 m = 4 dpt." },
        { type: "mc", q: "Welche Linse korrigiert Kurzsichtigkeit?", options: ["Sammellinse", "Zerstreuungslinse", "Planglas"], answer: 1, explain: "Im kurzsichtigen Auge entsteht das Bild vor der Netzhaut: Man braucht eine Zerstreuungslinse, um es nach hinten zu verschieben." },
        { type: "tf", q: "Der Wölbspiegel liefert immer ein virtuelles, aufrechtes, verkleinertes Bild.", answer: true, explain: "Für jede Lage des Gegenstands: Deshalb wird er in Rückspiegeln verwendet, mit einem großen Blickfeld." }
      ]
    }
  ],
  glossary: [
    { t: "Lichtstrahl", d: "Gerichtete Linie, die den Weg des Lichts darstellt." },
    { t: "Einfallslot", d: "Gerade senkrecht zu einer Fläche in dem Punkt, an dem ein Strahl auftrifft." },
    { t: "Reflexion", d: "Rückkehr des Lichts ins selbe Medium nach dem Auftreffen auf eine Fläche: α' = α." },
    { t: "Brechung", d: "Richtungsänderung des Lichts beim Übergang von einem Medium in ein anderes." },
    { t: "Brechzahl", d: "n = c/v: Verhältnis der Lichtgeschwindigkeit im Vakuum zu der im Medium." },
    { t: "Grenzwinkel", d: "Einfallswinkel, jenseits dessen Totalreflexion auftritt: sin α_G = n2/n1." },
    { t: "Brennpunkt", d: "Punkt, in dem sich die zur Achse parallelen Strahlen nach einem Spiegel oder einer Linse treffen." },
    { t: "Brennweite", d: "Abstand zwischen Brennpunkt und Spiegel bzw. Linse: f = R/2 bei Kugelspiegeln." },
    { t: "Reelles / virtuelles Bild", d: "Reell: von Strahlen gebildet, die sich wirklich treffen. Virtuell: von den Verlängerungen der Strahlen gebildet." },
    { t: "Dioptrie", d: "Einheit der Brechkraft einer Linse: 1 dpt = 1 m⁻¹." },
    { t: "Glasfaser", d: "Glasfaden, in dem das Licht durch Totalreflexion wandert." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche Annahme liegt der geometrischen Optik zugrunde?", options: ["Das Licht breitet sich in einem homogenen Medium geradlinig aus", "Das Licht besteht nur aus Wellen", "Das Licht bleibt an Spiegeln stehen"], answer: 0, explain: "Das Modell der geradlinigen Strahlen beschreibt Schattenbildung, Spiegel und Linsen sehr gut." },
      { type: "num", q: "Ein Strahl trifft unter einem Winkel von 28° gegen das Lot auf einen ebenen Spiegel. Wie groß ist der Reflexionswinkel?", answer: 28, unit: "°", explain: "Nach dem Reflexionsgesetz ist α' = α = 28°." },
      { type: "num", q: "In einer Flüssigkeit breitet sich das Licht mit 2,25 × 10^8 m/s aus. Berechne die Brechzahl (c = 3,0 × 10^8 m/s). Runde auf zwei Dezimalstellen.", answer: 1.33, tol: 0.01, explain: "n = c/v = 3,0/2,25 = 1,33: Das ist Wasser." },
      { type: "tf", q: "Beim Übergang von Wasser in Luft nähert sich ein schräger Strahl dem Lot.", answer: false, explain: "Beim Übergang in ein Medium mit kleinerem n (Luft) entfernt sich der Strahl vom Lot." },
      { type: "num", q: "Ein Strahl geht von Luft (n = 1) in Glas (n = 1,5) über, mit Einfallswinkel 30°. Wie groß ist sin β (auf zwei Dezimalstellen gerundet)?", answer: 0.33, tol: 0.01, explain: "sin β = sin 30° / 1,5 = 0,5/1,5 ≈ 0,33, also β ≈ 19,5°." },
      { type: "mc", q: "Warum transportiert eine Glasfaser Licht, ohne es zu verlieren?", options: ["Weil sie aus Metall ist", "Durch Totalreflexion an den Innenwänden", "Weil das Licht im Glas stehen bleibt"], answer: 1, explain: "In der Faser trifft das Licht unter Winkeln größer als der Grenzwinkel auf die Wände: Es wird total reflektiert und läuft weiter." },
      { type: "num", q: "Ein Hohlspiegel hat den Krümmungsradius 60 cm. Wie groß ist die Brennweite (in cm)?", answer: 30, unit: "cm", explain: "f = R/2 = 30 cm." },
      { type: "num", q: "Eine Linse hat f = 20 cm, und ein Gegenstand steht in 60 cm Abstand. Berechne den Bildabstand (in cm).", answer: 30, unit: "cm", explain: "1/b = 1/20 − 1/60 = 2/60, also b = 30 cm; V = −0,5." },
      { type: "tf", q: "Eine Lupe ist eine Sammellinse, bei der der Gegenstand zwischen Linse und Brennpunkt liegt.", answer: true, explain: "In diesem Fall ist das Bild virtuell, aufrecht und vergrößert." },
      { type: "order", q: "Bringe die Schritte zur zeichnerischen Konstruktion des Bildes bei einer Sammellinse in die richtige Reihenfolge.", items: ["Optische Achse, Linse und Brennpunkte zeichnen", "Den Gegenstand und einen Strahl parallel zur Achse zeichnen", "Den Strahl hinter der Linse durch den Brennpunkt führen", "Den Strahl durch die Linsenmitte zeichnen", "Den Schnittpunkt finden: Dort entsteht das Bild"], explain: "Zwei besondere Strahlen genügen: Wo sie sich treffen, liegt die Spitze des Bildes." },
      { type: "text", q: "Wie heißt das Phänomen, bei dem ein Strahl jenseits eines bestimmten Winkels das Medium nicht mehr verlässt, sondern vollständig zurückgeworfen wird?", answer: ["totalreflexion", "die totalreflexion", "totale reflexion", "totale innere reflexion"], explain: "Es ist die Totalreflexion, die jenseits des Grenzwinkels auftritt." }
    ]
  }
});
