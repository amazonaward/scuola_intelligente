TOPIC('it', {
  id: "l2-mat-disequazioni-primo-grado",
  title: "Disequazioni di primo grado",
  intro: "Un ascensore regge <i>al massimo</i> 600 kg; un abbonamento conviene <i>da</i> un certo numero di ingressi in poi; per superare l'esame servono <i>almeno</i> 18 punti. Nella vita reale spesso non cerchiamo un valore preciso, ma un <b>intervallo</b> di valori accettabili. Le <b>disequazioni</b> sono lo strumento che lo permette. Richiamiamo le equazioni di primo grado dell'anno scorso e scopriamo la regola nuova e pericolosa: <b>cosa succede quando si moltiplica per un numero negativo</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Disuguaglianze e disequazioni",
      html: `<p>Una <b>disuguaglianza</b> confronta due quantità con uno dei simboli <b>&lt;</b> (minore), <b>&gt;</b> (maggiore), <b>≤</b> (minore o uguale), <b>≥</b> (maggiore o uguale). Una <b>disequazione</b> è una disuguaglianza che contiene un'<b>incognita</b>: è vera per alcuni valori di x e falsa per altri. L'insieme dei valori che la rendono vera è l'<b>insieme delle soluzioni</b> e, a differenza di un'equazione di primo grado, di solito contiene <b>infiniti numeri</b>.</p>
<p>Esempio: <b>x + 3 &gt; 7</b> è vera per x = 5, x = 4,1, x = 100… ed è falsa per x = 4 o x = 0. Le soluzioni sono tutti i numeri <b>maggiori di 4</b>.</p>
<p>Le soluzioni si scrivono in tre modi equivalenti:</p>
<ul>
<li><b>Disuguaglianza</b>: x &gt; 4</li>
<li><b>Intervallo</b>: (4, +∞), con la parentesi <b>tonda</b> quando l'estremo è escluso e la <b>quadra</b> quando è incluso: x ≥ 4 diventa [4, +∞). Infinito ha sempre la tonda.</li>
<li><b>Grafico</b> sulla retta dei numeri: <b>pallino vuoto</b> (○) se l'estremo è escluso, <b>pallino pieno</b> (●) se è incluso, con una linea sulla parte che risolve.</li>
</ul>
<p>Due disequazioni sono <b>equivalenti</b> se hanno le stesse soluzioni. Se nessun numero la verifica è <b>impossibile</b> (soluzione: insieme vuoto); se la verificano tutti i numeri reali è una <b>identità</b>.</p>`
    },
    {
      type: "text",
      title: "I due principi di equivalenza (e la regola che cambia)",
      html: `<p>Come per le equazioni, risolviamo trasformando la disequazione in altre equivalenti sempre più semplici:</p>
<ul>
<li><b>1° principio</b>: sommando o sottraendo a entrambi i membri la <b>stessa espressione</b>, il verso non cambia. (Da qui la regola del trasporto: un termine passa dall'altra parte cambiando segno.)</li>
<li><b>2° principio</b>: moltiplicando o dividendo entrambi i membri per un <b>numero positivo</b>, il verso <b>non cambia</b>; per un <b>numero negativo</b>, il verso si <b>inverte</b> (&lt; diventa &gt;, ≤ diventa ≥ e viceversa).</li>
</ul>
<p>Perché? Prova con una disuguaglianza vera: 2 &lt; 5. Moltiplicando per 3: 6 &lt; 15, ancora vera. Moltiplicando per −3: −6 e −15; ma −6 sta a <b>destra</b> di −15 sulla retta, quindi −6 &gt; −15. Cambiare segno "riflette" la retta dei numeri e l'ordine si rovescia.</p>
<p>⚠️ È l'errore più comune: <b>−2x &gt; 6</b> dà <b>x &lt; −3</b>, non x &gt; −3. Controlla sempre con un valore di prova: x = −5 → −2·(−5) = 10 &gt; 6 ✔️; mentre x = 0 → 0 &gt; 6 è falsa.</p>`
    },
    {
      type: "remember",
      title: "Il metodo in sei passi",
      html: `<ol>
<li>Elimina le <b>parentesi</b>.</li>
<li>Se ci sono denominatori numerici, moltiplica tutto per il loro <b>m.c.m.</b> (positivo, quindi il verso resta).</li>
<li><b>Trasporta</b> i termini con x a sinistra e i numeri a destra (cambiando segno).</li>
<li><b>Riduci</b> ai termini simili: ax &gt; b (o &lt;, ≥, ≤).</li>
<li><b>Dividi</b> per a: se a è <b>negativo</b>, inverti il verso.</li>
<li><b>Scrivi</b> le soluzioni come disuguaglianza, intervallo o grafico, e fai una <b>verifica</b> con un numero di prova.</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio guidato",
      html: `<p>Risolvi <b>(x − 1)/2 − (2x + 3)/3 ≤ 1</b>.</p>
<ol>
<li>m.c.m.(2, 3) = 6: 3(x − 1) − 2(2x + 3) ≤ 6</li>
<li>Parentesi: 3x − 3 − 4x − 6 ≤ 6</li>
<li>Riduco: −x − 9 ≤ 6 → −x ≤ 15</li>
<li>Divido per −1 e <b>inverto il verso</b>: <b>x ≥ −15</b>, cioè [−15, +∞).</li>
<li>Prova con x = 0: −1/2 − 1 = −3/2 ≤ 1 ✔️. Prova con x = −20: −21/2 − (−37/3) = −10,5 + 12,33… ≈ 1,83 &gt; 1, non soddisfatta, come previsto.</li>
</ol>`
    },
    {
      type: "svg",
      title: "La retta dei numeri: pallino pieno o vuoto?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="30" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">Stesso numero 2, due disequazioni diverse</text>
<line x1="40" y1="100" x2="560" y2="100" stroke="#475569" stroke-width="2"/>
<line x1="300" y1="92" x2="300" y2="108" stroke="#475569" stroke-width="2"/>
<text x="300" y="128" font-size="16" text-anchor="middle" fill="#334155">2</text>
<line x1="300" y1="100" x2="560" y2="100" stroke="#2563eb" stroke-width="6"/>
<circle cx="300" cy="100" r="9" fill="#f8fafc" stroke="#2563eb" stroke-width="3"/>
<text x="40" y="70" font-size="16" fill="#1d4ed8" font-weight="bold">x &gt; 2   →   (2, +∞)   2 escluso</text>
<line x1="40" y1="210" x2="560" y2="210" stroke="#475569" stroke-width="2"/>
<line x1="300" y1="202" x2="300" y2="218" stroke="#475569" stroke-width="2"/>
<text x="300" y="238" font-size="16" text-anchor="middle" fill="#334155">2</text>
<line x1="40" y1="210" x2="300" y2="210" stroke="#ea580c" stroke-width="6"/>
<circle cx="300" cy="210" r="9" fill="#ea580c" stroke="#ea580c" stroke-width="3"/>
<text x="40" y="180" font-size="16" fill="#9a3412" font-weight="bold">x ≤ 2   →   (−∞, 2]   2 incluso</text>
<text x="300" y="280" font-size="14" text-anchor="middle" fill="#475569">Pallino vuoto = escluso · Pallino pieno = incluso</text>
</svg>`,
      caption: "Il grafico sulla retta dice a colpo d'occhio quali numeri risolvono la disequazione."
    },
    {
      type: "widget",
      title: "Prova tu: dove cade il numero?",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 1, marks: [-3] },
      caption: "Risolvi −2x > 6: la soluzione è x < −3. Muoviti sulla retta e verifica che i numeri a sinistra di −3 (come −4 e −5) funzionano, quelli a destra no."
    },
    {
      type: "example",
      title: "Esempio pratico: l'abbonamento alla palestra",
      html: `<p>Una palestra offre due formule: <b>ingresso singolo</b> a 8 € oppure <b>abbonamento</b> a 30 € al mese più 4 € a ingresso. Da quante entrate al mese conviene l'abbonamento?</p>
<ul>
<li>Incognita: n = numero di ingressi mensili.</li>
<li>L'abbonamento conviene se costa <i>meno</i>: 30 + 4n &lt; 8n.</li>
<li>30 &lt; 4n → n &gt; 7,5. Poiché n è intero, conviene da <b>8 ingressi</b> in poi.</li>
<li>Osserva: il contesto impone che la soluzione sia un numero naturale, quindi dall'insieme delle soluzioni algebriche (n &gt; 7,5) si sceglie la parte che ha senso nel problema.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: le regole di base",
      questions: [
        { type: "mc", q: "Risolvendo −3x &lt; 12 si ottiene…", options: ["x &lt; −4", "x &gt; −4", "x &gt; 4"], answer: 1, explain: "Dividendo per −3 il verso si inverte: x &gt; −4." },
        { type: "tf", q: "Dividendo entrambi i membri di una disequazione per un numero positivo il verso cambia.", answer: false, explain: "Il verso cambia solo se si moltiplica o si divide per un numero negativo." },
        { type: "mc", q: "L'intervallo [2, 7) contiene…", options: ["2 ma non 7", "7 ma non 2", "sia 2 sia 7"], answer: 0, explain: "La quadra include l'estremo (2), la tonda lo esclude (7)." }
      ]
    },
    {
      type: "text",
      title: "Disequazioni fratte e studio del segno",
      html: `<p>Una disequazione è <b>fratta</b> quando l'incognita compare a un denominatore, per esempio <b>(x − 1)/(x + 2) ≥ 0</b>. Qui <b>non si possono eliminare i denominatori</b> come nelle equazioni: moltiplicare per (x + 2) è lecito solo sapendo il segno di (x + 2), che cambia a seconda di x! Si usa invece lo <b>studio del segno</b>.</p>
<ol>
<li>Porta tutto a sinistra, con 0 a destra, e riduci a <b>un'unica frazione</b> N(x)/D(x).</li>
<li><b>CE</b>: D(x) ≠ 0.</li>
<li>Studia il <b>segno del numeratore</b> (N &gt; 0) e il <b>segno del denominatore</b> (D &gt; 0), ciascuno con la sua retta.</li>
<li>Costruisci la <b>tabella dei segni</b>: sotto ogni regione scrivi il segno del quoziente (+·+ = +, +·− = −, −·− = +).</li>
<li>Scegli le regioni che soddisfano la richiesta (&gt; 0 oppure &lt; 0). Con ≥ o ≤ gli zeri del <b>numeratore</b> si includono, quelli del <b>denominatore</b> mai.</li>
</ol>
<p><b>Esempio</b>: (x − 1)/(x + 2) ≥ 0. CE: x ≠ −2. Numeratore ≥ 0 per x ≥ 1. Denominatore &gt; 0 per x &gt; −2. Tabella: per x &lt; −2 numeratore − e denominatore − → frazione +; tra −2 e 1 numeratore − e denominatore + → −; per x ≥ 1 entrambi + → +. Soluzione: <b>x &lt; −2 oppure x ≥ 1</b>, cioè (−∞, −2) ∪ [1, +∞).</p>`
    },
    {
      type: "svg",
      title: "La tabella dei segni",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">(x − 1)/(x + 2) ≥ 0</text>
<line x1="150" y1="50" x2="150" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="380" y1="50" x2="380" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<text x="150" y="268" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">−2</text>
<text x="380" y="268" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">1</text>
<text x="20" y="90" font-size="16" fill="#334155">N: x − 1 ≥ 0</text>
<line x1="150" y1="104" x2="380" y2="104" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 4"/>
<line x1="380" y1="104" x2="580" y2="104" stroke="#16a34a" stroke-width="4"/>
<line x1="20" y1="104" x2="150" y2="104" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 4"/>
<circle cx="380" cy="104" r="7" fill="#16a34a"/>
<text x="20" y="150" font-size="16" fill="#334155">D: x + 2 &gt; 0</text>
<line x1="20" y1="164" x2="150" y2="164" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 4"/>
<line x1="150" y1="164" x2="580" y2="164" stroke="#16a34a" stroke-width="4"/>
<circle cx="150" cy="164" r="7" fill="#f8fafc" stroke="#16a34a" stroke-width="3"/>
<text x="20" y="215" font-size="16" fill="#334155" font-weight="bold">N/D</text>
<text x="85" y="215" font-size="20" text-anchor="middle" fill="#16a34a" font-weight="bold">+</text>
<text x="265" y="215" font-size="20" text-anchor="middle" fill="#dc2626" font-weight="bold">−</text>
<text x="480" y="215" font-size="20" text-anchor="middle" fill="#16a34a" font-weight="bold">+</text>
</svg>`,
      caption: "Linea continua verde = positivo; tratteggio rosso = negativo. La frazione è ≥ 0 a sinistra di −2 (escluso) e da 1 in poi (incluso)."
    },
    {
      type: "example",
      title: "Esempio: il velocista e il traguardo",
      html: `<p>Un'azienda di spedizioni deve consegnare un pacco entro 3 ore. Tra carico e scarico servono 40 minuti fissi; la strada è lunga 120 km. A che velocità media minima (in km/h) deve viaggiare il furgone?</p>
<ul>
<li>Tempo disponibile per guidare: 3 h − 2/3 h = 7/3 h.</li>
<li>Il tempo di guida deve essere al massimo 7/3 h: 120/v ≤ 7/3, con v &gt; 0.</li>
<li>Moltiplico per v (positivo, il verso resta): 120 ≤ (7/3)v → v ≥ 120 · 3/7 = 360/7 ≈ 51,4.</li>
<li>Il furgone deve mantenere almeno <b>circa 51,4 km/h</b> di media. È una disequazione fratta in cui il denominatore è sicuramente positivo: per questo si può moltiplicare senza studiare il segno.</li>
</ul>`
    },
    {
      type: "text",
      title: "Sistemi di disequazioni",
      html: `<p>A volte una condizione sola non basta: il numero di passeggeri di un'auto deve essere <i>almeno 1</i> <b>e</b> <i>al massimo 5</i>. Un <b>sistema di disequazioni</b> richiede che <b>tutte</b> le disequazioni siano vere contemporaneamente: le soluzioni sono l'<b>intersezione</b> (∩) degli insiemi di soluzioni.</p>
<ol>
<li>Risolvi <b>ciascuna</b> disequazione separatamente.</li>
<li>Rappresentale su <b>rette parallele</b>, una sotto l'altra, allineando i numeri.</li>
<li>Cerca la zona dove <b>tutte</b> le linee sono presenti (di solito si traccia una linea continua per le soluzioni).</li>
<li>Scrivi il risultato; se nessuna zona è comune, il sistema è <b>impossibile</b>.</li>
</ol>
<p><b>Esempio</b>: { x − 1 &gt; 0 ; 2x + 4 ≤ 10 }. Prima: x &gt; 1. Seconda: 2x ≤ 6 → x ≤ 3. Intersezione: <b>1 &lt; x ≤ 3</b>, cioè (1, 3].</p>
<p><b>Esempio impossibile</b>: { x &gt; 5 ; x &lt; 2 }. Nessun numero è insieme maggiore di 5 e minore di 2.</p>
<p>Una <b>doppia disuguaglianza</b> come 2 &lt; 3x − 1 ≤ 8 è un sistema in disguise: 2 &lt; 3x − 1 e 3x − 1 ≤ 8, che equivale a 3 &lt; 3x ≤ 9, quindi 1 &lt; x ≤ 3.</p>`
    },
    {
      type: "svg",
      title: "Intersezione di soluzioni",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">{ x &gt; 1 ; x ≤ 3 }  →  1 &lt; x ≤ 3</text>
<line x1="40" y1="90" x2="560" y2="90" stroke="#475569" stroke-width="2"/>
<line x1="200" y1="90" x2="560" y2="90" stroke="#2563eb" stroke-width="6"/>
<circle cx="200" cy="90" r="9" fill="#f8fafc" stroke="#2563eb" stroke-width="3"/>
<text x="200" y="125" font-size="16" text-anchor="middle" fill="#334155">1</text>
<text x="40" y="70" font-size="16" fill="#1d4ed8" font-weight="bold">x &gt; 1</text>
<line x1="40" y1="180" x2="560" y2="180" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="180" x2="360" y2="180" stroke="#ea580c" stroke-width="6"/>
<circle cx="360" cy="180" r="9" fill="#ea580c"/>
<text x="360" y="215" font-size="16" text-anchor="middle" fill="#334155">3</text>
<text x="40" y="160" font-size="16" fill="#9a3412" font-weight="bold">x ≤ 3</text>
<rect x="200" y="245" width="160" height="14" fill="#16a34a" opacity="0.8"/>
<circle cx="200" cy="252" r="9" fill="#f8fafc" stroke="#16a34a" stroke-width="3"/>
<circle cx="360" cy="252" r="9" fill="#16a34a"/>
<text x="40" y="270" font-size="16" fill="#166534" font-weight="bold">Comune</text>
<line x1="200" y1="55" x2="200" y2="250" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<line x1="360" y1="55" x2="360" y2="250" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
</svg>`,
      caption: "Il verde è la zona dove entrambe le condizioni sono vere: l'intersezione delle soluzioni."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Da dove vengono &lt; e &gt;",
      html: `<p>I simboli <b>&lt;</b> e <b>&gt;</b> furono introdotti dall'inglese <b>Thomas Harriot</b>, matematico e astronomo, nel suo trattato postumo <i>Artis Analyticae Praxis</i> (1631). Prima di lui le disuguaglianze si scrivevano a parole. Il segno = era comparso nel 1557 con Robert Recorde, il quale scelse due linee parallele "perché nulla può essere più uguale di due rette gemelle".</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Disequazioni e ottimizzazione",
      html: `<p>Le aziende usano sistemi di disequazioni ogni giorno: <i>"con 40 ore di lavoro e 200 kg di materia prima, quanti prodotti A e B conviene fabbricare per guadagnare di più?"</i> È la <b>programmazione lineare</b>, formalizzata nel Novecento, nata in gran parte dall'esigenza logistica della Seconda guerra mondiale e oggi usata per orari dei treni, turni negli ospedali e rotte aeree. Ogni vincolo è una disequazione di primo grado.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le disequazioni",
      intro: "Se la regola 'cambia il verso' ti sembra arbitraria, ecco tre modi per vederla con i tuoi occhi.",
      tabs: [
        {
          label: "📏 La retta riflessa",
          html: `<p>Prendi la retta dei numeri e immagina di moltiplicare ogni punto per −1: 3 va a −3, −5 va a 5. Il risultato è una <b>riflessione</b> rispetto allo zero: ciò che stava a destra va a sinistra e viceversa. L'ordine si rovescia, quindi 2 &lt; 5 diventa −2 &gt; −5. Moltiplicare per −3 è una riflessione seguita da un ingrandimento: il rovesciamento resta.</p>`,
          widget: "numberLine",
          options: { min: -6, max: 6, step: 1, marks: [-5, -2, 2, 5] }
        },
        {
          label: "🌡️ Il termometro",
          html: `<p>Pensa a un'espressione come a un'<b>altezza del termometro</b>. Dire "5 − x &gt; 2" vuol dire "la temperatura 5 − x è sopra 2". Se x cresce, 5 − x <i>scende</i>: x deve essere abbastanza piccolo, cioè x &lt; 3. Capire se una funzione <b>cresce o decresce</b> con x (coefficiente positivo o negativo) spiega perché il verso si inverte nel secondo caso.</p>`
        },
        {
          label: "📈 Con il grafico",
          html: `<p>Disegna la retta y = ax + b e la retta y = 0 (asse x). La disequazione ax + b &gt; 0 chiede <b>dove la retta sta sopra l'asse</b>. Se la retta sale (a &gt; 0) è sopra a destra dello zero; se scende (a &lt; 0) è sopra a sinistra: ecco spiegata l'inversione del verso. Le disequazioni diventano <b>"quando il grafico è sopra o sotto"</b>.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="30" y1="150" x2="570" y2="150" stroke="#475569" stroke-width="2"/><line x1="300" y1="20" x2="300" y2="280" stroke="#475569" stroke-width="2"/><line x1="80" y1="250" x2="260" y2="50" stroke="#2563eb" stroke-width="4"/><line x1="340" y1="50" x2="520" y2="250" stroke="#ea580c" stroke-width="4"/><text x="40" y="270" font-size="16" fill="#1d4ed8" font-weight="bold">a &gt; 0: sale</text><text x="400" y="270" font-size="16" fill="#9a3412" font-weight="bold">a &lt; 0: scende</text><text x="310" y="170" font-size="16" fill="#334155">x</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle disequazioni",
      nodes: [
        { id: "dis", label: "Disequazione", x: 50, y: 6, color: "#6366f1", html: "Disuguaglianza con incognita: ha come soluzioni, in genere, un intervallo.", why: "Esprime condizioni di tipo 'almeno', 'al massimo', 'entro', tipiche dei problemi reali: costi, capacità, tempi." },
        { id: "p1", label: "1° principio", x: 18, y: 28, color: "#16a34a", html: "Sommare o sottrarre la stessa espressione: il verso non cambia.", why: "Spostare entrambi i numeri della stessa quantità lungo la retta non altera il loro ordine reciproco." },
        { id: "p2", label: "2° principio", x: 82, y: 28, color: "#f59e0b", html: "Moltiplicare/dividere per un numero ≠ 0: se negativo si inverte il verso.", why: "Moltiplicare per un negativo riflette la retta rispetto allo zero: l'ordine si rovescia. Per questo è la regola più importante da ricordare." },
        { id: "intervalli", label: "Intervalli", x: 50, y: 48, color: "#a855f7", html: "Notazione per gli insiemi di soluzioni: tonda esclude, quadra include.", why: "Un insieme di infiniti numeri reali non si può elencare: si descrive con i suoi estremi, concetto base dell'analisi." },
        { id: "fratte", label: "Fratte", x: 18, y: 72, color: "#0ea5e9", html: "Si portano a N/D ≷ 0 e si studia il segno con la tabella.", why: "Non si può moltiplicare per D(x) senza conoscerne il segno: perciò si studia il segno di numeratore e denominatore." },
        { id: "sistemi", label: "Sistemi", x: 82, y: 72, color: "#ef4444", html: "Più disequazioni insieme: soluzioni = intersezione.", why: "La congiunzione logica 'e' corrisponde all'intersezione di insiemi: richiama la logica dei primi anni." },
        { id: "prob", label: "Problemi", x: 50, y: 92, color: "#22c55e", html: "Si traducono vincoli in disequazioni e si interpreta l'intervallo.", why: "La soluzione algebrica va sempre confrontata con il contesto: ad esempio le persone sono numeri interi positivi." }
      ],
      edges: [
        ["dis", "p1", "si trasforma con"],
        ["dis", "p2", "si trasforma con"],
        ["p1", "intervalli", "porta a"],
        ["p2", "intervalli", "porta a"],
        ["intervalli", "fratte", "si studia il segno"],
        ["intervalli", "sistemi", "si interseca"],
        ["sistemi", "prob", "modella"],
        ["fratte", "prob", "modella"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: fratte e sistemi",
      questions: [
        { type: "mc", q: "La soluzione del sistema { x &gt; 2 ; x ≤ 6 } è…", options: ["2 &lt; x ≤ 6", "x &gt; 6", "x ≤ 2"], answer: 0, explain: "L'intersezione tra x &gt; 2 e x ≤ 6 è l'intervallo (2, 6]." },
        { type: "mc", q: "In una disequazione fratta con ≥ 0, gli zeri del denominatore…", options: ["si includono sempre", "non si includono mai", "si includono solo se il numeratore è positivo"], answer: 1, explain: "Il denominatore non può essere zero: i suoi zeri sono sempre esclusi (CE)." },
        { type: "mc", q: "{ x &gt; 5 ; x &lt; 2 } è…", options: ["determinato", "impossibile", "indeterminato"], answer: 1, explain: "Non esistono numeri maggiori di 5 e minori di 2: nessuna soluzione." }
      ]
    }
  ],
  glossary: [
    { t: "Disequazione", d: "Disuguaglianza contenente un'incognita, verificata per un insieme di valori." },
    { t: "Intervallo", d: "Insieme di numeri compresi tra due estremi; tonda se l'estremo è escluso, quadra se incluso." },
    { t: "Verso", d: "Il simbolo (&lt;, &gt;, ≤, ≥) che dice quale membro è il maggiore." },
    { t: "Disequazioni equivalenti", d: "Disequazioni con lo stesso insieme di soluzioni." },
    { t: "Disequazione fratta", d: "Disequazione con l'incognita al denominatore." },
    { t: "Tabella dei segni", d: "Schema che riporta il segno di ogni fattore e del prodotto o quoziente nelle varie regioni." },
    { t: "Sistema di disequazioni", d: "Insieme di disequazioni da verificare tutte insieme: le soluzioni sono l'intersezione." },
    { t: "Intersezione", d: "Insieme degli elementi che appartengono a tutti gli insiemi considerati." },
    { t: "Insieme vuoto", d: "Insieme senza elementi: è la soluzione di una disequazione impossibile." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Risolvi: −4x + 3 &lt; 11", options: ["x &lt; −2", "x &gt; −2", "x &gt; 2"], answer: 1, explain: "−4x &lt; 8; dividendo per −4 si inverte il verso: x &gt; −2." },
      { type: "mc", q: "L'insieme delle soluzioni di 3x − 2 ≥ 7 è…", options: ["(3, +∞)", "[3, +∞)", "(−∞, 3]"], answer: 1, explain: "3x ≥ 9 → x ≥ 3, con 3 incluso: [3, +∞)." },
      { type: "num", q: "Qual è il più piccolo numero intero che verifica 2(x − 1) &gt; 7?", answer: 5, explain: "2x − 2 &gt; 7 → x &gt; 4,5; il primo intero maggiore di 4,5 è 5." },
      { type: "tf", q: "Moltiplicando per −1 entrambi i membri di 2 &lt; 5 si ottiene −2 &lt; −5.", answer: false, explain: "Il verso si inverte: −2 &gt; −5." },
      { type: "mc", q: "(x − 4)/(x + 1) &gt; 0 è verificata per…", options: ["x &lt; −1 oppure x &gt; 4", "−1 &lt; x &lt; 4", "x &gt; 4 soltanto"], answer: 0, explain: "N &gt; 0 per x &gt; 4; D &gt; 0 per x &gt; −1; il quoziente è positivo a sinistra di −1 e a destra di 4." },
      { type: "mc", q: "Il sistema { 2x − 1 &gt; 3 ; x &lt; 5 } ha soluzione…", options: ["2 &lt; x &lt; 5", "x &gt; 5", "x &lt; 2"], answer: 0, explain: "La prima dà x &gt; 2; con x &lt; 5 l'intersezione è (2, 5)." },
      { type: "tf", q: "La disequazione 3(x + 1) &gt; 3x + 5 è impossibile.", answer: true, explain: "Si riduce a 3 &gt; 5, falsa per ogni x: nessuna soluzione." },
      { type: "num", q: "Un taxi costa 3 € fissi più 1,50 € al km. Con 18 € di budget, qual è il massimo di chilometri percorribili?", answer: 10, unit: "km", explain: "3 + 1,5x ≤ 18 → 1,5x ≤ 15 → x ≤ 10." },
      { type: "order", q: "Metti in ordine i passi per una disequazione fratta.", items: ["Portare tutto a sinistra con 0 a destra", "Ridurre a un'unica frazione N/D", "Scrivere le CE", "Studiare il segno di N e di D", "Costruire la tabella dei segni e scegliere le regioni"], explain: "Si prepara la forma N/D ≷ 0, poi si studia il segno e si legge la soluzione dalla tabella." },
      { type: "text", q: "Come si chiama il matematico inglese che introdusse i simboli &lt; e &gt; nel 1631 (nome o cognome)?", answer: ["harriot", "thomas harriot", "hariot", "thomas hariot"], explain: "Thomas Harriot li usò nel trattato postumo Artis Analyticae Praxis (1631)." }
    ]
  }
});
