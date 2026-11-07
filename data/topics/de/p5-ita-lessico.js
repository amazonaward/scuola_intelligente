TOPIC('de', {
  id: "p5-ita-lessico",
  title: "Der Wortschatz (il lessico)",
  intro: "Der <b>Wortschatz</b> (<i>lessico</i>) ist die Gesamtheit der Wörter einer Sprache. Wörter haben Freunde (<b>Synonyme</b>), Feinde (<b>Gegenteile</b>), Familien, und man kann sie wie Bausteine mit <b>Vorsilben</b> und <b>Nachsilben</b> zusammensetzen. Je mehr Wörter du kennst, desto besser kannst du sagen, was du denkst!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Was ist der Wortschatz?",
      html: `<p>Das <b>lessico</b> (oder <b>vocabolario</b>) ist die Gesamtheit aller Wörter einer Sprache. Jeder von uns hat außerdem seinen <b>persönlichen Wortschatz</b>: die Wörter, die er kennt und benutzt.</p>
<p>Der Sprachwissenschaftler <b>Tullio De Mauro</b> hat berechnet, dass etwa <b>7.000 Wörter</b> den <b>Grundwortschatz</b> (<i>vocabolario di base</i>) des Italienischen bilden: Das sind die, die man braucht, um fast alles zu verstehen, was wir jeden Tag lesen und hören. Die großen Wörterbücher enthalten aber mehr als <b>250.000</b>!</p>
<p>Um den Wortschatz zu erweitern: viel lesen, das Wörterbuch benutzen, mit Wörtern spielen, sich fragen, woher sie kommen.</p>`
    },
    {
      type: "text",
      title: "Synonyme, Gegenteile, Homonyme",
      html: `<ul>
<li><b>Synonyme</b>: Wörter mit <b>gleicher oder ähnlicher</b> Bedeutung. <i>Casa – abitazione</i> (Haus – Wohnung), <i>bello – carino – stupendo</i> (schön – hübsch – wunderbar), <i>iniziare – cominciare</i> (anfangen – beginnen). Achtung: Sie sind selten vollkommen gleich; jedes hat seine „Nuance“ (<i>carino</i> ist weniger als <i>stupendo</i>).</li>
<li><b>Gegenteile</b> (Antonyme): Wörter mit <b>entgegengesetzter</b> Bedeutung. <i>Alto – basso</i> (hoch – niedrig), <i>aprire – chiudere</i> (öffnen – schließen), <i>felice – infelice</i> (glücklich – unglücklich). Manche bilden sich mit einer Vorsilbe: <i>utile → inutile</i>, <i>onesto → disonesto</i>.</li>
<li><b>Homonyme</b>: Wörter, die <b>gleich</b> geschrieben (und/oder ausgesprochen) werden, aber <b>verschiedene Bedeutungen</b> haben. <i>Riso</i> (Reis / das Lachen), <i>miglio</i> (Längenmaß Meile / Hirse), <i>pesca</i> (Pfirsich / das Angeln: Hier ändert sich die Aussprache des <i>e</i>!).</li>
<li><b>Polyseme Wörter</b>: ein Wort mit <b>mehreren verwandten Bedeutungen</b>: <i>la penna</i> (die Feder) des Vogels und die <i>penna</i> (der Stift) zum Schreiben (die ersten Schreibfedern waren wirklich Gänsefedern!).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Spiel: Ordne die Synonyme zu",
      widget: "match",
      options: { pairs: [["veloce", "rapido"], ["paura", "timore"], ["regalo", "dono"], ["guardare", "osservare"], ["allegro", "contento"], ["finire", "terminare"]] },
      caption: "Verbinde jedes Wort mit seinem Synonym."
    },
    {
      type: "text",
      title: "Wie Wörter entstehen: Wortstamm, Vorsilben, Nachsilben",
      html: `<p>Viele Wörter werden aus einem <b>Grundwort</b> (<i>parola primitiva</i>; es stammt nicht von anderen italienischen Wörtern ab) gebildet, wie <i>mare</i> (Meer), <i>fiore</i> (Blume), <i>giocare</i> (spielen).</p>
<ul>
<li>Der <b>Wortstamm</b> (<i>radice</i>) ist der Teil, der die Bedeutung trägt: <b>fior</b>-e, <b>fior</b>-aio (Blumenhändler), <b>fior</b>-ire (blühen).</li>
<li>Die <b>Vorsilbe</b> (<i>prefisso</i>) steht <b>vor</b> dem Stamm und verändert die Bedeutung: <i><b>ri</b>fare</i> (noch einmal tun), <i><b>s</b>contento</i> (nicht zufrieden), <i><b>pre</b>vedere</i> (vorhersehen), <i><b>super</b>mercato</i> (Supermarkt), <i><b>sotto</b>passaggio</i> (Unterführung).</li>
<li>Die <b>Nachsilbe</b> (<i>suffisso</i>) steht <b>nach</b> dem Stamm und schafft ein neues Wort: <i>fior<b>aio</b></i> (Beruf), <i>gioca<b>tore</b></i> (wer etwas tut), <i>gentil<b>ezza</b></i> (Eigenschaft), <i>lava<b>trice</b></i> (Gerät), <i>mangi<b>abile</b></i> (was man … kann).</li>
</ul>
<p>Die so entstandenen Wörter heißen <b>abgeleitete Wörter</b> (<i>derivate</i>). Alle Wörter mit demselben Stamm bilden eine <b>Wortfamilie</b>.</p>`
    },
    {
      type: "svg",
      title: "Der Stammbaum der Familie von „mare“",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#ecfeff"/>
<rect x="300" y="200" width="40" height="110" fill="#92400e"/>
<ellipse cx="320" cy="140" rx="290" ry="115" fill="#86efac"/>
<rect x="250" y="250" width="140" height="44" rx="10" fill="#0369a1"/>
<text x="320" y="279" font-size="22" text-anchor="middle" fill="#ffffff" font-weight="bold">MARE</text>
<g font-size="17" text-anchor="middle" font-weight="bold">
<rect x="70" y="60" width="120" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="130" y="84" fill="#166534">mar<tspan fill="#dc2626">ino</tspan></text>
<rect x="210" y="40" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="275" y="64" fill="#166534">mar<tspan fill="#dc2626">inaio</tspan></text>
<rect x="360" y="40" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="425" y="64" fill="#166534">mar<tspan fill="#dc2626">ittimo</tspan></text>
<rect x="470" y="100" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="535" y="124" fill="#166534">mar<tspan fill="#dc2626">ea</tspan></text>
<rect x="60" y="130" width="160" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="140" y="154" fill="#166534"><tspan fill="#2563eb">sotto</tspan>mar<tspan fill="#dc2626">ino</tspan></text>
<rect x="240" y="110" width="160" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="320" y="134" fill="#166534"><tspan fill="#2563eb">oltre</tspan>mare</text>
<rect x="420" y="170" width="170" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="505" y="194" fill="#166534">mare<tspan fill="#dc2626">ggiata</tspan></text>
<rect x="70" y="190" width="150" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="145" y="214" fill="#166534">mar<tspan fill="#dc2626">oso</tspan></text>
</g>
<text x="20" y="310" font-size="14" fill="#1d4ed8">blau = Vorsilbe</text>
<text x="520" y="310" font-size="14" fill="#b91c1c">rot = Nachsilbe</text>
</svg>`,
      caption: "Alle diese Wörter haben den Stamm «mar-»: Sie bilden die Wortfamilie von «mare» (Meer)."
    },
    {
      type: "text",
      title: "Veränderte und zusammengesetzte Wörter",
      html: `<p>Die <b>veränderten Nomen</b> (<i>nomi alterati</i>) verändern die Bedeutung des Nomens mit einer Nachsilbe ein wenig, ohne etwas Neues zu schaffen:</p>
<ul>
<li><b>Verkleinerungsformen</b> (<i>diminutivi</i>; kleiner): <i>gatt<b>ino</b>, cas<b>etta</b>, libr<b>icino</b></i>;</li>
<li><b>Vergrößerungsformen</b> (<i>accrescitivi</i>; größer): <i>librone, nas<b>one</b></i>;</li>
<li><b>Koseformen</b> (<i>vezzeggiativi</i>; liebevoll): <i>orsacch<b>iotto</b>, cag<b>nolino</b></i>;</li>
<li><b>Abwertende Formen</b> (<i>dispregiativi</i>; verächtlich): <i>temp<b>accio</b>, libr<b>accio</b></i>.</li>
</ul>
<p>⚠️ <b>Falsche Veränderungen</b>: <i>tacchino</i> (Truthahn) ist kein kleiner Absatz (<i>tacco</i>), <i>mattone</i> (Ziegelstein) ist kein großer Verrückter (<i>matto</i>), <i>bottone</i> (Knopf) ist kein großes Fass (<i>botte</i>), <i>burrone</i> (Schlucht) hat nicht viel Butter (<i>burro</i>)! 😄</p>
<p>Die <b>zusammengesetzten Nomen</b> (<i>nomi composti</i>) bestehen aus <b>zwei verbundenen Wörtern</b>: <i>capo + stazione = capostazione</i> (Bahnhofsvorsteher), <i>apri + scatole = apriscatole</i> (Dosenöffner), <i>arco + baleno = arcobaleno</i> (Regenbogen), <i>pesce + spada = pescespada</i> (Schwertfisch).</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Wörter und ihre Familien",
      questions: [
        { type: "mc", q: "Was ist das Gegenteil von «generoso»?", options: ["gentile", "avaro", "buono"], answer: 1, explain: "Generoso = wer gern gibt; avaro = wer nicht geben will." },
        { type: "mc", q: "Im Wort «rileggere» ist «ri-» …", options: ["eine Nachsilbe", "eine Vorsilbe", "der Stamm"], answer: 1, explain: "Es steht vor dem Stamm und bedeutet «noch einmal»: Vorsilbe." },
        { type: "tf", q: "«Tacchino» ist die Verkleinerungsform von «tacco».", answer: false, explain: "Es ist eine falsche Veränderung: Der Truthahn ist ein Tier, kein kleiner Absatz!" },
        { type: "mc", q: "Welches Wort gehört NICHT zur Familie von «fiore»?", options: ["fioraio", "fiorire", "fiume"], answer: 2, explain: "«Fiume» (Fluss) hat nicht den Stamm fior-: Es ist eine andere Familie." }
      ]
    },
    {
      type: "example",
      title: "Beispiel: einen Satz mit Synonymen bereichern",
      html: `<p>„Armer“ Satz: «Il film era <b>bello</b>, la musica era <b>bella</b> e anche i costumi erano <b>belli</b>.» (Der Film war schön, die Musik war schön und auch die Kostüme waren schön.)</p>
<p>„Reicher“ Satz: «Il film era <b>appassionante</b>, la musica era <b>coinvolgente</b> e i costumi erano <b>eleganti</b>.» (Der Film war spannend, die Musik mitreißend und die Kostüme elegant.)</p>
<p>Siehst du? Mit den richtigen Synonymen vermeidet man <b>Wiederholungen</b> und sagt <b>mehr</b>: Jedes Wort fügt eine genaue Information hinzu. Das <b>Wörterbuch der Synonyme und Gegenteile</b> ist ein ausgezeichneter Freund für alle, die schreiben.</p>`
    },
    {
      type: "example",
      title: "Beispiel: die Bedeutung aus den Teilen erraten",
      html: `<p>Du findest ein neues Wort: <b>«irraggiungibile»</b>. Du weißt nicht, was es bedeutet? Zerlege es!</p>
<ul>
<li><b>ir-</b> = verneinende Vorsilbe („nicht“), wie in <i>ir</i>regolare (unregelmäßig);</li>
<li><b>raggiung-</b> = Stamm von <i>raggiungere</i> (erreichen);</li>
<li><b>-ibile</b> = Nachsilbe „was man … kann“, wie in <i>leggibile</i> (lesbar).</li>
</ul>
<p>Ergebnis: «<b>was man nicht erreichen kann</b>» (unerreichbar). So verstehst du sehr viele neue Wörter, ohne das Wörterbuch zu öffnen!</p>`
    },
    {
      type: "widget",
      title: "Lernkarten: Vorsilben und Nachsilben",
      widget: "flashcards",
      options: {
        cards: [
          { front: "ri- (rifare)", back: "noch einmal" },
          { front: "in- / im- / s- / dis- (infelice, impossibile, scontento, disonesto)", back: "nicht, Gegenteil" },
          { front: "pre- (prevedere)", back: "vorher" },
          { front: "sotto- / sub- (sottomarino, subacqueo)", back: "unter" },
          { front: "super- / iper- (supermercato, ipermercato)", back: "über, sehr groß" },
          { front: "-aio / -ista (fioraio, dentista)", back: "Beruf" },
          { front: "-tore / -trice (giocatore, lavatrice)", back: "wer oder was die Handlung ausführt" },
          { front: "-ezza / -ità (bellezza, bontà)", back: "abstrakte Eigenschaft" },
          { front: "-abile / -ibile (lavabile, leggibile)", back: "was man … kann" }
        ]
      },
      caption: "Drehe die Karten um: vorne die Vor- oder Nachsilbe, hinten die Bedeutung."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Das erste italienische Wörterbuch",
      html: `<p>Das erste große Wörterbuch der italienischen Sprache wurde 1612 in Venedig von der <b>Accademia della Crusca</b> aus Florenz veröffentlicht. Der Name ist kurios: <i>crusca</i> ist die Kleie, der Abfall des Mehls. Die Akademiker wollten die Sprache „sieben“ und die guten Wörter (das Mehl) von den auszusortierenden (der Kleie) trennen! Das Zeichen der Akademie ist deshalb ein <b>frullone</b>, das Mehlsieb.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Wörter auf Reisen",
      html: `<p>Das Italienische hat Wörter aus vielen Sprachen übernommen (<b>Lehnwörter</b>, <i>prestiti</i>): aus dem Arabischen <i>zucchero</i> (Zucker), <i>arancia</i> (Orange), <i>magazzino</i> (Lager), <i>algebra</i>; aus dem Französischen <i>giardino</i> (Garten), <i>bistecca</i> (Steak; aus dem Englischen <i>beef-steak</i>!); aus dem Englischen <i>computer, sport, weekend</i>. Und das Italienische hat der Welt viele geschenkt: <i>pizza, spaghetti, piano, opera, ciao, bravo</i> werden in sehr vielen Sprachen benutzt!</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Synonyme</b> = ähnliche Bedeutung; <b>Gegenteile</b> = entgegengesetzte Bedeutung; <b>Homonyme</b> = gleiche Form, verschiedene Bedeutungen.</li>
<li><b>Grundwort</b> → mit Vorsilben/Nachsilben wird es zum <b>abgeleiteten</b> Wort; gleicher Stamm = gleiche <b>Familie</b>.</li>
<li><b>Vorsilbe</b> vor dem Stamm, <b>Nachsilbe</b> danach.</li>
<li><b>Veränderte Nomen</b>: Verkleinerung, Vergrößerung, Koseform, Abwertung (Vorsicht vor falschen Veränderungen!). <b>Zusammensetzungen</b>: zwei verbundene Wörter.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege zu verstehen, wie Wörter gebaut werden",
      intro: "Wörter kann man als Bausteine sehen, als lateinische und griechische Wurzeln, wie im Englischen … oder man kann sie in einer Intensitätsskala ordnen.",
      tabs: [
        {
          label: "🧱 Die Bausteine",
          html: `<p>Stell dir ein Wort wie ein Bauwerk aus <b>Bausteinen</b> vor: In der Mitte ist der <b>Stamm-Baustein</b> (die Bedeutung), davor kannst du eine <b>Vorsilbe</b> anstecken, dahinter eine <b>Nachsilbe</b>.</p>
<p>Mit dem Stamm <b>-lav-</b> (waschen): lav<b>are</b>, lav<b>atrice</b>, lav<b>abile</b>, <b>ri</b>lavare, lav<b>andino</b>, lav<b>aggio</b> … Ein Stamm, viele Bauten!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<rect x="40" y="70" width="140" height="70" rx="6" fill="#3b82f6"/><circle cx="75" cy="64" r="10" fill="#3b82f6"/><circle cx="145" cy="64" r="10" fill="#3b82f6"/>
<text x="110" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">im-</text>
<rect x="190" y="70" width="200" height="70" rx="6" fill="#16a34a"/><circle cx="240" cy="64" r="10" fill="#16a34a"/><circle cx="340" cy="64" r="10" fill="#16a34a"/>
<text x="290" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">mangi</text>
<rect x="400" y="70" width="160" height="70" rx="6" fill="#dc2626"/><circle cx="440" cy="64" r="10" fill="#dc2626"/><circle cx="520" cy="64" r="10" fill="#dc2626"/>
<text x="480" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">-abile</text>
<text x="110" y="170" font-size="16" text-anchor="middle">Vorsilbe: nicht</text>
<text x="290" y="170" font-size="16" text-anchor="middle">Stamm: essen</text>
<text x="480" y="170" font-size="16" text-anchor="middle">Nachsilbe: was man kann</text>
<text x="300" y="205" font-size="20" text-anchor="middle" font-weight="bold" fill="#1f2937">immangiabile = ungenießbar (nicht essbar)</text>
</svg>`
        },
        {
          label: "🏛️ Lateinische und griechische Wurzeln",
          html: `<p>Sehr viele italienische Wörter haben <b>lateinische oder griechische Wurzeln</b>. Wenn du die Wurzeln lernst, verstehst du ganze Wortfamilien!</p>
<ul>
<li><b>tele-</b> (griechisch: fern): telefono, televisione, telescopio.</li>
<li><b>-fono</b> (griechisch: Klang, Stimme): telefono, microfono, megafono.</li>
<li><b>-scopio</b> (griechisch: beobachten): microscopio, telescopio.</li>
<li><b>bio-</b> (griechisch: Leben): biologia, biografia.</li>
<li><b>aqua</b> (lateinisch: Wasser): acquario, acquedotto, acquatico.</li>
</ul>
<p>Ordne die Wurzel ihrer Bedeutung zu:</p>`,
          widget: "match",
          options: { pairs: [["tele-", "fern"], ["micro-", "klein"], ["-fono", "Klang"], ["bio-", "Leben"], ["-grafia", "Schrift"], ["geo-", "Erde"]] }
        },
        {
          label: "🇬🇧 Im Englischen ist es genauso!",
          html: `<p>Auch im Englischen werden Wörter mit Vorsilben und Nachsilben gebaut, oft <b>dieselben</b>, weil sie aus dem Lateinischen kommen:</p>
<table>
<tr><th>Englisch</th><th>Italienisch</th><th>Was sie bewirken</th></tr>
<tr><td><b>un</b>happy</td><td><b>in</b>felice</td><td>Gegenteil</td></tr>
<tr><td><b>re</b>write</td><td><b>ri</b>scrivere</td><td>noch einmal</td></tr>
<tr><td>play<b>er</b></td><td>gioca<b>tore</b></td><td>wer etwas tut</td></tr>
<tr><td>wash<b>able</b></td><td>lav<b>abile</b></td><td>was man kann</td></tr>
<tr><td>kind<b>ness</b></td><td>gentil<b>ezza</b></td><td>Eigenschaft</td></tr>
</table>
<p>Die „Teile“ zu kennen hilft dir, zwei Sprachen auf einmal zu lernen!</p>`
        },
        {
          label: "🌡️ Das Wörterthermometer",
          html: `<p>Synonyme sind nicht alle gleich: Sie haben verschiedene <b>Intensitäten</b>. Setze sie auf ein <b>Thermometer</b>, vom schwächsten zum stärksten:</p>
<ul>
<li>😐 <b>contento</b> (zufrieden) → 🙂 <b>felice</b> (glücklich) → 😄 <b>entusiasta</b> (begeistert) → 🤩 <b>euforico</b> (euphorisch)</li>
<li>🌤️ <b>tiepido</b> (lauwarm) → ☀️ <b>caldo</b> (warm) → 🔥 <b>bollente</b> (kochend heiß) → 🌋 <b>rovente</b> (glühend)</li>
<li>🤏 <b>piccolo</b> (klein) → 🐜 <b>minuscolo</b> (winzig) → 🔬 <b>microscopico</b> (mikroskopisch)</li>
</ul>
<p>Das richtige Wort auf dem Thermometer zu wählen macht deine Texte genau. Versuche zu sortieren: Sind diese Wörter „schwach“ oder „stark“?</p>`,
          widget: "classify",
          options: { groups: ["Schwache Intensität", "Starke Intensität"], items: [["contento", 0], ["tiepido", 0], ["carino", 0], ["stanco", 0], ["euforico", 1], ["rovente", 1], ["stupendo", 1], ["sfinito", 1]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Wortschatzes",
      nodes: [
        { id: "lessico", label: "Wortschatz", x: 50, y: 6, color: "#2563eb", html: "Die Gesamtheit der Wörter einer Sprache (oder einer Person).", why: "Vom Griechischen <i>léxis</i> = „Wort“. Der Wortschatz verändert sich ständig: Neue Wörter entstehen (Neologismen) und andere verschwinden, weil sich die Welt ändert, die wir beschreiben." },
        { id: "significato", label: "Bedeutungsbeziehungen", x: 22, y: 30, color: "#16a34a", html: "Synonyme, Gegenteile, Homonyme, polyseme Wörter.", why: "Wörter stehen nicht allein: Ihre Bedeutung versteht man auch im Vergleich mit anderen (warm versteht man besser neben kalt)." },
        { id: "sinonimi", label: "Synonyme und Gegenteile", x: 10, y: 56, color: "#22c55e", html: "Synonyme: ähnliche Bedeutung. Gegenteile: entgegengesetzte Bedeutung.", why: "Vom Griechischen <i>syn</i> (zusammen) + <i>ónoma</i> (Name) und <i>antí</i> (gegen) + <i>ónoma</i>. Perfekte Synonyme sind sehr selten: Jede Sprache neigt dazu, jedem Wort eine eigene Nuance zu geben." },
        { id: "omonimi", label: "Homonyme", x: 32, y: 56, color: "#14b8a6", html: "Gleiche Form, verschiedene Bedeutungen: riso (Reis) / riso (Lachen).", why: "Oft entstehen sie aus verschiedenen lateinischen Wörtern, die sich im Lauf der Jahrhunderte angeglichen haben: <i>oryza</i> → riso (Reis), <i>risus</i> → riso (Lachen)." },
        { id: "formazione", label: "Wortbildung", x: 75, y: 30, color: "#dc2626", html: "Aus einem Grundwort entstehen abgeleitete, veränderte und zusammengesetzte Wörter.", why: "Das ist der sparsamste Weg, neue Wörter zu schaffen: Statt neue Laute zu erfinden, kombiniert man bekannte Teile neu, die alle verstehen." },
        { id: "radice", label: "Wortstamm", x: 60, y: 56, color: "#f59e0b", html: "Der Teil des Wortes, der die Bedeutung trägt.", why: "Viele italienische Stämme kommen aus dem Lateinischen (einige aus dem Griechischen): Sie zu kennen hilft, ganze Wortfamilien zu verstehen." },
        { id: "affissi", label: "Vorsilben und Nachsilben", x: 85, y: 56, color: "#a855f7", html: "Vorsilbe vor dem Stamm, Nachsilbe danach.", why: "Viele waren selbstständige lateinische Wörter (<i>sub</i> = unter, <i>super</i> = über, <i>re-</i> = noch einmal), die an andere Wörter „angeklebt“ wurden." },
        { id: "famiglia", label: "Wortfamilie", x: 60, y: 82, color: "#0ea5e9", html: "Alle Wörter mit demselben Stamm: mare, marino, marinaio …", why: "Wie in einer echten Familie haben sie einen gemeinsamen „Vorfahren“: das Grundwort." },
        { id: "alterati", label: "Veränderte und zusammengesetzte Wörter", x: 88, y: 82, color: "#ec4899", html: "Veränderte: gattino, librone, tempaccio. Zusammengesetzte: arcobaleno, apriscatole.", why: "Veränderte Wörter schaffen nichts Neues, sondern fügen die Vorstellung von Größe oder ein Gefühl hinzu; Zusammensetzungen vereinen zwei Bedeutungen zu einer." },
        { id: "dizionario", label: "Wörterbuch", x: 22, y: 82, color: "#64748b", html: "Das Buch (oder die App), das die Wörter sammelt und erklärt.", why: "Das erste große italienische Wörterbuch ist das der Accademia della Crusca (1612). Heute sind Wörterbücher auch digital und werden jedes Jahr mit neuen Wörtern aktualisiert." }
      ],
      edges: [
        ["lessico", "significato", "wird untersucht durch"],
        ["lessico", "formazione", "wächst durch die"],
        ["significato", "sinonimi", ""],
        ["significato", "omonimi", ""],
        ["formazione", "radice", "geht vom Stamm aus:"],
        ["formazione", "affissi", "benutzt"],
        ["radice", "famiglia", "schafft eine"],
        ["affissi", "alterati", "schaffen"],
        ["lessico", "dizionario", "gesammelt im"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: veränderte Wörter und Vorsilben",
      questions: [
        { type: "mc", q: "«Ventaccio» ist ein Nomen in der Form …", options: ["Verkleinerung", "Vergrößerung", "Abwertung"], answer: 2, explain: "Die Nachsilbe -accio bezeichnet etwas Hässliches oder Schlechtes: abwertend." },
        { type: "mc", q: "Welches Wort ist zusammengesetzt?", options: ["portafoglio", "fogliolina", "sfogliare"], answer: 0, explain: "Porta + foglio: zwei verbundene Wörter (Brieftasche)." },
        { type: "mc", q: "Das Gegenteil von «possibile» wird gebildet mit der Vorsilbe …", options: ["dis-", "im-", "s-"], answer: 1, explain: "Im-possibile (vor p und b wird «in-» zu «im-»)." }
      ]
    }
  ],
  glossary: [
    { t: "Wortschatz (lessico)", d: "Gesamtheit der Wörter einer Sprache oder einer Person." },
    { t: "Synonyme", d: "Wörter mit gleicher oder ähnlicher Bedeutung." },
    { t: "Gegenteile (contrari, Antonyme)", d: "Wörter mit entgegengesetzter Bedeutung." },
    { t: "Homonyme (omonimi)", d: "Wörter, die gleich aussehen, aber verschiedene Bedeutungen haben." },
    { t: "Grundwort (parola primitiva)", d: "Wort, das nicht von anderen italienischen Wörtern abstammt (mare, fiore)." },
    { t: "Abgeleitetes Wort (parola derivata)", d: "Wort, das aus einem Grundwort mit Vorsilben oder Nachsilben gebildet wird (marinaio)." },
    { t: "Vorsilbe (prefisso)", d: "Element vor dem Stamm, das seine Bedeutung verändert (ri-, in-, pre-)." },
    { t: "Nachsilbe (suffisso)", d: "Element nach dem Stamm, um neue Wörter zu bilden (-aio, -tore, -ezza)." },
    { t: "Verändertes Nomen (nome alterato)", d: "Nomen, das mit einer Nachsilbe verändert wird: Verkleinerung, Vergrößerung, Koseform, Abwertung." },
    { t: "Zusammengesetztes Nomen (nome composto)", d: "Nomen aus zwei verbundenen Wörtern (arcobaleno)." },
    { t: "Lehnwort (prestito)", d: "Wort, das aus einer anderen Sprache übernommen wurde (computer, zucchero)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was ist ein Synonym von «iniziare»?", options: ["finire", "cominciare", "continuare"], answer: 1, explain: "Iniziare und cominciare haben dieselbe Bedeutung." },
      { type: "mc", q: "Was ist das Gegenteil von «coraggioso»?", options: ["pauroso", "forte", "audace"], answer: 0, explain: "Pauroso (ängstlich) ist das Gegenteil von coraggioso (mutig); audace (kühn) ist ein Synonym." },
      { type: "tf", q: "«Riso» (der Reis) und «riso» (das Lachen) sind Homonyme.", answer: true, explain: "Gleiche Form, verschiedene Bedeutungen." },
      { type: "mc", q: "Im Wort «giocatore» ist «-tore» …", options: ["eine Vorsilbe", "eine Nachsilbe", "der Stamm"], answer: 1, explain: "Es steht nach dem Stamm und bezeichnet den, der die Handlung ausführt." },
      { type: "mc", q: "Welches dieser Wörter ist ein Grundwort?", options: ["pane", "panettiere", "panino"], answer: 0, explain: "Pane (Brot) ist das Grundwort; panettiere (Bäcker) und panino (Brötchen) stammen von pane ab." },
      { type: "mc", q: "«Casetta» ist ein Nomen in der Form …", options: ["Vergrößerung", "Verkleinerung", "Zusammensetzung"], answer: 1, explain: "Die Nachsilbe -etta bezeichnet etwas Kleines." },
      { type: "text", q: "Wie heißt das Element, das man VOR den Stamm setzt (z. B. «ri-» in «rifare»)?", answer: ["Vorsilbe", "die Vorsilbe", "Präfix", "das Präfix", "prefisso", "il prefisso", "un prefisso"], explain: "Die Vorsilbe (prefisso)." },
      { type: "tf", q: "«Mattone» ist die Vergrößerungsform von «matto».", answer: false, explain: "Es ist eine falsche Veränderung: Mattone (Ziegelstein) hat eine ganz eigene Bedeutung." },
      { type: "mc", q: "Welches Wort gehört NICHT zur Familie von «terra»?", options: ["terreno", "atterrare", "terrazza", "termometro"], answer: 3, explain: "«Termometro» kommt vom griechischen «thermós» (warm), nicht von terra." },
      { type: "num", q: "Wie viele Wörter bilden nach Tullio De Mauro ungefähr den Grundwortschatz des Italienischen?", answer: 7000, tol: 500, explain: "Etwa 7.000 Wörter." },
      { type: "mc", q: "In welchem Jahr erschien das erste Vocabolario der Accademia della Crusca?", options: ["1312", "1612", "1912"], answer: 1, explain: "Im Jahr 1612, in Venedig." },
      { type: "order", q: "Ordne von der schwächsten zur stärksten Intensität.", items: ["tiepido", "caldo", "bollente"], explain: "Tiepido < caldo < bollente: Das ist eine Intensitätsskala." }
    ]
  }
});
