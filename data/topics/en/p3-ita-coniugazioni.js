TOPIC('en', {
  id: "p3-ita-coniugazioni",
  title: "The Three Conjugations",
  intro: "Cantare, leggere, dormire: all Italian verbs end in <b>-are</b>, <b>-ere</b> or <b>-ire</b>. These are the <b>three conjugations</b>, three big “families” of verbs 👨‍👩‍👧. Let's learn to recognise them and to conjugate verbs in the <b>past</b>, the <b>present</b> and the <b>future</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "The infinitive: the name of the verb",
      html: `<p>When you look up a verb in the dictionary you find it in the <b>infinitive</b>: <i>cantare, leggere, dormire</i> (to sing, to read, to sleep). The infinitive is like the verb's “first name”: it does not say <b>who</b> does the action or <b>when</b>.</p>
<p>Every verb in the infinitive has two parts:</p>
<ul>
<li>the <b>root</b>, which carries the meaning and usually does not change: <b>cant</b>-are, <b>legg</b>-ere, <b>dorm</b>-ire;</li>
<li>the <b>ending</b> (<i>desinenza</i>), the final part that changes: cant-<b>are</b>, cant-<b>o</b>, cant-<b>erò</b>.</li>
</ul>
<p>It is by looking at the ending of the infinitive that we understand which <b>conjugation</b> the verb belongs to.</p>`
    },
    {
      type: "svg",
      title: "The three families of verbs",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="30" width="175" height="240" rx="18" fill="#fee2e2" stroke="#dc2626" stroke-width="4"/>
<rect x="212" y="30" width="175" height="240" rx="18" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
<rect x="405" y="30" width="175" height="240" rx="18" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>
<text x="107" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#991b1b">1st conj.</text>
<text x="300" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#166534">2nd conj.</text>
<text x="492" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#1e40af">3rd conj.</text>
<text x="107" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#dc2626">-ARE</text>
<text x="300" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#16a34a">-ERE</text>
<text x="492" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#2563eb">-IRE</text>
<g font-size="20" text-anchor="middle" fill="#1f2937">
<text x="107" y="160">cant-are 🎤</text><text x="107" y="192">gioc-are ⚽</text><text x="107" y="224">salt-are 🐸</text>
<text x="300" y="160">legg-ere 📖</text><text x="300" y="192">cred-ere 🤔</text><text x="300" y="224">corr-ere 🏃</text>
<text x="492" y="160">dorm-ire 😴</text><text x="492" y="192">part-ire 🚂</text><text x="492" y="224">fin-ire 🏁</text>
</g>
<text x="107" y="258" font-size="15" text-anchor="middle" fill="#7f1d1d">the biggest</text>
<text x="300" y="258" font-size="15" text-anchor="middle" fill="#14532d">many irregular</text>
<text x="492" y="258" font-size="15" text-anchor="middle" fill="#1e3a8a">some with -isc-</text>
</svg>`,
      caption: "Root + ending: the ending of the infinitive tells us the family of the verb."
    },
    {
      type: "widget",
      title: "Game: which family?",
      widget: "classify",
      options: {
        groups: ["-ARE (1st)", "-ERE (2nd)", "-IRE (3rd)"],
        items: [
          ["🎨 disegnare", 0], ["🏊 nuotare", 0], ["🍝 mangiare", 0], ["👀 guardare", 0],
          ["✍️ scrivere", 1], ["👁️ vedere", 1], ["🏃 correre", 1], ["🙂 sorridere", 1],
          ["🎧 sentire", 2], ["🚪 aprire", 2], ["🧹 pulire", 2], ["🥣 servire", 2]
        ]
      },
      caption: "Look only at the end of the infinitive and put each verb in its family."
    },
    {
      type: "text",
      title: "The present: endings change with the person",
      html: `<p>The verb changes its ending depending on <b>who</b> does the action (the <b>person</b>):</p>
<table>
<tr><th>Person</th><th>CANT-ARE</th><th>CRED-ERE</th><th>DORM-IRE</th></tr>
<tr><td>io (I)</td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>tu (you)</td><td>cant<b>i</b></td><td>cred<b>i</b></td><td>dorm<b>i</b></td></tr>
<tr><td>lui/lei (he/she)</td><td>cant<b>a</b></td><td>cred<b>e</b></td><td>dorm<b>e</b></td></tr>
<tr><td>noi (we)</td><td>cant<b>iamo</b></td><td>cred<b>iamo</b></td><td>dorm<b>iamo</b></td></tr>
<tr><td>voi (you, plural)</td><td>cant<b>ate</b></td><td>cred<b>ete</b></td><td>dorm<b>ite</b></td></tr>
<tr><td>loro (they)</td><td>cant<b>ano</b></td><td>cred<b>ono</b></td><td>dorm<b>ono</b></td></tr>
</table>
<p>Did you notice? The endings of <b>io</b> (-o), <b>tu</b> (-i) and <b>noi</b> (-iamo) are the same for all three families! In <b>voi</b> you can see the vowel of the family: cant<b>a</b>te, cred<b>e</b>te, dorm<b>i</b>te.</p>
<p><b>Careful:</b> many verbs in -ire add <b>-isc-</b> in some persons: fin<b>isc</b>o, fin<b>isc</b>i, fin<b>isc</b>e, finiamo, finite, fin<b>isc</b>ono. Capire, pulire, colpire and preferire do this too.</p>`
    },
    {
      type: "text",
      title: "Past and future",
      html: `<p>The verb also changes to say <b>when</b> the action happens. Here are three tenses of the indicative mood, in the person «io»:</p>
<table>
<tr><th>Tense</th><th>CANTARE</th><th>CREDERE</th><th>DORMIRE</th></tr>
<tr><td>⬅️ <b>Passato prossimo</b> (finished action)</td><td>ho cant<b>ato</b></td><td>ho cred<b>uto</b></td><td>ho dorm<b>ito</b></td></tr>
<tr><td>⬅️ <b>Imperfetto</b> (habit, description)</td><td>cant<b>avo</b></td><td>cred<b>evo</b></td><td>dorm<b>ivo</b></td></tr>
<tr><td>⏺️ <b>Presente</b></td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>➡️ <b>Futuro semplice</b></td><td>cant<b>erò</b></td><td>cred<b>erò</b></td><td>dorm<b>irò</b></td></tr>
</table>
<ul>
<li>The <b>passato prossimo</b> is a <b>compound</b> tense: auxiliary (avere or essere) + <b>past participle</b> in -ato, -uto, -ito. E.g. «sono partito», «ho cantato».</li>
<li>In the <b>future</b> the first conjugation changes the <b>a</b> into <b>e</b>: cant<b>a</b>re → cant<b>e</b>rò (not «cantarò»!).</li>
<li>In the future the stress falls on the last syllable: cante<b>rò</b>, cante<b>rà</b>: do not forget it!</li>
</ul>`
    },
    {
      type: "svg",
      title: "The arrow of time",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<line x1="40" y1="140" x2="540" y2="140" stroke="#78350f" stroke-width="6"/>
<polygon points="540,125 575,140 540,155" fill="#78350f"/>
<circle cx="120" cy="140" r="16" fill="#a855f7"/>
<circle cx="300" cy="140" r="20" fill="#16a34a"/>
<circle cx="480" cy="140" r="16" fill="#2563eb"/>
<text x="120" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#7e22ce">PAST</text>
<text x="300" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#15803d">PRESENT</text>
<text x="480" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#1d4ed8">FUTURE</text>
<text x="120" y="95" font-size="18" text-anchor="middle" fill="#1f2937">yesterday</text>
<text x="300" y="95" font-size="18" text-anchor="middle" fill="#1f2937">now</text>
<text x="480" y="95" font-size="18" text-anchor="middle" fill="#1f2937">tomorrow</text>
<text x="120" y="190" font-size="20" text-anchor="middle" fill="#1f2937">ho giocato</text>
<text x="120" y="218" font-size="20" text-anchor="middle" fill="#1f2937">giocavo</text>
<text x="300" y="190" font-size="20" text-anchor="middle" fill="#1f2937">gioco</text>
<text x="480" y="190" font-size="20" text-anchor="middle" fill="#1f2937">giocherò</text>
<text x="480" y="225" font-size="15" text-anchor="middle" fill="#92400e">(c + h for the hard sound)</text>
</svg>`,
      caption: "The same verb, giocare (to play), changes form depending on when the action happens."
    },
    {
      type: "quiz",
      title: "Mini-quiz: families and persons",
      questions: [
        { type: "mc", q: "«Scrivere» belongs to the…", options: ["1st conjugation", "2nd conjugation", "3rd conjugation"], answer: 1, explain: "It ends in -ere: second conjugation." },
        { type: "text", q: "Conjugate «parlare» in the present with «noi».", answer: ["parliamo", "noi parliamo"], explain: "Noi parl-iamo." },
        { type: "mc", q: "Which is the right future form of «cantare» (io)?", options: ["cantarò", "canterò", "cantirò"], answer: 1, explain: "In the 1st conjugation the -a- becomes -e-: canterò." }
      ]
    },
    {
      type: "example",
      title: "Practical example: Matteo's diary",
      html: `<p><i>«Ieri <b>ho giocato</b> a calcio e <b>ho vinto</b>. Quando ero piccolo <b>dormivo</b> sempre dopo pranzo. Oggi <b>leggo</b> un fumetto. Domani <b>partirò</b> per la montagna e <b>camminerò</b> tanto.»</i></p>
<p>(Yesterday I played football and I won. When I was little I always used to sleep after lunch. Today I am reading a comic. Tomorrow I will leave for the mountains and I will walk a lot.)</p>
<table>
<tr><th>Verb</th><th>Infinitive</th><th>Conjugation</th><th>Tense</th></tr>
<tr><td>ho giocato</td><td>giocare</td><td>1st</td><td>passato prossimo</td></tr>
<tr><td>ho vinto</td><td>vincere</td><td>2nd</td><td>passato prossimo</td></tr>
<tr><td>dormivo</td><td>dormire</td><td>3rd</td><td>imperfetto</td></tr>
<tr><td>leggo</td><td>leggere</td><td>2nd</td><td>presente</td></tr>
<tr><td>partirò</td><td>partire</td><td>3rd</td><td>future</td></tr>
<tr><td>camminerò</td><td>camminare</td><td>1st</td><td>future</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Practical example: finding the infinitive",
      html: `<p>To know the conjugation of a conjugated verb, you must first <b>go back to the infinitive</b>. Ask yourself: “What does it mean to do this action?”</p>
<ul>
<li>«Noi <b>ridiamo</b>» (we laugh) → what are we doing? <b>ridere</b> → 2nd conjugation.</li>
<li>«Voi <b>aprite</b>» (you open) → <b>aprire</b> → 3rd conjugation.</li>
<li>«Loro <b>ballavano</b>» (they were dancing) → <b>ballare</b> → 1st conjugation.</li>
<li>«Tu <b>capirai</b>» (you will understand) → <b>capire</b> → 3rd conjugation.</li>
</ul>
<p>Trick: try putting «<b>Devo</b> …» (I must) in front: «Devo ridere», «Devo aprire», «Devo ballare». After «devo» the verb is always in the infinitive!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? New verbs all go in -are",
      html: `<p>When a new verb is born, in Italian it almost always ends in <b>-are</b>: <i>cliccare, chattare, postare, zoomare, scannerizzare, googlare</i> (to click, to chat, to post, to zoom, to scan, to google). The first conjugation is the biggest family (it contains most Italian verbs) and also the most regular: that is why it welcomes the newcomers! 📱</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? In Latin there were four families",
      html: `<p><b>Latin</b>, the language Italian comes from, had <b>four</b> conjugations: <i>amāre, timēre, legĕre, audīre</i>. Two of these (that of <i>timēre</i>, stressed on the “e”, and that of <i>legĕre</i>, stressed further back) merged into our 2nd conjugation. That is why we say te<b>mé</b>re but <b>lèg</b>gere: two different stresses in the same family!</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>1st conjugation: <b>-are</b> · 2nd: <b>-ere</b> · 3rd: <b>-ire</b>.</li>
<li>Verb = <b>root</b> (meaning) + <b>ending</b> (person and tense).</li>
<li>Persons: io, tu, lui/lei (singular) · noi, voi, loro (plural).</li>
<li>Passato prossimo = auxiliary + participle (-ato, -uto, -ito).</li>
<li>Future: cant-<b>erò</b> (the -a- becomes -e-), cred-<b>erò</b>, dorm-<b>irò</b>.</li>
<li>Essere and avere have a conjugation of their own: they are irregular.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand conjugations",
      intro: "Do tables not stick in your head? Try a machine, another country, cards or a matching game.",
      tabs: [
        {
          label: "⚙️ The verb machine",
          html: `<p>Imagine a machine with two knobs. The first knob chooses <b>who</b> (io, tu, lui…), the second chooses <b>when</b> (yesterday, today, tomorrow). You put the root in and the machine sticks on the right ending!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f1f5f9"/>
<rect x="30" y="100" width="120" height="60" rx="10" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="90" y="138" font-size="24" font-weight="bold" text-anchor="middle" fill="#713f12">CANT-</text>
<path d="M155 130 L200 130" stroke="#334155" stroke-width="5"/>
<polygon points="200,120 218,130 200,140" fill="#334155"/>
<rect x="220" y="50" width="200" height="160" rx="20" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<circle cx="280" cy="110" r="38" fill="#f472b6" stroke="#9d174d" stroke-width="4"/>
<circle cx="360" cy="150" r="38" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<text x="280" y="117" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">WHO?</text>
<text x="360" y="157" font-size="18" font-weight="bold" text-anchor="middle" fill="#ffffff">WHEN?</text>
<text x="280" y="175" font-size="16" text-anchor="middle" fill="#1f2937">noi</text>
<text x="360" y="85" font-size="16" text-anchor="middle" fill="#1f2937">tomorrow</text>
<path d="M425 130 L470 130" stroke="#334155" stroke-width="5"/>
<polygon points="470,120 488,130 470,140" fill="#334155"/>
<rect x="490" y="100" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="540" y="128" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">cant-</text>
<text x="540" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">eremo</text>
</svg>`
        },
        {
          label: "🇬🇧 Is it easier in English?",
          html: `<p>In <b>English</b> verbs change very little: that is why English speakers must <b>always</b> say the subject.</p>
<table>
<tr><th>Italian</th><th>English</th></tr>
<tr><td>canto, canti, canta</td><td>I sing, you sing, he sing<b>s</b></td></tr>
<tr><td>ho cantato</td><td>I sang (past)</td></tr>
<tr><td>canterò</td><td>I <b>will</b> sing (future with «will»)</td></tr>
<tr><td>gioco → ho giocato</td><td>I play → I play<b>ed</b></td></tr>
</table>
<p>In Italian, instead, the ending already says who does the action: «<b>Cantiamo</b>!» necessarily means «we sing». We can even leave out the subject!</p>`
        },
        {
          label: "🎵 The vowel trick",
          html: `<p>Every family has its own <b>heart vowel</b>, the one just before -re:</p>
<ul>
<li>cant-<b>A</b>-re → cant<b>a</b>te, cant<b>a</b>vo, cant<b>a</b>to</li>
<li>cred-<b>E</b>-re → cred<b>e</b>te, cred<b>e</b>vo (but credu-to)</li>
<li>dorm-<b>I</b>-re → dorm<b>i</b>te, dorm<b>i</b>vo, dorm<b>i</b>to</li>
</ul>
<p>In the <b>voi</b> person and in the <b>imperfetto</b> the heart vowel always shows: if you remember it, you make far fewer mistakes!</p>`
        },
        {
          label: "🃏 Verb cards",
          html: `<p>On the front there is a conjugated verb. Try to say the infinitive, the conjugation and the tense, then flip the card.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "nuoteremo", back: "nuotare · 1st · future · noi" },
              { front: "hai letto", back: "leggere · 2nd · passato prossimo · tu" },
              { front: "sentivano", back: "sentire · 3rd · imperfetto · loro" },
              { front: "corre", back: "correre · 2nd · present · lui/lei" },
              { front: "finisco", back: "finire · 3rd (with -isc-) · present · io" },
              { front: "giocavate", back: "giocare · 1st · imperfetto · voi" }
            ]
          }
        },
        {
          label: "🔗 Match person and ending",
          html: `<p>Verb «dormire» in the present: connect each person to its form.</p>`,
          widget: "match",
          options: { pairs: [["io", "dormo"], ["tu", "dormi"], ["lui", "dorme"], ["noi", "dormiamo"], ["voi", "dormite"], ["loro", "dormono"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of conjugations: tap a node and find out why",
      nodes: [
        { id: "verbo", label: "Verb", x: 50, y: 6, color: "#2563eb", html: "A word that shows an action or a state.", why: "Without a verb there is no sentence: it is the “engine” that says what happens. The Greek grammarians already called it <i>rhêma</i>, “what is said” about the subject." },
        { id: "infinito", label: "Infinitive", x: 50, y: 26, color: "#0ea5e9", html: "The “base” form of the verb: cantare, leggere, dormire.", why: "It is called infinitive because it is “not defined”: it does not say who does the action or when. That is why dictionaries list verbs in the infinitive." },
        { id: "are", label: "1st: -are", x: 18, y: 46, color: "#dc2626", html: "The biggest and most regular family: amare, giocare.", why: "It comes from the Latin 1st conjugation (<i>amāre</i>), already very regular: that is why new verbs (chattare, cliccare) enter here." },
        { id: "ere", label: "2nd: -ere", x: 50, y: 46, color: "#16a34a", html: "Credere, leggere, vedere: many irregular verbs.", why: "It was born from the merging of two Latin conjugations (<i>timēre</i> and <i>legĕre</i>). That is why it contains verbs with different stresses and many irregularities (letto, scritto, visto)." },
        { id: "ire", label: "3rd: -ire", x: 82, y: 46, color: "#2563eb", html: "Dormire, partire, finire.", why: "It comes from the Latin 4th conjugation (<i>audīre</i>). The addition of <b>-isc-</b> (finisco) comes from a Latin suffix that showed an action beginning or developing (<i>-esco</i>)." },
        { id: "desinenza", label: "Root + ending", x: 22, y: 70, color: "#f59e0b", html: "Cant- (meaning) + -iamo (who and when).", why: "Italian, like Latin, is an “inflected” language: it puts information inside the word, by changing its end. So a single word («cantiamo») says action, person, number and tense." },
        { id: "persone", label: "The six persons", x: 50, y: 92, color: "#ec4899", html: "Io, tu, lui/lei, noi, voi, loro.", why: "There are three persons (who speaks, who listens, who is spoken about), each in the singular and the plural: 3 × 2 = 6 forms." },
        { id: "tempi", label: "Past, present, future", x: 78, y: 70, color: "#a855f7", html: "Ho cantato / cantavo · canto · canterò.", why: "The Italian future was born from spoken Latin: «cantare habeo» (I have to sing) → «canterò». In fact the endings of the future (-ò, -ai, -à, -emo, -ete, -anno) look like the verb avere!" },
        { id: "irregolari", label: "Irregular verbs", x: 85, y: 90, color: "#64748b", html: "Essere, avere, andare, fare: they do not follow the rules.", why: "They are the most used verbs: by being repeated over the centuries they have been “worn down” and transformed, like a coin passed from hand to hand." }
      ],
      edges: [
        ["verbo", "infinito", "is looked up in the"],
        ["infinito", "are", "ends in"],
        ["infinito", "ere", "ends in"],
        ["infinito", "ire", "ends in"],
        ["are", "desinenza", "is conjugated by changing the"],
        ["desinenza", "persone", "tells the"],
        ["ire", "tempi", "and also the tense"],
        ["tempi", "irregolari", "exceptions:"],
        ["desinenza", "tempi", "tells the"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: tenses",
      questions: [
        { type: "mc", q: "«Partivamo» is…", options: ["present", "imperfect", "future"], answer: 1, explain: "The ending -ivamo shows the imperfect (3rd conjugation)." },
        { type: "mc", q: "The past participle of «dormire» is…", options: ["dormato", "dormuto", "dormito"], answer: 2, explain: "3rd conjugation: -ito → dormito." },
        { type: "tf", q: "«Ho mangiato» is a compound tense.", answer: true, explain: "It is formed by two words: the auxiliary «ho» and the participle «mangiato»." }
      ]
    }
  ],
  glossary: [
    { t: "Conjugation (coniugazione)", d: "A family of verbs with the same ending in the infinitive (-are, -ere, -ire); also the set of all the forms of a verb." },
    { t: "Infinitive", d: "The base form of the verb, the one in the dictionary (cantare)." },
    { t: "Root", d: "The part of the verb that carries the meaning (cant-)." },
    { t: "Ending (desinenza)", d: "The final part of the verb that changes with person and tense (-iamo, -erò)." },
    { t: "Person", d: "Who does the action: io, tu, lui/lei, noi, voi, loro." },
    { t: "Simple tense", d: "A tense formed by a single word (canto, cantavo, canterò)." },
    { t: "Compound tense", d: "A tense formed by auxiliary + participle (ho cantato)." },
    { t: "Past participle", d: "The form of the verb in -ato, -uto, -ito." },
    { t: "Imperfetto", d: "A past tense that describes habits or situations (giocavo)." },
    { t: "Futuro semplice", d: "A tense showing an action that will happen (giocherò)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which conjugation does «capire» belong to?", options: ["1st", "2nd", "3rd"], answer: 2, explain: "It ends in -ire: 3rd conjugation." },
      { type: "mc", q: "What is the infinitive of «vedevamo»?", options: ["vedare", "vedere", "vedire"], answer: 1, explain: "Vedere, 2nd conjugation." },
      { type: "text", q: "Conjugate «ballare» in the future with «io».", answer: ["ballero", "io ballero", "ballerò", "io ballerò"], explain: "Io ballerò: the -a- becomes -e-." },
      { type: "tf", q: "In the present, the ending for «noi» is -iamo for all three conjugations.", answer: true, explain: "Cantiamo, crediamo, dormiamo." },
      { type: "mc", q: "In «Loro aprono la porta» (They open the door), the verb is in the…", options: ["passato prossimo", "present", "future"], answer: 1, explain: "Aprono: present of aprire, 3rd person plural." },
      { type: "mc", q: "Which form is wrong?", options: ["voi correte", "voi dormite", "voi cantete"], answer: 2, explain: "Cantare is 1st conjugation: voi cantate." },
      { type: "text", q: "Write the past participle of «credere».", answer: ["creduto"], explain: "2nd conjugation: -uto → creduto." },
      { type: "mc", q: "Which verb takes -isc- in the present?", options: ["dormire", "pulire", "partire"], answer: 1, explain: "Io pulisco, tu pulisci, lui pulisce." },
      { type: "order", q: "Put in order from the past to the future.", items: ["ho saltato", "salto", "salterò"], explain: "Passato prossimo, present, future." },
      { type: "mc", q: "In «Tu leggevi un fumetto» (You were reading a comic), the verb is…", options: ["imperfect, 2nd conjugation", "present, 2nd conjugation", "imperfect, 3rd conjugation"], answer: 0, explain: "Leggere (2nd), the imperfect ending -evi." },
      { type: "tf", q: "New verbs like «chattare» usually join the 3rd conjugation.", answer: false, explain: "They join the 1st conjugation, in -are." },
      { type: "text", q: "Conjugate «sentire» in the present with «voi».", answer: ["sentite", "voi sentite"], explain: "Voi sent-ite." }
    ]
  }
});
