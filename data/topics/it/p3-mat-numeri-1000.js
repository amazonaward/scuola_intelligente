TOPIC('it', {
  id: "p3-mat-numeri-1000",
  title: "I numeri fino a 1000",
  intro: "Fino a ieri contavi fino a 100. Oggi facciamo un salto enorme: arriviamo fino a <b>1000</b>! 🚀 Scopriamo le <b>centinaia</b>, impariamo a leggere, scrivere, scomporre e confrontare i numeri a tre cifre, e conosciamo il grande <b>migliaio</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Dalle unità alle centinaia",
      html: `<p>Il nostro sistema di numerazione si chiama <b>decimale</b> perché lavora a gruppi di <b>dieci</b>:</p>
<ul>
<li><b>10 unità</b> (u) formano <b>1 decina</b> (da) → 10</li>
<li><b>10 decine</b> formano <b>1 centinaio</b> (h) → 100</li>
<li><b>10 centinaia</b> formano <b>1 migliaio</b> (k) → 1000</li>
</ul>
<p>Ogni volta che hai 10 elementi di un ordine, li puoi «cambiare» con 1 elemento dell'ordine più grande, come quando cambi 10 monete da 10 centesimi con 1 euro! 💶</p>
<p>La lettera <b>h</b> delle centinaia viene da <i>hecto</i>, una parola greca che vuol dire «cento»; la <b>k</b> del migliaio viene da <i>kilo</i>, «mille».</p>`
    },
    {
      type: "3d",
      title: "Cubetti, barrette e piastre in 3D",
      scene: "blocks",
      options: { mode: "base10", value: 245 },
      caption: "Il cubetto è 1 unità, la barretta (10 cubetti) è 1 decina, la piastra (10 barrette = 100 cubetti) è 1 centinaio. Muovi il cursore e gira il modello: 245 = 2 piastre, 4 barrette, 5 cubetti."
    },
    {
      type: "text",
      title: "Il valore posizionale: ogni cifra ha il suo posto",
      html: `<p>Un numero fino a 999 si scrive con <b>tre cifre</b> al massimo. Ogni cifra vale in modo diverso a seconda del <b>posto</b> che occupa:</p>
<table>
<tr><th>h (centinaia)</th><th>da (decine)</th><th>u (unità)</th></tr>
<tr><td style="color:#8b5cf6;font-weight:bold">3</td><td style="color:#3b82f6;font-weight:bold">5</td><td style="color:#22c55e;font-weight:bold">6</td></tr>
<tr><td>3 × 100 = 300</td><td>5 × 10 = 50</td><td>6 × 1 = 6</td></tr>
</table>
<p>356 si legge «<b>trecentocinquantasei</b>».</p>
<p>Attenzione alla cifra <b>0</b>: è un «segnaposto», dice che in quel posto non c'è niente. <b>305</b> = 3 h, <b>0</b> da, 5 u (trecentocinque); <b>350</b> = 3 h, 5 da, <b>0</b> u (trecentocinquanta). Senza lo zero non riusciremmo a distinguerli!</p>
<p>Lo stesso <b>3</b> vale 3 in 123, 30 in 132 e 300 in 312: conta il posto!</p>`
    },
    {
      type: "widget",
      title: "L'abaco a tre aste",
      widget: "abacus",
      options: { columns: ["h", "da", "u"], value: 356 },
      caption: "Ogni pallina sull'asta delle h vale 100, sull'asta delle da vale 10, sull'asta delle u vale 1. Prova a fare 407 e poi 999. Che cosa succede se aggiungi ancora 1?"
    },
    {
      type: "text",
      title: "Comporre e scomporre",
      html: `<p><b>Scomporre</b> un numero vuol dire dividerlo nelle sue parti:</p>
<ul>
<li>472 = <b>4 h + 7 da + 2 u</b></li>
<li>472 = <b>400 + 70 + 2</b> (scomposizione additiva)</li>
<li>472 = <b>4 × 100 + 7 × 10 + 2 × 1</b></li>
</ul>
<p><b>Comporre</b> è il contrario: 6 h + 0 da + 8 u = <b>608</b>.</p>
<p>Uno stesso numero si può scomporre anche in altri modi: 472 = 47 da + 2 u, oppure 472 = 3 h + 17 da + 2 u (ho «spezzato» un centinaio in 10 decine). Questo trucco ti servirà moltissimo nelle sottrazioni con il prestito!</p>`
    },
    {
      type: "svg",
      title: "La tabella delle centinaia",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="40" y="30" width="170" height="60" rx="8" fill="#8b5cf6"/>
<rect x="215" y="30" width="170" height="60" rx="8" fill="#3b82f6"/>
<rect x="390" y="30" width="170" height="60" rx="8" fill="#22c55e"/>
<text x="125" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">h</text>
<text x="300" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">da</text>
<text x="475" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">u</text>
<g stroke="#4c1d95" stroke-width="2" fill="#ffffff">
<rect x="40" y="95" width="170" height="80"/><rect x="215" y="95" width="170" height="80"/><rect x="390" y="95" width="170" height="80"/>
</g>
<text x="125" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#7c3aed">4</text>
<text x="300" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#2563eb">7</text>
<text x="475" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#16a34a">2</text>
<text x="125" y="215" font-size="26" text-anchor="middle" fill="#7c3aed">400</text>
<text x="300" y="215" font-size="26" text-anchor="middle" fill="#2563eb">70</text>
<text x="475" y="215" font-size="26" text-anchor="middle" fill="#16a34a">2</text>
<text x="212" y="215" font-size="26" text-anchor="middle" fill="#1f2937">+</text>
<text x="387" y="215" font-size="26" text-anchor="middle" fill="#1f2937">+</text>
<text x="300" y="270" font-size="24" font-weight="bold" text-anchor="middle" fill="#1f2937">quattrocentosettantadue</text>
</svg>`,
      caption: "Ogni cifra nella sua casella: 472 = 400 + 70 + 2."
    },
    {
      type: "quiz",
      title: "Mini-quiz: valore delle cifre",
      questions: [
        { type: "num", q: "In 583, quanto vale la cifra 8?", answer: 80, explain: "L'8 sta al posto delle decine: 8 × 10 = 80." },
        { type: "num", q: "Componi il numero: 7 h + 0 da + 4 u", answer: 704, explain: "Settecentoquattro: lo zero tiene il posto delle decine." },
        { type: "mc", q: "Come si scrive «duecentodiciannove»?", options: ["2019", "219", "209"], answer: 1, explain: "Duecento (200) + diciannove (19) = 219." }
      ]
    },
    {
      type: "text",
      title: "Confrontare e ordinare",
      html: `<p>Per capire quale numero è più grande:</p>
<ol>
<li>Se hanno un numero diverso di cifre, è maggiore quello con <b>più cifre</b>: 1000 &gt; 999, 105 &gt; 98.</li>
<li>Se hanno le stesse cifre, confronta le <b>centinaia</b>: 512 &gt; 498 (5 h &gt; 4 h).</li>
<li>Se le centinaia sono uguali, confronta le <b>decine</b>: 372 &gt; 365.</li>
<li>Se anche le decine sono uguali, confronta le <b>unità</b>: 847 &gt; 843.</li>
</ol>
<p>Ricorda i simboli: <b>&gt;</b> maggiore, <b>&lt;</b> minore, <b>=</b> uguale. Il «becco» aperto guarda sempre il numero più grande! 🐊</p>
<p><b>Precedente e successivo</b>: il successivo di 399 è <b>400</b> (+1); il precedente di 700 è <b>699</b> (−1).</p>`
    },
    {
      type: "widget",
      title: "La retta dei numeri fino a 1000",
      widget: "numberLine",
      options: { min: 0, max: 1000, step: 100, marks: [250, 500, 750, 1000] },
      caption: "Fai salti da 100: 100, 200, 300… Dieci salti ti portano a 1000! Dove si trova 500? È esattamente a metà."
    },
    {
      type: "text",
      title: "Il migliaio: 1000",
      html: `<p>Dopo 999 viene <b>1000</b> (mille): 999 + 1 = 1000. Hai riempito tutte le caselle e devi «cambiare»:</p>
<ul>
<li>10 unità → 1 decina (le unità tornano a 0);</li>
<li>10 decine → 1 centinaio (le decine tornano a 0);</li>
<li>10 centinaia → <b>1 migliaio</b> (le centinaia tornano a 0).</li>
</ul>
<p>Per scrivere 1000 serve una <b>quarta casella</b>: <b>k</b> (migliaia). 1000 = 1 k, 0 h, 0 da, 0 u.</p>
<p>1000 = 10 centinaia = 100 decine = 1000 unità. Il plurale di «mille» è «<b>mila</b>»: duemila, tremila…</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le figurine nella scatola",
      html: `<p>Luca colleziona figurine. Le tiene così: le figurine sciolte (unità), le bustine da 10 (decine) e le scatole da 100 (centinaia).</p>
<p>Ha <b>3 scatole</b>, <b>12 bustine</b> e <b>7 figurine sciolte</b>. Quante figurine ha?</p>
<ul>
<li>12 bustine = 10 bustine + 2 bustine = 1 scatola + 2 bustine</li>
<li>Quindi ha 4 scatole, 2 bustine, 7 sciolte</li>
<li>4 h + 2 da + 7 u = <b>427 figurine</b></li>
</ul>
<p>Quante gliene mancano per arrivare a 1000? Facciamo salti fino ai numeri «tondi»: 427 + 3 = 430, 430 + 70 = 500, 500 + 500 = 1000 → 3 + 70 + 500 = <b>573</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i soldi del salvadanaio",
      html: `<p>Nel salvadanaio di Anna ci sono: 2 banconote da 100 €, 5 banconote da 10 €, 9 monete da 1 €.</p>
<p>Totale: 200 + 50 + 9 = <b>259 €</b>.</p>
<p>Anna vuole comprare una bici da <b>295 €</b>. 259 &lt; 295: non bastano ancora! Le mancano 295 − 259 = <b>36 €</b>.</p>
<p>Gli euro funzionano proprio come h, da, u: 100 €, 10 €, 1 €.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Lo zero è arrivato tardi",
      html: `<p>Le cifre che usiamo (0, 1, 2… 9) si chiamano <b>indo-arabe</b>: furono inventate in <b>India</b>, poi i matematici arabi le fecero conoscere e arrivarono in Italia grazie a <b>Leonardo Fibonacci</b> di Pisa, nel suo libro <i>Liber Abaci</i> del <b>1202</b>. La grande novità era lo <b>zero</b>, che permette il valore posizionale. Prima in Europa si usavano i numeri romani, che lo zero non lo avevano!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La M dei Romani e il fiore di loto degli Egizi",
      html: `<p>I Romani scrivevano <b>C</b> = 100 (da <i>centum</i>), <b>D</b> = 500 e <b>M</b> = 1000 (da <i>mille</i>). Così 356 diventava <b>CCCLVI</b>: lunghissimo! Gli antichi <b>Egizi</b> invece disegnavano: una stanghetta per 1, un archetto per 10, una corda arrotolata per 100 e un <b>fiore di loto</b> 🪷 per 1000.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>10 u = 1 da · 10 da = 1 h · 10 h = 1 k (1000).</li>
<li>Il valore di una cifra dipende dal <b>posto</b>: h, da, u.</li>
<li>Lo <b>0</b> tiene il posto vuoto: 305 ≠ 35.</li>
<li>Scomporre: 472 = 4 h + 7 da + 2 u = 400 + 70 + 2.</li>
<li>Confrontare: prima le h, poi le da, poi le u.</li>
<li>999 + 1 = 1000 (mille).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i numeri fino a 1000",
      intro: "Se l'abaco non ti basta, prova con i soldi, con i numeri cinesi, con i Romani o con il contachilometri.",
      tabs: [
        {
          label: "💶 I soldi",
          html: `<p>Gli euro sono un abaco perfetto:</p>
<ul>
<li>💵 banconota da <b>100 €</b> = 1 centinaio</li>
<li>💵 banconota da <b>10 €</b> = 1 decina</li>
<li>🪙 moneta da <b>1 €</b> = 1 unità</li>
</ul>
<p>Per pagare <b>638 €</b> con meno pezzi possibili: 6 da 100, 3 da 10, 8 da 1. Se il negozio non ha resto e ti dà 10 monete da 1 € al posto di una banconota da 10… è proprio il «cambio» tra decine e unità!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0fdf4"/>
<g fill="#86efac" stroke="#15803d" stroke-width="3">
<rect x="20" y="30" width="100" height="50" rx="6"/><rect x="30" y="40" width="100" height="50" rx="6"/><rect x="40" y="50" width="100" height="50" rx="6"/>
</g>
<text x="90" y="82" font-size="22" font-weight="bold" text-anchor="middle" fill="#14532d">100 €</text>
<text x="90" y="140" font-size="22" text-anchor="middle" fill="#14532d">× 6 = 600</text>
<g fill="#fca5a5" stroke="#b91c1c" stroke-width="3">
<rect x="230" y="40" width="90" height="45" rx="6"/><rect x="240" y="50" width="90" height="45" rx="6"/>
</g>
<text x="285" y="80" font-size="20" font-weight="bold" text-anchor="middle" fill="#7f1d1d">10 €</text>
<text x="285" y="140" font-size="22" text-anchor="middle" fill="#7f1d1d">× 3 = 30</text>
<g fill="#fde047" stroke="#a16207" stroke-width="3">
<circle cx="440" cy="60" r="22"/><circle cx="480" cy="60" r="22"/><circle cx="520" cy="60" r="22"/><circle cx="460" cy="95" r="22"/><circle cx="500" cy="95" r="22"/>
</g>
<text x="480" y="66" font-size="16" font-weight="bold" text-anchor="middle" fill="#713f12">1 €</text>
<text x="480" y="140" font-size="22" text-anchor="middle" fill="#713f12">× 8 = 8</text>
<text x="300" y="195" font-size="30" font-weight="bold" text-anchor="middle" fill="#1f2937">600 + 30 + 8 = 638 €</text>
</svg>`
        },
        {
          label: "🇨🇳 Come in Cina e Giappone",
          html: `<p>In cinese (e in giapponese) i numeri si dicono in modo <b>regolarissimo</b>: si dice proprio quante centinaia, quante decine e quante unità ci sono!</p>
<ul>
<li>356 = 三百五十六 = «<b>tre-cento cinque-dieci sei</b>»</li>
<li>11 = 十一 = «<b>dieci uno</b>» (in italiano «undici» non si capisce!)</li>
<li>20 = 二十 = «<b>due-dieci</b>»</li>
</ul>
<p>Prova a dire i numeri «alla cinese»: 472 = «quattro-cento sette-dieci due». È un modo bellissimo per capire il valore posizionale. Alcuni studiosi pensano che questo aiuti i bambini dell'Asia orientale a imparare i numeri più in fretta!</p>`
        },
        {
          label: "🧊 Cubetti 3D",
          html: `<p>Costruisci il numero con i blocchi: la piastra è 100, la barretta è 10, il cubetto è 1. Prova a fare <b>999</b>: 9 piastre, 9 barrette, 9 cubetti. Ora immagina di aggiungere 1 cubetto: 10 cubetti diventano una barretta, 10 barrette una piastra e 10 piastre, una sopra l'altra, formano un <b>grande cubo da 1000</b>!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 999 }
        },
        {
          label: "🚗 Il contachilometri",
          html: `<p>Hai mai guardato il contachilometri di una macchina vecchia? Ha delle <b>rotelle</b> con le cifre da 0 a 9.</p>
<p>Quando la rotella delle unità passa da 9 a 0, fa scattare di uno la rotella delle decine. Quando quella delle decine passa da 9 a 0, fa scattare le centinaia.</p>
<p>0 9 9 → 1 0 0 · 9 9 9 → 1 0 0 0: tutte le rotelle girano insieme! È il «cambio» del sistema decimale, fatto da una macchina.</p>`
        },
        {
          label: "🏛️ Numeri romani",
          html: `<p>I Romani non avevano il valore posizionale: ogni simbolo vale sempre lo stesso e i valori si sommano (o si sottraggono se un simbolo piccolo sta prima di uno grande).</p>
<table>
<tr><th>Simbolo</th><td>I</td><td>V</td><td>X</td><td>L</td><td>C</td><td>D</td><td>M</td></tr>
<tr><th>Valore</th><td>1</td><td>5</td><td>10</td><td>50</td><td>100</td><td>500</td><td>1000</td></tr>
</table>
<p>Esempi: <b>CCXL</b> = 100 + 100 + (50 − 10) = 240 · <b>CMXCIX</b> = 999 · <b>M</b> = 1000.</p>
<p>Confronta: noi scriviamo 999 con 3 cifre, i Romani con 6 simboli!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei numeri fino a 1000: tocca un nodo e scopri il perché",
      nodes: [
        { id: "decimale", label: "Sistema decimale", x: 50, y: 6, color: "#2563eb", html: "Contiamo a gruppi di dieci.", why: "Quasi sicuramente perché abbiamo <b>10 dita</b>! Non tutti i popoli hanno fatto così: i Maya contavano in base 20 (dita delle mani e dei piedi), i Babilonesi in base 60, da cui vengono i 60 minuti di un'ora." },
        { id: "cifre", label: "10 cifre", x: 20, y: 26, color: "#f59e0b", html: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9.", why: "Sono le cifre indo-arabe: inventate in India, diffuse dai matematici arabi (come al-Khwarizmi, IX secolo) e portate in Europa da Fibonacci nel 1202." },
        { id: "zero", label: "Lo zero", x: 20, y: 52, color: "#64748b", html: "La cifra che indica un posto vuoto.", why: "Il matematico indiano <b>Brahmagupta</b>, nel 628 d.C., fu tra i primi a trattare lo zero come un vero numero con le sue regole. Senza zero non si potrebbe distinguere 35 da 305." },
        { id: "posizione", label: "Valore posizionale", x: 50, y: 40, color: "#a855f7", html: "Una cifra vale di più o di meno a seconda del posto.", why: "È l'idea geniale che rende i calcoli facili: con sole 10 cifre si può scrivere qualunque numero. Spostando una cifra di un posto a sinistra il suo valore diventa 10 volte più grande." },
        { id: "unita", label: "Unità (u)", x: 82, y: 22, color: "#22c55e", html: "Il cubetto: vale 1.", why: "È il punto di partenza: contare uno a uno. Dalla parola latina <i>unus</i>, uno." },
        { id: "decine", label: "Decine (da)", x: 82, y: 46, color: "#3b82f6", html: "10 unità = 1 decina.", why: "Raggruppare per 10 permette di contare in fretta tante cose: invece di 30 oggetti, conti 3 gruppi." },
        { id: "centinaia", label: "Centinaia (h)", x: 82, y: 70, color: "#8b5cf6", html: "10 decine = 1 centinaio = 100.", why: "Il simbolo h viene dal prefisso greco <i>hecto-</i> (cento), che usiamo anche nell'ettolitro (100 litri) e nell'ettaro." },
        { id: "migliaio", label: "Migliaio (k)", x: 50, y: 92, color: "#ef4444", html: "10 centinaia = 1000.", why: "«Mille» viene dal latino <i>mille</i>, il cui plurale era <i>milia</i>: per questo diciamo «duemila». Il simbolo k viene dal greco <i>chílioi</i> (mille), come in chilogrammo e chilometro." },
        { id: "confronto", label: "Confrontare e scomporre", x: 20, y: 80, color: "#14b8a6", html: "472 = 400 + 70 + 2; 512 &gt; 498.", why: "Siccome ogni posto vale 10 volte quello alla sua destra, una sola centinaia in più conta più di qualunque numero di decine e unità: per questo si confrontano prima le centinaia." }
      ],
      edges: [
        ["decimale", "cifre", "usa"],
        ["cifre", "zero", "compreso lo"],
        ["decimale", "posizione", "si basa sul"],
        ["posizione", "unita", "posto delle"],
        ["unita", "decine", "×10"],
        ["decine", "centinaia", "×10"],
        ["centinaia", "migliaio", "×10"],
        ["zero", "posizione", "rende possibile il"],
        ["posizione", "confronto", "permette di"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: confrontare e il migliaio",
      questions: [
        { type: "mc", q: "Quale numero è maggiore?", options: ["689", "698", "669"], answer: 1, explain: "Stesse centinaia (6): confronto le decine, 9 è la più grande → 698." },
        { type: "num", q: "Qual è il successivo di 599?", answer: 600, explain: "599 + 1 = 600: le unità e le decine «cambiano»." },
        { type: "num", q: "Quante centinaia ci sono in 1000?", answer: 10, explain: "10 × 100 = 1000." }
      ]
    }
  ],
  glossary: [
    { t: "Unità (u)", d: "Il singolo elemento: vale 1." },
    { t: "Decina (da)", d: "Gruppo di 10 unità." },
    { t: "Centinaio (h)", d: "Gruppo di 10 decine, cioè 100 unità." },
    { t: "Migliaio (k)", d: "Gruppo di 10 centinaia, cioè 1000 unità." },
    { t: "Cifra", d: "Ciascuno dei 10 simboli con cui si scrivono i numeri (0–9)." },
    { t: "Valore posizionale", d: "Il valore di una cifra dipende dal posto che occupa nel numero." },
    { t: "Scomporre", d: "Dividere un numero nelle sue parti: 472 = 400 + 70 + 2." },
    { t: "Comporre", d: "Formare un numero partendo dalle sue parti: 4 h + 7 da + 2 u = 472." },
    { t: "Precedente", d: "Il numero che viene subito prima (−1)." },
    { t: "Successivo", d: "Il numero che viene subito dopo (+1)." },
    { t: "Sistema decimale", d: "Sistema di numerazione che raggruppa per 10." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Componi il numero: 5 h + 3 da + 9 u", answer: 539, explain: "500 + 30 + 9 = 539." },
      { type: "num", q: "In 742, quanto vale la cifra 7?", answer: 700, explain: "Sta al posto delle centinaia: 7 × 100 = 700." },
      { type: "mc", q: "Come si scrive «novecentosei»?", options: ["960", "906", "9006"], answer: 1, explain: "Nove centinaia, zero decine, sei unità: 906." },
      { type: "tf", q: "305 e 350 sono lo stesso numero.", answer: false, explain: "305 ha 0 decine e 5 unità; 350 ha 5 decine e 0 unità." },
      { type: "num", q: "Qual è il precedente di 800?", answer: 799, explain: "800 − 1 = 799." },
      { type: "mc", q: "Quale scomposizione è giusta per 608?", options: ["600 + 80", "600 + 8", "60 + 8"], answer: 1, explain: "6 h, 0 da, 8 u = 600 + 8." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["98", "189", "198", "891", "1000"], explain: "Prima il numero a due cifre, poi si confrontano le centinaia, le decine, infine 1000." },
      { type: "num", q: "Quante decine ci sono in 1000?", answer: 100, explain: "1000 : 10 = 100 decine." },
      { type: "mc", q: "Quale simbolo va tra 457 … 475?", options: [">", "<", "="], answer: 1, explain: "Stesse centinaia; decine 5 < 7: 457 < 475." },
      { type: "text", q: "Scrivi in lettere il numero 1000.", answer: ["mille"], explain: "1000 si legge «mille»." },
      { type: "num", q: "Luca ha 3 scatole da 100 figurine, 4 bustine da 10 e 6 figurine sciolte. Quante figurine ha?", answer: 346, explain: "300 + 40 + 6 = 346." }
    ],
    gen: [["placeValue", 3]]
  }
});
