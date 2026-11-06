TOPIC('it', {
  id: "m1-mat-frazioni",
  title: "Le frazioni e le operazioni",
  intro: "Alle elementari hai conosciuto le frazioni come «parti di una torta». Ora diventano veri <b>numeri</b>: impariamo a <b>classificarle</b>, a <b>semplificarle</b> con il MCD, a <b>confrontarle</b> con il mcm e a fare con loro le <b>quattro operazioni</b> e le potenze, fino a risolvere problemi ed espressioni.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "La frazione come operatore",
      html: `<p>Una frazione <b>a/b</b> (con b ≠ 0) indica che l'intero viene diviso in <b>b</b> parti uguali e se ne prendono <b>a</b>.</p>
<ul>
<li>il <b>denominatore</b> (b, sotto) dice in quante parti uguali si divide l'intero;</li>
<li>il <b>numeratore</b> (a, sopra) dice quante parti si prendono;</li>
<li>la <b>linea di frazione</b> significa «diviso»: 3/4 = 3 : 4 = 0,75.</li>
</ul>
<p>La frazione è un <b>operatore</b>: agisce su una grandezza. Per calcolare i <b>3/4 di 200</b>: si divide per il denominatore e si moltiplica per il numeratore: 200 : 4 × 3 = 50 × 3 = <b>150</b>.</p>
<p><b>Il problema inverso</b>: «I 3/4 di un numero sono 150. Qual è il numero?» Si fa l'operazione al contrario: 150 : 3 × 4 = 50 × 4 = <b>200</b>.</p>
<p>Il denominatore <b>non può essere 0</b>: non si può dividere un intero in zero parti!</p>`
    },
    {
      type: "text",
      title: "Frazioni proprie, improprie, apparenti",
      html: `<table>
<tr><th>Tipo</th><th>Regola</th><th>Esempi</th><th>Valore</th></tr>
<tr><td><b>Propria</b></td><td>numeratore &lt; denominatore</td><td>2/5, 7/9</td><td>minore di 1 intero</td></tr>
<tr><td><b>Impropria</b></td><td>numeratore &gt; denominatore (e non multiplo)</td><td>7/4, 11/3</td><td>maggiore di 1 intero</td></tr>
<tr><td><b>Apparente</b></td><td>numeratore multiplo del denominatore</td><td>8/4, 6/6, 0/5</td><td>un numero naturale (2, 1, 0)</td></tr>
</table>
<p>Una frazione impropria si può scrivere come <b>numero misto</b>: 7/4 = 1 intero e 3/4 (perché 7 : 4 = 1 resto 3).</p>
<p>Le frazioni con numeratore 1 (1/2, 1/3, 1/10…) si chiamano <b>unitarie</b>; quelle con denominatore 10, 100, 1000… si chiamano <b>decimali</b> (3/10 = 0,3).</p>`
    },
    {
      type: "widget",
      title: "Esplora le frazioni",
      widget: "fractionPie",
      options: { n: 7, d: 4 },
      caption: "Con 7/4 servono più di un intero: è una frazione impropria. Muovi i cursori e cerca una frazione apparente (es. 8/4)."
    },
    {
      type: "text",
      title: "Frazioni equivalenti e semplificazione",
      html: `<p>Due frazioni sono <b>equivalenti</b> se rappresentano la stessa quantità: 1/2 = 2/4 = 3/6 = 50/100.</p>
<p><b>Proprietà invariantiva</b>: moltiplicando o dividendo numeratore e denominatore per lo <b>stesso numero</b> (diverso da 0) si ottiene una frazione equivalente.<br>3/5 = (3 × 4)/(5 × 4) = 12/20.</p>
<p><b>Verifica veloce</b> (prodotto in croce): a/b = c/d se <b>a × d = b × c</b>. 3/5 e 12/20: 3 × 20 = 60 e 5 × 12 = 60 ✔️</p>
<p><b>Semplificare</b> vuol dire dividere numeratore e denominatore per un divisore comune. Una frazione è <b>ridotta ai minimi termini</b> quando numeratore e denominatore sono <b>primi tra loro</b> (MCD = 1). Il modo più veloce: dividere per il <b>MCD</b>.</p>
<p>Esempio: 36/48. MCD(36, 48) = 12 → 36/48 = 3/4.<br>Oppure a passi: 36/48 = 18/24 = 9/12 = 3/4.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: tipi ed equivalenze",
      questions: [
        { type: "mc", q: "Quale frazione è apparente?", options: ["5/3", "12/4", "3/12", "7/8"], answer: 1, explain: "12 è multiplo di 4: 12/4 = 3." },
        { type: "num", q: "Quanto sono i 2/5 di 35?", answer: 14, tol: 0, explain: "35 : 5 = 7; 7 × 2 = 14." },
        { type: "mc", q: "Riduci ai minimi termini 24/36.", options: ["12/18", "4/6", "2/3", "6/9"], answer: 2, explain: "MCD(24, 36) = 12: 24/36 = 2/3." },
        { type: "tf", q: "4/6 e 10/15 sono equivalenti.", answer: true, explain: "Entrambe si semplificano in 2/3; prodotto in croce: 4 × 15 = 60 = 6 × 10." }
      ]
    },
    {
      type: "text",
      title: "Confrontare le frazioni",
      html: `<ul>
<li><b>Stesso denominatore</b>: è maggiore quella con il numeratore maggiore. 5/8 &gt; 3/8.</li>
<li><b>Stesso numeratore</b>: è maggiore quella con il denominatore <b>minore</b> (parti più grandi!). 3/4 &gt; 3/7.</li>
<li><b>Caso generale</b>: si trasformano in frazioni equivalenti con lo stesso denominatore, il <b>minimo comune denominatore</b> (m.c.d.), cioè il <b>mcm</b> dei denominatori.</li>
</ul>
<p>Esempio: confronta 5/6 e 7/9. mcm(6, 9) = 18.<br>5/6 = 15/18; 7/9 = 14/18 → <b>5/6 &gt; 7/9</b>.</p>
<p>Metodo rapido del <b>prodotto in croce</b>: 5 × 9 = 45 e 6 × 7 = 42; poiché 45 &gt; 42, 5/6 &gt; 7/9.</p>
<p>Le frazioni si possono anche mettere sulla <b>retta dei numeri</b>: tra 0 e 1 ci sono tutte le frazioni proprie. Tra due frazioni ce n'è sempre un'altra: per esempio tra 1/3 e 1/2 c'è 5/12. Le frazioni sono <b>dense</b>, a differenza dei naturali!</p>`
    },
    {
      type: "svg",
      title: "Frazioni sulla retta e confronto",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<line x1="40" y1="70" x2="560" y2="70" stroke="#0f172a" stroke-width="3"/>
<g stroke="#0f172a" stroke-width="3"><line x1="40" y1="58" x2="40" y2="82"/><line x1="300" y1="58" x2="300" y2="82"/><line x1="560" y1="58" x2="560" y2="82"/></g>
<g font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a"><text x="40" y="105">0</text><text x="300" y="105">1</text><text x="560" y="105">2</text></g>
<circle cx="235" cy="70" r="8" fill="#2563eb"/><text x="235" y="45" font-size="17" font-weight="bold" text-anchor="middle" fill="#1d4ed8">3/4</text>
<circle cx="495" cy="70" r="8" fill="#dc2626"/><text x="495" y="45" font-size="17" font-weight="bold" text-anchor="middle" fill="#b91c1c">7/4</text>
<circle cx="170" cy="70" r="8" fill="#16a34a"/><text x="170" y="45" font-size="17" font-weight="bold" text-anchor="middle" fill="#15803d">1/2</text>
<text x="40" y="150" font-size="17" fill="#0f172a">5/6 =</text>
<g stroke="#ffffff" stroke-width="2">
<rect x="100" y="132" width="330" height="26" fill="#e5e7eb"/>
<rect x="100" y="132" width="55" height="26" fill="#3b82f6"/><rect x="155" y="132" width="55" height="26" fill="#3b82f6"/><rect x="210" y="132" width="55" height="26" fill="#3b82f6"/><rect x="265" y="132" width="55" height="26" fill="#3b82f6"/><rect x="320" y="132" width="55" height="26" fill="#3b82f6"/>
</g>
<text x="40" y="200" font-size="17" fill="#0f172a">7/9 =</text>
<g stroke="#ffffff" stroke-width="2">
<rect x="100" y="182" width="330" height="26" fill="#e5e7eb"/>
<rect x="100" y="182" width="36.7" height="26" fill="#f97316"/><rect x="136.7" y="182" width="36.7" height="26" fill="#f97316"/><rect x="173.3" y="182" width="36.7" height="26" fill="#f97316"/><rect x="210" y="182" width="36.7" height="26" fill="#f97316"/><rect x="246.7" y="182" width="36.7" height="26" fill="#f97316"/><rect x="283.3" y="182" width="36.7" height="26" fill="#f97316"/><rect x="320" y="182" width="36.7" height="26" fill="#f97316"/>
</g>
<text x="450" y="152" font-size="16" fill="#1d4ed8" font-weight="bold">= 15/18</text>
<text x="450" y="202" font-size="16" fill="#c2410c" font-weight="bold">= 14/18</text>
<text x="300" y="245" font-size="16" text-anchor="middle" fill="#334155">la barra blu è un po' più lunga: 5/6 &gt; 7/9</text>
</svg>`,
      caption: "Le frazioni proprie stanno tra 0 e 1, quelle improprie oltre l'1. Il modello a barre aiuta a confrontarle."
    },
    {
      type: "text",
      title: "Addizione e sottrazione",
      html: `<p><b>Con lo stesso denominatore</b>: si sommano (o sottraggono) i numeratori e si lascia il denominatore.<br>2/9 + 5/9 = 7/9 &nbsp;&nbsp; 7/8 − 3/8 = 4/8 = 1/2</p>
<p><b>Con denominatori diversi</b>:</p>
<ol>
<li>si calcola il <b>mcm dei denominatori</b> (il nuovo denominatore comune);</li>
<li>si divide il mcm per ogni denominatore e si moltiplica il risultato per il numeratore;</li>
<li>si sommano (o sottraggono) i nuovi numeratori;</li>
<li>si <b>semplifica</b> il risultato, se possibile.</li>
</ol>
<p>Esempio: <b>3/4 + 5/6</b>. mcm(4, 6) = 12.<br>12 : 4 × 3 = 9; 12 : 6 × 5 = 10 → 9/12 + 10/12 = <b>19/12</b> (= 1 e 7/12).</p>
<p>Esempio: <b>2 − 3/5</b> = 10/5 − 3/5 = <b>7/5</b> (un intero è 5/5, due interi sono 10/5).</p>
<p><b>Errore da evitare</b>: 1/2 + 1/3 <b>non</b> fa 2/5! Fa 3/6 + 2/6 = <b>5/6</b>. Non si sommano mai i denominatori.</p>`
    },
    {
      type: "text",
      title: "Moltiplicazione, divisione e potenza",
      html: `<p><b>Moltiplicazione</b>: numeratore per numeratore, denominatore per denominatore.<br>2/3 × 4/5 = 8/15</p>
<p>Conviene <b>semplificare prima</b>, anche «in croce» (un numeratore con il denominatore dell'altra frazione):<br>6/7 × 14/9 → 6 e 9 si dividono per 3, 14 e 7 per 7 → 2/1 × 2/3 = <b>4/3</b>.</p>
<p><b>Il reciproco</b> (o inverso) di una frazione si ottiene scambiando numeratore e denominatore: il reciproco di 3/5 è 5/3. Una frazione per il suo reciproco dà sempre 1. Lo 0 non ha reciproco.</p>
<p><b>Divisione</b>: si moltiplica la prima frazione per il <b>reciproco</b> della seconda.<br>3/4 : 9/8 = 3/4 × 8/9 = (semplifico 3 con 9 e 4 con 8) 1/1 × 2/3 = <b>2/3</b>.</p>
<p><b>Potenza</b>: si elevano a potenza sia il numeratore sia il denominatore.<br>(2/3)³ = 2³/3³ = 8/27. Valgono le stesse proprietà delle potenze dei naturali, e (a/b)⁰ = 1.</p>
<p>Nelle <b>espressioni</b> con le frazioni l'ordine è sempre lo stesso: parentesi → potenze → × e : → + e −.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la torta di compleanno",
      html: `<p>Alla festa di Matteo, Luca mangia <b>1/4</b> della torta e Sofia <b>1/3</b>. Che frazione di torta resta?</p>
<ol>
<li>Mangiata: 1/4 + 1/3 = 3/12 + 4/12 = <b>7/12</b>.</li>
<li>Resta: 1 − 7/12 = 12/12 − 7/12 = <b>5/12</b>.</li>
</ol>
<p>La torta pesava <b>1.200 g</b>. Quanti grammi restano? 5/12 di 1.200 = 1.200 : 12 × 5 = <b>500 g</b>.</p>
<p>Il resto viene diviso in parti da <b>1/24</b> di torta: quante fette si ottengono? 5/12 : 1/24 = 5/12 × 24/1 = <b>10 fette</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: lo sconto e il problema inverso",
      html: `<p><b>1.</b> Una bici costa <b>€ 240</b>. Con i saldi viene scontata di <b>1/5</b>. Quanto costa ora?<br>Sconto: 240 : 5 = € 48. Prezzo: 240 − 48 = <b>€ 192</b> (oppure: pago i 4/5 → 240 : 5 × 4 = 192).</p>
<p><b>2.</b> Giulia ha speso i <b>3/8</b> dei suoi risparmi, cioè <b>€ 45</b>. Quanto aveva in tutto?<br>Problema inverso: 45 : 3 × 8 = 15 × 8 = <b>€ 120</b>. Le restano 120 − 45 = <b>€ 75</b> (i 5/8).</p>
<p>Un buon metodo per questi problemi è il <b>modello a barre</b>: disegna una barra divisa in 8 parti, colorane 3 e scrivi «45 €» sopra. Una parte vale 15 €, la barra intera 8 × 15 = 120 €.</p>`
    },
    {
      type: "curiosity",
      title: "Gli Egizi usavano solo frazioni unitarie",
      html: `<p>Gli antichi Egizi scrivevano quasi tutte le frazioni come <b>somma di frazioni unitarie diverse</b> (con numeratore 1). Per esempio 3/4 = 1/2 + 1/4 e 2/5 = 1/3 + 1/15. Il <b>papiro di Rhind</b> (circa 1650 a.C.) contiene una tabella per scrivere 2/n in questo modo.</p>
<p>Sembra complicato, ma era pratico: per dividere 3 pagnotte tra 4 persone, ognuno riceve mezza pagnotta più un quarto. Facile da tagliare!</p>
<p>La <b>linea di frazione</b> orizzontale che usiamo noi fu resa famosa in Europa da Fibonacci nel <i>Liber abaci</i> (1202), che l'aveva imparata dai matematici arabi.</p>`
    },
    {
      type: "curiosity",
      title: "Le frazioni nella musica",
      html: `<p>Le note musicali sono frazioni! La <b>semibreve</b> dura 1 intero, la <b>minima</b> 1/2, la <b>semiminima</b> 1/4, la <b>croma</b> 1/8, la <b>semicroma</b> 1/16. Un tempo di <b>3/4</b>, scritto all'inizio dello spartito (il valzer), significa che ogni battuta contiene 3 note da 1/4.</p>
<p>Anche le note «stanno bene insieme» grazie alle frazioni: <b>Pitagora</b> scoprì che una corda lunga la metà (1/2) suona un'<b>ottava</b> più in alto, e una lunga 2/3 suona una <b>quinta</b>. Le frazioni semplici danno i suoni più armoniosi!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Se le regole sulle frazioni ti sembrano magia, prova questi metodi usati in altri Paesi.",
      tabs: [
        {
          label: "🇸🇬 Modello a barre (Singapore)",
          html: `<p>A Singapore, uno dei Paesi con i migliori risultati in matematica al mondo, i problemi con le frazioni si risolvono disegnando <b>barre</b> (<i>bar model</i>). Problema: «I 2/5 di una classe sono maschi. Le femmine sono 15. Quanti alunni in tutto?»</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#ffffff"/><g stroke="#0f172a" stroke-width="2"><rect x="50" y="70" width="100" height="50" fill="#93c5fd"/><rect x="150" y="70" width="100" height="50" fill="#93c5fd"/><rect x="250" y="70" width="100" height="50" fill="#f9a8d4"/><rect x="350" y="70" width="100" height="50" fill="#f9a8d4"/><rect x="450" y="70" width="100" height="50" fill="#f9a8d4"/></g><g font-size="18" font-weight="bold" text-anchor="middle"><text x="150" y="55" fill="#1d4ed8">maschi: 2/5</text><text x="400" y="55" fill="#be185d">femmine: 3/5 = 15</text><text x="300" y="102" fill="#0f172a">5</text><text x="400" y="102" fill="#0f172a">5</text><text x="500" y="102" fill="#0f172a">5</text><text x="100" y="102" fill="#0f172a">5</text><text x="200" y="102" fill="#0f172a">5</text></g><text x="300" y="160" font-size="18" text-anchor="middle" fill="#0f172a">3 parti = 15 → 1 parte = 5</text><text x="300" y="195" font-size="20" font-weight="bold" text-anchor="middle" fill="#15803d">5 parti = 25 alunni</text></svg>`
        },
        {
          label: "🦋 La farfalla (USA)",
          html: `<p>Negli Stati Uniti molti studenti usano il «<b>butterfly method</b>» per sommare due frazioni: si moltiplica <b>in croce</b> (le ali della farfalla), si sommano i prodotti per avere il numeratore, e si moltiplicano i denominatori (il corpo).</p><p>2/3 + 1/4: ali 2 × 4 = 8 e 3 × 1 = 3 → numeratore 8 + 3 = 11; corpo 3 × 4 = 12 → <b>11/12</b>.</p><p>Funziona sempre, perché usa il prodotto dei denominatori come denominatore comune. Ma attenzione: con numeri grandi conviene il mcm, altrimenti poi bisogna semplificare molto (1/6 + 1/9 con la farfalla dà 15/54 = 5/18).</p>`
        },
        {
          label: "🧊 Moltiplicare con l'area (3D)",
          html: `<p>Come si vede 2/3 × 3/4? Prendi un rettangolo di <b>3 × 4 = 12</b> cubetti (il denominatore del risultato). Colora 2 righe su 3 e 3 colonne su 4: la parte colorata due volte è un rettangolo di <b>2 × 3 = 6</b> cubetti. Quindi 2/3 × 3/4 = 6/12 = 1/2. Numeratore per numeratore, denominatore per denominatore: ecco perché!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "📏 Sulla retta dei numeri",
          html: "<p>Dividi ogni intero in 4 parti: ogni salto è 1/4. Contando i salti puoi sommare: 3/4 + 2/4 = 5 salti = 5/4, cioè un intero e un quarto. I segni mostrano 3 (= 3/4) e 5 (= 5/4) se pensi ogni tacca come un quarto.</p>",
          widget: "numberLine",
          options: { min: 0, max: 8, step: 1, marks: [3, 5] }
        },
        {
          label: "🍕 La regola del «perché si gira»",
          html: `<p>Perché per dividere si moltiplica per il reciproco? Pensa a una domanda concreta: <b>quante fette da 1/8 di pizza ci sono in 3 pizze?</b> Ogni pizza ha 8 fette, quindi 3 × 8 = 24. Hai calcolato 3 : 1/8 = 3 × 8/1 = 24!</p><p>Dividere per una frazione significa chiedersi «<b>quante volte ci sta?</b>». Dividere per 1/8 è come contare gli ottavi: si moltiplica per 8. Se le fette sono da 3/8, ce ne stanno 3 volte di meno: 3 × 8/3 = 8 fette.</p>`
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: operazioni",
      questions: [
        { type: "mc", q: "2/5 + 1/3 = ?", options: ["3/8", "11/15", "3/15", "2/15"], answer: 1, explain: "mcm(5, 3) = 15: 6/15 + 5/15 = 11/15." },
        { type: "mc", q: "5/6 × 3/10 = ?", options: ["15/60", "1/4", "8/16", "1/2"], answer: 1, explain: "Semplifico in croce 5 con 10 e 3 con 6: 1/2 × 1/2 = 1/4." },
        { type: "mc", q: "4/9 : 2/3 = ?", options: ["8/27", "2/3", "6/9", "3/2"], answer: 1, explain: "4/9 × 3/2 = 12/18 = 2/3." },
        { type: "tf", q: "Il reciproco di 7 è 1/7.", answer: true, explain: "7 = 7/1, scambiando si ottiene 1/7. Infatti 7 × 1/7 = 1." }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: da dove vengono le regole delle frazioni",
      nodes: [
        { id: "dividere", label: "Dividere in parti uguali", x: 50, y: 5, color: "#64748b", html: "Il bisogno di spartire pane, terreni, eredità.", why: "Egizi e Babilonesi usavano già le frazioni 4.000 anni fa per dividere raccolti e misurare campi dopo le piene del Nilo." },
        { id: "frazione", label: "Frazione a/b", x: 50, y: 20, color: "#2563eb", html: "Operatore: dividi per b e moltiplica per a.", why: "La parola viene dal latino «frangere» = rompere. Una frazione è anche il risultato della divisione a : b, per questo b ≠ 0." },
        { id: "tipi", label: "Proprie, improprie, apparenti", x: 15, y: 34, color: "#0ea5e9", html: "Minori di 1, maggiori di 1, uguali a un naturale.", why: "Dipende dal confronto tra numeratore e denominatore: le apparenti mostrano che i numeri naturali sono un caso particolare delle frazioni." },
        { id: "invariantiva", label: "Proprietà invariantiva", x: 50, y: 38, color: "#16a34a", html: "× o : numeratore e denominatore per lo stesso numero.", why: "È la stessa proprietà invariantiva della divisione: (a × k) : (b × k) = a : b. Tagliare ogni fetta in 2 raddoppia le fette ma non cambia la quantità." },
        { id: "mcd", label: "Semplificazione (MCD)", x: 25, y: 56, color: "#9333ea", html: "Si divide per il MCD: frazione ai minimi termini.", why: "Il teorema fondamentale dell'aritmetica assicura che la forma ridotta è unica: ogni numero razionale ha un solo «rappresentante» ai minimi termini." },
        { id: "mcm", label: "Denominatore comune (mcm)", x: 75, y: 56, color: "#ea580c", html: "Per confrontare, sommare e sottrarre.", why: "Si possono sommare solo «cose dello stesso tipo»: terzi con terzi, quarti con quarti. Il mcm è il più piccolo «tipo» comune." },
        { id: "moltdiv", label: "× e : (reciproco)", x: 25, y: 76, color: "#dc2626", html: "Prodotto: num × num, den × den. Divisione: × il reciproco.", why: "Il prodotto si vede con l'area di un rettangolo; dividere per a/b è chiedersi quante volte a/b sta nel numero, cioè moltiplicare per b/a." },
        { id: "addsott", label: "+ e −", x: 75, y: 76, color: "#f59e0b", html: "Stesso denominatore, poi si sommano i numeratori.", why: "1/2 + 1/3 ≠ 2/5: lo si vede con una torta. Gli Egizi evitavano il problema scrivendo tutto come somme di frazioni unitarie." },
        { id: "razionali", label: "Numeri razionali ℚ", x: 50, y: 93, color: "#0f766e", html: "L'insieme di tutte le frazioni: un nuovo insieme di numeri.", why: "Con le frazioni la divisione è sempre possibile (tranne per 0). Il nome viene dal latino «ratio» = rapporto. Fibonacci (1202) diffuse in Europa la linea di frazione." }
      ],
      edges: [["dividere", "frazione", "nasce"], ["frazione", "tipi", "si classifica"], ["frazione", "invariantiva", "gode della"], ["invariantiva", "mcd", "permette di semplificare"], ["invariantiva", "mcm", "permette di trasformare"], ["mcd", "moltdiv", "semplificare prima"], ["mcm", "addsott", "serve per"], ["moltdiv", "razionali", "formano"], ["addsott", "razionali", "formano"]]
    }
  ],
  glossary: [
    { t: "Frazione", d: "Numero della forma a/b (b ≠ 0) che indica a parti di un intero diviso in b parti uguali." },
    { t: "Numeratore", d: "Il numero sopra la linea di frazione: quante parti si prendono." },
    { t: "Denominatore", d: "Il numero sotto la linea: in quante parti si divide l'intero." },
    { t: "Frazione propria", d: "Frazione con numeratore minore del denominatore (vale meno di 1)." },
    { t: "Frazione impropria", d: "Frazione con numeratore maggiore del denominatore (vale più di 1)." },
    { t: "Frazione apparente", d: "Frazione con numeratore multiplo del denominatore: vale un numero naturale." },
    { t: "Frazioni equivalenti", d: "Frazioni che rappresentano la stessa quantità." },
    { t: "Minimi termini", d: "Frazione in cui numeratore e denominatore sono primi tra loro." },
    { t: "Minimo comune denominatore", d: "Il mcm dei denominatori, usato per confrontare e sommare." },
    { t: "Reciproco", d: "Frazione ottenuta scambiando numeratore e denominatore." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto sono i 5/8 di 64?", answer: 40, tol: 0, explain: "64 : 8 = 8; 8 × 5 = 40." },
      { type: "num", q: "I 3/7 di un numero sono 21. Qual è il numero?", answer: 49, tol: 0, explain: "Problema inverso: 21 : 3 × 7 = 49." },
      { type: "mc", q: "La frazione 9/4 è…", options: ["propria", "impropria", "apparente", "unitaria"], answer: 1, explain: "9 > 4 e 9 non è multiplo di 4." },
      { type: "mc", q: "Qual è la frazione 45/60 ridotta ai minimi termini?", options: ["9/12", "3/4", "15/20", "5/6"], answer: 1, explain: "MCD(45, 60) = 15: 3/4." },
      { type: "mc", q: "Quale frazione è maggiore?", options: ["3/5", "4/7", "Sono uguali"], answer: 0, explain: "Prodotto in croce: 3 × 7 = 21 > 5 × 4 = 20, quindi 3/5 > 4/7." },
      { type: "mc", q: "5/6 − 1/4 = ?", options: ["4/2", "7/12", "1/2", "4/24"], answer: 1, explain: "mcm(6, 4) = 12: 10/12 − 3/12 = 7/12." },
      { type: "mc", q: "(3/4)² = ?", options: ["6/8", "9/16", "9/4", "3/16"], answer: 1, explain: "Si elevano al quadrato numeratore e denominatore: 9/16." },
      { type: "mc", q: "7/10 : 14/5 = ?", options: ["1/4", "49/50", "4", "98/50"], answer: 0, explain: "7/10 × 5/14 = (semplifico 7 con 14 e 5 con 10) 1/2 × 1/2 = 1/4." },
      { type: "tf", q: "1/2 + 1/3 = 2/5", answer: false, explain: "Non si sommano i denominatori: 3/6 + 2/6 = 5/6." },
      { type: "num", q: "Un libro ha 240 pagine. Luca ne ha lette i 3/8. Quante pagine gli mancano?", answer: 150, tol: 0, unit: "pagine", explain: "Lette: 240 : 8 × 3 = 90. Mancano 240 − 90 = 150 (i 5/8)." },
      { type: "order", q: "Metti in ordine dalla più piccola alla più grande", items: ["1/4", "1/3", "1/2", "2/3", "5/4"], explain: "In dodicesimi: 3/12, 4/12, 6/12, 8/12, 15/12." },
      { type: "mc", q: "Qual è il reciproco di 2/9?", options: ["9/2", "2/9", "−2/9", "1/9"], answer: 0, explain: "Si scambiano numeratore e denominatore: 9/2." }
    ],
    gen: [["fracEquiv", 1], ["fracAdd", 2]]
  }
});
