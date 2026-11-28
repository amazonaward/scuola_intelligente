TOPIC('de', {
  id: "l1-sto-grecia-polis",
  title: "Das Griechenland der Poleis",
  intro: "Ein Land aus Bergen und Inseln, ohne große Flüsse und Ebenen, in dem es nie jemandem gelang, alle unter einem einzigen König zu vereinen. Und doch entstanden hier die <b>Demokratie</b>, die Philosophie, das Theater und die Olympischen Spiele. Wie kam es dazu? Durch eine ganz und gar griechische Erfindung: die <b>Polis</b>, eine Stadt, die zugleich Staat und Gemeinschaft von Bürgern ist. In dieser Lektion beginnen wir mit den Kulturen der Bronzezeit, den Minoern und Mykenern, und kommen zu den zwei gegensätzlichen Modellen <b>Sparta</b> und <b>Athen</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Das griechische Land und warum es wichtig ist",
      html: `<p>Griechenland besteht aus <b>Halbinseln, Inseln und Gebirgen</b>: Etwa 80 % des Landes sind bergig, die fruchtbaren Ebenen sind klein und voneinander getrennt. Das hat drei entscheidende Folgen:</p>
<ul>
<li><b>Politische Zersplitterung</b>: Jedes Tal und jede Insel entwickelt eine eigenständige Gemeinschaft; es ist schwierig, sie in einem einzigen Reich zu vereinen.</li>
<li><b>Landknappheit</b>: Die Ernten sind begrenzt (wenig Getreide, viel Öl und Wein): Man sucht anderswo nach Nahrung und Handel.</li>
<li><b>Ausrichtung aufs Meer</b>: Kein Ort in Griechenland ist weit vom Meer entfernt; das Mittelmeer ist der Weg. Wie Platon sagte, leben die Griechen „rund um das Meer wie Frösche um einen Teich“.</li>
</ul>
<p>Die Griechen nannten sich selbst <b>Hellenen</b> und ihr Land <b>Hellas</b>; sie fühlten sich als ein einziges Volk durch gemeinsame Sprache, Religion (dieselben Götter des Olymp), gesamtgriechische Feste (die <b>Olympischen Spiele</b>, seit <b>776 v. Chr.</b>) und Heiligtümer (Delphi mit dem Orakel des Apollon). Wer nicht Griechisch sprach, war ein <i>bárbaros</i>.</p>`
    },
    {
      type: "text",
      title: "2. Minoer und Mykener: das Griechenland der Bronzezeit",
      html: `<p><b>Minoische Kultur</b> (Kreta, etwa 2000-1450 v. Chr.): Sie ist nach dem mythischen König Minos benannt. Reiche <b>Paläste</b> wie der von <b>Knossos</b>, ohne Verteidigungsmauern (ein Zeichen von Seemacht), lebendige Fresken mit Delfinen, Stieren und jungen Akrobaten. Sie schrieben mit der <b>Linear A</b>, die bis heute nicht entziffert ist. Ihre Macht ging nach dem Ausbruch des Vulkans von <b>Thera</b> (Santorin, etwa 1600 v. Chr.) und der Eroberung durch die Mykener zurück.</p>
<p><b>Mykenische Kultur</b> (griechisches Festland, etwa 1600-1100 v. Chr.): benannt nach <b>Mykene</b> auf der Peloponnes. Die Mykener waren <b>Griechen</b> mit indogermanischer Sprache, die im 2. Jahrtausend v. Chr. aus dem Norden eingewandert waren. Sie bauten <b>befestigte Burgen</b> (mit riesigen Steinblöcken, den „kyklopischen Mauern“, und dem Löwentor) und Kuppelgräber (Tholos-Gräber) mit Goldschätzen (die „Maske des Agamemnon“). Sie schrieben in <b>Linear B</b>, die 1952 von <b>Michael Ventris</b> entziffert wurde: Es ist altgriechisch und liefert uns Inventarlisten der Paläste. Am Ende des 2. Jahrtausends v. Chr. (etwa 1200-1100) brach die mykenische Kultur zusammen, im Rahmen der allgemeinen Krise im Mittelmeerraum (Invasionen, Erdbeben, Kriege).</p>
<p>Die Erinnerung an dieses Zeitalter lebt in den Epen <b>Homers</b> fort (<i>Ilias</i> und <i>Odyssee</i>, vielleicht im 8. Jh. v. Chr. entstanden): Trojanischer Krieg (etwa 1200 v. Chr.), König Agamemnon, Achilles, Odysseus. Das sind literarische Erzählungen, keine Chroniken, aber sie enthalten echte Erinnerungen.</p>`
    },
    {
      type: "3d",
      title: "3D-Karte: vom mykenischen Griechenland zu den Kolonien",
      scene: "spacetime",
      caption: "Die Grundfläche ist die Karte von Griechenland und der Ägäis, die Höhe ist die Zeit (1700-500 v. Chr.). Tippe auf die Ereignisse: Die Pfeile verbinden Ursachen und Wirkungen.",
      options: {
        lat: [34, 41],
        lon: [20, 30],
        years: [-1700, -500],
        places: [
          { lat: 37.97, lon: 23.72, label: "Athen" },
          { lat: 37.08, lon: 22.43, label: "Sparta" },
          { lat: 37.73, lon: 22.76, label: "Mykene" },
          { lat: 35.3, lon: 25.16, label: "Knossos" }
        ],
        events: [
          { id: "cnosso", lat: 35.3, lon: 25.16, year: -1700, label: "Palast von Knossos", html: "Der große Palast auf Kreta ist das Verwaltungs- und Religionszentrum der minoischen Kultur.", causes: [] },
          { id: "micene", lat: 37.73, lon: 22.76, year: -1500, label: "Mykene", html: "Die Mykener, Festlandgriechen, beherrschen die Peloponnes und erobern Kreta um 1450 v. Chr.", causes: ["cnosso"] },
          { id: "crollo", lat: 37.73, lon: 22.76, year: -1150, label: "Untergang der Paläste", html: "Um 1200-1100 v. Chr. werden die mykenischen Paläste zerstört. Es folgen Jahrhunderte des Niedergangs: das „hellenische Mittelalter“ oder die Dunklen Jahrhunderte.", causes: ["micene"] },
          { id: "olimpiadi", lat: 37.64, lon: 21.63, year: -776, label: "Erste Olympische Spiele", html: "776 v. Chr. (traditionelles Datum) finden in Olympia die ersten gesamtgriechischen Spiele zu Ehren des Zeus statt: Man benutzte sie zur Datierung von Ereignissen.", causes: ["crollo"] },
          { id: "polis", lat: 37.97, lon: 23.72, year: -800, label: "Entstehung der Poleis", html: "Etwa im 8. Jh. v. Chr. schließen sich die Dörfer zu Stadtstaaten (Poleis) zusammen, mit Akropolis, Agora und Bürgerversammlung.", causes: ["crollo"] },
          { id: "cuma", lat: 40.85, lon: 14.05, year: -750, label: "Cumae: erste Kolonie in Italien", html: "Um 750 v. Chr. landen in Kampanien Siedler aus Chalkis und Eretria: Die Magna Graecia beginnt.", causes: ["polis"] },
          { id: "siracusa", lat: 37.07, lon: 15.29, year: -733, label: "Syrakus", html: "733 v. Chr. gründen Siedler aus Korinth Syrakus, das zur mächtigsten griechischen Stadt im Westen wird.", causes: ["polis"] },
          { id: "solone", lat: 37.97, lon: 23.72, year: -594, label: "Reformen Solons", html: "In Athen streicht Solon die Schulden und die Schuldknechtschaft, teilt die Bürger nach Einkommen ein und gibt allen Zugang zur Volksversammlung.", causes: ["polis"] },
          { id: "clistene", lat: 37.97, lon: 23.72, year: -508, label: "Reformen des Kleisthenes", html: "508-507 v. Chr. ordnet Kleisthenes die Bürger in 10 gemischte Phylen neu und schafft den Rat der 500 (Boule): Das ist der Beginn der athenischen Demokratie.", causes: ["solone"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Was ist eine Polis?",
      html: `<p>Nach dem Untergang der mykenischen Kultur schließen sich die griechischen Dörfer zwischen dem 9. und 8. Jh. v. Chr. zu <b>Poleis</b> (Singular <i>Polis</i>) zusammen: eigenständige Gemeinschaften mit eigenen Gesetzen, eigenem Heer, eigener Münze und eigenen Schutzgöttern. Sie ist nicht einfach eine Stadt: Sie ist ein <b>Staat</b> im Kleinen.</p>
<ul>
<li><b>Akropolis</b> („Oberstadt“): befestigter Hügel mit den Tempeln, Zuflucht bei einem Angriff.</li>
<li><b>Agora</b>: zentraler Platz für Markt und Versammlungen; das Herz des öffentlichen Lebens.</li>
<li><b>Chora</b>: das umliegende Land mit den Feldern der Bürger.</li>
<li><b>Bürger</b>: Nur erwachsene Männer, die von Bürgern abstammten, nahmen am politischen Leben teil. Frauen, Sklaven und Fremde (<i>Metöken</i>) waren davon ausgeschlossen.</li>
<li>Größe: von einigen tausend bis zu wenigen zehntausend Einwohnern (Athen und Syrakus waren die größten). So konnten sich alle kennen und direkt mitwirken.</li>
</ul>
<p>Die Poleis waren Rivalen und oft im Krieg miteinander, fühlten sich aber als Teil einer einzigen Kultur. Die Regierungsformen wandeln sich im Lauf der Zeit: <b>Monarchie → Aristokratie (Oligarchie) → Tyrannis → Demokratie</b>. Der <b>Tyrann</b> ist jemand, der die Macht mit Gewalt ergreift (oft mit Unterstützung der Armen) und außerhalb der Regeln regiert; er hatte nicht unbedingt die negative Bedeutung von heute.</p>`
    },
    {
      type: "svg",
      title: "Wie eine Polis aufgebaut ist",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect x="0" y="230" width="600" height="70" fill="#bfdbfe"/>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#1e3a8a">Meer: Hafen und Handel</text>
<path d="M200 220 L250 90 L350 90 L400 220 Z" fill="#d6d3d1" stroke="#44403c" stroke-width="3"/>
<rect x="265" y="55" width="70" height="35" fill="#fafaf9" stroke="#44403c" stroke-width="2"/>
<polygon points="260,55 300,30 340,55" fill="#fecaca" stroke="#7f1d1d" stroke-width="2"/>
<text x="300" y="75" font-size="14" text-anchor="middle" fill="#0f172a">Tempel</text>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">AKROPOLIS</text>
<rect x="215" y="150" width="170" height="60" fill="#fef9c3" stroke="#a16207" stroke-width="2"/>
<text x="300" y="185" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">AGORA</text>
<g fill="#fde68a" stroke="#92400e" stroke-width="2"><rect x="60" y="170" width="50" height="40"/><rect x="120" y="180" width="50" height="30"/><rect x="430" y="170" width="50" height="40"/><rect x="490" y="180" width="50" height="30"/></g>
<text x="115" y="160" font-size="14" text-anchor="middle" fill="#0f172a">Häuser</text>
<text x="490" y="160" font-size="14" text-anchor="middle" fill="#0f172a">Häuser</text>
<text x="85" y="40" font-size="14" fill="#14532d">Felder und Dörfer (Chora)</text>
<text x="400" y="40" font-size="14" fill="#14532d">Felder und Dörfer (Chora)</text>
</svg>`,
      caption: "Idealschema einer Polis: Akropolis mit den Tempeln, Agora in der Mitte, Häuser, Umland und Hafen."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Anfänge",
      questions: [
        { type: "mc", q: "Welche Schrift der Mykener wurde 1952 entziffert?", options: ["Linear A", "Linear B", "Hieroglyphen"], answer: 1, explain: "Die Linear B, durch Michael Ventris: Sie ist Griechisch." },
        { type: "mc", q: "Was war die Agora?", options: ["Der zentrale Platz der Polis", "Der befestigte Hügel", "Ein Tempel"], answer: 0, explain: "Platz für Markt und Versammlungen." },
        { type: "tf", q: "Das antike Griechenland war ein einheitlicher Staat unter einem einzigen König.", answer: false, explain: "Es war in viele unabhängige Poleis geteilt." }
      ]
    },
    {
      type: "text",
      title: "4. Die griechische Kolonisation (8.-6. Jh. v. Chr.)",
      html: `<p>Zwischen dem 8. und 6. Jh. v. Chr. schickten viele Poleis Gruppen von Bürgern aus, um <b>Kolonien</b> an den Küsten des Mittelmeers und des Schwarzen Meeres zu gründen. Jede Kolonie (<i>apoikia</i>, „Haus in der Ferne“) war eine <b>unabhängige</b> Polis, die mit der Mutterstadt (<i>Metropolis</i>) durch religiöse und gefühlsmäßige Bande verbunden blieb.</p>
<p><b>Warum?</b></p>
<ul>
<li><b>Überbevölkerung und Landmangel</b>: Die jüngeren Söhne der Bauern hatten keine Felder;</li>
<li><b>Handel</b>: Man brauchte Stützpunkte für Metalle und Getreide;</li>
<li><b>Politische Kämpfe</b>: Die Unterlegenen gingen oft fort;</li>
<li><b>Abenteuerlust</b> und Neugier.</li>
</ul>
<p>Bevor sie aufbrachen, befragten die Siedler das <b>Orakel von Delphi</b>. Der Anführer der Expedition hieß <i>Oikist</i> (Gründer).</p>
<p><b>Wohin?</b> Nach Westen: <b>Magna Graecia</b> (Süditalien) und <b>Sizilien</b>: Cumae, Neapel, Tarent (von Sparta, etwa 706 v. Chr.), Sybaris, Kroton, Rhegion, Syrakus (von Korinth, 733 v. Chr.), Agrigent, Naxos. In Frankreich <b>Massalia</b> (Marseille, etwa 600 v. Chr.), in Spanien Emporion; im Osten am Schwarzen Meer und am Hellespont (Byzantion, etwa 660 v. Chr.).</p>
<p><b>Folgen</b>: mehr Handel und Reichtum; Entstehung einer <b>Kaufmannsschicht</b>, die Macht fordert; Verbreitung der griechischen Kultur (und des Alphabets) unter den italischen Völkern und Begegnung mit Etruskern und Römern; es entsteht das Gefühl einer gemeinsamen <b>griechischen</b> Identität gegenüber den Barbaren.</p>`
    },
    {
      type: "text",
      title: "5. Sparta: der Kasernenstaat",
      html: `<p><b>Sparta</b> in der Ebene Lakoniens (Peloponnes) eroberte in einem langen Krieg (8.-7. Jh. v. Chr.) die benachbarten Messenier und machte sie zu <b>Heloten</b>, kollektiven Staatsknechten, die das Land bearbeiteten. Um sie unterworfen zu halten, entschieden sich die Griechen von Sparta, ein Volk von Soldaten zu werden.</p>
<ul>
<li><b>Drei Klassen</b>: die <b>Spartiaten</b> (Vollbürger, wenige, Krieger), die <b>Periöken</b> (Freie ohne politische Rechte, Handwerker und Händler) und die <b>Heloten</b>.</li>
<li><b>Mischverfassung</b>, die dem legendären <b>Lykurg</b> zugeschrieben wird: zwei <b>Könige</b> (Doppelkönigtum) mit vor allem militärischen Befugnissen; die <b>Gerusia</b>, ein Rat aus 28 Männern über 60 Jahren und den beiden Königen; die <b>Apella</b>, die Versammlung aller Spartiaten, die Vorschläge durch Zuruf annahm oder ablehnte; die fünf <b>Ephoren</b>, jährlich gewählte Beamte, die die Könige überwachten.</li>
<li><b>Agogé</b> („Erziehung“): Mit 7 Jahren verließen die Jungen die Familie und wurden vom Staat erzogen: Disziplin, Hunger, Schmerzertragen, Training. Bis zum Alter von 30 Jahren lebten sie in der Kaserne.</li>
<li><b>Frauen</b>: Sie hatten mehr Freiheit und Ansehen als anderswo in Griechenland (körperliche Betätigung, Verwaltung des Besitzes), doch ihre Aufgabe war es, Krieger zur Welt zu bringen.</li>
<li>Sparta hatte die stärkste <b>Phalanx</b>: Soldaten mit Schild (<i>hoplon</i>) und Lanze in geschlossenen Reihen. Im 5. Jh. gab es etwa 8000 Spartiaten.</li>
</ul>
<p>Sparta blieb verschlossen und konservativ und wenig kunstfreudig; seine Militärmacht machte es zur Führungsmacht des <b>Peloponnesischen Bundes</b>.</p>`
    },
    {
      type: "text",
      title: "6. Athen: von der Aristokratie zur Demokratie",
      html: `<p><b>Athen</b> in Attika war größer und hatte mehr Zugang zum Meer. Sein politischer Weg verlief schrittweise:</p>
<ul>
<li><b>Aristokratie</b>: Die Macht lag bei den Großgrundbesitzern (<i>Eupatriden</i>), die die neun <b>Archonten</b> wählten. Verschuldete Kleinbauern liefen Gefahr, Sklaven zu werden.</li>
<li><b>Drakon</b> (621 v. Chr.): schreibt die Gesetze auf: Sie sind sehr streng („drakonisch“), aber nun für alle bekannt.</li>
<li><b>Solon</b> (594 v. Chr.): streicht die Schulden (<i>Seisachtheia</i>, „Lastenabschütteln“) und verbietet die Schuldknechtschaft; teilt die Bürger in <b>vier Einkommensklassen</b> ein: Der Zugang zu den Ämtern hängt vom Vermögen ab und nicht von der Geburt; richtet einen Rat der 400 und ein Volksgericht ein.</li>
<li><b>Peisistratos</b> (561-527 v. Chr.): beliebter Tyrann, schützt die Bauern, lässt öffentliche Bauten errichten und Feste feiern (die Großen Dionysien).</li>
<li><b>Kleisthenes</b> (508-507 v. Chr.): gliedert die Bevölkerung in <b>10 gemischte Phylen</b> (nicht mehr an adlige Familien gebunden) und schafft die <b>Boule der 500</b>, die die Gesetze vorbereitet. Er führt das <b>Scherbengericht (Ostrakismos)</b> ein: Jedes Jahr können die Bürger abstimmen, indem sie den Namen eines gefährlichen Mannes auf eine Tonscherbe schreiben; er wird ohne Prozess für 10 Jahre verbannt.</li>
</ul>
<p>Mit Kleisthenes entsteht die <b>Demokratie</b> („Herrschaft des Volkes“): Die wichtigsten Entscheidungen liegen bei der <b>Ekklesia</b> (der Versammlung aller erwachsenen männlichen Bürger, die sich auf dem Hügel Pnyx traf), und die meisten Ämter werden <b>durch Los vergeben</b>.</p>`
    },
    {
      type: "widget",
      title: "Sparta oder Athen?",
      widget: "classify",
      options: {
        groups: ["🛡️ Sparta", "🏛️ Athen"],
        items: [
          ["Zwei Könige und fünf Ephoren", 0],
          ["Versammlung aller Bürger (Ekklesia)", 1],
          ["Agogé, militärische Erziehung ab 7 Jahren", 0],
          ["Scherbengericht (Ostrakismos)", 1],
          ["Heloten, die das Land bearbeiten", 0],
          ["Reformen Solons und des Kleisthenes", 1],
          ["Gerusia aus 28 Ältesten", 0],
          ["Starke Handels- und Kriegsflotte", 1]
        ]
      },
      caption: "Tippe auf einen Ausdruck und dann auf die richtige Polis."
    },
    {
      type: "decision",
      title: "Athen, 508 v. Chr.: Wer soll entscheiden?",
      html: `<p>Nach dem Sturz der Tyrannen ist Athen im Kampf zwischen adligen Familien zerrissen. Du bist <b>Kleisthenes</b>, ein Aristokrat, der einen Bürgerkrieg und die Rückkehr eines Tyrannen vermeiden will. Fast alle Macht liegt noch in den Händen weniger Familien. Die anderen Bürger, besonders die Bauern und Handwerker, verlangen mehr Mitsprache.</p>`,
      question: "Welche Lösung schlägst du vor?",
      options: [
        { label: "Die Macht der großen Familien stärken, damit sie entschlossen regieren.", outcome: "Die Familien bleiben im Streit, und die ausgeschlossenen Bürger unterstützen einen neuen Tyrannen: Die Gefahr eines Bürgerkriegs bleibt hoch." },
        { label: "Allen männlichen Bürgern einen Platz in der Versammlung und in den Räten geben und die Phylen neu ordnen.", outcome: "Die Bürger fühlen sich für den Staat verantwortlich und verteidigen ihn: Das wird die Stärke Athens in den Perserkriegen sein. Der Preis: Der größte Teil der Bevölkerung (Frauen, Sklaven, Metöken) bleibt ausgeschlossen." },
        { label: "Alles einem König anvertrauen, der für alle regiert.", outcome: "Man kehrt zur Monarchie zurück, doch die Athener hatten diese Idee schon Jahrhunderte zuvor aufgegeben: Es wäre eine Entscheidung gegen den Trend der Zeit gewesen." }
      ],
      answer: 1,
      explain: "Kleisthenes wählte den Weg der <b>breiten Beteiligung</b>: Die Macht ging von der Geburtsaristokratie auf die Gesamtheit der männlichen Bürger über. Das war die Geburtsstunde der athenischen Demokratie, die unter Perikles ihren Höhepunkt erreichen wird."
    },
    {
      type: "example",
      title: "Praxisbeispiel: ein athenischer Bürger bei der Arbeit",
      html: `<p>Stell dir vor, du bist <b>Nikias</b>, ein 30-jähriger athenischer Bauer. Dein Tagesablauf:</p>
<ol>
<li>Am Morgen bearbeitest du Gemüsegarten und Olivenbäume, unterstützt von einem Sklaven.</li>
<li>Etwa alle zehn Tage gehst du zur <b>Pnyx</b> zur <b>Volksversammlung</b>: Du stimmst per Handzeichen über Krieg, Steuern und Gesetze ab.</li>
<li>Wirst du ausgelost, bist du ein Jahr lang Mitglied der <b>Boule</b> oder <b>Geschworener</b> in den Volksgerichten (mit einem kleinen Sold, damit du nichts verlierst).</li>
<li>Im Kriegsfall bist du ein <b>Hoplit</b> und kämpfst mit deinem Schild.</li>
</ol>
<p>Du bist direkt an den Entscheidungen beteiligt, anders als heute, wo wir Vertreter wählen: Die athenische Demokratie war <b>direkt</b>. Aber deine Frau, deine Sklaven und dein Nachbar, der Metöke, dürfen nicht abstimmen.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Namen der Regierungsformen",
      html: `<p>Die politischen Begriffe, die wir heute benutzen, sind griechisch:</p>
<ul>
<li><b>Monarchie</b>: Herrschaft eines Einzelnen (<i>mónos</i> + <i>archía</i>);</li>
<li><b>Aristokratie</b>: Herrschaft der Besten (<i>áristoi</i>);</li>
<li><b>Oligarchie</b>: Herrschaft weniger (<i>olígoi</i>);</li>
<li><b>Demokratie</b>: Herrschaft des Volkes (<i>dêmos</i> + <i>krátos</i>);</li>
<li><b>Tyrannis</b>: Herrschaft dessen, der die Führung mit Gewalt an sich gerissen hat.</li>
</ul>
<p>Versuche, den Staat, in dem du lebst, auf diese Weise einzuordnen: Wer entscheidet? Wie viele Bürger dürfen wählen? Wie werden die Regierenden bestimmt? Dieselben Fragen, die die Griechen stellten, sind noch heute nützlich.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Die 300 der Thermopylen",
      html: `<p>Im Jahr <b>480 v. Chr.</b> hielt der spartanische König <b>Leonidas</b> drei Tage lang am Pass der Thermopylen mit 300 Spartiaten und einigen tausend weiteren Griechen dem riesigen persischen Heer stand. In Wirklichkeit waren etwa 7000 griechische Verbündete dabei; die 300 Spartiaten bildeten den Kern der Truppe. Als er umgangen wurde, schickte Leonidas die meisten Verbündeten zurück und kämpfte mit den Seinen bis zum Tod. Den Zusammenhang dieser Kriege sehen wir in der nächsten Lektion.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Die Abstimmung mit der Scherbe",
      html: `<p>Der Name „Ostrakismos“ kommt von <i>óstrakon</i>, der Tonscherbe, auf die die Bürger den Namen dessen schrieben, der verbannt werden sollte. Archäologen haben auf der Agora von Athen mehr als zehntausend davon gefunden. Einige mit dem Namen des <b>Themistokles</b> wurden von politischen Gegnern im Voraus vorbereitet, alle von derselben Hand beschriftet: ein Beweis, dass es auch damals schon Wahlpropaganda gab! Nach den zehn Jahren der Verbannung durfte der Verbannte zurückkehren und alle seine Rechte wieder in Anspruch nehmen.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Sparta und Athen zu verstehen",
      intro: "Zwei Städte, zwei gegensätzliche Entscheidungen. Hier einige Vergleiche, um sie sich zu merken.",
      tabs: [
        {
          label: "🏫 Zwei Schulen im Vergleich",
          html: `<p>Stell dir zwei Schulen mit gegensätzlichen Regeln vor.</p>
<ul>
<li><b>Schule Sparta</b>: eiserne Disziplin, Uniform, militärische Zeiten, wenige Lehrer entscheiden alles, alle sind gleich, keine Kunst. Das funktioniert in Notfällen, kaum bei Veränderungen.</li>
<li><b>Schule Athen</b>: Klassenversammlung, die diskutiert und abstimmt, alle Fächer, Sport, Theater, Experimente. Mehr Durcheinander und Langsamkeit, aber Kreativität und Innovation.</li>
</ul>
<p>Sparta entschied sich für <b>Sicherheit und Ordnung</b>, Athen für <b>Teilhabe und Freiheit</b>. Keine von beiden war perfekt: Beide schlossen die Mehrheit aus (Frauen, Sklaven, Fremde).</p>`
        },
        {
          label: "📊 Wer regiert?",
          html: `<table>
<tr><th></th><th>Sparta</th><th>Athen</th></tr>
<tr><td>Führung</td><td>2 Könige + 5 Ephoren</td><td>9 Archonten, Strategen, Boule</td></tr>
<tr><td>Versammlung</td><td>Apella (Zuruf)</td><td>Ekklesia (Abstimmung, Diskussion)</td></tr>
<tr><td>Wirtschaft</td><td>Landwirtschaft, mit Heloten</td><td>Handel, Handwerk, Flotte</td></tr>
<tr><td>Heer</td><td>Phalanx der Spartiaten</td><td>Hopliten und später Triërenflotte</td></tr>
<tr><td>Kultur</td><td>Disziplin und Schweigen</td><td>Theater, Philosophie, Kunst</td></tr>
<tr><td>Ausgeschlossene</td><td>Heloten, Periöken, Frauen</td><td>Sklaven, Metöken, Frauen</td></tr>
</table>`
        },
        {
          label: "🗺️ Dreh den Globus",
          html: `<p>Dreh den Globus: die griechischen Poleis und Kolonien von Marseille bis zum Schwarzen Meer.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Athen", color: "#2563eb" },
              { lat: 37.08, lon: 22.43, label: "Sparta", color: "#ef4444" },
              { lat: 37.07, lon: 15.29, label: "Syrakus", color: "#f97316" },
              { lat: 40.85, lon: 14.05, label: "Cumae", color: "#f97316" },
              { lat: 40.47, lon: 17.24, label: "Tarent", color: "#f97316" },
              { lat: 43.3, lon: 5.37, label: "Marseille", color: "#f97316" },
              { lat: 41.01, lon: 28.98, label: "Byzantion", color: "#f97316" }
            ],
            routes: [{ points: [0, 2, 3], color: "#f97316" }, { points: [0, 6], color: "#f97316" }]
          }
        },
        {
          label: "📅 Zeitleiste",
          html: `<p>Geh die wichtigsten Stationen durch, von den Mykenern bis Kleisthenes.</p>`,
          widget: "timeline",
          options: {
            unit: "Jahre",
            events: [
              { year: -2000, label: "Minoische Paläste", icon: "🐂" },
              { year: -1600, label: "Mykene", icon: "🛡️" },
              { year: -1200, label: "Trojanischer Krieg (Überlieferung)", icon: "🐴" },
              { year: -776, label: "Erste Olympische Spiele", icon: "🥇" },
              { year: -733, label: "Syrakus", icon: "⚓" },
              { year: -621, label: "Drakon", icon: "📜" },
              { year: -594, label: "Solon", icon: "⚖️" },
              { year: -508, label: "Kleisthenes", icon: "🗳️" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Karte des Griechenlands der Poleis",
      nodes: [
        { id: "geo", label: "Zersplittertes Land", x: 50, y: 6, color: "#16a34a", html: "Berge, Inseln, kleine Ebenen.", why: "Die Geografie verhindert die Einigung: Jede Gemeinschaft organisiert sich selbst und lernt, sich zu regieren. Das Meer treibt zu Handel und Kolonisation." },
        { id: "polis", label: "Polis", x: 20, y: 32, color: "#2563eb", html: "Stadtstaat mit Akropolis, Agora und Bürgern.", why: "Kleine Gemeinschaften, in denen sich die Bürger kennen und mitwirken: Das ist der Boden, auf dem die Idee der Bürgerschaft entsteht." },
        { id: "colonie", label: "Kolonisation", x: 82, y: 32, color: "#f97316", html: "Kolonien vom Schwarzen Meer bis Spanien.", why: "Wenig Land, zu viele Einwohner und der Wunsch nach Handel trieben dazu, neue Poleis zu gründen. Die griechische Kultur verbreitet sich, die Idee entsteht, gegenüber den Barbaren Hellenen zu sein." },
        { id: "sparta", label: "Sparta", x: 20, y: 62, color: "#ef4444", html: "Militärische Oligarchie mit Heloten.", why: "Weil es eine riesige Zahl von Heloten kontrollieren musste, entschied sich Sparta für dauerhafte militärische Disziplin; das machte es stark, aber starr und wenig kreativ." },
        { id: "atene", label: "Athen", x: 80, y: 62, color: "#7c3aed", html: "Von der Aristokratie zur Demokratie (Solon, Kleisthenes).", why: "Die Spannungen zwischen Reichen und Armen (Schulden, Sklaverei) machten Reformen nötig. Die Ausweitung der Rechte stärkte die Polis und gibt den Bürgern eine gemeinsame Identität." },
        { id: "democrazia", label: "Demokratie", x: 50, y: 85, color: "#0ea5e9", html: "Macht des Demos: Versammlung, Los, Scherbengericht.", why: "Sie ist direkt und wenigen vorbehalten (erwachsene, in Athen geborene Männer), aber zum ersten Mal versucht man, die Gemeinschaft entscheiden zu lassen. Sie wird die modernen Demokratien beeinflussen." },
        { id: "panellenismo", label: "Griechische Identität", x: 50, y: 50, color: "#eab308", html: "Sprache, Götter, Olympische Spiele, Orakel von Delphi.", why: "Obwohl getrennt, teilten die Poleis eine Kultur: Das einte sie im Widerstand gegen die Perser." }
      ],
      edges: [
        ["geo", "polis", "bringt hervor die"],
        ["geo", "colonie", "treibt zur"],
        ["polis", "sparta", "Modell"],
        ["polis", "atene", "Modell"],
        ["atene", "democrazia", "entwickelt die"],
        ["colonie", "panellenismo", "stärken die"],
        ["panellenismo", "democrazia", "teilt Werte mit der"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Sparta und Athen",
      questions: [
        { type: "mc", q: "Wie hießen die Knechte Spartas?", options: ["Heloten", "Metöken", "Ephoren"], answer: 0, explain: "Die Heloten bearbeiteten das Land für die Spartiaten." },
        { type: "mc", q: "Wer gab der Überlieferung nach Sparta seine Gesetze?", options: ["Lykurg", "Solon", "Kleisthenes"], answer: 0, explain: "Der legendäre Lykurg." },
        { type: "tf", q: "Solon verbot die Schuldknechtschaft.", answer: true, explain: "Er strich die Schulden und befreite alle, die in die Sklaverei geraten waren." },
        { type: "mc", q: "Was war das Scherbengericht (Ostrakismos)?", options: ["Zehnjährige Verbannung, per Abstimmung auf einer Scherbe beschlossen", "Eine Todesstrafe", "Eine Art Steuer"], answer: 0, explain: "Man schrieb auf eine Tonscherbe den Namen dessen, den man verbannen wollte." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Minoer (Kreta, Linear A) und Mykener (Mykene, Linear B, Untergang etwa 1200-1100 v. Chr.).</li>
<li><b>Polis</b>: Stadtstaat mit Akropolis, Agora, erwachsenen männlichen Bürgern; nie vereinigt.</li>
<li><b>Kolonisation</b> (8.-6. Jh. v. Chr.): Magna Graecia, Syrakus (733), Marseille; Ursachen: knappes Land und Handel.</li>
<li><b>Sparta</b>: militärische Oligarchie, zwei Könige, Ephoren, Heloten, Agogé. <b>Athen</b>: von der Aristokratie zur Demokratie mit Drakon, Solon, Peisistratos, Kleisthenes (508 v. Chr.).</li>
<li>Olympische Spiele seit 776 v. Chr.; Orakel von Delphi; gemeinsame Sprache und Götter.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Polis", d: "Griechischer Stadtstaat, eigenständige Gemeinschaft von Bürgern." },
    { t: "Akropolis", d: "Hoch gelegener, befestigter Teil der Polis mit den Tempeln." },
    { t: "Agora", d: "Zentraler Platz der Polis, Ort für Markt und Versammlung." },
    { t: "Magna Graecia", d: "Die griechischen Kolonien in Süditalien." },
    { t: "Helot", d: "Staatsknecht im spartanischen Staat." },
    { t: "Ephor", d: "Spartanischer Beamter, der die Könige kontrollierte." },
    { t: "Agogé", d: "Militärische Erziehung der jungen Spartaner." },
    { t: "Ekklesia", d: "Versammlung der athenischen Bürger." },
    { t: "Ostrakismos (Scherbengericht)", d: "Zehnjährige Verbannung, von der Versammlung beschlossen." },
    { t: "Metöke", d: "In Athen ansässiger Fremder ohne politische Rechte." },
    { t: "Tyrann", d: "Wer die Macht mit Gewalt und außerhalb der Regeln an sich reißt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Warum einigte sich Griechenland nicht zu einem einzigen Staat?", options: ["Wegen des zersplitterten Landes aus Bergen und Inseln", "Weil Wasser fehlte", "Weil es keine Götter hatte"], answer: 0, explain: "Das Land begünstigte eigenständige Gemeinschaften." },
      { type: "mc", q: "Wer entzifferte die Linear B?", options: ["Michael Ventris", "Howard Carter", "Champollion"], answer: 0, explain: "1952; er entdeckte, dass es Altgriechisch war." },
      { type: "tf", q: "Eine griechische Kolonie war der Mutterstadt untergeordnet wie eine Provinz.", answer: false, explain: "Sie war eine unabhängige Polis, mit der Metropolis durch religiöse und gefühlsmäßige Bande verbunden." },
      { type: "text", q: "Wie heißt der hoch gelegene, befestigte Teil einer Polis mit den Tempeln?", answer: ["Akropolis", "die Akropolis", "akropolis"], explain: "Die Akropolis." },
      { type: "mc", q: "Welche griechische Stadt gründete Syrakus (733 v. Chr.)?", options: ["Korinth", "Sparta", "Athen"], answer: 0, explain: "Siedler aus Korinth." },
      { type: "mc", q: "Welche Reform des Kleisthenes schuf die Grundlage der Demokratie?", options: ["Zehn gemischte Phylen und Rat der 500", "Abschaffung der Sklaven", "Beliebte Tyrannis"], answer: 0, explain: "Sie überwand die Spaltungen zwischen den adligen Familien." },
      { type: "order", q: "Bringe die Ereignisse in die chronologische Reihenfolge.", items: ["Erste Olympische Spiele", "Drakon", "Solon", "Peisistratos als Tyrann", "Kleisthenes"], explain: "776, 621, 594, 561, 508 v. Chr." },
      { type: "mc", q: "Wer waren die Ephoren in Sparta?", options: ["Fünf gewählte Beamte, die die Könige überwachten", "Priester des Orakels", "Auserwählte Krieger"], answer: 0, explain: "Sie kontrollierten die Könige und lenkten die Politik." },
      { type: "num", q: "In welchem Jahr v. Chr. fanden der Überlieferung nach die ersten Olympischen Spiele statt?", answer: 776, tol: 0, explain: "776 v. Chr." },
      { type: "tf", q: "In Athen nahmen Frauen und Sklaven an der Versammlung teil.", answer: false, explain: "Nur erwachsene männliche Bürger stimmten ab." },
      { type: "mc", q: "Warum war Sparta so stark militarisiert?", options: ["Um eine große Zahl von Heloten zu kontrollieren", "Um Asien zu erobern", "Um sich gegen die Römer zu verteidigen"], answer: 0, explain: "Wenige Spartiaten mussten viele Heloten beherrschen." }
    ]
  }
});
