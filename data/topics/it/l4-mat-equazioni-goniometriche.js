TOPIC('it', {
  id: "l4-mat-equazioni-goniometriche",
  title: "Equazioni e disequazioni goniometriche",
  intro: "A che ora del giorno la marea raggiunge un certo livello? In quali mesi l'Italia ha più di 13 ore e mezza di luce? Quando la cabina della ruota panoramica supera i 35 metri? Sono tutte domande del tipo <b>«per quali x una funzione periodica vale quel valore?»</b> e si risolvono con le <b>equazioni goniometriche</b>. Poiché seno e coseno si ripetono, queste equazioni hanno di solito <b>infinite soluzioni</b>, descritte con la scrittura «+ 2kπ». Impareremo le equazioni elementari, quelle riconducibili ad esse, le <b>lineari</b> e le <b>omogenee</b>, e poi le <b>disequazioni</b>, risolte con la circonferenza goniometrica.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "Le equazioni elementari",
      html: `<p>Un'equazione goniometrica contiene l'incognita <b>dentro</b> le funzioni goniometriche (sen x, cos x, tan x...). Le più semplici sono le <b>elementari</b>. Ricordiamo che seno, coseno e tangente sono funzioni periodiche e <b>non</b> iniettive, quindi un valore è assunto infinite volte.</p>
<ul>
<li><b>sen x = a</b>. Ha soluzioni solo se −1 ≤ a ≤ 1. Detto α = arcsen a (l'angolo tra −π/2 e π/2 con quel seno):<br><b>x = α + 2kπ</b> oppure <b>x = π − α + 2kπ</b>, con k ∈ ℤ.</li>
<li><b>cos x = a</b>. Solo se −1 ≤ a ≤ 1. Detto α = arccos a (tra 0 e π):<br><b>x = ± α + 2kπ</b>, con k ∈ ℤ.</li>
<li><b>tan x = a</b>. Per ogni a reale. Detto α = arctan a (tra −π/2 e π/2):<br><b>x = α + kπ</b>, con k ∈ ℤ (un solo gruppo di soluzioni, perché il periodo è π).</li>
</ul>
<p><b>Esempi.</b></p>
<ul>
<li>sen x = 1/2: α = π/6, quindi x = π/6 + 2kπ ∨ x = 5π/6 + 2kπ.</li>
<li>cos x = −√2/2: α = 3π/4, quindi x = ± 3π/4 + 2kπ.</li>
<li>tan x = √3: x = π/3 + kπ.</li>
<li>sen x = 2: <b>impossibile</b>, il seno non supera 1.</li>
</ul>
<p><b>Casi particolari</b> da ricordare (più rapidi con la circonferenza): sen x = 0 → x = kπ; sen x = 1 → x = π/2 + 2kπ; sen x = −1 → x = −π/2 + 2kπ; cos x = 0 → x = π/2 + kπ; cos x = 1 → x = 2kπ; cos x = −1 → x = π + 2kπ. Quando l'angolo non è notevole, per esempio sen x = 0,3, la soluzione si lascia nella forma x = arcsen 0,3 + 2kπ ∨ x = π − arcsen 0,3 + 2kπ.</p>`
    },
    {
      type: "svg",
      title: "Leggere le soluzioni sulla circonferenza",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="340" y2="150" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="290" x2="200" y2="10" stroke="#475569" stroke-width="2"/>
<circle cx="200" cy="150" r="110" fill="none" stroke="#334155" stroke-width="2.5"/>
<line x1="60" y1="95" x2="340" y2="95" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="7 4"/>
<line x1="200" y1="150" x2="295.3" y2="95" stroke="#dc2626" stroke-width="3"/>
<line x1="200" y1="150" x2="104.7" y2="95" stroke="#dc2626" stroke-width="3"/>
<circle cx="295.3" cy="95" r="6" fill="#dc2626"/>
<circle cx="104.7" cy="95" r="6" fill="#dc2626"/>
<path d="M 295.3 95 A 110 110 0 0 0 104.7 95" fill="none" stroke="#16a34a" stroke-width="6"/>
<text x="300" y="86" font-size="15" fill="#991b1b" font-weight="bold">π/6</text>
<text x="52" y="86" font-size="15" fill="#991b1b" font-weight="bold">5π/6</text>
<text x="345" y="100" font-size="14" fill="#1d4ed8" font-weight="bold">y = 1/2</text>
<text x="370" y="150" font-size="15" fill="#334155">sen x = 1/2:</text>
<text x="370" y="172" font-size="15" fill="#334155">x = π/6 + 2kπ</text>
<text x="370" y="194" font-size="15" fill="#334155">x = 5π/6 + 2kπ</text>
<text x="370" y="232" font-size="15" fill="#166534" font-weight="bold">sen x &gt; 1/2: arco verde</text>
<text x="370" y="254" font-size="15" fill="#166534">π/6 &lt; x &lt; 5π/6</text>
</svg>`,
      caption: "Per sen x = a si traccia la retta orizzontale y = a e si leggono i due punti d'incontro con la circonferenza. Per la disequazione sen x &gt; a si prende l'arco di circonferenza che sta sopra la retta."
    },
    {
      type: "text",
      title: "Equazioni con argomenti composti e equazioni riconducibili",
      html: `<p>Se l'argomento non è x ma un'espressione, come sen(2x − π/3) = 1/2, si <b>pone</b> l'argomento uguale a una nuova variabile e si risolve l'elementare, poi si torna a x.</p>
<p><b>Esempio.</b> sen(2x − π/3) = 1/2 → 2x − π/3 = π/6 + 2kπ oppure 2x − π/3 = 5π/6 + 2kπ → 2x = π/2 + 2kπ, 2x = 7π/6 + 2kπ → <b>x = π/4 + kπ ∨ x = 7π/12 + kπ</b>. Attenzione: il parametro k si divide <b>insieme</b> al resto.</p>
<p>Altre due equazioni elementari si presentano spesso:</p>
<ul>
<li><b>sen f(x) = sen g(x)</b> → f = g + 2kπ ∨ f = π − g + 2kπ;</li>
<li><b>cos f(x) = cos g(x)</b> → f = ± g + 2kπ.</li>
</ul>
<p>Per tutte le altre si cerca di <b>ridurre a una sola funzione</b>, usando la relazione sen²x + cos²x = 1, e poi di sostituire t = sen x (o cos x) per ottenere un'equazione algebrica.</p>
<p><b>Esempio.</b> 2cos²x − 3cos x + 1 = 0. Posto t = cos x: 2t² − 3t + 1 = 0 → (2t − 1)(t − 1) = 0 → t = 1/2 oppure t = 1. Quindi cos x = 1/2 → x = ± π/3 + 2kπ; cos x = 1 → x = 2kπ.</p>
<p><b>Esempio con la relazione fondamentale.</b> 2sen²x + cos x − 1 = 0 → 2(1 − cos²x) + cos x − 1 = 0 → −2cos²x + cos x + 1 = 0 → 2t² − t − 1 = 0 con t = cos x → t = 1 oppure t = −1/2 → x = 2kπ, oppure x = ± 2π/3 + 2kπ.</p>
<p><b>Equazioni da fattorizzare.</b> sen x cos x = sen x → sen x (cos x − 1) = 0: si applica la <b>legge di annullamento del prodotto</b> → sen x = 0 ∨ cos x = 1 → x = kπ (la seconda famiglia è già contenuta nella prima). Un errore tipico è semplificare dividendo per sen x: si perderebbero le soluzioni con sen x = 0.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le ore di luce",
      html: `<p>Un modello semplificato per l'Italia centrale descrive le ore di luce al giorno t dell'anno (t = 1 il 1° gennaio) con d(t) = 12 + 3 sen(2π(t − 80)/365): il giorno 80 (21 marzo circa) vale 12, il massimo è 15 ore al solstizio d'estate. Quando ci sono più di 13,5 ore di luce? Si risolve 12 + 3 sen θ &gt; 13,5, con θ = 2π(t − 80)/365, cioè sen θ &gt; 1/2 → π/6 &lt; θ &lt; 5π/6 → 365/12 &lt; t − 80 &lt; 5 · 365/12 → circa 110 &lt; t &lt; 232: dal 20 aprile circa al 20 agosto circa. Così una disequazione goniometrica diventa un calendario.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: equazioni elementari",
      questions: [
        { type: "mc", q: "Le soluzioni di cos x = 1/2 sono…", options: ["± π/3 + 2kπ", "π/6 + 2kπ ∨ 5π/6 + 2kπ", "π/3 + kπ"], answer: 0, explain: "arccos(1/2) = π/3 e le soluzioni del coseno sono simmetriche: ± π/3 + 2kπ." },
        { type: "tf", q: "L'equazione sen x = −3/2 ha infinite soluzioni.", answer: false, explain: "Il seno vale al minimo −1: l'equazione è impossibile." },
        { type: "mc", q: "Le soluzioni di tan x = 1 sono…", options: ["π/4 + 2kπ", "π/4 + kπ", "π/4 + 2kπ ∨ 3π/4 + 2kπ"], answer: 1, explain: "La tangente ha periodo π, quindi un unico gruppo: x = π/4 + kπ." }
      ]
    },
    {
      type: "text",
      title: "Equazioni lineari: a sen x + b cos x = c",
      html: `<p>Un'equazione <b>lineare</b> in seno e coseno ha la forma <b>a sen x + b cos x = c</b>. Si risolve in uno di tre modi:</p>
<p><b>1. Metodo dell'angolo aggiunto.</b> Si divide per R = √(a² + b²) e si riconosce nel primo membro la formula di addizione: a sen x + b cos x = R sen(x + φ), con cos φ = a/R e sen φ = b/R. L'equazione diventa sen(x + φ) = c/R (possibile se |c| ≤ R).</p>
<p><b>Esempio.</b> √3 sen x + cos x = 1. Qui R = √(3 + 1) = 2 e φ = π/6, perché cos φ = √3/2 e sen φ = 1/2. Allora 2 sen(x + π/6) = 1 → sen(x + π/6) = 1/2 → x + π/6 = π/6 + 2kπ ∨ x + π/6 = 5π/6 + 2kπ → <b>x = 2kπ ∨ x = 2π/3 + 2kπ</b>. Verifica: x = 0 → 0 + 1 = 1 ✓; x = 2π/3 → √3 · √3/2 − 1/2 = 3/2 − 1/2 = 1 ✓.</p>
<p><b>2. Metodo grafico/sistema.</b> Si pone X = cos x, Y = sen x e si risolve il sistema {aY + bX = c ; X² + Y² = 1}: l'intersezione della retta con la circonferenza goniometrica. Utile quando φ non è un angolo noto.</p>
<p><b>3. Formule parametriche.</b> Si pone t = tan(x/2): allora sen x = 2t/(1 + t²) e cos x = (1 − t²)/(1 + t²); l'equazione diventa di secondo grado in t. Va controllato a parte il caso x = π + 2kπ (dove tan(x/2) non esiste).</p>
<p>Se in a sen x + b cos x = c il termine noto c è nullo, l'equazione è <b>omogenea</b> e si risolve in modo ancora più rapido (vedi sotto).</p>`
    },
    {
      type: "text",
      title: "Equazioni omogenee di secondo grado",
      html: `<p>Un'equazione <b>omogenea di secondo grado</b> in seno e coseno ha la forma:</p>
<p style="text-align:center"><b>a sen²x + b sen x cos x + c cos²x = 0</b></p>
<p>Ogni termine ha lo stesso grado (2) rispetto a sen x e cos x. Si osserva che se cos x = 0 allora sen²x = 1 e l'equazione si riduce a a = 0: quindi, se <b>a ≠ 0</b>, cos x = 0 <b>non</b> è soluzione, e si può <b>dividere per cos²x</b>, ottenendo un'equazione di secondo grado in t = tan x: <b>a t² + b t + c = 0</b>. (Se a = 0, si raccoglie cos x.)</p>
<p><b>Esempio.</b> sen²x − sen x cos x − 2cos²x = 0. Dividendo per cos²x: t² − t − 2 = 0 → (t − 2)(t + 1) = 0 → t = 2 oppure t = −1. Dunque tan x = 2 → x = arctan 2 + kπ; tan x = −1 → x = −π/4 + kπ (cioè 3π/4 + kπ).</p>
<p>Se compare anche un termine noto d, lo si scrive come d(sen²x + cos²x) per renderlo omogeneo. <b>Esempio:</b> sen²x + 3 sen x cos x = 1 → sen²x + 3 sen x cos x − (sen²x + cos²x) = 0 → 3 sen x cos x − cos²x = 0 → cos x (3 sen x − cos x) = 0 → cos x = 0 ∨ tan x = 1/3.</p>`
    },
    {
      type: "remember",
      title: "Strategia per risolvere un'equazione goniometrica",
      html: `<p>1) Se compare un solo tipo di funzione e un solo argomento: elementare. 2) Se compaiono sen e cos con argomenti uguali: riduci a una sola funzione con sen² + cos² = 1, oppure fattorizza. 3) Se è di primo grado in sen e cos: lineare (angolo aggiunto). 4) Se tutti i termini hanno grado 2 (o tutti 1): omogenea → tan x. 5) Se gli argomenti sono diversi (x e 2x): usa le formule di duplicazione. <b>Controlla sempre le condizioni di esistenza</b> (tan x, denominatori) e <b>verifica</b> le soluzioni.</p>`
    },
    {
      type: "text",
      title: "Le disequazioni goniometriche",
      html: `<p>Una <b>disequazione goniometrica</b> chiede per quali x una funzione goniometrica è maggiore o minore di un valore. Il metodo più sicuro è disegnare la circonferenza:</p>
<ol>
<li>si trasforma la disequazione in una <b>elementare</b>: sen x &gt; a, cos x ≤ b, tan x &lt; c;</li>
<li>si disegna la circonferenza goniometrica e si segna la <b>retta</b> corrispondente: y = a per il seno (orizzontale), x = b per il coseno (verticale), l'asse delle tangenti per la tangente;</li>
<li>si evidenzia l'<b>arco</b> che soddisfa la disequazione e se ne leggono gli estremi (in senso antiorario);</li>
<li>si aggiunge il periodo (<b>+ 2kπ</b> per seno e coseno, <b>+ kπ</b> per la tangente).</li>
</ol>
<p><b>Esempi.</b></p>
<ul>
<li>sen x &gt; 1/2 → π/6 + 2kπ &lt; x &lt; 5π/6 + 2kπ.</li>
<li>cos x &lt; −√2/2 → 3π/4 + 2kπ &lt; x &lt; 5π/4 + 2kπ.</li>
<li>tan x &gt; 1 → π/4 + kπ &lt; x &lt; π/2 + kπ (l'estremo π/2 è escluso: la tangente non esiste).</li>
<li>sen x ≤ −√3/2 → 4π/3 + 2kπ ≤ x ≤ 5π/3 + 2kπ.</li>
</ul>
<p><b>Disequazioni di secondo grado.</b> 2sen²x − sen x − 1 &lt; 0. Posto s = sen x: 2s² − s − 1 &lt; 0 → (2s + 1)(s − 1) &lt; 0 → −1/2 &lt; s &lt; 1. Ora si risolve sen x &gt; −1/2 (l'arco da −π/6 a 7π/6) e sen x &lt; 1, che esclude il punto x = π/2. Soluzione: −π/6 + 2kπ &lt; x &lt; 7π/6 + 2kπ con x ≠ π/2 + 2kπ.</p>
<p>Per le disequazioni <b>fratte o prodotto</b> si studia il segno di ogni fattore, come per le disequazioni algebriche, e si confrontano i segni con una tabella (nell'intervallo [0, 2π) per non confondersi); poi si aggiunge il periodo.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la ruota panoramica",
      html: `<p>L'altezza (in metri) di una cabina da terra è h(t) = 25 − 20 cos(πt/10), con t in minuti (il giro dura 20 minuti, la ruota ha raggio 20 m e il centro è a 25 m). Quando la cabina è a 35 m? Si risolve 25 − 20 cos(πt/10) = 35 → cos(πt/10) = −1/2 → πt/10 = ± 2π/3 + 2kπ → t = 20/3 + 20k oppure t = −20/3 + 20k. Nel primo giro (0 ≤ t ≤ 20): t = 20/3 ≈ 6,7 min e t = 40/3 ≈ 13,3 min. Per t = 0 la cabina è a 5 m, a quota minima; a t = 10 minuti è in cima, a 45 m.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le maree",
      html: `<p>Le maree dei porti sono previste sommando più sinusoidi con periodi diversi (la Luna fa circa 12 ore e 25 minuti, il Sole 12 ore): i <b>fisici delle maree</b> usano decine di "componenti armoniche". Lord <b>Kelvin</b> costruì nel 1872 una macchina meccanica, la "tide-predicting machine", che sommava le sinusoidi con pulegge e fili: un computer analogico per risolvere, in pratica, un'equazione goniometrica sulle altezze d'acqua. Venezia, con l'acqua alta, è un caso in cui queste previsioni contano ogni anno.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Perché l'annulla-prodotto salva le soluzioni",
      html: `<p>Molti studenti "semplificano" sen x cos x = sen x dividendo per sen x e ottengono solo cos x = 1. Ma <b>dividere per un'espressione che può annullarsi fa perdere soluzioni</b>: x = 0 e x = π sono soluzioni! Al posto della divisione si usa il raccoglimento: sen x (cos x − 1) = 0. È lo stesso principio che si impara nelle equazioni di secondo grado con x² = x: non si semplifica mai per x.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per risolvere le equazioni goniometriche",
      intro: "Se l'algebra non ti convince, guarda la stessa equazione con altri occhi.",
      tabs: [
        {
          label: "⭕ La circonferenza",
          html: `<p>L'equazione sen x = a significa: «per quali angoli il punto P ha ordinata a?». Si traccia la retta orizzontale y = a e si leggono i punti in cui taglia la circonferenza. Se |a| &lt; 1 sono due, per a = ±1 uno solo, per |a| &gt; 1 nessuno. Ogni punto è una soluzione, poi aggiungi i giri completi (2kπ). Per cos x = a si usa la retta verticale x = a.</p>`
        },
        {
          label: "📈 Il grafico",
          html: `<p>Disegna y = sen x e la retta y = a: le soluzioni sono le <b>ascisse delle intersezioni</b>. Con a = 1/2 la retta incontra la sinusoide in π/6, 5π/6, π/6 + 2π, 5π/6 + 2π... Le disequazioni si leggono guardando dove la curva sta sopra (o sotto) la retta.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="40" y1="150" x2="570" y2="150" stroke="#475569" stroke-width="2"/><line x1="60" y1="20" x2="60" y2="280" stroke="#475569" stroke-width="2"/><line x1="60" y1="105" x2="560" y2="105" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="7 4"/><polyline points="60.0,150.0 65.0,138.7 70.0,127.6 75.0,116.9 80.0,106.6 85.0,97.1 90.0,88.4 95.0,80.7 100.0,74.0 105.0,68.6 110.0,64.4 115.0,61.6 120.0,60.2 125.0,60.2 130.0,61.6 135.0,64.4 140.0,68.6 145.0,74.0 150.0,80.7 155.0,88.4 160.0,97.1 165.0,106.6 170.0,116.9 175.0,127.6 180.0,138.7 185.0,150.0 190.0,161.3 195.0,172.4 200.0,183.1 205.0,193.4 210.0,202.9 215.0,211.6 220.0,219.3 225.0,226.0 230.0,231.4 235.0,235.6 240.0,238.4 245.0,239.8 250.0,239.8 255.0,238.4 260.0,235.6 265.0,231.4 270.0,226.0 275.0,219.3 280.0,211.6 285.0,202.9 290.0,193.4 295.0,183.1 300.0,172.4 305.0,161.3 310.0,150.0 315.0,138.7 320.0,127.6 325.0,116.9 330.0,106.6 335.0,97.1 340.0,88.4 345.0,80.7 350.0,74.0 355.0,68.6 360.0,64.4 365.0,61.6 370.0,60.2 375.0,60.2 380.0,61.6 385.0,64.4 390.0,68.6 395.0,74.0 400.0,80.7 405.0,88.4 410.0,97.1 415.0,106.6 420.0,116.9 425.0,127.6 430.0,138.7 435.0,150.0 440.0,161.3 445.0,172.4 450.0,183.1 455.0,193.4 460.0,202.9 465.0,211.6 470.0,219.3 475.0,226.0 480.0,231.4 485.0,235.6 490.0,238.4 495.0,239.8 500.0,239.8 505.0,238.4 510.0,235.6 515.0,231.4 520.0,226.0 525.0,219.3 530.0,211.6 535.0,202.9 540.0,193.4 545.0,183.1 550.0,172.4 555.0,161.3 560.0,150.0" fill="none" stroke="#ea580c" stroke-width="4"/><circle cx="123" cy="105" r="6" fill="#dc2626"/><circle cx="185" cy="105" r="6" fill="#dc2626"/><circle cx="373" cy="105" r="6" fill="#dc2626"/><circle cx="435" cy="105" r="6" fill="#dc2626"/><text x="64" y="98" font-size="14" fill="#1d4ed8" font-weight="bold">y = 1/2</text><text x="104" y="190" font-size="14" fill="#991b1b">π/6</text><text x="168" y="190" font-size="14" fill="#991b1b">5π/6</text><text x="340" y="190" font-size="14" fill="#991b1b">π/6+2π</text><text x="420" y="190" font-size="14" fill="#991b1b">5π/6+2π</text><text x="380" y="40" font-size="16" fill="#9a3412" font-weight="bold">y = sen x</text></svg>`
        },
        {
          label: "🎯 Abbina equazione e soluzione",
          html: `<p>Prova ad abbinare ogni equazione elementare alla sua famiglia di soluzioni.</p>`,
          widget: "match",
          options: { pairs: [["sen x = 0", "x = kπ"], ["cos x = 0", "x = π/2 + kπ"], ["cos x = 1", "x = 2kπ"], ["sen x = 1", "x = π/2 + 2kπ"], ["tan x = 0", "x = kπ (stessa di sen x = 0)"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle equazioni goniometriche",
      nodes: [
        { id: "elem", label: "Equazioni elementari", x: 50, y: 8, color: "#6366f1", html: "sen x = a, cos x = a, tan x = a e le loro soluzioni periodiche.", why: "Sono l'inversione di funzioni non iniettive: per renderle invertibili si restringe il dominio (arcsen, arccos, arctan) e poi si aggiungono i periodi." },
        { id: "rid", label: "Riconducibili", x: 15, y: 38, color: "#16a34a", html: "Si riducono a una sola funzione, o si fattorizzano.", why: "Si appoggiano all'identità sen² + cos² = 1 e alle formule di duplicazione, che permettono di scrivere tutto con un'unica funzione." },
        { id: "lin", label: "Lineari", x: 50, y: 52, color: "#f59e0b", html: "a sen x + b cos x = c: angolo aggiunto, sistema, parametriche.", why: "Il primo membro è la proiezione di un vettore rotante: R sen(x + φ) è un'unica sinusoide con ampiezza R = √(a²+b²) (somma di due oscillazioni della stessa frequenza)." },
        { id: "omo", label: "Omogenee", x: 85, y: 38, color: "#ef4444", html: "a sen² + b sen cos + c cos² = 0 → equazione in tan x.", why: "L'omogeneità permette di dividere per cos²x senza perdere soluzioni (se a ≠ 0) e ridursi a un'equazione di secondo grado." },
        { id: "dis", label: "Disequazioni", x: 15, y: 80, color: "#0ea5e9", html: "Si leggono sulla circonferenza o sul grafico; si aggiunge il periodo.", why: "Si basano sull'ordinamento dei valori sulla retta: un arco di circonferenza è un intervallo di angoli." },
        { id: "app", label: "Applicazioni", x: 85, y: 80, color: "#a855f7", html: "Onde, maree, orari della luce, circuiti.", why: "I fenomeni periodici sono modellati da sinusoidi: sapere quando valgono un certo valore è proprio un'equazione goniometrica." }
      ],
      edges: [
        ["elem", "rid", "si usano per"],
        ["elem", "lin", "base di"],
        ["elem", "omo", "base di"],
        ["elem", "dis", "da = a &lt;"],
        ["dis", "app", "modelli"],
        ["lin", "app", "oscillazioni"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: lineari e disequazioni",
      questions: [
        { type: "num", q: "Nell'equazione √3 sen x + cos x = 1, quanto vale R = √(a² + b²)?", answer: 2, explain: "R = √(3 + 1) = 2." },
        { type: "mc", q: "La disequazione sen x &gt; 1/2 ha soluzioni…", options: ["π/6 + 2kπ &lt; x &lt; 5π/6 + 2kπ", "5π/6 + 2kπ &lt; x &lt; 13π/6 + 2kπ", "−π/6 + 2kπ &lt; x &lt; π/6 + 2kπ"], answer: 0, explain: "L'arco sopra la retta y = 1/2 va da π/6 a 5π/6." },
        { type: "tf", q: "In un'equazione omogenea con a ≠ 0 si può dividere per cos²x senza perdere soluzioni.", answer: true, explain: "Se cos x = 0 sarebbe sen²x = 1 e l'equazione ridotta a a = 0, falsa per a ≠ 0: cos x = 0 non è soluzione." }
      ]
    }
  ],
  glossary: [
    { t: "Equazione goniometrica", d: "Equazione in cui l'incognita compare nell'argomento di funzioni goniometriche." },
    { t: "Equazione elementare", d: "Equazione del tipo sen x = a, cos x = a, tan x = a." },
    { t: "arcsen, arccos, arctan", d: "Funzioni inverse (su un intervallo ristretto) di seno, coseno, tangente." },
    { t: "Angolo aggiunto", d: "Metodo per l'equazione lineare: a sen x + b cos x = R sen(x + φ) con R = √(a² + b²)." },
    { t: "Equazione omogenea", d: "Equazione in cui tutti i termini in sen e cos hanno lo stesso grado; si riduce a un'equazione in tan x." },
    { t: "Soluzione periodica", d: "Famiglia di soluzioni che si ripete aggiungendo multipli del periodo (2kπ o kπ)." },
    { t: "Formule parametriche", d: "Con t = tan(x/2): sen x = 2t/(1 + t²), cos x = (1 − t²)/(1 + t²)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le soluzioni di sen x = √3/2 sono…", options: ["π/3 + 2kπ ∨ 2π/3 + 2kπ", "± π/3 + 2kπ", "π/6 + 2kπ ∨ 5π/6 + 2kπ"], answer: 0, explain: "arcsen(√3/2) = π/3 e il supplementare è 2π/3." },
      { type: "mc", q: "Le soluzioni di cos x = −1/2 sono…", options: ["± 2π/3 + 2kπ", "± π/3 + 2kπ", "2π/3 + kπ"], answer: 0, explain: "arccos(−1/2) = 2π/3; il coseno dà le soluzioni ± 2π/3 + 2kπ." },
      { type: "tf", q: "L'equazione cos x = 3 non ha soluzioni.", answer: true, explain: "Il coseno non supera 1." },
      { type: "mc", q: "L'equazione 2sen²x − sen x = 0 ha come soluzioni…", options: ["x = kπ ∨ x = π/6 + 2kπ ∨ x = 5π/6 + 2kπ", "x = kπ soltanto", "x = π/6 + 2kπ soltanto"], answer: 0, explain: "sen x (2 sen x − 1) = 0 → sen x = 0 oppure sen x = 1/2." },
      { type: "mc", q: "Risolvi sen²x − 3 sen x cos x + 2 cos²x = 0.", options: ["tan x = 1 ∨ tan x = 2", "tan x = −1 ∨ tan x = −2", "tan x = 1 ∨ tan x = −2"], answer: 0, explain: "Dividendo per cos²x: t² − 3t + 2 = 0 → t = 1, 2." },
      { type: "num", q: "Nell'intervallo [0, 2π), quante soluzioni ha sen x = 1/2?", answer: 2, explain: "x = π/6 e x = 5π/6." },
      { type: "mc", q: "La disequazione cos x ≥ 0 nell'intervallo [0, 2π) ha soluzioni…", options: ["[0, π/2] ∪ [3π/2, 2π)", "[0, π]", "[π/2, 3π/2]"], answer: 0, explain: "Il coseno è non negativo nel I e IV quadrante, estremi inclusi." },
      { type: "mc", q: "Quale disequazione è equivalente a tan x &gt; 1 (per x in (−π/2, π/2))?", options: ["π/4 &lt; x &lt; π/2", "0 &lt; x &lt; π/4", "−π/4 &lt; x &lt; π/4"], answer: 0, explain: "La tangente è crescente in (−π/2, π/2) e vale 1 in π/4." },
      { type: "text", q: "Qual è il periodo di tutte le soluzioni di un'equazione elementare tan x = a?", answer: ["π", "pi", "kπ", "k pi", "pigreco"], explain: "La tangente ha periodo π: le soluzioni sono x = α + kπ." },
      { type: "order", q: "Metti in ordine i passi per risolvere una disequazione goniometrica elementare.", items: ["Riportare la disequazione a una forma elementare (es. sen x &gt; a)", "Disegnare la circonferenza e la retta corrispondente", "Individuare l'arco che soddisfa la disequazione", "Leggere gli estremi in senso antiorario", "Aggiungere il periodo (2kπ o kπ)"], explain: "Dalla forma elementare si passa alla circonferenza, si legge l'arco, poi si aggiunge il periodo." }
    ]
  }
});
