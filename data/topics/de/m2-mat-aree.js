TOPIC('de', {
  id: "m2-mat-aree",
  title: "Die Flächeninhalte der Vielecke",
  intro: "Wie viele Fliesen braucht man für den Fußboden? Wie viel Farbe für eine Wand? Wie viel Rasen für ein Fußballfeld? Um das zu beantworten, braucht man den <b>Flächeninhalt</b>. Wir entdecken, woher die Formeln für Rechteck, Quadrat, Parallelogramm, Dreieck, Raute, Trapez und regelmäßige Vielecke kommen und wie man sie auch «rückwärts» mit den <b>umgestellten Formeln</b> benutzt.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Fläche, Flächeninhalt und Flächengleichheit",
      html: `<p>Die <b>Fläche</b> ist der Teil der Ebene, der von einem Vieleck umschlossen wird; der <b>Flächeninhalt</b> ist das <b>Maß</b> der Fläche, also wie oft sie ein als Einheit gewähltes Quadrätchen enthält.</p>
<p>Die wichtigste Maßeinheit ist der <b>Quadratmeter (m²)</b>: ein Quadrat mit der Seite 1 m. Jede Einheit ist <b>100-mal</b> größer als die nächste:</p>
<p style="text-align:center"><b>km² → hm² → dam² → m² → dm² → cm² → mm²</b> &nbsp; (× 100 bei jedem Schritt nach rechts)</p>
<p>Beispiel: 1 m² = 100 dm² = 10 000 cm². In der Landwirtschaft benutzt man das <b>Hektar</b> (ha = 1 hm² = 10 000 m²) und das <b>Ar</b> (a = 100 m²).</p>
<p>Zwei Figuren sind <b>flächengleich</b> (oder gleichwertig), wenn sie den <b>gleichen Flächeninhalt</b> haben, auch wenn sie verschiedene Formen haben. Zwei Figuren aus denselben Teilen, die anders zusammengesetzt sind (<b>zerlegungsgleich</b>), sind immer flächengleich: Auf dieser Idee beruhen alle Formeln!</p>`
    },
    {
      type: "text",
      title: "Rechteck und Quadrat",
      html: `<p><b>Rechteck</b>: In einem Rechteck mit der Grundseite 5 cm und der Höhe 3 cm liegen 3 Reihen zu je 5 Quadrätchen von 1 cm²: 5 × 3 = 15 cm².</p>
<p style="text-align:center;font-size:1.15em"><b>A = a × b</b> (hier: <b>A = g × h</b>) &nbsp;&nbsp; umgestellt: <b>g = A : h</b> &nbsp; <b>h = A : g</b></p>
<p><b>Quadrat</b>: Es ist ein Rechteck mit gleicher Grundseite und Höhe.</p>
<p style="text-align:center;font-size:1.15em"><b>A = a × a = a²</b> &nbsp;&nbsp; umgestellt: <b>a = √A</b></p>
<p>Das Quadrat kann man auch als Raute sehen: <b>A = d² : 2</b> (d = Diagonale), und damit <b>d = √(2 × A)</b>.</p>`
    },
    {
      type: "widget",
      title: "Flächeninhalt des Rechtecks auf Kästchen",
      widget: "areaGrid",
      options: { w: 5, h: 3, max: 12 },
      caption: "Ändere Grundseite und Höhe und zähle die Kästchen: Der Flächeninhalt ist immer Grundseite × Höhe."
    },
    {
      type: "text",
      title: "Parallelogramm und Dreieck",
      html: `<p><b>Parallelogramm</b>: Wenn du das Dreieck links abschneidest und rechts anlegst, erhältst du ein <b>Rechteck</b> mit derselben Grundseite und derselben Höhe (sie sind zerlegungsgleich):</p>
<p style="text-align:center;font-size:1.15em"><b>A = g × h</b> &nbsp;&nbsp; <b>g = A : h</b> &nbsp; <b>h = A : g</b></p>
<p><b>Dreieck</b>: Zwei gleiche Dreiecke, aneinandergelegt, bilden ein Parallelogramm. Also ist das Dreieck die <b>Hälfte</b> des Parallelogramms mit gleicher Grundseite und Höhe:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (g × h) : 2</b> &nbsp;&nbsp; <b>g = (2 × A) : h</b> &nbsp; <b>h = (2 × A) : g</b></p>
<p>Im <b>rechtwinkligen Dreieck</b> sind die beiden Katheten Grundseite und Höhe: A = (k₁ × k₂) : 2. Merke: Die Höhe steht immer <b>senkrecht</b> auf der Grundseite und kann auch <b>außerhalb</b> des Dreiecks liegen (stumpfwinklige Dreiecke).</p>`
    },
    {
      type: "svg",
      title: "Vom Parallelogramm zum Rechteck, vom Dreieck zum Parallelogramm",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<polygon points="40,130 100,40 260,40 200,130" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="40,130 100,40 100,130" fill="#f97316" stroke="#92400e" stroke-width="3"/>
<line x1="100" y1="40" x2="100" y2="130" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="150" y="155" font-size="15" text-anchor="middle" fill="#78350f">Grundseite g</text>
<text x="108" y="95" font-size="15" fill="#dc2626">h</text>
<text x="290" y="95" font-size="34" fill="#1f2937">→</text>
<rect x="340" y="40" width="160" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="440,130 500,40 500,130" fill="#f97316" stroke="#92400e" stroke-width="3"/>
<text x="420" y="155" font-size="15" text-anchor="middle" fill="#78350f">Rechteck g × h</text>
<polygon points="60,270 140,180 220,270" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="140" y="292" font-size="15" text-anchor="middle" fill="#1e3a8a">Dreieck</text>
<text x="290" y="235" font-size="34" fill="#1f2937">→</text>
<polygon points="340,270 420,180 500,270" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<polygon points="420,180 580,180 500,270" fill="#a5b4fc" stroke="#1e3a8a" stroke-width="3"/>
<text x="460" y="292" font-size="15" text-anchor="middle" fill="#1e3a8a">2 Dreiecke = Parallelogramm</text>
</svg>`,
      caption: "Wenn man ein Stück verschiebt, wird das Parallelogramm zum Rechteck; wenn man ein Dreieck verdoppelt, erhält man ein Parallelogramm."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die ersten Formeln",
      questions: [
        { type: "num", q: "Ein Rechteck hat die Grundseite 12 cm und die Höhe 7 cm. Flächeninhalt?", answer: 84, unit: "cm²", explain: "12 × 7 = 84 cm²." },
        { type: "num", q: "Ein Dreieck hat den Flächeninhalt 30 cm² und die Grundseite 10 cm. Wie lang ist die Höhe?", answer: 6, unit: "cm", explain: "h = 2 × 30 : 10 = 6 cm." },
        { type: "num", q: "Wie viele cm² sind 3 dm²?", answer: 300, unit: "cm²", explain: "1 dm² = 100 cm² → 3 × 100 = 300 cm²." }
      ]
    },
    {
      type: "text",
      title: "Raute und Trapez",
      html: `<p><b>Raute</b> (Rhombus): Sie liegt in einem Rechteck, dessen Seiten die beiden Diagonalen sind, und nimmt genau die <b>Hälfte</b> davon ein:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (e × f) : 2</b> (hier: <b>A = (D × d) : 2</b>) &nbsp;&nbsp; <b>D = (2 × A) : d</b> &nbsp; <b>d = (2 × A) : D</b></p>
<p>Die Raute ist auch ein Parallelogramm, also gilt auch A = Seite × Höhe. (Die Formel mit den Diagonalen gilt für jedes Viereck mit senkrechten Diagonalen, wie den <b>Drachen</b>/das Deltoid.)</p>
<p><b>Trapez</b>: Zwei gleiche Trapeze, eines umgedreht, bilden ein Parallelogramm mit der Grundseite (B + b) und der Höhe h:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (B + b) × h : 2</b> &nbsp;&nbsp; <b>h = (2 × A) : (B + b)</b> &nbsp; <b>B + b = (2 × A) : h</b></p>`
    },
    {
      type: "svg",
      title: "Raute und verdoppeltes Trapez",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdfa"/>
<rect x="30" y="40" width="220" height="160" fill="#ccfbf1" stroke="#0f766e" stroke-width="2" stroke-dasharray="8 5"/>
<polygon points="140,40 250,120 140,200 30,120" fill="#14b8a6" stroke="#0f766e" stroke-width="3"/>
<line x1="30" y1="120" x2="250" y2="120" stroke="#fff" stroke-width="3"/>
<line x1="140" y1="40" x2="140" y2="200" stroke="#fff" stroke-width="3"/>
<text x="200" y="113" font-size="16" fill="#fff" font-weight="bold">D</text>
<text x="146" y="70" font-size="16" fill="#fff" font-weight="bold">d</text>
<text x="140" y="230" font-size="16" text-anchor="middle" fill="#134e4a" font-weight="bold">Raute = Hälfte des Rechtecks D × d</text>
<polygon points="270,200 310,90 410,90 440,200" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<polygon points="410,90 580,90 540,200 440,200" fill="#ddd6fe" stroke="#5b21b6" stroke-width="3"/>
<text x="360" y="82" font-size="15" text-anchor="middle" fill="#4c1d95">b</text>
<text x="355" y="220" font-size="15" text-anchor="middle" fill="#4c1d95">B</text>
<text x="495" y="82" font-size="15" text-anchor="middle" fill="#4c1d95">B</text>
<text x="490" y="220" font-size="15" text-anchor="middle" fill="#4c1d95">b</text>
<text x="425" y="250" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">2 Trapeze = Parallelogramm</text>
<text x="425" y="272" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">mit der Grundseite B + b</text>
</svg>`,
      caption: "Die Raute nimmt die Hälfte des Rechtecks über den Diagonalen ein; zwei gleiche Trapeze bilden ein Parallelogramm."
    },
    {
      type: "text",
      title: "Regelmäßige und beliebige Vielecke",
      html: `<p>Ein <b>regelmäßiges Vieleck</b> (alle Seiten und Winkel gleich) lässt sich in viele <b>gleiche Dreiecke</b> mit der Spitze im Mittelpunkt zerlegen. Die Höhe jedes Dreiecks ist das <b>Apothem</b> (a, Inkreisradius), der Radius des einbeschriebenen Kreises.</p>
<p style="text-align:center;font-size:1.15em"><b>A = (U × a) : 2</b> &nbsp; (U = Umfang; in den italienischen Büchern: 2p × a : 2 = p × a, mit p = halber Umfang)</p>
<p>Umgestellt: <b>a = (2 × A) : U</b> &nbsp; <b>U = (2 × A) : a</b>.</p>
<p>In jedem regelmäßigen Vieleck ist das Verhältnis Apothem/Seite eine <b>feste Zahl</b> (f): a = s × f.</p>
<table>
<tr><th>Vieleck</th><td>Gleichseitiges Dreieck</td><td>Quadrat</td><td>Fünfeck</td><td>Sechseck</td><td>Achteck</td></tr>
<tr><th>f (a = s·f)</th><td>0,289</td><td>0,5</td><td>0,688</td><td>0,866</td><td>1,207</td></tr>
</table>
<p><b>Unregelmäßige Vielecke</b>: Man <b>zerlegt</b> sie in bekannte Figuren (Rechtecke, Dreiecke, Trapeze) und addiert die Flächeninhalte; oder man berechnet den Flächeninhalt einer größeren Figur und <b>zieht</b> die überschüssigen Stücke <b>ab</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Küche fliesen",
      html: `<p>Eine rechteckige Küche misst <b>4,5 m × 3,2 m</b>. Die Fliesen sind quadratisch mit der Seite <b>40 cm</b>, und ein Karton enthält 10 davon. Wie viele Kartons braucht man?</p>
<ol>
<li>Flächeninhalt des Fußbodens: 4,5 × 3,2 = <b>14,4 m²</b>.</li>
<li>Flächeninhalt einer Fliese: 0,4 × 0,4 = <b>0,16 m²</b>.</li>
<li>Zahl der Fliesen: 14,4 : 0,16 = <b>90</b>.</li>
<li>Kartons: 90 : 10 = <b>9</b> (in Wirklichkeit kauft man einen mehr für Zuschnitte und Verschnitt!).</li>
</ol>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: ein unregelmäßiges Grundstück",
      html: `<p>Ein Gemüsegarten hat die Form eines <b>rechtwinkligen Trapezes</b> mit den Grundseiten 18 m und 12 m und der Höhe 10 m. Darin liegt ein quadratisches Wasserbecken mit der Seite 2 m, das nicht bepflanzt wird.</p>
<ol>
<li>Flächeninhalt des Trapezes: (18 + 12) × 10 : 2 = <b>150 m²</b>.</li>
<li>Flächeninhalt des Beckens: 2² = <b>4 m²</b>.</li>
<li>Bepflanzbare Fläche: 150 − 4 = <b>146 m²</b>.</li>
</ol>
<p>Wenn ein Sack Dünger für 25 m² reicht, braucht man 146 : 25 = 5,84 → <b>6 Säcke</b>.</p>
<p><b>Umgestellte Formel</b>: Und wenn wir wüssten, dass der Garten 150 m² hat, mit den Grundseiten 18 und 12 m, wäre die Höhe h = 2 × 150 : (18 + 12) = 300 : 30 = <b>10 m</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Flächen am Nil",
      html: `<p>Das Wort <b>Geometrie</b> bedeutet «Erdmessung». Nach dem griechischen Geschichtsschreiber <b>Herodot</b> entstand sie in Ägypten: Jedes Jahr löschten die Überschwemmungen des <b>Nils</b> die Grenzen der Felder aus, und die «Seilspanner» mussten sie neu vermessen, um die Steuern zu berechnen. Der <b>Papyrus Rhind</b> (um 1650 v. Chr.) enthält Aufgaben zum Flächeninhalt von Dreiecken, Trapezen und sogar des Kreises.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Die Formel von Pick",
      html: `<p>Im Jahr <b>1899</b> entdeckte der österreichische Mathematiker <b>Georg Pick</b> eine überraschende Formel für Vielecke, deren Ecken auf den Punkten eines Gitters liegen: <b>A = I + R/2 − 1</b>, wobei <b>I</b> die Zahl der <b>inneren</b> Punkte und <b>R</b> die Zahl der Punkte auf dem <b>Rand</b> ist. Man muss nur die Pünktchen zählen! Probiere es an einem Quadrat 2 × 2: I = 1, R = 8 → A = 1 + 4 − 1 = 4 ✓.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Flächeninhalte zu verstehen",
      intro: "Die Formeln kann man durch Schneiden, Verschieben und Zusammensetzen entdecken. Hier einige andere Wege.",
      tabs: [
        {
          label: "✂️ Schneiden und neu zusammensetzen (China)",
          html: `<p>Im alten China benutzten der Text <b>«Neun Kapitel der mathematischen Kunst»</b> (um das 2.–1. Jahrhundert v. Chr.) und der Kommentator <b>Liu Hui</b> (3. Jahrhundert) das <b>«Hinein-Hinaus-Prinzip»</b> (<i>chu ru xiang bu</i>): Man schneidet eine Figur in Stücke, die man so verschiebt, dass ein Rechteck entsteht. Der Flächeninhalt ändert sich nicht, weil die Stücke dieselben sind! Genau das tun wir bei Parallelogramm, Dreieck und Trapez.</p>`
        },
        {
          label: "🧩 Das Tangram",
          html: `<p>Das <b>Tangram</b> ist ein chinesisches Legespiel: ein Quadrat, in <b>7 Teile</b> geschnitten (5 Dreiecke, 1 Quadrat, 1 Parallelogramm). Mit denselben 7 Teilen kannst du eine Katze, ein Boot, ein Haus legen … und alle diese Figuren haben <b>denselben Flächeninhalt</b> wie das Ausgangsquadrat: Sie sind <b>zerlegungsgleich</b>, also flächengleich.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ffffff"/>
<polygon points="40,20 260,20 150,130" fill="#ef4444" stroke="#fff" stroke-width="3"/>
<polygon points="40,20 150,130 40,240" fill="#3b82f6" stroke="#fff" stroke-width="3"/>
<polygon points="260,20 260,130 205,75" fill="#facc15" stroke="#fff" stroke-width="3"/>
<polygon points="205,75 260,130 205,185 150,130" fill="#22c55e" stroke="#fff" stroke-width="3"/>
<polygon points="150,130 205,185 95,185" fill="#a855f7" stroke="#fff" stroke-width="3"/>
<polygon points="260,130 260,240 150,240" fill="#f97316" stroke="#fff" stroke-width="3"/>
<polygon points="40,240 95,185 205,185 150,240" fill="#14b8a6" stroke="#fff" stroke-width="3"/>
<text x="300" y="70" font-size="18" fill="#1f2937" font-weight="bold">7 Teile, 1 Quadrat</text>
<text x="300" y="110" font-size="16" fill="#334155">2 große Dreiecke = 1/2</text>
<text x="300" y="138" font-size="16" fill="#334155">1 mittleres Dreieck = 1/8</text>
<text x="300" y="166" font-size="16" fill="#334155">2 kleine Dreiecke = 1/8</text>
<text x="300" y="194" font-size="16" fill="#334155">1 Quadrätchen = 1/8</text>
<text x="300" y="222" font-size="16" fill="#334155">1 Parallelogramm = 1/8</text>
<text x="300" y="256" font-size="16" fill="#be185d" font-weight="bold">Insgesamt = 1 ganzes Quadrat</text>
</svg>`
        },
        {
          label: "🧊 Würfel in 3D",
          html: `<p>Der Flächeninhalt des Rechtecks ist die Zahl der Quadrätchen in Reihen und Spalten: Hier siehst du <b>4 × 6 = 24</b> (denke an die Oberseite der Würfelchen). Ändere die Regler: Grundseite und Höhe werden immer multipliziert. Und wenn du eine weitere Schicht Würfelchen obenauf legst? Dann gehst du vom <b>Flächeninhalt</b> zum <b>Volumen</b> über!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 4, b: 6 }
        },
        {
          label: "🔺 Das sechseckige Prisma",
          html: `<p>Drehe das Prisma: Seine Grundfläche ist ein <b>regelmäßiges Sechseck</b>. Wenn du es von oben betrachtest, siehst du, dass sich das Sechseck in <b>6 gleiche gleichseitige Dreiecke</b> mit der Spitze im Mittelpunkt teilt. Die Höhe jedes einzelnen ist das <b>Apothem</b>: Deshalb ist A = Umfang × Apothem : 2 (6 Dreiecke × Seite × Apothem : 2).</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 0.6, color: "#f59e0b", labels: true }
        },
        {
          label: "🃏 Formeln auswendig",
          html: `<p>Ordne jeder Figur ihre Formel zu.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Rechteck", "g × h"],
              ["Quadrat", "a²"],
              ["Dreieck", "g × h : 2"],
              ["Raute", "D × d : 2"],
              ["Trapez", "(B + b) × h : 2"],
              ["Regelmäßiges Vieleck", "U × a : 2"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Flächeninhalte",
      nodes: [
        { id: "area", label: "Flächeninhalt", x: 50, y: 6, color: "#0f172a", html: "Maß der Fläche in Quadrateinheiten.", why: "Einen Flächeninhalt zu messen bedeutet zu zählen, wie viele Quadrateinheiten hineinpassen. Das metrische Dezimalsystem mit dem m² entsteht in Frankreich <b>1795</b>; in Italien ist es seit 1861 Pflicht." },
        { id: "equi", label: "Flächengleichheit", x: 50, y: 24, color: "#7c3aed", html: "Verschiedene Figuren mit gleichem Flächeninhalt.", why: "Sie beruht auf einer Idee, die Euklid unter die «allgemeinen Begriffe» stellt: <i>Dinge, die sich decken, sind gleich</i> und <i>das Ganze ist größer als der Teil</i>. Wenn man Stücke verschiebt, ohne welche zu verlieren, bleibt der Flächeninhalt gleich." },
        { id: "rett", label: "Rechteck", x: 18, y: 42, color: "#2563eb", html: "A = g × h.", why: "Es ist die «Basis»-Figur, weil man es genau mit Reihen von Quadrätchen füllen kann: g Quadrätchen mal h Reihen. Alle anderen Formeln gewinnt man, indem man die Figuren in Rechtecke verwandelt." },
        { id: "parall", label: "Parallelogramm", x: 42, y: 50, color: "#0891b2", html: "A = g × h.", why: "Wenn man ein Dreieck an einer Seite abschneidet und an der anderen anlegt, wird es zu einem Rechteck mit gleicher Grundseite und Höhe (Euklid, Elemente I, 35: Parallelogramme auf derselben Grundseite und zwischen denselben Parallelen sind gleichwertig)." },
        { id: "tri", label: "Dreieck", x: 66, y: 46, color: "#16a34a", html: "A = g × h : 2.", why: "Zwei gleiche Dreiecke bilden ein Parallelogramm (Euklid I, 41). Deshalb erscheint das «: 2». Jedes Vieleck lässt sich in Dreiecke zerlegen: Deshalb ist das Dreieck der «Baustein» der Geometrie." },
        { id: "rombo", label: "Raute", x: 84, y: 66, color: "#db2777", html: "A = D × d : 2.", why: "Die Diagonalen stehen senkrecht aufeinander und teilen die Raute in 4 gleiche rechtwinklige Dreiecke; das Rechteck über den Diagonalen enthält 8 davon." },
        { id: "trap", label: "Trapez", x: 60, y: 76, color: "#ca8a04", html: "A = (B + b) × h : 2.", why: "Zwei gleiche Trapeze, eines umgedreht, bilden ein Parallelogramm mit der Grundseite B + b. Diese Formel kannten schon die <b>Ägypter</b> und die <b>Babylonier</b>, um Felder zu vermessen." },
        { id: "reg", label: "Regelmäßige Vielecke", x: 30, y: 76, color: "#ea580c", html: "A = U × a : 2; a = s × f.", why: "Sie werden in n gleiche Dreiecke mit dem Apothem als Höhe zerlegt. Die feste Zahl f hängt nur von der Form (von den Winkeln) ab, nicht von der Größe: Das ist eine Folge der <b>Ähnlichkeit</b>." },
        { id: "inv", label: "Umgestellte Formeln", x: 18, y: 94, color: "#64748b", html: "Eine Seite oder eine Höhe aus dem Flächeninhalt gewinnen.", why: "Man erhält sie, indem man die Operationen in umgekehrter Reihenfolge «auflöst»: Wenn A = g × h : 2, dann 2A = g × h und h = 2A : g. Es ist dieselbe Überlegung wie bei Gleichungen, die du in der dritten Klasse der Mittelschule lernst." }
      ],
      edges: [
        ["area", "equi", "wird verglichen mit"],
        ["equi", "rett", "führt zurück auf"],
        ["rett", "parall", "schneiden und verschieben"],
        ["parall", "tri", "Hälfte"],
        ["tri", "rombo", "4 Dreiecke"],
        ["parall", "trap", "Hälfte von 2 Trapezen"],
        ["tri", "reg", "n Dreiecke"],
        ["rett", "inv", "werden rückwärts benutzt"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Raute, Trapez, Vielecke",
      questions: [
        { type: "num", q: "Eine Raute hat die Diagonalen 16 cm und 10 cm. Flächeninhalt?", answer: 80, unit: "cm²", explain: "16 × 10 : 2 = 80 cm²." },
        { type: "num", q: "Ein Trapez hat die Grundseiten 9 cm und 5 cm und die Höhe 4 cm. Flächeninhalt?", answer: 28, unit: "cm²", explain: "(9 + 5) × 4 : 2 = 28 cm²." },
        { type: "num", q: "Ein regelmäßiges Sechseck hat den Umfang 60 cm und das Apothem 8,66 cm. Flächeninhalt?", answer: 259.8, tol: 0.1, unit: "cm²", explain: "60 × 8,66 : 2 = 259,8 cm²." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<table>
<tr><th>Figur</th><th>Flächeninhalt</th><th>Umgestellte Formeln</th></tr>
<tr><td>Rechteck / Parallelogramm</td><td>g × h</td><td>g = A : h; h = A : g</td></tr>
<tr><td>Quadrat</td><td>a² (oder d² : 2)</td><td>a = √A</td></tr>
<tr><td>Dreieck</td><td>g × h : 2</td><td>g = 2A : h; h = 2A : g</td></tr>
<tr><td>Raute</td><td>D × d : 2</td><td>D = 2A : d; d = 2A : D</td></tr>
<tr><td>Trapez</td><td>(B + b) × h : 2</td><td>h = 2A : (B + b); B + b = 2A : h</td></tr>
<tr><td>Regelmäßiges Vieleck</td><td>U × a : 2</td><td>a = 2A : U; U = 2A : a</td></tr>
</table>`
    }
  ],
  glossary: [
    { t: "Fläche", d: "Der Teil der Ebene, der von einer Figur umschlossen wird." },
    { t: "Flächeninhalt", d: "Das Maß einer Fläche." },
    { t: "Flächengleich", d: "Figuren, die den gleichen Flächeninhalt haben." },
    { t: "Zerlegungsgleich", d: "Figuren aus denselben Teilen, die anders angeordnet sind." },
    { t: "Höhe", d: "Strecke, die senkrecht zur Grundseite von der gegenüberliegenden Ecke (oder Seite) gezogen wird." },
    { t: "Apothem", d: "Abstand vom Mittelpunkt eines regelmäßigen Vielecks zu einer seiner Seiten; Radius des einbeschriebenen Kreises." },
    { t: "Feste Zahl", d: "Konstantes Verhältnis zwischen Apothem und Seite eines regelmäßigen Vielecks." },
    { t: "Umgestellte Formel", d: "Formel, die ein Element (Grundseite, Höhe …) aus dem Flächeninhalt gewinnt." },
    { t: "Hektar", d: "Einheit des landwirtschaftlichen Flächenmaßes, gleich 10 000 m²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Ein Quadrat hat die Seite 9 cm. Flächeninhalt?", answer: 81, unit: "cm²", explain: "9² = 81 cm²." },
      { type: "num", q: "Ein Quadrat hat den Flächeninhalt 144 m². Wie lang ist die Seite?", answer: 12, unit: "m", explain: "√144 = 12 m." },
      { type: "num", q: "Ein Parallelogramm hat den Flächeninhalt 96 cm² und die Höhe 8 cm. Wie lang ist die Grundseite?", answer: 12, unit: "cm", explain: "g = 96 : 8 = 12 cm." },
      { type: "num", q: "Ein rechtwinkliges Dreieck hat die Katheten 6 cm und 8 cm. Flächeninhalt?", answer: 24, unit: "cm²", explain: "6 × 8 : 2 = 24 cm²." },
      { type: "num", q: "Eine Raute hat den Flächeninhalt 60 cm² und eine Diagonale von 12 cm. Wie lang ist die andere Diagonale?", answer: 10, unit: "cm", explain: "d = 2 × 60 : 12 = 10 cm." },
      { type: "num", q: "Ein Trapez hat den Flächeninhalt 50 cm² und die Höhe 5 cm. Wie groß ist die Summe der Grundseiten?", answer: 20, unit: "cm", explain: "B + b = 2 × 50 : 5 = 20 cm." },
      { type: "mc", q: "Wie oft ist ein m² größer als ein dm²?", options: ["10", "100", "1000"], answer: 1, explain: "Die Flächeneinheiten gehen in 100er-Schritten." },
      { type: "tf", q: "Zwei zerlegungsgleiche Figuren haben immer den gleichen Flächeninhalt.", answer: true, explain: "Sie bestehen aus denselben Teilen: Der Flächeninhalt ist derselbe." },
      { type: "tf", q: "Wenn man die Seite eines Quadrats verdoppelt, verdoppelt sich der Flächeninhalt.", answer: false, explain: "Der Flächeninhalt wird 4-mal so groß: (2a)² = 4a²." },
      { type: "mc", q: "Ein Hektar entspricht …", options: ["100 m²", "1000 m²", "10 000 m²"], answer: 2, explain: "1 ha = 1 hm² = 10 000 m²." },
      { type: "num", q: "Ein Quadrat hat die Seite 10 cm. Berechne das Apothem mit der festen Zahl 0,5.", answer: 5, unit: "cm", explain: "a = 10 × 0,5 = 5 cm (halbe Seite)." },
      { type: "order", q: "Ordne die Figuren vom kleinsten zum größten Flächeninhalt: Alle haben die Grundseite 6 und die Höhe 4 (beim Trapez ist die kleinere Grundseite 2).", items: ["Dreieck", "Trapez", "Rechteck"], explain: "6×4:2 = 12; (6+2)×4:2 = 16; 6×4 = 24." }
    ],
    gen: [["areaRect", 2], ["areaTri", 2]]
  }
});
