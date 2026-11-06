TOPIC('it', {
  id: "m1-mat-numeri-primi-mcd-mcm",
  title: "Numeri primi, MCD e mcm",
  intro: "I numeri primi sono i \"mattoncini\" con cui si costruiscono tutti gli altri numeri naturali. Impariamo a riconoscerli, a scomporre i numeri in fattori e a usarli per calcolare il <b>Massimo Comun Divisore</b> e il <b>minimo comune multiplo</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Multipli e divisori",
      html: `<p>Partiamo da due parole chiave:</p>
<ul>
<li>un <b>multiplo</b> di un numero si ottiene moltiplicandolo per 0, 1, 2, 3…<br>Multipli di 6: 0, 6, 12, 18, 24, 30… (sono infiniti!)</li>
<li>un <b>divisore</b> di un numero è un numero che lo divide <b>senza resto</b>.<br>Divisori di 12: 1, 2, 3, 4, 6, 12 (sono un numero finito).</li>
</ul>
<p>Le due cose vanno insieme: se 12 è <b>multiplo</b> di 3, allora 3 è <b>divisore</b> di 12. Si dice anche che 12 è <b>divisibile</b> per 3.</p>
<p>Ricorda: <b>1</b> è divisore di tutti i numeri, e ogni numero è divisore di se stesso.</p>`
    },
    {
      type: "remember",
      title: "I criteri di divisibilità",
      html: `<p>Per capire se un numero è divisibile senza fare la divisione:</p>
<table>
<tr><th>Per</th><th>Regola</th><th>Esempio</th></tr>
<tr><td><b>2</b></td><td>l'ultima cifra è pari (0, 2, 4, 6, 8)</td><td>374 ✔️</td></tr>
<tr><td><b>3</b></td><td>la somma delle cifre è divisibile per 3</td><td>411 → 4+1+1 = 6 ✔️</td></tr>
<tr><td><b>4</b></td><td>le ultime due cifre formano un numero divisibile per 4 (o sono 00)</td><td>1.316 → 16 ✔️</td></tr>
<tr><td><b>5</b></td><td>l'ultima cifra è 0 o 5</td><td>845 ✔️</td></tr>
<tr><td><b>9</b></td><td>la somma delle cifre è divisibile per 9</td><td>738 → 7+3+8 = 18 ✔️</td></tr>
<tr><td><b>10, 100…</b></td><td>finisce con uno, due… zeri</td><td>4.500 ✔️</td></tr>
<tr><td><b>11</b></td><td>la differenza tra la somma delle cifre di posto dispari e di posto pari è 0 o multiplo di 11</td><td>693 → (6+3) − 9 = 0 ✔️</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Numeri primi e numeri composti",
      html: `<p>Un numero naturale maggiore di 1 si dice:</p>
<ul>
<li><b>primo</b> se ha <b>solo due divisori</b>: 1 e se stesso. Esempi: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…</li>
<li><b>composto</b> se ha <b>più di due divisori</b>. Esempi: 4 (1, 2, 4), 9 (1, 3, 9), 12 (1, 2, 3, 4, 6, 12).</li>
</ul>
<p>Il numero <b>1</b> non è né primo né composto: ha un solo divisore.</p>
<p>Il <b>2</b> è l'unico numero primo pari: tutti gli altri numeri pari sono divisibili per 2, quindi sono composti.</p>
<p>I numeri primi minori di 50 sono: <b>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il crivello di Eratostene",
      html: `<p>Più di 2.200 anni fa il matematico greco <b>Eratostene</b> inventò un metodo per trovare i numeri primi, come un setaccio (crivello):</p>
<ol>
<li>Scrivi i numeri da 2 a 100.</li>
<li>Il 2 è primo: cerchialo e cancella tutti i suoi multipli (4, 6, 8…).</li>
<li>Il primo numero non cancellato è 3: cerchialo e cancella i suoi multipli (6, 9, 12…).</li>
<li>Poi 5, poi 7… Ripeti finché puoi.</li>
<li>I numeri rimasti (cerchiati) sono tutti i primi fino a 100: sono <b>25</b>.</li>
</ol>
<p>Per arrivare fino a 100 basta cancellare i multipli di 2, 3, 5 e 7, perché 11 × 11 = 121 è già più di 100.</p>`
    },
    {
      type: "widget",
      title: "Primo o composto?",
      widget: "classify",
      options: {
        groups: ["Numero primo", "Numero composto"],
        items: [["2", 0], ["9", 1], ["13", 0], ["21", 1], ["29", 0], ["33", 1], ["37", 0], ["49", 1], ["51", 1], ["53", 0], ["57", 1], ["61", 0]]
      },
      caption: "Attenzione ai tranelli: 51 = 3 × 17 e 57 = 3 × 19 (usa il criterio del 3!)."
    },
    {
      type: "text",
      title: "La scomposizione in fattori primi",
      html: `<p>Il <b>Teorema fondamentale dell'aritmetica</b> dice che ogni numero composto si può scrivere in un unico modo come <b>prodotto di numeri primi</b> (a parte l'ordine).</p>
<p>Per scomporre un numero si divide per i numeri primi, dal più piccolo, finché si arriva a 1. Si usa una tabella a due colonne:</p>
<table>
<tr><td>180</td><td>2</td></tr>
<tr><td>90</td><td>2</td></tr>
<tr><td>45</td><td>3</td></tr>
<tr><td>15</td><td>3</td></tr>
<tr><td>5</td><td>5</td></tr>
<tr><td>1</td><td></td></tr>
</table>
<p>Quindi <b>180 = 2 × 2 × 3 × 3 × 5 = 2² × 3² × 5</b>.</p>
<p>Si può anche usare l'<b>albero dei fattori</b>: si spezza il numero in due fattori qualsiasi, e si continua finché tutte le \"foglie\" sono numeri primi.</p>`
    },
    {
      type: "svg",
      title: "L'albero dei fattori di 180",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<g stroke="#64748b" stroke-width="3">
<line x1="300" y1="45" x2="200" y2="105"/><line x1="300" y1="45" x2="400" y2="105"/>
<line x1="200" y1="125" x2="140" y2="185"/><line x1="200" y1="125" x2="260" y2="185"/>
<line x1="400" y1="125" x2="350" y2="185"/><line x1="400" y1="125" x2="450" y2="185"/>
<line x1="450" y1="205" x2="410" y2="255"/><line x1="450" y1="205" x2="490" y2="255"/>
</g>
<g font-size="20" text-anchor="middle" font-weight="bold">
<circle cx="300" cy="35" r="26" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="300" y="42" fill="#312e81">180</text>
<circle cx="200" cy="115" r="22" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="200" y="122" fill="#312e81">10</text>
<circle cx="400" cy="115" r="22" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="400" y="122" fill="#312e81">18</text>
<circle cx="140" cy="195" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="140" y="202" fill="#713f12">2</text>
<circle cx="260" cy="195" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="260" y="202" fill="#713f12">5</text>
<circle cx="350" cy="195" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="350" y="202" fill="#713f12">2</text>
<circle cx="450" cy="195" r="22" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="450" y="202" fill="#312e81">9</text>
<circle cx="410" cy="265" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="410" y="272" fill="#713f12">3</text>
<circle cx="490" cy="265" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/><text x="490" y="272" fill="#713f12">3</text>
</g>
<text x="20" y="275" font-size="18" fill="#111">180 = 2² × 3² × 5</text>
<text x="20" y="250" font-size="14" fill="#a16207">in giallo: i fattori primi</text>
</svg>`,
      caption: "Si può cominciare in modi diversi (per esempio 180 = 12 × 15), ma alla fine i fattori primi sono sempre gli stessi!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: primi e scomposizione",
      questions: [
        { type: "tf", q: "Il numero 1 è un numero primo.", answer: false, explain: "1 ha un solo divisore: non è né primo né composto." },
        { type: "mc", q: "Quale di questi numeri è primo?", options: ["27", "39", "41", "45"], answer: 2, explain: "41 ha solo i divisori 1 e 41. 27 = 3³, 39 = 3 × 13, 45 = 3² × 5." },
        { type: "mc", q: "Qual è la scomposizione di 72?", options: ["2³ × 3²", "2² × 3³", "2 × 36", "8 × 9"], answer: 0, explain: "72 = 8 × 9 = 2³ × 3². 8 e 9 non sono primi!" },
        { type: "tf", q: "462 è divisibile per 3.", answer: true, explain: "4 + 6 + 2 = 12, che è divisibile per 3." }
      ]
    },
    {
      type: "text",
      title: "Il Massimo Comun Divisore (MCD)",
      html: `<p>Il <b>MCD</b> di due o più numeri è il <b>più grande</b> tra i loro <b>divisori comuni</b>.</p>
<p><b>Metodo 1 – elenco dei divisori</b>: MCD(12, 18)?<br>Divisori di 12: 1, 2, <b>3</b>, 4, <b>6</b>, 12 – Divisori di 18: 1, 2, 3, 6, 9, 18.<br>Comuni: 1, 2, 3, 6 → <b>MCD = 6</b>.</p>
<p><b>Metodo 2 – scomposizione</b> (più veloce con numeri grandi):</p>
<ol>
<li>Scomponi i numeri in fattori primi.</li>
<li>Prendi solo i fattori <b>comuni</b>, con l'esponente <b>più piccolo</b>.</li>
<li>Moltiplicali.</li>
</ol>
<p>MCD(60, 84): 60 = 2² × 3 × 5; 84 = 2² × 3 × 7. Comuni: 2² e 3 → MCD = 4 × 3 = <b>12</b>.</p>
<p>Se il MCD è 1, i numeri si dicono <b>primi tra loro</b> (es. 8 e 15).</p>`
    },
    {
      type: "text",
      title: "Il minimo comune multiplo (mcm)",
      html: `<p>Il <b>mcm</b> di due o più numeri è il <b>più piccolo</b> tra i loro <b>multipli comuni</b> (diverso da 0).</p>
<p><b>Metodo 1 – elenco dei multipli</b>: mcm(4, 6)?<br>Multipli di 4: 4, 8, <b>12</b>, 16, 20, 24… – Multipli di 6: 6, <b>12</b>, 18, 24…<br>→ <b>mcm = 12</b>.</p>
<p><b>Metodo 2 – scomposizione</b>:</p>
<ol>
<li>Scomponi i numeri in fattori primi.</li>
<li>Prendi i fattori <b>comuni e non comuni</b>, ciascuno una volta, con l'esponente <b>più grande</b>.</li>
<li>Moltiplicali.</li>
</ol>
<p>mcm(60, 84): 60 = 2² × 3 × 5; 84 = 2² × 3 × 7 → 2² × 3 × 5 × 7 = <b>420</b>.</p>
<p>Trucco di controllo per due numeri: <b>MCD × mcm = prodotto dei due numeri</b>. Infatti 12 × 420 = 5.040 = 60 × 84 ✔️</p>`
    },
    {
      type: "example",
      title: "Esempio pratico (MCD): i sacchetti di caramelle",
      html: `<p>Hai <b>24 caramelle alla fragola</b> e <b>36 al limone</b>. Vuoi preparare sacchetti tutti uguali, usando tutte le caramelle, nel <b>maggior numero possibile</b>. Quanti sacchetti?</p>
<p>Il numero di sacchetti deve dividere sia 24 sia 36, ed essere il più grande possibile: è il <b>MCD</b>.</p>
<p>24 = 2³ × 3; 36 = 2² × 3² → MCD = 2² × 3 = <b>12 sacchetti</b>.</p>
<p>In ogni sacchetto: 24 : 12 = <b>2 alla fragola</b> e 36 : 12 = <b>3 al limone</b>.</p>
<p>Parole spia del MCD: \"il più grande\", \"dividere in parti uguali\", \"senza avanzi\".</p>`
    },
    {
      type: "example",
      title: "Esempio pratico (mcm): gli autobus",
      html: `<p>Alla fermata, l'autobus <b>A</b> passa ogni <b>12 minuti</b> e l'autobus <b>B</b> ogni <b>18 minuti</b>. Alle 8:00 partono insieme. Quando ripartiranno di nuovo insieme?</p>
<p>Cerchiamo il primo tempo che è multiplo sia di 12 sia di 18: è il <b>mcm</b>.</p>
<p>12 = 2² × 3; 18 = 2 × 3² → mcm = 2² × 3² = <b>36 minuti</b>.</p>
<p>Ripartiranno insieme alle <b>8:36</b>.</p>
<p>Parole spia del mcm: \"di nuovo insieme\", \"contemporaneamente\", \"il più piccolo\", eventi che si ripetono.</p>`
    },
    {
      type: "curiosity",
      title: "Le cicale matematiche",
      html: `<p>In Nord America vivono cicale che restano sotto terra per <b>13 o 17 anni</b> e poi escono tutte insieme, a miliardi! 13 e 17 sono numeri primi.</p>
<p>Gli scienziati pensano che sia un \"trucco\" contro i predatori: se un predatore ha un ciclo di vita di 2, 3, 4 o 6 anni, con un ciclo primo le cicale lo incontrano più raramente. Per esempio, il mcm tra 17 e 6 è 102: un incontro ogni 102 anni!</p>`
    },
    {
      type: "curiosity",
      title: "I numeri primi proteggono i tuoi segreti",
      html: `<p>Euclide dimostrò, più di 2.300 anni fa, che i numeri primi sono <b>infiniti</b>.</p>
<p>Oggi i numeri primi giganti (con centinaia di cifre) servono per la <b>crittografia</b>: proteggono i messaggi in chat, le password e i pagamenti online. Moltiplicare due primi enormi è facile per un computer, ma tornare indietro e scoprire quali erano è difficilissimo!</p>
<p>Il numero primo più grande conosciuto ha più di <b>41 milioni di cifre</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire primi, MCD e mcm",
      intro: "Ci sono tante strade per arrivare allo stesso risultato. In giro per il mondo gli studenti usano metodi diversi: scegli quello che senti più tuo.",
      tabs: [
        {
          label: "🧊 Rettangoli di cubetti (3D)",
          html: "<p>Prendi 12 cubetti: puoi disporli in rettangoli diversi: 1 × 12, 2 × 6, 3 × 4. I lati dei rettangoli sono proprio i <b>divisori</b> di 12.</p><p>Ora prova con 7 cubetti: l'unico rettangolo possibile è una fila 1 × 7. Un numero è <b>primo</b> quando si può fare <b>solo la fila</b>! Cambia i numeri con i cursori e cerca i numeri «solo-fila».</p>",
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "🕸️ Il crivello di Eratostene",
          html: "<p>Eratostene (III sec. a.C.) inventò un «setaccio»: scrivi i numeri, cancella 1, poi cerchia il 2 e cancella tutti i suoi multipli; cerchia il primo numero non cancellato (3) e cancella i suoi multipli; poi il 5, il 7… Quelli che restano sono i numeri primi. Ecco il risultato fino a 30: i <b>verdi</b> sono primi.</p>",
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><g font-size="20" font-weight="bold" text-anchor="middle"><rect x="10" y="10" width="54" height="54" fill="#e5e7eb"/><text x="37" y="44" fill="#9ca3af">1</text><rect x="68" y="10" width="54" height="54" fill="#86efac"/><text x="95" y="44" fill="#14532d">2</text><rect x="126" y="10" width="54" height="54" fill="#86efac"/><text x="153" y="44" fill="#14532d">3</text><rect x="184" y="10" width="54" height="54" fill="#fecaca"/><text x="211" y="44" fill="#991b1b">4</text><rect x="242" y="10" width="54" height="54" fill="#86efac"/><text x="269" y="44" fill="#14532d">5</text><rect x="300" y="10" width="54" height="54" fill="#fecaca"/><text x="327" y="44" fill="#991b1b">6</text><rect x="358" y="10" width="54" height="54" fill="#86efac"/><text x="385" y="44" fill="#14532d">7</text><rect x="416" y="10" width="54" height="54" fill="#fecaca"/><text x="443" y="44" fill="#991b1b">8</text><rect x="474" y="10" width="54" height="54" fill="#fecaca"/><text x="501" y="44" fill="#991b1b">9</text><rect x="532" y="10" width="54" height="54" fill="#fecaca"/><text x="559" y="44" fill="#991b1b">10</text><rect x="10" y="70" width="54" height="54" fill="#86efac"/><text x="37" y="104" fill="#14532d">11</text><rect x="68" y="70" width="54" height="54" fill="#fecaca"/><text x="95" y="104" fill="#991b1b">12</text><rect x="126" y="70" width="54" height="54" fill="#86efac"/><text x="153" y="104" fill="#14532d">13</text><rect x="184" y="70" width="54" height="54" fill="#fecaca"/><text x="211" y="104" fill="#991b1b">14</text><rect x="242" y="70" width="54" height="54" fill="#fecaca"/><text x="269" y="104" fill="#991b1b">15</text><rect x="300" y="70" width="54" height="54" fill="#fecaca"/><text x="327" y="104" fill="#991b1b">16</text><rect x="358" y="70" width="54" height="54" fill="#86efac"/><text x="385" y="104" fill="#14532d">17</text><rect x="416" y="70" width="54" height="54" fill="#fecaca"/><text x="443" y="104" fill="#991b1b">18</text><rect x="474" y="70" width="54" height="54" fill="#86efac"/><text x="501" y="104" fill="#14532d">19</text><rect x="532" y="70" width="54" height="54" fill="#fecaca"/><text x="559" y="104" fill="#991b1b">20</text><rect x="10" y="130" width="54" height="54" fill="#fecaca"/><text x="37" y="164" fill="#991b1b">21</text><rect x="68" y="130" width="54" height="54" fill="#fecaca"/><text x="95" y="164" fill="#991b1b">22</text><rect x="126" y="130" width="54" height="54" fill="#86efac"/><text x="153" y="164" fill="#14532d">23</text><rect x="184" y="130" width="54" height="54" fill="#fecaca"/><text x="211" y="164" fill="#991b1b">24</text><rect x="242" y="130" width="54" height="54" fill="#fecaca"/><text x="269" y="164" fill="#991b1b">25</text><rect x="300" y="130" width="54" height="54" fill="#fecaca"/><text x="327" y="164" fill="#991b1b">26</text><rect x="358" y="130" width="54" height="54" fill="#fecaca"/><text x="385" y="164" fill="#991b1b">27</text><rect x="416" y="130" width="54" height="54" fill="#fecaca"/><text x="443" y="164" fill="#991b1b">28</text><rect x="474" y="130" width="54" height="54" fill="#86efac"/><text x="501" y="164" fill="#14532d">29</text><rect x="532" y="130" width="54" height="54" fill="#fecaca"/><text x="559" y="164" fill="#991b1b">30</text></g></svg>`
        },
        {
          label: "🪜 Il metodo a scaletta",
          html: "<p>In molti Paesi (Francia, Romania, Russia, Spagna…) si scompone in colonna: si traccia una linea verticale, a destra si scrive il <b>più piccolo numero primo</b> che divide, a sinistra il risultato, e si continua fino ad arrivare a 1.</p><p>Leggendo la colonna di destra: 360 = 2 × 2 × 2 × 3 × 3 × 5 = <b>2³ × 3² × 5</b>. È la stessa cosa dell'albero dei fattori, solo disegnata in verticale: molti la trovano più ordinata.</p>",
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><line x1="300" y1="15" x2="300" y2="285" stroke="#1e293b" stroke-width="4"/><g font-size="26" font-weight="bold"><text x="280" y="45" text-anchor="end" fill="#1e3a8a">360</text><text x="320" y="45" fill="#dc2626">2</text><text x="280" y="85" text-anchor="end" fill="#1e3a8a">180</text><text x="320" y="85" fill="#dc2626">2</text><text x="280" y="125" text-anchor="end" fill="#1e3a8a">90</text><text x="320" y="125" fill="#dc2626">2</text><text x="280" y="165" text-anchor="end" fill="#1e3a8a">45</text><text x="320" y="165" fill="#16a34a">3</text><text x="280" y="205" text-anchor="end" fill="#1e3a8a">15</text><text x="320" y="205" fill="#16a34a">3</text><text x="280" y="245" text-anchor="end" fill="#1e3a8a">5</text><text x="320" y="245" fill="#9333ea">5</text><text x="280" y="285" text-anchor="end" fill="#1e3a8a">1</text></g><text x="460" y="150" font-size="24" text-anchor="middle" fill="#0f172a" font-weight="bold">360 = 2³ × 3² × 5</text></svg>`
        },
        {
          label: "🎂 La «torta»: MCD e mcm insieme",
          html: "<p>Metodo usato negli Stati Uniti e in Asia (si chiama «ladder» o «cake method»). Scrivi i due numeri uno accanto all'altro e dividi <b>entrambi</b> per un primo che li divide tutti e due, finché non ce ne sono più:</p><table><tr><td>2</td><td>24</td><td>36</td></tr><tr><td>2</td><td>12</td><td>18</td></tr><tr><td>3</td><td>6</td><td>9</td></tr><tr><td></td><td><b>2</b></td><td><b>3</b></td></tr></table><ul><li><b>MCD</b> = prodotto dei numeri a sinistra = 2 × 2 × 3 = <b>12</b></li><li><b>mcm</b> = numeri a sinistra × numeri rimasti in fondo = 2 × 2 × 3 × 2 × 3 = <b>72</b></li></ul><p>Controllo: MCD × mcm = 12 × 72 = 864 = 24 × 36. Funziona sempre con due numeri!</p>"
        },
        {
          label: "🔁 L'algoritmo di Euclide",
          html: "<p>Euclide (circa 300 a.C.) trovò un modo velocissimo per il MCD, <b>senza scomporre</b>: si divide il numero più grande per il più piccolo e si tiene il resto; poi si divide il divisore per il resto… finché il resto è 0.</p><p><b>MCD(84, 36)</b>:</p><ul><li>84 : 36 = 2 resto <b>12</b></li><li>36 : 12 = 3 resto <b>0</b> → MCD = <b>12</b></li></ul><p><b>Perché funziona?</b> Ogni numero che divide 84 e 36 divide anche 84 − 36 − 36 = 12. Quindi i divisori comuni non cambiano mentre i numeri diventano sempre più piccoli. È uno dei più antichi algoritmi della storia: lo usano ancora i computer!</p>"
        },
        {
          label: "🚦 Una storia per il mcm",
          html: "<p>Due fari lampeggiano insieme a mezzanotte: il primo ogni 6 secondi, il secondo ogni 8 secondi. Quando lampeggeranno di nuovo insieme?</p><ul><li>Faro A: 6, 12, 18, <b>24</b>, 30…</li><li>Faro B: 8, 16, <b>24</b>, 32…</li></ul><p>Dopo <b>24 secondi</b> = mcm(6, 8). Il mcm risponde sempre alla domanda «<i>quando si incontrano di nuovo?</i>». Il MCD invece risponde a «<i>in quanti gruppi uguali posso dividere tutto senza avanzi?</i>».</p>"
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: MCD e mcm",
      questions: [
        { type: "num", q: "MCD(18, 24) = ?", answer: 6, tol: 0, explain: "18 = 2 × 3², 24 = 2³ × 3 → fattori comuni con esponente minore: 2 × 3 = 6." },
        { type: "num", q: "mcm(6, 8) = ?", answer: 24, tol: 0, explain: "6 = 2 × 3, 8 = 2³ → 2³ × 3 = 24." },
        { type: "mc", q: "Due amici vanno in piscina uno ogni 4 giorni e l'altro ogni 6. Oggi ci sono andati insieme. Che cosa devi calcolare per sapere quando si rivedranno?", options: ["Il MCD", "Il mcm", "La somma", "La differenza"], answer: 1, explain: "Eventi che si ripetono e si ritrovano insieme: serve il mcm (12 giorni)." },
        { type: "tf", q: "8 e 15 sono primi tra loro.", answer: true, explain: "8 = 2³ e 15 = 3 × 5 non hanno fattori comuni: MCD = 1." }
      ]
    },
    {
      type: "3d",
      title: "I divisori di 24 in 3D",
      scene: "blocks",
      options: { mode: "array", a: 4, b: 6 },
      caption: "24 cubetti possono formare i rettangoli 1 × 24, 2 × 12, 3 × 8 e 4 × 6: i divisori di 24 sono 1, 2, 3, 4, 6, 8, 12, 24. Prova a impostare 23: si può fare solo la fila. 23 è primo!"
    },
    {
      type: "conceptMap",
      title: "Mappa: perché i numeri primi sono così importanti",
      nodes: [
        { id: "naturali", label: "Numeri naturali", x: 50, y: 6, color: "#64748b", html: "0, 1, 2, 3, 4… i numeri per contare.", why: "Nascono dal bisogno di contare oggetti: pecore, giorni, monete. Sono il punto di partenza di tutta l'aritmetica." },
        { id: "divisibilita", label: "Multipli e divisori", x: 50, y: 22, color: "#3b82f6", html: "a è divisore di b se b : a non dà resto; b è allora multiplo di a.", why: "Viene dal problema pratico di dividere cose in parti uguali senza avanzi: per questo la divisione con resto è la base di tutto." },
        { id: "criteri", label: "Criteri di divisibilità", x: 15, y: 36, color: "#0ea5e9", html: "Scorciatoie: per 2 l'ultima cifra pari, per 3 la somma delle cifre divisibile per 3, per 5 l'ultima cifra 0 o 5…", why: "Funzionano perché scriviamo i numeri in base 10: per esempio 10, 100, 1000… divisi per 3 danno sempre resto 1, quindi conta solo la somma delle cifre." },
        { id: "primi", label: "Numeri primi", x: 50, y: 40, color: "#16a34a", html: "Numeri maggiori di 1 con due soli divisori: 1 e se stessi.", why: "Euclide li definì negli Elementi (circa 300 a.C.). Sono gli «atomi» dei numeri: non si possono spezzare in prodotti di numeri più piccoli." },
        { id: "infiniti", label: "I primi sono infiniti", x: 85, y: 36, color: "#22c55e", html: "Non esiste un numero primo più grande di tutti.", why: "Dimostrazione di Euclide: supponi di avere tutti i primi. Moltiplicali e aggiungi 1. Il nuovo numero, diviso per ciascuno di quei primi, dà resto 1: quindi o è primo lui stesso, o ha un divisore primo che mancava nella lista. Contraddizione! I primi non finiscono mai." },
        { id: "tfa", label: "Teorema fondamentale dell'aritmetica", x: 50, y: 60, color: "#f59e0b", html: "Ogni numero maggiore di 1 si scrive come prodotto di numeri primi in un modo solo (a parte l'ordine).", why: "L'esistenza della scomposizione è facile: se un numero non è primo lo spezzi, e continui. L'unicità si basa sul lemma di Euclide (se un primo divide un prodotto, divide uno dei fattori). Carl Friedrich Gauss lo enunciò e dimostrò in modo completo nel 1801." },
        { id: "scomposizione", label: "Scomposizione in fattori", x: 50, y: 74, color: "#ea580c", html: "Albero, scaletta o torta: es. 360 = 2³ × 3² × 5.", why: "Grazie al teorema fondamentale non importa da dove parti: arriverai sempre agli stessi fattori." },
        { id: "mcd", label: "MCD", x: 22, y: 88, color: "#9333ea", html: "Fattori comuni, presi una sola volta, con l'esponente più piccolo.", why: "Un divisore comune può contenere solo fattori presenti in entrambi i numeri, e non più volte di quante compaiono nel numero che ne ha di meno." },
        { id: "mcm", label: "mcm", x: 78, y: 88, color: "#db2777", html: "Fattori comuni e non comuni, presi una sola volta, con l'esponente più grande.", why: "Un multiplo comune deve «contenere» tutti e due i numeri: quindi tutti i loro fattori, ognuno quante volte serve al numero che ne ha di più." },
        { id: "euclide", label: "Algoritmo di Euclide", x: 15, y: 70, color: "#7c3aed", html: "MCD con divisioni successive, senza scomporre.", why: "I divisori comuni di a e b sono gli stessi di b e del resto di a : b. I numeri si riducono finché il resto è 0." },
        { id: "usi", label: "A cosa servono", x: 85, y: 70, color: "#0f766e", html: "Semplificare frazioni, sommare frazioni, organizzare turni e calendari, crittografia (RSA).", why: "Moltiplicare due primi enormi è facile, ma ritrovarli partendo dal prodotto è difficilissimo: su questa differenza si basano i lucchetti digitali che proteggono internet." }
      ],
      edges: [ ["naturali", "divisibilita", "dividere senza resto"], ["divisibilita", "criteri", "scorciatoie"], ["divisibilita", "primi", "solo 2 divisori"], ["primi", "infiniti", "Euclide dimostra"], ["primi", "tfa", "mattoni di tutti i numeri"], ["tfa", "scomposizione", "garantisce"], ["scomposizione", "mcd", "esponente minore"], ["scomposizione", "mcm", "esponente maggiore"], ["divisibilita", "euclide", "resti"], ["euclide", "mcd", "calcola"], ["tfa", "usi", "applicazioni"] ]
    }
  ],
  glossary: [
    { t: "Multiplo", d: "Numero ottenuto moltiplicando un numero per un numero naturale." },
    { t: "Divisore", d: "Numero che divide un altro senza resto." },
    { t: "Numero primo", d: "Numero maggiore di 1 divisibile solo per 1 e per se stesso." },
    { t: "Numero composto", d: "Numero che ha più di due divisori." },
    { t: "Fattore primo", d: "Numero primo che compare nella scomposizione di un numero." },
    { t: "Scomposizione", d: "Scrittura di un numero come prodotto di fattori primi." },
    { t: "MCD", d: "Massimo Comun Divisore: il più grande divisore comune a più numeri." },
    { t: "mcm", d: "minimo comune multiplo: il più piccolo multiplo comune (non nullo) a più numeri." },
    { t: "Primi tra loro", d: "Numeri che hanno MCD uguale a 1." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale insieme contiene solo numeri primi?", options: ["2, 3, 9, 11", "3, 5, 7, 13", "1, 2, 3, 5", "5, 7, 15, 17"], answer: 1, explain: "9 e 15 sono composti, 1 non è primo." },
      { type: "tf", q: "Il 2 è l'unico numero primo pari.", answer: true, explain: "Ogni altro numero pari è divisibile per 2, quindi è composto." },
      { type: "mc", q: "Il numero 5.430 è divisibile per…", options: ["2, 3, 5 e 10", "solo 2 e 5", "solo 10", "2, 5, 9"], answer: 0, explain: "Finisce con 0 (2, 5, 10) e 5+4+3+0 = 12 è divisibile per 3, non per 9." },
      { type: "mc", q: "La scomposizione di 120 è…", options: ["2³ × 3 × 5", "2² × 3 × 10", "2 × 3 × 4 × 5", "2⁴ × 3 × 5"], answer: 0, explain: "120 = 8 × 15 = 2³ × 3 × 5." },
      { type: "num", q: "MCD(36, 48) = ?", answer: 12, tol: 0, explain: "36 = 2² × 3², 48 = 2⁴ × 3 → 2² × 3 = 12." },
      { type: "num", q: "mcm(10, 15) = ?", answer: 30, tol: 0, explain: "10 = 2 × 5, 15 = 3 × 5 → 2 × 3 × 5 = 30." },
      { type: "num", q: "Hai 30 rose e 45 tulipani: vuoi fare il maggior numero di mazzi uguali usando tutti i fiori. Quanti mazzi?", answer: 15, tol: 0, explain: "MCD(30, 45) = 15: ogni mazzo avrà 2 rose e 3 tulipani." },
      { type: "num", q: "Un faro lampeggia ogni 8 secondi, un altro ogni 12. Lampeggiano insieme ora: dopo quanti secondi lo rifaranno?", answer: 24, tol: 0, unit: "s", explain: "mcm(8, 12) = 24 secondi." },
      { type: "text", q: "Come si chiama il metodo inventato da un matematico greco per trovare i numeri primi \"setacciando\" i numeri?", answer: ["crivello di eratostene", "crivello", "il crivello di eratostene"], explain: "È il crivello di Eratostene." },
      { type: "tf", q: "Il MCD di due numeri è sempre maggiore del loro mcm.", answer: false, explain: "Il MCD è al massimo uguale al numero più piccolo; il mcm è almeno uguale al più grande." },
      { type: "order", q: "Metti in ordine i passi per calcolare il mcm con la scomposizione", items: ["Scomponi i numeri in fattori primi", "Prendi i fattori comuni e non comuni", "Scegli per ciascuno l'esponente più grande", "Moltiplica i fattori scelti"], explain: "Comuni e non comuni, esponente maggiore, poi si moltiplica." }
    ],
    gen: [["isPrime", 1], ["gcd", 1], ["lcm", 1]]
  }
});
