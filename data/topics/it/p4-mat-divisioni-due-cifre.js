TOPIC('it', {
  id: "p4-mat-divisioni-due-cifre",
  title: "Divisioni con due cifre al divisore",
  intro: "450 alunni vanno in gita con pullman da 52 posti: quanti pullman servono? Per rispondere devi dividere per un numero di <b>due cifre</b>. Sembra difficile, ma con una buona <b>stima</b>, qualche <b>strategia</b> e la <b>prova</b> diventa un gioco da ragazzi!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ripassiamo: i termini della divisione",
      html: `<p>Nella divisione <b>864 : 24 = 36</b>:</p>
<ul>
<li><b>864</b> è il <b>dividendo</b> (la quantità da dividere);</li>
<li><b>24</b> è il <b>divisore</b> (in quante parti si divide, oppure quanto è grande ogni gruppo);</li>
<li><b>36</b> è il <b>quoziente</b> (il risultato);</li>
<li>se avanza qualcosa, quello è il <b>resto</b>, che deve essere sempre <b>minore del divisore</b>.</li>
</ul>
<p>La divisione serve in due situazioni:</p>
<ul>
<li><b>ripartire</b>: 864 figurine divise tra 24 bambini → quante a testa?</li>
<li><b>contenere</b>: 864 figurine in bustine da 24 → quante bustine?</li>
</ul>
<p>La divisione è l'<b>operazione inversa</b> della moltiplicazione: se 36 × 24 = 864, allora 864 : 24 = 36.</p>`
    },
    {
      type: "text",
      title: "Passo 1 – Stimare il quoziente",
      html: `<p>Il segreto per dividere per due cifre è <b>stimare</b>, cioè indovinare in modo intelligente quante volte il divisore \"sta\" nel dividendo.</p>
<p><b>Trucco del dito</b>: copri con il dito l'ultima cifra del divisore e anche l'ultima cifra del pezzo di dividendo che stai dividendo.</p>
<ul>
<li>86 : 24 → copri il 4 e il 6 → <b>8 : 2 = 4</b>. Prova 4: 4 × 24 = 96. È più di 86! Troppo grande → prova <b>3</b>: 3 × 24 = 72 ✅.</li>
</ul>
<p>Un trucco ancora migliore: <b>arrotonda il divisore</b> alla decina più vicina. 24 è vicino a 20, 47 è vicino a 50, 31 è vicino a 30.</p>
<ul>
<li>145 : 31 → pensa 150 : 30 = <b>5</b> → 5 × 31 = 155 troppo → <b>4</b>: 4 × 31 = 124 ✅ (resto 21).</li>
</ul>
<p>Se il prodotto è <b>troppo grande</b> abbassa il numero di 1; se il resto è <b>maggiore o uguale al divisore</b>, alzalo di 1.</p>`
    },
    {
      type: "text",
      title: "Passo 2 – La divisione in colonna, passo passo",
      html: `<p>Calcoliamo <b>864 : 24</b> con il metodo italiano (\"a L\").</p>
<ol>
<li><b>Prendo le cifre</b>: 8 non contiene 24, quindi prendo <b>86</b>.</li>
<li><b>Stimo</b>: nell'86 quante volte sta il 24? 8 : 2 = 4, ma 4 × 24 = 96 &gt; 86 → <b>3</b>. Scrivo 3 al quoziente.</li>
<li><b>Moltiplico e sottraggo</b>: 3 × 24 = 72; 86 − 72 = <b>14</b>. Il resto 14 è minore di 24 ✅.</li>
<li><b>Abbasso</b> la cifra successiva (4): ottengo <b>144</b>.</li>
<li><b>Stimo</b>: 144 : 24 → 14 : 2 = 7, ma 7 × 24 = 168, troppo; 6 × 24 = <b>144</b> ✅. Scrivo 6 al quoziente.</li>
<li><b>Sottraggo</b>: 144 − 144 = <b>0</b>. Non ci sono altre cifre da abbassare: fine!</li>
</ol>
<p>Risultato: <b>864 : 24 = 36</b>, resto <b>0</b>.</p>`
    },
    {
      type: "svg",
      title: "864 : 24 in colonna",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g font-family="monospace" font-size="34" font-weight="bold">
<text x="80" y="60" fill="#1f2937">8 6 4</text>
<text x="300" y="60" fill="#2563eb">2 4</text>
<text x="300" y="115" fill="#16a34a">3 6</text>
<text x="80" y="115" fill="#dc2626">7 2</text>
<text x="40" y="115" fill="#dc2626">−</text>
<text x="80" y="170" fill="#1f2937">1 4 4</text>
<text x="80" y="225" fill="#dc2626">1 4 4</text>
<text x="40" y="225" fill="#dc2626">−</text>
<text x="160" y="280" fill="#1f2937">0</text>
</g>
<line x1="280" y1="25" x2="280" y2="80" stroke="#1f2937" stroke-width="4"/>
<line x1="280" y1="75" x2="400" y2="75" stroke="#1f2937" stroke-width="4"/>
<line x1="70" y1="128" x2="160" y2="128" stroke="#1f2937" stroke-width="3"/>
<line x1="70" y1="238" x2="200" y2="238" stroke="#1f2937" stroke-width="3"/>
<path d="M185 45 Q215 100 182 150" stroke="#f97316" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
<text x="215" y="105" font-size="15" fill="#c2410c">abbasso</text>
<text x="215" y="122" font-size="15" fill="#c2410c">il 4</text>
<g font-size="17" fill="#334155">
<text x="420" y="58">← divisore</text>
<text x="420" y="113">← quoziente</text>
<text x="430" y="170">86 : 24 → 3</text>
<text x="430" y="195">3 × 24 = 72</text>
<text x="430" y="230">144 : 24 → 6</text>
<text x="430" y="255">6 × 24 = 144</text>
<text x="230" y="282">← resto</text>
</g>
</svg>`,
      caption: "Il divisore va a destra in alto, il quoziente sotto; a sinistra si scrivono prodotti, sottrazioni e cifre abbassate."
    },
    {
      type: "text",
      title: "Passo 3 – La prova",
      html: `<p>Per essere sicuro del risultato fai la <b>prova</b>, usando l'operazione inversa:</p>
<p style="font-size:1.2em"><b>quoziente × divisore + resto = dividendo</b></p>
<ul>
<li>864 : 24 = 36 → prova: 36 × 24 = 864 ✅</li>
<li>1.000 : 32 = 31 resto 8 → prova: 31 × 32 = 992; 992 + 8 = 1.000 ✅</li>
</ul>
<p>Ricorda anche il <b>controllo del resto</b>: il resto deve essere sempre <b>minore del divisore</b>. Se trovi 1.000 : 32 = 30 resto 40, c'è un errore: 40 &gt; 32, il quoziente era troppo piccolo!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: stima e prova",
      questions: [
        { type: "mc", q: "Per stimare 183 : 29 quale divisione \"facile\" puoi pensare?", options: ["180 : 30", "100 : 20", "200 : 20"], answer: 0, explain: "29 è vicino a 30 e 183 è vicino a 180: 180 : 30 = 6." },
        { type: "num", q: "Fai la prova: un bambino ha trovato 500 : 23 = 21 resto 17. Quanto fa 21 × 23 + 17?", answer: 500, explain: "21 × 23 = 483; 483 + 17 = 500: la divisione è giusta!" },
        { type: "tf", q: "In una divisione per 15 il resto può essere 18.", answer: false, explain: "Il resto deve essere minore del divisore (15)." }
      ]
    },
    {
      type: "text",
      title: "Passo 4 – La proprietà invariantiva: una scorciatoia",
      html: `<p>Se <b>moltiplichi</b> o <b>dividi</b> dividendo e divisore per lo <b>stesso numero</b>, il quoziente <b>non cambia</b>. È la <b>proprietà invariantiva</b>.</p>
<ul>
<li>720 : 15 → raddoppio tutti e due → 1440 : 30 → divido per 10 → <b>144 : 3 = 48</b>. Molto più facile!</li>
<li>600 : 25 → moltiplico per 4 → 2400 : 100 = <b>24</b>.</li>
<li>840 : 40 → divido per 10 → 84 : 4 = <b>21</b>.</li>
</ul>
<p>Attenzione: se nella divisione c'è un <b>resto</b>, il quoziente resta lo stesso ma il resto cambia (viene moltiplicato o diviso anche lui). Usa questa scorciatoia soprattutto per le divisioni esatte.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i pullman della gita",
      html: `<p>450 alunni devono andare in gita. Ogni pullman ha <b>52 posti</b>. Quanti pullman servono?</p>
<ol>
<li>Stima: 450 : 50 = 9 → provo 9 × 52 = 468 &gt; 450, troppo → <b>8</b>.</li>
<li>8 × 52 = 416; 450 − 416 = <b>34</b>. Quindi 450 : 52 = <b>8 resto 34</b>.</li>
<li>Prova: 8 × 52 + 34 = 416 + 34 = 450 ✅.</li>
</ol>
<p>Ma attenzione al <b>significato del resto</b>! 8 pullman portano 416 alunni; restano 34 alunni a piedi. Serve un altro pullman: in tutto <b>9 pullman</b>.</p>
<p>Nei problemi bisogna sempre chiedersi: <b>il resto si ignora, si aggiunge o si usa?</b></p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le uova in confezioni",
      html: `<p>Una fattoria raccoglie <b>1.000 uova</b> e le mette in confezioni da <b>12</b> (una dozzina). Quante confezioni piene? Quante uova avanzano?</p>
<ol>
<li>100 : 12 → 10 : 1 = 10? Troppo! Il quoziente parziale è sempre una sola cifra (al massimo 9): provo 9 → 9 × 12 = 108 &gt; 100 → <b>8</b>: 8 × 12 = 96; 100 − 96 = 4.</li>
<li>Abbasso lo 0: <b>40</b> : 12 → <b>3</b>: 3 × 12 = 36; 40 − 36 = 4.</li>
<li>Risultato: <b>1.000 : 12 = 83 resto 4</b>.</li>
<li>Prova: 83 × 12 = 996; 996 + 4 = 1.000 ✅.</li>
</ol>
<p>La fattoria riempie <b>83 confezioni</b> e avanzano <b>4 uova</b> (per la frittata!).</p>`
    },
    {
      type: "3d",
      title: "La divisione come rettangolo di cubetti",
      scene: "blocks",
      options: { mode: "array", a: 6, b: 12, max: 12 },
      caption: "72 cubetti messi in file da 12: quante file? 72 : 12 = 6. Ogni divisione esatta è un rettangolo: dividendo = cubetti totali, divisore = cubetti per fila, quoziente = numero di file."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il metodo \"a L\" è italiano",
      html: `<p>Il modo di scrivere la divisione che usi tu, con il divisore in alto a destra e il quoziente sotto, è tipico dell'<b>Italia</b> e di altri Paesi europei (Francia, Spagna, America Latina). Nei <b>Paesi anglosassoni</b> si usa la <b>\"long division\"</b>: il dividendo sta sotto una specie di \"tettoia\" e il quoziente si scrive <b>sopra</b>. In Germania si scrive tutto su una riga: <i>864 : 24 = 36</i>, con i calcoli sotto.</p>
<p>Il metodo cambia, ma i passi (stima, moltiplica, sottrai, abbassa) sono sempre gli stessi!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Dividere per zero è impossibile",
      html: `<p>Si può dividere per 1, per 24, per 1.000… ma <b>mai per zero</b>! Perché? Fai la prova: 8 : 0 = ? Dovrebbe esistere un numero che, moltiplicato per 0, dia 8. Ma qualunque numero per 0 fa 0! Quindi la divisione per zero <b>non ha senso</b>.</p>
<p>Anche le calcolatrici lo sanno: se provi, scrivono <b>\"Errore\"</b> o <b>\"E\"</b>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Dividendo : divisore = quoziente</b> (+ resto).</li>
<li>Il <b>resto</b> è sempre <b>minore del divisore</b>.</li>
<li>Passi: <b>prendo le cifre → stimo → moltiplico → sottraggo → abbasso</b>, e ricomincio.</li>
<li>Per stimare <b>arrotonda il divisore</b> alla decina (o usa il trucco del dito).</li>
<li>Prodotto troppo grande → abbassa di 1; resto troppo grande → alza di 1.</li>
<li><b>Prova</b>: quoziente × divisore + resto = dividendo.</li>
<li><b>Proprietà invariantiva</b>: × o : dividendo e divisore per lo stesso numero, il quoziente non cambia.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per fare le divisioni",
      intro: "Se il metodo in colonna ti blocca, prova queste strade: a pezzi grandi (Inghilterra), con i salti all'indietro, come gli antichi Egizi o con la tabella dei multipli.",
      tabs: [
        {
          label: "🇬🇧 A pezzi grandi (chunking)",
          html: `<p>Nelle scuole inglesi si insegna il <b>chunking</b> (\"a pezzi\"): invece di indovinare la cifra giusta, togli dal dividendo <b>pezzi grandi e facili</b> (× 10, × 5, × 2…) finché non resta niente.</p>
<p><b>864 : 24</b></p>
<table>
<tr><th>Tolgo</th><th>Quante volte 24</th><th>Rimane</th></tr>
<tr><td>240 (= 24 × 10)</td><td>10</td><td>624</td></tr>
<tr><td>240 (= 24 × 10)</td><td>10</td><td>384</td></tr>
<tr><td>240 (= 24 × 10)</td><td>10</td><td>144</td></tr>
<tr><td>120 (= 24 × 5)</td><td>5</td><td>24</td></tr>
<tr><td>24 (= 24 × 1)</td><td>1</td><td>0</td></tr>
<tr><td><b>Totale</b></td><td><b>36</b></td><td></td></tr>
</table>
<p>È più lungo, ma <b>non si sbaglia mai la stima</b>: usi solo le tabelline che conosci bene!</p>`
        },
        {
          label: "🐸 Salti all'indietro",
          html: `<p>Dividere vuol dire anche: <b>quante volte posso togliere il divisore?</b> Sulla retta, parti dal dividendo e fai <b>salti all'indietro</b> lunghi come il divisore, finché arrivi a 0 (o non puoi più saltare).</p>
<p>Prova con <b>96 : 24</b>: la rana parte da 96, imposta il salto a 24 e premi \"−\". Conta i salti: 96 → 72 → 48 → 24 → 0. Sono <b>4 salti</b>: 96 : 24 = 4!</p>
<p>Poi prova con 100 : 24: dopo 4 salti arrivi a 4 e non puoi più saltare. 4 è il <b>resto</b>.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 100, step: 24, start: 96, marks: [72, 48, 24, 0] }
        },
        {
          label: "𓂀 Come gli Egizi (raddoppi)",
          html: `<p>Gli antichi Egizi dividevano usando solo i <b>raddoppi</b>! Per fare <b>864 : 24</b> scrivevano una tabella: 1 → 24, 2 → 48, 4 → 96, 8 → 192, 16 → 384, 32 → 768.</p>
<p>Poi cercavano quali righe sommate danno 864: <b>768 + 96 = 864</b>, cioè le righe <b>32</b> e <b>4</b>. Quindi il quoziente è <b>32 + 4 = 36</b>!</p>
<p>Nel widget qui sotto, che fa la \"moltiplicazione egizia\" 36 × 24, vedi proprio questa tabella: le righe tenute sono quelle che sommate fanno 864.</p>`,
          widget: "egyptianMultiply",
          options: { a: 36, b: 24 }
        },
        {
          label: "📋 La tabella dei multipli",
          html: `<p>Se la stima ti fa paura, prima di cominciare scrivi la <b>tabellina del divisore</b>: così non devi indovinare, devi solo guardare!</p>
<p>Per dividere per <b>24</b>:</p>
<table>
<tr><td>24 × 1 = 24</td><td>24 × 4 = 96</td><td>24 × 7 = 168</td></tr>
<tr><td>24 × 2 = 48</td><td>24 × 5 = 120</td><td>24 × 8 = 192</td></tr>
<tr><td>24 × 3 = 72</td><td>24 × 6 = 144</td><td>24 × 9 = 216</td></tr>
</table>
<p>Ora 86 : 24? Cerco il multiplo più grande che non supera 86: <b>72</b> (× 3). E 144 : 24? C'è esattamente <b>144</b> (× 6). Quoziente: <b>36</b>.</p>
<p>Trucco veloce per costruire la tabella: aggiungi ogni volta 24 al numero precedente (24, 48, 72, 96…).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della divisione",
      nodes: [
        { id: "divisione", label: "Divisione", x: 50, y: 6, color: "#2563eb", html: "Operazione per ripartire o raggruppare: dividendo : divisore = quoziente.", why: "È nata da bisogni pratici: dividere il raccolto, le razioni dei soldati, l'eredità. Gli Egizi e i Babilonesi sapevano già dividere 4000 anni fa, i primi con i raddoppi, i secondi usando tabelle di numeri inversi." },
        { id: "inversa", label: "Inversa della moltiplicazione", x: 18, y: 28, color: "#16a34a", html: "Se 36 × 24 = 864, allora 864 : 24 = 36.", why: "Dividere vuol dire cercare il fattore mancante: 24 × ? = 864. Per questo conoscere bene le tabelline è la chiave per dividere." },
        { id: "termini", label: "Dividendo, divisore, quoziente, resto", x: 50, y: 28, color: "#f59e0b", html: "I quattro nomi della divisione.", why: "\"Quoziente\" viene dal latino <i>quotiens</i>, \"quante volte\": quante volte il divisore sta nel dividendo." },
        { id: "resto", label: "Resto < divisore", x: 82, y: 28, color: "#ef4444", html: "Quello che avanza è sempre minore del divisore.", why: "Se il resto fosse uguale o maggiore del divisore, ci starebbe ancora un gruppo intero: il quoziente sarebbe troppo piccolo. Questa idea era già alla base dei calcoli di <b>Euclide</b> (circa 300 a.C.), che usava le divisioni con resto nei suoi <i>Elementi</i>." },
        { id: "stima", label: "Stima", x: 18, y: 58, color: "#a855f7", html: "Arrotondare il divisore per indovinare la cifra del quoziente.", why: "Funziona perché, arrotondando di poco il divisore, il quoziente cambia di poco. Al massimo devi correggere di 1 o 2: è un modo intelligente di \"provare e correggere\"." },
        { id: "algoritmo", label: "Algoritmo in colonna", x: 50, y: 58, color: "#0ea5e9", html: "Prendo le cifre, stimo, moltiplico, sottraggo, abbasso.", why: "Funziona grazie al <b>valore posizionale</b>: si divide prima la parte delle centinaia, poi delle decine, poi delle unità. Il metodo arrivò in Europa con le cifre indo-arabiche; Fibonacci lo spiegò nel <i>Liber Abaci</i> (1202) e in Italia fu perfezionato nelle scuole d'abaco dei mercanti." },
        { id: "prova", label: "Prova", x: 82, y: 58, color: "#14b8a6", html: "quoziente × divisore + resto = dividendo.", why: "È la definizione stessa della divisione con resto: dividendo = divisore × quoziente + resto. Usare l'operazione inversa è il controllo più sicuro." },
        { id: "invariantiva", label: "Proprietà invariantiva", x: 34, y: 86, color: "#64748b", html: "× o : dividendo e divisore per lo stesso numero, il quoziente non cambia.", why: "Se raddoppi le caramelle e anche i bambini, ognuno riceve sempre lo stesso numero di caramelle! È la stessa idea delle frazioni equivalenti: 720/15 = 1440/30." },
        { id: "zero", label: "Mai per zero", x: 66, y: 86, color: "#be185d", html: "Dividere per zero non ha senso.", why: "Nessun numero moltiplicato per 0 dà un numero diverso da 0, quindi la prova non può mai riuscire. I matematici dicono che la divisione per zero è \"impossibile\" o \"non definita\"." }
      ],
      edges: [
        ["divisione", "inversa", "è l'"],
        ["divisione", "termini", "ha"],
        ["termini", "resto", "regola"],
        ["inversa", "stima", "aiuta la"],
        ["stima", "algoritmo", "si usa nell'"],
        ["algoritmo", "prova", "si controlla con"],
        ["inversa", "prova", "si basa su"],
        ["divisione", "invariantiva", "proprietà"],
        ["divisione", "zero", "attenzione"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: calcola",
      questions: [
        { type: "num", q: "Quanto fa 672 : 32?", answer: 21, explain: "67 : 32 = 2 (64), resto 3; abbasso il 2 → 32 : 32 = 1. Quoziente 21." },
        { type: "num", q: "Usa la proprietà invariantiva: 900 : 25 = ?", answer: 36, explain: "× 4: 3600 : 100 = 36." },
        { type: "mc", q: "In 158 : 26 la stima \"160 : 30\" dà 5. Il quoziente giusto è…", options: ["5", "6", "7"], answer: 1, explain: "5 × 26 = 130, resto 28 ≥ 26: troppo piccolo! 6 × 26 = 156, resto 2 ✅." }
      ]
    }
  ],
  glossary: [
    { t: "Dividendo", d: "Il numero che si divide." },
    { t: "Divisore", d: "Il numero per cui si divide." },
    { t: "Quoziente", d: "Il risultato della divisione." },
    { t: "Resto", d: "Ciò che avanza; è sempre minore del divisore." },
    { t: "Stima", d: "Calcolo approssimato per prevedere il risultato." },
    { t: "Prova", d: "Controllo del risultato: quoziente × divisore + resto = dividendo." },
    { t: "Proprietà invariantiva", d: "Moltiplicando o dividendo dividendo e divisore per lo stesso numero il quoziente non cambia." },
    { t: "Divisione esatta", d: "Divisione con resto 0." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto fa 336 : 14?", answer: 24, explain: "33 : 14 = 2 (28), resto 5; abbasso 6 → 56 : 14 = 4. Quoziente 24." },
      { type: "num", q: "Quanto fa 945 : 45?", answer: 21, explain: "94 : 45 = 2 (90), resto 4; abbasso 5 → 45 : 45 = 1. Quoziente 21." },
      { type: "num", q: "Qual è il resto di 500 : 18?", answer: 14, explain: "500 : 18 = 27 resto 14 (27 × 18 = 486; 500 − 486 = 14)." },
      { type: "mc", q: "In 1.250 : 25 = 50, il numero 25 è…", options: ["il dividendo", "il divisore", "il quoziente"], answer: 1, explain: "Il numero per cui si divide è il divisore." },
      { type: "tf", q: "La prova della divisione si fa con la moltiplicazione.", answer: true, explain: "Quoziente × divisore + resto = dividendo." },
      { type: "tf", q: "Se un bambino trova 300 : 40 = 6 resto 60, il risultato è giusto.", answer: false, explain: "Il resto 60 è maggiore del divisore 40: il quoziente giusto è 7 resto 20." },
      { type: "mc", q: "Quale divisione ha lo stesso quoziente di 480 : 16?", options: ["240 : 8", "480 : 8", "240 : 16"], answer: 0, explain: "Dividendo e divisore divisi entrambi per 2: proprietà invariantiva." },
      { type: "order", q: "Metti in ordine i passi della divisione in colonna.", items: ["Prendo le cifre del dividendo", "Stimo quante volte ci sta il divisore", "Moltiplico la cifra per il divisore", "Sottraggo", "Abbasso la cifra successiva"], explain: "Prendo, stimo, moltiplico, sottraggo, abbasso: e si ricomincia." },
      { type: "num", q: "Una scuola ha 380 alunni e ogni pullman porta 50 persone. Quanti pullman servono per portarli tutti?", answer: 8, explain: "380 : 50 = 7 resto 30: per i 30 alunni rimasti serve un altro pullman, quindi 8." },
      { type: "num", q: "In una biblioteca ci sono 1.008 libri da mettere in scaffali da 42 libri. Quanti scaffali si riempiono?", answer: 24, explain: "1.008 : 42 = 24 (42 × 24 = 1.008)." },
      { type: "text", q: "Come si chiama il risultato della divisione?", answer: ["quoziente", "il quoziente"], explain: "Il quoziente." }
    ],
    gen: [["div2", 3]]
  }
});
