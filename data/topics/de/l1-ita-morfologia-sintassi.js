TOPIC('de', {
  id: "l1-ita-morfologia-sintassi",
  title: "Sprachbetrachtung: Morphologie und Syntax",
  intro: "Wir sprechen schon immer Italienisch, aber <b>wissen wir, wie es funktioniert</b>? Die Grammatik ist das Werkzeug, mit dem man die Sprache \"auseinandernimmt\", um ihre Mechanismen zu verstehen, so wie man eine Uhr öffnet. In dieser Lektion wiederholen und vertiefen wir die <b>Morphologie</b> (die Wortarten: welche Art von Wörtern haben wir) und die <b>Syntax</b> des einfachen Satzes (die <b>logische Analyse</b>, \"analisi logica\": welche Funktion hat jedes Wort oder jede Wortgruppe im Satz). Die Beispielsätze sind italienisch und werden ins Deutsche übersetzt.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Morphologie und Syntax: zwei Analyseebenen",
      html: `<p>Die Grammatik untersucht, wie die Sprache aufgebaut ist, und gliedert sich in mehrere Ebenen:</p>
<ul>
<li><b>Phonologie und Orthografie</b>: die Laute und wie man sie schreibt.</li>
<li><b>Morphologie</b>: die <b>Form der Wörter</b> und ihre Einteilung in <b>Wortarten</b> (\"parti del discorso\"). Sie untersucht, wie sich ein Wort verändert (Genus, Numerus, Person, Zeit ...).</li>
<li><b>Syntax</b>: wie sich Wörter zu <b>Sätzen</b> und <b>Satzgefügen</b> verbinden. Sie untersucht ihre Reihenfolge und ihre Beziehungen.</li>
<li><b>Lexikon und Semantik</b>: die Bedeutung der Wörter.</li>
</ul>
<p>Beispiel: Im Satz <i>\"Il gatto dorme sul divano\"</i> (\"Die Katze schläft auf dem Sofa\") sagt die Morphologie, dass <i>gatto</i> ein maskulines Substantiv im Singular ist und <i>dorme</i> ein Verb in der dritten Person Singular Präsens; die Syntax sagt, dass <i>il gatto</i> das Subjekt ist und <i>sul divano</i> den Ort angibt, an dem die Handlung stattfindet.</p>`
    },
    {
      type: "text",
      title: "2. Die neun Wortarten",
      html: `<p>Die italienischen Wörter gliedern sich in <b>neun Kategorien</b>. Fünf sind <b>veränderlich</b> (sie ändern ihre Form) und vier <b>unveränderlich</b>.</p>
<p><b>Veränderlich</b></p>
<ul>
<li><b>Nomen</b> (Substantiv, \"nome\"): bezeichnet Personen, Tiere, Dinge, Ideen. Gattungsname/Eigenname, konkret/abstrakt, Grundwort/abgeleitet/verändert (Verkleinerung usw.)/zusammengesetzt, Einzahl-/Sammelbegriff.</li>
<li><b>Artikel</b> (\"articolo\"): steht vor dem Nomen und zeigt Genus und Numerus an. <i>Bestimmt</i> (il, lo, la, i, gli, le), <i>unbestimmt</i> (un, uno, una), <i>Teilungsartikel</i> (del, dello, della ... \"etwas, einige\"; im Deutschen gibt es keine Entsprechung).</li>
<li><b>Adjektiv</b> (\"aggettivo\"): begleitet das Nomen, um es zu beschreiben (<i>qualificativo</i>, \"un libro interessante\", ein interessantes Buch) oder zu bestimmen (<i>Possessiv-, Demonstrativ-, Indefinit-, Zahl-, Frage-/Ausrufeadjektiv</i>).</li>
<li><b>Pronomen</b> (\"pronome\"): ersetzt ein Nomen (<i>Personal-, Possessiv-, Demonstrativ-, Indefinit-, Relativ-, Interrogativpronomen</i>). \"Marco è arrivato: <b>lo</b> ho visto.\" (Marco ist angekommen: Ich habe <b>ihn</b> gesehen.)</li>
<li><b>Verb</b> (\"verbo\"): drückt eine Handlung, einen Zustand oder eine Seinsweise aus. Es wird nach Person, Numerus, Zeit, Modus und Form (Aktiv, Passiv, reflexiv) konjugiert.</li>
</ul>
<p><b>Unveränderlich</b></p>
<ul>
<li><b>Adverb</b> (\"avverbio\"): bestimmt ein Verb, ein Adjektiv oder ein anderes Adverb näher (\"corre <b>velocemente</b>\", er läuft <b>schnell</b>; \"molto bello\", <b>sehr</b> schön).</li>
<li><b>Präposition</b> (\"preposizione\"): verbindet Wörter und zeigt die Art der Beziehung an (<i>di, a, da, in, con, su, per, tra, fra</i>). Verschmilzt sie mit dem Artikel, heißt sie <i>articolata</i> (del, nella, sul ...), ähnlich wie im Deutschen \"im\", \"zum\", \"vom\".</li>
<li><b>Konjunktion</b> (\"congiunzione\"): verbindet Wörter oder Sätze (<i>e, ma, perché, se, quando ...</i>).</li>
<li><b>Interjektion</b> (\"interiezione\"): drückt ein plötzliches Gefühl aus (<i>ah!, uffa!, evviva!</i>).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Veränderlich oder unveränderlich?",
      widget: "classify",
      options: { groups: ["Veränderlich", "Unveränderlich"], items: [["gatto (Nomen)", 0], ["veloce (Adjektiv)", 0], ["rapidamente (Adverb)", 1], ["con (Präposition)", 1], ["mangiare (Verb)", 0], ["ma (Konjunktion)", 1], ["la (Artikel)", 0], ["evviva! (Interjektion)", 1]] },
      caption: "Ordne die Wörter danach ein, ob sie ihre Form ändern oder nicht."
    },
    {
      type: "example",
      title: "Grammatische Analyse eines Satzes",
      html: `<p><i>\"Domani i miei amici arriveranno con un treno velocissimo.\"</i> (\"Morgen kommen meine Freunde mit einem sehr schnellen Zug an.\")</p>
<ul>
<li><b>Domani</b>: Adverb (der Zeit).</li>
<li><b>i</b>: bestimmter Artikel, maskulin Plural.</li>
<li><b>miei</b>: Possessivadjektiv, maskulin Plural.</li>
<li><b>amici</b>: Gattungsname (Nomen), konkret, maskulin Plural.</li>
<li><b>arriveranno</b>: intransitives Verb, Indikativ Futur I, 3. Person Plural.</li>
<li><b>con</b>: einfache Präposition.</li>
<li><b>un</b>: unbestimmter Artikel, maskulin Singular.</li>
<li><b>treno</b>: Gattungsname (Nomen), konkret, maskulin Singular.</li>
<li><b>velocissimo</b>: Qualitätsadjektiv, absoluter Superlativ, maskulin Singular.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Wortarten",
      questions: [
        { type: "mc", q: "Im Satz 'Parla troppo piano' (Er/Sie spricht zu leise) ist das Wort 'piano' ...", options: ["ein Nomen", "ein Adverb", "ein Adjektiv"], answer: 1, explain: "Es bestimmt das Verb 'parla' näher: Es ist ein Adverb (der Art und Weise)." },
        { type: "mc", q: "Welches Wort ist eine Präposition mit verschmolzenem Artikel (preposizione articolata)?", options: ["della", "dalla vita", "perché", "quello"], answer: 0, explain: "'della' = di + la. Die anderen sind eine Wortgruppe, eine Konjunktion und ein Pronomen/Adjektiv." },
        { type: "tf", q: "Die Konjunktion ist eine veränderliche Wortart.", answer: false, explain: "Konjunktionen, Adverbien, Präpositionen und Interjektionen sind unveränderlich." }
      ]
    },
    {
      type: "text",
      title: "3. Der einfache Satz und die logische Analyse",
      html: `<p>Der <b>Satz</b> (\"frase\") ist eine Wortgruppe mit abgeschlossenem Sinn. Enthält er nur ein Verb (nur ein Prädikat), heißt er <b>einfacher Satz</b> oder <b>Proposition</b> (\"proposizione\"); enthält er mehrere, spricht man von einem <b>Satzgefüge</b> (\"periodo\", Analyse des Satzgefüges).</p>
<p>Die <b>logische Analyse</b> (\"analisi logica\") zerlegt den einfachen Satz in seine <b>Bestandteile</b>, die jeweils eine bestimmte Funktion haben. Den Kern bilden:</p>
<ul>
<li><b>Subjekt</b> (\"soggetto\"): wer die Handlung ausführt oder über wen etwas gesagt wird. Man findet es mit der Frage <i>\"Wer ist es, der ...?\"</i>. Es kann unausgesprochen sein (\"Mangiamo\" = wir).</li>
<li><b>Prädikat</b> (\"predicato\"): das, was über das Subjekt gesagt wird. Es kann sein:
  <ul>
  <li><b>verbal</b>: ein Verb mit vollständiger Bedeutung (\"Il cane <b>corre</b>\", Der Hund <b>läuft</b>);</li>
  <li><b>nominal</b>: Kopula (das Verb \"essere\", sein, oder ein ähnliches) + <b>Prädikatsnomen</b> (Nomen oder Adjektiv) (\"Il cane <b>è</b> <b>fedele</b>\", Der Hund <b>ist</b> <b>treu</b>).</li>
  </ul></li>
</ul>
<p>Um den Kern herum stehen die <b>Erweiterungen</b>: <b>Attribut</b>, <b>Apposition</b> und die <b>Ergänzungen</b> (\"complementi\").</p>`
    },
    {
      type: "svg",
      title: "Anatomie eines einfachen Satzes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="35" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Ieri Marco ha mangiato una mela con la nonna</text>
<rect x="20" y="60" width="70" height="40" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="55" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Ieri</text>
<rect x="105" y="60" width="90" height="40" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="150" y="86" font-size="16" text-anchor="middle" fill="#0f172a">Marco</text>
<rect x="210" y="60" width="140" height="40" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="280" y="86" font-size="16" text-anchor="middle" fill="#0f172a">ha mangiato</text>
<rect x="365" y="60" width="90" height="40" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="410" y="86" font-size="16" text-anchor="middle" fill="#0f172a">una mela</text>
<rect x="470" y="60" width="110" height="40" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="525" y="86" font-size="16" text-anchor="middle" fill="#0f172a">con la nonna</text>
<text x="55" y="140" font-size="14" text-anchor="middle" fill="#92400e" font-weight="bold">Zeitangabe</text>
<text x="150" y="140" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Subjekt</text>
<text x="280" y="140" font-size="14" text-anchor="middle" fill="#166534" font-weight="bold">Verbalprädikat</text>
<text x="410" y="140" font-size="14" text-anchor="middle" fill="#991b1b" font-weight="bold">Objekt</text>
<text x="525" y="140" font-size="14" text-anchor="middle" fill="#6b21a8" font-weight="bold">Begleitung</text>
<text x="300" y="210" font-size="16" text-anchor="middle" fill="#0f172a">Leitfragen:</text>
<text x="300" y="235" font-size="14" text-anchor="middle" fill="#0f172a">Wer? (Subjekt) · Was tut er? (Prädikat) · Wen/Was? (Objekt)</text>
<text x="300" y="258" font-size="14" text-anchor="middle" fill="#0f172a">Wann? Wo? Mit wem? Wie? Warum? (indirekte Ergänzungen)</text>
</svg>`,
      caption: "Jeder Satzteil beantwortet eine Frage: Such zuerst das Prädikat, dann das Subjekt. (Gestern hat Marco mit der Oma einen Apfel gegessen.)"
    },
    {
      type: "text",
      title: "4. Attribut, Apposition und Ergänzungen",
      html: `<p><b>Attribut</b> (\"attributo\"): ein Adjektiv, das ein Nomen begleitet (\"una <b>bella</b> giornata\", ein <b>schöner</b> Tag). <b>Apposition</b> (\"apposizione\"): ein Nomen, das neben einem anderen steht, um es näher zu bestimmen (\"Dante, <b>poeta</b>\", Dante, <b>Dichter</b>; \"il fiume <b>Po</b>\", der Fluss <b>Po</b>).</p>
<p>Die <b>Ergänzungen</b> (\"complementi\") vervollständigen die Bedeutung des Prädikats. Das <b>Objekt</b> (\"complemento oggetto\", direkte Ergänzung) antwortet auf <i>\"wen? was?\"</i> und hat keine Präposition: \"Leggo <b>un libro</b>\" (Ich lese <b>ein Buch</b>). Die anderen sind <b>indirekte Ergänzungen</b>, die durch eine Präposition eingeleitet werden:</p>
<table>
<tr><th>Ergänzung</th><th>Antwortet auf</th><th>Beispiel</th></tr>
<tr><td>Specificazione (Genitiv-/Zugehörigkeitsergänzung)</td><td>wessen? wovon?</td><td>La casa <b>di Luca</b> (Lucas Haus)</td></tr>
<tr><td>Termine (Dativergänzung)</td><td>wem? zu wem/was?</td><td>Scrivo <b>a Marta</b> (Ich schreibe <b>an Marta</b>)</td></tr>
<tr><td>Luogo (Ort)</td><td>wo? woher? wodurch?</td><td>Vivo <b>a Torino</b> (Ich wohne <b>in Turin</b>)</td></tr>
<tr><td>Tempo (Zeit)</td><td>wann? wie lange?</td><td>Parto <b>domani</b> (Ich reise <b>morgen</b> ab); studio <b>per due ore</b> (ich lerne <b>zwei Stunden lang</b>)</td></tr>
<tr><td>Mezzo (Mittel)</td><td>womit? auf welche Weise?</td><td>Viaggio <b>in treno</b> (Ich reise <b>mit dem Zug</b>)</td></tr>
<tr><td>Modo (Art und Weise)</td><td>wie?</td><td>Parla <b>con calma</b> (Er spricht <b>ruhig</b>)</td></tr>
<tr><td>Causa (Grund)</td><td>aus welchem Grund?</td><td>Tremo <b>per il freddo</b> (Ich zittere <b>vor Kälte</b>)</td></tr>
<tr><td>Fine (Zweck)</td><td>zu welchem Zweck?</td><td>Studio <b>per la promozione</b> (Ich lerne <b>für die Versetzung</b>)</td></tr>
<tr><td>Compagnia / unione (Begleitung / Verbindung)</td><td>mit wem? mit was?</td><td>Esco <b>con gli amici</b> (Ich gehe <b>mit Freunden</b> aus)</td></tr>
<tr><td>Agente / causa efficiente (Urheber)</td><td>von wem? (beim Passiv)</td><td>Il quadro fu dipinto <b>da Giotto</b> (Das Bild wurde <b>von Giotto</b> gemalt)</td></tr>
<tr><td>Argomento (Thema)</td><td>worüber?</td><td>Un libro <b>sulla storia romana</b> (Ein Buch <b>über die römische Geschichte</b>)</td></tr>
<tr><td>Materia (Material)</td><td>aus welchem Material?</td><td>Un anello <b>d'oro</b> (Ein Ring <b>aus Gold</b>)</td></tr>
<tr><td>Qualità (Eigenschaft)</td><td>mit welcher Eigenschaft?</td><td>Una ragazza <b>dai capelli rossi</b> (Ein Mädchen <b>mit roten Haaren</b>)</td></tr>
</table>
<p>Dasselbe Nomen kann verschiedene Funktionen haben: Es hängt vom <b>Verb</b> und von der <b>Präposition</b> ab. In \"Il vaso <b>di vetro</b>\" (die Vase <b>aus Glas</b>) ist es Material; in \"il vaso <b>di Marta</b>\" (Martas Vase) ist es Specificazione.</p>`
    },
    {
      type: "remember",
      title: "Die Methode der logischen Analyse",
      html: `<ol><li>Such das <b>Prädikat</b> (das Verb, gegebenenfalls mit Kopula).</li><li>Finde das <b>Subjekt</b> (wer führt die Handlung aus?). Im Passiv <i>erleidet</i> das Subjekt die Handlung.</li><li>Such das <b>Objekt</b> (ohne Präposition).</li><li>Bei den indirekten Ergänzungen schau auf die <b>Präposition</b> und stell die <b>richtige Frage</b>.</li><li>Denk daran: Dieselbe <b>Präposition</b> kann verschiedene Ergänzungen einleiten (<i>con</i>: Begleitung, Mittel, Art und Weise ...). Es zählt der Sinn.</li></ol>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, den Satz zu verstehen",
      intro: "Wenn dir die logische Analyse wie eine Liste zum Auswendiglernen vorkommt, probiere diese Blickwinkel.",
      tabs: [
        { label: "🎬 Der Film des Satzes", html: "<p>Stell dir den Satz als <b>Filmszene</b> vor: Das <b>Prädikat</b> ist die Handlung, das <b>Subjekt</b> der Schauspieler, das <b>Objekt</b> das, was die Handlung direkt trifft, und die <b>indirekten Ergänzungen</b> sind der Hintergrund: wo, wann, mit wem, warum, wie. Frag dich: \"Wer tut was? Und wo, wann, wie?\"</p>" },
        { label: "🌳 Der Satzbaum", html: "<p>Einige sprachwissenschaftliche Schulen stellen den Satz als <b>Baum</b> dar: Das Prädikat ist der Stamm, von dem die Äste ausgehen (Subjekt, Objekt, Ergänzungen), die ihrerseits Zweige haben (Attribute, Appositionen). Die \"Valenzgrammatik\" von <b>Lucien Tesnière</b> (1893-1954) denkt so: Das Verb steht im Zentrum und verlangt eine bestimmte Zahl von \"Plätzen\" (<i>Valenzen</i>), die besetzt werden müssen. Das Verb <i>dare</i> (geben) verlangt drei: wer gibt, was, wem.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><circle cx="300" cy="50" r="38" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="56" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">dà</text><line x1="270" y1="78" x2="120" y2="170" stroke="#334155" stroke-width="2"/><line x1="300" y1="88" x2="300" y2="170" stroke="#334155" stroke-width="2"/><line x1="330" y1="78" x2="480" y2="170" stroke="#334155" stroke-width="2"/><rect x="60" y="170" width="120" height="44" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="120" y="197" font-size="16" text-anchor="middle" fill="#0f172a">Anna (wer)</text><rect x="240" y="170" width="120" height="44" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="300" y="197" font-size="16" text-anchor="middle" fill="#0f172a">un libro (was)</text><rect x="420" y="170" width="140" height="44" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/><text x="490" y="197" font-size="16" text-anchor="middle" fill="#0f172a">a Luca (wem)</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Das Verb \"dare\" hat drei Valenzen: Subjekt, Objekt, Dativergänzung</text></svg>` },
        { label: "🧩 Der Ersetzungstest", html: "<p>Um die <b>Wortart</b> eines Wortes zu erkennen, ersetze es durch ein Wort, bei dem du sicher bist. Kannst du <i>\"molto\"</i> (sehr) davor setzen (\"molto <b>bene</b>\", sehr gut), ist es ein Adverb; kannst du <i>\"il/la\"</i> (der/die/das) davor setzen, ist es ein Nomen (\"il <b>bene</b>\", das Gute). Dasselbe Wort <i>bene</i> wechselt je nach Satz die Kategorie. In der Grammatik zählt die <b>Funktion</b>, nicht nur das Wort.</p>" }
      ]
    },
    {
      type: "text",
      title: "5. Sonderfälle: Passiv, Reflexiv, Nominalprädikat",
      html: `<p>Einige Verben verändern den Satzbau.</p>
<ul>
<li><b>Passivform</b>: Das Subjekt <i>erleidet</i> die Handlung; wer sie ausführt, wird zur <b>Urheberergänzung</b> (\"complemento d'agente\"): \"Il ladro <b>fu arrestato dai carabinieri</b>\" (Der Dieb <b>wurde von den Carabinieri festgenommen</b>). Aktivsatz: \"I carabinieri arrestarono il ladro\" (carabinieri = Subjekt; ladro = Objekt).</li>
<li><b>Reflexivform</b>: Subjekt und Objekt sind identisch (\"Luca <b>si lava</b>\", Luca wäscht sich): <i>si</i> ist ein Pronomen in der Funktion des Objekts.</li>
<li><b>Nominalprädikat</b>: \"La Terra <b>è</b> <b>rotonda</b>\" (Die Erde ist rund); \"Roma è la capitale\" (Rom ist die Hauptstadt). Das Verb essere ist hier Kopula und hat keine eigene Bedeutung; andere kopulative Verben: <i>sembrare, diventare, parere, restare</i> (scheinen, werden, scheinen, bleiben).</li>
<li><b>Ausgelassenes Subjekt</b>: Im Italienischen lässt man die Personalpronomen als Subjekt oft weg, weil die Verbendung die Person anzeigt (\"Vado\" = io vado, ich gehe).</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Ist die logische Analyse eine italienische Erfindung?",
      html: `<p>Zum großen Teil ja: Die <b>analisi logica</b> als Schulübung, mit diesem Namen und dieser Liste von Ergänzungen, ist typisch für die italienische Schule. In anderen Ländern macht man <i>sentence parsing</i> oder Konstituentenanalyse. Der Name \"logica\" erinnert an die Idee, im Satz die gedanklichen Beziehungen zwischen den Wörtern zu erkennen. Heute beschreiben moderne Sprachwissenschaftler wie <b>Noam Chomsky</b> (geboren 1928) die Syntax mit \"Baum\"-Modellen, die dem der vorherigen Karte ähneln.</p>`
    },
    {
      type: "curiosity",
      title: "Wörter, die den Beruf wechseln",
      html: `<p>Viele Wörter wechseln von einer Kategorie in eine andere. <i>\"Il bello della vita\"</i> (Das Schöne am Leben): <i>bello</i>, ein Adjektiv, wird zum Nomen. <i>\"Cammina piano\"</i> (Geh langsam) und <i>\"un piano di studi\"</i> (ein Studienplan): Adverb und Nomen. Deshalb sagt man, dass die <b>grammatische Kategorie</b> sich <b>im Gebrauch</b> entscheidet, nicht im Wörterbuch.</p>`
    },
    {
      type: "conceptMap",
      title: "Mindmap: Grammatik und einfacher Satz",
      nodes: [
        { id: "gram", label: "Grammatik", x: 50, y: 8, color: "#3b82f6", html: "Die Lehre von den Regeln, nach denen eine Sprache funktioniert.", why: "Seit den Griechen und Römern (Dionysios Thrax, Priscian) beschreibt die Grammatik die Wörter und ihre Beziehungen. Von den antiken Grammatiken stammen die Namen der Wortarten." },
        { id: "morf", label: "Morphologie", x: 20, y: 40, color: "#10b981", html: "Untersucht die Form und die Einteilung der Wörter: neun Wortarten.", why: "Die Kategorien ergeben sich aus dem Verhalten der Wörter: Manche ändern sich (veränderlich), andere nicht. Die Einteilung hilft vorherzusagen, wie sie gebraucht werden." },
        { id: "sint", label: "Syntax", x: 80, y: 40, color: "#f59e0b", html: "Untersucht, wie Wörter Sätze und Satzgefüge bilden.", why: "Ein Satz ist keine Summe von Wörtern: Die Reihenfolge und die Verbindungen (Kongruenz, Präpositionen) erzeugen die Bedeutung. \"Il cane morde l'uomo\" (Der Hund beißt den Mann) und \"L'uomo morde il cane\" (Der Mann beißt den Hund) haben dieselben Wörter und entgegengesetzten Sinn." },
        { id: "log", label: "Logische Analyse", x: 80, y: 72, color: "#8b5cf6", html: "Subjekt, Prädikat, Attribut, Apposition, Objekt und indirekte Ergänzungen.", why: "Sie hilft zu verstehen, wer was unter welchen Umständen tut. Sie hilft, klare Sätze zu schreiben und Mehrdeutigkeiten zu vermeiden." },
        { id: "parti", label: "Wortarten", x: 20, y: 72, color: "#ef4444", html: "Fünf veränderliche (Nomen, Artikel, Adjektiv, Pronomen, Verb), vier unveränderliche (Adverb, Präposition, Konjunktion, Interjektion).", why: "Die Einteilung in veränderlich und unveränderlich hängt von der Möglichkeit der Flexion ab, die im Italienischen (einer vom Lateinischen abstammenden Sprache) beim Verb und in der Nominalgruppe reich ausgeprägt ist." }
      ],
      edges: [["gram", "morf", "umfasst"], ["gram", "sint", "umfasst"], ["sint", "log", "einfacher Satz"], ["morf", "parti", "gliedert in"]]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: logische Analyse",
      questions: [
        { type: "mc", q: "'La torta è squisita' (Der Kuchen ist köstlich): 'è squisita' ist ...", options: ["Verbalprädikat", "Nominalprädikat", "Attribut"], answer: 1, explain: "Es ist Kopula + Adjektiv (Prädikatsnomen)." },
        { type: "mc", q: "In 'Sono partito per Roma' (Ich bin nach Rom abgereist) ist 'per Roma' eine Ergänzung des ...", options: ["Zwecks", "Ortes", "Grundes"], answer: 1, explain: "Es gibt das Ziel der Reise an: Ortsergänzung (Richtung)." },
        { type: "tf", q: "Im Satz 'Il libro fu scritto da Manzoni' (Das Buch wurde von Manzoni geschrieben) ist 'Manzoni' das Subjekt.", answer: false, explain: "Es ist die Urheberergänzung: Das Subjekt ist 'il libro'." }
      ]
    }
  ],
  glossary: [
    { t: "Morphologie", d: "Lehre von der Form der Wörter und von den Wortarten." },
    { t: "Syntax", d: "Lehre von den Beziehungen zwischen den Wörtern im Satz und im Satzgefüge." },
    { t: "Verbalprädikat", d: "Prädikat, das aus einem Verb mit vollständiger Bedeutung besteht." },
    { t: "Nominalprädikat", d: "Kopula (das Verb sein oder ein ähnliches) plus Prädikatsnomen." },
    { t: "Objekt (complemento oggetto)", d: "Direkte Ergänzung ohne Präposition, die angibt, auf wen oder was sich die Handlung richtet." },
    { t: "Indirekte Ergänzung", d: "Ergänzung, die durch eine Präposition eingeleitet wird." },
    { t: "Apposition", d: "Nomen, das neben einem anderen Nomen steht, um es näher zu bestimmen." },
    { t: "Attribut", d: "Adjektiv, das sich unmittelbar auf ein Nomen bezieht." },
    { t: "Kopula", d: "Das Verb sein (oder ein ähnliches), das Subjekt und Prädikatsnomen verbindet." },
    { t: "Urheberergänzung (complemento d'agente)", d: "Gibt in einem Passivsatz an, von wem die Handlung ausgeführt wird." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie viele Wortarten gibt es im Italienischen?", options: ["sieben", "acht", "neun", "zehn"], answer: 2, explain: "Nomen, Artikel, Adjektiv, Pronomen, Verb, Adverb, Präposition, Konjunktion, Interjektion." },
      { type: "mc", q: "Welche Wortart ist unveränderlich?", options: ["Pronomen", "Konjunktion", "Adjektiv", "Verb"], answer: 1, explain: "Unveränderlich sind Adverb, Präposition, Konjunktion und Interjektion." },
      { type: "text", q: "Wie nennt man das Verb 'essere' (sein), wenn es das Subjekt mit dem Prädikatsnomen verbindet?", answer: ["Kopula", "die Kopula", "copula", "la copula"], explain: "In 'Anna è stanca' (Anna ist müde) ist 'è' die Kopula." },
      { type: "mc", q: "In 'Parlo con calma' (Ich spreche ruhig) ist 'con calma' eine Ergänzung der ...", options: ["Begleitung", "Mittel", "Art und Weise", "Ursache"], answer: 2, explain: "Es antwortet auf 'wie?': Art und Weise (modo)." },
      { type: "tf", q: "Im Satz 'Mi piace il mare' (Das Meer gefällt mir) ist 'il mare' das Subjekt.", answer: true, explain: "Was gefällt? Das Meer: Subjekt; 'mi' ist die Dativergänzung (termine)." },
      { type: "mc", q: "'La casa di Luca' (Lucas Haus) enthält eine Ergänzung des ...", options: ["Besitzes/der Zugehörigkeit (specificazione)", "Dativs (termine)", "Ortes", "Urhebers"], answer: 0, explain: "Es antwortet auf 'wessen?': specificazione." },
      { type: "mc", q: "In 'Dante, poeta fiorentino, scrisse la Commedia' (Dante, ein florentinischer Dichter, schrieb die Komödie) ist 'poeta' ...", options: ["Attribut", "Apposition", "Nominalprädikat", "Objekt"], answer: 1, explain: "Es ist ein Nomen, das neben 'Dante' steht, um ihn näher zu bestimmen: Apposition." },
      { type: "order", q: "Bring die Schritte der logischen Analyse in die empfohlene Reihenfolge.", items: ["Das Prädikat finden", "Das Subjekt finden", "Das Objekt finden", "Die indirekten Ergänzungen analysieren"], explain: "Man beginnt beim Verb, dann beim Subjekt, dann bei den Elementen, die das Verb regiert, zuletzt bei den indirekten Ergänzungen." },
      { type: "mc", q: "In 'Il compito fu corretto dal professore' (Die Aufgabe wurde vom Lehrer korrigiert) ist 'dal professore' ...", options: ["Ergänzung des Grundes", "Urheberergänzung (complemento d'agente)", "Subjekt", "Ortsergänzung"], answer: 1, explain: "Es gibt an, wer in einem Passivsatz die Handlung ausführt." }
    ]
  }
});
