TOPIC('de', {
  id: "m2-ita-analisi-logica",
  title: "Die logische Analyse (analisi logica)",
  intro: "Mit der <b>grammatischen Analyse</b> hast du gelernt, was jedes Wort <i>ist</i> (Nomen, Verb, Adjektiv …). Mit der <b>logischen Analyse</b> (<i>analisi logica</i>) entdeckst du, welche <b>Funktion</b> jede Wortgruppe im Satz hat: Wer führt die Handlung aus, was geschieht, mit wem, wo, wann, warum. Es ist, als würdest du eine Maschine zerlegen, um zu verstehen, wozu jedes Teil dient. (Die Beispielsätze bleiben italienisch, denn es geht um die italienische Sprache; die Erklärungen sind auf Deutsch.)",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Was ist die logische Analyse?",
      html: `<p>Der <b>einfache Satz</b> (<i>frase semplice</i> oder <i>proposizione</i>) ist eine Wortgruppe mit nur einem <b>Prädikat</b>, also nur einem finiten Verb: <i>Il treno parte alle otto.</i> (Der Zug fährt um acht Uhr ab.)</p>
<p>Die logische Analyse zu machen bedeutet, den Satz in <b>Satzglieder</b> (<i>sintagmi</i>, miteinander verbundene Wortgruppen) zu gliedern und die <b>logische Funktion</b> jedes Glieds zu erkennen:</p>
<ul>
<li>das <b>Prädikat</b> (<i>predicato</i>): was ausgesagt wird (die Handlung, der Zustand);</li>
<li>das <b>Subjekt</b> (<i>soggetto</i>): von wem oder wovon die Rede ist;</li>
<li>die <b>Ergänzungen</b> (<i>complementi</i>): alle zusätzlichen Informationen, die den Sinn „vervollständigen“ (Objekt, Ort, Zeit, Grund, Mittel …);</li>
<li>das <b>Attribut</b> (<i>attributo</i>) und die <b>Apposition</b> (<i>apposizione</i>): sie fügen einem Nomen Informationen hinzu.</li>
</ul>
<p><b>Methode in 4 Schritten</b> (immer in dieser Reihenfolge!):</p>
<ol>
<li>Finde das <b>Prädikat</b> (das konjugierte Verb);</li>
<li>frage das Prädikat <b>«chi? / che cosa?» (wer? / was?)</b>, um das <b>Subjekt</b> zu finden;</li>
<li>frage nach dem Verb <b>«chi? / che cosa?» (wen? / was?)</b>, um das <b>Akkusativobjekt</b> (<i>complemento oggetto</i>) zu finden;</li>
<li>stelle für jede andere Gruppe die <b>richtige Frage</b> (wo? wann? mit wem? warum? …) und gib der Ergänzung einen Namen.</li>
</ol>`
    },
    {
      type: "text",
      title: "Das Prädikat: verbal und nominal",
      html: `<p>Das <b>Prädikat</b> ist der Kern des Satzes. Es gibt zwei Arten:</p>
<ul>
<li><b>Verbales Prädikat</b> (<i>predicato verbale</i>): ein Verb, das allein eine vollständige Bedeutung hat. <i>Luca <b>corre</b>. I ragazzi <b>hanno mangiato</b> la pizza.</i> (Luca rennt. Die Jungen haben die Pizza gegessen.) Auch das Verb <i>essere</i> (sein) kann verbales Prädikat sein, wenn es „sich befinden, existieren, gehören“ bedeutet: <i>Il gatto <b>è</b> in giardino.</i> (Die Katze ist im Garten.)</li>
<li><b>Nominales Prädikat</b> (<i>predicato nominale</i>): das Verb <b>essere</b> (sein; <b>Kopula</b> genannt, also „Verbindung“) + ein <b>Nomen</b> oder ein <b>Adjektiv</b> (<b>Prädikatsnomen</b>, <i>parte nominale</i>). <i>Marta <b>è brava</b>. Mio padre <b>è medico</b>.</i> (Marta ist gut. Mein Vater ist Arzt.)</li>
</ul>
<p>Bei Verben wie <i>sembrare, diventare, restare, essere eletto, essere chiamato</i> (scheinen, werden, bleiben, gewählt werden, genannt werden) hat man ein <b>verbales Prädikat + Prädikativ zum Subjekt</b> (<i>complemento predicativo del soggetto</i>): <i>Anna <b>è diventata</b> <u>capitano</u>.</i> (Anna ist Kapitänin geworden.)</p>`
    },
    {
      type: "text",
      title: "Subjekt, Attribut und Apposition",
      html: `<p>Das <b>Subjekt</b> ist das Element, von dem die Rede ist; man findet es, indem man das Verb nach <b>«chi?»</b> oder <b>«che cosa?»</b> (wer? oder was?) fragt. Es kann ein Nomen, ein Pronomen oder ein Verb im Infinitiv sein (<i><b>Leggere</b> fa bene</i>: Lesen tut gut).</p>
<ul>
<li><b>Nicht ausgedrückt</b> (<i>sottinteso</i>): Es steht nicht da, aber man erkennt es an der Endung: <i>(Noi) Andiamo al mare.</i> (Wir fahren ans Meer.)</li>
<li><b>Nachgestellt</b> (<i>posposto</i>): Es steht nach dem Verb: <i>È arrivata <b>la primavera</b>.</i> (Der Frühling ist gekommen.)</li>
<li>Vor dem Subjekt steht <b>nie</b> eine Präposition!</li>
</ul>
<p>Das <b>Attribut</b> (<i>attributo</i>) ist ein <b>Adjektiv</b>, das sich auf ein beliebiges Nomen im Satz bezieht: <i>Il cane <b>nero</b> abbaia.</i> (Der schwarze Hund bellt.)</p>
<p>Die <b>Apposition</b> (<i>apposizione</i>) ist ein <b>Nomen</b>, das ein anderes Nomen begleitet, um es näher zu bestimmen: <i>Il <b>poeta</b> Dante nacque a Firenze. La <b>città</b> di Roma.</i> (Der Dichter Dante wurde in Florenz geboren. Die Stadt Rom.)</p>`
    },
    {
      type: "svg",
      title: "Der Satz wie ein Sonnensystem",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#0f172a"/>
<circle cx="300" cy="170" r="125" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="6 6"/>
<circle cx="300" cy="170" r="70" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="6 6"/>
<circle cx="300" cy="170" r="44" fill="#facc15"/>
<text x="300" y="166" font-size="16" font-weight="bold" text-anchor="middle" fill="#1f2937">PRÄDIKAT</text>
<text x="300" y="186" font-size="15" text-anchor="middle" fill="#1f2937">regala</text>
<circle cx="230" cy="150" r="30" fill="#ef4444"/>
<text x="230" y="146" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">SUBJ.</text>
<text x="230" y="163" font-size="13" text-anchor="middle" fill="#fff">Sara</text>
<circle cx="370" cy="150" r="30" fill="#3b82f6"/>
<text x="370" y="146" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">OBJ.</text>
<text x="370" y="163" font-size="13" text-anchor="middle" fill="#fff">un libro</text>
<circle cx="170" cy="70" r="30" fill="#22c55e"/>
<text x="170" y="66" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">DATIV</text>
<text x="170" y="83" font-size="12" text-anchor="middle" fill="#fff">a Luca</text>
<circle cx="440" cy="80" r="30" fill="#a855f7"/>
<text x="440" y="76" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">ZEIT</text>
<text x="440" y="93" font-size="12" text-anchor="middle" fill="#fff">oggi</text>
<circle cx="300" cy="295" r="30" fill="#f97316"/>
<text x="300" y="291" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">GRUND</text>
<text x="300" y="306" font-size="11" text-anchor="middle" fill="#fff">per affetto</text>
<text x="20" y="30" font-size="16" fill="#e2e8f0" font-weight="bold">Oggi Sara regala un libro a Luca per affetto.</text>
<text x="20" y="325" font-size="14" fill="#94a3b8">Nahe an der Sonne: das Wesentliche. Auf der Umlaufbahn: die Ergänzungen.</text>
</svg>`,
      caption: "Das Prädikat ist die „Sonne“ des Satzes: Subjekt und Objekt stehen ihm nahe, die anderen Ergänzungen kreisen herum. (Heute schenkt Sara Luca aus Zuneigung ein Buch.)"
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Prädikat und Subjekt",
      questions: [
        { type: "mc", q: "In «Il mare è calmo» (Das Meer ist ruhig) ist das Prädikat …", options: ["verbal: è", "nominal: è calmo", "verbal: è calmo"], answer: 1, explain: "Essere + Adjektiv (calmo) = nominales Prädikat. «È» ist die Kopula, «calmo» das Prädikatsnomen." },
        { type: "mc", q: "In «Domani partiremo presto» (Morgen fahren wir früh ab) ist das Subjekt …", options: ["domani", "nicht ausgedrückt (noi, wir)", "presto"], answer: 1, explain: "Die Endung -emo zeigt die 1. Person Plural an: Das Subjekt «noi» ist nicht ausgedrückt." },
        { type: "tf", q: "In «Il libro è sul tavolo» (Das Buch liegt auf dem Tisch) bildet das Verb essere ein nominales Prädikat.", answer: false, explain: "Hier bedeutet «è» «befindet sich»: Es ist ein verbales Prädikat, und «sul tavolo» ist eine Ergänzung des Ortes (stato in luogo)." }
      ]
    },
    {
      type: "text",
      title: "Die wichtigsten Ergänzungen (complementi)",
      html: `<table>
<tr><th>Ergänzung (italienischer Name)</th><th>Frage</th><th>Beispiel</th></tr>
<tr><td><b>Akkusativobjekt</b> (<i>oggetto</i>, direkt)</td><td>chi? che cosa? (wen? was? ohne Präposition)</td><td>Leggo <b>un fumetto</b>. (Ich lese einen Comic.)</td></tr>
<tr><td><b>Zugehörigkeit / nähere Bestimmung</b> (<i>specificazione</i>)</td><td>di chi? di che cosa? (wessen? wovon?)</td><td>Lo zaino <b>di Marco</b>. (Marcos Rucksack.)</td></tr>
<tr><td><b>Dativ / Empfänger</b> (<i>termine</i>)</td><td>a chi? a che cosa? (wem?)</td><td>Scrivo <b>alla nonna</b>. (Ich schreibe der Oma.)</td></tr>
<tr><td><b>Urheber / bewirkende Ursache</b> (<i>agente / causa efficiente</i>)</td><td>da chi? da che cosa? (von wem? Passivsatz)</td><td>Il gol fu segnato <b>da Ale</b>. / Il tetto fu rotto <b>dalla grandine</b>. (Das Tor wurde von Ale geschossen. / Das Dach wurde vom Hagel zerstört.)</td></tr>
<tr><td><b>Ort (Ruhe)</b> (<i>stato in luogo</i>)</td><td>dove? (wo?)</td><td>Abito <b>a Torino</b>. (Ich wohne in Turin.)</td></tr>
<tr><td><b>Richtung / Ziel</b> (<i>moto a luogo</i>)</td><td>verso dove? (wohin?)</td><td>Vado <b>in palestra</b>. (Ich gehe in die Turnhalle.)</td></tr>
<tr><td><b>Herkunft</b> (<i>moto da luogo</i>)</td><td>da dove? (woher?)</td><td>Torno <b>da scuola</b>. (Ich komme aus der Schule zurück.)</td></tr>
<tr><td><b>Weg / Durchgang</b> (<i>moto per luogo</i>)</td><td>attraverso dove? (wodurch?)</td><td>Passo <b>per il parco</b>. (Ich gehe durch den Park.)</td></tr>
<tr><td><b>Bestimmte Zeit</b> (<i>tempo determinato</i>)</td><td>quando? (wann?)</td><td>Arrivo <b>alle cinque</b>. (Ich komme um fünf an.)</td></tr>
<tr><td><b>Zeitdauer</b> (<i>tempo continuato</i>)</td><td>per quanto tempo? (wie lange?)</td><td>Ho studiato <b>per due ore</b>. (Ich habe zwei Stunden gelernt.)</td></tr>
<tr><td><b>Mittel</b> (<i>mezzo</i>)</td><td>con che cosa? (womit?)</td><td>Scrivo <b>con la penna</b>. (Ich schreibe mit dem Stift.)</td></tr>
<tr><td><b>Art und Weise</b> (<i>modo</i>)</td><td>come? in che modo? (wie?)</td><td>Parla <b>con calma</b>. (Er spricht ruhig.)</td></tr>
<tr><td><b>Begleitung / Verbindung</b> (<i>compagnia / unione</i>)</td><td>con chi? / con che cosa? (mit wem? / mit was?)</td><td>Esco <b>con Giulia</b>. / Il caffè <b>con il latte</b>. (Ich gehe mit Giulia aus. / Der Kaffee mit Milch.)</td></tr>
<tr><td><b>Grund</b> (<i>causa</i>)</td><td>perché? per quale motivo? (warum? aus welchem Grund?)</td><td>Tremava <b>per il freddo</b>. (Er zitterte vor Kälte.)</td></tr>
<tr><td><b>Zweck</b> (<i>fine o scopo</i>)</td><td>per quale fine? (wozu?)</td><td>Studio <b>per l'esame</b>. (Ich lerne für die Prüfung.)</td></tr>
<tr><td><b>Material</b> (<i>materia</i>)</td><td>di che materia? (woraus?)</td><td>Un anello <b>d'oro</b>. (Ein Ring aus Gold.)</td></tr>
<tr><td><b>Thema</b> (<i>argomento</i>)</td><td>di che cosa? su che cosa? (worüber?)</td><td>Un libro <b>sui dinosauri</b>. (Ein Buch über Dinosaurier.)</td></tr>
<tr><td><b>Anrede</b> (<i>vocazione</i>)</td><td>(Anruf)</td><td><b>Ragazzi</b>, silenzio! (Kinder, Ruhe!)</td></tr>
</table>
<p>Alle Ergänzungen außer dem Akkusativobjekt sind <b>indirekt</b>: Sie werden durch eine <b>Präposition</b> (di, a, da, in, con, su, per, tra, fra) oder eine Wendung eingeleitet.</p>`
    },
    {
      type: "remember",
      title: "Vorsicht, Fallen",
      html: `<ul>
<li>Dieselbe Präposition kann verschiedene Ergänzungen einleiten: <i>vado <b>a</b> Roma</i> (Richtung), <i>scrivo <b>a</b> Sara</i> (Dativ), <i>arrivo <b>a</b> mezzogiorno</i> (Zeit). Es zählt die <b>Frage</b>, nicht die Präposition!</li>
<li>«Con» kann Mittel (<i>con la bici</i>), Art und Weise (<i>con gioia</i>) oder Begleitung (<i>con Luca</i>) sein: Dinge → Mittel, Gefühle/Weisen → Art und Weise, Personen/Tiere → Begleitung.</li>
<li>Das Akkusativobjekt hat <b>nie eine Präposition</b> und kommt nur bei <b>transitiven</b> Verben im Aktiv vor.</li>
<li>Erst das Prädikat, dann das Subjekt: Wenn du bei den Ergänzungen anfängst, verwirrst du dich leicht.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Wir analysieren einen Satz Schritt für Schritt",
      html: `<p><i>Ieri mattina mio fratello Paolo ha portato il cane nero al parco con il guinzaglio nuovo.</i> (Gestern Morgen hat mein Bruder Paolo den schwarzen Hund mit der neuen Leine in den Park gebracht.)</p>
<ol>
<li><b>Prädikat</b>: <i>ha portato</i> → verbales Prädikat (transitives Verb, passato prossimo).</li>
<li><b>Subjekt</b>: Wer hat gebracht? → <i>Paolo</i>. Das Gattungsnomen <i>fratello</i>, das den Eigennamen näher bestimmt, ist die <b>Apposition</b>; <i>mio</i> ist ein <b>Attribut</b> der Apposition.</li>
<li><b>Akkusativobjekt</b>: Was hat er gebracht? → <i>il cane</i>; <i>nero</i> = Attribut.</li>
<li><i>al parco</i> → wohin? <b>Richtung (moto a luogo)</b>.</li>
<li><i>con il guinzaglio</i> → womit? <b>Mittel (mezzo)</b>; <i>nuovo</i> = Attribut.</li>
<li><i>ieri mattina</i> → wann? <b>bestimmte Zeit (tempo determinato)</b>.</li>
</ol>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: ein Passivsatz",
      html: `<p><i>La Divina Commedia fu scritta da Dante nel Trecento.</i> (Die Göttliche Komödie wurde von Dante im 14. Jahrhundert geschrieben.)</p>
<ul>
<li><b>fu scritta</b> → verbales Prädikat im <b>Passiv</b>;</li>
<li><b>La Divina Commedia</b> → Subjekt (was die Handlung „erleidet“); <i>Divina</i> ist Attribut;</li>
<li><b>da Dante</b> → von wem? <b>Urheber (complemento d'agente)</b> (Person, die die Handlung ausführt);</li>
<li><b>nel Trecento</b> → wann? <b>bestimmte Zeit (tempo determinato)</b>.</li>
</ul>
<p>Wenn du den Satz ins Aktiv setzt: <i>Dante scrisse la Divina Commedia</i> → wird der Urheber zum Subjekt und das Subjekt zum Akkusativobjekt!</p>`
    },
    {
      type: "widget",
      title: "Spiel: Welche Ergänzung ist das?",
      widget: "classify",
      options: {
        groups: ["📍 Ort", "⏰ Zeit", "🛠️ Mittel oder Art und Weise", "❓ Grund oder Zweck"],
        items: [
          ["Vivo <b>in campagna</b> (Ich lebe auf dem Land)", 0], ["Corro <b>verso casa</b> (Ich renne nach Hause)", 0], ["Esco <b>dal cinema</b> (Ich komme aus dem Kino)", 0],
          ["Parto <b>a giugno</b> (Ich fahre im Juni ab)", 1], ["Ho dormito <b>per dieci ore</b> (Ich habe zehn Stunden geschlafen)", 1], ["<b>Di notte</b> fa freddo (Nachts ist es kalt)", 1],
          ["Viaggio <b>in treno</b> (Ich reise mit dem Zug)", 2], ["Rispondo <b>con gentilezza</b> (Ich antworte freundlich)", 2], ["Taglio <b>con le forbici</b> (Ich schneide mit der Schere)", 2],
          ["Piange <b>per la paura</b> (Er weint vor Angst)", 3], ["Si allena <b>per la gara</b> (Er trainiert für den Wettkampf)", 3], ["Fu premiato <b>per il coraggio</b> (Er wurde für seinen Mut ausgezeichnet)", 3]
        ]
      },
      caption: "Zieh jeden Satz in die richtige Gruppe: Stell dem Verb die Frage!"
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Das Lateinische hatte Fälle",
      html: `<p>Im <b>Lateinischen</b> zeigte nicht die Präposition die logische Funktion eines Wortes an, sondern die <b>Endung</b>: <i>rosa</i> (Subjekt, Nominativ), <i>rosae</i> (der Rose, Genitiv), <i>rosae</i> (der Rose, Dativ), <i>rosam</i> (Akkusativobjekt, Akkusativ) … Deshalb war die Wortstellung im Lateinischen frei! Die italienische logische Analyse entstand genau aus dem Studium der <b>lateinischen Fälle</b>. Auch das Deutsche, das Russische und das Rumänische haben noch Fälle.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Mehr als 40 Ergänzungen",
      html: `<p>Die italienischen Grammatiken führen <b>mehr als vierzig</b> Ergänzungen auf: Neben den klassischen gibt es die Ergänzung des <b>Alters</b> (<i>un bimbo di tre anni</i>: ein dreijähriges Kind), des <b>Gewichts</b>, des <b>Preises</b> (<i>costa dieci euro</i>: es kostet zehn Euro), des <b>Überflusses</b> und des <b>Mangels</b>, des <b>Ausschlusses</b> (<i>tutti tranne te</i>: alle außer dir), die <b>partitive</b> (<i>uno di voi</i>: einer von euch), die <b>distributive</b> (<i>due volte al giorno</i>: zweimal am Tag) … Man muss sie nicht alle auswendig lernen: Es genügt, die <b>richtige Frage</b> stellen zu können.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die logische Analyse zu verstehen",
      intro: "Wenn dir die Tabelle der Ergänzungen wie eine Mauer vorkommt, probiere einen dieser Wege.",
      tabs: [
        {
          label: "🎬 Der Satz wie ein Film",
          html: `<p>Stell dir den Satz wie eine Filmszene vor:</p>
<ul>
<li>das <b>Prädikat</b> ist die <b>Handlung</b> (Klappe, und bitte!);</li>
<li>das <b>Subjekt</b> ist die <b>Hauptfigur</b>;</li>
<li>das <b>Akkusativobjekt</b> ist das Requisit, mit dem gehandelt wird;</li>
<li>die Ergänzungen von <b>Ort und Zeit</b> sind das <b>Bühnenbild</b> und der Drehtermin;</li>
<li>Mittel, Art und Weise, Grund sind die <b>Anweisungen des Regisseurs</b>: womit, wie, warum.</li>
</ul>
<p>Frag dich zuerst: <i>Was ist die Handlung?</i> Dann: <i>Wer führt sie aus?</i></p>`
        },
        {
          label: "🇬🇧 Die englische Methode: SVO",
          html: `<p>In englischen Schulen beginnt man mit dem Schema <b>S-V-O</b>: <b>Subject – Verb – Object</b>. <i>Tom (S) eats (V) an apple (O).</i> Alles andere sind <b>adverbials</b> (wo, wann, wie, warum).</p>
<p>Im Englischen ist die Wortstellung fest, also verrät dir die Position die Funktion. Im Italienischen ist die Wortstellung freier (<i>La mela la mangia Tom</i>), deshalb müssen wir die <b>Fragen</b> benutzen. Aber das Schema S-V-O bleibt ein guter Ausgangspunkt: Finde S, V und O und ordne dann den Rest ein.</p>`
        },
        {
          label: "🌳 Die Valenz-Methode (strahlenförmig)",
          html: `<p>Die italienischen Lehrplanempfehlungen (Indicazioni nazionali) schlagen auch die <b>Valenzgrammatik</b> vor (vom französischen Sprachwissenschaftler <b>Lucien Tesnière</b>). Jedes Verb hat wie ein Atom <b>Valenzen</b>: die „Plätze“, die besetzt sein müssen, damit der Satz Sinn ergibt.</p>
<ul>
<li><b>nullwertig</b> (<i>zerovalenti</i>): <i>piove</i> (es regnet; kein Argument);</li>
<li><b>einwertig</b> (<i>monovalenti</i>): <i>Luca dorme</i> (wer?);</li>
<li><b>zweiwertig</b> (<i>bivalenti</i>): <i>Luca mangia una mela</i> (wer? was?);</li>
<li><b>dreiwertig</b> (<i>trivalenti</i>): <i>Luca regala un fiore a Sara</i> (wer? was? wem?).</li>
</ul>
<p>Die <b>Argumente</b> sind unverzichtbar; alles andere sind <b>Umstandsangaben</b> (<i>circostanziali</i>) und <b>Erweiterungen</b> (<i>espansioni</i>), die man weglassen kann.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<line x1="300" y1="140" x2="120" y2="60" stroke="#16a34a" stroke-width="4"/>
<line x1="300" y1="140" x2="480" y2="60" stroke="#16a34a" stroke-width="4"/>
<line x1="300" y1="140" x2="300" y2="245" stroke="#16a34a" stroke-width="4"/>
<line x1="300" y1="140" x2="110" y2="225" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8 6"/>
<line x1="300" y1="140" x2="490" y2="225" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8 6"/>
<ellipse cx="300" cy="140" rx="70" ry="34" fill="#16a34a"/>
<text x="300" y="147" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">regala</text>
<rect x="60" y="38" width="120" height="40" rx="10" fill="#ef4444"/>
<text x="120" y="64" font-size="17" fill="#fff" text-anchor="middle">Luca (wer?)</text>
<rect x="400" y="38" width="160" height="40" rx="10" fill="#3b82f6"/>
<text x="480" y="64" font-size="17" fill="#fff" text-anchor="middle">un fiore (was?)</text>
<rect x="225" y="228" width="150" height="40" rx="10" fill="#22c55e"/>
<text x="300" y="254" font-size="17" fill="#fff" text-anchor="middle">a Sara (wem?)</text>
<rect x="20" y="210" width="180" height="34" rx="10" fill="#e2e8f0"/>
<text x="110" y="233" font-size="15" fill="#334155" text-anchor="middle">ieri (Umstandsangabe)</text>
<rect x="410" y="210" width="170" height="34" rx="10" fill="#e2e8f0"/>
<text x="495" y="233" font-size="15" fill="#334155" text-anchor="middle">rosso (Erweiterung)</text>
</svg>`
        },
        {
          label: "🃏 Karteikarten mit den Fragen",
          html: `<p>Übe: Vorne steht die Ergänzung, hinten die Frage, die du dem Verb stellen musst.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Complemento oggetto (Akkusativobjekt)", back: "chi? che cosa? (wen? was? ohne Präposition)" },
              { front: "Specificazione (nähere Bestimmung)", back: "di chi? di che cosa? (wessen? wovon?)" },
              { front: "Termine (Dativ)", back: "a chi? a che cosa? (wem?)" },
              { front: "Agente (Urheber)", back: "da chi? (Passivsatz, Person)" },
              { front: "Stato in luogo (Ort)", back: "dove? (wo? in Ruhe)" },
              { front: "Moto a luogo (Richtung)", back: "verso dove? (wohin?)" },
              { front: "Tempo continuato (Zeitdauer)", back: "per quanto tempo? (wie lange?)" },
              { front: "Causa (Grund)", back: "perché? per quale motivo? (warum? aus welchem Grund?)" },
              { front: "Fine (Zweck)", back: "per quale scopo? (wozu?)" },
              { front: "Compagnia (Begleitung)", back: "con chi? (mit wem?)" }
            ]
          }
        }
      ]
    },
    {
      type: "widget",
      title: "Ordne den Satz der hervorgehobenen Ergänzung zu",
      widget: "match",
      options: {
        pairs: [
          ["La bici di Anna", "specificazione (nähere Bestimmung)"],
          ["Telefono a mia zia", "termine (Dativ)"],
          ["Fu morso da un cane", "agente (Urheber)"],
          ["Un vaso di vetro", "materia (Material)"],
          ["Parliamo di calcio", "argomento (Thema)"],
          ["Passeggio con il cane", "compagnia (Begleitung)"]
        ]
      },
      caption: "Verbinde jedes Beispiel mit dem Namen der Ergänzung."
    },
    {
      type: "conceptMap",
      title: "Landkarte der logischen Analyse",
      nodes: [
        { id: "frase", label: "Einfacher Satz", x: 50, y: 6, color: "#0f172a", html: "Eine Sinneinheit mit nur einem Prädikat.", why: "Das Wort «proposizione» kommt vom lateinischen <i>propositio</i>, «das, was man voranstellt», also das, was man behauptet. Die antiken Logiker, angefangen bei <b>Aristoteles</b> (4. Jahrhundert v. Chr.), untersuchten Sätze als wahre oder falsche Aussagen: Daher der Name «<i>logische</i> Analyse»." },
        { id: "predicato", label: "Prädikat", x: 50, y: 28, color: "#ca8a04", html: "Was über das Subjekt gesagt wird: verbal oder nominal.", why: "«Predicare» bedeutet auf Latein «erklären». Für Aristoteles besteht jedes Urteil aus einem Subjekt und einem Prädikat («Sokrates ist sterblich»). Deshalb unterscheidet die traditionelle Grammatik das nominale Prädikat mit der Kopula «essere»." },
        { id: "soggetto", label: "Subjekt", x: 18, y: 42, color: "#dc2626", html: "Wer die Handlung ausführt oder erleidet oder von wem die Rede ist.", why: "Vom lateinischen <i>subiectum</i>, «das, was darunter liegt»: Es ist die Grundlage, auf der das Behauptete ruht. Im Italienischen stimmt es mit dem Verb in Person und Zahl überein: Deshalb kann es unausgedrückt bleiben." },
        { id: "oggetto", label: "Akkusativobjekt", x: 82, y: 42, color: "#2563eb", html: "Empfängt die Handlung eines transitiven Verbs direkt.", why: "Entspricht dem lateinischen <b>Akkusativ</b>. Es heißt «direkt», weil es ohne Präposition mit dem Verb verbunden ist: Die Handlung «geht» (<i>transire</i>) direkt auf es über, daher der Name <b>transitives</b> Verb." },
        { id: "indiretti", label: "Indirekte Ergänzungen", x: 50, y: 58, color: "#16a34a", html: "Mit Präpositionen eingeleitet: nähere Bestimmung, Dativ, Ort, Zeit, Mittel, Grund …", why: "Als das gesprochene Latein die Fallendungen verlor (zwischen dem 5. und 8. Jahrhundert), benutzten die romanischen Sprachen <b>Präpositionen</b>, um die Funktionen anzuzeigen: <i>rosae</i> wurde zu «della rosa» und «alla rosa»." },
        { id: "attributo", label: "Attribut", x: 18, y: 76, color: "#9333ea", html: "Adjektiv, das sich auf ein Nomen bezieht.", why: "Von <i>attribuere</i>, «zuweisen»: Es weist einem Nomen eine Eigenschaft zu. Es stimmt in Genus und Numerus mit dem Nomen überein, auf das es sich bezieht, egal wo dieses im Satz steht." },
        { id: "apposizione", label: "Apposition", x: 50, y: 82, color: "#db2777", html: "Nomen, das ein anderes näher bestimmt: il <b>fiume</b> Po (der Fluss Po).", why: "Von <i>apponere</i>, «danebensetzen». Es ist ein Nomen, das neben ein anderes gestellt wird, um es besser zu bestimmen; es übernimmt dieselbe logische Funktion wie das Nomen, auf das es sich bezieht." },
        { id: "valenza", label: "Valenz des Verbs", x: 82, y: 76, color: "#0d9488", html: "Die Zahl der Argumente, die das Verb braucht.", why: "Vorgeschlagen vom französischen Sprachwissenschaftler <b>Lucien Tesnière</b> in den <i>Éléments de syntaxe structurale</i> (1959), der den Begriff aus der Chemie übernahm: So wie sich ein Atom mit einer bestimmten Zahl anderer Atome verbindet, «ruft» ein Verb eine bestimmte Zahl von Argumenten auf." }
      ],
      edges: [
        ["frase", "predicato", "hat einen Kern"],
        ["predicato", "soggetto", "stimmt überein mit"],
        ["predicato", "oggetto", "wenn transitiv"],
        ["predicato", "indiretti", "wird erweitert durch"],
        ["soggetto", "attributo", "kann haben"],
        ["soggetto", "apposizione", "kann haben"],
        ["predicato", "valenza", "hat eine"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Ergänzungen",
      questions: [
        { type: "mc", q: "«Andiamo a Napoli in aereo» (Wir fliegen nach Neapel). «In aereo» ist eine Ergänzung des …", options: ["Ortes (stato in luogo)", "Mittels (mezzo)", "der Art und Weise (modo)"], answer: 1, explain: "Womit reisen wir? Mit dem Flugzeug: Ergänzung des Mittels (mezzo)." },
        { type: "mc", q: "«La casa fu costruita dai nonni» (Das Haus wurde von den Großeltern gebaut). «Dai nonni» ist eine Ergänzung …", options: ["des Urhebers (d'agente)", "der Herkunft (moto da luogo)", "des Grundes (di causa)"], answer: 0, explain: "Passivsatz, Person, die die Handlung ausführt: complemento d'agente." },
        { type: "text", q: "«Ho aspettato per un'ora» (Ich habe eine Stunde gewartet). Welche Ergänzung ist «per un'ora»? (zwei Wörter, italienisch oder deutsch)", answer: ["tempo continuato", "di tempo continuato", "complemento di tempo continuato", "Zeitdauer", "die Zeitdauer", "Ergänzung der Zeitdauer"], explain: "Wie lange? Zeitdauer (tempo continuato)." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Reihenfolge: <b>Prädikat → Subjekt → Objekt → andere Ergänzungen</b>.</li>
<li><b>Nominales</b> Prädikat = essere + Nomen/Adjektiv; alle anderen sind <b>verbal</b>.</li>
<li>Das <b>Subjekt</b> und das <b>Akkusativobjekt</b> haben keine Präposition.</li>
<li>Bei den indirekten Ergänzungen zählt die <b>Frage</b>, nicht die Präposition.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Analisi logica (logische Analyse)", d: "Untersuchung der Funktion, die jedes Wort oder jede Wortgruppe im Satz hat." },
    { t: "Predicato verbale (verbales Prädikat)", d: "Verb mit vollständiger Bedeutung, das sagt, was das Subjekt tut oder was ihm geschieht." },
    { t: "Predicato nominale (nominales Prädikat)", d: "Verb essere (Kopula) + Nomen oder Adjektiv (Prädikatsnomen)." },
    { t: "Copula (Kopula)", d: "Das Verb «essere» (sein), wenn es das Subjekt mit einem Nomen oder Adjektiv verbindet." },
    { t: "Soggetto (Subjekt)", d: "Wer die Handlung ausführt oder erleidet oder von wem die Rede ist; man findet es mit der Frage wer? was?" },
    { t: "Complemento oggetto (Akkusativobjekt)", d: "Empfängt die Handlung eines transitiven Verbs direkt; hat keine Präposition." },
    { t: "Complemento indiretto (indirekte Ergänzung)", d: "Ergänzung, die durch eine Präposition eingeleitet wird." },
    { t: "Attributo (Attribut)", d: "Adjektiv, das sich auf ein Nomen im Satz bezieht." },
    { t: "Apposizione (Apposition)", d: "Nomen, das ein anderes Nomen begleitet und näher bestimmt." },
    { t: "Valenza (Valenz)", d: "Zahl der Argumente, die ein Verb braucht, um einen vollständigen Sinn zu haben." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In «I bambini giocano in cortile» (Die Kinder spielen im Hof) ist das Subjekt …", options: ["in cortile", "i bambini", "giocano"], answer: 1, explain: "Wer spielt? Die Kinder (i bambini)." },
      { type: "mc", q: "«Tua sorella sembra stanca» (Deine Schwester wirkt müde): «stanca» ist …", options: ["Attribut", "Prädikatsnomen", "Prädikativ zum Subjekt (complemento predicativo del soggetto)"], answer: 2, explain: "Bei «sembrare» hat man ein verbales Prädikat + Prädikativ zum Subjekt." },
      { type: "tf", q: "Das Akkusativobjekt wird immer durch die Präposition «a» eingeleitet.", answer: false, explain: "Das Akkusativobjekt hat nie eine Präposition." },
      { type: "mc", q: "«Torno da Milano stasera» (Ich komme heute Abend aus Mailand zurück): «da Milano» ist …", options: ["Herkunft (moto da luogo)", "Urheber (agente)", "nähere Bestimmung (specificazione)"], answer: 0, explain: "Woher komme ich zurück? Herkunft (moto da luogo)." },
      { type: "mc", q: "«Una statua di marmo» (Eine Statue aus Marmor): «di marmo» ist eine Ergänzung des …", options: ["nähere Bestimmung (specificazione)", "Materials (materia)", "Themas (argomento)"], answer: 1, explain: "Woraus ist sie gemacht? Material (materia)." },
      { type: "tf", q: "In «Giulia è a scuola» (Giulia ist in der Schule) ist das Prädikat verbal.", answer: true, explain: "«È» bedeutet «befindet sich»; «a scuola» ist eine Ortsergänzung (stato in luogo)." },
      { type: "text", q: "«Il poeta Leopardi nacque a Recanati» (Der Dichter Leopardi wurde in Recanati geboren). Welche Funktion hat «poeta»?", answer: ["apposizione", "un'apposizione", "Apposition", "die Apposition", "eine Apposition"], explain: "Es ist ein Nomen, das den Eigennamen Leopardi näher bestimmt: Apposition." },
      { type: "mc", q: "«Marco studia con impegno» (Marco lernt mit Einsatz): «con impegno» ist eine Ergänzung des …", options: ["Mittels (mezzo)", "der Begleitung (compagnia)", "der Art und Weise (modo)"], answer: 2, explain: "Wie lernt er? Auf welche Weise? Art und Weise (modo)." },
      { type: "num", q: "Wie viele Argumente (Valenzen) hat das Verb «regalare» (schenken) in «Paolo regala un libro a Sara»?", answer: 3, explain: "Wer schenkt, was, wem: dreiwertiges Verb." },
      { type: "order", q: "Bring die Schritte der logischen Analyse in die richtige Reihenfolge.", items: ["Ich finde das Prädikat", "Ich finde das Subjekt", "Ich finde das Akkusativobjekt", "Ich ordne die anderen Ergänzungen ein"], explain: "Man beginnt immer beim Prädikat, dann Subjekt, Objekt und indirekte Ergänzungen." },
      { type: "mc", q: "«Il ladro fu fermato dalla polizia» (Der Dieb wurde von der Polizei gestoppt). Der Satz ist …", options: ["aktiv", "passiv", "reflexiv"], answer: 1, explain: "«Fu fermato» ist Passiv; «dalla polizia» ist ein complemento d'agente." },
      { type: "text", q: "«Per la pioggia la gita è stata rinviata» (Wegen des Regens wurde der Ausflug verschoben): Welche Ergänzung ist «per la pioggia»?", answer: ["causa", "di causa", "complemento di causa", "Grund", "der Grund", "Ergänzung des Grundes"], explain: "Warum wurde er verschoben? Wegen des Regens: Grund (causa)." }
    ]
  }
});
