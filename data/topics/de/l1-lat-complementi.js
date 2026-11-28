TOPIC('de', {
  id: `l1-lat-complementi`,
  title: `Die wichtigsten Adverbiale`,
  intro: `Ein Satz besteht nicht nur aus Subjekt, Verb und Objekt: Er sagt uns auch, <b>wo</b>, <b>wann</b>, <b>womit</b>, <b>wie</b>, <b>warum</b>, <b>mit wem</b>, <b>von wem</b>. Das sind die <b>adverbialen Bestimmungen und indirekten Ergänzungen</b>, und das Lateinische drückt sie durch die Kombination aus <b>Kasus</b> und <b>Präposition</b> aus (oder nur durch den Kasus, vor allem den <b>Ablativ</b>, den „Joker-Kasus“). In dieser Lektion lernst du die häufigsten: <b>Ort</b> (mit der Sonderregel für Städtenamen), <b>Zeit</b>, <b>Mittel</b>, <b>Art und Weise</b>, <b>Grund</b>, <b>Begleitung</b>, <b>Urheber</b> und weitere, die du täglich bei den Übersetzungen brauchen wirst. 🗺️⏳⚔️`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Der Überblick über die Adverbiale`,
      html: `<p>Im Deutschen verwenden wir viele Präpositionen (von, zu, aus, in, mit, für, auf, unter), um die Ergänzungen zu unterscheiden. Im Lateinischen gibt es weniger Präpositionen, und viele Ergänzungen werden allein durch den Kasus ausgedrückt. Der wichtigste Kasus für die Adverbiale ist der <b>Ablativ</b>, der drei verschiedene indogermanische Funktionen geerbt hat (<i>eigentlicher Ablativ</i> für die Trennung; <i>Instrumental</i> für Mittel und Begleitung; <i>Lokativ</i> für Ort und Zeit).</p>
<table>
<tr><th>Ergänzung</th><th>Frage</th><th>Lateinische Konstruktion</th><th>Beispiel</th></tr>
<tr><td>Genitivattribut</td><td>wessen?</td><td>Genitiv</td><td><i>casa agricolae</i></td></tr>
<tr><td>Dativobjekt</td><td>wem?</td><td>Dativ</td><td><i>puellae rosam dat</i></td></tr>
<tr><td>Urheber / Wirkursache</td><td>von wem?</td><td><b>a, ab + Ablativ</b></td><td><i>a magistro laudatur</i></td></tr>
<tr><td>Mittel</td><td>womit?</td><td><b>einfacher Ablativ</b></td><td><i>gladio pugnat</i></td></tr>
<tr><td>Begleitung</td><td>mit wem?</td><td><b>cum + Ablativ</b></td><td><i>cum amicis ambulat</i></td></tr>
<tr><td>Art und Weise</td><td>wie?</td><td><b>cum + Ablativ</b> (oder Ablativ + Adjektiv)</td><td><i>cum cura laborat</i></td></tr>
<tr><td>Grund</td><td>warum?</td><td>einfacher Ablativ, <b>ob/propter + Akkusativ</b>, <b>ex + Ablativ</b></td><td><i>timore fugit</i></td></tr>
<tr><td>Ort</td><td>wo? wohin? woher? wodurch?</td><td>Präpositionen + Kasus (siehe unten)</td><td><i>in horto</i></td></tr>
<tr><td>Zeit</td><td>wann? wie lange?</td><td>Ablativ (Zeitpunkt), Akkusativ (Zeitdauer)</td><td><i>hora quinta</i></td></tr>
<tr><td>Thema</td><td>worüber?</td><td><b>de + Ablativ</b></td><td><i>de bello narrat</i></td></tr>
<tr><td>Material</td><td>woraus ist es gemacht?</td><td><b>ex + Ablativ</b></td><td><i>ex auro</i></td></tr>
<tr><td>Herkunft</td><td>woher stammt es?</td><td><b>ex/de + Ablativ</b></td><td><i>ex Italia</i></td></tr>
</table>`
    },
    {
      type: `svg`, title: `Der Ablativ und seine drei Seelen`,
      caption: `Der lateinische Ablativ vereint drei indogermanische Kasus: Darum erfüllt er so viele verschiedene Funktionen.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#164e63" text-anchor="middle">EIN KASUS, VIELE FUNKTIONEN</text>
<rect x="215" y="46" width="170" height="52" rx="12" fill="#06b6d4" stroke="#0e7490" stroke-width="3"/>
<text x="300" y="80" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">ABLATIV</text>
<line x1="250" y1="98" x2="110" y2="150" stroke="#0e7490" stroke-width="3"/>
<line x1="300" y1="98" x2="300" y2="150" stroke="#0e7490" stroke-width="3"/>
<line x1="350" y1="98" x2="490" y2="150" stroke="#0e7490" stroke-width="3"/>
<rect x="20" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="110" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">TRENNUNG</text>
<text x="110" y="200" font-size="14" fill="#334155" text-anchor="middle">von wem? woher?</text>
<text x="110" y="222" font-size="14" fill="#334155" text-anchor="middle">Urheber, Herkunft,</text>
<text x="110" y="242" font-size="14" fill="#334155" text-anchor="middle">Bewegung von…weg</text>
<rect x="210" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="300" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">WERKZEUG</text>
<text x="300" y="200" font-size="14" fill="#334155" text-anchor="middle">womit? mit wem?</text>
<text x="300" y="222" font-size="14" fill="#334155" text-anchor="middle">Mittel, Begleitung,</text>
<text x="300" y="242" font-size="14" fill="#334155" text-anchor="middle">Art und Weise, Grund</text>
<rect x="400" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="490" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">ORT UND ZEIT</text>
<text x="490" y="200" font-size="14" fill="#334155" text-anchor="middle">wo? wann?</text>
<text x="490" y="222" font-size="14" fill="#334155" text-anchor="middle">Ruhe an einem Ort,</text>
<text x="490" y="242" font-size="14" fill="#334155" text-anchor="middle">Zeitpunkt</text>
<text x="300" y="285" font-size="14" fill="#164e63" text-anchor="middle">eigentlicher Ablativ + Instrumental + Lokativ</text>
</svg>`
    },
    {
      type: `text`, title: `2. Die Ortsangaben`,
      html: `<p>Bei den Orten muss man <b>vier Situationen</b> und zwei Kategorien von Nomen unterscheiden: <b>Gattungsnamen</b> (<i>silva, urbs, agri</i>) und <b>Eigennamen von Städten und kleinen Inseln</b> (<i>Roma, Athenae, Capua, Delos</i>), die eigene Konstruktionen haben.</p>
<table>
<tr><th>Ergänzung</th><th>Gattungsnamen</th><th>Städte und kleine Inseln</th></tr>
<tr><td><b>Ruhe an einem Ort</b> (wo bin ich?)</td><td><b>in + Ablativ</b><br><i>in silva</i> (im Wald), <i>in agris</i> (auf den Feldern)</td><td><b>Lokativ</b>: 1. und 2. Dekl. Singular: <b>-ae</b>, <b>-i</b><br><i>Romae</i> (in Rom), <i>Capuae</i>, <i>Corinthi</i>; Plural: Ablativ <i>Athenis</i> (in Athen), <i>Pompeiis</i></td></tr>
<tr><td><b>Richtung wohin</b> (wohin gehe ich?)</td><td><b>in / ad + Akkusativ</b><br><i>in silvam</i> (in den Wald), <i>ad portam</i> (zum Tor)</td><td><b>Akkusativ ohne Präposition</b><br><i>Romam</i> (nach Rom), <i>Athenas</i></td></tr>
<tr><td><b>Ausgangspunkt woher</b> (woher komme ich?)</td><td><b>ab, ex, de + Ablativ</b><br><i>ex silva</i> (aus dem Wald), <i>ab urbe</i></td><td><b>Ablativ ohne Präposition</b><br><i>Roma</i> (aus Rom), <i>Athenis</i></td></tr>
<tr><td><b>Weg wodurch</b> (wodurch gehe ich?)</td><td><b>per + Akkusativ</b><br><i>per silvam</i> (durch den Wald), <i>per agros</i></td><td><b>per + Akkusativ</b><br><i>per Italiam</i></td></tr>
</table>
<p>Einige Gattungsnamen verhalten sich wie Städtenamen: <b>domus</b> (Haus: <i>domi</i> „zu Hause“, <i>domum</i> „nach Hause“, <i>domo</i> „von zu Hause“), <b>rus</b> (Land: <i>ruri</i>, <i>rus</i>, <i>rure</i>), <b>humi</b> (auf dem Boden). Merke den Unterschied zwischen <b>in + Ablativ</b> (Ruhe) und <b>in + Akkusativ</b> (Bewegung): <i>in agro</i> „auf dem Feld (Ruhe)“, aber <i>in agrum</i> „in das Feld hinein (Bewegung)“. Das heißt, dieselbe Präposition hat je nach Kasus zwei Bedeutungen!</p>
<p>Die gebräuchlichsten <b>Präpositionen</b>: mit dem <b>Akkusativ</b>: <i>ad, apud, ante, post, per, inter, ob, propter, contra, trans, circum, extra, intra, in</i> (Bewegung); mit dem <b>Ablativ</b>: <i>a/ab, e/ex, de, cum, sine, pro, prae, in</i> (Ruhe), <i>sub</i>.</p>`
    },
    {
      type: `example`, title: `Orte in Aktion`,
      html: `<ul>
<li><i>Marcus Romae habitat.</i> ➜ „Marcus wohnt in Rom.“ (Lokativ)</li>
<li><i>Marcus Romam venit.</i> ➜ „Marcus kommt nach Rom.“ (einfacher Akkusativ: venio = ich komme)</li>
<li><i>Marcus Roma venit.</i> ➜ „Marcus kommt aus Rom.“ (einfacher Ablativ)</li>
<li><i>Marcus in horto laborat.</i> ➜ „Marcus arbeitet im Garten.“ (in + Abl.)</li>
<li><i>Pueri in hortum currunt.</i> ➜ „Die Jungen laufen in den Garten.“ (in + Akk.: Bewegung)</li>
<li><i>Poeta ex Italia venit.</i> ➜ „Der Dichter kommt aus Italien.“ (Italia ist keine Stadt: ex + Abl.)</li>
</ul>
<p>Beachte: <i>Athenas navigant</i> „sie segeln nach Athen“ (Akk. Pl.), <i>Athenis navigant</i> „sie segeln von Athen weg“ (Abl. Pl.), aber auch <i>Athenis habitant</i> „sie wohnen in Athen“ (Plural: Die Ruhe an einem Ort steht im Ablativ).</p>`
    },
    {
      type: `quiz`, title: `Mini-Quiz: Ortsangaben`,
      questions: [
        { type: `mc`, q: `Wie sagt man „in Rom“ (Ruhe an einem Ort)?`, options: [`in Roma`, `Romae`, `Romam`], answer: 1, explain: `Städtenamen der 1. und 2. Dekl. Singular: Lokativ auf -ae / -i: Romae.` },
        { type: `mc`, q: `„Ad Italiam“ und „in Italiam“: Welche Ergänzung drücken sie aus?`, options: [`Richtung wohin`, `Ruhe an einem Ort`, `Ausgangspunkt woher`], answer: 0, explain: `Mit dem Akkusativ drückt die Präposition eine Bewegung hin aus: ad/in + Akk.` },
        { type: `text`, q: `Wie sagt man „aus Rom“ (Ausgangspunkt, ohne Präposition)?`, answer: [`roma`], explain: `Einfacher Ablativ bei Städtenamen: Roma (langes a).` },
        { type: `tf`, q: `„In silva“ bedeutet „in den Wald hinein“.`, answer: false, explain: `In + Ablativ = Ruhe an einem Ort (im Wald); in den Wald ist in silvam.` }
      ]
    },
    {
      type: `text`, title: `3. Die Zeitangabe`,
      html: `<table>
<tr><th>Typ</th><th>Frage</th><th>Konstruktion</th><th>Beispiel</th></tr>
<tr><td><b>Zeitpunkt</b></td><td>wann?</td><td><b>einfacher Ablativ</b> (oder in + Ablativ bei einigen Nomen)</td><td><i>hora quinta</i> um fünf Uhr; <i>anno</i> im Jahr; <i>bello</i> im Krieg, während des Krieges; <i>primo mense</i> im ersten Monat</td></tr>
<tr><td><b>Zeitdauer</b></td><td>wie lange?</td><td><b>einfacher Akkusativ</b> (oder per + Akkusativ)</td><td><i>tres annos</i> drei Jahre lang; <i>multos dies</i> viele Tage lang; <i>totam noctem</i> die ganze Nacht</td></tr>
<tr><td><b>Zeit „vor/nach“</b></td><td>wie lange vorher/nachher?</td><td><b>ante / post + Akkusativ</b></td><td><i>ante bellum</i> vor dem Krieg; <i>post tres annos</i> nach drei Jahren</td></tr>
</table>
<p>Zur Unterscheidung: <b>wann?</b> (genauer Zeitpunkt) ➜ Ablativ; <b>wie lange?</b> (Dauer) ➜ Akkusativ. Ein Trick aus dem Deutschen: „um drei Uhr“ ➜ Ablativ; „drei Stunden lang“ ➜ Akkusativ.</p>`
    },
    {
      type: `text`, title: `4. Mittel, Art und Weise, Grund, Begleitung, Urheber`,
      html: `<p>Diese fünf Ergänzungen werden alle durch den <b>Ablativ</b> (mit oder ohne Präposition) ausgedrückt und müssen sorgfältig unterschieden werden:</p>
<ul>
<li><b>Mittel</b> (<i>womit?</i>): Ablativ <b>ohne Präposition</b>, bei Sachen. <i>Milites hostes gladiis vincunt</i> „Die Soldaten besiegen die Feinde mit den Schwertern“.</li>
<li><b>Begleitung</b> (<i>mit wem?</i>): <b>cum + Ablativ</b>, bei Personen. <i>Pueri cum magistro in silva ambulant</i> „Die Jungen gehen mit dem Lehrer im Wald spazieren“. Bei den Personalpronomen wird die Präposition <b>hinten</b> angehängt: <i>mecum, tecum, secum, nobiscum, vobiscum</i> („mit mir, mit dir, mit sich, mit uns, mit euch“).</li>
<li><b>Art und Weise</b> (<i>wie?</i>): <b>cum + Ablativ</b> mit einem Abstraktum (<i>cum cura</i>, „mit Sorgfalt“); steht ein Adjektiv dabei, kann <i>cum</i> fehlen oder dazwischenstehen: <i>magna cum cura</i> oder <i>magna cura</i> „mit großer Sorgfalt“; <i>more maiorum</i> „nach der Sitte der Vorfahren“.</li>
<li><b>Grund</b> (<i>warum?</i>): einfacher Ablativ für inneren Grund oder Gefühle (<i>timore</i>, „aus Furcht“; <i>amore</i>, „aus Liebe“), <b>ob / propter + Akkusativ</b> für äußeren Grund (<i>propter bellum</i>, „wegen des Krieges“), <b>ex + Ablativ</b> für den Grund als Folge (<i>ex vulnere mortuus est</i>, „er starb an der Wunde“).</li>
<li><b>Urheber</b> (<i>von wem?</i>): <b>a/ab + Ablativ</b> bei einem <b>Passiv</b> und einem <b>Personennamen</b>. <i>Puer a magistro laudatur</i> „Der Junge wird vom Lehrer gelobt“. Ist es ein Sachname, verwendet man den einfachen Ablativ (Wirkursache): <i>Milites telis vulnerantur</i> „Die Soldaten werden von Geschossen verwundet“.</li>
</ul>
<p>Faustregel: <b>Person + Passiv ➜ a/ab</b> (Urheber); <b>Person + Aktiv ➜ cum</b> (Begleitung); <b>Sache ➜ einfacher Ablativ</b> (Mittel oder Wirkursache).</p>`
    },
    {
      type: `remember`, title: `Entscheidungstabelle: „mit“ im Lateinischen`,
      html: `<table>
<tr><th>Deutsch „mit…“</th><th>Latein</th></tr>
<tr><td>mit einer Person (Begleitung)</td><td><b>cum + Abl.</b> (<i>cum amico</i>)</td></tr>
<tr><td>mit einem Werkzeug (Mittel)</td><td><b>einfacher Abl.</b> (<i>gladio</i>)</td></tr>
<tr><td>mit einer Haltung (Art und Weise)</td><td><b>cum + Abl.</b> oder Abl. + Adj. (<i>cum cura</i>, <i>magna cura</i>)</td></tr>
<tr><td>„von“ einer Person im Passiv (Urheber)</td><td><b>a/ab + Abl.</b> (<i>a magistro</i>)</td></tr>
</table>`
    },
    {
      type: `widget`, title: `Spiel: welche Ergänzung ist das?`,
      widget: `match`,
      options: {
        pairs: [
          [`gladio pugnat`, `Mittel`],
          [`cum amicis ambulat`, `Begleitung`],
          [`a magistro laudatur`, `Urheber`],
          [`magna cum cura laborat`, `Art und Weise`],
          [`propter bellum`, `Grund (äußerer)`],
          [`de bello narrat`, `Thema`],
          [`hora quinta`, `Zeitpunkt`],
          [`tres annos`, `Zeitdauer`]
        ]
      },
      caption: `Ordne den lateinischen Ausdruck der Ergänzung zu.`
    },
    {
      type: `svg`, title: `Ort: die vier Fragen`,
      caption: `Die vier Ortsergänzungen: Ruhe, Richtung wohin, Ausgangspunkt woher, Weg wodurch.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f7fee7"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#365314" text-anchor="middle">DIE ORTSERGÄNZUNGEN</text>
<rect x="20" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="85" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<circle cx="85" cy="120" r="12" fill="#dc2626"/>
<text x="85" y="150" font-size="14" fill="#713f12" text-anchor="middle">RUHE (wo?)</text>
<text x="85" y="168" font-size="14" fill="#713f12" text-anchor="middle">in + Abl. / Romae</text>
<rect x="190" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="255" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<line x1="170" y1="130" x2="235" y2="130" stroke="#16a34a" stroke-width="5"/>
<polygon points="235,120 255,130 235,140" fill="#16a34a"/>
<text x="255" y="150" font-size="14" fill="#713f12" text-anchor="middle">RICHTUNG (wohin)</text>
<text x="255" y="168" font-size="14" fill="#713f12" text-anchor="middle">ad/in + Akk. / Romam</text>
<rect x="360" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="425" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<line x1="430" y1="130" x2="500" y2="130" stroke="#2563eb" stroke-width="5"/>
<polygon points="500,120 520,130 500,140" fill="#2563eb"/>
<text x="425" y="150" font-size="14" fill="#713f12" text-anchor="middle">WOHER</text>
<text x="425" y="168" font-size="14" fill="#713f12" text-anchor="middle">ab/ex/de + Abl. / Roma</text>
<rect x="20" y="195" width="560" height="80" rx="14" fill="#ffffff" stroke="#65a30d" stroke-width="2"/>
<text x="300" y="224" font-size="16" font-weight="bold" fill="#365314" text-anchor="middle">WEG WODURCH (durch welchen Ort?): per + Akkusativ</text>
<text x="300" y="248" font-size="15" fill="#334155" text-anchor="middle">per silvam, per agros, per Italiam</text>
<text x="300" y="268" font-size="14" fill="#334155" text-anchor="middle">Städtenamen: Akkusativ/Ablativ OHNE Präposition</text>
</svg>`
    },
    {
      type: `text`, title: `5. Weitere nützliche Ergänzungen`,
      html: `<ul>
<li><b>Genitivattribut</b> (Genitiv): <i>casa agricolae</i> „das Haus des Bauern“. Es bezeichnet Besitz, Zugehörigkeit, Material (<i>vas auri</i> „ein Gefäß aus Gold“), Teil (partitiver Genitiv: <i>pars militum</i> „ein Teil der Soldaten“).</li>
<li><b>Dativobjekt</b> (Dativ): <i>Puer donum matri dat</i> „Der Junge gibt der Mutter ein Geschenk“. Dativ des Vorteils: <i>Non scholae sed vitae discimus</i> „Nicht für die Schule, sondern für das Leben lernen wir“ (der Satz ist eine Umkehrung von Seneca, der tadelte: <i>non vitae sed scholae discimus</i>).</li>
<li><b>Thema</b> (<b>de + Ablativ</b>): <i>De bello Gallico</i>, „Über den Gallischen Krieg“ (Caesar); <i>de amicitia</i> „über die Freundschaft“.</li>
<li><b>Material</b> (<b>ex + Ablativ</b>): <i>statua ex marmore</i> „eine Statue aus Marmor“ (marmor, 3. Dekl.).</li>
<li><b>Herkunft</b> (<b>ex/de + Ablativ</b> oder einfacher Ablativ): <i>ex Italia oriundus</i> „aus Italien stammend“.</li>
<li><b>Eigenschaft</b> (Genitiv oder Ablativ mit Adjektiv): <i>vir magnae virtutis</i> / <i>vir magna virtute</i> „ein Mann von großer Tapferkeit“.</li>
<li><b>Zweck</b> (Dativ): <i>Auxilio venit</i> „Er kommt zu Hilfe“ (wörtlich „er kommt zur Hilfe“).</li>
</ul>`
    },
    {
      type: `example`, title: `Wir übersetzen einen ganzen Satz`,
      html: `<p><i>Nautae ex Italia ad insulam parvam magnis navibus propter bellum navigant.</i></p>
<ol>
<li><b>nautae</b>: Nom. Pl., Subjekt (Seeleute).</li>
<li><b>ex Italia</b>: Ausgangspunkt (aus Italien), ex + Ablativ.</li>
<li><b>ad insulam parvam</b>: Richtung, ad + Akk. (zur kleinen Insel).</li>
<li><b>magnis navibus</b>: Mittel, Ablativ Plural (mit großen Schiffen; <i>navis</i> gehört zur 3. Dekl.).</li>
<li><b>propter bellum</b>: Grund, propter + Akk. (wegen des Krieges).</li>
<li><b>navigant</b>: Verb, 3. Pl.</li>
</ol>
<p>Übersetzung: <i>„Die Seeleute segeln wegen des Krieges mit großen Schiffen aus Italien zur kleinen Insel.“</i></p>`
    },
    {
      type: `curiosity`, title: `Wusstest du, dass… „mecum“ die Präposition hinten hat?`,
      html: `<p><i>Mecum</i>, <i>tecum</i>, <i>nobiscum</i>: Die Präposition <i>cum</i> ist hinten ans Pronomen „angeklebt“. Das ist eine Eigenschaft von <i>cum</i> bei den Personalpronomen (auch <i>quocum</i>, <i>quibuscum</i>, „mit dem, mit denen“). Die liturgische Formel <i>Dominus vobiscum</i> („Der Herr sei mit euch“) bewahrt sie noch.</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du, dass… der Lokativ ein „versteinerter“ Kasus ist?`,
      html: `<p>Der lateinische Lokativ hat keine eigenen Endungen: In der 1. und 2. Deklination Singular fällt er mit dem <b>Genitiv</b> zusammen (<i>Romae</i>, <i>Corinthi</i>, <i>domi</i>), in der 3. mit dem <b>Ablativ</b> oder Dativ (<i>Carthagine</i> oder <i>Carthagini</i>), im Plural mit dem <b>Ablativ</b> (<i>Athenis</i>). Darum gilt er als „versteinerter“ Kasus: Er überlebt nur in wenigen Nomen. Ein berühmtes Beispiel: Cicero schreibt, er sei in <i>Tusculi</i> (in Tusculum) oder <i>Romae</i>.</p>`
    },
    {
      type: `alternatives`, title: `Andere Wege, die Ergänzungen zu erkennen`,
      intro: `Wenn dich all diese Präpositionen verwirren, hier drei Strategien.`,
      tabs: [
        {
          label: `❓ Die Fragen`,
          html: `<p>Stell der Ergänzung die deutsche Frage: <b>wo</b> (Ruhe), <b>wohin</b> (Richtung), <b>woher</b> (Ausgangspunkt), <b>wodurch</b> (Weg); <b>wann</b>, <b>wie lange</b>; <b>womit</b>, <b>wie</b>, <b>mit wem</b>, <b>warum</b>, <b>von wem</b>. Jeder Frage entspricht eine Zeile der Tabelle. Das ist die sicherste Methode.</p>`
        },
        {
          label: `🧭 Der Leitkasus`,
          html: `<p>Sieh auf den Kasus des Nomens:</p>
<ul>
<li>Ist es <b>Akkusativ</b> + Präposition, handelt es sich meist um <b>Bewegung</b> (ad, in, per, trans), <b>Zeitdauer</b>, <b>äußeren Grund</b> (ob, propter);</li>
<li>ist es <b>Ablativ</b> + Präposition, ist es <b>Ausgangspunkt</b> (ab, ex, de), <b>Begleitung</b>/<b>Art und Weise</b> (cum), <b>Urheber</b> (a/ab mit Passiv), <b>Ruhe</b> (in), <b>Thema</b> (de), <b>Material</b> (ex);</li>
<li>ist es <b>Ablativ ohne Präposition</b>, ist es <b>Mittel</b>, <b>Zeitpunkt</b>, <b>innerer Grund</b>, <b>Art und Weise</b> (mit Adjektiv).</li>
</ul>`
        },
        {
          label: `🇮🇹 Vom Latein zum Italienischen`,
          html: `<p>Viele italienische Präpositionen stammen von diesen lateinischen: <i>in</i> ➜ in; <i>ad</i> ➜ a; <i>de</i> ➜ di/da; <i>ex</i> ➜ da (e); <i>cum</i> ➜ con; <i>per</i> ➜ per; <i>ab</i> ➜ da; <i>sine</i> ➜ senza; <i>post</i> ➜ dopo; <i>ante</i> ➜ avanti, prima; <i>sub</i> ➜ sotto; <i>super</i> ➜ sopra. Auch im Deutschen finden sich Lehnwörter wie „Subjekt“, „Kontra“, „Extra“, „Post-“ oder „Ex-“. Sie zu erkennen ist die halbe Arbeit.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mindmap der Ergänzungen`,
      nodes: [
        { id: `abl`, label: `Ablativ`, x: 50, y: 8, color: `#06b6d4`, html: `Der „Jokerkasus“ der indirekten Ergänzungen.`, why: `Der lateinische Ablativ geht auf die Verschmelzung von drei indogermanischen Kasus zurück: Ablativ (Trennung), Instrumental (Mittel, Begleitung) und Lokativ (Ort, Zeit). Darum hat er so viele verschiedene Funktionen.` },
        { id: `luogo`, label: `Ort`, x: 18, y: 42, color: `#16a34a`, html: `Ruhe, Richtung wohin, woher, wodurch.`, why: `Städtenamen haben keine Präposition, weil der Ort als bereits bekannter „Zielpunkt“ empfunden wird: Romam = nach Rom. Der Lokativ Romae ist ein Überrest eines toten Kasus.` },
        { id: `tempo`, label: `Zeit`, x: 50, y: 42, color: `#f59e0b`, html: `Wann (Abl.) und wie lange (Akk.).`, why: `Der Akkusativ ist der Kasus der Ausdehnung („die ganze Nacht hindurch“), der Ablativ der des Punktes („in diesem Moment“).` },
        { id: `mezzo`, label: `Mittel, Art und Weise, Grund`, x: 82, y: 42, color: `#3b82f6`, html: `Einfacher Ablativ oder mit cum.`, why: `Funktion des indogermanischen Instrumentals: „mittels“. Das Deutsche hat dafür keinen eigenen Kasus mehr und verwendet „mit“ und „durch“.` },
        { id: `comp`, label: `Begleitung und Urheber`, x: 30, y: 78, color: `#ef4444`, html: `Cum + Abl. (mit wem); a/ab + Abl. (von wem).`, why: `Die Unterscheidung zwischen Personen und Sachen ist typisch lateinisch: Ist der Urheber eine Person, braucht es die Präposition, ist es ein Werkzeug, nicht. Ein häufiger Fehler ist, „gladio“ für „vom Soldaten“ zu sagen.` },
        { id: `ita`, label: `Präpositionen heute`, x: 75, y: 82, color: `#a855f7`, html: `di, a, da, in, con, per… / von, zu, aus, in, mit, für…`, why: `Die romanischen Sprachen haben die Kasus durch Präpositionen ersetzt: Das Italienische hat viele Präpositionen vom Latein geerbt (<i>di, a, da, in, con, per</i>) und später die verschmolzenen (del, nel, sul…) gebildet.` }
      ],
      edges: [
        [`abl`, `luogo`, `Funktion`], [`abl`, `tempo`, `Funktion`], [`abl`, `mezzo`, `Funktion`], [`mezzo`, `comp`, `+ Präposition`], [`comp`, `ita`, `heute`]
      ]
    },
    {
      type: `quiz`, title: `Mini-Quiz: Mittel, Begleitung, Urheber`,
      questions: [
        { type: `mc`, q: `„Cum amicis“ ist eine Ergänzung der…`, options: [`Mittel`, `Begleitung`, `Urheber`], answer: 1, explain: `Cum + Ablativ bei Personen: Begleitung.` },
        { type: `text`, q: `Wie sagt man „mit mir“ (ein Wort)?`, answer: [`mecum`], explain: `Die Präposition cum wird dem Pronomen nachgestellt: mecum.` },
        { type: `mc`, q: `„Puer a magistro laudatur“: a magistro ist…`, options: [`Urheber`, `Begleitung`, `Mittel`], answer: 0, explain: `Passiv + Person: a/ab + Ablativ = Urheber der Handlung.` },
        { type: `mc`, q: `„Milites gladiis pugnant“: gladiis ist…`, options: [`Mittel`, `Begleitung`, `Urheber`], answer: 0, explain: `Einfacher Ablativ bei einer Sache: Mittel („sie kämpfen mit Schwertern“).` }
      ]
    }
  ],
  glossary: [
    { t: `Indirekte Ergänzung`, d: `Ergänzung, die von einer Präposition oder einem anderen Kasus als dem Akkusativ abhängt.` },
    { t: `Ablativ`, d: `Kasus der Adverbiale; vereint Ablativ, Instrumental und Lokativ.` },
    { t: `Lokativ`, d: `Kasus der Ruhe an einem Ort, bewahrt in Romae, domi, ruri.` },
    { t: `Ruhe an einem Ort`, d: `Wo? in + Ablativ (Städte: Lokativ).` },
    { t: `Richtung wohin`, d: `Wohin? in/ad + Akkusativ (Städte: einfacher Akkusativ).` },
    { t: `Ausgangspunkt woher`, d: `Woher? ab/ex/de + Ablativ (Städte: einfacher Ablativ).` },
    { t: `Ergänzung des Mittels`, d: `Womit? Einfacher Ablativ.` },
    { t: `Ergänzung der Begleitung`, d: `Mit wem? cum + Ablativ.` },
    { t: `Urheber (Agens)`, d: `Von wem? a/ab + Ablativ, mit Passiv.` },
    { t: `Ergänzung des Grundes`, d: `Warum? Einfacher Ablativ oder ob/propter + Akkusativ.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Wie sagt man „in Rom“ als Antwort auf „wo?“`, options: [`Romae`, `Roma`, `in Romam`], answer: 0, explain: `Lokativ von Roma.` },
      { type: `mc`, q: `Wie sagt man „nach Athen“ (Athenae, -arum, Plural)?`, options: [`Athenas`, `Athenis`, `ad Athenae`], answer: 0, explain: `Richtung wohin mit einem Städtenamen: einfacher Akkusativ, Athenas.` },
      { type: `text`, q: `Übersetze „mit dem Schwert“ (gladius, -i): Ablativ des Mittels.`, answer: [`gladio`], explain: `Ablativ Singular von gladius ohne Präposition.` },
      { type: `mc`, q: `„Tres annos“ ist…`, options: [`Zeitpunkt`, `Zeitdauer`, `Grund`], answer: 1, explain: `Akkusativ der Zeitdauer: drei Jahre lang.` },
      { type: `mc`, q: `„Ex agris“ ist…`, options: [`Ausgangspunkt woher`, `Ruhe an einem Ort`, `Urheber`], answer: 0, explain: `Ex + Ablativ = Ausgangspunkt (von den Feldern).` },
      { type: `mc`, q: `Wie übersetzt man „Servus a domino vocatur“?`, options: [`Der Sklave ruft den Herrn`, `Der Sklave wird vom Herrn gerufen`, `Der Sklave ruft mit dem Herrn`], answer: 1, explain: `Vocatur Passiv; a domino = Urheber.` },
      { type: `tf`, q: `„In silvam“ bezeichnet die Ruhe an einem Ort.`, answer: false, explain: `In + Akkusativ bezeichnet Bewegung (in den Wald hinein).` },
      { type: `mc`, q: `„Cum cura“ ist…`, options: [`Art und Weise`, `Mittel`, `Ort`], answer: 0, explain: `Cum + abstrakter Ablativ: Art und Weise.` },
      { type: `text`, q: `Wie sagt man „von zu Hause“ (domus)?`, answer: [`domo`], explain: `Wie die Städtenamen: einfacher Ablativ: domo.` },
      { type: `order`, q: `Bring die vier Ortsfragen in die richtige Reihenfolge.`, items: [`wo? (Ruhe)`, `wohin? (Richtung)`, `woher? (Ausgangspunkt)`, `wodurch? (Weg)`], explain: `Traditionelle Reihenfolge: Ruhe, Richtung wohin, Ausgangspunkt woher, Weg wodurch.` }
    ]
  }
});
