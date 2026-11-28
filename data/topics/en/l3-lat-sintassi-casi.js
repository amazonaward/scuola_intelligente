TOPIC('en', {
  id: `l3-lat-sintassi-casi`,
  title: `Syntax of the cases`,
  intro: `In your first two years you learnt <b>what the cases are</b> and the main functions they express. Now it is time to step up: Latin does not have a preposition for everything, and every case hides <b>special constructions</b> that English renders with quite different turns of phrase. The genitive is not just "of", the dative is not just "to", and the ablative is a real "Swiss army knife" that does the job of six or seven different phrases. Learning the <b>syntax of the cases</b> means no longer translating word for word and starting to <b>recognise patterns</b>: it is the key to tackling the authors (Caesar, Cicero, Sallust) without fear. 🏛️`,
  minutes: 60,
  sections: [
    {
      type: `text`, title: `1. The nominative and the vocative`,
      html: `<p>The <b>nominative</b> is the case of the subject and of the <b>predicate noun</b> (with <i>sum</i> and other linking verbs). Beyond that, you need to know three special features:</p>
<ul>
<li><b>Double nominative</b>: with the verbs <i>videor</i> (I seem), <i>dicor</i> (I am said), <i>putor</i> (I am thought), <i>existimor</i>, <i>appellor</i>, <i>nominor</i> the construction is <b>personal</b>: <i>Romulus primus rex Romae esse dicitur</i> "Romulus is said to have been the first king of Rome" (literally "Romulus is said to be…"). Here English can follow the Latin closely, while Italian prefers an impersonal form ("it is said that…").</li>
<li><b>Verbs of naming in the passive</b>: <i>Cicero pater patriae appellatus est</i> "Cicero was called father of his country". In the active you would have a <b>double accusative</b>: <i>Ciceronem patrem patriae appellaverunt</i> (see below).</li>
<li><b>Nominative and infinitive</b>: in the personal construction the two nominatives agree, whereas in the impersonal construction (typically in compound tenses: <i>traditum est</i>, "it has been handed down") the subject moves into the accusative and infinitive.</li>
</ul>
<p>The <b>vocative</b> is used to address someone: it is the same as the nominative except for second-declension nouns in <i>-us</i> (<i>Brute</i>) and nouns in <i>-ius</i> (<i>Vergili</i>, <i>mi fili</i>).</p>`
    },
    {
      type: `text`, title: `2. The genitive: more than "of"`,
      html: `<p>Besides simply linking one noun to another, the genitive has several typical uses. Learn to recognise them from the word they depend on.</p>
<table>
<tr><th>Type</th><th>Structure</th><th>Example</th></tr>
<tr><td><b>subjective</b></td><td>the noun in the genitive performs the action</td><td><i>amor patris</i> "the father's love (the father loves)"</td></tr>
<tr><td><b>objective</b></td><td>the noun in the genitive receives the action</td><td><i>amor patriae</i> "love for one's country"</td></tr>
<tr><td><b>partitive</b></td><td>after words of quantity, pronouns, superlatives</td><td><i>pars militum</i>, <i>nihil novi</i>, <i>quis nostrum?</i>, <i>fortissimus Gallorum</i></td></tr>
<tr><td><b>of quality</b></td><td>noun + adjective (always with an adjective!)</td><td><i>vir magnae sapientiae</i> "a man of great wisdom"</td></tr>
<tr><td><b>of characteristic</b></td><td><i>est</i> + genitive = "it is the duty/mark of"</td><td><i>Sapientis est tacere</i> "It is the mark of a wise man to keep silent"</td></tr>
<tr><td><b>of value</b></td><td>with <i>aestimo, facio, pendo, duco</i></td><td><i>magni aestimare</i>, <i>pluris</i>, <i>minimi facere</i></td></tr>
<tr><td><b>of charge and penalty</b></td><td>with <i>accuso, damno, absolvo, convinco</i></td><td><i>accusare aliquem furti</i> "to accuse someone of theft"; <i>capitis damnare</i> "to condemn to death"</td></tr>
</table>
<p>Watch out for the <b>genitive of characteristic</b>: in English we say "it is the duty of…", "it is typical of…", "it is up to…". In the <i>Philippics</i> (XII), Cicero writes the famous sentence <b>"Cuiusvis hominis est errare"</b>, "any man can make a mistake" (literally "it is the mark of any man to err"), and goes on: "nullius nisi insipientis in errore perseverare", "but only a fool persists in error".</p>
<p>The genitive of value appears in fixed forms: <i>magni, parvi, pluris, minoris, tanti, quanti, nihili</i> (<i>Hoc mihi magni est</i> "This is of great value to me"). An exact price, on the other hand, goes in the ablative: <i>decem sestertiis emere</i>.</p>`
    },
    {
      type: `svg`, title: `Subjective and objective genitive`,
      caption: `The same phrase, amor patris, can have two opposite meanings: the context decides.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#4c1d95" text-anchor="middle">Amor patris: who loves whom?</text>
<rect x="40" y="60" width="230" height="150" rx="14" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/>
<text x="155" y="90" font-size="17" font-weight="bold" fill="#5b21b6" text-anchor="middle">SUBJECTIVE</text>
<circle cx="90" cy="140" r="26" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="90" y="146" font-size="14" fill="#1e293b" text-anchor="middle">father</text>
<line x1="118" y1="140" x2="190" y2="140" stroke="#dc2626" stroke-width="4"/>
<polygon points="190,140 178,132 178,148" fill="#dc2626"/>
<circle cx="225" cy="140" r="26" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="225" y="146" font-size="14" fill="#1e293b" text-anchor="middle">children</text>
<text x="155" y="195" font-size="15" fill="#334155" text-anchor="middle">the father's love</text>
<rect x="330" y="60" width="230" height="150" rx="14" fill="#ffffff" stroke="#0891b2" stroke-width="3"/>
<text x="445" y="90" font-size="17" font-weight="bold" fill="#155e75" text-anchor="middle">OBJECTIVE</text>
<circle cx="380" cy="140" r="26" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="380" y="146" font-size="14" fill="#1e293b" text-anchor="middle">children</text>
<line x1="408" y1="140" x2="480" y2="140" stroke="#dc2626" stroke-width="4"/>
<polygon points="480,140 468,132 468,148" fill="#dc2626"/>
<circle cx="515" cy="140" r="26" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="515" y="146" font-size="14" fill="#1e293b" text-anchor="middle">father</text>
<text x="445" y="195" font-size="15" fill="#334155" text-anchor="middle">love FOR the father</text>
<text x="300" y="255" font-size="15" fill="#4c1d95" text-anchor="middle">The arrow goes from the one who acts to the one who receives the action</text>
<text x="300" y="278" font-size="14" fill="#334155" text-anchor="middle">Metus hostium = fear of the enemy (objective: the enemy is feared)</text>
</svg>`
    },
    {
      type: `text`, title: `3. The dative: possession, purpose, interest`,
      html: `<p>The dative answers the question <i>to whom? / for whom?</i>, but in texts it appears in constructions you cannot translate with a simple "to".</p>
<ul>
<li><b>Dative of possession</b>: <i>sum</i> + dative = "to have": <i>Est mihi liber</i> "I have a book" (literally "there is a book to me"). The owner is in the dative, the thing owned in the nominative. With <i>nomen est</i> the name itself often goes in the dative too: <i>Mihi nomen est Marco</i>.</li>
<li><b>Dative of purpose</b>: it expresses the effect or aim: <i>Hoc est mihi magnae curae</i> "This is of great concern to me"; <i>Auxilio venire</i> "to come to help".</li>
<li><b>Double dative</b>: dative of purpose + dative of the person, with <i>sum, do, relinquo, venio, habeo</i>: <i>Hoc tibi est magno usui</i> "This is of great use to you"; <i>Cui bono?</i> "Who benefits?" (the formula with which Cicero, in the <i>Pro Roscio Amerino</i>, quotes the famous principle of the judge Cassius: look for whoever gains from the crime).</li>
<li><b>Dative of advantage / disadvantage</b> (<i>commodi / incommodi</i>): <i>Non scholae, sed vitae discimus</i> "we learn not for school but for life" (Seneca, <i>Letters to Lucilius</i> 106, actually complained of the opposite: <i>non vitae, sed scholae discimus</i>).</li>
<li><b>Dative of agent</b>: with the gerundive and with some passive perfects in poetry: <i>Hoc tibi faciendum est</i> "You must do this".</li>
<li><b>Dative after compound verbs</b> formed with <i>ad, ante, con, in, inter, ob, prae, sub, super</i>: <i>Caesar exercitui praeest</i> "Caesar commands the army"; <i>Hannibal Romanis bellum intulit</i> "Hannibal made war on the Romans".</li>
</ul>
<p><b>Intransitive Latin verbs that take the dative</b> (where English uses a direct object): <i>pareo</i> (to obey), <i>credo</i> (to believe), <i>faveo</i> (to favour), <i>noceo</i> (to harm), <i>resisto</i>, <i>placeo</i>, <i>persuadeo</i>, <i>studeo</i>, <i>impero</i>, <i>invideo</i>, <i>ignosco</i> (to forgive), <i>medeor</i> (to heal). Since these verbs are intransitive, in the passive they are only used impersonally: <i>mihi creditur</i> "I am believed" (literally "it is believed to me").</p>`
    },
    {
      type: `remember`, title: `The dative of possession: who has, who is?`,
      html: `<p>In the dative of possession the verb <i>sum</i> agrees with the <b>thing owned</b> (nominative), not with the owner: <i>Sunt mihi duo fratres</i> = "I have two brothers". To stress ownership as a quality the genitive is used (<i>Hic liber est Marci</i>, "This book is Marcus's"), while to say that someone <b>has</b> something the dative is used. If you want to stress <b>ownership</b> use the genitive; if you want to say <b>"I have / we have"</b> use the dative.</p>`
    },
    {
      type: `example`, title: `Datives in context`,
      html: `<ol>
<li><i>Caesari nuntiatum est Helvetios iter facere.</i> "Caesar was told that the Helvetii were on the march." (dative of indirect object, impersonal passive verb)</li>
<li><i>Hic liber mihi magno usui est.</i> "This book is of great use to me." (double dative)</li>
<li><i>Legibus parere debemus.</i> "We must obey the laws." (<i>pareo</i> + dative)</li>
<li><i>Cui bono fuerit?</i> "Who would have benefited?"</li>
<li><i>Quinto Fabio Maximo cognomen Cunctator fuit.</i> "Quintus Fabius Maximus had the nickname Cunctator (the Delayer)." (dative of possession)</li>
</ol>`
    },
    {
      type: `quiz`, title: `Mini-quiz: nominative, genitive, dative`,
      questions: [
        { type: `mc`, q: `In "Est mihi liber" the dative mihi expresses…`, options: [`possession`, `purpose`, `agent`], answer: 0, explain: `Sum + dative = to have: "I have a book".` },
        { type: `mc`, q: `"Amor patriae" contains a genitive that is…`, options: [`objective: love for one's country`, `subjective: the country's love`, `partitive`], answer: 0, explain: `The country is the object of the love.` },
        { type: `mc`, q: `"Sapientis est tacere" is translated…`, options: [`it is the mark of a wise man to keep silent`, `the wise man knows how to keep silent`, `the wise man is kept silent`], answer: 0, explain: `Genitive of characteristic with est.` },
        { type: `tf`, q: `The verb "pareo" takes the accusative, like its English equivalent "to obey".`, answer: false, explain: `Pareo takes the dative: parere legibus.` }
      ]
    },
    {
      type: `text`, title: `4. The accusative: beyond the direct object`,
      html: `<p>The accusative is the case of the <b>direct object</b>, but also of many functions that need prepositions in English:</p>
<ul>
<li><b>Motion towards</b>: with <i>ad</i> or <i>in</i> + accusative; without a preposition with names of towns and small islands: <i>Romam proficisci</i> "to set out for Rome"; <i>domum</i> "home(wards)"; <i>rus</i> "to the country".</li>
<li><b>Extent of time and space</b>: <i>Tres annos mansit</i> "He stayed for three years"; <i>mille passus</i> "for a mile (a thousand paces)".</li>
<li><b>Double accusative</b>: verbs of <b>naming and appointing</b> (<i>appello, nomino, creo, facio</i> + object + predicate): <i>Cives Ciceronem consulem creaverunt</i> "The citizens elected Cicero consul"; verbs of <b>asking and teaching</b> (<i>rogo, doceo, celo</i>): <i>Magister pueros grammaticam docet</i> "The teacher teaches the boys grammar".</li>
<li><b>Accusative of exclamation</b>: <i>O tempora, o mores!</i> (Cicero, First Catilinarian); <i>Me miserum!</i> "poor me!".</li>
<li><b>Accusative of respect</b> (or "Greek accusative"): in poetry, with parts of the body: <i>Nuda genu</i>, "bare as to the knee", i.e. "with her knee bare" (Virgil, <i>Aeneid</i> I, 320).</li>
<li><b>Adverbial accusative</b>: neuter forms used as adverbs: <i>multum, plus, primum, nihil, quid</i> (<i>Quid venisti?</i> "Why have you come?").</li>
</ul>`
    },
    {
      type: `text`, title: `5. The ablative: the "Swiss army knife"`,
      html: `<p>In Latin the <b>ablative</b> brings together three cases of ancient Indo-European: the ablative proper (separation, origin), the <b>instrumental</b> (means, manner) and the <b>locative</b> (place where and time). That is why it has so many different uses. The practical rule is: without a preposition it usually expresses <b>means, manner, cause, respect, comparison, price</b>; with prepositions (<i>a/ab, de, e/ex, cum, in</i>) it expresses other relationships.</p>
<table>
<tr><th>Use</th><th>Example</th><th>Translation</th></tr>
<tr><td>means</td><td><i>gladio pugnare</i></td><td>to fight with a sword</td></tr>
<tr><td>cause</td><td><i>timore fugere</i></td><td>to flee out of fear</td></tr>
<tr><td>manner</td><td><i>magna cum diligentia</i>; <i>silentio</i></td><td>with great care; in silence</td></tr>
<tr><td>respect</td><td><i>nomine</i>, <i>numero</i>, <i>pedibus aeger</i></td><td>in name, in number, sick in the feet</td></tr>
<tr><td>quality</td><td><i>vir summa virtute</i></td><td>a man of the greatest courage</td></tr>
<tr><td>price</td><td><i>magno emere</i></td><td>to buy at a high price</td></tr>
<tr><td>comparison</td><td><i>Marcus fortior fratre est</i></td><td>Marcus is stronger than his brother</td></tr>
<tr><td>origin</td><td><i>nobili genere natus</i></td><td>born of a noble family</td></tr>
<tr><td>topic</td><td><i>de bello Gallico</i></td><td>about the Gallic war</td></tr>
<tr><td>time when</td><td><i>tertio die</i>; <i>hieme</i></td><td>on the third day; in winter</td></tr>
<tr><td>separation</td><td><i>patria carere</i>; <i>ab urbe discedere</i></td><td>to be without a homeland; to leave the city</td></tr>
</table>
<p><b>Ablative of comparison</b>: an alternative to <i>quam</i> + the same case as the first term: <i>Marcus fortior est quam frater</i> = <i>Marcus fortior est fratre</i>. The ablative can only be used if the first term is in the nominative or accusative.</p>`
    },
    {
      type: `text`, title: `6. Verbs with the ablative and notable constructions`,
      html: `<p>Some verbs and adjectives take the ablative. It is best to learn them as a group:</p>
<ul>
<li><b>Utor, fruor, fungor, potior, vescor</b> (deponents): <i>Caesar nova arte utitur</i> "Caesar uses a new technique"; <i>potiri urbe</i> "to take possession of the city" (sometimes with the genitive: <i>potiri rerum</i> "to hold supreme power"). Memorise the chant <b>"utor, fruor, fungor, vescor, potior"</b>.</li>
<li><b>Dignus, indignus, contentus, fretus, praeditus, liber</b>: <i>dignus laude</i> "worthy of praise"; <i>fretus virtute</i> "relying on courage".</li>
<li><b>Opus est</b> + ablative: <i>Duce opus est</i> "There is need of a leader" (also with the nominative: <i>dux opus est</i>).</li>
<li><b>Abundo, careo, egeo</b> (to abound in, to lack, to need) and <b>impleo, onero, spolio</b> (to fill, to load, to strip).</li>
<li><b>Ablative absolute</b>: already studied with the participle (<i>urbe capta</i>): the construction condenses a subordinate clause of circumstance.</li>
</ul>
<p>For <b>place where</b> there are three solutions: <i>in</i> + ablative for common nouns (<i>in urbe</i>), the <b>locative</b> for towns and small islands of the first and second declension singular (<i>Romae</i>, <i>Corinthi</i>, <i>domi</i>, <i>ruri</i>), and the <b>ablative</b> for other proper names (<i>Athenis, Carthagine</i>). The locative is a dead case in Latin, but it survives in fixed forms.</p>`
    },
    {
      type: `example`, title: `Genitive, accusative and ablative in context`,
      html: `<ol>
<li><i>Cicero Catilinam coniurationis accusavit.</i> "Cicero accused Catiline of conspiracy." (genitive of charge)</li>
<li><i>Hoc mihi pluris est quam pecunia.</i> "This is worth more to me than money." (genitive of value; comparison with <i>quam</i>)</li>
<li><i>Milites tria milia passuum ambulaverunt.</i> "The soldiers marched for three miles." (accusative of extent)</li>
<li><i>Hostes magno numero, sed parva virtute pugnabant.</i> "The enemy fought in great numbers, but with little courage." (ablative of respect and of quality/manner)</li>
<li><i>Romulus urbem Romam appellavit.</i> "Romulus called the city Rome." (double accusative)</li>
</ol>`
    },
    {
      type: `curiosity`, title: `Did you know… "Cui bono?" is a double dative?`,
      html: `<p>The question <b>"Cui bono?"</b>, asked in detective stories and trials to find the culprit, is a double dative with the verb understood: <i>cui</i> (dative of the person) + <i>bono</i> (dative of purpose) = "to whom as an advantage?". Defending Sextus Roscius (80 BC), Cicero recalls that the stern judge Lucius Cassius Longinus Ravilla always used to ask this question. A single Latin construction survives in a legal formula still used today.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… in Roman inscriptions the cases tell you everything?`,
      html: `<p>On Roman tombstones you find formulas in the dative: <b>"D(is) M(anibus)"</b>, "to the spirits of the dead", and the name of the dead person in the dative (<i>Gaio Iulio Primo</i>) because the tomb is "dedicated to" them. In dedications of temples or monuments the dedicator appears in the nominative: <i>Marcus Agrippa L(ucii) f(ilius) consul tertium fecit</i> (on the Pantheon: "Marcus Agrippa, son of Lucius, consul for the third time, built this"). Reading an inscription teaches you to tell who <b>did</b> it (nominative), to whom it is <b>given</b> (dative) and whose son someone <b>is</b> (genitive).</p>`
    },
    {
      type: `widget`, title: `Practice: cases and functions`,
      widget: `match`,
      options: {
        pairs: [
          [`Est mihi liber`, `dative of possession`],
          [`amor patriae`, `objective genitive`],
          [`gladio pugnare`, `ablative of means`],
          [`magni aestimare`, `genitive of value`],
          [`Caesare duce`, `ablative absolute without a participle`],
          [`Tres annos mansit`, `accusative of extent`]
        ]
      },
      caption: `Match each Latin phrase to its syntactic function.`
    },
    {
      type: `alternatives`, title: `Other ways to avoid getting confused`,
      intro: `With so many different uses, it is easy to get lost. Here are three strategies.`,
      tabs: [
        {
          label: `🧭 The guiding question`,
          html: `<p>For each case remember the "mother" question: <b>genitive = of whom / of what?</b>; <b>dative = to whom / for whom?</b>; <b>accusative = whom / what (object)?</b>; <b>ablative = from / with / by means of what?</b>. If a construction does not answer the "mother" question, ask yourself which sub-category it belongs to: is it someone's advantage (dative)? Is it a quality (genitive or ablative)? Is it a price (ablative)?</p>`
        },
        {
          label: `🗂️ Case cards`,
          html: `<p>Make a card for each case with three columns: <b>use</b>, <b>Latin example</b>, <b>English translation</b>. Only add constructions you actually find in texts: the card grows and becomes your personal syntax dictionary. Reviewing your cards for five minutes a day is worth more than an hour of revision the night before a test.</p>`
        },
        {
          label: `🔁 Reverse translation`,
          html: `<p>Try translating simple sentences from <b>English into Latin</b>: "I have two sisters" (<i>Mihi sunt duae sorores</i>), "it is the consul's duty" (<i>Consulis est</i>), "to buy at a high price" (<i>magno emere</i>). Building the sentence forces you to choose the right case and shows you why English uses such different prepositions.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map of the cases and their uses`,
      nodes: [
        { id: `casi`, label: `Syntax of the cases`, x: 50, y: 8, color: `#a855f7`, html: `The cases express logical functions without prepositions.`, why: `Latin is a synthetic language: a word's function is read from its ending, not its position. That is why word order is free and Latin writers can "play" with the sentence.` },
        { id: `nom`, label: `Nominative`, x: 12, y: 40, color: `#f59e0b`, html: `Subject, predicate noun, double nominative with videor, dicor.`, why: `It is the "basic" case that gives the noun its dictionary form. The double nominative with passive verbs reflects the double accusative turned from active into passive.` },
        { id: `gen`, label: `Genitive`, x: 32, y: 72, color: `#16a34a`, html: `Possession, partitive, quality, characteristic, value, charge and penalty.`, why: `The genitive links two nouns: it is used when one term "depends" on another. Many of its uses come from this dependence (part of a whole, owner, quality).` },
        { id: `dat`, label: `Dative`, x: 55, y: 40, color: `#3b82f6`, html: `Indirect object, possession, purpose, advantage, agent with the gerundive.`, why: `The dative is the case of interest: it shows who "benefits" or for whom something "is intended". Latin possession (est mihi) is literally "there is for me".` },
        { id: `acc`, label: `Accusative`, x: 72, y: 72, color: `#ef4444`, html: `Object, motion towards, extent, double accusative.`, why: `It is the case of movement towards and of extent. The direct object is like a "target" reached by the action: that is why motion towards is also expressed by the accusative.` },
        { id: `abl`, label: `Ablative`, x: 88, y: 40, color: `#06b6d4`, html: `Means, cause, manner, respect, price, comparison, time.`, why: `The Latin ablative absorbed three Indo-European cases: ablative (where from), instrumental (with what), locative (where). That is why it does so many jobs.` }
      ],
      edges: [
        [`casi`, `nom`, ``], [`casi`, `gen`, ``], [`casi`, `dat`, ``], [`casi`, `acc`, ``], [`casi`, `abl`, ``]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: accusative and ablative`,
      questions: [
        { type: `mc`, q: `"Tres annos mansit" contains an accusative of…`, options: [`extent of time`, `motion towards`, `direct object`], answer: 0, explain: `It answers the question "for how long?".` },
        { type: `mc`, q: `"Marcus fortior fratre est" uses the ablative of…`, options: [`comparison`, `means`, `cause`], answer: 0, explain: `It is equivalent to "fortior quam frater".` },
        { type: `tf`, q: `The verb "utor" takes the accusative.`, answer: false, explain: `Utor, fruor, fungor, potior, vescor take the ablative.` },
        { type: `text`, q: `Write the case of the word "urbe" in "potiri urbe".`, answer: [`ablative`, `the ablative`, `ablativo`], explain: `Potior takes the ablative.` }
      ]
    }
  ],
  glossary: [
    { t: `Subjective genitive`, d: `The noun in the genitive performs the action (amor patris = the love the father feels).` },
    { t: `Objective genitive`, d: `The noun in the genitive receives the action (amor patriae = love for one's country).` },
    { t: `Partitive genitive`, d: `Expresses the whole of which a part is considered (pars militum).` },
    { t: `Dative of possession`, d: `Sum + dative of the owner: est mihi liber = I have a book.` },
    { t: `Double dative`, d: `Dative of the person + dative of purpose (mihi magnae curae est).` },
    { t: `Double accusative`, d: `With verbs of naming or asking: object + predicate / second object.` },
    { t: `Instrumental ablative`, d: `Expresses means or manner (gladio, cum diligentia).` },
    { t: `Locative`, d: `The case of place where, surviving in Romae, domi, ruri.` },
    { t: `Deponent`, d: `A verb with passive form and active meaning (utor, fruor).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `How do you translate "Mihi nomen est Marco"?`, options: [`My name is Marcus`, `Marcus has a name`, `I am called by Marcus`], answer: 0, explain: `Dative of possession: nomen est mihi.` },
      { type: `mc`, q: `In the phrase "metus hostium" the genitive is objective when it means…`, options: [`fear of the enemy (the enemy causes the fear)`, `the fear the enemy feels`, `the enemy is afraid`], answer: 0, explain: `Objective genitive: the enemy is the cause of the fear. If they were the ones feeling it, it would be subjective.` },
      { type: `mc`, q: `"Hoc tibi magno usui est" is an example of…`, options: [`double dative`, `double accusative`, `ablative absolute`], answer: 0, explain: `Tibi (person) and usui (purpose).` },
      { type: `tf`, q: `In Latin the genitive of quality can appear without an adjective.`, answer: false, explain: `The genitive of quality always needs an adjective: vir magnae sapientiae.` },
      { type: `mc`, q: `Which verb takes the dative?`, options: [`pareo`, `video`, `amo`], answer: 0, explain: `Parere + dative: to obey.` },
      { type: `mc`, q: `"Cives Ciceronem consulem creaverunt": consulem is…`, options: [`predicate of the object (double accusative)`, `subject`, `genitive`], answer: 0, explain: `With verbs of naming you have object + predicate in the accusative.` },
      { type: `text`, q: `Write "in Rome" in Latin (place where, one word).`, answer: [`romae`], explain: `The locative of Roma: Romae.` },
      { type: `mc`, q: `Which construction is found in "Duce opus est"?`, options: [`opus est + ablative`, `genitive of characteristic`, `dative of agent`], answer: 0, explain: `Opus est takes the ablative of the thing needed.` },
      { type: `mc`, q: `"Sapientis est tacere" means…`, options: [`it is the mark of a wise man to keep silent`, `the wise man eats in silence`, `the wise man is always silent`], answer: 0, explain: `Genitive of characteristic.` },
      { type: `order`, q: `Put in order the steps for analysing a doubtful case.`, items: [`Identify the word and its case`, `Find the verb or noun it depends on`, `Ask which question it answers`, `Choose a suitable English translation`], explain: `First form and function, then dependence, the question, and finally the English rendering.` }
    ]
  }
});
