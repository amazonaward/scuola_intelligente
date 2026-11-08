TOPIC('de', {
  id: "m1-sci-metodo-misura",
  title: "Die wissenschaftliche Methode und das Messen",
  intro: "Woher wissen Wissenschaftler, dass etwas stimmt? Es reicht nicht, es zu glauben: Man muss <b>beobachten</b>, <b>Hypothesen</b> aufstellen, <b>experimentieren</b> und <b>messen</b>. In dieser Lektion lernst du die <b>wissenschaftliche Methode</b> von Galileo, die physikalischen <b>Größen</b> und die <b>Maßeinheiten</b> kennen, die Wissenschaftler auf der ganzen Welt benutzen.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Die wissenschaftliche (oder experimentelle) Methode",
      html: `<p>Im 17. Jahrhundert schlug <b>Galileo Galilei</b> (1564–1642) eine neue Art vor, die Natur zu erforschen: sich nicht nur auf alte Autoritäten zu verlassen, sondern <b>die Natur mit Experimenten zu befragen</b> und sie mit der <b>Mathematik</b> zu beschreiben. Er nannte es „sensate esperienze e necessarie dimostrazioni“ (sinnliche Erfahrungen und notwendige Beweise).</p>
<p>Die wissenschaftliche Methode folgt einigen <b>Schritten</b>:</p>
<ol>
<li><b>Beobachtung</b> eines Phänomens und Formulierung einer <b>Frage</b> („Warum schwimmt Eis?“).</li>
<li><b>Hypothese</b>: eine mögliche Antwort, die sich überprüfen lässt.</li>
<li><b>Experiment</b>: Man stellt das Phänomen unter kontrollierten Bedingungen nach, ändert immer nur <b>eine Variable</b> und <b>misst</b>.</li>
<li><b>Datenanalyse</b>: Man sammelt die Messwerte in Tabellen und Diagrammen.</li>
<li><b>Schlussfolgerung</b>: Die Hypothese wird <b>bestätigt</b> oder <b>widerlegt</b>. Wird sie widerlegt, stellt man eine neue auf und beginnt von vorn.</li>
<li>Wird die Hypothese oft bestätigt, auch von anderen Wissenschaftlern, wird sie zu einem <b>Gesetz</b> oder Teil einer <b>Theorie</b>.</li>
</ol>
<p>Ein Experiment ist nur gültig, wenn es <b>wiederholbar</b> ist: Jeder, der es unter denselben Bedingungen wiederholt, muss dasselbe Ergebnis erhalten.</p>`
    },
    {
      type: "svg",
      title: "Der Kreislauf der wissenschaftlichen Methode",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdfa"/>
<rect x="215" y="14" width="170" height="46" rx="14" fill="#38bdf8"/>
<text x="300" y="44" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">1 Beobachtung</text>
<rect x="420" y="90" width="160" height="46" rx="14" fill="#a78bfa"/>
<text x="500" y="120" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">2 Hypothese</text>
<rect x="400" y="200" width="180" height="46" rx="14" fill="#f97316"/>
<text x="490" y="230" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">3 Experiment</text>
<rect x="210" y="262" width="180" height="46" rx="14" fill="#22c55e"/>
<text x="300" y="292" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">4 Datenanalyse</text>
<rect x="20" y="200" width="170" height="46" rx="14" fill="#ef4444"/>
<text x="105" y="230" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">5 Schluss</text>
<rect x="20" y="90" width="170" height="46" rx="14" fill="#0f766e"/>
<text x="105" y="120" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">Gesetz / Theorie</text>
<path d="M385 40 Q470 45 495 88" stroke="#334155" stroke-width="3" fill="none"/>
<path d="M500 136 L495 198" stroke="#334155" stroke-width="3" fill="none"/>
<path d="M440 246 Q420 280 392 284" stroke="#334155" stroke-width="3" fill="none"/>
<path d="M210 284 Q130 282 110 248" stroke="#334155" stroke-width="3" fill="none"/>
<path d="M105 200 L105 138" stroke="#16a34a" stroke-width="3" fill="none"/>
<path d="M190 214 Q300 170 420 120" stroke="#dc2626" stroke-width="3" fill="none" stroke-dasharray="8 6"/>
<text x="300" y="160" font-size="15" text-anchor="middle" fill="#dc2626">widerlegt: neue Hypothese</text>
<text x="112" y="170" font-size="15" fill="#16a34a">bestätigt</text>
</svg>`,
      caption: "Die Methode ist ein Kreislauf: Wenn die Hypothese nicht funktioniert, geht man zurück und probiert eine andere aus."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Galileos Pendel",
      html: `<p>Man erzählt, dass Galileo im Dom von Pisa eine schwingende Lampe beobachtete und bemerkte, dass jede Schwingung gleich lange zu dauern schien, auch wenn sie kleiner wurde.</p>
<ul>
<li><b>Frage</b>: Wovon hängt die Zeit einer Schwingung (die <b>Schwingungsdauer</b>) ab?</li>
<li><b>Hypothese</b>: von der Länge des Fadens, nicht vom Gewicht.</li>
<li><b>Experiment</b>: Baue ein Pendel mit einem Faden und einer Unterlegscheibe. Ändere <b>nur die Länge</b> (25 cm, 50 cm, 100 cm) und miss mit der Stoppuhr die Zeit für <b>10 Schwingungen</b>, dann teile durch 10 (so wird der Fehler kleiner!). Dann halte die Länge fest und ändere nur das Gewicht.</li>
<li><b>Ergebnis</b>: Bei 25 cm ist die Schwingungsdauer etwa 1 s, bei 100 cm etwa 2 s. Das Gewicht ändert dagegen nichts.</li>
<li><b>Schlussfolgerung</b>: Die Schwingungsdauer hängt von der Länge ab. Vervierfacht man die Länge, verdoppelt sich die Schwingungsdauer.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Methode",
      questions: [
        { type: "mc", q: "Wer gilt als Vater der experimentellen Methode?", options: ["Aristoteles", "Galileo Galilei", "Leonardo da Vinci", "Isaac Newton"], answer: 1, explain: "Galileo Galilei verband im 17. Jahrhundert Experimente und Mathematik." },
        { type: "tf", q: "In einem guten Experiment ändert man am besten viele Variablen gleichzeitig.", answer: false, explain: "Man ändert immer nur eine Variable, sonst weiß man nicht, welche die Wirkung verursacht hat." },
        { type: "order", q: "Bringe die Schritte der wissenschaftlichen Methode in die richtige Reihenfolge.", items: ["Beobachtung", "Hypothese", "Experiment", "Datenanalyse", "Schlussfolgerung"], explain: "Man beobachtet, stellt eine Hypothese auf, experimentiert, analysiert die Daten und zieht den Schluss." }
      ]
    },
    {
      type: "text",
      title: "2. Größen und Messungen",
      html: `<p>Eine <b>Größe</b> ist eine Eigenschaft, die man <b>messen</b> kann: Länge, Masse, Zeit, Temperatur, Volumen … Schönheit oder Sympathie sind keine Größen, weil man sie nicht mit einem Gerät misst.</p>
<p><b>Messen</b> bedeutet, eine Größe mit einer anderen Größe derselben Art, die als <b>Maßeinheit</b> gewählt wurde, zu <b>vergleichen</b> und zu zählen, wie oft die Einheit in der Größe enthalten ist.</p>
<p>Das Ergebnis ist immer eine <b>Zahl</b> mit einer <b>Einheit</b>: „3“ allein bedeutet nichts, „3 m“ schon!</p>
<p>Um Verwirrung zu vermeiden, benutzt seit <b>1960</b> fast die ganze Welt das <b>Internationale Einheitensystem (SI)</b>, das <b>7 Basisgrößen</b> hat:</p>
<table>
<tr><th>Größe</th><th>Einheit</th><th>Symbol</th></tr>
<tr><td>Länge</td><td>Meter</td><td>m</td></tr>
<tr><td>Masse</td><td>Kilogramm</td><td>kg</td></tr>
<tr><td>Zeit</td><td>Sekunde</td><td>s</td></tr>
<tr><td>Temperatur</td><td>Kelvin</td><td>K</td></tr>
<tr><td>Elektrische Stromstärke</td><td>Ampere</td><td>A</td></tr>
<tr><td>Stoffmenge</td><td>Mol</td><td>mol</td></tr>
<tr><td>Lichtstärke</td><td>Candela</td><td>cd</td></tr>
</table>
<p>Alle anderen sind <b>abgeleitete Größen</b>, die man durch Kombination der Basisgrößen erhält: Fläche (m²), Volumen (m³), Geschwindigkeit (m/s), Dichte (kg/m³).</p>`
    },
    {
      type: "text",
      title: "3. Vielfache und Teile",
      html: `<p>Um sehr große oder sehr kleine Dinge zu messen, benutzt man <b>Vorsilben</b>, die die Einheit mit Zehnerpotenzen multiplizieren:</p>
<table>
<tr><th>Vorsilbe</th><th>Symbol</th><th>Wert</th><th>Beispiel</th></tr>
<tr><td>Giga</td><td>G</td><td>1 000 000 000</td><td>1 GB Speicher</td></tr>
<tr><td>Mega</td><td>M</td><td>1 000 000</td><td>1 MW Kraftwerk</td></tr>
<tr><td>Kilo</td><td>k</td><td>1000</td><td>1 km = 1000 m</td></tr>
<tr><td>Hekto</td><td>h</td><td>100</td><td>1 hg = 100 g</td></tr>
<tr><td>Deka</td><td>da</td><td>10</td><td>1 dam = 10 m</td></tr>
<tr><td>Dezi</td><td>d</td><td>0,1</td><td>1 dm = 0,1 m</td></tr>
<tr><td>Zenti</td><td>c</td><td>0,01</td><td>1 cm = 0,01 m</td></tr>
<tr><td>Milli</td><td>m</td><td>0,001</td><td>1 mm = 0,001 m</td></tr>
<tr><td>Mikro</td><td>µ</td><td>0,000 001</td><td>eine Zelle ≈ 20 µm</td></tr>
<tr><td>Nano</td><td>n</td><td>0,000 000 001</td><td>ein Virus ≈ 100 nm</td></tr>
</table>
<p><b>Achtung</b>: Bei Flächen ist jeder Schritt ×100 (1 m² = 100 dm²), bei Volumen ×1000 (1 m³ = 1000 dm³).</p>
<p>Merke dir den Zusammenhang zwischen Volumen und Fassungsvermögen: <b>1 dm³ = 1 Liter</b> und <b>1 cm³ = 1 mL</b>.</p>`
    },
    {
      type: "3d",
      title: "1 Liter = 1 dm³ = 1000 cm³",
      scene: "blocks",
      options: { mode: "volume", a: 10, b: 10, c: 10 },
      caption: "Ein Würfel mit 10 cm Kantenlänge (1 dm³) enthält 10 × 10 × 10 = 1000 Würfelchen zu 1 cm³ und fasst genau 1 Liter Wasser. Probiere die Maße mit den Reglern zu ändern."
    },
    {
      type: "text",
      title: "4. Masse, Gewicht, Volumen, Dichte, Temperatur",
      html: `<ul>
<li><b>Masse</b>: Menge an Materie eines Körpers. Sie wird in kg mit der <b>Balkenwaage</b> gemessen. Sie ändert sich nicht, wenn du zum Mond fliegst.</li>
<li><b>Gewicht</b>: die Kraft, mit der die Erde den Körper anzieht. Es ist eine Kraft und wird in <b>Newton</b> (N) mit dem <b>Kraftmesser</b> gemessen. Auf dem Mond wiegst du etwa <b>6-mal weniger</b>, aber deine Masse ist dieselbe! Im Alltag sagen wir „ich wiege 40 kg“, aber eigentlich ist das die Masse.</li>
<li><b>Volumen</b>: der eingenommene Raum. Bei Flüssigkeiten benutzt man den <b>Messzylinder</b>; bei einem unregelmäßigen Festkörper misst man das Wasser, das er beim Eintauchen verdrängt.</li>
<li><b>Dichte</b>: Masse geteilt durch Volumen, <b>ρ = m / V</b>. Wasser hat die Dichte 1 g/cm³; Eisen etwa 7,9 g/cm³; Fichtenholz etwa 0,5 g/cm³. Ein Gegenstand, der weniger dicht ist als Wasser, <b>schwimmt</b>.</li>
<li><b>Temperatur</b>: gibt an, wie warm oder kalt ein Körper ist; sie wird mit dem <b>Thermometer</b> in Grad Celsius (°C) oder in Kelvin (K) gemessen: K = °C + 273,15.</li>
</ul>
<p>Jedes Messgerät hat einen <b>Messbereich</b> (den Höchstwert, den es messen kann) und eine <b>Empfindlichkeit</b> (den kleinsten Wert, den es noch erfassen kann). Ein 30-cm-Lineal mit Millimeterstrichen hat den Messbereich 30 cm und die Empfindlichkeit 1 mm.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Die Dichte eines Steins",
      html: `<ol>
<li>Lege den Stein auf die Waage: <b>m = 54 g</b>.</li>
<li>Gieße 100 mL Wasser in einen Messzylinder.</li>
<li>Tauche den Stein an einem Faden ein: Der Wasserspiegel steigt auf <b>120 mL</b>.</li>
<li>Volumen des Steins: 120 − 100 = <b>20 mL = 20 cm³</b> (Methode des Archimedes).</li>
<li>Dichte: 54 g : 20 cm³ = <b>2,7 g/cm³</b>. Das ist genau die typische Dichte vieler Gesteine, wie Granit.</li>
</ol>
<p><b>Messfehler.</b> Jede Messung hat eine <b>Unsicherheit</b>. Wenn du dreimal misst und 54,1 g, 53,9 g und 54,0 g erhältst, nimmst du den <b>Mittelwert</b> (54,0 g). <b>Zufällige Fehler</b> werden kleiner, wenn man die Messungen wiederholt; <b>systematische Fehler</b> (nicht geeichte Waage, Auge nicht auf Höhe des Strichs: <i>Parallaxenfehler</i>) behebt man, indem man die Geräte überprüft.</p>`
    },
    {
      type: "widget",
      title: "Ordne die Größe dem Messgerät zu",
      widget: "match",
      options: {
        pairs: [
          ["Länge", "📏 Meterstab / Lineal / Messschieber"],
          ["Masse", "⚖️ Waage"],
          ["Zeit", "⏱️ Stoppuhr"],
          ["Temperatur", "🌡️ Thermometer"],
          ["Volumen einer Flüssigkeit", "🧪 Messzylinder"],
          ["Gewicht (Kraft)", "🔩 Kraftmesser"]
        ]
      }
    },
    {
      type: "widget",
      title: "Basisgröße oder abgeleitete Größe?",
      widget: "classify",
      options: {
        groups: ["SI-Basisgröße", "Abgeleitete Größe"],
        items: [["Länge (m)", 0], ["Masse (kg)", 0], ["Zeit (s)", 0], ["Temperatur (K)", 0], ["Fläche (m²)", 1], ["Volumen (m³)", 1], ["Geschwindigkeit (m/s)", 1], ["Dichte (kg/m³)", 1], ["elektrische Stromstärke (A)", 0]]
      }
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … das Meter stammt von der Erde?",
      html: `<p>Im Jahr <b>1791</b>, während der Französischen Revolution, wurde das Meter als <b>zehnmillionster Teil</b> der Entfernung zwischen dem Nordpol und dem Äquator festgelegt, gemessen entlang des Pariser Meridians. Zwei Astronomen, Delambre und Méchain, brauchten 7 Jahre, um die Strecke zwischen Dünkirchen und Barcelona zu vermessen.</p>
<p>Heute ist das Meter über die <b>Lichtgeschwindigkeit</b> definiert: Es ist die Strecke, die das Licht im Vakuum in 1/299 792 458 Sekunde zurücklegt (seit 1983). Und seit <b>2019</b> hängt auch das Kilogramm nicht mehr von dem Platin-Iridium-Zylinder ab, der in Sèvres bei Paris aufbewahrt wird, sondern von einer Naturkonstante, der <b>Planck-Konstante</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … ein Einheitenfehler hat 125 Millionen Dollar gekostet?",
      html: `<p>Im Jahr <b>1999</b> ging die NASA-Sonde <b>Mars Climate Orbiter</b> bei der Ankunft am Mars verloren. Der Grund? Eine Gruppe von Ingenieuren hatte Daten in <b>angloamerikanischen Einheiten</b> (Pfund-Kraft mal Sekunde) geliefert, während die NASA-Software Einheiten des <b>Internationalen Einheitensystems</b> (Newton mal Sekunde) erwartete. Die Sonde flog zu nah am Planeten vorbei und zerstörte sich in der Atmosphäre.</p>
<p>Lehre daraus: Schreibe <b>immer</b> die Maßeinheit neben die Zahl!</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das Messen zu verstehen",
      intro: "Die Maßeinheiten sind nicht überall dieselben, und man kann sie auf viele Arten verstehen: Such dir deinen Weg aus.",
      tabs: [
        {
          label: "🇺🇸 Das imperiale System",
          html: `<p>In den <b>Vereinigten Staaten</b> (und teilweise im Vereinigten Königreich) benutzt man noch alte Einheiten, die auf dem menschlichen Körper und nicht-dezimalen Vielfachen beruhen:</p>
<table>
<tr><th>Einheit</th><th>Wert im SI</th></tr>
<tr><td>1 Zoll (inch)</td><td>2,54 cm (ein Daumenglied)</td></tr>
<tr><td>1 Fuß (foot) = 12 Zoll</td><td>30,48 cm</td></tr>
<tr><td>1 Yard = 3 Fuß</td><td>91,44 cm</td></tr>
<tr><td>1 Meile = 1760 Yards</td><td>1,609 km</td></tr>
<tr><td>1 Pfund (pound)</td><td>0,4536 kg</td></tr>
<tr><td>1 US-Gallone</td><td>3,785 L</td></tr>
</table>
<p>Und die Temperatur in <b>Grad Fahrenheit</b>: Wasser gefriert bei 32 °F und kocht bei 212 °F. Der Bildschirm eines „50-Zoll“-Fernsehers hat eine Diagonale von 50 × 2,54 = 127 cm. Siehst du, warum das Dezimalsystem bequemer ist?</p>`
        },
        {
          label: "🪜 Die Treppe der Vorsilben",
          html: `<p>Stell dir die Vorsilben wie die <b>Stufen einer Treppe</b> vor. Jede Stufe ist ×10 wert. Um von km zu m zu kommen, gehst du 3 Stufen hinunter: Du multiplizierst mit 10 × 10 × 10 = 1000. Um von cm zu m hinaufzusteigen, gehst du 2 Stufen hinauf: Du teilst durch 100.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<rect x="20" y="40" width="80" height="250" fill="#f97316"/>
<rect x="100" y="70" width="80" height="220" fill="#fb923c"/>
<rect x="180" y="100" width="80" height="190" fill="#fdba74"/>
<rect x="260" y="130" width="80" height="160" fill="#22c55e"/>
<rect x="340" y="160" width="80" height="130" fill="#7dd3fc"/>
<rect x="420" y="190" width="80" height="100" fill="#38bdf8"/>
<rect x="500" y="220" width="80" height="70" fill="#0ea5e9"/>
<text x="60" y="30" font-size="20" text-anchor="middle" font-weight="bold">km</text>
<text x="140" y="60" font-size="20" text-anchor="middle" font-weight="bold">hm</text>
<text x="220" y="90" font-size="20" text-anchor="middle" font-weight="bold">dam</text>
<text x="300" y="120" font-size="22" text-anchor="middle" font-weight="bold" fill="#166534">m</text>
<text x="380" y="150" font-size="20" text-anchor="middle" font-weight="bold">dm</text>
<text x="460" y="180" font-size="20" text-anchor="middle" font-weight="bold">cm</text>
<text x="540" y="210" font-size="20" text-anchor="middle" font-weight="bold">mm</text>
<text x="160" y="260" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">abwärts: × 10</text>
<text x="460" y="270" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">aufwärts: : 10</text>
</svg>`
        },
        {
          label: "🦶 Die Körpermaße",
          html: `<p>Vor dem Meter hatte jede Stadt ihre eigenen Maße, oft vom Körper abgeleitet: der <b>Fuß</b>, die <b>Handbreite</b>, die <b>Elle</b>, der <b>Schritt</b>. In Florenz war die Elle etwa 58 cm lang, in Mailand etwa 59 cm, in Bologna 64 cm: Ein Kaufmann musste ständig umrechnen!</p>
<p>Probiere es aus: Miss das Pult mit deinen <b>Handspannen</b> und lass es einen Mitschüler messen. Erhaltet ihr verschiedene Zahlen? Darum braucht man eine Einheit, die <b>für alle gleich</b> ist: Das ist die Idee, die zum Meter geführt hat, „für alle Völker, für alle Zeiten“, wie die Franzosen von 1791 sagten.</p>`
        },
        {
          label: "🧊 Das Volumen in 3D",
          html: `<p>Das Volumen „zählt“ man in Würfelchen. Ein Quader 4 × 3 × 2 enthält 24 Würfelchen: Wenn jedes Würfelchen 1 cm³ ist, beträgt das Volumen 24 cm³ = 24 mL. Ändere die Maße und sieh, wie es wächst.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 2 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte von Methode und Messen: Tippe und entdecke das Warum",
      nodes: [
        { id: "galileo", label: "Galileo", x: 50, y: 6, color: "#a855f7", html: "Galileo Galilei (1564–1642), Wissenschaftler aus Pisa.", why: "Beim Studium des Pendels, des freien Falls und des Himmels mit dem Fernrohr (1609) erkannte er, dass die Natur „in der Sprache der Mathematik geschrieben“ ist und dass man Ideen mit Experimenten prüfen muss, statt sie nur zu akzeptieren, weil Aristoteles sie gesagt hatte." },
        { id: "metodo", label: "Wissenschaftliche Methode", x: 50, y: 26, color: "#0f766e", html: "Beobachtung → Hypothese → Experiment → Analyse → Schlussfolgerung.", why: "Sie hilft, zu unterscheiden, was wahr ist und was nur wahr scheint. Sie funktioniert, weil sie von allen überprüfbar ist: Ein Ergebnis gilt nur, wenn andere es wiederholen können." },
        { id: "ipotesi", label: "Hypothese und Variablen", x: 16, y: 40, color: "#8b5cf6", html: "Eine Idee, die geprüft wird; man ändert immer nur eine Variable.", why: "Würdest du zwei Dinge zugleich ändern, wüsstest du nicht, welches die Wirkung verursacht hat. Darum benutzt man auch Kontrollexperimente." },
        { id: "misura", label: "Messung", x: 84, y: 40, color: "#f97316", html: "Vergleich einer Größe mit einer Maßeinheit.", why: "Ohne Zahlen kann man die Ergebnisse verschiedener Wissenschaftler nicht vergleichen. Lord Kelvin sagte: Wenn du messen kannst, wovon du sprichst, weißt du etwas darüber." },
        { id: "si", label: "Internationales Einheitensystem", x: 70, y: 62, color: "#2563eb", html: "7 Basiseinheiten: m, kg, s, K, A, mol, cd.", why: "Entstanden aus dem metrischen Dezimalsystem der Französischen Revolution (1791–1799) und 1960 eingeführt. Seit 2019 sind alle Einheiten über Naturkonstanten definiert, wie die Lichtgeschwindigkeit." },
        { id: "prefissi", label: "Vielfache und Teile", x: 92, y: 80, color: "#0ea5e9", html: "Vorsilben wie Kilo, Zenti, Milli: Zehnerpotenzen.", why: "Das System ist dezimal wie unsere Art zu zählen, daher rechnet man um, indem man das Komma verschiebt." },
        { id: "derivate", label: "Abgeleitete Größen", x: 50, y: 82, color: "#16a34a", html: "Fläche, Volumen, Geschwindigkeit, Dichte …", why: "Man erhält sie durch Kombination der Basisgrößen: Die Dichte ist Masse geteilt durch Volumen, die Geschwindigkeit ist Länge geteilt durch Zeit." },
        { id: "errori", label: "Fehler und Unsicherheit", x: 16, y: 72, color: "#ef4444", html: "Jede Messung hat eine Unsicherheit; man wiederholt und bildet den Mittelwert.", why: "Kein Gerät ist perfekt und kein Auge ist perfekt. Wiederholte Messungen verringern zufällige Fehler; das Eichen der Geräte verringert systematische." },
        { id: "legge", label: "Naturgesetz", x: 22, y: 96, color: "#14b8a6", html: "Ein Zusammenhang, der durch viele Experimente bestätigt wurde.", why: "Ein Gesetz kann immer durch neue, genauere Messungen verbessert werden: Wissenschaft ist keine Liste ewiger Wahrheiten, sondern die beste Erklärung, die wir bisher haben." }
      ],
      edges: [
        ["galileo", "metodo", "schlägt vor"],
        ["metodo", "ipotesi", "beginnt mit"],
        ["metodo", "misura", "beruht auf der"],
        ["misura", "si", "benutzt die Einheiten des"],
        ["si", "prefissi", "mit den"],
        ["si", "derivate", "erzeugt die"],
        ["misura", "errori", "hat immer"],
        ["ipotesi", "legge", "wenn bestätigt"],
        ["errori", "legge", "machen vorläufig"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Einheiten und Messgeräte",
      questions: [
        { type: "num", q: "Wie viele mL sind 1,5 L?", answer: 1500, unit: "mL", explain: "1 L = 1000 mL, also 1,5 L = 1500 mL." },
        { type: "mc", q: "Was ist die Maßeinheit der Masse im SI?", options: ["Gramm", "Newton", "Kilogramm", "Liter"], answer: 2, explain: "Das Kilogramm (kg) ist die Basiseinheit der Masse." },
        { type: "tf", q: "Auf dem Mond wird die Masse eines Astronauten 6-mal kleiner.", answer: false, explain: "Es ändert sich das Gewicht (die Gravitationskraft), nicht die Masse." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Wissenschaftliche Methode: <b>Beobachtung, Hypothese, Experiment, Analyse, Schlussfolgerung</b>; <b>wiederholbare</b> Ergebnisse.</li>
<li>Messen = mit einer Einheit <b>vergleichen</b>. Zahl + Einheit!</li>
<li>SI: <b>Meter, Kilogramm, Sekunde, Kelvin, Ampere, Mol, Candela</b>.</li>
<li>1 dm³ = 1 L; 1 cm³ = 1 mL. Dichte ρ = m / V.</li>
<li>Masse (kg, Waage) ≠ Gewicht (N, Kraftmesser).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Hypothese", d: "Mögliche Erklärung eines Phänomens, die mit Experimenten überprüft wird." },
    { t: "Variable", d: "Faktor, der sich in einem Experiment ändern kann." },
    { t: "Größe", d: "Eigenschaft eines Körpers, die man messen kann." },
    { t: "Maßeinheit", d: "Normgröße, mit der man das Gemessene vergleicht." },
    { t: "Internationales Einheitensystem (SI)", d: "Einheitensystem, das seit 1960 fast auf der ganzen Welt benutzt wird." },
    { t: "Masse", d: "Menge an Materie; wird in kg mit der Waage gemessen." },
    { t: "Gewicht", d: "Kraft, mit der ein Körper von der Erde angezogen wird; wird in Newton gemessen." },
    { t: "Dichte", d: "Verhältnis von Masse und Volumen eines Körpers." },
    { t: "Messbereich", d: "Höchster Wert, den ein Messgerät messen kann." },
    { t: "Empfindlichkeit", d: "Kleinster Wert, den ein Messgerät noch messen kann." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Bringe die Schritte der experimentellen Methode in die richtige Reihenfolge.", items: ["Ich beobachte ein Phänomen und stelle mir eine Frage", "Ich stelle eine Hypothese auf", "Ich plane und führe ein Experiment durch", "Ich analysiere die Daten", "Ich ziehe die Schlussfolgerungen"], explain: "Das ist die Abfolge der wissenschaftlichen Methode." },
      { type: "mc", q: "Welche dieser Eigenschaften ist KEINE physikalische Größe?", options: ["Die Temperatur", "Die Sympathie", "Die Zeit", "Das Volumen"], answer: 1, explain: "Sympathie kann man nicht mit einem Gerät und einer Einheit messen." },
      { type: "text", q: "Was ist die Maßeinheit der Zeit im Internationalen Einheitensystem?", answer: ["Sekunde", "die Sekunde", "s"], explain: "Die Sekunde (s)." },
      { type: "num", q: "Wie viele Zentimeter sind 3,2 m?", answer: 320, unit: "cm", explain: "1 m = 100 cm, also 3,2 × 100 = 320 cm." },
      { type: "num", q: "Ein Würfel hat eine Kantenlänge von 1 dm. Wie viele Liter Wasser fasst er?", answer: 1, unit: "L", explain: "1 dm³ = 1 L." },
      { type: "num", q: "Ein Gegenstand hat die Masse 80 g und das Volumen 40 cm³. Wie groß ist seine Dichte in g/cm³?", answer: 2, unit: "g/cm³", explain: "ρ = m / V = 80 : 40 = 2 g/cm³." },
      { type: "tf", q: "Ein Gegenstand mit der Dichte 0,6 g/cm³ schwimmt im Wasser.", answer: true, explain: "Er ist weniger dicht als Wasser (1 g/cm³), also schwimmt er." },
      { type: "mc", q: "Mit welchem Gerät misst man das Gewicht (die Kraft)?", options: ["Balkenwaage", "Kraftmesser", "Thermometer", "Messzylinder"], answer: 1, explain: "Das Gewicht ist eine Kraft: Man misst es mit dem Kraftmesser, in Newton." },
      { type: "mc", q: "Ein Lineal hat alle Millimeter einen Strich. Wie groß ist seine Empfindlichkeit?", options: ["1 cm", "1 mm", "30 cm", "0,1 mm"], answer: 1, explain: "Die Empfindlichkeit ist die kleinste Größe, die das Gerät noch erfasst: 1 mm." },
      { type: "num", q: "Der Wasserspiegel in einem Messzylinder steigt von 50 mL auf 68 mL, als ein Stein eingetaucht wird. Wie groß ist das Volumen des Steins in cm³?", answer: 18, unit: "cm³", explain: "68 − 50 = 18 mL = 18 cm³." },
      { type: "mc", q: "Warum wiederholt man eine Messung mehrmals?", options: ["Damit sie länger dauert", "Um zufällige Fehler durch Mittelwertbildung zu verkleinern", "Weil die erste immer falsch ist"], answer: 1, explain: "Der Mittelwert mehrerer Messungen verringert die Wirkung zufälliger Fehler." }
    ],
    gen: [["lengthConv", 3]]
  }
});
