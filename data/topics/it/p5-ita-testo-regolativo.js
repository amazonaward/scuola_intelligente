TOPIC('it', {
  id: "p5-ita-testo-regolativo",
  title: "Il testo regolativo",
  intro: "Ricette, istruzioni per montare un mobile, regole di un gioco, il regolamento della classe, perfino la Costituzione: sono tutti <b>testi regolativi</b>. Servono a dire a qualcuno <b>che cosa fare</b> e <b>come farlo</b>, in modo chiaro e in ordine.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è un testo regolativo",
      html: `<p>Il <b>testo regolativo</b> (o <b>prescrittivo</b>) ha lo scopo di <b>guidare il comportamento</b> di chi legge. Ne esistono due grandi famiglie:</p>
<ul>
<li><b>Testi di istruzioni</b>: spiegano <b>come fare</b> qualcosa, passo dopo passo. Ricette, istruzioni di montaggio, manuali d'uso, regole per costruire un aquilone.</li>
<li><b>Testi di regole e norme</b>: dicono <b>come comportarsi</b> e che cosa è permesso o vietato. Regolamento scolastico, regole di un gioco o di uno sport, codice della strada, leggi.</li>
</ul>
<p>Se le istruzioni non sono chiare, il risultato non viene: la torta non lievita, il mobile traballa, il gioco finisce in litigio!</p>`
    },
    {
      type: "text",
      title: "Le caratteristiche",
      html: `<ul>
<li><b>Titolo</b> chiaro che dice lo scopo: «Come preparare…», «Regolamento di…».</li>
<li><b>Materiali / ingredienti / partecipanti</b> elencati all'inizio, con le <b>quantità</b>.</li>
<li><b>Sequenza ordinata</b> di azioni: numeri (1, 2, 3…), elenchi puntati, connettivi di tempo (<i>prima, poi, dopo, infine</i>).</li>
<li><b>Verbi</b> all'<b>imperativo</b> («Mescola», «Non correre») o all'<b>infinito</b> («Mescolare», «Non correre»); a volte forme impersonali («Si deve…», «È vietato…»).</li>
<li><b>Frasi brevi</b>, una azione per frase; <b>linguaggio preciso</b> (numeri, misure, tempi: «cuoci per 20 minuti a 180 °C»).</li>
<li>Spesso <b>immagini, disegni, simboli</b> che aiutano a capire.</li>
<li>Nelle regole: <b>divieti, obblighi, permessi</b> e a volte <b>sanzioni</b> (cosa succede se non si rispetta la regola).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Anatomia di una ricetta",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fff7ed"/>
<rect x="30" y="20" width="360" height="285" rx="12" fill="#ffffff" stroke="#fb923c" stroke-width="3"/>
<text x="210" y="52" font-size="22" text-anchor="middle" font-weight="bold" fill="#c2410c">Pancake facili 🥞</text>
<text x="50" y="84" font-size="16" font-weight="bold" fill="#1f2937">Ingredienti (4 persone):</text>
<text x="60" y="106" font-size="15" fill="#1f2937">• 200 g di farina  • 2 uova</text>
<text x="60" y="126" font-size="15" fill="#1f2937">• 250 ml di latte  • 1 cucchiaio di zucchero</text>
<text x="50" y="160" font-size="16" font-weight="bold" fill="#1f2937">Procedimento:</text>
<text x="60" y="184" font-size="15" fill="#1f2937">1. <tspan font-weight="bold" fill="#dc2626">Sbatti</tspan> le uova con lo zucchero.</text>
<text x="60" y="206" font-size="15" fill="#1f2937">2. <tspan font-weight="bold" fill="#dc2626">Aggiungi</tspan> il latte e la farina.</text>
<text x="60" y="228" font-size="15" fill="#1f2937">3. <tspan font-weight="bold" fill="#dc2626">Mescola</tspan> fino a togliere i grumi.</text>
<text x="60" y="250" font-size="15" fill="#1f2937">4. Con un adulto, <tspan font-weight="bold" fill="#dc2626">cuoci</tspan> un mestolo</text>
<text x="76" y="270" font-size="15" fill="#1f2937">per volta, 1 minuto per lato.</text>
<g font-size="15" fill="#1f2937">
<line x1="395" y1="52" x2="440" y2="52" stroke="#2563eb" stroke-width="3"/><text x="446" y="57" fill="#1d4ed8" font-weight="bold">titolo = scopo</text>
<line x1="395" y1="110" x2="440" y2="110" stroke="#16a34a" stroke-width="3"/><text x="446" y="106" fill="#15803d" font-weight="bold">materiali</text><text x="446" y="124" fill="#15803d">con le quantità</text>
<line x1="395" y1="200" x2="440" y2="200" stroke="#9333ea" stroke-width="3"/><text x="446" y="196" fill="#7e22ce" font-weight="bold">passi numerati</text><text x="446" y="214" fill="#7e22ce">in ordine</text>
<line x1="395" y1="250" x2="440" y2="250" stroke="#dc2626" stroke-width="3"/><text x="446" y="246" fill="#b91c1c" font-weight="bold">verbi all'imperativo</text><text x="446" y="264" fill="#b91c1c">tempi e misure precise</text>
</g>
</svg>`,
      caption: "Una ricetta ben fatta: titolo, materiali con quantità, passi numerati, verbi all'imperativo, misure precise."
    },
    {
      type: "example",
      title: "Esempio di istruzioni: la barchetta di carta",
      html: `<p><b>Materiale</b>: un foglio A4 rettangolare.</p>
<ol>
<li><b>Piega</b> il foglio a metà dall'alto verso il basso.</li>
<li><b>Porta</b> i due angoli in alto verso il centro, formando un triangolo.</li>
<li><b>Ripiega</b> verso l'alto le strisce in basso, una davanti e una dietro.</li>
<li><b>Apri</b> la figura dal basso e <b>schiacciala</b> fino a formare un quadrato.</li>
<li><b>Piega</b> verso l'alto le due punte inferiori, una per lato.</li>
<li><b>Apri</b> di nuovo dal basso e <b>schiaccia</b>; poi <b>tira</b> delicatamente le due punte laterali in fuori: ecco la barchetta! ⛵</li>
</ol>
<p>Nota: ogni passo comincia con un <b>verbo all'imperativo</b> e contiene <b>una sola azione</b> principale.</p>`
    },
    {
      type: "example",
      title: "Esempio di regole: il regolamento della biblioteca di classe",
      html: `<ol>
<li>Ogni alunno può prendere in prestito <b>un libro alla volta</b>.</li>
<li>Il prestito dura <b>al massimo 15 giorni</b>.</li>
<li>È <b>obbligatorio</b> scrivere il proprio nome e la data sul registro.</li>
<li>È <b>vietato</b> scrivere o sottolineare sui libri.</li>
<li>Chi rovina un libro <b>deve</b> sostituirlo o ripararlo con l'aiuto della maestra. <i>(sanzione)</i></li>
</ol>
<p>Qui trovi le parole tipiche delle regole: <b>è obbligatorio, è vietato, si può, si deve, non è permesso</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: riconosci il testo regolativo",
      questions: [
        { type: "mc", q: "Quale di questi è un testo regolativo?", options: ["una fiaba", "il regolamento del calcetto", "una poesia sull'autunno"], answer: 1, explain: "Il regolamento dice come comportarsi durante il gioco." },
        { type: "mc", q: "In un testo di istruzioni i verbi sono di solito…", options: ["al passato remoto", "all'imperativo o all'infinito", "al condizionale"], answer: 1, explain: "Imperativo (mescola) o infinito (mescolare): danno un comando o un'indicazione." },
        { type: "tf", q: "In una ricetta l'ordine dei passaggi non è importante.", answer: false, explain: "Se cambi l'ordine (es. cuoci prima di mescolare) il risultato non viene." }
      ]
    },
    {
      type: "text",
      title: "Come scriverne uno, passo dopo passo",
      html: `<ol>
<li><b>Decidi lo scopo</b> e chi leggerà (un bambino di 6 anni? un adulto?).</li>
<li><b>Fai l'azione</b> davvero (o immaginala) e annota ogni passaggio.</li>
<li><b>Elenca</b> materiali e quantità.</li>
<li><b>Scrivi i passi</b> in ordine, numerati, con un verbo all'imperativo o all'infinito all'inizio. <b>Usa sempre la stessa forma</b> (non mischiare «mescola» e «mescolare»).</li>
<li><b>Aggiungi</b> avvertenze di sicurezza («Fatti aiutare da un adulto»).</li>
<li><b>Prova</b>: fai leggere il testo a un compagno e chiedigli di eseguirlo <b>senza aiuto</b>. Se sbaglia, il testo va migliorato!</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Istruzioni senza parole",
      html: `<p>Molte istruzioni di montaggio dei mobili, come quelle della svedese <b>IKEA</b>, sono fatte <b>solo di disegni</b>, senza parole: così chiunque può capirle, in qualsiasi lingua! Anche i <b>cartelli stradali</b> e i simboli di sicurezza (il divieto è un cerchio rosso barrato, l'obbligo un cerchio blu) sono testi regolativi \"senza parole\", uguali in molti Paesi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le regole scritte più antiche",
      html: `<p>Uno dei più antichi testi di leggi scritte giunto fino a noi è il <b>Codice di Hammurabi</b>, re di Babilonia, inciso su una grande stele di pietra nera intorno al <b>1750 a.C.</b>: contiene circa 280 leggi. Oggi si trova al Museo del Louvre di Parigi. La legge più importante per noi italiani è la <b>Costituzione</b>, in vigore dal <b>1° gennaio 1948</b>, con <b>139 articoli</b>.</p>`
    },
    {
      type: "widget",
      title: "Gioco: istruzioni o regole?",
      widget: "classify",
      options: {
        groups: ["Istruzioni (come fare)", "Regole (come comportarsi)"],
        items: [["🍝 Ricetta della pasta al pomodoro", 0], ["🪁 Come costruire un aquilone", 0], ["📱 Manuale per accendere il tablet", 0], ["🌱 Come seminare i fagioli", 0], ["⚽ Regolamento del calcio", 1], ["🚦 Codice della strada", 1], ["🏫 Regolamento della scuola", 1], ["🏊 Regole della piscina", 1]]
      },
      caption: "Le istruzioni spiegano come ottenere un risultato; le regole dicono che cosa è permesso o vietato."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Scopo: <b>guidare chi legge</b> a fare qualcosa o a comportarsi in un certo modo.</li>
<li>Istruzioni (come fare) e regole (come comportarsi).</li>
<li>Titolo, materiali, <b>passi numerati in ordine</b>, verbi all'<b>imperativo</b> o all'<b>infinito</b>, frasi brevi, misure precise, immagini.</li>
<li>Prova sempre le tue istruzioni con qualcun altro!</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il testo regolativo",
      intro: "Le istruzioni assomigliano a un programma per computer, possono essere solo disegni, e le regole più importanti di tutte sono le leggi. Esplora!",
      tabs: [
        {
          label: "🤖 Come un algoritmo",
          html: `<p>Un <b>algoritmo</b> è una sequenza di istruzioni precise per risolvere un problema: è proprio un testo regolativo per un <b>computer</b> o un <b>robot</b>!</p>
<p>Il robot però è \"stupido\": esegue <b>esattamente</b> quello che scrivi. Se scrivi «metti il pane nel tostapane» ma non hai scritto «prendi il pane», si blocca! Per questo le istruzioni devono essere:</p>
<ul>
<li><b>complete</b> (nessun passo dimenticato),</li>
<li><b>non ambigue</b> (un solo significato),</li>
<li><b>in ordine</b>,</li>
<li>con una <b>fine</b>.</li>
</ul>
<p>Con <b>Scratch</b> o con i giochi di coding unplugged (i compagni fanno i robot) puoi provare a dare istruzioni perfette.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<rect x="30" y="20" width="240" height="40" rx="10" fill="#f59e0b"/><text x="150" y="46" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">quando si clicca ▶</text>
<rect x="30" y="66" width="240" height="40" rx="6" fill="#3b82f6"/><text x="150" y="92" font-size="17" text-anchor="middle" fill="#ffffff">prendi il pane</text>
<rect x="30" y="112" width="240" height="40" rx="6" fill="#3b82f6"/><text x="150" y="138" font-size="17" text-anchor="middle" fill="#ffffff">mettilo nel tostapane</text>
<rect x="30" y="158" width="240" height="40" rx="6" fill="#a855f7"/><text x="150" y="184" font-size="17" text-anchor="middle" fill="#ffffff">attendi 2 minuti</text>
<rect x="30" y="204" width="240" height="40" rx="6" fill="#3b82f6"/><text x="150" y="230" font-size="17" text-anchor="middle" fill="#ffffff">togli il pane</text>
<text x="430" y="120" font-size="80" text-anchor="middle">🤖</text>
<text x="430" y="190" font-size="17" text-anchor="middle" fill="#166534">esegue i blocchi</text>
<text x="430" y="212" font-size="17" text-anchor="middle" fill="#166534">uno dopo l'altro</text>
</svg>`
        },
        {
          label: "🖼️ Solo disegni",
          html: `<p>Prova a scrivere istruzioni <b>senza parole</b>, solo con disegni numerati, come fanno i libretti dei mobili e dei mattoncini da costruzione. Funziona per chi non sa leggere bene o parla un'altra lingua!</p>
<p>Ecco come lavarsi le mani in 4 vignette:</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#eff6ff"/>
<g font-size="56" text-anchor="middle">
<rect x="15" y="20" width="130" height="130" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="3"/><text x="80" y="105">🚰</text>
<rect x="160" y="20" width="130" height="130" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="3"/><text x="225" y="105">🧼</text>
<rect x="305" y="20" width="130" height="130" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="3"/><text x="370" y="105">👐</text>
<rect x="450" y="20" width="130" height="130" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="3"/><text x="515" y="105">🧻</text>
</g>
<g font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
<text x="80" y="180">1</text><text x="225" y="180">2</text><text x="370" y="180">3</text><text x="515" y="180">4</text>
</g>
</svg>`
        },
        {
          label: "📜 Le regole dello Stato",
          html: `<p>Anche le <b>leggi</b> sono testi regolativi, scritti con un linguaggio molto preciso, diviso in <b>articoli</b> e <b>commi</b>.</p>
<p>La <b>Costituzione italiana</b> è la legge fondamentale. Ascolta come è scritto l'<b>articolo 34</b>: «<i>La scuola è aperta a tutti. L'istruzione inferiore, impartita per almeno otto anni, è obbligatoria e gratuita.</i>»</p>
<p>Vedi? Frasi brevi, presente indicativo con valore di obbligo, parole precise (\"almeno otto anni\"). Oggi l'obbligo di istruzione in Italia dura <b>10 anni</b> (dai 6 ai 16 anni).</p>`
        },
        {
          label: "🎲 Inventa un gioco",
          html: `<p>Il modo migliore per capire le regole è <b>inventarne</b> di nuove! Con la classe inventate un gioco e scrivetene il regolamento:</p>
<ol>
<li><b>Nome del gioco</b> e <b>scopo</b> (come si vince?).</li>
<li><b>Giocatori</b> (quanti?) e <b>materiale</b> (dado, palla, carte…).</li>
<li><b>Svolgimento</b>: chi comincia, che cosa si fa a ogni turno.</li>
<li><b>Divieti</b> e <b>penalità</b>.</li>
<li><b>Fine del gioco</b>.</li>
</ol>
<p>Poi date il regolamento a un'altra classe: se riescono a giocare senza farvi domande, il testo è perfetto! Metti in ordine le parti con il gioco qui sotto.</p>`,
          widget: "match",
          options: { pairs: [["Scopo", "Vince chi arriva primo al traguardo"], ["Giocatori", "Da 2 a 4"], ["Materiale", "Un dado e 4 pedine"], ["Divieto", "Non si può saltare il turno"], ["Penalità", "Chi bara torna alla partenza"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del testo regolativo",
      nodes: [
        { id: "regolativo", label: "Testo regolativo", x: 50, y: 6, color: "#2563eb", html: "Testo che guida il comportamento del lettore.", why: "Dal latino <i>regula</i> = \"righello, regola\": come il righello guida la matita a tracciare una riga dritta, il testo regolativo guida le azioni." },
        { id: "istruzioni", label: "Istruzioni", x: 25, y: 30, color: "#16a34a", html: "Spiegano come fare qualcosa: ricette, montaggi, manuali.", why: "Nascono dal bisogno di trasmettere un'abilità a chi non era presente: le prime ricette scritte sono su tavolette babilonesi di quasi 4000 anni fa." },
        { id: "regole", label: "Regole e norme", x: 75, y: 30, color: "#dc2626", html: "Dicono come comportarsi: regolamenti, leggi, regole dei giochi.", why: "Le comunità hanno bisogno di regole condivise per vivere insieme in modo giusto; scriverle le rende uguali per tutti e non modificabili a capriccio (es. Codice di Hammurabi, XVIII sec. a.C.)." },
        { id: "sequenza", label: "Sequenza ordinata", x: 15, y: 56, color: "#a855f7", html: "Passi numerati, connettivi di tempo (prima, poi, infine).", why: "Molte azioni dipendono da quelle precedenti: non puoi cuocere ciò che non hai ancora impastato. L'ordine rispecchia il tempo reale delle azioni." },
        { id: "verbi", label: "Imperativo / infinito", x: 40, y: 56, color: "#f97316", html: "Verbi che danno ordini o indicazioni: mescola / mescolare.", why: "L'imperativo è il modo verbale del comando e del consiglio; l'infinito è più impersonale e si usa nelle ricette e nei manuali." },
        { id: "precisione", label: "Linguaggio preciso", x: 28, y: 82, color: "#0ea5e9", html: "Numeri, misure, tempi, nomi esatti degli oggetti.", why: "Chi legge non può chiederti chiarimenti: ogni parola vaga («un po' di», «abbastanza») può far sbagliare." },
        { id: "obblighi", label: "Obblighi, divieti, permessi", x: 75, y: 56, color: "#eab308", html: "Si deve, è vietato, si può.", why: "Sono i tre modi fondamentali in cui una regola orienta il comportamento; a volte si aggiunge la sanzione per chi non li rispetta." },
        { id: "algoritmo", label: "Algoritmo", x: 60, y: 82, color: "#64748b", html: "Istruzioni precise, complete e finite per un esecutore (anche una macchina).", why: "Il nome viene dal matematico persiano al-Khwārizmī (IX secolo). Un programma per computer è un testo regolativo così preciso che può eseguirlo una macchina." },
        { id: "immagini", label: "Immagini e simboli", x: 88, y: 82, color: "#14b8a6", html: "Disegni, schemi, pittogrammi, cartelli.", why: "Un'immagine supera le barriere della lingua: per questo segnali stradali e istruzioni di montaggio usano disegni." }
      ],
      edges: [
        ["regolativo", "istruzioni", "può dare"],
        ["regolativo", "regole", "può dare"],
        ["istruzioni", "sequenza", "hanno una"],
        ["istruzioni", "verbi", "usano"],
        ["sequenza", "precisione", "con"],
        ["regole", "obblighi", "esprimono"],
        ["istruzioni", "algoritmo", "se rigorose diventano"],
        ["regole", "immagini", "spesso con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: scrivere bene le istruzioni",
      questions: [
        { type: "mc", q: "Quale istruzione è scritta meglio?", options: ["Metti un po' di sale.", "Aggiungi 5 g di sale.", "Il sale, se vuoi, mettilo."], answer: 1, explain: "Indica una quantità precisa con un verbo all'imperativo." },
        { type: "mc", q: "«È vietato correre nei corridoi.» Questa frase esprime…", options: ["un permesso", "un divieto", "un'istruzione di montaggio"], answer: 1, explain: "«È vietato» introduce un divieto." },
        { type: "tf", q: "È meglio mettere una sola azione per ogni passo.", answer: true, explain: "Passi brevi con una sola azione sono più facili da seguire." }
      ]
    }
  ],
  glossary: [
    { t: "Testo regolativo", d: "Testo che dà istruzioni o regole per guidare il comportamento di chi legge." },
    { t: "Istruzioni", d: "Indicazioni su come fare qualcosa, passo dopo passo." },
    { t: "Regolamento", d: "Insieme di regole che stabiliscono come comportarsi in un luogo o in un'attività." },
    { t: "Imperativo", d: "Modo del verbo che esprime un comando o un consiglio: leggi, scrivete." },
    { t: "Divieto", d: "Regola che proibisce qualcosa (è vietato…)." },
    { t: "Obbligo", d: "Regola che impone qualcosa (è obbligatorio…, si deve…)." },
    { t: "Sanzione", d: "Conseguenza prevista per chi non rispetta una regola." },
    { t: "Algoritmo", d: "Sequenza finita di istruzioni precise per risolvere un problema." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è lo scopo di un testo regolativo?", options: ["divertire con una storia", "guidare chi legge a fare qualcosa o a comportarsi in un modo", "descrivere un paesaggio"], answer: 1, explain: "Regolativo = che regola, che guida il comportamento." },
      { type: "mc", q: "Quale NON è un testo regolativo?", options: ["il manuale della lavatrice", "il regolamento della palestra", "il diario delle vacanze"], answer: 2, explain: "Il diario racconta esperienze: è un testo narrativo personale." },
      { type: "mc", q: "«Sbattere le uova» è un verbo al modo…", options: ["imperativo", "infinito", "indicativo"], answer: 1, explain: "«Sbattere» è all'infinito, molto usato nelle ricette." },
      { type: "tf", q: "Le istruzioni devono indicare quantità e tempi precisi.", answer: true, explain: "La precisione evita errori: chi legge non può farti domande." },
      { type: "order", q: "Metti in ordine le istruzioni per piantare un seme.", items: ["Riempi il vasetto di terra", "Fai un buco di 2 cm con il dito", "Metti il seme nel buco e coprilo", "Annaffia con poca acqua"], explain: "Prima si prepara la terra, poi il buco, poi il seme, infine l'acqua." },
      { type: "mc", q: "Quale espressione indica un OBBLIGO?", options: ["si può", "è vietato", "si deve"], answer: 2, explain: "«Si deve» esprime un obbligo; «si può» un permesso; «è vietato» un divieto." },
      { type: "text", q: "Come si chiama una sequenza di istruzioni precise che anche un computer può eseguire?", answer: ["algoritmo", "un algoritmo", "programma"], explain: "Un algoritmo (o programma, quando è scritto in un linguaggio per computer)." },
      { type: "tf", q: "Nello stesso testo conviene mescolare imperativo («mescola») e infinito («mescolare»).", answer: false, explain: "Bisogna scegliere una forma e usarla sempre: il testo è più chiaro." },
      { type: "num", q: "In che anno è entrata in vigore la Costituzione italiana?", answer: 1948, explain: "Il 1° gennaio 1948." },
      { type: "mc", q: "Le istruzioni IKEA sono famose perché…", options: ["sono lunghissime", "sono fatte quasi solo di disegni", "sono in latino"], answer: 1, explain: "Usano disegni per essere comprese in ogni lingua." },
      { type: "mc", q: "Come puoi controllare se le tue istruzioni funzionano?", options: ["le rileggi una volta da solo", "le fai eseguire a qualcuno senza aiutarlo", "le scrivi più lunghe"], answer: 1, explain: "Se un'altra persona riesce a eseguirle da sola, sono chiare." }
    ]
  }
});
