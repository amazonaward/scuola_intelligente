TOPIC('de', {
  id: "m2-mat-radici",
  title: "Die Quadratwurzel",
  intro: "Wenn du den Flächeninhalt eines Quadrats kennst, wie lang ist dann seine Seite? Um das zu beantworten, braucht man die Umkehroperation des Quadrierens: die <b>Quadratwurzel</b>. Wir lernen die <b>Quadratzahlen</b> kennen, wie man Wurzeln mit der <b>Primfaktorzerlegung</b> berechnet, wie man sie <b>annähert</b> und warum √2 die antiken Mathematiker erschüttert hat.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Was ist die Quadratwurzel?",
      html: `<p>Die <b>Quadratwurzel</b> einer Zahl <i>a</i> ist die Zahl, die <b>mit sich selbst multipliziert</b> (also quadriert) <i>a</i> ergibt.</p>
<p style="font-size:1.2em;text-align:center"><b>√a = b</b> &nbsp;weil&nbsp; <b>b² = a</b></p>
<ul>
<li>√25 = 5, weil 5² = 25;</li>
<li>√81 = 9, weil 9² = 81;</li>
<li>√0 = 0, √1 = 1.</li>
</ul>
<p>Das Zeichen <b>√</b> heißt <b>Wurzelzeichen</b>, und die Zahl unter dem Zeichen heißt <b>Radikand</b>. Das Wurzelziehen ist die <b>Umkehroperation</b> des Quadrierens, so wie die Subtraktion die der Addition ist.</p>
<p>In dem Zahlenbereich, den du kennst, <b>gibt es keine</b> Quadratwurzel einer negativen Zahl: Keine Zahl mit sich selbst multipliziert ergibt ein negatives Ergebnis (auch (−3)² = +9).</p>`
    },
    {
      type: "svg",
      title: "Flächeninhalt und Seite des Quadrats",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<g stroke="#0c4a6e" stroke-width="2" fill="#38bdf8">
<rect x="40" y="40" width="44" height="44"/><rect x="84" y="40" width="44" height="44"/><rect x="128" y="40" width="44" height="44"/><rect x="172" y="40" width="44" height="44"/><rect x="216" y="40" width="44" height="44"/>
<rect x="40" y="84" width="44" height="44"/><rect x="84" y="84" width="44" height="44"/><rect x="128" y="84" width="44" height="44"/><rect x="172" y="84" width="44" height="44"/><rect x="216" y="84" width="44" height="44"/>
<rect x="40" y="128" width="44" height="44"/><rect x="84" y="128" width="44" height="44"/><rect x="128" y="128" width="44" height="44"/><rect x="172" y="128" width="44" height="44"/><rect x="216" y="128" width="44" height="44"/>
<rect x="40" y="172" width="44" height="44"/><rect x="84" y="172" width="44" height="44"/><rect x="128" y="172" width="44" height="44"/><rect x="172" y="172" width="44" height="44"/><rect x="216" y="172" width="44" height="44"/>
<rect x="40" y="216" width="44" height="44"/><rect x="84" y="216" width="44" height="44"/><rect x="128" y="216" width="44" height="44"/><rect x="172" y="216" width="44" height="44"/><rect x="216" y="216" width="44" height="44"/>
</g>
<text x="150" y="285" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Seite = 5</text>
<text x="300" y="80" font-size="22" fill="#0c4a6e" font-weight="bold">Fläche = 25 Kästchen</text>
<text x="300" y="130" font-size="22" fill="#0369a1">5² = 25</text>
<text x="300" y="170" font-size="22" fill="#dc2626" font-weight="bold">√25 = 5</text>
<text x="300" y="215" font-size="16" fill="#334155">Quadrieren: von der Seite zur Fläche</text>
<text x="300" y="240" font-size="16" fill="#334155">Quadratwurzel: von der Fläche zur Seite</text>
</svg>`,
      caption: "Das Wort «Quadrat» ist kein Zufall: 5² ist genau der Flächeninhalt eines Quadrats mit der Seite 5."
    },
    {
      type: "text",
      title: "Die Quadratzahlen",
      html: `<p>Eine Zahl heißt <b>Quadratzahl</b> (<i>quadrato perfetto</i>), wenn sie das Quadrat einer natürlichen Zahl ist: Ihre Wurzel ist eine ganze Zahl.</p>
<table>
<tr><td>1²=1</td><td>2²=4</td><td>3²=9</td><td>4²=16</td><td>5²=25</td><td>6²=36</td><td>7²=49</td><td>8²=64</td></tr>
<tr><td>9²=81</td><td>10²=100</td><td>11²=121</td><td>12²=144</td><td>13²=169</td><td>14²=196</td><td>15²=225</td><td>20²=400</td></tr>
</table>
<p><b>Wie man sie erkennt</b>: Zerlege die Zahl in Primfaktoren. Sie ist eine Quadratzahl, wenn <b>alle Exponenten gerade</b> sind.</p>
<ul>
<li>144 = 2⁴ × 3² → Exponenten 4 und 2, gerade → <b>ja</b>;</li>
<li>72 = 2³ × 3² → der Exponent 3 ist ungerade → <b>nein</b>.</li>
</ul>
<p>Schneller Trick: Eine Quadratzahl <b>endet nie</b> auf die Ziffern 2, 3, 7 oder 8.</p>`
    },
    {
      type: "widget",
      title: "Baue ein Quadrat",
      widget: "areaGrid",
      options: { w: 6, h: 6, max: 12 },
      caption: "Stelle Grundseite und Höhe gleich ein: Die Fläche ist eine Quadratzahl und die Seite ist ihre Wurzel. Probiere 7 × 7, 9 × 9, 12 × 12."
    },
    {
      type: "text",
      title: "Die Wurzel mit der Zerlegung berechnen",
      html: `<p>Um die Quadratwurzel einer Quadratzahl zu berechnen:</p>
<ol>
<li><b>zerlege</b> die Zahl in Primfaktoren;</li>
<li><b>halbiere</b> alle Exponenten;</li>
<li><b>multipliziere</b> die erhaltenen Faktoren.</li>
</ol>
<p>Beispiel: √576 → 576 = 2⁶ × 3² → √576 = 2³ × 3¹ = 8 × 3 = <b>24</b>. Probe: 24 × 24 = 576 ✓</p>
<p>Beispiel: √1225 → 1225 = 5² × 7² → √1225 = 5 × 7 = <b>35</b>.</p>
<p>Warum halbiert man die Exponenten? Weil sich beim Quadrieren die Exponenten <b>verdoppeln</b>: (2³ × 3)² = 2⁶ × 3². Die Wurzel macht das Gegenteil.</p>`
    },
    {
      type: "text",
      title: "Eigenschaften der Wurzeln",
      html: `<ul>
<li><b>Produkt</b>: √(a × b) = √a × √b → √(4 × 9) = 2 × 3 = 6 (tatsächlich √36 = 6).</li>
<li><b>Quotient</b>: √(a : b) = √a : √b → √(100/25) = 10/5 = 2.</li>
<li><b>Brüche</b>: √(9/16) = 3/4.</li>
<li><b>Achtung!</b> Die Wurzel verteilt sich <b>nicht</b> auf Summen und Differenzen: √(9 + 16) = √25 = 5, aber √9 + √16 = 3 + 4 = 7. <b>Das ist verschieden!</b></li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Quadratzahlen und exakte Wurzeln",
      questions: [
        { type: "num", q: "√144 = ?", answer: 12, explain: "12 × 12 = 144." },
        { type: "mc", q: "Welche Zahl ist eine Quadratzahl?", options: ["48", "196", "250"], answer: 1, explain: "196 = 14² (= 2² × 7²)." },
        { type: "tf", q: "√(16 + 9) = 4 + 3.", answer: false, explain: "√25 = 5, während 4 + 3 = 7: Die Wurzel verteilt sich nicht auf die Summe." }
      ]
    },
    {
      type: "text",
      title: "Nicht exakte Wurzeln: die Annäherung",
      html: `<p>Die meisten Zahlen sind <b>keine</b> Quadratzahlen: √2, √10, √50 … In diesen Fällen ist die Wurzel eine <b>unendliche nicht periodische Dezimalzahl</b> (eine <b>irrationale</b> Zahl), und wir können sie nur <b>annähern</b>.</p>
<p><b>Methode durch Probieren</b> (√50):</p>
<ol>
<li>Finde die benachbarten Quadratzahlen: 49 = 7² und 64 = 8² → 7 &lt; √50 &lt; 8.</li>
<li>Probiere mit Zehnteln: 7,0² = 49; 7,1² = 50,41 → zu viel! Also √50 ≈ <b>7,0</b> nach unten gerundet, 7,1 nach oben gerundet.</li>
<li>Probiere mit Hundertsteln: 7,07² = 49,98 …; 7,08² = 50,12 … → √50 ≈ <b>7,07</b> auf ein Hundertstel genau.</li>
</ol>
<p>Heute benutzt man auch <b>Zahlentafeln</b> (in den Schulbüchern) und den <b>Taschenrechner</b> (Taste √): √50 = 7,0710678 …</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der quadratische Fußboden",
      html: `<p>Ein quadratischer Fußboden hat eine Fläche von <b>20,25 m²</b>. Wie lang ist die Seite?</p>
<ol>
<li>Seite = √20,25.</li>
<li>Ich verwandle in einen Bruch: 20,25 = 2025/100.</li>
<li>√2025 = 45 (weil 2025 = 3⁴ × 5² → 3² × 5 = 45) und √100 = 10.</li>
<li>Seite = 45/10 = <b>4,5 m</b>. Probe: 4,5 × 4,5 = 20,25 ✓</li>
</ol>
<p>Der Umfang des Fußbodens ist 4 × 4,5 = <b>18 m</b>: Den brauchst du, um die Fußleiste zu kaufen!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Fernsehbildschirm",
      html: `<p>Ein Fernseher „mit 50 Zoll“ hat eine <b>Diagonale</b> von 50″. Mit dem Satz des Pythagoras berechnet man die Diagonale mit einer Wurzel: für einen Bildschirm, der <b>40″</b> breit und <b>30″</b> hoch ist:</p>
<p>Diagonale = √(40² + 30²) = √(1600 + 900) = √2500 = <b>50″</b>.</p>
<p>Quadratwurzeln braucht man jedes Mal, wenn man einen <b>Flächeninhalt</b> kennt und eine <b>Länge</b> will: beim Planen von Zimmern, Sportplätzen, Bildschirmen, Karten.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Der Skandal um √2",
      html: `<p>Die <b>Pythagoreer</b> (6.–5. Jahrhundert v. Chr.) glaubten, alles lasse sich mit Verhältnissen ganzer Zahlen ausdrücken. Dann entdeckten sie, dass die <b>Diagonale eines Quadrats mit der Seite 1</b>, die √2 misst, <b>kein Bruch ist</b>! Einer Legende nach starb der Pythagoreer <b>Hippasos von Metapont</b>, der das Geheimnis verriet, bei einem Schiffbruch als «Strafe der Götter». Heute wissen wir, dass √2 = 1,41421356 … unendlich weitergeht, ohne sich je zu wiederholen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Das Zeichen √",
      html: `<p>Das Zeichen <b>√</b> stammt wahrscheinlich von einem <b>stilisierten „r“</b>, dem Anfangsbuchstaben des lateinischen <i>radix</i> («Wurzel»). Es erschien <b>1525</b> im Druck im Buch des Deutschen <b>Christoph Rudolff</b>; den Strich über dem Radikanden fügte <b>Descartes</b> 1637 hinzu. Und die babylonische Tontafel <b>YBC 7289</b> (um 1800–1600 v. Chr.) zeigt ein Quadrat mit der Diagonale und den Wert von √2 mit einem Fehler von weniger als einem Millionstel!</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Quadratwurzel zu verstehen",
      intro: "Die Quadratwurzel kann man sehen, bauen und sogar «erraten», wie es die Babylonier taten.",
      tabs: [
        {
          label: "🧊 Quadrat aus 3D-Würfeln",
          html: `<p>Hier sind <b>49 Würfelchen</b>, in einem Quadrat 7 × 7 angeordnet. Die Seite des Quadrats ist die Wurzel: √49 = 7. Bewege die Regler: Schaffst du ein Quadrat mit 50 Würfelchen? Nein! 50 ist keine Quadratzahl: Es bleibt immer etwas übrig oder es fehlt etwas.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 7, b: 7 }
        },
        {
          label: "🏺 Babylonische Methode",
          html: `<p>Die Babylonier (und später <b>Heron von Alexandria</b>, 1. Jahrhundert n. Chr.) berechneten Wurzeln mit einer genialen Methode: «<b>raten und den Mittelwert bilden</b>».</p>
<p>Für √10: Ich beginne mit einem Versuch, 3.</p>
<ol>
<li>10 : 3 = 3,33. Die Wurzel liegt zwischen 3 und 3,33 → Mittelwert: (3 + 3,33) : 2 = <b>3,17</b>.</li>
<li>10 : 3,17 = 3,155. Mittelwert: (3,17 + 3,155) : 2 = <b>3,1625</b>.</li>
</ol>
<p>Schon im zweiten Schritt: 3,1625² = 10,0014. Der wahre Wert ist 3,16227 …! Jeder Schritt verdoppelt etwa die Zahl der richtigen Ziffern. Taschenrechner benutzen ähnliche Methoden.</p>`
        },
        {
          label: "🔢 Summe der ungeraden Zahlen",
          html: `<p>Sieh dir diesen Zauber an: Jede Quadratzahl ist die <b>Summe der ersten ungeraden Zahlen</b>!</p>
<ul>
<li>1 = 1 = 1²</li><li>1 + 3 = 4 = 2²</li><li>1 + 3 + 5 = 9 = 3²</li><li>1 + 3 + 5 + 7 = 16 = 4²</li>
</ul>
<p>Um also √n zu finden, kannst du von n die ungeraden Zahlen 1, 3, 5, 7 … <b>abziehen</b> und zählen, wie viele Subtraktionen nötig sind, um bei 0 anzukommen. √25: 25−1−3−5−7−9 = 0 → <b>5</b> Subtraktionen → √25 = 5. Das Warum siehst du in der Zeichnung: Jede ungerade Zahl ist ein «L», das das Quadrat vergrößert.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="40" y="170" width="40" height="40" fill="#ef4444" stroke="#fff" stroke-width="2"/>
<rect x="80" y="170" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/><rect x="80" y="130" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/><rect x="40" y="130" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/>
<rect x="120" y="170" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="120" y="130" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="120" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="80" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="40" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/>
<rect x="160" y="170" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="130" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="90" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="120" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="80" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="40" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<text x="260" y="80" font-size="20" fill="#ef4444" font-weight="bold">1</text>
<text x="290" y="80" font-size="20" fill="#f97316" font-weight="bold">+ 3</text>
<text x="345" y="80" font-size="20" fill="#16a34a" font-weight="bold">+ 5</text>
<text x="400" y="80" font-size="20" fill="#2563eb" font-weight="bold">+ 7</text>
<text x="455" y="80" font-size="20" fill="#1f2937" font-weight="bold">= 16</text>
<text x="260" y="130" font-size="20" fill="#1f2937">4 «Schichten» in L-Form</text>
<text x="260" y="170" font-size="22" fill="#1f2937" font-weight="bold">√16 = 4</text>
</svg>`
        },
        {
          label: "📐 Das Dreieck des Pythagoras",
          html: `<p>Quadratwurzeln tauchen jedes Mal auf, wenn du den <b>Satz des Pythagoras</b> benutzt: Die Hypotenuse ist die Wurzel aus der Summe der Quadrate der Katheten. Bewege die Regler und beobachte: Der Flächeninhalt des großen Quadrats ist eine Zahl, die Seite ist ihre Wurzel.</p>`,
          widget: "pythagoras",
          options: {}
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Quadratwurzel",
      nodes: [
        { id: "quad", label: "Quadrieren", x: 50, y: 6, color: "#2563eb", html: "b² = b × b.", why: "Es heißt «Quadrat», weil b² der <b>Flächeninhalt eines Quadrats</b> mit der Seite b ist: Die Griechen stellten sich Zahlen als geometrische Figuren vor («Quadratzahlen», «Dreieckszahlen» …)." },
        { id: "radice", label: "Quadratwurzel", x: 50, y: 28, color: "#dc2626", html: "√a = b, wenn b² = a.", why: "Sie ist die <b>Umkehroperation</b> des Quadrierens. Der Name «Wurzel» kommt von der lateinischen Übersetzung des arabischen <i>dschidhr</i> («Wurzel einer Pflanze»), das <b>al-Chwarizmi</b> im 9. Jahrhundert benutzte: die Zahl, aus der das Quadrat «wächst»." },
        { id: "perfetti", label: "Quadratzahlen", x: 18, y: 50, color: "#16a34a", html: "1, 4, 9, 16, 25 … ganze Wurzel.", why: "Sie sind Quadratzahlen, wenn in der Zerlegung alle Exponenten gerade sind, denn Quadrieren verdoppelt jeden Exponenten (Eigenschaft der Potenzen)." },
        { id: "scomp", label: "Zerlegung", x: 18, y: 76, color: "#0d9488", html: "Primfaktoren, Exponenten halbiert.", why: "Sie beruht auf dem <b>Fundamentalsatz der Arithmetik</b> (schon bei Euklid, Elemente, 9. Buch): Jede Zahl lässt sich auf genau eine Weise in Primfaktoren zerlegen." },
        { id: "approx", label: "Annäherung", x: 50, y: 56, color: "#ea580c", html: "Durch Probieren, Tafeln, Taschenrechner.", why: "Wenn die Wurzel nicht ganz ist, sucht man zwischen zwei aufeinanderfolgenden Quadratzahlen und engt das Intervall Ziffer für Ziffer ein. Die Methode von <b>Heron</b> (1. Jahrhundert n. Chr.) macht es viel schneller." },
        { id: "irraz", label: "Irrationale Zahlen", x: 82, y: 50, color: "#7c3aed", html: "√2, √3, √5 …: unendliche nicht periodische Dezimalzahlen.", why: "Der Beweis, dass √2 kein Bruch ist, wird den <b>Pythagoreern</b> zugeschrieben und steht bei Aristoteles: Wäre √2 = p/q gekürzt, müssten p und q beide gerade sein, was unmöglich ist." },
        { id: "propr", label: "Eigenschaften", x: 82, y: 76, color: "#ca8a04", html: "√(a·b) = √a·√b; √(a/b) = √a/√b; NICHT bei der Summe.", why: "Sie folgen aus den Eigenschaften der Potenzen: (√a·√b)² = a·b. Bei der Summe funktioniert es nicht, weil (√a + √b)² = a + b + 2√a√b, es kommt ein Stück dazu." },
        { id: "pitagora", label: "Satz des Pythagoras", x: 50, y: 88, color: "#64748b", html: "Hypotenuse = √(k₁² + k₂²).", why: "Der Satz verbindet Flächeninhalte von Quadraten über den Seiten: Um von den Flächen zu den Längen zurückzukommen, braucht man die Wurzel. Dort begegneten die Griechen zum ersten Mal √2." }
      ],
      edges: [
        ["quad", "radice", "Umkehrung"],
        ["radice", "perfetti", "exakt, wenn"],
        ["perfetti", "scomp", "wird berechnet mit"],
        ["radice", "approx", "sonst"],
        ["approx", "irraz", "weil sie sind"],
        ["radice", "propr", "hat"],
        ["approx", "pitagora", "wird gebraucht bei"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: annähern",
      questions: [
        { type: "mc", q: "Zwischen welchen ganzen Zahlen liegt √30?", options: ["4 und 5", "5 und 6", "6 und 7"], answer: 1, explain: "25 < 30 < 36, also 5 < √30 < 6." },
        { type: "mc", q: "√2 ist …", options: ["eine ganze Zahl", "ein Bruch", "eine irrationale Zahl"], answer: 2, explain: "√2 = 1,41421 … ist unendlich und nicht periodisch." },
        { type: "num", q: "√(9/25) = 3/? (schreibe den Nenner)", answer: 5, explain: "√9/√25 = 3/5." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>√a = b bedeutet b² = a. Die Wurzel ist die Umkehroperation des Quadrierens.</li>
<li><b>Quadratzahl</b>: Alle Exponenten der Primfaktoren sind gerade.</li>
<li>Wurzel mit der Zerlegung: <b>Exponenten halbieren</b>.</li>
<li>Nicht exakte Wurzeln: Man <b>nähert</b> sie an (nach unten/oben gerundet), und sie sind irrationale Zahlen.</li>
<li>√(a·b) = √a·√b, aber √(a + b) ≠ √a + √b.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Quadratwurzel", d: "Zahl, die quadriert den Radikanden ergibt." },
    { t: "Radikand", d: "Die Zahl, die unter dem Wurzelzeichen steht." },
    { t: "Quadratzahl", d: "Natürliche Zahl, die das Quadrat einer anderen natürlichen Zahl ist." },
    { t: "Annäherung nach unten", d: "Wert, der ein bisschen kleiner ist als der wahre." },
    { t: "Annäherung nach oben", d: "Wert, der ein bisschen größer ist als der wahre." },
    { t: "Irrationale Zahl", d: "Unendliche nicht periodische Dezimalzahl, die sich nicht als Bruch schreiben lässt." },
    { t: "Umkehroperation", d: "Operation, die die Wirkung einer anderen aufhebt (Wurzel ↔ Quadrat)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "√225 = ?", answer: 15, explain: "15 × 15 = 225." },
      { type: "mc", q: "Welche dieser Zahlen ist KEINE Quadratzahl?", options: ["121", "169", "180"], answer: 2, explain: "180 = 2² × 3² × 5: Der Exponent von 5 ist ungerade." },
      { type: "num", q: "Berechne mit der Zerlegung 2⁴ × 3² × 5² die Quadratwurzel dieser Zahl.", answer: 60, explain: "Ich halbiere die Exponenten: 2² × 3 × 5 = 60." },
      { type: "tf", q: "√36 + √64 = √100.", answer: false, explain: "6 + 8 = 14, während √100 = 10." },
      { type: "mc", q: "√70 liegt zwischen …", options: ["7 und 8", "8 und 9", "9 und 10"], answer: 1, explain: "64 < 70 < 81." },
      { type: "num", q: "Ein Quadrat hat den Flächeninhalt 81 cm². Wie lang ist die Seite?", answer: 9, unit: "cm", explain: "√81 = 9 cm." },
      { type: "num", q: "√(4 × 49) = ?", answer: 14, explain: "√4 × √49 = 2 × 7 = 14." },
      { type: "mc", q: "Eine Quadratzahl kann auf die Ziffer … enden.", options: ["7", "6", "8"], answer: 1, explain: "Quadratzahlen enden auf 0, 1, 4, 5, 6, 9 (z. B. 16, 36)." },
      { type: "num", q: "Nähere √20 auf ein Zehntel genau an, nach unten gerundet.", answer: 4.4, tol: 0.001, explain: "4,4² = 19,36 und 4,5² = 20,25: √20 ≈ 4,4." },
      { type: "tf", q: "Es gibt (unter den Zahlen, die du kennst) keine Quadratwurzel von −9.", answer: true, explain: "Keine quadrierte Zahl ergibt ein negatives Ergebnis." },
      { type: "order", q: "Ordne vom kleinsten zum größten.", items: ["√10", "√16", "4,5", "√25"], explain: "3,16 … < 4 < 4,5 < 5." }
    ],
    gen: [["sqrt", 3]]
  }
});
