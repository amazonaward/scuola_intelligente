TOPIC('it', {
  id: "l4-mat-probabilita-condizionata",
  title: "Probabilità condizionata e Bayes",
  intro: "Il test dice che sei positivo a una malattia rara: quanto è davvero probabile che tu sia malato? Piove, e allora quanto è probabile che il treno sia in ritardo? Pesco una carta e so che è una figura: che probabilità c'è che sia un re? In tutti questi casi <b>una informazione in più cambia la probabilità</b>. La <b>probabilità condizionata</b> misura proprio questo, e il <b>teorema di Bayes</b> permette di <b>ribaltare</b> il ragionamento («dato l'effetto, qual era la causa?»). Sono gli strumenti con cui lavorano i medici che interpretano un esame, i filtri antispam, l'intelligenza artificiale e i tribunali. Richiamiamo quanto sai dal biennio sulla probabilità classica e sulle regole di somma e prodotto e andiamo oltre.",
  minutes: 70,
  sections: [
    {
      type: "text",
      title: "La probabilità condizionata",
      html: `<p>Ricordiamo: per un evento A di un esperimento con esiti equiprobabili, P(A) = casi favorevoli / casi possibili, e vale 0 ≤ P(A) ≤ 1. La <b>probabilità condizionata</b> di A <b>dato</b> B, indicata <b>P(A | B)</b>, è la probabilità che avvenga A <b>sapendo che B è avvenuto</b>. Sapere che B è accaduto restringe lo spazio dei casi possibili a B:</p>
<p style="text-align:center"><b>P(A | B) = P(A ∩ B) / P(B)</b> &nbsp;&nbsp; (con P(B) &gt; 0)</p>
<p><b>Esempio 1 (dado).</b> Lancio un dado. Sia A = «esce 6» e B = «esce un numero pari». P(A) = 1/6, ma se so che il risultato è pari i casi possibili sono 2, 4, 6: <b>P(A | B) = 1/3</b>. Con la formula: P(A ∩ B) = 1/6, P(B) = 1/2, 1/6 : 1/2 = 1/3 ✓.</p>
<p><b>Esempio 2 (carte).</b> Da un mazzo di 40 carte (4 semi × 10) si pesca una carta e si scopre che è <i>una figura</i> (fante, cavallo, re: 12 carte). Qual è la probabilità che sia un re? Re ∩ figura = 4 casi su 40, figura = 12 su 40: P(re | figura) = 4/12 = <b>1/3</b>, mentre senza informazione P(re) = 4/40 = 1/10.</p>
<p><b>Attenzione alla direzione.</b> P(A | B) e P(B | A) sono in generale <b>diversi</b>. P(avere due occhi | essere un essere umano) ≈ 1, ma P(essere umano | avere due occhi) è bassissima. Confondere le due è uno degli errori più frequenti (e pericolosi) del ragionamento probabilistico.</p>
<p><b>Regola del prodotto.</b> Dalla definizione segue <b>P(A ∩ B) = P(B) · P(A | B) = P(A) · P(B | A)</b>: la probabilità che avvengano <b>entrambi</b> è la probabilità del primo per la probabilità del secondo <i>dato il primo</i>. <b>Esempio:</b> un'urna contiene 5 palline rosse e 3 blu; se ne estraggono 2 <b>senza rimettere</b> la prima. P(2 rosse) = 5/8 · 4/7 = 20/56 = <b>5/14</b>. Il secondo fattore (4/7) è una probabilità condizionata: dopo aver tolto una rossa ne restano 4 su 7.</p>`
    },
    {
      type: "svg",
      title: "L'albero delle probabilità",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#475569" stroke-width="2.5" fill="none">
<line x1="40" y1="150" x2="190" y2="70"/>
<line x1="40" y1="150" x2="190" y2="230"/>
<line x1="230" y1="70" x2="380" y2="30"/>
<line x1="230" y1="70" x2="380" y2="110"/>
<line x1="230" y1="230" x2="380" y2="190"/>
<line x1="230" y1="230" x2="380" y2="270"/>
</g>
<g font-size="15" fill="#334155">
<text x="70" y="96" fill="#b91c1c" font-weight="bold">malato 0,01</text>
<text x="70" y="218" fill="#166534" font-weight="bold">sano 0,99</text>
<text x="250" y="42" fill="#b91c1c">+ 0,99</text>
<text x="250" y="116" fill="#475569">− 0,01</text>
<text x="250" y="200" fill="#b91c1c">+ 0,05</text>
<text x="250" y="262" fill="#475569">− 0,95</text>
</g>
<g font-size="14" fill="#0f172a">
<text x="396" y="34" font-weight="bold">malato e +: 0,01 · 0,99 = 0,0099</text>
<text x="396" y="114">malato e −: 0,0001</text>
<text x="396" y="194" font-weight="bold">sano e +: 0,99 · 0,05 = 0,0495</text>
<text x="396" y="274">sano e −: 0,9405</text>
</g>
<text x="20" y="170" font-size="16" fill="#0f172a" font-weight="bold">inizio</text>
</svg>`,
      caption: "Albero di un test con prevalenza 1%, sensibilità 99% e falsi positivi 5%. Ogni percorso ha probabilità pari al prodotto dei rami. Tra i positivi (0,0099 + 0,0495 = 0,0594), i veri malati sono 0,0099/0,0594 ≈ 16,7%."
    },
    {
      type: "text",
      title: "Eventi indipendenti e dipendenti",
      html: `<p>Due eventi sono <b>indipendenti</b> se il verificarsi di uno non cambia la probabilità dell'altro: <b>P(A | B) = P(A)</b>. Equivalentemente (e questa è la forma che si usa come definizione) <b>P(A ∩ B) = P(A) · P(B)</b>. Altrimenti sono <b>dipendenti</b>.</p>
<ul>
<li>Due lanci di una moneta, due lanci di un dado, le estrazioni <b>con reinserimento</b>: <b>indipendenti</b>.</li>
<li>Estrazioni <b>senza reinserimento</b>: <b>dipendenti</b>, perché la composizione dell'urna cambia.</li>
<li>Esempio: «esce pari» (B) e «esce 1 o 2» (A) con un dado: P(A) = 1/3; P(A | B) = 1/3 (solo il 2 su 2, 4, 6): <b>indipendenti</b>.</li>
</ul>
<p><b>Indipendenti non significa incompatibili!</b> Due eventi sono <b>incompatibili</b> se A ∩ B = ∅, cioè non possono accadere insieme: allora P(A ∩ B) = 0, e se P(A), P(B) &gt; 0 sono addirittura <b>dipendenti</b>: se avviene A so con certezza che B non avviene. <b>Esempio:</b> «esce 1» ed «esce 2» in un dado sono incompatibili e fortemente dipendenti.</p>
<p><b>Errore del giocatore d'azzardo.</b> Se in roulette il rosso è uscito 8 volte di fila, la probabilità che esca ancora rosso alla giocata successiva è <b>sempre la stessa</b> (poco meno di 1/2, per lo zero), perché la ruota non ha memoria: i lanci sono indipendenti. Il "ritardo" dei numeri al Lotto è una illusione dello stesso tipo.</p>
<p><b>Probabilità composta di più eventi:</b> P(A ∩ B ∩ C) = P(A) · P(B | A) · P(C | A ∩ B). Con eventi indipendenti si semplifica nel prodotto. <b>Esempio:</b> la probabilità di estrarre 3 assi di fila da un mazzo di 40 carte senza reinserimento è 4/40 · 3/39 · 2/38 = 24/59 280 = 1/2470.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: condizionata e indipendenza",
      questions: [
        { type: "num", q: "Si lancia un dado. Qual è la probabilità che esca 5 sapendo che è uscito un numero dispari? (risposta decimale, due cifre)", answer: 0.33, tol: 0.01, explain: "I casi dispari sono 1, 3, 5: P = 1/3 ≈ 0,33." },
        { type: "mc", q: "Si estraggono due carte da un mazzo di 40 senza reinserimento. P(due assi) è…", options: ["4/40 · 3/39", "4/40 · 4/40", "4/40 + 3/39"], answer: 0, explain: "Estrazioni senza reinserimento: il secondo fattore è condizionato." },
        { type: "tf", q: "Due eventi incompatibili, entrambi di probabilità positiva, sono indipendenti.", answer: false, explain: "Se A e B sono incompatibili P(A ∩ B) = 0 ≠ P(A) · P(B) &gt; 0: sono dipendenti." }
      ]
    },
    {
      type: "text",
      title: "Probabilità totale e teorema di Bayes",
      html: `<p>Supponiamo che lo spazio dei casi sia diviso in eventi <b>incompatibili ed esaustivi</b> A₁, A₂, ..., Aₙ (una <b>partizione</b>: uno e uno solo di essi accade; per esempio «la macchina A produce il pezzo», «la B», «la C»). Per ogni altro evento B:</p>
<p style="text-align:center"><b>Teorema della probabilità totale:</b> &nbsp; <b>P(B) = P(B | A₁)P(A₁) + P(B | A₂)P(A₂) + ... + P(B | Aₙ)P(Aₙ)</b></p>
<p>(B si "spezza" nelle parti che avvengono con ciascun Aᵢ: B = (B ∩ A₁) ∪ ... ∪ (B ∩ Aₙ), poi si applica la regola del prodotto a ciascuna parte.)</p>
<p>Il <b>teorema di Bayes</b> permette di ribaltare la condizione: dalla probabilità di B date le cause Aᵢ si ottiene la probabilità delle cause <b>dato B</b>:</p>
<p style="text-align:center"><b>P(Aᵢ | B) = P(B | Aᵢ) · P(Aᵢ) / P(B)</b></p>
<p>dove il denominatore si calcola con la probabilità totale. Le P(Aᵢ) si chiamano probabilità <b>a priori</b> (prima di sapere B), le P(Aᵢ | B) probabilità <b>a posteriori</b> (dopo aver osservato B). Bayes dice come <b>aggiornare le proprie convinzioni</b> in base a un'evidenza.</p>
<p><b>Esempio: un'azienda.</b> Tre macchine A, B, C producono rispettivamente il 50%, 30% e 20% dei pezzi, con il 2%, 3% e 5% di pezzi difettosi. Probabilità totale di un difetto: P(D) = 0,5 · 0,02 + 0,3 · 0,03 + 0,2 · 0,05 = 0,010 + 0,009 + 0,010 = 0,029 (2,9%). Un pezzo è difettoso: da quale macchina viene? P(A | D) = 0,010/0,029 ≈ 34,5%; P(B | D) = 0,009/0,029 ≈ 31,0%; P(C | D) = 0,010/0,029 ≈ <b>34,5%</b>. Anche se C produce solo il 20% dei pezzi, causa più di un terzo dei difetti: è la prima da controllare.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il test medico e il paradosso del positivo",
      html: `<p>Una malattia colpisce l'<b>1%</b> della popolazione. Un test la rileva nel <b>99%</b> dei malati (sensibilità) e dà un <b>falso positivo</b> nel <b>5%</b> dei sani. Sei positivo: qual è la probabilità di essere malato? Molti rispondono «circa il 99%». Applichiamo Bayes: P(malato | +) = (0,99 · 0,01) / (0,99 · 0,01 + 0,05 · 0,99) = 0,0099 / 0,0594 = 1/6 ≈ <b>16,7%</b>! Il risultato sorprende perché i sani sono 99 volte più numerosi dei malati: il 5% di un gruppo enorme dà più falsi positivi (495 su 9900) che veri positivi (99 su 100). Per questo, per una malattia rara, un test positivo si ripete o si conferma con un secondo esame: con un secondo test positivo (indipendente) la probabilità sale a circa l'80%.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: due dadi",
      html: `<p>Lancio due dadi. La probabilità che la somma sia 8 è 5/36 (le coppie 2-6, 3-5, 4-4, 5-3, 6-2). Se però so che il <b>primo dado è 3</b>, per ottenere 8 serve un 5 con il secondo: P(somma 8 | primo = 3) = 1/6, più alta di 5/36 ≈ 0,139 (1/6 ≈ 0,167). Se invece so che il primo dado è 1, la somma 8 diventa <b>impossibile</b>: P = 0. L'informazione parziale sposta la probabilità in su o in giù: ecco perché gli eventi «somma 8» e «primo dado = 3» sono <b>dipendenti</b>. La somma «7» è un caso speciale: P(somma 7 | primo = qualsiasi valore) = 1/6 = P(somma 7), quindi «somma 7» e «primo dado = k» sono indipendenti.</p>`
    },
    {
      type: "decision",
      title: "Il gioco di Monty Hall: cambi porta?",
      html: "<p>Sei a un quiz. Davanti a te ci sono 3 porte: dietro una c'è un'auto, dietro le altre due una capra. Scegli la porta 1. Il conduttore, che sa dove sta l'auto, apre una delle altre due porte che nascondono una capra (diciamo la 3) e ti chiede: «Vuoi cambiare e scegliere la porta 2?».</p>",
      question: "Che cosa conviene fare?",
      options: [
        { label: "Restare sulla porta 1", outcome: "Se resti vinci solo se avevi indovinato fin dall'inizio: probabilità 1/3." },
        { label: "Cambiare con la porta 2", outcome: "Se cambi vinci quando la tua prima scelta era sbagliata (probabilità 2/3): in quel caso il conduttore, aprendo l'unica altra capra, ti indica l'auto." },
        { label: "È indifferente: 50% e 50%", outcome: "È l'intuizione più comune, ma è sbagliata: le due porte rimaste non sono equivalenti, perché il conduttore non apre una porta a caso." }
      ],
      answer: 1,
      explain: "Conviene cambiare: si vince con probabilità 2/3 contro 1/3. Con Bayes: all'inizio ogni porta ha probabilità 1/3. Il conduttore apre la porta 3 solo se non c'è l'auto (con probabilità 1 se l'auto è dietro la 2, 1/2 se è dietro la 1). P(auto in 2 | apre 3) = (1 · 1/3) / (1 · 1/3 + 1/2 · 1/3 + 0 · 1/3) = (1/3)/(1/2) = 2/3. La probabilità della porta scelta resta 1/3, e tutta la probabilità 'liberata' dalla porta aperta si sposta sull'altra porta. Pensa a 100 porte: scegli una, il conduttore ne apre 98 con capre: non cambieresti con l'unica rimasta?"
    },
    {
      type: "remember",
      title: "Il metodo delle frequenze naturali",
      html: `<p>Il modo più sicuro per non sbagliare con Bayes: immagina <b>10 000 persone</b> e conta. 1% malati = 100, di cui 99 positivi; 9900 sani, di cui 5% = 495 falsi positivi. I positivi sono 99 + 495 = 594 e i veri malati tra essi 99/594 ≈ 16,7%. <b>Regola:</b> probabilità = (casi di interesse) / (tutti i casi che soddisfano la condizione). Guarda sempre <b>da quale gruppo</b> stai calcolando la percentuale!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Thomas Bayes e i filtri antispam",
      html: `<p><b>Thomas Bayes</b> (1701-1761) fu un pastore presbiteriano inglese e matematico dilettante. Il suo saggio, in cui compare il teorema che porta il suo nome, fu pubblicato <b>dopo la sua morte</b>, nel 1763, dall'amico Richard Price. La formula fu poi riscoperta e generalizzata da <b>Laplace</b>. Oggi è alla base dei <b>filtri antispam</b> («naive Bayes»): dalla frequenza con cui una parola come «gratis» compare nelle mail spam e in quelle regolari, il filtro calcola la probabilità che un nuovo messaggio sia spam, e aggiorna i valori a ogni messaggio che l'utente classifica. Lo stesso principio sta dietro a molti sistemi di diagnosi automatica e di apprendimento automatico.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La fallacia del procuratore",
      html: `<p>In molti processi è comparso un errore di ragionamento chiamato <b>fallacia del procuratore</b>: confondere P(prova | innocente) con P(innocente | prova). Se un DNA coincide con quello trovato sulla scena del crimine con probabilità di 1 su un milione per un innocente a caso, non significa che l'imputato sia innocente con probabilità di 1 su un milione: in una città da 5 milioni di persone ci si aspettano circa 5 persone con quel profilo, e l'imputato è solo uno dei possibili colpevoli. Il problema di Monty Hall (dal nome del conduttore del quiz americano <i>Let's Make a Deal</i>) divenne famoso nel 1990, quando una rivista pubblicò la risposta corretta («cambia!») e ricevette molte lettere di protesta, anche di matematici di professione.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la probabilità condizionata",
      intro: "Se le formule sembrano astratte, ecco tre punti di vista per \"vedere\" le probabilità.",
      tabs: [
        {
          label: "👥 Contare le persone",
          html: `<p>Sostituisci le probabilità con <b>frequenze su un gruppo immaginario</b>. In una classe di 100 studenti, 40 giocano a calcio, 30 a pallavolo e 10 praticano entrambi. Qual è la probabilità che uno studente giochi a pallavolo sapendo che gioca a calcio? Tra i 40 calciatori, 10 giocano anche a pallavolo: 10/40 = 25%. Qual è la probabilità inversa (calcio dato pallavolo)? Tra i 30 pallavolisti, 10 giocano a calcio: 10/30 ≈ 33%. Le due condizionate sono diverse perché cambia il gruppo di riferimento (il denominatore).</p>`
        },
        {
          label: "📋 La tabella a doppia entrata",
          html: `<p>Una tabella con le righe «malato / sano» e le colonne «test + / test −» mostra tutto: la probabilità condizionata P(A | B) è il valore della cella divisa per il <b>totale della colonna (o riga) della condizione</b>. Per il test dell'esempio su 10 000 persone: malati e positivi 99, malati e negativi 1, sani e positivi 495, sani e negativi 9405. Totale positivi: 594; P(malato | +) = 99/594. Totale malati: 100; P(+ | malato) = 99/100. Stessa cella, due totali diversi, due probabilità diverse.</p>`
        },
        {
          label: "🎲 Indipendenti o dipendenti?",
          html: `<p>Classifica queste coppie di eventi: l'esito del primo cambia la probabilità del secondo?</p>`,
          widget: "classify",
          options: { groups: ["Indipendenti", "Dipendenti"], items: [["Due lanci consecutivi di una moneta", 0], ["Due carte estratte senza reinserimento", 1], ["Due estrazioni con reinserimento", 0], ["Piove oggi / uso l'ombrello", 1], ["Due lanci di un dado", 0], ["Pescare un asso e poi un secondo asso (senza reinserimento)", 1]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della probabilità condizionata",
      nodes: [
        { id: "def", label: "Probabilità condizionata", x: 50, y: 6, color: "#6366f1", html: "P(A | B) = P(A ∩ B)/P(B): la probabilità di A quando B è già accaduto.", why: "Una nuova informazione restringe lo spazio dei casi possibili a B; il rapporto è la 'porzione' di B in cui accade anche A." },
        { id: "prod", label: "Regola del prodotto", x: 15, y: 38, color: "#16a34a", html: "P(A ∩ B) = P(A) · P(B | A).", why: "È la definizione riscritta: permette di calcolare probabilità di sequenze di eventi (alberi) e di estrazioni senza reinserimento." },
        { id: "ind", label: "Indipendenza", x: 85, y: 38, color: "#f59e0b", html: "P(A | B) = P(A) ⟺ P(A ∩ B) = P(A)P(B).", why: "Quando B non porta informazione su A. Non va confusa con l'incompatibilità: eventi incompatibili sono dipendenti." },
        { id: "tot", label: "Probabilità totale", x: 15, y: 72, color: "#ef4444", html: "P(B) = Σ P(B | Aᵢ)P(Aᵢ) su una partizione.", why: "Si calcola la probabilità di un evento spezzandolo secondo le possibili 'cause' Aᵢ che si escludono a vicenda e coprono tutti i casi." },
        { id: "bayes", label: "Teorema di Bayes", x: 85, y: 72, color: "#0ea5e9", html: "P(Aᵢ | B) = P(B | Aᵢ)P(Aᵢ)/P(B).", why: "Dalla regola del prodotto scritta in due modi: P(A | B)P(B) = P(B | A)P(A). Dice come aggiornare la probabilità di un'ipotesi dopo un'osservazione." },
        { id: "app", label: "Applicazioni", x: 50, y: 92, color: "#a855f7", html: "Test diagnostici, antispam, tribunali, apprendimento automatico, Monty Hall.", why: "In ogni settore in cui si deve passare dai dati osservati alle cause possibili: la logica dell'inferenza." }
      ],
      edges: [
        ["def", "prod", "riscritta"],
        ["def", "ind", "se invariata"],
        ["prod", "tot", "usa"],
        ["tot", "bayes", "denominatore"],
        ["prod", "bayes", "simmetria"],
        ["bayes", "app", "serve a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: totale e Bayes",
      questions: [
        { type: "num", q: "Il 60% dei pezzi è prodotto dalla macchina A (3% difetti) e il 40% dalla B (5% difetti). Qual è la percentuale totale di difetti?", answer: 3.8, tol: 0.01, unit: "%", explain: "0,6 · 0,03 + 0,4 · 0,05 = 0,018 + 0,020 = 0,038 = 3,8%." },
        { type: "mc", q: "Nello stesso esempio, un pezzo è difettoso. Qual è la probabilità che provenga dalla macchina B?", options: ["≈ 52,6%", "40%", "≈ 5%"], answer: 0, explain: "P(B | D) = 0,020/0,038 ≈ 0,526." },
        { type: "tf", q: "Il teorema di Bayes permette di passare da P(B | A) a P(A | B).", answer: true, explain: "È esattamente il suo scopo: invertire la condizione, tenendo conto delle probabilità a priori." }
      ]
    }
  ],
  glossary: [
    { t: "Probabilità condizionata", d: "P(A | B) = P(A ∩ B)/P(B): probabilità di A sapendo che B è avvenuto." },
    { t: "Eventi indipendenti", d: "Eventi per cui P(A ∩ B) = P(A)P(B): uno non influenza l'altro." },
    { t: "Eventi incompatibili", d: "Eventi che non possono accadere insieme: A ∩ B = ∅." },
    { t: "Partizione", d: "Insieme di eventi incompatibili la cui unione è tutto lo spazio dei casi." },
    { t: "Probabilità totale", d: "P(B) = Σ P(B | Aᵢ)P(Aᵢ) su una partizione {Aᵢ}." },
    { t: "Teorema di Bayes", d: "P(Aᵢ | B) = P(B | Aᵢ)P(Aᵢ)/P(B)." },
    { t: "Probabilità a priori / a posteriori", d: "Prima / dopo aver osservato l'evidenza B." },
    { t: "Sensibilità", d: "Probabilità che un test dia positivo su un malato." },
    { t: "Falso positivo", d: "Test positivo su una persona non malata." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Con un dado: P(esce 6 | esce un numero maggiore di 3) è…", options: ["1/3", "1/6", "1/2"], answer: 0, explain: "I casi possibili sono 4, 5, 6: uno su tre è il 6." },
      { type: "num", q: "Un'urna ha 4 palline bianche e 6 nere. Estraendone due senza reinserimento, qual è la probabilità che siano entrambe bianche? (risposta decimale, tre cifre)", answer: 0.133, tol: 0.001, explain: "4/10 · 3/9 = 12/90 = 2/15 ≈ 0,133." },
      { type: "tf", q: "Se A e B sono indipendenti, P(A ∩ B) = P(A)P(B).", answer: true, explain: "È la definizione di indipendenza." },
      { type: "num", q: "Si lanciano due monete. Sapendo che la prima è testa, qual è la probabilità che siano due teste? (risposta decimale)", answer: 0.5, tol: 0.001, explain: "Restano due casi (TT, TC): uno è favorevole, quindi 1/2." },
      { type: "mc", q: "Se P(A) = 0,4, P(B) = 0,5 e A e B sono indipendenti, P(A ∩ B) vale…", options: ["0,2", "0,9", "0,1"], answer: 0, explain: "0,4 · 0,5 = 0,2." },
      { type: "num", q: "Una malattia colpisce 2 persone su 100. Il test ha sensibilità 90% e il 10% dei sani risulta positivo. Su 1000 persone, quanti positivi attesi?", answer: 116, explain: "Malati 20 (18 positivi); sani 980 (98 positivi): 18 + 98 = 116." },
      { type: "mc", q: "Nell'esempio precedente, la probabilità di essere malato dato un test positivo è circa…", options: ["15,5%", "90%", "2%"], answer: 0, explain: "18/116 ≈ 0,155: molto meno del 90% di sensibilità." },
      { type: "tf", q: "Nel problema di Monty Hall, cambiare porta fa vincere con probabilità 2/3.", answer: true, explain: "La porta scelta all'inizio ha ancora probabilità 1/3; l'altra porta rimasta ha 2/3." },
      { type: "text", q: "Come si chiama la probabilità di un'ipotesi prima di osservare l'evidenza? (aggettivo)", answer: ["a priori", "apriori", "priori", "iniziale"], explain: "È la probabilità a priori, che il teorema di Bayes aggiorna in probabilità a posteriori." },
      { type: "order", q: "Metti in ordine i passi per applicare il teorema di Bayes.", items: ["Individuare le cause (partizione) e le loro probabilità a priori", "Scrivere le probabilità P(B | causa)", "Calcolare P(B) con la probabilità totale", "Calcolare P(causa | B) = P(B | causa)P(causa)/P(B)", "Verificare che le probabilità a posteriori sommino a 1"], explain: "Si definiscono cause e priori, si calcola la probabilità totale e si divide: le probabilità a posteriori devono sommare a 1." }
    ]
  }
});
