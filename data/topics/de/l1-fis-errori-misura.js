TOPIC('de', {
  id: "l1-fis-errori-misura",
  title: "Messen und Messfehler",
  intro: "Keine Messung ist <b>exakt</b>. Wenn du dreimal dasselbe Lehrerpult mit demselben Maßband misst, bekommst du wahrscheinlich drei leicht verschiedene Ergebnisse. Das ist kein Versagen: Es liegt im Wesen der Messung. Die experimentelle Physik sucht nicht den „wahren Wert“, sondern ein <b>Ergebnis mit seiner Unsicherheit</b>, ehrlich aufgeschrieben. In dieser Lektion lernen wir die <b>Eigenschaften von Messgeräten</b> kennen, unterscheiden die <b>Fehler</b>, berechnen <b>absoluten und relativen Fehler</b> und schreiben die <b>signifikanten Stellen</b> richtig.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Messgeräte und ihre Eigenschaften",
      html: `<p>Ein Messgerät beschreibt man durch einige <b>Eigenschaften</b>:</p>
<ul>
<li><b>Messbereich</b>: der größte Wert, den das Gerät messen kann. Eine Küchenwaage mit einem Messbereich von 5 kg kann keinen Menschen wiegen.</li>
<li><b>Empfindlichkeit</b>: die <b>kleinste Änderung</b> der Größe, die das Gerät noch anzeigen kann. Für ein Lineal mit Millimetereinteilung ist sie 1 mm; für eine Schieblehre mit Nonius 0,05 mm; für eine digitale Stoppuhr 0,01 s.</li>
<li><b>Ansprechverhalten</b>: wie schnell das Gerät auf eine Änderung reagiert (ein Quecksilberthermometer reagiert langsamer als ein digitales).</li>
<li><b>Präzision</b> (Wiederholgenauigkeit): die Fähigkeit, bei Wiederholung der Messung unter gleichen Bedingungen <b>Werte zu liefern, die nah beieinander liegen</b>.</li>
<li><b>Richtigkeit</b> (Genauigkeit): die Fähigkeit, Werte zu liefern, die <b>nah am wahren Wert</b> liegen.</li>
</ul>
<p>Geräte können <b>analog</b> sein (mit einer Skala und einem Zeiger: Lineal, Quecksilberthermometer) oder <b>digital</b> (mit Zahlenanzeige: Stoppuhr, elektronische Waage).</p>`
    },
    {
      type: "svg",
      title: "Präzision und Richtigkeit: die Zielscheibe",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<g transform="translate(80,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-5" cy="4" r="5"/><circle cx="10" cy="-6" r="5"/><circle cx="3" cy="9" r="5"/><circle cx="-9" cy="-8" r="5"/><circle cx="8" cy="5" r="5"/></g>
</g>
<g transform="translate(240,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="38" cy="-30" r="5"/><circle cx="46" cy="-24" r="5"/><circle cx="40" cy="-20" r="5"/><circle cx="44" cy="-34" r="5"/><circle cx="35" cy="-26" r="5"/></g>
</g>
<g transform="translate(400,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-28" cy="-20" r="5"/><circle cx="30" cy="14" r="5"/><circle cx="6" cy="40" r="5"/><circle cx="-34" cy="30" r="5"/><circle cx="20" cy="-36" r="5"/></g>
</g>
<g transform="translate(560,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-6" cy="-3" r="5"/><circle cx="4" cy="8" r="5"/><circle cx="-12" cy="10" r="5"/><circle cx="14" cy="-8" r="5"/><circle cx="0" cy="-14" r="5"/></g>
</g>
<g font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="80" y="212">Präzise und</text><text x="80" y="230">richtig</text>
<text x="240" y="212">Präzise, aber</text><text x="240" y="230">nicht richtig</text>
<text x="400" y="212">Weder präzise</text><text x="400" y="230">noch richtig</text>
<text x="560" y="212">Im Mittel richtig,</text><text x="560" y="230">wenig präzise</text>
</g>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#334155">Mitte der Zielscheibe = wahrer Wert; blaue Punkte = wiederholte Messungen</text>
</g>
</svg>`,
      caption: "Präzision = Messungen liegen nah beieinander. Richtigkeit = Messungen liegen nah am wahren Wert. Das sind zwei verschiedene Dinge."
    },
    {
      type: "text",
      title: "Messfehler",
      html: `<p>Jede Messung ist mit einem <b>Fehler</b> behaftet, den man nicht als Versehen, sondern als <b>Unsicherheit</b> versteht. Man unterscheidet zwei Familien:</p>
<ul>
<li><b>Systematische Fehler</b>: Sie verschieben alle Messwerte <b>immer in dieselbe Richtung</b>. Ursachen: schlecht eingestelltes Gerät (Nullpunktfehler: Die Waage zeigt 20 g an, obwohl nichts darauf liegt), falsche Methode, falsche Augenposition (<b>Parallaxenfehler</b>). Man kann sie korrigieren, wenn man sie entdeckt, aber wiederholtes Messen verringert sie nicht.</li>
<li><b>Zufällige Fehler</b> (auch statistische Fehler): Sie ändern sich von Messung zu Messung, mal nach oben, mal nach unten, ohne Regel, weil sie von vielen kleinen Ursachen abhängen (zitternde Hand, Erschütterungen, Reaktionszeit der Person, die die Stoppuhr drückt). Man <b>verringert sie durch häufiges Wiederholen</b> der Messung und Mittelwertbildung.</li>
</ul>
<p>Schließlich gibt es noch den <b>groben Fehler</b>, also das eigentliche Versehen (28 statt 82 ablesen): Er muss ausgeschieden werden und gehört nicht zur Fehlertheorie.</p>`
    },
    {
      type: "widget",
      title: "Systematisch oder zufällig?",
      widget: "classify",
      options: { groups: ["Systematisch", "Zufällig"], items: [
        ["Die Waage zeigt 5 g an, auch wenn nichts darauf liegt", 0],
        ["Die Stoppuhr wird mal zu früh, mal zu spät gestoppt", 1],
        ["Ich lese das Lineal immer von einer Seite ab (Parallaxe)", 0],
        ["Kleine Erschütterungen des Tisches beim Wiegen", 1],
        ["Das Plastikmaßband hat sich in der Sonne ausgedehnt und misst immer etwas mehr", 0],
        ["Die Thermometerablesungen schwanken um einige Zehntelgrad", 1]
      ] },
      caption: "Der systematische Fehler verschiebt immer in dieselbe Richtung; der zufällige geht mal etwas nach oben, mal etwas nach unten."
    },
    {
      type: "text",
      title: "Die Einzelmessung und der absolute Fehler",
      html: `<p>Wenn man <b>nur eine Messung</b> durchführt, kann das Ergebnis nicht genauer sein, als es das Gerät erlaubt. Per Konvention (in vielen Schulbüchern) nimmt man als <b>absoluten Fehler</b> die <b>Empfindlichkeit</b> des Geräts:</p>
<p style="text-align:center"><b>x = x₀ ± F<sub>a</sub></b></p>
<p>Dabei ist x₀ der gemessene Wert und F<sub>a</sub> der absolute Fehler. Beispiel: Mit einem Lineal mit Millimetereinteilung misst du 32 cm und 4 mm: Du schreibst <b>l = (32,4 ± 0,1) cm</b>. Das bedeutet: „Der wahre Wert liegt sehr wahrscheinlich im Intervall zwischen 32,3 und 32,5 cm.“ Manche Bücher nehmen als Fehler die <b>Hälfte</b> der Empfindlichkeit: In jeder Aufgabe muss man der angegebenen Konvention folgen.</p>
<p>Der absolute Fehler hat die <b>gleiche Einheit</b> wie die Größe und ist immer positiv.</p>`
    },
    {
      type: "text",
      title: "Wiederholte Messungen: Mittelwert und Halbspannweite",
      html: `<p>Wenn man die Messung N-mal unter gleichen Bedingungen wiederholen kann, unterscheiden sich die erhaltenen Werte leicht. Man geht so vor:</p>
<ol>
<li><b>Mittelwert</b>: die Summe aller Messwerte geteilt durch N. Er ist die beste Schätzung des wahren Werts.</li>
<li><b>Absoluter Fehler</b> als <b>maximale Halbspannweite</b>: F<sub>a</sub> = (x<sub>max</sub> − x<sub>min</sub>) / 2.</li>
<li>Man schreibt das Ergebnis: <b>x = Mittelwert ± F<sub>a</sub></b>.</li>
</ol>
<p><b>Beispiel.</b> Du misst die Breite eines Heftes mit einem Lineal mit mm-Einteilung und erhältst: 21,3 cm; 21,5; 21,4; 21,4; 21,6.</p>
<ul>
<li>Summe: 21,3 + 21,5 + 21,4 + 21,4 + 21,6 = 107,2; Mittelwert = 107,2 / 5 = <b>21,44 cm</b>.</li>
<li>Halbspannweite: (21,6 − 21,3) / 2 = <b>0,15 cm</b>.</li>
<li>Ergebnis: <b>l = (21,44 ± 0,15) cm</b>, gerundet <b>(21,4 ± 0,2) cm</b>: Der Fehler wird mit <b>nur einer signifikanten Stelle</b> geschrieben und der Wert mit derselben Anzahl an Dezimalstellen wie der Fehler.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Relativer und prozentualer Fehler",
      html: `<p>Der absolute Fehler sagt nicht, ob die Messung „gut“ ist: Ein Fehler von 1 cm ist klein, wenn ich ein Fußballfeld messe, riesig, wenn ich einen Fingernagel messe. Deshalb berechnet man den <b>relativen Fehler</b>:</p>
<p style="text-align:center"><b>F<sub>r</sub> = F<sub>a</sub> / x</b> (reine Zahl, ohne Einheit)</p>
<p>und den <b>prozentualen Fehler</b>: <b>F% = F<sub>r</sub> × 100</b>. Je kleiner der relative Fehler, desto besser die Messung.</p>`
    },
    {
      type: "example",
      title: "Welche Messung ist besser?",
      html: `<p>Marta misst die Länge einer Straße: (500 ± 1) m. Luca misst die Dicke eines Buches: (3,0 ± 0,5) cm. Wer hat besser gemessen?</p>
<ul>
<li>Marta: F<sub>r</sub> = 1/500 = 0,002 = <b>0,2 %</b>.</li>
<li>Luca: F<sub>r</sub> = 0,5/3,0 ≈ 0,17 = <b>17 %</b>.</li>
</ul>
<p>Obwohl Lucas absoluter Fehler (0,5 cm) als Zahl kleiner ist als Martas (1 m), ist seine Messung im Verhältnis viel schlechter. Der <b>relative Fehler</b> ist der richtige Vergleich zwischen Messungen verschiedener Größen.</p>`
    },
    {
      type: "example",
      title: "Die Stoppuhr und die Reaktionszeit",
      html: `<p>Um die Fallzeit einer Kugel aus 2 m Höhe zu messen, benutzen drei Schüler eine digitale Stoppuhr auf die Hundertstelsekunde. Sie erhalten 0,71 s; 0,64 s; 0,78 s; 0,69 s. Die Empfindlichkeit des Geräts ist 0,01 s, aber die Messwerte unterscheiden sich um fast 0,1 s: Die Ursache ist die <b>menschliche Reaktionszeit</b>, ein zufälliger Fehler, der viel größer ist als die Empfindlichkeit. Der Mittelwert ist 0,705 s und die Halbspannweite (0,78 − 0,64)/2 = 0,07 s: Das richtige Ergebnis ist <b>(0,71 ± 0,07) s</b>, nicht (0,705 ± 0,01) s. Das Gerät hat eine bessere Empfindlichkeit, als die Methode zulässt: Es zählt die <i>dominierende</i> Unsicherheit.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Fehler",
      questions: [
        { type: "num", q: "Gemessene Werte: 12,0 s; 12,4 s; 12,2 s. Berechne den Mittelwert.", answer: 12.2, tol: 0.01, unit: "s", explain: "(12,0 + 12,4 + 12,2) / 3 = 36,6 / 3 = 12,2 s." },
        { type: "num", q: "Berechne mit denselben Messwerten (12,0; 12,4; 12,2 s) den absoluten Fehler als maximale Halbspannweite.", answer: 0.2, tol: 0.001, unit: "s", explain: "(12,4 − 12,0) / 2 = 0,2 s." },
        { type: "tf", q: "Ein systematischer Fehler wird kleiner, wenn man die Messung oft wiederholt und den Mittelwert bildet.", answer: false, explain: "Der systematische Fehler verschiebt alle Messwerte in dieselbe Richtung: Der Mittelwert beseitigt ihn nicht." }
      ]
    },
    {
      type: "text",
      title: "Die signifikanten Stellen",
      html: `<p>Die <b>signifikanten Stellen</b> eines Messwerts sind diejenigen, die eine echte Bedeutung haben, also die sicheren Stellen plus die erste unsichere. 3,20 m und 3,2 m zu schreiben ist nicht dasselbe: Im ersten Fall reicht das Gerät bis zum Zentimeter, im zweiten bis zum Dezimeter.</p>
<p><b>Zählregeln:</b></p>
<ul>
<li>Von null verschiedene Ziffern sind immer signifikant;</li>
<li>Nullen <b>zwischen</b> signifikanten Ziffern sind signifikant (<b>4 0 7 </b> → 3 Stellen);</li>
<li>Nullen <b>am Anfang</b> sind nicht signifikant (0,0052 hat <b>2</b> Stellen);</li>
<li>Nullen <b>am Ende nach dem Komma</b> sind signifikant (2,50 hat <b>3</b> Stellen);</li>
<li>bei ganzen Zahlen mit Endnullen wie 1500 ist die Zahl mehrdeutig: Zur Klärung verwendet man die wissenschaftliche Notation (1,5 × 10³ hat 2 Stellen; 1,50 × 10³ hat 3).</li>
</ul>
<table>
<tr><th>Zahl</th><th>Signifikante Stellen</th></tr>
<tr><td>35,2</td><td>3</td></tr>
<tr><td>0,0045</td><td>2</td></tr>
<tr><td>3,020</td><td>4</td></tr>
<tr><td>6,0 × 10⁻³</td><td>2</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Rechnen und signifikante Stellen",
      html: `<p>Das Ergebnis einer Rechnung kann nicht genauer sein als die Ausgangsdaten.</p>
<ul>
<li><b>Multiplikation und Division</b>: Das Ergebnis hat so viele signifikante Stellen wie der Wert mit den <b>wenigsten</b>. Beispiel: 3,2 m × 1,45 m = 4,64 m² → man schreibt <b>4,6 m²</b> (2 Stellen).</li>
<li><b>Addition und Subtraktion</b>: Das Ergebnis hat so viele <b>Dezimalstellen</b> wie der Wert mit den <b>wenigsten</b>. Beispiel: 12,34 + 0,5 = 12,84 → man schreibt <b>12,8</b>.</li>
<li><b>Runden</b>: Ist die wegfallende Ziffer ≥ 5, erhöht man die vorherige um 1; ist sie &lt; 5, lässt man die vorherige unverändert (2,46 → 2,5; 2,44 → 2,4).</li>
</ul>
<p>Die Gefahr ist die <b>Scheingenauigkeit</b>: Der Taschenrechner zeigt 8 Stellen an, aber wenn die Daten mit 2 Stellen gemessen wurden, sind die anderen erfunden.</p>`
    },
    {
      type: "text",
      title: "Wie sich Fehler fortpflanzen",
      html: `<p>Wenn man eine neue Größe aus fehlerbehafteten Messwerten berechnet, hat auch das Ergebnis einen Fehler. Einfache Regeln (für den ungünstigsten Fall):</p>
<ul>
<li><b>Summe und Differenz</b>: Die <b>absoluten Fehler addieren sich</b>. (5,0 ± 0,1) cm + (3,0 ± 0,1) cm = (8,0 ± 0,2) cm. Auch bei der Differenz werden sie addiert!</li>
<li><b>Produkt und Quotient</b>: Die <b>relativen Fehler addieren sich</b>.</li>
</ul>
<p><b>Beispiel, Fläche eines Rechtecks</b> mit den Seiten (5,0 ± 0,1) cm und (3,0 ± 0,1) cm:</p>
<ul>
<li>F<sub>r</sub> der Seiten: 0,1/5,0 = 2 % und 0,1/3,0 ≈ 3,3 %;</li>
<li>F<sub>r</sub> der Fläche ≈ 2 % + 3,3 % = 5,3 %;</li>
<li>Fläche = 5,0 × 3,0 = 15 cm²; absoluter Fehler = 15 × 0,053 ≈ 0,8 cm²;</li>
<li>Ergebnis: <b>A = (15,0 ± 0,8) cm²</b>.</li>
</ul>
<p>Deshalb lohnt es sich bei einer Formel mit einem Produkt, die Größe mit dem größeren relativen Fehler genauer zu messen.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Fehler zu verstehen",
      intro: "Wenn dir die Rechnungen abstrakt vorkommen, versuche diese Sichtweisen.",
      tabs: [
        {
          label: "🎯 Die Zielscheibe",
          html: "<p>Denk an einen Schützen. <b>Präzision</b> = die Treffer liegen dicht beieinander. <b>Richtigkeit</b> = die Gruppe liegt nah an der Mitte. Ein <b>systematischer</b> Fehler verschiebt die ganze Gruppe zur Seite (schiefes Visier); ein <b>zufälliger</b> Fehler macht die Gruppe breiter (zitternde Hand). Der „wahre Wert“ ist die Mitte, die du nie direkt siehst, der du dich aber mit mehr Messungen näherst.</p>"
        },
        {
          label: "📏 Das Lineal mit Rastung",
          html: "<p>Stell dir vor, das Lineal rastet in Schritten von 1 mm ein: Du kannst nicht 3,5 mm ablesen, nur 3 oder 4. Die <b>Empfindlichkeit</b> ist die Breite des „Schritts“ und bestimmt die größtmögliche Genauigkeit einer einzelnen Ablesung. Deshalb ist es sinnlos, 12,347 cm zu schreiben, wenn das Gerät nur bis zu den Millimetern reicht: Die Ziffern 4 und 7 sind erfunden.</p>"
        },
        {
          label: "🧮 Den Mittelwert mit Kärtchen bilden",
          html: "<p>Fünf Messungen: 20,1; 20,3; 20,2; 20,2; 20,2 cm. Ein Trick: Streiche das gemeinsame „20,“ und rechne mit den Nachkommastellen: 1, 3, 2, 2, 2 → Summe 10 → Mittelwert 2 → der Mittelwert ist 20,2 cm. So kann man im Kopf rechnen.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "Mittelwert", back: "Summe der Messwerte / Anzahl der Messwerte" },
            { front: "Absoluter Fehler (wiederholte Messungen)", back: "(x max - x min) / 2" },
            { front: "Relativer Fehler", back: "absoluter Fehler / Messwert" },
            { front: "Prozentualer Fehler", back: "relativer Fehler × 100" },
            { front: "Summe von Messwerten", back: "die absoluten Fehler werden addiert" },
            { front: "Produkt von Messwerten", back: "die relativen Fehler werden addiert" }
          ] }
        },
        {
          label: "🔁 Der Ablauf einer Messung",
          html: "<p>Jedes Experiment folgt diesen Schritten: Gerät wählen → Nullpunkt prüfen → mehrmals messen → grobe Fehler aussortieren → Mittelwert und Fehler berechnen → Ergebnis mit den richtigen Stellen schreiben → mit anderen Ergebnissen oder dem erwarteten Wert vergleichen.</p>",
          svg: "<svg viewBox='0 0 600 160' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='160' fill='#f0f9ff'/><g font-family='sans-serif' font-size='14' text-anchor='middle' fill='#0c4a6e'><rect x='10' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='52' y='84'>Gerät</text><rect x='115' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='157' y='84'>Messungen</text><rect x='220' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='262' y='84'>Mittelwert</text><rect x='325' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='367' y='84'>Fehler</text><rect x='430' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='472' y='84'>Stellen</text><rect x='535' y='55' width='55' height='50' rx='8' fill='#7dd3fc'/><text x='562' y='84'>x±F</text><path d='M95 80 L115 80 M200 80 L220 80 M305 80 L325 80 M410 80 L430 80 M515 80 L535 80' stroke='#0369a1' stroke-width='3'/></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Als das Neutrino das Licht „überholte“",
      html: `<p>Im September 2011 gab das Experiment <b>OPERA</b> (das Neutrinos maß, die vom CERN in Genf zum Gran-Sasso-Labor in Italien geschickt wurden) bekannt, dass sich die Neutrinos <b>knapp schneller als das Licht</b> zu bewegen schienen. Das wäre eine revolutionäre Entdeckung gewesen. In den folgenden Monaten überprüften die Forschenden alles und fanden zwei <b>systematische Fehler</b>: ein nicht richtig angeschlossenes Glasfaserkabel und einen defekten Oszillator. Nach der Korrektur stimmte die Geschwindigkeit wieder mit der des Lichts überein. Das zeigt, dass auch große Labore ihre eigenen Fehler suchen und korrigieren und dass für eine außergewöhnliche Entdeckung außergewöhnliche Beweise nötig sind.</p>`
    },
    {
      type: "curiosity",
      title: "Eratosthenes und der Erdumfang",
      html: `<p>Um 240 v. Chr. maß <b>Eratosthenes</b> von Kyrene den Erdumfang mit einem Stab, einem Schatten und einer Entfernung: In Syene (heute Assuan) fielen die Sonnenstrahlen am Mittag der Sommersonnenwende senkrecht ein, während sie in Alexandria, etwa 5000 Stadien weiter nördlich, einen Winkel von etwa 7,2° bildeten (1/50 eines Vollwinkels). Daraus errechnete er einen Umfang von 250 000 Stadien. Der Wert des verwendeten Stadions ist ungewiss, aber die Messung weicht nur um einen kleinen Prozentsatz vom modernen Wert ab: eine ausgezeichnete Schätzung mit einfachen Mitteln und mit einer klar abgeschätzten Unsicherheit.</p>`
    },
    {
      type: "conceptMap",
      title: "Begriffslandkarte der Messung",
      nodes: [
        { id: "misura", label: "Die Messung", x: 50, y: 8, color: "#2563eb", html: "Vergleich einer Größe mit einem Normal mithilfe eines Geräts.", why: "Jedes experimentelle Datum ist das Ergebnis einer Messung: Ohne zu verstehen, wie es zustande kommt und wie zuverlässig es ist, kann man keinem physikalischen Gesetz trauen. Deshalb hat die experimentelle Methode Galileis die Messung ins Zentrum gestellt." },
        { id: "strumenti", label: "Gerät", x: 15, y: 42, color: "#16a34a", html: "Messbereich, Empfindlichkeit, Ansprechverhalten, Präzision, Richtigkeit.", why: "Die Eigenschaften des Geräts setzen jeder Messung Grenzen: Keine Rechenoperation kann mehr Genauigkeit liefern, als das Gerät hat." },
        { id: "errori", label: "Fehler", x: 50, y: 42, color: "#ef4444", html: "Systematisch und zufällig: Unsicherheit jeder Messung.", why: "Zufällige Fehler entstehen aus vielen kleinen unabhängigen Ursachen und gleichen sich daher beim Mitteln aus; systematische hängen von einem Mangel der Methode oder des Geräts ab und müssen entdeckt, nicht gemittelt werden." },
        { id: "incertezza", label: "Absoluter und relativer Fehler", x: 85, y: 42, color: "#f59e0b", html: "Fa = Halbspannweite oder Empfindlichkeit; Fr = Fa/x; F% = Fr × 100.", why: "Der absolute Fehler zeigt, wie sehr man sich auf den Wert verlassen kann; der relative Fehler erlaubt es, Messungen verschiedener Größen zu vergleichen. Erst der Vergleich über den relativen Fehler macht eine Zahl aussagekräftig." },
        { id: "cifre", label: "Signifikante Stellen", x: 30, y: 80, color: "#8b5cf6", html: "Sichere Stellen plus die erste unsichere.", why: "Nur die signifikanten Stellen zu schreiben ist eine Frage der Ehrlichkeit: Jede zusätzliche Stelle ist ein Genauigkeitsversprechen, das man nicht halten kann." },
        { id: "propagazione", label: "Fehlerfortpflanzung", x: 72, y: 80, color: "#64748b", html: "Summe: absolute Fehler. Produkt: relative Fehler.", why: "Sie ergibt sich aus der Überlegung zum ungünstigsten Fall: Wenn jede Messung zu hoch ausfallen kann, ist der Fehler des Ergebnisses die Summe der Beiträge. Deshalb lohnt es sich, die Messung zu verbessern, die am stärksten ins Gewicht fällt." }
      ],
      edges: [["misura", "strumenti", "hängt ab von"], ["misura", "errori", "hat immer"], ["errori", "incertezza", "werden quantifiziert durch"], ["incertezza", "cifre", "bestimmt die"], ["incertezza", "propagazione", "pflanzt sich fort in"]]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: signifikante Stellen",
      questions: [
        { type: "mc", q: "Wie viele signifikante Stellen hat 0,0360?", options: ["2", "3", "4", "5"], answer: 1, explain: "Die Nullen am Anfang zählen nicht; 3, 6 und die Endnull nach dem Komma schon: 3 Stellen." },
        { type: "mc", q: "Das Produkt 2,5 m × 3,14 m ergibt 7,85 m². Wie schreibt man es mit signifikanten Stellen?", options: ["7,85 m²", "7,9 m²", "8 m²", "7,850 m²"], answer: 1, explain: "Der Wert mit den wenigsten Stellen (2,5) hat 2: Das Ergebnis hat 2 Stellen, 7,9 m²." }
      ]
    }
  ],
  glossary: [
    { t: "Empfindlichkeit", d: "Kleinste Änderung der Größe, die das Gerät noch anzeigen kann." },
    { t: "Messbereich", d: "Größter Wert, den ein Gerät messen kann." },
    { t: "Präzision", d: "Fähigkeit, bei wiederholten Messungen nah beieinanderliegende Werte zu liefern." },
    { t: "Richtigkeit", d: "Fähigkeit, Messwerte nah am wahren Wert zu liefern." },
    { t: "Systematischer Fehler", d: "Fehler, der die Messwerte immer in dieselbe Richtung verschiebt." },
    { t: "Zufälliger Fehler", d: "Fehler, der sich unvorhersehbar von Messung zu Messung ändert." },
    { t: "Absoluter Fehler", d: "Unsicherheit einer Messung, mit der gleichen Einheit wie die Größe." },
    { t: "Relativer Fehler", d: "Verhältnis von absolutem Fehler und Wert der Messung." },
    { t: "Signifikante Stellen", d: "Sichere Stellen plus die erste unsichere Stelle eines Messwerts." },
    { t: "Parallaxe", d: "Ablesefehler durch die Position des Auges zur Skala." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was ist die Empfindlichkeit eines Geräts?", options: ["Der größte messbare Wert", "Die kleinste erkennbare Änderung", "Die Schnelligkeit der Reaktion", "Der Preis des Geräts"], answer: 1, explain: "Die Empfindlichkeit ist die kleinste Änderung, die das Gerät noch erfasst." },
      { type: "tf", q: "Ein sehr präzises Gerät ist zwangsläufig auch richtig messend.", answer: false, explain: "Es kann Werte liefern, die nah beieinander liegen, aber alle wegen eines systematischen Fehlers gegenüber dem wahren Wert verschoben sind." },
      { type: "mc", q: "Die Waage zeigt bei leerer Schale 10 g an. Was für ein Fehler ist das?", options: ["Zufällig", "Systematisch", "Grob", "Relativ"], answer: 1, explain: "Er verschiebt alle Messwerte in dieselbe Richtung: Nullpunktfehler, also systematisch." },
      { type: "num", q: "Messungen einer Länge: 8,2 cm; 8,4 cm; 8,3 cm; 8,3 cm. Berechne den Mittelwert.", answer: 8.3, tol: 0.01, unit: "cm", explain: "(8,2 + 8,4 + 8,3 + 8,3) / 4 = 33,2 / 4 = 8,3 cm." },
      { type: "num", q: "Berechne mit denselben Messwerten (8,2; 8,4; 8,3; 8,3 cm) den absoluten Fehler als Halbspannweite.", answer: 0.1, tol: 0.001, unit: "cm", explain: "(8,4 − 8,2) / 2 = 0,1 cm." },
      { type: "num", q: "Ein Messwert beträgt (50 ± 2) cm. Berechne den prozentualen Fehler.", answer: 4, tol: 0.01, unit: "%", explain: "F_r = 2/50 = 0,04, also 4 %." },
      { type: "mc", q: "Wie viele signifikante Stellen hat 4,050?", options: ["2", "3", "4", "5"], answer: 2, explain: "Die Null zwischen 4 und 5 und die Endnull nach dem Komma sind signifikant: 4 Stellen." },
      { type: "mc", q: "Was ist das Ergebnis von 12,34 + 0,5 mit signifikanten Stellen?", options: ["12,84", "12,8", "13", "12,9"], answer: 1, explain: "Bei Summen behält man die Zahl der Dezimalstellen des Werts mit den wenigsten Dezimalstellen (1): 12,8." },
      { type: "tf", q: "Wenn man zwei Messwerte subtrahiert, werden die absoluten Fehler subtrahiert.", answer: false, explain: "Im ungünstigsten Fall addieren sich die absoluten Fehler auch bei der Differenz." },
      { type: "order", q: "Ordne die Schritte, um das Ergebnis wiederholter Messungen aufzuschreiben.", items: ["Mehrere Messungen durchführen", "Den Mittelwert berechnen", "Den absoluten Fehler berechnen", "x = Mittelwert ± Fehler mit den richtigen Stellen schreiben"], explain: "Zuerst sammelt man die Daten, dann den Mittelwert, dann den Fehler, zuletzt schreibt man das Ergebnis auf." }
    ]
  }
});
