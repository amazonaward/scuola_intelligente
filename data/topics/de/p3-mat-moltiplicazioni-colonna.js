TOPIC('de', {
  id: "p3-mat-moltiplicazioni-colonna",
  title: "Schriftliche Multiplikation (in Spalten)",
  intro: "Kennst du das Einmaleins? Dann bist du bereit, auch große Zahlen zu multiplizieren! ✖️ Wir lernen die <b>schriftliche Multiplikation</b> mit einer und mit zwei Ziffern, den <b>Übertrag</b>, die <b>Probe</b> … und entdecken, wie man in Japan und in Russland multipliziert und wie es zur Zeit der Ägypter war.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Wiederholen wir: Was ist die Multiplikation?",
      html: `<p>Die <b>Multiplikation</b> ist eine <b>wiederholte Addition</b> gleicher Zahlen: 4 × 3 = 4 + 4 + 4 = 12.</p>
<ul>
<li>Die Zahlen, die man multipliziert, heißen <b>Faktoren</b>.</li>
<li>Das Ergebnis heißt <b>Produkt</b>.</li>
</ul>
<p>Nützliche Regeln:</p>
<ul>
<li><b>Vertauschungsgesetz</b> (Kommutativgesetz): Wenn man die Reihenfolge der Faktoren ändert, ändert sich das Produkt nicht: 4 × 3 = 3 × 4.</li>
<li><b>Verteilungsgesetz</b> (Distributivgesetz): Ich kann einen Faktor „aufspalten“: 23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92. Das ist genau das Geheimnis der schriftlichen Multiplikation!</li>
<li>Mit <b>10</b> multiplizieren: Man hängt hinten eine <b>Null</b> an: 34 × 10 = 340. Jede Ziffer rutscht um eine Stelle nach links (die Einer werden Zehner …).</li>
</ul>`
    },
    {
      type: "3d",
      title: "Die Multiplikation ist ein Rechteck",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "3 Reihen zu je 4 Würfelchen = 12 Würfelchen. Dreh das Rechteck: Es werden 4 Reihen zu je 3, aber es sind immer 12 Würfelchen (Vertauschungsgesetz). Mit den Reglern änderst du die Faktoren."
    },
    {
      type: "text",
      title: "In Spalten mit einer Ziffer im zweiten Faktor",
      html: `<p>Rechnen wir <b>247 × 3</b>. Man schreibt die Zahlen untereinander und multipliziert <b>bei den Einern beginnend</b>, von rechts nach links:</p>
<ol>
<li><b>Einer</b>: 3 × 7 = 21 → ich schreibe <b>1</b> bei den Einern und merke mir <b>2</b> Zehner (den <b>Übertrag</b>) über den Zehnern.</li>
<li><b>Zehner</b>: 3 × 4 = 12, plus den Übertrag 2 = 14 → ich schreibe <b>4</b> und merke mir <b>1</b> über den Hundertern.</li>
<li><b>Hunderter</b>: 3 × 2 = 6, plus den Übertrag 1 = <b>7</b> → ich schreibe 7.</li>
</ol>
<p>Ergebnis: 247 × 3 = <b>741</b>.</p>
<p><b>Achtung:</b> Der Übertrag wird <b>nach</b> dem Multiplizieren addiert, nicht vorher! (3 × 4 + 2, nicht 3 × 6.)</p>`
    },
    {
      type: "svg",
      title: "247 × 3 Schritt für Schritt",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<g font-size="20" font-weight="bold" fill="#8b5cf6" text-anchor="middle"><text x="110" y="30">h</text></g>
<g font-size="20" font-weight="bold" fill="#3b82f6" text-anchor="middle"><text x="160" y="30">da</text></g>
<g font-size="20" font-weight="bold" fill="#22c55e" text-anchor="middle"><text x="210" y="30">u</text></g>
<text x="110" y="62" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">1</text>
<text x="160" y="62" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">2</text>
<g font-size="44" font-family="monospace" text-anchor="middle" fill="#1f2937">
<text x="110" y="110">2</text><text x="160" y="110">4</text><text x="210" y="110">7</text>
<text x="60" y="165">×</text><text x="210" y="165">3</text>
</g>
<line x1="40" y1="182" x2="240" y2="182" stroke="#1f2937" stroke-width="4"/>
<g font-size="44" font-family="monospace" text-anchor="middle" font-weight="bold" fill="#b45309">
<text x="110" y="235">7</text><text x="160" y="235">4</text><text x="210" y="235">1</text>
</g>
<g font-size="20" fill="#1f2937">
<text x="290" y="80">① 3 × 7 = 21 → schreibe 1, merke 2</text>
<text x="290" y="135">② 3 × 4 = 12, + 2 = 14</text>
<text x="320" y="160">→ schreibe 4, merke 1</text>
<text x="290" y="215">③ 3 × 2 = 6, + 1 = 7</text>
</g>
<text x="300" y="285" font-size="18" text-anchor="middle" fill="#dc2626">Die kleinen roten Zahlen sind die Überträge.</text>
</svg>`,
      caption: "Man beginnt immer bei den Einern; die Überträge schreibt man klein über die nächste Spalte."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: mit einer Ziffer",
      questions: [
        { type: "num", q: "Wie viel ist 132 × 3?", answer: 396, explain: "3 × 2 = 6; 3 × 3 = 9; 3 × 1 = 3 → 396 (kein Übertrag)." },
        { type: "num", q: "Wie viel ist 58 × 4?", answer: 232, explain: "4 × 8 = 32, ich schreibe 2 und merke 3; 4 × 5 = 20 + 3 = 23 → 232." },
        { type: "mc", q: "Wie viel merkst du dir bei 46 × 7, nachdem du 7 × 6 = 42 gerechnet hast?", options: ["2", "4", "42"], answer: 1, explain: "Ich schreibe 2 bei den Einern und merke mir 4 Zehner." }
      ]
    },
    {
      type: "text",
      title: "In Spalten mit zwei Ziffern im zweiten Faktor",
      html: `<p>Rechnen wir <b>34 × 12</b>. Der zweite Faktor 12 = <b>1 Zehner und 2 Einer</b>, also machen wir <b>zwei Multiplikationen</b> und addieren sie dann:</p>
<ol>
<li><b>Erste Zeile</b> – ich multipliziere mit den <b>Einern</b> (2): 34 × 2 = <b>68</b>.</li>
<li><b>Zweite Zeile</b> – ich multipliziere mit den <b>Zehnern</b> (1, das 10 wert ist): Zuerst schreibe ich eine <b>0</b> (oder einen Strich «–») an die Stelle der Einer, weil ich mit 10 multipliziere; dann 34 × 1 = 34 → die Zeile wird <b>340</b>.</li>
<li><b>Addiere</b> die beiden Zeilen (die <b>Teilprodukte</b>): 68 + 340 = <b>408</b>.</li>
</ol>
<p>Warum die Null? Weil 34 × 12 = 34 × 2 + 34 × <b>10</b>. Die zweite Zeile ist 34 × 10 = 340, nicht 34!</p>`
    },
    {
      type: "svg",
      title: "34 × 12: die zwei Teilprodukte",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#eff6ff"/>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#1f2937">
<text x="160" y="55">3</text><text x="200" y="55">4</text>
<text x="70" y="105">×</text><text x="160" y="105">1</text><text x="200" y="105">2</text>
</g>
<line x1="60" y1="120" x2="230" y2="120" stroke="#1f2937" stroke-width="4"/>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#2563eb">
<text x="160" y="170">6</text><text x="200" y="170">8</text>
</g>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#16a34a">
<text x="120" y="220">3</text><text x="160" y="220">4</text>
</g>
<text x="200" y="220" font-size="40" font-family="monospace" text-anchor="middle" fill="#dc2626">0</text>
<line x1="60" y1="235" x2="230" y2="235" stroke="#1f2937" stroke-width="4"/>
<text x="70" y="200" font-size="34" text-anchor="middle" fill="#1f2937">+</text>
<g font-size="40" font-family="monospace" text-anchor="middle" font-weight="bold" fill="#b45309">
<text x="120" y="285">4</text><text x="160" y="285">0</text><text x="200" y="285">8</text>
</g>
<g font-size="20">
<text x="270" y="170" fill="#2563eb">← 34 × 2 Einer = 68</text>
<text x="270" y="210" fill="#16a34a">← 34 × 1 Zehner = 340</text>
<text x="290" y="236" fill="#dc2626">(die rote 0: × 10)</text>
<text x="270" y="285" fill="#b45309">← Summe: 68 + 340 = 408</text>
</g>
</svg>`,
      caption: "Jede Ziffer des zweiten Faktors ergibt eine Zeile. Die Zeile der Zehner rutscht um eine Stelle nach links."
    },
    {
      type: "text",
      title: "Ein Beispiel mit Überträgen und die Probe",
      html: `<p><b>56 × 23</b>:</p>
<ol>
<li>56 × <b>3</b>: 3 × 6 = 18 (schreibe 8, merke 1); 3 × 5 = 15 + 1 = 16 → <b>168</b>.</li>
<li>56 × <b>2</b> Zehner: schreibe 0; 2 × 6 = 12 (schreibe 2, merke 1); 2 × 5 = 10 + 1 = 11 → <b>1120</b>.</li>
<li>168 + 1120 = <b>1288</b>.</li>
</ol>
<p><b>Tipp:</b> Wenn du zur zweiten Zeile wechselst, <b>streich die Überträge</b> der ersten durch, damit du sie nicht verwechselst!</p>
<p><b>Die Probe</b>: Dank des Vertauschungsgesetzes kannst du die Rechnung mit vertauschten Faktoren wiederholen: 23 × 56 muss wieder 1288 ergeben. Du kannst auch eine <b>Überschlagsrechnung</b> machen: 56 × 23 ist ungefähr 60 × 20 = 1200, also ist 1288 ein vernünftiges Ergebnis. Wäre 128 oder 12 880 herausgekommen, hättest du sofort gemerkt, dass ein Fehler drin ist!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Schulausflug",
      html: `<p>Zum Ausflug fahren <b>4 Busse</b> ab. Jeder Bus hat <b>54 Plätze</b>. Wie viele Kinder können höchstens mitfahren?</p>
<p>54 × 4: 4 × 4 = 16 (schreibe 6, merke 1); 4 × 5 = 20 + 1 = 21 → <b>216 Kinder</b>.</p>
<p>Die Eintrittskarte für das Museum kostet <b>12 €</b> pro Kind. Wenn 216 Kinder mitfahren, wie viel wird ausgegeben?</p>
<p>216 × 12: 216 × 2 = 432; 216 × 10 = 2160; 432 + 2160 = <b>2592 €</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Eier im Laden",
      html: `<p>Ein Händler bekommt <b>18 Kartons</b> Eier. In jedem Karton sind <b>6 Reihen zu je 5 Eiern</b>, also 30 Eier. Wie viele Eier sind es insgesamt?</p>
<p>Zuerst jeder Karton: 6 × 5 = 30. Dann alle Kartons: 30 × 18.</p>
<p>In Spalten: 30 × 8 = 240; 30 × 1 Zehner = 300; 240 + 300 = <b>540 Eier</b>.</p>
<p>Trick: 30 × 18 = 3 × 18 × 10 = 54 × 10 = 540. Dasselbe Ergebnis!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Wer hat das Zeichen × erfunden?",
      html: `<p>Das Zeichen <b>×</b> wurde zum ersten Mal in einem gedruckten Buch des englischen Mathematikers <b>William Oughtred</b> im Jahr <b>1631</b> benutzt. Dem großen deutschen Mathematiker Leibniz gefiel es nicht, weil man es mit dem Buchstaben x verwechselt, und er bevorzugte den <b>Punkt</b> (3 · 4). Noch heute benutzt man in vielen Ländern beide, und in der weiterführenden Schule auch!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Multiplikation „a gelosia“",
      html: `<p>Im Italien des 15. Jahrhunderts multiplizierte man mit einer Gittermethode, die «<b>per gelosia</b>» hieß, weil das Gitter den Fensterläden (den «gelosie») ähnelt, durch die man hinausschauen konnte, ohne gesehen zu werden. Man findet sie in der <b>Arithmetik von Treviso</b> (1478), einem der ersten gedruckten Mathematikbücher Europas. Sie war aus der arabischen und indischen Welt gekommen.</p>`
    },
    {
      type: "remember",
      title: "Merk dir das",
      html: `<ul>
<li>Man beginnt immer bei den <b>Einern</b>, von rechts nach links.</li>
<li>Der <b>Übertrag</b> wird <b>nach</b> dem Multiplizieren addiert.</li>
<li>Bei zwei Ziffern: eine Zeile für die Einer, eine Zeile für die Zehner mit der <b>0</b> (oder dem Strich) an der Stelle der Einer.</li>
<li>Am Ende <b>addiert</b> man die Teilprodukte.</li>
<li>Probe: Vertausche die Faktoren (Vertauschungsgesetz) oder mach eine Überschlagsrechnung.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege zu multiplizieren",
      intro: "Das Verfahren in Spalten ist nicht das einzige! In der Welt und in der Geschichte hat man auf viele Arten multipliziert. Probier die aus, die dir am besten gefällt: Alle geben dasselbe Ergebnis.",
      tabs: [
        {
          label: "🇯🇵 Linienmethode",
          html: `<p>In Japan und in China lernt man auch, <b>mit Linien</b> zu multiplizieren. Für 23 × 12: Du zeichnest 2 Linien und 3 Linien in eine Richtung (für 23) und 1 Linie und 2 Linien in die andere Richtung (für 12). Dann <b>zählst du die Schnittpunkte</b> in jeder Zone: links die Hunderter, in der Mitte die Zehner, rechts die Einer. 2 | 7 | 6 → <b>276</b>.</p>`,
          widget: "lineMultiply",
          options: { a: 23, b: 12 }
        },
        {
          label: "🕌 Gittermethode (a gelosia)",
          html: `<p>Du zeichnest ein Gitter mit einem Kästchen für jedes Ziffernpaar, diagonal durchgeschnitten. In jedes Kästchen schreibst du das Produkt (Zehner oben, Einer unten). Dann addierst du entlang der Diagonalen, von rechts. Keine Überträge beim Multiplizieren! 47 × 36 = <b>1692</b>.</p>`,
          widget: "lattice",
          options: { a: 47, b: 36 }
        },
        {
          label: "🇷🇺 Der russische Bauer",
          html: `<p>Man muss nur <b>halbieren</b> und <b>verdoppeln</b> können! Du schreibst die beiden Zahlen untereinander: Links halbierst du (den Rest ignorierst du), rechts verdoppelst du. Dann <b>streichst</b> du die Zeilen, in denen links eine <b>gerade</b> Zahl steht, und addierst, was rechts übrig bleibt. 37 × 24 = <b>888</b>.</p>`,
          widget: "russianPeasant",
          options: { a: 37, b: 24 }
        },
        {
          label: "𓂀 Wie die Ägypter",
          html: `<p>Die ägyptischen Schreiber multiplizierten vor mehr als 3500 Jahren nur durch <b>Verdoppeln</b>: 21, 42, 84, 168 … Dann wählten sie die passenden Verdopplungen aus und addierten sie. Für 13 × 21: 13 = 1 + 4 + 8, also 21 + 84 + 168 = <b>273</b>.</p>`,
          widget: "egyptianMultiply",
          options: { a: 13, b: 21 }
        },
        {
          label: "🟦 Das zerlegte Rechteck",
          html: `<p>Viele Lehrer in England und den Vereinigten Staaten benutzen die «<b>Box-Methode</b>»: Man zerlegt die Zahlen in Zehner und Einer und zeichnet ein in Stücke geteiltes Rechteck.</p>
<p>34 × 12 → (30 + 4) × (10 + 2): vier Rechtecke 300, 40, 60, 8. Summe: 300 + 40 + 60 + 8 = <b>408</b>. Das ist genau, was die Spalte macht, aber man sieht es!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ffffff"/>
<text x="210" y="30" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">30</text>
<text x="400" y="30" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">4</text>
<text x="45" y="125" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">10</text>
<text x="45" y="225" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">2</text>
<rect x="80" y="45" width="260" height="150" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="340" y="45" width="120" height="150" fill="#fde68a" stroke="#1e3a8a" stroke-width="3"/>
<rect x="80" y="195" width="260" height="60" fill="#bbf7d0" stroke="#1e3a8a" stroke-width="3"/>
<rect x="340" y="195" width="120" height="60" fill="#fecaca" stroke="#1e3a8a" stroke-width="3"/>
<text x="210" y="128" font-size="30" font-weight="bold" text-anchor="middle" fill="#1e3a8a">300</text>
<text x="400" y="128" font-size="30" font-weight="bold" text-anchor="middle" fill="#78350f">40</text>
<text x="210" y="234" font-size="26" font-weight="bold" text-anchor="middle" fill="#14532d">60</text>
<text x="400" y="234" font-size="26" font-weight="bold" text-anchor="middle" fill="#7f1d1d">8</text>
<text x="530" y="130" font-size="22" text-anchor="middle" fill="#1f2937">= 408</text>
</svg>`
        },
        {
          label: "🧊 Würfelchen in 3D",
          html: `<p>Eine Multiplikation ist ein Rechteck aus Würfelchen: 12 Reihen zu je 4 = 48. Bewege die Regler und beobachte: Wenn du einen Faktor verdoppelst, wird das Rechteck doppelt so groß. Wenn du das Rechteck in zwei Stücke teilst (10 Reihen + 2 Reihen), siehst du die zwei Zeilen der schriftlichen Multiplikation!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 12, b: 4, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der schriftlichen Multiplikation: Tipp einen Knoten an und entdecke das Warum",
      nodes: [
        { id: "addizione", label: "Wiederholte Addition", x: 50, y: 6, color: "#2563eb", html: "4 × 3 = 4 + 4 + 4.", why: "Die Multiplikation entsteht als Abkürzung: Statt dieselbe Zahl viele Male zu addieren, benutzt man nur eine Rechenart. Die Ägypter und die Babylonier benutzten sie schon vor 4000 Jahren, um Ernten und Felder zu berechnen." },
        { id: "tabelline", label: "Einmaleins", x: 18, y: 26, color: "#f59e0b", html: "Die Produkte von 1 × 1 bis 10 × 10.", why: "Sie sind die „Bausteine“ jeder Rechnung: Jede schriftliche Multiplikation besteht aus vielen kleinen Einmaleins-Aufgaben. Die Tafel heißt im Italienischen «pitagorica» (pythagoreisch) zu Ehren von Pythagoras, obwohl ähnliche Tafeln schon in Babylon existierten." },
        { id: "posizione", label: "Stellenwert", x: 82, y: 26, color: "#8b5cf6", html: "Jede Ziffer ist u, da oder h wert, je nach Platz.", why: "Das Verfahren in Spalten funktioniert nur dank des indisch-arabischen Stellenwertsystems mit der Null, das Fibonacci 1202 nach Europa brachte: Mit römischen Zahlen war es fast unmöglich!" },
        { id: "distributiva", label: "Verteilungsgesetz", x: 50, y: 45, color: "#16a34a", html: "34 × 12 = 34 × 10 + 34 × 2.", why: "Es ist das wahre „Warum“ der Spalte: Ich spalte einen Faktor in Zehner und Einer auf, multipliziere die Stücke und addiere dann. Jede Zeile der Spalte ist eines dieser Stücke." },
        { id: "riporto", label: "Übertrag", x: 18, y: 62, color: "#dc2626", html: "Die überzähligen Zehner, die in die linke Spalte wandern.", why: "Wenn ein Produkt größer als 9 ist, passt es nicht in ein Kästchen: 10 Einer werden 1 Zehner und „steigen“ an die nächste Stelle. Das ist der Tausch des Dezimalsystems." },
        { id: "zero", label: "Die Null (oder der Strich)", x: 82, y: 62, color: "#64748b", html: "In der zweiten Zeile steht eine 0 unter den Einern.", why: "Wenn ich mit der Zehnerziffer multipliziere, multipliziere ich mit 10, 20, 30 …: Das Ergebnis muss um eine Stelle nach links rutschen. Die 0 hält die Stelle der Einer frei." },
        { id: "parziali", label: "Teilprodukte", x: 50, y: 74, color: "#0ea5e9", html: "Die Zeilen, die man dann addiert: 68 und 340.", why: "Sie sind die Stücke des Verteilungsgesetzes, untereinander geschrieben, schon in Spalten zum Addieren." },
        { id: "commutativa", label: "Vertauschungsgesetz und Probe", x: 22, y: 90, color: "#a855f7", html: "a × b = b × a: Ich wiederhole die Rechnung mit vertauschten Faktoren.", why: "Ein Rechteck aus 3 × 4 Würfelchen, gedreht, wird 4 × 3: Die Würfelchen bleiben dieselben. Darum ist das Vertauschen der Faktoren eine ausgezeichnete Kontrolle." },
        { id: "altri", label: "Andere Verfahren", x: 78, y: 90, color: "#ec4899", html: "Japanische Linien, Gitter, russischer Bauer, Ägypter.", why: "Alle benutzen dieselben Ideen (Verdoppeln, Verteilungsgesetz, Stellenwert) auf andere Weise. Das Verfahren in Spalten hat sich in Europa verbreitet, weil es auf Papier schnell zu schreiben ist und wenig Platz braucht." }
      ],
      edges: [
        ["addizione", "tabelline", "merkt man sich im"],
        ["addizione", "posizione", "bei großen Zahlen nutzt man den"],
        ["tabelline", "distributiva", "+"],
        ["posizione", "distributiva", "+"],
        ["distributiva", "riporto", "braucht den"],
        ["distributiva", "zero", "für die Zehner braucht man die"],
        ["distributiva", "parziali", "ergibt die"],
        ["parziali", "commutativa", "prüft man mit dem"],
        ["parziali", "altri", "kann man auch machen mit"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: mit zwei Ziffern",
      questions: [
        { type: "num", q: "Wie viel ist 23 × 13?", answer: 299, explain: "23 × 3 = 69; 23 × 10 = 230; 69 + 230 = 299." },
        { type: "mc", q: "Bei 45 × 21 ist die zweite Zeile (für die Zehner) …", options: ["90", "900", "45"], answer: 1, explain: "45 × 2 Zehner = 45 × 20 = 900." },
        { type: "tf", q: "In der zweiten Zeile schreibt man eine 0 an die Stelle der Einer, weil man mit den Zehnern multipliziert.", answer: true, explain: "Das Multiplizieren mit 10, 20, 30 … verschiebt alles um eine Stelle nach links." }
      ]
    }
  ],
  glossary: [
    { t: "Multiplikation", d: "Rechenart, die einer wiederholten Addition gleicher Zahlen entspricht." },
    { t: "Faktoren", d: "Die Zahlen, die man multipliziert." },
    { t: "Produkt", d: "Das Ergebnis der Multiplikation." },
    { t: "Übertrag", d: "Die Zehner (oder Hunderter), die in die linke Spalte wandern, wenn ein Produkt größer als 9 ist." },
    { t: "Teilprodukt", d: "Jede Zeile, die man beim Multiplizieren mit einer Ziffer des zweiten Faktors erhält." },
    { t: "Vertauschungsgesetz", d: "Wenn man die Reihenfolge der Faktoren ändert, ändert sich das Produkt nicht." },
    { t: "Verteilungsgesetz", d: "Man kann einen Faktor aufspalten und die Teile multiplizieren: 23 × 4 = 20 × 4 + 3 × 4." },
    { t: "Überschlag", d: "Ungefähre Rechnung, um zu prüfen, ob das Ergebnis vernünftig ist." },
    { t: "Probe", d: "Kontrolle des Ergebnisses, zum Beispiel durch Vertauschen der Faktoren." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Wie viel ist 213 × 3?", answer: 639, explain: "3 × 3 = 9; 3 × 1 = 3; 3 × 2 = 6 → 639." },
      { type: "num", q: "Wie viel ist 125 × 4?", answer: 500, explain: "4 × 5 = 20 (0, Übertrag 2); 4 × 2 = 8 + 2 = 10 (0, Übertrag 1); 4 × 1 = 4 + 1 = 5 → 500." },
      { type: "num", q: "Wie viel ist 27 × 14?", answer: 378, explain: "27 × 4 = 108; 27 × 10 = 270; 108 + 270 = 378." },
      { type: "mc", q: "Mit welcher Ziffer beginnt man beim schriftlichen Multiplizieren?", options: ["mit den Hundertern", "mit den Einern", "mit den Zehnern"], answer: 1, explain: "Man beginnt bei den Einern, von rechts nach links." },
      { type: "tf", q: "Der Übertrag wird vor dem Multiplizieren addiert.", answer: false, explain: "Zuerst multipliziert man, dann addiert man den Übertrag." },
      { type: "num", q: "Wie viel ist 64 × 10?", answer: 640, explain: "Beim Multiplizieren mit 10 hängt man eine Null an." },
      { type: "mc", q: "Welche Rechnung dient zur Kontrolle von 36 × 15 = 540?", options: ["15 × 36", "36 + 15", "540 − 36"], answer: 0, explain: "Vertauschungsgesetz: Wenn man die Faktoren vertauscht, muss das Produkt gleich sein." },
      { type: "order", q: "Bring die Schritte von 34 × 12 in die richtige Reihenfolge.", items: ["34 × 2 = 68", "ich schreibe 0 unter die Einer", "34 × 1 = 34 → 340", "68 + 340 = 408"], explain: "Zuerst die Einer, dann die Zehner mit der Null, zuletzt die Summe." },
      { type: "num", q: "Ein Bus hat 52 Plätze. Wie viele Plätze gibt es in 6 Bussen?", answer: 312, explain: "52 × 6: 6 × 2 = 12 (2, Übertrag 1); 6 × 5 = 30 + 1 = 31 → 312." },
      { type: "mc", q: "Ein Überschlag von 48 × 21 ist ungefähr …", options: ["100", "1000", "10 000"], answer: 1, explain: "48 ist ungefähr 50, 21 ungefähr 20: 50 × 20 = 1000. Das genaue Ergebnis ist 1008." },
      { type: "num", q: "Wie viel ist 45 × 21?", answer: 945, explain: "45 × 1 = 45; 45 × 20 = 900; 45 + 900 = 945." }
    ],
    gen: [["mult2", 3]]
  }
});
