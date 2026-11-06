TOPIC('it', {
  id: "m2-tec-programmazione",
  title: "Programmare: variabili e cicli",
  intro: "Ogni app, videogioco o robot funziona grazie a due idee semplicissime: le <b>variabili</b>, che servono a <b>ricordare</b> i dati, e i <b>cicli</b>, che servono a <b>ripetere</b> le istruzioni senza riscriverle. Le scopriremo prima con i blocchi (come in Scratch) e poi con il codice vero, in <b>Python</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Che cos'è una variabile",
      html: `<p>Una <b>variabile</b> è come una <b>scatola con un'etichetta</b>: l'etichetta è il <b>nome</b>, dentro c'è un <b>valore</b> che può cambiare durante il programma.</p>
<ul>
<li><b>Creare e assegnare</b>: <code>punti = 0</code> significa «metti 0 nella scatola chiamata punti». Il simbolo <code>=</code> in programmazione non vuol dire «è uguale», ma <b>«assegna»</b>, «metti dentro».</li>
<li><b>Leggere</b>: <code>print(punti)</code> mostra sullo schermo il contenuto della scatola.</li>
<li><b>Modificare</b>: <code>punti = punti + 10</code> significa «prendi il valore di punti, aggiungi 10 e rimetti il risultato nella stessa scatola».</li>
</ul>
<p>I valori hanno un <b>tipo</b>:</p>
<table>
<tr><th>Tipo</th><th>Esempio</th><th>Serve per</th></tr>
<tr><td><b>intero</b> (int)</td><td><code>vite = 3</code></td><td>contare</td></tr>
<tr><td><b>decimale</b> (float)</td><td><code>prezzo = 2.50</code></td><td>misure, soldi (in Python si usa il punto, non la virgola!)</td></tr>
<tr><td><b>stringa</b> (str)</td><td><code>nome = "Sara"</code></td><td>testi, sempre tra virgolette</td></tr>
<tr><td><b>booleano</b> (bool)</td><td><code>vinto = False</code></td><td>vero/falso (True/False)</td></tr>
</table>
<p>Regole per i nomi: niente spazi (usa <code>punteggio_max</code>), non iniziare con un numero, scegli nomi che fanno capire il contenuto.</p>`
    },
    {
      type: "svg",
      title: "Le variabili come scatole",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<g>
<polygon points="40,120 170,120 190,100 60,100" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<rect x="40" y="120" width="130" height="100" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="55" y="190" width="100" height="24" rx="5" fill="#ffffff" stroke="#92400e" stroke-width="2"/>
<text x="105" y="208" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">punti</text>
<text x="105" y="170" font-size="40" font-weight="bold" fill="#1f2937" text-anchor="middle">10</text>
</g>
<g>
<polygon points="230,120 360,120 380,100 250,100" fill="#a5b4fc" stroke="#3730a3" stroke-width="3"/>
<rect x="230" y="120" width="130" height="100" fill="#818cf8" stroke="#3730a3" stroke-width="3"/>
<rect x="245" y="190" width="100" height="24" rx="5" fill="#ffffff" stroke="#3730a3" stroke-width="2"/>
<text x="295" y="208" font-size="16" font-weight="bold" fill="#3730a3" text-anchor="middle">nome</text>
<text x="295" y="168" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">"Sara"</text>
</g>
<g>
<polygon points="420,120 550,120 570,100 440,100" fill="#86efac" stroke="#166534" stroke-width="3"/>
<rect x="420" y="120" width="130" height="100" fill="#4ade80" stroke="#166534" stroke-width="3"/>
<rect x="435" y="190" width="100" height="24" rx="5" fill="#ffffff" stroke="#166534" stroke-width="2"/>
<text x="485" y="208" font-size="16" font-weight="bold" fill="#166534" text-anchor="middle">vinto</text>
<text x="485" y="168" font-size="26" font-weight="bold" fill="#14532d" text-anchor="middle">False</text>
</g>
<text x="105" y="250" font-size="16" fill="#1f2937" text-anchor="middle">intero</text>
<text x="295" y="250" font-size="16" fill="#1f2937" text-anchor="middle">stringa</text>
<text x="485" y="250" font-size="16" fill="#1f2937" text-anchor="middle">booleano</text>
<text x="300" y="50" font-size="20" font-weight="bold" fill="#14532d" text-anchor="middle">etichetta = nome · contenuto = valore</text>
<text x="300" y="285" font-size="16" fill="#334155" text-anchor="middle">punti = punti + 10 → la scatola «punti» ora contiene 20</text>
</svg>`,
      caption: "Ogni variabile ha un nome (l'etichetta) e un valore (il contenuto). Il contenuto può cambiare, il nome no."
    },
    {
      type: "text",
      title: "Che cos'è un ciclo",
      html: `<p>Un <b>ciclo</b> (in inglese <i>loop</i>) è un blocco di istruzioni che il computer <b>ripete</b>. Ce ne sono due tipi principali:</p>
<p><b>1. Ciclo a contatore</b> – ripete un <b>numero fisso</b> di volte. In Scratch è il blocco «ripeti 10 volte»; in Python è <code>for</code>:</p>
<pre><code>for i in range(5):
    print("Ciao!")</code></pre>
<p>Stampa «Ciao!» <b>5 volte</b>. La variabile <code>i</code> vale 0, 1, 2, 3, 4 (in Python si comincia a contare da 0!).</p>
<p><b>2. Ciclo a condizione</b> – ripete <b>finché</b> una condizione è vera. In Scratch è «ripeti fino a quando…»; in Python è <code>while</code>:</p>
<pre><code>vite = 3
while vite &gt; 0:
    print("Giochi ancora!")
    vite = vite - 1</code></pre>
<p>Ripete finché <code>vite</code> è maggiore di 0: 3 volte. Se ci dimentichiamo di diminuire <code>vite</code>, il ciclo <b>non finisce mai</b>: è un <b>ciclo infinito</b>, uno degli errori più comuni!</p>
<p>⚠️ In Python il <b>rientro</b> (i 4 spazi all'inizio della riga) è obbligatorio: indica quali istruzioni stanno <b>dentro</b> il ciclo.</p>`
    },
    {
      type: "widget",
      title: "Dal blocco al codice",
      widget: "match",
      options: { pairs: [
        ["🟧 porta punti a 0", "punti = 0"],
        ["🟧 cambia punti di 1", "punti = punti + 1"],
        ["🟨 ripeti 10 volte", "for i in range(10):"],
        ["🟨 ripeti fino a quando vite = 0", "while vite > 0:"],
        ["🟪 dire «Ciao!»", "print(\"Ciao!\")"],
        ["🟦 chiedi il nome e attendi", "nome = input(\"Come ti chiami?\")"]
      ] },
      caption: "Abbina ogni blocco in stile Scratch alla riga di Python che fa la stessa cosa."
    },
    {
      type: "quiz",
      title: "Mini-quiz: variabili",
      questions: [
        { type: "num", q: "x = 5, poi x = x + 3. Quanto vale x?", answer: 8, explain: "Si prende il vecchio valore (5), si aggiunge 3 e si rimette in x: 8." },
        { type: "mc", q: "Di che tipo è il valore \"42\" (tra virgolette)?", options: ["Intero", "Stringa", "Booleano"], answer: 1, explain: "Tutto ciò che sta tra virgolette è una stringa, anche se contiene cifre." },
        { type: "tf", q: "In programmazione «=» significa «assegna un valore».", answer: true, explain: "Per confrontare due valori si usa invece «==»." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: il contatore e l'accumulatore",
      html: `<p>Vogliamo sommare i numeri da 1 a 100. Il giovane <b>Carl Friedrich Gauss</b>, secondo un aneddoto famoso, a 9 anni lo fece a mente in pochi secondi. Il computer lo fa con un ciclo:</p>
<pre><code>somma = 0
for n in range(1, 101):
    somma = somma + n
print(somma)</code></pre>
<ul>
<li><code>n</code> è il <b>contatore</b>: vale 1, 2, 3… fino a 100 (<code>range(1, 101)</code> si ferma <b>prima</b> di 101).</li>
<li><code>somma</code> è l'<b>accumulatore</b>: parte da 0 e a ogni giro «accumula» il nuovo numero.</li>
</ul>
<p>Risultato: <b>5050</b>. Il trucco di Gauss? 1+100 = 101, 2+99 = 101… ci sono 50 coppie: 50 × 101 = 5050.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: indovina il numero",
      html: `<pre><code>segreto = 7
tentativo = 0
while tentativo != segreto:
    tentativo = int(input("Indovina (1-10): "))
    if tentativo &lt; segreto:
        print("Più alto!")
    elif tentativo &gt; segreto:
        print("Più basso!")
print("Bravo, hai indovinato!")</code></pre>
<p>Qui il ciclo è un <code>while</code>: non sappiamo <b>quante volte</b> il giocatore proverà, quindi ripetiamo <b>finché</b> il tentativo è diverso (<code>!=</code>) dal numero segreto. <code>input</code> legge ciò che scrive l'utente; <code>int(...)</code> lo trasforma da stringa a numero intero.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La prima programmatrice",
      html: `<p>Il primo programma della storia fu scritto da una donna: <b>Ada Lovelace</b>, matematica inglese. Nel <b>1843</b>, nelle note a un articolo sulla «macchina analitica» di Charles Babbage, descrisse un procedimento per calcolare i <b>numeri di Bernoulli</b>, con istruzioni che si ripetevano: un vero <b>ciclo</b>!</p>
<p>La macchina non fu mai costruita, ma Ada aveva già capito che i computer avrebbero potuto lavorare non solo con i numeri, ma anche con la musica e i simboli. In suo onore un linguaggio di programmazione si chiama <b>Ada</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il primo «bug» era un insetto vero",
      html: `<p>Nel <b>1947</b>, all'Università di Harvard, i tecnici del computer Mark II trovarono un errore causato da una <b>falena</b> rimasta intrappolata in un relè. La attaccarono con lo scotch nel registro di lavoro scrivendo «first actual case of bug being found». Della squadra faceva parte <b>Grace Hopper</b>, pioniera dei linguaggi di programmazione. Da allora gli errori nei programmi si chiamano <b>bug</b> (insetti) e correggerli si dice <b>debug</b>.</p>
<p>E il nome <b>Python</b>? Non viene dal serpente: il suo inventore, l'olandese <b>Guido van Rossum</b>, che lo pubblicò nel <b>1991</b>, era un fan del gruppo comico inglese <i>Monty Python</i>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Variabile</b> = nome + valore che può cambiare. <code>=</code> assegna, <code>==</code> confronta.</li>
<li>Tipi: <b>int</b>, <b>float</b>, <b>str</b> (tra virgolette), <b>bool</b> (True/False).</li>
<li><b>for</b>: ciclo a contatore, numero di ripetizioni noto. <code>range(5)</code> → 0, 1, 2, 3, 4.</li>
<li><b>while</b>: ciclo a condizione, ripete finché la condizione è vera. Attento ai cicli infiniti!</li>
<li><b>Contatore</b> conta i giri; <b>accumulatore</b> somma i valori.</li>
<li>In Python il rientro (4 spazi) indica cosa sta dentro il ciclo.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire variabili e cicli",
      intro: "Il codice ti sembra arabo? Prova con un'analogia della vita quotidiana, con i blocchi colorati o con le flashcard.",
      tabs: [
        {
          label: "🏃 L'allenamento",
          html: `<p>L'allenatore dice: «<b>Fate 5 giri di campo</b>». È un ciclo <b>for</b>: il numero di ripetizioni è deciso prima. Per non sbagliare conti i giri sulle dita: le dita sono il <b>contatore</b>.</p>
<p>Poi dice: «<b>Correte finché non fischio</b>». È un ciclo <b>while</b>: non sai quanti giri farai, continui finché la condizione («non ha fischiato») è vera.</p>
<p>Il <b>tabellone</b> con il punteggio della partita è una <b>variabile</b>: ha un nome (Casa, Ospiti) e un valore che cambia a ogni gol.</p>`
        },
        {
          label: "🧱 Scratch e Python a confronto",
          html: `<p>Lo stesso programma, «fai un quadrato», in due linguaggi:</p>
<table>
<tr><th>Scratch (blocchi)</th><th>Python (testo, con il modulo turtle)</th></tr>
<tr><td>quando si clicca sulla bandiera verde<br>ripeti 4 volte<br>&nbsp;&nbsp;fai 100 passi<br>&nbsp;&nbsp;ruota di 90 gradi</td><td><code>import turtle</code><br><code>t = turtle.Turtle()</code><br><code>for i in range(4):</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.forward(100)</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.right(90)</code></td></tr>
</table>
<p>Il blocco «ripeti» di Scratch «abbraccia» le istruzioni da ripetere; in Python lo stesso compito lo fa il <b>rientro</b>. Scratch è stato creato al <b>MIT</b> di Boston e pubblicato nel 2007; turtle si ispira al linguaggio <b>Logo</b> (1967), con la sua famosa tartaruga.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<rect x="30" y="30" width="230" height="40" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="145" y="57" font-size="17" font-weight="bold" fill="#422006" text-anchor="middle">ripeti 4 volte</text>
<rect x="30" y="70" width="24" height="110" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<rect x="54" y="80" width="200" height="38" rx="8" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
<text x="154" y="105" font-size="16" fill="#ffffff" text-anchor="middle">fai 100 passi</text>
<rect x="54" y="128" width="200" height="38" rx="8" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
<text x="154" y="153" font-size="16" fill="#ffffff" text-anchor="middle">ruota di 90°</text>
<rect x="30" y="180" width="230" height="22" rx="8" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="300" y="120" font-size="30" fill="#334155" text-anchor="middle">=</text>
<rect x="330" y="40" width="250" height="160" rx="10" fill="#1e293b"/>
<text x="345" y="80" font-size="16" fill="#f472b6" font-family="monospace">for i in range(4):</text>
<text x="375" y="115" font-size="16" fill="#a5f3fc" font-family="monospace">t.forward(100)</text>
<text x="375" y="150" font-size="16" fill="#a5f3fc" font-family="monospace">t.right(90)</text>
<text x="455" y="185" font-size="14" fill="#94a3b8" text-anchor="middle">rientro = dentro il ciclo</text>
</svg>`
        },
        {
          label: "📝 Traccia a mano",
          html: `<p>Un metodo usato nelle scuole di informatica di tutto il mondo: la <b>tabella di traccia</b>. Si «fa finta di essere il computer» e si scrive, riga per riga, il valore di ogni variabile.</p>
<pre><code>x = 1
for i in range(4):
    x = x * 2</code></pre>
<table>
<tr><th>giro</th><th>i</th><th>x prima</th><th>x dopo</th></tr>
<tr><td>1</td><td>0</td><td>1</td><td>2</td></tr>
<tr><td>2</td><td>1</td><td>2</td><td>4</td></tr>
<tr><td>3</td><td>2</td><td>4</td><td>8</td></tr>
<tr><td>4</td><td>3</td><td>8</td><td>16</td></tr>
</table>
<p>Alla fine <code>x</code> vale <b>16</b>. Con la tabella non ti perdi mai, nemmeno nei cicli più lunghi!</p>`
        },
        {
          label: "🃏 Flashcard delle parole chiave",
          html: `<p>Gira le carte per ripassare le parole chiave della programmazione.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "variabile", back: "Scatola con un nome che contiene un valore modificabile" },
            { front: "=", back: "Assegnazione: metti un valore nella variabile" },
            { front: "==", back: "Confronto: i due valori sono uguali?" },
            { front: "for", back: "Ciclo a contatore: numero di ripetizioni noto" },
            { front: "while", back: "Ciclo a condizione: ripete finché è vero" },
            { front: "bug", back: "Errore nel programma" },
            { front: "accumulatore", back: "Variabile che somma i valori a ogni giro" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della programmazione",
      nodes: [
        { id: "algoritmo", label: "Algoritmo", x: 50, y: 7, color: "#7c3aed", html: "Sequenza finita di istruzioni precise per risolvere un problema.", why: "Il nome viene dal matematico persiano <b>al-Khwarizmi</b> (IX secolo), il cui nome latinizzato divenne «algorismus». Un programma è un algoritmo scritto in un linguaggio che il computer capisce." },
        { id: "programma", label: "Programma", x: 50, y: 27, color: "#2563eb", html: "Algoritmo scritto in un linguaggio di programmazione (Scratch, Python…).", why: "Il computer capisce solo 0 e 1: i linguaggi di programmazione sono un ponte tra noi e la macchina. Un altro programma (interprete o compilatore) li traduce." },
        { id: "variabile", label: "Variabile", x: 20, y: 47, color: "#f59e0b", html: "Nome + valore modificabile, salvato nella memoria.", why: "Fisicamente è una zona della memoria RAM con un indirizzo; il nome serve a noi per non dover ricordare indirizzi numerici. L'idea di usare lettere al posto di numeri viene dall'algebra (François Viète, 1591)." },
        { id: "tipi", label: "Tipi di dato", x: 8, y: 72, color: "#f97316", html: "int, float, str, bool.", why: "Il computer deve sapere come interpretare i bit: la stessa sequenza di 0 e 1 può essere un numero o una lettera. Il tipo bool porta il nome di George Boole (1815–1864), che inventò l'algebra del vero/falso." },
        { id: "assegna", label: "Assegnazione =", x: 32, y: 72, color: "#eab308", html: "Mette un valore in una variabile: x = x + 1.", why: "In matematica x = x + 1 è impossibile; in informatica significa «calcola a destra, poi salva a sinistra». Alcuni linguaggi (come Pascal) usano := proprio per evitare confusione." },
        { id: "ciclo", label: "Ciclo", x: 80, y: 47, color: "#16a34a", html: "Istruzioni ripetute: for o while.", why: "Evita di riscrivere mille volte la stessa cosa. Ada Lovelace nel 1843 descrisse già un procedimento ripetuto per la macchina di Babbage." },
        { id: "for", label: "for (contatore)", x: 66, y: 72, color: "#22c55e", html: "Numero di ripetizioni noto: for i in range(10).", why: "Si usa quando sai in anticipo quante volte ripetere. Il contatore i tiene il conto dei giri." },
        { id: "while", label: "while (condizione)", x: 92, y: 72, color: "#14b8a6", html: "Ripete finché la condizione è vera.", why: "Si usa quando non sai quante volte servirà (es. finché l'utente non indovina). La condizione deve prima o poi diventare falsa, altrimenti il ciclo è infinito." },
        { id: "debug", label: "Debug", x: 50, y: 93, color: "#ef4444", html: "Trovare e correggere gli errori (bug).", why: "Dal famoso caso della falena nel computer Mark II (1947). Programmare vuol dire anche sbagliare e correggere: è normale!" }
      ],
      edges: [
        ["algoritmo", "programma", "scritto in un linguaggio"],
        ["programma", "variabile", "usa"],
        ["programma", "ciclo", "usa"],
        ["variabile", "tipi", "ha un"],
        ["variabile", "assegna", "riceve valori con"],
        ["ciclo", "for", "tipo"],
        ["ciclo", "while", "tipo"],
        ["programma", "debug", "si corregge con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: cicli",
      questions: [
        { type: "num", q: "Quante volte viene stampato «Ciao» con: for i in range(7): print(\"Ciao\")?", answer: 7, explain: "range(7) produce 0, 1, 2, 3, 4, 5, 6: sette valori, sette ripetizioni." },
        { type: "mc", q: "Quale ciclo usi se non sai quante volte dovrai ripetere?", options: ["for", "while", "nessuno dei due"], answer: 1, explain: "while ripete finché una condizione è vera, senza un numero fisso." },
        { type: "tf", q: "Il codice «n = 5 / while n > 0: print(n)» si ferma da solo.", answer: false, explain: "n non cambia mai: la condizione resta sempre vera e il ciclo è infinito." }
      ]
    }
  ],
  glossary: [
    { t: "Variabile", d: "Spazio di memoria con un nome che contiene un valore modificabile." },
    { t: "Assegnazione", d: "Istruzione che mette un valore in una variabile (simbolo = in Python)." },
    { t: "Stringa", d: "Sequenza di caratteri, scritta tra virgolette: \"ciao\"." },
    { t: "Booleano", d: "Tipo di dato con due soli valori: True (vero) e False (falso)." },
    { t: "Ciclo (loop)", d: "Gruppo di istruzioni ripetute più volte." },
    { t: "for", d: "Ciclo a contatore, con un numero di ripetizioni stabilito." },
    { t: "while", d: "Ciclo a condizione: ripete finché la condizione è vera." },
    { t: "Contatore", d: "Variabile che conta i giri di un ciclo." },
    { t: "Accumulatore", d: "Variabile che somma (accumula) valori a ogni giro." },
    { t: "Ciclo infinito", d: "Ciclo la cui condizione non diventa mai falsa: il programma non finisce." },
    { t: "Bug / debug", d: "Errore nel programma / attività di trovarlo e correggerlo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è una variabile?", options: ["Un errore del programma", "Un contenitore con un nome per un valore che può cambiare", "Un tipo di ciclo"], answer: 1, explain: "Una variabile è una «scatola» con un nome e un valore." },
      { type: "num", q: "a = 10, poi a = a - 4, poi a = a * 2. Quanto vale a?", answer: 12, explain: "10 − 4 = 6; 6 × 2 = 12." },
      { type: "mc", q: "Quale valore è un booleano?", options: ["\"vero\"", "True", "1.5"], answer: 1, explain: "In Python i booleani sono True e False, senza virgolette." },
      { type: "num", q: "x = 0; for i in range(5): x = x + 2. Quanto vale x alla fine?", answer: 10, explain: "Il ciclo gira 5 volte e ogni volta aggiunge 2: 5 × 2 = 10." },
      { type: "text", q: "Quale parola chiave di Python crea un ciclo che ripete finché una condizione è vera?", answer: ["while"], explain: "while = «finché»." },
      { type: "tf", q: "range(3) produce i numeri 1, 2, 3.", answer: false, explain: "range(3) produce 0, 1, 2: si parte da 0 e ci si ferma prima di 3." },
      { type: "mc", q: "Che cosa succede se in un ciclo while la condizione non diventa mai falsa?", options: ["Il programma si ferma subito", "Si crea un ciclo infinito", "Il computer corregge da solo l'errore"], answer: 1, explain: "Il ciclo continua per sempre: è un ciclo infinito." },
      { type: "mc", q: "Qual è la differenza fra = e == in Python?", options: ["Nessuna", "= assegna, == confronta", "= confronta, == assegna"], answer: 1, explain: "= mette un valore in una variabile; == controlla se due valori sono uguali." },
      { type: "order", q: "Ordina le righe per sommare i numeri da 1 a 10 e mostrare il risultato.", items: ["somma = 0", "for n in range(1, 11):", "    somma = somma + n", "print(somma)"], explain: "Prima si azzera l'accumulatore, poi il ciclo somma, infine si stampa." },
      { type: "num", q: "Quanto fa la somma dei numeri da 1 a 100 calcolata nell'esempio di Gauss?", answer: 5050, explain: "50 coppie da 101: 50 × 101 = 5050." },
      { type: "text", q: "Come si chiama la matematica che nel 1843 scrisse il primo programma della storia? (cognome)", answer: ["lovelace", "ada lovelace"], explain: "Ada Lovelace, per la macchina analitica di Charles Babbage." },
      { type: "num", q: "x = 1; for i in range(3): x = x * 3. Quanto vale x?", answer: 27, explain: "1 × 3 = 3, 3 × 3 = 9, 9 × 3 = 27." }
    ]
  }
});
