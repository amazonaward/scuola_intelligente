TOPIC('it', {
  id: "l5-ita-svevo",
  title: "Italo Svevo",
  intro: "Un impiegato di banca di Trieste che scrive romanzi nel tempo libero, ignorato dalla critica per trent'anni, scoperto in Europa grazie a Joyce e a Montale: <b>Italo Svevo</b> è l'autore italiano che più di ogni altro porta il romanzo nella modernità. Con <i>La coscienza di Zeno</i> (1923) inventa un narratore inattendibile, un tempo non lineare, una malattia che forse è la vita stessa, un protagonista <b>inetto</b> che sbaglia, rimanda, si autoinganna e finisce per sopravvivere meglio dei «sani». In questa lezione conosci la vita e la Trieste mitteleuropea di Svevo, il rapporto con Freud e con la psicoanalisi, i tre romanzi e la struttura del <i>Zeno</i>, fino alla sua incredibile conclusione apocalittica.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Trieste, la banca e la scrittura",
      html: `<p><b>Italo Svevo</b> è lo pseudonimo di <b>Aron Hector Schmitz</b>, nato a <b>Trieste</b> il <b>19 dicembre 1861</b> in una famiglia ebrea di origine tedesca. All'epoca Trieste fa parte dell'<b>Impero austro-ungarico</b>, è il principale porto dell'Austria e un crocevia di culture: italiana, tedesca, slava, ebraica. Il padre è un commerciante; Ettore (così si chiamerà in famiglia) studia da ragazzo in Baviera, a Segnitz, dove impara bene il tedesco e scopre la letteratura tedesca. Dopo il fallimento dell'azienda paterna, nel <b>1880</b> inizia a lavorare come impiegato alla <b>Banca Union</b> di Trieste e, intanto, legge e scrive di nascosto.</p>
<p>Lo pseudonimo <b>Italo Svevo</b> riassume la sua doppia identità: «Italo» per la cultura italiana, «Svevo» per quella tedesca. Pubblica a sue spese il primo romanzo <i>Una vita</i> (<b>1892</b>) e il secondo, <i>Senilità</i> (<b>1898</b>): entrambi passano inosservati. Deluso, smette quasi del tutto di scrivere. Nel <b>1896</b> sposa la cugina <b>Livia Veneziani</b>; dal 1899 lavora nella ditta del suocero (vernici sottomarine per le navi) e diventa un affermato uomo d'affari.</p>
<p>Nel <b>1907</b> prende lezioni di inglese dal giovane irlandese <b>James Joyce</b>, che vive a Trieste: tra i due nasce una grande amicizia, e Joyce lo incoraggia a continuare a scrivere. Dopo la Prima guerra mondiale, Trieste diventa italiana, Svevo compone <b>La coscienza di Zeno</b> (<b>1923</b>) e, di nuovo ignorato in Italia, trova ammiratori all'estero: <b>Joyce</b> e il francese <b>Valery Larbaud</b> lo fanno conoscere a Parigi. In Italia è <b>Eugenio Montale</b> a scrivere, nel 1925, il primo grande articolo critico su di lui. Svevo muore il <b>13 settembre 1928</b>, per le conseguenze di un incidente d'auto a Motta di Livenza (Treviso), quando comincia a diventare famoso.</p>`
    },
    {
      type: "widget",
      title: "Svevo in date",
      widget: "timeline",
      options: { events: [
        { year: 1861, label: "Nasce a Trieste", icon: "⚓" },
        { year: 1880, label: "Impiegato alla Banca Union", icon: "🏦" },
        { year: 1892, label: "Una vita", icon: "📖" },
        { year: 1898, label: "Senilità", icon: "📕" },
        { year: 1907, label: "Incontra Joyce", icon: "🤝" },
        { year: 1923, label: "La coscienza di Zeno", icon: "🚬" },
        { year: 1925, label: "Montale scrive su Svevo", icon: "✍️" },
        { year: 1928, label: "Muore a Motta di Livenza", icon: "🕯️" }
      ], unit: "anno" },
      caption: "Tre romanzi in trent'anni e una fama arrivata quasi alla fine."
    },
    {
      type: "text",
      title: "L'inetto: la figura chiave di Svevo",
      html: `<p>I protagonisti dei romanzi di Svevo sono <b>inetti</b>: uomini che non sanno adattarsi alla vita sociale, indecisi, pieni di buone intenzioni e di autoinganni, incapaci di agire come gli altri. L'«inettitudine» non è semplice debolezza: è un <b>modo di stare al mondo</b> in una società borghese basata sul successo, sul profitto, sulla competizione. L'inetto fallisce nella vita pratica, ma è dotato di una <b>coscienza lucida</b> che gli fa vedere i meccanismi nascosti, le menzogne, il vuoto. Svevo costruisce nei tre romanzi una vera trilogia dell'inetto:</p>
<ul>
<li><b>Alfonso Nitti</b> (<i>Una vita</i>, 1892): giovane impiegato di banca di origine provinciale; ambizioso ma timido, si illude di sposare la figlia del padrone, poi si ritira e finisce per <b>suicidarsi</b>.</li>
<li><b>Emilio Brentani</b> (<i>Senilità</i>, 1898): piccolo impiegato e scrittore fallito; si innamora di una ragazza popolare, Angiolina, che lo tradisce; vive una giovinezza prematuramente «senile» (da cui il titolo), cioè priva di energie, rinunciataria.</li>
<li><b>Zeno Cosini</b> (<i>La coscienza di Zeno</i>, 1923): ricco borghese, ipocondriaco, in analisi, che racconta la sua vita e alla fine, a sorpresa, ne esce vincitore.</li>
</ul>
<p>Con il passare dei romanzi l'inetto si evolve: Alfonso perde, Emilio rinuncia, Zeno convive con la sua nevrosi e la trasforma in forza.</p>`
    },
    {
      type: "svg",
      title: "L'evoluzione dell'inetto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif" font-size="15" text-anchor="middle">
<rect x="15" y="50" width="170" height="150" rx="12" fill="#fecaca" stroke="#991b1b" stroke-width="3"/>
<rect x="215" y="50" width="170" height="150" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="415" y="50" width="170" height="150" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<text x="100" y="78" fill="#7f1d1d" font-weight="bold">Alfonso Nitti</text>
<text x="100" y="102" fill="#7f1d1d">Una vita (1892)</text>
<text x="100" y="135" fill="#7f1d1d">Ambizione frustrata</text>
<text x="100" y="160" fill="#7f1d1d">Finale: suicidio</text>
<text x="300" y="78" fill="#78350f" font-weight="bold">Emilio Brentani</text>
<text x="300" y="102" fill="#78350f">Senilità (1898)</text>
<text x="300" y="135" fill="#78350f">Rinuncia alla vita</text>
<text x="300" y="160" fill="#78350f">Finale: solitudine</text>
<text x="500" y="78" fill="#14532d" font-weight="bold">Zeno Cosini</text>
<text x="500" y="102" fill="#14532d">La coscienza (1923)</text>
<text x="500" y="135" fill="#14532d">Ironia e autoinganno</text>
<text x="500" y="160" fill="#14532d">Finale: «guarito»?</text>
<path d="M190 125 L210 125" stroke="#0f172a" stroke-width="4"/>
<path d="M390 125 L410 125" stroke="#0f172a" stroke-width="4"/>
<text x="300" y="250" fill="#0f172a" font-weight="bold">Dal fallimento all'ironia: l'inetto impara a convivere con sé</text>
</g>
</svg>`,
      caption: "Tre romanzi, tre inetti: la sconfitta diventa progressivamente consapevolezza ironica."
    },
    {
      type: "remember",
      title: "Svevo e la psicoanalisi",
      html: `<p>Svevo non fu mai paziente di Freud, ma conobbe la <b>psicoanalisi</b> attraverso il cognato Bruno Veneziani, curato da <b>Sigmund Freud</b> a Vienna intorno al 1907, e ne lesse le opere (in tedesco). Ne trasse non una dottrina da applicare, ma un <b>metodo</b> per scoprire come la mente si inganna: lapsus, rimozioni, ricordi falsi, autogiustificazioni. Nel romanzo la psicoanalisi viene trattata con <b>ironia</b>: il dottor S., psichiatra di Zeno, è presentato come un uomo pieno di sé, e Zeno stesso non crede alla terapia, ma ne usa le tecniche (scrivere i ricordi) per raccontarsi. Svevo non rifiuta Freud: lo guarda con occhio critico.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: vita e inetto",
      questions: [
        { type: "mc", q: "Qual è il vero nome di Italo Svevo?", options: ["Aron Hector Schmitz", "Ettore Schmidt Cosini", "Alfonso Nitti", "Emilio Brentani"], answer: 0, explain: "Italo Svevo è uno pseudonimo che unisce cultura italiana e tedesca." },
        { type: "mc", q: "Chi è Emilio Brentani?", options: ["Il protagonista di Senilità", "Il dottor S.", "Il padre di Zeno", "Un amico di Joyce"], answer: 0, explain: "Piccolo impiegato che si innamora di Angiolina." },
        { type: "tf", q: "Svevo trovò subito grande successo con Una vita.", answer: false, explain: "Il primo romanzo passò quasi inosservato." },
        { type: "mc", q: "Quale scrittore irlandese fu amico di Svevo a Trieste?", options: ["James Joyce", "Oscar Wilde", "W. B. Yeats", "Samuel Beckett"], answer: 0, explain: "Joyce insegnava inglese a Trieste e incoraggiò Svevo." }
      ]
    },
    {
      type: "text",
      title: "La coscienza di Zeno: la cornice",
      html: `<p>Il romanzo, pubblicato nel <b>1923</b> a Bologna (Cappelli, a spese dell'autore), ha una struttura particolare. Si apre con una <b>Prefazione</b> firmata dal <b>dottor S.</b>, lo psicanalista di Zeno, che spiega di avere pubblicato «per vendetta» le memorie scritte dal paziente, il quale ha interrotto la cura. Poi Zeno, <b>protagonista e narratore</b> in prima persona, racconta le sue memorie, scritte, dice, su consiglio del medico. Ma Zeno è un <b>narratore inattendibile</b>: ricostruisce il passato con vuoti, bugie, interpretazioni di comodo; il lettore non può fidarsi di lui. Il dottor S. lo dice chiaramente: nel libro sono contenute «tante verità e tante bugie».</p>
<p>Il <b>tempo del romanzo</b> non è cronologico: i capitoli sono organizzati per <b>temi</b> (il fumo, la morte del padre, il matrimonio...), non per ordine degli eventi. Si parla di <b>«tempo misto»</b>: i ricordi si sovrappongono, il passato si mescola al presente di chi scrive. È una rottura radicale con il romanzo ottocentesco (Verga, Manzoni) che seguiva una trama lineare.</p>
<p>I capitoli: <b>Preambolo</b>, <b>Il fumo</b>, <b>La morte di mio padre</b>, <b>La storia del mio matrimonio</b>, <b>La moglie e l'amante</b>, <b>Storia di un'associazione commerciale</b>, <b>Psico-analisi</b>.</p>`
    },
    {
      type: "text",
      title: "I capitoli più importanti",
      html: `<p><b>Il fumo</b>. Zeno vuole smettere di fumare e fissa ogni volta una «<b>ultima sigaretta</b>» (U.S.), scrivendo la data sui muri, sui libri, sui mobili: poi ne fuma un'altra, e un'altra ancora. La sigaretta diventa il simbolo di ogni proposito ripetuto e tradito: più si «smette», più si rimane prigionieri. L'ironia è il segno del rapporto di Zeno con la «salute»: cerca una guarigione che non arriva, perché la malattia gli serve come scusa.</p>
<p><b>La morte di mio padre</b>. Il padre di Zeno muore dopo una lunga malattia. Negli ultimi istanti, il vecchio lo colpisce con uno <b>schiaffo</b>: era un gesto volontario di rimprovero o un movimento involontario di un moribondo? Zeno non lo sa, e resta tormentato dal dubbio. Il capitolo mostra il conflitto padre-figlio, il senso di colpa e l'interpretazione dei gesti.</p>
<p><b>La storia del mio matrimonio</b>. Zeno conosce il ricco commerciante <b>Giovanni Malfenti</b> e le sue quattro figlie. Vorrebbe sposare la bella <b>Ada</b>, ma lei lo rifiuta; chiede allora la mano di <b>Alberta</b>, e di nuovo viene rifiutato; alla fine sposa la meno attraente, <b>Augusta</b>, la strabica, che ama sinceramente e che diventerà la sua «salute» (guarisce vivendo con lei). Nel frattempo Ada sposa il fascinoso <b>Guido Speier</b>.</p>
<p><b>La moglie e l'amante</b>. Zeno tradisce Augusta con <b>Carla</b>, una giovane aspirante cantante; ma quando Carla lo lascia per un altro, lui torna da Augusta con un misto di sollievo e nostalgia.</p>
<p><b>Storia di un'associazione commerciale</b>. Zeno si mette in affari con il cognato Guido, uomo brillante ma sconsiderato, che si rovina. Guido simula un suicidio per ricattare moralmente la moglie, ma muore davvero per un errore (un'overdose di veronal presa in dosi minime per fingere). Zeno, che in quel giorno non partecipa al funerale perché sbaglia corteo, ha il dubbio di non aver voluto davvero salvare il cognato.</p>
<p><b>Psico-analisi</b>. Zeno dichiara di essere guarito, ma lo fa con ironia: «<i>La vita somiglia un poco alla malattia</i>», e la salute non esiste, perché «<i>la vita attuale è inquinata alle radici</i>». Dice di aver guarito sé stesso, grazie alle speculazioni commerciali fatte durante la guerra.</p>`
    },
    {
      type: "example",
      title: "L'ultima sigaretta nella vita reale",
      html: `<p>«Da lunedì mi metto a studiare davvero.» «Domani comincio la dieta.» «Questa è l'ultima serie e poi spengo.» Ogni volta che rimandiamo un proposito, ripetiamo il gesto di Zeno. La data scelta («lunedì», «il primo del mese») è una trappola gentile: ci fa sentire già «guariti» senza agire. Svevo mostra che spesso non vogliamo davvero cambiare, ma vogliamo <b>raccontarci</b> che lo stiamo per fare. Anche l'ultima serie e l'ultimo scroll funzionano così.</p>`
    },
    {
      type: "example",
      title: "Zeno e i falsi ricordi",
      html: `<p>Ripensa a un litigio con un amico: nel ricordo sei quasi sempre dalla parte della ragione. Ora immagina che il litigio venga raccontato anche dall'altro: è un'altra storia. Zeno fa lo stesso con il suo matrimonio e con la morte del padre: sceglie i dettagli che lo assolvono. Il lettore, però, nota le crepe (le dimenticanze, le esagerazioni, i lapsus) e scopre la verità <b>nonostante</b> il narratore. Funziona come quando leggi una chat e capisci cose che chi scrive non vuole dire.</p>`
    },
    {
      type: "text",
      title: "Il finale: «un esplosione enorme»",
      html: `<p>L'ultima pagina del romanzo è tra le più celebri della narrativa italiana. Zeno scrive che la vita «<i>è sempre mortale</i>»: la malattia non è un incidente, ma la condizione umana. L'uomo ha costruito <b>ordigni</b> sempre più potenti, e un giorno uno di essi esploderà. Il passo si chiude con questa visione: «<i>Ci sarà un'esplosione enorme che nessuno udrà e la terra ritornata alla forma di nebulosa errerà nei cieli priva di parassiti e di malattie.</i>»</p>
<p>Scritta nel 1923, appena dopo la guerra mondiale, la pagina anticipa i timori del <b>Novecento</b> (la bomba atomica sarebbe arrivata poco più tardi) e contiene l'idea che la malattia dell'uomo non sia curabile: perciò le «guarigioni» di Zeno sono un'ironia. La vita è una malattia, e l'unico modo di sopravvivere è guardarsi con ironia.</p>`
    },
    {
      type: "curiosity",
      title: "Svevo e Joyce: chi ispirò chi?",
      html: `<p>Si dice spesso che Svevo abbia fornito a Joyce alcuni tratti del protagonista dell'<i>Ulisse</i>, <b>Leopold Bloom</b>, un ebreo di Dublino, uomo comune e curioso. Per alcuni critici Bloom ha qualcosa di Svevo. Joyce ammirò <i>Senilità</i> e <i>Una vita</i> e li fece conoscere in Francia. È uno dei più bei casi di <b>scrittori che si ispirano a vicenda</b>, anche se la tesi precisa è discussa dagli studiosi.</p>`
    },
    {
      type: "curiosity",
      title: "Un'amicizia nata da lezioni di inglese",
      html: `<p>Quando nel 1907 Svevo prese lezioni di inglese da Joyce, pensava solo a migliorare le sue trattative d'affari con i clienti inglesi (la ditta Veneziani esportava in Gran Bretagna). Quelle ore diventarono incontri letterari: Joyce lesse <i>Senilità</i> e <i>Una vita</i> e disse a Svevo che erano opere di valore, che egli sapeva a memoria in alcuni passi. Per un autore che si credeva ormai «finito», fu l'incoraggiamento che lo riportò alla scrittura.</p>`
    },
    {
      type: "decision",
      title: "Zeno e l'ultima sigaretta: smettere davvero?",
      html: `<p>Sei Zeno. È la sera del 3 maggio. Hai deciso che questa è l'«<b>ultima sigaretta</b>». Il giorno dopo ti prende la voglia. Puoi scegliere tra tre modi di comportarti.</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Fumo ancora e cambio data: l'ultima sarà il prossimo lunedì", outcome: "È il meccanismo di Zeno: la nuova data è una promessa che non costa nulla e prolunga all'infinito la schiavitù." },
        { label: "Smetto subito senza dirlo a nessuno e senza segnare date", outcome: "Sarebbe la strategia più efficace: niente rituali, niente alibi. Ma a Zeno manca proprio la capacità di non raccontarsi storie." },
        { label: "Chiedo a un medico di rinchiudermi in clinica", outcome: "Zeno tenta davvero questa via (si fa ricoverare in una clinica), ma scappa quasi subito: la «cura» da fuori non basta se manca la volontà." }
      ],
      answer: 0,
      explain: "La storia di Zeno dimostra che l'autoinganno è più forte delle promesse. Svevo non sta giudicando il fumatore: sta mostrando come la mente rimandi ciò che teme di dover affrontare davvero."
    },
    {
      type: "alternatives",
      title: "Altri modi per ricordare Svevo",
      intro: "Collegamenti, carte e un diagramma sul «tempo misto».",
      tabs: [
        {
          label: "🔗 Abbina romanzo e protagonista",
          html: "<p>Collega ogni opera al suo personaggio.</p>",
          widget: "match",
          options: { pairs: [
            ["Una vita", "Alfonso Nitti, impiegato ambizioso e suicida"],
            ["Senilità", "Emilio Brentani e Angiolina"],
            ["La coscienza di Zeno", "Zeno Cosini, narratore e inetto"],
            ["Il fumo", "L'ultima sigaretta, le promesse tradite"],
            ["La storia del mio matrimonio", "Ada, Alberta, Augusta"],
            ["Psico-analisi", "La finta guarigione e l'esplosione finale"]
          ] }
        },
        {
          label: "🃏 Carte di Svevo",
          html: "<p>Termini chiave.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "Inetto", back: "Uomo incapace di adattarsi alla vita sociale, ma lucido e consapevole" },
            { front: "Narratore inattendibile", back: "Chi racconta in modo parziale, falsato o ambiguo" },
            { front: "Tempo misto", back: "Struttura per temi e ricordi, non cronologica" },
            { front: "Dottor S.", back: "Lo psicanalista di Zeno che pubblica per vendetta le sue memorie" },
            { front: "Ultima sigaretta", back: "Simbolo del proposito sempre rimandato" },
            { front: "Mitteleuropa", back: "L'area culturale dell'Impero austro-ungarico, a cui appartiene Trieste" }
          ] }
        },
        {
          label: "🕰️ Tempo lineare e tempo misto",
          html: "<p>Nel romanzo tradizionale gli eventi vanno in fila; in Svevo il racconto salta da un tema all'altro seguendo la memoria di Zeno.</p>",
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0fdf4"/><g font-family="sans-serif" font-size="15" text-anchor="middle"><text x="300" y="30" fill="#14532d" font-weight="bold">Romanzo ottocentesco: tempo lineare</text><path d="M40 60 L560 60" stroke="#166534" stroke-width="4"/><circle cx="100" cy="60" r="10" fill="#22c55e"/><circle cx="240" cy="60" r="10" fill="#22c55e"/><circle cx="380" cy="60" r="10" fill="#22c55e"/><circle cx="520" cy="60" r="10" fill="#22c55e"/><text x="100" y="95" fill="#14532d">1</text><text x="240" y="95" fill="#14532d">2</text><text x="380" y="95" fill="#14532d">3</text><text x="520" y="95" fill="#14532d">4</text><text x="300" y="150" fill="#7f1d1d" font-weight="bold">Zeno: tempo misto (ricordi per temi)</text><circle cx="110" cy="200" r="12" fill="#f87171"/><circle cx="250" cy="250" r="12" fill="#f87171"/><circle cx="390" cy="190" r="12" fill="#f87171"/><circle cx="500" cy="245" r="12" fill="#f87171"/><path d="M110 200 Q180 250 250 250 T390 190 T500 245" stroke="#991b1b" stroke-width="3" fill="none" stroke-dasharray="6 5"/><text x="110" y="180" fill="#7f1d1d">il fumo</text><text x="250" y="285" fill="#7f1d1d">il padre</text><text x="390" y="172" fill="#7f1d1d">il matrimonio</text><text x="500" y="285" fill="#7f1d1d">gli affari</text></g></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di Svevo",
      nodes: [
        { id: "svevo", label: "Svevo", x: 50, y: 8, color: "#ef4444", html: "Trieste 1861 - 1928: scrittore e uomo d'affari.", why: "Nato in una città di confine tra culture, vive la crisi dell'Impero austro-ungarico e della borghesia." },
        { id: "trieste", label: "Trieste mitteleuropea", x: 15, y: 40, color: "#f59e0b", html: "Crocevia di italiani, tedeschi, slavi, ebrei.", why: "Spiega la doppia anima di Svevo e la sua apertura a Freud, Schopenhauer, Nietzsche, Joyce." },
        { id: "inetto", label: "L'inetto", x: 40, y: 40, color: "#0ea5e9", html: "Nitti, Brentani, Zeno.", why: "Una figura di sconfitta che smaschera i valori della borghesia dell'efficienza." },
        { id: "freud", label: "Psicoanalisi", x: 65, y: 40, color: "#22c55e", html: "Freud, rimozioni, autoinganni.", why: "Svevo usa il metodo con ironia: la scrittura è un'analisi di sé che non guarisce." },
        { id: "zeno", label: "La coscienza di Zeno", x: 88, y: 40, color: "#8b5cf6", html: "Memorie di Zeno, tempo misto, finale apocalittico.", why: "Il romanzo mette in crisi la trama lineare: la verità sta nei vuoti e nelle contraddizioni." },
        { id: "malattia", label: "Malattia e salute", x: 28, y: 78, color: "#64748b", html: "La salute come ideale impossibile.", why: "Zeno si accorge che i «sani» sono più malati di lui: la malattia è la vita." },
        { id: "narratore", label: "Narratore inattendibile", x: 72, y: 78, color: "#ec4899", html: "Zeno falsa, rimuove, inventa.", why: "Il lettore deve interpretare: la verità non è data, si ricostruisce." }
      ],
      edges: [["svevo", "trieste", "nasce da"], ["svevo", "inetto", "inventa l'"], ["svevo", "freud", "legge"], ["svevo", "zeno", "scrive"], ["inetto", "malattia", "vive la"], ["zeno", "narratore", "usa il"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz finale",
      questions: [
        { type: "mc", q: "Quale scrittore irlandese incoraggiò Svevo a Trieste?", options: ["James Joyce", "Oscar Wilde", "George Bernard Shaw", "Samuel Beckett"], answer: 0, explain: "Fu suo insegnante d'inglese e amico." },
        { type: "mc", q: "Chi sposa alla fine Zeno?", options: ["Augusta", "Ada", "Alberta", "Carla"], answer: 0, explain: "Augusta, la sorella meno bella ma più sincera." },
        { type: "order", q: "Ordina le opere di Svevo.", items: ["Una vita", "Senilità", "La coscienza di Zeno"], explain: "1892, 1898, 1923." }
      ]
    }
  ],
  glossary: [
    { t: "Inetto", d: "Personaggio incapace di adattarsi alla vita sociale e di agire in modo efficace." },
    { t: "Narratore inattendibile", d: "Narratore che racconta in modo parziale o falsato, di cui il lettore non può fidarsi." },
    { t: "Tempo misto", d: "Organizzazione del racconto per temi e ricordi, non in ordine cronologico." },
    { t: "Psicoanalisi", d: "Teoria e terapia di Sigmund Freud sull'inconscio e sui meccanismi della mente." },
    { t: "Mitteleuropa", d: "Area culturale dell'Europa centrale legata all'Impero austro-ungarico." },
    { t: "Autoinganno", d: "Il racconto di comodo che la mente costruisce per giustificarsi." },
    { t: "Pseudonimo", d: "Nome d'arte usato al posto del nome reale (Italo Svevo per Aron Hector Schmitz)." },
    { t: "Senilità", d: "Titolo del romanzo del 1898: condizione di precoce stanchezza di vivere." },
    { t: "Ironia", d: "Presa di distanza che permette di vedere e dire una cosa dicendone un'altra." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In quale città nacque Italo Svevo?", options: ["Trieste", "Milano", "Venezia", "Vienna"], answer: 0, explain: "Allora parte dell'Impero austro-ungarico." },
      { type: "tf", q: "Italo Svevo è il nome anagrafico dello scrittore.", answer: false, explain: "Il suo vero nome era Aron Hector Schmitz." },
      { type: "mc", q: "Che mestiere svolse a lungo Svevo prima di dedicarsi al commercio?", options: ["Impiegato di banca", "Insegnante", "Medico", "Giornalista"], answer: 0, explain: "Alla Banca Union di Trieste." },
      { type: "mc", q: "Quale caratteristica ha il narratore della Coscienza di Zeno?", options: ["È inattendibile", "È onnisciente e imparziale", "È un narratore esterno", "È anonimo"], answer: 0, explain: "Zeno falsa e rimuove: il lettore deve interpretare." },
      { type: "text", q: "Come si chiama lo psicanalista che pubblica le memorie di Zeno?", answer: ["dottor s", "dottor s.", "il dottor s", "dott. s", "dottore s"], explain: "Il dottor S., che pubblica «per vendetta»." },
      { type: "mc", q: "Che cosa simboleggia l'«ultima sigaretta»?", options: ["Il proposito sempre rimandato", "Il vizio del fumo come virtù", "Una dichiarazione politica", "L'amore per Augusta"], answer: 0, explain: "Zeno fissa continuamente nuove date per smettere." },
      { type: "mc", q: "Chi scrisse nel 1925 il primo importante articolo critico su Svevo in Italia?", options: ["Eugenio Montale", "Benedetto Croce", "Gabriele D'Annunzio", "Giuseppe Ungaretti"], answer: 0, explain: "Con «Omaggio a Italo Svevo»." },
      { type: "num", q: "In che anno uscì La coscienza di Zeno?", answer: 1923, tol: 0, explain: "A spese dell'autore, presso Cappelli." },
      { type: "tf", q: "Il finale del romanzo prevede un'esplosione che distruggerà la vita sulla Terra.", answer: true, explain: "La terra tornerà a essere nebulosa «priva di parassiti e di malattie»." },
      { type: "order", q: "Ordina i protagonisti secondo i romanzi in cui compaiono.", items: ["Alfonso Nitti", "Emilio Brentani", "Zeno Cosini"], explain: "Una vita, Senilità, La coscienza di Zeno." }
    ]
  }
});
