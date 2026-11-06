TOPIC('it', {
  id: `m1-tec-algoritmi-diagrammi`,
  title: `Algoritmi e diagrammi di flusso`,
  intro: `Una ricetta, le istruzioni del Lego, il percorso per arrivare a scuola: sono tutti <b>algoritmi</b>, sequenze di passi precisi per risolvere un problema. I computer non fanno altro che eseguire algoritmi scritti da persone. In questa lezione impariamo a <b>scriverli</b> e a <b>disegnarli</b> con i <b>diagrammi di flusso</b>, il primo passo per diventare programmatori. 🤖➡️🔷`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. Che cos'è un algoritmo`,
      html: `<p>Un <b>algoritmo</b> è una <b>sequenza finita di istruzioni chiare</b> che, eseguite in ordine, risolvono un problema.</p>
<p>Un buon algoritmo deve essere:</p>
<ul>
<li><b>finito</b>: deve terminare dopo un numero limitato di passi;</li>
<li><b>non ambiguo</b>: ogni istruzione si può capire in un solo modo ("aggiungi un po' di sale" è ambiguo, "aggiungi 5 g di sale" no);</li>
<li><b>eseguibile</b>: chi lo esegue (persona o macchina) deve essere in grado di fare ogni passo;</li>
<li><b>generale</b>: deve funzionare per tutti i casi dello stesso tipo, non solo per uno.</li>
</ul>
<p>Chi esegue l'algoritmo si chiama <b>esecutore</b>. Un computer è un esecutore velocissimo ma <b>senza fantasia</b>: fa esattamente ciò che è scritto, anche se è sbagliato!</p>`
    },
    {
      type: `example`, title: `Esempio pratico: l'algoritmo del tè`,
      html: `<ol>
<li>Riempi il bollitore d'acqua.</li>
<li>Accendi il bollitore.</li>
<li><b>Finché</b> l'acqua non bolle, aspetta.</li>
<li>Metti la bustina nella tazza.</li>
<li>Versa l'acqua nella tazza.</li>
<li>Aspetta 3 minuti e togli la bustina.</li>
<li><b>Se</b> vuoi il tè dolce, aggiungi lo zucchero; <b>altrimenti</b> non aggiungere niente.</li>
<li>Fine: bevi il tè! 🍵</li>
</ol>
<p>Nota tre cose: i passi sono in <b>sequenza</b>; al passo 3 c'è una <b>ripetizione</b> (aspetta finché…); al passo 7 c'è una <b>scelta</b> (se… altrimenti…). Sono i tre "mattoni" di ogni algoritmo.</p>`
    },
    {
      type: `text`, title: `2. I simboli dei diagrammi di flusso`,
      html: `<p>Un <b>diagramma di flusso</b> (in inglese <i>flowchart</i>) disegna un algoritmo con blocchi di forme diverse, collegati da <b>frecce</b> che indicano l'ordine.</p>
<table>
<tr><th>Forma</th><th>Nome</th><th>Significato</th></tr>
<tr><td>⬭ ovale</td><td><b>Inizio / Fine</b></td><td>dove comincia e dove termina l'algoritmo</td></tr>
<tr><td>▱ parallelogramma</td><td><b>Input / Output</b></td><td>leggere un dato (input) o mostrare un risultato (output)</td></tr>
<tr><td>▭ rettangolo</td><td><b>Elaborazione</b></td><td>un'azione o un calcolo (es. somma ← a + b)</td></tr>
<tr><td>◇ rombo</td><td><b>Decisione</b></td><td>una domanda con risposta <b>sì / no</b> (vero / falso): da qui escono due frecce</td></tr>
<tr><td>→ freccia</td><td><b>Flusso</b></td><td>indica il passo successivo</td></tr>
</table>
<p>Regole: un solo <b>Inizio</b>, almeno una <b>Fine</b>, ogni blocco ha una freccia in entrata e una in uscita (il rombo ne ha due in uscita).</p>`
    },
    {
      type: `svg`, title: `Un diagramma di flusso: pari o dispari?`,
      caption: `L'algoritmo legge un numero N, controlla se il resto della divisione per 2 è 0 e scrive "pari" o "dispari".`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="fa" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#334155"/></marker></defs>
<ellipse cx="300" cy="25" rx="60" ry="18" fill="#86efac" stroke="#166534" stroke-width="2"/>
<text x="300" y="31" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">INIZIO</text>
<line x1="300" y1="43" x2="300" y2="58" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<polygon points="250,62 370,62 350,96 230,96" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="300" y="85" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">leggi N</text>
<line x1="300" y1="96" x2="300" y2="112" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<polygon points="300,116 385,150 300,184 215,150" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="148" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">resto di</text>
<text x="300" y="166" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">N : 2 = 0 ?</text>
<line x1="215" y1="150" x2="140" y2="150" stroke="#334155" stroke-width="2"/>
<line x1="140" y1="150" x2="140" y2="198" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<text x="175" y="142" font-size="15" fill="#166534" font-weight="bold">SÌ</text>
<line x1="385" y1="150" x2="460" y2="150" stroke="#334155" stroke-width="2"/>
<line x1="460" y1="150" x2="460" y2="198" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<text x="410" y="142" font-size="15" fill="#b91c1c" font-weight="bold">NO</text>
<polygon points="85,202 215,202 195,236 65,236" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="140" y="225" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">scrivi "pari"</text>
<polygon points="405,202 535,202 515,236 385,236" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
<text x="460" y="225" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">scrivi "dispari"</text>
<line x1="140" y1="236" x2="140" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="460" y1="236" x2="460" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="140" y1="270" x2="236" y2="270" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<line x1="460" y1="270" x2="364" y2="270" stroke="#334155" stroke-width="2" marker-end="url(#fa)"/>
<ellipse cx="300" cy="275" rx="60" ry="18" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
<text x="300" y="281" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">FINE</text>
</svg>`
    },
    {
      type: `widget`, title: `Riconosci i blocchi`,
      widget: `labelDiagram`,
      caption: `Clicca su ogni blocco e scegli il suo nome.`,
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<ellipse cx="100" cy="60" rx="70" ry="28" fill="#86efac" stroke="#166534" stroke-width="3"/>
<polygon points="250,35 390,35 360,85 220,85" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<rect x="430" y="35" width="140" height="50" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
<polygon points="200,150 280,195 200,240 120,195" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<line x1="340" y1="195" x2="440" y2="195" stroke="#334155" stroke-width="4"/>
<polygon points="440,185 460,195 440,205" fill="#334155"/>
</svg>`,
        spots: [
          { x: 100, y: 60, label: `Inizio / Fine` },
          { x: 305, y: 60, label: `Input / Output` },
          { x: 500, y: 60, label: `Elaborazione` },
          { x: 200, y: 195, label: `Decisione` },
          { x: 400, y: 195, label: `Freccia di flusso` }
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-quiz: i blocchi`,
      questions: [
        { type: `mc`, q: `Quale forma si usa per una domanda con risposta sì / no?`, options: [`rettangolo`, `rombo`, `ovale`], answer: 1, explain: `Il rombo è il blocco di decisione: ne escono due frecce.` },
        { type: `mc`, q: `"Leggi il numero N" va in un blocco…`, options: [`di input / output (parallelogramma)`, `di inizio`, `di decisione`], answer: 0, explain: `Leggere un dato è un input.` },
        { type: `tf`, q: `"Metti un po' di farina" è un'istruzione non ambigua.`, answer: false, explain: `"Un po'" si può capire in tanti modi: serve una quantità precisa.` }
      ]
    },
    {
      type: `text`, title: `3. Le tre strutture fondamentali`,
      html: `<p>Ogni algoritmo, anche il più complicato, si può costruire combinando solo <b>tre strutture</b>:</p>
<ol>
<li><b>Sequenza</b>: istruzioni una dopo l'altra (prima A, poi B, poi C).</li>
<li><b>Selezione</b> (o scelta): <b>SE</b> una condizione è vera fai A, <b>ALTRIMENTI</b> fai B. Nel diagramma è il rombo con due strade che poi si riuniscono.</li>
<li><b>Iterazione</b> (o ciclo, ripetizione): <b>RIPETI</b> delle istruzioni finché una condizione è vera, oppure un numero fissato di volte. Nel diagramma è una freccia che <b>torna indietro</b>.</li>
</ol>
<p>Lo hanno dimostrato due informatici italiani, <b>Corrado Böhm</b> e <b>Giuseppe Jacopini</b>, nel <b>1966</b>: è il <b>teorema di Böhm-Jacopini</b>, uno dei fondamenti della programmazione.</p>
<p>⚠️ Attenzione ai <b>cicli infiniti</b>: se la condizione per uscire dal ciclo non diventa mai vera, l'algoritmo non finisce più!</p>`
    },
    {
      type: `svg`, title: `Sequenza, selezione, iterazione`,
      caption: `I tre "mattoni" della programmazione: con questi si costruisce qualunque algoritmo.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<defs><marker id="fb" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#334155"/></marker></defs>
<text x="100" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">SEQUENZA</text>
<rect x="50" y="50" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="76" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<line x1="100" y1="90" x2="100" y2="116" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<rect x="50" y="120" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="146" font-size="16" text-anchor="middle" fill="#3b0764">B</text>
<line x1="100" y1="160" x2="100" y2="186" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<rect x="50" y="190" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="100" y="216" font-size="16" text-anchor="middle" fill="#3b0764">C</text>
<text x="300" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">SELEZIONE</text>
<polygon points="300,50 360,85 300,120 240,85" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="300" y="91" font-size="15" text-anchor="middle" fill="#713f12">cond?</text>
<line x1="240" y1="85" x2="225" y2="85" stroke="#334155" stroke-width="2"/><line x1="225" y1="85" x2="225" y2="146" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<line x1="360" y1="85" x2="375" y2="85" stroke="#334155" stroke-width="2"/><line x1="375" y1="85" x2="375" y2="146" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="222" y="75" font-size="13" text-anchor="end" fill="#166534" font-weight="bold">sì</text><text x="378" y="75" font-size="13" fill="#b91c1c" font-weight="bold">no</text>
<rect x="190" y="150" width="70" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="225" y="176" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<rect x="340" y="150" width="70" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="375" y="176" font-size="16" text-anchor="middle" fill="#3b0764">B</text>
<path d="M225 190 L225 230 L300 230 M375 190 L375 230 L300 230" stroke="#334155" stroke-width="2" fill="none"/>
<line x1="300" y1="230" x2="300" y2="256" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="500" y="30" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">ITERAZIONE</text>
<rect x="450" y="60" width="100" height="40" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><text x="500" y="86" font-size="16" text-anchor="middle" fill="#3b0764">A</text>
<line x1="500" y1="100" x2="500" y2="126" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<polygon points="500,130 560,165 500,200 440,165" fill="#fde68a" stroke="#a16207" stroke-width="2"/><text x="500" y="171" font-size="15" text-anchor="middle" fill="#713f12">finito?</text>
<path d="M440 165 L420 165 L420 80 L446 80" stroke="#dc2626" stroke-width="2" fill="none" marker-end="url(#fb)"/>
<text x="415" y="125" font-size="13" text-anchor="end" fill="#b91c1c" font-weight="bold">no</text>
<line x1="500" y1="200" x2="500" y2="246" stroke="#334155" stroke-width="2" marker-end="url(#fb)"/>
<text x="510" y="230" font-size="13" fill="#166534" font-weight="bold">sì</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#334155">Teorema di Böhm-Jacopini (1966)</text>
</svg>`
    },
    {
      type: `example`, title: `Esempio pratico: l'algoritmo di Euclide per il MCD`,
      html: `<p>Uno degli algoritmi più antichi del mondo (circa 300 a.C.) trova il <b>Massimo Comun Divisore</b> di due numeri A e B:</p>
<ol>
<li><b>Inizio</b>: leggi A e B.</li>
<li><b>Finché</b> B è diverso da 0, ripeti:
<ul><li>calcola R = resto di A : B;</li><li>metti A ← B e B ← R.</li></ul></li>
<li>Scrivi A: è il MCD. <b>Fine</b>.</li>
</ol>
<p><b>Proviamo con A = 48 e B = 18:</b></p>
<table>
<tr><th>A</th><th>B</th><th>resto A : B</th></tr>
<tr><td>48</td><td>18</td><td>12</td></tr>
<tr><td>18</td><td>12</td><td>6</td></tr>
<tr><td>12</td><td>6</td><td>0</td></tr>
<tr><td><b>6</b></td><td>0</td><td>stop!</td></tr>
</table>
<p>MCD(48, 18) = <b>6</b>. Contiene una <b>sequenza</b>, un <b>ciclo</b> e una <b>condizione</b>.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: attraversare la strada`,
      html: `<p>Disegna (sul quaderno) il diagramma di flusso di questo algoritmo:</p>
<ol>
<li>Inizio.</li>
<li>Arriva alle strisce pedonali.</li>
<li>Il semaforo pedonale è verde? <b>No</b> → aspetta e torna a controllare (ciclo). <b>Sì</b> → vai avanti.</li>
<li>Guarda a sinistra e a destra: arrivano auto? <b>Sì</b> → aspetta e ricontrolla. <b>No</b> → attraversa.</li>
<li>Fine.</li>
</ol>
<p>Ci sono <b>due rombi</b>, ciascuno con una freccia che torna indietro: due cicli "aspetta finché…".</p>`
    },
    {
      type: `widget`, title: `Gioco: sequenza, selezione o iterazione?`,
      widget: `classify`,
      caption: `Ogni istruzione usa quale struttura?`,
      options: {
        groups: [`➡️ Sequenza`, `🔀 Selezione (se…)`, `🔁 Iterazione (ripeti…)`],
        items: [
          [`Apri il libro, poi leggi la pagina`, 0], [`Accendi il PC, inserisci la password`, 0], [`Indossa le calze e poi le scarpe`, 0],
          [`Se piove prendi l'ombrello`, 1], [`Se il voto è almeno 6 scrivi "promosso"`, 1], [`Se hai fame mangia una mela`, 1],
          [`Mescola finché lo zucchero si scioglie`, 2], [`Fai 10 flessioni`, 2], [`Ripeti la poesia finché la sai`, 2]
        ]
      }
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "algoritmo" viene dal nome di un matematico persiano?`,
      html: `<p>Intorno all'<b>820 d.C.</b>, a Baghdad, nella "Casa della Sapienza", lavorava il matematico <b>Muhammad ibn Musa al-Khwarizmi</b>. Scrisse un libro sui calcoli con le cifre indiane (le nostre cifre 0-9). Quando fu tradotto in latino, il suo nome divenne <i>Algoritmi</i>: "Dixit Algoritmi" = "così disse al-Khwarizmi". Da lui viene anche la parola <b>algebra</b> (da <i>al-jabr</i>, nel titolo di un altro suo libro). In Italia le cifre indo-arabe furono diffuse da <b>Fibonacci</b> nel 1202.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la prima programmatrice era una donna dell'Ottocento?`,
      html: `<p>Nel <b>1843</b> la matematica inglese <b>Ada Lovelace</b> scrisse un algoritmo per far calcolare i "numeri di Bernoulli" alla <b>macchina analitica</b> di Charles Babbage, un calcolatore meccanico mai completato. È considerato il primo programma della storia! Ada intuì anche che una macchina del genere avrebbe potuto un giorno comporre musica. Il linguaggio di programmazione <b>Ada</b> porta il suo nome.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se i diagrammi di flusso ti sembrano complicati, prova queste strade.`,
      tabs: [
        {
          label: `🤖 Il robot umano (coding unplugged)`,
          html: `<p>Gioca in coppia: uno fa il <b>programmatore</b>, l'altro il <b>robot</b>. Il robot conosce solo 4 comandi: <b>AVANTI</b> (un passo), <b>GIRA A DESTRA</b>, <b>GIRA A SINISTRA</b>, <b>PRENDI</b>.</p>
<p>Il programmatore scrive su un foglio l'algoritmo per far arrivare il robot fino all'astuccio sulla cattedra e prenderlo. Il robot esegue <b>esattamente</b> ciò che è scritto, anche se va contro il muro! 😄</p>
<p>In Italia questo tipo di attività è stato diffuso da <b>CodyRoby</b>, inventato dal professor Alessandro Bogliolo dell'Università di Urbino, promotore della Settimana del Codice (<i>Code Week</i>).</p>`
        },
        {
          label: `🧩 Con i blocchi di Scratch`,
          html: `<p>In <b>Scratch</b> (creato nel <b>2007</b> al MIT di Boston) non si scrive codice: si incastrano <b>blocchi colorati</b> come mattoncini.</p>
<ul>
<li>i blocchi uno sotto l'altro sono la <b>sequenza</b>;</li>
<li>il blocco <b>"se … allora … altrimenti"</b> è la selezione (il rombo!);</li>
<li>i blocchi <b>"ripeti 10 volte"</b> e <b>"ripeti fino a quando"</b> sono l'iterazione (la freccia che torna indietro).</li>
</ul>
<p>Ogni programma Scratch si può trasformare in un diagramma di flusso, e viceversa!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="60" y="15" width="220" height="36" rx="16" fill="#facc15"/><text x="170" y="39" font-size="16" text-anchor="middle" fill="#422006" font-weight="bold">quando si clicca 🏁</text>
<rect x="60" y="55" width="200" height="34" rx="6" fill="#f59e0b"/><text x="160" y="78" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">ripeti 4 volte</text>
<rect x="60" y="89" width="20" height="80" fill="#f59e0b"/>
<rect x="80" y="95" width="180" height="32" rx="6" fill="#3b82f6"/><text x="170" y="117" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">fai 100 passi</text>
<rect x="80" y="131" width="180" height="32" rx="6" fill="#3b82f6"/><text x="170" y="153" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">ruota di 90 gradi</text>
<rect x="60" y="169" width="200" height="22" rx="6" fill="#f59e0b"/>
<rect x="360" y="40" width="180" height="140" fill="none" stroke="#3b82f6" stroke-width="5"/>
<text x="450" y="210" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">risultato: un quadrato!</text>
</svg>`
        },
        {
          label: `🍝 La ricetta della nonna`,
          html: `<p>Una ricetta è un algoritmo per persone:</p>
<ul>
<li>gli <b>ingredienti</b> sono gli <b>input</b>;</li>
<li>i <b>passi</b> ("fai bollire l'acqua", "butta la pasta") sono le <b>elaborazioni</b>;</li>
<li>"<b>assaggia: se</b> è sciapa aggiungi sale" è una <b>selezione</b>;</li>
<li>"<b>mescola finché</b> la crema si addensa" è un'<b>iterazione</b>;</li>
<li>il <b>piatto pronto</b> è l'<b>output</b>.</li>
</ul>
<p>Ma la nonna scrive "sale q.b." (quanto basta): per un computer sarebbe un'istruzione <b>ambigua</b>!</p>`
        },
        {
          label: `🔢 Euclide con i numeri`,
          html: `<p>Prova a eseguire tu l'algoritmo di Euclide come un computer, con le divisioni con resto. Sulla retta vedi i "salti" da 18 dentro 48: due salti arrivano a 36, il resto è 12. Poi si continua con 18 e 12…</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 50, step: 2, marks: [18, 36, 48] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: dall'algoritmo al programma`,
      nodes: [
        { id: `prob`, label: `Problema`, x: 50, y: 6, color: `#ef4444`, html: `Una situazione da risolvere.`, why: `Ogni algoritmo nasce da un problema: calcolare, ordinare, cercare, decidere. Il primo passo è <b>analizzarlo</b>: quali dati ho (input)? Che cosa voglio ottenere (output)?` },
        { id: `alg`, label: `Algoritmo`, x: 50, y: 28, color: `#3b82f6`, html: `Sequenza finita di istruzioni non ambigue.`, why: `La parola viene da <b>al-Khwarizmi</b> (IX secolo). Ma gli algoritmi sono più antichi: i Babilonesi avevano procedure di calcolo su tavolette d'argilla (circa 1800 a.C.) ed Euclide descrisse quello per il MCD intorno al 300 a.C.` },
        { id: `prop`, label: `Proprietà`, x: 15, y: 28, color: `#0ea5e9`, html: `Finito, non ambiguo, eseguibile, generale.`, why: `Nel <b>1936</b> il matematico inglese <b>Alan Turing</b> diede una definizione precisa di "procedura eseguibile da una macchina" (la macchina di Turing): è la base teorica dei computer.` },
        { id: `fc`, label: `Diagramma di flusso`, x: 22, y: 58, color: `#f59e0b`, html: `Rappresentazione grafica con blocchi e frecce.`, why: `I primi "flow process charts" furono presentati dagli ingegneri <b>Frank e Lillian Gilbreth</b> nel 1921 per organizzare il lavoro nelle fabbriche. Nel 1947 <b>Goldstine e von Neumann</b> li usarono per i programmi dei primi computer.` },
        { id: `pseudo`, label: `Pseudocodice`, x: 50, y: 58, color: `#a855f7`, html: `L'algoritmo scritto in parole semplici e strutturate (SE…ALLORA, RIPETI…).`, why: `È una via di mezzo tra la lingua umana e il linguaggio di programmazione: permette di ragionare sull'algoritmo senza preoccuparsi della sintassi.` },
        { id: `strutt`, label: `Sequenza, selezione, iterazione`, x: 82, y: 40, color: `#22c55e`, html: `Le tre strutture di base.`, why: `Il <b>teorema di Böhm-Jacopini</b> (1966) dimostra che bastano queste tre strutture per scrivere qualunque algoritmo. Da qui nasce la "programmazione strutturata".` },
        { id: `prog`, label: `Programma`, x: 78, y: 78, color: `#14b8a6`, html: `L'algoritmo tradotto in un linguaggio per il computer.`, why: `I linguaggi di programmazione (Scratch, Python, JavaScript…) traducono gli algoritmi in istruzioni che il processore capisce. Il primo programma è attribuito ad <b>Ada Lovelace</b> (1843).` },
        { id: `ese`, label: `Esecutore`, x: 40, y: 88, color: `#64748b`, html: `Chi esegue: persona, robot, computer.`, why: `L'esecutore deve conoscere ogni istruzione. Per questo un algoritmo per un computer deve essere molto più preciso di uno per una persona, che usa il buon senso.` }
      ],
      edges: [
        [`prob`, `alg`, `si risolve con`], [`alg`, `prop`, `deve avere`], [`alg`, `fc`, `si disegna con`], [`alg`, `pseudo`, `si scrive in`],
        [`alg`, `strutt`, `è fatto di`], [`pseudo`, `prog`, `si traduce in`], [`fc`, `ese`, `guida`], [`prog`, `ese`, `eseguito da`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: strutture e cicli`,
      questions: [
        { type: `mc`, q: `"Ripeti finché la bottiglia è piena" è un esempio di…`, options: [`sequenza`, `selezione`, `iterazione`], answer: 2, explain: `È un ciclo: si ripete finché la condizione cambia.` },
        { type: `num`, q: `Con l'algoritmo di Euclide, qual è il MCD di 30 e 12?`, answer: 6, tol: 0, explain: `30 : 12 resto 6; 12 : 6 resto 0 → MCD = 6.` },
        { type: `mc`, q: `Chi dimostrò che bastano sequenza, selezione e iterazione?`, options: [`Böhm e Jacopini`, `Euclide`, `Ada Lovelace`], answer: 0, explain: `Corrado Böhm e Giuseppe Jacopini, nel 1966.` }
      ]
    }
  ],
  glossary: [
    { t: `Algoritmo`, d: `Sequenza finita di istruzioni non ambigue che risolve un problema.` },
    { t: `Esecutore`, d: `Chi (o che cosa) esegue l'algoritmo: persona, robot, computer.` },
    { t: `Diagramma di flusso`, d: `Disegno di un algoritmo con blocchi (ovale, parallelogramma, rettangolo, rombo) e frecce.` },
    { t: `Input / Output`, d: `Dati in ingresso / risultati in uscita.` },
    { t: `Sequenza`, d: `Istruzioni eseguite una dopo l'altra.` },
    { t: `Selezione`, d: `Scelta tra due strade in base a una condizione (se… altrimenti…).` },
    { t: `Iterazione (ciclo)`, d: `Ripetizione di istruzioni un numero di volte o finché vale una condizione.` },
    { t: `Ciclo infinito`, d: `Ciclo che non termina mai perché la condizione d'uscita non si verifica.` },
    { t: `Pseudocodice`, d: `Algoritmo scritto in linguaggio semplice e strutturato.` },
    { t: `Coding`, d: `Programmare: scrivere istruzioni per un computer.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale NON è una proprietà di un algoritmo?`, options: [`finito`, `ambiguo`, `eseguibile`], answer: 1, explain: `Un algoritmo deve essere NON ambiguo.` },
      { type: `mc`, q: `Nel diagramma di flusso l'ovale indica…`, options: [`inizio e fine`, `una decisione`, `un calcolo`], answer: 0, explain: `Ovale = Inizio / Fine.` },
      { type: `mc`, q: `Da un rombo di decisione escono…`, options: [`una freccia`, `due frecce (sì / no)`, `nessuna freccia`], answer: 1, explain: `Una per il sì, una per il no.` },
      { type: `tf`, q: `"Somma ← A + B" va in un rettangolo di elaborazione.`, answer: true, explain: `È un calcolo: rettangolo.` },
      { type: `order`, q: `Metti in ordine l'algoritmo per lavarsi i denti.`, items: [`Prendi lo spazzolino`, `Metti il dentifricio`, `Spazzola i denti per 2 minuti`, `Sciacqua la bocca`, `Lava lo spazzolino`], explain: `Prima si prepara lo spazzolino, poi si spazzola, infine si sciacqua e si lava lo spazzolino.` },
      { type: `mc`, q: `"Se la temperatura supera i 25 °C accendi il ventilatore" è…`, options: [`una sequenza`, `una selezione`, `un ciclo`], answer: 1, explain: `C'è una condizione con una scelta: selezione.` },
      { type: `text`, q: `Come si chiama un ciclo che non termina mai?`, answer: [`ciclo infinito`, `loop infinito`, `infinito`], explain: `Ciclo (o loop) infinito.` },
      { type: `num`, q: `Usa l'algoritmo di Euclide: MCD di 84 e 36?`, answer: 12, tol: 0, explain: `84 : 36 resto 12; 36 : 12 resto 0 → MCD = 12.` },
      { type: `mc`, q: `La parola "algoritmo" deriva da…`, options: [`un matematico persiano, al-Khwarizmi`, `una parola greca che significa numero`, `il nome di un computer`], answer: 0, explain: `Dal latino "Algoritmi", nome di al-Khwarizmi (IX secolo).` },
      { type: `tf`, q: `Un computer capisce le istruzioni ambigue usando il buon senso.`, answer: false, explain: `Il computer esegue alla lettera: le istruzioni devono essere precise.` },
      { type: `mc`, q: `Un algoritmo legge un numero e ripete "scrivi ciao" quel numero di volte. Se l'input è 3, quante volte scrive "ciao"?`, options: [`1`, `3`, `infinite`], answer: 1, explain: `Il ciclo si ripete 3 volte.` },
      { type: `mc`, q: `Chi è considerata la prima programmatrice della storia?`, options: [`Marie Curie`, `Ada Lovelace`, `Rita Levi-Montalcini`], answer: 1, explain: `Ada Lovelace, 1843.` }
    ],
    gen: [[`gcd`, 2]]
  }
});
