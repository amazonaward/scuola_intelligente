TOPIC('it', {
  id: "l3-fis-primo-principio",
  title: "Il primo principio della termodinamica",
  intro: "Se sfreghi le mani si scaldano; se gonfi la ruota della bici con la pompa, la pompa diventa calda; il vapore di una pentola a pressione solleva il coperchio. In tutti questi casi <b>calore</b>, <b>lavoro</b> ed <b>energia</b> si trasformano l'uno nell'altro. Il <b>primo principio della termodinamica</b> è il grande bilancio che li lega: l'energia non si crea né si distrugge, ma si può convertire e trasferire. Impareremo a calcolare lavoro e calore nelle <b>trasformazioni</b> di un gas (isobara, isocora, isoterma, adiabatica) e a capire perché nessuna macchina può funzionare senza «carburante».",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Il sistema termodinamico",
      html: `<p>In termodinamica si sceglie una porzione di universo da studiare, il <b>sistema</b> (per esempio un gas in un cilindro con stantuffo); tutto il resto è l'<b>ambiente</b>. Un sistema può essere:</p>
<ul>
<li><b>aperto</b>: scambia materia ed energia con l'ambiente (una pentola senza coperchio);</li>
<li><b>chiuso</b>: scambia solo energia (un gas in un cilindro chiuso);</li>
<li><b>isolato</b>: non scambia né materia né energia.</li>
</ul>
<p>Lo stato di un gas in equilibrio è descritto da p, V, T (e n). Una <b>trasformazione</b> è il passaggio da uno stato iniziale a uno finale. Per poterla rappresentare con una curva nel <b>piano di Clapeyron</b> (assi V sull'orizzontale e p sul verticale) si considerano trasformazioni <b>quasi statiche</b>, molto lente, in cui il gas passa attraverso una successione di stati di equilibrio, e <b>reversibili</b> (le percorri all'indietro senza lasciare traccia nell'ambiente).</p>
<p>Le grandezze si dividono in <b>funzioni di stato</b> (dipendono solo dallo stato attuale: p, V, T, U, e l'entropia che vedremo) e grandezze <b>di processo</b> (lavoro e calore: dipendono dal percorso seguito tra due stati).</p>`
    },
    {
      type: "text",
      title: "Il lavoro termodinamico",
      html: `<p>Un gas che si espande spinge lo stantuffo e compie un <b>lavoro</b> sull'ambiente. Se la pressione è costante (trasformazione <b>isobara</b>), lo stantuffo di area A si sposta di Δx: L = F·Δx = p·A·Δx = <b>p·ΔV</b>.</p>
<p style="text-align:center"><b>W = p · ΔV</b> (isobara) &nbsp; — &nbsp; in generale, W = <b>area sotto la curva</b> nel piano (V, p)</p>
<ul>
<li>espansione (ΔV &gt; 0): W &gt; 0, il sistema <b>compie</b> lavoro;</li>
<li>compressione (ΔV &lt; 0): W &lt; 0, l'ambiente compie lavoro <b>sul</b> sistema;</li>
<li>a volume costante (isocora): W = 0, lo stantuffo non si muove.</li>
</ul>
<p>Convenzione dei segni usata in Italia: <b>W &gt; 0 se è compiuto dal sistema</b>, <b>Q &gt; 0 se è assorbito dal sistema</b>. Il lavoro dipende dal percorso: tra gli stessi due stati un'espansione lungo un percorso diverso compie lavoro diverso, perché cambia l'area sotto la curva. In un <b>ciclo</b> (percorso chiuso) il lavoro netto è l'<b>area racchiusa</b> dal ciclo: positivo se è percorso in senso orario.</p>
<p>Esempio: un gas a 1,0·10⁵ Pa si espande a pressione costante di 2,0 L (= 2,0·10⁻³ m³): W = 1,0·10⁵ × 2,0·10⁻³ = <b>200 J</b>.</p>`
    },
    {
      type: "svg",
      title: "Il lavoro come area",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="p1A" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#1d4ed8"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="60" y1="250" x2="560" y2="250" stroke="#334155" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#334155" stroke-width="3"/>
<text x="560" y="278" font-size="15" fill="#334155" text-anchor="end">volume V</text>
<text x="35" y="140" font-size="15" fill="#334155" transform="rotate(-90 35 140)" text-anchor="middle">pressione p</text>
<polygon points="150,250 150,110 400,110 400,250" fill="#93c5fd" fill-opacity="0.7" stroke="#1e3a8a" stroke-width="3"/>
<circle cx="150" cy="110" r="7" fill="#1d4ed8"/>
<circle cx="400" cy="110" r="7" fill="#1d4ed8"/>
<line x1="165" y1="110" x2="380" y2="110" stroke="#1d4ed8" stroke-width="4" marker-end="url(#p1A)"/>
<text x="150" y="272" font-size="14" fill="#334155" text-anchor="middle">V1</text>
<text x="400" y="272" font-size="14" fill="#334155" text-anchor="middle">V2</text>
<text x="275" y="190" font-size="17" fill="#1e3a8a" text-anchor="middle" font-weight="bold">area = W = p·ΔV</text>
<text x="275" y="95" font-size="15" fill="#1e3a8a" text-anchor="middle">isobara (espansione)</text>
</g>
</svg>`,
      caption: "Nel piano (V, p) il lavoro compiuto dal gas in una trasformazione è l'area sotto la curva."
    },
    {
      type: "text",
      title: "Calore, energia interna e primo principio",
      html: `<p>L'<b>energia interna U</b> di un sistema è la somma delle energie cinetiche e potenziali delle sue molecole. Per un gas perfetto monoatomico U = (3/2)·nRT, per uno biatomico (a temperatura ambiente) U = (5/2)·nRT: <b>dipende solo da T</b>. È una funzione di stato.</p>
<p>Nell'Ottocento si sciolse un enigma: il <b>calore</b> era visto come un fluido (il «calorico»), ma esperimenti come quelli del conte Rumford (1798, calore prodotto dall'attrito durante la trapanatura dei cannoni) e soprattutto di <b>James Prescott Joule</b> (1843-1850) mostrarono che il calore è una <b>forma di energia in transito</b>. Joule fece cadere dei pesi che facevano ruotare delle pale immerse in acqua: l'acqua si scaldava, e la quantità di calore prodotta era proporzionale al lavoro compiuto. Trovò l'<b>equivalente meccanico della caloria</b>: <b>1 cal = 4,186 J</b>.</p>
<p>Su questa scoperta, Julius Robert Mayer (1842), Joule e Hermann von Helmholtz (1847) formularono la conservazione dell'energia. Il <b>primo principio della termodinamica</b> è la sua forma per i sistemi termici:</p>
<p style="text-align:center"><b>ΔU = Q − W</b></p>
<p>cioè: la variazione di energia interna è uguale al calore assorbito meno il lavoro compiuto dal sistema. Equivalentemente <b>Q = ΔU + W</b>: il calore assorbito serve ad aumentare l'energia interna e a compiere lavoro.</p>
<p>Conseguenze importanti:</p>
<ul>
<li>per un sistema <b>isolato</b> (Q = 0, W = 0) U si conserva;</li>
<li>in un <b>ciclo</b> il sistema torna allo stato iniziale: ΔU = 0, quindi <b>Q<sub>netto</sub> = W<sub>netto</sub></b>: una macchina ciclica può produrre lavoro solo assorbendo calore;</li>
<li>è <b>impossibile</b> costruire un «<b>moto perpetuo di prima specie</b>», cioè una macchina che produce lavoro dal nulla, senza che entri energia.</li>
</ul>`
    },
    {
      type: "example",
      title: "Il bilancio di una trasformazione",
      html: `<p>Un gas assorbe 500 J di calore e, espandendosi, compie 200 J di lavoro. ΔU = Q − W = 500 − 200 = <b>+300 J</b>: l'energia interna sale e quindi la temperatura aumenta.</p>
<p>Un gas viene compresso da un pistone che compie 150 J di lavoro sul gas (W = −150 J) mentre cede all'ambiente 40 J di calore (Q = −40 J). ΔU = −40 − (−150) = <b>+110 J</b>: la compressione scalda il gas.</p>
<p><b>La pompa della bicicletta.</b> Quando la comprimi in fretta, il calore non fa in tempo a uscire: Q ≈ 0 e ΔU = −W &gt; 0. L'aria compressa si scalda e la pompa diventa calda. Lo stesso principio, in grande, fa accendere il gasolio nei motori diesel senza candela.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: primo principio",
      questions: [
        { type: "num", q: "Un sistema assorbe 800 J di calore e compie 300 J di lavoro. Quanto vale la variazione di energia interna?", answer: 500, tol: 0, unit: "J", explain: "ΔU = Q − W = 800 − 300 = 500 J." },
        { type: "num", q: "Un gas si espande a pressione costante di 2·10⁵ Pa, variando il volume di 3 L. Quanto lavoro compie?", answer: 600, tol: 0, unit: "J", explain: "W = p·ΔV = 2·10⁵ × 3·10⁻³ = 600 J." },
        { type: "tf", q: "In un ciclo termodinamico la variazione di energia interna è nulla.", answer: true, explain: "L'energia interna è una funzione di stato: tornando allo stato iniziale ΔU = 0, quindi Q netto = W netto." }
      ]
    },
    {
      type: "text",
      title: "Le trasformazioni di un gas perfetto",
      html: `<p>Applichiamo ΔU = Q − W alle quattro trasformazioni fondamentali di un gas perfetto. Ricordiamo che, per un gas perfetto, ΔU = n·C<sub>V</sub>·ΔT, con <b>C<sub>V</sub> = (3/2)R</b> (monoatomico) o (5/2)R (biatomico): C<sub>V</sub> è il <b>calore molare a volume costante</b>.</p>
<table>
<tr><th>Trasformazione</th><th>Condizione</th><th>Lavoro W</th><th>Calore Q</th><th>ΔU</th></tr>
<tr><td><b>Isocora</b></td><td>V costante</td><td>0</td><td>n·C<sub>V</sub>·ΔT</td><td>= Q</td></tr>
<tr><td><b>Isobara</b></td><td>p costante</td><td>p·ΔV = nRΔT</td><td>n·C<sub>P</sub>·ΔT</td><td>n·C<sub>V</sub>·ΔT</td></tr>
<tr><td><b>Isoterma</b></td><td>T costante</td><td>nRT·ln(V<sub>f</sub>/V<sub>i</sub>)</td><td>= W</td><td>0</td></tr>
<tr><td><b>Adiabatica</b></td><td>Q = 0</td><td>= −ΔU = −nC<sub>V</sub>ΔT</td><td>0</td><td>−W</td></tr>
</table>
<p><b>Relazione di Mayer</b>: <b>C<sub>P</sub> = C<sub>V</sub> + R</b>. A pressione costante parte del calore serve a far espandere il gas (lavoro nRΔT), quindi serve più calore che a volume costante per aumentare di ΔT la temperatura. Per un gas monoatomico C<sub>P</sub> = (5/2)R. Il rapporto <b>γ = C<sub>P</sub>/C<sub>V</sub></b> vale 5/3 ≈ 1,67 per gas monoatomici e 7/5 = 1,4 per gas biatomici (aria).</p>
<p>In una <b>trasformazione adiabatica reversibile</b> vale la relazione <b>p·V<sup>γ</sup> = costante</b> (e T·V<sup>γ−1</sup> = costante): l'adiabatica nel piano (V, p) scende più ripidamente dell'isoterma. Nell'espansione adiabatica il gas si raffredda: il lavoro è compiuto a spese dell'energia interna (è ciò che avviene nell'aria che sale in quota e si espande: le nuvole si formano proprio così; o in una bomboletta spray che si raffredda quando la usi). L'<b>isoterma</b> invece è il caso in cui il gas, a contatto con un termostato, assorbe tutto il calore necessario per mantenere T costante: Q = W.</p>`
    },
    {
      type: "svg",
      title: "Le trasformazioni nel piano p-V",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="p1B" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#0f172a"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="60" y1="260" x2="560" y2="260" stroke="#334155" stroke-width="3"/>
<line x1="60" y1="260" x2="60" y2="20" stroke="#334155" stroke-width="3"/>
<text x="555" y="285" font-size="15" fill="#334155" text-anchor="end">V</text>
<text x="40" y="30" font-size="15" fill="#334155" text-anchor="end">p</text>
<circle cx="150" cy="80" r="7" fill="#0f172a"/>
<text x="130" y="75" font-size="16" fill="#0f172a" font-weight="bold">A</text>
<line x1="150" y1="80" x2="150" y2="200" stroke="#16a34a" stroke-width="4"/>
<text x="95" y="150" font-size="14" fill="#166534">isocora</text>
<line x1="150" y1="80" x2="400" y2="80" stroke="#2563eb" stroke-width="4"/>
<text x="275" y="68" font-size="14" fill="#1e3a8a" text-anchor="middle">isobara</text>
<path d="M150 80 Q 220 140 400 200" stroke="#dc2626" stroke-width="4" fill="none"/>
<text x="330" y="170" font-size="14" fill="#991b1b">isoterma</text>
<path d="M150 80 Q 190 170 330 215" stroke="#f59e0b" stroke-width="4" fill="none"/>
<text x="195" y="215" font-size="14" fill="#b45309">adiabatica</text>
<text x="450" y="130" font-size="15" fill="#0f172a">Partendo da A:</text>
<text x="450" y="152" font-size="14" fill="#166534">isocora: W = 0</text>
<text x="450" y="172" font-size="14" fill="#1e3a8a">isobara: W = pΔV</text>
<text x="450" y="192" font-size="14" fill="#991b1b">isoterma: ΔU = 0</text>
<text x="450" y="212" font-size="14" fill="#b45309">adiabatica: Q = 0</text>
</g>
</svg>`,
      caption: "Le quattro trasformazioni fondamentali nel piano di Clapeyron (curve schematiche)."
    },
    {
      type: "example",
      title: "Quattro conti con 1 mole di gas",
      html: `<p>Prendiamo n = 1 mol di gas perfetto monoatomico (C<sub>V</sub> = 12,47 J/mol·K, C<sub>P</sub> = 20,79 J/mol·K, R = 8,314).</p>
<ul>
<li><b>Isocora</b> da 300 K a 340 K: W = 0; Q = ΔU = 1,5 × 8,314 × 40 ≈ <b>499 J</b>.</li>
<li><b>Isobara</b> da 300 K a 340 K: Q = 2,5 × 8,314 × 40 ≈ <b>831 J</b>; W = R·ΔT = 8,314 × 40 ≈ <b>333 J</b>; ΔU = 499 J. Verifica: Q − W = 831 − 333 = 498 ✓ (arrotondamenti).</li>
<li><b>Isoterma</b> a 300 K con volume che raddoppia: ΔU = 0; Q = W = nRT·ln 2 = 8,314 × 300 × 0,693 ≈ <b>1729 J</b>.</li>
<li><b>Adiabatica</b> con lavoro compiuto dal gas W = 500 J: Q = 0, ΔU = −500 J, ΔT = −500/(1,5 × 8,314) ≈ <b>−40 K</b>: il gas si raffredda di 40 K.</li>
</ul>
<p>Confronta le prime due: per scaldare lo stesso gas della stessa ΔT a pressione costante serve più calore (831 J contro 499 J), perché una parte viene «spesa» in lavoro di espansione.</p>`
    },
    {
      type: "widget",
      title: "Trasformazioni e condizioni",
      widget: "classify",
      options: { groups: ["Isocora", "Isobara", "Isoterma", "Adiabatica"], items: [
        ["Non c'è lavoro (W = 0)", 0],
        ["Il calore assorbito è nRΔT più nC_VΔT", 1],
        ["L'energia interna non cambia (ΔU = 0)", 2],
        ["Nessuno scambio di calore (Q = 0)", 3],
        ["Un gas in un contenitore rigido scaldato", 0],
        ["Un gas con stantuffo libero sotto pressione atmosferica scaldato", 1],
        ["Un gas lentamente espanso a contatto con un termostato", 2],
        ["Compressione molto rapida con una pompa", 3]
      ] },
      caption: "Riconosci la trasformazione dal suo vincolo."
    },
    {
      type: "quiz",
      title: "Controlla: trasformazioni",
      questions: [
        { type: "num", q: "Una mole di gas monoatomico (C_V = 12,5 J/mol·K) viene scaldata a volume costante di 20 K. Quanto calore assorbe?", answer: 250, tol: 1, unit: "J", explain: "Q = n·C_V·ΔT = 12,5 × 20 = 250 J." },
        { type: "mc", q: "In un'espansione isoterma di un gas perfetto, il calore assorbito è:", options: ["zero", "uguale al lavoro compiuto", "uguale alla variazione di energia interna", "negativo"], answer: 1, explain: "ΔU = 0 quindi Q = W." },
        { type: "tf", q: "In un'espansione adiabatica la temperatura di un gas perfetto diminuisce.", answer: true, explain: "Q = 0: il gas compie lavoro a spese della sua energia interna, quindi ΔU < 0 e T cala." }
      ]
    },
    {
      type: "text",
      title: "Calore specifico e calori molari",
      html: `<p>Ricorda dal biennio che per riscaldare una sostanza di massa m servono Q = m·c·ΔT (c = calore specifico). Per i gas il valore del calore dipende dal tipo di trasformazione: a volume costante serve <b>C<sub>V</sub></b>, a pressione costante serve <b>C<sub>P</sub> = C<sub>V</sub> + R</b>. Per solidi e liquidi, che si dilatano pochissimo, i due valori praticamente coincidono. Per questo nelle tabelle trovi un solo calore specifico (acqua: 4186 J/(kg·K)), ma per un gas bisogna specificare di quale trasformazione si tratta.</p>
<p>Un esempio notevole: il calore specifico dell'<b>aria</b> a volume costante è circa 718 J/(kg·K) e a pressione costante circa 1005 J/(kg·K): per scaldare l'aria di una stanza chiusa serve meno energia che per scaldare la stessa aria libera di dilatarsi.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il primo principio",
      intro: "Calore, lavoro ed energia interna sono tre facce della stessa medaglia: ecco alcune immagini per ricordarle.",
      tabs: [
        {
          label: "🏦 Il conto in banca",
          html: "<p>Pensa all'energia interna come al <b>saldo</b> di un conto. Il calore Q è un versamento (Q &gt; 0) o un prelievo (Q &lt; 0) fatto per via «termica»; il lavoro W è un prelievo (W &gt; 0 è lavoro compiuto dal sistema) o un versamento «meccanico». Il saldo finale è: <b>ΔU = Q − W</b>. Non importa <i>come</i> è arrivato il denaro: il saldo (U) dipende solo dallo stato; i movimenti Q e W dipendono dal «percorso».</p>"
        },
        {
          label: "🔥 Le mani e la pompa",
          html: "<p>Strofini le mani: compi lavoro (meccanico) e le mani si scaldano senza che nessun calore sia stato fornito: <b>ΔU = −W</b>, lavoro sul sistema. Poi appoggi le mani su una tazza calda: nessun lavoro, solo calore: <b>ΔU = Q</b>. Sono due vie diverse per ottenere lo stesso risultato: aumentare l'energia interna. Joule dimostrò che qualunque via si segua, a parità di effetto serve la stessa quantità di energia: 4,186 J per ogni caloria.</p>"
        },
        {
          label: "🔗 Abbina trasformazione e formula",
          html: "<p>Collega ogni trasformazione alla sua caratteristica.</p>",
          widget: "match",
          options: { pairs: [
            ["Isocora", "W = 0, Q = ΔU"],
            ["Isobara", "W = p·ΔV"],
            ["Isoterma", "ΔU = 0, Q = W"],
            ["Adiabatica", "Q = 0, ΔU = −W"],
            ["Ciclo", "ΔU = 0, Q = W"]
          ] }
        },
        {
          label: "🔄 Disegno: un ciclo",
          html: "<p>In un ciclo il sistema torna allo stato iniziale: il lavoro netto è l'area racchiusa dalla curva. Qui il ciclo è orario, quindi il lavoro è positivo (come in un motore).</p>",
          svg: "<svg viewBox='0 0 600 280' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='280' fill='#f0fdf4'/><defs><marker id='p1C' markerWidth='10' markerHeight='10' refX='8' refY='5' orient='auto'><path d='M0 0 L10 5 L0 10 Z' fill='#0f172a'/></marker></defs><g font-family='sans-serif'><line x1='60' y1='240' x2='540' y2='240' stroke='#334155' stroke-width='3'/><line x1='60' y1='240' x2='60' y2='20' stroke='#334155' stroke-width='3'/><polygon points='160,190 160,70 400,70 400,190' fill='#86efac' fill-opacity='0.7' stroke='#166534' stroke-width='4'/><line x1='160' y1='130' x2='160' y2='80' stroke='#0f172a' stroke-width='3' marker-end='url(#p1C)'/><line x1='250' y1='70' x2='330' y2='70' stroke='#0f172a' stroke-width='3' marker-end='url(#p1C)'/><line x1='400' y1='110' x2='400' y2='170' stroke='#0f172a' stroke-width='3' marker-end='url(#p1C)'/><line x1='330' y1='190' x2='240' y2='190' stroke='#0f172a' stroke-width='3' marker-end='url(#p1C)'/><text x='280' y='135' font-size='16' fill='#14532d' text-anchor='middle' font-weight='bold'>lavoro netto = area</text><text x='280' y='160' font-size='14' fill='#14532d' text-anchor='middle'>ΔU = 0, W = Q netto</text><text x='300' y='265' font-size='14' fill='#334155' text-anchor='middle'>V</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Joule e la luna di miele",
      html: `<p>James Prescott Joule (1818-1889), figlio di un ricco birraio di Manchester, fece le sue misure con uno strumento di precisione eccezionale per l'epoca: i suoi termometri rilevavano variazioni di un duecentesimo di grado. Si racconta che durante la luna di miele in Svizzera (1847) portasse con sé un termometro per misurare la differenza di temperatura tra la cima e la base di una cascata: l'acqua, cadendo, dovrebbe riscaldarsi di circa 0,23 °C ogni 100 metri (energia potenziale → energia interna). Nella vita di tutti i giorni questo piccolo riscaldamento è invisibile, ma il suo principio è esatto: in suo onore l'unità di energia si chiama <b>joule</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Il moto perpetuo: mille brevetti respinti",
      html: `<p>Per secoli inventori hanno progettato macchine che dovevano produrre lavoro senza consumare nulla: ruote sbilanciate, pompe che ricircolano acqua, magneti incastrati. Nessuna funziona, e il primo principio spiega perché: la conservazione dell'energia vieta il <b>moto perpetuo di prima specie</b>. Già nel 1775 l'Accademia delle Scienze di Parigi smise di esaminare progetti di questo tipo; ancora oggi gli uffici brevetti di molti Paesi non accettano domande per macchine a moto perpetuo senza un modello funzionante. (Esiste però un limite ancora più sottile, il moto perpetuo di seconda specie, che sarà il tema del prossimo argomento.)</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa del primo principio",
      nodes: [
        { id: "u", label: "Energia interna U", x: 15, y: 12, color: "#2563eb", html: "Somma delle energie delle molecole; per un gas perfetto dipende solo da T.", why: "La teoria cinetica mostra che U è la somma dell'energia cinetica (e rotazionale) delle molecole. È una funzione di stato: dipende solo dallo stato, non da come ci si è arrivati." },
        { id: "q", label: "Calore Q", x: 50, y: 12, color: "#ef4444", html: "Energia scambiata tra sistema e ambiente a causa di una differenza di temperatura.", why: "Per un secolo il calore fu considerato un fluido (calorico). Rumford (1798) e Joule (1843-50) mostrarono che è energia in transito, convertibile in lavoro con un tasso fisso: 4,186 J/cal." },
        { id: "w", label: "Lavoro W", x: 85, y: 12, color: "#16a34a", html: "Energia scambiata tramite una variazione di volume contro una pressione: W = p·ΔV, area nel piano (V, p).", why: "Si ricava da L = F·Δx applicato a uno stantuffo. Dipende dal percorso: per questo il primo principio coinvolge anche Q." },
        { id: "primo", label: "ΔU = Q − W", x: 50, y: 45, color: "#8b5cf6", html: "Primo principio: conservazione dell'energia per i sistemi termici.", why: "Formulato da Mayer, Joule e Helmholtz (1842-47) e da Clausius (1850) in forma matematica. Esclude il moto perpetuo di prima specie." },
        { id: "trasf", label: "Isocora, isobara, isoterma, adiabatica", x: 20, y: 82, color: "#f59e0b", html: "Casi particolari: W = 0; W = pΔV; ΔU = 0; Q = 0.", why: "Si ottengono imponendo un vincolo (volume, pressione, temperatura o isolamento) e usando pV = nRT e U = nC_VT." },
        { id: "ciclo", label: "Cicli e macchine", x: 78, y: 82, color: "#64748b", html: "In un ciclo ΔU = 0, quindi il lavoro netto è uguale al calore netto assorbito.", why: "Le macchine a vapore dell'Ottocento resero urgente capire come ottenere lavoro dal calore; la risposta completa richiede anche il secondo principio." }
      ],
      edges: [["u", "primo", "variazione in"], ["q", "primo", "entra come"], ["w", "primo", "entra come"], ["primo", "trasf", "applicato alle"], ["primo", "ciclo", "implica"]]
    }
  ],
  glossary: [
    { t: "Sistema termodinamico", d: "Parte dell'universo oggetto di studio; il resto è l'ambiente." },
    { t: "Funzione di stato", d: "Grandezza che dipende solo dallo stato del sistema (p, V, T, U)." },
    { t: "Energia interna", d: "Somma delle energie (cinetiche e potenziali) delle molecole del sistema." },
    { t: "Calore", d: "Energia scambiata per differenza di temperatura." },
    { t: "Lavoro termodinamico", d: "Energia scambiata mediante una variazione di volume: W = p·ΔV a p costante." },
    { t: "Primo principio", d: "ΔU = Q − W: conservazione dell'energia per i sistemi termodinamici." },
    { t: "Trasformazione adiabatica", d: "Trasformazione senza scambio di calore (Q = 0)." },
    { t: "Relazione di Mayer", d: "C_P = C_V + R per un gas perfetto." },
    { t: "Ciclo termodinamico", d: "Sequenza di trasformazioni che riporta il sistema allo stato iniziale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale formula esprime il primo principio della termodinamica (W = lavoro compiuto dal sistema)?", options: ["ΔU = Q + W", "ΔU = Q − W", "ΔU = W − Q", "Q = ΔU − W"], answer: 1, explain: "ΔU = Q − W: il calore assorbito serve ad aumentare U e a compiere lavoro." },
      { type: "num", q: "Un gas assorbe 600 J e compie 450 J di lavoro. Quanto vale ΔU?", answer: 150, tol: 0, unit: "J", explain: "ΔU = 600 − 450 = 150 J." },
      { type: "num", q: "Un gas si espande a 1,5·10⁵ Pa da 4 L a 10 L. Quanto lavoro compie?", answer: 900, tol: 0, unit: "J", explain: "W = p·ΔV = 1,5·10⁵ × 6·10⁻³ = 900 J." },
      { type: "tf", q: "In una trasformazione isocora il gas non compie lavoro.", answer: true, explain: "ΔV = 0 quindi W = p·ΔV = 0." },
      { type: "num", q: "Quanto calore serve per scaldare di 30 K, a volume costante, 2 mol di gas monoatomico (C_V = 12,47 J/mol·K)?", answer: 748, tol: 2, unit: "J", explain: "Q = n·C_V·ΔT = 2 × 12,47 × 30 ≈ 748 J." },
      { type: "mc", q: "In un'espansione adiabatica di un gas perfetto:", options: ["Q > 0", "T costante", "il gas si raffredda", "il lavoro è nullo"], answer: 2, explain: "Q = 0: il lavoro compiuto dal gas è a spese di U, quindi la temperatura scende." },
      { type: "mc", q: "Quale relazione lega C_P e C_V per un gas perfetto?", options: ["C_P = C_V − R", "C_P = C_V + R", "C_P = R/C_V", "C_P = C_V"], answer: 1, explain: "È la relazione di Mayer: a pressione costante parte del calore va in lavoro." },
      { type: "tf", q: "Il primo principio permette di costruire una macchina che produce lavoro senza assorbire energia.", answer: false, explain: "È vietato: è il moto perpetuo di prima specie, escluso dalla conservazione dell'energia." },
      { type: "num", q: "In un ciclo un gas assorbe in totale 900 J di calore netto. Quanto lavoro netto compie?", answer: 900, tol: 0, unit: "J", explain: "ΔU = 0 nel ciclo, quindi W netto = Q netto = 900 J." },
      { type: "order", q: "Ordina i passi di un ragionamento termodinamico per una trasformazione isobara.", items: ["Si riconosce che p è costante", "Si calcola W = p·ΔV", "Si calcola ΔU = n·C_V·ΔT", "Si ricava Q = ΔU + W"], explain: "Prima il vincolo, poi il lavoro, poi l'energia interna e infine il calore con il primo principio." }
    ]
  }
});
