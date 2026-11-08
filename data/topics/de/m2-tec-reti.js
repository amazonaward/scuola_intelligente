TOPIC('de', {
  id: `m2-tec-reti`,
  title: `Netzwerke und das Internet`,
  intro: `Wenn du einem Freund in Australien eine Nachricht schickst, braucht sie weniger als eine Sekunde, um anzukommen, und läuft dabei durch Kabel unter dem Ozean, Router und Antennen. Wie ist das möglich? In dieser Lektion entdecken wir, was ein <b>Netzwerk</b> ist, wie das <b>Internet</b> funktioniert und wie die <b>Daten</b> reisen, zerlegt in viele kleine <b>Pakete</b>.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `Was ist ein Netzwerk?`,
      html: `<p>Ein <b>Computernetzwerk</b> ist eine Gruppe von Geräten (Computer, Smartphones, Drucker, Spielkonsolen …), die <b>miteinander verbunden</b> sind, um Daten auszutauschen und Ressourcen zu teilen.</p>
<p>Netzwerke werden nach ihrer <b>Ausdehnung</b> eingeteilt:</p>
<ul>
<li><b>PAN</b> (Personal Area Network): wenige Meter, zum Beispiel Bluetooth-Kopfhörer und Handy.</li>
<li><b>LAN</b> (Local Area Network): ein Haus, eine Schule, ein Büro. Das WLAN zu Hause ist ein drahtloses LAN (WLAN).</li>
<li><b>MAN</b> (Metropolitan Area Network): eine Stadt.</li>
<li><b>WAN</b> (Wide Area Network): Regionen, Länder, Kontinente.</li>
</ul>
<p>Das <b>Internet</b> ist das größte WAN der Welt: ein <b>Netz von Netzen</b>, also Millionen verschiedener Netzwerke, die mit gemeinsamen Regeln verbunden sind.</p>`
    },
    {
      type: `text`,
      title: `Wer ist in einem Netzwerk dabei?`,
      html: `<ul>
<li><b>Client</b>: das Gerät, das einen Dienst <b>anfragt</b> (dein Handy, das ein Video öffnet).</li>
<li><b>Server</b>: der Computer, der den Dienst <b>bereitstellt</b> (der Computer, der das Video speichert und sendet). Viele Server sind in großen <b>Rechenzentren</b> zusammengefasst.</li>
<li><b>Router</b>: der „Verteiler“, der den Weg der Daten zwischen einem Netzwerk und dem anderen bestimmt. Der Router zu Hause verbindet dein LAN mit dem Internet.</li>
<li><b>Switch</b>: verbindet die Geräte desselben LANs über Kabel miteinander.</li>
<li><b>Access Point</b>: die WLAN-Antenne.</li>
</ul>
<p>Als <b>Übertragungsmedien</b> dienen: <b>Kupfer</b>kabel (elektrische Signale), <b>Glasfaser</b> (<b>Licht</b>impulse in einem Glasfaden, dünn wie ein Haar) und <b>Funkwellen</b> (WLAN, Mobilfunk 4G/5G, Satelliten).</p>`
    },
    {
      type: `svg`,
      title: `Von deinem Zuhause zum Server`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<rect x="15" y="40" width="190" height="220" rx="16" fill="#e0f2fe" stroke="#0369a1" stroke-width="3" stroke-dasharray="8 5"/>
<text x="110" y="65" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">LAN zu Hause</text>
<rect x="35" y="90" width="50" height="80" rx="8" fill="#1e293b"/>
<rect x="41" y="98" width="38" height="58" fill="#38bdf8"/>
<text x="60" y="190" font-size="14" fill="#0f172a" text-anchor="middle">Client</text>
<rect x="35" y="205" width="70" height="40" rx="4" fill="#475569"/>
<rect x="42" y="211" width="56" height="26" fill="#a5f3fc"/>
<rect x="125" y="140" width="65" height="35" rx="8" fill="#f97316" stroke="#7c2d12" stroke-width="2"/>
<text x="157" y="163" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Router</text>
<path d="M85 130 Q 110 130 125 150" fill="none" stroke="#0ea5e9" stroke-width="3" stroke-dasharray="5 4"/>
<line x1="105" y1="225" x2="125" y2="170" stroke="#0ea5e9" stroke-width="3"/>
<ellipse cx="330" cy="150" rx="105" ry="70" fill="#c7d2fe" stroke="#4338ca" stroke-width="3"/>
<text x="330" y="140" font-size="22" font-weight="bold" fill="#3730a3" text-anchor="middle">INTERNET</text>
<text x="330" y="165" font-size="14" fill="#3730a3" text-anchor="middle">Netz von Netzen</text>
<circle cx="270" cy="110" r="8" fill="#f97316"/>
<circle cx="390" cy="115" r="8" fill="#f97316"/>
<circle cx="300" cy="195" r="8" fill="#f97316"/>
<circle cx="380" cy="190" r="8" fill="#f97316"/>
<line x1="190" y1="157" x2="228" y2="155" stroke="#dc2626" stroke-width="4"/>
<line x1="433" y1="150" x2="470" y2="150" stroke="#dc2626" stroke-width="4"/>
<rect x="470" y="80" width="110" height="160" rx="10" fill="#334155"/>
<rect x="482" y="95" width="86" height="25" rx="4" fill="#22c55e"/>
<rect x="482" y="130" width="86" height="25" rx="4" fill="#22c55e"/>
<rect x="482" y="165" width="86" height="25" rx="4" fill="#22c55e"/>
<text x="525" y="222" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">Server</text>
<text x="300" y="275" font-size="15" fill="#1f2937" text-anchor="middle">die orangefarbenen Punkte sind die Router, die die Pakete verteilen</text>
</svg>`,
      caption: `Der Client fragt an, die Router verteilen, der Server antwortet. Zwischen deinem Zuhause und dem Server können bis zu 15–20 Router liegen.`
    },
    {
      type: `text`,
      title: `IP-Adressen und DNS: Wie findet man den Weg?`,
      html: `<p>Um einen Brief zu verschicken, braucht man eine Adresse. Im Internet hat jedes verbundene Gerät eine <b>IP-Adresse</b> (Internet Protocol).</p>
<ul>
<li><b>IPv4</b>: 4 Zahlen von <b>0 bis 255</b>, durch Punkte getrennt, zum Beispiel <code>192.168.1.10</code>. Das sind insgesamt 32 Bit, etwa <b>4,3 Milliarden</b> Adressen: zu wenige für alle Geräte der Welt!</li>
<li><b>IPv6</b>: 128 Bit, hexadezimal geschrieben (<code>2001:db8::1</code>). Die möglichen Adressen sind eine Zahl mit 39 Stellen: praktisch unendlich viele.</li>
</ul>
<p>Aber wir tippen keine Zahlen, wir tippen Namen wie <code>www.wikipedia.org</code>. Das <b>DNS</b> (Domain Name System) ist das „Telefonbuch“ des Internets: Es übersetzt den Namen in die IP-Adresse des Servers. Es funktioniert wie das Adressbuch im Handy: Du suchst „Oma“, und das Telefon wählt die Nummer.</p>`
    },
    {
      type: `text`,
      title: `Pakete und das TCP/IP-Protokoll`,
      html: `<p>Daten reisen nicht in einem Stück: Sie werden in <b>Pakete</b> aufgeteilt (meist höchstens etwa 1500 Byte pro Paket). Jedes Paket enthält:</p>
<ul>
<li>die <b>IP-Adresse des Absenders</b> und die des <b>Empfängers</b>;</li>
<li>eine <b>Reihenfolgenummer</b> (um die Teile wieder zusammenzusetzen);</li>
<li>ein Stückchen der eigentlichen <b>Daten</b>.</li>
</ul>
<p>Die Router schicken jedes Paket auf dem Weg, der <b>im Moment am freiesten</b> ist: Pakete derselben Nachricht können verschiedene Wege nehmen und durcheinander ankommen. Diese Methode heißt <b>Paketvermittlung</b>.</p>
<p>Die Regeln, an die sich alle halten, heißen <b>Protokolle</b>. Die wichtigsten sind <b>IP</b> (bringt jedes Paket an die richtige Adresse) und <b>TCP</b> (prüft, dass alle ankommen, bringt sie in die richtige Reihenfolge und lässt verlorene erneut senden). Zusammen bilden sie das <b>TCP/IP</b>, das 1974 von <b>Vinton Cerf</b> und <b>Robert Kahn</b> erfunden wurde.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Netzwerke und Adressen`,
      questions: [
        { type: `mc`, q: `Das WLAN bei dir zu Hause ist ein …`, options: [`WAN`, `LAN`, `MAN`], answer: 1, explain: `Es deckt ein kleines Gebiet ab (das Haus): Es ist ein lokales Netzwerk, LAN (drahtlos: WLAN).` },
        { type: `tf`, q: `Das DNS übersetzt die Namen von Webseiten in IP-Adressen.`, answer: true, explain: `Es ist das „Telefonbuch“ des Internets.` },
        { type: `mc`, q: `Welche dieser Adressen ist eine gültige IPv4-Adresse?`, options: [`192.168.1.300`, `10.0.0.25`, `256.1.1.1`], answer: 1, explain: `Jede Zahl einer IPv4-Adresse reicht von 0 bis 255: 300 und 256 sind zu groß.` }
      ]
    },
    {
      type: `3d`,
      title: `Die Autobahnen unter dem Meer`,
      scene: `globe`,
      options: {
        points: [
          { lat: 45.46, lon: 9.19, label: `Mailand`, color: `#ef4444` },
          { lat: 43.3, lon: 5.37, label: `Marseille`, color: `#f97316` },
          { lat: 31.2, lon: 29.92, label: `Alexandria (Ägypten)`, color: `#f97316` },
          { lat: 19.07, lon: 72.88, label: `Mumbai`, color: `#f97316` },
          { lat: 1.35, lon: 103.82, label: `Singapur`, color: `#f97316` },
          { lat: 51.5, lon: -0.13, label: `London`, color: `#2563eb` },
          { lat: 40.71, lon: -74.0, label: `New York`, color: `#2563eb` },
          { lat: -33.87, lon: 151.21, label: `Sydney`, color: `#16a34a` }
        ],
        routes: [
          { points: [0, 1, 2, 3, 4, 7], color: `#f97316` },
          { points: [0, 5, 6], color: `#2563eb` }
        ]
      },
      caption: `Über 95 % der Daten zwischen den Kontinenten laufen durch Glasfaser-Seekabel, nicht über Satelliten. Dreh den Globus und folge zwei möglichen Wegen deiner Pakete.`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: Was passiert, wenn du eine Webseite öffnest?`,
      html: `<ol>
<li>Du tippst <code>www.beispiel.de</code> in den Browser.</li>
<li>Der Computer fragt das <b>DNS</b>: „Wie lautet die IP von www.beispiel.de?“ und erhält zum Beispiel <code>93.184.216.34</code>.</li>
<li>Der Browser schickt dem Server eine <b>Anfrage</b> (Protokoll <b>HTTP</b>, oder <b>HTTPS</b>, wenn verschlüsselt: das Schloss 🔒).</li>
<li>Die Anfrage, in Pakete zerlegt, läuft durch deinen <b>Router</b>, dann durch die Router deines Internetanbieters und anderer Netze.</li>
<li>Der <b>Server</b> antwortet, indem er die Seite sendet, ebenfalls in Paketen.</li>
<li><b>TCP</b> bringt die Pakete in die richtige Reihenfolge; der Browser <b>zeichnet</b> die Seite. Alles in wenigen Zehntelsekunden!</li>
</ol>`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: Wie lange dauert der Download?`,
      html: `<p>Die Geschwindigkeit einer Verbindung wird in <b>Bit pro Sekunde</b> gemessen (Mbit/s = Millionen Bit pro Sekunde). Dateigrößen dagegen misst man in <b>Byte</b>. Achtung: <b>1 Byte = 8 Bit</b>!</p>
<p>Du willst ein Spiel mit <b>500 MB</b> (Megabyte) mit einer Verbindung von <b>100 Mbit/s</b> herunterladen:</p>
<ol>
<li>Ich rechne in Bit um: 500 × 8 = <b>4000 Mbit</b>.</li>
<li>Ich teile durch die Geschwindigkeit: 4000 ÷ 100 = <b>40 Sekunden</b> (unter idealen Bedingungen).</li>
</ol>
<p>Mit einer alten DSL-Leitung von 8 Mbit/s wären es 4000 ÷ 8 = 500 Sekunden, mehr als 8 Minuten. Mit Glasfaser von 1 Gbit/s (1000 Mbit/s) genügen 4 Sekunden!</p>`
    },
    {
      type: `widget`,
      title: `Ordne die Begriffe zu`,
      widget: `match`,
      options: { pairs: [
        [`Router`, `Verteilt die Pakete zwischen den Netzen`],
        [`Server`, `Stellt Dienste und Inhalte bereit`],
        [`DNS`, `Übersetzt Namen in IP-Adressen`],
        [`Paket`, `Stückchen Daten mit Absender und Empfänger`],
        [`Glasfaser`, `Überträgt Daten mit Lichtimpulsen`],
        [`TCP`, `Prüft, dass alle Pakete in der richtigen Reihenfolge ankommen`]
      ] },
      caption: `Verbinde jedes Wort mit seiner Erklärung.`
    },
    {
      type: `curiosity`,
      title: `Wusstest du schon …? Die erste Nachricht war „LO“`,
      html: `<p>Am <b>29. Oktober 1969</b> versuchten zwei Computer des <b>ARPANET</b>, des Vorläufers des Internets, einer an der Universität UCLA in Los Angeles und einer am Stanford Research Institute, sich die erste Nachricht zu schicken: das Wort <b>LOGIN</b>. Nach den ersten beiden Buchstaben, „L“ und „O“, stürzte das System ab!</p>
<p>So lautete die erste Nachricht der Internetgeschichte „<b>LO</b>“, was im altertümlichen Englisch … „sieh da!“ bedeutet. Eine Stunde später klappte die Verbindung vollständig.</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du schon …? Internet und Web sind nicht dasselbe`,
      html: `<p>Das <b>Internet</b> ist das physische Netz (Kabel, Router, Protokolle). Das <b>World Wide Web</b> ist nur <b>einer</b> der Dienste, die über das Internet laufen, wie E-Mail oder Videoanrufe.</p>
<p>Das Web wurde am <b>CERN</b> in Genf vom Engländer <b>Tim Berners-Lee</b> erfunden: Er schlug es <b>1989</b> vor, und die erste Webseite ging 1991 online. Am 30. April 1993 machte das CERN es für alle frei und kostenlos.</p>
<p>Und Italien? Am <b>30. April 1986</b> war das Zentrum CNUCE in <b>Pisa</b> das erste in Italien, das sich über Satellit mit den Vereinigten Staaten ans Internet anschloss.</p>`
    },
    {
      type: `remember`,
      title: `Merk dir`,
      html: `<ul>
<li>Netzwerk = verbundene Geräte. Nach Ausdehnung: PAN, LAN, MAN, WAN. Internet = Netz von Netzen.</li>
<li>Der <b>Client</b> fragt an, der <b>Server</b> antwortet, der <b>Router</b> verteilt.</li>
<li>Jedes Gerät hat eine <b>IP-Adresse</b>; das <b>DNS</b> übersetzt Namen in IP-Adressen.</li>
<li>Daten reisen in <b>Paketen</b>, die verschiedene Wege nehmen können; <b>TCP/IP</b> lenkt und ordnet sie.</li>
<li>Geschwindigkeit in Bit/s, Dateien in Byte: <b>1 Byte = 8 Bit</b>.</li>
<li>Internet ≠ Web: Das Web ist ein Dienst des Internets.</li>
</ul>`
    },
    {
      type: `alternatives`,
      title: `Weitere Wege, das Internet zu verstehen`,
      intro: `Das Internet ist unsichtbar, aber man kann es sich auf viele Arten vorstellen. Wähle die, die dir am meisten hilft.`,
      tabs: [
        {
          label: `✉️ Die nummerierten Postkarten`,
          html: `<p>Du musst einem Freund ein ganzes Buch schicken, aber die Post nimmt nur <b>Postkarten</b> an. Also:</p>
<ol>
<li>du schreibst das Buch auf 300 Postkarten ab und <b>nummerierst</b> sie (1/300, 2/300 …);</li>
<li>auf jede schreibst du <b>Absender</b> und <b>Empfänger</b>;</li>
<li>du wirfst sie ein: Manche laufen über Bologna, andere über Florenz, je nachdem, welche Lastwagen frei sind (die <b>Router</b>);</li>
<li>dein Freund bekommt sie durcheinander, <b>ordnet</b> sie anhand der Nummern, und wenn eine fehlt, bittet er dich, sie noch einmal zu schicken (das ist die Arbeit von <b>TCP</b>).</li>
</ol>
<p>Genau das ist die <b>Paketvermittlung</b>!</p>`
        },
        {
          label: `🛣️ Das Straßennetz`,
          html: `<p>Stell dir das Internet wie das Straßennetz vor:</p>
<ul>
<li>die <b>Kabel</b> sind die Straßen (die Glasfaser ist die Autobahn, die alte Kupfer-Doppelader ein Sträßchen);</li>
<li>die <b>Router</b> sind die Kreisverkehre mit den Schildern;</li>
<li>die <b>IP-Adressen</b> sind die Hausadressen;</li>
<li>das <b>DNS</b> ist das Navi, das „Omas Haus“ in Straße und Hausnummer verwandelt;</li>
<li>die <b>Pakete</b> sind die Autos: Wenn auf einer Straße Stau ist, wählt das Navi eine andere.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#dcfce7"/>
<path d="M40 130 L200 60 L400 60 L560 130" fill="none" stroke="#475569" stroke-width="22"/>
<path d="M40 130 L200 200 L400 200 L560 130" fill="none" stroke="#475569" stroke-width="22"/>
<path d="M200 60 L400 200" fill="none" stroke="#64748b" stroke-width="14"/>
<circle cx="200" cy="60" r="22" fill="#f97316"/>
<circle cx="400" cy="60" r="22" fill="#f97316"/>
<circle cx="200" cy="200" r="22" fill="#f97316"/>
<circle cx="400" cy="200" r="22" fill="#f97316"/>
<rect x="10" y="105" width="50" height="50" fill="#2563eb"/>
<text x="35" y="137" font-size="20" text-anchor="middle">🏠</text>
<rect x="540" y="105" width="50" height="50" fill="#334155"/>
<text x="565" y="137" font-size="20" text-anchor="middle">🖥️</text>
<text x="280" y="55" font-size="22" text-anchor="middle">🚗</text>
<text x="300" y="215" font-size="22" text-anchor="middle">🚙</text>
<text x="300" y="140" font-size="22" text-anchor="middle">🚕</text>
<text x="300" y="250" font-size="15" fill="#14532d" text-anchor="middle">orange Kreisverkehre = Router · Autos = Pakete, die verschiedene Wege wählen</text>
</svg>`
        },
        {
          label: `🔦 Die Glasfaser`,
          html: `<p>Probier dieses Experiment (mit einem Erwachsenen): Lass in einem dunklen Raum einen Wasserstrahl aus einer durchlöcherten Flasche austreten und beleuchte das Loch von der anderen Seite mit einer Taschenlampe. Das Licht <b>folgt der Biegung</b> des Wassers, statt geradeaus auszutreten!</p>
<p>Das ist die <b>Totalreflexion</b>: Das Licht prallt an den Innenwänden ab und bleibt „gefangen“. In der Glasfaser geschieht dasselbe in einem Faden aus reinstem Glas: Die Lichtimpulse (an = 1, aus = 0) reisen über Dutzende von Kilometern. Das Experiment zeigte schon 1842 der Schweizer Physiker <b>Daniel Colladon</b>.</p>`
        },
        {
          label: `⏳ Zeitstrahl`,
          html: `<p>Von einem Netz aus wenigen Computern zu Milliarden von Geräten.</p>`,
          widget: `timeline`,
          options: { unit: `Jahre`, events: [
            { year: 1969, label: `ARPANET: erste Nachricht „LO“`, icon: `📡` },
            { year: 1971, label: `Erste E-Mail (Ray Tomlinson, @-Zeichen)`, icon: `📧` },
            { year: 1974, label: `Cerf und Kahn beschreiben TCP/IP`, icon: `📜` },
            { year: 1986, label: `Pisa: Italien schließt sich ans Internet an`, icon: `🇮🇹` },
            { year: 1991, label: `Tim Berners-Lee stellt die erste Webseite online`, icon: `🌐` },
            { year: 1997, label: `Der WLAN-Standard entsteht (IEEE 802.11)`, icon: `📶` },
            { year: 2007, label: `Smartphones mit Touchscreen: das Internet in der Hosentasche`, icon: `📱` }
          ] }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Landkarte der Begriffe: das Internet`,
      nodes: [
        { id: `rete`, label: `Computernetzwerk`, x: 50, y: 7, color: `#7c3aed`, html: `Verbundene Geräte, die Daten und Ressourcen austauschen.`, why: `Die ersten Netzwerke entstanden in den 1960er-Jahren, um die sehr teuren Computer der Universitäten gemeinsam zu nutzen. Die Idee eines Netzes ohne Zentrum, das auch weiterläuft, wenn ein Knoten ausfällt, wurde von Paul Baran (USA) und Donald Davies (Vereinigtes Königreich) untersucht.` },
        { id: `internet`, label: `Internet`, x: 50, y: 27, color: `#2563eb`, html: `Das weltweite Netz aus Millionen verbundener Netzwerke.`, why: `Es stammt vom ARPANET (1969), einem Projekt, das vom US-Verteidigungsministerium finanziert wurde. 1983 übernahm das ARPANET das TCP/IP: Das gilt als Geburtsdatum des modernen Internets.` },
        { id: `clientserver`, label: `Client und Server`, x: 15, y: 45, color: `#0ea5e9`, html: `Der Client fragt an, der Server antwortet.`, why: `Die Aufgabenteilung erlaubt es, die Daten an einem einzigen Ort (dem Server) zu halten und von Millionen verschiedener Geräte aus zu nutzen.` },
        { id: `ip`, label: `IP-Adresse`, x: 40, y: 50, color: `#f59e0b`, html: `Zahl, die jedes verbundene Gerät kennzeichnet.`, why: `IPv4 (1981) nutzt 32 Bit: 2³² ≈ 4,3 Milliarden Adressen. Mit der Explosion von Smartphones und vernetzten Gegenständen reichten sie nicht mehr aus: So entstand IPv6 mit 128 Bit.` },
        { id: `dns`, label: `DNS`, x: 40, y: 72, color: `#eab308`, html: `Übersetzt die Namen von Webseiten in IP-Adressen.`, why: `Erfunden von Paul Mockapetris 1983: Vorher gab es eine einzige Datei mit allen Namen, die von Hand aktualisiert wurde und nicht mehr ausreichen konnte.` },
        { id: `pacchetti`, label: `Pakete`, x: 65, y: 50, color: `#ef4444`, html: `Stückchen von Daten mit Absender, Empfänger und Reihenfolgenummer.`, why: `Die Aufteilung der Daten in Pakete erlaubt es, dass sich viele Nutzer die Leitungen teilen, und umgeht Ausfälle: Ist ein Weg unterbrochen, nehmen die Pakete einen anderen.` },
        { id: `tcpip`, label: `TCP/IP`, x: 65, y: 72, color: `#16a34a`, html: `Die gemeinsamen Regeln (Protokolle) des gesamten Internets.`, why: `1974 von Vinton Cerf und Robert Kahn geschrieben, damit verschiedene Netzwerke miteinander sprechen können. Deshalb nennt man sie „die Väter des Internets“.` },
        { id: `mezzi`, label: `Physische Medien`, x: 88, y: 45, color: `#64748b`, html: `Kupfer, Glasfaser, Funkwellen, Satelliten.`, why: `Die Glasfaser nutzt die Totalreflexion des Lichts; das erste Transatlantik-Telegrafenkabel wurde schon 1858 verlegt. Heute verbinden über 500 Seekabel die Kontinente.` },
        { id: `web`, label: `World Wide Web`, x: 50, y: 92, color: `#a855f7`, html: `Der Dienst der durch Links verbundenen Seiten, aufbauend auf dem Internet.`, why: `Von Tim Berners-Lee am CERN (1989–1991) erfunden, damit Wissenschaftler Dokumente teilen können. Es nutzt das Protokoll HTTP und die Sprache HTML.` }
      ],
      edges: [
        [`rete`, `internet`, `das größte ist das`],
        [`internet`, `clientserver`, `Modell`],
        [`internet`, `ip`, `kennzeichnet mit`],
        [`ip`, `dns`, `gefunden über`],
        [`internet`, `pacchetti`, `transportiert`],
        [`pacchetti`, `tcpip`, `geregelt durch`],
        [`internet`, `mezzi`, `reist über`],
        [`tcpip`, `web`, `darauf läuft das`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Pakete und Geschwindigkeit`,
      questions: [
        { type: `num`, q: `Wie viele Bit hat 1 Byte?`, answer: 8, explain: `1 Byte = 8 Bit.` },
        { type: `tf`, q: `Die Pakete derselben Nachricht nehmen immer denselben Weg.`, answer: false, explain: `Jedes Paket kann den freiesten Weg nehmen; TCP bringt sie bei der Ankunft wieder in die richtige Reihenfolge.` },
        { type: `num`, q: `Eine Datei mit 50 MB bei einer Verbindung von 100 Mbit/s: Wie viele Sekunden braucht sie (unter idealen Bedingungen)?`, answer: 4, unit: `s`, explain: `50 × 8 = 400 Mbit; 400 ÷ 100 = 4 s.` }
      ]
    }
  ],
  glossary: [
    { t: `Netzwerk`, d: `Gruppe verbundener Geräte, die Daten austauschen.` },
    { t: `LAN / WAN`, d: `Lokales Netz (Haus, Schule) / Weitverkehrsnetz (Länder, Kontinente).` },
    { t: `Client`, d: `Gerät, das einen Dienst anfragt.` },
    { t: `Server`, d: `Computer, der anderen Geräten Dienste und Inhalte bereitstellt.` },
    { t: `Router`, d: `Gerät, das Pakete zwischen verschiedenen Netzen weiterleitet.` },
    { t: `IP-Adresse`, d: `Zahl, die ein Gerät im Netz kennzeichnet (IPv4 oder IPv6).` },
    { t: `DNS`, d: `System, das die Namen von Webseiten in IP-Adressen übersetzt.` },
    { t: `Paket`, d: `Kleiner Teil der Daten mit Adressen und Reihenfolgenummer.` },
    { t: `Protokoll`, d: `Gesamtheit von Regeln für die Kommunikation im Netz (TCP, IP, HTTP …).` },
    { t: `Glasfaser`, d: `Glasfaden, der Daten mit Lichtimpulsen überträgt.` },
    { t: `Bit / Byte`, d: `Einheiten der Information: 1 Byte = 8 Bit.` },
    { t: `World Wide Web`, d: `Dienst aus durch Links verbundenen Seiten, der über das Internet läuft.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Was ist das Internet?`, options: [`Ein einziger großer Computer`, `Ein Netz aus weltweit verbundenen Netzwerken`, `Ein Programm zum Surfen`], answer: 1, explain: `Das Internet verbindet Millionen verschiedener Netzwerke mit gemeinsamen Regeln.` },
      { type: `mc`, q: `Welches Gerät verteilt die Pakete zwischen verschiedenen Netzen?`, options: [`Router`, `Drucker`, `Monitor`], answer: 0, explain: `Der Router bestimmt den Weg der Pakete.` },
      { type: `tf`, q: `Internet und World Wide Web sind dasselbe.`, answer: false, explain: `Das Web ist einer der Dienste, die im Internet laufen, wie E-Mail.` },
      { type: `num`, q: `Welche ist die größte Zahl, die in jedem der 4 Teile einer IPv4-Adresse vorkommen kann?`, answer: 255, explain: `Jeder Teil hat 8 Bit: von 0 bis 255.` },
      { type: `text`, q: `Wie heißt das System, das www.seitenname.de in eine IP-Adresse übersetzt? (Abkürzung)`, answer: [`dns`], explain: `DNS = Domain Name System.` },
      { type: `order`, q: `Bring in die richtige Reihenfolge, was beim Öffnen einer Webseite passiert.`, items: [`Du tippst die Adresse in den Browser`, `Das DNS findet die IP-Adresse`, `Der Browser schickt die Anfrage an den Server`, `Der Server antwortet mit den Paketen`, `Der Browser zeigt die Seite an`], explain: `Name → IP → Anfrage → Antwort → Anzeige.` },
      { type: `mc`, q: `Was reist durch eine Glasfaser?`, options: [`Elektrischer Strom`, `Lichtimpulse`, `Schallwellen`], answer: 1, explain: `Die Glasfaser überträgt die Bits als Lichtblitze.` },
      { type: `num`, q: `Eine Datei mit 200 MB bei einer Verbindung von 400 Mbit/s: Wie viele Sekunden braucht sie (unter idealen Bedingungen)?`, answer: 4, unit: `s`, explain: `200 × 8 = 1600 Mbit; 1600 ÷ 400 = 4 s.` },
      { type: `mc`, q: `Was ist die Aufgabe des TCP-Protokolls?`, options: [`Webseiten einen Namen geben`, `Prüfen, dass alle Pakete ankommen, und sie in die richtige Reihenfolge bringen`, `Das WLAN einschalten`], answer: 1, explain: `TCP sorgt dafür, dass die Daten vollständig und geordnet ankommen.` },
      { type: `text`, q: `In welchem Forschungszentrum in Genf ist das World Wide Web entstanden? (Abkürzung)`, answer: [`cern`, `das cern`, `am cern`], explain: `Am CERN, dank Tim Berners-Lee.` },
      { type: `mc`, q: `In welchem Jahr schickte das ARPANET die erste Nachricht?`, options: [`1959`, `1969`, `1991`], answer: 1, explain: `Am 29. Oktober 1969, zwischen der UCLA und dem Stanford Research Institute.` },
      { type: `tf`, q: `Der größte Teil der Daten zwischen den Kontinenten reist durch Seekabel.`, answer: true, explain: `Über 95 % des interkontinentalen Datenverkehrs laufen durch Glasfaserkabel auf dem Meeresboden.` }
    ]
  }
});
