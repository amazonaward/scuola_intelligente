TOPIC('it', {
  id: "p1-ing-numbers-10",
  title: "Numbers 1–10",
  intro: "<b>One, two, three!</b> 1️⃣2️⃣3️⃣ Oggi impariamo a <b>contare fino a 10 in inglese</b>. I numeri si dicono <b>numbers</b> (si legge <i>nàmbers</i>). Con loro potrai dire quanti anni hai, contare i giochi e fare la conta in inglese! 🖐️🖐️",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "I numeri da 1 a 10",
      html: `<table>
<tr><th>Numero</th><th>Inglese</th><th>Si pronuncia</th><th>Quanti</th></tr>
<tr><td>0</td><td><b>zero</b></td><td>zìrou</td><td>niente</td></tr>
<tr><td>1</td><td><b>one</b></td><td>uàn</td><td>⭐</td></tr>
<tr><td>2</td><td><b>two</b></td><td>tu</td><td>⭐⭐</td></tr>
<tr><td>3</td><td><b>three</b></td><td>thrii</td><td>⭐⭐⭐</td></tr>
<tr><td>4</td><td><b>four</b></td><td>fòor</td><td>⭐⭐⭐⭐</td></tr>
<tr><td>5</td><td><b>five</b></td><td>fàiv</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>6</td><td><b>six</b></td><td>siks</td><td>⭐⭐⭐⭐⭐⭐</td></tr>
<tr><td>7</td><td><b>seven</b></td><td>sèven</td><td>⭐⭐⭐⭐⭐⭐⭐</td></tr>
<tr><td>8</td><td><b>eight</b></td><td>èit</td><td>⭐⭐⭐⭐⭐⭐⭐⭐</td></tr>
<tr><td>9</td><td><b>nine</b></td><td>nàin</td><td>⭐⭐⭐⭐⭐⭐⭐⭐⭐</td></tr>
<tr><td>10</td><td><b>ten</b></td><td>ten</td><td>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</td></tr>
</table>
<p>🗣️ «Three» si dice mettendo la punta della lingua tra i denti: <b>th</b>-ree. Prova davanti allo specchio! 😛</p>`
    },
    {
      type: "svg",
      title: "Conta con le dita 🖐️",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f0fdf4"/>
<g fill="#fcd9b6" stroke="#c2410c" stroke-width="3">
<rect x="60" y="150" width="140" height="110" rx="30"/>
<rect x="62" y="70" width="24" height="95" rx="12"/>
<rect x="92" y="50" width="24" height="110" rx="12"/>
<rect x="122" y="45" width="24" height="115" rx="12"/>
<rect x="152" y="55" width="24" height="105" rx="12"/>
<rect x="190" y="150" width="60" height="24" rx="12" transform="rotate(-30 200 160)"/>
<rect x="350" y="150" width="140" height="110" rx="30"/>
<rect x="352" y="70" width="24" height="95" rx="12"/>
<rect x="382" y="50" width="24" height="110" rx="12"/>
<rect x="412" y="45" width="24" height="115" rx="12"/>
<rect x="442" y="55" width="24" height="105" rx="12"/>
<rect x="480" y="150" width="60" height="24" rx="12" transform="rotate(-30 490 160)"/>
</g>
<g font-size="18" font-weight="bold" fill="#166534" text-anchor="middle">
<text x="74" y="40">1</text><text x="104" y="30">2</text><text x="134" y="28">3</text><text x="164" y="36">4</text><text x="240" y="120">5</text>
<text x="364" y="40">6</text><text x="394" y="30">7</text><text x="424" y="28">8</text><text x="454" y="36">9</text><text x="530" y="120">10</text>
</g>
<text x="150" y="290" font-size="22" text-anchor="middle" fill="#0f172a" font-weight="bold">five</text>
<text x="420" y="290" font-size="22" text-anchor="middle" fill="#0f172a" font-weight="bold">ten</text>
</svg>`,
      caption: "Una mano = five (5). Due mani = ten (10). Conta ogni dito in inglese: one, two, three…"
    },
    {
      type: "widget",
      title: "Conta in inglese",
      widget: "counter",
      options: { emoji: "🎈", max: 10 },
      caption: "Aggiungi i palloncini uno alla volta e conta ad alta voce in inglese: one, two, three… fino a ten!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: quanti sono?",
      questions: [
        { type: "mc", q: "🍎🍎🍎 Quante mele? In inglese:", options: ["two", "three", "four"], answer: 1, explain: "Sono 3: three." },
        { type: "mc", q: "«Seven» è il numero…", options: ["6", "7", "8"], answer: 1, explain: "Seven = 7." },
        { type: "text", q: "Scrivi in inglese il numero 5", answer: ["five"], explain: "5 = five 🖐️." }
      ]
    },
    {
      type: "widget",
      title: "Gioco: abbina numero e parola",
      widget: "match",
      options: { pairs: [["1", "one"], ["2", "two"], ["4", "four"], ["6", "six"], ["8", "eight"], ["9", "nine"], ["10", "ten"]] },
      caption: "Tocca il numero e poi la sua parola inglese."
    },
    {
      type: "remember",
      title: "How many? How old?",
      html: `<p>❓ <b>How many?</b> (hau mèni) = Quanti?</p>
<p>«How many cats?» 🐱🐱 → «<b>Two</b> cats!»</p>
<p>⚠️ Quando sono più di uno, in inglese si aggiunge una <b>s</b>: one cat, two cat<b>s</b>; one dog, three dog<b>s</b>.</p>
<p>❓ <b>How old are you?</b> (hau òuld àr iu) = Quanti anni hai?</p>
<p>🎂 «<b>I'm six.</b>» = Ho sei anni. (letteralmente: «sono sei»!)</p>`
    },
    {
      type: "example",
      title: "Esempio: la festa di compleanno 🎂",
      html: `<p><b>Mamma:</b> Happy birthday, Lucy! How old are you?<br>
<b>Lucy:</b> I'm <b>seven</b>! 🎉<br>
<b>Mamma:</b> Let's count the candles! 🕯️<br>
<b>Tutti:</b> One, two, three, four, five, six, <b>seven</b>!<br>
<b>Lucy:</b> Fffff! 💨 (spegne le candeline)</p>`
    },
    {
      type: "example",
      title: "Esempio: il razzo parte! 🚀",
      html: `<p>Per far partire un razzo si conta <b>al contrario</b> (countdown):</p>
<p style="font-size:1.2em"><b>Ten, nine, eight, seven, six, five, four, three, two, one… zero! Blast off!</b> 🚀</p>
<p>Prova a dirlo tutto d'un fiato, poi salta in alto come un razzo!</p>`
    },
    {
      type: "widget",
      title: "La retta dei numeri",
      widget: "numberLine",
      options: { min: 0, max: 10, step: 1, marks: [3, 7] },
      caption: "Salta sulla retta e di' il numero in inglese a ogni salto. Dove sono three e seven?"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… «zero» è arrivato in Europa grazie a un italiano? 🇮🇹",
      html: `<p>Lo <b>zero</b> e le cifre che usiamo (0, 1, 2, 3…) sono state inventate in <b>India</b> e poi usate dagli <b>Arabi</b>. In Europa le ha fatte conoscere <b>Leonardo Fibonacci</b>, un matematico di <b>Pisa</b>, con il suo libro <i>Liber Abaci</i> del <b>1202</b>. Per questo si chiamano «cifre arabe» o «indo-arabe». Prima si usavano i numeri romani, che lo zero non ce l'avevano!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… «eleven» vuol dire «uno avanzato»? 🤔",
      html: `<p>Dopo ten, i numeri inglesi diventano strani: 11 è <b>eleven</b> e 12 è <b>twelve</b>. Nell'inglese antico volevano dire «<b>uno in più</b>» e «<b>due in più</b>» (oltre le dieci dita!). Dal 13 si ritorna regolari: thir<b>teen</b>, four<b>teen</b>… dove «teen» vuol dire «dieci».</p>`
    },
    {
      type: "3d",
      title: "Cubetti da contare 🧊",
      scene: "blocks",
      options: { mode: "array", a: 2, b: 5 },
      caption: "Ci sono 2 file da five: in tutto sono ten! Muovi i cursori e conta i cubetti in inglese."
    },
    {
      type: "alternatives",
      title: "Altri modi per imparare i numeri",
      intro: "<p>I numeri si possono cantare, contare sulle dita in modi diversi, toccare in 3D…</p>",
      tabs: [
        {
          label: "🎵 One, two, buckle my shoe",
          html: `<p>È una filastrocca inglese antichissima (ha più di 200 anni!):</p>
<p style="font-size:1.15em"><b>One, two</b>, buckle my shoe 👞<br><b>Three, four</b>, knock at the door 🚪<br><b>Five, six</b>, pick up sticks 🥢<br><b>Seven, eight</b>, lay them straight 📏<br><b>Nine, ten</b>, a big fat hen! 🐔</p>
<p>Ogni coppia di numeri fa rima con una frase: two-shoe, four-door, ten-hen. Fai i gesti mentre canti!</p>`
        },
        {
          label: "🖐️ Dita nel mondo",
          html: `<p>Non tutti contano con le dita nello stesso modo!</p>
<ul>
<li>🇮🇹 In Italia di solito si parte dal <b>pollice</b> 👍.</li>
<li>🇬🇧🇺🇸 In Inghilterra e in America spesso si parte dall'<b>indice</b> ☝️: per loro il pollice è il numero 5!</li>
<li>🇯🇵 In Giappone si parte con la mano aperta e si <b>chiudono</b> le dita una alla volta.</li>
<li>🇨🇳 In Cina si contano da 6 a 10 con <b>una mano sola</b>, con gesti speciali: 6 è 🤙 (pollice e mignolo)!</li>
</ul>
<p>Prova il modo inglese: «one» ☝️ «two» ✌️…</p>`
        },
        {
          label: "🧊 Con i cubetti 3D",
          html: `<p>Ten è una «decina»: <b>10 cubetti</b> messi in fila formano un bastoncino. Gira i cubetti e contali in inglese!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 10 }
        },
        {
          label: "🃏 Flashcards",
          html: `<p>Guarda le figure, conta e di' il numero in inglese. Poi gira la carta.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "🐶🐶", back: "two" },
            { front: "🍓🍓🍓🍓", back: "four" },
            { front: "⭐⭐⭐⭐⭐⭐", back: "six" },
            { front: "🐟🐟🐟🐟🐟🐟🐟🐟", back: "eight" },
            { front: "🎈🎈🎈🎈🎈🎈🎈🎈🎈", back: "nine" },
            { front: "🖐️🖐️", back: "ten" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa dei numbers",
      nodes: [
        { id: "num", label: "Numbers", x: 50, y: 8, color: "#8b5cf6", html: "<p>I numeri in inglese.</p>", why: "<p>Contare è una delle cose più antiche che sappiamo fare: già 20.000 anni fa le persone facevano tacche sulle ossa per contare.</p>" },
        { id: "zero", label: "zero", x: 12, y: 32, color: "#64748b", html: "<p>0 = niente.</p>", why: "<p>Inventato in India, portato in Europa da Fibonacci di Pisa nel 1202. La parola «zero» viene dall'arabo <i>sifr</i>, che vuol dire «vuoto».</p>" },
        { id: "one5", label: "one → five", x: 36, y: 32, color: "#22c55e", html: "<p>1, 2, 3, 4, 5: una mano.</p>", why: "<p>Questi numeri inglesi sono «cugini» di quelli tedeschi (eins, zwei, drei) e lontani parenti di quelli italiani (tre/three, sei/six, sette/seven).</p>" },
        { id: "six10", label: "six → ten", x: 64, y: 32, color: "#3b82f6", html: "<p>6, 7, 8, 9, 10: la seconda mano.</p>", why: "<p>Ten è la base del nostro modo di contare, perché abbiamo 10 dita. Per questo si chiama sistema <b>decimale</b>.</p>" },
        { id: "dita", label: "Le dita", x: 88, y: 32, color: "#f97316", html: "<p>10 dita = 10 numeri.</p>", why: "<p>Quasi tutti i popoli hanno iniziato a contare sulle dita: per questo tante lingue raggruppano i numeri a dieci a dieci.</p>" },
        { id: "many", label: "How many?", x: 30, y: 66, color: "#eab308", html: "<p>Quanti? → Three cats.</p>", why: "<p>In inglese il plurale si fa quasi sempre aggiungendo <b>-s</b>: cat → cats. In italiano invece cambia la vocale finale: gatto → gatti.</p>" },
        { id: "old", label: "How old are you?", x: 70, y: 66, color: "#ec4899", html: "<p>Quanti anni hai? → I'm six.</p>", why: "<p>In inglese l'età si dice con il verbo «essere» (I am six), non con «avere» come in italiano (ho sei anni).</p>" },
        { id: "teen", label: "eleven, twelve…", x: 50, y: 92, color: "#14b8a6", html: "<p>Dopo ten: eleven, twelve, thirteen…</p>", why: "<p>Eleven e twelve vengono dall'inglese antico e vogliono dire «uno avanzato» e «due avanzati» dopo il dieci.</p>" }
      ],
      edges: [
        ["num", "zero", ""], ["num", "one5", ""], ["num", "six10", ""], ["one5", "dita", ""], ["six10", "dita", "due mani"], ["one5", "many", "per contare"], ["six10", "old", "per l'età"], ["six10", "teen", "poi"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: conta!",
      questions: [
        { type: "num", q: "«Four» + «four» = ? (scrivi la cifra)", answer: 8, explain: "4 + 4 = 8, cioè eight." },
        { type: "mc", q: "«How old are you?» vuol dire…", options: ["Quanti anni hai?", "Come stai?", "Quanti gatti?"], answer: 0, explain: "Old = vecchio/anni: quanti anni hai?" },
        { type: "order", q: "Metti in ordine dal più piccolo al più grande:", items: ["two", "five", "seven", "ten"], explain: "2, 5, 7, 10." }
      ]
    }
  ],
  glossary: [
    { t: "Numbers", d: "Numeri." },
    { t: "One, two, three, four, five", d: "Uno, due, tre, quattro, cinque." },
    { t: "Six, seven, eight, nine, ten", d: "Sei, sette, otto, nove, dieci." },
    { t: "Zero", d: "Zero, niente." },
    { t: "How many?", d: "Quanti?" },
    { t: "How old are you?", d: "Quanti anni hai?" },
    { t: "I'm six", d: "Ho sei anni." },
    { t: "Countdown", d: "Conto alla rovescia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "«Two» è il numero…", options: ["2", "3", "10"], answer: 0, explain: "Two = 2." },
      { type: "text", q: "Scrivi in inglese il numero 3", answer: ["three"], explain: "3 = three." },
      { type: "mc", q: "🐱🐱🐱🐱 How many cats?", options: ["four cats", "five cats", "three cats"], answer: 0, explain: "Sono 4: four cats." },
      { type: "num", q: "Scrivi la cifra di «nine»", answer: 9, explain: "Nine = 9." },
      { type: "tf", q: "«Eight» vuol dire otto.", answer: true, explain: "Eight = 8." },
      { type: "mc", q: "Come si dice «ho sette anni»?", options: ["I'm seven.", "I have seven.", "My seven."], answer: 0, explain: "In inglese: I'm seven (sono sette)." },
      { type: "order", q: "Countdown! Metti in ordine dal più grande al più piccolo:", items: ["ten", "eight", "six", "four", "two"], explain: "10, 8, 6, 4, 2: si conta all'indietro." },
      { type: "num", q: "«Five» + «five» = ? (scrivi la cifra)", answer: 10, explain: "5 + 5 = 10: ten, due mani!" },
      { type: "mc", q: "Quale numero viene dopo «six»?", options: ["five", "seven", "eight"], answer: 1, explain: "Six (6) → seven (7)." },
      { type: "tf", q: "Al plurale si dice «two dog».", answer: false, explain: "Si aggiunge la s: two dogs." },
      { type: "text", q: "Scrivi in inglese il numero 10", answer: ["ten"], explain: "10 = ten." },
      { type: "mc", q: "Chi ha portato lo zero in Europa?", options: ["Fibonacci di Pisa", "Isaac Newton", "Cristoforo Colombo"], answer: 0, explain: "Leonardo Fibonacci, nel 1202, con il Liber Abaci." }
    ]
  }
});
