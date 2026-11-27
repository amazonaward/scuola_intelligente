TOPIC('it', {
  id: "l4-sci-sistema-nervoso-endocrino",
  title: "Sistema nervoso ed endocrino",
  intro: "Un organismo con trilioni di cellule deve coordinarsi: se tocchi una pentola bollente ritiri la mano in meno di un decimo di secondo, ma per crescere, per regolare la glicemia o per adattarti ai ritmi del giorno e della notte servono segnali che durano ore o anni. Il corpo ha due reti di comunicazione. Il <b>sistema nervoso</b> è come internet: segnali elettrici rapidissimi, diretti a destinazioni precise. Il <b>sistema endocrino</b> è come la radio: messaggeri chimici, gli <b>ormoni</b>, rilasciati nel sangue e captati da chi ha il \"ricevitore\" giusto, con effetti più lenti e duraturi. In questa lezione vedremo come un neurone genera un segnale elettrico usando la chimica degli ioni (la stessa equazione di Nernst che hai visto nelle pile!), come comunicano due neuroni, come è organizzato il cervello e come gli ormoni regolano il corpo. I due sistemi, in realtà, sono un'unica rete integrata dall'<b>ipotalamo</b>.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "Il neurone: la cellula che trasmette segnali",
      html: `<p>Il sistema nervoso umano contiene circa <b>86 miliardi di neuroni</b> (stima di Azevedo e colleghi, 2009, con un metodo che ha corretto il precedente \"100 miliardi\") e un numero simile di cellule gliali. Un <b>neurone</b> è una cellula specializzata nel ricevere, integrare e trasmettere segnali. Ha tre parti:</p>
<ul>
<li><b>Dendriti</b>: ramificazioni che ricevono segnali da altri neuroni.</li>
<li><b>Corpo cellulare (soma)</b>: contiene il nucleo; qui i segnali in ingresso vengono sommati.</li>
<li><b>Assone</b>: un prolungamento unico che porta il segnale lontano, fino a 1 metro (dal midollo al piede). Termina nei <b>bottoni sinaptici</b>.</li>
</ul>
<p>Molti assoni sono avvolti in una <b>guaina mielinica</b>, un isolante lipidico prodotto dalle <b>cellule di Schwann</b> (sistema nervoso periferico) e dagli <b>oligodendrociti</b> (sistema nervoso centrale), interrotta a intervalli dai <b>nodi di Ranvier</b>. Il segnale \"salta\" da un nodo all'altro (<b>conduzione saltatoria</b>) e viaggia molto più veloce: fino a 100 m/s, contro 1 m/s circa di un assone senza mielina. Nella <b>sclerosi multipla</b> il sistema immunitario attacca la mielina e i segnali si rallentano o si bloccano.</p>
<p>Le <b>cellule gliali</b> non conducono segnali ma sono essenziali: gli <b>astrociti</b> nutrono i neuroni e regolano l'ambiente chimico; la <b>microglia</b> è il sistema immunitario del cervello; gli oligodendrociti producono la mielina.</p>
<p>La \"dottrina del neurone\" (le cellule nervose sono individui separati e non una rete continua) fu dimostrata da <b>Santiago Ramón y Cajal</b>, che con la colorazione al nitrato d'argento inventata da <b>Camillo Golgi</b> disegnò i neuroni con minuziosa precisione. I due, in disaccordo sulla teoria, condivisero il Nobel per la medicina nel 1906.</p>`
    },
    {
      type: "widget",
      title: "Le parti di un neurone",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><g stroke="#7c3aed" stroke-width="5" fill="none" stroke-linecap="round"><path d="M110 150 L60 100 L30 95"/><path d="M60 100 L40 60"/><path d="M110 150 L55 175 L30 215"/><path d="M110 150 L65 150 L30 150"/></g><circle cx="130" cy="150" r="38" fill="#c4b5fd" stroke="#4c1d95" stroke-width="4"/><circle cx="130" cy="150" r="14" fill="#6d28d9"/><path d="M168 150 L520 150" stroke="#7c3aed" stroke-width="6"/><g fill="#fde68a" stroke="#92400e" stroke-width="3"><rect x="215" y="136" width="70" height="28" rx="14"/><rect x="305" y="136" width="70" height="28" rx="14"/><rect x="395" y="136" width="70" height="28" rx="14"/></g><g stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round"><path d="M520 150 L560 110"/><path d="M520 150 L565 150"/><path d="M520 150 L560 190"/></g><g fill="#a78bfa" stroke="#4c1d95" stroke-width="2"><circle cx="562" cy="108" r="9"/><circle cx="570" cy="150" r="9"/><circle cx="562" cy="192" r="9"/></g></svg>`,
        spots: [
          { x: 50, y: 100, label: "Dendriti" },
          { x: 130, y: 150, label: "Corpo cellulare (soma)" },
          { x: 180, y: 150, label: "Assone" },
          { x: 250, y: 150, label: "Guaina mielinica" },
          { x: 565, y: 150, label: "Bottoni sinaptici" }
        ]
      },
      caption: "Clicca ogni parte del neurone e scegli il nome giusto."
    },
    {
      type: "text",
      title: "Il potenziale di riposo: una batteria biologica",
      html: `<p>Ai due lati della membrana di un neurone a riposo c'è una <b>differenza di potenziale</b>: l'interno è più negativo dell'esterno, circa <b>−70 mV</b> (il <b>potenziale di riposo</b>). Nasce da due fatti:</p>
<ol>
<li>Le concentrazioni ioniche sono diverse. Dentro: tanto K⁺ (circa 140 mM) e poco Na⁺ (circa 12 mM). Fuori: poco K⁺ (circa 5 mM) e tanto Na⁺ (circa 145 mM).</li>
<li>La membrana a riposo è molto più permeabile al K⁺ (canali di \"perdita\") che al Na⁺: il K⁺ tende a uscire seguendo il gradiente di concentrazione, lasciando all'interno cariche negative non compensate (proteine, fosfati), finché la forza elettrica che lo richiama dentro bilancia quella chimica che lo spinge fuori.</li>
</ol>
<p>Il valore di equilibrio per un singolo ione lo calcola l'<b>equazione di Nernst</b> (la stessa vista nelle pile): a 37 °C, <b>E<sub>ion</sub> = (61,5 mV / z) · log([ion]<sub>fuori</sub> / [ion]<sub>dentro</sub>)</b>. Per il potassio: E<sub>K</sub> = 61,5 · log(5/140) ≈ <b>−89 mV</b>; per il sodio: E<sub>Na</sub> = 61,5 · log(145/12) ≈ <b>+66 mV</b>. Il potenziale di riposo reale (−70 mV) sta fra i due, ma è vicino a E<sub>K</sub>, perché a riposo la membrana è molto più permeabile al K⁺.</p>
<p>Poiché i canali di perdita lasciano filtrare un po' di Na⁺ dentro e di K⁺ fuori, i gradienti si sfalderebbero senza la <b>pompa sodio-potassio</b> (Na⁺/K⁺-ATPasi): con l'energia dell'ATP, espelle <b>3 Na⁺</b> e fa entrare <b>2 K⁺</b> a ogni ciclo, ripristinando i gradienti. Consuma circa 20-25% dell'ATP del neurone a riposo e circa il 20% dell'energia dell'intero corpo è usata dal cervello, che pesa il 2% del peso corporeo.</p>`
    },
    {
      type: "text",
      title: "Il potenziale d'azione: un segnale tutto o niente",
      html: `<p>Un neurone stimolato a sufficienza genera un breve impulso elettrico: il <b>potenziale d'azione</b> (PA), che dura circa 1-2 ms. Le fasi:</p>
<ol>
<li><b>Stimolo</b>: i segnali in ingresso depolarizzano un poco la membrana. Se si raggiunge la <b>soglia</b> (circa −55 mV) si innesca il PA; sotto soglia non succede nulla.</li>
<li><b>Depolarizzazione</b>: si aprono i <b>canali del Na⁺ voltaggio-dipendenti</b>; il Na⁺ entra a valanga (gradiente chimico ed elettrico lo spingono dentro) e il potenziale sale fino a circa <b>+30 mV</b>, avvicinandosi a E<sub>Na</sub>.</li>
<li><b>Ripolarizzazione</b>: i canali del Na⁺ si inattivano e si aprono i <b>canali del K⁺ voltaggio-dipendenti</b>: il K⁺ esce e il potenziale torna verso il basso.</li>
<li><b>Iperpolarizzazione</b>: per un istante il potenziale scende sotto il valore di riposo (verso E<sub>K</sub>), poi torna a −70 mV.</li>
<li><b>Periodo refrattario</b>: subito dopo un PA, i canali del Na⁺ non possono riaprirsi: ciò garantisce che il segnale viaggi in <b>un solo verso</b> e limita la frequenza massima (qualche centinaio di PA al secondo).</li>
</ol>
<p>È una legge del <b>tutto o niente</b>: l'ampiezza del PA è sempre la stessa. Un'informazione più intensa non produce picchi più alti, ma <b>più picchi al secondo</b> (<b>codifica in frequenza</b>). Il PA si autopropaga: la depolarizzazione in un punto apre i canali nel tratto adiacente, e così via lungo l'assone, senza attenuarsi (come una fila di tessere del domino). Il meccanismo fu chiarito da <b>Alan Hodgkin e Andrew Huxley</b> (1952), registrando l'attività dell'assone gigante del calamaro; Nobel per la medicina nel 1963 (con John Eccles).</p>`
    },
    {
      type: "svg",
      title: "Il potenziale d'azione",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="70" y1="270" x2="570" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="70" y1="270" x2="70" y2="25" stroke="#334155" stroke-width="2"/>
<text x="320" y="293" font-size="14" fill="#334155" text-anchor="middle">tempo (ms)</text>
<text x="20" y="150" font-size="14" fill="#334155" text-anchor="middle" transform="rotate(-90 20 150)">potenziale di membrana (mV)</text>
<g font-size="14" fill="#334155" text-anchor="end"><text x="62" y="55">+30</text><text x="62" y="120">0</text><text x="62" y="170">−55</text><text x="62" y="205">−70</text><text x="62" y="250">−90</text></g>
<line x1="70" y1="170" x2="570" y2="170" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 5"/>
<text x="560" y="162" font-size="14" fill="#dc2626" font-weight="bold" text-anchor="end">soglia</text>
<path d="M70 205 L140 205 Q170 205 185 170 Q215 30 245 55 Q290 100 320 215 Q340 245 380 235 Q420 215 450 205 L570 205" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="165" y="130" font-size="14" font-weight="bold" fill="#16a34a" text-anchor="end">1 depolarizzazione</text>
<text x="170" y="150" font-size="14" fill="#16a34a" text-anchor="end">(entra Na⁺)</text>
<text x="330" y="105" font-size="14" font-weight="bold" fill="#b45309">2 ripolarizzazione</text>
<text x="330" y="123" font-size="14" fill="#b45309">(esce K⁺)</text>
<text x="400" y="262" font-size="14" font-weight="bold" fill="#7c3aed">3 iperpolarizzazione</text>
<text x="100" y="196" font-size="14" fill="#475569">riposo</text>
</svg>`,
      caption: "Un potenziale d'azione dura circa 1-2 millisecondi."
    },
    {
      type: "quiz",
      title: "Mini-quiz: il segnale elettrico",
      questions: [
        { type: "mc", q: "Quale ione entra nel neurone durante la fase di depolarizzazione?", options: ["Na⁺", "K⁺", "Cl⁻", "Ca²⁺ soltanto"], answer: 0, explain: "L'apertura dei canali del Na⁺ voltaggio-dipendenti fa entrare il sodio e porta il potenziale a circa +30 mV." },
        { type: "tf", q: "Uno stimolo più intenso produce un potenziale d'azione di ampiezza maggiore.", answer: false, explain: "Vale la legge del tutto o niente: l'intensità è codificata dalla frequenza dei potenziali d'azione, non dall'ampiezza." },
        { type: "mc", q: "A che cosa serve la guaina mielinica?", options: ["Aumenta la velocità di conduzione (conduzione saltatoria)", "Produce neurotrasmettitori", "Nutre il neurone", "Genera il potenziale di riposo"], answer: 0, explain: "Isolando l'assone, il segnale salta da un nodo di Ranvier al successivo." }
      ]
    },
    {
      type: "text",
      title: "La sinapsi: dove i neuroni si parlano",
      html: `<p>L'assone di un neurone non tocca la cellula successiva: c'è uno spazio di circa 20-40 nm, la <b>fessura sinaptica</b>. Nella <b>sinapsi chimica</b> (la più comune) il segnale elettrico viene convertito in segnale chimico:</p>
<ol>
<li>Il PA arriva al <b>bottone sinaptico</b> e apre i canali del <b>Ca²⁺</b>.</li>
<li>Il calcio che entra fa fondere le <b>vescicole</b> piene di <b>neurotrasmettitore</b> con la membrana: il neurotrasmettitore è rilasciato nella fessura (esocitosi).</li>
<li>Si lega a <b>recettori</b> sulla membrana della cellula successiva (<b>postsinaptica</b>), aprendo canali ionici.</li>
<li>Il segnale termina: il neurotrasmettitore viene <b>degradato</b> da enzimi (come l'<b>acetilcolinesterasi</b>) o <b>riassorbito</b> dal neurone presinaptico.</li>
</ol>
<p>L'effetto può essere <b>eccitatorio</b> (apre canali per Na⁺, depolarizza: <b>potenziale postsinaptico eccitatorio, PPSE</b>) o <b>inibitorio</b> (apre canali per Cl⁻ o K⁺, iperpolarizza: PPSI). Ogni neurone riceve da centinaia a migliaia di sinapsi e <b>somma</b> tutto: se la somma raggiunge la soglia all'inizio dell'assone, parte un PA. Questa <b>integrazione</b> è la base elementare del \"calcolo\" del cervello.</p>
<table>
<tr><th>Neurotrasmettitore</th><th>Ruolo principale</th></tr>
<tr><td><b>Acetilcolina</b></td><td>Contrazione dei muscoli scheletrici (giunzione neuromuscolare); sistema parasimpatico; memoria</td></tr>
<tr><td><b>Glutammato</b></td><td>Il principale neurotrasmettitore eccitatorio del cervello; apprendimento</td></tr>
<tr><td><b>GABA</b></td><td>Il principale inibitorio; ansiolitici come le benzodiazepine ne potenziano l'azione</td></tr>
<tr><td><b>Dopamina</b></td><td>Movimento, motivazione, ricompensa; carente nel <b>Parkinson</b> (si usa L-DOPA)</td></tr>
<tr><td><b>Serotonina</b></td><td>Umore, sonno, appetito; gli antidepressivi SSRI ne aumentano la disponibilità</td></tr>
<tr><td><b>Noradrenalina</b></td><td>Allerta e reazione di stress</td></tr>
<tr><td><b>Endorfine</b></td><td>Peptidi che riducono il dolore, simili alla morfina</td></tr>
</table>
<p>Molte sostanze agiscono sulle sinapsi: il <b>curaro</b> blocca i recettori dell'acetilcolina nei muscoli (paralisi); la <b>tossina botulinica</b> impedisce il rilascio di acetilcolina (e a dosi minime si usa a scopo medico); la <b>caffeina</b> blocca i recettori dell'adenosina, che segnala la stanchezza; la <b>cocaina</b> impedisce il riassorbimento della dopamina. Fu <b>Otto Loewi</b> a dimostrare, nel 1921, la natura chimica della trasmissione con un esperimento famoso: stimolò il nervo vago di un cuore di rana e raccolse il liquido, che applicato a un secondo cuore ne rallentò il battito (\"Vagusstoff\", poi riconosciuta come acetilcolina). Nobel per la medicina nel 1936 con Henry Dale.</p>`
    },
    {
      type: "svg",
      title: "Una sinapsi chimica",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<path d="M120 20 L120 110 Q120 130 150 130 L450 130 Q480 130 480 110 L480 20 Z" fill="#ddd6fe" stroke="#4c1d95" stroke-width="3"/>
<text x="300" y="50" font-size="15" font-weight="bold" fill="#4c1d95" text-anchor="middle">terminale presinaptico</text>
<g fill="#fde68a" stroke="#92400e" stroke-width="2"><circle cx="190" cy="85" r="14"/><circle cx="240" cy="95" r="14"/><circle cx="290" cy="85" r="14"/><circle cx="340" cy="100" r="14"/></g>
<text x="190" y="115" font-size="14" fill="#92400e" text-anchor="middle">vescicole</text>
<g fill="#16a34a"><circle cx="390" cy="85" r="6"/><circle cx="410" cy="95" r="6"/><circle cx="430" cy="85" r="6"/></g>
<text x="410" y="68" font-size="14" fill="#14532d" text-anchor="middle">Ca²⁺</text>
<path d="M340 130 L340 160 M300 130 L300 165 M260 130 L260 158" stroke="#b45309" stroke-width="2" stroke-dasharray="3 3"/>
<g fill="#dc2626"><circle cx="270" cy="170" r="5"/><circle cx="300" cy="175" r="5"/><circle cx="330" cy="170" r="5"/><circle cx="285" cy="185" r="5"/><circle cx="315" cy="188" r="5"/></g>
<text x="500" y="178" font-size="14" fill="#dc2626" font-weight="bold">neurotrasmettitore</text>
<text x="500" y="196" font-size="14" fill="#475569">nella fessura</text>
<path d="M120 220 Q120 200 150 200 L450 200 Q480 200 480 220 L480 285 L120 285 Z" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<g fill="#1e3a8a"><rect x="250" y="196" width="22" height="12" rx="3"/><rect x="290" y="196" width="22" height="12" rx="3"/><rect x="330" y="196" width="22" height="12" rx="3"/></g>
<text x="300" y="250" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">cellula postsinaptica (recettori)</text>
</svg>`,
      caption: "Segnale elettrico → ingresso di Ca²⁺ → rilascio chimico → nuovo segnale elettrico."
    },
    {
      type: "text",
      title: "L'organizzazione del sistema nervoso",
      html: `<p>Il <b>sistema nervoso centrale (SNC)</b> comprende <b>encefalo</b> e <b>midollo spinale</b>, protetti da cranio, colonna vertebrale, tre membrane (le <b>meningi</b>) e dal <b>liquor</b> che li ammortizza. Il <b>sistema nervoso periferico (SNP)</b> comprende i nervi che collegano il SNC al resto del corpo: 12 paia di nervi cranici e 31 paia di nervi spinali.</p>
<p>Il SNP si divide in:</p>
<ul>
<li><b>Somatico</b>: dalle fibre sensitive al SNC e dalle fibre motorie ai muscoli scheletrici (movimenti volontari).</li>
<li><b>Autonomo (o vegetativo)</b>: controlla gli organi interni, senza controllo cosciente. Ha due divisioni che spesso agiscono in modo opposto: il <b>simpatico</b> (\"lotta o fuga\": accelera cuore e respiro, dilata le pupille, rallenta la digestione; trasmettitore noradrenalina) e il <b>parasimpatico</b> (\"riposo e digestione\": rallenta il cuore, stimola la digestione; trasmettitore acetilcolina).</li>
</ul>
<p><b>L'arco riflesso.</b> Se tocchi qualcosa di bollente, il segnale dal recettore del dolore arriva con un neurone sensitivo al midollo spinale, dove un interneurone lo passa direttamente a un neurone motorio che contrae il muscolo: il ritiro avviene <b>prima</b> che il cervello se ne accorga (il dolore si sente un attimo dopo). Anche il riflesso rotuleo (il medico che batte sul ginocchio) è un arco riflesso a una sola sinapsi: serve a controllare l'integrità del circuito.</p>
<p><b>L'encefalo</b> (circa 1,3-1,4 kg) comprende:</p>
<ul>
<li><b>Telencefalo (cervello)</b>: due emisferi, ricoperti dalla <b>corteccia cerebrale</b> (2-4 mm di materia grigia, molto ripiegata per aumentare la superficie). Quattro lobi: <b>frontale</b> (movimento volontario, pianificazione, decisioni, linguaggio: area di Broca), <b>parietale</b> (sensibilità del corpo, spazio), <b>temporale</b> (udito, memoria, linguaggio: area di Wernicke), <b>occipitale</b> (vista).</li>
<li><b>Sistema limbico</b>: <b>ippocampo</b> (formazione di nuovi ricordi) e <b>amigdala</b> (emozioni, paura).</li>
<li><b>Talamo</b>: stazione di smistamento delle informazioni sensoriali. <b>Ipotalamo</b>: regola temperatura, fame, sete, sonno, e comanda l'ipofisi (collegamento col sistema endocrino).</li>
<li><b>Cervelletto</b>: coordinazione dei movimenti, equilibrio.</li>
<li><b>Tronco encefalico</b> (mesencefalo, ponte, bulbo): funzioni vitali involontarie (respiro, battito, pressione). Un danno al tronco è spesso letale.</li>
</ul>
<p>I due emisferi sono collegati dal <b>corpo calloso</b> e controllano il lato <b>opposto</b> del corpo. Nel caso di <b>Henry Molaison</b> (paziente \"H.M.\"), a cui nel 1953 furono asportati gran parte dell'ippocampo e le strutture vicine per curare un'epilessia grave, si scoprì che non poteva formare nuovi ricordi, pur conservando quelli passati e la capacità di imparare nuove abilità motorie: prova che memoria dichiarativa e procedurale usano circuiti diversi.</p>
<p><b>Apprendimento e plasticità.</b> Il cervello cambia con l'esperienza: le sinapsi che si usano insieme si rafforzano (<b>potenziamento a lungo termine</b>, LTP; \"neuroni che si attivano insieme si collegano insieme\", regola formulata da Donald Hebb nel 1949), quelle che non si usano si indeboliscono. Questa <b>plasticità</b> è maggiore nell'infanzia e nell'adolescenza, ma continua per tutta la vita.</p>`
    },
    {
      type: "example",
      title: "Quanto è veloce il segnale?",
      html: `<p>Tocchi con il piede un oggetto freddo. Il segnale deve percorrere circa 1,2 m fino al cervello. Quanto tempo?</p>
<ul>
<li>Con fibre mieliniche grandi (≈ 80 m/s): t = 1,2 / 80 = <b>0,015 s = 15 ms</b>.</li>
<li>Con fibre non mieliniche per il dolore lento (≈ 1 m/s): t = 1,2 / 1 = <b>1,2 s</b>.</li>
</ul>
<p>Ecco perché, se ti dai una martellata a un piede, senti prima un colpo secco (fibre veloci) e dopo un po' il dolore bruciante (fibre lente). Questa è anche la ragione per cui in una sclerosi multipla, perdendo mielina, i segnali rallentano. Il tempo di reazione di un velocista a un colpo di pistola (almeno 100 ms, tempo minimo accettato nelle gare) comprende percezione, elaborazione e comando muscolare.</p>`
    },
    {
      type: "text",
      title: "Il sistema endocrino: i messaggeri chimici",
      html: `<p>Il sistema endocrino è formato da <b>ghiandole endocrine</b> (senza dotto) che secernono <b>ormoni</b> direttamente nel sangue, i quali raggiungono tutto il corpo ma agiscono solo sulle <b>cellule bersaglio</b>, quelle dotate del recettore specifico. Il termine \"ormone\" (dal greco <i>hormao</i>, eccitare) fu coniato da <b>Ernest Starling</b> nel 1905, dopo che lui e William Bayliss avevano scoperto la <b>secretina</b> (1902), il primo ormone: una sostanza prodotta dall'intestino che stimola il pancreas, prova che la comunicazione chimica può avvenire senza passare dai nervi.</p>
<p>Gli ormoni sono di due grandi tipi:</p>
<ul>
<li><b>Peptidici/proteici e amminici</b> (insulina, glucagone, GH, adrenalina): idrosolubili, non attraversano la membrana; si legano a recettori di <b>superficie</b> e attivano un <b>secondo messaggero</b> (come l'AMP ciclico) che amplifica il segnale dentro la cellula. Effetti rapidi (secondi-minuti).</li>
<li><b>Steroidei</b> (cortisolo, estrogeni, testosterone, aldosterone), derivati dal colesterolo, e ormoni tiroidei: liposolubili, attraversano la membrana e si legano a recettori <b>intracellulari</b>, regolando l'espressione dei geni. Effetti più lenti (ore-giorni) e duraturi.</li>
</ul>
<table>
<tr><th>Ghiandola</th><th>Ormoni principali</th><th>Azione</th></tr>
<tr><td><b>Ipotalamo</b></td><td>Ormoni di rilascio (TRH, CRH, GnRH); ADH e ossitocina</td><td>Controlla l'ipofisi; ADH e ossitocina sono immagazzinati nell'ipofisi posteriore</td></tr>
<tr><td><b>Ipofisi</b> (grande come un pisello)</td><td>GH, TSH, ACTH, FSH, LH, prolattina; ADH, ossitocina</td><td>\"Direttore d'orchestra\": stimola le altre ghiandole; GH regola la crescita; ADH riduce l'urina (come visto per i reni); ossitocina: parto, allattamento</td></tr>
<tr><td><b>Tiroide</b></td><td>Tiroxina (T4) e triiodotironina (T3); calcitonina</td><td>Metabolismo basale; richiede iodio; la carenza dà il <b>gozzo</b></td></tr>
<tr><td><b>Paratiroidi</b></td><td>Paratormone (PTH)</td><td>Aumenta il calcio nel sangue</td></tr>
<tr><td><b>Surrene</b></td><td>Midollare: adrenalina, noradrenalina. Corticale: cortisolo, aldosterone</td><td>Stress acuto e cronico; cortisolo: glicemia e risposta antinfiammatoria; aldosterone: ritenzione di Na⁺ e acqua</td></tr>
<tr><td><b>Pancreas</b> (isole di Langerhans)</td><td>Insulina (cellule β), glucagone (cellule α)</td><td>Regolano la glicemia</td></tr>
<tr><td><b>Gonadi</b></td><td>Testosterone; estrogeni e progesterone</td><td>Caratteri sessuali, fertilità, ciclo mestruale</td></tr>
<tr><td><b>Epifisi (pineale)</b></td><td>Melatonina</td><td>Ritmo sonno-veglia, rilasciata al buio</td></tr>
</table>`
    },
    {
      type: "text",
      title: "La regolazione: retroazione e glicemia",
      html: `<p>Gli ormoni sono regolati quasi sempre da <b>retroazione negativa</b> (come il termostato visto in terza). L'esempio della tiroide: l'ipotalamo secerne TRH → l'ipofisi secerne TSH → la tiroide secerne T3/T4 → quando il livello di T3/T4 sale, frena ipotalamo e ipofisi e la produzione cala. Questa catena di comando si chiama <b>asse</b> (ipotalamo-ipofisi-tiroide).</p>
<p><b>La glicemia.</b> Il glucosio nel sangue a digiuno è circa 70-100 mg/dL (0,7-1,0 g/L). Dopo un pasto sale: le cellule β del pancreas rilasciano <b>insulina</b>, che fa entrare il glucosio nelle cellule (muscolo, tessuto adiposo) e lo fa immagazzinare come glicogeno nel fegato: la glicemia scende. Se è bassa (digiuno, sforzo), le cellule α rilasciano <b>glucagone</b>, che fa liberare il glucosio dal glicogeno del fegato: la glicemia sale. Due ormoni antagonisti, un sistema stabile.</p>
<ul>
<li><b>Diabete di tipo 1</b>: malattia autoimmune che distrugge le cellule β: manca l'insulina; richiede iniezioni. Esordio spesso giovanile.</li>
<li><b>Diabete di tipo 2</b>: le cellule diventano meno sensibili all'insulina (<b>insulino-resistenza</b>); legato a sovrappeso e sedentarietà, può spesso essere prevenuto o migliorato con alimentazione e movimento.</li>
</ul>
<p>L'insulina fu isolata a Toronto da <b>Frederick Banting e Charles Best</b> (1921-22), con il contributo di Macleod e Collip: il primo paziente, un ragazzo di 14 anni, Leonard Thompson, la ricevette nel gennaio 1922. Banting e Macleod ebbero il Nobel nel 1923 (e condivisero il premio rispettivamente con Best e con Collip).</p>
<p><b>Lo stress.</b> Davanti a una minaccia, il cervello attiva due vie. Quella nervosa, rapidissima, fa rilasciare <b>adrenalina</b> dal surrene (cuore accelerato, pupille dilatate, glucosio al sangue). Quella ormonale, più lenta (asse ipotalamo-ipofisi-surrene: CRH → ACTH → <b>cortisolo</b>) mobilita energie per minuti-ore. È utile se breve, dannosa se cronica (aumenta pressione, glicemia, indebolisce il sistema immunitario).</p>`
    },
    {
      type: "example",
      title: "Una merenda e la glicemia",
      html: `<p>Mangi un cornetto alla crema alle 10. Che cosa fanno i due sistemi?</p>
<ol>
<li>L'amido e gli zuccheri vengono digeriti e il glucosio passa nel sangue: la glicemia passa da circa 90 a 140 mg/dL.</li>
<li>Le cellule \u03b2 del pancreas rilevano il glucosio (sensore) e secernono <b>insulina</b> (ormone di segnalazione).</li>
<li>L'insulina si lega ai recettori su muscoli, tessuto adiposo e fegato: i trasportatori del glucosio arrivano in membrana e il glucosio entra nelle cellule; il fegato lo trasforma in glicogeno.</li>
<li>La glicemia scende verso 90 mg/dL: la secrezione di insulina cala (retroazione negativa).</li>
<li>Qualche ora dopo, se non mangi, la glicemia si abbassa ancora: le cellule \u03b1 rilasciano <b>glucagone</b>, il fegato libera glucosio dal glicogeno e il livello resta stabile.</li>
</ol>
<p>Il sistema nervoso entra in gioco con l'<b>ipotalamo</b>, che regola il senso di fame e sazietà, e con il parasimpatico, che stimola la digestione e il rilascio di insulina.</p>`
    },
    {
      type: "widget",
      title: "Abbina ormone e ghiandola",
      widget: "match",
      options: {
        pairs: [
          ["Insulina", "pancreas (cellule β)"],
          ["Tiroxina", "tiroide"],
          ["Adrenalina", "surrene (midollare)"],
          ["Melatonina", "epifisi"],
          ["ADH", "ipofisi posteriore (ipotalamo)"],
          ["Testosterone", "testicoli"]
        ]
      },
      caption: "Ogni ormone ha una ghiandola di origine e recettori specifici."
    },
    {
      type: "quiz",
      title: "Mini-quiz: sinapsi e ormoni",
      questions: [
        { type: "mc", q: "Quale ione entra nel bottone sinaptico e provoca il rilascio del neurotrasmettitore?", options: ["Ca²⁺", "K⁺", "Cl⁻", "Mg²⁺"], answer: 0, explain: "L'ingresso di Ca²⁺ fa fondere le vescicole con la membrana presinaptica." },
        { type: "mc", q: "Quale ormone abbassa la glicemia?", options: ["Insulina", "Glucagone", "Adrenalina", "Cortisolo"], answer: 0, explain: "L'insulina fa entrare il glucosio nelle cellule e lo fa immagazzinare." },
        { type: "tf", q: "Gli ormoni steroidei si legano a recettori sulla superficie cellulare.", answer: false, explain: "Essendo liposolubili attraversano la membrana e si legano a recettori intracellulari che regolano i geni." }
      ]
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li><b>Riposo</b> ≈ −70 mV (pompa Na⁺/K⁺ + permeabilità al K⁺). <b>PA</b>: soglia ≈ −55 mV, Na⁺ entra, K⁺ esce; tutto o niente; intensità = frequenza.</li>
<li><b>Mielina</b>: conduzione saltatoria, fino a 100 m/s.</li>
<li><b>Sinapsi chimica</b>: Ca²⁺ → neurotrasmettitore → recettore → PPSE o PPSI; il neurone somma i segnali.</li>
<li>SNC = encefalo + midollo; SNP = somatico + autonomo (simpatico/parasimpatico).</li>
<li><b>Ormoni</b>: messaggeri nel sangue, bersagli con recettori specifici; controllo a <b>retroazione negativa</b>; l'ipotalamo e l'ipofisi comandano le altre ghiandole.</li>
<li><b>Glicemia</b>: insulina (↓) e glucagone (↑).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire nervoso ed endocrino",
      intro: "Tre analogie per tenere insieme i due sistemi.",
      tabs: [
        { label: "🧵 La miccia", html: "<p>Il potenziale d'azione è come una miccia accesa: una volta innescata (soglia), brucia fino in fondo con la stessa intensità e non si può \"accendere un po'\". Dopo aver bruciato un tratto, quel tratto non può bruciare di nuovo (periodo refrattario): per questo la fiamma va solo in avanti. La mielina è come una miccia a tratti nudi: la fiamma salta da un punto scoperto all'altro e arriva più in fretta.</p>" },
        { label: "📡 Internet e radio", html: "<p>Il <b>sistema nervoso</b> è come una rete telefonica: messaggio rapido (millisecondi), a un destinatario preciso, che finisce subito. Il <b>sistema endocrino</b> è come una trasmissione radio: il messaggio parte per tutti (il sangue), ma lo riceve solo chi ha il ricevitore giusto, e l'effetto dura minuti, ore o anni (crescita, pubertà). I due sistemi si incontrano nell'ipotalamo, che è sia un nucleo nervoso sia una \"ghiandola\".</p>" },
        { label: "🔋 La batteria e il condensatore", html: "<p>La membrana del neurone si comporta come una pila a concentrazione: il gradiente di K⁺ fornisce un potenziale di circa −90 mV (equazione di Nernst, come nella pila a concentrazione), quello del Na⁺ +66 mV. La pompa Na⁺/K⁺ è il caricabatterie (consuma ATP). Aprendo i canali del Na⁺ si \"chiude l'interruttore\" della pila del sodio e il potenziale sale verso +66 mV; riaprendo i canali del K⁺ si torna indietro. Ecco perché la chimica dell'elettrochimica spiega il pensiero.</p>" },
        { label: "🌡️ Il termostato", html: "<p>La retroazione negativa ormonale è un termostato: l'ipotalamo e l'ipofisi misurano quanto ormone c'è nel sangue e comandano alla ghiandola di produrne di più o di meno. Se il termostato si rompe (tumori dell'ipofisi, malattie autoimmuni) si hanno iper- o ipofunzione: per esempio, nell'<b>ipertiroidismo</b> la tiroide produce troppo T3/T4, con tachicardia e dimagrimento; nell'<b>ipotiroidismo</b> troppo poco, con stanchezza e sensibilità al freddo.</p>" }
      ]
    },
    {
      type: "curiosity",
      title: "Phineas Gage: il cervello che cambiò una personalità",
      html: `<p>Nel settembre 1848, nel Vermont, un'esplosione sparò una sbarra di ferro lunga oltre un metro attraverso il cranio di <b>Phineas Gage</b>, caposquadra di una ditta ferroviaria. Sopravvisse, con la memoria, il linguaggio e il movimento intatti, ma, secondo i resoconti del medico John Harlow, ebbe cambiamenti di carattere (più impulsivo, meno capace di pianificare), per il danno ai lobi frontali. Il caso è considerato una pietra miliare della neuroscienza, perché mostrò che funzioni mentali come la personalità hanno una base fisica in aree specifiche. Gli storici oggi avvertono che i dettagli della sua vita successiva sono meno certi di quanto raccontato.</p>`
    },
    {
      type: "curiosity",
      title: "Perché il sonno dipende dalla luce: la melatonina",
      html: `<p>Il ritmo sonno-veglia è regolato dall'<b>orologio biologico</b> nel <b>nucleo soprachiasmatico</b> dell'ipotalamo, sincronizzato dalla luce che entra dagli occhi. Al buio l'epifisi libera <b>melatonina</b>, che favorisce il sonno; la luce intensa, e in particolare quella azzurra degli schermi la sera, ne ritarda il rilascio. Per questo, dopo ore al telefono a letto, si fa fatica ad addormentarsi. Nell'adolescenza, poi, il ritmo biologico si sposta naturalmente verso orari più tardi: non è pigrizia, ma fisiologia, ed è uno dei motivi per cui molti studi propongono di posticipare l'inizio delle lezioni. Il sonno è necessario anche per il <b>consolidamento della memoria</b>: durante il sonno profondo l'ippocampo \"riproduce\" quanto appreso alla corteccia.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: i due sistemi di comunicazione",
      nodes: [
        { id: "neu", label: "Neurone", x: 15, y: 12, color: "#7c3aed", html: "Cellula che riceve, integra e trasmette segnali.", why: "Ramón y Cajal (1888-1906) dimostrò con le immagini che il tessuto nervoso è fatto di cellule distinte; Golgi aveva fornito il metodo di colorazione, ma difendeva l'idea di una rete continua. Nobel condiviso nel 1906." },
        { id: "pa", label: "Potenziale d'azione", x: 50, y: 12, color: "#16a34a", html: "Impulso tutto-o-niente dovuto a Na⁺ che entra e K⁺ che esce.", why: "Galvani (1780s) vide l'elettricità nei nervi; Bernstein (1902) ipotizzò la membrana come batteria al potassio; Hodgkin e Huxley (1952) misurarono le correnti ioniche e ne scrissero il modello matematico." },
        { id: "sin", label: "Sinapsi", x: 85, y: 12, color: "#f59e0b", html: "Il segnale elettrico diventa chimico e poi di nuovo elettrico.", why: "Sherrington (1897) coniò il termine \"sinapsi\"; Loewi (1921) dimostrò la trasmissione chimica con i cuori di rana; Katz, Eccles e altri chiarirono il ruolo del Ca²⁺ e delle vescicole." },
        { id: "snc", label: "Sistema nervoso", x: 30, y: 52, color: "#2563eb", html: "SNC (encefalo e midollo) + SNP (somatico e autonomo).", why: "Broca (1861) con il paziente \"Tan\" e Wernicke (1874) mostrarono che il linguaggio ha sedi precise nella corteccia; Phineas Gage (1848) fece capire il ruolo dei lobi frontali." },
        { id: "end", label: "Sistema endocrino", x: 70, y: 52, color: "#ef4444", html: "Ghiandole e ormoni: messaggi chimici nel sangue.", why: "Berthold (1849) trapiantò i testicoli dei galli dimostrando un fattore chimico; Bayliss e Starling (1902) scoprirono la secretina; Banting e Best (1921-22) l'insulina." },
        { id: "ipo", label: "Ipotalamo e ipofisi", x: 50, y: 88, color: "#0ea5e9", html: "Il punto in cui il sistema nervoso comanda quello endocrino.", why: "Geoffrey Harris (anni '40-'50) dimostrò che l'ipofisi è sotto controllo nervoso attraverso un sistema di vasi sanguigni; Guillemin e Schally (Nobel 1977) isolarono i primi ormoni ipotalamici." }
      ],
      edges: [["neu", "pa", "genera il"], ["pa", "sin", "arriva alla"], ["sin", "snc", "costruisce il"], ["snc", "ipo", "controlla l'"], ["ipo", "end", "comanda il"], ["end", "snc", "retroagisce sul"]]
    }
  ],
  glossary: [
    { t: "Neurone", d: "Cellula nervosa specializzata nel ricevere, integrare e trasmettere segnali." },
    { t: "Assone", d: "Prolungamento del neurone che conduce il potenziale d'azione verso altre cellule." },
    { t: "Guaina mielinica", d: "Rivestimento isolante dell'assone che accelera la conduzione dell'impulso." },
    { t: "Potenziale di riposo", d: "Differenza di potenziale (circa −70 mV) fra interno ed esterno del neurone a riposo." },
    { t: "Potenziale d'azione", d: "Variazione rapida e transitoria del potenziale di membrana che si propaga lungo l'assone, secondo la legge del tutto o niente." },
    { t: "Sinapsi", d: "Punto di contatto funzionale tra un neurone e un'altra cellula." },
    { t: "Neurotrasmettitore", d: "Molecola rilasciata dal neurone presinaptico che trasmette il segnale alla cellula successiva." },
    { t: "Sistema nervoso autonomo", d: "Parte del sistema nervoso periferico che controlla involontariamente gli organi interni (simpatico e parasimpatico)." },
    { t: "Arco riflesso", d: "Via nervosa semplice che collega uno stimolo a una risposta automatica, senza passare dal cervello." },
    { t: "Ormone", d: "Messaggero chimico secreto da una ghiandola endocrina e trasportato dal sangue alle cellule bersaglio." },
    { t: "Retroazione negativa", d: "Meccanismo in cui l'effetto di un processo ne riduce l'attività, mantenendo il sistema stabile." },
    { t: "Ipotalamo", d: "Regione dell'encefalo che regola funzioni vitali e comanda l'ipofisi." },
    { t: "Insulina", d: "Ormone del pancreas che riduce la glicemia facendo entrare il glucosio nelle cellule." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale struttura del neurone riceve i segnali da altri neuroni?", options: ["I dendriti", "L'assone", "La guaina mielinica", "I bottoni sinaptici"], answer: 0, explain: "I dendriti sono le ramificazioni ricettive; l'assone conduce il segnale in uscita." },
      { type: "mc", q: "Che cosa fa la pompa sodio-potassio a ogni ciclo?", options: ["Espelle 3 Na⁺ e fa entrare 2 K⁺ con consumo di ATP", "Fa entrare 3 Na⁺ ed espelle 2 K⁺", "Espelle Ca²⁺", "Produce neurotrasmettitori"], answer: 0, explain: "Mantiene i gradienti ionici necessari al potenziale di riposo; è un trasporto attivo." },
      { type: "num", q: "Qual è, in mV, il valore approssimato del potenziale di riposo di un neurone?", answer: -70, tol: 5, unit: "mV", explain: "Circa −70 mV, più negativo all'interno." },
      { type: "tf", q: "Durante il periodo refrattario un secondo potenziale d'azione non può iniziare subito dopo il primo.", answer: true, explain: "I canali del Na⁺ sono inattivati: ciò impone la direzione unica di propagazione." },
      { type: "mc", q: "Nella sinapsi chimica, che cosa fa rilasciare il neurotrasmettitore?", options: ["L'ingresso di Ca²⁺ nel terminale", "L'uscita di K⁺", "Il calo del pH", "La mielina"], answer: 0, explain: "Il Ca²⁺ fa fondere le vescicole con la membrana presinaptica." },
      { type: "mc", q: "Quale parte dell'encefalo è la principale responsabile della coordinazione dei movimenti e dell'equilibrio?", options: ["Cervelletto", "Ippocampo", "Ipotalamo", "Corpo calloso"], answer: 0, explain: "Il cervelletto affina e coordina i movimenti." },
      { type: "mc", q: "Il sistema nervoso simpatico prepara l'organismo a...", options: ["lotta o fuga", "riposo e digestione", "sonno profondo", "crescita"], answer: 0, explain: "Accelera cuore e respiro e mobilita energia; il parasimpatico fa l'opposto." },
      { type: "mc", q: "Quale ghiandola è detta 'direttore d'orchestra' del sistema endocrino?", options: ["Ipofisi", "Tiroide", "Timo", "Pancreas"], answer: 0, explain: "L'ipofisi, comandata dall'ipotalamo, secerne ormoni che regolano molte altre ghiandole." },
      { type: "tf", q: "Nel diabete di tipo 1 le cellule β del pancreas sono distrutte da un attacco autoimmune.", answer: true, explain: "Manca l'insulina, che va somministrata dall'esterno." },
      { type: "order", q: "Metti in ordine gli eventi di una sinapsi chimica.", items: ["Il potenziale d'azione arriva al terminale presinaptico", "Entra Ca²⁺", "Le vescicole rilasciano il neurotrasmettitore", "Il neurotrasmettitore si lega ai recettori postsinaptici", "Il segnale termina per degradazione o riassorbimento"], explain: "Il segnale elettrico diventa chimico e poi di nuovo elettrico." }
    ]
  }
});
