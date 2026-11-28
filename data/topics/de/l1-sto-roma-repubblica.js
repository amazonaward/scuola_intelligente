TOPIC('de', {
  id: "l1-sto-roma-repubblica",
  title: "Rom: von den Anfängen zur Republik",
  intro: "Ein Dorf aus Hütten auf einem Hügel an einem Fluss, gegründet (der Legende nach) im Jahr <b>753 v. Chr.</b>. Drei Jahrhunderte später war es Herrin Italiens; zwei weitere Jahrhunderte später beherrschte es das ganze Mittelmeer. Wie war das möglich? In dieser Lektion folgen wir der Entstehung Roms zwischen Mythos und Archäologie, der Herrschaft der Könige, der <b>Republik</b> mit ihren Institutionen, dem Kampf zwischen Patriziern und Plebejern, der Eroberung Italiens und dem tödlichen Duell mit <b>Karthago</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Die Anfänge Roms: Mythos und Archäologie",
      html: `<p>Der Überlieferung nach gründeten <b>Romulus</b> und <b>Remus</b>, Zwillinge und Nachkommen des trojanischen Helden <b>Aeneas</b> (der aus Troja geflohen war), von einer Wölfin gesäugt und von einem Hirten aufgezogen, Rom am <b>21. April 753 v. Chr.</b> Romulus zog die Furche auf dem Palatin und tötete Remus, der sie übersprungen hatte. Der Mythos drückt die Vorstellung einer Stadt aus, die aus Gewalt, aber auch aus einer göttlichen Sendung entstanden ist.</p>
<p>Die Archäologie erzählt etwas anderes und Interessanteres: Zwischen dem 10. und 8. Jh. v. Chr. gab es auf den Hügeln (Palatin, Kapitol, Quirinal ...) <b>Dörfer latinischer und sabinischer Hirten und Bauern</b>. Der Ort war ausgezeichnet: eine Furt durch den <b>Tiber</b> (die Tiberinsel), die Salzstraße (Via Salaria), leicht zu verteidigende Hügel, Nähe zum Meer, aber nicht zu nah. Gegen Ende des 8. bis 7. Jh. v. Chr. verschmolzen die Dörfer zu einer Stadt, das Forum (zuvor ein Sumpf) wurde mit der <b>Cloaca Maxima</b> trockengelegt.</p>
<p>Die Historiker unterscheiden daher zwischen <b>Legende</b> (nützlich, um zu verstehen, wie sich die Römer sahen) und <b>historischen Quellen</b> (Archäologie, Inschriften).</p>`
    },
    {
      type: "3d",
      title: "3D-Karte: die Ausdehnung Roms",
      scene: "spacetime",
      caption: "Die Grundfläche ist die Karte Italiens und des westlichen Mittelmeers, die Höhe ist die Zeit (753-146 v. Chr.). Tippe auf die Ereignisse: Die Pfeile verbinden Ursachen und Wirkungen.",
      options: {
        lat: [34, 47],
        lon: [-2, 20],
        years: [-753, -140],
        places: [
          { lat: 41.9, lon: 12.5, label: "Rom" },
          { lat: 36.85, lon: 10.32, label: "Karthago" },
          { lat: 40.47, lon: 17.24, label: "Tarent" },
          { lat: 38.19, lon: 15.55, label: "Messina" }
        ],
        events: [
          { id: "fondazione", lat: 41.89, lon: 12.49, year: -753, label: "Gründung Roms", html: "Traditionelles Datum: 21. April 753 v. Chr. (Romulus).", causes: [] },
          { id: "cacciata", lat: 41.89, lon: 12.49, year: -509, label: "Vertreibung der Könige", html: "Im Jahr 509 v. Chr. vertreiben die Römer der Überlieferung nach den letzten König, Tarquinius Superbus, und errichten die Republik mit zwei Konsuln.", causes: ["fondazione"] },
          { id: "secessione", lat: 41.89, lon: 12.5, year: -494, label: "Erste Secessio der Plebs", html: "Die Plebejer ziehen sich auf den Heiligen Berg zurück: Sie erreichen die Volkstribunen mit Vetorecht.", causes: ["cacciata"] },
          { id: "dodici", lat: 41.89, lon: 12.49, year: -450, label: "Zwölftafelgesetz", html: "Um 450 v. Chr. werden die Gesetze, die zuvor die Patrizier verwahrten, eingemeißelt und veröffentlicht: Alle können sie kennen.", causes: ["secessione"] },
          { id: "veio", lat: 42.02, lon: 12.4, year: -396, label: "Eroberung von Veji", html: "Nach zehn Jahren Belagerung erobert Rom die reiche etruskische Stadt Veji (Camillus).", causes: ["dodici"] },
          { id: "sannitiche", lat: 41.3, lon: 14.6, year: -321, label: "Samnitenkriege", html: "Zwischen 343 und 290 v. Chr. besiegt Rom die Samniten des Apennins; 321 erleidet es die Demütigung der Caudinischen Pässe.", causes: ["veio"] },
          { id: "pirro", lat: 41.13, lon: 14.78, year: -275, label: "Pyrrhus bei Benevent geschlagen", html: "Im Jahr 275 v. Chr. schlägt Rom Pyrrhus, den von Tarent gerufenen König von Epirus. 272 erobert es auch Tarent: Ganz Süditalien gehört ihm.", causes: ["sannitiche"] },
          { id: "messina", lat: 38.19, lon: 15.55, year: -264, label: "Beginn des Ersten Punischen Krieges", html: "Im Jahr 264 v. Chr. greift Rom in Messina gegen Karthago ein: Der Kampf um Sizilien beginnt.", causes: ["pirro"] },
          { id: "egadi", lat: 37.97, lon: 12.3, year: -241, label: "Schlacht bei den Ägatischen Inseln", html: "Im Jahr 241 v. Chr. siegt die römische Flotte: Sizilien wird die erste römische Provinz.", causes: ["messina"] },
          { id: "canne", lat: 41.3, lon: 16.13, year: -216, label: "Cannae", html: "Im Jahr 216 v. Chr. vernichtet Hannibal das römische Heer: die schwerste Niederlage der römischen Geschichte, aber die italischen Bundesgenossen (socii) bleiben treu.", causes: ["egadi"] },
          { id: "zama", lat: 36.0, lon: 9.4, year: -202, label: "Zama", html: "Im Jahr 202 v. Chr. besiegt Scipio Hannibal in Afrika: Ende des Zweiten Punischen Krieges.", causes: ["canne"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -146, label: "Zerstörung Karthagos", html: "Im Jahr 146 v. Chr. zerstört Scipio Aemilianus nach dem Dritten Punischen Krieg Karthago. Im selben Jahr zerstört Rom Korinth.", causes: ["zama"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Die Königszeit und die Etrusker",
      html: `<p>Der Überlieferung nach hatte Rom <b>sieben Könige</b>: Romulus, Numa Pompilius, Tullus Hostilius, Ancus Marcius, Tarquinius Priscus, Servius Tullius, Tarquinius Superbus. Die letzten drei waren <b>etruskischer</b> Herkunft. Der König war Heerführer, Priester und oberster Richter, von einer Versammlung gewählt und vom <b>Senat</b> (dem Rat der Ältesten, den <i>patres</i>) unterstützt.</p>
<p>Die <b>Etrusker</b>, das Volk Etruriens (Toskana und nördliches Latium), in Stadtstaaten (Lucumonien) organisiert, waren geschickte Metallurgen, Seefahrer und Bauern. Sie beherrschten Rom im 6. Jh. v. Chr. und brachten: <b>Verstädterung</b> (Mauern, Wasserbauten, den Jupitertempel auf dem Kapitol), das <b>Alphabet</b> (vom Griechischen abgeleitet), Machtsymbole (<b>Rutenbündel (Fasces)</b> und <b>Beil</b>, Toga, kurulischer Stuhl), Gladiatorenspiele und die Wahrsagekunst der Haruspices.</p>
<p>König <b>Servius Tullius</b> teilte die Bevölkerung nach dem <b>Zensus</b> (Vermögen) in Klassen ein, nicht nur nach der Geburt; die römische Gesellschaft war bereits in <b>Patrizier</b> (adlige Familien, Nachkommen der <i>patres</i>) und <b>Plebejer</b> (alle anderen, Freie, oft Bauern und Handwerker, ohne Zugang zu den Ämtern) gespalten, mit den <b>Klienten</b>, die durch ein Treueverhältnis (<i>Klientel</i>) an die Patrizier gebunden waren. Im Jahr <b>509 v. Chr.</b> vertrieben die Patrizier den letzten König, Tarquinius Superbus, der der Tyrannei beschuldigt wurde: Die <b>Republik</b> (<i>res publica</i>, „öffentliche Sache“) entstand. Seitdem wurde der Königstitel in Rom gehasst.</p>`
    },
    {
      type: "svg",
      title: "Die Institutionen der römischen Republik",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="210" y="15" width="180" height="45" rx="8" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
<text x="300" y="44" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SENAT (300 Mitglieder)</text>
<rect x="20" y="105" width="170" height="60" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="105" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2 KONSULN</text>
<text x="105" y="152" font-size="14" text-anchor="middle" fill="#0f172a">gewählt, 1 Jahr im Amt</text>
<rect x="215" y="105" width="170" height="60" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ANDERE BEAMTE</text>
<text x="300" y="152" font-size="14" text-anchor="middle" fill="#0f172a">Prätoren, Quästoren, Ädilen, Zensoren</text>
<rect x="410" y="105" width="170" height="60" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="495" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">VOLKSTRIBUNEN</text>
<text x="495" y="152" font-size="14" text-anchor="middle" fill="#0f172a">haben das Vetorecht</text>
<rect x="150" y="215" width="300" height="55" rx="8" fill="#bae6fd" stroke="#075985" stroke-width="2"/>
<text x="300" y="240" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">KOMITIEN (Volksversammlungen)</text>
<text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">wählen die Beamten und beschließen die Gesetze</text>
<path d="M300 60 L300 105 M300 165 L300 215 M105 165 L105 190 L300 215 M495 165 L495 190 L300 215" stroke="#374151" stroke-width="2" fill="none"/>
</svg>`,
      caption: "Vereinfachtes Schema: Die Macht war auf mehrere Organe verteilt, damit nicht einer allein König werden konnte."
    },
    {
      type: "text",
      title: "3. Die Institutionen der Republik",
      html: `<p>Die Römer bauten nach der Erfahrung mit den Königen einen Staat mit einem System von <b>Gegengewichten</b> auf (wie es später der griechische Geschichtsschreiber <b>Polybios</b> beschrieb, der darin eine „Mischverfassung“ sah: Monarchie, Aristokratie und Demokratie zugleich).</p>
<ul>
<li><b>Magistrate (Beamte)</b>: gewählte, einjährige, kollegial besetzte (mindestens zwei Personen mit gleicher Macht, die sich gegenseitig blockieren konnten) und unbezahlte Ämter. Die zwei <b>Konsuln</b> führen das Heer und die Stadt; die <b>Prätoren</b> verwalten die Rechtsprechung; die <b>Quästoren</b> die Finanzen; die <b>Ädilen</b> die Stadt und die Spiele; die <b>Zensoren</b> (alle 5 Jahre) führen den Zensus durch und überwachen die Sitten. In Notfällen ernannte man für höchstens sechs Monate einen <b>Diktator</b>.</li>
<li><b>Senat</b>: etwa 300 ehemalige Magistrate, auf Lebenszeit; er kontrolliert Außenpolitik, Finanzen und Religion. Er war das eigentliche Zentrum der Macht.</li>
<li><b>Komitien</b>: Volksversammlungen (<i>Zenturiatskomitien</i> zur Wahl der höheren Beamten und zur Kriegserklärung, <i>Tributkomitien</i> für die Gesetze), mit nach Vermögen gewichteter Stimme.</li>
<li><b>Cursus honorum</b>: die geordnete politische Laufbahn: Quästor → Ädil → Prätor → Konsul.</li>
</ul>
<p>Es war ein System, das <b>Tyrannei verhindern</b> sollte, aber keine Demokratie: Die Stimmen der Reichen zählten mehr, und der Zugang zu den hohen Ämtern war jahrelang den Patriziern vorbehalten, später den reichen Familien. Frauen, Sklaven und Fremde waren ausgeschlossen.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Anfänge und Institutionen",
      questions: [
        { type: "mc", q: "In welchem Jahr wurde der Überlieferung nach der letzte König Roms vertrieben?", options: ["509 v. Chr.", "753 v. Chr.", "264 v. Chr."], answer: 0, explain: "509 v. Chr., Tarquinius Superbus." },
        { type: "mc", q: "Wie viele Konsuln gab es, und wie lange blieben sie im Amt?", options: ["Zwei, ein Jahr", "Einen, lebenslang", "Drei, fünf Jahre"], answer: 0, explain: "Zwei einjährige Konsuln: Sie konnten sich gegenseitig kontrollieren." },
        { type: "tf", q: "Der römische Senat bestand aus ehemaligen Magistraten.", answer: true, explain: "Auf Lebenszeit im Amt." },
        { type: "text", q: "Wie heißt die geordnete politische Laufbahn der römischen Magistrate?", answer: ["cursus honorum", "der cursus honorum", "Cursus honorum"], explain: "Cursus honorum." }
      ]
    },
    {
      type: "text",
      title: "4. Patrizier und Plebejer: der Ständekampf",
      html: `<p>In den ersten Jahrhunderten der Republik kämpften die <b>Plebejer</b> (die im Heer dienten, aber keine Ämter bekleiden und keine Patrizierinnen heiraten durften) um Gleichberechtigung. Es war ein langer Konflikt, aber fast ohne Bürgerkrieg, mit dem Mittel der <b>Secessio</b>: sich zu weigern zu kämpfen und sich aus der Stadt zurückzuziehen.</p>
<ul>
<li><b>494 v. Chr.</b>: erste Secessio auf den Heiligen Berg; die Plebejer erreichen die <b>Volkstribunen</b>, heilige und unantastbare Beamte mit <b>Vetorecht</b> gegen Entscheidungen der Magistrate.</li>
<li><b>451-450 v. Chr.</b>: <b>Zwölftafelgesetz</b>, die erste Sammlung geschriebener Gesetze, auf dem Forum ausgestellt: Das Recht wird erkennbar und ist kein Monopol der Patrizier mehr.</li>
<li><b>445 v. Chr.</b> (Lex Canuleia): Ehen zwischen Patriziern und Plebejern werden erlaubt.</li>
<li><b>367 v. Chr.</b> (Licinisch-Sextische Gesetze): Einer der beiden Konsuln darf Plebejer sein; Beschränkungen des Besitzes von öffentlichem Land.</li>
<li><b>287 v. Chr.</b> (Lex Hortensia): Die <b>Plebiszite</b> (Beschlüsse der Plebejerversammlung) gelten als Gesetze für alle Bürger.</li>
</ul>
<p>Am Ende entstand eine neue führende Schicht, die <b>Nobilität</b>, gebildet aus Patriziern und reichen Plebejern, die Ämter bekleidet hatten. Aber die Armen blieben arm: Die sozialen Probleme (Schulden, Land) kehrten später mit den Gracchen zurück.</p>`
    },
    {
      type: "decision",
      title: "Rom, 494 v. Chr.: Soll sich die Plebs auf den Heiligen Berg zurückziehen?",
      html: `<p>Du bist ein Plebejer, Soldat und Bauer. Du bist von Schulden erdrückt: Die patrizischen Gläubiger können jeden in Ketten legen, der nicht zahlt. Die Kriege nehmen dir die Zeit für die Felder. Eine Gruppe von Plebejern schlägt vor, <b>die Stadt zu verlassen</b> und sich auf dem Heiligen Berg zu lagern: Ohne sie hat Rom kein Heer, um sich gegen die benachbarten Feinde zu verteidigen.</p>`,
      question: "Was tust du?",
      options: [
        { label: "Gehorchen und weiter dienen: Die Stadt braucht alle.", outcome: "Du vermeidest den Konflikt, aber die Patrizier haben keinen Grund, etwas zu ändern, und die Schulden bleiben. Die Lage verschlechtert sich." },
        { label: "An der Secessio teilnehmen, um Garantien zu fordern.", outcome: "Der erschrockene Senat schickt einen Gesandten (Menenius Agrippa, der die Fabel vom Körper und den Gliedern erzählt) und gewährt die Volkstribunen. Ein gewaltloser Aufstand erreicht eine grundlegende Errungenschaft." },
        { label: "Einen berühmten General bitten, die Macht zu übernehmen und die Patrizier zu bestrafen.", outcome: "Du riskierst, einen Tyrannen zu finden: genau die Gefahr, die die Republik vermeiden wollte." }
      ],
      answer: 1,
      explain: "Die Plebs wählte die <b>Secessio</b>, eine Form des Protests ohne Waffen. Der Senat gab nach: Die <b>Volkstribunen</b> entstanden. Die römische Geschichte zeigt, dass auch eine Gruppe ohne formale Macht Rechte erreichen kann, wenn sie ein sicheres Druckmittel hat: den Streik der eigenen Militärkraft."
    },
    {
      type: "text",
      title: "5. Die Eroberung Italiens",
      html: `<p>Zwischen dem 5. und 3. Jh. v. Chr. wurde Rom von einer latinischen Kleinstadt zur Herrin der Halbinsel:</p>
<ul>
<li><b>Latium und Etrurien</b>: nach Jahren der Kriege gegen Aequer, Volsker und das benachbarte Veji (<b>396 v. Chr.</b> von Camillus erobert). Im Jahr <b>390 v. Chr.</b> plünderten die Gallier unter Brennus Rom (aber nicht das Kapitol, das der Legende nach von den Gänsen gerettet wurde).</li>
<li><b>Samnitenkriege</b> (343-290 v. Chr.): gegen die Samniten des Apennins. Im Jahr 321 v. Chr. erlitt das römische Heer die Demütigung der <b>Caudinischen Pässe</b>. Rom siegte, indem es lernte: Es ersetzte die Phalanx durch die flexiblere <b>Manipularlegion</b>.</li>
<li><b>Latinerkrieg</b> (340-338 v. Chr.): Rom löste den Latinischen Bund auf und gliederte die Städte ein.</li>
<li><b>Pyrrhus und Tarent</b> (280-275 v. Chr.): Tarent ruft den König von Epirus, <b>Pyrrhus</b>, der bei Herakleia und Asculum siegt, aber mit sehr schweren Verlusten („Pyrrhussieg“), dann wird er bei Benevent geschlagen (275 v. Chr.). Im Jahr 272 nimmt Rom Tarent: Ganz Süditalien gehört ihm.</li>
</ul>
<p><b>Wie regierte es Italien?</b> Mit einem flexiblen System: nicht eine einzige Regel, sondern verschiedene Abmachungen für jedes Volk.</p>
<ul>
<li><b>Bürgerrecht</b> mit oder <b>ohne Stimmrecht</b> für einige benachbarte Städte;</li>
<li><b>Bundesgenossen</b> (<i>socii</i>), die ihre innere Autonomie behielten, aber Soldaten stellen mussten;</li>
<li>römische und latinische <b>Kolonien</b> an strategischen Punkten;</li>
<li><b>Straßen</b> (Via Appia seit 312 v. Chr.), um die Legionen schnell zu verlegen.</li>
</ul>
<p>Die Strategie „<b>divide et impera</b>“ (teile und herrsche): die Treuen belohnen, die Aufständischen bestrafen. Sie bot auch eine Perspektive: Die Bundesgenossen konnten auf das Bürgerrecht hoffen. So hatte Rom immer neue Rekruten für die Kriege.</p>`
    },
    {
      type: "text",
      title: "6. Rom und Karthago: die Punischen Kriege",
      html: `<p>Karthago, eine phönizische Kolonie (814 v. Chr.), war die See- und Handelsmacht des westlichen Mittelmeers, mit dem westlichen Sizilien, Sardinien und dem südlichen Spanien. Rom, Herrin Italiens, grenzte an der Straße von Messina an sie. Es wurde ein Kampf von über einem Jahrhundert.</p>
<ul>
<li><b>Erster Punischer Krieg</b> (264-241 v. Chr.): ausgelöst durch das Eingreifen in Messina. Rom, ohne Flotte, baute eine, indem es die karthagischen Schiffe kopierte und den <b>Corvus</b> (Enterbrücke mit Haken) einsetzte. Seesiege bei Mylae (260) und bei den <b>Ägatischen Inseln</b> (241 v. Chr.). Karthago trat <b>Sizilien</b> ab, die erste römische Provinz; dann auch Sardinien und Korsika (238 v. Chr.).</li>
<li><b>Zweiter Punischer Krieg</b> (218-201 v. Chr.): <b>Hannibal</b>, junger karthagischer Feldherr, bricht von Spanien auf und überquert die Alpen mit 37 Elefanten und etwa 26.000 Mann. Er siegt am Ticinus und an der Trebia (218), am <b>Trasimenischen See</b> (217) und bei <b>Cannae</b> (216 v. Chr.), wo er ein doppelt so großes römisches Heer besiegt, indem er es einkreist (etwa 50.000 tote Römer). Aber die meisten italischen Bundesgenossen bleiben Rom treu. <b>Fabius Maximus</b>, der „Zauderer“, zermürbt Hannibal, indem er große Schlachten vermeidet. <b>Scipio</b> trägt den Krieg nach Afrika und schlägt Hannibal bei <b>Zama</b> (202 v. Chr.), womit er sich den Beinamen „Africanus“ verdient. Karthago verliert die Flotte, die Kolonien und muss eine enorme Entschädigung zahlen.</li>
<li><b>Dritter Punischer Krieg</b> (149-146 v. Chr.): <b>Cato der Ältere (der Zensor)</b> beendete jede Rede mit „Carthago delenda est“ („Karthago muss zerstört werden“). Rom belagert und <b>zerstört Karthago</b> (146 v. Chr.) unter <b>Scipio Aemilianus</b>. Das Gebiet wird zur Provinz Africa.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Warum siegte Hannibal nicht?",
      html: `<p>Hannibal gewann fast jede Schlacht und verlor doch den Krieg. Warum? Versuche, wie ein Historiker zu denken:</p>
<ol>
<li><b>Verbündete</b>: Er hoffte, dass sich die italischen Bundesgenossen gegen Rom erheben würden: Fast alle blieben treu, weil Rom ihnen Vorteile und Schutz garantierte.</li>
<li><b>Nachschub</b>: Er lebte „vom Land“ ohne sichere Basis, während Rom über fast unbegrenzte Menschenreserven verfügte.</li>
<li><b>Meer</b>: Rom beherrschte das Meer und konnte Truppen nach Spanien und Afrika verlegen.</li>
<li><b>Strategie</b>: Scipios Gegenangriff in Afrika zwang Hannibal, nach Karthago zurückzukehren.</li>
</ol>
<p>Lehre: Schlachten zu gewinnen reicht nicht, man braucht eine <b>politische und militärische Struktur</b>, die Niederlagen übersteht. Rom hatte eine, dank des Bündnissystems.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: den Verlauf einer römischen Straße lesen",
      html: `<p>Die Konsularstraßen verbanden Rom mit den Provinzen: Die <b>Via Appia</b> (312 v. Chr.) reichte bis Brindisi, die Via Aurelia verlief entlang der tyrrhenischen Küste, die Via Flaminia zur Adria, die Via Aemilia (187 v. Chr.) in der Poebene. Sie wurden aus Schichten von Schotter, Sand und Basaltplatten gebaut und hatten <b>Meilensteine</b>, die die Entfernung von Rom angaben. Viele moderne Straßen folgen noch diesem Verlauf: die SS 1 Aurelia, die Appia, die Flaminia. Sieh auf der Karte deiner Gegend nach: Gibt es Namen römischer Straßen in deiner Nähe?</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Cincinnatus, der Bauer als Diktator",
      html: `<p>Im Jahr <b>458 v. Chr.</b> wurde Rom von den Aequern belagert. Der Senat rief als Diktator <b>Lucius Quinctius Cincinnatus</b>, einen ehemaligen Konsul, der sein kleines Feld bestellte. Man fand ihn mit dem Pflug in der Hand. Cincinnatus besiegte die Feinde in sechzehn Tagen, legte dann das Amt nieder und kehrte auf sein Feld zurück. Für die Römer war er das Vorbild des tugendhaften Bürgers, der die Macht nur nutzt, um dem Staat zu dienen. George Washington wurde „der Cincinnatus Amerikas“ genannt, weil er nach dem Unabhängigkeitskrieg das Kommando niederlegte.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Die Gänse des Kapitols",
      html: `<p>Im Jahr 390 v. Chr. standen die Gallier unter Brennus kurz davor, die auf das Kapitol geflüchteten Römer nachts zu überraschen, aber die der Juno heiligen Gänse, vom Lärm geweckt, schnatterten. Der Konsul Manlius erwachte und schlug den Angriff zurück. Nach dem Lösegeld warf Brennus der Überlieferung nach sein Schwert auf die Goldwaage: „Wehe den Besiegten“ (<i>Vae victis</i>). Wie viel ist Geschichte und wie viel Legende? Die Gallier plünderten tatsächlich um dieses Jahr Rom, und die Erinnerung an diese Katastrophe prägte die Römer lange.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das republikanische Rom zu verstehen",
      intro: "Ein komplexes politisches System, eine schrittweise Eroberung: hier einige Vergleiche.",
      tabs: [
        {
          label: "🎭 Eine Mannschaft ohne Kapitän",
          html: `<p>Stell dir eine Fußballmannschaft mit <b>zwei Kapitänen</b> vor, die jedes Jahr gewählt werden und sich gegenseitig blockieren können, und einen <b>Rat ehemaliger Kapitäne</b> (den Senat), der berät und über die wichtigsten Fragen entscheidet. Jede Saison wird gewechselt: Niemand bleibt zu lange Kapitän. Die Fans, also die Versammlungen, wählen die Kapitäne und die Regeln.</p>
<p>Warum? Um zu verhindern, dass jemand zum <b>Tyrannen</b> wird. Die Römer hatten nach der Erfahrung mit Tarquinius eine fast religiöse Angst vor der Monarchie. Das System funktionierte, solange Rom klein war: Mit dem Weltreich und mit zu mächtigen Generälen geriet es in die Krise (das sehen wir später).</p>`
        },
        {
          label: "🔗 Das Bündnissystem",
          html: `<p>Die Stärke Roms war nicht nur sein Heer, sondern das <b>Netz der Verbündeten</b>:</p>
<ul>
<li>Römische Bürger (auch ohne Stimmrecht): zahlen Steuern, stellen Soldaten.</li>
<li>Latiner: ähnliche Privatrechte wie die Römer, Truppenlieferanten.</li>
<li>Italische Socii: lokale Autonomie, aber Soldaten für Rom.</li>
</ul>
<p>Jeder Verbündete war direkt an Rom gebunden, nicht an die anderen Verbündeten: ein Strahlenkranz, kein Bund. Im Gegenzug gab es Schutz, Beute und die Möglichkeit, das Bürgerrecht zu erlangen. Im Zweiten Punischen Krieg hielt dieses Netz nach Cannae stand und machte den Unterschied.</p>`
        },
        {
          label: "🗺️ Dreh den Globus",
          html: `<p>Dreh den Globus und folge den Punischen Kriegen.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Rom", color: "#ef4444" },
              { lat: 36.85, lon: 10.32, label: "Karthago", color: "#7c3aed" },
              { lat: 37.97, lon: 12.3, label: "Ägatische Inseln", color: "#f97316" },
              { lat: 37.88, lon: -1.13, label: "Cartagena (Spanien)", color: "#7c3aed" },
              { lat: 45.0, lon: 9.7, label: "Trebia", color: "#f97316" },
              { lat: 41.3, lon: 16.13, label: "Cannae", color: "#f97316" },
              { lat: 36.0, lon: 9.4, label: "Zama", color: "#f97316" }
            ],
            routes: [{ points: [3, 4, 5], color: "#7c3aed" }, { points: [0, 6], color: "#ef4444" }]
          }
        },
        {
          label: "📅 Zeitleiste",
          html: `<p>Geh die grundlegenden Stationen Roms durch.</p>`,
          widget: "timeline",
          options: {
            unit: "Jahre",
            events: [
              { year: -753, label: "Gründung (Überlieferung)", icon: "🐺" },
              { year: -509, label: "Vertreibung der Könige", icon: "👑" },
              { year: -494, label: "Secessio und Tribunen", icon: "✊" },
              { year: -450, label: "Zwölf Tafeln", icon: "📜" },
              { year: -396, label: "Eroberung von Veji", icon: "🏹" },
              { year: -312, label: "Via Appia", icon: "🛣️" },
              { year: -264, label: "Erster Punischer Krieg", icon: "⚓" },
              { year: -216, label: "Cannae", icon: "🐘" },
              { year: -202, label: "Zama", icon: "🛡️" },
              { year: -146, label: "Ende Karthagos", icon: "🔥" }
            ]
          }
        },
        {
          label: "🃏 Lernkarten",
          html: `<p>Dreh die Karten um, um zu wiederholen.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Patrizier / Plebejer", back: "Adlige Familien mit allen Rechten / Volk ohne Zugang zu den Ämtern (anfangs)" },
              { front: "Volkstribun", back: "Unantastbarer Beamter mit Vetorecht (494 v. Chr.)" },
              { front: "Zwölf Tafeln", back: "Erste geschriebene Gesetze Roms (451-450 v. Chr.)" },
              { front: "Socii", back: "Italische Bundesgenossen, die Rom Soldaten stellten" },
              { front: "Cannae", back: "216 v. Chr.: schwerste römische Niederlage, durch Hannibal" },
              { front: "Zama", back: "202 v. Chr.: Scipio besiegt Hannibal" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Karte: warum Rom siegte",
      nodes: [
        { id: "posizione", label: "Lage und Ressourcen", x: 50, y: 6, color: "#16a34a", html: "Furt über den Tiber, fruchtbare Ebene, verteidigungsfähige Hügel.", why: "Eine zentrale Lage auf der Halbinsel erlaubte die Kontrolle der Land- und Seewege. Die große latinische Bevölkerung stellte Männer für die Legionen." },
        { id: "istituzioni", label: "Gemischte Institutionen", x: 20, y: 30, color: "#7c3aed", html: "Konsuln, Senat, Komitien, Tribunen.", why: "Die Gegengewichte verhinderten sowohl Tyrannei als auch Anarchie. Die Beschlüsse des Senats gaben der Außenpolitik Kontinuität, auch bei jährlich wechselnden Magistraten." },
        { id: "lotta", label: "Ständekampf", x: 80, y: 30, color: "#ef4444", html: "Von den Tribunen (494 v. Chr.) bis zur Lex Hortensia (287 v. Chr.).", why: "Die Plebejer, die im Heer kämpften, erlangten Rechte als Gegenleistung für ihren Dienst: So wurde ein Bürgerkrieg vermieden." },
        { id: "esercito", label: "Bürgerheer", x: 15, y: 58, color: "#f97316", html: "Manipularlegion, Disziplin, Straßen.", why: "Die Bürger-Soldaten verteidigten ihre eigenen Felder: Sie waren motiviert. Die flexible Legion passte sich Gelände und Feinden an." },
        { id: "alleanze", label: "Bündnissystem", x: 50, y: 58, color: "#0ea5e9", html: "Bürgerrecht, Socii, Kolonien.", why: "Rom bot den Besiegten einen Status und die Hoffnung auf volles Bürgerrecht: So blieb ihre Treue auch nach Cannae fest." },
        { id: "mare", label: "Seemacht", x: 85, y: 58, color: "#eab308", html: "Die im Ersten Punischen Krieg gebaute Flotte.", why: "Rom lernte vom Gegner: Um Karthago zu besiegen, musste es zur Seemacht werden." },
        { id: "conquista", label: "Herrschaft über das Mittelmeer", x: 50, y: 92, color: "#334155", html: "Sizilien, Spanien, Afrika, Makedonien, Griechenland.", why: "Nach Karthago konnte keine Macht mehr mit Rom konkurrieren: Im 2. Jh. v. Chr. eroberte es das Mittelmeer und musste sich neuen inneren Problemen stellen." }
      ],
      edges: [
        ["posizione", "esercito", "nährt das"],
        ["istituzioni", "lotta", "entwickeln sich mit dem"],
        ["lotta", "esercito", "motiviert das"],
        ["esercito", "alleanze", "stützt sich auf die"],
        ["alleanze", "conquista", "ermöglichen die"],
        ["mare", "conquista", "öffnet die"],
        ["istituzioni", "alleanze", "garantieren die"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Punische Kriege",
      questions: [
        { type: "mc", q: "Wer besiegte Hannibal bei Zama?", options: ["Scipio", "Fabius Maximus", "Pyrrhus"], answer: 0, explain: "Scipio, später „Africanus“ genannt." },
        { type: "tf", q: "Nach der Schlacht von Cannae verließen die italischen Bundesgenossen Rom in Massen.", answer: false, explain: "Die meisten blieben treu." },
        { type: "text", q: "Wie heißt die erste römische Provinz, die im Ersten Punischen Krieg erobert wurde?", answer: ["Sizilien", "sizilien"], explain: "Sizilien." },
        { type: "order", q: "Bringe die Ereignisse in die richtige Reihenfolge.", items: ["Erster Punischer Krieg", "Cannae", "Zama", "Zerstörung Karthagos"], explain: "264, 216, 202, 146 v. Chr." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Rom: traditionelle Gründung 753 v. Chr.; sieben Könige; die letzten drei Etrusker; Vertreibung der Könige 509 v. Chr. → <b>Republik</b>.</li>
<li>Institutionen: <b>Konsuln</b> (2, einjährig), <b>Senat</b>, <b>Komitien</b>, Magistrate, <b>Volkstribunen</b>.</li>
<li>Kampf Patrizier-Plebejer: Tribunen (494), Zwölf Tafeln (450), Licinisch-Sextische Gesetze (367), Lex Hortensia (287).</li>
<li>Eroberung Italiens: Veji, Samniten, Pyrrhus (275), Tarent (272); Bundesgenossen und Kolonien.</li>
<li>Punische Kriege (264-146 v. Chr.): Sizilien, Hannibal (Cannae 216), Zama 202, Zerstörung Karthagos 146.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Res publica", d: "„Öffentliche Sache“: die römische Republik." },
    { t: "Patrizier", d: "Adlige Familien, die in den ersten Jahrhunderten die Ämter innehatten." },
    { t: "Plebejer", d: "Nichtadlige Bürger, anfangs von den Ämtern ausgeschlossen." },
    { t: "Konsul", d: "Einer der beiden obersten Beamten, ein Jahr im Amt." },
    { t: "Senat", d: "Rat ehemaliger Magistrate, Zentrum der Macht." },
    { t: "Volkstribun", d: "Beamter, der die Plebejer mit dem Vetorecht schützte." },
    { t: "Diktator", d: "Beamter mit voller Macht für sechs Monate im Notfall." },
    { t: "Socii", d: "Italische Bundesgenossen Roms." },
    { t: "Provinz", d: "Gebiet außerhalb Italiens, von einem römischen Beamten verwaltet." },
    { t: "Legion", d: "Grundeinheit des römischen Heeres." },
    { t: "Carthago delenda est", d: "„Karthago muss zerstört werden“: Leitspruch Catos." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welches Ereignis markiert den Beginn der römischen Republik?", options: ["Die Vertreibung des Tarquinius Superbus (509 v. Chr.)", "Die Gründung Roms", "Die Zerstörung Karthagos"], answer: 0, explain: "Der Überlieferung nach 509 v. Chr." },
      { type: "mc", q: "Welches Volk beherrschte Rom im 6. Jh. v. Chr.?", options: ["Die Etrusker", "Die Samniten", "Die Gallier"], answer: 0, explain: "Die letzten drei Könige waren Etrusker." },
      { type: "tf", q: "Es gab zwei Konsuln, und sie blieben ein Jahr im Amt.", answer: true, explain: "Sie konnten sich gegenseitig blockieren." },
      { type: "text", q: "Wie heißt der Beamte der Plebejer mit Vetorecht?", answer: ["Volkstribun", "der Volkstribun", "Tribun", "Tribunus plebis"], explain: "Der Volkstribun." },
      { type: "mc", q: "Was ist das Zwölftafelgesetz?", options: ["Die ersten geschriebenen römischen Gesetze", "Ein Vertrag mit Karthago", "Eine Heeresreform"], answer: 0, explain: "Um 450 v. Chr." },
      { type: "mc", q: "Welcher von Tarent gerufene König versuchte, Süditalien zu erobern?", options: ["Pyrrhus", "Hannibal", "Brennus"], answer: 0, explain: "Pyrrhus, König von Epirus." },
      { type: "order", q: "Bringe die Ereignisse in die chronologische Reihenfolge.", items: ["Vertreibung der Könige", "Zwölf Tafeln", "Eroberung von Veji", "Erster Punischer Krieg", "Zama"], explain: "509, 450, 396, 264, 202 v. Chr." },
      { type: "mc", q: "Warum konnte Hannibal Rom trotz seines Sieges bei Cannae nicht besiegen?", options: ["Die italischen Bundesgenossen blieben Rom treu", "Rom hatte keine Soldaten", "Karthago wollte den Krieg nicht"], answer: 0, explain: "Das römische Bündnisnetz hielt stand." },
      { type: "num", q: "In welchem Jahr v. Chr. wurde Karthago zerstört?", answer: 146, tol: 0, explain: "146 v. Chr." },
      { type: "tf", q: "Rom eroberte Italien, indem es allen Völkern denselben Rechtsstatus auferlegte.", answer: false, explain: "Es nutzte verschiedene Bedingungen: Bürgerrecht, Bündnis, Kolonien." },
      { type: "mc", q: "Was war die erste römische Provinz?", options: ["Sizilien", "Ägypten", "Griechenland"], answer: 0, explain: "Nach dem Ersten Punischen Krieg." }
    ]
  }
});
