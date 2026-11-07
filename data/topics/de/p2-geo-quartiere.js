TOPIC('de', {
  id: "p2-geo-quartiere",
  title: "Das Viertel und die Stadt",
  intro: "Rund um dein Zuhause gibt es <b>Straßen</b> 🛣️, <b>Plätze</b>, <b>Geschäfte</b> 🏪, vielleicht einen <b>Park</b> 🌳 und eine <b>Schule</b> 🏫. All das ist dein <b>Viertel</b>. Viele Viertel zusammen bilden eine <b>Stadt</b> 🏙️. Heute gehen wir sie erkunden!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Was ist ein Viertel? 🏘️",
      html: `<p>Das <b>Viertel</b> ist ein <b>Teil</b> der Stadt. Es ist das Gebiet rund um dein Zuhause, das du gut kennst.</p>
<p>In einem Viertel gibt es:</p>
<ul>
<li>🏠 <b>Wohnungen</b>: Häuser, Einfamilienhäuser, Mehrfamilienhäuser (Gebäude mit vielen Wohnungen);</li>
<li>🛣️ <b>Straßen</b> und <b>Plätze</b>, um sich fortzubewegen und sich zu treffen;</li>
<li>🏪 <b>Geschäfte</b> und Märkte zum Einkaufen;</li>
<li>🏫 <b>Einrichtungen</b>: Schule, Apotheke, Arztpraxis, Bibliothek …;</li>
<li>🌳 <b>Grünflächen</b>: Parks, Gärten, Beete.</li>
</ul>
<p>Ein kleines <b>Dorf</b> kann so groß sein wie ein einziges Viertel. Eine große <b>Stadt</b> hat viele: Rom zum Beispiel ist in 15 <b>Stadtbezirke</b> (Municipi) geteilt, jeder mit vielen Vierteln!</p>`
    },
    {
      type: "text",
      title: "Straßen und Plätze 🛣️",
      html: `<p>Straßen haben je nach Aussehen <b>verschiedene Namen</b>:</p>
<table>
<tr><th>Name</th><th>Wie sie ist</th></tr>
<tr><td>🛣️ <b>Straße</b></td><td>eine normale Straße</td></tr>
<tr><td>🌳 <b>Allee</b></td><td>eine breite Straße, oft mit Bäumen an den Seiten</td></tr>
<tr><td>🏛️ <b>Hauptstraße</b></td><td>eine wichtige Straße, oft im Zentrum, mit vielen Geschäften</td></tr>
<tr><td>🚶 <b>Gasse</b></td><td>eine schmale und kurze Straße</td></tr>
<tr><td>⛲ <b>Platz</b></td><td>ein offener Raum, wo sich Straßen treffen</td></tr>
</table>
<p>Jede Straße ist in Teile geteilt:</p>
<ul>
<li>🚗 die <b>Fahrbahn</b>, wo die Autos fahren;</li>
<li>🚶 der <b>Gehweg</b>, wo die Fußgänger gehen;</li>
<li>🦓 der <b>Zebrastreifen</b>, zum Überqueren;</li>
<li>🚦 die <b>Ampel</b>: rot = stehen, gelb = Achtung, grün = gehen;</li>
<li>🚲 manchmal der <b>Radweg</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Eine Kreuzung im Viertel",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#bbf7d0"/>
<rect x="0" y="120" width="600" height="80" fill="#6b7280"/>
<rect x="250" y="0" width="100" height="320" fill="#6b7280"/>
<rect x="0" y="105" width="250" height="15" fill="#d6d3d1"/>
<rect x="350" y="105" width="250" height="15" fill="#d6d3d1"/>
<rect x="0" y="200" width="250" height="15" fill="#d6d3d1"/>
<rect x="350" y="200" width="250" height="15" fill="#d6d3d1"/>
<rect x="235" y="0" width="15" height="120" fill="#d6d3d1"/>
<rect x="350" y="0" width="15" height="120" fill="#d6d3d1"/>
<rect x="235" y="200" width="15" height="120" fill="#d6d3d1"/>
<rect x="350" y="200" width="15" height="120" fill="#d6d3d1"/>
<rect x="200" y="128" width="12" height="64" fill="#ffffff"/>
<rect x="218" y="128" width="12" height="64" fill="#ffffff"/>
<rect x="182" y="128" width="12" height="64" fill="#ffffff"/>
<rect x="370" y="20" width="14" height="40" rx="3" fill="#111827"/>
<circle cx="377" cy="28" r="5" fill="#ef4444"/>
<circle cx="377" cy="40" r="5" fill="#facc15"/>
<circle cx="377" cy="52" r="5" fill="#22c55e"/>
<rect x="40" y="20" width="150" height="75" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<text x="115" y="63" font-size="17" text-anchor="middle" fill="#7f1d1d" font-weight="bold">SCHULE</text>
<rect x="400" y="230" width="160" height="75" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<text x="480" y="273" font-size="17" text-anchor="middle" fill="#92400e" font-weight="bold">GESCHÄFTE</text>
<circle cx="80" cy="260" r="25" fill="#15803d"/>
<circle cx="150" cy="270" r="25" fill="#15803d"/>
<text x="115" y="312" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Park</text>
<text x="470" y="160" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">Fahrbahn</text>
<text x="470" y="98" font-size="14" text-anchor="middle" fill="#0f172a">Gehweg</text>
<text x="205" y="225" font-size="14" text-anchor="middle" fill="#0f172a">Zebrastreifen</text>
<text x="440" y="45" font-size="14" text-anchor="middle" fill="#0f172a">Ampel</text>
</svg>`,
      caption: "Eine Kreuzung von oben gesehen: die Straßen, die Gehwege, der Zebrastreifen und die Ampel."
    },
    {
      type: "text",
      title: "Die Einrichtungen: Sie helfen allen 🤝",
      html: `<p>Die <b>Einrichtungen</b> (Dienste) sind die Orte und Menschen, die die <b>Bedürfnisse</b> der Bürger erfüllen.</p>
<ul>
<li>🏥 für die <b>Gesundheit</b>: Krankenhaus, Arztpraxis, Apotheke;</li>
<li>📚 zum <b>Lernen</b>: Schule, Bibliothek;</li>
<li>🚒 für die <b>Sicherheit</b>: Feuerwehr, Polizei;</li>
<li>🚌 zum <b>Fortbewegen</b>: Bus, Straßenbahn, U-Bahn, Bahnhof;</li>
<li>🏛️ zum <b>Organisieren der Stadt</b>: das <b>Rathaus</b>, wo der <b>Bürgermeister</b> arbeitet;</li>
<li>📮 zum <b>Kommunizieren</b>: das Postamt.</li>
</ul>
<p>Manche Einrichtungen sind <b>öffentlich</b>: Sie gehören allen und werden mit den <b>Steuern</b> der Bürger bezahlt (die staatliche Schule, der Park, die Gemeindebibliothek). Andere sind <b>privat</b>: Sie gehören jemandem, und man bezahlt, wenn man sie benutzt (der Spielzeugladen, die Pizzeria, das Kino).</p>`
    },
    {
      type: "widget",
      title: "Öffentlich oder privat?",
      widget: "classify",
      options: {
        groups: ["🏛️ Öffentliche Einrichtung", "🏪 Privates Unternehmen"],
        items: [
          ["🏫 staatliche Schule", 0],
          ["🍕 Pizzeria", 1],
          ["📚 Gemeindebibliothek", 0],
          ["🧸 Spielzeugladen", 1],
          ["🌳 öffentlicher Park", 0],
          ["🎬 Kino", 1],
          ["🚒 Feuerwehr", 0],
          ["💇 Friseur", 1]
        ]
      },
      caption: "Öffentliche Einrichtungen gehören allen; private Unternehmen gehören einer Person oder einer Firma."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Straßen und Einrichtungen",
      questions: [
        { type: "mc", q: "Wo müssen Fußgänger gehen?", options: ["Auf der Fahrbahn", "Auf dem Gehweg", "Auf dem Radweg"], answer: 1, explain: "Der Gehweg ist für die Fußgänger." },
        { type: "mc", q: "Wo arbeitet der Bürgermeister?", options: ["In der Apotheke", "Im Rathaus", "Am Bahnhof"], answer: 1, explain: "Der Bürgermeister arbeitet im Rathaus, dem Sitz der Gemeinde." },
        { type: "tf", q: "Die grüne Ampel bedeutet „halt an“.", answer: false, explain: "Rot = stehen, grün = gehen (aber immer vorher schauen!)." }
      ]
    },
    {
      type: "text",
      title: "Das Zentrum und der Stadtrand 🎯",
      html: `<p>Eine Stadt ist ein bisschen wie eine <b>Zielscheibe</b> 🎯:</p>
<ul>
<li>🏛️ In der <b>Altstadt</b> stehen die ältesten Häuser, die Kirchen, das Rathaus, der Hauptplatz. Die Straßen sind oft eng.</li>
<li>🏢 Weiter außen liegen die neueren Viertel, mit Wohnblöcken und breiten Straßen.</li>
<li>🏭 Am <b>Stadtrand</b> gibt es auch Fabriken, Einkaufszentren, große Parkplätze und, weiter weg, das Land 🌾.</li>
</ul>
<p>Städte wachsen <b>vom Zentrum nach außen</b>, wie die Jahresringe eines Baumes 🌳.</p>`
    },
    {
      type: "3d",
      title: "Wo entstehen Städte? 🏞️",
      scene: "terrain",
      caption: "Dreh die Landschaft und tippe auf die Teile: Entdecke, warum Städte an bestimmten Orten entstehen und an anderen nicht.",
      options: {
        features: {
          plain: { label: "Ebene", html: "Das Gelände ist flach: Es ist leicht, Häuser und Straßen zu bauen und Felder zu bestellen. Viele große Städte liegen in der Ebene, wie <b>Mailand</b>." },
          river: { label: "Fluss", html: "Er liefert Wasser zum Trinken und für die Felder und erlaubt es, mit dem Boot zu reisen. <b>Rom</b> entstand am Tiber, <b>Turin</b> am Po, <b>Florenz</b> am Arno." },
          coast: { label: "Küste", html: "In der Nähe des Meeres entstehen die Städte mit <b>Hafen</b>, wo die Schiffe ankommen: <b>Genua</b>, <b>Neapel</b>, <b>Palermo</b>." },
          bay: { label: "Bucht", html: "Eine vor dem Wind geschützte Einbuchtung: ein ausgezeichneter Ort für einen sicheren Hafen." },
          hill: { label: "Hügel", html: "Früher baute man Städte auch auf Hügeln, um sich besser vor Feinden zu verteidigen: Viele mittelalterliche Orte liegen auf einem Hügel." },
          mountain: { label: "Berg", html: "Im Gebirge ist es schwieriger zu bauen: Dort gibt es vor allem kleine <b>Dörfer</b>, in den Tälern." }
        }
      }
    },
    {
      type: "example",
      title: "Praktisches Beispiel: meine Adresse 📮",
      html: `<p>Die <b>Adresse</b> dient dazu, ein bestimmtes Haus zu finden. Die von Anna ist:</p>
<p style="font-size:1.1em">✉️ <b>Anna Müller<br>Lindenstraße 12<br>10115 Berlin</b></p>
<ul>
<li><b>Lindenstraße</b> = der Name der Straße;</li>
<li><b>12</b> = die <b>Hausnummer</b> des Hauseingangs;</li>
<li><b>10115</b> = die <b>Postleitzahl</b>, die dem Briefträger hilft;</li>
<li><b>Berlin</b> = die Stadt.</li>
</ul>
<p>Normalerweise liegen die <b>ungeraden</b> Nummern (1, 3, 5 …) auf einer Straßenseite und die <b>geraden</b> (2, 4, 6 …) auf der anderen. Lern deine Adresse auswendig: Sie ist wichtig! 🧠</p>`
    },
    {
      type: "example",
      title: "Praktisches Beispiel: ein sicherer Schulweg 🚸",
      html: `<p>Leo geht mit seinem Papa zu Fuß zur Schule. Das sind die Regeln, die er befolgt:</p>
<ol>
<li>🚶 Er geht auf dem <b>Gehweg</b>, weit weg vom Rand.</li>
<li>🦓 Er überquert die Straße nur am <b>Zebrastreifen</b>.</li>
<li>🚦 Er wartet auf das <b>Grün</b> der Fußgängerampel (das grüne Männchen).</li>
<li>👀 Bevor er die Straße überquert, schaut er <b>nach links</b>, dann <b>nach rechts</b>, dann noch einmal nach links.</li>
<li>🦺 Vor der Schule steht der <b>Schülerlotse</b> oder die Verkehrshelferin, die den Kindern hilft.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🔴⚫",
      html: `<p>In <b>Florenz</b> und <b>Genua</b> gibt es zwei Arten von Hausnummern: <b>rote</b> für Geschäfte und Werkstätten und <b>schwarze</b> (oder blaue) für Wohnungen. So kann es in derselben Straße zwei „Nummern 10“ geben! In <b>Venedig</b> dagegen folgen die Nummern nicht der Straße, sondern dem <b>Sestiere</b> (dem Stadtteil): Sie können über <b>6000</b> hinausgehen!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🚦",
      html: `<p>Die <b>erste Ampel</b> der Geschichte wurde 1868 in <b>London</b> vor dem Parlament aufgestellt. Sie funktionierte mit Gas und wurde von einem Polizisten von Hand gedreht! Kurz darauf explodierte sie jedoch … Elektrische Ampeln kamen viele Jahre später, Anfang des 20. Jahrhunderts, in den Vereinigten Staaten.</p>`
    },
    {
      type: "widget",
      title: "Finde die Einrichtungen auf dem Viertelplan",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e7e5e4"/>
<rect x="0" y="130" width="600" height="40" fill="#9ca3af"/>
<rect x="200" y="0" width="40" height="300" fill="#9ca3af"/>
<rect x="420" y="0" width="40" height="300" fill="#9ca3af"/>
<rect x="30" y="20" width="140" height="90" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<rect x="260" y="20" width="140" height="90" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/>
<rect x="480" y="20" width="100" height="90" fill="#86efac" stroke="#14532d" stroke-width="3"/>
<rect x="30" y="190" width="140" height="90" fill="#bbf7d0" stroke="#14532d" stroke-width="3"/>
<circle cx="70" cy="235" r="18" fill="#15803d"/>
<circle cx="130" cy="235" r="18" fill="#15803d"/>
<rect x="260" y="190" width="140" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="480" y="190" width="100" height="90" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
</svg>`,
        spots: [
          { x: 100, y: 65, label: "Schule" },
          { x: 330, y: 65, label: "Rathaus" },
          { x: 530, y: 65, label: "Apotheke" },
          { x: 100, y: 235, label: "Park" },
          { x: 330, y: 235, label: "Supermarkt" },
          { x: 530, y: 235, label: "Bibliothek" }
        ]
      },
      caption: "Klicke auf jedes Gebäude und wähle den Namen. Hinweis: Die Apotheke ist grün wie ihr Kreuz."
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Stadt zu verstehen",
      intro: "In der Welt sind Städte auf viele Arten organisiert. Und man kann sie auch spielend verstehen!",
      tabs: [
        {
          label: "🇯🇵 In Japan haben die Straßen keine Namen",
          html: `<p>In <b>Japan</b> haben fast alle Straßen <b>keinen Namen</b>! Um ein Haus zu finden, benutzt man die <b>Stadtteile</b> und die <b>Blocks</b> (die Häuserblöcke zwischen vier Straßen), die eine Nummer haben.</p>
<p>Eine japanische Adresse ist wie eine Schachtel in der anderen: <b>Stadt → Stadtteil → Block → Hausnummer</b>. Darum zeichnen Japaner oft kleine <b>Karten</b>, um zu erklären, wo sie wohnen.</p>`
        },
        {
          label: "🇺🇸 New York im Schachbrettmuster",
          html: `<p>In <b>Manhattan</b> in New York beschloss man 1811, die Straßen wie ein <b>Gitter</b> zu bauen, wie die Kästchen im Heft 📐. Die Straßen, die in die eine Richtung gehen, heißen <b>Avenue</b>, die in die andere <b>Street</b>, und fast alle haben eine <b>Nummer</b>: 1st Street, 2nd Street …</p>
<p>Auch die alten <b>Römer</b> bauten neue Städte im Schachbrettmuster, mit zwei Hauptstraßen, die sich kreuzten: dem <b>Cardo</b> und dem <b>Decumanus</b>. In Turin sieht man das noch heute!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#e2e8f0"/>
<rect x="0" y="50" width="600" height="14" fill="#64748b"/>
<rect x="0" y="113" width="600" height="14" fill="#64748b"/>
<rect x="0" y="176" width="600" height="14" fill="#64748b"/>
<rect x="100" y="0" width="14" height="240" fill="#334155"/>
<rect x="250" y="0" width="14" height="240" fill="#334155"/>
<rect x="400" y="0" width="14" height="240" fill="#334155"/>
<text x="520" y="45" font-size="15" fill="#0f172a" font-weight="bold">1st Street</text>
<text x="520" y="108" font-size="15" fill="#0f172a" font-weight="bold">2nd Street</text>
<text x="520" y="171" font-size="15" fill="#0f172a" font-weight="bold">3rd Street</text>
<text x="120" y="230" font-size="15" fill="#0f172a" font-weight="bold">Avenue</text>
<text x="270" y="230" font-size="15" fill="#0f172a" font-weight="bold">Avenue</text>
</svg>`
        },
        {
          label: "🏰 Die Stadt wie ein Körper",
          html: `<p>Eine Stadt ist wie ein <b>Körper</b>, der lebt:</p>
<ul>
<li>🛣️ die <b>Straßen</b> sind die Adern, in denen Autos und Menschen fließen;</li>
<li>🏛️ das <b>Rathaus</b> ist der Kopf, der organisiert;</li>
<li>🌳 die <b>Parks</b> sind die Lungen, die saubere Luft geben;</li>
<li>🚰 Wasserrohre, Kanalisation und Stromkabel sind unter der Erde versteckt, wie die Nerven unter der Haut.</li>
</ul>
<p>Wenn ein Teil nicht funktioniert (eine gesperrte Straße, eine Wasserstörung), leidet die ganze Stadt.</p>`
        },
        {
          label: "🧊 Ein Mehrfamilienhaus aus Würfeln",
          html: `<p>Ein <b>Mehrfamilienhaus</b> ist ein Gebäude mit vielen Wohnungen. Bewege die Regler: Wenn es 4 Wohnungen pro Etage gibt, 3 Reihen und 5 Etagen, wie viele Wohnungen sind es insgesamt? Jeder Würfel ist eine Wohnung!</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 5 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte: Wie eine Stadt aufgebaut ist",
      nodes: [
        { id: "citta", label: "Die Stadt", x: 50, y: 6, color: "#6366f1", html: "<p>Eine große Ansammlung von Häusern, Straßen und Einrichtungen, wo viele Menschen leben.</p>", why: "<p>Die ersten Städte entstanden vor etwa <b>6.000 Jahren</b> in Mesopotamien, als die Landwirtschaft zusätzliche Nahrung lieferte und nicht mehr alle Felder bestellen mussten: Manche konnten Handwerker, Händler oder Schreiber sein.</p>" },
        { id: "quartiere", label: "Das Viertel", x: 50, y: 28, color: "#f97316", html: "<p>Ein Teil der Stadt.</p>", why: "<p>Eine große Stadt ist zu weitläufig, um sie ganz zu kennen: Um sie zu organisieren, teilt man sie in Teile. Im antiken Rom gab es die <b>Rioni</b>, in Venedig die <b>Sestieri</b>, in Siena die <b>Contrade</b> des Palio.</p>" },
        { id: "strade", label: "Straßen und Plätze", x: 15, y: 50, color: "#64748b", html: "<p>Straße, Allee, Hauptstraße, Gasse, Platz.</p>", why: "<p>Sie dienen dazu, sich <b>fortzubewegen</b> und sich zu <b>treffen</b>. Der Platz entstand als Ort für Markt und Feste: Im antiken Rom hieß er <b>Forum</b>.</p>" },
        { id: "abitazioni", label: "Wohnungen", x: 38, y: 55, color: "#ef4444", html: "<p>Häuser, Einfamilienhäuser, Mehrfamilienhäuser.</p>", why: "<p>Wenn viele Menschen auf wenig Raum wohnen wollen, baut man <b>in die Höhe</b>: Darum gibt es in der Stadt Gebäude mit vielen Stockwerken.</p>" },
        { id: "servizi", label: "Öffentliche Einrichtungen", x: 62, y: 55, color: "#0ea5e9", html: "<p>Schule, Krankenhaus, Bibliothek, Verkehrsmittel, Feuerwehr.</p>", why: "<p>Sie erfüllen die Bedürfnisse von <b>allen</b>: Gesundheit, Bildung, Sicherheit. Sie werden mit den <b>Steuern</b> bezahlt, also mit dem Geld, das jeder Bürger je nach seinen Möglichkeiten an den Staat und die Gemeinde gibt.</p>" },
        { id: "negozi", label: "Geschäfte und Unternehmen", x: 85, y: 50, color: "#eab308", html: "<p>Supermärkte, Läden, Restaurants, Kinos.</p>", why: "<p>Sie sind <b>privat</b>: Wer sie eröffnet, verkauft Waren oder Dienstleistungen und verdient. Viele Geschäfte entstehen dort, wo viele Menschen vorbeikommen.</p>" },
        { id: "comune", label: "Gemeinde und Bürgermeister", x: 62, y: 82, color: "#a855f7", html: "<p>Die Gemeinde organisiert die Stadt; der Bürgermeister leitet sie.</p>", why: "<p>Der Bürgermeister wird von den Bürgern <b>gewählt</b>. Zusammen mit dem Gemeinderat entscheidet er, wo eine Schule, ein Park, ein Radweg gebaut wird.</p>" },
        { id: "regole", label: "Verkehrsregeln", x: 25, y: 85, color: "#16a34a", html: "<p>Gehweg, Zebrastreifen, Ampel.</p>", why: "<p>Wenn viele Menschen, Fahrräder und Autos dieselben Räume benutzen, braucht man für alle gleiche <b>Regeln</b>, um sich nicht wehzutun. Bei uns stehen sie in der <b>Straßenverkehrsordnung</b>.</p>" }
      ],
      edges: [
        ["citta", "quartiere", "geteilt in"],
        ["quartiere", "strade", "hat"],
        ["quartiere", "abitazioni", "hat"],
        ["quartiere", "servizi", "hat"],
        ["quartiere", "negozi", "hat"],
        ["servizi", "comune", "organisiert von der"],
        ["strade", "regole", "mit den"],
        ["comune", "regole", "setzt durch"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Stadt",
      questions: [
        { type: "mc", q: "Wo stehen normalerweise die ältesten Häuser?", options: ["Am Stadtrand", "In der Altstadt", "An der Autobahn"], answer: 1, explain: "Städte sind vom Zentrum nach außen gewachsen." },
        { type: "tf", q: "Die Gemeindebibliothek ist eine öffentliche Einrichtung.", answer: true, explain: "Sie gehört der Gemeinde, also allen Bürgern." },
        { type: "text", q: "Wie heißt die Nummer des Hauseingangs in einer Adresse?", answer: ["Hausnummer", "die Hausnummer"], explain: "Es ist die Hausnummer." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir 📌",
      html: `<ul>
<li>Das <b>Viertel</b> ist ein Teil der Stadt.</li>
<li>Es gibt <b>Wohnungen</b>, <b>Straßen und Plätze</b>, <b>Geschäfte</b>, <b>Einrichtungen</b> und <b>Grünflächen</b>.</li>
<li><b>Öffentliche Einrichtungen</b> gehören allen; <b>private Unternehmen</b> gehören jemandem.</li>
<li>Die <b>Gemeinde</b>, geleitet vom <b>Bürgermeister</b>, organisiert die Stadt.</li>
<li>Auf der Straße: <b>Gehweg</b>, <b>Zebrastreifen</b>, <b>Ampel</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Viertel", d: "Ein Teil einer Stadt." },
    { t: "Öffentliche Einrichtung", d: "Ein Dienst für alle Bürger, mit Steuern bezahlt (Schule, Krankenhaus, Bibliothek …)." },
    { t: "Rathaus", d: "Das Gebäude der Gemeinde, wo der Bürgermeister arbeitet." },
    { t: "Bürgermeister", d: "Die von den Bürgern gewählte Person, die die Gemeinde leitet." },
    { t: "Gehweg", d: "Der den Fußgängern vorbehaltene Teil der Straße." },
    { t: "Fahrbahn", d: "Der Teil der Straße, auf dem die Fahrzeuge fahren." },
    { t: "Hausnummer", d: "Die Nummer eines Hauseingangs entlang einer Straße." },
    { t: "Stadtrand", d: "Der äußerste Teil der Stadt, weit weg vom Zentrum." },
    { t: "Altstadt", d: "Der älteste Teil einer Stadt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Eine breite Straße mit Bäumen an den Seiten heißt …", options: ["Gasse", "Allee", "Platz"], answer: 1, explain: "Die Allee ist breit und mit Bäumen gesäumt." },
      { type: "mc", q: "Wo überquert man die Straße?", options: ["Am Zebrastreifen", "Mitten zwischen den Autos", "Wo es gerade passt"], answer: 0, explain: "Am Zebrastreifen, vorher gut schauen." },
      { type: "tf", q: "Das Kino ist eine öffentliche Einrichtung, die mit Steuern bezahlt wird.", answer: false, explain: "Das Kino ist normalerweise ein privates Unternehmen: Man bezahlt die Eintrittskarte." },
      { type: "mc", q: "Wer leitet die Gemeinde?", options: ["Der Schulleiter", "Der Bürgermeister", "Der Apotheker"], answer: 1, explain: "Der Bürgermeister, von den Bürgern gewählt." },
      { type: "order", q: "Bring in die Reihenfolge vom Kleinsten zum Größten.", items: ["Haus", "Viertel", "Stadt"], explain: "Viele Häuser bilden ein Viertel; viele Viertel eine Stadt." },
      { type: "text", q: "Wie heißt der Teil der Straße, auf dem die Fußgänger gehen?", answer: ["Gehweg", "der Gehweg", "Bürgersteig", "der Bürgersteig"], explain: "Der Gehweg." },
      { type: "mc", q: "Die Ampel ist rot. Was tust du?", options: ["Ich renne hinüber", "Ich bleibe stehen und warte", "Ich schließe die Augen"], answer: 1, explain: "Rot = stehen." },
      { type: "mc", q: "Wo findest du Medikamente?", options: ["In der Apotheke", "In der Bibliothek", "Bei der Post"], answer: 0, explain: "Die Apotheke verkauft Medikamente." },
      { type: "order", q: "Bevor ich die Straße überquere, schaue ich …", items: ["nach links", "nach rechts", "noch einmal nach links"], explain: "Man fährt rechts: Die nächsten Autos kommen von links." },
      { type: "tf", q: "Viele Städte sind in der Nähe eines Flusses oder des Meeres entstanden.", answer: true, explain: "Das Wasser brauchte man zum Trinken, für den Anbau und zum Reisen." },
      { type: "num", q: "Ein Mehrfamilienhaus hat 5 Etagen und 2 Wohnungen pro Etage. Wie viele Wohnungen gibt es?", answer: 10, tol: 0, unit: "Wohnungen", explain: "5 × 2 = 10." }
    ]
  }
});
