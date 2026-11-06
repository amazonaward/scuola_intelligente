TOPIC('it', {
  id: "p3-ita-coniugazioni",
  title: "Le tre coniugazioni",
  intro: "Cantare, leggere, dormire: tutti i verbi italiani finiscono in <b>-are</b>, <b>-ere</b> o <b>-ire</b>. Sono le <b>tre coniugazioni</b>, tre grandi «famiglie» di verbi 👨‍👩‍👧. Impariamo a riconoscerle e a coniugare i verbi nel <b>passato</b>, nel <b>presente</b> e nel <b>futuro</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "L'infinito: il nome del verbo",
      html: `<p>Quando cerchi un verbo nel dizionario lo trovi all'<b>infinito</b>: <i>cantare, leggere, dormire</i>. L'infinito è come il «nome di battesimo» del verbo: non dice <b>chi</b> fa l'azione né <b>quando</b>.</p>
<p>Ogni verbo all'infinito ha due parti:</p>
<ul>
<li>la <b>radice</b>, che porta il significato e di solito non cambia: <b>cant</b>-are, <b>legg</b>-ere, <b>dorm</b>-ire;</li>
<li>la <b>desinenza</b>, la parte finale che cambia: cant-<b>are</b>, cant-<b>o</b>, cant-<b>erò</b>.</li>
</ul>
<p>Proprio guardando la desinenza dell'infinito capiamo a quale <b>coniugazione</b> appartiene il verbo.</p>`
    },
    {
      type: "svg",
      title: "Le tre famiglie dei verbi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="30" width="175" height="240" rx="18" fill="#fee2e2" stroke="#dc2626" stroke-width="4"/>
<rect x="212" y="30" width="175" height="240" rx="18" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
<rect x="405" y="30" width="175" height="240" rx="18" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>
<text x="107" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#991b1b">1ª coniugaz.</text>
<text x="300" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#166534">2ª coniugaz.</text>
<text x="492" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#1e40af">3ª coniugaz.</text>
<text x="107" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#dc2626">-ARE</text>
<text x="300" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#16a34a">-ERE</text>
<text x="492" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#2563eb">-IRE</text>
<g font-size="20" text-anchor="middle" fill="#1f2937">
<text x="107" y="160">cant-are 🎤</text><text x="107" y="192">gioc-are ⚽</text><text x="107" y="224">salt-are 🐸</text>
<text x="300" y="160">legg-ere 📖</text><text x="300" y="192">cred-ere 🤔</text><text x="300" y="224">corr-ere 🏃</text>
<text x="492" y="160">dorm-ire 😴</text><text x="492" y="192">part-ire 🚂</text><text x="492" y="224">fin-ire 🏁</text>
</g>
<text x="107" y="258" font-size="15" text-anchor="middle" fill="#7f1d1d">la più numerosa</text>
<text x="300" y="258" font-size="15" text-anchor="middle" fill="#14532d">tanti irregolari</text>
<text x="492" y="258" font-size="15" text-anchor="middle" fill="#1e3a8a">alcuni in -isc-</text>
</svg>`,
      caption: "Radice + desinenza: la desinenza dell'infinito ci dice la famiglia del verbo."
    },
    {
      type: "widget",
      title: "Gioco: in quale famiglia?",
      widget: "classify",
      options: {
        groups: ["-ARE (1ª)", "-ERE (2ª)", "-IRE (3ª)"],
        items: [
          ["🎨 disegnare", 0], ["🏊 nuotare", 0], ["🍝 mangiare", 0], ["👀 guardare", 0],
          ["✍️ scrivere", 1], ["👁️ vedere", 1], ["🏃 correre", 1], ["🙂 sorridere", 1],
          ["🎧 sentire", 2], ["🚪 aprire", 2], ["🧹 pulire", 2], ["🥣 servire", 2]
        ]
      },
      caption: "Guarda solo la fine dell'infinito e metti ogni verbo nella sua famiglia."
    },
    {
      type: "text",
      title: "Il presente: le desinenze cambiano con la persona",
      html: `<p>Il verbo cambia la desinenza a seconda di <b>chi</b> fa l'azione (la <b>persona</b>):</p>
<table>
<tr><th>Persona</th><th>CANT-ARE</th><th>CRED-ERE</th><th>DORM-IRE</th></tr>
<tr><td>io</td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>tu</td><td>cant<b>i</b></td><td>cred<b>i</b></td><td>dorm<b>i</b></td></tr>
<tr><td>lui/lei</td><td>cant<b>a</b></td><td>cred<b>e</b></td><td>dorm<b>e</b></td></tr>
<tr><td>noi</td><td>cant<b>iamo</b></td><td>cred<b>iamo</b></td><td>dorm<b>iamo</b></td></tr>
<tr><td>voi</td><td>cant<b>ate</b></td><td>cred<b>ete</b></td><td>dorm<b>ite</b></td></tr>
<tr><td>loro</td><td>cant<b>ano</b></td><td>cred<b>ono</b></td><td>dorm<b>ono</b></td></tr>
</table>
<p>Hai notato? Le desinenze di <b>io</b> (-o), <b>tu</b> (-i) e <b>noi</b> (-iamo) sono uguali per tutte e tre le famiglie! Nella <b>voi</b> si vede la vocale della famiglia: cant<b>a</b>te, cred<b>e</b>te, dorm<b>i</b>te.</p>
<p><b>Attenzione:</b> molti verbi in -ire aggiungono <b>-isc-</b> in alcune persone: fin<b>isc</b>o, fin<b>isc</b>i, fin<b>isc</b>e, finiamo, finite, fin<b>isc</b>ono. Così fanno anche capire, pulire, colpire, preferire.</p>`
    },
    {
      type: "text",
      title: "Passato e futuro",
      html: `<p>Il verbo cambia anche per dire <b>quando</b> avviene l'azione. Ecco tre tempi del modo indicativo, alla persona «io»:</p>
<table>
<tr><th>Tempo</th><th>CANTARE</th><th>CREDERE</th><th>DORMIRE</th></tr>
<tr><td>⬅️ <b>Passato prossimo</b> (azione finita)</td><td>ho cant<b>ato</b></td><td>ho cred<b>uto</b></td><td>ho dorm<b>ito</b></td></tr>
<tr><td>⬅️ <b>Imperfetto</b> (abitudine, descrizione)</td><td>cant<b>avo</b></td><td>cred<b>evo</b></td><td>dorm<b>ivo</b></td></tr>
<tr><td>⏺️ <b>Presente</b></td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>➡️ <b>Futuro semplice</b></td><td>cant<b>erò</b></td><td>cred<b>erò</b></td><td>dorm<b>irò</b></td></tr>
</table>
<ul>
<li>Il <b>passato prossimo</b> è un tempo <b>composto</b>: ausiliare (avere o essere) + <b>participio passato</b> in -ato, -uto, -ito. Es.: «sono partito», «ho cantato».</li>
<li>Nel <b>futuro</b> la prima coniugazione cambia la <b>a</b> in <b>e</b>: cant<b>a</b>re → cant<b>e</b>rò (non «cantarò»!).</li>
<li>Nel futuro l'accento cade sull'ultima sillaba: cante<b>rò</b>, cante<b>rà</b>: non dimenticarlo!</li>
</ul>`
    },
    {
      type: "svg",
      title: "La freccia del tempo",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<line x1="40" y1="140" x2="540" y2="140" stroke="#78350f" stroke-width="6"/>
<polygon points="540,125 575,140 540,155" fill="#78350f"/>
<circle cx="120" cy="140" r="16" fill="#a855f7"/>
<circle cx="300" cy="140" r="20" fill="#16a34a"/>
<circle cx="480" cy="140" r="16" fill="#2563eb"/>
<text x="120" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#7e22ce">PASSATO</text>
<text x="300" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#15803d">PRESENTE</text>
<text x="480" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#1d4ed8">FUTURO</text>
<text x="120" y="95" font-size="18" text-anchor="middle" fill="#1f2937">ieri</text>
<text x="300" y="95" font-size="18" text-anchor="middle" fill="#1f2937">adesso</text>
<text x="480" y="95" font-size="18" text-anchor="middle" fill="#1f2937">domani</text>
<text x="120" y="190" font-size="20" text-anchor="middle" fill="#1f2937">ho giocato</text>
<text x="120" y="218" font-size="20" text-anchor="middle" fill="#1f2937">giocavo</text>
<text x="300" y="190" font-size="20" text-anchor="middle" fill="#1f2937">gioco</text>
<text x="480" y="190" font-size="20" text-anchor="middle" fill="#1f2937">giocherò</text>
<text x="480" y="225" font-size="15" text-anchor="middle" fill="#92400e">(c + h per il suono duro)</text>
</svg>`,
      caption: "Lo stesso verbo, giocare, cambia forma a seconda di quando avviene l'azione."
    },
    {
      type: "quiz",
      title: "Mini-quiz: famiglie e persone",
      questions: [
        { type: "mc", q: "«Scrivere» appartiene alla…", options: ["1ª coniugazione", "2ª coniugazione", "3ª coniugazione"], answer: 1, explain: "Finisce in -ere: seconda coniugazione." },
        { type: "text", q: "Coniuga «parlare» al presente con «noi».", answer: ["parliamo", "noi parliamo"], explain: "Noi parl-iamo." },
        { type: "mc", q: "Qual è la forma giusta del futuro di «cantare» (io)?", options: ["cantarò", "canterò", "cantirò"], answer: 1, explain: "Nella 1ª coniugazione la -a- diventa -e-: canterò." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: il diario di Matteo",
      html: `<p><i>«Ieri <b>ho giocato</b> a calcio e <b>ho vinto</b>. Quando ero piccolo <b>dormivo</b> sempre dopo pranzo. Oggi <b>leggo</b> un fumetto. Domani <b>partirò</b> per la montagna e <b>camminerò</b> tanto.»</i></p>
<table>
<tr><th>Verbo</th><th>Infinito</th><th>Coniugazione</th><th>Tempo</th></tr>
<tr><td>ho giocato</td><td>giocare</td><td>1ª</td><td>passato prossimo</td></tr>
<tr><td>ho vinto</td><td>vincere</td><td>2ª</td><td>passato prossimo</td></tr>
<tr><td>dormivo</td><td>dormire</td><td>3ª</td><td>imperfetto</td></tr>
<tr><td>leggo</td><td>leggere</td><td>2ª</td><td>presente</td></tr>
<tr><td>partirò</td><td>partire</td><td>3ª</td><td>futuro</td></tr>
<tr><td>camminerò</td><td>camminare</td><td>1ª</td><td>futuro</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Esempio pratico: trovare l'infinito",
      html: `<p>Per sapere la coniugazione di un verbo coniugato, devi prima <b>tornare all'infinito</b>. Chiediti: «Che cosa vuol dire fare quest'azione?»</p>
<ul>
<li>«Noi <b>ridiamo</b>» → che cosa facciamo? <b>ridere</b> → 2ª coniugazione.</li>
<li>«Voi <b>aprite</b>» → <b>aprire</b> → 3ª coniugazione.</li>
<li>«Loro <b>ballavano</b>» → <b>ballare</b> → 1ª coniugazione.</li>
<li>«Tu <b>capirai</b>» → <b>capire</b> → 3ª coniugazione.</li>
</ul>
<p>Trucco: prova a dire «<b>Devo</b> …» davanti: «Devo ridere», «Devo aprire», «Devo ballare». Dopo «devo» il verbo va sempre all'infinito!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? I verbi nuovi vanno tutti in -are",
      html: `<p>Quando nasce un verbo nuovo, in italiano finisce quasi sempre in <b>-are</b>: <i>cliccare, chattare, postare, zoomare, scannerizzare, googlare</i>. La prima coniugazione è la famiglia più grande (contiene la maggior parte dei verbi italiani) ed è anche la più regolare: per questo accoglie i nuovi arrivati! 📱</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? In latino le famiglie erano quattro",
      html: `<p>Il <b>latino</b>, la lingua da cui nasce l'italiano, aveva <b>quattro</b> coniugazioni: <i>amāre, timēre, legĕre, audīre</i>. Due di queste (quella di <i>timēre</i> con l'accento sulla «e» e quella di <i>legĕre</i> con l'accento più indietro) si sono unite nella nostra 2ª coniugazione. Per questo diciamo te<b>mé</b>re ma <b>lèg</b>gere: due accenti diversi nella stessa famiglia!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>1ª coniugazione: <b>-are</b> · 2ª: <b>-ere</b> · 3ª: <b>-ire</b>.</li>
<li>Verbo = <b>radice</b> (significato) + <b>desinenza</b> (persona e tempo).</li>
<li>Persone: io, tu, lui/lei (singolari) · noi, voi, loro (plurali).</li>
<li>Passato prossimo = ausiliare + participio (-ato, -uto, -ito).</li>
<li>Futuro: cant-<b>erò</b> (la -a- diventa -e-), cred-<b>erò</b>, dorm-<b>irò</b>.</li>
<li>Essere e avere hanno una coniugazione propria: sono irregolari.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le coniugazioni",
      intro: "Le tabelle non ti entrano in testa? Prova con una macchina, un altro Paese, le carte o un gioco di abbinamenti.",
      tabs: [
        {
          label: "⚙️ La macchina dei verbi",
          html: `<p>Immagina una macchina con due rotelle. La prima rotella sceglie <b>chi</b> (io, tu, lui…), la seconda sceglie <b>quando</b> (ieri, oggi, domani). Metti dentro la radice e la macchina incolla la desinenza giusta!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f1f5f9"/>
<rect x="30" y="100" width="120" height="60" rx="10" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="90" y="138" font-size="24" font-weight="bold" text-anchor="middle" fill="#713f12">CANT-</text>
<path d="M155 130 L200 130" stroke="#334155" stroke-width="5"/>
<polygon points="200,120 218,130 200,140" fill="#334155"/>
<rect x="220" y="50" width="200" height="160" rx="20" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<circle cx="280" cy="110" r="38" fill="#f472b6" stroke="#9d174d" stroke-width="4"/>
<circle cx="360" cy="150" r="38" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<text x="280" y="117" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">CHI?</text>
<text x="360" y="157" font-size="18" font-weight="bold" text-anchor="middle" fill="#ffffff">QUANDO?</text>
<text x="280" y="175" font-size="16" text-anchor="middle" fill="#1f2937">noi</text>
<text x="360" y="85" font-size="16" text-anchor="middle" fill="#1f2937">domani</text>
<path d="M425 130 L470 130" stroke="#334155" stroke-width="5"/>
<polygon points="470,120 488,130 470,140" fill="#334155"/>
<rect x="490" y="100" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="540" y="128" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">cant-</text>
<text x="540" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">eremo</text>
</svg>`
        },
        {
          label: "🇬🇧 In inglese è più facile?",
          html: `<p>In <b>inglese</b> i verbi cambiano pochissimo: per questo gli inglesi devono <b>sempre</b> dire il soggetto.</p>
<table>
<tr><th>Italiano</th><th>Inglese</th></tr>
<tr><td>canto, canti, canta</td><td>I sing, you sing, he sing<b>s</b></td></tr>
<tr><td>ho cantato</td><td>I sang (passato)</td></tr>
<tr><td>canterò</td><td>I <b>will</b> sing (futuro con «will»)</td></tr>
<tr><td>gioco → ho giocato</td><td>I play → I play<b>ed</b></td></tr>
</table>
<p>In italiano, invece, la desinenza dice già chi fa l'azione: «<b>Cantiamo</b>!» vuol dire per forza «noi cantiamo». Possiamo anche non dire il soggetto!</p>`
        },
        {
          label: "🎵 Il trucco della vocale",
          html: `<p>Ogni famiglia ha la sua <b>vocale del cuore</b>, quella che sta prima di -re:</p>
<ul>
<li>cant-<b>A</b>-re → cant<b>a</b>te, cant<b>a</b>vo, cant<b>a</b>to</li>
<li>cred-<b>E</b>-re → cred<b>e</b>te, cred<b>e</b>vo (ma credu-to)</li>
<li>dorm-<b>I</b>-re → dorm<b>i</b>te, dorm<b>i</b>vo, dorm<b>i</b>to</li>
</ul>
<p>Nella persona <b>voi</b> e nell'<b>imperfetto</b> la vocale del cuore si vede sempre: se te la ricordi, sbagli molto meno!</p>`
        },
        {
          label: "🃏 Carte dei verbi",
          html: `<p>Davanti c'è un verbo coniugato. Prova a dire infinito, coniugazione e tempo, poi gira la carta.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "nuoteremo", back: "nuotare · 1ª · futuro · noi" },
              { front: "hai letto", back: "leggere · 2ª · passato prossimo · tu" },
              { front: "sentivano", back: "sentire · 3ª · imperfetto · loro" },
              { front: "corre", back: "correre · 2ª · presente · lui/lei" },
              { front: "finisco", back: "finire · 3ª (con -isc-) · presente · io" },
              { front: "giocavate", back: "giocare · 1ª · imperfetto · voi" }
            ]
          }
        },
        {
          label: "🔗 Abbina persona e desinenza",
          html: `<p>Verbo «dormire» al presente: collega ogni persona alla sua forma.</p>`,
          widget: "match",
          options: { pairs: [["io", "dormo"], ["tu", "dormi"], ["lui", "dorme"], ["noi", "dormiamo"], ["voi", "dormite"], ["loro", "dormono"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle coniugazioni: tocca un nodo e scopri il perché",
      nodes: [
        { id: "verbo", label: "Verbo", x: 50, y: 6, color: "#2563eb", html: "Parola che indica un'azione o uno stato.", why: "Senza verbo non c'è frase: è il «motore» che dice che cosa succede. Già i grammatici greci lo chiamavano <i>rhêma</i>, «ciò che si dice» del soggetto." },
        { id: "infinito", label: "Infinito", x: 50, y: 26, color: "#0ea5e9", html: "La forma «base» del verbo: cantare, leggere, dormire.", why: "Si chiama infinito perché è «non definito»: non dice chi fa l'azione né quando. Per questo i dizionari elencano i verbi all'infinito." },
        { id: "are", label: "1ª: -are", x: 18, y: 46, color: "#dc2626", html: "La famiglia più grande e più regolare: amare, giocare.", why: "Viene dalla 1ª coniugazione latina (<i>amāre</i>), già molto regolare: per questo i nuovi verbi (chattare, cliccare) entrano qui." },
        { id: "ere", label: "2ª: -ere", x: 50, y: 46, color: "#16a34a", html: "Credere, leggere, vedere: tanti verbi irregolari.", why: "È nata dall'unione di due coniugazioni latine (<i>timēre</i> e <i>legĕre</i>). Per questo contiene verbi con accenti diversi e molte irregolarità (letto, scritto, visto)." },
        { id: "ire", label: "3ª: -ire", x: 82, y: 46, color: "#2563eb", html: "Dormire, partire, finire.", why: "Viene dalla 4ª coniugazione latina (<i>audīre</i>). L'aggiunta <b>-isc-</b> (finisco) deriva da un suffisso latino che indicava un'azione che comincia o si sviluppa (<i>-esco</i>)." },
        { id: "desinenza", label: "Radice + desinenza", x: 22, y: 70, color: "#f59e0b", html: "Cant- (significato) + -iamo (chi e quando).", why: "L'italiano, come il latino, è una lingua «flessiva»: mette le informazioni dentro la parola, cambiandone la fine. Così una sola parola («cantiamo») dice azione, persona, numero e tempo." },
        { id: "persone", label: "Le sei persone", x: 50, y: 92, color: "#ec4899", html: "Io, tu, lui/lei, noi, voi, loro.", why: "Ci sono tre persone (chi parla, chi ascolta, di chi si parla), ognuna al singolare e al plurale: 3 × 2 = 6 forme." },
        { id: "tempi", label: "Passato, presente, futuro", x: 78, y: 70, color: "#a855f7", html: "Ho cantato / cantavo · canto · canterò.", why: "Il futuro italiano nasce dal latino parlato: «cantare habeo» (ho da cantare) → «canterò». Infatti le desinenze del futuro (-ò, -ai, -à, -emo, -ete, -anno) somigliano al verbo avere!" },
        { id: "irregolari", label: "Verbi irregolari", x: 85, y: 90, color: "#64748b", html: "Essere, avere, andare, fare: non seguono le regole.", why: "Sono i verbi più usati: a forza di essere ripetuti nei secoli si sono «consumati» e trasformati, come una moneta passata di mano in mano." }
      ],
      edges: [
        ["verbo", "infinito", "si cerca all'"],
        ["infinito", "are", "finisce in"],
        ["infinito", "ere", "finisce in"],
        ["infinito", "ire", "finisce in"],
        ["are", "desinenza", "si coniuga cambiando la"],
        ["desinenza", "persone", "dice la"],
        ["ire", "tempi", "e anche il tempo"],
        ["tempi", "irregolari", "eccezioni:"],
        ["desinenza", "tempi", "dice il"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: i tempi",
      questions: [
        { type: "mc", q: "«Partivamo» è…", options: ["presente", "imperfetto", "futuro"], answer: 1, explain: "La desinenza -ivamo indica l'imperfetto (3ª coniugazione)." },
        { type: "mc", q: "Il participio passato di «dormire» è…", options: ["dormato", "dormuto", "dormito"], answer: 2, explain: "3ª coniugazione: -ito → dormito." },
        { type: "tf", q: "«Ho mangiato» è un tempo composto.", answer: true, explain: "È formato da due parole: l'ausiliare «ho» e il participio «mangiato»." }
      ]
    }
  ],
  glossary: [
    { t: "Coniugazione", d: "Famiglia di verbi con la stessa desinenza all'infinito (-are, -ere, -ire); anche l'insieme di tutte le forme di un verbo." },
    { t: "Infinito", d: "La forma base del verbo, quella del dizionario (cantare)." },
    { t: "Radice", d: "La parte del verbo che porta il significato (cant-)." },
    { t: "Desinenza", d: "La parte finale del verbo che cambia con persona e tempo (-iamo, -erò)." },
    { t: "Persona", d: "Chi compie l'azione: io, tu, lui/lei, noi, voi, loro." },
    { t: "Tempo semplice", d: "Tempo formato da una sola parola (canto, cantavo, canterò)." },
    { t: "Tempo composto", d: "Tempo formato da ausiliare + participio (ho cantato)." },
    { t: "Participio passato", d: "Forma del verbo in -ato, -uto, -ito." },
    { t: "Imperfetto", d: "Tempo passato che descrive abitudini o situazioni (giocavo)." },
    { t: "Futuro semplice", d: "Tempo che indica un'azione che avverrà (giocherò)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "A quale coniugazione appartiene «capire»?", options: ["1ª", "2ª", "3ª"], answer: 2, explain: "Finisce in -ire: 3ª coniugazione." },
      { type: "mc", q: "Qual è l'infinito di «vedevamo»?", options: ["vedare", "vedere", "vedire"], answer: 1, explain: "Vedere, 2ª coniugazione." },
      { type: "text", q: "Coniuga «ballare» al futuro con «io».", answer: ["ballero", "io ballero", "ballerò", "io ballerò"], explain: "Io ballerò: la -a- diventa -e-." },
      { type: "tf", q: "Nel presente, la desinenza di «noi» è -iamo per tutte e tre le coniugazioni.", answer: true, explain: "Cantiamo, crediamo, dormiamo." },
      { type: "mc", q: "In «Loro aprono la porta», il verbo è al…", options: ["passato prossimo", "presente", "futuro"], answer: 1, explain: "Aprono: presente di aprire, 3ª persona plurale." },
      { type: "mc", q: "Quale forma è sbagliata?", options: ["voi correte", "voi dormite", "voi cantete"], answer: 2, explain: "Cantare è della 1ª coniugazione: voi cantate." },
      { type: "text", q: "Scrivi il participio passato di «credere».", answer: ["creduto"], explain: "2ª coniugazione: -uto → creduto." },
      { type: "mc", q: "Quale verbo prende -isc- al presente?", options: ["dormire", "pulire", "partire"], answer: 1, explain: "Io pulisco, tu pulisci, lui pulisce." },
      { type: "order", q: "Metti in ordine dal passato al futuro.", items: ["ho saltato", "salto", "salterò"], explain: "Passato prossimo, presente, futuro." },
      { type: "mc", q: "In «Tu leggevi un fumetto», il verbo è…", options: ["imperfetto, 2ª coniugazione", "presente, 2ª coniugazione", "imperfetto, 3ª coniugazione"], answer: 0, explain: "Leggere (2ª), desinenza -evi dell'imperfetto." },
      { type: "tf", q: "I verbi nuovi come «chattare» entrano di solito nella 3ª coniugazione.", answer: false, explain: "Entrano nella 1ª coniugazione, in -are." },
      { type: "text", q: "Coniuga «sentire» al presente con «voi».", answer: ["sentite", "voi sentite"], explain: "Voi sent-ite." }
    ]
  }
});
