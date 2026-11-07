TOPIC('de', {
  id: "p3-mat-divisioni",
  title: "Die Division",
  intro: "Teilen heißt, <b>gleiche Teile zu machen</b> 🍬 oder <b>herauszufinden, wie oft</b> eine Zahl in einer anderen steckt. Wir lernen die Namen der Glieder, die schriftliche Division, den <b>Rest</b> und die <b>Probe</b>, mit der man kontrolliert, ob das Ergebnis stimmt.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Zwei Arten zu teilen",
      html: `<p>Die Division beantwortet <b>zwei verschiedene Fragen</b>:</p>
<ul>
<li>🍬 <b>Verteilen</b> (gleiche Teile machen): <i>„Ich habe 12 Bonbons und 3 Freunde. Wie viele Bonbons bekommt jeder?“</i> → 12 : 3 = <b>4</b> Bonbons pro Kopf.</li>
<li>📦 <b>Aufteilen</b> (wie oft passt es hinein): <i>„Ich habe 12 Eier und Schachteln zu 3. Wie viele Schachteln fülle ich?“</i> → 12 : 3 = <b>4</b> Schachteln.</li>
</ul>
<p>Die Rechnung ist dieselbe, aber die Frage ändert sich! Das Zeichen der Division ist <b>:</b> (Doppelpunkt). In anderen Ländern benutzt man auch <b>÷</b> oder <b>/</b>.</p>`
    },
    {
      type: "text",
      title: "Die Namen der Glieder",
      html: `<p>In <b>24 : 6 = 4</b>:</p>
<ul>
<li><b>24</b> ist der <b>Dividend</b>: die Zahl, die geteilt wird;</li>
<li><b>6</b> ist der <b>Divisor</b>: die Zahl, durch die geteilt wird;</li>
<li><b>4</b> ist der <b>Quotient</b>: das Ergebnis.</li>
</ul>
<p>Die Division ist die <b>Umkehrung der Multiplikation</b>: 24 : 6 = 4, weil <b>4 × 6 = 24</b>. Darum hilft es sehr, das Einmaleins gut zu kennen! 🧠</p>`
    },
    {
      type: "svg",
      title: "12 Bonbons für 3 Kinder",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<text x="300" y="34" font-size="22" font-weight="bold" fill="#86198f" text-anchor="middle">12 : 3 = 4</text>
<g>
<rect x="30" y="60" width="160" height="150" rx="16" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="220" y="60" width="160" height="150" rx="16" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<rect x="410" y="60" width="160" height="150" rx="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
</g>
<g fill="#ef4444" stroke="#7f1d1d" stroke-width="2">
<circle cx="80" cy="110" r="18"/><circle cx="140" cy="110" r="18"/><circle cx="80" cy="165" r="18"/><circle cx="140" cy="165" r="18"/>
<circle cx="270" cy="110" r="18"/><circle cx="330" cy="110" r="18"/><circle cx="270" cy="165" r="18"/><circle cx="330" cy="165" r="18"/>
<circle cx="460" cy="110" r="18"/><circle cx="520" cy="110" r="18"/><circle cx="460" cy="165" r="18"/><circle cx="520" cy="165" r="18"/>
</g>
<text x="110" y="245" font-size="20" fill="#92400e" text-anchor="middle" font-weight="bold">Anna: 4</text>
<text x="300" y="245" font-size="20" fill="#166534" text-anchor="middle" font-weight="bold">Luca: 4</text>
<text x="490" y="245" font-size="20" fill="#1e40af" text-anchor="middle" font-weight="bold">Sara: 4</text>
<text x="300" y="285" font-size="18" fill="#1f2937" text-anchor="middle">Dividend 12 · Divisor 3 · Quotient 4</text>
</svg>`,
      caption: "Verteilen: Die 12 Bonbons werden in 3 gleiche Gruppen zu je 4 geteilt."
    },
    {
      type: "text",
      title: "Wenn etwas übrig bleibt: der Rest",
      html: `<p>Die Division geht nicht immer <b>auf</b>. Wenn ich <b>14 Bonbons</b> für <b>3 Freunde</b> habe:</p>
<ul>
<li>gebe ich jedem 4 (4 × 3 = 12);</li>
<li>es bleiben mir <b>2 übrig</b>: Sie reichen nicht, um allen noch eins zu geben.</li>
</ul>
<p>Wir schreiben: <b>14 : 3 = 4 Rest 2</b> (man kann auch <b>4 R 2</b> schreiben).</p>
<p>⚠️ Der <b>Rest</b> muss immer <b>kleiner als der Divisor</b> sein. Wenn er gleich oder größer ist, heißt das, dass du noch ein Bonbon an alle hättest geben können!</p>`
    },
    {
      type: "widget",
      title: "Versuch du, gleiche Teile zu machen",
      widget: "counter",
      options: { emoji: "🍬", max: 30 },
      caption: "Leg 14 Bonbons hin, dann versuch, sie in Gruppen zu je 3 zu teilen: Wie viele Gruppen schaffst du? Wie viele bleiben übrig?"
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Glieder und der Rest",
      questions: [
        { type: "mc", q: "In 35 : 5 = 7 heißt die Zahl 35 …", options: ["Divisor", "Dividend", "Quotient"], answer: 1, explain: "Der Dividend ist die Zahl, die geteilt wird: 35." },
        { type: "num", q: "17 : 5 = 3 mit dem Rest …", answer: 2, explain: "5 × 3 = 15; 17 − 15 = 2." },
        { type: "tf", q: "Bei einer Division durch 4 kann der Rest 5 sein.", answer: false, explain: "Der Rest muss kleiner als der Divisor sein: Beim Divisor 4 kann der Rest nur 0, 1, 2 oder 3 sein." }
      ]
    },
    {
      type: "text",
      title: "Die schriftliche Division, Schritt für Schritt",
      html: `<p>Rechnen wir <b>85 : 3</b>. Man beginnt <b>links</b>, also bei den größten Ziffern!</p>
<ol>
<li>Ich schaue auf die <b>Zehner</b>: 8 : 3 = <b>2</b> (weil 2 × 3 = 6). Ich schreibe 2 in den Quotienten.</li>
<li>Ich multipliziere und subtrahiere: 8 − 6 = <b>2</b> Zehner bleiben übrig.</li>
<li>Ich <b>hole</b> die Einer <b>herunter</b>: Neben die 2 schreibe ich die 5 → ich erhalte <b>25</b>.</li>
<li>Ich teile: 25 : 3 = <b>8</b> (weil 8 × 3 = 24). Ich schreibe 8 in den Quotienten.</li>
<li>Ich subtrahiere: 25 − 24 = <b>1</b>. Es gibt keine weiteren Ziffern herunterzuholen: 1 ist der <b>Rest</b>.</li>
</ol>
<p>Ergebnis: <b>85 : 3 = 28 Rest 1</b>.</p>`
    },
    {
      type: "svg",
      title: "85 : 3 in Spalten (italienische Schreibweise)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<text x="90" y="70" font-size="42" font-family="monospace" fill="#1d4ed8" font-weight="bold">8</text>
<text x="125" y="70" font-size="42" font-family="monospace" fill="#1d4ed8" font-weight="bold">5</text>
<line x1="170" y1="30" x2="170" y2="260" stroke="#1f2937" stroke-width="4"/>
<text x="190" y="70" font-size="42" font-family="monospace" fill="#b45309" font-weight="bold">3</text>
<line x1="170" y1="85" x2="290" y2="85" stroke="#1f2937" stroke-width="4"/>
<text x="190" y="128" font-size="42" font-family="monospace" fill="#15803d" font-weight="bold">28</text>
<text x="70" y="120" font-size="34" font-family="monospace" fill="#6b7280">-6</text>
<line x1="70" y1="132" x2="115" y2="132" stroke="#6b7280" stroke-width="3"/>
<text x="90" y="170" font-size="38" font-family="monospace" fill="#1f2937">2</text>
<text x="125" y="170" font-size="38" font-family="monospace" fill="#dc2626" font-weight="bold">5</text>
<path d="M140 80 Q155 115 140 140" stroke="#dc2626" stroke-width="3" fill="none"/>
<text x="70" y="215" font-size="34" font-family="monospace" fill="#6b7280">-24</text>
<line x1="70" y1="227" x2="160" y2="227" stroke="#6b7280" stroke-width="3"/>
<text x="125" y="265" font-size="38" font-family="monospace" fill="#7c3aed" font-weight="bold">1</text>
<text x="320" y="70" font-size="18" fill="#1d4ed8">Dividend</text>
<text x="320" y="100" font-size="18" fill="#b45309">Divisor (oben rechts)</text>
<text x="320" y="130" font-size="18" fill="#15803d">Quotient (unter dem Divisor)</text>
<text x="320" y="170" font-size="18" fill="#dc2626">ich hole die 5 herunter → 25</text>
<text x="320" y="265" font-size="18" fill="#7c3aed">Rest: 1 (kleiner als 3 ✔)</text>
</svg>`,
      caption: "In Italien schreibt man den Divisor rechts, durch eine Linie getrennt; der Quotient steht unter dem Divisor. (In Deutschland schreibt man alles in einer Zeile: 85 : 3 = 28 Rest 1. Die Schritte sind dieselben.)"
    },
    {
      type: "text",
      title: "Die Probe der Division",
      html: `<p>Um zu kontrollieren, ob eine Division stimmt, benutzt man die <b>Multiplikation</b>:</p>
<p style="font-size:1.2em"><b>Quotient × Divisor + Rest = Dividend</b></p>
<p>Probe von 85 : 3 = 28 R 1 → 28 × 3 = 84; 84 + 1 = <b>85</b> ✔ Sie stimmt!</p>
<p>Wenn der Rest 0 ist, genügt Quotient × Divisor: 24 : 6 = 4 → 4 × 6 = 24 ✔</p>`
    },
    {
      type: "remember",
      title: "Sonderfälle",
      html: `<ul>
<li>Eine Zahl geteilt durch <b>1</b> bleibt gleich: 9 : 1 = 9.</li>
<li>Eine Zahl geteilt durch <b>sich selbst</b> ergibt 1: 7 : 7 = 1.</li>
<li><b>0</b> geteilt durch eine Zahl ergibt 0: 0 : 5 = 0 (keine Bonbons zum Teilen!).</li>
<li>🚫 <b>Durch 0 darf man nicht teilen</b>: 5 Bonbons unter 0 Kinder zu verteilen, ergibt keinen Sinn!</li>
<li>Teilen durch <b>10</b>: Wenn die Zahl auf 0 endet, streicht man die Null: 70 : 10 = 7; bei <b>100</b> streicht man zwei Nullen: 300 : 100 = 3.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Ausflug mit dem Bus",
      html: `<p>Am Ausflug nehmen <b>58 Kinder</b> teil. Jeder Kleinbus hat <b>9 Plätze</b>. Wie viele Kleinbusse braucht man?</p>
<ul>
<li>58 : 9 = <b>6 Rest 4</b> (6 × 9 = 54; 58 − 54 = 4).</li>
<li>6 Kleinbusse sind voll, aber <b>4 Kinder</b> blieben zu Hause! 😮</li>
<li>Also braucht man <b>7 Kleinbusse</b>.</li>
</ul>
<p>👉 Bei Sachaufgaben muss man immer überlegen, <b>was der Rest bedeutet</b>!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Sammelbilder im Album",
      html: `<p>Giulia hat <b>96 Sammelbilder</b> und möchte sie in ein Album kleben, mit <b>4 Bildern pro Seite</b>. Wie viele Seiten füllt sie?</p>
<ol>
<li>9 Zehner : 4 = 2 (2 × 4 = 8), 1 Zehner bleibt übrig.</li>
<li>Ich hole die 6 herunter: 16 : 4 = 4.</li>
<li>Ergebnis: <b>96 : 4 = 24 Seiten</b>, Rest 0.</li>
</ol>
<p>Probe: 24 × 4 = 96 ✔</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …?",
      html: `<p>Das Zeichen <b>÷</b> heißt <b>Obelus</b> und wurde 1659 vom Schweizer <b>Johann Rahn</b> für die Division benutzt. Den Doppelpunkt <b>:</b> machte der deutsche Mathematiker <b>Gottfried Leibniz</b> um 1684 bekannt. Darum benutzen wir in Italien und Deutschland <b>:</b> und in England oder den USA oft <b>÷</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …?",
      html: `<p>Warum hat eine Stunde <b>60 Minuten</b>? Weil die alten <b>Babylonier</b> die 60 liebten: Man kann sie genau durch 2, 3, 4, 5, 6, 10, 12, 15, 20 und 30 teilen! Es ist ganz leicht, eine Stunde in halbe Stunden, Viertelstunden, Zehn-Minuten-Stücke zu teilen … 🕐</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Division zu verstehen",
      intro: "Die schriftliche Division überzeugt dich nicht? Hier sind andere Wege zum selben Ergebnis: Such dir den aus, der dir am besten gefällt!",
      tabs: [
        {
          label: "🧊 Würfelchen in 3D",
          html: `<p>Hier sind <b>24 Würfelchen</b> in einem Rechteck aus <b>4 Reihen zu je 6</b> angeordnet. Schau:</p>
<ul>
<li>24 : 4 = <b>6</b> (jede Reihe hat 6 Würfelchen);</li>
<li>24 : 6 = <b>4</b> (es gibt 4 Reihen).</li>
</ul>
<p>Die Division ist die Multiplikation „andersherum“: Du kennst das Ganze und eines der beiden Maße und suchst das andere. Ändere die Regler und erfinde neue Divisionen!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 4, b: 6 }
        },
        {
          label: "🐸 Rückwärtssprünge",
          html: `<p>Ein Frosch startet bei <b>20</b> und springt jeweils um <b>4</b> rückwärts: 20 → 16 → 12 → 8 → 4 → 0.</p>
<p>Er hat <b>5 Sprünge</b> gemacht: also <b>20 : 4 = 5</b>. Das ist das <b>Aufteilen</b>: Wie oft passt die 4 in die 20? Probier es auf dem Zahlenstrahl!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [0, 4, 8, 12, 16, 20] }
        },
        {
          label: "🇬🇧 Die Stückelmethode (chunking)",
          html: `<p>In englischen Schulen teilen viele Kinder, indem sie <b>große Stücke abziehen</b>, die sie gut kennen. Beispiel: <b>85 : 3</b></p>
<ul>
<li>Ich ziehe 10-mal 3 = 30 ab → es bleiben 55;</li>
<li>ich ziehe noch einmal 10-mal 3 = 30 ab → es bleiben 25;</li>
<li>ich ziehe 8-mal 3 = 24 ab → es bleibt <b>1</b>.</li>
</ul>
<p>Wie oft habe ich die 3 abgezogen? 10 + 10 + 8 = <b>28</b>, Rest <b>1</b>. Dasselbe Ergebnis wie beim Verfahren in Spalten! 🎉</p>`
        },
        {
          label: "🇺🇸 Die „Häuschen“-Methode",
          html: `<p>In den Vereinigten Staaten und in England schreibt man die Division auf eine andere Art: Der Divisor steht <b>links</b>, der Dividend in einer Art <b>Häuschen</b> und der Quotient <b>über dem Dach</b>. Die Schritte sind aber dieselben wie bei uns: teilen, multiplizieren, subtrahieren, herunterholen!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<text x="150" y="60" font-size="40" font-family="monospace" fill="#15803d" font-weight="bold">28 R1</text>
<path d="M120 75 Q135 110 120 150 M120 75 L320 75" stroke="#1f2937" stroke-width="4" fill="none"/>
<text x="70" y="125" font-size="40" font-family="monospace" fill="#b45309" font-weight="bold">3</text>
<text x="150" y="125" font-size="40" font-family="monospace" fill="#1d4ed8" font-weight="bold">85</text>
<text x="360" y="60" font-size="18" fill="#15803d">Quotient auf dem Dach</text>
<text x="360" y="110" font-size="18" fill="#1d4ed8">Dividend im Häuschen</text>
<text x="360" y="150" font-size="18" fill="#b45309">Divisor draußen, links</text>
<text x="300" y="230" font-size="20" fill="#1f2937" text-anchor="middle">Gleiche Schritte: teilen · multiplizieren · subtrahieren · herunterholen</text>
</svg>`
        },
        {
          label: "🍕 Das Pizzeria-Beispiel",
          html: `<p>Denk an einen Pizzabäcker mit <b>26 Stücken</b>, die er auf Teller legen soll, <b>4 Stücke pro Teller</b>.</p>
<p>Er füllt einen Teller, dann noch einen, dann noch einen … am Ende hat er <b>6 volle Teller</b> und <b>2 Stücke</b> bleiben auf der Theke: zu wenige für einen ganzen Teller. Die 2 Stücke sind der <b>Rest</b>!</p>
<p>26 : 4 = 6 R 2 → Probe: 6 × 4 + 2 = 26 ✔</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Division: Tipp einen Knoten an und entdecke das Warum",
      nodes: [
        { id: "div", label: "Division", x: 50, y: 8, color: "#7c3aed", html: "Rechenart, mit der man gleiche Teile macht oder herausfindet, wie oft eine Zahl in einer anderen steckt.", why: "Das Wort kommt vom lateinischen <i>dividere</i>, „trennen“. Die Menschen teilen schon immer: Ernten, Land, Brot. Die alten Ägypter teilten mit Verdopplungen, wie der Papyrus Rhind (etwa 1650 v. Chr.) erzählt." },
        { id: "rip", label: "Verteilen", x: 18, y: 30, color: "#f59e0b", html: "In gleiche Teile teilen: Wie viel bekommt jeder?", why: "Das ist die älteste Bedeutung: jedem dieselbe Menge zu geben, auf gerechte Weise." },
        { id: "cont", label: "Aufteilen", x: 82, y: 30, color: "#0ea5e9", html: "Wie oft eine Zahl in einer anderen steckt: Wie viele Gruppen schaffe ich?", why: "Es entspricht dem wiederholten Abziehen derselben Zahl, solange es geht: 20 − 4 − 4 − 4 − 4 − 4 = 0 → 5-mal." },
        { id: "termini", label: "Dividend, Divisor, Quotient", x: 50, y: 45, color: "#16a34a", html: "Dividend : Divisor = Quotient.", why: "„Quotient“ kommt vom lateinischen <i>quotiens</i>, das „wie oft“ bedeutet: genau die Frage des Aufteilens!" },
        { id: "molt", label: "Umkehrung der Multiplikation", x: 18, y: 65, color: "#ef4444", html: "24 : 6 = 4, weil 4 × 6 = 24.", why: "Multiplizieren heißt, gleiche Gruppen zusammenzulegen; teilen heißt, sie wieder zu trennen. Darum helfen die Einmaleins-Reihen beim Teilen." },
        { id: "resto", label: "Rest", x: 82, y: 65, color: "#ec4899", html: "Was übrig bleibt, wenn die Division nicht aufgeht. Er ist immer kleiner als der Divisor.", why: "Wenn der Rest gleich oder größer als der Divisor wäre, könnte man noch eine Gruppe machen: Das hieße, dass der Quotient zu klein ist." },
        { id: "prova", label: "Die Probe", x: 50, y: 82, color: "#14b8a6", html: "Quotient × Divisor + Rest = Dividend.", why: "Wenn du die Gruppen wieder zusammenlegst und das dazutust, was übrig geblieben war, musst du alles wiederfinden, was du am Anfang hattest: Nichts entsteht und nichts geht verloren." },
        { id: "zero", label: "Nie durch 0", x: 18, y: 92, color: "#64748b", html: "Durch null zu teilen ist nicht möglich.", why: "Keine Zahl mal 0 ergibt 5: Darum hat 5 : 0 keine Antwort. Schon indische Mathematiker wie Brahmagupta (7. Jahrhundert) fragten sich, was beim Teilen durch null geschieht." }
      ],
      edges: [
        ["div", "rip", "kann bedeuten"],
        ["div", "cont", "kann bedeuten"],
        ["div", "termini", "schreibt man mit"],
        ["termini", "molt", "kontrolliert man mit"],
        ["termini", "resto", "manchmal gibt es einen"],
        ["resto", "prova", "kommt in die"],
        ["molt", "prova", "dient für die"],
        ["molt", "zero", "erklärt, warum"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Spalte und Probe",
      questions: [
        { type: "num", q: "Wie viel ist 72 : 4?", answer: 18, explain: "7 : 4 = 1 Rest 3; ich hole die 2 herunter → 32 : 4 = 8. Quotient 18." },
        { type: "mc", q: "Wie lautet die Probe von 50 : 7 = 7 Rest 1?", options: ["7 × 7 + 1 = 50", "7 × 7 − 1 = 50", "50 × 7 + 1"], answer: 0, explain: "Quotient × Divisor + Rest: 49 + 1 = 50 ✔" },
        { type: "num", q: "Es gibt 30 Kinder und 4 pro Tisch. Wie viele Tische braucht man, damit alle sitzen?", answer: 8, explain: "30 : 4 = 7 Rest 2: 7 volle Tische und 2 Kinder mehr, also braucht man einen achten Tisch." }
      ]
    }
  ],
  glossary: [
    { t: "Division", d: "Rechenart, um gleiche Teile zu machen oder zu wissen, wie oft eine Zahl in einer anderen steckt." },
    { t: "Dividend", d: "Die Zahl, die geteilt wird (die erste)." },
    { t: "Divisor", d: "Die Zahl, durch die geteilt wird (die zweite)." },
    { t: "Quotient", d: "Das Ergebnis der Division." },
    { t: "Rest", d: "Das, was übrig bleibt, wenn die Division nicht aufgeht; er ist immer kleiner als der Divisor." },
    { t: "Aufgehende Division", d: "Division mit Rest 0." },
    { t: "Verteilen", d: "Division, mit der man gleiche Teile macht." },
    { t: "Aufteilen", d: "Division, mit der man erfährt, wie oft eine Zahl in einer anderen steckt." },
    { t: "Probe", d: "Kontrolle des Ergebnisses: Quotient × Divisor + Rest = Dividend." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Wie viel ist 45 : 5?", answer: 9, explain: "9 × 5 = 45." },
      { type: "mc", q: "In 63 : 9 = 7 ist die 9 …", options: ["der Dividend", "der Divisor", "der Quotient"], answer: 1, explain: "Der Divisor ist die Zahl, durch die geteilt wird." },
      { type: "num", q: "29 : 6 = 4 mit dem Rest …", answer: 5, explain: "6 × 4 = 24; 29 − 24 = 5 (kleiner als 6 ✔)." },
      { type: "tf", q: "Man kann eine Zahl durch 0 teilen.", answer: false, explain: "Es gibt keine Zahl, die mit 0 multipliziert zum Beispiel 8 ergibt: Das Teilen durch 0 ist unmöglich." },
      { type: "num", q: "Wie viel ist 84 : 3?", answer: 28, explain: "8 : 3 = 2 R 2; ich hole die 4 herunter → 24 : 3 = 8. Quotient 28." },
      { type: "mc", q: "„Ich habe 40 € und jedes Buch kostet 8 €. Wie viele Bücher kaufe ich?“ Das ist eine Division des Typs …", options: ["Verteilen", "Aufteilen", "keines von beiden"], answer: 1, explain: "Ich suche, wie oft 8 in 40 steckt: Aufteilen. 40 : 8 = 5 Bücher." },
      { type: "text", q: "Wie heißt das Ergebnis der Division?", answer: ["quotient", "der quotient", "quoziente"], explain: "Das Ergebnis heißt Quotient." },
      { type: "tf", q: "Der Rest muss immer kleiner als der Divisor sein.", answer: true, explain: "Sonst könnte man noch eine Gruppe machen." },
      { type: "num", q: "Wie viel ist 600 : 100?", answer: 6, explain: "Beim Teilen durch 100 streicht man zwei Nullen: 6." },
      { type: "order", q: "Bring die Schritte der schriftlichen Division in die richtige Reihenfolge.", items: ["Ich teile die erste Ziffer", "Ich multipliziere den Quotienten mit dem Divisor", "Ich subtrahiere", "Ich hole die nächste Ziffer herunter"], explain: "Teilen, multiplizieren, subtrahieren, herunterholen … und von vorn!" },
      { type: "num", q: "Oma hat 50 Kekse und packt sie in Tüten zu je 6. Wie viele Kekse bleiben übrig?", answer: 2, explain: "50 : 6 = 8 Rest 2 (8 × 6 = 48)." },
      { type: "mc", q: "Welche Probe stimmt für 38 : 5 = 7 R 3?", options: ["7 × 5 + 3 = 38", "7 × 3 + 5 = 38", "38 × 5 = 7"], answer: 0, explain: "7 × 5 = 35; 35 + 3 = 38 ✔" }
    ],
    gen: [["divExact", 2], ["divRem", 2]]
  }
});
