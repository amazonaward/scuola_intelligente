TOPIC('it', {
  id: "l3-fil-sofisti-socrate",
  title: "I sofisti e Socrate",
  intro: "Atene, seconda metà del V secolo a.C.: la città è una <b>democrazia</b>, e chi sa parlare bene in assemblea e in tribunale ha il potere. Arrivano maestri itineranti che, a pagamento, insegnano l'arte di persuadere: i <b>sofisti</b>. Accanto a loro un uomo che gira per l'agorà senza chiedere compenso e fa domande scomode: <b>Socrate</b>. Con loro la filosofia si sposta dalla natura all'<b>uomo</b>: che cos'è la virtù? La verità è la stessa per tutti? Perché Atene condannò a morte il «più giusto degli uomini»?",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Il contesto: Atene e la democrazia",
      html: `<p>Dopo le guerre persiane Atene, guidata da Pericle, diventa il centro politico e culturale della Grecia. Nella democrazia ateniese i cittadini maschi adulti decidono nell'<b>assemblea</b> (<i>ekklesía</i>) e si difendono da soli nei tribunali: la <b>parola</b> è potere. I presocratici avevano studiato la natura (<i>physis</i>); ora il centro dell'interesse diventa la vita della polis: la politica, le leggi, l'educazione, la giustizia.</p>
<p>Servono persone formate: giovani ricchi cercano maestri che insegnino a discutere e a governare. Arrivano da tutta la Grecia i <b>sofisti</b> (da <i>sophistés</i>, «esperto, sapiente»). Erano veri e propri professionisti dell'educazione: viaggiavano, tenevano lezioni e conferenze, e <b>si facevano pagare</b>, cosa che scandalizzava molti. Il termine «sofista» assunse poi un senso negativo (chi ragiona in modo capzioso), soprattutto per le critiche di Platone e Aristotele: ma i sofisti furono anche innovatori importanti.</p>`
    },
    {
      type: "text",
      title: "2. Che cosa pensavano i sofisti",
      html: `<p>I sofisti non formano una scuola unitaria, ma hanno alcuni tratti comuni:</p>
<ul>
<li><b>Attenzione all'uomo e alla società</b>: educazione (<i>paideía</i>), politica, linguaggio.</li>
<li><b>Retorica</b>: l'arte di persuadere con il discorso; insegnano a sostenere tesi opposte sullo stesso tema (<i>dissoi logoi</i>, «discorsi doppi»).</li>
<li><b>Relativismo</b>: la verità e i valori dipendono dal punto di vista e dal contesto.</li>
<li><b>Distinzione tra natura e convenzione</b>: <i>physis</i> (ciò che vale per natura) e <i>nomos</i> (la legge e il costume stabiliti dagli uomini).</li>
</ul>
<p><b>Protagora di Abdera</b> (V secolo a.C.) è l'autore della frase più famosa: «<b>l'uomo è misura di tutte le cose</b>, di quelle che sono in quanto sono, di quelle che non sono in quanto non sono». Si interpreta di solito come relativismo: le cose sono per ciascuno come gli appaiono (il vento può essere freddo per te e caldo per me). Una conseguenza: nessuna tesi è vera in assoluto, ma alcune sono <i>migliori</i> (più utili) di altre: il maestro serve a far passare dalle tesi peggiori alle migliori.</p>
<p><b>Gorgia di Lentini</b> (Sicilia), grande maestro di retorica, sostenne in un'opera sul «non essere» tre tesi provocatorie: <b>nulla esiste</b>; se anche esistesse qualcosa, <b>non sarebbe conoscibile</b>; se anche fosse conoscibile, <b>non sarebbe comunicabile</b>. Per lui la parola ha un grande potere persuasivo sulle emozioni, come una medicina o un incantesimo.</p>
<p>Alcuni sofisti trassero conseguenze radicali. Nella <i>Repubblica</i> di Platone il personaggio <b>Trasimaco</b> sostiene che «la giustizia è l'utile del più forte»: le leggi le fa chi comanda e le chiama giuste.</p>`
    },
    {
      type: "svg",
      title: "Physis e nomos",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<rect x="30" y="30" width="240" height="180" rx="12" fill="#dcfce7" stroke="#166534" stroke-width="3"/>
<text x="150" y="65" font-size="20" font-weight="bold" text-anchor="middle" fill="#14532d">PHYSIS</text>
<text x="150" y="100" font-size="15" text-anchor="middle" fill="#0f172a">natura</text>
<text x="150" y="125" font-size="15" text-anchor="middle" fill="#0f172a">uguale per tutti</text>
<text x="150" y="150" font-size="15" text-anchor="middle" fill="#0f172a">(bisogni, istinti)</text>
<rect x="330" y="30" width="240" height="180" rx="12" fill="#dbeafe" stroke="#1e40af" stroke-width="3"/>
<text x="450" y="65" font-size="20" font-weight="bold" text-anchor="middle" fill="#1e3a8a">NOMOS</text>
<text x="450" y="100" font-size="15" text-anchor="middle" fill="#0f172a">legge, convenzione</text>
<text x="450" y="125" font-size="15" text-anchor="middle" fill="#0f172a">cambia da città a città</text>
<text x="450" y="150" font-size="15" text-anchor="middle" fill="#0f172a">(costumi, leggi)</text>
<text x="300" y="120" font-size="28" text-anchor="middle" fill="#92400e">⇄</text>
<text x="300" y="255" font-size="16" text-anchor="middle" fill="#334155">I sofisti si chiedono: i valori morali sono naturali o convenzionali?</text>
</svg>`,
      caption: "Il dibattito su natura e convenzione apre la riflessione su giustizia e legge."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i sofisti",
      questions: [
        { type: "mc", q: "Che cosa insegnavano i sofisti?", options: ["Soprattutto l'arte della retorica e della persuasione", "L'astronomia", "Il culto degli dèi"], answer: 0, explain: "Preparavano i giovani alla vita politica e giudiziaria." },
        { type: "tf", q: "Per Protagora l'uomo è misura di tutte le cose.", answer: true, explain: "È la formula del relativismo." },
        { type: "text", q: "Come si chiamano in greco la legge e il costume stabiliti dagli uomini?", answer: ["nomos"], explain: "Il nomos, in opposizione alla physis." }
      ]
    },
    {
      type: "example",
      title: "Relativismo oggi: due modi di salutare",
      html: `<p>In Italia si salutano gli amici con due baci sulle guance, in Giappone con un inchino, in Russia a volte con un abbraccio. Nessuno dei gesti è «giusto per natura»: sono <i>nomos</i>, convenzioni. Ma è tutto convenzione? Se una società decidesse che rubare è lecito, sarebbe giusto? Qui si apre il dibattito tra i sofisti (le regole sono convenzioni) e Socrate (c'è qualcosa di universale da scoprire con la ragione).</p>`
    },
    {
      type: "text",
      title: "3. Socrate: chi era",
      html: `<p><b>Socrate</b> (Atene, 470/469-399 a.C.) era figlio di uno scalpellino e di una levatrice. Non scrisse nulla: conosciamo il suo pensiero da testimoni diversi, che danno ritratti non identici (il cosiddetto <b>problema socratico</b>): <b>Platone</b> (suo discepolo, che lo rende protagonista dei dialoghi), <b>Senofonte</b> (storico e soldato, più sobrio), il commediografo <b>Aristofane</b> (che lo caricaturò nelle <i>Nuvole</i>) e <b>Aristotele</b> (che ne riferisce il metodo). Combatté come soldato (oplita) nella guerra del Peloponneso e visse in povertà, discutendo in piazza con chiunque.</p>
<p>Una tradizione, riferita da Platone nell'<i>Apologia</i>, racconta che l'amico <b>Cherefonte</b> chiese all'oracolo di Delfi se esistesse uomo più sapiente di Socrate, e la Pizia rispose di no. Socrate, che si riteneva ignorante, si mise a interrogare politici, poeti e artigiani per smentire l'oracolo: scoprì che tutti credevano di sapere ciò che non sapevano. Concluse di essere il più sapiente solo perché <b>consapevole di non sapere</b> (la formula «so di non sapere» riassume questa idea).</p>
<p>Il motto di Delfi «<b>conosci te stesso</b>» diventa il suo programma: la filosofia è esame di sé e degli altri. Nell'<i>Apologia</i> afferma che «una vita senza ricerca non è degna di essere vissuta».</p>`
    },
    {
      type: "text",
      title: "4. Il metodo: ironia e maieutica",
      html: `<p>Socrate non tiene lezioni: <b>dialoga</b>. Chiede, per esempio: «Che cos'è il coraggio?». L'interlocutore dà un esempio («restare al proprio posto in battaglia»); Socrate mostra che l'esempio non basta (e i soldati che fuggono con astuzia?) e chiede una <b>definizione</b> valida per tutti i casi. Il suo metodo ha due momenti:</p>
<ul>
<li><b>Ironia</b> (<i>eironeía</i>, «finta ignoranza»): Socrate si dichiara ignorante e chiede di essere istruito, ma in realtà le domande smascherano le contraddizioni dell'interlocutore e lo portano a riconoscere la propria ignoranza (<b>confutazione</b>, <i>élenchos</i>).</li>
<li><b>Maieutica</b> (<i>maieutiké</i>, «arte della levatrice»): come sua madre aiutava a partorire i bambini, Socrate aiuta gli altri a «partorire» la verità che hanno dentro. Non trasmette una dottrina, ma guida a trovarla con il proprio ragionamento. Il paragone è nel <i>Teeteto</i> di Platone.</li>
</ul>
<p>Obiettivo: arrivare a <b>concetti universali</b> (definizioni), cercando l'essenza di giustizia, bellezza, virtù. Aristotele riconoscerà a Socrate due meriti: i <i>discorsi induttivi</i> (partire dai casi particolari) e la <i>definizione universale</i>.</p>`
    },
    {
      type: "example",
      title: "Un dialogo socratico moderno",
      html: `<p><b>Anna</b>: «Un bravo studente è uno che prende buoni voti.»<br>
<b>Socrate</b>: «Se uno copia da un compagno e prende dieci, è un bravo studente?»<br>
<b>Anna</b>: «No, direi di no... Deve aver capito.»<br>
<b>Socrate</b>: «E se capisce ma non studia mai e prende cinque?»<br>
<b>Anna</b>: «Allora serve anche l'impegno...»</p>
<p>Passo dopo passo Anna scopre che la sua definizione non reggeva e ne costruisce una migliore. È lo stesso schema che Socrate usa su coraggio, giustizia, amicizia: partire da un esempio, trovare un controesempio, rifinire la definizione.</p>`
    },
    {
      type: "text",
      title: "5. L'etica socratica: la virtù è conoscenza",
      html: `<p>Per Socrate il bene dell'uomo è la cura dell'<b>anima</b> (<i>psyché</i>, intesa come coscienza morale e razionale): il vero bene non è ricchezza o potere ma la virtù. La sua tesi centrale, detta <b>intellettualismo etico</b>:</p>
<ul>
<li><b>la virtù è conoscenza</b> (del bene): chi sa davvero che cosa è bene, lo fa;</li>
<li><b>nessuno fa il male volontariamente</b>: chi fa il male lo fa per ignoranza, credendo (sbagliando) che sia un bene per sé;</li>
<li><b>è meglio subire un'ingiustizia che commetterla</b>, perché l'ingiustizia danneggia l'anima di chi la compie;</li>
<li>virtù e felicità (<i>eudaimonía</i>) coincidono: chi è giusto è anche felice.</li>
</ul>
<p>Contro i sofisti, Socrate sostiene che esistano <b>valori e verità universali</b>, raggiungibili con la ragione: per questo cerca definizioni valide per tutti. Contro il relativismo, il dialogo ha senso solo se c'è una verità da cercare insieme.</p>`
    },
    {
      type: "decision",
      title: "Atene, 399 a.C.: fuggire o restare?",
      html: `<p>Sei Socrate, condannato a morte da un tribunale di cittadini ateniesi con le accuse di <b>non riconoscere gli dèi della città</b> e di <b>corrompere i giovani</b>. Il tuo amico Critone ha corrotto le guardie e ha una nave pronta: puoi fuggire a Tebe o in Tessaglia, dove sei benvoluto. Hai 70 anni.</p>`,
      question: "Che cosa decidi?",
      options: [
        { label: "Fuggo: la condanna è ingiusta e ho il diritto di salvarmi.", outcome: "Sopravviveresti, ma tradiresti ciò che hai insegnato: se fuggi, non rispetti le leggi sotto cui sei vissuto." },
        { label: "Resto e accetto la pena: le leggi vanno rispettate anche quando i giudici sbagliano.", outcome: "Coerente con il tuo pensiero: è meglio subire un'ingiustizia che commetterla. Ma muori." },
        { label: "Fuggo, ma poi chiedo scusa e riprendo a insegnare nascosto.", outcome: "Sarebbe una mezza soluzione: ma avresti dimostrato che le tue idee valgono solo finché è comodo." }
      ],
      answer: 1,
      explain: "Nel <i>Critone</i> di Platone, Socrate rifiuta la fuga: ha vissuto sotto le leggi di Atene e non può violarle quando gli sono sfavorevoli, anche se la sentenza è ingiusta. Bevve la cicuta nel 399 a.C., come racconta il <i>Fedone</i>. Con la sua morte Socrate diventa il modello del filosofo che resta fedele alla verità fino in fondo."
    },
    {
      type: "conceptMap",
      title: "Mappa: sofisti contro Socrate",
      nodes: [
        { id: "atene", label: "Atene democratica", x: 50, y: 6, color: "#0ea5e9", html: "Il potere si conquista con la parola.", why: "In una democrazia diretta, convincere l'assemblea è decisivo: nasce la domanda sull'educazione politica." },
        { id: "sofisti", label: "Sofisti", x: 20, y: 34, color: "#f59e0b", html: "Maestri di retorica, relativisti.", why: "Se le leggi e i valori sono convenzioni (nomos), non esiste una verità assoluta: conta l'efficacia del discorso." },
        { id: "socrate", label: "Socrate", x: 80, y: 34, color: "#7c3aed", html: "Dialogo, ironia, maieutica.", why: "Pensa che senza una verità comune il dialogo non avrebbe senso: cerca definizioni universali." },
        { id: "relativismo", label: "Relativismo", x: 15, y: 64, color: "#ef4444", html: "Protagora: l'uomo è misura.", why: "Nasce dal confronto tra costumi diversi: se ogni città ha leggi diverse, nessuna sembra più vera." },
        { id: "universali", label: "Concetti universali", x: 50, y: 64, color: "#16a34a", html: "Definizioni valide per tutti.", why: "Socrate vuole l'essenza, non solo gli esempi: base della logica e della scienza di Aristotele." },
        { id: "etica", label: "Intellettualismo etico", x: 85, y: 64, color: "#14b8a6", html: "Virtù = conoscenza.", why: "Se il male nasce dall'ignoranza, educare l'anima è l'unica vera politica: rende possibile una società giusta." }
      ],
      edges: [
        ["atene", "sofisti", "domanda"],
        ["atene", "socrate", "provoca"],
        ["sofisti", "relativismo", "teoria"],
        ["socrate", "universali", "cerca"],
        ["socrate", "etica", "sostiene"]
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire Socrate",
      intro: "Se la maieutica ti sembra astratta, prova una di queste vie.",
      tabs: [
        {
          label: "🛠️ Analogia: la levatrice",
          html: `<p>Una levatrice non mette il bambino nella madre: lo aiuta a nascere. Socrate non mette idee nella testa degli altri: con le domande li aiuta a far emergere ciò che sanno già, senza rendersene conto. Per questo, come la levatrice, è sterile: non produce lui le idee.</p>`
        },
        {
          label: "⚔️ Sofisti vs Socrate",
          html: `<table>
<tr><th></th><th>Sofisti</th><th>Socrate</th></tr>
<tr><td>Obiettivo</td><td>persuadere, avere successo</td><td>cercare la verità</td></tr>
<tr><td>Compenso</td><td>sì</td><td>no</td></tr>
<tr><td>Metodo</td><td>discorsi lunghi, retorica</td><td>domande brevi, dialogo</td></tr>
<tr><td>Verità</td><td>relativa</td><td>universale</td></tr>
<tr><td>Virtù</td><td>insegnabile come tecnica</td><td>conoscenza del bene</td></tr>
</table>`
        },
        {
          label: "🃏 Flashcard",
          html: `<p>Ripassa i termini chiave.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "Ironia socratica", back: "Finta ignoranza per smascherare le contraddizioni" },
            { front: "Maieutica", back: "Arte di far nascere la verità con le domande" },
            { front: "Physis", back: "Natura, ciò che vale per tutti" },
            { front: "Nomos", back: "Legge o convenzione umana" },
            { front: "Dissoi logoi", back: "Discorsi doppi: due tesi opposte sullo stesso tema" }
          ] }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che...?",
      html: `<p>Socrate fu preso in giro da Aristofane nelle <i>Nuvole</i> (423 a.C.), dove appare appeso a un cesto a studiare il cielo e insegna ad argomentare per vincere ingiustamente. Platone nell'<i>Apologia</i> dice che quella caricatura contribuì a creargli la fama di sofista, che poi gli costò cara al processo, anche se Socrate non si faceva pagare e non insegnava per mestiere.</p>`
    },
    {
      type: "curiosity",
      title: "Il demone di Socrate",
      html: `<p>Socrate raccontava di sentire fin da bambino una voce interiore, il suo <b>daimonion</b>, che non gli diceva mai che cosa fare, ma lo <i>dissuadeva</i> da certe azioni. Per i giudici questo era una prova di «nuove divinità», e l'accusa di empietà ne trasse spunto.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>I <b>sofisti</b> (Protagora, Gorgia) sono maestri di retorica a pagamento: relativismo, <i>physis</i> / <i>nomos</i>.</li>
<li>Protagora: «l'uomo è misura di tutte le cose». Gorgia: nulla è, non è conoscibile, non è comunicabile.</li>
<li><b>Socrate</b> non scrisse nulla: ironia e <b>maieutica</b>, ricerca di definizioni universali.</li>
<li>Etica: la virtù è conoscenza, nessuno fa il male volontariamente.</li>
<li>Condannato nel <b>399 a.C.</b> per empietà e corruzione dei giovani; muore bevendo la cicuta.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Socrate",
      questions: [
        { type: "mc", q: "Che cos'è la maieutica?", options: ["L'arte di aiutare gli altri a trovare la verità con le domande", "Un'arte di persuasione retorica", "Una scienza naturale"], answer: 0, explain: "Il paragone è con la levatrice." },
        { type: "tf", q: "Socrate scrisse molti libri che ci sono pervenuti.", answer: false, explain: "Non scrisse nulla: lo conosciamo da Platone, Senofonte e altri." },
        { type: "order", q: "Metti in ordine il metodo di Socrate.", items: ["Domanda su un concetto", "Risposta con un esempio", "Confutazione con un controesempio", "Definizione più precisa"], explain: "Il dialogo procede per tentativi." }
      ]
    }
  ],
  glossary: [
    { t: "Sofista", d: "Maestro itinerante di retorica e di sapere pratico, a pagamento, nell'Atene del V secolo a.C." },
    { t: "Retorica", d: "Arte di persuadere con il discorso." },
    { t: "Relativismo", d: "Dottrina secondo cui la verità e i valori dipendono dal soggetto o dal contesto." },
    { t: "Physis / nomos", d: "Natura e legge (convenzione)." },
    { t: "Ironia", d: "In Socrate, la finta ignoranza usata per smascherare le false certezze." },
    { t: "Maieutica", d: "L'arte della levatrice: far nascere la verità nell'interlocutore." },
    { t: "Intellettualismo etico", d: "Tesi per cui la virtù è conoscenza e il male nasce da ignoranza." },
    { t: "Eudaimonia", d: "Felicità, vita ben riuscita." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché i sofisti ebbero successo ad Atene?", options: ["Nella democrazia la capacità di parlare dava potere", "Perché erano ateniesi di nascita", "Perché insegnavano gratis"], answer: 0, explain: "Servivano maestri che formassero ai dibattiti in assemblea e ai tribunali." },
      { type: "mc", q: "Che cosa significa la tesi di Protagora «l'uomo è misura di tutte le cose»?", options: ["Le cose sono per ciascuno come gli appaiono (relativismo)", "L'uomo è un dio", "La natura è inconoscibile"], answer: 0, explain: "Non c'è una verità assoluta indipendente dal soggetto." },
      { type: "tf", q: "Gorgia sosteneva che l'essere fosse conoscibile e comunicabile con certezza.", answer: false, explain: "Sostenne tre tesi opposte: nulla è, non è conoscibile, non è comunicabile." },
      { type: "text", q: "Come si chiama l'arte di Socrate di far «partorire» la verità all'interlocutore?", answer: ["maieutica", "la maieutica"], explain: "La maieutica, dal paragone con la madre levatrice." },
      { type: "mc", q: "Qual è la tesi principale dell'intellettualismo etico?", options: ["La virtù è conoscenza e nessuno fa il male volontariamente", "La virtù è ricchezza", "La virtù è obbedienza"], answer: 0, explain: "Il male nasce dall'ignoranza del bene." },
      { type: "mc", q: "Quali accuse portarono Socrate al processo del 399 a.C.?", options: ["Empietà e corruzione dei giovani", "Tradimento in guerra", "Furto e frode"], answer: 0, explain: "Non riconoscere gli dèi della città e corrompere i giovani." },
      { type: "tf", q: "Nel Critone Socrate rifiuta di fuggire dal carcere per rispetto delle leggi.", answer: true, explain: "Riteneva peggio commettere ingiustizia che subirla." },
      { type: "mc", q: "Perché Socrate cerca definizioni universali?", options: ["Per trovare l'essenza di un concetto valida in ogni caso", "Per vincere le discussioni", "Per insegnare la retorica"], answer: 0, explain: "Contro il relativismo cerca ciò che è comune a tutti i casi." },
      { type: "order", q: "Metti in ordine gli eventi.", items: ["Guerre persiane", "Età di Pericle", "Nuvole di Aristofane (423 a.C.)", "Processo a Socrate (399 a.C.)"], explain: "Dal 490-479 a.C. al 399 a.C." }
    ]
  }
});
