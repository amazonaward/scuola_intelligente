TOPIC('de', {
  id: "p5-ita-verbi-transitivi",
  title: "Transitive und intransitive Verben",
  intro: "Manche Handlungen „gehen über“ auf etwas oder jemanden (<i>mangio una mela</i> – ich esse einen Apfel), andere bleiben bei dem, der sie ausführt (<i>dormo</i> – ich schlafe). Wir entdecken die <b>transitiven</b> und <b>intransitiven</b> Verben und die drei Formen des Verbs: <b>Aktiv</b>, <b>Passiv</b> und <b>Reflexiv</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Transitiv = die Handlung „geht hinüber“",
      html: `<p><b>Transitiv</b> kommt vom lateinischen <i>transire</i>, „hinübergehen“. Ein Verb ist:</p>
<ul>
<li><b>transitiv</b>, wenn die Handlung direkt vom Subjekt auf ein <b>Akkusativobjekt</b> (<i>complemento oggetto</i>: wen? was?) <b>übergeht</b>: «Marta <u>legge</u> <b>un libro</b>» (Marta liest ein Buch), «Il cane <u>morde</u> <b>l'osso</b>» (Der Hund beißt in den Knochen).</li>
<li><b>intransitiv</b>, wenn die Handlung beim Subjekt <b>bleibt</b> und <b>kein</b> Akkusativobjekt haben <b>kann</b>: «Il bambino <u>dorme</u>» (Das Kind schläft), «Vado a scuola» (Ich gehe zur Schule), «Il fiore <u>sboccia</u>» (Die Blume blüht auf).</li>
</ul>
<p><b>Probe</b>: Frage nach dem Verb «wen? was?». Ergibt die Frage Sinn (<i>leggo… che cosa?</i> – ich lese … was?), ist es transitiv; ergibt sie keinen Sinn (<i>arrivo… che cosa?</i> 🤔), ist es intransitiv.</p>`
    },
    {
      type: "svg",
      title: "Der Pfeil der Handlung",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="20" y="34" font-size="20" font-weight="bold" fill="#15803d">TRANSITIV</text>
<circle cx="80" cy="95" r="38" fill="#3b82f6"/><text x="80" y="101" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">Luca</text>
<line x1="125" y1="95" x2="420" y2="95" stroke="#16a34a" stroke-width="8"/>
<polygon points="420,78 450,95 420,112" fill="#16a34a"/>
<text x="280" y="80" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">lancia</text>
<circle cx="500" cy="95" r="38" fill="#f97316"/><text x="500" y="101" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">la palla</text>
<text x="500" y="152" font-size="14" text-anchor="middle" fill="#1f2937">Akkusativobjekt</text>
<text x="20" y="194" font-size="20" font-weight="bold" fill="#b91c1c">INTRANSITIV</text>
<circle cx="80" cy="250" r="38" fill="#3b82f6"/><text x="80" y="256" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">Luca</text>
<path d="M118,232 C200,170 220,300 125,268" fill="none" stroke="#dc2626" stroke-width="7"/>
<polygon points="132,256 112,274 138,282" fill="#dc2626"/>
<text x="230" y="240" font-size="20" fill="#b91c1c" font-weight="bold">dorme</text>
<text x="230" y="268" font-size="15" fill="#1f2937">die Handlung bleibt bei ihm: kein Objekt!</text>
</svg>`,
      caption: "Bei transitiven Verben erreicht der Handlungspfeil ein Objekt; bei intransitiven kehrt er zum Subjekt zurück."
    },
    {
      type: "text",
      title: "Transitive und intransitive Verwendung",
      html: `<p>Manche transitive Verben können <b>ohne</b> Akkusativobjekt verwendet werden: man sagt, sie werden <b>absolut</b> gebraucht. «Il neonato <u>mangia</u>» (Das Baby isst) – isst was? Ich sage es nicht, aber ich könnte es: Das Verb ist immer noch transitiv.</p>
<p>Andere Verben ändern ihre Bedeutung: <i>Il treno <u>corre</u></i> (Der Zug fährt schnell – intransitiv) / <i>Il ciclista <u>corre</u> il Giro d'Italia</i> (Der Radfahrer fährt die Italien-Rundfahrt – transitiv).</p>
<p>Für die <b>Hilfsverben</b> gibt es eine nützliche Regel:</p>
<ul>
<li>transitive Verben benutzen in den zusammengesetzten Zeiten immer <b>avere</b> (haben): <i>ho mangiato, ho letto</i>;</li>
<li>intransitive Verben benutzen <b>essere</b> (sein) oder <b>avere</b>: <i>sono partito, sono caduto</i> / <i>ho dormito, ho camminato</i>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: transitiv oder intransitiv?",
      questions: [
        { type: "mc", q: "«Il sole tramonta.» Das Verb ist …", options: ["transitiv", "intransitiv"], answer: 1, explain: "Tramonta … was? Das ergibt keinen Sinn: intransitiv." },
        { type: "mc", q: "«La mamma prepara la cena.» Das Verb ist …", options: ["transitiv", "intransitiv"], answer: 0, explain: "Prepara … was? La cena (Akkusativobjekt): transitiv." },
        { type: "tf", q: "In den zusammengesetzten Zeiten benutzen transitive Verben das Hilfsverb avere.", answer: true, explain: "Ho preparato, ho letto, ho visto (im Aktiv)." }
      ]
    },
    {
      type: "widget",
      title: "Spiel: Verben sortieren",
      widget: "classify",
      options: {
        groups: ["Transitiv", "Intransitiv"],
        items: [["🍎 mangiare (una mela)", 0], ["✉️ scrivere (una lettera)", 0], ["👀 guardare (un film)", 0], ["🎁 regalare (un dono)", 0], ["🔨 costruire (una casa)", 0], ["😴 dormire", 1], ["🚶 andare", 1], ["🌅 nascere", 1], ["🏃 arrivare", 1], ["🌸 sbocciare", 1]]
      },
      caption: "Probiere die Frage «was?» nach dem Verb: Wenn sie Sinn ergibt, ist es transitiv."
    },
    {
      type: "text",
      title: "Aktiv und Passiv",
      html: `<p><b>Transitive</b> Verben können zwei Formen haben:</p>
<ul>
<li><b>Aktiv</b>: Das Subjekt <b>tut</b> die Handlung. «<b>Il gatto</b> mangia <u>il topo</u>» (Die Katze frisst die Maus).</li>
<li><b>Passiv</b>: Das Subjekt <b>erleidet</b> die Handlung. «<b>Il topo</b> è mangiato <u>dal gatto</u>» (Die Maus wird von der Katze gefressen).</li>
</ul>
<p><b>So verwandelt man</b> einen Satz vom Aktiv ins Passiv:</p>
<ol>
<li>Das <b>Akkusativobjekt</b> wird zum <b>Subjekt</b> (il topo);</li>
<li>das Verb wird mit <b>essere</b> (oder <b>venire</b>) + <b>Partizip Perfekt</b> gebildet, im <b>selben Modus und derselben Zeit</b>: <i>mangia</i> → <i>è mangiato</i>; <i>mangiò</i> → <i>fu mangiato</i>; <i>ha mangiato</i> → <i>è stato mangiato</i>;</li>
<li>das alte Subjekt wird zur <b>Agensangabe</b> (<i>complemento d'agente</i>), eingeleitet mit <b>da</b> (dal gatto). Ist es eine Sache, nennt man es <b>complemento di causa efficiente</b> (Angabe der wirkenden Ursache): «La casa fu distrutta <u>dal terremoto</u>».</li>
</ol>
<p>⚠️ Nur <b>transitive Verben mit Akkusativobjekt</b> können ins Passiv gesetzt werden. «Io dormo» hat keine Passivform!</p>`
    },
    {
      type: "example",
      title: "Beispiel: von der Sportnachricht zur Zeitung",
      html: `<p>Der Reporter sagt (Aktiv): «<b>Il capitano</b> ha segnato <b>il gol della vittoria</b>» (Der Kapitän hat das Siegtor geschossen).</p>
<p>Die Zeitung titelt (Passiv): «<b>Il gol della vittoria</b> è stato segnato <b>dal capitano</b>» (Das Siegtor wurde vom Kapitän geschossen).</p>
<p>Die Nachricht ist dieselbe, aber es ändert sich, <b>was wir in den Vordergrund stellen</b>: Im Passiv ist das Tor wichtig. Deshalb ist das Passiv in Zeitungen und wissenschaftlichen Texten häufig: «L'America fu raggiunta da Colombo nel 1492» (Amerika wurde 1492 von Kolumbus erreicht), «L'acqua viene riscaldata fino a 100 °C» (Das Wasser wird auf 100 °C erhitzt).</p>`
    },
    {
      type: "text",
      title: "Die reflexive Form",
      html: `<p>Ein Verb steht in der <b>reflexiven Form</b>, wenn die Handlung des Subjekts <b>auf das Subjekt selbst zurückfällt</b>, wie in einem Spiegel. Man benutzt die Pronomen <b>mi, ti, si, ci, vi, si</b>.</p>
<ul>
<li><b>Echt reflexiv</b> (<i>riflessiva propria</i>): «Io <u>mi lavo</u>» = ich wasche mich selbst (das Pronomen ist Akkusativobjekt).</li>
<li><b>Scheinbar reflexiv</b> (<i>riflessiva apparente</i>): «Io <u>mi lavo</u> le mani» = ich wasche mir die Hände (das Akkusativobjekt ist „le mani“; <i>mi</i> = mir).</li>
<li><b>Reziprok</b> (<i>riflessiva reciproca</i>): «Marco e Anna <u>si salutano</u>» = der eine grüßt den anderen.</li>
</ul>
<p>Achtung bei den <b>intransitiven pronominalen Verben</b>: <i>pentirsi, vergognarsi, accorgersi, arrabbiarsi</i>. Sie haben das Pronomen, sind aber <b>nicht reflexiv</b>: Man kann nicht sagen „ich bereue mich selbst“!</p>`
    },
    {
      type: "svg",
      title: "Die drei Formen im Vergleich",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fefce8"/>
<rect x="15" y="20" width="195" height="260" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="112" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#15803d">AKTIV</text>
<text x="112" y="100" font-size="34" text-anchor="middle">🐱➡️🐭</text>
<text x="112" y="150" font-size="16" text-anchor="middle">Il gatto</text>
<text x="112" y="172" font-size="16" text-anchor="middle" font-weight="bold">insegue</text>
<text x="112" y="194" font-size="16" text-anchor="middle">il topo.</text>
<text x="112" y="240" font-size="14" text-anchor="middle" fill="#15803d">das Subjekt TUT</text>
<rect x="222" y="20" width="195" height="260" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<text x="320" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">PASSIV</text>
<text x="320" y="100" font-size="34" text-anchor="middle">🐭⬅️🐱</text>
<text x="320" y="150" font-size="16" text-anchor="middle">Il topo</text>
<text x="320" y="172" font-size="16" text-anchor="middle" font-weight="bold">è inseguito</text>
<text x="320" y="194" font-size="16" text-anchor="middle">dal gatto.</text>
<text x="320" y="240" font-size="14" text-anchor="middle" fill="#1d4ed8">das Subjekt ERLEIDET</text>
<rect x="430" y="20" width="195" height="260" rx="14" fill="#fce7f3" stroke="#db2777" stroke-width="3"/>
<text x="527" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#be185d">REFLEXIV</text>
<text x="527" y="100" font-size="34" text-anchor="middle">🐱🪞</text>
<text x="527" y="150" font-size="16" text-anchor="middle">Il gatto</text>
<text x="527" y="172" font-size="16" text-anchor="middle" font-weight="bold">si lecca.</text>
<text x="527" y="240" font-size="14" text-anchor="middle" fill="#be185d">das Subjekt TUT</text>
<text x="527" y="260" font-size="14" text-anchor="middle" fill="#be185d">und ERLEIDET</text>
</svg>`,
      caption: "Aktiv: Das Subjekt tut. Passiv: Das Subjekt erleidet. Reflexiv: Es tut und erleidet zugleich."
    },
    {
      type: "example",
      title: "Beispiel: Wir verwandeln gemeinsam",
      html: `<table>
<tr><th>Zeit</th><th>Aktiv</th><th>Passiv</th></tr>
<tr><td>Präsens</td><td>Il vento <b>muove</b> le foglie.</td><td>Le foglie <b>sono mosse</b> dal vento.</td></tr>
<tr><td>Imperfekt</td><td>Il nonno <b>raccontava</b> storie.</td><td>Le storie <b>erano raccontate</b> dal nonno.</td></tr>
<tr><td>Perfekt</td><td>Gli alunni <b>hanno piantato</b> un albero.</td><td>Un albero <b>è stato piantato</b> dagli alunni.</td></tr>
<tr><td>Futur</td><td>La giuria <b>premierà</b> i vincitori.</td><td>I vincitori <b>saranno premiati</b> dalla giuria.</td></tr>
</table>
<p>Beachte: Das Partizip <b>richtet sich</b> nach dem neuen Subjekt: <i>le foglie sono moss<b>e</b></i>, <i>i vincitori saranno premiat<b>i</b></i>.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Das „schnelle“ Passiv mit si",
      html: `<p>Im Italienischen gibt es ein „verkleidetes“ Passiv: das <b>si passivante</b>. Auf Ladenschildern liest du «<b>Si vendono</b> biciclette» = «Biciclette <b>sono vendute</b>» (Fahrräder werden verkauft). Das Verb steht im Plural, weil es sich nach <i>biciclette</i> richtet, das das Subjekt ist! Deshalb ist «Si vende biciclette» ein Fehler.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Das Lateinische bildete das Passiv in einem einzigen Wort",
      html: `<p>Im Lateinischen bildete man das Passiv, indem man nur die <b>Endung</b> änderte: <i>amo</i> = ich liebe, <i>amor</i> = ich werde geliebt; <i>laudat</i> = er lobt, <i>laudatur</i> = er wird gelobt. Das Italienische hat diese Formen verloren und benutzt das Hilfsverb <b>essere</b>. Auch das Englische benutzt ein Hilfsverb: <i>the cake <b>is eaten</b></i> (der Kuchen wird gegessen).</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Transitiv</b>: kann ein Akkusativobjekt haben. <b>Intransitiv</b>: kann keines haben.</li>
<li><b>Passiv</b> = essere/venire + Partizip Perfekt; das alte Subjekt wird zur <b>Agensangabe</b> (da…).</li>
<li>Nur <b>transitive</b> Verben haben die Passivform.</li>
<li><b>Reflexiv</b>: Die Handlung fällt auf das Subjekt zurück (mi, ti, si, ci, vi, si): echt, scheinbar, reziprok.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Verbformen zu verstehen",
      intro: "Passiv und Reflexiv kann man mit einem Foto, mit dem Englischen, mit dem Spiegel oder mit einem Zuordnungsspiel verstehen.",
      tabs: [
        {
          label: "📸 Wechsle den Bildausschnitt",
          html: `<p>Stell dir vor, du fotografierst dieselbe Szene mit zwei Bildausschnitten:</p>
<ul>
<li>📷 <b>Aktiv</b>: Zoom auf den, der die Handlung <b>ausführt</b> → «<b>La volpe</b> ruba l'uva» (Der Fuchs stiehlt die Trauben).</li>
<li>📷 <b>Passiv</b>: Zoom auf den, der die Handlung <b>erhält</b> → «<b>L'uva</b> è rubata dalla volpe» (Die Trauben werden vom Fuchs gestohlen).</li>
</ul>
<p>Die Szene ist identisch, es ändert sich der „Hauptdarsteller“ des Fotos, also das <b>Subjekt</b>. Deshalb ist im Passiv der Hauptdarsteller der, der etwas erleidet.</p>`
        },
        {
          label: "🇬🇧 Passive voice",
          html: `<p>Im Englischen wird das Passiv wie im Italienischen gebildet: <b>to be + Partizip Perfekt</b> und <b>by</b> für den Handelnden.</p>
<table>
<tr><th>Active</th><th>Passive</th></tr>
<tr><td>Shakespeare <b>wrote</b> Hamlet.</td><td>Hamlet <b>was written by</b> Shakespeare.</td></tr>
<tr><td>The dog <b>eats</b> the bone.</td><td>The bone <b>is eaten by</b> the dog.</td></tr>
</table>
<p><i>by</i> = <i>da</i> (von; Agensangabe). Die Engländer benutzen das Passiv oft in Nachrichten und in der Wissenschaft, genau wie wir.</p>`,
          widget: "match",
          options: { pairs: [["is eaten", "è mangiato"], ["was written", "fu scritto"], ["are sold", "sono venduti"], ["by the dog", "dal cane"], ["has been built", "è stato costruito"]] }
        },
        {
          label: "🪞 Der Spiegel",
          html: `<p>Um zu erkennen, ob ein Verb <b>reflexiv</b> ist, mach die <b>Spiegelprobe</b>: Ersetze <i>mi/ti/si</i> durch <b>„me stesso / te stesso / se stesso“</b> (mich selbst / dich selbst / sich selbst).</p>
<ul>
<li>«Mi pettino» → pettino <b>me stesso</b> ✅ echt reflexiv.</li>
<li>«Mi pettino i capelli» → pettino i capelli <b>a me</b> ✅ scheinbar reflexiv.</li>
<li>«Ci abbracciamo» → der eine umarmt den anderen ✅ reziprok.</li>
<li>«Mi pento» → pento me stesso? ❌ ergibt keinen Sinn: Es ist ein <b>intransitives pronominales Verb</b>.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf4ff"/>
<rect x="290" y="20" width="20" height="180" fill="#a5b4fc" stroke="#4338ca" stroke-width="3"/>
<text x="180" y="110" font-size="64" text-anchor="middle">🧒</text>
<text x="420" y="110" font-size="64" text-anchor="middle" transform="translate(840,0) scale(-1,1)">🧒</text>
<path d="M210,150 Q300,200 390,150" fill="none" stroke="#db2777" stroke-width="5"/>
<path d="M390,150 Q300,100 210,150" fill="none" stroke="#db2777" stroke-width="5" stroke-dasharray="8 6"/>
<text x="300" y="214" font-size="18" text-anchor="middle" fill="#9d174d" font-weight="bold">mi lavo = lavo me stesso</text>
</svg>`
        },
        {
          label: "🧮 Die Formel",
          html: `<p>Wenn du „mathematische“ Regeln magst, hier die <b>Passivformel</b>:</p>
<p style="font-size:1.2em"><b>S + V(aktiv) + AO</b> ➜ <b>AO + essere(gleiche Zeit) + Partizip + da + S</b></p>
<p>Beispiel: <i>Anna</i> (S) + <i>dipinge</i> (V) + <i>un quadro</i> (AO) ➜ <i>Un quadro</i> + <i>è</i> + <i>dipinto</i> + <i>da Anna</i>. (S = Subjekt, V = Verb, AO = Akkusativobjekt)</p>
<p>Abschlusskontrolle: Die Zeit von <i>essere</i> muss dieselbe sein wie die des aktiven Verbs (dipinge = Präsens → è = Präsens).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Verben und ihrer Formen",
      nodes: [
        { id: "verbo", label: "Verb", x: 50, y: 6, color: "#dc2626", html: "Wort, das eine Handlung oder einen Zustand bezeichnet.", why: "Das Verb ist der Mittelpunkt des Satzes: Von ihm hängt ab, welche anderen Teile nötig sind (Subjekt, Objekt …)." },
        { id: "trans", label: "Transitiv", x: 25, y: 28, color: "#16a34a", html: "Kann ein Akkusativobjekt bei sich haben: leggere qualcosa (etwas lesen).", why: "Vom Lateinischen <i>transire</i> (hinübergehen): Die Handlung „geht über“ vom Subjekt zum Objekt. In der Valenzgrammatik ist es ein Verb mit mindestens zwei Ergänzungen: wer und was." },
        { id: "intr", label: "Intransitiv", x: 75, y: 28, color: "#f97316", html: "Kann kein Akkusativobjekt haben: dormire, andare, nascere.", why: "<i>In-</i> = nicht: Die Handlung geht nicht über das Subjekt hinaus. Viele bezeichnen Bewegung oder Zustandsänderung und benutzen das Hilfsverb essere (sono andato, sono nato)." },
        { id: "attiva", label: "Aktiv", x: 10, y: 55, color: "#22c55e", html: "Das Subjekt führt die Handlung aus.", why: "Es ist die „normale“ und im Italienischen am häufigsten gebrauchte Form: Sie folgt der natürlichen Ordnung wer → tut → was." },
        { id: "passiva", label: "Passiv", x: 38, y: 55, color: "#2563eb", html: "Das Subjekt erleidet die Handlung: essere/venire + Partizip.", why: "Es dient dazu, den in den Vordergrund zu stellen, der die Handlung erhält, oder nicht zu sagen, wer sie getan hat («La finestra è stata rotta» – Das Fenster wurde zerbrochen). Das Lateinische bildete es mit Endungen (<i>amor</i>); das Italienische mit dem Hilfsverb essere." },
        { id: "agente", label: "Agensangabe", x: 38, y: 80, color: "#0ea5e9", html: "Wer die Handlung im Passivsatz ausführt: «dal gatto». Bei einer Sache: causa efficiente.", why: "Es ist das alte Subjekt des Aktivsatzes, „verschoben“ und mit der Präposition <i>da</i> eingeleitet." },
        { id: "rifl", label: "Reflexiv", x: 70, y: 55, color: "#db2777", html: "Die Handlung fällt auf das Subjekt zurück: mi lavo.", why: "Der Name kommt von <i>reflektieren</i> wie ein Spiegel. Es wird mit den unbetonten Pronomen mi, ti, si, ci, vi, si gebildet, die von den lateinischen Pronomen <i>me, te, se</i> stammen." },
        { id: "tipirifl", label: "Echt, scheinbar, reziprok", x: 70, y: 80, color: "#a855f7", html: "Echt (mi lavo), scheinbar (mi lavo le mani), reziprok (ci salutiamo).", why: "Es hängt von der Funktion des Pronomens ab: Akkusativobjekt (echt), Dativobjekt (scheinbar), Handlung, die zwischen zwei oder mehr Subjekten ausgetauscht wird (reziprok)." },
        { id: "pronom", label: "Intransitive pronominale Verben", x: 92, y: 40, color: "#64748b", html: "Verben, die immer mit Pronomen stehen, aber nicht reflexiv sind: pentirsi, vergognarsi.", why: "Das Pronomen gehört zum Verb und bedeutet nicht „mich selbst“: Deshalb bestehen sie die Spiegelprobe nicht." }
      ],
      edges: [
        ["verbo", "trans", "kann sein"],
        ["verbo", "intr", "kann sein"],
        ["trans", "attiva", "Form"],
        ["trans", "passiva", "Form"],
        ["trans", "rifl", "Form"],
        ["passiva", "agente", "hat die"],
        ["rifl", "tipirifl", "kann sein"],
        ["intr", "pronom", "manchmal"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Aktiv, Passiv, Reflexiv",
      questions: [
        { type: "mc", q: "«Il quadro fu dipinto da Leonardo.» Das Verb steht im …", options: ["Aktiv", "Passiv", "Reflexiv"], answer: 1, explain: "Essere (fu) + Partizip (dipinto) + Agensangabe: Passiv." },
        { type: "mc", q: "«Le bambine si pettinano i capelli.» Das ist eine reflexive Form, und zwar …", options: ["echt reflexiv", "scheinbar reflexiv", "reziprok"], answer: 1, explain: "Das Akkusativobjekt ist «i capelli»; «si» bedeutet «a se stesse» (sich): scheinbar reflexiv." },
        { type: "tf", q: "Der Satz «Il bambino corre» kann ins Passiv gesetzt werden.", answer: false, explain: "«Correre» ist hier intransitiv, ohne Akkusativobjekt: kein Passiv." }
      ]
    }
  ],
  glossary: [
    { t: "Transitives Verb", d: "Verb, das ein Akkusativobjekt haben kann (leggere un libro)." },
    { t: "Intransitives Verb", d: "Verb, das kein Akkusativobjekt haben kann (dormire, andare)." },
    { t: "Absoluter Gebrauch", d: "Ein transitives Verb, das ohne ausgedrücktes Akkusativobjekt steht (Luca mangia)." },
    { t: "Aktiv", d: "Das Subjekt führt die Handlung aus." },
    { t: "Passiv", d: "Das Subjekt erleidet die Handlung; es wird mit essere/venire + Partizip Perfekt gebildet." },
    { t: "Agensangabe (complemento d'agente)", d: "Im Passivsatz gibt sie an, wer die Handlung ausführt (da + Person oder Tier)." },
    { t: "Complemento di causa efficiente", d: "Im Passivsatz gibt es die Sache an, die die Handlung ausführt (dal vento)." },
    { t: "Reflexive Form", d: "Die Handlung fällt auf das Subjekt zurück: mi lavo, ti vesti, si pettina." },
    { t: "Si passivante", d: "Das Teilchen si, das dem Verb passive Bedeutung gibt: si vendono case = case sono vendute." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welches dieser Verben ist intransitiv?", options: ["comprare", "partire", "disegnare"], answer: 1, explain: "Partire … was? Das ergibt keinen Sinn: intransitiv." },
      { type: "tf", q: "Ein transitives Verb ohne Akkusativobjekt («Marco legge») bleibt transitiv.", answer: true, explain: "Es ist ein absoluter Gebrauch: Das Akkusativobjekt könnte hinzugefügt werden." },
      { type: "mc", q: "Was ist die Passivform von «Il cuoco cucina la pasta»?", options: ["La pasta cucina il cuoco.", "La pasta è cucinata dal cuoco.", "Il cuoco si cucina la pasta."], answer: 1, explain: "Das Objekt wird zum Subjekt, essere + Partizip, Agensangabe." },
      { type: "mc", q: "In «Il ponte fu distrutto dalla piena» ist «dalla piena» …", options: ["Agensangabe", "causa efficiente (wirkende Ursache)", "moto da luogo (Ort, von dem aus)"], answer: 1, explain: "La piena (das Hochwasser) ist eine Sache (keine Person oder Tier): causa efficiente." },
      { type: "text", q: "Welches Hilfsverb benutzt man, um das Passiv zu bilden (außer «venire»)?", answer: ["essere", "l'ausiliare essere", "das Hilfsverb essere", "sein"], explain: "Das Passiv wird mit essere (oder venire) + Partizip Perfekt gebildet." },
      { type: "mc", q: "«Paolo e Luca si stringono la mano.» Welche Form ist das?", options: ["reziprok reflexiv", "Passiv", "einfaches Aktiv"], answer: 0, explain: "Der eine gibt dem anderen die Hand: reziprok reflexiv." },
      { type: "tf", q: "«Mi vergogno» ist ein Verb in echt reflexiver Form.", answer: false, explain: "Es bedeutet nicht «ich schäme mich selbst»: Es ist ein intransitives pronominales Verb." },
      { type: "mc", q: "Setze «Gli alunni hanno letto il racconto» ins Passiv.", options: ["Il racconto è letto dagli alunni.", "Il racconto è stato letto dagli alunni.", "Il racconto fu letto dagli alunni."], answer: 1, explain: "Hanno letto = passato prossimo → è stato letto (Perfekt im Passiv)." },
      { type: "order", q: "Bringe die Schritte zur Umwandlung eines Satzes ins Passiv in die richtige Reihenfolge.", items: ["Das Akkusativobjekt wird zum Subjekt", "Das Verb wird zu essere + Partizip Perfekt, in derselben Zeit", "Das Subjekt wird mit «da» zur Agensangabe"], explain: "Zuerst wählt man das neue Subjekt, dann wandelt man das Verb um, zuletzt verschiebt man den Handelnden." },
      { type: "mc", q: "Welcher Satz ist richtig?", options: ["Si vende appartamenti.", "Si vendono appartamenti.", "Si vendono appartamento."], answer: 1, explain: "Beim si passivante richtet sich das Verb nach dem Subjekt im Plural «appartamenti»." },
      { type: "mc", q: "Welches Verb kann KEINE Passivform haben?", options: ["costruire", "arrivare", "lavare"], answer: 1, explain: "Arrivare ist intransitiv: Es hat kein Akkusativobjekt, also kein Passiv." }
    ]
  }
});
