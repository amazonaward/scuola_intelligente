TOPIC('de', {
  id: "l1-sto-guerre-persiane-pericle",
  title: "Perserkriege und das Zeitalter des Perikles",
  intro: "Im Jahr <b>490 v. Chr.</b> trat ein kleines Heer athenischer Bürger bei Marathon den Truppen des größten Reiches der Welt entgegen und schlug sie. Zehn Jahre später vernichtete bei Salamis eine griechische Flotte die des Xerxes. Es war der Augenblick, in dem eine Handvoll freier Städte den Westen vor der Herrschaft eines absoluten Königs bewahrte: oder zumindest erzählten es die Griechen so. Aus diesem Sieg ging das <b>Goldene Zeitalter Athens</b> hervor, mit <b>Perikles</b>, der fortschrittlichsten Demokratie der Antike, dem Parthenon, dem Theater und der Philosophie. Aber gerade die Macht Athens löste den Krieg mit Sparta aus, der es in den Ruin stürzte.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Das Perserreich und der Aufstand der ionischen Städte",
      html: `<p>Im 6. Jh. v. Chr. schufen die <b>Perser</b> unter <b>Kyros dem Großen</b> (559-530 v. Chr.) das größte Reich, das es bis dahin gegeben hatte: von der Ägäis bis Indien, einschließlich Babylon, Lydien und Ägypten (von Kambyses 525 v. Chr. erobert). Unter <b>Dareios I.</b> (522-486 v. Chr.) wurde das Reich in <b>Satrapien</b> eingeteilt, die von Satrapen verwaltet wurden und durch die <b>Königsstraße</b> mit Poststationen verbunden waren; die Perser achteten die Sprachen und Religionen der unterworfenen Völker, verlangten aber <b>Tribute</b> und Soldaten.</p>
<p>Die <b>griechischen Städte Kleinasiens</b> (Ionien: Milet, Ephesos, Phokaia) waren Untertanen der Perser. Im Jahr <b>499 v. Chr.</b> erhoben sie sich (<b>Ionischer Aufstand</b>), und <b>Athen</b> und <b>Eretria</b> schickten einige Schiffe zu Hilfe. Die Perser schlugen den Aufstand nieder und zerstörten Milet (494 v. Chr.), und Dareios beschloss, die beiden „aufständischen“ Städte des griechischen Festlands zu bestrafen. Für die Perser war es eine Frage der Reichsordnung; für die Griechen sollte es zum Kampf um die Freiheit werden.</p>`
    },
    {
      type: "text",
      title: "2. Der Erste Perserkrieg und Marathon (490 v. Chr.)",
      html: `<p>Im Jahr <b>490 v. Chr.</b> landete eine persische Flotte in der Ebene von <b>Marathon</b>, etwa 40 km von Athen entfernt, nachdem sie Eretria zerstört hatte. Die Athener unter dem Strategen <b>Miltiades</b> stellten rund 10.000 Hopliten auf (unterstützt von etwa tausend Plataiern) gegen persische Streitkräfte, die auf viele tausend Mann geschätzt werden. Sparta kam aus religiösen Gründen zu spät.</p>
<p>Die griechische <b>Phalanx</b> mit Bronzepanzern, Schilden und langen Lanzen griff im Laufschritt an, verstärkte die Flügel und umschloss die Mitte der Perser. Es war ein überwältigender Sieg: Die Perser verloren etwa 6400 Mann, die Athener 192. Die Legende erzählt, dass ein Bote, <b>Pheidippides</b>, nach Athen lief, um „Wir haben gesiegt!“ zu verkünden, und an der Anstrengung starb (daher der <b>Marathonlauf</b> von 42,195 km). Der Geschichtsschreiber Herodot berichtet dagegen, dass Pheidippides vor der Schlacht nach Sparta lief, um Hilfe zu holen, etwa 240 km in zwei Tagen.</p>
<p>Nach Marathon bereitete Dareios einen neuen Feldzug vor, starb aber 486 v. Chr.</p>`
    },
    {
      type: "3d",
      title: "3D-Karte: von den Perserkriegen zum Peloponnesischen Krieg",
      scene: "spacetime",
      caption: "Die Grundfläche ist die Karte des östlichen Mittelmeers, die Höhe ist die Zeit (500-400 v. Chr.). Tippe auf die Ereignisse: Die Pfeile verbinden Ursachen und Wirkungen.",
      options: {
        lat: [33, 42],
        lon: [14, 30],
        years: [-500, -400],
        places: [
          { lat: 37.97, lon: 23.72, label: "Athen" },
          { lat: 37.08, lon: 22.43, label: "Sparta" },
          { lat: 37.53, lon: 27.28, label: "Milet" },
          { lat: 37.07, lon: 15.29, label: "Syrakus" }
        ],
        events: [
          { id: "ionica", lat: 37.53, lon: 27.28, year: -499, label: "Ionischer Aufstand", html: "Die griechischen Städte in Asien erheben sich gegen die Perser. Athen und Eretria schicken Schiffe: Das ist der Vorwand für den Krieg.", causes: [] },
          { id: "maratona", lat: 38.15, lon: 23.96, year: -490, label: "Marathon", html: "Die Athener unter Miltiades schlagen die persische Landung: 192 tote Athener gegen etwa 6400 Perser. Sieg des Bürgerheeres.", causes: ["ionica"] },
          { id: "termopili", lat: 38.8, lon: 22.54, year: -480, label: "Thermopylen", html: "August 480 v. Chr.: Leonidas hält mit 300 Spartiaten und einigen tausend Verbündeten drei Tage lang das Heer des Xerxes auf, wird dann umgangen und stirbt mit den Seinen.", causes: ["maratona"] },
          { id: "atene480", lat: 37.97, lon: 23.72, year: -480, label: "Athen geräumt und niedergebrannt", html: "Die Perser besetzen Athen und stecken die Akropolis in Brand. Auf den Rat des Themistokles hatten sich die Athener auf die Schiffe und nach Salamis geflüchtet.", causes: ["termopili"] },
          { id: "salamina", lat: 37.95, lon: 23.5, year: -480, label: "Salamis", html: "September 480 v. Chr.: Die griechische Flotte des Themistokles lockt die persischen Schiffe in die Meerenge von Salamis und vernichtet sie: Xerxes kehrt nach Asien zurück.", causes: ["atene480"] },
          { id: "platea", lat: 38.22, lon: 23.27, year: -479, label: "Plataiai und Mykale", html: "479 v. Chr. siegen die Griechen bei Plataiai (Landheer) und bei Mykale (Flotte): Die persische Gefahr ist vorbei.", causes: ["salamina"] },
          { id: "delo", lat: 37.4, lon: 25.27, year: -478, label: "Attisch-Delischer Seebund", html: "478-477 v. Chr. führt Athen auf Delos einen Bund von Poleis an, um den Krieg fortzusetzen: Jede Stadt zahlt Tribut oder stellt Schiffe. Bald verwandelt Athen ihn in ein Reich.", causes: ["platea"] },
          { id: "partenone", lat: 37.97, lon: 23.72, year: -447, label: "Parthenon", html: "Unter Perikles beginnen (447 v. Chr.) die Arbeiten am Parthenon auf der Akropolis, teilweise mit dem Schatz des Bundes finanziert (454 nach Athen verlegt).", causes: ["delo"] },
          { id: "peloponneso", lat: 37.08, lon: 22.43, year: -431, label: "Peloponnesischer Krieg", html: "431 v. Chr. bricht der Krieg zwischen Athen und Sparta (mit dem Peloponnesischen Bund) aus: Er wird bis 404 v. Chr. dauern.", causes: ["partenone"] },
          { id: "sicilia", lat: 37.07, lon: 15.29, year: -413, label: "Katastrophe in Sizilien", html: "Der athenische Feldzug gegen Syrakus (415-413 v. Chr.) endet mit der Vernichtung von Flotte und Heer.", causes: ["peloponneso"] },
          { id: "egospotami", lat: 40.35, lon: 26.55, year: -405, label: "Aigospotamoi", html: "405 v. Chr. vernichtet die von den Persern finanzierte spartanische Flotte die athenische. Athen ergibt sich 404.", causes: ["sicilia"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Der Zweite Perserkrieg: Thermopylen und Salamis (480-479 v. Chr.)",
      html: `<p>Im Jahr <b>480 v. Chr.</b> fiel der neue König <b>Xerxes</b> mit einem gewaltigen Heer (Herodots Zahlen, über eine Million, sind übertrieben: vielleicht 100.000-200.000 Mann) und einer großen Flotte in Griechenland ein. Die griechischen Poleis verbündeten sich trotz ihrer Spaltung unter der Führung Spartas für das Heer und Athens für die Flotte.</p>
<ul>
<li><b>Thermopylen</b>: In dem engen Pass hält der spartanische König <b>Leonidas</b> drei Tage lang stand; von einem Griechen verraten, der den Persern einen Pfad zeigt, wird er umgangen und stirbt mit seinen Männern. Das Opfer stärkt den Widerstand.</li>
<li><b>Athen geräumt</b>: Die Athener verlassen die Stadt, die geplündert und niedergebrannt wird.</li>
<li><b>Salamis</b> (September 480 v. Chr.): <b>Themistokles</b>, athenischer Stratege, hatte mit den Erträgen der Silberminen von Laurion eine große Flotte von <b>Trieren</b> (Kriegsschiffen mit drei Ruderreihen) bauen lassen. Er lockt die Perser in die Meerenge, in der sich die größeren Schiffe gegenseitig behindern. Es war ein entscheidender Sieg.</li>
<li><b>Plataiai und Mykale</b> (479 v. Chr.): Siege zu Land und zu Wasser, die Griechenland befreien.</li>
</ul>
<p>Für die Griechen war es der Sieg der <b>Freiheit</b> der Bürger über den Despotismus eines Königs, so wie ihn <b>Herodot</b>, der „Vater der Geschichtsschreibung“, in seinen <i>Historien</i> erzählte. Denk aber daran, dass auch die Geschichte der Perser von den Siegern geschrieben wurde: Für sie war es ein Randfeldzug in einer fernen Provinz.</p>`
    },
    {
      type: "svg",
      title: "Die Schlacht bei Salamis (Schema)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#bae6fd"/>
<path d="M0 0 L600 0 L600 60 Q520 90 480 130 L480 300 L0 300 Z" fill="#d6d3d1"/>
<path d="M0 300 L0 120 Q80 160 120 200 L200 300 Z" fill="#a8a29e"/>
<text x="60" y="260" font-size="16" font-weight="bold" fill="#0f172a">ATTIKA</text>
<text x="500" y="40" font-size="16" font-weight="bold" fill="#0f172a">SALAMIS</text>
<g fill="#2563eb" stroke="#1e3a8a" stroke-width="2">
<polygon points="260,210 300,200 300,220"/><polygon points="260,240 300,230 300,250"/><polygon points="250,180 290,170 290,190"/>
</g>
<g fill="#dc2626" stroke="#7f1d1d" stroke-width="2">
<polygon points="440,130 400,120 400,140"/><polygon points="430,170 390,160 390,180"/><polygon points="460,100 420,90 420,110"/><polygon points="420,210 380,200 380,220"/>
</g>
<path d="M330 140 L360 140" stroke="#dc2626" stroke-width="3"/>
<text x="120" y="110" font-size="15" fill="#1e3a8a" font-weight="bold">Griechische Flotte</text>
<text x="400" y="260" font-size="15" fill="#7f1d1d" font-weight="bold">Persische Flotte</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#0f172a">Vereinfachtes Schema: In der Meerenge können die persischen Schiffe nicht manövrieren.</text>
</svg>`,
      caption: "Bei Salamis nutzten die kleineren, wendigeren griechischen Schiffe den engen Raum gegen die zahlreichere persische Flotte."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Perserkriege",
      questions: [
        { type: "mc", q: "Wer führte die Athener bei Marathon an?", options: ["Miltiades", "Perikles", "Leonidas"], answer: 0, explain: "Der Stratege Miltiades, im Jahr 490 v. Chr." },
        { type: "mc", q: "In welcher Seeschlacht besiegte Themistokles die Perser?", options: ["Salamis", "Mykale", "Aigospotamoi"], answer: 0, explain: "Bei Salamis, September 480 v. Chr." },
        { type: "tf", q: "Leonidas und seine Männer verteidigten den Pass der Thermopylen monatelang.", answer: false, explain: "Sie hielten drei Tage stand, dann wurden sie umgangen." },
        { type: "text", q: "Wie heißt der „Vater der Geschichtsschreibung“, der die Perserkriege erzählte?", answer: ["Herodot", "herodot"], explain: "Herodot von Halikarnassos." }
      ]
    },
    {
      type: "text",
      title: "4. Vom Attisch-Delischen Seebund zum Reich Athens",
      html: `<p>Nach dem Sieg gründete Athen <b>478-477 v. Chr.</b> den <b>Attisch-Delischen Seebund</b> (nach Delos, wo der Schatz aufbewahrt wurde) mit Hunderten von Poleis der Ägäis. Jeder Verbündete stellte Schiffe oder zahlte einen <b>Tribut</b> (<i>phoros</i>). Athen befehligte die Flotte und verwendete das Geld zu seinem eigenen Vorteil: Im Jahr <b>454 v. Chr.</b> wurde der Schatz nach Athen gebracht, und wer den Bund verlassen wollte (wie Naxos und Thasos), wurde mit Gewalt unterworfen. Der Bund wurde zu einem regelrechten <b>Seereich</b>, das Athen bereicherte und es für Sparta zu einer Bedrohung machte.</p>
<p>Dass eine demokratische Macht andere freie Städte unterdrückte, ist ein Beispiel für einen Widerspruch, den schon die Griechen bemerkten: Die Freiheit der Bürger Athens beruhte auf dem Tribut der Verbündeten und der Arbeit der Sklaven.</p>`
    },
    {
      type: "text",
      title: "5. Perikles und die athenische Demokratie",
      html: `<p><b>Perikles</b> (etwa 495-429 v. Chr.), ein Aristokrat, aber Führer der Volkspartei, wurde von 443 bis 429 v. Chr. fast jedes Jahr zum <b>Strategen</b> (Heerführer, eines der wenigen gewählten Ämter) wiedergewählt. Der Geschichtsschreiber <b>Thukydides</b> sagte, Athen sei „dem Namen nach eine Demokratie, in Wirklichkeit aber die Herrschaft des ersten Mannes“.</p>
<ul>
<li><b>Ekklesia</b>: Versammlung aller erwachsenen männlichen Bürger (etwa 30.000-40.000), die über Krieg, Frieden, Gesetze und Tribute entscheidet; abgestimmt wird per Handzeichen.</li>
<li><b>Boule der 500</b>: ausgelostes Gremium, das die Anträge vorbereitet; abwechselnd führt jeweils ein Teil von ihm täglich die Geschäfte.</li>
<li><b>Heliaia</b>: große Volksgerichte mit ausgelosten Geschworenen (bis zu 501).</li>
<li><b>Losverfahren</b>: Fast alle Ämter werden durch Los vergeben, weil alle als gleichermaßen fähig gelten.</li>
<li><b>Misthos</b>: Perikles führt eine Entschädigung für die Ausübung öffentlicher Ämter ein, damit auch die Armen teilnehmen können, ohne Verlust zu machen.</li>
</ul>
<p>In der berühmten <b>Rede an die Athener</b> zu Ehren der Gefallenen (431 oder 430 v. Chr.), die Thukydides überliefert, sagt Perikles: „Unsere Verfassung heißt Demokratie, weil die Macht nicht in den Händen weniger, sondern der Mehrheit liegt.“ Er erinnert aber auch an die Grenzen: Von der Macht blieben <b>Frauen, Sklaven und Metöken</b> (ansässige Fremde) ausgeschlossen: etwa drei Viertel der Bevölkerung.</p>`
    },
    {
      type: "text",
      title: "6. Das Goldene Zeitalter: Kunst, Theater, Denken",
      html: `<p>Mit den Tributen des Bundes wird Athen zum kulturellen Mittelpunkt der griechischen Welt.</p>
<ul>
<li><b>Architektur</b>: Auf der nach dem persischen Brand wiederaufgebauten Akropolis entsteht der <b>Parthenon</b> (447-432 v. Chr.), ein Tempel der Athena von Iktinos und Kallikrates mit Skulpturen unter der Leitung des <b>Phidias</b>. Er ist ein Vorbild für Harmonie und Proportion (dorische Ordnung).</li>
<li><b>Theater</b>: aus den Festen des Dionysos hervorgegangen, mit den Tragödien des <b>Aischylos</b> (<i>Die Perser</i>), <b>Sophokles</b> (<i>König Ödipus</i>, <i>Antigone</i>) und <b>Euripides</b> (<i>Medea</i>) und den Komödien des <b>Aristophanes</b>. Das Theater war ein bürgerschaftliches Erlebnis: Die Bürger diskutierten über Gerechtigkeit und Macht.</li>
<li><b>Geschichtsschreibung</b>: <b>Herodot</b> und <b>Thukydides</b> (Verfasser einer Geschichte des Peloponnesischen Krieges, die auf Belegen und Befragungen beruht, ohne Eingreifen von Göttern).</li>
<li><b>Philosophie</b>: Die <b>Sophisten</b> lehren die Kunst der Rede; <b>Sokrates</b> (469-399 v. Chr.) befragt die Bürger über Tugend und Gerechtigkeit („Ich weiß, dass ich nichts weiß“).</li>
<li><b>Medizin</b>: <b>Hippokrates</b> von Kos, der nach natürlichen Ursachen der Krankheiten sucht.</li>
</ul>
<p>Athen hatte in dieser Zeit etwa 250.000-300.000 Einwohner (mit Attika) und einen der betriebsamsten Häfen des Mittelmeers, den Piräus.</p>`
    },
    {
      type: "decision",
      title: "Athen, 431 v. Chr.: Sparta im Feld entgegentreten oder sich hinter den Langen Mauern verschanzen?",
      html: `<p>Du bist Perikles. Sparta und der Peloponnesische Bund stehen kurz davor, mit einem Hoplitenheer, das viel stärker ist als deines, in Attika einzufallen. Aber Athen hat die mächtigste <b>Flotte</b> des Mittelmeers und die <b>Langen Mauern</b>, die die Stadt mit dem Hafen von Piräus verbinden, über den sie Getreide auf dem Seeweg erhalten kann.</p>`,
      question: "Welche Strategie wählst du?",
      options: [
        { label: "Die Spartaner in offener Feldschlacht außerhalb der Mauern bekämpfen.", outcome: "Sparta hat das beste Landheer: Athen riskiert von Anfang an eine entscheidende Niederlage." },
        { label: "Die gesamte Bevölkerung in die Mauern aufnehmen, die Felder verwüsten lassen und mit der Flotte vom Meer aus zuschlagen.", outcome: "Das ist eine sinnvolle Strategie: Athen kann nicht ausgehungert werden, solange es das Meer beherrscht. Aber das Gedränge in der Stadt wird einen furchtbaren Preis haben: die Pest." },
        { label: "Sofort um Frieden bitten und die Vorherrschaft in der Ägäis aufgeben.", outcome: "Athen würde sein Reich und die Tribute verlieren: seinen Reichtum und seine Macht." }
      ],
      answer: 1,
      explain: "Perikles wählte die <b>defensive Strategie</b>: sich hinter den Mauern zu schützen und zur See zuzuschlagen. Im Jahr 430 v. Chr. brach in der überfüllten Stadt die <b>Pest</b> aus und tötete vielleicht ein Drittel der Bevölkerung, darunter Perikles selbst (429 v. Chr.). Ohne ihn folgte Athen impulsiveren Führern."
    },
    {
      type: "text",
      title: "7. Der Peloponnesische Krieg (431-404 v. Chr.)",
      html: `<p>Das Wachstum Athens ängstigte Sparta und seine Verbündeten (besonders Korinth). Thukydides schrieb, „die wahre Ursache war das Anwachsen der athenischen Macht und die Furcht, die sie Sparta einflößte“. Der Krieg gliedert sich in Phasen:</p>
<ul>
<li><b>Archidamischer Krieg</b> (431-421 v. Chr.): spartanische Einfälle in Attika, Streifzüge der athenischen Flotte, Pest (430-426). Er endet mit dem brüchigen <b>Nikiasfrieden</b> (421 v. Chr.).</li>
<li><b>Sizilische Expedition</b> (415-413 v. Chr.): Vom ehrgeizigen <b>Alkibiades</b> getrieben, greifen die Athener Syrakus an; die Expedition endet in einer Katastrophe: Flotte vernichtet, Tausende Gefangene.</li>
<li><b>Schlussphase</b> (413-404 v. Chr.): Sparta, von Persien finanziert, baut eine Flotte auf; <b>405 v. Chr.</b> vernichtet es bei <b>Aigospotamoi</b> die athenische. <b>404 v. Chr.</b> ergibt sich Athen: Mauern niedergerissen, Reich verloren. Kurze Zeit regiert eine spartafreundliche Oligarchie, die <b>Dreißig Tyrannen</b>, dann wird die Demokratie wiederhergestellt (403 v. Chr.).</li>
</ul>
<p><b>Folgen</b>: Ganz Griechenland geht erschöpft aus dem Krieg hervor, mit verwüsteten Städten, Bürgerkriegen und einer wenig geliebten spartanischen Hegemonie. Im Jahr 399 v. Chr. wurde Sokrates in einem Klima von Angst und Groll wegen Gottlosigkeit und Verführung der Jugend zum Tode verurteilt. Die geschwächten Poleis werden im 4. Jh. vom König von Makedonien, Philipp II., erobert werden.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Stimme der Sieger und der Besiegten",
      html: `<p>Fast alles, was wir über die Perserkriege wissen, stammt von <b>Herodot</b>, einem Griechen, und aus athenischen Texten. Die Perser hinterließen nur wenige schriftliche Berichte über das Geschehen. Welche Fragen stellt ein Historiker?</p>
<ol>
<li><b>Wer erzählt und warum?</b> Herodot will die Taten der Griechen rühmen und den Konflikt zwischen Griechen und Barbaren erklären.</li>
<li><b>Was wissen wir aus anderen Quellen?</b> Persische Inschriften (wie die des Dareios in Behistun) und Ausgrabungen zeigen, dass das Reich sehr gut organisiert und tolerant war; für die Perser war der Krieg ein Grenzfeldzug.</li>
<li><b>Was ist übertrieben?</b> Die Zahlen des Heeres des Xerxes, die sicherlich aufgebläht sind.</li>
</ol>
<p>Eine nur von einer Seite erzählte Geschichte ist immer unvollständig: Um sie zu verstehen, braucht man verschiedene Quellen.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Marathon von heute",
      html: `<p>Der Lauf über <b>42,195 km</b> geht auf eine Idee des Franzosen Michel Bréal für die ersten modernen Olympischen Spiele in Athen im Jahr <b>1896</b> zurück, der an die Legende des Boten erinnern wollte. Die offizielle Distanz wurde erst 1921 nach dem Maß des Marathonlaufs von London 1908 festgelegt. Zwischen Marathon und Athen liegen etwa 40 km: Die Legende von Pheidippides ist also eher symbolisch als historisch, inspiriert uns aber weiterhin.</p>
<p>Ein weiteres Beispiel für das Erbe: das Wort <b>„Demokratie“</b>. Heute wählen wir in unseren Schulen Klassensprecher; in Athen stimmten alle Bürger direkt in der Versammlung ab.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Der bemalte Parthenon",
      html: `<p>Heute hat der Parthenon die helle Farbe des Marmors, aber in der Antike waren die Statuen und Friese <b>in lebhaften Farben bemalt</b> (Blau, Rot, Gelb). Die Zeit hat die Pigmente ausgelöscht. Im Jahr 1687, während des Krieges zwischen Venedig und den Türken, brachte eine venezianische Bombe das im Tempel untergebrachte osmanische Pulverlager zur Explosion und zerstörte einen großen Teil des Daches. Die berühmten Marmorfriese, die Lord Elgin 1801-1812 nach London bringen ließ, befinden sich heute im British Museum, und Griechenland fordert ihre Rückgabe.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Die Pest, erzählt von einem, der sie erlebte",
      html: `<p>Thukydides, der an der Pest erkrankte und überlebte, beschrieb die Symptome mit einer so klinischen Genauigkeit, dass moderne Ärzte Vermutungen über die Krankheit anstellen können (vielleicht Fleckfieber oder Typhus; die Frage ist noch offen). Sein Ziel: „einen Besitz für immer zu hinterlassen“. Seine „Geschichte des Peloponnesischen Krieges“ gilt als das erste Beispiel wissenschaftlicher Geschichtsschreibung.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das klassische Griechenland zu verstehen",
      intro: "Ereignisse, Personen und Ideen: Betrachte sie einmal mit anderen Hilfsmitteln.",
      tabs: [
        {
          label: "🏁 David und Goliath",
          html: `<p>Die Perserkriege lassen sich als Zusammenstoß zwischen einem <b>Riesen</b> (dem Perserreich mit 20 Millionen Untertanen) und <b>Kleinen</b> (den griechischen Poleis mit einigen Hunderttausend Bürgern) sehen. Aber Vorsicht: Es war keine Geschichte von Guten und Bösen.</p>
<ul>
<li>Die Griechen siegten, weil sie <b>nahe der Heimat</b> kämpften, in engem, bergigem Gelände, mit einer passenden Taktik (Phalanx, Trieren).</li>
<li>Die Perser waren zahlreich, hatten aber Probleme mit der Versorgung und mit der Abstimmung zwischen Truppen verschiedener Völker.</li>
<li>Für Athen hatte der Sieg politische Folgen: Die Bürger, die als Ruderer auf den Schiffen dienten, forderten mehr politisches Gewicht, und die Demokratie wurde ausgeweitet.</li>
</ul>`
        },
        {
          label: "📅 Zeitleiste",
          html: `<p>Geh die großen Ereignisse von 499 bis 399 v. Chr. durch.</p>`,
          widget: "timeline",
          options: {
            unit: "Jahre",
            events: [
              { year: -499, label: "Ionischer Aufstand", icon: "🔥" },
              { year: -490, label: "Marathon", icon: "🏃" },
              { year: -480, label: "Thermopylen und Salamis", icon: "⚓" },
              { year: -478, label: "Attisch-Delischer Seebund", icon: "🤝" },
              { year: -447, label: "Baubeginn des Parthenon", icon: "🏛️" },
              { year: -431, label: "Peloponnesischer Krieg", icon: "⚔️" },
              { year: -429, label: "Tod des Perikles", icon: "🕯️" },
              { year: -404, label: "Kapitulation Athens", icon: "🏳️" },
              { year: -399, label: "Tod des Sokrates", icon: "🍷" }
            ]
          }
        },
        {
          label: "🗺️ Dreh den Globus",
          html: `<p>Dreh den Globus: die Schlüsselorte der Perserkriege und des Peloponnesischen Krieges.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Athen", color: "#2563eb" },
              { lat: 38.15, lon: 23.96, label: "Marathon", color: "#ef4444" },
              { lat: 38.8, lon: 22.54, label: "Thermopylen", color: "#ef4444" },
              { lat: 37.95, lon: 23.5, label: "Salamis", color: "#ef4444" },
              { lat: 37.08, lon: 22.43, label: "Sparta", color: "#f97316" },
              { lat: 37.07, lon: 15.29, label: "Syrakus", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persepolis", color: "#7c3aed" }
            ],
            routes: [{ points: [6, 0, 1], color: "#7c3aed" }]
          }
        },
        {
          label: "🃏 Lernkarten",
          html: `<p>Dreh die Karten um, um zu wiederholen.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Marathon", back: "490 v. Chr.: athenischer Sieg des Miltiades über die Perser" },
              { front: "Salamis", back: "480 v. Chr.: Seesieg des Themistokles" },
              { front: "Attisch-Delischer Seebund", back: "Von Athen angeführtes Bündnis seit 478 v. Chr., später Reich" },
              { front: "Perikles", back: "Stratege, Lenker der athenischen Demokratie; Parthenon" },
              { front: "Aigospotamoi", back: "405 v. Chr.: Die spartanische Flotte vernichtet die athenische" },
              { front: "Misthos", back: "Von Perikles eingeführte Entschädigung für öffentliche Ämter" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Karte: vom Sieg zum Fall Athens",
      nodes: [
        { id: "persia", label: "Perserreich", x: 50, y: 6, color: "#7c3aed", html: "Das größte Reich seiner Zeit, mit Dareios und Xerxes.", why: "Der von Athen unterstützte Aufstand der ionischen Städte veranlasste Dareios, Griechenland zu bestrafen und die Westgrenze zu festigen." },
        { id: "vittoria", label: "Griechischer Sieg", x: 25, y: 28, color: "#ef4444", html: "Marathon (490), Thermopylen und Salamis (480), Plataiai (479).", why: "Die Griechen siegten, weil sie auf günstigem Gelände kämpften, mit Phalanx und Trieren, und mit der starken Motivation, ihre Städte zu verteidigen." },
        { id: "lega", label: "Attisch-Delischer Seebund", x: 75, y: 28, color: "#f97316", html: "Seebündnis, das zum Reich Athens wird.", why: "Athen hatte die stärkste Flotte: Die Verbündeten zahlten lieber Tribute, als Schiffe auszurüsten. So wurde Athen Herrin der Ägäis." },
        { id: "democrazia", label: "Demokratie des Perikles", x: 20, y: 55, color: "#16a34a", html: "Versammlung, Losverfahren, Entschädigung für Ämter.", why: "Die armen Ruderer der Flotte hatten zum Sieg beigetragen: Sie forderten mehr Rechte. Die Tribute finanzierten die Entschädigungen." },
        { id: "cultura", label: "Goldenes Zeitalter", x: 50, y: 55, color: "#eab308", html: "Parthenon, Theater, Philosophie, Geschichtsschreibung.", why: "Reichtum und Stolz auf den Sieg finanzierten öffentliche Bauten und förderten das kritische Denken und die öffentliche Diskussion." },
        { id: "paura", label: "Furcht vor Sparta", x: 82, y: 55, color: "#0ea5e9", html: "Sparta und Korinth fürchten die athenische Macht.", why: "Thukydides sieht im Wachstum Athens und in der Furcht Spartas die tiefere Ursache des Krieges." },
        { id: "guerra", label: "Peloponnesischer Krieg", x: 50, y: 78, color: "#7c2d12", html: "431-404 v. Chr.: Pest, Sizilien, Aigospotamoi.", why: "Der Krieg war lang und zermürbend; strategische Fehler und die Pest schwächten Athen, während die Perser Sparta finanzierten." },
        { id: "crisi", label: "Krise der Polis", x: 50, y: 96, color: "#334155", html: "Instabile Hegemonien, Bürgerkriege, Aufstieg Makedoniens.", why: "Nach dem Krieg gelang es keiner Polis, Griechenland zu einen; die Schwäche öffnete Philipp II. von Makedonien den Weg." }
      ],
      edges: [
        ["persia", "vittoria", "besiegt durch"],
        ["vittoria", "lega", "führt zum"],
        ["lega", "democrazia", "finanziert die"],
        ["democrazia", "cultura", "fördert das"],
        ["lega", "paura", "erzeugt"],
        ["paura", "guerra", "löst aus den"],
        ["cultura", "guerra", "verhindert nicht den"],
        ["guerra", "crisi", "führt zur"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Perikles und der Krieg",
      questions: [
        { type: "mc", q: "Was ließ Perikles auf der Akropolis errichten?", options: ["Den Parthenon", "Das Kolosseum", "Die Mauern von Troja"], answer: 0, explain: "Den Parthenon, den Tempel der Athena (447-432 v. Chr.)." },
        { type: "mc", q: "Wer gewann den Peloponnesischen Krieg?", options: ["Sparta", "Athen", "Persien"], answer: 0, explain: "Sparta, mit finanzieller Hilfe der Perser." },
        { type: "tf", q: "Während der Pest starb auch Perikles.", answer: true, explain: "Er starb 429 v. Chr." },
        { type: "order", q: "Bringe die Ereignisse in die richtige Reihenfolge.", items: ["Marathon", "Salamis", "Attisch-Delischer Seebund", "Peloponnesischer Krieg"], explain: "490, 480, 478, 431 v. Chr." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Perser</b>: gewaltiges Reich (Kyros, Dareios, Xerxes); Ionischer Aufstand (499 v. Chr.).</li>
<li>Erster Krieg: <b>Marathon</b> (490, Miltiades). Zweiter: <b>Thermopylen</b> (Leonidas) und <b>Salamis</b> (Themistokles) 480; <b>Plataiai</b> und <b>Mykale</b> (479).</li>
<li><b>Attisch-Delischer Seebund</b> (478-477): Athen führt das Bündnis an und schafft ein Reich.</li>
<li><b>Perikles</b>: direkte Demokratie mit Entschädigung; Parthenon; Theater, Herodot, Thukydides, Sokrates.</li>
<li><b>Peloponnesischer Krieg</b> (431-404): Athen wird von Sparta besiegt; Krise der Poleis.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Satrapie", d: "Provinz des Perserreichs, von einem Satrapen verwaltet." },
    { t: "Phalanx", d: "Geschlossene Formation von Hopliten mit Schild und Lanze." },
    { t: "Triere", d: "Kriegsschiff mit drei Ruderreihen." },
    { t: "Stratege", d: "Athenischer Heerführer, gewähltes Amt." },
    { t: "Attisch-Delischer Seebund", d: "Von Athen angeführtes Bündnis ägäischer Poleis (478-477 v. Chr.)." },
    { t: "Tribut", d: "Summe, die ein unterworfener oder verbündeter Staat zahlt." },
    { t: "Misthos", d: "Entschädigung, die Bürger für öffentliche Ämter erhielten." },
    { t: "Ekklesia", d: "Versammlung der Bürger von Athen." },
    { t: "Sophist", d: "Lehrer der Rhetorik und des praktischen Wissens." },
    { t: "Pest von Athen", d: "Epidemie von 430-426 v. Chr. während des Krieges." },
    { t: "Hegemonie", d: "Vorherrschaft einer Stadt oder eines Staates über andere." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was löste das persische Eingreifen in Griechenland aus?", options: ["Die Unterstützung Athens und Eretrias für den Ionischen Aufstand", "Die Gründung des Attisch-Delischen Seebundes", "Die Olympischen Spiele"], answer: 0, explain: "Athen und Eretria halfen den aufständischen Städten." },
      { type: "mc", q: "Wer führte die Griechen bei Salamis an?", options: ["Themistokles", "Miltiades", "Alkibiades"], answer: 0, explain: "Der athenische Stratege Themistokles." },
      { type: "tf", q: "Bei Marathon siegten die Perser.", answer: false, explain: "Es siegten die Athener, im Jahr 490 v. Chr." },
      { type: "text", q: "Wie heißt das griechische Kriegsschiff mit drei Ruderreihen?", answer: ["Triere", "die Triere", "Trireme", "die Trireme"], explain: "Die Triere." },
      { type: "mc", q: "Was war der Attisch-Delische Seebund?", options: ["Ein von Athen angeführtes Bündnis ägäischer Poleis", "Ein Bündnis Spartas", "Eine Vereinigung von Kaufleuten"], answer: 0, explain: "478-477 v. Chr. gegründet, wurde er zu einem Reich." },
      { type: "mc", q: "Welche Maßnahme des Perikles ermöglichte den Armen die Teilnahme am politischen Leben?", options: ["Eine Entschädigung für öffentliche Ämter", "Die Abschaffung der Sklaverei", "Das Wahlrecht für Frauen"], answer: 0, explain: "Der Misthos." },
      { type: "order", q: "Bringe die Ereignisse in die chronologische Reihenfolge.", items: ["Marathon", "Thermopylen und Salamis", "Attisch-Delischer Seebund", "Baubeginn des Parthenon", "Peloponnesischer Krieg"], explain: "490, 480, 478, 447, 431 v. Chr." },
      { type: "mc", q: "Wie endet der Peloponnesische Krieg?", options: ["Sparta siegt, Athen verliert Mauern und Reich", "Athen siegt und erobert Sparta", "Persien siegt"], answer: 0, explain: "404 v. Chr. ergibt sich Athen." },
      { type: "num", q: "In welchem Jahr v. Chr. fand die Schlacht bei Marathon statt?", answer: 490, tol: 0, explain: "490 v. Chr." },
      { type: "tf", q: "Die athenische Demokratie stand Frauen und Sklaven offen.", answer: false, explain: "Nur erwachsene männliche Bürger stimmten ab." },
      { type: "mc", q: "Woran starb Perikles?", options: ["An der Pest", "In einer Schlacht", "Durch das Scherbengericht"], answer: 0, explain: "Er starb 429 v. Chr. an der Pest." }
    ]
  }
});
