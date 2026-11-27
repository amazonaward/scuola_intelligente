TOPIC('it', {
  id: "l1-dir-economia-bisogni",
  title: "Economia: bisogni, beni e servizi",
  intro: "Hai 20 euro. Un cinema, un paio di cuffie, una pizza con gli amici: non puoi avere tutto. Ogni giorno, senza saperlo, fai scelte economiche. L'<b>economia</b> studia proprio questo: come persone, imprese e Stati scelgono come usare risorse <b>limitate</b> per soddisfare bisogni <b>illimitati</b>. In questa lezione scopri che cosa sono i <b>bisogni</b>, i <b>beni</b> e i <b>servizi</b>, perché i beni sono <b>scarsi</b> e che cosa significa fare una scelta con un <b>costo-opportunità</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è l'economia",
      html: `<p>La parola viene dal greco <i>oikonomía</i>, "amministrazione della casa" (<i>oikos</i> = casa, <i>nomos</i> = regola). Oggi l'<b>economia</b> è la scienza che studia come le persone e le società <b>impiegano risorse scarse</b> per produrre beni e servizi e distribuirli tra gli individui. Una definizione celebre fu data nel 1932 dall'economista inglese <b>Lionel Robbins</b>: l'economia studia il comportamento umano come relazione tra <b>scopi</b> e <b>mezzi scarsi</b> che hanno usi alternativi.</p>
<p>L'economia si divide in:</p>
<ul>
<li><b>microeconomia</b>: studia il comportamento dei singoli operatori (una famiglia, un'impresa) e il formarsi dei prezzi nei mercati;</li>
<li><b>macroeconomia</b>: studia i fenomeni dell'intero sistema (prodotto nazionale, occupazione, inflazione, debito pubblico).</li>
</ul>
<p>Si distingue poi tra economia <b>positiva</b> (descrive i fatti: "se il prezzo aumenta, la domanda diminuisce") ed economia <b>normativa</b> (giudica ciò che sarebbe giusto fare: "lo Stato dovrebbe aumentare le tasse sui ricchi"). Il primo tipo di affermazione si può verificare con i dati; il secondo dipende anche da valori.</p>`
    },
    {
      type: "text",
      title: "2. I bisogni",
      html: `<p>Il <b>bisogno</b> è la sensazione di mancanza di qualcosa unita al desiderio di soddisfarla. I bisogni umani sono praticamente <b>illimitati</b>: appena ne soddisfi uno, ne nasce un altro (hai fame, mangi; poi vuoi un dolce; poi un ristorante migliore). Si classificano in vari modi.</p>
<p><b>Per importanza:</b></p>
<ul>
<li><b>primari</b> (o vitali): indispensabili alla sopravvivenza: mangiare, bere, ripararsi dal freddo, curarsi;</li>
<li><b>secondari</b> (o voluttuari): non indispensabili ma capaci di migliorare la vita: viaggiare, praticare sport, ascoltare musica, possedere uno smartphone di ultima generazione.</li>
</ul>
<p><b>Per soggetto:</b></p>
<ul>
<li><b>individuali</b>: sentiti dalla singola persona (comprare un libro);</li>
<li><b>collettivi</b>: sentiti da un'intera comunità e soddisfatti da servizi comuni (sicurezza, scuola, strade, giustizia, sanità pubblica).</li>
</ul>
<p>Lo psicologo americano <b>Abraham Maslow</b> (1943) propose una "piramide" in cinque livelli: bisogni <b>fisiologici</b> (cibo, sonno), di <b>sicurezza</b> (casa, salute, lavoro), di <b>appartenenza</b> (amici, famiglia, amore), di <b>stima</b> (rispetto, successo), di <b>autorealizzazione</b> (sviluppare le proprie capacità). Secondo Maslow, di regola si cerca di soddisfare i bisogni di livello più basso prima di passare a quelli superiori.</p>
<p>I bisogni dipendono da <b>epoca, cultura, età e reddito</b>: oggi internet è per molti un bisogno quasi primario; cinquant'anni fa non esisteva.</p>`
    },
    {
      type: "svg",
      title: "La piramide dei bisogni di Maslow",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Piramide di Maslow a cinque livelli">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<polygon points="300,15 245,65 355,65" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="300" y="52" text-anchor="middle" font-size="14" font-weight="bold" fill="#581c87">Sé</text>
<polygon points="245,65 355,65 390,115 210,115" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
<text x="300" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="#831843">Stima</text>
<polygon points="210,115 390,115 425,165 175,165" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<text x="300" y="147" text-anchor="middle" font-size="14" font-weight="bold" fill="#7c2d12">Appartenenza</text>
<polygon points="175,165 425,165 460,215 140,215" fill="#fef08a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="197" text-anchor="middle" font-size="14" font-weight="bold" fill="#713f12">Sicurezza</text>
<polygon points="140,215 460,215 495,270 105,270" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="300" y="248" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">Fisiologici</text>
<text x="515" y="45" font-size="14" fill="#334155">Realizzare se stessi</text>
<text x="515" y="150" font-size="14" fill="#334155">Relazioni</text>
<text x="515" y="250" font-size="14" fill="#334155">Sopravvivenza</text>
</svg>`,
      caption: "I bisogni di Maslow, dalla base (sopravvivenza) al vertice (realizzazione di sé)."
    },
    {
      type: "widget",
      title: "Primari o secondari?",
      widget: "classify",
      options: {
        groups: ["Bisogno primario", "Bisogno secondario"],
        items: [
          ["Bere acqua", 0],
          ["Giocare ai videogiochi", 1],
          ["Curarsi quando si è malati", 0],
          ["Andare in vacanza all'estero", 1],
          ["Avere un tetto sopra la testa", 0],
          ["Comprare vestiti firmati", 1],
          ["Mangiare", 0],
          ["Andare a un concerto", 1]
        ]
      },
      caption: "Distingui ciò che è necessario alla vita da ciò che la rende più piacevole."
    },
    {
      type: "text",
      title: "3. Beni e servizi",
      html: `<p>I bisogni si soddisfano con <b>beni</b> e <b>servizi</b>.</p>
<p>I <b>beni</b> sono le cose utili a soddisfare un bisogno. Si classificano:</p>
<ul>
<li><b>liberi</b>: disponibili in quantità illimitata, che non richiedono lavoro per essere ottenuti (l'aria, la luce del sole); sempre meno numerosi: l'acqua pulita, ad esempio, oggi costa;</li>
<li><b>economici</b>: disponibili in quantità limitata, hanno un <b>prezzo</b> e richiedono lavoro per produrli. Sono l'oggetto dell'economia.</li>
</ul>
<p>I beni economici si dividono ancora in:</p>
<ul>
<li><b>materiali</b> (una bici, il pane) e <b>immateriali</b> (un brevetto, un software, un marchio);</li>
<li><b>di consumo</b>: soddisfano direttamente un bisogno (un panino, un paio di scarpe); possono essere <b>durevoli</b> (si usano più volte: lavatrice, telefono) e <b>non durevoli</b> (si consumano subito: il cibo);</li>
<li><b>strumentali</b> (o di produzione, capitali): servono a produrre altri beni (macchinari, computer di un'azienda, un forno);</li>
<li><b>complementari</b>: si usano insieme (auto e benzina, penna e inchiostro);</li>
<li><b>succedanei</b> (o sostituti): soddisfano lo stesso bisogno e possono sostituirsi (burro e margarina, treno e pullman).</li>
</ul>
<p>I <b>servizi</b> sono prestazioni, attività che soddisfano un bisogno senza produrre un oggetto: l'insegnamento, la visita medica, il trasporto, il taglio di capelli. Si producono e si consumano nello stesso momento e non si possono immagazzinare.</p>`
    },
    {
      type: "example",
      title: "La giornata di Sofia in beni e servizi",
      html: `<p>Sofia si sveglia (<b>bene libero</b>: l'aria, la luce), beve il caffè con lo zucchero (<b>beni di consumo non durevoli</b>, tra loro <b>complementari</b>). Va a scuola in autobus (<b>servizio</b> di trasporto pubblico) e studia con un tablet (<b>bene durevole</b>). Il suo insegnante offre un <b>servizio</b> di istruzione. La pizzeria usa il forno, un <b>bene strumentale</b>, per cucinare pizze. Se il prezzo del pullman sale, Sofia potrebbe preferire il treno: i due sono <b>sostituti</b>.</p>`
    },
    {
      type: "widget",
      title: "Bene o servizio?",
      widget: "classify",
      options: {
        groups: ["Bene", "Servizio"],
        items: [
          ["Un paio di scarpe", 0],
          ["Una lezione di chitarra", 1],
          ["Un panino", 0],
          ["Una visita dal medico", 1],
          ["Un trattore", 0],
          ["Il trasporto in treno", 1],
          ["Un libro", 0],
          ["Un taglio di capelli", 1]
        ]
      },
      caption: "Un bene è una cosa, un servizio è un'attività."
    },
    {
      type: "quiz",
      title: "Controlla subito",
      questions: [
        { type: "mc", q: "Quale tra questi è un bene strumentale?", options: ["Un forno di una pizzeria", "Un gelato", "Una canzone ascoltata"], answer: 0, explain: "Serve a produrre altri beni (le pizze); gli altri soddisfano direttamente un bisogno." },
        { type: "tf", q: "I bisogni umani sono limitati e ben presto tutti vengono soddisfatti.", answer: false, explain: "I bisogni sono illimitati: soddisfatto uno ne nasce un altro." },
        { type: "mc", q: "Penna e inchiostro sono beni…", options: ["Complementari", "Succedanei", "Liberi"], answer: 0, explain: "Si usano insieme; i succedanei si sostituiscono a vicenda." }
      ]
    },
    {
      type: "text",
      title: "4. La scarsità e il problema economico",
      html: `<p>Le risorse naturali, il tempo, il lavoro e il denaro sono <b>limitati</b>, mentre i bisogni sono <b>illimitati</b>. Questa contraddizione si chiama <b>scarsità</b> ed è all'origine dell'economia. Non significa che le risorse siano poche in assoluto, ma che sono <b>insufficienti</b> a soddisfare tutti i bisogni.</p>
<p>Poiché non si può avere tutto, ogni società (e ogni persona) deve rispondere a tre domande fondamentali:</p>
<ol>
<li><b>Che cosa produrre</b>, e in che quantità (più scuole o più strade? più cibo o più auto)?</li>
<li><b>Come produrre</b> (con molte macchine o con molto lavoro umano? con quali tecnologie?)?</li>
<li><b>Per chi produrre</b>: come distribuire i beni tra le persone?</li>
</ol>
<p>Le risposte a queste domande definiscono i diversi <b>sistemi economici</b> (che vedremo nella prossima lezione).</p>
<p>Per produrre si usano i <b>fattori della produzione</b>:</p>
<ul>
<li>il <b>lavoro</b> (l'attività di chi lavora, fisica o intellettuale);</li>
<li>la <b>terra</b> (le risorse naturali: suolo, acqua, minerali, energia);</li>
<li>il <b>capitale</b> (macchine, edifici, strumenti e denaro per acquistarli);</li>
<li>l'<b>imprenditorialità</b> (la capacità di organizzare i fattori e assumersi il rischio d'impresa; talvolta considerata un fattore a sé).</li>
</ul>
<p>Chi mette a disposizione un fattore riceve un compenso: il <b>salario</b> per il lavoro, la <b>rendita</b> per la terra, l'<b>interesse</b> per il capitale, il <b>profitto</b> per l'impresa.</p>`
    },
    {
      type: "text",
      title: "5. Scegliere ha un costo: il costo-opportunità",
      html: `<p>Poiché le risorse sono scarse, ogni scelta comporta una rinuncia. Il <b>costo-opportunità</b> di una scelta è il <b>valore della migliore alternativa a cui si rinuncia</b>. Non è solo il prezzo pagato: comprende anche ciò che avresti potuto fare con quel denaro o con quel tempo.</p>
<p>Esempi:</p>
<ul>
<li>Hai 20 euro: scegli il cinema (10 euro) o un libro (10 euro) per cui avresti pagato di più? Il costo-opportunità del cinema è il libro a cui rinunci.</li>
<li>Un'ora di studio del pomeriggio ha come costo-opportunità un'ora di sport con gli amici; il tempo è una risorsa scarsa anch'esso.</li>
<li>Uno Stato che spende di più per la difesa ha meno risorse per la scuola: è il vecchio dilemma "cannoni o burro".</li>
</ul>
<p>Gli economisti rappresentano questo problema con la <b>frontiera delle possibilità produttive</b>: un grafico che mostra le combinazioni massime di due beni che un'economia può produrre con le risorse di cui dispone. Per avere più dell'uno bisogna produrre meno dell'altro.</p>`
    },
    {
      type: "svg",
      title: "La frontiera delle possibilità produttive",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frontiera delle possibilità produttive">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<line x1="80" y1="250" x2="80" y2="30" stroke="#334155" stroke-width="2"/>
<line x1="80" y1="250" x2="540" y2="250" stroke="#334155" stroke-width="2"/>
<path d="M80,60 Q300,80 480,250" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3" fill-opacity="0.6"/>
<circle cx="250" cy="105" r="8" fill="#16a34a"/>
<text x="268" y="102" font-size="14" font-weight="bold" fill="#14532d">A: efficiente</text>
<circle cx="170" cy="190" r="8" fill="#f59e0b"/>
<text x="188" y="200" font-size="14" font-weight="bold" fill="#78350f">B: risorse sprecate</text>
<circle cx="450" cy="90" r="8" fill="#dc2626"/>
<text x="360" y="75" font-size="14" font-weight="bold" fill="#7f1d1d">C: irraggiungibile</text>
<text x="40" y="45" font-size="14" fill="#1e293b">Beni X</text>
<text x="490" y="275" font-size="14" fill="#1e293b">Beni Y</text>
</svg>`,
      caption: "I punti sulla curva sono combinazioni efficienti; quelli sotto indicano risorse non usate pienamente; quelli fuori sono irraggiungibili con le risorse attuali."
    },
    {
      type: "example",
      title: "Il costo-opportunità di un sabato",
      html: `<p>Luca ha un sabato libero e due opzioni: lavorare 5 ore in un negozio guadagnando 40 euro, oppure andare a un torneo di calcetto che gli piace molto (gratis). Se va al torneo, il suo <b>costo-opportunità</b> è <b>40 euro</b>: ciò a cui rinuncia. Se invece lavora, il costo-opportunità è il divertimento del torneo. Non c'è una scelta giusta in assoluto: dipende dal valore che Luca dà a ciascuna alternativa. Ma è un errore dire che andare al torneo "non costa niente".</p>`
    },
    {
      type: "curiosity",
      title: "Il paradosso dell'acqua e dei diamanti",
      html: `<p>Adam Smith, nel <i>La ricchezza delle nazioni</i> (1776), notò un paradosso: l'acqua è indispensabile alla vita ma costa pochissimo, i diamanti sono inutili per sopravvivere ma costano moltissimo. Il valore economico non dipende solo dall'utilità, ma dalla <b>scarsità</b>. Più tardi gli economisti spiegarono che conta l'<b>utilità marginale</b>: per chi ha tanta acqua, un litro in più vale poco; nel deserto, un solo bicchiere può valere moltissimo.</p>`
    },
    {
      type: "text",
      title: "6. L'utilità marginale decrescente",
      html: `<p>Quando consumi più unità dello stesso bene, l'<b>utilità</b> (la soddisfazione) di ogni unità aggiuntiva <b>diminuisce</b>. Il primo panino, quando hai molta fame, dà una grande soddisfazione; il secondo ne dà meno; il quinto potrebbe darti fastidio. Questa è la <b>legge dell'utilità marginale decrescente</b>.</p>
<p>È una ragione per cui le persone non spendono tutto in un solo bene, ma <b>diversificano i consumi</b>. E aiuta a spiegare come si forma il prezzo: se un bene è molto scarso, l'utilità dell'ultima unità resta alta e le persone sono disposte a pagare di più.</p>
<p>Il <b>valore</b> di un bene si distingue in <b>valore d'uso</b> (l'utilità che ha per chi lo usa) e <b>valore di scambio</b> (ciò che si può ottenere in cambio: il prezzo). L'acqua ha alto valore d'uso e basso valore di scambio; i diamanti il contrario.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>I <b>bisogni</b> sono illimitati; le <b>risorse</b> sono scarse. Da qui nasce l'economia.</li>
<li>Bisogni: primari/secondari, individuali/collettivi.</li>
<li>Beni (liberi, economici) e servizi. I beni possono essere di consumo o strumentali; complementari o succedanei.</li>
<li>Fattori di produzione: <b>lavoro, terra, capitale</b> (+ imprenditorialità).</li>
<li><b>Costo-opportunità</b>: il valore dell'alternativa migliore a cui rinunci.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la scarsità e la scelta",
      intro: "Il concetto di scelta economica è più semplice se lo vedi in azione.",
      tabs: [
        {
          label: "🍕 Il budget delle 20 euro",
          html: `<p>Hai 20 euro per il weekend: 10 per il cinema, 8 per la pizza, 15 per delle cuffie: in tutto 33 euro. Non bastano: devi scegliere. Se scegli cinema + pizza (18 euro), rinunci alle cuffie: il loro valore è il <b>costo-opportunità</b> della tua scelta. Fare un budget significa fare esattamente ciò che fa l'economia, in piccolo.</p>`
        },
        {
          label: "⏰ Il tempo come risorsa",
          html: `<p>Il tempo è la risorsa più scarsa di tutte: ogni giorno ha 24 ore per tutti. Un'ora per un videogioco è un'ora che non dedichi a studio, sonno o amici. Persino chi è ricchissimo ha un giorno solo di 24 ore. Per questo si dice che "il tempo è denaro": non perché sia uguale, ma perché ha sempre un costo-opportunità.</p>`
        },
        {
          label: "🌍 Il villaggio con una sola barca",
          html: `<p>In un villaggio c'è una sola barca. Può servire a pescare (cibo) o a trasportare merci al mercato (reddito). Ogni giorno in cui è usata per una cosa non è disponibile per l'altra. La comunità deve decidere <b>che cosa produrre</b>, <b>come</b> e <b>per chi</b>: sono le tre domande fondamentali di ogni sistema economico.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: il problema economico",
      nodes: [
        { id: "bisogni", label: "Bisogni illimitati", x: 20, y: 10, color: "#2563eb", html: "Primari e secondari, individuali e collettivi.", why: "I bisogni sono illimitati perché cambiano con la cultura, la tecnologia, il reddito: appena soddisfatti i bisogni vitali, emergono bisogni di sicurezza, appartenenza, stima (Maslow)." },
        { id: "risorse", label: "Risorse scarse", x: 80, y: 10, color: "#dc2626", html: "Terra, lavoro, capitale, tempo.", why: "Le risorse hanno un limite fisico (il pianeta, il tempo, le competenze). Il progresso tecnico lo sposta in avanti, ma non lo elimina." },
        { id: "scarsita", label: "Scarsità", x: 50, y: 38, color: "#a855f7", html: "Le risorse non bastano per tutti i bisogni.", why: "È il problema fondamentale dell'economia: se tutto fosse abbondante, non servirebbe scegliere né attribuire un prezzo ai beni." },
        { id: "scelta", label: "Scelta e costo-opportunità", x: 20, y: 68, color: "#16a34a", html: "Scegliere significa rinunciare a qualcosa.", why: "Ogni scelta ha un costo non solo in denaro ma in alternative perdute. Il concetto spiega perché esistono prezzi, risparmio, investimento, istruzione (rinunciare oggi per guadagnare domani)." },
        { id: "beni", label: "Beni e servizi", x: 80, y: 68, color: "#f59e0b", html: "Liberi/economici; di consumo/strumentali; servizi.", why: "Sono il modo in cui si soddisfano i bisogni. Solo i beni economici sono scarsi e quindi hanno prezzo: l'aria è un bene libero, l'acqua potabile no." },
        { id: "produzione", label: "Fattori di produzione", x: 50, y: 90, color: "#0891b2", html: "Lavoro, terra, capitale, imprenditorialità.", why: "Sono gli ingredienti con cui si producono beni e servizi. Chi li offre riceve un compenso: salario, rendita, interesse, profitto." }
      ],
      edges: [["bisogni", "scarsita", "si scontrano con"], ["risorse", "scarsita", "causano"], ["scarsita", "scelta", "obbliga a"], ["scarsita", "beni", "rende economici"], ["beni", "produzione", "prodotti con"]]
    },
    {
      type: "curiosity",
      title: "I beni liberi diventano economici",
      html: `<p>Un tempo l'acqua pulita era un bene libero per molte comunità. Oggi, per inquinamento e crescita della popolazione, in molte aree è un bene <b>economico</b>, con un prezzo (le bollette) e persino con conflitti per il suo uso. Anche l'aria pulita nelle grandi città tende a diventare scarsa: per questo esistono limiti alle emissioni e mercati dei "diritti di emissione".</p>`
    },
    {
      type: "quiz",
      title: "Secondo controllo",
      questions: [
        { type: "mc", q: "Qual è il costo-opportunità di passare il pomeriggio al cinema invece di lavorare per 30 euro?", options: ["Almeno 30 euro a cui si rinuncia", "Zero, perché il cinema è gratis", "Il prezzo del biglietto soltanto"], answer: 0, explain: "È il valore della migliore alternativa a cui si rinuncia: 30 euro non guadagnati (oltre al biglietto, se si paga)." },
        { type: "tf", q: "I servizi si possono immagazzinare come i beni.", answer: false, explain: "Un servizio si produce e si consuma nello stesso momento (una lezione, un viaggio in treno)." },
        { type: "mc", q: "Come si chiama il compenso per il capitale?", options: ["Interesse", "Salario", "Rendita"], answer: 0, explain: "Salario per il lavoro, rendita per la terra, interesse per il capitale, profitto per l'imprenditore." }
      ]
    }
  ],
  glossary: [
    { t: "Economia", d: "Scienza che studia come impiegare risorse scarse per soddisfare bisogni illimitati." },
    { t: "Bisogno", d: "Sensazione di mancanza di qualcosa unita al desiderio di soddisfarla." },
    { t: "Bene economico", d: "Bene scarso, che ha un prezzo e richiede lavoro per essere prodotto." },
    { t: "Bene libero", d: "Bene disponibile in quantità illimitata, senza costo, come l'aria." },
    { t: "Bene strumentale", d: "Bene usato per produrre altri beni (macchinari, attrezzature)." },
    { t: "Servizio", d: "Prestazione che soddisfa un bisogno senza produrre un oggetto." },
    { t: "Scarsità", d: "Insufficienza delle risorse rispetto ai bisogni illimitati." },
    { t: "Costo-opportunità", d: "Valore della migliore alternativa a cui si rinuncia compiendo una scelta." },
    { t: "Fattori della produzione", d: "Lavoro, terra, capitale (e imprenditorialità): le risorse usate per produrre." },
    { t: "Utilità marginale", d: "Soddisfazione aggiuntiva data da un'unità in più di un bene; di regola decresce." },
    { t: "Microeconomia e macroeconomia", d: "Studio dei singoli operatori e dei mercati (micro) e dell'intero sistema economico (macro)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché nasce il problema economico?", options: ["Perché le risorse sono scarse rispetto ai bisogni", "Perché i prezzi sono troppo alti", "Perché esiste il denaro"], answer: 0, explain: "La scarsità obbliga a scegliere." },
      { type: "tf", q: "L'aria è un classico esempio di bene libero.", answer: true, explain: "È disponibile in quantità illimitata senza dover pagare." },
      { type: "mc", q: "Quale è un bene complementare all'automobile?", options: ["La benzina", "Il pullman", "La bicicletta"], answer: 0, explain: "I complementari si usano insieme; pullman e bici sono succedanei." },
      { type: "text", q: "Come si chiama il valore della migliore alternativa a cui si rinuncia?", answer: ["costo-opportunità", "costo opportunità", "il costo-opportunità"], explain: "È il costo-opportunità." },
      { type: "mc", q: "Quale non è un fattore della produzione?", options: ["Il denaro dei consumatori", "Il lavoro", "La terra"], answer: 0, explain: "I fattori sono lavoro, terra, capitale (più imprenditorialità)." },
      { type: "order", q: "Metti in ordine i bisogni nella piramide di Maslow dal più basso al più alto.", items: ["Fisiologici", "Sicurezza", "Appartenenza", "Stima", "Autorealizzazione"], explain: "I bisogni più elementari vengono prima, quelli di realizzazione di sé sono in cima." },
      { type: "num", q: "Hai 30 euro e scegli di spendere 12 euro per il cinema e 18 per una pizza. Quanto ti resta?", answer: 0, tol: 0, unit: "euro", explain: "12 + 18 = 30: non ti resta nulla; ogni altra spesa avrebbe richiesto di rinunciare a qualcosa." },
      { type: "mc", q: "Un servizio è…", options: ["Un'attività che soddisfa un bisogno senza produrre un oggetto", "Un oggetto durevole", "Un bene strumentale"], answer: 0, explain: "Lezione, visita, trasporto sono servizi." },
      { type: "tf", q: "Secondo la legge dell'utilità marginale decrescente, ogni unità aggiuntiva dello stesso bene dà di regola meno soddisfazione.", answer: true, explain: "Il quinto panino dà meno piacere del primo." },
      { type: "mc", q: "La microeconomia studia…", options: ["Il comportamento dei singoli operatori e dei mercati", "L'intero prodotto nazionale", "La storia della moneta"], answer: 0, explain: "L'analisi dell'intero sistema è la macroeconomia." }
    ]
  }
});
