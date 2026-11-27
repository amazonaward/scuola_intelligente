TOPIC('it', {
  id: "l3-fis-secondo-principio",
  title: "Il secondo principio e l'entropia",
  intro: "Il primo principio dice che l'energia si conserva, ma non spiega perché una tazza di caffè si raffredda e non si scalda da sola, perché il ghiaccio fonde in una stanza calda e non il contrario, perché le uova rotte non si ricompongono. Esiste una «freccia del tempo» che il primo principio ignora. Il <b>secondo principio della termodinamica</b> la spiega con una grandezza nuova, l'<b>entropia</b>, e pone un limite invalicabile al <b>rendimento</b> di ogni macchina termica. Nato per migliorare le macchine a vapore, è una delle leggi più profonde e generali di tutta la fisica.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Il problema: processi che non vanno al contrario",
      html: `<p>Nella vita quotidiana molti processi avvengono in un solo verso, anche se il loro inverso non violerebbe la conservazione dell'energia:</p>
<ul>
<li>il calore passa da un corpo caldo a uno freddo, mai spontaneamente al contrario;</li>
<li>un gas compresso in un angolo del recipiente si espande in tutto il volume, ma non si «raccoglie» da solo;</li>
<li>l'attrito trasforma energia cinetica in calore, ma il calore dei freni non rimette in moto l'auto;</li>
<li>una goccia d'inchiostro si diffonde nell'acqua, non si ricompatta.</li>
</ul>
<p>Tutti questi processi sono <b>irreversibili</b>. La conservazione dell'energia (primo principio) non li distingue dai loro inversi: ci vuole un secondo principio. Esistono diversi enunciati, tutti equivalenti:</p>
<ul>
<li><b>Enunciato di Clausius</b> (1850): è impossibile realizzare una trasformazione il cui <b>unico risultato</b> sia il passaggio di calore da un corpo più freddo a uno più caldo.</li>
<li><b>Enunciato di Kelvin-Planck</b> (1851): è impossibile realizzare una trasformazione ciclica il cui <b>unico risultato</b> sia l'assorbimento di calore da un'unica sorgente e la sua completa trasformazione in lavoro.</li>
</ul>
<p>Attenzione alle parole «unico risultato»: un frigorifero fa passare calore dal freddo al caldo, ma consumando energia elettrica (un lavoro). E la trasformazione isoterma di un gas trasforma tutto il calore in lavoro, ma non è un ciclo (il gas è alla fine in uno stato diverso).</p>`
    },
    {
      type: "text",
      title: "Le macchine termiche e il rendimento",
      html: `<p>Una <b>macchina termica</b> è un dispositivo che, funzionando ciclicamente, trasforma calore in lavoro. Deve scambiare calore con <b>due</b> sorgenti a temperature diverse:</p>
<ul>
<li>assorbe un calore <b>Q<sub>h</sub></b> (hot) dalla sorgente calda a temperatura T<sub>h</sub> (la caldaia, la combustione);</li>
<li>produce un lavoro <b>W</b>;</li>
<li>cede un calore <b>Q<sub>c</sub></b> (cold) alla sorgente fredda a T<sub>c</sub> (l'ambiente, il condensatore, l'aria dello scarico).</li>
</ul>
<p>Poiché in un ciclo ΔU = 0, per il primo principio <b>W = Q<sub>h</sub> − Q<sub>c</sub></b>. Il <b>rendimento</b> è il rapporto tra ciò che si ottiene (lavoro) e ciò che si spende (calore assorbito):</p>
<p style="text-align:center"><b>η = W / Q<sub>h</sub> = 1 − Q<sub>c</sub> / Q<sub>h</sub></b></p>
<p>Il secondo principio nella versione di Kelvin-Planck equivale a dire che <b>η &lt; 1 sempre</b>: non esiste una macchina con rendimento 100%, perché serve sempre cedere calore alla sorgente fredda. Un motore a benzina ha η ≈ 25-35%, un diesel 35-45%, una grande centrale a ciclo combinato fino al 60% circa: il resto dell'energia del combustibile esce come calore nello scarico e nel radiatore.</p>
<p>Le macchine termiche reali sono state il motore dell'Ottocento: le macchine a vapore di Thomas Newcomen (1712) e James Watt (1769) pomparono l'acqua dalle miniere, mossero treni e navi, e fecero la rivoluzione industriale. Nessuno ne sapeva il limite teorico, finché un giovane ingegnere francese lo calcolò.</p>`
    },
    {
      type: "svg",
      title: "La macchina termica",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="s2A" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="s2B" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="s2C" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="150" y="20" width="300" height="50" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="3"/>
<text x="300" y="52" font-size="16" fill="#7f1d1d" text-anchor="middle" font-weight="bold">Sorgente calda  Th</text>
<line x1="300" y1="70" x2="300" y2="115" stroke="#dc2626" stroke-width="5" marker-end="url(#s2A)"/>
<text x="325" y="100" font-size="16" fill="#991b1b" font-weight="bold">Qh</text>
<circle cx="300" cy="150" r="38" fill="#fef9c3" stroke="#a16207" stroke-width="4"/>
<text x="300" y="156" font-size="16" fill="#713f12" text-anchor="middle" font-weight="bold">Macchina</text>
<line x1="338" y1="150" x2="440" y2="150" stroke="#16a34a" stroke-width="5" marker-end="url(#s2C)"/>
<text x="445" y="140" font-size="16" fill="#166534" font-weight="bold">W</text>
<line x1="300" y1="188" x2="300" y2="235" stroke="#2563eb" stroke-width="5" marker-end="url(#s2B)"/>
<text x="325" y="215" font-size="16" fill="#1e3a8a" font-weight="bold">Qc</text>
<rect x="150" y="240" width="300" height="50" rx="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
<text x="300" y="272" font-size="16" fill="#1e3a8a" text-anchor="middle" font-weight="bold">Sorgente fredda  Tc</text>
<text x="500" y="200" font-size="15" fill="#0f172a">W = Qh − Qc</text>
<text x="500" y="222" font-size="15" fill="#0f172a">η = W/Qh</text>
</g>
</svg>`,
      caption: "Ogni macchina termica assorbe calore Qh dalla sorgente calda, produce lavoro W e deve cedere Qc alla sorgente fredda."
    },
    {
      type: "example",
      title: "Rendimento di un motore",
      html: `<p>Un motore assorbe Q<sub>h</sub> = 1000 J dalla combustione e cede Q<sub>c</sub> = 700 J all'ambiente. Il lavoro è W = 1000 − 700 = <b>300 J</b> e il rendimento è η = 300/1000 = <b>0,30 = 30%</b>.</p>
<p>Un'automobile consuma benzina con potere calorifico di circa 44 MJ/kg. Bruciando 1 kg si liberano 44 MJ di calore, ma soltanto circa 13 MJ (η = 30%) diventano lavoro meccanico al motore, e di questi una parte si perde in attriti. Il resto (≈ 31 MJ) esce dallo scarico e dal radiatore: ecco perché il motore si scalda e perché una buona parte dell'energia della benzina non muove l'auto.</p>`
    },
    {
      type: "text",
      title: "Il ciclo di Carnot",
      html: `<p>Nel 1824 il giovane ingegnere francese <b>Sadi Carnot</b> (1796-1832) pubblicò le <i>Réflexions sur la puissance motrice du feu</i>, un libretto che fondò la termodinamica prima ancora del primo principio. Si chiese: qual è il <b>massimo rendimento</b> possibile per una macchina che lavora tra due temperature? Immaginò un ciclo ideale, <b>reversibile</b>, formato da quattro trasformazioni di un gas perfetto:</p>
<ol>
<li><b>Espansione isoterma</b> a T<sub>h</sub>: il gas assorbe Q<sub>h</sub> dalla sorgente calda e compie lavoro;</li>
<li><b>Espansione adiabatica</b>: il gas continua a espandersi senza scambiare calore e si raffredda da T<sub>h</sub> a T<sub>c</sub>;</li>
<li><b>Compressione isoterma</b> a T<sub>c</sub>: il gas cede Q<sub>c</sub> alla sorgente fredda;</li>
<li><b>Compressione adiabatica</b>: il gas torna a T<sub>h</sub> e allo stato iniziale.</li>
</ol>
<p>Il <b>teorema di Carnot</b> afferma che:</p>
<ul>
<li>nessuna macchina che lavora tra due sorgenti T<sub>h</sub> e T<sub>c</sub> può avere un rendimento maggiore di quello di una macchina reversibile;</li>
<li>tutte le macchine reversibili che lavorano tra le stesse due temperature hanno lo <b>stesso rendimento</b>, che dipende solo da T<sub>h</sub> e T<sub>c</sub> (non dal fluido usato):</li>
</ul>
<p style="text-align:center"><b>η<sub>Carnot</sub> = 1 − T<sub>c</sub> / T<sub>h</sub></b> &nbsp; (temperature in kelvin!)</p>
<p>Il rendimento di Carnot è il <b>limite teorico invalicabile</b>: nessuna macchina reale lo raggiunge, e per ottenere η = 1 servirebbe T<sub>c</sub> = 0 K (irraggiungibile). Per avere un rendimento alto occorre una sorgente calda <b>molto calda</b> e/o una sorgente fredda <b>molto fredda</b>: per questo le turbine delle centrali funzionano con vapore a 500-600 °C.</p>
<p>Conseguenza utile: per le macchine reversibili Q<sub>c</sub>/Q<sub>h</sub> = T<sub>c</sub>/T<sub>h</sub>, e per quelle reali Q<sub>c</sub>/T<sub>c</sub> ≥ Q<sub>h</sub>/T<sub>h</sub>. Questa disuguaglianza è il seme dell'entropia.</p>`
    },
    {
      type: "svg",
      title: "Il ciclo di Carnot nel piano (V, p)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="60" y1="260" x2="560" y2="260" stroke="#334155" stroke-width="3"/>
<line x1="60" y1="260" x2="60" y2="20" stroke="#334155" stroke-width="3"/>
<text x="555" y="285" font-size="15" fill="#334155" text-anchor="end">V</text>
<text x="40" y="30" font-size="15" fill="#334155" text-anchor="end">p</text>
<path d="M130 60 Q 220 80 320 130" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M320 130 Q 400 170 440 230" stroke="#f59e0b" stroke-width="5" fill="none"/>
<path d="M440 230 Q 340 215 280 195" stroke="#2563eb" stroke-width="5" fill="none"/>
<path d="M280 195 Q 170 140 130 60" stroke="#f59e0b" stroke-width="5" fill="none"/>
<g font-size="16" font-weight="bold" fill="#0f172a"><text x="115" y="55">A</text><text x="328" y="125">B</text><text x="448" y="240">C</text><text x="262" y="205">D</text></g>
<text x="225" y="72" font-size="14" fill="#991b1b">1: isoterma Th (Qh assorbito)</text>
<text x="395" y="170" font-size="14" fill="#b45309">2: adiabatica</text>
<text x="330" y="245" font-size="14" fill="#1e3a8a">3: isoterma Tc (Qc ceduto)</text>
<text x="105" y="165" font-size="14" fill="#b45309">4: adiabatica</text>
<text x="290" y="170" font-size="15" fill="#14532d" font-weight="bold" text-anchor="middle">W = area</text>
</g>
</svg>`,
      caption: "Il ciclo di Carnot: due isoterme e due adiabatiche. L'area racchiusa è il lavoro netto prodotto."
    },
    {
      type: "example",
      title: "Quanto può rendere al massimo?",
      html: `<p><b>Motore termico.</b> Una macchina lavora tra T<sub>h</sub> = 500 K e T<sub>c</sub> = 300 K: η<sub>max</sub> = 1 − 300/500 = <b>0,40 = 40%</b>. Se T<sub>h</sub> sale a 600 K: η<sub>max</sub> = 1 − 300/600 = 50%. Per ottenere 100 J di lavoro con la macchina da 40% bisogna fornire almeno Q<sub>h</sub> = 100/0,40 = 250 J e cedere almeno 150 J.</p>
<p><b>Centrale a vapore.</b> Vapore a 540 °C (813 K) e condensatore a 30 °C (303 K): η<sub>Carnot</sub> = 1 − 303/813 ≈ <b>63%</b>. Le centrali reali arrivano a circa il 40-45% perché i cicli reali (Rankine) sono irreversibili e hanno perdite.</p>
<p><b>Gradiente termico oceanico.</b> Esiste una proposta di sfruttare la differenza tra acqua superficiale tropicale (25 °C = 298 K) e acqua profonda (5 °C = 278 K): η<sub>max</sub> = 1 − 278/298 ≈ <b>6,7%</b>. Un rendimento minuscolo già in teoria, a causa della piccola differenza di temperatura: per questo tali impianti sono difficilmente convenienti.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: macchine e Carnot",
      questions: [
        { type: "num", q: "Un motore assorbe 2000 J e cede 1400 J. Quanto vale il rendimento?", answer: 0.3, tol: 0.001, unit: "", explain: "W = 600 J; η = 600/2000 = 0,30." },
        { type: "num", q: "Rendimento massimo di una macchina che opera tra 600 K e 300 K?", answer: 0.5, tol: 0.001, unit: "", explain: "η = 1 − 300/600 = 0,5." },
        { type: "tf", q: "Una macchina termica può avere rendimento 100% se non ha attriti.", answer: false, explain: "Per il secondo principio una parte del calore va ceduta alla sorgente fredda; η = 1 richiederebbe T_c = 0 K." }
      ]
    },
    {
      type: "text",
      title: "Frigoriferi e pompe di calore",
      html: `<p>Una macchina termica che funziona al contrario, assorbendo lavoro per spostare calore dal freddo al caldo, è un <b>frigorifero</b> o una <b>pompa di calore</b> (come un condizionatore). Il ciclo è lo stesso percorso in senso antiorario: il sistema assorbe Q<sub>c</sub> dalla sorgente fredda (l'interno del frigo), riceve un lavoro W (il compressore elettrico), e cede Q<sub>h</sub> = Q<sub>c</sub> + W alla sorgente calda (la serpentina dietro il frigo).</p>
<p>Si misura l'efficienza con il <b>coefficiente di prestazione</b> (COP):</p>
<ul>
<li>frigorifero: <b>COP = Q<sub>c</sub> / W</b> (calore sottratto per ogni joule di lavoro); il massimo teorico è T<sub>c</sub>/(T<sub>h</sub> − T<sub>c</sub>);</li>
<li>pompa di calore: <b>COP = Q<sub>h</sub> / W</b> (calore fornito alla casa per ogni joule di lavoro).</li>
</ul>
<p><b>Esempio.</b> Un frigorifero sottrae 300 J dall'interno a 270 K e li rilascia in cucina a 300 K con COP ideale 270/30 = 9: ogni joule di lavoro sposta 9 J di calore. I frigoriferi reali hanno COP intorno a 2-4. Una pompa di calore riscaldando casa con COP = 4 fornisce 4 kWh di calore per 1 kWh di elettricità consumata: per questo è molto più efficiente di una stufa elettrica (che al massimo converte 1 kWh in 1 kWh di calore). Il secondo principio non è violato, perché il calore passa dal freddo al caldo <b>grazie al lavoro</b> speso: «unico risultato» non è.</p>`
    },
    {
      type: "text",
      title: "L'entropia",
      html: `<p>Nel 1865 <b>Rudolf Clausius</b> introdusse una funzione di stato nuova, che chiamò <b>entropia</b> (dal greco <i>tropé</i>, «trasformazione») con simbolo S. Per una trasformazione <b>reversibile</b> a temperatura costante T, in cui il sistema scambia calore Q:</p>
<p style="text-align:center"><b>ΔS = Q<sub>rev</sub> / T</b> &nbsp; (unità: J/K)</p>
<p>(In generale ΔS = ∫ dQ<sub>rev</sub>/T.) Essendo una funzione di stato, la variazione di entropia tra due stati è la stessa qualunque sia il percorso, reversibile o no. Il secondo principio si enuncia allora così:</p>
<p style="text-align:center"><b>in un sistema isolato l'entropia non può mai diminuire: ΔS ≥ 0</b><br>(= nei processi reversibili, &gt; nei processi irreversibili)</p>
<p>Il che si estende all'universo: <b>ΔS<sub>universo</sub> ≥ 0</b>. Un processo è possibile solo se non fa diminuire l'entropia totale. L'entropia di una parte del sistema può diminuire (il frigorifero raffredda i cibi, l'acqua congela), ma solo se l'entropia di un'altra parte cresce di più.</p>
<p><b>Esempio 1: il calore che passa da caldo a freddo.</b> Una quantità Q = 1000 J passa da un corpo a 400 K a uno a 300 K. Il corpo caldo perde S: ΔS<sub>1</sub> = −1000/400 = −2,50 J/K; quello freddo guadagna ΔS<sub>2</sub> = +1000/300 = +3,33 J/K. Totale: <b>ΔS = +0,83 J/K &gt; 0</b>: processo possibile. Il processo inverso farebbe ΔS = −0,83 J/K &lt; 0: impossibile spontaneamente.</p>
<p><b>Esempio 2: la fusione del ghiaccio.</b> Per fondere 1 kg di ghiaccio a 0 °C (273,15 K) servono Q = m·L<sub>f</sub> = 334 kJ: ΔS = 334 000/273,15 ≈ <b>+1223 J/K</b>. L'entropia aumenta perché l'acqua liquida (disordinata) ha più modi di essere realizzata del solido ordinato.</p>`
    },
    {
      type: "text",
      title: "Entropia e disordine: l'interpretazione di Boltzmann",
      html: `<p>Che cos'è davvero l'entropia? <b>Ludwig Boltzmann</b> (1844-1906) ne diede un'interpretazione statistica: l'entropia misura il numero di <b>microstati</b> W (le configurazioni microscopiche di posizioni e velocità delle molecole) compatibili con lo stesso stato macroscopico:</p>
<p style="text-align:center"><b>S = k<sub>B</sub> · ln W</b></p>
<p>La formula, con k<sub>B</sub> = 1,381·10⁻²³ J/K, è incisa sulla sua tomba al Cimitero centrale di Vienna. Gli stati macroscopici «ordinati» corrispondono a pochissimi microstati; quelli «disordinati» a un numero astronomico: per questo i sistemi evolvono quasi certamente verso i secondi.</p>
<p><b>Un esempio con le monete.</b> Lancia 100 monete. Lo stato «tutte testa» si realizza in un solo modo (W = 1), mentre lo stato «50 testa, 50 croce» in circa 10²⁹ modi. Quindi è praticamente certo che otterrai circa metà testa e metà croce, mentre «tutte testa» è praticamente impossibile. Allo stesso modo, un gas che si espande in un volume doppio ha 2<sup>N</sup> volte più microstati (N molecole): la probabilità che tutte le molecole si ritrovino spontaneamente in una metà del contenitore è 2<sup>-N</sup>, un numero così piccolo che per N = 10²³ equivale a «mai».</p>
<p>Il secondo principio non è quindi una legge assoluta come la conservazione dell'energia, ma una legge <b>statistica</b>, con una probabilità di violazione talmente bassa da essere trascurabile per sistemi macroscopici. È la base della <b>«freccia del tempo»</b>: guardando un film girato al contrario, riconosciamo che è invertito perché l'entropia diminuirebbe.</p>`
    },
    {
      type: "widget",
      title: "Possibile o impossibile?",
      widget: "classify",
      options: { groups: ["Possibile spontaneamente", "Impossibile spontaneamente"], items: [
        ["Una tazza di tè caldo si raffredda nella stanza", 0],
        ["Una tazza di tè tiepido si scalda da sola prendendo calore dalla stanza", 1],
        ["Una goccia di inchiostro si diffonde nell'acqua", 0],
        ["L'inchiostro disperso si ricompatta in una goccia", 1],
        ["Il calore dell'attrito si trasforma tutto in moto dell'auto", 1],
        ["Il ghiaccio fonde in una stanza calda", 0]
      ] },
      caption: "Il verso dei processi spontanei è quello in cui l'entropia totale aumenta."
    },
    {
      type: "quiz",
      title: "Controlla: entropia",
      questions: [
        { type: "tf", q: "In un sistema isolato l'entropia può diminuire.", answer: false, explain: "Secondo il secondo principio ΔS ≥ 0 per un sistema isolato." },
        { type: "num", q: "Un corpo assorbe 600 J di calore, in modo reversibile, a 300 K. Quanto vale ΔS?", answer: 2, tol: 0.001, unit: "J/K", explain: "ΔS = Q/T = 600/300 = 2 J/K." },
        { type: "mc", q: "Quale configurazione ha entropia maggiore?", options: ["Un cristallo di ghiaccio a 0 °C", "Acqua liquida a 0 °C", "Sono uguali", "Dipende dalla massa"], answer: 1, explain: "A parità di T l'acqua liquida è meno ordinata del ghiaccio: più microstati." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il secondo principio",
      intro: "Il secondo principio è difficile perché non è «una formula», ma un modo di guardare il mondo.",
      tabs: [
        {
          label: "🃏 Il mazzo di carte",
          html: "<p>Un mazzo nuovo è ordinato: esiste un solo modo di averlo così. Mescolalo: esistono circa 8·10⁶⁷ ordinamenti diversi (52!). Dopo la mescolata è praticamente certo che otterrai un ordine «casuale». Per tornare all'ordine iniziale serve organizzare le carte (lavoro). Così è per l'entropia: il disordine è semplicemente <b>molto più probabile</b>.</p>"
        },
        {
          label: "🏔️ La cascata di energia",
          html: "<p>L'energia si conserva, ma la sua <b>qualità</b> degrada. Il lavoro (energia ordinata) si trasforma in calore (energia disordinata) con facilità: l'attrito. Il contrario no, non completamente: trasformare calore in lavoro costa sempre una parte ceduta al freddo. Come un fiume che scende dalla montagna al mare: l'acqua non sparisce, ma il «dislivello» da cui si ricava lavoro si consuma e non risale.</p>"
        },
        {
          label: "🔗 Abbina concetto e formula",
          html: "<p>Collega ogni concetto alla sua espressione.</p>",
          widget: "match",
          options: { pairs: [
            ["Rendimento", "η = W/Qh"],
            ["Rendimento di Carnot", "η = 1 − Tc/Th"],
            ["Variazione di entropia", "ΔS = Q_rev/T"],
            ["Entropia di Boltzmann", "S = k_B ln W"],
            ["Coefficiente del frigorifero", "COP = Qc/W"]
          ] }
        },
        {
          label: "📈 Disegno: calore e disordine",
          html: "<p>Il calore Q che passa da un corpo caldo (T alta) a uno freddo (T bassa) fa variare le entropie di –Q/T<sub>h</sub> e +Q/T<sub>c</sub>: poiché T<sub>c</sub> &lt; T<sub>h</sub>, il guadagno supera la perdita, e l'entropia totale aumenta.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#fff7ed'/><defs><marker id='s2D' markerWidth='10' markerHeight='10' refX='8' refY='5' orient='auto'><path d='M0 0 L10 5 L0 10 Z' fill='#0f172a'/></marker></defs><g font-family='sans-serif'><rect x='40' y='80' width='160' height='100' rx='10' fill='#fecaca' stroke='#dc2626' stroke-width='3'/><text x='120' y='122' font-size='16' fill='#7f1d1d' text-anchor='middle' font-weight='bold'>Caldo 400 K</text><text x='120' y='148' font-size='15' fill='#7f1d1d' text-anchor='middle'>ΔS = −2,5 J/K</text><rect x='400' y='80' width='160' height='100' rx='10' fill='#bfdbfe' stroke='#2563eb' stroke-width='3'/><text x='480' y='122' font-size='16' fill='#1e3a8a' text-anchor='middle' font-weight='bold'>Freddo 300 K</text><text x='480' y='148' font-size='15' fill='#1e3a8a' text-anchor='middle'>ΔS = +3,33 J/K</text><line x1='210' y1='130' x2='390' y2='130' stroke='#0f172a' stroke-width='5' marker-end='url(#s2D)'/><text x='300' y='115' font-size='16' fill='#0f172a' text-anchor='middle'>Q = 1000 J</text><text x='300' y='225' font-size='17' fill='#14532d' text-anchor='middle' font-weight='bold'>ΔS totale = +0,83 J/K</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Il demone di Maxwell",
      html: `<p>Nel 1867 James Clerk Maxwell immaginò un piccolo «demone» che apre e chiude uno sportellino tra due camere di gas, lasciando passare solo le molecole veloci in un verso e quelle lente nell'altro: così una camera si scalderebbe e l'altra si raffredderebbe, senza lavoro, violando il secondo principio. Per un secolo fisici e ingegneri discussero la soluzione. La risposta è arrivata dalla teoria dell'informazione: il demone deve <b>misurare e ricordare</b> la velocità di ciascuna molecola, e prima o poi deve cancellare la memoria. <b>Rolf Landauer</b> (1961) e <b>Charles Bennett</b> (1982) mostrarono che cancellare un bit di informazione produce un'entropia pari ad almeno k<sub>B</sub> ln 2, che compensa esattamente la diminuzione ottenuta: la termodinamica non è violata. Esperimenti recenti con particelle microscopiche hanno realizzato versioni di questo «demone» in laboratorio.</p>`
    },
    {
      type: "curiosity",
      title: "Il destino dell'universo",
      html: `<p>Se l'entropia dell'universo cresce sempre, dove porta questo processo? Nell'Ottocento Kelvin e Clausius ipotizzarono la <b>«morte termica»</b> dell'universo: un futuro in cui tutta l'energia è distribuita uniformemente, tutte le temperature sono uguali e nessun processo è più possibile, perché non ci sono più differenze da cui ricavare lavoro. La cosmologia moderna ha una visione più complessa (l'espansione dell'universo e la gravità cambiano il quadro), ma il principio resta: la vita, i frigoriferi e le stelle mantengono la loro «bassa entropia» locale soltanto aumentando l'entropia altrove. Per la Terra, il Sole fornisce luce a bassa entropia, e la Terra irradia verso lo spazio calore ad alta entropia: è questo flusso che permette alla vita di esistere.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa del secondo principio",
      nodes: [
        { id: "irrev", label: "Irreversibilità", x: 15, y: 10, color: "#ef4444", html: "I processi reali hanno un verso preferito: il calore va dal caldo al freddo, i gas si espandono.", why: "Il primo principio non vieta i processi inversi. L'osservazione quotidiana mostra che non si realizzano: serve una nuova legge." },
        { id: "enunciati", label: "Enunciati di Clausius e Kelvin-Planck", x: 55, y: 10, color: "#8b5cf6", html: "Il calore non passa spontaneamente dal freddo al caldo; non si può trasformare tutto il calore di una sola sorgente in lavoro.", why: "Formulati da Clausius (1850) e Kelvin (1851) a partire dall'analisi di Carnot sulle macchine a vapore. Si dimostrano equivalenti: violando uno si viola l'altro." },
        { id: "carnot", label: "Ciclo di Carnot", x: 85, y: 45, color: "#2563eb", html: "η_max = 1 − Tc/Th: limite di rendimento valido per ogni macchina.", why: "Sadi Carnot (1824) ragionò sull'impossibilità del moto perpetuo e sul calore come «caduta» tra due temperature, come l'acqua su una ruota: il rendimento dipende dal dislivello di T." },
        { id: "rendimento", label: "Macchine, frigoriferi, pompe di calore", x: 15, y: 50, color: "#f59e0b", html: "Dispositivi ciclici che scambiano calore tra due sorgenti e lavoro con l'ambiente.", why: "Nascono dall'esigenza industriale dell'Ottocento (Watt, Stephenson); i frigoriferi sono le stesse macchine, percorse al contrario." },
        { id: "entropia", label: "Entropia ΔS = Q/T", x: 50, y: 50, color: "#16a34a", html: "Funzione di stato, ΔS ≥ 0 in un sistema isolato.", why: "Clausius (1865) scoprì che per cicli reversibili ∮dQ/T = 0 e per quelli reali < 0: questo implica l'esistenza di una funzione di stato S. È la forma matematica del secondo principio." },
        { id: "boltz", label: "Interpretazione statistica", x: 50, y: 88, color: "#64748b", html: "S = k_B ln W: l'entropia conta i microstati compatibili con lo stato osservato.", why: "Boltzmann (1877) collegò la termodinamica alla meccanica statistica: il secondo principio vale con probabilità enorme, non con certezza assoluta. Spiega la freccia del tempo." }
      ],
      edges: [["irrev", "enunciati", "sintetizzata da"], ["enunciati", "carnot", "porta a"], ["carnot", "rendimento", "limita"], ["carnot", "entropia", "genera"], ["entropia", "boltz", "spiegata da"], ["irrev", "entropia", "misurata da"]]
    }
  ],
  glossary: [
    { t: "Macchina termica", d: "Dispositivo ciclico che trasforma calore in lavoro scambiando calore con due sorgenti." },
    { t: "Rendimento", d: "η = W/Q_h = 1 − Q_c/Q_h: rapporto tra lavoro prodotto e calore assorbito." },
    { t: "Ciclo di Carnot", d: "Ciclo reversibile ideale con due isoterme e due adiabatiche." },
    { t: "Teorema di Carnot", d: "Nessuna macchina tra due sorgenti supera il rendimento η = 1 − T_c/T_h." },
    { t: "Processo reversibile", d: "Processo che si può invertire senza lasciare traccia nell'ambiente; è un'idealizzazione." },
    { t: "Entropia", d: "Funzione di stato S, con ΔS = Q_rev/T; non diminuisce mai in un sistema isolato." },
    { t: "Microstato", d: "Configurazione microscopica specifica (posizioni e velocità delle molecole)." },
    { t: "COP", d: "Coefficiente di prestazione di frigorifero o pompa di calore." },
    { t: "Freccia del tempo", d: "Direzione privilegiata dei processi spontanei, legata all'aumento dell'entropia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale delle seguenti affermazioni è l'enunciato di Clausius?", options: ["Il calore passa spontaneamente dal freddo al caldo", "Il calore non passa spontaneamente da un corpo freddo a uno caldo", "L'energia si conserva", "La temperatura non può essere negativa"], answer: 1, explain: "Per far passare calore dal freddo al caldo serve spendere lavoro, come nel frigorifero." },
      { type: "num", q: "Un motore assorbe 5000 J e produce 1500 J di lavoro. Calcola il rendimento.", answer: 0.3, tol: 0.001, unit: "", explain: "η = W/Q_h = 1500/5000 = 0,30." },
      { type: "num", q: "Calcola il rendimento di Carnot tra 800 K e 400 K.", answer: 0.5, tol: 0.001, unit: "", explain: "η = 1 − 400/800 = 0,5." },
      { type: "tf", q: "È possibile costruire una macchina termica con rendimento superiore a quello di Carnot tra le stesse temperature.", answer: false, explain: "Il teorema di Carnot vieta rendimenti maggiori di quello reversibile." },
      { type: "num", q: "Un motore con η = 25% assorbe 800 J. Quanto calore cede alla sorgente fredda?", answer: 600, tol: 0, unit: "J", explain: "W = 0,25 × 800 = 200 J; Q_c = 800 − 200 = 600 J." },
      { type: "num", q: "Un corpo a 250 K assorbe reversibilmente 500 J. Qual è ΔS?", answer: 2, tol: 0.001, unit: "J/K", explain: "ΔS = Q/T = 500/250 = 2 J/K." },
      { type: "tf", q: "L'entropia di un sistema non isolato può diminuire.", answer: true, explain: "Può diminuire se cede calore all'ambiente, purché l'entropia totale (sistema + ambiente) non diminuisca." },
      { type: "mc", q: "Perché è estremamente improbabile che un gas si raccolga spontaneamente in un angolo del recipiente?", options: ["Lo vieta il primo principio", "Corrisponde a pochissimi microstati rispetto a quelli del gas distribuito", "Perché le molecole si respingono", "Perché la temperatura scenderebbe"], answer: 1, explain: "Il numero di microstati di una distribuzione uniforme è immensamente maggiore: è più probabile in modo schiacciante." },
      { type: "mc", q: "Un frigorifero con COP = 3 asporta 600 J di calore dall'interno. Quanto lavoro richiede?", options: ["100 J", "200 J", "600 J", "1800 J"], answer: 1, explain: "COP = Q_c/W ⟹ W = 600/3 = 200 J." },
      { type: "order", q: "Ordina le fasi del ciclo di Carnot a partire dall'espansione isoterma.", items: ["Espansione isoterma a Th", "Espansione adiabatica", "Compressione isoterma a Tc", "Compressione adiabatica"], explain: "Il ciclo alterna isoterme e adiabatiche: assorbe Q_h in (1), cede Q_c in (3)." }
    ]
  }
});
