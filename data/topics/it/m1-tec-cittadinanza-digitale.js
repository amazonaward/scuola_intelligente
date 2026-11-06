TOPIC('it', {
  id: `m1-tec-cittadinanza-digitale`,
  title: `Cittadinanza digitale`,
  intro: `Chat di classe, videogiochi online, video, ricerche per i compiti: una parte della nostra vita si svolge in rete. Essere <b>cittadini digitali</b> significa usare internet con <b>rispetto</b>, <b>sicurezza</b> e <b>spirito critico</b>, conoscendo i propri diritti e doveri, proprio come nella vita "dal vivo". Perché, come dice un famoso manifesto, <b>virtuale è reale</b>. 🌐🤝🔐`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. Che cosa significa essere cittadini digitali`,
      html: `<p>Un cittadino ha diritti (essere rispettato, esprimere le proprie idee, essere protetto) e doveri (rispettare gli altri e le leggi). Online vale lo stesso. La cittadinanza digitale, prevista anche nell'insegnamento dell'<b>educazione civica</b> (Legge 92/2019), riguarda cinque grandi temi:</p>
<ol>
<li><b>Comunicare con rispetto</b> (netiquette, niente odio online);</li>
<li><b>Proteggere i dati personali</b> (privacy);</li>
<li><b>Stare al sicuro</b> (password, truffe, sconosciuti);</li>
<li><b>Valutare le informazioni</b> (fonti affidabili e notizie false);</li>
<li><b>Usare la tecnologia con equilibrio</b> (tempo davanti agli schermi, benessere).</li>
</ol>`
    },
    {
      type: `text`, title: `2. La netiquette: le buone maniere in rete`,
      html: `<p><b>Netiquette</b> unisce <i>net</i> (rete) ed <i>etiquette</i> (galateo). Le prime regole furono scritte già nel <b>1995</b> per gli utenti di internet. Ecco le principali:</p>
<ul>
<li>✍️ <b>Scrivi come parleresti di persona</b>: dietro lo schermo c'è una persona vera, con sentimenti veri.</li>
<li>🔠 <b>NON SCRIVERE TUTTO IN MAIUSCOLO</b>: online equivale a urlare.</li>
<li>⏸️ <b>Rileggi prima di inviare</b>: in un messaggio scritto mancano tono di voce ed espressioni; una battuta può sembrare un'offesa.</li>
<li>🤫 <b>Non inoltrare</b> foto, audio o messaggi privati di altri senza il loro permesso.</li>
<li>💬 <b>Nei gruppi</b> (es. la chat di classe) scrivi solo cose utili a tutti; non escludere nessuno; niente catene e spam.</li>
<li>🌙 <b>Rispetta gli orari</b>: non mandare messaggi a tarda notte.</li>
</ul>
<p>In Italia l'associazione <i>Parole O_Stili</i> ha scritto nel <b>2017</b> il <b>Manifesto della comunicazione non ostile</b>, con 10 principi come "<i>Virtuale è reale</i>", "<i>Le parole hanno conseguenze</i>", "<i>Gli insulti non sono argomenti</i>", "<i>Prima di parlare bisogna ascoltare</i>".</p>`
    },
    {
      type: `svg`, title: `Prima di pubblicare: il semaforo del messaggio`,
      caption: `Tre domande prima di premere "invia": se una risposta è no, fermati!`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f1f5f9"/>
<rect x="40" y="20" width="110" height="260" rx="20" fill="#1f2937"/>
<circle cx="95" cy="70" r="34" fill="#ef4444"/>
<circle cx="95" cy="150" r="34" fill="#facc15"/>
<circle cx="95" cy="230" r="34" fill="#22c55e"/>
<text x="95" y="78" font-size="24" text-anchor="middle">✋</text>
<text x="95" y="158" font-size="24" text-anchor="middle">🤔</text>
<text x="95" y="238" font-size="24" text-anchor="middle">✅</text>
<text x="180" y="62" font-size="18" fill="#b91c1c" font-weight="bold">È VERO?</text>
<text x="180" y="86" font-size="15" fill="#334155">Ho controllato la fonte o sto diffondendo una bufala?</text>
<text x="180" y="142" font-size="18" fill="#a16207" font-weight="bold">È GENTILE?</text>
<text x="180" y="166" font-size="15" fill="#334155">Lo direi guardando la persona negli occhi?</text>
<text x="180" y="222" font-size="18" fill="#15803d" font-weight="bold">È UTILE e POSSO CONDIVIDERLO?</text>
<text x="180" y="246" font-size="15" fill="#334155">Serve a qualcuno? Ho il permesso di chi compare?</text>
</svg>`
    },
    {
      type: `text`, title: `3. Privacy e impronta digitale`,
      html: `<p>I <b>dati personali</b> sono tutte le informazioni che permettono di riconoscere una persona: nome e cognome, indirizzo, numero di telefono, scuola frequentata, foto del viso, voce, posizione GPS…</p>
<p>Ogni cosa che pubblichiamo o cerchiamo lascia una traccia: è la nostra <b>impronta digitale</b> (<i>digital footprint</i>). Una foto pubblicata può essere copiata, salvata con uno screenshot e ricondivisa: anche se la cancelli, <b>non puoi essere sicuro che sia sparita</b>.</p>
<p><b>Che cosa dice la legge:</b></p>
<ul>
<li>il <b>GDPR</b> (Regolamento europeo sulla protezione dei dati, in vigore dal <b>25 maggio 2018</b>) protegge i dati di tutti i cittadini dell'Unione Europea;</li>
<li>in Italia un ragazzo può dare da solo il consenso al trattamento dei suoi dati per i servizi online (come i social) solo dai <b>14 anni</b>; prima serve il consenso dei genitori;</li>
<li>la maggior parte dei social network, nelle proprie regole, chiede almeno <b>13 anni</b> per iscriversi;</li>
<li>pubblicare la foto di un'altra persona senza il suo permesso può violare la sua privacy.</li>
</ul>`
    },
    {
      type: `widget`, title: `Gioco: lo posso condividere?`,
      widget: `classify`,
      caption: `Decidi che cosa fare con ciascuna informazione.`,
      options: {
        groups: [`✅ Posso condividerlo`, `⚠️ Chiedo prima a un adulto o all'interessato`, `⛔ Non lo condivido mai online`],
        items: [
          [`Il disegno che ho fatto`, 0], [`Il mio parere su un libro`, 0], [`Una ricetta di torta`, 0],
          [`Una foto della classe in gita`, 1], [`Il video della recita con i compagni`, 1], [`La foto del compleanno di un'amica`, 1],
          [`La mia password`, 2], [`Il mio indirizzo di casa`, 2], [`Dove sono in questo momento`, 2], [`Una foto imbarazzante di un compagno`, 2]
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-quiz: netiquette e privacy`,
      questions: [
        { type: `tf`, q: `Scrivere TUTTO IN MAIUSCOLO in chat equivale a urlare.`, answer: true, explain: `È una delle prime regole della netiquette.` },
        { type: `mc`, q: `Quale di questi è un dato personale?`, options: [`Il titolo del tuo film preferito`, `Il tuo indirizzo di casa`, `Il colore del cielo`], answer: 1, explain: `L'indirizzo permette di identificarti e trovarti.` },
        { type: `mc`, q: `In Italia da che età si può dare da soli il consenso per i dati sui servizi online?`, options: [`10 anni`, `14 anni`, `18 anni`], answer: 1, explain: `14 anni; prima serve il consenso dei genitori.` }
      ]
    },
    {
      type: `text`, title: `4. Sicurezza: password, truffe, sconosciuti`,
      html: `<p><b>🔐 Password forti</b></p>
<ul>
<li>almeno <b>12 caratteri</b>, con lettere maiuscole e minuscole, numeri e simboli; ancora meglio una <b>frase lunga</b> facile da ricordare per te (es. <i>IlMioGattoMangia3Biscotti!</i>);</li>
<li>niente date di nascita, nomi, "123456" o "password";</li>
<li>una password <b>diversa</b> per ogni servizio, e non dirla a nessuno (tranne ai genitori);</li>
<li>attiva la <b>verifica in due passaggi</b> quando possibile.</li>
</ul>
<p><b>🎣 Phishing</b> (da <i>fishing</i>, pescare): messaggi falsi che sembrano arrivare da una banca, da un videogioco o da un amico e chiedono di cliccare un link o inserire la password. Segnali di pericolo: <b>urgenza</b> ("il tuo account sarà chiuso!"), <b>premi incredibili</b> ("hai vinto 10 000 gemme gratis!"), errori di ortografia, indirizzi strani.</p>
<p><b>👤 Sconosciuti</b>: online chiunque può fingere di essere un altro. Non dare mai informazioni personali, non accettare di incontrare dal vivo chi conosci solo online e, se qualcuno ti mette a disagio, <b>parlane subito con un adulto</b>. Non è mai colpa tua.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: quanto è forte la tua password?`,
      html: `<p>Un computer che prova tutte le combinazioni ("attacco a forza bruta") deve fare tanti più tentativi quanto più la password è lunga e varia:</p>
<table>
<tr><th>Password</th><th>Caratteri possibili</th><th>Combinazioni</th></tr>
<tr><td>4 cifre (PIN)</td><td>10</td><td>10<sup>4</sup> = 10 000</td></tr>
<tr><td>8 lettere minuscole</td><td>26</td><td>26<sup>8</sup> ≈ 208 miliardi</td></tr>
<tr><td>12 caratteri misti</td><td>circa 94</td><td>94<sup>12</sup> ≈ 476 000 miliardi di miliardi (un numero con 24 cifre)</td></tr>
</table>
<p>Ogni carattere in più <b>moltiplica</b> le combinazioni: è la potenza delle <b>potenze</b>! Per questo la lunghezza conta più di tutto.</p>`
    },
    {
      type: `text`, title: `5. Cyberbullismo: riconoscerlo e fermarlo`,
      html: `<p>Il <b>cyberbullismo</b> è il bullismo fatto con strumenti digitali: insulti in chat, esclusione volontaria dai gruppi, foto o video imbarazzanti diffusi, profili falsi per prendere in giro qualcuno, minacce.</p>
<p>È particolarmente grave perché: può arrivare <b>a ogni ora</b>, anche a casa; il pubblico è <b>enorme</b>; i contenuti <b>restano</b> e si diffondono; chi offende spesso si sente "nascosto" dietro lo schermo.</p>
<p><b>La legge italiana</b>: la <b>Legge 71 del 2017</b> (aggiornata nel 2024) è stata una delle prime in Europa dedicate al cyberbullismo. Prevede che ogni scuola abbia un <b>docente referente</b> e che un ragazzo dai <b>14 anni</b> (o i genitori) possa chiedere al gestore del sito o del social di <b>rimuovere</b> i contenuti offensivi; se non lo fa entro 48 ore, ci si può rivolgere al <b>Garante della privacy</b>.</p>
<p><b>Che cosa fare:</b> non rispondere alle provocazioni; fare <b>screenshot</b> come prova; <b>bloccare</b> e <b>segnalare</b>; <b>parlarne</b> con genitori, insegnanti o con il <b>Telefono Azzurro (19696)</b>. E se sei spettatore: non mettere "like", non condividere, sostieni chi è preso di mira. Chi tace e guarda aiuta il bullo.</p>`
    },
    {
      type: `decision`, title: `Nella chat di classe: tu cosa faresti?`,
      html: `<p>Nella chat della classe qualcuno pubblica una foto di Luca addormentato sul pullman della gita, con una scritta che lo prende in giro. In pochi minuti arrivano tante risate ed emoji. Luca non è nel gruppo.</p>`,
      question: `Tu cosa faresti?`,
      options: [
        { label: `Metto anch'io una risata: è solo uno scherzo`, outcome: `Ogni like o risata fa sembrare la presa in giro "normale" e incoraggia chi l'ha pubblicata. Per Luca, quando lo scoprirà, sarà ancora più doloroso vedere quanti hanno riso.` },
        { label: `Non scrivo niente e faccio finta di non aver visto`, outcome: `Non partecipi, ed è già meglio. Ma il silenzio lascia la foto lì a circolare: qualcuno potrebbe salvarla e inoltrarla fuori dal gruppo.` },
        { label: `Scrivo che non è giusto, chiedo di cancellarla e avviso un adulto`, outcome: `È la scelta che ferma il cyberbullismo: mostri che non tutti sono d'accordo, la foto ha più probabilità di essere cancellata e un adulto può intervenire. Spesso basta una sola voce perché anche altri trovino il coraggio di dire "basta".` },
        { label: `Inoltro la foto a Luca per avvisarlo`, outcome: `L'intenzione è buona, ma inoltrare la foto la fa circolare ancora. Meglio parlare con Luca di persona e avvisare un adulto.` }
      ],
      answer: 2,
      explain: `La foto è stata pubblicata senza il consenso di Luca e serve a deriderlo: è un comportamento da cyberbullismo. Gli spettatori hanno un grande potere: se nessuno ride e qualcuno dice chiaramente "non è giusto", il bullo perde il suo pubblico. Coinvolgere un adulto (insegnante, referente per il cyberbullismo, genitori) permette di far rimuovere la foto e di aiutare sia Luca sia chi l'ha pubblicata a capire l'errore.`
    },
    {
      type: `text`, title: `6. Informarsi bene: notizie false e fonti`,
      html: `<p>Online circolano anche <b>notizie false</b> (<i>fake news</i>, bufale), foto modificate e oggi anche <b>deepfake</b>: video o audio creati con l'intelligenza artificiale in cui una persona sembra dire cose mai dette.</p>
<p><b>Come verificare, passo per passo:</b></p>
<ol>
<li><b>Chi lo dice?</b> Cerca l'autore e il sito: è un giornale conosciuto, un ente ufficiale, un esperto?</li>
<li><b>Quando?</b> Controlla la data: spesso notizie vecchie vengono ricondivise come nuove.</li>
<li><b>Lo dicono anche altri?</b> Cerca la stessa notizia su altre fonti affidabili.</li>
<li><b>Il titolo è esagerato?</b> Punti esclamativi, "INCREDIBILE!", "condividi prima che lo cancellino" sono campanelli d'allarme.</li>
<li><b>L'immagine è vera?</b> Con la ricerca inversa delle immagini puoi scoprire dove e quando è apparsa per la prima volta.</li>
</ol>
<p>E ricorda il <b>diritto d'autore</b>: testi, musica, foto e video appartengono a chi li ha creati. Per le ricerche usa contenuti con licenza libera (come <b>Creative Commons</b>) e <b>cita sempre la fonte</b>.</p>`
    },
    {
      type: `widget`, title: `La storia di internet in breve`,
      widget: `timeline`,
      caption: `Dalle prime reti ai social e all'intelligenza artificiale.`,
      options: {
        unit: `anni`,
        events: [
          { year: 1969, label: `ARPANET: primo collegamento tra computer`, icon: `🖥️` },
          { year: 1971, label: `Prima e-mail con la @ (Ray Tomlinson)`, icon: `📧` },
          { year: 1982, label: `Prima "faccina" :-) (Scott Fahlman)`, icon: `🙂` },
          { year: 1986, label: `L'Italia si collega a internet (Pisa)`, icon: `🇮🇹` },
          { year: 1991, label: `Il World Wide Web di Tim Berners-Lee (CERN)`, icon: `🌐` },
          { year: 1995, label: `Le regole della netiquette`, icon: `📜` },
          { year: 2004, label: `Primo Safer Internet Day`, icon: `🛡️` },
          { year: 2007, label: `Arriva lo smartphone moderno`, icon: `📱` },
          { year: 2017, label: `Legge italiana sul cyberbullismo`, icon: `⚖️` },
          { year: 2018, label: `In vigore il GDPR in Europa`, icon: `🔐` }
        ]
      }
    },
    {
      type: `example`, title: `Esempio pratico: la notizia del "gatto gigante"`,
      html: `<p>Nella chat arriva: <i>"INCREDIBILE!!! Trovato in Calabria un gatto di 40 kg! Condividete prima che lo cancellino!!!"</i> con una foto.</p>
<ul>
<li><b>Chi lo dice?</b> Nessun autore, nessun sito: ⚠️.</li>
<li><b>Lo dicono altri?</b> Cercando "gatto 40 kg Calabria" non esce nessun giornale serio: ⚠️.</li>
<li><b>Titolo</b>: maiuscole, punti esclamativi, invito a condividere in fretta: ⚠️.</li>
<li><b>Foto</b>: la ricerca inversa mostra che è una foto modificata di un gatto Maine Coon (i gatti domestici più grandi pesano di solito al massimo 10-12 kg).</li>
</ul>
<p>Conclusione: è una <b>bufala</b>. Non si condivide, e si può avvisare gentilmente chi l'ha mandata.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… il Web è nato vicino a Ginevra?`,
      html: `<p>Il <b>World Wide Web</b> (le pagine con i link che navighiamo) fu inventato nel <b>1989-1991</b> dall'informatico inglese <b>Tim Berners-Lee</b> al <b>CERN</b>, il laboratorio europeo di fisica al confine tra Svizzera e Francia, per far condividere i documenti agli scienziati. Il CERN nel 1993 decise di rendere il Web <b>gratuito per tutti</b>, senza brevetti: per questo si è diffuso così tanto. Il primo sito web è ancora online all'indirizzo info.cern.ch.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… in Finlandia si impara a riconoscere le bufale fin da piccoli?`,
      html: `<p>La <b>Finlandia</b> insegna l'<b>alfabetizzazione mediatica</b> (riconoscere fonti affidabili, propaganda e notizie false) in tutte le materie, a partire dalla scuola dell'infanzia, ed è da anni in cima alle classifiche europee per resistenza alla disinformazione. In <b>Australia</b>, invece, dal dicembre 2025 una legge vieta ai minori di <b>16 anni</b> di avere un account sui principali social network: una scelta molto discussa in tutto il mondo.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se le regole del web ti sembrano lontane, prova a vederle così.`,
      tabs: [
        {
          label: `🏙️ Internet è una città`,
          html: `<p>Immagina internet come una <b>grande città</b>:</p>
<ul>
<li>i <b>social</b> sono le <b>piazze</b>: tutti vedono e sentono ciò che dici;</li>
<li>la <b>chat privata</b> è una <b>stanza</b>: ma chiunque può aprire la porta e fotografare (screenshot);</li>
<li>la <b>password</b> è la <b>chiave di casa</b>: non la presti a un compagno;</li>
<li>uno <b>sconosciuto</b> online è uno sconosciuto per strada: non gli diresti dove abiti;</li>
<li>pubblicare una foto è come appenderla su un <b>cartellone in piazza</b>: tutti la vedono e qualcuno potrebbe staccarla e portarla via.</li>
</ul>`
        },
        {
          label: `🪥 Il dentifricio`,
          html: `<p>Un esperimento famoso: prova a far uscire il dentifricio dal tubetto… e poi a farlo rientrare. Impossibile! Così sono le <b>parole e le foto pubblicate online</b>: una volta uscite non si possono più "rimettere dentro". Prima di inviare, pensa al tubetto. 🪥</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#ecfeff"/>
<path d="M60 70 L260 60 L260 140 L60 130 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="260" y="85" width="30" height="30" fill="#e5e7eb" stroke="#334155" stroke-width="2"/>
<path d="M290 100 Q340 70 380 100 T470 100 Q500 95 520 110" stroke="#f8fafc" stroke-width="22" fill="none" stroke-linecap="round"/>
<path d="M290 100 Q340 70 380 100 T470 100 Q500 95 520 110" stroke="#22d3ee" stroke-width="8" fill="none" stroke-linecap="round"/>
<text x="160" y="105" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">messaggio</text>
<text x="420" y="160" font-size="18" text-anchor="middle" fill="#0e7490" font-weight="bold">non si può più far rientrare!</text>
</svg>`
        },
        {
          label: `🃏 Le parole della rete`,
          html: `<p>Gira le carte per ripassare le parole chiave.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `🎣 Phishing`, back: `Messaggio-trappola per rubare password o dati` },
              { front: `👣 Impronta digitale`, back: `Tutte le tracce che lasciamo online` },
              { front: `📜 Netiquette`, back: `Galateo della rete` },
              { front: `🤖 Deepfake`, back: `Video o audio falso creato con l'IA` },
              { front: `🔐 Verifica in due passaggi`, back: `Password + codice sul telefono` },
              { front: `🗞️ Fake news`, back: `Notizia falsa diffusa come se fosse vera` },
              { front: `🧑‍⚖️ GDPR`, back: `Regolamento europeo sulla protezione dei dati (2018)` }
            ]
          }
        },
        {
          label: `🌍 Il mondo connesso`,
          html: `<p>Internet collega tutto il pianeta con cavi sottomarini e satelliti. Un messaggio che mandi a un amico può passare per server in altri continenti in meno di un secondo! Ecco alcuni luoghi chiave della storia del web.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 46.23, lon: 6.05, label: `CERN: nasce il Web (1991)`, color: `#f97316` },
              { lat: 34.07, lon: -118.44, label: `UCLA: primo nodo ARPANET (1969)`, color: `#3b82f6` },
              { lat: 43.72, lon: 10.40, label: `Pisa: l'Italia su internet (1986)`, color: `#22c55e` },
              { lat: 42.36, lon: -71.09, label: `MIT: nasce Scratch (2007)`, color: `#a855f7` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: il cittadino digitale`,
      nodes: [
        { id: `cit`, label: `Cittadino digitale`, x: 50, y: 8, color: `#2563eb`, html: `Chi usa la rete in modo consapevole, rispettoso e sicuro.`, why: `L'Unione Europea ha inserito la <b>competenza digitale</b> tra le 8 competenze chiave per l'apprendimento permanente (2006, aggiornate nel 2018) e ha creato il quadro <b>DigComp</b>. In Italia è parte dell'educazione civica (Legge 92/2019).` },
        { id: `com`, label: `Comunicare con rispetto`, x: 15, y: 32, color: `#ec4899`, html: `Netiquette e comunicazione non ostile.`, why: `Nei messaggi scritti mancano tono della voce e linguaggio del corpo: gli psicologi chiamano "effetto disinibizione online" la tendenza a essere più aggressivi dietro uno schermo. Le regole della netiquette (1995) e il Manifesto della comunicazione non ostile (2017) servono a compensarlo.` },
        { id: `priv`, label: `Privacy e dati`, x: 40, y: 32, color: `#8b5cf6`, html: `Proteggere i propri dati e quelli degli altri.`, why: `Il diritto alla privacy è riconosciuto dalla <b>Carta dei diritti fondamentali dell'UE</b> (art. 8). I dati personali hanno un grande valore economico: molti servizi "gratuiti" si pagano con i nostri dati, usati per la pubblicità.` },
        { id: `sic`, label: `Sicurezza`, x: 62, y: 32, color: `#f97316`, html: `Password, phishing, sconosciuti.`, why: `La forza di una password si basa sulla matematica delle <b>potenze</b>: ogni carattere in più moltiplica le combinazioni possibili. Il phishing invece sfrutta la psicologia: fretta, paura, curiosità.` },
        { id: `info`, label: `Informarsi in modo critico`, x: 85, y: 32, color: `#eab308`, html: `Verificare fonti, date e immagini.`, why: `Uno studio del MIT (2018) ha mostrato che su Twitter le notizie false si diffondevano più velocemente di quelle vere, perché sono più sorprendenti ed emotive. Per questo serve "rallentare" e verificare.` },
        { id: `cyber`, label: `Cyberbullismo`, x: 25, y: 66, color: `#dc2626`, html: `Prepotenze ripetute con strumenti digitali.`, why: `In Italia la <b>Legge 71/2017</b> nacque anche dopo la storia di <b>Carolina Picchio</b>, una ragazza di 14 anni vittima di cyberbullismo nel 2013. La senatrice Elena Ferrara, sua ex insegnante, fu la prima firmataria della legge.` },
        { id: `leggi`, label: `Leggi e diritti`, x: 55, y: 66, color: `#0ea5e9`, html: `GDPR, consenso a 14 anni, diritto d'autore.`, why: `Il <b>GDPR</b> (2016, in vigore dal 2018) fissa a 16 anni l'età del consenso digitale, ma lascia agli Stati la possibilità di abbassarla fino a 13: l'Italia ha scelto <b>14 anni</b>. Il diritto d'autore protegge le opere: in Italia è regolato da una legge del 1941, aggiornata più volte.` },
        { id: `ben`, label: `Benessere digitale`, x: 82, y: 66, color: `#22c55e`, html: `Equilibrio tra online e offline.`, why: `Molte app sono progettate per tenerci il più a lungo possibile davanti allo schermo (notifiche, scroll infinito). I pediatri consigliano pause, niente schermi prima di dormire e momenti "offline" con amici e famiglia.` },
        { id: `aiuto`, label: `Chiedere aiuto`, x: 50, y: 92, color: `#14b8a6`, html: `Genitori, insegnanti, Telefono Azzurro 19696, Polizia Postale.`, why: `Nessun problema online si risolve meglio da soli: gli adulti possono segnalare, far rimuovere contenuti e, nei casi gravi, rivolgersi alla <b>Polizia Postale e delle Comunicazioni</b>, che si occupa dei reati informatici.` }
      ],
      edges: [
        [`cit`, `com`, `sa`], [`cit`, `priv`, `protegge`], [`cit`, `sic`, `pratica`], [`cit`, `info`, `verifica`],
        [`com`, `cyber`, `previene`], [`priv`, `leggi`, `tutelata da`], [`cyber`, `leggi`, `punito da`], [`sic`, `ben`, `insieme a`], [`cyber`, `aiuto`, `serve`], [`leggi`, `aiuto`, `garantiscono`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: sicurezza e informazione`,
      questions: [
        { type: `mc`, q: `Quale password è più sicura?`, options: [`123456`, `Marco2012`, `IlMioGattoMangia3Biscotti!`], answer: 2, explain: `È lunga, varia e non contiene dati personali facili da indovinare.` },
        { type: `mc`, q: `Un messaggio dice "Hai vinto 10 000 gemme! Inserisci qui la tua password". È…`, options: [`un regalo del gioco`, `probabilmente phishing`, `un messaggio della scuola`], answer: 1, explain: `Premio incredibile + richiesta di password = phishing.` },
        { type: `tf`, q: `Se una notizia è condivisa da tante persone, allora è sicuramente vera.`, answer: false, explain: `Le bufale si diffondono spesso più delle notizie vere: bisogna verificare la fonte.` }
      ]
    }
  ],
  glossary: [
    { t: `Cittadinanza digitale`, d: `Capacità di usare la rete in modo responsabile, sicuro e critico, conoscendo diritti e doveri.` },
    { t: `Netiquette`, d: `Insieme di regole di buona educazione in rete.` },
    { t: `Dati personali`, d: `Informazioni che permettono di identificare una persona (nome, indirizzo, foto…).` },
    { t: `Impronta digitale`, d: `Insieme delle tracce che lasciamo online.` },
    { t: `GDPR`, d: `Regolamento europeo sulla protezione dei dati personali, in vigore dal 2018.` },
    { t: `Phishing`, d: `Truffa con messaggi falsi per rubare password o dati.` },
    { t: `Verifica in due passaggi`, d: `Accesso che richiede la password e un secondo codice.` },
    { t: `Cyberbullismo`, d: `Bullismo attraverso internet e strumenti digitali.` },
    { t: `Fake news`, d: `Notizia falsa presentata come vera.` },
    { t: `Deepfake`, d: `Video, foto o audio falsi creati con l'intelligenza artificiale.` },
    { t: `Creative Commons`, d: `Licenze con cui gli autori permettono di riusare le loro opere a certe condizioni.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Che cosa significa "netiquette"?`, options: [`Etichetta per i prodotti online`, `Galateo della rete`, `Rete senza fili`], answer: 1, explain: `Net + etiquette: le buone maniere in rete.` },
      { type: `tf`, q: `Una foto cancellata da un social è sicuramente sparita per sempre.`, answer: false, explain: `Qualcuno può averla salvata o fotografata con uno screenshot.` },
      { type: `mc`, q: `Quale informazione NON dovresti mai pubblicare?`, options: [`Il tuo libro preferito`, `La tua password`, `Un tuo disegno`], answer: 1, explain: `La password è segreta: non va data a nessuno (tranne ai genitori).` },
      { type: `num`, q: `In Italia da quanti anni si può dare da soli il consenso per i propri dati sui servizi online?`, answer: 14, tol: 0, unit: `anni`, explain: `14 anni (il GDPR permette agli Stati di scegliere tra 13 e 16).` },
      { type: `mc`, q: `Quale di questi è un segnale di phishing?`, options: [`Un messaggio urgente che chiede la password`, `La pagina ufficiale della scuola`, `Un messaggio della mamma che chiede a che ora torni`], answer: 0, explain: `Urgenza e richiesta di password sono tipiche del phishing.` },
      { type: `mc`, q: `Vedi in chat una presa in giro di un compagno. Che cosa è giusto fare?`, options: [`Mettere like`, `Inoltrarla ad altri`, `Non condividere, dire che non è giusto e avvisare un adulto`], answer: 2, explain: `Lo spettatore che interviene toglie pubblico al bullo.` },
      { type: `text`, q: `Come si chiama il bullismo fatto con internet e smartphone?`, answer: [`cyberbullismo`, `il cyberbullismo`], explain: `Cyberbullismo.` },
      { type: `order`, q: `Metti in ordine i passi per verificare una notizia sospetta.`, items: [`Guardo chi la pubblica (fonte)`, `Controllo la data`, `Cerco se la riportano altre fonti affidabili`, `Decido se condividerla o no`], explain: `Prima fonte e data, poi il confronto con altre fonti, infine la decisione.` },
      { type: `mc`, q: `Chi ha inventato il World Wide Web?`, options: [`Tim Berners-Lee`, `Bill Gates`, `Guglielmo Marconi`], answer: 0, explain: `Tim Berners-Lee, al CERN, tra il 1989 e il 1991.` },
      { type: `num`, q: `Quante combinazioni ha un PIN di 4 cifre (da 0 a 9)?`, answer: 10000, tol: 0, explain: `10 × 10 × 10 × 10 = 10⁴ = 10 000.` },
      { type: `tf`, q: `Usare un testo trovato online per una ricerca senza citare la fonte è corretto.`, answer: false, explain: `Bisogna sempre citare l'autore e la fonte: è il rispetto del diritto d'autore.` },
      { type: `mc`, q: `Un video in cui un personaggio famoso dice cose mai dette, creato con l'IA, si chiama…`, options: [`deepfake`, `spam`, `podcast`], answer: 0, explain: `Deepfake: contenuto falso generato con l'intelligenza artificiale.` }
    ],
    gen: [[`power`, 2]]
  }
});
