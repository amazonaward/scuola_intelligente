TOPIC('it', {
  id: "p5-mat-operazioni-decimali",
  title: "Operazioni con i decimali",
  intro: "Prezzi, misure, tempi delle gare: i <b>numeri decimali</b> sono dappertutto. In questa lezione impari a fare le <b>quattro operazioni con la virgola</b> e a moltiplicare e dividere per 10, 100, 1000 \"spostando\" la virgola.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ripasso: com'è fatto un numero decimale",
      html: `<p>Un numero decimale ha una <b>parte intera</b> (prima della virgola) e una <b>parte decimale</b> (dopo la virgola).</p>
<p>Nel numero <b>34,56</b>:</p>
<ul>
<li>3 = decine (da), 4 = unità (u) → parte intera;</li>
<li>5 = <b>decimi</b> (d): 1 decimo = 1/10 = 0,1;</li>
<li>6 = <b>centesimi</b> (c): 1 centesimo = 1/100 = 0,01;</li>
<li>la cifra successiva sarebbe dei <b>millesimi</b> (m): 1/1000 = 0,001.</li>
</ul>
<p>Regola d'oro: aggiungere <b>zeri alla fine</b> della parte decimale <b>non cambia</b> il numero: 2,5 = 2,50 = 2,500. Questo trucco ci servirà tantissimo!</p>`
    },
    {
      type: "text",
      title: "Addizione e sottrazione: virgola sotto virgola",
      html: `<ol>
<li>Scrivi i numeri in colonna con la <b>virgola sotto la virgola</b> (così le unità sono sotto le unità, i decimi sotto i decimi…).</li>
<li>Se un numero ha meno cifre decimali, <b>aggiungi gli zeri</b> per pareggiare: 12,4 → 12,40.</li>
<li>Esegui l'operazione come con i numeri interi, da destra verso sinistra, con riporti e prestiti.</li>
<li>Nel risultato metti la <b>virgola sotto le altre virgole</b>.</li>
</ol>
<p>Esempio: 12,4 + 3,75 → 12,40 + 3,75 = <b>16,15</b>. Esempio: 8 − 2,35 → 8,00 − 2,35 = <b>5,65</b>.</p>`
    },
    {
      type: "svg",
      title: "In colonna, virgola sotto virgola",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-size="15" text-anchor="middle" font-weight="bold">
<text x="80" y="36" fill="#7c3aed">da</text><text x="120" y="36" fill="#2563eb">u</text><text x="180" y="36" fill="#16a34a">d</text><text x="220" y="36" fill="#dc2626">c</text>
</g>
<rect x="148" y="44" width="10" height="170" fill="#fde68a"/>
<g font-size="34" text-anchor="middle" font-family="monospace" fill="#1f2937">
<text x="80" y="84">1</text><text x="120" y="84">2</text><text x="153" y="84">,</text><text x="180" y="84">4</text><text x="220" y="84" fill="#f97316">0</text>
<text x="40" y="134">+</text><text x="120" y="134">3</text><text x="153" y="134">,</text><text x="180" y="134">7</text><text x="220" y="134">5</text>
<text x="80" y="200" font-weight="bold">1</text><text x="120" y="200" font-weight="bold">6</text><text x="153" y="200" font-weight="bold">,</text><text x="180" y="200" font-weight="bold">1</text><text x="220" y="200" font-weight="bold">5</text>
</g>
<line x1="30" y1="150" x2="250" y2="150" stroke="#1f2937" stroke-width="3"/>
<text x="132" y="58" font-size="14" text-anchor="middle" fill="#64748b">1</text>
<text x="235" y="250" font-size="15" text-anchor="middle" fill="#ea580c">zero aggiunto</text>
<line x1="228" y1="234" x2="222" y2="92" stroke="#ea580c" stroke-width="2"/>
<g font-size="16" fill="#1f2937">
<text x="300" y="70">1) virgola sotto virgola</text>
<text x="300" y="105">2) pareggio con gli zeri: 12,4 → 12,40</text>
<text x="300" y="140">3) calcolo da destra, con i riporti:</text>
<text x="320" y="165">0 + 5 = 5;  4 + 7 = 11 → scrivo 1, riporto 1</text>
<text x="300" y="200">4) la virgola nel risultato scende</text>
<text x="320" y="225">nella stessa colonna</text>
</g>
</svg>`,
      caption: "La colonna gialla delle virgole tiene in ordine le cifre: decimi con decimi, centesimi con centesimi."
    },
    {
      type: "example",
      title: "Esempio pratico: la spesa",
      html: `<p>La mamma compra: pane <b>2,35 €</b>, latte <b>1,49 €</b>, mele <b>3,2 €</b>. Paga con una banconota da <b>10 €</b>.</p>
<ol>
<li>Totale: 2,35 + 1,49 + 3,20 = <b>7,04 €</b> (attenzione: 3,2 → 3,20!).</li>
<li>Resto: 10,00 − 7,04 = <b>2,96 €</b>.</li>
</ol>
<p>Controllo veloce (stima): 2 + 1,5 + 3 ≈ 6,5, quindi il totale è circa 7 €: il risultato è ragionevole. ✅</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: addizione e sottrazione",
      questions: [
        { type: "num", q: "4,5 + 2,35 = ?", answer: 6.85, explain: "4,50 + 2,35 = 6,85." },
        { type: "num", q: "10 − 3,6 = ?", answer: 6.4, explain: "10,0 − 3,6 = 6,4." },
        { type: "tf", q: "3,7 e 3,70 sono lo stesso numero.", answer: true, explain: "Gli zeri alla fine della parte decimale non cambiano il valore." }
      ]
    },
    {
      type: "text",
      title: "Moltiplicare e dividere per 10, 100, 1000",
      html: `<p>Questa è la parte più \"magica\":</p>
<ul>
<li><b>× 10, × 100, × 1000</b> → la virgola si sposta verso <b>destra</b> di <b>1, 2, 3</b> posti (il numero diventa più grande). 3,456 × 10 = 34,56; 3,456 × 100 = 345,6; 3,456 × 1000 = 3456.</li>
<li><b>: 10, : 100, : 1000</b> → la virgola si sposta verso <b>sinistra</b> di <b>1, 2, 3</b> posti (il numero diventa più piccolo). 45,7 : 10 = 4,57; 45,7 : 100 = 0,457.</li>
</ul>
<p>Se mancano cifre, si aggiungono <b>zeri</b>: 2,5 × 1000 = 2500; 3 : 100 = 0,03.</p>
<p>Il trucco: <b>conta gli zeri</b> del 10, 100, 1000. Tanti zeri = tanti posti.</p>`
    },
    {
      type: "text",
      title: "La moltiplicazione con la virgola",
      html: `<ol>
<li>Esegui la moltiplicazione <b>come se non ci fossero le virgole</b>.</li>
<li><b>Conta</b> quante cifre decimali ci sono <b>in tutto</b> nei due fattori.</li>
<li>Nel risultato, partendo da destra, separa con la virgola <b>lo stesso numero di cifre</b>.</li>
</ol>
<p>Esempio: 2,3 × 1,4 → 23 × 14 = 322. Cifre decimali: 1 + 1 = 2 → <b>3,22</b>.</p>
<p>Esempio: 0,5 × 0,3 → 5 × 3 = 15. Cifre decimali: 2 → <b>0,15</b>.</p>
<p>⚠️ Moltiplicare per un numero <b>minore di 1</b> dà un risultato <b>più piccolo</b>: 0,5 × 8 = 4 (è la metà di 8!).</p>`
    },
    {
      type: "widget",
      title: "La moltiplicazione come area: 0,3 × 0,4",
      widget: "areaGrid",
      options: { w: 3, h: 4, max: 10 },
      caption: "Immagina che il quadrato grande 10 × 10 sia 1 intero: ogni lato è 1 e ogni quadretto vale 0,01. Un rettangolo di 3 colonne (0,3) e 4 righe (0,4) contiene 12 quadretti: 0,3 × 0,4 = 0,12."
    },
    {
      type: "text",
      title: "La divisione con la virgola",
      html: `<p><b>Caso 1 – la virgola è nel dividendo</b> (es. 7,5 : 3):</p>
<ol>
<li>dividi normalmente la parte intera: 7 : 3 = 2 con resto 1;</li>
<li><b>quando abbassi la prima cifra dopo la virgola, metti la virgola nel quoziente</b>: abbassi il 5 → 15 : 3 = 5 → risultato <b>2,5</b>.</li>
</ol>
<p><b>Caso 2 – la virgola è nel divisore</b> (es. 6 : 1,5):</p>
<ol>
<li>usa la <b>proprietà invariantiva</b>: moltiplica dividendo e divisore per lo <b>stesso numero</b> (10, 100…) per togliere la virgola dal divisore;</li>
<li>6 : 1,5 → (× 10) → 60 : 15 = <b>4</b>.</li>
</ol>
<p><b>Caso 3 – il resto non è zero</b>: puoi continuare aggiungendo uno <b>zero</b> al resto e mettendo la virgola nel quoziente: 7 : 4 = 1 resto 3 → 30 : 4 = 7 resto 2 → 20 : 4 = 5 → <b>1,75</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: dividere il conto della pizza",
      html: `<p>Quattro amici spendono in pizzeria <b>38,60 €</b> e dividono il conto in parti uguali.</p>
<p>38,60 : 4 → 38 : 4 = 9 resto 2; abbasso il 6 (metto la virgola!) → 26 : 4 = 6 resto 2; abbasso lo 0 → 20 : 4 = 5. Risultato: <b>9,65 €</b> a testa.</p>
<p>Controllo: 9,65 × 4 = 38,60 ✅. La moltiplicazione è l'operazione <b>inversa</b> della divisione: è il modo migliore per verificare!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la benzina e lo scooter",
      html: `<p>La benzina costa <b>1,85 €</b> al litro. Il nonno fa <b>12 litri</b>. Quanto spende?</p>
<p>185 × 12 = 2220 → 2 cifre decimali → <b>22,20 €</b>.</p>
<p>Lo scooter percorre <b>34,5 km</b> con 1 litro. Con 12 litri: 34,5 × 12 = <b>414 km</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: moltiplicazione e divisione",
      questions: [
        { type: "num", q: "4,73 × 100 = ?", answer: 473, explain: "× 100: la virgola si sposta di 2 posti a destra." },
        { type: "num", q: "56 : 1000 = ?", answer: 0.056, explain: ": 1000: la virgola si sposta di 3 posti a sinistra, aggiungendo zeri: 0,056." },
        { type: "num", q: "1,2 × 0,3 = ?", answer: 0.36, explain: "12 × 3 = 36; 2 cifre decimali → 0,36." },
        { type: "num", q: "9 : 1,5 = ?", answer: 6, explain: "Proprietà invariantiva: 90 : 15 = 6." }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Virgola o punto?",
      html: `<p>In Italia e in gran parte d'Europa i decimali si separano con la <b>virgola</b> (3,14). Nei Paesi di lingua inglese, in Cina e in Giappone si usa il <b>punto</b> (3.14). Le calcolatrici e i computer usano spesso il punto! E le migliaia? Noi scriviamo 1.000.000 o 1 000 000; gli inglesi 1,000,000. Per evitare confusione, le norme internazionali consigliano di separare le migliaia con uno <b>spazio</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il libretto che inventò i decimali (in Europa)",
      html: `<p>Nel <b>1585</b> il matematico fiammingo <b>Simon Stevin</b> pubblicò un libretto di poche pagine, <i>De Thiende</i> (\"La decima\"), per spiegare a mercanti e geometri come usare le frazioni decimali nei conti di tutti i giorni. Scriveva i numeri in un modo strano, con dei cerchietti: 3⓪1①4②. Pochi anni dopo lo scozzese <b>John Napier</b> (Nepero) rese popolare il separatore. Molto prima, matematici arabi e cinesi usavano già le frazioni decimali.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>+ e −</b>: virgola sotto virgola, pareggia con gli zeri.</li>
<li><b>× e : per 10, 100, 1000</b>: sposta la virgola a destra (×) o a sinistra (:) di tanti posti quanti sono gli zeri.</li>
<li><b>×</b>: moltiplica senza virgole, poi separa tante cifre decimali quante sono in tutto nei fattori.</li>
<li><b>:</b> virgola nel dividendo → mettila nel quoziente quando la superi; virgola nel divisore → toglila con la proprietà invariantiva.</li>
<li><b>Stima</b> sempre il risultato e fai la <b>prova</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i calcoli con la virgola",
      intro: "Se la regola della virgola ti confonde, prova con gli euro, con i blocchi 3D, con le unità di misura o con il metodo della stima usato in molti Paesi.",
      tabs: [
        {
          label: "💶 Pensa in centesimi",
          html: `<p>Trasforma tutto in <b>centesimi</b> e la virgola sparisce!</p>
<ul>
<li>2,35 € + 1,49 € → 235 c + 149 c = 384 c = <b>3,84 €</b>.</li>
<li>10 € − 7,04 € → 1000 c − 704 c = 296 c = <b>2,96 €</b>.</li>
<li>1,85 € × 12 → 185 c × 12 = 2220 c = <b>22,20 €</b>.</li>
<li>38,60 € : 4 → 3860 c : 4 = 965 c = <b>9,65 €</b>.</li>
</ul>
<p>È esattamente quello che fa la regola della virgola: lavora con i numeri interi e alla fine rimette la virgola al posto giusto.</p>`
        },
        {
          label: "🧊 I blocchi 3D",
          html: `<p>Prendi i blocchi base 10 ma cambia il \"valore\": la <b>piastra</b> da 100 cubetti vale <b>1 intero</b>, la <b>barretta</b> da 10 vale <b>1 decimo</b> (0,1), il <b>cubetto</b> vale <b>1 centesimo</b> (0,01).</p>
<p>Il modello qui sotto mostra 245 cubetti: con la nostra regola sono <b>2,45</b> (2 piastre, 4 barrette, 5 cubetti). Se aggiungi 0,07 aggiungi 7 cubetti: arrivi a 12 cubetti sciolti, ne cambi 10 con una barretta (è il <b>riporto</b>!) e ottieni 2,52.</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 245 }
        },
        {
          label: "📏 Con le misure",
          html: `<p>Moltiplicare e dividere per 10, 100, 1000 è come <b>cambiare unità di misura</b>:</p>
<ul>
<li>3,25 m = 32,5 dm = <b>325 cm</b> (× 100: da metri a centimetri).</li>
<li>1500 g = <b>1,5 kg</b> (: 1000: da grammi a chilogrammi).</li>
<li>0,75 l = <b>75 cl</b> = 750 ml.</li>
</ul>
<p>Il numero cambia, ma la <b>quantità resta la stessa</b>: cambia solo il \"righello\" con cui la misuri. Spostare la virgola = cambiare cassetto nella tabella delle misure.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f0fdf4"/>
<g font-size="20" text-anchor="middle" font-weight="bold">
<rect x="20" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="60" y="73">km</text>
<rect x="100" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="140" y="73">hm</text>
<rect x="180" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="220" y="73">dam</text>
<rect x="260" y="40" width="80" height="50" fill="#fde68a" stroke="#15803d" stroke-width="2"/><text x="300" y="73">m</text>
<rect x="340" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="380" y="73">dm</text>
<rect x="420" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="460" y="73">cm</text>
<rect x="500" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="540" y="73">mm</text>
</g>
<path d="M300,100 Q380,150 460,100" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="452,96 468,100 458,112" fill="#dc2626"/>
<text x="380" y="160" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">× 100 (2 posti a destra)</text>
<text x="300" y="190" font-size="17" text-anchor="middle" fill="#1f2937">3,25 m = 325 cm</text>
</svg>`
        },
        {
          label: "🎯 Prima stima, poi calcola",
          html: `<p>In molti Paesi (per esempio in Inghilterra e in Olanda) si insegna a <b>stimare prima</b> e a usare la stima per <b>mettere la virgola</b>:</p>
<ul>
<li>4,8 × 3,1 → stima: 5 × 3 = 15. Calcolo senza virgole: 48 × 31 = 1488. Dove va la virgola perché sia vicino a 15? → <b>14,88</b>!</li>
<li>0,62 × 5 → stima: circa metà di 5… circa 3. 62 × 5 = 310 → <b>3,10</b>.</li>
</ul>
<p>Così, anche se sbagli a contare le cifre decimali, la stima ti avvisa subito: 148,8 o 1,488 sarebbero assurdi!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle operazioni con i decimali",
      nodes: [
        { id: "decimali", label: "Numeri decimali", x: 50, y: 6, color: "#2563eb", html: "Numeri con parte intera e parte decimale, separate dalla virgola.", why: "Sono frazioni decimali (con denominatore 10, 100, 1000…) scritte in modo comodo: 0,25 = 25/100. Funzionano perché il nostro sistema di numerazione è in base 10." },
        { id: "posizione", label: "Valore posizionale", x: 20, y: 26, color: "#7c3aed", html: "Ogni posto vale 10 volte quello alla sua destra: u, d, c, m.", why: "Il sistema posizionale con lo zero arrivò dall'India attraverso gli Arabi; Fibonacci lo diffuse in Europa nel 1202. I decimali sono la sua estensione \"dopo la virgola\"." },
        { id: "addsott", label: "Addizione e sottrazione", x: 20, y: 52, color: "#16a34a", html: "Virgola sotto virgola, pareggiando con gli zeri.", why: "Si possono sommare solo unità dello stesso tipo (decimi con decimi): incolonnare le virgole allinea automaticamente i valori di posizione." },
        { id: "potenze10", label: "× e : per 10, 100, 1000", x: 50, y: 34, color: "#f97316", html: "La virgola si sposta a destra (×) o a sinistra (:) di tanti posti quanti gli zeri.", why: "Moltiplicare per 10 fa diventare ogni cifra 10 volte più grande: ogni cifra \"sale\" di un posto. In realtà si spostano le cifre, ma è come se si spostasse la virgola." },
        { id: "molt", label: "Moltiplicazione", x: 50, y: 62, color: "#dc2626", html: "Moltiplica senza virgole, poi separa tante cifre decimali quante nei fattori.", why: "2,3 × 1,4 = (23 : 10) × (14 : 10) = 322 : 100 = 3,22. Togliere le virgole significa moltiplicare per 10, 100…; alla fine bisogna \"restituire\" quelle divisioni." },
        { id: "div", label: "Divisione", x: 80, y: 52, color: "#0ea5e9", html: "Virgola nel quoziente quando si supera la virgola del dividendo; virgola del divisore tolta con l'invariantiva.", why: "Proprietà invariantiva: moltiplicando dividendo e divisore per lo stesso numero il quoziente non cambia (6 : 1,5 = 60 : 15), come le frazioni equivalenti." },
        { id: "zeri", label: "Zeri finali", x: 80, y: 26, color: "#eab308", html: "2,5 = 2,50 = 2,500.", why: "Aggiungere zeri dopo l'ultima cifra decimale significa aggiungere 0 centesimi, 0 millesimi: il valore non cambia. È come dire 25/10 = 250/100." },
        { id: "stima", label: "Stima e prova", x: 35, y: 86, color: "#14b8a6", html: "Calcolo approssimato prima, operazione inversa dopo.", why: "Arrotondare ai numeri interi dà subito l'ordine di grandezza: se la stima e il risultato sono molto diversi, la virgola è al posto sbagliato." },
        { id: "storia", label: "Stevin e Nepero", x: 70, y: 86, color: "#64748b", html: "Chi diffuse i decimali in Europa.", why: "Simon Stevin nel 1585 (<i>De Thiende</i>) spiegò i decimali per il commercio; John Napier (Nepero) a inizio Seicento rese popolare il separatore decimale. Prima ancora, li usavano matematici cinesi e arabi come al-Kashi (1427)." }
      ],
      edges: [
        ["decimali", "posizione", "si basano sul"],
        ["decimali", "zeri", "proprietà"],
        ["posizione", "addsott", "allinea"],
        ["posizione", "potenze10", "spiega"],
        ["potenze10", "molt", "usato nella"],
        ["zeri", "div", "aiutano nella"],
        ["molt", "stima", "si controlla con"],
        ["decimali", "storia", "diffusi da"]
      ]
    }
  ],
  glossary: [
    { t: "Numero decimale", d: "Numero con una parte intera e una parte decimale separate dalla virgola." },
    { t: "Decimo", d: "Una delle 10 parti dell'unità: 0,1." },
    { t: "Centesimo", d: "Una delle 100 parti dell'unità: 0,01." },
    { t: "Millesimo", d: "Una delle 1000 parti dell'unità: 0,001." },
    { t: "Incolonnare", d: "Scrivere i numeri uno sotto l'altro con le cifre dello stesso ordine allineate." },
    { t: "Proprietà invariantiva", d: "Moltiplicando o dividendo dividendo e divisore per lo stesso numero, il quoziente non cambia." },
    { t: "Stima", d: "Calcolo approssimato per prevedere il risultato." },
    { t: "Prova", d: "Controllo del risultato con l'operazione inversa." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "15,6 + 4,75 = ?", answer: 20.35, explain: "15,60 + 4,75 = 20,35." },
      { type: "num", q: "20 − 7,85 = ?", answer: 12.15, explain: "20,00 − 7,85 = 12,15." },
      { type: "num", q: "0,38 × 1000 = ?", answer: 380, explain: "3 posti a destra: 380." },
      { type: "num", q: "125 : 100 = ?", answer: 1.25, explain: "2 posti a sinistra: 1,25." },
      { type: "num", q: "3,5 × 4 = ?", answer: 14, explain: "35 × 4 = 140; 1 cifra decimale → 14,0 = 14." },
      { type: "num", q: "0,6 × 0,7 = ?", answer: 0.42, explain: "6 × 7 = 42; 2 cifre decimali → 0,42." },
      { type: "num", q: "8,4 : 4 = ?", answer: 2.1, explain: "8 : 4 = 2, poi 4 : 4 = 1 dopo la virgola → 2,1." },
      { type: "num", q: "12 : 0,4 = ?", answer: 30, explain: "Invariantiva: 120 : 4 = 30." },
      { type: "mc", q: "Per moltiplicare 2,37 × 1,2 quante cifre decimali avrà il risultato?", options: ["1", "2", "3"], answer: 2, explain: "2 cifre in 2,37 + 1 in 1,2 = 3 cifre decimali (2,844)." },
      { type: "tf", q: "Moltiplicando un numero per 0,5 si ottiene un numero più grande.", answer: false, explain: "0,5 è minore di 1: si ottiene la metà del numero." },
      { type: "num", q: "Un quaderno costa 1,75 €. Quanto costano 6 quaderni?", answer: 10.5, unit: "€", explain: "175 × 6 = 1050 → 10,50 €." },
      { type: "order", q: "Ordina i passi per calcolare 2,3 × 1,4.", items: ["Moltiplico senza virgole: 23 × 14 = 322", "Conto le cifre decimali dei fattori: 1 + 1 = 2", "Separo 2 cifre da destra: 3,22", "Controllo con la stima: 2 × 1,5 ≈ 3"], explain: "Calcolo, conto i decimali, metto la virgola, verifico con la stima." }
    ],
    gen: [["decAdd", 2], ["decMul", 2]]
  }
});
