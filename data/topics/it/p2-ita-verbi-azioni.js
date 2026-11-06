TOPIC('it', {
  id: "p2-ita-verbi-azioni",
  title: "I verbi: le azioni",
  intro: "Corro 🏃, salto 🤸, mangio 🍝, dormo 😴… Le parole che dicono <b>che cosa si fa</b> si chiamano <b>verbi</b>. Senza verbi le frasi non si muovono!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cos'è un verbo",
      html: `<p>Il <b>verbo</b> è la parola che dice <b>che cosa fa</b> qualcuno o qualcosa.</p>
<ul>
<li>Il cane <b>abbaia</b>. 🐕</li>
<li>La bambina <b>disegna</b>. 🖍️</li>
<li>Il sole <b>splende</b>. ☀️</li>
<li>Gli uccelli <b>volano</b>. 🐦</li>
</ul>
<p>Per trovarlo, chiediti: <b>che cosa fa?</b></p>
<p>Il verbo è il <b>motore</b> della frase: senza verbo la frase non funziona. Prova: «Il cane… la palla». Che cosa fa il cane? Manca qualcosa! 🤔</p>`
    },
    {
      type: "svg",
      title: "Chi fa l'azione e l'azione",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<circle cx="130" cy="90" r="32" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<path d="M98 80 Q130 40 162 80" fill="#7c2d12"/>
<line x1="130" y1="122" x2="130" y2="190" stroke="#2563eb" stroke-width="10"/>
<line x1="130" y1="140" x2="85" y2="115" stroke="#2563eb" stroke-width="8"/>
<line x1="130" y1="140" x2="180" y2="110" stroke="#2563eb" stroke-width="8"/>
<line x1="130" y1="190" x2="90" y2="240" stroke="#1e3a8a" stroke-width="8"/>
<line x1="130" y1="190" x2="175" y2="225" stroke="#1e3a8a" stroke-width="8"/>
<circle cx="230" cy="215" r="20" fill="#ffffff" stroke="#111827" stroke-width="3"/>
<path d="M190 210 L205 212 M190 222 L205 220" stroke="#64748b" stroke-width="3"/>
<rect x="300" y="60" width="270" height="70" rx="14" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="435" y="105" font-size="28" text-anchor="middle" fill="#14532d" font-weight="bold">Chi? → Marco</text>
<rect x="300" y="160" width="270" height="70" rx="14" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<text x="435" y="205" font-size="28" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Che fa? → calcia</text>
<text x="300" y="280" font-size="22" text-anchor="middle" fill="#1f2937">Marco <tspan fill="#dc2626" font-weight="bold">calcia</tspan> la palla.</text>
</svg>`,
      caption: "Chi fa l'azione è Marco; l'azione, cioè il verbo, è «calcia»."
    },
    {
      type: "widget",
      title: "Gioco: azione o no?",
      widget: "classify",
      options: { groups: ["È un verbo (azione)", "Non è un verbo"], items: [
        ["🏊 nuota", 0], ["🎒 zaino", 1], ["😂 ride", 0], ["🌳 albero", 1],
        ["🍽️ mangia", 0], ["🔴 rosso", 1], ["✍️ scrive", 0], ["🐱 gatto", 1],
        ["🎤 canta", 0], ["😊 felice", 1]
      ] },
      caption: "Chiediti: si può FARE? Se sì, è un verbo."
    },
    {
      type: "quiz",
      title: "Mini-quiz: trova il verbo",
      questions: [
        { type: "mc", q: "In «La mamma cucina la pasta» il verbo è…", options: ["mamma", "cucina", "pasta"], answer: 1, explain: "Che cosa fa la mamma? Cucina." },
        { type: "mc", q: "Quale parola è un verbo?", options: ["salta", "sedia", "verde"], answer: 0, explain: "Saltare è un'azione." },
        { type: "tf", q: "Ogni frase ha bisogno di un verbo.", answer: true, explain: "Il verbo è il motore della frase." }
      ]
    },
    {
      type: "text",
      title: "Chi fa l'azione: io, tu, lui…",
      html: `<p>Il verbo <b>cambia</b> a seconda di <b>chi</b> fa l'azione. Guarda il verbo <b>cantare</b> 🎤:</p>
<table>
<tr><td><b>io</b> cant<b>o</b></td><td><b>noi</b> cant<b>iamo</b></td></tr>
<tr><td><b>tu</b> cant<b>i</b></td><td><b>voi</b> cant<b>ate</b></td></tr>
<tr><td><b>lui / lei</b> cant<b>a</b></td><td><b>loro</b> cant<b>ano</b></td></tr>
</table>
<p>La prima parte (<b>cant-</b>) resta uguale; cambia la parte finale. Basta guardare la fine del verbo per capire chi agisce!</p>`
    },
    {
      type: "text",
      title: "Ieri, oggi, domani: il tempo del verbo",
      html: `<p>Il verbo ci dice anche <b>quando</b> succede l'azione:</p>
<ul>
<li>⏪ <b>Passato</b> (ieri): ho giocato, giocavo</li>
<li>⏺️ <b>Presente</b> (oggi, adesso): gioco</li>
<li>⏩ <b>Futuro</b> (domani): giocherò</li>
</ul>
<p>Quando cerchi un verbo sul vocabolario, lo trovi all'<b>infinito</b>: la forma «di base» che finisce in <b>-are</b>, <b>-ere</b> o <b>-ire</b>: gioc<b>are</b>, legg<b>ere</b>, dorm<b>ire</b>.</p>`
    },
    {
      type: "widget",
      title: "Gioco: passato, presente o futuro?",
      widget: "classify",
      options: { groups: ["⏪ Passato", "⏺️ Presente", "⏩ Futuro"], items: [
        ["ho mangiato", 0], ["sono andato", 0], ["correvo", 0],
        ["mangio", 1], ["vado", 1], ["corro", 1],
        ["mangerò", 2], ["andrò", 2], ["correrò", 2]
      ] },
      caption: "Pensa: è già successo, succede adesso o succederà?"
    },
    {
      type: "example",
      title: "Esempio: la giornata di Lucia ☀️",
      html: `<p>«La mattina Lucia si <b>sveglia</b>, si <b>lava</b> e <b>fa</b> colazione. Poi <b>prende</b> lo zaino e <b>va</b> a scuola. In classe <b>legge</b>, <b>scrive</b> e <b>gioca</b> con gli amici.»</p>
<p>Quanti verbi! Sveglia, lava, fa, prende, va, legge, scrive, gioca: <b>8 azioni</b>. Sono tutte al <b>presente</b> e le fa <b>lei</b> (Lucia).</p>`
    },
    {
      type: "example",
      title: "Esempio: il fumetto senza verbi 💬",
      html: `<p>Leggi questo fumetto senza verbi: «Pierino… dall'albero. La mamma… forte. Il dottore… la gamba.»</p>
<p>Non si capisce niente! Ora con i verbi: «Pierino <b>cade</b> dall'albero. La mamma <b>urla</b> forte. Il dottore <b>cura</b> la gamba.»</p>
<p>Adesso la storia ha senso: sono i verbi che fanno <b>muovere</b> i personaggi!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Non tutti i verbi sono azioni movimentate! Anche <b>dormire</b>, <b>pensare</b>, <b>stare</b> e <b>essere</b> sono verbi: dicono che cosa succede o come si sta.</p>
<p>I due verbi più usati in italiano sono <b>essere</b> e <b>avere</b>: ci aiutano anche a formare il passato (sono andato, ho mangiato). Per questo si chiamano verbi <b>ausiliari</b>, cioè «aiutanti». 🦸</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In <b>cinese</b> i verbi <b>non cambiano mai</b>! Per dire «ieri» o «domani» si aggiungono altre paroline. 🇨🇳</p>
<p>In italiano, invece, un solo verbo come «cantare» ha più di <b>50 forme diverse</b>: canto, cantavi, canterà, cantassimo… È una lingua ricchissima!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il <b>verbo</b> dice che cosa fa qualcuno: domanda «<b>che cosa fa?</b>».</li>
<li>Cambia a seconda di <b>chi</b> fa l'azione (io canto, tu canti…).</li>
<li>Cambia a seconda di <b>quando</b>: passato, presente, futuro.</li>
<li>L'<b>infinito</b> finisce in -are, -ere, -ire.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i verbi",
      intro: "Il verbo si capisce meglio… muovendosi! Prova queste strade.",
      tabs: [
        {
          label: "🎭 Il mimo",
          html: `<p>Gioca con i compagni: uno pesca un bigliettino e <b>mima</b> senza parlare, gli altri indovinano.</p>
<p>Se si può mimare, è quasi sempre un <b>verbo</b>: nuotare 🏊, saltare, dormire, mangiare, ridere.</p>
<p>Prova a mimare «tavolo» o «rosso»… non si può! Perché sono un nome e un aggettivo, non azioni.</p>`
        },
        {
          label: "🚂 Il trenino della frase",
          html: `<p>Immagina la frase come un <b>trenino</b>: il verbo è la <b>locomotiva</b> 🚂 che tira tutti i vagoni.</p>
<p>Senza locomotiva i vagoni (i nomi, gli aggettivi) restano fermi in stazione.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f0f9ff"/>
<line x1="20" y1="160" x2="580" y2="160" stroke="#475569" stroke-width="4"/>
<rect x="400" y="70" width="160" height="75" rx="10" fill="#dc2626"/>
<rect x="500" y="40" width="40" height="35" fill="#991b1b"/>
<circle cx="430" cy="155" r="14" fill="#1f2937"/><circle cx="530" cy="155" r="14" fill="#1f2937"/>
<text x="480" y="118" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">MANGIA</text>
<rect x="220" y="80" width="160" height="65" rx="10" fill="#2563eb"/>
<circle cx="250" cy="155" r="14" fill="#1f2937"/><circle cx="350" cy="155" r="14" fill="#1f2937"/>
<text x="300" y="120" font-size="24" text-anchor="middle" fill="#ffffff" font-weight="bold">il topo</text>
<rect x="40" y="80" width="160" height="65" rx="10" fill="#16a34a"/>
<circle cx="70" cy="155" r="14" fill="#1f2937"/><circle cx="170" cy="155" r="14" fill="#1f2937"/>
<text x="120" y="120" font-size="24" text-anchor="middle" fill="#ffffff" font-weight="bold">il formaggio</text>
<line x1="200" y1="115" x2="220" y2="115" stroke="#1f2937" stroke-width="5"/>
<line x1="380" y1="115" x2="400" y2="115" stroke="#1f2937" stroke-width="5"/>
</svg>`
        },
        {
          label: "🔗 Abbina",
          html: `<p>Abbina ogni personaggio alla sua azione tipica.</p>`,
          widget: "match",
          options: { pairs: [
            ["🐕 il cane", "abbaia"],
            ["🐦 l'uccellino", "cinguetta"],
            ["🐟 il pesce", "nuota"],
            ["👩‍🍳 la cuoca", "cucina"],
            ["👨‍🏫 il maestro", "spiega"],
            ["🌧️ la pioggia", "cade"]
          ] }
        },
        {
          label: "🌍 Nelle altre lingue",
          html: `<ul>
<li>🇬🇧 In <b>inglese</b> il verbo cambia pochissimo: <i>I play, you play, he play<b>s</b></i>. Per questo bisogna sempre dire chi agisce (I, you, he).</li>
<li>🇮🇹 In <b>italiano</b> la fine del verbo dice già chi agisce, quindi possiamo anche non dirlo: «<b>Gioco</b>» vuol dire sicuramente «io gioco»!</li>
<li>🇨🇳 In <b>cinese</b> il verbo non cambia per niente.</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei verbi",
      nodes: [
        { id: "verbo", label: "Verbo", x: 50, y: 8, color: "#dc2626", html: "La parola che dice che cosa fa (o com'è) qualcuno.", why: "Viene dal latino <i>verbum</i>, che vuol dire semplicemente «parola»: per gli antichi grammatici era «la parola» per eccellenza, la più importante della frase." },
        { id: "azione", label: "Azione", x: 18, y: 32, color: "#f97316", html: "Correre, mangiare, scrivere…", why: "La maggior parte dei verbi descrive azioni, perché le storie e le frasi raccontano soprattutto cose che succedono." },
        { id: "stato", label: "Stato", x: 42, y: 32, color: "#a855f7", html: "Essere, stare, dormire: non sempre c'è movimento.", why: "Anche «essere stanchi» o «stare seduti» è qualcosa che accade al soggetto: per questo anche questi sono verbi." },
        { id: "soggetto", label: "Chi agisce (persona)", x: 68, y: 32, color: "#16a34a", html: "io, tu, lui/lei, noi, voi, loro.", why: "La fine del verbo cambia per dirci chi agisce: canto, canti, canta. Per questo in italiano si può anche non dire «io»." },
        { id: "tempo", label: "Tempo", x: 88, y: 55, color: "#0ea5e9", html: "Passato, presente, futuro.", why: "Il verbo è l'unica parola che ci dice quando succede qualcosa. I grammatici latini lo chiamavano <i>tempus</i>." },
        { id: "infinito", label: "Infinito", x: 30, y: 60, color: "#2563eb", html: "La forma di base: cantare, leggere, dormire.", why: "Si chiama «infinito» (cioè «non definito») perché non dice né chi agisce né quando: è il verbo «puro», come lo trovi sul vocabolario." },
        { id: "coniugazioni", label: "Tre coniugazioni", x: 30, y: 85, color: "#14b8a6", html: "-are (1ª), -ere (2ª), -ire (3ª).", why: "Il latino ne aveva quattro (-are, -ēre, -ere, -ire): in italiano la 2ª e la 3ª latina si sono unite in una sola, -ere." },
        { id: "ausiliari", label: "Essere e avere", x: 68, y: 85, color: "#64748b", html: "I verbi aiutanti: ho mangiato, sono andato.", why: "Si chiamano «ausiliari» dal latino <i>auxilium</i>, «aiuto»: aiutano gli altri verbi a formare il passato." }
      ],
      edges: [
        ["verbo", "azione", "indica"],
        ["verbo", "stato", "indica"],
        ["verbo", "soggetto", "cambia con"],
        ["verbo", "tempo", "cambia con"],
        ["verbo", "infinito", "forma base"],
        ["infinito", "coniugazioni", "finisce in"],
        ["tempo", "ausiliari", "usa"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: persone e tempi",
      questions: [
        { type: "mc", q: "Noi … al parco.", options: ["gioco", "giochiamo", "giocano"], answer: 1, explain: "Con «noi» il verbo finisce in -iamo." },
        { type: "mc", q: "«Domani andrò al mare» è al…", options: ["passato", "presente", "futuro"], answer: 2, explain: "Domani: futuro." },
        { type: "tf", q: "«Leggere» è un verbo all'infinito.", answer: true, explain: "Finisce in -ere: è la forma di base." }
      ]
    }
  ],
  glossary: [
    { t: "Verbo", d: "Parola che dice che cosa fa qualcuno o che cosa succede." },
    { t: "Azione", d: "Qualcosa che si fa: correre, mangiare, scrivere." },
    { t: "Persona", d: "Chi fa l'azione: io, tu, lui/lei, noi, voi, loro." },
    { t: "Tempo", d: "Quando succede l'azione: passato, presente, futuro." },
    { t: "Infinito", d: "Forma di base del verbo, in -are, -ere, -ire." },
    { t: "Ausiliari", d: "I verbi essere e avere, che aiutano a formare altri tempi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In «Il gatto beve il latte» il verbo è…", options: ["gatto", "beve", "latte"], answer: 1, explain: "Che cosa fa il gatto? Beve." },
      { type: "mc", q: "Quale parola NON è un verbo?", options: ["correre", "dorme", "pallone"], answer: 2, explain: "Pallone è un nome." },
      { type: "tf", q: "«Saltare» è un'azione.", answer: true, explain: "Saltare si può fare: è un verbo." },
      { type: "mc", q: "Tu … un disegno.", options: ["faccio", "fai", "fanno"], answer: 1, explain: "Con «tu»: fai." },
      { type: "mc", q: "«Ieri ho visto un film» è al…", options: ["passato", "presente", "futuro"], answer: 0, explain: "Ieri: è già successo." },
      { type: "mc", q: "Quale verbo è all'infinito?", options: ["dormo", "dormire", "dormirò"], answer: 1, explain: "Dormire finisce in -ire: infinito." },
      { type: "text", q: "Scrivi l'infinito di «mangio».", answer: ["mangiare"], explain: "Mangio → mangiare (-are)." },
      { type: "text", q: "Completa con il verbo «nuotare»: Il pesce … nel mare.", answer: ["nuota"], explain: "Lui/lei/esso: nuota." },
      { type: "tf", q: "In «Loro cantano» chi agisce sono più persone.", answer: true, explain: "Loro = più persone; il verbo finisce in -ano." },
      { type: "mc", q: "Quanti verbi ci sono in «Anna ride e salta»?", options: ["1", "2", "3"], answer: 1, explain: "Ride e salta: 2 verbi." },
      { type: "order", q: "Metti in ordine dal passato al futuro.", items: ["ho giocato", "gioco", "giocherò"], explain: "Passato → presente → futuro." }
    ]
  }
});
