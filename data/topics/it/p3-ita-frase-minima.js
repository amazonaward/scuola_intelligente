TOPIC('it', {
  id: "p3-ita-frase-minima",
  title: "La frase minima",
  intro: "«Il cane abbaia.» Bastano poche parole per fare una frase completa! 🐕 Oggi scopriamo il <b>soggetto</b> e il <b>predicato</b>, i due pilastri di ogni frase, e impariamo a trovare la <b>frase minima</b> anche dentro le frasi lunghissime.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è una frase",
      html: `<p>Una <b>frase</b> è un gruppo di parole messe in ordine che ha un <b>senso compiuto</b>: chi la legge capisce un'informazione intera.</p>
<ul>
<li>«Il gatto dorme.» ✅ è una frase: capisco chi fa che cosa.</li>
<li>«Il gatto sul.» ❌ non è una frase: manca qualcosa, il senso non è completo.</li>
</ul>
<p>Ogni frase ha un <b>verbo</b>. Il verbo è il cuore della frase: senza verbo non c'è frase!</p>`
    },
    {
      type: "text",
      title: "Soggetto e predicato",
      html: `<p>La <b>frase minima</b> (o <b>frase nucleare</b>) è la frase più corta possibile che ha senso compiuto. È formata da due parti:</p>
<ul>
<li>il <b>soggetto</b> 👤 = <b>chi</b> o <b>che cosa</b> fa l'azione (o di chi si parla). Si trova con la domanda: «<b>Chi?</b>» o «<b>Che cosa?</b>»</li>
<li>il <b>predicato</b> 🎬 = <b>che cosa fa</b> (o com'è) il soggetto. È il verbo. Si trova con la domanda: «<b>Che cosa fa?</b>»</li>
</ul>
<p>Esempio: «<b>Marta</b> <b>legge</b>.»</p>
<ul>
<li>Che cosa si fa? → <b>legge</b> → predicato</li>
<li>Chi legge? → <b>Marta</b> → soggetto</li>
</ul>
<p><b>Consiglio:</b> cerca sempre <b>prima il verbo</b> (predicato), poi chiedi «chi?» al verbo per trovare il soggetto.</p>`
    },
    {
      type: "svg",
      title: "Il soggetto e il predicato si tengono per mano",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<rect x="60" y="80" width="200" height="90" rx="20" fill="#3b82f6"/>
<rect x="340" y="80" width="200" height="90" rx="20" fill="#ef4444"/>
<text x="160" y="138" font-size="38" font-weight="bold" text-anchor="middle" fill="#ffffff">Il cane</text>
<text x="440" y="138" font-size="38" font-weight="bold" text-anchor="middle" fill="#ffffff">abbaia.</text>
<path d="M262 125 Q300 95 338 125" stroke="#1f2937" stroke-width="5" fill="none"/>
<text x="160" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">SOGGETTO</text>
<text x="440" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#b91c1c">PREDICATO</text>
<text x="160" y="205" font-size="20" text-anchor="middle" fill="#1f2937">Chi abbaia?</text>
<text x="440" y="205" font-size="20" text-anchor="middle" fill="#1f2937">Che cosa fa?</text>
<text x="160" y="260" font-size="40" text-anchor="middle">🐕</text>
<text x="440" y="260" font-size="40" text-anchor="middle">🗯️</text>
<text x="300" y="290" font-size="18" text-anchor="middle" fill="#166534">soggetto + predicato = frase minima</text>
</svg>`,
      caption: "Nell'analisi logica si usa spesso il blu per il soggetto e il rosso per il predicato."
    },
    {
      type: "text",
      title: "Il soggetto e il verbo vanno d'accordo",
      html: `<p>Il predicato si <b>accorda</b> con il soggetto: se il soggetto è singolare, il verbo è singolare; se è plurale, il verbo è plurale.</p>
<ul>
<li>«Il bambino <b>gioca</b>.» → «I bambini <b>giocano</b>.»</li>
<li>«Io <b>canto</b>.» → «Noi <b>cantiamo</b>.»</li>
</ul>
<p>Il soggetto può essere un <b>nome</b> (Luca, il sole), un <b>pronome</b> (io, tu, lei, noi…) o anche un gruppo di parole («<b>Il mio amico Paolo</b> ride»).</p>
<p>Il soggetto <b>non sta sempre all'inizio</b>: «Arriva <b>il treno</b>.» Chi arriva? Il treno! Per questo bisogna fare la domanda, non guardare solo il posto.</p>`
    },
    {
      type: "text",
      title: "Il soggetto sottinteso",
      html: `<p>A volte il soggetto <b>non è scritto</b>, ma si capisce dal verbo. Si chiama <b>soggetto sottinteso</b>.</p>
<ul>
<li>«<b>Corro</b>.» → chi corre? <b>io</b> (sottinteso)</li>
<li>«<b>Mangiate</b>!» → chi mangia? <b>voi</b> (sottinteso)</li>
<li>«Luca è stanco. <b>Dorme</b>.» → chi dorme? <b>Luca</b> (sottinteso, detto prima)</li>
</ul>
<p>In italiano possiamo farlo perché la <b>desinenza</b> del verbo dice già chi fa l'azione: «cant<b>iamo</b>» vuol dire per forza «noi».</p>
<p>E ci sono anche frasi <b>senza soggetto</b>: «<b>Piove.</b>», «<b>Nevica.</b>», «<b>Tuona.</b>» Questi verbi del tempo atmosferico si chiamano <b>impersonali</b>: nessuno «fa» la pioggia!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: trova soggetto e predicato",
      questions: [
        { type: "mc", q: "Nella frase «Il sole splende» qual è il soggetto?", options: ["Il sole", "splende"], answer: 0, explain: "Chi splende? Il sole." },
        { type: "mc", q: "Nella frase «Volano le rondini» qual è il predicato?", options: ["le rondini", "volano"], answer: 1, explain: "Il verbo «volano» dice che cosa fanno le rondini." },
        { type: "text", q: "«Ridiamo.» Qual è il soggetto sottinteso?", answer: ["noi"], explain: "La desinenza -iamo indica «noi»." },
        { type: "tf", q: "«La maestra con il libro» è una frase minima.", answer: false, explain: "Manca il verbo (predicato): non ha senso compiuto." }
      ]
    },
    {
      type: "text",
      title: "Predicato verbale e predicato nominale",
      html: `<p>Il predicato può essere di due tipi:</p>
<ul>
<li><b>Predicato verbale</b>: un verbo che indica un'azione. «Il gatto <b>miagola</b>.» «Noi <b>abbiamo giocato</b>.»</li>
<li><b>Predicato nominale</b>: il verbo <b>essere</b> + un nome o un aggettivo che dice <b>com'è</b> o <b>chi è</b> il soggetto. «Il cielo <b>è azzurro</b>.» «Luca <b>è un pittore</b>.»</li>
</ul>
<p>Nel predicato nominale il verbo essere fa da «ponte» (si chiama <b>copula</b>, cioè «legame») tra il soggetto e la sua qualità.</p>`
    },
    {
      type: "text",
      title: "Dalla frase minima alla frase espansa",
      html: `<p>Alla frase minima possiamo aggiungere tante informazioni con le <b>espansioni</b>: rispondono alle domande <i>che cosa? dove? quando? come? con chi? perché?</i></p>
<p>«Il cane abbaia» → «Il cane <b>di Sara</b> abbaia <b>forte</b> <b>al postino</b> <b>ogni mattina</b>.»</p>
<p>Per trovare la frase minima dentro una frase lunga fai il gioco del <b>«togli, togli»</b>: togli le parole una alla volta finché la frase ha ancora senso. Quello che resta e non si può togliere è la frase minima!</p>`
    },
    {
      type: "svg",
      title: "Il trenino della frase",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<line x1="10" y1="200" x2="590" y2="200" stroke="#78716c" stroke-width="6"/>
<rect x="20" y="90" width="150" height="90" rx="12" fill="#3b82f6"/>
<rect x="180" y="90" width="150" height="90" rx="12" fill="#ef4444"/>
<rect x="340" y="110" width="115" height="70" rx="10" fill="#fbbf24"/>
<rect x="465" y="110" width="115" height="70" rx="10" fill="#a3e635"/>
<g fill="#1f2937"><circle cx="55" cy="192" r="14"/><circle cx="135" cy="192" r="14"/><circle cx="215" cy="192" r="14"/><circle cx="295" cy="192" r="14"/><circle cx="370" cy="192" r="12"/><circle cx="425" cy="192" r="12"/><circle cx="495" cy="192" r="12"/><circle cx="550" cy="192" r="12"/></g>
<text x="95" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#ffffff">Il cane</text>
<text x="95" y="160" font-size="15" text-anchor="middle" fill="#dbeafe">soggetto</text>
<text x="255" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#ffffff">abbaia</text>
<text x="255" y="160" font-size="15" text-anchor="middle" fill="#fee2e2">predicato</text>
<text x="397" y="145" font-size="17" text-anchor="middle" fill="#78350f">al postino</text>
<text x="522" y="145" font-size="17" text-anchor="middle" fill="#365314">ogni mattina</text>
<text x="175" y="60" font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">locomotiva: FRASE MINIMA</text>
<text x="460" y="80" font-size="18" text-anchor="middle" fill="#57534e">vagoni: espansioni</text>
</svg>`,
      caption: "La frase minima è la locomotiva: senza di lei il treno non parte. Le espansioni sono vagoni che si possono staccare."
    },
    {
      type: "example",
      title: "Esempio pratico: il gioco del «togli, togli»",
      html: `<p>Frase: «Ieri pomeriggio la mia sorellina ha disegnato un drago verde sul quaderno.»</p>
<ol>
<li>Tolgo «ieri pomeriggio» → «La mia sorellina ha disegnato un drago verde sul quaderno.» Ha senso ✅</li>
<li>Tolgo «sul quaderno» → «La mia sorellina ha disegnato un drago verde.» ✅</li>
<li>Tolgo «verde» e «un drago» → «La mia sorellina ha disegnato.» ✅</li>
<li>Tolgo «mia» → «La sorellina ha disegnato.» ✅</li>
<li>Se tolgo «ha disegnato» o «la sorellina» la frase non sta più in piedi ❌</li>
</ol>
<p>Frase minima: «<b>La sorellina</b> (soggetto) <b>ha disegnato</b> (predicato).» Nota: «ha disegnato» è un predicato fatto di <b>due parole</b>, ma è un verbo solo!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i titoli dei giornali e i messaggi",
      html: `<p>Nei messaggi brevi usiamo spesso frasi minime, perché arrivano subito al punto:</p>
<ul>
<li>«<b>Arrivo!</b>» → soggetto sottinteso «io», predicato «arrivo».</li>
<li>«<b>La partita è finita.</b>» → soggetto «la partita», predicato «è finita».</li>
<li>«<b>Nevica!</b>» → frase senza soggetto: verbo impersonale.</li>
</ul>
<p>Invece i titoli dei giornali a volte <b>non hanno il verbo</b>: «Neve sulle Alpi». In quel caso non sono vere frasi, ma il verbo si capisce lo stesso («C'è neve sulle Alpi»).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Veni, vidi, vici",
      html: `<p>Nel <b>47 a.C.</b> Giulio Cesare vinse una battaglia in pochi giorni (a Zela, nell'attuale Turchia) e scrisse a Roma solo tre parole: «<b>Veni, vidi, vici</b>», cioè «Venni, vidi, vinsi». Sono tre <b>frasi minime</b> in fila, ognuna con il soggetto sottinteso «io»! Anche il latino, come l'italiano, poteva sottintendere il soggetto.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? In inglese piove «esso»",
      html: `<p>In italiano diciamo «Piove» senza soggetto. In inglese invece il soggetto è obbligatorio, così si dice «<b>It</b> rains», cioè più o meno «Esso piove». In tedesco «<b>Es</b> regnet», in francese «<b>Il</b> pleut». E in giapponese l'ordine è diverso: il verbo va sempre <b>alla fine</b> della frase!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Frase minima = <b>soggetto</b> + <b>predicato</b>: la frase più corta con senso compiuto.</li>
<li>Prima trovo il <b>verbo</b> (predicato), poi chiedo «<b>chi?</b>» o «<b>che cosa?</b>» per il soggetto.</li>
<li>Il soggetto può essere <b>sottinteso</b> (Corro → io).</li>
<li>Verbi come piove, nevica non hanno soggetto (impersonali).</li>
<li>Predicato <b>verbale</b> (azione) o <b>nominale</b> (essere + nome/aggettivo).</li>
<li>Le <b>espansioni</b> arricchiscono la frase minima.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la frase minima",
      intro: "Se «soggetto» e «predicato» ti sembrano parole difficili, prova a vederli in un altro modo.",
      tabs: [
        {
          label: "🎬 Il film",
          html: `<p>Immagina che ogni frase sia un piccolo <b>film</b>:</p>
<ul>
<li>il <b>soggetto</b> è l'<b>attore</b> protagonista 🎭: chi sta sulla scena;</li>
<li>il <b>predicato</b> è l'<b>azione</b> 🎬: quello che l'attore fa;</li>
<li>le <b>espansioni</b> sono la <b>scenografia</b>: dove, quando, con chi, come.</li>
</ul>
<p>Senza attore o senza azione il film non c'è. Senza scenografia… è un film un po' povero, ma è sempre un film!</p>`
        },
        {
          label: "🧩 I mattoncini colorati",
          html: `<p>Metodo usato in molte scuole (anche Montessori): ogni tipo di parola ha un colore e una forma. Il soggetto è un mattoncino <b>blu</b>, il predicato <b>rosso</b>. Un mattoncino rosso e uno blu attaccati bastano per fare una frase. Prova a costruire tu: sposta i cubetti e pensa a quante frasi minime puoi formare con 2 soggetti × 3 verbi!</p>
<p>Con 2 soggetti (il gatto, la nonna) e 3 predicati (dorme, canta, salta) ottieni 2 × 3 = <b>6 frasi minime</b> diverse: il gatto dorme, il gatto canta, il gatto salta, la nonna dorme…</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        },
        {
          label: "❓ Le domande magiche",
          html: `<p>Se non trovi il soggetto, segui questa ricetta:</p>
<ol>
<li>Sottolinea in <b>rosso</b> il verbo (la parola che cambia se metto «ieri» o «domani»).</li>
<li>Chiedi al verbo: «<b>Chi</b> + verbo?» o «<b>Che cosa</b> + verbo?»</li>
<li>La risposta è il soggetto: sottolinealo in <b>blu</b>.</li>
<li>Controlla: se il soggetto è plurale, anche il verbo deve esserlo.</li>
</ol>
<p>Esempio: «Nel prato corrono due cavalli.» Verbo: corrono. Chi corrono? <b>Due cavalli</b> ✅</p>`
        },
        {
          label: "🌍 Altre lingue",
          html: `<p>Tutte le lingue del mondo hanno soggetto e predicato, ma li mettono in ordini diversi:</p>
<table>
<tr><th>Lingua</th><th>Frase</th><th>Ordine</th></tr>
<tr><td>🇮🇹 Italiano</td><td>Il gatto mangia il pesce</td><td>Soggetto – Verbo – Oggetto</td></tr>
<tr><td>🇬🇧 Inglese</td><td>The cat eats the fish</td><td>Soggetto – Verbo – Oggetto</td></tr>
<tr><td>🇯🇵 Giapponese</td><td>Neko wa sakana o taberu (gatto pesce mangia)</td><td>Soggetto – Oggetto – Verbo</td></tr>
<tr><td>🏛️ Latino</td><td>Feles piscem edit (gatto pesce mangia)</td><td>di solito con il verbo alla fine</td></tr>
</table>
<p>In inglese il soggetto non si può mai togliere: «I run» (io corro), mai solo «run».</p>`
        },
        {
          label: "🔗 Componi le frasi",
          html: `<p>Abbina a ogni soggetto il predicato che ha più senso.</p>`,
          widget: "match",
          options: { pairs: [["Il pesce", "nuota"], ["Le api", "ronzano"], ["Il gallo", "canta"], ["La campana", "suona"], ["I fiori", "sbocciano"], ["Il vulcano", "erutta"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della frase minima: tocca un nodo e scopri il perché",
      nodes: [
        { id: "frase", label: "Frase", x: 50, y: 6, color: "#2563eb", html: "Gruppo di parole con senso compiuto e almeno un verbo.", why: "La parola viene dal greco <i>phrásis</i>, «modo di dire». Per i grammatici una frase è un'unità di comunicazione: un'informazione completa." },
        { id: "minima", label: "Frase minima", x: 50, y: 28, color: "#16a34a", html: "La frase più corta possibile: soggetto + predicato.", why: "È il «nucleo» della frase: tutto il resto ruota intorno a lei. L'idea che ogni frase abbia un nucleo con il verbo al centro fu sviluppata dal linguista francese Lucien Tesnière (1959), che paragonava il verbo a un atomo che «attira» le altre parole." },
        { id: "soggetto", label: "Soggetto", x: 20, y: 50, color: "#3b82f6", html: "Chi o che cosa compie l'azione, o di chi si parla.", why: "Dal latino <i>subiectum</i>, «ciò che sta sotto»: è la base di cui si dice qualcosa. Già il filosofo greco Aristotele (IV secolo a.C.) distingueva «ciò di cui si parla» da «ciò che se ne dice»." },
        { id: "predicato", label: "Predicato", x: 80, y: 50, color: "#ef4444", html: "Che cosa fa o com'è il soggetto: è il verbo.", why: "Dal latino <i>praedicatum</i>, «ciò che viene detto» del soggetto. Senza predicato non c'è informazione: per questo è la parte indispensabile." },
        { id: "sottinteso", label: "Soggetto sottinteso", x: 12, y: 75, color: "#60a5fa", html: "Non è scritto ma si capisce: «Corro» (io).", why: "L'italiano lo permette perché le desinenze del verbo cambiano per ogni persona e quindi dicono già chi agisce. L'inglese e il francese, che hanno verbi meno variabili, il soggetto devono scriverlo sempre." },
        { id: "accordo", label: "Accordo", x: 40, y: 75, color: "#a855f7", html: "Soggetto e verbo concordano nel numero (e nella persona).", why: "L'accordo è come una «cucitura» che ci fa capire quali parole vanno insieme, anche quando l'ordine cambia: «Corrono i cavalli» → corrono è plurale, quindi il soggetto è «i cavalli»." },
        { id: "verbale", label: "Predicato verbale", x: 68, y: 75, color: "#f97316", html: "Un verbo che esprime un'azione: canta, ha corso.", why: "Si chiama così perché il significato sta tutto nel verbo." },
        { id: "nominale", label: "Predicato nominale", x: 92, y: 75, color: "#ec4899", html: "Essere + nome o aggettivo: «è felice», «è un medico».", why: "Il significato sta nel nome o aggettivo (detto «nome del predicato»); il verbo essere fa solo da legame, la <b>copula</b>, dal latino <i>copula</i> = legame, catena." },
        { id: "espansioni", label: "Espansioni", x: 50, y: 94, color: "#eab308", html: "Parole che aggiungono informazioni: dove, quando, come, che cosa.", why: "Servono a rendere la frase più precisa. Più avanti scoprirai che si chiamano <b>complementi</b>, dal latino <i>complere</i>, «riempire, completare»." }
      ],
      edges: [
        ["frase", "minima", "il suo nucleo è la"],
        ["minima", "soggetto", "contiene il"],
        ["minima", "predicato", "contiene il"],
        ["soggetto", "sottinteso", "può essere"],
        ["soggetto", "accordo", "fa l'"],
        ["predicato", "accordo", "fa l'"],
        ["predicato", "verbale", "può essere"],
        ["predicato", "nominale", "può essere"],
        ["minima", "espansioni", "si arricchisce con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: frase minima ed espansioni",
      questions: [
        { type: "mc", q: "Qual è la frase minima di «Domani i miei cugini partiranno per il mare»?", options: ["I miei cugini partiranno per il mare", "I cugini partiranno", "Domani partiranno"], answer: 1, explain: "Soggetto «i cugini» + predicato «partiranno»: il resto sono espansioni." },
        { type: "mc", q: "In «La torta è buonissima» il predicato è…", options: ["verbale", "nominale"], answer: 1, explain: "Essere + aggettivo: predicato nominale." },
        { type: "tf", q: "Nella frase «Nevica» non c'è il soggetto.", answer: true, explain: "«Nevicare» è un verbo impersonale: non ha soggetto." }
      ]
    }
  ],
  glossary: [
    { t: "Frase", d: "Gruppo di parole con senso compiuto che contiene un verbo." },
    { t: "Frase minima (nucleare)", d: "La frase più corta possibile: soggetto + predicato." },
    { t: "Soggetto", d: "Chi o che cosa compie l'azione o di cui si parla. Domanda: chi? che cosa?" },
    { t: "Predicato", d: "Il verbo che dice che cosa fa o com'è il soggetto." },
    { t: "Soggetto sottinteso", d: "Soggetto non scritto ma che si capisce dal verbo (Corro → io)." },
    { t: "Predicato verbale", d: "Predicato formato da un verbo che esprime un'azione." },
    { t: "Predicato nominale", d: "Verbo essere + nome o aggettivo (è bello, è un dottore)." },
    { t: "Copula", d: "Il verbo essere quando lega il soggetto al nome o all'aggettivo." },
    { t: "Verbo impersonale", d: "Verbo senza soggetto, come piove, nevica, tuona." },
    { t: "Espansione", d: "Parola o gruppo di parole che arricchisce la frase minima." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Nella frase «Il treno parte» qual è il soggetto?", options: ["Il treno", "parte"], answer: 0, explain: "Chi parte? Il treno." },
      { type: "mc", q: "Nella frase «Giocano i bambini nel cortile» qual è il soggetto?", options: ["nel cortile", "i bambini", "giocano"], answer: 1, explain: "Chi gioca? I bambini. Il soggetto può stare anche dopo il verbo." },
      { type: "tf", q: "Ogni frase deve avere un verbo.", answer: true, explain: "Il verbo (predicato) è indispensabile: senza verbo non c'è frase." },
      { type: "text", q: "«Avete vinto!» Qual è il soggetto sottinteso?", answer: ["voi"], explain: "La desinenza -ete indica «voi»." },
      { type: "mc", q: "Quale di queste è una frase minima?", options: ["La mamma di Elena", "La mamma lavora.", "Al mattino presto"], answer: 1, explain: "Ha soggetto (la mamma) e predicato (lavora)." },
      { type: "mc", q: "In «Mio nonno è un pescatore» il predicato è…", options: ["verbale", "nominale"], answer: 1, explain: "È + nome (un pescatore): predicato nominale." },
      { type: "mc", q: "Qual è il predicato in «Le stelle brillano nel cielo»?", options: ["Le stelle", "brillano", "nel cielo"], answer: 1, explain: "Che cosa fanno le stelle? Brillano." },
      { type: "tf", q: "In «Corrono i cavalli», il verbo è plurale perché il soggetto è plurale.", answer: true, explain: "Soggetto e verbo si accordano: i cavalli → corrono." },
      { type: "order", q: "Metti in ordine le parole per formare una frase minima.", items: ["Il", "gatto", "miagola"], explain: "Soggetto (il gatto) + predicato (miagola)." },
      { type: "mc", q: "Quale frase è senza soggetto?", options: ["Tuona.", "Canto.", "Luca dorme."], answer: 0, explain: "«Tuonare» è impersonale; in «Canto» il soggetto c'è ma è sottinteso (io)." },
      { type: "text", q: "Scrivi il predicato della frase «Ieri Sara ha mangiato una mela».", answer: ["ha mangiato"], explain: "Il predicato è il verbo intero: ha mangiato." },
      { type: "mc", q: "Come si chiamano le parole che arricchiscono la frase minima?", options: ["espansioni", "desinenze", "radici"], answer: 0, explain: "Le espansioni aggiungono informazioni (dove, quando, come…)." }
    ]
  }
});
