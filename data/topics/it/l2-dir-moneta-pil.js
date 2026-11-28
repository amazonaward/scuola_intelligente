TOPIC('it', {
  id: "l2-dir-moneta-pil",
  title: "Moneta, inflazione e PIL",
  intro: "Con 10 euro oggi compri meno di quanto compravi dieci anni fa. Ogni tanto sui giornali si legge che «il PIL è cresciuto dello 0,5%» o che «la BCE ha alzato i tassi». Che cosa è davvero la <b>moneta</b>? Chi la crea? Perché i prezzi, in media, salgono (<b>inflazione</b>)? E come si misura la ricchezza prodotta da un intero Paese (il <b>PIL</b>)? In questa lezione, dopo il mercato e i prezzi, costruisci gli strumenti per capire l'economia nel suo insieme: moneta, banche, banca centrale, inflazione, PIL e i suoi limiti.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è la moneta e a che cosa serve",
      html: `<p>Prima della moneta c'era il <b>baratto</b>: scambiare un bene con un altro. Funziona male, perché richiede la <b>doppia coincidenza dei bisogni</b>: se hai del grano e vuoi un paio di sandali, devi trovare un calzolaio che voglia proprio grano. La <b>moneta</b> risolve il problema: è ciò che tutti accettano in cambio di beni e servizi.</p>
<p>La moneta svolge tre funzioni classiche:</p>
<ul>
<li><b>mezzo di scambio</b>: si usa per comprare e vendere, evitando il baratto;</li>
<li><b>unità di conto</b>: serve a esprimere i prezzi di tutti i beni con la stessa misura (euro) e confrontarli;</li>
<li><b>riserva di valore</b>: permette di rimandare un acquisto, conservando potere d'acquisto nel tempo (purché non si svaluti troppo).</li>
</ul>
<p>Che cosa dà valore alla moneta di oggi, che è fatta di carta e numeri su uno schermo? La <b>fiducia</b>: la accettiamo perché sappiamo che anche gli altri la accetteranno, e perché una banca centrale e uno Stato la garantiscono. Si parla di moneta <b>fiduciaria</b> («fiducia» = <i>fides</i>). Non è convertibile in oro o argento.</p>`
    },
    {
      type: "widget",
      title: "Breve storia della moneta",
      widget: "timeline",
      options: {
        unit: "anno",
        events: [
          { year: -650, label: "Prime monete coniate in Lidia (Asia Minore)", icon: "🪙" },
          { year: 1000, label: "Banconote in Cina (dinastia Song)", icon: "📜" },
          { year: 1661, label: "Prime banconote europee in Svezia", icon: "💴" },
          { year: 1944, label: "Bretton Woods: dollaro agganciato all'oro", icon: "🏦" },
          { year: 1971, label: "Fine della convertibilità del dollaro in oro", icon: "❌" },
          { year: 1998, label: "Nasce la Banca centrale europea", icon: "🇪🇺" },
          { year: 2002, label: "Euro in contanti", icon: "💶" }
        ]
      },
      caption: "Dalle prime monete alla moneta fiduciaria."
    },
    {
      type: "text",
      title: "2. Forme di moneta e il ruolo delle banche",
      html: `<p>La moneta ha assunto forme diverse: <b>moneta merce</b> (sale, conchiglie, metalli con valore intrinseco), <b>moneta metallica</b> coniata (le prime monete in Lidia, intorno al VII secolo a.C.), <b>cartamoneta</b> (banconote), e oggi soprattutto <b>moneta bancaria o scritturale</b>: i depositi sui conti correnti, che si spostano con bonifici e carte, senza contanti. La maggior parte della moneta in circolazione oggi è fatta di semplici registrazioni elettroniche.</p>
<p>Le <b>banche</b> raccolgono i <b>risparmi</b> (depositi) e li prestano a imprese e famiglie, guadagnando sulla differenza tra gli interessi che pagano ai risparmiatori e quelli che chiedono a chi prende in prestito. Fanno quindi da <b>intermediari</b> tra chi ha risorse in più e chi ne ha bisogno. Per l'art. 47 della Costituzione la Repubblica «incoraggia e tutela il risparmio in tutte le sue forme; disciplina, coordina e controlla l'esercizio del credito».</p>
<p>Le banche non tengono in cassa tutti i depositi: ne conservano solo una parte (la <b>riserva</b>) e prestano il resto. Chi riceve un prestito lo deposita a sua volta in una banca, che ne ripresta una parte, e così via. Questo meccanismo, detto <b>moltiplicatore dei depositi</b>, fa sì che le banche creino moneta con i prestiti. È utile alla crescita ma rende il sistema vulnerabile: se tutti i correntisti chiedono insieme i propri soldi (<b>corsa agli sportelli</b>), la banca non può restituirli tutti. Per questo esistono controlli di vigilanza e <b>fondi di garanzia dei depositi</b>: nell'UE i depositi sono protetti fino a <b>100.000 euro</b> per depositante e per banca.</p>`
    },
    {
      type: "text",
      title: "3. La banca centrale e la BCE",
      html: `<p>Al vertice del sistema bancario c'è la <b>banca centrale</b>: una banca pubblica o indipendente che emette la moneta e guida il sistema del credito. Le sue funzioni principali sono:</p>
<ul>
<li>conduce la <b>politica monetaria</b>, cioè controlla la quantità di moneta e il costo del denaro (i <b>tassi di interesse</b>) per mantenere stabili i prezzi;</li>
<li>è «<b>banca delle banche</b>»: presta denaro alle banche commerciali e custodisce le loro riserve;</li>
<li>vigila sul sistema bancario e sui pagamenti.</li>
</ul>
<p>Nella <b>zona euro</b> la politica monetaria è affidata alla <b>Banca centrale europea (BCE)</b>, con sede a <b>Francoforte</b>, istituita il <b>1° giugno 1998</b>, che insieme alle banche centrali nazionali (la Banca d'Italia, fondata nel 1893, ne fa parte) forma l'<b>Eurosistema</b>. L'obiettivo principale è la <b>stabilità dei prezzi</b>: la BCE punta a un'inflazione del <b>2% annuo nel medio termine</b>. Ha anche altri compiti, come la vigilanza sulle grandi banche.</p>
<p>Come agisce? Con il <b>tasso di interesse</b> ufficiale: se la BCE <b>alza i tassi</b>, il credito costa di più, famiglie e imprese prendono meno prestiti, la domanda si raffredda e l'inflazione scende. Se li <b>abbassa</b>, il credito è più economico e l'economia viene stimolata. Un'altra politica è l'acquisto di titoli di Stato da parte della BCE (nel 2015-2018 e di nuovo dal 2019-2020), per immettere moneta.</p>
<p>La BCE è <b>indipendente</b>: i trattati vietano ai governi di darle ordini. L'indipendenza serve a proteggere le decisioni monetarie da pressioni politiche di breve periodo, come stampare moneta per finanziare le spese elettorali, che alla lunga produce inflazione.</p>`
    },
    {
      type: "svg",
      title: "Banche, famiglie e banca centrale",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flussi di denaro tra famiglie, banche, imprese e banca centrale">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<rect x="210" y="12" width="180" height="50" rx="10" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>
<text x="300" y="36" text-anchor="middle" font-size="16" font-weight="bold" fill="#4c1d95">BANCA CENTRALE</text>
<text x="300" y="54" text-anchor="middle" font-size="14" fill="#1e293b">fissa i tassi</text>
<rect x="210" y="110" width="180" height="60" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="300" y="136" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e3a8a">BANCHE</text>
<text x="300" y="156" text-anchor="middle" font-size="14" fill="#1e293b">depositi e prestiti</text>
<rect x="20" y="215" width="170" height="55" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="105" y="240" text-anchor="middle" font-size="16" font-weight="bold" fill="#14532d">FAMIGLIE</text>
<text x="105" y="258" text-anchor="middle" font-size="14" fill="#1e293b">risparmiano</text>
<rect x="410" y="215" width="170" height="55" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="495" y="240" text-anchor="middle" font-size="16" font-weight="bold" fill="#78350f">IMPRESE</text>
<text x="495" y="258" text-anchor="middle" font-size="14" fill="#1e293b">investono</text>
<line x1="300" y1="62" x2="300" y2="110" stroke="#6d28d9" stroke-width="3"/>
<line x1="150" y1="215" x2="240" y2="170" stroke="#15803d" stroke-width="3"/>
<text x="140" y="188" text-anchor="middle" font-size="14" font-weight="bold" fill="#15803d">depositi</text>
<line x1="360" y1="170" x2="450" y2="215" stroke="#b45309" stroke-width="3"/>
<text x="470" y="190" text-anchor="middle" font-size="14" font-weight="bold" fill="#b45309">prestiti</text>
</svg>`,
      caption: "Il denaro dei risparmiatori finanzia gli investimenti delle imprese; la banca centrale ne regola il costo."
    },
    {
      type: "quiz",
      title: "Controlla subito",
      questions: [
        { type: "mc", q: "Quali sono le tre funzioni della moneta?", options: ["Mezzo di scambio, unità di conto, riserva di valore", "Produzione, consumo, risparmio", "Prezzo, domanda, offerta"], answer: 0, explain: "Sono le funzioni classiche della moneta." },
        { type: "tf", q: "La BCE ha sede a Francoforte.", answer: true, explain: "È stata istituita nel 1998 e ha sede a Francoforte sul Meno." },
        { type: "mc", q: "Se la banca centrale alza i tassi di interesse, di solito…", options: ["Il credito costa di più e l'inflazione tende a scendere", "Il credito costa meno e l'inflazione sale", "Non succede nulla"], answer: 0, explain: "Prestiti più cari raffreddano la domanda." }
      ]
    },
    {
      type: "text",
      title: "4. L'inflazione",
      html: `<p>L'<b>inflazione</b> è l'aumento generalizzato e continuo del livello dei prezzi; di conseguenza il <b>potere d'acquisto</b> della moneta diminuisce: con la stessa somma si comprano meno beni. Si misura con l'<b>indice dei prezzi al consumo</b>, calcolato in Italia dall'ISTAT osservando i prezzi di un «paniere» di beni e servizi acquistati dalle famiglie (cibo, affitto, trasporti, energia, ecc.).</p>
<p>Il <b>tasso di inflazione</b> è la variazione percentuale dell'indice tra due periodi:</p>
<p style="text-align:center"><b>tasso = (P₁ − P₀) / P₀ × 100</b></p>
<p><b>Esempio</b>: se un panino costava 2,00 euro e dopo un anno costa 2,10 euro, l'inflazione è (2,10 − 2,00) / 2,00 = 0,05, cioè <b>5%</b>.</p>
<p>Le <b>cause</b> principali:</p>
<ul>
<li><b>inflazione da domanda</b>: troppa moneta e troppa domanda rispetto ai beni disponibili («troppi soldi per pochi beni»);</li>
<li><b>inflazione da costi</b>: aumentano i costi di produzione (energia, materie prime, salari) e le imprese li scaricano sui prezzi: è accaduto nel 1973-74 con la crisi petrolifera e nel 2021-22 con l'aumento dei prezzi dell'energia, dopo la pandemia e l'invasione dell'Ucraina;</li>
<li><b>aspettative</b>: se tutti si aspettano prezzi più alti, chiedono salari più alti e le imprese aumentano i prezzi, innescando una spirale.</li>
</ul>
<p>Effetti: <b>chi ha debiti</b> ne guadagna (restituisce in moneta svalutata), <b>chi ha risparmi in contanti</b> e <b>chi ha redditi fissi</b> (pensionati, lavoratori con stipendi non adeguati) ci perdono. L'inflazione eccessiva rende anche difficile fare programmi. Il caso estremo è l'<b>iperinflazione</b>: nella Germania di Weimar nel 1923 i prezzi raddoppiavano in pochi giorni, e a novembre un dollaro valeva circa 4.200 miliardi di marchi: i risparmi di una vita non valevano più nulla, e le conseguenze sociali e politiche furono gravissime.</p>
<p>Il fenomeno opposto, la <b>deflazione</b> (prezzi in calo prolungato), non è affatto un bene: le persone rinviano gli acquisti aspettando prezzi più bassi, l'economia rallenta e i debiti pesano di più. Per questo le banche centrali puntano a un'inflazione bassa e stabile, non a zero. La <b>stagflazione</b> (anni Settanta) è la combinazione di crescita debole e inflazione alta.</p>`
    },
    {
      type: "example",
      title: "Quanto vale davvero il mio stipendio?",
      html: `<p>Marco guadagna 1.500 euro al mese. Dopo un anno di inflazione al 4% il suo stipendio non è cambiato. I prezzi sono in media il 4% più alti: per comprare lo stesso paniere gli servirebbero 1.500 × 1,04 = <b>1.560 euro</b>. Il suo <b>potere d'acquisto</b> è calato: 1.500 / 1,04 ≈ <b>1.442 euro</b> «di prima». Questa è la differenza tra reddito <b>nominale</b> (quanto prende) e reddito <b>reale</b> (quanto può comprare). Se il suo stipendio fosse salito del 4%, il suo potere d'acquisto sarebbe rimasto invariato; se fosse salito dell'1%, avrebbe comunque perso il 3% in termini reali.</p>`
    },
    {
      type: "text",
      title: "5. Il PIL: misurare la ricchezza di un Paese",
      html: `<p>Il <b>prodotto interno lordo</b> (<b>PIL</b>) è il <b>valore di mercato di tutti i beni e servizi finali prodotti all'interno di un Paese in un certo periodo</b> (di solito un anno o un trimestre). Il PIL è l'indicatore più usato per misurare la dimensione di un'economia. Ogni parola conta:</p>
<ul>
<li><b>valore di mercato</b>: si sommano i prezzi, per poter confrontare cose diverse (mele e computer);</li>
<li><b>finali</b>: si contano solo i beni venduti a chi li usa, non quelli intermedi (il grano che diventa farina è già contato nel prezzo del pane), per evitare doppi conteggi;</li>
<li><b>interno</b>: conta la produzione sul territorio, a prescindere dalla nazionalità di chi produce (una fabbrica straniera in Italia fa parte del PIL italiano);</li>
<li><b>lordo</b>: senza sottrarre il deprezzamento dei macchinari.</li>
</ul>
<p>Si può calcolare in tre modi equivalenti: <b>produzione</b> (somma del valore aggiunto di tutte le imprese), <b>reddito</b> (somma dei redditi: salari, profitti, rendite) e <b>spesa</b>. Secondo l'ottica della spesa:</p>
<p style="text-align:center"><b>PIL = C + I + G + (X − M)</b></p>
<ul>
<li><b>C</b>: consumi delle famiglie;</li>
<li><b>I</b>: investimenti delle imprese (macchinari, edifici);</li>
<li><b>G</b>: spesa pubblica per beni e servizi;</li>
<li><b>X − M</b>: esportazioni meno importazioni (saldo commerciale con l'estero).</li>
</ul>
<p><b>PIL nominale</b> e <b>PIL reale</b>: il primo è misurato ai prezzi correnti, quindi cresce anche solo perché i prezzi salgono; il secondo è depurato dall'inflazione e misura la variazione effettiva della produzione. Per confrontare Paesi diversi si usa il <b>PIL pro capite</b> (PIL diviso per la popolazione).</p>
<p>Il <b>tasso di crescita</b> del PIL misura l'aumento percentuale: se il PIL passa da 1.800 a 1.854 miliardi, cresce del <b>3%</b> (54/1.800 = 0,03). Quando il PIL cala per due trimestri consecutivi si parla convenzionalmente di <b>recessione</b>; in Italia, nel 2020 con la pandemia, il PIL si ridusse di circa il 9%.</p>`
    },
    {
      type: "example",
      title: "Calcoliamo un PIL",
      html: `<p>In un piccolo Paese: consumi <b>C = 1.200</b>, investimenti <b>I = 300</b>, spesa pubblica <b>G = 400</b>, esportazioni <b>X = 350</b>, importazioni <b>M = 300</b> (miliardi).</p>
<p>PIL = C + I + G + (X − M) = 1.200 + 300 + 400 + (350 − 300) = <b>1.950 miliardi</b>.</p>
<p>Se la popolazione è di 50 milioni di abitanti, il PIL pro capite è 1.950.000 milioni / 50 milioni = <b>39.000 per abitante</b>. Se l'anno dopo C sale a 1.260 e le altre voci restano uguali, il PIL diventa 2.010: la crescita è (2.010 − 1.950) / 1.950 ≈ <b>3,1%</b>.</p>`
    },
    {
      type: "widget",
      title: "Le componenti del PIL",
      widget: "classify",
      options: {
        groups: ["Consumi (C)", "Investimenti (I)", "Spesa pubblica (G)", "Esportazioni nette"],
        items: [
          ["Una famiglia compra un frigorifero", 0],
          ["Un'impresa compra un nuovo macchinario", 1],
          ["Lo Stato costruisce una scuola", 2],
          ["Un'azienda italiana vende vino in Giappone", 3],
          ["Si va al ristorante", 0],
          ["Un'impresa costruisce un nuovo capannone", 1],
          ["Il Comune paga gli stipendi dei vigili", 2],
          ["Un'azienda italiana compra gas dall'estero (sottrae)", 3]
        ]
      },
      caption: "In quale voce rientra ciascun acquisto?"
    },
    {
      type: "text",
      title: "6. I limiti del PIL",
      html: `<p>Il PIL è utile, ma non misura tutto. Non è un indicatore di <b>benessere</b>. Che cosa non conta?</p>
<ul>
<li>il <b>lavoro domestico e di cura</b> non pagato (cucinare a casa, accudire i figli, il volontariato);</li>
<li>la <b>distribuzione</b> del reddito: due Paesi con lo stesso PIL pro capite possono essere uno molto equo e l'altro molto disuguale;</li>
<li>l'<b>ambiente</b>: un disastro ambientale può far <i>aumentare</i> il PIL (i soldi spesi per ripulire), e l'esaurimento delle risorse non viene sottratto;</li>
<li>l'<b>economia sommersa</b> e illegale (lavoro in nero), anche se alcune stime la inseriscono;</li>
<li>la <b>qualità della vita</b>: salute, istruzione, tempo libero, felicità, qualità delle relazioni.</li>
</ul>
<p>Già <b>Simon Kuznets</b>, che negli anni Trenta ne aveva sviluppato il calcolo per gli Stati Uniti, avvertiva che «il benessere di una nazione difficilmente può essere desunto da una misura del reddito nazionale». E nel 1968, il senatore <b>Robert Kennedy</b> disse che il PIL «misura tutto, eccetto ciò che rende la vita degna di essere vissuta».</p>
<p>Per questo sono nati altri indicatori:</p>
<ul>
<li>l'<b>Indice di sviluppo umano</b> (ISU o HDI), introdotto dall'ONU (UNDP) nel 1990 grazie agli economisti <b>Mahbub ul Haq</b> e <b>Amartya Sen</b>: combina reddito, istruzione e speranza di vita;</li>
<li>in Italia, il <b>BES</b> (Benessere equo e sostenibile), elaborato dall'ISTAT, che considera lavoro, salute, ambiente, sicurezza, relazioni;</li>
<li>gli <b>Obiettivi di sviluppo sostenibile</b> dell'Agenda 2030 dell'ONU (17 obiettivi, 2015).</li>
</ul>
<p>Un altro indicatore di sostenibilità finanziaria è il rapporto <b>debito pubblico/PIL</b>: confronta il debito accumulato dallo Stato con la ricchezza prodotta in un anno. Nel Trattato di Maastricht la soglia di riferimento è il 60%, e il deficit annuale non dovrebbe superare il 3% del PIL; l'Italia, con un rapporto ben superiore al 100%, è tra i Paesi più indebitati dell'UE.</p>`
    },
    {
      type: "decision",
      title: "Aumentare i tassi o salvare la crescita?",
      html: `<p>Sei nel consiglio della banca centrale. L'inflazione è al 9%, ben oltre il 2% di obiettivo, perché i prezzi di energia e cibo sono saliti. Ma l'economia è debole: le imprese faticano, la disoccupazione potrebbe salire. Se alzi i tassi, il credito costa di più e l'inflazione scende, ma si rischia di frenare l'economia. Se non lo fai, l'inflazione può diventare cronica.</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Non faccio nulla: l'inflazione è passeggera", outcome: "Se le aspettative restano ancorate, l'inflazione può rientrare da sola. Ma se salari e prezzi inseguono l'inflazione, essa si radica e poi servirà una stretta più dura." },
        { label: "Alzo i tassi gradualmente", outcome: "È la strada seguita dalla BCE nel 2022-23: costa un rallentamento dell'economia, ma tutela la fiducia nel potere d'acquisto e riporta l'inflazione verso il 2%." },
        { label: "Alzo i tassi di colpo e molto", outcome: "Raffredderebbe l'inflazione in fretta, ma rischierebbe di provocare recessione, fallimenti di imprese e difficoltà per chi ha mutui a tasso variabile." }
      ],
      answer: 1,
      explain: "Le banche centrali devono bilanciare due rischi opposti: troppa inflazione e troppo poca crescita. Nel 2022-2023 la BCE ha scelto una serie di rialzi dei tassi, dopo anni di tassi vicini a zero, per riportare l'inflazione verso il 2%; ha funzionato, con un costo per mutui e investimenti. Non esiste una scelta senza costi: ogni politica monetaria è un compromesso."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Moneta: <b>mezzo di scambio, unità di conto, riserva di valore</b>; oggi è basata sulla fiducia.</li>
<li>Le banche raccolgono risparmi e fanno prestiti (riserva frazionaria); i depositi UE sono garantiti fino a 100.000 euro.</li>
<li><b>BCE</b> (Francoforte, 1998): obiettivo <b>stabilità dei prezzi</b>, inflazione al 2% nel medio termine. Alzare i tassi = frenare l'inflazione.</li>
<li><b>Inflazione</b> = aumento generale dei prezzi; riduce il potere d'acquisto. Tasso = (P₁ − P₀)/P₀.</li>
<li><b>PIL</b> = valore dei beni e servizi finali prodotti in un Paese in un periodo = C + I + G + (X − M).</li>
<li>Il PIL <b>non misura il benessere</b>: ISU, BES e altri indicatori lo integrano.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire moneta, inflazione e PIL",
      intro: "Concetti astratti? Prova con queste analogie.",
      tabs: [
        {
          label: "🍕 La torta e le fette",
          html: `<p>Il <b>PIL</b> è la <b>torta</b> che un Paese cuoce in un anno. L'inflazione è come il suo prezzo: se la torta è la stessa ma i prezzi salgono, il PIL nominale cresce senza che ci sia più torta. Il <b>PIL reale</b> dice se la torta è davvero più grande. La <b>distribuzione</b> dice chi mangia le fette: due Paesi con la stessa torta possono avere fette ben diverse.</p>`
        },
        {
          label: "🏝️ Un'isola con le conchiglie",
          html: `<p>Su un'isola gli abitanti usano come moneta le conchiglie. Se un giorno qualcuno ne scopre un enorme deposito e ne distribuisce a piene mani, ogni conchiglia vale meno: i prezzi, espressi in conchiglie, salgono. È l'<b>inflazione da eccesso di moneta</b>. Se la banca centrale dell'isola ritira conchiglie, i prezzi calano. Per questo la quantità di moneta non può essere decisa a piacere.</p>`
        },
        {
          label: "🌡️ Il termostato",
          html: `<p>La banca centrale è come un <b>termostato</b>: l'economia è la stanza e l'inflazione è la temperatura. Se la stanza è troppo calda (inflazione alta), il termostato alza i tassi per raffreddarla; se è troppo fredda (recessione), li abbassa per scaldare. Ma il termostato reagisce con ritardo, e per questo può sbagliare di poco.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: moneta e PIL",
      nodes: [
        { id: "moneta", label: "Moneta", x: 15, y: 10, color: "#2563eb", html: "Mezzo di scambio, unità di conto, riserva di valore.", why: "Nasce per superare i limiti del baratto. Oggi è «fiduciaria»: vale perché gli altri la accettano e perché una banca centrale e uno Stato la garantiscono." },
        { id: "banche", label: "Banche", x: 50, y: 10, color: "#16a34a", html: "Raccolgono risparmi e fanno prestiti.", why: "Trasformano il risparmio in investimento, ma con la riserva frazionaria creano anche moneta e restano esposte al rischio di corse agli sportelli: da qui la vigilanza e la garanzia dei depositi." },
        { id: "bce", label: "BCE", x: 85, y: 10, color: "#a855f7", html: "Banca centrale dell'area euro: stabilità dei prezzi.", why: "Dopo l'esperienza dell'inflazione degli anni Settanta si decise di affidare la moneta a una banca indipendente dai governi, con un obiettivo chiaro: inflazione al 2% nel medio termine." },
        { id: "infl", label: "Inflazione", x: 30, y: 52, color: "#dc2626", html: "Aumento generalizzato dei prezzi, perdita di potere d'acquisto.", why: "Può nascere da domanda eccessiva, da costi più alti o da aspettative. I tassi della banca centrale sono la leva principale per contrastarla." },
        { id: "pil", label: "PIL", x: 70, y: 52, color: "#f59e0b", html: "Valore dei beni e servizi finali prodotti in un anno: C + I + G + (X − M).", why: "Si è affermato dopo la crisi del 1929 e la seconda guerra mondiale, perché i governi avevano bisogno di una misura per guidare la politica economica. Ha limiti: non misura benessere, ambiente e distribuzione." },
        { id: "ben", label: "Benessere", x: 50, y: 88, color: "#0891b2", html: "ISU, BES, Agenda 2030: oltre il PIL.", why: "Economisti come Sen hanno mostrato che ricchezza e benessere non coincidono: la ricchezza è un mezzo, non un fine. Per questo si affiancano al PIL indicatori di salute, istruzione, ambiente." }
      ],
      edges: [["moneta", "banche", "è creata da"], ["banche", "bce", "controllate da"], ["bce", "infl", "contrasta"], ["infl", "pil", "si toglie nel PIL reale"], ["pil", "ben", "è completato da"]]
    },
    {
      type: "curiosity",
      title: "Il dollaro da 100 trilioni",
      html: `<p>All'inizio del 2009 lo Zimbabwe, a causa di un'iperinflazione spaventosa, emise banconote da <b>100.000 miliardi di dollari zimbabwiani</b>, che bastavano a comprare pochissime cose. Nello stesso 2009 il Paese abbandonò la propria moneta e adottò dollari statunitensi e altre valute straniere. È un esempio estremo di quanto una moneta senza fiducia perda ogni valore.</p>`
    },
    {
      type: "curiosity",
      title: "Che cos'è il «paniere» dell'ISTAT",
      html: `<p>Ogni anno l'ISTAT aggiorna il <b>paniere</b> con cui calcola l'inflazione: all'elenco si aggiungono i prodotti nuovi (oggi, per esempio, i servizi in abbonamento online) e si tolgono quelli ormai scomparsi (come i vecchi rullini fotografici). Ogni mese migliaia di rilevatori raccolgono prezzi in centinaia di città, e molti dati arrivano oggi dagli scontrini elettronici e dai siti dei supermercati. Per questo l'inflazione ufficiale può essere diversa da quella che «sentiamo» noi: dipende dai beni che ciascuno compra.</p>`
    },
    {
      type: "quiz",
      title: "Secondo controllo",
      questions: [
        { type: "mc", q: "Che cosa misura il PIL?", options: ["Il valore dei beni e servizi finali prodotti in un Paese in un periodo", "La ricchezza accumulata dai cittadini", "Il debito dello Stato"], answer: 0, explain: "È un flusso (produzione in un periodo), non uno stock di ricchezza." },
        { type: "num", q: "Se un prodotto costa 50 euro e dopo un anno 52 euro, quanto vale l'inflazione in percentuale?", answer: 4, tol: 0, unit: "%", explain: "(52 − 50) / 50 = 0,04 → 4%." },
        { type: "tf", q: "Un PIL pro capite più alto significa sempre maggiore benessere per tutti.", answer: false, explain: "Il PIL pro capite non dice nulla sulla distribuzione del reddito né su salute, ambiente e qualità della vita." }
      ]
    }
  ],
  glossary: [
    { t: "Moneta", d: "Mezzo di scambio generalmente accettato, unità di conto e riserva di valore." },
    { t: "Moneta fiduciaria", d: "Moneta il cui valore si basa sulla fiducia e non su un metallo prezioso." },
    { t: "Banca centrale", d: "Istituzione che emette la moneta e conduce la politica monetaria." },
    { t: "BCE", d: "Banca centrale europea, con sede a Francoforte, responsabile della politica monetaria dell'area euro." },
    { t: "Tasso di interesse", d: "Prezzo del denaro: percentuale pagata per prendere in prestito una somma." },
    { t: "Inflazione", d: "Aumento generalizzato e continuo dei prezzi." },
    { t: "Deflazione", d: "Diminuzione generalizzata e prolungata dei prezzi." },
    { t: "Potere d'acquisto", d: "Quantità di beni che si possono comprare con una somma di denaro." },
    { t: "PIL", d: "Prodotto interno lordo: valore dei beni e servizi finali prodotti in un Paese in un periodo." },
    { t: "PIL reale", d: "PIL depurato dall'effetto dell'inflazione." },
    { t: "Recessione", d: "Fase di calo prolungato del PIL, di solito due trimestri consecutivi." },
    { t: "ISU", d: "Indice di sviluppo umano, che combina reddito, istruzione e speranza di vita." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è l'obiettivo principale della BCE?", options: ["Mantenere la stabilità dei prezzi", "Finanziare gli Stati", "Aumentare il PIL a ogni costo"], answer: 0, explain: "Con un'inflazione al 2% nel medio termine." },
      { type: "tf", q: "L'inflazione riduce il potere d'acquisto della moneta.", answer: true, explain: "Con la stessa somma si comprano meno beni." },
      { type: "num", q: "Se C = 500, I = 100, G = 150, X = 80, M = 60, quanto vale il PIL?", answer: 770, tol: 0, explain: "500 + 100 + 150 + (80 − 60) = 770." },
      { type: "mc", q: "Quale di queste funzioni NON è tipica della moneta?", options: ["Produrre beni", "Mezzo di scambio", "Unità di conto"], answer: 0, explain: "La moneta non produce beni: serve a scambiarli e a misurarne il valore." },
      { type: "text", q: "Come si chiama l'indicatore dell'ONU che combina reddito, istruzione e speranza di vita?", answer: ["indice di sviluppo umano", "isu", "hdi"], explain: "Introdotto nel 1990 dall'UNDP." },
      { type: "mc", q: "Che cosa accade di solito se la banca centrale alza i tassi?", options: ["Il credito costa di più e l'inflazione rallenta", "Il credito costa meno", "Aumenta la quantità di moneta"], answer: 0, explain: "Prestiti più cari riducono la domanda." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Prime monete in Lidia", "Banconote in Cina", "Bretton Woods", "Nascita della BCE", "Euro in contanti"], explain: "VII sec. a.C., X-XI sec., 1944, 1998, 2002." },
      { type: "mc", q: "Perché nel PIL si contano solo i beni finali?", options: ["Per evitare doppi conteggi", "Perché gli intermedi sono illegali", "Perché non hanno valore"], answer: 0, explain: "Il valore dei beni intermedi è già incluso nel prezzo del bene finale." },
      { type: "tf", q: "Il PIL nominale misura la crescita reale della produzione.", answer: false, explain: "Il PIL nominale è a prezzi correnti, quindi comprende l'effetto dell'inflazione; il PIL reale la elimina." },
      { type: "mc", q: "Quale limite ha il PIL come misura del benessere?", options: ["Non considera distribuzione, lavoro domestico e ambiente", "Non include i consumi", "Non include le imprese"], answer: 0, explain: "Per questo si usano anche indicatori come ISU e BES." }
    ]
  }
});
