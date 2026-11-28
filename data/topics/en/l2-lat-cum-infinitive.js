TOPIC('en', {
  id: `l2-lat-cum-infinitive`,
  title: `Narrative cum and indirect statement`,
  intro: `You have reached the <b>two most typical constructions of the Latin sentence</b>: <b>narrative cum</b> (which tells what happened before or during the main event) and <b>indirect statement</b> (the <b>accusative and infinitive</b>, which says "that…" after verbs of saying, thinking and perceiving). To use them well you need a rule for coordinating tenses: the <b>sequence of tenses</b> (<i>consecutio temporum</i>). In this lesson you will learn the various functions of <i>cum</i> (narrative, temporal, causal, concessive), the table of subjunctive tenses (same time, time before, time after), how to build indirect statement with its subject in the accusative, the reflexive <i>se</i>, and the nominative and infinitive (<i>dicitur, videtur</i>). After this lesson you will be able to read sentences from Caesar, Cicero and Livy with a reliable method. 🏛️⏳`,
  minutes: 60,
  sections: [
    {
      type: `text`, title: `1. Cum: one conjunction, many faces`,
      html: `<p><b>Cum</b> is one of the most ambiguous Latin words: it can be a <b>preposition</b> (with the ablative: <i>cum amicis</i> "with friends") or a <b>conjunction</b> ("when, since, although, while"). As a conjunction it introduces clauses with different meanings, depending on the <b>mood</b> of the verb:</p>
<table>
<tr><th>Meaning</th><th>Mood</th><th>Example</th><th>Translation</th></tr>
<tr><td><b>temporal cum</b> (pure)</td><td>indicative</td><td><i>Cum Caesar in Galliam venit, bellum gerebatur.</i></td><td>When Caesar arrived in Gaul, war was being waged.</td></tr>
<tr><td><b>iterative cum</b></td><td>indicative (perf./pluperf.)</td><td><i>Cum rex advenerat, omnes surgebant.</i></td><td>Whenever the king arrived, everyone stood up.</td></tr>
<tr><td><b>narrative cum</b> (historic)</td><td>imperf. or pluperf. subjunctive</td><td><i>Cum Caesar in Galliam venisset, bellum gessit.</i></td><td>When/after Caesar had arrived in Gaul, he waged war.</td></tr>
<tr><td><b>causal cum</b></td><td>subjunctive</td><td><i>Cum tu fortis sis, tibi confido.</i></td><td>Since you are brave, I trust you.</td></tr>
<tr><td><b>concessive cum</b></td><td>subjunctive (often with tamen)</td><td><i>Cum esset fortis, tamen victus est.</i></td><td>Although he was brave, he was defeated.</td></tr>
<tr><td><b>adversative cum</b></td><td>subjunctive</td><td><i>Cum alii fugerent, ille pugnabat.</i></td><td>While the others were fleeing, he was fighting.</td></tr>
</table>
<p>The practical rule: <b>cum + indicative</b> = plain "when" (a fact); <b>cum + subjunctive</b> = narrative, causal or concessive (the context tells you which). Translating <i>cum</i> as "when" when it is causal or concessive is a common mistake.</p>`
    },
    {
      type: `text`, title: `2. Narrative cum`,
      html: `<p><b>Narrative cum</b> is the most frequent construction in historical prose: it introduces an event that <b>precedes</b> or <b>accompanies</b> the main story, often with a <b>causal</b> or <b>temporal</b> nuance. It always takes the <b>imperfect subjunctive</b> (same time) or the <b>pluperfect subjunctive</b> (time before), because it refers to the past:</p>
<ul>
<li><b>Same time</b> ➜ <b>imperfect subjunctive</b>: <i>Cum Caesar in Gallia esset, Romae seditiones erant.</i> ➜ "While Caesar was in Gaul, there was unrest in Rome."</li>
<li><b>Time before</b> ➜ <b>pluperfect subjunctive</b>: <i>Cum Caesar Galliam vicisset, Romam rediit.</i> ➜ "After Caesar had conquered Gaul, he returned to Rome."</li>
</ul>
<p>The main verb is in a <b>historic tense</b> (historic perfect, imperfect): <i>Cum hostes appropinquarent, milites arma sumpserunt</i> "As the enemy were approaching, the soldiers took up arms". English translates with "after, when, while, since, as": you choose according to the sense.</p>
<p><b>Structure</b>: <i>Cum + subject + imperfect/pluperfect subjunctive, + main clause in the perfect/imperfect</i>.</p>
<p><b>When cum is not narrative</b>: if the verb is <b>indicative</b>, it is purely temporal; if it has an <b>obvious causal or concessive meaning</b> (<i>cum… tamen</i>), translate accordingly. Narrative cum never means "with": confusing the preposition <i>cum</i> with the conjunction <i>cum</i> is the most frequent mistake in translations.</p>`
    },
    {
      type: `svg`, title: `The sequence of tenses`,
      caption: `With a primary or a historic main verb, the subjunctive changes tense.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#581c87" text-anchor="middle">SEQUENCE OF TENSES</text>
<rect x="20" y="45" width="560" height="38" rx="8" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
<text x="130" y="70" font-size="16" font-weight="bold" fill="#581c87" text-anchor="middle">Relation</text>
<text x="300" y="70" font-size="16" font-weight="bold" fill="#581c87" text-anchor="middle">PRIMARY main verb</text>
<text x="480" y="70" font-size="16" font-weight="bold" fill="#581c87" text-anchor="middle">HISTORIC main verb</text>
<rect x="20" y="92" width="560" height="50" rx="8" fill="#ffffff" stroke="#c4b5fd" stroke-width="2"/>
<text x="130" y="122" font-size="16" fill="#0f172a" text-anchor="middle">same time</text>
<text x="300" y="122" font-size="16" fill="#0f172a" text-anchor="middle">PRESENT subj.</text>
<text x="480" y="122" font-size="16" fill="#0f172a" text-anchor="middle">IMPERFECT subj.</text>
<rect x="20" y="150" width="560" height="50" rx="8" fill="#ffffff" stroke="#c4b5fd" stroke-width="2"/>
<text x="130" y="180" font-size="16" fill="#0f172a" text-anchor="middle">time before</text>
<text x="300" y="180" font-size="16" fill="#0f172a" text-anchor="middle">PERFECT subj.</text>
<text x="480" y="180" font-size="16" fill="#0f172a" text-anchor="middle">PLUPERFECT subj.</text>
<rect x="20" y="208" width="560" height="50" rx="8" fill="#ffffff" stroke="#c4b5fd" stroke-width="2"/>
<text x="130" y="238" font-size="16" fill="#0f172a" text-anchor="middle">time after</text>
<text x="300" y="238" font-size="16" fill="#0f172a" text-anchor="middle">-urus sim</text>
<text x="480" y="238" font-size="16" fill="#0f172a" text-anchor="middle">-urus essem</text>
<text x="300" y="285" font-size="14" fill="#334155" text-anchor="middle">primary: present, future, present perfect · historic: imperfect, historic perfect, pluperfect</text>
</svg>`
    },
    {
      type: `text`, title: `3. The sequence of tenses`,
      html: `<p>The <b>consecutio temporum</b> ("sequence of tenses") is the rule that decides <b>which tense of the subjunctive</b> to use in a subordinate clause, based on:</p>
<ol>
<li>the <b>tense of the main verb</b>: <b>primary</b> (present, future, present perfect, imperative) or <b>historic</b> (imperfect, historic perfect, pluperfect);</li>
<li>the <b>relation</b> between the two actions: <b>same time</b> (simultaneous), <b>time before</b> (the subordinate action happens first), <b>time after</b> (the subordinate action happens later).</li>
</ol>
<table>
<tr><th>Relation</th><th>Primary main verb</th><th>Historic main verb</th></tr>
<tr><td><b>Same time</b></td><td>present subjunctive</td><td>imperfect subjunctive</td></tr>
<tr><td><b>Time before</b></td><td>perfect subjunctive</td><td>pluperfect subjunctive</td></tr>
<tr><td><b>Time after</b></td><td>future participle + sim (<i>-urus sim</i>)</td><td>future participle + essem (<i>-urus essem</i>)</td></tr>
</table>
<p><b>An example with indirect questions</b> ("I ask what you are doing / have done / will do"):</p>
<ul>
<li><i>Quaero quid facias.</i> ➜ "I ask what you are doing." (primary + same time)</li>
<li><i>Quaero quid feceris.</i> ➜ "I ask what you have done." (primary + time before)</li>
<li><i>Quaero quid facturus sis.</i> ➜ "I ask what you will do." (primary + time after)</li>
<li><i>Quaesivi quid faceres.</i> ➜ "I asked what you were doing." (historic + same time)</li>
<li><i>Quaesivi quid fecisses.</i> ➜ "I asked what you had done." (historic + time before)</li>
<li><i>Quaesivi quid facturus esses.</i> ➜ "I asked what you would do." (historic + time after)</li>
</ul>
<p><b>Where it applies</b>: indirect questions (<i>Nescio quis veniat</i> "I don't know who is coming"), purpose clauses and noun clauses with <i>ut/ne</i>, narrative cum, relative clauses with the subjunctive. In narrative cum and result clauses the tense often follows the sense, but the table is a good guide.</p>`
    },
    {
      type: `remember`, title: `Primary or historic? A trick`,
      html: `<p>How to tell <b>primary</b> tenses from <b>historic</b> ones:</p>
<ul>
<li><b>Primary</b> (looking at the present/future): <i>present</i> (<i>quaero</i>), <i>future</i> (<i>quaeram</i>), <i>future perfect</i>, <i>imperative</i>, <b>present perfect</b> (<i>quaesivi</i> = "I have asked", with an effect on the present).</li>
<li><b>Historic</b> (looking at the past): <i>imperfect</i> (<i>quaerebam</i>), <i>historic perfect</i> (<i>quaesivi</i> = "I asked"), <i>pluperfect</i> (<i>quaesiveram</i>).</li>
</ul>
<p>The <b>perfect</b> is the only ambiguous tense: if it translates as "I have asked", it is primary; if as "I asked", it is historic. In historical narrative the perfect is almost always <b>historic</b>.</p>`
    },
    {
      type: `example`, title: `Cum and the sequence of tenses in sentences`,
      html: `<ol>
<li><i>Cum Caesar Rubiconem transisset, Pompeius Roma discessit.</i> ➜ "After Caesar had crossed the Rubicon, Pompey left Rome." (narrative cum, time before + historic)</li>
<li><i>Cum hostes appropinquarent, milites in castris manebant.</i> ➜ "While the enemy were approaching, the soldiers stayed in the camp." (same time)</li>
<li><i>Cum sis amicus meus, tibi omnia dico.</i> ➜ "Since you are my friend, I tell you everything." (causal)</li>
<li><i>Cum pauci essent, tamen fortiter pugnaverunt.</i> ➜ "Although they were few, they nevertheless fought bravely." (concessive)</li>
<li><i>Nescio quid agas.</i> ➜ "I don't know what you are doing." (indirect question, primary + same time)</li>
</ol>`
    },
    {
      type: `quiz`, title: `Mini-quiz: cum and the sequence of tenses`,
      questions: [
        { type: `mc`, q: `"Cum Caesar venisset" is a … cum.`, options: [`narrative (time before)`, `temporal with the indicative`, `iterative`], answer: 0, explain: `Cum + pluperfect subjunctive: narrative, time before.` },
        { type: `mc`, q: `With a present main verb and time before, you use the … subjunctive.`, options: [`present`, `perfect`, `imperfect`], answer: 1, explain: `Primary + time before = perfect subjunctive.` },
        { type: `mc`, q: `With an imperfect main verb and same time, you use the … subjunctive.`, options: [`imperfect`, `pluperfect`, `present`], answer: 0, explain: `Historic + same time = imperfect subjunctive.` },
        { type: `tf`, q: `"Cum" + indicative always has a causal meaning.`, answer: false, explain: `Cum + indicative is purely temporal; the causal cum takes the subjunctive.` }
      ]
    },
    {
      type: `text`, title: `4. Indirect statement (accusative and infinitive)`,
      html: `<p>After <b>verbs of saying, thinking, perceiving, knowing and feeling</b>, Latin does not use "that + finite verb" as English does, but a single construction: the <b>subject goes into the accusative</b> and the <b>verb into the infinitive</b>. This is called <b>indirect statement</b> or the <b>accusative and infinitive</b>:</p>
<table>
<tr><th>Latin</th><th>English</th></tr>
<tr><td><i>Dico Caesarem venire.</i></td><td>I say that Caesar is coming.</td></tr>
<tr><td><i>Audio pueros ludere.</i></td><td>I hear that the boys are playing. / I hear the boys playing.</td></tr>
<tr><td><i>Puto te errare.</i></td><td>I think that you are wrong.</td></tr>
<tr><td><i>Gaudeo te valere.</i></td><td>I am glad that you are well.</td></tr>
</table>
<p>The <b>verbs that take it</b>:</p>
<ul>
<li><b>verbs of saying</b> (<i>dicendi</i>): <i>dico, nego, narro, nuntio, scribo, respondeo, polliceor, promitto</i>;</li>
<li><b>verbs of perceiving</b> (<i>sentiendi</i>): <i>audio, video, sentio, intellego, cognosco, scio, nescio</i>;</li>
<li><b>verbs of thinking</b> (<i>putandi</i>): <i>puto, credo, existimo, arbitror, spero, censeo, opinor</i>;</li>
<li><b>verbs of feeling</b> (<i>affectuum</i>): <i>gaudeo, doleo, miror, queror, laetor</i>;</li>
<li><b>verbs of wanting/ordering</b> (<i>voluntatis</i>, with a different subject): <i>volo, nolo, cupio, iubeo, veto, sino, patior, prohibeo</i>: <i>Iubeo te venire</i> "I order you to come"; <i>Vetat nos exire</i> "He forbids us to go out";</li>
<li><b>impersonal expressions</b>: <i>constat, apparet, manifestum est, necesse est, oportet, decet</i>: <i>Constat Romam conditam esse</i> "It is well known that Rome was founded".</li>
</ul>
<p><b>Careful</b>: if the subject of the subordinate clause is <b>the same as that of the main clause</b>, with <i>volo, cupio, possum</i> you use the plain infinitive (<i>Volo venire</i> "I want to come", not <i>volo me venire</i>). The accusative and infinitive is used when the subjects are different.</p>`
    },
    {
      type: `text`, title: `5. Infinitive tenses and the reflexive`,
      html: `<p>In indirect statement the infinitive has a <b>relative</b> time value (its relation to the main verb), not an absolute one:</p>
<table>
<tr><th>Infinitive</th><th>Relation</th><th>Formation</th><th>Example (with "dixit")</th></tr>
<tr><td><b>present</b></td><td>same time</td><td>amare / amari</td><td><i>Dixit Caesarem venire.</i> "He said that Caesar was coming."</td></tr>
<tr><td><b>perfect</b></td><td>time before</td><td>amavisse / amatum esse</td><td><i>Dixit Caesarem venisse.</i> "He said that Caesar had come."</td></tr>
<tr><td><b>future</b></td><td>time after</td><td>amaturum esse (active); amatum iri (passive, rare)</td><td><i>Dixit Caesarem venturum esse.</i> "He said that Caesar would come."</td></tr>
</table>
<p>The future active infinitive is made of the <b>future participle + esse</b>, and the participle <b>agrees with the subject</b>: <i>Spero me venturum esse</i> "I hope to come (that I shall come)", <i>Dico puellas venturas esse</i> "I say that the girls will come". <i>Spero</i> always takes the future.</p>
<p><b>Reflexive</b>: if the subject of the indirect statement is <b>the same as that of the main clause</b> (i.e. the person speaking or thinking), Latin uses <b>se</b> (the accusative of the reflexive), not <i>eum</i>:</p>
<ul>
<li><i>Caesar dixit <b>se</b> venire.</i> ➜ "Caesar said that he (Caesar himself) was coming."</li>
<li><i>Caesar dixit <b>eum</b> venire.</i> ➜ "Caesar said that he (someone else) was coming."</li>
</ul>
<p>If the subordinate clause has a different subject from the main clause, Latin uses <i>eum, eam, eos</i>; for the possessive, <i>suus</i> (reflexive) or <i>eius</i> (non-reflexive). This distinction is essential in Caesar's passages of reported speech (<i>De bello Gallico</i>): <i>Ariovistus respondit se non timere</i> "Ariovistus replied that he was not afraid".</p>`
    },
    {
      type: `text`, title: `6. The nominative and infinitive`,
      html: `<p>Some passive verbs of saying and thinking change construction: the <b>subject goes into the nominative</b> and the infinitive agrees with it. This is called the <b>nominative and infinitive</b> (just as English says "Romulus is said to have founded…"):</p>
<ul>
<li><i>Romulus urbem condidisse dicitur.</i> ➜ "Romulus is said to have founded the city." (<i>dicitur</i>, personal passive)</li>
<li><i>Homerus caecus fuisse traditur.</i> ➜ "Homer is reported to have been blind."</li>
<li><i>Videtur esse bonus.</i> ➜ "He seems to be good."</li>
<li><i>Hannibal Alpes superavisse fertur.</i> ➜ "Hannibal is said to have crossed the Alps."</li>
<li><i>Pueri iubentur discedere.</i> ➜ "The boys are ordered to leave." (<i>iubeor, vetor</i>)</li>
</ul>
<p>With the verbs <i>videor</i> ("I seem"), <i>dicor</i>, <i>putor</i>, <i>existimor</i>, <i>traditur</i>, <i>fertur</i> in the present, the nominative and infinitive is preferred. In the <b>compound tenses</b> (<i>dictum est, traditum est, nuntiatum est</i>) the <b>impersonal</b> construction with accusative and infinitive is normally used: <i>Traditum est Homerum caecum fuisse</i> "It has been handed down that Homer was blind".</p>`
    },
    {
      type: `widget`, title: `Game: which construction is it?`,
      widget: `classify`,
      options: {
        groups: [`Narrative cum (subjunctive)`, `Indirect statement (acc. + infinitive)`, `Nominative and infinitive`],
        items: [
          [`Cum Caesar venisset, laetus fuit`, 0], [`Cum hostes appropinquarent, fugimus`, 0], [`Cum Caesar in Gallia esset, ...`, 0],
          [`Dico te venire`, 1], [`Audio pueros cantare`, 1], [`Spero me venturum esse`, 1], [`Credo Caesarem vicisse`, 1],
          [`Romulus rex fuisse dicitur`, 2], [`Videtur esse bonus`, 2], [`Homerus caecus fuisse traditur`, 2]
        ]
      },
      caption: `Narrative cum = clause with cum; indirect statement = subject in the accusative; nominative and infinitive = passive verb of saying.`
    },
    {
      type: `example`, title: `Indirect statements in sentences`,
      html: `<ol>
<li><i>Caesar dixit se in Galliam venturum esse.</i> ➜ "Caesar said that he would go to Gaul." (<i>se</i> reflexive; future infinitive)</li>
<li><i>Scio te hoc fecisse.</i> ➜ "I know that you did this." (perfect infinitive, time before)</li>
<li><i>Nuntiatum est hostes appropinquare.</i> ➜ "It was announced that the enemy were approaching."</li>
<li><i>Cicero dicit amicitiam esse maximum bonum.</i> ➜ "Cicero says that friendship is the greatest good."</li>
<li><i>Cato censebat Carthaginem esse delendam.</i> ➜ "Cato believed that Carthage must be destroyed." (<i>delendam esse</i>: a construction with the gerundive, which you will see later)</li>
</ol>`
    },
    {
      type: `curiosity`, title: `Did you know… Cato's motto is an indirect statement?`,
      html: `<p>The phrase attributed to <b>Cato the Censor</b> (234-149 BC), with which he ended every speech in the Senate, is: <b>"Ceterum censeo Carthaginem esse delendam"</b>, "Furthermore, I believe that Carthage must be destroyed". It is a perfect <b>indirect statement</b>: <i>censeo</i> (verb of opinion) + <i>Carthaginem</i> (subject in the accusative) + <i>delendam esse</i> (infinitive with the gerundive). The decisive war against Carthage (the Third Punic War) broke out in 149 BC, the year Cato died, and the city was destroyed in 146 BC by Scipio Aemilianus. The wording is the one handed down by tradition: it sums up his role as the relentless "voice" of Roman policy.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… "Homo sum" hides an indirect statement?`,
      html: `<p>Terence's famous line (<i>Heautontimorumenos</i>, 77) <b>"Homo sum: humani nihil a me alienum puto"</b> ("I am a human being: I consider nothing human foreign to me") contains an indirect statement: <i>puto</i> (verb of opinion) + <i>nihil alienum</i> (accusative, subject) + <i>esse</i> (understood). In proverbial sentences the infinitive <i>esse</i> is often left out: that is why Latin indirect statements can look "incomplete". When you meet one, mentally add <i>esse</i>.</p>`
    },
    {
      type: `alternatives`, title: `Other ways to master cum and indirect statement`,
      intro: `Two very frequent constructions: two strategies for reading them without panic.`,
      tabs: [
        {
          label: `🔍 Look for the signal`,
          html: `<p>Each construction has a "signal": for <b>narrative cum</b>, <i>cum</i> + a verb in the <b>imperfect or pluperfect subjunctive</b>. For <b>indirect statement</b>, a verb of saying/thinking/perceiving followed by <b>an accusative and an infinitive</b> (<i>dico te venire</i>). For the <b>nominative and infinitive</b>, a passive form of a verb of saying (<i>dicitur, traditur, videtur</i>) and a nominative with an infinitive.</p>`
        },
        {
          label: `🇬🇧 From "that" to the accusative`,
          html: `<p>To translate an indirect statement, start from English: <b>"I say that… X does Y"</b> ➜ Latin: <i>dico</i> + <b>X (accusative)</b> + <b>Y (infinitive)</b>. To read one: find the <b>main verb</b> (dico), the <b>subject in the accusative</b> (Caesarem), the <b>verb in the infinitive</b> (venire). Translate with "that", then check the tense with the infinitive table (present = same time, perfect = time before, future = time after).</p>`
        },
        {
          label: `📅 Tense tables`,
          html: `<p>Draw a table with two rows (primary / historic) and three columns (same time, time before, time after) and fill it in with the subjunctive tenses; then a second table with the infinitives (present, perfect, future). Learn both tables by heart: they describe almost all Latin subordinate clauses.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: cum and indirect statement`,
      nodes: [
        { id: `per`, label: `The Latin sentence`, x: 50, y: 8, color: `#a855f7`, html: `Subordinate clauses with subjunctive and infinitive.`, why: `Latin uses few conjunctions and many non-finite forms: the syntax is compact and time is read from the sequence of tenses. That is why Caesar's and Cicero's sentences look long but are very orderly.` },
        { id: `cum`, label: `Cum`, x: 18, y: 40, color: `#f59e0b`, html: `Narrative, temporal, causal, concessive.`, why: `Cum (in early Latin <i>quom</i>) is a temporal conjunction that took on more meanings over time. The narrative subjunctive arose from the need to tell events in a logical sequence.` },
        { id: `cons`, label: `Sequence`, x: 50, y: 40, color: `#16a34a`, html: `Coordination of subjunctive tenses.`, why: `The sequence of tenses is a rule of harmony: the subjunctive does not show absolute time but its relation to the main verb. That is why there are only two series: primary and historic.` },
        { id: `inf`, label: `Indirect statement`, x: 82, y: 40, color: `#3b82f6`, html: `Accusative and infinitive after verbs of saying and thinking.`, why: `Indirect statement exists because classical Latin has no subordinating "that" for reported speech: it uses the subject in the accusative, inherited from Indo-European, and the infinitive as the verb.` },
        { id: `nomi`, label: `Nom. + infinitive`, x: 68, y: 76, color: `#ef4444`, html: `Dicitur, videtur, traditur.`, why: `If the main verb is passive, the subject of the infinitive becomes the subject of the sentence: "Romulus is said to have founded" is the Latin logic — and English uses it too.` },
        { id: `ita`, label: `Modern languages`, x: 30, y: 76, color: `#06b6d4`, html: `Cum ➜ when/while; indirect statement ➜ that + verb.`, why: `English and Italian developed "that" (Italian "che") as a conjunction for reported speech, but they keep traces of the accusative and infinitive in phrases like "I heard the boys sing" or "I believe him to be honest".` }
      ],
      edges: [
        [`per`, `cum`, `uses`], [`per`, `cons`, `rule`], [`per`, `inf`, `uses`], [`inf`, `nomi`, `passive`], [`cum`, `cons`, `tenses`], [`cum`, `ita`, `when`], [`inf`, `ita`, `that`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: indirect statement`,
      questions: [
        { type: `mc`, q: `How do you translate "Dico te venire"?`, options: [`I say that you are coming`, `I tell myself to come`, `I say that you may come`], answer: 0, explain: `Subject in the accusative + present infinitive.` },
        { type: `text`, q: `Write the future active infinitive of "amo" (with esse).`, answer: [`amaturum esse`], explain: `Future participle (amaturum) + esse.` },
        { type: `mc`, q: `"Caesar dixit se venire": "se" refers to…`, options: [`Caesar`, `someone else`, `no one`], answer: 0, explain: `Se is reflexive: it refers to the subject of the main clause.` },
        { type: `mc`, q: `Which form takes the nominative and infinitive?`, options: [`dicitur`, `dico`, `dixi`], answer: 0, explain: `Dicitur, traditur, videtur: subject in the nominative.` }
      ]
    }
  ],
  glossary: [
    { t: `Narrative cum`, d: `Cum + imperfect/pluperfect subjunctive: tells of an earlier or simultaneous event.` },
    { t: `Temporal cum`, d: `Cum + indicative: plain "when".` },
    { t: `Sequence of tenses`, d: `The rule governing the tenses of the subjunctive in subordinate clauses (consecutio temporum).` },
    { t: `Primary tenses`, d: `Present, future, present perfect, imperative.` },
    { t: `Historic tenses`, d: `Imperfect, historic perfect, pluperfect.` },
    { t: `Indirect statement`, d: `Accusative and infinitive after verbs of saying, thinking, perceiving.` },
    { t: `Nominative and infinitive`, d: `A construction with passive verbs: dicitur, videtur.` },
    { t: `Reflexive se`, d: `The pronoun that refers back to the subject of the main clause in indirect statement.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `How do you translate "Cum Caesar Galliam vicisset, Romam rediit"?`, options: [`After Caesar had conquered Gaul, he returned to Rome`, `With Caesar, Gaul conquered, he returned to Rome`, `Caesar conquers Gaul and returns to Rome`], answer: 0, explain: `Narrative cum with the pluperfect: time before.` },
      { type: `mc`, q: `With a main verb in the historic perfect and time before, you use the … subjunctive.`, options: [`perfect`, `pluperfect`, `imperfect`], answer: 1, explain: `Historic + time before = pluperfect.` },
      { type: `mc`, q: `With a present main verb and time after, you use…`, options: [`future participle + sim`, `present subjunctive`, `perfect subjunctive`], answer: 0, explain: `Primary + time after = -urus sim.` },
      { type: `text`, q: `Write in Latin "I say that Caesar is coming" (3 words).`, answer: [`dico caesarem venire`], explain: `Subject in the accusative + present infinitive.` },
      { type: `mc`, q: `How do you translate "Scio te hoc fecisse"?`, options: [`I know that you did this`, `I know that you will do this`, `I know how to do this`], answer: 0, explain: `Perfect infinitive: time before.` },
      { type: `mc`, q: `In "Caesar dixit eum venire", "eum" refers to…`, options: [`another person`, `Caesar`, `no one`], answer: 0, explain: `Eum is not reflexive: a person other than the subject of the main clause.` },
      { type: `tf`, q: `The verb "spero" takes the future infinitive.`, answer: true, explain: `Spero me venturum esse.` },
      { type: `mc`, q: `How do you translate "Romulus urbem condidisse dicitur"?`, options: [`Romulus is said to have founded the city`, `Romulus says that he founds the city`, `Romulus will found the city`], answer: 0, explain: `Nominative and perfect infinitive.` },
      { type: `mc`, q: `"Cum + indicative" means…`, options: [`when (purely temporal)`, `since (causal)`, `although (concessive)`], answer: 0, explain: `With the indicative it is temporal; causal and concessive cum take the subjunctive.` },
      { type: `order`, q: `Put the steps for translating a narrative cum in order.`, items: [`Recognise cum + imperfect or pluperfect subjunctive`, `Decide the relation: same time or time before`, `Choose "while", "after" or "since"`, `Translate the main clause`], explain: `First the form, then the time relation, then the nuance, and finally the main clause.` }
    ]
  }
});
