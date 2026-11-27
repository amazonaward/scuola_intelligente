TOPIC('de', {
  id: "l1-mat-insiemi-logica",
  title: "Mengen und Logik",
  intro: "\"Alle Katzen sind Säugetiere; Mieze ist eine Katze; also ist Mieze ein Säugetier.\" Richtig zu argumentieren ist keine geheimnisvolle Kunst: Es folgt klaren Regeln. In dieser Lektion lernen wir die Sprache kennen, mit der die Mathematik die Welt ordnet, die <b>Mengen</b>, und die, mit der sie argumentiert, die <b>Logik</b>: Aussagen, Junktoren, Implikationen und Quantoren. Es sind die Werkzeuge, die du in der gesamten Mathematik des Gymnasiums brauchen wirst, aber auch im Recht, in der Informatik und im Alltag (zum Beispiel, um eine falsche Argumentation auseinanderzunehmen).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Was eine Menge ist",
      html: `<p>Eine <b>Menge</b> ist eine wohldefinierte Ansammlung von Objekten, den <b>Elementen</b>: Bei einem gegebenen Objekt muss sich ohne Mehrdeutigkeit entscheiden lassen, ob es zur Menge gehört oder nicht. \"Die geraden Zahlen kleiner als 10\" ist eine Menge; \"die schönen Filme\" nicht, weil \"schön\" subjektiv ist.</p>
<p>Schreibweise: Mengen bezeichnet man mit Großbuchstaben (A, B, C ...), Elemente mit Kleinbuchstaben. Man schreibt:</p>
<ul>
<li><b>a ∈ A</b>: a <b>gehört</b> zu A; <b>a ∉ A</b>: gehört nicht dazu.</li>
<li><b>∅</b>: die <b>leere Menge</b>, ohne Elemente (zum Beispiel die reellen Lösungen von x² = −1).</li>
<li>Die Zahlenmengen: ℕ (natürliche), ℤ (ganze), ℚ (rationale), ℝ (reelle Zahlen).</li>
</ul>
<p>Es gibt drei Arten, eine Menge <b>anzugeben</b>:</p>
<ol>
<li><b>Aufzählung</b>: A = {2, 4, 6, 8}. Die Reihenfolge spielt keine Rolle, und Elemente wiederholen sich nicht: {1, 2, 3} = {3, 2, 1} = {1, 1, 2, 3}.</li>
<li><b>Beschreibende (charakteristische) Eigenschaft</b>: A = {x ∈ ℕ | x ist gerade und x &lt; 10}. Man liest \"x, für die gilt\".</li>
<li><b>Euler-Venn-Diagramm</b>: eine geschlossene Linie, die ihre Elemente umschließt. Es wurde von Leonhard Euler (1768) verwendet und von John Venn (1880) systematisiert.</li>
</ol>
<p>Eine Menge ist <b>endlich</b>, wenn sie eine endliche Zahl von Elementen hat (ihre <b>Mächtigkeit</b> |A| ist diese Zahl), sonst <b>unendlich</b> (ℕ, ℤ, ℝ ...). Georg Cantor (1845-1918) begründete die Mengenlehre und zeigte, dass auch Unendlichkeiten verschieden \"groß\" sein können: ℕ und ℝ sind beide unendlich, aber nicht gleich groß.</p>`
    },
    {
      type: "text",
      title: "Teilmengen",
      html: `<p>B ist eine <b>Teilmenge</b> von A (B ⊆ A), wenn <b>jedes</b> Element von B auch zu A gehört. Ist zusätzlich B ≠ A, ist B eine <b>echte</b> Teilmenge (B ⊂ A).</p>
<p>Beispiel: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Auch {2, 4} ⊂ {1, 2, 3, 4}.</p>
<ul>
<li>Die leere Menge ist Teilmenge <b>jeder</b> Menge (∅ ⊆ A: Es gibt keine Elemente, die die Bedingung verletzen).</li>
<li>Jede Menge ist Teilmenge ihrer selbst (A ⊆ A).</li>
<li>Zwei Mengen sind <b>gleich</b>, wenn A ⊆ B und B ⊆ A, also wenn sie dieselben Elemente haben.</li>
</ul>
<p>Die Menge <b>aller Teilmengen</b> von A heißt <b>Potenzmenge</b> 𝒫(A). Hat A n Elemente, hat 𝒫(A) <b>2<sup>n</sup></b>: Für jedes Element wählen wir \"ist dabei\" oder \"ist nicht dabei\". Für A = {a, b, c} sind die Teilmengen 2³ = 8: ∅, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}.</p>
<p>Achtung, verwechsle ∈ und ⊂ nicht: 2 ∈ {1, 2, 3} (2 ist ein <i>Element</i>), {2} ⊂ {1, 2, 3} (die Menge {2} ist eine <i>Teilmenge</i>).</p>`
    },
    {
      type: "svg",
      title: "Mengenoperationen mit Venn-Diagrammen",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="20" width="570" height="270" fill="none" stroke="#475569" stroke-width="2"/>
<text x="22" y="46" font-size="16" fill="#475569" font-weight="bold">U (Grundmenge)</text>
<circle cx="230" cy="165" r="95" fill="#3b82f6" fill-opacity="0.35" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="350" cy="165" r="95" fill="#f59e0b" fill-opacity="0.35" stroke="#b45309" stroke-width="3"/>
<text x="165" y="170" font-size="22" fill="#1e3a8a" font-weight="bold">A \\ B</text>
<text x="290" y="170" font-size="20" fill="#1f2937" font-weight="bold">A ∩ B</text>
<text x="370" y="170" font-size="22" fill="#78350f" font-weight="bold">B \\ A</text>
<text x="190" y="80" font-size="22" fill="#1d4ed8" font-weight="bold">A</text>
<text x="380" y="80" font-size="22" fill="#b45309" font-weight="bold">B</text>
<text x="480" y="130" font-size="16" fill="#1f2937">A ∪ B: der ganze gefärbte Teil</text>
<text x="480" y="160" font-size="16" fill="#1f2937">A ∩ B: gemeinsamer Teil</text>
<text x="480" y="190" font-size="16" fill="#1f2937">A \\ B: nur in A</text>
<text x="480" y="220" font-size="16" fill="#1f2937">Komplement: außerhalb von A</text>
</svg>`,
      caption: "Vereinigung (alles, was in A oder in B liegt), Schnitt (was in beiden liegt), Differenz (in A, aber nicht in B) und Komplement (in der Grundmenge, aber nicht in A)."
    },
    {
      type: "text",
      title: "Die Mengenoperationen",
      html: `<p>Seien A und B zwei Mengen, die in einer <b>Grundmenge</b> U enthalten sind.</p>
<ul>
<li><b>Vereinigung</b> A ∪ B = {x | x ∈ A <b>oder</b> x ∈ B} (das \"oder\" ist <i>einschließend</i>: Es ist auch in Ordnung, wenn das Element in beiden liegt).</li>
<li><b>Schnittmenge</b> A ∩ B = {x | x ∈ A <b>und</b> x ∈ B}. Ist A ∩ B = ∅, sind die beiden Mengen <b>disjunkt</b>.</li>
<li><b>Differenz</b> A \\ B = {x | x ∈ A und x ∉ B}.</li>
<li><b>Komplement</b> von A bezüglich U: Ā = U \\ A = {x ∈ U | x ∉ A}.</li>
<li><b>Kartesisches Produkt</b> A × B = {(a, b) | a ∈ A, b ∈ B}: die Menge der <i>geordneten</i> Paare. Ist |A| = m und |B| = n, dann ist |A × B| = m·n. Es ist nach René Descartes (lateinisch Cartesius) benannt, der mit dem kartesischen Koordinatensystem jedem Punkt ein Zahlenpaar zuordnete (ℝ × ℝ).</li>
</ul>
<p>Nützliche Eigenschaften:</p>
<ul>
<li>Kommutativ- und Assoziativgesetz für ∪ und ∩; Distributivgesetz: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C);</li>
<li><b>De Morgansche Gesetze</b>: Das Komplement von A ∪ B ist Ā ∩ B̄; das Komplement von A ∩ B ist Ā ∪ B̄ (Augustus De Morgan, 1806-1871);</li>
<li><b>Inklusions-Exklusions-Formel</b> für endliche Mengen: |A ∪ B| = |A| + |B| − |A ∩ B| (man zieht den Schnitt ab, sonst würde er doppelt gezählt).</li>
</ul>
<p>Eine <b>Zerlegung</b> (Partition) von A ist eine Familie nichtleerer, paarweise disjunkter Teilmengen, deren Vereinigung A ist: Zum Beispiel wird ℤ in gerade und ungerade Zahlen zerlegt.</p>`
    },
    {
      type: "example",
      title: "Beispiel: die Umfrage zu Freizeitaktivitäten",
      html: `<p>In einer Klasse mit 28 Schülern treiben 15 Sport (S), 12 spielen ein Instrument (M) und 6 tun beides. Wie viele tun weder das eine noch das andere?</p>
<ol>
<li>|S ∪ M| = |S| + |M| − |S ∩ M| = 15 + 12 − 6 = <b>21</b>.</li>
<li>Weder das eine noch das andere tun: 28 − 21 = <b>7</b> Schüler.</li>
<li>Nur Sport: 15 − 6 = 9; nur Musik: 12 − 6 = 6.</li>
</ol>
<p>Kontrolle: 9 + 6 + 6 + 7 = 28 ✔. Hätten wir einfach 15 + 12 = 27 addiert, hätten wir die 6, die beides tun, doppelt gezählt: Das ist der klassische Fehler bei Umfragen.</p>`
    },
    {
      type: "widget",
      title: "Welcher Bereich des Diagramms?",
      widget: "classify",
      options: { groups: ["Nur A (Vielfache von 2)", "Nur B (Vielfache von 3)", "Sowohl in A als auch in B", "Weder in A noch in B"], items: [
        ["1", 3], ["2", 0], ["3", 1], ["4", 0], ["5", 3], ["6", 2],
        ["8", 0], ["9", 1], ["10", 0], ["11", 3], ["12", 2], ["7", 3]
      ] },
      caption: "Mit A = Vielfache von 2 und B = Vielfache von 3 zwischen 1 und 12: Der Schnitt enthält die Vielfachen von 6."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Mengen",
      questions: [
        { type: "num", q: "A = {1, 2, 3, 4} und B = {3, 4, 5}. Wie viele Elemente hat A ∪ B?", answer: 5, explain: "A ∪ B = {1, 2, 3, 4, 5}: 5 Elemente (4 + 3 − 2 = 5)." },
        { type: "num", q: "Wie viele Teilmengen hat eine Menge mit 4 Elementen?", answer: 16, explain: "2⁴ = 16, einschließlich ∅ und der Menge selbst." },
        { type: "mc", q: "Welche Aussage ist richtig?", options: ["2 ⊂ {1, 2, 3}", "{2} ⊂ {1, 2, 3}", "{2} ∈ {1, 2, 3}"], answer: 1, explain: "{2} ist eine Menge, die in {1, 2, 3} enthalten ist, also eine Teilmenge; 2 ist ein Element." }
      ]
    },
    {
      type: "text",
      title: "Aussagen und logische Junktoren",
      html: `<p>Eine <b>Aussage</b> ist eine Behauptung, von der sich ohne Mehrdeutigkeit sagen lässt, dass sie <b>wahr</b> (W) oder <b>falsch</b> (F) ist. \"7 ist eine Primzahl\" (W) und \"8 ist ungerade\" (F) sind Aussagen. \"Wie spät ist es?\" und \"x + 1 = 5\" (solange wir nicht wissen, wer x ist) nicht. Letzteres ist ein <b>Prädikat</b> (eine Aussageform): Es wird zur Aussage, wenn man für x einen Wert einsetzt oder einen Quantor verwendet.</p>
<p>Mit den <b>Junktoren</b> bildet man zusammengesetzte Aussagen, deren Wahrheitswert nur von dem der Teile abhängt:</p>
<table>
<tr><th>Name</th><th>Symbol</th><th>Man liest</th><th>Wahr, wenn ...</th></tr>
<tr><td>Negation</td><td>¬p</td><td>nicht p</td><td>p falsch ist</td></tr>
<tr><td>Konjunktion</td><td>p ∧ q</td><td>p und q</td><td><b>beide</b> wahr sind</td></tr>
<tr><td>Disjunktion</td><td>p ∨ q</td><td>p oder q (einschließend)</td><td>mindestens eine wahr ist</td></tr>
<tr><td>Implikation</td><td>p ⇒ q</td><td>wenn p, dann q</td><td>nur falsch ist, wenn p W und q F ist</td></tr>
<tr><td>Äquivalenz (Bijunktion)</td><td>p ⇔ q</td><td>p genau dann, wenn q</td><td>p und q denselben Wert haben</td></tr>
</table>
<p><b>Wahrheitstabelle</b> für p ⇒ q:</p>
<table>
<tr><th>p</th><th>q</th><th>p ⇒ q</th></tr>
<tr><td>W</td><td>W</td><td>W</td></tr>
<tr><td>W</td><td>F</td><td><b>F</b></td></tr>
<tr><td>F</td><td>W</td><td>W</td></tr>
<tr><td>F</td><td>F</td><td>W</td></tr>
</table>
<p>Die Implikation überrascht: Ist p falsch, ist \"p ⇒ q\" wahr, <i>egal</i> was q ist. Denk an ein Versprechen: \"Wenn es morgen regnet, bringe ich dir den Regenschirm.\" Regnet es nicht, habe ich das Versprechen in keinem Fall gebrochen. Die einzige Möglichkeit, mich zu widerlegen, ist, dass es regnet und ich ihn dir nicht bringe.</p>`
    },
    {
      type: "example",
      title: "Beispiel: Umkehrung, Kontraposition und Negation",
      html: `<p>Wir gehen aus von: <b>p ⇒ q</b> = \"Wenn eine Zahl ein Vielfaches von 6 ist, dann ist sie gerade\" (wahr).</p>
<ul>
<li><b>Umkehrung</b>: q ⇒ p = \"Wenn sie gerade ist, dann ist sie ein Vielfaches von 6\" → <b>falsch</b> (4 ist gerade, aber kein Vielfaches von 6).</li>
<li><b>Kontraposition</b>: ¬q ⇒ ¬p = \"Wenn eine Zahl nicht gerade (ungerade) ist, dann ist sie kein Vielfaches von 6\" → <b>wahr</b>. Die Kontraposition ist <b>immer äquivalent</b> zur ursprünglichen Implikation.</li>
<li><b>Negation</b> der Implikation: p ∧ ¬q = \"Sie ist ein Vielfaches von 6 und nicht gerade\" → falsch, wie es sein muss.</li>
</ul>
<p>Das erklärt zwei verschiedene Redeweisen:</p>
<ul>
<li>p ist eine <b>hinreichende</b> Bedingung für q (p ⇒ q): Ein Vielfaches von 6 zu sein genügt, um gerade zu sein;</li>
<li>q ist eine <b>notwendige</b> Bedingung für p: Ist sie nicht gerade, kann sie kein Vielfaches von 6 sein.</li>
</ul>
<p>Gelten beide Implikationen (p ⇔ q), ist p eine notwendige und hinreichende Bedingung für q. Beispiel: Eine Zahl ist durch 6 teilbar genau dann, wenn sie durch 2 und durch 3 teilbar ist.</p>`
    },
    {
      type: "text",
      title: "Tautologien, Widersprüche und das Schließen",
      html: `<p>Eine zusammengesetzte Aussage ist eine <b>Tautologie</b>, wenn sie für jeden Wahrheitswert der Teile wahr ist (p ∨ ¬p: \"Entweder es regnet oder es regnet nicht\"), ein <b>Widerspruch</b>, wenn sie immer falsch ist (p ∧ ¬p). Zwei Aussagen sind <b>logisch äquivalent</b>, wenn sie dieselbe Wahrheitstabelle haben. Wichtige Äquivalenzen:</p>
<ul>
<li>p ⇒ q ≡ ¬q ⇒ ¬p (Kontraposition);</li>
<li>p ⇒ q ≡ ¬p ∨ q;</li>
<li><b>De Morgan</b>: ¬(p ∧ q) ≡ ¬p ∨ ¬q und ¬(p ∨ q) ≡ ¬p ∧ ¬q. Beispiel: Die Negation von \"er ist groß und blond\" ist \"er ist nicht groß <i>oder</i> nicht blond\".</li>
</ul>
<p>Auf der Kontraposition beruht der <b>Beweis durch Widerspruch</b>: Um p zu beweisen, nimmt man ¬p an und gelangt zu einem Widerspruch. So bewiesen die alten Griechen, dass √2 nicht rational ist und dass es unendlich viele Primzahlen gibt.</p>
<p>Die <b>Syllogismen</b> des Aristoteles (4. Jh. v. Chr.) sind das erste System formaler Logik: \"Alle Menschen sind sterblich; Sokrates ist ein Mensch; also ist Sokrates sterblich\". In Mengen ausgedrückt: Ist M ⊆ S und s ∈ M, dann ist s ∈ S. Logik und Mengen sind zwei Seiten derselben Medaille: ∧ entspricht ∩, ∨ entspricht ∪, ¬ dem Komplement, ⇒ dem ⊆.</p>`
    },
    {
      type: "text",
      title: "Prädikate und Quantoren",
      html: `<p>Ein <b>Prädikat</b> P(x) ist ein Satz mit einer Variablen, der wahr oder falsch wird, wenn man x festlegt. Die <b>Quantoren</b> verwandeln ein Prädikat in eine Aussage:</p>
<ul>
<li><b>∀x P(x)</b>: \"für alle x gilt P(x)\" (Allquantor);</li>
<li><b>∃x P(x)</b>: \"es gibt mindestens ein x, für das P(x) gilt\" (Existenzquantor);</li>
<li><b>∃!x P(x)</b>: \"es gibt genau ein x\".</li>
</ul>
<p>Beispiele über ℝ: ∀x, x² ≥ 0 (wahr); ∃x, x² = 4 (wahr: x = 2 oder −2); ∃x, x² = −1 (falsch über ℝ); ∀x, x &gt; 3 (falsch: Das Gegenbeispiel x = 0 genügt).</p>
<p><b>Wie man sie negiert</b> (sehr wichtig):</p>
<ul>
<li>¬(∀x P(x)) ≡ ∃x ¬P(x): Um \"alle\" zu negieren, genügt <b>ein Gegenbeispiel</b>. Die Negation von \"alle Schwäne sind weiß\" ist \"es gibt mindestens einen nicht weißen Schwan\" (nicht \"alle Schwäne sind schwarz\"!). Schwarze Schwäne wurden tatsächlich von Europäern Ende des 17. Jahrhunderts in Australien entdeckt.</li>
<li>¬(∃x P(x)) ≡ ∀x ¬P(x): Um \"es gibt\" zu negieren, muss man zeigen, dass <b>kein</b> Element die Eigenschaft erfüllt.</li>
</ul>
<p>Eine einzelne numerische Überprüfung beweist nie eine Allaussage (\"es gilt für 1, 2, 3, 4 ..., also für alle\" ist kein Beweis), während ein Gegenbeispiel genügt, um sie zu widerlegen.</p>`
    },
    {
      type: "curiosity",
      title: "Das Russellsche Paradoxon",
      html: `<p>1901 entdeckte der Philosoph und Mathematiker Bertrand Russell ein Problem in der \"naiven\" Mengenlehre. Betrachte \"die Menge R aller Mengen, die sich <b>nicht</b> selbst enthalten\". Enthält R sich selbst? Wenn ja, dürfte sie sich der Definition nach nicht enthalten; wenn nein, müsste sie sich enthalten. Widerspruch! Eine lustige Version: \"In einem Land rasiert der Barbier alle und nur die Männer, die sich nicht selbst rasieren. Wer rasiert den Barbier?\" Das Paradoxon zwang die Mathematiker, die Theorie mit strengeren Regeln neu zu begründen (Zermelo-Fraenkel-Axiome). Es zeigt, dass auch die Mathematik Sorgfalt braucht, wenn es um \"Mengen aller Mengen\" geht.</p>`
    },
    {
      type: "curiosity",
      title: "Boole, die Logik und dein Smartphone",
      html: `<p>1854 veröffentlichte der englische Mathematiker George Boole <i>Die Gesetze des Denkens</i> (<i>The Laws of Thought</i>), in dem er zeigte, dass sich die Logik mit einer Algebra behandeln lässt: der heute so genannten <b>booleschen Algebra</b>, die nur zwei Werte (1 = wahr, 0 = falsch) und die Operationen AND, OR, NOT verwendet. 1937 erkannte Claude Shannon, dass sich elektrische Schalter genau wie die logischen Junktoren verhalten: Zwei Schalter <b>in Reihe</b> sind ein AND (der Strom fließt nur, wenn beide geschlossen sind), zwei <b>parallel</b> ein OR. Auf dieser Idee beruhen alle digitalen Schaltungen, von Taschenrechnern bis zu Computerprozessoren.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Logik zu verstehen",
      intro: "Wahrheitstabellen sind genau, aber abstrakt: Hier sind andere Bilder, um die Junktoren zu erkennen.",
      tabs: [
        {
          label: "💡 Schalter",
          html: `<p>Denk an eine Glühbirne und zwei Schalter p und q (geschlossen = wahr).</p>
<ul>
<li><b>p ∧ q</b>: Schalter <b>in Reihe</b>. Die Glühbirne leuchtet nur, wenn beide geschlossen sind.</li>
<li><b>p ∨ q</b>: Schalter <b>parallel</b>. Es genügt, dass einer geschlossen ist.</li>
<li><b>¬p</b>: ein \"umgekehrter\" Schalter, an, wenn p aus ist.</li>
</ul>
<p>Praktisch ist jede logische Formel eine Schaltung und umgekehrt. Probiere es aus, indem du die Schaltungen von ¬(p ∧ q) und von ¬p ∨ ¬q zeichnest: Sie verhalten sich gleich (De Morgan!).</p>`
        },
        {
          label: "🧮 Mit Mengen",
          html: `<p>Jedem Prädikat P(x) ordnen wir die Menge seiner Elemente zu, die es erfüllen, A = {x | P(x)}. Dann gilt: \"P und Q\" entspricht dem Schnitt A ∩ B; \"P oder Q\" der Vereinigung A ∪ B; \"nicht P\" dem Komplement Ā; \"P ⇒ Q\" der Tatsache, dass A ⊆ B. Zum Beispiel bedeutet \"alle Quadrate sind Rauten\", dass die Menge der Quadrate in der der Rauten enthalten ist: Du siehst es, wenn du einen Kreis in einen anderen zeichnest.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<ellipse cx="300" cy="130" rx="230" ry="105" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="140" rx="130" ry="65" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="300" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Rauten</text>
<text x="300" y="145" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Quadrate</text>
<text x="300" y="235" font-size="16" text-anchor="middle" fill="#1f2937">Quadrat ⇒ Raute, aber Raute ⇒ Quadrat ist falsch</text>
</svg>`
        },
        {
          label: "⚖️ Das Versprechen",
          html: `<p>Um zu verstehen, warum \"p ⇒ q\" wahr ist, wenn p falsch ist, denk an ein Versprechen: \"Wenn ich in der Prüfung eine 1 (die beste Note) bekomme, schenke ich dir ein Videospiel.\" Wann <b>breche</b> ich das Versprechen? Nur, wenn ich die beste Note bekomme und das Geschenk nicht kommt. Bekomme ich eine 2, bleibt das Versprechen wahr, was ich auch tue: Es wurde nicht widerlegt. Die Logik betrachtet eine Implikation nur dann als falsch, wenn der Fall \"Voraussetzung wahr, Folgerung falsch\" vorliegt.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mindmap zu Mengen und Logik",
      nodes: [
        { id: "insieme", label: "Menge", x: 25, y: 6, color: "#2563eb", html: "Wohldefinierte Ansammlung von Elementen.", why: "Cantor (1870-1890) führte die Mengen ein, um das Unendliche zu untersuchen. Heute sind sie die gemeinsame Sprache der gesamten Mathematik: Zahlen, Funktionen und Figuren sind Mengen mit einer Struktur." },
        { id: "operazioni", label: "Vereinigung, Schnitt, Differenz", x: 12, y: 32, color: "#16a34a", html: "Bilden neue Mengen aus bekannten.", why: "Sie folgen den Gesetzen der booleschen Algebra: Kommutativ-, Assoziativ-, Distributivgesetz und De Morgan. Boole (1854) entdeckte sie beim Studium der Logik." },
        { id: "cartesiano", label: "Kartesisches Produkt", x: 12, y: 60, color: "#f59e0b", html: "Geordnete Paare (a, b).", why: "Descartes (1637) ordnete jedem Punkt der Ebene ein Zahlenpaar zu. Funktionen und Relationen sind Teilmengen eines kartesischen Produkts." },
        { id: "proposizione", label: "Aussage", x: 72, y: 6, color: "#9333ea", html: "Satz, der wahr oder falsch ist, nicht beides.", why: "Satz vom Widerspruch und vom ausgeschlossenen Dritten, schon bei Aristoteles (4. Jh. v. Chr.): Für die klassische Logik ist jede Aussage W oder F." },
        { id: "connettivi", label: "Junktoren", x: 62, y: 32, color: "#ef4444", html: "¬, ∧, ∨, ⇒, ⇔ und Wahrheitstabellen.", why: "Der Wert einer zusammengesetzten Aussage hängt nur von den Werten der Teile ab (Wahrheitsfunktionalität). Frege und Peano (Ende des 19. Jh.) legten die modernen Symbole fest." },
        { id: "implicazione", label: "Implikation und Kontraposition", x: 85, y: 55, color: "#0ea5e9", html: "p ⇒ q ≡ ¬q ⇒ ¬p.", why: "Sie begründet den Beweis durch Widerspruch. Gilt p ⇒ q, ist p hinreichend und q notwendig: Die Umkehrung gilt im Allgemeinen nicht." },
        { id: "quantificatori", label: "Quantoren ∀, ∃", x: 55, y: 62, color: "#22c55e", html: "Verwandeln ein Prädikat in eine Aussage.", why: "Von Frege (1879) und Peano eingeführt. Einen ∀ zu negieren erfordert ein Gegenbeispiel: So schreitet die Wissenschaft voran (die schwarzen Schwäne widerlegten \"alle Schwäne sind weiß\")." },
        { id: "dimostrazione", label: "Beweis", x: 50, y: 88, color: "#64748b", html: "Kette von Schlüssen von Axiomen zu Sätzen.", why: "Die Elemente des Euklid (um 300 v. Chr.) sind das erste Werk, das von Axiomen ausgeht und Sätze mit den Regeln der Logik herleitet." }
      ],
      edges: [["insieme", "operazioni", "hat"], ["insieme", "cartesiano", "hat"], ["proposizione", "connettivi", "werden kombiniert durch"], ["connettivi", "implicazione", "umfasst"], ["proposizione", "quantificatori", "verallgemeinern"], ["operazioni", "connettivi", "entsprechen"], ["implicazione", "dimostrazione", "verwendet in"], ["quantificatori", "dimostrazione", "verwendet in"]]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>∪ = \"oder\" (einschließend), ∩ = \"und\", \\ = \"aber nicht\". |A ∪ B| = |A| + |B| − |A ∩ B|. Eine Menge mit n Elementen hat 2<sup>n</sup> Teilmengen.</li>
<li><b>p ⇒ q</b> ist <b>nur</b> falsch, wenn p wahr und q falsch ist. Sie ist äquivalent zur Kontraposition ¬q ⇒ ¬p, <b>nicht</b> zur Umkehrung q ⇒ p.</li>
<li><b>De Morgan</b>: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q.</li>
<li>Negationen: ¬(∀x P) ≡ ∃x ¬P; ¬(∃x P) ≡ ∀x ¬P.</li>
<li>Ein Gegenbeispiel widerlegt eine Allaussage; tausend Beispiele beweisen sie nicht.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Logik",
      questions: [
        { type: "mc", q: "Was ist die Negation von \"alle Schüler haben den Test bestanden\"?", options: ["Kein Schüler hat den Test bestanden", "Mindestens ein Schüler hat den Test nicht bestanden", "Alle Schüler haben den Test nicht bestanden"], answer: 1, explain: "Die Negation von ∀ ist ∃ mit negiertem Prädikat: Ein Schüler, der den Test nicht bestanden hat, genügt." },
        { type: "tf", q: "Ist p ⇒ q wahr, dann ist auch q ⇒ p wahr.", answer: false, explain: "Die Umkehrung ist nicht äquivalent: \"Wenn es regnet, ist die Straße nass\" bedeutet nicht \"Wenn die Straße nass ist, regnet es\"." },
        { type: "mc", q: "Die Aussage p ∧ q ist wahr, wenn ...", options: ["mindestens eine von p und q wahr ist", "p und q beide wahr sind", "p und q beide falsch sind"], answer: 1, explain: "Die Konjunktion (\"und\") verlangt, dass beide wahr sind." },
        { type: "mc", q: "Die Negation von \"x > 3 und x < 8\" ist ...", options: ["x ≤ 3 und x ≥ 8", "x ≤ 3 oder x ≥ 8", "x < 3 oder x > 8"], answer: 1, explain: "De Morgan: Die Negation eines \"und\" ist ein \"oder\" der Negationen. Die Negation von x > 3 ergibt x ≤ 3, die von x < 8 ergibt x ≥ 8." }
      ]
    }
  ],
  glossary: [
    { t: "Menge", d: "Wohldefinierte Ansammlung von Objekten, den Elementen." },
    { t: "Teilmenge", d: "B ⊆ A, wenn jedes Element von B zu A gehört." },
    { t: "Leere Menge", d: "Die Menge ∅ ohne Elemente; sie ist Teilmenge jeder Menge." },
    { t: "Vereinigung", d: "A ∪ B: die Elemente, die in A oder in B (oder in beiden) liegen." },
    { t: "Schnittmenge", d: "A ∩ B: die Elemente, die A und B gemeinsam sind." },
    { t: "Kartesisches Produkt", d: "A × B: die Menge der geordneten Paare (a, b) mit a in A und b in B." },
    { t: "Aussage", d: "Behauptung, von der man sagen kann, dass sie wahr oder falsch ist." },
    { t: "Junktor", d: "Logische Verknüpfung (nicht, und, oder, wenn ... dann, genau dann wenn), die Aussagen zusammensetzt." },
    { t: "Tautologie", d: "Zusammengesetzte Aussage, die immer wahr ist." },
    { t: "Kontraposition", d: "Die Aussage ¬q ⇒ ¬p, äquivalent zu p ⇒ q." },
    { t: "Quantor", d: "Symbol ∀ (für alle) oder ∃ (es gibt), das den Geltungsbereich eines Prädikats festlegt." },
    { t: "Gegenbeispiel", d: "Ein Fall, der eine Allaussage widerlegt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche der folgenden ist eine wohldefinierte Menge?", options: ["Die Primzahlen kleiner als 20", "Die schönsten Lieder", "Die sympathischen Schüler"], answer: 0, explain: "Nur die erste hat ein objektives Kriterium der Zugehörigkeit." },
      { type: "num", q: "A = {1, 2, 3, 4, 5, 6} und B = {4, 5, 6, 7, 8}. Wie viele Elemente hat A ∩ B?", answer: 3, explain: "A ∩ B = {4, 5, 6}: 3 Elemente." },
      { type: "num", q: "In einer Schule lernen 40 Schüler Französisch, 35 Spanisch und 15 beides. Wie viele Schüler lernen mindestens eine der beiden Sprachen?", answer: 60, explain: "|F ∪ S| = 40 + 35 − 15 = 60." },
      { type: "num", q: "Wie viele Teilmengen hat die Menge {a, b, c, d, e}?", answer: 32, explain: "2⁵ = 32." },
      { type: "num", q: "A hat 5 Elemente und B hat 4. Wie viele Elemente hat das kartesische Produkt A × B?", answer: 20, explain: "|A × B| = 5 × 4 = 20." },
      { type: "mc", q: "Die Implikation p ⇒ q ist falsch, wenn ...", options: ["p falsch und q wahr ist", "p wahr und q falsch ist", "p und q beide falsch sind"], answer: 1, explain: "Es ist der einzige Fall, in dem das Versprechen gebrochen wird." },
      { type: "tf", q: "Die Kontraposition von \"Wenn es regnet, nehme ich den Regenschirm\" ist \"Wenn ich den Regenschirm nicht nehme, regnet es nicht\".", answer: true, explain: "Kontraposition: ¬q ⇒ ¬p. Sie ist äquivalent zur ursprünglichen Implikation." },
      { type: "mc", q: "Was ist die Negation von \"es gibt eine gerade Primzahl größer als 2\"?", options: ["Jede gerade Primzahl ist kleiner oder gleich 2", "Es gibt eine ungerade Primzahl", "Jede Primzahl ist gerade"], answer: 0, explain: "¬(∃x P(x)) ≡ ∀x ¬P(x): Alle geraden Primzahlen sind ≤ 2 (in Wirklichkeit ist die einzige die 2)." },
      { type: "tf", q: "Die Überprüfung, dass eine Aussage für die ersten 100 natürlichen Zahlen gilt, beweist ihre Gültigkeit für alle natürlichen Zahlen.", answer: false, explain: "Eine Überprüfung an Einzelfällen ist kein Beweis. Ein Gegenbeispiel dagegen genügt, um sie zu widerlegen." },
      { type: "order", q: "Bring die Schritte, um \"alle Zahlen x erfüllen P(x)\" zu negieren, in die richtige Reihenfolge.", items: ["Die Aussage mit ∀x P(x) hinschreiben", "Den Quantor ∀ in ∃ ändern", "Das Prädikat negieren: ¬P(x)", "Lesen: Es gibt mindestens ein x, für das P nicht gilt"], explain: "¬(∀x P(x)) ≡ ∃x ¬P(x)." },
      { type: "text", q: "Wie heißt der Mathematiker, der im 19. Jahrhundert die Mengenlehre begründete (Anfangsbuchstabe C)?", answer: ["cantor", "georg cantor", "Cantor", "Georg Cantor"], explain: "Georg Cantor (1845-1918) begründete die Mengenlehre." }
    ]
  }
});
