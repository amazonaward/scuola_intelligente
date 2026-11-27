TOPIC('it', {
  id: "l1-mat-insiemi-numerici",
  title: "Numeri naturali, interi e razionali",
  intro: "Contare le pecore, segnare un debito, dividere una pizza in parti uguali: ogni problema della vita quotidiana ha richiesto, nella storia, una nuova specie di numeri. Dai <b>naturali</b> agli <b>interi</b> fino ai <b>razionali</b> costruiamo, un passo alla volta, un sistema in cui ogni addizione, sottrazione, moltiplicazione e divisione (tranne per zero) ha sempre un risultato. In questa lezione ripassiamo con rigore le <b>proprietà delle operazioni</b>, le <b>potenze</b>, le <b>frazioni</b> e i <b>numeri decimali periodici</b>, con una domanda in sottofondo: perché ci servono sempre nuovi numeri?",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "ℕ, ℤ, ℚ: tre insiemi, tre esigenze",
      html: `<p>I <b>numeri naturali</b> ℕ = {0, 1, 2, 3, …} servono per contare. In ℕ l'addizione e la moltiplicazione danno sempre un naturale (si dice che ℕ è <b>chiuso</b> rispetto a esse), ma la sottrazione no: 3 − 5 non è un numero naturale.</p>
<p>Per questo si introducono gli <b>interi relativi</b> ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}, che includono gli <b>opposti</b> dei naturali. In ℤ si possono sempre fare somme, differenze e prodotti. Ma 7 : 2 non è un intero.</p>
<p>Per rendere sempre possibile la divisione (per un numero diverso da zero) si costruiscono i <b>numeri razionali</b> ℚ, cioè quelli che si possono scrivere come <b>frazione</b> a/b con a ∈ ℤ e b ∈ ℤ, b ≠ 0. Per esempio 3/4, −5/2, 7 = 7/1.</p>
<p>Valgono le inclusioni <b>ℕ ⊂ ℤ ⊂ ℚ</b>. Ogni passaggio \"risolve\" un'equazione che prima non aveva soluzione: x + 5 = 3 ha soluzione in ℤ (x = −2), 2x = 7 in ℚ (x = 7/2). Ma l'ampliamento non è finito: x² = 2 non ha soluzioni in ℚ, e per questo servono i numeri reali (lo vedrai nei prossimi anni).</p>
<p>Ricorda le notazioni: ℤ⁺ (positivi), ℤ⁻ (negativi), ℤ* (senza lo zero), ℚ⁺ ecc. Lo <b>zero</b> è un naturale in molti testi italiani; alcuni autori escludono lo zero da ℕ e scrivono ℕ₀ per includerlo.</p>`
    },
    {
      type: "svg",
      title: "Gli insiemi numerici uno dentro l'altro",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<ellipse cx="300" cy="150" rx="280" ry="135" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<ellipse cx="300" cy="165" rx="205" ry="100" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="180" rx="125" ry="62" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="300" y="42" font-size="18" text-anchor="middle" fill="#78350f" font-weight="bold">ℚ: frazioni a/b (b ≠ 0)  ·  2/3, −5/4, 0,(3)</text>
<text x="300" y="96" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ℤ: …, −2, −1, 0, 1, 2, …</text>
<text x="300" y="187" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">ℕ: 0, 1, 2, 3, …</text>
<text x="300" y="270" font-size="16" text-anchor="middle" fill="#334155">Fuori da ℚ ci sono numeri come √2 e π: li incontrerai tra i reali.</text>
</svg>`,
      caption: "Ogni insieme contiene il precedente: ogni naturale è un intero, ogni intero è un razionale (n = n/1)."
    },
    {
      type: "text",
      title: "Le proprietà delle operazioni",
      html: `<p>Le operazioni obbediscono a regole precise. Siano a, b, c numeri qualsiasi:</p>
<table>
<tr><th>Proprietà</th><th>Addizione</th><th>Moltiplicazione</th></tr>
<tr><td><b>Commutativa</b></td><td>a + b = b + a</td><td>a · b = b · a</td></tr>
<tr><td><b>Associativa</b></td><td>(a + b) + c = a + (b + c)</td><td>(a · b) · c = a · (b · c)</td></tr>
<tr><td><b>Elemento neutro</b></td><td>a + 0 = a</td><td>a · 1 = a</td></tr>
<tr><td><b>Inverso</b></td><td>opposto: a + (−a) = 0 (in ℤ e ℚ)</td><td>reciproco: a · (1/a) = 1, se a ≠ 0 (in ℚ)</td></tr>
</table>
<p>Collega le due operazioni la <b>proprietà distributiva</b>: <b>a · (b + c) = a·b + a·c</b>. È la regola che permette di \"togliere le parentesi\" e, al contrario, di \"raccogliere\": 7·38 + 7·62 = 7·(38 + 62) = 700.</p>
<p>Sottrazione e divisione <b>non</b> sono commutative né associative: 8 − 3 ≠ 3 − 8 e (20 : 4) : 5 = 1 ≠ 20 : (4 : 5) = 25. Ma si possono <b>ridurre</b> alle altre due: a − b = a + (−b) e a : b = a · (1/b). Così in ℚ la regola dei segni diventa semplice: il prodotto di due numeri ha segno + se i fattori hanno segno uguale, − se diverso.</p>
<p>Altre proprietà utili: la <b>proprietà invariantiva</b> della sottrazione (a − b = (a + k) − (b + k)) e della divisione (a : b = (a·k) : (b·k), k ≠ 0), la <b>legge di annullamento del prodotto</b> (a·b = 0 ⇒ a = 0 oppure b = 0), e il fatto che <b>non si può dividere per zero</b>: 5 : 0 non ha senso (nessun numero per 0 dà 5), e 0 : 0 è indeterminato (qualsiasi numero per 0 dà 0).</p>
<p><b>Ordine delle operazioni</b>: prima le parentesi (tonde, quadre, graffe, dall'interno), poi le potenze, poi moltiplicazioni e divisioni (da sinistra a destra), infine addizioni e sottrazioni. Esempio: 2 + 3 · 4² − (10 − 4) : 2 = 2 + 3·16 − 6 : 2 = 2 + 48 − 3 = 47.</p>`
    },
    {
      type: "example",
      title: "Esempio: il calcolo mentale con le proprietà",
      html: `<p>Le proprietà non sono formalismi: servono a calcolare più in fretta.</p>
<ul>
<li><b>25 · 37 · 4</b>: per commutativa e associativa, (25 · 4) · 37 = 100 · 37 = <b>3700</b>.</li>
<li><b>99 · 46</b>: 99 = 100 − 1, quindi 99·46 = 100·46 − 46 = 4600 − 46 = <b>4554</b> (distributiva).</li>
<li><b>1000 − 487</b>: per la proprietà invariantiva (aggiungo 13 a entrambi) = 1013 − 500 = <b>513</b>.</li>
<li><b>2,5 · 48</b> = (10/4) · 48 = 10 · 12 = <b>120</b>.</li>
</ul>
<p>Il giovane Gauss, secondo la tradizione, a scuola calcolò 1 + 2 + … + 100 raggruppando i numeri in 50 coppie che sommano 101: 50 · 101 = 5050. Un uso brillante di commutativa, associativa e distributiva!</p>`
    },
    {
      type: "text",
      title: "Le potenze",
      html: `<p>La <b>potenza</b> a<sup>n</sup> (con n naturale) è il prodotto di n fattori uguali ad a: a<sup>n</sup> = a·a·…·a. a è la <b>base</b>, n l'<b>esponente</b>. Estensioni importanti:</p>
<ul>
<li>a<sup>1</sup> = a;</li>
<li><b>a<sup>0</sup> = 1</b> per a ≠ 0 (0<sup>0</sup> è indeterminato);</li>
<li><b>a<sup>−n</sup> = 1/a<sup>n</sup></b> = (1/a)<sup>n</sup> per a ≠ 0: 2<sup>−3</sup> = 1/8, (2/3)<sup>−2</sup> = 9/4.</li>
</ul>
<p>Proprietà (a, b ≠ 0; m, n interi):</p>
<table>
<tr><td>Prodotto di potenze con stessa base</td><td>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></td></tr>
<tr><td>Quoziente di potenze con stessa base</td><td>a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup></td></tr>
<tr><td>Potenza di potenza</td><td>(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></td></tr>
<tr><td>Prodotto con stesso esponente</td><td>a<sup>n</sup> · b<sup>n</sup> = (a·b)<sup>n</sup></td></tr>
<tr><td>Quoziente con stesso esponente</td><td>a<sup>n</sup> : b<sup>n</sup> = (a : b)<sup>n</sup></td></tr>
</table>
<p>Perché a<sup>0</sup> = 1? Perché deve valere a<sup>n</sup> : a<sup>n</sup> = a<sup>n−n</sup> = a<sup>0</sup>, ma d'altra parte è 1. Perché a<sup>−n</sup> = 1/a<sup>n</sup>? Perché a<sup>0</sup> = a<sup>n</sup> · a<sup>−n</sup> = 1. Le definizioni sono scelte in modo che le proprietà valgano sempre: è così che si estende un concetto in matematica.</p>
<p><b>Attenzione ai segni</b>: (−2)<sup>2</sup> = 4, ma −2<sup>2</sup> = −4 (la potenza ha precedenza sul segno meno). Una potenza di base negativa è positiva se l'esponente è pari, negativa se dispari. Inoltre (a + b)<sup>2</sup> <b>non</b> è a<sup>2</sup> + b<sup>2</sup>: lo vedrai tra poco con i prodotti notevoli.</p>
<p>Le potenze di 10 danno la <b>notazione scientifica</b>: 300 000 000 = 3 · 10<sup>8</sup>; 0,00000052 = 5,2 · 10<sup>−7</sup>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: proprietà e potenze",
      questions: [
        { type: "num", q: "Calcola: 2 + 3 · 4² − (10 − 4) : 2", answer: 47, explain: "Potenze: 4² = 16; poi 3 · 16 = 48; (10 − 4) : 2 = 3. Quindi 2 + 48 − 3 = 47." },
        { type: "num", q: "Calcola: 2⁵ · 2⁻² : 2²", answer: 2, explain: "Le basi sono uguali: esponente 5 − 2 − 2 = 1, quindi 2¹ = 2." },
        { type: "mc", q: "Quanto vale −3²?", options: ["9", "−9", "6"], answer: 1, explain: "La potenza si calcola prima del segno meno: −(3²) = −9. Invece (−3)² = 9." },
        { type: "tf", q: "La divisione è un'operazione commutativa.", answer: false, explain: "Per esempio 8 : 2 = 4 ma 2 : 8 = 1/4." }
      ]
    },
    {
      type: "text",
      title: "Le frazioni e i numeri razionali",
      html: `<p>Una <b>frazione</b> a/b indica a parti di un intero diviso in b parti uguali (b = <b>denominatore</b>, a = <b>numeratore</b>). Due frazioni sono <b>equivalenti</b> se rappresentano lo stesso numero: a/b = c/d ⇔ a·d = b·c. Moltiplicando o dividendo numeratore e denominatore per lo stesso numero ≠ 0 si ottiene una frazione equivalente (<b>proprietà invariantiva</b>): 2/3 = 4/6 = 10/15. Un numero razionale è la classe di tutte le frazioni equivalenti. Si <b>riduce ai minimi termini</b> dividendo per il MCD: 18/24 = 3/4.</p>
<p><b>Operazioni in ℚ</b>:</p>
<ul>
<li><b>Somma/differenza</b>: si riducono al denominatore comune (mcm): 1/6 + 3/4 = 2/12 + 9/12 = 11/12.</li>
<li><b>Prodotto</b>: numeratore per numeratore, denominatore per denominatore (si semplifica prima!): (4/9) · (3/8) = 12/72 = 1/6.</li>
<li><b>Quoziente</b>: si moltiplica per il <b>reciproco</b> del divisore: (3/5) : (9/10) = 3/5 · 10/9 = 30/45 = 2/3.</li>
<li><b>Confronto</b>: si portano al denominatore comune e si confrontano i numeratori: 5/8 &gt; 3/5, perché 25/40 &gt; 24/40. Oppure si confrontano i prodotti \"in croce\": 5·5 = 25 &gt; 3·8 = 24.</li>
</ul>
<p>I razionali sono <b>densi</b>: tra due razionali ce n'è sempre un altro (per esempio la media). Quindi tra 0 e 1 ci sono infiniti razionali, senza \"numero successivo\": a differenza dei naturali, non si può dire qual è il successore di 1/2. Eppure sulla retta numerica rimangono dei \"buchi\": √2 non è razionale, come già scoprirono i pitagorici (V sec. a.C.), con un ragionamento per assurdo.</p>`
    },
    {
      type: "example",
      title: "Esempio: le ricette e le frazioni",
      html: `<p>Una ricetta per 4 persone richiede 3/4 di litro di latte, ma tu cucini per 6. E ne hai a disposizione solo 1 litro. Basta?</p>
<ol>
<li>Fattore di scala: 6/4 = 3/2.</li>
<li>Latte necessario: (3/4) · (3/2) = 9/8 di litro = 1 + 1/8 di litro = 1,125 L.</li>
<li>Confronto con 1 L = 8/8: 9/8 &gt; 8/8 → <b>non basta</b>, mancano 1/8 di litro (125 mL).</li>
</ol>
<p>Altro esempio, in negativo: la tua banca ti addebita 2/5 di un debito di 150 €: (−150) · (2/5) = −60 €. Il prodotto di un negativo per un positivo è negativo.</p>`
    },
    {
      type: "text",
      title: "Numeri decimali: finiti e periodici",
      html: `<p>Ogni frazione si può trasformare in <b>numero decimale</b> eseguendo la divisione. Può accadere che:</p>
<ul>
<li>la divisione <b>termina</b>: <b>decimale finito</b>. 3/4 = 0,75; 7/20 = 0,35;</li>
<li>la divisione <b>non termina</b> ma le cifre si ripetono: <b>decimale periodico</b>. 1/3 = 0,3333… = 0,<span style="text-decoration:overline">3</span> (si scrive 0,(3)); 5/6 = 0,8333… = 0,8(3); 1/7 = 0,(142857).</li>
</ul>
<p>Perché si ripete sempre? Dividendo per b ci sono solo b possibili resti (da 0 a b − 1): dopo al massimo b passi un resto si ripete e da lì tutto si ripete. Il gruppo di cifre ripetute è il <b>periodo</b>; le cifre tra la virgola e il periodo sono l'<b>antiperiodo</b>.</p>
<p><b>Criterio</b>: una frazione ridotta ai minimi termini dà un decimale <b>finito</b> se il denominatore ha come unici fattori primi 2 e/o 5 (cioè i fattori di 10); altrimenti è <b>periodico</b>. Per esempio 7/20 (20 = 2²·5) è finito; 7/12 (12 = 2²·3) è periodico misto.</p>
<p><b>Frazione generatrice</b> (da decimale a frazione):</p>
<ul>
<li><b>Periodico semplice</b>: numeratore = numero senza virgola, <i>meno</i> la parte intera; denominatore = tanti 9 quante sono le cifre del periodo. 2,(45) = (245 − 2)/99 = 243/99 = 27/11.</li>
<li><b>Periodico misto</b>: numeratore = numero senza virgola fino al periodo, <i>meno</i> il numero fino all'antiperiodo; denominatore = tanti 9 quante le cifre del periodo seguiti da tanti 0 quante le cifre dell'antiperiodo. 0,1(6) = (16 − 1)/90 = 15/90 = 1/6; 3,2(7) = (327 − 32)/90 = 295/90 = 59/18.</li>
</ul>
<p>Una curiosità: <b>0,(9) = 1</b>. Infatti 0,(9) = 9/9 = 1. Un altro modo: 1/3 = 0,(3), quindi 3 · (1/3) = 3 · 0,(3) = 0,(9) e allo stesso tempo = 1. Non c'è nessun numero tra 0,(9) e 1: sono lo stesso numero scritto in due modi.</p>`
    },
    {
      type: "example",
      title: "Esempio: dalla frazione al decimale, e ritorno",
      html: `<p><b>Da frazione a decimale</b>: 5/7 = 0,714285 714285… = 0,(714285), periodo di 6 cifre. Per 7 i resti possibili sono 1, …, 6: il periodo di 1/7 usa tutti i resti e per questo è così lungo.</p>
<p><b>Da decimale a frazione</b>: trasforma 0,(36).</p>
<ol>
<li>È periodico semplice con parte intera 0 e periodo 36 (due cifre): 36/99.</li>
<li>Semplifico per 9: 36/99 = 4/11.</li>
<li>Controllo: 4 : 11 = 0,363636… ✔</li>
</ol>
<p>Con questo metodo ogni decimale periodico (e ogni finito) si riconosce come numero razionale. Viceversa, un decimale con infinite cifre <b>non periodico</b> come 0,1011011101111… non può essere razionale: è un numero irrazionale.</p>`
    },
    {
      type: "widget",
      title: "A quale insieme appartiene?",
      widget: "classify",
      options: { groups: ["Naturale", "Intero non naturale", "Razionale non intero", "Né razionale né intero"], items: [
        ["7", 0], ["0", 0], ["√16", 0],
        ["−4", 1], ["−12", 1], ["−20 : 5", 1],
        ["3/4", 2], ["−2/5", 2], ["0,(3)", 2], ["2,5", 2],
        ["√2", 3], ["π", 3]
      ] },
      caption: "√16 = 4 è naturale; −20 : 5 = −4 è intero; 0,(3) = 1/3 è razionale; √2 e π non sono razionali."
    },
    {
      type: "curiosity",
      title: "Il numero che scandalizzò i pitagorici",
      html: `<p>I pitagorici credevano che \"tutto è numero\", cioè rapporto tra interi. Ma applicando il loro stesso teorema al quadrato di lato 1 la diagonale misura √2, e <b>non esistono due interi a e b con (a/b)² = 2</b>. La dimostrazione è per assurdo: se a/b fosse ridotta ai minimi termini, a² = 2b² renderebbe a pari, quindi a = 2k e 4k² = 2b² → b² = 2k² → anche b pari, contro l'ipotesi che a/b fosse ridotta. Secondo una leggenda (di cui gli storici dubitano) il pitagorico Ippaso di Metaponto, che rivelò l'esistenza delle grandezze incommensurabili, sarebbe stato gettato in mare. Quella scoperta dei \"numeri irrazionali\" cambiò per sempre la matematica greca.</p>`
    },
    {
      type: "curiosity",
      title: "Lo zero e i numeri negativi hanno avuto una storia difficile",
      html: `<p>Lo zero come numero vero e proprio fu sviluppato in India: nel <i>Brahmasphutasiddhanta</i> (628 d.C.) Brahmagupta ne dà le regole di calcolo, e dà anche le regole per i numeri negativi, interpretati come \"debiti\" (i positivi erano \"beni\"). In Europa i numeri negativi furono accettati con grande ritardo: ancora nel Cinquecento molti matematici li chiamavano \"numeri assurdi\" o \"fittizi\". Leonardo Pisano (Fibonacci) nel <i>Liber abaci</i> (1202) portò in Europa le cifre indo-arabe e lo zero, ma ci vollero secoli perché si diffondessero. I segni + e − comparvero in stampa alla fine del Quattrocento.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire numeri e frazioni",
      intro: "Se la regola dei segni o le frazioni ti sembrano formule da memorizzare, prova queste immagini.",
      tabs: [
        {
          label: "🍕 La pizza",
          html: `<p>Una frazione n/d è una pizza divisa in d fette uguali di cui se ne prendono n. Trascina i cursori per vedere che 2/3 e 4/6 coprono la <b>stessa quantità</b> di pizza: le frazioni equivalenti sono solo modi diversi di tagliare la stessa pizza. Sommare 1/2 e 1/3 significa trovare un taglio (in sesti) che va bene per entrambe: 3/6 + 2/6 = 5/6.</p>`,
          widget: "fractionPie",
          options: { n: 2, d: 3 }
        },
        {
          label: "🌡️ La retta e la temperatura",
          html: `<p>I numeri relativi sono i numeri dei termometri: se sono −3 °C e la temperatura sale di 5 °C, arrivo a +2 °C. Sulla retta, sommare un numero positivo è un salto a destra, uno negativo è un salto a sinistra. Moltiplicare per −1 significa \"specchiare\" rispetto allo zero. Prova: parti da −3 e fai un salto di 5.</p>`,
          widget: "numberLine",
          options: { min: -10, max: 10, step: 5, start: -3 }
        },
        {
          label: "💰 Beni e debiti",
          html: `<p>Il modo in cui lo pensavano gli indiani del VII secolo: positivo = guadagno, negativo = debito.</p>
<ul>
<li>(+5) + (−3): ho 5 € e devo 3 €: mi restano 2 €.</li>
<li>(−5) − (−3): ho un debito di 5 € e mi <b>tolgono</b> un debito di 3 €: il debito scende a 2 €, cioè −2.</li>
<li>(−4) · (+3): tre debiti da 4 € = −12 €.</li>
<li>(−4) · (−3): <b>tolgo</b> tre debiti da 4 € = +12 €. Ecco perché \"meno per meno fa più\".</li>
</ul>`
        },
        {
          label: "📏 0,(9) = 1 con un trucco",
          html: `<p>Sia x = 0,999… Moltiplico per 10: 10x = 9,999… Sottraggo: 10x − x = 9,999… − 0,999… = 9, quindi 9x = 9 e <b>x = 1</b>. Lo stesso trucco funziona per ogni periodico: per x = 0,(36) moltiplico per 100: 100x = 36,(36), sottraggo x: 99x = 36, quindi x = 36/99. È la dimostrazione della regola della frazione generatrice.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei numeri",
      nodes: [
        { id: "naturali", label: "Naturali ℕ", x: 15, y: 8, color: "#2563eb", html: "0, 1, 2, 3, …: servono per contare.", why: "Sono i primi numeri della storia: tacche su ossa risalgono a oltre 20 000 anni fa. Peano (1889) li assiomatizzò: 0 è un numero, ogni numero ha un successore, vale il principio di induzione." },
        { id: "interi", label: "Interi ℤ", x: 50, y: 22, color: "#16a34a", html: "Naturali con i loro opposti: …, −2, −1, 0, 1, …", why: "Servono per rendere sempre possibile la sottrazione. Introdotti con l'idea di debito da Brahmagupta (628 d.C.) e accettati in Europa solo nel Cinquecento-Seicento." },
        { id: "razionali", label: "Razionali ℚ", x: 80, y: 40, color: "#f59e0b", html: "Frazioni a/b con b ≠ 0.", why: "Rendono sempre possibile la divisione (per numeri non nulli). Nascono dalla misura: se una lunghezza non è multipla dell'unità, la si esprime come frazione. Già gli Egizi usavano frazioni unitarie." },
        { id: "proprieta", label: "Proprietà delle operazioni", x: 20, y: 38, color: "#9333ea", html: "Commutativa, associativa, distributiva, elementi neutri e inversi.", why: "Sono gli \"assiomi\" dell'algebra: ℚ è un campo. Tutte le tecniche di calcolo letterale (tra poco) derivano da queste regole." },
        { id: "potenze", label: "Potenze", x: 12, y: 66, color: "#ef4444", html: "Prodotto ripetuto: aⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.", why: "Le definizioni di a⁰ e a⁻ⁿ sono scelte per mantenere valide le proprietà: la matematica estende i concetti conservando le regole." },
        { id: "frazioni", label: "Frazioni e operazioni", x: 50, y: 62, color: "#0ea5e9", html: "Equivalenza, denominatore comune, reciproco.", why: "La regola del reciproco nasce dal fatto che dividere per b significa trovare quel numero che moltiplicato per b dà il dividendo: x·b = a → x = a/b." },
        { id: "decimali", label: "Decimali finiti e periodici", x: 85, y: 78, color: "#22c55e", html: "Rappresentazioni in base 10 dei razionali.", why: "La divisione ha solo un numero finito di resti possibili, quindi si ferma o si ripete: ogni razionale ha scrittura decimale finita o periodica, e viceversa." },
        { id: "irrazionali", label: "Oltre ℚ: irrazionali", x: 55, y: 92, color: "#64748b", html: "√2, π: decimali infiniti non periodici.", why: "La scoperta di √2 (Pitagorici, V sec. a.C.) mostrò che le frazioni non bastano per misurare tutte le lunghezze: servono i numeri reali." }
      ],
      edges: [["naturali", "interi", "ampliamento"], ["interi", "razionali", "ampliamento"], ["naturali", "proprieta", "operazioni"], ["proprieta", "potenze", "estendono"], ["razionali", "frazioni", "scritti come"], ["frazioni", "decimali", "divisione"], ["razionali", "decimali", "hanno"], ["decimali", "irrazionali", "il limite"]]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>ℕ ⊂ ℤ ⊂ ℚ: ogni insieme risolve una nuova equazione (sottrazione, divisione).</li>
<li>Proprietà: commutativa, associativa, distributiva; sottrazione e divisione <b>non</b> sono né commutative né associative; mai dividere per 0.</li>
<li>a⁰ = 1; a⁻ⁿ = 1/aⁿ; aᵐ·aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ. Attenzione: −2² = −4 ma (−2)² = 4.</li>
<li>Frazioni: dividere per una frazione = moltiplicare per il reciproco.</li>
<li>Decimale finito se il denominatore (ridotto) ha solo 2 e 5; altrimenti periodico. Frazione generatrice: 0,(a) = a/9 e così via.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: frazioni e decimali",
      questions: [
        { type: "num", q: "Calcola: 1/6 + 3/4 (dai il risultato in dodicesimi, cioè il numeratore su denominatore 12).", answer: 11, explain: "1/6 = 2/12 e 3/4 = 9/12; la somma è 11/12: il numeratore è 11." },
        { type: "mc", q: "Qual è la frazione generatrice di 0,(6)?", options: ["6/10", "2/3", "6/100"], answer: 1, explain: "0,(6) = 6/9 = 2/3." },
        { type: "mc", q: "Quale frazione ha una scrittura decimale periodica?", options: ["3/8", "7/20", "5/12"], answer: 2, explain: "12 = 2²·3 contiene il fattore 3, quindi 5/12 = 0,41(6). 8 = 2³ e 20 = 2²·5 danno decimali finiti (0,375 e 0,35)." },
        { type: "tf", q: "0,(9) è un numero minore di 1.", answer: false, explain: "0,(9) = 9/9 = 1: è lo stesso numero." }
      ]
    }
  ],
  glossary: [
    { t: "Numeri naturali (ℕ)", d: "Numeri 0, 1, 2, 3, … usati per contare." },
    { t: "Numeri interi (ℤ)", d: "Naturali e loro opposti negativi." },
    { t: "Numeri razionali (ℚ)", d: "Numeri esprimibili come frazione a/b di interi con b ≠ 0." },
    { t: "Chiusura", d: "Un insieme è chiuso rispetto a un'operazione se il risultato appartiene ancora all'insieme." },
    { t: "Opposto", d: "Il numero −a che sommato ad a dà 0." },
    { t: "Reciproco", d: "Il numero 1/a che moltiplicato per a (≠ 0) dà 1." },
    { t: "Proprietà distributiva", d: "a·(b + c) = a·b + a·c." },
    { t: "Potenza", d: "aⁿ: prodotto di n fattori uguali ad a; per esponenti negativi, a⁻ⁿ = 1/aⁿ." },
    { t: "Frazioni equivalenti", d: "Frazioni che rappresentano lo stesso numero razionale." },
    { t: "Periodo", d: "Gruppo di cifre che si ripete infinite volte dopo la virgola." },
    { t: "Frazione generatrice", d: "La frazione che dà un certo decimale periodico." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale equazione non ha soluzione in ℕ ma ne ha in ℤ?", options: ["x + 4 = 9", "x + 7 = 3", "2x = 7"], answer: 1, explain: "x + 7 = 3 dà x = −4: intero, non naturale. 2x = 7 non ha soluzione in ℤ, solo in ℚ." },
      { type: "num", q: "Calcola: 5 − 2 · (3 − 7) + 6 : 3", answer: 15, explain: "3 − 7 = −4; 2 · (−4) = −8; 5 + 8 = 13; 6 : 3 = 2; 13 + 2 = 15." },
      { type: "num", q: "Calcola: (2³ · 2⁻⁵) : 2⁻² (risultato come numero).", answer: 1, explain: "Esponenti: 3 − 5 − (−2) = 0, quindi 2⁰ = 1." },
      { type: "num", q: "Calcola: (3/5) : (9/10) e scrivi il risultato come decimale (arrotonda a due cifre).", answer: 0.67, tol: 0.01, explain: "(3/5) · (10/9) = 30/45 = 2/3 ≈ 0,67." },
      { type: "mc", q: "Quale è la frazione ridotta ai minimi termini di 18/24?", options: ["3/4", "9/12", "6/8"], answer: 0, explain: "MCD(18, 24) = 6: 18/24 = 3/4. Le altre due non sono ridotte." },
      { type: "mc", q: "Qual è la frazione generatrice di 0,1(6)?", options: ["16/100", "1/6", "16/99"], answer: 1, explain: "(16 − 1)/90 = 15/90 = 1/6." },
      { type: "num", q: "Qual è la frazione generatrice di 2,(3)? Dai il numeratore della frazione ridotta ai minimi termini.", answer: 7, explain: "2,(3) = (23 − 2)/9 = 21/9 = 7/3." },
      { type: "tf", q: "La frazione 7/40 ha una scrittura decimale finita.", answer: true, explain: "40 = 2³·5: solo fattori 2 e 5. 7/40 = 0,175." },
      { type: "tf", q: "Tra due numeri razionali diversi esiste sempre un altro numero razionale.", answer: true, explain: "È la densità di ℚ: la media (a + b)/2 sta tra i due." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["−3/2", "−1", "0,(3)", "2/3", "1,5"], explain: "−1,5 < −1 < 0,333… < 0,666… < 1,5." },
      { type: "text", q: "Come si chiama il numero per cui moltiplicare un numero (≠ 0) per ottenere 1?", answer: ["reciproco", "il reciproco", "inverso", "inverso moltiplicativo"], explain: "È il reciproco: l'inverso moltiplicativo di a è 1/a." }
    ]
  }
});
