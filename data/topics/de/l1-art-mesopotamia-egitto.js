TOPIC('de', {
  id: `l1-art-mesopotamia-egitto`,
  title: `Mesopotamische und ägyptische Kunst`,
  intro: `Zwischen Euphrat und Tigris und entlang des Nils entstehen vor mehr als 5000 Jahren die <b>ersten Städte</b>, die <b>Schrift</b> und die ersten großen Bauwerke aus Stein und Ziegeln: Zikkurate, Pyramiden, gewaltige Tempel. Zwei benachbarte Kulturen, zwei verschiedene Arten, Kunst zu machen: Die <b>Sumerer und Babylonier</b> bauen Türme zum Himmel und schreiben Gesetze in Stein; die <b>Ägypter</b> bauen für die Ewigkeit, denn für sie dient die Kunst dazu, den <b>Tod zu besiegen</b>. 🏛️🔺`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Zwei Flusskulturen`,
      html: `<p>Die ersten Hochkulturen entstehen dort, wo große Flüsse den Boden fruchtbar machen und so den Ackerbau begünstigen.</p>
<ul>
<li><b>Mesopotamien</b> (griechisch „Land zwischen den Flüssen“, das heutige Irak): Sumerer (ab 3500 v. Chr.), Akkader, Babylonier, Assyrer. Stadtstaaten, die von Priesterkönigen regiert werden. Die <b>Keilschrift</b> (keilförmige Zeichen, in Tontafeln eingeritzt) entsteht etwa um <b>3300 v. Chr.</b>. Stein und Holz fehlen: Das Grundmaterial ist der <b>Lehmziegel</b> aus Ton.</li>
<li><b>Ägypten</b>: eine etwa 3000 Jahre währende Kultur am Nil, um <b>3100 v. Chr.</b> unter dem ersten Pharao (Narmer oder Menes) geeint. Der Nil, der jedes Jahr über die Ufer tritt, düngt das Land. Hier gibt es reichlich <b>Stein</b> (Kalkstein, Granit, Sandstein): Die Architektur besteht aus behauenem Stein. Schrift: die <b>Hieroglyphen</b> (1822 von <b>Champollion</b> dank des Steins von Rosette entziffert).</li>
</ul>
<p>In beiden fallen <b>Religion und Macht</b> zusammen: Die Kunst dient dazu, die Götter und den König zu ehren. Aber der Zweck ist verschieden: In Mesopotamien sind die Tempel das <b>Haus des Gottes</b> auf Erden und der Ort, an dem der König seine Macht zeigt; in Ägypten ist der Pharao ein <b>lebender Gott</b>, und Gräber und Bilder müssen sein Überleben im Jenseits sichern.</p>`
    },
    {
      type: `3d`, title: `Durch Zeit und Raum navigieren: von Mesopotamien nach Ägypten`,
      scene: `spacetime`,
      options: {
        lat: [20, 36], lon: [28, 52], years: [-3200, -400],
        places: [ { lat: 30.0, lon: 31.1, label: `Gizeh` }, { lat: 30.96, lon: 46.1, label: `Ur` }, { lat: 32.54, lon: 44.42, label: `Babylon` }, { lat: 25.72, lon: 32.66, label: `Karnak` } ],
        events: [
          { id: `e1`, lat: 30.96, lon: 46.1, year: -2100, label: `Zikkurat von Ur`, html: `König Ur-Nammu baut den großen Zikkurat, der dem Mondgott Nanna geweiht ist, um 2100 v. Chr.` },
          { id: `e2`, lat: 29.87, lon: 31.22, year: -2650, label: `Djoser-Pyramide (Sakkara)`, html: `Imhotep entwirft den ersten großen Steinbau: die Stufenpyramide.` },
          { id: `e3`, lat: 30.0, lon: 31.1, year: -2560, label: `Cheops-Pyramide`, html: `Pharao Cheops lässt die größte Pyramide bauen, ursprünglich 146,6 m hoch.`, causes: [`e2`] },
          { id: `e4`, lat: 32.54, lon: 44.42, year: -1750, label: `Kodex Hammurabi`, html: `Der babylonische König Hammurabi lässt etwa 282 Gesetze in eine Basaltstele meißeln.` },
          { id: `e5`, lat: 25.72, lon: 32.66, year: -1300, label: `Säulensaal von Karnak`, html: `Die Pharaonen Sethos I. und Ramses II. vollenden den Saal mit 134 Säulen im Amun-Tempel.` },
          { id: `e6`, lat: 32.54, lon: 44.42, year: -575, label: `Ischtar-Tor`, html: `Nebukadnezar II. lässt in Babylon das Tor aus blau glasierten Ziegeln errichten.`, causes: [`e4`] }
        ]
      },
      caption: `Die Karte ist die Grundlage, die Höhe ist die Zeit: Tippe auf ein Ereignis, um die Karteikarte und die Pfeile zwischen Ursachen und Wirkungen zu lesen.`
    },
    {
      type: `text`, title: `2. Die mesopotamische Architektur: der Zikkurat`,
      html: `<p>Das Symbol der mesopotamischen Kunst ist der <b>Zikkurat</b> (aus dem Akkadischen <i>ziqqurratu</i>, „Gipfel, Spitze“): ein <b>Stufenturm</b> aus Lehmziegeln, verkleidet mit gebrannten Ziegeln und Bitumen, mit Außentreppen. Oben stand ein kleines Heiligtum, das „Haus“ des Gottes, zu dem der Priester für die Riten hinaufstieg.</p>
<ul>
<li>Der Zikkurat von <b>Ur</b> (Südirak), vom König <b>Ur-Nammu</b> um <b>2100 v. Chr.</b> erbaut und dem Mondgott <b>Nanna</b> geweiht: Grundfläche von etwa 60 × 45 m, drei Terrassen, drei Treppen, die sich vereinen. Heute ist der untere Teil erhalten (restauriert).</li>
<li>Das <b>Etemenanki</b> von <b>Babylon</b>, dem Marduk geweiht, das als Ursprung der biblischen Erzählung vom <b>Turm zu Babel</b> gilt: Die Quellen sprechen von etwa sieben Stockwerken.</li>
</ul>
<p>Da Stein fehlt, baut man mit Ziegeln und verwendet schon im 3. Jahrtausend v. Chr. <b>Bögen und Gewölbe</b>. Die Fassaden werden mit <b>glasierten Ziegeln</b> geschmückt (wie das <b>Ischtar-Tor</b>, siehe unten).</p>`
    },
    {
      type: `text`, title: `3. Mesopotamische Skulptur und Reliefs`,
      html: `<p>In den mesopotamischen Werken kommt es nicht auf die Ähnlichkeit an, sondern auf die <b>gesellschaftliche Bedeutung</b> der Person und auf das Erzählen.</p>
<ul>
<li><b>Sumerer – Standarte von Ur</b> (etwa 2600–2500 v. Chr., British Museum): ein Holzkästchen, verziert mit einem <b>Mosaik</b> aus Lapislazuli, Muschel und rotem Kalkstein, in waagerechte „Register“ unterteilt. Eine Seite zeigt den <b>Krieg</b>, die andere den <b>Frieden</b> (Festmahl). Man liest von unten nach oben.</li>
<li><b>Sumerer – Betenden-Statuetten</b> (Tell Asmar, etwa 2700–2500 v. Chr.): Figuren mit riesigen Augen aus Muschel und Lapislazuli und gefalteten Händen, die anstelle der Gläubigen in den Tempeln aufgestellt wurden.</li>
<li><b>Babylonier – Stele des Hammurabi</b> (etwa 1750 v. Chr., Louvre): ein Block aus <b>schwarzem Basalt</b>, etwa 2,25 m hoch, 1901–02 in Susa gefunden. Oben empfängt der König das Zeichen der Macht vom Sonnengott <b>Schamasch</b>; darunter stehen in Keilschrift <b>282 Gesetze</b> (der „Kodex“ Hammurabi), darunter das berühmte Vergeltungsgesetz („Auge um Auge“).</li>
<li><b>Babylonier – Ischtar-Tor</b> (etwa 575 v. Chr., Nebukadnezar II.): Stadteingang, verkleidet mit <b>blau glasierten Ziegeln</b> mit Reihen von Stieren (Adad) und Drachen (Marduk). Im Pergamonmuseum in Berlin rekonstruiert.</li>
<li><b>Assyrer</b> (9.–7. Jh. v. Chr.): Militärmacht. Paläste von Chorsabad (Sargon II.) und Ninive mit <b>Lamassu</b> (geflügelte Stiere mit Menschenkopf, die die Tore bewachen; mit fünf Beinen, damit sie von vorn wie von der Seite vollständig wirken) und <b>Flachreliefs</b> von Schlachten und Jagden (wie die <i>Löwenjagd</i> des Assurbanipal, etwa 645 v. Chr.).</li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-Quiz: Mesopotamien`,
      questions: [
        { type: `mc`, q: `Welches Material verwenden die Mesopotamier vor allem zum Bauen?`, options: [`Tonziegel`, `Granit`, `Marmor`], answer: 0, explain: `Stein und Holz fehlen: Man verwendet Ton (Lehmziegel und gebrannte Ziegel).` },
        { type: `mc`, q: `Wo befindet sich heute die Stele mit dem Kodex Hammurabi?`, options: [`Im Louvre in Paris`, `Im Ägyptischen Museum in Turin`, `In Bagdad`], answer: 0, explain: `Sie wurde nach dem Fund in Susa (1901–02) nach Paris gebracht.` },
        { type: `tf`, q: `Der Zikkurat war ein königliches Grab.`, answer: false, explain: `Er war ein Stufenturm mit einem Heiligtum an der Spitze; kein Grab.` }
      ]
    },
    {
      type: `text`, title: `4. Die ägyptische Architektur: von der Mastaba zur Pyramide`,
      html: `<p>Für die Ägypter ist der Tod ein Übergang: Der Körper muss erhalten werden (<b>Mumifizierung</b>), und das Grab muss mit allem Nötigen ausgestattet sein. Deshalb entwickelt sich die Grabarchitektur enorm.</p>
<ul>
<li><b>Mastaba</b> (arabisch „Bank“): Grab in Form eines rechteckigen Pyramidenstumpfes, aus Ziegeln oder Stein, mit unterirdischer Kammer für den Sarkophag und einer Kapelle für die Opfergaben.</li>
<li><b>Stufenpyramide des Djoser</b> in <b>Sakkara</b> (etwa 2650 v. Chr., 3. Dynastie): vom Architekten und Arzt <b>Imhotep</b> entworfen, später vergöttlicht. Sie ist der erste große Bau aus behauenem Stein: sechs übereinandergesetzte Mastabas, etwa 60 m hoch.</li>
<li><b>Pyramiden des Snofru</b> in Dahschur (etwa 2600 v. Chr.): Die „Knickpyramide“ ändert auf halber Höhe ihre Neigung (von etwa 54° auf 43°), weil man ein Nachgeben befürchtete; die „Rote Pyramide“ hat bereits eine gleichbleibende Neigung von etwa 43°.</li>
<li><b>Pyramiden von Gizeh</b> (4. Dynastie, etwa 2560–2470 v. Chr.): die von <b>Cheops</b> (Chufu, ursprüngliche Höhe <b>146,6 m</b>, quadratische Grundfläche von etwa <b>230 m</b> Seitenlänge, 2,3 Millionen Blöcke von durchschnittlich etwa 2,5 Tonnen), <b>Chephren</b> (etwa 143,5 m) und <b>Mykerinos</b> (etwa 65 m). Die <b>Sphinx</b>, aus Kalkfelsen gehauen, ist etwa 73 m lang und 20 m hoch: Sie hat den Körper eines Löwen und das Gesicht, vielleicht, des Chephren.</li>
</ul>
<p>Die Pyramide mit glatten Flächen stellt die <b>Sonnenstrahlen</b> dar, die vom Himmel herabsteigen: eine „Treppe“ für den Pharao zu Re. Die Cheops-Pyramide blieb etwa <b>3800 Jahre</b> lang das höchste Bauwerk der Welt, bis zur Kathedrale von Lincoln in England (etwa 1311). Die Seiten sind mit minimalem Fehler nach den Himmelsrichtungen ausgerichtet.</p>`
    },
    {
      type: `svg`, title: `Von der Mastaba zur Pyramide`,
      caption: `Drei Stationen der ägyptischen Grabarchitektur: die Mastaba, die Stufenpyramide des Djoser (Imhotep, etwa 2650 v. Chr.) und die glattflächige Pyramide von Gizeh (Cheops, etwa 2560 v. Chr.).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<rect x="0" y="230" width="600" height="70" fill="#fcd34d"/>
<polygon points="30,230 175,230 160,180 45,180" fill="#d6a85a" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/>
<text x="102" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">MASTABA</text>
<text x="102" y="280" font-size="14" fill="#78350f" text-anchor="middle">etwa 3000–2700 v. Chr.</text>
<g fill="#d6a85a" stroke="#78350f" stroke-width="3" stroke-linejoin="round">
<polygon points="215,230 365,230 365,205 215,205"/>
<polygon points="230,205 350,205 350,180 230,180"/>
<polygon points="245,180 335,180 335,155 245,155"/>
<polygon points="258,155 322,155 322,130 258,130"/>
<polygon points="270,130 310,130 310,108 270,108"/>
<polygon points="278,108 302,108 302,88 278,88"/>
</g>
<text x="290" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">DJOSER IN SAKKARA</text>
<text x="290" y="280" font-size="14" fill="#78350f" text-anchor="middle">Stufen, etwa 2650 v. Chr.</text>
<polygon points="395,230 580,230 487,45" fill="#e8c068" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/>
<line x1="487" y1="45" x2="487" y2="230" stroke="#92400e" stroke-width="2" stroke-dasharray="6 4"/>
<text x="487" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">CHEOPS IN GIZEH</text>
<text x="487" y="280" font-size="14" fill="#78350f" text-anchor="middle">glatte Flächen, etwa 2560 v. Chr.</text>
<text x="497" y="150" font-size="14" fill="#92400e">146,6 m</text>
</svg>`
    },
    {
      type: `3d`, title: `Eine Pyramide zum Drehen`,
      scene: `solid`,
      options: { shape: `pyramid`, n: 4, r: 1.6, h: 2.2, color: `#e8c068`, labels: true, shapes: [`pyramid`, `prism`, `cube`, `cone`] },
      caption: `Die ägyptische Pyramide ist eine gerade Pyramide mit quadratischer Grundfläche. Betrachte sie von oben (quadratischer Grundriss mit den Diagonalen) und von der Seite (dreieckiger Aufriss): Du erkennst die Orthogonalprojektionen wieder.`
    },
    {
      type: `curiosity`, title: `Wusstest du, … dass die Pyramiden nicht von Sklaven gebaut wurden?`,
      html: `<p>Ausgrabungen bei Gizeh (seit den 1990er-Jahren, mit Zahi Hawass und Mark Lehner) haben das Dorf der <b>Arbeiter</b> freigelegt: Häuser, Bäckereien, Brauereien und Gräber mit Ehrungen. Die Arbeiter wurden <b>bezahlt und verpflegt</b> (Brot, Bier, Fleisch) und in Gruppen mit scherzhaften Namen wie „Die Freunde des Cheops“ organisiert. Die Arbeit dauerte etwa 20 Jahre. Die Blöcke kamen aus den Steinbrüchen oft über den <b>Nil</b> während der Flut, wenn der Fluss bis nahe an die Baustelle reichte: Ein 2013 in Wadi al-Jarf entdeckter Papyrus (das „Tagebuch des Merer“) berichtet genau vom Transport der Kalksteinblöcke aus Tura.</p>`
    },
    {
      type: `text`, title: `5. Der ägyptische Tempel`,
      html: `<p>Der Tempel des Neuen Reiches (etwa 1550–1070 v. Chr.) ist das irdische Haus des Gottes. Er hat einen <b>axialen</b> Grundriss: Vom Eingang zum Heiligtum geht man von hellen, offenen Räumen zu dunklen und immer abgeschiedeneren Räumen. Das Bausystem ist <b>Pfosten-Sturz</b> (Pfeiler und Architrave) mit Decken aus Steinplatten.</p>
<ol>
<li><b>Sphingenallee</b>: der monumentale Eingang.</li>
<li><b>Pylone</b>: zwei massive trapezförmige Türme beiderseits des Eingangs, mit Reliefs des siegreichen Pharaos und davorstehenden Obelisken.</li>
<li><b>Hof</b> unter freiem Himmel mit Säulenhallen.</li>
<li><b>Säulensaal</b> (Hypostyl, griechisch „von Säulen getragen“): dichter Säulenwald mit <b>Papyrus</b>- (offen oder geschlossen), <b>Lotos</b>- oder <b>Palmkapitellen</b>; das Licht dringt durch hohe Fenster (Obergaden) ein.</li>
<li><b>Naos</b> (<i>sancta sanctorum</i>): die dunkle Cella mit der Statue des Gottes, nur für Priester und Pharao zugänglich.</li>
</ol>
<p>Beispiele: der <b>Amun-Tempel von Karnak</b> (Theben, über etwa 2000 Jahre gebaut und erweitert; der Säulensaal hat <b>134 Säulen</b>, die höchsten 21 m hoch); der <b>Tempel von Luxor</b>; der <b>Tempel Ramses' II. in Abu Simbel</b> (etwa 1265 v. Chr., in den Fels gehauen, mit vier Sitzstatuen von etwa 20 m Höhe; zwischen 1964 und 1968 höher versetzt, um ihn vor den Fluten des Assuan-Staudamms zu retten); der <b>Totentempel der Hatschepsut</b> in Deir el-Bahari (etwa 1470 v. Chr., Terrassen mit Säulenhallen, dem Architekten Senenmut zugeschrieben).</p>`
    },
    {
      type: `svg`, title: `Grundriss eines ägyptischen Tempels (Schema)`,
      caption: `Von der Sphingenallee zum Heiligtum: Der Raum wird immer enger, dunkler und heiliger. Die Säulen des Säulensaals stehen dicht, weil sie schwere Steinarchitrave tragen.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<g fill="#b45309" stroke="#78350f" stroke-width="1.5">
<rect x="20" y="115" width="20" height="10"/><rect x="50" y="115" width="20" height="10"/><rect x="80" y="115" width="20" height="10"/>
<rect x="20" y="175" width="20" height="10"/><rect x="50" y="175" width="20" height="10"/><rect x="80" y="175" width="20" height="10"/>
</g>
<polygon points="110,100 150,95 150,135 110,135" fill="#d6a85a" stroke="#78350f" stroke-width="3"/>
<polygon points="110,200 150,205 150,165 110,165" fill="#d6a85a" stroke="#78350f" stroke-width="3"/>
<rect x="150" y="90" width="110" height="120" fill="#fef9c3" stroke="#78350f" stroke-width="3"/>
<g fill="#78350f"><circle cx="165" cy="105" r="5"/><circle cx="165" cy="195" r="5"/><circle cx="245" cy="105" r="5"/><circle cx="245" cy="195" r="5"/><circle cx="165" cy="135" r="5"/><circle cx="165" cy="165" r="5"/><circle cx="245" cy="135" r="5"/><circle cx="245" cy="165" r="5"/></g>
<rect x="260" y="95" width="150" height="110" fill="#e7d3a1" stroke="#78350f" stroke-width="3"/>
<g fill="#78350f">
<circle cx="280" cy="115" r="6"/><circle cx="310" cy="115" r="6"/><circle cx="340" cy="115" r="6"/><circle cx="370" cy="115" r="6"/><circle cx="395" cy="115" r="6"/>
<circle cx="280" cy="150" r="6"/><circle cx="310" cy="150" r="6"/><circle cx="340" cy="150" r="6"/><circle cx="370" cy="150" r="6"/><circle cx="395" cy="150" r="6"/>
<circle cx="280" cy="185" r="6"/><circle cx="310" cy="185" r="6"/><circle cx="340" cy="185" r="6"/><circle cx="370" cy="185" r="6"/><circle cx="395" cy="185" r="6"/>
</g>
<rect x="410" y="115" width="80" height="70" fill="#d6c08a" stroke="#78350f" stroke-width="3"/>
<rect x="490" y="130" width="60" height="40" fill="#a16207" stroke="#451a03" stroke-width="3"/>
<g font-size="14" fill="#1c1917" font-weight="bold">
<text x="60" y="80" text-anchor="middle">Sphingenallee</text>
<text x="130" y="75" text-anchor="middle">Pylon</text>
<text x="205" y="75" text-anchor="middle">Hof</text>
<text x="335" y="75" text-anchor="middle">Säulensaal</text>
<text x="450" y="75" text-anchor="middle">Vorräume</text>
<text x="520" y="115" text-anchor="middle">Naos</text>
</g>
<text x="300" y="250" font-size="15" fill="#44403c" text-anchor="middle">Licht und weiter Raum  →  Halbdunkel  →  dunkel und heilig</text>
<path d="M60 275 L540 275" stroke="#78350f" stroke-width="2"/><polygon points="540,270 552,275 540,280" fill="#78350f"/>
</svg>`
    },
    {
      type: `text`, title: `6. Ägyptische Malerei und Skulptur`,
      html: `<p>Die ägyptische Kunst folgt <b>strengen Regeln</b>, die 3000 Jahre lang fast unverändert blieben, weil das Bild einen <b>magischen</b> Wert hat: Was gemalt ist, „existiert“ im Jenseits. Man strebt Klarheit an, nicht Illusion.</p>
<p>Das <b>Gesetz der Frontalität</b> (in Relief und Malerei): Die menschliche Gestalt wird mit dem <b>Kopf im Profil</b>, dem <b>Auge von vorn gesehen</b>, <b>Schultern und Oberkörper von vorn</b>, <b>Taille und Beinen im Profil</b> und einem vorgesetzten Fuß dargestellt. So zeigt jeder Körperteil seine „erkennbarste“ Ansicht. Die Figuren sind in <b>Registern</b> (waagerechten Streifen) geordnet, und die <b>Größe zeigt den Rang an</b>: Der Pharao ist größer als die Diener (Bedeutungsperspektive).</p>
<ul>
<li><b>Narmer-Palette</b> (etwa 3100 v. Chr.): Narmer vereint Ober- und Unterägypten.</li>
<li><b>Grabmalerei</b>: Gräber in Theben mit Szenen aus dem Alltag, wie die <i>Vogeljagd in den Sümpfen</i> aus dem Grab des <b>Nebamun</b> (etwa 1350 v. Chr., British Museum). Mineralische Farben: Ocker, Azurit, Malachit, Ruß.</li>
<li><b>Skulptur</b>: Statuen aus Granit oder Diorit, <b>frontal, symmetrisch, regungslos</b>, mit einem Fuß vorn; der <b>Sitzende Schreiber</b> (etwa 2500 v. Chr., Louvre) ist natürlicher; die <b>Triade des Mykerinos</b>.</li>
<li><b>Amarna-Zeit</b> (etwa 1350–1330 v. Chr.): Pharao <b>Echnaton</b> führt den Kult eines einzigen Gottes ein, der Sonnenscheibe <b>Aton</b>, und ändert auch den Stil: naturnaher, gestreckte Gesichter und Szenen aus dem Familienleben. Daher stammt die <b>Büste der Nofretete</b> des Bildhauers <b>Thutmosis</b> (etwa 1345 v. Chr., Kalkstein und bemalter Stuck, Neues Museum Berlin).</li>
<li><b>Totenmaske des Tutanchamun</b> (etwa 1323 v. Chr.): massives Gold mit Glaspaste und Halbedelsteinen, 54 cm; das Grab wurde von <b>Howard Carter</b> am 4. November 1922 im Tal der Könige entdeckt (die Grabkammer wurde 1923 geöffnet). Ägyptisches Museum in Kairo.</li>
</ul>`
    },
    {
      type: `example`, title: `Beispiel: ein ägyptisches Relief lesen`,
      html: `<p>Betrachte ein Relief, auf dem der Pharao die Feinde erschlägt. Die Regeln helfen dir, es zu „lesen“:</p>
<ul>
<li>der Pharao ist im Vergleich zu den Feinden <b>riesig</b>: Er ist der Wichtigste;</li>
<li>die Figuren stehen in übereinanderliegenden <b>Registern</b>: oben für König und Götter, unten für die Diener;</li>
<li>der Körper ist eine <b>Collage</b> aus Ansichten: Kopf im Profil, Auge frontal, Oberkörper frontal, Beine im Profil;</li>
<li>daneben erscheinen <b>Hieroglyphen</b>: Der Text erzählt, was das Bild zeigt.</li>
</ul>
<p>Es ist nicht so, dass die Ägypter nicht „gewusst“ hätten, wie man perspektivisch zeichnet: Sie wollten das Bild <b>klar und vollständig</b> machen, nicht realistisch.</p>`
    },
    {
      type: `example`, title: `Beispiel: die Neigung einer Pyramide berechnen`,
      html: `<p>Die Cheops-Pyramide hat eine Grundseite von etwa 230 m und eine ursprüngliche Höhe von etwa 146,6 m. Die halbe Grundseite beträgt 115 m: Der <b>Neigungswinkel</b> der Flächen ist der, dessen Tangens Höhe/halbe Grundseite = 146,6 / 115 ≈ 1,275 ist, also etwa <b>51,9°</b>. Das Verhältnis zwischen der Apothema (dem Abstand von der Mitte einer Seite zur Spitze, etwa 186 m) und der halben Grundseite (115 m) beträgt etwa 1,62, sehr nahe an der goldenen Zahl; es leitet sich aber wahrscheinlich von einem gewählten Verhältnis ab (7 Handbreiten pro Elle) und nicht von einer absichtlichen „goldenen“ Wahl.</p>`
    },
    {
      type: `decision`, title: `Wo lässt du dich bestatten?`,
      html: `<p>Du bist ein Pharao des Neuen Reiches (etwa 1500 v. Chr.). Die Pyramiden deiner Vorfahren, in der Wüste weithin sichtbar, wurden fast alle von Grabräubern <b>geplündert</b>: Mumie und Schatz sind nicht mehr da. Du musst entscheiden, wo du dein Grab bauen lässt.</p>`,
      question: `Was hättest du gewählt?`,
      options: [
        { label: `Eine neue, riesige, noch höhere Pyramide`, outcome: `Teuer und sehr auffällig: Sie würde die Räuber genauso anlocken wie die anderen.` },
        { label: `Ein in den Fels gehauenes Grab in einem verborgenen Tal`, outcome: `Das ist die Wahl, die die Pharaonen des Neuen Reiches trafen: das Tal der Könige bei Theben, mit unterirdischen Gräbern ohne äußere Monumente und einem weit entfernten Totentempel für den Kult.` },
        { label: `Kein Grab: sich den Göttern anvertrauen`, outcome: `Für die Ägypter war das Grab für die Unsterblichkeit unverzichtbar: Sie hätten nie darauf verzichtet.` }
      ],
      answer: 1,
      explain: `Ab etwa 1500 v. Chr. wählten die Pharaonen das Tal der Könige (etwa 60 Gräber): in den Fels gehauene Gänge und Kammern mit bemalten Wänden. Nicht einmal das genügte: Fast alle wurden schon in der Antike geplündert. Eine Ausnahme ist das Grab des Tutanchamun (KV62), klein und von Schutt bedeckt, 1922 von Howard Carter fast unversehrt entdeckt.`
    },
    {
      type: `curiosity`, title: `Wusstest du, … dass Champollion 1822 die Hieroglyphen las?`,
      html: `<p>Der <b>Stein von Rosette</b> (196 v. Chr., British Museum) trägt denselben Erlass in drei Schriften: Hieroglyphen, Demotisch und Griechisch. Der Franzose <b>Jean-François Champollion</b> verglich die Königsnamen in den Kartuschen (Ptolemaios, Kleopatra) und verkündete am 27. September 1822, das System entziffert zu haben, das Bildzeichen und Lautzeichen mischt. So begannen die Ägypter nach 1400 Jahren Schweigen wieder zu sprechen.</p>`
    },
    {
      type: `remember`, title: `Merke dir`,
      html: `<ul>
<li><b>Mesopotamien</b>: Ziegel, <b>Zikkurat</b> (Ur, etwa 2100 v. Chr.), Stele des Hammurabi (etwa 1750 v. Chr.), Ischtar-Tor (etwa 575 v. Chr.), assyrische Lamassu.</li>
<li><b>Ägypten</b>: Mastaba → Stufenpyramide (Djoser, Imhotep, etwa 2650 v. Chr.) → Pyramiden von Gizeh (Cheops etwa 2560 v. Chr., 146,6 m).</li>
<li><b>Ägyptischer Tempel</b>: Sphingenallee, Pylone, Hof, <b>Säulensaal</b>, Naos; Pfosten-Sturz-System.</li>
<li><b>Ägyptische Malerei und Skulptur</b>: Gesetz der Frontalität, Register, Bedeutungsgröße; Ausnahme Amarna (Nofretete).</li>
<li>Maske des Tutanchamun (etwa 1323 v. Chr.), 1922 von Carter entdeckt.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Andere Wege zum Verständnis`,
      intro: `Um dich in den beiden Kulturen zurechtzufinden, betrachte sie aus verschiedenen Blickwinkeln.`,
      tabs: [
        {
          label: `🔺 Die Pyramide im Schnitt`,
          html: `<p>In der Cheops-Pyramide gibt es drei Kammern: die <b>unterirdische</b> (unvollendete), die <b>Königinnenkammer</b> und die <b>Königskammer</b> (mit dem Sarkophag aus rosa Granit von Assuan), erreicht über eine <b>Große Galerie</b> mit Kragsteingewölbe von etwa 8 m Höhe. Über der Königskammer entlasten fünf „Entlastungskammern“ den Architrav vom Gewicht.</p>`,
          scene: `solid`,
          options: { shape: `pyramid`, n: 4, r: 1.6, h: 2.2, color: `#fcd34d`, labels: true }
        },
        {
          label: `🧱 Bauen ohne Kran`,
          html: `<p>Wie wurde gebaut? Rampen aus Ziegeln und Erde (gerade oder spiralförmig), um die Blöcke auf Holzschlitten hinaufzubringen; der Boden wurde vor dem Schlitten befeuchtet, um die Reibung zu verringern (wie ein Gemälde in Deir el-Bersha zeigt); Holzhebel für die letzte Positionierung; Seile aus Papyrus und Fasern. Die Verkleidungssteine (feiner Kalkstein aus Tura) wurden von oben nach unten verlegt und nach und nach geglättet. Die Alten hatten keine Räder für schwere Lasten: Die Kraft war die organisierte <b>Mannschaft</b>.</p>`
        },
        {
          label: `📜 Mesopotamien im Vergleich`,
          html: `<table>
<tr><th></th><th>Mesopotamien</th><th>Ägypten</th></tr>
<tr><td><b>Material</b></td><td>Lehmziegel und gebrannter Ziegel</td><td>behauener Stein</td></tr>
<tr><td><b>Symbolbau</b></td><td>Zikkurat (zum Himmel)</td><td>Pyramide (Grab)</td></tr>
<tr><td><b>Schrift</b></td><td>Keilschrift auf Ton</td><td>Hieroglyphen auf Stein und Papyrus</td></tr>
<tr><td><b>König</b></td><td>Stellvertreter der Götter</td><td>lebender Gott</td></tr>
<tr><td><b>Kunst</b></td><td>Erzählung, Macht, Gesetze</td><td>Ewigkeit, Jenseits</td></tr>
</table>`
        },
        {
          label: `🧩 Ordne zu`,
          html: `<p>Verbinde jedes Werk mit seiner Kultur.</p>`,
          widget: `classify`,
          options: { groups: [`Mesopotamien`, `Ägypten`], items: [[`Stele des Hammurabi`, 0], [`Cheops-Pyramide`, 1], [`Ischtar-Tor`, 0], [`Maske des Tutanchamun`, 1], [`Lamassu`, 0], [`Säulensaal von Karnak`, 1], [`Zikkurat von Ur`, 0], [`Büste der Nofretete`, 1]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Übersicht: mesopotamische und ägyptische Kunst`,
      nodes: [
        { id: `fiumi`, label: `Kulturen großer Flüsse`, x: 50, y: 6, color: `#64748b`, html: `Euphrat-Tigris und Nil.`, why: `Die Überschwemmungen düngen den Boden: landwirtschaftlicher Überschuss, daher Städte, Schreiber, Handwerker und Könige, die monumentale Werke errichten können.` },
        { id: `mes`, label: `Mesopotamien`, x: 22, y: 30, color: `#2563eb`, html: `Sumerer, Babylonier, Assyrer.`, why: `Ein Gebiet ohne Stein: Man baut mit Ziegeln. Die Stadtstaaten führen Krieg gegeneinander, deshalb zeigt sich die Macht auch in Kriegsszenen und geschriebenen Gesetzen.` },
        { id: `egi`, label: `Ägypten`, x: 78, y: 30, color: `#d97706`, html: `Jahrtausendelang geeintes Reich.`, why: `Natürliche Abgeschlossenheit (Wüste und Meer), politische Kontinuität: Der Stil ändert sich 3000 Jahre lang kaum.` },
        { id: `zig`, label: `Zikkurat und Ischtar-Tor`, x: 15, y: 62, color: `#3b82f6`, html: `Stufentürme und glasierte Ziegel.`, why: `Ein künstlicher Berg, um dem Gott näher zu kommen: Der Tempel entsteht in der Ebene, wo es keine Erhebungen gibt.` },
        { id: `ham`, label: `Stele des Hammurabi`, x: 35, y: 85, color: `#0ea5e9`, html: `282 Gesetze in Keilschrift.`, why: `Gesetze in Stein zu schreiben macht die Regeln öffentlich: Niemand kann sagen, er kenne sie nicht (etwa 1750 v. Chr.).` },
        { id: `pir`, label: `Pyramiden`, x: 68, y: 62, color: `#f59e0b`, html: `Mastaba → Djoser → Gizeh.`, why: `Von den übereinandergesetzten Steinen (Djoser, Imhotep) zur reinen Form: Der Pharao steigt mit dem Licht des Re zum Himmel auf.` },
        { id: `tem`, label: `Tempel und Säulensaal`, x: 92, y: 62, color: `#ef4444`, html: `Axialer Grundriss, Papyrussäulen.`, why: `Der Tempel ist ein Urhügel und ein Papyrussumpf: Die Säulen ahmen die Pflanzen nach.` },
        { id: `front`, label: `Frontalität und Register`, x: 78, y: 88, color: `#a855f7`, html: `Feste Regeln für die Bilder.`, why: `Ein korrektes Bild wirkt magisch im Jenseits: Deshalb ändert man es nicht.` }
      ],
      edges: [
        [`fiumi`, `mes`, `1.`], [`fiumi`, `egi`, `2.`], [`mes`, `zig`, `Bauwerk`], [`mes`, `ham`, `Gesetze`], [`egi`, `pir`, `Gräber`], [`egi`, `tem`, `Kult`], [`egi`, `front`, `Bilder`]
      ]
    },
    {
      type: `quiz`, title: `Mini-Quiz: Ägypten`,
      questions: [
        { type: `mc`, q: `Wer entwarf die Stufenpyramide des Djoser?`, options: [`Imhotep`, `Senenmut`, `Champollion`], answer: 0, explain: `Imhotep, Architekt und Arzt, etwa 2650 v. Chr.` },
        { type: `tf`, q: `Beim Gesetz der Frontalität ist der Kopf im Profil und das Auge von vorn gesehen.`, answer: true, explain: `So wird jeder Körperteil in seiner erkennbarsten Ansicht dargestellt.` },
        { type: `num`, q: `Wie viele Säulen hat der Säulensaal des Amun-Tempels von Karnak?`, answer: 134, tol: 0, explain: `134 Säulen, die mittleren etwa 21 m hoch.` },
        { type: `mc`, q: `Wer entdeckte 1922 das Grab des Tutanchamun?`, options: [`Howard Carter`, `Heinrich Schliemann`, `Arthur Evans`], answer: 0, explain: `Der britische Archäologe Howard Carter, im Tal der Könige.` }
      ]
    }
  ],
  glossary: [
    { t: `Zikkurat`, d: `Mesopotamischer Stufenturm aus Ziegeln mit einem Heiligtum an der Spitze.` },
    { t: `Keilschrift`, d: `Schrift mit keilförmigen Zeichen, in Ton geritzt.` },
    { t: `Lamassu`, d: `Geflügelter Stier mit Menschenkopf, Wächter der Tore assyrischer Paläste.` },
    { t: `Mastaba`, d: `Ägyptisches Grab in Form eines rechteckigen Pyramidenstumpfes.` },
    { t: `Pyramide`, d: `Monumentalgrab der Pharaonen mit quadratischer Grundfläche und dreieckigen Flächen.` },
    { t: `Säulensaal (Hypostyl)`, d: `Saal des ägyptischen Tempels mit dichten Säulenreihen.` },
    { t: `Naos`, d: `Cella des Tempels, in der die Statue des Gottes steht.` },
    { t: `Gesetz der Frontalität`, d: `Ägyptische Konvention: Kopf im Profil, Auge und Oberkörper von vorn, Beine im Profil.` },
    { t: `Hieroglyphen`, d: `Ägyptische Schrift aus Bildzeichen und Lautzeichen.` },
    { t: `Register`, d: `Waagerechter Streifen, in dem eine Szene angeordnet ist.` },
    { t: `Pfosten-Sturz-System`, d: `Bausystem mit Pfeilern und Architrav.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Was ist ein Zikkurat?`, options: [`Ein ägyptisches Grab`, `Ein mesopotamischer Stufenturm mit einem Heiligtum an der Spitze`, `Ein kretischer Palast`], answer: 1, explain: `Er war das irdische Haus des Gottes, aus Ziegeln.` },
      { type: `mc`, q: `Wo steht das rekonstruierte Ischtar-Tor?`, options: [`Louvre`, `Pergamonmuseum in Berlin`, `Museum von Kairo`], answer: 1, explain: `Es wurde nach den deutschen Ausgrabungen von Koldewey (1899–1917) nach Berlin gebracht.` },
      { type: `tf`, q: `Die Stele des Hammurabi enthält etwa 282 Gesetze.`, answer: true, explain: `Sie sind in Keilschrift in schwarzen Basalt gemeißelt.` },
      { type: `order`, q: `Bringe in die zeitliche Reihenfolge.`, items: [`Djoser-Pyramide`, `Cheops-Pyramide`, `Stele des Hammurabi`, `Maske des Tutanchamun`, `Ischtar-Tor`], explain: `Djoser (etwa 2650), Cheops (etwa 2560), Hammurabi (etwa 1750), Tutanchamun (etwa 1323), Ischtar-Tor (etwa 575 v. Chr.).` },
      { type: `num`, q: `Wie hoch war die Cheops-Pyramide ursprünglich (in Metern, auf ganze Zahlen gerundet)?`, answer: 147, tol: 1, unit: `m`, explain: `Ursprünglich 146,6 m, heute etwa 138 m, weil Verkleidung und Spitze verloren gegangen sind.` },
      { type: `mc`, q: `Welcher Pharao änderte Religion und Kunststil (Amarna)?`, options: [`Echnaton`, `Ramses II.`, `Cheops`], answer: 0, explain: `Echnaton führte den Aton-Kult und einen naturnäheren Stil ein.` },
      { type: `text`, q: `Wie heißt das ägyptische Grab in Form eines rechteckigen Pyramidenstumpfes, das älter ist als die Pyramiden?`, answer: [`mastaba`, `die mastaba`], explain: `Die Mastaba (arabisch „Bank“).` },
      { type: `mc`, q: `Wer entzifferte 1822 die Hieroglyphen?`, options: [`Champollion`, `Carter`, `Hammurabi`], answer: 0, explain: `Jean-François Champollion, dank des Steins von Rosette.` },
      { type: `tf`, q: `Die Pyramiden wurden von angeketteten Sklaven gebaut.`, answer: false, explain: `Die Ausgrabungen zeigen bezahlte und verpflegte Arbeiter mit eigenen Gräbern.` },
      { type: `mc`, q: `Welcher Teil eines ägyptischen Tempels ist am heiligsten und dunkelsten?`, options: [`Die Sphingenallee`, `Der Hof`, `Der Naos`], answer: 2, explain: `Im Naos steht die Statue des Gottes, nur für Priester und Pharao zugänglich.` }
    ]
  }
});
