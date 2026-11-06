TOPIC('it', {
  id: `m3-lat-casi-funzioni`,
  title: `I casi e le funzioni logiche`,
  intro: `In italiano capiamo chi fa che cosa grazie all'<b>ordine delle parole</b> e alle <b>preposizioni</b>: "Il cane morde l'uomo" è ben diverso da "L'uomo morde il cane"! Il latino invece lo indica con la <b>fine della parola</b>, la <b>desinenza</b>. Ogni desinenza corrisponde a un <b>caso</b>, e ogni caso a una <b>funzione logica</b>. Per questo l'<b>analisi logica</b> che fai in italiano è la chiave per capire il latino. 🏛️📜`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Il latino è una lingua "a desinenze"`,
      html: `<p>Una parola latina variabile ha due parti:</p>
<ul>
<li>il <b>tema</b> (la parte che non cambia e porta il significato): <i>ros-</i> = rosa;</li>
<li>la <b>desinenza</b> (la parte finale che cambia): <i>-a, -ae, -am, -is…</i> e indica la <b>funzione</b> della parola nella frase, il <b>numero</b> (singolare/plurale) e spesso il <b>genere</b>.</li>
</ul>
<p>Guarda queste due frasi:</p>
<p><i>Puell<b>a</b> ros<b>am</b> amat.</i> = La ragazza ama la rosa.<br>
<i>Ros<b>am</b> puell<b>a</b> amat.</i> = La ragazza ama la rosa (stesso significato!).</p>
<p>Anche cambiando l'ordine, <i>puella</i> con la desinenza <b>-a</b> resta il soggetto, e <i>rosam</i> con <b>-am</b> resta il complemento oggetto. In latino l'ordine delle parole è <b>libero</b> (anche se la posizione più comune mette il verbo alla fine).</p>
<p>L'insieme di tutte le forme di un nome si chiama <b>declinazione</b>; "declinare" un nome vuol dire elencare i suoi casi.</p>`
    },
    {
      type: `text`, title: `2. I sei casi e le loro funzioni`,
      html: `<table>
<tr><th>Caso</th><th>Funzione logica principale</th><th>Domanda</th><th>Esempio (1ª decl.)</th></tr>
<tr><td><b>Nominativo</b></td><td>soggetto, nome del predicato</td><td>chi? che cosa? (fa l'azione)</td><td><i>puella</i> = la ragazza</td></tr>
<tr><td><b>Genitivo</b></td><td>complemento di specificazione</td><td>di chi? di che cosa?</td><td><i>puellae</i> = della ragazza</td></tr>
<tr><td><b>Dativo</b></td><td>complemento di termine</td><td>a chi? a che cosa?</td><td><i>puellae</i> = alla ragazza</td></tr>
<tr><td><b>Accusativo</b></td><td>complemento oggetto (e moto a luogo con <i>in, ad</i>)</td><td>chi? che cosa? (subisce)</td><td><i>puellam</i> = la ragazza</td></tr>
<tr><td><b>Vocativo</b></td><td>complemento di vocazione</td><td>(si chiama qualcuno)</td><td><i>puella!</i> = o ragazza!</td></tr>
<tr><td><b>Ablativo</b></td><td>molti complementi indiretti: mezzo, modo, causa, compagnia (<i>cum</i>), stato in luogo (<i>in</i>), tempo…</td><td>con che cosa? come? dove? quando?</td><td><i>puellā</i> = con/dalla ragazza</td></tr>
</table>
<p>I nomi dei casi vengono dal latino: <i>nominativus</i> (che nomina), <i>genetivus</i> (dell'origine), <i>dativus</i> (da <i>dare</i>), <i>accusativus</i>, <i>vocativus</i> (da <i>vocare</i> = chiamare), <i>ablativus</i> (da <i>auferre</i> = portare via, perché indicava anche l'allontanamento).</p>`
    },
    {
      type: `svg`, title: `Una frase, quattro casi`,
      caption: `Puella nautae rosam dat = La ragazza dà una rosa al marinaio. Ogni colore è una funzione logica, indicata dalla desinenza.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="20" y="40" width="140" height="70" rx="12" fill="#ef4444"/>
<rect x="170" y="40" width="140" height="70" rx="12" fill="#22c55e"/>
<rect x="320" y="40" width="140" height="70" rx="12" fill="#3b82f6"/>
<rect x="470" y="40" width="110" height="70" rx="12" fill="#64748b"/>
<text x="90" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">puell<tspan fill="#fde047">a</tspan></text>
<text x="240" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">naut<tspan fill="#fde047">ae</tspan></text>
<text x="390" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">ros<tspan fill="#fde047">am</tspan></text>
<text x="525" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">dat</text>
<text x="90" y="140" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">NOMINATIVO</text>
<text x="240" y="140" font-size="15" fill="#15803d" text-anchor="middle" font-weight="bold">DATIVO</text>
<text x="390" y="140" font-size="15" fill="#1d4ed8" text-anchor="middle" font-weight="bold">ACCUSATIVO</text>
<text x="525" y="140" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">VERBO</text>
<text x="90" y="165" font-size="14" fill="#334155" text-anchor="middle">soggetto</text>
<text x="240" y="165" font-size="14" fill="#334155" text-anchor="middle">c. di termine</text>
<text x="390" y="165" font-size="14" fill="#334155" text-anchor="middle">c. oggetto</text>
<text x="525" y="165" font-size="14" fill="#334155" text-anchor="middle">predicato</text>
<text x="90" y="200" font-size="18" fill="#0f172a" text-anchor="middle">la ragazza</text>
<text x="240" y="200" font-size="18" fill="#0f172a" text-anchor="middle">al marinaio</text>
<text x="390" y="200" font-size="18" fill="#0f172a" text-anchor="middle">una rosa</text>
<text x="525" y="200" font-size="18" fill="#0f172a" text-anchor="middle">dà</text>
<text x="300" y="250" font-size="17" fill="#854d0e" text-anchor="middle">La desinenza (in giallo) dice il caso, anche se sposti le parole:</text>
<text x="300" y="278" font-size="17" fill="#854d0e" text-anchor="middle" font-style="italic">Nautae rosam puella dat. = stesso significato!</text>
</svg>`
    },
    {
      type: `text`, title: `3. La prima declinazione: rosa, rosae`,
      html: `<p>I nomi della <b>prima declinazione</b> escono al nominativo singolare in <b>-a</b> e al genitivo singolare in <b>-ae</b>. Sono quasi tutti <b>femminili</b> (<i>rosa, puella, silva</i> = bosco, <i>terra, aqua, insula</i> = isola), ma alcuni nomi di mestieri maschili sono di prima: <i>nauta</i> (marinaio), <i>agricola</i> (contadino), <i>poeta</i>, <i>incola</i> (abitante).</p>
<table>
<tr><th>Caso</th><th>Singolare</th><th>Plurale</th></tr>
<tr><td>Nominativo</td><td>ros<b>a</b> – la rosa</td><td>ros<b>ae</b> – le rose</td></tr>
<tr><td>Genitivo</td><td>ros<b>ae</b> – della rosa</td><td>ros<b>arum</b> – delle rose</td></tr>
<tr><td>Dativo</td><td>ros<b>ae</b> – alla rosa</td><td>ros<b>is</b> – alle rose</td></tr>
<tr><td>Accusativo</td><td>ros<b>am</b> – la rosa</td><td>ros<b>as</b> – le rose</td></tr>
<tr><td>Vocativo</td><td>ros<b>a</b> – o rosa</td><td>ros<b>ae</b> – o rose</td></tr>
<tr><td>Ablativo</td><td>ros<b>ā</b> – con la rosa</td><td>ros<b>is</b> – con le rose</td></tr>
</table>
<p>Attenzione alle forme uguali: <b>rosae</b> può essere genitivo sing., dativo sing., nominativo o vocativo plurale! Il significato si capisce dal <b>contesto</b> e dal verbo (singolare o plurale). Il latino non ha l'<b>articolo</b>: <i>rosa</i> = la rosa / una rosa.</p>
<p>Le declinazioni in tutto sono <b>cinque</b>, riconoscibili dal <b>genitivo singolare</b>: 1ª -ae (<i>rosa, rosae</i>), 2ª -i (<i>dominus, domini</i>), 3ª -is (<i>rex, regis</i>), 4ª -us (<i>manus, manus</i>), 5ª -ei (<i>dies, diei</i>). Per questo sul vocabolario si trovano sempre nominativo e genitivo.</p>`
    },
    {
      type: `widget`, title: `Flashcards: declina rosa`,
      widget: `flashcards`,
      options: { cards: [
        { front: `nominativo singolare`, back: `rosa – la rosa (soggetto)` },
        { front: `genitivo singolare`, back: `rosae – della rosa` },
        { front: `dativo singolare`, back: `rosae – alla rosa` },
        { front: `accusativo singolare`, back: `rosam – la rosa (oggetto)` },
        { front: `ablativo singolare`, back: `rosā – con la rosa` },
        { front: `genitivo plurale`, back: `rosarum – delle rose` },
        { front: `dativo/ablativo plurale`, back: `rosis – alle rose / con le rose` },
        { front: `accusativo plurale`, back: `rosas – le rose (oggetto)` }
      ] },
      caption: `Ripeti a voce la declinazione come una filastrocca: rosa, rosae, rosae, rosam, rosa, rosā…`
    },
    {
      type: `quiz`, title: `Mini-quiz: casi e desinenze`,
      questions: [
        { type: `mc`, q: `Quale caso esprime il complemento oggetto?`, options: [`Nominativo`, `Accusativo`, `Dativo`], answer: 1, explain: `L'accusativo è il caso del complemento oggetto.` },
        { type: `mc`, q: `"Silvarum" è…`, options: [`genitivo plurale`, `accusativo singolare`, `ablativo plurale`], answer: 0, explain: `-arum è la desinenza del genitivo plurale: "dei boschi".` },
        { type: `tf`, q: `In latino esiste l'articolo determinativo.`, answer: false, explain: `Il latino non ha articoli: rosa = la rosa o una rosa.` }
      ]
    },
    {
      type: `text`, title: `4. Dall'analisi logica alla traduzione: il metodo`,
      html: `<p>Per tradurre una frase latina si procede come un detective:</p>
<ol>
<li><b>Trova il verbo</b> (di solito alla fine): dalla desinenza capisci la persona e il numero del soggetto (<i>dat</i> = egli/ella dà).</li>
<li><b>Trova il soggetto</b>: un nominativo concordato con il verbo (singolare se il verbo è singolare).</li>
<li><b>Trova il complemento oggetto</b>: un accusativo (se il verbo è transitivo).</li>
<li><b>Analizza gli altri casi</b>: genitivo (di…), dativo (a…), ablativo (con, da, in…).</li>
<li><b>Scegli il significato</b> giusto dal vocabolario e <b>riordina</b> in italiano.</li>
</ol>
<p>Esempio: <i>Agricola cum filiā in silvā ambulat.</i></p>
<ul>
<li><i>ambulat</i>: verbo, 3ª persona singolare = passeggia;</li>
<li><i>agricola</i>: nominativo singolare = il contadino (soggetto);</li>
<li><i>cum filiā</i>: <i>cum</i> + ablativo = compagnia ➜ con la figlia;</li>
<li><i>in silvā</i>: <i>in</i> + ablativo = stato in luogo ➜ nel bosco.</li>
</ul>
<p>➜ <b>Il contadino passeggia con la figlia nel bosco.</b></p>
<p>⚠️ <i>in</i> + <b>ablativo</b> = stato in luogo (<i>in silvā</i> = nel bosco); <i>in</i> + <b>accusativo</b> = moto a luogo (<i>in silvam</i> = verso il / dentro il bosco).</p>`
    },
    {
      type: `widget`, title: `Gioco: in quale caso è la parola sottolineata?`,
      widget: `classify`,
      options: {
        groups: [`Nominativo`, `Genitivo`, `Dativo`, `Accusativo`, `Ablativo`],
        items: [
          [`PUELLA cantat (la ragazza canta)`, 0],
          [`NAUTAE navigant (i marinai navigano)`, 0],
          [`ira DEAE (l'ira della dea)`, 1],
          [`insula NAUTARUM (l'isola dei marinai)`, 1],
          [`poetae ROSAS do (do rose al poeta)`, 3],
          [`AGRICOLAE pecuniam do (do denaro al contadino)`, 2],
          [`magistra DISCIPULIS narrat (racconta agli alunni)`, 2],
          [`AQUAM porto (porto l'acqua)`, 3],
          [`in SILVĀ (nel bosco)`, 4],
          [`cum FILIĀ (con la figlia)`, 4]
        ]
      },
      caption: `Ragiona prima in italiano: è soggetto, specificazione, termine, oggetto o un altro complemento?`
    },
    {
      type: `example`, title: `Esempio pratico: tradurre un'iscrizione`,
      html: `<p>Su una tavoletta romana immaginaria leggi: <i>Incolae insulae deae aras parant.</i></p>
<ol>
<li><i>parant</i> = preparano (3ª pers. plurale) ➜ il soggetto è plurale.</li>
<li><i>incolae</i>: nominativo plurale = gli abitanti (soggetto).</li>
<li><i>insulae</i>: genitivo singolare = dell'isola (specificazione, si lega a <i>incolae</i>).</li>
<li><i>deae</i>: dativo singolare = alla dea (termine).</li>
<li><i>aras</i>: accusativo plurale = gli altari (oggetto).</li>
</ol>
<p>➜ <b>Gli abitanti dell'isola preparano gli altari alla dea.</b> Hai notato? <i>insulae</i> e <i>deae</i> hanno la stessa desinenza, ma funzioni diverse: decide il senso della frase.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: i casi nascosti nell'italiano`,
      html: `<p>L'italiano ha perso i casi nei nomi, ma li ha conservati nei <b>pronomi personali</b>:</p>
<ul>
<li><b>io</b> parlo (soggetto = nominativo, dal latino <i>ego</i>);</li>
<li>Luca <b>mi</b> vede / vede <b>me</b> (oggetto = accusativo, dal latino <i>me</i>);</li>
<li>Luca <b>mi</b> dà un libro = dà <b>a me</b> (termine = dativo, dal latino <i>mihi</i>).</li>
</ul>
<p>Lo stesso con <b>egli/lui/gli/lo</b>, <b>chi/cui</b>. Inoltre quasi tutti i nomi italiani vengono dall'<b>accusativo</b> latino: <i>rosam</i> ➜ rosa, <i>montem</i> ➜ monte, <i>lupum</i> ➜ lupo (la -m finale nel parlato non si pronunciava più già in età imperiale).</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… molte lingue vive hanno ancora i casi?`,
      html: `<p>Il <b>tedesco</b> ne ha 4 (Nominativ, Genitiv, Dativ, Akkusativ), il <b>russo</b> 6, il <b>polacco</b> 7, il <b>rumeno</b> conserva genitivo-dativo e vocativo, il <b>greco moderno</b> 4. Il <b>finlandese</b> ne ha circa 15 e l'<b>ungherese</b> più di 18! Il latino ne aveva 6 (più un piccolo resto di un settimo, il <b>locativo</b>: <i>Romae</i> = a Roma, <i>domi</i> = a casa).</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… usiamo casi latini senza saperlo?`,
      html: `<p>Molte espressioni latine che usiamo sono in un caso preciso: <i>curriculum <b>vitae</b></i> (genitivo: "corsa <b>della vita</b>"), <i>aqua <b>vitae</b></i>, <i>terra <b>incognita</b></i> (nominativo), <i>ad <b>hoc</b></i> (accusativo: "per questo"), <i>in <b>extremis</b></i> (ablativo plurale: "negli ultimi momenti"), <i>a <b>priori</b></i> (ablativo), <i>pro <b>forma</b></i> (ablativo). E il nome della lingua <i>latina</i> viene dal <b>Lazio</b> (<i>Latium</i>).</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li><b>Desinenza</b> = indica il <b>caso</b> (funzione logica) e il <b>numero</b>.</li>
<li>Nominativo = soggetto; Genitivo = di…; Dativo = a…; Accusativo = oggetto; Vocativo = o…!; Ablativo = con, da, in (complementi indiretti).</li>
<li>Prima declinazione: <b>rosa, rosae</b> (gen. -ae), quasi tutti femminili.</li>
<li>Per tradurre: verbo ➜ soggetto ➜ oggetto ➜ altri complementi ➜ riordina.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se i casi ti sembrano un muro, prova a guardarli da un altro lato.`,
      tabs: [
        {
          label: `🏷️ Le etichette sulle parole`,
          html: `<p>Immagina che ogni parola latina porti un'<b>etichetta</b> attaccata alla fine, come il cartellino di una valigia: <i>-a</i> = "sono il soggetto", <i>-am</i> = "sono l'oggetto", <i>-ae</i> (con un verbo come <i>dare</i>) = "sono a chi si dà".</p>
<p>In italiano invece le parole non hanno etichette: il loro ruolo dipende dal <b>posto</b> in cui stanno, come i giocatori di una squadra che contano per la loro <b>posizione</b> in campo. In latino ogni giocatore ha la <b>maglia col ruolo</b> scritto sopra: può stare dove vuole, si capisce sempre chi è il portiere!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<g font-size="22" font-weight="bold" text-anchor="middle">
<rect x="30" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="110" y="88" fill="#0f172a">ros</text>
<rect x="210" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="290" y="88" fill="#0f172a">puell</text>
<rect x="390" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="470" y="88" fill="#0f172a">am</text>
</g>
<polygon points="150,110 190,110 190,150 170,165 150,150" fill="#3b82f6"/>
<text x="170" y="140" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">am</text>
<polygon points="330,110 370,110 370,150 350,165 330,150" fill="#ef4444"/>
<text x="350" y="140" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">a</text>
<polygon points="510,110 550,110 550,150 530,165 510,150" fill="#64748b"/>
<text x="530" y="140" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">-at</text>
<text x="110" y="195" font-size="15" fill="#1d4ed8" text-anchor="middle">etichetta: OGGETTO</text>
<text x="290" y="195" font-size="15" fill="#b91c1c" text-anchor="middle">etichetta: SOGGETTO</text>
<text x="470" y="195" font-size="15" fill="#334155" text-anchor="middle">verbo: am-at (ama)</text>
<text x="300" y="30" font-size="17" fill="#0f172a" text-anchor="middle" font-weight="bold">Rosam puella amat = La ragazza ama la rosa</text>
</svg>`
        },
        {
          label: `🇩🇪 Come in tedesco e russo`,
          html: `<p>Se studi o senti il tedesco, conosci già i casi! Ma lì li porta soprattutto l'<b>articolo</b>:</p>
<ul>
<li><b>Der</b> Hund beißt <b>den</b> Mann = Il cane morde l'uomo (der = nominativo, den = accusativo).</li>
<li><b>Den</b> Mann beißt <b>der</b> Hund = stesso significato, ordine diverso!</li>
</ul>
<p>In <b>russo</b>, come in latino, cambia la fine del nome: <i>мам<b>а</b></i> (mamma, soggetto) ➜ <i>вижу мам<b>у</b></i> (vedo la mamma, oggetto). Gli studenti russi, rumeni o polacchi trovano i casi latini molto più naturali degli italiani!</p>`
        },
        {
          label: `🧩 Abbina caso e domanda`,
          html: `<p>Ogni caso risponde a una domanda dell'analisi logica. Collega le coppie.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Nominativo`, `Chi compie l'azione?`],
            [`Genitivo`, `Di chi? Di che cosa?`],
            [`Dativo`, `A chi? A che cosa?`],
            [`Accusativo`, `Chi/che cosa subisce l'azione?`],
            [`Vocativo`, `Chi sto chiamando?`],
            [`Ablativo`, `Con che cosa? Dove? Come? Quando?`]
          ] }
        },
        {
          label: `🎨 I colori dell'analisi logica`,
          html: `<p>Un trucco usato in molte scuole: dai a ogni funzione logica un <b>colore fisso</b>, in italiano e in latino.</p>
<ul>
<li>🔴 rosso = soggetto (nominativo)</li>
<li>⚫ nero = verbo</li>
<li>🔵 blu = complemento oggetto (accusativo)</li>
<li>🟢 verde = termine (dativo)</li>
<li>🟡 giallo = specificazione (genitivo)</li>
<li>🟣 viola = altri complementi (ablativo)</li>
</ul>
<p>Colora la frase italiana, poi quella latina: le parole cambiano posto, ma i colori restano uguali!</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: casi e funzioni`,
      nodes: [
        { id: `flex`, label: `Lingua flessiva`, x: 50, y: 6, color: `#64748b`, html: `Le parole cambiano la terminazione per esprimere la funzione.`, why: `Il latino eredita i casi dall'<b>indoeuropeo</b>, la lingua madre ricostruita da cui derivano anche greco, sanscrito, lingue germaniche e slave. L'indoeuropeo aveva probabilmente 8 casi.` },
        { id: `des`, label: `Desinenza`, x: 25, y: 26, color: `#eab308`, html: `La parte finale che cambia.`, why: `Dal latino <i>desinere</i> = finire, terminare. Si attacca al tema della parola, che porta il significato.` },
        { id: `decl`, label: `5 declinazioni`, x: 75, y: 26, color: `#a855f7`, html: `Gruppi di nomi con le stesse desinenze; si riconoscono dal genitivo singolare.`, why: `La classificazione in cinque declinazioni è dei grammatici antichi e medievali (come Prisciano, VI sec.): il genitivo è il caso in cui le differenze si vedono meglio.` },
        { id: `nom`, label: `Nominativo`, x: 10, y: 52, color: `#ef4444`, html: `Soggetto e nome del predicato.`, why: `È la forma con cui si "nomina" la cosa (<i>nominare</i>): per questo è la prima forma sul vocabolario.` },
        { id: `gen`, label: `Genitivo`, x: 28, y: 72, color: `#f59e0b`, html: `Specificazione: di chi?`, why: `Il nome è nato da un errore di traduzione: il greco <i>genikḗ</i> voleva dire "del genere, della categoria", ma i Romani lo resero come <i>genetivus</i>, "della nascita, dell'origine".` },
        { id: `dat`, label: `Dativo`, x: 48, y: 52, color: `#22c55e`, html: `Termine: a chi?`, why: `Da <i>dare</i>: è il caso di chi riceve qualcosa. Il nostro "mi", "ti", "gli" ne sono gli eredi.` },
        { id: `acc`, label: `Accusativo`, x: 68, y: 72, color: `#3b82f6`, html: `Complemento oggetto; con <i>in, ad</i> moto a luogo.`, why: `Anche qui un errore di traduzione: il greco <i>aitiatikḗ</i> (del causato, dell'effetto) fu confuso con <i>aitiáomai</i> (accusare) e divenne <i>accusativus</i>.` },
        { id: `abl`, label: `Ablativo`, x: 88, y: 52, color: `#7c3aed`, html: `Mezzo, modo, causa, compagnia, luogo, tempo.`, why: `Il greco non lo aveva: secondo la tradizione il nome risale a Giulio Cesare, autore di un trattato di grammatica (<i>ablativus</i>, da <i>auferre</i>, portare via). In latino ha "assorbito" tre antichi casi indoeuropei: ablativo, strumentale e locativo.` },
        { id: `ital`, label: `Eredità in italiano`, x: 50, y: 92, color: `#0ea5e9`, html: `Pronomi (io/me/mi) e nomi derivati dall'accusativo.`, why: `Nel latino parlato le desinenze finali si indebolirono (la -m non si pronunciava, le vocali si confondevano): servirono allora preposizioni e ordine fisso delle parole, come in italiano.` }
      ],
      edges: [
        [`flex`, `des`, `usa`], [`flex`, `decl`, `organizza`], [`des`, `nom`, `caso`], [`des`, `gen`, `caso`], [`des`, `dat`, `caso`], [`des`, `acc`, `caso`], [`des`, `abl`, `caso`],
        [`acc`, `ital`, `da qui i nomi`], [`dat`, `ital`, `pronomi`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: traduci`,
      questions: [
        { type: `mc`, q: `"Poeta puellis fabulam narrat" significa…`, options: [`La ragazza racconta una favola al poeta.`, `Il poeta racconta una favola alle ragazze.`, `Le ragazze raccontano le favole del poeta.`], answer: 1, explain: `poeta = nom. (soggetto), puellis = dat. pl. (alle ragazze), fabulam = acc. (oggetto).` },
        { type: `text`, q: `Come si dice in latino "nel bosco" (in + ablativo di silva)?`, answer: [`in silva`, `in silvā`], explain: `Stato in luogo: in + ablativo ➜ in silvā.` },
        { type: `tf`, q: `"Rosam puella amat" e "Puella rosam amat" hanno lo stesso significato.`, answer: true, explain: `Le desinenze -a (soggetto) e -am (oggetto) non cambiano.` }
      ]
    }
  ],
  glossary: [
    { t: `Caso`, d: `Forma che una parola assume per esprimere la sua funzione logica.` },
    { t: `Desinenza`, d: `Terminazione variabile che indica caso e numero.` },
    { t: `Tema`, d: `Parte invariabile della parola, che porta il significato.` },
    { t: `Declinazione`, d: `Insieme delle forme di un nome; in latino sono cinque gruppi.` },
    { t: `Nominativo`, d: `Caso del soggetto e del nome del predicato.` },
    { t: `Genitivo`, d: `Caso del complemento di specificazione.` },
    { t: `Dativo`, d: `Caso del complemento di termine.` },
    { t: `Accusativo`, d: `Caso del complemento oggetto.` },
    { t: `Vocativo`, d: `Caso per chiamare qualcuno.` },
    { t: `Ablativo`, d: `Caso di molti complementi indiretti (mezzo, modo, luogo, tempo…).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `In latino la funzione logica di un nome si capisce soprattutto da…`, options: [`l'ordine delle parole`, `la desinenza`, `l'articolo`], answer: 1, explain: `La desinenza indica il caso.` },
      { type: `mc`, q: `Il caso del complemento di termine è…`, options: [`il genitivo`, `il dativo`, `l'ablativo`], answer: 1, explain: `Dativo = a chi? a che cosa?` },
      { type: `mc`, q: `"Rosarum" è…`, options: [`genitivo plurale`, `dativo singolare`, `accusativo plurale`], answer: 0, explain: `-arum = genitivo plurale (delle rose).` },
      { type: `num`, q: `Quanti sono i casi del latino (senza contare il locativo)?`, answer: 6, tol: 0, explain: `Nominativo, genitivo, dativo, accusativo, vocativo, ablativo.` },
      { type: `num`, q: `Quante sono le declinazioni latine?`, answer: 5, tol: 0, explain: `Si riconoscono dal genitivo singolare: -ae, -i, -is, -us, -ei.` },
      { type: `text`, q: `Scrivi l'accusativo singolare di "puella".`, answer: [`puellam`], explain: `1ª declinazione: -am ➜ puellam.` },
      { type: `text`, q: `Scrivi il genitivo singolare di "rosa".`, answer: [`rosae`], explain: `1ª declinazione: genitivo singolare in -ae.` },
      { type: `tf`, q: `"Nauta" è un nome maschile della prima declinazione.`, answer: true, explain: `I nomi di mestieri maschili come nauta, agricola, poeta sono di 1ª declinazione.` },
      { type: `tf`, q: `"In silvam" indica lo stato in luogo.`, answer: false, explain: `In + accusativo = moto a luogo (verso il bosco); stato in luogo è in + ablativo.` },
      { type: `order`, q: `Metti in ordine i passi per tradurre una frase latina.`, items: [`Trova il verbo`, `Trova il soggetto al nominativo`, `Trova il complemento oggetto all'accusativo`, `Analizza gli altri complementi`, `Riordina in italiano`], explain: `Partire dal verbo aiuta a capire chi è il soggetto.` },
      { type: `mc`, q: `"Agricolae filiae rosas dant" significa…`, options: [`I contadini danno le rose alla figlia.`, `La figlia dà le rose ai contadini.`, `Il contadino dà la rosa alle figlie.`], answer: 0, explain: `dant è plurale ➜ agricolae nom. pl.; filiae dat. sing.; rosas acc. pl.` },
      { type: `mc`, q: `Da quale caso latino derivano quasi tutti i nomi italiani?`, options: [`Nominativo`, `Accusativo`, `Vocativo`], answer: 1, explain: `rosam ➜ rosa, montem ➜ monte, lupum ➜ lupo.` }
    ]
  }
});
