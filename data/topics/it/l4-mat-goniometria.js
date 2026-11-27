TOPIC('it', {
  id: "l4-mat-goniometria",
  title: "Le funzioni goniometriche",
  intro: "Le onde del mare, il suono di una chitarra, il segnale Wi-Fi, la corrente della presa di casa: tutti questi fenomeni <b>si ripetono nel tempo</b> e si descrivono con <b>seno e coseno</b>. In questa lezione liberiamo gli angoli dai triangoli: li misuriamo in <b>radianti</b>, li disegniamo sulla <b>circonferenza goniometrica</b>, definiamo seno, coseno e tangente per <b>qualsiasi</b> angolo, ne studiamo i <b>grafici</b> e impariamo le <b>formule</b> (addizione, duplicazione, bisezione) che permettono di calcolare e semplificare. È lo strumento di base di tutta la fisica ondulatoria e dell'analisi.",
  minutes: 70,
  sections: [
    {
      type: "text",
      title: "Misurare gli angoli: dai gradi ai radianti",
      html: `<p>Alle medie e al biennio hai misurato gli angoli in <b>gradi</b> (l'angolo giro vale 360°, una scelta storica e convenzionale). In matematica superiore è più naturale il <b>radiante</b>: si pone una circonferenza di raggio r con centro nel vertice dell'angolo e si misura l'angolo con il <b>rapporto tra la lunghezza dell'arco e il raggio</b>:</p>
<p style="text-align:center"><b>α = l / r</b> (radianti)</p>
<p>Questo rapporto non dipende da r (archi e raggi sono proporzionali), quindi è una vera misura dell'angolo, e <b>non ha unità di misura</b> (è un rapporto tra lunghezze): "rad" si scrive solo per chiarezza. Poiché la circonferenza intera è lunga 2πr, l'angolo giro misura <b>2π rad</b>, l'angolo piatto <b>π rad</b>, l'angolo retto <b>π/2 rad</b>. Un radiante vale circa 57,3°: è l'angolo che sottende un arco lungo quanto il raggio.</p>
<p><b>Conversione</b> (proporzione α° : 180° = α<sub>rad</sub> : π):</p>
<ul>
<li>da gradi a radianti: <b>α<sub>rad</sub> = α° · π/180</b>;</li>
<li>da radianti a gradi: <b>α° = α<sub>rad</sub> · 180/π</b>.</li>
</ul>
<table>
<tr><th>Gradi</th><td>0°</td><td>30°</td><td>45°</td><td>60°</td><td>90°</td><td>120°</td><td>135°</td><td>150°</td><td>180°</td><td>270°</td><td>360°</td></tr>
<tr><th>Radianti</th><td>0</td><td>π/6</td><td>π/4</td><td>π/3</td><td>π/2</td><td>2π/3</td><td>3π/4</td><td>5π/6</td><td>π</td><td>3π/2</td><td>2π</td></tr>
</table>
<p>Con i radianti le formule diventano semplici: la <b>lunghezza di un arco</b> è <b>l = α r</b> e l'<b>area del settore circolare</b> è <b>A = ½ α r²</b> (con α in radianti). Con i gradi servirebbero fattori π/180 ovunque.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la pizza e la lancetta",
      html: `<p>Una pizza di raggio 15 cm viene tagliata in 8 spicchi uguali. Ogni spicchio ha angolo al centro 2π/8 = π/4 rad (45°). La lunghezza della crosta di uno spicchio è l = (π/4) · 15 ≈ 11,8 cm; l'area di uno spicchio è ½ · (π/4) · 15² ≈ 88,4 cm². Un secondo esempio: la lancetta dei minuti di un orologio lunga 10 cm in 20 minuti ruota di un terzo di giro, cioè 2π/3 rad; la sua punta percorre l = (2π/3) · 10 ≈ 20,9 cm.</p>`
    },
    {
      type: "svg",
      title: "La circonferenza goniometrica",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="340" y2="150" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="290" x2="200" y2="10" stroke="#475569" stroke-width="2"/>
<circle cx="200" cy="150" r="110" fill="none" stroke="#334155" stroke-width="2.5"/>
<line x1="310" y1="20" x2="310" y2="280" stroke="#9333ea" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="200" y1="150" x2="310" y2="54.7" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="3 3"/>
<line x1="200" y1="150" x2="255" y2="54.7" stroke="#dc2626" stroke-width="3.5"/>
<path d="M 230 150 A 30 30 0 0 0 226 135" fill="none" stroke="#0f172a" stroke-width="2"/>
<line x1="255" y1="150" x2="255" y2="54.7" stroke="#2563eb" stroke-width="4"/>
<line x1="200" y1="150" x2="255" y2="150" stroke="#16a34a" stroke-width="4"/>
<line x1="310" y1="150" x2="310" y2="54.7" stroke="#9333ea" stroke-width="4"/>
<circle cx="255" cy="54.7" r="6" fill="#dc2626"/>
<text x="262" y="48" font-size="16" fill="#991b1b" font-weight="bold">P</text>
<text x="236" y="136" font-size="15" fill="#0f172a">α</text>
<text x="222" y="170" font-size="15" fill="#166534" font-weight="bold">cos α</text>
<text x="262" y="110" font-size="15" fill="#1d4ed8" font-weight="bold">sen α</text>
<text x="316" y="110" font-size="15" fill="#7e22ce" font-weight="bold">tan α</text>
<text x="352" y="62" font-size="15" fill="#334155">P = (cos α ; sen α)</text>
<text x="352" y="100" font-size="15" fill="#334155">raggio = 1</text>
<text x="352" y="140" font-size="15" fill="#334155">cos α = ascissa di P</text>
<text x="352" y="170" font-size="15" fill="#334155">sen α = ordinata di P</text>
<text x="352" y="200" font-size="15" fill="#334155">tan α = ordinata sulla</text>
<text x="352" y="220" font-size="15" fill="#334155">retta tangente x = 1</text>
<text x="352" y="260" font-size="15" fill="#334155">(qui α = 60°)</text>
</svg>`,
      caption: "Sulla circonferenza di raggio 1 e centro nell'origine, l'angolo α (misurato in senso antiorario dal semiasse positivo delle x) individua il punto P. Il coseno è la sua ascissa, il seno la sua ordinata, la tangente l'ordinata del punto in cui il raggio prolungato incontra la retta x = 1."
    },
    {
      type: "text",
      title: "Seno, coseno e tangente per ogni angolo",
      html: `<p>Nel triangolo rettangolo seno e coseno si definiscono solo per angoli acuti. La <b>circonferenza goniometrica</b> (raggio 1, centro nell'origine) li estende a <b>ogni</b> angolo, anche maggiore di 360° o negativo (un angolo negativo si misura in senso orario). Detto P il punto della circonferenza corrispondente all'angolo α:</p>
<ul>
<li><b>cos α</b> = ascissa di P; <b>sen α</b> = ordinata di P;</li>
<li><b>tan α = sen α / cos α</b>, definita solo se cos α ≠ 0, cioè α ≠ π/2 + kπ.</li>
</ul>
<p>Conseguenze immediate: poiché P sta sulla circonferenza, −1 ≤ sen α ≤ 1 e −1 ≤ cos α ≤ 1, mentre tan α può assumere <b>qualsiasi</b> valore reale. Il segno dipende dal quadrante: seno positivo nel I e II, coseno positivo nel I e IV, tangente positiva nel I e III. Seno e coseno sono <b>periodici di 2π</b> (dopo un giro si torna sullo stesso punto), la tangente di <b>π</b>.</p>
<table>
<tr><th>α</th><td>0°</td><td>30°</td><td>45°</td><td>60°</td><td>90°</td></tr>
<tr><th>sen α</th><td>0</td><td>1/2</td><td>√2/2</td><td>√3/2</td><td>1</td></tr>
<tr><th>cos α</th><td>1</td><td>√3/2</td><td>√2/2</td><td>1/2</td><td>0</td></tr>
<tr><th>tan α</th><td>0</td><td>√3/3</td><td>1</td><td>√3</td><td>non def.</td></tr>
</table>
<p>Le <b>relazioni fondamentali</b> discendono dal teorema di Pitagora applicato al triangolo con ipotenusa 1 e cateti cos α e sen α:</p>
<p style="text-align:center"><b>sen²α + cos²α = 1</b> &nbsp;&nbsp; e &nbsp;&nbsp; <b>tan α = sen α / cos α</b></p>
<p>Dalla prima, se conosci il seno puoi ricavare il coseno: cos α = ± √(1 − sen²α), con il segno scelto in base al quadrante.</p>`
    },
    {
      type: "remember",
      title: "Come ricordare i valori notevoli",
      html: `<p>Scrivi i valori del seno per 0°, 30°, 45°, 60°, 90° come √0/2, √1/2, √2/2, √3/2, √4/2: ottieni 0, 1/2, √2/2, √3/2, 1. Il coseno si legge <b>al contrario</b> (cos α = sen(90° − α)). Per gli altri quadranti basta il <b>quadrante di riferimento</b>: i valori sono gli stessi, cambia solo il segno.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: radianti e circonferenza",
      questions: [
        { type: "mc", q: "Quanti radianti sono 135°?", options: ["3π/4", "2π/3", "5π/6"], answer: 0, explain: "135 · π/180 = 3π/4." },
        { type: "num", q: "Un arco lungo 6 cm su una circonferenza di raggio 4 cm sottende un angolo di quanti radianti?", answer: 1.5, tol: 0.001, explain: "α = l/r = 6/4 = 1,5 rad." },
        { type: "tf", q: "Il coseno di un angolo può valere 2.", answer: false, explain: "Il coseno è un'ascissa sulla circonferenza di raggio 1: sta sempre tra −1 e 1." }
      ]
    },
    {
      type: "text",
      title: "Angoli associati e simmetrie",
      html: `<p>Ogni angolo del piano si riconduce, con una simmetria della circonferenza, a un angolo del primo quadrante. Le relazioni principali (valide per ogni α):</p>
<ul>
<li><b>Angoli opposti</b> (−α): sen(−α) = −sen α, cos(−α) = cos α, tan(−α) = −tan α. Seno e tangente sono <b>dispari</b>, il coseno è <b>pari</b>.</li>
<li><b>Supplementari</b> (π − α): sen(π − α) = sen α; cos(π − α) = −cos α.</li>
<li><b>Differenza di π</b> (π + α): sen(π + α) = −sen α; cos(π + α) = −cos α; tan(π + α) = tan α.</li>
<li><b>Complementari</b> (π/2 − α): sen(π/2 − α) = cos α; cos(π/2 − α) = sen α.</li>
</ul>
<p><b>Esempio.</b> sen 150° = sen(180° − 30°) = sen 30° = 1/2; cos 210° = cos(180° + 30°) = −cos 30° = −√3/2; tan 225° = tan(180° + 45°) = tan 45° = 1; sen(−π/3) = −√3/2.</p>
<p>Perché valgono? Basta guardare la circonferenza: il punto di π − α è il simmetrico di quello di α rispetto all'asse y (stessa ordinata, ascissa opposta); quello di π + α è il simmetrico rispetto all'origine (entrambe le coordinate cambiano segno).</p>`
    },
    {
      type: "text",
      title: "I grafici: sinusoide, cosinusoide, tangentoide",
      html: `<p>Riportando α in ascissa e sen α in ordinata si ottiene la <b>sinusoide</b> y = sen x: dominio ℝ, immagine [−1, 1], periodo 2π, dispari (simmetrica rispetto all'origine), zeri nei multipli di π. Il coseno ha lo stesso grafico <b>traslato</b> di π/2 verso sinistra: cos x = sen(x + π/2). La <b>tangentoide</b> y = tan x ha dominio ℝ \\ {π/2 + kπ}, immagine ℝ, periodo π e <b>asintoti verticali</b> nelle rette x = π/2 + kπ.</p>
<p>Le trasformazioni dei grafici seguono la regola generale: per <b>y = A sen(ωx + φ) + k</b></p>
<ul>
<li><b>|A|</b> è l'<b>ampiezza</b> (le oscillazioni vanno tra k − |A| e k + |A|);</li>
<li><b>T = 2π/ω</b> è il <b>periodo</b> (con ω &gt; 0), e ω è la <b>pulsazione</b>;</li>
<li><b>φ</b> sposta il grafico a sinistra di φ/ω (<b>sfasamento</b>);</li>
<li><b>k</b> lo alza o abbassa.</li>
</ul>
<p>Esempio: y = 3 sen(2x) ha ampiezza 3 e periodo π; y = sen(x − π/4) + 1 oscilla tra 0 e 2 ed è la sinusoide traslata di π/4 a destra e di 1 verso l'alto.</p>`
    },
    {
      type: "svg",
      title: "Seno e coseno a confronto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="150" x2="570" y2="150" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="20" x2="60" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="60" x2="560" y2="60" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="60" y1="240" x2="560" y2="240" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5 4"/>
<polyline points="60.0,150.0 65.0,138.7 70.0,127.6 75.0,116.9 80.0,106.6 85.0,97.1 90.0,88.4 95.0,80.7 100.0,74.0 105.0,68.6 110.0,64.4 115.0,61.6 120.0,60.2 125.0,60.2 130.0,61.6 135.0,64.4 140.0,68.6 145.0,74.0 150.0,80.7 155.0,88.4 160.0,97.1 165.0,106.6 170.0,116.9 175.0,127.6 180.0,138.7 185.0,150.0 190.0,161.3 195.0,172.4 200.0,183.1 205.0,193.4 210.0,202.9 215.0,211.6 220.0,219.3 225.0,226.0 230.0,231.4 235.0,235.6 240.0,238.4 245.0,239.8 250.0,239.8 255.0,238.4 260.0,235.6 265.0,231.4 270.0,226.0 275.0,219.3 280.0,211.6 285.0,202.9 290.0,193.4 295.0,183.1 300.0,172.4 305.0,161.3 310.0,150.0 315.0,138.7 320.0,127.6 325.0,116.9 330.0,106.6 335.0,97.1 340.0,88.4 345.0,80.7 350.0,74.0 355.0,68.6 360.0,64.4 365.0,61.6 370.0,60.2 375.0,60.2 380.0,61.6 385.0,64.4 390.0,68.6 395.0,74.0 400.0,80.7 405.0,88.4 410.0,97.1 415.0,106.6 420.0,116.9 425.0,127.6 430.0,138.7 435.0,150.0 440.0,161.3 445.0,172.4 450.0,183.1 455.0,193.4 460.0,202.9 465.0,211.6 470.0,219.3 475.0,226.0 480.0,231.4 485.0,235.6 490.0,238.4 495.0,239.8 500.0,239.8 505.0,238.4 510.0,235.6 515.0,231.4 520.0,226.0 525.0,219.3 530.0,211.6 535.0,202.9 540.0,193.4 545.0,183.1 550.0,172.4 555.0,161.3 560.0,150.0" fill="none" stroke="#2563eb" stroke-width="4"/>
<polyline points="60.0,60.0 65.0,60.7 70.0,62.8 75.0,66.3 80.0,71.1 85.0,77.2 90.0,84.4 95.0,92.6 100.0,101.8 105.0,111.7 110.0,122.2 115.0,133.1 120.0,144.3 125.0,155.7 130.0,166.9 135.0,177.8 140.0,188.3 145.0,198.2 150.0,207.4 155.0,215.6 160.0,222.8 165.0,228.9 170.0,233.7 175.0,237.2 180.0,239.3 185.0,240.0 190.0,239.3 195.0,237.2 200.0,233.7 205.0,228.9 210.0,222.8 215.0,215.6 220.0,207.4 225.0,198.2 230.0,188.3 235.0,177.8 240.0,166.9 245.0,155.7 250.0,144.3 255.0,133.1 260.0,122.2 265.0,111.7 270.0,101.8 275.0,92.6 280.0,84.4 285.0,77.2 290.0,71.1 295.0,66.3 300.0,62.8 305.0,60.7 310.0,60.0 315.0,60.7 320.0,62.8 325.0,66.3 330.0,71.1 335.0,77.2 340.0,84.4 345.0,92.6 350.0,101.8 355.0,111.7 360.0,122.2 365.0,133.1 370.0,144.3 375.0,155.7 380.0,166.9 385.0,177.8 390.0,188.3 395.0,198.2 400.0,207.4 405.0,215.6 410.0,222.8 415.0,228.9 420.0,233.7 425.0,237.2 430.0,239.3 435.0,240.0 440.0,239.3 445.0,237.2 450.0,233.7 455.0,228.9 460.0,222.8 465.0,215.6 470.0,207.4 475.0,198.2 480.0,188.3 485.0,177.8 490.0,166.9 495.0,155.7 500.0,144.3 505.0,133.1 510.0,122.2 515.0,111.7 520.0,101.8 525.0,92.6 530.0,84.4 535.0,77.2 540.0,71.1 545.0,66.3 550.0,62.8 555.0,60.7 560.0,60.0" fill="none" stroke="#ea580c" stroke-width="4"/>
<text x="64" y="52" font-size="14" fill="#334155">1</text>
<text x="64" y="256" font-size="14" fill="#334155">−1</text>
<text x="185" y="172" font-size="14" fill="#334155">π</text>
<text x="310" y="172" font-size="14" fill="#334155">2π</text>
<text x="435" y="172" font-size="14" fill="#334155">3π</text>
<text x="548" y="172" font-size="14" fill="#334155">4π</text>
<text x="100" y="40" font-size="16" fill="#1d4ed8" font-weight="bold">y = sen x</text>
<text x="400" y="40" font-size="16" fill="#9a3412" font-weight="bold">y = cos x</text>
</svg>`,
      caption: "Entrambe le funzioni oscillano tra −1 e 1 con periodo 2π; il coseno anticipa il seno di π/2 (in altre parole, cos x = sen(x + π/2))."
    },
    {
      type: "text",
      title: "Le formule goniometriche",
      html: `<p>Il seno di una somma <b>non</b> è la somma dei seni (sen 30° + sen 60° ≠ sen 90°)! Valgono invece le <b>formule di addizione e sottrazione</b>:</p>
<ul>
<li><b>sen(α ± β) = sen α cos β ± cos α sen β</b></li>
<li><b>cos(α ± β) = cos α cos β ∓ sen α sen β</b></li>
<li><b>tan(α ± β) = (tan α ± tan β) / (1 ∓ tan α tan β)</b></li>
</ul>
<p>Ponendo β = α si ottengono le <b>formule di duplicazione</b>:</p>
<ul>
<li><b>sen 2α = 2 sen α cos α</b></li>
<li><b>cos 2α = cos²α − sen²α = 1 − 2 sen²α = 2 cos²α − 1</b></li>
<li><b>tan 2α = 2 tan α / (1 − tan²α)</b></li>
</ul>
<p>Dalle due forme di cos 2α si ricavano le <b>formule di bisezione</b>: <b>sen²(α/2) = (1 − cos α)/2</b> e <b>cos²(α/2) = (1 + cos α)/2</b> (il segno della radice, per sen(α/2) e cos(α/2), dipende dal quadrante di α/2).</p>
<p><b>Esempio 1.</b> sen 75° = sen(45° + 30°) = sen 45° cos 30° + cos 45° sen 30° = (√2/2)(√3/2) + (√2/2)(1/2) = <b>(√6 + √2)/4</b> ≈ 0,966.</p>
<p><b>Esempio 2.</b> Se sen α = 3/5 con α nel primo quadrante, allora cos α = 4/5 e sen 2α = 2 · (3/5) · (4/5) = 24/25, cos 2α = 16/25 − 9/25 = 7/25.</p>
<p>Tutte queste formule derivano da un'unica: quella del coseno della differenza, che si dimostra con la distanza tra due punti della circonferenza goniometrica. Le altre se ne ricavano usando gli angoli associati.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la corrente alternata",
      html: `<p>La tensione della presa di casa in Europa è una sinusoide: v(t) = V<sub>max</sub> sen(2π f t), con f = 50 Hz e V<sub>max</sub> ≈ 325 V (il valore "efficace" di 230 V è V<sub>max</sub>/√2). Il periodo è T = 1/50 s = 20 ms: ogni 20 millisecondi la tensione compie un'oscillazione completa e, due volte per periodo, passa per zero. Ecco perché una lampada a incandescenza "tremola" 100 volte al secondo, troppo in fretta perché l'occhio se ne accorga. Quando scrivi 2πf stai usando i <b>radianti</b>: la pulsazione ω = 2πf = 314 rad/s è il numero di radianti percorsi al secondo sulla circonferenza goniometrica.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Da Ipparco ai radianti",
      html: `<p>La trigonometria nacque in astronomia: <b>Ipparco di Nicea</b> (II secolo a.C.) compilò tabelle delle <i>corde</i> di una circonferenza, ed è considerato il "padre" della trigonometria. Il nostro seno deriva dal lavoro degli astronomi indiani e arabi: la parola <i>sinus</i> nasce da un fraintendimento in una traduzione medievale dall'arabo. Il concetto di radiante comparve già con <b>Roger Cotes</b> nel 1714, ma il nome "radian" si trova a stampa soltanto nel 1873. I 360° dell'angolo giro derivano con ogni probabilità dal sistema numerico sessagesimale dei Babilonesi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il suono puro",
      html: `<p>Il <b>La centrale</b> a cui si accordano gli strumenti è una sinusoide di frequenza 440 Hz: y = sen(2π · 440 t). Il matematico <b>Joseph Fourier</b> (1822) mostrò che qualunque suono periodico, anche quello complicato di una voce, si può scomporre in una somma di sinusoidi di frequenze multiple: è la base dell'MP3, dell'equalizzatore del telefono e della compressione delle immagini JPEG.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire seno e coseno",
      intro: "Il passaggio dal triangolo alla circonferenza è il più difficile: ecco tre prospettive diverse.",
      tabs: [
        {
          label: "✋ La mano e i valori notevoli",
          html: `<p>Un trucco per i valori di 0°, 30°, 45°, 60°, 90°: tieni la mano sinistra aperta con il palmo verso di te e numera le dita dal mignolo (0°) al pollice (90°). Per l'angolo scelto, <b>piega</b> il dito corrispondente: il <b>seno</b> è √n/2, dove n è il numero di dita rimaste <b>dalla parte del mignolo</b>, e il <b>coseno</b> è √m/2, dove m è il numero di dita dalla parte del pollice. Per 30° (anulare piegato) c'è 1 dito dalla parte del mignolo e 3 dalla parte del pollice: sen 30° = √1/2 = 1/2 e cos 30° = √3/2. Per 60° (indice piegato) i numeri sono invertiti. Il trucco funziona perché le radici di 0, 1, 2, 3, 4 sono proprio la sequenza dei valori notevoli.</p>`
        },
        {
          label: "🎡 La ruota panoramica",
          html: `<p>Sali su una ruota panoramica di raggio 1 che gira in senso antiorario partendo dal punto più a destra. L'angolo α è quanto hai girato; la tua <b>altezza</b> rispetto al centro è sen α, la tua <b>distanza orizzontale</b> dal centro è cos α. Dopo mezzo giro (π) sei a sinistra, con altezza zero e coseno −1; dopo un giro intero (2π) sei tornato al punto di partenza: ecco la <b>periodicità</b>. La sinusoide è il grafico dell'altezza al passare del tempo.</p>`
        },
        {
          label: "🧭 Classifica i segni",
          html: `<p>Prova a classificare: per ciascun angolo, il <b>seno</b> è positivo o negativo? Ricorda: positivo se P sta sopra l'asse x (I e II quadrante).</p>`,
          widget: "classify",
          options: { groups: ["Seno positivo", "Seno negativo"], items: [["30°", 0], ["120°", 0], ["200°", 1], ["300°", 1], ["5π/6", 0], ["7π/6", 1]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della goniometria",
      nodes: [
        { id: "rad", label: "Radiante", x: 15, y: 10, color: "#6366f1", html: "Misura dell'angolo come rapporto arco/raggio; 180° = π rad.", why: "È la misura naturale: l'angolo diventa un numero puro e le formule di arco e settore perdono i fattori 180/π. In analisi permette di avere (sen x)' = cos x senza costanti." },
        { id: "cerchio", label: "Circonferenza goniometrica", x: 50, y: 30, color: "#16a34a", html: "Circonferenza di raggio 1: il punto P(cos α ; sen α) descrive l'angolo.", why: "Estende le definizioni dal triangolo rettangolo a tutti gli angoli, e da sen²+cos²=1 (Pitagora) si ottiene l'identità fondamentale." },
        { id: "fun", label: "Seno, coseno, tangente", x: 85, y: 10, color: "#f59e0b", html: "sen = ordinata, cos = ascissa, tan = sen/cos.", why: "Nascono dai rapporti tra i lati dei triangoli simili; per la similitudine non dipendono dalle dimensioni del triangolo ma solo dall'angolo." },
        { id: "graf", label: "Grafici e periodicità", x: 85, y: 55, color: "#ef4444", html: "Sinusoide, cosinusoide (periodo 2π), tangentoide (periodo π).", why: "Dopo un giro completo si ritorna sullo stesso punto: da qui il periodo. Tutte le onde sono sinusoidi trasformate: y = A sen(ωx + φ) + k." },
        { id: "ass", label: "Angoli associati", x: 15, y: 55, color: "#0ea5e9", html: "Relazioni tra gli angoli α, −α, π ± α, π/2 − α.", why: "Sono simmetrie della circonferenza (rispetto agli assi, all'origine, alla bisettrice): riconducono ogni angolo al primo quadrante." },
        { id: "form", label: "Formule di addizione e duplicazione", x: 50, y: 85, color: "#a855f7", html: "sen(α ± β), cos(α ± β), duplicazione, bisezione.", why: "Dimostrate dalla distanza tra due punti sulla circonferenza; permettono di calcolare valori esatti come sen 75° e di semplificare le equazioni." }
      ],
      edges: [
        ["rad", "cerchio", "misura su"],
        ["cerchio", "fun", "definisce"],
        ["fun", "graf", "disegna"],
        ["cerchio", "ass", "simmetrie"],
        ["fun", "form", "combina"],
        ["ass", "form", "semplifica"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: formule",
      questions: [
        { type: "mc", q: "Quanto vale sen 150°?", options: ["1/2", "−1/2", "√3/2"], answer: 0, explain: "sen(180° − 30°) = sen 30° = 1/2." },
        { type: "num", q: "Qual è il periodo di y = sen(2x), in unità di π?", answer: 1, explain: "T = 2π/ω = 2π/2 = π, cioè 1 volta π." },
        { type: "tf", q: "sen(α + β) = sen α + sen β.", answer: false, explain: "La formula corretta è sen α cos β + cos α sen β." }
      ]
    }
  ],
  glossary: [
    { t: "Radiante", d: "Misura di un angolo come rapporto tra la lunghezza dell'arco e il raggio; 180° = π rad." },
    { t: "Circonferenza goniometrica", d: "Circonferenza di raggio 1 con centro nell'origine, usata per definire seno, coseno e tangente." },
    { t: "Seno", d: "Ordinata del punto della circonferenza goniometrica associato all'angolo." },
    { t: "Coseno", d: "Ascissa del punto della circonferenza goniometrica associato all'angolo." },
    { t: "Tangente", d: "Rapporto sen α / cos α, definito se cos α ≠ 0." },
    { t: "Periodo", d: "Il più piccolo T &gt; 0 tale che f(x + T) = f(x): 2π per seno e coseno, π per la tangente." },
    { t: "Ampiezza", d: "Nel grafico y = A sen(ωx + φ) è |A|, la massima distanza dal valore centrale." },
    { t: "Angoli associati", d: "Angoli legati ad α da simmetrie (−α, π − α, π + α, π/2 − α): hanno seno e coseno uguali a meno del segno o dello scambio." },
    { t: "Formule di addizione", d: "Esprimono seno, coseno e tangente di α ± β in funzione di quelli di α e β." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quanti gradi sono 5π/6 radianti?", options: ["120°", "150°", "135°"], answer: 1, explain: "5π/6 · 180/π = 150°." },
      { type: "num", q: "Qual è la lunghezza di un arco che sottende un angolo di 2 rad su una circonferenza di raggio 5 cm?", answer: 10, tol: 0.01, unit: "cm", explain: "l = α r = 2 · 5 = 10 cm." },
      { type: "mc", q: "Se sen α = 5/13 con α nel primo quadrante, quanto vale cos α?", options: ["12/13", "8/13", "13/12"], answer: 0, explain: "cos α = √(1 − 25/169) = √(144/169) = 12/13." },
      { type: "tf", q: "La funzione y = tan x è definita per ogni x reale.", answer: false, explain: "Non è definita dove cos x = 0, cioè per x = π/2 + kπ." },
      { type: "mc", q: "Quanto vale cos 240°?", options: ["1/2", "−1/2", "−√3/2"], answer: 1, explain: "cos(180° + 60°) = −cos 60° = −1/2." },
      { type: "mc", q: "Qual è il periodo di y = cos(x/3)?", options: ["2π/3", "6π", "3π"], answer: 1, explain: "T = 2π/ω con ω = 1/3: T = 6π." },
      { type: "num", q: "Se sen α = 3/5 e α è nel primo quadrante, quanto vale sen 2α? (risposta decimale)", answer: 0.96, tol: 0.001, explain: "sen 2α = 2 · (3/5) · (4/5) = 24/25 = 0,96." },
      { type: "tf", q: "Il grafico di y = sen x è simmetrico rispetto all'origine.", answer: true, explain: "Il seno è una funzione dispari: sen(−x) = −sen x." },
      { type: "text", q: "Qual è il valore di sen²α + cos²α, per qualunque angolo α?", answer: ["1", "uno"], explain: "È l'identità fondamentale della goniometria, conseguenza del teorema di Pitagora." },
      { type: "order", q: "Metti in ordine questi valori dal più piccolo al più grande.", items: ["cos 180°", "sen 210°", "cos 60°", "sen 90°"], explain: "cos 180° = −1; sen 210° = −1/2; cos 60° = 1/2; sen 90° = 1." }
    ]
  }
});
