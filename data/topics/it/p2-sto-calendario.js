TOPIC('it', {
  id: "p2-sto-calendario",
  title: "Il calendario",
  intro: "Quando è il tuo compleanno? 🎂 Quanti giorni mancano alle vacanze? 🏖️ Il <b>calendario</b> ci aiuta a contare il tempo lungo: <b>giorni</b>, <b>settimane</b>, <b>mesi</b>, <b>stagioni</b> e <b>anni</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Il giorno e la settimana",
      html: `<p>Un <b>giorno</b> dura <b>24 ore</b>: c'è la parte di luce (il dì) e la parte di buio (la notte). 🌞🌙</p>
<p><b>7 giorni</b> formano una <b>settimana</b>:</p>
<p><b>lunedì – martedì – mercoledì – giovedì – venerdì – sabato – domenica</b></p>
<p>Poi si ricomincia da capo, come in un cerchio! 🔄</p>
<ul>
<li><b>Ieri</b> = il giorno prima di oggi.</li>
<li><b>Oggi</b> = il giorno in cui siamo.</li>
<li><b>Domani</b> = il giorno dopo oggi.</li>
</ul>`
    },
    {
      type: "svg",
      title: "La ruota della settimana",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<circle cx="300" cy="150" r="115" fill="none" stroke="#c4b5fd" stroke-width="10"/>
<g font-size="17" font-weight="bold" text-anchor="middle">
<circle cx="300" cy="35" r="34" fill="#fecaca"/><text x="300" y="41" fill="#7f1d1d">lunedì</text>
<circle cx="390" cy="78" r="34" fill="#fed7aa"/><text x="390" y="84" fill="#7c2d12">martedì</text>
<circle cx="412" cy="175" r="34" fill="#fef08a"/><text x="412" y="181" fill="#713f12">mercoledì</text>
<circle cx="350" cy="255" r="34" fill="#bbf7d0"/><text x="350" y="261" fill="#14532d">giovedì</text>
<circle cx="250" cy="255" r="34" fill="#bae6fd"/><text x="250" y="261" fill="#0c4a6e">venerdì</text>
<circle cx="188" cy="175" r="34" fill="#c7d2fe"/><text x="188" y="181" fill="#312e81">sabato</text>
<circle cx="210" cy="78" r="34" fill="#f5d0fe"/><text x="210" y="84" fill="#701a75">domenica</text>
</g>
<text x="300" y="145" font-size="24" text-anchor="middle" fill="#5b21b6" font-weight="bold">7 giorni</text>
<text x="300" y="172" font-size="20" text-anchor="middle" fill="#5b21b6">e poi si ricomincia ↻</text>
</svg>`,
      caption: "Dopo la domenica torna il lunedì: la settimana è un ciclo."
    },
    {
      type: "text",
      title: "I 12 mesi dell'anno",
      html: `<p>Un <b>anno</b> ha <b>12 mesi</b>:</p>
<p>gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre.</p>
<p>I mesi non sono tutti lunghi uguali. Una filastrocca ci aiuta:</p>
<p>🎵 <i>«Trenta giorni ha novembre, con april, giugno e settembre. Di ventotto ce n'è uno, tutti gli altri ne han trentuno.»</i></p>
<p>Il mese corto è <b>febbraio</b>: ha 28 giorni, ma ogni 4 anni ne ha <b>29</b>!</p>`
    },
    {
      type: "widget",
      title: "Quanti giorni ha il mese?",
      widget: "classify",
      options: {
        groups: ["30 giorni", "31 giorni", "28 o 29 giorni"],
        items: [
          ["gennaio", 1], ["febbraio", 2], ["marzo", 1], ["aprile", 0],
          ["maggio", 1], ["giugno", 0], ["luglio", 1], ["agosto", 1],
          ["settembre", 0], ["ottobre", 1], ["novembre", 0], ["dicembre", 1]
        ]
      },
      caption: "Ripeti la filastrocca o usa il trucco delle nocche (lo trovi più sotto)!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: giorni e mesi",
      questions: [
        { type: "num", q: "Quanti giorni ha una settimana?", answer: 7, explain: "Lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica: 7 giorni." },
        { type: "mc", q: "Se oggi è mercoledì, domani è…", options: ["martedì", "giovedì", "venerdì"], answer: 1, explain: "Dopo mercoledì viene giovedì." },
        { type: "mc", q: "Quale mese ha 28 o 29 giorni?", options: ["Febbraio", "Aprile", "Agosto"], answer: 0, explain: "Febbraio è il mese più corto." }
      ]
    },
    {
      type: "text",
      title: "Le quattro stagioni",
      html: `<p>L'anno è diviso anche in <b>4 stagioni</b>, ognuna di circa 3 mesi:</p>
<ul>
<li>🌸 <b>Primavera</b>: dal 21 marzo circa. Le giornate si allungano, sbocciano i fiori.</li>
<li>☀️ <b>Estate</b>: dal 21 giugno circa. Fa caldo, le giornate sono le più lunghe.</li>
<li>🍂 <b>Autunno</b>: dal 23 settembre circa. Cadono le foglie, si raccoglie l'uva.</li>
<li>❄️ <b>Inverno</b>: dal 21 dicembre circa. Fa freddo, le giornate sono le più corte.</li>
</ul>
<p>Le stagioni ci sono perché la Terra gira intorno al Sole <b>inclinata</b>: per metà anno il nostro emisfero riceve i raggi più dritti (fa caldo), per l'altra metà più storti (fa freddo).</p>`
    },
    {
      type: "svg",
      title: "L'anno in un cerchio",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<path d="M300 160 L300 20 A140 140 0 0 1 440 160 Z" fill="#bbf7d0" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L440 160 A140 140 0 0 1 300 300 Z" fill="#fde68a" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L300 300 A140 140 0 0 1 160 160 Z" fill="#fdba74" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L160 160 A140 140 0 0 1 300 20 Z" fill="#bfdbfe" stroke="#ffffff" stroke-width="4"/>
<text x="360" y="95" font-size="34" text-anchor="middle">🌸</text>
<text x="360" y="245" font-size="34" text-anchor="middle">☀️</text>
<text x="240" y="245" font-size="34" text-anchor="middle">🍂</text>
<text x="240" y="95" font-size="34" text-anchor="middle">❄️</text>
<text x="470" y="60" font-size="18" fill="#166534" font-weight="bold">primavera</text>
<text x="470" y="82" font-size="15" fill="#166534">mar · apr · mag</text>
<text x="470" y="260" font-size="18" fill="#a16207" font-weight="bold">estate</text>
<text x="470" y="282" font-size="15" fill="#a16207">giu · lug · ago</text>
<text x="20" y="260" font-size="18" fill="#c2410c" font-weight="bold">autunno</text>
<text x="20" y="282" font-size="15" fill="#c2410c">set · ott · nov</text>
<text x="20" y="60" font-size="18" fill="#1d4ed8" font-weight="bold">inverno</text>
<text x="20" y="82" font-size="15" fill="#1d4ed8">dic · gen · feb</text>
<circle cx="300" cy="160" r="30" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
<text x="300" y="167" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">anno</text>
</svg>`,
      caption: "Le 4 stagioni si ripetono ogni anno, sempre nello stesso ordine (i mesi indicati sono approssimativi: le stagioni cominciano verso il 21 del mese)."
    },
    {
      type: "remember",
      title: "I numeri del calendario",
      html: `<ul>
<li>1 <b>settimana</b> = 7 giorni</li>
<li>1 <b>mese</b> = 28, 29, 30 o 31 giorni (circa 4 settimane)</li>
<li>1 <b>anno</b> = 12 mesi = <b>365 giorni</b></li>
<li>ogni 4 anni c'è l'anno <b>bisestile</b>, con <b>366 giorni</b> (il 29 febbraio). I prossimi: <b>2028</b>, 2032…</li>
<li>1 <b>stagione</b> = circa 3 mesi; 4 stagioni in un anno.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio: quanto manca al compleanno? 🎂",
      html: `<p>Oggi è il <b>10 marzo</b>. Il compleanno di Sofia è il <b>17 marzo</b>.</p>
<p>Conto sul calendario: 11, 12, 13, 14, 15, 16, 17 → mancano <b>7 giorni</b>, cioè <b>una settimana</b>!</p>
<p>Se oggi è martedì, anche il compleanno sarà di martedì (7 giorni dopo si torna allo stesso giorno della settimana).</p>`
    },
    {
      type: "example",
      title: "Esempio: come si scrive la data ✏️",
      html: `<p>In Italia la data si scrive: <b>giorno – mese – anno</b>.</p>
<ul>
<li>A parole: <b>martedì 3 novembre 2026</b>;</li>
<li>con i numeri: <b>3/11/2026</b> (11 perché novembre è l'<b>11°</b> mese).</li>
</ul>
<p>Sul quaderno, ogni mattina, scriviamo la data in alto: così sappiamo quando abbiamo fatto ogni lavoro.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? I nomi dei giorni vengono dal cielo",
      html: `<p>I Romani diedero ai giorni i nomi degli <b>astri</b> che vedevano muoversi nel cielo:</p>
<ul>
<li><b>lunedì</b> = giorno della <b>Luna</b> 🌙; <b>martedì</b> = di <b>Marte</b>; <b>mercoledì</b> = di <b>Mercurio</b>; <b>giovedì</b> = di <b>Giove</b>; <b>venerdì</b> = di <b>Venere</b>.</li>
<li><b>sabato</b> viene dall'ebraico <i>shabbat</i>, il giorno del riposo; <b>domenica</b> dal latino <i>dies Dominica</i>, il «giorno del Signore».</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Settembre era il settimo mese",
      html: `<p>Il primo calendario di Roma cominciava a <b>marzo</b>. Per questo <b>sett</b>embre era il 7° mese, <b>ott</b>obre l'8°, <b>nov</b>embre il 9° e <b>dic</b>embre il 10°!</p>
<p>Poi l'anno cominciò a gennaio e i nomi rimasero «sbagliati». <b>Luglio</b> si chiama così in onore di <b>Giulio Cesare</b> e <b>agosto</b> in onore dell'imperatore <b>Augusto</b>.</p>`
    },
    {
      type: "3d",
      title: "Viaggio nel tempo: la storia del calendario",
      scene: "spacetime",
      caption: "La mappa è la base, l'altezza è il tempo: più un evento è in alto, più è recente. Tocca gli eventi e segui le frecce da causa a effetto.",
      options: {
        lat: [20, 60],
        lon: [-10, 50],
        years: [-3000, 2000],
        places: [
          { lat: 30.05, lon: 31.23, label: "Egitto" },
          { lat: 32.54, lon: 44.42, label: "Babilonia" },
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 24.47, lon: 39.61, label: "Medina" },
          { lat: 55.75, lon: 37.6, label: "Mosca" }
        ],
        events: [
          { id: "egizi", lat: 29.9, lon: 31.2, year: -2800, label: "L'anno egizio di 365 giorni", html: "Gli Egizi osservano che le piene del Nilo tornano ogni 365 giorni circa. Creano un calendario di <b>12 mesi di 30 giorni</b> più <b>5 giorni di festa</b>: 365 in tutto!" },
          { id: "settimana", lat: 32.54, lon: 44.42, year: -600, label: "La settimana di 7 giorni", html: "Tra i Babilonesi e gli Ebrei si diffonde la <b>settimana di 7 giorni</b>. Forse viene dalla Luna: ogni sua fase (nuova, crescente, piena, calante) dura circa 7 giorni." },
          { id: "romolo", lat: 41.9, lon: 12.5, year: -753, label: "Il calendario di Romolo", html: "Secondo la leggenda, Romolo dà a Roma un calendario di <b>10 mesi</b> che comincia a <b>marzo</b>. Più tardi il re Numa aggiunge gennaio e febbraio." },
          { id: "cesare", lat: 41.89, lon: 12.49, year: -46, label: "Giulio Cesare riforma il calendario", html: "Il calendario romano era pieno di errori. <b>Giulio Cesare</b>, consigliato dall'astronomo <b>Sosigene di Alessandria</b>, fa un anno di <b>365 giorni</b> con un giorno in più <b>ogni 4 anni</b> (l'anno bisestile). È il <b>calendario giuliano</b>.", causes: ["egizi", "romolo"] },
          { id: "agosto", lat: 41.91, lon: 12.48, year: -8, label: "Nasce il mese di agosto", html: "Il mese chiamato <i>Sextilis</i> (il sesto) prende il nome di <b>Augustus</b>, in onore del primo imperatore romano. Il mese di Giulio Cesare era già diventato <b>luglio</b>.", causes: ["cesare"] },
          { id: "dionigi", lat: 41.88, lon: 12.5, year: 525, label: "Gli anni dalla nascita di Cristo", html: "Il monaco <b>Dionigi il Piccolo</b>, a Roma, propone di contare gli anni partendo dalla nascita di Gesù. È per questo che oggi diciamo «avanti Cristo» (a.C.) e «dopo Cristo» (d.C.).", causes: ["cesare"] },
          { id: "egira", lat: 24.47, lon: 39.61, year: 622, label: "Il calendario islamico", html: "Il profeta <b>Maometto</b> si trasferisce dalla Mecca a Medina (l'<b>Egira</b>). Da quell'anno parte il calendario islamico, basato sulla <b>Luna</b>: 12 mesi lunari, circa <b>354 giorni</b>.", causes: ["settimana"] },
          { id: "gregorio", lat: 41.9, lon: 12.45, year: 1582, label: "Il calendario gregoriano", html: "Il calendario giuliano era un po' troppo lungo: in 1600 anni aveva accumulato <b>10 giorni</b> di ritardo sulle stagioni. Papa <b>Gregorio XIII</b>, con i calcoli del medico calabrese <b>Luigi Lilio</b>, decide che dopo giovedì <b>4 ottobre 1582</b> venga venerdì <b>15 ottobre</b>. È il calendario che usiamo oggi!", causes: ["cesare", "dionigi"] },
          { id: "russia", lat: 55.75, lon: 37.6, year: 1918, label: "La Russia cambia calendario", html: "La Russia usa ancora il calendario giuliano: per questo la «Rivoluzione d'ottobre» del 1917 per noi avvenne a <b>novembre</b>! Nel <b>1918</b> anche la Russia passa al calendario gregoriano, saltando 13 giorni.", causes: ["gregorio"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Roma, 1582: sei papa Gregorio XIII",
      html: `<p>Gli astronomi ti portano una brutta notizia: il calendario di Giulio Cesare è <b>un pochino troppo lungo</b> (circa 11 minuti all'anno). Sembra niente, ma dopo tanti secoli il calendario è <b>10 giorni in ritardo</b> rispetto al Sole!</p>
<p>La primavera vera comincia l'11 marzo invece del 21, e la festa di <b>Pasqua</b>, che si calcola dalla primavera, rischia di cadere nel giorno sbagliato.</p>`,
      question: "Che cosa decidi?",
      options: [
        { label: "Lasciamo tutto com'è: 10 giorni non sono un problema.", outcome: "Il ritardo continuerebbe a crescere: tra qualche migliaio di anni il Natale cadrebbe in autunno e poi in estate!" },
        { label: "Saltiamo 10 giorni una volta sola e cambiamo la regola degli anni bisestili.", outcome: "Per una volta il calendario «salta» in avanti e torna d'accordo con il Sole. Con una regola nuova (togliere 3 anni bisestili ogni 400 anni) l'errore diventa piccolissimo." },
        { label: "Aggiungiamo un mese intero in più ogni tanto.", outcome: "Il calendario diventerebbe disordinato: nessuno saprebbe più in che mese si trova, e i contratti e le feste andrebbero tutti rifatti." }
      ],
      answer: 1,
      explain: "Gregorio XIII scelse la seconda strada con la bolla <i>Inter gravissimas</i>: dopo <b>giovedì 4 ottobre 1582</b> venne subito <b>venerdì 15 ottobre</b>. Nuova regola: gli anni che finiscono con «00» sono bisestili solo se si dividono per 400 (il 2000 sì, il 1900 no). L'idea fu del medico calabrese <b>Luigi Lilio</b>. Italia, Spagna e Portogallo cambiarono subito; altri Paesi molto più tardi: l'Inghilterra nel 1752 e la Russia nel 1918. Il calendario gregoriano oggi è usato in quasi tutto il mondo."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il calendario",
      intro: "Il calendario si può imparare con le mani, con la Luna e con giochi diversi.",
      tabs: [
        {
          label: "✊ Il trucco delle nocche",
          html: `<p>Un trucco usato dai bambini di <b>tutto il mondo</b>: chiudi le mani a pugno e mettile vicine. Conta i mesi toccando le <b>nocche</b> (le punte) e gli <b>spazi</b> tra le nocche, da sinistra a destra:</p>
<ul>
<li>sulla <b>nocca</b> → mese da <b>31</b> giorni;</li>
<li>nello <b>spazio</b> → mese da <b>30</b> giorni (o febbraio).</li>
</ul>
<p>Gennaio (nocca), febbraio (spazio), marzo (nocca)… luglio (ultima nocca della prima mano), agosto (prima nocca dell'altra mano)!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fff7ed"/>
<path d="M30 140 Q30 60 70 60 Q90 40 110 60 Q130 40 150 60 Q170 40 190 60 Q210 40 230 60 Q270 60 270 140 Z" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<path d="M320 140 Q320 60 360 60 Q380 40 400 60 Q420 40 440 60 Q460 40 480 60 Q500 40 520 60 Q560 60 560 140 Z" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<g font-size="14" font-weight="bold" text-anchor="middle">
<text x="90" y="34" fill="#b91c1c">GEN</text><text x="110" y="95" fill="#1d4ed8">FEB</text><text x="130" y="34" fill="#b91c1c">MAR</text><text x="150" y="95" fill="#1d4ed8">APR</text>
<text x="170" y="34" fill="#b91c1c">MAG</text><text x="190" y="95" fill="#1d4ed8">GIU</text><text x="210" y="34" fill="#b91c1c">LUG</text>
<text x="380" y="34" fill="#b91c1c">AGO</text><text x="400" y="95" fill="#1d4ed8">SET</text><text x="420" y="34" fill="#b91c1c">OTT</text><text x="440" y="95" fill="#1d4ed8">NOV</text><text x="460" y="34" fill="#b91c1c">DIC</text>
</g>
<text x="300" y="185" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">rosso, sulla nocca = 31 giorni</text>
<text x="300" y="212" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">blu, nello spazio = 30 giorni (febbraio 28/29)</text>
</svg>`
        },
        {
          label: "🌙 Il calendario della Luna",
          html: `<p>Non tutti contano i mesi come noi. Il calendario <b>islamico</b> e quello <b>cinese</b> seguono la <b>Luna</b>: un mese va da una Luna nuova alla successiva, circa <b>29 giorni e mezzo</b>.</p>
<p>12 mesi lunari fanno circa 354 giorni, 11 in meno del nostro anno. Per questo il <b>Ramadan</b> ogni anno cade circa 11 giorni prima, e il <b>Capodanno cinese</b> cambia data ogni anno (tra il 21 gennaio e il 20 febbraio).</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🌑 Luna nuova", back: "Non si vede: inizia un nuovo mese lunare" },
              { front: "🌓 Primo quarto", back: "Dopo circa 7 giorni: mezza Luna" },
              { front: "🌕 Luna piena", back: "Dopo circa 15 giorni: tutta illuminata" },
              { front: "🌗 Ultimo quarto", back: "Dopo circa 22 giorni: di nuovo mezza" },
              { front: "📅 Mese lunare", back: "Circa 29 giorni e mezzo" }
            ]
          }
        },
        {
          label: "🌍 Le stagioni al contrario",
          html: `<p>Quando da noi è <b>inverno</b>, in <b>Australia</b>, in Argentina e in Sudafrica è <b>estate</b>! Perché? La Terra è inclinata: quando la metà nord è girata verso il Sole, la metà sud è girata dall'altra parte, e viceversa. In Australia molti festeggiano il <b>Natale in spiaggia</b> 🎄🏖️. Gira il globo e confronta.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Italia: a dicembre è inverno ❄️", color: "#2563eb" },
              { lat: -33.9, lon: 151.2, label: "Sydney: a dicembre è estate ☀️", color: "#f97316" },
              { lat: -34.6, lon: -58.4, label: "Buenos Aires: a dicembre è estate ☀️", color: "#f97316" },
              { lat: -33.9, lon: 18.4, label: "Città del Capo: a dicembre è estate ☀️", color: "#f97316" },
              { lat: 40.7, lon: -74, label: "New York: a dicembre è inverno ❄️", color: "#2563eb" }
            ]
          }
        },
        {
          label: "📜 La linea del tempo",
          html: `<p>Ripercorri sulla linea del tempo le tappe del calendario, dagli Egizi a oggi.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -2800, label: "Anno egizio di 365 giorni", icon: "🌊" },
              { year: -46, label: "Calendario di Giulio Cesare", icon: "🏛️" },
              { year: 525, label: "Gli anni dalla nascita di Cristo", icon: "✝️" },
              { year: 622, label: "Inizio del calendario islamico", icon: "🌙" },
              { year: 1582, label: "Calendario gregoriano", icon: "📅" },
              { year: 2028, label: "Prossimo anno bisestile", icon: "🐸" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del calendario: tocca i nodi e scopri il perché",
      nodes: [
        { id: "terra", label: "La Terra gira", x: 50, y: 6, color: "#0ea5e9", html: "La Terra ruota su sé stessa e gira intorno al Sole.", why: "Tutto il calendario nasce da tre movimenti del cielo: la Terra che gira su sé stessa (il giorno), la Luna che gira intorno alla Terra (il mese), la Terra che gira intorno al Sole (l'anno)." },
        { id: "giorno", label: "Giorno", x: 15, y: 30, color: "#eab308", html: "24 ore: un giro della Terra su sé stessa.", why: "Quando la nostra parte di Terra è rivolta verso il Sole è giorno, quando è girata dall'altra parte è notte. È il ritmo più semplice da vedere: per questo è la prima unità del calendario." },
        { id: "settimana", label: "Settimana", x: 15, y: 60, color: "#a855f7", html: "7 giorni, con i nomi degli astri.", why: "La settimana di 7 giorni viene dal Medio Oriente antico (Babilonesi ed Ebrei) e forse dalle fasi della Luna, che durano circa 7 giorni l'una. I Romani la adottarono dando ai giorni i nomi di Luna, Marte, Mercurio, Giove, Venere." },
        { id: "mese", label: "Mese", x: 50, y: 35, color: "#64748b", html: "28–31 giorni: all'origine un giro della Luna.", why: "«Mese» e «Luna» sono parenti: la Luna impiega circa 29 giorni e mezzo per tornare uguale. Il nostro calendario ha allungato un po' i mesi per farne stare 12 esatti nell'anno." },
        { id: "anno", label: "Anno", x: 85, y: 30, color: "#16a34a", html: "365 giorni (366 nei bisestili): un giro della Terra intorno al Sole.", why: "Un giro intorno al Sole dura circa <b>365 giorni e 6 ore</b>. Quelle 6 ore, dopo 4 anni, fanno un giorno intero: ecco perché ogni 4 anni c'è il 29 febbraio." },
        { id: "stagioni", label: "Stagioni", x: 85, y: 60, color: "#f97316", html: "Primavera, estate, autunno, inverno.", why: "L'asse della Terra è inclinato di circa 23 gradi e mezzo. Durante l'anno il nostro emisfero riceve i raggi del Sole più dritti (estate) o più obliqui (inverno). Non dipende dalla distanza dal Sole: a gennaio la Terra è anzi un po' più vicina!" },
        { id: "giuliano", label: "Calendario di Cesare", x: 35, y: 85, color: "#ef4444", html: "46 a.C.: 365 giorni e un bisestile ogni 4 anni.", why: "<b>Giulio Cesare</b> copiò l'idea dei 365 giorni dagli Egizi, con l'aiuto dell'astronomo <b>Sosigene di Alessandria</b>, e aggiunse il giorno bisestile." },
        { id: "gregoriano", label: "Calendario gregoriano", x: 70, y: 88, color: "#db2777", html: "1582: il calendario che usiamo oggi.", why: "L'anno vero è 11 minuti più corto di 365 giorni e 6 ore. Il calabrese <b>Luigi Lilio</b> trovò la correzione e papa <b>Gregorio XIII</b> la rese legge: si saltarono 10 giorni e si cambiò la regola dei bisestili." }
      ],
      edges: [
        ["terra", "giorno", "su sé stessa:"],
        ["terra", "anno", "intorno al Sole:"],
        ["terra", "mese", "la Luna gira:"],
        ["giorno", "settimana", "7 formano una"],
        ["mese", "anno", "12 formano un"],
        ["anno", "stagioni", "diviso in 4"],
        ["anno", "giuliano", "misurato dal"],
        ["giuliano", "gregoriano", "corretto dal"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: stagioni, anni e storia",
      questions: [
        { type: "mc", q: "Quale stagione viene dopo l'estate?", options: ["Primavera", "Autunno", "Inverno"], answer: 1, explain: "Primavera → estate → autunno → inverno." },
        { type: "num", q: "Quanti giorni ha un anno bisestile?", answer: 366, explain: "Ha un giorno in più: il 29 febbraio." },
        { type: "mc", q: "Il mese di luglio porta il nome di…", options: ["Giulio Cesare", "Augusto", "Romolo"], answer: 0, explain: "Luglio viene da Giulio (Iulius) Cesare." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>1 settimana = <b>7 giorni</b>; 1 anno = <b>12 mesi</b> = <b>365 giorni</b>.</li>
<li>«Trenta giorni ha novembre, con april, giugno e settembre…»</li>
<li>Ogni 4 anni c'è l'anno <b>bisestile</b> (366 giorni).</li>
<li>4 stagioni: <b>primavera, estate, autunno, inverno</b>.</li>
<li>Usiamo il calendario <b>gregoriano</b> (1582).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Calendario", d: "Sistema per dividere e contare il tempo in giorni, settimane, mesi e anni." },
    { t: "Settimana", d: "Gruppo di 7 giorni." },
    { t: "Mese", d: "Ognuna delle 12 parti dell'anno, da 28 a 31 giorni." },
    { t: "Anno", d: "365 giorni: il tempo che la Terra impiega per girare intorno al Sole." },
    { t: "Anno bisestile", d: "Anno di 366 giorni, con il 29 febbraio; arriva ogni 4 anni." },
    { t: "Stagione", d: "Ognuna delle 4 parti dell'anno con un clima diverso." },
    { t: "Data", d: "L'indicazione del giorno, del mese e dell'anno." },
    { t: "a.C. / d.C.", d: "Avanti Cristo / dopo Cristo: prima o dopo l'anno 1." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanti mesi ha un anno?", answer: 12, explain: "Da gennaio a dicembre: 12 mesi." },
      { type: "num", q: "Quanti giorni ha un anno normale?", answer: 365, explain: "Un anno normale ha 365 giorni." },
      { type: "order", q: "Metti in ordine i giorni della settimana.", items: ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"], explain: "La settimana italiana comincia dal lunedì." },
      { type: "order", q: "Metti in ordine le stagioni partendo dalla primavera.", items: ["primavera", "estate", "autunno", "inverno"], explain: "Le stagioni si ripetono sempre in quest'ordine." },
      { type: "mc", q: "Quanti giorni ha aprile?", options: ["30", "31", "28"], answer: 0, explain: "«Trenta giorni ha novembre, con april, giugno e settembre»." },
      { type: "mc", q: "Se oggi è venerdì, ieri era…", options: ["sabato", "giovedì", "domenica"], answer: 1, explain: "Prima del venerdì viene il giovedì." },
      { type: "tf", q: "Agosto ha 31 giorni.", answer: true, explain: "Agosto cade su una nocca: 31 giorni." },
      { type: "tf", q: "In Australia, quando da noi è inverno, è estate.", answer: true, explain: "Australia e Italia sono in emisferi diversi: le stagioni sono invertite." },
      { type: "text", q: "Come si chiama l'anno di 366 giorni?", answer: ["bisestile", "anno bisestile"], explain: "L'anno bisestile, con il 29 febbraio." },
      { type: "mc", q: "Il giorno «lunedì» prende il nome da…", options: ["la Luna", "il lunario", "un re"], answer: 0, explain: "Lunedì = giorno della Luna." },
      { type: "mc", q: "Chi creò, nel 1582, il calendario che usiamo oggi?", options: ["Giulio Cesare", "Papa Gregorio XIII", "Galileo Galilei"], answer: 1, explain: "Il calendario gregoriano, da papa Gregorio XIII." },
      { type: "num", q: "Oggi è il 5 maggio. Fra una settimana che giorno di maggio sarà?", answer: 12, explain: "5 + 7 = 12: il 12 maggio." }
    ]
  }
});
