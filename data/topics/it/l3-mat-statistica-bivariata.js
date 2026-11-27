TOPIC('it', {
  id: "l3-mat-statistica-bivariata",
  title: "Statistica bivariata",
  intro: "Più ore si studia, più alto è il voto? Più alta è la temperatura, più gelati si vendono? Più si è alti, più si pesa? Finora hai studiato <b>una variabile alla volta</b> (media, mediana, deviazione standard). Ora ne osserviamo <b>due insieme</b>, sugli stessi individui, e ci chiediamo se e quanto sono collegate. Impariamo a rappresentarle con il <b>diagramma di dispersione</b>, a misurare il legame con la <b>covarianza</b> e il <b>coefficiente di correlazione</b>, a costruire la <b>retta di regressione</b> per fare previsioni, e soprattutto a non farci ingannare: <b>correlazione non significa causalità</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Due variabili sugli stessi individui",
      html: `<p>Una <b>distribuzione bivariata</b> è un insieme di coppie (xᵢ, yᵢ), dove x e y sono due caratteri rilevati sullo stesso individuo: ore di studio e voto, altezza e peso, età e tempo sui 100 metri. Se i dati sono pochi si scrivono come elenco di coppie; se sono molti e a pochi valori si organizzano in una <b>tabella a doppia entrata</b> (o di contingenza), con le <b>frequenze congiunte</b> nelle celle e le <b>frequenze marginali</b> (totali di riga e di colonna) che descrivono ciascuna variabile da sola.</p>
<p>Il primo passo è sempre <b>guardare i dati</b> con un <b>diagramma di dispersione</b> (scatterplot): ogni individuo è un punto del piano cartesiano. La nuvola di punti rivela subito:</p>
<ul>
<li>la <b>direzione</b> del legame: punti che salgono (<b>correlazione positiva</b>), che scendono (<b>negativa</b>), nuvola senza forma (<b>nessuna correlazione</b>);</li>
<li>la <b>forza</b>: punti vicini a una linea (legame forte) o sparpagliati (debole);</li>
<li>la <b>forma</b>: lineare, curva, a gruppi; e gli eventuali <b>valori anomali</b> (outlier).</li>
</ul>
<p>Un'avvertenza di linguaggio: in molti casi una variabile si considera <b>indipendente o esplicativa</b> (x, in ascissa) e l'altra <b>dipendente o risposta</b> (y, in ordinata), ma questo è un modo di impostare la domanda, non una prova che x provochi y.</p>`
    },
    {
      type: "svg",
      title: "Tre nuvole di punti",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="30" width="180" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
<rect x="210" y="30" width="180" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
<rect x="410" y="30" width="180" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
<g fill="#16a34a">
<circle cx="30" cy="205" r="5"/><circle cx="55" cy="180" r="5"/><circle cx="70" cy="195" r="5"/><circle cx="90" cy="150" r="5"/><circle cx="110" cy="160" r="5"/><circle cx="125" cy="115" r="5"/><circle cx="145" cy="100" r="5"/><circle cx="165" cy="65" r="5"/>
</g>
<g fill="#dc2626">
<circle cx="230" cy="60" r="5"/><circle cx="255" cy="95" r="5"/><circle cx="270" cy="80" r="5"/><circle cx="290" cy="130" r="5"/><circle cx="310" cy="120" r="5"/><circle cx="325" cy="165" r="5"/><circle cx="345" cy="180" r="5"/><circle cx="365" cy="205" r="5"/>
</g>
<g fill="#7c3aed">
<circle cx="430" cy="90" r="5"/><circle cx="455" cy="190" r="5"/><circle cx="470" cy="120" r="5"/><circle cx="490" cy="60" r="5"/><circle cx="510" cy="170" r="5"/><circle cx="525" cy="100" r="5"/><circle cx="545" cy="205" r="5"/><circle cx="565" cy="140" r="5"/>
</g>
<text x="100" y="22" font-size="16" fill="#166534" text-anchor="middle" font-weight="bold">r vicino a +1</text>
<text x="300" y="22" font-size="16" fill="#991b1b" text-anchor="middle" font-weight="bold">r vicino a −1</text>
<text x="500" y="22" font-size="16" fill="#6d28d9" text-anchor="middle" font-weight="bold">r vicino a 0</text>
<text x="100" y="255" font-size="14" fill="#334155" text-anchor="middle">correlazione positiva</text>
<text x="300" y="255" font-size="14" fill="#334155" text-anchor="middle">correlazione negativa</text>
<text x="500" y="255" font-size="14" fill="#334155" text-anchor="middle">nessuna correlazione</text>
<text x="300" y="285" font-size="14" fill="#334155" text-anchor="middle">Il segno di r dà la direzione, il valore assoluto la forza del legame lineare</text>
</svg>`,
      caption: "Il diagramma di dispersione mostra la direzione e la forza del legame prima di qualsiasi calcolo."
    },
    {
      type: "text",
      title: "Covarianza e coefficiente di correlazione",
      html: `<p>Per <b>misurare</b> il legame lineare si parte dalle medie x̄ e ȳ. Ogni punto ha due scarti: (xᵢ − x̄) e (yᵢ − ȳ). Se i due scarti hanno quasi sempre lo stesso segno (entrambi positivi o entrambi negativi) il loro prodotto è positivo e le variabili "vanno insieme"; se hanno segni opposti il prodotto è negativo. La <b>covarianza</b> è la media di questi prodotti:</p>
<p style="text-align:center"><b>σₓᵧ = (1/n) · Σ (xᵢ − x̄)(yᵢ − ȳ)</b></p>
<p>Il suo segno indica la direzione del legame, ma il valore dipende dalle unità di misura (ore, euro, centimetri…). Per avere un indice <b>adimensionale</b> si divide per le deviazioni standard:</p>
<p style="text-align:center"><b>r = σₓᵧ / (σₓ · σᵧ)</b> &nbsp; (coefficiente di correlazione lineare di Pearson)</p>
<ul>
<li><b>−1 ≤ r ≤ 1</b> sempre.</li>
<li>r = 1: i punti stanno esattamente su una retta crescente; r = −1: su una retta decrescente.</li>
<li>r ≈ 0: non c'è legame <i>lineare</i> (potrebbe esserci un legame di altro tipo!).</li>
<li>Indicativamente, |r| &gt; 0,7 legame forte; tra 0,3 e 0,7 moderato; sotto 0,3 debole. Sono soglie di buon senso, non regole assolute.</li>
<li>Il quadrato <b>r²</b> (coefficiente di determinazione) è la quota di variabilità di y "spiegata" dal legame lineare con x.</li>
</ul>
<p>Il nome si deve a <b>Karl Pearson</b>, che lo formalizzò verso la fine dell'Ottocento a partire dalle idee del cugino di Darwin, <b>Francis Galton</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio svolto: ore di ripasso e voto",
      html: `<p>Cinque studenti dichiarano le ore di ripasso per la verifica (x) e il voto (y):</p>
<table>
<tr><th>x (ore)</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><th>y (voto)</th><td>2</td><td>4</td><td>5</td><td>4</td><td>5</td></tr>
</table>
<p><b>Medie</b>: x̄ = 15/5 = 3; ȳ = 20/5 = 4.</p>
<p><b>Scarti e prodotti</b>:</p>
<table>
<tr><th>xᵢ − x̄</th><td>−2</td><td>−1</td><td>0</td><td>1</td><td>2</td></tr>
<tr><th>yᵢ − ȳ</th><td>−2</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
<tr><th>prodotto</th><td>4</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
</table>
<p>Σ(xᵢ − x̄)(yᵢ − ȳ) = 6; Σ(xᵢ − x̄)² = 4 + 1 + 0 + 1 + 4 = 10; Σ(yᵢ − ȳ)² = 4 + 0 + 1 + 0 + 1 = 6.</p>
<p>Covarianza σₓᵧ = 6/5 = 1,2; varianze σₓ² = 10/5 = 2 e σᵧ² = 6/5 = 1,2. Allora</p>
<p style="text-align:center"><b>r = 1,2 / √(2 · 1,2) = 1,2/√2,4 ≈ 0,775</b></p>
<p>Correlazione positiva e piuttosto forte: r² = 0,6, quindi circa il 60% della variabilità dei voti, in questo piccolo campione, è associata alle ore di ripasso.</p>`
    },
    {
      type: "text",
      title: "La retta di regressione",
      html: `<p>Se la nuvola è allungata lungo una retta, possiamo cercare la retta che la <b>approssima meglio</b>, per fare previsioni. Il criterio dei <b>minimi quadrati</b> sceglie la retta y = a + bx che rende minima la somma dei quadrati dei <b>residui</b>, cioè delle distanze verticali eᵢ = yᵢ − (a + bxᵢ) tra i punti e la retta. Il metodo fu pubblicato da <b>Adrien-Marie Legendre</b> nel 1805 e rivendicato da <b>Carl Friedrich Gauss</b>, che disse di usarlo dal 1795.</p>
<p>La soluzione si trova con formule semplici:</p>
<p style="text-align:center"><b>b = σₓᵧ / σₓ²</b> (pendenza) &nbsp;&nbsp; <b>a = ȳ − b·x̄</b> (intercetta)</p>
<p>La retta passa sempre per il <b>baricentro</b> (x̄, ȳ). Il coefficiente b ha lo stesso segno di r: se la correlazione è positiva la retta sale. Si può anche scrivere b = r · σᵧ/σₓ.</p>
<p><b>Nell'esempio</b>: b = 1,2/2 = 0,6; a = 4 − 0,6·3 = 2,2. La retta è <b>y = 2,2 + 0,6x</b>. Interpretazione: ogni ora di ripasso in più è associata, in media, a 0,6 punti di voto in più; con zero ore il modello "prevede" 2,2 (un valore fuori dai dati, da non prendere troppo sul serio).</p>
<p><b>Previsione</b>: con x = 6 ore il modello dà y = 2,2 + 3,6 = 5,8. Attenzione: il voto non può superare 10 e 6 ore è oltre l'intervallo osservato (1–5): è una <b>estrapolazione</b>, poco affidabile. Prevedere dentro l'intervallo dei dati (<b>interpolazione</b>) è molto più sicuro: con x = 3,5 si ottiene 4,3.</p>`
    },
    {
      type: "svg",
      title: "Nuvola, retta e residui",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="100" y1="260" x2="580" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="100" y1="20" x2="100" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="140" y1="160" x2="540" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="180" y1="180" x2="180" y2="148" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="260" y1="100" x2="260" y2="124" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="340" y1="60" x2="340" y2="100" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="420" y1="100" x2="420" y2="76" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<line x1="500" y1="60" x2="500" y2="52" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4 3"/>
<g fill="#16a34a">
<circle cx="180" cy="180" r="7"/><circle cx="260" cy="100" r="7"/><circle cx="340" cy="60" r="7"/><circle cx="420" cy="100" r="7"/><circle cx="500" cy="60" r="7"/>
</g>
<circle cx="340" cy="100" r="8" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="344" y="122" font-size="14" fill="#991b1b" font-weight="bold">baricentro (x̄, ȳ)</text>
<text x="105" y="282" font-size="14" fill="#334155">x: ore di ripasso (1 … 5)</text>
<text x="230" y="35" font-size="16" fill="#1d4ed8" font-weight="bold">retta: y = 2,2 + 0,6x</text>
<text x="230" y="55" font-size="14" fill="#9a3412">segmenti tratteggiati = residui</text>
<text x="110" y="205" font-size="14" fill="#166534">r ≈ 0,775</text>
</svg>`,
      caption: "I residui sono le distanze verticali dei punti dalla retta: la retta di regressione rende minima la somma dei loro quadrati."
    },
    {
      type: "remember",
      title: "Formule in sintesi",
      html: `<ul>
<li>Covarianza: <b>σₓᵧ = (1/n)Σ(xᵢ − x̄)(yᵢ − ȳ)</b> (= media dei prodotti − prodotto delle medie).</li>
<li>Correlazione: <b>r = σₓᵧ/(σₓσᵧ)</b>, sempre tra −1 e 1.</li>
<li>Regressione di y su x: <b>y = a + bx</b>, con <b>b = σₓᵧ/σₓ²</b> e <b>a = ȳ − b x̄</b>.</li>
<li>La retta passa per (x̄, ȳ). Il coefficiente di determinazione è <b>r²</b>.</li>
<li><b>Correlazione ≠ causalità.</b></li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: correlazione e retta",
      questions: [
        { type: "mc", q: "Un coefficiente di correlazione r = −0,9 indica…", options: ["legame lineare forte e decrescente", "nessun legame", "legame lineare debole e crescente"], answer: 0, explain: "Il segno negativo indica che y scende al crescere di x; |r| = 0,9 è vicino a 1: legame forte." },
        { type: "num", q: "Una retta di regressione ha b = 2 e passa per il baricentro (3, 10). Quanto vale l'intercetta a?", answer: 4, explain: "a = ȳ − b·x̄ = 10 − 2·3 = 4." },
        { type: "tf", q: "Se r = 0 allora le due variabili sono certamente indipendenti.", answer: false, explain: "r = 0 esclude solo un legame lineare. Per esempio, per y = x² con x simmetrico rispetto a 0, r = 0 pur essendo y funzione di x." }
      ]
    },
    {
      type: "text",
      title: "Attenzione: correlazione non è causalità",
      html: `<p>Trovare una forte correlazione tra due variabili non dice che una <b>causi</b> l'altra. Ci sono almeno quattro spiegazioni possibili:</p>
<ul>
<li><b>x causa y</b> (per esempio, studiare di più fa migliorare i voti — plausibile, ma da dimostrare);</li>
<li><b>y causa x</b> (causalità inversa): i giocatori più bravi di basket sono più sicuri di sé, o è la sicurezza a renderli bravi?;</li>
<li><b>una terza variabile</b> influenza entrambe (<b>fattore di confondimento</b>): d'estate si vendono più gelati e ci sono più annegamenti; la causa comune è il caldo, che porta più gente a mare. Mangiare gelato non fa annegare;</li>
<li><b>puro caso</b>: con tante variabili qualcuna si correla per coincidenza (esistono raccolte di "correlazioni spurie" divertentissime).</li>
</ul>
<p>Per stabilire un nesso causale servono esperimenti controllati (con gruppo di controllo e assegnazione casuale) o studi molto accurati, non solo il calcolo di r.</p>
<p><b>Altre trappole.</b> Gli <b>outlier</b> possono alterare molto r e la retta: un solo punto lontano può far sembrare forte un legame debole o viceversa. Il <b>quartetto di Anscombe</b> (statistico britannico Francis Anscombe, 1973) è formato da quattro insiemi di dati con praticamente la stessa media, la stessa varianza, lo stesso r (≈ 0,82) e la stessa retta di regressione, ma con grafici completamente diversi: uno quasi lineare, uno curvo, uno con un outlier, uno con un punto che da solo crea la retta. La lezione: <b>disegna sempre i dati prima di fidarti dei numeri</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: altezza e passo",
      html: `<p>Un gruppo di amici misura altezza (cm) e lunghezza del passo (cm) e ottiene, con una retta di regressione calcolata sui dati, <b>passo = −5 + 0,45·altezza</b> (esempio ideale a numeri semplici). Per una persona alta 170 cm il modello prevede 0,45·170 − 5 = 71,5 cm. Per un bambino alto 100 cm prevederebbe 40 cm: plausibile, ma il campione non conteneva bambini, quindi è estrapolazione. Per un gigante di 250 cm darebbe 107,5 cm: la formula "funziona" matematicamente ma non c'è motivo di fidarsi fuori dai dati.</p>
<p>Come si usa la correlazione nella vita: gli assicuratori studiano la relazione tra età e probabilità di incidente; i medici quella tra dose e risposta a un farmaco; gli economisti quella tra istruzione e reddito; gli allenatori quella tra minuti giocati e rendimento. Ogni volta resta la domanda: la relazione è causale o c'è un terzo fattore?</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggere un grafico a dispersione",
      html: `<p>Ti mostrano un grafico con la <b>temperatura media di giugno</b> (x, in °C) e i <b>litri di bibite vendute</b> da un bar (y), per 10 anni. I punti salgono con una forma quasi rettilinea. Domande da farsi, in ordine:</p>
<ol>
<li>La relazione è lineare o curva? (la retta ha senso solo se è lineare)</li>
<li>Ci sono outlier? (un anno con un evento eccezionale, come una sagra, falsa i conti)</li>
<li>Quanto vale r e quanto r²? (con r = 0,9, r² = 0,81: l'81% della variabilità delle vendite è associata alla temperatura)</li>
<li>La previsione è dentro l'intervallo dei dati? (previsione per 40 °C, mai osservati, sarebbe un salto nel vuoto)</li>
<li>Una terza variabile spiega entrambe? (per esempio i turisti: in giugno ne arrivano di più e fanno salire le vendite indipendentemente dal caldo)</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Galton e la regressione verso la media",
      html: `<p>Il termine <b>regressione</b> nasce con <b>Francis Galton</b> (cugino di Charles Darwin), che nel 1886 studiò l'altezza dei padri e dei figli. Scoprì che padri molto alti tendono ad avere figli alti, ma <b>in media meno alti di loro</b>; e padri molto bassi hanno figli più alti di loro: le altezze "regrediscono" verso la media della popolazione. La retta con pendenza minore di 1 che lega le due generazioni diede il nome a tutta la tecnica. Lo stesso effetto spiega perché dopo una prestazione eccezionale spesso ne viene una più normale: non è il caso a tradire, è la statistica.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Dati e modelli",
      html: `<p>Oggi la retta di regressione è il capostipite dell'<b>apprendimento automatico</b> (machine learning): un algoritmo che "impara" da molti dati cercando i parametri che minimizzano l'errore, di solito proprio un errore quadratico, come nei minimi quadrati di Gauss e Legendre. I modelli moderni hanno milioni di parametri invece di due, ma l'idea di partenza è la stessa: scegliere un modello, misurare gli errori sui dati, aggiustare i parametri. E valgono le stesse cautele: attenzione all'estrapolazione, agli outlier e alla differenza tra correlazione e causalità.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire correlazione e regressione",
      intro: "Covarianza e r possono sembrare formule opache: ecco tre immagini per \"vederle\".",
      tabs: [
        {
          label: "🟦 I quadranti e i segni",
          html: `<p>Traccia sul diagramma due rette: una verticale in x̄ e una orizzontale in ȳ. Il piano si divide in <b>quattro quadranti</b> attorno al baricentro. I punti nel quadrante in alto a destra e in basso a sinistra hanno scarti dello stesso segno: prodotto <b>positivo</b>. Quelli in alto a sinistra e in basso a destra hanno prodotto <b>negativo</b>. La covarianza è la media di questi prodotti: se la nuvola occupa soprattutto i due quadranti "positivi" è positiva, se occupa gli altri due è negativa, se i punti si distribuiscono in modo equilibrato si annulla e r ≈ 0.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="300" y1="10" x2="300" y2="290" stroke="#475569" stroke-width="2"/><line x1="40" y1="150" x2="560" y2="150" stroke="#475569" stroke-width="2"/><text x="420" y="70" font-size="22" fill="#16a34a" font-weight="bold">+</text><text x="170" y="240" font-size="22" fill="#16a34a" font-weight="bold">+</text><text x="170" y="70" font-size="22" fill="#dc2626" font-weight="bold">−</text><text x="420" y="240" font-size="22" fill="#dc2626" font-weight="bold">−</text><text x="310" y="30" font-size="14" fill="#334155">x = x̄</text><text x="500" y="144" font-size="14" fill="#334155">y = ȳ</text><text x="330" y="170" font-size="14" fill="#9a3412">(x̄, ȳ)</text><text x="320" y="285" font-size="14" fill="#334155" text-anchor="start">segno del prodotto (x − x̄)(y − ȳ)</text></svg>`
        },
        {
          label: "🎯 La retta come bersaglio",
          html: `<p>Immagina di dover posizionare un'asta rigida sul diagramma, in modo che stia il più vicino possibile a tutti i punti. Ogni punto "tira" l'asta verso di sé con una forza proporzionale alla <b>distanza verticale al quadrato</b>: l'asta si ferma nella posizione di equilibrio, e questa è la retta dei minimi quadrati. Il quadrato fa sì che i punti lontani pesino molto: ecco perché un outlier sposta la retta più di un punto normale. Per questo si dice che la regressione lineare non è <b>robusta</b> agli outlier.</p>`
        },
        {
          label: "📐 Dal dato alla previsione",
          html: `<p>Pensa alla retta di regressione come a una <b>tabella di conversione</b> generata dai dati. Con y = 2,2 + 0,6x: x = 1 → 2,8; x = 2 → 3,4; x = 3 → 4; x = 4 → 4,6; x = 5 → 5,2. Confrontando con i voti reali (2, 4, 5, 4, 5) i residui sono −0,8; +0,6; +1; −0,6; −0,2: la loro somma fa 0 (è sempre così), e i quadrati sommano 0,64 + 0,36 + 1 + 0,36 + 0,04 = 2,4. Nessun'altra retta riesce a fare meno di 2,4 come somma dei quadrati dei residui su questi cinque punti.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 6, step: 1, marks: [2.2, 4] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della statistica bivariata: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "dati", label: "Dati bivariati", x: 50, y: 6, color: "#6366f1", html: "Coppie (xᵢ, yᵢ) rilevate sugli stessi individui.", why: "Molti fenomeni dipendono da più grandezze; osservarle insieme è il primo passo per cercare relazioni e fare previsioni." },
        { id: "scatter", label: "Diagramma di dispersione", x: 18, y: 30, color: "#16a34a", html: "Ogni individuo è un punto del piano.", why: "Il piano cartesiano (Descartes) permette di 'vedere' due variabili insieme: la forma della nuvola suggerisce il modello prima di calcolare." },
        { id: "cov", label: "Covarianza", x: 82, y: 30, color: "#f59e0b", html: "Media dei prodotti degli scarti.", why: "Deriva dalla varianza: se si moltiplica uno scarto per sé stesso si ottiene la varianza, se per lo scarto dell'altra variabile la covarianza." },
        { id: "r", label: "Coefficiente r", x: 50, y: 50, color: "#a855f7", html: "r = σₓᵧ/(σₓσᵧ), tra −1 e 1.", why: "Dividendo per le deviazioni standard si elimina l'unità di misura; la disuguaglianza di Cauchy–Schwarz garantisce che il valore sia compreso tra −1 e 1." },
        { id: "reg", label: "Retta di regressione", x: 18, y: 76, color: "#ef4444", html: "y = a + bx con b = σₓᵧ/σₓ², a = ȳ − bx̄.", why: "È la retta che minimizza la somma dei quadrati dei residui (minimi quadrati, Legendre 1805 e Gauss); annullando le derivate si ottengono proprio queste formule." },
        { id: "caus", label: "Correlazione ≠ causalità", x: 82, y: 76, color: "#0ea5e9", html: "Un legame statistico non prova un nesso di causa.", why: "Possono esserci causalità inversa, fattori di confondimento o il caso: solo esperimenti controllati permettono di stabilire la causa." },
        { id: "pred", label: "Previsione e limiti", x: 50, y: 94, color: "#14b8a6", html: "Interpolare è sicuro, estrapolare è rischioso.", why: "Il modello lineare descrive i dati osservati: fuori dall'intervallo non c'è ragione di pensare che il legame resti lineare (e gli outlier possono spostarlo)." }
      ],
      edges: [
        ["dati", "scatter", "si vedono con"],
        ["dati", "cov", "si misurano con"],
        ["cov", "r", "normalizzata dà"],
        ["scatter", "reg", "suggerisce"],
        ["r", "reg", "r e b hanno lo stesso segno"],
        ["r", "caus", "attenzione"],
        ["reg", "pred", "serve per"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: interpretare i risultati",
      questions: [
        { type: "mc", q: "In un campione si trova r = 0,95 tra il numero di vigili del fuoco intervenuti e i danni di un incendio. Che cosa si può concludere?", options: ["Più vigili causano più danni", "Probabilmente un terzo fattore (la gravità dell'incendio) influenza entrambi", "I vigili sono inutili"], answer: 1, explain: "È il classico fattore di confondimento: incendi più gravi richiedono più vigili e provocano più danni." },
        { type: "num", q: "Se r = 0,8, quanto vale r² (il coefficiente di determinazione)?", answer: 0.64, tol: 0.001, explain: "0,8² = 0,64: il 64% della variabilità di y è spiegata dal legame lineare con x." },
        { type: "tf", q: "La retta di regressione passa sempre per il punto (x̄, ȳ).", answer: true, explain: "Poiché a = ȳ − b·x̄, sostituendo x = x̄ si ottiene y = ȳ." }
      ]
    }
  ],
  glossary: [
    { t: "Distribuzione bivariata", d: "Insieme di coppie (xᵢ, yᵢ) di due caratteri rilevati sugli stessi individui." },
    { t: "Diagramma di dispersione", d: "Grafico in cui ogni coppia di valori è un punto del piano cartesiano." },
    { t: "Covarianza", d: "Media dei prodotti degli scarti (xᵢ − x̄)(yᵢ − ȳ): segno e intensità del legame lineare, con unità di misura." },
    { t: "Coefficiente di correlazione", d: "r = σₓᵧ/(σₓσᵧ), tra −1 e 1: misura adimensionale del legame lineare." },
    { t: "Retta di regressione", d: "La retta y = a + bx che minimizza la somma dei quadrati dei residui." },
    { t: "Residuo", d: "Differenza yᵢ − (a + bxᵢ) tra il valore osservato e quello previsto dalla retta." },
    { t: "Minimi quadrati", d: "Metodo che sceglie i parametri del modello minimizzando la somma dei quadrati degli errori." },
    { t: "Outlier", d: "Valore anomalo, molto lontano dagli altri, che può alterare media, r e retta." },
    { t: "Fattore di confondimento", d: "Terza variabile che influenza entrambe le variabili osservate creando una correlazione apparente." },
    { t: "Estrapolazione", d: "Previsione fatta fuori dall'intervallo dei dati osservati: poco affidabile." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il coefficiente di correlazione lineare r può assumere valori…", options: ["tra −1 e 1", "tra 0 e 1", "qualsiasi numero reale"], answer: 0, explain: "−1 ≤ r ≤ 1: i valori estremi indicano punti esattamente su una retta." },
      { type: "num", q: "Dati x: 2, 4, 6 e y: 1, 3, 5. Quanto vale la media di y?", answer: 3, explain: "(1 + 3 + 5)/3 = 3." },
      { type: "num", q: "Per i dati precedenti (x: 2, 4, 6; y: 1, 3, 5) quanto vale r?", answer: 1, explain: "I punti stanno esattamente sulla retta y = x − 1: correlazione perfetta positiva, r = 1." },
      { type: "mc", q: "Una retta di regressione y = 3 + 2x prevede per x = 4 il valore…", options: ["11", "8", "14"], answer: 0, explain: "y = 3 + 2·4 = 11." },
      { type: "tf", q: "Se la covarianza è negativa, la retta di regressione ha pendenza negativa.", answer: true, explain: "b = σₓᵧ/σₓ² ha lo stesso segno della covarianza, perché la varianza è positiva." },
      { type: "mc", q: "Il numero di gelati venduti e il numero di annegamenti sono correlati positivamente: la spiegazione più ragionevole è…", options: ["il gelato provoca annegamenti", "il caldo (fattore comune) aumenta entrambi", "gli annegamenti fanno vendere più gelati"], answer: 1, explain: "Fattore di confondimento: la temperatura estiva spiega entrambi i fenomeni." },
      { type: "tf", q: "Fare una previsione fuori dall'intervallo dei dati osservati è sempre affidabile se r è alto.", answer: false, explain: "Un r alto riguarda i dati osservati; fuori dall'intervallo il legame potrebbe non essere più lineare (estrapolazione)." },
      { type: "num", q: "Se σₓᵧ = 6, σₓ = 2 e σᵧ = 4, quanto vale r?", answer: 0.75, tol: 0.001, explain: "r = 6/(2·4) = 0,75." },
      { type: "text", q: "Come si chiama il metodo che sceglie la retta minimizzando la somma dei quadrati dei residui?", answer: ["minimi quadrati", "metodo dei minimi quadrati", "dei minimi quadrati"], explain: "È il metodo dei minimi quadrati, pubblicato da Legendre nel 1805 e usato da Gauss." },
      { type: "order", q: "Metti in ordine i passi per ricavare la retta di regressione.", items: ["Calcolare le medie x̄ e ȳ", "Calcolare covarianza σₓᵧ e varianza σₓ²", "Calcolare b = σₓᵧ/σₓ²", "Calcolare a = ȳ − b·x̄ e scrivere y = a + bx"], explain: "Prima le medie, poi covarianza e varianza, poi la pendenza e infine l'intercetta." }
    ]
  }
});
