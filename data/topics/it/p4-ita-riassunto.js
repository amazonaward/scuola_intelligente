TOPIC('it', {
  id: "p4-ita-riassunto",
  title: "Il riassunto",
  intro: "Quando racconti a un amico un film che hai visto, non ripeti ogni battuta: dici solo le cose <b>importanti</b>. Stai facendo un <b>riassunto</b>! Impariamo a <b>trovare le informazioni principali</b>, a <b>togliere</b> quelle secondarie e a <b>riscrivere</b> un testo in modo più breve, chiaro e completo.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è un riassunto",
      html: `<p>Il <b>riassunto</b> è un testo <b>più breve</b> dell'originale che ne conserva le <b>informazioni essenziali</b>, cioè quelle senza le quali non si capirebbe la storia o l'argomento.</p>
<p>Un buon riassunto deve essere:</p>
<ul>
<li><b>breve</b>: più corto del testo di partenza (spesso un terzo o un quarto);</li>
<li><b>completo</b>: non deve mancare nessuna informazione importante;</li>
<li><b>fedele</b>: non si aggiungono commenti, opinioni o fatti inventati;</li>
<li><b>chiaro</b>: chi legge il riassunto deve capire la storia anche senza aver letto il testo originale;</li>
<li><b>scritto con parole tue</b>: non si copiano le frasi del testo.</li>
</ul>
<p>Saper riassumere è utilissimo per <b>studiare</b>: storia, geografia, scienze… il riassunto ti aiuta a capire e a ricordare!</p>`
    },
    {
      type: "svg",
      title: "Il setaccio delle informazioni",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<rect x="60" y="20" width="200" height="90" rx="10" fill="#ffffff" stroke="#9a3412" stroke-width="3"/>
<g stroke="#94a3b8" stroke-width="5"><line x1="80" y1="40" x2="240" y2="40"/><line x1="80" y1="55" x2="230" y2="55"/><line x1="80" y1="70" x2="240" y2="70"/><line x1="80" y1="85" x2="220" y2="85"/><line x1="80" y1="100" x2="200" y2="100"/></g>
<text x="160" y="135" font-size="17" text-anchor="middle" fill="#9a3412" font-weight="bold">testo lungo</text>
<path d="M40 150 L280 150 L230 220 L90 220 Z" fill="#fcd34d" stroke="#92400e" stroke-width="4"/>
<g stroke="#92400e" stroke-width="2"><line x1="70" y1="170" x2="250" y2="170"/><line x1="80" y1="185" x2="240" y2="185"/><line x1="90" y1="200" x2="230" y2="200"/></g>
<text x="160" y="245" font-size="17" text-anchor="middle" fill="#92400e" font-weight="bold">setaccio</text>
<rect x="110" y="255" width="100" height="35" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="3"/>
<g stroke="#15803d" stroke-width="5"><line x1="122" y1="268" x2="198" y2="268"/><line x1="122" y1="280" x2="180" y2="280"/></g>
<text x="420" y="60" font-size="18" fill="#b91c1c" font-weight="bold">Cadono via:</text>
<text x="420" y="88" font-size="16" fill="#1f2937">• dettagli</text>
<text x="420" y="112" font-size="16" fill="#1f2937">• descrizioni lunghe</text>
<text x="420" y="136" font-size="16" fill="#1f2937">• ripetizioni</text>
<text x="420" y="160" font-size="16" fill="#1f2937">• dialoghi parola per parola</text>
<text x="420" y="215" font-size="18" fill="#15803d" font-weight="bold">Restano:</text>
<text x="420" y="243" font-size="16" fill="#1f2937">• chi, che cosa, dove,</text>
<text x="420" y="267" font-size="16" fill="#1f2937">  quando, perché</text>
<path d="M290 180 L400 120" stroke="#b91c1c" stroke-width="3" stroke-dasharray="6 5"/>
<path d="M220 272 L400 245" stroke="#15803d" stroke-width="3"/>
</svg>`,
      caption: "Riassumere è come setacciare la farina: passa solo quello che serve davvero."
    },
    {
      type: "text",
      title: "Passo 1 – Leggi e capisci",
      html: `<p>Non si può riassumere quello che non si è capito! Quindi:</p>
<ol>
<li><b>Leggi tutto il testo</b> con attenzione, almeno <b>due volte</b>.</li>
<li><b>Cerca sul dizionario</b> le parole che non conosci.</li>
<li>Chiediti: <b>di che cosa parla</b> il testo? <b>Qual è il messaggio principale?</b> Prova a dirlo in una frase sola.</li>
</ol>
<p>Per i testi narrativi usa le <b>5 domande</b>: <b>Chi?</b> (personaggi) – <b>Che cosa?</b> (fatti) – <b>Dove?</b> (luogo) – <b>Quando?</b> (tempo) – <b>Perché?</b> (cause e scopi).</p>`
    },
    {
      type: "text",
      title: "Passo 2 – Dividi in sequenze e dai un titolo",
      html: `<p>Dividi il testo in <b>sequenze</b> (parti con un solo argomento): segna una linea dove cambia il luogo, il tempo, i personaggi o l'azione.</p>
<p>Poi dai a ogni sequenza un <b>titolo breve</b> o scrivi a margine una <b>frase-chiave</b>. L'insieme dei titoli forma la <b>scaletta</b> del riassunto: una specie di scheletro della storia.</p>`
    },
    {
      type: "text",
      title: "Passo 3 – Sottolinea, cancella, generalizza",
      html: `<p>Ora lavora su ogni sequenza con tre tecniche:</p>
<ul>
<li>✏️ <b>Sottolinea</b> le informazioni <b>principali</b> (quelle che rispondono alle 5 domande).</li>
<li>❌ <b>Cancella</b> le informazioni <b>secondarie</b>: dettagli, descrizioni lunghe, esempi, ripetizioni, aggettivi non necessari.</li>
<li>📦 <b>Generalizza</b>: sostituisci un elenco con una parola che lo comprende tutto.<br><i>\"Comprò mele, pere, banane e arance\"</i> → <i>\"Comprò della <b>frutta</b>\"</i>.<br><i>\"Si lavò, si vestì, fece colazione e preparò lo zaino\"</i> → <i>\"Si <b>preparò</b> per la scuola\"</i>.</li>
</ul>
<p>Trucco per capire se un'informazione è importante: <b>prova a toglierla</b>. Se la storia si capisce lo stesso, è secondaria; se non si capisce più, è principale!</p>`
    },
    {
      type: "text",
      title: "Passo 4 – Riscrivi con parole tue",
      html: `<p>Ora scrivi il riassunto seguendo la scaletta. Regole importanti:</p>
<ul>
<li>usa la <b>terza persona</b> (lui, lei, loro), anche se il testo è in prima persona: <i>\"Io corsi a casa\"</i> → <i>\"Il protagonista corse a casa\"</i>;</li>
<li>trasforma il <b>discorso diretto</b> in <b>discorso indiretto</b>: <i>— Ho fame! — disse Pinocchio</i> → <i>Pinocchio disse <b>che aveva fame</b></i>;</li>
<li>scegli un <b>tempo verbale</b> e mantienilo (di solito il <b>passato remoto</b> o il <b>presente</b>);</li>
<li>collega le frasi con i <b>connettivi</b>: <i>all'inizio, poi, in seguito, allora, perciò, intanto, infine</i>;</li>
<li>non aggiungere <b>commenti personali</b> (\"secondo me…\", \"è bellissimo\").</li>
</ul>
<p>Alla fine <b>rileggi</b>: è completo? è chiaro? ci sono errori? Si capisce anche per chi non conosce il testo?</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: le regole del riassunto",
      questions: [
        { type: "tf", q: "Nel riassunto si possono aggiungere i propri commenti.", answer: false, explain: "Il riassunto deve essere fedele: niente opinioni personali." },
        { type: "mc", q: "Come si trasforma \"— Sono stanco — disse Marco\" in un riassunto?", options: ["Marco disse: \"Sono stanco\".", "Marco disse che era stanco.", "Io sono stanco, disse Marco."], answer: 1, explain: "Si usa il discorso indiretto." },
        { type: "mc", q: "\"Mise nello zaino quaderni, libri, astuccio e diario.\" Generalizza:", options: ["Mise nello zaino il materiale scolastico.", "Mise nello zaino quaderni.", "Mise nello zaino tante cose belle."], answer: 0, explain: "Una sola parola (\"materiale scolastico\") comprende tutto l'elenco." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: La volpe e l'uva (Esopo)",
      html: `<p><b>Testo originale</b> (favola di Esopo, raccontata con parole nostre):</p>
<p><i>Era una giornata caldissima d'estate e una volpe, che non mangiava da due giorni, camminava stanca per la campagna. A un tratto vide un pergolato da cui pendevano grappoli d'uva nera, grossi, lucidi e succosi. \"Che fortuna!\", pensò, e le venne l'acquolina in bocca. Fece un salto, ma non ci arrivò. Ne fece un altro, più alto, e poi un altro ancora, ma l'uva era troppo in alto. Dopo molti tentativi, stanca e sudata, si allontanò dicendo con aria di superiorità: — Bah, tanto quell'uva è acerba! Non mi piace nemmeno.<br>Morale: chi non riesce a ottenere qualcosa, spesso finge di non volerla.</i></p>
<p><b>Lavoro</b>:</p>
<ul>
<li>Chi? → una volpe affamata. Dove? → in campagna, sotto un pergolato. Quando? → d'estate.</li>
<li>Cancello: \"caldissima\", \"grossi, lucidi e succosi\", \"le venne l'acquolina\", i salti ripetuti uno per uno.</li>
<li>Generalizzo: \"fece un salto… un altro… un altro ancora\" → \"provò più volte a saltare\".</li>
<li>Discorso diretto → indiretto: \"disse che l'uva era acerba\".</li>
</ul>
<p><b>Riassunto</b>: <i>Una volpe affamata vide dei grappoli d'uva appesi a un pergolato. Provò più volte a saltare per prenderli, ma erano troppo in alto. Allora se ne andò dicendo che l'uva era acerba. La favola insegna che chi non riesce a ottenere qualcosa spesso finge di non volerla.</i></p>
<p>Da circa 100 parole siamo passati a circa 50: la metà!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: riassumere un testo di studio",
      html: `<p>Il riassunto serve anche per studiare. Testo di scienze:</p>
<p><i>\"Le api sono insetti che vivono in grandi gruppi chiamati colonie, formate anche da 50 000 individui. In ogni colonia c'è una sola regina, che depone le uova, migliaia di operaie, che raccolgono il nettare, costruiscono le cellette di cera, puliscono l'alveare e nutrono le larve, e alcune centinaia di fuchi, i maschi. Le api sono molto importanti per l'uomo perché, volando di fiore in fiore, trasportano il polline e permettono alle piante di produrre frutti.\"</i></p>
<p><b>Riassunto</b>: <i>Le api vivono in colonie formate da una regina, che depone le uova, da molte operaie, che svolgono tutti i lavori, e dai fuchi, i maschi. Trasportando il polline, le api permettono alle piante di produrre frutti.</i></p>
<p>Abbiamo <b>generalizzato</b> i lavori delle operaie (\"tutti i lavori\") e tolto i numeri, che sono dettagli.</p>`
    },
    {
      type: "widget",
      title: "Gioco: principale o secondaria?",
      widget: "classify",
      options: {
        groups: ["Informazione principale", "Informazione secondaria"],
        items: [
          ["Cappuccetto Rosso va dalla nonna malata.", 0],
          ["Nel bosco incontra il lupo.", 0],
          ["Il lupo mangia la nonna.", 0],
          ["Il cacciatore salva nonna e bambina.", 0],
          ["Il cestino era coperto da un tovagliolo a quadretti.", 1],
          ["Nel bosco cantavano gli uccellini.", 1],
          ["La nonna aveva una cuffia bianca.", 1],
          ["Cappuccetto raccolse margherite e papaveri.", 1]
        ]
      },
      caption: "Prova a togliere l'informazione: se la storia si capisce lo stesso, è secondaria."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il riassunto più famoso: un telegramma",
      html: `<p>Un tempo, per mandare un messaggio urgente, si usava il <b>telegramma</b>: si pagava <b>per ogni parola</b>! Per questo la gente imparò a scrivere in modo brevissimo, togliendo articoli e parole inutili: <i>\"Arrivo domani treno ore otto stop\"</i>. Era un vero esercizio di riassunto.</p>
<p>Oggi succede qualcosa di simile con i messaggi sui social, che spesso hanno un numero massimo di caratteri.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Riassunti antichissimi",
      html: `<p>Già nell'antichità si facevano riassunti! Lo storico romano <b>Tito Livio</b> scrisse una storia di Roma in <b>142 libri</b>; la maggior parte è andata perduta, ma conosciamo il contenuto di molti libri grazie alle <b>Periochae</b>, brevi riassunti scritti qualche secolo dopo. Senza quei riassunti, di quella storia sapremmo molto meno!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il riassunto è <b>breve, completo, fedele, chiaro</b> e scritto con <b>parole tue</b>.</li>
<li>Passi: <b>leggi e capisci → dividi in sequenze → sottolinea, cancella, generalizza → scrivi la scaletta → riscrivi → rileggi</b>.</li>
<li>Usa le <b>5 domande</b>: chi? che cosa? dove? quando? perché?</li>
<li><b>Terza persona</b> e <b>discorso indiretto</b>.</li>
<li>Usa i <b>connettivi</b> per collegare le frasi.</li>
<li><b>Niente</b> commenti personali.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per imparare a riassumere",
      intro: "Riassumere è difficile per molti. Ecco altre strade: il metodo americano delle 5W, il fumetto in 5 vignette, il riassunto a cascata e un gioco con il discorso indiretto.",
      tabs: [
        {
          label: "🇺🇸 Le 5 W (e una H)",
          html: `<p>Nelle scuole americane e inglesi si insegna a riassumere con le <b>5 W + H</b>, le stesse domande dei giornalisti:</p>
<ul>
<li><b>Who?</b> Chi?</li>
<li><b>What?</b> Che cosa?</li>
<li><b>Where?</b> Dove?</li>
<li><b>When?</b> Quando?</li>
<li><b>Why?</b> Perché?</li>
<li><b>How?</b> Come?</li>
</ul>
<p>Rispondi a ogni domanda con una frase breve, poi <b>unisci</b> le risposte: ecco il riassunto! Un altro metodo americano si chiama <b>\"Somebody – Wanted – But – So – Then\"</b>: <i>Qualcuno – voleva – ma – allora – alla fine</i>.<br>Per la volpe: <i>Una volpe (qualcuno) voleva l'uva (voleva), ma era troppo in alto (ma), allora disse che era acerba (allora) e se ne andò (alla fine).</i></p>`
        },
        {
          label: "🎞️ Il fumetto in 5 vignette",
          html: `<p>Se ti piace disegnare, prova così: disegna la storia in <b>5 vignette soltanto</b>. Sei costretto a scegliere i momenti <b>più importanti</b>! Poi scrivi <b>una frase sotto ogni vignetta</b>: hai fatto il riassunto.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#ffffff"/>
<g stroke="#1f2937" stroke-width="3" fill="#fef9c3">
<rect x="10" y="10" width="108" height="120"/><rect x="128" y="10" width="108" height="120"/><rect x="246" y="10" width="108" height="120"/><rect x="364" y="10" width="108" height="120"/><rect x="482" y="10" width="108" height="120"/>
</g>
<g font-size="40" text-anchor="middle"><text x="64" y="85">🦊</text><text x="182" y="85">🍇</text><text x="300" y="85">🦘</text><text x="418" y="85">😤</text><text x="536" y="85">🚶</text></g>
<g font-size="13" text-anchor="middle" fill="#1f2937">
<text x="64" y="155">Una volpe</text><text x="64" y="172">affamata…</text>
<text x="182" y="155">vede l'uva</text><text x="182" y="172">in alto.</text>
<text x="300" y="155">Salta tante</text><text x="300" y="172">volte, invano.</text>
<text x="418" y="155">Dice: \"È</text><text x="418" y="172">acerba!\"</text>
<text x="536" y="155">E se ne</text><text x="536" y="172">va.</text>
</g>
</svg>`
        },
        {
          label: "🪜 Il riassunto a cascata",
          html: `<p>Un esercizio per allenarsi a \"stringere\" un testo un passo alla volta:</p>
<ol>
<li>Riassumi il testo in <b>50 parole</b>.</li>
<li>Riassumi il tuo riassunto in <b>25 parole</b>.</li>
<li>Poi in <b>10 parole</b>.</li>
<li>Infine in <b>una frase</b> o addirittura in un <b>titolo</b>!</li>
</ol>
<p>Esempio con la volpe:<br>
25 parole: <i>Una volpe affamata non riesce a prendere l'uva troppo alta e se ne va dicendo che è acerba.</i><br>
10 parole: <i>La volpe non arriva all'uva e dice che è acerba.</i><br>
Titolo: <i>La volpe che finge di non volere l'uva.</i></p>
<p>Ogni passaggio ti costringe a chiederti: <b>che cosa è davvero indispensabile?</b></p>`
        },
        {
          label: "🔁 Dal diretto all'indiretto",
          html: `<p>Nel riassunto i dialoghi diventano <b>discorso indiretto</b>. Abbina ogni frase alla sua trasformazione.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["— Ho paura! — disse Anna.", "Anna disse che aveva paura."],
              ["— Vieni con me? — chiese Luca.", "Luca chiese se andava con lui."],
              ["— Chiudi la porta! — ordinò il papà.", "Il papà ordinò di chiudere la porta."],
              ["— Domani parto — annunciò il re.", "Il re annunciò che il giorno dopo sarebbe partito."],
              ["— Sono stato io — ammise Pinocchio.", "Pinocchio ammise di essere stato lui."]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del riassunto",
      nodes: [
        { id: "riassunto", label: "Riassunto", x: 50, y: 6, color: "#2563eb", html: "Testo breve che conserva le informazioni essenziali dell'originale.", why: "Il nostro cervello non può ricordare tutto parola per parola: ricorda il <b>significato</b>. Gli psicologi (per esempio Walter Kintsch e Teun van Dijk, negli anni '70) hanno studiato come, leggendo, la mente costruisca da sola una specie di riassunto." },
        { id: "capire", label: "Leggere e capire", x: 15, y: 28, color: "#ef4444", html: "Leggere più volte, cercare le parole difficili, trovare l'argomento.", why: "Non si può riassumere ciò che non si è capito: chi copia frasi a caso di solito non ha capito il testo. Per questo la lettura attenta viene prima di tutto." },
        { id: "domande", label: "Le 5 domande", x: 40, y: 28, color: "#f59e0b", html: "Chi? Che cosa? Dove? Quando? Perché?", why: "Sono antichissime: già i maestri di retorica greci e romani, come <b>Quintiliano</b> (I secolo d.C.), insegnavano a esaminare un fatto chiedendosi chi, che cosa, dove, quando, perché e come. Oggi le usano i giornalisti (le \"5 W\")." },
        { id: "sequenze", label: "Sequenze e scaletta", x: 65, y: 28, color: "#16a34a", html: "Dividere il testo in parti e dare un titolo a ognuna.", why: "Un testo lungo diventa più facile se lo spezzi in pezzi: è lo stesso principio con cui si affronta un problema difficile dividendolo in problemi più piccoli." },
        { id: "principali", label: "Informazioni principali", x: 88, y: 50, color: "#0ea5e9", html: "Quelle indispensabili per capire la storia.", why: "Il trucco della cancellazione: se togli un'informazione e la storia non si capisce più, è principale. Le informazioni principali di solito rispondono alle 5 domande." },
        { id: "tecniche", label: "Cancellare e generalizzare", x: 30, y: 58, color: "#a855f7", html: "Togliere i dettagli; sostituire elenchi con una parola generale.", why: "Kintsch e van Dijk chiamarono queste operazioni <b>macroregole</b>: cancellazione, generalizzazione e costruzione. Sono quelle che la mente usa per \"comprimere\" un testo." },
        { id: "riscrivere", label: "Riscrivere", x: 60, y: 76, color: "#14b8a6", html: "Terza persona, discorso indiretto, connettivi, parole proprie.", why: "Riscrivere con parole proprie obbliga a rielaborare: è così che un'informazione passa dalla pagina alla nostra memoria a lungo termine." },
        { id: "studio", label: "Studiare meglio", x: 30, y: 90, color: "#64748b", html: "Riassumere aiuta a capire e ricordare le materie di studio.", why: "Molte ricerche sull'apprendimento mostrano che spiegare un argomento con parole proprie aiuta a ricordarlo più a lungo che rileggerlo tante volte." }
      ],
      edges: [
        ["riassunto", "capire", "1°"],
        ["riassunto", "domande", "usa"],
        ["riassunto", "sequenze", "2°"],
        ["sequenze", "principali", "trovare"],
        ["domande", "principali", "individuano"],
        ["capire", "tecniche", "poi"],
        ["tecniche", "riscrivere", "infine"],
        ["riscrivere", "studio", "serve a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: riassumere davvero",
      questions: [
        { type: "order", q: "Metti in ordine i passi per fare un riassunto.", items: ["Leggere e capire il testo", "Dividere in sequenze", "Sottolineare e cancellare", "Scrivere la scaletta", "Riscrivere con parole proprie", "Rileggere e correggere"], explain: "Prima si capisce, poi si seleziona, infine si scrive e si controlla." },
        { type: "mc", q: "Il testo dice: \"Io entrai in classe\". Nel riassunto scrivo:", options: ["Io entrai in classe.", "Il protagonista entrò in classe.", "Entrammo in classe."], answer: 1, explain: "Nel riassunto si usa la terza persona." },
        { type: "tf", q: "Un buon riassunto si capisce anche senza aver letto il testo originale.", answer: true, explain: "Deve essere chiaro e completo per chiunque." }
      ]
    }
  ],
  glossary: [
    { t: "Riassunto", d: "Testo più breve che riporta le informazioni essenziali di un altro testo." },
    { t: "Informazione principale", d: "Informazione indispensabile per capire il testo." },
    { t: "Informazione secondaria", d: "Dettaglio che si può togliere senza cambiare il senso." },
    { t: "Generalizzare", d: "Sostituire un elenco di cose con una parola che le comprende tutte." },
    { t: "Scaletta", d: "Elenco ordinato dei punti principali, uno per sequenza." },
    { t: "Discorso diretto", d: "Le parole esatte di un personaggio, tra virgolette o trattini." },
    { t: "Discorso indiretto", d: "Le parole di un personaggio riferite da chi racconta: disse che…" },
    { t: "Connettivi", d: "Parole che collegano le frasi: poi, allora, perciò, infine…" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è un riassunto?", options: ["Un testo più lungo dell'originale", "Un testo breve con le informazioni essenziali", "Un commento personale su un testo"], answer: 1, explain: "Riporta in breve le informazioni essenziali." },
      { type: "tf", q: "Nel riassunto si copiano le frasi più belle del testo.", answer: false, explain: "Si scrive con parole proprie." },
      { type: "mc", q: "Quale di queste NON è una delle 5 domande?", options: ["Chi?", "Quanto costa?", "Dove?"], answer: 1, explain: "Le 5 domande sono chi, che cosa, dove, quando, perché." },
      { type: "mc", q: "\"Aveva un gatto, un cane, due criceti e un pappagallo.\" Generalizza:", options: ["Aveva un gatto.", "Aveva molti animali domestici.", "Aveva animali simpatici."], answer: 1, explain: "\"Molti animali domestici\" comprende tutto l'elenco, senza aggiungere giudizi." },
      { type: "mc", q: "\"— Ho vinto! — gridò Sara.\" Diventa:", options: ["Sara gridò che aveva vinto.", "Sara gridò: ho vinto.", "Ho vinto, gridò Sara."], answer: 0, explain: "Discorso indiretto: gridò che aveva vinto." },
      { type: "text", q: "Come si chiama l'elenco ordinato dei punti principali, fatto prima di scrivere il riassunto?", answer: ["scaletta", "la scaletta"], explain: "La scaletta." },
      { type: "tf", q: "Nel riassunto si usa di solito la terza persona.", answer: true, explain: "Si racconta dall'esterno: lui, lei, loro." },
      { type: "mc", q: "\"Il cielo era di un azzurro intenso, senza una nuvola.\" In un riassunto di un racconto d'avventura questa frase…", options: ["è un'informazione principale", "è un dettaglio che si può togliere", "va copiata così com'è"], answer: 1, explain: "È una descrizione: un dettaglio secondario." },
      { type: "mc", q: "Quale frase contiene un commento personale da NON mettere nel riassunto?", options: ["Il principe sposò Cenerentola.", "Secondo me la matrigna era antipatica.", "La fata trasformò la zucca in carrozza."], answer: 1, explain: "\"Secondo me\" introduce un'opinione personale." },
      { type: "order", q: "Ordina dal testo più lungo al più breve.", items: ["Il racconto originale", "Il riassunto", "La scaletta", "Il titolo"], explain: "Il titolo è il \"riassunto\" più corto possibile." },
      { type: "text", q: "Scrivi un connettivo che si usa per concludere (es. \"in…\").", answer: ["infine", "alla fine", "in conclusione", "finalmente", "in fine"], explain: "Infine, alla fine, in conclusione." },
      { type: "mc", q: "Qual è il primo passo per fare un riassunto?", options: ["Scrivere subito", "Leggere e capire il testo", "Contare le parole"], answer: 1, explain: "Prima di tutto bisogna capire il testo." }
    ]
  }
});
