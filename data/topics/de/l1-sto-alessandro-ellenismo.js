TOPIC('de', {
  id: "l1-sto-alessandro-ellenismo",
  title: "Alexander der Große und der Hellenismus",
  intro: "In knapp <b>zehn Jahren</b>, zwischen 334 und 323 v. Chr., eroberte ein zwanzigjähriger König aus einem Reich am Rand der griechischen Welt das größte Reich, das man bis dahin gesehen hatte, vom Mittelmeer bis nach Indien. Er starb mit 32 Jahren, ohne die Nachfolge geregelt zu haben. Doch sein Abenteuer veränderte die Welt: Aus seinen Eroberungen ging eine neue Kultur hervor, der <b>Hellenismus</b>, in dem sich griechische Sprache und Kultur mit denen Ägyptens, Persiens und Asiens vermischten. In dieser Lektion folgen wir Alexander und entdecken, was sein Erbe war.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Das Makedonien Philipps II.",
      html: `<p><b>Makedonien</b>, nördlich von Griechenland, war ein Reich von Hirten und Bauern, regiert von Königen und adligen Kriegern. Die Griechen hielten es für halb barbarisch, obwohl seine Könige Griechisch sprachen. Unter <b>Philipp II.</b> (359-336 v. Chr.) wurde es zur beherrschenden Macht:</p>
<ul>
<li><b>Reformiertes Heer</b>: Fußvolk mit der <b>Sarissa</b> (einer etwa 5-6 Meter langen Lanze) in einer geschlossenen <b>Phalanx</b>, Reiterei der <b>Gefährten</b>, Belagerungstechnik.</li>
<li><b>Ressourcen</b>: Goldminen am Berg Pangaion, die Heer und Diplomatie finanzierten.</li>
<li><b>Politik</b>: Philipp nutzte die Spaltungen zwischen den Poleis (geschwächt durch den Peloponnesischen Krieg) und setzte sich nach und nach durch. Im Jahr <b>338 v. Chr.</b> schlug er bei <b>Chaironeia</b> Athen und Theben. Der athenische Redner <b>Demosthenes</b> hatte ihn mit seinen „Philippischen Reden“ gewarnt: zu spät.</li>
<li>Im Jahr 337 v. Chr. schuf er den <b>Korinthischen Bund</b>: Alle Poleis (außer Sparta) schworen ein Bündnis und erkannten Philipp als Anführer an, um Krieg gegen Persien zu führen.</li>
</ul>
<p>Philipp wurde im Jahr <b>336 v. Chr.</b> bei der Hochzeit seiner Tochter ermordet. Ihm folgte sein Sohn <b>Alexander</b>.</p>`
    },
    {
      type: "text",
      title: "2. Alexander: Jugend und erste Schritte",
      html: `<p><b>Alexander</b> wurde <b>356 v. Chr.</b> in Pella als Sohn Philipps II. und der Olympias geboren. Mit 13 Jahren bekam er den Philosophen <b>Aristoteles</b> zum Lehrer, der ihm die Liebe zu Homer, zur Wissenschaft und zur Geografie vermittelte. Mit 16 regierte er das Reich während einer Abwesenheit des Vaters; mit 18 befehligte er bei Chaironeia die Reiterei. Mit <b>20 Jahren</b> (336 v. Chr.) bestieg er den Thron, unterwarf rasch die Aufständischen (er zerstörte Theben im Jahr 335 v. Chr.) und überquerte <b>334 v. Chr.</b> den Hellespont mit etwa 40.000 Mann: Makedonen, verbündeten Griechen, Thrakern.</p>
<p>Sein erklärtes Ziel war es, die persische Invasion des Xerxes zu rächen und die Griechen in Asien zu befreien. Doch das Unternehmen bekam bald eine neue Dimension: die Eroberung des Perserreichs.</p>`
    },
    {
      type: "3d",
      title: "3D-Karte: der Marsch Alexanders (334-323 v. Chr.)",
      scene: "spacetime",
      caption: "Die Grundfläche ist die Karte von der Ägäis bis Indien, die Höhe ist die Zeit (336-320 v. Chr.). Tippe auf die Ereignisse, um die Etappen der Eroberung zu sehen.",
      options: {
        lat: [24, 44],
        lon: [20, 78],
        years: [-337, -320],
        places: [
          { lat: 40.76, lon: 22.52, label: "Pella" },
          { lat: 32.5, lon: 44.4, label: "Babylon" },
          { lat: 29.9, lon: 52.9, label: "Persepolis" },
          { lat: 31.2, lon: 29.9, label: "Alexandria" }
        ],
        events: [
          { id: "pella", lat: 40.76, lon: 22.52, year: -336, label: "Alexander wird König", html: "Nach dem Tod Philipps II. wird Alexander (20 Jahre) König von Makedonien. Er schlägt die Aufstände in Griechenland nieder.", causes: [] },
          { id: "granico", lat: 40.2, lon: 27.3, year: -334, label: "Granikos", html: "Frühjahr 334 v. Chr.: erste Schlacht gegen die persischen Satrapen; makedonischer Sieg und Kontrolle über Kleinasien.", causes: ["pella"] },
          { id: "isso", lat: 36.8, lon: 36.2, year: -333, label: "Issos", html: "Im Jahr 333 v. Chr. besiegt Alexander den Perserkönig Dareios III., der flieht und seine Familie zurücklässt.", causes: ["granico"] },
          { id: "tiro", lat: 33.27, lon: 35.2, year: -332, label: "Belagerung von Tyros", html: "Nach sieben Monaten erobert Alexander 332 v. Chr. Tyros, indem er einen Damm zur Insel baut.", causes: ["isso"] },
          { id: "egitto", lat: 31.2, lon: 29.9, year: -331, label: "Ägypten und Alexandria", html: "Die Ägypter empfangen ihn als Befreier von den Persern. Im Jahr 331 v. Chr. gründet er <b>Alexandria</b>, das zur Hauptstadt der hellenistischen Kultur wird.", causes: ["tiro"] },
          { id: "gaugamela", lat: 36.4, lon: 43.3, year: -331, label: "Gaugamela", html: "Am 1. Oktober 331 v. Chr. der entscheidende Sieg über Dareios III. Alexander zieht in Babylon ein, dann in Susa.", causes: ["egitto"] },
          { id: "persepoli", lat: 29.93, lon: 52.9, year: -330, label: "Persepolis", html: "Im Jahr 330 v. Chr. erobert Alexander Persepolis, die zeremonielle Hauptstadt, und sein Palast wird in Brand gesteckt. Dareios III. wird von den Seinen ermordet.", causes: ["gaugamela"] },
          { id: "battriana", lat: 36.7, lon: 67.1, year: -329, label: "Baktrien und Sogdien", html: "Zwischen 329 und 327 v. Chr. schwierige Feldzüge in Zentralasien. Er heiratet die Prinzessin Roxane.", causes: ["persepoli"] },
          { id: "idaspe", lat: 32.7, lon: 73.4, year: -326, label: "Hydaspes", html: "Im Jahr 326 v. Chr. besiegt er den indischen König Poros am Fluss Hydaspes. An der Grenze Indiens weigert sich das erschöpfte Heer weiterzuziehen.", causes: ["battriana"] },
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -323, label: "Tod in Babylon", html: "Juni 323 v. Chr.: Alexander stirbt in Babylon mit 32 Jahren (an Fieber, vielleicht Malaria oder Typhus; die Ursache bleibt ungewiss). Das Reich hat keinen erwachsenen Erben.", causes: ["idaspe"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Die Eroberungen: vom Granikos bis Indien",
      html: `<p>Die Eroberung verlief in Etappen:</p>
<ul>
<li><b>334 v. Chr. Granikos</b>: Sieg über die persischen Satrapen und Kontrolle über Kleinasien.</li>
<li><b>333 v. Chr. Issos</b>: Der Perserkönig <b>Dareios III.</b> wird in Kilikien geschlagen und flieht.</li>
<li><b>332 v. Chr.</b>: Belagerung und Zerstörung von <b>Tyros</b>, dann ergibt sich <b>Ägypten</b> kampflos; in der Oase Siwa begrüßen ihn die Priester als Sohn des Ammon (des ägyptischen Zeus).</li>
<li><b>331 v. Chr. Gaugamela</b>: neuer Sieg gegen ein viel zahlreicheres persisches Heer; Alexander ist der „Großkönig“ von Persien.</li>
<li><b>330 v. Chr.</b>: Persepolis wird niedergebrannt; Dareios III. wird von einem seiner Satrapen getötet.</li>
<li><b>329-327 v. Chr.</b>: Baktrien und Sogdien (Afghanistan und Zentralasien): ein äußerst harter Guerillakrieg.</li>
<li><b>326 v. Chr.</b>: Nordwestindien, Sieg über Poros am <b>Hydaspes</b>; dann weigert sich das Heer am Fluss Hyphasis weiterzuziehen.</li>
<li><b>325-324 v. Chr.</b>: Rückmarsch durch die Wüste Gedrosiens (mit schweren Verlusten); in Susa feiert er Massenhochzeiten zwischen Makedonen und persischen Frauen, um die Eliten zu verschmelzen.</li>
<li><b>323 v. Chr.</b>: Er stirbt in <b>Babylon</b> mit 32 Jahren, während er neue Feldzüge vorbereitet.</li>
</ul>
<p><b>Wie gelang ihm das?</b> Mit einem gut ausgebildeten und treuen Heer, einer hervorragenden Reiterei, geschickter Taktik (er griff den schwächsten Punkt an, oft an der Spitze der Seinen), großem persönlichen Mut und ... der Schwäche des Perserreichs, das groß, aber wenig geeint war. Der Preis war gewaltig: zerstörte Städte, Hunderttausende Tote, Hinrichtungen auch engster Gefolgsleute.</p>`
    },
    {
      type: "svg",
      title: "Das Reich Alexanders (Schema)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<path d="M40 170 L70 150 L120 160 L130 190 L90 210 L50 200 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="85" y="185" font-size="14" text-anchor="middle" fill="#0f172a">Griechenland</text>
<path d="M150 150 L300 120 L420 130 L500 160 L520 220 L400 250 L250 240 L160 210 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="330" y="190" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c2d12">REICH ALEXANDERS</text>
<polyline points="90,175 170,170 230,160 280,190 330,200 400,170 490,160" fill="none" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<g fill="#dc2626"><circle cx="90" cy="175" r="6"/><circle cx="170" cy="170" r="6"/><circle cx="230" cy="160" r="6"/><circle cx="280" cy="190" r="6"/><circle cx="330" cy="200" r="6"/><circle cx="400" cy="170" r="6"/><circle cx="490" cy="160" r="6"/></g>
<g font-size="14" fill="#0f172a" text-anchor="middle"><text x="170" y="150">Issos</text><text x="230" y="140">Ägypten</text><text x="280" y="215">Babylon</text><text x="400" y="150">Persepolis</text><text x="490" y="145">Indien</text></g>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#7c2d12">334 v. Chr. – 323 v. Chr.: etwa 11 Jahre Feldzug, über 20.000 km zurückgelegt</text>
</svg>`,
      caption: "Stark vereinfachte Karte der Route; die gestrichelte Linie zeigt den Marsch nach Osten."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Alexander",
      questions: [
        { type: "mc", q: "Wer war der Lehrer Alexanders?", options: ["Aristoteles", "Platon", "Sokrates"], answer: 0, explain: "Aristoteles, griechischer Philosoph." },
        { type: "mc", q: "In welcher Schlacht besiegte Alexander Dareios III. endgültig?", options: ["Gaugamela", "Marathon", "Hydaspes"], answer: 0, explain: "Bei Gaugamela im Jahr 331 v. Chr." },
        { type: "tf", q: "Alexander starb mit 32 Jahren in Babylon.", answer: true, explain: "Im Juni 323 v. Chr." },
        { type: "text", q: "Welche ägyptische Stadt gründete er 331 v. Chr.?", answer: ["Alexandria", "alexandria", "Alexandria in Ägypten"], explain: "Alexandria, an der Küste des Nildeltas." }
      ]
    },
    {
      type: "decision",
      title: "Am Fluss Hyphasis, 326 v. Chr.: vorwärts oder zurück?",
      html: `<p>Du bist Alexander. Das Heer hat in acht Jahren Tausende Kilometer zurückgelegt und unter den Monsunregen gekämpft. Vor dir, jenseits des Flusses Hyphasis, liegen weitere indische Reiche und, so heißt es, ein Heer mit Hunderten von Elefanten. Die Soldaten sind müde, krank und wollen die Heimat wiedersehen. Dein General Koinos spricht im Namen aller: „Lass uns umkehren.“</p>`,
      question: "Was entscheidest du?",
      options: [
        { label: "Um jeden Preis weiter nach Osten ziehen, auch gegen den Willen des Heeres.", outcome: "Du riskierst eine Meuterei: Ohne die Zustimmung der Truppen kann auch ein halbgöttlicher König nicht befehlen. Dein Ansehen und dein Leben wären in Gefahr." },
        { label: "Nachgeben und umkehren, neue Städte gründen und das Reich festigen.", outcome: "Du rettest das Heer und kannst das Gebiet organisieren, auch wenn du auf den Traum verzichtest, den „östlichen Ozean“ zu erreichen. Aber der Rückweg ist sehr hart: In der Wüste Gedrosiens sterben viele Soldaten." },
        { label: "Das Heer entlassen und mit einheimischen Freiwilligen weitermachen.", outcome: "Du riskierst, den makedonischen Kern der Armee zu verlieren und dich von feindlichen Völkern umgeben zu sehen." }
      ],
      answer: 1,
      explain: "Alexander musste nach drei Tagen in seinem Zelt nachgeben: Am <b>Hyphasis</b> (heute Beas) weigerte sich das Heer weiterzuziehen. Er ließ zwölf Altäre errichten und kehrte um. Auch die größten Feldherren sind auf die Zustimmung derer angewiesen, die ihnen folgen."
    },
    {
      type: "text",
      title: "4. Nach Alexander: die Diadochen und die hellenistischen Reiche",
      html: `<p>Alexander starb ohne geeigneten Erben (sein Sohn Alexander IV. wurde erst nach seinem Tod geboren). Seine Generäle, die <b>Diadochen</b> („Nachfolger“), stritten in langen Kriegen um das Reich, und nach der Schlacht bei <b>Ipsos</b> (301 v. Chr.) bildeten sich drei große Reiche, zu denen weitere hinzukamen:</p>
<ul>
<li><b>Reich der Ptolemäer</b> (Ägypten): gegründet von <b>Ptolemaios I.</b>, Hauptstadt <b>Alexandria</b>. Es bestand bis zum Tod von <b>Kleopatra VII.</b> (30 v. Chr.), der letzten Königin, als Rom es annektierte.</li>
<li><b>Reich der Seleukiden</b> (Syrien, Mesopotamien, Persien): gegründet von <b>Seleukos I.</b>, Hauptstadt Antiochia; das größte, aber am schwersten zusammenzuhaltende.</li>
<li><b>Reich der Antigoniden</b> (Makedonien und Griechenland): traditioneller, nahe bei Rom.</li>
<li>Weitere: das Reich von <b>Pergamon</b> (Attaliden), das griechisch-baktrische Reich (Afghanistan), das Reich von Syrakus.</li>
</ul>
<p>Diese Reiche waren <b>absolute Monarchien</b>: Der König war Heerführer, Richter und manchmal vergöttlicht. Untereinander führten sie ständig Kriege um die Kontrolle von Gebieten wie Syrien. Die alten griechischen Poleis, immer kleiner und schwächer, bildeten Bünde (wie den Achaiischen und den Aitolischen Bund), um sich zu behaupten.</p>`
    },
    {
      type: "text",
      title: "5. Was ist der Hellenismus?",
      html: `<p>Der Begriff <b>Hellenismus</b> (vom deutschen Historiker Droysen, 19. Jahrhundert) bezeichnet die Zeit vom Tod Alexanders (323 v. Chr.) bis zur römischen Eroberung Ägyptens (30 v. Chr.) und die Kultur, die sie prägt: eine <b>erweiterte und mit orientalischen Kulturen vermischte griechische Zivilisation</b>.</p>
<ul>
<li><b>Gemeinsame Sprache</b>: die <b>Koine</b>, ein vereinfachtes Griechisch, das von Ägypten bis Persien gesprochen und geschrieben wurde. Auch das Neue Testament wird in Koine verfasst werden.</li>
<li><b>Neue Städte</b>: Alexander und seine Nachfolger gründeten Dutzende Städte mit griechischem Namen (die Alexandrias, die Antiochias, die Seleukeias) mit Gymnasien, Theatern, Tempeln, Märkten. Eine neue griechische Elite regierte die einheimische Bevölkerung.</li>
<li><b>Begegnung der Kulturen</b>: Kult der Isis und des Serapis, griechisch-buddhistische Kunst von Gandhara (Buddha-Gesichter mit griechischen Zügen), Vermischung von Gottheiten.</li>
<li><b>Kosmopolitismus</b>: Nach der Krise der Polis fühlt sich der Mensch nicht mehr als „Bürger einer Stadt“, sondern als <b>Weltbürger</b> (<i>kosmopolítes</i>).</li>
<li><b>Wirtschaft</b>: großer Handel und gemeinsame Münzen, Seewege und Karawanen bis nach Indien und China.</li>
</ul>
<p>Nicht alle profitierten jedoch davon: Die Griechen herrschten, die Einheimischen blieben oft am Rand. Und es fehlte nicht an Aufständen, wie dem der Makkabäer in Judäa gegen den seleukidischen König Antiochos IV. (167 v. Chr.).</p>`
    },
    {
      type: "text",
      title: "6. Hellenistische Wissenschaft, Philosophie, Kunst",
      html: `<p>Die hellenistischen Könige förderten die Kultur aus Prestigegründen. Das Zentrum war <b>Alexandria in Ägypten</b> mit dem <b>Museion</b> (Forschungsinstitut) und der <b>Bibliothek</b>, die alle Bücher der Welt sammeln wollte (Schätzungen sprechen von Hunderttausenden Schriftrollen). Der <b>Leuchtturm</b> von Alexandria (um 280 v. Chr., über 100 Meter hoch) war eines der sieben Weltwunder.</p>
<ul>
<li><b>Mathematik</b>: <b>Euklid</b> schrieb die <i>Elemente</i> (um 300 v. Chr.), das Geometrielehrbuch, das über zweitausend Jahre benutzt wurde. <b>Archimedes</b> von Syrakus (287-212 v. Chr.) berechnete Flächen und Volumen und fand das Hebelgesetz und das Gesetz der Hydrostatik („Heureka!“).</li>
<li><b>Astronomie und Geografie</b>: <b>Aristarch von Samos</b> schlug vor, dass die Erde um die Sonne kreise. <b>Eratosthenes</b> maß den Erdumfang (etwa 40.000 km) mit dem Schatten eines Stabes in Syene und Alexandria. <b>Hipparch</b> katalogisierte die Sterne.</li>
<li><b>Medizin</b>: Herophilos und Erasistratos erforschten Anatomie und Nervensystem.</li>
<li><b>Philosophie</b>: <b>Stoizismus</b> (Zenon: gemäß Vernunft und Natur leben, das Schicksal annehmen), <b>Epikureismus</b> (Epikur: innere Gelassenheit, die <i>Ataraxie</i>), <b>Skeptizismus</b>, <b>Kynismus</b>. Sie suchen das persönliche Glück in einer großen und ungewissen Welt.</li>
<li><b>Kunst</b>: dramatischer und realistischer: die <b>Laokoon-Gruppe</b>, die <b>Nike von Samothrake</b>, die <b>Aphrodite von Milos</b>; realistische Porträts, Szenen des Alltagslebens.</li>
<li><b>Literatur</b>: Es entsteht die Philologie (Textforschung) und die feine Dichtung des Kallimachos und Theokrit.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Erde mit einem Stab messen",
      html: `<p><b>Eratosthenes</b>, Leiter der Bibliothek von Alexandria (um 240 v. Chr.), erfuhr, dass in Syene (heute Assuan) am Tag der Sommersonnenwende mittags die Sonne den Grund eines Brunnens beleuchtet (sie steht senkrecht). In Alexandria wirft im selben Augenblick ein senkrechter Stab einen Schatten: Der Winkel beträgt etwa <b>7,2°</b>, also 1/50 eines Vollwinkels.</p>
<ol>
<li>Wenn 7,2° der Entfernung Alexandria-Syene entsprechen (etwa 5000 Stadien),</li>
<li>dann ist der ganze Umfang 50-mal so groß: 250.000 Stadien.</li>
<li>Mit dem wahrscheinlichsten Stadion (etwa 157-185 m) erhält man etwa <b>40.000-46.000 km</b>: weniger als 15 % vom wahren Wert (40.075 km) entfernt.</li>
</ol>
<p>Mit elementarer Geometrie, einem Stab und einer genialen Idee wurde der Planet vermessen. Du kannst das Experiment mit einem Freund in einer anderen Stadt und einem Gnomon wiederholen!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: griechische Wörter von heute",
      html: `<p>Die Koine und die hellenistische Wissenschaft haben uns einen riesigen Wortschatz hinterlassen: <b>Geometrie</b> (Landvermessung), <b>Bibliothek</b>, <b>Museum</b> (Haus der Musen), <b>Philologie</b>, <b>kosmopolitisch</b>, <b>Gymnasium</b>. Wenn wir von <b>„epikureisch“</b> (dem Genuss ergeben) oder <b>„stoisch“</b> (unerschütterlich) sprechen, benutzen wir Wörter aus den hellenistischen Schulen, wenn auch oft mit anderer Bedeutung: Epikur sah als Lust vor allem die Gelassenheit des Geistes, nicht den Luxus!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Der Gordische Knoten",
      html: `<p>In Gordion in Phrygien besagte ein Orakel, wer einen äußerst verschlungenen Knoten löse, der einen Wagen an sein Joch band, werde Herr über Asien. Alexander <b>durchschlug ihn</b> der Legende nach mit dem Schwert, weil er ihn nicht lösen konnte. Daher die Redewendung „den Gordischen Knoten durchhauen“: ein schwieriges Problem mit einer entschlossenen Tat lösen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Das verlorene Grab",
      html: `<p>Der Leichnam Alexanders wurde von Ptolemaios I. nach Ägypten gebracht und in Alexandria beigesetzt, wo das Grab jahrhundertelang von römischen Kaisern (Augustus, Caracalla) besucht wurde. Dann verlor sich jede Spur: Trotz vieler Suchen hat nie jemand das Grab wiedergefunden. Es ist eines der großen Rätsel der Archäologie.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, den Hellenismus zu verstehen",
      intro: "Eine Kultur, die verschiedene Welten zusammenbringt: hier einige Vergleiche.",
      tabs: [
        {
          label: "🍲 Die Suppe der Welt",
          html: `<p>Stell dir den Hellenismus als große <b>Suppe</b> vor: Die Brühe ist die <b>griechische Kultur</b> (Sprache, Philosophie, Theater, Städte), zu der Zutaten aus dem Orient kommen (ägyptische und persische Religionen, babylonische Wissenschaft, indische Kunst). Das Ergebnis ist weder nur griechisch noch nur orientalisch: Es ist eine <b>gemischte</b> Kultur.</p>
<p>Beispiel: Ein indo-griechischer König von Baktrien, Menander (2. Jh. v. Chr.), spricht mit einem buddhistischen Mönch in einem berühmten Text, dem „Milindapañha“. Eine Münze mit griechischem Text auf der einen und indischem auf der anderen Seite: ein Gegenstand, der zwei Sprachen spricht.</p>`
        },
        {
          label: "🏛️ Vor und nach Alexander",
          html: `<table>
<tr><th></th><th>Vorher (klassische Polis)</th><th>Nachher (hellenistische Zeit)</th></tr>
<tr><td>Staat</td><td>Kleine Polis von Bürgern</td><td>Großes Reich mit einem König</td></tr>
<tr><td>Bürger</td><td>Nimmt am politischen Leben teil</td><td>Untertan, oft fern der Macht</td></tr>
<tr><td>Philosophie</td><td>Politik und öffentliche Tugend</td><td>Persönliches Glück und Kosmopolitismus</td></tr>
<tr><td>Kultur</td><td>Vor allem griechisch</td><td>Gemischt griechisch-orientalisch</td></tr>
<tr><td>Sprache</td><td>Griechische Dialekte</td><td>Gemeinsame Koine</td></tr>
</table>`
        },
        {
          label: "🗺️ Dreh den Globus",
          html: `<p>Dreh den Globus und folge dem Marsch Alexanders und den großen hellenistischen Städten.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 40.76, lon: 22.52, label: "Pella", color: "#2563eb" },
              { lat: 36.8, lon: 36.2, label: "Issos", color: "#ef4444" },
              { lat: 31.2, lon: 29.9, label: "Alexandria", color: "#16a34a" },
              { lat: 36.4, lon: 43.3, label: "Gaugamela", color: "#ef4444" },
              { lat: 32.5, lon: 44.4, label: "Babylon", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persepolis", color: "#ef4444" },
              { lat: 32.7, lon: 73.4, label: "Hydaspes", color: "#ef4444" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6], color: "#dc2626" }]
          }
        },
        {
          label: "📅 Zeitleiste",
          html: `<p>Geh das Leben Alexanders und seiner Nachfolger durch.</p>`,
          widget: "timeline",
          options: {
            unit: "Jahre",
            events: [
              { year: -356, label: "Geburt Alexanders", icon: "👶" },
              { year: -338, label: "Chaironeia", icon: "⚔️" },
              { year: -334, label: "Granikos", icon: "🏇" },
              { year: -331, label: "Gaugamela, Alexandria", icon: "🏛️" },
              { year: -326, label: "Hydaspes", icon: "🐘" },
              { year: -323, label: "Tod Alexanders", icon: "🕯️" },
              { year: -301, label: "Ipsos, hellenistische Reiche", icon: "👑" },
              { year: -146, label: "Rom zerstört Korinth", icon: "🦅" },
              { year: -30, label: "Ende des ptolemäischen Ägypten", icon: "🏺" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Karte: von Philipp zum Hellenismus",
      nodes: [
        { id: "filippo", label: "Philipp II.", x: 50, y: 6, color: "#0ea5e9", html: "Stärkt Heer und Staat; siegt bei Chaironeia (338 v. Chr.).", why: "Die Poleis waren erschöpft und gespalten; Philipp verstand es, Diplomatie, das Geld der Minen und ein neues Heer mit der Sarissa zu verbinden." },
        { id: "alessandro", label: "Alexander", x: 22, y: 30, color: "#ef4444", html: "Erobert das Perserreich (334-323 v. Chr.).", why: "Er erbte ein fertiges Heer und einen panhellenischen Traum; die persische Schwäche und seine Kühnheit taten den Rest." },
        { id: "fusione", label: "Verschmelzung der Kulturen", x: 78, y: 30, color: "#16a34a", html: "Hochzeiten von Susa, neue Städte, Übernahme persischer Bräuche.", why: "Um verschiedene Völker zu regieren, versuchte Alexander, griechisch-makedonische und persische Eliten zu vereinen; viele Makedonen akzeptierten das jedoch nicht." },
        { id: "diadochi", label: "Diadochenkriege", x: 50, y: 52, color: "#f97316", html: "Die Generäle streiten um das Reich (323-301 v. Chr.).", why: "Das Reich war zu groß und zu sehr auf seine Person zugeschnitten: Ohne erwachsenen Erben teilten die Generäle es unter sich auf." },
        { id: "regni", label: "Hellenistische Reiche", x: 20, y: 75, color: "#7c3aed", html: "Ptolemäer, Seleukiden, Antigoniden, Pergamon.", why: "Monarchien auf der Grundlage professioneller Heere und griechischer Beamter, die einheimische Bevölkerungen regierten: groß, aber instabil." },
        { id: "cultura", label: "Hellenistische Kultur", x: 80, y: 75, color: "#eab308", html: "Koine, Wissenschaft, Philosophien, gemischte Kunst.", why: "Die Könige finanzierten Forschung aus Prestigegründen; die gemeinsame Sprache und die neuen Städte erleichterten den Austausch von Ideen über ein riesiges Gebiet." },
        { id: "roma", label: "Römische Eroberung", x: 50, y: 95, color: "#334155", html: "Makedonien 168, Korinth 146, Pergamon 133, Ägypten 30 v. Chr.", why: "Die durch innere Kriege geschwächten Reiche fielen eines nach dem anderen an Rom, das ihre Kultur erbte." }
      ],
      edges: [
        ["filippo", "alessandro", "bereitet vor"],
        ["alessandro", "fusione", "fördert die"],
        ["alessandro", "diadochi", "hinterlässt die"],
        ["diadochi", "regni", "schaffen die"],
        ["fusione", "cultura", "nährt die"],
        ["regni", "cultura", "finanzieren die"],
        ["regni", "roma", "fallen an"],
        ["cultura", "roma", "geerbt von"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: der Hellenismus",
      questions: [
        { type: "mc", q: "Was ist die Koine?", options: ["Die gemeinsame griechische Sprache der hellenistischen Zeit", "Eine Schiffsart", "Eine Versammlung"], answer: 0, explain: "Vereinfachtes Griechisch, das im ganzen Reich benutzt wurde." },
        { type: "mc", q: "Wo befand sich das Museion mit der großen Bibliothek?", options: ["Alexandria", "Athen", "Pergamon"], answer: 0, explain: "Alexandria in Ägypten, Hauptstadt der Ptolemäer." },
        { type: "tf", q: "Eratosthenes maß den Erdumfang mit guter Genauigkeit.", answer: true, explain: "Mit dem Schatten eines Stabes in Syene und Alexandria." },
        { type: "mc", q: "Welche Dynastie herrschte nach Alexander über Ägypten?", options: ["Die Ptolemäer", "Die Seleukiden", "Die Antigoniden"], answer: 0, explain: "Gegründet von Ptolemaios I." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Philipp II.</b> (359-336 v. Chr.) einigt Griechenland unter Makedonien (Chaironeia, 338). <b>Alexander</b> (356-323 v. Chr.) erobert das Perserreich: Granikos, Issos, Gaugamela, Indien.</li>
<li>Nach Alexanders Tod teilen die <b>Diadochen</b> das Reich: <b>Ptolemäer</b>, <b>Seleukiden</b>, <b>Antigoniden</b>.</li>
<li><b>Hellenismus</b>: erweiterte und mit der orientalischen vermischte griechische Kultur, Koine, Kosmopolitismus.</li>
<li>Alexandria: Museion, Bibliothek, Leuchtturm. <b>Euklid</b>, <b>Archimedes</b>, <b>Eratosthenes</b>, <b>Aristarch</b>.</li>
<li>Ende des Hellenismus: römische Eroberung (Makedonien 168/146, Ägypten 30 v. Chr.).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Sarissa", d: "Lange Lanze des makedonischen Fußvolks." },
    { t: "Makedonische Phalanx", d: "Geschlossenes Fußvolk, mit Sarissen bewaffnet." },
    { t: "Korinthischer Bund", d: "Bündnis der Poleis unter der Führung Philipps II." },
    { t: "Diadochen", d: "Die Generäle, die Alexanders Nachfolger wurden." },
    { t: "Hellenismus", d: "Griechische Zivilisation, ausgedehnt und mit orientalischen Kulturen vermischt (323-30 v. Chr.)." },
    { t: "Koine", d: "Gemeinsames Griechisch, das in der ganzen hellenistischen Welt gesprochen wurde." },
    { t: "Kosmopolitismus", d: "Sich als Weltbürger fühlen und nicht nur als Bürger einer Polis." },
    { t: "Museion", d: "Forschungsinstitut in Alexandria." },
    { t: "Stoizismus", d: "Philosophie, die dazu auffordert, gemäß Vernunft und Natur zu leben." },
    { t: "Epikureismus", d: "Philosophie, die Gelassenheit sucht, indem sie Schmerz vermeidet." },
    { t: "Satrap", d: "Statthalter einer persischen Provinz." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche Schlacht des Jahres 338 v. Chr. gab Philipp II. die Kontrolle über Griechenland?", options: ["Chaironeia", "Marathon", "Gaugamela"], answer: 0, explain: "Chaironeia, gegen Athen und Theben." },
      { type: "mc", q: "Wer war der Lehrer Alexanders?", options: ["Aristoteles", "Platon", "Euklid"], answer: 0, explain: "Aristoteles." },
      { type: "tf", q: "Alexander eroberte das Perserreich in wenigen Jahren.", answer: true, explain: "Zwischen 334 und 330 v. Chr. eroberte er den größten Teil des Reiches." },
      { type: "text", q: "Wie heißen die Generäle, die das Reich nach dem Tod Alexanders unter sich aufteilten?", answer: ["Diadochen", "die Diadochen", "diadochen"], explain: "Die Diadochen, „Nachfolger“." },
      { type: "mc", q: "Welche von Alexander gegründete Stadt wurde zur Kulturhauptstadt?", options: ["Alexandria in Ägypten", "Antiochia", "Pella"], answer: 0, explain: "Mit Museion und Bibliothek." },
      { type: "mc", q: "Welcher Wissenschaftler aus Syrakus erforschte Hebel und Hydrostatik?", options: ["Archimedes", "Euklid", "Eratosthenes"], answer: 0, explain: "Archimedes (287-212 v. Chr.)." },
      { type: "order", q: "Bringe die Ereignisse in die chronologische Reihenfolge.", items: ["Chaironeia", "Granikos", "Gaugamela", "Tod Alexanders", "Schlacht bei Ipsos"], explain: "338, 334, 331, 323, 301 v. Chr." },
      { type: "mc", q: "Welches der folgenden ist KEIN hellenistisches Reich?", options: ["Römisches Reich", "Reich der Ptolemäer", "Reich der Seleukiden"], answer: 0, explain: "Rom war eine andere Macht." },
      { type: "num", q: "Mit wie vielen Jahren starb Alexander der Große?", answer: 32, tol: 1, explain: "Er wurde 356 geboren und starb 323 v. Chr., mit etwa 32 Jahren." },
      { type: "tf", q: "Der Hellenismus war nur die Verbreitung der griechischen Kultur, ohne orientalische Einflüsse.", answer: false, explain: "Er war eine Begegnung und Vermischung von Kulturen." },
      { type: "mc", q: "Womit maß Eratosthenes die Erde?", options: ["Mit dem Schatten eines Stabes in zwei Städten", "Mit einem Teleskop", "Mit dem Kompass"], answer: 0, explain: "Er verglich den Winkel des Schattens in Alexandria und in Syene." }
    ]
  }
});
