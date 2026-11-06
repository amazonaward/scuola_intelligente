TOPIC('it', {
  id: "p4-mat-numeri-decimali",
  title: "I numeri decimali",
  intro: "Un quaderno costa 1,50 €, sei alto 1,38 m, hai la febbre a 37,5 °C… I numeri con la <b>virgola</b> sono ovunque! Sono i <b>numeri decimali</b>: servono a contare le <b>parti più piccole dell'unità</b>, cioè <b>decimi</b>, <b>centesimi</b> e <b>millesimi</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Dividere l'unità in 10, 100, 1000 parti",
      html: `<p>Finora abbiamo contato unità intere. Ma spesso servono parti <b>più piccole</b> dell'unità. Il nostro sistema è decimale anche \"verso il basso\": <b>ogni ordine si divide in 10 parti</b>.</p>
<ul>
<li>Dividi l'unità in <b>10</b> parti uguali: ogni parte è <b>un decimo</b> → 1/10 = <b>0,1</b></li>
<li>Dividi un decimo in 10 parti: ogni parte è <b>un centesimo</b> → 1/100 = <b>0,01</b></li>
<li>Dividi un centesimo in 10 parti: ogni parte è <b>un millesimo</b> → 1/1000 = <b>0,001</b></li>
</ul>
<p>Quindi: <b>1 unità = 10 decimi = 100 centesimi = 1000 millesimi</b>.</p>
<p>Le frazioni con denominatore 10, 100, 1000 si chiamano <b>frazioni decimali</b> e si possono scrivere come <b>numeri decimali</b>: 3/10 = 0,3; 25/100 = 0,25; 7/1000 = 0,007.</p>`
    },
    {
      type: "svg",
      title: "Decimi e centesimi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<g stroke="#1e3a8a" stroke-width="2">
<rect x="30" y="40" width="200" height="200" fill="#ffffff"/>
<rect x="30" y="40" width="60" height="200" fill="#60a5fa"/>
</g>
<g stroke="#1e3a8a" stroke-width="2">
<line x1="50" y1="40" x2="50" y2="240"/><line x1="70" y1="40" x2="70" y2="240"/><line x1="90" y1="40" x2="90" y2="240"/><line x1="110" y1="40" x2="110" y2="240"/><line x1="130" y1="40" x2="130" y2="240"/><line x1="150" y1="40" x2="150" y2="240"/><line x1="170" y1="40" x2="170" y2="240"/><line x1="190" y1="40" x2="190" y2="240"/><line x1="210" y1="40" x2="210" y2="240"/>
</g>
<text x="130" y="275" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">3 decimi = 0,3</text>
<g stroke="#9d174d" stroke-width="1">
<rect x="340" y="40" width="200" height="200" fill="#ffffff" stroke-width="2"/>
<rect x="340" y="40" width="40" height="200" fill="#f472b6"/>
<rect x="380" y="40" width="20" height="100" fill="#f472b6"/>
</g>
<g stroke="#9d174d" stroke-width="1">
<line x1="360" y1="40" x2="360" y2="240"/><line x1="380" y1="40" x2="380" y2="240"/><line x1="400" y1="40" x2="400" y2="240"/><line x1="420" y1="40" x2="420" y2="240"/><line x1="440" y1="40" x2="440" y2="240"/><line x1="460" y1="40" x2="460" y2="240"/><line x1="480" y1="40" x2="480" y2="240"/><line x1="500" y1="40" x2="500" y2="240"/><line x1="520" y1="40" x2="520" y2="240"/>
<line x1="340" y1="60" x2="540" y2="60"/><line x1="340" y1="80" x2="540" y2="80"/><line x1="340" y1="100" x2="540" y2="100"/><line x1="340" y1="120" x2="540" y2="120"/><line x1="340" y1="140" x2="540" y2="140"/><line x1="340" y1="160" x2="540" y2="160"/><line x1="340" y1="180" x2="540" y2="180"/><line x1="340" y1="200" x2="540" y2="200"/><line x1="340" y1="220" x2="540" y2="220"/>
</g>
<text x="440" y="275" font-size="20" text-anchor="middle" fill="#be185d" font-weight="bold">25 centesimi = 0,25</text>
<text x="130" y="28" font-size="16" text-anchor="middle" fill="#1f2937">1 intero diviso in 10</text>
<text x="440" y="28" font-size="16" text-anchor="middle" fill="#1f2937">1 intero diviso in 100</text>
</svg>`,
      caption: "A sinistra 3 strisce su 10; a destra 25 quadretti su 100 (2 strisce da 10 + 5 quadretti)."
    },
    {
      type: "text",
      title: "Passo 1 – La virgola e la tabella",
      html: `<p>Un numero decimale ha due parti separate dalla <b>virgola</b>:</p>
<ul>
<li>a <b>sinistra</b> la <b>parte intera</b> (unità, decine, centinaia…);</li>
<li>a <b>destra</b> la <b>parte decimale</b> (decimi <b>d</b>, centesimi <b>c</b>, millesimi <b>m</b>).</li>
</ul>
<table>
<tr><th>h</th><th>da</th><th>u</th><th>,</th><th>d</th><th>c</th><th>m</th></tr>
<tr><td></td><td>2</td><td>7</td><td>,</td><td>4</td><td>0</td><td>5</td></tr>
</table>
<p><b>27,405</b> si legge: <i>ventisette <b>virgola</b> quattrocentocinque</i> oppure <i>ventisette <b>unità</b> e quattrocentocinque <b>millesimi</b></i>.</p>
<p>⚠️ Attenzione: <b>d</b> dopo la virgola sono i <b>decimi</b>, non le decine! I decimi sono <b>10 volte più piccoli</b> dell'unità, le decine 10 volte più grandi.</p>`
    },
    {
      type: "widget",
      title: "Costruisci i decimi",
      widget: "fractionPie",
      options: { n: 3, d: 10 },
      caption: "Tieni il denominatore a 10 e muovi il numeratore: il widget mostra il numero decimale corrispondente (scritto con il punto o la virgola, secondo la lingua). Prova anche con 100!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: leggere i decimali",
      questions: [
        { type: "mc", q: "Nel numero 5,72 la cifra 7 indica…", options: ["7 decine", "7 decimi", "7 centesimi"], answer: 1, explain: "È la prima cifra dopo la virgola: decimi." },
        { type: "num", q: "Scrivi come numero decimale: 9 centesimi.", answer: 0.09, explain: "9/100 = 0,09 (lo zero tiene il posto dei decimi)." },
        { type: "num", q: "Quanti centesimi ci sono in 1 unità?", answer: 100, explain: "1 = 100/100." }
      ]
    },
    {
      type: "text",
      title: "Passo 2 – Confrontare i decimali",
      html: `<p>Per <b>confrontare</b> due numeri decimali:</p>
<ol>
<li>confronta prima la <b>parte intera</b>: <i>4,1 &gt; 3,99</i> (perché 4 &gt; 3);</li>
<li>se la parte intera è uguale, confronta i <b>decimi</b>, poi i <b>centesimi</b>, poi i <b>millesimi</b>.</li>
</ol>
<p>⚠️ Trappola famosa: <b>0,5</b> è più grande o più piccolo di <b>0,45</b>? Molti dicono \"più piccolo, perché 5 &lt; 45\". Sbagliato! Confronta i decimi: <b>5 decimi</b> contro <b>4 decimi</b> → <b>0,5 &gt; 0,45</b>.</p>
<p>Trucco: aggiungi gli <b>zeri</b> a destra per avere lo stesso numero di cifre decimali. Gli zeri finali non cambiano il valore: <b>0,5 = 0,50</b>. Ora è facile: 50 centesimi &gt; 45 centesimi.</p>`
    },
    {
      type: "text",
      title: "Passo 3 – Addizioni e sottrazioni in colonna",
      html: `<p>Regola d'oro: <b>virgola sotto virgola</b>! Così decimi sono sotto decimi, centesimi sotto centesimi.</p>
<pre style="font-size:1.2em">   12,50 +
    3,75 =
  -------
   16,25</pre>
<ol>
<li>Incolonna mettendo le virgole una sotto l'altra (aggiungi zeri se servono: 12,5 → 12,50).</li>
<li>Calcola come con i numeri interi, da destra, con i riporti.</li>
<li>Nel risultato metti la virgola <b>sotto le altre</b>.</li>
</ol>
<p>Sottrazione: <i>10 − 2,35</i> → scrivi <b>10,00 − 2,35 = 7,65</b>.</p>`
    },
    {
      type: "text",
      title: "Passo 4 – Moltiplicare e dividere per 10, 100, 1000",
      html: `<p>Con i numeri decimali la virgola \"si sposta\":</p>
<ul>
<li><b>× 10</b> → la virgola si sposta di <b>1 posto a destra</b>: 3,47 × 10 = 34,7</li>
<li><b>× 100</b> → 2 posti a destra: 3,47 × 100 = 347</li>
<li><b>× 1000</b> → 3 posti a destra (aggiungi zeri se servono): 3,47 × 1000 = 3470</li>
<li><b>: 10</b> → la virgola si sposta di <b>1 posto a sinistra</b>: 52 : 10 = 5,2</li>
<li><b>: 100</b> → 2 posti a sinistra: 52 : 100 = 0,52</li>
<li><b>: 1000</b> → 3 posti a sinistra: 52 : 1000 = 0,052</li>
</ul>
<p>In realtà sono le <b>cifre</b> che cambiano posto (diventano 10, 100, 1000 volte più grandi o più piccole), ma il trucco della virgola funziona benissimo!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la spesa",
      html: `<p>Al supermercato Giulia compra:</p>
<ul>
<li>pane: <b>1,80 €</b></li>
<li>latte: <b>1,25 €</b></li>
<li>mele: <b>2,47 €</b></li>
</ul>
<p>Spesa totale: 1,80 + 1,25 + 2,47 = <b>5,52 €</b>.</p>
<p>Paga con una banconota da <b>10 €</b>. Resto: 10,00 − 5,52 = <b>4,48 €</b>.</p>
<p>Nei soldi: la parte intera sono gli <b>euro</b>, le prime due cifre decimali sono i <b>centesimi</b> (1 € = 100 centesimi). Per questo i prezzi hanno sempre 2 cifre dopo la virgola: 1,80 € e non 1,8 €.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le misure",
      html: `<p>Il <b>metro</b> si divide in 10 <b>decimetri</b>, 100 <b>centimetri</b>, 1000 <b>millimetri</b>: proprio come i decimi, centesimi e millesimi!</p>
<ul>
<li>Marco è alto <b>1,38 m</b> = 1 metro e 38 centimetri = 138 cm.</li>
<li>Una matita è lunga <b>0,175 m</b> = 175 millimetri = 17,5 cm.</li>
<li>Alla gara di salto in lungo, Sara salta <b>2,45 m</b> e Lucia <b>2,5 m</b>. Chi vince? 2,5 = 2,50 &gt; 2,45 → <b>Lucia</b>, di 5 centimetri!</li>
</ul>
<p>Anche il termometro usa i decimi: <b>37,5 °C</b> = 37 gradi e 5 decimi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Virgola o punto?",
      html: `<p>In <b>Italia</b> e in quasi tutta l'Europa continentale si scrive <b>3,14</b> con la <b>virgola</b>. Nel <b>Regno Unito</b>, negli <b>Stati Uniti</b>, in Cina e in Giappone si scrive <b>3.14</b> con il <b>punto</b>!</p>
<p>Per questo calcolatrici e computer usano il punto, e in un foglio di calcolo un numero può sembrare \"sbagliato\". Dal 2003 le regole internazionali (Sistema Internazionale di unità di misura) accettano <b>entrambi</b>, e raccomandano di separare le migliaia con uno <b>spazio</b> per non fare confusione.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? L'uomo che \"inventò\" i decimali",
      html: `<p>Nel <b>1585</b> il matematico fiammingo <b>Simon Stevin</b> scrisse un libretto di poche pagine, <i>La Disme</i> (\"il decimo\"), per spiegare a mercanti e geometri come fare i conti con i numeri decimali al posto delle complicate frazioni. Non usava ancora la virgola: scriveva i numeri con dei cerchietti numerati!</p>
<p>La virgola e il punto decimale si diffusero pochi anni dopo, anche grazie allo scozzese <b>John Napier</b> (inizio del 1600), l'inventore dei logaritmi.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>1 = 10 decimi = 100 centesimi = 1000 millesimi.</li>
<li>A sinistra della virgola la <b>parte intera</b>, a destra la <b>parte decimale</b> (d, c, m).</li>
<li>Gli <b>zeri finali</b> non cambiano il valore: 0,5 = 0,50 = 0,500.</li>
<li>Per confrontare: parte intera, poi decimi, centesimi, millesimi.</li>
<li>Addizione e sottrazione: <b>virgola sotto virgola</b>.</li>
<li>× 10, 100, 1000: virgola a <b>destra</b> di 1, 2, 3 posti; : 10, 100, 1000: a <b>sinistra</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i decimali",
      intro: "Se la virgola ti confonde, prova a vedere i decimali come soldi, come misure, come cubetti 3D o su un abaco speciale.",
      tabs: [
        {
          label: "💶 Euro e centesimi",
          html: `<p>Il modo più facile per capire i decimali è il <b>denaro</b>:</p>
<ul>
<li>1 € = <b>10 monete da 10 centesimi</b> → ogni moneta da 10 cent è <b>un decimo</b> di euro (0,10 €);</li>
<li>1 € = <b>100 monete da 1 centesimo</b> → ogni centesimo è <b>un centesimo</b> di euro (0,01 €).</li>
</ul>
<p>Quindi <b>3,45 €</b> = 3 monete da 1 € + 4 monete da 10 cent + 5 monete da 1 cent.</p>
<p>E la trappola 0,5 o 0,45? Pensa ai soldi: <b>50 centesimi</b> o <b>45 centesimi</b>? Ovvio: 0,50 € è di più!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#fefce8"/>
<g stroke="#a16207" stroke-width="3">
<circle cx="60" cy="80" r="40" fill="#e5e7eb"/><circle cx="60" cy="80" r="27" fill="#fbbf24"/>
<circle cx="150" cy="80" r="40" fill="#e5e7eb"/><circle cx="150" cy="80" r="27" fill="#fbbf24"/>
<circle cx="240" cy="80" r="40" fill="#e5e7eb"/><circle cx="240" cy="80" r="27" fill="#fbbf24"/>
<circle cx="320" cy="85" r="24" fill="#facc15"/><circle cx="375" cy="85" r="24" fill="#facc15"/><circle cx="430" cy="85" r="24" fill="#facc15"/><circle cx="485" cy="85" r="24" fill="#facc15"/>
</g>
<g stroke="#9a3412" stroke-width="2" fill="#ea580c">
<circle cx="335" cy="150" r="12"/><circle cx="370" cy="150" r="12"/><circle cx="405" cy="150" r="12"/><circle cx="440" cy="150" r="12"/><circle cx="475" cy="150" r="12"/>
</g>
<g font-size="16" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="60" y="86">1 €</text><text x="150" y="86">1 €</text><text x="240" y="86">1 €</text>
<text x="320" y="90">10c</text><text x="375" y="90">10c</text><text x="430" y="90">10c</text><text x="485" y="90">10c</text>
</g>
<text x="150" y="160" font-size="22" text-anchor="middle" fill="#1f2937">3 unità</text>
<text x="545" y="90" font-size="18" fill="#1f2937">4 d</text>
<text x="510" y="157" font-size="18" fill="#1f2937">5 c</text>
<text x="300" y="192" font-size="24" text-anchor="middle" fill="#b45309" font-weight="bold">= 3,45 €</text>
</svg>`
        },
        {
          label: "🧊 I cubetti 3D come decimali",
          html: `<p>Usa i blocchi base 10, ma <b>cambia il nome</b> ai pezzi:</p>
<ul>
<li>la <b>lastra</b> (100 cubetti) = <b>1 intero</b>;</li>
<li>il <b>lungo</b> (10 cubetti) = <b>1 decimo</b> (0,1);</li>
<li>il <b>cubetto</b> = <b>1 centesimo</b> (0,01).</li>
</ul>
<p>Il modello qui mostra 245 cubetti: con i nuovi nomi sono 2 interi, 4 decimi e 5 centesimi = <b>2,45</b>! Muovi il cursore e leggi il numero come decimale: basta mettere la virgola dopo la cifra delle centinaia.</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 245 }
        },
        {
          label: "🧮 L'abaco con la virgola",
          html: `<p>Su questo abaco immagina una <b>virgola</b> dopo la prima asta: le aste sono <b>u</b> (unità), <b>d</b> (decimi), <b>c</b> (centesimi), <b>m</b> (millesimi).</p>
<p>Il numero mostrato, 3254, si legge quindi <b>3,254</b>: 3 unità, 2 decimi, 5 centesimi, 4 millesimi. Prova ad aggiungere 1 millesimo quando ce ne sono già 9: guarda il cambio verso i centesimi!</p>`,
          widget: "abacus",
          options: { columns: ["u", "d", "c", "m"], value: 3254 }
        },
        {
          label: "📏 Il metro da sarta",
          html: `<p>Prendi un metro da sarta o un righello: è una <b>retta dei numeri decimali</b> già pronta!</p>
<ul>
<li>tra 0 e 1 metro ci sono 10 tratti grandi: i <b>decimetri</b> = decimi di metro (0,1 m);</li>
<li>ogni decimetro ha 10 tratti: i <b>centimetri</b> = centesimi di metro (0,01 m);</li>
<li>ogni centimetro ha 10 tacchette: i <b>millimetri</b> = millesimi di metro (0,001 m).</li>
</ul>
<p>Esercizio: trova sul metro 0,3 m (30 cm), 0,75 m (75 cm), 0,08 m (8 cm). Ti accorgerai che 0,08 è <b>molto più vicino allo zero</b> di 0,3, anche se \"8 sembra più grande di 3\".</p>`
        },
        {
          label: "🇬🇧 Il \"point\" inglese",
          html: `<p>In inglese 3,25 si scrive <b>3.25</b> e si legge <i>\"three <b>point</b> two five\"</i>: si leggono le cifre decimali <b>una alla volta</b>.</p>
<p>Questo modo di leggere aiuta a evitare un errore comune: <i>\"zero virgola cinque\"</i> contro <i>\"zero virgola quarantacinque\"</i> ci fa pensare a 5 e 45. In inglese si dice <i>\"point five\"</i> e <i>\"point four five\"</i>: si vede subito che la prima cifra dopo la virgola, 5 contro 4, decide chi è più grande!</p>
<p>Prova a leggere così anche in italiano: <i>zero virgola quattro cinque</i>.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei numeri decimali",
      nodes: [
        { id: "unita", label: "Unità", x: 50, y: 6, color: "#2563eb", html: "Il numero 1: l'intero che vogliamo dividere.", why: "Nel sistema decimale ogni ordine vale 10 volte quello alla sua destra. Proseguendo questa regola \"oltre\" le unità, verso destra, nascono i decimi, i centesimi, i millesimi." },
        { id: "frazdec", label: "Frazioni decimali", x: 20, y: 28, color: "#16a34a", html: "Frazioni con denominatore 10, 100, 1000: 3/10, 25/100…", why: "Sono il ponte tra le frazioni e i decimali: 3/10 = 0,3. Prima di Stevin si facevano i calcoli con le frazioni, che erano molto più faticose da sommare e confrontare." },
        { id: "decimi", label: "Decimi, centesimi, millesimi", x: 50, y: 30, color: "#f59e0b", html: "0,1 – 0,01 – 0,001: ogni ordine è 10 volte più piccolo del precedente.", why: "È la stessa regola del 10 che usiamo per le decine e le centinaia, applicata \"al contrario\". Anche le unità di misura (dm, cm, mm) seguono questa regola dal 1795, quando la Francia introdusse il <b>sistema metrico decimale</b>." },
        { id: "virgola", label: "La virgola", x: 80, y: 28, color: "#ef4444", html: "Separa la parte intera dalla parte decimale.", why: "Simon Stevin (1585) usava cerchietti; John Napier diffuse il punto/virgola all'inizio del 1600. In Italia si usa la virgola, nei Paesi anglosassoni il punto: dal 2003 il Sistema Internazionale li accetta entrambi." },
        { id: "confronto", label: "Confronto", x: 20, y: 60, color: "#a855f7", html: "Parte intera, poi decimi, centesimi, millesimi; 0,5 = 0,50.", why: "Funziona grazie al valore posizionale: 1 decimo vale più di 9 centesimi (10 centesimi &gt; 9 centesimi). Gli zeri finali non cambiano nulla perché indicano \"0 parti\" di quell'ordine." },
        { id: "operazioni", label: "Addizione e sottrazione", x: 50, y: 62, color: "#0ea5e9", html: "Virgola sotto virgola, poi si calcola come con gli interi.", why: "Si possono sommare solo cose dello stesso tipo: decimi con decimi, centesimi con centesimi, come le unità con le unità. Incolonnare le virgole allinea gli ordini." },
        { id: "x10", label: "× e : per 10, 100, 1000", x: 80, y: 60, color: "#14b8a6", html: "La virgola si sposta a destra (×) o a sinistra (:).", why: "Moltiplicando per 10 ogni cifra diventa 10 volte più grande: i decimi diventano unità, le unità decine… Le cifre \"scivolano\" di un posto e sembra che la virgola si sposti." },
        { id: "vita", label: "Soldi e misure", x: 50, y: 88, color: "#64748b", html: "Euro e centesimi, metri e centimetri, gradi e decimi.", why: "L'euro (in circolazione dal 2002) e il sistema metrico sono decimali proprio per rendere i calcoli facili con le stesse regole dei numeri." }
      ],
      edges: [
        ["unita", "decimi", "divisa in 10, 100, 1000"],
        ["frazdec", "decimi", "si scrivono come"],
        ["decimi", "virgola", "dopo la"],
        ["decimi", "confronto", ""],
        ["virgola", "operazioni", "si incolonna"],
        ["virgola", "x10", "si sposta"],
        ["operazioni", "vita", "servono per"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: confronti e calcoli",
      questions: [
        { type: "mc", q: "Quale numero è maggiore?", options: ["0,8", "0,75", "0,09"], answer: 0, explain: "0,8 = 0,80 > 0,75 > 0,09." },
        { type: "num", q: "Quanto fa 4,6 + 2,75?", answer: 7.35, explain: "4,60 + 2,75 = 7,35 (virgola sotto virgola)." },
        { type: "num", q: "Quanto fa 0,36 × 100?", answer: 36, explain: "Virgola di 2 posti a destra: 36." }
      ]
    }
  ],
  glossary: [
    { t: "Numero decimale", d: "Numero con una parte intera e una parte decimale separate dalla virgola." },
    { t: "Decimo", d: "Una delle 10 parti uguali dell'unità: 0,1." },
    { t: "Centesimo", d: "Una delle 100 parti uguali dell'unità: 0,01." },
    { t: "Millesimo", d: "Una delle 1000 parti uguali dell'unità: 0,001." },
    { t: "Frazione decimale", d: "Frazione con denominatore 10, 100, 1000…" },
    { t: "Parte intera", d: "Le cifre a sinistra della virgola." },
    { t: "Parte decimale", d: "Le cifre a destra della virgola." },
    { t: "Virgola", d: "Segno che separa la parte intera da quella decimale (nei Paesi anglosassoni si usa il punto)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Scrivi come numero decimale la frazione 7/10.", answer: 0.7, explain: "7 decimi = 0,7." },
      { type: "num", q: "Scrivi come numero decimale: 4 unità e 3 centesimi.", answer: 4.03, explain: "4,03: lo zero tiene il posto dei decimi." },
      { type: "mc", q: "In 12,384 la cifra 8 indica…", options: ["8 decimi", "8 centesimi", "8 millesimi"], answer: 1, explain: "Seconda cifra dopo la virgola: centesimi." },
      { type: "tf", q: "0,40 e 0,4 sono lo stesso numero.", answer: true, explain: "Gli zeri finali non cambiano il valore." },
      { type: "mc", q: "Quale numero è minore?", options: ["0,3", "0,29", "0,31"], answer: 1, explain: "0,29 ha 2 decimi, gli altri 3." },
      { type: "num", q: "Quanto fa 10 − 3,6?", answer: 6.4, explain: "10,0 − 3,6 = 6,4." },
      { type: "num", q: "Quanto fa 52,7 : 10?", answer: 5.27, explain: "Virgola di 1 posto a sinistra." },
      { type: "num", q: "Quanti millesimi ci sono in 1 decimo?", answer: 100, explain: "1 decimo = 10 centesimi = 100 millesimi." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["0,05", "0,5", "0,55", "5,05"], explain: "Confronta parte intera, poi decimi, poi centesimi." },
      { type: "num", q: "Un panino costa 2,35 € e una bibita 1,90 €. Quanto spendi in tutto?", answer: 4.25, unit: "€", explain: "2,35 + 1,90 = 4,25 €." }
    ],
    gen: [["decAdd", 2], ["decMul", 1]]
  }
});
