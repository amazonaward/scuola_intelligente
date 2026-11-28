TOPIC('de', {
  id: "l1-mat-equazioni-primo-grado",
  title: "Lineare Gleichungen",
  intro: "Ab wie vielen Telefonminuten lohnt sich ein Tarif im Vergleich zu einem anderen? Wann treffen sich zwei Züge, die in verschiedenen Städten abfahren? Das sind Fragen mit einer <b>Unbekannten</b>, und die Antwort führt über eine <b>Gleichung</b>. In der Mittelstufe hast du Zahlengleichungen kennengelernt; jetzt festigen wir sie mit den <b>Äquivalenzumformungen</b>, die wir sauber anwenden, ergänzen die <b>Bruchgleichungen</b> (mit Definitionsmenge) und lernen, reale Probleme in Gleichungen zu übersetzen.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Gleichungen und Äquivalenzumformungen",
      html: `<p>Eine <b>Gleichung</b> ist eine Gleichheit zwischen zwei Termen, die mindestens eine <b>Unbekannte</b> enthält und nur für bestimmte Werte davon wahr ist (die <b>Lösungen</b> oder Wurzeln). Sie ist <b>linear</b> (ersten Grades), wenn die Unbekannte nach dem Vereinfachen mit dem Exponenten 1 vorkommt.</p>
<p>Zwei Gleichungen sind <b>äquivalent</b>, wenn sie dieselben Lösungen haben. Lösen heißt, mit sicheren Umformungen zu immer einfacheren äquivalenten Gleichungen überzugehen:</p>
<ul>
<li><b>1. Prinzip</b>: Addiert oder subtrahiert man auf beiden Seiten <b>denselben Term</b>, erhält man eine äquivalente Gleichung. (Daraus folgt die Regel des Umstellens: Ein Glied wechselt mit umgekehrtem Vorzeichen auf die andere Seite.)</li>
<li><b>2. Prinzip</b>: Multipliziert oder dividiert man beide Seiten mit derselben Zahl <b>ungleich null</b>, erhält man eine äquivalente Gleichung.</li>
</ul>
<p>⚠️ Vorsicht beim 2. Prinzip mit <b>Termen, die x enthalten</b>: Wenn du durch x teilst, verlierst du die Möglichkeit, dass x = 0 eine Lösung ist; wenn du mit (x − 2) multiplizierst, kannst du die „Lösung“ x = 2 einführen, die vorher nicht da war. Mit Termen in x darf man nicht leichtfertig multiplizieren oder dividieren: Deshalb verlangen Bruchgleichungen die Definitionsmenge.</p>
<p>In <b>Normalform ax = b</b> ist die Gleichung: <b>eindeutig lösbar</b>, wenn a ≠ 0 (x = b/a), <b>unlösbar</b>, wenn a = 0 und b ≠ 0, <b>allgemeingültig (unbestimmt)</b>, wenn a = 0 und b = 0.</p>`
    },
    {
      type: "remember",
      title: "Die Methode für Gleichungen ohne Brüche mit x",
      html: `<ol>
<li>Löse die <b>Klammern</b> auf (Distributivgesetz).</li>
<li>Gibt es <b>Zahlen im Nenner</b>, multipliziere alles mit ihrem kgV.</li>
<li><b>Umstellen</b>: Glieder mit x nach links, Zahlen nach rechts.</li>
<li><b>Zusammenfassen</b>: Du erhältst ax = b.</li>
<li><b>Dividiere</b> durch a, falls a ≠ 0.</li>
<li><b>Probe</b>: Setze in die Ausgangsgleichung ein.</li>
</ol>`
    },
    {
      type: "example",
      title: "Geführtes Beispiel: Gleichung mit Zahlenbrüchen",
      html: `<p>Löse <b>(2x − 1)/3 − (x + 2)/2 = 1</b>.</p>
<ol>
<li>kgV(3, 2) = 6: Ich multipliziere alles mit 6 → 2(2x − 1) − 3(x + 2) = 6</li>
<li>Klammern (Achtung auf das Minuszeichen!): 4x − 2 − 3x − 6 = 6</li>
<li>Ich fasse zusammen: x − 8 = 6 → <b>x = 14</b></li>
<li>Probe: (28 − 1)/3 − (14 + 2)/2 = 9 − 8 = 1 ✔️</li>
</ol>`
    },
    {
      type: "svg",
      title: "Die Lösung ist ein Schnittpunkt",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="260" x2="560" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="260" x2="40" y2="30" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="187" x2="540" y2="113" stroke="#2563eb" stroke-width="4"/>
<line x1="40" y1="260" x2="540" y2="40" stroke="#ea580c" stroke-width="4"/>
<line x1="290" y1="150" x2="290" y2="260" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="290" cy="150" r="8" fill="#16a34a"/>
<text x="290" y="282" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">100 Minuten</text>
<text x="300" y="140" font-size="16" fill="#166534" font-weight="bold">gleiche Kosten: 15 €</text>
<text x="400" y="85" font-size="16" fill="#9a3412" font-weight="bold">Tarif B: 0,15 · m</text>
<text x="330" y="215" font-size="16" fill="#1d4ed8" font-weight="bold">Tarif A: 10 + 0,05 · m</text>
<text x="50" y="24" font-size="16" fill="#334155">Kosten (€)</text>
<text x="545" y="282" font-size="16" fill="#334155" text-anchor="end">Minuten pro Monat</text>
</svg>`,
      caption: "Die Gleichung 10 + 0,05m = 0,15m löst man, indem man den Punkt sucht, an dem sich die beiden Geraden schneiden."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Welcher Tarif lohnt sich?",
      html: `<p>Tarif <b>A</b> kostet 10 € im Monat plus 0,05 € pro Minute; Tarif <b>B</b> hat keine Grundgebühr, kostet aber 0,15 € pro Minute. Ab wie vielen Minuten lohnt sich A?</p>
<ul>
<li>Unbekannte: m = Minuten pro Monat.</li>
<li>Gleiche Kosten: 10 + 0,05m = 0,15m → 10 = 0,10m → <b>m = 100</b>.</li>
<li>Deutung: Unter 100 Minuten lohnt sich B, darüber A. Die Lösung der Gleichung ist der „Pareto-Punkt“ der Gleichheit, der <i>Break-even</i>-Punkt (Gewinnschwelle), ein Begriff, den jedes Unternehmen in der Wirtschaft verwendet.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Das Treffen der Züge",
      html: `<p>Zwei Bahnhöfe liegen 360 km auseinander. Um 9:00 Uhr fährt ein Zug vom ersten Bahnhof mit 80 km/h ab und ein anderer vom zweiten Richtung erster Bahnhof mit 100 km/h. Wann treffen sie sich?</p>
<ul>
<li>Unbekannte: t = vergangene Stunden. Zurückgelegte Strecken: 80t und 100t, und zusammen decken sie 360 km ab.</li>
<li>Gleichung: 80t + 100t = 360 → 180t = 360 → <b>t = 2 Stunden</b>: Sie treffen sich um 11:00 Uhr, 160 km vom ersten Bahnhof entfernt.</li>
<li>Probe: 160 + 200 = 360 ✔️</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Gleichungen ohne Bruchterme",
      questions: [
        { type: "num", q: "Löse: 3x − 7 = 11", answer: 6, explain: "3x = 18, also x = 6." },
        { type: "num", q: "Löse: x/4 + 1 = 4", answer: 12, explain: "x/4 = 3, also x = 12." },
        { type: "tf", q: "Um eine Gleichung zu lösen, darf man immer beide Seiten durch x teilen.", answer: false, explain: "Wenn x = 0, ist die Division nicht erlaubt, und man kann die Lösung x = 0 verlieren: zum Beispiel x² = 3x." }
      ]
    },
    {
      type: "text",
      title: "Bruchgleichungen: die Definitionsmenge",
      html: `<p>Eine Gleichung ist eine <b>Bruchgleichung</b>, wenn die Unbekannte im Nenner vorkommt. Der Ablauf ändert sich, weil man die Werte ausschließen muss, die einen Nenner null machen:</p>
<ol>
<li><b>Faktorisiere</b> die Nenner.</li>
<li>Schreibe die <b>Definitionsmenge</b> hin: Nenner ≠ 0.</li>
<li>Bestimme das kgV und <b>multipliziere beide Seiten</b> damit (erlaubt, weil das kgV mit den Existenzbedingungen nicht null ist): Die Nenner verschwinden.</li>
<li>Löse die entstandene Gleichung ohne Nenner.</li>
<li><b>Vergleiche mit der Definitionsmenge</b>: Die Lösung ist nur <b>zulässig</b>, wenn sie die Bedingungen nicht verletzt; sonst wird sie verworfen.</li>
</ol>
<p><b>Beispiel 1</b>: 1/(x − 1) + 1/(x + 1) = 4/(x² − 1). Definitionsmenge: x ≠ ±1. Ich multipliziere mit (x − 1)(x + 1): (x + 1) + (x − 1) = 4 → 2x = 4 → <b>x = 2</b>, zulässig.</p>
<p><b>Beispiel 2</b>: x/(x − 3) = 3/(x − 3). Definitionsmenge: x ≠ 3. Ich multipliziere mit (x − 3): x = 3. Aber x = 3 verletzt die Definitionsmenge! Die Lösung ist nicht zulässig: Die Gleichung ist <b>unlösbar</b>.</p>
<p><b>Beispiel 3</b>: x/(x − 2) = 2/(x − 2) + 1. Definitionsmenge: x ≠ 2. Ich multipliziere mit (x − 2): x = 2 + x − 2 → x = x: Identität. Lösungen sind <b>alle Zahlen außer 2</b>.</p>`
    },
    {
      type: "widget",
      title: "Wie viele Lösungen hat sie?",
      widget: "classify",
      options: { groups: ["Eine Lösung", "Unlösbar", "Unbestimmt (allgemeingültig)"], items: [
        ["3x − 5 = 2x + 1", 0],
        ["2(x + 1) = 2x + 3", 1],
        ["4x − 4 = 4(x − 1)", 2],
        ["x/(x − 3) = 3/(x − 3)", 1],
        ["x/2 + x/3 = 5", 0],
        ["x/(x − 2) = 2/(x − 2) + 1", 2],
        ["5 − x = x − 5", 0]
      ] },
      caption: "Forme zu ax = b um und denke bei Bruchgleichungen daran, die Definitionsmenge zu prüfen."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Das Wort „Algebra“",
      html: `<p>Das Wort <b>Algebra</b> stammt vom arabischen <i>al-jabr</i>, „Wiederherstellung“ (Ergänzung), und steht im Titel der Abhandlung, die der persische Mathematiker <b>Muhammad ibn Mūsā al-Chwārizmī</b> um 820 n. Chr. in Bagdad schrieb. Sein latinisierter Name, <i>Algoritmi</i>, hat das Wort <b>Algorithmus</b> hervorgebracht. Al-jabr bezeichnete das Hinüberbringen eines subtrahierten Glieds auf die andere Seite; <i>al-muqābala</i> („Ausgleichen“) das Zusammenfassen ähnlicher Glieder: Das sind unsere beiden Äquivalenzumformungen, aber ohne Symbole, alles in Worten!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Wer erfand die Buchstaben?",
      html: `<p>Jahrhundertelang wurden Gleichungen in Worten geschrieben. Der Franzose <b>François Viète</b> (1540–1603) war der Erste, der systematisch Buchstaben für Größen verwendete, auch für bekannte Daten. <b>René Descartes</b> legte im 17. Jahrhundert den heute üblichen Gebrauch fest: x, y, z für die Unbekannten und a, b, c für die bekannten Werte, während das Gleichheitszeichen = von dem Waliser <b>Robert Recorde</b> (1557) stammt.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, eine Gleichung zu lösen",
      intro: "Die mechanische Methode funktioniert, aber zu verstehen, warum sie funktioniert, ist etwas anderes. Hier sind historische und bildliche Methoden.",
      tabs: [
        {
          label: "🕌 Al-jabr und al-muqābala",
          html: `<p>Al-Chwārizmī löste durch Überlegungen über „Sachen“ (<i>shay</i>, unser x) und Zahlen. Beispiel, in unseren Symbolen: <b>5x − 3 = 2x + 9</b>.</p>
<ul>
<li><b>al-jabr</b> („ergänzen“): Das −3 macht die Seite „unvollständig“; ich addiere auf beiden Seiten 3: 5x = 2x + 12.</li>
<li><b>al-muqābala</b> („gegenüberstellen“): Ich subtrahiere auf beiden Seiten 2x: 3x = 12.</li>
<li>Ich dividiere: <b>x = 4</b>.</li>
</ul>
<p>Das ist genau das Umstellen der Glieder und das Zusammenfassen, das du machst, nur erzählt als „Wiederherstellen“ und „Ausgleichen“ eines Gleichgewichts.</p>`
        },
        {
          label: "🏺 Falscher Ansatz (Ägypten)",
          html: `<p>Die ägyptischen Schreiber lösten die Aufgabe „eine Menge und ihr Siebtel ergeben 19“ (x + x/7 = 19) mit der Methode des <b>falschen Ansatzes</b>: Wähle einen bequemen Wert (7), berechne das Ergebnis (7 + 1 = 8) und korrigiere es proportional.</p>
<ul>
<li>Ich probiere x = 7: 7 + 1 = 8, ich muss aber 19 erhalten.</li>
<li>Korrekturfaktor: 19/8. Also x = 7 · 19/8 = <b>133/8</b>.</li>
<li>Probe: 133/8 + 19/8 = 152/8 = 19 ✔️</li>
</ul>
<p>Das funktioniert, weil bei einer Gleichung ax = b das Ergebnis zu x <b>proportional</b> ist: Verdoppelt man x, verdoppelt sich das Ergebnis. Es ist die Methode „Versuch und Korrektur“, die heute noch (unter anderem Namen) in numerischen Algorithmen verwendet wird.</p>`
        },
        {
          label: "📈 Mit dem Graphen",
          html: `<p>Jede Seite einer linearen Gleichung ist eine <b>Gerade</b>, wenn du sie als Funktion von x betrachtest. Die Gleichung zu lösen heißt, das x zu finden, für das beide Geraden den <b>gleichen Wert</b> haben, also dort, wo sie sich schneiden (wie im Graphen der Telefontarife). Sind die Geraden parallel, treffen sie sich nie: Die Gleichung ist <b>unlösbar</b>; sind es dieselbe Gerade, treffen sie sich überall: Die Gleichung ist <b>unbestimmt (allgemeingültig)</b>.</p>`
        },
        {
          label: "🔁 Umkehroperationen",
          html: `<p>Kommt die Unbekannte nur einmal vor, kannst du die Abfolge der Operationen rückwärts „abwickeln“. 3x − 7 = 11 bedeutet: Ich starte bei x, multipliziere mit 3, ziehe 7 ab und erhalte 11. Ich gehe den Weg mit den Umkehroperationen zurück: 11 + 7 = 18, dann 18 : 3 = 6. Also <b>x = 6</b>.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [6, 11, 18] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der linearen Gleichungen",
      nodes: [
        { id: "eq", label: "Gleichung", x: 50, y: 6, color: "#6366f1", html: "Gleichheit, die nur für einige Werte der Unbekannten wahr ist.", why: "Sie drückt ein Problem in mathematischer Form aus: „Finde den Wert, der diese Bedingung erfüllt“. Beispiele findet man schon im Papyrus Rhind und auf babylonischen Tontafeln." },
        { id: "p1", label: "1. Prinzip", x: 20, y: 28, color: "#16a34a", html: "Man addiert oder subtrahiert auf beiden Seiten denselben Term.", why: "Sind zwei Größen gleich, bleiben sie gleich, wenn man dieselbe Größe hinzufügt: eine der „Gemeinsamen Begriffe“ Euklids. Es ist das al-jabr von al-Chwārizmī." },
        { id: "p2", label: "2. Prinzip", x: 80, y: 28, color: "#f59e0b", html: "Man multipliziert oder dividiert mit derselben Zahl ≠ 0.", why: "Mit 0 zu multiplizieren löscht jede Information; bei Termen in x kann Multiplizieren Scheinlösungen einführen, Dividieren kann Lösungen verlieren." },
        { id: "forma", label: "Normalform ax = b", x: 50, y: 50, color: "#a855f7", html: "Das Ergebnis der Umformungen.", why: "Von hier aus klassifiziert man mit dem Fall a ≠ 0 / a = 0 jede lineare Gleichung." },
        { id: "casi", label: "Drei Fälle", x: 20, y: 72, color: "#ef4444", html: "Eindeutig lösbar, unlösbar, unbestimmt.", why: "Geometrisch: sich schneidende Geraden, verschiedene parallele, zusammenfallende." },
        { id: "fratte", label: "Bruchgleichungen", x: 80, y: 62, color: "#0ea5e9", html: "Die Unbekannte steht im Nenner: Man braucht die Definitionsmenge.", why: "Durch null zu teilen ist unmöglich, also müssen die Werte, die einen Nenner null machen, vor dem Lösen ausgeschlossen werden." },
        { id: "acc", label: "Zulässigkeit", x: 80, y: 88, color: "#14b8a6", html: "Eine Lösung, die die Definitionsmenge verletzt, wird verworfen.", why: "Beim Multiplizieren mit dem kgV erhält man eine Gleichung, die „Scheinlösungen“ der Ausgangsgleichung haben kann." },
        { id: "probl", label: "Sachaufgaben", x: 40, y: 92, color: "#22c55e", html: "Die Unbekannte wählen, übersetzen, lösen, deuten.", why: "Der grundlegende Schritt ist die Modellbildung: von der Alltagssprache zur algebraischen Sprache, mit Viète und Descartes." }
      ],
      edges: [
        ["eq", "p1", "wird umgeformt mit"],
        ["eq", "p2", "wird umgeformt mit"],
        ["p1", "forma", "führt zu"],
        ["p2", "forma", "führt zu"],
        ["forma", "casi", "entscheidet"],
        ["eq", "fratte", "wenn x im Nenner"],
        ["fratte", "acc", "Schlusskontrolle"],
        ["probl", "eq", "werden übersetzt in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Bruchgleichungen und Sachaufgaben",
      questions: [
        { type: "mc", q: "Die Gleichung x/(x − 3) = 3/(x − 3) hat als Lösungen …", options: ["x = 3", "keine Lösung", "alle Zahlen"], answer: 1, explain: "Man erhält x = 3, aber x = 3 macht den Nenner null: Die Lösung ist nicht zulässig, also ist die Gleichung unlösbar." },
        { type: "num", q: "Löse: 2/(x + 1) = 1", answer: 1, explain: "Mit x ≠ −1: 2 = x + 1, also x = 1." },
        { type: "num", q: "Das Dreifache einer Zahl, vermindert um 4, ist 26. Wie heißt die Zahl?", answer: 10, explain: "3x − 4 = 26 → 3x = 30 → x = 10." }
      ]
    }
  ],
  glossary: [
    { t: "Gleichung", d: "Gleichheit zwischen Termen, die nur für einige Werte der Unbekannten erfüllt ist." },
    { t: "Lösung (Wurzel)", d: "Wert der Unbekannten, der die Gleichung wahr macht." },
    { t: "Äquivalente Gleichungen", d: "Gleichungen mit denselben Lösungen." },
    { t: "Äquivalenzumformungen", d: "Regeln (Addition/Subtraktion und Multiplikation/Division mit einer Zahl ≠ 0), die eine Gleichung in eine äquivalente überführen." },
    { t: "Normalform", d: "Die Form ax = b, auf die man eine lineare Gleichung zurückführt." },
    { t: "Bruchgleichung", d: "Gleichung mit der Unbekannten im Nenner." },
    { t: "Definitionsmenge (Existenzbedingungen)", d: "Werte der Unbekannten, die man ausschließen muss, weil sie einen Nenner null machen." },
    { t: "Zulässige Lösung", d: "Lösung, die die Definitionsmenge respektiert." },
    { t: "Break-even", d: "Gewinnschwelle, an der zwei Kosten oder Kosten und Erlöse gleich sind." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Löse: 5(x − 2) − 3 = 2x + 8", answer: 7, explain: "5x − 13 = 2x + 8 → 3x = 21 → x = 7." },
      { type: "num", q: "Löse: (2x − 1)/3 − (x + 2)/2 = 1", answer: 14, explain: "Multipliziert man mit 6: 4x − 2 − 3x − 6 = 6 → x = 14." },
      { type: "mc", q: "Die Gleichung 3(x − 1) + 2 = 3x − 1 ist …", options: ["eindeutig lösbar", "unlösbar", "unbestimmt (allgemeingültig)"], answer: 2, explain: "3x − 1 = 3x − 1: Sie führt auf 0x = 0, also unendlich viele Lösungen." },
      { type: "mc", q: "Die Gleichung x/(x − 4) = 4/(x − 4) hat …", options: ["die Lösung x = 4", "keine zulässige Lösung", "unendlich viele Lösungen"], answer: 1, explain: "Mit der Definitionsmenge x ≠ 4 erhält man durch Multiplizieren mit (x − 4) x = 4, was die Definitionsmenge verletzt: Die Gleichung ist unlösbar." },
      { type: "num", q: "Löse: 1/(x − 1) + 1/(x + 1) = 4/(x² − 1)", answer: 2, explain: "Definitionsmenge x ≠ ±1; 2x = 4 → x = 2, zulässig." },
      { type: "tf", q: "Beide Seiten mit einem Term zu multiplizieren, der x enthält, ist immer eine Äquivalenzumformung.", answer: false, explain: "Kann der Term null werden, können Scheinlösungen entstehen: Deshalb prüft man die Definitionsmenge." },
      { type: "num", q: "Zwei Züge fahren gleichzeitig von zwei 450 km entfernten Bahnhöfen aufeinander zu, mit 70 km/h und 80 km/h. Nach wie vielen Stunden treffen sie sich?", answer: 3, unit: "h", explain: "(70 + 80)t = 450 → t = 3." },
      { type: "order", q: "Bringe die Schritte für eine Bruchgleichung in die richtige Reihenfolge.", items: ["Nenner faktorisieren", "Definitionsmenge hinschreiben", "Mit dem kgV multiplizieren", "Die Gleichung ohne Nenner lösen", "Die Lösung mit der Definitionsmenge prüfen"], explain: "Die Definitionsmenge wird zuerst hingeschrieben, die Prüfung der Zulässigkeit schließt das Verfahren ab." },
      { type: "text", q: "Wie hieß der persische Mathematiker, von dem die Wörter „Algebra“ und „Algorithmus“ abgeleitet sind?", answer: ["al-khwarizmi", "al khwarizmi", "khwarizmi", "alkhwarizmi", "al-khuwarizmi", "al khuwarizmi", "al-chwarizmi", "al chwarizmi", "chwarizmi", "al-chwārizmī", "al-khwārizmī", "muhammad al-chwarizmi", "al-kwarizmi", "al kwarizmi", "kwarizmi", "alchwarizmi"], explain: "Al-Chwārizmī (9. Jahrhundert): al-jabr steht im Titel seines Werks, sein latinisierter Name ergibt „Algorithmus“." },
      { type: "num", q: "Tarif A: 12 € Grundgebühr + 0,04 €/min. Tarif B: 0,10 €/min. Bei wie vielen Minuten kosten beide Tarife gleich viel?", answer: 200, unit: "min", explain: "12 + 0,04m = 0,10m → 12 = 0,06m → m = 200." }
    ]
  }
});
