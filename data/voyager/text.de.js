VOYAGER_TEXT({
  lang: 'de',
  title: 'Die Reise der Voyager',
  intro: `<p>Im Jahr 1977 startete die NASA zwei Zwillingssonden, <b>Voyager 1</b> und <b>Voyager 2</b>, um die Riesenplaneten des Sonnensystems zu besuchen. Sie sollten fünf Jahre durchhalten. Heute, fast ein halbes Jahrhundert später, leben sie noch und reisen durch den Raum zwischen den Sternen, weiter weg als jedes andere von Menschen gebaute Objekt.</p>
<p>Auf der Karte siehst du ihre echten Bahnen, berechnet aus den Positionen der Planeten. Tippe auf ein Ereignis in der Zeitleiste und die Karte springt zu diesem Tag: So kannst du die Sonden vom Start bis heute begleiten.</p>`,
  probes: {
    v1: `<p><b>Voyager 1</b> startete als zweite (am 5. September 1977), überholte ihre Zwillingsschwester aber bald, weil sie auf einer schnelleren Bahn flog. Sie besuchte Jupiter (1979) und Saturn (1980). Nach dem nahen Vorbeiflug am Titan wurde ihre Bahn aus der Ebene der Planeten nach Norden gebogen. Seit 2012 ist sie im interstellaren Raum und das am weitesten entfernte Objekt der Menschheit: Sie fliegt mit etwa 17 km pro Sekunde (über 60.000 km/h).</p>
<p>Sie wiegt etwa 800 kg, hat eine 3,7 m große Antenne und erzeugt Strom mit Plutonium-Generatoren.</p>`,
    v2: `<p><b>Voyager 2</b> startete als erste (am 20. August 1977) auf einer langsameren Bahn. Sie ist die einzige Sonde, die jemals <b>alle vier</b> Riesenplaneten besucht hat: Jupiter (1979), Saturn (1981), Uranus (1986) und Neptun (1989). Seit 2018 ist auch sie im interstellaren Raum und fliegt mit etwa 15 km pro Sekunde.</p>
<p>Sie wiegt etwa 800 kg, hat eine 3,7 m große Antenne und erzeugt Strom mit Plutonium-Generatoren.</p>`
  },
  events: [
    { date: '1977-08-20', probe: 'v2', icon: '🚀', title: 'Voyager 2 startet',
      html: `<p>Eine Titan-Centaur-Rakete bringt Voyager 2 vom Cape Canaveral in Florida ins All. Obwohl sie die „Nummer 2“ ist, startet sie als erste!</p>
<p>Die Mission ist durch ein seltenes Glück möglich: Etwa alle 176 Jahre stehen Jupiter, Saturn, Uranus und Neptun so, dass man sie mit nur einer Reise nacheinander besuchen kann. Die Wissenschaftler nannten das die <b>Grand Tour</b>.</p>`,
      photo: 'voyager 2 launch' },
    { date: '1977-09-05', probe: 'v1', icon: '🚀', title: 'Voyager 1 startet',
      html: `<p>Sechzehn Tage nach ihrer Zwillingsschwester startet auch Voyager 1. Sie folgt einer schnelleren, direkteren Bahn zu Jupiter und Saturn und kommt deshalb bei beiden Planeten früher an als Voyager 2.</p>
<p>An Bord ist, wie auf Voyager 2, eine goldene Schallplatte mit den Klängen und Bildern der Erde, gedacht für jeden, der sie eines Tages findet.</p>`,
      photo: 'voyager 1 launch' },
    { date: '1977-09-18', probe: 'v1', icon: '🌍', title: 'Das erste Foto von Erde und Mond zusammen',
      html: `<p>Kurz nach dem Start dreht sich Voyager 1 um und macht ein Foto, auf dem Erde und Mond im selben Bild zu sehen sind, aus etwa 11 Millionen Kilometern Entfernung. Zum ersten Mal sieht man unseren Planeten und seinen Mond gemeinsam aus dem Weltraum.</p>`,
      photo: 'voyager 1 earth moon first image' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌋', title: 'Jupiter: Vulkane auf Io!',
      html: `<p>Voyager 1 fliegt in etwa 280.000 km Entfernung an Jupiter vorbei. Wenige Tage später bemerkt die NASA-Ingenieurin Linda Morabito auf einem Foto von Io eine Wolke über dem Rand des Mondes: Es ist der Ausbruch eines Vulkans!</p>
<p>Zum ersten Mal wurden aktive Vulkane außerhalb der Erde entdeckt. Io ist der vulkanischste Mond des Sonnensystems: Jupiter „knetet“ ihn mit seiner Schwerkraft und sein Inneres heizt sich auf.</p>`,
      photo: 'voyager io volcano' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌀', title: 'Der Große Rote Fleck und ein verborgener Ring',
      html: `<p>Aus der Nähe zeigt sich der Große Rote Fleck als riesiger Sturm, der sich gegen den Uhrzeigersinn dreht, breiter als die Erde ist und seit Jahrhunderten beobachtet wird. Die Fotos zeigen Wirbel und Strömungen rund um ihn.</p>
<p>Voyager 1 entdeckt auch, dass Jupiter einen dünnen, sehr schwachen Ring aus Staub hat, den man von der Erde aus nicht sehen kann.</p>`,
      photo: 'voyager jupiter great red spot' },
    { date: '1979-07-09', probe: 'v2', planet: 'jupiter', icon: '🧊', title: 'Jupiter: die rissige Kruste des Europa',
      html: `<p>Voyager 2 fliegt in etwa 570.000 km Entfernung an Jupiter vorbei und fotografiert seine Monde. Europa sieht aus wie eine glatte Eiskugel, durchzogen von langen dunklen Linien wie Risse in einer Eierschale, und hat nur sehr wenige Krater.</p>
<p>Wenige Krater bedeuten eine junge Oberfläche. Unter dem Eis könnte ein Ozean aus flüssigem Wasser liegen: Heute ist Europa einer der interessantesten Orte, um nach Leben zu suchen.</p>`,
      photo: 'voyager europa jupiter' },
    { date: '1980-11-11', probe: 'v1', planet: 'saturn', icon: '🟠', title: 'Saturn: die dichte Atmosphäre des Titan',
      html: `<p>Voyager 1 fliegt nahe am Titan vorbei, dem großen Mond des Saturn, und entdeckt, dass er eine viel dichtere Atmosphäre als die der Erde hat, die wie unsere hauptsächlich aus Stickstoff besteht. Ein oranger Dunst verbirgt die Oberfläche.</p>
<p>Titan ist der einzige Mond im Sonnensystem mit einer so dicken Atmosphäre. Auf den Fotos war der Boden nicht zu erkennen: Es brauchte weitere Missionen, um ihn zu enthüllen.</p>`,
      photo: 'voyager titan atmosphere' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '🪐', title: 'Saturn: die Ringe sind voller Details',
      html: `<p>Voyager 1 fliegt in etwa 125.000 km Entfernung an Saturn vorbei und sieht, dass die Ringe nicht aus ein paar glatten Kreisen bestehen, sondern aus Tausenden dünner Ringlein, ähnlich den Rillen einer Schallplatte. Im dünnen, weit außen liegenden F-Ring sehen manche Abschnitte aus wie zu einem Zopf verflochten.</p>
<p>Sie entdeckt auch zwei kleine „Hirtenmonde“, Prometheus und Pandora, die mit ihrer Schwerkraft den F-Ring in Ordnung halten, wie Hunde, die eine Herde führen.</p>`,
      photo: 'voyager saturn rings' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '↗️', title: 'Voyager 1 verlässt die Ebene der Planeten',
      html: `<p>Der nahe Vorbeiflug am Titan war mit Absicht gewählt worden, hat aber seinen Preis: Die Schwerkraft von Titan und Saturn biegt die Bahn von Voyager 1 nach Norden, aus der Ebene heraus, in der die Planeten kreisen.</p>
<p>Von diesem Moment an kann sie Uranus und Neptun nicht mehr besuchen, aber ihre Reise geht weiter in den Raum zwischen den Sternen. Es war eine Entscheidung: Den Titan aus der Nähe zu erforschen war für diese Sonde mehr wert als eine vollständige Grand Tour.</p>` },
    { date: '1981-08-26', probe: 'v2', planet: 'saturn', icon: '🪐', title: 'Voyager 2 am Saturn',
      html: `<p>Voyager 2 erreicht Saturn etwa neun Monate nach ihrer Zwillingsschwester und liefert einen weiteren Blick auf die Ringe und Monde. Sie fotografiert dunkle, wechselnde Strukturen in den Ringen und untersucht Monde wie Enceladus und Tethys.</p>
<p>Nach dem Vorbeiflug klemmt die Kameraplattform für eine Weile fest; die Ingenieure bringen sie von der Erde aus wieder in Gang, und die Sonde kann dank des Schwerkraftschwungs des Saturn weiter zum Uranus fliegen.</p>`,
      photo: 'voyager 2 saturn' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🔵', title: 'Uranus: zehn neue Monde und Miranda',
      html: `<p>Voyager 2 ist die erste und bisher einzige Sonde, die Uranus besucht. Sie fliegt in etwa 81.000 km Entfernung an den Wolken vorbei und entdeckt zehn neue kleine Monde.</p>
<p>Der Mond Miranda sieht aus wie ein Mosaik aus Teilen, die nicht zusammenpassen: sehr hohe Klippen, Furchen und Ebenen, als wäre er zerbrochen und schlecht wieder zusammengesetzt worden. Auf Miranda gibt es eine riesige Klippe, etwa 20 km hoch.</p>`,
      photo: 'voyager miranda' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🧲', title: 'Uranus: schiefes Magnetfeld und Ringe',
      html: `<p>Uranus ist ein Planet, der „auf der Seite liegt“. Voyager 2 entdeckt, dass sein Magnetfeld gegenüber der Rotationsachse stark geneigt ist, um etwa 60°, und nicht einmal durch den Mittelpunkt des Planeten geht.</p>
<p>Die Sonde untersucht auch die dunklen, dünnen Ringe und findet neue. Der Planet selbst erscheint blaugrün und fast ohne sichtbare Wolken.</p>`,
      photo: 'voyager uranus' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌀', title: 'Neptun: der Große Dunkle Fleck',
      html: `<p>Voyager 2 erreicht Neptun nach 12 Jahren Reise und fliegt in etwa 4.900 km Entfernung am Nordpol vorbei. Auf dem blauen Planeten sieht sie einen ovalen Sturm, so groß wie die Erde: den <b>Großen Dunklen Fleck</b>.</p>
<p>Sie misst auch die schnellsten Winde des Sonnensystems, etwa 2000 km/h, obwohl Neptun so weit von der Sonne entfernt ist und nur sehr wenig Wärme von ihr bekommt. Außerdem entdeckt sie neue Monde und bogenförmige Ringe.</p>`,
      photo: 'voyager neptune great dark spot' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌫️', title: 'Triton: Stickstoff-Geysire',
      html: `<p>Wenige Stunden nach Neptun streift Voyager 2 den Mond Triton in etwa 40.000 km Entfernung. Er ist einer der kältesten Orte, die je besucht wurden: etwa -235 °C.</p>
<p>Die Fotos zeigen dunkle Wölkchen, die vom Boden aufsteigen: Es sind Stickstoff-Geysire, die aus dem Eis austreten. Triton läuft entgegengesetzt zu Neptuns Drehrichtung um den Planeten: Vielleicht ist er ein Objekt, das aus dem Kuipergürtel eingefangen wurde. Voyager 2 ist bis heute die einzige Sonde, die Uranus und Neptun besucht hat.</p>`,
      photo: 'voyager triton' },
    { date: '1990-02-14', probe: 'v1', icon: '🖼️', title: 'Das Familienporträt',
      html: `<p>Beim Verlassen des Sonnensystems dreht sich Voyager 1 um und macht 60 Fotos, auf denen sechs Planeten zu sehen sind: Venus, Erde, Jupiter, Saturn, Uranus und Neptun. Merkur war zu nah an der Sonne, Mars lag im Sonnenglanz, Pluto war zu klein und zu dunkel.</p>
<p>Es ist das „Familienporträt“ des Sonnensystems, zum ersten und bisher einzigen Mal von außen gesehen.</p>`,
      photo: 'voyager family portrait' },
    { date: '1990-02-14', probe: 'v1', icon: '🔵', title: 'Der Blassblaue Punkt',
      html: `<p>Auf einem dieser Fotos, aus etwa sechs Milliarden Kilometern Entfernung, ist die Erde ein fast unsichtbarer Punkt in einem Lichtstrahl. Die Idee, sie aufzunehmen, stammte vom Astronomen Carl Sagan.</p>
<p>Sagan zog daraus einen berühmten Gedanken: Die ganze Menschheitsgeschichte, jeder Mensch, jeder Krieg und jede Freude, hat auf diesem winzigen Staubkorn stattgefunden. Für ihn war das ein Grund mehr, füreinander und für unser Zuhause zu sorgen.</p>`,
      photo: 'pale blue dot' },
    { date: '1990-02-14', probe: 'v1', icon: '📷', title: 'Die Kameras werden abgeschaltet',
      html: `<p>Nach dem Familienporträt werden die Kameras von Voyager 1 für immer abgeschaltet. Es gab nichts Nahes mehr zu fotografieren, und das Abschalten sparte Energie und Speicher für die Instrumente, die den Raum um die Sonde messen.</p>
<p>Seitdem schicken die Voyager keine Fotos mehr, messen aber weiter Magnetfelder, Teilchen und Wellen.</p>` },
    { date: '1998-02-17', probe: 'v1', icon: '🏁', title: 'Voyager 1 ist das am weitesten entfernte Objekt der Menschheit',
      html: `<p>Voyager 1 überholt Pioneer 10, eine Sonde, die vor ihr gestartet war, in etwa der 70-fachen Entfernung zwischen Erde und Sonne. Seit diesem Tag ist sie das von Menschen gebaute Objekt mit der größten Entfernung zur Erde, und ihr Vorsprung wächst jeden Tag.</p>` },
    { date: '2004-12-16', probe: 'v1', icon: '💨', title: 'Voyager 1 durchquert die Abbremsfront',
      html: `<p>In etwa der 94-fachen Entfernung zwischen Erde und Sonne wird der Sonnenwind, der Teilchenstrom, der von der Sonne ausgeht, plötzlich langsamer, so wie Wasser, wenn es auf den Boden eines Waschbeckens trifft. Diese Zone heißt <b>Abbremsfront</b> (Termination Shock).</p>
<p>Voyager 1 ist die erste Sonde, die in sie eintritt: Sie entdeckt, dass die Blase der Sonne stärker abgeflacht ist als erwartet.</p>` },
    { date: '2007-08-30', probe: 'v2', icon: '💨', title: 'Auch Voyager 2 durchquert die Abbremsfront',
      html: `<p>Voyager 2 durchquert dieselbe Grenze, in geringerer Entfernung von der Sonne. Beide Messungen zusammen zeigen, dass die Blase nicht symmetrisch ist: Im Süden ist sie stärker „zusammengedrückt“ als im Norden.</p>` },
    { date: '2012-08-25', probe: 'v1', icon: '🌌', title: 'Voyager 1 erreicht den interstellaren Raum',
      html: `<p>Am 25. August 2012 messen die Instrumente von Voyager 1 eine plötzliche Veränderung: Die Teilchen des Sonnenwinds verschwinden fast, während die Teilchen aus dem Raum zwischen den Sternen zunehmen.</p>
<p>Die Wissenschaftler brauchten einige Monate, um das zu verstehen, aber es war geschehen: Voyager 1 hatte die <b>Heliopause</b> durchquert und war das erste Objekt der Menschheit im interstellaren Raum geworden.</p>` },
    { date: '2017-11-28', probe: 'v1', icon: '🔥', title: 'Die Triebwerke zünden nach 37 Jahren wieder',
      html: `<p>Die kleinen Raketen, mit denen Voyager 1 zur Erde ausgerichtet wird, ließen in ihrer Wirkung nach. Die Ingenieure probierten deshalb die Ersatztriebwerke aus, die seit 1980, als die Sonde am Saturn vorbeigeflogen war, nicht mehr benutzt worden waren.</p>
<p>Nach 37 Jahren funktionierten die Triebwerke auf Anhieb, mit Impulsen von nur 10 Millisekunden. Die Mission konnte um einige Jahre verlängert werden.</p>` },
    { date: '2018-11-05', probe: 'v2', icon: '🌌', title: 'Auch Voyager 2 verlässt die Heliosphäre',
      html: `<p>Voyager 2 durchquert die Heliopause und erreicht den interstellaren Raum. Diesmal, anders als bei ihrer Zwillingsschwester, funktioniert noch das Instrument, das das Plasma misst, sodass die Wissenschaftler den Übergang direkt beobachten können.</p>
<p>Die beiden Sonden, in verschiedenen Richtungen unterwegs, zeigen, dass die Grenze stabil und gut abgegrenzt ist.</p>` },
    { date: '2023-11-14', probe: 'v1', icon: '⚠️', title: 'Voyager 1 beginnt, sinnlose Daten zu senden',
      html: `<p>Mitte November 2023 empfängt Voyager 1 weiter Befehle, aber die Daten, die sie sendet, sind eine wirre Folge von Nullen und Einsen. Niemand konnte den Gesundheitszustand der Sonde erkennen.</p>
<p>Das Problem lag in einem der Bordcomputer, dem Flugdatensystem, und genau in einem Speicherchip, der nach 46 Jahren im Weltraum beschädigt war.</p>` },
    { date: '2024-04-20', probe: 'v1', icon: '🛠️', title: 'Die Reparatur in 24 Milliarden Kilometern Entfernung',
      html: `<p>Die Ingenieure konnten den Chip nicht reparieren, also verschoben sie das Programm in andere freie Bereiche des Speichers und zerlegten es in kleinere Teile. Bei jedem Schritt mussten sie Stunden warten, bis die Signale hin und zurück gelaufen waren.</p>
<p>Im April 2024 schickte Voyager 1 wieder brauchbare Daten über ihren Zustand und kurz darauf auch wieder wissenschaftliche Daten von den Instrumenten.</p>` },
    { date: '2025-03-01', probe: 'both', icon: '🔌', title: 'Instrumente werden abgeschaltet, um Energie zu sparen',
      html: `<p>Die Plutonium-Generatoren verlieren etwa 4 Watt pro Jahr. Um nicht ohne Strom dazustehen, schalten die Ingenieure nacheinander die weniger wichtigen Instrumente und die Heizungen ab.</p>
<p>Auf jeder Sonde bleiben einige in Betrieb. Wenn alles gut geht, können die Voyager noch bis in die 2030er-Jahre mit uns sprechen.</p>` },
    { date: '2026-11-15', probe: 'v1', icon: '⏱️', title: 'Ein Lichttag von zu Hause entfernt',
      html: `<p>Dieser Tage erreicht Voyager 1 eine Entfernung von etwa einem Lichttag: Das Licht, und mit ihm die Funksignale, braucht 24 Stunden bis dorthin. Eine Nachricht und ihre Antwort brauchen also fast zwei Tage.</p>
<p>Voyager 2 ist noch etwas näher, bei etwa 20 Lichtstunden. Die Reise wird für immer weitergehen, aber die Sonde wird nie zurückkehren.</p>` }
  ],
  sections: [
    { icon: '📀', title: 'Die Goldene Schallplatte',
      html: `<p>Auf jeder Voyager befindet sich eine vergoldete Kupferplatte, wie eine Flaschenpost. Sie enthält:</p>
<ul>
<li><b>Grüße in 55 Sprachen</b>, vom antiken Sumerisch bis zu modernen Sprachen, dazu einen Gruß der UNO und eine Botschaft des amerikanischen Präsidenten Carter;</li>
<li><b>Klänge der Erde</b>: Wellen, Wind, Donner, Tiere, den Gesang der Wale, einen Kuss, das Lachen eines Kindes;</li>
<li><b>etwa 90 Minuten Musik</b> aus aller Welt, von Bach und Beethoven bis zu traditionellen Liedern und Rock;</li>
<li><b>115 Bilder</b>, in Signale umgewandelt, die die Erde, Menschen, Häuser und Essen zeigen.</li>
</ul>
<p>Auf der Hülle sind gezeichnete Anleitungen zum Abspielen der Platte und eine Karte mit der Position der Sonne zu sehen, erstellt aus den Frequenzen von 14 <b>Pulsaren</b>, Sternen, die in sehr regelmäßigem Takt blinken. Mehr als für Außerirdische ist es eine Botschaft an uns selbst.</p>` },
    { icon: '📡', title: 'Wie sie noch mit uns sprechen können',
      html: `<p>Die Voyager haben keine Solarzellen, weil die Sonne zu weit weg ist. Stattdessen haben sie <b>Plutonium</b>-Generatoren (RTG), die die Wärme des langsam zerfallenden Plutoniums in Strom umwandeln. Am Anfang lieferten sie etwa 470 Watt; heute viel weniger, und es werden jedes Jahr etwa 4 Watt weniger.</p>
<p>Der Sender an Bord braucht nur etwa <b>23 Watt</b>, so viel wie die Lampe im Kühlschrank. Wenn das Signal auf der Erde ankommt, ist es unglaublich schwach, milliardenfach schwächer als die Energie einer Digitaluhr. Um es aufzufangen, braucht man die großen 70-Meter-Antennen des <b>Deep Space Network</b> in Goldstone (Kalifornien), Madrid und Canberra, damit immer mindestens eine auf die Sonden gerichtet ist, während sich die Erde dreht.</p>
<p>Die Sonden antworten mit einer 3,7 m großen Parabolantenne, die genau auf die Erde zeigt. Die Übertragungsgeschwindigkeit beträgt etwa 160 Bit pro Sekunde: tausendmal langsamer als eine alte Telefonverbindung.</p>` },
    { icon: '🎯', title: 'Die Schwerkraft-Schleudern',
      html: `<p>Eine Rakete allein reichte nicht, um bis zum Neptun zu kommen. Die Voyager nutzten die <b>Schwerkraft der Planeten</b>: Wenn eine Sonde nahe an Jupiter vorbeifliegt, wird sie angezogen, schwenkt um und fliegt schneller wieder hinaus. Dabei „stiehlt“ sie dem Planeten ein bisschen von seiner Bewegung, und der ist so schwer, dass er es nicht bemerkt.</p>
<p>Jeder Planet war eine Schleuder zum nächsten. Deshalb war die Grand Tour mit einer Sonde von etwa 800 kg und wenig Treibstoff möglich: Jede nutzte Jupiter, Saturn und so weiter, um Richtung und Geschwindigkeit zu ändern und dabei fast nichts zu verbrauchen.</p>` },
    { icon: '🫧', title: 'Was ist die Heliosphäre?',
      html: `<p>Die Sonne sendet ununterbrochen den <b>Sonnenwind</b> aus, einen Strom geladener Teilchen, der mit Hunderten von km pro Sekunde strömt und eine riesige Blase um das Sonnensystem aufbläst: die <b>Heliosphäre</b>.</p>
<p>Weiter draußen wird der Wind an der Abbremsfront langsamer, staut sich dann in der äußeren Heliosphäre und trifft schließlich auf das Gas zwischen den Sternen. Der Rand, an dem der Sonnenwind nicht mehr drückt, heißt <b>Heliopause</b>. Jenseits dieser Grenze beginnt der interstellare Raum.</p>
<p>Achtung: Die Voyager haben die Heliosphäre verlassen, aber nicht das Sonnensystem! Die Oortsche Wolke, eine riesige Hülle aus Kometen, beginnt etwa 300 Jahre von ihnen entfernt und wird erst in Zehntausenden von Jahren enden.</p>` },
    { icon: '📏', title: 'Wie weit sie entfernt sind',
      html: `<p>Voyager 1 ist mehr als 25 Milliarden Kilometer von der Erde entfernt, etwa das 170-Fache der Entfernung zwischen Erde und Sonne. Wenn die Erde einen Schritt von der Sonne entfernt wäre, wäre Voyager 1 fast 170 Schritte weit weg.</p>
<p>Das Licht braucht etwa 8 Minuten von der Sonne bis zu uns, fast 5,5 Stunden bis zum Neptun und etwa einen Tag bis zu Voyager 1. Ein Verkehrsflugzeug mit 900 km/h bräuchte über 3000 Jahre.</p>
<p>Und doch sind diese Entfernungen im interstellaren Raum klein: Der nächste Stern, Proxima Centauri, ist 4,2 Lichtjahre entfernt, über 1.500-mal weiter weg als Voyager 1 heute.</p>` },
    { icon: '♾️', title: 'Und danach?',
      html: `<p>Früher oder später werden die Voyager aufhören zu sprechen, wenn die Energie nicht mehr reicht. Aber sie werden still weiterreisen, Milliarden von Jahren lang, ohne dass sie etwas aufhält.</p>
<p>In etwa 40.000 Jahren wird Voyager 1 in etwa 1,6 Lichtjahren Entfernung am Stern <b>Gliese 445</b> vorbeifliegen, während Voyager 2 in etwa 1,7 Lichtjahren Entfernung an <b>Ross 248</b> vorbeifliegt. Das sind keine nahen Begegnungen: Es sind nur die nächsten Punkte ihrer langen Reise. Mit der Goldenen Schallplatte an Bord bleiben sie ein Zeugnis davon, wer wir sind.</p>` }
  ],
  quiz: [
    { type: 'mc', q: 'Warum war 1977 die „Grand Tour“ möglich?', options: ['Weil die Raketen viel stärker waren', 'Weil die vier Riesenplaneten günstig angeordnet waren, was etwa alle 176 Jahre vorkommt', 'Weil die Planeten ganz nah bei der Erde standen'], answer: 1, explain: 'Jupiter, Saturn, Uranus und Neptun standen so, dass man sie nacheinander besuchen konnte, indem man die Schwerkraft jedes Planeten nutzte, um den nächsten zu erreichen.' },
    { type: 'tf', q: 'Voyager 2 ist vor Voyager 1 gestartet.', answer: true, explain: 'Voyager 2 startete am 20. August 1977, Voyager 1 am 5. September. Aber Voyager 1 nahm eine schnellere Bahn und erreichte Jupiter und Saturn früher.' },
    { type: 'mc', q: 'Welche Entdeckung machte Voyager 1 auf dem Mond Io?', options: ['Er hat einen Wasserozean unter dem Eis', 'Er hat aktive Vulkane', 'Er hat eine Atmosphäre wie die Erde'], answer: 1, explain: 'Es war die erste Entdeckung aktiver Vulkane außerhalb der Erde.' },
    { type: 'mc', q: 'Welcher Jupitermond zeigte eine rissige Eisoberfläche mit wenigen Kratern?', options: ['Europa', 'Io', 'Triton'], answer: 0, explain: 'Europa, 1979 von Voyager 2 fotografiert, könnte unter dem Eis einen Ozean haben.' },
    { type: 'tf', q: 'Voyager 1 hat auch Uranus und Neptun besucht.', answer: false, explain: 'Nach dem Titan wurde ihre Bahn aus der Ebene der Planeten gebogen. Uranus und Neptun wurden nur von Voyager 2 besucht.' },
    { type: 'num', q: 'Wie schnell sind ungefähr die Winde auf Neptun, die Voyager 2 entdeckt hat? (km/h)', answer: 2000, tol: 300, unit: 'km/h', explain: 'Die Winde auf Neptun sind die schnellsten im Sonnensystem, etwa 2000 km/h.' },
    { type: 'mc', q: 'Was zeigt das Foto „Blassblauer Punkt“?', options: ['Die Erde, aus etwa sechs Milliarden Kilometern Entfernung gesehen', 'Neptun aus der Nähe', 'Die Sonne von der Oberfläche des Jupiter aus'], answer: 0, explain: 'Die Erde ist ein winziger Punkt in einem Lichtstrahl. Carl Sagan zog daraus einen berühmten Gedanken über unsere Kleinheit und den Wert unseres Zuhauses.' },
    { type: 'order', q: 'Bringe diese Ereignisse in die richtige Reihenfolge', items: ['Start der Voyager (1977)', 'Voyager 2 am Uranus (1986)', 'Blassblauer Punkt (1990)', 'Voyager 1 im interstellaren Raum (2012)'], explain: 'Vom Start (1977) zum Uranus (1986), dann das Foto der Erde (1990) und schließlich das Verlassen der Heliosphäre (2012).' },
    { type: 'mc', q: 'Wie erzeugen die Voyager Energie?', options: ['Mit riesigen Solarzellen', 'Mit Plutonium-Generatoren', 'Mit wiederaufladbaren Batterien'], answer: 1, explain: 'Die Plutonium-Generatoren (RTG) wandeln Wärme in Strom um. Die Sonne ist für Solarzellen zu weit weg.' },
    { type: 'mc', q: 'Wie heißt das Netz aus großen Antennen, das mit den Voyager Kontakt hält?', options: ['Deep Space Network', 'Hubble Network', 'Star Link'], answer: 0, explain: 'Das Deep Space Network hat 70-Meter-Antennen in Goldstone, Madrid und Canberra.' },
    { type: 'tf', q: 'Die Goldene Schallplatte enthält Grüße in 55 Sprachen.', answer: true, explain: 'Sie enthält außerdem Klänge der Erde, etwa 90 Minuten Musik und 115 Bilder.' },
    { type: 'num', q: 'In etwa wie vielen Jahren fliegt Voyager 1 am Stern Gliese 445 vorbei? (Jahre)', answer: 40000, tol: 5000, unit: 'Jahre', explain: 'In etwa 40.000 Jahren wird sie in etwa 1,6 Lichtjahren Entfernung am Stern vorbeifliegen.' }
  ]
});
