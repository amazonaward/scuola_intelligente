TOPIC('it', {
  id: "l4-mat-numeri-complessi",
  title: "I numeri complessi",
  intro: "Nel biennio hai scoperto che l'equazione x² = −1 non ha soluzioni reali perché il quadrato di un numero reale non è mai negativo. I matematici del Cinquecento, per risolvere le equazioni di terzo grado, furono costretti a fare un passo audace: <b>inventare un nuovo numero i</b> con i² = −1. Da quell'idea nascono i <b>numeri complessi</b>, che oggi sono indispensabili in ingegneria elettrica, fisica quantistica, elaborazione dei segnali e grafica. In questa lezione li definiamo, li rappresentiamo sul piano, impariamo a calcolare con le loro tre forme (<b>algebrica</b>, <b>trigonometrica</b>, <b>esponenziale</b>) e a trovarne le <b>radici</b>.",
  minutes: 70,
  sections: [
    {
      type: "text",
      title: "L'unità immaginaria e la forma algebrica",
      html: `<p>Si introduce l'<b>unità immaginaria i</b>, un "numero" tale che <b>i² = −1</b>. Un <b>numero complesso</b> in <b>forma algebrica</b> è <b>z = a + bi</b>, con a e b reali: <b>a = Re(z)</b> è la <b>parte reale</b> e <b>b = Im(z)</b> la <b>parte immaginaria</b> (attenzione: è il numero reale b, senza la i). Se b = 0 il numero è reale; se a = 0 è un <b>immaginario puro</b>. L'insieme dei numeri complessi si indica con ℂ e <b>contiene ℝ</b>.</p>
<p>Due complessi sono uguali se hanno uguali sia la parte reale sia la parte immaginaria. <b>Non esiste un ordinamento</b> di ℂ compatibile con le operazioni: non ha senso dire che 2 + i sia "maggiore" di 1 + 3i.</p>
<p><b>Potenze di i.</b> i⁰ = 1, i¹ = i, i² = −1, i³ = −i, i⁴ = 1, e poi si ripete con periodo 4. Per calcolare iⁿ si divide n per 4 e si considera il resto: i²⁰²⁵ = i¹ = i (perché 2025 = 4 · 506 + 1).</p>
<p><b>Operazioni</b> (si calcola come con i polinomi, ricordando i² = −1):</p>
<ul>
<li><b>Somma</b>: (a + bi) + (c + di) = (a + c) + (b + d)i.</li>
<li><b>Prodotto</b>: (a + bi)(c + di) = (ac − bd) + (ad + bc)i.</li>
<li><b>Coniugato</b>: se z = a + bi, z̄ = a − bi. Vale <b>z · z̄ = a² + b²</b>, un numero reale ≥ 0.</li>
<li><b>Modulo</b>: |z| = √(a² + b²) = √(z · z̄).</li>
<li><b>Quoziente</b>: si moltiplica numeratore e denominatore per il <b>coniugato del denominatore</b> (come per razionalizzare): (a + bi)/(c + di) = (a + bi)(c − di)/(c² + d²).</li>
</ul>
<p><b>Esempi.</b></p>
<ul>
<li>(3 + 2i)(1 − 4i) = 3 − 12i + 2i − 8i² = 3 − 10i + 8 = <b>11 − 10i</b>.</li>
<li>(2 + i)/(1 − i) = (2 + i)(1 + i)/((1 − i)(1 + i)) = (2 + 2i + i + i²)/2 = (1 + 3i)/2 = <b>1/2 + (3/2) i</b>.</li>
<li>|3 + 4i| = √(9 + 16) = 5.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Il piano di Argand-Gauss",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="150" x2="400" y2="150" stroke="#475569" stroke-width="2"/>
<line x1="150" y1="290" x2="150" y2="10" stroke="#475569" stroke-width="2"/>
<line x1="150" y1="150" x2="300" y2="50" stroke="#dc2626" stroke-width="4"/>
<line x1="150" y1="150" x2="300" y2="250" stroke="#7c3aed" stroke-width="3" stroke-dasharray="7 4"/>
<line x1="300" y1="50" x2="300" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
<line x1="300" y1="50" x2="300" y2="150" stroke="#2563eb" stroke-width="2.5"/>
<line x1="150" y1="150" x2="300" y2="150" stroke="#16a34a" stroke-width="2.5"/>
<path d="M 190 150 A 40 40 0 0 0 183 127" fill="none" stroke="#0f172a" stroke-width="2"/>
<circle cx="300" cy="50" r="6" fill="#dc2626"/>
<circle cx="300" cy="250" r="6" fill="#7c3aed"/>
<text x="308" y="48" font-size="16" fill="#991b1b" font-weight="bold">z = 3 + 2i</text>
<text x="308" y="262" font-size="16" fill="#5b21b6" font-weight="bold">z̄ = 3 − 2i</text>
<text x="208" y="90" font-size="15" fill="#991b1b" font-weight="bold">|z| = r</text>
<text x="196" y="138" font-size="15" fill="#0f172a">θ</text>
<text x="222" y="168" font-size="14" fill="#166534">Re = 3</text>
<text x="306" y="106" font-size="14" fill="#1d4ed8">Im = 2</text>
<text x="360" y="140" font-size="14" fill="#334155">asse reale</text>
<text x="156" y="22" font-size="14" fill="#334155">asse immaginario</text>
<text x="430" y="70" font-size="15" fill="#334155">z = a + bi ↔ punto (a ; b)</text>
<text x="430" y="100" font-size="15" fill="#334155">|z| = distanza dall'origine</text>
<text x="430" y="130" font-size="15" fill="#334155">θ = argomento (angolo)</text>
<text x="430" y="160" font-size="15" fill="#334155">z̄ = simmetrico rispetto</text>
<text x="430" y="182" font-size="15" fill="#334155">all'asse reale</text>
</svg>`,
      caption: "Ogni numero complesso a + bi corrisponde al punto (a; b) del piano (o al vettore dall'origine). Il modulo è la lunghezza del vettore, l'argomento l'angolo con l'asse reale, il coniugato il simmetrico rispetto all'asse x."
    },
    {
      type: "quiz",
      title: "Mini-quiz: forma algebrica",
      questions: [
        { type: "mc", q: "Quanto vale (2 + 3i) + (1 − 5i)?", options: ["3 − 2i", "3 + 8i", "1 − 2i"], answer: 0, explain: "Si sommano parti reali (3) e immaginarie (3 − 5 = −2)." },
        { type: "num", q: "Qual è il modulo di 5 − 12i?", answer: 13, explain: "√(25 + 144) = √169 = 13." },
        { type: "mc", q: "Quanto vale i⁷?", options: ["−i", "i", "−1"], answer: 0, explain: "7 = 4 + 3, quindi i⁷ = i³ = −i." },
        { type: "tf", q: "Il prodotto di un numero complesso per il suo coniugato è sempre un numero reale non negativo.", answer: true, explain: "z · z̄ = a² + b² ≥ 0." }
      ]
    },
    {
      type: "text",
      title: "La forma trigonometrica",
      html: `<p>Poiché z = a + bi è il punto (a; b), possiamo descriverlo anche con le <b>coordinate polari</b>: la distanza dall'origine <b>r = |z|</b> e l'angolo <b>θ</b> (l'<b>argomento</b>, misurato dall'asse reale positivo in senso antiorario, definito a meno di 2π). Poiché a = r cos θ e b = r sen θ, si ha la <b>forma trigonometrica</b>:</p>
<p style="text-align:center"><b>z = r (cos θ + i sen θ)</b></p>
<p><b>Passaggio dalla forma algebrica:</b> r = √(a² + b²) e θ si ricava da cos θ = a/r, sen θ = b/r (attenzione al quadrante: tan θ = b/a non basta da solo). <b>Esempi:</b></p>
<ul>
<li>z = 1 + i: r = √2, cos θ = sen θ = √2/2 → θ = π/4: z = √2 (cos π/4 + i sen π/4).</li>
<li>z = −1 + √3 i: r = 2, cos θ = −1/2, sen θ = √3/2 → θ = 2π/3.</li>
<li>z = −3: r = 3, θ = π. z = 2i: r = 2, θ = π/2.</li>
</ul>
<p><b>Operazioni in forma trigonometrica</b> (con z₁ = r₁(cos θ₁ + i sen θ₁), z₂ = r₂(cos θ₂ + i sen θ₂)):</p>
<ul>
<li><b>z₁ · z₂ = r₁ r₂ [cos(θ₁ + θ₂) + i sen(θ₁ + θ₂)]</b>: i moduli si <b>moltiplicano</b>, gli argomenti si <b>sommano</b> (conseguenza delle formule di addizione di seno e coseno).</li>
<li><b>z₁ / z₂ = (r₁/r₂) [cos(θ₁ − θ₂) + i sen(θ₁ − θ₂)]</b>: moduli divisi, argomenti sottratti.</li>
<li><b>Formula di De Moivre:</b> <b>zⁿ = rⁿ [cos(nθ) + i sen(nθ)]</b>.</li>
</ul>
<p><b>Significato geometrico.</b> Moltiplicare per un numero complesso significa <b>ruotare</b> (di θ) e <b>scalare</b> (di r) il piano. In particolare moltiplicare per i (r = 1, θ = π/2) è una rotazione di 90° in senso antiorario: il punto (3; 1), cioè 3 + i, diventa i(3 + i) = −1 + 3i, cioè (−1; 3).</p>
<p><b>Esempio con De Moivre.</b> (1 + i)⁸ = (√2)⁸ [cos(8 · π/4) + i sen(8 · π/4)] = 16 (cos 2π + i sen 2π) = <b>16</b>. Con il binomio ci vorrebbero molti più passaggi!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: ruotare un'immagine",
      html: `<p>In un videogioco 2D, un personaggio si trova nella posizione (4; 0) rispetto al centro dello schermo. Per farlo <b>ruotare di 60°</b> attorno al centro si moltiplica il numero complesso z = 4 per e^(iπ/3) = cos 60° + i sen 60° = 1/2 + (√3/2) i: z' = 4 (1/2 + (√3/2) i) = 2 + 2√3 i ≈ 2 + 3,46i, cioè il punto (2; 3,46). Una nuova rotazione di 60° (altra moltiplicazione) lo porta in 4 (cos 120° + i sen 120°) = (−2; 3,46). I motori grafici usano da sempre rotazioni di questo tipo (nello spazio, con i quaternioni, estensione dei complessi): la matematica "immaginaria" è una delle più concrete.</p>`
    },
    {
      type: "text",
      title: "Forma esponenziale e formula di Eulero",
      html: `<p>Eulero scoprì che vale la formula fondamentale:</p>
<p style="text-align:center"><b>e<sup>iθ</sup> = cos θ + i sen θ</b></p>
<p>(con θ in radianti). Ne deriva la <b>forma esponenziale</b> <b>z = r e<sup>iθ</sup></b>, equivalente a quella trigonometrica ma molto più compatta. Le regole del prodotto e della potenza diventano le normali regole degli esponenti: r₁e<sup>iθ₁</sup> · r₂e<sup>iθ₂</sup> = r₁r₂ e<sup>i(θ₁+θ₂)</sup> e (re<sup>iθ</sup>)ⁿ = rⁿ e<sup>inθ</sup>. Per θ = π si ottiene la celebre <b>identità di Eulero</b>:</p>
<p style="text-align:center"><b>e<sup>iπ</sup> + 1 = 0</b></p>
<p>che collega in una sola riga cinque costanti fondamentali: 0, 1, e, π e i. Il coniugato in forma esponenziale è semplicemente z̄ = r e<sup>−iθ</sup>.</p>
<p>La formula di Eulero si può "intuire" dagli sviluppi in serie di eˣ, sen x e cos x (che incontrerai in analisi): sostituendo ix a x nella serie dell'esponenziale, i termini reali formano la serie del coseno e quelli immaginari la serie del seno.</p>`
    },
    {
      type: "text",
      title: "Radici n-esime e teorema fondamentale dell'algebra",
      html: `<p>Dato un numero complesso w = r (cos θ + i sen θ), l'equazione <b>zⁿ = w</b> ha, in ℂ, <b>esattamente n soluzioni distinte</b> (se w ≠ 0), date da:</p>
<p style="text-align:center"><b>z<sub>k</sub> = ⁿ√r · [ cos((θ + 2kπ)/n) + i sen((θ + 2kπ)/n) ]</b>, &nbsp; k = 0, 1, …, n − 1</p>
<p>Hanno tutte lo stesso modulo ⁿ√r, e quindi stanno su una circonferenza, e sono i vertici di un <b>poligono regolare di n lati</b>.</p>
<p><b>Esempio 1: radici cubiche di 8.</b> 8 = 8 (cos 0 + i sen 0): z_k = 2 [cos(2kπ/3) + i sen(2kπ/3)]: z₀ = 2; z₁ = 2 (−1/2 + (√3/2) i) = −1 + √3 i; z₂ = −1 − √3 i. Sono i vertici di un triangolo equilatero inscritto nella circonferenza di raggio 2: oltre alla radice reale 2, l'equazione z³ = 8 ha altre due radici complesse coniugate.</p>
<p><b>Esempio 2: z⁴ = −16.</b> −16 = 16 (cos π + i sen π): z_k = 2 [cos((π + 2kπ)/4) + i sen(…)] → angoli π/4, 3π/4, 5π/4, 7π/4 → le quattro radici <b>±√2 ± √2 i</b>, vertici di un quadrato.</p>
<p><b>Equazioni di secondo grado con Δ &lt; 0.</b> La formula risolutiva funziona in ℂ: se Δ &lt; 0, √Δ = i√|Δ| e le soluzioni sono <b>complesse coniugate</b>. <i>Esempio:</i> x² − 2x + 5 = 0 → Δ = 4 − 20 = −16 → x = (2 ± 4i)/2 = <b>1 ± 2i</b>.</p>
<p><b>Teorema fondamentale dell'algebra</b> (Gauss, 1799): ogni polinomio di grado n ≥ 1 a coefficienti complessi ha <b>esattamente n radici complesse</b>, contate con la loro molteplicità. Per questo ℂ si dice <b>algebricamente chiuso</b>: non servono altri numeri per risolvere equazioni polinomiali. Se i coefficienti sono reali, le radici non reali compaiono a coppie coniugate.</p>`
    },
    {
      type: "remember",
      title: "Quale forma usare?",
      html: `<p><b>Somme e differenze</b>: forma algebrica (si sommano le componenti). <b>Prodotti, quozienti, potenze, radici</b>: forma trigonometrica o esponenziale (si moltiplicano i moduli e si sommano gli argomenti). <b>Quozienti</b> in forma algebrica: moltiplica per il coniugato del denominatore. Controlla sempre il <b>quadrante</b> dell'argomento.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i circuiti in corrente alternata",
      html: `<p>In un circuito in corrente alternata a pulsazione ω, una resistenza R, una bobina (induttanza L) e un condensatore (capacità C) hanno <b>impedenza</b> Z<sub>R</sub> = R, Z<sub>L</sub> = iωL e Z<sub>C</sub> = 1/(iωC) = −i/(ωC). Collegati in serie le impedenze si <b>sommano</b> come numeri complessi: Z = R + i(ωL − 1/(ωC)). Il modulo |Z| dice quanta corrente passa (I = V/|Z|), l'argomento dice di quanto la corrente è <b>sfasata</b> rispetto alla tensione. Esempio: R = 3 Ω e reattanza totale 4 Ω → Z = 3 + 4i, |Z| = 5 Ω e sfasamento arctan(4/3) ≈ 53°. Senza i numeri complessi i calcoli sulle correnti alternate richiederebbero equazioni differenziali.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il paradosso di Bombelli",
      html: `<p>Nel 1545 <b>Gerolamo Cardano</b> pubblicò nell'<i>Ars Magna</i> la formula per le equazioni di terzo grado. Ma per x³ = 15x + 4 la formula portava a radici di numeri negativi, eppure l'equazione ha la soluzione ovvia x = 4! Fu <b>Rafael Bombelli</b> (<i>L'Algebra</i>, 1572) a capire che si poteva "calcolare" con quelle quantità: egli mostrò che ∛(2 + 11i) = 2 + i (infatti (2 + i)³ = 8 + 12i − 6 − i = 2 + 11i) e che, sommando con il coniugato, gli "immaginari" si cancellano e restano x = 4. I numeri complessi nacquero così: non per curiosità, ma per risolvere equazioni <i>reali</i> con soluzioni reali.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Immaginari e frattali",
      html: `<p>Il termine "immaginario" fu usato da <b>Cartesio</b> nel 1637 in senso spregiativo. Il piano complesso fu poi proposto da <b>Wessel</b> (1797), <b>Argand</b> (1806) e <b>Gauss</b>, che nel 1831 introdusse il nome "numeri complessi". Nel Novecento i numeri complessi hanno dato origine ai <b>frattali</b>: l'<b>insieme di Mandelbrot</b> (visualizzato con i computer a partire dagli anni Ottanta) è l'insieme dei numeri complessi c per cui la successione z → z² + c non diverge. In meccanica quantistica poi, la funzione d'onda di una particella è una funzione a valori complessi.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i numeri complessi",
      intro: "i non è più \"strano\" dei numeri negativi: ecco tre modi di vederlo.",
      tabs: [
        {
          label: "🔄 i come rotazione",
          html: `<p>I numeri negativi si capirono quando si vide che moltiplicare per −1 significa <b>girare di 180°</b> la retta numerica. I numeri complessi estendono l'idea: moltiplicare per <b>i</b> significa <b>girare di 90°</b>. Due rotazioni di 90° fanno 180°: i · i = −1! Partendo da 1: 1 → i → −1 → −i → 1. Per questo le potenze di i si ripetono ogni 4. L'unità immaginaria non è "misteriosa": è la rotazione di un quarto di giro.</p>`
        },
        {
          label: "↔️ Coppie ordinate",
          html: `<p>William Rowan Hamilton (1833) definì i complessi senza usare l'«immaginario»: sono <b>coppie ordinate di numeri reali (a, b)</b> con le regole (a, b) + (c, d) = (a + c, b + d) e (a, b) · (c, d) = (ac − bd, ad + bc). La coppia (0, 1) è proprio i, perché (0, 1) · (0, 1) = (−1, 0). Così i non è più un numero "impossibile", ma un oggetto costruito dai numeri reali, e l'esistenza dei complessi è dimostrata con rigore.</p>`
        },
        {
          label: "🧮 Associa potenza e valore",
          html: `<p>Con le potenze di i: collega ciascuna potenza al suo valore.</p>`,
          widget: "match",
          options: { pairs: [["i²", "−1"], ["i³", "−i"], ["i⁴", "1"], ["i⁶", "−1 (stesso di i²)"], ["i⁹", "i"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei numeri complessi",
      nodes: [
        { id: "i", label: "Unità immaginaria", x: 50, y: 6, color: "#6366f1", html: "i² = −1: permette di avere radici di numeri negativi.", why: "Cardano e Bombelli (XVI sec.) la introdussero per risolvere le equazioni cubiche; Hamilton (1833) la costruì come coppia (0, 1) di reali." },
        { id: "alg", label: "Forma algebrica", x: 15, y: 38, color: "#16a34a", html: "z = a + bi; somma e prodotto; coniugato e modulo.", why: "Le operazioni seguono le regole dei polinomi più i² = −1; il quoziente si ottiene moltiplicando per il coniugato." },
        { id: "piano", label: "Piano di Argand-Gauss", x: 50, y: 40, color: "#f59e0b", html: "Ogni complesso è un punto (o vettore) del piano.", why: "Dà un'immagine geometrica a un oggetto algebrico (Wessel, Argand, Gauss): la somma è composizione di vettori, il prodotto una rotazione e dilatazione." },
        { id: "trig", label: "Forma trigonometrica", x: 85, y: 38, color: "#ef4444", html: "z = r(cos θ + i sen θ); De Moivre.", why: "Coordinate polari nel piano complesso; il prodotto somma gli argomenti grazie alle formule di addizione." },
        { id: "esp", label: "Forma esponenziale", x: 85, y: 72, color: "#0ea5e9", html: "z = r e^{iθ}; identità di Eulero.", why: "Eulero scoprì che e^{iθ} = cos θ + i sen θ, unendo esponenziali e goniometria; da qui e^{iπ} + 1 = 0." },
        { id: "rad", label: "Radici e teorema fondamentale", x: 25, y: 80, color: "#a855f7", html: "zⁿ = w ha n soluzioni; ogni polinomio di grado n ha n radici in ℂ.", why: "Gauss (1799) dimostrò che ℂ è algebricamente chiuso: nessun ampliamento ulteriore serve per le equazioni polinomiali." }
      ],
      edges: [
        ["i", "alg", "definisce"],
        ["alg", "piano", "si rappresenta"],
        ["piano", "trig", "coordinate polari"],
        ["trig", "esp", "Eulero"],
        ["trig", "rad", "De Moivre"],
        ["alg", "rad", "equazioni"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: forme e radici",
      questions: [
        { type: "mc", q: "Qual è il modulo e l'argomento di z = −1 + i?", options: ["√2 e 3π/4", "√2 e π/4", "2 e 3π/4"], answer: 0, explain: "r = √(1 + 1) = √2; il punto (−1; 1) è nel II quadrante con angolo 3π/4." },
        { type: "num", q: "Quanto vale (cos 30° + i sen 30°)¹² ? (parte reale)", answer: 1, explain: "Per De Moivre: cos 360° + i sen 360° = 1." },
        { type: "tf", q: "L'equazione z³ = 1 ha tre soluzioni complesse distinte.", answer: true, explain: "Sono 1, −1/2 + (√3/2)i, −1/2 − (√3/2)i: i vertici di un triangolo equilatero sulla circonferenza unitaria." }
      ]
    }
  ],
  glossary: [
    { t: "Unità immaginaria", d: "Il numero i tale che i² = −1." },
    { t: "Numero complesso", d: "Numero della forma a + bi con a e b reali." },
    { t: "Parte reale / immaginaria", d: "a e b nel numero a + bi." },
    { t: "Coniugato", d: "Il numero a − bi, simmetrico di a + bi rispetto all'asse reale." },
    { t: "Modulo", d: "Distanza dall'origine nel piano complesso: √(a² + b²)." },
    { t: "Argomento", d: "Angolo tra l'asse reale positivo e il vettore che rappresenta il numero." },
    { t: "Formula di De Moivre", d: "zⁿ = rⁿ(cos nθ + i sen nθ)." },
    { t: "Formula di Eulero", d: "e^{iθ} = cos θ + i sen θ." },
    { t: "Algebricamente chiuso", d: "Detto di ℂ: ogni polinomio di grado n ha n radici complesse." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quanto vale (1 + 2i)(3 − i)?", options: ["5 + 5i", "3 + 5i", "1 + 5i"], answer: 0, explain: "3 − i + 6i − 2i² = 3 + 5i + 2 = 5 + 5i." },
      { type: "mc", q: "Quanto vale (3 + i)/(1 + i)?", options: ["2 − i", "2 + i", "1 − 2i"], answer: 0, explain: "(3 + i)(1 − i)/2 = (3 − 3i + i − i²)/2 = (4 − 2i)/2 = 2 − i." },
      { type: "num", q: "Qual è il modulo di 6 + 8i?", answer: 10, explain: "√(36 + 64) = 10." },
      { type: "tf", q: "Il coniugato di 3 − 5i è −3 + 5i.", answer: false, explain: "Il coniugato cambia solo il segno della parte immaginaria: 3 + 5i." },
      { type: "mc", q: "La forma trigonometrica di z = −2 è…", options: ["2(cos π + i sen π)", "2(cos 0 + i sen 0)", "2(cos π/2 + i sen π/2)"], answer: 0, explain: "r = 2 e il punto (−2; 0) corrisponde a θ = π." },
      { type: "num", q: "Quanto vale (1 − i)⁴ ? (risposta reale)", answer: -4, explain: "(1 − i)² = −2i; (−2i)² = 4i² = −4." },
      { type: "mc", q: "Le soluzioni di x² + 4 = 0 sono…", options: ["± 2i", "± 2", "nessuna"], answer: 0, explain: "x² = −4 → x = ± √(−4) = ± 2i." },
      { type: "mc", q: "Quante radici complesse ha il polinomio x⁵ − 1?", options: ["5", "1", "2"], answer: 0, explain: "Per il teorema fondamentale dell'algebra, un polinomio di grado 5 ha 5 radici complesse (contate con molteplicità); qui sono tutte distinte." },
      { type: "text", q: "Come si chiama la formula e^{iθ} = cos θ + i sen θ? (cognome dell'autore)", answer: ["eulero", "euler", "formula di eulero"], explain: "È la formula di Eulero, base della forma esponenziale." },
      { type: "order", q: "Metti in ordine i passi per calcolare le radici n-esime di un numero complesso.", items: ["Scrivere il numero in forma trigonometrica", "Calcolare la radice n-esima del modulo", "Dividere per n l'argomento aumentato di 2kπ", "Variare k da 0 a n − 1", "Disporre le radici come vertici di un poligono regolare"], explain: "Si usa la forma trigonometrica, si prende la radice del modulo, si divide l'argomento (più 2kπ) per n e si ottengono n radici." }
    ]
  }
});
