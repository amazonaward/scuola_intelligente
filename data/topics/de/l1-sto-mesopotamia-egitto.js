TOPIC('de', {
  id: "l1-sto-mesopotamia-egitto",
  title: "Mesopotamien und Ägypten",
  intro: "Zwei große Flüsse, <b>Euphrat und Tigris</b>, und ein noch berühmterer, der <b>Nil</b>, sahen die ersten Städte, die ersten geschriebenen Gesetze und die ersten Staaten der Geschichte entstehen. In diesen „Flusskulturen“ bedeutete Wasser Leben und Macht: Wer es zu beherrschen wusste, herrschte. In dieser Lektion vergleichen wir zwei sehr verschiedene Welten, das <b>Mesopotamien</b> der Stadtstaaten und das <b>Ägypten</b> des Pharaos, und entdecken, was sie uns hinterlassen haben: die Schrift, die Mathematik, die Gesetzbücher, die Pyramiden.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Die Flusskulturen: das Geschenk (und das Risiko) des Wassers",
      html: `<p>Zwischen dem 4. und 3. Jahrtausend v. Chr. entstanden vier große Kulturen an Flüssen: <b>Mesopotamien</b> (Euphrat und Tigris), <b>Ägypten</b> (Nil), das <b>Industal</b> und das <b>Tal des Gelben Flusses</b>. Was haben sie gemeinsam?</p>
<ul>
<li><b>Fruchtbare Böden</b>: Die Flüsse lagern Schlamm ab, der den Boden sehr ertragreich macht.</li>
<li><b>Kontrolle des Wassers</b>: Man muss <b>Kanäle</b> graben, Dämme und Speicher bauen. Dazu braucht es gemeinsame Arbeit, Kalender, Beamte: Ein <b>Staat</b> entsteht.</li>
<li><b>Überschuss</b>: Reiche Ernten ernähren Handwerker, Priester, Schreiber und Soldaten.</li>
<li><b>Schrift</b>, um die Vorräte der Speicher zu verzeichnen und Gesetze festzuhalten.</li>
</ul>
<p>Der Historiker Karl Wittfogel sprach von „hydraulischen Gesellschaften“; heute ist diese Bezeichnung umstritten, bleibt aber ein nützlicher Gedanke: <b>Wasser → Organisation → Macht</b>.</p>
<p><b>Mesopotamien</b> bedeutet (auf Griechisch) „Land zwischen den Flüssen“. Der Nil hingegen hat ein berechenbares Hochwasser (von Juli bis Oktober) und zu beiden Seiten Wüste: <b>Ägypten</b> ist ein „Geschenk des Nils“, wie der griechische Historiker Herodot schrieb.</p>`
    },
    {
      type: "3d",
      title: "3D-Karte: von Uruk bis Ramses",
      scene: "spacetime",
      caption: "Die Grundfläche ist die Karte des Vorderen Orients und Ägyptens, die Höhe ist die Zeit (3500–1000 v. Chr.). Tippe auf die Ereignisse: Die Pfeile verbinden Ursachen und Wirkungen.",
      options: {
        lat: [22, 38],
        lon: [28, 52],
        years: [-3500, -1000],
        places: [
          { lat: 30.05, lon: 31.25, label: "Memphis / Kairo" },
          { lat: 25.7, lon: 32.65, label: "Theben" },
          { lat: 32.5, lon: 44.4, label: "Babylon" },
          { lat: 36.35, lon: 43.15, label: "Ninive" },
          { lat: 30.96, lon: 46.1, label: "Ur" }
        ],
        events: [
          { id: "uruk", lat: 31.32, lon: 45.64, year: -3300, label: "Uruk: Stadt und Schrift", html: "In der sumerischen Stadt Uruk entsteht die <b>Schrift</b>: Zeichen auf Tontafeln, um Getreide, Bier, Herden zu verzeichnen. Es ist eines der ersten städtischen Zentren der Geschichte." },
          { id: "unif", lat: 29.85, lon: 31.25, year: -3100, label: "Einigung Ägyptens", html: "Um 3100 v. Chr. (nach der Überlieferung König Menes/Narmer) werden Ober- und Unterägypten zu einem einzigen Reich mit der Hauptstadt Memphis vereint.", causes: [] },
          { id: "sargon", lat: 32.5, lon: 44.3, year: -2334, label: "Sargon von Akkad", html: "Sargon besiegt die sumerischen Städte und schafft das erste <b>Reich</b> der Geschichte, vom Persischen Golf bis zum Mittelmeer.", causes: ["uruk"] },
          { id: "giza", lat: 29.98, lon: 31.13, year: -2560, label: "Cheops-Pyramide", html: "Der Pharao Cheops (Chufu) lässt in Gizeh die Große Pyramide errichten, ursprünglich etwa 146 m hoch: Symbol der absoluten Macht des Gott-Pharaos.", causes: ["unif"] },
          { id: "hammurabi", lat: 32.54, lon: 44.42, year: -1754, label: "Kodex Hammurabi", html: "Der König von Babylon, Hammurabi (etwa 1792–1750 v. Chr.), lässt 282 Gesetze in eine Basaltstele meißeln: die vollständigste Sammlung der mesopotamischen Welt.", causes: ["sargon"] },
          { id: "hyksos", lat: 30.9, lon: 31.8, year: -1650, label: "Die Hyksos in Ägypten", html: "Asiatische Völker mit Streitwagen und Pferden erobern das Nildelta; um 1550 v. Chr. werden sie von den Ägyptern vertrieben, die lernen, Streitwagen und bessere Bronzewaffen zu verwenden.", causes: ["giza"] },
          { id: "nuovo", lat: 25.7, lon: 32.65, year: -1550, label: "Neues Reich", html: "Mit der Vertreibung der Hyksos beginnt das Neue Reich (1550–1070 v. Chr.): Ägypten wird zur Militärmacht mit der Hauptstadt Theben; Pharaonen wie Thutmosis III. erobern Syrien.", causes: ["hyksos"] },
          { id: "akhenaton", lat: 27.65, lon: 30.9, year: -1350, label: "Echnaton und Aton", html: "Der Pharao Amenophis IV. nennt sich Echnaton und erzwingt den Kult eines einzigen Gottes, der Sonnenscheibe <b>Aton</b>, und gründet die Stadt Achetaton (Amarna). Nach seinem Tod kehrt man zum Polytheismus zurück.", causes: ["nuovo"] },
          { id: "qadesh", lat: 34.57, lon: 36.52, year: -1274, label: "Schlacht von Kadesch", html: "Ramses II. stellt sich bei Kadesch (Syrien) den Hethitern: Es gibt keinen klaren Sieger. Um 1259 v. Chr. schließen die beiden Reiche den ersten erhaltenen <b>schriftlichen Friedensvertrag</b>.", causes: ["nuovo"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Mesopotamien: Stadtstaaten und Reiche",
      html: `<p>In der Ebene zwischen Euphrat und Tigris, arm an Steinen und Metallen, aber reich an Ton, lösten einander viele Völker ab.</p>
<ul>
<li><b>Sumerer</b> (seit dem 4. Jahrtausend v. Chr.): Sie leben in unabhängigen <b>Stadtstaaten</b>, die oft im Krieg liegen: Uruk, Ur, Lagasch, Kisch. Im Zentrum jeder Stadt stand der <b>Zikkurat</b>, ein Stufenturm mit einem Tempel an der Spitze. Der Priesterkönig regierte im Namen des Stadtgottes.</li>
<li><b>Akkader</b>: <b>Sargon</b> (um 2334 v. Chr.) eint die Region im ersten Reich.</li>
<li><b>Babylonier</b>: Die Stadt <b>Babylon</b> wird unter <b>Hammurabi</b> (etwa 1792–1750 v. Chr.) mächtig. Eine zweite Blüte erlebt sie unter <b>Nebukadnezar II.</b> (6. Jh. v. Chr.).</li>
<li><b>Assyrer</b>: Aus Obermesopotamien schaffen sie vom 9. bis 7. Jh. v. Chr. ein Reich mit einem eisernen Heer von berüchtigter Grausamkeit; in Ninive stand die Bibliothek von <b>Assurbanipal</b> (über 20.000 Tafeln).</li>
</ul>
<p>Mit der Zeit wurde die Region von den Persern unter <b>Kyros dem Großen</b> erobert (539 v. Chr. Fall Babylons).</p>`
    },
    {
      type: "text",
      title: "3. Die Keilschrift und die mesopotamische Kultur",
      html: `<p>Die Schrift entstand aus sehr praktischen Bedürfnissen: <b>Zählen</b>. Die ersten Zeichen (um 3300 v. Chr.) sind Piktogramme auf Tontafeln: ein Rinderkopf, eine Ähre, eine Zahl. Dann werden die Zeichen immer stilisierter und mit einem Rohr mit dreieckiger Spitze eingedrückt: die <b>Keilschrift</b> (nach der Keilform der Zeichen). Sie wurde an mehrere Sprachen angepasst (Sumerisch, Akkadisch, Hethitisch, Altpersisch).</p>
<ul>
<li>Die <b>Schreiber</b> lernten jahrelang in den „Tafelhäusern“ (Edubba): Sie waren die Bürokratie des Staates.</li>
<li><b>Literatur</b>: das <b>Gilgamesch-Epos</b>, das Gedicht vom König von Uruk auf der Suche nach Unsterblichkeit, mit einer <b>Sintflut</b>-Erzählung, die der biblischen sehr ähnlich ist.</li>
<li><b>Mathematik</b>: ein Zahlensystem zur <b>Basis 60</b> (Sexagesimalsystem). Daher stammen die 60 Minuten der Stunde und die 360 Grad des Kreises.</li>
<li><b>Astronomie</b>: Sie beobachteten den Himmel genau, sagten Finsternisse voraus und erfanden den Tierkreis.</li>
<li><b>Technik</b>: das Rad (um 3500 v. Chr.), der Pflug, die Kanäle.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Von der Zeichnung zum Keil: wie sich die Schrift verändert",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<text x="300" y="32" font-size="18" font-weight="bold" text-anchor="middle" fill="#78350f">Vom Bild zum Zeichen</text>
<g stroke="#78350f" stroke-width="3" fill="none">
<path d="M70 120 Q55 90 80 80 Q110 70 120 100 Q130 130 105 150 Z"/>
<path d="M200 140 L260 90 M215 100 L260 140 M190 120 L270 120"/>
<path d="M360 80 L380 140 M395 80 L415 140 M420 100 L440 100"/>
</g>
<g fill="#78350f"><polygon points="500,90 520,90 510,130"/><polygon points="530,90 550,90 540,130"/><polygon points="510,135 530,135 520,175"/></g>
<text x="95" y="190" font-size="15" text-anchor="middle" fill="#0f172a">Zeichnung eines</text>
<text x="95" y="210" font-size="15" text-anchor="middle" fill="#0f172a">Rinderkopfs</text>
<text x="230" y="190" font-size="15" text-anchor="middle" fill="#0f172a">gedrehtes und</text>
<text x="230" y="210" font-size="15" text-anchor="middle" fill="#0f172a">vereinfachtes Zeichen</text>
<text x="400" y="190" font-size="15" text-anchor="middle" fill="#0f172a">schnellere Zeichen</text>
<text x="400" y="210" font-size="15" text-anchor="middle" fill="#0f172a">auf dem Ton</text>
<text x="520" y="190" font-size="15" text-anchor="middle" fill="#0f172a">Keilschrift</text>
<text x="520" y="210" font-size="15" text-anchor="middle" fill="#0f172a">mit dem Rohr</text>
<text x="300" y="262" font-size="15" text-anchor="middle" fill="#7c2d12">Vereinfachtes Schema: Die Entwicklung dauerte viele Jahrhunderte.</text>
</svg>`,
      caption: "Die Keilschrift entsteht aus Piktogrammen auf frischem Ton, die zum Führen von Verzeichnissen benutzt wurden."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Mesopotamien",
      questions: [
        { type: "mc", q: "Was war ein Zikkurat?", options: ["Ein Stufenturm mit einem Tempel an der Spitze", "Eine Schiffsart", "Ein Gesetzbuch"], answer: 0, explain: "Er war das religiöse Zentrum der sumerischen Stadt." },
        { type: "mc", q: "Warum hat die Stunde 60 Minuten?", options: ["Als Erbe des mesopotamischen Sexagesimalsystems", "Auf Beschluss von Ramses II.", "Wegen der Länge des Nils"], answer: 0, explain: "Die Babylonier zählten zur Basis 60, und die Tradition ist bis zu uns gelangt." },
        { type: "tf", q: "Die Keilschrift wurde mit einer Spitze in Stein geritzt.", answer: false, explain: "Sie wurde mit einem Rohr mit dreieckiger Spitze in frischen Ton gedrückt." }
      ]
    },
    {
      type: "text",
      title: "4. Der Kodex Hammurabi und die geschriebene Gerechtigkeit",
      html: `<p>Um <b>1754 v. Chr.</b> ließ der König von Babylon, <b>Hammurabi</b>, <b>282 Gesetze</b> in eine schwarze Basaltstele meißeln (mehr als 2 Meter hoch, heute im Louvre). Oben empfängt der König den Auftrag vom Gott der Gerechtigkeit, <b>Schamasch</b>. Es ist nicht das erste Gesetzbuch (davor gab es das des <b>Ur-Nammu</b>, um 2100 v. Chr.), aber es ist das vollständigste.</p>
<ul>
<li><b>Talionsprinzip</b> (Vergeltungsrecht): „Auge um Auge, Zahn um Zahn“ — die Strafe muss der Tat angemessen und darf nicht größer sein: eine Form der Begrenzung der privaten Rache.</li>
<li>Aber die Strafe <b>hängt vom gesellschaftlichen Stand ab</b>: Wenn ein Adliger einen anderen Adligen verletzt, zahlt er mit derselben Verletzung; verletzt er einen Mann niedrigeren Ranges, zahlt er eine Geldbuße.</li>
<li>Regeln zu <b>Handel, Darlehen, Ehe, Erbe, Löhnen</b> und zur Haftung von Maurern und Ärzten.</li>
<li>Die Gesetze sind <b>schriftlich und öffentlich</b>: Der Richter darf nicht nach Laune entscheiden.</li>
</ul>
<p>Für uns ist das wichtige Neue der Grundsatz der <b>Rechtssicherheit</b>: Alle müssen das Gesetz kennen. Heute erscheinen sie uns hart und ungleich, aber damals waren sie ein Fortschritt gegenüber der willkürlichen Gerechtigkeit des Stärkeren.</p>`
    },
    {
      type: "decision",
      title: "Babylon, um 1760 v. Chr.: Muss die Gerechtigkeit geschrieben sein?",
      html: `<p>Du bist Berater Hammurabis. Das Reich ist gewachsen und umfasst viele Städte mit unterschiedlichen Bräuchen und Richtern. Die Kaufleute beklagen sich: Derselbe Streit kann von Stadt zu Stadt gegensätzlich ausgehen. Die Priesterrichter behaupten, die Gerechtigkeit liege in den Händen der Götter und ihrer Entscheidungen von Fall zu Fall.</p>`,
      question: "Was rätst du dem König?",
      options: [
        { label: "Die örtlichen Richter wie immer von Fall zu Fall entscheiden lassen.", outcome: "Die lokalen Traditionen bleiben erhalten, aber die Gerechtigkeit bleibt unberechenbar, und die Kaufleute misstrauen ihr: Der Handel leidet darunter." },
        { label: "Für das ganze Reich einheitliche Gesetze sammeln und an öffentlichen Orten einmeißeln lassen.", outcome: "Das Reich wird einheitlicher und berechenbarer: Die Untertanen wissen, was ihnen droht. Der König stärkt seine Autorität, indem er sich als Garant der Gerechtigkeit darstellt." },
        { label: "Alles einem einzigen großen Gericht des Königs in Babylon übertragen.", outcome: "Die Gerechtigkeit wird zentralisiert, aber die Verfahren dauern sehr lange, und viele Untertanen können die Hauptstadt nicht erreichen." }
      ],
      answer: 1,
      explain: "Hammurabi wählte den Weg der <b>schriftlichen und öffentlichen Gesetze</b>: Die Stele wurde an Orten aufgestellt, wo sie gelesen werden konnte (aber viele konnten nicht lesen: Richter und Schreiber dienten als Vermittler). Sie war auch ein Propagandamittel: der gerechte König, von den Göttern gewollt."
    },
    {
      type: "text",
      title: "5. Ägypten: das Geschenk des Nils und der Pharao",
      html: `<p>Ägypten ist ein Streifen fruchtbaren Landes (das „Schwarze Land“), umgeben von Wüste (dem „Roten Land“). Der Nil fließt von Süden nach Norden und teilt sich in ein großes <b>Delta</b>. Jedes Jahr im Sommer tritt er über die Ufer und lagert Schlamm ab; deshalb erfanden die Ägypter einen <b>Kalender mit 365 Tagen</b>, der auf den Überschwemmungen und dem Stern Sirius beruhte.</p>
<p><b>Eine 3000 Jahre lange Geschichte</b>, gegliedert in:</p>
<ul>
<li><b>Vordynastische Zeit</b> und Einigung (um <b>3100 v. Chr.</b>): Oberägypten (Süden) und Unterägypten (Norden, mit dem Delta) vereinen sich unter einem einzigen König.</li>
<li><b>Altes Reich</b> (etwa 2686–2181 v. Chr.): Hauptstadt Memphis, die großen <b>Pyramiden von Gizeh</b> (Cheops, Chephren, Mykerinos).</li>
<li><b>Mittleres Reich</b> (etwa 2055–1650 v. Chr.): Wiedervereinigung, Hauptstadt Theben, Kunst und Literatur; dann Einfall der <b>Hyksos</b>.</li>
<li><b>Neues Reich</b> (etwa 1550–1070 v. Chr.): die Zeit des Imperiums und der großen Pharaonen: <b>Hatschepsut</b> (eine Pharaonin), <b>Thutmosis III.</b>, <b>Amenophis IV./Echnaton</b>, <b>Tutanchamun</b>, <b>Ramses II.</b></li>
<li><b>Spätzeit</b>: Einfälle der Assyrer, der Perser (525 v. Chr.), dann die Eroberung durch <b>Alexander den Großen</b> (332 v. Chr.) und die Ptolemäer, schließlich Rom (30 v. Chr.).</li>
</ul>
<p><b>Der Pharao</b> war König und lebender Gott, Sohn des Gottes Horus und Garant der <b>kosmischen Ordnung</b> (Ma'at). Ihm gehörte theoretisch das ganze Land. Er regierte mit Hilfe eines <b>Wesirs</b>, von Beamten-<b>Schreibern</b> und von Priestern.</p>`
    },
    {
      type: "svg",
      title: "Die gesellschaftliche Pyramide Ägyptens",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef9c3"/>
<polygon points="300,20 160,270 440,270" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<line x1="270" y1="80" x2="330" y2="80" stroke="#92400e" stroke-width="2"/>
<line x1="235" y1="140" x2="365" y2="140" stroke="#92400e" stroke-width="2"/>
<line x1="200" y1="200" x2="400" y2="200" stroke="#92400e" stroke-width="2"/>
<text x="300" y="68" font-size="16" font-weight="bold" text-anchor="middle" fill="#7c2d12">Pharao</text>
<text x="300" y="118" font-size="14" text-anchor="middle" fill="#0f172a">Wesir, Priester, Adel</text>
<text x="300" y="175" font-size="14" text-anchor="middle" fill="#0f172a">Schreiber, Soldaten, Handwerker</text>
<text x="300" y="240" font-size="14" text-anchor="middle" fill="#0f172a">Bauern (die große Mehrheit)</text>
<text x="500" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Sklaven (wenige)</text>
<text x="90" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Gefangene</text>
</svg>`,
      caption: "Die ägyptische Gesellschaft war stark hierarchisch; die Bauern arbeiteten während der Nilflut auch auf den großen Baustellen des Staates."
    },
    {
      type: "text",
      title: "6. Schrift, Religion und Leben nach dem Tod",
      html: `<ul>
<li><b>Hieroglyphen</b> („heilige Einritzungen“): eine Bildschrift, die Zeichen für Laute, Ideen und Kategorien verbindet. Daneben, für das tägliche Leben, die <b>hieratische</b> und später die <b>demotische</b> Schrift. Man schrieb auf <b>Papyrus</b>, gewonnen aus einer Pflanze des Nils.</li>
<li>Die Hieroglyphen gerieten in Vergessenheit und wurden <b>1822</b> von <b>Jean-François Champollion</b> dank des <b>Steins von Rosette</b> (1799 entdeckt) entziffert, der denselben Text in Hieroglyphen, Demotisch und Griechisch trägt.</li>
<li><b>Polytheistische Religion</b>: Re (Sonne), Osiris (Jenseits), Isis, Horus, Anubis. Die Götter haben oft Tierköpfe.</li>
<li><b>Jenseits</b>: Nach dem Tod wird der Verstorbene gerichtet: Sein Herz wird gegen die Feder der Ma'at gewogen. Deshalb praktizierte man die <b>Mumifizierung</b> (den Körper zu erhalten) und baute <b>Gräber</b> mit Schätzen und dem „Totenbuch“.</li>
<li><b>Wissenschaften</b>: Geometrie, um nach den Überschwemmungen die Grenzen neu zu ziehen, praktische Medizin (medizinische Papyri), Astronomie.</li>
</ul>
<p>Die <b>Pyramiden</b> sind monumentale Gräber der Pharaonen des Alten Reiches, errichtet von organisierten Arbeitern (nicht von Sklaven, nach den archäologischen Funden bei Gizeh) mit Rampen und Steinblöcken. Später, aus Angst vor Plünderungen, ließen sich die Pharaonen des Neuen Reiches in Gräbern bestatten, die in den Fels des <b>Tals der Könige</b> bei Theben gehauen waren.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: eine Kartusche lesen",
      html: `<p>Der Name eines Pharaos wurde in ein langgezogenes Oval geschrieben, die <b>Kartusche</b>. Champollion erkannte, dass die Hieroglyphen in den Kartuschen von Ptolemaios und Kleopatra auf dem Stein von Rosette <b>Laute</b> bezeichneten und nicht nur Ideen: Von dort begann er, alles zu entziffern. Versuche, wie er zu denken:</p>
<ol>
<li>Der Stein trägt denselben Text in <b>drei Schriften</b>: Das Griechische war lesbar und lieferte daher die Übersetzung.</li>
<li>Der Name „Ptolemaios“ kommt im Griechischen mehrmals vor: Suche dieselbe Abfolge in den Hieroglyphen, innerhalb einer Kartusche.</li>
<li>Ordne jedem Zeichen einen Laut zu und vergleiche mit „Kleopatra“: Die gemeinsamen Buchstaben (P, O, L, T) entsprechen denselben Zeichen.</li>
</ol>
<p>Das ist die Methode, mit der man jede verlorene Schrift entziffert: Man braucht einen Vergleichsschlüssel und viel Geduld.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Deine Uhr ist babylonisch",
      html: `<p>Jedes Mal, wenn du auf die Uhr schaust oder einen Winkel misst, benutzt du mesopotamisches Erbe:</p>
<ul>
<li>1 Stunde = 60 Minuten, 1 Minute = 60 Sekunden: Basis 60;</li>
<li>der Kreis hat 360 Grad (6 × 60);</li>
<li>die Wochentage sind mit sieben mit bloßem Auge sichtbaren Himmelskörpern verbunden (Sonne, Mond, Mars, Merkur, Jupiter, Venus, Saturn), wie man an den Namen noch heute sieht: Sonntag, Montag, Samstag (Saturntag) ...</li>
</ul>
<p>Und von Ägypten erben wir den <b>Sonnenkalender mit 365 Tagen</b>, der später von den Römern unter Julius Caesar korrigiert wurde (Schaltjahr).</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Der Fluch des Tutanchamun",
      html: `<p>1922 entdeckte der britische Archäologe <b>Howard Carter</b> im Tal der Könige das fast unversehrte Grab von <b>Tutanchamun</b>, einem sehr jung (mit etwa 18–19 Jahren) um 1323 v. Chr. verstorbenen Pharao, Sohn oder Verwandter Echnatons. Als 1923 der Geldgeber Lord Carnarvon starb, sprach man vom „Fluch des Pharaos“. Doch Archäologen zeigten, dass die meisten Beteiligten eines natürlichen Todes und in hohem Alter starben (Carter 1939): Der „Fluch“ ist eine Erfindung der Zeitungen. Das Grab enthielt mehr als 5000 Gegenstände, darunter die berühmte goldene Totenmaske.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Der erste „Friedensvertrag“ der Geschichte",
      html: `<p>Nach der Schlacht von Kadesch (um 1274 v. Chr.) schlossen der Pharao <b>Ramses II.</b> und der hethitische König <b>Hattusili III.</b> um 1259 v. Chr. einen Friedens- und Bündnisvertrag, von dem wir sowohl die ägyptische Fassung (in die Wände des Tempels von Karnak gemeißelt) als auch die hethitische (Tontafeln) besitzen. Eine Kopie hängt im Sitz der UNO in New York als Beispiel für eine antike internationale Vereinbarung.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Mesopotamien und Ägypten zu verstehen",
      intro: "Zwei Flusskulturen, zwei Lösungen. Hier einige Möglichkeiten, sie zu vergleichen.",
      tabs: [
        {
          label: "⚖️ Vergleich in zwei Spalten",
          html: `<table>
<tr><th></th><th>Mesopotamien</th><th>Ägypten</th></tr>
<tr><td><b>Fluss</b></td><td>Euphrat und Tigris: plötzliche, zerstörerische Fluten</td><td>Nil: regelmäßige, berechenbare Flut</td></tr>
<tr><td><b>Gelände</b></td><td>Offene Ebene, leicht zu erobern</td><td>Wüsten zu beiden Seiten: gut geschützt</td></tr>
<tr><td><b>Staat</b></td><td>Viele Stadtstaaten, dann Reiche</td><td>Ein einheitliches Reich unter dem Pharao</td></tr>
<tr><td><b>König</b></td><td>Priesterkönig, Stellvertreter der Götter</td><td>Pharao: lebender Gott</td></tr>
<tr><td><b>Schrift</b></td><td>Keilschrift auf Ton</td><td>Hieroglyphen auf Papyrus</td></tr>
<tr><td><b>Monumente</b></td><td>Zikkurat, aus Lehmziegeln</td><td>Pyramiden und Tempel, aus Stein</td></tr>
<tr><td><b>Jenseits</b></td><td>Trist und staubig</td><td>Glückliches Leben für den, der das Gericht besteht</td></tr>
</table>
<p>Die Geografie erklärt viel: Ein launischer Fluss und offenes Gelände bringen verfeindete Städte und kriegerische Völker hervor; ein regelmäßiger Fluss und eine schützende Wüste bringen stabile Einheit und eine optimistische Sicht auf das Leben hervor.</p>`
        },
        {
          label: "🗺️ Wo sie liegen: Globus drehen",
          html: `<p>Drehe den Globus, um die großen Städte der beiden Kulturen zu finden.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.3, lon: 45.6, label: "Uruk", color: "#f97316" },
              { lat: 30.96, lon: 46.1, label: "Ur", color: "#f97316" },
              { lat: 32.5, lon: 44.4, label: "Babylon", color: "#ef4444" },
              { lat: 36.35, lon: 43.15, label: "Ninive", color: "#ef4444" },
              { lat: 29.98, lon: 31.13, label: "Gizeh", color: "#2563eb" },
              { lat: 25.7, lon: 32.65, label: "Theben", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 3], color: "#f97316" }, { points: [4, 5], color: "#2563eb" }]
          }
        },
        {
          label: "📅 Zeitleiste",
          html: `<p>Ordne die Ereignisse auf der Zeitleiste ein: Du siehst, wie lang diese Geschichten sind.</p>`,
          widget: "timeline",
          options: {
            unit: "Jahre",
            events: [
              { year: -3300, label: "Schrift in Uruk", icon: "✍️" },
              { year: -3100, label: "Einigung Ägyptens", icon: "👑" },
              { year: -2560, label: "Cheops-Pyramide", icon: "🔺" },
              { year: -2334, label: "Sargon von Akkad", icon: "⚔️" },
              { year: -1754, label: "Kodex Hammurabi", icon: "⚖️" },
              { year: -1550, label: "Neues Reich", icon: "🏛️" },
              { year: -1350, label: "Echnaton", icon: "☀️" },
              { year: -1274, label: "Kadesch", icon: "🛡️" },
              { year: -539, label: "Perser in Babylon", icon: "🏰" },
              { year: -332, label: "Alexander in Ägypten", icon: "🐎" }
            ]
          }
        },
        {
          label: "🃏 Wiederholungskarten",
          html: `<p>Drehe die Karten um, um die Schlüsselbegriffe zu wiederholen.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Zikkurat", back: "Stufenturm mit einem Tempel an der Spitze, Zentrum der sumerischen Stadt" },
              { front: "Keilschrift", back: "Schrift mit keilförmigen Zeichen auf Ton" },
              { front: "Hammurabi", back: "König von Babylon (etwa 1792–1750 v. Chr.), Urheber des berühmten Gesetzbuchs mit 282 Gesetzen" },
              { front: "Pharao", back: "Gott-König Ägyptens, Garant der Ordnung (Ma'at)" },
              { front: "Rosette", back: "Stele mit demselben Text in drei Schriften: Schlüssel zur Entzifferung der Hieroglyphen" },
              { front: "Talionsprinzip", back: "Strafe, die der Tat angemessen ist („Auge um Auge“)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mindmap der Flusskulturen: Tippe auf die Knoten und finde heraus, warum",
      nodes: [
        { id: "fiumi", label: "Große Flüsse", x: 50, y: 6, color: "#0ea5e9", html: "Euphrat, Tigris und Nil bieten Wasser, Schlamm und Verkehrswege.", why: "Wo das Wasser reichlich und berechenbar (oder beherrschbar) ist, bringt das Land viel ein: Mehr Nahrung bedeutet mehr Menschen und einen Überschuss, der Spezialisten ernährt." },
        { id: "canali", label: "Bewässerung und Kontrolle", x: 18, y: 30, color: "#16a34a", html: "Kanäle, Dämme, Flutkalender.", why: "Um Kanäle zu graben und zu unterhalten, braucht es gemeinsame Arbeit und Koordination. Die Zentralgewalt setzt sich gerade deshalb durch, weil sie diese Anlagen organisiert und verteidigt." },
        { id: "surplus", label: "Überschuss und Speicher", x: 82, y: 30, color: "#eab308", html: "Die Ernten sammeln sich in den Kornspeichern des Tempels oder des Palastes.", why: "Wer die Speicher verwaltet, muss festhalten, wie viel hinein- und hinausgeht: Die Buchführung entsteht." },
        { id: "scrittura", label: "Schrift", x: 50, y: 50, color: "#a855f7", html: "Keilschrift in Mesopotamien, Hieroglyphen in Ägypten.", why: "Erfunden, um Vorräte und Schulden zu zählen, dann für Gesetze, Briefe, Gebete und Erzählungen benutzt. Sie markiert den Beginn der Geschichte." },
        { id: "stato", label: "Staat und König", x: 20, y: 75, color: "#ef4444", html: "Sumerische Stadtstaaten, mesopotamische Reiche, einheitliches Reich Ägypten.", why: "Die Macht wird durch die Religion legitimiert: Der König ist Stellvertreter des Gottes (Mesopotamien) oder selbst ein Gott (Ägypten). Heer, Steuern und Bürokratie tragen den Staat." },
        { id: "leggi", label: "Geschriebene Gesetze", x: 80, y: 75, color: "#7c2d12", html: "Kodex des Ur-Nammu, Kodex Hammurabi.", why: "In großen und komplexen Gesellschaften kann man sich nicht mehr allein auf die mündliche Überlieferung verlassen: Man braucht gemeinsame, öffentliche Regeln, um Konflikte zu lösen und den Handel zu sichern." },
        { id: "cultura", label: "Wissenschaft und Religion", x: 50, y: 95, color: "#0f766e", html: "Mathematik, Astronomie, Mumifizierung, Tempel.", why: "Den Kalender zu berechnen, die Felder nach den Fluten zu vermessen und große Bauwerke zu errichten fördert Mathematik und Astronomie; die Angst vor dem Tod und das Bedürfnis nach Ordnung bringen Mythen und Riten hervor." }
      ],
      edges: [
        ["fiumi", "canali", "erfordern"],
        ["fiumi", "surplus", "erzeugen"],
        ["canali", "stato", "stärken den"],
        ["surplus", "scrittura", "erfordert die"],
        ["scrittura", "leggi", "ermöglicht die"],
        ["stato", "leggi", "erlässt"],
        ["scrittura", "cultura", "überliefert"],
        ["stato", "cultura", "finanziert"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Ägypten",
      questions: [
        { type: "mc", q: "Wer entzifferte 1822 die Hieroglyphen?", options: ["Howard Carter", "Jean-François Champollion", "Herodot"], answer: 1, explain: "Champollion benutzte den Stein von Rosette." },
        { type: "mc", q: "Was war der Pharao für die Ägypter?", options: ["Ein Gott-König, Garant der kosmischen Ordnung", "Ein einfacher Richter", "Ein gewählter Heerführer"], answer: 0, explain: "Er galt als Sohn von Göttern und Garant der Ma'at." },
        { type: "tf", q: "Die Pyramiden von Gizeh gehören zum Neuen Reich.", answer: false, explain: "Sie wurden im Alten Reich errichtet (etwa 2600–2500 v. Chr.)." },
        { type: "text", q: "Wie heißt die ägyptische Bildschrift?", answer: ["Hieroglyphen", "Hieroglyphe", "die Hieroglyphen"], explain: "Hieroglyphen, „heilige Einritzungen“." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Flusskulturen entstehen dort, wo das Wasser Überschuss bringt und Organisation verlangt: Mesopotamien, Ägypten, Indus, Gelber Fluss.</li>
<li><b>Mesopotamien</b>: Sumerer (Stadtstaaten, Zikkurat, Keilschrift), Akkader (Sargon, erstes Reich), Babylonier (<b>Hammurabi</b>, etwa 1792–1750 v. Chr.), Assyrer.</li>
<li><b>Kodex Hammurabi</b>: 282 geschriebene Gesetze, Talionsprinzip, je nach Stand unterschiedliche Strafen.</li>
<li><b>Ägypten</b>: Einigung um 3100 v. Chr.; Altes Reich (Pyramiden), Mittleres, Neues Reich; Pharao Gott-König; Hieroglyphen 1822 entziffert.</li>
<li>Erbe: Schrift, Basis 60, Kalender mit 365 Tagen, Geometrie, geschriebene Gesetze.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Flusskultur", d: "Gesellschaft, die an einem großen Fluss entstand und dessen Wasser nutzt und kontrolliert." },
    { t: "Stadtstaat", d: "Unabhängige Stadt mit eigener Regierung und eigenem Gebiet." },
    { t: "Zikkurat", d: "Mesopotamischer Stufenturm mit einem Tempel an der Spitze." },
    { t: "Keilschrift", d: "Mesopotamische Schrift mit keilförmigen Zeichen, in Ton gedrückt." },
    { t: "Schreiber", d: "Beamter, der lesen und schreiben konnte." },
    { t: "Talion", d: "Grundsatz der Strafe, die dem erlittenen Schaden gleich ist." },
    { t: "Pharao", d: "König Ägyptens, der als Gott galt." },
    { t: "Hieroglyphe", d: "Bildschrift des alten Ägypten." },
    { t: "Papyrus", d: "Schreibmaterial, gewonnen aus einer Pflanze des Nils." },
    { t: "Mumifizierung", d: "Technik zur Erhaltung des Körpers der Verstorbenen." },
    { t: "Reich", d: "Ausgedehnter Staat, der viele Völker beherrscht." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was bedeutet „Mesopotamien“?", options: ["Land zwischen den Flüssen", "Land des Nils", "Land der Sonne"], answer: 0, explain: "Aus dem Griechischen: „Land inmitten der Flüsse“ (Euphrat und Tigris)." },
      { type: "mc", q: "Welche Schrift benutzten die Sumerer?", options: ["Hieroglyphen", "Keilschrift", "Buchstabenschrift"], answer: 1, explain: "Keilschrift, auf Tontafeln." },
      { type: "tf", q: "Der Kodex Hammurabi sah für Adlige und Gemeine identische Strafen vor.", answer: false, explain: "Die Strafen hingen vom gesellschaftlichen Stand ab." },
      { type: "text", q: "Wie heißt der erste König, der Mesopotamien um 2334 v. Chr. zu einem Reich einte?", answer: ["Sargon", "Sargon von Akkad"], explain: "Sargon von Akkad." },
      { type: "mc", q: "In welcher Zeit wurden die Pyramiden von Gizeh gebaut?", options: ["Altes Reich", "Neues Reich", "Ptolemäerzeit"], answer: 0, explain: "Altes Reich, etwa 2600–2500 v. Chr." },
      { type: "mc", q: "Was machte es möglich, die Hieroglyphen zu entziffern?", options: ["Der Stein von Rosette", "Das Grab des Tutanchamun", "Der Kodex Hammurabi"], answer: 0, explain: "Der Text in drei Schriften, von denen eine griechisch war, war der Schlüssel." },
      { type: "order", q: "Bringe die Ereignisse in die zeitliche Reihenfolge.", items: ["Entstehung der Schrift in Uruk", "Einigung Ägyptens", "Cheops-Pyramide", "Kodex Hammurabi", "Schlacht von Kadesch"], explain: "Etwa 3300, 3100, 2560, 1754, 1274 v. Chr." },
      { type: "mc", q: "Warum war Ägypten stabiler als Mesopotamien?", options: ["Es hatte einen regelmäßigen Nil und durch die Wüste geschützte Grenzen", "Es hatte keine Flüsse", "Es war eine Insel"], answer: 0, explain: "Die berechenbare Flut und der natürliche Schutz begünstigten ein einheitliches Reich." },
      { type: "num", q: "Wie viele Gesetze enthält der Kodex Hammurabi? (ungefähr)", answer: 282, tol: 2, explain: "282 Artikel, in die Basaltstele gemeißelt." },
      { type: "tf", q: "Echnaton führte in Ägypten den Kult eines einzigen Gottes, Aton, ein.", answer: true, explain: "Es war ein Versuch des Monotheismus, der nach seinem Tod aufgegeben wurde." },
      { type: "mc", q: "Welches mesopotamische Erbe nutzen wir noch heute?", options: ["Die Einteilung der Stunde in 60 Minuten", "Die römischen Zahlen", "Das Geld"], answer: 0, explain: "Das Sexagesimalsystem." }
    ]
  }
});
