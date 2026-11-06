TOPIC('it', {
  id: `p5-tec-ia-intro`,
  title: `Che cos'è l'intelligenza artificiale`,
  intro: `Il telefono che riconosce la tua faccia, l'assistente vocale che risponde alle domande, il programma che traduce un testo in un attimo: dietro c'è l'<b>intelligenza artificiale</b> (IA). Ma come fa una macchina a "imparare"? È davvero intelligente come noi? Oggi lo scopriamo, e impariamo anche a usarla con la testa. 🤖🧠`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Programmi normali e programmi che imparano`,
      html: `<p>Un <b>programma normale</b> segue delle <b>istruzioni</b> scritte da una persona, passo per passo, come una ricetta: <i>"se il numero è pari, scrivi PARI; altrimenti scrivi DISPARI"</i>. Il programmatore deve prevedere tutto.</p>
<p>Ma prova a scrivere le istruzioni per riconoscere un <b>gatto</b> in una foto: "ha le orecchie a punta"… anche le volpi! "Ha i baffi"… anche i topi! È quasi impossibile scrivere tutte le regole.</p>
<p>L'<b>intelligenza artificiale</b> usa un'altra strada: invece di dare alla macchina le regole, le diamo <b>tantissimi esempi</b>, e lei scopre da sola le "regole nascoste". Questo modo si chiama <b>apprendimento automatico</b> (in inglese <i>machine learning</i>).</p>
<p>È un po' come hai imparato tu a riconoscere i cani: nessuno ti ha dato una definizione, hai visto tanti cani e hai capito com'erano fatti!</p>`
    },
    {
      type: `text`, title: `2. Come impara una macchina: 4 passi`,
      html: `<ol>
<li><b>Raccogliere i dati</b>: per esempio 10.000 foto di gatti e 10.000 foto di cani.</li>
<li><b>Etichettare</b>: una persona scrive su ogni foto "gatto" o "cane". Questi sono i <b>dati di addestramento</b>.</li>
<li><b>Addestrare</b> (<i>training</i>): la macchina guarda le foto, prova a indovinare, controlla l'etichetta e, se ha sbagliato, si corregge un pochino. Lo ripete migliaia e migliaia di volte. Alla fine ha costruito un <b>modello</b>.</li>
<li><b>Usare e verificare</b>: le mostriamo una foto <b>nuova</b>, mai vista. Il modello risponde: "gatto al 95%". Si controlla quante volte ha ragione.</li>
</ol>
<p>Nota: l'IA non è sicura al 100%, dà una <b>probabilità</b>. E impara solo da quello che le diamo: se nelle foto ci sono solo gatti neri, potrebbe non riconoscere un gatto bianco!</p>`
    },
    {
      type: `svg`, title: `Dagli esempi al modello`,
      caption: `Tanti esempi con l'etichetta ➜ addestramento ➜ un modello che riconosce anche esempi nuovi.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="95" y="30" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">1. Esempi + etichette</text>
<rect x="20" y="45" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="55" y="85" font-size="30" text-anchor="middle">🐱</text>
<rect x="100" y="45" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="135" y="85" font-size="30" text-anchor="middle">🐶</text>
<rect x="20" y="125" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="55" y="165" font-size="30" text-anchor="middle">🐈</text>
<rect x="100" y="125" width="70" height="60" rx="8" fill="#ffffff" stroke="#a78bfa" stroke-width="2"/><text x="135" y="165" font-size="30" text-anchor="middle">🐕</text>
<text x="55" y="120" font-size="13" text-anchor="middle" fill="#16a34a" font-weight="bold">gatto</text>
<text x="135" y="120" font-size="13" text-anchor="middle" fill="#2563eb" font-weight="bold">cane</text>
<text x="55" y="200" font-size="13" text-anchor="middle" fill="#16a34a" font-weight="bold">gatto</text>
<text x="135" y="200" font-size="13" text-anchor="middle" fill="#2563eb" font-weight="bold">cane</text>
<text x="95" y="230" font-size="14" text-anchor="middle" fill="#4c1d95">… migliaia di foto</text>
<text x="200" y="130" font-size="34" fill="#7c3aed">➜</text>
<rect x="240" y="70" width="140" height="120" rx="16" fill="#7c3aed"/>
<text x="310" y="110" font-size="34" text-anchor="middle">⚙️</text>
<text x="310" y="145" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">2. Addestramento</text>
<text x="310" y="168" font-size="13" text-anchor="middle" fill="#ede9fe">prova, sbaglia, corregge</text>
<text x="390" y="130" font-size="34" fill="#7c3aed">➜</text>
<rect x="430" y="45" width="150" height="80" rx="12" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/>
<text x="505" y="75" font-size="15" text-anchor="middle" fill="#4c1d95" font-weight="bold">3. Foto nuova</text>
<text x="505" y="112" font-size="30" text-anchor="middle">🐈‍⬛</text>
<rect x="430" y="150" width="150" height="80" rx="12" fill="#22c55e"/>
<text x="505" y="182" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">4. Risposta</text>
<text x="505" y="212" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">gatto: 95%</text>
<line x1="505" y1="125" x2="505" y2="150" stroke="#7c3aed" stroke-width="3"/>
<text x="300" y="275" font-size="16" text-anchor="middle" fill="#4c1d95">Più esempi buoni e vari = risposte migliori</text>
</svg>`
    },
    {
      type: `widget`, title: `Prova tu a "addestrare" il tuo cervello`,
      widget: `classify`,
      caption: `Fai come un'IA: guarda gli esempi e dividili in due gruppi. Che "regola nascosta" hai usato?`,
      options: {
        groups: [`🍎 Frutta`, `🥕 Verdura`],
        items: [
          [`🍎 mela`, 0], [`🍌 banana`, 0], [`🍇 uva`, 0], [`🍓 fragola`, 0], [`🍐 pera`, 0],
          [`🥕 carota`, 1], [`🥦 broccolo`, 1], [`🥬 lattuga`, 1], [`🧅 cipolla`, 1], [`🥔 patata`, 1]
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-quiz: come impara l'IA`,
      questions: [
        { type: `mc`, q: `Come impara un sistema di apprendimento automatico?`, options: [`Legge un libro di regole`, `Da tanti esempi`, `Chiedendo alla maestra`], answer: 1, explain: `Impara dai dati di addestramento: tanti esempi, spesso con etichette.` },
        { type: `tf`, q: `L'IA è sempre sicura al 100% delle sue risposte.`, answer: false, explain: `Dà una probabilità e può sbagliare.` },
        { type: `order`, q: `Metti in ordine i passi.`, items: [`Raccogliere i dati`, `Etichettare gli esempi`, `Addestrare il modello`, `Provare con dati nuovi`], explain: `Dati ➜ etichette ➜ addestramento ➜ verifica.` }
      ]
    },
    {
      type: `text`, title: `3. Le reti neurali: un "cervello" fatto di numeri`,
      html: `<p>Molte IA di oggi usano le <b>reti neurali artificiali</b>, ispirate (molto alla lontana) ai <b>neuroni</b> del nostro cervello.</p>
<ul>
<li>Una rete è fatta di tanti "neuroni" artificiali disposti a <b>strati</b>.</li>
<li>Il primo strato riceve i dati (per esempio i pixel di una foto).</li>
<li>Gli strati in mezzo, detti <b>nascosti</b>, scoprono cose sempre più complesse: prima linee e macchie, poi forme come occhi e orecchie, poi "muso di gatto".</li>
<li>L'ultimo strato dà la risposta.</li>
</ul>
<p>Ogni collegamento ha un <b>peso</b>, un numero che dice quanto è importante. Addestrare la rete vuol dire <b>aggiustare i pesi</b> poco alla volta finché le risposte diventano giuste. Le reti più grandi hanno <b>miliardi</b> di pesi!</p>
<p>Quando le reti hanno tanti strati si parla di <b>deep learning</b> (apprendimento profondo).</p>`
    },
    {
      type: `3d`, title: `Una rete neurale in 3D`,
      scene: `molecule`,
      caption: `Ruota la rete: a sinistra gli ingressi (I, in blu), al centro lo strato nascosto (N, in viola), a destra le uscite (gatto G e cane C, in verde). Ogni bastoncino è un collegamento con il suo "peso".`,
      options: {
        atoms: [
          { x: -1.6, y: 0.9, z: 0, r: 0.25, color: `#3b82f6`, label: `I` },
          { x: -1.6, y: 0.3, z: 0, r: 0.25, color: `#3b82f6`, label: `I` },
          { x: -1.6, y: -0.3, z: 0, r: 0.25, color: `#3b82f6`, label: `I` },
          { x: -1.6, y: -0.9, z: 0, r: 0.25, color: `#3b82f6`, label: `I` },
          { x: 0, y: 0.75, z: 0.3, r: 0.28, color: `#a855f7`, label: `N` },
          { x: 0, y: 0, z: -0.3, r: 0.28, color: `#a855f7`, label: `N` },
          { x: 0, y: -0.75, z: 0.3, r: 0.28, color: `#a855f7`, label: `N` },
          { x: 1.6, y: 0.4, z: 0, r: 0.32, color: `#22c55e`, label: `G` },
          { x: 1.6, y: -0.4, z: 0, r: 0.32, color: `#22c55e`, label: `C` }
        ],
        bonds: [
          [0, 4], [0, 5], [0, 6], [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6],
          [4, 7], [4, 8], [5, 7], [5, 8], [6, 7], [6, 8]
        ]
      }
    },
    {
      type: `text`, title: `4. Dove trovi l'IA ogni giorno`,
      html: `<ul>
<li>📷 <b>Riconoscere immagini</b>: lo sblocco con il volto, le foto raggruppate per persona, l'auto che legge i cartelli stradali.</li>
<li>🗣️ <b>Capire la voce</b>: gli assistenti vocali, i sottotitoli automatici.</li>
<li>🌐 <b>Tradurre</b>: i traduttori automatici.</li>
<li>🎬 <b>Consigliare</b>: i video e le canzoni "che potrebbero piacerti".</li>
<li>💬 <b>Generare testi e immagini</b>: i chatbot e i programmi che creano disegni da una descrizione (IA <b>generativa</b>).</li>
<li>🏥 <b>Medicina</b>: aiutare i medici a trovare malattie nelle radiografie.</li>
<li>🌦️ <b>Scienza</b>: prevedere il meteo, scoprire la forma delle proteine.</li>
</ul>`
    },
    {
      type: `example`, title: `Esempio pratico: il filtro antispam`,
      html: `<p>La casella di posta separa da sola le email utili da quelle pubblicitarie o truffaldine (<b>spam</b>). Come?</p>
<ol>
<li>Milioni di utenti hanno premuto il pulsante "Segnala come spam": sono le <b>etichette</b>.</li>
<li>Il sistema ha imparato che certe cose compaiono spesso nello spam: "HAI VINTO!!!", link strani, mittenti sconosciuti.</li>
<li>Quando arriva una mail nuova, calcola la probabilità che sia spam. Se è alta, la sposta nella cartella spam.</li>
</ol>
<p>Ogni volta che segnali uno spam, aiuti l'IA a imparare!</p>`
    },
    {
      type: `example`, title: `Esempio pratico: perché il chatbot può sbagliare`,
      html: `<p>Un <b>chatbot</b> (come gli assistenti con cui si può "chiacchierare") è stato addestrato su un'enorme quantità di testi. Ha imparato a prevedere <b>quale parola viene dopo</b>, in modo così bravo da scrivere frasi che sembrano di una persona.</p>
<p>Però <b>non "sa"</b> le cose come le sai tu: a volte inventa risposte sbagliate scritte in modo molto convincente (si chiamano "<b>allucinazioni</b>").</p>
<p>Esempio: chiedi "Chi ha vinto la gara di corsa della mia scuola?". Il chatbot non lo può sapere, ma potrebbe inventare un nome! Per questo bisogna sempre <b>controllare</b> le informazioni su fonti affidabili: un libro, un insegnante, un sito serio.</p>`
    },
    {
      type: `decision`, title: `Tu che cosa faresti?`,
      html: `<p>Devi fare una ricerca sugli Egizi per scuola. Un chatbot in un attimo ti scrive un testo bellissimo, che dice anche che "le piramidi sono state costruite nel 1200 d.C.".</p>`,
      question: `Che cosa fai?`,
      options: [
        { label: `Copio il testo così com'è e lo consegno.`, outcome: `Il testo non è tuo e contiene un errore grave: le piramidi di Giza sono di circa 4500 anni fa (2600–2500 a.C.)! La maestra se ne accorge, e soprattutto tu non hai imparato nulla.` },
        { label: `Uso il chatbot per farmi spiegare le idee principali, controllo i dati sul libro e scrivo il testo con parole mie.`, outcome: `Ottimo! Usi l'IA come un aiutante, non come qualcuno che lavora al posto tuo. Controllando, scopri anche l'errore sulla data.` },
        { label: `Non uso mai nessuna IA perché è tutta sbagliata.`, outcome: `È prudente, ma l'IA può essere utile: spiega in modi diversi, aiuta a fare schemi, a esercitarsi. L'importante è usarla con un adulto, con i permessi giusti, e controllare sempre.` }
      ],
      answer: 1,
      explain: `L'IA è uno <b>strumento</b>: può aiutarti a capire e a organizzare le idee, ma può sbagliare e non sostituisce il tuo cervello. La regola d'oro: <b>usala, ma verifica sempre e scrivi con parole tue</b>. E ricorda che per molti servizi di IA serve il permesso dei genitori, soprattutto sotto i 14 anni.`
    },
    {
      type: `remember`, title: `Le regole per usare bene l'IA`,
      html: `<ul>
<li>✅ <b>Verifica</b>: l'IA può sbagliare o inventare. Controlla su fonti affidabili.</li>
<li>🔒 <b>Privacy</b>: non scrivere mai il tuo nome completo, indirizzo, scuola, password o foto personali.</li>
<li>🧠 <b>Pensa tu</b>: usala per capire meglio, non per copiare.</li>
<li>👨‍👩‍👧 <b>Chiedi a un adulto</b>: molti servizi richiedono il permesso dei genitori.</li>
<li>⚖️ <b>Rispetto</b>: non usarla per prendere in giro qualcuno o creare immagini false di persone vere.</li>
</ul>`
    },
    {
      type: `widget`, title: `Gioco: IA o non IA?`,
      widget: `classify`,
      caption: `Quali di queste cose usano l'apprendimento automatico, e quali seguono solo regole fisse?`,
      options: {
        groups: [`🤖 Usa l'IA (impara dai dati)`, `⚙️ Segue regole fisse`],
        items: [
          [`Sblocco del telefono con il volto`, 0], [`Traduttore automatico`, 0], [`Video consigliati`, 0], [`Assistente vocale`, 0], [`Filtro antispam`, 0],
          [`Calcolatrice`, 1], [`Semaforo a tempo`, 1], [`Sveglia`, 1], [`Termostato che accende a 20 °C`, 1]
        ]
      }
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la domanda "le macchine possono pensare?" ha più di 75 anni?`,
      html: `<p>Nel <b>1950</b> il matematico inglese <b>Alan Turing</b> propose un gioco: una persona chatta con due interlocutori nascosti, un umano e una macchina. Se non riesce a capire chi è la macchina, allora la macchina si comporta in modo "intelligente". È il famoso <b>test di Turing</b>. Il nome "intelligenza artificiale" nacque invece nel <b>1956</b>, a un convegno al Dartmouth College (USA) organizzato da <b>John McCarthy</b>.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… un computer ha battuto il campione del mondo di scacchi?`,
      html: `<p>Nel <b>1997</b> il computer <b>Deep Blue</b> dell'IBM batté il campione del mondo di scacchi <b>Garry Kasparov</b>. Nel <b>2016</b> il programma <b>AlphaGo</b> batté il campione <b>Lee Sedol</b> a <b>Go</b>, un gioco cinese con più posizioni possibili degli atomi dell'universo. AlphaGo aveva imparato studiando partite di esseri umani e poi giocando milioni di partite… contro se stesso!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… l'Europa ha fatto la prima legge sull'IA?`,
      html: `<p>Nel <b>2024</b> l'Unione Europea ha approvato l'<b>AI Act</b>, la prima grande legge al mondo sull'intelligenza artificiale. Divide le IA in base al <b>rischio</b>: alcune sono vietate (per esempio quelle che manipolano le persone), altre, come quelle usate in ospedale o a scuola, devono rispettare regole severe. Anche l'Italia, nel 2025, ha fatto la sua legge sull'IA.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `L'apprendimento automatico è un'idea difficile. Ecco qualche altra strada.`,
      tabs: [
        {
          label: `🐕 Come addestrare un cane`,
          html: `<p>Quando insegni a un cane a sedersi, non gli spieghi le regole: dici "seduto", e quando lo fa gli dai un premio 🦴. Se sbaglia, niente premio. Dopo tante prove il cane "ha capito".</p>
<p>Alcune IA imparano proprio così! Si chiama <b>apprendimento per rinforzo</b>: la macchina prova delle azioni, riceve dei "punti" quando fa bene, e piano piano impara la strategia migliore. È così che AlphaGo è diventato campione.</p>`
        },
        {
          label: `🍝 La ricetta e lo chef`,
          html: `<table>
<tr><th>Programma normale</th><th>Intelligenza artificiale</th></tr>
<tr><td>Come seguire una <b>ricetta</b> parola per parola: 200 g di pasta, 10 minuti, sale.</td><td>Come un cuoco che ha assaggiato <b>mille piatti</b> e ha capito da solo che cosa li rende buoni.</td></tr>
<tr><td>Regole ➜ risposte</td><td>Esempi + risposte ➜ regole</td></tr>
<tr><td>Fa solo quello che c'è scritto.</td><td>Può affrontare casi nuovi, ma può anche sbagliare.</td></tr>
</table>`
        },
        {
          label: `📈 Indovina la regola`,
          html: `<p>Guarda questi esempi: 1 ➜ 3 · 2 ➜ 5 · 3 ➜ 7 · 4 ➜ 9. Quale sarà il risultato di 10?</p>
<p>Hai scoperto la regola "<b>il doppio più uno</b>" e hai risposto <b>21</b>, anche se nessuno te l'ha detto. È esattamente quello che fa una macchina che impara: trova la regola nascosta dagli esempi! Sulla retta qui sotto sono segnati i risultati: vedi lo schema?</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 22, step: 1, marks: [3, 5, 7, 9, 21] }
        },
        {
          label: `🔗 Parole dell'IA`,
          html: `<p>Abbina ogni parola al suo significato.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Dati di addestramento`, `Gli esempi da cui la macchina impara`],
              [`Etichetta`, `La risposta giusta scritta su un esempio`],
              [`Modello`, `Il risultato dell'addestramento`],
              [`Rete neurale`, `Strati di neuroni artificiali collegati`],
              [`Allucinazione`, `Risposta inventata ma convincente`],
              [`Chatbot`, `Programma con cui si conversa`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: le radici dell'intelligenza artificiale`,
      nodes: [
        { id: `ia`, label: `Intelligenza artificiale`, x: 50, y: 8, color: `#7c3aed`, html: `Sistemi che svolgono compiti che di solito richiedono intelligenza umana.`, why: `Il nome fu scelto da <b>John McCarthy</b> per il convegno di Dartmouth del 1956. Gli scienziati di allora pensavano di risolvere il problema in pochi anni… ci sono voluti decenni!` },
        { id: `turing`, label: `Alan Turing`, x: 15, y: 25, color: `#64748b`, html: `Il "padre" dell'informatica e dell'IA.`, why: `Nel 1936 descrisse la "macchina di Turing", il modello di ogni computer. Nel 1950 si chiese se le macchine possono pensare e propose il suo test. Durante la guerra aiutò a decifrare i codici segreti nazisti.` },
        { id: `dati`, label: `Dati`, x: 85, y: 25, color: `#0ea5e9`, html: `Gli esempi da cui la macchina impara.`, why: `Le IA moderne funzionano perché oggi, grazie a Internet, esistono quantità enormi di testi, foto e suoni. Un grande progetto, <b>ImageNet</b> (2009), raccolse più di 14 milioni di immagini etichettate a mano.` },
        { id: `ml`, label: `Apprendimento automatico`, x: 50, y: 35, color: `#a855f7`, html: `Imparare dagli esempi invece che da regole scritte.`, why: `Il termine <i>machine learning</i> fu usato nel 1959 da <b>Arthur Samuel</b>, che creò un programma di dama capace di migliorare giocando contro se stesso.` },
        { id: `neuro`, label: `Neuroni del cervello`, x: 15, y: 60, color: `#ec4899`, html: `L'ispirazione biologica.`, why: `Nel 1943 McCulloch e Pitts descrissero un "neurone matematico". Il nostro cervello ha circa 86 miliardi di neuroni collegati tra loro: le reti artificiali ne imitano l'idea, non il funzionamento esatto.` },
        { id: `rete`, label: `Reti neurali`, x: 40, y: 62, color: `#8b5cf6`, html: `Strati di neuroni artificiali con pesi da regolare.`, why: `Il primo, il <b>Perceptron</b>, fu costruito da Frank Rosenblatt nel 1958. Le reti profonde sono diventate potenti solo dopo il 2012, grazie a più dati e a chip velocissimi (le GPU, nate per i videogiochi!).` },
        { id: `usi`, label: `Usi quotidiani`, x: 70, y: 62, color: `#22c55e`, html: `Traduttori, assistenti vocali, foto, medicina.`, why: `Funzionano bene dove ci sono tanti esempi e regole difficili da scrivere a mano: immagini, voce, lingue.` },
        { id: `etica`, label: `Uso responsabile`, x: 55, y: 88, color: `#ef4444`, html: `Verificare, proteggere la privacy, evitare ingiustizie.`, why: `Se i dati di addestramento sono incompleti o pieni di pregiudizi, anche l'IA lo sarà (si chiama <b>bias</b>). Per questo servono regole, come l'AI Act europeo del 2024, e persone che controllano.` }
      ],
      edges: [
        [`turing`, `ia`, `pone la domanda`], [`ia`, `ml`, `oggi soprattutto`], [`dati`, `ml`, `nutrono`], [`neuro`, `rete`, `ispirano`],
        [`ml`, `rete`, `usa`], [`rete`, `usi`, `permettono`], [`usi`, `etica`, `richiedono`], [`dati`, `etica`, `possono avere bias`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: IA nella vita di tutti i giorni`,
      questions: [
        { type: `mc`, q: `Che cos'è un'"allucinazione" di un chatbot?`, options: [`Un sogno del computer`, `Una risposta inventata ma scritta in modo convincente`, `Un virus`], answer: 1, explain: `Il chatbot può inventare fatti: bisogna sempre verificare.` },
        { type: `tf`, q: `È una buona idea scrivere il proprio indirizzo di casa in un chatbot.`, answer: false, explain: `Mai condividere dati personali online.` },
        { type: `mc`, q: `Quale di queste cose NON usa l'IA?`, options: [`Il traduttore automatico`, `Una calcolatrice`, `Lo sblocco con il volto`], answer: 1, explain: `La calcolatrice segue regole fisse, non impara.` }
      ]
    }
  ],
  glossary: [
    { t: `Intelligenza artificiale (IA)`, d: `Sistemi informatici capaci di svolgere compiti come riconoscere, tradurre, prevedere, imparando dai dati.` },
    { t: `Apprendimento automatico`, d: `Machine learning: la macchina impara da esempi invece che da regole scritte.` },
    { t: `Dati di addestramento`, d: `Gli esempi usati per insegnare a un'IA.` },
    { t: `Etichetta`, d: `La risposta giusta associata a un esempio (es. "gatto").` },
    { t: `Modello`, d: `Il risultato dell'addestramento, che dà risposte su dati nuovi.` },
    { t: `Rete neurale`, d: `Insieme di neuroni artificiali disposti a strati e collegati da pesi.` },
    { t: `Chatbot`, d: `Programma con cui si può conversare scrivendo o parlando.` },
    { t: `Allucinazione`, d: `Risposta falsa inventata da un'IA ma presentata come vera.` },
    { t: `Bias`, d: `Pregiudizio: errore sistematico dovuto a dati incompleti o sbilanciati.` },
    { t: `Algoritmo`, d: `Sequenza di istruzioni precise per risolvere un problema.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Qual è la differenza principale tra un programma normale e un'IA che impara?`, options: [`L'IA è più colorata`, `Il programma normale segue regole scritte; l'IA trova le regole dagli esempi`, `Non c'è differenza`], answer: 1, explain: `L'IA impara dagli esempi (dati di addestramento).` },
      { type: `text`, q: `Come si chiama in inglese l'apprendimento automatico?`, answer: [`machine learning`], explain: `Machine learning.` },
      { type: `order`, q: `Metti in ordine i passi dell'addestramento.`, items: [`Raccolgo tante foto`, `Scrivo l'etichetta su ogni foto`, `La macchina prova, sbaglia e si corregge`, `Provo il modello con foto nuove`], explain: `Dati ➜ etichette ➜ addestramento ➜ verifica.` },
      { type: `mc`, q: `Chi propose nel 1950 un test per capire se una macchina "pensa"?`, options: [`Alan Turing`, `Leonardo da Vinci`, `Albert Einstein`], answer: 0, explain: `Il test di Turing.` },
      { type: `num`, q: `In che anno è nato il nome "intelligenza artificiale"?`, answer: 1956, tol: 0, explain: `Al convegno di Dartmouth, nel 1956.` },
      { type: `tf`, q: `Se un'IA impara solo da foto di gatti neri, potrebbe non riconoscere un gatto bianco.`, answer: true, explain: `L'IA impara solo da ciò che vede: servono dati vari (altrimenti c'è bias).` },
      { type: `mc`, q: `Le reti neurali artificiali sono ispirate…`, options: [`ai neuroni del cervello`, `alle ragnatele`, `alle reti da pesca`], answer: 0, explain: `Sono ispirate, molto alla lontana, ai neuroni.` },
      { type: `mc`, q: `Un chatbot ti dà una data storica. Che cosa fai?`, options: [`Ci credo subito`, `La controllo su un libro o un sito affidabile`, `La cambio a caso`], answer: 1, explain: `Le IA possono sbagliare: verifica sempre.` },
      { type: `mc`, q: `Quale dato NON va mai scritto in un chatbot?`, options: [`Una domanda sui dinosauri`, `La tua password`, `Una parola da tradurre`], answer: 1, explain: `Password e dati personali vanno sempre protetti.` },
      { type: `tf`, q: `Nel 1997 il computer Deep Blue batté il campione del mondo di scacchi.`, answer: true, explain: `Batté Garry Kasparov.` },
      { type: `text`, q: `Come si chiama la legge europea sull'IA del 2024? (in inglese)`, answer: [`ai act`, `l'ai act`, `artificial intelligence act`], explain: `L'AI Act, la prima grande legge al mondo sull'IA.` },
      { type: `mc`, q: `Che cosa vuol dire "addestrare" una rete neurale?`, options: [`Accenderla`, `Aggiustare i pesi dei collegamenti finché le risposte sono giuste`, `Collegarla a Internet`], answer: 1, explain: `L'addestramento regola i pesi poco alla volta.` }
    ]
  }
});
