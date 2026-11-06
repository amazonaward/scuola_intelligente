TOPIC('it', {
  id: `m1-ing-adverbs-frequency`,
  title: `Adverbs of frequency`,
  intro: `<i>I <b>always</b> have breakfast. I <b>sometimes</b> eat vegetables. I <b>never</b> go to bed before 9!</i> Gli <b>avverbi di frequenza</b> dicono <b>quanto spesso</b> facciamo qualcosa. Vanno a braccetto con il present simple e hanno un posto preciso nella frase. Impariamo la "scala" dal 100% allo 0% e la domanda <b>How often…?</b> 📅🔁`,
  minutes: 30,
  sections: [
    {
      type: `text`, title: `1. La scala della frequenza`,
      html: `<p>Ogni avverbio corrisponde, più o meno, a una percentuale delle volte:</p>
<table>
<tr><th>Avverbio</th><th>Pronuncia</th><th>Italiano</th><th>Quanto spesso</th></tr>
<tr><td><b>always</b></td><td>«òluèis»</td><td>sempre</td><td>100%</td></tr>
<tr><td><b>usually</b></td><td>«iùsciuali»</td><td>di solito</td><td>circa 90%</td></tr>
<tr><td><b>often</b></td><td>«òfen»</td><td>spesso</td><td>circa 70%</td></tr>
<tr><td><b>sometimes</b></td><td>«sàmtaims»</td><td>a volte</td><td>circa 50%</td></tr>
<tr><td><b>rarely / seldom</b></td><td>«rèarli»</td><td>raramente</td><td>circa 10%</td></tr>
<tr><td><b>hardly ever</b></td><td>«hàrdli èvar»</td><td>quasi mai</td><td>circa 5%</td></tr>
<tr><td><b>never</b></td><td>«nèvar»</td><td>mai</td><td>0%</td></tr>
</table>
<p>Le percentuali non sono precise come in matematica: servono a ricordare l'<b>ordine</b>.</p>`
    },
    {
      type: `svg`, title: `Il termometro della frequenza`,
      caption: `Dal 100% (always) allo 0% (never): più la barra è piena, più spesso succede.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<g font-size="17" font-weight="bold">
<rect x="160" y="20" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="20" width="400" height="30" rx="6" fill="#16a34a"/><text x="20" y="42" fill="#14532d">always</text><text x="570" y="42" font-size="13" fill="#14532d" text-anchor="end">100%</text>
<rect x="160" y="58" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="58" width="360" height="30" rx="6" fill="#65a30d"/><text x="20" y="80" fill="#14532d">usually</text>
<rect x="160" y="96" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="96" width="280" height="30" rx="6" fill="#ca8a04"/><text x="20" y="118" fill="#14532d">often</text>
<rect x="160" y="134" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="134" width="200" height="30" rx="6" fill="#ea580c"/><text x="20" y="156" fill="#14532d">sometimes</text>
<rect x="160" y="172" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="172" width="40" height="30" rx="6" fill="#dc2626"/><text x="20" y="194" fill="#14532d">rarely</text>
<rect x="160" y="210" width="400" height="30" rx="6" fill="#e5e7eb"/><rect x="160" y="210" width="20" height="30" rx="6" fill="#b91c1c"/><text x="20" y="232" fill="#14532d">hardly ever</text>
<rect x="160" y="248" width="400" height="30" rx="6" fill="#e5e7eb"/><text x="20" y="270" fill="#14532d">never</text><text x="570" y="270" font-size="13" fill="#7f1d1d" text-anchor="end">0%</text>
</g>
</svg>`
    },
    {
      type: `text`, title: `2. Dove si mettono nella frase`,
      html: `<p>Questa è la parte più importante. Ci sono due regole:</p>
<ol>
<li><b>PRIMA del verbo principale</b>:<br><i>I <b>always</b> walk to school.</i> · <i>She <b>often</b> plays chess.</i> · <i>We <b>never</b> eat fish.</i></li>
<li><b>DOPO il verbo to be</b> (am, is, are):<br><i>I am <b>always</b> happy.</i> · <i>He is <b>never</b> late.</i> · <i>They are <b>usually</b> tired on Monday.</i></li>
</ol>
<p>Con negative e domande l'avverbio sta <b>dopo l'ausiliare</b> e prima del verbo:</p>
<ul>
<li><i>I <b>don't usually</b> watch TV.</i> (di solito non guardo la TV)</li>
<li><i><b>Do</b> you <b>often</b> go to the cinema?</i></li>
</ul>
<p>⚠️ <b>Never</b> è già negativo: <i>I <b>never</b> eat meat</i> ✅ — <i>I <b>don't never</b> eat meat</i> ❌ (in inglese non si fanno due negazioni!).</p>
<p>💡 <b>Sometimes</b> e <b>usually</b> possono anche andare all'inizio della frase: <i><b>Sometimes</b> I play the guitar.</i></p>`
    },
    {
      type: `remember`, title: `La regola del sandwich`,
      html: `<p>🥪 L'avverbio è il ripieno di un panino:</p>
<ul>
<li>verbo normale: <b>soggetto + AVVERBIO + verbo</b> → <i>She <b>always</b> sings.</i></li>
<li>verbo be: <b>soggetto + be + AVVERBIO</b> → <i>She is <b>always</b> cheerful.</i></li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-quiz: la posizione`,
      questions: [
        { type: `mc`, q: `Scegli la frase corretta.`, options: [`I go always to bed at 10.`, `I always go to bed at 10.`, `Always I go to bed at 10.`], answer: 1, explain: `Con un verbo normale l'avverbio va prima del verbo: I always go.` },
        { type: `mc`, q: `Scegli la frase corretta.`, options: [`She is often late.`, `She often is late.`], answer: 0, explain: `Con to be l'avverbio va dopo: she is often late.` },
        { type: `tf`, q: `"I don't never eat sweets" è corretta.`, answer: false, explain: `Never è già negativo: I never eat sweets.` }
      ]
    },
    {
      type: `text`, title: `3. How often…? e le espressioni di frequenza`,
      html: `<p>Per chiedere quanto spesso si fa qualcosa: <b>How often</b> + do/does + soggetto + verbo?</p>
<p><i><b>How often do</b> you go swimming?</i> – <i>I <b>usually</b> go twice a week.</i></p>
<p>Si può rispondere anche con <b>espressioni di frequenza</b>, che vanno di solito <b>alla fine</b> della frase:</p>
<ul>
<li><b>once</b> a week = una volta alla settimana</li>
<li><b>twice</b> a month = due volte al mese</li>
<li><b>three times</b> a year = tre volte all'anno (da 3 in poi: <i>number + times</i>)</li>
<li><b>every</b> day / week / Sunday = ogni giorno / settimana / domenica</li>
<li><b>on</b> Mondays = il lunedì (tutti i lunedì)</li>
</ul>
<p><i>I play football <b>three times a week</b>. We visit our grandparents <b>every Sunday</b>.</i></p>`
    },
    {
      type: `example`, title: `Esempio pratico: il sondaggio della classe`,
      html: `<p>Fate un sondaggio in inglese! Ognuno risponde a: <i>How often do you…</i></p>
<table>
<tr><th>Attività</th><th>Risposta di Marta</th></tr>
<tr><td>…eat fruit?</td><td><i>I <b>always</b> eat fruit at lunch.</i></td></tr>
<tr><td>…play video games?</td><td><i>I play video games <b>twice a week</b>.</i></td></tr>
<tr><td>…read comics?</td><td><i>I <b>often</b> read comics.</i></td></tr>
<tr><td>…go to the museum?</td><td><i>I <b>hardly ever</b> go to the museum.</i></td></tr>
<tr><td>…drink coffee?</td><td><i>I <b>never</b> drink coffee!</i></td></tr>
</table>
<p>Poi riferisci: <i>Marta <b>always</b> eats fruit, but she <b>never</b> drinks coffee.</i> Ricorda la <b>-s</b> della 3ª persona!</p>`
    },
    {
      type: `example`, title: `Esempio pratico: il profilo di un animale`,
      html: `<p><i>The koala lives in Australia. It <b>usually</b> sleeps about 18-22 hours a day! It <b>always</b> eats eucalyptus leaves and it <b>hardly ever</b> drinks water, because the leaves are full of water. It <b>rarely</b> comes down from the trees. It is <b>never</b> in a hurry.</i></p>
<p>Il nome "koala" secondo una spiegazione molto diffusa verrebbe da una lingua aborigena e significherebbe "niente acqua".</p>`
    },
    {
      type: `widget`, title: `Gioco: abbina avverbio e significato`,
      widget: `match`,
      options: {
        pairs: [[`always`, `sempre`], [`usually`, `di solito`], [`often`, `spesso`], [`sometimes`, `a volte`], [`rarely`, `raramente`], [`hardly ever`, `quasi mai`], [`never`, `mai`], [`twice a week`, `due volte alla settimana`]]
      }
    },
    {
      type: `widget`, title: `Gioco: prima del verbo o dopo "be"?`,
      widget: `classify`,
      caption: `Dove va l'avverbio? Prima del verbo principale o dopo il verbo be?`,
      options: {
        groups: [`Prima del verbo (I always play)`, `Dopo be (I am always…)`],
        items: [
          [`I ___ walk to school.`, 0], [`She ___ eats pasta.`, 0], [`We ___ watch films.`, 0], [`They ___ get up early.`, 0],
          [`He is ___ hungry.`, 1], [`I am ___ late.`, 1], [`You are ___ kind.`, 1], [`It is ___ cold in January.`, 1]
        ]
      }
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "always" significa "tutta la strada"?`,
      html: `<p><b>Always</b> viene dall'inglese antico <i>ealne weg</i>, cioè "<b>all the way</b>", tutta la strada, per tutto il tragitto. Col tempo ha preso il significato di "per tutto il tempo", cioè sempre. E <b>never</b> è nato dall'unione di <i>ne</i> (non) + <i>ever</i> (mai, in qualsiasi momento): "non in nessun momento"!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… per un inglese "often" ha una "t" muta?`,
      html: `<p>La pronuncia più comune di <b>often</b> è «òfen», con la <b>t muta</b>, come in <i>listen</i> e <i>castle</i>. Però nel Seicento la t si pronunciava, e oggi molte persone in Inghilterra e negli Stati Uniti hanno ricominciato a dirla («òften»): i dizionari accettano entrambe le pronunce. Le lingue cambiano continuamente!</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se fai fatica a ricordare l'ordine o la posizione, prova queste strade.`,
      tabs: [
        {
          label: `📏 La retta delle percentuali`,
          html: `<p>Metti gli avverbi su una retta come i numeri: 0 = never, 50 = sometimes, 100 = always. Sposta il segno: a che percentuale metteresti <i>often</i>? E <i>usually</i>? Più ti avvicini a 100, più è frequente.</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 100, step: 10, marks: [0, 10, 50, 70, 90, 100] }
        },
        {
          label: `📅 Il calendario`,
          html: `<p>Pensa a una settimana di 7 giorni e colora i giorni in cui fai una cosa:</p>
<ul>
<li>7 giorni su 7 → <b>always</b> 🟩🟩🟩🟩🟩🟩🟩</li>
<li>5-6 giorni → <b>usually</b> 🟩🟩🟩🟩🟩🟩⬜</li>
<li>4-5 giorni → <b>often</b> 🟩🟩🟩🟩⬜⬜⬜</li>
<li>2-3 giorni → <b>sometimes</b> 🟩🟩⬜⬜⬜⬜⬜</li>
<li>1 giorno ogni tanto → <b>rarely</b> 🟩⬜⬜⬜⬜⬜⬜</li>
<li>nessuno → <b>never</b> ⬜⬜⬜⬜⬜⬜⬜</li>
</ul>`
        },
        {
          label: `🇮🇹🇬🇧 Italiano contro inglese`,
          html: `<p>In italiano l'avverbio sta di solito <b>dopo</b> il verbo: <i>Io gioco <b>sempre</b></i>. In inglese sta <b>prima</b>: <i>I <b>always</b> play</i>. Con "essere" invece le due lingue fanno uguale: <i>Sono <b>sempre</b> felice = I am <b>always</b> happy</i>.</p>
<p>Altre lingue: in 🇫🇷 francese <i>Je joue <b>toujours</b></i> e in 🇩🇪 tedesco <i>Ich spiele <b>immer</b></i>, come l'italiano. L'inglese è "il diverso" della famiglia: il verbo principale vuole l'avverbio <b>davanti</b>.</p>`
        },
        {
          label: `🃏 Flashcards da ripasso`,
          html: `<p>Sul fronte una frase italiana, sul retro la traduzione con l'avverbio al posto giusto.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `Faccio sempre colazione.`, back: `I always have breakfast.` },
              { front: `Lui è spesso stanco.`, back: `He is often tired.` },
              { front: `Non bevo mai il caffè.`, back: `I never drink coffee.` },
              { front: `Di solito andiamo a piedi.`, back: `We usually walk.` },
              { front: `Lei è raramente in ritardo.`, back: `She is rarely late.` },
              { front: `Nuoto due volte alla settimana.`, back: `I swim twice a week.` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: dire quanto spesso`,
      nodes: [
        { id: `freq`, label: `Frequenza`, x: 50, y: 8, color: `#16a34a`, html: `Quante volte succede un'azione.`, why: `Si collega al present simple, il tempo delle abitudini: un'abitudine è proprio qualcosa che si ripete con una certa frequenza.` },
        { id: `avv`, label: `Avverbi di frequenza`, x: 25, y: 32, color: `#3b82f6`, html: `always, usually, often, sometimes, rarely, hardly ever, never.`, why: `Sono "avverbi indefiniti": non danno un numero preciso ma una stima. Per questo gli insegnanti li dispongono su una scala dal 100% allo 0%.` },
        { id: `espr`, label: `Espressioni di frequenza`, x: 75, y: 32, color: `#f59e0b`, html: `once / twice / three times a week, every day.`, why: `Danno un numero preciso. <i>Once</i> e <i>twice</i> sono antiche forme di "one" e "two" con la desinenza avverbiale <i>-es</i> dell'inglese antico; da tre in poi si usa <i>times</i>.` },
        { id: `prima`, label: `Prima del verbo`, x: 12, y: 60, color: `#ef4444`, html: `I always play / She never eats.`, why: `Nell'inglese medievale il verbo poteva stare prima dell'avverbio (come in italiano). Con la diffusione degli ausiliari (do) i verbi principali sono rimasti "fermi" e l'avverbio si è stabilizzato davanti a loro.` },
        { id: `dopo`, label: `Dopo "be"`, x: 38, y: 60, color: `#a855f7`, html: `I am always…, He is never…`, why: `<i>Be</i> si comporta come un ausiliare: nelle domande si inverte (<i>Are you…?</i>) e l'avverbio lo segue, come segue <i>do</i>, <i>can</i>, <i>have</i>.` },
        { id: `never`, label: `Never = negazione`, x: 25, y: 86, color: `#b91c1c`, html: `Mai insieme a not/don't.`, why: `L'inglese standard non ammette la doppia negazione: "<i>I don't never</i>" negherebbe due volte. Nell'inglese antico invece la doppia negazione era normale, e lo è ancora in italiano (<i>non</i> vengo <i>mai</i>).` },
        { id: `how`, label: `How often…?`, x: 75, y: 60, color: `#0ea5e9`, html: `La domanda per chiedere la frequenza.`, why: `<i>Often</i> viene dall'antico <i>oft</i> (ancora usato in poesia: "oft-repeated"). <i>How often</i> = "quanto spesso".` },
        { id: `ps`, label: `Present simple`, x: 75, y: 86, color: `#14b8a6`, html: `Il tempo delle abitudini.`, why: `Le abitudini si ripetono: per questo avverbi ed espressioni di frequenza sono le "parole spia" del present simple.` }
      ],
      edges: [
        [`freq`, `avv`, `si esprime con`], [`freq`, `espr`, `si esprime con`], [`avv`, `prima`, `posizione`], [`avv`, `dopo`, `posizione`],
        [`avv`, `never`, `attenzione`], [`freq`, `how`, `si chiede con`], [`how`, `ps`, `usa`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: how often?`,
      questions: [
        { type: `mc`, q: `"Due volte al mese" si dice…`, options: [`two times month`, `twice a month`, `second a month`], answer: 1, explain: `Twice = due volte; a month = al mese.` },
        { type: `mc`, q: `Qual è più frequente?`, options: [`sometimes`, `usually`, `rarely`], answer: 1, explain: `Usually (circa 90%) > sometimes (50%) > rarely (10%).` },
        { type: `text`, q: `Completa la domanda: How ___ do you go to the gym?`, answer: [`often`], explain: `How often = quanto spesso.` }
      ]
    }
  ],
  glossary: [
    { t: `Adverb of frequency`, d: `Avverbio che indica quanto spesso: always, usually, often, sometimes, rarely, hardly ever, never.` },
    { t: `Always`, d: `Sempre (100%).` },
    { t: `Usually`, d: `Di solito.` },
    { t: `Often`, d: `Spesso.` },
    { t: `Sometimes`, d: `A volte (circa metà delle volte).` },
    { t: `Rarely / seldom`, d: `Raramente.` },
    { t: `Hardly ever`, d: `Quasi mai.` },
    { t: `Never`, d: `Mai (0%). È già negativo: non si usa con not.` },
    { t: `Once / twice`, d: `Una volta / due volte.` },
    { t: `How often…?`, d: `Quanto spesso…?` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `"Always" significa…`, options: [`mai`, `sempre`, `spesso`], answer: 1, explain: `Always = sempre.` },
      { type: `order`, q: `Metti gli avverbi dal più frequente al meno frequente.`, items: [`always`, `usually`, `often`, `sometimes`, `rarely`, `never`], explain: `100% → 0%.` },
      { type: `mc`, q: `Scegli la frase con l'avverbio al posto giusto.`, options: [`I always eat breakfast.`, `I eat always breakfast.`, `I eat breakfast always.`], answer: 0, explain: `Prima del verbo principale: I always eat.` },
      { type: `mc`, q: `Scegli la frase corretta.`, options: [`My dad usually is tired.`, `My dad is usually tired.`], answer: 1, explain: `Con be l'avverbio va dopo: is usually.` },
      { type: `tf`, q: `"She never watches TV" è corretta.`, answer: true, explain: `Never prima del verbo, -s della 3ª persona su watches.` },
      { type: `text`, q: `Traduci "quasi mai" (due parole).`, answer: [`hardly ever`], explain: `Hardly ever = quasi mai.` },
      { type: `mc`, q: `"Una volta alla settimana" si dice…`, options: [`one time week`, `once a week`, `one a week`], answer: 1, explain: `Once a week.` },
      { type: `mc`, q: `Quale frase è SBAGLIATA?`, options: [`I don't usually walk.`, `I don't never walk.`, `I never walk.`], answer: 1, explain: `Never non si usa con don't: doppia negazione.` },
      { type: `text`, q: `Completa: "How ___ do you visit your grandparents?" – "Every Sunday."`, answer: [`often`], explain: `How often…?` },
      { type: `mc`, q: `Lucia va in piscina 7 giorni su 7. Lucia ___ goes swimming.`, options: [`sometimes`, `always`, `rarely`], answer: 1, explain: `Tutti i giorni → always.` },
      { type: `order`, q: `Metti in ordine le parole.`, items: [`Tom`, `is`, `never`, `late`, `for school`], explain: `Con be: Tom is never late for school.` },
      { type: `tf`, q: `Le espressioni come "twice a week" vanno di solito alla fine della frase.`, answer: true, explain: `Esempio: I play tennis twice a week.` }
    ]
  }
});
