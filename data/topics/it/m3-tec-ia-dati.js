TOPIC('it', {
  id: `m3-tec-ia-dati`,
  title: `Intelligenza artificiale e dati`,
  intro: `I suggerimenti dei video, il traduttore, i chatbot che scrivono testi, le auto che frenano da sole: l'<b>intelligenza artificiale</b> (IA) è già nella nostra vita. Ma come fa una macchina a <b>imparare dai dati</b>? Che cos'è una <b>rete neurale</b>? E quali sono i <b>rischi</b> (errori, pregiudizi, privacy, falsi) e le <b>opportunità</b>? In questa lezione guardiamo dentro la "scatola nera". 🤖📊`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Dati, informazioni, conoscenza`,
      html: `<p>Un <b>dato</b> è un valore grezzo: <i>38,5</i>. Un'<b>informazione</b> è un dato con un significato: <i>la temperatura di Marco è 38,5 °C</i>. La <b>conoscenza</b> nasce collegando molte informazioni: <i>sopra i 37,5 °C si ha la febbre</i>.</p>
<p>I dati possono essere:</p>
<ul>
<li><b>strutturati</b>: ordinati in tabelle (voti, temperature, prezzi);</li>
<li><b>non strutturati</b>: testi, foto, audio, video (sono la grande maggioranza).</li>
</ul>
<p>Nel computer ogni dato diventa una sequenza di <b>bit</b> (0 e 1). Una foto è una griglia di pixel, ognuno con tre numeri (rosso, verde, blu da 0 a 255). Un testo è una sequenza di numeri, uno per ogni carattere o pezzo di parola.</p>
<p>Ogni giorno nel mondo si producono quantità enormi di dati (si parla di <b>big data</b>): è proprio questa abbondanza che ha permesso all'IA moderna di funzionare.</p>`
    },
    {
      type: `text`, title: `2. Programmare o far imparare?`,
      html: `<p>Nella <b>programmazione classica</b> la persona scrive le <b>regole</b>; il computer le applica ai dati e dà le risposte.</p>
<p>Nel <b>machine learning</b> (apprendimento automatico) si danno al computer i <b>dati</b> e le <b>risposte giuste</b> (esempi); il computer ricava da solo le <b>regole</b>, cioè costruisce un <b>modello</b>.</p>
<p>Ci sono tre modi principali di imparare:</p>
<ul>
<li><b>Supervisionato</b>: esempi con l'<b>etichetta</b> giusta ("questa email è spam / non è spam"). Il modello impara a prevedere l'etichetta.</li>
<li><b>Non supervisionato</b>: dati senza etichetta; il modello trova da solo <b>gruppi</b> e somiglianze (es. clienti con gusti simili).</li>
<li><b>Per rinforzo</b>: il modello prova delle azioni e riceve <b>premi o penalità</b>, come quando si addestra un cane (es. imparare a giocare a un videogioco).</li>
</ul>`
    },
    {
      type: `svg`, title: `Il ciclo dell'apprendimento automatico`,
      caption: `Dati ➜ divisione in addestramento e test ➜ addestramento ➜ verifica sui dati mai visti ➜ uso. Se il modello sbaglia troppo, si torna ai dati.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="20" y="40" width="120" height="70" rx="12" fill="#a78bfa"/>
<text x="80" y="70" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">1. DATI</text>
<text x="80" y="94" font-size="13" fill="#fff" text-anchor="middle">raccolta, pulizia</text>
<rect x="170" y="20" width="120" height="50" rx="10" fill="#22c55e"/>
<text x="230" y="50" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">80% training</text>
<rect x="170" y="85" width="120" height="50" rx="10" fill="#f59e0b"/>
<text x="230" y="115" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">20% test</text>
<rect x="320" y="20" width="130" height="70" rx="12" fill="#7c3aed"/>
<text x="385" y="50" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">2. ADDESTRA</text>
<text x="385" y="73" font-size="12" fill="#ede9fe" text-anchor="middle">prova, sbaglia, corregge</text>
<rect x="470" y="40" width="115" height="70" rx="12" fill="#1d4ed8"/>
<text x="527" y="70" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">3. MODELLO</text>
<text x="527" y="93" font-size="12" fill="#dbeafe" text-anchor="middle">le "regole" trovate</text>
<rect x="320" y="170" width="130" height="70" rx="12" fill="#f59e0b"/>
<text x="385" y="200" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">4. VERIFICA</text>
<text x="385" y="223" font-size="12" fill="#fff" text-anchor="middle">sui dati di test</text>
<rect x="470" y="170" width="115" height="70" rx="12" fill="#16a34a"/>
<text x="527" y="200" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">5. USO</text>
<text x="527" y="223" font-size="12" fill="#fff" text-anchor="middle">dati nuovi</text>
<g stroke="#4c1d95" stroke-width="3" fill="none">
<path d="M140 65 L168 45"/><path d="M140 85 L168 110"/>
<path d="M290 45 L318 50"/><path d="M450 55 L468 70"/>
<path d="M527 112 L527 168"/><path d="M290 110 C 330 120, 360 140, 380 168"/>
<path d="M450 205 L468 205"/>
<path d="M320 220 C 200 260, 90 230, 80 112" stroke-dasharray="7 5"/>
</g>
<text x="170" y="262" font-size="13" fill="#4c1d95" font-weight="bold">troppi errori? migliora i dati</text>
</svg>`
    },
    {
      type: `text`, title: `3. Dentro una rete neurale`,
      html: `<p>Le IA più potenti di oggi usano le <b>reti neurali artificiali</b>, ispirate (molto alla lontana) ai neuroni del cervello.</p>
<p>Un <b>neurone artificiale</b> fa un calcolo semplicissimo:</p>
<ol>
<li>riceve dei <b>numeri in ingresso</b> (input);</li>
<li>moltiplica ognuno per un <b>peso</b> (quanto è importante);</li>
<li>somma tutto (più un valore chiamato <i>bias</i>);</li>
<li>se il risultato supera una <b>soglia</b>, "si attiva" e manda un segnale ai neuroni successivi.</li>
</ol>
<p>Esempio: <i>"Vado al parco?"</i> Input: c'è il sole (1), ho compiti (1), c'è un amico (1). Pesi: sole +3, compiti −4, amico +2. Somma: 3 − 4 + 2 = <b>1</b>. Soglia 0 ➜ 1 &gt; 0 ➜ <b>sì, vado!</b></p>
<p>Una rete è fatta di <b>strati</b>: strato di ingresso, uno o più <b>strati nascosti</b>, strato di uscita. Quando le reti hanno tanti strati si parla di <b>deep learning</b> (apprendimento profondo). <b>Addestrare</b> la rete significa aggiustare automaticamente, milioni di volte, i <b>pesi</b> per ridurre gli errori. I grandi modelli linguistici hanno <b>miliardi</b> di pesi.</p>`
    },
    {
      type: `3d`, title: `Una piccola rete neurale in 3D`,
      scene: `molecule`,
      options: {
        atoms: [
          { x: -2, y: 1.2, z: 0, r: 0.3, color: `#22c55e`, label: `input 1` },
          { x: -2, y: 0, z: 0, r: 0.3, color: `#22c55e`, label: `input 2` },
          { x: -2, y: -1.2, z: 0, r: 0.3, color: `#22c55e`, label: `input 3` },
          { x: 0, y: 1.6, z: 0.5, r: 0.3, color: `#a855f7`, label: `nascosto` },
          { x: 0, y: 0.5, z: -0.5, r: 0.3, color: `#a855f7`, label: `nascosto` },
          { x: 0, y: -0.5, z: 0.5, r: 0.3, color: `#a855f7`, label: `nascosto` },
          { x: 0, y: -1.6, z: -0.5, r: 0.3, color: `#a855f7`, label: `nascosto` },
          { x: 2, y: 0.6, z: 0, r: 0.35, color: `#f97316`, label: `gatto` },
          { x: 2, y: -0.6, z: 0, r: 0.35, color: `#f97316`, label: `cane` }
        ],
        bonds: [[0, 3], [0, 4], [0, 5], [0, 6], [1, 3], [1, 4], [1, 5], [1, 6], [2, 3], [2, 4], [2, 5], [2, 6], [3, 7], [3, 8], [4, 7], [4, 8], [5, 7], [5, 8], [6, 7], [6, 8]]
      },
      caption: `Verde: neuroni di ingresso (per esempio pixel). Viola: strato nascosto. Arancione: uscite (gatto o cane). Ogni collegamento ha un peso che viene regolato durante l'addestramento.`
    },
    {
      type: `quiz`, title: `Mini-quiz: come impara una macchina`,
      questions: [
        { type: `mc`, q: `Un modello che impara da email già etichettate "spam / non spam" usa l'apprendimento…`, options: [`supervisionato`, `non supervisionato`, `per rinforzo`], answer: 0, explain: `Gli esempi hanno l'etichetta giusta: è supervisionato.` },
        { type: `num`, q: `Un neurone ha input 1 e 1, pesi 2 e −5. Quanto vale la somma pesata?`, answer: -3, tol: 0, explain: `1×2 + 1×(−5) = 2 − 5 = −3.` },
        { type: `tf`, q: `I dati di test servono a verificare il modello su esempi che non ha mai visto.`, answer: true, explain: `Se si verificasse sugli stessi dati di addestramento, il modello potrebbe solo "ricordare" e non generalizzare.` }
      ]
    },
    {
      type: `text`, title: `4. L'IA generativa e i chatbot`,
      html: `<p>L'<b>IA generativa</b> crea contenuti nuovi: testi, immagini, musica, video. I chatbot come quelli che conosci si basano su <b>grandi modelli linguistici</b> (LLM, <i>Large Language Models</i>).</p>
<p>Un LLM è stato addestrato su enormi quantità di testi per fare una cosa sola, ma benissimo: <b>prevedere la parola (o il pezzo di parola) successiva</b>. Ripetendo la previsione tante volte, scrive frasi intere.</p>
<p>Conseguenze importanti:</p>
<ul>
<li>il modello <b>non "sa" come una persona</b>: produce il testo più probabile, che di solito è corretto, ma <b>a volte inventa</b> fatti, date o fonti in modo convincente (si chiamano <b>allucinazioni</b>);</li>
<li>le risposte dipendono da come fai la domanda (il <b>prompt</b>);</li>
<li>le informazioni vanno sempre <b>verificate</b> su fonti affidabili.</li>
</ul>`
    },
    {
      type: `text`, title: `5. Rischi e regole`,
      html: `<ul>
<li><b>Pregiudizi (bias)</b>: se i dati sono sbilanciati, il modello lo sarà. Un sistema addestrato quasi solo su volti di un certo tipo riconosce peggio gli altri.</li>
<li><b>Errori e allucinazioni</b>: l'IA può sbagliare con grande sicurezza.</li>
<li><b>Privacy</b>: foto, voce, messaggi, posizione sono <b>dati personali</b>. In Europa li protegge il <b>GDPR</b> (Regolamento generale sulla protezione dei dati, in vigore dal 2018).</li>
<li><b>Deepfake e disinformazione</b>: immagini, audio e video falsi ma realistici.</li>
<li><b>Energia e ambiente</b>: addestrare e usare i grandi modelli richiede data center che consumano molta elettricità e acqua per il raffreddamento.</li>
<li><b>Lavoro e studio</b>: l'IA può aiutare, ma se fa i compiti al posto tuo… non impari tu!</li>
</ul>
<p>L'Unione Europea ha approvato nel <b>2024</b> l'<b>AI Act</b>, la prima grande legge al mondo sull'IA: divide i sistemi per <b>livello di rischio</b> e vieta quelli inaccettabili (per esempio il "punteggio sociale" dei cittadini). Nel 2025 anche l'Italia ha approvato una propria legge sull'IA, che tra l'altro richiede il <b>consenso dei genitori</b> per l'uso da parte dei minori di 14 anni.</p>
<p><b>Opportunità</b>: diagnosi mediche più precoci, traduzioni istantanee, aiuto per persone con disabilità (lettura di testi per chi non vede, sottotitoli automatici), previsioni meteo, scoperta di nuovi farmaci e materiali.</p>`
    },
    {
      type: `widget`, title: `Gioco: rischio o opportunità?`,
      widget: `classify`,
      options: {
        groups: [`Opportunità 🌱`, `Rischio ⚠️`],
        items: [
          [`🩺 Trovare tumori nelle radiografie prima del medico`, 0],
          [`🔊 Leggere ad alta voce un testo a chi non vede`, 0],
          [`🌍 Tradurre in tempo reale una conversazione`, 0],
          [`💊 Scoprire nuove molecole per farmaci`, 0],
          [`🎭 Video falso di un politico che dice cose mai dette`, 1],
          [`📸 Usare foto di persone senza il loro permesso`, 1],
          [`⚖️ Selezionare candidati con dati pieni di pregiudizi`, 1],
          [`📝 Copiare un compito scritto dall'IA senza capirlo`, 1]
        ]
      },
      caption: `Lo stesso strumento può servire per scopi buoni o cattivi: conta come lo usiamo.`
    },
    {
      type: `example`, title: `Esempio pratico: il filtro anti-spam`,
      html: `<p>Il tuo servizio email riceve milioni di messaggi. Per addestrare il filtro:</p>
<ol>
<li><b>Dati</b>: tante email già segnate dagli utenti come "spam" o "non spam".</li>
<li><b>Caratteristiche</b> (features): parole come "GRATIS", "hai vinto", link strani, mittente sconosciuto…</li>
<li><b>Addestramento</b>: il modello impara quanto pesa ogni caratteristica.</li>
<li><b>Test</b>: su 1000 email nuove ne classifica bene 980 ➜ <b>accuratezza</b> = 980 ÷ 1000 = <b>98%</b>.</li>
</ol>
<p>Quando premi "Segnala come spam", stai fornendo un nuovo esempio etichettato: anche tu stai addestrando il modello!</p>`
    },
    {
      type: `example`, title: `Esempio pratico: i suggerimenti dei video`,
      html: `<p>Le piattaforme video registrano che cosa guardi, quanto a lungo, che cosa salti. Con l'apprendimento <b>non supervisionato</b> raggruppano gli utenti con gusti simili; poi ti propongono ciò che è piaciuto ai "tuoi simili".</p>
<p>Il lato positivo: scopri contenuti interessanti. Il rischio: la <b>bolla di filtraggio</b> (<i>filter bubble</i>), cioè vedere sempre le stesse idee, e il tempo che passa senza accorgersene. L'obiettivo del sistema è tenerti lì il più possibile: ricordalo!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… il nome "intelligenza artificiale" ha una data di nascita?`,
      html: `<p>Nel <b>1950</b> il matematico inglese <b>Alan Turing</b> si chiese "Le macchine possono pensare?" e propose un gioco, poi chiamato <b>test di Turing</b>. Il termine <b>"artificial intelligence"</b> fu usato da <b>John McCarthy</b> per un seminario estivo al Dartmouth College (USA) nel <b>1956</b>. Nel 1958 Frank Rosenblatt costruì il <b>percettrone</b>, il primo neurone artificiale capace di imparare.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… le macchine hanno battuto i campioni?`,
      html: `<p>Nel <b>1997</b> il computer <b>Deep Blue</b> di IBM sconfisse il campione del mondo di scacchi <b>Garry Kasparov</b>, ma usando soprattutto calcolo "a forza bruta". Nel <b>2016</b> <b>AlphaGo</b> di DeepMind batté il campione <b>Lee Sedol</b> a <b>Go</b>, un gioco con più posizioni possibili che atomi nell'universo osservabile: lì servivano le reti neurali. Nel novembre <b>2022</b> l'uscita di ChatGPT ha fatto conoscere i chatbot a centinaia di milioni di persone in pochi mesi.</p>`
    },
    {
      type: `widget`, title: `La storia dell'IA`,
      widget: `timeline`,
      options: { events: [
        { year: 1950, label: `Turing: "Le macchine possono pensare?"`, icon: `🧠` },
        { year: 1956, label: `Dartmouth: nasce il termine "IA"`, icon: `🏫` },
        { year: 1958, label: `Percettrone di Rosenblatt`, icon: `🔘` },
        { year: 1997, label: `Deep Blue batte Kasparov a scacchi`, icon: `♟️` },
        { year: 2012, label: `Le reti profonde riconoscono le immagini`, icon: `🖼️` },
        { year: 2016, label: `AlphaGo batte Lee Sedol a Go`, icon: `⚫` },
        { year: 2022, label: `I chatbot diventano di massa`, icon: `💬` },
        { year: 2024, label: `UE: approvato l'AI Act`, icon: `⚖️` }
      ], unit: `anni` },
      caption: `Settant'anni di storia: lunghi periodi di attesa ("inverni dell'IA") e improvvise accelerazioni.`
    },
    {
      type: `remember`, title: `Da ricordare: usare l'IA con la testa`,
      html: `<ul>
<li>L'IA impara <b>dai dati</b>: se i dati sono sbagliati o parziali, lo sarà anche lei.</li>
<li>Dà risposte <b>probabili</b>, non certe: <b>verifica</b> sempre su fonti affidabili.</li>
<li><b>Non inserire dati personali</b> (tuoi o di altri) nei chatbot.</li>
<li>Usala per capire, non per copiare; e dichiara quando l'hai usata.</li>
<li>Le decisioni importanti restano alle <b>persone</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Come fa davvero una macchina a "imparare"? Ecco quattro strade diverse.`,
      tabs: [
        {
          label: `🍳 Il cuoco e la ricetta`,
          html: `<p><b>Programmazione classica</b>: ti do la <b>ricetta</b> (regole) e gli ingredienti (dati) ➜ tu fai la torta (risposta).</p>
<p><b>Machine learning</b>: ti do <b>tante torte già fatte</b> con i loro ingredienti, e tu devi <b>indovinare la ricetta</b>. Assaggi, provi, sbagli, correggi… Alla fine la "ricetta" che hai ricostruito è il <b>modello</b>.</p>`
        },
        {
          label: `🎛️ Le manopole`,
          html: `<p>Immagina un mixer con migliaia di <b>manopole</b> (i pesi). Mostri alla macchina una foto di gatto: lei risponde "cane". Errore! Allora gira <b>un pochino</b> ogni manopola nella direzione che avrebbe ridotto l'errore. Ripeti con milioni di foto. Alla fine le manopole sono nella posizione giusta per riconoscere i gatti.</p>
<p>Questo metodo per aggiustare le manopole si chiama <b>discesa del gradiente</b>: come scendere da una montagna nella nebbia facendo sempre un passo verso il basso.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#0f172a"/>
<g fill="#334155" stroke="#94a3b8" stroke-width="2">
<circle cx="80" cy="90" r="34"/><circle cx="190" cy="90" r="34"/><circle cx="300" cy="90" r="34"/><circle cx="410" cy="90" r="34"/><circle cx="520" cy="90" r="34"/>
</g>
<g stroke="#facc15" stroke-width="5" stroke-linecap="round">
<line x1="80" y1="90" x2="100" y2="65"/><line x1="190" y1="90" x2="165" y2="70"/><line x1="300" y1="90" x2="300" y2="58"/><line x1="410" y1="90" x2="440" y2="100"/><line x1="520" y1="90" x2="500" y2="62"/>
</g>
<g font-size="15" fill="#e2e8f0" text-anchor="middle"><text x="80" y="150">peso 1</text><text x="190" y="150">peso 2</text><text x="300" y="150">peso 3</text><text x="410" y="150">peso 4</text><text x="520" y="150">…</text></g>
<text x="300" y="195" font-size="16" fill="#facc15" text-anchor="middle" font-weight="bold">ogni errore ➜ piccola correzione di tutte le manopole</text>
</svg>`
        },
        {
          label: `👶 Come un bambino`,
          html: `<p>Un bambino piccolo vede un cane e dice "bau". Poi vede un gatto e dice "bau": la mamma lo corregge, "no, quello è un <b>gatto</b>". Dopo tanti esempi, impara la differenza. È l'apprendimento <b>supervisionato</b>.</p>
<p>Ma attenzione alle differenze: a un bambino bastano pochi esempi; a una rete neurale ne servono migliaia o milioni. E il bambino <b>capisce</b> che cos'è un animale, la rete trova solo regolarità nei numeri.</p>`
        },
        {
          label: `🃏 Flashcards dei termini`,
          html: `<p>Ripassa le parole chiave dell'IA (molte sono in inglese).</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `dataset`, back: `insieme di dati usato per addestrare` },
            { front: `training`, back: `addestramento: il modello regola i pesi` },
            { front: `modello`, back: `il risultato dell'addestramento: le "regole" trovate` },
            { front: `bias`, back: `pregiudizio nei dati che il modello impara` },
            { front: `prompt`, back: `la richiesta che scrivi al chatbot` },
            { front: `allucinazione`, back: `risposta inventata ma convincente` },
            { front: `deepfake`, back: `video/audio falso creato con l'IA` }
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: l'intelligenza artificiale`,
      nodes: [
        { id: `dati`, label: `Dati`, x: 15, y: 10, color: `#a855f7`, html: `Numeri, testi, immagini, suoni: la "materia prima" dell'IA.`, why: `Con Internet, gli smartphone e i sensori, dagli anni 2000 la quantità di dati digitali è esplosa: senza questa abbondanza le reti neurali non avrebbero abbastanza esempi.` },
        { id: `ml`, label: `Machine learning`, x: 50, y: 10, color: `#7c3aed`, html: `Imparare regole dagli esempi invece di scriverle.`, why: `Il termine fu usato da <b>Arthur Samuel</b> nel 1959 per un programma che imparava a giocare a dama migliorando partita dopo partita.` },
        { id: `calc`, label: `Potenza di calcolo`, x: 85, y: 10, color: `#0ea5e9`, html: `Processori grafici (GPU) e data center.`, why: `Le GPU, nate per i videogiochi, fanno migliaia di moltiplicazioni in parallelo: proprio ciò che serve alle reti neurali. Dal 2012 sono diventate lo strumento principale dell'IA.` },
        { id: `sup`, label: `Supervisionato`, x: 15, y: 40, color: `#22c55e`, html: `Esempi con etichetta giusta.`, why: `È il metodo più usato perché si può misurare facilmente l'errore: si confronta la risposta del modello con l'etichetta.` },
        { id: `nonsup`, label: `Non supervisionato`, x: 40, y: 40, color: `#16a34a`, html: `Trova gruppi in dati senza etichetta.`, why: `Etichettare costa tempo e lavoro umano: molti dati ne sono privi, e gli algoritmi di raggruppamento (clustering) li sfruttano comunque.` },
        { id: `rinf`, label: `Per rinforzo`, x: 65, y: 40, color: `#15803d`, html: `Premi e penalità.`, why: `Si ispira agli esperimenti di psicologia sul condizionamento degli animali (come quelli di B. F. Skinner). AlphaGo lo usò giocando milioni di partite contro sé stesso.` },
        { id: `rete`, label: `Reti neurali`, x: 85, y: 62, color: `#f97316`, html: `Strati di neuroni artificiali con pesi regolabili.`, why: `Ispirate al neurone biologico descritto da McCulloch e Pitts (1943) e al percettrone di Rosenblatt (1958). Il metodo per addestrare reti con molti strati (backpropagation) fu reso famoso nel 1986.` },
        { id: `gen`, label: `IA generativa`, x: 55, y: 75, color: `#ef4444`, html: `Crea testi, immagini, suoni nuovi.`, why: `Nel 2017 i ricercatori di Google pubblicarono l'architettura <b>Transformer</b>, che permette di analizzare intere frasi in parallelo: è la base dei grandi modelli linguistici.` },
        { id: `etica`, label: `Rischi e regole`, x: 20, y: 85, color: `#64748b`, html: `Bias, privacy, deepfake, energia; GDPR e AI Act.`, why: `Più l'IA decide cose importanti (prestiti, lavoro, sanità), più servono regole. L'UE ha scelto un approccio basato sul <b>livello di rischio</b>: più alto è il rischio, più severi i controlli.` }
      ],
      edges: [
        [`dati`, `ml`, `alimentano`], [`calc`, `ml`, `rende possibile`], [`ml`, `sup`, `tipo`], [`ml`, `nonsup`, `tipo`], [`ml`, `rinf`, `tipo`],
        [`ml`, `rete`, `strumento`], [`rete`, `gen`, `permette`], [`dati`, `etica`, `privacy`], [`gen`, `etica`, `deepfake`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: rischi e uso responsabile`,
      questions: [
        { type: `mc`, q: `Che cos'è un'"allucinazione" di un chatbot?`, options: [`Un errore di connessione`, `Una risposta inventata ma scritta in modo convincente`, `Un'immagine colorata`], answer: 1, explain: `Il modello genera testo probabile, che a volte non è vero.` },
        { type: `tf`, q: `Se i dati di addestramento contengono pregiudizi, il modello può ripeterli.`, answer: true, explain: `Il modello impara ciò che trova nei dati, compresi i pregiudizi (bias).` },
        { type: `mc`, q: `Quale regola europea protegge i dati personali dal 2018?`, options: [`AI Act`, `GDPR`, `Wi-Fi Act`], answer: 1, explain: `Il GDPR, Regolamento generale sulla protezione dei dati.` }
      ]
    }
  ],
  glossary: [
    { t: `Dato`, d: `Valore grezzo che, con un significato, diventa informazione.` },
    { t: `Machine learning`, d: `Apprendimento automatico: il computer ricava regole dagli esempi.` },
    { t: `Modello`, d: `Risultato dell'addestramento, usato per fare previsioni su dati nuovi.` },
    { t: `Rete neurale`, d: `Insieme di neuroni artificiali organizzati in strati, collegati da pesi.` },
    { t: `Peso`, d: `Numero che indica quanto conta un collegamento in una rete neurale.` },
    { t: `Deep learning`, d: `Apprendimento con reti neurali a molti strati.` },
    { t: `LLM`, d: `Grande modello linguistico: prevede la parola successiva in un testo.` },
    { t: `Bias`, d: `Pregiudizio o squilibrio nei dati che il modello impara.` },
    { t: `Deepfake`, d: `Immagine, audio o video falso realizzato con l'IA.` },
    { t: `AI Act`, d: `Legge dell'Unione Europea sull'IA (2024), basata sui livelli di rischio.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Nel machine learning, che cosa forniamo al computer?`, options: [`Solo le regole`, `Tanti esempi (dati), spesso con le risposte giuste`, `Solo l'elettricità`], answer: 1, explain: `Il computer ricava le regole dagli esempi.` },
      { type: `mc`, q: `Un robot che impara a camminare ricevendo un premio quando non cade usa l'apprendimento…`, options: [`supervisionato`, `non supervisionato`, `per rinforzo`], answer: 2, explain: `Premi e penalità: apprendimento per rinforzo.` },
      { type: `num`, q: `Un modello classifica correttamente 450 foto su 500. Qual è l'accuratezza in percentuale?`, answer: 90, tol: 0, unit: `%`, explain: `450 ÷ 500 = 0,9 = 90%.` },
      { type: `num`, q: `Neurone: input 1, 0, 1 con pesi 3, 5, −1. Somma pesata?`, answer: 2, tol: 0, explain: `1×3 + 0×5 + 1×(−1) = 3 + 0 − 1 = 2.` },
      { type: `tf`, q: `Un chatbot dice sempre la verità perché ha letto tutto Internet.`, answer: false, explain: `Può commettere errori e "allucinazioni": bisogna verificare.` },
      { type: `tf`, q: `Il deep learning usa reti neurali con molti strati.`, answer: true, explain: `"Deep" = profondo: tanti strati nascosti.` },
      { type: `mc`, q: `A che cosa servono i dati di test?`, options: [`Ad addestrare il modello`, `A verificare il modello su esempi mai visti`, `A decorare il dataset`], answer: 1, explain: `Si misura quanto il modello generalizza.` },
      { type: `text`, q: `Come si chiama il matematico inglese che nel 1950 si chiese se le macchine possono pensare?`, answer: [`turing`, `alan turing`], explain: `Alan Turing propose il "gioco dell'imitazione", il test di Turing.` },
      { type: `order`, q: `Metti in ordine le fasi dell'apprendimento automatico.`, items: [`Raccogliere e pulire i dati`, `Addestrare il modello`, `Verificarlo sui dati di test`, `Usarlo su dati nuovi`], explain: `Dati ➜ addestramento ➜ test ➜ uso.` },
      { type: `mc`, q: `Quale comportamento è corretto con un chatbot?`, options: [`Scrivere indirizzo e numero di telefono dei compagni`, `Usarlo per capire un argomento e poi verificare sul libro`, `Consegnare il testo generato come se fosse tuo`], answer: 1, explain: `Uso responsabile: per capire, verificando, senza dati personali.` },
      { type: `mc`, q: `Perché un riconoscitore di volti può funzionare peggio con alcune persone?`, options: [`Perché i dati di addestramento erano sbilanciati`, `Perché quelle persone si muovono`, `Perché il computer è stanco`], answer: 0, explain: `È un caso di bias nei dati.` },
      { type: `tf`, q: `L'AI Act europeo classifica i sistemi di IA in base al livello di rischio.`, answer: true, explain: `Rischio inaccettabile (vietato), alto, limitato, minimo.` }
    ],
    gen: [[`percent`, 2]]
  }
});
