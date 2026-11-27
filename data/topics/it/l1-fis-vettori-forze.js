TOPIC('it', {
  id: "l1-fis-vettori-forze",
  title: "Vettori e forze",
  intro: "Se ti dico «cammina per 5 metri», non basta per farti arrivare in un punto preciso: devo dirti anche <b>in che direzione</b> e <b>in che verso</b>. Alcune grandezze fisiche, come la <b>forza</b>, hanno bisogno di queste informazioni e si descrivono con i <b>vettori</b>. In questa lezione impariamo a sommare i vettori e a conoscere tre forze fondamentali della meccanica: la <b>forza peso</b>, la <b>forza elastica</b> (legge di Hooke) e l'<b>attrito</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Grandezze scalari e vettoriali",
      html: `<p>Le grandezze fisiche si dividono in due grandi famiglie:</p>
<ul>
<li><b>Grandezze scalari</b>: sono descritte da un <b>numero con l'unità di misura</b>. Esempi: massa (3 kg), tempo (5 s), temperatura (20 °C), energia, volume.</li>
<li><b>Grandezze vettoriali</b>: servono un <b>modulo</b> (quanto vale), una <b>direzione</b> (la retta su cui agiscono) e un <b>verso</b> (da che parte), e a volte anche un <b>punto di applicazione</b>. Esempi: spostamento, velocità, accelerazione, <b>forza</b>.</li>
</ul>
<p>Un <b>vettore</b> si rappresenta con una <b>freccia</b>: la lunghezza è proporzionale al modulo, la retta su cui giace è la direzione, la punta indica il verso. Si indica con una lettera con la freccia sopra (<b>v⃗</b>, <b>F⃗</b>); il suo modulo si scrive v oppure |v⃗|.</p>
<p>Due vettori sono <b>uguali</b> se hanno lo stesso modulo, la stessa direzione e lo stesso verso, anche se hanno punti di applicazione diversi. Il vettore <b>opposto</b> di v⃗ ha stesso modulo e direzione, verso contrario (−v⃗).</p>`
    },
    {
      type: "widget",
      title: "Scalare o vettore?",
      widget: "classify",
      options: { groups: ["Scalare", "Vettore"], items: [
        ["Massa", 0],
        ["Forza", 1],
        ["Tempo", 0],
        ["Velocità", 1],
        ["Temperatura", 0],
        ["Spostamento", 1],
        ["Volume", 0],
        ["Accelerazione", 1]
      ] },
      caption: "Se serve anche sapere «in che direzione e verso», è un vettore."
    },
    {
      type: "text",
      title: "Somma di vettori",
      html: `<p>Sommare due vettori significa trovare l'effetto <b>complessivo</b> (il <b>vettore risultante</b>). Non si sommano semplicemente i moduli!</p>
<p><b>Metodo punta-coda.</b> Si disegna il primo vettore; dalla punta si disegna il secondo; il vettore somma va dalla coda del primo alla punta del secondo.</p>
<p><b>Metodo del parallelogramma.</b> Si disegnano i due vettori con la stessa origine e si completa il parallelogramma: la <b>diagonale</b> uscente dall'origine è la somma.</p>
<p><b>Casi particolari</b> (i più importanti nel biennio):</p>
<table>
<tr><th>Situazione</th><th>Modulo della somma</th></tr>
<tr><td>Stessa direzione e stesso verso</td><td>si <b>sommano</b> i moduli: R = a + b</td></tr>
<tr><td>Stessa direzione, versi opposti</td><td>si <b>sottraggono</b> i moduli: R = |a − b|, verso del più grande</td></tr>
<tr><td>Direzioni perpendicolari</td><td><b>teorema di Pitagora</b>: R = √(a² + b²)</td></tr>
</table>
<p>La <b>differenza</b> a⃗ − b⃗ si calcola sommando ad a⃗ l'opposto di b⃗. Il prodotto di un vettore per un <b>numero</b> k ne cambia il modulo (moltiplicato per |k|) e, se k è negativo, anche il verso.</p>`
    },
    {
      type: "svg",
      title: "Somma di due vettori",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="aR" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="aB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="aG" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<text x="160" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Punta-coda</text>
<line x1="40" y1="230" x2="180" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="180" y1="230" x2="250" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="40" y1="230" x2="250" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="110" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="235" y="190" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="120" y="160" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
<text x="480" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Parallelogramma</text>
<line x1="360" y1="230" x2="500" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="360" y1="230" x2="430" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="500" y1="230" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="430" y1="130" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="360" y1="230" x2="570" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="430" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="385" y="175" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="480" y="165" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
</g>
</svg>`,
      caption: "I due metodi danno lo stesso risultato: il vettore somma è la diagonale del parallelogramma."
    },
    {
      type: "example",
      title: "Il tiro alla fune e il battello nel fiume",
      html: `<p><b>Tiro alla fune.</b> La squadra A tira a sinistra con 800 N, la squadra B a destra con 650 N. Stessa direzione, versi opposti: risultante = 800 − 650 = <b>150 N a sinistra</b>. La corda si muove verso A.</p>
<p><b>Il battello.</b> Un battello punta con velocità 4,0 m/s <b>perpendicolarmente</b> alla riva di un fiume che scorre a 3,0 m/s. La velocità rispetto alla riva è: √(4² + 3²) = √25 = <b>5,0 m/s</b>, inclinata verso valle. Il battello arriva sull'altra sponda più a valle del punto da cui è partito.</p>
<p>Se invece i due vettori fossero paralleli e concordi, avresti 4 + 3 = 7 m/s: il modulo della somma dipende dall'angolo tra i vettori.</p>`
    },
    {
      type: "remember",
      title: "Componenti di un vettore",
      html: `<p>Un vettore si può anche <b>scomporre</b> in due vettori perpendicolari (le <b>componenti</b>), di solito lungo gli assi x e y. Le componenti hanno moduli v<sub>x</sub> = v · cos θ e v<sub>y</sub> = v · sen θ, dove θ è l'angolo con l'asse x (la trigonometria la studierai meglio più avanti). Scomporre è l'operazione inversa della somma e permette di sommare molti vettori: si sommano separatamente le componenti x e le componenti y, poi si ricompone con Pitagora.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: vettori",
      questions: [
        { type: "num", q: "Due forze perpendicolari di 6 N e 8 N agiscono sullo stesso punto. Quanto vale la risultante?", answer: 10, tol: 0, unit: "N", explain: "√(6² + 8²) = √100 = 10 N." },
        { type: "num", q: "Due forze di 15 N e 9 N agiscono sulla stessa retta, in versi opposti. Quanto vale la risultante?", answer: 6, tol: 0, unit: "N", explain: "15 − 9 = 6 N, nel verso della forza maggiore." },
        { type: "tf", q: "La somma di due vettori ha sempre per modulo la somma dei loro moduli.", answer: false, explain: "Succede solo se hanno stessa direzione e stesso verso." }
      ]
    },
    {
      type: "text",
      title: "Che cos'è una forza",
      html: `<p>Una <b>forza</b> è una grandezza vettoriale che descrive l'interazione tra corpi. Può produrre due effetti:</p>
<ul>
<li><b>deformare</b> un corpo (una molla che si allunga, una palla di argilla che si schiaccia);</li>
<li><b>cambiare lo stato di moto</b> di un corpo: metterlo in moto, fermarlo, cambiarne la velocità o la direzione (una palla calciata).</li>
</ul>
<p>L'unità di misura nel Sistema Internazionale è il <b>newton</b> (N), in onore di Isaac Newton. Un newton è circa il peso di una mela di 100 g. Lo strumento per misurare le forze è il <b>dinamometro</b>, basato sull'allungamento di una molla.</p>
<p>Le forze si dividono in <b>forze di contatto</b> (spinta di una mano, attrito, forza elastica) e <b>forze a distanza</b> (peso, forza magnetica, forza elettrica).</p>`
    },
    {
      type: "text",
      title: "La forza peso",
      html: `<p>Il <b>peso</b> è la forza con cui un pianeta attira un corpo verso il proprio centro. Si calcola con:</p>
<p style="text-align:center"><b>P = m · g</b></p>
<p>dove <b>m</b> è la massa (kg) e <b>g</b> l'<b>accelerazione di gravità</b>, che sulla superficie della Terra vale in media <b>9,8 m/s²</b> (precisamente 9,81 a latitudini intermedie). Il peso è un <b>vettore</b>: direzione verticale, verso il basso (verso il centro della Terra), punto di applicazione nel baricentro.</p>
<p><b>Massa e peso non sono la stessa cosa:</b></p>
<table>
<tr><th></th><th>Massa</th><th>Peso</th></tr>
<tr><td>Che cos'è</td><td>quantità di materia, inerzia</td><td>forza di attrazione gravitazionale</td></tr>
<tr><td>Unità</td><td>kg</td><td>N</td></tr>
<tr><td>Tipo</td><td>scalare</td><td>vettore</td></tr>
<tr><td>Dipende dal luogo?</td><td>no</td><td>sì (dipende da g)</td></tr>
<tr><td>Strumento</td><td>bilancia a bracci</td><td>dinamometro</td></tr>
</table>
<p>Valori di g: Terra 9,8 m/s²; Luna ≈ 1,6 m/s²; Marte ≈ 3,7 m/s²; Giove ≈ 25 m/s². Una persona di 60 kg pesa circa 588 N sulla Terra, 97 N sulla Luna. La sua <b>massa</b> resta 60 kg ovunque.</p>`
    },
    {
      type: "widget",
      title: "Massa e peso nel Sistema Solare",
      widget: "flashcards",
      options: { cards: [
        { front: "🌍 Terra, 60 kg", back: "g = 9,8 m/s² → P ≈ 588 N" },
        { front: "🌙 Luna, 60 kg", back: "g ≈ 1,6 m/s² → P ≈ 97 N" },
        { front: "🔴 Marte, 60 kg", back: "g ≈ 3,7 m/s² → P ≈ 222 N" },
        { front: "🪐 Giove, 60 kg", back: "g ≈ 25 m/s² → P ≈ 1500 N" },
        { front: "🚀 Spazio profondo, 60 kg", back: "g ≈ 0 → peso ≈ 0, ma la massa resta 60 kg" }
      ] },
      caption: "Cambia il peso, non la massa. Gira le carte per vedere i valori."
    },
    {
      type: "text",
      title: "La forza elastica e la legge di Hooke",
      html: `<p>Una <b>molla</b> (o un elastico) che viene allungata o compressa tende a tornare alla lunghezza iniziale esercitando una <b>forza di richiamo</b>, detta <b>forza elastica</b>. Il fisico inglese <b>Robert Hooke</b> scoprì che, finché la deformazione è piccola, la forza è <b>direttamente proporzionale</b> all'allungamento:</p>
<p style="text-align:center"><b>F = k · Δx</b></p>
<ul>
<li><b>Δx</b> è l'allungamento (o compressione) della molla rispetto alla lunghezza a riposo, in metri;</li>
<li><b>k</b> è la <b>costante elastica</b> della molla, in <b>N/m</b>: una molla rigida ha k grande, una molla morbida k piccolo;</li>
<li>la forza è <b>sempre opposta</b> alla deformazione (per questo spesso si scrive F = −k·Δx).</li>
</ul>
<p>Oltre il <b>limite elastico</b> la molla si deforma in modo permanente e la legge non vale più. Il dinamometro funziona così: più è pesante il corpo appeso, più si allunga la molla; la scala è tarata in newton.</p>
<p><b>Esempio.</b> Una molla con k = 50 N/m viene allungata di 0,20 m: F = 50 × 0,20 = <b>10 N</b>. Per allungarla di 0,40 m servono 20 N (il doppio).</p>`
    },
    {
      type: "svg",
      title: "Il grafico di una molla",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fffbeb"/>
<g font-family="sans-serif">
<line x1="70" y1="250" x2="360" y2="250" stroke="#334155" stroke-width="3"/>
<line x1="70" y1="250" x2="70" y2="30" stroke="#334155" stroke-width="3"/>
<text x="215" y="285" font-size="15" text-anchor="middle" fill="#334155">allungamento Δx (m)</text>
<text x="30" y="140" font-size="15" fill="#334155" transform="rotate(-90 30 140)" text-anchor="middle">forza F (N)</text>
<line x1="70" y1="250" x2="270" y2="80" stroke="#d97706" stroke-width="5"/>
<line x1="270" y1="80" x2="340" y2="60" stroke="#dc2626" stroke-width="5" stroke-dasharray="8 6"/>
<g fill="#334155" font-size="14" text-anchor="middle"><text x="120" y="270">0,1</text><text x="170" y="270">0,2</text><text x="220" y="270">0,3</text></g>
<g fill="#334155" font-size="14" text-anchor="end"><text x="62" y="208">5</text><text x="62" y="165">10</text><text x="62" y="122">15</text></g>
<text x="170" y="100" font-size="15" fill="#92400e" font-weight="bold">pendenza = k</text>
<text x="300" y="120" font-size="14" fill="#991b1b">oltre il limite</text>
<text x="300" y="138" font-size="14" fill="#991b1b">elastico</text>
<rect x="420" y="50" width="26" height="30" fill="#94a3b8"/>
<path d="M433 80 l-14 8 l28 12 l-28 12 l28 12 l-28 12 l28 12 l-14 8" stroke="#d97706" stroke-width="4" fill="none"/>
<rect x="415" y="168" width="36" height="34" rx="4" fill="#2563eb"/>
<text x="433" y="190" font-size="14" fill="#fff" text-anchor="middle">m</text>
<line x1="500" y1="100" x2="500" y2="168" stroke="#16a34a" stroke-width="3"/>
<text x="540" y="140" font-size="15" fill="#166534">Δx</text>
<line x1="433" y1="202" x2="433" y2="248" stroke="#dc2626" stroke-width="4"/>
<text x="470" y="236" font-size="15" fill="#991b1b" font-weight="bold">P = m·g</text>
</g>
</svg>`,
      caption: "Nel tratto elastico il grafico è una retta passante per l'origine: forza e allungamento sono direttamente proporzionali."
    },
    {
      type: "text",
      title: "L'attrito",
      html: `<p>Quando due superfici sono a contatto e una tende a scorrere sull'altra, nasce una forza che si <b>oppone</b> allo scivolamento: l'<b>attrito</b>. Ha direzione parallela alle superfici e verso opposto al moto (o alla tendenza al moto). Dipende dalla <b>natura delle superfici</b> (ruvidità) e dalla forza con cui sono premute l'una contro l'altra (la <b>forza normale</b> N, perpendicolare alla superficie). Su un piano orizzontale, N = P = m·g.</p>
<ul>
<li><b>Attrito statico</b> (corpo fermo): impedisce al corpo di mettersi in moto. Cresce con la forza applicata fino a un valore massimo: <b>F<sub>s,max</sub> = μ<sub>s</sub> · N</b>. Se la forza supera questo valore, il corpo parte.</li>
<li><b>Attrito dinamico</b> o radente (corpo in moto): vale <b>F<sub>d</sub> = μ<sub>d</sub> · N</b>, costante. In genere <b>μ<sub>d</sub> &lt; μ<sub>s</sub></b>: è più difficile far partire un mobile che tenerlo in movimento.</li>
<li><b>Attrito volvente</b>: per un corpo che rotola (ruota, sfera), molto minore dell'attrito radente: per questo la ruota è una grande invenzione.</li>
</ul>
<p>μ (letto «mi») è il <b>coefficiente di attrito</b>, un numero puro che dipende solo dalle due superfici. Nel modello usato al biennio l'attrito <b>non dipende dall'area di contatto</b> né dalla velocità.</p>
<p><b>Esempio.</b> Una cassa di 20 kg su un pavimento orizzontale, con μ<sub>s</sub> = 0,5 e μ<sub>d</sub> = 0,4. N = 20 × 9,8 = 196 N. Per farla partire servono più di 0,5 × 196 = <b>98 N</b>; per tenerla in movimento a velocità costante bastano 0,4 × 196 ≈ <b>78 N</b>.</p>`
    },
    {
      type: "example",
      title: "Pesare con una molla",
      html: `<p>Un dinamometro ha una molla con k = 40 N/m. Appendi uno zaino e la molla si allunga di 0,25 m. La forza elastica equilibra il peso: P = k·Δx = 40 × 0,25 = <b>10 N</b>. La massa dello zaino è m = P/g = 10/9,8 ≈ <b>1,0 kg</b>. Portando lo stesso zaino sulla Luna, la molla si allungherebbe solo di circa 0,04 m (P ≈ 1,6 N): il dinamometro misura il peso, non la massa.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: peso, molla, attrito",
      questions: [
        { type: "num", q: "Calcola il peso di un corpo di 5 kg sulla Terra (g = 9,8 m/s²).", answer: 49, tol: 0.1, unit: "N", explain: "P = m · g = 5 × 9,8 = 49 N." },
        { type: "num", q: "Una molla con k = 200 N/m viene allungata di 5 cm. Quanto vale la forza elastica?", answer: 10, tol: 0.01, unit: "N", explain: "Δx = 0,05 m; F = 200 × 0,05 = 10 N." },
        { type: "mc", q: "Un blocco di 10 kg ha μ_s = 0,3. Con g = 10 m/s², qual è circa la forza minima per farlo partire?", options: ["3 N", "30 N", "100 N", "300 N"], answer: 1, explain: "N = 100 N; F = 0,3 × 100 = 30 N." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i vettori e le forze",
      intro: "Un vettore è «una freccia con un significato». Vediamolo da altre angolazioni.",
      tabs: [
        {
          label: "🗺️ Caccia al tesoro",
          html: "<p>Un vettore è un'istruzione di <b>spostamento</b>: «cammina 3 passi verso est, poi 4 verso nord». Il vettore somma è l'istruzione <b>diretta</b>: sei finito 5 passi a nord-est (Pitagora: 3, 4, 5). Se invece fai 3 passi a est e 3 a ovest, sei tornato al punto di partenza: somma nulla, anche se hai camminato 6 passi.</p>"
        },
        {
          label: "⚖️ Equilibrio di forze",
          html: "<p>Un lampadario appeso a due cavi: il suo peso verso il basso è bilanciato dalla somma delle due tensioni dei cavi, che puntano in alto e un po' di lato. Quando <b>la somma vettoriale di tutte le forze è zero</b>, il corpo è in equilibrio (lo studierai nel prossimo argomento). Questo è il motivo per cui cavi molto inclinati sono tesi più del peso che sorreggono.</p>"
        },
        {
          label: "🔗 Abbina forza e formula",
          html: "<p>Collega ogni forza alla sua formula.</p>",
          widget: "match",
          options: { pairs: [
            ["Forza peso", "P = m · g"],
            ["Forza elastica", "F = k · Δx"],
            ["Attrito dinamico", "F = μd · N"],
            ["Attrito statico massimo", "F = μs · N"]
          ] }
        },
        {
          label: "📊 Disegno dell'attrito",
          html: "<p>Il grafico mostra come l'attrito statico cresce fino al massimo e poi, appena il corpo scivola, scende al valore dinamico.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#f0fdf4'/><g font-family='sans-serif'><line x1='60' y1='220' x2='560' y2='220' stroke='#334155' stroke-width='3'/><line x1='60' y1='220' x2='60' y2='20' stroke='#334155' stroke-width='3'/><path d='M60 220 L240 60 L260 100 L540 100' stroke='#16a34a' stroke-width='5' fill='none'/><line x1='240' y1='60' x2='240' y2='220' stroke='#94a3b8' stroke-width='2' stroke-dasharray='6 5'/><text x='300' y='248' font-size='14' fill='#334155' text-anchor='middle'>forza applicata</text><text x='30' y='120' font-size='14' fill='#334155' transform='rotate(-90 30 120)' text-anchor='middle'>attrito</text><text x='245' y='50' font-size='14' fill='#166534' text-anchor='middle'>massimo statico</text><text x='420' y='88' font-size='14' fill='#166534' text-anchor='middle'>attrito dinamico (costante)</text><text x='150' y='170' font-size='14' fill='#166534'>fermo</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Ut tensio, sic vis",
      html: `<p>Robert Hooke, per non farsi rubare le scoperte, usava pubblicare gli annunci sotto forma di <b>anagrammi</b>. Nel 1676 pubblicò <i>ceiiinosssttuv</i>; solo nel 1678 rivelò la soluzione: <b>«Ut tensio, sic vis»</b>, cioè «come l'allungamento, così la forza». È la legge che oggi porta il suo nome. Fu anche l'uomo che usò per la prima volta il termine «cellula» osservando al microscopio un pezzo di sughero.</p>`
    },
    {
      type: "curiosity",
      title: "Saltare sulla Luna",
      html: `<p>Sulla Luna g vale circa 1,6 m/s², cioè circa <b>un sesto</b> di quella terrestre. Gli astronauti dell'Apollo, con tuta e zaino di molte decine di kg, pesavano un sesto di quanto avrebbero pesato sulla Terra, ma la loro <b>massa</b> era la stessa: per questo mettere in moto o fermare un oggetto richiedeva lo stesso sforzo che sulla Terra (la massa misura l'inerzia), mentre sollevarlo ne richiedeva molto meno.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa dei vettori e delle forze",
      nodes: [
        { id: "vettore", label: "Vettore", x: 50, y: 8, color: "#2563eb", html: "Freccia con modulo, direzione e verso.", why: "Alcune grandezze (forze, velocità) hanno un orientamento che influenza il risultato: due spinte opposte si annullano, due spinte nello stesso verso si sommano. I vettori sono nati per descrivere questa realtà in modo geometrico." },
        { id: "somma", label: "Somma di vettori", x: 15, y: 42, color: "#16a34a", html: "Punta-coda o parallelogramma; Pitagora nei casi perpendicolari.", why: "La regola del parallelogramma era già nota a Newton e a Stevino: nasce dall'osservazione sperimentale che due forze applicate allo stesso punto equivalgono a un'unica forza «diagonale»." },
        { id: "forza", label: "Forza", x: 50, y: 42, color: "#ef4444", html: "Grandezza vettoriale che deforma o cambia lo stato di moto (newton).", why: "Newton, nei Principia (1687), fece della forza il concetto centrale della dinamica: è la causa dei cambiamenti di moto. Prima si pensava che un corpo avesse bisogno di una spinta continua per muoversi." },
        { id: "peso", label: "Peso", x: 85, y: 42, color: "#f59e0b", html: "P = m·g, verso il centro della Terra.", why: "Il peso è un caso della forza di gravitazione universale di Newton: tutti i corpi con massa si attirano. Dipende da g, perciò cambia da un pianeta all'altro, mentre la massa è una proprietà del corpo." },
        { id: "elastica", label: "Forza elastica", x: 28, y: 80, color: "#8b5cf6", html: "F = k·Δx: legge di Hooke.", why: "Hooke osservò (1676-78) che per piccole deformazioni la forza di richiamo cresce in modo proporzionale all'allungamento: è il principio del dinamometro e di ogni molla. Nasce dalle forze elettriche tra gli atomi del materiale." },
        { id: "attrito", label: "Attrito", x: 72, y: 80, color: "#64748b", html: "Forza che si oppone allo scivolamento: statico, dinamico, volvente.", why: "Le superfici, a livello microscopico, sono rugose e le asperità si agganciano; inoltre tra le molecole agiscono forze di adesione. Per questo l'attrito dipende dai materiali e dalla forza che li preme, non dall'area apparente." }
      ],
      edges: [["vettore", "somma", "si combina con"], ["vettore", "forza", "descrive"], ["forza", "peso", "include"], ["forza", "elastica", "include"], ["forza", "attrito", "include"], ["somma", "forza", "dà la risultante delle"]]
    }
  ],
  glossary: [
    { t: "Grandezza scalare", d: "Grandezza descritta da un solo numero con unità di misura." },
    { t: "Vettore", d: "Grandezza con modulo, direzione e verso, rappresentata da una freccia." },
    { t: "Modulo", d: "Intensità (lunghezza) di un vettore." },
    { t: "Risultante", d: "Vettore somma di più vettori." },
    { t: "Newton (N)", d: "Unità di misura della forza nel SI: 1 N = 1 kg·m/s²." },
    { t: "Forza peso", d: "Forza di attrazione gravitazionale su un corpo: P = m·g." },
    { t: "Costante elastica", d: "Rapporto k tra forza elastica e allungamento della molla, in N/m." },
    { t: "Attrito", d: "Forza che si oppone allo scorrimento tra due superfici a contatto." },
    { t: "Forza normale", d: "Forza perpendicolare alla superficie di appoggio, che la superficie esercita sul corpo." },
    { t: "Dinamometro", d: "Strumento che misura le forze tramite l'allungamento di una molla." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste grandezze è vettoriale?", options: ["Massa", "Temperatura", "Forza", "Tempo"], answer: 2, explain: "La forza ha modulo, direzione e verso." },
      { type: "tf", q: "Due vettori con lo stesso modulo sono sempre uguali.", answer: false, explain: "Devono avere anche la stessa direzione e lo stesso verso." },
      { type: "num", q: "Due forze perpendicolari di 9 N e 12 N agiscono sullo stesso punto. Calcola il modulo della risultante.", answer: 15, tol: 0, unit: "N", explain: "√(9² + 12²) = √225 = 15 N." },
      { type: "num", q: "Un corpo di 8 kg: calcola il peso sulla Terra (g = 9,8 m/s²).", answer: 78.4, tol: 0.1, unit: "N", explain: "P = 8 × 9,8 = 78,4 N." },
      { type: "mc", q: "Che cosa cambia portando un oggetto sulla Luna?", options: ["Né la massa né il peso", "La massa, non il peso", "Il peso, non la massa", "Sia la massa che il peso"], answer: 2, explain: "La massa è una proprietà del corpo; il peso dipende da g, che sulla Luna è circa un sesto." },
      { type: "num", q: "Una molla si allunga di 0,12 m sotto una forza di 6 N. Calcola la costante elastica.", answer: 50, tol: 0.1, unit: "N/m", explain: "k = F/Δx = 6/0,12 = 50 N/m." },
      { type: "tf", q: "Secondo la legge di Hooke, raddoppiando l'allungamento si raddoppia la forza elastica (entro il limite elastico).", answer: true, explain: "F = k·Δx: forza e allungamento sono direttamente proporzionali." },
      { type: "mc", q: "Come varia in genere l'attrito dinamico rispetto al massimo attrito statico?", options: ["È maggiore", "È minore", "È sempre uguale", "È nullo"], answer: 1, explain: "In genere μ_d < μ_s: è più facile mantenere in moto un oggetto che farlo partire." },
      { type: "num", q: "Un blocco di 4 kg su un piano orizzontale (g = 9,8 m/s²) ha μ_d = 0,25. Calcola la forza di attrito dinamico.", answer: 9.8, tol: 0.1, unit: "N", explain: "N = 4 × 9,8 = 39,2 N; F = 0,25 × 39,2 = 9,8 N." },
      { type: "order", q: "Ordina in modo crescente il peso di una persona di 60 kg sui seguenti corpi celesti.", items: ["Spazio profondo", "Luna", "Marte", "Terra", "Giove"], explain: "Il peso cresce con g: spazio profondo (≈0) < Luna (1,6) < Marte (3,7) < Terra (9,8) < Giove (≈25 m/s²)." }
    ]
  }
});
