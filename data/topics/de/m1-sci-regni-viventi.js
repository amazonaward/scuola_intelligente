TOPIC('de', {
  id: "m1-sci-regni-viventi",
  title: "Die fünf Reiche der Lebewesen",
  intro: "Auf der Erde haben die Wissenschaftler etwa <b>2 Millionen</b> lebende Arten beschrieben, und viele mehr warten noch auf ihre Entdeckung. Um sich nicht zu verlieren, braucht man eine Ordnung: die <b>Klassifikation</b>. Wir entdecken, was ein Wesen „lebendig“ macht, wie man ein Klassifikationssystem aufbaut und welche die <b>fünf Reiche</b> sind.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Was zeichnet ein Lebewesen aus?",
      html: `<p>Ein Lebewesen (oder <b>Organismus</b>) hat <b>alle</b> diese Merkmale:</p>
<ul>
<li>Es besteht aus einer oder mehreren <b>Zellen</b>;</li>
<li>es <b>ernährt sich</b>: Es gewinnt Energie und Stoffe aus der Umwelt;</li>
<li>es <b>atmet</b>: Es wandelt Nährstoffe in Energie um;</li>
<li>es <b>wächst</b> und entwickelt sich;</li>
<li>es <b>reagiert auf Reize</b> (Licht, Wärme, Berührung);</li>
<li>es <b>pflanzt sich fort</b> und erzeugt neue Individuen, die ihm ähnlich sind;</li>
<li>es <b>stirbt</b>.</li>
</ul>
<p>Ein Salzkristall „wächst“, Feuer „ernährt sich“ und „atmet“ Sauerstoff … aber keines von beiden hat Zellen noch pflanzt es sich mit einem Erbgut fort: Sie leben nicht.</p>
<p><b>Und die Viren?</b> Sie enthalten Erbmaterial, sind aber <b>keine Zellen</b> und vermehren sich nur in den Zellen eines anderen Organismus. Darum betrachten die meisten Wissenschaftler sie nicht als Lebewesen und ordnen sie nicht in die Reiche ein.</p>`
    },
    {
      type: "text",
      title: "2. Klassifizieren: die Ideen von Linné",
      html: `<p><b>Klassifizieren</b> bedeutet, Organismen nach ihren <b>Ähnlichkeiten</b> zu gruppieren, wie Bücher in einer Bibliothek.</p>
<p>Schon <b>Aristoteles</b> (4. Jahrhundert v. Chr.) teilte die Lebewesen in Pflanzen und Tiere ein. Aber das System, das wir noch heute benutzen, erdachte der Schwede <b>Carl von Linné</b> in seinem Buch <i>Systema Naturae</i> (1735, und dann in der 10. Auflage von 1758).</p>
<p>Linné erfand die <b>binäre Nomenklatur</b>: Jede Art hat einen wissenschaftlichen Namen in <b>Latein</b>, der aus <b>zwei Wörtern</b> besteht:</p>
<ul>
<li>Das erste ist die <b>Gattung</b>, mit Großbuchstaben;</li>
<li>das zweite bezeichnet die <b>Art</b>, mit Kleinbuchstaben.</li>
</ul>
<p>Man schreibt ihn <i>kursiv</i>: <i>Homo sapiens</i> (Mensch), <i>Canis lupus</i> (Wolf), <i>Felis catus</i> (Katze), <i>Quercus robur</i> (Stieleiche). So wissen ein japanischer und ein deutscher Wissenschaftler, dass sie vom selben Organismus sprechen, auch wenn die gebräuchlichen Namen in ihren Sprachen verschieden sind.</p>
<p>Eine <b>Art</b> ist eine Gruppe ähnlicher Individuen, die sich <b>miteinander fortpflanzen</b> und <b>fruchtbare</b> Nachkommen haben können. Pferd und Esel sind verschiedene Arten: Ihr Nachkomme, das Maultier, ist in der Regel unfruchtbar.</p>`
    },
    {
      type: "text",
      title: "3. Die Kategorien: von der größten zur kleinsten",
      html: `<p>Linné ordnete die Lebewesen in Gruppen, die ineinander stecken wie <b>Matrjoschka-Puppen</b>. Hier die Kategorien (oder <b>Taxa</b>) von der weitesten zur engsten, am Beispiel des <b>Wolfs</b>:</p>
<table>
<tr><th>Kategorie</th><th>Wolf</th><th>Wer ist darin?</th></tr>
<tr><td><b>Domäne</b></td><td>Eukaryoten</td><td>alle Organismen mit Zellen, die einen Zellkern haben</td></tr>
<tr><td><b>Reich</b></td><td>Tiere</td><td>alle Tiere</td></tr>
<tr><td><b>Stamm</b> (Phylum)</td><td>Chordatiere</td><td>Tiere mit einer Rückensaite (Wirbeltiere und wenige andere)</td></tr>
<tr><td><b>Klasse</b></td><td>Säugetiere</td><td>Tiere, die ihre Jungen säugen</td></tr>
<tr><td><b>Ordnung</b></td><td>Raubtiere</td><td>Katzen, Bären, Robben, Hunde …</td></tr>
<tr><td><b>Familie</b></td><td>Hunde (Canidae)</td><td>Hunde, Wölfe, Füchse, Schakale</td></tr>
<tr><td><b>Gattung</b></td><td><i>Canis</i></td><td>Wolf, Kojote, Goldschakal</td></tr>
<tr><td><b>Art</b></td><td><i>Canis lupus</i></td><td>der Wolf (und der Hund, der eine domestizierte Unterart davon ist)</td></tr>
</table>
<p>Je weiter man hinuntergeht, desto <b>weniger</b> Organismen enthalten die Gruppen, aber desto <b>ähnlicher</b> sind sie einander. Ein Trick, um sich die Reihenfolge zu merken: „<b>D</b>er <b>R</b>eiche <b>S</b>tudent <b>K</b>auft <b>O</b>ft <b>F</b>rische <b>G</b>ute <b>Ä</b>pfel“ (Domäne, Reich, Stamm, Klasse, Ordnung, Familie, Gattung, Art).</p>`
    },
    {
      type: "3d",
      title: "Die Kategorien ineinander",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#a7f3d0", label: "Domäne: Eukaryoten" },
          { r: 0.88, color: "#6ee7b7", label: "Reich: Tiere" },
          { r: 0.76, color: "#34d399", label: "Stamm: Chordatiere" },
          { r: 0.64, color: "#10b981", label: "Klasse: Säugetiere" },
          { r: 0.52, color: "#059669", label: "Ordnung: Raubtiere" },
          { r: 0.4, color: "#047857", label: "Familie: Hunde" },
          { r: 0.28, color: "#065f46", label: "Gattung: Canis" },
          { r: 0.16, color: "#f59e0b", label: "Art: Canis lupus" }
        ]
      },
      caption: "Wie eine Matrjoschka: Jede Kategorie steckt in der größeren. Der Wolf ist in der Mitte."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Lebewesen und Klassifikation",
      questions: [
        { type: "mc", q: "Wer erfand die binäre Nomenklatur?", options: ["Aristoteles", "Carl von Linné", "Charles Darwin", "Galilei"], answer: 1, explain: "Linné gab im 18. Jahrhundert jeder Art einen lateinischen Namen aus zwei Wörtern." },
        { type: "tf", q: "Im Namen Felis catus bezeichnet Felis die Gattung.", answer: true, explain: "Das erste Wort, mit Großbuchstaben, ist die Gattung." },
        { type: "order", q: "Bringe die Kategorien von der weitesten zur engsten in die richtige Reihenfolge.", items: ["Reich", "Stamm", "Klasse", "Ordnung", "Familie", "Gattung", "Art"], explain: "Reich, Stamm, Klasse, Ordnung, Familie, Gattung, Art." }
      ]
    },
    {
      type: "text",
      title: "4. Die Kriterien zur Einteilung der Reiche",
      html: `<p>Im Jahr <b>1969</b> schlug der amerikanische Ökologe <b>Robert Whittaker</b> vor, die Lebewesen in <b>fünf Reiche</b> einzuteilen, mithilfe von drei Fragen:</p>
<ol>
<li><b>Was für eine Zelle hat es?</b> <b>Prokaryotisch</b> (einfach, ohne Zellkern: Die DNA liegt frei im Zellplasma) oder <b>eukaryotisch</b> (mit einem Zellkern, der die DNA umschließt, und vielen Organellen).</li>
<li><b>Wie viele Zellen hat es?</b> Nur eine (<b>einzellig</b>) oder viele (<b>mehrzellig</b>).</li>
<li><b>Wie ernährt es sich?</b> <b>Autotroph</b>: Es stellt seine Nahrung selbst durch Fotosynthese her (es braucht Licht, Wasser und Kohlenstoffdioxid). <b>Heterotroph</b>: Es muss seine Nahrung von anderen Organismen beziehen, indem es sie frisst oder Stoffe aufnimmt.</li>
</ol>`
    },
    {
      type: "text",
      title: "5. Die fünf Reiche",
      html: `<table>
<tr><th>Reich</th><th>Zelle</th><th>Zellen</th><th>Ernährung</th><th>Beispiele</th></tr>
<tr><td>🦠 <b>Monera</b></td><td>prokaryotisch</td><td>eine</td><td>autotroph oder heterotroph</td><td>Bakterien, Cyanobakterien</td></tr>
<tr><td>🔬 <b>Protisten</b></td><td>eukaryotisch</td><td>fast immer eine</td><td>autotroph oder heterotroph</td><td>Amöben, Pantoffeltierchen, Euglenen, einzellige Algen, Kieselalgen</td></tr>
<tr><td>🍄 <b>Pilze</b></td><td>eukaryotisch</td><td>eine oder viele</td><td>heterotroph (nehmen auf)</td><td>Hefen, Schimmelpilze, Hutpilze</td></tr>
<tr><td>🌳 <b>Pflanzen</b></td><td>eukaryotisch, mit Zellulosewand und Chloroplasten</td><td>viele</td><td>autotroph</td><td>Moose, Farne, Nadelbäume, Blütenpflanzen</td></tr>
<tr><td>🐾 <b>Tiere</b></td><td>eukaryotisch, ohne Wand</td><td>viele</td><td>heterotroph (fressen)</td><td>Schwämme, Insekten, Fische, Vögel, Säugetiere</td></tr>
</table>
<p><b>Monera</b>: Sie sind die ältesten (vor etwa 3,5 Milliarden Jahren) und zahlreichsten Lebewesen. Viele Bakterien sind uns nützlich: Im Darm helfen sie bei der Verdauung, in der Milch erzeugen sie Joghurt.</p>
<p><b>Protisten</b>: ein „Sammelreich“ mit sehr verschiedenen Organismen; manche ähneln kleinen Tieren (Protozoen), andere kleinen Pflanzen (Algen).</p>
<p><b>Pilze</b>: Sie sind keine Pflanzen! Sie haben kein Chlorophyll, ihre Wände bestehen aus <b>Chitin</b> (wie der Panzer der Insekten) und sie ernähren sich, indem sie Stoffe aus dem <b>aufnehmen</b>, was sie zersetzen. Der „Pilz“, den du sammelst, ist nur der <b>Fruchtkörper</b>: Der Hauptteil ist das <b>Myzel</b>, ein Netz aus Fäden (den Hyphen) unter der Erde.</p>`
    },
    {
      type: "svg",
      title: "Die fünf Reiche auf einen Blick",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<rect x="15" y="20" width="570" height="70" rx="12" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/>
<text x="30" y="50" font-size="18" font-weight="bold" fill="#991b1b">PROKARYOTEN</text>
<text x="30" y="75" font-size="15" fill="#991b1b">Zelle ohne Zellkern</text>
<rect x="330" y="30" width="230" height="50" rx="25" fill="#fca5a5"/>
<text x="445" y="62" font-size="18" text-anchor="middle" font-weight="bold">🦠 Monera</text>
<rect x="15" y="105" width="570" height="200" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="30" y="132" font-size="18" font-weight="bold" fill="#1e3a8a">EUKARYOTEN: Zelle mit Zellkern</text>
<rect x="30" y="150" width="160" height="50" rx="25" fill="#c4b5fd"/>
<text x="110" y="182" font-size="17" text-anchor="middle" font-weight="bold">🔬 Protisten</text>
<text x="110" y="222" font-size="14" text-anchor="middle">meist einzellig</text>
<rect x="215" y="150" width="110" height="50" rx="25" fill="#fde68a"/>
<text x="270" y="182" font-size="17" text-anchor="middle" font-weight="bold">🍄 Pilze</text>
<rect x="340" y="150" width="110" height="50" rx="25" fill="#86efac"/>
<text x="395" y="182" font-size="17" text-anchor="middle" font-weight="bold">🌳 Pflanzen</text>
<rect x="465" y="150" width="110" height="50" rx="25" fill="#fdba74"/>
<text x="520" y="182" font-size="17" text-anchor="middle" font-weight="bold">🐾 Tiere</text>
<text x="270" y="222" font-size="14" text-anchor="middle">nehmen auf</text>
<text x="395" y="222" font-size="14" text-anchor="middle">Fotosynthese</text>
<text x="520" y="222" font-size="14" text-anchor="middle">fressen</text>
<line x1="215" y1="245" x2="575" y2="245" stroke="#1d4ed8" stroke-width="3"/>
<text x="395" y="275" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">mehrzellig</text>
<text x="395" y="295" font-size="14" text-anchor="middle" fill="#1e3a8a">(Hefen sind einzellige Pilze)</text>
</svg>`,
      caption: "Erste große Einteilung: Prokaryoten und Eukaryoten. Dann sieht man auf die Zahl der Zellen und die Art der Ernährung."
    },
    {
      type: "widget",
      title: "In welches Reich ordnest du es ein?",
      widget: "classify",
      options: {
        groups: ["Monera", "Protisten", "Pilze", "Pflanzen", "Tiere"],
        items: [
          ["🦠 Joghurtbakterium", 0], ["🔵 Cyanobakterium", 0], ["🫧 Amöbe", 1], ["🟢 Pantoffeltierchen", 1],
          ["🍞 Bierhefe", 2], ["🍄 Steinpilz", 2], ["🧀 Schimmel des Gorgonzola", 2],
          ["🌿 Farn", 3], ["🌲 Tanne", 3], ["🌱 Moos", 3],
          ["🧽 Meeresschwamm", 4], ["🪼 Qualle", 4], ["🐧 Pinguin", 4]
        ]
      },
      caption: "Vorsicht, Fallen: Der Meeresschwamm ist ein Tier, das Moos ist eine Pflanze, die Hefe ist ein Pilz!"
    },
    {
      type: "example",
      title: "Praxisbeispiel: einen Bestimmungsschlüssel benutzen",
      html: `<p>Ein <b>dichotomer Bestimmungsschlüssel</b> („der in zwei teilt“) ist eine Reihe von Fragen mit <b>zwei Antworten</b>. Wenn man ihnen folgt, gelangt man zum Namen der Gruppe. Probieren wir es mit einem rätselhaften Organismus: <i>Er besteht aus vielen Zellen, betreibt keine Fotosynthese, hat Wände aus Chitin und nimmt Nahrung aus totem Holz auf</i>.</p>
<ol>
<li>Haben seine Zellen einen Zellkern? <b>Ja</b> → eukaryotisch (keine Monera).</li>
<li>Besteht er aus vielen Zellen? <b>Ja</b> → kein Protist.</li>
<li>Betreibt er Fotosynthese? <b>Nein</b> → keine Pflanze.</li>
<li>Frisst er die Nahrung oder nimmt er sie auf? <b>Er nimmt sie auf</b> → es ist ein <b>Pilz</b>!</li>
</ol>
<p>Bestimmungsschlüssel werden wirklich benutzt: Die Pilzführer, Vogelführer, Baumführer und die Bestimmungs-Apps sind genau so aufgebaut.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Reiche in deiner Küche",
      html: `<ul>
<li>🦠 <b>Monera</b>: Joghurt entsteht dank der Bakterien <i>Lactobacillus</i> und <i>Streptococcus</i>, die die Milch umwandeln.</li>
<li>🔬 <b>Protisten</b>: Die Alge <i>Spirulina</i> wird als Nahrungsergänzung verkauft … obwohl sie in Wirklichkeit ein Cyanobakterium ist, also eine Monera! Die Kieselalgen dagegen bilden die „Kieselgur“, die in Filtern verwendet wird.</li>
<li>🍄 <b>Pilze</b>: Die Hefe <i>Saccharomyces cerevisiae</i> lässt Brot und Pizza aufgehen; der Schimmelpilz <i>Penicillium</i> gibt dem Gorgonzola die blaue Farbe.</li>
<li>🌳 <b>Pflanzen</b>: Mehl, Obst, Gemüse, Olivenöl.</li>
<li>🐾 <b>Tiere</b>: Milch, Eier, Fleisch, Fisch, Honig (von den Bienen gemacht).</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … das größte Lebewesen ist ein Pilz?",
      html: `<p>Im Malheur National Forest in <b>Oregon</b> (USA) lebt ein Pilz der Gattung <i>Armillaria</i> (Hallimasch), dessen unterirdisches Myzel sich über etwa <b>9 km²</b> erstreckt, mehr als 1200 Fußballfelder! Man schätzt, dass er Tausende von Jahren alt ist.</p>
<p>Und noch eine Überraschung: Nach der DNA sind Pilze <b>enger mit den Tieren verwandt</b> als mit den Pflanzen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … in deinem Körper leben unglaublich viele Bakterien?",
      html: `<p>In unserem Körper, vor allem im Darm, leben etwa <b>38 Billionen</b> Bakterien: ungefähr so viele, wie wir Zellen haben (etwa 30 Billionen)! Zusammen bilden sie das <b>Mikrobiom</b> und helfen uns, zu verdauen, Vitamine herzustellen und uns gegen schädliche Mikroben zu verteidigen. Sie wiegen insgesamt etwa 200 Gramm.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Klassifikation zu verstehen",
      intro: "Das System der fünf Reiche ist nicht das einzig mögliche, und man kann es mit vielen Vergleichen verstehen.",
      tabs: [
        {
          label: "📬 Wie eine Adresse",
          html: `<p>Die Klassifikation funktioniert wie eine <b>Postanschrift</b>, vom Allgemeinsten zum Genauesten:</p>
<table>
<tr><th>Adresse</th><th>Klassifikation</th></tr>
<tr><td>Planet Erde</td><td>Domäne</td></tr>
<tr><td>Kontinent: Europa</td><td>Reich</td></tr>
<tr><td>Staat: Deutschland</td><td>Stamm</td></tr>
<tr><td>Bundesland: Bayern</td><td>Klasse</td></tr>
<tr><td>Regierungsbezirk: Oberbayern</td><td>Ordnung</td></tr>
<tr><td>Ort</td><td>Familie</td></tr>
<tr><td>Straße</td><td>Gattung</td></tr>
<tr><td>Hausnummer</td><td>Art</td></tr>
</table>
<p>Der wissenschaftliche Name (Gattung + Art) ist wie „Straße + Nummer“: Er genügt, um genau diesen Organismus zu finden.</p>`
        },
        {
          label: "🧬 Die drei Domänen von Woese",
          html: `<p>Im Jahr <b>1990</b> entdeckte der amerikanische Mikrobiologe <b>Carl Woese</b> durch den Vergleich des Erbmaterials (der RNA der Ribosomen), dass die Monera in Wirklichkeit <b>zwei sehr verschiedene Gruppen</b> waren. Er schlug deshalb drei <b>Domänen</b> vor, über den Reichen:</p>
<ul>
<li><b>Bakterien</b> (Bacteria);</li>
<li><b>Archaeen</b> (Archaea): Prokaryoten, die oft in extremen Lebensräumen leben, wie in kochenden Quellen und extrem salzigen Seen;</li>
<li><b>Eukaryoten</b> (Eukarya): Protisten, Pilze, Pflanzen und Tiere.</li>
</ul>
<p>Heute benutzen viele Wissenschaftler die drei Domänen und bevorzugen mehr als fünf Reiche. Die fünf Reiche bleiben aber ein sehr guter Ausgangspunkt: Die Klassifikation <b>ändert sich</b>, wenn die Wissenschaft Neues entdeckt.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<line x1="300" y1="240" x2="300" y2="170" stroke="#475569" stroke-width="6"/>
<line x1="300" y1="170" x2="110" y2="60" stroke="#dc2626" stroke-width="6"/>
<line x1="300" y1="170" x2="400" y2="115" stroke="#475569" stroke-width="6"/>
<line x1="400" y1="115" x2="320" y2="60" stroke="#f59e0b" stroke-width="6"/>
<line x1="400" y1="115" x2="500" y2="60" stroke="#2563eb" stroke-width="6"/>
<text x="110" y="45" font-size="20" text-anchor="middle" font-weight="bold" fill="#dc2626">Bakterien</text>
<text x="320" y="45" font-size="20" text-anchor="middle" font-weight="bold" fill="#b45309">Archaeen</text>
<text x="500" y="45" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">Eukaryoten</text>
<text x="300" y="255" font-size="15" text-anchor="middle" fill="#334155">gemeinsamer Vorfahre</text>
<text x="500" y="85" font-size="14" text-anchor="middle" fill="#1d4ed8">Protisten, Pilze,</text>
<text x="500" y="102" font-size="14" text-anchor="middle" fill="#1d4ed8">Pflanzen, Tiere</text>
</svg>`
        },
        {
          label: "🗂️ Spiel: Klassifizieren",
          html: `<p>Ordne jeden Organismus seinem Reich zu. Erinnere dich an die drei Fragen: Hat er einen Zellkern? Wie viele Zellen? Wie ernährt er sich?</p>`,
          widget: "match",
          options: { pairs: [["Escherichia coli (Bakterium)", "Monera"], ["Euglena", "Protisten"], ["Penicillium (Schimmelpilz)", "Pilze"], ["Sonnenblume", "Pflanzen"], ["Regenwurm", "Tiere"]] }
        },
        {
          label: "🌍 Klassifikationen im Lauf der Zeit",
          html: `<ul>
<li><b>Aristoteles</b> (4. Jh. v. Chr.): 2 Gruppen, Pflanzen und Tiere; die Tiere eingeteilt in „mit Blut“ und „ohne Blut“.</li>
<li><b>Linné</b> (1735): 2 Reiche, Pflanzen und Tiere (und dazu ein Mineralreich!).</li>
<li><b>Haeckel</b> (1866): 3 Reiche, fügt die Protisten für die mikroskopisch kleinen Organismen hinzu.</li>
<li><b>Whittaker</b> (1969): 5 Reiche.</li>
<li><b>Woese</b> (1990): 3 Domänen.</li>
<li>Heute spricht man in vielen Ländern (zum Beispiel in Lehrbüchern des Vereinigten Königreichs und der USA) auch von <b>6 oder 7 Reichen</b>, bei denen Bakterien und Archaeen und manchmal Algen und Protozoen getrennt werden.</li>
</ul>
<p>Je mehr Werkzeuge wir haben (zuerst das Mikroskop, dann die DNA), desto genauer wird die Klassifikation.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Reiche: Tippe und entdecke das Warum",
      nodes: [
        { id: "vivente", label: "Lebewesen", x: 50, y: 5, color: "#16a34a", html: "Hat Zellen, ernährt sich, atmet, wächst, reagiert, pflanzt sich fort, stirbt.", why: "Die Zelltheorie (Schleiden und Schwann, 1838–39) stellte fest, dass jedes Lebewesen aus Zellen besteht. Sie ist das sicherste Kriterium, um zu sagen, was lebt." },
        { id: "linneo", label: "Linné", x: 20, y: 22, color: "#a855f7", html: "Carl von Linné, schwedischer Naturforscher (1707–1778).", why: "Im 18. Jahrhundert brachten Entdecker Tausende neuer Pflanzen und Tiere nach Europa, jedes mit anderen Namen in jeder Sprache. Linné schuf ein einheitliches und einfaches System in Latein, der gemeinsamen Sprache der Wissenschaftler." },
        { id: "binomia", label: "Binärer Name", x: 20, y: 44, color: "#8b5cf6", html: "Gattung + Art, in Latein und kursiv: Homo sapiens.", why: "Zwei Wörter genügen, um eine Art auf der ganzen Welt eindeutig zu bezeichnen; die Gattung sagt schon, wer die „engen Verwandten“ sind." },
        { id: "categorie", label: "Kategorien", x: 50, y: 30, color: "#059669", html: "Domäne, Reich, Stamm, Klasse, Ordnung, Familie, Gattung, Art.", why: "Gruppen ineinander: Nach Darwin (1859) verstand man, dass sie die Verwandtschaft in der Evolution widerspiegeln, wie die Äste eines Stammbaums." },
        { id: "criteri", label: "Drei Kriterien", x: 80, y: 22, color: "#f59e0b", html: "Zelltyp, Zahl der Zellen, Art der Ernährung.", why: "Es sind grundlegende Merkmale, die man unter dem Mikroskop sieht und die sich in der Evolution wenig ändern: Darum sind sie gute Kriterien für die größten Gruppen." },
        { id: "whittaker", label: "Fünf Reiche", x: 80, y: 46, color: "#2563eb", html: "Monera, Protisten, Pilze, Pflanzen, Tiere.", why: "Robert Whittaker schlug sie 1969 vor: Er trennte die Pilze von den Pflanzen, weil sie keine Fotosynthese betreiben und die Nahrung aufnehmen." },
        { id: "procarioti", label: "Prokaryoten", x: 30, y: 70, color: "#dc2626", html: "Zellen ohne Zellkern: die Monera.", why: "Es sind die ältesten Zellen: Fossile Stromatolithen zeigen Bakterien schon vor 3,5 Milliarden Jahren. Der Zellkern erschien viel später." },
        { id: "eucarioti", label: "Eukaryoten", x: 70, y: 70, color: "#1d4ed8", html: "Zellen mit Zellkern: Protisten, Pilze, Pflanzen, Tiere.", why: "Nach der Endosymbiontentheorie von Lynn Margulis (1967) entstanden sie, als eine Zelle andere „aufnahm“: Mitochondrien und Chloroplasten waren einst freie Bakterien." },
        { id: "domini", label: "Drei Domänen", x: 50, y: 94, color: "#0f766e", html: "Bakterien, Archaeen, Eukaryoten.", why: "Carl Woese verglich 1990 das Erbmaterial und entdeckte, dass sich Archaeen von Bakterien so stark unterscheiden wie wir. Die DNA hat die Klassifikation verändert." }
      ],
      edges: [
        ["vivente", "categorie", "wird geordnet mit den"],
        ["linneo", "categorie", "erfindet die"],
        ["linneo", "binomia", "erfindet den"],
        ["criteri", "whittaker", "bestimmen die"],
        ["vivente", "criteri", "werden beobachtet"],
        ["whittaker", "procarioti", "1 Reich"],
        ["whittaker", "eucarioti", "4 Reiche"],
        ["procarioti", "domini", "geteilt in 2"],
        ["eucarioti", "domini", "1"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die fünf Reiche",
      questions: [
        { type: "mc", q: "Welches Reich umfasst prokaryotische Organismen?", options: ["Protisten", "Monera", "Pilze", "Pflanzen"], answer: 1, explain: "Die Monera (Bakterien) haben Zellen ohne Zellkern." },
        { type: "tf", q: "Pilze sind Pflanzen ohne Blüten.", answer: false, explain: "Pilze betreiben keine Fotosynthese und haben Wände aus Chitin: Sie sind ein eigenes Reich." },
        { type: "mc", q: "Ein Organismus, der seine Nahrung durch Fotosynthese selbst herstellt, ist …", options: ["heterotroph", "autotroph", "prokaryotisch"], answer: 1, explain: "Autotroph bedeutet „der sich selbst ernährt“." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Lebewesen haben <b>Zellen</b>, ernähren sich, atmen, wachsen, reagieren, pflanzen sich fort und sterben.</li>
<li><b>Linné</b>: wissenschaftlicher Name aus zwei Wörtern, <i>Gattung Art</i>.</li>
<li>Kategorien: Domäne, Reich, Stamm, Klasse, Ordnung, Familie, Gattung, <b>Art</b>.</li>
<li>Kriterien: <b>prokaryotisch/eukaryotisch</b>, <b>ein-/mehrzellig</b>, <b>autotroph/heterotroph</b>.</li>
<li>Fünf Reiche: <b>Monera, Protisten, Pilze, Pflanzen, Tiere</b> (Whittaker, 1969).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Art", d: "Gruppe ähnlicher Individuen, die sich miteinander fortpflanzen und fruchtbare Nachkommen haben." },
    { t: "Binäre Nomenklatur", d: "System von Linné: Jede Art hat einen lateinischen Namen aus zwei Wörtern (Gattung und Art)." },
    { t: "Taxon (Plural Taxa)", d: "Eine Gruppe der Klassifikation: Reich, Klasse, Familie …" },
    { t: "Prokaryot", d: "Zelle ohne Zellkern, mit der DNA frei im Zellplasma." },
    { t: "Eukaryot", d: "Zelle mit einem von einer Membran umgebenen Zellkern." },
    { t: "Autotroph", d: "Organismus, der seine Nährstoffe selbst herstellt (Fotosynthese)." },
    { t: "Heterotroph", d: "Organismus, der seine Nahrung von anderen Organismen bezieht." },
    { t: "Myzel", d: "Netz aus Fäden (Hyphen), das den Hauptkörper eines Pilzes bildet." },
    { t: "Dichotomer Bestimmungsschlüssel", d: "Reihe von Fragen mit zwei Antworten, um einen Organismus zu bestimmen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welches dieser Merkmale haben ALLE Lebewesen?", options: ["Sie bewegen sich", "Sie bestehen aus Zellen", "Sie betreiben Fotosynthese", "Sie haben ein Skelett"], answer: 1, explain: "Alle Lebewesen bestehen aus mindestens einer Zelle." },
      { type: "tf", q: "Viren gelten als Lebewesen und gehören zum Reich der Monera.", answer: false, explain: "Viren sind keine Zellen und vermehren sich nur in anderen Zellen: Sie gehören nicht in die Reiche." },
      { type: "text", q: "Wie heißt der schwedische Wissenschaftler, der die binäre Nomenklatur erfand?", answer: ["linné", "carl von linné", "linne", "carl linnaeus", "linnaeus", "linneo", "carl von linne", "karl von linné"], explain: "Carl von Linné, im Systema Naturae (1735)." },
      { type: "mc", q: "Was bezeichnet „Canis“ im Namen Canis lupus?", options: ["Die Familie", "Die Gattung", "Die Art", "Die Ordnung"], answer: 1, explain: "Das erste Wort, mit Großbuchstaben, ist die Gattung." },
      { type: "order", q: "Bringe die Kategorien von der weitesten zur engsten in die richtige Reihenfolge.", items: ["Reich", "Klasse", "Familie", "Gattung", "Art"], explain: "Reich > Klasse > Familie > Gattung > Art." },
      { type: "mc", q: "In welchem Reich findet man die Hefen?", options: ["Monera", "Protisten", "Pilze", "Pflanzen"], answer: 2, explain: "Hefen sind einzellige Pilze." },
      { type: "mc", q: "Was zeichnet eine prokaryotische Zelle aus?", options: ["Sie hat eine Zellulosewand", "Sie hat keinen Zellkern", "Sie hat Chloroplasten", "Sie ist immer mehrzellig"], answer: 1, explain: "Bei Prokaryoten ist die DNA nicht in einem Zellkern eingeschlossen." },
      { type: "tf", q: "Pflanzen sind autotrophe mehrzellige Organismen.", answer: true, explain: "Sie stellen ihre Nahrung durch Fotosynthese selbst her und bestehen aus vielen Zellen." },
      { type: "mc", q: "Wer schlug 1969 die fünf Reiche vor?", options: ["Darwin", "Whittaker", "Woese", "Aristoteles"], answer: 1, explain: "Robert Whittaker." },
      { type: "mc", q: "Zwei Tiere können zusammen fruchtbare Nachkommen haben. Dann gehören sie …", options: ["zum selben Reich, aber zu verschiedenen Arten", "zur selben Art", "zu verschiedenen Familien"], answer: 1, explain: "Das ist die biologische Definition der Art." },
      { type: "text", q: "Wie heißt das Netz aus unterirdischen Fäden, das den Körper eines Pilzes bildet?", answer: ["myzel", "das myzel", "Myzel", "Mycel", "das Myzel"], explain: "Das Myzel, aus Hyphen; der „Pilz“, den wir sehen, ist der Fruchtkörper." },
      { type: "mc", q: "Ein Meeresschwamm gehört zum Reich …", options: ["der Pflanzen", "der Protisten", "der Tiere", "der Pilze"], answer: 2, explain: "Schwämme (Poriferen) sind mehrzellige heterotrophe Tiere, die einfachsten." }
    ]
  }
});
