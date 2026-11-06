TOPIC('it', {
  id: "p4-ita-complementi",
  title: "I complementi",
  intro: "\"Giulia mangia.\" È una frase giusta, ma ci dice poco. <i>Che cosa</i> mangia? <i>Con chi? Dove? Quando?</i> Le parole che rispondono a queste domande si chiamano <b>complementi</b>: \"completano\" la frase. Impariamo il <b>complemento oggetto</b> e i principali <b>complementi indiretti</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "La frase minima e le espansioni",
      html: `<p>Ogni frase ha un \"cuore\", la <b>frase minima</b>, formata da:</p>
<ul>
<li>il <b>soggetto</b> (chi compie l'azione o di chi si parla): <i><b>Giulia</b> mangia.</i></li>
<li>il <b>predicato</b> (che cosa si dice del soggetto): <i>Giulia <b>mangia</b>.</i></li>
</ul>
<p>Tutto quello che aggiungiamo per arricchire la frase sono le <b>espansioni</b>. Molte espansioni si chiamano <b>complementi</b>, dal latino <i>complere</i>, \"riempire, completare\".</p>
<p><i>Giulia mangia <b>una mela</b> <b>con Marco</b> <b>in giardino</b> <b>alle quattro</b>.</i></p>
<p>Per riconoscere un complemento si fa una <b>domanda</b> al predicato. Ogni complemento risponde a una domanda diversa!</p>`
    },
    {
      type: "svg",
      title: "Il trenino della frase",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<line x1="10" y1="225" x2="590" y2="225" stroke="#78350f" stroke-width="5"/>
<rect x="20" y="120" width="105" height="85" rx="10" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>
<rect x="40" y="90" width="30" height="30" fill="#7f1d1d"/>
<text x="72" y="160" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">Giulia</text>
<text x="72" y="185" font-size="13" text-anchor="middle" fill="#ffffff">soggetto</text>
<rect x="135" y="120" width="105" height="85" rx="10" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
<text x="187" y="160" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">mangia</text>
<text x="187" y="185" font-size="13" text-anchor="middle" fill="#ffffff">predicato</text>
<rect x="250" y="120" width="105" height="85" rx="10" fill="#f59e0b" stroke="#92400e" stroke-width="3"/>
<text x="302" y="160" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">una mela</text>
<text x="302" y="185" font-size="13" text-anchor="middle" fill="#1f2937">c. oggetto</text>
<rect x="365" y="120" width="105" height="85" rx="10" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="417" y="160" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">con Marco</text>
<text x="417" y="185" font-size="13" text-anchor="middle" fill="#1f2937">c. compagnia</text>
<rect x="480" y="120" width="105" height="85" rx="10" fill="#a855f7" stroke="#581c87" stroke-width="3"/>
<text x="532" y="160" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">in giardino</text>
<text x="532" y="185" font-size="13" text-anchor="middle" fill="#ffffff">c. luogo</text>
<g fill="#1f2937"><circle cx="50" cy="215" r="12"/><circle cx="100" cy="215" r="12"/><circle cx="165" cy="215" r="12"/><circle cx="215" cy="215" r="12"/><circle cx="280" cy="215" r="12"/><circle cx="330" cy="215" r="12"/><circle cx="395" cy="215" r="12"/><circle cx="445" cy="215" r="12"/><circle cx="510" cy="215" r="12"/><circle cx="560" cy="215" r="12"/></g>
<text x="130" y="50" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">FRASE MINIMA</text>
<path d="M25 65 L235 65" stroke="#b91c1c" stroke-width="4"/>
<text x="418" y="50" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">COMPLEMENTI (espansioni)</text>
<path d="M255 65 L585 65" stroke="#15803d" stroke-width="4"/>
<text x="300" y="270" font-size="17" text-anchor="middle" fill="#1f2937">La locomotiva e il primo vagone bastano a fare un treno; gli altri vagoni lo arricchiscono.</text>
</svg>`,
      caption: "Soggetto e predicato sono la frase minima; i complementi sono vagoni aggiunti."
    },
    {
      type: "text",
      title: "Passo 1 – Il complemento oggetto (diretto)",
      html: `<p>Il <b>complemento oggetto</b> indica la persona, l'animale o la cosa su cui <b>ricade direttamente l'azione</b> del soggetto.</p>
<p>Risponde alla domanda <b>chi? che cosa?</b> fatta dopo il verbo.</p>
<ul>
<li><i>Il cane rosicchia <b>un osso</b>.</i> → rosicchia che cosa? → un osso.</li>
<li><i>La nonna abbraccia <b>i nipoti</b>.</i> → abbraccia chi? → i nipoti.</li>
</ul>
<p>Si chiama <b>diretto</b> perché si collega al verbo <b>senza preposizione</b>. Lo possono avere solo i <b>verbi transitivi</b> (mangiare, leggere, guardare…), cioè quelli in cui l'azione \"transita\", passa, dal soggetto all'oggetto. I verbi intransitivi (dormire, andare, correre) non hanno il complemento oggetto.</p>
<p>⚠️ Non confonderlo con il soggetto: <i><b>Il gatto</b> insegue <u>il topo</u></i>. Chi compie l'azione? Il gatto (soggetto). Chi la subisce? Il topo (oggetto).</p>`
    },
    {
      type: "text",
      title: "Passo 2 – I complementi indiretti",
      html: `<p>I <b>complementi indiretti</b> si collegano al verbo (o a un nome) <b>con una preposizione</b> (di, a, da, in, con, su, per, tra, fra, anche articolate: del, al, nella…).</p>
<table>
<tr><th>Complemento</th><th>Domanda</th><th>Esempio</th></tr>
<tr><td><b>di specificazione</b></td><td>di chi? di che cosa?</td><td>il libro <b>di Anna</b></td></tr>
<tr><td><b>di termine</b></td><td>a chi? a che cosa?</td><td>scrivo <b>alla nonna</b></td></tr>
<tr><td><b>di luogo</b></td><td>dove? da dove? verso dove? per dove?</td><td>vado <b>a scuola</b>, vengo <b>da Roma</b></td></tr>
<tr><td><b>di tempo</b></td><td>quando? per quanto tempo?</td><td>parto <b>alle otto</b>, dormo <b>per dieci ore</b></td></tr>
<tr><td><b>di compagnia / unione</b></td><td>con chi? con che cosa?</td><td>gioco <b>con Luca</b>, pane <b>con il burro</b></td></tr>
<tr><td><b>di mezzo</b></td><td>con che cosa? per mezzo di chi?</td><td>vado <b>in bici</b>, scrivo <b>con la penna</b></td></tr>
<tr><td><b>di modo</b></td><td>come? in che modo?</td><td>parla <b>a bassa voce</b>, corre <b>con allegria</b></td></tr>
<tr><td><b>di causa</b></td><td>perché? per quale causa?</td><td>trema <b>dal freddo</b>, piange <b>per la paura</b></td></tr>
<tr><td><b>di fine</b></td><td>per quale scopo?</td><td>esco <b>per una passeggiata</b></td></tr>
<tr><td><b>d'agente</b></td><td>da chi? (con verbo passivo)</td><td>il topo è inseguito <b>dal gatto</b></td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: oggetto o indiretto?",
      questions: [
        { type: "mc", q: "\"Paolo legge <b>un fumetto</b>.\" Che complemento è?", options: ["Oggetto", "Di specificazione", "Di termine"], answer: 0, explain: "Legge che cosa? Un fumetto: complemento oggetto, senza preposizione." },
        { type: "mc", q: "\"Regalo un fiore <b>alla mamma</b>.\" Che complemento è?", options: ["Di luogo", "Di termine", "Oggetto"], answer: 1, explain: "A chi? Alla mamma: complemento di termine." },
        { type: "tf", q: "I complementi indiretti sono introdotti da una preposizione.", answer: true, explain: "Di, a, da, in, con, su, per, tra, fra (anche articolate)." }
      ]
    },
    {
      type: "text",
      title: "Passo 3 – Il complemento di luogo (quattro domande)",
      html: `<p>Il complemento di luogo è speciale: risponde a <b>quattro domande diverse</b>.</p>
<ul>
<li><b>Stato in luogo</b> – <i>dove?</i> (si è fermi): <i>Sono <b>in classe</b>.</i></li>
<li><b>Moto a luogo</b> – <i>verso dove?</i> (si va): <i>Vado <b>al mare</b>.</i></li>
<li><b>Moto da luogo</b> – <i>da dove?</i> (si parte): <i>Esco <b>dalla palestra</b>.</i></li>
<li><b>Moto per luogo</b> – <i>attraverso dove?</i> (si passa): <i>Passo <b>per il bosco</b>.</i></li>
</ul>
<p>⚠️ La preposizione <b>da</b> può ingannare: <i>Vado <b>dal</b> dentista</i> è <b>moto a luogo</b> (vado verso)! Per questo serve <b>sempre la domanda</b>, non solo la preposizione.</p>`
    },
    {
      type: "svg",
      title: "I quattro complementi di luogo",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#eff6ff"/>
<rect x="230" y="70" width="140" height="120" fill="#fde68a" stroke="#92400e" stroke-width="4"/>
<polygon points="220,70 300,20 380,70" fill="#dc2626" stroke="#7f1d1d" stroke-width="4"/>
<text x="300" y="215" font-size="18" text-anchor="middle" fill="#92400e" font-weight="bold">casa</text>
<circle cx="300" cy="140" r="16" fill="#2563eb"/>
<text x="300" y="112" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">STATO</text>
<circle cx="70" cy="140" r="16" fill="#16a34a"/>
<path d="M95 140 L215 140" stroke="#16a34a" stroke-width="5" marker-end="url(#m1)"/>
<text x="150" y="125" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">MOTO A</text>
<circle cx="530" cy="140" r="16" fill="#ea580c"/>
<path d="M385 140 L505 140" stroke="#ea580c" stroke-width="5" marker-end="url(#m2)"/>
<text x="450" y="125" font-size="16" text-anchor="middle" fill="#c2410c" font-weight="bold">MOTO DA</text>
<path d="M100 255 Q300 225 500 255" stroke="#7c3aed" stroke-width="5" fill="none" stroke-dasharray="10 6" marker-end="url(#m3)"/>
<text x="300" y="268" font-size="16" text-anchor="middle" fill="#6d28d9" font-weight="bold">MOTO PER (attraverso)</text>
<defs>
<marker id="m1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#16a34a"/></marker>
<marker id="m2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#ea580c"/></marker>
<marker id="m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#7c3aed"/></marker>
</defs>
</svg>`,
      caption: "Stare in casa, andare verso casa, uscire da casa, passare attraverso un luogo."
    },
    {
      type: "example",
      title: "Esempio pratico: analisi logica passo passo",
      html: `<p>Frase: <i>\"Domenica Martina porta una torta alla nonna in bicicletta.\"</i></p>
<ol>
<li>Trova il <b>predicato</b> (il verbo): <b>porta</b>.</li>
<li>Chi porta? → <b>Martina</b> = soggetto.</li>
<li>Porta che cosa? → <b>una torta</b> = complemento oggetto.</li>
<li>A chi? → <b>alla nonna</b> = complemento di termine.</li>
<li>Con quale mezzo? → <b>in bicicletta</b> = complemento di mezzo.</li>
<li>Quando? → <b>domenica</b> = complemento di tempo (senza preposizione!).</li>
</ol>
<p>Hai visto? Anche un complemento indiretto, a volte, può non avere la preposizione: <i>domenica, ieri sera</i>. Ancora una volta è la <b>domanda</b> che conta.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: arricchire una frase",
      html: `<p>Parti dalla frase minima e aggiungi un complemento alla volta:</p>
<ul>
<li><i>Il pescatore pesca.</i></li>
<li>+ oggetto → <i>Il pescatore pesca <b>un pesce</b>.</i></li>
<li>+ specificazione → <i>Il pescatore <b>del paese</b> pesca un pesce.</i></li>
<li>+ luogo → <i>… pesca un pesce <b>nel lago</b>.</i></li>
<li>+ mezzo → <i>… <b>con la canna</b>.</i></li>
<li>+ tempo → <i>… <b>all'alba</b>.</i></li>
</ul>
<p>Risultato: <i>All'alba il pescatore del paese pesca un pesce nel lago con la canna.</i> Una frase precisa, come una fotografia!</p>`
    },
    {
      type: "widget",
      title: "Gioco: che complemento è?",
      widget: "classify",
      options: {
        groups: ["Oggetto", "Specificazione", "Termine", "Luogo", "Tempo", "Mezzo"],
        items: [
          ["Leggo <b>una storia</b>", 0], ["Guardo <b>le stelle</b>", 0],
          ["La coda <b>del gatto</b>", 1], ["Il profumo <b>dei fiori</b>", 1],
          ["Telefono <b>a Luca</b>", 2], ["Do l'acqua <b>alle piante</b>", 2],
          ["Abito <b>a Torino</b>", 3], ["Torno <b>dalla piscina</b>", 3],
          ["Arrivo <b>alle sette</b>", 4], ["<b>In estate</b> fa caldo", 4],
          ["Viaggio <b>in treno</b>", 5], ["Scrivo <b>con la matita</b>", 5]
        ]
      },
      caption: "Fai la domanda giusta al verbo e metti il complemento in neretto nella sua scatola."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il latino non usava le preposizioni",
      html: `<p>In <b>latino</b> molti complementi si facevano <b>cambiando la fine della parola</b>, senza preposizioni: erano i <b>casi</b>. <i>Rosa</i> (soggetto), <i>rosam</i> (oggetto), <i>rosae</i> (specificazione o termine: \"della rosa\", \"alla rosa\"), <i>rosā</i> (mezzo: \"con la rosa\").</p>
<p>L'italiano ha perso quasi tutti i casi e li ha sostituiti con le <b>preposizioni</b> e con l'<b>ordine delle parole</b>. Per questo da noi conta molto chi viene prima del verbo! Il tedesco, il russo e il rumeno invece hanno ancora i casi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Un nome per l'analisi logica",
      html: `<p>L'esercizio di trovare soggetto, predicato e complementi si chiama in Italia <b>analisi logica</b>. Nelle scuole italiane si fa da più di cent'anni! In altri Paesi, come in Inghilterra, si fanno esercizi simili chiamati <i>sentence diagramming</i>: le frasi diventano disegni con linee e rami, come un albero.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Frase minima</b> = soggetto + predicato. Tutto il resto sono <b>espansioni</b>.</li>
<li><b>Complemento oggetto</b>: chi? che cosa? – <b>senza preposizione</b>, solo con verbi transitivi.</li>
<li><b>Complementi indiretti</b>: introdotti di solito da una <b>preposizione</b>.</li>
<li>Specificazione (di chi?), termine (a chi?), luogo (dove?), tempo (quando?), compagnia (con chi?), mezzo (con che cosa?), modo (come?), causa (perché?), fine (per quale scopo?).</li>
<li>Per riconoscerli fai sempre la <b>domanda</b> al verbo: la preposizione da sola può ingannare.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i complementi",
      intro: "Se la tabella ti confonde, prova queste strade: il giornalista curioso, i colori, lo schema ad albero e le carte.",
      tabs: [
        {
          label: "🎤 Il giornalista curioso",
          html: `<p>Immagina di essere un <b>giornalista</b> che intervista il verbo. Ogni domanda che fai \"pesca\" un complemento:</p>
<p>Frase: <i>Ieri i pompieri hanno salvato un gattino sul tetto con una scala.</i></p>
<ul>
<li>🎤 Chi ha salvato? → <b>i pompieri</b> (soggetto)</li>
<li>🎤 Che cosa hanno salvato? → <b>un gattino</b> (oggetto)</li>
<li>🎤 Dove? → <b>sul tetto</b> (stato in luogo)</li>
<li>🎤 Con che cosa? → <b>con una scala</b> (mezzo)</li>
<li>🎤 Quando? → <b>ieri</b> (tempo)</li>
</ul>
<p>I giornalisti inglesi hanno la regola delle <b>5 W</b>: <i>Who, What, Where, When, Why</i> (chi, che cosa, dove, quando, perché). Sono proprio le domande dei complementi!</p>`
        },
        {
          label: "🎨 Sottolinea con i colori",
          html: `<p>Usa un <b>colore diverso</b> per ogni ruolo. Così l'occhio vede subito la struttura della frase:</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<text x="20" y="60" font-size="26" fill="#1f2937">Luca</text>
<line x1="20" y1="70" x2="75" y2="70" stroke="#ef4444" stroke-width="5"/>
<text x="85" y="60" font-size="26" fill="#1f2937">regala</text>
<line x1="85" y1="70" x2="165" y2="70" stroke="#2563eb" stroke-width="5"/>
<line x1="85" y1="77" x2="165" y2="77" stroke="#2563eb" stroke-width="5"/>
<text x="175" y="60" font-size="26" fill="#1f2937">un libro</text>
<line x1="175" y1="70" x2="275" y2="70" stroke="#f59e0b" stroke-width="5" stroke-dasharray="10 5"/>
<text x="285" y="60" font-size="26" fill="#1f2937">alla sorella</text>
<line x1="285" y1="70" x2="425" y2="70" stroke="#16a34a" stroke-width="5"/>
<text x="435" y="60" font-size="26" fill="#1f2937">a Natale.</text>
<line x1="435" y1="70" x2="545" y2="70" stroke="#a855f7" stroke-width="5"/>
<rect x="20" y="110" width="20" height="20" fill="#ef4444"/><text x="48" y="127" font-size="17" fill="#1f2937">soggetto</text>
<rect x="160" y="110" width="20" height="20" fill="#2563eb"/><text x="188" y="127" font-size="17" fill="#1f2937">predicato</text>
<rect x="300" y="110" width="20" height="20" fill="#f59e0b"/><text x="328" y="127" font-size="17" fill="#1f2937">c. oggetto</text>
<rect x="20" y="150" width="20" height="20" fill="#16a34a"/><text x="48" y="167" font-size="17" fill="#1f2937">c. di termine</text>
<rect x="200" y="150" width="20" height="20" fill="#a855f7"/><text x="228" y="167" font-size="17" fill="#1f2937">c. di tempo</text>
</svg>`
        },
        {
          label: "🌳 Lo schema ad albero",
          html: `<p>Molti Paesi disegnano la frase come un <b>albero</b>: il <b>predicato</b> è il tronco, da cui partono i rami. Il soggetto e i complementi sono appesi al verbo, ognuno col suo cartellino-domanda.</p>
<p>Questo metodo, chiamato anche <b>grammatica valenziale</b>, dice che ogni verbo ha bisogno di un certo numero di \"pezzi\" per avere senso: <i>dormire</i> ne vuole 1 (chi dorme), <i>mangiare</i> 2 (chi e che cosa), <i>regalare</i> 3 (chi, che cosa, a chi). Gli altri complementi sono rami facoltativi. Lo propose il linguista francese <b>Lucien Tesnière</b> (il suo libro uscì nel 1959) e oggi lo usano molti libri di scuola italiani.</p>`,
          svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="250" fill="#f0fdf4"/>
<ellipse cx="300" cy="60" rx="80" ry="32" fill="#2563eb"/>
<text x="300" y="68" font-size="24" text-anchor="middle" fill="#ffffff" font-weight="bold">regala</text>
<g stroke="#78350f" stroke-width="5"><line x1="250" y1="85" x2="90" y2="170"/><line x1="290" y1="92" x2="240" y2="170"/><line x1="315" y1="92" x2="380" y2="170"/><line x1="350" y1="85" x2="520" y2="170"/></g>
<rect x="25" y="170" width="130" height="50" rx="10" fill="#fecaca" stroke="#ef4444" stroke-width="3"/><text x="90" y="202" font-size="18" text-anchor="middle">Luca (chi?)</text>
<rect x="170" y="170" width="140" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/><text x="240" y="202" font-size="17" text-anchor="middle">un libro (cosa?)</text>
<rect x="320" y="170" width="130" height="50" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/><text x="385" y="202" font-size="16" text-anchor="middle">alla sorella (a chi?)</text>
<rect x="460" y="170" width="125" height="50" rx="10" fill="#f3e8ff" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/><text x="522" y="202" font-size="16" text-anchor="middle">a Natale</text>
<text x="522" y="240" font-size="13" text-anchor="middle" fill="#6b21a8">ramo facoltativo</text>
</svg>`
        },
        {
          label: "🃏 Abbina domanda e complemento",
          html: `<p>Ogni complemento ha la sua domanda. Abbinale!</p>`,
          widget: "match",
          options: {
            pairs: [
              ["chi? che cosa?", "complemento oggetto"],
              ["di chi? di che cosa?", "specificazione"],
              ["a chi? a che cosa?", "termine"],
              ["con chi?", "compagnia"],
              ["con che mezzo?", "mezzo"],
              ["perché? per quale causa?", "causa"],
              ["come? in che modo?", "modo"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei complementi",
      nodes: [
        { id: "frase", label: "Frase", x: 50, y: 6, color: "#2563eb", html: "Insieme di parole con senso compiuto, organizzato intorno a un verbo.", why: "Senza verbo (predicato) non c'è frase: è il verbo a \"chiamare\" gli altri elementi. È l'idea della grammatica valenziale di Lucien Tesnière (1959)." },
        { id: "minima", label: "Frase minima", x: 22, y: 28, color: "#ef4444", html: "Soggetto + predicato: <i>Il sole splende.</i>", why: "È il minimo necessario per dire qualcosa di qualcuno. Già Aristotele (IV secolo a.C.) distingueva ciò di cui si parla (il soggetto) da ciò che se ne dice (il predicato)." },
        { id: "espansioni", label: "Espansioni / complementi", x: 75, y: 28, color: "#16a34a", html: "Parole che arricchiscono la frase minima con informazioni in più.", why: "Il nome viene dal latino <i>complementum</i>, \"ciò che completa\". La lista dei complementi che usiamo a scuola nasce dalle grammatiche latine, che classificavano i significati dei casi." },
        { id: "oggetto", label: "Complemento oggetto", x: 50, y: 52, color: "#f59e0b", html: "Riceve direttamente l'azione; risponde a chi? che cosa?; senza preposizione.", why: "È \"diretto\" perché si lega al verbo senza ponti (preposizioni). In latino era il caso <b>accusativo</b>. C'è solo con i verbi transitivi, dove l'azione \"passa\" (in latino <i>transire</i>) dal soggetto all'oggetto." },
        { id: "indiretti", label: "Complementi indiretti", x: 82, y: 52, color: "#a855f7", html: "Legati al verbo o al nome da una preposizione.", why: "Quando l'italiano ha perso i casi latini (dal V-VI secolo in poi), le preposizioni hanno preso il loro posto: <i>rosae</i> → \"della rosa\", \"alla rosa\"." },
        { id: "luogo", label: "Luogo", x: 64, y: 78, color: "#0ea5e9", html: "Stato in luogo, moto a luogo, moto da luogo, moto per luogo.", why: "Il nostro corpo si muove nello spazio in quattro modi: si sta fermi, si va verso, si parte da, si passa attraverso. La lingua li distingue tutti e quattro." },
        { id: "spec-term", label: "Specificazione e termine", x: 92, y: 78, color: "#14b8a6", html: "Di chi? (il libro di Anna) – A chi? (scrivo ad Anna).", why: "Corrispondono ai casi latini <b>genitivo</b> (\"di\") e <b>dativo</b> (\"a\", da <i>dare</i>: a chi si dà qualcosa)." },
        { id: "domanda", label: "La domanda", x: 22, y: 78, color: "#64748b", html: "Lo strumento per riconoscere ogni complemento.", why: "La stessa preposizione può introdurre complementi diversi (<i>da Roma</i> = moto da luogo; <i>dal dentista</i> = moto a luogo). Solo il <b>significato</b>, scoperto con la domanda, ci dice di che complemento si tratta." }
      ],
      edges: [
        ["frase", "minima", "nucleo"],
        ["frase", "espansioni", "si arricchisce con"],
        ["espansioni", "oggetto", "diretto"],
        ["espansioni", "indiretti", "con preposizione"],
        ["indiretti", "luogo", ""],
        ["indiretti", "spec-term", ""],
        ["minima", "domanda", "si analizza con"],
        ["domanda", "oggetto", "chi? che cosa?"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: luogo, tempo, mezzo",
      questions: [
        { type: "mc", q: "\"Esco <b>dal cinema</b>.\" Che complemento è?", options: ["Moto a luogo", "Moto da luogo", "Stato in luogo"], answer: 1, explain: "Da dove esco? Dal cinema: moto da luogo." },
        { type: "mc", q: "\"Vado <b>dal parrucchiere</b>.\" Che complemento è?", options: ["Moto da luogo", "Moto a luogo", "D'agente"], answer: 1, explain: "Verso dove vado? Dal parrucchiere: moto a luogo, anche se c'è \"da\"." },
        { type: "mc", q: "\"Tremavo <b>dal freddo</b>.\" Che complemento è?", options: ["Causa", "Luogo", "Modo"], answer: 0, explain: "Perché tremavo? Per il freddo: complemento di causa." }
      ]
    }
  ],
  glossary: [
    { t: "Frase minima", d: "La frase formata solo da soggetto e predicato." },
    { t: "Espansione", d: "Ogni parola o gruppo di parole che arricchisce la frase minima." },
    { t: "Complemento", d: "Espansione che completa il significato del predicato o di un altro elemento." },
    { t: "Complemento oggetto", d: "Indica su chi o che cosa ricade direttamente l'azione; senza preposizione." },
    { t: "Verbo transitivo", d: "Verbo che può avere il complemento oggetto (es. leggere, mangiare)." },
    { t: "Complemento indiretto", d: "Complemento introdotto da una preposizione." },
    { t: "Preposizione", d: "Parola invariabile che collega: di, a, da, in, con, su, per, tra, fra." },
    { t: "Analisi logica", d: "L'esercizio di riconoscere soggetto, predicato e complementi in una frase." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "La frase minima è formata da…", options: ["soggetto e complemento oggetto", "soggetto e predicato", "predicato e complementi"], answer: 1, explain: "Soggetto + predicato." },
      { type: "mc", q: "\"Il bambino disegna <b>un drago</b>.\" Il complemento in neretto è…", options: ["oggetto", "di specificazione", "di mezzo"], answer: 0, explain: "Disegna che cosa? Un drago." },
      { type: "mc", q: "\"La bici <b>di Sofia</b> è rossa.\" Complemento di…", options: ["termine", "specificazione", "compagnia"], answer: 1, explain: "Di chi? Di Sofia: specificazione." },
      { type: "mc", q: "\"Passeggiamo <b>per il centro</b>.\" Complemento di…", options: ["moto per luogo", "fine", "causa"], answer: 0, explain: "Attraverso dove? Per il centro: moto per luogo." },
      { type: "mc", q: "\"Gioco a carte <b>con il nonno</b>.\" Complemento di…", options: ["mezzo", "compagnia", "modo"], answer: 1, explain: "Con chi? Con il nonno: compagnia." },
      { type: "tf", q: "Il complemento oggetto è introdotto da una preposizione.", answer: false, explain: "È diretto: si lega al verbo senza preposizione." },
      { type: "tf", q: "Il verbo \"dormire\" può avere il complemento oggetto.", answer: false, explain: "Dormire è intransitivo: non si dorme \"qualcosa\"." },
      { type: "text", q: "A quale domanda risponde il complemento di termine? (scrivi \"a chi\")", answer: ["a chi", "a chi?", "a chi a che cosa", "a chi? a che cosa?"], explain: "A chi? A che cosa?" },
      { type: "text", q: "\"Domani partiamo <b>in aereo</b>.\" Che complemento è \"in aereo\"? (una parola)", answer: ["mezzo", "di mezzo", "complemento di mezzo"], explain: "Con quale mezzo? In aereo: complemento di mezzo." },
      { type: "order", q: "Metti in ordine le domande per fare l'analisi logica di una frase.", items: ["Qual è il verbo? (predicato)", "Chi compie l'azione? (soggetto)", "Che cosa? (oggetto)", "Le altre domande (complementi indiretti)"], explain: "Si parte dal predicato, poi il soggetto, poi gli altri elementi." },
      { type: "mc", q: "\"<b>D'inverno</b> nevica in montagna.\" \"D'inverno\" è complemento di…", options: ["luogo", "tempo", "specificazione"], answer: 1, explain: "Quando? D'inverno: tempo." },
      { type: "mc", q: "\"Scrivo una lettera <b>a Babbo Natale</b>.\" Complemento di…", options: ["termine", "moto a luogo", "oggetto"], answer: 0, explain: "A chi scrivo? A Babbo Natale: termine." }
    ]
  }
});
