TOPIC('de', {
  id: "p3-tec-coding-blocchi",
  title: "Mit Blöcken programmieren",
  intro: "Ein Computer ist blitzschnell, aber allein kann er gar nichts: Jemand muss ihm sagen, <b>was er tun soll</b>, Schritt für Schritt. Das nennt man <b>programmieren</b> (Coding). Heute lernen wir, das mit <b>bunten Blöcken</b> zu tun, wie in Scratch, und entdecken zwei grundlegende Ideen: die <b>Sequenz</b> und die <b>Schleife</b>. 🧩🤖",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Schritt 1: Was ist ein Algorithmus?",
      html: `<p>Ein <b>Algorithmus</b> ist eine Liste klarer <b>Anweisungen</b> in genauer Reihenfolge, um ein Problem zu lösen oder etwas zu tun.</p>
<p>Auch du benutzt jeden Tag Algorithmen! Zum Beispiel beim Zähneputzen:</p>
<ol><li>Nimm die Zahnbürste;</li><li>gib Zahnpasta darauf;</li><li>putze die Zähne;</li><li>spüle den Mund aus;</li><li>wasche die Zahnbürste ab.</li></ol>
<p>Ein <b>Programm</b> ist ein Algorithmus, der in einer Sprache geschrieben ist, die der Computer versteht: einer <b>Programmiersprache</b>.</p>
<p>⚠️ Der Computer führt <b>genau, aber ohne Fantasie</b> aus: Er macht genau das, was du schreibst, nicht mehr und nicht weniger. Wenn du einen Schritt vergisst, errät er ihn nicht!</p>`
    },
    {
      type: "text", title: "Schritt 2: die Blöcke",
      html: `<p>In <b>Blocksprachen</b> (wie <b>Scratch</b> oder <b>Code.org</b>) muss man nichts schreiben: Die Anweisungen sind <b>bunte Bausteine</b>, die man wie Puzzleteile zusammensteckt. 🧩</p>
<ul>
<li>🟨 <b>Ereignisse</b> (gelb): <i>Wenn die grüne Flagge angeklickt wird</i> → das Programm startet.</li>
<li>🟦 <b>Bewegung</b> (blau): <i>gehe 10er-Schritt</i>, <i>drehe dich um 90 Grad</i>.</li>
<li>🟪 <b>Aussehen</b> (violett): <i>sage „Hallo!“</i>, <i>wechsle das Kostüm</i>.</li>
<li>🟧 <b>Steuerung</b> (orange): <i>wiederhole 4-mal</i>, <i>warte 1 Sekunde</i>.</li>
</ul>
<p>Wenn zwei Blöcke nicht zusammenpassen, <b>rasten sie nicht ein</b>: So kann man beim „Schreiben“ kaum Fehler machen.</p>`
    },
    {
      type: "svg", title: "Ein Blockprogramm: das Quadrat",
      caption: "Links: die lange Sequenz (8 Blöcke). Rechts: dasselbe Programm mit einer Schleife „wiederhole 4-mal“ (3 Blöcke). Das Ergebnis ist dasselbe Quadrat!",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#f8fafc"/>
<text x="110" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SEQUENZ</text>
<rect x="20" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="30" y="51" font-size="14" fill="#422006">wenn 🏁 angeklickt</text>
<rect x="20" y="60" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="77" font-size="14" fill="#ffffff">gehe 100 Schritte</text>
<rect x="20" y="86" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="103" font-size="14" fill="#ffffff">drehe ↻ um 90 Grad</text>
<rect x="20" y="112" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="129" font-size="14" fill="#ffffff">gehe 100 Schritte</text>
<rect x="20" y="138" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="155" font-size="14" fill="#ffffff">drehe ↻ um 90 Grad</text>
<rect x="20" y="164" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="181" font-size="14" fill="#ffffff">gehe 100 Schritte</text>
<rect x="20" y="190" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="207" font-size="14" fill="#ffffff">drehe ↻ um 90 Grad</text>
<rect x="20" y="216" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="233" font-size="14" fill="#ffffff">gehe 100 Schritte</text>
<rect x="20" y="242" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="259" font-size="14" fill="#ffffff">drehe ↻ um 90 Grad</text>
<text x="315" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SCHLEIFE</text>
<rect x="225" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="235" y="51" font-size="14" fill="#422006">wenn 🏁 angeklickt</text>
<path d="M225,60 L405,60 L405,86 L250,86 L250,140 L405,140 L405,162 L225,162 Z" fill="#f97316"/>
<text x="235" y="78" font-size="14" fill="#ffffff" font-weight="bold">wiederhole 4-mal</text>
<rect x="250" y="88" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="105" font-size="14" fill="#ffffff">gehe 100 Schritte</text>
<rect x="250" y="114" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="131" font-size="14" fill="#ffffff">drehe ↻ um 90 Grad</text>
<text x="315" y="200" font-size="15" text-anchor="middle" fill="#15803d" font-weight="bold">3 Blöcke statt 8!</text>
<text x="510" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">ERGEBNIS</text>
<rect x="450" y="60" width="120" height="120" fill="none" stroke="#7c3aed" stroke-width="5"/>
<text x="510" y="58" font-size="22" text-anchor="middle">🐱</text>
<text x="510" y="215" font-size="15" text-anchor="middle" fill="#0f172a">4 gleiche Seiten</text>
<text x="510" y="235" font-size="15" text-anchor="middle" fill="#0f172a">4 Winkel von 90°</text>
</svg>`
    },
    {
      type: "remember", title: "Sequenz und Schleife",
      html: `<ul>
<li><b>Sequenz</b>: Die Anweisungen werden <b>nacheinander</b> ausgeführt, von oben nach unten. Die <b>Reihenfolge</b> zählt! Erst die Socken, dann die Schuhe. 🧦👟</li>
<li><b>Schleife</b> (Loop): ein Block, der die Anweisungen, die er enthält, eine bestimmte Anzahl von Malen <b>wiederholen</b> lässt (<i>wiederhole 4-mal</i>) oder unendlich oft (<i>wiederhole fortlaufend</i>).</li>
</ul>
<p>Wenn du Anweisungen siehst, die sich gleich wiederholen, frag dich: <b>Kann ich eine Schleife benutzen?</b> Das Programm wird kürzer, leichter zu lesen und leichter zu verbessern.</p>`
    },
    {
      type: "example", title: "Praxisbeispiel: der Roboter im Labyrinth",
      html: `<p>Ein Roboter 🤖 soll zum Apfel 🍎 gelangen. Er kennt nur drei Anweisungen: <b>⬆️ ein Feld vorwärts</b>, <b>↪️ nach links drehen</b>, <b>↩️ nach rechts drehen</b>.</p>
<p>Der Apfel ist 3 Felder geradeaus, dann 2 Felder nach rechts. Das Programm lautet:</p>
<p>⬆️ ⬆️ ⬆️ ↩️ ⬆️ ⬆️</p>
<p>Mit Schleifen wird daraus: <b>wiederhole 3-mal</b> [⬆️] → ↩️ → <b>wiederhole 2-mal</b> [⬆️].</p>
<p>Wenn du aus Versehen ↪️ statt ↩️ schreibst, fährt der Roboter nach links und stößt gegen die Mauer: Du hast einen <b>Bug</b> (Fehler) gefunden! Ihn zu korrigieren nennt man <b>Debuggen</b>. 🐞🔧</p>`
    },
    {
      type: "svg", title: "Der Weg des Roboters",
      caption: "Folge den Pfeilen: 3 Felder geradeaus, eine Kurve nach rechts, 2 Felder geradeaus. Da ist der Apfel!",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ecfeff"/>
<g stroke="#94a3b8" stroke-width="2" fill="#ffffff">
<rect x="150" y="20" width="60" height="60"/><rect x="210" y="20" width="60" height="60"/><rect x="270" y="20" width="60" height="60"/><rect x="330" y="20" width="60" height="60"/>
<rect x="150" y="80" width="60" height="60"/><rect x="210" y="80" width="60" height="60"/><rect x="270" y="80" width="60" height="60"/><rect x="330" y="80" width="60" height="60"/>
<rect x="150" y="140" width="60" height="60"/><rect x="210" y="140" width="60" height="60"/><rect x="270" y="140" width="60" height="60"/><rect x="330" y="140" width="60" height="60"/>
<rect x="150" y="200" width="60" height="60"/><rect x="210" y="200" width="60" height="60"/><rect x="270" y="200" width="60" height="60"/><rect x="330" y="200" width="60" height="60"/>
</g>
<rect x="210" y="80" width="60" height="60" fill="#475569"/>
<rect x="270" y="140" width="60" height="60" fill="#475569"/>
<path d="M180,230 L180,50 L300,50" stroke="#16a34a" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="180" y="245" font-size="34" text-anchor="middle">🤖</text>
<text x="300" y="62" font-size="34" text-anchor="middle">🍎</text>
<text x="460" y="70" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️ ⬆️</text>
<text x="460" y="110" font-size="18" font-weight="bold" fill="#0f172a">↩️ rechts</text>
<text x="460" y="150" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️</text>
<text x="460" y="200" font-size="15" fill="#475569">grau = Mauer</text>
</svg>`
    },
    {
      type: "quiz", title: "Mini-Quiz: Sequenzen",
      questions: [
        { type: "mc", q: "Eine Liste klarer und geordneter Anweisungen zur Lösung eines Problems ist …", options: ["ein Algorithmus", "eine Zeichnung", "ein Computer"], answer: 0, explain: "Algorithmus = Anweisungen in Reihenfolge." },
        { type: "order", q: "Bring die Sequenz zum Anziehen der Füße in die richtige Reihenfolge.", items: ["Socken anziehen", "Schuhe anziehen", "Schnürsenkel binden"], explain: "In einer Sequenz zählt die Reihenfolge: erst die Socken, dann die Schuhe!" },
        { type: "tf", q: "Der Computer errät von allein die Anweisungen, die wir vergessen haben.", answer: false, explain: "Der Computer führt nur aus, was geschrieben steht: Wenn ein Schritt fehlt, macht er ihn nicht." }
      ]
    },
    {
      type: "3d", title: "Eine Schleife ist wie eine Multiplikation",
      scene: "blocks",
      options: { mode: "array", a: 4, b: 3 },
      caption: "„Wiederhole 4-mal: lege 3 Würfel“ → 4 Reihen zu je 3 = 12 Würfel. Bewege die Regler und überlege: Wie oft wiederhole ich? Wie viele Würfel lege ich jedes Mal?"
    },
    {
      type: "example", title: "Praxisbeispiel: die Party der Scratch-Katze",
      html: `<p>Du willst, dass die Katze 🐱 tanzt. Hier ist das Programm:</p>
<ul>
<li>🟨 wenn die grüne Flagge angeklickt wird</li>
<li>🟧 <b>wiederhole 10-mal</b>:
<ul><li>🟦 gehe 10er-Schritt</li><li>🟪 wechsle das Kostüm</li><li>🟧 warte 0,2 Sekunden</li><li>🟦 gehe -10 Schritte (zurück)</li></ul></li>
<li>🟪 sage „Was für eine tolle Party!“ für 2 Sekunden</li>
</ul>
<p>Wie oft wechselt die Katze das Kostüm? <b>10</b>-mal, einmal bei jedem Durchlauf der Schleife. Wie viele Schritte macht sie insgesamt vorwärts? 10 × 10 = <b>100</b>.</p>`
    },
    {
      type: "widget", title: "Spiel: Sequenz oder Schleife?",
      widget: "classify",
      caption: "Sind diese Tätigkeiten eine Folge verschiedener Schritte oder derselbe Schritt, der viele Male wiederholt wird (Schleife)?",
      options: {
        groups: ["➡️ Sequenz (verschiedene Schritte)", "🔁 Schleife (wiederholen)"],
        items: [["Ein Brötchen belegen", 0], ["Zähneputzen", 0], ["Den Computer einschalten und Scratch öffnen", 0], ["Sich zum Ausgehen anziehen", 0], ["20-mal Seil springen", 1], ["Die Uhrzeiger, die sich drehen", 1], ["15 Stufen hinaufsteigen", 1], ["Der Refrain eines Liedes", 1], ["Die Jahreszeiten jedes Jahr", 1]]
      }
    },
    {
      type: "widget", title: "Ordne dem Block zu, was er tut",
      widget: "match",
      options: { pairs: [["wenn 🏁 angeklickt", "startet das Programm"], ["gehe 10 Schritte", "bewegt die Figur"], ["drehe dich um 90°", "dreht die Figur"], ["wiederhole 4-mal", "wiederholt die Blöcke, die er enthält"], ["wiederhole fortlaufend", "wiederholt, ohne je anzuhalten"], ["warte 1 Sekunde", "macht eine Pause"]] }
    },
    {
      type: "curiosity", title: "Wusstest du, dass … die erste Programmiererin eine Frau aus dem 19. Jahrhundert war?",
      html: `<p>Im Jahr <b>1843</b> schrieb die englische Mathematikerin <b>Ada Lovelace</b> Anweisungen, mit denen die von Charles Babbage erfundene „Analytical Engine“ besondere Zahlen berechnen sollte. Die Maschine wurde nie gebaut, aber diese Anweisungen gelten als das <b>erste Programm</b> der Geschichte! Ada hatte schon die Idee der <b>Schleife</b> verstanden: dieselben Rechenschritte mehrmals zu wiederholen.</p>
<p>Noch früher, im Jahr <b>1804</b>, erfand der Franzose Joseph-Marie Jacquard einen Webstuhl, der Muster nach <b>Lochkarten</b> webte: eine Art Programm für Stoffe!</p>`
    },
    {
      type: "curiosity", title: "Wusstest du, dass … der erste „Bug“ ein echtes Insekt war?",
      html: `<p>Auf Englisch heißt <b>bug</b> „Käfer, Insekt“. Im Jahr <b>1947</b> blieb an der Universität Harvard ein Riesencomputer namens Mark II stehen. Die Techniker öffneten die Maschine und fanden … eine <b>Motte</b>, die zwischen den Kontakten eingeklemmt war! 🦋 Sie klebten sie mit Klebeband ins Logbuch und schrieben dazu „erster tatsächlich gefundener Bug“. Das Blatt gibt es noch heute, in einem Museum in Washington.</p>
<p>Die Ingenieure nannten Störungen schon vorher „Bugs“, aber seitdem ist die Geschichte von der Motte weltberühmt geworden, oft erzählt von der Programmiererin <b>Grace Hopper</b>.</p>`
    },
    {
      type: "alternatives", title: "Andere Wege, es zu verstehen",
      intro: "Wenn dich die Blöcke auf dem Bildschirm nicht überzeugen, probiere eine andere Art zu programmieren.",
      tabs: [
        {
          label: "🃏 Coding unplugged (ohne Computer)",
          html: `<p>In Italien entstand <b>CodyRoby</b>, ein Kartenspiel, das an der Universität Urbino erfunden wurde, um Coding <b>ohne Computer</b> zu lernen. Die Karten haben drei Pfeile: <b>vorwärts</b>, <b>nach links drehen</b>, <b>nach rechts drehen</b>.</p>
<ol><li>Zeichne mit Kreide oder Klebeband ein Schachbrett auf den Boden.</li>
<li>Ein Kind spielt den <b>Roboter</b>, ein anderes den <b>Programmierer</b>.</li>
<li>Der Programmierer legt die Karten in eine Reihe; der Roboter führt sie <b>wortwörtlich</b> aus, ohne nachzudenken.</li>
<li>Wenn der Roboter das Ziel nicht erreicht, sucht gemeinsam den Bug!</li></ol>`
        },
        {
          label: "🧁 Das Rezept",
          html: `<p>Ein <b>Rezept</b> ist ein Algorithmus für die Küche:</p>
<ul><li><b>Sequenz</b>: Eier aufschlagen → Zucker hinzufügen → verrühren → Mehl hinzufügen → in den Ofen schieben.</li>
<li><b>Schleife</b>: „<i>rühre, bis</i> der Teig glatt ist“, „<i>wiederhole für jedes</i> Förmchen: gib einen Löffel Teig hinein“.</li></ul>
<p>Wenn du die Reihenfolge vertauschst (in den Ofen, bevor du verrührt hast 😱), wird es eine Katastrophe: genau wie bei einem Programm!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="200" fill="#fff7ed"/>
<text x="60" y="80" font-size="44" text-anchor="middle">🥚</text>
<text x="60" y="125" font-size="15" text-anchor="middle" fill="#0f172a">1. Eier</text>
<text x="120" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="180" y="80" font-size="44" text-anchor="middle">🍚</text>
<text x="180" y="125" font-size="15" text-anchor="middle" fill="#0f172a">2. Zucker</text>
<text x="240" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="300" y="80" font-size="44" text-anchor="middle">🥣</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#0f172a">3. verrühren</text>
<path d="M270,140 Q300,180 330,140" stroke="#7c3aed" stroke-width="4" fill="none"/>
<text x="300" y="190" font-size="15" text-anchor="middle" fill="#7c3aed" font-weight="bold">🔁 bis es glatt ist</text>
<text x="360" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="420" y="80" font-size="44" text-anchor="middle">🌾</text>
<text x="420" y="125" font-size="15" text-anchor="middle" fill="#0f172a">4. Mehl</text>
<text x="480" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="540" y="80" font-size="44" text-anchor="middle">🧁</text>
<text x="540" y="125" font-size="15" text-anchor="middle" fill="#0f172a">5. backen</text>
</svg>`
        },
        {
          label: "🎵 Der Refrain",
          html: `<p>Lieder sind voller <b>Schleifen</b>! In Notenbüchern benutzt man, statt alles neu zu schreiben, das <b>Wiederholungszeichen</b> 𝄆 … 𝄇: Es bedeutet „<b>wiederhole</b> diesen Teil“.</p>
<p>Das ist genau wie der Block „wiederhole 2-mal“. Musiker benutzen Schleifen seit Jahrhunderten, lange vor den Computern! Probiere es mit Klatschen: <b>wiederhole 4-mal</b> [👏 👏 🦶].</p>`
        },
        {
          label: "🧊 Schleifen mit 3D-Würfeln",
          html: `<p>Jeder Durchlauf der Schleife fügt eine Reihe Würfel hinzu. Ändere die Zahlen: Wie viele Würfel hast du bei <b>5 Durchläufen zu je 2</b>? Und bei 2 Durchläufen zu je 5? Das Ergebnis ist dasselbe (10), aber das Programm ist anders!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 5, b: 2 }
        }
      ]
    },
    {
      type: "conceptMap", title: "Landkarte: die Ideen des Codings",
      nodes: [
        { id: "problema", label: "Ein Problem", x: 50, y: 6, color: "#ef4444", html: "Etwas, das getan oder gelöst werden soll: ein Quadrat zeichnen, den Roboter zum Apfel bringen.", why: "Programmieren beginnt immer mit einer Frage: Was will ich erreichen? Dann teilt man das große Problem in kleinere Stücke – das ist der Kern des „algorithmischen Denkens“." },
        { id: "algoritmo", label: "Algorithmus", x: 50, y: 28, color: "#f97316", html: "Klare, endliche Anweisungen in Reihenfolge.", why: "Das Wort kommt vom Namen des persischen Mathematikers <b>al-Chwarizmi</b> (9. Jahrhundert), der in Bagdad ein Buch darüber schrieb, wie man Schritt für Schritt rechnet. Auf Latein wurde sein Name zu „Algorismus“." },
        { id: "sequenza", label: "Sequenz", x: 18, y: 52, color: "#3b82f6", html: "Anweisungen, die nacheinander ausgeführt werden.", why: "Der Computer hat einen Haupt-„Ausführer“, der eine Anweisung nach der anderen liest, von oben nach unten: Deshalb ist die Reihenfolge entscheidend." },
        { id: "ciclo", label: "Schleife (wiederhole)", x: 50, y: 52, color: "#a855f7", html: "Anweisungen mehrmals wiederholen.", why: "Computer sind unglaublich gut darin, zu wiederholen, ohne müde zu werden oder Fehler zu machen. Ada Lovelace beschrieb schon 1843, wie man die Analytical Engine eine Gruppe von Rechenschritten wiederholen lässt." },
        { id: "evento", label: "Ereignis", x: 82, y: 52, color: "#eab308", html: "Das, was das Programm startet (Klick auf die Flagge, eine Taste).", why: "Moderne Programme „warten“, dass etwas geschieht: ein Klick, ein Tippen auf den Bildschirm. Deshalb beginnt in Scratch jedes Programm mit einem gelben Block in Hutform." },
        { id: "blocchi", label: "Blocksprache", x: 25, y: 78, color: "#0ea5e9", html: "Anweisungen wie Bausteine, die zusammenrasten.", why: "Scratch wurde am MIT in Boston von der Gruppe um Mitchel Resnick entwickelt und 2007 veröffentlicht. Es ist von der Sprache Logo von Seymour Papert (1960er-Jahre) inspiriert, der mit der Schildkröte, die zeichnet. Die Blöcke vermeiden Schreibfehler." },
        { id: "bug", label: "Bug und Debuggen", x: 75, y: 78, color: "#16a34a", html: "Der Fehler und seine Korrektur.", why: "Fehler zu machen ist normal, selbst für erfahrene Programmierer! Man testet das Programm, schaut, wo das Ergebnis vom erwarteten abweicht, und korrigiert: Genau so lernt man." },
        { id: "computer", label: "Der Computer führt aus", x: 50, y: 95, color: "#475569", html: "Er führt die Anweisungen wortwörtlich aus, blitzschnell.", why: "Ein moderner Computer führt Milliarden von Anweisungen pro Sekunde aus, aber nur die, die wir ihm geben: Er hat keine Absichten und keine Fantasie. Die Intelligenz des Programms kommt von dem, der es schreibt." }
      ],
      edges: [
        ["problema", "algoritmo", "löst man mit"], ["algoritmo", "sequenza", "hat"], ["algoritmo", "ciclo", "hat"], ["algoritmo", "evento", "startet mit"],
        ["sequenza", "blocchi", "schreibt man mit"], ["ciclo", "blocchi", "schreibt man mit"], ["blocchi", "computer", "steuert"], ["computer", "bug", "wenn ich mich irre"], ["bug", "algoritmo", "korrigiere ich"]
      ]
    },
    {
      type: "quiz", title: "Mini-Quiz: die Schleifen",
      questions: [
        { type: "num", q: "„Wiederhole 5-mal: springe 2-mal.“ Wie viele Sprünge machst du insgesamt?", answer: 10, tol: 0, explain: "5 Durchläufe × 2 Sprünge = 10 Sprünge." },
        { type: "mc", q: "Um mit einer Schleife ein Quadrat zu zeichnen, schreibe ich …", options: ["wiederhole 4-mal: vorwärts, drehe um 90°", "wiederhole 3-mal: vorwärts, drehe um 90°", "wiederhole 4-mal: vorwärts"], answer: 0, explain: "Das Quadrat hat 4 Seiten und 4 rechte Winkel (90°)." },
        { type: "tf", q: "Ein Fehler in einem Programm heißt Bug.", answer: true, explain: "Bug = Fehler; Debuggen = ihn korrigieren." }
      ]
    }
  ],
  glossary: [
    { t: "Coding / Programmieren", d: "Anweisungen schreiben, die ein Computer oder ein Roboter ausführen kann." },
    { t: "Algorithmus", d: "Liste klarer und geordneter Anweisungen zur Lösung eines Problems." },
    { t: "Anweisung", d: "Ein einzelner Befehl: „gehe 10 Schritte“, „drehe dich nach rechts“." },
    { t: "Programm", d: "Ein Algorithmus, der in einer Sprache geschrieben ist, die der Computer versteht." },
    { t: "Sequenz", d: "Anweisungen, die nacheinander in Reihenfolge ausgeführt werden." },
    { t: "Schleife (Loop)", d: "Block, der die Anweisungen, die er enthält, wiederholen lässt." },
    { t: "Ereignis", d: "Das, was das Programm startet, wie der Klick auf die grüne Flagge." },
    { t: "Bug", d: "Fehler in einem Programm." },
    { t: "Debuggen", d: "Fehler finden und korrigieren." },
    { t: "Scratch", d: "Blockbasierte Programmiersprache, 2007 am MIT entwickelt." },
    { t: "Unplugged", d: "Coding-Aktivitäten ohne Computer, mit Karten, Kreide oder dem eigenen Körper." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was ist ein Algorithmus?", options: ["Eine Liste geordneter Anweisungen zur Lösung eines Problems", "Eine Art Computer", "Ein Ballspiel"], answer: 0, explain: "Algorithmus = klare Anweisungen in Reihenfolge." },
      { type: "mc", q: "In einer Sequenz werden die Anweisungen ausgeführt …", options: ["alle zusammen", "nacheinander, in Reihenfolge", "in zufälliger Reihenfolge"], answer: 1, explain: "Nacheinander, von oben nach unten." },
      { type: "mc", q: "Wozu dient eine Schleife?", options: ["Um Anweisungen zu wiederholen", "Um den Computer auszuschalten", "Um die Blöcke umzufärben"], answer: 0, explain: "Die Schleife wiederholt die Blöcke, die sie enthält." },
      { type: "num", q: "„Wiederhole 3-mal: gehe 4 Schritte.“ Wie viele Schritte macht die Figur insgesamt?", answer: 12, tol: 0, unit: "Schritte", explain: "3 × 4 = 12 Schritte." },
      { type: "num", q: "Um ein Dreieck mit gleichen Seiten zu zeichnen, benutze ich „wiederhole … mal: vorwärts, drehe“. Wie oft?", answer: 3, tol: 0, explain: "Das Dreieck hat 3 Seiten: wiederhole 3-mal." },
      { type: "text", q: "Wie nennt man einen Fehler in einem Programm?", answer: ["bug", "ein bug", "der bug", "fehler", "ein fehler"], explain: "Bug (auf Deutsch auch „Fehler“)." },
      { type: "tf", q: "In Blocksprachen rasten die Anweisungen wie Puzzleteile ein.", answer: true, explain: "Blöcke, die nicht zusammenpassen, rasten nicht ein." },
      { type: "tf", q: "In einem Programm ist die Reihenfolge der Anweisungen nicht wichtig.", answer: false, explain: "Die Reihenfolge ist entscheidend: erst die Socken, dann die Schuhe!" },
      { type: "order", q: "Bring das Programm in die richtige Reihenfolge, damit die Katze nach dem Klick auf die Flagge „Hallo“ sagt.", items: ["wenn die grüne Flagge angeklickt wird", "gehe 10 Schritte", "sage „Hallo!“ für 2 Sekunden"], explain: "Der Ereignisblock (Flagge) kommt immer ganz nach oben." },
      { type: "mc", q: "Welcher Block startet in Scratch das Programm?", options: ["wiederhole 10-mal", "wenn die grüne Flagge angeklickt wird", "drehe dich um 90 Grad"], answer: 1, explain: "Es ist ein Ereignisblock, gelb und in Hutform." },
      { type: "mc", q: "Wer schrieb 1843 das, was als erstes Programm der Geschichte gilt?", options: ["Ada Lovelace", "Leonardo da Vinci", "Galileo Galilei"], answer: 0, explain: "Ada Lovelace, für die Analytical Engine von Babbage." },
      { type: "mc", q: "Der Roboter soll 4 Felder vorwärts gehen. Welches ist das kürzeste Programm?", options: ["vorwärts, vorwärts, vorwärts, vorwärts", "wiederhole 4-mal: vorwärts", "wiederhole 2-mal: vorwärts"], answer: 1, explain: "Die Schleife „wiederhole 4-mal“ leistet dieselbe Arbeit mit weniger Blöcken." }
    ]
  }
});
