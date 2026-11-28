TOPIC('it', {
  id: "l3-fis-fluidodinamica",
  title: "La dinamica dei fluidi",
  intro: "Perché il getto d'acqua di un tubo da giardino diventa più veloce se schiacci l'uscita con il dito? Come fa un aereo di centinaia di tonnellate a restare in aria? Perché il miele cola lentamente e l'acqua no? Nella <b>statica dei fluidi</b> (primo anno) i liquidi erano fermi: ora li facciamo <b>scorrere</b>. Incontreremo la <b>portata</b>, l'<b>equazione di continuità</b> e il celebre <b>teorema di Bernoulli</b>, che lega pressione, velocità e quota, e infine la <b>viscosità</b>, la «frizione interna» dei fluidi reali.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Il modello del fluido ideale",
      html: `<p>Studiare un fluido in movimento è difficile: miliardi di molecole che si urtano. Per descriverlo si introduce un <b>modello</b> semplificato, il <b>fluido ideale</b>, che ha queste proprietà:</p>
<ul>
<li><b>incomprimibile</b>: la densità ρ è costante (valido per i liquidi, e per i gas a velocità molto minori di quella del suono);</li>
<li><b>non viscoso</b>: nessun attrito interno tra gli strati del fluido;</li>
<li><b>moto stazionario</b>: la velocità in ogni punto non cambia nel tempo;</li>
<li><b>moto laminare</b> (non turbolento): gli strati scorrono ordinatamente lungo le <b>linee di flusso</b>, che non si incrociano mai.</li>
</ul>
<p>Le <b>linee di flusso</b> sono le traiettorie delle particelle del fluido: dove sono più fitte, il fluido è più veloce. Un <b>tubo di flusso</b> è un fascio di linee di flusso che si comporta come un condotto, senza fuoriuscite laterali.</p>
<p>Il modello è sorprendentemente efficace per l'acqua che scorre in un tubo, per il sangue in un'arteria (con qualche correzione) e per l'aria intorno a un'ala. Dove non funziona (miele, olio, flussi turbolenti) interviene la viscosità, di cui parleremo alla fine.</p>`
    },
    {
      type: "text",
      title: "Portata ed equazione di continuità",
      html: `<p>La <b>portata</b> Q è il <b>volume di fluido che attraversa una sezione del condotto nell'unità di tempo</b>:</p>
<p style="text-align:center"><b>Q = ΔV / Δt = A · v</b> &nbsp; (unità: m³/s; in pratica L/s o L/min)</p>
<p>dove A è l'area della sezione e v la velocità media del fluido. Infatti in un tempo Δt il fluido percorre una distanza v·Δt e riempie un cilindro di volume A·v·Δt.</p>
<p>Se il fluido è incomprimibile e non ci sono perdite, in un tubo di flusso la portata è la <b>stessa in ogni sezione</b>: tanta acqua entra, tanta ne esce. Si ottiene l'<b>equazione di continuità</b>:</p>
<p style="text-align:center"><b>A<sub>1</sub> · v<sub>1</sub> = A<sub>2</sub> · v<sub>2</sub> = costante</b></p>
<p>Dove il tubo <b>si restringe</b> il fluido <b>accelera</b>; dove si allarga rallenta. È l'effetto dell'acqua del giardino: schiacciando l'uscita, riduci A e il getto aumenta di velocità. Lo stesso accade a un fiume: nel tratto stretto della gola la corrente è veloce, nel lago in pianura è lenta.</p>`
    },
    {
      type: "svg",
      title: "Il tubo che si restringe",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<defs>
<marker id="fdA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#1d4ed8"/></marker>
</defs>
<g font-family="sans-serif">
<path d="M30 80 L 230 80 L 330 130 L 570 130 L 570 190 L 330 190 L 230 240 L 30 240 Z" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="4"/>
<line x1="50" y1="120" x2="150" y2="120" stroke="#1d4ed8" stroke-width="3" marker-end="url(#fdA)"/>
<line x1="50" y1="160" x2="150" y2="160" stroke="#1d4ed8" stroke-width="3" marker-end="url(#fdA)"/>
<line x1="50" y1="200" x2="150" y2="200" stroke="#1d4ed8" stroke-width="3" marker-end="url(#fdA)"/>
<line x1="370" y1="145" x2="540" y2="145" stroke="#1d4ed8" stroke-width="5" marker-end="url(#fdA)"/>
<line x1="370" y1="175" x2="540" y2="175" stroke="#1d4ed8" stroke-width="5" marker-end="url(#fdA)"/>
<text x="130" y="65" font-size="16" fill="#0f172a" font-weight="bold" text-anchor="middle">A1 grande</text>
<text x="130" y="265" font-size="16" fill="#1e3a8a" text-anchor="middle">v1 piccola</text>
<text x="450" y="115" font-size="16" fill="#0f172a" font-weight="bold" text-anchor="middle">A2 piccola</text>
<text x="450" y="215" font-size="16" fill="#991b1b" font-weight="bold" text-anchor="middle">v2 grande</text>
<text x="300" y="30" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">A1·v1 = A2·v2 (la portata è costante)</text>
</g>
</svg>`,
      caption: "Nella strozzatura le linee di flusso si infittiscono e il fluido accelera."
    },
    {
      type: "example",
      title: "Il tubo da giardino e le arterie",
      html: `<p><b>Giardino.</b> Un tubo con diametro interno 2,0 cm trasporta acqua a 1,0 m/s. All'uscita metti un ugello con diametro 0,5 cm. L'area scende di (2,0/0,5)² = 16 volte, quindi la velocità sale di 16 volte: <b>16 m/s</b>. La portata resta uguale: Q = π·(0,010)²·1,0 ≈ 3,1·10<sup>-4</sup> m³/s ≈ 0,31 L/s.</p>
<p><b>Aorta e capillari.</b> L'aorta ha sezione di circa 4 cm² e il sangue scorre a circa 20 cm/s (portata ≈ 5 L/min a riposo). I capillari sono microscopici, ma sono miliardi e la loro <b>sezione totale</b> è centinaia di volte quella dell'aorta (qualche migliaio di cm²): la velocità del sangue scende a frazioni di millimetro al secondo, il tempo perfetto per scambiare ossigeno e nutrienti con i tessuti. Nei capillari non vale che «più stretto = più veloce», perché è la somma delle sezioni a contare.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: portata e continuità",
      questions: [
        { type: "num", q: "L'acqua scorre a 2 m/s in un tubo di sezione 0,01 m². Quanto vale la portata?", answer: 0.02, tol: 0.0001, unit: "m³/s", explain: "Q = A·v = 0,01 × 2 = 0,02 m³/s = 20 L/s." },
        { type: "num", q: "Un tubo con sezione 0,08 m² e velocità 1,5 m/s si restringe a una sezione di 0,02 m². Quale velocità ha il fluido nel tratto stretto?", answer: 6, tol: 0.01, unit: "m/s", explain: "v2 = A1·v1/A2 = 0,08 × 1,5/0,02 = 6 m/s." },
        { type: "tf", q: "In un tubo di flusso, dove la sezione è più grande il fluido è più veloce.", answer: false, explain: "A·v è costante: sezione maggiore significa velocità minore." }
      ]
    },
    {
      type: "text",
      title: "Il teorema di Bernoulli",
      html: `<p>Nel 1738 il matematico e fisico svizzero <b>Daniel Bernoulli</b> pubblicò l'<i>Hydrodynamica</i>, dove espresse la <b>conservazione dell'energia</b> per un fluido in moto. Se un fluido ideale scorre in regime stazionario, lungo una linea di flusso la somma</p>
<p style="text-align:center"><b>p + ½·ρ·v² + ρ·g·h = costante</b></p>
<p>è la stessa in ogni punto. I tre termini sono:</p>
<ul>
<li><b>p</b>: la <b>pressione</b> statica (lavoro di pressione per unità di volume);</li>
<li><b>½ρv²</b>: <b>pressione dinamica</b> (energia cinetica per unità di volume);</li>
<li><b>ρgh</b>: <b>pressione di gravità</b> (energia potenziale per unità di volume, h = quota).</li>
</ul>
<p>Dimostrazione in breve: il lavoro delle forze di pressione sul fluido tra due sezioni è uguale alla variazione di energia cinetica e potenziale (teorema dell'energia cinetica). Dividendo per il volume ΔV si ottiene l'equazione.</p>
<p><b>Conseguenza fondamentale</b> (a quota costante, tubo orizzontale): dove la velocità è <b>maggiore</b> la pressione è <b>minore</b>, e viceversa:</p>
<p style="text-align:center"><b>p<sub>1</sub> + ½ρv<sub>1</sub>² = p<sub>2</sub> + ½ρv<sub>2</sub>²</b></p>
<p>Può sembrare strano: il fluido veloce «spinge meno» sulle pareti. Il motivo è che per accelerare nella strozzatura il fluido deve ricevere una forza netta dalla zona a pressione più alta verso quella a pressione più bassa. Con h = 0 per entrambe le sezioni, l'aumento di energia cinetica è pagato da una diminuzione di pressione. Per la statica (v = 0) si ritrova la <b>legge di Stevino</b>: p<sub>1</sub> − p<sub>2</sub> = ρ·g·(h<sub>2</sub> − h<sub>1</sub>).</p>`
    },
    {
      type: "example",
      title: "Venturi e Torricelli",
      html: `<p><b>Effetto Venturi.</b> Un tubo orizzontale in cui l'acqua passa da v<sub>1</sub> = 2,0 m/s a v<sub>2</sub> = 6,0 m/s. La differenza di pressione è Δp = ½·ρ·(v<sub>2</sub>² − v<sub>1</sub>²) = ½ × 1000 × (36 − 4) = <b>16 000 Pa</b> (0,16 atm circa): la pressione nel tratto stretto è più bassa di 16 kPa. Misurando questa differenza con due tubicini verticali (manometri) si calcola la portata: è il <b>venturimetro</b>, usato anche nei carburatori.</p>
<p><b>Torricelli.</b> Un serbatoio con un foro a profondità h sotto il pelo libero. Sul pelo libero e sul foro la pressione è atmosferica; la velocità del pelo libero è trascurabile. Bernoulli dà ρ·g·h = ½·ρ·v² ⟹</p>
<p style="text-align:center"><b>v = √(2·g·h)</b> (teorema di Torricelli, 1643)</p>
<p>È la stessa velocità che avrebbe un sasso caduto dall'altezza h. Con h = 1,25 m: v = √(2·9,8·1,25) ≈ <b>4,9 m/s</b>. Il getto ha una portata Q = A<sub>foro</sub>·v: ecco perché in una bottiglia forata il getto del buco più in basso esce più veloce (quanto lontano arriva dipende anche dall'altezza del buco dal suolo).</p>`
    },
    {
      type: "text",
      title: "La portanza e altre applicazioni",
      html: `<p>Il teorema di Bernoulli compare in moltissime situazioni quotidiane:</p>
<ul>
<li><b>Spruzzatori e profumi</b>: l'aria veloce che passa su un tubicino ne abbassa la pressione e il liquido risale; è lo stesso principio dell'aerografo e del carburatore.</li>
<li><b>Il camino e le correnti d'aria</b>: il vento veloce sopra il camino abbassa la pressione e «aspira» il fumo. Lo stesso accade con una porta che sbatte quando passa una corrente.</li>
<li><b>Tetti che volano via</b>: nei temporali il vento veloce sopra il tetto crea una depressione rispetto alla pressione interna e può sollevarlo.</li>
<li><b>Due navi parallele</b> si attraggono: l'acqua veloce nello spazio tra le navi ha pressione più bassa e le spinge una contro l'altra (un pericolo noto nei porti).</li>
<li><b>La palla con effetto</b> (Magnus): la rotazione trascina l'aria, creando velocità diverse sui due lati e una forza trasversale che curva il tiro, dalla punizione «a foglia morta» al «tiro a effetto» del tennis.</li>
</ul>
<p><b>L'ala dell'aereo.</b> L'ala ha un profilo asimmetrico e un'inclinazione («angolo d'attacco») rispetto alla corrente d'aria. L'aria sopra l'ala è più veloce e a pressione minore di quella sotto: la differenza di pressione moltiplicata per l'area dà la <b>portanza</b>, forza verso l'alto che equilibra il peso. Un modo equivalente di vederla è il terzo principio: l'ala <b>devia l'aria verso il basso</b> e, per reazione, l'aria spinge l'ala verso l'alto. Attenzione a un errore frequente: non è vero che le due masse d'aria «devono arrivare insieme» al bordo posteriore; in realtà l'aria sopra l'ala arriva prima. Il teorema di Bernoulli descrive correttamente le pressioni, ma la causa è la <b>forma del flusso</b> imposta dall'ala.</p>`
    },
    {
      type: "svg",
      title: "Flusso attorno a un'ala",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<defs>
<marker id="fdB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
</defs>
<g font-family="sans-serif">
<path d="M150 160 C 200 120 360 120 450 150 C 360 175 220 180 150 160 Z" fill="#475569" stroke="#0f172a" stroke-width="3" transform="rotate(-6 300 150)"/>
<path d="M20 90 C 150 90 230 50 330 55 C 440 60 500 90 580 92" stroke="#1d4ed8" stroke-width="3" fill="none"/>
<path d="M20 60 C 150 60 230 20 330 25 C 440 30 500 55 580 58" stroke="#1d4ed8" stroke-width="3" fill="none"/>
<path d="M20 210 C 150 215 250 225 330 215 C 440 205 500 205 580 205" stroke="#1d4ed8" stroke-width="3" fill="none"/>
<path d="M20 245 C 150 245 250 260 330 255 C 440 250 500 245 580 245" stroke="#1d4ed8" stroke-width="3" fill="none"/>
<line x1="300" y1="140" x2="300" y2="80" stroke="#dc2626" stroke-width="5" marker-end="url(#fdB)"/>
<text x="318" y="100" font-size="16" fill="#991b1b" font-weight="bold">portanza</text>
<text x="300" y="190" font-size="15" fill="#0f172a" text-anchor="middle">sotto: flusso più lento, pressione maggiore</text>
<text x="300" y="283" font-size="14" fill="#334155" text-anchor="middle">sopra: linee più fitte, flusso più veloce, pressione minore</text>
</g>
</svg>`,
      caption: "Sopra l'ala le linee di flusso sono più fitte (velocità maggiore, pressione minore); la differenza di pressione genera la portanza."
    },
    {
      type: "quiz",
      title: "Controlla: Bernoulli",
      questions: [
        { type: "mc", q: "In un tubo orizzontale dove il fluido è più veloce la pressione è:", options: ["maggiore", "minore", "uguale", "nulla"], answer: 1, explain: "Per Bernoulli, a quota costante, p + ½ρv² è costante: se v aumenta, p diminuisce." },
        { type: "num", q: "Un serbatoio ha un foro 1,8 m sotto il pelo libero. Con g = 10 m/s², qual è la velocità di uscita dell'acqua?", answer: 6, tol: 0.01, unit: "m/s", explain: "v = √(2gh) = √(2·10·1,8) = √36 = 6 m/s." },
        { type: "tf", q: "Il teorema di Bernoulli esprime la conservazione dell'energia per un fluido ideale.", answer: true, explain: "I tre termini sono le energie per unità di volume: di pressione, cinetica e potenziale." }
      ]
    },
    {
      type: "text",
      title: "La viscosità: i fluidi reali",
      html: `<p>Nei fluidi reali gli strati che scorrono uno sull'altro si trascinano a vicenda e si frenano: è la <b>viscosità</b>, una specie di «attrito interno». Un fluido viscoso scorre con difficoltà (miele, olio per motori), uno poco viscoso scorre facilmente (acqua, aria).</p>
<p>Si misura con il <b>coefficiente di viscosità η</b> (si legge «eta»), unità: <b>Pa·s</b>. Valori a circa 20 °C:</p>
<table>
<tr><th>Fluido</th><th>η (Pa·s)</th></tr>
<tr><td>Aria</td><td>≈ 1,8·10<sup>-5</sup></td></tr>
<tr><td>Acqua</td><td>≈ 1,0·10<sup>-3</sup></td></tr>
<tr><td>Sangue (37 °C)</td><td>≈ 3-4·10<sup>-3</sup></td></tr>
<tr><td>Olio d'oliva</td><td>≈ 0,08</td></tr>
<tr><td>Glicerina</td><td>≈ 1,4</td></tr>
<tr><td>Miele</td><td>≈ 10 (molto variabile)</td></tr>
</table>
<p>La viscosità dei <b>liquidi diminuisce con la temperatura</b> (per questo l'olio caldo scorre meglio), quella dei gas invece <b>aumenta</b>.</p>
<p>In un tubo cilindrico di raggio r e lunghezza L, un fluido viscoso scorre solo se c'è una <b>differenza di pressione</b> Δp tra le due estremità. La <b>legge di Poiseuille</b> (valida per flusso laminare) dà la portata:</p>
<p style="text-align:center"><b>Q = π · r⁴ · Δp / (8 · η · L)</b></p>
<p>Notiamo la dipendenza dalla <b>quarta potenza del raggio</b>: dimezzando il raggio la portata diventa 1/16! Per il sangue questo è cruciale: una lieve riduzione del diametro di un'arteria (per i depositi di colesterolo) obbliga il cuore ad aumentare molto la pressione per mantenere la portata, con rischio di ipertensione e infarto.</p>
<p>La viscosità determina anche la <b>resistenza</b> a un corpo che si muove in un fluido. Per una piccola sfera di raggio r che si muove lentamente con velocità v, la <b>legge di Stokes</b> dà la forza di attrito viscoso <b>F = 6π·η·r·v</b>. Una sferetta che cade in un liquido accelera fino a una <b>velocità limite</b>, quando peso, spinta di Archimede e attrito si equilibrano: è il principio del viscosimetro a caduta di sfera e spiega perché le gocce di nebbia restano sospese o la sabbia si deposita lentamente in acqua.</p>`
    },
    {
      type: "text",
      title: "Moto laminare e moto turbolento",
      html: `<p>Quando un fluido scorre lentamente il moto è <b>laminare</b>: gli strati scorrono paralleli. Se la velocità cresce oltre un certo limite il moto si fa <b>turbolento</b>: compaiono vortici, il flusso diventa caotico e la resistenza aumenta. Il passaggio è controllato da un numero adimensionale, il <b>numero di Reynolds</b>:</p>
<p style="text-align:center"><b>Re = ρ · v · d / η</b> &nbsp; (d = diametro del tubo)</p>
<p>In un tubo circolare il flusso è laminare per Re ≲ 2000 e turbolento per Re ≳ 4000 (in mezzo è instabile). Si vede bene nel fumo di una candela spenta, che sale in un filo ordinato (moto laminare) e a una certa altezza si spezza in vortici. I soffi cardiaci ascoltati con il fonendoscopio o il rumore di un rubinetto aperto al massimo sono causati dalla turbolenza. Il teorema di Bernoulli vale solo per flussi laminari e non viscosi: nella turbolenza e nella viscosità una parte dell'energia meccanica si trasforma in calore.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i fluidi in movimento",
      intro: "Il comportamento dei fluidi diventa intuitivo con le giuste analogie.",
      tabs: [
        {
          label: "🚗 Il traffico",
          html: "<p>Immagina un'autostrada che passa da quattro corsie a una sola: le auto devono <b>accelerare</b> per smaltire lo stesso flusso, altrimenti si accumula una coda (la portata non può cambiare, altrimenti le auto sparirebbero o si creerebbero dal nulla). L'equazione di continuità è proprio questo: <b>flusso in entrata = flusso in uscita</b>. Il restringimento obbliga a una velocità maggiore, come nella strozzatura del tubo.</p>"
        },
        {
          label: "⚡ L'energia si trasforma",
          html: "<p>Bernoulli è la conservazione dell'energia raccontata con la pressione. Immagina una pallina su un tavolo: se prende velocità, l'energia viene da qualche parte (da un dislivello o da una spinta). Nel fluido l'energia può stare in tre «banche»: la <b>pressione</b> (energia immagazzinata come in una molla compressa), la <b>velocità</b> (energia cinetica), la <b>quota</b> (energia potenziale). Aumentando una, le altre calano: veloce = pressione più bassa, a quota costante.</p>"
        },
        {
          label: "🔗 Abbina leggi e formule",
          html: "<p>Collega ogni legge alla sua espressione.</p>",
          widget: "match",
          options: { pairs: [
            ["Portata", "Q = A·v"],
            ["Equazione di continuità", "A1·v1 = A2·v2"],
            ["Teorema di Bernoulli", "p + ½ρv² + ρgh = costante"],
            ["Teorema di Torricelli", "v = √(2gh)"],
            ["Legge di Poiseuille", "Q = πr⁴Δp/(8ηL)"]
          ] }
        },
        {
          label: "🎨 Disegno: effetto Venturi",
          html: "<p>Nel tratto stretto il livello nel tubicino è più basso: la pressione è minore. È il principio del venturimetro.</p>",
          svg: "<svg viewBox='0 0 600 280' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='280' fill='#ecfeff'/><g font-family='sans-serif'><path d='M30 170 L 200 170 L 280 195 L 400 195 L 480 170 L 570 170 L 570 240 L 480 240 L 400 215 L 280 215 L 200 240 L 30 240 Z' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='3'/><rect x='90' y='70' width='20' height='100' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='3'/><rect x='320' y='110' width='20' height='85' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='3'/><line x1='60' y1='70' x2='140' y2='70' stroke='#dc2626' stroke-width='2' stroke-dasharray='5 4'/><text x='100' y='60' font-size='14' fill='#991b1b' text-anchor='middle'>p alta</text><text x='330' y='100' font-size='14' fill='#991b1b' text-anchor='middle'>p bassa</text><text x='130' y='210' font-size='14' fill='#1e3a8a' text-anchor='middle'>v piccola</text><text x='340' y='235' font-size='14' fill='#1e3a8a' text-anchor='middle'>v grande</text><text x='300' y='30' font-size='15' fill='#0f172a' text-anchor='middle' font-weight='bold'>Meno pressione dove il fluido è più veloce</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Daniel Bernoulli e la famiglia dei matematici",
      html: `<p>I Bernoulli furono una dinastia di matematici e fisici di Basilea: <b>Jakob</b>, <b>Johann</b> (il maestro di Eulero) e <b>Daniel</b> (1700-1782), figlio di Johann. Padre e figlio ebbero rapporti difficili: nel 1734 Daniel vinse con il padre un premio dell'Accademia di Parigi e Johann, geloso, lo cacciò di casa. Quando Daniel pubblicò l'<i>Hydrodynamica</i> (1738), Johann scrisse a sua volta l'<i>Hydraulica</i> e la retrodatò al 1732 per rivendicare la priorità, un episodio celebre di plagio all'interno di una stessa famiglia. Nell'<i>Hydrodynamica</i> Daniel espose anche una prima teoria cinetica dei gas: la pressione come effetto degli urti delle particelle contro le pareti.</p>`
    },
    {
      type: "curiosity",
      title: "Gli orologi ad acqua",
      html: `<p>In un recipiente che si svuota da un foro, per Torricelli la velocità di uscita v = √(2gh) diminuisce man mano che il livello scende, quindi il flusso rallenta e un semplice cilindro non misura il tempo in modo regolare. Gli antichi orologi ad acqua (clessidre idriche o «clepsidre»), già usati in Egitto (ne sono stati trovati esemplari a Karnak) e poi in Grecia e a Roma, avevano per questo pareti a forma di tronco di cono e scale tarate in modo da compensare la variazione. Una clessidra a sabbia, invece, ha un flusso quasi costante, perché la sabbia non si comporta come un fluido ideale.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della dinamica dei fluidi",
      nodes: [
        { id: "ideale", label: "Fluido ideale", x: 50, y: 8, color: "#2563eb", html: "Incomprimibile, non viscoso, moto stazionario e laminare.", why: "È un modello: elimina le complicazioni (viscosità, turbolenza, comprimibilità) per capire la fisica essenziale. Euler e Bernoulli lo usarono nel Settecento; fu poi corretto da Navier e Stokes con la viscosità." },
        { id: "continuita", label: "Continuità A·v = cost", x: 15, y: 45, color: "#16a34a", html: "La portata Q = A·v è costante in un tubo di flusso: dove si restringe, il fluido accelera.", why: "Esprime la conservazione della massa (o del volume per un fluido incomprimibile): il fluido non si crea né sparisce nel condotto." },
        { id: "bernoulli", label: "Bernoulli", x: 55, y: 45, color: "#ef4444", html: "p + ½ρv² + ρgh = costante lungo una linea di flusso.", why: "Esprime la conservazione dell'energia (lavoro delle forze di pressione = variazione di energia cinetica e potenziale). Pubblicato da Daniel Bernoulli nell'Hydrodynamica (1738) e formalizzato da Eulero." },
        { id: "torricelli", label: "Torricelli e applicazioni", x: 88, y: 45, color: "#f59e0b", html: "v = √(2gh) per l'uscita da un foro; Venturi, portanza, spruzzatori.", why: "Evangelista Torricelli lo trovò nel 1643, quarant'anni prima delle leggi di Newton: è un caso particolare del teorema di Bernoulli." },
        { id: "viscosita", label: "Viscosità η", x: 30, y: 85, color: "#8b5cf6", html: "Attrito interno dei fluidi; Poiseuille Q = πr⁴Δp/(8ηL); Stokes F = 6πηrv.", why: "Newton (1687) ipotizzò che l'attrito tra strati fosse proporzionale al gradiente di velocità. Poiseuille (1840) studiò il flusso nei capillari sanguigni e trovò la dipendenza da r⁴." },
        { id: "turbolenza", label: "Turbolenza e Reynolds", x: 75, y: 85, color: "#64748b", html: "Per Re alto il flusso diventa caotico; Re = ρvd/η.", why: "Osborne Reynolds (1883) dimostrò con un filo di inchiostro in un tubo di vetro che il passaggio a turbolenza dipende da un numero adimensionale. Resta un problema aperto della fisica." }
      ],
      edges: [["ideale", "continuita", "implica"], ["ideale", "bernoulli", "implica"], ["bernoulli", "torricelli", "caso particolare"], ["ideale", "viscosita", "corretto da"], ["viscosita", "turbolenza", "fino a"]]
    }
  ],
  glossary: [
    { t: "Fluido ideale", d: "Modello di fluido incomprimibile, non viscoso, in moto stazionario e laminare." },
    { t: "Portata", d: "Volume di fluido che attraversa una sezione nell'unità di tempo: Q = A·v (m³/s)." },
    { t: "Equazione di continuità", d: "A1·v1 = A2·v2: la portata è costante in un tubo di flusso." },
    { t: "Linea di flusso", d: "Traiettoria seguita da una particella di fluido in moto stazionario." },
    { t: "Teorema di Bernoulli", d: "p + ½ρv² + ρgh = costante: conservazione dell'energia per un fluido ideale." },
    { t: "Portanza", d: "Forza perpendicolare alla corrente che sostiene un'ala, dovuta alla differenza di pressione." },
    { t: "Viscosità", d: "Attrito interno di un fluido; si misura con η in Pa·s." },
    { t: "Numero di Reynolds", d: "Re = ρvd/η: prevede il passaggio da moto laminare a turbolento." },
    { t: "Moto turbolento", d: "Moto caotico con vortici, che dissipa energia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è l'unità di misura SI della portata?", options: ["m/s", "m³/s", "Pa", "kg/m³"], answer: 1, explain: "Q = ΔV/Δt: metri cubi al secondo." },
      { type: "num", q: "Un tubo di sezione 0,005 m² trasporta acqua alla velocità di 4 m/s. Calcola la portata in L/s.", answer: 20, tol: 0.01, unit: "L/s", explain: "Q = 0,005 × 4 = 0,02 m³/s = 20 L/s." },
      { type: "num", q: "Un tubo di diametro 4 cm si restringe a 2 cm. Se la velocità nel tratto largo è 1 m/s, quale è nel tratto stretto?", answer: 4, tol: 0.01, unit: "m/s", explain: "L'area è proporzionale al quadrato del diametro: A1/A2 = 4, quindi v2 = 4 m/s." },
      { type: "tf", q: "Nel teorema di Bernoulli, a quota costante, dove la velocità è maggiore la pressione è maggiore.", answer: false, explain: "È il contrario: p + ½ρv² è costante, quindi se v aumenta p diminuisce." },
      { type: "num", q: "Un serbatoio ha un foro 5 m sotto il pelo libero. Con g = 9,8 m/s², quanto vale la velocità di uscita dell'acqua?", answer: 9.9, tol: 0.1, unit: "m/s", explain: "v = √(2gh) = √(2·9,8·5) = √98 ≈ 9,9 m/s." },
      { type: "num", q: "In un tubo orizzontale l'acqua passa da 1 m/s a 3 m/s (ρ = 1000 kg/m³). Di quanto diminuisce la pressione?", answer: 4000, tol: 1, unit: "Pa", explain: "Δp = ½ρ(v2² − v1²) = 500 × (9 − 1) = 4000 Pa." },
      { type: "mc", q: "Come cambia la portata di un tubo (Poiseuille) se il raggio raddoppia, a pari Δp, η e L?", options: ["Raddoppia", "Quadruplica", "Diventa 8 volte", "Diventa 16 volte"], answer: 3, explain: "Q ∝ r⁴: 2⁴ = 16." },
      { type: "tf", q: "La viscosità dei liquidi in genere diminuisce quando aumenta la temperatura.", answer: true, explain: "L'olio caldo scorre meglio dell'olio freddo." },
      { type: "mc", q: "Per quale motivo l'aria sopra l'ala di un aereo contribuisce alla portanza?", options: ["È più lenta e a pressione maggiore", "È più veloce e a pressione minore", "È ferma", "Ha densità maggiore"], answer: 1, explain: "Sopra l'ala il flusso è più veloce e la pressione è minore: la differenza genera una spinta verso l'alto." },
      { type: "order", q: "Ordina per viscosità crescente (circa).", items: ["Aria", "Acqua", "Olio d'oliva", "Miele"], explain: "η ≈ 2·10⁻⁵ (aria) < 10⁻³ (acqua) < 0,08 (olio) < 10 Pa·s (miele)." }
    ]
  }
});
