TOPIC('de', {
  id: `m2-geo-europa-mediterranea`,
  title: `Mittelmeereuropa und der Balkan`,
  intro: `Gegenüber von Italien, am anderen Ufer der Adria und des Ionischen Meeres, erstreckt sich die <b>Balkanhalbinsel</b>: schroffe Berge, Küsten voller Inseln, glasklares Meer. Hier liegen <b>Griechenland</b>, die Wiege der westlichen Zivilisation, <b>Kroatien</b> mit seinen tausend Inseln und die übrigen Staaten des <b>Balkans</b>, die größtenteils aus dem Zerfall Jugoslawiens entstanden sind. Eine Region ganz nah bei uns, reich an Geschichte, Völkern und verschiedenen Sprachen.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Die Balkanhalbinsel: Berge und Meere`,
      html: `<p>Die <b>Balkanhalbinsel</b> ist die östlichste der drei großen Halbinseln des europäischen Mittelmeerraums (Iberische, Apenninen-, Balkanhalbinsel). Sie wird von vier Meeren umspült: <b>Adria</b>, <b>Ionisches Meer</b>, <b>Ägäis</b> und <b>Schwarzes Meer</b>. Ihre Nordgrenze legt man meist entlang der Flüsse Save und Donau fest.</p>
<p>Der Name kommt vom <b>Balkangebirge</b> in Bulgarien: Auf Türkisch bedeutet <i>balkan</i> „Kette bewaldeter Berge“. Die Halbinsel ist tatsächlich sehr <b>gebirgig</b>:</p>
<ul>
<li>entlang der Adria verlaufen die <b>Dinarischen Alpen</b>, Kalkgebirge, die steil zum Meer abfallen;</li>
<li>in der Mitte und im Osten das <b>Balkangebirge</b> und das <b>Rhodopengebirge</b>; der höchste Gipfel ist der <b>Musala</b> (2.925 m) in Bulgarien;</li>
<li>im Süden die Berge Griechenlands mit dem <b>Olymp</b> (2.918 m), dem „Haus der Götter“.</li>
</ul>
<p><b>Klima</b>: <b>mediterran</b> an den Küsten (heiße, trockene Sommer, milde, regnerische Winter), <b>kontinental</b> im Landesinneren, wo die Berge den Einfluss des Meeres abhalten. An der Adriaküste weht oft die <b>Bora</b>, ein kalter, heftiger Wind, der von den Bergen herabstürzt.</p>`
    },
    {
      type: `svg`,
      title: `Die Balkanhalbinsel und ihre Meere (Schema)`,
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#7dd3fc"/>
<polygon points="40,20 600,20 600,110 520,110 500,150 470,180 440,175 430,210 455,240 420,260 400,300 360,320 330,290 300,250 270,215 230,180 180,140 130,95 80,60 40,50" fill="#bef264" stroke="#3f6212" stroke-width="3"/>
<polygon points="350,328 410,322 420,336 345,338" fill="#bef264" stroke="#3f6212" stroke-width="2"/>
<text x="385" y="318" font-size="12" text-anchor="middle">Kreta</text>
<path d="M60 50 L200 160" stroke="#a16207" stroke-width="10" stroke-linecap="round" fill="none"/>
<text x="150" y="98" font-size="13" fill="#713f12" font-weight="bold" transform="rotate(38 150 98)">Dinarische Alpen</text>
<text x="400" y="80" font-size="14" text-anchor="middle" font-weight="bold" fill="#3f6212">Donau und Save (Nordgrenze)</text>
<path d="M120 40 C250 60 400 50 560 70" stroke="#2563eb" stroke-width="5" fill="none"/>
<text x="110" y="190" font-size="17" font-weight="bold" fill="#1e3a8a">Adria</text>
<text x="180" y="290" font-size="17" font-weight="bold" fill="#1e3a8a">Ionisches Meer</text>
<text x="500" y="250" font-size="17" font-weight="bold" fill="#1e3a8a">Ägäis</text>
<text x="555" y="140" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Schwarzes Meer</text>
<text x="330" y="150" font-size="18" text-anchor="middle" font-weight="bold" fill="#365314">BALKAN</text>
<text x="340" y="250" font-size="14" text-anchor="middle" fill="#365314">Griechenland</text>
<text x="495" y="182" font-size="12" fill="#7f1d1d">Bosporus</text>
</svg>`,
      caption: `Vereinfachtes Schema, nicht maßstabsgetreu. Die Berge nahe der Adria trennen die Küste vom Landesinneren: Deshalb sind die Klimata so verschieden.`
    },
    {
      type: `3d`,
      title: `Die Landschaften des östlichen Mittelmeers in 3D`,
      scene: `terrain`,
      caption: `Dreh und tippe die Teile an: Jedes hat ein echtes Beispiel in Griechenland oder auf dem Balkan.`,
      options: {
        features: {
          peninsula: { label: `Halbinsel`, html: `Der <b>Peloponnes</b> im Süden Griechenlands und die <b>Balkanhalbinsel</b> selbst. Auch <b>Istrien</b> (Kroatien und Slowenien) ist eine Halbinsel.` },
          isthmus: { label: `Landenge`, html: `Die <b>Landenge von Korinth</b> verband den Peloponnes mit dem Rest Griechenlands; 1893 wurde sie von einem Kanal durchschnitten, der nur gut 20 m breit und 6,4 km lang ist.` },
          island: { label: `Insel`, html: `<b>Kreta</b> ist die größte Insel Griechenlands (etwa 8.300 km²) und war der Sitz der antiken minoischen Kultur.` },
          archipelago: { label: `Inselgruppe`, html: `Die <b>Kykladen</b> in Griechenland und die Inseln <b>Dalmatiens</b> in Kroatien: Hunderte von Inseln und Felsen.` },
          strait: { label: `Meerenge`, html: `Der <b>Bosporus</b> und die <b>Dardanellen</b> verbinden das Schwarze Meer mit der Ägäis; die <b>Straße von Otranto</b> trennt Italien von Albanien (etwa 72 km).` },
          gulf: { label: `Golf`, html: `Der <b>Golf von Korinth</b> trennt den Peloponnes fast vollständig vom griechischen Festland.` },
          bay: { label: `Bucht`, html: `Die <b>Bucht von Kotor</b> in Montenegro: eine tiefe, gewundene Meeresbucht zwischen steilen Bergen, die wie ein Fjord aussieht.` },
          mountain: { label: `Gebirge`, html: `Die <b>Dinarischen Alpen</b> aus Kalkstein verlaufen entlang der gesamten Adriaküste von Slowenien bis Albanien.` },
          peak: { label: `Gipfel`, html: `Der <b>Olymp</b> (2.918 m), der höchste Berg Griechenlands, wo nach den Mythen Zeus und die anderen Götter wohnten.` },
          volcano: { label: `Vulkan`, html: `<b>Santorin</b> ist, was von einem Vulkan übrig ist, der vor etwa 3.600 Jahren explodierte: Seine Caldera ist heute eine von Klippen umgebene Meereslagune.` },
          lake: { label: `See`, html: `Der <b>Ohridsee</b> zwischen Nordmazedonien und Albanien ist einer der ältesten Seen Europas (über eine Million Jahre). In Kroatien liegen die 16 <b>Plitvicer Seen</b>, die durch Wasserfälle verbunden sind.` },
          beach: { label: `Strand`, html: `Die Strände Griechenlands und Kroatiens ziehen jedes Jahr Dutzende Millionen Touristen an, darunter sehr viele Italiener.` },
          coast: { label: `Küste`, html: `Die Küste <b>Griechenlands</b> ist mit den Inseln etwa 13.700 km lang: eine der längsten Europas.` }
        }
      }
    },
    {
      type: `text`,
      title: `2. Griechenland`,
      html: `<p><b>Hauptstadt</b>: Athen · <b>Einwohner</b>: etwa 10,4 Millionen · <b>Fläche</b>: etwa 132.000 km² · <b>Regierungsform</b>: parlamentarische Republik · <b>EU</b> seit 1981, Euro seit 2001.</p>
<ul>
<li>Etwa <b>80 %</b> des Landes sind gebirgig; der Rest besteht aus kleinen Küstenebenen und <b>Inseln</b>: etwa 6.000 Inseln und Inselchen, von denen gut 200 bewohnt sind (Kreta, Euböa, Rhodos, Korfu, die Kykladen …).</li>
<li>Kein Punkt Griechenlands ist weiter als etwa 140 km vom Meer entfernt. Deshalb waren die Griechen immer ein Volk von Seefahrern: Heute besitzen griechische Reeder die <b>größte Handelsflotte der Welt</b>.</li>
<li><b>Wirtschaft</b>: Tourismus (etwa 3 Touristen pro Einwohner und Jahr), Seeverkehr, Landwirtschaft (Oliven und Olivenöl, Trauben, Zitrusfrüchte, Baumwolle), Feta-Käse.</li>
<li>Das antike Griechenland hat uns die <b>Demokratie</b>, die Philosophie, das Theater, die Olympischen Spiele und Tausende von Wörtern hinterlassen. Berühmte Bauwerke: die <b>Akropolis</b> von Athen mit dem Parthenon, Delphi, Olympia, der Palast von Knossos auf Kreta.</li>
<li>Es ist eine der <b>erdbebenreichsten</b> Gegenden Europas: Dort schiebt sich die Afrikanische Platte unter die Eurasische.</li>
</ul>`
    },
    {
      type: `text`,
      title: `3. Kroatien und Slowenien`,
      html: `<p><b>Kroatien</b> – Hauptstadt: <b>Zagreb</b> · etwa 3,8 Millionen Einwohner · etwa 56.600 km² · parlamentarische Republik.</p>
<ul>
<li>Es hat eine eigenartige „Halbmondform“: einen flachen Festlandteil im Norden (zur Donau hin) und einen langen Küstenstreifen, <b>Dalmatien</b>, dazu <b>Istrien</b>.</li>
<li>Vor der Küste liegen mehr als <b>1.200</b> Inseln, Inselchen und Felsen (die größten sind Krk und Cres).</li>
<li>Historische Städte: <b>Dubrovnik</b> (die antike Republik Ragusa), <b>Split</b> (im Palast des römischen Kaisers Diokletian gebaut), Pula mit seiner römischen Arena. In Istrien lebt eine italienischsprachige Minderheit.</li>
<li>Seit <b>2013</b> in der EU; seit dem 1. Januar <b>2023</b> verwendet es den <b>Euro</b> und gehört zum Schengen-Raum. Wirtschaft: Tourismus, Schiffbau, Landwirtschaft.</li>
</ul>
<p><b>Slowenien</b> – Hauptstadt: <b>Ljubljana</b> · etwa 2,1 Millionen Einwohner · etwa 20.300 km². Es grenzt an Italien (Friaul-Julisch Venetien); es hat einen kleinen Küstenabschnitt (Koper, Piran). Höchster Gipfel: der <b>Triglav</b> (2.864 m). Berühmt ist es für die Höhlen des <b>Karstes</b>, etwa die von Postojna. In der EU seit 2004, Euro seit 2007.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Griechenland und Kroatien`,
      questions: [
        { type: `mc`, q: `Welche ist die größte Insel Griechenlands?`, options: [`Rhodos`, `Kreta`, `Korfu`], answer: 1, explain: `Kreta, etwa 8.300 km².` },
        { type: `text`, q: `Wie heißt die Hauptstadt Kroatiens?`, answer: [`zagreb`, `zagabria`], explain: `Zagreb.` },
        { type: `tf`, q: `Kroatien verwendet seit 2023 den Euro.`, answer: true, explain: `Seit dem 1. Januar 2023, als es auch dem Schengen-Raum beitrat.` }
      ]
    },
    {
      type: `text`,
      title: `4. Die übrigen Staaten des Balkans`,
      html: `<p>Von 1918 bis 1991 bildete ein großer Teil des westlichen Balkans einen einzigen Staat, <b>Jugoslawien</b> („Land der Südslawen“). Nach dem Tod von Marschall Tito (1980) wuchsen die Spannungen zwischen den verschiedenen Völkern; zwischen <b>1991</b> und 2001 zerfiel Jugoslawien in einer Reihe sehr blutiger <b>Kriege</b>. Der schlimmste war in <b>Bosnien und Herzegowina</b> (1992–95) mit der Belagerung von Sarajevo und dem Völkermord von <b>Srebrenica</b> (Juli 1995), bei dem etwa 8.000 muslimische bosnische Männer und Jungen getötet wurden. Heute sind diese Orte Gedenkstätten, und die Region arbeitet an der Versöhnung.</p>
<table>
<tr><th>Staat</th><th>Hauptstadt</th><th>Wissenswertes</th></tr>
<tr><td><b>Bosnien und Herzegowina</b></td><td>Sarajevo</td><td>Die Brücke von Mostar (1566), 1993 zerstört und 2004 wiederaufgebaut. In Sarajevo fand 1914 das Attentat statt, das den Ersten Weltkrieg auslöste.</td></tr>
<tr><td><b>Serbien</b></td><td>Belgrad</td><td>Belgrad liegt dort, wo die Save in die Donau mündet. Man verwendet sowohl die kyrillische als auch die lateinische Schrift.</td></tr>
<tr><td><b>Montenegro</b></td><td>Podgorica</td><td>Verwendet den Euro, obwohl es nicht in der EU ist. Bucht von Kotor.</td></tr>
<tr><td><b>Albanien</b></td><td>Tirana</td><td>Das Albanische ist eine indoeuropäische Sprache ohne „Schwestern“. In Italien leben seit Jahrhunderten Gemeinschaften albanischer Herkunft, die Arbëreshë.</td></tr>
<tr><td><b>Nordmazedonien</b></td><td>Skopje</td><td>Ohridsee; hat 2019 seinen Namen geändert.</td></tr>
<tr><td><b>Kosovo</b></td><td>Pristina</td><td>Hat 2008 die Unabhängigkeit erklärt; Serbien und mehrere andere Staaten erkennen sie nicht an.</td></tr>
<tr><td><b>Bulgarien</b></td><td>Sofia</td><td>In der EU seit 2007, im Euro seit 2026. Berühmt für Rosenöl.</td></tr>
</table>
<p>Albanien, Bosnien und Herzegowina, Nordmazedonien, Montenegro und Serbien sind <b>Beitrittskandidaten</b> der EU. Im Mittelmeer gehören auch zwei Inselstaaten zur EU: <b>Malta</b> (der kleinste Staat der EU) und <b>Zypern</b>.</p>`
    },
    {
      type: `widget`,
      title: `Ordne Land und Hauptstadt zu`,
      widget: `match`,
      options: {
        pairs: [
          [`🇬🇷 Griechenland`, `Athen`],
          [`🇭🇷 Kroatien`, `Zagreb`],
          [`🇸🇮 Slowenien`, `Ljubljana`],
          [`🇧🇦 Bosnien und Herzegowina`, `Sarajevo`],
          [`🇷🇸 Serbien`, `Belgrad`],
          [`🇦🇱 Albanien`, `Tirana`],
          [`🇧🇬 Bulgarien`, `Sofia`],
          [`🇲🇰 Nordmazedonien`, `Skopje`]
        ]
      },
      caption: `Acht Staaten, acht Hauptstädte: Einige liegen in der Luftlinie ganz nah an Italien (Tirana ist etwa 200 km von Apulien entfernt).`
    },
    {
      type: `widget`,
      title: `In der EU oder Beitrittskandidat?`,
      widget: `classify`,
      options: {
        groups: [`EU-Mitglied`, `Beitrittskandidat`],
        items: [
          [`🇬🇷 Griechenland`, 0],
          [`🇭🇷 Kroatien`, 0],
          [`🇸🇮 Slowenien`, 0],
          [`🇧🇬 Bulgarien`, 0],
          [`🇲🇹 Malta`, 0],
          [`🇨🇾 Zypern`, 0],
          [`🇦🇱 Albanien`, 1],
          [`🇷🇸 Serbien`, 1],
          [`🇲🇪 Montenegro`, 1],
          [`🇲🇰 Nordmazedonien`, 1],
          [`🇧🇦 Bosnien und Herzegowina`, 1]
        ]
      },
      caption: `Um der EU beizutreten, muss ein Land Demokratie, Menschenrechte und Rechtsstaatlichkeit achten und Tausende von Gesetzen anpassen.`
    },
    {
      type: `svg`,
      title: `Die Verkarstung: Wasser höhlt das Gestein aus`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<rect x="0" y="90" width="600" height="230" fill="#d6d3d1"/>
<path d="M0 90 L150 90 Q190 135 230 90 L600 90" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<text x="190" y="80" font-size="15" text-anchor="middle" font-weight="bold">Doline</text>
<line x1="80" y1="20" x2="70" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="110" y1="20" x2="100" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="140" y1="20" x2="130" y2="55" stroke="#2563eb" stroke-width="3"/>
<text x="110" y="15" font-size="14" text-anchor="middle" fill="#1d4ed8">Regen (mit CO₂)</text>
<path d="M190 120 L200 170 L230 200" stroke="#2563eb" stroke-width="5" fill="none"/>
<ellipse cx="350" cy="225" rx="170" ry="55" fill="#57534e"/>
<polygon points="250,180 258,210 266,180" fill="#e7e5e4"/>
<polygon points="300,172 308,215 316,172" fill="#e7e5e4"/>
<polygon points="400,175 408,205 416,175" fill="#e7e5e4"/>
<polygon points="440,272 448,240 456,272" fill="#e7e5e4"/>
<polygon points="330,278 338,250 346,278" fill="#e7e5e4"/>
<path d="M190 255 Q350 285 520 250" stroke="#3b82f6" stroke-width="7" fill="none"/>
<text x="350" y="230" font-size="16" text-anchor="middle" font-weight="bold" fill="#ffffff">HÖHLE</text>
<text x="545" y="190" font-size="13" text-anchor="middle">Stalaktiten</text>
<text x="545" y="206" font-size="13" text-anchor="middle">(von oben)</text>
<text x="545" y="290" font-size="13" text-anchor="middle">Stalagmiten (von unten)</text>
<text x="200" y="305" font-size="13" text-anchor="middle" fill="#1d4ed8">unterirdischer Fluss</text>
<text x="450" y="120" font-size="15" text-anchor="middle" fill="#44403c">Kalkgestein</text>
</svg>`,
      caption: `Das leicht saure Regenwasser löst den Kalk: An der Oberfläche entstehen Mulden (Dolinen), unter der Erde Höhlen und Flüsse. Das Phänomen ist nach dem Karst zwischen Italien und Slowenien benannt.`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: Mit der Fähre von Italien auf den Balkan`,
      html: `<p>Von den Adriahäfen fahren jeden Tag Fähren zum anderen Ufer:</p>
<table>
<tr><th>Abfahrt</th><th>Ankunft</th><th>Ungefähre Dauer</th></tr>
<tr><td>Ancona</td><td>Split (Kroatien)</td><td>etwa 10–11 Stunden (über Nacht)</td></tr>
<tr><td>Bari</td><td>Durrës (Albanien)</td><td>etwa 9 Stunden</td></tr>
<tr><td>Brindisi</td><td>Igoumenitsa (Griechenland)</td><td>etwa 8 Stunden</td></tr>
<tr><td>Ancona / Bari</td><td>Patras (Griechenland)</td><td>etwa 16–22 Stunden</td></tr>
</table>
<p>Miss auf einer Karte mit dem Lineal die Entfernung Bari–Durrës: etwa 200 km in der Luftlinie. Wenn die Fähre mit etwa 22 Knoten (etwa 40 km/h) fährt, wie viele Stunden braucht sie theoretisch? (200 : 40 = 5 Stunden: Die restliche Zeit geht für Manöver, Beladen und eine niedrigere Durchschnittsgeschwindigkeit drauf.)</p>`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: Du sprichst Griechisch, ohne es zu wissen!`,
      html: `<p>Sehr viele deutsche Wörter, vor allem wissenschaftliche, stammen aus dem Altgriechischen. Versuch, sie zu zerlegen:</p>
<ul>
<li><b>Geo-grafie</b> = Erde + Schrift (Beschreibung der Erde);</li>
<li><b>Demo-kratie</b> = Volk + Herrschaft;</li>
<li><b>Archipel</b> = Hauptmeer (so hieß die Ägäis, die voller Inseln ist);</li>
<li><b>Tele-fon</b> = fern + Stimme;</li>
<li><b>Mittelmeer</b> dagegen geht auf das Lateinische zurück: <i>Mediterraneum</i>, „inmitten der Länder“.</li>
</ul>
<p>Übe mit den Karten unten.</p>`
    },
    {
      type: `widget`,
      title: `Lernkarten: griechische Wörter im Deutschen`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `🌍 geo-`, back: `Erde (Geografie, Geologie)` },
          { front: `👥 demo-`, back: `Volk (Demokratie, Demografie)` },
          { front: `📞 tele-`, back: `fern (Telefon, Television)` },
          { front: `🏙️ polis`, back: `Stadt (Metropole, Politik)` },
          { front: `📖 -logie`, back: `Lehre, Rede (Biologie, Zoologie)` },
          { front: `🔊 phonè`, back: `Stimme, Klang (Telefon, Mikrofon)` },
          { front: `🌊 pelagos`, back: `Meer (Archipel, pelagisch)` }
        ]
      },
      caption: `Dreh die Karten um: Errate die Bedeutung, bevor du auf die Rückseite schaust.`
    },
    {
      type: `curiosity`,
      title: `Wusstest du, dass die Krawatte aus Kroatien kommt?`,
      html: `<p>Im 17. Jahrhundert trugen kroatische Soldaten im Dienst des französischen Königs ein geknotetes Tuch um den Hals. Den Pariserinnen und Parisern gefiel es sehr, und sie nannten es <i>à la croate</i>, „nach kroatischer Art“: daher das Wort <b>Krawatte</b>. Am 18. Oktober feiert man in Kroatien den Tag der Krawatte. Und der Dalmatiner, der weiß-schwarz gefleckte Hund, trägt seinen Namen von Dalmatien!</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du, dass man in Bulgarien „Ja“ und „Nein“ andersherum zeigt?`,
      html: `<p>In Bulgarien (und teilweise in Albanien und Nordmazedonien) <b>schüttelt</b> man traditionell den Kopf von rechts nach links, um <b>Ja</b> zu sagen, und nickt auf und ab, um <b>Nein</b> zu sagen. Viele Bulgaren benutzen heute auch die „internationalen“ Gesten, also … lieber mit Worten nachfragen! Und das kyrillische Alphabet hat sich genau in den Schulen des ersten bulgarischen Reiches entwickelt, im 9.–10. Jahrhundert.</p>`
    },
    {
      type: `decision`,
      title: `2018: Griechenland und Mazedonien, ein Streit um einen Namen`,
      html: `<p>Seit 1991 heißt ein kleiner Balkanstaat „Republik Mazedonien“. Aber <b>Makedonien</b> ist auch der Name einer großen Region Griechenlands, des Landes Alexanders des Großen. Griechenland fürchtet Ansprüche auf sein Gebiet und seine Geschichte und blockiert deshalb den Beitritt des Nachbarn zur NATO und die Verhandlungen mit der EU. Du bist einer der Verhandler.</p>`,
      question: `Welche Lösung schlägst du vor?`,
      options: [
        { label: `Der Nachbarstaat muss ganz auf das Wort „Mazedonien“ verzichten.`, outcome: `Für seine Einwohner, die sich seit Generationen Mazedonier nennen und Mazedonisch sprechen, wäre das unannehmbar: Keine Regierung könnte das unterschreiben.` },
        { label: `Ein Name mit einem geografischen Zusatz, der ihn von der griechischen Region unterscheidet, dazu gegenseitige Garantien.`, outcome: `Beide Seiten müssen auf etwas verzichten, und die Nationalisten in beiden Ländern werden protestieren. Aber ein Streit, der seit 27 Jahren dauert, wird gelöst.` },
        { label: `Wir lassen alles, wie es ist.`, outcome: `Die Blockade würde weitergehen: keine NATO, keine EU, angespannte Beziehungen zwischen Nachbarn.` }
      ],
      answer: 1,
      explain: `Mit dem <b>Prespa-Abkommen</b> (Juni 2018, benannt nach dem See an der Grenze der beiden Länder) nahm Griechenlands Nachbar den Namen <b>Republik Nordmazedonien</b> an (in Kraft seit 2019) und stellte klar, keine Verbindung zum antiken Makedonien Alexanders des Großen zu haben; Griechenland hob sein Veto auf. 2020 trat Nordmazedonien der NATO bei. Die beiden Ministerpräsidenten erhielten mehrere internationale Auszeichnungen: Das ist ein Beispiel dafür, wie Diplomatie Konflikte um Geografie und Identität lösen kann.`
    },
    {
      type: `alternatives`,
      title: `Weitere Wege, den Balkan zu verstehen`,
      intro: `Eine komplexe Region: Hier sind weitere Schlüssel, sie zu verstehen.`,
      tabs: [
        {
          label: `🧩 Jugoslawien als Mosaik`,
          html: `<p>Stell dir ein Mosaik aus verschiedenfarbigen Steinchen vor, die von einem Rahmen zusammengehalten werden. Die Steinchen waren die Völker (Slowenen, Kroaten, Serben, Bosniaken, Montenegriner, Mazedonier, Kosovo-Albaner …) mit verschiedenen Sprachen, Religionen (katholisch, orthodox, muslimisch) und Geschichten. Der Rahmen war der jugoslawische Staat unter Tito. Als der Rahmen zerbrach, lösten sich die Steinchen voneinander, leider mit viel Gewalt.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f8fafc"/>
<rect x="20" y="20" width="250" height="160" fill="none" stroke="#334155" stroke-width="6"/>
<rect x="30" y="30" width="70" height="60" fill="#60a5fa"/>
<rect x="100" y="30" width="80" height="60" fill="#f87171"/>
<rect x="180" y="30" width="80" height="60" fill="#fbbf24"/>
<rect x="30" y="90" width="80" height="80" fill="#34d399"/>
<rect x="110" y="90" width="70" height="80" fill="#a78bfa"/>
<rect x="180" y="90" width="80" height="80" fill="#f472b6"/>
<text x="145" y="198" font-size="14" text-anchor="middle">Jugoslawien (bis 1991)</text>
<text x="300" y="105" font-size="30" text-anchor="middle">→</text>
<rect x="340" y="25" width="60" height="50" fill="#60a5fa"/>
<rect x="420" y="20" width="65" height="50" fill="#f87171"/>
<rect x="505" y="30" width="65" height="50" fill="#fbbf24"/>
<rect x="345" y="105" width="65" height="60" fill="#34d399"/>
<rect x="430" y="110" width="60" height="60" fill="#a78bfa"/>
<rect x="510" y="115" width="60" height="55" fill="#f472b6"/>
<text x="455" y="198" font-size="14" text-anchor="middle">7 heutige Staaten (mit dem Kosovo)</text>
</svg>`
        },
        {
          label: `🍬 Verkarstung mit Zucker`,
          html: `<p>Mach ein Experiment: Baue aus <b>Würfelzucker</b> (er steht für den Kalkstein) einen kleinen Turm und träufle mit einer Pipette langsam ein paar Tropfen Wasser darauf. Du wirst sehen, dass das Wasser Kanäle und Löcher „gräbt“ und der Turm dort zerbröckelt, wo das Wasser durchläuft.</p>
<p>Kalkstein löst sich viel langsamer als Zucker (es braucht Tausende von Jahren), aber das Prinzip ist dasselbe: Regenwasser, durch Kohlendioxid leicht sauer geworden, löst das Gestein und bildet Dolinen, Höhlen und Flüsse, die unter der Erde verschwinden. Deshalb gibt es an der dalmatinischen Küste und im Karst nur wenige Flüsse an der Oberfläche.</p>`
        },
        {
          label: `🌍 Auf dem Globus`,
          html: `<p>Dreh den Globus und finde die Hauptstädte und berühmten Orte der Region. Sieh, wie nah sie an Italien liegen!</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 37.98, lon: 23.73, label: `Athen`, color: `#2563eb` },
              { lat: 45.81, lon: 15.98, label: `Zagreb`, color: `#ef4444` },
              { lat: 42.65, lon: 18.09, label: `Dubrovnik`, color: `#f97316` },
              { lat: 43.86, lon: 18.41, label: `Sarajevo`, color: `#eab308` },
              { lat: 44.82, lon: 20.46, label: `Belgrad`, color: `#a855f7` },
              { lat: 41.33, lon: 19.82, label: `Tirana`, color: `#dc2626` },
              { lat: 42.7, lon: 23.32, label: `Sofia`, color: `#16a34a` },
              { lat: 40.09, lon: 22.36, label: `Olymp`, color: `#64748b` },
              { lat: 36.4, lon: 25.43, label: `Santorin`, color: `#f97316` },
              { lat: 41.11, lon: 16.87, label: `Bari (Italien)`, color: `#0ea5e9` }
            ]
          }
        },
        {
          label: `📐 Vergleich mit Italien`,
          html: `<table>
<tr><th></th><th>Griechenland</th><th>Italien</th></tr>
<tr><td>Fläche</td><td>132.000 km²</td><td>302.000 km²</td></tr>
<tr><td>Einwohner</td><td>10,4 Millionen</td><td>59 Millionen</td></tr>
<tr><td>Inseln</td><td>etwa 6.000 (etwa 200 bewohnt)</td><td>etwa 800 (etwa 80 bewohnt)</td></tr>
<tr><td>Höchster Gipfel</td><td>Olymp 2.918 m</td><td>Montblanc 4.806 m</td></tr>
<tr><td>Berühmte aktive Vulkane</td><td>Santorin</td><td>Ätna, Vesuv, Stromboli</td></tr>
<tr><td>Küstenklima</td><td>mediterran</td><td>mediterran</td></tr>
</table>
<p>Griechenland und Italien sind zwei „Schwester“-Halbinseln: dasselbe Meer, dasselbe Klima, viele Erdbeben, eine lange gemeinsame Geschichte (Großgriechenland in Süditalien).</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Landkarte der Begriffe: Mittelmeereuropa und Balkan`,
      nodes: [
        { id: `placche`, label: `Plattenkollision`, x: 50, y: 6, color: `#7c3aed`, html: `Die Afrikanische Platte drückt gegen die Eurasische.`, why: `Diese sehr langsame Bewegung (wenige cm pro Jahr) hat die Berge der Region aufgefaltet und verursacht noch heute Erdbeben und Vulkane, wie in Griechenland und auf Santorin.` },
        { id: `montagne`, label: `Kalkgebirge`, x: 20, y: 25, color: `#a16207`, html: `Dinarische Alpen, Balkan, Pindos: Die Halbinsel ist größtenteils gebirgig.`, why: `Die Kalkgesteine bildeten sich auf dem Grund alter Meere aus Schalen und Skeletten von Meerestieren; dann hat die Plattenkollision sie angehoben.` },
        { id: `carsismo`, label: `Verkarstung`, x: 20, y: 55, color: `#57534e`, html: `Höhlen, Dolinen, unterirdische Flüsse.`, why: `Regenwasser, durch Kohlendioxid sauer geworden, löst den Kalkstein. Der Name kommt vom Karst (Kras) zwischen Triest und Slowenien, wo das Phänomen zum ersten Mal untersucht wurde.` },
        { id: `coste`, label: `Küsten und Inseln`, x: 80, y: 25, color: `#0ea5e9`, html: `Zerklüftete Küsten und Tausende von Inseln in Griechenland und Kroatien.`, why: `Am Ende der letzten Eiszeit stieg der Meeresspiegel um über 100 m und überflutete die Täler zwischen den Küstengebirgen: Die Gipfel, die aus dem Wasser ragten, wurden zu Inseln.` },
        { id: `clima`, label: `Mediterranes und kontinentales Klima`, x: 50, y: 40, color: `#eab308`, html: `Heiß und trocken an den Küsten, kalt im Winter im Landesinneren.`, why: `Die Berge parallel zur Küste halten den Einfluss des Meeres ab: Schon wenige Kilometer weiter ändert sich das Klima stark.` },
        { id: `turismo`, label: `Tourismus und Meer`, x: 80, y: 55, color: `#f97316`, html: `Tourismus, Schifffahrt und Fischerei sind grundlegende Tätigkeiten.`, why: `Klares Meer, sonniges Klima und historisches Erbe ziehen Dutzende Millionen Besucher an; die langen Küsten haben die Völker schon immer zur Seefahrt getrieben.` },
        { id: `popoli`, label: `Viele Völker und Religionen`, x: 50, y: 70, color: `#a855f7`, html: `Griechen, Südslawen, Albaner; Orthodoxe, Katholiken, Muslime.`, why: `Die Halbinsel war ein Kreuzungspunkt: Griechen, Römer, Byzantiner, Slawen (ab dem 6.–7. Jahrhundert), Venezianer, Osmanen (fast 500 Jahre lang) und Habsburger haben hier verschiedene Sprachen, Religionen und Kulturen hinterlassen.` },
        { id: `jugoslavia`, label: `Jugoslawien und Kriege`, x: 25, y: 90, color: `#7f1d1d`, html: `Ein gemeinsamer Staat (1918–1991), dann der Zerfall und die Kriege der 1990er-Jahre.`, why: `Nach dem Ende der großen Reiche wollte man die Südslawen vereinen; Wirtschaftskrise und Nationalismus der 1980er- und 1990er-Jahre führten zur gewaltsamen Teilung.` },
        { id: `ue`, label: `Auf dem Weg ins vereinte Europa`, x: 75, y: 90, color: `#1d4ed8`, html: `Griechenland, Slowenien, Kroatien, Bulgarien in der EU; weitere Staaten sind Kandidaten.`, why: `Der EU-Beitritt gilt als Garantie für Frieden, Demokratie und Entwicklung; er verlangt Reformen und die Lösung von Streitigkeiten unter Nachbarn, wie das Prespa-Abkommen zeigt.` }
      ],
      edges: [
        [`placche`, `montagne`, `heben die an`],
        [`montagne`, `carsismo`, `aus Kalkstein → `],
        [`placche`, `coste`, `mit steigendem Meer →`],
        [`montagne`, `clima`, `trennen Küste und Inland`],
        [`coste`, `turismo`, `ziehen den an`],
        [`montagne`, `popoli`, `abgeschiedene Täler`],
        [`popoli`, `jugoslavia`, `vereint und dann geteilt`],
        [`jugoslavia`, `ue`, `vom Krieg zur Integration`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: der Balkan`,
      questions: [
        { type: `mc`, q: `Woher kommt der Name „Balkan“?`, options: [`Von einem antiken König`, `Vom Balkangebirge: auf Türkisch „Kette bewaldeter Berge“`, `Von einem Fluss`], answer: 1, explain: `Das Balkangebirge liegt in Bulgarien.` },
        { type: `mc`, q: `Was verursacht die Verkarstung?`, options: [`Der Wind, der Gestein glättet`, `Wasser, das Kalkstein löst und dabei Höhlen und Dolinen bildet`, `Die Vulkane`], answer: 1, explain: `Sie ist nach dem Karst zwischen Italien und Slowenien benannt.` },
        { type: `text`, q: `Wie heißt die Hauptstadt Serbiens?`, answer: [`belgrad`, `beograd`, `belgrado`], explain: `Belgrad, am Zusammenfluss von Save und Donau.` }
      ]
    }
  ],
  glossary: [
    { t: `Balkanhalbinsel`, d: `Halbinsel in Südosteuropa zwischen Adria, Ionischem Meer, Ägäis und Schwarzem Meer.` },
    { t: `Dinarische Alpen`, d: `Kalkgebirge, das entlang der Ostküste der Adria verläuft.` },
    { t: `Verkarstung`, d: `Gesamtheit der Erscheinungen, die entstehen, wenn Wasser Kalkgestein löst (Höhlen, Dolinen, unterirdische Flüsse).` },
    { t: `Doline`, d: `Trichterförmige Mulde, die durch Verkarstung entsteht.` },
    { t: `Bora`, d: `Kalter, heftiger Wind, der aus Nordosten über die Adria weht.` },
    { t: `Landenge (Isthmus)`, d: `Schmaler Landstreifen, der zwei Länder verbindet und zwei Meere trennt, wie der von Korinth.` },
    { t: `Jugoslawien`, d: `Staat der Südslawen, der von 1918 bis 1991/92 bestand und dann in mehrere Staaten zerfiel.` },
    { t: `Caldera`, d: `Große Mulde, die entsteht, wenn ein Vulkan nach einem Ausbruch einstürzt, wie auf Santorin.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Welche Meere umspülen die Balkanhalbinsel?`, options: [`Adria, Ionisches Meer, Ägäis, Schwarzes Meer`, `Tyrrhenisches Meer, Ligurisches Meer, Ostsee`, `Nordsee und Atlantik`], answer: 0, explain: `Vier Meere: Adria, Ionisches Meer, Ägäis und Schwarzes Meer.` },
      { type: `text`, q: `Wie heißt die Hauptstadt Griechenlands?`, answer: [`athen`, `athina`, `atene`], explain: `Athen.` },
      { type: `mc`, q: `Welcher ist der höchste Berg Griechenlands?`, options: [`Olymp`, `Triglav`, `Musala`], answer: 0, explain: `Der Olymp, 2.918 m. Der Triglav liegt in Slowenien, der Musala in Bulgarien.` },
      { type: `tf`, q: `Griechenland hat Tausende von Inseln, aber nur gut 200 sind bewohnt.`, answer: true, explain: `Etwa 6.000 Inseln und Inselchen, gut 200 davon bewohnt.` },
      { type: `mc`, q: `Was verbindet der Kanal von Korinth?`, options: [`Das Schwarze Meer und die Ägäis`, `Den Golf von Korinth und die Ägäis, indem er die Landenge durchschneidet`, `Die Adria und das Ionische Meer`], answer: 1, explain: `Er wurde 1893 durch die Landenge von Korinth gegraben.` },
      { type: `num`, q: `In welchem Jahr ist Kroatien der Europäischen Union beigetreten?`, answer: 2013, explain: `Im Jahr 2013; seit 2023 verwendet es den Euro.` },
      { type: `mc`, q: `Welcher Staat verwendet den Euro, obwohl er nicht zur EU gehört?`, options: [`Montenegro`, `Serbien`, `Albanien`], answer: 0, explain: `Montenegro hat ihn einseitig eingeführt.` },
      { type: `order`, q: `Bring die Ereignisse in die zeitliche Reihenfolge.`, items: [`Attentat von Sarajevo`, `Gründung Jugoslawiens`, `Tod Titos`, `Beginn des Zerfalls Jugoslawiens`, `Kroatien in der EU`], explain: `1914, 1918, 1980, 1991, 2013.` },
      { type: `mc`, q: `Warum gibt es an der dalmatinischen Küste nur wenige Flüsse an der Oberfläche?`, options: [`Weil es nie regnet`, `Weil das Wasser wegen der Verkarstung unter der Erde fließt`, `Weil die Flüsse umgeleitet wurden`], answer: 1, explain: `Der Kalkstein wird vom Wasser gelöst, das versickert und unterirdische Flüsse bildet.` },
      { type: `text`, q: `Wie heißt heute der Staat, der mit dem Prespa-Abkommen seinen Namen geändert hat? (… Mazedonien)`, answer: [`nord`, `nordmazedonien`, `nord-mazedonien`, `republik nordmazedonien`], explain: `Republik Nordmazedonien, seit 2019.` },
      { type: `tf`, q: `Das Klima im Landesinneren des Balkans ist dasselbe wie an der Küste.`, answer: false, explain: `An den Küsten ist es mediterran; im Landesinneren, von den Bergen abgeschirmt, ist es kontinental.` },
      { type: `mc`, q: `Welcher Staat ist der kleinste der Europäischen Union?`, options: [`Zypern`, `Malta`, `Slowenien`], answer: 1, explain: `Malta, etwa 316 km².` }
    ]
  }
});
