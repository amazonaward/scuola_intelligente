TOPIC('de', {
  id: "l1-mat-frazioni-algebriche",
  title: "Bruchterme",
  intro: "Zahlenbrüche kennst du seit Jahren. Was passiert, wenn Zähler und Nenner <b>Buchstaben</b> enthalten? Dann entstehen die <b>Bruchterme</b>: Sie dienen dazu, Durchschnittsgeschwindigkeiten, elektrische Widerstände und Verhältnisse veränderlicher Größen zu beschreiben. Das Geheimnis ist nur eines: Alles, was du über Brüche weißt, gilt weiterhin, aber man muss auf einen Feind achten, den <b>Nenner, der null wird</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Was ist ein Bruchterm?",
      html: `<p>Ein <b>Bruchterm</b> ist ein Ausdruck der Form <b>A / B</b>, in dem A und B Polynome sind und B <b>nicht das Nullpolynom</b> ist. Zum Beispiel:</p>
<p style="text-align:center">(x + 1)/(x − 3) &nbsp;&nbsp;&nbsp; 5/(x² − 4) &nbsp;&nbsp;&nbsp; (a² + b)/(2a)</p>
<p>Ein Bruchterm ist nicht immer eine Zahl: Es hängt davon ab, welche Werte wir für die Buchstaben einsetzen. Und für manche Werte <b>existiert er nicht</b>: Die Division durch null ist unmöglich. Daher gilt:</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Definitionsmenge (Existenzbedingungen)</b>: Das sind die Werte der Buchstaben, für die der Nenner <b>ungleich null</b> ist. Man findet sie, indem man <b>Nenner ≠ 0</b> setzt.</p>
<p>Beispiel: Für 5/(x² − 4) verlangt man x² − 4 ≠ 0, also (x − 2)(x + 2) ≠ 0, daher <b>x ≠ 2 und x ≠ −2</b>. Der Trick ist immer derselbe: <b>Faktorisiere den Nenner</b> und schließe die Werte aus, die einen Faktor null machen (nach dem Satz vom Nullprodukt).</p>
<p>Man schreibt die Existenzbedingungen <b>vor</b> jeder Vereinfachung hin, denn Umformungen können das Problem „verschwinden“ lassen, ohne es zu lösen.</p>`
    },
    {
      type: "svg",
      title: "Die Lücke im Graphen",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="240" x2="560" y2="240" stroke="#475569" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="70" y1="270" x2="420" y2="40" stroke="#2563eb" stroke-width="4"/>
<circle cx="293" cy="176" r="9" fill="#f8fafc" stroke="#dc2626" stroke-width="4"/>
<line x1="293" y1="176" x2="293" y2="240" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="150" y1="176" x2="293" y2="176" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<text x="293" y="262" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">x = 2</text>
<text x="118" y="181" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">4</text>
<text x="430" y="40" font-size="16" fill="#1d4ed8" font-weight="bold">y = x + 2</text>
<text x="330" y="150" font-size="16" fill="#334155">bei x = 2 existiert der Bruch nicht</text>
<text x="300" y="25" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">y = (x² − 4)/(x − 2) = x + 2 mit x ≠ 2</text>
</svg>`,
      caption: "Der Bruch (x² − 4)/(x − 2) lässt sich zu x + 2 kürzen, aber sein Graph hat bei x = 2 eine Lücke: Das Kürzen darf die Existenzbedingungen nicht vergessen lassen."
    },
    {
      type: "text",
      title: "Einen Bruchterm kürzen",
      html: `<p>Wie bei Zahlen (15/35 = 3/5, indem man durch 5 teilt) kann man kürzen, indem man Zähler und Nenner durch einen <b>gemeinsamen Faktor</b> teilt. Aber Achtung: Man kürzt nur <b>Faktoren</b>, niemals <b>Glieder einer Summe</b>!</p>
<p><b>Vorgehen</b>:</p>
<ol>
<li>Faktorisiere Zähler und Nenner (Ausklammern, Binomische Formeln, Trinom …).</li>
<li>Schreibe die <b>Existenzbedingungen</b> am <b>ursprünglichen</b> faktorisierten Nenner hin.</li>
<li>Streiche gleiche Faktoren.</li>
</ol>
<p>Beispiel: <b>(x² − 4)/(x² − 2x)</b> = (x + 2)(x − 2)/[x(x − 2)] = <b>(x + 2)/x</b>, mit Existenzbedingungen <b>x ≠ 0 und x ≠ 2</b>.</p>
<p>⚠️ Typischer Fehler: (x + 2)/(x + 3) ist <b>nicht</b> gleich 2/3. Das „+“ verbindet x und 2: Das sind keine Faktoren. Probiere x = 1: 3/4 ≠ 2/3. Eine Zahlenprobe entlarvt sofort die meisten Fehler.</p>`
    },
    {
      type: "widget",
      title: "Ordne dem Bruch seine gekürzte Form zu",
      widget: "match",
      options: { pairs: [
        ["(x² − 9)/(x − 3)", "x + 3"],
        ["(x² − 2x)/x", "x − 2"],
        ["(2x + 4)/(x + 2)", "2"],
        ["(x² + 2x + 1)/(x + 1)", "x + 1"],
        ["(x² − 1)/(x² + x)", "(x − 1)/x"]
      ] },
      caption: "Faktorisiere, streiche gemeinsame Faktoren, denke an die Existenzbedingungen."
    },
    {
      type: "example",
      title: "Beispiel: Mit einem Trinom kürzen",
      html: `<p>Kürze <b>(x² − 5x + 6)/(x² − 4)</b>.</p>
<ul>
<li>Zähler: spezielles Trinom, Summe −5 und Produkt 6 → (x − 2)(x − 3).</li>
<li>Nenner: Differenz von Quadraten → (x − 2)(x + 2).</li>
<li>Existenzbedingungen: x ≠ 2 und x ≠ −2.</li>
<li>Ich kürze (x − 2): Ergebnis <b>(x − 3)/(x + 2)</b>.</li>
<li>Kontrolle mit x = 4: ursprünglich (16 − 20 + 6)/(16 − 4) = 2/12 = 1/6; gekürzt (4 − 3)/(4 + 2) = 1/6 ✔️</li>
</ul>`
    },
    {
      type: "text",
      title: "Multiplikation, Division und Potenz",
      html: `<p>Es gelten die Regeln der Zahlenbrüche:</p>
<ul>
<li><b>Produkt</b>: A/B · C/D = (A·C)/(B·D). Man faktorisiert und kürzt am besten <b>vor</b> dem Multiplizieren.</li>
<li><b>Quotient</b>: A/B : C/D = A/B · <b>D/C</b> (man multipliziert mit dem <b>Kehrwert</b>). Außerdem muss der Divisor ungleich null sein: <b>C ≠ 0</b>.</li>
<li><b>Potenz</b>: (A/B)ⁿ = Aⁿ/Bⁿ.</li>
</ul>
<p><b>Beispiel Produkt</b>: (x² − 1)/(x² + 2x) · x/(x + 1) = (x − 1)(x + 1)/[x(x + 2)] · x/(x + 1) = <b>(x − 1)/(x + 2)</b>, mit Existenzbedingungen x ≠ 0, −2, −1.</p>
<p><b>Beispiel Quotient</b>: x/(x − 2) : x²/(x² − 4) = x/(x − 2) · (x − 2)(x + 2)/x² = <b>(x + 2)/x</b>. Existenzbedingungen: x ≠ 2, −2 und auch x ≠ 0 (der Divisor x²/(x² − 4) darf nicht null sein, und x steht im Nenner).</p>`
    },
    {
      type: "text",
      title: "Addition und Subtraktion",
      html: `<p>Wie bei 1/6 + 1/4 braucht man <b>gleiche Nenner</b>: Man verwendet das <b>kgV</b> der <b>faktorisierten</b> Nenner.</p>
<ol>
<li>Faktorisiere die Nenner und schreibe die Existenzbedingungen hin.</li>
<li>Bestimme das kgV (gemeinsame und nicht gemeinsame Faktoren, mit dem größeren Exponenten).</li>
<li>Forme jeden Bruch um: Multipliziere den Zähler mit dem fehlenden Faktor.</li>
<li>Addiere die Zähler (Achtung auf die Vorzeichen vor den Klammern!).</li>
<li>Kürze, wenn möglich.</li>
</ol>
<p><b>Beispiel</b>: 1/(x − 1) + 1/(x + 1). Das kgV ist (x − 1)(x + 1) = x² − 1. Dann [(x + 1) + (x − 1)]/(x² − 1) = <b>2x/(x² − 1)</b>, mit Existenzbedingungen x ≠ ±1.</p>
<p><b>Beispiel mit Subtraktion</b>: 3/x − 2/(x + 1) = [3(x + 1) − 2x]/[x(x + 1)] = (3x + 3 − 2x)/[x(x + 1)] = <b>(x + 3)/[x(x + 1)]</b>. Das Minuszeichen ändert alle Glieder von −2x: Es zu vergessen ist ein klassischer Fehler!</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Existenzbedingungen und Kürzen",
      questions: [
        { type: "num", q: "Für welchen Wert von x existiert der Bruch 1/(x − 5) nicht?", answer: 5, explain: "Der Nenner wird für x = 5 null." },
        { type: "mc", q: "Die Existenzbedingungen von (x + 3)/(x² − 9) sind …", options: ["x ≠ 3 und x ≠ −3", "x ≠ 9", "nur x ≠ −3"], answer: 0, explain: "x² − 9 = (x − 3)(x + 3), das für x = 3 und für x = −3 null wird." },
        { type: "tf", q: "(x + 2)/(x + 3) = 2/3, weil man x kürzt.", answer: false, explain: "x ist ein Summand, kein Faktor: Man darf es nicht streichen. Mit x = 1 ergibt sich 3/4, nicht 2/3." }
      ]
    },
    {
      type: "example",
      title: "Praxisbeispiel: Hinfahrt mit 60 km/h, Rückfahrt mit 40",
      html: `<p>Du fährst mit 60 km/h in die Stadt und mit 40 km/h auf derselben Straße zurück. Wie groß ist die Durchschnittsgeschwindigkeit auf der gesamten Fahrt? Nicht 50! Ist die Strecke d km: Zeit Hinfahrt d/60, Zeit Rückfahrt d/40; Gesamtzeit <b>d/60 + d/40 = 5d/120 = d/24</b>. Die Durchschnittsgeschwindigkeit ist (2d)/(d/24) = <b>48 km/h</b>. Der Buchstabe d kürzt sich: Das Ergebnis hängt nicht von der Strecke ab. Allgemein ist die Durchschnittsgeschwindigkeit 2v₁v₂/(v₁ + v₂): ein Bruchterm im vollen Sinne (das <b>harmonische Mittel</b>).</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Parallelgeschaltete Widerstände",
      html: `<p>In der Physik entsprechen zwei <b>parallel</b> geschaltete Widerstände R₁ und R₂ einem Widerstand R mit <b>1/R = 1/R₁ + 1/R₂</b>. Addiert man die Brüche: 1/R = (R₂ + R₁)/(R₁R₂), woraus <b>R = R₁R₂/(R₁ + R₂)</b> folgt. Mit R₁ = 6 Ω und R₂ = 3 Ω: R = 18/9 = <b>2 Ω</b>. Die Parallelschaltung hat einen kleineren Widerstand als jeder der beiden: Es ist, als würde man auf der Autobahn eine zweite Spur öffnen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Der „Beweis“, dass 1 = 2",
      html: `<p>Nimm a = b. Multipliziere mit a: a² = ab. Subtrahiere b²: a² − b² = ab − b². Faktorisiere: (a + b)(a − b) = b(a − b). „Kürze“ (a − b): a + b = b, also 2b = b, daher <b>2 = 1</b>! Wo steckt der Betrug? Ist a = b, dann ist a − b = 0, und du hast durch null geteilt. Genau deshalb sind die <b>Existenzbedingungen</b> keine Formalität.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Ägypter und die Stammbrüche",
      html: `<p>Im <b>Papyrus Rhind</b> (Ägypten, ca. 1650 v. Chr.) steht eine Tabelle, die 2/n für ungerade n von 3 bis 101 als Summe von <b>Brüchen mit dem Zähler 1</b> schreibt: zum Beispiel 2/5 = 1/3 + 1/15. Die alten Ägypter verwendeten kaum andere Brüche (abgesehen von 2/3). Mit Brüchen rechnet die Menschheit also seit mindestens viertausend Jahren.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Bruchterme zu verstehen",
      intro: "Wenn dir die Buchstaben Angst machen, führe alles auf Zahlen zurück oder betrachte dieselbe Idee aus einem anderen Blickwinkel.",
      tabs: [
        {
          label: "🔢 Wie bei Zahlen",
          html: `<p>Um 84/126 zu kürzen, zerlegst du in Primfaktoren: 84 = 2²·3·7 und 126 = 2·3²·7. Du streichst 2·3·7, und es bleibt 2/3. Bei Polynomen machst du <b>dasselbe</b>: Zerlege in irreduzible Faktoren und streiche die gleichen.</p>
<p>Auch die Addition ist identisch: 1/6 + 1/4 → kgV 12 → 2/12 + 3/12 = 5/12. Ersetze 6 und 4 durch x − 1 und x + 1, und du hast die vorhin gesehene Summe. Wenn du bei einem Schritt unsicher bist, <b>probiere es mit einer Zahl</b> anstelle von x.</p>`
        },
        {
          label: "✨ Mit 1 multiplizieren",
          html: `<p>Warum multiplizieren wir beim Addieren den Zähler mit dem „fehlenden Faktor“? Weil wir den Bruch mit einer <b>verkleideten 1</b> multiplizieren:</p>
<p style="text-align:center">1/(x − 1) = 1/(x − 1) · <b>(x + 1)/(x + 1)</b> = (x + 1)/(x² − 1)</p>
<p>(x + 1)/(x + 1) ist gleich 1 (für x ≠ −1), also ändert sich der Wert des Bruchs nicht: nur seine „Kleidung“. Das ist das Erweitern und Kürzen: Multipliziert oder dividiert man Zähler und Nenner mit demselben Polynom ungleich null, ändert sich der Bruch nicht.</p>`
        },
        {
          label: "🧪 Der Zahlentest",
          html: `<p>Du hast gekürzt und bist unsicher? Wähle einen Wert für x, der die Existenzbedingungen erfüllt, und berechne <b>sowohl den Ausgangsbruch als auch das Ergebnis</b>.</p>
<p>(x² − 1)/(x + 1) → x − 1. Probiere x = 5: (25 − 1)/6 = 24/6 = 4 und 5 − 1 = 4 ✔️. Probiere nun x = −1: Der Ausgangsbruch existiert nicht, während x − 1 den Wert −2 hat: Deshalb muss man die Existenzbedingungen angeben. Der Test ist kein Beweis, aber wenn die beiden Zahlen verschieden sind, hast du sicher einen Fehler gemacht.</p>`,
          widget: "numberLine",
          options: { min: -5, max: 10, step: 1, marks: [-1, 5] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Bruchterme",
      nodes: [
        { id: "frnum", label: "Zahlenbruch", x: 15, y: 8, color: "#64748b", html: "Verhältnis zweier ganzer Zahlen (Nenner ≠ 0).", why: "Brüche entstehen, um zu messen und zu teilen: Schon die Ägypter (Papyrus Rhind) und die Babylonier verwendeten sie. Der Nenner darf nicht null sein, weil keine Zahl mit 0 multipliziert eine Zahl ungleich 0 ergibt." },
        { id: "fralg", label: "Bruchterm", x: 55, y: 8, color: "#6366f1", html: "Verhältnis A/B zweier Polynome, mit B ungleich null.", why: "Hängt eine Größe von einer Variablen ab (Geschwindigkeit, Widerstand, Durchschnittspreis), wird das Verhältnis zu einem Bruch mit Buchstaben." },
        { id: "ce", label: "Existenzbedingungen", x: 85, y: 30, color: "#ef4444", html: "Werte der Buchstaben, die den Nenner nicht null machen.", why: "Durch null zu teilen ist unmöglich: a/0 = c würde c·0 = a bedeuten, aber c·0 = 0 für jedes c; also wäre a = 0, und jeder Wert von c käme infrage." },
        { id: "scomp", label: "Faktorisierung", x: 20, y: 38, color: "#16a34a", html: "Zähler und Nenner in Faktoren zerlegen.", why: "Man kürzt Faktoren, nicht Glieder: Nur ein Produkt kann man durch einen gemeinsamen Faktor teilen." },
        { id: "inv", label: "Erweitern und Kürzen", x: 55, y: 42, color: "#f59e0b", html: "Multipliziert oder dividiert man Zähler und Nenner mit demselben Faktor ≠ 0, ändert sich der Bruch nicht.", why: "Es beruht darauf, dass a/a = 1 und 1 das neutrale Element der Multiplikation ist." },
        { id: "sempl", label: "Kürzen", x: 20, y: 68, color: "#22c55e", html: "Man streicht die gemeinsamen Faktoren.", why: "Man wendet das Erweitern und Kürzen an, indem man durch den gemeinsamen Faktor teilt." },
        { id: "mcm", label: "kgV und Addition", x: 55, y: 70, color: "#a855f7", html: "Man bringt die Brüche auf denselben Nenner.", why: "Man kann nur Größen „derselben Einheit“ addieren, wie 3 Äpfel + 2 Äpfel: Der Nenner ist die Einheit." },
        { id: "prod", label: "Produkt und Quotient", x: 85, y: 70, color: "#0ea5e9", html: "Man multipliziert mit dem Kehrwert.", why: "Durch C/D zu teilen entspricht der Multiplikation mit D/C, weil C/D · D/C = 1." },
        { id: "app", label: "Anwendungen", x: 50, y: 94, color: "#14b8a6", html: "Durchschnittsgeschwindigkeit, Parallelwiderstände, Bruchgleichungen.", why: "Bruchterme verbinden die Algebra mit der Physik und bereiten die Bruchgleichungen und die rationalen Funktionen vor." }
      ],
      edges: [
        ["frnum", "fralg", "wird verallgemeinert zu"],
        ["fralg", "ce", "erfordert"],
        ["fralg", "inv", "hat das"],
        ["scomp", "sempl", "ermöglicht"],
        ["inv", "sempl", "begründet"],
        ["inv", "mcm", "begründet"],
        ["fralg", "prod", "Operationen"],
        ["mcm", "app", "verwendet in"],
        ["prod", "app", "verwendet in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Rechenoperationen",
      questions: [
        { type: "num", q: "Der Wert von 5/x + 5/x für x = 5 ist …", answer: 2, explain: "5/5 + 5/5 = 1 + 1 = 2." },
        { type: "mc", q: "Der Kehrwert von (x − 1)/(x + 2) ist …", options: ["(x + 2)/(x − 1)", "(1 − x)/(x + 2)", "(x − 1)/(x + 2)"], answer: 0, explain: "Den Kehrwert erhält man, indem man Zähler und Nenner vertauscht." },
        { type: "num", q: "Berechne (x² − 4)/(x − 2) für x = 7.", answer: 9, explain: "Es lässt sich zu x + 2 kürzen; für x = 7 ist der Wert 9. Kontrolle: 45/5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Bruchterm", d: "Verhältnis A/B zweier Polynome, wobei B nicht das Nullpolynom ist." },
    { t: "Existenzbedingungen (Definitionsmenge)", d: "Werte der Buchstaben, für die der Nenner ungleich null ist." },
    { t: "Kürzen", d: "Division von Zähler und Nenner durch einen gemeinsamen Faktor." },
    { t: "kgV", d: "Kleinstes gemeinsames Vielfaches der Nenner, bei der Addition als Hauptnenner verwendet." },
    { t: "Kehrwert", d: "Der Bruch, den man durch Vertauschen von Zähler und Nenner erhält." },
    { t: "Erweitern und Kürzen", d: "Der Wert eines Bruchs ändert sich nicht, wenn man Zähler und Nenner mit demselben Faktor ungleich null multipliziert oder dividiert." },
    { t: "Harmonisches Mittel", d: "Der Kehrwert des Mittelwerts der Kehrwerte: zum Beispiel die Durchschnittsgeschwindigkeit bei Hin- und Rückfahrt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Die Existenzbedingungen von (x + 1)/(x² − 4x + 3) sind …", options: ["x ≠ 1 und x ≠ 3", "x ≠ −1", "nur x ≠ 3"], answer: 0, explain: "x² − 4x + 3 = (x − 1)(x − 3), null für x = 1 und x = 3." },
      { type: "mc", q: "Kürzt man (x² − 6x + 9)/(x² − 9), erhält man …", options: ["(x − 3)/(x + 3)", "(x + 3)/(x − 3)", "−6x/(−9)"], answer: 0, explain: "(x − 3)²/[(x − 3)(x + 3)] = (x − 3)/(x + 3), mit x ≠ ±3." },
      { type: "num", q: "Berechne (x² − 1)/(x + 1) für x = 10.", answer: 9, explain: "Es lässt sich zu x − 1 = 9 kürzen. Kontrolle: 99/11 = 9." },
      { type: "tf", q: "(x + 5)/5 = x + 1.", answer: false, explain: "Man kann nur kürzen, wenn 5 ein Faktor des gesamten Zählers ist: (x + 5)/5 = x/5 + 1." },
      { type: "mc", q: "1/(x − 2) + 1/(x + 2) =", options: ["2x/(x² − 4)", "2/(x² − 4)", "2/(2x)"], answer: 0, explain: "[(x + 2) + (x − 2)]/[(x − 2)(x + 2)] = 2x/(x² − 4)." },
      { type: "num", q: "Ein Auto fährt eine Strecke mit 30 km/h und auf der Rückfahrt mit 60 km/h. Wie groß ist die Durchschnittsgeschwindigkeit auf der gesamten Strecke in km/h?", answer: 40, unit: "km/h", explain: "2·30·60/(30 + 60) = 3600/90 = 40." },
      { type: "order", q: "Bringe die Schritte zum Addieren zweier Bruchterme in die richtige Reihenfolge.", items: ["Nenner faktorisieren und Existenzbedingungen hinschreiben", "Das kgV bestimmen", "Die Brüche auf den Hauptnenner bringen", "Die Zähler addieren", "Das Ergebnis kürzen"], explain: "Die Existenzbedingungen schreibt man immer vor jeder Umformung hin." },
      { type: "text", q: "Wie heißen die Bedingungen, die die Werte ausschließen, die den Nenner null machen?", answer: ["Existenzbedingungen", "Definitionsmenge", "Definitionsbereich", "Definitionslücke", "existenzbedingungen", "definitionsmenge", "definitionsbereich", "Existenzbedingung", "existenzbedingung", "Definitionsmenge des Terms"], explain: "Es sind die Existenzbedingungen (die Definitionsmenge)." },
      { type: "mc", q: "Durch den Bruch A/B zu dividieren entspricht …", options: ["dem Multiplizieren mit B/A", "dem Multiplizieren mit A/B", "dem Subtrahieren von B/A"], answer: 0, explain: "Man multipliziert mit dem Kehrwert (mit A ≠ 0)." },
      { type: "num", q: "Zwei Widerstände von 6 Ω und 3 Ω sind parallel geschaltet. Wie groß ist der Ersatzwiderstand in Ohm?", answer: 2, unit: "Ω", explain: "R = 6·3/(6 + 3) = 2 Ω." }
    ]
  }
});
