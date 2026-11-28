TOPIC('it', {
  id: "l2-dir-mercato",
  title: "Il mercato e i prezzi",
  intro: "Perché i biglietti di un concerto costano di più quando sono finiti in pochi minuti? Perché il prezzo delle fragole scende in primavera? Perché un solo operatore di una rete ferroviaria può far pagare tariffe diverse da quelle di tanti negozi concorrenti? Dietro a ogni prezzo c'è un incontro tra chi vuole comprare e chi vuole vendere. In questa lezione, dopo i bisogni e i sistemi economici visti in prima, impari a leggere il <b>mercato</b>: la <b>domanda</b> e l'<b>offerta</b>, il <b>prezzo di equilibrio</b>, i diversi tipi di <b>concorrenza</b> e il ruolo dello Stato quando il mercato non funziona.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è un mercato",
      html: `<p>Il <b>mercato</b> è il luogo, fisico o virtuale, in cui <b>domanda</b> e <b>offerta</b> di un bene o servizio si incontrano e si determina un <b>prezzo</b>. Può essere il mercato rionale, un negozio online, una Borsa valori, un sito di annunci. Non esiste un unico mercato: ce ne sono tanti, uno per ogni bene (il mercato delle auto usate, quello delle case in affitto, quello del lavoro).</p>
<p>Il mercato ha una funzione fondamentale in un sistema di economia di mercato: <b>coordina milioni di decisioni individuali</b> senza che nessuno le pianifichi. <b>Adam Smith</b>, nella <i>Ricchezza delle nazioni</i> (1776), osservò che il panettiere non cuoce il pane per bontà d'animo ma per il proprio interesse; eppure tutti ricevono il pane. Parlò di una «<b>mano invisibile</b>» che, tramite i prezzi, orienta le risorse verso gli usi più desiderati. Non significa, però, che il mercato funzioni sempre bene da solo: ne vedremo i limiti.</p>
<p>I protagonisti sono:</p>
<ul>
<li>i <b>consumatori</b> (famiglie), che domandano beni per soddisfare bisogni;</li>
<li>le <b>imprese</b>, che producono e offrono beni e servizi per ottenere un profitto;</li>
<li>lo <b>Stato</b>, che stabilisce le regole e interviene quando serve.</li>
</ul>`
    },
    {
      type: "text",
      title: "2. La domanda",
      html: `<p>La <b>domanda</b> di un bene è la quantità che i consumatori sono disposti e in grado di acquistare a un certo prezzo, in un certo periodo. Non basta desiderare: bisogna anche poter pagare (<i>domanda</i> ≠ semplice desiderio).</p>
<p>La <b>legge della domanda</b> afferma che, a parità di altre condizioni (<i>ceteris paribus</i>), <b>se il prezzo aumenta la quantità domandata diminuisce</b>, e viceversa. Se un gelato passa da 2 a 4 euro, ne compri meno. Graficamente la curva della domanda ha pendenza <b>negativa</b>: scende da sinistra verso destra.</p>
<p>Il prezzo non è l'unico fattore. La curva si <b>sposta</b> quando cambiano altre condizioni:</p>
<ul>
<li>il <b>reddito</b> dei consumatori: per i beni <b>normali</b> la domanda cresce se il reddito aumenta; per i beni <b>inferiori</b> (come i prodotti di bassa qualità) può diminuire;</li>
<li>i <b>gusti</b> e le mode (la domanda di un certo smartphone dopo una campagna pubblicitaria);</li>
<li>i prezzi dei <b>beni sostituti</b> (se il burro costa di più, aumenta la domanda di margarina) e dei <b>beni complementari</b> (se aumenta il prezzo delle automobili, cala la domanda di benzina);</li>
<li>le <b>aspettative</b> (se si prevede un aumento dei prezzi, si anticipa l'acquisto) e il numero di consumatori.</li>
</ul>
<p>Attenzione alla differenza: un <b>cambio di prezzo</b> provoca un movimento <i>lungo</i> la curva; un cambio di reddito o di gusti <i>sposta l'intera curva</i>.</p>`
    },
    {
      type: "text",
      title: "3. L'offerta",
      html: `<p>L'<b>offerta</b> è la quantità di bene che le imprese sono disposte a vendere a un certo prezzo. La <b>legge dell'offerta</b> afferma che, a parità di condizioni, <b>se il prezzo aumenta la quantità offerta aumenta</b>: un prezzo più alto rende più conveniente produrre. La curva dell'offerta ha pendenza <b>positiva</b>.</p>
<p>Si sposta quando cambiano:</p>
<ul>
<li>i <b>costi di produzione</b> (materie prime, energia, salari): se aumentano, a parità di prezzo l'impresa produce meno;</li>
<li>la <b>tecnologia</b>: un macchinario più efficiente riduce i costi e aumenta l'offerta;</li>
<li>il <b>numero di imprese</b> sul mercato;</li>
<li>le <b>imposte e i sussidi</b> e le condizioni naturali (un raccolto cattivo riduce l'offerta di grano).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Domanda, offerta ed equilibrio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grafico domanda e offerta con punto di equilibrio">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<line x1="80" y1="260" x2="540" y2="260" stroke="#334155" stroke-width="2"/>
<line x1="80" y1="260" x2="80" y2="20" stroke="#334155" stroke-width="2"/>
<text x="560" y="266" text-anchor="end" font-size="14" fill="#334155">Quantità</text>
<text x="92" y="30" font-size="14" fill="#334155">Prezzo</text>
<line x1="110" y1="50" x2="500" y2="230" stroke="#1d4ed8" stroke-width="4"/>
<text x="500" y="250" text-anchor="end" font-size="15" font-weight="bold" fill="#1d4ed8">Domanda</text>
<line x1="110" y1="230" x2="500" y2="50" stroke="#dc2626" stroke-width="4"/>
<text x="500" y="44" text-anchor="end" font-size="15" font-weight="bold" fill="#dc2626">Offerta</text>
<circle cx="305" cy="140" r="9" fill="#16a34a" stroke="#14532d" stroke-width="2"/>
<line x1="80" y1="140" x2="305" y2="140" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="305" y1="140" x2="305" y2="260" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<text x="330" y="132" font-size="15" font-weight="bold" fill="#14532d">Equilibrio</text>
<text x="70" y="146" text-anchor="end" font-size="14" fill="#14532d">P*</text>
<text x="305" y="280" text-anchor="middle" font-size="14" fill="#14532d">Q*</text>
</svg>`,
      caption: "Dove le due curve si incontrano, c'è il prezzo di equilibrio."
    },
    {
      type: "text",
      title: "4. Il prezzo di equilibrio",
      html: `<p>Il <b>prezzo di equilibrio</b> è il prezzo al quale la quantità domandata <b>uguaglia</b> la quantità offerta: tutto ciò che viene prodotto si vende, e chi vuole comprare a quel prezzo trova il bene. Se il prezzo è diverso, il mercato si corregge da solo:</p>
<ul>
<li>se il prezzo è <b>troppo alto</b>, l'offerta supera la domanda: ci sono <b>eccedenze</b> (invenduto). I venditori abbassano i prezzi per liberarsi della merce, e il prezzo scende verso l'equilibrio;</li>
<li>se il prezzo è <b>troppo basso</b>, la domanda supera l'offerta: c'è <b>scarsità</b> (carenza). I compratori fanno a gara, i venditori possono alzare i prezzi, e il prezzo sale.</li>
</ul>
<p>Quando la <b>domanda aumenta</b> (curva a destra) l'equilibrio si sposta verso <b>prezzi e quantità più alti</b>; quando l'<b>offerta diminuisce</b> (curva a sinistra) il prezzo sale e la quantità scende. È ciò che accade ai prezzi della frutta fuori stagione, dei biglietti per i grandi eventi, dei carburanti quando diminuisce la produzione di petrolio.</p>`
    },
    {
      type: "example",
      title: "Calcoliamo un equilibrio",
      html: `<p>Su un mercato di magliette la domanda è <b>Qd = 100 − 2P</b> e l'offerta è <b>Qs = 20 + 2P</b> (P in euro, Q in migliaia di pezzi).</p>
<p><b>Equilibrio</b>: Qd = Qs → 100 − 2P = 20 + 2P → 80 = 4P → <b>P = 20 euro</b>. Quantità: Q = 100 − 40 = <b>60</b> (migliaia).</p>
<p>Se il prezzo fosse 30: Qd = 100 − 60 = 40, Qs = 20 + 60 = 80 → <b>eccedenza di 40</b>: i venditori ribassano. Se fosse 10: Qd = 100 − 20 = 80, Qs = 20 + 20 = 40 → <b>scarsità di 40</b>: i compratori fanno salire il prezzo. In entrambi i casi il mercato torna a 20.</p>`
    },
    {
      type: "quiz",
      title: "Controlla subito",
      questions: [
        { type: "mc", q: "Se il prezzo di un bene è superiore al prezzo di equilibrio, che cosa accade?", options: ["L'offerta supera la domanda: c'è un'eccedenza e il prezzo tende a scendere", "La domanda supera l'offerta e il prezzo sale", "Non succede nulla"], answer: 0, explain: "Le imprese non vendono tutto e abbassano i prezzi." },
        { type: "tf", q: "Un aumento del reddito dei consumatori sposta la curva della domanda di un bene normale verso destra.", answer: true, explain: "A ogni prezzo, i consumatori ne comprano di più." },
        { type: "num", q: "Con Qd = 100 − 2P e Qs = 20 + 2P, qual è il prezzo di equilibrio (in euro)?", answer: 20, tol: 0, unit: "euro", explain: "100 − 2P = 20 + 2P → 4P = 80 → P = 20." }
      ]
    },
    {
      type: "text",
      title: "5. L'elasticità: quanto reagisce la domanda?",
      html: `<p>Non tutti i beni reagiscono allo stesso modo al prezzo. L'<b>elasticità della domanda rispetto al prezzo</b> misura di quanto, in percentuale, varia la quantità domandata quando il prezzo varia dell'1%:</p>
<p style="text-align:center"><b>E = (variazione % della quantità) / (variazione % del prezzo)</b></p>
<ul>
<li><b>Domanda elastica</b> (|E| &gt; 1): la quantità reagisce molto al prezzo. Succede per beni di lusso, sostituibili o non necessari (un viaggio, un gelato di una marca precisa).</li>
<li><b>Domanda anelastica</b> (|E| &lt; 1): la quantità cambia poco. Succede per beni necessari, senza sostituti, come il sale, i farmaci salvavita, la benzina nel breve periodo.</li>
</ul>
<p>Perché è importante? Un'impresa che aumenta il prezzo di un bene <b>anelastico</b> vede aumentare i propri ricavi (perde pochi clienti); se il bene è <b>elastico</b>, rischia di perdere i ricavi. Anche lo Stato ne tiene conto: tassa più volentieri beni con domanda anelastica (carburanti, tabacchi), perché il gettito rimane stabile.</p>
<p><b>Esempio</b>: se il prezzo di un biglietto aumenta del 10% e le vendite calano del 20%, E = −20/10 = −2, domanda elastica.</p>`
    },
    {
      type: "text",
      title: "6. Forme di mercato: concorrenza e monopolio",
      html: `<p>Il modo in cui si forma il prezzo dipende da <b>quante imprese</b> ci sono e da <b>quanto potere</b> hanno. Le forme principali:</p>
<ul>
<li><b>Concorrenza perfetta</b>: moltissimi venditori e compratori, beni identici, informazione completa, libertà di entrata e uscita. Nessuno può influenzare il prezzo da solo: ciascuno è un «price taker» (<i>accettatore di prezzo</i>). È un modello teorico, approssimato da alcuni mercati agricoli e dalle Borse.</li>
<li><b>Concorrenza monopolistica</b>: molte imprese, ma i prodotti sono <b>differenziati</b> (marchio, qualità, design), per cui ciascuna ha un certo potere sul proprio prezzo. Pensa ai ristoranti, ai vestiti, ai parrucchieri.</li>
<li><b>Oligopolio</b>: pochi grandi venditori che si influenzano a vicenda (compagnie telefoniche, produttori di auto, banche, compagnie aeree). Il rischio è il <b>cartello</b>, cioè un accordo segreto per fissare i prezzi o spartirsi i mercati, <b>vietato</b> dalla legge.</li>
<li><b>Monopolio</b>: un solo venditore, senza sostituti stretti, e barriere all'entrata. Può fissare un prezzo più alto e produrre di meno rispetto a un mercato concorrenziale, a danno dei consumatori. Esiste il <b>monopolio naturale</b>, quando i costi della rete sono così alti che una sola impresa serve il mercato in modo più efficiente (acquedotti, reti elettriche, ferrovie): in questi casi lo Stato lo regola o lo gestisce direttamente.</li>
<li><b>Monopsonio</b>: un solo compratore (come un'unica grande industria che assume tutti i lavoratori di una zona).</li>
</ul>
<p>La concorrenza fa bene ai consumatori: spinge le imprese ad abbassare i prezzi, migliorare la qualità e innovare. Per questo lo Stato la protegge.</p>`
    },
    {
      type: "widget",
      title: "Che forma di mercato è?",
      widget: "classify",
      options: {
        groups: ["Concorrenza (molte imprese)", "Oligopolio", "Monopolio"],
        items: [
          ["Un mercato rionale con tanti banchi di frutta", 0],
          ["Tre grandi compagnie telefoniche nazionali", 1],
          ["Un'unica rete idrica di una città", 2],
          ["Le bancarelle di un mercatino delle pulci", 0],
          ["Poche compagnie petrolifere che fissano i prezzi", 1],
          ["L'unica ferrovia su una linea isolata", 2],
          ["Tanti ristoranti con menu diversi", 0],
          ["Due costruttori di grandi aerei commerciali", 1]
        ]
      },
      caption: "Classifica ogni situazione in base al numero di venditori."
    },
    {
      type: "text",
      title: "7. Quando il mercato fallisce e lo Stato interviene",
      html: `<p>Il mercato è molto efficace, ma non perfetto. Gli economisti parlano di <b>fallimenti del mercato</b> quando i prezzi di mercato non portano a un risultato desiderabile per la collettività:</p>
<ul>
<li><b>Posizioni di potere</b>: monopoli e cartelli. In Italia la <b>legge n. 287 del 1990</b> vieta le intese restrittive e gli abusi di posizione dominante e ha istituito l'<b>Autorità garante della concorrenza e del mercato</b> (AGCM, detta Antitrust). In Europa lo stesso scopo è perseguito dagli artt. 101 e 102 del Trattato sul funzionamento dell'UE. Il modello nasce negli Stati Uniti con lo <b>Sherman Act</b> del 1890.</li>
<li><b>Esternalità</b>: costi o benefici che ricadono su terzi senza passare dal prezzo. L'inquinamento è un'<b>esternalità negativa</b> (la fabbrica non paga il danno all'ambiente); un vaccino è un'<b>esternalità positiva</b> (protegge anche chi non l'ha fatto). Lo Stato interviene con tasse, divieti, incentivi.</li>
<li><b>Beni pubblici</b>: come l'illuminazione stradale o la difesa nazionale, da cui non si può escludere nessuno: nessuno ha incentivo a pagare, quindi il mercato non li offre da solo (il problema del «free rider», cioè del «viaggiatore senza biglietto»).</li>
<li><b>Informazione asimmetrica</b>: chi vende sa più di chi compra (le auto usate, i servizi sanitari): lo Stato impone regole di trasparenza.</li>
<li><b>Disuguaglianze</b>: il mercato non garantisce di per sé un'equa distribuzione del reddito; lo Stato interviene con imposte progressive (art. 53 Cost.) e servizi pubblici.</li>
</ul>
<p>Lo Stato può anche influenzare direttamente i prezzi con un <b>prezzo massimo</b> (tetto, per esempio sul prezzo di un bene essenziale) o <b>minimo</b> (come il prezzo minimo garantito agli agricoltori o un salario minimo). Ma attenzione: un prezzo massimo sotto l'equilibrio provoca <b>scarsità</b> e mercato nero; un prezzo minimo sopra l'equilibrio provoca <b>eccedenze</b> e disoccupazione, se riguarda il lavoro. Le politiche vanno quindi calibrate con cura: non esistono interventi senza costi.</p>
<p>La nostra Costituzione tutela l'<b>iniziativa economica privata</b> (art. 41: «è libera»), ma stabilisce che non può svolgersi in contrasto con l'utilità sociale o recare danno alla sicurezza, alla libertà e alla dignità umana, e che la legge ne determina programmi e controlli. È un modello di <b>economia sociale di mercato</b>.</p>`
    },
    {
      type: "svg",
      title: "Che cosa succede ai prezzi?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eccedenza e scarsità rispetto al prezzo di equilibrio">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<line x1="70" y1="260" x2="540" y2="260" stroke="#334155" stroke-width="2"/>
<line x1="70" y1="260" x2="70" y2="20" stroke="#334155" stroke-width="2"/>
<line x1="100" y1="40" x2="500" y2="230" stroke="#1d4ed8" stroke-width="4"/>
<text x="500" y="250" text-anchor="end" font-size="15" font-weight="bold" fill="#1d4ed8">Domanda</text>
<line x1="100" y1="230" x2="500" y2="40" stroke="#dc2626" stroke-width="4"/>
<text x="500" y="34" text-anchor="end" font-size="15" font-weight="bold" fill="#dc2626">Offerta</text>
<line x1="70" y1="85" x2="520" y2="85" stroke="#b45309" stroke-width="2" stroke-dasharray="7 5"/>
<text x="76" y="77" font-size="14" font-weight="bold" fill="#b45309">Prezzo troppo alto: eccedenza</text>
<line x1="70" y1="195" x2="520" y2="195" stroke="#7c3aed" stroke-width="2" stroke-dasharray="7 5"/>
<text x="76" y="187" font-size="14" font-weight="bold" fill="#6d28d9">Prezzo troppo basso: scarsità</text>
<circle cx="300" cy="135" r="8" fill="#16a34a" stroke="#14532d" stroke-width="2"/>
<text x="318" y="140" font-size="14" font-weight="bold" fill="#14532d">Equilibrio</text>
</svg>`,
      caption: "Sopra l'equilibrio c'è invenduto, sotto c'è carenza: il prezzo si sposta verso l'equilibrio."
    },
    {
      type: "example",
      title: "I biglietti del concerto",
      html: `<p>Un artista molto amato annuncia un concerto in uno stadio da 50.000 posti. I biglietti a 60 euro sono finiti in pochi minuti: la <b>domanda supera l'offerta</b> a quel prezzo (scarsità). Intanto i rivenditori online offrono gli stessi biglietti a 300 euro: il mercato «secondario» fa emergere il prezzo di equilibrio reale. Gli organizzatori potrebbero alzare i prezzi (ma rischierebbero polemiche), aggiungere date (aumentando l'offerta) o limitare la rivendita (per legge). Ecco come domanda, offerta ed eventuale intervento dello Stato si incontrano in un caso concreto.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Domanda</b>: più il prezzo sale, meno se ne compra (curva decrescente). <b>Offerta</b>: più il prezzo sale, più se ne offre (curva crescente).</li>
<li><b>Equilibrio</b>: Qd = Qs. Sopra → eccedenza, sotto → scarsità; il mercato si riassesta.</li>
<li>Variazione di prezzo = movimento <i>lungo</i> la curva; altri fattori = <i>spostamento</i> della curva.</li>
<li><b>Elasticità</b> = variazione % quantità / variazione % prezzo.</li>
<li>Forme di mercato: concorrenza, concorrenza monopolistica, oligopolio, monopolio.</li>
<li>Fallimenti del mercato: monopoli, esternalità, beni pubblici, informazione asimmetrica. Lo Stato interviene (Antitrust, regolazione, imposte).</li>
</ul>`
    },
    {
      type: "decision",
      title: "Il prezzo del pane: tetto o mercato?",
      html: `<p>In una città piove per settimane e il raccolto di grano è dimezzato: il pane costa il doppio. Molte famiglie non riescono più a comprarlo. Sei il sindaco e valuti due possibilità: imporre per legge un <b>prezzo massimo</b> uguale a quello di prima, oppure lasciare che il mercato si regoli.</p>`,
      question: "Che cosa decidi?",
      options: [
        { label: "Impongo un prezzo massimo pari al vecchio prezzo", outcome: "Il pane torna accessibile sulla carta, ma i fornai, con costi più alti, producono meno o chiudono: il pane scarseggia, compaiono code e mercato nero. Il prezzo non è sparito: si è trasferito altrove." },
        { label: "Lascio il mercato libero, senza fare niente", outcome: "Il prezzo alto incentiva a importare grano e a ridurre gli sprechi, ma le famiglie più povere rischiano di non poter comprare pane: il mercato non tiene conto dell'equità." },
        { label: "Lascio il prezzo libero e aiuto le famiglie in difficoltà con un sussidio", outcome: "Il prezzo continua a segnalare la scarsità (e a stimolare nuove forniture), mentre il sussidio protegge chi non può permettersi il pane." }
      ],
      answer: 2,
      explain: "Molti economisti preferiscono sostenere il reddito dei poveri senza distorcere i prezzi: il prezzo trasmette l'informazione che il grano è scarso. Un tetto ai prezzi, però, è stato usato in tempi di emergenza e può essere giustificato per periodi brevi, soprattutto se accompagnato da misure che aumentino l'offerta."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il mercato",
      intro: "Il mercato si capisce anche con esperienze quotidiane.",
      tabs: [
        {
          label: "🛒 Il mercatino della scuola",
          html: `<p>Immagina un mercatino di libri usati. Se tutti vendono lo stesso libro a 20 euro e nessuno compra, qualcuno ribassa a 15 e poi a 12: il prezzo scende finché qualcuno compra. Se invece tutti vogliono quel libro e ce n'è uno solo, i compratori offrono di più, fino a 30 euro. Nessuno ha pianificato il prezzo, ma l'incontro tra chi vende e chi compra lo ha determinato.</p>`
        },
        {
          label: "🔨 L'asta",
          html: `<p>L'<b>asta</b> è il mercato in miniatura: un solo bene e tanti compratori; il prezzo sale finché resta un solo offerente. Il prezzo finale è quello che il penultimo offerente non è più disposto a superare. Nelle aste «olandesi» (al ribasso), usate per esempio al mercato dei fiori di Aalsmeer nei Paesi Bassi, il battitore parte da un prezzo alto e lo abbassa finché qualcuno accetta.</p>`
        },
        {
          label: "📉 Il gioco dell'offerta",
          html: `<p>Pensa a un sito di prenotazioni voli. Quando mancano pochi posti, il prezzo sale (offerta che si riduce rispetto alla domanda); quando il volo è semivuoto, il prezzo cala. Il «prezzo dinamico» è la versione in tempo reale della legge di domanda e offerta: gli algoritmi ricalcolano continuamente l'equilibrio.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: il mercato",
      nodes: [
        { id: "mercato", label: "Mercato", x: 50, y: 6, color: "#2563eb", html: "Incontro tra chi compra e chi vende, da cui nasce il prezzo.", why: "Il mercato permette di coordinare milioni di scelte senza un pianificatore. Adam Smith (1776) lo spiegò con la «mano invisibile»; Alfred Marshall (1890) con il grafico delle curve di domanda e offerta." },
        { id: "dom", label: "Domanda", x: 15, y: 35, color: "#16a34a", html: "Quantità che i consumatori vogliono e possono comprare.", why: "Decresce con il prezzo perché ciascun acquisto aggiuntivo dà meno soddisfazione (utilità marginale decrescente) e perché esistono sostituti." },
        { id: "off", label: "Offerta", x: 85, y: 35, color: "#dc2626", html: "Quantità che le imprese vogliono vendere.", why: "Cresce con il prezzo perché produrre di più costa sempre di più (costi marginali crescenti): servono prezzi più alti per giustificare la produzione extra." },
        { id: "eq", label: "Equilibrio", x: 50, y: 40, color: "#f59e0b", html: "Prezzo in cui Qd = Qs.", why: "È un punto verso cui il mercato tende, perché eccedenze e scarsità spingono prezzi e quantità a correggersi: è un meccanismo di autoregolazione." },
        { id: "forme", label: "Forme di mercato", x: 25, y: 78, color: "#a855f7", html: "Concorrenza, oligopolio, monopolio.", why: "Il potere di mercato dipende dal numero di imprese e dalle barriere all'entrata. Più è concentrato, più si riduce il vantaggio per il consumatore." },
        { id: "stato", label: "Intervento dello Stato", x: 75, y: 78, color: "#0891b2", html: "Antitrust, regolazione, imposte, beni pubblici.", why: "Poiché il mercato fallisce in presenza di monopoli, esternalità e beni pubblici, lo Stato è chiamato a correggerlo, come prevede l'art. 41 della Costituzione e come la storia ha mostrato dopo la crisi del 1929." }
      ],
      edges: [["mercato", "dom", "ha"], ["mercato", "off", "ha"], ["dom", "eq", "incontra"], ["off", "eq", "incontra"], ["mercato", "forme", "varia in"], ["forme", "stato", "richiede"]]
    },
    {
      type: "curiosity",
      title: "Il bulbo di tulipano più caro della storia",
      html: `<p>Nei Paesi Bassi del Seicento, intorno al 1636-37, i bulbi di tulipano raggiunsero prezzi altissimi: alcuni esemplari rari costavano quanto una casa di città. Poi, nel febbraio 1637, i prezzi crollarono. È uno dei più famosi esempi di <b>bolla speculativa</b>: i prezzi salgono perché ci si aspetta che salgano ancora, finché la fiducia scompare. Mostra che i prezzi non dipendono solo dal valore d'uso, ma anche dalle aspettative.</p>`
    },
    {
      type: "curiosity",
      title: "Il paradosso dell'acqua e dei diamanti",
      html: `<p>L'acqua è indispensabile alla vita ma costa pochissimo; i diamanti non servono a sopravvivere ma costano moltissimo. Adam Smith se ne accorse e distinse il «valore d'uso» dal «valore di scambio»; più tardi si capì che il prezzo non dipende dall'utilità totale, ma da quanto un bene è <b>scarso</b>. Oggi gli economisti lo spiegano con l'<b>utilità marginale</b>: l'ultimo litro d'acqua vale poco perché ce n'è in abbondanza, mentre l'ultimo diamante vale molto perché sono rari. In un deserto, però, un bicchiere d'acqua varrebbe molto più di un diamante.</p>`
    },
    {
      type: "quiz",
      title: "Secondo controllo",
      questions: [
        { type: "mc", q: "In un monopolio, rispetto alla concorrenza, di solito…", options: ["Il prezzo è più alto e la quantità prodotta minore", "Il prezzo è più basso", "Il prezzo è identico"], answer: 0, explain: "Il monopolista, non avendo concorrenti, può limitare l'offerta e fissare prezzi più alti." },
        { type: "tf", q: "Un cartello tra imprese per fissare i prezzi è vietato dalla legge.", answer: true, explain: "La legge 287/1990 e gli artt. 101-102 TFUE vietano le intese restrittive della concorrenza." },
        { type: "mc", q: "Un'esternalità negativa è…", options: ["Un costo che ricade su terzi senza passare dal prezzo (ad esempio l'inquinamento)", "Un prezzo molto basso", "Una tassa sulle importazioni"], answer: 0, explain: "È un fallimento del mercato: il produttore non paga l'intero costo che genera." }
      ]
    }
  ],
  glossary: [
    { t: "Mercato", d: "Luogo (reale o virtuale) in cui si incontrano domanda e offerta di un bene e si forma il prezzo." },
    { t: "Domanda", d: "Quantità di un bene che i consumatori sono disposti e in grado di acquistare a un certo prezzo." },
    { t: "Offerta", d: "Quantità di un bene che le imprese sono disposte a vendere a un certo prezzo." },
    { t: "Prezzo di equilibrio", d: "Prezzo al quale la quantità domandata è uguale alla quantità offerta." },
    { t: "Elasticità", d: "Misura della sensibilità della quantità domandata alle variazioni di prezzo." },
    { t: "Bene sostituto", d: "Bene che può prendere il posto di un altro (burro e margarina)." },
    { t: "Bene complementare", d: "Bene che si usa insieme a un altro (auto e benzina)." },
    { t: "Concorrenza perfetta", d: "Mercato con moltissimi venditori e compratori, nessuno dei quali può influenzare il prezzo." },
    { t: "Oligopolio", d: "Mercato dominato da pochi grandi venditori." },
    { t: "Monopolio", d: "Mercato con un solo venditore." },
    { t: "Cartello", d: "Accordo tra imprese per fissare i prezzi o spartirsi il mercato, vietato dalla legge." },
    { t: "Esternalità", d: "Costo o beneficio che ricade su terzi senza passare dal prezzo di mercato." },
    { t: "Antitrust", d: "Autorità che vigila su concorrenza e mercato; in Italia l'AGCM." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa afferma la legge della domanda?", options: ["Se il prezzo sale, la quantità domandata scende", "Se il prezzo sale, la quantità domandata sale", "Il prezzo non influenza la domanda"], answer: 0, explain: "A parità di altre condizioni la curva della domanda ha pendenza negativa." },
      { type: "tf", q: "La curva dell'offerta ha pendenza positiva.", answer: true, explain: "A prezzi più alti le imprese sono disposte a produrre di più." },
      { type: "num", q: "Con Qd = 100 − 2P e Qs = 20 + 2P, quanto vale la quantità di equilibrio?", answer: 60, tol: 0, explain: "P = 20, quindi Q = 100 − 40 = 60." },
      { type: "mc", q: "Se aumenta il prezzo di un bene sostituto, la domanda dell'altro bene…", options: ["Aumenta", "Diminuisce", "Non cambia"], answer: 0, explain: "Se il burro costa di più, si compra più margarina." },
      { type: "mc", q: "Un bene con domanda anelastica è…", options: ["Un bene la cui quantità domandata varia poco al variare del prezzo", "Un bene molto richiesto", "Un bene di lusso"], answer: 0, explain: "Come i farmaci salvavita o il sale." },
      { type: "text", q: "Come si chiama il mercato con un solo venditore?", answer: ["monopolio", "il monopolio"], explain: "Il monopolista può fissare un prezzo più alto rispetto alla concorrenza." },
      { type: "mc", q: "Chi vigila in Italia sul rispetto della concorrenza?", options: ["L'Autorità garante della concorrenza e del mercato (AGCM)", "La Corte dei conti", "Il CSM"], answer: 0, explain: "È stata istituita con la legge 287/1990." },
      { type: "order", q: "Metti in ordine: che cosa succede se il prezzo è sopra l'equilibrio?", items: ["Il prezzo è troppo alto", "L'offerta supera la domanda", "Le imprese hanno invenduto", "Il prezzo scende verso l'equilibrio"], explain: "Il mercato si autoregola." },
      { type: "tf", q: "L'art. 41 della Costituzione dichiara libera l'iniziativa economica privata, ma non può contrastare con l'utilità sociale.", answer: true, explain: "È la base dell'economia sociale di mercato italiana." },
      { type: "mc", q: "Quale di questi è un esempio di bene pubblico?", options: ["La difesa nazionale", "Una pizza", "Un telefono"], answer: 0, explain: "Non si può escludere nessuno dal beneficio." }
    ]
  }
});
