TOPIC('it', {
  id: "l1-ita-riassunto-espositivo",
  title: "Riassunto, parafrasi e testo espositivo",
  intro: "Studiare significa quasi sempre <b>capire un testo e restituirlo</b> con altre parole: riassumendolo, parafrasandolo, spiegandolo a chi non lo ha letto. Sono tre abilità diverse, che al liceo si usano ogni giorno, dalla storia alla fisica. In questa lezione impariamo a <b>leggere in profondità</b>, a <b>distinguere</b> riassunto, parafrasi e commento e a <b>scrivere un testo espositivo</b> chiaro e ordinato.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Capire prima di scrivere",
      html: `<p>Non si può riassumere ciò che non si è capito. La lettura per lo studio non è una lettura «a occhi chiusi»: si fa in <b>tre passaggi</b>.</p>
<ol>
<li><b>Lettura esplorativa</b>: leggi titolo, sottotitoli, prima e ultima frase di ogni paragrafo, eventuali immagini. Chiediti: di cosa parla? Come è organizzato?</li>
<li><b>Lettura attenta</b>: leggi tutto con la matita in mano. Cerca le <b>parole chiave</b>, sottolinea poco (al massimo una frase su tre), scrivi a margine un titoletto per ogni paragrafo, cerca sul vocabolario ogni parola sconosciuta.</li>
<li><b>Rilettura di controllo</b>: verifica di aver capito il filo del discorso. Se non riesci a spiegarlo a voce, il passaggio è da ripetere.</li>
</ol>
<p>In ogni paragrafo di un testo ben scritto c'è di solito un'<b>idea principale</b> (spesso nella prima o nell'ultima frase) e le <b>idee secondarie</b> (esempi, dati, dettagli) che la sostengono. Imparare a distinguerle è la chiave di tutto.</p>`
    },
    {
      type: "text",
      title: "Riassunto, parafrasi, commento: tre cose diverse",
      html: `<table>
<tr><th></th><th>Riassunto</th><th>Parafrasi</th><th>Commento</th></tr>
<tr><td>Obiettivo</td><td>ridurre il testo all'essenziale</td><td>riscrivere in forma più chiara, senza accorciare</td><td>interpretare e valutare</td></tr>
<tr><td>Lunghezza</td><td>più breve (circa 1/3 o 1/4)</td><td>simile all'originale (o più lunga)</td><td>libera</td></tr>
<tr><td>Parole</td><td>sintesi con parole proprie</td><td>sostituisce parole e sintassi difficili</td><td>aggiunge opinioni e collegamenti</td></tr>
<tr><td>Si usa per</td><td>studiare, ripassare</td><td>testi poetici e antichi</td><td>analisi del testo, saggio</td></tr>
<tr><td>Opinioni personali</td><td>no</td><td>no</td><td>sì</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Quale operazione è?",
      widget: "classify",
      options: { groups: ["Riassunto", "Parafrasi", "Commento"], items: [
        ["Riscrivo in prosa semplice una poesia di Leopardi, verso per verso", 1],
        ["Riduco a 10 righe un capitolo di 3 pagine", 0],
        ["Spiego perché secondo me questo racconto è ancora attuale", 2],
        ["Tolgo gli esempi e tengo solo i concetti principali", 0],
        ["Sostituisco 'ermo colle' con 'colle solitario'", 1],
        ["Collego il testo ad altri autori e ne valuto lo stile", 2]
      ] },
      caption: "Associa ogni azione al tipo di scrittura."
    },
    {
      type: "text",
      title: "Come si scrive un buon riassunto",
      html: `<ol>
<li><b>Dividi il testo in sequenze</b> (parti di contenuto omogeneo) e dai a ciascuna un titoletto.</li>
<li><b>Per ogni sequenza individua l'idea principale</b>; lascia cadere esempi, ripetizioni, dettagli, aggettivi inutili, dialoghi riportati.</li>
<li><b>Scrivi con parole tue</b>, senza copiare intere frasi.</li>
<li>Usa la <b>terza persona</b> e lo stesso tempo del testo, di norma il presente per i testi informativi (anche quando si riassume un testo storico, per un riassunto breve si può usare il presente storico).</li>
<li><b>Niente opinioni, niente commenti, niente citazioni dirette</b>: il riassunto è fedele all'originale.</li>
<li><b>Collega le frasi con i connettivi</b> (infatti, perciò, tuttavia): un riassunto non è un elenco di frasi staccate.</li>
<li><b>Controlla la lunghezza</b> (di solito un terzo del testo originale, a meno che il compito indichi altro) e rileggi: chi non conosce il testo deve capirlo.</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio: dal testo al riassunto",
      html: `<p><b>Testo originale (circa 100 parole):</b><br>
<i>«La fotosintesi clorofilliana è il processo con cui le piante producono il proprio nutrimento. Nelle foglie, grazie alla clorofilla, un pigmento verde, la luce del Sole viene assorbita e usata per trasformare l'acqua, prelevata dalle radici, e l'anidride carbonica dell'aria in glucosio, uno zucchero che serve da fonte di energia. Come sottoprodotto si libera ossigeno, che passa nell'atmosfera. Oltre a nutrire la pianta, il processo ha un'importanza enorme per tutto il pianeta: l'ossigeno che respiriamo viene in gran parte dalla fotosintesi e il glucosio è alla base delle catene alimentari.»</i></p>
<p><b>Riassunto (circa 30 parole):</b><br>
<i>La fotosintesi permette alle piante di produrre glucosio da acqua e anidride carbonica, usando la luce solare e la clorofilla. Libera ossigeno ed è alla base della vita e delle catene alimentari.</i></p>
<p>Che cosa è stato tolto? Gli aggettivi, i dettagli («dalle radici», «pigmento verde»), le frasi di passaggio. Cosa è rimasto? <b>Chi fa cosa, con che cosa e perché è importante</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: il riassunto",
      questions: [
        { type: "tf", q: "In un riassunto è consigliabile inserire la propria opinione sul testo.", answer: false, explain: "Il riassunto resta fedele all'originale: le opinioni si dicono nel commento." },
        { type: "mc", q: "Quanto deve essere lungo, di norma, un riassunto?", options: ["Uguale all'originale", "Circa un terzo dell'originale", "Una sola frase", "Il doppio dell'originale"], answer: 1, explain: "Di solito si riduce a 1/3 o 1/4, salvo indicazioni diverse." },
        { type: "text", q: "Come si chiama ciascuna parte del testo con contenuto omogeneo in cui si divide per riassumere?", answer: ["sequenza", "sequenze", "una sequenza"], explain: "Le sequenze sono le unità di contenuto: ognuna ha un titoletto e un'idea principale." }
      ]
    },
    {
      type: "text",
      title: "La parafrasi",
      html: `<p>La <b>parafrasi</b> (dal greco «dire accanto, in altro modo») riscrive un testo in forma <b>più semplice e chiara</b>, <b>senza ridurre</b> il contenuto. Serve soprattutto per testi poetici, antichi o con una sintassi complessa.</p>
<ul>
<li>Si <b>sostituiscono</b> le parole difficili o arcaiche con termini attuali;</li>
<li>si <b>riordina la sintassi</b> secondo l'ordine normale (soggetto, verbo, complemento) quando il testo usa inversioni (iperbato, anastrofe);</li>
<li>si <b>sciolgono</b> le figure retoriche (metafore, similitudini) quando bloccano la comprensione;</li>
<li><b>non si aggiunge</b> né si toglie nulla di importante, e non si inseriscono giudizi.</li>
</ul>
<p>Esempio dai primi versi de <i>L'infinito</i> di Leopardi: «Sempre caro mi fu quest'ermo colle, / e questa siepe, che da tanta parte / dell'ultimo orizzonte il guardo esclude».</p>
<p><b>Parafrasi:</b> <i>«Questo colle solitario mi è sempre stato caro, e anche questa siepe, che impedisce allo sguardo di vedere gran parte dell'orizzonte più lontano».</i></p>`
    },
    {
      type: "remember",
      title: "Riassumere non significa tagliare a caso",
      html: `<p>Un riassunto che toglie gli esempi ma conserva i concetti è corretto. Un riassunto che salta metà del discorso e tiene solo i dettagli curiosi è sbagliato. Prima di cancellare qualcosa chiediti: <b>«Senza questa frase, un lettore capirebbe ancora il testo?»</b>. Se sì, taglia; se no, tienila (magari in forma più breve).</p>`
    },
    {
      type: "text",
      title: "Il testo espositivo",
      html: `<p>Il <b>testo espositivo</b> (o informativo, o divulgativo) spiega un argomento in modo <b>oggettivo</b>: manuali scolastici, articoli di enciclopedia, voci di giornale, relazioni, articoli scientifici. Il suo scopo è <b>informare e far capire</b>, non convincere (quello è il testo argomentativo) e non raccontare una storia (testo narrativo).</p>
<p><b>Caratteristiche:</b></p>
<ul>
<li><b>Chiarezza e precisione</b>: lessico specifico (i termini tecnici), frasi non troppo lunghe;</li>
<li><b>Oggettività</b>: di norma la terza persona e un tono impersonale, nessuna opinione;</li>
<li><b>Ordine logico</b>: le informazioni sono organizzate secondo uno schema;</li>
<li><b>Verificabilità</b>: dati, esempi, definizioni, a volte fonti.</li>
</ul>
<p><b>Struttura tipica:</b></p>
<ol>
<li><b>Introduzione</b>: presenta l'argomento e lo scopo, magari con una domanda o un dato;</li>
<li><b>Sviluppo</b>: i paragrafi, ciascuno con un'idea principale, in sequenza logica;</li>
<li><b>Conclusione</b>: riprende i punti essenziali o indica una prospettiva.</li>
</ol>`
    },
    {
      type: "svg",
      title: "Gli schemi di un testo espositivo",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0fdf4"/>
<g font-family="sans-serif">
<text x="320" y="26" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">Quattro modi di organizzare un'esposizione</text>
<rect x="20" y="45" width="140" height="220" rx="10" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
<text x="90" y="75" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Cronologico</text>
<text x="90" y="105" font-size="14" text-anchor="middle" fill="#14532d">prima, poi,</text>
<text x="90" y="125" font-size="14" text-anchor="middle" fill="#14532d">infine</text>
<text x="90" y="170" font-size="20" text-anchor="middle" fill="#16a34a">1 → 2 → 3</text>
<text x="90" y="215" font-size="14" text-anchor="middle" fill="#14532d">storia, biografie</text>
<rect x="175" y="45" width="140" height="220" rx="10" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
<text x="245" y="75" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Causa-effetto</text>
<text x="245" y="105" font-size="14" text-anchor="middle" fill="#1e3a8a">perché, quindi,</text>
<text x="245" y="125" font-size="14" text-anchor="middle" fill="#1e3a8a">di conseguenza</text>
<text x="245" y="170" font-size="20" text-anchor="middle" fill="#2563eb">A ⇒ B</text>
<text x="245" y="215" font-size="14" text-anchor="middle" fill="#1e3a8a">scienze, economia</text>
<rect x="330" y="45" width="140" height="220" rx="10" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="400" y="75" font-size="16" text-anchor="middle" fill="#78350f" font-weight="bold">Confronto</text>
<text x="400" y="105" font-size="14" text-anchor="middle" fill="#78350f">invece, mentre,</text>
<text x="400" y="125" font-size="14" text-anchor="middle" fill="#78350f">al contrario</text>
<text x="400" y="170" font-size="20" text-anchor="middle" fill="#d97706">A ≠ B</text>
<text x="400" y="215" font-size="14" text-anchor="middle" fill="#78350f">due epoche, due tesi</text>
<rect x="485" y="45" width="140" height="220" rx="10" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
<text x="555" y="75" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Problema</text>
<text x="555" y="95" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">-soluzione</text>
<text x="555" y="125" font-size="14" text-anchor="middle" fill="#7f1d1d">la questione,</text>
<text x="555" y="145" font-size="14" text-anchor="middle" fill="#7f1d1d">la proposta</text>
<text x="555" y="190" font-size="20" text-anchor="middle" fill="#dc2626">? → !</text>
<text x="555" y="235" font-size="14" text-anchor="middle" fill="#7f1d1d">ambiente, salute</text>
</g>
</svg>`,
      caption: "La struttura dipende dallo scopo: il testo cambia a seconda della domanda a cui risponde."
    },
    {
      type: "text",
      title: "Scaletta e connettivi",
      html: `<p>Un testo espositivo ben fatto nasce da una <b>scaletta</b>: prima di scrivere, elenca in ordine le idee principali e collocale sotto i titoli «introduzione, sviluppo, conclusione». Poi collega le idee con i <b>connettivi</b>, cioè le parole che indicano il rapporto logico tra una frase e l'altra:</p>
<table>
<tr><th>Funzione</th><th>Connettivi</th></tr>
<tr><td>Aggiunta</td><td>inoltre, in più, anche, a questo si aggiunge</td></tr>
<tr><td>Causa</td><td>perché, poiché, dato che, infatti</td></tr>
<tr><td>Conseguenza</td><td>quindi, perciò, di conseguenza, dunque</td></tr>
<tr><td>Contrasto</td><td>ma, tuttavia, invece, al contrario, eppure</td></tr>
<tr><td>Esempio</td><td>per esempio, ad esempio, come</td></tr>
<tr><td>Conclusione</td><td>in conclusione, in sintesi, insomma</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Connettivo e funzione",
      widget: "match",
      options: { pairs: [
        ["tuttavia", "contrasto"],
        ["perciò", "conseguenza"],
        ["infatti", "causa/spiegazione"],
        ["ad esempio", "esempio"],
        ["inoltre", "aggiunta"],
        ["in sintesi", "conclusione"]
      ] },
      caption: "Collega ogni connettivo alla sua funzione logica."
    },
    {
      type: "example",
      title: "Un breve testo espositivo",
      html: `<p><b>Argomento: perché si usa il sistema internazionale delle misure?</b></p>
<p><b>Introduzione.</b> Per secoli ogni città europea ebbe le proprie unità di misura, e questo creava problemi quando si commerciava o si facevano esperimenti.</p>
<p><b>Sviluppo.</b> Alla fine del Settecento, in Francia, si decise di creare un sistema comune basato su regole naturali e sul calcolo decimale: nacque il metro. Il sistema fu poi esteso ad altre unità. Poiché permette di confrontare dati ovunque, nel 1960 fu adottato come Sistema Internazionale.</p>
<p><b>Conclusione.</b> In sintesi, un linguaggio comune delle misure è indispensabile per il commercio, per la scienza e per la vita quotidiana.</p>
<p>Si notano: titolo chiaro, struttura in tre parti, connettivi (poiché, in sintesi), terza persona e nessuna opinione.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per sintetizzare",
      intro: "Se il riassunto in prosa non ti viene, prova una di queste strade.",
      tabs: [
        {
          label: "🗺️ Mappa mentale",
          html: "<p>Metti al centro il tema, poi traccia dei rami per le idee principali e dei sottorami per i dettagli. È utile per vedere il testo <b>tutto in una volta</b> e per ripassare; poi la mappa si trasforma in riassunto, seguendo i rami in ordine.</p>"
        },
        {
          label: "❓ Le domande",
          html: "<p>Per ogni paragrafo scrivi la domanda a cui risponde: <i>Chi? Che cosa? Dove? Quando? Perché? Come?</i> Le risposte, messe in fila, sono un riassunto quasi pronto. Funziona benissimo per i testi storici e per gli articoli di cronaca.</p>"
        },
        {
          label: "🗣️ Spiegalo a un amico",
          html: "<p>Chiudi il libro e spiega a voce, in un minuto, a un amico (o allo specchio) di cosa parla il testo. Poi riapri e controlla cosa hai dimenticato. È il <b>metodo Feynman</b>: se riesci a spiegarlo in modo semplice, l'hai capito davvero.</p>"
        },
        {
          label: "📝 Il tweet",
          html: "<p>Prova a riassumere l'intero testo in <b>una sola frase di 20-25 parole</b>, come un titolo di giornale. Obbliga a scegliere l'idea più importante. Poi allunga fino alla lunghezza richiesta, aggiungendo le idee secondarie.</p>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Il riassunto più famoso",
      html: `<p>Il giornalismo anglosassone usa la regola delle <b>«5 W»</b> (<i>Who, What, When, Where, Why</i>: chi, che cosa, quando, dove, perché): le prime righe di un articolo devono già rispondere a queste cinque domande. È la tecnica della <b>piramide rovesciata</b>: l'informazione più importante viene per prima, i dettagli vengono dopo. Così chi si ferma alla prima frase ha comunque capito l'essenziale.</p>`
    },
    {
      type: "curiosity",
      title: "Il telefono senza fili",
      html: `<p>Ogni riassunto è una piccola traduzione, e tradurre può deformare. Nel gioco del «telefono senza fili» il messaggio, passando di bocca in bocca, cambia: questo succede anche quando si ricopia a memoria o si cita «per sentito dire». Per questo, al liceo, quando si riporta un'idea altrui bisogna <b>sempre controllare la fonte</b> e distinguere ciò che dice l'autore da ciò che pensiamo noi.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della scrittura di sintesi",
      nodes: [
        { id: "capire", label: "Capire il testo", x: 50, y: 8, color: "#8b5cf6", html: "Lettura esplorativa, attenta, di controllo; individuare idee principali e parole chiave.", why: "Ogni sintesi scritta dipende dalla comprensione: chi scrive un riassunto senza aver capito si limita a copiare frasi a caso. Capire significa saper distinguere ciò che è essenziale da ciò che è accessorio." },
        { id: "riassunto", label: "Riassunto", x: 15, y: 50, color: "#0ea5e9", html: "Versione breve e fedele del testo, con parole proprie.", why: "Serve a studiare e a ricordare: la memoria trattiene meglio un'idea riformulata con parole proprie che un testo copiato. Per questo si accorcia, non si commenta." },
        { id: "parafrasi", label: "Parafrasi", x: 50, y: 50, color: "#f59e0b", html: "Riscrittura in forma più chiara, senza ridurre il contenuto.", why: "I testi poetici o antichi usano sintassi e parole lontane dalla lingua di oggi. La parafrasi è una forma di traduzione interna alla lingua, che permette di capire prima di interpretare." },
        { id: "commento", label: "Commento", x: 85, y: 50, color: "#ef4444", html: "Interpretazione e valutazione personale del testo.", why: "Dopo aver capito (riassunto, parafrasi), si può discutere: il commento aggiunge analisi, collegamenti e opinioni argomentate. Non va mai confuso con la sintesi." },
        { id: "espositivo", label: "Testo espositivo", x: 30, y: 85, color: "#22c55e", html: "Testo che spiega un argomento in modo oggettivo: introduzione, sviluppo, conclusione.", why: "Per spiegare serve ordine: lo schema (cronologico, causa-effetto, confronto, problema-soluzione) corrisponde ai modi con cui la mente costruisce le relazioni tra le informazioni." },
        { id: "connettivi", label: "Connettivi", x: 72, y: 85, color: "#64748b", html: "Parole che segnalano i rapporti logici tra le frasi.", why: "Senza connettivi un testo è un elenco di frasi. Sono loro a dire se un fatto è causa o conseguenza, se una frase è un esempio o un contrasto: rendono visibile il ragionamento." }
      ],
      edges: [["capire", "riassunto", "porta a"], ["capire", "parafrasi", "porta a"], ["capire", "commento", "porta a"], ["capire", "espositivo", "alimenta"], ["espositivo", "connettivi", "usa"], ["riassunto", "connettivi", "usa"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz: testo espositivo",
      questions: [
        { type: "mc", q: "Qual è lo scopo principale di un testo espositivo?", options: ["Raccontare una storia", "Informare e spiegare in modo oggettivo", "Convincere a tutti i costi", "Esprimere emozioni"], answer: 1, explain: "Il testo espositivo informa e spiega; convincere è lo scopo del testo argomentativo." },
        { type: "mc", q: "'Perciò' introduce un rapporto di:", options: ["Causa", "Conseguenza", "Contrasto", "Esempio"], answer: 1, explain: "Perciò, quindi, di conseguenza introducono ciò che deriva da quanto detto prima." }
      ]
    }
  ],
  glossary: [
    { t: "Riassunto", d: "Versione più breve di un testo, fedele ai contenuti essenziali e scritta con parole proprie." },
    { t: "Parafrasi", d: "Riscrittura di un testo in forma più semplice, senza ridurne il contenuto." },
    { t: "Testo espositivo", d: "Testo che spiega un argomento in modo oggettivo e ordinato." },
    { t: "Sequenza", d: "Parte di un testo con contenuto omogeneo." },
    { t: "Idea principale", d: "Concetto centrale di un paragrafo o di un testo." },
    { t: "Scaletta", d: "Elenco ordinato delle idee da trattare in un testo." },
    { t: "Connettivo", d: "Parola o espressione che collega frasi e idee indicando il loro rapporto logico." },
    { t: "Parole chiave", d: "Termini essenziali per capire e ricordare il contenuto di un testo." },
    { t: "Anastrofe", d: "Inversione dell'ordine normale delle parole nella frase, frequente in poesia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale operazione NON riduce la lunghezza del testo?", options: ["Riassunto", "Parafrasi", "Sintesi in una frase", "Scaletta"], answer: 1, explain: "La parafrasi riscrive senza accorciare, mentre le altre operazioni riducono." },
      { type: "tf", q: "Un riassunto deve contenere il giudizio personale di chi lo scrive.", answer: false, explain: "Il riassunto è fedele all'originale e non contiene opinioni." },
      { type: "mc", q: "Quale parte di un paragrafo contiene spesso l'idea principale?", options: ["Sempre la parte centrale", "Spesso la prima o l'ultima frase", "Mai la prima frase", "Solo gli esempi"], answer: 1, explain: "In molti testi espositivi l'idea principale è all'inizio o alla fine del paragrafo." },
      { type: "text", q: "Come si chiama l'elenco ordinato delle idee che si prepara prima di scrivere?", answer: ["scaletta", "la scaletta"], explain: "La scaletta organizza introduzione, sviluppo e conclusione." },
      { type: "mc", q: "Quale connettivo esprime contrasto?", options: ["Infatti", "Perciò", "Tuttavia", "Inoltre"], answer: 2, explain: "Tuttavia introduce un'idea che si oppone o limita la precedente." },
      { type: "mc", q: "Per quale tipo di testo è particolarmente utile la parafrasi?", options: ["Articoli di cronaca", "Testi poetici e antichi", "Manuali di matematica", "Mail commerciali"], answer: 1, explain: "La parafrasi serve a rendere comprensibili testi dalla sintassi o dal lessico difficili, come le poesie." },
      { type: "tf", q: "La terza persona e il tono impersonale sono tipici del testo espositivo.", answer: true, explain: "Il testo espositivo punta all'oggettività." },
      { type: "order", q: "Metti in ordine le fasi per scrivere un riassunto.", items: ["Lettura esplorativa", "Lettura attenta con sottolineature", "Divisione in sequenze e titoletti", "Scrittura con parole proprie", "Rilettura e controllo della lunghezza"], explain: "Si capisce prima, poi si seleziona, poi si scrive e infine si controlla." },
      { type: "mc", q: "In quale schema espositivo si usano parole come 'poiché' e 'di conseguenza'?", options: ["Cronologico", "Causa-effetto", "Confronto", "Descrittivo"], answer: 1, explain: "Poiché e di conseguenza servono a collegare cause ed effetti." },
      { type: "mc", q: "Qual è la differenza fondamentale tra parafrasi e commento?", options: ["La parafrasi è più lunga", "La parafrasi riformula senza opinioni, il commento interpreta e valuta", "Non c'è differenza", "Il commento si fa solo sui testi poetici"], answer: 1, explain: "La parafrasi resta fedele al testo; il commento aggiunge interpretazione e giudizio." }
    ]
  }
});
