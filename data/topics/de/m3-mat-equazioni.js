TOPIC('de', {
  id: "m3-mat-equazioni",
  title: "Lineare Gleichungen (Gleichungen ersten Grades)",
  intro: "„Ich denke mir eine Zahl, multipliziere sie mit 3, addiere 5 und erhalte 26: Welche Zahl habe ich mir gedacht?“ Um das zu beantworten, brauchen wir eine <b>Gleichung</b>. Wir lernen, lineare Gleichungen mit den zwei <b>Äquivalenzumformungen</b> zu lösen, als wären sie eine Waage im Gleichgewicht, und sie zum Lösen von Aufgaben zu benutzen.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Identitäten und Gleichungen",
      html: `<p>Eine <b>Gleichheit</b> zwischen zwei Termen kann sein:</p>
<ul>
<li>eine <b>Identität</b>, wenn sie für <b>jeden beliebigen Wert</b> der Buchstaben wahr ist: 2(x + 3) = 2x + 6 ist immer wahr;</li>
<li>eine <b>Gleichung</b>, wenn sie <b>nur für einige Werte</b> (oder für keinen) wahr ist: x + 3 = 10 ist nur wahr, wenn x = 7.</li>
</ul>
<p>In einer Gleichung gilt:</p>
<ul>
<li>der Buchstabe ist die <b>Unbekannte</b> (meistens x);</li>
<li>was links vom Gleichheitszeichen steht, ist die <b>linke Seite</b> (primo membro), was rechts steht, die <b>rechte Seite</b> (secondo membro);</li>
<li>der Wert, der die Gleichheit wahr macht, ist die <b>Lösung</b> (oder Wurzel);</li>
<li>eine Gleichung ist <b>ersten Grades</b>, wenn die Unbekannte höchstens mit dem Exponenten 1 vorkommt (kein x², x³ …).</li>
</ul>
<p>Zwei Gleichungen sind <b>äquivalent</b>, wenn sie dieselben Lösungen haben: x + 3 = 10 und x = 7 sind äquivalent. Eine Gleichung zu lösen heißt, sie in immer einfachere äquivalente Gleichungen umzuformen, bis man bei <b>x = Zahl</b> ankommt.</p>`
    },
    {
      type: "svg",
      title: "Die Gleichung ist eine Waage",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0f9ff"/>
<polygon points="320,260 290,290 350,290" fill="#475569"/>
<rect x="315" y="110" width="10" height="150" fill="#475569"/>
<rect x="90" y="105" width="460" height="10" rx="5" fill="#334155"/>
<line x1="150" y1="115" x2="150" y2="170" stroke="#334155" stroke-width="3"/>
<line x1="490" y1="115" x2="490" y2="170" stroke="#334155" stroke-width="3"/>
<path d="M70 170 L230 170 L210 195 L90 195 Z" fill="#94a3b8"/>
<path d="M410 170 L570 170 L550 195 L430 195 Z" fill="#94a3b8"/>
<rect x="85" y="120" width="44" height="50" rx="6" fill="#a855f7"/><text x="107" y="153" font-size="22" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
<rect x="133" y="120" width="44" height="50" rx="6" fill="#a855f7"/><text x="155" y="153" font-size="22" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
<circle cx="195" cy="155" r="14" fill="#f59e0b"/><text x="195" y="161" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="215" cy="140" r="14" fill="#f59e0b"/><text x="215" y="146" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="195" cy="127" r="14" fill="#f59e0b"/><text x="195" y="133" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<g fill="#f59e0b"><circle cx="430" cy="155" r="14"/><circle cx="460" cy="155" r="14"/><circle cx="490" cy="155" r="14"/><circle cx="520" cy="155" r="14"/><circle cx="550" cy="155" r="14"/><circle cx="445" cy="128" r="14"/><circle cx="475" cy="128" r="14"/><circle cx="505" cy="128" r="14"/><circle cx="535" cy="128" r="14"/><circle cx="490" cy="101" r="14"/><circle cx="460" cy="101" r="14"/></g>
<text x="150" y="235" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">2x + 3</text>
<text x="320" y="60" font-size="34" text-anchor="middle" fill="#1f2937" font-weight="bold">=</text>
<text x="490" y="235" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">11</text>
<text x="320" y="30" font-size="17" text-anchor="middle" fill="#0369a1">Nimm von beiden Schalen 3 weg, dann halbiere: x = 4</text>
</svg>`,
      caption: "Was du auf einer Schale tust, musst du auch auf der anderen tun: So bleibt die Waage im Gleichgewicht."
    },
    {
      type: "text",
      title: "Die erste Äquivalenzumformung",
      html: `<p>Wenn man auf <b>beiden Seiten</b> die <b>gleiche Zahl</b> (oder den gleichen Term) <b>addiert oder subtrahiert</b>, erhält man eine äquivalente Gleichung.</p>
<p>Beispiel: x + 5 = 12 → ich subtrahiere 5 auf beiden Seiten: x + 5 − 5 = 12 − 5 → <b>x = 7</b>.</p>
<p>Praktische Folgen:</p>
<ul>
<li><b>Umstellungsregel</b>: Ein Glied kann man von einer Seite auf die andere <b>bringen, indem man sein Vorzeichen ändert</b>. 3x − 4 = 2x + 6 → 3x − 2x = 6 + 4 → x = 10.</li>
<li><b>Streichungsregel</b>: Zwei <b>gleiche</b> Glieder auf beiden Seiten kann man streichen. x + 7 = 2 + 7 → x = 2.</li>
</ul>`
    },
    {
      type: "text",
      title: "Die zweite Äquivalenzumformung",
      html: `<p>Wenn man <b>beide Seiten</b> mit der <b>gleichen Zahl ungleich null multipliziert oder durch sie dividiert</b>, erhält man eine äquivalente Gleichung.</p>
<p>Beispiel: 4x = 28 → ich dividiere beide Seiten durch 4: <b>x = 7</b>.</p>
<p>Praktische Folgen:</p>
<ul>
<li><b>Alle Vorzeichen ändern</b> (mit −1 multiplizieren): −3x = −12 → 3x = 12 → x = 4.</li>
<li><b>Nenner beseitigen</b>: Man multipliziert alles mit dem kgV der Nenner. x/2 + x/3 = 5 → (×6) → 3x + 2x = 30 → 5x = 30 → x = 6.</li>
<li><b>Kürzen</b>: Wenn alle Glieder einen gemeinsamen Teiler haben, dividiert man: 6x + 9 = 15 → (:3) → 2x + 3 = 5.</li>
</ul>
<p>⚠️ Warum „ungleich null“? Wenn man mit 0 multipliziert, wird jede Gleichung zu 0 = 0, und man verliert alle Informationen!</p>`
    },
    {
      type: "remember",
      title: "Die Methode in 6 Schritten",
      html: `<ol>
<li>Löse die <b>Klammern</b> auf (Distributivgesetz).</li>
<li>Beseitige die <b>Nenner</b> (multipliziere mit dem kgV).</li>
<li><b>Bringe um</b>: Glieder mit x auf die linke Seite, Zahlen auf die rechte (Vorzeichen wechseln!).</li>
<li><b>Fasse</b> gleichartige Glieder <b>zusammen</b>: Du erhältst die <b>Normalform</b> ax = b.</li>
<li><b>Dividiere</b> durch den Koeffizienten von x: x = b/a.</li>
<li><b>Probe</b>: Setze die Lösung in die ursprüngliche Gleichung ein.</li>
</ol>`
    },
    {
      type: "example",
      title: "Geführtes Beispiel",
      html: `<p>Löse: <b>3(x − 2) + 4 = x + 10</b></p>
<ol>
<li>Klammern: 3x − 6 + 4 = x + 10</li>
<li>Umstellen: 3x − x = 10 + 6 − 4</li>
<li>Zusammenfassen: 2x = 12</li>
<li>Division durch 2: <b>x = 6</b></li>
<li>Probe: 3(6 − 2) + 4 = 12 + 4 = 16; 6 + 10 = 16 ✔️</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Äquivalenzumformungen",
      questions: [
        { type: "num", q: "Löse: x − 9 = 4", answer: 13, explain: "Ich bringe die −9 hinüber: x = 4 + 9 = 13." },
        { type: "num", q: "Löse: 5x = −35", answer: -7, explain: "Ich dividiere durch 5: x = −7." },
        { type: "tf", q: "Man darf beide Seiten mit 0 multiplizieren.", answer: false, explain: "Die zweite Umformung gilt nur für Zahlen ungleich null." }
      ]
    },
    {
      type: "text",
      title: "Bestimmt, unlösbar, unbestimmt",
      html: `<p>Wenn du bei der Normalform <b>ax = b</b> angekommen bist:</p>
<table>
<tr><th>Fall</th><th>Beispiel</th><th>Lösungen</th></tr>
<tr><td>a ≠ 0 → <b>bestimmt</b></td><td>4x = 12</td><td>genau eine: x = 3</td></tr>
<tr><td>a = 0, b ≠ 0 → <b>unlösbar</b></td><td>0x = 5</td><td>keine: keine Zahl mal 0 ergibt 5</td></tr>
<tr><td>a = 0, b = 0 → <b>unbestimmt</b></td><td>0x = 0</td><td>unendlich viele: Es ist eine Identität</td></tr>
</table>
<p>Unlösbares Beispiel: x + 3 = x + 5 → 0x = 2. Unbestimmtes Beispiel: 2(x + 1) = 2x + 2 → 0x = 0.</p>`
    },
    {
      type: "widget",
      title: "Ordne die Gleichungen ein",
      widget: "classify",
      options: { groups: ["Bestimmt", "Unlösbar", "Unbestimmt"], items: [
        ["3x = 12", 0],
        ["0x = 7", 1],
        ["0x = 0", 2],
        ["x + 1 = x + 4", 1],
        ["2x + 2 = 2(x + 1)", 2],
        ["5x − 1 = 9", 0],
        ["4(x − 1) = 4x", 1],
        ["x/2 = 3", 0]
      ] },
      caption: "Bringe sie auf die Normalform ax = b und schau dir a und b an."
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Eintrittskarten-Aufgabe",
      html: `<p>Eine Klasse geht ins Museum. Die volle Eintrittskarte kostet <b>8 €</b>, die ermäßigte für Schüler <b>5 €</b>. Es sind 2 Lehrer dabei (voller Preis), und insgesamt werden <b>131 €</b> ausgegeben. Wie viele Schüler sind es?</p>
<ol>
<li><b>Unbekannte</b>: x = Anzahl der Schüler.</li>
<li><b>Gleichung</b>: 5x + 2·8 = 131 → 5x + 16 = 131</li>
<li><b>Lösung</b>: 5x = 115 → x = <b>23</b> Schüler.</li>
<li><b>Probe</b>: 23·5 + 16 = 115 + 16 = 131 ✔️ (und 23 ist eine positive ganze Zahl, also zulässig).</li>
</ol>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Alter",
      html: `<p>Marco ist 3-mal so alt wie seine Tochter Sofia. In 12 Jahren wird er doppelt so alt sein wie Sofia. Wie alt sind sie?</p>
<ul>
<li>Alter von Sofia = x; Alter von Marco = 3x.</li>
<li>In 12 Jahren: 3x + 12 = 2(x + 12)</li>
<li>3x + 12 = 2x + 24 → x = <b>12</b>. Sofia ist 12 Jahre alt, Marco <b>36</b>.</li>
<li>Probe: In 12 Jahren sind sie 48 und 24, und 48 = 2·24 ✔️</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Das Zeichen „=“",
      html: `<p>Das Zeichen <b>=</b> wurde 1557 vom walisischen Arzt und Mathematiker <b>Robert Recorde</b> im Buch <i>The Whetstone of Witte</i> erfunden. Er schrieb, er habe zwei parallele Linien gleicher Länge gewählt, „weil keine zwei Dinge gleicher sein können“. Vor ihm schrieb man „ist gleich“ ausführlich aus (lateinisch <i>aequales</i>, abgekürzt „ae“).</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Grabinschrift des Diophant",
      html: `<p>Ein altes griechisches Rätsel erzählt das Leben des Mathematikers <b>Diophant</b>: „Seine Kindheit dauerte 1/6 seines Lebens; nach 1/12 wuchs ihm der Bart; nach 1/7 heiratete er; 5 Jahre später wurde ein Sohn geboren, der halb so viele Jahre lebte wie der Vater; der Vater starb 4 Jahre nach dem Sohn.“ Gleichung: x/6 + x/12 + x/7 + 5 + x/2 + 4 = x → <b>x = 84</b>. Und schon im <b>Papyrus Rhind</b> (Ägypten, um 1650 v. Chr.) gibt es „Aha“-Aufgaben, die echte lineare Gleichungen sind: „eine Menge und ihr Siebtel ergeben 19“.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Gleichungen zu lösen",
      intro: "Kommt dir das Umstellen mit Vorzeichenwechsel wie Zauberei vor? Hier siehst du, woher es kommt, mit Methoden aus anderen Ländern.",
      tabs: [
        {
          label: "⚖️ Die Waage",
          html: `<p>Stell dir die Gleichung als eine <b>Waage mit zwei Schalen</b> im Gleichgewicht vor. Die x sind geheimnisvolle Säckchen, alle gleich schwer, die Zahlen sind Gewichtchen zu je 1.</p>
<ul>
<li>Du darfst von beiden Schalen <b>das gleiche Gewicht wegnehmen</b> (1. Umformung).</li>
<li>Du darfst beide Schalen <b>halbieren</b> (2. Umformung).</li>
</ul>
<p>„Umstellen mit Vorzeichenwechsel“ ist nur eine Abkürzung: Wenn du 3 Gewichtchen von beiden Schalen wegnimmst, verschwindet das +3 links, und rechts erscheint ein −3!</p>
<p>3x + 2 = x + 10 → ich nehme x von beiden weg → 2x + 2 = 10 → ich nehme 2 weg → 2x = 8 → ich halbiere → <b>x = 4</b>.</p>`
        },
        {
          label: "🇸🇬 Das Streckenmodell aus Singapur",
          html: `<p>In Singapur, einem der Länder mit den besten Mathematikergebnissen, löst man Aufgaben schon mit <b>Streifen</b>, bevor man Buchstaben benutzt.</p>
<p>„Luca hat 3-mal so viele Sticker wie Anna; zusammen haben sie 48.“ Zeichne einen Streifen für Anna und 3 gleiche Streifen für Luca: Insgesamt sind es <b>4 Streifen = 48</b>, also ein Streifen = 12. Anna hat 12 Sticker, Luca 36. In Algebra: x + 3x = 48 → 4x = 48 → x = 12.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<text x="20" y="60" font-size="20" fill="#1f2937" font-weight="bold">Anna</text>
<rect x="110" y="35" width="100" height="40" fill="#f472b6" stroke="#9d174d" stroke-width="3"/>
<text x="160" y="62" font-size="18" text-anchor="middle" fill="#fff">x</text>
<text x="20" y="130" font-size="20" fill="#1f2937" font-weight="bold">Luca</text>
<rect x="110" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="210" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="310" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="160" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text><text x="260" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text><text x="360" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text>
<path d="M430 35 Q450 90 430 145" fill="none" stroke="#1f2937" stroke-width="3"/>
<text x="460" y="97" font-size="24" fill="#1f2937" font-weight="bold">48</text>
<text x="300" y="195" font-size="20" text-anchor="middle" fill="#166534" font-weight="bold">4 Streifen = 48 → 1 Streifen = 12</text>
</svg>`
        },
        {
          label: "🇬🇧 Die Maschine rückwärts",
          html: `<p>In englischen Schulen benutzt man <b>function machines</b>: Die Unbekannte geht in eine Maschine, die Rechenoperationen ausführt.</p>
<p>x → <b>× 3</b> → <b>+ 5</b> → 26</p>
<p>Um x zu finden, lässt du die Maschine <b>rückwärts</b> laufen, mit den <b>Umkehroperationen</b> in umgekehrter Reihenfolge:</p>
<p>26 → <b>− 5</b> → 21 → <b>: 3</b> → <b>7</b>. Also ist x = 7.</p>
<p>Genau das tust du auch mit den Äquivalenzumformungen: Um ein +5 „rückgängig“ zu machen, ziehst du 5 ab, um ein ×3 rückgängig zu machen, dividierst du durch 3. Es ist wie beim Ausziehen: Das Letzte, was du angezogen hast (die Jacke), ziehst du als Erstes aus!</p>`
        },
        {
          label: "🐸 Auf dem Zahlenstrahl",
          html: `<p>Löse <b>x + 7 = 3</b> auf dem Zahlenstrahl: Von welcher Zahl muss ich starten, um mit einem Sprung von +7 bei 3 anzukommen? Starte bei 3 und geh 7 zurück: Du kommst bei <b>−4</b> an. Also ist x = −4. Probiere es mit dem Widget: Setze den Start auf 3 und den Sprung auf 7, dann drücke „−“.</p>`,
          widget: "numberLine",
          options: { min: -10, max: 10, step: 7, start: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der linearen Gleichungen",
      nodes: [
        { id: "uguaglianza", label: "Gleichheit", x: 50, y: 6, color: "#64748b", html: "Zwei Terme, verbunden durch das Zeichen =.", why: "Das Zeichen = wurde 1557 von Robert Recorde eingeführt. Eine Gleichheit zwischen Termen kann immer wahr oder nur manchmal wahr sein." },
        { id: "identita", label: "Identität", x: 20, y: 26, color: "#94a3b8", html: "Gleichheit, die für jeden Wert der Buchstaben wahr ist.", why: "Sie entsteht aus den Eigenschaften der Rechenoperationen (z. B. dem Distributivgesetz): Die Formeln des Rechnens mit Buchstaben sind Identitäten." },
        { id: "equazione", label: "Gleichung", x: 70, y: 26, color: "#2563eb", html: "Gleichheit, die nur für bestimmte Werte der Unbekannten wahr ist.", why: "Vom lateinischen <i>aequatio</i>, „gleichmachen“. Aufgaben dieser Art finden sich schon im Papyrus Rhind (um 1650 v. Chr.) und auf babylonischen Tontafeln." },
        { id: "principio1", label: "1. Umformung", x: 45, y: 50, color: "#16a34a", html: "Man darf auf beiden Seiten dieselbe Größe addieren oder subtrahieren.", why: "Entspricht dem <i>al-dschabr</i> und dem <i>al-muqābala</i> von al-Chwarizmi (um 820 n. Chr.): die abgezogenen Glieder „wieder einrenken“ und gleiche „ausgleichen“." },
        { id: "principio2", label: "2. Umformung", x: 80, y: 50, color: "#f59e0b", html: "Man darf beide Seiten mit derselben Zahl ≠ 0 multiplizieren oder durch sie dividieren.", why: "Wenn zwei Größen gleich sind, bleiben auch ihre Doppelten, ihre Hälften … gleich. Es ist eines der Axiome („Gemeinsame Begriffe“) von Euklid. Null ist ausgeschlossen, weil die Division durch null keinen Sinn hat." },
        { id: "trasporto", label: "Umstellungsregel", x: 20, y: 70, color: "#22c55e", html: "Ein Glied wechselt mit geändertem Vorzeichen auf die andere Seite.", why: "Es ist eine Abkürzung der 1. Umformung: Die Gegenzahl auf beiden Seiten zu addieren lässt das Glied auf der einen Seite „verschwinden“ und mit umgekehrtem Vorzeichen auf der anderen „erscheinen“." },
        { id: "forma", label: "Normalform ax = b", x: 60, y: 72, color: "#a855f7", html: "Der Zielpunkt nach den Umformungen.", why: "Jede lineare Gleichung lässt sich auf diese Form bringen; daran sieht man sofort, ob sie bestimmt, unlösbar oder unbestimmt ist." },
        { id: "casi", label: "Bestimmt / unlösbar / unbestimmt", x: 60, y: 92, color: "#ef4444", html: "Eine Lösung / keine / unendlich viele.", why: "Es hängt von a und b ab: Wenn a ≠ 0 ist, kann ich dividieren; wenn a = 0 ist, ist die linke Seite immer 0, also hängt alles von b ab." },
        { id: "problemi", label: "Aufgaben", x: 20, y: 92, color: "#0ea5e9", html: "Eine reale Situation in eine Gleichung übersetzen.", why: "Das ist der Grund, warum Gleichungen entstanden sind: Erbschaften teilen, Steuern, Preise, Entfernungen berechnen. Fibonaccis Liber Abaci (1202) ist voll von Handelsaufgaben, die so gelöst werden." }
      ],
      edges: [
        ["uguaglianza", "identita", "immer wahr"],
        ["uguaglianza", "equazione", "manchmal wahr"],
        ["equazione", "principio1", "wird umgeformt mit"],
        ["equazione", "principio2", "wird umgeformt mit"],
        ["principio1", "trasporto", "Abkürzung"],
        ["principio1", "forma", "führt zur"],
        ["principio2", "forma", "führt zur"],
        ["forma", "casi", "entscheidet"],
        ["problemi", "equazione", "werden übersetzt in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: lösen und prüfen",
      questions: [
        { type: "num", q: "Löse: 7x − 4 = 3x + 20", answer: 6, explain: "7x − 3x = 20 + 4 → 4x = 24 → x = 6." },
        { type: "num", q: "Löse: x/3 + 2 = 6", answer: 12, explain: "x/3 = 4 → x = 12." },
        { type: "mc", q: "Die Gleichung 2(x + 3) = 2x + 1 ist …", options: ["bestimmt", "unlösbar", "unbestimmt"], answer: 1, explain: "2x + 6 = 2x + 1 → 0x = −5: unlösbar." }
      ]
    }
  ],
  glossary: [
    { t: "Equazione (Gleichung)", d: "Gleichheit zwischen zwei Termen, die nur für einige Werte der Unbekannten erfüllt ist." },
    { t: "Identità (Identität)", d: "Gleichheit, die für jeden Wert der Buchstaben wahr ist." },
    { t: "Incognita (Unbekannte)", d: "Der Buchstabe, dessen Wert gesucht wird." },
    { t: "Membri (Seiten)", d: "Die beiden Terme links (erste Seite) und rechts (zweite Seite) vom Gleichheitszeichen." },
    { t: "Soluzione (Lösung / Wurzel)", d: "Der Wert der Unbekannten, der die Gleichung wahr macht." },
    { t: "Equazioni equivalenti (äquivalente Gleichungen)", d: "Gleichungen, die dieselben Lösungen haben." },
    { t: "Principi di equivalenza (Äquivalenzumformungen)", d: "Regeln, die eine Gleichung in eine äquivalente umformen." },
    { t: "Forma normale (Normalform)", d: "Die Form ax = b einer linearen Gleichung." },
    { t: "Verifica (Probe)", d: "Kontrolle der Lösung durch Einsetzen in die Gleichung." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche dieser Gleichheiten ist eine Identität?", options: ["x + 2 = 5", "3(x + 1) = 3x + 3", "2x = 0"], answer: 1, explain: "Sie ist für jedes x wahr, dank des Distributivgesetzes." },
      { type: "num", q: "Löse: 4x + 7 = 31", answer: 6, explain: "4x = 24 → x = 6." },
      { type: "num", q: "Löse: 2(x − 5) = x + 3", answer: 13, explain: "2x − 10 = x + 3 → x = 13." },
      { type: "num", q: "Löse: −3x + 2 = 14", answer: -4, explain: "−3x = 12 → x = −4." },
      { type: "num", q: "Löse: x/4 − 1 = x/6", answer: 12, explain: "Ich multipliziere mit 12: 3x − 12 = 2x → x = 12." },
      { type: "tf", q: "Mit der ersten Umformung darf man von beiden Seiten dieselbe Zahl subtrahieren.", answer: true, explain: "Das ist genau die Aussage der ersten Umformung." },
      { type: "mc", q: "Eine Gleichung, die sich auf 0x = 0 zurückführen lässt, ist …", options: ["unlösbar", "bestimmt", "unbestimmt"], answer: 2, explain: "Jede Zahl erfüllt sie: unendlich viele Lösungen." },
      { type: "order", q: "Bringe die Schritte zum Lösen einer Gleichung in die richtige Reihenfolge.", items: ["Klammern auflösen", "Nenner beseitigen", "Glieder umstellen", "Auf die Form ax = b zusammenfassen", "Durch den Koeffizienten dividieren", "Probe machen"], explain: "Das ist die Standardmethode in 6 Schritten." },
      { type: "num", q: "Die Summe von drei aufeinanderfolgenden Zahlen ist 72. Welche ist die kleinste?", answer: 23, explain: "x + (x + 1) + (x + 2) = 72 → 3x + 3 = 72 → x = 23." },
      { type: "num", q: "Der Umfang eines Rechtecks beträgt 50 cm; die Grundseite ist 7 cm länger als die Höhe. Wie lang ist die Höhe?", answer: 9, unit: "cm", explain: "2(h + 7) + 2h = 50 → 4h + 14 = 50 → h = 9." },
      { type: "mc", q: "Um die Nenner in x/2 + x/5 = 7 zu beseitigen, multipliziert man alles mit …", options: ["7", "10", "2"], answer: 1, explain: "Das kgV von 2 und 5 ist 10." },
      { type: "text", q: "Wer erfand 1557 das Zeichen „=“?", answer: ["robert recorde", "recorde"], explain: "Der Waliser Robert Recorde." }
    ],
    gen: [["equation", 3]]
  }
});
