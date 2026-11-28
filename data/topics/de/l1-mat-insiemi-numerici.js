TOPIC('de', {
  id: "l1-mat-insiemi-numerici",
  title: "Natürliche, ganze und rationale Zahlen",
  intro: "Schafe zählen, eine Schuld notieren, eine Pizza in gleich große Stücke teilen: Jedes Alltagsproblem hat in der Geschichte eine neue Art von Zahlen nötig gemacht. Von den <b>natürlichen</b> über die <b>ganzen</b> bis zu den <b>rationalen</b> Zahlen bauen wir Schritt für Schritt ein System auf, in dem Addition, Subtraktion, Multiplikation und Division (außer durch null) immer ein Ergebnis haben. In dieser Lektion wiederholen wir gründlich die <b>Rechengesetze</b>, die <b>Potenzen</b>, die <b>Brüche</b> und die <b>periodischen Dezimalzahlen</b> – mit einer Frage im Hintergrund: Warum brauchen wir immer wieder neue Zahlen?",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "ℕ, ℤ, ℚ: drei Zahlenmengen, drei Bedürfnisse",
      html: `<p>Die <b>natürlichen Zahlen</b> ℕ = {0, 1, 2, 3, …} dienen zum Zählen. In ℕ ergeben Addition und Multiplikation immer wieder eine natürliche Zahl (man sagt, ℕ ist bezüglich dieser Operationen <b>abgeschlossen</b>), die Subtraktion aber nicht: 3 − 5 ist keine natürliche Zahl.</p>
<p>Deshalb führt man die <b>ganzen Zahlen</b> ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …} ein, die auch die <b>Gegenzahlen</b> der natürlichen Zahlen enthalten. In ℤ kann man immer addieren, subtrahieren und multiplizieren. Aber 7 : 2 ist keine ganze Zahl.</p>
<p>Damit die Division (durch eine Zahl ungleich null) immer möglich ist, konstruiert man die <b>rationalen Zahlen</b> ℚ, also die Zahlen, die sich als <b>Bruch</b> a/b mit a ∈ ℤ und b ∈ ℤ, b ≠ 0 schreiben lassen. Zum Beispiel 3/4, −5/2, 7 = 7/1.</p>
<p>Es gelten die Inklusionen <b>ℕ ⊂ ℤ ⊂ ℚ</b>. Jeder Schritt „löst“ eine Gleichung, die vorher keine Lösung hatte: x + 5 = 3 hat eine Lösung in ℤ (x = −2), 2x = 7 in ℚ (x = 7/2). Die Erweiterung ist aber noch nicht zu Ende: x² = 2 hat in ℚ keine Lösung, und deshalb braucht man die reellen Zahlen (die lernst du in den nächsten Jahren kennen).</p>
<p>Merke dir die Schreibweisen: ℤ⁺ (positive), ℤ⁻ (negative), ℤ* (ohne die Null), ℚ⁺ usw. Die <b>Null</b> gehört in vielen italienischen Lehrbüchern zu den natürlichen Zahlen; manche Autoren schließen die Null aus ℕ aus und schreiben ℕ₀, wenn sie sie einschließen wollen.</p>`
    },
    {
      type: "svg",
      title: "Die Zahlenmengen ineinander",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<ellipse cx="300" cy="150" rx="280" ry="135" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<ellipse cx="300" cy="165" rx="205" ry="100" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="180" rx="125" ry="62" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="300" y="42" font-size="18" text-anchor="middle" fill="#78350f" font-weight="bold">ℚ: Brüche a/b (b ≠ 0)  ·  2/3, −5/4, 0,(3)</text>
<text x="300" y="96" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ℤ: …, −2, −1, 0, 1, 2, …</text>
<text x="300" y="187" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">ℕ: 0, 1, 2, 3, …</text>
<text x="300" y="270" font-size="16" text-anchor="middle" fill="#334155">Außerhalb von ℚ gibt es Zahlen wie √2 und π: Du lernst sie bei den reellen Zahlen kennen.</text>
</svg>`,
      caption: "Jede Menge enthält die vorherige: Jede natürliche Zahl ist ganz, jede ganze Zahl ist rational (n = n/1)."
    },
    {
      type: "text",
      title: "Die Rechengesetze",
      html: `<p>Die Rechenoperationen folgen genauen Regeln. Seien a, b, c beliebige Zahlen:</p>
<table>
<tr><th>Gesetz</th><th>Addition</th><th>Multiplikation</th></tr>
<tr><td><b>Kommutativgesetz</b></td><td>a + b = b + a</td><td>a · b = b · a</td></tr>
<tr><td><b>Assoziativgesetz</b></td><td>(a + b) + c = a + (b + c)</td><td>(a · b) · c = a · (b · c)</td></tr>
<tr><td><b>Neutrales Element</b></td><td>a + 0 = a</td><td>a · 1 = a</td></tr>
<tr><td><b>Inverses Element</b></td><td>Gegenzahl: a + (−a) = 0 (in ℤ und ℚ)</td><td>Kehrwert: a · (1/a) = 1, falls a ≠ 0 (in ℚ)</td></tr>
</table>
<p>Beide Operationen verbindet das <b>Distributivgesetz</b>: <b>a · (b + c) = a·b + a·c</b>. Es erlaubt, Klammern „aufzulösen“ und umgekehrt „auszuklammern“: 7·38 + 7·62 = 7·(38 + 62) = 700.</p>
<p>Subtraktion und Division sind <b>weder</b> kommutativ <b>noch</b> assoziativ: 8 − 3 ≠ 3 − 8 und (20 : 4) : 5 = 1 ≠ 20 : (4 : 5) = 25. Man kann sie aber auf die anderen beiden <b>zurückführen</b>: a − b = a + (−b) und a : b = a · (1/b). So wird in ℚ die Vorzeichenregel einfach: Das Produkt zweier Zahlen hat das Vorzeichen +, wenn die Faktoren gleiche Vorzeichen haben, und −, wenn sie verschiedene haben.</p>
<p>Weitere nützliche Gesetze: die <b>Konstanz der Differenz</b> (a − b = (a + k) − (b + k)) und die <b>Konstanz des Quotienten</b> (a : b = (a·k) : (b·k), k ≠ 0), der <b>Satz vom Nullprodukt</b> (a·b = 0 ⇒ a = 0 oder b = 0) und die Tatsache, dass man <b>nicht durch null teilen darf</b>: 5 : 0 ist sinnlos (keine Zahl mal 0 ergibt 5), und 0 : 0 ist unbestimmt (jede Zahl mal 0 ergibt 0).</p>
<p><b>Reihenfolge der Rechenoperationen</b>: zuerst die Klammern (runde, eckige, geschweifte, von innen nach außen), dann die Potenzen, dann Multiplikationen und Divisionen (von links nach rechts), zuletzt Additionen und Subtraktionen. Beispiel: 2 + 3 · 4² − (10 − 4) : 2 = 2 + 3·16 − 6 : 2 = 2 + 48 − 3 = 47.</p>`
    },
    {
      type: "example",
      title: "Beispiel: Kopfrechnen mit den Rechengesetzen",
      html: `<p>Die Gesetze sind keine bloße Formalität: Sie helfen, schneller zu rechnen.</p>
<ul>
<li><b>25 · 37 · 4</b>: nach Kommutativ- und Assoziativgesetz (25 · 4) · 37 = 100 · 37 = <b>3700</b>.</li>
<li><b>99 · 46</b>: 99 = 100 − 1, also 99·46 = 100·46 − 46 = 4600 − 46 = <b>4554</b> (Distributivgesetz).</li>
<li><b>1000 − 487</b>: nach der Konstanz der Differenz (ich addiere 13 zu beiden Zahlen) = 1013 − 500 = <b>513</b>.</li>
<li><b>2,5 · 48</b> = (10/4) · 48 = 10 · 12 = <b>120</b>.</li>
</ul>
<p>Der junge Gauß berechnete der Überlieferung nach in der Schule 1 + 2 + … + 100, indem er die Zahlen zu 50 Paaren mit der Summe 101 zusammenfasste: 50 · 101 = 5050. Eine geniale Anwendung von Kommutativ-, Assoziativ- und Distributivgesetz!</p>`
    },
    {
      type: "text",
      title: "Die Potenzen",
      html: `<p>Die <b>Potenz</b> a<sup>n</sup> (mit n natürlich) ist das Produkt aus n gleichen Faktoren a: a<sup>n</sup> = a·a·…·a. Dabei ist a die <b>Basis</b> und n der <b>Exponent</b>. Wichtige Erweiterungen:</p>
<ul>
<li>a<sup>1</sup> = a;</li>
<li><b>a<sup>0</sup> = 1</b> für a ≠ 0 (0<sup>0</sup> ist unbestimmt);</li>
<li><b>a<sup>−n</sup> = 1/a<sup>n</sup></b> = (1/a)<sup>n</sup> für a ≠ 0: 2<sup>−3</sup> = 1/8, (2/3)<sup>−2</sup> = 9/4.</li>
</ul>
<p>Potenzgesetze (a, b ≠ 0; m, n ganz):</p>
<table>
<tr><td>Produkt von Potenzen mit gleicher Basis</td><td>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></td></tr>
<tr><td>Quotient von Potenzen mit gleicher Basis</td><td>a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup></td></tr>
<tr><td>Potenz einer Potenz</td><td>(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></td></tr>
<tr><td>Produkt mit gleichem Exponenten</td><td>a<sup>n</sup> · b<sup>n</sup> = (a·b)<sup>n</sup></td></tr>
<tr><td>Quotient mit gleichem Exponenten</td><td>a<sup>n</sup> : b<sup>n</sup> = (a : b)<sup>n</sup></td></tr>
</table>
<p>Warum ist a<sup>0</sup> = 1? Weil a<sup>n</sup> : a<sup>n</sup> = a<sup>n−n</sup> = a<sup>0</sup> gelten muss, andererseits aber 1 ist. Warum ist a<sup>−n</sup> = 1/a<sup>n</sup>? Weil a<sup>0</sup> = a<sup>n</sup> · a<sup>−n</sup> = 1. Die Definitionen sind so gewählt, dass die Gesetze immer gelten: So erweitert man in der Mathematik einen Begriff.</p>
<p><b>Achtung bei den Vorzeichen</b>: (−2)<sup>2</sup> = 4, aber −2<sup>2</sup> = −4 (die Potenz hat Vorrang vor dem Minuszeichen). Eine Potenz mit negativer Basis ist positiv, wenn der Exponent gerade ist, und negativ, wenn er ungerade ist. Außerdem ist (a + b)<sup>2</sup> <b>nicht</b> gleich a<sup>2</sup> + b<sup>2</sup>: Das siehst du gleich bei den Binomischen Formeln.</p>
<p>Zehnerpotenzen ergeben die <b>wissenschaftliche Schreibweise</b>: 300 000 000 = 3 · 10<sup>8</sup>; 0,00000052 = 5,2 · 10<sup>−7</sup>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Rechengesetze und Potenzen",
      questions: [
        { type: "num", q: "Berechne: 2 + 3 · 4² − (10 − 4) : 2", answer: 47, explain: "Potenzen: 4² = 16; dann 3 · 16 = 48; (10 − 4) : 2 = 3. Also 2 + 48 − 3 = 47." },
        { type: "num", q: "Berechne: 2⁵ · 2⁻² : 2²", answer: 2, explain: "Die Basen sind gleich: Exponent 5 − 2 − 2 = 1, also 2¹ = 2." },
        { type: "mc", q: "Wie groß ist −3²?", options: ["9", "−9", "6"], answer: 1, explain: "Die Potenz wird vor dem Minuszeichen berechnet: −(3²) = −9. Dagegen ist (−3)² = 9." },
        { type: "tf", q: "Die Division ist eine kommutative Operation.", answer: false, explain: "Zum Beispiel ist 8 : 2 = 4, aber 2 : 8 = 1/4." }
      ]
    },
    {
      type: "text",
      title: "Brüche und rationale Zahlen",
      html: `<p>Ein <b>Bruch</b> a/b bezeichnet a Teile eines Ganzen, das in b gleiche Teile geteilt ist (b = <b>Nenner</b>, a = <b>Zähler</b>). Zwei Brüche sind <b>gleichwertig</b>, wenn sie dieselbe Zahl darstellen: a/b = c/d ⇔ a·d = b·c. Multipliziert oder dividiert man Zähler und Nenner mit derselben Zahl ≠ 0, erhält man einen gleichwertigen Bruch (<b>Erweitern und Kürzen</b>): 2/3 = 4/6 = 10/15. Eine rationale Zahl ist die Klasse aller gleichwertigen Brüche. Man <b>kürzt vollständig</b>, indem man durch den ggT teilt: 18/24 = 3/4.</p>
<p><b>Rechnen in ℚ</b>:</p>
<ul>
<li><b>Summe/Differenz</b>: Man bringt die Brüche auf den Hauptnenner (kgV): 1/6 + 3/4 = 2/12 + 9/12 = 11/12.</li>
<li><b>Produkt</b>: Zähler mal Zähler, Nenner mal Nenner (vorher kürzen!): (4/9) · (3/8) = 12/72 = 1/6.</li>
<li><b>Quotient</b>: Man multipliziert mit dem <b>Kehrwert</b> des Divisors: (3/5) : (9/10) = 3/5 · 10/9 = 30/45 = 2/3.</li>
<li><b>Vergleich</b>: Man bringt sie auf den Hauptnenner und vergleicht die Zähler: 5/8 &gt; 3/5, weil 25/40 &gt; 24/40. Oder man vergleicht die „über Kreuz“ gebildeten Produkte: 5·5 = 25 &gt; 3·8 = 24.</li>
</ul>
<p>Die rationalen Zahlen liegen <b>dicht</b>: Zwischen zwei rationalen Zahlen gibt es immer eine weitere (zum Beispiel den Mittelwert). Zwischen 0 und 1 liegen also unendlich viele rationale Zahlen, ohne „nächste Zahl“: Anders als bei den natürlichen Zahlen kann man nicht sagen, was der Nachfolger von 1/2 ist. Trotzdem bleiben auf dem Zahlenstrahl „Lücken“: √2 ist nicht rational, wie schon die Pythagoreer (5. Jh. v. Chr.) durch einen Widerspruchsbeweis entdeckten.</p>`
    },
    {
      type: "example",
      title: "Beispiel: Rezepte und Brüche",
      html: `<p>Ein Rezept für 4 Personen braucht 3/4 Liter Milch, du kochst aber für 6. Und du hast nur 1 Liter zur Verfügung. Reicht das?</p>
<ol>
<li>Skalierungsfaktor: 6/4 = 3/2.</li>
<li>Benötigte Milch: (3/4) · (3/2) = 9/8 Liter = 1 + 1/8 Liter = 1,125 l.</li>
<li>Vergleich mit 1 l = 8/8: 9/8 &gt; 8/8 → <b>reicht nicht</b>, es fehlen 1/8 Liter (125 ml).</li>
</ol>
<p>Noch ein Beispiel, diesmal im Negativen: Deine Bank belastet dich mit 2/5 einer Schuld von 150 €: (−150) · (2/5) = −60 €. Das Produkt einer negativen und einer positiven Zahl ist negativ.</p>`
    },
    {
      type: "text",
      title: "Dezimalzahlen: endlich und periodisch",
      html: `<p>Jeden Bruch kann man in eine <b>Dezimalzahl</b> verwandeln, indem man die Division ausführt. Dabei kann Folgendes passieren:</p>
<ul>
<li>Die Division <b>bricht ab</b>: <b>endliche Dezimalzahl</b>. 3/4 = 0,75; 7/20 = 0,35;</li>
<li>Die Division <b>bricht nicht ab</b>, aber die Ziffern wiederholen sich: <b>periodische Dezimalzahl</b>. 1/3 = 0,3333… = 0,<span style="text-decoration:overline">3</span> (man schreibt 0,(3)); 5/6 = 0,8333… = 0,8(3); 1/7 = 0,(142857).</li>
</ul>
<p>Warum wiederholt es sich immer? Bei der Division durch b gibt es nur b mögliche Reste (von 0 bis b − 1): Nach höchstens b Schritten kehrt ein Rest wieder, und von da an wiederholt sich alles. Die Gruppe der sich wiederholenden Ziffern ist die <b>Periode</b>; die Ziffern zwischen Komma und Periode sind die <b>Vorperiode</b>.</p>
<p><b>Kriterium</b>: Ein vollständig gekürzter Bruch ergibt eine <b>endliche</b> Dezimalzahl, wenn der Nenner als Primfaktoren nur 2 und/oder 5 hat (also die Faktoren von 10); sonst ist sie <b>periodisch</b>. Zum Beispiel ist 7/20 (20 = 2²·5) endlich; 7/12 (12 = 2²·3) ist gemischtperiodisch.</p>
<p><b>Erzeugender Bruch</b> (von der Dezimalzahl zum Bruch):</p>
<ul>
<li><b>Reinperiodisch</b>: Zähler = Zahl ohne Komma, <i>minus</i> der ganzzahlige Teil; Nenner = so viele Neunen, wie die Periode Ziffern hat. 2,(45) = (245 − 2)/99 = 243/99 = 27/11.</li>
<li><b>Gemischtperiodisch</b>: Zähler = Zahl ohne Komma bis zum Ende der Periode, <i>minus</i> die Zahl bis zum Ende der Vorperiode; Nenner = so viele Neunen, wie die Periode Ziffern hat, gefolgt von so vielen Nullen, wie die Vorperiode Ziffern hat. 0,1(6) = (16 − 1)/90 = 15/90 = 1/6; 3,2(7) = (327 − 32)/90 = 295/90 = 59/18.</li>
</ul>
<p>Eine Kuriosität: <b>0,(9) = 1</b>. Tatsächlich ist 0,(9) = 9/9 = 1. Eine andere Möglichkeit: 1/3 = 0,(3), also 3 · (1/3) = 3 · 0,(3) = 0,(9) und gleichzeitig = 1. Es gibt keine Zahl zwischen 0,(9) und 1: Es ist dieselbe Zahl, auf zwei Arten geschrieben.</p>`
    },
    {
      type: "example",
      title: "Beispiel: vom Bruch zur Dezimalzahl und zurück",
      html: `<p><b>Vom Bruch zur Dezimalzahl</b>: 5/7 = 0,714285 714285… = 0,(714285), Periode mit 6 Ziffern. Bei 7 sind die möglichen Reste 1, …, 6: Die Periode von 1/7 verwendet alle Reste und ist deshalb so lang.</p>
<p><b>Von der Dezimalzahl zum Bruch</b>: Verwandle 0,(36).</p>
<ol>
<li>Sie ist reinperiodisch mit ganzzahligem Teil 0 und Periode 36 (zwei Ziffern): 36/99.</li>
<li>Ich kürze durch 9: 36/99 = 4/11.</li>
<li>Kontrolle: 4 : 11 = 0,363636… ✔</li>
</ol>
<p>Mit dieser Methode erkennt man jede periodische (und jede endliche) Dezimalzahl als rationale Zahl. Umgekehrt kann eine Dezimalzahl mit unendlich vielen <b>nichtperiodischen</b> Ziffern wie 0,1011011101111… nicht rational sein: Sie ist eine irrationale Zahl.</p>`
    },
    {
      type: "widget",
      title: "Zu welcher Menge gehört sie?",
      widget: "classify",
      options: { groups: ["Natürlich", "Ganz, nicht natürlich", "Rational, nicht ganz", "Weder rational noch ganz"], items: [
        ["7", 0], ["0", 0], ["√16", 0],
        ["−4", 1], ["−12", 1], ["−20 : 5", 1],
        ["3/4", 2], ["−2/5", 2], ["0,(3)", 2], ["2,5", 2],
        ["√2", 3], ["π", 3]
      ] },
      caption: "√16 = 4 ist natürlich; −20 : 5 = −4 ist ganz; 0,(3) = 1/3 ist rational; √2 und π sind nicht rational."
    },
    {
      type: "curiosity",
      title: "Die Zahl, die die Pythagoreer schockierte",
      html: `<p>Die Pythagoreer glaubten, „alles ist Zahl“, also ein Verhältnis ganzer Zahlen. Wendet man aber ihren eigenen Satz auf das Quadrat mit der Seitenlänge 1 an, misst die Diagonale √2, und <b>es gibt keine zwei ganzen Zahlen a und b mit (a/b)² = 2</b>. Der Beweis ist ein Widerspruchsbeweis: Wäre a/b vollständig gekürzt, dann wäre wegen a² = 2b² die Zahl a gerade, also a = 2k und 4k² = 2b² → b² = 2k² → auch b gerade, im Widerspruch zur Annahme, dass a/b gekürzt war. Einer Legende zufolge (an die Historiker zweifeln) soll der Pythagoreer Hippasos von Metapont, der die Existenz inkommensurabler Größen verriet, ins Meer geworfen worden sein. Diese Entdeckung der „irrationalen Zahlen“ veränderte die griechische Mathematik für immer.</p>`
    },
    {
      type: "curiosity",
      title: "Null und negative Zahlen hatten eine schwierige Geschichte",
      html: `<p>Die Null als richtige Zahl wurde in Indien entwickelt: Im <i>Brahmasphutasiddhanta</i> (628 n. Chr.) gibt Brahmagupta ihre Rechenregeln an und auch die Regeln für negative Zahlen, die er als „Schulden“ deutete (die positiven waren „Vermögen“). In Europa wurden die negativen Zahlen erst sehr spät akzeptiert: Noch im 16. Jahrhundert nannten viele Mathematiker sie „absurde“ oder „fiktive“ Zahlen. Leonardo Pisano (Fibonacci) brachte im <i>Liber abaci</i> (1202) die indisch-arabischen Ziffern und die Null nach Europa, doch es dauerte Jahrhunderte, bis sie sich verbreiteten. Die Zeichen + und − erschienen Ende des 15. Jahrhunderts im Druck.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Zahlen und Brüche zu verstehen",
      intro: "Wenn dir die Vorzeichenregel oder die Brüche wie auswendig zu lernende Formeln vorkommen, probiere diese Bilder.",
      tabs: [
        {
          label: "🍕 Die Pizza",
          html: `<p>Ein Bruch n/d ist eine Pizza, die in d gleich große Stücke geteilt ist, von denen man n nimmt. Ziehe an den Reglern und sieh, dass 2/3 und 4/6 die <b>gleiche Menge</b> Pizza bedecken: Gleichwertige Brüche sind nur verschiedene Arten, dieselbe Pizza zu schneiden. 1/2 und 1/3 zu addieren heißt, einen Schnitt (in Sechstel) zu finden, der für beide passt: 3/6 + 2/6 = 5/6.</p>`,
          widget: "fractionPie",
          options: { n: 2, d: 3 }
        },
        {
          label: "🌡️ Zahlengerade und Temperatur",
          html: `<p>Die ganzen Zahlen sind die Zahlen der Thermometer: Bei −3 °C und einem Temperaturanstieg um 5 °C komme ich auf +2 °C. Auf der Zahlengeraden ist das Addieren einer positiven Zahl ein Sprung nach rechts, einer negativen ein Sprung nach links. Mit −1 zu multiplizieren heißt, am Nullpunkt zu „spiegeln“. Probiere es aus: Starte bei −3 und springe um 5.</p>`,
          widget: "numberLine",
          options: { min: -10, max: 10, step: 5, start: -3 }
        },
        {
          label: "💰 Vermögen und Schulden",
          html: `<p>So dachten die Inder im 7. Jahrhundert: positiv = Gewinn, negativ = Schuld.</p>
<ul>
<li>(+5) + (−3): Ich habe 5 € und schulde 3 €: Mir bleiben 2 €.</li>
<li>(−5) − (−3): Ich habe 5 € Schulden und man <b>nimmt</b> mir 3 € Schulden <b>weg</b>: Die Schuld sinkt auf 2 €, also −2.</li>
<li>(−4) · (+3): drei Schulden zu je 4 € = −12 €.</li>
<li>(−4) · (−3): Ich <b>nehme</b> drei Schulden zu je 4 € <b>weg</b> = +12 €. Darum gilt „Minus mal Minus ergibt Plus“.</li>
</ul>`
        },
        {
          label: "📏 0,(9) = 1 mit einem Trick",
          html: `<p>Sei x = 0,999… Ich multipliziere mit 10: 10x = 9,999… Ich subtrahiere: 10x − x = 9,999… − 0,999… = 9, also 9x = 9 und <b>x = 1</b>. Derselbe Trick funktioniert bei jeder periodischen Zahl: Für x = 0,(36) multipliziere ich mit 100: 100x = 36,(36), subtrahiere x: 99x = 36, also x = 36/99. Das ist der Beweis der Regel für den erzeugenden Bruch.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Zahlen",
      nodes: [
        { id: "naturali", label: "Natürliche Zahlen ℕ", x: 15, y: 8, color: "#2563eb", html: "0, 1, 2, 3, …: Sie dienen zum Zählen.", why: "Sie sind die ersten Zahlen der Geschichte: Kerben auf Knochen sind über 20 000 Jahre alt. Peano (1889) axiomatisierte sie: 0 ist eine Zahl, jede Zahl hat einen Nachfolger, das Induktionsprinzip gilt." },
        { id: "interi", label: "Ganze Zahlen ℤ", x: 50, y: 22, color: "#16a34a", html: "Natürliche Zahlen mit ihren Gegenzahlen: …, −2, −1, 0, 1, …", why: "Sie machen die Subtraktion immer möglich. Brahmagupta (628 n. Chr.) führte sie mit der Idee der Schuld ein; in Europa wurden sie erst im 16.–17. Jahrhundert akzeptiert." },
        { id: "razionali", label: "Rationale Zahlen ℚ", x: 80, y: 40, color: "#f59e0b", html: "Brüche a/b mit b ≠ 0.", why: "Sie machen die Division (durch Zahlen ungleich null) immer möglich. Sie entstehen aus dem Messen: Ist eine Länge kein Vielfaches der Einheit, drückt man sie als Bruch aus. Schon die Ägypter verwendeten Stammbrüche." },
        { id: "proprieta", label: "Rechengesetze", x: 20, y: 38, color: "#9333ea", html: "Kommutativ-, Assoziativ-, Distributivgesetz, neutrale und inverse Elemente.", why: "Sie sind die „Axiome“ der Algebra: ℚ ist ein Körper. Alle Techniken des Buchstabenrechnens (gleich danach) leiten sich aus diesen Regeln ab." },
        { id: "potenze", label: "Potenzen", x: 12, y: 66, color: "#ef4444", html: "Wiederholtes Produkt: aⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.", why: "Die Definitionen von a⁰ und a⁻ⁿ sind so gewählt, dass die Gesetze gültig bleiben: Die Mathematik erweitert Begriffe und bewahrt dabei die Regeln." },
        { id: "frazioni", label: "Brüche und Rechenoperationen", x: 50, y: 62, color: "#0ea5e9", html: "Gleichwertigkeit, Hauptnenner, Kehrwert.", why: "Die Kehrwertregel kommt daher, dass Teilen durch b bedeutet, die Zahl zu finden, die mit b multipliziert den Dividenden ergibt: x·b = a → x = a/b." },
        { id: "decimali", label: "Endliche und periodische Dezimalzahlen", x: 85, y: 78, color: "#22c55e", html: "Darstellungen der rationalen Zahlen im Zehnersystem.", why: "Die Division hat nur endlich viele mögliche Reste, also bricht sie ab oder wiederholt sich: Jede rationale Zahl hat eine endliche oder periodische Dezimaldarstellung und umgekehrt." },
        { id: "irrazionali", label: "Jenseits von ℚ: irrationale Zahlen", x: 55, y: 92, color: "#64748b", html: "√2, π: unendliche nichtperiodische Dezimalzahlen.", why: "Die Entdeckung von √2 (Pythagoreer, 5. Jh. v. Chr.) zeigte, dass Brüche nicht ausreichen, um alle Längen zu messen: Man braucht die reellen Zahlen." }
      ],
      edges: [["naturali", "interi", "Erweiterung"], ["interi", "razionali", "Erweiterung"], ["naturali", "proprieta", "Operationen"], ["proprieta", "potenze", "erweitern"], ["razionali", "frazioni", "geschrieben als"], ["frazioni", "decimali", "Division"], ["razionali", "decimali", "haben"], ["decimali", "irrazionali", "die Grenze"]]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>ℕ ⊂ ℤ ⊂ ℚ: Jede Menge löst eine neue Gleichung (Subtraktion, Division).</li>
<li>Gesetze: Kommutativ-, Assoziativ-, Distributivgesetz; Subtraktion und Division sind <b>weder</b> kommutativ <b>noch</b> assoziativ; niemals durch 0 teilen.</li>
<li>a⁰ = 1; a⁻ⁿ = 1/aⁿ; aᵐ·aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ. Achtung: −2² = −4, aber (−2)² = 4.</li>
<li>Brüche: Durch einen Bruch teilen = mit dem Kehrwert multiplizieren.</li>
<li>Endliche Dezimalzahl, wenn der (gekürzte) Nenner nur 2 und 5 enthält; sonst periodisch. Erzeugender Bruch: 0,(a) = a/9 und so weiter.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Brüche und Dezimalzahlen",
      questions: [
        { type: "num", q: "Berechne: 1/6 + 3/4 (gib das Ergebnis in Zwölfteln an, also den Zähler über dem Nenner 12).", answer: 11, explain: "1/6 = 2/12 und 3/4 = 9/12; die Summe ist 11/12: Der Zähler ist 11." },
        { type: "mc", q: "Welcher ist der erzeugende Bruch von 0,(6)?", options: ["6/10", "2/3", "6/100"], answer: 1, explain: "0,(6) = 6/9 = 2/3." },
        { type: "mc", q: "Welcher Bruch hat eine periodische Dezimaldarstellung?", options: ["3/8", "7/20", "5/12"], answer: 2, explain: "12 = 2²·3 enthält den Faktor 3, also ist 5/12 = 0,41(6). 8 = 2³ und 20 = 2²·5 ergeben endliche Dezimalzahlen (0,375 und 0,35)." },
        { type: "tf", q: "0,(9) ist eine Zahl, die kleiner als 1 ist.", answer: false, explain: "0,(9) = 9/9 = 1: Es ist dieselbe Zahl." }
      ]
    }
  ],
  glossary: [
    { t: "Natürliche Zahlen (ℕ)", d: "Die Zahlen 0, 1, 2, 3, …, die zum Zählen dienen." },
    { t: "Ganze Zahlen (ℤ)", d: "Die natürlichen Zahlen und ihre negativen Gegenzahlen." },
    { t: "Rationale Zahlen (ℚ)", d: "Zahlen, die sich als Bruch a/b ganzer Zahlen mit b ≠ 0 schreiben lassen." },
    { t: "Abgeschlossenheit", d: "Eine Menge ist bezüglich einer Operation abgeschlossen, wenn das Ergebnis wieder in der Menge liegt." },
    { t: "Gegenzahl", d: "Die Zahl −a, die zu a addiert 0 ergibt." },
    { t: "Kehrwert", d: "Die Zahl 1/a, die mit a (≠ 0) multipliziert 1 ergibt." },
    { t: "Distributivgesetz", d: "a·(b + c) = a·b + a·c." },
    { t: "Potenz", d: "aⁿ: Produkt aus n gleichen Faktoren a; für negative Exponenten gilt a⁻ⁿ = 1/aⁿ." },
    { t: "Gleichwertige Brüche", d: "Brüche, die dieselbe rationale Zahl darstellen." },
    { t: "Periode", d: "Gruppe von Ziffern, die sich nach dem Komma unendlich oft wiederholt." },
    { t: "Erzeugender Bruch", d: "Der Bruch, der eine bestimmte periodische Dezimalzahl ergibt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche Gleichung hat in ℕ keine Lösung, aber in ℤ eine?", options: ["x + 4 = 9", "x + 7 = 3", "2x = 7"], answer: 1, explain: "x + 7 = 3 ergibt x = −4: ganz, aber nicht natürlich. 2x = 7 hat in ℤ keine Lösung, nur in ℚ." },
      { type: "num", q: "Berechne: 5 − 2 · (3 − 7) + 6 : 3", answer: 15, explain: "3 − 7 = −4; 2 · (−4) = −8; 5 + 8 = 13; 6 : 3 = 2; 13 + 2 = 15." },
      { type: "num", q: "Berechne: (2³ · 2⁻⁵) : 2⁻² (Ergebnis als Zahl).", answer: 1, explain: "Exponenten: 3 − 5 − (−2) = 0, also 2⁰ = 1." },
      { type: "num", q: "Berechne: (3/5) : (9/10) und schreibe das Ergebnis als Dezimalzahl (auf zwei Nachkommastellen gerundet).", answer: 0.67, tol: 0.01, explain: "(3/5) · (10/9) = 30/45 = 2/3 ≈ 0,67." },
      { type: "mc", q: "Welcher ist der vollständig gekürzte Bruch von 18/24?", options: ["3/4", "9/12", "6/8"], answer: 0, explain: "ggT(18, 24) = 6: 18/24 = 3/4. Die anderen beiden sind nicht vollständig gekürzt." },
      { type: "mc", q: "Welcher ist der erzeugende Bruch von 0,1(6)?", options: ["16/100", "1/6", "16/99"], answer: 1, explain: "(16 − 1)/90 = 15/90 = 1/6." },
      { type: "num", q: "Welcher ist der erzeugende Bruch von 2,(3)? Gib den Zähler des vollständig gekürzten Bruchs an.", answer: 7, explain: "2,(3) = (23 − 2)/9 = 21/9 = 7/3." },
      { type: "tf", q: "Der Bruch 7/40 hat eine endliche Dezimaldarstellung.", answer: true, explain: "40 = 2³·5: nur die Faktoren 2 und 5. 7/40 = 0,175." },
      { type: "tf", q: "Zwischen zwei verschiedenen rationalen Zahlen gibt es immer eine weitere rationale Zahl.", answer: true, explain: "Das ist die Dichtheit von ℚ: Der Mittelwert (a + b)/2 liegt zwischen den beiden." },
      { type: "order", q: "Ordne vom kleinsten zum größten Wert.", items: ["−3/2", "−1", "0,(3)", "2/3", "1,5"], explain: "−1,5 < −1 < 0,333… < 0,666… < 1,5." },
      { type: "text", q: "Wie heißt die Zahl, mit der man eine Zahl (≠ 0) multiplizieren muss, um 1 zu erhalten?", answer: ["Kehrwert", "der Kehrwert", "reziproker Wert", "multiplikatives Inverses", "Reziproke", "das Reziproke", "kehrwert", "der kehrwert"], explain: "Es ist der Kehrwert: das multiplikative Inverse von a ist 1/a." }
    ]
  }
});
