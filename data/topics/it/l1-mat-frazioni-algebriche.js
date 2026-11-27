TOPIC('it', {
  id: "l1-mat-frazioni-algebriche",
  title: "Frazioni algebriche",
  intro: "Le frazioni numeriche le conosci da anni. Che cosa succede se numeratore e denominatore contengono delle <b>lettere</b>? Nascono le <b>frazioni algebriche</b>: servono per descrivere velocità medie, resistenze elettriche, rapporti tra grandezze che cambiano. Il segreto è uno solo: tutto quello che sai sulle frazioni vale ancora, ma bisogna stare attenti a un nemico, il <b>denominatore che si annulla</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Che cos'è una frazione algebrica",
      html: `<p>Una <b>frazione algebrica</b> è un'espressione del tipo <b>A / B</b> in cui A e B sono polinomi e B <b>non è il polinomio nullo</b>. Per esempio:</p>
<p style="text-align:center">(x + 1)/(x − 3) &nbsp;&nbsp;&nbsp; 5/(x² − 4) &nbsp;&nbsp;&nbsp; (a² + b)/(2a)</p>
<p>Una frazione algebrica non è sempre un numero: dipende dal valore che diamo alle lettere. E con alcuni valori <b>non esiste</b>: la divisione per zero è impossibile. Quindi:</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Condizioni di esistenza (CE)</b>: sono i valori delle lettere per cui il denominatore è <b>diverso da zero</b>. Si trovano ponendo <b>denominatore ≠ 0</b>.</p>
<p>Esempio: per 5/(x² − 4) si impone x² − 4 ≠ 0, cioè (x − 2)(x + 2) ≠ 0, quindi <b>x ≠ 2 e x ≠ −2</b>. Il trucco è sempre lo stesso: <b>scomponi il denominatore</b> e togli i valori che annullano ogni fattore (per la legge di annullamento del prodotto).</p>
<p>Si scrivono le CE <b>prima</b> di fare qualunque semplificazione, perché le trasformazioni possono far "sparire" il problema senza risolverlo.</p>`
    },
    {
      type: "svg",
      title: "Il buco nel grafico",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="240" x2="560" y2="240" stroke="#475569" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="70" y1="270" x2="420" y2="40" stroke="#2563eb" stroke-width="4"/>
<circle cx="293" cy="176" r="9" fill="#f8fafc" stroke="#dc2626" stroke-width="4"/>
<line x1="293" y1="176" x2="293" y2="240" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="150" y1="176" x2="293" y2="176" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<text x="293" y="262" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">x = 2</text>
<text x="118" y="181" font-size="16" text-anchor="middle" fill="#dc2626" font-weight="bold">4</text>
<text x="430" y="40" font-size="16" fill="#1d4ed8" font-weight="bold">y = x + 2</text>
<text x="330" y="150" font-size="16" fill="#334155">in x = 2 la frazione non esiste</text>
<text x="300" y="25" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">y = (x² − 4)/(x − 2) = x + 2 con x ≠ 2</text>
</svg>`,
      caption: "La frazione (x² − 4)/(x − 2) si semplifica in x + 2, ma il suo grafico ha un buco in x = 2: la semplificazione non deve far dimenticare le CE."
    },
    {
      type: "text",
      title: "Semplificare una frazione algebrica",
      html: `<p>Come con i numeri (15/35 = 3/5 dividendo per 5), si può semplificare dividendo numeratore e denominatore per un <b>fattore comune</b>. Ma attenzione: si semplificano solo i <b>fattori</b>, mai i <b>termini di una somma</b>!</p>
<p><b>Procedura</b>:</p>
<ol>
<li>Scomponi numeratore e denominatore (raccoglimento, prodotti notevoli, trinomio…).</li>
<li>Scrivi le <b>CE</b> sul denominatore scomposto <b>originale</b>.</li>
<li>Cancella i fattori uguali.</li>
</ol>
<p>Esempio: <b>(x² − 4)/(x² − 2x)</b> = (x + 2)(x − 2)/[x(x − 2)] = <b>(x + 2)/x</b>, con CE <b>x ≠ 0 e x ≠ 2</b>.</p>
<p>⚠️ Errore tipico: (x + 2)/(x + 3) <b>non</b> è uguale a 2/3. Il "+" lega x e 2: non sono fattori. Prova con x = 1: 3/4 ≠ 2/3. Un controllo numerico smaschera subito la maggior parte degli errori.</p>`
    },
    {
      type: "widget",
      title: "Abbina la frazione alla sua forma semplificata",
      widget: "match",
      options: { pairs: [
        ["(x² − 9)/(x − 3)", "x + 3"],
        ["(x² − 2x)/x", "x − 2"],
        ["(2x + 4)/(x + 2)", "2"],
        ["(x² + 2x + 1)/(x + 1)", "x + 1"],
        ["(x² − 1)/(x² + x)", "(x − 1)/x"]
      ] },
      caption: "Scomponi, cancella i fattori comuni, ricorda le CE."
    },
    {
      type: "example",
      title: "Esempio: semplificare con un trinomio",
      html: `<p>Semplifica <b>(x² − 5x + 6)/(x² − 4)</b>.</p>
<ul>
<li>Numeratore: trinomio speciale, somma −5 e prodotto 6 → (x − 2)(x − 3).</li>
<li>Denominatore: differenza di quadrati → (x − 2)(x + 2).</li>
<li>CE: x ≠ 2 e x ≠ −2.</li>
<li>Semplifico (x − 2): risultato <b>(x − 3)/(x + 2)</b>.</li>
<li>Controllo con x = 4: originale (16 − 20 + 6)/(16 − 4) = 2/12 = 1/6; semplificata (4 − 3)/(4 + 2) = 1/6 ✔️</li>
</ul>`
    },
    {
      type: "text",
      title: "Moltiplicazione, divisione e potenza",
      html: `<p>Le regole sono quelle delle frazioni numeriche:</p>
<ul>
<li><b>Prodotto</b>: A/B · C/D = (A·C)/(B·D). Conviene scomporre e semplificare <b>prima</b> di moltiplicare.</li>
<li><b>Quoziente</b>: A/B : C/D = A/B · <b>D/C</b> (si moltiplica per il <b>reciproco</b>). In più, il divisore deve essere diverso da zero: <b>C ≠ 0</b>.</li>
<li><b>Potenza</b>: (A/B)ⁿ = Aⁿ/Bⁿ.</li>
</ul>
<p><b>Esempio prodotto</b>: (x² − 1)/(x² + 2x) · x/(x + 1) = (x − 1)(x + 1)/[x(x + 2)] · x/(x + 1) = <b>(x − 1)/(x + 2)</b>, con CE x ≠ 0, −2, −1.</p>
<p><b>Esempio quoziente</b>: x/(x − 2) : x²/(x² − 4) = x/(x − 2) · (x − 2)(x + 2)/x² = <b>(x + 2)/x</b>. CE: x ≠ 2, −2 e anche x ≠ 0 (il divisore x²/(x² − 4) non deve essere zero, e x è nel denominatore).</p>`
    },
    {
      type: "text",
      title: "Somma e sottrazione",
      html: `<p>Come per 1/6 + 1/4, servono i <b>denominatori uguali</b>: si usa il <b>m.c.m.</b> dei denominatori <b>scomposti</b>.</p>
<ol>
<li>Scomponi i denominatori e scrivi le CE.</li>
<li>Calcola il m.c.m. (fattori comuni e non comuni, con l'esponente maggiore).</li>
<li>Trasforma ogni frazione: moltiplica il numeratore per il fattore mancante.</li>
<li>Somma i numeratori (attenzione ai segni davanti alle parentesi!).</li>
<li>Semplifica se possibile.</li>
</ol>
<p><b>Esempio</b>: 1/(x − 1) + 1/(x + 1). Il m.c.m. è (x − 1)(x + 1) = x² − 1. Allora [(x + 1) + (x − 1)]/(x² − 1) = <b>2x/(x² − 1)</b>, con CE x ≠ ±1.</p>
<p><b>Esempio con sottrazione</b>: 3/x − 2/(x + 1) = [3(x + 1) − 2x]/[x(x + 1)] = (3x + 3 − 2x)/[x(x + 1)] = <b>(x + 3)/[x(x + 1)]</b>. Il segno meno cambia tutti i termini di −2x: errore classico dimenticarlo!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: CE e semplificazione",
      questions: [
        { type: "num", q: "Per quale valore di x la frazione 1/(x − 5) non esiste?", answer: 5, explain: "Il denominatore si annulla per x = 5." },
        { type: "mc", q: "Le CE di (x + 3)/(x² − 9) sono…", options: ["x ≠ 3 e x ≠ −3", "x ≠ 9", "x ≠ −3 soltanto"], answer: 0, explain: "x² − 9 = (x − 3)(x + 3), che si annulla per x = 3 e per x = −3." },
        { type: "tf", q: "(x + 2)/(x + 3) = 2/3, perché si semplifica x.", answer: false, explain: "x è un addendo, non un fattore: non si può cancellare. Con x = 1 si ha 3/4, non 2/3." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: andata a 60 km/h, ritorno a 40",
      html: `<p>Vai in città a 60 km/h e torni a 40 km/h sulla stessa strada. Qual è la velocità media sull'intero viaggio? Non è 50! Se la distanza è d km: tempo andata d/60, tempo ritorno d/40; tempo totale <b>d/60 + d/40 = 5d/120 = d/24</b>. La velocità media è (2d)/(d/24) = <b>48 km/h</b>. La lettera d si semplifica: il risultato non dipende dalla distanza. In generale la velocità media è 2v₁v₂/(v₁ + v₂): una frazione algebrica a tutti gli effetti (la <b>media armonica</b>).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: resistenze in parallelo",
      html: `<p>In fisica due resistenze R₁ e R₂ collegate in <b>parallelo</b> equivalgono a una resistenza R con <b>1/R = 1/R₁ + 1/R₂</b>. Sommando le frazioni: 1/R = (R₂ + R₁)/(R₁R₂), da cui <b>R = R₁R₂/(R₁ + R₂)</b>. Con R₁ = 6 Ω e R₂ = 3 Ω: R = 18/9 = <b>2 Ω</b>. Il circuito in parallelo ha resistenza minore di ciascuna delle due: è come aprire una seconda corsia sull'autostrada.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La dimostrazione che 1 = 2",
      html: `<p>Prendi a = b. Moltiplica per a: a² = ab. Sottrai b²: a² − b² = ab − b². Scomponi: (a + b)(a − b) = b(a − b). "Semplifica" (a − b): a + b = b, cioè 2b = b, quindi <b>2 = 1</b>! Dov'è l'inganno? Se a = b, allora a − b = 0, e hai diviso per zero. È esattamente il motivo per cui le <b>condizioni di esistenza</b> non sono una formalità.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Gli Egizi e le frazioni unitarie",
      html: `<p>Nel <b>papiro di Rhind</b> (Egitto, circa 1650 a.C.) c'è una tabella che scrive 2/n, per n dispari da 3 a 101, come somma di <b>frazioni con numeratore 1</b>: ad esempio 2/5 = 1/3 + 1/15. Gli antichi Egizi quasi non usavano altre frazioni (a parte 2/3). Con le frazioni, insomma, l'umanità ha fatto i conti per almeno quattromila anni.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le frazioni algebriche",
      intro: "Se le lettere ti spaventano, riporta tutto ai numeri o guarda la stessa idea da un'altra angolazione.",
      tabs: [
        {
          label: "🔢 Come con i numeri",
          html: `<p>Per semplificare 84/126 scomponi in primi: 84 = 2²·3·7 e 126 = 2·3²·7. Cancelli 2·3·7 e resta 2/3. Con i polinomi fai <b>la stessa cosa</b>: scomponi in fattori irriducibili e cancella quelli uguali.</p>
<p>Anche la somma è identica: 1/6 + 1/4 → m.c.m. 12 → 2/12 + 3/12 = 5/12. Sostituisci 6 e 4 con x − 1 e x + 1 e hai la somma vista prima. Se non sei sicuro di un passaggio, <b>prova con un numero</b> al posto di x.</p>`
        },
        {
          label: "✨ Moltiplicare per 1",
          html: `<p>Perché per sommare moltiplichiamo il numeratore per il "fattore mancante"? Perché moltiplichiamo la frazione per <b>1 travestito</b>:</p>
<p style="text-align:center">1/(x − 1) = 1/(x − 1) · <b>(x + 1)/(x + 1)</b> = (x + 1)/(x² − 1)</p>
<p>(x + 1)/(x + 1) vale 1 (per x ≠ −1), quindi il valore della frazione non cambia: solo il suo "vestito" sì. È la proprietà invariantiva: moltiplicando o dividendo numeratore e denominatore per lo stesso polinomio non nullo la frazione non cambia.</p>`
        },
        {
          label: "🧪 Il test del numero",
          html: `<p>Hai semplificato e non sei sicuro? Scegli un valore per x che rispetti le CE e calcola <b>sia la frazione di partenza sia il risultato</b>.</p>
<p>(x² − 1)/(x + 1) → x − 1. Prova x = 5: (25 − 1)/6 = 24/6 = 4 e 5 − 1 = 4 ✔️. Prova ora con x = −1: la frazione di partenza non esiste, mentre x − 1 vale −2: ecco perché le CE vanno dichiarate. Il test non è una dimostrazione, ma se i due numeri sono diversi hai sbagliato di sicuro.</p>`,
          widget: "numberLine",
          options: { min: -5, max: 10, step: 1, marks: [-1, 5] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle frazioni algebriche",
      nodes: [
        { id: "frnum", label: "Frazione numerica", x: 15, y: 8, color: "#64748b", html: "Rapporto tra due numeri interi (denominatore ≠ 0).", why: "Le frazioni nascono per misurare e dividere: già gli Egizi (papiro di Rhind) e i Babilonesi le usavano. Il denominatore non può essere zero perché nessun numero moltiplicato per 0 dà un numero diverso da 0." },
        { id: "fralg", label: "Frazione algebrica", x: 55, y: 8, color: "#6366f1", html: "Rapporto A/B tra due polinomi, con B non nullo.", why: "Quando una grandezza dipende da una variabile (velocità, resistenza, prezzo medio) il rapporto diventa una frazione con lettere." },
        { id: "ce", label: "Condizioni di esistenza", x: 85, y: 30, color: "#ef4444", html: "Valori delle lettere che non annullano il denominatore.", why: "Dividere per zero è impossibile: a/0 = c implicherebbe c·0 = a, ma c·0 = 0 per ogni c, quindi sarebbe a = 0 e ogni valore di c andrebbe bene." },
        { id: "scomp", label: "Scomposizione", x: 20, y: 38, color: "#16a34a", html: "Preparare numeratore e denominatore in fattori.", why: "Si semplificano i fattori, non i termini: solo un prodotto si può dividere per un fattore comune." },
        { id: "inv", label: "Proprietà invariantiva", x: 55, y: 42, color: "#f59e0b", html: "Moltiplicando o dividendo num. e den. per uno stesso fattore ≠ 0 la frazione non cambia.", why: "Ha origine nel fatto che a/a = 1 e 1 è l'elemento neutro della moltiplicazione." },
        { id: "sempl", label: "Semplificazione", x: 20, y: 68, color: "#22c55e", html: "Si cancellano i fattori comuni.", why: "Si applica la proprietà invariantiva dividendo per il fattore comune." },
        { id: "mcm", label: "m.c.m. e somma", x: 55, y: 70, color: "#a855f7", html: "Si portano le frazioni allo stesso denominatore.", why: "Si possono sommare solo grandezze 'della stessa unità', come 3 mele + 2 mele: il denominatore è l'unità." },
        { id: "prod", label: "Prodotto e quoziente", x: 85, y: 70, color: "#0ea5e9", html: "Si moltiplica per il reciproco.", why: "Dividere per C/D equivale a moltiplicare per D/C, perché C/D · D/C = 1." },
        { id: "app", label: "Applicazioni", x: 50, y: 94, color: "#14b8a6", html: "Velocità media, resistenze in parallelo, equazioni fratte.", why: "Le frazioni algebriche collegano l'algebra alla fisica e preparano le equazioni fratte e le funzioni razionali." }
      ],
      edges: [
        ["frnum", "fralg", "si generalizza in"],
        ["fralg", "ce", "richiede"],
        ["fralg", "inv", "gode della"],
        ["scomp", "sempl", "permette"],
        ["inv", "sempl", "giustifica"],
        ["inv", "mcm", "giustifica"],
        ["fralg", "prod", "operazioni"],
        ["mcm", "app", "usa"],
        ["prod", "app", "usa"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: le operazioni",
      questions: [
        { type: "num", q: "Il valore di 5/x + 5/x per x = 5 è…", answer: 2, explain: "5/5 + 5/5 = 1 + 1 = 2." },
        { type: "mc", q: "Il reciproco di (x − 1)/(x + 2) è…", options: ["(x + 2)/(x − 1)", "(1 − x)/(x + 2)", "(x − 1)/(x + 2)"], answer: 0, explain: "Il reciproco si ottiene scambiando numeratore e denominatore." },
        { type: "num", q: "Calcola (x² − 4)/(x − 2) per x = 7.", answer: 9, explain: "Si semplifica in x + 2; per x = 7 vale 9. Controllo: 45/5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Frazione algebrica", d: "Rapporto A/B tra due polinomi con B diverso dal polinomio nullo." },
    { t: "Condizioni di esistenza (CE)", d: "Valori delle lettere per cui il denominatore è diverso da zero." },
    { t: "Semplificazione", d: "Divisione di numeratore e denominatore per un loro fattore comune." },
    { t: "m.c.m.", d: "Minimo comune multiplo dei denominatori, usato come denominatore comune nella somma." },
    { t: "Reciproco", d: "La frazione ottenuta scambiando numeratore e denominatore." },
    { t: "Proprietà invariantiva", d: "Il valore di una frazione non cambia se si moltiplicano o dividono numeratore e denominatore per lo stesso fattore non nullo." },
    { t: "Media armonica", d: "Il reciproco della media dei reciproci: ad esempio la velocità media su andata e ritorno." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le CE di (x + 1)/(x² − 4x + 3) sono…", options: ["x ≠ 1 e x ≠ 3", "x ≠ −1", "x ≠ 3 soltanto"], answer: 0, explain: "x² − 4x + 3 = (x − 1)(x − 3), nullo per x = 1 e x = 3." },
      { type: "mc", q: "Semplificando (x² − 6x + 9)/(x² − 9) si ottiene…", options: ["(x − 3)/(x + 3)", "(x + 3)/(x − 3)", "−6x/(−9)"], answer: 0, explain: "(x − 3)²/[(x − 3)(x + 3)] = (x − 3)/(x + 3), con x ≠ ±3." },
      { type: "num", q: "Calcola (x² − 1)/(x + 1) per x = 10.", answer: 9, explain: "Si semplifica in x − 1 = 9. Controllo: 99/11 = 9." },
      { type: "tf", q: "(x + 5)/5 = x + 1.", answer: false, explain: "Si può semplificare solo se 5 è fattore di tutto il numeratore: (x + 5)/5 = x/5 + 1." },
      { type: "mc", q: "1/(x − 2) + 1/(x + 2) =", options: ["2x/(x² − 4)", "2/(x² − 4)", "2/(2x)"], answer: 0, explain: "[(x + 2) + (x − 2)]/[(x − 2)(x + 2)] = 2x/(x² − 4)." },
      { type: "num", q: "Un'auto percorre un tratto a 30 km/h e lo ripercorre al ritorno a 60 km/h. Qual è la velocità media sull'intero percorso in km/h?", answer: 40, unit: "km/h", explain: "2·30·60/(30 + 60) = 3600/90 = 40." },
      { type: "order", q: "Metti in ordine i passi per sommare due frazioni algebriche.", items: ["Scomporre i denominatori e scrivere le CE", "Calcolare il m.c.m.", "Trasformare le frazioni al denominatore comune", "Sommare i numeratori", "Semplificare il risultato"], explain: "Le CE vanno sempre scritte prima di ogni trasformazione." },
      { type: "text", q: "Come si chiamano le condizioni che escludono i valori che annullano il denominatore?", answer: ["condizioni di esistenza", "ce", "c.e."], explain: "Sono le condizioni di esistenza (CE)." },
      { type: "mc", q: "Dividere per la frazione A/B equivale a…", options: ["moltiplicare per B/A", "moltiplicare per A/B", "sottrarre B/A"], answer: 0, explain: "Si moltiplica per il reciproco (con A ≠ 0)." },
      { type: "num", q: "Due resistenze di 6 Ω e 3 Ω sono in parallelo. Qual è la resistenza equivalente in ohm?", answer: 2, unit: "Ω", explain: "R = 6·3/(6 + 3) = 2 Ω." }
    ]
  }
});
