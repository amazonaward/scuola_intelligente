TOPIC('de', {
  id: "p5-sci-corpo-umano",
  title: "Der menschliche Körper",
  intro: "Dein Körper ist eine erstaunliche Maschine aus etwa <b>37 000 Milliarden Zellen</b>, die zusammenarbeiten. Wir entdecken, wie die <b>Zellen</b> die <b>Gewebe</b> bilden, die Gewebe die <b>Organe</b> und die Organe die <b>Organsysteme</b>: ein perfektes Team, das dich atmen, essen, rennen und denken lässt.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Vom Winzigen zum Großen: die Organisationsebenen",
      html: `<p>Der menschliche Körper ist wie eine große Stadt organisiert, in der jeder seine Aufgabe hat:</p>
<ol>
<li><b>Zelle</b>: der kleinste lebende Teil. Sie ist wie ein einzelner <b>Ziegelstein</b>. Man sieht sie nur mit dem Mikroskop.</li>
<li><b>Gewebe</b>: eine Gruppe <b>gleicher</b> Zellen, die dieselbe Arbeit machen, wie eine <b>Mauer</b> aus Ziegeln. Z. B. Muskelgewebe, Nervengewebe.</li>
<li><b>Organ</b>: mehrere verschiedene Gewebe, die für eine bestimmte Aufgabe zusammenarbeiten, wie ein <b>Zimmer</b>. Z. B. Herz, Magen, Lunge.</li>
<li><b>Organsystem</b>: mehrere Organe, die für eine große Funktion zusammenarbeiten, wie ein ganzes <b>Haus</b>. Z. B. das Verdauungssystem.</li>
<li><b>Organismus</b>: alle Organsysteme zusammen: <b>das bist du</b>!</li>
</ol>`
    },
    {
      type: "svg",
      title: "Zelle → Gewebe → Organ → Organsystem → Organismus",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fdf2f8"/>
<circle cx="50" cy="110" r="28" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<circle cx="50" cy="110" r="9" fill="#9d174d"/>
<g fill="#fbcfe8" stroke="#be185d" stroke-width="2">
<rect x="120" y="80" width="22" height="22"/><rect x="142" y="80" width="22" height="22"/><rect x="164" y="80" width="22" height="22"/>
<rect x="120" y="102" width="22" height="22"/><rect x="142" y="102" width="22" height="22"/><rect x="164" y="102" width="22" height="22"/>
<rect x="120" y="124" width="22" height="22"/><rect x="142" y="124" width="22" height="22"/><rect x="164" y="124" width="22" height="22"/>
</g>
<path d="M270 85 C250 60 225 80 240 105 L270 140 L300 105 C315 80 290 60 270 85 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>
<g stroke="#7f1d1d" stroke-width="5" fill="none">
<path d="M370 55 L370 165"/><path d="M370 80 C340 90 340 130 360 150"/><path d="M370 80 C400 90 400 130 380 150"/>
</g>
<path d="M370 95 C355 85 345 98 355 108 L370 122 L385 108 C395 98 385 85 370 95 Z" fill="#ef4444"/>
<circle cx="510" cy="55" r="20" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<rect x="490" y="78" width="40" height="70" rx="12" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<line x1="495" y1="148" x2="490" y2="190" stroke="#1e3a8a" stroke-width="10"/><line x1="525" y1="148" x2="530" y2="190" stroke="#1e3a8a" stroke-width="10"/>
<g fill="#be185d" font-size="26"><text x="88" y="120">→</text><text x="198" y="120">→</text><text x="312" y="120">→</text><text x="420" y="120">→</text></g>
<g font-size="17" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="50" y="215">Zelle</text><text x="153" y="215">Gewebe</text><text x="270" y="215">Organ</text><text x="370" y="215">Organsystem</text><text x="510" y="215">Organismus</text>
</g>
<g font-size="14" text-anchor="middle" fill="#475569">
<text x="50" y="238">Muskel</text><text x="153" y="238">Muskel</text><text x="270" y="238">Herz</text><text x="370" y="238">Kreislauf</text><text x="510" y="238">du!</text>
</g>
</svg>`,
      caption: "Jede Ebene entsteht aus dem Zusammenschluss vieler Elemente der vorherigen Ebene."
    },
    {
      type: "text",
      title: "Die Zelle, der Baustein des Lebens",
      html: `<p>Jede menschliche Zelle hat drei Hauptteile:</p>
<ul>
<li>die <b>Zellmembran</b>: eine hauchdünne „Haut“, die sie umhüllt und entscheidet, was hinein- und hinausgeht;</li>
<li>das <b>Zytoplasma</b>: eine gelartige Substanz, in der unzählige Reaktionen ablaufen;</li>
<li>der <b>Zellkern</b>: die „Kommandozentrale“, die die <b>DNA</b> enthält, die Anleitung, wie die Zelle funktioniert und wie neue gebaut werden.</li>
</ul>
<p>Es gibt mehr als 200 Zelltypen mit verschiedenen Formen, die zu ihrer Arbeit passen: Die <b>roten Blutkörperchen</b> sind Scheibchen, die Sauerstoff transportieren, die <b>Nervenzellen</b> haben lange „Fäden“, um Botschaften weiterzugeben, die <b>Muskelzellen</b> sind lang gestreckt und ziehen sich zusammen, damit wir uns bewegen können.</p>`
    },
    {
      type: "3d",
      title: "Im Inneren einer tierischen Zelle",
      scene: "layers",
      options: { layers: [ { r: 1, color: "#f9a8d4", label: "Zellmembran" }, { r: 0.93, color: "#fce7f3", label: "Zytoplasma" }, { r: 0.38, color: "#a855f7", label: "Zellkern" }, { r: 0.15, color: "#6b21a8", label: "Kernkörperchen" } ] },
      caption: "Eine angeschnittene Zelle (vereinfachtes Modell). Drehe sie, um die Schichten zu sehen, von der Membran bis zum Zellkern."
    },
    {
      type: "text",
      title: "Die vier Gewebearten",
      html: `<table>
<tr><th>Gewebe</th><th>Was es tut</th><th>Wo es vorkommt</th></tr>
<tr><td>🛡️ <b>Epithelgewebe</b></td><td>bedeckt und schützt</td><td>Haut, Innenseite von Mund und Magen</td></tr>
<tr><td>💪 <b>Muskelgewebe</b></td><td>zieht sich zusammen und erzeugt Bewegung</td><td>Muskeln, Herz, Darmwände</td></tr>
<tr><td>⚡ <b>Nervengewebe</b></td><td>empfängt und leitet Botschaften weiter</td><td>Gehirn, Rückenmark, Nerven</td></tr>
<tr><td>🦴 <b>Bindegewebe</b></td><td>stützt, verbindet, transportiert</td><td>Knochen, Knorpel, Fett, <b>Blut</b></td></tr>
</table>
<p>Ja: Auch das <b>Blut</b> ist ein Gewebe (Bindegewebe), obwohl es flüssig ist!</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Zellen und Gewebe",
      questions: [
        { type: "order", q: "Bringe in die Reihenfolge vom kleinsten zum größten.", items: ["Zelle", "Gewebe", "Organ", "Organsystem", "Organismus"], explain: "Die Zellen bilden die Gewebe, die Gewebe die Organe, die Organe die Organsysteme, die Organsysteme den Organismus." },
        { type: "mc", q: "Welcher Teil der Zelle enthält die DNA?", options: ["Die Membran", "Der Zellkern", "Das Zytoplasma"], answer: 1, explain: "Der Zellkern ist die Kommandozentrale mit der DNA." },
        { type: "tf", q: "Das Blut ist ein Gewebe.", answer: true, explain: "Es ist ein flüssiges Bindegewebe." }
      ]
    },
    {
      type: "text",
      title: "Organsysteme: das große Team",
      html: `<p>Ein <b>Organsystem</b> ist eine Gruppe <b>verschiedener</b> Organe, die zusammenarbeiten. Manchmal spricht man auch von einem <b>System</b>, vor allem bei Organen, die überwiegend aus <b>demselben Gewebe</b> bestehen (z. B. Nervensystem, Muskelsystem).</p>
<table>
<tr><th>Organsystem</th><th>Wichtigste Organe</th><th>Funktion</th></tr>
<tr><td>🍝 <b>Verdauungssystem</b></td><td>Mund, Speiseröhre, Magen, Darm, Leber</td><td>verwandelt die Nahrung in nützliche Stoffe</td></tr>
<tr><td>🫁 <b>Atmungssystem</b></td><td>Nase, Luftröhre, Bronchien, Lunge</td><td>nimmt Sauerstoff auf, gibt Kohlendioxid ab</td></tr>
<tr><td>❤️ <b>Kreislaufsystem</b></td><td>Herz, Arterien, Venen, Kapillaren, Blut</td><td>transportiert Sauerstoff und Nährstoffe zu allen Zellen</td></tr>
<tr><td>🚽 <b>Ausscheidungssystem</b></td><td>Nieren, Blase</td><td>filtert das Blut und scheidet Abfallstoffe aus (Urin)</td></tr>
<tr><td>🧠 <b>Nervensystem</b></td><td>Gehirn, Rückenmark, Nerven</td><td>steuert und koordiniert den ganzen Körper</td></tr>
<tr><td>🦴 <b>Skelettsystem</b></td><td>206 Knochen</td><td>stützt und schützt</td></tr>
<tr><td>💪 <b>Muskelsystem</b></td><td>mehr als 600 Muskeln</td><td>ermöglicht die Bewegungen</td></tr>
<tr><td>👶 <b>Fortpflanzungssystem</b></td><td>unterschiedliche Organe bei Jungen und Mädchen</td><td>ermöglicht die Geburt neuer Lebewesen</td></tr>
</table>
<p>Das <b>Immunsystem</b> (weiße Blutkörperchen, Lymphknoten …) schützt uns vor Viren und Bakterien.</p>`
    },
    {
      type: "widget",
      title: "Die Organe des Körpers",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="420" fill="#f0f9ff"/>
<circle cx="300" cy="55" r="42" fill="#fde2c8" stroke="#9a3412" stroke-width="3"/>
<path d="M280 40 C280 22 320 22 320 40 C320 58 280 58 280 40 Z" fill="#f9a8d4" stroke="#9d174d" stroke-width="2"/>
<rect x="288" y="95" width="24" height="20" fill="#fde2c8" stroke="#9a3412" stroke-width="3"/>
<path d="M220 115 L380 115 L370 330 L230 330 Z" fill="#fde2c8" stroke="#9a3412" stroke-width="3"/>
<line x1="300" y1="100" x2="300" y2="140" stroke="#60a5fa" stroke-width="8"/>
<ellipse cx="265" cy="170" rx="30" ry="45" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<ellipse cx="335" cy="170" rx="30" ry="45" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<path d="M305 170 C295 158 282 168 290 180 L305 196 L320 180 C328 168 315 158 305 170 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
<path d="M245 222 C270 210 300 215 300 240 C285 250 255 248 245 222 Z" fill="#92400e"/>
<path d="M310 225 C340 215 360 230 345 255 C330 262 312 250 310 225 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
<path d="M255 265 C270 255 330 255 345 268 C350 285 330 300 300 300 C270 300 250 290 255 265 Z" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
<g stroke="#9a3412" stroke-width="2" fill="none"><path d="M265 275 C285 268 315 268 335 278"/><path d="M265 288 C285 280 315 282 335 290"/></g>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Gehirn" },
          { x: 300, y: 120, label: "Luftröhre" },
          { x: 262, y: 160, label: "Lunge" },
          { x: 305, y: 180, label: "Herz" },
          { x: 268, y: 232, label: "Leber" },
          { x: 330, y: 240, label: "Magen" },
          { x: 300, y: 282, label: "Darm" }
        ]
      },
      caption: "Tippe auf jeden Punkt und wähle den Namen des Organs (vereinfachte Darstellung)."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Was passiert, wenn du rennst",
      html: `<p>Beim Laufen arbeiten alle Organsysteme zusammen:</p>
<ol>
<li>das <b>Nervensystem</b> (das Gehirn) schickt den Befehl „Lauf!“ an die Muskeln;</li>
<li>die <b>Muskeln</b> ziehen sich zusammen und bewegen die <b>Knochen</b> der Beine;</li>
<li>die Muskeln brauchen mehr Energie und Sauerstoff: Das <b>Atmungssystem</b> beschleunigt sich, und du atmest stärker;</li>
<li>das <b>Herz</b> schlägt schneller (von etwa 80 auf mehr als 150 Schläge pro Minute), um mehr Blut zu befördern;</li>
<li>die Haut produziert <b>Schweiß</b>, um dich zu kühlen (auch das ist eine Art, Wasser und Salze auszuscheiden).</li>
</ol>
<p>Kein Organsystem arbeitet allein: Es ist echte Teamarbeit!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Reise eines Käsebrötchens",
      html: `<p>Du isst ein Käsebrötchen. Hier ist seine Reise:</p>
<ul>
<li><b>Mund</b>: Die Zähne zerkauen es, der Speichel beginnt, die Stärke des Brotes zu verdauen.</li>
<li><b>Speiseröhre</b>: Ein etwa 25 cm langer Schlauch schiebt es hinunter bis zum Magen.</li>
<li><b>Magen</b>: Die Magensäfte verwandeln es in einen Brei (2–4 Stunden lang).</li>
<li><b>Dünndarm</b>: etwa 6–7 Meter lang! Hier gehen die Nährstoffe ins <b>Blut</b> über.</li>
<li>Das <b>Kreislaufsystem</b> bringt die Nährstoffe zu allen Zellen.</li>
<li><b>Dickdarm</b>: nimmt das Wasser auf; was nicht gebraucht wird, wird ausgeschieden.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Ordne das Organ seinem Organsystem zu",
      widget: "match",
      options: {
        pairs: [
          ["❤️ Herz", "Kreislaufsystem"],
          ["🫁 Lunge", "Atmungssystem"],
          ["🍽️ Magen", "Verdauungssystem"],
          ["🧠 Gehirn", "Nervensystem"],
          ["🫘 Nieren", "Ausscheidungssystem"],
          ["🦴 Oberschenkelknochen", "Skelettsystem"]
        ]
      },
      caption: "Verbinde jedes Organ mit dem Organsystem, zu dem es gehört."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Rekordzahlen",
      html: `<ul>
<li>Das <b>Herz</b> schlägt etwa <b>100 000-mal am Tag</b>, ohne je stehen zu bleiben.</li>
<li>Wenn du alle <b>Blutgefäße</b> eines Erwachsenen aneinanderreihen würdest, kämst du auf etwa <b>100 000 km</b>: zweieinhalbmal um die Erde!</li>
<li>Ein Neugeborenes hat etwa <b>300 Knochen</b>; beim Wachsen verwachsen einige, und ein Erwachsener hat <b>206</b>.</li>
<li>Der kleinste Knochen ist der <b>Steigbügel</b> im Ohr: Er misst etwa 3 mm.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Der Körper erneuert sich",
      html: `<p>Jede Minute verlierst du Zehntausende von Hautzellen (ein großer Teil des Hausstaubs ist … Haut!). Die <b>roten Blutkörperchen</b> leben etwa <b>120 Tage</b>, und das Knochenmark produziert etwa <b>2 Millionen pro Sekunde</b>, um sie zu ersetzen.</p>
<p>Die Nervenzellen des Gehirns dagegen halten fast ein ganzes Leben: Deshalb ist es so wichtig, den Kopf zu schützen, zum Beispiel mit dem Fahrradhelm! 🚲</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Gleiche <b>Zellen</b> → <b>Gewebe</b>; verschiedene Gewebe → <b>Organ</b>; Organe → <b>Organsystem</b>; alle zusammen → <b>Organismus</b>.</li>
<li>Die Zelle hat <b>Membran</b>, <b>Zytoplasma</b> und <b>Zellkern</b>.</li>
<li>4 Gewebe: <b>Epithel-, Muskel-, Nerven- und Bindegewebe</b>.</li>
<li>Die Organsysteme <b>arbeiten zusammen</b>: Keines funktioniert allein.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, den menschlichen Körper zu verstehen",
      intro: "Wenn dir die Organisationsebenen abstrakt vorkommen, probiere es mit einem Vergleich, mit den Händen oder mit dem 3D-Modell.",
      tabs: [
        {
          label: "🏙️ Der Körper als Stadt",
          html: `<p>Stell dir den Körper als große <b>Stadt</b> vor:</p>
<ul>
<li>die <b>Bürger</b> sind die Zellen;</li>
<li>die <b>Viertel</b> aus Menschen mit demselben Beruf sind die Gewebe;</li>
<li>die <b>Gebäude</b> (Krankenhaus, Kraftwerk, Rathaus) sind die Organe;</li>
<li>die <b>Dienste</b> der Stadt sind die Organsysteme: die Straßen und Lastwagen, die Waren bringen (Kreislauf), die Müllabfuhr (Ausscheidung), die Küche und die Märkte (Verdauung), die Telefonate und der Bürgermeister (Nerven), die Polizei (Immunsystem) …</li>
</ul>
<p>Wenn ein Dienst ausfällt, leidet die ganze Stadt!</p>`
        },
        {
          label: "🫀 Miss dein Herz",
          html: `<p>Mache ein Experiment mit deinem Körper:</p>
<ol>
<li>Lege zwei Finger auf das Handgelenk (auf der Daumenseite) oder an den Hals: Du spürst den <b>Herzschlag</b>;</li>
<li>zähle die Schläge <b>15 Sekunden</b> lang und multipliziere mit 4: Das ist deine Ruhefrequenz (bei einem 10-jährigen Kind etwa 70–110 pro Minute);</li>
<li>mache 30 Hampelmänner und miss noch einmal: Sie ist gestiegen!</li>
<li>warte 2 Minuten: Sie sinkt wieder.</li>
</ol>
<p>Du hast das Zusammenspiel von Muskeln, Herz und Lunge in Aktion gesehen.</p>`
        },
        {
          label: "⚛️ Noch kleiner: die Moleküle",
          html: `<p>Auch die Zellen bestehen aus noch kleineren Teilen: den <b>Molekülen</b>. Das häufigste im Körper ist das <b>Wasser</b> (H<sub>2</sub>O): etwa <b>60 %</b> des Gewichts eines Erwachsenen! Jedes Wassermolekül hat 1 Sauerstoffatom und 2 Wasserstoffatome. Drehe es.</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.75, y: 0.55, z: 0, r: 0.32, color: "#f8fafc", label: "H" }, { x: -0.75, y: 0.55, z: 0, r: 0.32, color: "#f8fafc", label: "H" } ], bonds: [ [0, 1], [0, 2] ] }
        },
        {
          label: "🧩 Matrjoschka",
          html: `<p>Denk an die russischen <b>Matrjoschkas</b>, die Püppchen, die ineinander stecken, nur andersherum:</p>
<p>🪆 der <b>Organismus</b> enthält die <b>Organsysteme</b>, die enthalten die <b>Organe</b>, die enthalten die <b>Gewebe</b>, die enthalten die <b>Zellen</b>, die enthalten den <b>Zellkern</b> mit der <b>DNA</b>.</p>
<p>Jedes Püppchen besteht aus vielen kleineren Püppchen!</p>`
        },
        {
          label: "🌍 Medizin in der Welt und in der Geschichte",
          html: `<ul>
<li>🇬🇷 Der griechische Arzt <b>Hippokrates</b> (5. Jahrhundert v. Chr.) sagte, dass Krankheiten natürliche Ursachen haben, keine magischen.</li>
<li>🇮🇹 In Padua veröffentlichte <b>Andrea Vesalius</b> im Jahr <b>1543</b> den ersten großen Atlas des menschlichen Körpers, gezeichnet nach Beobachtungen am echten Körper.</li>
<li>🇬🇧 <b>William Harvey</b> entdeckte <b>1628</b>, dass das Blut <b>kreist</b>, vom Herzen angetrieben.</li>
<li>🇮🇹 <b>Marcello Malpighi</b> sah 1661 als Erster die <b>Kapillaren</b> unter dem Mikroskop.</li>
<li>🇨🇳 Die traditionelle chinesische Medizin stellte sich den Körper von „Kanälen“ der Energie durchzogen vor: eine ganz andere Art, über den Körper nachzudenken.</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des menschlichen Körpers: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "cellula", label: "Zelle", x: 50, y: 6, color: "#ec4899", html: "Die kleinste lebende Einheit.", why: "Im Jahr <b>1665</b> betrachtete der Engländer <b>Robert Hooke</b> ein Stückchen Kork unter dem Mikroskop und sah viele leere „Zellen“: Er nannte sie <i>cells</i>. 1838–1839 erkannten <b>Schleiden und Schwann</b>, dass alle Lebewesen aus Zellen bestehen (Zelltheorie)." },
        { id: "nucleo", label: "Zellkern und DNA", x: 15, y: 20, color: "#a855f7", html: "Die Kommandozentrale der Zelle, mit den Anweisungen.", why: "Die DNA enthält die „Anleitung“, um den Körper zu bauen und funktionieren zu lassen. Ihre Form als Doppelhelix wurde <b>1953</b> von Watson und Crick entdeckt, auch dank der Röntgenbilder von <b>Rosalind Franklin</b>." },
        { id: "tessuto", label: "Gewebe", x: 50, y: 28, color: "#f97316", html: "Gruppe gleicher Zellen mit derselben Aufgabe.", why: "Die Zellen spezialisieren sich: Eine Gruppe, die nur eine Sache gut kann (sich zusammenziehen, Signale weitergeben), ist effizienter. Der Franzose <b>Xavier Bichat</b> (um 1800) beschrieb als Erster die Gewebe." },
        { id: "organo", label: "Organ", x: 50, y: 50, color: "#ef4444", html: "Mehrere Gewebe zusammen für eine Aufgabe: Herz, Magen, Lunge …", why: "Das Herz hat zum Beispiel Muskelgewebe zum Pumpen, Nervengewebe für den Rhythmus, Bindegewebe, um es zusammenzuhalten, und Epithelgewebe, um es zu bedecken: Alle werden für eine einzige Aufgabe gebraucht." },
        { id: "apparato", label: "Organsysteme", x: 50, y: 72, color: "#2563eb", html: "Gruppen von Organen, die eine große Funktion erfüllen.", why: "Komplexe Funktionen wie Ernährung brauchen mehrere Schritte: kauen, verdauen, aufnehmen, ausscheiden. Jedes Organ erledigt ein Stück der Arbeit, wie am Fließband." },
        { id: "organismo", label: "Organismus", x: 50, y: 94, color: "#16a34a", html: "Alle Organsysteme, die zusammenarbeiten: ein Mensch.", why: "Der Körper hält Temperatur, Wasser und Zucker stabil, weil die Organsysteme zusammenarbeiten. Dieses Gleichgewicht heißt <b>Homöostase</b>, ein Wort, das der amerikanische Physiologe Walter Cannon 1926 einführte." },
        { id: "nutr", label: "Ernährung", x: 85, y: 40, color: "#eab308", html: "Verdauungs- + Atmungs- + Kreislauf- + Ausscheidungssystem.", why: "Die Zellen brauchen Nahrung und Sauerstoff, um Energie zu erzeugen, und sie produzieren Abfall: Vier Organsysteme arbeiten zusammen, um sie zu versorgen und zu „reinigen“." },
        { id: "relazione", label: "Wahrnehmung und Bewegung", x: 85, y: 75, color: "#0ea5e9", html: "Nervensystem, Sinnesorgane, Skelett und Muskeln.", why: "Um zu leben, müssen wir die Umgebung wahrnehmen (Sinne), entscheiden (Gehirn) und uns bewegen (Muskeln und Knochen). Luigi <b>Galvani</b> entdeckte 1791 in Bologna, dass die Nerven elektrische Signale weiterleiten." },
        { id: "molecole", label: "Moleküle", x: 15, y: 45, color: "#64748b", html: "Die Zellen bestehen aus Molekülen: Wasser, Proteine, Zucker, Fette.", why: "Alle Materie besteht aus Atomen. Etwa 60 % des Körpers sind Wasser; Proteine bauen die Gewebe auf, Zucker und Fette liefern Energie: Deshalb braucht man eine abwechslungsreiche Ernährung." }
      ],
      edges: [
        ["molecole", "cellula", "bilden die"],
        ["cellula", "nucleo", "enthält den"],
        ["cellula", "tessuto", "gleiche bilden das"],
        ["tessuto", "organo", "verschiedene bilden das"],
        ["organo", "apparato", "zusammen bilden das"],
        ["apparato", "organismo", "alle zusammen"],
        ["apparato", "nutr", "Funktionen der"],
        ["apparato", "relazione", "Funktionen der"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Organe und Organsysteme",
      questions: [
        { type: "mc", q: "Welches Organsystem bringt Sauerstoff und Nährstoffe zu allen Zellen?", options: ["Verdauungssystem", "Kreislaufsystem", "Ausscheidungssystem"], answer: 1, explain: "Das Blut, vom Herzen angetrieben, transportiert Sauerstoff und Nährstoffe." },
        { type: "num", q: "Wie viele Knochen hat ein Erwachsener?", answer: 206, explain: "Ein Erwachsener hat 206 Knochen." },
        { type: "mc", q: "Die Nieren gehören zum …", options: ["Atmungssystem", "Ausscheidungssystem", "Nervensystem"], answer: 1, explain: "Sie filtern das Blut und scheiden die Abfallstoffe mit dem Urin aus." }
      ]
    }
  ],
  glossary: [
    { t: "Zelle", d: "Die kleinste lebende Einheit." },
    { t: "Zellkern", d: "Teil der Zelle, der die DNA enthält und sie steuert." },
    { t: "Gewebe", d: "Gruppe gleicher Zellen mit derselben Funktion." },
    { t: "Organ", d: "Struktur aus mehreren Geweben, die eine bestimmte Aufgabe erfüllt." },
    { t: "Organsystem (Apparat)", d: "Gruppe verschiedener Organe, die gemeinsam eine Funktion erfüllen." },
    { t: "System", d: "Gruppe von Organen, die überwiegend aus demselben Gewebe bestehen (z. B. Nervensystem)." },
    { t: "Organismus", d: "Lebewesen, das aus allen seinen Organsystemen besteht." },
    { t: "DNA", d: "Molekül, das die Erbanweisungen der Zelle enthält." },
    { t: "Homöostase", d: "Fähigkeit des Körpers, seine inneren Bedingungen stabil zu halten." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was ist die kleinste lebende Einheit?", options: ["Das Organ", "Die Zelle", "Das Gewebe"], answer: 1, explain: "Alle Lebewesen bestehen aus Zellen." },
      { type: "order", q: "Ordne von der einfachsten zur komplexesten Ebene.", items: ["Zelle", "Gewebe", "Organ", "Organsystem", "Organismus"], explain: "Jede Ebene besteht aus vielen Elementen der vorherigen Ebene." },
      { type: "mc", q: "Das Gewebe, das Botschaften weiterleitet, ist das …", options: ["Muskelgewebe", "Nervengewebe", "Epithelgewebe"], answer: 1, explain: "Das Nervengewebe leitet elektrische Signale weiter." },
      { type: "tf", q: "Ein Organ besteht aus nur einer Gewebeart.", answer: false, explain: "Ein Organ besteht aus mehreren verschiedenen Geweben, die zusammenarbeiten." },
      { type: "text", q: "Wie heißt die dünne „Haut“, die die Zelle umhüllt?", answer: ["Membran", "Zellmembran", "die Membran", "die Zellmembran", "Plasmamembran", "membrana", "membrana cellulare"], explain: "Es ist die Zellmembran." },
      { type: "mc", q: "In welchem Organ gehen die Nährstoffe ins Blut über?", options: ["Im Magen", "Im Dünndarm", "In der Speiseröhre"], answer: 1, explain: "Im Dünndarm, durch die Darmzotten." },
      { type: "mc", q: "Welches Organsystem scheidet das Kohlendioxid aus?", options: ["Atmungssystem", "Verdauungssystem", "Skelettsystem"], answer: 0, explain: "Beim Ausatmen geben die Lungen das Kohlendioxid ab." },
      { type: "tf", q: "Das Blut ist ein Bindegewebe.", answer: true, explain: "Es ist ein flüssiges Bindegewebe." },
      { type: "mc", q: "Wie oft schlägt das Herz ungefähr an einem Tag?", options: ["Etwa 1 000-mal", "Etwa 100 000-mal", "Etwa 100 Millionen-mal"], answer: 1, explain: "Etwa 100 000 Schläge am Tag (70 pro Minute × 1440 Minuten ≈ 100 000)." },
      { type: "mc", q: "Wer nannte die kleinen, unter dem Mikroskop gesehenen Kammern als Erster „Zellen“?", options: ["Robert Hooke", "Galileo Galilei", "Charles Darwin"], answer: 0, explain: "Robert Hooke, 1665, bei der Beobachtung von Kork." },
      { type: "mc", q: "Wenn du rennst, welche Organsysteme arbeiten?", options: ["Nur die Muskeln", "Muskeln, Knochen, Herz, Lunge und Nervensystem zusammen", "Nur das Herz"], answer: 1, explain: "Alle Organsysteme arbeiten zusammen." }
    ]
  }
});
