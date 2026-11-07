TOPIC('de', {
  id: "p3-geo-carte",
  title: "Die Landkarten",
  intro: "Eine Landkarte ist wie ein <b>Foto von oben</b>, verkleinert und mit Farben und Zeichen gezeichnet. Heute entdecken wir, wie man eine Stadt, eine Region oder die ganze Welt auf ein Blatt Papier bekommt: den <b>Maßstab</b>, die <b>Legende</b> und die verschiedenen <b>Kartenarten</b>. 🗺️",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Schritt 1: von oben schauen",
      html: `<p>Betrachte dein Federmäppchen von drei verschiedenen Stellen aus:</p>
<ul>
<li><b>Von vorn</b> (Frontalansicht): Du siehst die Vorderseite.</li>
<li><b>Von schräg</b> (Schrägansicht): Du siehst die Vorderseite und ein bisschen von oben.</li>
<li><b>Von oben</b> (<b>Zenitalansicht</b> oder „Vogelperspektive“): Du siehst nur die Oberseite. 🦅</li>
</ul>
<p>Die Kartografen, also die Menschen, die Karten zeichnen, benutzen <b>immer die Ansicht von oben</b>. So hat jede Sache ihre wahre Form und man kann Entfernungen messen.</p>`
    },
    {
      type: "text", title: "Schritt 2: verkleinern (der Maßstab)",
      html: `<p>Ein Park oder eine Stadt sind zu groß für ein Blatt Papier. Also <b>verkleinert</b> der Kartograf sie: Alle Maße werden durch dieselbe Zahl geteilt. Das nennt man <b>Verkleinerung im Maßstab</b>.</p>
<p>Der <b>Maßstab</b> wird so geschrieben: <b>1 : 100</b> (man liest „eins zu hundert“). Das bedeutet:</p>
<p style="font-size:1.15em">📏 <b>1 cm</b> auf der Zeichnung = <b>100 cm</b> (also 1 Meter) in der Wirklichkeit.</p>
<ul>
<li><b>1 : 100</b> → 1 cm = 1 m. Passt für den Grundriss deines Klassenzimmers.</li>
<li><b>1 : 100.000</b> → 1 cm = 1 km. Passt für einen Landkreis.</li>
<li><b>1 : 10.000.000</b> → 1 cm = 100 km. Passt für ganz Italien.</li>
</ul>
<p>Je <b>größer</b> die zweite Zahl, desto stärker ist die Wirklichkeit verkleinert und desto <b>weniger Einzelheiten</b> sieht man.</p>`
    },
    {
      type: "svg", title: "Von der Wirklichkeit zum Grundriss",
      caption: "Dasselbe Klassenzimmer von schräg und dann von oben gesehen, verkleinert und mit den Zeichen der Legende gezeichnet.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<text x="140" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SCHRÄGANSICHT</text>
<polygon points="40,240 240,240 270,110 70,110" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="70,110 270,110 270,60 70,60" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
<rect x="110" y="70" width="70" height="30" fill="#166534" stroke="#14532d" stroke-width="2"/>
<polygon points="80,215 120,215 128,185 88,185" fill="#a16207"/>
<polygon points="150,215 190,215 198,185 158,185" fill="#a16207"/>
<polygon points="105,170 140,170 146,145 111,145" fill="#a16207"/>
<polygon points="175,170 210,170 216,145 181,145" fill="#a16207"/>
<text x="300" y="165" font-size="34" text-anchor="middle" fill="#2563eb">➜</text>
<text x="300" y="195" font-size="13" text-anchor="middle" fill="#1e3a8a">von oben</text>
<text x="465" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">GRUNDRISS 1 : 100</text>
<rect x="350" y="50" width="230" height="190" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
<rect x="420" y="54" width="90" height="12" fill="#166534"/>
<rect x="375" y="100" width="40" height="25" fill="#a16207"/>
<rect x="445" y="100" width="40" height="25" fill="#a16207"/>
<rect x="515" y="100" width="40" height="25" fill="#a16207"/>
<rect x="375" y="160" width="40" height="25" fill="#a16207"/>
<rect x="445" y="160" width="40" height="25" fill="#a16207"/>
<rect x="515" y="160" width="40" height="25" fill="#a16207"/>
<rect x="545" y="236" width="30" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<rect x="355" y="258" width="16" height="12" fill="#a16207"/>
<text x="377" y="269" font-size="14" fill="#0f172a">Tisch</text>
<rect x="425" y="258" width="16" height="12" fill="#166534"/>
<text x="447" y="269" font-size="14" fill="#0f172a">Tafel</text>
<rect x="510" y="258" width="16" height="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<text x="532" y="269" font-size="14" fill="#0f172a">Tür</text>
<text x="465" y="292" font-size="14" text-anchor="middle" fill="#475569">LEGENDE</text>
</svg>`
    },
    {
      type: "example", title: "Praxisbeispiel: auf dem Grundriss messen",
      html: `<p>Auf dem Grundriss deines Klassenzimmers im Maßstab <b>1 : 100</b> misst die lange Wand <b>7 cm</b>.</p>
<p>Wie lang ist sie wirklich? Jeder Zentimeter steht für 100 cm, also:</p>
<p><b>7 × 100 = 700 cm = 7 Meter</b> ✅</p>
<p>Und umgekehrt: Wenn der Flur 12 m lang ist, zeichne ich ihn auf dem Grundriss <b>12 cm</b> lang.</p>`
    },
    {
      type: "remember", title: "Die Legende und die Farben",
      html: `<p>Jede Karte hat eine <b>Legende</b>: einen Kasten, der erklärt, was die <b>Zeichen</b> und <b>Farben</b> bedeuten. Auf physischen Karten sind die Farben fast immer diese:</p>
<ul>
<li>🟦 <b>hellblau / blau</b>: Meere, Seen, Flüsse (je dunkler, desto tiefer das Wasser);</li>
<li>🟩 <b>grün</b>: Ebenen;</li>
<li>🟨 <b>gelb / hellbraun</b>: Hügel;</li>
<li>🟫 <b>dunkelbraun</b>: Berge (je dunkler, desto höher);</li>
<li>⬜ <b>weiß</b>: Gletscher und ewiger Schnee.</li>
</ul>
<p>Und vergiss den <b>Norden</b> nicht: Er ist meistens <b>oben</b>, angezeigt durch einen Pfeil oder die <b>Windrose</b>.</p>`
    },
    {
      type: "3d", title: "Die echte Landschaft und ihre Farben auf der Karte",
      scene: "terrain",
      caption: "Dreh die Landschaft und tippe auf die Teile: Für jeden erfährst du, mit welcher Farbe oder welchem Zeichen der Kartograf ihn zeichnet.",
      options: {
        features: {
          sea: { label: "Meer", html: "Auf der physischen Karte ist es <b>hellblau</b>: Je dunkler das Blau, desto tiefer das Meer." },
          coast: { label: "Küste", html: "Sie wird mit einer <b>Linie</b> gezeichnet, die das Blau des Meeres von der Farbe des Landes trennt." },
          plain: { label: "Ebene", html: "Flaches, niedriges Land (unter 200 m): Auf der physischen Karte ist es <b>grün</b>." },
          hill: { label: "Hügel", html: "Erhebung bis etwa 600 m: Auf der Karte ist sie <b>gelb</b> oder hellbraun." },
          mountain: { label: "Berg", html: "Erhebung über 600 m: Auf der Karte ist sie <b>braun</b>, nach oben hin immer dunkler." },
          peak: { label: "Gipfel", html: "Die Spitze des Berges: Man markiert sie mit einem kleinen <b>Dreieck ▲</b> und ihrer Höhe in Metern, zum Beispiel ▲ 4.808 (Montblanc)." },
          glacier: { label: "Gletscher", html: "Eis, das nie schmilzt: Auf der Karte ist es <b>weiß</b>." },
          river: { label: "Fluss", html: "Eine <b>blaue Linie</b>, die zur Mündung hin breiter wird." },
          lake: { label: "See", html: "Ein <b>hellblauer Fleck</b>, umgeben von Land." }
        }
      }
    },
    {
      type: "quiz", title: "Mini-Quiz: Maßstab und Legende",
      questions: [
        { type: "mc", q: "Die Karte, die von oben gesehen gezeichnet wird, benutzt die …", options: ["Frontalansicht", "Zenitalansicht", "Seitenansicht"], answer: 1, explain: "Zenital = von oben, wie ein fliegender Vogel." },
        { type: "num", q: "Maßstab 1 : 100. Eine Wand misst auf dem Grundriss 5 cm. Wie viele Meter ist sie wirklich lang?", answer: 5, tol: 0, unit: "m", explain: "5 cm × 100 = 500 cm = 5 m." },
        { type: "mc", q: "Auf einer physischen Karte haben die Ebenen die Farbe …", options: ["braun", "grün", "weiß"], answer: 1, explain: "Grün für Ebenen, braun für Berge." }
      ]
    },
    {
      type: "text", title: "Schritt 3: die Kartenarten",
      html: `<p>Karten werden auf zwei Arten eingeteilt: nach <b>dem Grad der Verkleinerung</b> (der Maßstab) und nach <b>dem, was sie zeigen</b> (der Inhalt).</p>
<table>
<tr><th>Nach dem Maßstab</th><th>Was sie zeigt</th><th>Typischer Maßstab</th></tr>
<tr><td><b>Grundriss</b></td><td>ein Zimmer, ein Haus, eine Schule</td><td>1 : 50 – 1 : 500</td></tr>
<tr><td><b>Stadtplan</b></td><td>ein Stadtviertel, eine Stadt mit den Straßen</td><td>bis 1 : 10.000</td></tr>
<tr><td><b>Topografische Karte</b></td><td>ein kleines Gebiet: Wege, Häuser, Wälder</td><td>1 : 25.000 – 1 : 100.000</td></tr>
<tr><td><b>Regionalkarte</b></td><td>eine Region</td><td>1 : 200.000 – 1 : 1.000.000</td></tr>
<tr><td><b>Geografische Karte (Länderkarte)</b></td><td>ein Staat, ein Kontinent</td><td>über 1 : 1.000.000</td></tr>
<tr><td><b>Weltkarte</b></td><td>die ganze Erde auf einem Blatt</td><td>etwa 1 : 100.000.000</td></tr>
</table>
<p>Nach dem <b>Inhalt</b>:</p>
<ul>
<li><b>Physische Karte</b>: Berge, Ebenen, Flüsse, Seen, Meere (die Elemente der Natur).</li>
<li><b>Politische Karte</b>: Staaten, Regionen, Grenzen, Städte (die vom Menschen festgelegten Elemente). Jeder Staat hat eine andere Farbe.</li>
<li><b>Thematische Karte</b>: nur ein Thema, zum Beispiel das Klima, die Straßen, die landwirtschaftlichen Produkte oder wo die meisten Menschen leben.</li>
</ul>`
    },
    {
      type: "svg", title: "Physisch, politisch oder thematisch?",
      caption: "Dieselbe erfundene Insel auf drei verschiedene Arten gezeichnet.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ffffff"/>
<rect x="10" y="40" width="185" height="200" fill="#7dd3fc"/>
<ellipse cx="102" cy="140" rx="75" ry="80" fill="#4ade80"/>
<ellipse cx="110" cy="125" rx="45" ry="45" fill="#facc15"/>
<ellipse cx="115" cy="115" rx="22" ry="22" fill="#92400e"/>
<polygon points="115,100 108,112 122,112" fill="#ffffff"/>
<path d="M115,130 Q90,170 70,215" stroke="#1d4ed8" stroke-width="4" fill="none"/>
<text x="102" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#166534">PHYSISCH</text>
<text x="102" y="265" font-size="14" text-anchor="middle" fill="#0f172a">Berge, Hügel,</text>
<text x="102" y="283" font-size="14" text-anchor="middle" fill="#0f172a">Ebenen, Flüsse</text>
<rect x="208" y="40" width="185" height="200" fill="#e0f2fe"/>
<path d="M300,60 A75,80 0 0 0 225,140 L300,140 Z" fill="#fca5a5" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M300,60 A75,80 0 0 1 375,140 L300,140 Z" fill="#c4b5fd" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M225,140 A75,80 0 0 0 375,140 Z" fill="#fde68a" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<circle cx="270" cy="115" r="5" fill="#0f172a"/>
<circle cx="335" cy="110" r="5" fill="#0f172a"/>
<rect x="294" y="174" width="12" height="12" fill="#dc2626"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#b91c1c">POLITISCH</text>
<text x="300" y="265" font-size="14" text-anchor="middle" fill="#0f172a">Grenzen, Regionen,</text>
<text x="300" y="283" font-size="14" text-anchor="middle" fill="#0f172a">Städte, Hauptstadt ■</text>
<rect x="406" y="40" width="185" height="200" fill="#e0f2fe"/>
<ellipse cx="498" cy="140" rx="75" ry="80" fill="#e5e7eb"/>
<text x="470" y="115" font-size="26" text-anchor="middle">🍇</text>
<text x="530" y="125" font-size="26" text-anchor="middle">🐄</text>
<text x="490" y="180" font-size="26" text-anchor="middle">🌾</text>
<text x="498" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c3aed">THEMATISCH</text>
<text x="498" y="265" font-size="14" text-anchor="middle" fill="#0f172a">nur ein Thema:</text>
<text x="498" y="283" font-size="14" text-anchor="middle" fill="#0f172a">Agrarprodukte</text>
</svg>`
    },
    {
      type: "widget", title: "Spiel: physische oder politische Karte?",
      widget: "classify",
      caption: "Auf welcher Karte suchst du diese Dinge? Natürliche Elemente stehen auf der physischen, die vom Menschen festgelegten auf der politischen.",
      options: {
        groups: ["🏔️ Physische Karte", "🏛️ Politische Karte"],
        items: [
          ["der Fluss Po", 0], ["die Alpen", 0], ["der Gardasee", 0], ["die Poebene", 0], ["die Höhe des Montblanc", 0],
          ["die Grenze zu Frankreich", 1], ["Rom als Hauptstadt", 1], ["die 20 Regionen", 1], ["die Provinzhauptstädte", 1], ["die Namen der Staaten", 1]
        ]
      }
    },
    {
      type: "example", title: "Praxisbeispiel: welche Karte brauche ich?",
      html: `<ul>
<li>🥾 Du machst einen Ausflug ins Gebirge und willst dem Wanderweg folgen → <b>topografische Karte</b> 1 : 25.000 (man sieht sogar die Hütten und Brunnen).</li>
<li>🏙️ Du musst in einer neuen Stadt die Garibaldistraße finden → <b>Stadtplan</b>.</li>
<li>🚗 Ihr fahrt im Urlaub von Turin nach Bari → <b>Straßenkarte</b> von Italien (eine thematische Karte: die Straßen).</li>
<li>☀️ Du willst wissen, wo es in Italien am meisten regnet → <b>thematische Klimakarte</b>.</li>
<li>🌍 Du willst alle Kontinente zusammen sehen → <b>Weltkarte</b> oder <b>Globus</b>.</li>
</ul>`
    },
    {
      type: "3d", title: "Der Globus: die Erde ohne Verzerrung",
      scene: "globe",
      caption: "Dreh den Globus. Der Globus ist die einzige „Karte“, die die Erde in der richtigen Form zeigt: Alle flachen Karten verzerren sie ein wenig.",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Rom" },
          { lat: 72, lon: -40, label: "Grönland" },
          { lat: 2, lon: 21, label: "Afrika (Mitte)" },
          { lat: 51.48, lon: 0, label: "Greenwich (Nullmeridian 0°)" },
          { lat: 0, lon: -50, label: "Äquator" },
          { lat: 90, lon: 0, label: "Nordpol" }
        ]
      }
    },
    {
      type: "curiosity", title: "Wusstest du, dass … Grönland so groß wie Afrika aussieht?",
      html: `<p>Auf vielen Weltkarten (denen, die nach der Methode von <b>Gerhard Mercator</b> aus dem Jahr 1569 gezeichnet sind) sieht <b>Grönland</b> fast so groß aus wie <b>Afrika</b>. In Wirklichkeit ist Afrika etwa <b>14-mal größer</b>! 😮</p>
<p>Der Grund: Die Erde ist eine Kugel und um sie auf einem Blatt „flach zu machen“, muss man sie auseinanderziehen. Die Länder nahe den Polen werden besonders stark gedehnt. Deshalb ist der <b>Globus</b> wirklichkeitstreuer als jede flache Karte.</p>`
    },
    {
      type: "curiosity", title: "Wusstest du, dass … es eine fast 7 Meter lange Karte gibt?",
      html: `<p>Die <b>Tabula Peutingeriana</b> ist eine mittelalterliche Abschrift einer Straßenkarte des <b>antiken Roms</b>. Sie ist eine Rolle von etwa <b>6 Metern und 75 Zentimetern</b> Länge und nur 34 cm Höhe! Sie zeigt die Straßen des Römischen Reiches, die Städte und die Entfernungen zwischen den Etappen, wie ein altes „Navi“ für die Reisenden. Heute befindet sie sich in Wien.</p>`
    },
    {
      type: "alternatives", title: "Andere Wege, es zu verstehen",
      intro: "Wenn dir der Maßstab oder die Zeichen schwerfallen, probier einen dieser Wege.",
      tabs: [
        {
          label: "🧸 Die Welt der Spielsachen",
          html: `<p>Ein <b>Spielzeugauto</b> ist ein echtes, verkleinertes Auto. Oft steht darunter <b>1 : 43</b>: Das heißt, das echte Auto ist <b>43-mal</b> so lang.</p>
<p>Eine Karte macht dasselbe mit einem Gebiet: Der Maßstab sagt dir, <b>wie oft</b> die Wirklichkeit verkleinert wurde. Ein Puppenhaus, eine Modelleisenbahn, ein Flugzeugmodell: Das sind alles Gegenstände „im Maßstab“!</p>`
        },
        {
          label: "🏃 Orientierungslaufkarten (Schweden und Norwegen)",
          html: `<p>In den nordischen Ländern lernen die Kinder Karten beim <b>Orientierungslauf</b> kennen: ein Lauf durch den Wald mit Karte und Kompass, bei dem man markierte Punkte sucht. Ihre Karten benutzen besondere Farben, die auf der ganzen Welt gleich sind:</p>
<ul>
<li>⬜ <b>weiß</b> = Wald, in dem man gut laufen kann;</li>
<li>🟩 <b>grün</b> = dichter Wald, schwer zu durchqueren;</li>
<li>🟨 <b>gelb</b> = offene Wiese;</li>
<li>🟦 <b>blau</b> = Wasser;</li>
<li>🟫 <b>braun</b> = Geländeformen (Höhenlinien);</li>
<li>⬛ <b>schwarz</b> = Wege, Felsen, Häuser.</li>
</ul>
<p>Hast du es bemerkt? Hier ist Weiß nicht das Eis! Deshalb muss man <b>immer die Legende lesen</b>.</p>`
        },
        {
          label: "✏️ Zeichne dein Zimmer",
          html: `<p>Der beste Weg, einen Grundriss zu verstehen, ist, <b>selbst einen zu machen</b>:</p>
<ol>
<li>Miss dein Zimmer mit dem Maßband (zum Beispiel 4 m × 3 m).</li>
<li>Wähle den Maßstab 1 : 100: 1 m wird zu 1 cm. Zeichne ein Rechteck von <b>4 cm × 3 cm</b>.</li>
<li>Zeichne von oben Bett, Schrank, Schreibtisch, immer verkleinert.</li>
<li>Erfinde für jedes Möbelstück ein Zeichen und schreibe es in die <b>Legende</b>.</li>
<li>Zeichne den Pfeil für den <b>Norden</b>.</li>
</ol>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#f1f5f9"/>
<rect x="40" y="20" width="320" height="200" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
<rect x="50" y="30" width="90" height="140" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<rect x="55" y="35" width="80" height="30" fill="#ffffff" stroke="#1e3a8a"/>
<rect x="250" y="30" width="100" height="40" fill="#a16207"/>
<rect x="270" y="160" width="80" height="50" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<rect x="150" y="214" width="60" height="10" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="200" y="130" font-size="15" text-anchor="middle" fill="#475569">4 cm × 3 cm</text>
<text x="390" y="40" font-size="17" font-weight="bold" fill="#0f172a">LEGENDE</text>
<rect x="390" y="55" width="22" height="16" fill="#93c5fd" stroke="#1e3a8a"/>
<text x="420" y="69" font-size="15" fill="#0f172a">Bett</text>
<rect x="390" y="85" width="22" height="16" fill="#a16207"/>
<text x="420" y="99" font-size="15" fill="#0f172a">Schrank</text>
<rect x="390" y="115" width="22" height="16" fill="#fbbf24" stroke="#92400e"/>
<text x="420" y="129" font-size="15" fill="#0f172a">Schreibtisch</text>
<rect x="390" y="145" width="22" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="420" y="155" font-size="15" fill="#0f172a">Tür</text>
<text x="420" y="190" font-size="15" fill="#0f172a">Maßstab 1 : 100</text>
<polygon points="545,30 535,60 555,60" fill="#dc2626"/>
<text x="545" y="80" font-size="18" font-weight="bold" text-anchor="middle" fill="#dc2626">N</text>
</svg>`
        },
        {
          label: "🌍 3D-Globus gegen Blatt",
          html: `<p>Versuche, eine Orange zu „schälen“ und die Schale auf den Tisch zu drücken: Sie reißt oder wird breiter! Das ist dasselbe Problem, das die Kartografen mit der Erde haben. Dreh den Globus und sieh, wo Grönland und Afrika liegen: Auf dem Globus siehst du ihre <b>wahren</b> Größen.</p>`,
          scene: "globe",
          options: { points: [ { lat: 72, lon: -40, label: "Grönland: 2,2 Millionen km²" }, { lat: 2, lon: 21, label: "Afrika: 30 Millionen km²" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Landkarte: wie eine Landkarte entsteht",
      nodes: [
        { id: "realta", label: "Das wirkliche Gebiet", x: 50, y: 6, color: "#16a34a", html: "Berge, Flüsse, Städte und Straßen, groß und dreidimensional.", why: "Das Gelände ist zu groß, um es ganz auf einmal zu sehen: Deshalb haben die Menschen schon immer versucht, es zu zeichnen, zuerst auf Ton und Leder, dann auf Papier, heute auf dem Bildschirm." },
        { id: "zenit", label: "Ansicht von oben", x: 18, y: 30, color: "#0ea5e9", html: "Man betrachtet das Gelände von oben (Zenitalansicht).", why: "Nur wenn man von oben schaut, behält jede Sache ihre Form und man kann Entfernungen messen. Früher maß man am Boden mit optischen Instrumenten; seit dem 19. Jahrhundert benutzte man Fotos von Ballons und Flugzeugen, heute Satellitenbilder." },
        { id: "scala", label: "Verkleinerung im Maßstab", x: 50, y: 30, color: "#f97316", html: "Alle Maße werden durch dieselbe Zahl geteilt.", why: "Wenn man alles gleich verkleinert, bleiben die Formen gleich (sie sind „ähnlich“, wie die Geometrie sagt). So kann man mit einem Lineal die wahre Entfernung berechnen: Messwert auf der Karte × Zahl des Maßstabs." },
        { id: "simboli", label: "Zeichen und Legende", x: 82, y: 30, color: "#a855f7", html: "Farben und Zeichen anstelle der wirklichen Dinge.", why: "Ein echtes Haus wäre auf einer Karte von Italien kleiner als ein Punkt: Also benutzt man Zeichen. Viele Farben sind weltweit anerkannte Vereinbarungen (Hellblau für Wasser, Grün für Ebenen), aber jede Karte erklärt sie in der Legende." },
        { id: "nord", label: "Orientierung (Norden)", x: 82, y: 58, color: "#dc2626", html: "Der Norden ist meistens oben.", why: "Das ist eine in Europa verbreitete Gewohnheit bei Karten, die ab dem 16. Jahrhundert gedruckt wurden, und hängt auch mit dem Kompass zusammen, dessen Nadel nach Norden zeigt. Im Mittelalter hatten viele europäische Karten dagegen Osten oben, in Richtung Jerusalem: Daher kommt das Wort „orientieren“ (den Orient suchen)." },
        { id: "proiezione", label: "Von der Kugel zum Blatt", x: 18, y: 58, color: "#0284c7", html: "Die Erde ist eine Kugel, das Blatt ist flach: Jede flache Karte verzerrt ein wenig.", why: "Schon Eratosthenes berechnete um 240 v. Chr. den Umfang der Erde. Ptolemäus (2. Jahrhundert n. Chr.) lehrte, die Erde mit Breiten- und Längenkreisen zu zeichnen. 1569 erfand Mercator eine für Seeleute sehr nützliche Karte, die aber die Länder nahe den Polen vergrößert." },
        { id: "fisica", label: "Physische Karte", x: 18, y: 88, color: "#65a30d", html: "Zeigt die natürlichen Elemente.", why: "Sie dient dazu, den Aufbau des Geländes zu verstehen: wo man Landwirtschaft betreiben kann (Ebenen), wo die Flüsse fließen, wie hoch die Berge sind. Für die Erhebungen benutzt man Farbstufen oder Höhenlinien." },
        { id: "politica", label: "Politische Karte", x: 50, y: 88, color: "#e11d48", html: "Zeigt Staaten, Regionen, Grenzen und Städte.", why: "Grenzen sieht man im Gelände nicht: Sie werden von Menschen durch Gesetze und Verträge festgelegt und können sich mit der Zeit ändern. Deshalb müssen politische Karten öfter aktualisiert werden als physische." },
        { id: "tematica", label: "Thematische Karte", x: 82, y: 88, color: "#7c3aed", html: "Zeigt nur ein Thema (Klima, Straßen, Bevölkerung …).", why: "Wenn man nur ein Thema auf eine Karte setzt, sieht man sofort die Unterschiede zwischen den Orten. Eine der berühmtesten zeichnete der Arzt John Snow 1854 in London: Indem er die Cholerakranken markierte, erkannte er, dass die Krankheit von einem Brunnen kam." }
      ],
      edges: [
        ["realta", "zenit", "betrachtet man"], ["realta", "scala", "verkleinert man"], ["realta", "simboli", "vereinfacht man"],
        ["zenit", "proiezione", "wenn es die ganze Erde ist"], ["simboli", "nord", "mit"], ["scala", "fisica", "Inhalt"], ["scala", "politica", "Inhalt"], ["scala", "tematica", "Inhalt"],
        ["simboli", "tematica", "nur ein Thema"]
      ]
    },
    {
      type: "quiz", title: "Mini-Quiz: die Kartenarten",
      questions: [
        { type: "mc", q: "Auf welcher Karte findest du die Grenzen zwischen den Staaten?", options: ["physisch", "politisch", "topografisch mit den Wegen"], answer: 1, explain: "Die politische Karte zeigt Staaten, Regionen und Grenzen." },
        { type: "mc", q: "Die Karte, die die ganze Erde auf einem Blatt zeigt, ist …", options: ["die Weltkarte", "der Grundriss", "der Stadtplan"], answer: 0, explain: "Die Weltkarte (oder, wenn es eine Kugel ist, der Globus)." },
        { type: "tf", q: "Auf einer Karte im Maßstab 1 : 1.000.000 sieht man mehr Einzelheiten als auf einer Karte 1 : 25.000.", answer: false, explain: "Es ist umgekehrt: Je größer die zweite Zahl, desto stärker ist die Wirklichkeit verkleinert und desto weniger Einzelheiten sieht man." }
      ]
    }
  ],
  glossary: [
    { t: "Kartograf", d: "Wer Landkarten zeichnet." },
    { t: "Zenitalansicht", d: "Die Art, einen Ort von oben, senkrecht, zu betrachten." },
    { t: "Verkleinerung im Maßstab", d: "Die Wirklichkeit verkleinern, indem man alle Maße durch dieselbe Zahl teilt." },
    { t: "Maßstab", d: "Das Verhältnis zwischen den Maßen auf der Karte und den wirklichen. 1 : 100 heißt 1 cm = 100 cm." },
    { t: "Legende", d: "Der Kasten, der die Bedeutung der Zeichen und Farben der Karte erklärt." },
    { t: "Grundriss", d: "Zeichnung von oben, in sehr großem Maßstab, von einem kleinen Raum (Zimmer, Haus, Schule)." },
    { t: "Physische Karte", d: "Karte, die die natürlichen Elemente zeigt: Berge, Ebenen, Flüsse, Seen, Meere." },
    { t: "Politische Karte", d: "Karte, die Staaten, Regionen, Grenzen und Städte zeigt." },
    { t: "Thematische Karte", d: "Karte zu nur einem Thema, wie Klima, Straßen oder Bevölkerung." },
    { t: "Weltkarte", d: "Karte, die die ganze Oberfläche der Erde auf einem Blatt darstellt." },
    { t: "Globus", d: "Kugel, die die Erde in ihrer runden Form darstellt, ohne Verzerrungen." },
    { t: "Windrose", d: "Zeichnung, die die Himmelsrichtungen anzeigt: Norden, Süden, Osten, Westen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Landkarten stellen das Gelände dar, gesehen …", options: ["von vorn", "von oben", "von der Seite"], answer: 1, explain: "Man benutzt die Zenitalansicht, von oben." },
      { type: "mc", q: "Was bedeutet der Maßstab 1 : 100?", options: ["1 cm auf der Karte = 100 cm in der Wirklichkeit", "1 m auf der Karte = 100 km in der Wirklichkeit", "die Karte hat 100 Zeichen"], answer: 0, explain: "Jeder gezeichnete Zentimeter entspricht 100 cm, also 1 Meter." },
      { type: "num", q: "Grundriss im Maßstab 1 : 100. Das Bett ist auf der Zeichnung 2 cm lang. Wie viele Meter lang ist das echte Bett?", answer: 2, tol: 0, unit: "m", explain: "2 × 100 = 200 cm = 2 m." },
      { type: "num", q: "Maßstab 1 : 100. Die Turnhalle ist 20 m lang. Wie viele Zentimeter lang ist sie auf dem Grundriss?", answer: 20, tol: 0, unit: "cm", explain: "Beim Maßstab 1 : 100 wird jeder Meter zu 1 cm: 20 m → 20 cm." },
      { type: "text", q: "Wie heißt der Kasten, der die Zeichen einer Karte erklärt?", answer: ["Legende", "die Legende"], explain: "Die Legende." },
      { type: "mc", q: "Auf einer physischen Karte sind die Berge …", options: ["grün", "braun", "hellblau"], answer: 1, explain: "Braun, immer dunkler, wo die Berge höher sind." },
      { type: "mc", q: "Du willst wissen, wo die Grenze zwischen Italien und der Schweiz verläuft. Du benutzt eine … Karte.", options: ["physische", "politische", "Klima-"], answer: 1, explain: "Die Grenzen stehen auf der politischen Karte." },
      { type: "mc", q: "Eine Karte, die nur den Regen in Italien zeigt, ist eine … Karte.", options: ["thematische", "topografische", "politische"], answer: 0, explain: "Sie behandelt nur ein Thema: Sie ist thematisch." },
      { type: "order", q: "Bring die Karten in die richtige Reihenfolge, von der Karte mit dem kleinsten Ort bis zu der mit dem größten.", items: ["Grundriss des Klassenzimmers", "Stadtplan", "Regionalkarte", "Karte von Italien", "Weltkarte"], explain: "Je größer das Gebiet, desto stärker muss man verkleinern." },
      { type: "tf", q: "Der Globus zeigt die Form der Erde besser als eine Weltkarte.", answer: true, explain: "Die Erde ist rund wie der Globus; jede flache Karte verzerrt sie ein wenig." },
      { type: "tf", q: "Auf den Weltkarten von Mercator erscheint Grönland kleiner, als es in Wirklichkeit ist.", answer: false, explain: "Es erscheint viel größer: Die Länder nahe den Polen werden gedehnt." },
      { type: "mc", q: "Normalerweise liegt auf Karten der Norden …", options: ["unten", "oben", "rechts"], answer: 1, explain: "Nach Vereinbarung ist der Norden oben, angezeigt durch einen Pfeil oder die Windrose." }
    ]
  }
});
