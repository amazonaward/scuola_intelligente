TOPIC('it', {
  id: "l4-sci-cinetica-equilibrio",
  title: "Cinetica ed equilibrio chimico",
  intro: "Il diamante è termodinamicamente instabile rispetto alla grafite, eppure il tuo anello non si trasforma in matita: la reazione è <i>possibile</i> ma <i>lentissima</i>. Al contrario un fiammifero acceso rilascia energia in pochi secondi. Sapere <b>se</b> una reazione può avvenire non basta: bisogna anche capire <b>quanto in fretta</b> (<b>cinetica</b>) e <b>fino a che punto</b> si spinge (<b>equilibrio</b>). In questa lezione scoprirai che cosa fa correre le reazioni, come funzionano i catalizzatori (compresi gli enzimi del tuo corpo), perché molte reazioni non finiscono mai del tutto e come prevedere, con il principio di Le Châtelier, che cosa accade quando disturbi un sistema in equilibrio, dall'industria dei fertilizzanti al sangue.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "La velocità di reazione",
      html: `<p>La <b>velocità di reazione</b> misura quanto in fretta i reagenti si consumano o i prodotti si formano: per esempio, per A → B,</p>
<p style="text-align:center"><b>v = − Δ[A] / Δt = + Δ[B] / Δt</b>   (mol/(L·s))</p>
<p>Con [A] indichiamo la concentrazione in mol/L. Poiché i reagenti diminuiscono nel tempo, davanti alla variazione di [A] c'è un segno meno, e la velocità risulta positiva. Se i coefficienti stechiometrici sono diversi da 1 i vari reagenti scompaiono a ritmi diversi: in N₂ + 3 H₂ → 2 NH₃ l'idrogeno si consuma tre volte più in fretta dell'azoto.</p>
<p>Come si spiega la velocità? Con la <b>teoria degli urti</b> (Trautz e Lewis, 1916-1918). Perché due molecole reagiscano devono:</p>
<ol>
<li><b>urtarsi</b>;</li>
<li>con un'<b>energia sufficiente</b> a rompere i vecchi legami: l'<b>energia di attivazione E<sub>a</sub></b>;</li>
<li>con un <b>orientamento</b> favorevole.</li>
</ol>
<p>Solo una piccolissima frazione degli urti è efficace. Il punto di massima energia lungo il cammino di reazione è lo <b>stato di transizione</b> (o complesso attivato): una configurazione instabile, intermedia tra reagenti e prodotti, che dura meno di un picosecondo.</p>`
    },
    {
      type: "svg",
      title: "Il profilo energetico di una reazione",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="260" x2="570" y2="260" stroke="#334155" stroke-width="2"/>
<line x1="60" y1="260" x2="60" y2="25" stroke="#334155" stroke-width="2"/>
<text x="315" y="290" font-size="15" fill="#334155" text-anchor="middle">decorso della reazione</text>
<text x="18" y="145" font-size="15" fill="#334155" text-anchor="middle" transform="rotate(-90 18 145)">energia</text>
<path d="M60 170 L150 170 Q230 170 270 55 Q310 170 400 200 L560 200" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M60 170 L150 170 Q205 170 235 110 Q265 170 330 195 Q360 200 400 200 L560 200" fill="none" stroke="#16a34a" stroke-width="4" stroke-dasharray="8 5"/>
<text x="100" y="155" font-size="15" font-weight="bold" fill="#1f2937">reagenti</text>
<text x="480" y="190" font-size="15" font-weight="bold" fill="#1f2937">prodotti</text>
<text x="275" y="45" font-size="14" fill="#dc2626" font-weight="bold">stato di transizione</text>
<line x1="150" y1="170" x2="150" y2="62" stroke="#dc2626" stroke-width="2"/>
<text x="140" y="120" font-size="15" fill="#dc2626" text-anchor="end" font-weight="bold">Ea</text>
<text x="400" y="100" font-size="15" fill="#16a34a" font-weight="bold">con catalizzatore</text>
<text x="400" y="120" font-size="14" fill="#16a34a">(Ea più bassa)</text>
<line x1="520" y1="170" x2="520" y2="200" stroke="#334155" stroke-width="2"/>
<text x="530" y="190" font-size="15" fill="#334155" font-weight="bold">ΔH</text>
</svg>`,
      caption: "Il catalizzatore offre un percorso con una barriera più bassa: ΔH non cambia, ma si arriva prima. In questa reazione i prodotti sono più bassi dei reagenti: è esotermica."
    },
    {
      type: "text",
      title: "Che cosa fa cambiare la velocità",
      html: `<table>
<tr><th>Fattore</th><th>Perché la velocità cambia</th><th>Esempio</th></tr>
<tr><td><b>Concentrazione</b></td><td>Più particelle per litro, più urti al secondo</td><td>La legna brucia molto più vivacemente nell'ossigeno puro che in aria (21% di O₂)</td></tr>
<tr><td><b>Superficie di contatto</b></td><td>Più superficie esposta, più urti nei reagenti solidi</td><td>La polvere di farina o di carbone è esplosiva, il blocco no</td></tr>
<tr><td><b>Temperatura</b></td><td>Più molecole superano E<sub>a</sub>; un aumento di 10 °C raddoppia o triplica spesso la velocità (regola empirica)</td><td>Il cibo si conserva in frigorifero</td></tr>
<tr><td><b>Catalizzatore</b></td><td>Abbassa E<sub>a</sub> offrendo un cammino alternativo</td><td>Marmitta catalitica, enzimi</td></tr>
<tr><td><b>Natura dei reagenti</b></td><td>Legami diversi hanno E<sub>a</sub> diverse</td><td>Il sodio reagisce con l'acqua all'istante, il ferro arrugginisce in settimane</td></tr>
</table>
<p>La dipendenza dalla temperatura è descritta dall'<b>equazione di Arrhenius</b> (Svante Arrhenius, 1889): <b>k = A · e<sup>−E<sub>a</sub>/RT</sub></b>, dove k è la <i>costante cinetica</i>, T la temperatura assoluta, R la costante dei gas. Essa dice che k cresce in modo <b>esponenziale</b> con T e diminuisce con E<sub>a</sub>. Ecco perché una barriera di soli 10-20 kJ/mol in meno, a parità di altro, rende la reazione enormemente più veloce.</p>`
    },
    {
      type: "text",
      title: "La legge cinetica e l'ordine di reazione",
      html: `<p>Per molte reazioni la velocità si scrive come <b>v = k · [A]<sup>m</sup> · [B]<sup>n</sup></b>, la <b>legge cinetica</b>. Gli esponenti m e n sono gli <b>ordini di reazione</b> rispetto ad A e B, e <b>si determinano sperimentalmente</b>: non coincidono in generale con i coefficienti stechiometrici, perché l'equazione bilanciata riassume una reazione che spesso avviene in più <b>stadi elementari</b> (il <b>meccanismo</b>); lo stadio più lento (<b>stadio determinante</b>) comanda la velocità complessiva, come il casello più lento in autostrada.</p>
<p><b>Come si ricava l'ordine.</b> Si fanno più esperimenti variando una concentrazione per volta. Se, raddoppiando [A], la velocità raddoppia, l'ordine rispetto ad A è 1; se si quadruplica, è 2; se non cambia, è 0.</p>
<p><b>Reazioni del primo ordine</b> (v = k[A]) come i decadimenti radioattivi: il tempo di dimezzamento <b>t<sub>1/2</sub> = 0,693 / k</b> non dipende dalla concentrazione iniziale. Se t<sub>1/2</sub> = 10 min, dopo 30 minuti rimane (1/2)³ = 1/8 della quantità iniziale. Molte reazioni nel corpo (eliminazione di un farmaco dal sangue) seguono una cinetica di questo tipo: ecco perché i medicinali si dosano con intervalli regolari, pensando all'emivita.</p>`
    },
    {
      type: "example",
      title: "Determinare l'ordine dai dati",
      html: `<p>Per la reazione A + B → prodotti si ottengono questi dati iniziali:</p>
<table>
<tr><th>Esperimento</th><th>[A] (mol/L)</th><th>[B] (mol/L)</th><th>v (mol/(L·s))</th></tr>
<tr><td>1</td><td>0,10</td><td>0,10</td><td>2,0·10⁻³</td></tr>
<tr><td>2</td><td>0,20</td><td>0,10</td><td>4,0·10⁻³</td></tr>
<tr><td>3</td><td>0,10</td><td>0,20</td><td>8,0·10⁻³</td></tr>
</table>
<ol>
<li>Da 1 a 2 raddoppia solo [A] e raddoppia v: <b>ordine 1 in A</b>.</li>
<li>Da 1 a 3 raddoppia solo [B] e v quadruplica: <b>ordine 2 in B</b>.</li>
<li>Legge cinetica: <b>v = k [A][B]²</b>; ordine totale 3.</li>
<li>Dall'esperimento 1: k = 2,0·10⁻³ / (0,10 · 0,10²) = <b>2,0 L²/(mol²·s)</b>.</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: cinetica",
      questions: [
        { type: "mc", q: "Che cosa fa un catalizzatore?", options: ["Abbassa l'energia di attivazione senza consumarsi", "Aumenta la resa di equilibrio", "Aumenta la temperatura", "Cambia i prodotti della reazione"], answer: 0, explain: "Il catalizzatore apre una via alternativa con barriera più bassa; alla fine della reazione si ritrova inalterato." },
        { type: "num", q: "Un farmaco ha emivita di 4 ore (cinetica del primo ordine). Che frazione rimane dopo 12 ore? (risposta in decimale)", answer: 0.125, tol: 0.001, explain: "12 ore sono 3 emivite: (1/2)³ = 1/8 = 0,125." },
        { type: "tf", q: "Gli esponenti della legge cinetica sono sempre uguali ai coefficienti dell'equazione bilanciata.", answer: false, explain: "Si determinano sperimentalmente: coincidono con i coefficienti solo per le reazioni elementari." }
      ]
    },
    {
      type: "text",
      title: "I catalizzatori",
      html: `<p>Un <b>catalizzatore</b> aumenta la velocità di una reazione senza essere consumato e <b>non modifica la posizione dell'equilibrio</b>: accelera in egual misura la reazione diretta e quella inversa, quindi si arriva prima allo stesso punto. Si distinguono:</p>
<ul>
<li><b>Catalisi omogenea</b>: catalizzatore e reagenti nella stessa fase (per esempio ioni Cl nell'atmosfera nel ciclo dell'ozono).</li>
<li><b>Catalisi eterogenea</b>: fasi diverse; la reazione avviene sulla superficie del solido. La <b>marmitta catalitica</b> usa platino, palladio e rodio per trasformare CO, idrocarburi incombusti e NOₓ in CO₂, H₂O e N₂.</li>
<li><b>Catalisi enzimatica</b>: gli <b>enzimi</b> sono proteine che catalizzano le reazioni della vita con specificità enorme: la <i>catalasi</i> decompone l'acqua ossigenata (2 H₂O₂ → 2 H₂O + O₂) con velocità di milioni di molecole al secondo per ogni molecola di enzima; il tuo corpo, a 37 °C, non potrebbe vivere senza di essi. Si agganciano al <b>substrato</b> nel <b>sito attivo</b>, come chiave e serratura.</li>
</ul>
<p>Un enzima ha una temperatura e un pH ottimali: troppo caldo e la proteina si <b>denatura</b>; ecco perché la febbre alta è pericolosa e il cibo si cuoce in modo permanente.</p>`
    },
    {
      type: "text",
      title: "Reazioni reversibili ed equilibrio chimico",
      html: `<p>Molte reazioni non arrivano alla scomparsa totale dei reagenti, perché i prodotti possono tornare indietro. Sono <b>reversibili</b> e si scrivono con una doppia freccia:</p>
<p style="text-align:center"><b>N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)</b></p>
<p>All'inizio, con soli reagenti, la reazione diretta è veloce e quella inversa è nulla. Man mano che si formano i prodotti, la reazione inversa accelera, mentre la diretta rallenta. Quando le due velocità si <b>uguagliano</b>, le concentrazioni non cambiano più: è l'<b>equilibrio chimico</b>. Non è un sistema fermo ma un <b>equilibrio dinamico</b>: le molecole continuano a reagire in entrambi i sensi, in modo che tutto resti costante a livello macroscopico (come una scala mobile su cui tante persone salgono e tante scendono).</p>
<p>Al raggiungimento dell'equilibrio, a temperatura costante, si ha:</p>
<p style="text-align:center"><b>K<sub>c</sub> = [C]<sup>c</sup> [D]<sup>d</sup> / ([A]<sup>a</sup> [B]<sup>b</sup>)</b>  per  a A + b B ⇌ c C + d D</p>
<p>È la <b>legge di azione di massa</b> (Guldberg e Waage, 1864). <b>K<sub>c</sub></b>, la <b>costante di equilibrio</b>, dipende solo dalla temperatura (non dalle concentrazioni iniziali né dal catalizzatore). Regole di scrittura: compaiono solo gas e soluti in soluzione; i <b>solidi</b> e i <b>liquidi puri</b> non compaiono. Per i gas si può usare anche K<sub>p</sub>, con le pressioni parziali.</p>
<ul>
<li><b>K ≫ 1</b>: a equilibrio prevalgono i prodotti (la reazione è \"quasi completa\").</li>
<li><b>K ≪ 1</b>: prevalgono i reagenti.</li>
<li><b>K ≈ 1</b>: quantità confrontabili.</li>
</ul>
<p>Il <b>quoziente di reazione Q</b> ha la stessa forma di K ma si calcola con le concentrazioni <i>in un istante qualunque</i>. Confrontando Q e K si capisce in che direzione procede il sistema: se <b>Q &lt; K</b> la reazione procede verso i prodotti, se <b>Q &gt; K</b> verso i reagenti, se Q = K è in equilibrio.</p>`
    },
    {
      type: "svg",
      title: "Come si arriva all'equilibrio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="70" y1="250" x2="560" y2="250" stroke="#334155" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="30" stroke="#334155" stroke-width="2"/>
<text x="315" y="285" font-size="15" fill="#334155" text-anchor="middle">tempo</text>
<text x="25" y="140" font-size="15" fill="#334155" text-anchor="middle" transform="rotate(-90 25 140)">concentrazione</text>
<path d="M70 50 Q140 150 260 168 L545 168" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M70 250 Q140 200 260 190 L545 190" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="130" y="82" font-size="15" font-weight="bold" fill="#2563eb">reagenti</text>
<text x="130" y="232" font-size="15" font-weight="bold" fill="#dc2626">prodotti</text>
<line x1="260" y1="40" x2="260" y2="250" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
<text x="268" y="62" font-size="15" font-weight="bold" fill="#0f172a">equilibrio:</text>
<text x="268" y="82" font-size="14" fill="#0f172a">v diretta = v inversa</text>
<text x="268" y="102" font-size="14" fill="#0f172a">concentrazioni costanti</text>
</svg>`,
      caption: "Le concentrazioni smettono di variare, ma non diventano uguali: dipendono dal valore di K."
    },
    {
      type: "example",
      title: "Calcolare le concentrazioni all'equilibrio",
      html: `<p>La reazione H₂(g) + I₂(g) ⇌ 2 HI(g) ha, a una certa temperatura, <b>K<sub>c</sub> = 50</b> (valore tipico per la sintesi dell'acido iodidrico intorno a 450 °C). Si parte da 1,0 mol/L di H₂ e 1,0 mol/L di I₂, senza HI. Che concentrazioni si hanno all'equilibrio?</p>
<p>Si usa la tabella \"iniziale / variazione / equilibrio\":</p>
<table>
<tr><th></th><th>H₂</th><th>I₂</th><th>HI</th></tr>
<tr><td>iniziale</td><td>1,0</td><td>1,0</td><td>0</td></tr>
<tr><td>variazione</td><td>−x</td><td>−x</td><td>+2x</td></tr>
<tr><td>equilibrio</td><td>1,0 − x</td><td>1,0 − x</td><td>2x</td></tr>
</table>
<p>K<sub>c</sub> = (2x)² / (1,0 − x)² = 50. Estraendo la radice di entrambi i membri: 2x / (1,0 − x) = 7,07, quindi 2x = 7,07 − 7,07x, cioè 9,07x = 7,07 e <b>x ≈ 0,78</b>.</p>
<p>All'equilibrio: [HI] = 2x ≈ <b>1,56 mol/L</b>, [H₂] = [I₂] = 1,0 − 0,78 ≈ <b>0,22 mol/L</b>. Verifica: 1,56² / 0,22² ≈ 50. ✓. Il grosso dei reagenti si è trasformato, ma non tutto: la reazione è \"quasi completa\" ma non completa.</p>`
    },
    {
      type: "text",
      title: "Il principio di Le Châtelier",
      html: `<p>Che cosa succede se si disturba un sistema all'equilibrio? Henry Le Châtelier (1884) formulò una regola qualitativa potentissima:</p>
<div style="background:#ede9fe;border-left:4px solid #7c3aed;padding:8px 12px;border-radius:6px"><b>Se un sistema in equilibrio viene perturbato, esso evolve in modo da contrastare (ridurre) la perturbazione.</b></div>
<table>
<tr><th>Perturbazione</th><th>Il sistema reagisce…</th><th>Cambia K?</th></tr>
<tr><td><b>Aggiunta di un reagente</b></td><td>consumandolo: l'equilibrio si sposta verso i prodotti</td><td>No</td></tr>
<tr><td><b>Sottrazione di un prodotto</b></td><td>producendone altro: si sposta verso i prodotti</td><td>No</td></tr>
<tr><td><b>Aumento della pressione</b> (diminuzione di volume), per i gas</td><td>verso il lato con meno moli di gas</td><td>No</td></tr>
<tr><td><b>Aumento di T</b></td><td>assorbendo calore: verso il verso <i>endotermico</i></td><td><b>Sì</b></td></tr>
<tr><td><b>Catalizzatore</b></td><td>nessuno spostamento: si arriva solo prima</td><td>No</td></tr>
<tr><td><b>Aggiunta di gas inerte a volume costante</b></td><td>nessuno spostamento (le pressioni parziali non cambiano)</td><td>No</td></tr>
</table>
<p>Attenzione: <b>solo la temperatura</b> cambia il valore di K. Concentrazione e pressione spostano le quantità di equilibrio, ma il valore di K resta lo stesso.</p>`
    },
    {
      type: "example",
      title: "La sintesi dell'ammoniaca (Haber-Bosch)",
      html: `<p>N₂ + 3 H₂ ⇌ 2 NH₃, con ΔH = −92 kJ (per 2 mol di NH₃): è esotermica. Si usa per i fertilizzanti. Come conviene lavorare?</p>
<ul>
<li><b>Pressione</b>: a sinistra ci sono 4 mol di gas, a destra 2. Alta pressione sposta verso NH₃. Si lavora a circa <b>150-300 atm</b>.</li>
<li><b>Temperatura</b>: essendo esotermica, una temperatura bassa favorirebbe l'ammoniaca, ma sarebbe troppo lenta. Si sceglie un compromesso: circa <b>400-500 °C</b>.</li>
<li><b>Catalizzatore</b>: ferro con promotori (K₂O, Al₂O₃) rende possibile la velocità a quella temperatura, senza cambiare la resa di equilibrio.</li>
<li><b>Rimozione del prodotto</b>: l'ammoniaca viene liquefatta e allontanata continuamente; i gas non reagiti vengono rimessi in circolo (Le Châtelier applicato all'industria).</li>
</ul>
<p>Il processo mostra il conflitto tra <b>cinetica</b> (T alta per correre) e <b>equilibrio</b> (T bassa per rendere), che nell'industria si risolve con un compromesso economico.</p>`
    },
    {
      type: "widget",
      title: "Dove si sposta l'equilibrio?",
      widget: "match",
      options: {
        pairs: [
          ["N₂ + 3 H₂ ⇌ 2 NH₃: aumento la pressione", "verso NH₃ (meno moli di gas)"],
          ["N₂ + 3 H₂ ⇌ 2 NH₃: tolgo NH₃", "verso NH₃"],
          ["N₂ + 3 H₂ ⇌ 2 NH₃: riscaldo (reazione esotermica)", "verso i reagenti"],
          ["Aggiungo un catalizzatore", "nessuno spostamento"],
          ["Aggiungo altro reagente", "verso i prodotti"]
        ]
      },
      caption: "Abbina la perturbazione alla risposta del sistema (principio di Le Châtelier)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: equilibrio",
      questions: [
        { type: "mc", q: "Per la reazione 2 SO₂ + O₂ ⇌ 2 SO₃, come si scrive Kc?", options: ["[SO₃]² / ([SO₂]² [O₂])", "[SO₃] / ([SO₂] [O₂])", "[SO₂]² [O₂] / [SO₃]²", "2[SO₃] / (2[SO₂] + [O₂])"], answer: 0, explain: "Prodotti al numeratore, reagenti al denominatore, ognuno elevato al proprio coefficiente." },
        { type: "tf", q: "Un catalizzatore aumenta il valore della costante di equilibrio.", answer: false, explain: "K dipende solo dalla temperatura; il catalizzatore accelera entrambe le direzioni senza cambiare K." },
        { type: "num", q: "In un certo istante Q = 5 e K = 20 per una reazione. In quale verso evolve? (1 = verso i prodotti, 2 = verso i reagenti)", answer: 1, explain: "Q < K: ci sono troppo pochi prodotti rispetto all'equilibrio, quindi la reazione procede verso i prodotti." }
      ]
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li><b>Cinetica</b>: quanto veloce (E<sub>a</sub>, urti, T, concentrazione, catalizzatore); <b>equilibrio</b>: fino a dove (K).</li>
<li>Il catalizzatore abbassa E<sub>a</sub> e <b>non</b> sposta l'equilibrio né cambia K.</li>
<li>All'equilibrio v<sub>diretta</sub> = v<sub>inversa</sub>: equilibrio <b>dinamico</b>.</li>
<li>K<sub>c</sub> = prodotti / reagenti con i coefficienti come esponenti; solidi e liquidi puri non compaiono.</li>
<li>Q &lt; K → verso i prodotti; Q &gt; K → verso i reagenti.</li>
<li><b>Le Châtelier</b>: il sistema contrasta la perturbazione; <b>solo T</b> cambia K.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'equilibrio",
      intro: "L'equilibrio dinamico è un'idea sottile: ecco tre immagini per afferrarla.",
      tabs: [
        { label: "🛗 La scala mobile", html: "<p>In un grande magazzino la scala mobile porta persone al primo piano mentre altre scendono. Quando il numero di persone che salgono ogni minuto è uguale a quello di chi scende, il numero di persone al piano superiore <b>non cambia</b>, anche se nessuno sta fermo. Allo stesso modo, all'equilibrio, la velocità della reazione diretta (salire) è uguale a quella inversa (scendere): le concentrazioni sono costanti, ma i singoli atomi continuano a spostarsi.</p>" },
        { label: "🪣 Due secchi", html: "<p>Due secchi uniti da un tubo: il livello dell'acqua nei due secchi si assesta quando i flussi nei due versi si pareggiano. Non è detto che i livelli siano uguali (dipende dalla forma dei secchi, cioè da K). Se versi acqua in un secchio (aggiungi un reagente) il livello si ridistribuisce fino a un nuovo equilibrio. È la versione idraulica del principio di Le Châtelier.</p>" },
        { label: "💃 La sala da ballo", html: "<p>In una festa le persone formano coppie e si separano di continuo. Se la musica è lenta (bassa T) le coppie durano di più, se è veloce (alta T) si separano facilmente: il rapporto coppie/singoli cambia, cioè cambia K. Se arrivano molti nuovi invitati (aumenta un reagente), si formano più coppie. E l'organizzatore che aiuta a presentarsi (catalizzatore) fa avvenire tutto più in fretta ma non cambia la proporzione finale.</p>" },
        { label: "🧪 L'ammoniaca in 3D", html: "<p>Ruota la molecola di NH₃: è il prodotto del processo Haber-Bosch. La reazione trasforma 4 molecole di reagenti gassosi (1 N₂ + 3 H₂) in 2 di prodotto: ecco perché la pressione elevata favorisce l'ammoniaca (meno molecole, meno volume).</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.55, color: "#3b82f6", label: "N" }, { x: 0.9, y: -0.4, z: 0, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.45, y: -0.4, z: 0.78, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.45, y: -0.4, z: -0.78, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2], [0, 3]] } }
      ]
    },
    {
      type: "curiosity",
      title: "La reazione che si autoregola: l'ossigeno nel sangue",
      html: `<p>L'emoglobina e l'ossigeno sono in equilibrio: Hb + 4 O₂ ⇌ Hb(O₂)₄. Nei polmoni, dove [O₂] è alta, l'equilibrio va verso l'emoglobina ossigenata. Nei tessuti, dove [O₂] è bassa e la CO₂ e gli ioni H⁺ sono maggiori, l'equilibrio si sposta verso il rilascio dell'ossigeno: è l'<b>effetto Bohr</b> (Christian Bohr, 1904), un esempio perfetto di Le Châtelier. Il monossido di carbonio è pericoloso perché si lega all'emoglobina più di 200 volte più fortemente dell'ossigeno e sposta l'equilibrio quasi del tutto, anche in quantità minime.</p>`
    },
    {
      type: "curiosity",
      title: "Perché le bibite perdono gas e le stalattiti crescono",
      html: `<p>Nelle grotte calcaree l'acqua piovana ricca di CO₂ scioglie il calcare formando bicarbonato: CaCO₃ + CO₂ + H₂O ⇌ Ca²⁺ + 2 HCO₃⁻. Quando una goccia arriva al soffitto della grotta, perde CO₂ nell'aria: per Le Châtelier l'equilibrio si sposta a sinistra e il carbonato di calcio solido precipita, formando in migliaia di anni stalattiti e stalagmiti. Lo stesso equilibrio, in senso inverso, nel mare è responsabile della formazione dei gusci: ed è per questo che l'aumento della CO₂ atmosferica, acidificando gli oceani, mette a rischio coralli e molluschi.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: cinetica ed equilibrio",
      nodes: [
        { id: "urti", label: "Teoria degli urti", x: 15, y: 12, color: "#2563eb", html: "Reagiscono solo gli urti con energia ≥ E<sub>a</sub> e orientamento giusto.", why: "Nasce dalla teoria cinetica dei gas di Maxwell e Boltzmann (seconda metà dell'Ottocento) ed è stata formulata per le reazioni da Trautz (1916) e Lewis (1918)." },
        { id: "arr", label: "Equazione di Arrhenius", x: 50, y: 12, color: "#16a34a", html: "k = A·e^(−Ea/RT): la velocità cresce esponenzialmente con T.", why: "Arrhenius (1889), partendo da un'idea di van 't Hoff, spiegò perché pochi gradi in più accelerano molto le reazioni: solo le molecole più energetiche superano la barriera." },
        { id: "cat", label: "Catalizzatori ed enzimi", x: 85, y: 12, color: "#f59e0b", html: "Abbassano E<sub>a</sub> senza spostare l'equilibrio.", why: "Il termine \"catalisi\" fu coniato da Berzelius nel 1835. Ostwald (Nobel 1909) chiarì che il catalizzatore non cambia l'equilibrio. Gli enzimi furono cristallizzati da Sumner nel 1926." },
        { id: "eq", label: "Equilibrio dinamico", x: 30, y: 52, color: "#a855f7", html: "v diretta = v inversa: le concentrazioni restano costanti.", why: "Berthollet (1803), osservando la formazione di carbonato di sodio nei laghi salati d'Egitto, intuì che le reazioni possono essere reversibili e dipendere dalle quantità presenti." },
        { id: "k", label: "Costante K e quoziente Q", x: 70, y: 52, color: "#ef4444", html: "K = prodotti/reagenti; confrontando Q e K si prevede il verso.", why: "La legge di azione di massa (Guldberg e Waage, 1864) mostra che l'equilibrio nasce dal bilanciamento delle velocità. K dipende solo da T." },
        { id: "lc", label: "Principio di Le Châtelier", x: 50, y: 88, color: "#0ea5e9", html: "Il sistema contrasta ogni perturbazione.", why: "Le Châtelier (1884) lo formulò per ottimizzare la chimica industriale, e fu poi usato da Haber e Bosch per la sintesi dell'ammoniaca (1909-1913). Si spiega con la termodinamica attraverso la variazione dell'energia libera." }
      ],
      edges: [["urti", "arr", "porta a"], ["arr", "cat", "è modificata da"], ["eq", "k", "si misura con"], ["k", "lc", "permette di prevedere"], ["cat", "eq", "non sposta"], ["urti", "eq", "vale nei due versi"]]
    }
  ],
  glossary: [
    { t: "Velocità di reazione", d: "Variazione di concentrazione di un reagente o di un prodotto nell'unità di tempo." },
    { t: "Energia di attivazione", d: "Energia minima che gli urti devono avere perché la reazione avvenga." },
    { t: "Stato di transizione", d: "Configurazione instabile di massima energia lungo il cammino di reazione." },
    { t: "Legge cinetica", d: "Equazione v = k[A]^m[B]^n che lega la velocità alle concentrazioni; gli ordini sono sperimentali." },
    { t: "Catalizzatore", d: "Sostanza che accelera una reazione abbassando l'energia di attivazione, senza consumarsi e senza spostare l'equilibrio." },
    { t: "Enzima", d: "Proteina che funziona da catalizzatore biologico, specifica per il proprio substrato." },
    { t: "Equilibrio chimico", d: "Stato in cui reazione diretta e inversa hanno la stessa velocità e le concentrazioni sono costanti." },
    { t: "Costante di equilibrio (K)", d: "Rapporto tra le concentrazioni dei prodotti e dei reagenti all'equilibrio, ciascuna elevata al coefficiente; dipende dalla temperatura." },
    { t: "Quoziente di reazione (Q)", d: "Stessa espressione di K calcolata in un istante qualsiasi; confrontato con K indica il verso della reazione." },
    { t: "Principio di Le Châtelier", d: "Un sistema all'equilibrio perturbato evolve in modo da attenuare la perturbazione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Secondo la teoria degli urti, perché aumentare la temperatura accelera una reazione?", options: ["Una frazione maggiore di molecole ha energia ≥ Ea", "Diminuisce l'energia di attivazione", "Cambia la stechiometria", "Aumenta il numero di atomi"], answer: 0, explain: "A temperatura più alta più urti superano la barriera di attivazione (e sono anche più frequenti). L'Ea invece non cambia." },
      { type: "mc", q: "Perché la farina in polvere sospesa in aria può esplodere mentre un sacco chiuso no?", options: ["Aumenta enormemente la superficie di contatto con l'ossigeno", "La farina contiene un catalizzatore", "La farina diventa più calda da sola", "Cambia la reazione chimica"], answer: 0, explain: "La velocità aumenta con la superficie esposta: la polvere brucia in modo quasi istantaneo." },
      { type: "num", q: "Per una reazione di primo ordine con t1/2 = 5 min, quale frazione rimane dopo 15 min? (decimale)", answer: 0.125, tol: 0.001, explain: "15 min = 3 emivite: (1/2)³ = 0,125." },
      { type: "num", q: "Se raddoppiando [A] la velocità quadruplica, qual è l'ordine di reazione rispetto ad A?", answer: 2, tol: 0, explain: "2ⁿ = 4 ⇒ n = 2." },
      { type: "tf", q: "Un catalizzatore sposta l'equilibrio verso i prodotti.", answer: false, explain: "Accelera allo stesso modo la reazione diretta e l'inversa: si arriva prima all'equilibrio, ma nello stesso punto." },
      { type: "mc", q: "Per 2 NO₂(g) ⇌ N₂O₄(g), come si scrive Kc?", options: ["[N₂O₄] / [NO₂]²", "[NO₂]² / [N₂O₄]", "[N₂O₄] / [NO₂]", "[N₂O₄] · [NO₂]²"], answer: 0, explain: "Prodotti sopra, reagenti sotto, con il coefficiente 2 come esponente." },
      { type: "mc", q: "Per N₂ + 3 H₂ ⇌ 2 NH₃, aumentando la pressione l'equilibrio si sposta...", options: ["verso NH₃", "verso N₂ e H₂", "non si sposta", "verso un nuovo elemento"], answer: 0, explain: "Il lato destro ha meno moli di gas (2 contro 4): la pressione favorisce quel lato." },
      { type: "mc", q: "In una reazione esotermica, alzando la temperatura...", options: ["K diminuisce e l'equilibrio si sposta verso i reagenti", "K aumenta", "K non cambia", "il sistema si ferma"], answer: 0, explain: "Il sistema assorbe il calore in eccesso spostandosi verso il verso endotermico (qui l'inverso): K diminuisce." },
      { type: "num", q: "Per A + B ⇌ C, a un certo istante [A] = 1,0 M, [B] = 2,0 M, [C] = 4,0 M, e K = 1,0. Quanto vale Q?", answer: 2, tol: 0.01, explain: "Q = [C] / ([A][B]) = 4,0 / (1,0 · 2,0) = 2,0. Q > K, quindi la reazione procede verso i reagenti." },
      { type: "order", q: "Ordina i passi della tabella ICE per un calcolo di equilibrio.", items: ["Scrivere le concentrazioni iniziali", "Esprimere la variazione con x secondo la stechiometria", "Scrivere le concentrazioni all'equilibrio", "Sostituire nell'espressione di K e risolvere per x"], explain: "Prima i dati iniziali, poi la variazione (−x, +2x...), poi le quantità di equilibrio e infine si impone K." }
    ]
  }
});
