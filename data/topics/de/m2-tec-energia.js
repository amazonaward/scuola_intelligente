TOPIC('de', {
  id: `m2-tec-energia`,
  title: `Energie und Kraftwerke`,
  intro: `Du drückst auf einen Schalter, und das Licht geht an: Hinter dieser Geste steckt eine sehr lange Reise. Strom entsteht in einem <b>Kraftwerk</b>, wo eine Energiequelle (Wasser, Wind, Sonne, Gas, Erdwärme …) <b>umgewandelt</b> wird und dann über Hunderte von Kilometern durch Kabel bis zur Steckdose zu Hause fließt. Entdecken wir, wie das funktioniert.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `Energie: Nichts entsteht neu, alles wird umgewandelt`,
      html: `<p><b>Energie</b> ist die Fähigkeit, Arbeit zu verrichten: bewegen, erwärmen, beleuchten. Sie wird in <b>Joule</b> (J) gemessen; bei Strom verwendet man die <b>Kilowattstunde</b> (kWh).</p>
<p>Es gibt viele <b>Formen</b> von Energie: <b>mechanische</b> (Bewegung und Lage), <b>thermische</b> (Wärme), <b>chemische</b> (in Brennstoffen und Nahrung), <b>elektrische</b>, <b>Lichtenergie</b> (Strahlung), <b>Kernenergie</b>.</p>
<p>Goldene Regel (Energieerhaltungssatz): Energie <b>entsteht nicht neu und geht nicht verloren</b>, sie wird von einer Form in eine andere <b>umgewandelt</b>. Kraftwerke „erzeugen“ keine Energie aus dem Nichts: Sie wandeln sie in elektrische Energie um.</p>
<p>Bei jeder Umwandlung geht ein Teil der Energie verloren, fast immer als Wärme. Der <b>Wirkungsgrad</b> sagt, wie viel nutzbare Energie wir erhalten:</p>
<p style="text-align:center"><b>Wirkungsgrad = nutzbare Energie ÷ eingesetzte Energie × 100</b></p>`
    },
    {
      type: `text`,
      title: `Die Energiequellen`,
      html: `<table>
<tr><th><b>Nicht erneuerbare</b> Quellen</th><th><b>Erneuerbare</b> Quellen</th></tr>
<tr><td>Sie haben sich in Millionen von Jahren gebildet und werden aufgebraucht: <b>Erdöl</b>, <b>Kohle</b>, <b>Erdgas</b> (fossile Brennstoffe), <b>Uran</b> (Kernenergie).</td><td>Sie erneuern sich ständig dank der Sonne oder der Erde: <b>Sonne</b>, <b>Wind</b>, <b>Wasserkraft</b>, <b>Geothermie</b> (Wärme aus dem Erdinneren), <b>Biomasse</b> (Holz, pflanzliche Abfälle), <b>Meeresenergie</b>.</td></tr>
<tr><td>Beim Verbrennen fossiler Brennstoffe wird <b>Kohlendioxid</b> (CO₂) frei, das wichtigste Gas für die globale Erwärmung, sowie Schadstoffe.</td><td>Im Betrieb stoßen sie sehr wenig CO₂ aus, aber manche hängen vom Wetter ab (Sonne, Wind), und man braucht <b>Speicher</b>systeme.</td></tr>
</table>`
    },
    {
      type: `text`,
      title: `Das Herzstück fast jedes Kraftwerks: Turbine + Generator`,
      html: `<p>Im Jahr <b>1831</b> entdeckte der Engländer <b>Michael Faraday</b> die <b>elektromagnetische Induktion</b>: Wenn sich ein Magnet in der Nähe einer Spule aus Kupferdraht bewegt, entsteht im Draht elektrischer Strom. Das ist das Prinzip des Fahrraddynamos und fast aller Kraftwerke.</p>
<ol>
<li>Die Energiequelle setzt eine <b>Turbine</b> (ein großes Schaufelrad) in Bewegung: Wasser, Wind oder Dampf treiben sie an.</li>
<li>Die Turbine dreht den <b>Generator</b>: Magnete, die sich in Kupferspulen drehen → es entsteht <b>Wechselstrom</b>.</li>
<li>Der <b>Transformator</b> erhöht die Spannung (in Italien bis zu 380.000 Volt), um die Energie mit weniger Verlusten zu transportieren.</li>
<li>Die <b>Hochspannungsleitungen</b> (die Strommasten) bringen die Energie weit weg; die <b>Umspannstationen</b> senken die Spannung auf die <b>230 Volt</b> der Steckdosen zu Hause bei <b>50 Hertz</b>.</li>
</ol>
<p>Eine Ausnahme ist die <b>Photovoltaik</b>: Die Panels wandeln Licht <b>direkt</b> in Strom um, ohne Turbinen. Der erzeugte Strom ist Gleichstrom, und ein <b>Wechselrichter</b> wandelt ihn in Wechselstrom um.</p>`
    },
    {
      type: `svg`,
      title: `Vom Kraftwerk zur Steckdose zu Hause`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<rect x="0" y="240" width="600" height="60" fill="#bbf7d0"/>
<rect x="20" y="130" width="90" height="110" fill="#94a3b8" stroke="#334155" stroke-width="3"/>
<rect x="40" y="80" width="22" height="50" fill="#64748b"/>
<circle cx="51" cy="65" r="12" fill="#e2e8f0"/>
<circle cx="62" cy="48" r="15" fill="#f1f5f9"/>
<circle cx="65" cy="185" r="26" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<line x1="65" y1="159" x2="65" y2="211" stroke="#92400e" stroke-width="3"/>
<line x1="39" y1="185" x2="91" y2="185" stroke="#92400e" stroke-width="3"/>
<text x="65" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">1 Kraftwerk</text>
<rect x="140" y="180" width="60" height="60" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<text x="170" y="218" font-size="22" fill="#ffffff" text-anchor="middle">⚡</text>
<text x="170" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">2 Transform.</text>
<text x="170" y="286" font-size="13" fill="#7c2d12" text-anchor="middle">erhöht auf 380 kV</text>
<polygon points="260,240 280,90 300,240" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="255" y1="110" x2="305" y2="110" stroke="#334155" stroke-width="4"/>
<polygon points="380,240 400,90 420,240" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="375" y1="110" x2="425" y2="110" stroke="#334155" stroke-width="4"/>
<path d="M200 195 Q 230 120 258 110 Q 340 140 378 110 Q 430 140 460 190" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="340" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">3 Hochspannungsltg.</text>
<rect x="450" y="190" width="40" height="50" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="470" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">4 Umspannst.</text>
<polygon points="510,180 550,145 590,180" fill="#ef4444"/>
<rect x="515" y="180" width="70" height="60" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<circle cx="550" cy="205" r="10" fill="#fde047"/>
<line x1="490" y1="210" x2="515" y2="210" stroke="#dc2626" stroke-width="3"/>
<text x="550" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">5 Haus</text>
<text x="550" y="286" font-size="13" fill="#92400e" text-anchor="middle">230 V</text>
<text x="300" y="30" font-size="18" font-weight="bold" fill="#0e7490" text-anchor="middle">Die Reise des Stroms</text>
</svg>`,
      caption: `Die Spannung wird für den Transport erhöht (weniger Verluste in den Kabeln) und gesenkt, bevor der Strom in die Häuser kommt.`
    },
    {
      type: `text`,
      title: `Die wichtigsten Kraftwerkstypen`,
      html: `<ul>
<li><b>Wärmekraftwerk</b>: verbrennt Gas, Kohle oder Erdöl in einem Kessel; die Wärme macht aus Wasser <b>Dampf</b> mit hohem Druck, der die Turbine dreht. Kette: chemisch → thermisch → mechanisch → elektrisch.</li>
<li><b>Wasserkraftwerk</b>: Das Wasser eines Stausees (oft durch eine <b>Staumauer</b> entstanden) stürzt durch die <b>Druckrohrleitungen</b> und trifft auf die Turbine. Kette: potenziell → kinetisch → elektrisch.</li>
<li><b>Windkraftwerk</b>: Der Wind dreht die Flügel einer <b>Windkraftanlage</b>, die mit dem Generator in der Gondel oben auf dem Turm verbunden ist.</li>
<li><b>Photovoltaikanlage</b>: <b>Silizium</b>zellen wandeln Licht in Strom um (photovoltaischer Effekt, 1839 von Edmond Becquerel entdeckt).</li>
<li><b>Geothermiekraftwerk</b>: nutzt den heißen Dampf, der in Vulkangebieten aus dem Untergrund aufsteigt.</li>
<li><b>Kernkraftwerk</b>: Die <b>Spaltung</b> von Urankernen setzt sehr viel Wärme frei, die wie in einem Wärmekraftwerk Dampf erzeugt. Es stößt kein CO₂ aus, erzeugt aber <b>radioaktive Abfälle</b>, die über sehr lange Zeiträume verwahrt werden müssen. In Italien wurden die Kernkraftwerke nach dem Referendum von 1987 stillgelegt.</li>
</ul>`
    },
    {
      type: `3d`,
      title: `Erkunde ein Wasserkraftwerk`,
      scene: `terrain`,
      options: { features: {
        glacier: { label: `Gletscher`, html: `Gletscher und Schnee sind die Wasser-„Reserven“: Wenn sie im Frühling und Sommer schmelzen, speisen sie die Alpenflüsse und -seen.` },
        mountain: { label: `Berg`, html: `Wasserkraftwerke baut man in den Bergen, weil man einen großen <b>Höhenunterschied</b> braucht: Je höher das Wasser herabfällt, desto mehr Energie hat es.` },
        lake: { label: `Stausee (künstlicher See)`, html: `Die <b>Staumauer</b> sperrt ein Tal ab und schafft einen See: Das ruhende Wasser oben besitzt <b>potenzielle Energie</b>. Der Stausee ist auch eine „Batterie“: Man kann ihn leeren, wenn Energie gebraucht wird.` },
        valley: { label: `Tal mit dem Kraftwerk`, html: `Am Talboden steht das <b>Kraftwerk</b>: Das Wasser kommt durch die Druckrohrleitungen, trifft auf die Turbine und dreht den Generator.` },
        river: { label: `Fluss`, html: `Nach der Turbine fließt das Wasser in den Fluss zurück: Es wird weder verbraucht noch verschmutzt. „Laufwasserkraftwerke“ nutzen direkt die Strömung des Flusses, ohne große Staumauern.` },
        plain: { label: `Ebene`, html: `Die Hochspannungsleitungen bringen die Energie zu den Städten und Fabriken der Ebene, wo am meisten verbraucht wird.` }
      } },
      caption: `Tippe die Teile der Landschaft an, um dem Weg des Wassers vom Berg bis zum elektrischen Strom zu folgen.`
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Quellen und Umwandlungen`,
      questions: [
        { type: `mc`, q: `Welche Quelle ist erneuerbar?`, options: [`Kohle`, `Wind`, `Erdgas`], answer: 1, explain: `Der Wind erneuert sich ständig: Er ist eine erneuerbare Quelle.` },
        { type: `mc`, q: `Welche Maschine wandelt Bewegung in elektrische Energie um?`, options: [`Transformator`, `Generator`, `Kessel`], answer: 1, explain: `Der Generator nutzt die von Faraday entdeckte elektromagnetische Induktion.` },
        { type: `tf`, q: `Photovoltaikpaneele brauchen eine Turbine.`, answer: false, explain: `Die Photovoltaik wandelt Licht direkt in Strom um, ohne bewegliche Teile.` }
      ]
    },
    {
      type: `widget`,
      title: `Erneuerbar oder nicht?`,
      widget: `classify`,
      options: {
        groups: [`Erneuerbar`, `Nicht erneuerbar`],
        items: [
          [`☀️ Sonne`, 0], [`🌬️ Wind`, 0], [`💧 Flusswasser`, 0], [`🌋 Erdwärme`, 0],
          [`🪵 Biomasse`, 0], [`🛢️ Erdöl`, 1], [`⚫ Kohle`, 1], [`🔥 Erdgas`, 1], [`☢️ Uran`, 1]
        ]
      },
      caption: `Fossile Quellen und Uran sind begrenzt: Eines Tages werden sie zu Ende gehen.`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: die Stromrechnung lesen`,
      html: `<p>Die <b>Leistung</b> eines Geräts (in Watt, W, oder Kilowatt, kW) sagt, wie viel Energie es <b>pro Stunde</b> verbraucht. Die verbrauchte Energie ist:</p>
<p style="text-align:center"><b>Energie (kWh) = Leistung (kW) × Zeit (h)</b></p>
<ul>
<li>Ein Backofen mit <b>2 kW</b>, der <b>1,5 Stunden</b> läuft, verbraucht 2 × 1,5 = <b>3 kWh</b>.</li>
<li>Eine LED-Lampe mit <b>10 W</b> (= 0,01 kW), die 30 Tage lang täglich <b>5 Stunden</b> brennt: 0,01 × 5 × 30 = <b>1,5 kWh</b> im Monat.</li>
<li>Eine alte Glühbirne mit <b>60 W</b>, die gleich hell leuchtet: 0,06 × 5 × 30 = <b>9 kWh</b>, sechsmal so viel!</li>
</ul>
<p>Wenn eine kWh etwa 0,30 € kostet, kostet die LED 0,45 € im Monat und die alte Glühbirne 2,70 €. Energie zu sparen lohnt sich für die Umwelt und fürs Portemonnaie.</p>`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: der Wirkungsgrad`,
      html: `<p>Ein Wärmekraftwerk bekommt aus dem Brennstoff <b>100</b> Energieeinheiten und wandelt <b>40</b> davon in Strom um: Sein Wirkungsgrad beträgt 40 ÷ 100 × 100 = <b>40 %</b>. Der Rest geht als Wärme verloren (deshalb haben sie die großen Kühltürme).</p>
<p>Moderne <b>Gas-und-Dampf-Kombikraftwerke</b> nutzen die Wärme der Abgase, um noch mehr Dampf zu erzeugen, und kommen auf etwa <b>60 %</b>. Ein Wasserkraftwerk kann über <b>85–90 %</b> erreichen, während ein gewöhnliches Photovoltaikpanel etwa <b>20 %</b> des empfangenen Lichts in Strom umwandelt.</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du schon …? Italien hat die erste geothermische Glühbirne zum Leuchten gebracht`,
      html: `<p>Im Jahr <b>1904</b> nutzte in <b>Larderello</b> in der Toskana Fürst <b>Piero Ginori Conti</b> den natürlichen Dampf, der aus dem Boden kam, um einen kleinen Dynamo zu drehen, und ließ <b>5 Glühbirnen</b> leuchten: Zum ersten Mal auf der Welt wurde Strom aus der Wärme der Erde erzeugt.</p>
<p>1913 ging in Larderello das erste kommerzielle Geothermiekraftwerk der Welt in Betrieb. Noch heute erzeugt die Toskana geothermischen Strom.</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du schon …? Die „Wasserbatterien“`,
      html: `<p>Sonne und Wind liefern nicht immer dann, wenn man es braucht. Eine clevere Lösung sind <b>Pumpspeicherkraftwerke</b>: Sie haben zwei Seen, einen oben und einen unten. Wenn überschüssige Energie da ist (zum Beispiel mittags bei viel Sonne), wird sie benutzt, um Wasser in den oberen See zu <b>pumpen</b>; abends, wenn alle das Licht anmachen, fließt das Wasser hinab und erzeugt Strom.</p>
<p>Das ist, als würde man eine riesige Batterie aufladen … die aus Wasser und Bergen besteht!</p>`
    },
    {
      type: `remember`,
      title: `Merk dir`,
      html: `<ul>
<li>Energie entsteht nicht neu und geht nicht verloren: Sie wird <b>umgewandelt</b>. Der Wirkungsgrad misst, wie viel Energie nutzbar ist.</li>
<li><b>Nicht erneuerbare</b> Quellen: fossile Brennstoffe und Uran. <b>Erneuerbare</b> Quellen: Sonne, Wind, Wasser, Erdwärme, Biomasse.</li>
<li>Fast alle Kraftwerke: Quelle → <b>Turbine</b> → <b>Generator</b> → <b>Transformator</b> → Netz. Die Photovoltaik braucht keine Turbinen.</li>
<li>Energie (kWh) = Leistung (kW) × Zeit (h).</li>
<li>Zu Hause: 230 V, 50 Hz, Wechselstrom.</li>
</ul>`
    },
    {
      type: `alternatives`,
      title: `Weitere Wege, Kraftwerke zu verstehen`,
      intro: `Wenn dich die Energieumwandlungen verwirren, probier es mit einem Vergleich, mit Geschichte oder mit einem interaktiven Zeitstrahl.`,
      tabs: [
        {
          label: `🚲 Der Fahrraddynamo`,
          html: `<p>Ein altes Fahrrad mit <b>Dynamo</b> ist ein Kraftwerk im Kleinen!</p>
<ul>
<li>Du bist die <b>Energiequelle</b> (chemische Energie der Nahrung → Muskeln).</li>
<li>Das sich drehende Rad ist die <b>Turbine</b>.</li>
<li>Der Dynamo, mit einem Magneten, der sich in einer Spule dreht, ist der <b>Generator</b>.</li>
<li>Das Licht, das angeht, ist das <b>Haus</b>, das verbraucht.</li>
</ul>
<p>Wenn du fester trittst, leuchtet das Licht stärker; wenn du anhältst, geht es aus: Ohne Bewegung kein Strom. In einem Wärmekraftwerk ist anstelle deiner Beine der Dampf am Werk; in einem Wasserkraftwerk das herabfallende Wasser.</p>`
        },
        {
          label: `🔗 Die Umwandlungskette`,
          html: `<p>Jedes Kraftwerk ist eine <b>Kette</b> von Umwandlungen. Verfolge sie wie eine Staffel, bei der die Energie von Hand zu Hand weitergegeben wird:</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fff7ed"/>
<text x="300" y="30" font-size="18" font-weight="bold" fill="#9a3412" text-anchor="middle">Wärmekraftwerk</text>
<rect x="15" y="45" width="125" height="60" rx="12" fill="#a16207"/>
<text x="77" y="82" font-size="16" fill="#ffffff" text-anchor="middle">chemisch 🔥</text>
<rect x="160" y="45" width="125" height="60" rx="12" fill="#dc2626"/>
<text x="222" y="82" font-size="16" fill="#ffffff" text-anchor="middle">thermisch ♨️</text>
<rect x="305" y="45" width="125" height="60" rx="12" fill="#2563eb"/>
<text x="367" y="82" font-size="16" fill="#ffffff" text-anchor="middle">mechanisch ⚙️</text>
<rect x="450" y="45" width="135" height="60" rx="12" fill="#16a34a"/>
<text x="517" y="82" font-size="16" fill="#ffffff" text-anchor="middle">elektrisch ⚡</text>
<text x="150" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="295" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="440" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="300" y="150" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle">Wasserkraftwerk</text>
<rect x="60" y="165" width="140" height="60" rx="12" fill="#0ea5e9"/>
<text x="130" y="202" font-size="16" fill="#ffffff" text-anchor="middle">potenziell 🏔️</text>
<rect x="230" y="165" width="140" height="60" rx="12" fill="#2563eb"/>
<text x="300" y="202" font-size="16" fill="#ffffff" text-anchor="middle">kinetisch 💧</text>
<rect x="400" y="165" width="140" height="60" rx="12" fill="#16a34a"/>
<text x="470" y="202" font-size="16" fill="#ffffff" text-anchor="middle">elektrisch ⚡</text>
<text x="215" y="202" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="385" y="202" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="300" y="262" font-size="15" fill="#7c2d12" text-anchor="middle">bei jedem Schritt geht etwas Energie als Wärme verloren</text>
</svg>`
        },
        {
          label: `🌍 Wie machen es andere Länder`,
          html: `<p>Jedes Land erzeugt Strom mit den Ressourcen, die es hat:</p>
<ul>
<li>🇳🇴 <b>Norwegen</b>: voller Berge und Flüsse, erzeugt etwa <b>90 %</b> seines Stroms mit <b>Wasserkraft</b>.</li>
<li>🇫🇷 <b>Frankreich</b>: etwa zwei Drittel des Stroms stammen aus <b>Kernkraft</b>.</li>
<li>🇮🇸 <b>Island</b>: eine Vulkaninsel, nutzt fast zu 100 % <b>Wasserkraft und Geothermie</b>.</li>
<li>🇩🇰 <b>Dänemark</b>: flaches, windiges Land, über die Hälfte des Stroms stammt aus <b>Wind</b>.</li>
<li>🇮🇹 <b>Italien</b>: nutzt vor allem <b>Erdgas</b>, aber die erneuerbaren Energien (Wasserkraft, Sonne, Wind, Erdwärme, Biomasse) decken inzwischen etwa zwei Fünftel des Stromverbrauchs, und die Sonne wächst jedes Jahr.</li>
</ul>
<p>Geografie und Energie hängen eng zusammen!</p>`
        },
        {
          label: `⏳ Zeitstrahl`,
          html: `<p>Scrolle den Zeitstrahl entlang: von Faradays Induktion bis zu den Solarpaneelen auf den Dächern.</p>`,
          widget: `timeline`,
          options: { unit: `Jahre`, events: [
            { year: 1831, label: `Faraday entdeckt die elektromagnetische Induktion`, icon: `🧲` },
            { year: 1839, label: `Becquerel entdeckt den photovoltaischen Effekt`, icon: `☀️` },
            { year: 1879, label: `Edisons Glühlampe`, icon: `💡` },
            { year: 1882, label: `Erste Elektrizitätswerke in London und New York`, icon: `🏭` },
            { year: 1883, label: `In Mailand das Kraftwerk in der Via Santa Radegonda`, icon: `🇮🇹` },
            { year: 1904, label: `Larderello: erster geothermischer Strom`, icon: `🌋` },
            { year: 1954, label: `Erste Solarpaneele aus Silizium (Bell Labs)`, icon: `🔋` },
            { year: 1987, label: `Volksabstimmung: Italien gibt die Kernenergie auf`, icon: `🗳️` }
          ] }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Landkarte der Begriffe: elektrische Energie`,
      nodes: [
        { id: `energia`, label: `Energie`, x: 50, y: 7, color: `#7c3aed`, html: `Fähigkeit, Arbeit zu verrichten. Sie wird in Joule (J) oder kWh gemessen.`, why: `Der Energieerhaltungssatz wurde Mitte des 19. Jahrhunderts von Wissenschaftlern wie Julius Robert Mayer, James Prescott Joule und Hermann von Helmholtz formuliert: Energie wird umgewandelt, aber die Gesamtmenge bleibt konstant.` },
        { id: `fonti`, label: `Quellen`, x: 50, y: 27, color: `#2563eb`, html: `Woher wir die Energie nehmen: erneuerbar und nicht erneuerbar.`, why: `Fast alle stammen von der Sonne: Fossile Brennstoffe sind Überreste von Pflanzen und Tieren, die vor Millionen von Jahren Sonnenenergie gespeichert haben; Wind und Regen entstehen, weil die Sonne Luft und Meer erwärmt. Ausnahmen sind Geothermie und Kernenergie.` },
        { id: `rinn`, label: `Erneuerbare`, x: 20, y: 45, color: `#16a34a`, html: `Sonne, Wind, Wasser, Erdwärme, Biomasse.`, why: `Sie erneuern sich in menschlichen Zeiträumen: Die Sonne wird noch Milliarden von Jahren scheinen, und der Wasserkreislauf bringt immer wieder Regen auf die Berge.` },
        { id: `nonrinn`, label: `Nicht erneuerbare`, x: 80, y: 45, color: `#64748b`, html: `Erdöl, Kohle, Gas, Uran.`, why: `Fossile Brennstoffe haben sich in Millionen von Jahren gebildet: Wir verbrauchen sie in wenigen Jahrhunderten. Beim Verbrennen setzen wir CO₂ frei, das Wärme in der Atmosphäre festhält.` },
        { id: `turbina`, label: `Turbine`, x: 35, y: 65, color: `#0ea5e9`, html: `Schaufelrad, das von Wasser, Dampf oder Wind bewegt wird.`, why: `Sie stammt von den Wasser- und Windmühlen ab, die seit Jahrhunderten benutzt werden. Die moderne Dampfturbine wurde 1884 von Charles Parsons erfunden.` },
        { id: `alternatore`, label: `Generator`, x: 65, y: 65, color: `#f59e0b`, html: `Wandelt Bewegung in Wechselstrom um.`, why: `Er beruht auf der elektromagnetischen Induktion, die Michael Faraday 1831 entdeckte: Ein bewegter Magnet in der Nähe einer Spule erzeugt Strom.` },
        { id: `fv`, label: `Photovoltaik`, x: 10, y: 82, color: `#eab308`, html: `Siliziumzellen, die Licht in Strom umwandeln.`, why: `Den photovoltaischen Effekt beobachtete Edmond Becquerel 1839; Albert Einstein erklärte 1905 das verwandte Phänomen (den photoelektrischen Effekt) und erhielt dafür den Nobelpreis.` },
        { id: `rete`, label: `Stromnetz`, x: 65, y: 85, color: `#ef4444`, html: `Transformatoren, Hochspannungsleitungen, Umspannstationen: Sie bringen die Energie in die Häuser.`, why: `Man verwendet Wechselstrom, weil sich die Spannung mit Transformatoren leicht erhöhen und senken lässt: hohe Spannung = weniger Verluste in den Kabeln. Es war der „Stromkrieg“ zwischen Edison (Gleichstrom) und Tesla/Westinghouse (Wechselstrom) Ende des 19. Jahrhunderts.` },
        { id: `kwh`, label: `kWh`, x: 90, y: 92, color: `#a855f7`, html: `Einheit der elektrischen Energie: Leistung (kW) × Zeit (h).`, why: `Das Watt ist nach James Watt benannt, dem schottischen Ingenieur, der die Dampfmaschine verbesserte. 1 kWh = 3.600.000 Joule.` }
      ],
      edges: [
        [`energia`, `fonti`, `stammt aus`],
        [`fonti`, `rinn`, `Art`],
        [`fonti`, `nonrinn`, `Art`],
        [`rinn`, `turbina`, `Wasser, Wind bewegen`],
        [`nonrinn`, `turbina`, `der Dampf bewegt`],
        [`turbina`, `alternatore`, `dreht den`],
        [`rinn`, `fv`, `die Sonne speist`],
        [`alternatore`, `rete`, `speist ein in`],
        [`fv`, `rete`, `mit Wechselrichter`],
        [`rete`, `kwh`, `wird gemessen in`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Rechnen mit Energie`,
      questions: [
        { type: `num`, q: `Ein Föhn mit 2 kW läuft 0,5 Stunden. Wie viele kWh verbraucht er?`, answer: 1, unit: `kWh`, explain: `2 × 0,5 = 1 kWh.` },
        { type: `num`, q: `Ein Kraftwerk bekommt 200 Energieeinheiten und wandelt 70 davon in Strom um. Wie hoch ist der Wirkungsgrad in %?`, answer: 35, unit: `%`, explain: `70 ÷ 200 × 100 = 35 %.` },
        { type: `mc`, q: `Warum wird Strom mit sehr hoher Spannung transportiert?`, options: [`Damit er schneller ankommt`, `Um die Verluste in den Kabeln zu verringern`, `Um ihn zu Hause sicherer zu machen`], answer: 1, explain: `Bei hoher Spannung braucht man weniger Strom, um dieselbe Leistung zu transportieren; daher erwärmen sich die Kabel weniger und es wird weniger Energie verschwendet.` }
      ]
    }
  ],
  glossary: [
    { t: `Energie`, d: `Fähigkeit, Arbeit zu verrichten; sie wird in Joule (J) oder Kilowattstunden (kWh) gemessen.` },
    { t: `Erneuerbare Quelle`, d: `Quelle, die sich in kurzer Zeit erneuert: Sonne, Wind, Wasser, Erdwärme, Biomasse.` },
    { t: `Fossiler Brennstoff`, d: `Erdöl, Kohle oder Gas, in Millionen von Jahren aus Überresten von Lebewesen entstanden.` },
    { t: `Turbine`, d: `Schaufelrad, das von Wasser, Dampf oder Wind in Drehung versetzt wird.` },
    { t: `Generator`, d: `Maschine, die Bewegung in elektrischen Wechselstrom umwandelt.` },
    { t: `Transformator`, d: `Gerät, das die elektrische Spannung erhöht oder senkt.` },
    { t: `Hochspannungsleitung`, d: `Linie aus Kabeln und Masten, die Energie mit hoher Spannung transportiert.` },
    { t: `Photovoltaischer Effekt`, d: `Direkte Umwandlung von Licht in Strom in Siliziumzellen.` },
    { t: `Kernspaltung`, d: `Spaltung schwerer Atomkerne (Uran), die große Mengen Wärme freisetzt.` },
    { t: `Wirkungsgrad`, d: `Verhältnis von gewonnener nutzbarer Energie zu eingesetzter Energie, in Prozent.` },
    { t: `Kilowattstunde (kWh)`, d: `Energie, die ein Gerät mit 1 kW in einer Stunde verbraucht.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `tf`, q: `Nach dem Erhaltungssatz wird Energie umgewandelt, entsteht aber nicht aus dem Nichts.`, answer: true, explain: `Energie entsteht nicht neu und geht nicht verloren, sie wird umgewandelt.` },
      { type: `mc`, q: `Welche der folgenden ist eine nicht erneuerbare Quelle?`, options: [`Geothermie`, `Uran`, `Biomasse`], answer: 1, explain: `Uran ist ein Mineral, das nur in begrenzter Menge vorkommt.` },
      { type: `mc`, q: `Wer entdeckte 1831 die elektromagnetische Induktion?`, options: [`Thomas Edison`, `Michael Faraday`, `Alessandro Volta`], answer: 1, explain: `Michael Faraday, ein englischer Wissenschaftler.` },
      { type: `order`, q: `Bring die Funktionsweise eines Wärmekraftwerks in die richtige Reihenfolge.`, items: [`Der Brennstoff verbrennt im Kessel`, `Das Wasser wird zu Dampf`, `Der Dampf dreht die Turbine`, `Der Generator erzeugt Strom`, `Der Transformator erhöht die Spannung`], explain: `Chemisch → thermisch → mechanisch → elektrisch, dann das Netz.` },
      { type: `num`, q: `Ein Fernseher mit 0,1 kW läuft 4 Stunden. Wie viele kWh verbraucht er?`, answer: 0.4, tol: 0.001, unit: `kWh`, explain: `0,1 × 4 = 0,4 kWh.` },
      { type: `mc`, q: `In welchem Kraftwerk gibt es keine Turbine?`, options: [`Windkraftwerk`, `Photovoltaikanlage`, `Wasserkraftwerk`], answer: 1, explain: `Die Photovoltaik wandelt Licht direkt in Strom um.` },
      { type: `text`, q: `Wie heißt der Ort in der Toskana, an dem 1904 zum ersten Mal geothermischer Strom erzeugt wurde?`, answer: [`larderello`], explain: `Larderello, in der Provinz Pisa.` },
      { type: `num`, q: `Wie hoch ist die Spannung (in Volt) der Steckdosen zu Hause in Italien?`, answer: 230, unit: `V`, explain: `In Italien (und in Europa) hat das Hausnetz 230 V, 50 Hz.` },
      { type: `tf`, q: `Wasserkraftwerke verbrauchen das Wasser, das nicht mehr in den Fluss zurückkehrt.`, answer: false, explain: `Das Wasser fließt durch die Turbine und kehrt in den Fluss zurück: Es wird genutzt, nicht verbraucht.` },
      { type: `mc`, q: `Was ist der größte Nachteil fossiler Brennstoffe für das Klima?`, options: [`Sie machen zu viel Lärm`, `Sie setzen CO₂ frei, das zur globalen Erwärmung beiträgt`, `Sie funktionieren nur tagsüber`], answer: 1, explain: `Die Verbrennung setzt Kohlendioxid frei, ein Treibhausgas.` },
      { type: `num`, q: `Ein Panel empfängt 1000 W Licht und erzeugt 200 W Strom. Wie hoch ist der Wirkungsgrad in %?`, answer: 20, unit: `%`, explain: `200 ÷ 1000 × 100 = 20 %.` },
      { type: `mc`, q: `Wozu dient ein Pumpspeicherkraftwerk?`, options: [`Energie zu speichern, indem man bei Überschuss Wasser nach oben pumpt`, `Erdöl aus dem Untergrund zu pumpen`, `Kernkraftwerke zu kühlen`], answer: 0, explain: `Es funktioniert wie eine große Batterie: Es speichert Energie in Form von Wasser in der Höhe.` }
    ],
    gen: [[`percent`, 2]]
  }
});
