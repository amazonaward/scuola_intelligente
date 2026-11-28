TOPIC('de', {
  id: "l1-fis-equilibrio-solidi",
  title: "Gleichgewicht fester Körper",
  intro: "Warum bleibt eine Kiste auf einer Rampe liegen? Warum kann ein leichtes Kind einen Erwachsenen auf einer Wippe hochheben? Warum steht der Schiefe Turm von Pisa schief, fällt aber nicht um? Hinter all diesen Fragen stecken zwei einfache und mächtige Ideen: die <b>Summe der Kräfte</b> und die <b>Summe der Drehmomente</b>. In dieser Lektion lernen wir zu erkennen, wann ein Körper im <b>Gleichgewicht</b> ist, und die schiefe Ebene und den Hebel zu nutzen, die „einfachen Maschinen“, mit denen die Menschheit seit Jahrtausenden Lasten hebt.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Was bedeutet „im Gleichgewicht sein“?",
      html: `<p>Ein Körper ist im <b>statischen Gleichgewicht</b>, wenn er <b>in Ruhe bleibt</b>, obwohl Kräfte auf ihn wirken. Eine Kraft ist eine <b>vektorielle</b> Größe: Sie hat einen Wert (in <b>Newton</b>, N), eine Richtung und einen Richtungssinn. Deshalb genügt es nicht, Zahlen zu addieren: Man muss die <b>Vektoren</b> addieren.</p>
<p>Für einen <b>Massenpunkt</b> (einen Körper, der so klein oder so kompakt ist, dass man ihn wie einen Punkt behandeln kann) gibt es nur eine Gleichgewichtsbedingung:</p>
<p style="text-align:center"><b>die Resultierende der angreifenden Kräfte ist null: ΣF = 0</b></p>
<p>Die Kräfte, denen wir am häufigsten begegnen, sind:</p>
<ul>
<li>die <b>Gewichtskraft</b> F<sub>G</sub> = m·g, zum Erdmittelpunkt gerichtet, mit g ≈ 9,8 m/s² (für Kopfrechnen rundet man oft auf 10). Eine Masse von 50 kg hat die Gewichtskraft F<sub>G</sub> = 50 × 9,8 = 490 N. Achtung: Die <b>Masse</b> wird in kg gemessen und ist überall gleich, die <b>Gewichtskraft</b> wird in N gemessen und ist auf dem Mond etwa sechsmal kleiner;</li>
<li>die <b>Auflage- oder Zwangskraft</b>: die Kraft, mit der eine Unterlage, ein Faden oder eine Wand eine Bewegung verhindern. Ein Tisch „will“ dich nicht fallen lassen: Er verformt sich ein winziges Stück und drückt mit einer Kraft nach oben, die der Gewichtskraft des Gegenstands gleich ist;</li>
<li>die <b>Haftreibungskraft</b>, die dem Rutschen entgegenwirkt. Sie hat einen Höchstwert F<sub>H</sub> = μ<sub>H</sub>·F<sub>N</sub>, wobei F<sub>N</sub> die senkrecht zur Fläche wirkende Anpresskraft und μ<sub>H</sub> der Haftreibungskoeffizient ist (er hängt von den beiden Oberflächen ab).</li>
</ul>
<p>Beispiel: ein Buch auf dem Tisch. Die Gewichtskraft F<sub>G</sub> zeigt nach unten, die Auflagekraft F<sub>N</sub> nach oben: F<sub>G</sub> = F<sub>N</sub>, die Resultierende ist null, und das Buch bleibt liegen. Wenn du dagegen beim Schieben eines Wagens gegen eine Wand stößt, antwortet die Wand mit einer gleich großen, entgegengesetzten Kraft (drittes Newtonsches Gesetz), aber sie wirkt auf einen anderen Körper: Man darf sie nicht mit dem Paar Gewichtskraft/Auflagekraft verwechseln.</p>`
    },
    {
      type: "example",
      title: "Beispiel: eine Lampe an zwei Fäden",
      html: `<p>Eine Lampe mit der Masse 4 kg hängt an nur einem senkrechten Faden an der Decke. Wie groß ist die Zugkraft T des Fadens?</p>
<ol>
<li>Die Gewichtskraft ist F<sub>G</sub> = 4 × 9,8 = 39,2 N nach unten.</li>
<li>Der Massenpunkt (die Lampe) ruht: ΣF = 0, also muss die Zugkraft die Gewichtskraft ausgleichen: T = 39,2 N nach oben.</li>
</ol>
<p>Wird dieselbe Lampe von <b>zwei gleichen</b>, schräg verlaufenden Fäden gehalten, muss jeder Faden eine senkrechte Komponente von 19,6 N liefern, aber die gesamte Kraft längs des Fadens ist <b>größer</b> als 19,6 N, weil ein Teil der Zugkraft „zur Seite zieht“. Je näher die Fäden an der Waagerechten liegen, desto größer wird die Zugkraft: Deshalb lässt sich ein waagerecht gespanntes Seil mit einem Gewicht in der Mitte nie ganz gerade ziehen, ohne zu reißen.</p>`
    },
    {
      type: "svg",
      title: "Die schiefe Ebene und die Zerlegung der Gewichtskraft",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="60,260 540,260 540,60" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<text x="548" y="170" font-size="18" fill="#334155" font-weight="bold">h</text>
<text x="280" y="285" font-size="16" fill="#334155">Grundlinie b</text>
<text x="190" y="190" font-size="16" fill="#334155" transform="rotate(-22 190 190)">Länge l</text>
<path d="M130 260 A70 70 0 0 0 126 238" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="140" y="250" font-size="18" fill="#dc2626" font-weight="bold">α</text>
<g transform="translate(300 160) rotate(-22.6)">
<rect x="-30" y="-40" width="60" height="40" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
</g>
<circle cx="292" cy="141" r="4" fill="#111827"/>
<line x1="292" y1="141" x2="292" y2="228" stroke="#16a34a" stroke-width="4"/>
<polygon points="292,236 285,222 299,222" fill="#16a34a"/>
<text x="262" y="250" font-size="18" fill="#16a34a" font-weight="bold">F_G</text>
<line x1="292" y1="141" x2="262" y2="154" stroke="#2563eb" stroke-width="4"/>
<polygon points="256,157 267,147 270,161" fill="#2563eb"/>
<text x="100" y="140" font-size="16" fill="#2563eb" font-weight="bold">F_G∥ = F_G sin α</text>
<line x1="292" y1="141" x2="322" y2="215" stroke="#9333ea" stroke-width="4"/>
<polygon points="324,221 314,208 328,203" fill="#9333ea"/>
<text x="345" y="225" font-size="16" fill="#9333ea" font-weight="bold">F_G⊥ = F_G cos α</text>
<text x="20" y="30" font-size="17" fill="#1f2937">Die Gewichtskraft zerfällt in einen Anteil längs der Ebene und einen senkrechten.</text>
</svg>`,
      caption: "Die Parallelkomponente F_G∥ zieht den Körper die Ebene hinunter; die Senkrechtkomponente F_G⊥ wird durch die Auflagekraft der Ebene ausgeglichen. Der Winkel α ist der Neigungswinkel der Ebene gegen die Waagerechte."
    },
    {
      type: "text",
      title: "Die schiefe Ebene",
      html: `<p>Die <b>schiefe Ebene</b> ist eine ebene Fläche, die mit der Waagerechten einen Winkel α bildet. Auf den aufliegenden Körper wirkt die senkrechte Gewichtskraft F<sub>G</sub>. Man zerlegt sie zweckmäßig mit zwei Achsen: einer <b>parallel</b> zur Ebene und einer <b>senkrecht</b> dazu.</p>
<ul>
<li>F<sub>G⊥</sub> = F<sub>G</sub>·cos α: Sie drückt den Körper auf die Ebene und wird durch die Auflagekraft F<sub>N</sub> = F<sub>G</sub> cos α ausgeglichen;</li>
<li>F<sub>G∥</sub> = F<sub>G</sub>·sin α: Sie zieht den Körper längs des Gefälles hinunter.</li>
</ul>
<p>Ist die Ebene <b>glatt</b> (ohne Reibung), braucht man, um den Körper festzuhalten, eine Kraft F parallel zur Ebene, die F<sub>G∥</sub> ausgleicht:</p>
<p style="text-align:center"><b>F = F<sub>G</sub>·sin α = F<sub>G</sub>·h/l</b></p>
<p>Dabei ist h die Höhe der Ebene und l ihre Länge (sin α = h/l im rechtwinkligen Dreieck). Da h &lt; l ist, ist die nötige Kraft <b>kleiner als die Gewichtskraft</b>: Die schiefe Ebene „spart Kraft“, aber man muss einen längeren Weg zurücklegen. Die Arbeit (Kraft × Weg), um dieselbe Höhe zu erreichen, bleibt gleich, wenn die Reibung vernachlässigbar ist.</p>
<p>Mit Reibung bleibt der Körper in Ruhe, solange F<sub>G</sub> sin α ≤ μ<sub>H</sub>·F<sub>G</sub> cos α, also solange <b>tan α ≤ μ<sub>H</sub></b>. Jenseits des Grenzwinkels beginnt der Körper zu rutschen, und die Masse spielt keine Rolle: Die Bedingung hängt nicht vom Gewicht ab!</p>`
    },
    {
      type: "example",
      title: "Beispiel: die Rampe für den Transporter",
      html: `<p>Du musst einen Kühlschrank von 80 kg auf einen Transporter laden. Die Ladefläche liegt 1 m über dem Boden, und du benutzt eine Rampe von 4 m (vernachlässige die Reibung).</p>
<ol>
<li>Gewichtskraft: F<sub>G</sub> = 80 × 9,8 = 784 N.</li>
<li>Nötige Parallelkraft, um ihn festzuhalten (oder mit konstanter Geschwindigkeit hochzuschieben): F = F<sub>G</sub>·h/l = 784 × 1/4 = <b>196 N</b>, also etwa so, als würdest du 20 kg anheben.</li>
<li>Bei einer Rampe von 8 m sinkt die Kraft auf 98 N, aber du musst den doppelten Weg schieben.</li>
</ol>
<p>Es ist dasselbe Prinzip wie bei Serpentinenwegen in den Bergen, sanft ansteigenden Treppen und Alpenpässen: Man verlängert den Weg, um die Anstrengung zu verringern.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Kräfte und schiefe Ebene",
      questions: [
        { type: "mc", q: "Ein Massenpunkt ist im Gleichgewicht, wenn …", options: ["die Summe der Kraftbeträge null ist", "die Vektorsumme der Kräfte null ist", "nur eine einzige Kraft wirkt"], answer: 1, explain: "Kräfte sind Vektoren: ΣF = 0 bedeutet, dass ihre Vektorsumme null ist, auch wenn die einzelnen Beträge nicht null sind." },
        { type: "num", q: "Ein Körper von 10 kg liegt auf einer glatten schiefen Ebene mit 30°. Wie groß ist (in N, mit g = 9,8 m/s²) die Kraft parallel zur Ebene, die ihn festhält?", answer: 49, tol: 0.5, unit: "N", explain: "F_G = 98 N; F = F_G sin 30° = 98 × 0,5 = 49 N." },
        { type: "tf", q: "Auf einer Ebene mit Reibung hängt der größte Winkel, bei dem ein Körper in Ruhe bleibt, von seiner Masse ab.", answer: false, explain: "Er bleibt in Ruhe, solange tan α ≤ μ_H: Die Masse kürzt sich heraus und spielt keine Rolle." }
      ]
    },
    {
      type: "text",
      title: "Das Drehmoment einer Kraft",
      html: `<p>Eine Tür nahe an den Scharnieren aufzuschieben ist sehr mühsam; nahe an der Klinke ist es leicht. Die Kraft ist dieselbe, aber die <b>Drehwirkung</b> ändert sich. Um sie zu beschreiben, führt man das <b>Drehmoment einer Kraft</b> bezüglich eines Punktes O (des Bezugspunkts oder Drehpunkts) ein:</p>
<p style="text-align:center"><b>M = F · b</b></p>
<p>Dabei ist <b>b</b> der <b>Hebelarm</b>: der <b>senkrechte</b> Abstand zwischen dem Punkt O und der <b>Wirkungslinie</b> der Kraft. Man misst ihn in <b>Newtonmeter</b> (N·m).</p>
<ul>
<li>Steht die Kraft senkrecht auf der Stange, ist der Hebelarm gleich dem Abstand vom Drehpunkt;</li>
<li>geht die Kraft durch den Drehpunkt, ist der Hebelarm null und das Drehmoment null: Wer in der Ebene der Tür gegen die Tür drückt, dreht sie nicht;</li>
<li>das Drehmoment hat einen <b>Drehsinn</b>: Per Konvention ist es positiv, wenn es gegen den Uhrzeigersinn dreht, negativ im Uhrzeigersinn.</li>
</ul>
<p>Ein <b>Kräftepaar</b> besteht aus zwei gleich großen, parallelen und entgegengesetzten Kräften mit verschiedenen Wirkungslinien: Die Resultierende ist null, das Drehmoment aber nicht (es beträgt F·d, wobei d der Abstand der Wirkungslinien ist). Das nutzt du, wenn du ein Lenkrad mit zwei Händen drehst oder einen Verschluss aufschraubst.</p>
<p>Ein <b>starrer Körper</b> (der sich nicht verformt) ist im Gleichgewicht, wenn <b>zwei</b> Bedingungen zugleich gelten:</p>
<p style="text-align:center"><b>ΣF = 0 (er verschiebt sich nicht) &nbsp;und&nbsp; ΣM = 0 (er dreht sich nicht)</b></p>`
    },
    {
      type: "svg",
      title: "Der Hebel: Kraft, Last und Drehpunkt",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<polygon points="300,215 270,260 330,260" fill="#475569"/>
<g transform="rotate(0 300 210)"><rect x="60" y="200" width="480" height="14" rx="4" fill="#92400e"/></g>
<rect x="95" y="140" width="70" height="60" rx="6" fill="#ef4444"/>
<text x="130" y="178" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">Last</text>
<line x1="130" y1="95" x2="130" y2="135" stroke="#ef4444" stroke-width="4"/>
<polygon points="130,139 122,124 138,124" fill="#ef4444"/>
<text x="130" y="85" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">Lastkraft F_L</text>
<line x1="470" y1="120" x2="470" y2="196" stroke="#16a34a" stroke-width="4"/>
<polygon points="470,200 462,185 478,185" fill="#16a34a"/>
<text x="470" y="108" font-size="17" text-anchor="middle" fill="#15803d" font-weight="bold">Kraft F_K</text>
<text x="300" y="285" font-size="17" text-anchor="middle" fill="#334155" font-weight="bold">Drehpunkt</text>
<line x1="130" y1="232" x2="300" y2="232" stroke="#2563eb" stroke-width="3"/>
<line x1="300" y1="232" x2="470" y2="232" stroke="#9333ea" stroke-width="3"/>
<text x="215" y="250" font-size="16" text-anchor="middle" fill="#2563eb" font-weight="bold">b_L</text>
<text x="385" y="250" font-size="16" text-anchor="middle" fill="#9333ea" font-weight="bold">b_K</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#1f2937" font-weight="bold">Gleichgewicht: F_K · b_K = F_L · b_L</text>
</svg>`,
      caption: "Ein Hebel 1. Art: Der Drehpunkt liegt in der Mitte. Der Kraftarm b_K ist doppelt so lang wie der Lastarm b_L, also genügt eine Kraft von der Hälfte der Last."
    },
    {
      type: "text",
      title: "Die Hebel",
      html: `<p>Der <b>Hebel</b> ist eine starre Stange, die um einen festen Punkt, den <b>Drehpunkt</b>, frei drehbar ist. Auf ihn wirken eine <b>Kraft</b> F<sub>K</sub> (die wir aufbringen) und eine <b>Lastkraft</b> F<sub>L</sub> (die Last, die gehoben oder überwunden werden soll). Der Hebel ist im Gleichgewicht, wenn sich die Drehmomente ausgleichen:</p>
<p style="text-align:center"><b>F<sub>K</sub> · b<sub>K</sub> = F<sub>L</sub> · b<sub>L</sub></b></p>
<p>Daraus ergibt sich die <b>Kraftersparnis</b> des Hebels: F<sub>K</sub>/F<sub>L</sub> = b<sub>L</sub>/b<sub>K</sub>. Ist der Kraftarm größer als der Lastarm, ist der Hebel <b>vorteilhaft</b> (man spart Kraft); ist er kleiner, ist er <b>nachteilig</b> (man verliert Kraft, gewinnt aber an Geschwindigkeit und Bewegungsweite).</p>
<table>
<tr><th>Art</th><th>Lage</th><th>Beispiele</th><th>Vorteil</th></tr>
<tr><td><b>1.</b></td><td>Drehpunkt zwischen Kraft und Last</td><td>Wippe, Schere, Zange, Brecheisen</td><td>kann vorteilhaft, nachteilig oder neutral sein</td></tr>
<tr><td><b>2.</b></td><td>Last zwischen Drehpunkt und Kraft</td><td>Schubkarre, Nussknacker, Flaschenöffner, Nagelknipser</td><td>immer vorteilhaft</td></tr>
<tr><td><b>3.</b></td><td>Kraft zwischen Drehpunkt und Last</td><td>Pinzette, Eiszange, Angelrute, Unterarm</td><td>immer nachteilig</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Beispiel: die Wippe im Gleichgewicht",
      html: `<p>Ein Erwachsener von 60 kg sitzt 1 m von der Mitte einer Wippe entfernt. In welchem Abstand muss ein Kind von 20 kg sitzen, um ihn auszugleichen?</p>
<ol>
<li>Die Gewichtskräfte: 588 N (Erwachsener) und 196 N (Kind): Man kann aber einfach mit den Massen rechnen, weil sich g herauskürzt.</li>
<li>Gleichgewicht der Drehmomente: 60 · 1 = 20 · x</li>
<li>x = 60/20 = <b>3 m</b>.</li>
</ol>
<p>Das Kind wiegt ein Drittel und sitzt im dreifachen Abstand: Das Produkt „Gewicht × Abstand“ ist dasselbe. Ist die Wippe insgesamt nur 4 m lang (2 m pro Seite), könnte das Kind den Erwachsenen von dort aus nicht ausgleichen: Der Erwachsene müsste näher an den Drehpunkt rücken (0,67 m).</p>`
    },
    {
      type: "widget",
      title: "Welche Art von Hebel ist es?",
      widget: "classify",
      options: { groups: ["1. Art (Drehpunkt in der Mitte)", "2. Art (Last in der Mitte)", "3. Art (Kraft in der Mitte)"], items: [
        ["Wippe", 0],
        ["Schere", 0],
        ["Zange", 0],
        ["Schubkarre", 1],
        ["Nussknacker", 1],
        ["Flaschenöffner mit Hebel", 1],
        ["Pinzette", 2],
        ["Eiszange", 2],
        ["Angelrute", 2]
      ] },
      caption: "Finde die drei Punkte (Drehpunkt, Kraft, Last) und sieh nach, welcher in der Mitte liegt."
    },
    {
      type: "curiosity",
      title: "„Gebt mir einen festen Punkt, und ich hebe die Welt aus den Angeln“",
      html: `<p>Der Satz wird <b>Archimedes von Syrakus</b> (3. Jahrhundert v. Chr.) zugeschrieben, der in seiner Abhandlung <i>Über das Gleichgewicht ebener Flächen</i> als Erster das Hebelgesetz mathematisch streng bewies: Zwei Lasten sind im Gleichgewicht, wenn sie umgekehrt proportional zu ihren Abständen vom Drehpunkt sind. Das Zitat ist uns aus späteren Quellen (Pappos von Alexandria) überliefert, trifft die Idee aber gut: Mit einem ausreichend langen Arm hält eine kleine Kraft einer riesigen das Gleichgewicht. Um die Erde zu heben, hätte Archimedes seinen Hebel aber über astronomische Entfernungen bewegen müssen: Die Kraftersparnis bezahlt man immer mit einem größeren Weg.</p>`
    },
    {
      type: "curiosity",
      title: "Dein Körper ist voller Hebel",
      html: `<p>Der Ellbogen ist der Drehpunkt, der Bizeps setzt wenige Zentimeter vom Ellbogen entfernt an, während die Hand, die ein Gewicht hält, etwa 30 cm entfernt ist: Das ist ein Hebel <b>3. Art</b>, nachteilig bei der Kraft. Um bei gebeugtem Arm ein Gewicht von 5 kg (49 N) in der Hand zu halten, muss der Bizeps eine um ein Vielfaches größere Kraft aufbringen. Dafür gewinnt man große Geschwindigkeit und Bewegungsweite: Eine kleine Verkürzung des Muskels bewegt die Hand weit. Der Fuß, der sich auf die Zehenspitzen hebt, ist dagegen ein Hebel 2. Art, vorteilhaft. Auch das Kauen mit dem Unterkiefer und das Nicken mit dem Kopf nutzen Hebel!</p>`
    },
    {
      type: "text",
      title: "Schwerpunkt und Gleichgewichtsarten",
      html: `<p>Der <b>Schwerpunkt</b> ist der Punkt, in dem man sich die gesamte Gewichtskraft eines Körpers angreifend denken kann. Bei einem homogenen und symmetrischen Körper fällt er mit dem geometrischen Mittelpunkt zusammen (im Mittelpunkt einer Scheibe, eines Würfels, einer Kugel). Ein an einem Faden hängender Körper bleibt in Ruhe, wenn der Schwerpunkt senkrecht unter dem Aufhängepunkt liegt; ein aufliegender Körper kippt nicht, solange das <b>Lot durch den Schwerpunkt innerhalb der Standfläche liegt</b>.</p>
<p>Bei einem Körper, der sich bewegen oder drehen kann, unterscheidet man nach einer kleinen Auslenkung aus dem Gleichgewicht drei Fälle:</p>
<ul>
<li><b>stabiles Gleichgewicht</b>: Der Körper strebt in die Ausgangslage zurück (eine Kugel am Boden einer Schale; der Schwerpunkt steigt, wenn man ihn auslenkt);</li>
<li><b>labiles Gleichgewicht</b>: Der Körper entfernt sich noch weiter (eine Kugel auf der Spitze eines Hügels; der Schwerpunkt sinkt);</li>
<li><b>indifferentes Gleichgewicht</b>: Der Körper bleibt in der neuen Lage (eine Kugel auf einem ebenen Tisch; der Schwerpunkt ändert seine Höhe nicht).</li>
</ul>
<p>Je <b>tiefer</b> der Schwerpunkt und je <b>breiter</b> die Standfläche, desto stabiler das Gleichgewicht: Deshalb sind Rennwagen niedrig und breit, ein oben beladener Lastwagen kippt in der Kurve leichter um, und in der Straßenbahn steht man mit gespreizten Beinen sicherer.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das Drehmoment zu verstehen",
      intro: "Der Begriff des Drehmoments ist oft der schwierigste der Lektion. Hier sind vier verschiedene Wege, ihn zu erfassen.",
      tabs: [
        {
          label: "🚪 Die Tür",
          html: `<p>Versuche, eine Tür zu schließen, indem du 5 cm von den Scharnieren entfernt drückst: Man braucht eine riesige Kraft. Drückst du an der Klinke, 80 cm entfernt, genügt ein Finger. Das <b>Drehmoment</b> M = F·b misst diesen Unterschied: Wird der Hebelarm b 16-mal so groß, erreicht man dieselbe Drehung mit einer 16-mal kleineren Kraft. Deshalb liegen die Klinken auf der den Scharnieren gegenüberliegenden Seite und Schraubenschlüssel lange Griffe haben.</p>`
        },
        {
          label: "⚖️ Gewicht × Abstand",
          html: `<p>Stell dir eine Stange vor, an der in verschiedenen Abständen von der Mitte Beutel hängen. Es zählt nicht nur, <b>wie schwer</b> ein Beutel ist, sondern auch, <b>wo</b> er hängt: Man multipliziert das Gewicht mit dem Abstand. Hast du links 3 kg in 4 cm (3 × 4 = 12) und rechts 2 kg in 6 cm (2 × 6 = 12), sind die „Punktzahlen“ gleich, und die Stange ist im Gleichgewicht. Hängst du rechts 2 kg in 5 cm auf, ist die Punktzahl 10, und links gewinnt.</p>`,
          widget: "match",
          options: { pairs: [["3 kg in 4 cm", "Drehmoment 12"], ["5 kg in 2 cm", "Drehmoment 10"], ["1 kg in 9 cm", "Drehmoment 9"], ["4 kg in 5 cm", "Drehmoment 20"]] }
        },
        {
          label: "🏗️ Der senkrechte Hebelarm",
          html: `<p>Der Hebelarm ist der <b>senkrechte</b> Abstand zwischen Drehpunkt und der Wirkungslinie der Kraft, nicht irgendein Abstand. Wenn du einen Schraubenschlüssel schräg drückst, dreht nur die Komponente senkrecht zum Griff die Schraube. Längs des Griffs zur Schraube hin zu drücken, dreht sie überhaupt nicht (Hebelarm null). Deshalb kann man das Drehmoment auch als M = F·d·sin θ schreiben, wobei θ der Winkel zwischen der Kraft und der Strecke vom Drehpunkt zum Angriffspunkt ist.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<circle cx="90" cy="130" r="16" fill="#475569"/>
<text x="90" y="170" font-size="16" text-anchor="middle" fill="#1f2937">Schraube</text>
<rect x="90" y="124" width="320" height="12" rx="5" fill="#92400e"/>
<line x1="410" y1="130" x2="470" y2="50" stroke="#16a34a" stroke-width="4"/>
<polygon points="474,45 456,53 468,63" fill="#16a34a"/>
<text x="480" y="48" font-size="17" fill="#15803d" font-weight="bold">F</text>
<line x1="410" y1="130" x2="410" y2="62" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 3"/>
<text x="360" y="72" font-size="16" fill="#2563eb" font-weight="bold">F sin θ</text>
<text x="300" y="200" font-size="17" text-anchor="middle" fill="#1f2937">Nur die Komponente senkrecht zum Griff dreht.</text>
</svg>`
        },
        {
          label: "🔁 Das Drehmoment als „wie stark es dreht“",
          html: `<p>Eine nützliche Analogie zur geradlinigen Bewegung: Die Kraft <b>verändert die Geschwindigkeit</b> eines Körpers, das Drehmoment <b>verändert die Drehung</b>. Keine Kraft heißt keine Beschleunigung; kein Drehmoment heißt keine Winkelbeschleunigung. Ein Körper im Gleichgewicht ist wie ein Körper, der sich weder bewegt noch beschleunigt noch dreht: Deshalb braucht man sowohl ΣF = 0 als auch ΣM = 0.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Begriffslandkarte des Gleichgewichts fester Körper",
      nodes: [
        { id: "equilibrio", label: "Statisches Gleichgewicht", x: 50, y: 6, color: "#64748b", html: "Ein Körper ruht und bleibt in Ruhe: Er verschiebt sich nicht und dreht sich nicht.", why: "Das ist die Statik, der erste Zweig der Physik, der mathematisch streng behandelt wurde, schon von Archimedes (3. Jh. v. Chr.) und später von Stevin und Galilei. Würde ein ruhender Körper beschleunigen, sähen wir ihn sich bewegen: Das Gleichgewicht ist der Zustand, in dem sich die Wirkungen der Kräfte gegenseitig aufheben." },
        { id: "forze", label: "Kräftesumme null", x: 20, y: 28, color: "#2563eb", html: "ΣF = 0: Der Körper verschiebt sich nicht.", why: "Sie folgt aus dem zweiten Newtonschen Gesetz (1687): F = ma. Ist die Resultierende null, ist die Beschleunigung null. Und wenn er aus der Ruhe startet, bleibt er in Ruhe (erstes Gesetz, schon von Galilei geahnt)." },
        { id: "momenti", label: "Drehmomentsumme null", x: 80, y: 28, color: "#9333ea", html: "ΣM = 0: Der Körper dreht sich nicht.", why: "Bei einem ausgedehnten Körper genügt es nicht, die Kräfte zu addieren: Auch die Angriffspunkte zählen. Das Drehmoment M = F·b misst die Fähigkeit einer Kraft zu drehen. Der Begriff geht auf das Hebelgesetz des Archimedes zurück." },
        { id: "peso", label: "Gewichtskraft und Reaktionskräfte", x: 8, y: 52, color: "#16a34a", html: "F_G = mg, F_N, Zugkräfte, Reibung.", why: "Die Gewichtskraft ist die Gravitationsanziehung der Erde (Newton, 1687); die Zwangskräfte folgen aus dem dritten Gesetz: Jede Aktion hat eine gleich große, entgegengesetzte Reaktion." },
        { id: "inclinato", label: "Schiefe Ebene", x: 32, y: 66, color: "#22c55e", html: "Zerlegung der Gewichtskraft: F_G sin α längs der Ebene, F_G cos α senkrecht.", why: "Die Zerlegung von Vektoren in Komponenten ist eine Anwendung der Trigonometrie und der Parallelogrammregel. Galilei untersuchte die schiefe Ebene, um den Fall der Körper zu „verlangsamen“ und zu messen." },
        { id: "leve", label: "Hebel", x: 80, y: 56, color: "#f59e0b", html: "F_K·b_K = F_L·b_L; drei Arten.", why: "Archimedes bewies das Hebelgesetz in der Abhandlung Über das Gleichgewicht ebener Flächen (3. Jh. v. Chr.) ausgehend von Symmetriepostulaten. Es ist ein Spezialfall der Bedingung ΣM = 0." },
        { id: "baricentro", label: "Schwerpunkt", x: 56, y: 80, color: "#ef4444", html: "Der Angriffspunkt der gesamten Gewichtskraft.", why: "Archimedes untersuchte ihn für ebene Figuren (Parabel, Dreieck). Ein Körper ist standfest, wenn das Lot durch den Schwerpunkt in die Standfläche fällt." },
        { id: "stabilita", label: "Stabil / labil / indifferent", x: 20, y: 92, color: "#0ea5e9", html: "Was nach einer kleinen Störung geschieht.", why: "Es hängt von der potenziellen Gravitationsenergie ab: Das Gleichgewicht ist dort stabil, wo die potenzielle Energie minimal ist (der Schwerpunkt liegt am tiefstmöglichen Punkt)." }
      ],
      edges: [["equilibrio", "forze", "Bedingung 1"], ["equilibrio", "momenti", "Bedingung 2"], ["forze", "peso", "beteiligte Kräfte"], ["peso", "inclinato", "wird zerlegt"], ["momenti", "leve", "Anwendung"], ["peso", "baricentro", "greift an im"], ["baricentro", "stabilita", "bestimmt die"]]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Massenpunkt: <b>ΣF = 0</b>. Starrer Körper: <b>ΣF = 0 und ΣM = 0</b>.</li>
<li>Gewichtskraft: <b>F<sub>G</sub> = m g</b>. Komponenten auf der schiefen Ebene: <b>F<sub>G∥</sub> = F<sub>G</sub> sin α</b>, <b>F<sub>G⊥</sub> = F<sub>G</sub> cos α</b>.</li>
<li>Drehmoment: <b>M = F · b</b> (b = Hebelarm, senkrechter Abstand von der Wirkungslinie).</li>
<li>Hebel: <b>F<sub>K</sub> · b<sub>K</sub> = F<sub>L</sub> · b<sub>L</sub></b>. 1. Art: Drehpunkt in der Mitte; 2.: Last in der Mitte; 3.: Kraft in der Mitte.</li>
<li>Eine einfache Maschine <b>spart keine Arbeit</b>: Sie ändert nur das Verhältnis Kraft / Weg.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Drehmomente, Hebel und Gleichgewicht",
      questions: [
        { type: "num", q: "Eine Kraft von 20 N wirkt senkrecht in 0,5 m Abstand vom Drehpunkt. Wie groß ist das Drehmoment (in N·m)?", answer: 10, unit: "N·m", explain: "M = F·b = 20 × 0,5 = 10 N·m." },
        { type: "mc", q: "Die Schubkarre ist ein Hebel der …", options: ["1. Art", "2. Art", "3. Art"], answer: 1, explain: "Der Drehpunkt ist das Rad, die Last liegt in der Mitte, die Kraft greift an den Griffen an: Last zwischen Drehpunkt und Kraft, also 2. Art, immer vorteilhaft." },
        { type: "mc", q: "Eine Kugel auf einem waagerechten Tisch befindet sich im …", options: ["stabilen Gleichgewicht", "labilen Gleichgewicht", "indifferenten Gleichgewicht"], answer: 2, explain: "Wenn du sie verschiebst, bleibt sie dort, wo du sie hingelegt hast: Der Schwerpunkt ändert seine Höhe nicht." },
        { type: "tf", q: "Eine Kraft, die durch den Drehpunkt geht, hat das Drehmoment null.", answer: true, explain: "Der Hebelarm ist null: Das Drehmoment ist M = F·0 = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Statisches Gleichgewicht", d: "Zustand eines ruhenden Körpers, auf den die Resultierende der Kräfte und der Drehmomente null ist." },
    { t: "Resultierende", d: "Vektorsumme aller Kräfte, die auf einen Körper wirken." },
    { t: "Gewichtskraft", d: "Kraft, mit der die Erde einen Körper anzieht: F_G = m·g, in Newton." },
    { t: "Zwangskraft (Auflagekraft)", d: "Kraft, die eine Unterlage, ein Faden oder eine Wand ausübt und die eine Bewegung verhindert." },
    { t: "Haftreibung", d: "Kraft, die dem Beginn des Gleitens entgegenwirkt; Höchstwert μ_H·F_N." },
    { t: "Schiefe Ebene", d: "Ebene Fläche, die um einen Winkel α gegen die Waagerechte geneigt ist." },
    { t: "Drehmoment einer Kraft", d: "M = F·b: misst die Fähigkeit der Kraft, einen Körper um einen Punkt zu drehen." },
    { t: "Hebelarm", d: "Senkrechter Abstand zwischen Drehpunkt und Wirkungslinie der Kraft." },
    { t: "Kräftepaar", d: "Zwei gleich große, parallele, entgegengesetzte Kräfte mit verschiedenen Wirkungslinien: Resultierende null, Drehmoment ungleich null." },
    { t: "Hebel", d: "Starre Stange, die sich um einen Drehpunkt dreht und auf die eine Kraft und eine Lastkraft wirken." },
    { t: "Schwerpunkt", d: "Punkt, in dem man die gesamte Gewichtskraft eines Körpers angreifend denkt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was ist die Gleichgewichtsbedingung eines Massenpunkts?", options: ["Die Resultierende der Kräfte ist null", "Das Drehmoment der Kräfte ist null", "Die Gewichtskraft ist gleich der Masse"], answer: 0, explain: "Beim Massenpunkt gibt es keine Drehung zu betrachten: ΣF = 0 genügt." },
      { type: "num", q: "Wie groß ist die Gewichtskraft (in N, mit g = 9,8 m/s²) eines Gegenstands von 5 kg?", answer: 49, tol: 0.1, unit: "N", explain: "F_G = m·g = 5 × 9,8 = 49 N." },
      { type: "num", q: "Eine glatte schiefe Ebene ist 2 m hoch und 5 m lang. Welche Parallelkraft (in N) hält eine Last mit der Gewichtskraft 300 N fest?", answer: 120, unit: "N", explain: "F = F_G·h/l = 300 × 2/5 = 120 N." },
      { type: "tf", q: "Mit Reibung hängt der größte Winkel einer Ebene, auf der ein Körper in Ruhe bleibt, von der Masse des Körpers ab.", answer: false, explain: "Die Bedingung lautet tan α ≤ μ_H: Die Masse kürzt sich heraus." },
      { type: "num", q: "Eine Kraft von 50 N greift senkrecht in 0,4 m Abstand von der Drehachse an. Berechne das Drehmoment (N·m).", answer: 20, unit: "N·m", explain: "M = F·b = 50 × 0,4 = 20 N·m." },
      { type: "num", q: "Ein Hebel ist im Gleichgewicht mit einer Lastkraft von 90 N in 20 cm Abstand vom Drehpunkt. Welche Kraft (in N) braucht man in 60 cm Abstand vom Drehpunkt auf der anderen Seite?", answer: 30, unit: "N", explain: "F_K·60 = 90·20, also F_K = 1800/60 = 30 N." },
      { type: "mc", q: "Welches dieser Geräte ist ein Hebel 3. Art?", options: ["Schere", "Pinzette", "Nussknacker"], answer: 1, explain: "Bei der Pinzette greift die Kraft zwischen dem Drehpunkt (dem Scharnier) und der Spitze an, wo die Last liegt." },
      { type: "tf", q: "Ein Hebel 2. Art ist immer vorteilhaft.", answer: true, explain: "Die Last liegt näher am Drehpunkt als die Kraft: b_L < b_K, also F_K < F_L." },
      { type: "order", q: "Bringe die Schritte zur Lösung einer Gleichgewichtsaufgabe auf der schiefen Ebene in die richtige Reihenfolge.", items: ["Alle Kräfte auf den Körper einzeichnen", "Achsen parallel und senkrecht zur Ebene wählen", "Die Gewichtskraft in die zwei Komponenten zerlegen", "ΣF = 0 längs jeder Achse ansetzen", "Die unbekannte Kraft berechnen"], explain: "Die Standardmethode: Zeichnung, passende Achsen, Zerlegung, Gleichgewicht für jede Achse, Lösung." },
      { type: "mc", q: "Wann kippt ein aufliegender Körper nicht um?", options: ["Wenn der Schwerpunkt am höchsten Punkt liegt", "Wenn das Lot durch den Schwerpunkt innerhalb der Standfläche liegt", "Wenn die Masse klein ist"], answer: 1, explain: "Wenn das Lot durch den Schwerpunkt aus der Standfläche herausfällt, erzeugt die Gewichtskraft ein Drehmoment, das den Körper bis zum Umkippen dreht." },
      { type: "text", q: "Wie heißt der feste Punkt, um den sich ein Hebel dreht?", answer: ["Drehpunkt", "der Drehpunkt", "Drehachse", "Stützpunkt"], explain: "Der Drehpunkt ist der Auflagepunkt des Hebels." }
    ]
  }
});
