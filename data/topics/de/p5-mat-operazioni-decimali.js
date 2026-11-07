TOPIC('de', {
  id: "p5-mat-operazioni-decimali",
  title: "Rechnen mit Dezimalzahlen",
  intro: "Preise, Maße, Zeiten bei Wettkämpfen: <b>Dezimalzahlen</b> sind überall. In dieser Lektion lernst du, die <b>vier Rechenarten mit dem Komma</b> auszuführen und mit 10, 100, 1000 zu multiplizieren und zu dividieren, indem du das Komma „verschiebst“.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Wiederholung: Wie eine Dezimalzahl aufgebaut ist",
      html: `<p>Eine Dezimalzahl hat einen <b>ganzzahligen Teil</b> (vor dem Komma) und einen <b>Dezimalteil</b> (nach dem Komma).</p>
<p>In der Zahl <b>34,56</b>:</p>
<ul>
<li>3 = Zehner (Z), 4 = Einer (E) → ganzzahliger Teil;</li>
<li>5 = <b>Zehntel</b> (z): 1 Zehntel = 1/10 = 0,1;</li>
<li>6 = <b>Hundertstel</b> (h): 1 Hundertstel = 1/100 = 0,01;</li>
<li>die nächste Ziffer wäre die der <b>Tausendstel</b> (t): 1/1000 = 0,001.</li>
</ul>
<p>Goldene Regel: <b>Nullen am Ende</b> des Dezimalteils anzuhängen <b>verändert</b> die Zahl <b>nicht</b>: 2,5 = 2,50 = 2,500. Dieser Trick wird uns sehr nützlich sein!</p>`
    },
    {
      type: "text",
      title: "Addition und Subtraktion: Komma unter Komma",
      html: `<ol>
<li>Schreibe die Zahlen untereinander, <b>Komma unter Komma</b> (so stehen die Einer unter den Einern, die Zehntel unter den Zehnteln …).</li>
<li>Hat eine Zahl weniger Dezimalstellen, <b>hänge Nullen an</b>, um auszugleichen: 12,4 → 12,40.</li>
<li>Rechne wie mit ganzen Zahlen, von rechts nach links, mit Übertrag und Entbündeln.</li>
<li>Setze im Ergebnis das <b>Komma unter die anderen Kommas</b>.</li>
</ol>
<p>Beispiel: 12,4 + 3,75 → 12,40 + 3,75 = <b>16,15</b>. Beispiel: 8 − 2,35 → 8,00 − 2,35 = <b>5,65</b>.</p>`
    },
    {
      type: "svg",
      title: "Untereinander, Komma unter Komma",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-size="15" text-anchor="middle" font-weight="bold">
<text x="80" y="36" fill="#7c3aed">Z</text><text x="120" y="36" fill="#2563eb">E</text><text x="180" y="36" fill="#16a34a">z</text><text x="220" y="36" fill="#dc2626">h</text>
</g>
<rect x="148" y="44" width="10" height="170" fill="#fde68a"/>
<g font-size="34" text-anchor="middle" font-family="monospace" fill="#1f2937">
<text x="80" y="84">1</text><text x="120" y="84">2</text><text x="153" y="84">,</text><text x="180" y="84">4</text><text x="220" y="84" fill="#f97316">0</text>
<text x="40" y="134">+</text><text x="120" y="134">3</text><text x="153" y="134">,</text><text x="180" y="134">7</text><text x="220" y="134">5</text>
<text x="80" y="200" font-weight="bold">1</text><text x="120" y="200" font-weight="bold">6</text><text x="153" y="200" font-weight="bold">,</text><text x="180" y="200" font-weight="bold">1</text><text x="220" y="200" font-weight="bold">5</text>
</g>
<line x1="30" y1="150" x2="250" y2="150" stroke="#1f2937" stroke-width="3"/>
<text x="132" y="58" font-size="14" text-anchor="middle" fill="#64748b">1</text>
<text x="235" y="250" font-size="15" text-anchor="middle" fill="#ea580c">Null angehängt</text>
<line x1="228" y1="234" x2="222" y2="92" stroke="#ea580c" stroke-width="2"/>
<g font-size="16" fill="#1f2937">
<text x="300" y="70">1) Komma unter Komma</text>
<text x="300" y="105">2) mit Nullen ausgleichen: 12,4 → 12,40</text>
<text x="300" y="140">3) von rechts rechnen, mit Übertrag:</text>
<text x="320" y="165">0 + 5 = 5;  4 + 7 = 11 → schreibe 1, übertrage 1</text>
<text x="300" y="200">4) das Komma im Ergebnis kommt</text>
<text x="320" y="225">in dieselbe Spalte</text>
</g>
</svg>`,
      caption: "Die gelbe Kommaspalte hält die Ziffern in Ordnung: Zehntel zu Zehnteln, Hundertstel zu Hundertsteln."
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Einkauf",
      html: `<p>Mama kauft: Brot <b>2,35 €</b>, Milch <b>1,49 €</b>, Äpfel <b>3,2 €</b>. Sie bezahlt mit einem <b>10-€</b>-Schein.</p>
<ol>
<li>Gesamtsumme: 2,35 + 1,49 + 3,20 = <b>7,04 €</b> (Achtung: 3,2 → 3,20!).</li>
<li>Rückgeld: 10,00 − 7,04 = <b>2,96 €</b>.</li>
</ol>
<p>Schnelle Kontrolle (Überschlag): 2 + 1,5 + 3 ≈ 6,5, also ist die Summe ungefähr 7 €: Das Ergebnis ist vernünftig. ✅</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Addition und Subtraktion",
      questions: [
        { type: "num", q: "4,5 + 2,35 = ?", answer: 6.85, explain: "4,50 + 2,35 = 6,85." },
        { type: "num", q: "10 − 3,6 = ?", answer: 6.4, explain: "10,0 − 3,6 = 6,4." },
        { type: "tf", q: "3,7 und 3,70 sind dieselbe Zahl.", answer: true, explain: "Nullen am Ende des Dezimalteils verändern den Wert nicht." }
      ]
    },
    {
      type: "text",
      title: "Mit 10, 100, 1000 multiplizieren und dividieren",
      html: `<p>Das ist der „magischste“ Teil:</p>
<ul>
<li><b>· 10, · 100, · 1000</b> → das Komma wandert um <b>1, 2, 3</b> Stellen nach <b>rechts</b> (die Zahl wird größer). 3,456 · 10 = 34,56; 3,456 · 100 = 345,6; 3,456 · 1000 = 3456.</li>
<li><b>: 10, : 100, : 1000</b> → das Komma wandert um <b>1, 2, 3</b> Stellen nach <b>links</b> (die Zahl wird kleiner). 45,7 : 10 = 4,57; 45,7 : 100 = 0,457.</li>
</ul>
<p>Fehlen Ziffern, hängt man <b>Nullen</b> an: 2,5 · 1000 = 2500; 3 : 100 = 0,03.</p>
<p>Der Trick: <b>Zähle die Nullen</b> von 10, 100, 1000. So viele Nullen = so viele Stellen.</p>`
    },
    {
      type: "text",
      title: "Die Multiplikation mit Komma",
      html: `<ol>
<li>Führe die Multiplikation aus, <b>als gäbe es keine Kommas</b>.</li>
<li><b>Zähle</b>, wie viele Dezimalstellen es <b>insgesamt</b> in den beiden Faktoren gibt.</li>
<li>Trenne im Ergebnis, von rechts beginnend, <b>genauso viele Stellen</b> mit dem Komma ab.</li>
</ol>
<p>Beispiel: 2,3 · 1,4 → 23 · 14 = 322. Dezimalstellen: 1 + 1 = 2 → <b>3,22</b>.</p>
<p>Beispiel: 0,5 · 0,3 → 5 · 3 = 15. Dezimalstellen: 2 → <b>0,15</b>.</p>
<p>⚠️ Mit einer Zahl <b>kleiner als 1</b> zu multiplizieren ergibt ein <b>kleineres</b> Ergebnis: 0,5 · 8 = 4 (die Hälfte von 8!).</p>`
    },
    {
      type: "widget",
      title: "Die Multiplikation als Fläche: 0,3 · 0,4",
      widget: "areaGrid",
      options: { w: 3, h: 4, max: 10 },
      caption: "Stell dir vor, das große Quadrat 10 × 10 ist 1 Ganzes: Jede Seite ist 1 und jedes Kästchen ist 0,01 wert. Ein Rechteck mit 3 Spalten (0,3) und 4 Zeilen (0,4) enthält 12 Kästchen: 0,3 · 0,4 = 0,12."
    },
    {
      type: "text",
      title: "Die Division mit Komma",
      html: `<p><b>Fall 1 – das Komma steht im Dividenden</b> (z. B. 7,5 : 3):</p>
<ol>
<li>dividiere den ganzzahligen Teil ganz normal: 7 : 3 = 2 Rest 1;</li>
<li><b>wenn du die erste Ziffer nach dem Komma herunterholst, setze das Komma in den Quotienten</b>: Du holst die 5 herunter → 15 : 3 = 5 → Ergebnis <b>2,5</b>.</li>
</ol>
<p><b>Fall 2 – das Komma steht im Divisor</b> (z. B. 6 : 1,5):</p>
<ol>
<li>benutze die <b>Konstanzregel</b> (Gleichsinniges Verändern): Multipliziere Dividend und Divisor mit der <b>gleichen Zahl</b> (10, 100 …), um das Komma aus dem Divisor zu entfernen;</li>
<li>6 : 1,5 → (· 10) → 60 : 15 = <b>4</b>.</li>
</ol>
<p><b>Fall 3 – der Rest ist nicht null</b>: Du kannst weitermachen, indem du dem Rest eine <b>Null</b> anhängst und das Komma in den Quotienten setzt: 7 : 4 = 1 Rest 3 → 30 : 4 = 7 Rest 2 → 20 : 4 = 5 → <b>1,75</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Pizzarechnung teilen",
      html: `<p>Vier Freunde geben in der Pizzeria <b>38,60 €</b> aus und teilen die Rechnung zu gleichen Teilen.</p>
<p>38,60 : 4 → 38 : 4 = 9 Rest 2; ich hole die 6 herunter (ich setze das Komma!) → 26 : 4 = 6 Rest 2; ich hole die 0 herunter → 20 : 4 = 5. Ergebnis: <b>9,65 €</b> pro Person.</p>
<p>Kontrolle: 9,65 · 4 = 38,60 ✅. Die Multiplikation ist die <b>Umkehroperation</b> der Division: Das ist der beste Weg zur Überprüfung!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Benzin und der Roller",
      html: `<p>Benzin kostet <b>1,85 €</b> pro Liter. Opa tankt <b>12 Liter</b>. Wie viel gibt er aus?</p>
<p>185 · 12 = 2220 → 2 Dezimalstellen → <b>22,20 €</b>.</p>
<p>Der Roller fährt <b>34,5 km</b> mit 1 Liter. Mit 12 Litern: 34,5 · 12 = <b>414 km</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Multiplikation und Division",
      questions: [
        { type: "num", q: "4,73 · 100 = ?", answer: 473, explain: "· 100: Das Komma wandert um 2 Stellen nach rechts." },
        { type: "num", q: "56 : 1000 = ?", answer: 0.056, explain: ": 1000: Das Komma wandert um 3 Stellen nach links, mit angehängten Nullen: 0,056." },
        { type: "num", q: "1,2 · 0,3 = ?", answer: 0.36, explain: "12 · 3 = 36; 2 Dezimalstellen → 0,36." },
        { type: "num", q: "9 : 1,5 = ?", answer: 6, explain: "Konstanzregel: 90 : 15 = 6." }
      ]
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Komma oder Punkt?",
      html: `<p>In Italien, Deutschland und in großen Teilen Europas trennt man die Dezimalstellen mit dem <b>Komma</b> (3,14). In englischsprachigen Ländern, in China und in Japan benutzt man den <b>Punkt</b> (3.14). Taschenrechner und Computer benutzen oft den Punkt! Und die Tausender? Wir schreiben 1.000.000 oder 1 000 000; die Engländer 1,000,000. Um Verwirrung zu vermeiden, empfehlen die internationalen Normen, die Tausender mit einem <b>Leerzeichen</b> zu trennen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Das Büchlein, das die Dezimalzahlen (in Europa) erfand",
      html: `<p>Im Jahr <b>1585</b> veröffentlichte der flämische Mathematiker <b>Simon Stevin</b> ein Büchlein von wenigen Seiten, <i>De Thiende</i> („Das Zehntel“), um Kaufleuten und Landvermessern zu erklären, wie man Dezimalbrüche in den alltäglichen Rechnungen benutzt. Er schrieb die Zahlen auf merkwürdige Weise, mit kleinen Kreisen: 3⓪1①4②. Wenige Jahre später machte der Schotte <b>John Napier</b> das Trennzeichen populär. Schon viel früher benutzten arabische und chinesische Mathematiker Dezimalbrüche.</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>+ und −</b>: Komma unter Komma, mit Nullen ausgleichen.</li>
<li><b>· und : mit 10, 100, 1000</b>: Verschiebe das Komma nach rechts (·) oder nach links (:) um so viele Stellen, wie Nullen da sind.</li>
<li><b>·</b>: ohne Kommas multiplizieren, dann so viele Dezimalstellen abtrennen, wie die Faktoren insgesamt haben.</li>
<li><b>:</b> Komma im Dividenden → setze es in den Quotienten, wenn du es überschreitest; Komma im Divisor → entferne es mit der Konstanzregel.</li>
<li><b>Überschlage</b> das Ergebnis immer und mache die <b>Probe</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das Rechnen mit dem Komma zu verstehen",
      intro: "Wenn dich die Kommaregel verwirrt, probiere es mit Euro, mit 3D-Blöcken, mit Maßeinheiten oder mit der Überschlagsmethode, die in vielen Ländern benutzt wird.",
      tabs: [
        {
          label: "💶 Denke in Cent",
          html: `<p>Verwandle alles in <b>Cent</b> und das Komma verschwindet!</p>
<ul>
<li>2,35 € + 1,49 € → 235 c + 149 c = 384 c = <b>3,84 €</b>.</li>
<li>10 € − 7,04 € → 1000 c − 704 c = 296 c = <b>2,96 €</b>.</li>
<li>1,85 € · 12 → 185 c · 12 = 2220 c = <b>22,20 €</b>.</li>
<li>38,60 € : 4 → 3860 c : 4 = 965 c = <b>9,65 €</b>.</li>
</ul>
<p>Genau das macht die Kommaregel: Sie arbeitet mit ganzen Zahlen und setzt am Ende das Komma wieder an die richtige Stelle.</p>`
        },
        {
          label: "🧊 Die 3D-Blöcke",
          html: `<p>Nimm die Zehnersystemblöcke, aber ändere den „Wert“: Die <b>Platte</b> mit 100 Würfelchen ist <b>1 Ganzes</b> wert, die <b>Stange</b> mit 10 ist <b>1 Zehntel</b> (0,1) wert, das <b>Würfelchen</b> ist <b>1 Hundertstel</b> (0,01) wert.</p>
<p>Das Modell unten zeigt 245 Würfelchen: Mit unserer Regel sind das <b>2,45</b> (2 Platten, 4 Stangen, 5 Würfelchen). Wenn du 0,07 addierst, fügst du 7 Würfelchen hinzu: Du kommst auf 12 einzelne Würfelchen, tauschst 10 gegen eine Stange (das ist der <b>Übertrag</b>!) und erhältst 2,52.</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 245 }
        },
        {
          label: "📏 Mit Maßen",
          html: `<p>Mit 10, 100, 1000 zu multiplizieren und zu dividieren ist wie die <b>Maßeinheit zu wechseln</b>:</p>
<ul>
<li>3,25 m = 32,5 dm = <b>325 cm</b> (· 100: von Metern zu Zentimetern).</li>
<li>1500 g = <b>1,5 kg</b> (: 1000: von Gramm zu Kilogramm).</li>
<li>0,75 l = <b>75 cl</b> = 750 ml.</li>
</ul>
<p>Die Zahl ändert sich, aber die <b>Menge bleibt dieselbe</b>: Es ändert sich nur das „Lineal“, mit dem du sie misst. Das Komma zu verschieben = die Schublade in der Maßtabelle zu wechseln.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f0fdf4"/>
<g font-size="20" text-anchor="middle" font-weight="bold">
<rect x="20" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="60" y="73">km</text>
<rect x="100" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="140" y="73">hm</text>
<rect x="180" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="220" y="73">dam</text>
<rect x="260" y="40" width="80" height="50" fill="#fde68a" stroke="#15803d" stroke-width="2"/><text x="300" y="73">m</text>
<rect x="340" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="380" y="73">dm</text>
<rect x="420" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="460" y="73">cm</text>
<rect x="500" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="540" y="73">mm</text>
</g>
<path d="M300,100 Q380,150 460,100" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="452,96 468,100 458,112" fill="#dc2626"/>
<text x="380" y="160" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">· 100 (2 Stellen nach rechts)</text>
<text x="300" y="190" font-size="17" text-anchor="middle" fill="#1f2937">3,25 m = 325 cm</text>
</svg>`
        },
        {
          label: "🎯 Erst überschlagen, dann rechnen",
          html: `<p>In vielen Ländern (zum Beispiel in England und in den Niederlanden) lernt man, <b>zuerst zu überschlagen</b> und den Überschlag zu benutzen, um das <b>Komma zu setzen</b>:</p>
<ul>
<li>4,8 · 3,1 → Überschlag: 5 · 3 = 15. Rechnung ohne Kommas: 48 · 31 = 1488. Wohin muss das Komma, damit es nahe bei 15 liegt? → <b>14,88</b>!</li>
<li>0,62 · 5 → Überschlag: ungefähr die Hälfte von 5 … ungefähr 3. 62 · 5 = 310 → <b>3,10</b>.</li>
</ul>
<p>So warnt dich der Überschlag sofort, auch wenn du dich beim Zählen der Dezimalstellen verzählst: 148,8 oder 1,488 wären absurd!</p>`
        },
        {
          label: "🇬🇧 Der englische Dezimalpunkt",
          html: "<p>In Italien und Deutschland schreiben wir <b>3,75</b>. Im <b>Vereinigten Königreich</b>, in den <b>Vereinigten Staaten</b> und in vielen anderen Ländern schreibt man <b>3.75</b>: An der Stelle des Kommas steht der <b>Punkt</b> (<i>decimal point</i>). Und bei den Tausendern machen sie das Gegenteil von uns: Unser 1.250,75 ist für einen Engländer <b>1,250.75</b>!</p><p>⚠️ Achtung, wenn du einen Taschenrechner oder ein Telefon benutzt, das auf Englisch eingestellt ist: Die Kommataste ist ein <b>Punkt</b>.</p><p>Beim Addieren und Subtrahieren untereinander wiederholen englische Lehrer: <b>«line up the decimal points!»</b>, das heißt «ordne die Dezimalpunkte in einer Reihe an!». Das ist dieselbe Regel, die wir mit dem Komma benutzen:</p><ol><li>Schreibe die Zahlen untereinander, mit den <b>Kommas (oder Punkten) in einer Spalte</b>.</li><li>Hänge die fehlenden <b>Nullen</b> an, damit alle Ziffern ausgerichtet sind: 12,5 wird zu 12,50.</li><li>Rechne wie mit ganzen Zahlen und setze das Komma in dieselbe Spalte.</li></ol><p>12,50 + 3,75 = <b>16,25</b> (auf Englisch: 12.50 + 3.75 = 16.25).</p>",
          svg: "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f8fafc\"/><rect x=\"30\" y=\"30\" width=\"250\" height=\"110\" fill=\"#ffffff\" stroke=\"#16a34a\" stroke-width=\"3\"/><text x=\"155\" y=\"62\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">🇮🇹 🇩🇪 Italien, Deutschland</text><text x=\"155\" y=\"100\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1.250,75</text><text x=\"155\" y=\"128\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" text-anchor=\"middle\">Komma = Dezimalstellen</text><rect x=\"320\" y=\"30\" width=\"250\" height=\"110\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"445\" y=\"62\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">🇬🇧 🇺🇸 UK und USA</text><text x=\"445\" y=\"100\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1,250.75</text><text x=\"445\" y=\"128\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#2563eb\" text-anchor=\"middle\">Punkt = Dezimalstellen</text><text x=\"140\" y=\"190\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">  12.50</text><text x=\"140\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">+  3.75</text><line x1=\"140\" y1=\"232\" x2=\"260\" y2=\"232\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"140\" y=\"262\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">  16.25</text><line x1=\"215\" y1=\"168\" x2=\"215\" y2=\"270\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><text x=\"300\" y=\"215\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">«line up the</text><text x=\"300\" y=\"238\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">decimal points!»</text></svg>"
        },
        {
          label: "🇯🇵 Der Soroban: du wählst, wo das Komma ist",
          html: "<p>Auf dem japanischen <b>Soroban</b> gibt es kein Komma! Alle 3 Stäbe gibt es einen kleinen <b>Punkt</b> auf dem Balken: Bevor du anfängst, <b>wählst du einen Punkt</b> und legst fest, dass das der Stab der <b>Einer</b> ist. Links davon sind Zehner und Hunderter, <b>rechts</b> Zehntel, Hundertstel, Tausendstel.</p><p>Merke: Die Perle oben zählt <b>5</b>, jede der 4 unten zählt <b>1</b>.</p><p><b>2,35 + 1,49</b>:</p><ol><li>Stelle <b>2,35</b> ein: 2 auf dem Einerstab, 3 auf den Zehnteln, 5 auf den Hundertsteln (die 5er-Perle).</li><li>Addiere 1 Einer → 3 Einer.</li><li>Addiere 4 Zehntel → 7 Zehntel.</li><li>Addiere 9 Hundertstel: 5 + 9 = 14 → du lässt 4 Hundertstel und überträgst <b>1 Zehntel</b> mehr: 8 Zehntel.</li><li>Lies ab: <b>3,84</b>.</li></ol><p>Das Komma verschiebt sich nie: Du entscheidest nur einmal, wo die Einer sind. Und um mit 10 zu multiplizieren? Du musst dir nur vorstellen, dass die Einer einen Stab weiter rechts sind: Alle Ziffern „steigen“ eine Stelle auf!</p>",
          svg: "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"290\" fill=\"#f8fafc\"/><rect x=\"30\" y=\"20\" width=\"320\" height=\"230\" fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"3\"/><rect x=\"40\" y=\"30\" width=\"300\" height=\"210\" fill=\"#fef3c7\" stroke=\"#78350f\" stroke-width=\"2\"/><rect x=\"40\" y=\"90\" width=\"300\" height=\"8\" fill=\"#451a03\" stroke=\"#451a03\" stroke-width=\"1\"/><line x1=\"70\" y1=\"30\" x2=\"70\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"70\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"70\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Zehner</text><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"130\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"94\" r=\"4\" fill=\"#fff\" stroke=\"none\" stroke-width=\"2\"/><text x=\"130\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Einer</text><line x1=\"190\" y1=\"30\" x2=\"190\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"190\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"190\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Zehntel</text><line x1=\"250\" y1=\"30\" x2=\"250\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"250\" cy=\"75\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Hundertst.</text><line x1=\"310\" y1=\"30\" x2=\"310\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"310\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Tausendst.</text><text x=\"410\" y=\"60\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">2,35 auf dem Soroban</text><text x=\"410\" y=\"92\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">weißer Punkt =</text><text x=\"410\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Einerstab</text><text x=\"410\" y=\"150\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">rechts davon:</text><text x=\"410\" y=\"170\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Zehntel, Hundertstel …</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Rechnens mit Dezimalzahlen",
      nodes: [
        { id: "decimali", label: "Dezimalzahlen", x: 50, y: 6, color: "#2563eb", html: "Zahlen mit ganzzahligem Teil und Dezimalteil, durch das Komma getrennt.", why: "Es sind Dezimalbrüche (mit Nenner 10, 100, 1000 …), bequem aufgeschrieben: 0,25 = 25/100. Sie funktionieren, weil unser Zahlensystem auf der Basis 10 beruht." },
        { id: "posizione", label: "Stellenwert", x: 20, y: 26, color: "#7c3aed", html: "Jede Stelle ist 10-mal so viel wert wie die rechts von ihr: E, z, h, t.", why: "Das Stellenwertsystem mit der Null kam über die Araber aus Indien; Fibonacci verbreitete es 1202 in Europa. Die Dezimalzahlen sind seine Erweiterung „nach dem Komma“." },
        { id: "addsott", label: "Addition und Subtraktion", x: 20, y: 52, color: "#16a34a", html: "Komma unter Komma, mit Nullen ausgleichen.", why: "Man kann nur Einheiten gleicher Art addieren (Zehntel zu Zehnteln): Wenn man die Kommas untereinander setzt, werden die Stellenwerte automatisch ausgerichtet." },
        { id: "potenze10", label: "· und : mit 10, 100, 1000", x: 50, y: 34, color: "#f97316", html: "Das Komma wandert nach rechts (·) oder nach links (:) um so viele Stellen, wie Nullen da sind.", why: "Mit 10 zu multiplizieren macht jede Ziffer 10-mal so groß: Jede Ziffer „steigt“ eine Stelle auf. In Wirklichkeit verschieben sich die Ziffern, aber es ist, als würde sich das Komma verschieben." },
        { id: "molt", label: "Multiplikation", x: 50, y: 62, color: "#dc2626", html: "Ohne Kommas multiplizieren, dann so viele Dezimalstellen abtrennen wie die Faktoren haben.", why: "2,3 · 1,4 = (23 : 10) · (14 : 10) = 322 : 100 = 3,22. Die Kommas wegzulassen heißt mit 10, 100 … zu multiplizieren; am Ende muss man diese Divisionen „zurückgeben“." },
        { id: "div", label: "Division", x: 80, y: 52, color: "#0ea5e9", html: "Komma im Quotienten, wenn das Komma des Dividenden überschritten wird; das Komma des Divisors wird mit der Konstanzregel entfernt.", why: "Konstanzregel: Wenn man Dividend und Divisor mit der gleichen Zahl multipliziert, ändert sich der Quotient nicht (6 : 1,5 = 60 : 15), wie bei gleichwertigen Brüchen." },
        { id: "zeri", label: "Endnullen", x: 80, y: 26, color: "#eab308", html: "2,5 = 2,50 = 2,500.", why: "Nullen nach der letzten Dezimalstelle anzuhängen heißt, 0 Hundertstel, 0 Tausendstel hinzuzufügen: Der Wert ändert sich nicht. Es ist, als würde man sagen 25/10 = 250/100." },
        { id: "stima", label: "Überschlag und Probe", x: 35, y: 86, color: "#14b8a6", html: "Erst ungefähr rechnen, danach die Umkehroperation.", why: "Auf ganze Zahlen zu runden zeigt sofort die Größenordnung: Wenn Überschlag und Ergebnis sehr verschieden sind, steht das Komma an der falschen Stelle." },
        { id: "storia", label: "Stevin und Napier", x: 70, y: 86, color: "#64748b", html: "Wer die Dezimalzahlen in Europa verbreitete.", why: "Simon Stevin erklärte 1585 (<i>De Thiende</i>) die Dezimalzahlen für den Handel; John Napier machte zu Beginn des 17. Jahrhunderts das Dezimaltrennzeichen populär. Schon früher benutzten sie chinesische und arabische Mathematiker wie al-Kaschi (1427)." }
      ],
      edges: [
        ["decimali", "posizione", "beruhen auf dem"],
        ["decimali", "zeri", "Eigenschaft"],
        ["posizione", "addsott", "richtet aus"],
        ["posizione", "potenze10", "erklärt"],
        ["potenze10", "molt", "benutzt bei der"],
        ["zeri", "div", "helfen bei der"],
        ["molt", "stima", "wird kontrolliert mit"],
        ["decimali", "storia", "verbreitet von"]
      ]
    }
  ],
  glossary: [
    { t: "Dezimalzahl", d: "Zahl mit einem ganzzahligen Teil und einem Dezimalteil, durch das Komma getrennt." },
    { t: "Zehntel", d: "Einer der 10 Teile der Einheit: 0,1." },
    { t: "Hundertstel", d: "Einer der 100 Teile der Einheit: 0,01." },
    { t: "Tausendstel", d: "Einer der 1000 Teile der Einheit: 0,001." },
    { t: "Untereinanderschreiben", d: "Zahlen so untereinander schreiben, dass die Ziffern gleicher Stelle ausgerichtet sind." },
    { t: "Konstanzregel (proprietà invariantiva)", d: "Multipliziert oder dividiert man Dividend und Divisor mit der gleichen Zahl, ändert sich der Quotient nicht." },
    { t: "Überschlag", d: "Ungefähre Rechnung, um das Ergebnis vorherzusagen." },
    { t: "Probe", d: "Kontrolle des Ergebnisses mit der Umkehroperation." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "15,6 + 4,75 = ?", answer: 20.35, explain: "15,60 + 4,75 = 20,35." },
      { type: "num", q: "20 − 7,85 = ?", answer: 12.15, explain: "20,00 − 7,85 = 12,15." },
      { type: "num", q: "0,38 · 1000 = ?", answer: 380, explain: "3 Stellen nach rechts: 380." },
      { type: "num", q: "125 : 100 = ?", answer: 1.25, explain: "2 Stellen nach links: 1,25." },
      { type: "num", q: "3,5 · 4 = ?", answer: 14, explain: "35 · 4 = 140; 1 Dezimalstelle → 14,0 = 14." },
      { type: "num", q: "0,6 · 0,7 = ?", answer: 0.42, explain: "6 · 7 = 42; 2 Dezimalstellen → 0,42." },
      { type: "num", q: "8,4 : 4 = ?", answer: 2.1, explain: "8 : 4 = 2, dann 4 : 4 = 1 nach dem Komma → 2,1." },
      { type: "num", q: "12 : 0,4 = ?", answer: 30, explain: "Konstanzregel: 120 : 4 = 30." },
      { type: "mc", q: "Wie viele Dezimalstellen hat das Ergebnis von 2,37 · 1,2?", options: ["1", "2", "3"], answer: 2, explain: "2 Stellen in 2,37 + 1 in 1,2 = 3 Dezimalstellen (2,844)." },
      { type: "tf", q: "Wenn man eine Zahl mit 0,5 multipliziert, erhält man eine größere Zahl.", answer: false, explain: "0,5 ist kleiner als 1: Man erhält die Hälfte der Zahl." },
      { type: "num", q: "Ein Heft kostet 1,75 €. Wie viel kosten 6 Hefte?", answer: 10.5, unit: "€", explain: "175 · 6 = 1050 → 10,50 €." },
      { type: "order", q: "Bringe die Schritte zur Berechnung von 2,3 · 1,4 in die richtige Reihenfolge.", items: ["Ich multipliziere ohne Kommas: 23 · 14 = 322", "Ich zähle die Dezimalstellen der Faktoren: 1 + 1 = 2", "Ich trenne 2 Stellen von rechts ab: 3,22", "Ich kontrolliere mit dem Überschlag: 2 · 1,5 ≈ 3"], explain: "Rechnen, Dezimalstellen zählen, Komma setzen, mit dem Überschlag überprüfen." }
    ],
    gen: [["decAdd", 2], ["decMul", 2]]
  }
});
