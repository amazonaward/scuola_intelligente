TOPIC('it', {
  id: "p4-tec-internet-sicuro",
  title: "Internet in sicurezza",
  intro: "Internet è come una città gigantesca 🌆: ci sono biblioteche, parchi giochi, cinema, piazze dove incontrare amici… ma, come in ogni città, bisogna conoscere le <b>regole per muoversi sicuri</b>. Impariamo a creare <b>password</b> forti 🔐, a proteggere i nostri <b>dati personali</b> (la privacy), a riconoscere i <b>trucchi</b> online e a sapere sempre <b>a chi chiedere aiuto</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è Internet (in breve)",
      html: `<p><b>Internet</b> è una rete che collega <b>miliardi di computer, telefoni e tablet</b> in tutto il mondo. Quando apri un sito, il tuo dispositivo chiede le informazioni a un altro computer lontano (un <b>server</b>) e le riceve in un attimo, attraverso cavi, fibre ottiche sotto gli oceani, antenne e satelliti.</p>
<p>Il <b>web</b> (le pagine con i link) è solo una parte di Internet: ci sono anche la posta elettronica, le chat, i videogiochi online, le videochiamate…</p>
<p>⚠️ Ricorda: quello che metti su Internet <b>viaggia</b>, viene <b>copiato</b> e può <b>restare per sempre</b>, anche se lo cancelli. Per questo bisogna pensare <b>prima</b> di pubblicare.</p>`
    },
    {
      type: "text",
      title: "2. Le password: la chiave di casa",
      html: `<p>La <b>password</b> è come la <b>chiave di casa</b> dei tuoi account (giochi, posta, piattaforma della scuola). Se qualcuno la scopre, può entrare, fingere di essere te e vedere le tue cose.</p>
<p><b>Una password forte è:</b></p>
<ul>
<li>📏 <b>lunga</b>: almeno 12 caratteri (più è lunga, più è difficile da indovinare);</li>
<li>🔀 <b>varia</b>: lettere maiuscole e minuscole, numeri e simboli (! ? # …);</li>
<li>🙈 <b>non indovinabile</b>: niente nome, compleanno, nome del cane, "123456" o "password";</li>
<li>🔑 <b>diversa</b> per ogni account importante.</li>
</ul>
<p>💡 <b>Il trucco della frase segreta</b>: unisci 4 parole a caso che solo tu puoi ricordare, con un numero e un simbolo. Esempio: <b>Gatto-Viola-Mangia-7-Nuvole!</b> È lunghissima, ma facile da ricordare (non usare questa, inventa la tua!).</p>
<p>🤫 La password <b>non si dice a nessuno</b>, nemmeno al migliore amico. Solo i <b>genitori</b> (o un adulto di fiducia) possono conoscerla.</p>`
    },
    {
      type: "svg",
      title: "Password debole o forte?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="30" width="250" height="230" rx="16" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
<rect x="320" y="30" width="250" height="230" rx="16" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="155" y="70" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">DEBOLE 🔓</text>
<text x="445" y="70" font-size="24" font-weight="bold" fill="#15803d" text-anchor="middle">FORTE 🔐</text>
<g font-size="18" font-family="monospace" fill="#7f1d1d" text-anchor="middle">
<text x="155" y="115">123456</text>
<text x="155" y="150">password</text>
<text x="155" y="185">luca2015</text>
<text x="155" y="220">fido</text>
</g>
<g font-size="16" font-family="monospace" fill="#14532d" text-anchor="middle">
<text x="445" y="115">Gatto-Viola-7-Nuvole!</text>
<text x="445" y="150">Pizza#Drago#Lune42</text>
<text x="445" y="185">3Elefanti?Ballano</text>
</g>
<text x="155" y="250" font-size="15" fill="#7f1d1d" text-anchor="middle">corte, facili da indovinare</text>
<text x="445" y="225" font-size="15" fill="#14532d" text-anchor="middle">lunghe, varie,</text>
<text x="445" y="245" font-size="15" fill="#14532d" text-anchor="middle">facili da ricordare</text>
<text x="300" y="290" font-size="17" fill="#1e293b" text-anchor="middle" font-weight="bold">Più è lunga, più è sicura!</text>
</svg>`,
      caption: "Le password a sinistra si indovinano in un attimo; quelle a destra sono frasi segrete lunghe e varie (inventa sempre la tua!)."
    },
    {
      type: "widget",
      title: "Debole o forte?",
      widget: "classify",
      options: {
        groups: ["🔓 Debole", "🔐 Forte"],
        items: [
          ["123456", 0],
          ["qwerty", 0],
          ["il mio nome", 0],
          ["la mia data di nascita", 0],
          ["password", 0],
          ["Treno!Blu?Salta88", 1],
          ["Zaino-Luna-Pane-31", 1],
          ["4Pinguini#Sul#Tetto", 1]
        ]
      },
      caption: "Tocca ogni password e decidi se è debole o forte."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le password",
      questions: [
        { type: "mc", q: "Qual è la password più sicura?", options: ["marco2016", "Razzo#Verde#Mela#9", "abcdef"], answer: 1, explain: "È lunga e mescola maiuscole, minuscole, simboli e numeri." },
        { type: "tf", q: "Posso dire la mia password al mio migliore amico, tanto mi fido.", answer: false, explain: "La password non si dice a nessuno, tranne ai genitori o a un adulto di fiducia. Le amicizie possono cambiare!" },
        { type: "mc", q: "Che cosa conta di più per rendere forte una password?", options: ["che sia corta", "che sia lunga", "che contenga il tuo nome"], answer: 1, explain: "La lunghezza è la cosa più importante: ogni carattere in più moltiplica le combinazioni da provare." },
        { type: "tf", q: "È meglio usare password diverse per gli account importanti.", answer: true, explain: "Così, se una viene scoperta, le altre restano al sicuro." }
      ]
    },
    {
      type: "text",
      title: "3. La privacy: i dati personali",
      html: `<p>La <b>privacy</b> è il diritto di decidere <b>chi può sapere le cose su di te</b>. I <b>dati personali</b> sono tutte le informazioni che dicono chi sei e dove trovarti:</p>
<ul>
<li>🪪 nome e cognome completi</li>
<li>🏠 indirizzo di casa</li>
<li>🏫 nome della scuola e della classe</li>
<li>📞 numero di telefono</li>
<li>📸 foto e video tuoi, della tua casa, della tua divisa scolastica</li>
<li>📍 dove sei in questo momento (la posizione)</li>
<li>🔑 password</li>
</ul>
<p><b>Regola d'oro</b>: questi dati <b>non si scrivono online</b> (nei giochi, nelle chat, nei commenti) senza il permesso dei genitori. Per i giochi usa un <b>nickname</b> (soprannome) che non contenga il tuo nome vero né la tua età.</p>
<p>Rispetta anche la privacy degli <b>altri</b>: non pubblicare foto o video di amici e compagni senza il loro permesso.</p>`
    },
    {
      type: "widget",
      title: "Si può condividere?",
      widget: "classify",
      options: {
        groups: ["✅ Posso condividerlo", "⛔ Non condividere (chiedi a un adulto)"],
        items: [
          ["🎨 il mio colore preferito", 0],
          ["🐶 il disegno del mio cane", 0],
          ["🎮 il mio nickname nel gioco", 0],
          ["📚 un libro che mi è piaciuto", 0],
          ["🏠 il mio indirizzo", 1],
          ["📞 il mio numero di telefono", 1],
          ["🔑 la mia password", 1],
          ["🏫 il nome della mia scuola", 1],
          ["📍 dove sono adesso", 1],
          ["📸 una foto con la divisa della squadra e il nome", 1]
        ]
      },
      caption: "Tocca ogni informazione e decidi: si può condividere online o no?"
    },
    {
      type: "text",
      title: "4. Attenzione ai trucchi online",
      html: `<ul>
<li>🎣 <b>Phishing</b> ("pescare"): messaggi falsi che sembrano veri (<i>"Hai vinto un telefono! Clicca qui e scrivi la password"</i>). Nessun sito serio ti chiede la password per messaggio. <b>Non cliccare</b> e fai vedere a un adulto.</li>
<li>🎁 <b>Premi troppo belli</b>: <i>"Monete gratis per il tuo gioco!"</i> Se è troppo bello per essere vero… probabilmente è un imbroglio.</li>
<li>👤 <b>Sconosciuti</b>: online le persone possono fingere di essere qualcun altro (un bambino della tua età potrebbe essere un adulto). Non incontrare <b>mai</b> di persona chi hai conosciuto online e non mandare foto.</li>
<li>📰 <b>Notizie false</b> (fake news): non tutto quello che c'è su Internet è vero. Controlla chi l'ha scritto, se ci sono altre fonti affidabili, e chiedi a un adulto.</li>
<li>🔒 <b>Il lucchetto</b>: nella barra degli indirizzi i siti protetti iniziano con <b>https</b>; i dati che invii viaggiano cifrati. Ma attenzione: il lucchetto non garantisce che il sito sia onesto!</li>
</ul>`
    },
    {
      type: "text",
      title: "5. Gentilezza online e cyberbullismo",
      html: `<p>Dietro ogni schermo c'è una <b>persona vera</b>, con dei sentimenti. Le regole di buona educazione su Internet si chiamano <b>netiquette</b> (da <i>net</i>, rete, e <i>etiquette</i>, galateo):</p>
<ul>
<li>💬 scrivi online solo ciò che diresti anche guardando la persona negli occhi;</li>
<li>🔠 non scrivere TUTTO MAIUSCOLO: sembra che urli;</li>
<li>🚫 non prendere in giro, non escludere nessuno dai gruppi apposta, non condividere foto che possono far star male qualcuno.</li>
</ul>
<p>Il <b>cyberbullismo</b> è quando qualcuno usa Internet o il telefono per offendere, minacciare, prendere in giro o escludere una persona, più e più volte. In Italia c'è una legge apposta per proteggere i ragazzi (la <b>legge 71 del 2017</b>).</p>
<p><b>Se succede a te o a un amico</b>: non rispondere, non cancellare le prove (fai uno screenshot), <b>blocca</b>, e <b>parlane subito</b> con un genitore o un insegnante. Chiedere aiuto non è fare la spia: è coraggio! 💪</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il messaggio misterioso",
      html: `<p>Sofia sta giocando online. Arriva un messaggio privato:</p>
<p style="background:#fef2f2;padding:8px;border-radius:8px">🎁 <i>"Ciao! Sono un moderatore del gioco. Hai vinto 10.000 gemme gratis! Per riceverle scrivimi il tuo nome utente e la password entro 5 minuti!!!"</i></p>
<p>Sofia nota i <b>campanelli d'allarme</b> 🚨:</p>
<ul>
<li>chiede la <b>password</b> (nessun moderatore vero lo fa mai);</li>
<li>mette <b>fretta</b> ("entro 5 minuti!!!");</li>
<li>promette un <b>premio troppo bello</b>.</li>
</ul>
<p>Sofia <b>non risponde</b>, fa uno screenshot, <b>segnala</b> il messaggio con il pulsante del gioco e lo fa vedere alla mamma. 👏</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la foto della gita",
      html: `<p>Dopo la gita, Luca vuole pubblicare nel gruppo della classe una foto buffa di Matteo che dorme sul pullman. 🚌😴</p>
<p>Prima di farlo si fa tre domande (la regola <b>"Pensa prima di postare"</b>):</p>
<ol>
<li>È <b>vero</b> e <b>gentile</b>? Matteo potrebbe vergognarsi…</li>
<li>Ho il <b>permesso</b> della persona nella foto? No.</li>
<li>Va bene se la vedono <b>tutti, per sempre</b>? Una foto nel gruppo può essere salvata e girata ovunque.</li>
</ol>
<p>Luca decide di mandare la foto <b>solo a Matteo</b>, che ride e dice: "Ok, però non metterla nel gruppo!". Rispettare la privacy degli altri è parte della sicurezza online.</p>`
    },
    {
      type: "decision",
      title: "Che cosa faresti?",
      html: "Nel gioco online che usi, un utente con cui chatti da qualche settimana ti scrive: <i>\"Siamo amici ormai! Mandami una tua foto e dimmi in che scuola vai, così magari ci vediamo. Ma non dirlo ai tuoi genitori, è un nostro segreto 🤫\"</i>.",
      question: "Qual è la cosa giusta da fare?",
      options: [
        { label: "Mando la foto ma non dico la scuola.", outcome: "Una foto può già dire tanto (la faccia, la divisa, la casa dietro di te) e può essere copiata e usata da chiunque. Non è sicuro." },
        { label: "Non rispondo, blocco/segnalo l'utente e lo dico subito a un genitore.", outcome: "Giusto! Hai protetto i tuoi dati e hai chiesto aiuto a un adulto: è proprio quello che bisogna fare." },
        { label: "Accetto di vederlo, ma porto un amico.", outcome: "Non si incontra mai da soli o con amici chi si è conosciuto online: non sai chi è davvero. Serve sempre un adulto informato." }
      ],
      answer: 1,
      explain: "Il segnale d'allarme più forte è la frase <b>\"non dirlo ai tuoi genitori\"</b>: chi ha buone intenzioni non chiede mai di nascondere qualcosa agli adulti che si prendono cura di te. La cosa giusta è non dare dati né foto, bloccare o segnalare e parlarne subito con un adulto di fiducia. Non sei nei guai e non hai fatto niente di male: hai fatto la scelta più coraggiosa."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La password più usata al mondo",
      html: `<p>Ogni anno gli esperti di sicurezza analizzano milioni di password rubate e pubblicano la classifica delle più usate. Da anni ai primi posti ci sono sempre le stesse: <b>"123456"</b>, <b>"password"</b>, <b>"qwerty"</b> (le prime lettere della tastiera)… Un programma le indovina in <b>meno di un secondo</b>! 😱</p>
<p>Una frase segreta di 4–5 parole a caso, invece, richiederebbe a un computer tempi lunghissimi per essere indovinata provando tutte le combinazioni.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il compleanno di Internet e del web",
      html: `<ul>
<li>🖥️ Nel <b>1969</b> negli Stati Uniti fu inviato il primo messaggio tra due computer della rete <b>ARPANET</b>, la "nonna" di Internet. Il messaggio doveva essere "LOGIN", ma il sistema si bloccò dopo le prime due lettere: il primo messaggio della storia fu <b>"LO"</b>!</li>
<li>🌐 Il <b>World Wide Web</b> fu inventato da <b>Tim Berners-Lee</b> al <b>CERN</b> di Ginevra tra il 1989 e il 1991, e fu regalato a tutti, gratis.</li>
<li>🛡️ Ogni anno, a febbraio, si celebra il <b>Safer Internet Day</b>, la giornata mondiale per un Internet più sicuro, nato in Europa nel 2004.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>🔐 Password <b>lunga, varia, segreta</b> e diversa per gli account importanti; la conoscono solo i genitori.</li>
<li>🪪 Niente dati personali online (nome completo, indirizzo, scuola, telefono, foto, posizione).</li>
<li>🎣 Non cliccare su premi e messaggi sospetti; nessuno serio ti chiede la password.</li>
<li>👤 Non incontrare mai chi conosci solo online.</li>
<li>💬 Sii gentile: dietro lo schermo c'è una persona vera.</li>
<li>🆘 Qualcosa ti preoccupa o ti fa star male? <b>Parlane subito con un adulto di fiducia.</b> In Italia puoi chiamare anche <b>Telefono Azzurro al 19696</b> (gratis, giorno e notte).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per ricordare le regole",
      intro: "Le regole della sicurezza online si possono imparare in tanti modi: con le regole SMART usate nelle scuole inglesi, con il semaforo, pensando alla casa e alle sue chiavi, oppure giocando.",
      tabs: [
        {
          label: "🇬🇧 Le regole SMART",
          html: `<p>Nelle scuole del Regno Unito molti bambini imparano le regole <b>SMART</b> (dell'associazione Childnet). Ogni lettera è una regola:</p>
<ul>
<li><b>S – Safe</b> (sicuro): tieni al sicuro i tuoi dati personali.</li>
<li><b>M – Meet</b> (incontrare): non incontrare chi conosci solo online.</li>
<li><b>A – Accepting</b> (accettare): non aprire file, link o messaggi da sconosciuti.</li>
<li><b>R – Reliable</b> (affidabile): non tutto online è vero; controlla le fonti.</li>
<li><b>T – Tell</b> (racconta): parla con un adulto se qualcosa ti preoccupa.</li>
</ul>
<p>E in più <i>smart</i> in inglese vuol dire <b>intelligente</b>: navigare SMART = navigare in modo intelligente!</p>`
        },
        {
          label: "🚦 Il semaforo",
          html: `<p>Prima di fare qualcosa online, chiediti di che colore è:</p>
<ul>
<li>🟢 <b>VERDE – vai pure</b>: guardare video adatti alla tua età, giocare con gli amici che conosci davvero, cercare informazioni per la scuola.</li>
<li>🟡 <b>GIALLO – chiedi prima</b>: scaricare un'app o un gioco, iscriverti a un sito, comprare qualcosa, pubblicare una foto.</li>
<li>🔴 <b>ROSSO – stop e chiama un adulto</b>: qualcuno ti chiede foto, password o dove abiti, ti mette paura, ti chiede di tenere un segreto, o vedi qualcosa che ti fa stare male.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<rect x="60" y="15" width="110" height="230" rx="20" fill="#1e293b"/>
<circle cx="115" cy="60" r="30" fill="#ef4444"/>
<circle cx="115" cy="130" r="30" fill="#facc15"/>
<circle cx="115" cy="200" r="30" fill="#22c55e"/>
<g font-size="20" fill="#1e293b">
<text x="200" y="55" font-weight="bold" fill="#b91c1c">STOP: chiama un adulto</text>
<text x="200" y="80" font-size="16">foto, password, segreti, paura</text>
<text x="200" y="125" font-weight="bold" fill="#a16207">CHIEDI PRIMA</text>
<text x="200" y="150" font-size="16">app, iscrizioni, acquisti, pubblicare</text>
<text x="200" y="195" font-weight="bold" fill="#15803d">VAI PURE</text>
<text x="200" y="220" font-size="16">video adatti, studio, giochi con amici veri</text>
</g>
</svg>`
        },
        {
          label: "🏠 La casa digitale",
          html: `<p>Immagina che il tuo account sia la tua <b>casa</b>:</p>
<ul>
<li>🔑 la <b>password</b> è la <b>chiave</b>: non la dai a chi passa per strada, e non la lasci sotto lo zerbino (cioè scritta su un foglietto attaccato al computer);</li>
<li>🚪 il <b>profilo privato</b> è la <b>porta chiusa</b>: entra solo chi inviti tu;</li>
<li>🪟 i <b>dati personali</b> sono le cose dentro casa: non le metti in vetrina;</li>
<li>🔔 un <b>messaggio da uno sconosciuto</b> è qualcuno che suona il campanello: non apri senza un adulto;</li>
<li>📷 la <b>verifica in due passaggi</b> (un codice in più che arriva sul telefono dei genitori) è come avere anche un <b>allarme</b>.</li>
</ul>`
        },
        {
          label: "🎮 Abbina pericolo e difesa",
          html: `<p>Ogni pericolo online ha la sua "difesa". Abbinali!</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Messaggio: «Hai vinto! Scrivi la password»", "Non cliccare e avvisa un adulto"],
              ["Uno sconosciuto vuole incontrarti", "Non andare e dillo ai genitori"],
              ["Qualcuno ti prende in giro in chat", "Screenshot, blocca, parlane"],
              ["Un sito chiede il tuo indirizzo", "Chiedi prima a un genitore"],
              ["Una notizia incredibile", "Controlla altre fonti affidabili"],
              ["Password «123456»", "Crea una frase segreta lunga"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della sicurezza online: tocca un nodo",
      nodes: [
        { id: "internet", label: "Internet", x: 50, y: 6, color: "#2563eb", html: "Rete mondiale che collega miliardi di dispositivi.", why: "Nacque negli Stati Uniti nel 1969 con ARPANET, una rete tra università. Negli anni '70 Vint Cerf e Bob Kahn inventarono le regole comuni (il protocollo TCP/IP) che permettono a reti diverse di \"parlarsi\": da qui il nome <i>inter-net</i>, rete tra reti." },
        { id: "identita", label: "Identità digitale", x: 18, y: 30, color: "#a855f7", html: "Tutto ciò che ti rappresenta online: account, nickname, foto, messaggi.", why: "Online nessuno ti vede in faccia: ti riconoscono dal nome utente e dalla password. Per questo chi ruba la password può \"diventare\" te." },
        { id: "password", label: "Password", x: 18, y: 58, color: "#f59e0b", html: "La chiave segreta degli account: lunga, varia, non condivisa.", why: "Un computer può provare miliardi di combinazioni: con ogni carattere in più le combinazioni si moltiplicano (con 26 lettere minuscole, 8 caratteri danno circa 200 miliardi di possibilità, 12 caratteri circa 95 milioni di miliardi). Per questo la lunghezza conta più di tutto." },
        { id: "privacy", label: "Privacy", x: 50, y: 34, color: "#16a34a", html: "Il diritto di decidere chi può conoscere i tuoi dati.", why: "In Europa la protegge il <b>GDPR</b> (Regolamento generale sulla protezione dei dati, in vigore dal 2018). In Italia, sotto i <b>14 anni</b>, per iscriversi a molti servizi online serve il consenso dei genitori, e molti social chiedono almeno 13 anni." },
        { id: "dati", label: "Dati personali", x: 50, y: 62, color: "#0ea5e9", html: "Nome, indirizzo, scuola, telefono, foto, posizione.", why: "Sono come i pezzi di un puzzle: da soli sembrano innocui, ma messi insieme permettono di sapere chi sei e dove trovarti. E ciò che va online può essere copiato e restare per sempre." },
        { id: "trucchi", label: "Phishing e truffe", x: 82, y: 30, color: "#ef4444", html: "Messaggi falsi per rubare password o dati.", why: "<i>Phishing</i> viene da <i>fishing</i> (pescare): il truffatore lancia un'\"esca\" (un premio, una minaccia, la fretta) sperando che qualcuno abbocchi. Funziona sfruttando le emozioni, non i computer." },
        { id: "rispetto", label: "Netiquette", x: 82, y: 62, color: "#db2777", html: "Le regole di gentilezza su Internet.", why: "Il nome unisce <i>net</i> (rete) ed <i>etiquette</i> (galateo). Le prime regole furono scritte negli anni '90, quando Internet arrivò nelle case e milioni di persone iniziarono a scriversi senza vedersi." },
        { id: "cyber", label: "Cyberbullismo", x: 82, y: 88, color: "#64748b", html: "Offese, minacce o esclusioni ripetute usando Internet o il telefono.", why: "In Italia la <b>legge 71/2017</b> protegge i ragazzi: ogni scuola ha un docente referente e i ragazzi dai 14 anni (o i genitori) possono chiedere di oscurare o rimuovere contenuti offensivi. È nata anche dopo storie dolorose di ragazzi vittime di cyberbullismo." },
        { id: "aiuto", label: "Chiedere aiuto", x: 30, y: 88, color: "#14b8a6", html: "Genitori, insegnanti, Telefono Azzurro 19696.", why: "Gli adulti di fiducia possono bloccare, segnalare e, se serve, rivolgersi alla Polizia Postale, che in Italia si occupa dei reati su Internet. Chiedere aiuto è sempre la mossa più intelligente." }
      ],
      edges: [
        ["internet", "identita", "hai una"],
        ["identita", "password", "protetta da"],
        ["internet", "privacy", "rispetta la"],
        ["privacy", "dati", "protegge i"],
        ["internet", "trucchi", "attenzione a"],
        ["trucchi", "password", "vogliono rubare la"],
        ["internet", "rispetto", "comportati con"],
        ["rispetto", "cyber", "il contrario è il"],
        ["cyber", "aiuto", "se succede"],
        ["dati", "aiuto", "in caso di dubbio"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: privacy e trucchi",
      questions: [
        { type: "mc", q: "Quale di queste informazioni NON va scritta in una chat di gioco?", options: ["il tuo colore preferito", "il tuo indirizzo di casa", "il tuo personaggio preferito"], answer: 1, explain: "L'indirizzo è un dato personale: permette di sapere dove abiti." },
        { type: "mc", q: "Un messaggio ti chiede la password per darti un premio. È…", options: ["un regalo vero", "phishing, una truffa", "un messaggio della scuola"], answer: 1, explain: "Nessun servizio serio chiede la password per messaggio: è phishing." },
        { type: "tf", q: "Se qualcuno online ti chiede di tenere un segreto con i tuoi genitori, è un campanello d'allarme.", answer: true, explain: "Chi ha buone intenzioni non chiede di nascondere le cose agli adulti di fiducia." },
        { type: "mc", q: "Qualcuno ti prende in giro ripetutamente in chat. Che cosa fai?", options: ["Rispondo con insulti", "Cancello tutto e non dico niente", "Faccio screenshot, blocco e ne parlo con un adulto"], answer: 2, explain: "Conservare le prove, bloccare e chiedere aiuto è la cosa giusta." }
      ]
    }
  ],
  glossary: [
    { t: "Internet", d: "Rete mondiale che collega computer e dispositivi." },
    { t: "Account", d: "Il tuo spazio personale in un sito, gioco o app, protetto da nome utente e password." },
    { t: "Password", d: "Parola o frase segreta che protegge un account." },
    { t: "Privacy", d: "Il diritto di decidere chi può conoscere le informazioni su di te." },
    { t: "Dati personali", d: "Informazioni che identificano una persona: nome, indirizzo, foto, telefono…" },
    { t: "Nickname", d: "Soprannome usato online al posto del nome vero." },
    { t: "Phishing", d: "Truffa con messaggi falsi per rubare password o dati." },
    { t: "Netiquette", d: "Le regole di buona educazione su Internet." },
    { t: "Cyberbullismo", d: "Bullismo fatto con Internet o il telefono: offese, minacce, esclusioni ripetute." },
    { t: "Screenshot", d: "Foto dello schermo, utile per conservare le prove." },
    { t: "https / lucchetto", d: "Indica che i dati viaggiano cifrati tra te e il sito." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è la caratteristica più importante di una password forte?", options: ["essere lunga", "contenere il tuo nome", "essere uguale per tutti gli account"], answer: 0, explain: "La lunghezza moltiplica le combinazioni da provare." },
      { type: "mc", q: "Chi può conoscere la tua password?", options: ["il migliore amico", "solo i genitori o un adulto di fiducia", "chiunque la chieda gentilmente"], answer: 1, explain: "La password è segreta: solo i genitori o un adulto di fiducia." },
      { type: "tf", q: "Una foto pubblicata online si può sempre cancellare del tutto.", answer: false, explain: "Una volta online può essere copiata, salvata e condivisa da altri." },
      { type: "tf", q: "Il nome della tua scuola è un dato personale da non condividere con gli sconosciuti.", answer: true, explain: "Dice dove trovarti in molte ore del giorno." },
      { type: "mc", q: "Come si chiama la truffa con messaggi falsi per rubare le password?", options: ["netiquette", "phishing", "nickname"], answer: 1, explain: "Phishing, da «fishing» = pescare." },
      { type: "text", q: "Come si chiamano le regole di buona educazione su Internet?", answer: ["netiquette", "la netiquette"], explain: "Netiquette = net (rete) + etiquette (galateo)." },
      { type: "mc", q: "Che cosa NON va bene fare con un nuovo «amico» conosciuto solo online?", options: ["giocare nella partita pubblica", "incontrarlo di persona da soli", "usare il nickname"], answer: 1, explain: "Non si incontra mai di persona chi si conosce solo online." },
      { type: "mc", q: "Quale nickname è più sicuro?", options: ["GiuliaRossi_9anni", "DragoBlu77", "Giulia_ViaRoma12"], answer: 1, explain: "Non contiene nome vero, età o indirizzo." },
      { type: "num", q: "Qual è il numero di Telefono Azzurro per bambini e ragazzi?", answer: 19696, explain: "Telefono Azzurro risponde al 19696, gratis, giorno e notte." },
      { type: "mc", q: "Il cyberbullismo è…", options: ["uno scherzo una volta tra amici che ridono tutti", "offendere, minacciare o escludere qualcuno ripetutamente online", "giocare online con i compagni"], answer: 1, explain: "Sono comportamenti ripetuti che fanno male a una persona usando Internet o il telefono." },
      { type: "order", q: "Ricevi un messaggio che ti mette paura. Metti in ordine cosa fare.", items: ["non rispondere", "fai uno screenshot", "blocca o segnala", "parlane con un adulto di fiducia"], explain: "Non rispondere, conserva la prova, blocca e chiedi aiuto." },
      { type: "mc", q: "Che cosa vuol dire la «T» delle regole SMART?", options: ["Tell: racconta a un adulto", "Type: scrivi veloce", "Take: prendi tutto"], answer: 0, explain: "Tell = racconta a un adulto se qualcosa ti preoccupa." }
    ]
  }
});
