BODY_TEXT({
  lang: "de",
  title: "Der menschliche Körper",
  intro: "<p>Dein Körper ist ein Team aus <b>Organen</b>, die Tag und Nacht zusammenarbeiten. Dreh das Modell, zieh die Teile auseinander, tippe ein Organ an und finde heraus, wozu es da ist, wie es funktioniert und mit wem es zusammenarbeitet.</p>",
  systems: {
    pelle: { name: "Die Haut", intro: "<p>Die Haut ist das größte Organ des Körpers: Sie umhüllt dich wie ein maßgeschneiderter Anzug. Sie schützt vor Stößen, Keimen und Sonne, regelt mit dem Schweiß die Temperatur und lässt dich dank Millionen kleiner Sensoren Wärme, Kälte, Druck und Schmerz spüren.</p>" },
    scheletro: { name: "Das Skelett", intro: "<p>Das Skelett ist das Gerüst des Körpers: Beim Erwachsenen sind es etwa 206 Knochen, die durch Gelenke, Bänder und Sehnen verbunden sind. Es stützt den Körper, schützt empfindliche Organe, ermöglicht zusammen mit den Muskeln die Bewegungen und bildet im Knochenmark die Blutzellen.</p>" },
    muscoli: { name: "Die Muskeln", intro: "<p>Im Körper gibt es mehr als 600 Muskeln. Sie arbeiten, indem sie sich verkürzen (anspannen) und dann wieder entspannen, und ziehen über die Sehnen an den Knochen. Einige steuern wir selbst, andere, zum Beispiel die des Magens, arbeiten von allein. Sie erzeugen auch Wärme.</p>" },
    nervoso: { name: "Das Nervensystem", intro: "<p>Es ist das Steuer- und Kommunikationsnetz des Körpers. Gehirn und Rückenmark bilden das Zentralnervensystem; die Nerven sind die „Kabel“, die Informationen vom Körper zum Gehirn und Befehle vom Gehirn zu den Muskeln und Organen bringen. Die Signale wandern als winzige elektrische Impulse.</p>" },
    sensi: { name: "Die Sinne", intro: "<p>Sehen, Hören, Riechen und Schmecken (und das Fühlen mit der Haut) sind die Fenster des Körpers zur Welt. Jedes Sinnesorgan verwandelt Licht, Geräusche, Gerüche oder Geschmäcke in Nervensignale, die das Gehirn deutet.</p>" },
    circolatorio: { name: "Das Kreislaufsystem", intro: "<p>Das Herz ist die Pumpe, die das Blut durch ein Netz aus Röhren, die Blutgefäße, treibt. Die Arterien bringen das Blut vom Herzen weg, die Venen führen es zurück. Das Blut liefert Sauerstoff und Nährstoffe an jede Zelle und transportiert Abfallstoffe ab, deshalb steht es nie still.</p>" },
    respiratorio: { name: "Das Atmungssystem", intro: "<p>Es sorgt dafür, dass Sauerstoff hineinkommt und Kohlendioxid hinausgelangt. Die Luft strömt durch Nase, Luftröhre und Bronchien bis in die Lunge, wo der Sauerstoff ins Blut übergeht. Das Zwerchfell, ein Muskel unter der Lunge, bewegt die Luft wie ein Blasebalg.</p>" },
    digerente: { name: "Das Verdauungssystem", intro: "<p>Es verwandelt Nahrung in Stoffe, die klein genug sind, um ins Blut überzutreten. Die Nahrung wandert durch einen langen Schlauch von etwa 8–9 Metern: Mund, Speiseröhre, Magen, Dünndarm und Dickdarm. Leber, Gallenblase und Bauchspeicheldrüse helfen mit besonderen Säften.</p>" },
    urinario: { name: "Das Harnsystem", intro: "<p>Es ist das Filtersystem des Körpers. Die Nieren reinigen das Blut, scheiden Abfallstoffe und überschüssiges Wasser aus und machen daraus Urin, der in die Blase fließt, bis es Zeit ist, zur Toilette zu gehen.</p>" },
    endocrino: { name: "Das Hormonsystem", intro: "<p>Die Hormondrüsen bilden Hormone, chemische Botenstoffe, die im Blut reisen und den Organen sagen, was sie tun sollen: wachsen, Zucker verwerten, auf einen Schreck reagieren. Sie wirken langsamer als die Nerven, aber ihre Wirkung hält länger an.</p>" },
    immunitario: { name: "Das Immunsystem", intro: "<p>Es ist die Verteidigungsarmee des Körpers. Weiße Blutkörperchen und andere Zellen erkennen Viren, Bakterien und andere Eindringlinge und beseitigen sie. Milz, Thymus und Lymphknoten sind die Stützpunkte, in denen diese Zellen entstehen, trainieren und Wache halten.</p>" }
  },
  organs: {
    pelle: {
      name: "Die Haut", label: "Haut",
      what: "<p>Die Haut bedeckt den ganzen Körper wie ein Overall. Sie schützt vor Stößen, Schmutz und Keimen, kühlt dich, wenn du schwitzt, und lässt dich Wärme, Kälte und Streicheln spüren.</p>",
      how: "<p>Sie besteht aus drei Schichten: der <b>Oberhaut</b> (dünn und wasserdicht, erneuert sich ständig), der <b>Lederhaut</b> (mit Gefäßen, Nerven, Schweißdrüsen und Haarwurzeln) und der <b>Unterhaut</b> (Fett, das isoliert und polstert). Beim Erwachsenen misst sie etwa 1,8 m² und wiegt 3–4 kg. Die Zellen der Oberhaut erneuern sich etwa alle 4 Wochen. Der Farbstoff <b>Melanin</b> filtert die UV-Strahlen der Sonne. Um den Körper abzukühlen, weiten sich die Gefäße und der Schweiß verdunstet; bei Kälte ziehen sich die Gefäße zusammen.</p>",
      links: [
        { to: "nervi", text: "Nervenenden in der Haut schicken über die Nerven die Signale für Berührung, Temperatur und Schmerz ans Gehirn." },
        { to: "vene", text: "Das Blut in den oberflächennahen Gefäßen gibt überschüssige Wärme ab und hilft, die Temperatur zu regeln." },
        { to: "muscoli", text: "Unter der Haut erzeugen die Muskeln Wärme; wenn dir kalt ist, lassen die winzigen Haarmuskeln dir eine Gänsehaut wachsen." }
      ],
      problems: [
        { title: "Sonnenbrand", causes: "zu viel Sonne ohne Schutz, vor allem in der Mittagszeit.", effects: "die Haut wird rot, brennt und schuppt sich später; die UV-Strahlen können die Zellen langfristig schädigen.", prevent: "Sonnencreme, Mütze, T-Shirt, Schatten in der heißen Tageszeit, Wasser trinken." },
        { title: "Ekzem und trockene Haut", causes: "empfindliche Haut, scharfe Seife, trockene Luft, manchmal Allergien.", effects: "Juckreiz, Rötungen und rissige Haut, die weniger gut schützt.", prevent: "mit milden Reinigungsmitteln waschen, die Haut eincremen; wenn der Juckreiz bleibt, sprich mit einem Erwachsenen oder der Ärztin bzw. dem Arzt." }
      ],
      fact: "An einem Tag verlieren wir Millionen Hautzellen: Ein großer Teil des Hausstaubs besteht auch daraus!"
    },
    cranio: {
      name: "Der Schädel", label: "Schädel",
      what: "<p>Der Schädel ist die Knochenkapsel, die das Gehirn schützt. Er gibt auch dem Gesicht seine Form und beherbergt Augen, Ohren und Nase.</p>",
      how: "<p>Er besteht aus 22 Knochen: 8 bilden den Hirnschädel und 14 das Gesicht. Fast alle sind durch feste Verbindungen, die <b>Nähte</b>, verbunden; nur der <b>Unterkiefer</b> ist beweglich verbunden, so kannst du kauen und sprechen. Bei Neugeborenen sind die Knochen noch nicht zusammengewachsen (die „Fontanellen“), damit der Kopf bei der Geburt durchpasst und das Gehirn Platz zum Wachsen hat. Eine große Öffnung an der Basis, das <b>Hinterhauptsloch</b>, lässt das Rückenmark hindurch.</p>",
      links: [
        { to: "cervello", text: "Er umschließt und schützt das Gehirn wie ein natürlicher Helm." },
        { to: "colonna", text: "Er sitzt auf der Wirbelsäule, die ihn trägt und bewegt." },
        { to: "occhi", text: "Die Augenhöhlen sind zwei Hohlräume im Schädel, in denen die Augen sicher liegen." },
        { to: "midollo", text: "Durch die Öffnung an der Schädelbasis ist das Gehirn mit dem Rückenmark verbunden." }
      ],
      problems: [
        { title: "Schläge auf den Kopf", causes: "Stürze oder Zusammenstöße beim Radfahren, beim Sport, beim Spielen.", effects: "das Gehirn kann eine Erschütterung erleiden, mit Kopfschmerzen oder Schwindel.", prevent: "Helm beim Radfahren, Roller- und Skifahren; wenn du dir den Kopf stößt, sag es sofort einem Erwachsenen und lass dich untersuchen." }
      ],
      fact: "Die Schädelknochen des Erwachsenen sind wie ein Puzzle ineinandergefügt."
    },
    colonna: {
      name: "Die Wirbelsäule", label: "Wirbelsäule",
      what: "<p>Sie ist die Achse des Körpers: Sie hält dich aufrecht, lässt dich bücken und drehen und schützt das Rückenmark, das in ihrem Inneren verläuft.</p>",
      how: "<p>Sie besteht aus 33–34 aufeinandergestapelten <b>Wirbeln</b>: 7 Halswirbel, 12 Brustwirbel, 5 Lendenwirbel, dann Kreuzbein und Steißbein (verschmolzene Wirbel). Zwischen den Wirbeln liegen die <b>Bandscheiben</b>, elastische Polster, die Stöße abfedern. Von der Seite gesehen hat sie vier „S“-förmige Krümmungen, die sie beweglich machen und Stöße abfangen lassen. Die Rückenmuskeln halten sie gerade. Im Kanal in ihrem Inneren verläuft das Rückenmark.</p>",
      links: [
        { to: "midollo", text: "Die Wirbel bilden einen Kanal, der das Rückenmark schützt." },
        { to: "costole", text: "Die Brustwirbel sind mit den Rippen verbunden und bilden so den Brustkorb." },
        { to: "bacino", text: "Unten stützt sie sich auf das Becken, das das Körpergewicht trägt." },
        { to: "muscoli", text: "Die Rückenmuskeln halten sie gerade und bewegen sie." }
      ],
      problems: [
        { title: "Rückenschmerzen und schlechte Haltung", causes: "zu langes Sitzen oder Krummsitzen, schwere Rucksäcke auf einer Schulter, wenig Bewegung.", effects: "verspannte Muskeln und Rückenschmerzen; mit der Zeit kann die richtige Haltung verloren gehen.", prevent: "Rucksack auf beiden Schultern und nicht zu schwer, Pausen nach dem Lernen, Sport und aktive Spiele; wenn der Schmerz anhält, sprich mit einem Erwachsenen oder der Ärztin bzw. dem Arzt." }
      ],
      fact: "Morgens bist du etwas größer als abends: In der Nacht „quellen“ die Bandscheiben zwischen den Wirbeln wieder auf."
    },
    costole: {
      name: "Die Rippen", label: "Rippen",
      what: "<p>Die Rippen bilden einen Käfig, der Herz und Lunge schützt. Sie bewegen sich beim Atmen ein klein wenig.</p>",
      how: "<p>Es sind 12 Paar gebogene Knochen, die hinten an den Brustwirbeln befestigt sind. Die ersten 7 Paare sind vorne über Knorpel mit dem <b>Brustbein</b> verbunden; die anderen 5 sind nur indirekt verbunden oder frei. Diese Struktur, der <b>Brustkorb</b>, ist starr genug zum Schützen und flexibel genug zum Ausdehnen: Beim Einatmen heben die Zwischenrippenmuskeln die Rippen und der Brustkorb weitet sich, sodass Luft einströmt. Sie enthalten außerdem rotes Knochenmark, das Blutzellen bildet.</p>",
      links: [
        { to: "polmoni", text: "Sie umgeben die Lunge wie ein Käfig und bewegen sich bei jedem Atemzug mit." },
        { to: "cuore", text: "Sie schützen das Herz vor Stößen." },
        { to: "colonna", text: "Hinten sind sie an den Brustwirbeln eingehängt." },
        { to: "diaframma", text: "Zusammen mit dem Zwerchfell verändern sie das Volumen des Brustkorbs und lassen die Luft ein- und ausströmen." }
      ],
      problems: [
        { title: "Geprellte oder angebrochene Rippen", causes: "Stürze oder heftige Schläge auf den Brustkorb.", effects: "Schmerzen, vor allem beim tiefen Atmen oder Lachen.", prevent: "Schutzausrüstung bei Kontaktsportarten und Vorsicht beim Spielen; wenn du nach einem Schlag Schmerzen im Brustkorb hast, sag es einem Erwachsenen." }
      ],
      fact: "Rippen heilen von selbst: Sie gehören zu den Knochen, die am besten heilen."
    },
    bacino: {
      name: "Das Becken", label: "Becken",
      what: "<p>Das Becken ist der schalenförmige Knochen über den Beinen. Es trägt das Körpergewicht und schützt die Organe im unteren Teil des Bauchs.</p>",
      how: "<p>Das Becken besteht aus den zwei <b>Hüftknochen</b> (jeder entstanden aus der Verschmelzung von Darmbein, Sitzbein und Schambein), die vorne miteinander und hinten mit dem <b>Kreuzbein</b> verbunden sind. Es leitet das Gewicht des Rumpfs über die Hüftgelenke an die Beine weiter, wo sich der Oberschenkelkopf in einer Gelenkpfanne, der Hüftpfanne, dreht. Es schützt Blase und Darm. Es ist ein kräftiger Knochen, der bis zum Ende der Jugend weiterwächst.</p>",
      links: [
        { to: "colonna", text: "Das Kreuzbein am unteren Ende der Wirbelsäule ist mit dem Becken verwachsen." },
        { to: "ossa_gambe", text: "Der Oberschenkelknochen sitzt im Hüftknochen und bildet das Gelenk, mit dem du gehen kannst." },
        { to: "vescica", text: "Es bildet die schützende Schale für die Blase und einen Teil des Darms." }
      ],
      problems: [
        { title: "Hüftprellungen", causes: "Stürze auf die Seite, zum Beispiel auf Inlinern oder im Schnee.", effects: "Schmerzen und ein blauer Fleck, manchmal Schwierigkeiten beim Gehen für ein paar Tage.", prevent: "Schutzausrüstung beim Inlineskaten oder Skifahren, passende Schuhe; wenn du das Bein nicht belasten kannst, sag es einem Erwachsenen." }
      ],
      fact: "Das Becken ist der Schwerpunkt des Körpers, dort hält sich dein Gewicht im Gleichgewicht."
    },
    ossa_braccia: {
      name: "Die Armknochen", label: "Armknochen",
      what: "<p>Schulter, Arm, Unterarm und Hand werden von Knochen getragen, mit denen du greifen, werfen und schreiben kannst.</p>",
      how: "<p>Jeder Arm hat: <b>Oberarmknochen</b> (Oberarm), <b>Speiche</b> und <b>Elle</b> (Unterarm), 8 Handwurzelknochen, 5 Mittelhandknochen und 14 Fingerglieder, insgesamt 30 Knochen pro Arm, dazu Schulterblatt und Schlüsselbein. Die Schulter ist das beweglichste Gelenk des Körpers, aber auch eines der am häufigsten ausgekugelten. Speiche und Elle können sich kreuzen und ermöglichen es, die Handfläche zu drehen. Der „gegenüberstellbare“ Daumen erlaubt präzises Greifen.</p>",
      links: [
        { to: "muscoli", text: "Die Muskeln ziehen über die Sehnen an den Knochen: Der Bizeps beugt den Ellbogen und der Trizeps streckt ihn." },
        { to: "nervi", text: "Die Armnerven geben Befehle und leiten die Empfindungen aus den Fingern weiter." },
        { to: "costole", text: "Schlüsselbein und Schulterblatt verbinden den Arm mit dem Brustkorb." }
      ],
      problems: [
        { title: "Knochenbrüche", causes: "Stürze mit den Händen voraus, Spiele und Sport.", effects: "Schmerzen, Schwellung und Mühe, den Arm zu bewegen; mit einem Gips heilt der Knochen in ein paar Wochen.", prevent: "Schutzausrüstung beim Sport, Kalzium und Vitamin D in der Ernährung, Spielen im Freien; wenn du fällst und es sehr wehtut, sag es sofort einem Erwachsenen." }
      ],
      fact: "In Händen und Handgelenken befindet sich mehr als ein Viertel aller Knochen des Körpers."
    },
    ossa_gambe: {
      name: "Die Beinknochen", label: "Beinknochen",
      what: "<p>Die Beinknochen sind lang und kräftig: Sie tragen den Körper und lassen dich gehen, rennen und springen.</p>",
      how: "<p>Jedes Bein hat den <b>Oberschenkelknochen</b> (den längsten und stärksten Knochen des Körpers, etwa ein Viertel der Körpergröße), die <b>Kniescheibe</b>, das <b>Schienbein</b> und das <b>Wadenbein</b>, dazu 7 Fußwurzelknochen, 5 Mittelfußknochen und 14 Zehenglieder. Das Knie ist ein großes Gelenk, das durch Bänder verstärkt wird. Der Fuß hat ein Gewölbe, das wie eine Feder wirkt und Stöße abfängt. Die langen Knochen wachsen von den <b>Wachstumsfugen</b> aus, die sich am Ende der Jugend schließen.</p>",
      links: [
        { to: "bacino", text: "Der Oberschenkelknochen dreht sich in der Pfanne des Hüftknochens." },
        { to: "muscoli", text: "Oberschenkelstrecker und Waden ziehen an den Beinknochen und ermöglichen Gehen und Rennen." },
        { to: "cervelletto", text: "Das Kleinhirn koordiniert die Bewegungen und das Gleichgewicht beim Gehen und Springen." }
      ],
      problems: [
        { title: "Verstauchungen und Brüche", causes: "Sprünge, Ausrutscher, ungeeignete Schuhe.", effects: "Schmerzen und Schwellung am Knöchel oder Knie, Schwierigkeiten beim Gehen.", prevent: "Aufwärmen vor dem Sport, passende Schuhe und langsames Steigern des Trainings; wenn es wehtut, den Fuß aufzusetzen, sprich mit einem Erwachsenen oder der Ärztin bzw. dem Arzt." }
      ],
      fact: "Der Oberschenkelknochen hält ein Vielfaches deines Gewichts aus und ist bei gleichem Gewicht stabiler als Beton."
    },
    muscoli: {
      name: "Die Muskeln", label: "Muskeln",
      what: "<p>Die Muskeln lassen dich bewegen: rennen, springen, lächeln, atmen. Sie bestehen aus Fasern, die sich verkürzen und dann wieder entspannen.</p>",
      how: "<p>Im Körper gibt es über 600 Muskeln. Die <b>Skelettmuskeln</b> sind willkürlich und über die <b>Sehnen</b> an den Knochen befestigt; die <b>glatten Muskeln</b> (Magen, Darm, Gefäße) arbeiten von allein; der <b>Herzmuskel</b> befindet sich nur im Herzen. Ein Muskel kann nur ziehen, deshalb arbeitet er paarweise: zum Beispiel Bizeps und Trizeps (Spieler und Gegenspieler). Zum Anspannen braucht er Energie aus Zucker und Sauerstoff; ein Teil wird zu Wärme, die dich bei Bewegung aufwärmt. Training macht die Fasern stärker.</p>",
      links: [
        { to: "nervi", text: "Die Nerven schicken den Muskeln den Befehl, sich anzuspannen." },
        { to: "ossa_braccia", text: "Über die Sehnen ziehen sie an den Knochen und bewegen so Gelenke wie den Ellbogen." },
        { to: "cuore", text: "Das Herz ist ein besonderer Muskel, der ohne Pause arbeitet." },
        { to: "vene", text: "Wenn sich die Muskeln anspannen, drücken sie die Venen zusammen und helfen dem Blut, zum Herzen zurückzukehren." }
      ],
      problems: [
        { title: "Krämpfe und Zerrungen", causes: "Anstrengung ohne Aufwärmen, zu wenig Wasser, Müdigkeit.", effects: "der Muskel verkrampft schmerzhaft oder wird verletzt; er braucht Ruhe.", prevent: "Aufwärmen und Dehnen, Wasser trinken, die Belastung nach und nach steigern." }
      ],
      fact: "Im Verhältnis zu seiner Größe ist der Kaumuskel der stärkste Muskel; er bewegt den Unterkiefer."
    },
    diaframma: {
      name: "Das Zwerchfell", label: "Zwerchfell",
      what: "<p>Es ist ein kuppelförmiger Muskel unter der Lunge. Er bewegt sich auf und ab und lässt so beim Atmen die Luft ein- und ausströmen.</p>",
      how: "<p>Das Zwerchfell trennt den Brustraum vom Bauchraum. Wenn du einatmest, <b>spannt</b> es sich an und senkt sich, der Brustkorb weitet sich und der Druck in der Lunge sinkt: Die Luft strömt ein. Wenn du ausatmest, <b>entspannt</b> es sich und steigt wieder nach oben, und die Luft strömt aus. Es arbeitet automatisch, in Ruhe etwa 12–20 Mal pro Minute, aber wir können es auch steuern (zum Singen oder um die Luft anzuhalten). Der Schluckauf ist eine plötzliche, unwillkürliche Zusammenziehung des Zwerchfells, die durch das Schließen der Stimmritze unterbrochen wird.</p>",
      links: [
        { to: "polmoni", text: "Wenn es sich senkt, füllt sich die Lunge mit Luft, wenn es steigt, drückt es sie hinaus." },
        { to: "costole", text: "Es arbeitet mit den Muskeln zwischen den Rippen zusammen, um den Brustkorb zu weiten." },
        { to: "stomaco", text: "Unter ihm, im Bauchraum, liegen Magen und Leber; bei jedem Atemzug bewegt es sich über ihnen." },
        { to: "nervi", text: "Der Zwerchfellnerv schickt ihm die Befehle zum Anspannen." }
      ],
      problems: [
        { title: "Schluckauf", causes: "zu hastiges Essen, kohlensäurehaltige Getränke, Lachen.", effects: "das Zwerchfell zieht sich ruckartig zusammen und macht das typische „Hick“; meist geht er von allein vorbei.", prevent: "langsam essen und gut kauen; wenn er stundenlang nicht aufhört, sprich mit einem Erwachsenen." }
      ],
      fact: "Das Zwerchfell arbeitet das ganze Leben lang ohne Pause, auch wenn du schläfst."
    },
    cervello: {
      name: "Das Gehirn", label: "Gehirn",
      what: "<p>Es ist die Kommandozentrale des Körpers. Es denkt, erinnert sich, lernt, fühlt Gefühle und steuert alles, was du tust, sogar wenn du schläfst.</p>",
      how: "<p>Es wiegt etwa 1,3–1,4 kg und enthält rund 86 Milliarden Nervenzellen, die <b>Neuronen</b>, die durch Billionen von Verbindungen (Synapsen) vernetzt sind. Der größte Teil, die <b>Großhirnrinde</b>, ist in zwei Hälften und in Lappen unterteilt: Sie verarbeitet Sehen, Hören, Bewegung, Sprache und Denken. Im Inneren liegen Bereiche, die Gefühle, Gedächtnis, Schlaf, Hunger und Durst steuern. Es verbraucht etwa 20 % der Energie des Körpers, obwohl es nur 2 % wiegt. Die Neuronen verständigen sich mit elektrischen Signalen und chemischen Stoffen, den Neurotransmittern.</p>",
      links: [
        { to: "midollo", text: "Es sendet und empfängt die Signale des Körpers über das Rückenmark." },
        { to: "cervelletto", text: "Das Kleinhirn unter ihm macht die Bewegungen präzise und koordiniert." },
        { to: "occhi", text: "Der hintere Lappen verwandelt die Signale der Augen in die Bilder, die du siehst." },
        { to: "cranio", text: "Der Schädel schützt es wie ein Helm." },
        { to: "tiroide", text: "Mit der Hirnanhangsdrüse, einer kleinen Drüse an seiner Basis, steuert es viele Hormondrüsen." }
      ],
      problems: [
        { title: "Kopfschmerzen", causes: "Müdigkeit, zu wenig Wasser, Anspannung, zu lange vor Bildschirmen.", effects: "Schmerzen im Kopf und Schwierigkeiten, sich zu konzentrieren.", prevent: "genug schlafen, Wasser trinken, Bildschirmpausen machen; wenn die Kopfschmerzen häufig sind, sprich mit einem Erwachsenen oder der Ärztin bzw. dem Arzt." },
        { title: "Zu wenig Schlaf", causes: "spät ins Bett gehen, abends Bildschirme.", effects: "weniger Aufmerksamkeit und Gedächtnis, mehr Gereiztheit; das Gehirn schafft es nicht, „aufzuräumen“.", prevent: "regelmäßige Zeiten, vor dem Schlafen keine Bildschirme, ein dunkles und ruhiges Zimmer." }
      ],
      fact: "Das Gehirn besteht zu etwa 75 % aus Wasser und hat keine Schmerzrezeptoren: Kopfschmerzen entstehen rund um das Gehirn."
    },
    cervelletto: {
      name: "Das Kleinhirn", label: "Kleinhirn",
      what: "<p>Es ist der Teil des Gehirns, der dir hilft, das Gleichgewicht zu halten und präzise Bewegungen zu machen, wie Fahrradfahren oder einen Ball fangen.</p>",
      how: "<p>Es liegt im hinteren, unteren Teil des Kopfes. Es wiegt etwa ein Zehntel des Gehirns, enthält aber mehr als die Hälfte seiner Neuronen. Es erhält Informationen von Muskeln, Gelenken, Innenohr (Gleichgewicht) und Augen, vergleicht sie mit den Bewegungen, die das Gehirn befohlen hat, und korrigiert Fehler in Echtzeit. Deshalb werden die Bewegungen mit Übung immer flüssiger und automatischer: Fahrradfahren zu lernen „trainiert“ das Kleinhirn.</p>",
      links: [
        { to: "cervello", text: "Es erhält vom Gehirn die Bewegungsbefehle und feilt an ihnen." },
        { to: "orecchie", text: "Das Innenohr sagt ihm, wie der Kopf geneigt ist, das hilft beim Gleichgewicht." },
        { to: "muscoli", text: "Es koordiniert die Muskeln, damit sie präzise zusammenarbeiten." },
        { to: "midollo", text: "Es tauscht über das Rückenmark Informationen mit dem Körper aus." }
      ],
      problems: [
        { title: "Schwindel und Gleichgewichtsverlust", causes: "Drehen um die eigene Achse, Müdigkeit, manchmal Erkrankungen des Innenohrs.", effects: "dir kommt es vor, als würde sich alles drehen, und du kannst dich kaum auf den Beinen halten.", prevent: "hinsetzen, bis es vorbeigeht; wenn es oft vorkommt, sprich mit einem Erwachsenen oder der Ärztin bzw. dem Arzt." }
      ],
      fact: "Nach vielen Drehungen um dich selbst entsteht der Schwindel, weil sich die Flüssigkeit im Ohr weiterbewegt."
    },
    midollo: {
      name: "Das Rückenmark", label: "Rückenmark",
      what: "<p>Es ist ein langer Nervenstrang in der Wirbelsäule. Es transportiert die Nachrichten zwischen dem Gehirn und dem Rest des Körpers, wie eine Autobahn.</p>",
      how: "<p>Es ist etwa 45 cm lang und verläuft vom Gehirn abwärts im Wirbelkanal. Aus ihm treten 31 Paar <b>Spinalnerven</b> aus. Es leitet <b>sensible</b> Signale (vom Körper zum Gehirn) und <b>motorische</b> Signale (vom Gehirn zu den Muskeln). Es kann auch <b>Reflexe</b> allein steuern: Wenn du etwas sehr Heißes berührst, erreicht das Signal das Rückenmark, das dem Muskel sofort befiehlt, sich zurückzuziehen, noch bevor das Gehirn den Schmerz „spürt“. Es ist durch Wirbel, Häute und Flüssigkeit geschützt.</p>",
      links: [
        { to: "cervello", text: "Es ist die Verbindung zwischen dem Gehirn und dem ganzen Körper." },
        { to: "nervi", text: "Aus dem Rückenmark treten die Spinalnerven aus, die Arme, Beine und Organe erreichen." },
        { to: "muscoli", text: "Die Bewegungsbefehle wandern vom Gehirn zum Rückenmark und dann zu den Muskeln." },
        { to: "colonna", text: "Die Wirbelsäule umhüllt und schützt es." }
      ],
      problems: [
        { title: "Schläge auf den Rücken", causes: "schwere Stürze oder Unfälle.", effects: "sie können das Rückenmark schädigen und zum Verlust von Gefühl oder Bewegung führen; deshalb ist es gut geschützt.", prevent: "Sicherheitsgurte, Helm, Vorsicht beim Springen in flaches Wasser und bei gefährlichen Sportarten." }
      ],
      fact: "Der Kniesehnenreflex (das Beinzucken, wenn die Ärztin oder der Arzt aufs Knie klopft) wird vom Rückenmark gesteuert, ohne über das Gehirn zu laufen."
    },
    nervi: {
      name: "Die Nerven", label: "Nerven",
      what: "<p>Die Nerven sind dünne „Kabel“, die Nachrichten durch den ganzen Körper tragen: Sie sagen dem Gehirn, was du spürst, und bringen den Muskeln den Bewegungsbefehl.</p>",
      how: "<p>Jeder Nerv ist ein Bündel aus Nervenfasern (Fortsätze der Neuronen, den <b>Axonen</b>). Viele sind von <b>Myelin</b> umhüllt, einer fetthaltigen Schicht, durch die die Signale mit über 100 m/s wandern. Es gibt <b>sensible</b>, <b>motorische</b> und gemischte Nerven. Zum peripheren Nervensystem gehört auch das <b>vegetative</b> System, das Herzschlag, Verdauung und Atmung regelt, ohne dass du daran denkst. Ein Signal geht über die Synapsen mithilfe chemischer Stoffe von einem Neuron zum nächsten.</p>",
      links: [
        { to: "midollo", text: "Die Spinalnerven gehen vom Rückenmark aus und verzweigen sich im Körper." },
        { to: "muscoli", text: "Die motorischen Nerven befehlen den Muskeln, sich anzuspannen." },
        { to: "pelle", text: "Die sensiblen Nerven bringen Berührung, Wärme, Kälte und Schmerz von der Haut zum Gehirn." },
        { to: "cuore", text: "Das vegetative System regelt den Rhythmus des Herzens automatisch." }
      ],
      problems: [
        { title: "Kribbeln durch falsche Haltung", causes: "lange in einer Position sitzen, Beine übereinandergeschlagen oder Ellbogen aufgestützt.", effects: "ein Nerv wird gedrückt und du spürst ein Kribbeln oder „eingeschlafene“ Beine.", prevent: "oft die Position wechseln und bewegen; meist geht es in wenigen Minuten vorbei." }
      ],
      fact: "Der Ischiasnerv im Bein ist der längste Nerv des Körpers."
    },
    occhi: {
      name: "Die Augen", label: "Augen",
      what: "<p>Mit den Augen siehst du Formen, Farben und Bewegungen. Sie fangen das Licht ein und verwandeln es in Signale für das Gehirn.</p>",
      how: "<p>Das Licht tritt durch die <b>Hornhaut</b> ein, geht durch die Pupille (die sich je nach Licht weitet oder verengt und von der Regenbogenhaut gesteuert wird) und die <b>Linse</b>, die das Bild auf der <b>Netzhaut</b> scharf stellt. Dort verwandeln die <b>Zapfen</b> (etwa 6 Millionen, für die Farben) und die <b>Stäbchen</b> (etwa 120 Millionen, für schwaches Licht) das Licht in elektrische Signale. Der <b>Sehnerv</b> leitet sie zum Gehirn, das das Bild aufrichtet (auf der Netzhaut steht es auf dem Kopf) und deutet. Lider und Tränen halten das Auge sauber.</p>",
      links: [
        { to: "cervello", text: "Der Sehnerv bringt die Signale zum Gehirn, das sie in Bilder verwandelt." },
        { to: "cranio", text: "Die Augenhöhlen des Schädels schützen die Augen." },
        { to: "muscoli", text: "Sechs kleine Muskeln pro Auge bewegen sie in alle Richtungen." },
        { to: "naso", text: "Die Tränen fließen durch kleine Kanäle in den Augenwinkeln bis zur Nase: Deshalb läuft dir beim Weinen die Nase." }
      ],
      problems: [
        { title: "Kurzsichtigkeit und müde Augen", causes: "zu viel Zeit nah an Bildschirmen und Büchern, wenig Zeit im Freien, manchmal auch Vererbung.", effects: "weit entfernte Dinge wirken unscharf, die Augen ermüden und tun weh.", prevent: "Bildschirmpausen (schau alle 20 Minuten in die Ferne), gutes Licht, Spielen im Freien; wenn du unscharf siehst, sprich mit einem Erwachsenen über eine Untersuchung." }
      ],
      fact: "Wir blinzeln etwa 15–20 Mal pro Minute, um das Auge zu befeuchten."
    },
    orecchie: {
      name: "Die Ohren", label: "Ohren",
      what: "<p>Mit den Ohren hörst du Geräusche. Aber nicht nur das: Im Ohr steckt auch das Geheimnis deines Gleichgewichts.</p>",
      how: "<p>Die Ohrmuschel fängt die Geräusche auf und leitet sie durch den Gehörgang bis zum <b>Trommelfell</b>, einer Haut, die schwingt. Die Schwingung geht auf drei Gehörknöchelchen (Hammer, Amboss und Steigbügel) im Mittelohr über, die sie verstärken. Im Innenohr verwandelt die <b>Schnecke</b>, ein spiralförmiger, mit Flüssigkeit gefüllter Gang, die Schwingungen in Nervensignale, die an das Gehirn gehen. Daneben liegen die <b>Bogengänge</b>, die Kopfbewegungen wahrnehmen und beim Gleichgewicht helfen. Die Ohrtrompete verbindet das Ohr mit dem Rachen und gleicht den Druck aus.</p>",
      links: [
        { to: "cervello", text: "Der Hörnerv bringt die Geräusche zum Gehirn, das sie erkennt." },
        { to: "cervelletto", text: "Die Informationen der Bogengänge helfen dem Kleinhirn, das Gleichgewicht zu halten." },
        { to: "naso", text: "Die Ohrtrompete verbindet das Mittelohr mit Nase und Rachen; deshalb kann ein Schnupfen Ohrenschmerzen verursachen." }
      ],
      problems: [
        { title: "Mittelohrentzündung", causes: "ein Schnupfen, der bis ins Mittelohr gelangt.", effects: "Ohrenschmerzen und gedämpftes Hören für ein paar Tage.", prevent: "die Nase vorsichtig putzen, Hände waschen; wenn du Schmerzen im Ohr spürst, sag es einem Erwachsenen." },
        { title: "Zu laute Geräusche", causes: "Musik in hoher Lautstärke, besonders mit Kopfhörern.", effects: "die Zellen im Innenohr können geschädigt werden und das Gehör wird schwächer.", prevent: "mäßige Lautstärke, Pausen von den Kopfhörern, die Ohren an sehr lauten Orten schützen." }
      ],
      fact: "Die drei Gehörknöchelchen sind die kleinsten Knochen des Körpers: Der Steigbügel ist etwa 3 mm lang."
    },
    naso: {
      name: "Die Nase", label: "Nase",
      what: "<p>Die Nase lässt die Luft herein, wärmt und reinigt sie und lässt dich Gerüche wahrnehmen.</p>",
      how: "<p>Die Luft strömt durch die <b>Nasenhöhlen</b>, die mit Schleim und Härchen ausgekleidet sind, die Staub und Keime zurückhalten, und wird erwärmt und befeuchtet, bevor sie in die Lunge gelangt. Oben erkennt ein kleines Gewebe mit Millionen von <b>Riechzellen</b> die Moleküle der Gerüche und schickt Signale zum Gehirn. Geschmack und Geruch arbeiten zusammen: Mit verstopfter Nase wirken die Geschmäcke viel schwächer. Die Nase ist über kleine Kanäle mit Ohren und Augen verbunden.</p>",
      links: [
        { to: "trachea", text: "Die saubere, warme Luft strömt von der Nase in die Luftröhre." },
        { to: "lingua", text: "Geruch und Geschmack arbeiten zusammen: Ein großer Teil des Geschmacks der Speisen ist in Wirklichkeit Geruch." },
        { to: "cervello", text: "Der Riechnerv bringt die Gerüche zum Gehirn, die auch mit Gefühlen und Erinnerungen verbunden sind." },
        { to: "occhi", text: "Die Tränen gelangen durch die Tränenkanäle von den Augen in die Nase." }
      ],
      problems: [
        { title: "Schnupfen", causes: "Viren, die sich durch Niesen und ungewaschene Hände verbreiten.", effects: "verstopfte oder laufende Nase und für ein paar Tage weniger Geruch und Geschmack.", prevent: "oft Hände waschen, Einwegtaschentücher benutzen, in die Armbeuge niesen, gut schlafen und essen." },
        { title: "Pollenallergie", causes: "das Immunsystem reagiert auf Pollen.", effects: "Niesen, juckende Nase und gerötete Augen im Frühling.", prevent: "wenn es jedes Jahr passiert, sprich mit einem Erwachsenen und mit der Ärztin bzw. dem Arzt." }
      ],
      fact: "Wir können Tausende verschiedener Gerüche erkennen, und der Geruchssinn ist der Sinn, der am stärksten mit Erinnerungen verbunden ist."
    },
    lingua: {
      name: "Die Zunge", label: "Zunge",
      what: "<p>Die Zunge schmeckt, mischt die Nahrung beim Kauen und hilft dir beim Sprechen.</p>",
      how: "<p>Sie ist ein Muskel, der von kleinen Erhebungen bedeckt ist, den <b>Geschmackspapillen</b>, mit Tausenden von Geschmacksknospen, die die Grundgeschmäcker erkennen: süß, salzig, sauer, bitter und umami. Beim Kauen schiebt sie die Nahrung zwischen die Zähne, mischt sie mit dem <b>Speichel</b> (der ein Enzym, die Amylase, enthält, das die Verdauung der Stärke beginnt) und formt den <b>Bissen</b>, den sie dann zum Schlucken Richtung Rachen schiebt. Weil sie sich sehr präzise bewegt, können wir auch Wörter aussprechen.</p>",
      links: [
        { to: "esofago", text: "Sie schiebt den Bissen zum Rachen und dann in die Speiseröhre." },
        { to: "naso", text: "Zusammen mit der Nase lässt sie dich den vollständigen Geschmack der Speisen erkennen." },
        { to: "cervello", text: "Die Nerven bringen die Informationen über die Geschmäcke zum Gehirn." }
      ],
      problems: [
        { title: "Karies und ungepflegter Mund", causes: "Zucker und mangelhafte Zahnpflege; die Bakterien im Mund bilden Säuren.", effects: "die Zähne werden geschädigt und man kann Mundgeruch bekommen.", prevent: "Zähne nach den Mahlzeiten und abends putzen, wenig Süßes und zuckerhaltige Getränke, Besuche beim Zahnarzt." }
      ],
      fact: "Jede Zunge hat ein einzigartiges Muster, wie Fingerabdrücke."
    },
    cuore: {
      name: "Das Herz", label: "Herz",
      what: "<p>Das Herz ist eine Muskelpumpe, so groß wie deine Faust. Es schlägt dein ganzes Leben lang, um das Blut durch den ganzen Körper zu treiben.</p>",
      how: "<p>Es ist ein Muskel mit vier Hohlräumen: zwei <b>Vorhöfen</b> (die das Blut aufnehmen) und zwei <b>Herzkammern</b> (die es hinauspumpen), getrennt durch Klappen, die das Blut nur in eine Richtung strömen lassen. Die rechte Seite schickt das Blut zur Lunge (Lungenkreislauf), die linke zum ganzen Körper (Körperkreislauf). In Ruhe schlägt es 60–100 Mal pro Minute, etwa 100.000 Mal am Tag, und pumpt rund 5 Liter Blut pro Minute. Der Herzschlag wird von einer Gruppe von Zellen, dem natürlichen Schrittmacher, gesteuert und wird bei Anstrengung schneller.</p>",
      links: [
        { to: "polmoni", text: "Die rechte Seite schickt das sauerstoffarme Blut zur Lunge (Lungenkreislauf); es kommt mit Sauerstoff angereichert zurück." },
        { to: "arterie", text: "Aus der linken Herzkammer strömt das sauerstoffreiche Blut in die Aorta und in die Arterien." },
        { to: "vene", text: "Die Venen bringen das Blut zum Herzen zurück, das seinen Sauerstoff schon abgegeben hat." },
        { to: "nervi", text: "Das vegetative Nervensystem beschleunigt oder verlangsamt den Herzschlag." }
      ],
      problems: [
        { title: "Herzinfarkt und Herzkrankheiten", causes: "Rauchen, hohes Cholesterin, hoher Blutdruck, Bewegungsmangel, falsche Ernährung (vor allem bei Erwachsenen).", effects: "ein Teil des Herzens bekommt weniger Blut und Sauerstoff und kann nur mühsam pumpen, und der ganze Körper kann darunter leiden.", prevent: "jeden Tag bewegen, Obst, Gemüse und wenig Salz essen, nicht rauchen, gut schlafen." }
      ],
      fact: "Das Herz beginnt schon etwa 3 Wochen nach der Empfängnis zu schlagen und hört nie wieder auf."
    },
    arterie: {
      name: "Die Arterien", label: "Arterien",
      what: "<p>Die Arterien sind die Röhren, die das sauerstoffreiche Blut vom Herzen in alle Teile des Körpers bringen.</p>",
      how: "<p>Sie haben dicke, elastische Wände und halten dem Druck des vom Herzen getriebenen Bluts stand. Die größte, die <b>Aorta</b>, hat einen Durchmesser von etwa 2–3 cm und verzweigt sich in immer kleinere Arterien bis zu den hauchdünnen <b>Kapillaren</b>, in denen der Austausch mit den Zellen stattfindet. Der „Schlag“, den du am Handgelenk spürst, ist die Druckwelle, die sich bei jedem Herzschlag in den Arterien ausbreitet. Der <b>Blutdruck</b> wird mit zwei Werten gemessen: dem oberen (Herz zusammengezogen) und dem unteren (Herz entspannt). Die Lungenarterien sind eine Ausnahme: Sie bringen sauerstoffarmes Blut zur Lunge.</p>",
      links: [
        { to: "cuore", text: "Sie beginnen am Herzen, das sie bei jedem Schlag mit Blut füllt." },
        { to: "vene", text: "Nach den Kapillaren erreicht das Blut die Venen und kehrt zum Herzen zurück." },
        { to: "reni", text: "Die Nierenarterien bringen das Blut zum Filtern in die Nieren." },
        { to: "cervello", text: "Die Halsarterien bringen dem Gehirn den Sauerstoff, den es dringend braucht." }
      ],
      problems: [
        { title: "Hoher Blutdruck", causes: "zu viel Salz, wenig Bewegung, Übergewicht, Rauchen.", effects: "die Arterienwände stehen unter Belastung und das Herz arbeitet mehr, mit der Zeit können daraus Probleme entstehen.", prevent: "wenig Salz, viel Obst und Gemüse, Bewegung, nicht rauchen; die Ärztin bzw. der Arzt kontrolliert den Blutdruck." }
      ],
      fact: "Würdest du alle Blutgefäße aneinanderreihen, kämst du auf etwa 100.000 km, mehr als zweimal um die Erde."
    },
    vene: {
      name: "Die Venen", label: "Venen",
      what: "<p>Die Venen bringen das Blut zum Herzen zurück, nachdem es den Sauerstoff abgeliefert und Abfallstoffe aufgenommen hat.</p>",
      how: "<p>Sie haben dünnere Wände als die Arterien und einen niedrigeren Druck. In den Beinvenen gibt es taschenförmige <b>Klappen</b>, die verhindern, dass das Blut zurück nach unten fließt. Der Rückfluss zum Herzen wird durch die <b>Muskeln</b> unterstützt, die beim Anspannen die Venen zusammendrücken, und durch die Atembewegung. Die zwei größten Venen, die obere und die untere Hohlvene, führen das Blut in den rechten Vorhof. Die Lungenvenen sind eine Ausnahme: Sie bringen sauerstoffreiches Blut von der Lunge zum Herzen. Die bläuliche Farbe der Venen unter der Haut ist ein optischer Effekt.</p>",
      links: [
        { to: "cuore", text: "Die Hohlvenen führen das Blut in den rechten Vorhof des Herzens." },
        { to: "muscoli", text: "Die Beinmuskeln pressen beim Anspannen das Blut nach oben Richtung Herz." },
        { to: "intestino_tenue", text: "Vom Darm bringt eine besondere Vene die Nährstoffe zur Leber." },
        { to: "polmoni", text: "Die Lungenvenen bringen das sauerstoffreiche Blut zum Herzen zurück." }
      ],
      problems: [
        { title: "Schwere Beine", causes: "lange stillstehen oder sitzen, wenig Durchblutung.", effects: "das Blut staut sich in den Beinen und sie fühlen sich geschwollen und müde an.", prevent: "oft bewegen, Pausen machen, gehen, die Beine nicht stundenlang stillhalten." }
      ],
      fact: "In den Venen befinden sich zu jedem Zeitpunkt etwa 60–70 % des Bluts im Körper."
    },
    trachea: {
      name: "Die Luftröhre", label: "Luftröhre",
      what: "<p>Die Luftröhre ist der Schlauch, der die Luft vom Rachen zur Lunge bringt. Sie hat Knorpelringe, die sie offen halten.</p>",
      how: "<p>Sie ist etwa 10–12 cm lang und besteht aus 16–20 „C“-förmigen Knorpelringen, die sie immer offen halten, und ist innen mit Zellen mit winzigen Flimmerhärchen und Schleim ausgekleidet. Der Schleim fängt Staub und Keime ein und die Flimmerhärchen schieben ihn zum Rachen, wo er verschluckt oder durch Husten ausgestoßen wird. Unten teilt sie sich in zwei <b>Bronchien</b>, eine für jeden Lungenflügel, die sich in immer kleinere Röhrchen (Bronchiolen) verzweigen. Darüber enthält der <b>Kehlkopf</b> die Stimmbänder, und der <b>Kehldeckel</b> verschließt die Luftröhre, wenn du schluckst.</p>",
      links: [
        { to: "naso", text: "Sie erhält die Luft von Nase und Mund, schon erwärmt und gereinigt." },
        { to: "polmoni", text: "Sie teilt sich in die zwei Bronchien, die die Luft in die Lunge bringen." },
        { to: "esofago", text: "Sie verläuft vor der Speiseröhre; der Kehldeckel verschließt sie beim Schlucken, damit keine Nahrung hineingelangt." }
      ],
      problems: [
        { title: "Husten und Bronchitis", causes: "Viren, Rauchen, verschmutzte Luft.", effects: "der Schleim nimmt zu, der Hals ist gereizt und der Husten versucht, die Atemwege zu reinigen.", prevent: "Rauch meiden, auch passiv, Hände waschen, lüften; wenn der Husten anhält, sprich mit einem Erwachsenen oder der Ärztin bzw. dem Arzt." }
      ],
      fact: "Ein Hustenstoß kann die Luft mit mehreren Dutzend Metern pro Sekunde hinausschleudern."
    },
    polmoni: {
      name: "Die Lunge", label: "Lunge",
      what: "<p>Die Lunge besteht aus zwei großen „Schwämmen“, die den Sauerstoff aus der Luft nehmen und ins Blut schicken und das Kohlendioxid hinauslassen.</p>",
      how: "<p>In der Lunge verzweigen sich die Bronchien in Tausende von Bronchiolen, die in etwa 300–500 Millionen <b>Lungenbläschen</b> (Alveolen) enden, winzigen Säckchen, die von Kapillaren umgeben sind. Ihre Wände sind hauchdünn: Der Sauerstoff geht ins Blut über und das Kohlendioxid vom Blut in die Luft, durch <b>Diffusion</b>. Insgesamt ist die Oberfläche der Lungenbläschen etwa so groß wie ein halbes Tennisfeld (50–70 m²). Der rechte Lungenflügel hat drei Lappen, der linke zwei, um Platz für das Herz zu lassen. In Ruhe atmen wir 12–20 Mal pro Minute.</p>",
      links: [
        { to: "cuore", text: "Das Herz schickt das sauerstoffarme Blut zur Lunge und erhält es mit Sauerstoff angereichert zurück." },
        { to: "diaframma", text: "Das Zwerchfell lässt sie bei jedem Atemzug aufblähen und wieder zusammenfallen." },
        { to: "trachea", text: "Die Luft kommt über die Luftröhre und die Bronchien an." },
        { to: "costole", text: "Die Rippen schützen sie wie ein Käfig." },
        { to: "vene", text: "Aus den Lungenvenen fließt das sauerstoffreiche Blut zum Herzen." }
      ],
      problems: [
        { title: "Asthma", causes: "Allergien, Infektionen, kalte Luft oder Rauch können die Bronchien verengen.", effects: "Atemnot, Husten und Pfeifen beim Atmen, weil die Luft nur mühsam hindurchkommt.", prevent: "Rauch und Staub meiden, bei Asthma die Anweisungen der Ärztin bzw. des Arztes befolgen und die Medikamente immer dabeihaben." },
        { title: "Lungenentzündung", causes: "Infektionen durch Viren oder Bakterien.", effects: "die Lungenbläschen füllen sich mit Flüssigkeit und es geht weniger Sauerstoff ins Blut; sie braucht ärztliche Behandlung.", prevent: "Impfungen, Hände waschen, nicht rauchen, gut schlafen und essen." }
      ],
      fact: "Nebeneinander ausgebreitet würden die Lungenbläschen eine Fläche bedecken, die viele Dutzend Mal größer ist als deine Haut."
    },
    esofago: {
      name: "Die Speiseröhre", label: "Speiseröhre",
      what: "<p>Die Speiseröhre ist der Schlauch, der die Nahrung vom Rachen zum Magen bringt. Sie funktioniert sogar im Kopfstand!</p>",
      how: "<p>Sie ist etwa 25 cm lang. Ihre Muskelwände ziehen sich in Wellen zusammen, der <b>Peristaltik</b>, die die Nahrung nach unten schieben, ohne dass die Schwerkraft nötig ist. Am Anfang und am Ende gibt es zwei Muskel-„Ventile“ (Schließmuskeln): Der untere öffnet sich, um die Nahrung in den Magen zu lassen, und schließt sich dann, damit sie nicht wieder hochkommt. Wenn der saure Magensaft ein bisschen aufsteigt, spürt man das Brennen, das man „Sodbrennen“ nennt.</p>",
      links: [
        { to: "lingua", text: "Sie nimmt die gekaute Nahrung auf, die die Zunge zum Rachen schiebt." },
        { to: "stomaco", text: "Unten mündet sie in den Magen, wo die Nahrung verdaut wird." },
        { to: "trachea", text: "Sie verläuft hinter der Luftröhre: Wenn du schluckst, verschließt der Kehldeckel diese." },
        { to: "diaframma", text: "Sie durchquert das Zwerchfell, um in den Bauchraum zu gelangen." }
      ],
      problems: [
        { title: "Sodbrennen", causes: "reichliche oder sehr fettige Mahlzeiten, hastiges Essen, kohlensäurehaltige Getränke.", effects: "ein brennendes Gefühl hinter dem Brustbein, wenn etwas Säure aufsteigt.", prevent: "langsam essen, mäßige Portionen, nicht direkt nach dem Abendessen ins Bett gehen; wenn es oft vorkommt, sprich mit einem Erwachsenen oder der Ärztin bzw. dem Arzt." }
      ],
      fact: "Die Nahrung rutscht in wenigen Sekunden durch die Speiseröhre nach unten."
    },
    stomaco: {
      name: "Der Magen", label: "Magen",
      what: "<p>Der Magen ist ein Muskelsack, der die Nahrung mit besonderen Säften vermischt und zu einem Brei macht.</p>",
      how: "<p>Er fasst etwa 1–1,5 Liter. Seine Muskelwände kneten die Nahrung 2–4 Stunden lang und mischen sie mit dem <b>Magensaft</b>, der reich an Salzsäure (die viele Keime abtötet) und an Enzymen wie dem Pepsin ist, die die Verdauung der Eiweiße beginnen. Eine Schleimschicht schützt die Wand vor der Säure. Das Ergebnis ist der <b>Speisebrei</b>, der in kleinen Portionen durch ein Ventil, den Magenausgang (Pylorus), in den Dünndarm übergeht.</p>",
      links: [
        { to: "esofago", text: "Er erhält die Nahrung aus der Speiseröhre." },
        { to: "intestino_tenue", text: "Der Speisebrei geht in kleinen Portionen in den Dünndarm über." },
        { to: "fegato", text: "Er liegt neben der Leber, die die Galle bereitet, die in den späteren Phasen der Verdauung gebraucht wird." },
        { to: "nervi", text: "Die Nerven sagen dem Magen, wann er arbeiten soll, und senden das Hungergefühl." }
      ],
      problems: [
        { title: "Bauchschmerzen und Magenschleimhautentzündung", causes: "zu hastiges Essen, zu viel Essen, Stress, Infektionen.", effects: "Schmerzen oder Brennen und Übelkeit, die Verdauung fällt schwerer.", prevent: "in Ruhe essen, zu regelmäßigen Zeiten, Übermaß an fettigen oder scharfen Speisen vermeiden; wenn der Schmerz anhält, sprich mit einem Erwachsenen oder der Ärztin bzw. dem Arzt." }
      ],
      fact: "Die Magenschleimhaut erneuert sich alle paar Tage, so schadet ihr die Säure nicht."
    },
    fegato: {
      name: "Die Leber", label: "Leber",
      what: "<p>Die Leber ist die große „Fabrik“ des Körpers: Sie reinigt das Blut, speichert Energie und bereitet Stoffe vor, die bei der Verdauung nützlich sind.</p>",
      how: "<p>Sie ist das größte innere Organ (etwa 1,5 kg) und erfüllt über 500 Aufgaben. Sie erhält vom Darm über die <b>Pfortader</b> das nährstoffreiche Blut: Sie verarbeitet die Nährstoffe, speichert Zucker in Form von <b>Glykogen</b> und gibt ihn wieder ab, wenn er gebraucht wird. Sie macht manche Stoffe (wie Medikamente) weniger schädlich, bildet Bluteiweiße und die <b>Galle</b>, die bei der Verdauung der Fette hilft. Sie kann sich nach einer Schädigung erneuern: Ein verlorener Teil kann nachwachsen.</p>",
      links: [
        { to: "cistifellea", text: "Die von der Leber gebildete Galle wird in der Gallenblase gespeichert." },
        { to: "intestino_tenue", text: "Sie erhält vom Darm die aufgenommenen Nährstoffe und schickt die Galle in den Darm." },
        { to: "pancreas", text: "Bauchspeicheldrüse und Leber regeln gemeinsam die Zuckermenge im Blut." },
        { to: "vene", text: "Die Pfortader und die Hohlvene führen das Blut in die Leber hinein und wieder hinaus." }
      ],
      problems: [
        { title: "Überlastete Leber", causes: "zu viele fettige und süße Speisen, wenig Bewegung, Alkohol (bei Erwachsenen), manche ohne Kontrolle eingenommene Medikamente.", effects: "die Leber hat es schwerer zu arbeiten und das Fett sammelt sich an; mit der Zeit kann sie Schaden nehmen.", prevent: "abwechslungsreich essen, bewegen, Medikamente nur mit einem Erwachsenen nehmen, kein Alkohol für Kinder und Jugendliche." }
      ],
      fact: "Die Leber ist das einzige innere Organ, das sich zu einem großen Teil erneuern kann."
    },
    cistifellea: {
      name: "Die Gallenblase", label: "Gallenblase",
      what: "<p>Sie ist ein kleiner Beutel unter der Leber, in dem die Galle aufbewahrt wird, die Flüssigkeit, die bei der Verdauung der Fette hilft.</p>",
      how: "<p>Sie hat die Form einer kleinen Birne und ist etwa 8–10 cm lang. Die Galle wird von der Leber ständig gebildet und gelangt in die Gallenblase, die sie <b>eindickt</b>, indem sie Wasser entzieht. Wenn du fettreiche Speisen isst, lässt ein Hormon die Gallenblase sich zusammenziehen, und sie presst die Galle in den <b>Zwölffingerdarm</b> (den ersten Abschnitt des Dünndarms). Die Galle wirkt wie ein Spülmittel: Sie zerlegt die Fette in winzige Tröpfchen, sodass die Enzyme sie angreifen können. Man kann auch ohne Gallenblase leben.</p>",
      links: [
        { to: "fegato", text: "Sie speichert die von der Leber gebildete Galle." },
        { to: "intestino_tenue", text: "Sie gibt die Galle in den Zwölffingerdarm ab, wenn sie zur Fettverdauung gebraucht wird." },
        { to: "pancreas", text: "Ihr Gang vereinigt sich mit dem der Bauchspeicheldrüse, bevor er in den Zwölffingerdarm mündet." }
      ],
      problems: [
        { title: "Gallensteine", causes: "zu cholesterinreiche Galle, fettige Ernährung, Übergewicht (eher bei Erwachsenen).", effects: "kleine „Steinchen“ können den Gang blockieren und nach dem Essen Schmerzen verursachen.", prevent: "abwechslungsreiche Ernährung mit Ballaststoffen, Bewegung, radikale Diäten vermeiden; bei starken Bauchschmerzen sag sofort einem Erwachsenen Bescheid." }
      ],
      fact: "Die Galle ist grüngelb und gibt dem Stuhl seine typische braune Farbe."
    },
    pancreas: {
      name: "Die Bauchspeicheldrüse", label: "Bauchspeicheldrüse",
      what: "<p>Die Bauchspeicheldrüse hat zwei Aufgaben: Sie bildet Säfte zur Verdauung der Nahrung und ein Hormon, das Insulin, das den Zucker im Blut regelt.</p>",
      how: "<p>Sie ist eine etwa 15 cm lange Drüse hinter dem Magen. Als <b>exokrine</b> Drüse bildet sie den Bauchspeichel, der reich an Enzymen ist, die Zucker, Eiweiße und Fette verdauen, und an Bikarbonat, das die Magensäure neutralisiert; sie schickt ihn in den Zwölffingerdarm. Als <b>endokrine</b> Drüse bilden die „Langerhans-Inseln“ zwei gegensätzliche Hormone: das <b>Insulin</b> (senkt den Blutzucker, indem es den Zucker in die Zellen lässt) und das <b>Glukagon</b> (erhöht ihn, indem es den in der Leber gespeicherten Zucker freisetzt).</p>",
      links: [
        { to: "intestino_tenue", text: "Sie gibt die Enzyme, die die Nahrung verdauen, in den Zwölffingerdarm ab." },
        { to: "fegato", text: "Insulin und Glukagon sagen der Leber, wann sie Zucker speichern oder freisetzen soll." },
        { to: "stomaco", text: "Sie liegt hinter dem Magen und neutralisiert die von dort kommende Säure." },
        { to: "muscoli", text: "Dank des Insulins nehmen die Muskeln den Zucker aus dem Blut auf, den sie zum Arbeiten brauchen." }
      ],
      problems: [
        { title: "Diabetes", causes: "der Körper bildet zu wenig Insulin oder nutzt es nicht gut; es gibt verschiedene Formen, einige auch mit Übergewicht und Bewegungsmangel verbunden.", effects: "der Zucker bleibt im Blut hoch, mit Durst, Müdigkeit und mit der Zeit Schäden an anderen Organen wie Augen und Nieren.", prevent: "ausgewogene Ernährung, wenig zuckerhaltige Getränke, Bewegung; wer Diabetes hat, wird gemeinsam mit der Ärztin bzw. dem Arzt behandelt." }
      ],
      fact: "Die Langerhans-Inseln machen nur 1–2 % der Bauchspeicheldrüse aus, aber ohne Insulin könnten die Zellen den Zucker nicht verwerten."
    },
    intestino_tenue: {
      name: "Der Dünndarm", label: "Dünndarm",
      what: "<p>Er ist der lange, im Bauch zusammengelegte Schlauch, in dem die Nahrung fertig verdaut wird und die Nährstoffe ins Blut übergehen.</p>",
      how: "<p>Er ist etwa 6–7 Meter lang und in Zwölffingerdarm, Leerdarm und Krummdarm unterteilt. Hier treffen Bauchspeichel, Galle und Darmsäfte ein, die Kohlenhydrate in einfache Zucker, Eiweiße in Aminosäuren und Fette in Fettsäuren zerlegen. Die Wand ist voller Falten und winziger Erhebungen, den <b>Zotten</b>, die die Aufnahmefläche auf etwa 30 m² vergrößern (mehr als ein großes Wohnzimmer). Zucker und Aminosäuren gehen in die Kapillaren über, die sie mit der Pfortader zur Leber bringen; die Fette gehen in die Lymphgefäße über.</p>",
      links: [
        { to: "stomaco", text: "Er erhält vom Magen den Speisebrei in kleinen Portionen." },
        { to: "pancreas", text: "Die Bauchspeicheldrüse schickt ihm die Enzyme, um die Verdauung abzuschließen." },
        { to: "cistifellea", text: "Die Galle aus der Gallenblase hilft bei der Verdauung der Fette." },
        { to: "intestino_crasso", text: "Was nicht aufgenommen wird, geht in den Dickdarm über." },
        { to: "vene", text: "Die aufgenommenen Nährstoffe gelangen ins Blut und erreichen die Leber." }
      ],
      problems: [
        { title: "Unverträglichkeiten und Nahrungsmittelallergien", causes: "der Körper verdaut einen Stoff (wie Laktose) nicht gut oder das Immunsystem reagiert auf ein Nahrungsmittel.", effects: "Blähungen, Bauchschmerzen, Durchfall, manchmal andere Beschwerden.", prevent: "wenn dir ein Essen oft schlecht bekommt, sprich mit einem Erwachsenen und mit der Ärztin bzw. dem Arzt, die oder der sagt, was zu tun ist." },
        { title: "Magen-Darm-Infekt", causes: "Viren oder Bakterien von schmutzigen Händen oder schlecht aufbewahrten Speisen.", effects: "Durchfall, Erbrechen, Bauchschmerzen und Wasserverlust.", prevent: "vor dem Essen Hände waschen, Obst und Gemüse waschen, Speisen richtig aufbewahren, Wasser trinken." }
      ],
      fact: "Dank der Falten und Zotten ist die Oberfläche des Dünndarms viel größer, als der Schlauch vermuten lässt."
    },
    intestino_crasso: {
      name: "Der Dickdarm", label: "Dickdarm",
      what: "<p>Er ist der letzte Abschnitt der Verdauung: Er holt das Wasser aus der Nahrung zurück, die nicht mehr gebraucht wird, und bereitet die Abfälle zur Ausscheidung vor.</p>",
      how: "<p>Er ist etwa 1,5 Meter lang und weiter als der Dünndarm. Er umfasst den <b>Blinddarm</b> (mit dem Wurmfortsatz), den <b>Grimmdarm</b> (Kolon) und den <b>Mastdarm</b>. Hier werden Wasser und Salze wieder aufgenommen, sodass die Reste fester werden, der <b>Stuhl</b>. Dort leben Milliarden nützlicher Bakterien, das <b>Mikrobiom</b>, die Ballaststoffe verdauen, einige Vitamine (wie K) bilden und vor schädlichen Bakterien schützen. Der Stuhl bleibt im Mastdarm, bis er ausgeschieden wird. Die Passage durch das gesamte Verdauungssystem dauert etwa 1 bis 3 Tage.</p>",
      links: [
        { to: "intestino_tenue", text: "Er erhält vom Dünndarm die unverdaulichen und noch sehr wässrigen Reste." },
        { to: "reni", text: "Zusammen mit den Nieren hilft er dem Körper, den Wasserhaushalt im Gleichgewicht zu halten." },
        { to: "vene", text: "Das zurückgewonnene Wasser und einige Vitamine gehen ins Blut über." }
      ],
      problems: [
        { title: "Verstopfung", causes: "wenig Ballaststoffe, wenig Wasser, wenig Bewegung, den Toilettengang unterdrücken.", effects: "der Stuhl wird hart und das Kacken ist mühsam und tut weh.", prevent: "Obst, Gemüse, Vollkornprodukte, Wasser trinken, bewegen, zur Toilette gehen, wenn es nötig ist." }
      ],
      fact: "Im Darm leben mehr Bakterien als Zellen im ganzen restlichen Körper."
    },
    reni: {
      name: "Die Nieren", label: "Nieren",
      what: "<p>Die Nieren sind zwei bohnenförmige Organe, die das Blut reinigen und den Urin bilden.</p>",
      how: "<p>Jede Niere ist so groß wie eine Faust und enthält etwa eine Million Filter, die <b>Nephrone</b>. Jeden Tag werden etwa 180 Liter Blutplasma gefiltert, aber fast alles kehrt ins Blut zurück: Die Nieren nehmen Wasser und nützliche Stoffe wieder auf und lassen nur etwa 1,5 Liter <b>Urin</b> austreten, mit Abfallstoffen wie Harnstoff und überschüssigem Salz. So regeln sie Wassermenge, Salz und Blutdruck. Sie bilden auch ein Hormon, das <b>Erythropoetin</b>, das das Knochenmark anregt, rote Blutkörperchen zu bilden.</p>",
      links: [
        { to: "vescica", text: "Der Urin fließt über die zwei Harnleiter von den Nieren in die Blase." },
        { to: "arterie", text: "Die Nierenarterien bringen das Blut zum Filtern, die Venen bringen es sauber zurück." },
        { to: "surrenali", text: "Auf jeder Niere sitzt eine Nebenniere." },
        { to: "cuore", text: "Die Nieren steuern das Blutvolumen und helfen so dem Herzen, den Blutdruck zu regeln." }
      ],
      problems: [
        { title: "Harnwegsinfekte und Nierensteine", causes: "wenig Wasser, mangelnde Hygiene, manchmal Salze, die sich ansammeln.", effects: "Brennen beim Pinkeln oder Schmerzen in der Flanke; die Nieren arbeiten schlechter.", prevent: "über den Tag Wasser trinken, wenig Salz, zur Toilette gehen, ohne sich zurückzuhalten; wenn es brennt, sag es einem Erwachsenen." }
      ],
      fact: "Die Nieren filtern das gesamte Blut des Körpers an einem Tag viele Male."
    },
    vescica: {
      name: "Die Blase", label: "Blase",
      what: "<p>Die Blase ist ein elastischer Beutel, in dem sich der Urin sammelt, bis du zur Toilette gehst.</p>",
      how: "<p>Sie ist ein muskulöses Hohlorgan. Der Urin kommt über die Harnleiter von den Nieren und sammelt sich an: Die Blase eines Erwachsenen kann etwa einen halben Liter aufnehmen. Wenn sie voll ist, senden Rezeptoren in der Wand ein Signal an das Gehirn und du spürst den Drang. Zwei Schließmuskeln halten sie verschlossen: einer arbeitet automatisch, den anderen steuern wir selbst. Wenn du dich entscheidest, zur Toilette zu gehen, zieht sich der Wandmuskel zusammen, der Schließmuskel entspannt sich und der Urin fließt durch die <b>Harnröhre</b> ab. Kinder lernen in den ersten Lebensjahren, die Blase zu kontrollieren.</p>",
      links: [
        { to: "reni", text: "Sie erhält den von den Nieren gebildeten Urin." },
        { to: "bacino", text: "Sie liegt sicher in der Schale des Beckens." },
        { to: "nervi", text: "Die Nerven melden dem Gehirn, wenn sie voll ist, und koordinieren das Entleeren." }
      ],
      problems: [
        { title: "Blasenentzündung", causes: "Bakterien, die von der Harnröhre aufsteigen, wenig Wasser, zu langes Zurückhalten.", effects: "Brennen und häufiger Drang zu pinkeln.", prevent: "Wasser trinken, den Urin nicht zu lange zurückhalten, Körperhygiene; wenn es brennt, sag es einem Erwachsenen oder der Ärztin bzw. dem Arzt." }
      ],
      fact: "Die Blase dehnt sich wie ein Luftballon und meldet sich, wenn sie zu etwa einem Drittel voll ist."
    },
    tiroide: {
      name: "Die Schilddrüse", label: "Schilddrüse",
      what: "<p>Die Schilddrüse ist eine kleine schmetterlingsförmige Drüse im Hals. Sie bildet Hormone, die regeln, wie schnell der Körper arbeitet.</p>",
      how: "<p>Sie wiegt 15–25 g und bildet die Hormone <b>Thyroxin (T4)</b> und <b>Trijodthyronin (T3)</b>, die den Stoffwechsel steuern: die Geschwindigkeit, mit der die Zellen Energie verbrauchen. Sie beeinflussen Wachstum, Temperatur, Herzschlag und die Entwicklung des Gehirns bei Kindern. Zur Herstellung braucht sie <b>Jod</b>, das in Fisch und Jodsalz steckt. Die Produktion wird von der Hirnanhangsdrüse mit dem Hormon TSH gesteuert, in einem Regelkreis mit Rückkopplung, der die Werte stabil hält.</p>",
      links: [
        { to: "cervello", text: "Hypothalamus und Hirnanhangsdrüse im Gehirn steuern, wie viel Thyroxin gebildet wird." },
        { to: "cuore", text: "Die Schilddrüsenhormone beeinflussen die Herzfrequenz." },
        { to: "ossa_gambe", text: "Sie sind für ein regelmäßiges Knochenwachstum bei Kindern und Jugendlichen nötig." }
      ],
      problems: [
        { title: "Schilddrüse zu langsam oder zu schnell", causes: "Jodmangel oder Störungen der Abwehrkräfte.", effects: "wenn sie zu wenig arbeitet, bist du müde und frierst, wenn sie zu viel arbeitet, bist du unruhig und nimmst ab.", prevent: "Jodsalz in Maßen verwenden, Fisch essen; mit Blutuntersuchungen kann man sie kontrollieren: sprich mit der Ärztin bzw. dem Arzt." }
      ],
      fact: "Ihr Name kommt aus dem Griechischen und bedeutet „Schild“, wegen der Form des nahen Knorpels."
    },
    surrenali: {
      name: "Die Nebennieren", label: "Nebennieren",
      what: "<p>Es sind zwei kleine Drüsen auf den Nieren. Sie bilden Hormone, die uns helfen, auf einen Schreck oder eine wichtige Aufgabe zu reagieren.</p>",
      how: "<p>Jede Nebenniere hat zwei Teile. Das <b>Mark</b> bildet in Stresssituationen <b>Adrenalin</b> und <b>Noradrenalin</b>: Das Herz schlägt kräftiger, die Atmung wird schneller, die Muskeln bekommen mehr Blut, eine Reaktion, die man „Kampf oder Flucht“ nennt. Die <b>Rinde</b> bildet das <b>Cortisol</b> (das hilft, Stress und Zucker zu bewältigen) und das <b>Aldosteron</b>, das zusammen mit den Nieren Salz und Wasser regelt. Sie werden von der Hirnanhangsdrüse und vom Nervensystem gesteuert.</p>",
      links: [
        { to: "reni", text: "Sie sitzen oben auf den Nieren; das Aldosteron zeigt den Nieren, wie viel Salz sie zurückhalten sollen." },
        { to: "cuore", text: "Das Adrenalin lässt das Herz kräftiger und schneller schlagen." },
        { to: "cervello", text: "Das Gehirn setzt sie bei Gefahr oder starker Aufregung in Gang." },
        { to: "muscoli", text: "Sie bereiten die Muskeln auf den Einsatz vor, indem sie ihnen mehr Zucker und Blut schicken." }
      ],
      problems: [
        { title: "Lang anhaltender Stress", causes: "ständige Sorgen, wenig Schlaf, zu viele Termine.", effects: "zu lange erhöhtes Cortisol: Müdigkeit, Einschlafprobleme, Bauchschmerzen.", prevent: "gut schlafen, spielen und sich im Freien bewegen, über Sorgen mit einem Erwachsenen sprechen, dem du vertraust." }
      ],
      fact: "Adrenalin wirkt in wenigen Sekunden: Deshalb schlägt das Herz heftig, sobald du erschrickst."
    },
    milza: {
      name: "Die Milz", label: "Milz",
      what: "<p>Die Milz ist ein weiches Organ auf der linken Seite des Bauchs. Sie filtert das Blut und hilft dem Körper, sich gegen Keime zu wehren.</p>",
      how: "<p>Sie ist etwa so groß wie eine Faust und hat zwei Gewebe: die <b>rote Pulpa</b>, die das Blut filtert, alte oder beschädigte rote Blutkörperchen (nach etwa 120 Tagen) beseitigt und einen Vorrat davon hält; die <b>weiße Pulpa</b>, reich an Lymphozyten, die Keime im Blut erkennen und Antikörper bilden. Das Eisen der roten Blutkörperchen wird zurückgewonnen und wiederverwendet. Man kann auch ohne Milz leben, ist aber bei bestimmten Infektionen etwas gefährdeter, und Impfungen sind nützlich.</p>",
      links: [
        { to: "stomaco", text: "Sie liegt neben dem Magen, unter den linken Rippen." },
        { to: "arterie", text: "Sie erhält das Blut über eine eigene Arterie und filtert es." },
        { to: "linfonodi", text: "Zusammen mit den Lymphknoten gehört sie zum lymphatischen Abwehrsystem." },
        { to: "costole", text: "Die Rippen schützen sie vor Stößen." }
      ],
      problems: [
        { title: "Schläge auf die linke Seite", causes: "heftige Stöße bei Kontaktsportarten oder Stürze.", effects: "die Milz kann verletzt werden und Schmerzen in der linken Flanke verursachen.", prevent: "Schutzausrüstung benutzen und beim Spielen aufpassen; wenn du nach einem Schlag starke Schmerzen hast, sag sofort einem Erwachsenen Bescheid." }
      ],
      fact: "Sie ist das größte Organ des lymphatischen Systems."
    },
    timo: {
      name: "Der Thymus", label: "Thymus",
      what: "<p>Der Thymus ist eine kleine Drüse hinter dem Brustbein. Er ist die „Schule“, in der manche Abwehrzellen lernen, Keime zu erkennen.</p>",
      how: "<p>Er ist bei Kindern größer und wird mit dem Wachstum und dann im Erwachsenenalter kleiner. Hier reifen die <b>T-Lymphozyten</b> heran (das T steht für Thymus), die im Knochenmark entstehen. Im Thymus lernen sie, die Zellen des eigenen Körpers von fremden zu unterscheiden: Die, die sich irren, werden beseitigt, damit das Immunsystem nicht den eigenen Körper angreift. Die T-Lymphozyten gelangen dann ins Blut, in die Lymphknoten und in die Milz, wo sie die Abwehr koordinieren.</p>",
      links: [
        { to: "linfonodi", text: "Die T-Lymphozyten, die den Thymus verlassen haben, wandern zu den Lymphknoten." },
        { to: "milza", text: "Auch die Milz beherbergt T- und B-Lymphozyten, die ihre Ausbildung abgeschlossen haben." },
        { to: "cuore", text: "Er liegt vor dem Herzen, hinter dem Brustbein." }
      ],
      problems: [
        { title: "Unreife oder schwache Abwehr", causes: "das Immunsystem entwickelt sich in der Kindheit und wird von Schlaf, Ernährung und Impfungen beeinflusst.", effects: "wenn die Abwehrkräfte weniger gut arbeiten, wird man leichter krank.", prevent: "Impfungen, guter Schlaf, abwechslungsreiche Ernährung, Hände waschen; wenn du oft krank wirst, sprich mit der Ärztin bzw. dem Arzt." }
      ],
      fact: "Der Thymus ist in der Kindheit und Jugend am aktivsten, dann wird er kleiner."
    },
    linfonodi: {
      name: "Die Lymphknoten", label: "Lymphknoten",
      what: "<p>Die Lymphknoten sind kleine bohnenförmige Drüsen, die im Körper verteilt sind (Hals, Achseln, Leiste). Sie sind die Kontrollposten, die Keime aufhalten.</p>",
      how: "<p>Sie sind untereinander durch die Lymphgefäße verbunden, die die <b>Lymphe</b> sammeln, eine klare Flüssigkeit, die aus den Geweben fließt. Die Lymphe durchströmt die Lymphknoten, in denen sich viele <b>Lymphozyten</b> und Fresszellen befinden, die Bakterien, Viren und beschädigte Zellen filtern und zerstören. Bei einer Infektion vermehren sich die Lymphozyten, und der Lymphknoten schwillt an und kann ein bisschen wehtun: Das ist ein Zeichen, dass er arbeitet. Am Ende kehrt die Lymphe in der Nähe des Herzens ins Blut zurück. Im Körper gibt es etwa 600 davon.</p>",
      links: [
        { to: "milza", text: "Milz und Lymphknoten gehören gemeinsam zum lymphatischen System." },
        { to: "timo", text: "Sie erhalten die im Thymus gebildeten T-Lymphozyten." },
        { to: "vene", text: "Die gesammelte Lymphe kehrt in den Kreislauf zurück, indem sie sich in die großen Venen nahe dem Herzen ergießt." },
        { to: "intestino_tenue", text: "Die im Darm aufgenommenen Fette wandern in den Lymphgefäßen." }
      ],
      problems: [
        { title: "Geschwollene Drüsen", causes: "Halsschmerzen, Schnupfen oder andere Infektionen.", effects: "du spürst unter dem Kinn schmerzhafte „Kügelchen“, die meist von selbst wieder abschwellen.", prevent: "Ruhe, Trinken, Hände waschen; wenn sie lange geschwollen bleiben, sprich mit einem Erwachsenen oder der Ärztin bzw. dem Arzt." }
      ],
      fact: "Die Lymphknoten am Hals schwellen oft an, wenn du Halsschmerzen hast: Das bedeutet, dass sich dein Körper wehrt."
    }
  },
  tour: [
    { icon: "🧍", title: "Der ganze Körper", html: "<p>Das ist der Körper mit der <b>Haut</b>, die ihn von außen schützt. Darunter liegen Muskeln, Knochen und Organe. Benutze den Regler „Auseinanderziehen“, um die Teile voneinander zu trennen und besser zu sehen.</p>", focus: ["pelle"], explode: 0, view: { rx: 0.1, ry: -0.4 } },
    { icon: "🦴", title: "Skelett und Muskeln", html: "<p>Die <b>Knochen</b> sind das Gerüst, das alles trägt und Herz, Lunge und Gehirn schützt. Die <b>Muskeln</b> ziehen an den Knochen und lassen dich bewegen.</p>", focus: ["cranio", "colonna", "costole", "bacino", "ossa_braccia", "ossa_gambe", "muscoli"], explode: 0.4 },
    { icon: "🧠", title: "Die Steuerzentrale", html: "<p>Das <b>Gehirn</b> gibt die Befehle, das <b>Kleinhirn</b> koordiniert die Bewegungen, das <b>Rückenmark</b> und die <b>Nerven</b> tragen die Nachrichten durch den ganzen Körper.</p>", focus: ["cervello", "cervelletto", "midollo", "nervi"], explode: 0.3, view: { rx: 0.05, ry: 0.4 }, zoom: 1.2 },
    { icon: "👀", title: "Die Sinne", html: "<p>Augen, Ohren, Nase und Zunge fangen Licht, Geräusche, Gerüche und Geschmäcke ein und schicken sie als Signale zum Gehirn.</p>", focus: ["occhi", "orecchie", "naso", "lingua"], explode: 0.3, zoom: 1.4 },
    { icon: "🫀", title: "Herz und Blut", html: "<p>Das <b>Herz</b> ist eine Pumpe, die das Blut in die <b>Arterien</b> treibt; die <b>Venen</b> bringen es zurück. Das Blut liefert Sauerstoff und Nährstoffe an jede Zelle.</p>", focus: ["cuore", "arterie", "vene"], explode: 0.2 },
    { icon: "🫁", title: "Atmen", html: "<p>Die Luft strömt durch die Nase hinein, wandert durch die <b>Luftröhre</b> und erreicht die <b>Lunge</b>, wo der Sauerstoff ins Blut übergeht. Das <b>Zwerchfell</b> bewegt die Luft wie ein Blasebalg.</p>", focus: ["naso", "trachea", "polmoni", "diaframma"], explode: 0.4, view: { rx: 0.1, ry: -0.2 } },
    { icon: "🍽️", title: "Verdauen", html: "<p>Die Nahrung rutscht durch die <b>Speiseröhre</b> in den <b>Magen</b>, dann in den <b>Dünndarm</b>, wo <b>Leber</b>, <b>Gallenblase</b> und <b>Bauchspeicheldrüse</b> bei der Verdauung helfen. Im <b>Dickdarm</b> wird das Wasser zurückgewonnen.</p>", focus: ["esofago", "stomaco", "fegato", "cistifellea", "pancreas", "intestino_tenue", "intestino_crasso"], explode: 0.5 },
    { icon: "🚽", title: "Filtern und reinigen", html: "<p>Die <b>Nieren</b> filtern das Blut und bilden den Urin, der in die <b>Blase</b> fließt.</p>", focus: ["reni", "vescica"], explode: 0.5 },
    { icon: "⚗️", title: "Die Hormone", html: "<p><b>Schilddrüse</b>, <b>Nebennieren</b> und <b>Bauchspeicheldrüse</b> schicken Hormone ins Blut, chemische Botenstoffe, die Wachstum, Energie und Reaktionen auf Stress regeln.</p>", focus: ["tiroide", "surrenali", "pancreas"], explode: 0.5 },
    { icon: "🛡️", title: "Die Abwehr", html: "<p><b>Milz</b>, <b>Thymus</b> und <b>Lymphknoten</b> sind der Stützpunkt der weißen Blutkörperchen, die Viren und Bakterien erkennen und beseitigen.</p>", focus: ["milza", "timo", "linfonodi"], explode: 0.5 }
  ],
  quiz: [
    { type: "mc", q: "Welches Organ lässt den Sauerstoff aus der Luft ins Blut übergehen?", options: ["Der Magen", "Die Lunge", "Die Nieren"], answer: 1, explain: "In den Lungenbläschen geht der Sauerstoff ins Blut und das Kohlendioxid in die Luft über." },
    { type: "tf", q: "Die Arterien führen immer sauerstoffreiches Blut, außer denen, die zur Lunge gehen.", answer: true, explain: "Die Arterien bringen das Blut vom Herzen weg; die Lungenarterie bringt sauerstoffarmes Blut zur Lunge." },
    { type: "mc", q: "Wo wird die Galle gespeichert?", options: ["In der Gallenblase", "Im Magen", "In der Blase"], answer: 0, explain: "Die Leber bildet die Galle und die Gallenblase speichert sie, bis sie zur Verdauung der Fette gebraucht wird." },
    { type: "order", q: "Bring den Weg der Nahrung in die richtige Reihenfolge.", items: ["Mund", "Speiseröhre", "Magen", "Dünndarm", "Dickdarm"], explain: "Die Nahrung wandert durch einen langen Schlauch: Sie wird gekaut, rutscht in die Speiseröhre und den Magen, dann werden die Nährstoffe im Dünndarm aufgenommen und der Dickdarm holt das Wasser zurück." },
    { type: "tf", q: "Das Insulin, das von der Bauchspeicheldrüse gebildet wird, hilft dem Zucker, in die Zellen zu gelangen.", answer: true, explain: "Das Insulin senkt die Zuckermenge im Blut, indem es den Zucker in die Zellen lässt." },
    { type: "mc", q: "Welcher Teil des Nervensystems schützt das Gehirn und verbindet es in der Wirbelsäule mit dem Körper?", options: ["Das Kleinhirn", "Das Rückenmark", "Der Thymus"], answer: 1, explain: "Das Rückenmark, von den Wirbeln geschützt, leitet die Signale zwischen dem Gehirn und den Nerven des Körpers weiter." },
    { type: "num", q: "Wie viele Liter Blut hat ein Erwachsener ungefähr?", answer: 5, tol: 1, unit: "Liter", explain: "Ein Erwachsener hat etwa 5 Liter Blut, das sind 7–8 % des Körpergewichts." },
    { type: "mc", q: "Welches Organ bildet den Urin, indem es das Blut filtert?", options: ["Die Nieren", "Die Blase", "Die Leber"], answer: 0, explain: "Die Nieren filtern das Blut und bilden den Urin; die Blase sammelt ihn nur." },
    { type: "tf", q: "Das Zwerchfell spannt sich an, wenn du einatmest.", answer: true, explain: "Beim Anspannen senkt es sich, der Brustkorb weitet sich und die Luft strömt in die Lunge." },
    { type: "order", q: "Bring den Weg eines Bewegungsbefehls in die richtige Reihenfolge.", items: ["Gehirn", "Rückenmark", "Nerven", "Muskeln"], explain: "Das Gehirn entscheidet, Rückenmark und Nerven tragen das Signal und der Muskel spannt sich an." },
    { type: "mc", q: "Wo reifen die T-Lymphozyten heran?", options: ["Im Thymus", "In der Milz", "Im Magen"], answer: 0, explain: "Im Thymus lernen die T-Lymphozyten, das zu erkennen, was dem Körper fremd ist, und heißen deshalb „T“." },
    { type: "num", q: "Wie viele Meter lang ist der Dünndarm eines Erwachsenen ungefähr?", answer: 6, tol: 1, unit: "m", explain: "Der Dünndarm misst etwa 6–7 Meter: Im Bauch zusammengelegt nimmt er die Nährstoffe auf." },
    { type: "mc", q: "Welche Verbindung ist richtig?", options: ["Herz und Lunge: Das Blut nimmt Sauerstoff auf", "Speiseröhre und Nieren: Sie leiten den Urin", "Schilddrüse und Blase: Sie bilden die Galle"], answer: 0, explain: "Das Herz schickt sauerstoffarmes Blut zur Lunge, das mit Sauerstoff angereichert zurückkommt." },
    { type: "tf", q: "Das Kleinhirn dient vor allem dazu, die Nahrung zu verdauen.", answer: false, explain: "Das Kleinhirn koordiniert die Bewegungen und das Gleichgewicht." }
  ]
});
