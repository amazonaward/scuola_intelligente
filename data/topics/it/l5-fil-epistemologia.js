TOPIC('it', {
  id: "l5-fil-epistemologia",
  title: "Filosofia della scienza nel Novecento",
  intro: "Che cosa distingue la scienza dall'astrologia, dalla magia, dalle opinioni? Come fa la scienza a «provare» una teoria, se non può osservare tutti i casi? E come cambia nel tempo: accumula verità o si rivoluziona? Nel Novecento la fisica di Einstein e dei quanti mette in crisi la certezza ottocentesca e dà nuovo slancio alla <b>epistemologia</b> (o filosofia della scienza). Tre grandi risposte: il <b>Circolo di Vienna</b> con il principio di verificazione, <b>Karl Popper</b> con la <b>falsificabilità</b> e <b>Thomas Kuhn</b> con i <b>paradigmi</b> e le <b>rivoluzioni scientifiche</b>.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "1. Perché serve una filosofia della scienza",
      html: `<p>Fino alla fine dell'Ottocento le teorie della fisica, soprattutto la meccanica di <b>Newton</b>, sembravano verità definitive: i positivisti (vedi la lezione precedente) pensavano che la scienza fosse un accumulo di conoscenze certe. Poi, tra il 1900 e il 1930, accade qualcosa di inatteso:</p>
<ul>
<li>nel <b>1905</b> e nel <b>1915</b> <b>Einstein</b> pubblica la teoria della <b>relatività</b> (ristretta e generale), che modifica i concetti di spazio, tempo e gravità;</li>
<li>nel 1900-1927 nasce la <b>meccanica quantistica</b> (Planck, Bohr, Heisenberg, Schrödinger), con idee come l'indeterminazione, contrarie al determinismo di Newton;</li>
<li>le geometrie non euclidee mostrano che anche la geometria, considerata necessariamente vera, può essere diversa.</li>
</ul>
<p>Se perfino la fisica newtoniana, la teoria più testata della storia, si è rivelata un'approssimazione, che cosa vuol dire che una teoria è «vera»? Come si distingue una buona teoria da una cattiva? Da queste domande nasce l'<b>epistemologia</b> contemporanea (dal greco <i>epistéme</i>, «conoscenza scientifica», e <i>lógos</i>), che studia i metodi, i limiti e lo sviluppo della scienza. Il problema centrale è quello di <b>demarcare</b> la scienza da ciò che scienza non è, e di spiegare come progredisce.</p>`
    },
    {
      type: "text",
      title: "2. Il Circolo di Vienna e il neopositivismo",
      html: `<p>Negli anni Venti un gruppo di filosofi e scienziati si riunisce a <b>Vienna</b> intorno a <b>Moritz Schlick</b> (1882-1936), professore di filosofia delle scienze induttive. Ne fanno parte, tra gli altri, <b>Rudolf Carnap</b>, <b>Otto Neurath</b>, <b>Hans Hahn</b>, <b>Herbert Feigl</b>, e con loro dialogano matematici come <b>Kurt Gödel</b>. Nel <b>1929</b> pubblicano un manifesto, <i>La concezione scientifica del mondo</i>. Sono i <b>neopositivisti</b> (o empiristi logici): continuano il positivismo, ma lo rinnovano con gli strumenti della <b>logica matematica</b> di Frege e Russell e con l'influenza del <i>Tractatus logico-philosophicus</i> (1921) di <b>Ludwig Wittgenstein</b>.</p>
<p>Le tesi principali:</p>
<ul>
<li>i problemi filosofici sono in gran parte problemi di <b>linguaggio</b>: bisogna chiarire il significato degli enunciati;</li>
<li><b>principio di verificazione</b>: un enunciato ha significato solo se è <b>verificabile</b> empiricamente (o se è una tautologia logica o matematica). «Il significato di una proposizione è il metodo della sua verificazione» (Schlick);</li>
<li>gli enunciati della <b>metafisica</b> («l'Assoluto è in divenire», «il Nulla nullifica») non sono né veri né falsi: sono <b>privi di senso</b> (Carnap li accusa di essere pseudo-proposizioni);</li>
<li>la scienza è <b>unitaria</b>: tutte le scienze (fisica, biologia, psicologia, sociologia) devono potersi esprimere in un linguaggio comune, basato su enunciati osservativi (<i>unità della scienza</i>).</li>
</ul>
<p>Il Circolo fu disperso dall'ascesa del nazismo: molti membri erano ebrei o di sinistra. Schlick fu assassinato nel 1936 da un ex studente sulle scale dell'università; dopo l'annessione dell'Austria alla Germania nel 1938 gli altri emigrarono, soprattutto negli Stati Uniti, dove diffusero il loro metodo.</p>`
    },
    {
      type: "text",
      title: "3. I problemi della verificazione",
      html: `<p>Il principio di verificazione ha un'attrattiva evidente: chiarezza e rigore. Ma incontra gravi difficoltà.</p>
<ul>
<li><b>Il problema dell'induzione</b> (già posto da Hume): le leggi scientifiche sono universali («tutti i corpi pesanti cadono», «tutti i metalli si dilatano col calore»), ma le osservazioni sono sempre in numero finito. Quante osservazioni servono per verificare «tutti i cigni sono bianchi»? Anche mille cigni bianchi non bastano per dire che lo siano tutti. Quindi, per il principio di verificazione, le leggi scientifiche non sarebbero verificabili, cioè... prive di senso!</li>
<li>Il principio stesso, applicato a se stesso, non sembra né una tautologia né un enunciato empiricamente verificabile.</li>
<li>Gli stessi termini scientifici (elettrone, campo, gene) non sono osservabili direttamente.</li>
</ul>
<p>I neopositivisti rimediarono con versioni più deboli: non verificazione completa, ma <b>conferma</b> graduale (Carnap sviluppò una logica induttiva e una teoria della probabilità). Ma la strada apparve in salita, e fu un giovane viennese, che frequentava il Circolo ai margini, a proporre un'alternativa radicale.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: il Circolo di Vienna",
      questions: [
        { type: "mc", q: "Che cosa sostiene il principio di verificazione?", options: ["Ogni enunciato è vero", "Un enunciato ha significato solo se è verificabile empiricamente (o è una tautologia)", "La scienza non ha limiti"], answer: 1, explain: "È la tesi centrale dei neopositivisti." },
        { type: "tf", q: "Per i neopositivisti gli enunciati della metafisica sono privi di senso.", answer: true, explain: "Non sono verificabili e non sono tautologie." },
        { type: "mc", q: "Quale problema pone la verificazione delle leggi universali?", options: ["Il problema del male", "Il problema della libertà", "Il problema dell'induzione"], answer: 2, explain: "Le osservazioni sono finite, le leggi universali." }
      ]
    },
    {
      type: "text",
      title: "4. Popper: la falsificabilità",
      html: `<p><b>Karl Raimund Popper</b> (Vienna 1902 - Londra 1994), nella <i>Logica della scoperta scientifica</i> (<b>1934</b>), propone una soluzione. Parte da un'asimmetria logica: nessun numero di osservazioni conferma in modo definitivo una legge universale, ma <b>una sola osservazione contraria</b> può confutarla. Mille cigni bianchi non dimostrano che «tutti i cigni sono bianchi»; un solo <b>cigno nero</b> (scoperti in Australia: il primo europeo a vederli fu l'olandese Willem de Vlamingh nel 1697) la smentisce.</p>
<p>Perciò il criterio per distinguere scienza e non-scienza (<b>criterio di demarcazione</b>) non è la verificabilità, ma la <b>falsificabilità</b>: una teoria è scientifica se può, in linea di principio, essere <b>smentita</b> dall'esperienza, cioè se vieta qualcosa di osservabile. Più una teoria rischia, più è scientifica.</p>
<ul>
<li>«Domani qui pioverà o non pioverà»: non è falsificabile (è vera qualunque cosa accada), quindi non dice nulla sul mondo.</li>
<li>«A livello del mare l'acqua pura bolle a 100 °C»: è falsificabile, perché basta misurare un caso diverso.</li>
</ul>
<p>Il metodo scientifico è per Popper <b>ipotetico-deduttivo</b>: non si parte dall'osservazione (l'induzione) ma da <b>congetture</b>, cioè ipotesi audaci, da cui si deducono previsioni da sottoporre a test severi. Le teorie che superano i test non sono «vere», ma <b>corroborate</b> (provvisoriamente); quelle smentite vengono scartate e sostituite. Il progresso è un cammino di <b>«congetture e confutazioni»</b> (titolo di una raccolta del 1963): la scienza non possiede la verità, vi si avvicina eliminando gli errori. Una teoria che non può essere confutata (perché ha sempre una scappatoia) è sospetta.</p>
<p>Popper applica il criterio a teorie del suo tempo. La <b>relatività di Einstein</b> è un esempio di teoria coraggiosa: prevedeva che la luce di una stella fosse deviata dal Sole di un angolo preciso, e che questo si potesse osservare durante un'eclissi; se non fosse stato così, la teoria sarebbe stata smentita. Invece <b>marxismo</b> (nella forma sostenuta dai suoi seguaci) e <b>psicoanalisi</b> gli sembravano teorie che spiegano qualsiasi comportamento e quindi non vietano nulla: per lui <b>non scientifiche</b> (il che non vuol dire insensate o inutili). In politica Popper difese la <b>società aperta</b> (<i>La società aperta e i suoi nemici</i>, 1945), contro ogni pretesa di possedere la verità assoluta: il metodo critico vale anche per le idee politiche.</p>`
    },
    {
      type: "svg",
      title: "Verificare o falsificare?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="32" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Teoria: «tutti i cigni sono bianchi»</text>
<g fill="#ffffff" stroke="#475569" stroke-width="2">
<ellipse cx="60" cy="110" rx="26" ry="16"/><ellipse cx="130" cy="110" rx="26" ry="16"/><ellipse cx="200" cy="110" rx="26" ry="16"/>
<ellipse cx="270" cy="110" rx="26" ry="16"/><ellipse cx="340" cy="110" rx="26" ry="16"/><ellipse cx="410" cy="110" rx="26" ry="16"/>
</g>
<text x="235" y="160" font-size="16" text-anchor="middle" fill="#1e3a8a">tante conferme: la legge non è dimostrata</text>
<ellipse cx="500" cy="110" rx="26" ry="16" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>
<text x="500" y="150" font-size="16" text-anchor="middle" fill="#7f1d1d">un cigno nero</text>
<rect x="60" y="200" width="200" height="70" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="160" y="230" font-size="17" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Verificare</text>
<text x="160" y="254" font-size="15" text-anchor="middle" fill="#1e3a8a">non basta mai</text>
<rect x="340" y="200" width="200" height="70" rx="12" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<text x="440" y="230" font-size="17" font-weight="bold" text-anchor="middle" fill="#7f1d1d">Falsificare</text>
<text x="440" y="254" font-size="15" text-anchor="middle" fill="#7f1d1d">un caso è sufficiente</text>
</svg>`,
      caption: "L'asimmetria logica da cui parte Popper: le conferme non dimostrano una legge universale, una smentita sì."
    },
    {
      type: "decision",
      title: "29 maggio 1919: l'eclissi che mette alla prova Einstein",
      html: `<p>La relatività generale di Einstein prevede che la luce delle stelle sia deviata dalla gravità del Sole. Secondo la teoria, il valore atteso è di circa <b>1,75 secondi d'arco</b>; la fisica newtoniana ne prevedrebbe circa la metà. Per misurarlo bisogna fotografare le stelle vicine al Sole durante un'eclissi totale. L'astronomo inglese Arthur Eddington organizza due spedizioni (a Principe, in Africa, e a Sobral, in Brasile).</p>`,
      question: "Se le misure fossero state vicine al valore newtoniano, che cosa direbbe Popper?",
      options: [
        { label: "Che la teoria di Einstein sarebbe stata smentita e andrebbe abbandonata.", outcome: "È la logica della falsificazione: la previsione era rischiosa, e il test poteva dare torto a Einstein." },
        { label: "Che si sarebbe dovuto trovare una spiegazione per cui la teoria resta vera comunque.", outcome: "Per Popper questo è un modo di rendere la teoria immune dalla critica, e quindi poco scientifico." },
        { label: "Che la teoria non può essere messa alla prova.", outcome: "È proprio il contrario: l'eclissi mostra che la relatività è una teoria falsificabile." }
      ],
      answer: 0,
      explain: "Le misure del 1919 risultarono compatibili con la previsione di Einstein (anche se con incertezze considerevoli) e la teoria fu corroborata. Popper vide in questo episodio il modello della scienza: una previsione rischiosa che poteva fallire. Gli storici hanno poi discusso la qualità dei dati di allora, ma l'esempio resta il più usato per spiegare la falsificabilità."
    },
    {
      type: "text",
      title: "5. Kuhn: paradigmi e rivoluzioni scientifiche",
      html: `<p><b>Thomas Samuel Kuhn</b> (Cincinnati 1922 - Cambridge, Massachusetts, 1996) era un fisico diventato storico della scienza. Nel libro <i>La struttura delle rivoluzioni scientifiche</i> (<b>1962</b>) osserva che la storia reale della scienza non assomiglia né all'accumulo graduale dei positivisti né alle audaci smentite di Popper. Gli scienziati, di solito, <b>non cercano di confutare</b> le loro teorie: lavorano dentro un quadro condiviso. Questo quadro è il <b>paradigma</b>: l'insieme di teorie, metodi, strumenti, esempi esemplari e valori che una comunità scientifica accetta in una certa epoca (per esempio la fisica di Newton, la chimica di Lavoisier, la teoria di Darwin). La storia della scienza si sviluppa in fasi:</p>
<ol>
<li><b>scienza normale</b>: gli scienziati lavorano nel paradigma come a <b>risolvere rompicapo</b> («puzzle»): affinano misure, applicano le teorie a nuovi casi. Non mettono in discussione le basi;</li>
<li><b>anomalie</b>: si accumulano risultati che il paradigma non riesce a spiegare (per esempio l'orbita di Mercurio per la fisica newtoniana);</li>
<li><b>crisi</b>: le anomalie diventano troppe e la fiducia si incrina; compaiono teorie alternative;</li>
<li><b>rivoluzione scientifica</b>: un nuovo paradigma sostituisce il vecchio (Copernico al posto di Tolomeo, Einstein al posto di Newton, la tettonica a placche al posto del fissismo);</li>
<li>un nuovo periodo di <b>scienza normale</b> comincia sotto il nuovo paradigma.</li>
</ol>
<p>Conseguenze controverse della tesi di Kuhn: i paradigmi sono, in parte, <b>incommensurabili</b>, cioè i loro concetti non sono completamente traducibili (la «massa» di Newton non è la «massa» di Einstein), per cui non esiste un criterio neutro che permetta di confrontarli. La scelta tra paradigmi non dipende solo dalla logica e dai dati ma anche da fattori sociali, estetici e di persuasione della comunità scientifica: si passa al nuovo paradigma con una specie di «conversione» (come nei <i>gestalt-switch</i>, il famoso disegno che può essere visto come papera o come coniglio). Kuhn precisò più tardi che non intendeva dire che la scienza sia irrazionale: anche per lui il confronto avviene con criteri come l'accuratezza, la coerenza, la portata e la fecondità.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: la filosofia della scienza",
      nodes: [
        { id: "crisi", label: "Crisi della fisica classica", x: 50, y: 3, color: "#64748b", html: "Relatività e quanti.", why: "Se Newton è superato, la scienza non è un possesso di verità definitive." },
        { id: "vienna", label: "Circolo di Vienna", x: 18, y: 30, color: "#2563eb", html: "Neopositivismo, verificazione.", why: "Vuole una scienza unitaria e una filosofia rigorosa, senza metafisica." },
        { id: "popper", label: "Popper", x: 82, y: 30, color: "#dc2626", html: "Falsificabilità e congetture.", why: "Risolve il problema dell'induzione con l'asimmetria tra verificare e falsificare." },
        { id: "verif", label: "Principio di verificazione", x: 18, y: 60, color: "#f59e0b", html: "Significato = verificabilità.", why: "Incontra il problema dell'induzione e dei termini teorici." },
        { id: "falsi", label: "Criterio di demarcazione", x: 82, y: 60, color: "#16a34a", html: "Scientifico = falsificabile.", why: "Scarta teorie che spiegano tutto e rischiano nulla." },
        { id: "kuhn", label: "Kuhn", x: 50, y: 78, color: "#7c3aed", html: "Paradigmi e rivoluzioni.", why: "La storia della scienza mostra fasi di scienza normale e rotture." },
        { id: "post", label: "Dibattito successivo", x: 50, y: 95, color: "#0891b2", html: "Lakatos, Feyerabend.", why: "Programmi di ricerca, pluralismo dei metodi." }
      ],
      edges: [
        ["crisi", "vienna", "stimola"],
        ["crisi", "popper", "stimola"],
        ["vienna", "verif", "tesi"],
        ["popper", "falsi", "tesi"],
        ["verif", "kuhn", "superata da"],
        ["falsi", "kuhn", "criticata da"],
        ["kuhn", "post", "apre"]
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire",
      intro: "Tre analogie per afferrare i tre autori.",
      tabs: [
        {
          label: "⚖️ Il tribunale",
          html: `<p>Pensa a un processo. Il metodo verificazionista cerca <b>prove</b> che l'imputato è innocente: ma mille testimoni a favore non bastano a escludere che qualcuno sappia qualcosa di diverso. Per Popper conta soprattutto la <b>possibilità di smentire</b>: una sola prova decisiva contro la tesi dell'innocenza la fa crollare. Kuhn ricorda che le regole del processo (il codice, le procedure, l'interpretazione) stanno dentro un sistema accettato, e che a volte cambiano profondamente (una riforma della giustizia): è il «cambio di paradigma».</p>`
        },
        {
          label: "🧩 Il puzzle e la nuova scatola",
          html: `<p>Nella scienza normale di Kuhn, gli scienziati sono come chi completa un <b>puzzle</b> di cui conosce l'immagine sulla scatola: mette i pezzi al loro posto. Quando alcuni pezzi non si incastrano mai (anomalie), a un certo punto qualcuno propone che l'immagine sulla scatola fosse sbagliata e che il puzzle rappresenti un altro paesaggio. È una rivoluzione: cambia il modo di vedere i pezzi stessi. Un esempio famoso: prima di Copernico il Sole <i>sorgeva</i>; dopo, è la Terra che <i>ruota</i>.</p>`
        },
        {
          label: "⏱️ Cronologia",
          html: `<p>Alcune date essenziali:</p>`,
          widget: "timeline",
          options: { events: [ { year: 1905, label: "Einstein: relatività ristretta", icon: "⚛️" }, { year: 1921, label: "Wittgenstein: Tractatus", icon: "📘" }, { year: 1929, label: "Manifesto del Circolo di Vienna", icon: "🏛️" }, { year: 1934, label: "Popper: Logica della scoperta scientifica", icon: "🦢" }, { year: 1936, label: "Muore Schlick", icon: "🕯️" }, { year: 1962, label: "Kuhn: La struttura delle rivoluzioni scientifiche", icon: "🔄" }, { year: 1975, label: "Feyerabend: Contro il metodo", icon: "🎭" } ], unit: "anni" }
        }
      ]
    },
    {
      type: "widget",
      title: "Falsificabile o no?",
      widget: "classify",
      options: { groups: ["Falsificabile (scientifica per Popper)", "Non falsificabile"], items: [["🦢 Tutti i cigni sono bianchi", 0], ["🔮 Domani qui pioverà o non pioverà", 1], ["💧 L'acqua pura bolle a 100 °C a livello del mare", 0], ["⭐ Il tuo destino è scritto negli astri, ma in modo che nessuna osservazione possa contraddirlo", 1], ["🧲 Un magnete attira il ferro", 0], ["👻 Esiste un fantasma invisibile, immateriale e che non interagisce con nulla", 1]] },
      caption: "Una teoria è scientifica se vieta qualcosa di osservabile."
    },
    {
      type: "text",
      title: "6. Dopo Kuhn: Lakatos, Feyerabend e il dibattito",
      html: `<p>Dopo Popper e Kuhn il dibattito continua. L'ungherese <b>Imre Lakatos</b> (1922-1974) cerca un compromesso con i <b>programmi di ricerca scientifici</b>: ogni teoria ha un «nucleo duro» protetto da una «cintura» di ipotesi ausiliarie; un programma è <b>progressivo</b> se prevede fatti nuovi, <b>regressivo</b> se si limita a salvare le teorie con scappatoie. Così si spiega perché gli scienziati non abbandonano subito una teoria davanti a una singola anomalia (cosa che già osservavano <b>Duhem</b> e <b>Quine</b>: un test non verifica mai una ipotesi isolata, ma un intero sistema di ipotesi).</p>
<p>Più radicale è <b>Paul Feyerabend</b> (1924-1994), autore di <i>Contro il metodo</i> (1975): la storia mostra che i grandi progressi (come quelli di Galileo) sono avvenuti violando le regole metodologiche; non esiste un metodo scientifico universale, e il suo slogan è «<b>anything goes</b>» («tutto va bene»): un invito al pluralismo e alla libertà, provocatorio, che molti interpretarono come relativismo.</p>
<p>Oggi molti filosofi della scienza accettano una posizione intermedia: la scienza è un'impresa razionale e fallibile; i dati e la logica contano, ma contano anche il contesto storico, i modelli e le comunità. L'epistemologia affronta problemi nuovi: la <b>riproducibilità</b> degli esperimenti (crisi della replicazione nelle scienze sociali e mediche), il ruolo dei <b>modelli</b> e delle simulazioni, l'etica dell'<b>intelligenza artificiale</b>. Sapere come si giudica una teoria serve ancora oggi per valutare le notizie sul clima, sui vaccini, sulle diete: chi parla sta dicendo qualcosa che si può mettere alla prova?</p>`
    },
    {
      type: "example",
      title: "Un esempio: la dieta «miracolosa»",
      html: `<p>Un influencer sostiene che una certa dieta «guarisce da tutto». Se non migliori, ti dice che non l'hai seguita bene; se migliori, è merito suo. Una teoria così, che trova sempre una scappatoia, non è <b>falsificabile</b> e per Popper non è scientifica. Una teoria scientifica sarebbe: «chi segue questa dieta per 3 mesi riduce in media il colesterolo di almeno il 10% rispetto a un gruppo di controllo». Si può testare con uno studio e può risultare falsa. Chiedersi «come potrei capire che si sbaglia?» è il primo passo per valutare una notizia.</p>`
    },
    {
      type: "example",
      title: "Un altro esempio: Plutone e i paradigmi",
      html: `<p>Nel 2006 l'Unione astronomica internazionale ridefinì il concetto di «pianeta» e Plutone fu riclassificato come «pianeta nano». Le osservazioni non erano cambiate: era cambiata la <b>definizione</b>, perché nel frattempo erano stati scoperti altri oggetti simili oltre l'orbita di Nettuno (come Eris, annunciato nel 2005). Per Kuhn episodi del genere mostrano che i concetti scientifici non sono etichette fisse ma dipendono da un quadro teorico condiviso, che a volte si modifica dopo la comparsa di anomalie. Non è una vera «rivoluzione», ma mostra come si ridefiniscono le categorie quando i dati lo richiedono.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che...?",
      html: `<p>Nel 1946, a Cambridge, nel corso di una riunione del Moral Science Club, Popper e <b>Wittgenstein</b> ebbero uno scontro leggendario. Secondo il racconto di Popper, Wittgenstein agitò un attizzatoio da camino mentre discutevano, e Popper, a una richiesta di esempio di regola morale, rispose: «non minacciare i conferenzieri con gli attizzatoi». I testimoni (tra cui Bertrand Russell) ricordano la scena in modi diversi; la vicenda è diventata il soggetto di un libro, <i>Wittgenstein's Poker</i> (2001). Mostra quanto il dibattito filosofico potesse essere acceso.</p>`
    },
    {
      type: "curiosity",
      title: "Il paradigma «papera-coniglio»",
      html: `<p>Kuhn usò l'esempio dei disegni ambigui, come la figura che può essere vista come <b>papera</b> o come <b>coniglio</b>, per illustrare il cambio di paradigma: l'immagine sulla pagina è la stessa, ma il modo di vederla cambia radicalmente. Dopo una rivoluzione, secondo Kuhn, gli scienziati «vivono in un mondo diverso». La metafora è molto discussa: per alcuni è solo un modo di dire, per altri una tesi forte sulla realtà. Ricorda che dietro la scienza ci sono sempre persone che interpretano.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Circolo di Vienna</b> (Schlick, Carnap, Neurath; manifesto 1929): neopositivismo, <b>principio di verificazione</b>; metafisica priva di senso; unità della scienza. Difficoltà: induzione.</li>
<li><b>Popper</b> (1902-1994), <i>Logica della scoperta scientifica</i> (1934): <b>falsificabilità</b> come criterio di demarcazione; <b>congetture e confutazioni</b>; teorie corroborate, non provate; <b>società aperta</b>.</li>
<li><b>Kuhn</b> (1922-1996), <i>La struttura delle rivoluzioni scientifiche</i> (1962): <b>paradigma</b>, scienza normale, anomalie, crisi, <b>rivoluzione scientifica</b>, <b>incommensurabilità</b>.</li>
<li><b>Lakatos</b>: programmi di ricerca; <b>Feyerabend</b>: pluralismo, «anything goes».</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Popper e Kuhn",
      questions: [
        { type: "mc", q: "Qual è per Popper il criterio di demarcazione tra scienza e non-scienza?", options: ["La falsificabilità", "La verificabilità", "La bellezza matematica"], answer: 0, explain: "Una teoria scientifica vieta qualcosa di osservabile e può essere smentita." },
        { type: "tf", q: "Per Kuhn gli scienziati nella fase di scienza normale cercano continuamente di confutare il paradigma.", answer: false, explain: "Lavorano dentro il paradigma, risolvendo rompicapo." },
        { type: "order", q: "Metti in ordine le fasi dello sviluppo scientifico secondo Kuhn.", items: ["Scienza normale", "Anomalie", "Crisi", "Rivoluzione scientifica"], explain: "Poi riparte una nuova scienza normale." }
      ]
    }
  ],
  glossary: [
    { t: "Epistemologia", d: "Studio dei metodi, dei limiti e dello sviluppo della conoscenza scientifica." },
    { t: "Neopositivismo", d: "Corrente del Novecento (Circolo di Vienna) che unisce empirismo e logica." },
    { t: "Principio di verificazione", d: "Un enunciato ha significato solo se è verificabile empiricamente o è una tautologia." },
    { t: "Induzione", d: "Passaggio da casi osservati a una legge generale." },
    { t: "Falsificabilità", d: "Possibilità di essere smentita dall'esperienza: criterio di scientificità per Popper." },
    { t: "Corroborazione", d: "Per Popper, la provvisoria tenuta di una teoria che ha superato test severi." },
    { t: "Paradigma", d: "Quadro condiviso di teorie, metodi e esempi di una comunità scientifica (Kuhn)." },
    { t: "Scienza normale", d: "Fase in cui si lavora a risolvere rompicapo dentro un paradigma." },
    { t: "Incommensurabilità", d: "Impossibilità di tradurre completamente i concetti di due paradigmi." },
    { t: "Programma di ricerca", d: "Per Lakatos, un nucleo di teorie con ipotesi ausiliarie, progressivo o regressivo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi fu il fondatore del Circolo di Vienna?", options: ["Karl Popper", "Thomas Kuhn", "Moritz Schlick"], answer: 2, explain: "Fu assassinato nel 1936 a Vienna." },
      { type: "mc", q: "Quale problema impedisce di verificare in modo definitivo una legge scientifica universale?", options: ["La mancanza di strumenti", "Il problema dell'induzione", "La censura"], answer: 1, explain: "Le osservazioni sono finite, le leggi universali." },
      { type: "tf", q: "Per Popper una singola osservazione contraria può falsificare una legge universale.", answer: true, explain: "È l'asimmetria tra verificare e falsificare." },
      { type: "text", q: "Come si chiama l'insieme di teorie, metodi e valori condivisi da una comunità scientifica per Kuhn?", answer: ["paradigma", "il paradigma"], explain: "Il concetto centrale della Struttura delle rivoluzioni scientifiche." },
      { type: "mc", q: "In quale anno uscì La struttura delle rivoluzioni scientifiche?", options: ["1962", "1934", "1975"], answer: 0, explain: "Fu pubblicata nel 1962." },
      { type: "mc", q: "Che cosa sostiene Feyerabend in Contro il metodo?", options: ["La scienza è inutile", "Non esiste un metodo scientifico universale: anything goes", "Il metodo di Popper è l'unico valido"], answer: 1, explain: "Una tesi provocatoria in favore del pluralismo." },
      { type: "mc", q: "Perché Popper non considerava scientifiche le teorie che spiegano qualsiasi cosa?", options: ["Perché sono troppo complicate", "Perché sono antiche", "Perché non vietano nulla e non possono essere smentite"], answer: 2, explain: "Una teoria irrefutabile non ha contenuto empirico." },
      { type: "tf", q: "Secondo Kuhn il passaggio da un paradigma all'altro avviene in modo puramente logico e cumulativo.", answer: false, explain: "È una rivoluzione, con incommensurabilità e fattori anche sociali." },
      { type: "mc", q: "Quale evento del 1919 è usato per illustrare una previsione rischiosa?", options: ["L'osservazione della deviazione della luce durante un'eclissi", "La scoperta del Nettuno", "L'invenzione del telescopio"], answer: 0, explain: "Confermò la previsione della relatività generale." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Manifesto del Circolo di Vienna", "Logica della scoperta scientifica", "La struttura delle rivoluzioni scientifiche", "Contro il metodo"], explain: "1929, 1934, 1962, 1975." }
    ]
  }
});
