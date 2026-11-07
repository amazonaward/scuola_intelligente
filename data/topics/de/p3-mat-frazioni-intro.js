TOPIC('de', {
  id: "p3-mat-frazioni-intro",
  title: "Brüche: Einführung",
  intro: "Hast du schon einmal eine Torte 🎂 mit deinen Freunden geteilt? Dann kennst du <b>Brüche</b> schon! Wir lernen, <b>das Ganze in gleiche Teile zu teilen</b>, Brüche zu lesen und zu schreiben und den Bruchteil einer Gruppe von Gegenständen zu finden.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Das Ganze und die gleichen Teile",
      html: `<p>Das <b>Ganze</b> ist eine Sache, die ganz und unversehrt ist: eine Pizza 🍕, ein Blatt 📄, eine Tafel Schokolade 🍫, eine Gruppe von 12 Murmeln …</p>
<p><b>Einen Bruch bilden</b> heißt, das Ganze in <b>gleiche Teile</b> zu teilen.</p>
<ul>
<li>✅ Eine Pizza, in 4 Stücke geschnitten, die <b>alle gleich</b> sind: Jedes Stück ist <b>ein Viertel</b>.</li>
<li>❌ Eine Pizza, in 4 Stücke geschnitten, eins groß und drei klein: Das sind <b>keine</b> Viertel!</li>
</ul>
<p>Jeder gleiche Teil heißt <b>Stammbruch</b>. Wenn ich in 2 teile → <b>ein Halb</b> (1/2); in 3 → <b>ein Drittel</b> (1/3); in 4 → <b>ein Viertel</b> (1/4); in 5 → <b>ein Fünftel</b> (1/5) …</p>`
    },
    {
      type: "svg",
      title: "Gleiche Teile oder nicht?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="40" y="40" width="220" height="160" fill="#86efac" stroke="#166534" stroke-width="4"/>
<line x1="150" y1="40" x2="150" y2="200" stroke="#166534" stroke-width="4"/>
<line x1="40" y1="120" x2="260" y2="120" stroke="#166534" stroke-width="4"/>
<text x="150" y="240" font-size="24" fill="#166534" text-anchor="middle" font-weight="bold">✔ 4 gleiche Teile</text>
<text x="150" y="270" font-size="20" fill="#166534" text-anchor="middle">jeder Teil = 1/4</text>
<rect x="340" y="40" width="220" height="160" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<line x1="490" y1="40" x2="490" y2="200" stroke="#991b1b" stroke-width="4"/>
<line x1="340" y1="90" x2="490" y2="90" stroke="#991b1b" stroke-width="4"/>
<line x1="490" y1="150" x2="560" y2="150" stroke="#991b1b" stroke-width="4"/>
<text x="450" y="240" font-size="24" fill="#991b1b" text-anchor="middle" font-weight="bold">✘ verschiedene Teile</text>
<text x="450" y="270" font-size="20" fill="#991b1b" text-anchor="middle">das sind keine Viertel!</text>
</svg>`,
      caption: "Beide Blätter sind in 4 Stücke geteilt, aber nur das erste ist in Viertel geteilt."
    },
    {
      type: "text",
      title: "Wie man einen Bruch schreibt",
      html: `<p>Einen Bruch schreibt man mit <b>zwei Zahlen</b> und einem <b>Strich</b> dazwischen:</p>
<ul>
<li>unten steht der <b>Nenner</b> 👇: in wie viele gleiche Teile ich das Ganze geteilt habe;</li>
<li>oben steht der <b>Zähler</b> 👆: wie viele Teile ich nehme (oder anmale);</li>
<li>in der Mitte der <b>Bruchstrich</b>.</li>
</ul>
<p>Beispiel: <b>2/5</b> → ich habe das Ganze in 5 gleiche Teile geteilt und nehme 2. Man liest <b>„zwei Fünftel“</b>.</p>
<p>So liest man sie: 1/2 ein Halb · 1/3 ein Drittel · 3/4 drei Viertel · 2/5 zwei Fünftel · 5/6 fünf Sechstel · 3/8 drei Achtel · 7/10 sieben Zehntel.</p>`
    },
    {
      type: "widget",
      title: "Baue deinen eigenen Bruch",
      widget: "fractionPie",
      options: { n: 1, d: 4 },
      caption: "Bewege die Regler: Der Nenner schneidet die Torte, der Zähler färbt die Stücke ein."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Brüche lesen",
      questions: [
        { type: "mc", q: "Eine Torte ist in 8 gleiche Stücke geschnitten und ich male 3 an. Welcher Bruch ist das?", options: ["8/3", "3/8", "3/5"], answer: 1, explain: "8 Stücke insgesamt (Nenner), 3 angemalt (Zähler): 3/8." },
        { type: "mc", q: "Wie liest man 1/3?", options: ["ein Drittel", "eins und drei", "drei Einheiten"], answer: 0, explain: "Der Nenner 3 liest sich „Drittel“: ein Drittel." },
        { type: "tf", q: "Wenn ich einen Apfel in 2 verschiedene Stücke schneide, ist jedes 1/2.", answer: false, explain: "Um Hälften zu sein, müssen die Teile gleich sein." }
      ]
    },
    {
      type: "text",
      title: "Der Teil, der übrig bleibt",
      html: `<p>Wenn ich eine Pizza in <b>6 Stücke</b> teile und <b>4</b> esse, habe ich <b>4/6</b> gegessen.</p>
<p>Wie viel bleibt übrig? 6 − 4 = 2 Stücke, also <b>2/6</b>.</p>
<p>Und wenn ich alle Stücke zusammenlege? <b>6/6</b> = <b>1 ganze Pizza</b>! Wenn Zähler und Nenner <b>gleich</b> sind, ist der Bruch <b>ein Ganzes</b> wert.</p>`
    },
    {
      type: "text",
      title: "Der Bruchteil einer Gruppe von Gegenständen",
      html: `<p>Das Ganze kann auch eine <b>Gruppe</b> von Dingen sein. Um <b>1/3 von 12 Murmeln</b> zu finden:</p>
<ol>
<li>teile ich die 12 Murmeln in <b>3 gleiche Gruppen</b>: 12 : 3 = <b>4</b>;</li>
<li>eine Gruppe, also <b>1/3</b>, enthält <b>4 Murmeln</b>.</li>
</ol>
<p>Und <b>2/3 von 12</b>? Ich nehme 2 Gruppen: 4 × 2 = <b>8 Murmeln</b>.</p>
<p>🔑 Regel: Ich <b>teile durch die Zahl unten</b> (Nenner), dann <b>multipliziere ich mit der Zahl oben</b> (Zähler).</p>`
    },
    {
      type: "svg",
      title: "1/3 von 12 Murmeln",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="30" y="40" width="170" height="120" rx="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="4"/>
<rect x="215" y="40" width="170" height="120" rx="20" fill="#ffffff" stroke="#6b7280" stroke-width="3" stroke-dasharray="8 6"/>
<rect x="400" y="40" width="170" height="120" rx="20" fill="#ffffff" stroke="#6b7280" stroke-width="3" stroke-dasharray="8 6"/>
<g fill="#2563eb"><circle cx="80" cy="80" r="18"/><circle cx="150" cy="80" r="18"/><circle cx="80" cy="125" r="18"/><circle cx="150" cy="125" r="18"/></g>
<g fill="#a3a3a3"><circle cx="265" cy="80" r="18"/><circle cx="335" cy="80" r="18"/><circle cx="265" cy="125" r="18"/><circle cx="335" cy="125" r="18"/>
<circle cx="450" cy="80" r="18"/><circle cx="520" cy="80" r="18"/><circle cx="450" cy="125" r="18"/><circle cx="520" cy="125" r="18"/></g>
<text x="115" y="195" font-size="24" fill="#1d4ed8" text-anchor="middle" font-weight="bold">1/3 = 4</text>
<text x="300" y="195" font-size="22" fill="#6b7280" text-anchor="middle">1/3</text>
<text x="485" y="195" font-size="22" fill="#6b7280" text-anchor="middle">1/3</text>
<text x="300" y="240" font-size="22" fill="#1f2937" text-anchor="middle">12 : 3 = 4 Murmeln in jeder Gruppe</text>
</svg>`,
      caption: "Die Gruppe von 12 Murmeln ist in 3 gleiche Gruppen geteilt: Jede ist ein Drittel."
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Tafel Schokolade",
      html: `<p>Eine Tafel hat <b>10 Stückchen</b>. Marco isst <b>3</b> und Sofia <b>2</b>.</p>
<ul>
<li>Marco hat <b>3/10</b> der Tafel gegessen.</li>
<li>Sofia hat <b>2/10</b> gegessen.</li>
<li>Zusammen haben sie 5 Stückchen gegessen, also <b>5/10</b> … und das ist genau die <b>Hälfte</b> der Tafel! 🍫</li>
<li>Es bleiben <b>5/10</b> übrig.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Buntstifte",
      html: `<p>In einem Federmäppchen sind <b>20 Buntstifte</b>. <b>1/4</b> davon sind rot. Wie viele rote Stifte sind es?</p>
<ol>
<li>20 : 4 = <b>5</b> (ein Viertel der Stifte).</li>
<li>Zähler 1 → <b>5 rote Stifte</b> ✏️</li>
</ol>
<p>Und wenn es <b>3/4</b> wären? 5 × 3 = <b>15 Stifte</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …?",
      html: `<p>Das Wort <b>Fraktion/Bruch</b> (it. <i>frazione</i>) kommt vom lateinischen <i>frangere</i>, was <b>brechen</b> bedeutet. Ein Bruch ist ein Ganzes, das in gleiche Stücke „zerbrochen“ ist! Auch das Wort <b>fragil</b> (zerbrechlich) 🥚 kommt daher.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …?",
      html: `<p>Wenn du <b>„eine Viertelstunde“</b> sagst, benutzt du einen Bruch! Eine Stunde hat 60 Minuten: 60 : 4 = <b>15 Minuten</b>. Und die <b>„halbe Stunde“</b> ist 1/2 Stunde = <b>30 Minuten</b>. ⏰</p>`
    },
    {
      type: "remember",
      title: "Merk dir das",
      html: `<ul>
<li>Die Teile müssen <b>alle gleich</b> sein.</li>
<li>Nenner (unten) = in wie viele Teile ich teile. Zähler (oben) = wie viele Teile ich nehme.</li>
<li>Wenn oben und unten dieselbe Zahl steht, ist es <b>ein Ganzes</b>: 4/4 = 1.</li>
<li>Bruchteil einer Zahl: <b>: Nenner</b>, dann <b>× Zähler</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Brüche zu verstehen",
      intro: "Brüche kann man auf viele Arten sehen. Probier die, die dir am klarsten vorkommt!",
      tabs: [
        {
          label: "📄 Falte das Blatt",
          html: `<p>Nimm ein richtiges Blatt Papier!</p>
<ol>
<li>Falte es in der Mitte: Wenn du es aufmachst, siehst du <b>2 gleiche Teile</b> → jeder ist <b>1/2</b>.</li>
<li>Falte es noch einmal in der Mitte: Jetzt sind es <b>4</b> Teile → jeder ist <b>1/4</b>.</li>
<li>Noch einmal: <b>8 Teile</b> → jeder ist <b>1/8</b>.</li>
</ol>
<p>Male 3 Rechtecke an: Du hast <b>3/8</b> des Blattes angemalt. Je mehr du faltest, desto <b>kleiner</b> werden die Teile!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<rect x="20" y="40" width="160" height="120" fill="#fde68a" stroke="#1f2937" stroke-width="3"/>
<line x1="100" y1="40" x2="100" y2="160" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<text x="100" y="195" font-size="22" text-anchor="middle">1/2</text>
<rect x="220" y="40" width="160" height="120" fill="#bbf7d0" stroke="#1f2937" stroke-width="3"/>
<line x1="300" y1="40" x2="300" y2="160" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="220" y1="100" x2="380" y2="100" stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"/>
<text x="300" y="195" font-size="22" text-anchor="middle">1/4</text>
<rect x="420" y="40" width="160" height="120" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<rect x="420" y="40" width="40" height="60" fill="#f472b6"/><rect x="460" y="40" width="40" height="60" fill="#f472b6"/><rect x="500" y="40" width="40" height="60" fill="#f472b6"/>
<g stroke="#1f2937" stroke-width="3" stroke-dasharray="6 4"><line x1="460" y1="40" x2="460" y2="160"/><line x1="500" y1="40" x2="500" y2="160"/><line x1="540" y1="40" x2="540" y2="160"/><line x1="420" y1="100" x2="580" y2="100"/></g>
<text x="500" y="195" font-size="22" text-anchor="middle" fill="#be185d" font-weight="bold">3/8</text>
</svg>`
        },
        {
          label: "🧊 Würfelchen in 3D",
          html: `<p>Hier sind <b>12 Würfelchen</b> in 3 Reihen zu je 4.</p>
<ul>
<li>Eine <b>Reihe</b> ist <b>1/3</b> der Würfelchen: 4 Würfelchen.</li>
<li>Eine <b>Spalte</b> ist <b>1/4</b> der Würfelchen: 3 Würfelchen.</li>
</ul>
<p>Dreh das Modell und ändere die Regler: Wie viele Würfelchen sind in 1/3? Und in 1/4?</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "📏 Auf dem Zahlenstrahl",
          html: `<p>Brüche sind auch <b>Zahlen</b>, die auf dem Zahlenstrahl zwischen 0 und 1 liegen. Stell dir vor, die Strecke von 0 bis 1 ist in <b>4 gleiche Sprünge</b> geteilt: Ein Sprung ist <b>1/4</b>, zwei Sprünge <b>2/4</b> (also die Hälfte!), vier Sprünge kommen bei <b>1</b> an.</p>
<p>Hier geht der Zahlenstrahl von 0 bis 8: Denk dir, dass jede Strecke von 0 bis 4 <b>ein Ganzes</b> ist, in Viertel geteilt. Die Markierung bei 2 ist die Hälfte, also 2/4!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 8, step: 1, marks: [2, 4] }
        },
        {
          label: "👨‍🍳 Der Vergleich mit dem Koch",
          html: `<p>Ein Rezept sagt: <b>„1/2 Liter Milch“</b>. Der Koch nimmt eine 1-Liter-Flasche und gießt die <b>Hälfte</b> ein.</p>
<p>Dann sagt es: <b>„3/4 Stück Butter“</b>. Er schneidet das Stück in <b>4 gleiche Teile</b> und benutzt <b>3</b>.</p>
<p>In der Küche benutzt man immer Brüche: ein halbes Kilo, ein Viertelliter, eine Drittel Tasse … 🥛🧈</p>`
        },
        {
          label: "🇬🇧 Wie man es auf Englisch sagt",
          html: `<p>Auch im Englischen haben die Brüche besondere Namen:</p>
<ul>
<li>1/2 = <b>one half</b> (ein Halb)</li>
<li>1/4 = <b>one quarter</b> (ein Viertel) – wie der „quarter“ zu 25 Cent, der genau 1/4 Dollar ist! 💵</li>
<li>1/3 = <b>one third</b>, 2/5 = <b>two fifths</b></li>
</ul>
<p>In vielen Ländern schreibt man den Bruch statt mit dem waagerechten Strich mit dem Schrägstrich: <b>3/4</b>. Das sind zwei Arten, dasselbe zu schreiben.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Brüche: Tipp einen Knoten an und entdecke das Warum",
      nodes: [
        { id: "intero", label: "Das Ganze", x: 50, y: 8, color: "#2563eb", html: "Die Sache, ganz und unversehrt: eine Pizza, ein Blatt, eine Gruppe von Gegenständen.", why: "Ohne zu wissen, was das Ganze ist, hat ein Bruch keinen Sinn: Die Hälfte einer kleinen Pizza ist weniger als die Hälfte einer Riesenpizza!" },
        { id: "uguali", label: "Gleiche Teile", x: 50, y: 28, color: "#16a34a", html: "Um das Ganze in Brüche zu teilen, müssen die Stücke alle gleich sein.", why: "Brüche sind entstanden, um gerecht zu teilen: Land, Ernten, Brot. Wenn die Teile nicht gleich sind, bekommt jemand mehr!" },
        { id: "unita", label: "Stammbruch", x: 15, y: 45, color: "#a855f7", html: "Nur ein Teil des Ganzen: 1/2, 1/3, 1/4 …", why: "Die alten Ägypter benutzten vor fast 4000 Jahren fast nur diese Brüche mit dem Zähler 1. Der Papyrus Rhind (etwa 1650 v. Chr.) ist voll davon." },
        { id: "den", label: "Nenner", x: 30, y: 65, color: "#f59e0b", html: "Die Zahl unter dem Strich: in wie viele gleiche Teile ich teile.", why: "Er heißt so, weil er den Teilen den „Namen gibt“: 4 → Viertel, 5 → Fünftel, 10 → Zehntel." },
        { id: "num", label: "Zähler", x: 70, y: 65, color: "#ef4444", html: "Die Zahl über dem Strich: wie viele Teile ich nehme.", why: "Er kommt von „zählen“: Er zählt die genommenen Teile." },
        { id: "intera", label: "Bruch = 1 Ganzes", x: 85, y: 45, color: "#0ea5e9", html: "Wenn Zähler und Nenner gleich sind: 5/5 = 1.", why: "Wenn ich alle Teile nehme, in die ich geteilt habe, habe ich das Ganze wieder zusammengesetzt." },
        { id: "gruppo", label: "Bruchteil einer Zahl", x: 50, y: 85, color: "#14b8a6", html: "Man teilt durch den Nenner und multipliziert mit dem Zähler.", why: "Das Teilen durch den Nenner macht die gleichen Gruppen (wie viel ein Teil wert ist); das Multiplizieren mit dem Zähler nimmt die richtige Anzahl von Gruppen." },
        { id: "linea", label: "Bruchstrich", x: 85, y: 88, color: "#64748b", html: "Der Strich zwischen Zähler und Nenner.", why: "Ihn benutzten arabische Mathematiker, und Leonardo Fibonacci aus Pisa brachte ihn im Buch <i>Liber Abaci</i> (1202) nach Europa." }
      ],
      edges: [
        ["intero", "uguali", "wird geteilt in"],
        ["uguali", "unita", "jeder ist ein"],
        ["uguali", "den", "wie viele →"],
        ["uguali", "num", "wie viele ich nehme →"],
        ["num", "intera", "wenn gleich dem Nenner"],
        ["den", "gruppo", ": durch den Nenner"],
        ["num", "gruppo", "× mit dem Zähler"],
        ["num", "linea", "getrennt durch den"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: der Bruchteil einer Zahl",
      questions: [
        { type: "num", q: "Wie viel ist 1/2 von 16?", answer: 8, explain: "16 : 2 = 8." },
        { type: "num", q: "Wie viel ist 1/5 von 30?", answer: 6, explain: "30 : 5 = 6." },
        { type: "mc", q: "Welcher Bruch ist ein Ganzes wert?", options: ["3/4", "6/6", "1/6"], answer: 1, explain: "6 Teile von 6: das ganze Ganze." }
      ]
    }
  ],
  glossary: [
    { t: "Das Ganze", d: "Die Sache oder die Gruppe als Ganzes, die wir teilen wollen." },
    { t: "Bruch", d: "Ein oder mehrere gleiche Teile eines Ganzen." },
    { t: "Einen Bruch bilden", d: "Ein Ganzes in gleiche Teile teilen." },
    { t: "Stammbruch", d: "Nur einer der gleichen Teile, mit dem Zähler 1 (z. B. 1/4)." },
    { t: "Zähler", d: "Die Zahl über dem Strich: wie viele Teile ich nehme." },
    { t: "Nenner", d: "Die Zahl unter dem Strich: in wie viele gleiche Teile ich das Ganze teile." },
    { t: "Bruchstrich", d: "Der Strich, der Zähler und Nenner trennt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Um einen Bruch zu bilden, müssen die Teile …", options: ["alle gleich sein", "alle verschieden sein", "mehr als zehn sein"], answer: 0, explain: "Die Teile müssen gleich sein." },
      { type: "mc", q: "In 3/7 ist der Zähler …", options: ["7", "3", "10"], answer: 1, explain: "Der Zähler steht über dem Strich: 3." },
      { type: "text", q: "Wie heißt die Zahl unter dem Bruchstrich?", answer: ["nenner", "der nenner", "denominatore"], explain: "Es ist der Nenner: Er sagt, in wie viele Teile ich teile." },
      { type: "mc", q: "Wie liest man 2/5?", options: ["zwei Fünftel", "fünf Halbe", "zwei und fünf"], answer: 0, explain: "Zwei (Zähler) Fünftel (Nenner 5)." },
      { type: "tf", q: "4/4 ist gleich einem Ganzen.", answer: true, explain: "Ich nehme alle 4 Teile: das Ganze." },
      { type: "num", q: "Eine Pizza ist in 8 Stücke geschnitten und du isst 3. Wie viele Stücke bleiben übrig?", answer: 5, explain: "8 − 3 = 5 Stücke, also 5/8." },
      { type: "num", q: "Wie viel ist 1/4 von 20?", answer: 5, explain: "20 : 4 = 5." },
      { type: "num", q: "Wie viel ist 2/3 von 9?", answer: 6, explain: "9 : 3 = 3; 3 × 2 = 6." },
      { type: "tf", q: "Je größer der Nenner, desto größer ist jeder Teil.", answer: false, explain: "Es ist umgekehrt: Wenn ich in mehr Stücke schneide, ist jedes Stück kleiner. 1/8 ist kleiner als 1/2." },
      { type: "order", q: "Ordne vom größten zum kleinsten Teil.", items: ["1/2", "1/3", "1/4", "1/10"], explain: "Bei Zähler 1 gilt: Je größer der Nenner, desto kleiner der Teil." },
      { type: "mc", q: "Wie viele Minuten sind eine Viertelstunde?", options: ["25", "15", "4"], answer: 1, explain: "60 : 4 = 15 Minuten." }
    ],
    gen: [["fracOf", 3]]
  }
});
