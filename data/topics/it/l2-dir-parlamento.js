TOPIC('it', {
  id: "l2-dir-parlamento",
  title: "Il Parlamento",
  intro: "Ogni giorno vivi dentro regole fatte dal <b>Parlamento</b>: il limite di età per guidare, le norme sulla scuola, le tasse, perfino le regole sul web. Ma chi sono davvero i parlamentari? Perché le Camere sono due e non una? E come fa un'idea a diventare <b>legge</b>? In questa lezione, dopo aver visto in prima lo Stato e i principi della Costituzione, entriamo nell'organo che rappresenta il popolo sovrano: la sua composizione, le sue funzioni, l'<b>iter legislativo</b> e i limiti che la Costituzione pone al potere di chi fa le leggi.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Perché serve un Parlamento",
      html: `<p>In prima hai visto che l'art. 1 della Costituzione afferma: «La sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione». Ma un Paese di quasi 59 milioni di abitanti non può decidere ogni legge con un'assemblea di tutti. Il popolo esercita quindi la sovranità soprattutto in modo <b>indiretto</b>, eleggendo dei <b>rappresentanti</b>. Questo modello si chiama <b>democrazia rappresentativa</b>, ed è affiancato da alcuni strumenti di <b>democrazia diretta</b> (il referendum, l'iniziativa popolare delle leggi).</p>
<p>Il Parlamento è l'organo che incarna il <b>potere legislativo</b> (ricordi la separazione dei poteri di Montesquieu): fa le leggi, controlla il Governo, e svolge altre funzioni essenziali per l'equilibrio dello Stato. È disciplinato dagli artt. 55-82 della Costituzione, nella Parte II, dedicata all'«Ordinamento della Repubblica».</p>
<p>Da dove viene l'idea? Dall'Inghilterra: il <i>Parliament</i> nasce nel Medioevo come assemblea in cui il re ottiene il consenso ai tributi. La <b>Magna Charta</b> del 1215 sanciva già il principio per cui il sovrano non poteva imporre tasse senza il consenso dei suoi baroni; da qui la formula «no taxation without representation», che gli americani useranno contro la madrepatria nel 1776. L'idea è semplice: <b>chi paga e obbedisce deve poter contare nelle decisioni</b>.</p>`
    },
    {
      type: "text",
      title: "2. Il bicameralismo: Camera e Senato",
      html: `<p>Il Parlamento italiano è composto da due Camere: la <b>Camera dei deputati</b> (sede a Palazzo Montecitorio) e il <b>Senato della Repubblica</b> (sede a Palazzo Madama), entrambe a Roma. È il sistema del <b>bicameralismo perfetto</b> (o paritario): le due Camere hanno <b>gli stessi poteri</b> e per approvare una legge devono votare lo <b>stesso testo</b>. Il Governo, per restare in carica, deve ottenere la fiducia di <b>entrambe</b>.</p>
<p>Dopo la riforma costituzionale confermata dal <b>referendum del 20-21 settembre 2020</b>, i numeri sono stati ridotti a partire dalla XIX legislatura (eletta nel settembre 2022):</p>
<table>
<tr><th></th><th>Camera dei deputati</th><th>Senato della Repubblica</th></tr>
<tr><td>Componenti eletti</td><td>400 deputati</td><td>200 senatori</td></tr>
<tr><td>Elettorato attivo (chi vota)</td><td>18 anni</td><td>18 anni</td></tr>
<tr><td>Elettorato passivo (chi può essere eletto)</td><td>25 anni</td><td>40 anni</td></tr>
</table>
<p>Prima della riforma erano 630 deputati e 315 senatori elettivi. Al Senato siedono poi anche i <b>senatori a vita</b>: sono di diritto gli ex Presidenti della Repubblica, e il Presidente della Repubblica può nominarne altri per altissimi meriti in campo sociale, scientifico, artistico e letterario (art. 59); la Costituzione (dopo la riforma del 2020) fissa espressamente a <b>cinque</b> il numero complessivo di quelli di nomina presidenziale. Il diritto di voto per il Senato era riservato ai maggiori di 25 anni fino alla <b>legge costituzionale n. 1 del 2021</b>, che lo ha abbassato a 18 anni, uniformandolo alla Camera.</p>
<p>La durata normale del mandato, la <b>legislatura</b>, è di <b>cinque anni</b> (art. 60); può essere prorogata solo in caso di guerra. Il Presidente della Repubblica può sciogliere anticipatamente le Camere (art. 88), come vedremo nella lezione sul Governo.</p>`
    },
    {
      type: "svg",
      title: "Come è fatto il Parlamento",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schema del Parlamento italiano">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<rect x="190" y="12" width="220" height="44" rx="10" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
<text x="300" y="40" text-anchor="middle" font-size="18" font-weight="bold" fill="#312e81">PARLAMENTO</text>
<line x1="260" y1="56" x2="150" y2="100" stroke="#475569" stroke-width="2"/>
<line x1="340" y1="56" x2="450" y2="100" stroke="#475569" stroke-width="2"/>
<rect x="40" y="100" width="220" height="90" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="150" y="128" text-anchor="middle" font-size="17" font-weight="bold" fill="#1e3a8a">CAMERA</text>
<text x="150" y="150" text-anchor="middle" font-size="14" fill="#1e293b">400 deputati</text>
<text x="150" y="170" text-anchor="middle" font-size="14" fill="#1e293b">eleggibili da 25 anni</text>
<rect x="340" y="100" width="220" height="90" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="450" y="128" text-anchor="middle" font-size="17" font-weight="bold" fill="#14532d">SENATO</text>
<text x="450" y="150" text-anchor="middle" font-size="14" fill="#1e293b">200 senatori + a vita</text>
<text x="450" y="170" text-anchor="middle" font-size="14" fill="#1e293b">eleggibili da 40 anni</text>
<line x1="260" y1="145" x2="340" y2="145" stroke="#b45309" stroke-width="3"/>
<text x="300" y="136" text-anchor="middle" font-size="14" font-weight="bold" fill="#b45309">stessi poteri</text>
<rect x="40" y="222" width="520" height="56" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="300" y="246" text-anchor="middle" font-size="15" font-weight="bold" fill="#78350f">Legislatura: 5 anni · Camere in seduta comune per le elezioni più importanti</text>
<text x="300" y="267" text-anchor="middle" font-size="14" fill="#1e293b">(Presidente della Repubblica, giudici costituzionali)</text>
</svg>`,
      caption: "Il bicameralismo perfetto: due Camere con gli stessi poteri."
    },
    {
      type: "text",
      title: "3. Come si diventa parlamentari: il sistema elettorale",
      html: `<p>I parlamentari sono eletti a <b>suffragio universale e diretto</b> (art. 56 e 58), con voto libero, uguale, personale e segreto (art. 48). Il modo in cui i voti si trasformano in seggi dipende dalla <b>legge elettorale</b>, che il Parlamento può cambiare: la Costituzione non impone un sistema preciso.</p>
<p>I due modelli di base sono:</p>
<ul>
<li><b>maggioritario</b>: il candidato (o la lista) che prende più voti in ciascun collegio vince il seggio; favorisce governi stabili ma "perde" i voti dei perdenti;</li>
<li><b>proporzionale</b>: i seggi sono distribuiti in proporzione ai voti ottenuti da ogni lista; rappresenta meglio tutte le opinioni ma spesso porta a governi di coalizione.</li>
</ul>
<p>Dal 2017 si vota con il cosiddetto <b>Rosatellum</b> (legge n. 165/2017), un sistema <b>misto</b>: circa un terzo dei seggi si assegna con collegi uninominali maggioritari e circa due terzi con il metodo proporzionale (con una soglia di sbarramento del 3% per le liste), più alcuni seggi per i cittadini italiani residenti all'estero. La Corte costituzionale ha dichiarato illegittime le leggi elettorali precedenti più volte, per esempio con la <b>sentenza n. 1 del 2014</b> sul "Porcellum": segno che anche il legislatore deve rispettare la Costituzione.</p>
<p><b>Attenzione a un principio chiave</b>: l'art. 67 stabilisce che «ogni membro del Parlamento rappresenta la Nazione ed esercita le sue funzioni senza vincolo di mandato». Un deputato, cioè, non è un delegato che deve obbedire ai suoi elettori o al suo partito su ogni voto: risponde alla Nazione intera e non può essere revocato dagli elettori durante il mandato.</p>`
    },
    {
      type: "example",
      title: "Maggioritario o proporzionale? Un esempio con tre liste",
      html: `<p>Un collegio elegge 1 deputato con il sistema maggioritario. I voti sono: lista A 38%, lista B 35%, lista C 27%. <b>Vince A</b> con il 38%, e il 62% degli elettori non ha un rappresentante di sua scelta.</p>
<p>Se invece si assegnassero 10 seggi in modo proporzionale, A otterrebbe circa 4 seggi, B circa 3 o 4, C circa 3: ciascuna lista è presente in proporzione. Il prezzo è che nessuna ha la maggioranza (almeno 6 seggi) e serve una <b>coalizione</b>. Nessun sistema è perfetto: ognuno sceglie tra <i>rappresentatività</i> e <i>governabilità</i>.</p>`
    },
    {
      type: "quiz",
      title: "Controlla subito",
      questions: [
        { type: "mc", q: "Che cosa significa «bicameralismo perfetto»?", options: ["Le due Camere hanno gli stessi poteri e devono approvare lo stesso testo", "Il Senato approva e la Camera controlla", "Le Camere si riuniscono sempre insieme"], answer: 0, explain: "In Italia Camera e Senato sono paritarie: stesse funzioni, stessa fiducia al Governo, stesso testo di legge." },
        { type: "num", q: "Quanti sono i deputati dopo la riforma del 2020?", answer: 400, tol: 0, explain: "Erano 630: la riforma confermata dal referendum del 2020 li ha portati a 400 (e i senatori elettivi da 315 a 200)." },
        { type: "tf", q: "Un parlamentare è obbligato a votare come gli chiedono gli elettori del suo collegio.", answer: false, explain: "L'art. 67 esclude il vincolo di mandato: il parlamentare rappresenta la Nazione." }
      ]
    },
    {
      type: "text",
      title: "4. Le funzioni del Parlamento",
      html: `<p>Il Parlamento non si limita a fare le leggi. Svolge più funzioni:</p>
<ul>
<li><b>Funzione legislativa</b>: approva le leggi ordinarie e le leggi costituzionali (art. 70: «La funzione legislativa è esercitata collettivamente dalle due Camere»).</li>
<li><b>Funzione di indirizzo politico</b>: accorda (o toglie) la <b>fiducia</b> al Governo (art. 94), approva il bilancio dello Stato (art. 81), autorizza la ratifica dei trattati internazionali più importanti, delibera lo stato di guerra (art. 78).</li>
<li><b>Funzione di controllo</b>: strumenti come le <b>interrogazioni</b> (domanda scritta o orale a un ministro su un fatto preciso), le <b>interpellanze</b> (domanda sui motivi di una condotta del Governo), le <b>mozioni</b> e le <b>commissioni d'inchiesta</b>, che hanno gli stessi poteri dell'autorità giudiziaria (art. 82).</li>
<li><b>Funzioni elettive e di garanzia</b>: il Parlamento in seduta comune, integrato da 58 delegati regionali, elegge il <b>Presidente della Repubblica</b> (art. 83); elegge anche cinque giudici della Corte costituzionale (art. 135) e i componenti laici del Consiglio superiore della magistratura, cioè un terzo dei membri elettivi (art. 104).</li>
</ul>
<p>Ogni Camera si organizza con un <b>Presidente</b>, un ufficio di presidenza, e i <b>gruppi parlamentari</b> (i parlamentari dello stesso partito o area politica). Gran parte del lavoro si svolge nelle <b>commissioni permanenti</b>, piccole assemblee specializzate per materia (Giustizia, Bilancio, Cultura, Esteri...) dove le proposte vengono studiate e modificate prima di arrivare in Aula.</p>
<p>Per le deliberazioni, ciascuna Camera è valida con la presenza della <b>maggioranza dei componenti</b> e decide a <b>maggioranza dei presenti</b> (art. 64): è il cosiddetto <b>quorum</b>. Per le votazioni più importanti servono maggioranze qualificate.</p>`
    },
    {
      type: "text",
      title: "5. L'iter legislativo: come nasce una legge",
      html: `<p>Il percorso con cui si approva una legge ordinaria è detto <b>iter legislativo</b> (o <i>iter legis</i>). Le tappe sono:</p>
<ol>
<li><b>Iniziativa</b> (art. 71): il progetto di legge (<i>disegno di legge</i> se proviene dal Governo, <i>proposta di legge</i> se da altri) può essere presentato dal <b>Governo</b>, da ogni <b>parlamentare</b>, dal <b>popolo</b> (almeno 50.000 elettori con firme), dai <b>Consigli regionali</b> e dal CNEL (Consiglio nazionale dell'economia e del lavoro).</li>
<li><b>Esame in commissione</b> (art. 72): il testo viene assegnato alla commissione competente, che lo discute e può emendarlo.</li>
<li><b>Discussione e voto in Aula</b>: la Camera esamina il testo articolo per articolo e poi lo vota nel complesso («voto finale»).</li>
<li><b>Passaggio all'altra Camera</b>: lo stesso testo deve essere approvato dall'altra Camera; se la seconda Camera lo modifica, torna alla prima (la cosiddetta «navetta»), finché il testo è identico.</li>
<li><b>Promulgazione</b> (art. 73): il Presidente della Repubblica, entro un mese dall'approvazione, <b>promulga</b> la legge, oppure può rinviarla alle Camere con un messaggio motivato chiedendo una nuova deliberazione (art. 74). Se le Camere la riapprovano senza modifiche, il Presidente deve promulgarla.</li>
<li><b>Pubblicazione</b> nella <b>Gazzetta Ufficiale</b> e <b>entrata in vigore</b>, normalmente dopo 15 giorni (la <i>vacatio legis</i>, cioè l'intervallo che permette ai cittadini di conoscere la norma).</li>
</ol>
<p>Per una legge di <b>revisione della Costituzione</b> serve un procedimento più difficile (art. 138): <b>due deliberazioni</b> per ciascuna Camera, a distanza di almeno <b>tre mesi</b>; nella seconda votazione serve la maggioranza assoluta (metà più uno dei componenti). Se non si raggiungono i due terzi dei componenti in ciascuna Camera, entro tre mesi si può chiedere un <b>referendum confermativo</b> (richiesto da un quinto dei membri di una Camera, 500.000 elettori o cinque Consigli regionali), che non richiede quorum di partecipazione. La Costituzione è dunque <b>rigida</b>: non si cambia con una legge qualsiasi.</p>`
    },
    {
      type: "svg",
      title: "L'iter di una legge",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fasi dell'iter legislativo">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<rect x="15" y="30" width="105" height="70" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="67" y="58" text-anchor="middle" font-size="15" font-weight="bold" fill="#78350f">1. Iniziativa</text>
<text x="67" y="80" text-anchor="middle" font-size="14" fill="#1e293b">Governo, ecc.</text>
<rect x="135" y="30" width="105" height="70" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="187" y="58" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e3a8a">2. Commissione</text>
<text x="187" y="80" text-anchor="middle" font-size="14" fill="#1e293b">esame, emendamenti</text>
<rect x="255" y="30" width="105" height="70" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="307" y="58" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e3a8a">3. Aula</text>
<text x="307" y="80" text-anchor="middle" font-size="14" fill="#1e293b">voto articoli</text>
<rect x="375" y="30" width="105" height="70" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="427" y="58" text-anchor="middle" font-size="15" font-weight="bold" fill="#14532d">4. Altra Camera</text>
<text x="427" y="80" text-anchor="middle" font-size="14" fill="#1e293b">stesso testo</text>
<rect x="495" y="30" width="95" height="70" rx="10" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
<text x="542" y="58" text-anchor="middle" font-size="15" font-weight="bold" fill="#831843">5. Presidente</text>
<text x="542" y="80" text-anchor="middle" font-size="14" fill="#1e293b">promulga</text>
<line x1="120" y1="65" x2="135" y2="65" stroke="#334155" stroke-width="3"/>
<line x1="240" y1="65" x2="255" y2="65" stroke="#334155" stroke-width="3"/>
<line x1="360" y1="65" x2="375" y2="65" stroke="#334155" stroke-width="3"/>
<line x1="480" y1="65" x2="495" y2="65" stroke="#334155" stroke-width="3"/>
<path d="M542 100 L542 150 L300 150 L300 185" fill="none" stroke="#334155" stroke-width="3"/>
<rect x="190" y="185" width="220" height="60" rx="10" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
<text x="300" y="212" text-anchor="middle" font-size="15" font-weight="bold" fill="#312e81">6. Gazzetta Ufficiale</text>
<text x="300" y="234" text-anchor="middle" font-size="14" fill="#1e293b">in vigore dopo 15 giorni</text>
<text x="300" y="285" text-anchor="middle" font-size="14" fill="#475569">Se le due Camere approvano testi diversi, il testo torna avanti e indietro</text>
</svg>`,
      caption: "Dalla proposta alla Gazzetta Ufficiale."
    },
    {
      type: "widget",
      title: "Abbina articolo e contenuto",
      widget: "match",
      options: {
        pairs: [
          ["Art. 71", "Chi può presentare una proposta di legge"],
          ["Art. 72", "Esame in commissione e in Aula"],
          ["Art. 73", "Promulgazione entro un mese"],
          ["Art. 74", "Rinvio alle Camere con messaggio motivato"],
          ["Art. 138", "Revisione della Costituzione"],
          ["Art. 67", "Divieto di mandato imperativo"]
        ]
      },
      caption: "Collega l'articolo della Costituzione al suo contenuto."
    },
    {
      type: "text",
      title: "6. Oltre la legge ordinaria: decreti e referendum",
      html: `<p>Nella pratica, non tutte le norme con forza di legge nascono dall'iter ordinario. La Costituzione prevede alcune <b>eccezioni</b> in cui anche il Governo può emanare atti con <b>forza di legge</b>:</p>
<ul>
<li><b>Decreto-legge</b> (art. 77): in «casi straordinari di necessità e urgenza», il Governo adotta un decreto con forza di legge, che il Presidente emana e che deve essere presentato <b>il giorno stesso</b> alle Camere. Se il Parlamento non lo <b>converte in legge entro 60 giorni</b> dalla pubblicazione, il decreto <b>perde efficacia fin dall'inizio</b>. È uno strumento usato tantissimo, tanto che la Corte costituzionale è intervenuta più volte a ricordare che non può servire per le materie ordinarie.</li>
<li><b>Decreto legislativo</b> (art. 76): il Parlamento delega il Governo a scrivere norme su una materia, con una <b>legge delega</b> che fissa principi, oggetto e tempo limitato. Così si approvano i grandi codici complessi.</li>
</ul>
<p>Il potere legislativo del Parlamento è inoltre integrato dagli strumenti di <b>democrazia diretta</b>:</p>
<ul>
<li><b>Referendum abrogativo</b> (art. 75): 500.000 elettori (o cinque Consigli regionali) possono chiedere di abrogare, in tutto o in parte, una legge. È valido solo se vota la <b>maggioranza degli aventi diritto</b> (quorum del 50% + 1) e se prevale il sì. Non è ammesso per le leggi tributarie, di bilancio, di amnistia e indulto, di autorizzazione alla ratifica di trattati internazionali. La Corte costituzionale ne giudica l'ammissibilità.</li>
<li><b>Referendum costituzionale</b> (art. 138), visto sopra.</li>
<li><b>Iniziativa popolare</b> (art. 71): 50.000 firme per presentare una proposta di legge.</li>
</ul>`
    },
    {
      type: "example",
      title: "Seguiamo una legge dall'inizio alla fine",
      html: `<p>Immagina che un gruppo di studenti, con un'associazione, raccolga <b>50.000 firme</b> per una proposta di legge che renda gratuiti i libri di testo nelle scuole superiori. La proposta viene presentata alla Camera, assegnata alla commissione Cultura e istruzione, discussa, modificata (ad esempio si limita la gratuità alle famiglie con ISEE basso), votata in Aula e trasmessa al Senato. Qui un emendamento la modifica ancora: torna alla Camera, che approva il testo definitivo. Il Presidente della Repubblica la promulga, la Gazzetta Ufficiale la pubblica, dopo 15 giorni entra in vigore.</p>
<p>Passano mesi o anni: la maggior parte delle proposte di iniziativa popolare, in realtà, non arriva in fondo. Questo mostra la differenza tra <b>avere il diritto di proporre</b> e <b>avere il potere di decidere</b>: la decisione resta ai rappresentanti.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il Parlamento è formato da <b>Camera (400)</b> e <b>Senato (200 elettivi + senatori a vita)</b>, con <b>gli stessi poteri</b>: bicameralismo perfetto.</li>
<li>La <b>legislatura dura 5 anni</b>; il parlamentare <b>non ha vincolo di mandato</b> (art. 67).</li>
<li>Funzioni: legislativa, di indirizzo (fiducia), di controllo, elettiva.</li>
<li><b>Iter</b>: iniziativa → commissione → Aula → altra Camera → promulgazione → Gazzetta Ufficiale.</li>
<li>La Costituzione è <b>rigida</b>: si cambia solo con la procedura aggravata dell'art. 138.</li>
<li><b>Decreto-legge</b>: urgenza, va convertito in <b>60 giorni</b>.</li>
</ul>`
    },
    {
      type: "decision",
      title: "1946: una Camera o due?",
      html: `<p>Nel 1946-47 l'Assemblea Costituente discute come costruire il Parlamento. Dal fascismo l'Italia esce con un'esigenza fortissima: <b>impedire che un solo uomo o un solo partito concentri tutto il potere</b>. Alcuni costituenti propongono una sola Camera, più rapida ed economica. Altri chiedono due Camere con funzioni diverse (una politica, una di rappresentanza delle regioni). Altri ancora due Camere identiche per maggiore ponderazione.</p>`,
      question: "Se fossi stato un costituente, quale modello avresti scelto?",
      options: [
        { label: "Una sola Camera", outcome: "Il processo sarebbe stato più veloce e meno costoso. Ma una sola assemblea, con una maggioranza forte, potrebbe approvare leggi affrettate o pericolose senza un secondo esame." },
        { label: "Due Camere con funzioni diverse", outcome: "È il modello del Senato federale (come in Germania o negli Stati Uniti): rappresenta i territori, ma richiede un assetto federale che l'Italia non aveva." },
        { label: "Due Camere con gli stessi poteri", outcome: "Fu la scelta effettiva: ogni legge è esaminata due volte e la ponderazione è maggiore, ma l'iter è più lungo." }
      ],
      answer: 2,
      explain: "La Costituente scelse il bicameralismo paritario, nel timore di un potere troppo concentrato dopo vent'anni di dittatura. Il sistema è garantista ma lento: per questo si parla da decenni di riforme. Quella del 2016 (Renzi-Boschi), che avrebbe trasformato il Senato, fu respinta dal referendum del 4 dicembre 2016; quella che riduce il numero dei parlamentari fu approvata nel 2020."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il Parlamento",
      intro: "Se la procedura ti sembra astratta, prova a guardarla da altre angolazioni.",
      tabs: [
        {
          label: "🏫 L'assemblea di classe",
          html: `<p>Pensa all'assemblea di istituto: ogni classe elegge i suoi rappresentanti, che portano in assemblea le richieste, le discutono, le votano e decidono. Il Parlamento fa lo stesso su scala nazionale: <b>i deputati sono i "rappresentanti di classe" dell'Italia</b>. Non decidono di testa propria sul singolo voto per conto dei loro elettori (<i>niente mandato imperativo</i>) ma devono rendere conto alle elezioni successive.</p>`
        },
        {
          label: "✍️ Una revisione a due controlli",
          html: `<p>Come in un giornale ogni articolo passa dal redattore al caporedattore, così ogni legge passa da due Camere. Il <b>secondo controllo</b> riduce errori e leggi fatte in fretta. Ma ogni passaggio aggiunge tempo: il Parlamento ha dunque due enormi esigenze in tensione, <b>ponderazione</b> e <b>rapidità</b>. Il decreto-legge è la valvola con cui il Governo prova a velocizzare.</p>`
        },
        {
          label: "🎲 Metodi elettorali a confronto",
          html: `<p>Immagina di dover distribuire 4 torte tra tre classi che hanno votato (A 50%, B 30%, C 20%). Con il sistema <b>maggioritario</b> «chi vince prende tutto» la torta va tutta ad A. Con il <b>proporzionale</b>: A prende 2 torte, B 1, C 1 (circa). Il primo premia chi vince, il secondo rispecchia ogni voce. In mezzo, i sistemi misti, come quello italiano attuale.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: il Parlamento",
      nodes: [
        { id: "sovr", label: "Sovranità popolare", x: 50, y: 6, color: "#dc2626", html: "Il popolo è sovrano (art. 1) e la esercita eleggendo i rappresentanti.", why: "Dopo il fascismo i costituenti vollero ancorare tutto il potere al popolo. Il Parlamento è l'organo che lo rappresenta più direttamente: è eletto con suffragio universale e diretto." },
        { id: "parl", label: "Parlamento", x: 50, y: 34, color: "#2563eb", html: "Camera dei deputati e Senato della Repubblica: 5 anni di legislatura.", why: "Deriva dall'esperienza del Parliament inglese. La Costituzione lo descrive come primo degli organi dello Stato perché è quello che esprime direttamente la volontà popolare." },
        { id: "bicam", label: "Bicameralismo", x: 15, y: 55, color: "#16a34a", html: "Due Camere con gli stessi poteri.", why: "Scelto nel 1947 per evitare decisioni affrettate e concentrazione del potere. Il prezzo è la lentezza: da qui le proposte di riforma e la riduzione dei parlamentari." },
        { id: "funz", label: "Funzioni", x: 85, y: 55, color: "#f59e0b", html: "Legislativa, indirizzo, controllo, elezione di organi di garanzia.", why: "Il Parlamento non solo fa le leggi: controlla il Governo (art. 94), approva il bilancio (art. 81) e elegge il Presidente della Repubblica, perché in una democrazia parlamentare tutti i poteri devono avere una radice nel voto." },
        { id: "iter", label: "Iter legis", x: 30, y: 85, color: "#a855f7", html: "Iniziativa, commissioni, Aula, due Camere, promulgazione.", why: "Una procedura lunga e formale tutela la minoranza e dà tempo a opinioni diverse di essere ascoltate: le garanzie di forma sono garanzie di libertà." },
        { id: "rigida", label: "Costituzione rigida", x: 72, y: 85, color: "#0891b2", html: "Art. 138: doppia deliberazione, 3 mesi, referendum possibile.", why: "Chi ha scritto la Costituzione sapeva che le maggioranze cambiano: per proteggere i principi fondamentali dall'umore del momento, ha reso più difficile modificarli di quanto lo sia cambiare una legge ordinaria." }
      ],
      edges: [["sovr", "parl", "elegge"], ["parl", "bicam", "è organizzato in"], ["parl", "funz", "esercita"], ["funz", "iter", "legislativa: segue"], ["funz", "rigida", "revisione: segue"]]
    },
    {
      type: "curiosity",
      title: "Chi ha scritto la Costituzione?",
      html: `<p>La Costituzione fu scritta dall'<b>Assemblea Costituente</b>, eletta il 2 giugno 1946 (lo stesso giorno del referendum Repubblica-Monarchia) e riunita per la prima volta il <b>25 giugno 1946</b>. Il testo fu approvato il <b>22 dicembre 1947</b>, promulgato dal Capo provvisorio dello Stato Enrico De Nicola il 27 dicembre ed entrò in vigore il <b>1° gennaio 1948</b>. Alla Costituente sedevano 556 membri, tra cui 21 donne, le «Madri costituenti», che contribuirono in modo decisivo agli articoli sull'uguaglianza.</p>`
    },
    {
      type: "curiosity",
      title: "Immunità: privilegio o garanzia?",
      html: `<p>L'art. 68 protegge i parlamentari: non possono essere chiamati a rispondere delle <b>opinioni espresse e dei voti dati</b> nell'esercizio delle loro funzioni (<i>insindacabilità</i>). Questa regola nasce per evitare che il potere esecutivo o giudiziario possa intimidire gli eletti: nel Medioevo e nell'età moderna il re poteva far arrestare chi lo contraddiceva. Non è un privilegio personale, ma una garanzia dell'<b>indipendenza del Parlamento</b>. Per altri atti, come le intercettazioni o le perquisizioni, la Camera di appartenenza deve dare l'autorizzazione per procedere.</p>`
    },
    {
      type: "quiz",
      title: "Secondo controllo",
      questions: [
        { type: "mc", q: "Entro quanto tempo il Presidente della Repubblica deve promulgare una legge approvata?", options: ["Un mese", "Una settimana", "Un anno"], answer: 0, explain: "Art. 73: la legge è promulgata entro un mese dall'approvazione, salvo rinvio motivato alle Camere (art. 74)." },
        { type: "tf", q: "Un decreto-legge perde efficacia se non è convertito in legge entro 60 giorni.", answer: true, explain: "Art. 77: decade fin dall'inizio se le Camere non lo convertono nei 60 giorni successivi alla pubblicazione." },
        { type: "mc", q: "Quante firme servono per una proposta di legge di iniziativa popolare?", options: ["50.000", "500.000", "5.000"], answer: 0, explain: "Art. 71: almeno 50.000 elettori. Per chiedere un referendum abrogativo ne servono 500.000." }
      ]
    }
  ],
  glossary: [
    { t: "Legislatura", d: "Periodo di durata del Parlamento, normalmente cinque anni." },
    { t: "Bicameralismo perfetto", d: "Sistema in cui due Camere hanno gli stessi poteri e devono approvare lo stesso testo di legge." },
    { t: "Iter legis", d: "Il procedimento con cui una proposta diventa legge." },
    { t: "Promulgazione", d: "Atto con cui il Presidente della Repubblica dichiara che una legge è stata approvata e ne ordina la pubblicazione." },
    { t: "Vacatio legis", d: "Periodo tra la pubblicazione di una legge e la sua entrata in vigore (di regola 15 giorni)." },
    { t: "Vincolo di mandato", d: "Obbligo, per un eletto, di seguire le istruzioni degli elettori o del partito: in Italia è escluso (art. 67)." },
    { t: "Decreto-legge", d: "Atto del Governo con forza di legge, emanato in caso di necessità e urgenza, da convertire in 60 giorni." },
    { t: "Referendum abrogativo", d: "Votazione popolare per cancellare in tutto o in parte una legge; valido se partecipa la maggioranza degli aventi diritto." },
    { t: "Fiducia", d: "Voto con cui il Parlamento sostiene il Governo." },
    { t: "Costituzione rigida", d: "Costituzione modificabile solo con una procedura più difficile di quella delle leggi ordinarie." },
    { t: "Quorum", d: "Numero minimo di presenti o di voti necessari per la validità di una votazione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quanti senatori elettivi ci sono nel Senato dopo la riforma del 2020?", options: ["200", "315", "400"], answer: 0, explain: "I senatori elettivi sono passati da 315 a 200 e i deputati da 630 a 400." },
      { type: "tf", q: "Camera e Senato hanno funzioni diverse: la Camera fa le leggi, il Senato le controlla.", answer: false, explain: "In Italia il bicameralismo è paritario: le due Camere hanno gli stessi poteri." },
      { type: "mc", q: "Quanto dura normalmente la legislatura?", options: ["Cinque anni", "Sette anni", "Quattro anni"], answer: 0, explain: "Art. 60: le Camere sono elette per cinque anni." },
      { type: "text", q: "Come si chiama l'atto con cui il Presidente della Repubblica rende perfetta una legge approvata dalle Camere?", answer: ["promulgazione", "la promulgazione"], explain: "La promulgazione precede la pubblicazione in Gazzetta Ufficiale." },
      { type: "order", q: "Metti in ordine le fasi dell'iter di una legge.", items: ["Iniziativa", "Esame in commissione", "Voto in Aula", "Approvazione dell'altra Camera", "Promulgazione", "Pubblicazione in Gazzetta Ufficiale"], explain: "Dalla proposta fino all'entrata in vigore." },
      { type: "num", q: "In quanti giorni un decreto-legge deve essere convertito dal Parlamento?", answer: 60, tol: 0, unit: "giorni", explain: "Art. 77: se non viene convertito in 60 giorni, il decreto decade." },
      { type: "mc", q: "Che cosa vieta l'art. 67 della Costituzione?", options: ["Il vincolo di mandato dei parlamentari", "La rielezione dei parlamentari", "La presenza di senatori a vita"], answer: 0, explain: "Ogni parlamentare rappresenta la Nazione senza vincolo di mandato." },
      { type: "mc", q: "Per cambiare la Costituzione serve…", options: ["Una doppia deliberazione di ogni Camera a distanza di almeno tre mesi", "Una sola votazione a maggioranza semplice", "Solo un referendum popolare"], answer: 0, explain: "Art. 138: procedura aggravata, che rende la Costituzione rigida." },
      { type: "tf", q: "Il referendum abrogativo è valido solo se partecipa la maggioranza degli aventi diritto al voto.", answer: true, explain: "Art. 75: serve il quorum del 50% più uno degli aventi diritto." },
      { type: "mc", q: "Chi elegge il Presidente della Repubblica?", options: ["Il Parlamento in seduta comune, integrato dai delegati regionali", "Direttamente il popolo", "Il Consiglio dei ministri"], answer: 0, explain: "Art. 83: Parlamento in seduta comune con tre delegati per ogni Regione (uno per la Valle d'Aosta)." }
    ]
  }
});
