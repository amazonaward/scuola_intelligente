TOPIC('de', {
  id: "l1-sci-moti-terra",
  title: "Die Bewegungen von Erde und Mond",
  intro: "Wir bemerken nichts davon, und doch drehst du dich in diesem Moment mit mehr als 1000 km/h (in mittleren Breiten) um die Erdachse und bewegst dich mit etwa 30 Kilometern pro Sekunde um die Sonne. Von diesen beiden Bewegungen hängen Tag und Nacht, die Jahreszeiten und die Zeitzonen ab. Und der Mond mit seinen Phasen, den Gezeiten und den Finsternissen vervollständigt das Schauspiel. In dieser Lektion lernen wir die <b>Geometrie des Himmels</b> kennen und erfahren, warum es im Sommer warm ist, obwohl die Erde im Sommer <i>weiter</i> von der Sonne entfernt ist.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Die Erdrotation",
      html: `<p>Die Erde dreht sich um ihre <b>Achse</b> (die Gerade durch die Pole) von <b>West nach Ost</b> (vom Nordpol aus gesehen gegen den Uhrzeigersinn). Deshalb scheinen Sonne, Mond und Sterne im Osten aufzugehen und im Westen unterzugehen.</p>
<ul>
<li>Der <b>Sterntag</b> (bezogen auf die Sterne) dauert <b>23 h 56 min 4 s</b>.</li>
<li>Der <b>Sonnentag</b> (von einem Mittag zum nächsten) dauert im Mittel <b>24 Stunden</b>. Er ist etwas länger, weil sich die Erde, während sie rotiert, auch auf ihrer Bahn weiterbewegt und sich etwa 4 Minuten länger drehen muss, um die Sonne wieder an dieselbe Stelle zu bringen.</li>
<li>Die Geschwindigkeit eines Punktes der Oberfläche hängt von der Breite ab: Am Äquator beträgt sie etwa <b>1670 km/h</b>, in Rom (etwa 42° N) etwa 1240 km/h, an den Polen null.</li>
</ul>
<p>Folgen der Rotation:</p>
<ul>
<li>der <b>Wechsel von Tag und Nacht</b>;</li>
<li>die <b>Abplattung an den Polen</b> (die Erde ist ein Geoid);</li>
<li>die <b>Ablenkung bewegter Körper</b> durch die <b>Corioliskraft</b>: auf der Nordhalbkugel nach rechts, auf der Südhalbkugel nach links (wichtig für Winde und Meeresströmungen, nicht aber für den Abfluss des Waschbeckens, der von anderen Faktoren abhängt);</li>
<li>die <b>Gezeiten</b> erklären sich durch Mond und Sonne, aber die Rotation lässt sie über den Planeten „laufen“.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Das foucaultsche Pendel: der Beweis, dass sich die Erde dreht",
      html: `<p>1851 hängte der französische Physiker <b>Léon Foucault</b> unter die Kuppel des Pariser Panthéons eine Kugel von 28 kg an ein 67 Meter langes Seil. Das Pendel schwang, und die Schwingungsebene drehte sich langsam: Der Boden, also die Erde, drehte sich unter ihm hinweg. In Paris vollendet die Ebene in etwa 32 Stunden eine volle Drehung; an den Polen in 24 Stunden; am Äquator dreht sie sich nicht. Es war der erste direkte Nachweis der Erdrotation im Experiment.</p>`
    },
    {
      type: "text",
      title: "Die Revolution und die Neigung der Achse",
      html: `<p>Die Erde läuft auf einer fast kreisförmigen Ellipsenbahn um die Sonne, im gleichen Drehsinn wie die Rotation (vom Nordpol aus gesehen gegen den Uhrzeigersinn). Das <b>siderische Jahr</b> dauert <b>365,256 Tage</b>; das <b>tropische Jahr</b> (von Tagundnachtgleiche zu Tagundnachtgleiche, auf dem der Kalender beruht) etwa <b>365,242 Tage</b>. Daher die <b>Schaltjahre</b> (Gregorianischer Kalender, 1582): alle 4 Jahre ein Tag mehr, außer bei Jahrhundertjahren, die nicht durch 400 teilbar sind (1900 war kein Schaltjahr, 2000 schon).</p>
<p>Die Entfernung Erde–Sonne schwankt nur wenig: <b>Perihel</b> etwa 147,1 Millionen km (Anfang Januar), <b>Aphel</b> etwa 152,1 Millionen km (Anfang Juli). Der Unterschied beträgt nur 3 %: <b>Die Entfernung verursacht nicht die Jahreszeiten</b>.</p>
<p>Die wahre Ursache ist die <b>Neigung der Erdachse</b>: Die Achse bildet einen Winkel von etwa <b>23,4°</b> (23° 27') mit der Senkrechten auf der <b>Bahnebene</b> (genannt <b>Ekliptik</b>) und <b>behält während des Jahres ihre Richtung im Raum bei</b> (sie zeigt ungefähr zum Polarstern). Deshalb ist für ein halbes Jahr die Nordhalbkugel der Sonne zugeneigt und für das andere halbe Jahr die Südhalbkugel.</p>`
    },
    {
      type: "svg",
      title: "Die Jahreszeiten: warum sie wechseln",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#0f172a"/>
<circle cx="320" cy="160" r="26" fill="#facc15"/><text x="320" y="205" font-size="14" text-anchor="middle" fill="#fde68a">Sonne</text>
<ellipse cx="320" cy="160" rx="240" ry="105" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
<g>
<circle cx="80" cy="160" r="20" fill="#3b82f6"/><line x1="68" y1="190" x2="92" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="80" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21. Juni</text><text x="80" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">Sommersonnenwende N</text>
<circle cx="560" cy="160" r="20" fill="#3b82f6"/><line x1="548" y1="190" x2="572" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="560" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21. Dezember</text><text x="560" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">Wintersonnenwende N</text>
<circle cx="320" cy="265" r="20" fill="#3b82f6"/><line x1="308" y1="295" x2="332" y2="235" stroke="#f8fafc" stroke-width="3"/><text x="320" y="312" font-size="14" text-anchor="middle" fill="#e2e8f0">Tagundnachtgleiche</text>
<circle cx="320" cy="55" r="20" fill="#3b82f6"/><line x1="308" y1="85" x2="332" y2="25" stroke="#f8fafc" stroke-width="3"/><text x="320" y="20" font-size="14" text-anchor="middle" fill="#e2e8f0">Tagundnachtgleiche</text>
</g>
<text x="140" y="60" font-size="14" fill="#93c5fd">Achse immer parallel zu sich selbst</text>
</svg>`,
      caption: "Die Achse (weiße Linie) zeigt immer in dieselbe Richtung: Im Juni ist die Nordhalbkugel der Sonne zugeneigt, im Dezember in die entgegengesetzte Richtung."
    },
    {
      type: "text",
      title: "Sonnenwenden, Tagundnachtgleichen und Jahreszeiten",
      html: `<p>Wenn die Nordhalbkugel der Sonne zugeneigt ist, treffen die Strahlen <b>steiler</b> ein, und die Sonne steht <b>länger</b> am Himmel: Die Energie pro Quadratmeter ist größer, und es bleibt mehr Zeit zum Erwärmen. Es ist Sommer. Sechs Monate später ist es umgekehrt. Die Jahreszeiten der Südhalbkugel sind immer denen der Nordhalbkugel entgegengesetzt (an Weihnachten ist in Australien Sommer).</p>
<table>
<tr><th>Datum (ungefähr)</th><th>Ereignis</th><th>Was geschieht (Nordhalbkugel)</th></tr>
<tr><td>20./21. März</td><td><b>Frühlings-Tagundnachtgleiche</b></td><td>Tag und Nacht überall gleich lang (12 h); die Sonne steht am Äquator im Zenit</td></tr>
<tr><td>20./21. Juni</td><td><b>Sommersonnenwende</b></td><td>längster Tag; Sonne im Zenit über dem Wendekreis des Krebses (23,4° N)</td></tr>
<tr><td>22./23. September</td><td><b>Herbst-Tagundnachtgleiche</b></td><td>Tag und Nacht gleich lang</td></tr>
<tr><td>21./22. Dezember</td><td><b>Wintersonnenwende</b></td><td>kürzester Tag; Sonne im Zenit über dem Wendekreis des Steinbocks (23,4° S)</td></tr>
</table>
<p>Die <b>Mittagssonne</b> erreicht eine maximale Höhe über dem Horizont von <b>90° − Breite + Deklination</b>. In Rom (42° N) beträgt sie am 21. Juni 90 − 42 + 23,4 = <b>71,4°</b>; am 21. Dezember 90 − 42 − 23,4 = <b>24,6°</b>.</p>
<p>Die <b>Beleuchtungszonen</b>: die heiße Zone zwischen den Wendekreisen (±23,4°); die gemäßigten Zonen zwischen den Wendekreisen und den Polarkreisen; die kalten Zonen von den <b>Polarkreisen</b> (±66,6°) bis zu den Polen, wo es im Sommer die <b>Mitternachtssonne</b> und im Winter die Polarnacht gibt.</p>`
    },
    {
      type: "example",
      title: "Die Sonnenhöhe in Mailand",
      html: `<p>Mailand liegt auf etwa <b>45,5° N</b>. Wie hoch steht die Sonne mittags bei den Tagundnachtgleichen und den Sonnenwenden?</p>
<ul>
<li>Tagundnachtgleiche (Deklination 0°): 90 − 45,5 = <b>44,5°</b></li>
<li>Sommersonnenwende: 90 − 45,5 + 23,4 = <b>67,9°</b></li>
<li>Wintersonnenwende: 90 − 45,5 − 23,4 = <b>21,1°</b></li>
</ul>
<p>Der Schatten eines 2 m hohen Pfahls ist mittags im Dezember 2 / tan(21,1°) ≈ 5,2 m lang, im Juni aber nur 2 / tan(67,9°) ≈ 0,8 m. Nach diesem Prinzip zeigen Sonnenuhren die Jahreszeiten an.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Jahreszeiten und Rotation",
      questions: [
        { type: "mc", q: "Die Ursache der Jahreszeiten ist …", options: ["die Veränderung der Entfernung von der Sonne", "die Neigung der Erdachse", "die Rotation um die eigene Achse"], answer: 1, explain: "Die um 23,4° geneigte Achse verändert den Einfallswinkel der Strahlen und die Tageslänge." },
        { type: "tf", q: "Im Dezember ist die Erde der Sonne näher als im Juni.", answer: true, explain: "Das Perihel liegt im Januar: Der Winter der Nordhalbkugel findet statt, wenn die Erde der Sonne am nächsten ist." },
        { type: "num", q: "Welche maximale Höhe über dem Horizont erreicht die Sonne an einem Ort auf 40° N zur Tagundnachtgleiche?", answer: 50, unit: "°", explain: "90 − 40 = 50°." }
      ]
    },
    {
      type: "3d",
      title: "Der Globus und die wichtigen Breitenkreise",
      scene: "globe",
      options: { points: [
        { lat: 0, lon: 0, label: "Äquator / Greenwich", color: "#ef4444" },
        { lat: 23.4, lon: 30, label: "Wendekreis des Krebses", color: "#f97316" },
        { lat: -23.4, lon: 30, label: "Wendekreis des Steinbocks", color: "#f97316" },
        { lat: 66.6, lon: 30, label: "Nördlicher Polarkreis", color: "#3b82f6" },
        { lat: 41.9, lon: 12.5, label: "Rom", color: "#16a34a" }
      ], routes: [] },
      caption: "Drehe den Globus: Die Wendekreise markieren die Grenze, bis zu der die Sonne im Zenit stehen kann; die Polarkreise die Grenze der Mitternachtssonne."
    },
    {
      type: "text",
      title: "Die Zeitzonen",
      html: `<p>Die Erde dreht sich in 24 Stunden um 360°, also um <b>15° pro Stunde</b> (1° alle 4 Minuten). Die Sonne kulminiert (es ist „Mittag“) je nach Länge zu unterschiedlichen Zeitpunkten: Rom (12,5° O) und Turin (7,7° O) unterscheiden sich um etwa 4,8°, also tritt der wahre Mittag in Turin etwa 19 Minuten nach Rom ein. Im 19. Jahrhundert hatte jede Stadt ihre eigene Uhrzeit, und Fahrpläne der Eisenbahn wurden unmöglich: 1884 wählte man auf der <b>Internationalen Meridiankonferenz</b> in Washington den <b>Meridian von Greenwich</b> (Länge 0°) als Ursprung und teilte den Globus in <b>24 Zeitzonen</b> zu je 15°.</p>
<ul>
<li>Wenn man nach <b>Osten</b> reist, geht die Uhrzeit <b>vor</b> (man gewinnt Stunden), nach <b>Westen</b> geht sie <b>zurück</b>.</li>
<li>Italien liegt in der Zeitzone Mitteleuropas (<b>MEZ = UTC+1</b>, Meridian 15° O, der in der Nähe des Ätna verläuft); im Sommer ergibt die <b>Sommerzeit</b> UTC+2.</li>
<li>Die <b>Datumsgrenze</b> (etwa 180° Länge, im Pazifik) ist die Linie, an der man zum nächsten Tag wechselt: Wenn man nach Westen fährt, <b>gewinnt</b> man einen Tag.</li>
</ul>
<p>Viele Länder verwenden Zeitzonen, die nicht streng an den Meridianen ausgerichtet sind: China, das sich über fünf geografische Zeitzonen erstreckt, verwendet nur eine einzige Zeit (UTC+8).</p>`
    },
    {
      type: "example",
      title: "Wie spät ist es in New York?",
      html: `<p>In Rom ist es <b>18:00</b> Uhr (MEZ, UTC+1). New York liegt bei UTC−5 (Winterzeit). Wie spät ist es in New York?</p>
<ol>
<li>Unterschied der Zonen: +1 − (−5) = 6 Stunden.</li>
<li>New York liegt im Westen, also ist die Uhrzeit <b>zurück</b>: 18:00 − 6 h = <b>12:00</b> Uhr.</li>
</ol>
<p>Für Tokio (UTC+9): Unterschied 9 − 1 = 8 Stunden, im Osten: 18:00 + 8 = <b>02:00 Uhr am nächsten Tag</b>.</p>`
    },
    {
      type: "text",
      title: "Der Mond und seine Bewegungen",
      html: `<p>Der Mond ist unser einziger natürlicher Satellit: Durchmesser 3474 km (etwa ein Viertel des Erddurchmessers), mittlere Entfernung <b>384 400 km</b>. Er führt drei Bewegungen aus:</p>
<ul>
<li><b>Rotation</b> um sich selbst in 27,3 Tagen;</li>
<li><b>Revolution</b> um die Erde in 27,3 Tagen (<b>siderischer Monat</b>);</li>
<li><b>Translation</b> mit der Erde um die Sonne.</li>
</ul>
<p>Weil Rotation und Revolution gleich lang dauern (<b>gebundene Rotation</b>, verursacht durch die Gezeitenkräfte), zeigt uns der Mond <b>immer dieselbe Seite</b>. Die andere Seite (nicht „dunkel“, sondern „verborgen“) wurde 1959 zum ersten Mal von der sowjetischen Sonde <b>Luna 3</b> fotografiert.</p>
<p>Die <b>Mondphasen</b> hängen von der relativen Stellung von Sonne, Erde und Mond ab: Der Mond ist immer zur Hälfte von der Sonne beleuchtet, aber wir sehen davon einen unterschiedlichen Teil. Der Zyklus (<b>synodischer Monat</b> oder Lunation) dauert <b>29,53 Tage</b>, länger als der siderische Monat, weil sich die Erde inzwischen auf ihrer Bahn weiterbewegt hat und der Mond der Sonne „nachlaufen“ muss, um wieder in dieselbe Stellung zu kommen.</p>
<table>
<tr><th>Phase</th><th>Stellung</th><th>Aussehen</th></tr>
<tr><td><b>Neumond</b></td><td>Mond zwischen Erde und Sonne</td><td>unsichtbar</td></tr>
<tr><td>Erstes Viertel</td><td>90° von der Sonne entfernt</td><td>rechte Hälfte beleuchtet (Nordhalbkugel), geht mittags auf</td></tr>
<tr><td><b>Vollmond</b></td><td>Erde zwischen Sonne und Mond</td><td>ganze Scheibe; geht bei Sonnenuntergang auf</td></tr>
<tr><td>Letztes Viertel</td><td>90° von der Sonne entfernt</td><td>linke Hälfte beleuchtet; geht um Mitternacht auf</td></tr>
</table>
<p>Merkregel für die „Rundung“ (Nordhalbkugel): Wölbt sich der Mond nach rechts wie ein D oder ein z (<b>zunehmend</b>, Rundung nach Westen), so <b>nimmt er zu</b>; wölbt er sich nach links wie ein C oder ein a (Rundung nach Osten), so <b>nimmt er ab</b>.</p>`
    },
    {
      type: "svg",
      title: "Die Mondphasen",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">Die Phasen von der Erde aus gesehen (Nordhalbkugel) im Lauf eines Monats</text>
<g>
<circle cx="70" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
<circle cx="190" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M190 74 A36 36 0 0 1 190 146 A18 36 0 0 0 190 74 Z" fill="#fde68a"/>
<circle cx="310" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M310 74 A36 36 0 0 1 310 146 Z" fill="#fde68a"/>
<circle cx="430" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M430 74 A36 36 0 0 1 430 146 A18 36 0 0 1 430 74 Z" fill="#fde68a"/>
<circle cx="550" cy="110" r="36" fill="#fde68a" stroke="#64748b" stroke-width="2"/>
</g>
<g font-size="14" fill="#e2e8f0" text-anchor="middle">
<text x="70" y="175">Neumond</text><text x="190" y="175">Zunehmend</text><text x="310" y="175">Erstes Viertel</text><text x="430" y="175">Dreiviertelmond</text><text x="550" y="175">Vollmond</text>
<text x="70" y="195" fill="#94a3b8">Tag 0</text><text x="190" y="195" fill="#94a3b8">~3–4</text><text x="310" y="195" fill="#94a3b8">~7,4</text><text x="430" y="195" fill="#94a3b8">~11</text><text x="550" y="195" fill="#94a3b8">~14,8</text>
</g>
<text x="320" y="250" font-size="15" text-anchor="middle" fill="#cbd5e1">Danach nimmt der Mond ab: Dreiviertelmond, letztes Viertel (Tag ~22), abnehmend, und wieder Neumond (29,5)</text>
<text x="320" y="275" font-size="14" text-anchor="middle" fill="#94a3b8">Der beleuchtete Teil liegt immer auf der Seite der Sonne</text>
</svg>`,
      caption: "Der Mond ändert seine Form nicht: Es ändert sich der Teil seiner beleuchteten Hälfte, der uns zugewandt ist."
    },
    {
      type: "text",
      title: "Die Finsternisse",
      html: `<p>Eine <b>Finsternis</b> entsteht, wenn Sonne, Erde und Mond auf einer Linie stehen.</p>
<ul>
<li><b>Sonnenfinsternis</b>: Der Mond schiebt sich bei <b>Neumond</b> zwischen Erde und Sonne. Sein Schatten fällt auf die Erde, und wer in der Schattenzone steht (ein höchstens etwa 270 km breiter Streifen), sieht die <b>totale</b> Finsternis, die höchstens etwa siebeneinhalb Minuten dauert. Außerhalb, im <b>Halbschatten</b>, ist sie partiell. Es ist ein glücklicher Zufall, dass die Sonne etwa 400-mal größer und etwa 400-mal weiter entfernt ist als der Mond: Die beiden Scheiben erscheinen am Himmel fast gleich groß. Steht der Mond an seinem entferntesten Punkt, ist die Finsternis <b>ringförmig</b>.</li>
<li><b>Mondfinsternis</b>: Die Erde schiebt sich bei <b>Vollmond</b> dazwischen, und der Mond tritt in den Erdschatten ein. Man sieht sie von der ganzen Erdhälfte, auf der Nacht ist, und die Totalität dauert bis zu fast zwei Stunden; der Mond verschwindet nicht, sondern wird <b>rötlich</b>, weil die Erdatmosphäre das rote Sonnenlicht zum Mond hin ablenkt (wie bei einem Sonnenuntergang).</li>
</ul>
<p>Warum gibt es nicht bei jedem Neumond und Vollmond eine Finsternis? Weil die Mondbahn um etwa <b>5,1°</b> gegen die Ekliptik geneigt ist: Meist zieht der Mond etwas oberhalb oder unterhalb der Sonne oder des Erdschattens vorbei. Eine Finsternis gibt es nur, wenn der Mond nahe bei den <b>Knoten</b> steht, den beiden Punkten, an denen seine Bahn die Ekliptikebene durchstößt. Jedes Jahr gibt es 4 bis 7 Finsternisse (Sonnen- und Mondfinsternisse zusammen).</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Mondphasen zu verstehen",
      intro: "Die Phasen sind ein klassisches Missverständnis: Der Erdschatten hat nichts damit zu tun. Versuche, sie nachzustellen.",
      tabs: [
        {
          label: "💡 Das Lampenexperiment",
          html: `<p>Schalte in einem dunklen Raum eine Lampe ein (die Sonne) und halte einen Ball in der Hand (den Mond), während dein Kopf die Erde ist. Wenn du dich mit ausgestrecktem Ball um dich selbst drehst, siehst du den Ball so beleuchtet wie in allen Phasen: voll, wenn er der Lampe gegenüber ist, neu, wenn er zwischen dir und der Lampe ist. Der Schatten deines Kopfes fällt nur in einer ganz bestimmten Stellung auf den Ball: die Mondfinsternis.</p>`
        },
        {
          label: "🧭 Wann er auf- und untergeht",
          html: `<p>Eine Möglichkeit, die Phase an der Uhrzeit zu erkennen: Der <b>Neumond</b> geht mit der Sonne auf und unter; der <b>Vollmond</b> geht auf, wenn die Sonne untergeht (und umgekehrt); das <b>erste Viertel</b> geht mittags auf und um Mitternacht unter; das <b>letzte Viertel</b> geht um Mitternacht auf und mittags unter. Jeden Tag geht der Mond im Mittel etwa 50 Minuten später auf als am Vortag, weil er sich auf seiner Bahn um etwa 12–13° nach Osten weiterbewegt.</p>`
        },
        {
          label: "🌊 Warum gibt es Gezeiten?",
          html: `<p>Die Schwerkraft des Mondes zieht das Wasser auf der dem Mond zugewandten Seite an und erzeugt durch den Differenzeffekt auch auf der gegenüberliegenden Seite eine Aufwölbung: zwei Fluten und zwei Ebben pro Tag (etwa alle 12 Stunden und 25 Minuten). Bei <b>Neumond</b> und <b>Vollmond</b> addieren sich Sonne und Mond: größere Gezeiten, die <b>Springfluten</b>. Bei den Vierteln behindern sie sich: schwächere Gezeiten, die <b>Nippfluten</b>. Im Mittelmeer sind die Gezeiten klein (wenige Dezimeter, in Venedig aber bis etwa 1 m), in der Fundy-Bucht in Kanada übersteigen sie 15 m.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Der Mond entfernt sich",
      html: `<p>Die Spiegel, die die Apollo-Astronauten auf dem Mond zurückließen (1969–1972), erlauben es, die Entfernung Erde–Mond mit Lasern auf Millimeter genau zu messen. Ergebnis: Der Mond entfernt sich um etwa <b>3,8 cm pro Jahr</b>, während sich die Erdrotation verlangsamt. Vor einer Milliarde Jahren dauerten die Tage etwa 19–20 Stunden, und in vielen Milliarden Jahren wird eine totale Sonnenfinsternis nicht mehr möglich sein, weil der Mond zu klein erscheinen wird, um die Sonnenscheibe zu bedecken. Man nimmt an, dass sich der Mond vor etwa 4,5 Milliarden Jahren aus dem Einschlag zwischen der Proto-Erde und einem marsgroßen Körper (<b>Theia</b>) gebildet hat.</p>`
    },
    {
      type: "conceptMap",
      title: "Mindmap der Bewegungen: Tippe auf die Knoten und finde heraus, warum",
      nodes: [
        { id: "rot", label: "Rotation", x: 18, y: 8, color: "#3b82f6", html: "Drehung der Erde um sich selbst in 24 h.", why: "Sie wurde von <b>Herakleides Pontikos</b> (4. Jh. v. Chr.) vorgeschlagen und von Kopernikus vertreten; <b>Foucault</b> bewies sie 1851. Sie erzeugt Tag und Nacht, die Corioliskraft und die Abplattung an den Polen." },
        { id: "riv", label: "Revolution", x: 82, y: 8, color: "#22c55e", html: "Umlauf um die Sonne in etwa 365,25 Tagen.", why: "Mit <b>Kopernikus</b> (1543) und Galilei verlor die Erde ihre Unbeweglichkeit. Die Bestätigung kam durch die <b>Sternparallaxe</b> (Bessel, 1838) und die Aberration des Lichts (Bradley, 1729)." },
        { id: "asse", label: "Geneigte Achse (23,4°)", x: 50, y: 32, color: "#f97316", html: "Die Achse steht nicht senkrecht zur Bahn.", why: "Nach der am besten gestützten Hypothese geht die Neigung auf den Einschlag zurück, der vor etwa 4,5 Milliarden Jahren den Mond bildete. Der Mond wirkt stabilisierend: Ohne ihn könnte der Winkel stark schwanken, mit drastischen Folgen für das Klima." },
        { id: "stag", label: "Jahreszeiten", x: 82, y: 40, color: "#ef4444", html: "Wechsel des Einfallswinkels der Strahlen und der Tageslänge.", why: "Eine weit verbreitete, aber falsche Überzeugung ist, dass sie von der Entfernung zur Sonne abhängen: Die Erde ist aber im Januar näher, und die Südhalbkugel hat an Weihnachten Sommer." },
        { id: "fusi", label: "Zeitzonen", x: 18, y: 44, color: "#eab308", html: "24 Zonen zu je 15°.", why: "Entstanden mit Eisenbahn und Telegrafie: 1884, Konferenz von Washington, mit dem Meridian von Greenwich als Ursprung." },
        { id: "luna", label: "Bewegungen des Mondes", x: 50, y: 62, color: "#a855f7", html: "Gebundene Rotation, Umlauf in 27,3 Tagen.", why: "Die gebundene Rotation geht auf die Gezeitenkräfte zurück, die die Erde in Milliarden von Jahren auf den Mond ausübte und seine Rotation so lange bremste, bis sie mit dem Umlauf übereinstimmte." },
        { id: "fasi", label: "Mondphasen", x: 18, y: 82, color: "#06b6d4", html: "Zyklus von 29,53 Tagen.", why: "Schon <b>Aristarch von Samos</b> (3. Jh. v. Chr.) leitete aus der Halbmondphase die relative Entfernung von Sonne und Mond ab, mit einer geometrisch richtigen Methode, aber ungenauen Messwerten." },
        { id: "ecl", label: "Finsternisse", x: 82, y: 82, color: "#14b8a6", html: "Ausrichtung Sonne–Erde–Mond.", why: "Die Babylonier entdeckten den <b>Saroszyklus</b> (etwa 18 Jahre und 11 Tage), nach dem sich Finsternisse fast gleich wiederholen, und nutzten ihn zur Vorhersage. Finsternisse gibt es nicht jeden Monat, weil die Mondbahn um 5,1° geneigt ist." }
      ],
      edges: [
        ["rot", "fusi", "führt zu"],
        ["riv", "stag", "mit geneigter Achse ergibt"],
        ["asse", "stag", "verursacht"],
        ["luna", "fasi", "führt zu"],
        ["luna", "ecl", "bei Ausrichtung ergibt"],
        ["rot", "luna", "dreht sich wie"],
        ["riv", "asse", "behält bei"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: der Mond",
      questions: [
        { type: "mc", q: "Warum sehen wir immer dieselbe Seite des Mondes?", options: ["Weil sich der Mond nicht dreht", "Weil Rotation und Revolution gleich lang dauern", "Weil die andere Seite immer im Schatten liegt"], answer: 1, explain: "Das ist die gebundene Rotation. Die andere Seite bekommt genauso viel Licht wie die erste." },
        { type: "mc", q: "In welcher Mondphase kann eine Sonnenfinsternis stattfinden?", options: ["Vollmond", "Neumond", "Erstes Viertel"], answer: 1, explain: "Der Mond muss zwischen Erde und Sonne stehen und zeigt uns daher die unbeleuchtete Seite." },
        { type: "num", q: "In Rom ist es 12:00 Uhr (UTC+1). Wie viel Uhr ist es in London (UTC+0), in Stunden?", answer: 11, unit: "h", explain: "London liegt im Westen: Die Uhrzeit geht um 1 Stunde zurück." }
      ]
    }
  ],
  glossary: [
    { t: "Rotation", d: "Bewegung der Erde um ihre eigene Achse, in 24 Stunden." },
    { t: "Revolution", d: "Bewegung der Erde um die Sonne, in etwa 365,25 Tagen." },
    { t: "Ekliptik", d: "Ebene der Erdbahn um die Sonne." },
    { t: "Sonnenwende", d: "Zeitpunkt, an dem die Sonne ihre größte nördliche oder südliche Deklination erreicht: längster oder kürzester Tag." },
    { t: "Tagundnachtgleiche", d: "Zeitpunkt, an dem Tag und Nacht gleich lang sind." },
    { t: "Zeitzone", d: "Jeder der 24 Streifen von 15° Länge mit derselben Uhrzeit." },
    { t: "Synodischer Monat", d: "Zeitraum zwischen zwei gleichen Mondphasen: 29,53 Tage." },
    { t: "Gebundene Rotation", d: "Zustand, in dem ein Körper für eine Umdrehung ebenso lang braucht wie für seinen Umlauf." },
    { t: "Sonnenfinsternis", d: "Der Mond bedeckt von der Erde aus gesehen die Sonne (Neumond)." },
    { t: "Mondfinsternis", d: "Der Mond tritt in den Schatten der Erde (Vollmond)." },
    { t: "Gezeiten", d: "Schwankungen des Meeresspiegels, verursacht durch die Anziehung von Mond und Sonne." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie lange dauert der mittlere Sonnentag?", options: ["23 h 56 min", "24 h", "27 Tage"], answer: 1, explain: "Der mittlere Sonnentag dauert 24 Stunden (der Sterntag 23 h 56 min)." },
      { type: "tf", q: "Die Jahreszeiten entstehen durch die Entfernung der Erde von der Sonne.", answer: false, explain: "Sie hängen von der Neigung der Erdachse ab." },
      { type: "mc", q: "Welches Ereignis findet am 21. Juni auf der Nordhalbkugel statt?", options: ["Frühlings-Tagundnachtgleiche", "Sommersonnenwende", "Herbst-Tagundnachtgleiche"], answer: 1, explain: "Der längste Tag des Jahres." },
      { type: "num", q: "Wie hoch steht die Sonne mittags zur Sommersonnenwende auf 45° N maximal? (Deklination 23,4°)", answer: 68.4, tol: 0.2, unit: "°", explain: "90 − 45 + 23,4 = 68,4°." },
      { type: "num", q: "In wie vielen Minuten dreht sich die Erde um 1° Länge?", answer: 4, unit: "min", explain: "360° in 24 Stunden: 1° alle 4 Minuten." },
      { type: "mc", q: "Warum zeigt uns der Mond immer dieselbe Seite?", options: ["Gebundene Rotation", "Der Mond steht still", "Die Gezeiten halten ihn an"], answer: 0, explain: "Rotation und Revolution dauern beide etwa 27,3 Tage." },
      { type: "tf", q: "Eine Mondfinsternis findet bei Vollmond statt.", answer: true, explain: "Die Erde steht zwischen Sonne und Mond, und der Mond tritt in den Schattenkegel ein." },
      { type: "mc", q: "Warum gibt es nicht bei jedem Neumond eine Finsternis?", options: ["Die Mondbahn ist um etwa 5° gegen die Ekliptik geneigt", "Der Mond ist zu klein", "Die Erde dreht sich"], answer: 0, explain: "Meist zieht der Mond oberhalb oder unterhalb der Linie Sonne–Erde vorbei." },
      { type: "order", q: "Bringe die Mondphasen nach dem Neumond in die richtige Reihenfolge.", items: ["Zunehmender Mond", "Erstes Viertel", "Vollmond", "Letztes Viertel"], explain: "Der gesamte Zyklus dauert 29,5 Tage." },
      { type: "text", q: "Welcher französische Physiker bewies 1851 mit einem Pendel die Erdrotation?", answer: ["Foucault", "Léon Foucault", "Leon Foucault"], explain: "Léon Foucault, im Panthéon in Paris." }
    ]
  }
});
