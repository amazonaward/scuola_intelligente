TOPIC('it', {
  id: "l5-ita-pirandello",
  title: "Luigi Pirandello",
  intro: "Chi sei davvero? Quello che pensi di essere, quello che gli altri vedono in te, o nessuno dei due? <b>Luigi Pirandello</b> trasforma queste domande in romanzi, novelle e drammi che hanno cambiato la letteratura e il teatro del Novecento. Premio Nobel per la letteratura nel 1934, mette in scena l'<b>identità</b> che si frantuma, le <b>maschere</b> che la società ci impone, il contrasto tra <b>vita e forma</b>, il <b>relativismo</b> della verità. In questa lezione segui la sua vita e il saggio sull'<i>Umorismo</i>, entri in <i>Il fu Mattia Pascal</i> e <i>Uno, nessuno e centomila</i> e scopri perché <i>Sei personaggi in cerca d'autore</i> è considerato un caposaldo del teatro moderno.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "La vita: dalla Sicilia al Nobel",
      html: `<p><b>Luigi Pirandello</b> nasce il <b>28 giugno 1867</b> in contrada <b>Caos</b>, presso <b>Girgenti</b> (oggi Agrigento), in una famiglia benestante che deve la sua ricchezza al commercio dello zolfo. Studia a Palermo, Roma e infine a <b>Bonn</b>, dove si laurea nel 1891 in filologia romanza. Si stabilisce a Roma e sposa nel 1894 <b>Antonietta Portulano</b>, figlia di un socio del padre. Nel <b>1903</b> una frana allaga la miniera di zolfo in cui il padre aveva investito tutto il patrimonio (e la dote della moglie): la famiglia è rovinata e Antonietta, già fragile, sprofonda in una malattia mentale con forte <b>gelosia</b> paranoica. Pirandello la assiste per anni; nel 1919 deve ricoverarla in una clinica, dove resterà fino alla morte. Questa esperienza lascia un segno profondo sulla sua visione della realtà come inganno e della famiglia come «trappola».</p>
<p>Per vivere insegna italiano all'Istituto Superiore di Magistero a Roma (dal 1897 al 1922) e scrive moltissimo. Il grande successo arriva con il romanzo <b>Il fu Mattia Pascal</b> (1904); negli anni Dieci si dedica al <b>teatro</b>. Nel 1924 aderisce al <b>fascismo</b> (una scelta controversa e legata anche al sostegno al suo Teatro d'Arte); nel 1925 fonda a Roma il <b>Teatro d'Arte</b> e gira l'Europa con la compagnia. Nel <b>1934</b> riceve il <b>Premio Nobel per la letteratura</b>. Muore a Roma il <b>10 dicembre 1936</b>; le sue ceneri, secondo la sua volontà, furono portate in Sicilia, nella campagna del Caos.</p>`
    },
    {
      type: "widget",
      title: "Pirandello in date",
      widget: "timeline",
      options: { events: [
        { year: 1867, label: "Nasce a Girgenti (Agrigento)", icon: "🌋" },
        { year: 1903, label: "Allagamento della zolfara", icon: "⛏️" },
        { year: 1904, label: "Il fu Mattia Pascal", icon: "📖" },
        { year: 1908, label: "Saggio L'umorismo", icon: "🎭" },
        { year: 1921, label: "Sei personaggi in cerca d'autore", icon: "🎬" },
        { year: 1922, label: "Enrico IV", icon: "👑" },
        { year: 1926, label: "Uno, nessuno e centomila", icon: "🪞" },
        { year: 1934, label: "Premio Nobel", icon: "🏅" },
        { year: 1936, label: "Muore a Roma", icon: "🕯️" }
      ], unit: "anno" },
      caption: "Dalla Sicilia all'Europa: la vita personale (zolfara, follia della moglie) alimenta l'opera."
    },
    {
      type: "remember",
      title: "Il nucleo del pensiero: vita e forma, maschera, relativismo",
      html: `<ul>
<li><b>Vita e forma</b>: la vita è un flusso continuo, mutevole, istintivo; per vivere in società abbiamo bisogno di <b>fissarla in forme</b> (ruoli, nomi, regole, convenzioni). Ma la forma irrigidisce la vita: l'uomo si trova «chiuso» in una parte che non è più sua.</li>
<li><b>Le maschere</b>: ciascuno indossa maschere diverse a seconda delle persone (figlio, impiegato, marito, amico); sotto le maschere non c'è un «io» unico e stabile, ma una molteplicità di «io». Quando ce ne accorgiamo, scopriamo di non essere nessuno.</li>
<li><b>Relativismo</b>: la verità non è una sola; ciascuno la vede dal suo punto di vista. Non ci sono fatti oggettivi, ma «verità» soggettive che si scontrano.</li>
<li><b>Frantumazione dell'io</b>: l'identità personale, che l'Ottocento considerava solida, si dissolve in «uno, nessuno e centomila».</li>
<li><b>La «trappola»</b>: famiglia, lavoro, istituzioni sono gabbie che imprigionano; ma uscirne è quasi impossibile o porta alla follia.</li>
<li><b>Umorismo</b>: lo sguardo che coglie contemporaneamente il comico e il tragico, la forma e il suo contrario.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Vita, forma e maschera",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<g font-family="sans-serif" font-size="15" text-anchor="middle">
<path d="M30 150 C90 70 150 230 210 150 S330 70 390 150" stroke="#7c3aed" stroke-width="5" fill="none"/>
<text x="210" y="60" fill="#5b21b6" font-weight="bold">VITA: flusso continuo</text>
<text x="210" y="82" fill="#5b21b6">istinto, cambiamento, sentimento</text>
<rect x="430" y="90" width="140" height="120" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="4"/>
<text x="500" y="125" fill="#78350f" font-weight="bold">FORMA</text>
<text x="500" y="150" fill="#78350f">ruolo, nome,</text>
<text x="500" y="170" fill="#78350f">regola, maschera</text>
<path d="M395 150 L428 150" stroke="#0f172a" stroke-width="4"/>
<polygon points="428,142 442,150 428,158" fill="#0f172a"/>
<rect x="100" y="235" width="400" height="48" rx="12" fill="#fee2e2" stroke="#991b1b" stroke-width="3"/>
<text x="300" y="256" fill="#7f1d1d" font-weight="bold">La forma blocca la vita: da qui il disagio</text>
<text x="300" y="276" fill="#7f1d1d">e il sentimento del contrario (umorismo)</text>
</g>
</svg>`,
      caption: "La vita che scorre viene irrigidita dalla forma: il conflitto è il motore dell'opera pirandelliana."
    },
    {
      type: "text",
      title: "L'umorismo (1908)",
      html: `<p>Nel saggio <b>L'umorismo</b> (1908) Pirandello distingue il <b>comico</b> dall'<b>umoristico</b>. Il comico nasce dall'<b>avvertimento del contrario</b>: vediamo una vecchia signora con i capelli tinti, il trucco pesante, abiti da ragazza, e ridiamo perché è il contrario di ciò che una signora anziana «dovrebbe» essere. L'umorismo nasce da una <b>riflessione ulteriore</b>: pensiamo che quella signora, forse, si trucca così perché cerca di trattenere l'amore del marito più giovane, e ci dispiace per lei. Il riso si fa dolente: è il <b>sentimento del contrario</b>. L'umorista scompone la figura, la guarda da dentro, e vede insieme la comicità e il dolore.</p>
<p>L'umorismo è il modo di guardare il mondo di Pirandello: sotto la maschera c'è sempre una persona che soffre. La sua prosa e il suo teatro sono pieni di <b>paradossi</b>, ragionamenti logici portati all'estremo, battute amare.</p>`
    },
    {
      type: "example",
      title: "Il comico e l'umoristico oggi",
      html: `<p>Vedi un amico che inciampa e cade in mezzo alla strada: ridi (<b>avvertimento del contrario</b>: si aspettava di camminare con eleganza). Poi scopri che aveva una gamba ferita e non voleva farlo sapere: il sorriso si trasforma in compassione (<b>sentimento del contrario</b>). Lo stesso succede quando guardi un video virale: all'inizio sembra divertente, poi pensi alla persona che lo vive e capisci che dietro c'è fragilità. L'umorismo pirandelliano è proprio questo secondo sguardo.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: pensiero e umorismo",
      questions: [
        { type: "mc", q: "Che cos'è il «sentimento del contrario»?", options: ["La riflessione che trasforma il riso in compassione", "Il semplice scherzo", "Una forma di satira politica", "Una figura retorica"], answer: 0, explain: "È ciò che distingue l'umorismo dal comico." },
        { type: "tf", q: "Per Pirandello l'identità di una persona è una e stabile.", answer: false, explain: "È frantumata in molte maschere: «uno, nessuno e centomila»." },
        { type: "mc", q: "Quale evento del 1903 rovinò la famiglia di Pirandello?", options: ["L'allagamento della miniera di zolfo", "Un incendio", "Una guerra", "Un fallimento bancario"], answer: 0, explain: "Il padre aveva investito il patrimonio nella zolfara." },
        { type: "mc", q: "In che anno ricevette il Nobel?", options: ["1934", "1921", "1926", "1936"], answer: 0, explain: "Premio Nobel per la letteratura, 1934." }
      ]
    },
    {
      type: "text",
      title: "Il fu Mattia Pascal (1904)",
      html: `<p>Il romanzo è narrato in prima persona da <b>Mattia Pascal</b>, un modesto bibliotecario di <b>Miragno</b>, paesino (inventato) della Liguria. Mattia ha una vita insoddisfacente: la morte del padre e le sue speculazioni lo hanno impoverito; sposa Romilda, prigioniero di una suocera tirannica (la «vedova Pescatore»); perde la madre e la figlioletta nello stesso giorno. Fugge da casa e a <b>Montecarlo</b> vince al casinò una grossa somma (82.000 lire). Mentre torna a casa legge su un giornale la notizia che a Miragno è stato trovato un cadavere affogato in una gora, riconosciuto come il suo. Mattia capisce di poter ricominciare da capo: è «morto» e libero.</p>
<p>Assume un nuovo nome, <b>Adriano Meis</b>, e viaggia, poi si stabilisce a <b>Roma</b>, in casa del signor <b>Anselmo Paleari</b>, che gli presenta la sua «<b>lanterninosofia</b>»: nei momenti di buio l'uomo si accende i «lanternini» (le illusioni, le fedi, le idee) che rischiarano la strada. Qui Adriano si innamora di <b>Adriana</b>, la figlia di Paleari, ma scopre che senza identità non può sposarsi, né denunciare un furto subito, né andare dalla polizia: è <b>un uomo senza stato civile</b>, e quindi senza diritti. Messo alle strette, simula il <b>suicidio di Adriano Meis</b> e torna a Miragno come Mattia Pascal. Ma la moglie Romilda si è risposata con l'amico <b>Pomino</b> e ha una figlia: Mattia è davvero «fu», non esiste più. Non rimane che andare a visitare la propria tomba, nel cimitero, e convivere con il suo nome vuoto: «<i>Io sono il fu Mattia Pascal</i>».</p>
<p>La forma vince sulla vita: senza una «forma» (nome, documenti) non si vive; ma con una forma troppo rigida si soffoca. Il romanzo contiene l'immagine memorabile dello <b>strappo nel cielo di carta</b>: durante uno spettacolo di marionette in cui Oreste sta per vendicarsi, un buco nel fondale di carta fa crollare l'illusione: davanti a quello strappo Oreste, osserva Adriano, diventerebbe un Amleto, incapace di agire. Per Pirandello l'uomo moderno è così: gli manca la certezza di un fondale stabile.</p>`
    },
    {
      type: "example",
      title: "Le maschere nella tua giornata",
      html: `<p>Con la nonna sei «il nipote educato», con gli amici lo scherzoso del gruppo, in classe il bravo (o il distratto) di turno, online un profilo curato con cura. Nessuna di queste versioni è falsa, ma nessuna è «tutto te». Pirandello direbbe che ognuno di noi è un po' Vitangelo Moscarda: gli altri ci costruiscono addosso un'immagine, e noi finiamo per recitarla. La domanda del romanzo resta aperta: se togliamo tutte le maschere, che cosa rimane?</p>`
    },
    {
      type: "curiosity",
      title: "Mattia Pascal al cinema e a teatro",
      html: `<p>Il romanzo ha avuto molte versioni cinematografiche: la più nota è quella muta del francese <b>Marcel L'Herbier</b> (<i>Feu Mathias Pascal</i>, 1925); in Italia il regista <b>Mario Monicelli</b> ne ha tratto nel 1985 <i>Le due vite di Mattia Pascal</i>, con Marcello Mastroianni. È un testo molto attuale: oggi, con identità digitali e profili falsi, il tema del «doppio» e di una seconda vita è più vicino che mai.</p>`
    },
    {
      type: "text",
      title: "Uno, nessuno e centomila (1926)",
      html: `<p>È l'ultimo romanzo di Pirandello, scritto lungo molti anni e pubblicato nel 1926. Il protagonista, <b>Vitangelo Moscarda</b>, vive a Richieri (città inventata), ereditando dal padre una banca. Un giorno la moglie <b>Dida</b> gli fa notare che il suo naso «pende verso destra». È un dettaglio banale, ma lo sconvolge: Vitangelo comprende che gli altri lo vedono in modo diverso da come si vede lui. Per sua moglie è un Gengè, per i soci della banca è l'usuraio, per gli amici è un'altra persona ancora: <b>«centomila» Moscarda diversi</b>, tutti veri e tutti inesistenti. Così la sua identità si frantuma: «uno» (come si crede), «centomila» (come lo vedono gli altri), «nessuno» (perché nessuna immagine è davvero lui).</p>
<p>Per ribellarsi a questo meccanismo, Vitangelo vuole distruggere le immagini che gli altri hanno di lui: licenzia i dipendenti, liquida la banca, dona i suoi beni. Tutti lo credono pazzo e si tenta perfino di interdirlo. Alla fine rinuncia al nome, vive in un ospizio da lui stesso fondato e <b>si lascia vivere</b> momento per momento, in comunione con la natura, rinascendo ogni attimo: «<i>Non mi conosco più</i>». La follia si trasforma in liberazione.</p>`
    },
    {
      type: "text",
      title: "Le novelle e il teatro",
      html: `<p>Le <b>Novelle per un anno</b> (progetto di 365 novelle, in realtà ne scrisse circa 240, raccolte in 15 volumi pubblicati tra 1922 e 1937) sono un laboratorio di personaggi. Tra le più famose: <b>La carriola</b> (un avvocato stimato, per sfuggire al peso della propria «forma» sociale, compie ogni tanto un gesto segreto e assurdo con il suo cane), <b>Il treno ha fischiato</b> (un impiegato che impazzisce dopo aver sentito il fischio di un treno che gli ricorda la vita che non ha vissuto), <b>La patente</b> (uno iettatore che chiede la «patente» ufficiale di iettatore per guadagnarsi da vivere), <b>Ciaula scopre la luna</b> (un minatore che per la prima volta vede la luna e ne resta commosso).</p>
<p>Il <b>teatro</b> è il genere in cui Pirandello cambia davvero la scena europea. Si parla di «<b>teatro dello specchio</b>» (i personaggi si vedono con gli occhi altrui), di «<b>teatro del grottesco</b>» (<i>Il giuoco delle parti</i>, 1918; <i>Il piacere dell'onestà</i>, 1917) e infine di «<b>metateatro</b>» (teatro nel teatro):</p>
<ul>
<li><b>Così è (se vi pare)</b> (1917): in una cittadina di provincia arrivano il signor Ponza, la moglie e la suocera, la signora Frola. Ponza dice che la suocera è pazza e crede che la figlia (la sua prima moglie) sia ancora viva; la signora Frola dice invece che il pazzo è il genero. Due versioni opposte, nessuna prova. Alla fine la signora Ponza, interrogata, risponde di essere <i>«colei che mi si crede»</i>: ognuno ha la sua verità.</li>
<li><b>Sei personaggi in cerca d'autore</b> (1921): una compagnia sta provando una commedia quando sul palcoscenico entrano <b>sei personaggi</b> (Padre, Madre, Figliastra, Figlio, Giovinetto, Bambina) che chiedono di rappresentare il proprio dramma, già concepito da un autore che li ha abbandonati. Non possono essere interpretati dagli attori, perché ogni personaggio è irripetibile. La prima, a Roma (Teatro Valle, 9 maggio 1921), fu accolta da fischi; il successo arrivò subito dopo, in Italia e in Europa.</li>
<li><b>Enrico IV</b> (1922): un uomo, dopo una caduta da cavallo durante una mascherata in cui impersonava Enrico IV di Franconia, crede di essere davvero l'imperatore. Guarito, continua a fingere la follia per sfuggire alla vita. Quando lo smascherano, uccide un rivale (Belcredi) e resta per sempre nella parte: la maschera è diventata destino.</li>
</ul>
<p>Il testo teatrale, per Pirandello, è un testo «vivo» che subisce la «forma» degli attori: tra quello che l'autore ha in mente e quello che il pubblico vede c'è sempre una distanza incolmabile.</p>`
    },
    {
      type: "curiosity",
      title: "Quando il pubblico fischiò i Sei personaggi",
      html: `<p>Alla prima dei <i>Sei personaggi</i> (Roma, Teatro Valle, 9 maggio 1921), parte del pubblico si indignò per quella novità inattesa e fischiò la rappresentazione; qualcuno gridò «Manicomio!». Pirandello dovette fuggire dal teatro con la figlia Lietta. Pochi mesi dopo, a Milano, lo spettacolo ebbe un trionfo e da lì cominciò a girare il mondo, diventando uno dei testi più rappresentati del Novecento.</p>`
    },
    {
      type: "curiosity",
      title: "Pirandello e il cinema",
      html: `<p>Pirandello scrisse anche un romanzo sul nascente cinema: <b>Quaderni di Serafino Gubbio operatore</b> (1915, poi 1925). Il protagonista è un operatore cinematografico che, girando film, si sente trasformato in una macchina: la sua mano gira la manovella ma non decide nulla. È uno dei primi testi a riflettere sulla disumanizzazione della tecnica e sul rapporto uomo-macchina, tema che oggi chiamiamo anche «intelligenza artificiale» e «algoritmi».</p>`
    },
    {
      type: "decision",
      title: "Mattia Pascal: ricominciare da morto?",
      html: `<p>Sei Mattia Pascal. Hai vinto una fortuna a Montecarlo, ma una vita infelice ti aspetta a casa. Leggi sul giornale che il tuo corpo è stato ritrovato e identificato come tuo: per tutti sei morto.</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Torno e dichiaro che sono vivo", outcome: "Riprenderesti la tua vita infelice: moglie, suocera, debiti. Ma resteresti Mattia Pascal, con diritti e identità." },
        { label: "Resto «morto» e mi invento una nuova identità", outcome: "È la scelta di Mattia: diventa Adriano Meis. All'inizio è libero, ma senza un'identità legale non può né amare né difendersi dai ladri." },
        { label: "Scompaio e vivo in un luogo lontano senza dare nome", outcome: "Saresti totalmente libero ma anche completamente solo, senza rapporti, come un fantasma." }
      ],
      answer: 1,
      explain: "Mattia sceglie la strada di Adriano Meis: per Pirandello la libertà totale è una illusione, perché una persona esiste solo dentro una forma sociale (nome, documenti, relazioni). Tornato a Miragno, Mattia scopre che la sua vecchia vita si è chiusa senza di lui."
    },
    {
      type: "alternatives",
      title: "Altri modi per ricordare Pirandello",
      intro: "Abbinamenti, carte e un diagramma per capire maschere e identità.",
      tabs: [
        {
          label: "🔗 Abbina opera e trama",
          html: "<p>Collega ogni opera al suo nucleo.</p>",
          widget: "match",
          options: { pairs: [
            ["Il fu Mattia Pascal", "Uomo creduto morto che si crea un'altra identità"],
            ["Uno, nessuno e centomila", "Il naso che pende e la frantumazione dell'io"],
            ["Sei personaggi in cerca d'autore", "Personaggi abbandonati dall'autore irrompono sul palco"],
            ["Enrico IV", "Finzione di follia che diventa destino"],
            ["Così è (se vi pare)", "Una verità doppia: la signora Ponza"],
            ["Il treno ha fischiato", "Novella: l'impiegato che impazzisce sentendo un treno"]
          ] }
        },
        {
          label: "🃏 Carte di Pirandello",
          html: "<p>Concetti chiave.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "Umorismo", back: "Sentimento del contrario: il riso che si fa riflessione dolente" },
            { front: "Maschera", back: "La parte che la società ci impone, che nasconde i molti «io»" },
            { front: "Lanterninosofia", back: "Idea di Paleari: le illusioni sono lanternini che rischiarano il buio" },
            { front: "Strappo nel cielo di carta", back: "Immagine della perdita dei punti fermi nel mondo moderno" },
            { front: "Metateatro", back: "Teatro che parla del teatro stesso (Sei personaggi)" },
            { front: "Relativismo", back: "Non esiste una verità sola: ciascuno ha la sua" }
          ] }
        },
        {
          label: "🎭 Le maschere di Moscarda",
          html: "<p>Una persona, tante immagini: nessuna è «quella vera».</p>",
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fff7ed"/><g font-family="sans-serif" font-size="15" text-anchor="middle"><circle cx="300" cy="150" r="45" fill="#fde68a" stroke="#92400e" stroke-width="3"/><text x="300" y="148" fill="#78350f" font-weight="bold">Vitangelo</text><text x="300" y="168" fill="#78350f">Moscarda</text><circle cx="90" cy="60" r="38" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/><text x="90" y="65" fill="#1e3a8a">per Dida</text><circle cx="510" cy="60" r="38" fill="#bbf7d0" stroke="#166534" stroke-width="3"/><text x="510" y="65" fill="#14532d">per i soci</text><circle cx="90" cy="245" r="38" fill="#fecaca" stroke="#991b1b" stroke-width="3"/><text x="90" y="250" fill="#7f1d1d">per gli amici</text><circle cx="510" cy="245" r="38" fill="#e9d5ff" stroke="#6b21a8" stroke-width="3"/><text x="510" y="250" fill="#581c87">per i debitori</text><path d="M128 78 L260 125 M472 78 L340 125 M128 228 L260 175 M472 228 L340 175" stroke="#0f172a" stroke-width="3"/></g></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di Pirandello",
      nodes: [
        { id: "pirandello", label: "Pirandello", x: 50, y: 8, color: "#ef4444", html: "Girgenti 1867 - Roma 1936; Nobel 1934.", why: "La rovina economica e la follia della moglie lo portano a vedere la realtà come trappola e inganno." },
        { id: "umorismo", label: "Umorismo", x: 15, y: 40, color: "#f59e0b", html: "Avvertimento e sentimento del contrario.", why: "È il metodo di sguardo: smontare la forma per vedere la vita che soffre dietro." },
        { id: "romanzi", label: "Romanzi", x: 40, y: 40, color: "#0ea5e9", html: "Il fu Mattia Pascal, Uno nessuno e centomila.", why: "Raccontano l'impossibilità di un'identità unica e stabile." },
        { id: "teatro", label: "Teatro", x: 65, y: 40, color: "#22c55e", html: "Così è, Sei personaggi, Enrico IV.", why: "Il teatro mostra l'incontro/scontro tra personaggi e attori, vita e forma, verità e finzione." },
        { id: "novelle", label: "Novelle", x: 88, y: 40, color: "#8b5cf6", html: "Novelle per un anno.", why: "Casi quotidiani e paradossali che illustrano le trappole della società." },
        { id: "vitaforma", label: "Vita e forma", x: 28, y: 78, color: "#64748b", html: "Il flusso della vita è bloccato dalle forme sociali.", why: "È la causa del disagio: per vivere dobbiamo irrigidirci in ruoli che non ci corrispondono." },
        { id: "relativismo", label: "Relativismo e maschere", x: 72, y: 78, color: "#ec4899", html: "Ciascuno ha la sua verità; l'io si frantuma.", why: "Dopo la crisi del Positivismo, non c'è più una realtà oggettiva sicura." }
      ],
      edges: [["pirandello", "umorismo", "teorizza"], ["pirandello", "romanzi", "scrive"], ["pirandello", "teatro", "rivoluziona il"], ["pirandello", "novelle", "scrive"], ["umorismo", "vitaforma", "rivela"], ["teatro", "relativismo", "mette in scena il"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz finale",
      questions: [
        { type: "mc", q: "Come si chiama il personaggio che, dopo la «morte», assume una nuova identità?", options: ["Adriano Meis", "Vitangelo Moscarda", "Zeno Cosini", "Enrico IV"], answer: 0, explain: "Mattia Pascal diventa Adriano Meis." },
        { type: "mc", q: "Da quale particolare del suo aspetto Vitangelo Moscarda comincia a dubitare di sé?", options: ["Il naso che pende a destra", "Un neo sul braccio", "La statura", "Il colore degli occhi"], answer: 0, explain: "È la moglie Dida a farglielo notare." },
        { type: "order", q: "Ordina cronologicamente.", items: ["Il fu Mattia Pascal", "L'umorismo", "Sei personaggi in cerca d'autore", "Uno, nessuno e centomila"], explain: "1904, 1908, 1921, 1926." }
      ]
    }
  ],
  glossary: [
    { t: "Umorismo", d: "In Pirandello, sguardo che unisce comico e tragico attraverso il «sentimento del contrario»." },
    { t: "Avvertimento del contrario", d: "La percezione immediata che una cosa è l'opposto di ciò che dovrebbe essere (il comico)." },
    { t: "Sentimento del contrario", d: "La riflessione che trasforma il riso in compassione (l'umoristico)." },
    { t: "Maschera", d: "La parte sociale che l'individuo recita davanti agli altri." },
    { t: "Relativismo", d: "Idea che non esista una verità unica ma tante prospettive." },
    { t: "Metateatro", d: "Teatro che mette in scena il teatro stesso." },
    { t: "Lanterninosofia", d: "Filosofia di Anselmo Paleari nel Fu Mattia Pascal: le illusioni come piccoli lumi nel buio." },
    { t: "Trappola", d: "Condizione di prigionia sociale (famiglia, lavoro) da cui è difficile uscire." },
    { t: "Grottesco", d: "Stile del teatro pirandelliano del periodo 1917-1920, fatto di situazioni paradossali." },
    { t: "Straniamento", d: "Il guardare una situazione abituale come se fosse nuova, scoprendone l'assurdità." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dove nacque Pirandello?", options: ["Girgenti (Agrigento)", "Catania", "Palermo", "Messina"], answer: 0, explain: "Nella contrada Caos, vicino a Girgenti." },
      { type: "tf", q: "Per Pirandello la «forma» è ciò che irrigidisce la vita nelle convenzioni sociali.", answer: true, explain: "Il contrasto vita/forma è il centro del suo pensiero." },
      { type: "mc", q: "Come si chiama il saggio del 1908 in cui teorizza l'umorismo?", options: ["L'umorismo", "Il comico", "La risata", "Saggio sull'arte"], answer: 0, explain: "Distingue comico e umoristico." },
      { type: "mc", q: "Dove vince la somma di denaro Mattia Pascal?", options: ["Al casinò di Montecarlo", "A una lotteria a Roma", "Con un'eredità", "A Venezia"], answer: 0, explain: "Poi legge la notizia della sua morte." },
      { type: "mc", q: "In Uno, nessuno e centomila che cosa decide di fare Vitangelo Moscarda?", options: ["Distruggere le immagini che gli altri hanno di lui", "Fuggire in America", "Diventare sacerdote", "Scrivere un libro"], answer: 0, explain: "Liquida la banca e rinuncia al proprio nome." },
      { type: "text", q: "Come si chiama il mestiere di Serafino Gubbio, protagonista del romanzo pirandelliano sul cinema?", answer: ["operatore", "operatore cinematografico", "cameraman"], explain: "Quaderni di Serafino Gubbio operatore." },
      { type: "mc", q: "Che cosa chiedono i sei personaggi alla compagnia teatrale?", options: ["Di rappresentare il loro dramma", "Di essere pagati", "Di cambiare il copione", "Di andarsene"], answer: 0, explain: "Sono personaggi abbandonati dal loro autore." },
      { type: "num", q: "In che anno Pirandello ricevette il premio Nobel?", answer: 1934, tol: 0, explain: "Per il rinnovamento dell'arte drammatica." },
      { type: "mc", q: "Chi è il protagonista del dramma in cui un uomo finge la pazzia dopo la caduta da cavallo?", options: ["Enrico IV", "Mattia Pascal", "Il Padre", "Gengè"], answer: 0, explain: "Il dramma Enrico IV è del 1922." },
      { type: "order", q: "Ordina le tappe della storia di Mattia Pascal.", items: ["Vince a Montecarlo", "Legge la notizia della propria morte", "Vive a Roma come Adriano Meis", "Torna a Miragno: «Io sono il fu Mattia Pascal»"], explain: "È la sequenza della trama." }
    ]
  }
});
