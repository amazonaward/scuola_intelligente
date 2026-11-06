TOPIC('it', {
  id: "p4-ita-poesia",
  title: "La poesia",
  intro: "La poesia è un testo speciale: va a capo prima della fine della riga, ha un ritmo come una canzone e usa le parole come colori per far nascere <b>immagini</b> ed <b>emozioni</b>. Impariamo a riconoscere <b>versi</b>, <b>strofe</b>, <b>rime</b> e le principali <b>figure retoriche</b>, come la <b>similitudine</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è una poesia",
      html: `<p>La <b>poesia</b> (o testo poetico) è un testo scritto per esprimere <b>emozioni</b>, <b>sensazioni</b> e <b>pensieri</b> in modo musicale. Il poeta sceglie ogni parola con grande cura, per il suo <b>significato</b> ma anche per il suo <b>suono</b>.</p>
<p>Si riconosce subito perché:</p>
<ul>
<li>è scritta in <b>versi</b>: righe che vanno a capo prima del margine del foglio;</li>
<li>i versi sono raggruppati in <b>strofe</b>, separate da uno spazio bianco;</li>
<li>spesso ha un <b>ritmo</b> e delle <b>rime</b>;</li>
<li>usa un linguaggio ricco di <b>immagini</b>: le <b>figure retoriche</b>.</li>
</ul>
<p>La parola \"poesia\" viene dal greco <i>poiéin</i>, che vuol dire <b>\"fare, creare\"</b>: il poeta è \"colui che crea\" con le parole.</p>`
    },
    {
      type: "text",
      title: "Passo 1 – Versi e strofe",
      html: `<p>Il <b>verso</b> è la singola riga della poesia. Va a capo non perché finisce lo spazio, ma perché il poeta lo decide, per dare ritmo e importanza alle parole.</p>
<p>La <b>strofa</b> è un gruppo di versi. Le strofe hanno nomi diversi secondo quanti versi contengono:</p>
<table>
<tr><th>Versi</th><th>Nome della strofa</th></tr>
<tr><td>2</td><td><b>distico</b></td></tr>
<tr><td>3</td><td><b>terzina</b> (la usa Dante nella <i>Divina Commedia</i>)</td></tr>
<tr><td>4</td><td><b>quartina</b></td></tr>
<tr><td>6</td><td><b>sestina</b></td></tr>
<tr><td>8</td><td><b>ottava</b></td></tr>
</table>
<p>I versi si misurano contando le <b>sillabe</b>: un verso di 7 sillabe si chiama <b>settenario</b>, uno di 11 sillabe <b>endecasillabo</b> (il verso più importante della poesia italiana). Molti poeti moderni scrivono invece in <b>versi liberi</b>, cioè senza una misura fissa e senza rime.</p>`
    },
    {
      type: "widget",
      title: "Trova le parti della poesia",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#fffbeb"/>
<rect x="20" y="15" width="400" height="310" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="3"/>
<text x="220" y="50" font-size="22" text-anchor="middle" fill="#b45309" font-weight="bold">La luna</text>
<text x="50" y="95" font-size="18" fill="#1f2937">La luna stanotte è un <tspan fill="#dc2626" font-weight="bold">sorriso</tspan></text>
<text x="50" y="122" font-size="18" fill="#1f2937">appeso nel cielo di seta,</text>
<text x="50" y="149" font-size="18" fill="#1f2937">si specchia nel lago, sul <tspan fill="#dc2626" font-weight="bold">viso</tspan></text>
<text x="50" y="176" font-size="18" fill="#1f2937">ha l'aria di un vecchio poeta.</text>
<text x="50" y="225" font-size="18" fill="#1f2937">Le stelle le fanno corona</text>
<text x="50" y="252" font-size="18" fill="#1f2937">come lucciole in fila,</text>
<text x="50" y="279" font-size="18" fill="#1f2937">e il vento una ninna nanna</text>
<text x="50" y="306" font-size="18" fill="#1f2937">piano piano le canta.</text>
<path d="M330 92 Q400 120 290 146" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4" fill="none"/>
<path d="M435 80 L455 80 L455 185 L435 185" stroke="#2563eb" stroke-width="3" fill="none"/>
</svg>`,
        spots: [
          { x: 320, y: 44, label: "Titolo" },
          { x: 34, y: 116, label: "Verso" },
          { x: 470, y: 132, label: "Strofa" },
          { x: 400, y: 120, label: "Rima" },
          { x: 34, y: 246, label: "Similitudine" },
          { x: 34, y: 273, label: "Personificazione" }
        ]
      },
      caption: "Tocca un punto e scegli l'etichetta giusta: titolo, un verso, la strofa, la rima sorriso/viso, la similitudine e la personificazione. (Poesia inventata per questa lezione.)"
    },
    {
      type: "text",
      title: "Passo 2 – Le rime",
      html: `<p>Due versi sono in <b>rima</b> quando le loro parole finali sono <b>uguali a partire dall'ultima vocale accentata</b>: <i>c<b>uore</b> – am<b>ore</b></i>, <i>gi<b>ardino</b> – matt<b>ino</b></i>, <i>s<b>ole</b> – vi<b>ole</b></i>.</p>
<p>Per descrivere le rime si usano le <b>lettere dell'alfabeto</b>: i versi che rimano fra loro hanno la stessa lettera.</p>
<ul>
<li><b>Rima baciata</b> (AABB): due versi di seguito rimano tra loro.<br><i>Il gatto nel <b>prato</b> (A) / si è addormentato (A) / sogna una <b>trota</b> (B) / che nuota e che ruota (B).</i></li>
<li><b>Rima alternata</b> (ABAB): rimano il 1° col 3° e il 2° col 4°.<br><i>Cade la <b>neve</b> (A) / sul tetto <b>bianco</b> (B) / leggera e <b>breve</b> (A) / sul passo <b>stanco</b> (B).</i></li>
<li><b>Rima incrociata</b> (ABBA): rimano il 1° col 4° e il 2° col 3°.<br><i>Nel mare <b>blu</b> (A) / nuota il <b>delfino</b> (B) / vicino al <b>bambino</b> (B) / e salta <b>su</b> (A).</i></li>
</ul>
<p>Non tutte le poesie hanno le rime! Le poesie in <b>versi liberi</b> giocano con il ritmo, le pause e le immagini.</p>`
    },
    {
      type: "svg",
      title: "Tre tipi di rima",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="100" y="35" font-size="20" text-anchor="middle" fill="#6d28d9" font-weight="bold">BACIATA</text>
<text x="300" y="35" font-size="20" text-anchor="middle" fill="#be185d" font-weight="bold">ALTERNATA</text>
<text x="500" y="35" font-size="20" text-anchor="middle" fill="#0f766e" font-weight="bold">INCROCIATA</text>
<g font-size="30" font-weight="bold" text-anchor="middle">
<text x="70" y="90" fill="#ef4444">A</text><text x="70" y="145" fill="#ef4444">A</text><text x="70" y="200" fill="#2563eb">B</text><text x="70" y="255" fill="#2563eb">B</text>
<text x="270" y="90" fill="#ef4444">A</text><text x="270" y="145" fill="#2563eb">B</text><text x="270" y="200" fill="#ef4444">A</text><text x="270" y="255" fill="#2563eb">B</text>
<text x="470" y="90" fill="#ef4444">A</text><text x="470" y="145" fill="#2563eb">B</text><text x="470" y="200" fill="#2563eb">B</text><text x="470" y="255" fill="#ef4444">A</text>
</g>
<g fill="none" stroke-width="4">
<path d="M95 80 Q130 112 95 135" stroke="#ef4444"/><path d="M95 190 Q130 222 95 245" stroke="#2563eb"/>
<path d="M295 80 Q345 135 295 190" stroke="#ef4444"/><path d="M295 135 Q345 190 295 245" stroke="#2563eb"/>
<path d="M495 80 Q570 162 495 245" stroke="#ef4444"/><path d="M495 135 Q525 162 495 190" stroke="#2563eb"/>
</g>
<text x="300" y="290" font-size="16" text-anchor="middle" fill="#1f2937">Le linee collegano i versi che rimano tra loro.</text>
</svg>`,
      caption: "Ogni lettera è un verso: stessa lettera = stessa rima."
    },
    {
      type: "quiz",
      title: "Mini-quiz: versi, strofe e rime",
      questions: [
        { type: "mc", q: "Una strofa di 4 versi si chiama…", options: ["terzina", "quartina", "distico"], answer: 1, explain: "4 versi = quartina." },
        { type: "mc", q: "Quale coppia di parole fa rima?", options: ["mare – sole", "fiore – colore", "casa – cane"], answer: 1, explain: "Fi-ORE / col-ORE: uguali dall'ultima vocale accentata." },
        { type: "mc", q: "Lo schema ABAB indica una rima…", options: ["baciata", "alternata", "incrociata"], answer: 1, explain: "Il 1° rima col 3°, il 2° col 4°: alternata." }
      ]
    },
    {
      type: "text",
      title: "Passo 3 – La similitudine e le altre figure retoriche",
      html: `<p>Le <b>figure retoriche</b> sono modi speciali di usare le parole per creare immagini, suoni ed emozioni. Ecco le principali:</p>
<ul>
<li><b>Similitudine</b>: un <b>paragone</b> tra due cose, con parole come <b>come, sembra, simile a, pare</b>: <i>\"Gli occhi brillavano <b>come</b> stelle\"</i>, <i>\"Le nuvole <b>sembrano</b> panna montata\"</i>.</li>
<li><b>Metafora</b>: un paragone <b>senza il \"come\"</b>, più forte e diretto: <i>\"I tuoi occhi <b>sono stelle</b>\"</i>, <i>\"Quel bambino è un <b>terremoto</b>\"</i>.</li>
<li><b>Personificazione</b>: si danno caratteristiche umane ad animali, cose o idee: <i>\"Il vento <b>canta</b>\"</i>, <i>\"La luna <b>sorride</b>\"</i>.</li>
<li><b>Onomatopea</b>: parole che imitano un suono: <i>tic tac, din don, splash, miao, bum</i>.</li>
<li><b>Anafora</b>: la ripetizione di una o più parole all'inizio di più versi: <i>\"<b>Ti aspetto</b> al mattino, / <b>ti aspetto</b> la sera…\"</i>.</li>
<li><b>Allitterazione</b>: ripetizione di suoni uguali in parole vicine: <i>\"<b>tr</b>otta il <b>tr</b>enino <b>tr</b>a i <b>tr</b>ifogli\"</i>.</li>
</ul>
<p>Esempio dalla poesia italiana: Giosuè Carducci, in <i>San Martino</i> (1883), scrive che <i>\"sotto il maestrale / <b>urla</b> e biancheggia il mar\"</i>: il mare \"urla\" come una persona. È una <b>personificazione</b>!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: analizziamo una poesia",
      html: `<p>Leggi questa poesia (inventata per la lezione):</p>
<p style="padding-left:1em"><i><b>Il temporale</b><br>
Bum! Rimbomba il tuono sul monte,<br>
la pioggia corre come un cavallo,<br>
lava le strade, lava la fonte,<br>
e il cielo diventa di cristallo.</i></p>
<ul>
<li><b>Versi</b>: 4 → è una <b>quartina</b>.</li>
<li><b>Rime</b>: mont<b>e</b>/font<b>e</b> (A) e cav<b>allo</b>/crist<b>allo</b> (B) → schema <b>ABAB</b>, rima <b>alternata</b>.</li>
<li><b>Onomatopea</b>: \"Bum!\" imita il tuono.</li>
<li><b>Similitudine</b>: \"corre <b>come</b> un cavallo\".</li>
<li><b>Anafora</b>: \"<b>lava</b> le strade, <b>lava</b> la fonte\" (ripetizione).</li>
<li><b>Metafora</b>: \"il cielo diventa di cristallo\" (limpido e trasparente, senza \"come\").</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: scrivi una poesia con la similitudine",
      html: `<p>Prova questo esercizio, usato da tanti insegnanti:</p>
<ol>
<li>Scegli un oggetto o un animale (es. <b>il gatto</b>).</li>
<li>Scrivi 4 versi che iniziano tutti con lo stesso nome (anafora) e che contengono un \"come\":<br>
<i>Il mio gatto è morbido <b>come</b> una nuvola,<br>
il mio gatto è silenzioso <b>come</b> la neve,<br>
il mio gatto è veloce <b>come</b> il vento,<br>
il mio gatto è pigro <b>come</b> una domenica.</i></li>
<li>Ora trasforma una similitudine in <b>metafora</b>: <i>\"Il mio gatto è una nuvola che fa le fusa.\"</i></li>
</ol>
<p>Hai scritto una poesia in <b>versi liberi</b> con <b>anafora</b>, <b>similitudini</b> e una <b>metafora</b>!</p>`
    },
    {
      type: "widget",
      title: "Gioco: che figura retorica è?",
      widget: "classify",
      options: {
        groups: ["Similitudine", "Metafora", "Personificazione", "Onomatopea"],
        items: [
          ["Bianco come il latte", 0], ["Correva veloce come una lepre", 0], ["Le foglie sembrano farfalle", 0],
          ["Sei un leone!", 1], ["Il mare è uno specchio", 1], ["Ha un cuore di pietra", 1],
          ["Il sole sorride", 2], ["Gli alberi danzano nel vento", 2], ["La sveglia mi chiama", 2],
          ["Drin drin!", 3], ["Cip cip", 3], ["Splash!", 3]
        ]
      },
      caption: "Ricorda: se c'è \"come\" (o \"sembra\") è una similitudine."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? L'haiku giapponese",
      html: `<p>In <b>Giappone</b> esiste una poesia brevissima: l'<b>haiku</b>. Ha solo <b>3 versi</b> di <b>5, 7 e 5 sillabe</b> (in giapponese si contano unità di suono un po' diverse dalle nostre sillabe) e di solito parla della <b>natura</b> e delle <b>stagioni</b>.</p>
<p>Il maestro più famoso fu <b>Matsuo Bashō</b> (1644-1694). Il suo haiku più celebre, tradotto, dice: <i>\"Il vecchio stagno / una rana si tuffa: / il suono dell'acqua.\"</i></p>
<p>Prova a scriverne uno tu: 5 – 7 – 5!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La Divina Commedia in terzine",
      html: `<p><b>Dante Alighieri</b>, all'inizio del 1300, scrisse la <i>Divina Commedia</i>: più di <b>14 000 versi</b>, tutti <b>endecasillabi</b> (11 sillabe), raggruppati in <b>terzine</b> con la <b>rima incatenata</b> (ABA BCB CDC…): ogni terzina \"aggancia\" la successiva come gli anelli di una catena.</p>
<p>Il primo verso lo conoscono quasi tutti gli italiani: <i>\"Nel mezzo del cammin di nostra vita\"</i>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Verso</b> = una riga della poesia; <b>strofa</b> = gruppo di versi (distico, terzina, quartina…).</li>
<li><b>Rima</b> = parole uguali dall'ultima vocale accentata in poi.</li>
<li>Schemi: <b>baciata AABB</b>, <b>alternata ABAB</b>, <b>incrociata ABBA</b>.</li>
<li><b>Similitudine</b> = paragone con \"come\"; <b>metafora</b> = paragone senza \"come\".</li>
<li><b>Personificazione</b> = cose che agiscono come persone; <b>onomatopea</b> = parole-suono.</li>
<li>I <b>versi liberi</b> non hanno misura fissa né rime obbligatorie.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la poesia",
      intro: "La poesia si può ascoltare, cantare, disegnare e perfino costruire come un gioco. Scegli la strada che fa per te.",
      tabs: [
        {
          label: "🎵 Come una canzone",
          html: `<p>Le <b>canzoni</b> sono poesie con la musica! Hanno:</p>
<ul>
<li>le <b>strofe</b>, proprio come le poesie;</li>
<li>il <b>ritornello</b>, che si ripete (un po' come l'<b>anafora</b>);</li>
<li>le <b>rime</b>, che fanno ricordare facilmente le parole;</li>
<li>il <b>ritmo</b>, che si può battere con le mani.</li>
</ul>
<p>Anche il <b>rap</b> è pieno di rime e allitterazioni. Prova a battere le mani su ogni sillaba di un verso: <i>\"Nel / mez / zo / del / cam / min / di / no / stra / vi / ta\"</i> → 11 colpi: un endecasillabo!</p>`
        },
        {
          label: "🖼️ Il calligramma",
          html: `<p>Il poeta francese <b>Guillaume Apollinaire</b> pubblicò nel <b>1918</b> un libro intitolato <i>Calligrammes</i>: poesie in cui le parole sono disposte in modo da <b>disegnare</b> la cosa di cui parlano. Anche i <b>futuristi</b> italiani, come Filippo Tommaso Marinetti, giocarono con la forma delle parole.</p>
<p>Prova anche tu: scrivi una poesia sulla pioggia facendo \"cadere\" le parole, o una poesia sul sole disponendo le parole in cerchio.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<g font-size="17" fill="#1d4ed8" font-style="italic">
<text x="60" y="40">gocce</text><text x="75" y="80">di</text><text x="65" y="120">pioggia</text><text x="80" y="160">cadono</text><text x="70" y="200">piano</text>
<text x="150" y="60">tic</text><text x="160" y="100">tic</text><text x="150" y="140">sul</text><text x="160" y="180">vetro</text><text x="155" y="220">tic</text>
<text x="230" y="30">e</text><text x="235" y="70">il</text><text x="225" y="110">cielo</text><text x="235" y="150">piange</text><text x="230" y="190">piano</text>
</g>
<circle cx="450" cy="130" r="45" fill="#fde047" stroke="#ca8a04" stroke-width="3"/>
<g font-size="16" fill="#b45309" font-weight="bold" text-anchor="middle">
<text x="450" y="60">luce</text><text x="530" y="135">calda</text><text x="450" y="215">sole</text><text x="370" y="135">oro</text>
<text x="510" y="80">brilla</text><text x="510" y="190">scalda</text><text x="390" y="190">ride</text><text x="390" y="80">gioca</text>
</g>
</svg>`
        },
        {
          label: "🇯🇵 Scrivi un haiku",
          html: `<p>Il metodo giapponese è perfetto per chi pensa che la poesia sia difficile: bastano <b>3 versi</b> e tanta <b>osservazione</b>.</p>
<ol>
<li><b>Guarda</b> qualcosa nella natura (una foglia, una lumaca, la neve).</li>
<li>Primo verso, <b>5 sillabe</b>: che cosa vedi. <i>\"Foglia d'autunno\"</i> (fo-glia-d'au-tun-no).</li>
<li>Secondo verso, <b>7 sillabe</b>: che cosa succede. <i>\"scende lenta sul prato\"</i> (scen-de-len-ta-sul-pra-to).</li>
<li>Terzo verso, <b>5 sillabe</b>: una sorpresa o un'emozione. <i>\"il vento tace\"</i> (il-ven-to-ta-ce).</li>
</ol>
<p>Non preoccuparti se le sillabe non sono perfette: anche i traduttori italiani degli haiku spesso non rispettano esattamente il 5-7-5!</p>`
        },
        {
          label: "🃏 Flashcard delle figure",
          html: `<p>Ripassa le figure retoriche con le carte: leggi la parte davanti, prova a rispondere, poi gira.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "\"Dolce come il miele\"", back: "Similitudine (c'è il \"come\")" },
              { front: "\"Sei il mio sole\"", back: "Metafora (paragone senza \"come\")" },
              { front: "\"La pioggia bussa ai vetri\"", back: "Personificazione" },
              { front: "\"Toc toc\"", back: "Onomatopea" },
              { front: "Rima AABB", back: "Rima baciata" },
              { front: "Strofa di 3 versi", back: "Terzina" },
              { front: "Verso di 11 sillabe", back: "Endecasillabo" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della poesia",
      nodes: [
        { id: "poesia", label: "Poesia", x: 50, y: 6, color: "#2563eb", html: "Testo in versi che esprime emozioni e immagini con musicalità.", why: "Dal greco <i>poiéin</i>, \"fare, creare\". Le prime poesie erano <b>cantate</b>: prima della scrittura il ritmo e le rime aiutavano a ricordare lunghi racconti a memoria, come l'<i>Iliade</i> e l'<i>Odissea</i> attribuite a Omero." },
        { id: "verso", label: "Verso", x: 20, y: 30, color: "#ef4444", html: "La singola riga della poesia.", why: "Dal latino <i>versus</i>, \"girato, voltato\": come l'aratro che arriva in fondo al campo e torna indietro, il verso a un certo punto \"gira\" e va a capo." },
        { id: "strofa", label: "Strofa", x: 50, y: 30, color: "#f59e0b", html: "Gruppo di versi: distico, terzina, quartina…", why: "Dal greco <i>strophé</i>, \"giro, volta\": nel teatro greco il coro cantava una parte girando in una direzione, poi tornava indietro con l'antistrofe." },
        { id: "rima", label: "Rima", x: 80, y: 30, color: "#a855f7", html: "Uguaglianza di suono dall'ultima vocale accentata.", why: "I Greci e i Romani classici quasi non usavano la rima: contavano sillabe lunghe e brevi. La rima si diffuse nel Medioevo, con gli inni cristiani in latino e poi con i poeti provenzali e la <b>Scuola siciliana</b> (1200), che creò anche il sonetto." },
        { id: "metrica", label: "Misura del verso", x: 20, y: 58, color: "#0ea5e9", html: "Si contano le sillabe: settenario (7), endecasillabo (11)…", why: "L'endecasillabo è il verso più usato dai grandi poeti italiani (Dante, Petrarca, Leopardi) perché ha un ritmo vario e naturale, vicino al modo in cui parliamo." },
        { id: "liberi", label: "Versi liberi", x: 20, y: 86, color: "#64748b", html: "Versi senza misura fissa e senza rime obbligatorie.", why: "Si diffusero tra la fine dell'Ottocento e il Novecento: poeti come l'americano Walt Whitman e poi molti italiani del Novecento vollero liberarsi delle regole per seguire il ritmo del pensiero." },
        { id: "figure", label: "Figure retoriche", x: 65, y: 58, color: "#16a34a", html: "Modi speciali di usare le parole: similitudine, metafora, personificazione, onomatopea, anafora…", why: "\"Retorica\" era nell'antica Grecia l'arte di parlare in modo efficace. Aristotele (IV secolo a.C.) studiò già la metafora, che definì il \"trasporto\" di un nome da una cosa a un'altra." },
        { id: "similitudine", label: "Similitudine", x: 50, y: 86, color: "#14b8a6", html: "Paragone con \"come\", \"sembra\", \"simile a\".", why: "Il nostro cervello capisce le cose nuove confrontandole con quelle che conosce già: la similitudine fa proprio questo. Omero ne usa tantissime: gli eroi combattono \"come leoni\"." },
        { id: "metafora", label: "Metafora", x: 82, y: 86, color: "#be185d", html: "Paragone senza \"come\": <i>sei un leone</i>.", why: "Dal greco <i>metaphérein</i>, \"trasportare\": il significato viene trasportato da una cosa all'altra. È una similitudine \"accorciata\", più forte e sorprendente." }
      ],
      edges: [
        ["poesia", "verso", "è fatta di"],
        ["verso", "strofa", "si raggruppano in"],
        ["poesia", "rima", "spesso ha"],
        ["verso", "metrica", "si misura"],
        ["metrica", "liberi", "oppure"],
        ["poesia", "figure", "usa"],
        ["figure", "similitudine", ""],
        ["figure", "metafora", ""],
        ["similitudine", "metafora", "senza \"come\""]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: le figure retoriche",
      questions: [
        { type: "mc", q: "\"Il fiume è un serpente d'argento.\" È una…", options: ["similitudine", "metafora", "onomatopea"], answer: 1, explain: "Paragone senza \"come\": metafora." },
        { type: "mc", q: "\"Le campane cantano a festa.\" È una…", options: ["personificazione", "rima", "similitudine"], answer: 0, explain: "Le campane \"cantano\" come persone: personificazione." },
        { type: "tf", q: "\"Leggero come una piuma\" è una similitudine.", answer: true, explain: "C'è il \"come\": similitudine." }
      ]
    }
  ],
  glossary: [
    { t: "Verso", d: "Ogni riga di una poesia." },
    { t: "Strofa", d: "Gruppo di versi separato dagli altri da uno spazio." },
    { t: "Rima", d: "Uguaglianza di suono tra parole a partire dall'ultima vocale accentata." },
    { t: "Rima baciata", d: "Schema AABB: rimano due versi di seguito." },
    { t: "Rima alternata", d: "Schema ABAB: rimano 1° e 3°, 2° e 4° verso." },
    { t: "Rima incrociata", d: "Schema ABBA: rimano 1° e 4°, 2° e 3° verso." },
    { t: "Similitudine", d: "Paragone tra due cose con \"come\", \"sembra\", \"simile a\"." },
    { t: "Metafora", d: "Paragone senza \"come\"." },
    { t: "Personificazione", d: "Attribuire azioni o qualità umane a cose, animali o idee." },
    { t: "Onomatopea", d: "Parola che imita un suono o un rumore." },
    { t: "Endecasillabo", d: "Verso di 11 sillabe, il più usato nella poesia italiana." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come si chiama ogni riga di una poesia?", options: ["Strofa", "Verso", "Rima"], answer: 1, explain: "La riga è il verso." },
      { type: "mc", q: "Una strofa di 3 versi si chiama…", options: ["terzina", "quartina", "distico"], answer: 0, explain: "3 versi = terzina." },
      { type: "mc", q: "Quale coppia fa rima?", options: ["luna – lana", "stella – bella", "notte – note"], answer: 1, explain: "St-ELLA / b-ELLA." },
      { type: "mc", q: "Lo schema ABBA indica una rima…", options: ["baciata", "alternata", "incrociata"], answer: 2, explain: "1° con 4°, 2° con 3°: incrociata." },
      { type: "tf", q: "Tutte le poesie devono avere le rime.", answer: false, explain: "Le poesie in versi liberi possono non avere rime." },
      { type: "mc", q: "\"Il bambino dormiva come un ghiro.\" È una…", options: ["metafora", "similitudine", "anafora"], answer: 1, explain: "Paragone con \"come\": similitudine." },
      { type: "mc", q: "\"Tic tac, fa l'orologio.\" \"Tic tac\" è…", options: ["un'onomatopea", "una metafora", "una personificazione"], answer: 0, explain: "Imita un suono: onomatopea." },
      { type: "text", q: "Come si chiama il paragone fatto SENZA la parola \"come\"?", answer: ["metafora", "la metafora", "una metafora"], explain: "La metafora." },
      { type: "num", q: "Quante sillabe ha un endecasillabo?", answer: 11, explain: "Endeca = undici in greco." },
      { type: "tf", q: "L'haiku è una poesia giapponese di 3 versi.", answer: true, explain: "Tre versi di 5, 7, 5 unità di suono." },
      { type: "order", q: "Ordina le strofe dalla più corta alla più lunga.", items: ["distico", "terzina", "quartina", "sestina", "ottava"], explain: "2, 3, 4, 6, 8 versi." },
      { type: "mc", q: "\"Il vento sussurra tra gli alberi.\" Che figura retorica c'è?", options: ["Personificazione", "Similitudine", "Rima"], answer: 0, explain: "Il vento \"sussurra\" come una persona." }
    ]
  }
});
