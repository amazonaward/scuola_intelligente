TOPIC('de', {
  id: "l1-geo-risorse-sostenibilita",
  title: "Ressourcen und nachhaltige Entwicklung",
  intro: "Trinkwasser, Energie für das Licht, Essen auf dem Teller: Das sind die drei Ressourcen, von denen das Leben jedes Menschen abhängt. Doch sie sind ungleich verteilt und werden in einem Tempo verbraucht, das der Planet kaum verkraftet. In dieser Lektion sehen wir, wo sie sich befinden, wer sie nutzt, welche Probleme entstehen und wie die <b>Agenda 2030</b> Entwicklung, Gerechtigkeit und Umwelt miteinander verbinden will.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Was eine Ressource ist",
      html: `<p>Eine <b>Ressource</b> ist jedes Element der Natur, das der Mensch nutzt, um seine Bedürfnisse zu befriedigen. Man unterscheidet zwei große Kategorien:</p>
<ul>
<li><b>Erneuerbare Ressourcen</b>: Sie regenerieren sich bei maßvoller Nutzung in kurzer Zeit im Verhältnis zum Verbrauch. Süßwasser, Holz, fruchtbarer Boden, Wind, Sonnenlicht, Fische. Achtung: Erneuerbar bedeutet nicht unendlich. Ein Wald, der schneller abgeholzt wird, als er nachwächst, oder ein überfischter Fischbestand erschöpft sich.</li>
<li><b>Nicht erneuerbare Ressourcen</b>: Sie sind in Millionen von Jahren entstanden und bilden sich in menschlichen Zeiträumen nicht neu. Erdöl, Erdgas, Kohle, Erze (Eisen, Kupfer, Lithium, Seltene Erden).</li>
</ul>
<p>Jede Ressource hat eine <b>geografische Verteilung</b>, die nicht mit der der Bevölkerung übereinstimmt: Erdöl konzentriert sich am Persischen Golf, in Russland, Nordamerika und Venezuela; Süßwasser ist reichlich in Kanada, Brasilien und Russland vorhanden, fehlt aber im Nahen Osten und in der Sahelzone; Lithium findet sich im \"Dreieck\" Chile-Argentinien-Bolivien und in Australien; Kobalt kommt zu mehr als zwei Dritteln aus der Demokratischen Republik Kongo. Aus diesen Unterschieden entstehen Handel, Abhängigkeiten, Konflikte und Zusammenarbeit.</p>`
    },
    {
      type: "widget",
      title: "Aufgabe: erneuerbar oder nicht erneuerbar?",
      widget: "classify",
      options: {
        groups: ["Erneuerbar", "Nicht erneuerbar"],
        items: [
          ["☀️ Sonnenlicht", 0],
          ["🛢️ Erdöl", 1],
          ["💨 Wind", 0],
          ["⛏️ Kohle", 1],
          ["🌊 Wellenenergie", 0],
          ["⛽ Erdgas", 1],
          ["🌋 Erdwärme (Geothermie)", 0],
          ["⚛️ Uran", 1]
        ]
      },
      caption: "Die Grenze liegt in der Regenerationszeit: Uran ist ein Mineral und erneuert sich nicht; Holz schon, aber nur, wenn wir nicht mehr schlagen, als nachwächst."
    },
    {
      type: "text",
      title: "2. Das Wasser",
      html: `<p>Die Erde ist der \"blaue Planet\", aber nutzbares Wasser gibt es nur sehr wenig. <b>97,5 %</b> des Wassers auf dem Planeten sind <b>Salzwasser</b> (Meere und Ozeane). Die übrigen <b>2,5 %</b> sind Süßwasser, aber etwa zwei Drittel davon sind in <b>Gletschern und Polkappen</b> gebunden, und fast der gesamte Rest liegt im <b>Grundwasser</b>. Flüsse, Seen und Feuchtgebiete enthalten weniger als <b>0,01 %</b> des gesamten Wassers der Erde, und doch sind sie die am leichtesten zugängliche Quelle.</p>
<p>Die wichtigsten <b>Verwendungen</b> von Süßwasser weltweit: etwa <b>70 % für die Landwirtschaft</b> (Bewässerung), etwa <b>20 % für die Industrie</b> und etwa <b>10 % für den Haushalt</b> (Trinken, Kochen, Waschen). In Italien verbraucht jeder Einwohner zu Hause etwa 215-220 Liter Wasser pro Tag, einer der höchsten Werte in Europa.</p>
<p><b>Die Probleme</b>:</p>
<ul>
<li><b>Zugang</b>: Weltweit haben etwa <b>2,2 Milliarden</b> Menschen keinen Zugang zu sicher verwaltetem Trinkwasser und etwa <b>3,5 Milliarden</b> keinen zu sicheren sanitären Anlagen (WHO/UNICEF). Jeden Tag laufen Kinder und Frauen, vor allem in Subsahara-Afrika, stundenlang, um Wasser zu holen.</li>
<li><b>Wasserstress</b>: wenn die Entnahmen einen großen Teil der verfügbaren Ressourcen übersteigen. Betroffen sind der Nahe Osten und Nordafrika, Indien, Zentralasien, Kalifornien und zunehmend der mediterrane Raum Europas.</li>
<li><b>Verschmutzung</b>: Industrieabwässer, Düngemittel, Pestizide, Plastik und ungeklärte Abwässer.</li>
<li><b>Übernutzung</b>: Der dramatischste Fall ist der <b>Aralsee</b> in Zentralasien: Seit den 1960er-Jahren leitete die UdSSR die Flüsse Amudarja und Syrdarja um, um Baumwolle zu bewässern, und der See, der einst der viertgrößte der Welt war, ist auf einen kleinen Bruchteil seiner Fläche geschrumpft und hat eine Salzwüste hinterlassen.</li>
<li><b>Konflikte</b>: Flüsse, die mehrere Staaten durchqueren (Nil, Euphrat und Tigris, Jordan, Mekong, Indus), sind oft umstritten. Der große äthiopische Staudamm am Blauen Nil (GERD) ist Gegenstand von Spannungen mit Ägypten und dem Sudan.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Wo sich das Wasser der Erde befindet",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="300" y="24" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Das gesamte Wasser der Erde</text>
<rect x="40" y="40" width="520" height="34" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2"/>
<rect x="40" y="40" width="13" height="34" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
<text x="300" y="63" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">97,5% salzig (Meere und Ozeane)</text>
<text x="40" y="100" font-size="15" fill="#0369a1" font-weight="bold">2,5% Süßwasser</text>
<text x="300" y="130" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Vom Süßwasser</text>
<rect x="40" y="145" width="520" height="34" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="40" y="145" width="360" height="34" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<rect x="400" y="145" width="155" height="34" fill="#7dd3fc" stroke="#0369a1" stroke-width="2"/>
<rect x="555" y="145" width="5" height="34" fill="#1d4ed8"/>
<text x="220" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">etwa 69%: Gletscher</text>
<text x="478" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">etwa 30%: Grundwasser</text>
<text x="560" y="205" font-size="14" text-anchor="end" fill="#1d4ed8" font-weight="bold">weniger als 1%: Flüsse, Seen, Feuchte</text>
<text x="40" y="250" font-size="15" fill="#111827">Das leicht zugängliche Wasser (Flüsse, Seen, flaches Grundwasser)</text>
<text x="40" y="272" font-size="15" fill="#111827">ist ein winziger Bruchteil des Ganzen: Darum ist es wichtig, es nicht zu verschwenden.</text>
</svg>`,
      caption: "Gerundete Daten (USGS und UNESCO). Die Balken sind nicht ganz maßstabsgetreu."
    },
    {
      type: "example",
      title: "Praxisbeispiel: das versteckte Wasser in Produkten",
      html: `<p>Der <b>Wasserfußabdruck</b> (<i>Water Footprint</i>) misst das Wasser, das zur Herstellung eines Gutes verwendet wird, auch wenn man es nicht sieht. Größenordnungen (Schätzungen des Water Footprint Network):</p>
<table>
<tr><th>Produkt</th><th>Benötigtes Wasser (ca.)</th></tr>
<tr><td>1 Tasse Kaffee</td><td>140 Liter</td></tr>
<tr><td>1 kg Brot</td><td>1.600 Liter</td></tr>
<tr><td>1 kg Käse</td><td>5.000 Liter</td></tr>
<tr><td>1 kg Rindfleisch</td><td>über 15.000 Liter</td></tr>
<tr><td>1 Jeans</td><td>7.000-10.000 Liter</td></tr>
</table>
<p>Eine Dusche von 5 Minuten verbraucht etwa 50-60 Liter; für 1 kg Rindfleisch braucht man das Wasser von etwa 250 Duschen. Das heißt nicht, nie Fleisch zu essen, aber die Ernährung hat großes Gewicht beim Wasser: Eine Ernährung mit mehr Hülsenfrüchten, Getreide und Gemüse hat einen viel niedrigeren Wasserfußabdruck.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Ressourcen und Wasser",
      questions: [
        { type: "mc", q: "Wie viel Prozent des Wassers der Erde sind Süßwasser?", options: ["Etwa 2,5 %", "Etwa 25 %", "Etwa 50 %"], answer: 0, explain: "97,5 % sind Salzwasser; vom Süßwasser liegt der größte Teil in Gletschern und im Grundwasser." },
        { type: "mc", q: "In welchem Bereich wird weltweit das meiste Süßwasser verbraucht?", options: ["Industrie", "Landwirtschaft", "Haushalt"], answer: 1, explain: "Etwa 70 % der Entnahmen dienen der Bewässerung der Felder." },
        { type: "tf", q: "Erdöl ist eine erneuerbare Ressource, weil die Erde es ständig produziert.", answer: false, explain: "Es ist in Millionen von Jahren entstanden: In menschlichen Zeiträumen ist es nicht erneuerbar." }
      ]
    },
    {
      type: "text",
      title: "3. Die Energie",
      html: `<p>Energie treibt Industrie, Verkehr, Wohnungen und Krankenhäuser an. Weltweit stammen noch etwa <b>80 %</b> der Primärenergie aus <b>fossilen Brennstoffen</b>: <b>Erdöl</b> (etwa 30 %), <b>Kohle</b> (etwa 26 %) und <b>Erdgas</b> (etwa 23 %). Der Rest ist <b>Wasserkraft</b>, <b>Kernenergie</b>, <b>Solar</b>, <b>Wind</b> und <b>Biomasse</b>.</p>
<p>Die Verteilung des Verbrauchs ist sehr ungleich: Im Durchschnitt verbraucht ein Einwohner der Vereinigten Staaten oder Kanadas <b>mehr als fünfmal</b> so viel Energie wie ein Afrikaner oder Inder. Etwa <b>700 Millionen</b> Menschen weltweit haben keinen Strom und etwa <b>2 Milliarden</b> kochen auf umweltschädliche Weise mit Holz oder Kohle, mit schweren Gesundheitsschäden.</p>
<p><b>Die Probleme</b>:</p>
<ul>
<li><b>Klimawandel</b>: Das Verbrennen fossiler Brennstoffe setzt CO₂ frei (etwa zwei Drittel der Treibhausgasemissionen stammen aus der Energie).</li>
<li><b>Abhängigkeit und Geopolitik</b>: Importländer hängen von Exportländern ab. Italien importiert fast 75-80 % der Energie, die es verbraucht. Die <b>Ölkrise von 1973</b> (Embargo der arabischen OPEC-Staaten) vervierfachte den Ölpreis und führte zu Sparmaßnahmen (in Italien die \"Sonntage zu Fuß\"); 2022 zeigte der russische Einmarsch in die Ukraine, wie stark Europa an russisches Gas gebunden war.</li>
<li><b>Erschöpfung</b> der nicht erneuerbaren Ressourcen und Umweltfolgen der Förderung (Ölpest, Abholzung, Bergwerke).</li>
</ul>
<p>Die <b>Energiewende</b> ist der Übergang von fossilen Brennstoffen zu erneuerbaren Quellen und zu einer effizienteren Nutzung. <b>Solar</b>- und <b>Windenergie</b> sind rasant gewachsen: Die Kosten der Photovoltaik sind in zehn Jahren (2010-2020) um über 80 % gesunken, und erneuerbare Energien erzeugen heute etwa <b>30 %</b> des weltweiten Stroms (und über 40 % in Italien, vor allem mit Wasserkraft, Solar, Wind und Geothermie in der Toskana, wo 1904 in Larderello die erste mit Erdwärme betriebene Glühbirne aufleuchtete).</p>
<p>Es gibt keine \"perfekte\" Quelle: <b>Solar</b> und <b>Wind</b> sind unstetig (es braucht Speicher und Netze); <b>Kernenergie</b> stößt kein CO₂ aus, erzeugt aber radioaktiven Abfall und hat hohe Kosten und lange Bauzeiten (in Italien haben zwei Volksabstimmungen, 1987 und 2011, Nein gesagt); <b>Wasserkraft</b> verändert die Flüsse; <b>Biomasse</b> konkurriert mit der Nahrung. Deshalb spricht man von einem <b>Energiemix</b> und von <b>Effizienz</b> (die billigste Energiequelle ist die Energie, die nicht verschwendet wird).</p>`
    },
    {
      type: "svg",
      title: "Der weltweite Energiemix",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Woher die Primärenergie weltweit kommt (gerundete Werte)</text>
<rect x="40" y="50" width="300" height="30" fill="#1f2937"/>
<text x="350" y="72" font-size="15" fill="#111827">Erdöl ~30%</text>
<rect x="40" y="95" width="260" height="30" fill="#6b7280"/>
<text x="310" y="117" font-size="15" fill="#111827">Kohle ~26%</text>
<rect x="40" y="140" width="230" height="30" fill="#f97316"/>
<text x="280" y="162" font-size="15" fill="#111827">Erdgas ~23%</text>
<rect x="40" y="185" width="70" height="30" fill="#2563eb"/>
<text x="120" y="207" font-size="15" fill="#111827">Wasserkraft ~7%</text>
<rect x="40" y="230" width="40" height="30" fill="#a855f7"/>
<text x="90" y="252" font-size="15" fill="#111827">Kernenergie ~4%</text>
<rect x="300" y="230" width="90" height="30" fill="#16a34a"/>
<text x="400" y="252" font-size="15" fill="#111827">Andere Erneuerbare ~10%</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#6b7280">Schätzung: Fossile machen weiterhin etwa 80 % aus; die Prozentwerte schwanken von Jahr zu Jahr.</text>
</svg>`,
      caption: "Die Primärenergie umfasst alles: Strom, Verkehr, Heizung. Der Anteil der Erneuerbaren allein beim Strom ist viel höher (etwa 30 %)."
    },
    {
      type: "text",
      title: "4. Die Nahrung",
      html: `<p>Weltweit wird genug Nahrung für alle erzeugt (laut FAO theoretisch für etwa 10 Milliarden Menschen), und doch <b>hungern</b> etwa <b>733 Millionen</b> Menschen (etwa 9 % der Menschheit, FAO-Daten 2023), vor allem in Subsahara-Afrika und Südasien, und fast <b>2,8 Milliarden</b> können sich keine gesunde Ernährung leisten. Gleichzeitig ist mehr als <b>jeder achte Erwachsene</b> weltweit fettleibig. Das ist das Paradox der <b>Mangelernährung</b>: nicht nur Hunger, sondern auch Mangel und Überfluss. Hunger hat eher <b>politische und wirtschaftliche</b> als landwirtschaftliche Ursachen: Armut, Kriege, instabile Preise, extreme Wetterereignisse (wie Amartya Sen erklärt hat, der gezeigt hat, dass große Hungersnöte oft ohne tatsächlichen Nahrungsmangel entstehen).</p>
<ul>
<li><b>Grüne Revolution</b> (1950er-1970er Jahre): Mit ausgewähltem Saatgut, Dünger, Pestiziden und Bewässerung steigerten der Agrarwissenschaftler <b>Norman Borlaug</b> (Friedensnobelpreis 1970) und andere die Weizen- und Reiserträge in Mexiko, Indien und Asien stark und verhinderten so Hungersnöte für Hunderte Millionen Menschen. Sie verursachte aber auch Verschmutzung durch Agrochemikalien, Verlust der Artenvielfalt und hohen Wasserverbrauch.</li>
<li><b>Lebensmittelverschwendung</b>: Laut UNEP wurden 2022 etwa <b>1 Milliarde Tonnen</b> Lebensmittel verschwendet, fast 19 % der für die Verbraucher verfügbaren Menge (dazu kommt, was auf den Feldern und entlang der Lieferkette verloren geht). Lebensmittel zu verschwenden bedeutet auch, Wasser, Land und Energie zu verschwenden, und verursacht etwa 8-10 % der weltweiten Treibhausgasemissionen.</li>
<li><b>Tierhaltung</b>: Sie braucht viel Land, Wasser und Futter und stößt Methan aus; die Tierhaltung ist für etwa 12-15 % der globalen Emissionen verantwortlich.</li>
<li><b>Fischerei</b>: Mehr als ein Drittel der weltweiten Fischbestände wird über die biologischen Regenerationsgrenzen hinaus befischt (Überfischung). Die Aquakultur liefert heute etwa die Hälfte des Fisches, den wir essen.</li>
<li><b>Boden</b>: Erosion, Wüstenbildung, Verlust der Fruchtbarkeit. Ein Drittel der Böden weltweit ist degradiert; es dauert Jahrhunderte, bis sich wenige Zentimeter fruchtbarer Boden bilden.</li>
<li><b>Land Grabbing</b>: Kauf oder Pacht großer Landflächen in armen Ländern durch ausländische Staaten oder Unternehmen.</li>
</ul>
<p>Die Lösungen drehen sich um eine <b>nachhaltige Landwirtschaft</b> (Fruchtfolgen, ökologischer Landbau und Präzisionslandwirtschaft, Agrarökologie), um die Verringerung der Verschwendung, um pflanzenreichere Ernährung, kurze Lieferketten und die Unterstützung kleiner Erzeuger.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass unser Essen eine Geografie hat?",
      html: `<p>Die <b>Tomate</b>, die <b>Kartoffel</b>, der <b>Mais</b>, der Kakao und die Chilischote stammen aus <b>Amerika</b>: Vor 1492 kannte die italienische Küche keine Tomaten! Der <b>Kaffee</b> kommt aus Äthiopien, der <b>Reis</b> aus Asien, die <b>Trockenpasta</b> verbreitete sich ab dem Mittelalter auf Sizilien und in Süditalien. Heute stammt mehr als die Hälfte der weltweiten Kalorien aus nur <b>drei Getreidearten</b>: Reis, Weizen und Mais. Eine Ernährung, die auf wenigen Sorten beruht, ist anfällig: Eine Krankheit kann ganze Ernten vernichten, wie es der <b>Kartoffelfäule</b> in Irland (1845-1849) gelang, die etwa eine Million Tote forderte und zu über einer Million Auswanderern führte.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass eine Flasche Wasser mehr kostet als Leitungswasser?",
      html: `<p>In Italien kostet Leitungswasser im Durchschnitt etwa <b>2 Euro pro 1.000 Liter</b> (1 m³), während Wasser in Flaschen tausendmal mehr kosten kann. Italien gehört zu den Ländern mit dem höchsten Flaschenwasserverbrauch der Welt (über 200 Liter pro Kopf und Jahr), mit großen Auswirkungen durch Plastik und Transport, während das Leitungswasser sehr häufig kontrolliert wird. <b>Wasserspender</b> (<i>case dell'acqua</i>) und Trinkflaschen gehören zu den einfachsten Wegen, Abfall und Emissionen zu verringern.</p>`
    },
    {
      type: "text",
      title: "5. Nachhaltige Entwicklung",
      html: `<p>Im Jahr <b>1972</b> warnte der Bericht <i>Die Grenzen des Wachstums</i> (im Auftrag des Club of Rome, gegründet vom Italiener <b>Aurelio Peccei</b>), dass unendliches Wachstum auf einem endlichen Planeten unmöglich ist. 1987 definierte der Bericht <i>Unsere gemeinsame Zukunft</i> (<b>Brundtland-Bericht</b>, benannt nach der Vorsitzenden der Kommission, der Norwegerin Gro Harlem Brundtland) die <b>nachhaltige Entwicklung</b>: <i>\"eine Entwicklung, die die Bedürfnisse der Gegenwart befriedigt, ohne die Möglichkeiten künftiger Generationen zu gefährden, ihre eigenen Bedürfnisse zu befriedigen\"</i>.</p>
<p>Drei Dimensionen (<b>die drei Säulen</b>), die zusammengehalten werden müssen:</p>
<ul>
<li>🌍 <b>ökologisch</b>: Ressourcen nicht schneller verbrauchen, als sie sich regenerieren, Verschmutzung und Emissionen verringern;</li>
<li>⚖️ <b>sozial</b>: Gerechtigkeit, menschenwürdige Arbeit, Gesundheit, Bildung, Gleichstellung;</li>
<li>💶 <b>wirtschaftlich</b>: dauerhafter Wohlstand und Beschäftigung.</li>
</ul>
<p><b>Die Etappen</b>: UN-Konferenz von <b>Rio de Janeiro</b> (1992, \"Erdgipfel\"), <b>Kyoto-Protokoll</b> (1997), Millenniums-Entwicklungsziele (2000-2015), <b>Pariser Klimaabkommen</b> (2015) und am 25. September 2015 die <b>Agenda 2030</b> für nachhaltige Entwicklung, unterzeichnet von <b>193</b> UN-Staaten: <b>17 Ziele</b> (SDGs, <i>Sustainable Development Goals</i>) und <b>169 Unterziele</b>, die bis <b>2030</b> erreicht werden sollen.</p>
<p>Ein nützliches Instrument ist der <b>ökologische Fußabdruck</b>, die Land- und Meeresfläche, die nötig ist, um die Ressourcen zu erzeugen, die eine Person oder ein Land verbraucht, und um deren Abfälle aufzunehmen. Der <b>Erdüberlastungstag</b> (<i>Earth Overshoot Day</i>) bezeichnet den Tag des Jahres, an dem die Menschheit bereits alle Ressourcen verbraucht hat, die die Erde in einem Jahr regenerieren kann: 2024 fiel er auf den <b>1. August</b>. Würden alle wie ein Italiener leben, bräuchte man etwa 2,7 Planeten; wie ein durchschnittlicher US-Bürger etwa 5.</p>`
    },
    {
      type: "svg",
      title: "Die 17 Ziele der Agenda 2030",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="300" y="22" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Agenda 2030: drei Zielgruppen</text>
<rect x="20" y="40" width="175" height="240" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="107" y="65" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Menschen</text>
<text x="30" y="92" font-size="14" fill="#111827">1 Keine Armut</text>
<text x="30" y="116" font-size="14" fill="#111827">2 Kein Hunger</text>
<text x="30" y="140" font-size="14" fill="#111827">3 Gesundheit</text>
<text x="30" y="164" font-size="14" fill="#111827">4 Hochwertige Bildung</text>
<text x="30" y="188" font-size="14" fill="#111827">5 Gleichstellung</text>
<text x="30" y="212" font-size="14" fill="#111827">10 Weniger Ungleichheit</text>
<text x="30" y="236" font-size="14" fill="#111827">16 Frieden, Gerechtigkeit</text>
<rect x="213" y="40" width="175" height="240" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="300" y="65" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Planet</text>
<text x="223" y="92" font-size="14" fill="#111827">6 Sauberes Wasser</text>
<text x="223" y="116" font-size="14" fill="#111827">11 Nachhaltige Städte</text>
<text x="223" y="140" font-size="14" fill="#111827">12 Verantwortungsv. Konsum</text>
<text x="223" y="164" font-size="14" fill="#111827">13 Klimaschutz</text>
<text x="223" y="188" font-size="14" fill="#111827">14 Leben unter Wasser</text>
<text x="223" y="212" font-size="14" fill="#111827">15 Leben an Land</text>
<rect x="406" y="40" width="175" height="240" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="493" y="65" font-size="15" text-anchor="middle" fill="#92400e" font-weight="bold">Wohlstand und Partnerschaft</text>
<text x="416" y="92" font-size="14" fill="#111827">7 Saubere Energie</text>
<text x="416" y="116" font-size="14" fill="#111827">8 Menschenwürdige Arbeit</text>
<text x="416" y="140" font-size="14" fill="#111827">9 Industrie, Innovation</text>
<text x="416" y="164" font-size="14" fill="#111827">17 Partnerschaften</text>
</svg>`,
      caption: "Die 17 Ziele sind miteinander verbunden: Keines kann allein erreicht werden (zum Beispiel verringert die Bildung von Mädchen Armut, Hunger und Kindersterblichkeit)."
    },
    {
      type: "example",
      title: "Praxisbeispiel: dein täglicher Fußabdruck",
      html: `<p>Betrachte deinen Tag mit den Augen der nachhaltigen Entwicklung:</p>
<ul>
<li><b>Frühstück</b>: Milch, Kaffee, Brot: Wie viel Wasser und Energie stecken dahinter? Jede Tasse Kaffee \"kostet\" etwa 140 Liter Wasser.</li>
<li><b>Schulweg</b>: Zu Fuß oder mit dem Rad verursachst du kein CO₂; mit dem Bus etwa ein Drittel dessen, was ein Auto pro Person ausstößt; im Auto mit nur einer Person viel mehr.</li>
<li><b>Smartphone und Computer</b>: Sie enthalten Kobalt, Lithium und Seltene Erden; ihre Nutzungsdauer um ein Jahr zu verlängern verringert die Belastung stark (der größte Teil der Emissionen eines Smartphones entsteht bei der Herstellung, nicht bei der Nutzung).</li>
<li><b>Kleidung</b>: Eine Jeans braucht 7.000-10.000 Liter Wasser; Second-Hand-Kauf oder Reparieren verringert die Belastung.</li>
<li><b>Mittagessen</b>: Verschwendung oder leerer Teller? Fast ein Fünftel der Lebensmittel, die wir kaufen, landet im Müll.</li>
</ul>
<p>Es geht nicht darum, sich schuldig zu fühlen, sondern bewusst zu entscheiden: Große Veränderungen erfordern kollektive und politische Entscheidungen, aber individuelle Gewohnheiten, mit Millionen Menschen multipliziert, zählen.</p>`
    },
    {
      type: "alternatives",
      title: "Weitere Wege, Nachhaltigkeit zu verstehen",
      intro: "Nachhaltigkeit ist eine abstrakte Idee: Hier sind drei Bilder, um sie zu fassen.",
      tabs: [
        {
          label: "🏦 Das Bankkonto der Natur",
          html: `<p>Die Natur ist ein <b>Bankkonto</b>. Die erneuerbaren Ressourcen sind wie die <b>Zinsen</b> (Wälder, die nachwachsen, Fische, die sich vermehren, Wasser, das recycelt wird), die nicht erneuerbaren sind das <b>Kapital</b> (Erdöl, Erze). Ein nachhaltiger Lebensstil gibt nur die Zinsen aus, ohne das Kapital anzutasten. Der \"Erdüberlastungstag\" ist der Moment, in dem die Menschheit bereits alle Zinsen des Jahres ausgegeben hat und \"im Minus\" zu leben beginnt: Wir verbrauchen heute das Kapital, das unsere Kinder bräuchten.</p>`
        },
        {
          label: "🛁 Die Badewanne und der Wasserhahn",
          html: `<p>Ein Grundwasserleiter ist wie eine <b>Badewanne</b>: Der versickernde Regen ist der Wasserhahn, die Brunnen, die pumpen, sind der Abfluss. Wird mehr Wasser abgepumpt, als zufließt, sinkt der Pegel; geht es so weiter, leert sich die Wanne (wie es in vielen Gebieten Indiens, Kaliforniens und der Poebene geschehen ist). Liegt der Grundwasserleiter nahe am Meer, dringt Salzwasser in den Hohlraum ein: Der Brunnen wird unbrauchbar. Die Idee der <b>Nachhaltigkeit</b> ist, höchstens so viel zu entnehmen, wie die Natur wieder auffüllt.</p>`
        },
        {
          label: "🌐 Das Nachhaltigkeitsspiel",
          html: `<p>Stell dir ein Dorf mit 10 Fischern vor, die sich einen See mit 100 Fischen teilen, die sich vermehren. Fängt jeder Fischer 5 pro Jahr, verliert der See 50 und die Fische werden weniger; fangen sie 2, erholt sich der See. Die <b>\"Tragödie der Allmende\"</b> (vom Ökologen Garrett Hardin 1968 beschrieben) entsteht, wenn jeder nur an seinen eigenen Vorteil denkt. Die Wirtschaftsnobelpreisträgerin <b>Elinor Ostrom</b> (2009) hat gezeigt, dass viele Gemeinschaften es geschafft haben, gemeinsame Ressourcen (Weiden, Wälder, Wasser) mit <b>gemeinsamen Regeln und gegenseitiger Kontrolle</b> gut zu verwalten.</p>`,
          widget: "match",
          options: { pairs: [["Brundtland-Bericht", "1987: Definition der nachhaltigen Entwicklung"], ["Agenda 2030", "2015: 17 Ziele für die UN-Staaten"], ["Pariser Abkommen", "2015: Erwärmung auf 1,5-2 °C begrenzen"], ["Kyoto-Protokoll", "1997: erste Verpflichtungen zu Emissionen"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Karte: Ressourcen, Bedürfnisse und Nachhaltigkeit",
      nodes: [
        { id: "risorse", label: "Natürliche Ressourcen", x: 50, y: 6, color: "#16a34a", html: "Erneuerbare und nicht erneuerbare.", why: "Ressourcen sind nur im Verhältnis zur Technologie Ressourcen: Uran war vor der Kernphysik keine Ressource, Erdöl wurde es erst mit dem Verbrennungsmotor im 19. Jahrhundert. Was die Gesellschaft nutzen kann, ändert sich mit dem Wissen." },
        { id: "acqua", label: "Wasser", x: 15, y: 32, color: "#2563eb", html: "Süß, knapp und ungleich verteilt.", why: "Das zugängliche Süßwasser macht weniger als 1 % des Ganzen aus: Die Landwirtschaft verbraucht davon 70 %, und die globale Erwärmung verschiebt die Niederschläge und lässt die Gletscher schmelzen, die die großen Flüsse Asiens speisen." },
        { id: "energia", label: "Energie", x: 50, y: 32, color: "#f59e0b", html: "Fossile ~80 %; die Wende läuft.", why: "Die Kohle trieb die Industrielle Revolution an (Wattsche Dampfmaschine, 1769), das Erdöl das 20. Jahrhundert. Jede Energiewende hat Jahrzehnte gedauert: Heute müssen wir sie des Klimas wegen schneller schaffen." },
        { id: "cibo", label: "Nahrung", x: 85, y: 32, color: "#84cc16", html: "Ausreichende Produktion, aber schlecht verteilt.", why: "Moderne Hungersnöte sind häufiger Krisen des Zugangs (Einkommen, Konflikte, Preise) als der Verfügbarkeit, wie Amartya Sen 1981 bei der Untersuchung der Hungersnot in Bengalen 1943 zeigte." },
        { id: "impatto", label: "Auswirkungen und Grenzen", x: 30, y: 62, color: "#dc2626", html: "Klima, Verschmutzung, Verlust der Artenvielfalt, Übernutzung.", why: "Wissenschaftler (Johan Rockström, 2009) haben neun 'planetare Grenzen' benannt (Klima, Biodiversität, Stickstoff- und Phosphorkreisläufe …), innerhalb derer die Menschheit sicher agieren kann; einige sind bereits überschritten." },
        { id: "equita", label: "Gerechtigkeit", x: 70, y: 62, color: "#a855f7", html: "Wer verbraucht und wer unter den Folgen leidet.", why: "Die reichen Länder haben historisch mehr CO₂ ausgestoßen, aber die schwersten Folgen treffen oft die Ärmsten: Daher das Prinzip der 'gemeinsamen, aber unterschiedlichen Verantwortlichkeiten' in den Klimaabkommen." },
        { id: "sostenibile", label: "Nachhaltige Entwicklung", x: 50, y: 82, color: "#14b8a6", html: "Umwelt + Gesellschaft + Wirtschaft.", why: "Der Brundtland-Bericht (1987) definierte sie, um den Gegensatz zwischen Umweltschutz und wirtschaftlicher Entwicklung zu überwinden: Die These ist, dass beides zwei Seiten desselben Problems sind." },
        { id: "agenda", label: "Agenda 2030", x: 50, y: 96, color: "#ec4899", html: "17 Ziele, 169 Unterziele, 193 Länder.", why: "Am 25. September 2015 verabschiedet, ist sie das erste universelle Programm: Es gilt für alle Länder, reiche wie arme. Es beruht auf fünf 'P': People (Menschen), Planet, Prosperity (Wohlstand), Peace (Frieden), Partnership (Partnerschaft)." }
      ],
      edges: [
        ["risorse", "acqua", "z. B."],
        ["risorse", "energia", "z. B."],
        ["risorse", "cibo", "z. B."],
        ["energia", "impatto", "verursacht"],
        ["acqua", "impatto", "erleidet"],
        ["cibo", "equita", "wirft die Frage der"],
        ["impatto", "sostenibile", "erfordert"],
        ["equita", "sostenibile", "erfordert"],
        ["sostenibile", "agenda", "wird umgesetzt in"]
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Erneuerbare</b> (regenerieren sich) und <b>nicht erneuerbare</b> (Erdöl, Kohle, Gas, Erze) Ressourcen.</li>
<li><b>Wasser</b>: 97,5 % salzig; 2,5 % Süßwasser, fast ganz in Gletschern und Grundwasser; 70 % der Entnahmen gehen in die Landwirtschaft; 2,2 Milliarden Menschen ohne sicheres Trinkwasser.</li>
<li><b>Energie</b>: ~80 % fossil; Wende hin zu Erneuerbaren und Effizienz; keine Quelle ist ohne Auswirkungen.</li>
<li><b>Nahrung</b>: für alle ausreichend, aber schlecht verteilt (etwa 733 Millionen Hungernde); Verschwendung und Grüne Revolution.</li>
<li><b>Nachhaltige Entwicklung</b> (Brundtland, 1987): drei Säulen ökologisch, sozial, wirtschaftlich; <b>Agenda 2030</b> (2015): 17 Ziele.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Energie, Nahrung und Agenda 2030",
      questions: [
        { type: "mc", q: "Welcher Anteil der weltweiten Primärenergie stammt noch aus fossilen Brennstoffen?", options: ["Etwa 20 %", "Etwa 50 %", "Etwa 80 %"], answer: 2, explain: "Erdöl, Kohle und Gas decken noch etwa 80 % der Primärenergie." },
        { type: "mc", q: "Wer leitete die Kommission, die 1987 die nachhaltige Entwicklung definierte?", options: ["Gro Harlem Brundtland", "Greta Thunberg", "Aurelio Peccei"], answer: 0, explain: "Der Brundtland-Bericht (1987), benannt nach der Vorsitzenden der Kommission." },
        { type: "num", q: "Wie viele Ziele für nachhaltige Entwicklung hat die Agenda 2030?", answer: 17, tol: 0, explain: "17 Ziele (SDGs) und 169 Unterziele." }
      ]
    }
  ],
  glossary: [
    { t: "Erneuerbare Ressource", d: "Ressource, die sich bei maßvoller Nutzung in kurzer Zeit regeneriert (Sonne, Wind, Süßwasser, Holz)." },
    { t: "Nicht erneuerbare Ressource", d: "Ressource, die in Millionen von Jahren entstanden ist und sich in menschlichen Zeiträumen nicht neu bildet (Erdöl, Kohle, Erze)." },
    { t: "Wasserstress", d: "Situation, in der die Wasserentnahmen im Verhältnis zur Verfügbarkeit sehr hoch sind." },
    { t: "Wasserfußabdruck", d: "Wassermenge, die zur Herstellung eines Gutes oder für den Konsum einer Person nötig ist." },
    { t: "Energiewende", d: "Übergang von fossilen Brennstoffen zu erneuerbaren Quellen und zu einer effizienteren Energienutzung." },
    { t: "Energiemix", d: "Gesamtheit der Quellen, die ein Land zur Energieerzeugung nutzt." },
    { t: "Grüne Revolution", d: "Steigerung der Ernten (1950er-1970er Jahre) durch ausgewähltes Saatgut, Düngemittel, Pestizide und Bewässerung." },
    { t: "Nachhaltige Entwicklung", d: "Entwicklung, die die Bedürfnisse der Gegenwart befriedigt, ohne die Möglichkeiten künftiger Generationen zu gefährden, ihre eigenen zu befriedigen (Brundtland-Bericht, 1987)." },
    { t: "Agenda 2030", d: "UN-Programm (2015) mit 17 Zielen für nachhaltige Entwicklung, die bis 2030 erreicht werden sollen." },
    { t: "Ökologischer Fußabdruck", d: "Land- und Meeresfläche, die nötig ist, um die verbrauchten Ressourcen zu erzeugen und die Abfälle einer Person oder eines Landes aufzunehmen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche dieser Ressourcen ist nicht erneuerbar?", options: ["Wind", "Erdgas", "Holz aus einem nachhaltig bewirtschafteten Wald"], answer: 1, explain: "Erdgas ist in Millionen von Jahren entstanden." },
      { type: "mc", q: "Welcher Anteil des weltweit entnommenen Süßwassers dient der Landwirtschaft?", options: ["Etwa 10 %", "Etwa 30 %", "Etwa 70 %"], answer: 2, explain: "Die Bewässerung verbraucht etwa 70 % der Entnahmen." },
      { type: "tf", q: "Weltweit wird nicht genug Nahrung für alle erzeugt, und das ist die Hauptursache des Hungers.", answer: false, explain: "Es wird genug Nahrung für alle erzeugt: Hunger hängt vor allem von Armut, Konflikten, Preisen und Verteilung ab." },
      { type: "num", q: "Eine Jeans braucht etwa 7.000 Liter Wasser. Wie vielen Duschen mit je 50 Litern entspricht das?", answer: 140, tol: 0, explain: "7.000 ÷ 50 = 140 Duschen." },
      { type: "mc", q: "Welche sind die drei Säulen der nachhaltigen Entwicklung?", options: ["Ökologisch, sozial, wirtschaftlich", "Politisch, militärisch, religiös", "Landwirtschaft, Industrie, Dienstleistungen"], answer: 0, explain: "Umwelt, Gesellschaft und Wirtschaft müssen gemeinsam betrachtet werden." },
      { type: "text", q: "Wie heißt das UN-Programm von 2015 mit den 17 Zielen für nachhaltige Entwicklung?", answer: ["Agenda 2030", "die Agenda 2030"], explain: "Die Agenda 2030 für nachhaltige Entwicklung, verabschiedet von 193 Ländern." },
      { type: "order", q: "Bringe in die zeitliche Reihenfolge.", items: ["Brundtland-Bericht (1987)", "Konferenz von Rio (1992)", "Kyoto-Protokoll (1997)", "Agenda 2030 (2015)"], explain: "Von der Definition der nachhaltigen Entwicklung über die Klimaabkommen bis zur Agenda 2030." },
      { type: "mc", q: "Warum erfordern Sonnen- und Windenergie Speichersysteme und flexible Netze?", options: ["Sie sind unstetig", "Sie sind zu teuer", "Sie erzeugen radioaktiven Abfall"], answer: 0, explain: "Sonne und Wind sind nicht konstant verfügbar, daher braucht es Batterien, Netze und einen Mix von Quellen." },
      { type: "tf", q: "Der Earth Overshoot Day bezeichnet den Tag, an dem die Menschheit bereits die Ressourcen verbraucht hat, die die Erde in einem Jahr regenerieren kann.", answer: true, explain: "2024 fiel er auf den 1. August: Danach lebt man 'im Minus'." },
      { type: "mc", q: "Was ist mit dem Aralsee geschehen?", options: ["Er ist stark geschrumpft, weil die Flüsse, die ihn speisten, umgeleitet wurden", "Er wurde durch einen Staudamm aufgefüllt", "Er ist zum größten See der Welt geworden"], answer: 0, explain: "Die Baumwollbewässerung hat seit den 1960er-Jahren den Flüssen Amudarja und Syrdarja Wasser entzogen, und der See ist fast ausgetrocknet." }
    ]
  }
});
