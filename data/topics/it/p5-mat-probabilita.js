TOPIC('it', {
  id: "p5-mat-probabilita",
  title: "Probabilità e statistica",
  intro: "Domani pioverà? Quale gusto di gelato preferisce la tua classe? Chi vincerà a testa o croce? La <b>statistica</b> raccoglie e legge i dati, la <b>probabilità</b> misura quanto è facile che una cosa succeda. Impariamo <b>media, moda e mediana</b> e a riconoscere gli eventi <b>certi, possibili e impossibili</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Che cos'è la statistica",
      html: `<p>La <b>statistica</b> è la parte della matematica che <b>raccoglie</b>, <b>ordina</b> e <b>interpreta</b> i dati per capire un fenomeno.</p>
<p>Un'indagine statistica si fa in 4 passi:</p>
<ol>
<li><b>Domanda</b>: che cosa voglio sapere? (es. "Qual è lo sport preferito della classe?")</li>
<li><b>Raccolta dei dati</b>: con un questionario, un'intervista, delle misure.</li>
<li><b>Organizzazione</b>: si contano i dati in una <b>tabella di frequenza</b> (quante volte compare ogni risposta).</li>
<li><b>Rappresentazione e lettura</b>: si disegna un <b>grafico</b> (istogramma, ideogramma, aerogramma a torta…) e si calcolano gli <b>indici</b>: moda, media, mediana.</li>
</ol>
<p>Le cose che studiamo (sport, età, altezza…) si chiamano <b>caratteri</b>; le risposte possibili si chiamano <b>modalità</b>.</p>`
    },
    {
      type: "svg",
      title: "Lo sport preferito della 5ª B (istogramma)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<line x1="70" y1="270" x2="570" y2="270" stroke="#1f2937" stroke-width="3"/>
<line x1="70" y1="270" x2="70" y2="30" stroke="#1f2937" stroke-width="3"/>
<g stroke="#cbd5e1" stroke-width="1">
<line x1="70" y1="230" x2="570" y2="230"/><line x1="70" y1="190" x2="570" y2="190"/><line x1="70" y1="150" x2="570" y2="150"/><line x1="70" y1="110" x2="570" y2="110"/><line x1="70" y1="70" x2="570" y2="70"/>
</g>
<g font-size="16" fill="#1f2937" text-anchor="end">
<text x="60" y="275">0</text><text x="60" y="235">2</text><text x="60" y="195">4</text><text x="60" y="155">6</text><text x="60" y="115">8</text><text x="60" y="75">10</text>
</g>
<rect x="100" y="110" width="70" height="160" fill="#22c55e"/>
<rect x="200" y="190" width="70" height="80" fill="#3b82f6"/>
<rect x="300" y="210" width="70" height="60" fill="#f97316"/>
<rect x="400" y="230" width="70" height="40" fill="#a855f7"/>
<rect x="500" y="250" width="50" height="20" fill="#ef4444"/>
<g font-size="17" text-anchor="middle" fill="#1f2937">
<text x="135" y="295">⚽ Calcio</text><text x="235" y="295">🏊 Nuoto</text><text x="335" y="295">🏐 Volley</text><text x="435" y="295">🤸 Danza</text><text x="525" y="295">🏀 Basket</text>
</g>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="135" y="102">8</text><text x="235" y="182">4</text><text x="335" y="202">3</text><text x="435" y="222">2</text><text x="525" y="242">1</text>
</g>
<text x="330" y="40" font-size="20" fill="#166534" font-weight="bold" text-anchor="middle">Moda = Calcio (la colonna più alta)</text>
</svg>`,
      caption: "18 alunni hanno risposto. La frequenza è il numero di volte in cui compare una risposta."
    },
    {
      type: "text",
      title: "Moda, media e mediana",
      html: `<p>Sono tre modi diversi per dire con <b>un solo numero</b> com'è fatto un gruppo di dati.</p>
<p>Esempio: i voti di Marta in matematica: <b>6, 8, 7, 8, 9, 10, 8</b></p>
<ul>
<li><b>Moda</b>: il dato che compare <b>più spesso</b>. Qui l'8 compare 3 volte → moda = <b>8</b>. (Ci possono essere anche due mode, o nessuna.)</li>
<li><b>Media aritmetica</b>: si <b>sommano</b> tutti i dati e si <b>divide</b> per quanti sono.<br>6 + 8 + 7 + 8 + 9 + 10 + 8 = 56 → 56 : 7 = <b>8</b>.</li>
<li><b>Mediana</b>: si mettono i dati <b>in ordine</b> e si prende quello che sta <b>in mezzo</b>.<br>6, 7, 8, <b>8</b>, 8, 9, 10 → mediana = <b>8</b>.<br>Se i dati sono in numero pari, la mediana è la media dei due centrali.</li>
</ul>
<p>La <b>moda</b> si può usare anche con dati che non sono numeri (es. colori, sport). Media e mediana solo con i numeri.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le temperature della settimana",
      html: `<p>La classe ha misurato la temperatura a mezzogiorno per 5 giorni: <b>12 °C, 15 °C, 14 °C, 11 °C, 18 °C</b>.</p>
<ul>
<li>Somma: 12 + 15 + 14 + 11 + 18 = 70</li>
<li>Media: 70 : 5 = <b>14 °C</b></li>
<li>In ordine: 11, 12, <b>14</b>, 15, 18 → mediana = <b>14 °C</b></li>
<li>Nessun valore si ripete → <b>non c'è moda</b>.</li>
</ul>
<p>Il <b>campo di variazione</b> è la differenza tra il valore più alto e quello più basso: 18 − 11 = <b>7 °C</b>. Ci dice quanto sono "sparsi" i dati.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: quando la media inganna",
      html: `<p>In una via ci sono 5 negozi. Ogni giorno incassano: <b>100 €, 120 €, 90 €, 110 €</b> e il supermercato <b>1580 €</b>.</p>
<ul>
<li>Media: (100 + 120 + 90 + 110 + 1580) : 5 = 2000 : 5 = <b>400 €</b></li>
<li>Mediana: 90, 100, <b>110</b>, 120, 1580 → <b>110 €</b></li>
</ul>
<p>Quale numero descrive meglio un negozio "tipico" della via? La <b>mediana</b>! Un solo valore molto grande "tira su" la media. Per questo gli statistici guardano sempre più indici insieme.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: moda, media, mediana",
      questions: [
        { type: "num", q: "Qual è la media di 4, 6, 8?", answer: 6, explain: "4 + 6 + 8 = 18; 18 : 3 = 6." },
        { type: "num", q: "Qual è la moda di 3, 5, 5, 7, 5, 2?", answer: 5, explain: "Il 5 compare 3 volte, più di tutti gli altri." },
        { type: "num", q: "Qual è la mediana di 9, 2, 7, 4, 5?", answer: 5, explain: "In ordine: 2, 4, 5, 7, 9. Quello in mezzo è 5." },
        { type: "tf", q: "La moda si può calcolare anche per i colori preferiti.", answer: true, explain: "La moda è la risposta più frequente: vale anche per dati non numerici." }
      ]
    },
    {
      type: "text",
      title: "Certo, possibile, impossibile",
      html: `<p>Un <b>evento</b> è qualcosa che può succedere (o no). Lanciando un normale dado a 6 facce:</p>
<ul>
<li><b>Evento certo</b>: succede <b>sempre</b>. "Esce un numero da 1 a 6." ✅</li>
<li><b>Evento impossibile</b>: <b>non succede mai</b>. "Esce il 7." ❌</li>
<li><b>Evento possibile</b> (o probabile): <b>può succedere oppure no</b>. "Esce il 4." 🤔</li>
</ul>
<p>Tra gli eventi possibili, alcuni sono <b>più probabili</b> di altri: "esce un numero pari" (3 casi su 6) è più probabile di "esce il 6" (1 caso su 6).</p>`
    },
    {
      type: "widget",
      title: "Certo, possibile o impossibile?",
      widget: "classify",
      options: {
        groups: ["✅ Certo", "🤔 Possibile", "❌ Impossibile"],
        items: [
          ["🎲 Lanciando un dado esce un numero minore di 7", 0],
          ["🎲 Lanciando un dado esce il 3", 1],
          ["🎲 Lanciando un dado esce lo 0", 2],
          ["🪙 Lanciando una moneta esce testa", 1],
          ["📅 Dopo lunedì viene martedì", 0],
          ["🐘 Un elefante entra nel tuo astuccio", 2],
          ["🌧️ Domani piove", 1],
          ["🔴 Pesco una pallina rossa da un sacchetto di sole palline blu", 2],
          ["🔵 Pesco una pallina blu da un sacchetto di sole palline blu", 0]
        ]
      },
      caption: "Metti ogni evento nel gruppo giusto."
    },
    {
      type: "text",
      title: "Misurare la probabilità con una frazione",
      html: `<p>La <b>probabilità</b> di un evento si può scrivere con una <b>frazione</b>:</p>
<p style="text-align:center;font-size:1.2em"><b>probabilità = casi favorevoli / casi possibili</b></p>
<ul>
<li><b>Casi possibili</b>: tutti i risultati che possono uscire (tutti ugualmente probabili).</li>
<li><b>Casi favorevoli</b>: i risultati che vanno bene per il nostro evento.</li>
</ul>
<p>Esempi con un dado:</p>
<ul>
<li>"Esce il 5": 1 caso favorevole su 6 → <b>1/6</b></li>
<li>"Esce un numero pari" (2, 4, 6): 3 su 6 → <b>3/6 = 1/2</b>, cioè il 50%</li>
<li>Evento <b>certo</b>: 6/6 = <b>1</b> (100%)</li>
<li>Evento <b>impossibile</b>: 0/6 = <b>0</b> (0%)</li>
</ul>
<p>Quindi la probabilità è sempre un numero <b>tra 0 e 1</b>: più è vicino a 1, più l'evento è probabile.</p>`
    },
    {
      type: "svg",
      title: "La scala della probabilità",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="pg" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ef4444"/><stop offset="0.5" stop-color="#facc15"/><stop offset="1" stop-color="#22c55e"/></linearGradient></defs>
<rect width="600" height="260" fill="#ffffff"/>
<rect x="50" y="110" width="500" height="30" rx="15" fill="url(#pg)"/>
<g font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="60" y="170">0</text><text x="175" y="170">1/6</text><text x="300" y="170">1/2</text><text x="540" y="170">1</text>
</g>
<g stroke="#1f2937" stroke-width="3">
<line x1="60" y1="100" x2="60" y2="150"/><line x1="133" y1="100" x2="133" y2="150"/><line x1="300" y1="100" x2="300" y2="150"/><line x1="540" y1="100" x2="540" y2="150"/>
</g>
<g font-size="17" text-anchor="middle">
<text x="60" y="60" fill="#b91c1c">impossibile</text><text x="60" y="85" fill="#b91c1c">esce il 7</text>
<text x="133" y="210" fill="#92400e">esce il 5</text>
<text x="300" y="60" fill="#854d0e">testa o croce</text><text x="300" y="85" fill="#854d0e">esce testa</text>
<text x="300" y="210" fill="#854d0e">esce un pari</text>
<text x="530" y="60" fill="#166534">certo</text><text x="530" y="85" fill="#166534">esce da 1 a 6</text>
</g>
<text x="300" y="245" font-size="16" fill="#475569" text-anchor="middle">più a destra = più probabile</text>
</svg>`,
      caption: "Ogni evento ha il suo posto tra 0 (impossibile) e 1 (certo)."
    },
    {
      type: "widget",
      title: "La probabilità come una torta",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "Il denominatore sono i casi possibili, il numeratore i casi favorevoli. 1/6 = probabilità che esca un numero preciso del dado. Prova 3/6: è la probabilità di un numero pari."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il gioco che fece nascere la probabilità",
      html: `<p>La probabilità come scienza nacque nel <b>1654</b> da una domanda sul gioco dei dadi. Un giocatore francese, il Cavaliere de Méré, chiese al matematico <b>Blaise Pascal</b> come dividere giustamente la posta di una partita interrotta. Pascal ne parlò per lettera con <b>Pierre de Fermat</b> e insieme inventarono il calcolo delle probabilità.</p>
<p>Anche un italiano ci era arrivato vicino un secolo prima: il medico e matematico <b>Gerolamo Cardano</b>, grande appassionato di dadi!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La moneta non ha memoria",
      html: `<p>Hai lanciato una moneta 5 volte ed è uscita sempre testa. Al sesto lancio è più probabile croce? <b>No!</b> La moneta non si ricorda i lanci precedenti: la probabilità di croce è ancora <b>1/2</b>.</p>
<p>Credere il contrario si chiama "fallacia del giocatore". Nel 1913, in un casinò di Monte Carlo, alla roulette uscì il nero <b>26 volte di fila</b>, e molti giocatori persero tantissimi soldi puntando sul rosso, convinti che "ormai doveva uscire".</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Moda</b> = il dato più frequente.</li>
<li><b>Media</b> = somma dei dati : numero dei dati.</li>
<li><b>Mediana</b> = il dato centrale, dopo averli messi in ordine.</li>
<li>Evento <b>certo</b> (probabilità 1), <b>possibile</b> (tra 0 e 1), <b>impossibile</b> (0).</li>
<li><b>Probabilità</b> = casi favorevoli / casi possibili.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire statistica e probabilità",
      intro: "Media e probabilità sono idee che si capiscono meglio facendo: livellando torri, pescando palline, contando lanci. Scegli il tuo modo!",
      tabs: [
        {
          label: "🧱 La media che “livella”",
          html: `<p>Immagina i dati come <b>torri di cubetti</b>: 2, 5, 3, 6.</p>
<p>La <b>media</b> è l'altezza che avrebbero tutte le torri se spostassi i cubetti dalle torri alte a quelle basse fino a renderle <b>tutte uguali</b>.</p>
<p>In tutto ci sono 2 + 5 + 3 + 6 = 16 cubetti. Divisi in 4 torri: 16 : 4 = <b>4 cubetti</b> ciascuna. La media è 4!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<g fill="#60a5fa" stroke="#1e3a8a" stroke-width="2">
<rect x="30" y="190" width="30" height="30"/><rect x="30" y="160" width="30" height="30"/>
<rect x="70" y="190" width="30" height="30"/><rect x="70" y="160" width="30" height="30"/><rect x="70" y="130" width="30" height="30"/><rect x="70" y="100" width="30" height="30"/><rect x="70" y="70" width="30" height="30"/>
<rect x="110" y="190" width="30" height="30"/><rect x="110" y="160" width="30" height="30"/><rect x="110" y="130" width="30" height="30"/>
<rect x="150" y="190" width="30" height="30"/><rect x="150" y="160" width="30" height="30"/><rect x="150" y="130" width="30" height="30"/><rect x="150" y="100" width="30" height="30"/><rect x="150" y="70" width="30" height="30"/><rect x="150" y="40" width="30" height="30"/>
</g>
<text x="105" y="245" font-size="18" text-anchor="middle">2, 5, 3, 6</text>
<text x="290" y="140" font-size="44" fill="#1e3a8a" text-anchor="middle">→</text>
<g fill="#34d399" stroke="#065f46" stroke-width="2">
<rect x="380" y="190" width="30" height="30"/><rect x="380" y="160" width="30" height="30"/><rect x="380" y="130" width="30" height="30"/><rect x="380" y="100" width="30" height="30"/>
<rect x="420" y="190" width="30" height="30"/><rect x="420" y="160" width="30" height="30"/><rect x="420" y="130" width="30" height="30"/><rect x="420" y="100" width="30" height="30"/>
<rect x="460" y="190" width="30" height="30"/><rect x="460" y="160" width="30" height="30"/><rect x="460" y="130" width="30" height="30"/><rect x="460" y="100" width="30" height="30"/>
<rect x="500" y="190" width="30" height="30"/><rect x="500" y="160" width="30" height="30"/><rect x="500" y="130" width="30" height="30"/><rect x="500" y="100" width="30" height="30"/>
</g>
<line x1="370" y1="100" x2="545" y2="100" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="455" y="245" font-size="18" text-anchor="middle">media = 4</text>
</svg>`
        },
        {
          label: "🎨 Il sacchetto di palline",
          html: `<p>In un sacchetto ci sono <b>3 palline rosse</b>, <b>2 blu</b> e <b>5 gialle</b> (10 in tutto). Peschi senza guardare:</p>
<ul>
<li>probabilità di <b>gialla</b>: 5/10 = <b>1/2</b> (la più probabile);</li>
<li>probabilità di <b>rossa</b>: <b>3/10</b>;</li>
<li>probabilità di <b>blu</b>: 2/10 = <b>1/5</b>;</li>
<li>probabilità di <b>verde</b>: 0/10 = <b>0</b> (impossibile).</li>
</ul>
<p>Somma tutte le probabilità: 5/10 + 3/10 + 2/10 = 10/10 = <b>1</b>. Qualcosa deve per forza uscire!</p>`,
          widget: "counter",
          options: { emoji: "🔴", max: 20 }
        },
        {
          label: "🎲 Prova a lanciare!",
          html: `<p>La probabilità dice che cosa succede <b>“in media” dopo tanti tentativi</b>. Fai l'esperimento:</p>
<ol>
<li>lancia una moneta <b>10 volte</b> e conta le teste: magari escono 7 teste e 3 croci;</li>
<li>ora lanciala <b>100 volte</b> (fatti aiutare da tutta la classe!): le teste saranno molto più vicine a <b>50</b>.</li>
</ol>
<p>Questa si chiama <b>legge dei grandi numeri</b>: più prove fai, più la frequenza si avvicina alla probabilità. Il matematico Karl Pearson lanciò una moneta <b>24 000 volte</b> e ottenne 12 012 teste: quasi esattamente la metà!</p>`
        },
        {
          label: "🍕 I grafici a torta",
          html: `<p>Un'altra rappresentazione è l'<b>aerogramma</b> (grafico a torta): il cerchio è il totale e ogni fetta è grande quanto la sua parte.</p>
<p>Su 18 alunni, 9 preferiscono il calcio: è <b>metà torta</b>. 6 il nuoto: un terzo. 3 la danza: un sesto.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<path d="M160 130 L160 30 A100 100 0 0 1 160 230 Z" fill="#22c55e" stroke="#ffffff" stroke-width="3"/>
<path d="M160 130 L160 230 A100 100 0 0 1 73.4 80 Z" fill="#3b82f6" stroke="#ffffff" stroke-width="3"/>
<path d="M160 130 L73.4 80 A100 100 0 0 1 160 30 Z" fill="#a855f7" stroke="#ffffff" stroke-width="3"/>
<rect x="320" y="60" width="26" height="26" fill="#22c55e"/><text x="356" y="80" font-size="20">⚽ Calcio: 9 (1/2)</text>
<rect x="320" y="115" width="26" height="26" fill="#3b82f6"/><text x="356" y="135" font-size="20">🏊 Nuoto: 6 (1/3)</text>
<rect x="320" y="170" width="26" height="26" fill="#a855f7"/><text x="356" y="190" font-size="20">🤸 Danza: 3 (1/6)</text>
</svg>`
        },
        {
          label: "🌍 La statistica nel mondo",
          html: `<ul>
<li>🇮🇹 L'<b>ISTAT</b> (Istituto Nazionale di Statistica) ogni anno conta gli abitanti d'Italia: circa <b>59 milioni</b>.</li>
<li>🏛️ Gli antichi <b>Romani</b> facevano il <b>census</b> (censimento) ogni 5 anni per contare i cittadini e le loro ricchezze: da lì viene la parola!</li>
<li>🇬🇧 L'infermiera inglese <b>Florence Nightingale</b>, nel 1858, usò grafici a torta colorati per convincere il governo che i soldati morivano più per le malattie che per le ferite. Grazie ai suoi dati, gli ospedali diventarono più puliti e si salvarono migliaia di vite.</li>
<li>🌦️ Quando il meteo dice "<b>70% di probabilità di pioggia</b>", significa che in 7 giorni su 10 con un tempo così, piove.</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di statistica e probabilità: tocca un nodo",
      nodes: [
        { id: "dati", label: "Dati", x: 30, y: 6, color: "#2563eb", html: "Le informazioni raccolte: numeri, risposte, misure.", why: "Senza dati non c'è statistica. La parola <i>statistica</i> viene da \"Stato\": nacque nel Seicento-Settecento per contare abitanti, nascite, morti e tasse degli Stati." },
        { id: "frequenza", label: "Frequenza e tabelle", x: 15, y: 30, color: "#0ea5e9", html: "Quante volte compare ogni risposta.", why: "Mettere i dati in tabella li rende leggibili: un elenco di 100 risposte confonde, una tabella con 5 righe no. Nel 1662 l'inglese <b>John Graunt</b> studiò così gli elenchi dei morti di Londra, inventando la statistica moderna." },
        { id: "grafici", label: "Grafici", x: 45, y: 30, color: "#f97316", html: "Istogrammi, ideogrammi, aerogrammi (torte).", why: "Gli occhi capiscono le altezze e le aree più in fretta dei numeri. Lo scozzese <b>William Playfair</b> inventò il grafico a barre (1786) e quello a torta (1801)." },
        { id: "indici", label: "Moda, media, mediana", x: 30, y: 55, color: "#16a34a", html: "Numeri che riassumono un gruppo di dati.", why: "La media è l'altezza che avrebbero i dati \"livellati\" (dividendo il totale in parti uguali); la mediana divide i dati a metà; la moda è il più votato. Ognuno racconta qualcosa di diverso, per questo se ne usano più di uno." },
        { id: "evento", label: "Evento", x: 72, y: 6, color: "#a855f7", html: "Un fatto che può succedere oppure no.", why: "Nella vita ci sono cose sicure e cose incerte. Per prendere decisioni (portare l'ombrello? giocare?) conviene misurare l'incertezza." },
        { id: "tipi", label: "Certo, possibile, impossibile", x: 85, y: 30, color: "#ec4899", html: "I tre tipi di evento.", why: "Se tutti i casi possibili sono favorevoli, l'evento è certo; se nessuno lo è, è impossibile; altrimenti è possibile." },
        { id: "prob", label: "Probabilità", x: 72, y: 55, color: "#ef4444", html: "Casi favorevoli / casi possibili: un numero da 0 a 1.", why: "La definizione \"classica\" fu scritta dal francese <b>Pierre-Simon Laplace</b> (1812), dopo i lavori di <b>Pascal e Fermat</b> (1654). Funziona quando tutti i casi sono ugualmente probabili, come le facce di un dado non truccato." },
        { id: "frazioni", label: "Frazioni e percentuali", x: 72, y: 82, color: "#14b8a6", html: "La probabilità si scrive come frazione (1/2) o percentuale (50%).", why: "Una probabilità è una \"parte\" dei casi possibili, proprio come una frazione è una parte dell'intero." },
        { id: "grandi", label: "Legge dei grandi numeri", x: 30, y: 85, color: "#64748b", html: "Ripetendo tante volte un esperimento, la frequenza si avvicina alla probabilità.", why: "La dimostrò lo svizzero <b>Jakob Bernoulli</b> nel 1713. È il ponte tra statistica (i dati osservati) e probabilità (la previsione)." }
      ],
      edges: [
        ["dati", "frequenza", "si ordinano in"],
        ["frequenza", "grafici", "si disegnano in"],
        ["frequenza", "indici", "si riassumono con"],
        ["evento", "tipi", "può essere"],
        ["evento", "prob", "si misura con la"],
        ["prob", "frazioni", "si scrive con"],
        ["indici", "grandi", "frequenze osservate"],
        ["prob", "grandi", "previsione"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la probabilità",
      questions: [
        { type: "mc", q: "Lanciando un dado, qual è la probabilità che esca il 2?", options: ["1/2", "1/6", "2/6"], answer: 1, explain: "1 caso favorevole su 6 possibili." },
        { type: "mc", q: "\"Pesco una carta di cuori da un mazzo fatto solo di cuori\" è un evento…", options: ["certo", "possibile", "impossibile"], answer: 0, explain: "Tutte le carte sono di cuori: succede sempre." },
        { type: "tf", q: "Una probabilità può essere 3/2.", answer: false, explain: "I casi favorevoli non possono essere più di quelli possibili: la probabilità sta tra 0 e 1." }
      ]
    }
  ],
  glossary: [
    { t: "Statistica", d: "Scienza che raccoglie, ordina e interpreta i dati." },
    { t: "Frequenza", d: "Numero di volte in cui compare un dato." },
    { t: "Moda", d: "Il dato con la frequenza più alta." },
    { t: "Media aritmetica", d: "Somma dei dati divisa per il loro numero." },
    { t: "Mediana", d: "Il dato centrale di un elenco ordinato." },
    { t: "Istogramma", d: "Grafico a colonne: l'altezza indica la frequenza." },
    { t: "Aerogramma", d: "Grafico a torta: ogni fetta è proporzionale alla sua parte." },
    { t: "Evento", d: "Fatto che può accadere o no." },
    { t: "Probabilità", d: "Misura di quanto un evento è probabile: casi favorevoli / casi possibili." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Calcola la media di 10, 20, 30, 40.", answer: 25, explain: "10 + 20 + 30 + 40 = 100; 100 : 4 = 25." },
      { type: "num", q: "Qual è la moda di 2, 4, 4, 6, 4, 2, 8?", answer: 4, explain: "Il 4 compare 3 volte." },
      { type: "num", q: "Qual è la mediana di 15, 3, 8, 12, 6?", answer: 8, explain: "In ordine: 3, 6, 8, 12, 15 → il centrale è 8." },
      { type: "mc", q: "Per trovare la mediana bisogna prima…", options: ["sommare i dati", "mettere i dati in ordine", "contare il dato più frequente"], answer: 1, explain: "La mediana è il valore centrale dei dati ordinati." },
      { type: "mc", q: "\"Domani il Sole sorgerà a ovest\" è un evento…", options: ["certo", "possibile", "impossibile"], answer: 2, explain: "Il Sole sorge sempre a est." },
      { type: "mc", q: "In un sacchetto ci sono 4 palline rosse e 6 verdi. Qual è la probabilità di pescare una rossa?", options: ["4/6", "4/10", "6/10"], answer: 1, explain: "4 casi favorevoli su 10 possibili." },
      { type: "tf", q: "La probabilità di un evento certo è 1.", answer: true, explain: "Tutti i casi sono favorevoli: n/n = 1." },
      { type: "text", q: "Come si chiama il grafico a colonne?", answer: ["istogramma", "l'istogramma", "l istogramma"], explain: "È l'istogramma." },
      { type: "mc", q: "Lanciando un dado, quale evento è più probabile?", options: ["Esce il 6", "Esce un numero dispari", "Esce un numero maggiore di 6"], answer: 1, explain: "Dispari: 3/6. Il 6: 1/6. Maggiore di 6: impossibile (0)." },
      { type: "order", q: "Ordina dal meno probabile al più probabile (lancio di un dado).", items: ["Esce l'8", "Esce il 3", "Esce un numero pari", "Esce un numero da 1 a 6"], explain: "0, poi 1/6, poi 3/6, poi 6/6 = 1." },
      { type: "num", q: "Lanciando una moneta, qual è la probabilità di testa scritta come percentuale? (solo il numero)", answer: 50, unit: "%", explain: "1/2 = 50%." },
      { type: "tf", q: "Se con una moneta è uscita croce 4 volte di fila, al quinto lancio è più probabile testa.", answer: false, explain: "La moneta non ha memoria: la probabilità resta 1/2." }
    ]
  }
});
