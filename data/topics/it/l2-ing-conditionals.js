TOPIC('it', {
  id: "l2-ing-conditionals",
  title: "Conditionals",
  intro: "\"If you <b>heat</b> ice, it <b>melts</b>.\" / \"If it <b>rains</b>, we <b>will stay</b> home.\" / \"If I <b>won</b> the lottery, I <b>would travel</b> the world.\" / \"If I <b>had studied</b>, I <b>would have passed</b>.\" Quattro frasi, quattro gradi di realtà: dal fatto sicuro al rimpianto impossibile. I <b>conditionals</b> sono la grammatica delle ipotesi, e in inglese seguono regole molto più rigide dell'italiano. 🔀",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Come è fatta una frase condizionale",
      html: `<p>Ogni periodo ipotetico ha due parti:</p>
<ul>
<li>la <b>if-clause</b> (la condizione, la \"protasi\"): <i>If it rains…</i></li>
<li>la <b>main clause</b> (la conseguenza, l'\"apodosi\"): <i>…we will stay home.</i></li>
</ul>
<p>L'ordine si può invertire. Se la if-clause è <b>prima</b>, si mette la <b>virgola</b>; se è dopo, niente virgola: <i>If it rains, we will stay home.</i> = <i>We will stay home if it rains.</i></p>
<p>L'inglese ha quattro tipi principali, scelti in base al <b>grado di probabilità</b>:</p>
<table>
<tr><th>Tipo</th><th>Probabilità</th><th>Schema</th></tr>
<tr><td><b>Zero</b></td><td>sempre vero (fatti)</td><td>If + present, present</td></tr>
<tr><td><b>First</b></td><td>possibile, reale</td><td>If + present, will + base</td></tr>
<tr><td><b>Second</b></td><td>improbabile o immaginario</td><td>If + past simple, would + base</td></tr>
<tr><td><b>Third</b></td><td>impossibile (passato irrealizzabile)</td><td>If + past perfect, would have + participio</td></tr>
</table>`
    },
    {
      type: "text",
      title: "2. Zero e first conditional",
      html: `<p><b>Zero conditional</b>: leggi scientifiche, abitudini, verità generali. <b>If</b> può essere sostituito da <b>when</b> senza cambiare senso.</p>
<ul>
<li><i>If you <b>heat</b> water to 100 °C, it <b>boils</b>.</i></li>
<li><i>If I <b>drink</b> coffee at night, I <b>can't</b> sleep.</i></li>
</ul>
<p><b>First conditional</b>: una situazione <b>reale e possibile</b> nel futuro, con le sue conseguenze.</p>
<ul>
<li><i>If it <b>rains</b> tomorrow, we <b>will cancel</b> the picnic.</i></li>
<li><i>If you <b>study</b> hard, you <b>will pass</b> the exam.</i></li>
</ul>
<p>⚠️ <b>Non si usa will nella if-clause</b>: <s>If it will rain…</s> → <i>If it rains…</i>. In italiano diciamo <i>se pioverà</i> (futuro), l'inglese vuole il presente. Lo stesso vale per <b>when, as soon as, before, after, until, unless</b>: <i>I'll call you <b>as soon as I arrive</b>.</i></p>
<p>Nella main clause oltre a <b>will</b> si possono usare <b>can, may, might, should</b> o l'imperativo: <i>If you see Anna, <b>tell</b> her to call me.</i> / <i>If he is late, we <b>might miss</b> the train.</i></p>
<p><b>Unless</b> = <i>if … not</i>: <i>We'll go out <b>unless</b> it rains</i> = <i>if it doesn't rain</i>. Non si ripete la negazione: <s>unless it doesn't rain</s>.</p>`
    },
    {
      type: "text",
      title: "3. Second conditional",
      html: `<p>Si usa per situazioni <b>improbabili, irreali o ipotetiche</b> nel presente o nel futuro: sogni, consigli, immaginazione.</p>
<p>Formula: <b>If + past simple, would + verbo base</b></p>
<ul>
<li><i>If I <b>won</b> the lottery, I <b>would buy</b> a house by the sea.</i> (non ho vinto, è poco probabile)</li>
<li><i>If I <b>were</b> you, I <b>would talk</b> to her.</i> (consiglio)</li>
<li><i>What <b>would</b> you <b>do</b> if you <b>saw</b> a ghost?</i></li>
</ul>
<p>Il past simple qui <b>non indica il passato</b>: indica la <b>distanza dalla realtà</b>. È il cosiddetto <i>past subjunctive</i>, il corrispettivo del nostro <i>congiuntivo imperfetto</i> (<i>se vincessi…</i>).</p>
<p>⚠️ Con <b>to be</b> si usa <b>were</b> per tutte le persone nello standard formale: <i>If <b>I were</b> rich…, If <b>he were</b> here…</i>. Nel parlato si sente anche <i>If I was</i>. Con <i>If I were you</i> si dà sempre were.</p>
<p>⚠️ Nella main clause <b>would</b>, non nella if-clause: <s>If I would have time, I would come</s> → <i>If I <b>had</b> time, I <b>would come</b>.</i></p>
<p>Al posto di would si possono usare <b>could</b> (<i>sarei in grado</i>) o <b>might</b> (<i>forse</i>): <i>If I had a car, I <b>could drive</b> you.</i></p>`
    },
    {
      type: "svg",
      title: "La scala della probabilità",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="28" font-size="17" text-anchor="middle" fill="#334155" font-weight="bold">Più è lontano dalla realtà, più il verbo "scivola" indietro</text>
<rect x="30" y="50" width="250" height="40" rx="10" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/>
<text x="155" y="76" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">ZERO: if + present</text>
<rect x="320" y="50" width="250" height="40" rx="10" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
<text x="445" y="76" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">FIRST: if + present, will</text>
<rect x="30" y="130" width="250" height="40" rx="10" fill="#fde68a" stroke="#ca8a04" stroke-width="3"/>
<text x="155" y="156" font-size="16" text-anchor="middle" fill="#713f12" font-weight="bold">SECOND: if + past, would</text>
<rect x="320" y="130" width="250" height="40" rx="10" fill="#fecaca" stroke="#dc2626" stroke-width="3"/>
<text x="445" y="156" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">THIRD: if + past perfect</text>
<text x="155" y="112" font-size="14" text-anchor="middle" fill="#334155">sempre vero</text>
<text x="445" y="112" font-size="14" text-anchor="middle" fill="#334155">possibile</text>
<text x="155" y="192" font-size="14" text-anchor="middle" fill="#334155">improbabile / immaginario</text>
<text x="445" y="192" font-size="14" text-anchor="middle" fill="#334155">impossibile (passato)</text>
<text x="300" y="240" font-size="15" text-anchor="middle" fill="#334155">If I study → I will pass.  If I studied → I would pass.</text>
<text x="300" y="265" font-size="15" text-anchor="middle" fill="#334155">If I had studied → I would have passed.</text>
</svg>`,
      caption: "Ogni passo verso l'irrealtà sposta il tempo verbale indietro di un gradino."
    },
    {
      type: "quiz",
      title: "Mini-quiz: zero, first, second",
      questions: [
        { type: "mc", q: "If it ___ tomorrow, we will stay at home.", options: ["will rain", "rains", "rained"], answer: 1, explain: "First conditional: if + present simple, mai will nella if-clause." },
        { type: "mc", q: "If I ___ you, I would apologise.", options: ["am", "was", "were"], answer: 2, explain: "If I were you: forma standard per consigli, con were." },
        { type: "tf", q: "\"If I would have time, I would help you\" è corretto.", answer: false, explain: "Would non va nella if-clause: If I had time, I would help you." },
        { type: "text", q: "Completa: If you heat ice, it ___ (melt). Scrivi il verbo.", answer: ["melts"], explain: "Zero conditional: present simple (it melts)." }
      ]
    },
    {
      type: "text",
      title: "4. Third conditional",
      html: `<p>Si parla di una situazione <b>passata che non si è realizzata</b>, e quindi non si può più cambiare: rimpianti, critiche, ipotesi sul passato.</p>
<p>Formula: <b>If + past perfect (had + participio), would have + participio</b></p>
<ul>
<li><i>If I <b>had studied</b> harder, I <b>would have passed</b> the exam.</i> (invece non ho studiato, non ho passato)</li>
<li><i>If she <b>hadn't missed</b> the bus, she <b>wouldn't have been</b> late.</i></li>
<li><i>What <b>would</b> you <b>have done</b> if you <b>had lost</b> your passport?</i></li>
</ul>
<p>Anche qui <b>would</b> non va nella if-clause: <s>If I would have studied</s>. Come per il second, al posto di would si possono usare <b>could have</b> o <b>might have</b>: <i>If we had left earlier, we <b>might have caught</b> the train.</i></p>
<p>Il past perfect è un <i>\"passato del passato\"</i>: l'ipotesi è nel passato, e inoltre irrealizzabile. In italiano corrisponde al <b>congiuntivo trapassato</b> (<i>se avessi studiato, avrei superato…</i>).</p>`
    },
    {
      type: "text",
      title: "5. Mixed conditionals, wish e altre strutture",
      html: `<p><b>Mixed conditionals</b> combinano un passato irreale con un effetto presente (o viceversa):</p>
<ul>
<li><i>If I <b>had taken</b> that job in London, I <b>would be</b> living there now.</i> (causa nel passato, effetto adesso)</li>
<li><i>If I <b>were</b> more organised, I <b>would have finished</b> the project yesterday.</i> (carattere abituale, effetto passato)</li>
</ul>
<p>Altre forme utili che esprimono condizione:</p>
<ul>
<li><b>Unless</b> = if not: <i>I won't go <b>unless</b> you come with me.</i></li>
<li><b>As long as / provided (that) / on condition that</b> = purché: <i>You can borrow my car <b>as long as</b> you drive carefully.</i></li>
<li><b>Suppose / supposing</b>: <i><b>Suppose</b> you lost your job, what would you do?</i></li>
<li><b>Inversione formale</b> (poco comune, scritta): <i><b>Had I known</b>, I would have told you.</i> (= If I had known) / <i><b>Should you need</b> help, call me.</i> / <i><b>Were I</b> you, I would accept.</i></li>
</ul>
<p>E i rimpianti con <b>wish / if only</b>: <i>I <b>wish</b> I <b>had</b> more time</i> (presente, irrealtà → past simple); <i>I <b>wish</b> I <b>had studied</b></i> (rimpianto sul passato → past perfect); <i>If only I <b>knew</b> the answer!</i></p>`
    },
    {
      type: "example",
      title: "Esempio pratico: una giornata di scelte",
      html: `<p>🎒 Marco riflette sul suo weekend.</p>
<ul>
<li><b>Zero</b>: <i>If I <b>sleep</b> badly, I <b>feel</b> terrible all day.</i></li>
<li><b>First</b>: <i>If the weather <b>is</b> nice on Saturday, I <b>will go</b> hiking with my friends.</i></li>
<li><b>Second</b>: <i>If I <b>had</b> a driving licence, I <b>would drive</b> to the lake. But I'm only sixteen.</i></li>
<li><b>Third</b>: <i>If I <b>had left</b> home ten minutes earlier on Friday, I <b>wouldn't have missed</b> the bus.</i></li>
</ul>
<p>Quattro frasi della stessa persona: cambia il grado di realtà, quindi cambia il tempo verbale.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: dare consigli",
      html: `<p>💬 Un'amica ha litigato con un compagno di classe.</p>
<ul>
<li><i>\"If I <b>were</b> you, I <b>would call</b> him and say sorry.\"</i></li>
<li><i>\"But what if he <b>doesn't want</b> to talk to me?\"</i></li>
<li><i>\"Then <b>send</b> a message. If he <b>replies</b>, <b>meet</b> him after school. And <b>unless</b> you <b>try</b>, you'll never know.\"</i></li>
</ul>
<p>Osserva: <b>If I were you…</b> (second) per il consiglio, <b>if he replies</b> (first) per una possibilità reale, <b>unless</b> al posto di <i>if you don't</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… \"If I were you\" è un congiuntivo?",
      html: `<p>L'inglese moderno ha quasi perso il congiuntivo, ma ne resta una traccia: <b>were</b> con la prima e la terza persona (<i>If I were rich, If he were here</i>) è l'ultimo resto del <i>subjunctive</i> dell'inglese antico. Per questo sembra \"sbagliato\" dire <i>I were</i>: è una forma che sopravvive solo in alcune espressioni, come <i>If I were you</i> o <i>as if it were true</i>. Il parlato quotidiano spesso usa <i>was</i>, ma in esami e scritti formali <b>were</b> è la scelta più sicura.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il futuro non si dice dopo \"if\"?",
      html: `<p>Una regola classica: dopo <i>if, when, as soon as, until</i> non si usa mai <b>will</b> per esprimere il futuro. È una delle ragioni per cui gli studenti italiani dicono spesso <s>If it will rain…</s> (traduzione letterale di <i>se pioverà</i>). Esiste però un'eccezione: <i>will</i> è possibile nella if-clause quando indica <b>volontà o cortesia</b>, non futuro: <i>If you <b>will</b> follow me, I'll show you the room.</i> (= se vuole seguirmi).</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i conditionals",
      intro: "Se i quattro tipi ti sembrano un labirinto, prova uno di questi percorsi.",
      tabs: [
        {
          label: "🎚️ Il regolatore di realtà",
          html: `<p>Immagina un regolatore da 0 a 100 di <b>probabilità</b>.</p>
<ul>
<li><b>100 %</b>: <i>zero</i> (è sempre così).</li>
<li><b>50-90 %</b>: <i>first</i> (può succedere).</li>
<li><b>5-20 %</b>: <i>second</i> (e se succedesse?).</li>
<li><b>0 %</b>: <i>third</i> (è passato, non si cambia).</li>
</ul>
<p>Più si scende, più il verbo \"scivola\" all'indietro: present → past simple → past perfect. È come se la distanza dalla realtà venisse espressa con la distanza temporale.</p>`
        },
        {
          label: "🧩 Gioco: che tipo è?",
          html: `<p>Associa ogni frase al conditional giusto.</p>`,
          widget: "classify",
          options: {
            groups: ["🔥 Zero / First (reale)", "🌈 Second (immaginario)", "⏪ Third (passato)"],
            items: [["If you heat ice, it melts.", 0], ["If it rains, we will stay in.", 0], ["If I were rich, I would buy a boat.", 1], ["If I had a dog, I would walk it daily.", 1], ["If I had known, I would have helped.", 2], ["If she hadn't left, she would have seen him.", 2]]
          }
        },
        {
          label: "🔗 Abbina: if-clause e main clause",
          html: `<p>Collega la prima parte alla seconda in modo coerente.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["If I won the lottery,", "I would travel the world."],
              ["If you mix red and blue,", "you get purple."],
              ["If we miss the bus,", "we will walk."],
              ["If I had set the alarm,", "I wouldn't have been late."]
            ]
          }
        },
        {
          label: "🇮🇹 Contrasto con l'italiano",
          html: `<p>L'italiano usa il <b>congiuntivo</b> nelle ipotesi irreali, l'inglese il <b>past simple</b> / <b>past perfect</b>. Attenzione al <b>futuro</b>:</p>
<table>
<tr><th>Italiano</th><th>Inglese</th></tr>
<tr><td><b>Se pioverà</b>, resteremo a casa.</td><td>If it <b>rains</b>, we will stay at home. (presente!)</td></tr>
<tr><td><b>Se vincessi</b>, comprerei una casa.</td><td>If I <b>won</b>, I <b>would buy</b> a house.</td></tr>
<tr><td><b>Se avessi studiato</b>, avrei superato l'esame.</td><td>If I <b>had studied</b>, I <b>would have passed</b>.</td></tr>
<tr><td><b>Se</b> non <b>fossi</b> in ritardo, ti aiuterei.</td><td>If I <b>weren't</b> late, I <b>would help</b> you.</td></tr>
</table>
<p>L'italiano ammette il <i>periodo ipotetico misto</i> con l'indicativo (<i>se ti ci portavo, ti divertivi</i>, informale): in inglese non è possibile, bisogna sempre usare la forma corretta.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei conditionals: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "cond", label: "Conditionals", x: 50, y: 8, color: "#2563eb", html: "If-clause + main clause: ipotesi e conseguenze.", why: "La logica del \"se… allora\" è una struttura universale del pensiero: da Aristotele alla logica moderna, il condizionale collega un'ipotesi a una conseguenza. L'inglese codifica il grado di realtà con il tempo verbale." },
        { id: "zero", label: "Zero", x: 12, y: 38, color: "#16a34a", html: "If + present, present.", why: "Poiché la causa produce sempre l'effetto, non serve il futuro: if e when sono quasi intercambiabili." },
        { id: "first", label: "First", x: 36, y: 38, color: "#0ea5e9", html: "If + present, will.", why: "L'ipotesi è reale, quindi il verbo della condizione è al presente (non c'è bisogno di \"proiettare\" nel futuro due volte); il futuro compare solo nella conseguenza." },
        { id: "second", label: "Second", x: 62, y: 38, color: "#f97316", html: "If + past, would + base.", why: "Il past simple qui serve a \"prendere distanza\": la forma del passato segnala che la situazione è lontana dalla realtà presente. È il valore modale del passato, lo stesso del congiuntivo italiano." },
        { id: "third", label: "Third", x: 88, y: 38, color: "#dc2626", html: "If + past perfect, would have + pp.", why: "Il past perfect aggiunge una seconda distanza: non solo irreale, ma anche già concluso nel tempo. Esprime quindi il rimpianto: nulla si può più cambiare." },
        { id: "mixed", label: "Mixed", x: 50, y: 66, color: "#a855f7", html: "Past perfect + would (presente), o viceversa.", why: "Il tempo dell'ipotesi e quello della conseguenza possono essere diversi: la grammatica permette di combinare i due assi, passato/presente, con la stessa logica." },
        { id: "alt", label: "Unless, as long as…", x: 18, y: 70, color: "#eab308", html: "Altri connettivi condizionali.", why: "Unless = if not; as long as = solo se. Servono a precisare la natura della condizione (esclusione o limite)." },
        { id: "err", label: "Errori tipici", x: 50, y: 92, color: "#64748b", html: "If it will rain / If I would have time.", why: "Gli errori nascono da traduzioni letterali: l'italiano usa il futuro (<i>se pioverà</i>) o il condizionale (<i>se avrei</i>, errore popolare) nella condizione. In inglese la condizione porta il presente o il past, e il would sta solo nella conseguenza." }
      ],
      edges: [
        ["cond", "zero", "fatti"],
        ["cond", "first", "possibile"],
        ["cond", "second", "immaginario"],
        ["cond", "third", "impossibile"],
        ["second", "mixed", "combinabili"],
        ["third", "mixed", "combinabili"],
        ["cond", "alt", "varianti"],
        ["first", "err", "attenzione"],
        ["second", "err", "attenzione"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: third e mixed",
      questions: [
        { type: "mc", q: "If she ___ the bus, she wouldn't have been late.", options: ["hadn't missed", "didn't miss", "wouldn't miss"], answer: 0, explain: "Third conditional: if + past perfect (hadn't missed)." },
        { type: "mc", q: "Quale frase esprime un rimpianto sul passato?", options: ["If I knew, I would tell you.", "If I had known, I would have told you.", "If I know, I will tell you."], answer: 1, explain: "Third conditional: past perfect + would have + participio." },
        { type: "tf", q: "\"We'll go out unless it doesn't rain\" è corretto.", answer: false, explain: "Unless contiene già la negazione: unless it rains." },
        { type: "text", q: "Completa: If I had taken that job, I ___ living in London now. Scrivi la forma con would.", answer: ["would be", "'d be"], explain: "Mixed conditional: would be living (effetto presente)." }
      ]
    }
  ],
  glossary: [
    { t: "If-clause", d: "La proposizione che esprime la condizione (If it rains…)." },
    { t: "Main clause", d: "La proposizione principale, che esprime la conseguenza." },
    { t: "Zero conditional", d: "If + present, present: fatti e verità generali." },
    { t: "First conditional", d: "If + present, will: situazione reale e possibile nel futuro." },
    { t: "Second conditional", d: "If + past simple, would: ipotesi irreale o improbabile (presente/futuro)." },
    { t: "Third conditional", d: "If + past perfect, would have + participio: ipotesi irrealizzabile nel passato." },
    { t: "Unless", d: "A meno che; equivale a if … not." },
    { t: "Wish / if only", d: "Esprimono desideri irreali o rimpianti (I wish I had more time)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "If you ___ ice, it melts.", options: ["heat", "will heat", "heated"], answer: 0, explain: "Zero conditional: present nella if-clause e nella principale." },
      { type: "mc", q: "If I ___ more time, I would learn Chinese.", options: ["have", "had", "would have"], answer: 1, explain: "Second conditional: past simple nella if-clause." },
      { type: "mc", q: "If it rains tomorrow, we ___ the match.", options: ["cancel", "cancelled", "will cancel"], answer: 2, explain: "First conditional: will nella principale." },
      { type: "text", q: "Completa: If I ___ you, I would study more. (una parola)", answer: ["were"], explain: "If I were you: forma standard per i consigli." },
      { type: "tf", q: "Nella if-clause di un first conditional si usa il future con will.", answer: false, explain: "Si usa il present simple: If it rains." },
      { type: "mc", q: "If he ___ the alarm, he wouldn't have overslept.", options: ["had set", "set", "has set"], answer: 0, explain: "Third conditional: past perfect (had set)." },
      { type: "order", q: "Metti in ordine la frase.", items: ["If I", "had known,", "I would", "have called", "you"], explain: "If + past perfect, would have + participio." },
      { type: "mc", q: "I won't go to the party ___ you come with me.", options: ["unless", "if", "while"], answer: 0, explain: "Unless = if not: non vado a meno che tu non venga." },
      { type: "mc", q: "\"I wish I had studied more\" esprime:", options: ["Un rimpianto sul passato.", "Un fatto sicuro.", "Un piano per il futuro."], answer: 0, explain: "Wish + past perfect = rimpianto per qualcosa che non è stato fatto." },
      { type: "mc", q: "What would you do if you ___ a million euros?", options: ["will win", "won", "would win"], answer: 1, explain: "Second conditional: past simple nella if-clause." }
    ]
  }
});
