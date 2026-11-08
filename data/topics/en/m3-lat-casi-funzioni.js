TOPIC('en', {
  id: `m3-lat-casi-funzioni`,
  title: `The cases and their logical functions`,
  intro: `In English (and in Italian) we understand who does what thanks to <b>word order</b> and <b>prepositions</b>: "The dog bites the man" is very different from "The man bites the dog"! Latin, by contrast, shows it with the <b>end of the word</b>, the <b>ending</b>. Each ending corresponds to a <b>case</b>, and each case to a <b>logical function</b>. That is why the <b>grammatical analysis</b> you do in English is the key to understanding Latin. 🏛️📜`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Latin is a language "of endings"`,
      html: `<p>A variable Latin word has two parts:</p>
<ul>
<li>the <b>stem</b> (the part that does not change and carries the meaning): <i>ros-</i> = rose;</li>
<li>the <b>ending</b> (the final part that changes): <i>-a, -ae, -am, -is…</i> and it shows the <b>function</b> of the word in the sentence, the <b>number</b> (singular/plural) and often the <b>gender</b>.</li>
</ul>
<p>Look at these two sentences:</p>
<p><i>Puell<b>a</b> ros<b>am</b> amat.</i> = The girl loves the rose.<br>
<i>Ros<b>am</b> puell<b>a</b> amat.</i> = The girl loves the rose (same meaning!).</p>
<p>Even when the order changes, <i>puella</i> with the ending <b>-a</b> remains the subject, and <i>rosam</i> with <b>-am</b> remains the direct object. In Latin word order is <b>free</b> (although the most common position puts the verb at the end).</p>
<p>The whole set of forms of a noun is called its <b>declension</b>; "to decline" a noun means to list its cases.</p>`
    },
    {
      type: `text`, title: `2. The six cases and their functions`,
      html: `<table>
<tr><th>Case</th><th>Main logical function</th><th>Question</th><th>Example (1st declension)</th></tr>
<tr><td><b>Nominative</b></td><td>subject, predicate noun</td><td>who? what? (does the action)</td><td><i>puella</i> = the girl</td></tr>
<tr><td><b>Genitive</b></td><td>possessive / specifying complement</td><td>whose? of whom? of what?</td><td><i>puellae</i> = of the girl</td></tr>
<tr><td><b>Dative</b></td><td>indirect object</td><td>to whom? to what?</td><td><i>puellae</i> = to the girl</td></tr>
<tr><td><b>Accusative</b></td><td>direct object (and motion towards a place with <i>in, ad</i>)</td><td>whom? what? (undergoes)</td><td><i>puellam</i> = the girl</td></tr>
<tr><td><b>Vocative</b></td><td>form of address</td><td>(someone is called)</td><td><i>puella!</i> = O girl!</td></tr>
<tr><td><b>Ablative</b></td><td>many indirect complements: means, manner, cause, accompaniment (<i>cum</i>), location (<i>in</i>), time…</td><td>with what? how? where? when?</td><td><i>puellā</i> = with/from the girl</td></tr>
</table>
<p>The names of the cases come from Latin: <i>nominativus</i> (that which names), <i>genetivus</i> (of origin), <i>dativus</i> (from <i>dare</i>, to give), <i>accusativus</i>, <i>vocativus</i> (from <i>vocare</i> = to call), <i>ablativus</i> (from <i>auferre</i> = to carry away, because it also indicated removal).</p>`
    },
    {
      type: `svg`, title: `One sentence, four cases`,
      caption: `Puella nautae rosam dat = The girl gives a rose to the sailor. Each colour is a logical function, shown by the ending.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="20" y="40" width="140" height="70" rx="12" fill="#ef4444"/>
<rect x="170" y="40" width="140" height="70" rx="12" fill="#22c55e"/>
<rect x="320" y="40" width="140" height="70" rx="12" fill="#3b82f6"/>
<rect x="470" y="40" width="110" height="70" rx="12" fill="#64748b"/>
<text x="90" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">puell<tspan fill="#fde047">a</tspan></text>
<text x="240" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">naut<tspan fill="#fde047">ae</tspan></text>
<text x="390" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">ros<tspan fill="#fde047">am</tspan></text>
<text x="525" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">dat</text>
<text x="90" y="140" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">NOMINATIVE</text>
<text x="240" y="140" font-size="15" fill="#15803d" text-anchor="middle" font-weight="bold">DATIVE</text>
<text x="390" y="140" font-size="15" fill="#1d4ed8" text-anchor="middle" font-weight="bold">ACCUSATIVE</text>
<text x="525" y="140" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">VERB</text>
<text x="90" y="165" font-size="14" fill="#334155" text-anchor="middle">subject</text>
<text x="240" y="165" font-size="14" fill="#334155" text-anchor="middle">indirect object</text>
<text x="390" y="165" font-size="14" fill="#334155" text-anchor="middle">direct object</text>
<text x="525" y="165" font-size="14" fill="#334155" text-anchor="middle">predicate</text>
<text x="90" y="200" font-size="18" fill="#0f172a" text-anchor="middle">the girl</text>
<text x="240" y="200" font-size="18" fill="#0f172a" text-anchor="middle">to the sailor</text>
<text x="390" y="200" font-size="18" fill="#0f172a" text-anchor="middle">a rose</text>
<text x="525" y="200" font-size="18" fill="#0f172a" text-anchor="middle">gives</text>
<text x="300" y="250" font-size="17" fill="#854d0e" text-anchor="middle">The ending (in yellow) shows the case, even if you move the words:</text>
<text x="300" y="278" font-size="17" fill="#854d0e" text-anchor="middle" font-style="italic">Nautae rosam puella dat = same meaning!</text>
</svg>`
    },
    {
      type: `text`, title: `3. The first declension: rosa, rosae`,
      html: `<p>Nouns of the <b>first declension</b> end in the nominative singular in <b>-a</b> and in the genitive singular in <b>-ae</b>. Almost all are <b>feminine</b> (<i>rosa, puella, silva</i> = wood, <i>terra, aqua, insula</i> = island), but some masculine nouns of trades belong to the first: <i>nauta</i> (sailor), <i>agricola</i> (farmer), <i>poeta</i> (poet), <i>incola</i> (inhabitant).</p>
<table>
<tr><th>Case</th><th>Singular</th><th>Plural</th></tr>
<tr><td>Nominative</td><td>ros<b>a</b> – the rose</td><td>ros<b>ae</b> – the roses</td></tr>
<tr><td>Genitive</td><td>ros<b>ae</b> – of the rose</td><td>ros<b>arum</b> – of the roses</td></tr>
<tr><td>Dative</td><td>ros<b>ae</b> – to the rose</td><td>ros<b>is</b> – to the roses</td></tr>
<tr><td>Accusative</td><td>ros<b>am</b> – the rose</td><td>ros<b>as</b> – the roses</td></tr>
<tr><td>Vocative</td><td>ros<b>a</b> – O rose</td><td>ros<b>ae</b> – O roses</td></tr>
<tr><td>Ablative</td><td>ros<b>ā</b> – with the rose</td><td>ros<b>is</b> – with the roses</td></tr>
</table>
<p>Watch out for identical forms: <b>rosae</b> can be genitive singular, dative singular, nominative or vocative plural! The meaning is understood from the <b>context</b> and from the verb (singular or plural). Latin has no <b>article</b>: <i>rosa</i> = the rose / a rose.</p>
<p>There are <b>five</b> declensions in all, recognisable from the <b>genitive singular</b>: 1st -ae (<i>rosa, rosae</i>), 2nd -i (<i>dominus, domini</i>), 3rd -is (<i>rex, regis</i>), 4th -us (<i>manus, manus</i>), 5th -ei (<i>dies, diei</i>). That is why in the dictionary you always find the nominative and the genitive.</p>`
    },
    {
      type: `widget`, title: `Flashcards: decline rosa`,
      widget: `flashcards`,
      options: { cards: [
        { front: `nominative singular`, back: `rosa – the rose (subject)` },
        { front: `genitive singular`, back: `rosae – of the rose` },
        { front: `dative singular`, back: `rosae – to the rose` },
        { front: `accusative singular`, back: `rosam – the rose (object)` },
        { front: `ablative singular`, back: `rosā – with the rose` },
        { front: `genitive plural`, back: `rosarum – of the roses` },
        { front: `dative/ablative plural`, back: `rosis – to the roses / with the roses` },
        { front: `accusative plural`, back: `rosas – the roses (object)` }
      ] },
      caption: `Say the declension aloud like a chant: rosa, rosae, rosae, rosam, rosa, rosā…`
    },
    {
      type: `quiz`, title: `Mini-quiz: cases and endings`,
      questions: [
        { type: `mc`, q: `Which case expresses the direct object?`, options: [`Nominative`, `Accusative`, `Dative`], answer: 1, explain: `The accusative is the case of the direct object.` },
        { type: `mc`, q: `"Silvarum" is…`, options: [`genitive plural`, `accusative singular`, `ablative plural`], answer: 0, explain: `-arum is the genitive plural ending: "of the woods".` },
        { type: `tf`, q: `Latin has a definite article.`, answer: false, explain: `Latin has no articles: rosa = the rose or a rose.` }
      ]
    },
    {
      type: `text`, title: `4. From grammatical analysis to translation: the method`,
      html: `<p>To translate a Latin sentence you proceed like a detective:</p>
<ol>
<li><b>Find the verb</b> (usually at the end): from the ending you understand the person and number of the subject (<i>dat</i> = he/she gives).</li>
<li><b>Find the subject</b>: a nominative agreeing with the verb (singular if the verb is singular).</li>
<li><b>Find the direct object</b>: an accusative (if the verb is transitive).</li>
<li><b>Analyse the other cases</b>: genitive (of…), dative (to…), ablative (with, from, in…).</li>
<li><b>Choose the right meaning</b> from the dictionary and <b>reorder</b> in English.</li>
</ol>
<p>Example: <i>Agricola cum filiā in silvā ambulat.</i></p>
<ul>
<li><i>ambulat</i>: verb, 3rd person singular = walks;</li>
<li><i>agricola</i>: nominative singular = the farmer (subject);</li>
<li><i>cum filiā</i>: <i>cum</i> + ablative = accompaniment ➜ with the daughter;</li>
<li><i>in silvā</i>: <i>in</i> + ablative = location (where you are) ➜ in the wood.</li>
</ul>
<p>➜ <b>The farmer walks with his daughter in the wood.</b></p>
<p>⚠️ <i>in</i> + <b>ablative</b> = location (<i>in silvā</i> = in the wood); <i>in</i> + <b>accusative</b> = motion towards a place (<i>in silvam</i> = towards / into the wood).</p>`
    },
    {
      type: `widget`, title: `Game: which case is the underlined word in?`,
      widget: `classify`,
      options: {
        groups: [`Nominative`, `Genitive`, `Dative`, `Accusative`, `Ablative`],
        items: [
          [`PUELLA cantat (the girl sings)`, 0],
          [`NAUTAE navigant (the sailors sail)`, 0],
          [`ira DEAE (the goddess's anger)`, 1],
          [`insula NAUTARUM (the island of the sailors)`, 1],
          [`poetae ROSAS do (I give roses to the poet)`, 3],
          [`AGRICOLAE pecuniam do (I give money to the farmer)`, 2],
          [`magistra DISCIPULIS narrat (the teacher tells the pupils)`, 2],
          [`AQUAM porto (I carry the water)`, 3],
          [`in SILVĀ (in the wood)`, 4],
          [`cum FILIĀ (with the daughter)`, 4]
        ]
      },
      caption: `Reason first in English: is it subject, possessive, indirect object, direct object or another complement?`
    },
    {
      type: `example`, title: `Practical example: translating an inscription`,
      html: `<p>On an imaginary Roman tablet you read: <i>Incolae insulae deae aras parant.</i></p>
<ol>
<li><i>parant</i> = they prepare (3rd person plural) ➜ the subject is plural.</li>
<li><i>incolae</i>: nominative plural = the inhabitants (subject).</li>
<li><i>insulae</i>: genitive singular = of the island (specifying, it goes with <i>incolae</i>).</li>
<li><i>deae</i>: dative singular = to the goddess (indirect object).</li>
<li><i>aras</i>: accusative plural = the altars (direct object).</li>
</ol>
<p>➜ <b>The inhabitants of the island prepare the altars for the goddess.</b> Did you notice? <i>insulae</i> and <i>deae</i> have the same ending, but different functions: the sense of the sentence decides.</p>`
    },
    {
      type: `example`, title: `Practical example: the hidden cases in English and Italian`,
      html: `<p>English has largely lost the cases in nouns, but it has kept them in the <b>personal pronouns</b>:</p>
<ul>
<li><b>I</b> speak (subject = nominative, from Latin <i>ego</i>);</li>
<li>Luke sees <b>me</b> (object = accusative, from Latin <i>me</i>);</li>
<li>Luke gives <b>me</b> a book = gives a book <b>to me</b> (indirect object = dative, from Latin <i>mihi</i>).</li>
</ul>
<p>The same happens with <b>he/him</b>, <b>who/whom</b>. Moreover almost all Italian nouns come from the Latin <b>accusative</b>: <i>rosam</i> ➜ rosa, <i>montem</i> ➜ monte, <i>lupum</i> ➜ lupo (the final -m was no longer pronounced in speech already in the imperial age).</p>`
    },
    {
      type: `curiosity`, title: `Did you know… many living languages still have cases?`,
      html: `<p>German has 4 (Nominativ, Genitiv, Dativ, Akkusativ), Russian 6, Polish 7, Romanian keeps the genitive-dative and the vocative, Modern Greek 4. Finnish has about 15 and Hungarian more than 18! Latin had 6 (plus a small remnant of a seventh, the <b>locative</b>: <i>Romae</i> = at Rome, <i>domi</i> = at home).</p>`
    },
    {
      type: `curiosity`, title: `Did you know… we use Latin cases without knowing it?`,
      html: `<p>Many Latin expressions we use are in a precise case: <i>curriculum <b>vitae</b></i> (genitive: "the course <b>of life</b>"), <i>aqua <b>vitae</b></i>, <i>terra <b>incognita</b></i> (nominative), <i>ad <b>hoc</b></i> (accusative: "for this"), <i>in <b>extremis</b></i> (ablative plural: "at the last moments"), <i>a <b>priori</b></i> (ablative), <i>pro <b>forma</b></i> (ablative). And the name of the Latin language comes from <b>Latium</b> (<i>Latium</i>).</p>`
    },
    {
      type: `remember`, title: `To remember`,
      html: `<ul>
<li><b>Ending</b> = shows the <b>case</b> (logical function) and the <b>number</b>.</li>
<li>Nominative = subject; Genitive = of…; Dative = to…; Accusative = object; Vocative = O…!; Ablative = with, from, in (indirect complements).</li>
<li>First declension: <b>rosa, rosae</b> (gen. -ae), almost all feminine.</li>
<li>To translate: verb ➜ subject ➜ object ➜ other complements ➜ reorder.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `If the cases look like a wall to you, try looking at them from another side.`,
      tabs: [
        {
          label: `🏷️ The labels on the words`,
          html: `<p>Imagine that every Latin word carries a <b>label</b> attached to its end, like the tag on a suitcase: <i>-a</i> = "I am the subject", <i>-am</i> = "I am the object", <i>-ae</i> (with a verb like <i>dare</i>) = "I am the one to whom it is given".</p>
<p>In English, by contrast, words have no labels: their role depends on the <b>position</b> they occupy, like the players of a team who count for their <b>position</b> on the pitch. In Latin every player has the <b>role written on the shirt</b>: they can stand wherever they like, and you always know who the goalkeeper is!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<g font-size="22" font-weight="bold" text-anchor="middle">
<rect x="30" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="110" y="88" fill="#0f172a">ros</text>
<rect x="210" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="290" y="88" fill="#0f172a">puell</text>
<rect x="390" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="470" y="88" fill="#0f172a">am</text>
</g>
<polygon points="150,110 190,110 190,150 170,165 150,150" fill="#3b82f6"/>
<text x="170" y="140" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">am</text>
<polygon points="330,110 370,110 370,150 350,165 330,150" fill="#ef4444"/>
<text x="350" y="140" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">a</text>
<polygon points="510,110 550,110 550,150 530,165 510,150" fill="#64748b"/>
<text x="530" y="140" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">-at</text>
<text x="110" y="195" font-size="15" fill="#1d4ed8" text-anchor="middle">label: OBJECT</text>
<text x="290" y="195" font-size="15" fill="#b91c1c" text-anchor="middle">label: SUBJECT</text>
<text x="470" y="195" font-size="15" fill="#334155" text-anchor="middle">verb: am-at (loves)</text>
<text x="300" y="30" font-size="17" fill="#0f172a" text-anchor="middle" font-weight="bold">Rosam puella amat = The girl loves the rose</text>
</svg>`
        },
        {
          label: `🇩🇪 As in German and Russian`,
          html: `<p>If you study or hear German, you already know cases! But there they are carried mainly by the <b>article</b>:</p>
<ul>
<li><b>Der</b> Hund beißt <b>den</b> Mann = The dog bites the man (der = nominative, den = accusative).</li>
<li><b>Den</b> Mann beißt <b>der</b> Hund = same meaning, different order!</li>
</ul>
<p>In <b>Russian</b>, as in Latin, the ending of the noun changes: <i>мам<b>а</b></i> (mum, subject) ➜ <i>вижу мам<b>у</b></i> (I see mum, object). Russian, Romanian or Polish students find Latin cases much more natural than English speakers do!</p>`
        },
        {
          label: `🧩 Match case and question`,
          html: `<p>Each case answers a question of grammatical analysis. Connect the pairs.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Nominative`, `Who does the action?`],
            [`Genitive`, `Whose? Of what?`],
            [`Dative`, `To whom? To what?`],
            [`Accusative`, `Who/what undergoes the action?`],
            [`Vocative`, `Who am I calling?`],
            [`Ablative`, `With what? Where? How? When?`]
          ] }
        },
        {
          label: `🎨 The colours of grammatical analysis`,
          html: `<p>A trick used in many schools: give each logical function a <b>fixed colour</b>, in English and in Latin.</p>
<ul>
<li>🔴 red = subject (nominative)</li>
<li>⚫ black = verb</li>
<li>🔵 blue = direct object (accusative)</li>
<li>🟢 green = indirect object (dative)</li>
<li>🟡 yellow = specification (genitive)</li>
<li>🟣 purple = other complements (ablative)</li>
</ul>
<p>Colour the English sentence, then the Latin one: the words change places, but the colours stay the same!</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: cases and functions`,
      nodes: [
        { id: `flex`, label: `Inflected language`, x: 50, y: 6, color: `#64748b`, html: `Words change their ending to express the function.`, why: `Latin inherits its cases from <b>Indo-European</b>, the reconstructed parent language from which Greek, Sanskrit, the Germanic and Slavic languages also descend. Indo-European probably had 8 cases.` },
        { id: `des`, label: `Ending`, x: 25, y: 26, color: `#eab308`, html: `The final part that changes.`, why: `From Latin <i>desinere</i> = to end, to finish. It is attached to the stem of the word, which carries the meaning.` },
        { id: `decl`, label: `5 declensions`, x: 75, y: 26, color: `#a855f7`, html: `Groups of nouns with the same endings; recognised from the genitive singular.`, why: `The classification into five declensions comes from ancient and medieval grammarians (such as Priscian, 6th century): the genitive is the case where the differences show best.` },
        { id: `nom`, label: `Nominative`, x: 10, y: 52, color: `#ef4444`, html: `Subject and predicate noun.`, why: `It is the form with which the thing is "named" (<i>nominare</i>): for this reason it is the first form in the dictionary.` },
        { id: `gen`, label: `Genitive`, x: 28, y: 72, color: `#f59e0b`, html: `Specification: whose?`, why: `The name comes from a translation mistake: the Greek <i>genikḗ</i> meant "of the kind, of the category", but the Romans rendered it as <i>genetivus</i>, "of birth, of origin".` },
        { id: `dat`, label: `Dative`, x: 48, y: 52, color: `#22c55e`, html: `Indirect object: to whom?`, why: `From <i>dare</i>: it is the case of the one who receives something. Our English "me", "him" (in "give him") are its heirs.` },
        { id: `acc`, label: `Accusative`, x: 68, y: 72, color: `#3b82f6`, html: `Direct object; with <i>in, ad</i> motion towards a place.`, why: `Here too a translation mistake: the Greek <i>aitiatikḗ</i> (of the cause, of the effect) was confused with <i>aitiáomai</i> (to accuse) and became <i>accusativus</i>.` },
        { id: `abl`, label: `Ablative`, x: 88, y: 52, color: `#7c3aed`, html: `Means, manner, cause, accompaniment, place, time.`, why: `Greek did not have it: according to tradition the name goes back to Julius Caesar, author of a grammar treatise (<i>ablativus</i>, from <i>auferre</i>, to carry away). In Latin it "absorbed" three ancient Indo-European cases: ablative, instrumental and locative.` },
        { id: `ital`, label: `Legacy in Italian and English`, x: 50, y: 92, color: `#0ea5e9`, html: `Pronouns (I/me/mi) and nouns derived from the accusative.`, why: `In spoken Latin the final endings weakened (the -m was not pronounced, vowels were confused): prepositions and a fixed word order then took over, as in modern languages.` }
      ],
      edges: [
        [`flex`, `des`, `uses`], [`flex`, `decl`, `organises`], [`des`, `nom`, `case`], [`des`, `gen`, `case`], [`des`, `dat`, `case`], [`des`, `acc`, `case`], [`des`, `abl`, `case`],
        [`acc`, `ital`, `gives the origin of`], [`dat`, `ital`, `pronouns`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: translate`,
      questions: [
        { type: `mc`, q: `"Poeta puellis fabulam narrat" means…`, options: [`The girl tells a story to the poet.`, `The poet tells a story to the girls.`, `The girls tell the poet's stories.`], answer: 1, explain: `poeta = nom. (subject), puellis = dat. pl. (to the girls), fabulam = acc. (object).` },
        { type: `text`, q: `How do you say "in the wood" in Latin (in + ablative of silva)?`, answer: [`in silva`, `in silvā`], explain: `Location: in + ablative ➜ in silvā.` },
        { type: `tf`, q: `"Rosam puella amat" and "Puella rosam amat" have the same meaning.`, answer: true, explain: `The endings -a (subject) and -am (object) do not change.` }
      ]
    }
  ],
  glossary: [
    { t: `Case`, d: `The form a word takes to express its logical function.` },
    { t: `Ending`, d: `Variable final part that shows case and number.` },
    { t: `Stem`, d: `The invariable part of the word, which carries the meaning.` },
    { t: `Declension`, d: `The set of forms of a noun; in Latin there are five groups.` },
    { t: `Nominative`, d: `Case of the subject and of the predicate noun.` },
    { t: `Genitive`, d: `Case of the specifying complement.` },
    { t: `Dative`, d: `Case of the indirect object.` },
    { t: `Accusative`, d: `Case of the direct object.` },
    { t: `Vocative`, d: `Case used to call someone.` },
    { t: `Ablative`, d: `Case of many indirect complements (means, manner, place, time…).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `In Latin the logical function of a noun is understood above all from…`, options: [`the order of the words`, `the ending`, `the article`], answer: 1, explain: `The ending shows the case.` },
      { type: `mc`, q: `The case of the indirect object is…`, options: [`the genitive`, `the dative`, `the ablative`], answer: 1, explain: `Dative = to whom? to what?` },
      { type: `mc`, q: `"Rosarum" is…`, options: [`genitive plural`, `dative singular`, `accusative plural`], answer: 0, explain: `-arum = genitive plural (of the roses).` },
      { type: `num`, q: `How many cases does Latin have (not counting the locative)?`, answer: 6, tol: 0, explain: `Nominative, genitive, dative, accusative, vocative, ablative.` },
      { type: `num`, q: `How many Latin declensions are there?`, answer: 5, tol: 0, explain: `They are recognised from the genitive singular: -ae, -i, -is, -us, -ei.` },
      { type: `text`, q: `Write the accusative singular of "puella".`, answer: [`puellam`], explain: `1st declension: -am ➜ puellam.` },
      { type: `text`, q: `Write the genitive singular of "rosa".`, answer: [`rosae`], explain: `1st declension: genitive singular in -ae.` },
      { type: `tf`, q: `"Nauta" is a masculine noun of the first declension.`, answer: true, explain: `Masculine nouns of trades such as nauta, agricola, poeta are in the 1st declension.` },
      { type: `tf`, q: `"In silvam" indicates location (where you are).`, answer: false, explain: `In + accusative = motion towards (towards the wood); location is in + ablative.` },
      { type: `order`, q: `Put in order the steps for translating a Latin sentence.`, items: [`Find the verb`, `Find the subject in the nominative`, `Find the direct object in the accusative`, `Analyse the other complements`, `Reorder in English`], explain: `Starting from the verb helps to understand who the subject is.` },
      { type: `mc`, q: `"Agricolae filiae rosas dant" means…`, options: [`The farmers give the roses to the daughter.`, `The daughter gives the roses to the farmers.`, `The farmer gives the rose to the daughters.`], answer: 0, explain: `dant is plural ➜ agricolae nom. pl.; filiae dat. sing.; rosas acc. pl.` },
      { type: `mc`, q: `From which Latin case do almost all Italian nouns derive?`, options: [`Nominative`, `Accusative`, `Vocative`], answer: 1, explain: `rosam ➜ rosa, montem ➜ monte, lupum ➜ lupo.` }
    ]
  }
});
