TOPIC('de', {
  id: "l1-sci-atmosfera",
  title: "Atmosphäre und Wetter",
  intro: "Wir leben in einem Ozean aus Luft, der uns vor Strahlung schützt, die Temperatur des Planeten regelt und uns den Regen bringt. Jeden Tag sehen wir seine Wirkungen: ein plötzliches Gewitter, ein klarer Himmel nach der Tramontana, der Nebel in der Po-Ebene. In dieser Lektion erfahren wir, wie die <b>Atmosphäre</b> aufgebaut ist, warum es <b>Wind</b> gibt, wie <b>Wolken und Regen</b> entstehen und wie man eine Wetterkarte liest.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Wie die Atmosphäre aufgebaut ist",
      html: `<p>Die <b>Atmosphäre</b> ist die Gashülle, die die Erde umgibt und von der Schwerkraft festgehalten wird. Obwohl sie sich über Hunderte von Kilometern erstreckt, befinden sich <b>99 %</b> ihrer Masse in den ersten 30 km und 50 % unterhalb von 5,5 km.</p>
<p>Die <b>Zusammensetzung der trockenen Luft</b> (nach Volumen):</p>
<table>
<tr><th>Gas</th><th>Anteil</th></tr>
<tr><td>Stickstoff (N₂)</td><td>78,08 %</td></tr>
<tr><td>Sauerstoff (O₂)</td><td>20,95 %</td></tr>
<tr><td>Argon (Ar)</td><td>0,93 %</td></tr>
<tr><td>Kohlenstoffdioxid (CO₂)</td><td>etwa 0,042 % (etwa 420 ppm)</td></tr>
<tr><td>Andere (Neon, Helium, Methan, Ozon …)</td><td>Spuren</td></tr>
</table>
<p>Außerdem enthält die Luft eine wechselnde Menge <b>Wasserdampf</b> (von fast 0 bis 4 %) und <b>Schwebstoffe</b> (Staub, Meersalz, Pollen, Asche). Auch wenn das CO₂ nur einen winzigen Bruchteil ausmacht, ist es ein Treibhausgas: Seit 1750 ist seine Konzentration durch die Verbrennung fossiler Brennstoffe von etwa 280 auf mehr als 420 ppm gestiegen.</p>
<p>Die heutige Atmosphäre unterscheidet sich stark von der ursprünglichen: Der Sauerstoff entstand hauptsächlich durch die Tätigkeit der <b>Cyanobakterien</b> vor etwa 2,4 Milliarden Jahren (<b>Große Sauerstoffkatastrophe</b>), ein Ereignis, das komplexes Leben möglich machte.</p>`
    },
    {
      type: "svg",
      title: "Die Schichten der Atmosphäre",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#f8fafc"/>
<rect x="30" y="285" width="260" height="35" fill="#fde68a" stroke="#92400e"/>
<rect x="30" y="215" width="260" height="70" fill="#bfdbfe" stroke="#1d4ed8"/>
<rect x="30" y="150" width="260" height="65" fill="#c7d2fe" stroke="#4338ca"/>
<rect x="30" y="85" width="260" height="65" fill="#ddd6fe" stroke="#6d28d9"/>
<rect x="30" y="20" width="260" height="65" fill="#1e1b4b" stroke="#312e81"/>
<text x="160" y="308" font-size="15" text-anchor="middle" fill="#1f2937">ERDE</text>
<text x="160" y="255" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">TROPOSPHÄRE</text>
<text x="160" y="187" font-size="16" text-anchor="middle" fill="#312e81" font-weight="bold">STRATOSPHÄRE</text>
<text x="160" y="122" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">MESOSPHÄRE</text>
<text x="160" y="58" font-size="16" text-anchor="middle" fill="#e0e7ff" font-weight="bold">THERMOSPHÄRE</text>
<g font-size="14" fill="#1f2937">
<text x="305" y="285">0 km</text>
<text x="305" y="219">~12 km (Tropopause)</text>
<text x="305" y="154">~50 km</text>
<text x="305" y="89">~85 km</text>
<text x="305" y="24">über 600 km: Exosphäre</text>
</g>
<g font-size="14" fill="#334155">
<text x="470" y="250">Wetter, Wolken, Linienflüge</text>
<text x="470" y="182">Ozonschicht (15–35 km)</text>
<text x="470" y="118">Meteore (Sternschnuppen)</text>
<text x="470" y="55">Polarlichter, ISS (etwa 400 km)</text>
</g>
<text x="470" y="270" font-size="14" fill="#1d4ed8">T: von +15 bis −56 °C</text>
<text x="470" y="202" font-size="14" fill="#4338ca">T: von −56 bis etwa 0 °C</text>
<text x="470" y="138" font-size="14" fill="#6d28d9">T: bis −90 °C</text>
<text x="470" y="74" font-size="14" fill="#312e81">T: über 1000 °C (aber sehr wenig Luft)</text>
</svg>`,
      caption: "Die Temperatur sinkt in der Troposphäre mit der Höhe, steigt in der Stratosphäre (das Ozon absorbiert UV-Strahlen), sinkt in der Mesosphäre wieder und steigt in der Thermosphäre erneut."
    },
    {
      type: "text",
      title: "Die Schichten einzeln betrachtet",
      html: `<ul>
<li><b>Troposphäre</b> (0–12 km etwa; 8 km an den Polen, 16–18 km am Äquator): enthält etwa 80 % der Luftmasse und fast den gesamten Wasserdampf. Hier spielen sich die Wettererscheinungen ab. Die Temperatur <b>sinkt um etwa 6,5 °C je 1000 m</b> (vertikaler Temperaturgradient), bis auf etwa −56 °C an der <b>Tropopause</b>.</li>
<li><b>Stratosphäre</b> (12–50 km): Die Luft ist stabil und trocken; hier liegt die <b>Ozonschicht</b> (O₃), die einen Großteil der schädlichen ultravioletten (UV-)Strahlen absorbiert und dabei die Luft erwärmt.</li>
<li><b>Mesosphäre</b> (50–85 km): der kälteste Bereich (bis −90 °C); Meteoriten verglühen durch Reibung.</li>
<li><b>Thermosphäre</b> (85–600 km etwa): dünn besiedelt mit Teilchen, mit theoretischen Temperaturen von mehr als 1000 °C durch die Absorption von Röntgen- und UV-Strahlen; ein Gegenstand erwärmt sich dort aber nicht, weil es zu wenige Moleküle gibt. Hier liegen die <b>Polarlichter</b> und die Satelliten in niedrigen Umlaufbahnen.</li>
<li><b>Exosphäre</b>: Übergang zum Weltraum.</li>
</ul>
<p>1985 entdeckte die Gruppe um <b>Joseph Farman</b> das <b>Ozonloch</b> über der Antarktis, verursacht durch Fluorchlorkohlenwasserstoffe (FCKW), die in Kühlschränken und Spraydosen verwendet wurden. Mit dem <b>Montrealer Protokoll</b> (1987) verboten fast alle Länder die FCKW: Die Ozonschicht erholt sich, und das gilt als einer der größten Erfolge internationaler Zusammenarbeit im Umweltschutz.</p>`
    },
    {
      type: "curiosity",
      title: "Der Treibhauseffekt: Feind oder Freund?",
      html: `<p>Ohne Treibhauseffekt läge die Durchschnittstemperatur der Erde bei etwa <b>−18 °C</b> statt der heutigen etwa <b>+15 °C</b>. Der natürliche Treibhauseffekt ist <b>lebensnotwendig</b>: Gase wie Wasserdampf, CO₂ und Methan lassen das Sonnenlicht durch, das den Boden erwärmt, halten aber einen Teil der von der Oberfläche abgegebenen Infrarotwärme zurück. Das Problem ist die Verstärkung des Treibhauseffekts durch menschliche Emissionen: Die globale Durchschnittstemperatur ist gegenüber der vorindustriellen Zeit bereits um etwa <b>1,1–1,2 °C</b> gestiegen. Das Phänomen wurde von <b>Fourier</b> (1824) erahnt, von <b>Tyndall</b> (1859) im Labor nachgewiesen und von <b>Arrhenius</b> (1896) erstmals berechnet, der vorhersagte, dass eine Verdopplung des CO₂ die Erde um einige Grad erwärmen würde.</p>`
    },
    {
      type: "text",
      title: "Der Luftdruck",
      html: `<p>Luft hat Gewicht: Eine Luftsäule von der Oberfläche bis zur Grenze der Atmosphäre wiegt auf 1 cm² etwa 1 kg. Der <b>Luftdruck</b> ist die Kraft, die die Luft pro Flächeneinheit ausübt. Auf Meereshöhe beträgt er im Mittel <b>1013 hPa</b> (Hektopascal), also <b>1 Atmosphäre</b>, oder 760 mm Quecksilbersäule.</p>
<p>Es war <b>Evangelista Torricelli</b>, ein Schüler Galileis, der das 1643 bewies: Als er eine mit Quecksilber gefüllte Glasröhre in eine Schale stürzte, sank das Quecksilber bis zu einer Säule von 76 cm, getragen vom Gewicht der Luft auf dem Quecksilber in der Schale: Das <b>Barometer</b> war geboren. 1648 ließ <b>Blaise Pascal</b> das Experiment von seinem Schwager auf dem Puy de Dôme wiederholen und sah, dass die Säule mit zunehmender Höhe sank: Darüber ist weniger Luft.</p>
<p>Wie sich der Druck verändert:</p>
<ul>
<li><b>mit der Höhe</b>: Er nimmt ab, in den ersten Kilometern um etwa 1 hPa je 8 m; er halbiert sich etwa alle 5,5 km (auf dem Mount Everest beträgt er etwa ein Drittel des Drucks auf Meereshöhe, etwa 330 hPa);</li>
<li><b>mit der Temperatur</b>: Warme Luft ist leichter, steigt also auf und erzeugt ein Gebiet mit <b>niedrigem Druck</b> (<b>Tief</b> oder <b>Zyklone</b>); kalte Luft ist schwerer und sinkt ab, wodurch <b>hoher Druck</b> entsteht (<b>Hoch</b> oder <b>Antizyklone</b>).</li>
</ul>
<p>Auf Wetterkarten sind <b>Isobaren</b> Linien, die Punkte mit gleichem Druck verbinden. In einem Tief ist das Wetter in der Regel unbeständig; in einem Hoch heiter.</p>`
    },
    {
      type: "example",
      title: "Temperatur und Druck in der Höhe",
      html: `<p>In Mailand (120 m) hat es <b>20 °C</b>. Welche Temperatur herrscht unter gleichen Bedingungen auf dem Gipfel des Monte Rosa (Punta Gnifetti, 4554 m)?</p>
<ol>
<li>Höhenunterschied: 4554 − 120 = 4434 m ≈ 4,43 km.</li>
<li>Abnahme: 4,43 × 6,5 = 28,8 °C.</li>
<li>T ≈ 20 − 28,8 = <b>etwa −8,8 °C</b>.</li>
</ol>
<p>Der Druck auf dem Gipfel beträgt etwa 580 hPa, also etwa 57 % des Drucks auf Meereshöhe: Deshalb atmen Bergsteiger „weniger Sauerstoff“ (der Anteil von O₂ beträgt immer 21 %, aber jeder Atemzug enthält weniger Moleküle davon).</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Luft und Druck",
      questions: [
        { type: "mc", q: "Welches ist das häufigste Gas in der Luft?", options: ["Sauerstoff", "Stickstoff", "Kohlenstoffdioxid"], answer: 1, explain: "Stickstoff macht 78 % aus." },
        { type: "mc", q: "In welcher Schicht spielen sich die Wettererscheinungen ab?", options: ["Troposphäre", "Stratosphäre", "Thermosphäre"], answer: 0, explain: "Es ist die unterste Schicht, mit dem größten Teil des Wasserdampfs." },
        { type: "tf", q: "In einem Hoch ist das Wetter in der Regel heiter.", answer: true, explain: "Die Luft sinkt ab, erwärmt sich und die Wolken lösen sich auf." }
      ]
    },
    {
      type: "text",
      title: "Der Wind",
      html: `<p><b>Wind</b> ist Luft in waagerechter Bewegung, von Gebieten mit <b>hohem Druck</b> zu Gebieten mit <b>niedrigem Druck</b>, so wie Wasser bergab fließt. Er ist umso stärker, je enger die Isobaren beieinanderliegen (je größer der Druck<b>gradient</b>).</p>
<ul>
<li>Durch die <b>Corioliskraft</b> wird der Wind abgelenkt: <b>nach rechts</b> auf der Nordhalbkugel, nach links auf der Südhalbkugel. Deshalb dreht sich die Luft um ein Tief auf der Nordhalbkugel <b>gegen den Uhrzeigersinn</b> (und strömt zum Zentrum hin), um ein Hoch im Uhrzeigersinn.</li>
<li>Gemessen wird er mit dem <b>Anemometer</b> (Geschwindigkeit, in m/s, Knoten oder km/h) und mit dem <b>Windsack</b> oder der Windfahne (Richtung). Die Richtung gibt immer an, woher er weht: Ein Nordwestwind kommt aus Nordwesten (in Italien Maestrale genannt).</li>
<li>Die <b>Beaufortskala</b> (1805) stuft ihn von 0 (Windstille) bis 12 (Orkan, über 118 km/h) ein.</li>
</ul>
<p><b>Lokale Winde</b>: die <b>Seebrise</b> am Tag (das Land erwärmt sich stärker als das Meer, die warme Luft steigt auf und die frischere Meeresluft ersetzt sie: Der Wind weht vom Meer zum Land) und die <b>Landbrise</b> in der Nacht; die <b>Berg- und Talwinde</b>; der <b>Föhn</b> (it. <i>favonio</i>), ein warmer, trockener Wind, der hinabweht, nachdem er das Gebirge überquert hat.</p>
<p><b>Regelmäßige Winde</b>: Die <b>Passatwinde</b> wehen zum Äquator hin, aus Nordosten (Nordhalbkugel) und aus Südosten (Südhalbkugel); die Westwinde in den mittleren Breiten; die <b>Monsune</b> wechseln mit der Jahreszeit die Richtung und bringen im Sommer den Regen nach Indien und Südostasien. Auf den italienischen Meeren kennt man: Tramontana (N), Grecale (NO), Levante (O), Scirocco (SO), Ostro (S), Libeccio (SW), Ponente (W), Maestrale (NW).</p>`
    },
    {
      type: "svg",
      title: "Wie Wind entsteht: die Seebrise",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#e0f2fe"/>
<rect x="0" y="210" width="320" height="90" fill="#38bdf8"/>
<rect x="320" y="210" width="320" height="90" fill="#d6a85f"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<text x="160" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">MEER (kälter)</text>
<text x="480" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">LAND (wärmer)</text>
<g stroke="#dc2626" stroke-width="4" fill="none"><path d="M480 200 L480 110"/><path d="M455 200 L455 120"/><path d="M505 200 L505 120"/></g>
<polygon points="480,95 468,115 492,115" fill="#dc2626"/><polygon points="455,105 443,125 467,125" fill="#dc2626"/><polygon points="505,105 493,125 517,125" fill="#dc2626"/>
<text x="480" y="80" font-size="14" text-anchor="middle" fill="#7f1d1d" font-weight="bold">warme Luft steigt auf: niedriger Druck</text>
<path d="M240 200 L420 200" stroke="#1d4ed8" stroke-width="5" fill="none"/><polygon points="436,200 416,190 416,210" fill="#1d4ed8"/>
<text x="330" y="190" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Seebrise</text>
<path d="M420 70 L240 70" stroke="#6b7280" stroke-width="3" fill="none" stroke-dasharray="6 5"/><polygon points="224,70 244,60 244,80" fill="#6b7280"/>
<text x="330" y="60" font-size="14" text-anchor="middle" fill="#374151">Rückstrom in der Höhe</text>
<text x="160" y="150" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">kalte Luft: hoher Druck</text>
</svg>`,
      caption: "Am Tag erwärmt sich das Land stärker als das Meer: Die warme Luft steigt auf, und die frische Meeresluft strömt nach, um sie zu ersetzen."
    },
    {
      type: "text",
      title: "Luftfeuchtigkeit, Wolken und Niederschläge",
      html: `<p>Die <b>absolute Luftfeuchtigkeit</b> ist die Masse an Wasserdampf pro m³ Luft (g/m³). Aber die Luft kann nicht beliebig viel enthalten: Es gibt ein Maximum, die <b>Sättigung</b>, die mit der Temperatur zunimmt (bei 0 °C etwa 4,8 g/m³; bei 20 °C etwa 17,3 g/m³; bei 30 °C etwa 30 g/m³). Die <b>relative Luftfeuchtigkeit</b> ist das prozentuale Verhältnis zwischen vorhandenem Dampf und dem bei derselben Temperatur maximal möglichen: rF = (absolute Feuchte / Maximum) × 100. Man misst sie mit dem <b>Hygrometer</b>. Bei 100 % ist die Luft gesättigt. Als <b>Taupunkt</b> bezeichnet man die Temperatur, bei der die Luft beim Abkühlen gesättigt wird.</p>
<p>Kühlt die gesättigte Luft weiter ab, <b>kondensiert</b> der Dampf an kleinen Teilchen (Kondensationskernen) zu Tröpfchen: <b>Wolken</b> (in der Höhe) oder <b>Nebel</b> (am Boden). In Bodennähe entstehen <b>Tau</b> oder <b>Reif</b> (unter 0 °C).</p>
<p>Wolken werden nach Form und Höhe eingeteilt (Luke Howard, 1803):</p>
<ul>
<li><b>Zirren</b> (Federwolken), faserig und dünn (über 6 km, Eiskristalle);</li>
<li><b>Kumulus</b> (Haufenwolken), blumenkohlartig (vertikale Entwicklung; wenn sie riesig sind, <b>Kumulonimbus</b>, die Gewitter und Hagel bringen);</li>
<li><b>Stratus</b> (Schichtwolken), gleichmäßige graue Decken (in geringer Höhe: Hochnebel, Nieselregen);</li>
<li><b>Nimbus</b> (<i>nimbus</i> = Regen): Nimbostratus, die anhaltenden Regen bringen.</li>
</ul>
<p>Die Tröpfchen einer Wolke (etwa 0,02 mm) fallen nicht: Sie sind zu leicht. Um zu Regentropfen (1–3 mm) zu werden, müssen sie sich vereinigen (Koaleszenz) oder an Eis wachsen. <b>Niederschläge</b> können Regen, Schnee, Hagel (Eiskörner, die in der Gewitterwolke mehrmals auf- und absteigen) und Schneeregen sein. Gemessen werden sie mit dem <b>Niederschlagsmesser</b> in mm (1 mm = 1 L/m²).</p>`
    },
    {
      type: "example",
      title: "Relative Luftfeuchtigkeit und Taupunkt",
      html: `<p>An einem Sommerabend enthält die Luft bei 20 °C <b>10 g/m³</b> Wasserdampf. Bei 20 °C beträgt das Maximum <b>17,3 g/m³</b>.</p>
<ol>
<li>rF = 10 / 17,3 × 100 ≈ <b>58 %</b>.</li>
<li>Nachts sinkt die Temperatur auf etwa 11 °C, wo das Maximum etwa 10 g/m³ beträgt: Die Luft wird gesättigt (rF = 100 %).</li>
<li>Der <b>Taupunkt</b> liegt bei etwa 11 °C: Auf dem Gras schlägt sich Tau nieder, und bei klarem Himmel und Windstille kann Nebel entstehen.</li>
</ol>
<p>Deshalb beschlagen im Winter die Autoscheiben: Die warme, feuchte Luft im Innenraum trifft auf die kalte Scheibe, fällt unter den Taupunkt und kondensiert.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Wolken und Regen zu verstehen",
      intro: "Von der Wolke zum Tropfen, über die aufsteigende Luft.",
      tabs: [
        {
          label: "🥶 Die kalte Flasche",
          html: `<p>Experiment: Nimm an einem warmen Tag eine kalte Flasche oder Dose aus dem Kühlschrank. Nach wenigen Minuten bedeckt sie sich mit Tröpfchen. Das Wasser ist nicht „durch“ das Glas gedrungen: Die Luft nahe der Wand ist unter den Taupunkt abgekühlt, und ihr Dampf ist kondensiert. Genau das passiert am Himmel, wenn die Luft aufsteigt und abkühlt.</p>`
        },
        {
          label: "⛰️ Warum es im Gebirge mehr regnet",
          html: `<p>Wenn ein feuchter Wind auf eine Gebirgskette trifft, muss er aufsteigen. Beim Aufsteigen dehnt er sich aus und kühlt ab (etwa 6–10 °C je 1000 m), der Dampf kondensiert und bildet Wolken und Regen (<b>Steigungsregen</b>, orografische Niederschläge). Auf der anderen Seite sinkt die Luft ab, erwärmt sich und trocknet aus: Das ist der <b>Föhn</b> oder der „Regenschatten“. Deshalb fällt in den Alpen viel mehr Niederschlag als in den Talsohlen, und die Po-Ebene bekommt im Winter trockenen, kalten Wind, wenn die Tramontana über die Berge weht.</p>`
        },
        {
          label: "🌩️ Warum es Gewitter gibt",
          html: `<p>Im Sommer erwärmt sich der Boden, die warme, feuchte Luft steigt in einer Säule auf (<b>Konvektion</b>), kondensiert und setzt Wärme frei (die <b>latente Wärme</b>), die sie noch weiter aufsteigen lässt. Es entwickelt sich ein 10–12 km hoher Kumulonimbus. In den Wolken laden sich die zusammenstoßenden Eiskristalle elektrisch auf: der obere Teil positiv, die Basis negativ. Ist der Spannungsunterschied groß genug, schlägt der <b>Blitz</b> ein, der die Luft auf etwa 30 000 °C erhitzt und sie heftig ausdehnt: Das ist der <b>Donner</b>. Das Licht bewegt sich mit 300 000 km/s, der Schall mit etwa 340 m/s: Zählst du die Sekunden zwischen Blitz und Donner und teilst durch 3, erhältst du die Entfernung des Blitzes in km.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Störungen, Fronten und Wettervorhersage",
      html: `<p>Eine <b>Luftmasse</b> ist ein großes Luftvolumen mit einheitlicher Temperatur und Feuchtigkeit. Wenn verschiedene Luftmassen aufeinandertreffen, nennt man ihre Trennfläche <b>Front</b>:</p>
<ul>
<li><b>Warmfront</b>: Die warme Luft steigt langsam über die kalte auf: Schichtwolken, schwacher, aber langer Regen, danach steigende Temperatur;</li>
<li><b>Kaltfront</b>: Die kalte Luft schiebt sich keilförmig unter die warme und drückt sie nach oben: Kumulonimbus, heftige, aber kurze Schauer und Gewitter, danach sinkende Temperatur und aufklarender Himmel.</li>
</ul>
<p>Die <b>Tiefdruckgebiete</b> unserer Breiten entstehen aus dem Zusammenstoß von Polarluft und subtropischer Luft; sie kommen von Westen (vom Atlantik). Auf Italien wirken außerdem das <b>Azorenhoch</b> (stabiler Sommer) und das <b>russisch-sibirische Hoch</b> (Winterkälte).</p>
<p>Das <b>Wetter</b> ist der Zustand der Atmosphäre an einem Ort zu einem bestimmten Zeitpunkt (Temperatur, Druck, Wind, Feuchtigkeit, Wolken, Niederschläge): Es ändert sich von Stunde zu Stunde. Das <b>Klima</b> dagegen ist die Gesamtheit der mittleren Bedingungen über mindestens 30 Jahre. Man sagt: „Das Klima ist das, was man erwartet, das Wetter das, was man bekommt.“</p>
<p>Die <b>Vorhersagen</b> beruhen auf Daten von Bodenstationen, Wetterballonen, Radar, Satelliten und auf <b>numerischen Modellen</b>, die am Computer die Gleichungen der Strömungsmechanik und Thermodynamik der Atmosphäre lösen: Die Idee stammt von <b>Lewis Fry Richardson</b> (1922), die erste automatische Vorhersage mit einem Computer stammt von 1950. Nach etwa einer Woche wird die Vorhersage unzuverlässig, weil die Atmosphäre ein <b>chaotisches</b> System ist: <b>Edward Lorenz</b> entdeckte in den 1960er-Jahren, dass kleine Anfangsunterschiede schnell anwachsen (der berühmte „Schmetterlingseffekt“).</p>`
    },
    {
      type: "curiosity",
      title: "Hurrikane und die großen Wetterstörungen",
      html: `<p>Ein <b>tropischer Wirbelsturm</b> (Hurrikan im Atlantik, Taifun im westlichen Pazifik) bildet sich über Ozeanen mit Oberflächenwasser von mehr als etwa 26,5 °C: Der kondensierende Wasserdampf setzt enorme Wärmemengen frei, die den Sturm antreiben, mit Winden von über 118 km/h und einem ruhigen „Auge“ in der Mitte. 1900 forderte der Hurrikan, der Galveston (Texas) traf, etwa 8000 Todesopfer. Über dem Mittelmeer entstehen manchmal <b>Medicanes</b> (Mediterranean hurricanes), Wirbelstürme mit ähnlichem Aufbau, aber kleiner und schwächer.</p>`
    },
    {
      type: "conceptMap",
      title: "Mindmap der Atmosphäre: Tippe auf die Knoten und finde heraus, warum",
      nodes: [
        { id: "atm", label: "Atmosphäre", x: 50, y: 6, color: "#3b82f6", html: "Gashülle: 78 % Stickstoff, 21 % Sauerstoff.", why: "Die Luft galt bis ins 18. Jahrhundert als einfaches Element: <b>Priestley</b> (1774) und <b>Scheele</b> isolierten den Sauerstoff, <b>Lavoisier</b> erkannte, dass Luft ein Gemisch aus zwei Hauptgasen ist." },
        { id: "strati", label: "Schichten", x: 20, y: 28, color: "#6366f1", html: "Troposphäre, Stratosphäre, Mesosphäre, Thermosphäre.", why: "1902 entdeckte <b>Léon Teisserenc de Bort</b> mit unbemannten Wetterballonen, dass die Temperatur oberhalb von etwa 11 km nicht weiter sinkt: Das war die Entdeckung der Stratosphäre." },
        { id: "pres", label: "Druck", x: 80, y: 28, color: "#f59e0b", html: "Gewicht der Luft: 1013 hPa auf Meereshöhe.", why: "<b>Torricelli</b> (1643) maß den Luftdruck und bewies die Existenz des Vakuums; <b>Pascal</b> (1648) bestätigte, dass er mit der Höhe abnimmt." },
        { id: "vento", label: "Wind", x: 50, y: 48, color: "#22c55e", html: "Luft, die von hohem zu niedrigem Druck strömt.", why: "Der Wind ist der Versuch der Atmosphäre, Druckunterschiede auszugleichen; die Corioliskraft (1835) lenkt ihn auf der Nordhalbkugel nach rechts ab und erklärt den Drehsinn der Zyklonen." },
        { id: "temp", label: "Temperatur", x: 15, y: 56, color: "#ef4444", html: "Hängt von der Sonne, der Höhe und dem Treibhauseffekt ab.", why: "Der natürliche Treibhauseffekt hält die Erde bei +15 °C; <b>Arrhenius</b> (1896) berechnete, dass bei einer Verdopplung des CO₂ die Temperatur um einige Grad steigen würde, und nahm die Klimafrage ein Jahrhundert vorweg." },
        { id: "umid", label: "Feuchtigkeit und Wolken", x: 80, y: 64, color: "#0ea5e9", html: "Der Dampf kondensiert, wenn er abkühlt.", why: "Wärmere Luft enthält mehr Dampf: Wenn sie aufsteigt und abkühlt, kondensiert der überschüssige Dampf und bildet Wolken. Luke Howard klassifizierte sie 1803 mit den lateinischen Namen, die noch heute gebräuchlich sind." },
        { id: "prec", label: "Niederschläge", x: 50, y: 82, color: "#14b8a6", html: "Regen, Schnee, Hagel.", why: "Sie entstehen, wenn die Tröpfchen schwer genug werden, um zu fallen; sie können konvektiv (Gewitter), orografisch (im Gebirge) oder frontal sein." },
        { id: "fronti", label: "Fronten und Störungen", x: 18, y: 84, color: "#a855f7", html: "Aufeinandertreffen verschiedener Luftmassen.", why: "Die Frontentheorie wurde 1918–1922 von der norwegischen Schule um <b>Vilhelm Bjerknes</b> entwickelt, in Analogie zu den Fronten des Ersten Weltkriegs." },
        { id: "clima", label: "Klima", x: 85, y: 90, color: "#64748b", html: "Mittel der Bedingungen über mindestens 30 Jahre.", why: "Das Wetter ist chaotisch und jenseits von etwa 10 Tagen nicht vorhersagbar (Lorenz), während das Klima die langfristige Statistik ist, die im Mittel vorhersagbar ist: Deshalb kann man es über Jahrzehnte untersuchen." }
      ],
      edges: [
        ["atm", "strati", "gliedert sich in"],
        ["atm", "pres", "übt aus"],
        ["pres", "vento", "erzeugt"],
        ["temp", "pres", "verändert"],
        ["temp", "umid", "bestimmt"],
        ["umid", "prec", "führt zu"],
        ["fronti", "prec", "verursachen"],
        ["vento", "fronti", "bringt"],
        ["prec", "clima", "bilden"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Wind und Wolken",
      questions: [
        { type: "mc", q: "Der Wind weht …", options: ["von hohem zu niedrigem Druck", "von niedrigem zu hohem Druck", "immer vom Meer zum Land"], answer: 0, explain: "So wie Wasser von einem höheren zu einem tieferen Niveau fließt." },
        { type: "num", q: "Eine absolute Luftfeuchtigkeit von 8,65 g/m³ bei 20 °C (Maximum 17,3 g/m³): Wie groß ist die relative Luftfeuchtigkeit?", answer: 50, unit: "%", explain: "8,65 / 17,3 = 0,5 → 50 %." },
        { type: "tf", q: "Kumulonimbus sind Wolken, die Gewitter und Hagel bringen können.", answer: true, explain: "Es sind Wolken mit großer vertikaler Ausdehnung." }
      ]
    }
  ],
  glossary: [
    { t: "Atmosphäre", d: "Gashülle, die die Erde umgibt." },
    { t: "Troposphäre", d: "Unterste Schicht, in der sich die Wettererscheinungen abspielen." },
    { t: "Ozon", d: "Gas (O₃) der Stratosphäre, das UV-Strahlen absorbiert." },
    { t: "Luftdruck", d: "Kraft der Luft pro Flächeneinheit: 1013 hPa auf Meereshöhe." },
    { t: "Isobare", d: "Linie, die Punkte mit gleichem Druck verbindet." },
    { t: "Hoch / Tief", d: "Gebiet mit hohem Druck (heiteres Wetter) / mit niedrigem Druck (unbeständiges Wetter)." },
    { t: "Relative Luftfeuchtigkeit", d: "Prozentuales Verhältnis zwischen vorhandenem Dampf und dem bei dieser Temperatur maximal möglichen." },
    { t: "Taupunkt", d: "Temperatur, bei der die Luft gesättigt wird und der Dampf kondensiert." },
    { t: "Front", d: "Trennfläche zwischen zwei verschiedenen Luftmassen." },
    { t: "Wetter", d: "Zustand der Atmosphäre an einem Ort zu einem bestimmten Zeitpunkt." },
    { t: "Klima", d: "Mittlere atmosphärische Bedingungen eines Ortes über mindestens 30 Jahre." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie hoch ist der Sauerstoffanteil der Luft?", options: ["Etwa 21 %", "Etwa 78 %", "Etwa 50 %"], answer: 0, explain: "Sauerstoff macht 20,95 % aus; Stickstoff 78 %." },
      { type: "mc", q: "Wo befindet sich die Ozonschicht?", options: ["Troposphäre", "Stratosphäre", "Thermosphäre"], answer: 1, explain: "Etwa zwischen 15 und 35 km." },
      { type: "num", q: "Um wie viel °C sinkt die Temperatur beim Aufstieg um 2000 m in der Troposphäre (6,5 °C/km)?", answer: 13, unit: "°C", explain: "2 × 6,5 = 13 °C." },
      { type: "mc", q: "Wer maß als Erster den Luftdruck mit Quecksilber?", options: ["Torricelli", "Galilei", "Newton"], answer: 0, explain: "Evangelista Torricelli im Jahr 1643." },
      { type: "tf", q: "In einer Zyklone (Tiefdruck) ist das Wetter in der Regel unbeständig.", answer: true, explain: "Die Luft steigt auf, kondensiert und bildet Wolken und Niederschläge." },
      { type: "mc", q: "Warum gibt man die Windrichtung mit dem Herkunftsort an?", options: ["Das ist eine Konvention: Nordwind = kommt aus Norden", "Weil der Wind nach Norden weht", "Weil es einfacher ist"], answer: 0, explain: "Die Tramontana zum Beispiel weht von Norden nach Süden." },
      { type: "num", q: "Die Luft bei 25 °C enthält 11,5 g/m³ Dampf; das Maximum bei 25 °C beträgt 23 g/m³. Wie groß ist die relative Luftfeuchtigkeit?", answer: 50, unit: "%", explain: "11,5 / 23 = 50 %." },
      { type: "order", q: "Ordne die Schichten der Atmosphäre von unten nach oben.", items: ["Troposphäre", "Stratosphäre", "Mesosphäre", "Thermosphäre"], explain: "Vom Boden zum Weltraum." },
      { type: "text", q: "Wie heißt das Gerät, das den Luftdruck misst?", answer: ["Barometer", "das Barometer"], explain: "1643 von Torricelli erfunden." },
      { type: "mc", q: "Das Klima ist …", options: ["der Zustand der Atmosphäre in diesem Moment", "das Mittel der atmosphärischen Bedingungen über mindestens 30 Jahre", "die Höchsttemperatur des Tages"], answer: 1, explain: "Das Wetter ändert sich stündlich; das Klima beschreibt das typische Verhalten eines Ortes." }
    ]
  }
});
