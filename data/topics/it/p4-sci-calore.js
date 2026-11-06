TOPIC('it', {
  id: "p4-sci-calore",
  title: "Calore e temperatura",
  intro: "Perché la cioccolata calda si raffredda e il gelato si scioglie? Perché i binari del treno hanno degli spazi fra un pezzo e l'altro? Per capirlo dobbiamo scoprire la differenza fra <b>calore</b> e <b>temperatura</b>, come funziona il <b>termometro</b> e che cos'è la <b>dilatazione</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Calore e temperatura non sono la stessa cosa",
      html: `<p>Nella vita di tutti i giorni diciamo "fa caldo" o "che calore!", ma per gli scienziati sono due cose diverse.</p>
<ul>
<li>Il <b>calore</b> è una forma di <b>energia</b> che <b>passa</b> da un corpo più caldo a uno più freddo. Passa <b>sempre</b> in questa direzione, mai al contrario (da solo).</li>
<li>La <b>temperatura</b> è la <b>misura</b> di quanto un corpo è caldo o freddo. Dipende da quanto si agitano le sue particelle: più si muovono veloci, più la temperatura è alta.</li>
</ul>
<p>Il calore continua a passare finché i due corpi hanno la <b>stessa temperatura</b>: si dice che hanno raggiunto l'<b>equilibrio termico</b>.</p>
<p>Esempio: la tua mano sul banco di metallo sente freddo. Non è il "freddo" che entra nella mano: è il <b>calore</b> della mano che esce e va nel metallo!</p>
<p>Una vasca di acqua tiepida contiene molta più energia termica di una tazzina di caffè bollente, anche se la sua temperatura è più bassa: perché ha <b>molta più materia</b>.</p>`
    },
    {
      type: "svg",
      title: "Il calore va dal caldo al freddo",
      svg: `<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg">
<rect width="620" height="280" fill="#fff7ed"/>
<rect x="40" y="80" width="200" height="140" rx="16" fill="#fca5a5" stroke="#b91c1c" stroke-width="4"/>
<text x="140" y="140" font-size="26" text-anchor="middle" fill="#7f1d1d" font-weight="bold">☕ 80 °C</text>
<text x="140" y="180" font-size="18" text-anchor="middle" fill="#7f1d1d">caldo</text>
<rect x="380" y="80" width="200" height="140" rx="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="4"/>
<text x="480" y="140" font-size="26" text-anchor="middle" fill="#1e3a8a" font-weight="bold">🧊 5 °C</text>
<text x="480" y="180" font-size="18" text-anchor="middle" fill="#1e3a8a">freddo</text>
<g stroke="#f97316" stroke-width="10"><line x1="250" y1="130" x2="350" y2="130"/><line x1="250" y1="170" x2="350" y2="170"/></g>
<g fill="#f97316"><polygon points="350,115 375,130 350,145"/><polygon points="350,155 375,170 350,185"/></g>
<text x="310" y="105" font-size="20" text-anchor="middle" fill="#c2410c" font-weight="bold">CALORE</text>
<text x="310" y="255" font-size="18" text-anchor="middle" fill="#1f2937">…finché le temperature diventano uguali (equilibrio termico)</text>
</svg>`,
      caption: "Il calore passa sempre dal corpo più caldo a quello più freddo, mai al contrario."
    },
    {
      type: "text",
      title: "Il termometro e le scale di temperatura",
      html: `<p>Il <b>termometro</b> è lo strumento che misura la temperatura. Quello classico è un sottile tubicino di vetro con un liquido dentro (un tempo mercurio, oggi alcol colorato o una lega speciale). Quando fa caldo il liquido si <b>dilata</b> (occupa più spazio) e sale; quando fa freddo si contrae e scende.</p>
<p>In Italia si usa la scala <b>Celsius</b> (°C), inventata dall'astronomo svedese <b>Anders Celsius</b> nel <b>1742</b>:</p>
<ul>
<li><b>0 °C</b> = temperatura a cui il ghiaccio fonde (e l'acqua congela);</li>
<li><b>100 °C</b> = temperatura a cui l'acqua bolle (al livello del mare);</li>
<li>in mezzo, 100 parti uguali: i <b>gradi</b>. Per questo si chiamava anche scala "centigrada".</li>
</ul>
<p>Sotto lo zero le temperature sono <b>negative</b>: −5 °C si legge "meno cinque gradi" o "cinque gradi sotto zero".</p>
<p>Alcune temperature da conoscere:</p>
<ul>
<li>corpo umano sano: circa <b>36–37 °C</b> (sopra 37,5 °C circa si parla di febbre);</li>
<li>stanza confortevole: circa <b>20 °C</b>;</li>
<li>freezer di casa: circa <b>−18 °C</b>;</li>
<li>forno per la pizza: anche <b>400 °C</b>.</li>
</ul>
<p>Ci sono termometri di tanti tipi: <b>clinico</b> (da 35 a 42 °C, per la febbre), <b>ambientale</b> (per l'aria), <b>digitale</b>, <b>a infrarossi</b> (misura senza toccare), da cucina…</p>`
    },
    {
      type: "svg",
      title: "Leggere il termometro",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<rect x="120" y="20" width="40" height="260" rx="20" fill="#ffffff" stroke="#334155" stroke-width="4"/>
<circle cx="140" cy="295" r="30" fill="#ef4444" stroke="#334155" stroke-width="4"/>
<rect x="132" y="150" width="16" height="140" fill="#ef4444"/>
<g stroke="#334155" stroke-width="3">
<line x1="160" y1="270" x2="185" y2="270"/><line x1="160" y1="230" x2="185" y2="230"/><line x1="160" y1="190" x2="185" y2="190"/><line x1="160" y1="150" x2="185" y2="150"/><line x1="160" y1="110" x2="185" y2="110"/><line x1="160" y1="70" x2="185" y2="70"/><line x1="160" y1="30" x2="185" y2="30"/>
</g>
<g font-size="18" fill="#1f2937"><text x="192" y="276">−20</text><text x="192" y="236">−10</text><text x="192" y="196">0</text><text x="192" y="156">10</text><text x="192" y="116">20</text><text x="192" y="76">30</text><text x="192" y="36">40</text></g>
<text x="300" y="60" font-size="20" fill="#1f2937" font-weight="bold">Qui il liquido arriva a 10 °C</text>
<text x="300" y="110" font-size="17" fill="#1e40af">🧊 0 °C: il ghiaccio fonde</text>
<text x="300" y="145" font-size="17" fill="#15803d">🏠 20 °C: stanza</text>
<text x="300" y="180" font-size="17" fill="#b91c1c">🤒 37 °C: corpo umano</text>
<text x="300" y="215" font-size="17" fill="#7c3aed">❄️ −18 °C: freezer</text>
<text x="300" y="250" font-size="17" fill="#c2410c">♨️ 100 °C: l'acqua bolle</text>
<text x="300" y="290" font-size="15" fill="#475569">(fuori da questa scala)</text>
</svg>`,
      caption: "Il liquido rosso sale e scende nel tubicino. Si legge il numero dove finisce la colonnina."
    },
    {
      type: "widget",
      title: "Il termometro come una retta dei numeri",
      widget: "numberLine",
      options: { min: -10, max: 40, step: 5, start: 20, marks: [0, 37] },
      caption: "La rana parte da 20 °C. Fai salti per seguire la temperatura: di notte scende di 5 gradi, poi di altri 5… Riesci ad arrivare sotto lo zero? I puntini viola segnano 0 °C e 37 °C."
    },
    {
      type: "quiz",
      title: "Mini-quiz: calore e termometro",
      questions: [
        { type: "mc", q: "Il calore passa…", options: ["dal corpo più freddo a quello più caldo", "dal corpo più caldo a quello più freddo", "in tutte e due le direzioni allo stesso modo"], answer: 1, explain: "Il calore passa spontaneamente dal caldo al freddo." },
        { type: "num", q: "La temperatura è 4 °C e scende di 7 gradi. A quanto arriva?", answer: -3, unit: "°C", explain: "4 − 7 = −3 °C: tre gradi sotto zero." },
        { type: "tf", q: "Nella scala Celsius l'acqua bolle a 100 °C (al livello del mare).", answer: true, explain: "0 °C ghiaccio che fonde, 100 °C acqua che bolle." }
      ]
    },
    {
      type: "text",
      title: "Come viaggia il calore",
      html: `<p>Il calore si propaga in tre modi:</p>
<ol>
<li><b>Conduzione</b>: il calore passa <b>attraverso i solidi</b>, da particella a particella, per contatto. Metti un cucchiaino di metallo nel tè caldo: dopo poco anche il manico scotta.</li>
<li><b>Convezione</b>: nei <b>liquidi</b> e nei <b>gas</b> la parte calda diventa più leggera e <b>sale</b>, quella fredda <b>scende</b>: si formano dei "giri" chiamati <b>correnti convettive</b>. Così il termosifone scalda tutta la stanza e l'acqua nella pentola si scalda tutta.</li>
<li><b>Irraggiamento</b>: il calore viaggia come <b>radiazione</b> (raggi infrarossi), anche <b>nel vuoto</b>, senza bisogno di materia. Così il calore del Sole arriva fino a noi attraverso lo spazio, e così ti scaldi davanti a un falò.</li>
</ol>
<p><b>Conduttori e isolanti</b>: i <b>metalli</b> (rame, alluminio, ferro) sono buoni <b>conduttori</b>: il calore li attraversa in fretta. Legno, plastica, lana, polistirolo, sughero e soprattutto l'<b>aria ferma</b> sono <b>isolanti</b>: il calore passa molto lentamente. Per questo le pentole sono di metallo ma i manici di plastica o legno!</p>`
    },
    {
      type: "svg",
      title: "Conduzione, convezione, irraggiamento",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fefce8"/>
<text x="105" y="30" font-size="18" text-anchor="middle" font-weight="bold" fill="#b91c1c">Conduzione</text>
<rect x="40" y="150" width="130" height="80" rx="8" fill="#fecaca" stroke="#7f1d1d" stroke-width="3"/>
<text x="105" y="200" font-size="16" text-anchor="middle">tè caldo</text>
<line x1="90" y1="180" x2="165" y2="60" stroke="#94a3b8" stroke-width="10" stroke-linecap="round"/>
<g fill="#ef4444"><circle cx="100" cy="165" r="5"/><circle cx="115" cy="140" r="5"/><circle cx="130" cy="115" r="5"/><circle cx="145" cy="90" r="5"/></g>
<text x="105" y="265" font-size="15" text-anchor="middle">nei solidi, per contatto</text>
<text x="320" y="30" font-size="18" text-anchor="middle" font-weight="bold" fill="#c2410c">Convezione</text>
<path d="M260 80 L260 220 L380 220 L380 80" fill="#bae6fd" stroke="#0369a1" stroke-width="4"/>
<rect x="255" y="225" width="130" height="14" fill="#f97316"/>
<path d="M320 200 C300 160 300 120 320 100 C340 120 345 160 360 195" fill="none" stroke="#ef4444" stroke-width="4"/>
<path d="M300 110 C280 140 280 180 300 205" fill="none" stroke="#2563eb" stroke-width="4"/>
<polygon points="314,103 322,92 328,106" fill="#ef4444"/>
<polygon points="294,198 301,212 307,199" fill="#2563eb"/>
<text x="320" y="265" font-size="15" text-anchor="middle">nei liquidi e gas: il caldo sale</text>
<text x="535" y="30" font-size="18" text-anchor="middle" font-weight="bold" fill="#a16207">Irraggiamento</text>
<circle cx="480" cy="110" r="38" fill="#facc15"/>
<g stroke="#f59e0b" stroke-width="4" stroke-dasharray="8 6"><line x1="520" y1="120" x2="590" y2="180"/><line x1="515" y1="140" x2="570" y2="205"/><line x1="525" y1="100" x2="605" y2="150"/></g>
<text x="590" y="225" font-size="30" text-anchor="middle">🌍</text>
<text x="535" y="265" font-size="15" text-anchor="middle">anche nel vuoto</text>
</svg>`,
      caption: "Tre modi di viaggiare: passando di mano in mano (conduzione), con un giro di correnti (convezione), con i raggi (irraggiamento)."
    },
    {
      type: "widget",
      title: "Conduttore o isolante?",
      widget: "classify",
      options: {
        groups: ["Buon conduttore", "Isolante"],
        items: [
          ["🥄 cucchiaio di acciaio", 0],
          ["🍳 fondo di rame della pentola", 0],
          ["🥫 lattina di alluminio", 0],
          ["🧤 guanto di lana", 1],
          ["🪵 mestolo di legno", 1],
          ["📦 polistirolo", 1],
          ["🍾 tappo di sughero", 1],
          ["🔩 chiodo di ferro", 0]
        ]
      },
      caption: "I metalli conducono bene il calore; materiali con tanta aria intrappolata (lana, polistirolo, piume) isolano."
    },
    {
      type: "text",
      title: "La dilatazione termica",
      html: `<p>Quando un corpo si <b>scalda</b>, le sue particelle si muovono di più e si <b>allontanano</b> un pochino: il corpo diventa un po' più grande. Questo si chiama <b>dilatazione termica</b>. Quando si raffredda, succede il contrario: <b>contrazione</b>.</p>
<ul>
<li>I <b>solidi</b> si dilatano poco: un binario d'acciaio lungo 10 m, con 40 °C di differenza fra inverno ed estate, si allunga di circa <b>5 mm</b>. Poco, ma abbastanza per piegare i binari se non ci fossero gli <b>spazi</b> (giunti)!</li>
<li>I <b>liquidi</b> si dilatano di più: è il principio del termometro.</li>
<li>I <b>gas</b> si dilatano moltissimo: un palloncino lasciato al sole si gonfia, e in frigorifero si affloscia.</li>
</ul>
<p>Per questo ponti, binari, strade e palazzi hanno dei <b>giunti di dilatazione</b>: piccoli spazi o "pettini" di metallo che permettono di allungarsi senza rompersi. E i fili della luce d'estate pendono di più che d'inverno!</p>
<p>Eccezione famosa: l'<b>acqua</b> fra 0 °C e 4 °C fa il contrario (si contrae scaldandosi), e quando ghiaccia si espande. Per questo il ghiaccio galleggia.</p>`
    },
    {
      type: "svg",
      title: "Il giunto del binario",
      svg: `<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg">
<rect width="620" height="260" fill="#f1f5f9"/>
<text x="20" y="40" font-size="20" fill="#1e40af" font-weight="bold">❄️ Inverno</text>
<rect x="20" y="60" width="270" height="22" fill="#64748b"/>
<rect x="320" y="60" width="270" height="22" fill="#64748b"/>
<text x="305" y="110" font-size="16" text-anchor="middle" fill="#1e40af">spazio largo</text>
<line x1="290" y1="92" x2="320" y2="92" stroke="#1e40af" stroke-width="3"/>
<text x="20" y="160" font-size="20" fill="#b91c1c" font-weight="bold">☀️ Estate</text>
<rect x="20" y="180" width="283" height="22" fill="#94a3b8"/>
<rect x="307" y="180" width="283" height="22" fill="#94a3b8"/>
<text x="305" y="230" font-size="16" text-anchor="middle" fill="#b91c1c">spazio quasi chiuso</text>
<text x="450" y="140" font-size="16" fill="#1f2937">il metallo caldo</text>
<text x="450" y="160" font-size="16" fill="#1f2937">si allunga</text>
</svg>`,
      caption: "Senza lo spazio fra un binario e l'altro, d'estate l'acciaio dilatato si spingerebbe e si piegherebbe."
    },
    {
      type: "example",
      title: "Esempio pratico: il barattolo che non si apre",
      html: `<p>Il papà non riesce ad aprire un barattolo di marmellata con il coperchio di metallo. La nonna gli dice: "Mettilo un attimo sotto l'acqua calda!".</p>
<ol>
<li>L'acqua calda scalda il coperchio di metallo, che è un buon <b>conduttore</b>.</li>
<li>Il metallo si <b>dilata</b> più del vetro: il coperchio si allarga un pochino.</li>
<li>Il coperchio si svita facilmente! 🎉</li>
</ol>
<p>Attenzione: mai usare acqua bollente sul vetro freddo, perché si può crepare (una parte si dilata e l'altra no).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: vestirsi a strati",
      html: `<p>D'inverno è meglio mettere <b>tre maglie leggere</b> che una sola maglia pesante. Perché?</p>
<ul>
<li>Fra uno strato e l'altro resta intrappolata dell'<b>aria ferma</b>, che è un ottimo <b>isolante</b>.</li>
<li>I vestiti non "danno" calore: <b>trattengono</b> il calore prodotto dal nostro corpo e non lo lasciano scappare verso l'aria fredda.</li>
</ul>
<p>Per lo stesso motivo gli uccelli d'inverno "gonfiano" le piume, e le case moderne hanno i <b>doppi vetri</b> con aria (o gas) in mezzo e i <b>cappotti</b> isolanti sui muri: si spreca meno energia per il riscaldamento.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La Torre Eiffel cresce d'estate",
      html: `<p>La Torre Eiffel di Parigi è fatta di ferro: d'estate, con il caldo, si <b>allunga di circa 15 centimetri</b> rispetto all'inverno! E nelle giornate di sole il lato illuminato si dilata più dell'altro, così la cima si inclina leggermente dalla parte opposta al Sole.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il primo termometro fu italiano",
      html: `<p>Verso il <b>1593</b> <b>Galileo Galilei</b> costruì il <b>termoscopio</b>: un'ampolla di vetro con un tubo immerso nell'acqua. L'aria dentro, scaldandosi o raffreddandosi, faceva scendere o salire l'acqua nel tubo. Non aveva ancora i numeri: diceva solo "più caldo" o "più freddo". Il medico <b>Santorio Santorio</b> di Padova vi aggiunse una scala per misurare la febbre, e a Firenze, verso il 1654, nacquero i primi termometri chiusi ad alcol.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Lo zero assoluto",
      html: `<p>Si può andare sempre più giù con la temperatura? No! A <b>−273,15 °C</b> le particelle sarebbero quasi completamente ferme: è lo <b>zero assoluto</b>, la temperatura più bassa possibile. Gli scienziati usano la scala <b>Kelvin</b>, che parte proprio da lì (0 K). Nello spazio profondo ci sono circa −270 °C. La temperatura più calda e più fredda mai misurate sulla Terra? Circa <b>+56,7 °C</b> nella Valle della Morte (USA, 1913) e <b>−89,2 °C</b> alla base di Vostok in Antartide (1983).</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Calore</b> = energia che passa dal corpo più caldo al più freddo. <b>Temperatura</b> = misura di quanto un corpo è caldo.</li>
<li>Termometro e scala <b>Celsius</b>: 0 °C ghiaccio che fonde, 100 °C acqua che bolle. Corpo umano ≈ 37 °C.</li>
<li>Propagazione: <b>conduzione</b> (solidi), <b>convezione</b> (liquidi e gas), <b>irraggiamento</b> (anche nel vuoto).</li>
<li><b>Conduttori</b> (metalli) e <b>isolanti</b> (legno, lana, plastica, aria).</li>
<li><b>Dilatazione</b>: scaldandosi i corpi si allargano; raffreddandosi si contraggono.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire calore e temperatura",
      intro: "Calore e temperatura si confondono facilmente. Prova con un'analogia, un esperimento, un modello 3D o le scale usate in altri Paesi.",
      tabs: [
        {
          label: "💃 La festa da ballo delle particelle",
          html: `<p>Immagina le particelle di un oggetto come persone a una festa:</p>
<ul>
<li>la <b>temperatura</b> è <b>quanto ballano scatenate</b> le persone: musica lenta = freddo, musica rock = caldo;</li>
<li>il <b>calore</b> è l'energia che passa quando una sala scatenata e una tranquilla aprono la porta in mezzo: i ballerini agitati "contagiano" quelli calmi finché tutti ballano allo stesso ritmo (<b>equilibrio termico</b>);</li>
<li>la <b>dilatazione</b>: quando ballano più forte, le persone hanno bisogno di più spazio e la folla si allarga!</li>
</ul>
<p>Una sala enorme piena di gente che balla piano (la vasca tiepida) può avere più "energia totale" di una stanzetta con tre persone scatenate (la tazzina bollente).</p>`
        },
        {
          label: "🖐️ L'esperimento delle tre bacinelle",
          html: `<p>Un esperimento famoso, descritto già dal filosofo inglese John Locke nel 1690:</p>
<ol>
<li>Prepara tre bacinelle: una con acqua <b>fredda</b>, una <b>tiepida</b>, una <b>calda</b> (non bollente!).</li>
<li>Metti la mano destra nella fredda e la sinistra nella calda per un minuto.</li>
<li>Poi metti tutte e due le mani nella tiepida.</li>
</ol>
<p>Sorpresa: la mano destra la sente <b>calda</b>, la sinistra <b>fredda</b>! Le nostre mani non misurano la temperatura, ma sentono se il calore <b>entra</b> o <b>esce</b>. Ecco perché ci serve il termometro.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<path d="M30 100 L50 190 L170 190 L190 100 Z" fill="#93c5fd" stroke="#1e40af" stroke-width="4"/>
<path d="M210 100 L230 190 L370 190 L390 100 Z" fill="#c4b5fd" stroke="#5b21b6" stroke-width="4"/>
<path d="M410 100 L430 190 L550 190 L570 100 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<text x="110" y="85" font-size="18" text-anchor="middle" fill="#1e40af" font-weight="bold">fredda 10 °C</text>
<text x="300" y="85" font-size="18" text-anchor="middle" fill="#5b21b6" font-weight="bold">tiepida 25 °C</text>
<text x="490" y="85" font-size="18" text-anchor="middle" fill="#991b1b" font-weight="bold">calda 40 °C</text>
<text x="110" y="40" font-size="30" text-anchor="middle">✋</text>
<text x="490" y="40" font-size="30" text-anchor="middle">🤚</text>
<text x="300" y="40" font-size="30" text-anchor="middle">✋🤚 ?</text>
</svg>`
        },
        {
          label: "☀️ Il calore del Sole nel vuoto (3D)",
          html: `<p>Fra il Sole e la Terra ci sono circa <b>150 milioni di km</b> di spazio quasi vuoto: niente aria, niente acqua. Eppure il calore del Sole arriva! Viaggia per <b>irraggiamento</b>, alla velocità della luce, in circa 8 minuti e 20 secondi.</p>
<p>Guarda il Sistema Solare: i pianeti più vicini al Sole sono caldissimi (Mercurio di giorno supera i 400 °C), quelli lontani gelidi (Nettuno circa −200 °C). Venere però è il più caldo di tutti, circa 460 °C, per il suo spesso "cappotto" di anidride carbonica che trattiene il calore: un fortissimo <b>effetto serra</b>.</p>`,
          scene: "solar",
          options: { labels: true }
        },
        {
          label: "🇺🇸 Fahrenheit e Kelvin",
          html: `<p>Non tutti usano i gradi Celsius!</p>
<ul>
<li>Negli <b>Stati Uniti</b> si usa la scala <b>Fahrenheit</b> (°F), inventata dal tedesco <b>Daniel Gabriel Fahrenheit</b> nel 1724, che costruì anche il primo termometro a mercurio affidabile (1714). In questa scala l'acqua congela a <b>32 °F</b> e bolle a <b>212 °F</b>; il corpo umano è circa <b>98,6 °F</b>. Se un amico americano dice "oggi ci sono 100 gradi", vuol dire circa 38 °C: un gran caldo, non acqua che bolle!</li>
<li>Gli <b>scienziati</b> usano la scala <b>Kelvin</b> (K), proposta da <b>Lord Kelvin</b> nel 1848, che parte dallo zero assoluto: 0 K = −273,15 °C, e 0 °C = 273,15 K. I gradi sono grandi come quelli Celsius.</li>
</ul>
<p>Curiosità: nella prima versione di Celsius (1742) i numeri erano al contrario! 0 era l'acqua che bolle e 100 il ghiaccio. Fu capovolta poco dopo la sua morte, forse da Linneo.</p>`
        },
        {
          label: "🧪 Il thermos in 3D",
          html: `<p>Il <b>thermos</b> (inventato dallo scozzese James Dewar nel 1892) mantiene caldo il tè e fresca l'acqua bloccando <b>tutti e tre</b> i modi di viaggiare del calore:</p>
<ul>
<li>il <b>vuoto</b> fra due pareti di vetro blocca conduzione e convezione (non c'è materia!);</li>
<li>le pareti <b>argentate</b>, come specchi, rimandano indietro l'irraggiamento;</li>
<li>il <b>tappo</b> isolante impedisce all'aria calda di uscire dall'alto.</li>
</ul>
<p>Gira il modello tagliato e guarda gli strati, dall'esterno all'interno.</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#475569", label: "Involucro esterno" },
              { r: 0.92, color: "#cbd5e1", label: "Parete di vetro argentata" },
              { r: 0.88, color: "#f1f5f9", label: "Vuoto (niente conduzione né convezione)" },
              { r: 0.72, color: "#e2e8f0", label: "Parete interna argentata" },
              { r: 0.68, color: "#b45309", label: "Tè caldo" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di calore e temperatura: tocca un nodo e scopri il perché",
      nodes: [
        { id: "particelle", label: "Particelle in movimento", x: 50, y: 6, color: "#7c3aed", html: "La materia è fatta di particelle che si muovono sempre.", why: "È la base di tutto: più le particelle si agitano, più il corpo è caldo. Lo capirono nell'Ottocento scienziati come Rudolf Clausius, James Clerk Maxwell e Ludwig Boltzmann." },
        { id: "temperatura", label: "Temperatura", x: 25, y: 28, color: "#dc2626", html: "Misura di quanto è caldo un corpo, cioè di quanto si agitano le sue particelle.", why: "Non dipende da quanto è grande il corpo: una goccia e una pentola d'acqua bollente hanno la stessa temperatura (100 °C)." },
        { id: "calore", label: "Calore", x: 75, y: 28, color: "#f97316", html: "Energia che passa dal corpo più caldo a quello più freddo.", why: "Fino al Settecento si pensava che il calore fosse un fluido invisibile, il \"calorico\". Nel 1798 il conte Rumford, osservando che forando i cannoni si produceva calore senza fine, capì che il calore nasce dal movimento. James Joule (anni 1840) misurò quanta energia di movimento serve per scaldare l'acqua." },
        { id: "termometro", label: "Termometro", x: 10, y: 52, color: "#2563eb", html: "Strumento che misura la temperatura sfruttando la dilatazione.", why: "Il termoscopio di Galileo (circa 1593) usava la dilatazione dell'aria; i termometri moderni quella di un liquido, o la variazione di una corrente elettrica (digitali)." },
        { id: "scale", label: "Scale Celsius, Fahrenheit, Kelvin", x: 32, y: 76, color: "#0ea5e9", html: "Modi diversi di numerare la temperatura.", why: "Per costruire una scala servono due punti fissi facili da riprodurre: Celsius scelse ghiaccio che fonde e acqua che bolle e divise in 100 parti. Kelvin partì dallo zero assoluto, il limite più basso possibile." },
        { id: "equilibrio", label: "Equilibrio termico", x: 60, y: 52, color: "#16a34a", html: "Due corpi a contatto finiscono per avere la stessa temperatura.", why: "Il calore passa finché c'è differenza di temperatura. Per questo il termometro funziona: aspetta di essere alla stessa temperatura del tuo corpo, e poi la \"legge\"." },
        { id: "propagazione", label: "Conduzione, convezione, irraggiamento", x: 88, y: 52, color: "#ca8a04", html: "I tre modi in cui il calore viaggia.", why: "Nei solidi le particelle si passano l'agitazione per contatto; nei fluidi la parte calda, meno densa, sale; l'irraggiamento è luce infrarossa, scoperta nel 1800 da William Herschel mettendo un termometro oltre il rosso dell'arcobaleno di un prisma." },
        { id: "dilatazione", label: "Dilatazione", x: 60, y: 92, color: "#be185d", html: "I corpi scaldandosi aumentano di volume.", why: "Particelle più agitate hanno bisogno di più spazio. Gli ingegneri ne tengono conto con i giunti di dilatazione in ponti e binari." },
        { id: "isolanti", label: "Conduttori e isolanti", x: 88, y: 80, color: "#0f766e", html: "Metalli: conducono bene. Legno, lana, aria: isolano.", why: "Nei metalli ci sono elettroni liberi di muoversi che trasportano l'energia velocemente; nei materiali con aria intrappolata il calore fa fatica a passare." }
      ],
      edges: [
        ["particelle", "temperatura", "agitazione"],
        ["particelle", "calore", "energia"],
        ["temperatura", "termometro", "si misura con"],
        ["termometro", "scale", "usa"],
        ["calore", "equilibrio", "porta a"],
        ["calore", "propagazione", "viaggia per"],
        ["propagazione", "isolanti", "dipende dal materiale"],
        ["calore", "dilatazione", "provoca"],
        ["dilatazione", "termometro", "fa funzionare"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: propagazione e dilatazione",
      questions: [
        { type: "mc", q: "Come arriva sulla Terra il calore del Sole?", options: ["Per conduzione", "Per convezione", "Per irraggiamento"], answer: 2, explain: "Attraverso il vuoto dello spazio può viaggiare solo per irraggiamento." },
        { type: "mc", q: "Perché i binari hanno piccoli spazi fra un pezzo e l'altro?", options: ["Per risparmiare acciaio", "Perché d'estate il metallo si dilata", "Per fare rumore"], answer: 1, explain: "Lo spazio permette al binario di allungarsi senza piegarsi." },
        { type: "tf", q: "Il legno è un buon conduttore di calore.", answer: false, explain: "È un isolante: per questo si usano mestoli e manici di legno." }
      ]
    }
  ],
  glossary: [
    { t: "Calore", d: "Energia che passa da un corpo più caldo a uno più freddo." },
    { t: "Temperatura", d: "Grandezza che indica quanto un corpo è caldo o freddo." },
    { t: "Termometro", d: "Strumento che misura la temperatura." },
    { t: "Grado Celsius (°C)", d: "Unità di temperatura: 0 °C ghiaccio che fonde, 100 °C acqua che bolle." },
    { t: "Equilibrio termico", d: "Situazione in cui due corpi a contatto hanno la stessa temperatura." },
    { t: "Conduzione", d: "Passaggio del calore attraverso un corpo, per contatto fra particelle." },
    { t: "Convezione", d: "Trasporto di calore nei liquidi e nei gas con correnti di fluido." },
    { t: "Irraggiamento", d: "Propagazione del calore come radiazione, anche nel vuoto." },
    { t: "Conduttore termico", d: "Materiale che il calore attraversa facilmente (es. i metalli)." },
    { t: "Isolante termico", d: "Materiale che il calore attraversa con difficoltà (es. lana, legno)." },
    { t: "Dilatazione termica", d: "Aumento di dimensioni di un corpo quando si scalda." },
    { t: "Zero assoluto", d: "La temperatura più bassa possibile: −273,15 °C (0 K)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è la temperatura?", options: ["Un tipo di energia che passa da un corpo all'altro", "La misura di quanto un corpo è caldo o freddo", "Un tipo di termometro"], answer: 1, explain: "Il calore è l'energia che passa; la temperatura è la misura." },
      { type: "tf", q: "Toccando il metallo freddo, il freddo passa nella nostra mano.", answer: false, explain: "È il calore della mano che passa nel metallo." },
      { type: "num", q: "Qual è la temperatura normale del corpo umano, in gradi Celsius (arrotonda all'unità)?", answer: 37, unit: "°C", tol: 1, explain: "Circa 36–37 °C." },
      { type: "mc", q: "Quale materiale è il miglior conduttore di calore?", options: ["Lana", "Rame", "Polistirolo"], answer: 1, explain: "I metalli come il rame conducono molto bene." },
      { type: "mc", q: "Il termosifone scalda l'aria di tutta la stanza soprattutto per…", options: ["conduzione", "convezione", "dilatazione"], answer: 1, explain: "L'aria calda sale, quella fredda scende: correnti convettive." },
      { type: "num", q: "Di mattina ci sono −2 °C; a mezzogiorno la temperatura sale di 9 gradi. Quanti gradi ci sono a mezzogiorno?", answer: 7, unit: "°C", explain: "−2 + 9 = 7 °C." },
      { type: "text", q: "Come si chiama l'aumento di volume di un corpo che si scalda?", answer: ["dilatazione", "dilatazione termica", "la dilatazione"], explain: "La dilatazione termica." },
      { type: "order", q: "Metti in ordine dalla temperatura più bassa alla più alta.", items: ["Freezer di casa", "Ghiaccio che fonde", "Stanza confortevole", "Corpo umano", "Acqua che bolle"], explain: "−18 °C, 0 °C, 20 °C, 37 °C, 100 °C." },
      { type: "mc", q: "Chi costruì il termoscopio verso il 1593?", options: ["Anders Celsius", "Galileo Galilei", "Daniel Fahrenheit"], answer: 1, explain: "Galileo Galilei, a Padova." },
      { type: "tf", q: "Il calore del Sole può attraversare il vuoto dello spazio.", answer: true, explain: "Viaggia per irraggiamento, che non ha bisogno di materia." },
      { type: "mc", q: "Perché si mettono più maglie leggere invece di una pesante?", options: ["Perché fra gli strati resta aria ferma, che isola", "Perché i vestiti producono calore", "Perché la lana conduce il calore"], answer: 0, explain: "L'aria ferma è un ottimo isolante e trattiene il calore del corpo." },
      { type: "num", q: "In un giorno d'inverno ci sono 3 °C; di notte la temperatura scende di 8 gradi. Quanti gradi ci sono di notte?", answer: -5, unit: "°C", explain: "3 − 8 = −5 °C." }
    ]
  }
});
