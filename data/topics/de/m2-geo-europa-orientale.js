TOPIC('de', {
  id: `m2-geo-europa-orientale`,
  title: `Osteuropa`,
  intro: `Im Osten weitet sich Europa zu einer riesigen Ebene, die bis zum <b>Uralgebirge</b> reicht. Hier liegen <b>Rumänien</b> und die <b>Republik Moldau</b>, wo man eine romanische Sprache spricht wie das Italienische, die <b>Ukraine</b>, die „Kornkammer Europas“, und der europäische Teil <b>Russlands</b>, des größten Staates der Welt. Es ist eine Region mit großen Flüssen, eisigen Wintern, sehr fruchtbaren Böden und einer Geschichte, die von Imperien, Regimen und Kriegen geprägt ist, auch von ganz aktuellen.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Eine endlose Ebene und ein „extremes“ Klima`,
      html: `<p>Den größten Teil Osteuropas nimmt die <b>Sarmatische</b> (oder Russische) <b>Ebene</b> ein, die größte Ebene Europas: Über Tausende Kilometer ist das Land fast flach, mit niedrigen Hügeln. Die wichtigsten Gebirge liegen am Rand:</p>
<ul>
<li>die <b>Karpaten</b>, ein großer Gebirgsbogen in Rumänien und der Westukraine;</li>
<li>der <b>Ural</b>, ein altes, niedriges Gebirge (höchstens etwa 1.900 m), das die Grenze zu Asien bildet;</li>
<li>der <b>Kaukasus</b> zwischen Schwarzem und Kaspischem Meer mit dem <b>Elbrus</b> (5.642 m).</li>
</ul>
<p>Weit weg vom Ozean ist das Klima <b>kontinental</b>: lange, sehr kalte Winter, heiße Sommer und ein großer Temperaturunterschied zwischen den Jahreszeiten. In <b>Moskau</b> liegt die Durchschnittstemperatur im Januar bei etwa -6 °C, doch oft sinkt sie unter -20 °C; im Juli beträgt der Durchschnitt etwa +19 °C.</p>
<p>Von Norden nach Süden ändert sich die Vegetation: <b>Tundra</b> (nahe dem Nordpolarmeer), <b>Taiga</b> (riesige Nadelwälder), <b>Mischwald</b>, <b>Steppe</b> (baumlose Grasländer mit sehr fruchtbaren Böden).</p>`
    },
    {
      type: `svg`,
      title: `Die Vegetationszonen von Nord nach Süd`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="55" fill="#e0f2fe"/>
<text x="20" y="34" font-size="16" font-weight="bold" fill="#0c4a6e">NORDEN · Nordpolarmeer</text>
<rect x="0" y="55" width="600" height="55" fill="#cbd5e1"/>
<text x="20" y="88" font-size="16" font-weight="bold" fill="#1e293b">TUNDRA: Moose, Flechten, gefrorener Boden</text>
<rect x="0" y="110" width="600" height="65" fill="#166534"/>
<text x="20" y="148" font-size="16" font-weight="bold" fill="#ffffff">TAIGA: Wälder aus Fichten, Kiefern, Lärchen</text>
<polygon points="470,170 485,120 500,170" fill="#14532d"/>
<polygon points="510,170 525,125 540,170" fill="#14532d"/>
<polygon points="550,170 565,118 580,170" fill="#14532d"/>
<rect x="0" y="175" width="600" height="55" fill="#4ade80"/>
<text x="20" y="208" font-size="16" font-weight="bold" fill="#14532d">MISCHWALD: Eichen, Birken, Ahorne</text>
<rect x="0" y="230" width="600" height="60" fill="#fde047"/>
<text x="20" y="265" font-size="16" font-weight="bold" fill="#713f12">STEPPE: Grasland und Weizenfelder auf „Schwarzerde“</text>
<rect x="0" y="290" width="600" height="30" fill="#60a5fa"/>
<text x="20" y="311" font-size="15" font-weight="bold" fill="#ffffff">SÜDEN · Schwarzes und Kaspisches Meer</text>
</svg>`,
      caption: `Je weiter man nach Süden kommt, desto wärmer wird es und desto länger dauert die gute Jahreszeit: Die Tundra weicht dem Wald und dann der Steppe.`
    },
    {
      type: `3d`,
      title: `Die Landschaften Osteuropas in 3D`,
      scene: `terrain`,
      caption: `Dreh die Landschaft und tippe jedes Element an.`,
      options: {
        features: {
          plain: { label: `Ebene`, html: `Die <b>Sarmatische Ebene</b> erstreckt sich von Polen bis zum Ural: die größte Ebene Europas.` },
          river: { label: `Fluss`, html: `Die <b>Wolga</b> (etwa 3.530 km) ist der längste Fluss Europas; der <b>Dnepr</b> (etwa 2.200 km) fließt durch die Ukraine und die Stadt Kiew.` },
          delta: { label: `Delta`, html: `Das <b>Donaudelta</b> in Rumänien und der Ukraine: Kanäle, Schilf und über 300 Vogelarten, darunter Pelikane. Es ist UNESCO-Biosphärenreservat.` },
          mountain: { label: `Gebirge`, html: `Die <b>Karpaten</b> bilden einen Bogen von etwa 1.500 km; in Rumänien erreicht der Moldoveanu 2.544 m. Hier leben Bären, Wölfe und Luchse.` },
          peak: { label: `Gipfel`, html: `Der <b>Elbrus</b> (5.642 m), ein erloschener Vulkan im russischen Kaukasus: Wenn man den Kaukasus zu Europa zählt, ist er der höchste Berg Europas.` },
          glacier: { label: `Gletscher`, html: `Die Gipfel des <b>Kaukasus</b> sind von großen Gletschern bedeckt.` },
          lake: { label: `See`, html: `Der <b>Ladogasee</b> bei Sankt Petersburg ist der größte See Europas (etwa 17.700 km²). Das Kaspische Meer an der Grenze zu Asien ist der größte See der Welt.` },
          sea: { label: `Meer`, html: `Das <b>Schwarze Meer</b> grenzt an Rumänien, die Ukraine und Russland; über die Meerengen Bosporus und Dardanellen ist es mit dem Mittelmeer verbunden.` },
          peninsula: { label: `Halbinsel`, html: `Die <b>Krim</b> im Schwarzen Meer ist eine Halbinsel, die durch eine schmale Landenge mit dem Festland verbunden ist.` },
          hill: { label: `Hügel`, html: `Die <b>Republik Moldau</b> ist ein Land sanfter Hügel voller Weinberge und Obstgärten: Der höchste Punkt liegt nur knapp über 400 m.` },
          lagoon: { label: `Lagune`, html: `Entlang der Küste des Schwarzen Meeres, an den Flussmündungen, liegen viele Lagunen (die <i>Limane</i>).` }
        }
      }
    },
    {
      type: `text`,
      title: `2. Rumänien`,
      html: `<p><b>Hauptstadt</b>: Bukarest · <b>Einwohner</b>: etwa 19 Millionen · <b>Fläche</b>: etwa 238.000 km² · <b>Regierungsform</b>: semipräsidentielle Republik · <b>Währung</b>: Rumänischer Leu.</p>
<ul>
<li>Das Land hat eine „kreisförmige“ Gestalt: in der Mitte das Hochland <b>Siebenbürgen</b>, ringsum der Bogen der <b>Karpaten</b>, dann Hügel und Ebenen, im Süden die <b>Donau</b> und im Osten das <b>Schwarze Meer</b> (Hafen Constanța).</li>
<li>Name und Sprache erinnern an <b>Rom</b>: Im Jahr 106 n. Chr. eroberte Kaiser <b>Trajan</b> Dakien, und die Region wurde romanisiert. Das <b>Rumänische</b> ist eine romanische Sprache, eine Schwester des Italienischen.</li>
<li>Rumänien gehört seit <b>2007 zur EU</b> und ist seit 2025 voll im Schengen-Raum.</li>
<li>Wirtschaft: Autoindustrie (Dacia), Informatik, Landwirtschaft (Mais, Weizen, Sonnenblumen), Erdöl und Erdgas, Tourismus.</li>
<li>In Italien lebt die größte ausländische Gemeinschaft aus Rumänien: etwa eine Million Menschen.</li>
</ul>`
    },
    {
      type: `text`,
      title: `3. Die Republik Moldau`,
      html: `<p><b>Hauptstadt</b>: Chișinău · <b>Einwohner</b>: etwa 2,4 Millionen · <b>Fläche</b>: etwa 33.800 km² (etwa ein Neuntel von Italien) · <b>Regierungsform</b>: parlamentarische Republik · <b>Währung</b>: Moldauischer Leu.</p>
<ul>
<li>Sie liegt eingeklemmt zwischen zwei Flüssen: dem <b>Pruth</b> im Westen (Grenze zu Rumänien) und dem <b>Dnister</b> im Osten. Einen Zugang zum Meer hat sie nicht.</li>
<li>Amtssprache ist <b>Rumänisch</b>. Viele Menschen sprechen auch Russisch; es gibt ukrainische, gagausische und bulgarische Minderheiten.</li>
<li>Das Land ist hügelig mit fruchtbaren Böden: Angebaut werden Weinreben, Obst, Sonnenblumen und Getreide. <b>Wein</b> ist eine sehr wichtige Tradition: Der Weinkeller von <b>Mileștii Mici</b> hat etwa 200 km unterirdische Gänge und steht im Guinness-Buch der Rekorde für die größte Weinsammlung der Welt (etwa 2 Millionen Flaschen).</li>
<li>Die Region <b>Transnistrien</b> östlich des Dnister hat sich Anfang der 1990er-Jahre faktisch abgespalten und wird von keinem UN-Mitgliedstaat anerkannt.</li>
<li>Seit <b>2022</b> ist die Republik Moldau <b>Beitrittskandidat</b> der Europäischen Union.</li>
</ul>`
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Rumänien und Moldau`,
      questions: [
        { type: `mc`, q: `Was für eine Sprache ist Rumänisch?`, options: [`Eine slawische`, `Eine romanische`, `Eine germanische`], answer: 1, explain: `Sie stammt wie das Italienische vom Lateinischen ab: Dakien war eine römische Provinz.` },
        { type: `text`, q: `Wie heißt die Hauptstadt der Republik Moldau?`, answer: [`chisinau`, `chișinău`, `chisinău`, `kischinau`, `kischinjow`, `kishinev`], explain: `Chișinău (deutsch: Kischinau).` },
        { type: `tf`, q: `Die Republik Moldau hat einen Zugang zum Schwarzen Meer.`, answer: false, explain: `Sie ist ein Binnenstaat zwischen Rumänien und der Ukraine.` }
      ]
    },
    {
      type: `text`,
      title: `4. Die Ukraine`,
      html: `<p><b>Hauptstadt</b>: Kiew (ukrainisch Kyjiw) · <b>Fläche</b>: etwa 603.500 km², der größte Staat, der ganz in Europa liegt · <b>Einwohner</b>: etwa 41 Millionen vor 2022; heute ist die Zahl wegen des Krieges unsicher · <b>Währung</b>: Hrywnja.</p>
<ul>
<li>Sie ist fast völlig flach und wird vom <b>Dnepr</b> durchflossen. Im Westen liegen die Karpaten (Howerla, 2.061 m), im Süden das Schwarze und das Asowsche Meer.</li>
<li>Ein großer Teil des Bodens ist <b>Tschernosem</b>, die „Schwarzerde“, einer der fruchtbarsten Böden der Welt, sehr reich an Humus. Deshalb nennt man die Ukraine die <b>„Kornkammer Europas“</b>: Sie gehört zu den größten Exporteuren von Weizen, Mais und <b>Sonnenblumenöl</b>.</li>
<li>Die Sprache ist das <b>Ukrainische</b>, eine slawische Sprache, die in kyrillischer Schrift geschrieben wird.</li>
<li>Jüngere Geschichte: Seit dem <b>24. August 1991</b> ist das Land von der UdSSR unabhängig. 1986 ereignete sich hier die Atomkatastrophe von <b>Tschornobyl</b>. 2014 hat Russland die Krim besetzt und annektiert, eine Annexion, die die UN-Generalversammlung nicht anerkannt hat. Seit dem <b>24. Februar 2022</b> führt Russland einen <b>groß angelegten Angriffskrieg</b> gegen die Ukraine, den die UN-Generalversammlung verurteilt hat: Der Krieg hat sehr viele Opfer, Zerstörung und Millionen Flüchtlinge gefordert, von denen viele auch in Italien aufgenommen wurden.</li>
</ul>
<p><i>Hinweis: Solange ein Krieg andauert, ändern sich kontrollierte Grenzen und Bevölkerungszahlen: Für aktuelle Zahlen such in neuen, verlässlichen Quellen.</i></p>`
    },
    {
      type: `text`,
      title: `5. Das europäische Russland`,
      html: `<p><b>Russland</b> ist der größte Staat der Welt: etwa <b>17,1 Millionen km²</b> (über 56-mal Italien), mit 11 Zeitzonen und etwa 146 Millionen Einwohnern. Es ist eine <b>Föderation</b>; die Hauptstadt ist <b>Moskau</b>.</p>
<p>Der Ural teilt das Land in zwei Teile: Der <b>asiatische</b> Teil (Sibirien) ist riesig, aber dünn besiedelt; der <b>europäische</b> Teil macht etwa ein Viertel der Fläche aus, beherbergt aber etwa <b>drei Viertel</b> der Bevölkerung, die wichtigsten Städte (Moskau, <b>Sankt Petersburg</b>, Nischni Nowgorod, Kasan) und die meisten Industriebetriebe.</p>
<ul>
<li><b>Die Wolga</b>, der längste Fluss Europas, entspringt in der Nähe von Moskau und mündet ins <b>Kaspische Meer</b>; durch Kanäle und Staudämme ist sie mit fünf Meeren verbunden.</li>
<li>Im Norden bleibt der Hafen <b>Murmansk</b> jenseits des Polarkreises dank des warmen Wassers des Nordatlantikstroms das ganze Jahr eisfrei.</li>
<li><b>Wirtschaft</b>: Erdöl und Erdgas (einer der größten Produzenten der Welt), Metalle, Getreide, Waffen; viele Rohstoffe stammen aus Sibirien.</li>
<li>Zu den Nachbarn gehören <b>Belarus</b> (Hauptstadt Minsk) und im Nordwesten die drei <b>baltischen Staaten</b> (Estland, Lettland, Litauen), die seit 1991 unabhängig und seit 2004 in der EU sind.</li>
</ul>`
    },
    {
      type: `widget`,
      title: `Von welchem Land ist die Rede?`,
      widget: `classify`,
      options: {
        groups: [`Rumänien`, `Republik Moldau`, `Ukraine`, `Russland`],
        items: [
          [`🏰 Siebenbürgen`, 0],
          [`🚗 Dacia-Autos`, 0],
          [`⚓ Hafen Constanța`, 0],
          [`🍇 Weinkeller von Mileștii Mici`, 1],
          [`🌊 Zwischen Pruth und Dnister`, 1],
          [`🌻 Kornkammer Europas, Schwarzerde`, 2],
          [`🏙️ Kyjiw am Dnepr`, 2],
          [`☢️ Tschornobyl`, 2],
          [`🚂 Transsibirische Eisenbahn`, 3],
          [`🏛️ Sankt Petersburg`, 3],
          [`🌊 Wolga, die ins Kaspische Meer mündet`, 3]
        ]
      },
      caption: `Einige Elemente (Donau, Schwarzes Meer, Karpaten) gehören mehreren Ländern; hier haben wir die gewählt, die nur zu einem Land gehören.`
    },
    {
      type: `widget`,
      title: `Ordne Land und Hauptstadt zu`,
      widget: `match`,
      options: {
        pairs: [
          [`🇷🇴 Rumänien`, `Bukarest`],
          [`🇲🇩 Republik Moldau`, `Chișinău`],
          [`🇺🇦 Ukraine`, `Kiew (Kyjiw)`],
          [`🇷🇺 Russland`, `Moskau`],
          [`🇧🇾 Belarus`, `Minsk`],
          [`🇧🇬 Bulgarien`, `Sofia`]
        ]
      },
      caption: `Bulgarien am Schwarzen Meer wird oft zusammen mit dem Balkan behandelt.`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: die längste Zugreise`,
      html: `<p>Die <b>Transsibirische Eisenbahn</b> verbindet Moskau mit Wladiwostok am Pazifischen Ozean: <b>9.289 km</b>, die längste Bahnstrecke der Welt. Die Reise dauert etwa <b>7 Tage</b> und führt durch 8 Zeitzonen: In jeder Zone muss man die Uhr um eine Stunde umstellen.</p>
<p>Rechne: Wenn du um 12:00 Uhr in Moskau losfährst und der Zug immer nach Osten führe, wie viele Stunden müsstest du bei der Ankunft in Wladiwostok dazuzählen? (+7 Stunden: Zwischen Moskau und Wladiwostok liegen 7 Stunden Zeitunterschied.) Gerade das erste Stück, von Moskau bis zum Ural, durchquert das ganze europäische Russland: Ebenen, Birkenwälder, die Wolga.</p>`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: Osteuropa auf dem Teller`,
      html: `<p>Viele Produkte, die du jeden Tag benutzt, kommen von hier:</p>
<ul>
<li>das <b>Sonnenblumenöl</b> in Keksen und Chips: Die Ukraine war lange der größte Exporteur der Welt;</li>
<li>der <b>Weizen</b> für Brot und Nudeln: Russland und die Ukraine gehören zu den größten Exporteuren der Welt;</li>
<li>der <b>Mais</b> für das Tierfutter;</li>
<li>der moldauische und rumänische <b>Wein</b>, einer der ältesten Europas.</li>
</ul>
<p>Als der Krieg 2022 die ukrainischen Häfen am Schwarzen Meer monatelang blockierte, stiegen weltweit die Preise für Weizen und Sonnenblumenöl. Das ist ein Beispiel dafür, wie die Geografie einer fernen Region unseren Alltag berühren kann.</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du, dass das Kaspische Meer ein See ist?`,
      html: `<p>Das <b>Kaspische Meer</b> an der Grenze zwischen Europa und Asien ist der <b>größte See der Welt</b>: etwa 371.000 km², größer als Italien! Es heißt „Meer“, weil sein Wasser leicht salzig ist. Seine Oberfläche liegt etwa <b>28 Meter unter dem Meeresspiegel</b>. Hier leben Störe, aus deren Eiern Kaviar gewonnen wird.</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du, dass in Tschornobyl heute Wölfe und Wildpferde leben?`,
      html: `<p>Nach der Explosion des Reaktors 1986 wurde rund um das Kraftwerk eine <b>Sperrzone</b> mit etwa 30 km Radius eingerichtet, und über 100.000 Menschen wurden evakuiert. Ohne Menschen hat sich die Natur den Raum zurückgeholt: Heute leben dort Wölfe, Elche, Luchse und sogar Przewalski-Pferde, die in den 1990er-Jahren dort ausgesetzt wurden. Doch die Radioaktivität bleibt in manchen Gebieten für den Menschen gefährlich.</p>`
    },
    {
      type: `decision`,
      title: `1703: Du bist Zar Peter der Große`,
      html: `<p>Russland ist riesig, aber fast abgeschlossen: Das Schwarze Meer wird vom Osmanischen Reich kontrolliert, die Häfen am Nordpolarmeer sind viele Monate lang zugefroren, und die Hauptstadt Moskau liegt sehr weit vom Meer entfernt. Du willst das Land modernisieren und mit Westeuropa Handel treiben lassen. Gerade hast du den Schweden einen sumpfigen Küstenstreifen an der Mündung der Newa an der Ostsee abgenommen.</p>`,
      question: `Was tust du?`,
      options: [
        { label: `Ich bleibe in Moskau: Es ist das historische und religiöse Herz Russlands.`, outcome: `Moskau ist sicher, liegt aber Hunderte Kilometer vom Meer entfernt: Der Handel mit Europa bleibt langsam und schwierig.` },
        { label: `Ich baue an der Newa eine neue Stadt mit Hafen und mache sie zur Hauptstadt.`, outcome: `Die Sümpfe machen die Arbeiten sehr hart, das Klima ist kalt und feucht, und die Schweden könnten zurückkehren. Aber Russland hätte ein „Fenster nach Europa“.` },
        { label: `Ich setze alles auf die Arktis, auf das Weiße Meer.`, outcome: `Der Hafen Archangelsk gab es schon, aber er ist etwa sechs Monate im Jahr zugefroren und liegt sehr weit von Mitteleuropa entfernt.` }
      ],
      answer: 1,
      explain: `1703 gründete Peter der Große <b>Sankt Petersburg</b> und machte es 1712 zur Hauptstadt. Zehntausende Arbeiter, oft Zwangsarbeiter, legten die Sümpfe trocken und bauten die Stadt auf Inseln und Kanälen; sehr viele starben dabei. Die Stadt wurde Russlands „Fenster nach Europa“ und blieb Hauptstadt bis 1918, als die Bolschewiki die Hauptstadt nach Moskau zurückverlegten. Heute ist sie mit über 5 Millionen Einwohnern die zweitgrößte Stadt Russlands und berühmt für die Eremitage und die Weißen Nächte im Sommer.`
    },
    {
      type: `alternatives`,
      title: `Weitere Wege, Osteuropa zu verstehen`,
      intro: `Andere Sprachen, Klimata und Entfernungen: Probier diese Zugänge aus.`,
      tabs: [
        {
          label: `🔤 Kyrillisch in 5 Minuten`,
          html: `<p>Ukrainisch, Russisch, Belarussisch und Bulgarisch werden mit dem <b>kyrillischen Alphabet</b> geschrieben, das im 9. Jahrhundert von den Missionaren Kyrill und Method (und ihren Schülern) entstand, vor allem auf der Grundlage des griechischen Alphabets. Manche Buchstaben sind „Freunde“, andere „Falschspieler“:</p>
<table>
<tr><th>Buchstabe</th><th>Laut</th><th>Achtung!</th></tr>
<tr><td>А, К, М, О, Т</td><td>a, k, m, o, t</td><td>wie im Deutschen</td></tr>
<tr><td>В</td><td>w</td><td>sieht aus wie ein B, ist aber ein W</td></tr>
<tr><td>Н</td><td>n</td><td>sieht aus wie ein H, ist aber ein N</td></tr>
<tr><td>Р</td><td>r</td><td>sieht aus wie ein P, ist aber ein R</td></tr>
<tr><td>С</td><td>s</td><td>sieht aus wie ein C, ist aber ein S</td></tr>
<tr><td>Д, Л, П</td><td>d, l, p</td><td>stammen von den griechischen Δ, Λ, Π</td></tr>
</table>
<p>Versuch zu lesen: <b>МОСКВА</b> (M-O-S-K-W-A = Moskwa, Moskau) und <b>КИЇВ</b> (Kyjiw).</p>`
        },
        {
          label: `🌡️ Warum ist es so kalt?`,
          html: `<p>Das Meer funktioniert wie eine <b>Heizung</b>, die sich im Sommer langsam erwärmt und im Winter langsam Wärme abgibt. Das Festland dagegen ist wie eine <b>Pfanne</b>: Es heizt sich schnell auf und kühlt schnell ab.</p>
<p>Westeuropa bekommt die feuchten, milden Winde vom Atlantik. Je weiter man nach Osten kommt, desto mehr „verbrauchen“ sich diese Winde, und die Pfanne gewinnt die Oberhand: heiße Sommer, eisige Winter. Hier sind die Januar-Durchschnittswerte auf ungefähr gleicher Breite (52–55° N):</p>
<table>
<tr><th>Stadt</th><th>Entfernung vom Atlantik</th><th>Durchschnitt im Januar</th></tr>
<tr><td>Dublin</td><td>am Ozean</td><td>etwa +5 °C</td></tr>
<tr><td>Berlin</td><td>mittel</td><td>etwa +1 °C</td></tr>
<tr><td>Moskau</td><td>sehr weit</td><td>etwa -6 °C</td></tr>
</table>`
        },
        {
          label: `🗣️ Rumänisch und Italienisch`,
          html: `<p>Rumänisch ist eng mit dem Italienischen verwandt: Viele Wörter versteht man auf Anhieb!</p>
<table>
<tr><th>Italienisch</th><th>Rumänisch</th></tr>
<tr><td>casa (Haus)</td><td>casă</td></tr>
<tr><td>lupo (Wolf)</td><td>lup</td></tr>
<tr><td>latte (Milch)</td><td>lapte</td></tr>
<tr><td>notte (Nacht)</td><td>noapte</td></tr>
<tr><td>scuola (Schule)</td><td>școală</td></tr>
<tr><td>grazie (danke)</td><td>mulțumesc</td></tr>
</table>
<p>Vorsicht, es gibt Überraschungen: „grazie“ (mulțumesc) kommt von einer anderen Wurzel, und der bestimmte Artikel wird <b>hinter</b> das Substantiv gesetzt: <i>lupul</i> = der Wolf, <i>casa</i> = das Haus. Wenn du rumänische oder moldauische Mitschüler hast, bitte sie, dir diese Wörter vorzulesen!</p>`
        },
        {
          label: `🌍 Auf dem Globus`,
          html: `<p>Dreh den Globus: Finde die Hauptstädte und folge der Transsibirischen Eisenbahn von Moskau bis zum Pazifik. Sieh, wie klein Europa im Vergleich zum asiatischen Russland ist!</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 44.43, lon: 26.1, label: `Bukarest`, color: `#2563eb` },
              { lat: 47.01, lon: 28.86, label: `Chișinău`, color: `#eab308` },
              { lat: 50.45, lon: 30.52, label: `Kiew (Kyjiw)`, color: `#0ea5e9` },
              { lat: 55.76, lon: 37.62, label: `Moskau`, color: `#ef4444` },
              { lat: 56.84, lon: 60.6, label: `Jekaterinburg (Ural)`, color: `#f97316` },
              { lat: 55.03, lon: 82.92, label: `Nowosibirsk`, color: `#f97316` },
              { lat: 52.29, lon: 104.3, label: `Irkutsk (Baikalsee)`, color: `#f97316` },
              { lat: 43.12, lon: 131.89, label: `Wladiwostok`, color: `#ef4444` }
            ],
            routes: [{ points: [3, 4, 5, 6, 7], color: `#dc2626` }]
          }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Landkarte der Begriffe: Osteuropa`,
      nodes: [
        { id: `pianura`, label: `Sarmatische Ebene`, x: 50, y: 6, color: `#65a30d`, html: `Die größte Ebene Europas, von Polen bis zum Ural.`, why: `Sie ist ein alter Sockel aus sehr stabilem Gestein (die „Russische Tafel“), von Ablagerungen bedeckt; die Gletscher der Eiszeiten haben sie noch weiter eingeebnet.` },
        { id: `clima`, label: `Kontinentalklima`, x: 18, y: 25, color: `#0ea5e9`, html: `Eisige Winter, heiße Sommer, große Temperaturunterschiede.`, why: `Die Entfernung vom Atlantik nimmt dem Meer seine ausgleichende Wirkung; und in der Ebene, ohne Gebirge als Barriere, strömt die kalte Arktisluft ungehindert nach Süden.` },
        { id: `fasce`, label: `Tundra, Taiga, Steppe`, x: 18, y: 55, color: `#166534`, html: `Vegetationszonen von Nord nach Süd.`, why: `Die Vegetation hängt vor allem von Temperatur und Niederschlag ab: Mit der geografischen Breite ändert sich, wie viel Licht und Wärme von der Sonne ankommt.` },
        { id: `terranera`, label: `Schwarzerde (Tschernosem)`, x: 50, y: 40, color: `#3f3f46`, html: `Sehr fruchtbarer Boden der Steppen in der Ukraine und im Süden Russlands.`, why: `Jahrtausendelang sind die Gräser der Steppe gewachsen und abgestorben und haben Humus angesammelt; die kalten Winter verlangsamen die Zersetzung, daher hat sich der Boden mit organischer Substanz angereichert.` },
        { id: `granaio`, label: `Kornkammer Europas`, x: 50, y: 70, color: `#eab308`, html: `Weizen, Mais, Sonnenblumen, die in die ganze Welt exportiert werden.`, why: `Schwarzerde + große Ebenen, die sich leicht mit Maschinen bewirtschaften lassen + Häfen am Schwarzen Meer = riesige landwirtschaftliche Erträge für den Export.` },
        { id: `fiumi`, label: `Große Flüsse`, x: 82, y: 25, color: `#2563eb`, html: `Wolga, Dnepr, Donau, Don.`, why: `In einer riesigen, kaum geneigten Ebene werden die Flüsse sehr lang und langsam: ideal für die Schifffahrt, so sehr, dass sie die ersten „Straßen“ des mittelalterlichen Russlands waren.` },
        { id: `lingue`, label: `Slawische und romanische Sprachen`, x: 82, y: 55, color: `#a855f7`, html: `Russisch, Ukrainisch, Belarussisch (slawisch, kyrillisch); Rumänisch (romanisch).`, why: `Die slawischen Völker breiteten sich im frühen Mittelalter in der Region aus; Dakien dagegen war eine römische Provinz (106–271 n. Chr.) und behielt eine lateinische Sprache, umgeben von slawischen Sprachen und dem Ungarischen.` },
        { id: `storia`, label: `Imperien und Unabhängigkeiten`, x: 82, y: 85, color: `#7f1d1d`, html: `Russisches Reich, UdSSR, dann Unabhängigkeit von Ukraine, Moldau, baltischen Staaten (1991); Krieg in der Ukraine seit 2014 und in großem Maßstab seit 2022.`, why: `Eine Ebene ohne natürliche Grenzen ist für Armeen leicht zu durchqueren: Jahrhundertelang haben verschiedene Imperien um diese Länder gekämpft. Der Zerfall der UdSSR 1991 schuf neue Staaten, mit Fragen zu Grenzen und Minderheiten, die noch offen sind.` },
        { id: `risorse`, label: `Erdöl und Erdgas`, x: 18, y: 85, color: `#f97316`, html: `Russland gehört zu den größten Produzenten der Welt.`, why: `Im Untergrund von Sibirien, Ural und Wolgaregion haben sich über Millionen von Jahren Überreste von Lebewesen angesammelt und in Kohlenwasserstoffe verwandelt. Gas- und Ölleitungen bringen sie nach Europa und Asien.` }
      ],
      edges: [
        [`pianura`, `clima`, `lässt Arktisluft durch`],
        [`clima`, `fasce`, `bestimmt die`],
        [`fasce`, `terranera`, `in der Steppe entsteht die`],
        [`terranera`, `granaio`, `macht die Ukraine zur`],
        [`pianura`, `fiumi`, `beherbergt`],
        [`fiumi`, `granaio`, `transportieren das Getreide`],
        [`pianura`, `storia`, `leicht zu erobern`],
        [`lingue`, `storia`, `erzählen die`],
        [`risorse`, `storia`, `wirtschaftliche Interessen`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Ukraine und Russland`,
      questions: [
        { type: `mc`, q: `Warum nennt man die Ukraine die „Kornkammer Europas“?`, options: [`Wegen ihrer großen Lagerhäuser`, `Wegen der sehr fruchtbaren Schwarzerde und des großen Getreideanbaus`, `Weil sie viel Weizen importiert`], answer: 1, explain: `Der Tschernosem und die weiten Ebenen ermöglichen riesige Ernten.` },
        { type: `mc`, q: `Wohin mündet die Wolga?`, options: [`Ins Schwarze Meer`, `In die Ostsee`, `Ins Kaspische Meer`], answer: 2, explain: `Ins Kaspische Meer, den größten See der Welt.` },
        { type: `tf`, q: `Die meisten Einwohner Russlands leben im europäischen Teil.`, answer: true, explain: `Etwa drei Viertel, obwohl der europäische Teil nur ein Viertel der Fläche ausmacht.` }
      ]
    }
  ],
  glossary: [
    { t: `Sarmatische Ebene`, d: `Die große Ebene Osteuropas, auch Russische Ebene genannt.` },
    { t: `Kontinentalklima`, d: `Klima mit sehr kalten Wintern und heißen Sommern, typisch für Gebiete fern vom Meer.` },
    { t: `Temperaturunterschied (Amplitude)`, d: `Unterschied zwischen der höchsten und der niedrigsten Temperatur in einem Zeitraum (Tag oder Jahr).` },
    { t: `Tundra`, d: `Kalter, baumloser Lebensraum mit Moosen und Flechten nahe dem Polarkreis.` },
    { t: `Taiga`, d: `Riesiger Nadelwald der kalten Regionen der Nordhalbkugel.` },
    { t: `Steppe`, d: `Weites, baumloses Grasland mit heißen, trockenen Sommern.` },
    { t: `Tschernosem (Schwarzerde)`, d: `Dunkler, sehr fruchtbarer, humusreicher Boden, typisch für Steppen.` },
    { t: `Kyrillisches Alphabet`, d: `Alphabet, das für Russisch, Ukrainisch, Belarussisch, Bulgarisch, Serbisch und andere Sprachen verwendet wird.` },
    { t: `Romanische Sprache`, d: `Sprache, die vom Lateinischen abstammt, wie Italienisch, Rumänisch, Französisch, Spanisch.` },
    { t: `Beitrittskandidat`, d: `Staat, der offiziell auf den Eintritt in die Europäische Union wartet, wie die Republik Moldau und die Ukraine.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Welches Gebirge bildet die Grenze zwischen Europa und Asien?`, options: [`Karpaten`, `Ural`, `Alpen`], answer: 1, explain: `Der Ural, in Russland.` },
      { type: `text`, q: `Wie heißt die Hauptstadt Rumäniens?`, answer: [`bukarest`, `bucuresti`, `bucurești`, `bucarest`], explain: `Bukarest.` },
      { type: `mc`, q: `Warum spricht man in Rumänien eine romanische Sprache?`, options: [`Wegen des Handels mit Spanien`, `Weil Dakien von den Römern erobert und romanisiert wurde`, `Wegen eines modernen Gesetzes`], answer: 1, explain: `Trajan eroberte Dakien im Jahr 106 n. Chr.` },
      { type: `mc`, q: `Zwischen welchen Flüssen liegt die Republik Moldau?`, options: [`Pruth und Dnister`, `Wolga und Don`, `Rhein und Donau`], answer: 0, explain: `Der Pruth im Westen, der Dnister im Osten.` },
      { type: `tf`, q: `Die Ukraine ist der größte Staat, der ganz in Europa liegt.`, answer: true, explain: `Etwa 603.500 km²; Russland ist größer, liegt aber zum größten Teil in Asien.` },
      { type: `order`, q: `Bring die Vegetationszonen in die Reihenfolge von NORD nach SÜD.`, items: [`Tundra`, `Taiga`, `Mischwald`, `Steppe`], explain: `Von der Kälte der Arktis zu den warmen Grasländern nahe dem Schwarzen Meer.` },
      { type: `mc`, q: `Was ist Tschernosem?`, options: [`Ein kalter Wind`, `Ein schwarzer, sehr fruchtbarer Boden`, `Ein Berg`], answer: 1, explain: `Die humusreiche „Schwarzerde“ der Steppen.` },
      { type: `num`, q: `Wie viele Kilometer ist die Transsibirische Eisenbahn ungefähr lang?`, answer: 9289, tol: 300, unit: `km`, explain: `9.289 km von Moskau bis Wladiwostok.` },
      { type: `mc`, q: `Welcher See ist der größte Europas?`, options: [`Ladogasee`, `Balaton`, `Gardasee`], answer: 0, explain: `Der Ladogasee in Russland, etwa 17.700 km².` },
      { type: `mc`, q: `Welche Schrift verwendet man, um Ukrainisch und Russisch zu schreiben?`, options: [`Lateinisch`, `Griechisch`, `Kyrillisch`], answer: 2, explain: `Das kyrillische Alphabet.` },
      { type: `text`, q: `Welche Stadt gründete Peter der Große 1703 an der Ostsee? (Sankt …)`, answer: [`sankt petersburg`, `sankt-petersburg`, `petersburg`, `st. petersburg`, `st petersburg`, `sankt peterburg`], explain: `Sankt Petersburg, von 1712 bis 1918 Hauptstadt Russlands.` },
      { type: `tf`, q: `Rumänien gehört seit 2007 zur Europäischen Union.`, answer: true, explain: `Zusammen mit Bulgarien, im Jahr 2007.` }
    ]
  }
});
