TOPIC('de', {
  id: "l1-fis-equilibrio-fluidi",
  title: "Gleichgewicht von Flüssigkeiten",
  intro: "Warum tun die Ohren weh, wenn man tief taucht? Warum schwimmt ein Stahlschiff, während eine Stecknadel untergeht? Wie schafft es ein kleiner Druck des Fußes auf das Pedal, ein Auto von einer Tonne anzuhalten? Die Antworten liegen im <b>Druck</b> und in drei Gesetzen, die die Namen großer Wissenschaftler tragen: <b>Pascal</b>, <b>Stevin</b> und <b>Archimedes</b>. In dieser Lektion untersuchen wir Fluide, also Flüssigkeiten und Gase, wenn sie <b>ruhen</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Was ist Druck?",
      html: `<p>Wenn du mit Wanderstiefeln über frischen Schnee gehst, sinkst du ein, mit Skiern nicht. Die Gewichtskraft ist dieselbe, aber die <b>Fläche</b>, auf die sie sich verteilt, ändert sich. Um diese Wirkung zu beschreiben, benutzt man den <b>Druck</b>:</p>
<p style="text-align:center"><b>p = F / A</b></p>
<p>Dabei ist F die zur Fläche <b>senkrechte</b> Kraft und A die Fläche, auf die sie wirkt. Im Internationalen Einheitensystem ist die Einheit das <b>Pascal</b> (Pa): 1 Pa = 1 N/m². Das ist ein winziger Druck (ein auf einem Tisch liegendes Blatt Papier übt etwa 1 Pa aus!), daher verwendet man oft:</p>
<ul>
<li>das <b>Hektopascal</b> (hPa) = 100 Pa, gebräuchlich in der Wettervorhersage;</li>
<li>die <b>Atmosphäre</b> (atm): 1 atm = 101 325 Pa ≈ 1013 hPa, der mittlere Luftdruck auf Meereshöhe;</li>
<li>das <b>Bar</b>: 1 bar = 100 000 Pa (den Reifendruck misst man in bar);</li>
<li>den <b>Millimeter Quecksilbersäule</b> (mmHg): 1 atm = 760 mmHg.</li>
</ul>
<p>Beispiel: ein Nagel und ein Hammer. Dieselbe Kraft von 100 N, auf den Nagelkopf (etwa 1 cm² = 0,0001 m²) ausgeübt, ergibt p = 100/0,0001 = 1 000 000 Pa, auf der Spitze (0,01 mm² = 10<sup>−8</sup> m²) dagegen p = 10 000 000 000 Pa: Deshalb dringt die Spitze ins Holz ein.</p>`
    },
    {
      type: "example",
      title: "Beispiel: Stöckelabsatz gegen Wanderstiefel",
      html: `<p>Eine Person von 60 kg (F<sub>G</sub> = 588 N) steht auf einem Stöckelabsatz mit der Fläche 1 cm² (0,0001 m²) oder auf zwei Wanderstiefeln mit je 200 cm² (0,02 m²) Sohlenfläche.</p>
<ol>
<li>Stöckelabsatz (das ganze Gewicht auf einem Absatz): p = 588 / 0,0001 = <b>5 880 000 Pa</b> (etwa 58 atm!).</li>
<li>Wanderstiefel (zwei Sohlen, A gesamt = 0,04 m²): p = 588 / 0,04 = <b>14 700 Pa</b> (etwa 0,15 atm).</li>
</ol>
<p>Der Absatz hat einen fast 400-mal größeren Druck: Deshalb kann er einen Holzboden durchlöchern, die Wanderstiefel nicht. Das ist auch der Grund, warum Skier, Schneeschuhe und die Raupenketten von Traktoren das Gewicht auf große Flächen verteilen.</p>`
    },
    {
      type: "text",
      title: "Das Pascalsche Prinzip und die hydraulische Presse",
      html: `<p>Flüssigkeiten sind (praktisch) <b>inkompressibel</b> und übertragen den Druck in alle Richtungen. Blaise Pascal (1623–1662) formulierte es so:</p>
<p style="text-align:center"><b>Ein Druck, der auf einen Punkt eines ruhenden Fluids ausgeübt wird, überträgt sich unverändert auf jeden anderen Punkt des Fluids und auf die Gefäßwände.</b></p>
<p>Anwendung: die <b>hydraulische Presse</b>. Zwei Kolben mit verschiedener Fläche, A<sub>1</sub> (klein) und A<sub>2</sub> (groß), sind durch eine Flüssigkeit verbunden. Wenn wir den kleinen mit F<sub>1</sub> drücken, überträgt sich der Druck p = F<sub>1</sub>/A<sub>1</sub> auf den großen, der die Kraft F<sub>2</sub> = p·A<sub>2</sub> ausübt:</p>
<p style="text-align:center"><b>F<sub>1</sub> / A<sub>1</sub> = F<sub>2</sub> / A<sub>2</sub></b></p>
<p>Ist A<sub>2</sub> das 100-Fache von A<sub>1</sub>, vervielfacht sich die Kraft um den Faktor 100. Aber Vorsicht: Die Flüssigkeit entsteht nicht und verschwindet nicht, also muss sich der kleine Kolben <b>100-mal weiter</b> bewegen als der große. Die Arbeit (Kraft × Weg) ist dieselbe: Wie beim Hebel gewinnt man keine Energie, man tauscht Kraft gegen Weg.</p>
<p>Das Pascalsche Prinzip liegt den hydraulischen Bremsen der Autos, den Hebebühnen in Werkstätten, den Pressen und den Armen der Bagger zugrunde.</p>`
    },
    {
      type: "svg",
      title: "Die hydraulische Presse",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<path d="M90 120 L90 230 L510 230 L510 100 L420 100 L420 190 L180 190 L180 120 Z" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<rect x="95" y="100" width="80" height="18" fill="#64748b"/>
<rect x="125" y="60" width="20" height="40" fill="#64748b"/>
<line x1="135" y1="20" x2="135" y2="56" stroke="#16a34a" stroke-width="5"/>
<polygon points="135,58 126,42 144,42" fill="#16a34a"/>
<text x="150" y="35" font-size="18" fill="#15803d" font-weight="bold">F1 (klein)</text>
<text x="135" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">A1</text>
<rect x="425" y="78" width="130" height="18" fill="#64748b"/>
<rect x="470" y="40" width="40" height="38" fill="#64748b"/>
<rect x="445" y="14" width="90" height="26" rx="4" fill="#ef4444"/>
<text x="490" y="33" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">Last</text>
<line x1="590" y1="40" x2="590" y2="92" stroke="#16a34a" stroke-width="5"/>
<polygon points="590,38 582,54 598,54" fill="#16a34a"/>
<text x="480" y="260" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">A2 (groß)</text>
<text x="300" y="215" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">überall derselbe Druck</text>
<text x="300" y="130" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">F1 / A1 = F2 / A2</text>
</svg>`,
      caption: "Der Druck p = F/A ist in beiden Kolben derselbe. Ist A2 = 20·A1, dann ist F2 = 20·F1, aber der kleine Kolben senkt sich um eine 20-mal größere Strecke."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Druck und Pascal",
      questions: [
        { type: "num", q: "Eine Kraft von 200 N wirkt senkrecht auf eine Fläche von 0,5 m². Welcher Druck (in Pa) ergibt sich?", answer: 400, unit: "Pa", explain: "p = F/A = 200 / 0,5 = 400 Pa." },
        { type: "num", q: "Bei einer hydraulischen Presse hat der kleine Kolben die Fläche 4 cm² und der große 100 cm². Übt man auf den kleinen 50 N aus, welche Kraft (in N) erhält man am großen?", answer: 1250, unit: "N", explain: "F2 = F1·A2/A1 = 50 × 100/4 = 1250 N." },
        { type: "tf", q: "Die hydraulische Presse spart außer Kraft auch Arbeit.", answer: false, explain: "Die Arbeit bleibt gleich: Die Kraft vervielfacht sich, aber der Weg des großen Kolbens ist entsprechend kleiner." }
      ]
    },
    {
      type: "text",
      title: "Das Stevinsche Gesetz",
      html: `<p>In einer ruhenden Flüssigkeit <b>nimmt der Druck mit der Tiefe zu</b>: Zu jedem darunterliegenden Punkt kommt das Gewicht der darüberliegenden Flüssigkeitssäule hinzu. Simon Stevin (1548–1620), flämischer Mathematiker und Ingenieur, formulierte das Gesetz:</p>
<p style="text-align:center"><b>p = p<sub>0</sub> + ρ · g · h</b></p>
<ul>
<li>p<sub>0</sub> ist der Druck an der Oberfläche (meist der Luftdruck);</li>
<li>ρ ist die <b>Dichte</b> der Flüssigkeit (Wasser: etwa 1000 kg/m³);</li>
<li>g = 9,8 m/s²;</li>
<li>h ist die <b>Tiefe</b>.</li>
</ul>
<p>Aus der Formel folgt:</p>
<ul>
<li>Der Druck hängt <b>nur von der Tiefe</b> und der Dichte ab, nicht von der Form des Gefäßes und nicht von der Wassermenge (das „hydrostatische Paradoxon“);</li>
<li>alle Punkte in derselben Tiefe haben denselben Druck: Die freie Oberfläche einer Flüssigkeit ist <b>waagerecht</b>;</li>
<li>in <b>verbundenen Gefäßen</b> steht eine homogene Flüssigkeit in allen Schenkeln gleich hoch; bei verschiedenen Flüssigkeiten sind die Höhen <b>umgekehrt proportional</b> zu den Dichten (ρ<sub>1</sub>h<sub>1</sub> = ρ<sub>2</sub>h<sub>2</sub>).</li>
</ul>
<p>Alle <b>10 m</b> Tiefe im Wasser steigt der Druck um etwa <b>1 atm</b> (ρgh = 1000·9,8·10 ≈ 98 000 Pa). In 30 m Tiefe hat ein Taucher also einen Gesamtdruck von etwa 4 atm: 1 von der Luft plus 3 vom Wasser.</p>`
    },
    {
      type: "example",
      title: "Beispiel: der Druck im Schwimmbad und am Meeresgrund",
      html: `<p>Berechnen wir den <b>vom Wasser herrührenden</b> Druck in verschiedenen Tiefen (ρ = 1000 kg/m³, g = 9,8 m/s²):</p>
<ul>
<li>3 m (Boden eines tiefen Schwimmbeckens): ρgh = 1000 × 9,8 × 3 = 29 400 Pa, etwa 0,3 atm;</li>
<li>40 m (Grenze für einen tiefen Sporttauchgang): 392 000 Pa, etwa 3,9 atm allein vom Wasser, etwa 4,9 atm insgesamt;</li>
<li>etwa 10 900 m (Marianengraben, an der tiefsten Stelle): etwa 1100 atm: Auf jedem Quadratzentimeter lastet ein Gewicht von über einer Tonne.</li>
</ul>
<p>Deshalb haben U-Boote widerstandsfähige Rümpfe, und Tauchkugeln sind Kugeln aus dickem Stahl oder Titan: Die Kugel verteilt den Druck besser. Auf unser Trommelfell ist schon in nur 2 m Tiefe der Druckunterschied spürbar (etwa 0,2 atm) und lässt uns das Ohr „spüren“.</p>`
    },
    {
      type: "svg",
      title: "Der Druck wächst mit der Tiefe",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="40" width="260" height="230" fill="#7dd3fc" stroke="#0369a1" stroke-width="3"/>
<line x1="60" y1="40" x2="320" y2="40" stroke="#0369a1" stroke-width="4"/>
<text x="190" y="30" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">Oberfläche: p0</text>
<g stroke="#1e3a8a" stroke-width="3" fill="#1e3a8a">
<line x1="150" y1="90" x2="205" y2="90"/><polygon points="210,90 198,84 198,96"/>
<line x1="150" y1="170" x2="225" y2="170"/><polygon points="230,170 218,164 218,176"/>
<line x1="150" y1="250" x2="245" y2="250"/><polygon points="250,250 238,244 238,256"/>
</g>
<text x="75" y="95" font-size="16" fill="#1f2937">h = 5 m</text>
<text x="75" y="175" font-size="16" fill="#1f2937">h = 15 m</text>
<text x="75" y="255" font-size="16" fill="#1f2937">h = 25 m</text>
<text x="360" y="95" font-size="17" fill="#1f2937">p = 1 + 0,5 = 1,5 atm</text>
<text x="360" y="175" font-size="17" fill="#1f2937">p = 1 + 1,5 = 2,5 atm</text>
<text x="360" y="255" font-size="17" fill="#1f2937">p = 1 + 2,5 = 3,5 atm</text>
<text x="360" y="50" font-size="16" fill="#475569">längerer Pfeil = größerer Druck</text>
</svg>`,
      caption: "Alle 10 m Wasser kommt etwa 1 atm hinzu. Die Pfeile zeigen, dass der Druck senkrecht auf die Wände wirkt und nach unten zunimmt."
    },
    {
      type: "text",
      title: "Der Luftdruck und Torricelli",
      html: `<p>Auch die Luft hat ein Gewicht: Über jedem Quadratmeter Erdoberfläche steht eine Luftsäule von mehreren zehn Kilometern Höhe, die etwa 100 000 N wiegt. Deshalb beträgt der Luftdruck auf Meereshöhe etwa <b>1 atm = 101 325 Pa</b>.</p>
<p>Im Jahr <b>1643</b> füllte Evangelista Torricelli, ein Schüler Galileis, ein etwa einen Meter langes, an einem Ende geschlossenes Glasrohr mit Quecksilber und stellte es umgekehrt in eine Wanne mit Quecksilber. Das Quecksilber sank, bis es sich bei etwa <b>760 mm</b> über dem Wannenpegel einpendelte, und ließ oben einen leeren Raum zurück (das „Torricellische Vakuum“). Es war der Luftdruck, der die Säule trug: Das <b>Barometer</b> war geboren. Quecksilber ist 13,6-mal dichter als Wasser: Mit Wasser wäre die Säule über 10 m hoch (etwa 10,3 m).</p>
<p>Um 1654 zeigte Otto von Guericke die Kraft des Luftdrucks mit den <b>Magdeburger Halbkugeln</b>: Nachdem die Luft aus zwei Kupferhalbkugeln abgepumpt war, schafften es zwei Pferdegespanne nicht, sie zu trennen. In der Höhe sinkt der Druck: In etwa 5500 m Höhe beträgt er etwa die Hälfte des Drucks auf Meereshöhe, und deshalb kocht Wasser im Gebirge bei weniger als 100 °C, und Chipstüten blähen sich im Flugzeug auf.</p>`
    },
    {
      type: "text",
      title: "Das Archimedische Prinzip",
      html: `<p>Warum wiegt ein Stein im Wasser weniger, und warum ist ein Ball schwer unter Wasser zu halten? Weil jeder in ein Fluid getauchte Körper eine Kraft nach oben erfährt, die Archimedes von Syrakus (3. Jahrhundert v. Chr.) so formulierte:</p>
<p style="text-align:center"><b>Ein in ein Fluid getauchter Körper erfährt einen Auftrieb, der gleich der Gewichtskraft des verdrängten Fluids ist.</b></p>
<p style="text-align:center"><b>F<sub>A</sub> = ρ<sub>Fluid</sub> · V<sub>eingetaucht</sub> · g</b></p>
<p>Wie entsteht er? Nach dem Stevinschen Gesetz ist der Druck auf der Unterseite des Körpers (der tiefer liegt) größer als auf der Oberseite: Die Differenz ergibt eine resultierende Kraft nach oben, die nur vom Volumen des verdrängten Fluids abhängt.</p>
<p>Wird ein Körper der Dichte ρ<sub>K</sub> in einem Fluid der Dichte ρ<sub>F</sub> losgelassen, vergleicht man die Gewichtskraft (ρ<sub>K</sub> V g) und den Auftrieb (ρ<sub>F</sub> V g):</p>
<ul>
<li>ρ<sub>K</sub> &gt; ρ<sub>F</sub>: Die Gewichtskraft überwiegt, der Körper <b>sinkt</b>;</li>
<li>ρ<sub>K</sub> = ρ<sub>F</sub>: Gleichgewicht an jeder Stelle, der Körper <b>schwebt</b> (wie ein U-Boot in der Schwebelage);</li>
<li>ρ<sub>K</sub> &lt; ρ<sub>F</sub>: Der Auftrieb überwiegt, der Körper steigt auf und <b>schwimmt</b>. Im Gleichgewicht gilt für den eingetauchten Teil ρ<sub>F</sub> V<sub>eing</sub> = ρ<sub>K</sub> V, also V<sub>eing</sub>/V = ρ<sub>K</sub>/ρ<sub>F</sub>.</li>
</ul>
<p>Ein Eisblock (ρ = 917 kg/m³) in Süßwasser (1000 kg/m³) hat etwa <b>92 %</b> seines Volumens unter Wasser: Die „Spitze des Eisbergs“ ist wirklich klein. In Meerwasser (etwa 1025 kg/m³) ragt etwas mehr heraus (etwa 10 %).</p>`
    },
    {
      type: "example",
      title: "Beispiel: Wie schwer ist ein Stein im Wasser?",
      html: `<p>Ein Stein mit dem Volumen 2 dm³ (0,002 m³) und der Dichte 2700 kg/m³ hängt an einem Kraftmesser.</p>
<ol>
<li>Masse: m = 2700 × 0,002 = 5,4 kg; Gewichtskraft in Luft: F<sub>G</sub> = 5,4 × 9,8 ≈ <b>52,9 N</b>.</li>
<li>Ganz in Wasser getaucht: Auftrieb F<sub>A</sub> = 1000 × 0,002 × 9,8 = <b>19,6 N</b>.</li>
<li>Der Kraftmesser zeigt die <b>scheinbare Gewichtskraft</b> an: 52,9 − 19,6 ≈ <b>33,3 N</b>.</li>
</ol>
<p>Der Stein „wiegt“ etwa 37 % weniger. Deshalb kannst du im Schwimmbad einen Freund hochheben: Seine scheinbare Gewichtskraft im Wasser ist nur ein kleiner Bruchteil der wirklichen.</p>`
    },
    {
      type: "curiosity",
      title: "„Heureka!“ und die Krone des Königs",
      html: `<p>Nach dem Bericht des römischen Architekten Vitruv hatte der Tyrann von Syrakus, Hieron II., einem Goldschmied Gold für eine Krone übergeben und vermutete, es sei mit Silber vermischt worden. Archimedes sollte den Betrug aufdecken, ohne die Krone zu beschädigen. Als er in eine Badewanne stieg, bemerkte er, dass das Wasser überlief, und begriff, dass er das <b>Volumen</b> der Krone am verdrängten Wasser messen konnte; durch den Vergleich ihrer Dichte mit der von Gold würde er den Betrug entdecken. Er lief nackt durch die Straßen und rief „Heureka!“ („ich hab’s gefunden!“). Die Historiker sind sich über die Einzelheiten der Geschichte nicht sicher (manche glauben, er habe eine hydrostatische Waage benutzt), aber die Methode über die Dichte funktioniert noch heute, um Materialien zu erkennen.</p>`
    },
    {
      type: "curiosity",
      title: "Warum schwimmt ein Stahlschiff?",
      html: `<p>Stahl hat eine Dichte von etwa 7800 kg/m³, fast achtmal so viel wie Wasser: Ein massives Stück geht unter. Aber ein Schiffsrumpf ist <b>hohl</b>: Er enthält viel Luft. Es zählt die <b>mittlere Dichte</b> des ganzen Gegenstands (Rumpf + Luft + Ladung). Ist sie kleiner als die des Wassers, schwimmt das Schiff. Wird das Schiff beladen, sinkt es etwas tiefer ein, verdrängt mehr Wasser und erhöht den Auftrieb, bis der Auftrieb der gesamten Gewichtskraft entspricht: Deshalb werden an den Bordwänden „Ladelinien“ (die Plimsoll-Marke) aufgemalt. Entsteht ein Leck und das Wasser tritt an die Stelle der Luft, übersteigt die mittlere Dichte die des Wassers, und das Schiff sinkt.</p>`
    },
    {
      type: "widget",
      title: "Schwimmt oder sinkt es in Süßwasser?",
      widget: "classify",
      options: { groups: ["Schwimmt", "Sinkt"], items: [
        ["🧊 Eis (917 kg/m³)", 0],
        ["🪵 Kiefernholz (etwa 500 kg/m³)", 0],
        ["🫒 Olivenöl (etwa 920 kg/m³)", 0],
        ["🪨 Stein (etwa 2700 kg/m³)", 1],
        ["🔩 massives Eisen (7870 kg/m³)", 1],
        ["🥇 Gold (19 300 kg/m³)", 1],
        ["🎈 Styropor (etwa 30 kg/m³)", 0],
        ["⚓ Blei (11 340 kg/m³)", 1]
      ] },
      caption: "Vergleiche die Dichte des Körpers mit der des Wassers (1000 kg/m³)."
    },
    {
      type: "alternatives",
      title: "Andere Wege, Auftrieb und Druck zu verstehen",
      intro: "Archimedes und Stevin sind nicht so anschaulich, wie sie scheinen. Hier sind andere Wege.",
      tabs: [
        {
          label: "📦 Das verdrängte Fluid",
          html: `<p>Stell dir vor, du nimmst den Stein aus dem Wasser und ersetzt ihn durch eine „Wasserblase“ gleicher Form. Diese Blase würde ruhig im Gleichgewicht mit dem umgebenden Wasser stehen: Also ist die Kraft des Wassers auf die Blase genau gleich ihrer Gewichtskraft. Setze nun den Stein wieder ein: Das umgebende Wasser „weiß“ nicht, was in der Form steckt, und drückt daher genauso. <b>Der Auftrieb ist die Gewichtskraft des Wassers, das der Körper verdrängt hat.</b> Diese Überlegung (typisch für Archimedes) erklärt auch, warum die Form keine Rolle spielt, sondern nur das verdrängte Volumen.</p>`
        },
        {
          label: "🥤 Die Presse mit Spritzen",
          html: `<p>Nimm zwei Spritzen mit verschiedenem Durchmesser, verbunden durch einen mit Wasser gefüllten Schlauch. Wenn du die kleinere mit wenig Kraft drückst, bewegt sich die große mit mehr Kraft, aber <b>nur ein wenig</b>: Um den großen Kolben (doppelter Durchmesser, vierfache Fläche) um 1 cm zu bewegen, musst du den kleinen um 4 cm schieben. Du erhältst die vierfache Kraft, musst aber den vierfachen Weg zurücklegen. Man kann das Experiment zu Hause machen, und es ist ein einfacher Weg, das Pascalsche Prinzip zu „spüren“.</p>`
        },
        {
          label: "🏔️ Die Wassersäule",
          html: `<p>Denk an einen Turm aus Ziegeln: Der unterste Ziegel trägt das Gewicht aller darüberliegenden. Genauso im Wasser: In der Tiefe h steht über jedem cm² eine Wassersäule der Höhe h. Ihre Gewichtskraft ist: Volumen (A·h) × Dichte × g. Teilt man durch A, erhält man p = ρ g h. Es ist egal, ob darüber ein Schwimmbad oder ein riesiger See liegt: Es zählt die <b>Höhe</b> der Säule.</p>`
        },
        {
          label: "📏 Den Pegel messen",
          html: `<p>Das „hydrostatische Paradoxon“ besagt, dass der Boden eines unten breiten und oben schmalen Gefäßes denselben Druck hat wie der eines zylindrischen, wenn die Flüssigkeitshöhe gleich ist. In verbundenen Gefäßen stellt sich die Flüssigkeit auf dieselbe Höhe ein, weil nur so der Druck am Boden in jedem Schenkel gleich ist.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Begriffslandkarte des Gleichgewichts von Fluiden",
      nodes: [
        { id: "fluidi", label: "Fluide im Gleichgewicht", x: 50, y: 6, color: "#64748b", html: "Ruhende Flüssigkeiten und Gase: Sie haben keine eigene Form, sondern passen sich dem Gefäß an.", why: "Ihre Statik (Hydrostatik) entsteht in der Antike mit Archimedes und wurde im 17. Jahrhundert von Stevin, Torricelli und Pascal neu belebt, als die experimentelle Wissenschaft begann, den Luftdruck zu messen." },
        { id: "pressione", label: "Druck p = F/A", x: 20, y: 28, color: "#2563eb", html: "Senkrechte Kraft pro Flächeneinheit, in Pascal.", why: "Die Einheit trägt den Namen von Blaise Pascal. Der Begriff ist nötig, weil in Fluiden die Kraft nicht in einem Punkt angreift, sondern über die ganze Fläche verteilt ist." },
        { id: "pascal", label: "Pascalsches Prinzip", x: 12, y: 54, color: "#16a34a", html: "Der Druck überträgt sich gleich im ganzen Fluid.", why: "Pascal formulierte es 1647–1654 nach Torricellis Experimenten. Es folgt daraus, dass ein ruhendes Fluid keine Tangentialkräfte aufnehmen kann: Die Kraft auf die Wände steht immer senkrecht." },
        { id: "stevino", label: "Stevinsches Gesetz", x: 40, y: 54, color: "#f59e0b", html: "p = p0 + ρgh: Der Druck wächst mit der Tiefe.", why: "Stevin (1586) leitete es aus Überlegungen zum Gleichgewicht eines Flüssigkeitsstücks ab: Auf seiner Unterseite muss der Druck wirken, der die Gewichtskraft der ganzen darüberliegenden Säule trägt." },
        { id: "torchio", label: "Hydraulische Presse", x: 8, y: 80, color: "#22c55e", html: "F1/A1 = F2/A2: Sie vervielfacht die Kraft.", why: "Technische Anwendung von Pascals Prinzip (Ende des 18. Jahrhunderts, Bramah). Sie erzeugt keine Energie: Die gewonnene Kraft bezahlt man mit Weg." },
        { id: "atmosfera", label: "Luftdruck", x: 60, y: 28, color: "#0ea5e9", html: "Die Gewichtskraft der Luft: etwa 1 atm auf Meereshöhe.", why: "Torricelli (1643) maß ihn mit dem Quecksilberbarometer: Die Säule ist 760 mm hoch, weil ρ_Hg g h gleich dem Luftdruck ist." },
        { id: "archimede", label: "Auftrieb nach Archimedes", x: 75, y: 54, color: "#9333ea", html: "F_A = ρ V g, nach oben gerichtet.", why: "Er folgt aus dem Stevinschen Gesetz: Unter dem Körper ist der Druck größer als darüber. Archimedes formulierte ihn in der Abhandlung Über schwimmende Körper (3. Jh. v. Chr.)." },
        { id: "galleggiamento", label: "Schwimmen", x: 70, y: 82, color: "#ef4444", html: "Hängt vom Vergleich der Dichte des Körpers mit der des Fluids ab.", why: "Übersteigt die Gewichtskraft den Auftrieb, sinkt der Körper, sonst steigt er, bis der Auftrieb auf den eingetauchten Teil gleich der Gewichtskraft ist. Ein Schiff schwimmt wegen seiner mittleren Dichte." }
      ],
      edges: [["fluidi", "pressione", "wird gemessen mit"], ["pressione", "pascal", "überträgt sich"], ["pressione", "stevino", "wächst mit h"], ["pascal", "torchio", "Anwendung"], ["stevino", "atmosfera", "Luftsäule"], ["stevino", "archimede", "woraus folgt"], ["archimede", "galleggiamento", "erklärt"]]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li><b>Druck</b>: p = F/A (Pascal, 1 Pa = 1 N/m²). 1 atm = 101 325 Pa = 760 mmHg.</li>
<li><b>Pascal</b>: Der Druck überträgt sich gleich im ganzen Fluid. Presse: F1/A1 = F2/A2.</li>
<li><b>Stevin</b>: p = p0 + ρ g h. Alle 10 m Wasser: +1 atm.</li>
<li><b>Archimedes</b>: F<sub>A</sub> = ρ<sub>Fluid</sub> · V<sub>eingetaucht</sub> · g = Gewichtskraft des verdrängten Fluids.</li>
<li>Ein Körper schwimmt, wenn seine <b>mittlere</b> Dichte kleiner ist als die des Fluids.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Stevin und Archimedes",
      questions: [
        { type: "num", q: "Welchen Druck (in Pa) übt Wasser (ρ = 1000 kg/m³, g = 10 m/s²) in 5 m Tiefe aus, ohne den Luftdruck?", answer: 50000, tol: 0, unit: "Pa", explain: "p = ρ g h = 1000 × 10 × 5 = 50 000 Pa." },
        { type: "num", q: "Ein Würfel mit 10 cm Kantenlänge ist ganz in Wasser getaucht (ρ = 1000 kg/m³, g = 10 m/s²). Wie groß ist der Auftrieb (in N)?", answer: 10, unit: "N", explain: "V = 0,001 m³; F = 1000 × 0,001 × 10 = 10 N." },
        { type: "mc", q: "Ein Körper der Dichte 800 kg/m³ wird ins Wasser gelegt …", options: ["er sinkt", "er schwimmt mit 80 % unter Wasser", "er schwimmt mit 20 % unter Wasser"], answer: 1, explain: "Der eingetauchte Anteil ist ρK/ρF = 800/1000 = 0,8, also 80 %." },
        { type: "tf", q: "Der Druck in einer ruhenden Flüssigkeit hängt von der Form des Gefäßes ab.", answer: false, explain: "Er hängt nur von der Tiefe und der Dichte ab (Stevinsches Gesetz)." }
      ]
    }
  ],
  glossary: [
    { t: "Druck", d: "Verhältnis der senkrechten Kraft zur Fläche, auf die sie wirkt: p = F/A." },
    { t: "Pascal", d: "SI-Einheit des Drucks: 1 Pa = 1 N/m²." },
    { t: "Atmosphäre", d: "Druckeinheit: 1 atm = 101 325 Pa, mittlerer Luftdruck auf Meereshöhe." },
    { t: "Pascalsches Prinzip", d: "Der Druck auf einen Punkt eines ruhenden Fluids überträgt sich unverändert im ganzen Fluid." },
    { t: "Hydraulische Presse", d: "Maschine mit zwei Kolben verschiedener Fläche, die dank des Pascalschen Prinzips die Kraft vervielfacht." },
    { t: "Stevinsches Gesetz", d: "p = p0 + ρgh: Der Druck in einer Flüssigkeit wächst linear mit der Tiefe." },
    { t: "Dichte", d: "Verhältnis von Masse und Volumen: ρ = m/V." },
    { t: "Verbundene Gefäße", d: "Verbundene Behälter, in denen eine homogene Flüssigkeit gleich hoch steht." },
    { t: "Auftrieb", d: "Nach oben gerichtete Kraft auf einen eingetauchten Körper, gleich der Gewichtskraft des verdrängten Fluids." },
    { t: "Barometer", d: "Gerät zur Messung des Luftdrucks; das erste erfand Torricelli 1643." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Eine Kraft von 600 N ist gleichmäßig auf 0,3 m² verteilt. Welcher Druck (in Pa) ergibt sich?", answer: 2000, unit: "Pa", explain: "p = F/A = 600/0,3 = 2000 Pa." },
      { type: "mc", q: "Wie viele Pascal sind etwa 1 atm?", options: ["1000 Pa", "101 325 Pa", "760 Pa"], answer: 1, explain: "1 atm = 101 325 Pa, also 760 mmHg." },
      { type: "num", q: "Bei einer hydraulischen Presse hat der kleine Kolben die Fläche 5 cm², der große 200 cm². Mit welcher Kraft (in N) muss man den kleinen drücken, um eine Last zu heben, die am großen 4000 N erfordert?", answer: 100, unit: "N", explain: "F1 = F2·A1/A2 = 4000 × 5/200 = 100 N." },
      { type: "tf", q: "Bei der hydraulischen Presse ist der Weg des großen Kolbens größer als der des kleinen.", answer: false, explain: "Das verdrängte Flüssigkeitsvolumen ist gleich: Der große Kolben mit der größeren Fläche bewegt sich weniger." },
      { type: "num", q: "Wie groß ist der Druck des Wassers (ρ = 1000 kg/m³, g = 9,8 m/s²) in 20 m Tiefe, ohne den Luftdruck, in Pa?", answer: 196000, tol: 100, unit: "Pa", explain: "p = ρ g h = 1000 × 9,8 × 20 = 196 000 Pa, etwa 2 atm." },
      { type: "mc", q: "Wer maß als Erster den Luftdruck mit einem Quecksilberrohr?", options: ["Archimedes", "Torricelli", "Newton"], answer: 1, explain: "Evangelista Torricelli, 1643: Das Quecksilber blieb bei etwa 760 mm stehen." },
      { type: "tf", q: "Ein Körper mit einer größeren Dichte als Wasser kann niemals schwimmen, auch wenn er hohl ist.", answer: false, explain: "Es zählt die mittlere Dichte: Ein hohles Stahlschiff hat eine kleinere mittlere Dichte als Wasser." },
      { type: "num", q: "Ein Gegenstand mit dem Volumen 0,005 m³ ist ganz in Wasser getaucht (ρ = 1000 kg/m³, g = 10 m/s²). Wie groß ist der Auftrieb (in N)?", answer: 50, unit: "N", explain: "FA = ρ V g = 1000 × 0,005 × 10 = 50 N." },
      { type: "order", q: "Bringe die Schritte in die richtige Reihenfolge, um zu klären, ob ein Körper schwimmt.", items: ["Masse und Volumen des Körpers messen", "Die Dichte des Körpers berechnen (m/V)", "Sie mit der Dichte des Fluids vergleichen", "Schlussfolgern: Er schwimmt, wenn sie kleiner ist, und sinkt, wenn sie größer ist"], explain: "Man vergleicht die Dichten: Der Körper schwimmt, wenn seine mittlere Dichte kleiner ist als die des Fluids." },
      { type: "mc", q: "Warum nimmt der Druck zu, wenn man in einem See nach unten geht?", options: ["Weil das Wasser kälter ist", "Weil darüber die Gewichtskraft der Wassersäule lastet", "Weil die Schwerkraft zunimmt"], answer: 1, explain: "Jede Schicht muss das Gewicht des darüberliegenden Wassers tragen, wie es Stevin vorhergesagt hat." },
      { type: "text", q: "Wie heißt der Ausruf, der Archimedes zugeschrieben wird, als er die Methode zur Messung des Volumens der Krone entdeckte?", answer: ["heureka", "eureka"], explain: "„Heureka!“, aus dem Griechischen „ich hab’s gefunden“." }
    ]
  }
});
