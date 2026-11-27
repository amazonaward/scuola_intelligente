TOPIC('it', {
  id: "l1-mat-statistica",
  title: "Statistica descrittiva",
  intro: "Ogni giorno veniamo investiti da numeri: sondaggi, percentuali, \"in media\", \"la maggioranza dei\"… La <b>statistica</b> è la scienza che ci permette di raccogliere dati, organizzarli, riassumerli e leggerli con senso critico. In questa lezione impari a costruire tabelle di frequenze e grafici e a calcolare gli <b>indici</b> che riassumono un insieme di dati: <b>media, mediana, moda</b> e le misure di <b>variabilità</b> (campo di variazione, varianza, scarto quadratico medio).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Popolazione, campione, carattere",
      html: `<p>La statistica descrittiva parte da alcuni termini:</p>
<ul>
<li><b>Popolazione</b> (o collettivo): l'insieme di tutti gli individui su cui si indaga (gli studenti di una scuola, le famiglie di una città…). Ogni elemento è un'<b>unità statistica</b>.</li>
<li><b>Campione</b>: un sottoinsieme della popolazione, scelto per studiarla senza interpellare tutti. Perché il campione sia affidabile deve essere <b>rappresentativo</b> (scelto a caso, non solo tra i propri amici!).</li>
<li><b>Carattere</b>: ciò che si osserva su ogni unità; le sue possibili manifestazioni sono le <b>modalità</b>.</li>
</ul>
<p>I caratteri possono essere:</p>
<ul>
<li><b>qualitativi</b>: le modalità sono nomi (colore degli occhi, squadra del cuore, indirizzo di studi);</li>
<li><b>quantitativi discreti</b>: numeri interi ottenuti contando (numero di fratelli, voti interi);</li>
<li><b>quantitativi continui</b>: numeri misurati, che possono assumere qualsiasi valore in un intervallo (altezza, peso, tempo). Si raggruppano in <b>classi</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Che tipo di carattere è?",
      widget: "classify",
      options: { groups: ["Qualitativo", "Quantitativo discreto", "Quantitativo continuo"], items: [
        ["colore degli occhi", 0],
        ["numero di fratelli", 1],
        ["altezza", 2],
        ["squadra tifata", 0],
        ["voto in pagella (interi)", 1],
        ["peso", 2],
        ["tempo sui 100 m", 2],
        ["messaggi inviati al giorno", 1]
      ] },
      caption: "Se conti è discreto, se misuri è continuo, se descrivi con parole è qualitativo."
    },
    {
      type: "text",
      title: "Frequenze e tabelle",
      html: `<p>Dopo aver raccolto i dati, si contano quante volte compare ciascuna modalità. Quel conteggio è la <b>frequenza</b>:</p>
<ul>
<li><b>frequenza assoluta</b> (f): quante volte compare la modalità;</li>
<li><b>frequenza relativa</b> (f/n): la frazione sul totale n delle osservazioni (un numero tra 0 e 1);</li>
<li><b>frequenza percentuale</b>: la relativa × 100;</li>
<li><b>frequenza cumulata</b>: somma delle frequenze fino a quella modalità (per caratteri ordinabili).</li>
</ul>
<p><b>Esempio</b>: i voti di 20 studenti in una verifica.</p>
<table>
<tr><th>Voto</th><th>f</th><th>f relativa</th><th>%</th><th>cumulata</th></tr>
<tr><td>5</td><td>2</td><td>0,10</td><td>10 %</td><td>2</td></tr>
<tr><td>6</td><td>5</td><td>0,25</td><td>25 %</td><td>7</td></tr>
<tr><td>7</td><td>7</td><td>0,35</td><td>35 %</td><td>14</td></tr>
<tr><td>8</td><td>4</td><td>0,20</td><td>20 %</td><td>18</td></tr>
<tr><td>9</td><td>2</td><td>0,10</td><td>10 %</td><td>20</td></tr>
<tr><td><b>Totale</b></td><td><b>20</b></td><td><b>1</b></td><td><b>100 %</b></td><td></td></tr>
</table>
<p>Controllo: la somma delle frequenze assolute è n e quella delle relative è sempre <b>1</b>.</p>`
    },
    {
      type: "svg",
      title: "Il grafico dei voti",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="560" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="60" stroke="#475569" stroke-width="2"/>
<rect x="80" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="170" y="125" width="70" height="125" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="260" y="75" width="70" height="175" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
<rect x="350" y="150" width="70" height="100" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="440" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<g font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="115" y="278">5</text><text x="205" y="278">6</text><text x="295" y="278">7</text><text x="385" y="278">8</text><text x="475" y="278">9</text>
</g>
<g font-size="16" text-anchor="middle" fill="#1e3a8a">
<text x="115" y="192">2</text><text x="205" y="117">5</text><text x="295" y="67">7</text><text x="385" y="142">4</text><text x="475" y="192">2</text>
</g>
<line x1="290" y1="45" x2="290" y2="250" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<text x="300" y="38" font-size="16" fill="#dc2626" font-weight="bold">media 6,95 · mediana 7 · moda 7</text>
<text x="570" y="296" font-size="14" text-anchor="end" fill="#475569">voto</text>
<text x="66" y="52" font-size="14" fill="#475569">numero di studenti</text>
</svg>`,
      caption: "Diagramma a barre della distribuzione dei voti: il picco è la moda, la linea tratteggiata indica dove cadono media e mediana."
    },
    {
      type: "text",
      title: "Rappresentazioni grafiche",
      html: `<p>La scelta del grafico dipende dal tipo di dati:</p>
<ul>
<li><b>Diagramma a barre (ortogramma)</b>: per caratteri qualitativi o discreti; le barre sono separate e di altezza proporzionale alla frequenza.</li>
<li><b>Istogramma</b>: per caratteri continui raggruppati in classi; i rettangoli sono <b>adiacenti</b> e l'<b>area</b> (non l'altezza!) è proporzionale alla frequenza, se le classi hanno ampiezze diverse.</li>
<li><b>Areogramma (grafico a torta)</b>: ogni modalità è un settore circolare con angolo = frequenza relativa × 360°. Utile per mostrare le parti di un tutto.</li>
<li><b>Diagramma cartesiano (a linee)</b>: per l'evoluzione nel tempo (andamento delle temperature, della popolazione).</li>
</ul>
<p>⚠️ Un grafico può ingannare: un asse verticale che non parte da zero, o troppe dimensioni (grafici 3D) ingrandiscono differenze piccole. Guarda sempre gli assi!</p>
<p><b>Esempio areogramma</b>: 35 % dei voti 7 → angolo 0,35 · 360° = <b>126°</b>.</p>`
    },
    {
      type: "text",
      title: "Gli indici di posizione: media, mediana, moda",
      html: `<p>Per riassumere un insieme di dati con un solo numero si usano i <b>valori medi</b>:</p>
<ul>
<li><b>Media aritmetica</b>: somma di tutti i valori divisa per il numero dei dati. Con una tabella di frequenze si usa la media ponderata: (Σ valore · frequenza)/n.</li>
<li><b>Mediana</b>: il valore che sta <b>al centro</b> dei dati ordinati. Se n è dispari è il dato centrale; se n è pari è la media dei due dati centrali.</li>
<li><b>Moda</b>: il valore con <b>frequenza maggiore</b>. Può non essere unica (distribuzione bimodale) e vale anche per caratteri qualitativi.</li>
</ul>
<p><b>Esempio</b>: i dati 2, 4, 4, 4, 5, 5, 7, 9 (n = 8).</p>
<ul>
<li>Media: (2 + 4 + 4 + 4 + 5 + 5 + 7 + 9)/8 = 40/8 = <b>5</b>.</li>
<li>Mediana: i dati sono già ordinati; i due centrali sono il 4° e il 5° (4 e 5): (4 + 5)/2 = <b>4,5</b>.</li>
<li>Moda: il 4 compare tre volte: <b>4</b>.</li>
</ul>
<p><b>Dai voti della tabella</b>: media = (5·2 + 6·5 + 7·7 + 8·4 + 9·2)/20 = 139/20 = <b>6,95</b>; mediana: il 10° e l'11° dato valgono entrambi 7 → <b>7</b>; moda <b>7</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la media che inganna",
      html: `<p>In una piccola azienda 9 impiegati guadagnano <b>1 500 €</b> al mese e il titolare <b>11 500 €</b>. Qual è lo stipendio "tipico"?</p>
<ul>
<li>Media: (9 · 1 500 + 11 500)/10 = 25 000/10 = <b>2 500 €</b>.</li>
<li>Mediana: <b>1 500 €</b>. Moda: <b>1 500 €</b>.</li>
</ul>
<p>Se l'azienda dice "stipendio medio 2 500 €" è formalmente vero, ma nessun impiegato guadagna una cifra vicina! Un <b>valore anomalo</b> (<i>outlier</i>) sposta molto la media, e pochissimo la mediana. Per questo, quando i dati sono asimmetrici (redditi, prezzi delle case), si preferisce la <b>mediana</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: frequenze e valori medi",
      questions: [
        { type: "num", q: "In una classe di 25 studenti, 5 vanno a scuola in bicicletta. Quale percentuale?", answer: 20, unit: "%", explain: "5/25 = 0,20 → 20 %." },
        { type: "num", q: "Qual è la media di 4, 6, 8, 10, 12?", answer: 8, explain: "40/5 = 8." },
        { type: "num", q: "Qual è la mediana di 3, 9, 4, 7, 5?", answer: 5, explain: "Ordinati: 3, 4, 5, 7, 9: il dato centrale è 5." }
      ]
    },
    {
      type: "text",
      title: "Indici di variabilità",
      html: `<p>Due classi possono avere la stessa media ma essere molto diverse: A = {6, 6, 6, 6}, B = {2, 4, 8, 10}: media 6 in entrambe, ma nella B i voti sono molto dispersi. Gli <b>indici di variabilità</b> misurano quanto i dati sono sparsi:</p>
<ul>
<li><b>Campo di variazione</b>: massimo − minimo. (A: 0, B: 8.) Semplice, ma dipende solo dagli estremi.</li>
<li><b>Scarto</b> di un dato: differenza dalla media (x − m). Gli scarti hanno <b>somma zero</b>, quindi non si possono sommare direttamente.</li>
<li><b>Varianza</b> (σ²): la <b>media dei quadrati degli scarti</b>. Elevando al quadrato i segni spariscono e gli scarti grandi pesano di più.</li>
<li><b>Scarto quadratico medio</b> (deviazione standard, σ): la radice quadrata della varianza; ha la <b>stessa unità di misura</b> dei dati.</li>
</ul>
<p><b>Esempio</b>: dati 2, 4, 4, 4, 5, 5, 7, 9 (media 5). Scarti: −3, −1, −1, −1, 0, 0, 2, 4. Quadrati: 9, 1, 1, 1, 0, 0, 4, 16, somma 32. Varianza = 32/8 = <b>4</b>; scarto quadratico medio = √4 = <b>2</b>.</p>
<p>Per i voti della tabella: Σx² = 991, quindi σ² = 991/20 − 6,95² = 49,55 − 48,3025 = <b>1,2475</b>, e σ ≈ <b>1,12</b>. Una formula comoda è σ² = (media dei quadrati) − (quadrato della media).</p>`
    },
    {
      type: "remember",
      title: "Come scegliere l'indice",
      html: `<ul>
<li><b>Media</b>: dati numerici senza valori anomali; usa tutti i dati.</li>
<li><b>Mediana</b>: dati asimmetrici o con outlier; basta ordinare i dati.</li>
<li><b>Moda</b>: l'unica utilizzabile con i caratteri qualitativi (colore preferito, marca…).</li>
<li><b>Varianza / σ</b>: per dire se la media "rappresenta bene" i dati: σ piccolo = dati vicini alla media.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il pollo di Trilussa",
      html: `<p>Il poeta romano <b>Trilussa</b> (1871–1950) scrisse una poesia, <i>La statistica</i>, che prende in giro le medie: se uno mangia due polli e un altro nessuno, "in media" hanno mangiato un pollo a testa, ma uno ha fatto un'indigestione e l'altro è rimasto digiuno. La media da sola non dice <i>come</i> sono distribuiti i dati: per questo servono anche mediana e variabilità.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Florence Nightingale",
      html: `<p>L'infermiera <b>Florence Nightingale</b> (1820–1910), durante la guerra di Crimea (1853–1856), raccolse i dati sui decessi nei campi militari britannici e scoprì che la maggior parte dei soldati moriva non per le ferite ma per malattie causate dalla scarsa igiene. Per convincere il governo inventò un grafico a settori molto efficace, il "diagramma a coxcomb" (cresta di gallo): le riforme sanitarie che seguirono salvarono moltissime vite. Fu anche la prima donna eletta membro della Royal Statistical Society. La parola <i>statistica</i> deriva da <i>Staat</i>, "Stato": nacque per descrivere i dati dello Stato (popolazione, tasse, eserciti).</p>`
    },
    {
      type: "example",
      title: "Esempio: leggere un sondaggio con spirito critico",
      html: `<p>"Il 70 % degli italiani vuole una scuola più lunga", dice un titolo. Domande da porsi: chi è stato interpellato (il <b>campione</b> è rappresentativo o sono 100 persone di un solo quartiere)? Come è stata formulata la domanda? Quanti sono i rispondenti? Una frequenza relativa di 0,7 su 10 persone dice molto meno che su 1 000. In statistica la qualità dei dati conta quanto i calcoli.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli indici statistici",
      intro: "Media, mediana e varianza hanno anche interpretazioni intuitive, quasi fisiche.",
      tabs: [
        {
          label: "⚖️ La media come baricentro",
          html: `<p>Metti i dati su una <b>altalena</b>: ogni dato è un sassolino alla sua posizione sulla retta numerica. La <b>media</b> è il punto in cui devi mettere il fulcro per tenere l'altalena in <b>equilibrio</b>. I dati lontani dal centro "pesano" di più: ecco perché un valore anomalo trascina la media. Gli scarti a sinistra compensano esattamente quelli a destra: la loro somma è zero.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="50" y1="170" x2="550" y2="170" stroke="#334155" stroke-width="4"/>
<g stroke="#334155" stroke-width="2"><line x1="150" y1="170" x2="150" y2="178"/><line x1="200" y1="170" x2="200" y2="178"/><line x1="250" y1="170" x2="250" y2="178"/><line x1="300" y1="170" x2="300" y2="178"/><line x1="350" y1="170" x2="350" y2="178"/><line x1="400" y1="170" x2="400" y2="178"/><line x1="450" y1="170" x2="450" y2="178"/><line x1="500" y1="170" x2="500" y2="178"/></g>
<g fill="#f59e0b" stroke="#92400e" stroke-width="2">
<circle cx="150" cy="152" r="14"/>
<circle cx="250" cy="152" r="14"/><circle cx="250" cy="124" r="14"/><circle cx="250" cy="96" r="14"/>
<circle cx="300" cy="152" r="14"/><circle cx="300" cy="124" r="14"/>
<circle cx="400" cy="152" r="14"/>
<circle cx="500" cy="152" r="14"/>
</g>
<polygon points="300,176 275,215 325,215" fill="#dc2626"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="150" y="240">2</text><text x="200" y="240">3</text><text x="250" y="240">4</text><text x="300" y="240">5</text><text x="350" y="240">6</text><text x="400" y="240">7</text><text x="450" y="240">8</text><text x="500" y="240">9</text>
</g>
<text x="300" y="268" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">fulcro = media = 5 (equilibrio)</text>
<text x="300" y="40" font-size="17" text-anchor="middle" fill="#1f2937">dati: 2, 4, 4, 4, 5, 5, 7, 9</text>
</svg>`
        },
        {
          label: "🍬 Redistribuire",
          html: `<p>La media è il valore che ogni individuo avrebbe se la quantità totale fosse <b>distribuita in parti uguali</b>. Quattro amici hanno 2, 4, 6 e 12 caramelle: totale 24. Se le mettono in comune e le dividono, ciascuno ne riceve 24/4 = <b>6</b>: la media. Con questa idea è facile capire perché la somma degli scarti è zero: chi sta sopra la media cede esattamente ciò che chi sta sotto riceve.</p>`
        },
        {
          label: "🚶 La mediana: la fila",
          html: `<p>Metti in fila gli studenti dal più basso al più alto: la <b>mediana</b> è l'altezza di chi sta al <b>centro della fila</b>. Metà degli studenti è più bassa o uguale, metà più alta o uguale. Se arriva un giocatore di basket altissimo, la fila si allunga ma <b>chi sta al centro cambia pochissimo</b>: è per questo che la mediana è robusta ai valori anomali. La media, invece, si sposta subito verso il nuovo arrivato.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della statistica descrittiva",
      nodes: [
        { id: "pop", label: "Popolazione e campione", x: 50, y: 6, color: "#6366f1", html: "Tutti gli individui o un sottoinsieme rappresentativo.", why: "Interpellare tutti è spesso impossibile o troppo costoso: si studia un campione. Se è scelto male (non casuale) i risultati sono distorti." },
        { id: "car", label: "Carattere", x: 20, y: 26, color: "#16a34a", html: "Qualitativo, discreto, continuo.", why: "Il tipo di carattere decide quali grafici e quali indici hanno senso: non si può fare la media dei colori." },
        { id: "freq", label: "Frequenze", x: 80, y: 26, color: "#f59e0b", html: "Assolute, relative, percentuali, cumulate.", why: "Trasformano una lista disordinata di dati in una distribuzione leggibile; le relative permettono di confrontare campioni di dimensioni diverse." },
        { id: "graf", label: "Grafici", x: 80, y: 52, color: "#a855f7", html: "Barre, istogramma, areogramma, linee.", why: "Florence Nightingale mostrò con i grafici che le riforme sanitarie erano necessarie: un'immagine può convincere dove le tabelle non riescono." },
        { id: "pos", label: "Media, mediana, moda", x: 25, y: 52, color: "#0ea5e9", html: "Valori che riassumono il 'centro' dei dati.", why: "La media (Gauss, minimi quadrati) minimizza la somma dei quadrati degli scarti; la mediana la somma dei valori assoluti; la moda indica il valore più tipico." },
        { id: "var", label: "Variabilità", x: 50, y: 74, color: "#ef4444", html: "Campo di variazione, varianza, scarto quadratico medio.", why: "Servono perché il centro da solo non basta: gli stessi valori medi possono nascondere dati molto dispersi." },
        { id: "out", label: "Valori anomali", x: 82, y: 82, color: "#14b8a6", html: "Dati molto lontani dagli altri.", why: "Spostano la media ma non la mediana: la scelta dell'indice dipende dalla presenza di outlier." },
        { id: "inf", label: "Verso la probabilità", x: 20, y: 88, color: "#ec4899", html: "Dal descrivere al prevedere.", why: "La statistica inferenziale usa la probabilità per estendere ciò che si osserva sul campione alla popolazione, con un margine d'errore." }
      ],
      edges: [
        ["pop", "car", "si osserva un"],
        ["car", "freq", "si conta con"],
        ["freq", "graf", "si rappresenta con"],
        ["freq", "pos", "si riassume con"],
        ["pos", "var", "si completa con"],
        ["var", "out", "sensibile a"],
        ["pop", "inf", "porta a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: variabilità",
      questions: [
        { type: "tf", q: "La media di un insieme di dati è sensibile ai valori anomali, la mediana molto meno.", answer: true, explain: "Un outlier sposta la media; la mediana dipende solo dal dato centrale." },
        { type: "num", q: "Qual è il campo di variazione di 3, 9, 4, 12, 7?", answer: 9, explain: "12 − 3 = 9." },
        { type: "mc", q: "La varianza è…", options: ["la media dei quadrati degli scarti dalla media", "la differenza tra massimo e minimo", "il dato più frequente"], answer: 0, explain: "Il suo radice quadrata è lo scarto quadratico medio." }
      ]
    }
  ],
  glossary: [
    { t: "Popolazione", d: "L'insieme di tutte le unità statistiche studiate." },
    { t: "Campione", d: "Sottoinsieme rappresentativo della popolazione." },
    { t: "Carattere", d: "La proprietà osservata su ogni unità: qualitativa o quantitativa (discreta o continua)." },
    { t: "Frequenza assoluta / relativa", d: "Numero di volte che compare una modalità / sua frazione sul totale." },
    { t: "Media aritmetica", d: "Somma dei dati divisa per il loro numero." },
    { t: "Mediana", d: "Valore centrale dei dati ordinati." },
    { t: "Moda", d: "Modalità con frequenza maggiore." },
    { t: "Campo di variazione", d: "Differenza tra il valore massimo e il minimo." },
    { t: "Varianza", d: "Media dei quadrati degli scarti dalla media." },
    { t: "Scarto quadratico medio", d: "Radice quadrata della varianza (deviazione standard)." },
    { t: "Outlier", d: "Valore anomalo molto distante dagli altri dati." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il numero di fratelli è un carattere…", options: ["quantitativo discreto", "qualitativo", "quantitativo continuo"], answer: 0, explain: "Si ottiene contando: valori interi." },
      { type: "num", q: "Qual è la media di 4, 6, 8, 10, 12?", answer: 8, explain: "40/5 = 8." },
      { type: "num", q: "Qual è la mediana di 3, 9, 4, 7, 5?", answer: 5, explain: "Ordinando: 3, 4, 5, 7, 9; il dato centrale è 5." },
      { type: "num", q: "Qual è la mediana di 2, 4, 6, 10?", answer: 5, explain: "n è pari: media dei due centrali, (4 + 6)/2 = 5." },
      { type: "mc", q: "Qual è la moda di 1, 2, 2, 3, 3, 3, 4?", options: ["3", "2", "2,5"], answer: 0, explain: "Il 3 compare tre volte, più di ogni altro valore." },
      { type: "num", q: "In un campione di 48 persone, 12 preferiscono il tè. Qual è la frequenza relativa?", answer: 0.25, tol: 0.001, explain: "12/48 = 0,25." },
      { type: "tf", q: "Un valore anomalo molto grande aumenta di molto la media ma cambia poco la mediana.", answer: true, explain: "È il motivo per cui per i redditi si preferisce spesso la mediana." },
      { type: "num", q: "Nove impiegati guadagnano 1 500 € e il titolare 11 500 €. Qual è lo stipendio medio in euro?", answer: 2500, unit: "€", explain: "(9 · 1 500 + 11 500)/10 = 2 500 €." },
      { type: "order", q: "Metti in ordine i passi per calcolare la varianza.", items: ["Calcolare la media", "Calcolare gli scarti dalla media", "Elevare al quadrato gli scarti", "Fare la media dei quadrati degli scarti"], explain: "La radice quadrata della varianza è lo scarto quadratico medio." },
      { type: "num", q: "Quanto vale lo scarto quadratico medio dei dati 4 e 6?", answer: 1, explain: "Media 5; scarti −1 e +1; quadrati 1 e 1; varianza 1; radice 1." }
    ]
  }
});
