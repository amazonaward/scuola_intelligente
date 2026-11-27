TOPIC('it', {
  id: "l4-sci-acidi-basi",
  title: "Acidi e basi",
  intro: "Il limone è aspro, il sapone è scivoloso, il bicarbonato placa l'acidità di stomaco e il tuo sangue mantiene un pH di 7,4 con una precisione che nessuna macchina industriale potrebbe invidiare. Acidi e basi sono ovunque: nella cucina, nell'ambiente, nel corpo. In questa lezione passiamo dalla definizione del Settecento (\"l'acido è aspro\") a quella moderna basata sullo scambio di protoni, impariamo a calcolare il <b>pH</b>, a distinguere acidi forti e deboli, a determinare una concentrazione con una <b>titolazione</b> e a capire come funzionano i <b>tamponi</b> che proteggono gli organismi dagli sbalzi di acidità.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Che cos'è un acido? Tre definizioni sempre più generali",
      html: `<table>
<tr><th>Teoria</th><th>Acido</th><th>Base</th><th>Limite</th></tr>
<tr><td><b>Arrhenius</b> (1884-87)</td><td>in acqua libera ioni H⁺</td><td>in acqua libera ioni OH⁻</td><td>vale solo in acqua; NH₃ non ha OH nella formula ma è una base</td></tr>
<tr><td><b>Brønsted-Lowry</b> (1923)</td><td><b>cede</b> un protone (H⁺)</td><td><b>accetta</b> un protone</td><td>richiede un protone da scambiare</td></tr>
<tr><td><b>Lewis</b> (1923)</td><td>accetta una coppia di elettroni</td><td>cede una coppia di elettroni</td><td>molto generale, ma meno intuitiva per i calcoli di pH</td></tr>
</table>
<p>Noi useremo soprattutto la definizione di <b>Brønsted e Lowry</b> (Johannes Brønsted e Thomas Lowry, indipendentemente, nello stesso anno): una reazione acido-base è un <b>trasferimento di protone</b>. In acqua l'H⁺ non esiste libero: si lega a una molecola d'acqua formando lo <b>ione idronio H₃O⁺</b>. Per semplicità si scrive spesso H⁺, intendendo H₃O⁺.</p>
<p><b>Esempio:</b> HCl + H₂O → Cl⁻ + H₃O⁺. L'HCl cede un protone all'acqua: HCl è l'<b>acido</b>, H₂O la <b>base</b>.</p>
<p>Una delle conseguenze è che ogni acido, cedendo il protone, diventa una base: la sua <b>base coniugata</b>. Viceversa ogni base accettando un protone diventa il suo <b>acido coniugato</b>. Si formano <b>coppie coniugate</b>: HCl/Cl⁻, H₃O⁺/H₂O, NH₄⁺/NH₃, CH₃COOH/CH₃COO⁻. Maggiore è la forza dell'acido, minore è quella della sua base coniugata: Cl⁻ è una base debolissima perché HCl è un acido fortissimo.</p>
<p>L'<b>acqua</b> è <b>anfotera</b>: può comportarsi da acido (cedendo H⁺ all'ammoniaca: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻) o da base (accettandolo dall'HCl). Sono anfoteri anche HCO₃⁻, HSO₄⁻ e gli ossidi/idrossidi di alluminio e zinco.</p>`
    },
    {
      type: "text",
      title: "L'acqua e il pH",
      html: `<p>Anche l'acqua pura si ionizza, pochissimo, per <b>autoprotolisi</b>: 2 H₂O ⇌ H₃O⁺ + OH⁻. La costante dell'equilibrio, a 25 °C, è il <b>prodotto ionico dell'acqua</b>:</p>
<p style="text-align:center"><b>K<sub>w</sub> = [H₃O⁺] · [OH⁻] = 1,0 · 10⁻¹⁴</b></p>
<p>Nell'acqua pura [H₃O⁺] = [OH⁻] = 1,0·10⁻⁷ mol/L: è la situazione di <b>neutralità</b>. Un acido aumenta [H₃O⁺] (e fa calare [OH⁻]), una base fa il contrario, ma il loro prodotto resta 10⁻¹⁴ a 25 °C. Dato che le concentrazioni variano su molti ordini di grandezza, Søren Sørensen (1909, nei laboratori della birra Carlsberg) propose una scala logaritmica:</p>
<p style="text-align:center"><b>pH = − log [H₃O⁺]      pOH = − log [OH⁻]      pH + pOH = 14</b> (a 25 °C)</p>
<ul>
<li><b>pH &lt; 7</b>: soluzione acida. <b>pH = 7</b>: neutra. <b>pH &gt; 7</b>: basica.</li>
<li>Poiché la scala è logaritmica, <b>una variazione di 1 unità di pH significa una concentrazione di H⁺ dieci volte diversa</b>: pH 3 è 100 volte più acido di pH 5.</li>
<li>A temperature diverse K<sub>w</sub> cambia: a 100 °C vale circa 5,5·10⁻¹³, perciò l'acqua pura bollente ha pH ≈ 6,1 ma è comunque neutra (perché [H⁺] = [OH⁻]).</li>
</ul>`
    },
    {
      type: "svg",
      title: "La scala del pH",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><linearGradient id="phg" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#dc2626"/><stop offset="0.25" stop-color="#f59e0b"/><stop offset="0.5" stop-color="#16a34a"/><stop offset="0.75" stop-color="#0ea5e9"/><stop offset="1" stop-color="#4f46e5"/></linearGradient></defs>
<rect x="30" y="100" width="540" height="40" fill="url(#phg)" stroke="#334155" stroke-width="2"/>
<g font-size="14" fill="#0f172a" text-anchor="middle" font-weight="bold">
<text x="30" y="160">0</text><text x="120" y="160">2</text><text x="210" y="160">4</text><text x="300" y="160">7</text><text x="390" y="160">9</text><text x="480" y="160">12</text><text x="570" y="160">14</text>
</g>
<g font-size="14" fill="#1f2937" text-anchor="middle">
<text x="75" y="85">succo gastrico</text><text x="75" y="68">(pH 1-2)</text>
<text x="155" y="215">limone (2)</text>
<text x="215" y="250">caffè (5)</text>
<text x="300" y="85">acqua pura (7)</text>
<text x="340" y="215">sangue (7,4)</text>
<text x="395" y="250">mare (≈8,1)</text>
<text x="450" y="85">bicarbonato (8,3)</text>
<text x="500" y="215">ammoniaca (≈11)</text>
<text x="560" y="250">soda (13-14)</text>
</g>
<text x="120" y="30" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">ACIDO</text>
<text x="480" y="30" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">BASICO</text>
<text x="300" y="285" font-size="14" fill="#475569" text-anchor="middle">Ogni passo di 1 sulla scala = concentrazione di H⁺ divisa o moltiplicata per 10.</text>
</svg>`,
      caption: "Valori indicativi del pH a 25 °C; la scala continua anche oltre 0 e 14 per soluzioni molto concentrate."
    },
    {
      type: "example",
      title: "Calcolare il pH di acidi e basi forti",
      html: `<p>Un <b>acido forte</b> (HCl, HBr, HI, HNO₃, HClO₄, H₂SO₄ nella prima dissociazione) in acqua è ionizzato al 100%: [H₃O⁺] = concentrazione dell'acido.</p>
<ul>
<li><b>HCl 0,010 M</b>: [H₃O⁺] = 1,0·10⁻² → <b>pH = 2,00</b>.</li>
<li><b>HCl 2,0·10⁻³ M</b>: pH = −log(2,0·10⁻³) = 3 − 0,30 = <b>2,70</b>.</li>
<li><b>NaOH 0,0010 M</b> (base forte): [OH⁻] = 1,0·10⁻³ → pOH = 3 → <b>pH = 11</b>.</li>
<li><b>Ba(OH)₂ 0,010 M</b>: libera 2 OH⁻ per formula, [OH⁻] = 0,020 → pOH = 1,70 → <b>pH = 12,30</b>.</li>
</ul>
<p>Attenzione al caso estremo: HCl 10⁻⁸ M <i>non</i> ha pH 8! Il contributo dell'autoprotolisi dell'acqua (10⁻⁷) non si può trascurare: il pH è appena sotto 7 (circa 6,98).</p>`
    },
    {
      type: "text",
      title: "Acidi e basi forti e deboli: Ka e Kb",
      html: `<p>La <b>forza</b> di un acido non dipende dalla concentrazione ma dalla tendenza a cedere il protone: gli acidi <b>forti</b> si dissociano completamente, gli acidi <b>deboli</b> solo in parte, in un equilibrio:</p>
<p style="text-align:center"><b>HA + H₂O ⇌ A⁻ + H₃O⁺      K<sub>a</sub> = [A⁻][H₃O⁺] / [HA]</b></p>
<p>Più K<sub>a</sub> è grande, più l'acido è forte. L'acido acetico (CH₃COOH, nell'aceto) ha K<sub>a</sub> = 1,8·10⁻⁵; l'acido cianidrico HCN ha K<sub>a</sub> ≈ 5·10⁻¹⁰. Per le basi deboli si definisce analogamente K<sub>b</sub>. Per ogni coppia coniugata vale <b>K<sub>a</sub> · K<sub>b</sub> = K<sub>w</sub></b>.</p>
<p><b>Calcolo per un acido debole.</b> Per CH₃COOH 0,10 M: all'equilibrio [H₃O⁺] = [A⁻] = x e [HA] ≈ 0,10 − x ≈ 0,10 (x piccolo). Allora K<sub>a</sub> = x² / 0,10 → x = √(1,8·10⁻⁵ · 0,10) = √(1,8·10⁻⁶) ≈ 1,3·10⁻³ M. <b>pH ≈ 2,87</b>. Solo l'1,3% delle molecole si è dissociato. Un acido forte alla stessa concentrazione, 0,10 M, avrebbe pH 1: l'aceto è circa 75 volte meno acido, a parità di concentrazione. Ma attenzione: <b>forza ≠ pericolosità</b>: l'acido fluoridrico HF è debole, ma è molto tossico e penetra nei tessuti.</p>
<p><b>Acidi poliprotici.</b> L'acido solforico H₂SO₄ ha due protoni: il primo è ceduto completamente (acido forte), il secondo (HSO₄⁻ → SO₄²⁻) in modo parziale (K<sub>a2</sub> ≈ 1,2·10⁻²). L'acido fosforico H₃PO₄ ne ha tre, sempre meno acidi: K<sub>a1</sub> ≈ 7,5·10⁻³, K<sub>a2</sub> ≈ 6,2·10⁻⁸, K<sub>a3</sub> ≈ 4,8·10⁻¹³.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: pH e forza",
      questions: [
        { type: "num", q: "Quanto vale il pH di una soluzione di HCl 0,0010 M?", answer: 3, tol: 0.01, explain: "L'HCl è un acido forte: [H⁺] = 1,0·10⁻³ → pH = 3." },
        { type: "mc", q: "Quanto è più acida una soluzione con pH 3 rispetto a una con pH 5?", options: ["100 volte", "2 volte", "10 volte", "1000 volte"], answer: 0, explain: "Due unità di pH corrispondono a un fattore 10² = 100 nella concentrazione di H⁺." },
        { type: "mc", q: "Nella reazione NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, l'acqua si comporta da...", options: ["acido (cede un protone)", "base (accetta un protone)", "catalizzatore", "solvente inerte"], answer: 0, explain: "L'acqua cede H⁺ all'ammoniaca: l'acqua è l'acido e NH₃ la base; OH⁻ è la base coniugata dell'acqua." },
        { type: "tf", q: "Un acido debole è sempre un acido diluito.", answer: false, explain: "Forza e concentrazione sono cose diverse: un acido debole può essere molto concentrato, uno forte molto diluito." }
      ]
    },
    {
      type: "text",
      title: "Neutralizzazione e idrolisi dei sali",
      html: `<p>Mescolando un acido e una base si ha una <b>neutralizzazione</b>: H⁺ + OH⁻ → H₂O. Il risultato è acqua più un <b>sale</b>: HCl + NaOH → NaCl + H₂O. Ma non sempre la soluzione finale ha pH 7! Dipende dalla forza di acido e base di partenza, perché gli ioni del sale possono reagire con l'acqua (<b>idrolisi</b>):</p>
<table>
<tr><th>Sale da…</th><th>Esempio</th><th>pH della soluzione</th></tr>
<tr><td>acido forte + base forte</td><td>NaCl</td><td>≈ 7 (neutro)</td></tr>
<tr><td>acido debole + base forte</td><td>CH₃COONa</td><td>&gt; 7: l'anione CH₃COO⁻ è una base e strappa H⁺ all'acqua</td></tr>
<tr><td>acido forte + base debole</td><td>NH₄Cl</td><td>&lt; 7: lo ione NH₄⁺ è un acido e cede H⁺</td></tr>
</table>
<p>Il <b>bicarbonato di sodio</b> NaHCO₃ (anfotero) reagisce con l'acido cloridrico dello stomaco: HCO₃⁻ + H⁺ → H₂CO₃ → H₂O + CO₂. Per questo fa \"ruttare\" e alleggerisce l'acidità.</p>`
    },
    {
      type: "text",
      title: "La titolazione acido-base",
      html: `<p>Come si scopre quanto acido c'è in un aceto, o in un'acqua di scarico? Con una <b>titolazione</b>: si aggiunge goccia a goccia dalla <b>buretta</b> una soluzione a concentrazione nota (<b>titolante</b>) a una quantità misurata di soluzione incognita (<b>analita</b>) finché si arriva al <b>punto di equivalenza</b>, cioè quando le moli di H⁺ e di OH⁻ sono in rapporto stechiometrico esatto. Se l'acido è monoprotico e la base ha un solo OH: <b>M<sub>a</sub> · V<sub>a</sub> = M<sub>b</sub> · V<sub>b</sub></b>.</p>
<p>Come si riconosce il punto di equivalenza? Con un <b>indicatore</b>, un acido o una base debole il cui colore cambia con il pH. La <b>fenolftaleina</b> vira da incolore a rosa-fucsia attorno a pH 8,2-10; il <b>blu di bromotimolo</b> da giallo a blu tra pH 6,0 e 7,6; il <b>metilarancio</b> da rosso a giallo tra 3,1 e 4,4. Si sceglie l'indicatore il cui intervallo di viraggio sta nel salto di pH del punto di equivalenza: per acido forte + base forte (equivalenza a pH 7) vanno bene molti indicatori, per acido debole + base forte (equivalenza a pH &gt; 7) serve la fenolftaleina. Più precisamente si può seguire il pH con un <b>piaccametro</b>.</p>`
    },
    {
      type: "svg",
      title: "La curva di titolazione di un acido forte con una base forte",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="70" y1="250" x2="560" y2="250" stroke="#334155" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="25" stroke="#334155" stroke-width="2"/>
<text x="315" y="285" font-size="15" fill="#334155" text-anchor="middle">volume di base aggiunto</text>
<text x="25" y="140" font-size="15" fill="#334155" text-anchor="middle" transform="rotate(-90 25 140)">pH</text>
<g font-size="14" fill="#334155" text-anchor="end"><text x="62" y="254">0</text><text x="62" y="180">7</text><text x="62" y="40">14</text></g>
<line x1="70" y1="180" x2="560" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 5"/>
<path d="M70 230 L200 220 L280 205 L300 180 L310 120 L320 70 L350 55 L560 45" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="300" y1="250" x2="300" y2="180" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="300" cy="180" r="7" fill="#dc2626"/>
<text x="312" y="205" font-size="15" font-weight="bold" fill="#dc2626">equivalenza (pH 7)</text>
<text x="320" y="240" font-size="14" fill="#dc2626">n(H⁺) = n(OH⁻)</text>
<text x="150" y="205" font-size="15" fill="#2563eb" font-weight="bold">acido in eccesso</text>
<text x="430" y="85" font-size="15" fill="#2563eb" font-weight="bold">base in eccesso</text>
</svg>`,
      caption: "Vicino all'equivalenza il pH cambia di molte unità con una sola goccia: il \"salto\" di pH è ciò che fa cambiare colore all'indicatore."
    },
    {
      type: "example",
      title: "Quanto è concentrato questo acido?",
      html: `<p>Per titolare 25,0 mL di una soluzione di HCl di concentrazione incognita servono 20,0 mL di NaOH 0,100 M per far virare la fenolftaleina. Concentrazione dell'HCl?</p>
<ol>
<li>n(NaOH) = 0,100 · 0,0200 = 2,00·10⁻³ mol.</li>
<li>Reazione 1 : 1 → n(HCl) = 2,00·10⁻³ mol.</li>
<li>M(HCl) = 2,00·10⁻³ / 0,0250 = <b>0,0800 M</b>.</li>
</ol>
<p><b>Variante con acido diprotico.</b> Se la stessa quantità di NaOH neutralizzasse H₂SO₄, il rapporto sarebbe H₂SO₄ : NaOH = 1 : 2 e la concentrazione dell'acido risulterebbe la metà: 0,0400 M.</p>`
    },
    {
      type: "text",
      title: "I tamponi: tenere il pH sotto controllo",
      html: `<p>Aggiungi 0,01 mol di HCl a 1 L di acqua pura: il pH scende da 7 a 2. Aggiungila al <b>sangue</b>: il pH cambia di appena 0,05. Merito dei <b>sistemi tampone</b>, soluzioni che resistono alle variazioni di pH quando si aggiungono piccole quantità di acido o di base. Un tampone contiene <b>una coppia coniugata</b> in quantità confrontabili: un acido debole e la sua base coniugata (o una base debole e il suo acido coniugato).</p>
<ul>
<li>Se arriva un acido (H⁺), la <b>base coniugata</b> lo cattura: A⁻ + H⁺ → HA.</li>
<li>Se arriva una base (OH⁻), l'<b>acido debole</b> la neutralizza: HA + OH⁻ → A⁻ + H₂O.</li>
</ul>
<p>Il pH di un tampone si calcola con l'<b>equazione di Henderson-Hasselbalch</b> (1908-1917):</p>
<p style="text-align:center"><b>pH = pK<sub>a</sub> + log ( [A⁻] / [HA] )</b>   con pK<sub>a</sub> = − log K<sub>a</sub></p>
<p>Il tampone è più efficace quando il rapporto [A⁻]/[HA] è vicino a 1, cioè quando pH ≈ pK<sub>a</sub> (nell'intervallo pK<sub>a</sub> ± 1), e quanto più le concentrazioni sono elevate (<b>capacità tampone</b>).</p>
<p><b>Tampone acetato:</b> CH₃COOH/CH₃COO⁻, pK<sub>a</sub> = 4,74. Con 0,10 M di entrambi, pH = 4,74. Aggiungendo 0,010 mol di HCl a 1 L: CH₃COO⁻ passa da 0,10 a 0,090 mol, CH₃COOH da 0,10 a 0,110 mol. Il pH diventa 4,74 + log(0,090/0,110) = <b>4,65</b>, appena −0,09 unità, invece di un crollo da 7 a 2.</p>
<p><b>Il tampone del sangue</b> è principalmente la coppia <b>acido carbonico / bicarbonato</b> (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻), con pK<sub>a</sub> apparente 6,1: con [HCO₃⁻] ≈ 24 mmol/L e CO₂ disciolta ≈ 1,2 mmol/L, pH = 6,1 + log(20) ≈ 7,4. Il vantaggio è che i polmoni regolano la CO₂ (respirando più o meno velocemente) e i reni il bicarbonato, rendendo il sistema molto efficace: è omeostasi in azione. Un pH sotto 7,35 si dice <b>acidosi</b>, sopra 7,45 <b>alcalosi</b>; fuori dall'intervallo 6,8-7,8 non si sopravvive.</p>`
    },
    {
      type: "widget",
      title: "Acido o base?",
      widget: "classify",
      options: {
        groups: ["Acido (cede H⁺)", "Base (accetta H⁺)"],
        items: [["HCl", 0], ["NaOH", 1], ["CH₃COOH", 0], ["NH₃", 1], ["H₂SO₄", 0], ["CH₃COO⁻", 1], ["NH₄⁺", 0], ["Cl⁻", 1], ["H₃O⁺", 0], ["OH⁻", 1]]
      },
      caption: "Secondo Brønsted-Lowry: acido cede un protone, base lo accetta. Cl⁻ è una base debolissima."
    },
    {
      type: "quiz",
      title: "Mini-quiz: tamponi e titolazioni",
      questions: [
        { type: "num", q: "Quanto vale il pH di un tampone con [CH₃COOH] = [CH₃COO⁻] = 0,20 M? (pKa = 4,74)", answer: 4.74, tol: 0.01, explain: "Se le due concentrazioni sono uguali, log(1) = 0 e pH = pKa." },
        { type: "num", q: "Servono 15,0 mL di NaOH 0,200 M per neutralizzare 30,0 mL di HCl. Qual è la molarità dell'HCl?", answer: 0.1, tol: 0.001, unit: "mol/L", explain: "n(NaOH) = 0,200 · 0,0150 = 3,00·10⁻³ mol = n(HCl); M = 3,00·10⁻³ / 0,0300 = 0,100 mol/L." },
        { type: "mc", q: "Quale coppia forma un buon tampone?", options: ["CH₃COOH e CH₃COONa", "HCl e NaCl", "NaOH e NaCl", "H₂O e NaCl"], answer: 0, explain: "Serve un acido debole con la sua base coniugata: CH₃COOH / CH₃COO⁻. HCl e NaOH sono forti, i loro sali non tamponano." }
      ]
    },
    {
      type: "remember",
      title: "Formule e idee-chiave",
      html: `<ul>
<li><b>Brønsted-Lowry</b>: acido = cede H⁺; base = accetta H⁺; coppie coniugate.</li>
<li><b>K<sub>w</sub> = [H₃O⁺][OH⁻] = 10⁻¹⁴</b>; <b>pH = −log[H₃O⁺]</b>; <b>pH + pOH = 14</b> (25 °C).</li>
<li>Acido forte: [H₃O⁺] = C. Acido debole: [H₃O⁺] ≈ √(K<sub>a</sub> · C).</li>
<li><b>K<sub>a</sub> · K<sub>b</sub> = K<sub>w</sub></b> per una coppia coniugata.</li>
<li>Titolazione: M<sub>a</sub> V<sub>a</sub> = M<sub>b</sub> V<sub>b</sub> (monoprotici); equivalenza ≠ sempre pH 7.</li>
<li>Tampone: <b>pH = pK<sub>a</sub> + log([A⁻]/[HA])</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire acidi e basi",
      intro: "Il pH è una scala logaritmica e le teorie sono astratte: prova queste immagini.",
      tabs: [
        { label: "🏉 La palla di rugby", html: "<p>Una reazione acido-base è un passaggio di palla: l'<b>acido</b> è il giocatore che passa la palla (il protone H⁺), la <b>base</b> è quello che la riceve. Dopo il passaggio, chi ha passato diventa potenziale ricevitore (base coniugata) e chi ha ricevuto potrebbe ripassarla (acido coniugato). Un acido forte passa subito e con decisione: la sua base coniugata \"non ha voglia\" di riprendersi la palla.</p>" },
        { label: "📈 Il pH come il terremoto", html: "<p>Come la scala Richter, anche il pH è <b>logaritmico</b>: un passo di 1 sulla scala vale un fattore 10. Un terremoto di magnitudo 7 non è \"un po' più forte\" di uno di magnitudo 6, ma una quantità di energia circa 30 volte maggiore. Allo stesso modo il succo di limone (pH 2) ha oltre un milione di volte più H⁺ dell'acqua di mare (pH ≈ 8,1): ogni unità conta moltissimo. Per questo piccole variazioni di pH nell'oceano (da 8,2 a 8,1) corrispondono a un aumento del 30% circa degli ioni H⁺.</p>" },
        { label: "🎒 Forti e deboli", html: "<p>Immagina una classe di 100 studenti, ciascuno con una palla. Un acido <b>forte</b> è una classe dove tutti la lanciano via: 100 su 100 lanciano. Un acido <b>debole</b> è una classe in cui solo 1-2 studenti la lanciano, mentre gli altri la tengono: sono ancora in equilibrio con quelli che la ricevono. Anche con la stessa <i>concentrazione</i> di studenti (acido) la forza dell'acido cambia: la forza è la voglia di lanciare, non il numero di studenti.</p>" },
        { label: "🧪 Lo ione idronio in 3D", html: "<p>Ruota lo ione idronio H₃O⁺, la forma in cui il protone vive in acqua: l'ossigeno è al centro di una piramide con tre idrogeni. Lo ione è la vera \"particella acida\" in soluzione acquosa. In realtà è circondato da altre molecole d'acqua: il protone salta rapidissimamente da una molecola all'altra (meccanismo di Grotthuss), il che spiega la sua grande mobilità.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.55, color: "#ef4444", label: "O" }, { x: 0.95, y: -0.35, z: 0, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.48, y: -0.35, z: 0.82, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.48, y: -0.35, z: -0.82, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2], [0, 3]] } }
      ]
    },
    {
      type: "curiosity",
      title: "Pioggia acida e acidificazione degli oceani",
      html: `<p>La pioggia \"normale\" non ha pH 7, ma circa <b>5,6</b>, perché la CO₂ atmosferica si scioglie formando acido carbonico. Si parla di <b>pioggia acida</b> quando il pH scende sotto 5,6: ciò è dovuto soprattutto agli ossidi di zolfo (SO₂) e di azoto (NOₓ) emessi da combustibili fossili e industrie, che nell'atmosfera diventano H₂SO₄ e HNO₃. Negli anni Settanta-Ottanta danneggiò le foreste del Nord Europa e i laghi scandinavi. Con le leggi sulle emissioni (in Europa e Nord America) il problema si è molto ridotto. Un altro fenomeno, più recente, è l'<b>acidificazione degli oceani</b>: il pH medio delle acque superficiali è passato da circa 8,2 in epoca preindustriale a circa 8,1: sembra poco, ma è un aumento di circa il 30% della concentrazione di H⁺, e riduce la disponibilità di carbonato per coralli e molluschi.</p>`
    },
    {
      type: "curiosity",
      title: "Il cavolo rosso: un indicatore da cucina",
      html: `<p>Il cavolo rosso contiene <b>antociani</b>, pigmenti che cambiano colore con il pH: rosso in ambiente acido, viola nel neutro, blu-verde in ambiente basico, giallo in ambiente molto basico. Bolli qualche foglia, filtri il liquido violaceo e lo versi in tre bicchieri con aceto, acqua e bicarbonato: ottieni rosa, viola e verde-azzurro. È l'esperimento che fece Robert Boyle nel Seicento con il tornasole e con gli estratti di violetta, quando scoprì che alcuni pigmenti vegetali cambiano colore a contatto con acidi e alcali: nacque il concetto di indicatore.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: acidi e basi",
      nodes: [
        { id: "arr", label: "Arrhenius", x: 15, y: 12, color: "#2563eb", html: "Acido = libera H⁺; base = libera OH⁻ in acqua.", why: "Svante Arrhenius (1884-1887) propose che i sali e gli acidi in acqua si dissociassero in ioni: per questa idea ebbe il Nobel per la chimica nel 1903." },
        { id: "bl", label: "Brønsted-Lowry", x: 50, y: 12, color: "#16a34a", html: "Acido cede H⁺, base lo accetta; coppie coniugate.", why: "Brønsted a Copenaghen e Lowry a Cambridge, nel 1923, ampliarono la teoria a ogni solvente e a basi senza OH, come l'ammoniaca." },
        { id: "lew", label: "Lewis", x: 85, y: 12, color: "#f59e0b", html: "Acido = accettore di una coppia di elettroni.", why: "Gilbert Lewis (1923), lo stesso dei legami a coppie di elettroni, generalizzò ancora: acidi e basi anche senza protoni (BF₃ + NH₃)." },
        { id: "ph", label: "pH e Kw", x: 30, y: 52, color: "#a855f7", html: "pH = −log[H₃O⁺]; K<sub>w</sub> = 10⁻¹⁴.", why: "Sørensen (1909) lo introdusse alla Carlsberg per controllare l'acidità nella fermentazione della birra. K<sub>w</sub> viene dall'autoprotolisi dell'acqua." },
        { id: "ka", label: "Forza: Ka e Kb", x: 70, y: 52, color: "#ef4444", html: "Acidi forti dissociati al 100%, deboli in equilibrio.", why: "Ostwald (1888) con la legge di diluizione mostrò che la dissociazione degli acidi deboli segue la legge di azione di massa." },
        { id: "tam", label: "Titolazioni e tamponi", x: 50, y: 88, color: "#0ea5e9", html: "Misurare la concentrazione e proteggere il pH.", why: "La titolazione volumetrica fu sistematizzata da Gay-Lussac (1820s); il tampone fu descritto da Henderson e Hasselbalch per capire il sangue (1908-1917)." }
      ],
      edges: [["arr", "bl", "è generalizzata da"], ["bl", "lew", "è generalizzata da"], ["bl", "ph", "si misura con"], ["ph", "ka", "dipende dalla"], ["ka", "tam", "fonda"], ["ph", "tam", "si controlla con"]]
    }
  ],
  glossary: [
    { t: "Acido di Brønsted-Lowry", d: "Specie che cede un protone (H⁺)." },
    { t: "Base di Brønsted-Lowry", d: "Specie che accetta un protone." },
    { t: "Coppia coniugata", d: "Acido e base che differiscono per un solo protone (HA/A⁻)." },
    { t: "Ione idronio", d: "H₃O⁺: la forma in cui il protone esiste in acqua." },
    { t: "Anfotero", d: "Sostanza che può comportarsi sia da acido sia da base (acqua, bicarbonato)." },
    { t: "pH", d: "Logaritmo decimale negativo della concentrazione di ioni H₃O⁺." },
    { t: "Prodotto ionico dell'acqua (K<sub>w</sub>)", d: "[H₃O⁺][OH⁻] = 1,0·10⁻¹⁴ a 25 °C." },
    { t: "Costante di dissociazione acida (K<sub>a</sub>)", d: "Costante dell'equilibrio di cessione di un protone da parte di un acido; misura la sua forza." },
    { t: "Titolazione", d: "Tecnica che determina una concentrazione incognita facendo reagire un volume noto con una soluzione a titolo noto fino al punto di equivalenza." },
    { t: "Indicatore", d: "Acido o base debole che cambia colore a seconda del pH." },
    { t: "Tampone", d: "Soluzione di un acido debole e della sua base coniugata che resiste alle variazioni di pH." },
    { t: "Idrolisi salina", d: "Reazione degli ioni di un sale con l'acqua, che può rendere la soluzione acida o basica." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Secondo Brønsted e Lowry, un acido è una sostanza che...", options: ["cede un protone", "accetta un protone", "cede elettroni", "contiene sempre ossigeno"], answer: 0, explain: "La reazione acido-base è un trasferimento di protone: l'acido lo cede, la base lo accetta." },
      { type: "mc", q: "Qual è la base coniugata dell'acido HSO₄⁻?", options: ["SO₄²⁻", "H₂SO₄", "OH⁻", "H₃O⁺"], answer: 0, explain: "Togliendo un protone da HSO₄⁻ si ottiene SO₄²⁻." },
      { type: "num", q: "Quanto vale il pH di una soluzione con [H₃O⁺] = 1,0·10⁻⁹ M?", answer: 9, tol: 0.01, explain: "pH = −log(10⁻⁹) = 9: soluzione basica." },
      { type: "num", q: "Qual è il pH di una soluzione di NaOH 0,010 M?", answer: 12, tol: 0.01, explain: "pOH = −log(0,010) = 2, quindi pH = 14 − 2 = 12." },
      { type: "num", q: "Una soluzione ha pH 4. Quante volte è maggiore [H₃O⁺] rispetto a una soluzione di pH 6?", answer: 100, tol: 0, explain: "Due unità di pH corrispondono a un fattore 10² = 100." },
      { type: "num", q: "Per CH₃COOH 0,10 M (Ka = 1,8·10⁻⁵) quanto vale [H₃O⁺] in unità di 10⁻³ M (approssimata, 1 cifra decimale)?", answer: 1.3, tol: 0.1, explain: "[H₃O⁺] ≈ √(Ka · C) = √(1,8·10⁻⁶) ≈ 1,3·10⁻³ M." },
      { type: "tf", q: "Una soluzione di acetato di sodio (CH₃COONa) in acqua ha pH maggiore di 7.", answer: true, explain: "L'anione CH₃COO⁻ è la base coniugata di un acido debole: reagisce con l'acqua liberando OH⁻ (idrolisi basica)." },
      { type: "num", q: "Per neutralizzare 20,0 mL di NaOH 0,150 M si usa HCl 0,100 M. Quanti mL servono?", answer: 30, tol: 0.1, unit: "mL", explain: "n(NaOH) = 0,150 · 0,0200 = 3,00·10⁻³ mol; V(HCl) = 3,00·10⁻³ / 0,100 = 0,0300 L = 30,0 mL." },
      { type: "num", q: "Un tampone ha [A⁻]/[HA] = 10 e pKa = 4,8. Quanto vale il pH?", answer: 5.8, tol: 0.01, explain: "pH = pKa + log(10) = 4,8 + 1 = 5,8." },
      { type: "order", q: "Metti in ordine di pH crescente.", items: ["Succo gastrico", "Aceto", "Acqua pura", "Bicarbonato di sodio in acqua", "Soluzione di soda caustica"], explain: "Succo gastrico (1-2) < aceto (≈ 2,5-3) < acqua pura (7) < bicarbonato (≈ 8,3) < soda caustica (13-14)." }
    ]
  }
});
