TOPIC('de', {
  id: "p3-ita-coniugazioni",
  title: "Le tre coniugazioni (die drei Konjugationen)",
  intro: "Cantare, leggere, dormire: Alle italienischen Verben enden auf <b>-are</b>, <b>-ere</b> oder <b>-ire</b>. Das sind die <b>drei Konjugationen</b>, drei große „Familien“ von Verben 👨‍👩‍👧. Wir lernen, sie zu erkennen und die Verben in der <b>Vergangenheit</b>, der <b>Gegenwart</b> und der <b>Zukunft</b> zu konjugieren.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Der Infinitiv (infinito): der Name des Verbs",
      html: `<p>Wenn du ein Verb im Wörterbuch suchst, findest du es im <b>Infinitiv</b>: <i>cantare, leggere, dormire</i>. Der Infinitiv ist wie der „Taufname“ des Verbs: Er sagt nicht, <b>wer</b> die Handlung ausführt, und auch nicht, <b>wann</b>.</p>
<p>Jedes Verb im Infinitiv hat zwei Teile:</p>
<ul>
<li>die <b>Wurzel</b> (it. <i>radice</i>), die die Bedeutung trägt und sich meistens nicht ändert: <b>cant</b>-are, <b>legg</b>-ere, <b>dorm</b>-ire;</li>
<li>die <b>Endung</b> (it. <i>desinenza</i>), der Endteil, der sich ändert: cant-<b>are</b>, cant-<b>o</b>, cant-<b>erò</b>.</li>
</ul>
<p>Gerade an der Endung des Infinitivs erkennen wir, zu welcher <b>Konjugation</b> das Verb gehört.</p>`
    },
    {
      type: "svg",
      title: "Die drei Verbfamilien",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="30" width="175" height="240" rx="18" fill="#fee2e2" stroke="#dc2626" stroke-width="4"/>
<rect x="212" y="30" width="175" height="240" rx="18" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
<rect x="405" y="30" width="175" height="240" rx="18" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>
<text x="107" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#991b1b">1. Konjug.</text>
<text x="300" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#166534">2. Konjug.</text>
<text x="492" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#1e40af">3. Konjug.</text>
<text x="107" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#dc2626">-ARE</text>
<text x="300" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#16a34a">-ERE</text>
<text x="492" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#2563eb">-IRE</text>
<g font-size="20" text-anchor="middle" fill="#1f2937">
<text x="107" y="160">cant-are 🎤</text><text x="107" y="192">gioc-are ⚽</text><text x="107" y="224">salt-are 🐸</text>
<text x="300" y="160">legg-ere 📖</text><text x="300" y="192">cred-ere 🤔</text><text x="300" y="224">corr-ere 🏃</text>
<text x="492" y="160">dorm-ire 😴</text><text x="492" y="192">part-ire 🚂</text><text x="492" y="224">fin-ire 🏁</text>
</g>
<text x="107" y="258" font-size="15" text-anchor="middle" fill="#7f1d1d">die zahlreichste</text>
<text x="300" y="258" font-size="15" text-anchor="middle" fill="#14532d">viele unregelmäßige</text>
<text x="492" y="258" font-size="15" text-anchor="middle" fill="#1e3a8a">einige mit -isc-</text>
</svg>`,
      caption: "Wurzel + Endung: Die Endung des Infinitivs sagt uns die Familie des Verbs."
    },
    {
      type: "widget",
      title: "Spiel: In welche Familie gehört es?",
      widget: "classify",
      options: {
        groups: ["-ARE (1.)", "-ERE (2.)", "-IRE (3.)"],
        items: [
          ["🎨 disegnare", 0], ["🏊 nuotare", 0], ["🍝 mangiare", 0], ["👀 guardare", 0],
          ["✍️ scrivere", 1], ["👁️ vedere", 1], ["🏃 correre", 1], ["🙂 sorridere", 1],
          ["🎧 sentire", 2], ["🚪 aprire", 2], ["🧹 pulire", 2], ["🥣 servire", 2]
        ]
      },
      caption: "Sieh dir nur das Ende des Infinitivs an und leg jedes Verb in seine Familie."
    },
    {
      type: "text",
      title: "Die Gegenwart (presente): Die Endungen ändern sich mit der Person",
      html: `<p>Das Verb ändert die Endung je nachdem, <b>wer</b> die Handlung ausführt (die <b>Person</b>):</p>
<table>
<tr><th>Person</th><th>CANT-ARE</th><th>CRED-ERE</th><th>DORM-IRE</th></tr>
<tr><td>io (ich)</td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>tu (du)</td><td>cant<b>i</b></td><td>cred<b>i</b></td><td>dorm<b>i</b></td></tr>
<tr><td>lui/lei (er/sie)</td><td>cant<b>a</b></td><td>cred<b>e</b></td><td>dorm<b>e</b></td></tr>
<tr><td>noi (wir)</td><td>cant<b>iamo</b></td><td>cred<b>iamo</b></td><td>dorm<b>iamo</b></td></tr>
<tr><td>voi (ihr)</td><td>cant<b>ate</b></td><td>cred<b>ete</b></td><td>dorm<b>ite</b></td></tr>
<tr><td>loro (sie)</td><td>cant<b>ano</b></td><td>cred<b>ono</b></td><td>dorm<b>ono</b></td></tr>
</table>
<p>Hast du es bemerkt? Die Endungen von <b>io</b> (-o), <b>tu</b> (-i) und <b>noi</b> (-iamo) sind für alle drei Familien gleich! Bei <b>voi</b> sieht man den Vokal der Familie: cant<b>a</b>te, cred<b>e</b>te, dorm<b>i</b>te.</p>
<p><b>Achtung:</b> Viele Verben auf -ire fügen in manchen Personen <b>-isc-</b> ein: fin<b>isc</b>o, fin<b>isc</b>i, fin<b>isc</b>e, finiamo, finite, fin<b>isc</b>ono. So machen es auch capire, pulire, colpire, preferire.</p>`
    },
    {
      type: "text",
      title: "Vergangenheit und Zukunft",
      html: `<p>Das Verb ändert sich auch, um zu sagen, <b>wann</b> die Handlung geschieht. Hier sind drei Zeiten des Indikativs, in der Person «io»:</p>
<table>
<tr><th>Zeit</th><th>CANTARE</th><th>CREDERE</th><th>DORMIRE</th></tr>
<tr><td>⬅️ <b>Passato prossimo</b> (abgeschlossene Handlung)</td><td>ho cant<b>ato</b></td><td>ho cred<b>uto</b></td><td>ho dorm<b>ito</b></td></tr>
<tr><td>⬅️ <b>Imperfetto</b> (Gewohnheit, Beschreibung)</td><td>cant<b>avo</b></td><td>cred<b>evo</b></td><td>dorm<b>ivo</b></td></tr>
<tr><td>⏺️ <b>Presente</b> (Gegenwart)</td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>➡️ <b>Futuro semplice</b> (Futur)</td><td>cant<b>erò</b></td><td>cred<b>erò</b></td><td>dorm<b>irò</b></td></tr>
</table>
<ul>
<li>Das <b>passato prossimo</b> ist eine <b>zusammengesetzte</b> Zeit: Hilfsverb (avere oder essere) + <b>Partizip Perfekt</b> auf -ato, -uto, -ito. Z. B.: «sono partito», «ho cantato».</li>
<li>Im <b>Futur</b> verwandelt die erste Konjugation das <b>a</b> in <b>e</b>: cant<b>a</b>re → cant<b>e</b>rò (nicht «cantarò»!).</li>
<li>Im Futur liegt der Akzent auf der letzten Silbe: cante<b>rò</b>, cante<b>rà</b>: Vergiss das nicht!</li>
</ul>`
    },
    {
      type: "svg",
      title: "Der Zeitpfeil",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<line x1="40" y1="140" x2="540" y2="140" stroke="#78350f" stroke-width="6"/>
<polygon points="540,125 575,140 540,155" fill="#78350f"/>
<circle cx="120" cy="140" r="16" fill="#a855f7"/>
<circle cx="300" cy="140" r="20" fill="#16a34a"/>
<circle cx="480" cy="140" r="16" fill="#2563eb"/>
<text x="120" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#7e22ce">VERGANGENHEIT</text>
<text x="300" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#15803d">GEGENWART</text>
<text x="480" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#1d4ed8">ZUKUNFT</text>
<text x="120" y="95" font-size="18" text-anchor="middle" fill="#1f2937">gestern</text>
<text x="300" y="95" font-size="18" text-anchor="middle" fill="#1f2937">jetzt</text>
<text x="480" y="95" font-size="18" text-anchor="middle" fill="#1f2937">morgen</text>
<text x="120" y="190" font-size="20" text-anchor="middle" fill="#1f2937">ho giocato</text>
<text x="120" y="218" font-size="20" text-anchor="middle" fill="#1f2937">giocavo</text>
<text x="300" y="190" font-size="20" text-anchor="middle" fill="#1f2937">gioco</text>
<text x="480" y="190" font-size="20" text-anchor="middle" fill="#1f2937">giocherò</text>
<text x="480" y="225" font-size="15" text-anchor="middle" fill="#92400e">(c + h für den harten Laut)</text>
</svg>`,
      caption: "Dasselbe Verb, giocare, ändert seine Form, je nachdem, wann die Handlung geschieht."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Familien und Personen",
      questions: [
        { type: "mc", q: "«Scrivere» gehört zur …", options: ["1. Konjugation", "2. Konjugation", "3. Konjugation"], answer: 1, explain: "Es endet auf -ere: zweite Konjugation." },
        { type: "text", q: "Konjugiere «parlare» im Presente mit «noi».", answer: ["parliamo", "noi parliamo"], explain: "Noi parl-iamo." },
        { type: "mc", q: "Welche Form ist das richtige Futur von «cantare» (io)?", options: ["cantarò", "canterò", "cantirò"], answer: 1, explain: "In der 1. Konjugation wird das -a- zu -e-: canterò." }
      ]
    },
    {
      type: "example",
      title: "Praxisbeispiel: Matteos Tagebuch",
      html: `<p><i>«Ieri <b>ho giocato</b> a calcio e <b>ho vinto</b>. Quando ero piccolo <b>dormivo</b> sempre dopo pranzo. Oggi <b>leggo</b> un fumetto. Domani <b>partirò</b> per la montagna e <b>camminerò</b> tanto.»</i> (Gestern habe ich Fußball gespielt und gewonnen. Als ich klein war, habe ich nach dem Mittagessen immer geschlafen. Heute lese ich einen Comic. Morgen fahre ich in die Berge und werde viel wandern.)</p>
<table>
<tr><th>Verb</th><th>Infinitiv</th><th>Konjugation</th><th>Zeit</th></tr>
<tr><td>ho giocato</td><td>giocare</td><td>1.</td><td>passato prossimo</td></tr>
<tr><td>ho vinto</td><td>vincere</td><td>2.</td><td>passato prossimo</td></tr>
<tr><td>dormivo</td><td>dormire</td><td>3.</td><td>imperfetto</td></tr>
<tr><td>leggo</td><td>leggere</td><td>2.</td><td>presente</td></tr>
<tr><td>partirò</td><td>partire</td><td>3.</td><td>futuro</td></tr>
<tr><td>camminerò</td><td>camminare</td><td>1.</td><td>futuro</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: den Infinitiv finden",
      html: `<p>Um die Konjugation eines konjugierten Verbs zu erfahren, musst du zuerst <b>zum Infinitiv zurückgehen</b>. Frag dich: „Wie heißt es, diese Handlung zu tun?“</p>
<ul>
<li>«Noi <b>ridiamo</b>» → was tun wir? <b>ridere</b> (lachen) → 2. Konjugation.</li>
<li>«Voi <b>aprite</b>» → <b>aprire</b> (öffnen) → 3. Konjugation.</li>
<li>«Loro <b>ballavano</b>» → <b>ballare</b> (tanzen) → 1. Konjugation.</li>
<li>«Tu <b>capirai</b>» → <b>capire</b> (verstehen) → 3. Konjugation.</li>
</ul>
<p>Trick: Versuch, davor «<b>Devo</b> …» (ich muss) zu sagen: «Devo ridere», «Devo aprire», «Devo ballare». Nach «devo» steht das Verb immer im Infinitiv!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Neue Verben enden alle auf -are",
      html: `<p>Wenn im Italienischen ein neues Verb entsteht, endet es fast immer auf <b>-are</b>: <i>cliccare, chattare, postare, zoomare, scannerizzare, googlare</i>. Die erste Konjugation ist die größte Familie (sie enthält die meisten italienischen Verben) und auch die regelmäßigste: Darum nimmt sie die Neuankömmlinge auf! 📱</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Im Lateinischen gab es vier Familien",
      html: `<p>Das <b>Lateinische</b>, die Sprache, aus der das Italienische entstanden ist, hatte <b>vier</b> Konjugationen: <i>amāre, timēre, legĕre, audīre</i>. Zwei davon (die von <i>timēre</i> mit dem Akzent auf dem «e» und die von <i>legĕre</i> mit dem Akzent weiter vorn) haben sich in unserer 2. Konjugation vereint. Darum sagen wir te<b>mé</b>re, aber <b>lèg</b>gere: zwei verschiedene Betonungen in derselben Familie!</p>`
    },
    {
      type: "remember",
      title: "Merk dir das",
      html: `<ul>
<li>1. Konjugation: <b>-are</b> · 2.: <b>-ere</b> · 3.: <b>-ire</b>.</li>
<li>Verb = <b>Wurzel</b> (Bedeutung) + <b>Endung</b> (Person und Zeit).</li>
<li>Personen: io, tu, lui/lei (Singular) · noi, voi, loro (Plural).</li>
<li>Passato prossimo = Hilfsverb + Partizip (-ato, -uto, -ito).</li>
<li>Futur: cant-<b>erò</b> (das -a- wird zu -e-), cred-<b>erò</b>, dorm-<b>irò</b>.</li>
<li>Essere und avere haben eine eigene Konjugation: Sie sind unregelmäßig.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Konjugationen zu verstehen",
      intro: "Die Tabellen wollen nicht in deinen Kopf? Probier es mit einer Maschine, einem anderen Land, Karten oder einem Zuordnungsspiel.",
      tabs: [
        {
          label: "⚙️ Die Verbmaschine",
          html: `<p>Stell dir eine Maschine mit zwei Rädchen vor. Das erste Rädchen wählt, <b>wer</b> (io, tu, lui …), das zweite, <b>wann</b> (gestern, heute, morgen). Steck die Wurzel hinein, und die Maschine klebt die richtige Endung an!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f1f5f9"/>
<rect x="30" y="100" width="120" height="60" rx="10" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="90" y="138" font-size="24" font-weight="bold" text-anchor="middle" fill="#713f12">CANT-</text>
<path d="M155 130 L200 130" stroke="#334155" stroke-width="5"/>
<polygon points="200,120 218,130 200,140" fill="#334155"/>
<rect x="220" y="50" width="200" height="160" rx="20" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<circle cx="280" cy="110" r="38" fill="#f472b6" stroke="#9d174d" stroke-width="4"/>
<circle cx="360" cy="150" r="38" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<text x="280" y="117" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">WER?</text>
<text x="360" y="157" font-size="18" font-weight="bold" text-anchor="middle" fill="#ffffff">WANN?</text>
<text x="280" y="175" font-size="16" text-anchor="middle" fill="#1f2937">noi</text>
<text x="360" y="85" font-size="16" text-anchor="middle" fill="#1f2937">domani</text>
<path d="M425 130 L470 130" stroke="#334155" stroke-width="5"/>
<polygon points="470,120 488,130 470,140" fill="#334155"/>
<rect x="490" y="100" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="540" y="128" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">cant-</text>
<text x="540" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">eremo</text>
</svg>`
        },
        {
          label: "🇬🇧 Ist es auf Englisch leichter?",
          html: `<p>Im <b>Englischen</b> ändern sich die Verben sehr wenig: Darum müssen die Engländer <b>immer</b> das Subjekt sagen.</p>
<table>
<tr><th>Italienisch</th><th>Englisch</th></tr>
<tr><td>canto, canti, canta</td><td>I sing, you sing, he sing<b>s</b></td></tr>
<tr><td>ho cantato</td><td>I sang (Vergangenheit)</td></tr>
<tr><td>canterò</td><td>I <b>will</b> sing (Futur mit «will»)</td></tr>
<tr><td>gioco → ho giocato</td><td>I play → I play<b>ed</b></td></tr>
</table>
<p>Im Italienischen dagegen sagt die Endung schon, wer die Handlung ausführt: «<b>Cantiamo</b>!» heißt zwangsläufig „wir singen“. Wir können das Subjekt auch weglassen! (Im Deutschen geht das nicht: Wir sagen immer „ich singe“, „wir singen“.)</p>`
        },
        {
          label: "🎵 Der Vokal-Trick",
          html: `<p>Jede Familie hat ihren <b>Herzvokal</b>, den, der vor -re steht:</p>
<ul>
<li>cant-<b>A</b>-re → cant<b>a</b>te, cant<b>a</b>vo, cant<b>a</b>to</li>
<li>cred-<b>E</b>-re → cred<b>e</b>te, cred<b>e</b>vo (aber credu-to)</li>
<li>dorm-<b>I</b>-re → dorm<b>i</b>te, dorm<b>i</b>vo, dorm<b>i</b>to</li>
</ul>
<p>In der Person <b>voi</b> und im <b>Imperfetto</b> sieht man den Herzvokal immer: Wenn du ihn dir merkst, machst du viel weniger Fehler!</p>`
        },
        {
          label: "🃏 Verbkarten",
          html: `<p>Vorne steht ein konjugiertes Verb. Versuch, Infinitiv, Konjugation und Zeit zu nennen, dann dreh die Karte um.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "nuoteremo", back: "nuotare · 1. · Futur · noi" },
              { front: "hai letto", back: "leggere · 2. · passato prossimo · tu" },
              { front: "sentivano", back: "sentire · 3. · Imperfekt · loro" },
              { front: "corre", back: "correre · 2. · Presente · lui/lei" },
              { front: "finisco", back: "finire · 3. (mit -isc-) · Presente · io" },
              { front: "giocavate", back: "giocare · 1. · Imperfekt · voi" }
            ]
          }
        },
        {
          label: "🔗 Ordne Person und Endung zu",
          html: `<p>Verb «dormire» im Presente: Verbinde jede Person mit ihrer Form.</p>`,
          widget: "match",
          options: { pairs: [["io", "dormo"], ["tu", "dormi"], ["lui", "dorme"], ["noi", "dormiamo"], ["voi", "dormite"], ["loro", "dormono"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Konjugationen: Tipp einen Knoten an und entdecke das Warum",
      nodes: [
        { id: "verbo", label: "Verb", x: 50, y: 6, color: "#2563eb", html: "Wort, das eine Handlung oder einen Zustand ausdrückt.", why: "Ohne Verb gibt es keinen Satz: Es ist der „Motor“, der sagt, was geschieht. Schon die griechischen Grammatiker nannten es <i>rhêma</i>, „das, was man über das Subjekt sagt“." },
        { id: "infinito", label: "Infinitiv", x: 50, y: 26, color: "#0ea5e9", html: "Die „Grundform“ des Verbs: cantare, leggere, dormire.", why: "Er heißt „infinito“ (unbegrenzt), weil er „nicht festgelegt“ ist: Er sagt nicht, wer die Handlung ausführt, und auch nicht, wann. Darum führen die Wörterbücher die Verben im Infinitiv auf." },
        { id: "are", label: "1.: -are", x: 18, y: 46, color: "#dc2626", html: "Die größte und regelmäßigste Familie: amare, giocare.", why: "Sie kommt von der 1. lateinischen Konjugation (<i>amāre</i>), die schon sehr regelmäßig war: Darum kommen neue Verben (chattare, cliccare) hier hinein." },
        { id: "ere", label: "2.: -ere", x: 50, y: 46, color: "#16a34a", html: "Credere, leggere, vedere: viele unregelmäßige Verben.", why: "Sie entstand aus der Vereinigung von zwei lateinischen Konjugationen (<i>timēre</i> und <i>legĕre</i>). Darum enthält sie Verben mit verschiedener Betonung und viele Unregelmäßigkeiten (letto, scritto, visto)." },
        { id: "ire", label: "3.: -ire", x: 82, y: 46, color: "#2563eb", html: "Dormire, partire, finire.", why: "Sie kommt von der 4. lateinischen Konjugation (<i>audīre</i>). Das eingefügte <b>-isc-</b> (finisco) stammt von einem lateinischen Suffix, das eine beginnende oder sich entwickelnde Handlung ausdrückte (<i>-esco</i>)." },
        { id: "desinenza", label: "Wurzel + Endung", x: 22, y: 70, color: "#f59e0b", html: "Cant- (Bedeutung) + -iamo (wer und wann).", why: "Das Italienische ist wie das Lateinische eine „flektierende“ Sprache: Es steckt die Informationen in das Wort, indem es dessen Ende ändert. So sagt ein einziges Wort («cantiamo») Handlung, Person, Zahl und Zeit." },
        { id: "persone", label: "Die sechs Personen", x: 50, y: 92, color: "#ec4899", html: "Io, tu, lui/lei, noi, voi, loro.", why: "Es gibt drei Personen (wer spricht, wer zuhört, über wen gesprochen wird), jede im Singular und im Plural: 3 × 2 = 6 Formen." },
        { id: "tempi", label: "Vergangenheit, Gegenwart, Zukunft", x: 78, y: 70, color: "#a855f7", html: "Ho cantato / cantavo · canto · canterò.", why: "Das italienische Futur entstand aus dem gesprochenen Latein: «cantare habeo» (ich habe zu singen) → «canterò». Tatsächlich ähneln die Futurendungen (-ò, -ai, -à, -emo, -ete, -anno) dem Verb avere!" },
        { id: "irregolari", label: "Unregelmäßige Verben", x: 85, y: 90, color: "#64748b", html: "Essere, avere, andare, fare: Sie folgen den Regeln nicht.", why: "Das sind die meistgebrauchten Verben: Weil sie über die Jahrhunderte so oft wiederholt wurden, haben sie sich „abgenutzt“ und verwandelt, wie eine Münze, die von Hand zu Hand geht." }
      ],
      edges: [
        ["verbo", "infinito", "sucht man im"],
        ["infinito", "are", "endet auf"],
        ["infinito", "ere", "endet auf"],
        ["infinito", "ire", "endet auf"],
        ["are", "desinenza", "wird konjugiert durch Ändern der"],
        ["desinenza", "persone", "sagt die"],
        ["ire", "tempi", "und auch die Zeit"],
        ["tempi", "irregolari", "Ausnahmen:"],
        ["desinenza", "tempi", "sagt die"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Zeiten",
      questions: [
        { type: "mc", q: "«Partivamo» ist …", options: ["Presente", "Imperfetto", "Futur"], answer: 1, explain: "Die Endung -ivamo zeigt das Imperfetto (3. Konjugation)." },
        { type: "mc", q: "Das Partizip Perfekt von «dormire» ist …", options: ["dormato", "dormuto", "dormito"], answer: 2, explain: "3. Konjugation: -ito → dormito." },
        { type: "tf", q: "«Ho mangiato» ist eine zusammengesetzte Zeit.", answer: true, explain: "Sie besteht aus zwei Wörtern: dem Hilfsverb «ho» und dem Partizip «mangiato»." }
      ]
    }
  ],
  glossary: [
    { t: "Coniugazione", d: "Konjugation: Familie von Verben mit derselben Endung im Infinitiv (-are, -ere, -ire); auch die Gesamtheit aller Formen eines Verbs." },
    { t: "Infinito", d: "Infinitiv: die Grundform des Verbs, die im Wörterbuch steht (cantare)." },
    { t: "Radice", d: "Wurzel: der Teil des Verbs, der die Bedeutung trägt (cant-)." },
    { t: "Desinenza", d: "Endung: der Endteil des Verbs, der sich mit Person und Zeit ändert (-iamo, -erò)." },
    { t: "Persona", d: "Person: wer die Handlung ausführt: io, tu, lui/lei, noi, voi, loro." },
    { t: "Tempo semplice", d: "Einfache Zeit: aus einem einzigen Wort gebildet (canto, cantavo, canterò)." },
    { t: "Tempo composto", d: "Zusammengesetzte Zeit: aus Hilfsverb + Partizip gebildet (ho cantato)." },
    { t: "Participio passato", d: "Partizip Perfekt: Verbform auf -ato, -uto, -ito." },
    { t: "Imperfetto", d: "Imperfekt: Vergangenheitszeit, die Gewohnheiten oder Situationen beschreibt (giocavo)." },
    { t: "Futuro semplice", d: "Futur: Zeit für eine Handlung, die geschehen wird (giocherò)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Zu welcher Konjugation gehört «capire»?", options: ["1.", "2.", "3."], answer: 2, explain: "Es endet auf -ire: 3. Konjugation." },
      { type: "mc", q: "Was ist der Infinitiv von «vedevamo»?", options: ["vedare", "vedere", "vedire"], answer: 1, explain: "Vedere, 2. Konjugation." },
      { type: "text", q: "Konjugiere «ballare» im Futur mit «io».", answer: ["ballero", "io ballero", "ballerò", "io ballerò"], explain: "Io ballerò: Das -a- wird zu -e-." },
      { type: "tf", q: "Im Presente ist die Endung von «noi» bei allen drei Konjugationen -iamo.", answer: true, explain: "Cantiamo, crediamo, dormiamo." },
      { type: "mc", q: "In «Loro aprono la porta» steht das Verb im …", options: ["passato prossimo", "Presente", "Futur"], answer: 1, explain: "Aprono: Presente von aprire, 3. Person Plural." },
      { type: "mc", q: "Welche Form ist falsch?", options: ["voi correte", "voi dormite", "voi cantete"], answer: 2, explain: "Cantare gehört zur 1. Konjugation: voi cantate." },
      { type: "text", q: "Schreib das Partizip Perfekt von «credere».", answer: ["creduto"], explain: "2. Konjugation: -uto → creduto." },
      { type: "mc", q: "Welches Verb bekommt im Presente -isc-?", options: ["dormire", "pulire", "partire"], answer: 1, explain: "Io pulisco, tu pulisci, lui pulisce." },
      { type: "order", q: "Bring in die Reihenfolge von der Vergangenheit zur Zukunft.", items: ["ho saltato", "salto", "salterò"], explain: "Passato prossimo, Presente, Futur." },
      { type: "mc", q: "In «Tu leggevi un fumetto» ist das Verb …", options: ["Imperfetto, 2. Konjugation", "Presente, 2. Konjugation", "Imperfetto, 3. Konjugation"], answer: 0, explain: "Leggere (2.), Endung -evi des Imperfetto." },
      { type: "tf", q: "Neue Verben wie «chattare» kommen meistens in die 3. Konjugation.", answer: false, explain: "Sie kommen in die 1. Konjugation, auf -are." },
      { type: "text", q: "Konjugiere «sentire» im Presente mit «voi».", answer: ["sentite", "voi sentite"], explain: "Voi sent-ite." }
    ]
  }
});
