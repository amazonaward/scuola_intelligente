TOPIC('it', {
  id: "m3-mat-probabilita",
  title: "Probabilità e statistica",
  intro: "Quanti compagni preferiscono il calcio? Qual è il voto più frequente? Che possibilità ho di fare 6 con un dado? La <b>statistica</b> raccoglie e riassume i dati, la <b>probabilità</b> misura quanto è facile che un evento accada. Insieme ci aiutano a prendere decisioni quando non tutto è certo.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è un'indagine statistica",
      html: `<p>La <b>statistica</b> studia i fenomeni <b>collettivi</b>, cioè che riguardano tanti individui (persone, oggetti, eventi). Un'indagine statistica si fa in 4 passi:</p>
<ol>
<li><b>Definire il problema</b> e la <b>popolazione</b> (l'insieme di tutti gli elementi che si vogliono studiare: es. tutti gli alunni della scuola).</li>
<li><b>Raccogliere i dati</b>: su tutta la popolazione (<b>censimento</b>) oppure su una parte scelta bene, il <b>campione</b>.</li>
<li><b>Organizzare i dati</b> in tabelle e rappresentarli con grafici.</li>
<li><b>Elaborare e interpretare</b>: calcolare frequenze e indici (media, moda, mediana) e trarre conclusioni.</li>
</ol>
<p>Ogni proprietà che osserviamo si chiama <b>carattere</b>. Un carattere può essere:</p>
<ul>
<li><b>qualitativo</b>, espresso con parole (colore preferito, sport praticato);</li>
<li><b>quantitativo</b>, espresso con numeri (altezza, numero di fratelli, voto). I suoi valori si chiamano <b>modalità</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "2. Le frequenze: assoluta, relativa, percentuale",
      html: `<p>Chiediamo ai 25 alunni di una 3ª media: <i>"Quale sport pratichi?"</i>. Contiamo le risposte:</p>
<table>
<tr><th>Sport</th><th>Frequenza assoluta</th><th>Frequenza relativa</th><th>Frequenza percentuale</th></tr>
<tr><td>⚽ Calcio</td><td>10</td><td>10/25 = 0,40</td><td>40%</td></tr>
<tr><td>🏐 Pallavolo</td><td>6</td><td>6/25 = 0,24</td><td>24%</td></tr>
<tr><td>🏊 Nuoto</td><td>5</td><td>5/25 = 0,20</td><td>20%</td></tr>
<tr><td>🤸 Ginnastica</td><td>4</td><td>4/25 = 0,16</td><td>16%</td></tr>
<tr><td><b>Totale</b></td><td><b>25</b></td><td><b>1</b></td><td><b>100%</b></td></tr>
</table>
<ul>
<li><b>Frequenza assoluta</b> (f): quante volte compare una modalità.</li>
<li><b>Frequenza relativa</b>: f diviso il totale dei dati. La somma delle frequenze relative è sempre <b>1</b>.</li>
<li><b>Frequenza percentuale</b>: frequenza relativa × 100. La somma è sempre <b>100%</b>.</li>
</ul>
<p>Le frequenze relative servono per <b>confrontare</b> gruppi di grandezza diversa: 10 calciatori su 25 (40%) sono "di più" di 12 calciatori su 40 (30%)!</p>`
    },
    {
      type: "svg",
      title: "Gli stessi dati in due grafici",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<text x="160" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#1e293b">Istogramma (ortogramma)</text>
<line x1="40" y1="270" x2="300" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="40" y1="270" x2="40" y2="50" stroke="#334155" stroke-width="2"/>
<text x="32" y="274" font-size="14" text-anchor="end" fill="#334155">0</text>
<text x="32" y="174" font-size="14" text-anchor="end" fill="#334155">5</text>
<text x="32" y="74" font-size="14" text-anchor="end" fill="#334155">10</text>
<line x1="40" y1="170" x2="300" y2="170" stroke="#cbd5e1" stroke-dasharray="4"/>
<line x1="40" y1="70" x2="300" y2="70" stroke="#cbd5e1" stroke-dasharray="4"/>
<rect x="55" y="70" width="45" height="200" fill="#ef4444"/>
<rect x="115" y="150" width="45" height="120" fill="#3b82f6"/>
<rect x="175" y="170" width="45" height="100" fill="#22c55e"/>
<rect x="235" y="190" width="45" height="80" fill="#f59e0b"/>
<text x="77" y="62" font-size="15" text-anchor="middle" fill="#1e293b">10</text>
<text x="137" y="142" font-size="15" text-anchor="middle" fill="#1e293b">6</text>
<text x="197" y="162" font-size="15" text-anchor="middle" fill="#1e293b">5</text>
<text x="257" y="182" font-size="15" text-anchor="middle" fill="#1e293b">4</text>
<text x="77" y="292" font-size="14" text-anchor="middle" fill="#1e293b">Calcio</text>
<text x="137" y="292" font-size="14" text-anchor="middle" fill="#1e293b">Pallavolo</text>
<text x="197" y="292" font-size="14" text-anchor="middle" fill="#1e293b">Nuoto</text>
<text x="257" y="292" font-size="14" text-anchor="middle" fill="#1e293b">Ginnastica</text>
<text x="480" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#1e293b">Aerogramma (a torta)</text>
<path d="M480 165 L480 55 A110 110 0 0 1 544.66 254 Z" fill="#ef4444"/>
<path d="M480 165 L544.66 254 A110 110 0 0 1 395.25 235.1 Z" fill="#3b82f6"/>
<path d="M480 165 L395.25 235.1 A110 110 0 0 1 387.1 106.1 Z" fill="#22c55e"/>
<path d="M480 165 L387.1 106.1 A110 110 0 0 1 480 55 Z" fill="#f59e0b"/>
<text x="520" y="140" font-size="16" font-weight="bold" fill="#ffffff">40%</text>
<text x="472" y="235" font-size="16" font-weight="bold" fill="#ffffff">24%</text>
<text x="398" y="178" font-size="16" font-weight="bold" fill="#ffffff">20%</text>
<text x="430" y="112" font-size="16" font-weight="bold" fill="#ffffff">16%</text>
<text x="480" y="300" font-size="14" text-anchor="middle" fill="#334155">angolo = percentuale × 3,6°  (40% → 144°)</text>
</svg>`,
      caption: "L'istogramma confronta bene le quantità; l'aerogramma mostra le parti di un tutto. Nell'aerogramma ogni settore ha un angolo proporzionale alla frequenza: 100% = 360°."
    },
    {
      type: "text",
      title: "3. Gli indici: media, moda, mediana",
      html: `<p>Per riassumere molti dati con <b>un solo numero</b> si usano gli <b>indici di posizione centrale</b>. Prendiamo i voti di Luca in matematica: <b>5, 7, 6, 8, 7, 9, 7</b>.</p>
<ul>
<li><b>Media aritmetica</b>: somma di tutti i valori diviso il loro numero.<br>(5+7+6+8+7+9+7) : 7 = 49 : 7 = <b>7</b>.</li>
<li><b>Moda</b>: il valore più frequente. Il 7 compare 3 volte: moda = <b>7</b>. (Una distribuzione può avere più mode, o nessuna. La moda vale anche per i caratteri qualitativi: nella tabella degli sport la moda è "calcio".)</li>
<li><b>Mediana</b>: si mettono i dati <b>in ordine</b> e si prende quello <b>centrale</b>.<br>5, 6, 7, <b>7</b>, 7, 8, 9 → mediana = <b>7</b>. Se i dati sono in numero pari, la mediana è la media dei due centrali.</li>
<li><b>Campo di variazione</b>: valore massimo − valore minimo = 9 − 5 = <b>4</b>. Dice quanto i dati sono "sparpagliati".</li>
</ul>
<p>⚠️ La media è sensibile ai valori estremi: se in un'azienda 9 persone guadagnano 1.500 € e il capo 30.000 €, la media è 4.350 €, ma nessun dipendente guadagna così! In questi casi la <b>mediana</b> (1.500 €) descrive meglio la situazione.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le temperature della settimana",
      html: `<p>A Torino, in una settimana di aprile, le temperature massime sono state: <b>14, 16, 15, 19, 21, 16, 18 °C</b>.</p>
<ul>
<li>Media: (14+16+15+19+21+16+18) : 7 = 119 : 7 = <b>17 °C</b>;</li>
<li>Ordinati: 14, 15, 16, <b>16</b>, 18, 19, 21 → mediana = <b>16 °C</b>;</li>
<li>Moda = <b>16 °C</b> (compare 2 volte);</li>
<li>Campo di variazione = 21 − 14 = <b>7 °C</b>.</li>
</ul>
<p>I meteorologi usano proprio questi indici per dire se un mese è stato "più caldo della media".</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: statistica",
      questions: [
        { type: "num", q: "Calcola la media di 4, 8, 6, 10.", answer: 7, explain: "(4+8+6+10) : 4 = 28 : 4 = 7." },
        { type: "num", q: "Qual è la mediana di 3, 9, 4, 7, 5?", answer: 5, explain: "In ordine: 3, 4, 5, 7, 9. Il valore centrale è 5." },
        { type: "mc", q: "Il colore degli occhi è un carattere…", options: ["quantitativo", "qualitativo", "numerico continuo"], answer: 1, explain: "Si esprime con parole (azzurri, castani…), quindi è qualitativo." },
        { type: "num", q: "In una classe di 20 alunni, 5 hanno un gatto. Qual è la frequenza percentuale?", answer: 25, unit: "%", explain: "5/20 = 0,25 → 25%." }
      ]
    },
    {
      type: "text",
      title: "4. Gli eventi: certi, impossibili, probabili",
      html: `<p>Un <b>evento</b> è un fatto che può accadere o no come risultato di un esperimento (lanciare un dado, estrarre una carta…). Gli eventi possono essere:</p>
<ul>
<li><b>certi</b>: accadono sempre (lanciando un dado, esce un numero minore di 7);</li>
<li><b>impossibili</b>: non accadono mai (esce 8);</li>
<li><b>aleatori</b> o <b>probabili</b>: possono accadere o no (esce 6).</li>
</ul>
<p>L'insieme di tutti i risultati possibili si chiama <b>spazio campionario</b>. Per un dado: {1, 2, 3, 4, 5, 6}.</p>`
    },
    {
      type: "widget",
      title: "Certo, probabile o impossibile?",
      widget: "classify",
      options: {
        groups: ["✅ Certo", "🎲 Probabile", "🚫 Impossibile"],
        items: [
          ["Domani dopo lunedì viene martedì", 0],
          ["Lanciando un dado esce un numero pari", 1],
          ["Lanciando un dado esce 7", 2],
          ["Estraendo una carta da un mazzo di 40 esce un asso", 1],
          ["Lanciando una moneta esce testa o croce", 0],
          ["Da un sacchetto con sole biglie rosse estraggo una biglia blu", 2],
          ["Domani pioverà a Milano", 1],
          ["Lanciando due dadi la somma è 1", 2]
        ]
      },
      caption: "Trascina o tocca ogni evento e mettilo nel gruppo giusto."
    },
    {
      type: "text",
      title: "5. La probabilità classica",
      html: `<p>Se tutti i risultati sono <b>ugualmente possibili</b> (dado non truccato, moneta equilibrata…), la probabilità di un evento E è:</p>
<p style="text-align:center;font-size:1.25em"><b>p(E) = casi favorevoli / casi possibili</b></p>
<p>Esempi con un dado:</p>
<ul>
<li>p(esce 6) = <b>1/6</b> ≈ 0,167 ≈ 16,7%;</li>
<li>p(esce un numero pari) = 3/6 = <b>1/2</b> = 50% (favorevoli: 2, 4, 6);</li>
<li>p(esce un numero minore di 7) = 6/6 = <b>1</b> → evento <b>certo</b>;</li>
<li>p(esce 8) = 0/6 = <b>0</b> → evento <b>impossibile</b>.</li>
</ul>
<p>Quindi la probabilità è sempre un numero <b>tra 0 e 1</b> (cioè tra 0% e 100%) e si può scrivere come frazione, numero decimale o percentuale.</p>
<p><b>Evento contrario</b>: "non esce 6" ha probabilità 1 − 1/6 = <b>5/6</b>. In generale p(non E) = 1 − p(E).</p>`
    },
    {
      type: "3d",
      title: "Il dado: 6 facce, 6 casi possibili",
      scene: "solid",
      options: { shape: "cube", color: "#f8fafc", labels: true },
      caption: "Un dado è un cubo: 6 facce uguali, quindi (se non è truccato) ogni faccia ha la stessa probabilità, 1/6. Ruotalo: le facce opposte di un dado vero sommano sempre 7 (1-6, 2-5, 3-4)."
    },
    {
      type: "widget",
      title: "La probabilità come parte di un intero",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "Una probabilità è una frazione dell'intero (l'intero = evento certo = 1). Prova: 3/6 è la probabilità di un numero pari, 2/6 quella di \"3 o più di 4\"…"
    },
    {
      type: "example",
      title: "Esempio pratico: la somma di due dadi",
      html: `<p>Lanciamo due dadi (uno rosso e uno blu) e sommiamo i punti. I casi possibili sono <b>6 × 6 = 36</b> (ogni faccia del rosso con ogni faccia del blu).</p>
<p>Somma 7 si ottiene in <b>6 modi</b>: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1 → p = 6/36 = <b>1/6</b>.<br>
Somma 2 solo in 1 modo (1+1) → p = <b>1/36</b>. Somma 12 solo con 6+6 → <b>1/36</b>.</p>
<p>Ecco perché nei giochi da tavolo con due dadi il 7 esce così spesso! Le somme non sono ugualmente probabili, anche se ogni dado è equo.</p>`
    },
    {
      type: "3d",
      title: "I 36 casi dei due dadi in 3D",
      scene: "blocks",
      options: { mode: "array", a: 6, b: 6 },
      caption: "Ogni cubetto è una coppia (dado rosso, dado blu). Le coppie con somma 7 stanno su una diagonale: sono 6 su 36."
    },
    {
      type: "text",
      title: "6. Probabilità frequentista ed eventi composti",
      html: `<p>Non sempre i casi sono ugualmente possibili (un dado truccato, la probabilità che un'auto abbia un guasto…). Allora si fanno molte <b>prove</b> e si calcola la <b>frequenza relativa</b>:</p>
<p style="text-align:center"><b>f = numero di volte in cui E è accaduto / numero di prove</b></p>
<p>La <b>legge dei grandi numeri</b> dice che, aumentando il numero di prove, la frequenza relativa si avvicina sempre di più alla probabilità. Con 10 lanci di moneta puoi avere 7 teste; con 10.000 lanci sarai molto vicino al 50%.</p>
<p><b>Eventi composti</b>:</p>
<ul>
<li><b>Eventi incompatibili</b> (non possono accadere insieme): p(A <b>o</b> B) = p(A) + p(B). Es. dado: p(1 o 2) = 1/6 + 1/6 = 1/3.</li>
<li><b>Eventi indipendenti</b> (uno non influenza l'altro): p(A <b>e</b> B) = p(A) × p(B). Es. due monete: p(testa e testa) = 1/2 × 1/2 = 1/4.</li>
</ul>
<p>⚠️ <b>Il dado non ha memoria!</b> Se è uscito 5 volte di fila "testa", al lancio successivo la probabilità di croce è ancora 1/2. Credere il contrario si chiama <b>fallacia del giocatore</b>: è uno dei motivi per cui il gioco d'azzardo crea dipendenza e fa perdere soldi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La probabilità è nata da una partita a dadi",
      html: `<p>Nel <b>1654</b> un giocatore francese, il Cavaliere de Méré, chiese al matematico <b>Blaise Pascal</b> come dividere la posta di una partita interrotta. Pascal ne discusse per lettera con <b>Pierre de Fermat</b>: da quelle lettere nacque il calcolo delle probabilità. Già un secolo prima l'italiano <b>Gerolamo Cardano</b> aveva scritto un libro sui giochi di dadi, il <i>Liber de ludo aleae</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il paradosso del compleanno",
      html: `<p>In una classe di <b>23 persone</b> c'è più del <b>50%</b> di probabilità che almeno due compiano gli anni lo stesso giorno; con 30 persone si arriva a circa il <b>70%</b>! Sembra strano, ma le coppie possibili tra 23 persone sono ben 253. Provate a verificarlo nella vostra classe.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Un grafico che salvò vite",
      html: `<p>L'infermiera inglese <b>Florence Nightingale</b>, durante la guerra di Crimea (1854-1856), disegnò speciali grafici circolari per mostrare che la maggior parte dei soldati moriva per le infezioni negli ospedali, non per le ferite. Grazie ai suoi dati gli ospedali militari migliorarono l'igiene. In Italia i dati sulla popolazione li raccoglie l'<b>ISTAT</b>, con il censimento.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la probabilità",
      intro: "Se la formula \"favorevoli su possibili\" non ti convince, prova una di queste strade.",
      tabs: [
        {
          label: "🌳 Diagramma ad albero",
          html: `<p>Per eventi in più fasi si disegna un <b>albero</b>: ogni ramo è un risultato e porta la sua probabilità. Per sapere la probabilità di un percorso si <b>moltiplicano</b> le probabilità sui rami. Esempio: lancio due volte una moneta. Ci sono 4 percorsi, ognuno con probabilità 1/2 × 1/2 = 1/4. "Almeno una testa" = TT, TC, CT → 3/4.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="60" cy="150" r="12" fill="#0f172a"/>
<line x1="60" y1="150" x2="230" y2="80" stroke="#2563eb" stroke-width="4"/>
<line x1="60" y1="150" x2="230" y2="220" stroke="#dc2626" stroke-width="4"/>
<text x="130" y="100" font-size="16" fill="#2563eb">1/2</text>
<text x="130" y="215" font-size="16" fill="#dc2626">1/2</text>
<circle cx="245" cy="80" r="20" fill="#2563eb"/><text x="245" y="86" font-size="17" fill="#fff" text-anchor="middle">T</text>
<circle cx="245" cy="220" r="20" fill="#dc2626"/><text x="245" y="226" font-size="17" fill="#fff" text-anchor="middle">C</text>
<line x1="265" y1="80" x2="400" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="265" y1="80" x2="400" y2="115" stroke="#dc2626" stroke-width="4"/>
<line x1="265" y1="220" x2="400" y2="185" stroke="#2563eb" stroke-width="4"/>
<line x1="265" y1="220" x2="400" y2="260" stroke="#dc2626" stroke-width="4"/>
<circle cx="418" cy="40" r="18" fill="#2563eb"/><text x="418" y="46" font-size="16" fill="#fff" text-anchor="middle">T</text>
<circle cx="418" cy="115" r="18" fill="#dc2626"/><text x="418" y="121" font-size="16" fill="#fff" text-anchor="middle">C</text>
<circle cx="418" cy="185" r="18" fill="#2563eb"/><text x="418" y="191" font-size="16" fill="#fff" text-anchor="middle">T</text>
<circle cx="418" cy="260" r="18" fill="#dc2626"/><text x="418" y="266" font-size="16" fill="#fff" text-anchor="middle">C</text>
<text x="450" y="46" font-size="16" fill="#0f172a">TT → 1/4</text>
<text x="450" y="121" font-size="16" fill="#0f172a">TC → 1/4</text>
<text x="450" y="191" font-size="16" fill="#0f172a">CT → 1/4</text>
<text x="450" y="266" font-size="16" fill="#0f172a">CC → 1/4</text>
<text x="20" y="290" font-size="15" fill="#475569">1° lancio</text>
<text x="300" y="290" font-size="15" fill="#475569">2° lancio</text>
</svg>`
        },
        {
          label: "🍬 Il sacchetto di caramelle",
          html: `<p>Immagina un sacchetto con <b>10 caramelle</b>: 3 alla fragola, 5 al limone, 2 alla menta. Peschi a occhi chiusi. La probabilità di prendere la fragola è la <b>fetta di torta</b> che le caramelle alla fragola occupano: 3 su 10. Muovi i cursori: se aggiungi caramelle alla fragola, la fetta (e la probabilità) cresce; se aggiungi caramelle di altri gusti, il denominatore cresce e la probabilità scende.</p>`,
          widget: "fractionPie",
          options: { n: 3, d: 10 }
        },
        {
          label: "🧊 Tabella a doppia entrata in 3D",
          html: `<p>Per due dadi, invece della formula, costruisci la <b>griglia</b>: righe = dado rosso, colonne = dado blu. Ogni cubetto è un caso. Conta i cubetti che ti interessano: è il metodo più usato nelle scuole del Regno Unito e degli Stati Uniti ("sample space diagram"). Cambia i numeri: con un dado da 4 e uno da 6 i casi sono 24.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 6, b: 6 }
        },
        {
          label: "🇬🇧 Le \"odds\" (quote)",
          html: `<p>Nei Paesi anglosassoni si usano spesso le <b>odds</b>: invece di "favorevoli su possibili" si dice "favorevoli <b>contro</b> sfavorevoli". Per il 6 di un dado: odds <b>1 a 5</b> (1 caso favorevole, 5 sfavorevoli), mentre la probabilità è 1/6.</p>
<table><tr><th>Evento</th><th>Probabilità</th><th>Odds</th></tr>
<tr><td>Testa con una moneta</td><td>1/2</td><td>1 a 1</td></tr>
<tr><td>Esce 6</td><td>1/6</td><td>1 a 5</td></tr>
<tr><td>Asso da 40 carte</td><td>4/40 = 1/10</td><td>4 a 36 = 1 a 9</td></tr></table>
<p>Per passare dalle odds "a contro b" alla probabilità: p = a / (a + b).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: dai dati alla probabilità",
      nodes: [
        { id: "dati", label: "Dati e popolazione", x: 50, y: 6, color: "#0ea5e9", html: "I valori raccolti osservando un carattere su una popolazione o su un campione.", why: "Gli Stati raccolgono dati da millenni: censimenti si facevano già in Egitto, in Cina e a Roma (il <i>census</i> serviva per tasse e leva militare). La parola <b>statistica</b> viene da \"Stato\": nel Settecento indicava la scienza delle informazioni utili a governare." },
        { id: "frequenze", label: "Frequenze", x: 20, y: 28, color: "#22c55e", html: "Assoluta, relativa (f/n) e percentuale (×100).", why: "Servono per confrontare gruppi di dimensioni diverse: dividendo per il totale si porta tutto alla stessa scala (\"su 1\" o \"su 100\")." },
        { id: "grafici", label: "Grafici", x: 50, y: 30, color: "#f59e0b", html: "Istogrammi, aerogrammi, diagrammi cartesiani, ideogrammi.", why: "Il diagramma a barre e quello a torta furono inventati dallo scozzese <b>William Playfair</b> tra il 1786 e il 1801: un'immagine fa vedere a colpo d'occhio ciò che una tabella nasconde." },
        { id: "indici", label: "Media, moda, mediana", x: 80, y: 28, color: "#a855f7", html: "Indici che riassumono una distribuzione con un solo valore centrale.", why: "La media nasce dall'idea di \"dividere in parti uguali\" il totale; la mediana è più robusta ai valori estremi; la moda è l'unica utilizzabile con dati non numerici." },
        { id: "evento", label: "Evento", x: 30, y: 55, color: "#ef4444", html: "Un risultato possibile di un esperimento aleatorio: certo, impossibile o probabile.", why: "Un esperimento è aleatorio quando conosciamo i risultati possibili ma non quale uscirà: è il caso del dado, ma anche del meteo o della genetica (Mendel usò proprio la probabilità per spiegare l'ereditarietà)." },
        { id: "classica", label: "Probabilità classica", x: 15, y: 80, color: "#2563eb", html: "p = casi favorevoli / casi possibili, se i casi sono equiprobabili.", why: "Nasce dalle lettere tra <b>Pascal</b> e <b>Fermat</b> (1654) sui giochi d'azzardo; Laplace la formulò in modo completo nel 1812. Funziona solo se i casi hanno tutti la stessa probabilità." },
        { id: "frequentista", label: "Probabilità frequentista", x: 50, y: 80, color: "#14b8a6", html: "La probabilità stimata come frequenza relativa dopo moltissime prove.", why: "Si basa sulla <b>legge dei grandi numeri</b>, dimostrata da <b>Jakob Bernoulli</b> (pubblicata nel 1713): più prove si fanno, più la frequenza si avvicina alla probabilità. È così che le assicurazioni calcolano i rischi." },
        { id: "composti", label: "Eventi composti", x: 85, y: 62, color: "#db2777", html: "Somma per eventi incompatibili (o), prodotto per eventi indipendenti (e).", why: "Se due eventi non si sovrappongono, i loro casi favorevoli si sommano; se sono indipendenti, ogni caso del primo si combina con ogni caso del secondo, come nella griglia 6×6 dei due dadi: per questo si moltiplica." },
        { id: "decisioni", label: "Decisioni nell'incertezza", x: 85, y: 92, color: "#64748b", html: "Previsioni meteo, medicina, assicurazioni, sondaggi, sport.", why: "Statistica e probabilità permettono di decidere razionalmente quando non si può essere sicuri: per esempio un farmaco si approva confrontando statisticamente un gruppo che lo prende e uno che non lo prende." }
      ],
      edges: [
        ["dati", "frequenze", "si contano"],
        ["dati", "grafici", "si rappresentano"],
        ["dati", "indici", "si riassumono"],
        ["frequenze", "frequentista", "stimano la"],
        ["evento", "classica", "si misura con la"],
        ["evento", "frequentista", "oppure con la"],
        ["classica", "composti", "si combina in"],
        ["composti", "decisioni", "aiutano le"],
        ["indici", "decisioni", "aiutano le"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: probabilità",
      questions: [
        { type: "mc", q: "Qual è la probabilità di estrarre una carta di cuori da un mazzo di 52 carte francesi (13 di cuori)?", options: ["1/13", "1/4", "1/2"], answer: 1, explain: "13/52 = 1/4." },
        { type: "tf", q: "Una probabilità può valere 1,5.", answer: false, explain: "La probabilità è sempre compresa tra 0 (impossibile) e 1 (certo)." },
        { type: "num", q: "Un sacchetto contiene 4 biglie rosse e 6 blu. Qual è la probabilità (in %) di estrarre una biglia rossa?", answer: 40, unit: "%", explain: "4/10 = 0,4 = 40%." },
        { type: "mc", q: "È uscita croce 4 volte di fila. Al 5° lancio la probabilità di croce è…", options: ["più bassa di 1/2", "1/2", "più alta di 1/2"], answer: 1, explain: "I lanci sono indipendenti: la moneta non ricorda i risultati precedenti." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Frequenza relativa = f / n; percentuale = relativa × 100.</li>
<li><b>Media</b> = somma : numero dei dati; <b>moda</b> = valore più frequente; <b>mediana</b> = valore centrale dei dati ordinati.</li>
<li><b>p(E) = favorevoli / possibili</b>, con 0 ≤ p ≤ 1. Evento certo: 1; impossibile: 0.</li>
<li>p(non E) = 1 − p(E).</li>
<li>Incompatibili: p(A o B) = p(A) + p(B). Indipendenti: p(A e B) = p(A) × p(B).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Popolazione statistica", d: "L'insieme di tutti gli elementi su cui si fa un'indagine." },
    { t: "Campione", d: "Una parte della popolazione, scelta in modo da rappresentarla." },
    { t: "Carattere", d: "La proprietà osservata (qualitativa o quantitativa)." },
    { t: "Frequenza assoluta", d: "Quante volte compare un valore." },
    { t: "Frequenza relativa", d: "Frequenza assoluta divisa il numero totale di dati." },
    { t: "Media aritmetica", d: "Somma dei valori divisa il loro numero." },
    { t: "Moda", d: "Il valore che compare più spesso." },
    { t: "Mediana", d: "Il valore centrale dei dati messi in ordine." },
    { t: "Evento aleatorio", d: "Un evento che può accadere o non accadere." },
    { t: "Spazio campionario", d: "L'insieme di tutti i risultati possibili di un esperimento." },
    { t: "Eventi indipendenti", d: "Eventi in cui il verificarsi dell'uno non cambia la probabilità dell'altro." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Calcola la media di 12, 15, 18, 15.", answer: 15, explain: "(12+15+18+15) : 4 = 60 : 4 = 15." },
      { type: "num", q: "Qual è la mediana di 2, 8, 5, 10, 4, 9?", answer: 6.5, tol: 0.01, explain: "In ordine: 2, 4, 5, 8, 9, 10. I due centrali sono 5 e 8: (5+8):2 = 6,5." },
      { type: "text", q: "Come si chiama il valore che compare più spesso in una serie di dati?", answer: ["moda", "la moda"], explain: "È la moda." },
      { type: "mc", q: "Il numero di fratelli è un carattere…", options: ["qualitativo", "quantitativo", "né l'uno né l'altro"], answer: 1, explain: "Si esprime con un numero." },
      { type: "num", q: "In un aerogramma, quanti gradi occupa un settore che rappresenta il 25%?", answer: 90, unit: "°", explain: "25 × 3,6° = 90°." },
      { type: "mc", q: "Lanciando un dado, qual è la probabilità che esca un numero maggiore di 4?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 1, explain: "Favorevoli: 5 e 6 → 2/6 = 1/3." },
      { type: "tf", q: "L'evento \"lanciando un dado esce 0\" ha probabilità 0.", answer: true, explain: "È un evento impossibile." },
      { type: "num", q: "La probabilità che domani piova è 0,3. Qual è la probabilità che NON piova?", answer: 0.7, tol: 0.001, explain: "1 − 0,3 = 0,7." },
      { type: "mc", q: "Lanciando due dadi, qual è la probabilità che la somma sia 2?", options: ["1/36", "1/12", "1/6", "2/36"], answer: 0, explain: "Solo 1+1 su 36 casi possibili." },
      { type: "mc", q: "Lancio una moneta e un dado. Probabilità di \"testa e 6\"?", options: ["1/8", "1/12", "2/3", "7/12"], answer: 1, explain: "Eventi indipendenti: 1/2 × 1/6 = 1/12." },
      { type: "tf", q: "Secondo la legge dei grandi numeri, con molte prove la frequenza relativa si avvicina alla probabilità.", answer: true, explain: "È il fondamento della probabilità frequentista." },
      { type: "order", q: "Metti in ordine le fasi di un'indagine statistica.", items: ["Definire il problema e la popolazione", "Raccogliere i dati", "Organizzare i dati in tabelle e grafici", "Calcolare gli indici e interpretare"], explain: "Prima si decide cosa studiare, poi si raccolgono, ordinano ed elaborano i dati." }
    ],
    gen: [["percent", 2], ["fracEquiv", 1]]
  }
});
