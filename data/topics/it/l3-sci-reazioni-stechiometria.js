TOPIC('it', {
  id: "l3-sci-reazioni-stechiometria",
  title: "Reazioni chimiche e stechiometria",
  intro: "Una torta richiede quantità precise di farina e uova; se hai poche uova ne farai meno, anche se hai farina da vendere. La chimica funziona allo stesso modo: la <b>stechiometria</b> (dal greco <i>stoicheion</i>, elemento, e <i>metron</i>, misura) è l'arte di calcolare <b>quanto</b> reagisce e <b>quanto</b> si ottiene. Partendo dalla <b>mole</b> impareremo a bilanciare le equazioni, a trovare il <b>reagente limitante</b>, a calcolare la <b>resa</b> e a lavorare con le <b>soluzioni</b> e la loro concentrazione.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "L'equazione chimica",
      html: `<p>Una <b>reazione chimica</b> riorganizza gli atomi: i legami dei <b>reagenti</b> si rompono e se ne formano di nuovi nei <b>prodotti</b>. La si descrive con un'<b>equazione</b>:</p>
<p style="text-align:center"><b>2 H₂(g) + O₂(g) → 2 H₂O(l)</b></p>
<ul>
<li>Le formule dicono <b>quali</b> sostanze partecipano e <b>non si cambiano mai</b> (cambiare un pedice vorrebbe dire cambiare sostanza).</li>
<li>I <b>coefficienti stechiometrici</b> davanti alle formule dicono <b>quante</b> entità reagiscono (se è 1 non si scrive).</li>
<li>Tra parentesi lo stato fisico: <b>(s)</b> solido, <b>(l)</b> liquido, <b>(g)</b> gas, <b>(aq)</b> in soluzione acquosa.</li>
</ul>
<p>Il principio che governa tutto è la <b>conservazione della massa</b> (Lavoisier, 1789): gli atomi non si creano né si distruggono, quindi per ogni elemento il numero di atomi a sinistra e a destra deve essere uguale. Bilanciare un'equazione significa trovare i coefficienti giusti.</p>`
    },
    {
      type: "svg",
      title: "Gli atomi si riorganizzano, non spariscono",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#334155" stroke-width="2">
<circle cx="52" cy="90" r="14" fill="#ffffff"/><circle cx="80" cy="90" r="14" fill="#ffffff"/>
<circle cx="52" cy="140" r="14" fill="#ffffff"/><circle cx="80" cy="140" r="14" fill="#ffffff"/>
<circle cx="170" cy="115" r="22" fill="#ef4444"/><circle cx="212" cy="115" r="22" fill="#ef4444"/>
<circle cx="440" cy="85" r="22" fill="#ef4444"/><circle cx="420" cy="115" r="13" fill="#ffffff"/><circle cx="462" cy="115" r="13" fill="#ffffff"/>
<circle cx="520" cy="135" r="22" fill="#ef4444"/><circle cx="500" cy="165" r="13" fill="#ffffff"/><circle cx="542" cy="165" r="13" fill="#ffffff"/>
</g>
<g font-size="26" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="125" y="125">+</text><text x="305" y="125">→</text></g>
<g font-size="16" fill="#1f2937" text-anchor="middle" font-weight="bold">
<text x="66" y="195">2 H₂</text><text x="191" y="195">O₂</text><text x="480" y="215">2 H₂O</text>
</g>
<text x="300" y="30" font-size="17" font-weight="bold" fill="#0369a1" text-anchor="middle">Prima: 4 H + 2 O    Dopo: 4 H + 2 O</text>
<text x="300" y="260" font-size="15" fill="#475569" text-anchor="middle">Bianco = idrogeno, rosso = ossigeno. Gli atomi sono gli stessi, in legami diversi.</text>
</svg>`,
      caption: "Sulla bilancia di Lavoisier: 4 atomi di H e 2 di O prima, 4 di H e 2 di O dopo."
    },
    {
      type: "text",
      title: "Come si bilancia",
      html: `<p>Un metodo pratico, valido per la maggior parte delle reazioni:</p>
<ol>
<li>Scrivi le formule corrette di reagenti e prodotti.</li>
<li>Conta gli atomi di ogni elemento nei due membri.</li>
<li>Comincia dagli elementi che compaiono in <b>un solo composto per membro</b> (di solito i metalli e il carbonio) e lascia per ultimi l'<b>idrogeno</b> e l'<b>ossigeno</b> (quest'ultimo spesso si sistema con coefficienti frazionari, poi si moltiplica per due).</li>
<li>Se un composto poliatomico compare identico su entrambi i lati (per esempio SO₄²⁻) bilancialo come unità.</li>
<li>Controlla il conteggio finale e ricontrolla che i coefficienti siano interi e senza divisori comuni.</li>
</ol>
<p><b>Esempio: combustione del propano.</b> C₃H₈ + O₂ → CO₂ + H₂O. 3 C → 3 CO₂; 8 H → 4 H₂O; ora O a destra: 6 + 4 = 10, quindi 5 O₂. Risultato: <b>C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O</b>.</p>
<p><b>Esempio con metodo algebrico.</b> Per Al + HCl → AlCl₃ + H₂ si pone a Al + b HCl → c AlCl₃ + d H₂. Alluminio: a = c; cloro: b = 3c; idrogeno: b = 2d. Fissando c = 1 → a = 1, b = 3, d = 1,5; si moltiplica per 2: <b>2 Al + 6 HCl → 2 AlCl₃ + 3 H₂</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: bilanciamento",
      questions: [
        { type: "num", q: "Nella reazione bilanciata CH₄ + x O₂ → CO₂ + 2 H₂O, quanto vale x?", answer: 2, explain: "A destra ci sono 2 + 2 = 4 atomi di O, quindi servono 2 molecole di O₂." },
        { type: "mc", q: "Quale equazione è bilanciata?", options: ["4 Fe + 3 O₂ → 2 Fe₂O₃", "Fe + O₂ → Fe₂O₃", "2 Fe + 3 O₂ → Fe₂O₃", "Fe + 3 O₂ → 2 Fe₂O₃"], answer: 0, explain: "A sinistra 4 Fe e 6 O, a destra 4 Fe e 6 O." },
        { type: "tf", q: "Per bilanciare un'equazione si possono cambiare i pedici delle formule.", answer: false, explain: "Cambiare un pedice significa cambiare la sostanza: si modificano solo i coefficienti." }
      ]
    },
    {
      type: "text",
      title: "I grandi tipi di reazione",
      html: `<table>
<tr><th>Tipo</th><th>Schema</th><th>Esempio</th></tr>
<tr><td><b>Sintesi</b></td><td>A + B → AB</td><td>2 Mg + O₂ → 2 MgO</td></tr>
<tr><td><b>Decomposizione</b></td><td>AB → A + B</td><td>CaCO₃ → CaO + CO₂ (per riscaldamento)</td></tr>
<tr><td><b>Scambio semplice</b></td><td>A + BC → AC + B</td><td>Zn + 2 HCl → ZnCl₂ + H₂</td></tr>
<tr><td><b>Doppio scambio</b></td><td>AB + CD → AD + CB</td><td>AgNO₃ + NaCl → AgCl↓ + NaNO₃ (precipitato); HCl + NaOH → NaCl + H₂O (neutralizzazione)</td></tr>
<tr><td><b>Combustione</b></td><td>combustibile + O₂ → ossidi</td><td>CH₄ + 2 O₂ → CO₂ + 2 H₂O</td></tr>
</table>
<p>Molte di queste sono anche reazioni di <b>ossido-riduzione</b> (redox), in cui cambiano i numeri di ossidazione: nella sintesi del MgO il magnesio passa da 0 a +2 (si ossida) e l'ossigeno da 0 a −2 (si riduce). Le reazioni possono essere <b>esotermiche</b> (cedono calore: combustioni) o <b>endotermiche</b> (lo assorbono: la decomposizione del calcare).</p>`
    },
    {
      type: "text",
      title: "I calcoli stechiometrici: il ponte delle moli",
      html: `<p>I coefficienti dell'equazione bilanciata sono anche <b>rapporti tra moli</b>. 2 H₂ + O₂ → 2 H₂O significa che 2 mol di H₂ reagiscono con 1 mol di O₂ e producono 2 mol di H₂O. Ma in laboratorio si pesano i grammi, non le moli. Per questo ogni calcolo ha tre passaggi:</p>
<ol>
<li><b>grammi → moli</b> della sostanza data: n = m / M;</li>
<li><b>moli → moli</b> della sostanza cercata, con il rapporto dei coefficienti;</li>
<li><b>moli → grammi</b> (o litri, per i gas: 22,4 L/mol a 0 °C e 1 atm): m = n · M.</li>
</ol>
<p>Le <b>moli sono il ponte</b>: non si possono convertire direttamente i grammi di A nei grammi di B.</p>`
    },
    {
      type: "example",
      title: "Decomposizione del calcare",
      html: `<p>CaCO₃ → CaO + CO₂. Quanta calce viva (CaO) e quanta anidride carbonica si ottengono da <b>100 g</b> di calcare? Masse molari: CaCO₃ = 100 g/mol, CaO = 56 g/mol, CO₂ = 44 g/mol.</p>
<ol>
<li>n(CaCO₃) = 100 / 100 = <b>1,0 mol</b>.</li>
<li>Rapporti 1 : 1 : 1, quindi si formano 1,0 mol di CaO e 1,0 mol di CO₂.</li>
<li>m(CaO) = 1,0 · 56 = <b>56 g</b>; m(CO₂) = 1,0 · 44 = <b>44 g</b>. Totale: 100 g, come all'inizio (Lavoisier!).</li>
<li>Volume di CO₂ a 0 °C e 1 atm: 1,0 · 22,4 = <b>22,4 L</b>.</li>
</ol>`
    },
    {
      type: "example",
      title: "Quanto idrogeno si libera da un po' di alluminio?",
      html: `<p>2 Al + 6 HCl → 2 AlCl₃ + 3 H₂. Si fanno reagire <b>27 g</b> di alluminio (M = 27 g/mol) con acido in eccesso.</p>
<ol>
<li>n(Al) = 27 / 27 = 1,0 mol.</li>
<li>Rapporto Al : H₂ = 2 : 3, quindi n(H₂) = 1,0 · 3/2 = 1,5 mol.</li>
<li>m(H₂) = 1,5 · 2 = <b>3,0 g</b>; V = 1,5 · 22,4 = <b>33,6 L</b> in condizioni normali.</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: dai grammi alle moli",
      questions: [
        { type: "num", q: "Nella reazione 2 H₂ + O₂ → 2 H₂O, quante moli di acqua si formano da 3 mol di H₂?", answer: 3, explain: "Il rapporto H₂ : H₂O è 2 : 2 = 1 : 1, quindi 3 mol." },
        { type: "num", q: "Quanti grammi di CO₂ (M = 44) si ottengono bruciando 1 mol di C secondo C + O₂ → CO₂?", answer: 44, explain: "1 mol di C → 1 mol di CO₂ = 44 g." },
        { type: "mc", q: "Quale dato bisogna sempre calcolare per passare dai grammi di A ai grammi di B?", options: ["Le moli", "La densità", "Il volume", "La temperatura"], answer: 0, explain: "I coefficienti sono rapporti tra moli, non tra masse: le moli sono il ponte." }
      ]
    },
    {
      type: "text",
      title: "Il reagente limitante e la resa",
      html: `<p>Raramente i reagenti sono nelle proporzioni esatte dell'equazione. Quello che finisce per primo, e che quindi <b>limita</b> la quantità di prodotto, è il <b>reagente limitante</b>; l'altro è in <b>eccesso</b> e ne avanza una parte.</p>
<p><b>Come si trova</b>: si convertono le masse in moli e si dividono per i rispettivi coefficienti: il rapporto più piccolo indica il limitante.</p>
<p><b>Esempio.</b> N₂ + 3 H₂ → 2 NH₃. Si mescolano 28 g di N₂ (1,0 mol, M = 28) e 3,0 g di H₂ (1,5 mol, M = 2). Rapporti n/coefficiente: N₂ 1,0/1 = 1,0; H₂ 1,5/3 = 0,5. Il più basso è H₂: è il <b>limitante</b>. Si formano 1,5 · 2/3 = <b>1,0 mol di NH₃</b>, cioè 17 g. Dell'azoto ne reagisce 0,5 mol, quindi ne restano 0,5 mol (14 g).</p>
<p>La quantità massima ottenibile (calcolata dal limitante) è la <b>resa teorica</b>. In pratica si ottiene meno: ci sono reazioni incomplete, perdite, reazioni collaterali. La <b>resa percentuale</b> è:</p>
<p style="text-align:center"><b>resa % = (resa reale / resa teorica) × 100</b></p>
<p>Se dai 17 g teorici di NH₃ se ne raccolgono 13,6 g, la resa è 13,6/17 · 100 = <b>80%</b>.</p>`
    },
    {
      type: "svg",
      title: "Il reagente limitante come ricetta",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="28" font-size="17" font-weight="bold" fill="#1f2937" text-anchor="middle">N₂ + 3 H₂ → 2 NH₃ con 2 N₂ e 3 H₂</text>
<g stroke="#1e3a8a" stroke-width="2" fill="#3b82f6"><circle cx="40" cy="95" r="16"/><circle cx="72" cy="95" r="16"/><circle cx="40" cy="145" r="16"/><circle cx="72" cy="145" r="16"/></g>
<g stroke="#334155" stroke-width="2" fill="#ffffff"><circle cx="150" cy="80" r="11"/><circle cx="172" cy="80" r="11"/><circle cx="150" cy="115" r="11"/><circle cx="172" cy="115" r="11"/><circle cx="150" cy="150" r="11"/><circle cx="172" cy="150" r="11"/></g>
<text x="56" y="188" font-size="15" fill="#1e3a8a" text-anchor="middle" font-weight="bold">2 N₂</text>
<text x="161" y="188" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">3 H₂</text>
<text x="235" y="125" font-size="30" fill="#1f2937" text-anchor="middle" font-weight="bold">→</text>
<g stroke="#1e3a8a" stroke-width="2" fill="#3b82f6"><circle cx="320" cy="85" r="16"/><circle cx="320" cy="145" r="16"/><circle cx="440" cy="115" r="16"/></g>
<g stroke="#334155" stroke-width="2" fill="#ffffff"><circle cx="294" cy="60" r="10"/><circle cx="346" cy="60" r="10"/><circle cx="320" cy="108" r="10"/><circle cx="294" cy="120" r="10"/><circle cx="346" cy="120" r="10"/><circle cx="320" cy="168" r="10"/></g>
<g stroke="#1e3a8a" stroke-width="2" fill="#3b82f6"><circle cx="500" cy="95" r="16"/><circle cx="532" cy="95" r="16"/></g>
<text x="320" y="205" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">2 NH₃</text>
<text x="516" y="140" font-size="15" fill="#1e3a8a" text-anchor="middle" font-weight="bold">1 N₂ avanza</text>
<text x="300" y="250" font-size="16" fill="#b91c1c" text-anchor="middle" font-weight="bold">L'idrogeno finisce per primo: è il reagente limitante</text>
<text x="300" y="275" font-size="14" fill="#475569" text-anchor="middle">Blu = azoto, bianco = idrogeno.</text>
</svg>`,
      caption: "Con 6 atomi di H si possono fare solo 2 molecole di NH₃: restano 2 atomi di N, cioè un N₂."
    },
    {
      type: "widget",
      title: "Il laboratorio di chimica",
      widget: "chemLab",
      options: {},
      caption: "Scegli due reagenti e pesali: osserva moli, reagente limitante, prodotti e conservazione della massa."
    },
    {
      type: "text",
      title: "Le soluzioni e la concentrazione",
      html: `<p>Una <b>soluzione</b> è un miscuglio omogeneo: il <b>soluto</b> (in quantità minore) è disciolto nel <b>solvente</b> (di solito acqua). Per dire quanto soluto c'è si usano le <b>concentrazioni</b>:</p>
<table>
<tr><th>Grandezza</th><th>Definizione</th><th>Esempio</th></tr>
<tr><td>Percentuale in massa (% m/m)</td><td>g di soluto in 100 g di soluzione</td><td>10 g di zucchero in 90 g di acqua: 10 / 100 = 10%</td></tr>
<tr><td>Percentuale m/V</td><td>g di soluto in 100 mL di soluzione</td><td>soluzione fisiologica 0,9% m/V: 0,9 g NaCl in 100 mL</td></tr>
<tr><td><b>Molarità M</b></td><td>moli di soluto per <b>litro di soluzione</b>: M = n / V</td><td>5,85 g di NaCl (0,10 mol) in 500 mL: M = 0,10 / 0,5 = 0,20 mol/L</td></tr>
<tr><td>Molalità m</td><td>moli di soluto per <b>kg di solvente</b></td><td>0,5 mol in 250 g di acqua: 2 mol/kg</td></tr>
<tr><td>Frazione molare χ</td><td>moli del componente / moli totali</td><td>1 mol di etanolo in 9 mol di acqua: χ = 0,1</td></tr>
</table>
<p>La molarità è la più usata in laboratorio perché collega il <b>volume</b> (facile da misurare) alle <b>moli</b>: n = M · V. Dipende però dalla temperatura (il volume cambia), mentre molalità e frazione molare no.</p>
<p><b>Diluizione.</b> Aggiungendo solvente non cambiano le moli di soluto, quindi <b>M₁ · V₁ = M₂ · V₂</b>. Per ottenere 500 mL di HCl 1,0 M da una soluzione 12 M servono V₁ = 1,0 · 500 / 12 ≈ 42 mL, portati a 500 mL con acqua. Regola di sicurezza: si versa sempre l'acido nell'acqua, mai il contrario.</p>
<p><b>Soluzioni e reazioni.</b> Con le soluzioni la stechiometria usa n = M · V. Per neutralizzare 20 mL di HCl 0,10 M con NaOH 0,20 M (rapporto 1 : 1): n(HCl) = 0,10 · 0,020 = 2,0·10⁻³ mol; V(NaOH) = 2,0·10⁻³ / 0,20 = 0,010 L = <b>10 mL</b>. Il metodo con cui si usa una soluzione a concentrazione nota per determinarne un'altra si chiama <b>titolazione</b>.</p>`
    },
    {
      type: "example",
      title: "Preparare una soluzione",
      html: `<p>Vuoi preparare <b>250 mL di NaOH 0,40 M</b>. Quanta soda (M = 40 g/mol) pesi?</p>
<ol>
<li>n = M · V = 0,40 · 0,250 = 0,10 mol.</li>
<li>m = n · M = 0,10 · 40 = <b>4,0 g</b>.</li>
<li>Si sciolgono i 4,0 g in un po' d'acqua in un matraccio da 250 mL e si porta a volume. (Il matraccio è lo strumento che garantisce il volume finale della soluzione, non il volume del solvente.)</li>
</ol>`
    },
    {
      type: "remember",
      title: "Le formule da avere in mente",
      html: `<ul>
<li><b>n = m / M</b> (moli = grammi / massa molare)</li>
<li><b>n = V / 22,4</b> per un gas a 0 °C e 1 atm (V in litri)</li>
<li><b>M = n / V</b> (molarità, V in litri della soluzione); <b>n = M · V</b></li>
<li><b>M₁ V₁ = M₂ V₂</b> (diluizione)</li>
<li><b>resa % = reale / teorica · 100</b></li>
<li>Reagente limitante: il <b>più piccolo</b> rapporto (moli ÷ coefficiente).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la stechiometria",
      intro: "Se i calcoli ti sembrano astratti, prova a tradurli in situazioni concrete.",
      tabs: [
        { label: "🥪 La ricetta dei panini", html: "<p>Una reazione è una ricetta: <b>1 panino = 2 fette di pane + 1 fetta di prosciutto</b> (2 P + 1 S → 1 PS). Con 10 fette di pane e 8 di prosciutto, quanti panini? Con il pane ne fai 10 / 2 = 5; con il prosciutto 8 / 1 = 8. Il <b>pane è il limitante</b>: fai 5 panini e avanzano 3 fette di prosciutto. Lo stesso calcolo, diviso per i coefficienti, individua il reagente limitante in una reazione chimica. La <b>resa</b> corrisponde ai panini che non cadono per terra mentre li prepari.</p>" },
        { label: "🌉 Il ponte delle moli", html: "<p>Disegna sempre lo stesso schema in tre caselle: <b>[massa A] → (÷ M_A) → [moli A] → (× coeff B / coeff A) → [moli B] → (× M_B) → [massa B]</b>. È come attraversare un fiume: la massa di A e quella di B sono sulle due rive e l'unico ponte percorribile sono le moli. Se dimentichi il ponte e provi a nuotare direttamente tra i grammi, sbagli il conto: 2 g di H₂ e 32 g di O₂ <i>non</i> reagiscono in rapporto 1 : 1 in massa, ma 2 : 1 in moli.</p>" },
        { label: "🧮 Bilanciare con le equazioni", html: "<p>Se per tentativi non riesci, trasforma il bilanciamento in un sistema di equazioni. Per C₂H₆ + O₂ → CO₂ + H₂O poni a C₂H₆ + b O₂ → c CO₂ + d H₂O. Carbonio: 2a = c. Idrogeno: 6a = 2d → d = 3a. Ossigeno: 2b = 2c + d = 4a + 3a = 7a → b = 3,5a. Con a = 2: <b>2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O</b>. Il metodo funziona sempre e si presta bene anche a reazioni complesse.</p>" },
        { label: "💧 La molecola d'acqua in 3D", html: "<p>Per ogni mole di acqua formata (18 g) si sono legati 2 H a 1 O. Osserva la molecola: ognuna dei 6,022·10²³ pezzi della mole ha la stessa composizione. Perciò 36 g di acqua (2 mol) contengono 4 mol di H (4 g) e 2 mol di O (32 g): 4 + 32 = 36.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.55, color: "#ef4444", label: "O" }, { x: 0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" }, { x: -0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2]] } }
      ]
    },
    {
      type: "curiosity",
      title: "Il processo Haber-Bosch e il cibo del mondo",
      html: `<p>La reazione N₂ + 3 H₂ → 2 NH₃ è la base del processo <b>Haber-Bosch</b>: nel 1909 Fritz Haber ne dimostrò la fattibilità in laboratorio e Carl Bosch la portò su scala industriale (1913). L'ammoniaca serve a produrre fertilizzanti azotati: si stima che circa la metà dell'azoto presente nel corpo umano oggi provenga da quel processo. Haber ebbe il Nobel per la chimica nel 1918 e Bosch nel 1931. Poiché la resa per passaggio è bassa (l'equilibrio non è completamente spostato verso NH₃), i gas non reagiti vengono rimessi in circolo: è un esempio di come la resa percentuale pesi sull'economia di un impianto.</p>`
    },
    {
      type: "curiosity",
      title: "Dove va la legna che brucia?",
      html: `<p>Quando la legna brucia, la cenere pesa molto meno del legno: Lavoisier e prima di lui molti pensavano che qualcosa fosse stato distrutto. In realtà la maggior parte della massa se n'è andata come <b>gas</b>: CO₂ e vapore acqueo. Il legno è per metà carbonio: bruciando 1 kg di legno si formano circa 1,8 kg di CO₂, perché il carbonio si lega all'ossigeno dell'aria (che pesa più del carbonio). Se la combustione avviene in un recipiente chiuso, sulla bilancia non si misura nessuna variazione: la massa totale si conserva.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: dalla reazione ai numeri",
      nodes: [
        { id: "lav", label: "Conservazione della massa", x: 15, y: 12, color: "#2563eb", html: "Gli atomi non si creano né si distruggono.", why: "Lavoisier (1789) usò la bilancia in recipienti chiusi per dimostrare che la massa dei prodotti è uguale a quella dei reagenti: ciò sconfisse la teoria del flogisto." },
        { id: "bil", label: "Bilanciamento", x: 50, y: 12, color: "#16a34a", html: "Coefficienti interi che uguagliano gli atomi.", why: "È la conseguenza della legge di Lavoisier, scritta con la simbologia di Berzelius (1813-1814), che introdusse le lettere come simboli e i pedici." },
        { id: "mole", label: "Mole e massa molare", x: 85, y: 12, color: "#f59e0b", html: "Il ponte tra grammi e numero di particelle.", why: "Dalton propose le masse atomiche; Avogadro e Cannizzaro dimostrarono come confrontare i numeri di particelle; la mole è la loro sintesi moderna." },
        { id: "rap", label: "Rapporti molari", x: 30, y: 52, color: "#a855f7", html: "I coefficienti sono rapporti tra moli.", why: "Dalla legge di Proust (proporzioni definite) e dalle leggi di Gay-Lussac sui volumi dei gas (1808) si capì che gli atomi si combinano in numeri interi piccoli." },
        { id: "lim", label: "Reagente limitante e resa", x: 70, y: 52, color: "#ef4444", html: "Chi finisce per primo decide la quantità di prodotto; la resa confronta il reale con il teorico.", why: "Nella pratica industriale conta la convenienza: si usa di norma in eccesso il reagente più economico, per consumare completamente quello più costoso." },
        { id: "sol", label: "Soluzioni e molarità", x: 50, y: 88, color: "#0ea5e9", html: "n = M · V: la stechiometria nei liquidi.", why: "La maggior parte delle reazioni di laboratorio avviene in soluzione: misurare un volume è più semplice che pesare, e la molarità converte direttamente il volume in moli." }
      ],
      edges: [["lav", "bil", "impone il"], ["bil", "rap", "dà i"], ["mole", "rap", "permette i"], ["rap", "lim", "sono la base di"], ["rap", "sol", "valgono anche in"], ["mole", "sol", "definisce la"]]
    }
  ],
  glossary: [
    { t: "Reagenti e prodotti", d: "Le sostanze che reagiscono e quelle che si formano in una reazione." },
    { t: "Coefficiente stechiometrico", d: "Numero davanti a una formula in un'equazione: indica il rapporto tra le quantità." },
    { t: "Bilanciamento", d: "Scelta dei coefficienti in modo che il numero di atomi di ogni elemento sia uguale nei due membri." },
    { t: "Stechiometria", d: "Studio delle quantità di sostanze che reagiscono e si formano in una reazione." },
    { t: "Reagente limitante", d: "Il reagente che si esaurisce per primo e determina la quantità massima di prodotto." },
    { t: "Resa percentuale", d: "Rapporto tra la quantità di prodotto ottenuta e quella teorica, per cento." },
    { t: "Soluzione", d: "Miscuglio omogeneo di un soluto in un solvente." },
    { t: "Molarità", d: "Moli di soluto per litro di soluzione (mol/L)." },
    { t: "Diluizione", d: "Aggiunta di solvente che riduce la concentrazione, con M₁V₁ = M₂V₂." },
    { t: "Titolazione", d: "Tecnica per determinare una concentrazione incognita facendo reagire la soluzione con una a concentrazione nota." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale legge giustifica il bilanciamento delle equazioni chimiche?", options: ["Conservazione della massa", "Legge di Ohm", "Principio di Pauli", "Legge di Boyle"], answer: 0, explain: "Gli atomi non si creano né si distruggono: il loro numero deve essere uguale prima e dopo." },
      { type: "num", q: "Bilancia: C₃H₈ + x O₂ → 3 CO₂ + 4 H₂O. Quanto vale x?", answer: 5, explain: "A destra ci sono 6 + 4 = 10 atomi di O: servono 5 O₂." },
      { type: "num", q: "Quante moli di H₂O si formano da 2 mol di O₂ secondo 2 H₂ + O₂ → 2 H₂O (idrogeno in eccesso)?", answer: 4, explain: "Il rapporto O₂ : H₂O è 1 : 2, quindi 2 · 2 = 4 mol." },
      { type: "num", q: "Quanti grammi di CaO (M = 56) si ottengono da 2,0 mol di CaCO₃ (CaCO₃ → CaO + CO₂)?", answer: 112, explain: "2,0 mol di CaCO₃ → 2,0 mol di CaO = 2,0 · 56 = 112 g." },
      { type: "num", q: "Quanti litri di H₂ (0 °C, 1 atm) si ottengono da 1,0 mol di Zn con acido in eccesso (Zn + 2 HCl → ZnCl₂ + H₂)?", answer: 22.4, tol: 0.1, unit: "L", explain: "1,0 mol di Zn → 1,0 mol di H₂ = 22,4 L." },
      { type: "mc", q: "Si hanno 2 mol di Na e 2 mol di Cl₂ per la reazione 2 Na + Cl₂ → 2 NaCl. Qual è il reagente limitante?", options: ["Na", "Cl₂", "Nessuno", "NaCl"], answer: 0, explain: "Na: 2/2 = 1; Cl₂: 2/1 = 2. Il rapporto più piccolo è quello del sodio." },
      { type: "num", q: "La resa teorica è 20 g e se ne ottengono 15. Qual è la resa percentuale?", answer: 75, unit: "%", explain: "15/20 · 100 = 75%." },
      { type: "num", q: "Qual è la molarità di una soluzione con 0,50 mol di soluto in 250 mL?", answer: 2, tol: 0.01, unit: "mol/L", explain: "M = 0,50 / 0,250 = 2,0 mol/L." },
      { type: "num", q: "Quanti mL di HCl 12 M servono per preparare 600 mL di HCl 1,0 M?", answer: 50, tol: 0.5, unit: "mL", explain: "V₁ = M₂V₂/M₁ = 1,0 · 600 / 12 = 50 mL." },
      { type: "order", q: "Ordina i passaggi di un calcolo stechiometrico.", items: ["Convertire i grammi in moli", "Applicare il rapporto dei coefficienti", "Convertire le moli in grammi", "Verificare la resa"], explain: "Si passa da grammi a moli, poi si usano i coefficienti, infine si riconverte e si confronta la resa reale con la teorica." }
    ]
  }
});
