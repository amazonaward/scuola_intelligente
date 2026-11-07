TOPIC('it', {
  id: "p5-mat-potenze-intro",
  title: "Le potenze",
  intro: "Come si scrive in fretta 10 × 10 × 10 × 10 × 10 × 10? Con una <b>potenza</b>: 10<sup>6</sup>! Impariamo che cosa sono <b>base</b> ed <b>esponente</b>, come si calcolano le potenze e perché le <b>potenze di 10</b> sono così utili per scrivere i numeri grandissimi.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Una moltiplicazione “accorciata”",
      html: `<p>Quando moltiplichi <b>lo stesso numero</b> più volte per sé stesso, puoi scriverlo in modo breve con una <b>potenza</b>.</p>
<p>Esempio: <b>2 × 2 × 2 × 2 = 2<sup>4</sup></b> e si legge "due <b>alla quarta</b>".</p>
<ul>
<li>La <b>base</b> (2) è il numero che si ripete, cioè il fattore che si moltiplica.</li>
<li>L'<b>esponente</b> (4), scritto piccolo in alto a destra, dice <b>quante volte</b> la base compare come fattore.</li>
<li>Il risultato (16) si chiama anch'esso <b>potenza</b>.</li>
</ul>
<p>Attenzione all'errore più comune: 2<sup>4</sup> <b>non</b> è 2 × 4 = 8! È 2 × 2 × 2 × 2 = <b>16</b>.</p>`
    },
    {
      type: "svg",
      title: "Base ed esponente",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="130" y="170" font-size="110" font-weight="bold" fill="#1d4ed8" text-anchor="middle">3</text>
<text x="185" y="100" font-size="60" font-weight="bold" fill="#dc2626" text-anchor="middle">4</text>
<text x="300" y="150" font-size="44" fill="#1f2937" text-anchor="middle">=</text>
<text x="460" y="150" font-size="34" fill="#1f2937" text-anchor="middle"><tspan fill="#1d4ed8">3</tspan> × <tspan fill="#1d4ed8">3</tspan> × <tspan fill="#1d4ed8">3</tspan> × <tspan fill="#1d4ed8">3</tspan></text>
<text x="460" y="200" font-size="34" font-weight="bold" fill="#047857" text-anchor="middle">= 81</text>
<path d="M200 70 Q260 40 330 60" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="340" y="64" font-size="18" fill="#dc2626">esponente: quante volte</text>
<path d="M120 190 Q130 240 180 255" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="190" y="262" font-size="18" fill="#1d4ed8">base: il numero che si ripete</text>
<path d="M375 165 L545 165" stroke="#dc2626" stroke-width="3"/>
<text x="460" y="110" font-size="16" fill="#dc2626" text-anchor="middle">4 fattori uguali</text>
</svg>`,
      caption: "3⁴ si legge “tre alla quarta”: la base 3 si moltiplica per sé stessa 4 volte."
    },
    {
      type: "text",
      title: "Come si leggono e come si calcolano",
      html: `<p>Si calcola <b>passo dopo passo</b>, moltiplicando il risultato per la base:</p>
<p>5<sup>3</sup> → 5 × 5 = 25 → 25 × 5 = <b>125</b></p>
<table>
<tr><th>Potenza</th><th>Si legge</th><th>Calcolo</th><th>Risultato</th></tr>
<tr><td>4<sup>2</sup></td><td>quattro alla seconda (al <b>quadrato</b>)</td><td>4 × 4</td><td>16</td></tr>
<tr><td>2<sup>3</sup></td><td>due alla terza (al <b>cubo</b>)</td><td>2 × 2 × 2</td><td>8</td></tr>
<tr><td>3<sup>4</sup></td><td>tre alla quarta</td><td>3 × 3 × 3 × 3</td><td>81</td></tr>
<tr><td>2<sup>5</sup></td><td>due alla quinta</td><td>2 × 2 × 2 × 2 × 2</td><td>32</td></tr>
</table>
<p>Due casi speciali:</p>
<ul>
<li>con esponente <b>1</b> il risultato è la base stessa: 7<sup>1</sup> = 7;</li>
<li>con esponente <b>0</b> il risultato è sempre <b>1</b> (se la base non è 0): 9<sup>0</sup> = 1, 100<sup>0</sup> = 1.</li>
</ul>
<p>E se la base è <b>1</b>? 1<sup>50</sup> = 1 × 1 × … × 1 = <b>1</b>!</p>`
    },
    {
      type: "3d",
      title: "Quadrato e cubo in 3D",
      scene: "blocks",
      options: { mode: "volume", a: 3, b: 3, c: 3 },
      caption: "3 × 3 × 3 = 3³ = 27 cubetti: per questo l'esponente 3 si chiama “cubo”. Prova a mettere l'altezza a 1: vedi un quadrato di 3 × 3 = 3² = 9 cubetti, il “quadrato”."
    },
    {
      type: "quiz",
      title: "Mini-quiz: base ed esponente",
      questions: [
        { type: "mc", q: "In 6<sup>3</sup> qual è la base?", options: ["3", "6", "18"], answer: 1, explain: "La base è il numero grande che si ripete: 6." },
        { type: "num", q: "Quanto fa 2<sup>3</sup>?", answer: 8, explain: "2 × 2 × 2 = 8 (non 2 × 3!)." },
        { type: "tf", q: "5<sup>2</sup> = 10", answer: false, explain: "5<sup>2</sup> = 5 × 5 = 25. 10 sarebbe 5 × 2." },
        { type: "num", q: "Quanto fa 8<sup>0</sup>?", answer: 1, explain: "Ogni numero (diverso da 0) elevato a 0 fa 1." }
      ]
    },
    {
      type: "text",
      title: "Le potenze di 10",
      html: `<p>Le potenze più comode di tutte sono quelle con <b>base 10</b>. Guarda:</p>
<table>
<tr><th>Potenza</th><th>Numero</th><th>Nome</th></tr>
<tr><td>10<sup>0</sup></td><td>1</td><td>unità</td></tr>
<tr><td>10<sup>1</sup></td><td>10</td><td>decina</td></tr>
<tr><td>10<sup>2</sup></td><td>100</td><td>centinaio</td></tr>
<tr><td>10<sup>3</sup></td><td>1 000</td><td>migliaio</td></tr>
<tr><td>10<sup>6</sup></td><td>1 000 000</td><td>milione</td></tr>
<tr><td>10<sup>9</sup></td><td>1 000 000 000</td><td>miliardo</td></tr>
</table>
<p>La regola magica: <b>l'esponente è uguale al numero di zeri</b> dopo l'1. 10<sup>5</sup> = 1 seguito da 5 zeri = 100 000.</p>
<p>Ogni posto del nostro sistema di numerazione vale una potenza di 10: per questo si chiama sistema <b>decimale</b> (in base 10).</p>`
    },
    {
      type: "text",
      title: "Scrivere un numero in forma polinomiale",
      html: `<p>Con le potenze di 10 possiamo "smontare" un numero nelle sue cifre. Si chiama <b>scomposizione polinomiale</b>:</p>
<p><b>4 352</b> = 4 × 1000 + 3 × 100 + 5 × 10 + 2 × 1</p>
<p><b>4 352</b> = 4 × 10<sup>3</sup> + 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 2 × 10<sup>0</sup></p>
<p>E i numeri giganti si scrivono più in fretta: la distanza Terra–Sole è circa <b>150 000 000 km</b>, cioè <b>15 × 10<sup>7</sup> km</b> (gli scienziati scrivono 1,5 × 10<sup>8</sup> km).</p>`
    },
    {
      type: "widget",
      title: "Le potenze sull'abaco",
      widget: "abacus",
      options: { columns: ["uk", "h", "da", "u"], value: 4352 },
      caption: "Ogni asta vale 10 volte quella alla sua destra: u = 10⁰, da = 10¹, h = 10², uk = 10³. Cambia le palline e scrivi il numero in forma polinomiale."
    },
    {
      type: "example",
      title: "Esempio pratico: la catena di messaggi",
      html: `<p>Luca manda un messaggio a <b>3 amici</b>. Ognuno lo manda ad altri 3, e così via. Quante persone lo ricevono a ogni "giro"?</p>
<ul>
<li>1° giro: 3 = <b>3<sup>1</sup></b></li>
<li>2° giro: 3 × 3 = <b>3<sup>2</sup> = 9</b></li>
<li>3° giro: 3 × 3 × 3 = <b>3<sup>3</sup> = 27</b></li>
<li>4° giro: <b>3<sup>4</sup> = 81</b></li>
<li>10° giro: <b>3<sup>10</sup> = 59 049</b> persone!</li>
</ul>
<p>Ecco perché le notizie (anche quelle false!) si diffondono così velocemente: crescono "a potenza".</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le piastrelle e le scatole",
      html: `<p>Il pavimento della cameretta è un quadrato con <b>8 piastrelle per lato</b>. Quante piastrelle in tutto? 8 × 8 = <b>8<sup>2</sup> = 64</b>.</p>
<p>Un magazzino impila scatole a forma di cubo: <b>5</b> in lunghezza, <b>5</b> in larghezza e <b>5</b> in altezza. Quante scatole? 5 × 5 × 5 = <b>5<sup>3</sup> = 125</b>.</p>
<p>Per questo l'esponente 2 si chiama <b>quadrato</b> e l'esponente 3 si chiama <b>cubo</b>!</p>`
    },
    {
      type: "svg",
      title: "Il raddoppio: 2¹, 2², 2³, 2⁴",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fefce8"/>
<g fill="#f97316" stroke="#9a3412" stroke-width="2">
<rect x="40" y="170" width="24" height="24"/><rect x="40" y="198" width="24" height="24"/>
<rect x="130" y="142" width="24" height="24"/><rect x="130" y="170" width="24" height="24"/><rect x="158" y="142" width="24" height="24"/><rect x="158" y="170" width="24" height="24"/>
</g>
<g fill="#22c55e" stroke="#166534" stroke-width="2">
<rect x="240" y="114" width="24" height="24"/><rect x="268" y="114" width="24" height="24"/>
<rect x="240" y="142" width="24" height="24"/><rect x="268" y="142" width="24" height="24"/>
<rect x="240" y="170" width="24" height="24"/><rect x="268" y="170" width="24" height="24"/>
<rect x="240" y="198" width="24" height="24"/><rect x="268" y="198" width="24" height="24"/>
</g>
<g fill="#3b82f6" stroke="#1e3a8a" stroke-width="2">
<rect x="360" y="114" width="24" height="24"/><rect x="388" y="114" width="24" height="24"/><rect x="416" y="114" width="24" height="24"/><rect x="444" y="114" width="24" height="24"/>
<rect x="360" y="142" width="24" height="24"/><rect x="388" y="142" width="24" height="24"/><rect x="416" y="142" width="24" height="24"/><rect x="444" y="142" width="24" height="24"/>
<rect x="360" y="170" width="24" height="24"/><rect x="388" y="170" width="24" height="24"/><rect x="416" y="170" width="24" height="24"/><rect x="444" y="170" width="24" height="24"/>
<rect x="360" y="198" width="24" height="24"/><rect x="388" y="198" width="24" height="24"/><rect x="416" y="198" width="24" height="24"/><rect x="444" y="198" width="24" height="24"/>
</g>
<text x="52" y="255" font-size="20" text-anchor="middle" font-weight="bold">2¹ = 2</text>
<text x="156" y="255" font-size="20" text-anchor="middle" font-weight="bold">2² = 4</text>
<text x="266" y="255" font-size="20" text-anchor="middle" font-weight="bold">2³ = 8</text>
<text x="414" y="255" font-size="20" text-anchor="middle" font-weight="bold">2⁴ = 16</text>
<text x="300" y="50" font-size="22" fill="#7c2d12" text-anchor="middle">Ogni volta che l'esponente cresce di 1, i quadretti raddoppiano</text>
<text x="540" y="180" font-size="26" fill="#7c2d12" text-anchor="middle">…2⁵ = 32</text>
</svg>`,
      caption: "Aggiungere 1 all'esponente vuol dire moltiplicare ancora una volta per la base."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La leggenda degli scacchi",
      html: `<p>Si racconta che l'inventore degli <b>scacchi</b> chiese al re come premio: 1 chicco di riso sulla prima casella, 2 sulla seconda, 4 sulla terza, 8 sulla quarta… raddoppiando fino alla 64ª casella. Il re rise: "Così poco?".</p>
<p>Ma sull'ultima casella servivano <b>2<sup>63</sup></b> chicchi: circa <b>9 miliardi di miliardi</b>! Molto più riso di quanto ne sia mai stato coltivato in tutta la storia dell'umanità.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il googol",
      html: `<p>Un numero con 1 seguito da <b>100 zeri</b>, cioè <b>10<sup>100</sup></b>, si chiama <b>googol</b>. Il nome lo inventò nel 1938 un bambino di 9 anni, Milton Sirotta, nipote del matematico Edward Kasner.</p>
<p>Il nome dell'azienda <b>Google</b> viene proprio da lì (scritto un po' male!). Pensa: gli atomi in tutto l'universo visibile sono "solo" circa 10<sup>80</sup>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Potenza = moltiplicazione di <b>fattori uguali</b>: a<sup>n</sup> = a × a × … × a (n volte).</li>
<li><b>Base</b> = il fattore che si ripete; <b>esponente</b> = quante volte.</li>
<li>Esponente 2 = <b>quadrato</b>; esponente 3 = <b>cubo</b>.</li>
<li>a<sup>1</sup> = a; a<sup>0</sup> = 1 (con a diverso da 0); 1<sup>n</sup> = 1.</li>
<li>10<sup>n</sup> = 1 seguito da <b>n zeri</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le potenze",
      intro: "Se “base” ed “esponente” ti sembrano parole strane, prova una di queste strade: alberi, cubetti, piegature di carta o il modo in cui le scrivono in altri Paesi.",
      tabs: [
        {
          label: "🌳 L'albero dei rami",
          html: `<p>Immagina un albero: il tronco si divide in <b>2 rami</b>, ogni ramo in altri 2, e così via.</p>
<ul>
<li>al 1° livello ci sono 2 rami = 2<sup>1</sup>;</li>
<li>al 2° livello 4 rametti = 2<sup>2</sup>;</li>
<li>al 3° livello 8 rametti = 2<sup>3</sup>.</li>
</ul>
<p>L'<b>esponente</b> è il <b>numero del livello</b>, la <b>base</b> è <b>in quante parti si divide</b> ogni ramo.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g stroke="#78350f" stroke-width="6" fill="none">
<line x1="300" y1="270" x2="300" y2="220"/>
<line x1="300" y1="220" x2="180" y2="160"/><line x1="300" y1="220" x2="420" y2="160"/>
</g>
<g stroke="#92400e" stroke-width="4">
<line x1="180" y1="160" x2="120" y2="100"/><line x1="180" y1="160" x2="240" y2="100"/>
<line x1="420" y1="160" x2="360" y2="100"/><line x1="420" y1="160" x2="480" y2="100"/>
</g>
<g stroke="#16a34a" stroke-width="3">
<line x1="120" y1="100" x2="95" y2="45"/><line x1="120" y1="100" x2="145" y2="45"/>
<line x1="240" y1="100" x2="215" y2="45"/><line x1="240" y1="100" x2="265" y2="45"/>
<line x1="360" y1="100" x2="335" y2="45"/><line x1="360" y1="100" x2="385" y2="45"/>
<line x1="480" y1="100" x2="455" y2="45"/><line x1="480" y1="100" x2="505" y2="45"/>
</g>
<g fill="#22c55e"><circle cx="95" cy="40" r="9"/><circle cx="145" cy="40" r="9"/><circle cx="215" cy="40" r="9"/><circle cx="265" cy="40" r="9"/><circle cx="335" cy="40" r="9"/><circle cx="385" cy="40" r="9"/><circle cx="455" cy="40" r="9"/><circle cx="505" cy="40" r="9"/></g>
<text x="530" y="170" font-size="20" fill="#1f2937">2¹ = 2</text>
<text x="530" y="110" font-size="20" fill="#1f2937">2² = 4</text>
<text x="530" y="50" font-size="20" fill="#1f2937">2³ = 8</text>
</svg>`
        },
        {
          label: "🧊 Cubetti 3D",
          html: `<p>Costruisci un cubo di cubetti: <b>4</b> di lato, <b>4</b> di profondità, <b>4</b> di altezza. Quanti cubetti servono? <b>4 × 4 × 4 = 4<sup>3</sup> = 64</b>.</p>
<p>Gira il modello e conta prima uno strato (4 × 4 = 4<sup>2</sup> = 16), poi moltiplica per gli strati. Cambia i cursori per vedere 2<sup>3</sup>, 5<sup>3</sup>…</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 4, c: 4 }
        },
        {
          label: "📄 Piega il foglio",
          html: `<p>Prendi un foglio e piegalo a metà: hai <b>2</b> strati. Piegalo ancora: <b>4</b>. Ancora: <b>8</b>…</p>
<p>Dopo <b>n</b> piegature hai <b>2<sup>n</sup></b> strati. Dopo 7 piegature (2<sup>7</sup> = 128 strati) è quasi impossibile piegarlo ancora!</p>
<p>Se potessi piegare un foglio sottile 0,1 mm per <b>42 volte</b>, lo spessore (2<sup>42</sup> strati) supererebbe la distanza dalla Terra alla Luna. Le potenze crescono in modo incredibile!</p>`
        },
        {
          label: "🌍 Come si scrive altrove",
          html: `<p>In tutto il mondo si scrive l'esponente in alto a destra: 2<sup>4</sup>. Ma cambia il modo di leggerlo:</p>
<ul>
<li>🇮🇹 "due <b>alla quarta</b>"</li>
<li>🇬🇧🇺🇸 "two <b>to the power of</b> four" o "two to the fourth"</li>
<li>🇫🇷 "deux <b>puissance</b> quatre"</li>
<li>🇩🇪 "zwei <b>hoch</b> vier" (cioè "due <i>in alto</i> quattro")</li>
</ul>
<p>Sulle calcolatrici e nei computer, dove non si può scrivere in piccolo, si usa il simbolo <b>^</b>: <code>2^4</code>. In molti linguaggi di programmazione (come Python) si scrive <code>2**4</code>.</p>`
        },
        {
          label: "➕ Somma ripetuta e prodotto ripetuto",
          html: `<p>Ricordi la moltiplicazione? È un'<b>addizione ripetuta</b>: 3 × 4 = 3 + 3 + 3 + 3.</p>
<p>La potenza è il gradino successivo: una <b>moltiplicazione ripetuta</b>: 3<sup>4</sup> = 3 × 3 × 3 × 3.</p>
<table>
<tr><th>Operazione</th><th>Che cosa ripete</th><th>Esempio</th></tr>
<tr><td>Moltiplicazione</td><td>addizioni</td><td>3 × 4 = 12</td></tr>
<tr><td>Potenza</td><td>moltiplicazioni</td><td>3<sup>4</sup> = 81</td></tr>
</table>
<p>Ecco perché 3<sup>4</sup> è molto più grande di 3 × 4!</p>`
        },
        {
          "label": "🇮🇳 La leggenda della scacchiera (India)",
          "html": "<p>Una famosa <b>leggenda</b> racconta che in <b>India</b> l'inventore degli scacchi (in molte versioni si chiama <b>Sissa</b>) presentò il gioco al re. Il re, felice, gli disse: «Chiedimi quello che vuoi!». L'inventore chiese solo dei chicchi di grano: <b>1</b> chicco sulla prima casella, <b>2</b> sulla seconda, <b>4</b> sulla terza, e così via, <b>raddoppiando</b> ogni volta fino alla casella 64. Il re rise: «Così poco?». La leggenda era già raccontata nel Medioevo da scrittori arabi e persiani.</p><p>Facciamo i conti con le <b>potenze di 2</b>:</p><ul><li>casella 1: 1 = 2<sup>0</sup>; casella 2: 2 = 2<sup>1</sup>; casella 3: 4 = 2<sup>2</sup>…</li><li>sulla casella <b>n</b> ci sono <b>2<sup>n−1</sup></b> chicchi;</li><li>casella 11: 2<sup>10</sup> = 1024; casella 21: 2<sup>20</sup> = più di <b>un milione</b>;</li><li>casella 64: 2<sup>63</sup>, un numero di 19 cifre!</li></ul><p>In tutto servirebbero 2<sup>64</sup> − 1 = <b>18.446.744.073.709.551.615</b> chicchi: molto più del grano raccolto in tutto il mondo in centinaia di anni. Il re non poteva pagare! Le potenze crescono <b>velocissime</b>.</p>",
          "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#fffbeb\"/><rect x=\"36\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"69\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"69\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁰</text><rect x=\"102\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"135\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">2</text><text x=\"135\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2¹</text><rect x=\"168\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"201\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"201\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2²</text><rect x=\"234\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"267\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">8</text><text x=\"267\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2³</text><rect x=\"300\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"333\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">16</text><text x=\"333\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁴</text><rect x=\"366\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"399\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">32</text><text x=\"399\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁵</text><rect x=\"432\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"465\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">64</text><text x=\"465\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁶</text><rect x=\"498\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"531\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">128</text><text x=\"531\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁷</text><text x=\"300\" y=\"140\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Casella n → 2 alla (n − 1) chicchi</text><text x=\"300\" y=\"175\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">casella 11 → 2¹⁰ = 1024</text><text x=\"300\" y=\"200\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">casella 21 → 2²⁰ = 1.048.576 (più di un milione!)</text><text x=\"300\" y=\"235\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">In tutto: 2⁶⁴ − 1 =</text><text x=\"300\" y=\"262\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">18.446.744.073.709.551.615 chicchi</text></svg>"
        },
        {
          "label": "🇨🇳 Il triangolo di Yang Hui (Cina)",
          "html": "<p>Nel <b>1261</b> il matematico <b>cinese</b> <b>Yang Hui</b> pubblicò un triangolo di numeri che in Cina era già noto da circa due secoli (lo usava Jia Xian). In Italia lo chiamiamo <b>triangolo di Tartaglia</b>, in Francia triangolo di Pascal: ma i Cinesi lo conoscevano molto prima!</p><p>Come si costruisce:</p><ol><li>In cima scrivi <b>1</b>.</li><li>Ogni riga comincia e finisce con <b>1</b>.</li><li>Ogni altro numero è la <b>somma dei due numeri sopra</b> di lui: 1 + 2 = 3, 3 + 3 = 6…</li></ol><p>Ora <b>somma i numeri di ogni riga</b>: 1, 2, 4, 8, 16, 32… Sono le <b>potenze di 2</b>! La riga numero n (contando da 0) ha somma <b>2<sup>n</sup></b>.</p><p>Perché? Ogni numero di una riga viene usato <b>due volte</b> per costruire la riga successiva (va a finire nel numero in basso a sinistra e in quello in basso a destra): quindi ogni riga ha una somma <b>doppia</b> della precedente.</p><p>🎯 Scrivi tu la riga successiva: quanto deve fare la somma?</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"230\" cy=\"40\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somma = 1 = 2⁰</text><circle cx=\"202\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"258\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somma = 2 = 2¹</text><circle cx=\"174\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"230\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><circle cx=\"286\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somma = 4 = 2²</text><circle cx=\"146\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"202\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"258\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"314\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somma = 8 = 2³</text><circle cx=\"118\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"118\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"174\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"230\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><circle cx=\"286\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"342\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"342\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somma = 16 = 2⁴</text><circle cx=\"90\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"90\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"146\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"202\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"258\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"314\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"370\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"370\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">somma = 32 = 2⁵</text><text x=\"230\" y=\"296\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">3 + 3 sopra → 6 sotto</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle potenze: tocca un nodo e scopri il perché",
      nodes: [
        { id: "molt", label: "Moltiplicazione", x: 50, y: 6, color: "#2563eb", html: "Operazione che ripete un'addizione: 4 × 3 = 4 + 4 + 4.", why: "Le potenze nascono dalla moltiplicazione proprio come la moltiplicazione nasce dall'addizione: ogni operazione è un'abbreviazione di quella precedente ripetuta." },
        { id: "potenza", label: "Potenza", x: 50, y: 30, color: "#16a34a", html: "Prodotto di fattori tutti uguali: a<sup>n</sup>.", why: "Già i <b>Babilonesi</b> (circa 4000 anni fa) avevano tavole dei quadrati e dei cubi. La scrittura moderna con l'esponente piccolo in alto la introdusse il filosofo e matematico francese <b>René Descartes</b> (Cartesio) nel 1637." },
        { id: "base", label: "Base", x: 18, y: 50, color: "#f59e0b", html: "Il fattore che si ripete.", why: "Si chiama base perché è il numero \"di partenza\" su cui si costruisce tutta la potenza, come la base di un edificio." },
        { id: "esp", label: "Esponente", x: 82, y: 50, color: "#ef4444", html: "Il numero piccolo in alto: quante volte si ripete la base.", why: "Dal latino <i>exponere</i>, \"mettere in mostra, esporre\": è il numero messo in evidenza in alto. Cresce di 1 ogni volta che moltiplichi ancora per la base." },
        { id: "quadcubo", label: "Quadrato e cubo", x: 18, y: 76, color: "#a855f7", html: "a<sup>2</sup> si legge \"a al quadrato\", a<sup>3</sup> \"a al cubo\".", why: "I matematici greci, come <b>Euclide</b>, pensavano i numeri come figure: un numero per sé stesso forma un quadrato di puntini; tre volte forma un cubo. I nomi geometrici sono rimasti." },
        { id: "zero", label: "Esponente 0 e 1", x: 50, y: 62, color: "#0ea5e9", html: "a<sup>1</sup> = a; a<sup>0</sup> = 1.", why: "Guarda la scala 2<sup>3</sup> = 8, 2<sup>2</sup> = 4, 2<sup>1</sup> = 2: ogni volta che l'esponente scende di 1 si <b>divide per la base</b>. Un passo ancora: 2 : 2 = 1, quindi 2<sup>0</sup> = 1. È una convenzione scelta perché tutte le regole continuino a funzionare." },
        { id: "dieci", label: "Potenze di 10", x: 82, y: 76, color: "#14b8a6", html: "10<sup>n</sup> = 1 seguito da n zeri.", why: "Il nostro sistema di numerazione è <b>decimale e posizionale</b>: ogni posto vale 10 volte quello a destra. Probabilmente usiamo il 10 perché abbiamo 10 dita! Le cifre indo-arabe e lo zero arrivarono in Europa con <b>Fibonacci</b> nel 1202." },
        { id: "scientifica", label: "Numeri giganti", x: 50, y: 92, color: "#64748b", html: "Le potenze di 10 servono a scrivere numeri enormi in poco spazio.", why: "Già <b>Archimede</b>, nel III secolo a.C., nel libro <i>Arenario</i>, inventò un modo di contare con \"miriadi di miriadi\" per stimare quanti granelli di sabbia servirebbero a riempire l'universo. Oggi gli scienziati usano la <b>notazione scientifica</b> (es. 1,5 × 10<sup>8</sup> km)." }
      ],
      edges: [
        ["molt", "potenza", "ripetuta diventa"],
        ["potenza", "base", "ha una"],
        ["potenza", "esp", "ha un"],
        ["base", "quadcubo", "per sé 2 o 3 volte"],
        ["esp", "zero", "casi speciali"],
        ["esp", "dieci", "conta gli zeri"],
        ["dieci", "scientifica", "servono per"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: potenze di 10 e problemi",
      questions: [
        { type: "num", q: "Quanti zeri ha 10<sup>6</sup> scritto per esteso?", answer: 6, explain: "L'esponente indica il numero di zeri: 1 000 000." },
        { type: "mc", q: "Come si scrive 1000 con una potenza di 10?", options: ["10<sup>2</sup>", "10<sup>3</sup>", "3<sup>10</sup>"], answer: 1, explain: "1000 = 10 × 10 × 10 = 10<sup>3</sup>." },
        { type: "num", q: "Un quadrato ha 7 piastrelle per lato. Quante piastrelle ci sono in tutto?", answer: 49, explain: "7<sup>2</sup> = 7 × 7 = 49." }
      ]
    }
  ],
  glossary: [
    { t: "Potenza", d: "Moltiplicazione di fattori uguali, scritta in forma breve (es. 2⁵); anche il suo risultato." },
    { t: "Base", d: "Il fattore che si ripete nella potenza." },
    { t: "Esponente", d: "Il numero piccolo in alto: quante volte la base si moltiplica per sé stessa." },
    { t: "Quadrato", d: "Potenza con esponente 2: a × a." },
    { t: "Cubo", d: "Potenza con esponente 3: a × a × a." },
    { t: "Potenza di 10", d: "10 elevato a un esponente: 1 seguito da tanti zeri quanto l'esponente." },
    { t: "Forma polinomiale", d: "Scrittura di un numero come somma di cifre per potenze di 10." },
    { t: "Googol", d: "Il numero 10¹⁰⁰: 1 seguito da 100 zeri." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come si scrive 7 × 7 × 7 × 7 con una potenza?", options: ["7<sup>4</sup>", "4<sup>7</sup>", "7 × 4"], answer: 0, explain: "La base è 7, che compare 4 volte: 7<sup>4</sup>." },
      { type: "num", q: "Quanto fa 3<sup>3</sup>?", answer: 27, explain: "3 × 3 × 3 = 27." },
      { type: "num", q: "Quanto fa 10<sup>4</sup>?", answer: 10000, explain: "1 seguito da 4 zeri: 10 000." },
      { type: "tf", q: "2<sup>5</sup> = 10", answer: false, explain: "2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32. Non si moltiplica base per esponente!" },
      { type: "text", q: "Come si chiama il numero piccolo scritto in alto a destra?", answer: ["esponente", "l'esponente", "l esponente"], explain: "È l'esponente." },
      { type: "mc", q: "Quanto vale 15<sup>1</sup>?", options: ["1", "15", "0"], answer: 1, explain: "Con esponente 1 il risultato è la base stessa." },
      { type: "tf", q: "Qualsiasi numero diverso da 0 elevato a 0 fa 1.", answer: true, explain: "Per convenzione a<sup>0</sup> = 1: è il passo che viene dopo a<sup>1</sup> dividendo per la base." },
      { type: "mc", q: "Come si legge 9<sup>2</sup>?", options: ["nove per due", "nove al quadrato", "nove al cubo"], answer: 1, explain: "Esponente 2: \"al quadrato\"." },
      { type: "order", q: "Ordina dal più piccolo al più grande.", items: ["2<sup>2</sup>", "3<sup>2</sup>", "2<sup>4</sup>", "10<sup>2</sup>"], explain: "2<sup>2</sup> = 4, 3<sup>2</sup> = 9, 2<sup>4</sup> = 16, 10<sup>2</sup> = 100." },
      { type: "num", q: "5 382 = 5 × 10<sup>3</sup> + 3 × 10<sup>?</sup> + 8 × 10 + 2. Quale esponente manca?", answer: 2, explain: "Il 3 occupa il posto delle centinaia: 100 = 10<sup>2</sup>." },
      { type: "num", q: "Un cubo di cubetti ha 6 cubetti per spigolo. Quanti cubetti contiene?", answer: 216, explain: "6<sup>3</sup> = 6 × 6 × 6 = 36 × 6 = 216." }
    ],
    gen: [["power", 3]]
  }
});
