TOPIC('de', {
  id: `m2-sto-scienza-ottocento`,
  title: `Die wissenschaftlichen Entdeckungen des 19. Jahrhunderts`,
  intro: `Das 19. Jahrhundert ist das Jahrhundert, in dem die Wissenschaft das Leben aller verändert: Aus der <b>Voltaschen Säule</b> entsteht das Zeitalter der <b>Elektrizität</b>; <b>Darwin</b> erklärt, wie sich Lebewesen entwickeln; <b>Pasteur</b> und <b>Koch</b> entdecken die Mikroben, die Krankheiten verursachen; Mendelejew bringt Ordnung in die chemischen Elemente. Vieles, was uns heute selbstverständlich ist, wie sich die Hände zu waschen oder das Licht anzuschalten, kommt von hier.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Warum gerade das 19. Jahrhundert?`,
      html: `<p>Im 19. Jahrhundert wird die Wissenschaft zu einem <b>Beruf</b>: An den Universitäten entstehen Labore, wissenschaftliche Zeitschriften, internationale Kongresse. Die <b>experimentelle Methode</b> Galileis (beobachten, eine Hypothese aufstellen, sie mit Experimenten überprüfen, Schlüsse ziehen) wird auf neue Gebiete angewandt: Elektrizität, Chemie, Biologie, Medizin.</p>
<p>Die Instrumente werden besser (stärkere Mikroskope, Thermometer, genaue Waagen), und die Industrie verlangt nützliche Erfindungen. Wissenschaft, Technik und Industrie treiben sich gegenseitig an: Das ist eine der Wurzeln der <b>zweiten industriellen Revolution</b>.</p>`
    },
    {
      type: `text`,
      title: `2. Die Elektrizität: vom Frosch zur Glühlampe`,
      html: `<ol>
<li><b>Galvani</b> (Bologna, 1780er–90er Jahre) bemerkt, dass sich Froschschenkel zusammenziehen, wenn zwei verschiedene Metalle sie berühren: Er denkt an eine „tierische Elektrizität“.</li>
<li><b>Alessandro Volta</b> (Pavia) erkennt, dass die Elektrizität durch den Kontakt zwischen <b>zwei Metallen</b> entsteht, die durch eine Flüssigkeit getrennt sind. Im Jahr <b>1800</b> kündigt er die <b>Säule</b> an: abwechselnde Scheiben aus Zink und Kupfer, getrennt durch Tuch, das mit Salzwasser getränkt ist. Es ist der erste Erzeuger von <b>Gleichstrom</b>. Nach ihm ist die Maßeinheit <b>Volt</b> benannt.</li>
<li>Im Jahr <b>1820</b> entdeckt der Däne <b>Ørsted</b>, dass ein elektrischer Strom die Nadel eines Kompasses bewegt: Elektrizität und Magnetismus hängen zusammen.</li>
<li>Im Jahr <b>1831</b> entdeckt der Engländer <b>Michael Faraday</b> die <b>elektromagnetische Induktion</b>: Wenn man einen Magneten in einer Drahtspule bewegt, entsteht Strom. Das ist das Prinzip des <b>Dynamos</b> und der Generatoren der heutigen Kraftwerke.</li>
<li>Im Jahr <b>1865</b> fasst der Schotte <b>James Clerk Maxwell</b> alles in vier Gleichungen zusammen und sagt die <b>elektromagnetischen Wellen</b> voraus: Das Licht ist eine von ihnen! <b>Hertz</b> erzeugt sie 1887 im Labor; Marconi wird sie für das Radio nutzen.</li>
</ol>
<p>Anwendungen: der <b>Telegraf</b> von Morse (1844), das Telefon (1876), die Glühlampe (1879), der Elektromotor.</p>`
    },
    {
      type: `widget`,
      title: `Wie die Voltasche Säule aufgebaut ist`,
      widget: `labelDiagram`,
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<rect x="230" y="40" width="140" height="18" fill="#b45309"/>
<rect x="230" y="58" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="66" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="84" width="140" height="18" fill="#b45309"/>
<rect x="230" y="102" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="110" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="128" width="140" height="18" fill="#b45309"/>
<rect x="230" y="146" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="154" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="172" width="140" height="18" fill="#b45309"/>
<rect x="230" y="190" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="198" width="140" height="18" fill="#9ca3af"/>
<rect x="210" y="216" width="180" height="20" fill="#78350f"/>
<path d="M370 49 C470 49 470 120 500 120" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M370 207 C470 207 470 160 500 160" stroke="#1d4ed8" stroke-width="5" fill="none"/>
<circle cx="510" cy="140" r="24" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="300" y="280" font-size="16" text-anchor="middle">Kupfer, Tuch mit Salzwasser, Zink … immer wieder</text>
</svg>`,
        spots: [
          { x: 300, y: 49, label: `Kupferscheibe` },
          { x: 300, y: 62, label: `Mit Salzwasser getränktes Tuch` },
          { x: 300, y: 75, label: `Zinkscheibe` },
          { x: 300, y: 226, label: `Holzsockel` },
          { x: 450, y: 70, label: `Leitungsdraht` },
          { x: 510, y: 140, label: `Glühlampe (heute)` }
        ]
      },
      caption: `Jedes „Paar“ aus Kupfer, Tuch und Zink liefert eine kleine Spannung; stapelt man viele davon, addieren sie sich. Zu Voltas Zeit gab es die Glühlampe noch nicht: Man spürte den Schlag oder sah Funken.`
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Elektrizität`,
      questions: [
        { type: `mc`, q: `Was kündigte Alessandro Volta 1800 an?`, options: [`Die Glühlampe`, `Die Säule`, `Den Telegrafen`], answer: 1, explain: `Die Voltasche Säule, den ersten Erzeuger von Gleichstrom.` },
        { type: `text`, q: `Welcher englische Wissenschaftler entdeckte 1831 die elektromagnetische Induktion?`, answer: [`faraday`, `michael faraday`], explain: `Michael Faraday: Ein bewegter Magnet in einer Spule erzeugt Strom.` },
        { type: `tf`, q: `Nach Maxwell ist das Licht eine elektromagnetische Welle.`, answer: true, explain: `Seine Gleichungen (1865) zeigen, dass Licht, Radiowellen und Röntgenstrahlen derselben Natur sind.` }
      ]
    },
    {
      type: `text`,
      title: `3. Darwin und die Evolution`,
      html: `<p>Im Jahr <b>1831</b> bricht der junge englische Naturforscher <b>Charles Darwin</b> auf dem Schiff <b>Beagle</b> zu einer Weltreise auf, die fünf Jahre dauert. Im Jahr <b>1835</b> beobachtet er auf den <b>Galápagos</b>-Inseln (Pazifik), dass die Finken verschiedener Inseln unterschiedliche Schnäbel haben, angepasst an die Nahrung der jeweiligen Insel.</p>
<p>Nach mehr als zwanzig Jahren Forschung veröffentlicht er <b>Die Entstehung der Arten</b> (<b>1859</b>). Seine Theorie, die <b>Evolution durch natürliche Auslese</b>, lässt sich in vier Schritten zusammenfassen:</p>
<ol>
<li><b>Variabilität</b>: Die Individuen einer Art sind alle ein bisschen verschieden.</li>
<li><b>Vererbung</b>: Viele Merkmale werden von den Eltern an die Kinder weitergegeben.</li>
<li><b>Kampf ums Überleben</b>: Es werden mehr Individuen geboren, als überleben können.</li>
<li><b>Auslese</b>: Wer Merkmale hat, die besser zur Umwelt passen, überlebt und pflanzt sich häufiger fort. Über sehr viele Generationen verändert sich die Art.</li>
</ol>
<p>Auch <b>Alfred Russel Wallace</b> kam unabhängig von ihm auf dieselbe Idee: Die beiden stellten ihre Theorien 1858 gemeinsam vor. Die Theorie erregte einen Skandal, weil sie auch den Menschen einschloss: Darwin behauptete, dass Mensch und Menschenaffen <b>gemeinsame Vorfahren</b> haben (nicht, dass der Mensch „vom Affen abstammt“).</p>
<p>Darwin wusste nicht, <i>wie</i> Merkmale vererbt werden. Das hatte, ohne dass er es wusste, der Mönch <b>Gregor Mendel</b> entdeckt: Durch Kreuzungen tausender Erbsenpflanzen in Brünn fand er <b>1865</b> die Gesetze der Vererbung, die Grundlage der <b>Genetik</b>. Seine Arbeit wurde erst 1900 wiederentdeckt.</p>`
    },
    {
      type: `svg`,
      title: `Die Finken der Galápagos`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfdf5"/>
<text x="300" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#065f46">Verschiedene Schnäbel für verschiedene Nahrung</text>
<ellipse cx="110" cy="140" rx="55" ry="40" fill="#a16207"/>
<circle cx="150" cy="110" r="25" fill="#a16207"/>
<circle cx="157" cy="104" r="4" fill="#111827"/>
<polygon points="172,100 205,110 172,122" fill="#1f2937"/>
<text x="110" y="215" font-size="15" text-anchor="middle" font-weight="bold">dicker Schnabel</text>
<text x="110" y="237" font-size="14" text-anchor="middle">knackt harte Samen</text>
<ellipse cx="300" cy="140" rx="55" ry="40" fill="#78716c"/>
<circle cx="340" cy="110" r="25" fill="#78716c"/>
<circle cx="347" cy="104" r="4" fill="#111827"/>
<polygon points="362,106 410,112 362,116" fill="#1f2937"/>
<text x="300" y="215" font-size="15" text-anchor="middle" font-weight="bold">dünner Schnabel</text>
<text x="300" y="237" font-size="14" text-anchor="middle">fängt Insekten</text>
<ellipse cx="490" cy="140" rx="55" ry="40" fill="#57534e"/>
<circle cx="530" cy="110" r="25" fill="#57534e"/>
<circle cx="537" cy="104" r="4" fill="#111827"/>
<polygon points="552,104 590,118 552,118" fill="#1f2937"/>
<text x="490" y="215" font-size="15" text-anchor="middle" font-weight="bold">langer Schnabel</text>
<text x="490" y="237" font-size="14" text-anchor="middle">Kaktusblüten</text>
<text x="300" y="280" font-size="15" text-anchor="middle" fill="#065f46">Ein gemeinsamer Vorfahr, verschiedene Anpassungen auf verschiedenen Inseln</text>
</svg>`,
      caption: `Vereinfachte Zeichnung: Auf den Galápagos leben mehr als ein Dutzend Finkenarten, Nachkommen eines Vorfahren, der vom Festland kam.`
    },
    {
      type: `text`,
      title: `4. Die Revolution der Medizin`,
      html: `<p>Zu Beginn des 19. Jahrhunderts wussten die Ärzte nicht, dass viele Krankheiten von <b>Mikroorganismen</b> verursacht werden. Man dachte an „Miasmen“, schlechte Luft. Operationen wurden ohne Narkose und ohne Händewaschen durchgeführt. So veränderte sich alles:</p>
<ul>
<li><b>1796</b> – <b>Edward Jenner</b> entwickelt den ersten <b>Impfstoff</b> gegen die Pocken, mit Hilfe der Kuhpocken (daher das Wort „Vakzine“ von lateinisch <i>vacca</i>, Kuh).</li>
<li><b>1846</b> – In Boston wird zum ersten Mal öffentlich ein mit <b>Äther</b> betäubter Patient operiert: Die <b>Narkose</b> ist geboren.</li>
<li><b>1847</b> – In Wien verpflichtet <b>Ignaz Semmelweis</b> die Ärzte, sich die Hände mit einer Chlorlösung zu waschen: Die Todesfälle durch Fieber bei Wöchnerinnen gehen stark zurück.</li>
<li><b>1854</b> – In London zeigt <b>John Snow</b> mit einer Karte, dass sich die Cholera über das Wasser eines verschmutzten Brunnens ausbreitet. Im selben Jahr beobachtet in Florenz <b>Filippo Pacini</b> unter dem Mikroskop das Cholera-Bakterium.</li>
<li><b>1860er-Jahre</b> – <b>Louis Pasteur</b> zeigt, dass Mikroben nicht „aus dem Nichts“ entstehen und dass sie Gärungen und Krankheiten verursachen (<b>Keimtheorie</b>). Er erfindet die <b>Pasteurisierung</b>: eine Flüssigkeit erhitzen, um die Mikroben abzutöten. Im Jahr <b>1885</b> rettet er mit seinem Impfstoff einen von einem tollwütigen Hund gebissenen Jungen.</li>
<li><b>1867</b> – <b>Joseph Lister</b> verwendet Karbolsäure zur Desinfektion von Wunden und Instrumenten: Die <b>Antisepsis</b> entsteht.</li>
<li><b>1882</b> – <b>Robert Koch</b> entdeckt das Bakterium der <b>Tuberkulose</b>; der 24. März ist noch heute der Welttuberkulosetag.</li>
<li><b>1895</b> – <b>Wilhelm Röntgen</b> entdeckt die <b>Röntgenstrahlen</b> (X-Strahlen): Zum ersten Mal kann man in den Körper hineinsehen, ohne ihn aufzuschneiden.</li>
</ul>`
    },
    {
      type: `text`,
      title: `5. Die Chemie und das Atom`,
      html: `<p>Im Jahr <b>1808</b> schlägt John <b>Dalton</b> vor, dass die Materie aus <b>Atomen</b> besteht, die für jedes Element verschieden sind. Im Jahr <b>1869</b> ordnet der Russe <b>Dmitri Mendelejew</b> die 63 damals bekannten Elemente nach Masse und Eigenschaften: Das <b>Periodensystem</b> entsteht. Mendelejew lässt <b>leere Felder</b> und sagt die Eigenschaften der fehlenden Elemente voraus: Gallium (entdeckt 1875), Scandium (1879) und Germanium (1886) bestätigen seine Vorhersagen!</p>
<p>Am Ende des Jahrhunderts entdeckt man, dass das Atom nicht unteilbar ist: <b>Becquerel</b> entdeckt die <b>Radioaktivität</b> (1896), <b>Marie und Pierre Curie</b> entdecken Polonium und Radium (1898), <b>J. J. Thomson</b> entdeckt das <b>Elektron</b> (1897). Marie Curie wird die erste Person sein, die zwei Nobelpreise gewinnt (Physik 1903, Chemie 1911).</p>`
    },
    {
      type: `widget`,
      title: `Das Periodensystem von Mendelejew, heute`,
      widget: `periodicTable`,
      options: {},
      caption: `Tippe auf die Elemente: Beachte, wie die Elemente in derselben Spalte ähnliche Eigenschaften haben. Genau diese „Periodizität“ bemerkte Mendelejew 1869.`
    },
    {
      type: `3d`,
      title: `Im Inneren des Atoms`,
      scene: `atom`,
      options: { elements: [`H`, `He`, `Li`, `C`, `O`, `Na`] },
      caption: `Das Bahnenmodell (von Bohr) stammt von 1913, geht aber auf die Entdeckungen vom Ende des 19. Jahrhunderts zurück: Elektron (1897) und Radioaktivität (1896).`
    },
    {
      type: `widget`,
      title: `Wer hat was entdeckt?`,
      widget: `match`,
      options: {
        pairs: [
          [`Alessandro Volta`, `Die elektrische Säule`],
          [`Michael Faraday`, `Elektromagnetische Induktion`],
          [`Charles Darwin`, `Evolution durch natürliche Auslese`],
          [`Gregor Mendel`, `Vererbungsgesetze`],
          [`Louis Pasteur`, `Pasteurisierung und Tollwutimpfstoff`],
          [`Robert Koch`, `Tuberkulose-Bakterium`],
          [`Dmitri Mendelejew`, `Periodensystem`],
          [`Wilhelm Röntgen`, `Röntgenstrahlen`]
        ]
      },
      caption: `Acht Wissenschaftler, acht Entdeckungen, die wir noch jeden Tag nutzen.`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: die Wissenschaft des 19. Jahrhunderts in deinem Kühlschrank`,
      html: `<p>Nimm eine Milchflasche: Darauf steht <b>„pasteurisiert“</b>. Das heißt, sie wurde erhitzt (etwa 72 °C für 15 Sekunden), um gefährliche Bakterien abzutöten, ohne sie zu kochen. Es ist die Methode, die <b>Pasteur</b> 1864 für Wein und Bier erfand, die schlecht wurden.</p>
<p>Schau dir nun eine Steckdose an: Die Spannung beträgt <b>230 Volt</b> (eine Einheit, die den Namen Voltas trägt) und wird von Generatoren erzeugt, die mit der Induktion von <b>Faraday</b> arbeiten. Das Licht im Kühlschrank, das angeht? Es stammt von einer Idee <b>Edisons</b>, heute zur LED geworden.</p>`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: Mach es wie John Snow`,
      html: `<p>Im Jahr 1854 starben in London innerhalb weniger Tage Hunderte von Menschen an Cholera im Viertel Soho. John Snow markierte auf einer Karte jedes Haus mit einem Toten: Die Punkte häuften sich rund um den <b>Brunnen in der Broad Street</b>. Er ließ den Pumpenschwengel entfernen, und die Epidemie, die schon abflaute, erlosch.</p>
<p>Probier es auch: Wenn in der Klasse viele Bauchschmerzen haben, was würdest du notieren? Wer was gegessen hat, wo, wann … Das ist die Methode der <b>Epidemiologie</b>: Daten sammeln, sie auf eine Karte oder in eine Tabelle eintragen, den gemeinsamen Faktor suchen.</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du … dass die erste Röntgenaufnahme eine Hand mit Ring zeigt?`,
      html: `<p>Am 22. Dezember 1895 fotografierte Röntgen mit Röntgenstrahlen die Hand seiner Frau Anna Bertha: Man sah die Knochen und den Ehering. Als sie ihr eigenes Skelett sah, soll sie gesagt haben: <i>„Ich habe meinen Tod gesehen!“</i>. Röntgen nannte die Strahlen „X“, weil er nicht wusste, was sie waren: In der Mathematik ist X die Unbekannte. Er gewann den ersten Nobelpreis für Physik (1901) und weigerte sich, die Entdeckung patentieren zu lassen, damit sie allen gehöre.</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du … dass man Semmelweis nicht glaubte?`,
      html: `<p>Trotz der Ergebnisse fühlten sich viele Ärzte beleidigt von der Vorstellung, dass sie selbst die Krankheit mit ihren Händen übertrugen. Semmelweis verlor seine Stelle in Wien und starb 1865, bevor die Entdeckungen von Pasteur und Lister ihm recht gaben. Heute feiert die WHO jedes Jahr am 5. Mai den Welttag der Handhygiene.</p>`
    },
    {
      type: `widget`,
      title: `Ein Jahrhundert der Entdeckungen`,
      widget: `timeline`,
      options: {
        unit: `Jahre`,
        events: [
          { year: 1796, label: `Jenner: Impfstoff gegen die Pocken`, icon: `💉` },
          { year: 1800, label: `Volta: die Säule`, icon: `🔋` },
          { year: 1831, label: `Faraday: Induktion; Darwin bricht mit der Beagle auf`, icon: `🧲` },
          { year: 1846, label: `Erste Narkose mit Äther`, icon: `😴` },
          { year: 1847, label: `Semmelweis: Händewaschen`, icon: `🧼` },
          { year: 1859, label: `Darwin: Die Entstehung der Arten`, icon: `🐢` },
          { year: 1865, label: `Mendel, Maxwell`, icon: `🌱` },
          { year: 1869, label: `Mendelejew: Periodensystem`, icon: `🧪` },
          { year: 1882, label: `Koch: Tuberkelbazillus`, icon: `🔬` },
          { year: 1885, label: `Pasteur: Tollwutimpfstoff`, icon: `🐕` },
          { year: 1895, label: `Röntgen: Röntgenstrahlen`, icon: `🩻` },
          { year: 1898, label: `Curie: Polonium und Radium`, icon: `☢️` }
        ]
      },
      caption: `Im Jahr 1800 war eine Operation ein Albtraum; 1900 gab es Narkose, Desinfektion und Röntgenaufnahmen.`
    },
    {
      type: `3d`,
      title: `3D-Raumzeit-Karte der Entdeckungen`,
      scene: `spacetime`,
      caption: `Die Entdeckungen häufen sich in Europa, aber die Wissenschaft reist: von den Galápagos bis Boston. Tippe auf ein Ereignis: Die Pfeile zeigen, welche Entdeckungen die anderen möglich gemacht haben.`,
      options: {
        lat: [-5, 60],
        lon: [-95, 35],
        years: [1790, 1900],
        places: [
          { lat: 51.5, lon: -0.12, label: `London` },
          { lat: 48.86, lon: 2.35, label: `Paris` },
          { lat: 52.52, lon: 13.4, label: `Berlin` },
          { lat: 48.21, lon: 16.37, label: `Wien` },
          { lat: 45.19, lon: 9.16, label: `Pavia` },
          { lat: -0.7, lon: -90.5, label: `Galápagos` }
        ],
        events: [
          { id: `jenner`, lat: 51.69, lon: -2.46, year: 1796, label: `Erster Impfstoff`, html: `In Berkeley in England impft Edward Jenner einen Jungen mit Kuhpocken und zeigt dann, dass er nicht an den menschlichen Pocken erkrankt. 1980 wurden die Pocken für ausgerottet erklärt.` },
          { id: `volta`, lat: 45.19, lon: 9.16, year: 1800, label: `Die Voltasche Säule`, html: `Alessandro Volta, Professor in Pavia, kündigt die Säule an: Zum ersten Mal gibt es einen dauerhaften elektrischen Strom, den man untersuchen kann.` },
          { id: `faraday`, lat: 51.51, lon: -0.14, year: 1831, label: `Elektromagnetische Induktion`, html: `An der Royal Institution in London erzeugt Faraday Strom, indem er einen Magneten in einer Spule bewegt. Ohne die Säule hätte er die Ströme nicht untersuchen können.`, causes: [`volta`] },
          { id: `galapagos`, lat: -0.7, lon: -90.5, year: 1835, label: `Darwin auf den Galápagos`, html: `Darwin sammelt Finken, Schildkröten und Leguane und bemerkt, dass sie von Insel zu Insel variieren. Hier beginnt der Zweifel, ob die Arten unveränderlich sind.` },
          { id: `etere`, lat: 42.36, lon: -71.06, year: 1846, label: `Narkose`, html: `Im Massachusetts General Hospital in Boston betäubt der Zahnarzt William Morton einen Patienten bei einer Halsoperation mit Äther. In wenigen Monaten verbreitet sich die Narkose auf der ganzen Welt.` },
          { id: `semmelweis`, lat: 48.22, lon: 16.35, year: 1847, label: `Händewaschen`, html: `Semmelweis bemerkt, dass Wöchnerinnen, die von Ärzten untersucht wurden, die aus dem Sektionssaal kamen, viel häufiger starben. Durch Händewaschen gehen die Todesfälle stark zurück.` },
          { id: `snow`, lat: 51.51, lon: -0.14, year: 1854, label: `Die Cholerakarte`, html: `John Snow bringt die Cholera-Toten mit einem verschmutzten Brunnen in Verbindung: Die moderne Epidemiologie entsteht. Im selben Jahr beobachtet Pacini in Florenz das Bakterium.` },
          { id: `origine`, lat: 51.5, lon: -0.12, year: 1859, label: `Die Entstehung der Arten`, html: `Darwin veröffentlicht sein Buch in London: Die erste Auflage ist in wenigen Tagen vergriffen. Die Biologie wird nie mehr dieselbe sein.`, causes: [`galapagos`] },
          { id: `pasteur`, lat: 48.86, lon: 2.35, year: 1864, label: `Keimtheorie`, html: `Pasteur zeigt mit seinen „Schwanenhals“-Kolben, dass die Mikroben aus der Luft kommen und nicht aus dem Nichts entstehen. Er erfindet die Pasteurisierung.` },
          { id: `mendel`, lat: 49.2, lon: 16.61, year: 1865, label: `Mendelsche Gesetze`, html: `Im Kloster von Brünn legt Mendel die Ergebnisse von etwa 28.000 Erbsenpflanzen vor: Die Merkmale werden als getrennte „Einheiten“ vererbt. Bis 1900 versteht ihn niemand.` },
          { id: `maxwell`, lat: 52.2, lon: 0.12, year: 1865, label: `Maxwell-Gleichungen`, html: `Maxwell vereint Elektrizität, Magnetismus und Licht. Er sagt die elektromagnetischen Wellen voraus, die Hertz 1887 entdeckt.`, causes: [`faraday`] },
          { id: `lister`, lat: 55.86, lon: -4.25, year: 1867, label: `Antisepsis`, html: `In Glasgow desinfiziert der Chirurg Joseph Lister, der Pasteur gelesen hat, Wunden und Instrumente mit Karbolsäure: Die Infektionen nach Operationen nehmen drastisch ab.`, causes: [`pasteur`, `semmelweis`] },
          { id: `mendeleev`, lat: 59.94, lon: 30.31, year: 1869, label: `Periodensystem`, html: `In Sankt Petersburg ordnet Mendelejew die Elemente in einer Tabelle und sagt die fehlenden voraus.` },
          { id: `koch`, lat: 52.52, lon: 13.4, year: 1882, label: `Tuberkelbazillus`, html: `In Berlin identifiziert Robert Koch das Bakterium der Tuberkulose, damals eine der häufigsten Todesursachen in Europa.`, causes: [`pasteur`] },
          { id: `rabbia`, lat: 48.85, lon: 2.34, year: 1885, label: `Tollwutimpfstoff`, html: `Pasteur impft Joseph Meister, 9 Jahre alt, der von einem tollwütigen Hund gebissen wurde: Der Junge überlebt.`, causes: [`pasteur`, `jenner`] },
          { id: `raggix`, lat: 49.79, lon: 9.95, year: 1895, label: `Röntgenstrahlen`, html: `In Würzburg entdeckt Röntgen unsichtbare Strahlen, die durch das Fleisch hindurchgehen, aber nicht durch die Knochen.`, causes: [`maxwell`] },
          { id: `curie`, lat: 48.84, lon: 2.34, year: 1898, label: `Radioaktivität`, html: `In Paris isolieren Marie und Pierre Curie bei der Untersuchung der von Becquerel entdeckten Strahlen zwei neue Elemente: Polonium und Radium.`, causes: [`raggix`, `mendeleev`] }
        ]
      }
    },
    {
      type: `decision`,
      title: `Wien, 1847: Du bist Doktor Semmelweis`,
      html: `<p>In deinem Krankenhaus gibt es zwei Entbindungsstationen. Auf der ersten, wo Ärzte und Studenten arbeiten, sterben viel mehr Frauen am „Kindbettfieber“ (bis zu 1 von 10) als auf der zweiten, wo nur Hebammen arbeiten. Die Ärzte machen, bevor sie die Gebärenden untersuchen, Autopsien an Leichen. Ein Kollege von dir stirbt an einem ähnlichen Fieber, nachdem er sich bei einer Autopsie geschnitten hat.</p>`,
      question: `Was denkst du und was tust du?`,
      options: [
        { label: `Schuld ist die schlechte Luft der Station: Ich öffne die Fenster.`, outcome: `Das ist die Theorie der „Miasmen“, von fast allen akzeptiert. Aber die beiden Stationen haben dieselbe Luft: Sie erklärt den Unterschied nicht.` },
        { label: `Die Hände der Ärzte bringen von den Leichen etwas mit, das krank macht: Ich ordne an, sie mit einer Chlorlösung zu waschen.`, outcome: `Du weißt noch nicht, was dieses „Etwas“ ist (Mikroben werden erst Jahre später nachgewiesen), aber du kannst mit Zahlen überprüfen, ob es wirkt.` },
        { label: `Es ist das Schicksal: Manche Frauen sind schwächer als andere.`, outcome: `Das erklärt nicht, warum auf der Hebammenstation viel weniger sterben.` }
      ],
      answer: 1,
      explain: `Semmelweis führte im Mai 1847 das Händewaschen mit Chlorkalk ein: In wenigen Monaten sank die Sterblichkeit auf der Ärztestation auf etwa 1–2 %. Das ist ein perfektes Beispiel für die <b>wissenschaftliche Methode</b>: Beobachtung, Hypothese, Experiment, Überprüfung mit Zahlen. Aber viele Kollegen lehnten die Idee ab. Erst mit Pasteur und Lister, zwanzig Jahre später, verstand man, warum er recht hatte.`
    },
    {
      type: `decision`,
      title: `Paris, Juli 1885: Du bist Louis Pasteur`,
      html: `<p>Man bringt dir Joseph Meister, 9 Jahre alt, der vor zwei Tagen von einem tollwütigen Hund gebissen wurde. Ohne Behandlung ist die Tollwut fast zu 100 % tödlich. Du hast einen Impfstoff, der bei Hunden gewirkt hat, aber du hast ihn noch nie an einem Menschen ausprobiert. Außerdem bist du kein Arzt: Du bist Chemiker.</p>`,
      question: `Was tust du?`,
      options: [
        { label: `Ich behandle ihn nicht: Der Impfstoff wurde noch nicht am Menschen erprobt.`, outcome: `Du vermeidest ein unbekanntes Risiko, aber der Junge wird fast sicher sterben.` },
        { label: `Ich behandle ihn, mit Hilfe von Ärzten, die die Spritzen geben, und beobachte genau, wie er reagiert.`, outcome: `Das ist ein großes ethisches und wissenschaftliches Risiko: Wenn du scheiterst, könnte man dich beschuldigen, den Jungen getötet zu haben. Aber es ist die einzige Hoffnung, ihn zu retten.` },
        { label: `Ich warte einige Wochen, um weitere Versuche an Hunden zu machen.`, outcome: `Die Tollwut wartet nicht: Nach dem Auftreten der Symptome ist nichts mehr zu machen.` }
      ],
      answer: 1,
      explain: `Pasteur gab Joseph im Einvernehmen mit zwei Ärzten 13 Spritzen in 10 Tagen. Der Junge überlebte und arbeitete als Erwachsener als Pförtner am Institut Pasteur. Der Erfolg machte den Impfstoff weltberühmt. Heute sind die Regeln viel strenger: Ein neues Medikament muss lange, kontrollierte Tests bestehen, bevor es bei Menschen angewendet wird, genau um die Patienten zu schützen.`
    },
    {
      type: `alternatives`,
      title: `Andere Wege, es zu verstehen`,
      intro: `Manche Ideen des 19. Jahrhunderts sind schwer vorstellbar: Hier ein paar Hilfen.`,
      tabs: [
        {
          label: `💧 Elektrizität wie Wasser`,
          html: `<p>Stell dir einen Stromkreis wie eine Wasserleitung vor:</p>
<ul>
<li>die <b>Batterie</b> ist eine <b>Pumpe</b>, die das Wasser antreibt;</li>
<li>die <b>Spannung</b> (Volt) ist, wie stark die Pumpe drückt;</li>
<li>der <b>Strom</b> (Ampere) ist, wie viel Wasser pro Sekunde fließt;</li>
<li>die <b>Glühlampe</b> ist ein Mühlrad: Das Wasser lässt es sich drehen und leistet Arbeit;</li>
<li>wenn das Rohr unterbrochen ist (<b>offener Stromkreis</b>), bleibt das Wasser stehen.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#eff6ff"/>
<rect x="60" y="50" width="480" height="120" rx="20" fill="none" stroke="#2563eb" stroke-width="12"/>
<rect x="30" y="80" width="60" height="60" rx="8" fill="#f97316"/>
<text x="60" y="117" font-size="14" text-anchor="middle" font-weight="bold" fill="#ffffff">Pumpe</text>
<circle cx="540" cy="110" r="32" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="540" y="115" font-size="13" text-anchor="middle">Mühle</text>
<text x="300" y="40" font-size="15" text-anchor="middle" fill="#1e3a8a">fließendes Wasser = Strom →</text>
<text x="60" y="190" font-size="14" text-anchor="middle">= Batterie</text>
<text x="540" y="190" font-size="14" text-anchor="middle">= Glühlampe</text>
<text x="300" y="115" font-size="15" text-anchor="middle" fill="#334155">Rohr = elektrischer Draht</text>
</svg>`
        },
        {
          label: `🐞 Auslese wie ein Spiel`,
          html: `<p>Stell dir 100 Marienkäfer vor: 50 rote und 50 grüne, auf einer grünen Wiese. Die Vögel sehen die roten besser und fressen mehr davon. In der nächsten Generation sind es 60 grüne, dann 70, dann 85 … Kein Marienkäfer hat „beschlossen“, grün zu werden: Die grünen überleben einfach und haben mehr Nachkommen.</p>
<p>Wenn die Wiese braun wird (Dürre), ändert sich der Vorteil! Das ist wirklich passiert mit dem <b>Birkenspanner</b> in England: Während der industriellen Revolution, als sich die Stämme mit Ruß schwärzten, wurden die dunklen Falter die häufigsten.</p>`
        },
        {
          label: `⚛️ Das Atom in 3D`,
          html: `<p>Am Ende des 19. Jahrhunderts entdeckt man, dass das Atom innere „Teile“ hat: die <b>Elektronen</b> (Thomson, 1897). Hier siehst du das Bohrsche Modell: ein Kern, um den die Elektronen auf Bahnen kreisen. Vergleiche Wasserstoff (1 Elektron) mit Natrium (11).</p>`,
          scene: `atom`,
          options: { elements: [`H`, `He`, `C`, `Na`] }
        },
        {
          label: `🔎 Die Methode in 5 Schritten`,
          html: `<p>Fast alle Entdeckungen dieser Lektion folgen demselben Schema. Versuche, es mit Semmelweis zu erkennen:</p>
<ol>
<li><b>Ich beobachte</b>: Auf der Ärztestation sterben mehr Menschen.</li>
<li><b>Ich frage mich</b>: Warum? Was ist anders?</li>
<li><b>Ich stelle eine Hypothese auf</b>: Die Ärzte bringen etwas von den Leichen mit.</li>
<li><b>Ich experimentiere</b>: Händewaschen wird Pflicht.</li>
<li><b>Ich überprüfe mit Daten</b>: Die Sterblichkeit sinkt stark. Hypothese bestätigt!</li>
</ol>
<p>Versuch es noch einmal mit Snow (Cholera) oder mit Pasteur (Milch, die schlecht wird).</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Karte der Entdeckungen des 19. Jahrhunderts`,
      nodes: [
        { id: `metodo`, label: `Experimentelle Methode`, x: 50, y: 6, color: `#a855f7`, html: `Beobachten, Hypothesen aufstellen, experimentieren, überprüfen.`, why: `Galileo Galilei formulierte sie im 17. Jahrhundert. Im 19. Jahrhundert wird sie zur Arbeitsweise in allen Laboren, von den Universitäten bis zu den Industriebetrieben.` },
        { id: `pila`, label: `Voltasche Säule`, x: 15, y: 28, color: `#eab308`, html: `1800: der erste Erzeuger von Gleichstrom.`, why: `Volta wollte beweisen, dass Galvani sich irrte: Das Zucken der Frösche hing nicht von einer tierischen Elektrizität ab, sondern vom Kontakt zwischen zwei verschiedenen Metallen in einer Flüssigkeit.` },
        { id: `elettromagnetismo`, label: `Elektromagnetismus`, x: 15, y: 55, color: `#f97316`, html: `Ørsted, Faraday, Maxwell: Elektrizität, Magnetismus und Licht sind ein einziges Phänomen.`, why: `Mit der Säule konnte man endlich gleichmäßige Ströme untersuchen; Faradays Experimente und Maxwells Mathematik führten zur Entdeckung der elektromagnetischen Wellen.` },
        { id: `tecnologia`, label: `Telegraf, Glühlampe, Radio`, x: 15, y: 85, color: `#0ea5e9`, html: `Die Anwendungen, die das tägliche Leben verändern.`, why: `Jede Erfindung wendet eine Entdeckung an: Der Telegraf nutzt Elektromagnete, der Dynamo die Induktion, das Radio die Wellen von Maxwell und Hertz.` },
        { id: `darwin`, label: `Evolution (Darwin)`, x: 50, y: 40, color: `#16a34a`, html: `1859: Die Arten verändern sich im Lauf der Zeit durch natürliche Auslese.`, why: `Darwin verband die Beobachtungen der Reise mit der Beagle, die Fossilien, die Ideen des Geologen Lyell über die sehr langen Zeiträume der Erde und die des Ökonomen Malthus über den Kampf um Ressourcen.` },
        { id: `mendel`, label: `Genetik (Mendel)`, x: 50, y: 75, color: `#65a30d`, html: `1865: die Vererbungsgesetze, an Erbsen untersucht.`, why: `Mendel benutzte Mathematik (Statistik), um Tausende von Pflanzen zu zählen: Das war eine neue Methode für die Biologie, deshalb wurde er nicht sofort verstanden.` },
        { id: `germi`, label: `Keimtheorie`, x: 85, y: 28, color: `#ef4444`, html: `Viele Krankheiten werden von Mikroorganismen verursacht.`, why: `Bessere Mikroskope und die Experimente von Pasteur und Koch zeigten, dass jede Infektionskrankheit ihre eigene Mikrobe hat. Semmelweis und Snow waren auf anderen Wegen mit Daten dorthin gelangt.` },
        { id: `medicina`, label: `Impfstoffe, Antisepsis, Narkose`, x: 85, y: 60, color: `#dc2626`, html: `Sichere Operationen und Vorbeugung von Krankheiten.`, why: `Wenn Mikroben die Infektionen verursachen, genügt es, sie abzutöten (Desinfektion, Pasteurisierung) oder den Körper zu trainieren, sie zu erkennen (Impfstoffe). Die Narkose erlaubte lange und genaue Eingriffe.` },
        { id: `atomo`, label: `Atom und Periodensystem`, x: 85, y: 88, color: `#7c3aed`, html: `Dalton, Mendelejew, Thomson, Curie: Wie ist die Materie aufgebaut?`, why: `Genaue Messungen der Massen der Elemente erlaubten Mendelejew, eine Regelmäßigkeit zu finden; am Ende des Jahrhunderts zeigten Radioaktivität und Elektron, dass das Atom eine innere Struktur hat.` }
      ],
      edges: [
        [`metodo`, `pila`, `leitet`],
        [`metodo`, `darwin`, `leitet`],
        [`metodo`, `germi`, `leitet`],
        [`pila`, `elettromagnetismo`, `ermöglicht das Studium von`],
        [`elettromagnetismo`, `tecnologia`, `angewandt in`],
        [`darwin`, `mendel`, `später erklärt durch`],
        [`germi`, `medicina`, `führt zu`],
        [`elettromagnetismo`, `atomo`, `Röntgenstrahlen und Elektron`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Darwin und die Medizin`,
      questions: [
        { type: `mc`, q: `Wo beobachtete Darwin die berühmten Finken?`, options: [`Auf den Galápagos`, `In Australien`, `In Island`], answer: 0, explain: `Auf den Galápagos-Inseln, 1835, während der Reise der Beagle.` },
        { type: `mc`, q: `Was bewirkt die Pasteurisierung?`, options: [`Sie fügt Vitamine hinzu`, `Sie erhitzt eine Flüssigkeit, um Mikroben abzutöten`, `Sie friert Lebensmittel ein`], answer: 1, explain: `Man erhitzt (zum Beispiel Milch auf etwa 72 °C), ohne zu kochen, um gefährliche Bakterien zu beseitigen.` },
        { type: `tf`, q: `Darwin behauptete, der Mensch stamme von den heutigen Affen ab.`, answer: false, explain: `Er sagte, dass Mensch und Menschenaffen gemeinsame Vorfahren haben.` }
      ]
    }
  ],
  glossary: [
    { t: `Voltasche Säule`, d: `Von Volta (1800) erfundener Erzeuger von Gleichstrom, mit Scheiben aus verschiedenen Metallen, die durch eine Flüssigkeit getrennt sind.` },
    { t: `Elektromagnetische Induktion`, d: `Erzeugung von elektrischem Strom, indem man einen Magneten in der Nähe eines Drahtes bewegt (Faraday, 1831).` },
    { t: `Evolution`, d: `Veränderung der Lebewesenarten im Lauf sehr vieler Generationen.` },
    { t: `Natürliche Auslese`, d: `Mechanismus, durch den die am besten an die Umwelt angepassten Individuen überleben und sich stärker fortpflanzen.` },
    { t: `Genetik`, d: `Wissenschaft, die untersucht, wie Merkmale von den Eltern an die Kinder weitergegeben werden.` },
    { t: `Impfstoff`, d: `Präparat, das dem Immunsystem beibringt, eine Mikrobe zu erkennen, ohne krank zu machen.` },
    { t: `Antisepsis`, d: `Verwendung von Desinfektionsmitteln, um Mikroben auf Wunden und Instrumenten abzutöten.` },
    { t: `Narkose`, d: `Ausschaltung des Schmerzes (und oft des Bewusstseins) während eines Eingriffs.` },
    { t: `Pasteurisierung`, d: `Kontrolliertes Erhitzen eines Lebensmittels, um schädliche Mikroorganismen zu beseitigen.` },
    { t: `Radioaktivität`, d: `Spontane Aussendung von Strahlung durch bestimmte instabile Atome (Becquerel, Curie).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Nach wem ist die Maßeinheit „Volt“ benannt?`, options: [`Nach Galvani`, `Nach Volta`, `Nach Faraday`], answer: 1, explain: `Nach Alessandro Volta, dem Erfinder der Säule.` },
      { type: `tf`, q: `Faraday entdeckte, dass man Strom erzeugt, wenn man einen Magneten in einer Spule bewegt.`, answer: true, explain: `Das ist die elektromagnetische Induktion (1831), das Prinzip des Dynamos.` },
      { type: `num`, q: `In welchem Jahr veröffentlichte Darwin „Die Entstehung der Arten“?`, answer: 1859, explain: `Im Jahr 1859, in London.` },
      { type: `order`, q: `Bring die vier Schritte der natürlichen Auslese in die richtige Reihenfolge.`, items: [`Die Individuen sind untereinander verschieden`, `Viele Merkmale werden vererbt`, `Es werden mehr Individuen geboren, als überleben können`, `Die am besten Angepassten überleben und pflanzen sich stärker fort`], explain: `Variabilität, Vererbung, Kampf ums Überleben, Auslese.` },
      { type: `text`, q: `Welcher Mönch entdeckte die Vererbungsgesetze, indem er Erbsen untersuchte?`, answer: [`mendel`, `gregor mendel`], explain: `Gregor Mendel, in Brünn, 1865.` },
      { type: `mc`, q: `Was bewies Semmelweis?`, options: [`Dass Händewaschen Infektionen verringert`, `Dass Äther betäubt`, `Dass Licht eine Welle ist`], answer: 0, explain: `1847 in Wien: Durch das Händewaschen gingen die Todesfälle durch Kindbettfieber stark zurück.` },
      { type: `mc`, q: `Welches Bakterium entdeckte Robert Koch 1882?`, options: [`Das der Cholera`, `Das der Tuberkulose`, `Das der Tollwut`], answer: 1, explain: `Den Tuberkelbazillus (die Tollwut wird von einem Virus verursacht).` },
      { type: `mc`, q: `Warum galt Mendelejews Tabelle als genial?`, options: [`Weil sie bunt war`, `Weil sie leere Felder ließ und später entdeckte Elemente vorhersagte`, `Weil sie alle heutigen Elemente enthielt`], answer: 1, explain: `Er sagte Gallium, Scandium und Germanium voraus, die zwischen 1875 und 1886 entdeckt wurden.` },
      { type: `text`, q: `Wie heißen die 1895 von Röntgen entdeckten Strahlen? (… -Strahlen)`, answer: [`x`, `x-strahlen`, `röntgenstrahlen`, `röntgenstrahlung`, `raggi x`], explain: `X-Strahlen: X wie die Unbekannte, weil man nicht wusste, was sie waren.` },
      { type: `tf`, q: `Marie Curie gewann zwei Nobelpreise in zwei verschiedenen Fächern.`, answer: true, explain: `Physik (1903) und Chemie (1911).` },
      { type: `mc`, q: `Welche dieser Entdeckungen stammt NICHT aus dem 19. Jahrhundert?`, options: [`Das Periodensystem`, `Galileis experimentelle Methode`, `Die Narkose mit Äther`], answer: 1, explain: `Galilei lebte zwischen dem 16. und 17. Jahrhundert; seine Methode war aber die Grundlage der Entdeckungen des 19. Jahrhunderts.` },
      { type: `mc`, q: `Was brachte John Snow 1854 in Zusammenhang?`, options: [`Die Cholera mit einem Brunnen mit verschmutztem Wasser`, `Das Fieber mit schlechter Luft`, `Die Tuberkulose mit Kälte`], answer: 0, explain: `Mit einer Karte der Toten zeigte er, dass sich die Cholera über das Wasser verbreitete.` }
    ]
  }
});
