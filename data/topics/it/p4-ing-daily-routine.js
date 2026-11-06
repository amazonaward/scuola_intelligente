TOPIC('it', {
  id: "p4-ing-daily-routine",
  title: "Daily routine",
  intro: "Good morning! ☀️ Ogni giorno facciamo più o meno le stesse cose: ci svegliamo, facciamo colazione, andiamo a scuola… In inglese questa \"giornata tipo\" si chiama <b>daily routine</b>. Impariamo i verbi della giornata, a <b>leggere l'orologio</b> in inglese e a raccontare la nostra giornata: <i>«I get up at seven o'clock.»</i> ⏰",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. I verbi della giornata",
      html: `<p>Ecco le azioni che facciamo quasi tutti i giorni, in ordine dalla mattina alla sera:</p>
<table>
<tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>
<tr><td>⏰ <b>wake up</b></td><td>uèik ap</td><td>svegliarsi</td></tr>
<tr><td>🛏️ <b>get up</b></td><td>ghet ap</td><td>alzarsi</td></tr>
<tr><td>🚿 <b>have a shower</b></td><td>hev a sciàuer</td><td>fare la doccia</td></tr>
<tr><td>🪥 <b>brush my teeth</b></td><td>brasc mai tiith</td><td>lavarsi i denti</td></tr>
<tr><td>👕 <b>get dressed</b></td><td>ghet drest</td><td>vestirsi</td></tr>
<tr><td>🥣 <b>have breakfast</b></td><td>hev brèkfast</td><td>fare colazione</td></tr>
<tr><td>🏫 <b>go to school</b></td><td>gou tu scuul</td><td>andare a scuola</td></tr>
<tr><td>🍝 <b>have lunch</b></td><td>hev lanc</td><td>pranzare</td></tr>
<tr><td>📚 <b>do my homework</b></td><td>du mai hòumuork</td><td>fare i compiti</td></tr>
<tr><td>⚽ <b>play with my friends</b></td><td>plei uith mai frends</td><td>giocare con gli amici</td></tr>
<tr><td>🍲 <b>have dinner</b></td><td>hev dìnner</td><td>cenare</td></tr>
<tr><td>😴 <b>go to bed</b></td><td>gou tu bed</td><td>andare a letto</td></tr>
</table>
<p>Hai notato? Il verbo <b>have</b> (avere) si usa per i pasti e per la doccia: <i>have breakfast, have lunch, have dinner, have a shower</i>. In italiano diciamo "fare", in inglese "avere"!</p>`
    },
    {
      type: "widget",
      title: "Flashcards: le azioni della giornata",
      widget: "flashcards",
      options: {
        cards: [
          { front: "⏰ wake up", back: "svegliarsi" },
          { front: "🛏️ get up", back: "alzarsi" },
          { front: "🚿 have a shower", back: "fare la doccia" },
          { front: "🪥 brush my teeth", back: "lavarmi i denti" },
          { front: "👕 get dressed", back: "vestirsi" },
          { front: "🥣 have breakfast", back: "fare colazione" },
          { front: "🏫 go to school", back: "andare a scuola" },
          { front: "🍝 have lunch", back: "pranzare" },
          { front: "📚 do my homework", back: "fare i compiti" },
          { front: "🍲 have dinner", back: "cenare" },
          { front: "😴 go to bed", back: "andare a letto" }
        ]
      },
      caption: "Leggi ad alta voce la frase inglese e mima l'azione, poi gira la carta."
    },
    {
      type: "text",
      title: "2. What time is it? Che ore sono?",
      html: `<p>Per chiedere l'ora si dice <b>What time is it?</b> (uòt taim is it?). Si risponde con <b>It's…</b> (È / Sono…).</p>
<ul>
<li>🕖 Ora esatta: <b>It's seven o'clock.</b> = Sono le sette. (<i>o'clock</i> si usa solo con l'ora esatta)</li>
<li>🕢 E mezza: <b>It's half past seven.</b> = Sono le sette e mezza. (<i>half</i> = metà, <i>past</i> = dopo)</li>
<li>🕖 E un quarto: <b>It's quarter past seven.</b> = Sono le sette e un quarto.</li>
<li>🕖 Meno un quarto: <b>It's quarter to eight.</b> = Sono le otto meno un quarto. (<i>to</i> = verso, manca poco a…)</li>
<li>🕖 Minuti: <b>It's ten past seven</b> (7:10) · <b>It's twenty to eight</b> (7:40).</li>
</ul>
<p><b>Il trucco:</b> nella <b>metà destra</b> dell'orologio (da 1 a 30 minuti) usi <b>past</b>; nella <b>metà sinistra</b> (da 31 a 59 minuti) usi <b>to</b> e conti i minuti che mancano all'ora dopo.</p>
<p>C'è anche il modo "digitale", più facile: si leggono i numeri così come sono. 7:30 → <b>seven thirty</b>; 7:15 → <b>seven fifteen</b>; 7:45 → <b>seven forty-five</b>.</p>`
    },
    {
      type: "svg",
      title: "Past e to sull'orologio",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0f9ff"/>
<path d="M300 160 L300 30 A130 130 0 0 1 300 290 Z" fill="#bbf7d0"/>
<path d="M300 160 L300 290 A130 130 0 0 1 300 30 Z" fill="#fecaca"/>
<circle cx="300" cy="160" r="130" fill="none" stroke="#1e293b" stroke-width="6"/>
<g font-size="20" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="300" y="56">12</text><text x="365" y="73">1</text><text x="410" y="118">2</text><text x="420" y="167">3</text><text x="410" y="218">4</text><text x="365" y="262">5</text>
<text x="300" y="280">6</text><text x="235" y="262">7</text><text x="190" y="218">8</text><text x="180" y="167">9</text><text x="190" y="118">10</text><text x="235" y="73">11</text>
</g>
<line x1="300" y1="160" x2="300" y2="60" stroke="#1d4ed8" stroke-width="6" stroke-linecap="round"/>
<line x1="300" y1="160" x2="350" y2="160" stroke="#b91c1c" stroke-width="8" stroke-linecap="round"/>
<circle cx="300" cy="160" r="8" fill="#1e293b"/>
<text x="480" y="60" font-size="30" font-weight="bold" fill="#15803d" text-anchor="middle">PAST</text>
<text x="480" y="90" font-size="16" fill="#15803d" text-anchor="middle">minuti DOPO l'ora</text>
<text x="480" y="160" font-size="18" fill="#15803d" text-anchor="middle">:15 quarter past</text>
<text x="480" y="270" font-size="18" fill="#1e293b" text-anchor="middle">:30 half past</text>
<text x="110" y="60" font-size="30" font-weight="bold" fill="#b91c1c" text-anchor="middle">TO</text>
<text x="110" y="90" font-size="16" fill="#b91c1c" text-anchor="middle">minuti che MANCANO</text>
<text x="110" y="160" font-size="18" fill="#b91c1c" text-anchor="middle">:45 quarter to</text>
<text x="300" y="20" font-size="16" fill="#1e293b" text-anchor="middle">:00 o'clock</text>
<text x="300" y="315" font-size="18" fill="#1e293b" text-anchor="middle" font-weight="bold">It's quarter past twelve (12:15)</text>
</svg>`,
      caption: "Metà verde: past (minuti dopo l'ora). Metà rossa: to (minuti che mancano all'ora successiva)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: verbi e orologio",
      questions: [
        { type: "mc", q: "Come si dice «fare colazione» in inglese?", options: ["have breakfast", "make breakfast time", "do lunch"], answer: 0, explain: "Fare colazione = have breakfast: per i pasti si usa il verbo have." },
        { type: "mc", q: "Le 8:30 si dicono…", options: ["half to eight", "half past eight", "eight o'clock"], answer: 1, explain: "Mezz'ora dopo le otto: half past eight." },
        { type: "mc", q: "«It's quarter to nine» significa…", options: ["9:15", "8:45", "9:45"], answer: 1, explain: "Manca un quarto d'ora alle nove: sono le 8:45." },
        { type: "tf", q: "«O'clock» si usa solo con l'ora esatta.", answer: true, explain: "Sì: seven o'clock = 7:00. Con i minuti non si usa." }
      ]
    },
    {
      type: "text",
      title: "3. Raccontare la giornata: il present simple",
      html: `<p>Per le azioni che facciamo <b>sempre, ogni giorno</b> l'inglese usa il <b>present simple</b>. Per dire l'ora si usa <b>at</b>:</p>
<p>🕖 <b>I get up at seven o'clock.</b> = Mi alzo alle sette.<br>
🏫 <b>I go to school at eight.</b> = Vado a scuola alle otto.<br>
😴 <b>I go to bed at nine.</b> = Vado a letto alle nove.</p>
<p><b>Attenzione alla terza persona!</b> Con <b>he</b> (lui), <b>she</b> (lei), <b>it</b> il verbo prende una <b>-s</b>:</p>
<ul>
<li>I get up → <b>he gets up</b></li>
<li>I play → <b>she plays</b></li>
<li>I go → <b>he goes</b> (verbi che finiscono in -o, -sh, -ch prendono <b>-es</b>: go → goes, brush → brushes, watch → watches)</li>
<li>I have → <b>she has</b> (questo è irregolare!)</li>
</ul>
<p>Per dire <b>quando</b>: <b>in the morning</b> (di mattina), <b>in the afternoon</b> (di pomeriggio), <b>in the evening</b> (di sera), ma <b>at night</b> (di notte).</p>
<p>Per dire <b>quanto spesso</b>: <b>always</b> (sempre), <b>usually</b> (di solito), <b>sometimes</b> (a volte), <b>never</b> (mai). Si mettono <b>prima</b> del verbo: <i>I always have breakfast.</i></p>`
    },
    {
      type: "widget",
      title: "Morning, afternoon or evening?",
      widget: "classify",
      options: {
        groups: ["🌅 in the morning", "🌤️ in the afternoon", "🌙 in the evening / at night"],
        items: [
          ["⏰ wake up", 0],
          ["🥣 have breakfast", 0],
          ["👕 get dressed", 0],
          ["🏫 go to school", 0],
          ["📚 do my homework", 1],
          ["⚽ play with my friends", 1],
          ["🍲 have dinner", 2],
          ["📺 watch TV", 2],
          ["😴 go to bed", 2]
        ]
      },
      caption: "Metti ogni azione nel momento della giornata in cui la fai di solito (in Italia!)."
    },
    {
      type: "example",
      title: "Esempio pratico: My day (la giornata di Luca)",
      html: `<p><i>Hi! I'm Luca and I'm nine. I <b>wake up</b> at seven o'clock. I <b>get up</b>, I <b>have a shower</b> and I <b>get dressed</b>. I <b>have breakfast</b> at half past seven: I usually have milk and biscuits. 🥛🍪 I <b>go to school</b> at quarter past eight. I <b>have lunch</b> at school at half past twelve. In the afternoon I <b>do my homework</b> and then I <b>play</b> with my friends. I <b>have dinner</b> at eight o'clock and I <b>go to bed</b> at half past nine. Good night! 🌙</i></p>
<p>Prova a riscrivere il testo parlando di te: cambia solo gli orari e le cose che fai!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: dialogo con la nonna inglese",
      html: `<p><b>Granny:</b> What time do you get up, Sofia?<br>
<b>Sofia:</b> I get up at seven o'clock.<br>
<b>Granny:</b> And what time do you go to school?<br>
<b>Sofia:</b> At quarter past eight. My brother goes to school at eight. 🚌<br>
<b>Granny:</b> Do you have lunch at school?<br>
<b>Sofia:</b> Yes, I do! I have lunch at half past twelve.<br>
<b>Granny:</b> What time is it now?<br>
<b>Sofia:</b> It's nine o'clock… Time for bed! 😴</p>
<p>Nota: la domanda si fa con <b>What time do you…?</b> (A che ora…?) e si risponde con <b>at</b> + ora. Per il fratello (he) Sofia dice <b>goes</b>, con la -es.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? O'clock",
      html: `<p><b>O'clock</b> è l'abbreviazione di <b>"of the clock"</b>, cioè "dell'orologio". Secoli fa si diceva "seven of the clock" per distinguere l'ora dell'orologio meccanico da quella della meridiana. Con il tempo la frase si è accorciata in <i>o'clock</i>!</p>
<p>E <b>Big Ben</b>, a Londra, non è il nome della torre ma della <b>campana</b> più grande dentro la torre, che suona le ore dal 1859. La torre dal 2012 si chiama <b>Elizabeth Tower</b>. 🔔</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le giornate dei bambini inglesi",
      html: `<p>In Inghilterra la scuola di solito comincia verso le <b>8:45–9:00</b> e finisce verso le <b>15:00–15:30</b>, dal lunedì al venerdì. Quasi tutti pranzano a scuola: c'è chi mangia alla mensa (<i>school dinner</i>) e chi porta da casa il <b>packed lunch</b> nella sua lunchbox. 🥪🍎</p>
<p>Molti bambini indossano la <b>uniform</b> (divisa) con maglione e cravatta del colore della scuola. E la cena (<i>dinner</i> o <i>tea</i>) spesso è verso le 18:00, molto prima che in Italia!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>What time is it?</b> → <b>It's</b> … o'clock / half past … / quarter past … / quarter to …</li>
<li><b>Past</b> = minuti dopo l'ora (fino a 30); <b>to</b> = minuti che mancano all'ora dopo.</li>
<li>Per dire a che ora fai una cosa: <b>at</b> + ora → <i>I get up at seven.</i></li>
<li>Pasti e doccia con <b>have</b>: have breakfast / lunch / dinner / a shower.</li>
<li>Con <b>he / she / it</b> il verbo prende la <b>-s</b>: she gets up, he goes, she has.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'ora e la routine",
      intro: "Leggere l'orologio in inglese ti sembra difficile? Ecco altre strade: il sistema am/pm degli inglesi, la pizza delle frazioni, l'ora digitale, i confronti con altre lingue e un gioco di abbinamenti.",
      tabs: [
        {
          label: "🇬🇧 am e pm",
          html: `<p>In Italia diciamo spesso "le 15" o "le 21" (orologio di <b>24 ore</b>). Gli inglesi e gli americani nella vita di tutti i giorni usano l'orologio di <b>12 ore</b> e aggiungono:</p>
<ul>
<li><b>am</b> (dal latino <i>ante meridiem</i> = prima di mezzogiorno): dalla mezzanotte a mezzogiorno → 7 am = 7 del mattino;</li>
<li><b>pm</b> (<i>post meridiem</i> = dopo mezzogiorno): da mezzogiorno a mezzanotte → 7 pm = le 19.</li>
</ul>
<p>Trucco: per passare da pm a "ora italiana" aggiungi 12. 3 pm → 3 + 12 = <b>15</b>. 9 pm → <b>21</b>.</p>
<p>A voce si dice anche <i>in the morning</i> / <i>in the afternoon</i> / <i>in the evening</i>: "It's three o'clock in the afternoon".</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<rect x="30" y="60" width="270" height="70" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="300" y="60" width="270" height="70" fill="#1e3a8a" stroke="#b45309" stroke-width="3"/>
<text x="165" y="105" font-size="30" font-weight="bold" fill="#92400e" text-anchor="middle">AM ☀️</text>
<text x="435" y="105" font-size="30" font-weight="bold" fill="#fde68a" text-anchor="middle">PM 🌙</text>
<g font-size="16" fill="#1e293b" text-anchor="middle">
<text x="30" y="155">0:00</text><text x="300" y="155">12:00</text><text x="570" y="155">24:00</text>
</g>
<text x="165" y="45" font-size="17" fill="#1e293b" text-anchor="middle">da mezzanotte a mezzogiorno</text>
<text x="435" y="45" font-size="17" fill="#1e293b" text-anchor="middle">da mezzogiorno a mezzanotte</text>
<text x="300" y="195" font-size="20" font-weight="bold" fill="#b91c1c" text-anchor="middle">7 am = 7:00   ·   7 pm = 19:00</text>
</svg>`
        },
        {
          label: "🍕 La pizza-orologio",
          html: `<p>Ti ricordi le frazioni? L'orologio è come una <b>pizza</b> divisa in 4 fette: ogni fetta è <b>un quarto d'ora</b> = 15 minuti.</p>
<ul>
<li>1 fetta mangiata dopo il 12 → <b>quarter past</b> (un quarto <i>dopo</i>);</li>
<li>2 fette = mezza pizza → <b>half past</b> (metà <i>dopo</i>);</li>
<li>3 fette mangiate → manca 1 fetta all'ora dopo → <b>quarter to</b> (un quarto <i>verso</i> l'ora dopo).</li>
</ul>
<p>Anche in inglese <b>quarter</b> significa "quarto" e <b>half</b> significa "metà": sono proprio parole delle frazioni!</p>`
        },
        {
          label: "📱 L'ora digitale",
          html: `<p>Se "past" e "to" ti confondono, c'è un modo che gli inglesi capiscono sempre: leggere l'ora come sul telefono, numero per numero.</p>
<table>
<tr><th>Orario</th><th>Modo classico</th><th>Modo digitale</th></tr>
<tr><td>7:15</td><td>quarter past seven</td><td><b>seven fifteen</b></td></tr>
<tr><td>7:30</td><td>half past seven</td><td><b>seven thirty</b></td></tr>
<tr><td>7:45</td><td>quarter to eight</td><td><b>seven forty-five</b></td></tr>
<tr><td>7:05</td><td>five past seven</td><td><b>seven oh five</b></td></tr>
</table>
<p>Lo "0" si legge <b>oh</b> (come la lettera O). Questo modo si usa molto per orari di treni, aerei e TV.</p>`
        },
        {
          label: "🌍 Altre lingue",
          html: `<p>Ogni lingua dice l'ora a modo suo. Confronta le 7:30:</p>
<ul>
<li>🇮🇹 Italiano: <b>le sette e mezza</b> (dopo le 7)</li>
<li>🇬🇧 Inglese: <b>half past seven</b> (metà dopo le 7)</li>
<li>🇩🇪 Tedesco: <b>halb acht</b> = "metà otto", cioè metà strada <i>verso</i> le 8!</li>
<li>🇪🇸 Spagnolo: <b>las siete y media</b> (come in italiano)</li>
<li>🇫🇷 Francese: <b>sept heures et demie</b></li>
</ul>
<p>Attenzione: se un amico tedesco dice "halb acht", non sono le 8:30 ma le 7:30! L'inglese invece ragiona come noi: <i>half past seven</i>.</p>`
        },
        {
          label: "🎮 Abbina l'ora",
          html: `<p>Clicca un orario in inglese e poi l'orologio digitale giusto. Ricorda: <b>past</b> = dopo, <b>to</b> = mancano.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["seven o'clock", "7:00"],
              ["half past seven", "7:30"],
              ["quarter past nine", "9:15"],
              ["quarter to nine", "8:45"],
              ["ten past four", "4:10"],
              ["twenty to six", "5:40"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della daily routine: tocca un nodo",
      nodes: [
        { id: "routine", label: "Daily routine", x: 50, y: 8, color: "#2563eb", html: "La giornata tipo: le azioni che ripeti ogni giorno, dalla sveglia alla nanna.", why: "<i>Routine</i> è una parola francese entrata in inglese nel Seicento: viene da <i>route</i>, \"strada\". Una routine è la \"stradina\" che percorri sempre uguale ogni giorno." },
        { id: "verbi", label: "Verbi della giornata", x: 18, y: 30, color: "#16a34a", html: "wake up, get up, have breakfast, go to school, do homework, go to bed…", why: "Molti sono <b>phrasal verbs</b>, cioè verbo + piccola parola (up, to…): <i>get</i> da solo vuol dire \"ottenere\", ma <i>get up</i> vuol dire \"alzarsi\". L'inglese costruisce così tantissimi verbi nuovi." },
        { id: "have", label: "have + pasti", x: 18, y: 58, color: "#f59e0b", html: "have breakfast, have lunch, have dinner, have a shower.", why: "In inglese <i>have</i> significa anche \"consumare, prendere\". Noi diciamo \"fare colazione\", loro \"avere colazione\": ogni lingua sceglie verbi diversi, per questo queste frasi si imparano a memoria come blocchi." },
        { id: "simple", label: "Present simple", x: 50, y: 40, color: "#a855f7", html: "Il tempo per le abitudini: I get up at seven.", why: "L'inglese distingue ciò che fai <b>sempre</b> (present simple) da ciò che stai facendo <b>adesso</b> (present continuous). L'italiano usa quasi sempre lo stesso presente." },
        { id: "terza", label: "-s alla 3ª persona", x: 50, y: 70, color: "#ef4444", html: "he gets up, she goes, it has.", why: "È l'ultimo resto di un inglese antico (Old English) che aveva tante desinenze come l'italiano: io canto, tu canti, lui canta. Le altre si sono perse nei secoli; è rimasta solo la -s di he/she/it (prima era <i>-eth</i>: \"he goeth\")." },
        { id: "ora", label: "What time is it?", x: 82, y: 30, color: "#0ea5e9", html: "Per chiedere l'ora. Risposta: It's…", why: "La domanda chiede letteralmente \"Che tempo è?\": in inglese <i>time</i> vuol dire sia \"tempo\" sia \"ora\"." },
        { id: "pastto", label: "past / to", x: 82, y: 58, color: "#14b8a6", html: "quarter past (e un quarto), half past (e mezza), quarter to (meno un quarto).", why: "Viene dagli orologi a lancette: si guarda se la lancetta lunga ha <b>passato</b> (past) l'ora o sta andando <b>verso</b> (to) quella dopo. <i>Quarter</i> e <i>half</i> sono le stesse parole delle frazioni 1/4 e 1/2." },
        { id: "oclock", label: "o'clock e am/pm", x: 82, y: 84, color: "#64748b", html: "seven o'clock = 7:00; 7 am = mattino, 7 pm = sera.", why: "<i>O'clock</i> = \"of the clock\". <i>Am</i> e <i>pm</i> vengono dal latino <i>ante meridiem</i> e <i>post meridiem</i>: prima e dopo il mezzogiorno, il momento in cui il Sole è più alto (il <i>meridiano</i>)." },
        { id: "at", label: "at + ora", x: 18, y: 84, color: "#db2777", html: "I go to bed at nine. In the morning, at night.", why: "<i>At</i> indica un punto preciso (un'ora, un momento), <i>in</i> un periodo più lungo (in the morning). È la stessa logica dei luoghi: at the bus stop (un punto), in Italy (una zona)." }
      ],
      edges: [
        ["routine", "verbi", "si racconta con"],
        ["routine", "ora", "ha degli orari"],
        ["verbi", "have", "per i pasti"],
        ["verbi", "simple", "al tempo"],
        ["simple", "terza", "con he/she/it"],
        ["ora", "pastto", "si legge con"],
        ["ora", "oclock", "ora esatta"],
        ["simple", "at", "orario con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: racconta la giornata",
      questions: [
        { type: "mc", q: "Completa: «She ___ up at seven.»", options: ["get", "gets", "getting"], answer: 1, explain: "Con she (lei) il verbo prende la -s: she gets up." },
        { type: "mc", q: "Completa: «I go to bed ___ nine o'clock.»", options: ["in", "on", "at"], answer: 2, explain: "Con l'ora si usa at: at nine o'clock." },
        { type: "text", q: "Scrivi la terza persona di «go» (he ___ to school).", answer: ["goes"], explain: "I verbi che finiscono in -o prendono -es: goes." },
        { type: "mc", q: "9 pm corrisponde a…", options: ["le 9 del mattino", "le 21", "le 12"], answer: 1, explain: "pm = dopo mezzogiorno: 9 + 12 = 21." }
      ]
    }
  ],
  glossary: [
    { t: "Daily routine", d: "La giornata tipo, le azioni che si fanno ogni giorno." },
    { t: "Wake up / get up", d: "Svegliarsi / alzarsi dal letto." },
    { t: "Have breakfast / lunch / dinner", d: "Fare colazione / pranzare / cenare." },
    { t: "Get dressed", d: "Vestirsi." },
    { t: "What time is it?", d: "Che ore sono?" },
    { t: "O'clock", d: "Si usa con l'ora esatta (seven o'clock = le 7:00)." },
    { t: "Half past", d: "E mezza (half past seven = 7:30)." },
    { t: "Quarter past / quarter to", d: "E un quarto / meno un quarto." },
    { t: "am / pm", d: "Prima di mezzogiorno / dopo mezzogiorno." },
    { t: "Present simple", d: "Il tempo inglese per le abitudini e le azioni di tutti i giorni." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come si dice «vestirsi» in inglese?", options: ["get dressed", "get up", "go to bed"], answer: 0, explain: "Vestirsi = get dressed." },
      { type: "mc", q: "«I have dinner» significa…", options: ["faccio colazione", "pranzo", "ceno"], answer: 2, explain: "Dinner è la cena." },
      { type: "mc", q: "Come si dice 6:30?", options: ["half past six", "half to six", "six o'clock"], answer: 0, explain: "Mezz'ora dopo le sei: half past six." },
      { type: "mc", q: "«It's quarter past ten» è…", options: ["9:45", "10:15", "10:45"], answer: 1, explain: "Un quarto dopo le dieci: 10:15." },
      { type: "mc", q: "«Twenty to five» è…", options: ["5:20", "4:40", "4:20"], answer: 1, explain: "Mancano 20 minuti alle cinque: 4:40." },
      { type: "tf", q: "In inglese per i pasti si usa il verbo «have».", answer: true, explain: "have breakfast, have lunch, have dinner." },
      { type: "tf", q: "«He go to school» è corretto.", answer: false, explain: "Con he il verbo prende -es: he goes to school." },
      { type: "text", q: "Come si chiede «Che ore sono?» in inglese? (What … is it?)", answer: ["what time is it", "what time is it?"], explain: "What time is it?" },
      { type: "num", q: "Quanti minuti ci sono in «a quarter of an hour»?", answer: 15, unit: "minuti", explain: "Un quarto d'ora: 60 : 4 = 15 minuti." },
      { type: "num", q: "4 pm in ora italiana a 24 ore: le…", answer: 16, explain: "pm: si aggiunge 12 → 4 + 12 = 16." },
      { type: "order", q: "Metti in ordine la mattina di Tom.", items: ["wake up", "get up", "have a shower", "get dressed", "have breakfast", "go to school"], explain: "Prima ci si sveglia, ci si alza, ci si lava, ci si veste, si fa colazione e si va a scuola." },
      { type: "mc", q: "Completa: «I always ___ my teeth after breakfast.»", options: ["brush", "brushes", "do"], answer: 0, explain: "Con I il verbo resta uguale: I brush my teeth." }
    ]
  }
});
