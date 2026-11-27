TOPIC('it', {
  id: `l3-art-prospettiva`,
  title: `Disegno: la prospettiva`,
  intro: `Perché due binari paralleli sembrano incontrarsi all'orizzonte? Perché una stanza dipinta può sembrare profonda sul foglio piatto? La <b>prospettiva</b> è il metodo geometrico che i rinascimentali inventarono per rappresentare lo spazio tridimensionale su una superficie piana, come lo vedrebbe un occhio fermo in un punto. In questa lezione impari a disegnare davvero: la <b>prospettiva centrale</b> (frontale), con un solo punto di fuga, e la <b>prospettiva accidentale</b> (angolare), con due punti di fuga. Servono matita, riga e un po' di pazienza. ✏️📐`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. Che cos'è la prospettiva`,
      html: `<p>Nel Rinascimento <b>Brunelleschi</b> (intorno al 1415-1420) e <b>Alberti</b> (<i>De pictura</i>, 1435) trovano la regola: se il quadro è come una <b>finestra</b> trasparente, quello che si vede attraverso di essa si può ricalcare. Ogni punto dello spazio corrisponde al punto in cui il <b>raggio visuale</b> che va dall'occhio a quel punto <b>taglia il quadro</b>. Più tardi <b>Piero della Francesca</b> (<i>De prospectiva pingendi</i>) ne fa un vero trattato di geometria, e <b>Dürer</b> (1525) descrive strumenti per tracciarla. È una <b>proiezione centrale</b>: tutti i raggi partono da un unico punto, l'occhio.</p>
<p>Gli elementi fondamentali:</p>
<ul>
<li><b>Punto di vista</b> (PV): la posizione dell'occhio dell'osservatore;</li>
<li><b>Quadro</b> (Q): il piano verticale su cui si disegna (il foglio);</li>
<li><b>Piano geometrale</b>: il piano orizzontale del terreno su cui poggiano gli oggetti;</li>
<li><b>Linea di terra</b> (LT): la retta in cui il quadro incontra il piano geometrale;</li>
<li><b>Linea d'orizzonte</b> (LO): la retta orizzontale sul quadro che sta <b>all'altezza degli occhi</b> dell'osservatore;</li>
<li><b>Punto principale</b> (PP): la proiezione del punto di vista sul quadro, sulla linea d'orizzonte;</li>
<li><b>Punto di fuga</b> (F): il punto dell'orizzonte in cui convergono le immagini di rette parallele che si allontanano.</li>
</ul>`
    },
    {
      type: `svg`, title: `Un corridoio in prospettiva centrale`,
      caption: `Le rette dello spazio perpendicolari al quadro (spigoli del pavimento, delle pareti e del soffitto) convergono nel punto di fuga F, che sta sulla linea d'orizzonte, all'altezza degli occhi. Le linee trasversali restano orizzontali.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0f9ff"/><polygon points="140,260 460,260 460,20 140,20" fill="#e0f2fe" stroke="#075985" stroke-width="3"/><line x1="140" y1="20" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="460" y1="20" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="140" y1="260" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="460" y1="260" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="188" y1="215" x2="412" y2="215" stroke="#0ea5e9" stroke-width="2"/><line x1="222.1" y1="183" x2="377.9" y2="183" stroke="#0ea5e9" stroke-width="2"/><line x1="246.7" y1="160" x2="353.3" y2="160" stroke="#0ea5e9" stroke-width="2"/><line x1="263.7" y1="144" x2="336.3" y2="144" stroke="#0ea5e9" stroke-width="2"/><line x1="275.5" y1="133" x2="324.5" y2="133" stroke="#0ea5e9" stroke-width="2"/><line x1="0" y1="110" x2="600" y2="110" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 6"/><line x1="0" y1="260" x2="600" y2="260" stroke="#16a34a" stroke-width="3"/><circle cx="300" cy="110" r="6" fill="#dc2626"/><text x="300" y="96" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F</text><text x="10" y="104" font-size="14" fill="#991b1b">linea d'orizzonte (LO)</text><text x="10" y="280" font-size="14" fill="#166534">linea di terra (LT)</text><text x="590" y="280" font-size="14" fill="#075985" text-anchor="end">pavimento a quadri</text></svg>`
    },
    {
      type: `text`, title: `2. Le regole di base`,
      html: `<p>Le regole che permettono di disegnare in prospettiva sono poche e valgono per tutte le costruzioni:</p>
<ol>
<li><b>La linea d'orizzonte sta all'altezza degli occhi</b>: tutto ciò che sta sopra di essa è visto dal basso, tutto ciò che sta sotto è visto dall'alto. Un oggetto con la faccia superiore all'altezza degli occhi appare come una linea (vedi solo il lato).</li>
<li><b>Rette parallele tra loro e non parallele al quadro convergono in uno stesso punto di fuga</b>, sull'orizzonte se sono orizzontali.</li>
<li><b>Rette parallele al quadro</b> restano parallele tra loro e non hanno punto di fuga: le verticali restano verticali, le orizzontali parallele al quadro restano orizzontali.</li>
<li><b>Più un oggetto è lontano, più appare piccolo</b>, e le distanze si "comprimono" avvicinandosi all'orizzonte.</li>
<li><b>Un segmento che giace sul quadro</b> (cioè sulla linea di terra) appare in <b>vera grandezza</b>: è la misura di riferimento.</li>
</ol>`
    },
    {
      type: `text`, title: `3. Prospettiva centrale: un punto di fuga`,
      html: `<p>Nella <b>prospettiva centrale</b> (o frontale) un lato dell'oggetto è <b>parallelo al quadro</b>: gli spigoli perpendicolari al quadro (le "profondità") convergono tutti nel <b>punto di fuga principale F</b>, che coincide con il punto principale PP; gli altri spigoli restano orizzontali o verticali. È la prospettiva di un corridoio, di una strada vista dal centro, di una piazza.</p>
<p><b>Come si disegna un quadrato orizzontale (metodo del punto di distanza):</b></p>
<ol>
<li>Traccia la <b>linea d'orizzonte</b> e la <b>linea di terra</b> sotto di essa. Segna il punto di fuga <b>F</b> sull'orizzonte.</li>
<li>Sulla linea di terra segna il lato <b>AB</b> del quadrato (misura reale). Congiungi A e B con F: sono le <b>fughe</b> dei lati laterali.</li>
<li>Sull'orizzonte, a destra di F, segna il <b>punto di distanza D</b>, a una distanza da F uguale alla distanza dell'osservatore dal quadro (distanza principale). Le diagonali a 45° dello spazio convergono in D (e in D', simmetrico a sinistra).</li>
<li>Congiungi <b>A con D</b>: la retta taglia la fuga da B a F nel punto <b>C</b>, che è il vertice posteriore del quadrato.</li>
<li>Per C traccia la <b>orizzontale</b> fino alla fuga da A a F: trovi il quarto vertice <b>E</b>. Il quadrilatero ABCE è l'immagine del quadrato.</li>
</ol>
<p>La distanza principale controlla la "deformazione": se è piccola (osservatore vicino) la prospettiva è forte e rapidamente convergente, se è grande è più piatta, simile alla fotografia con teleobiettivo.</p>`
    },
    {
      type: `svg`, title: `Il quadrato col punto di distanza`,
      caption: `Dal vertice A si traccia la retta verso il punto di distanza D: incontra la fuga B-F in C, e un'orizzontale per C trova E. In viola la diagonale AC (e quella simmetrica verso D').`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fffbeb"/><line x1="0" y1="90" x2="600" y2="90" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 6"/><line x1="0" y1="250" x2="600" y2="250" stroke="#16a34a" stroke-width="3"/><line x1="200" y1="250" x2="300" y2="90" stroke="#a16207" stroke-width="2" stroke-dasharray="4 4"/><line x1="320" y1="250" x2="300" y2="90" stroke="#a16207" stroke-width="2" stroke-dasharray="4 4"/><line x1="200" y1="250" x2="500" y2="90" stroke="#7c3aed" stroke-width="2"/><line x1="320" y1="250" x2="100" y2="90" stroke="#7c3aed" stroke-width="2"/><polygon points="200,250 320,250 312.5,190 237.5,190" fill="#fde68a" stroke="#78350f" stroke-width="4" fill-opacity="0.8"/><circle cx="300" cy="90" r="6" fill="#dc2626"/><circle cx="500" cy="90" r="6" fill="#7c3aed"/><circle cx="100" cy="90" r="6" fill="#7c3aed"/><text x="300" y="76" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F</text><text x="500" y="76" font-size="16" font-weight="bold" fill="#5b21b6" text-anchor="middle">D</text><text x="100" y="76" font-size="16" font-weight="bold" fill="#5b21b6" text-anchor="middle">D'</text><text x="190" y="270" font-size="16" fill="#78350f" text-anchor="end">A</text><text x="330" y="270" font-size="16" fill="#78350f">B</text><text x="322" y="188" font-size="16" fill="#78350f">C</text><text x="228" y="188" font-size="16" fill="#78350f" text-anchor="end">E</text><text x="590" y="108" font-size="14" fill="#991b1b" text-anchor="end">orizzonte</text><text x="590" y="290" font-size="14" fill="#166534" text-anchor="end">linea di terra, AB = lato</text></svg>`
    },
    {
      type: `example`, title: `Esempio: dal quadrato al cubo`,
      html: `<p>Una volta trovato il quadrato ABCE a terra, il <b>cubo</b> è semplice: dai quattro vertici di base si innalzano gli spigoli <b>verticali</b>. Lo spigolo AA' (il più vicino, sulla linea di terra) è in vera grandezza e vale quanto AB. Poi si congiunge A' e B' con F per trovare i lati superiori, e si portano le verticali da C ed E fino a incontrare le fughe di A'-F e B'-F. Se la linea d'orizzonte è <b>sopra</b> il cubo, vedi anche la faccia superiore; se è <b>sotto</b>, vedi il lato inferiore; se passa <b>attraverso</b> il cubo, la faccia superiore o inferiore si riduce a una linea.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: elementi e centrale`,
      questions: [
        { type: `mc`, q: `Dove si trova la linea d'orizzonte?`, options: [`All'altezza degli occhi dell'osservatore`, `Sulla linea di terra`, `A metà del foglio sempre`], answer: 0, explain: `È la retta del quadro all'altezza del punto di vista.` },
        { type: `tf`, q: `Nella prospettiva centrale le rette perpendicolari al quadro convergono in un solo punto di fuga.`, answer: true, explain: `È il punto di fuga principale.` },
        { type: `mc`, q: `Come appare una verticale (parallela al quadro) in prospettiva?`, options: [`Verticale`, `Inclinata verso il punto di fuga`, `Curva`], answer: 0, explain: `Le rette parallele al quadro restano parallele.` }
      ]
    },
    {
      type: `text`, title: `4. Prospettiva accidentale: due punti di fuga`,
      html: `<p>Nella <b>prospettiva accidentale</b> (o angolare) l'oggetto è <b>ruotato</b>: nessuna delle sue facce orizzontali è parallela al quadro, e lo spigolo più vicino ci viene incontro. Una scatola, una casa vista dall'angolo, un edificio: due sistemi di spigoli orizzontali, ciascuno con il proprio punto di fuga, <b>F1</b> e <b>F2</b>, entrambi sulla linea d'orizzonte. Gli spigoli verticali restano <b>verticali</b> (sono paralleli al quadro).</p>
<p><b>Costruzione di un cubo (parallelepipedo) in accidentale:</b></p>
<ol>
<li>Traccia la linea d'orizzonte e segna F1 a sinistra e F2 a destra (ben distanziati, anche fuori dal foglio, per evitare deformazioni).</li>
<li>Disegna lo <b>spigolo verticale più vicino</b>, a piacere: la sua lunghezza è reale (si trova sul quadro).</li>
<li>Congiungi i due estremi dello spigolo con F1 e con F2: ottieni le <b>fughe</b> delle due facce visibili.</li>
<li>Scegli la larghezza delle due facce tracciando <b>due verticali</b>, una a sinistra e una a destra: i punti in cui incontrano le fughe sono i vertici.</li>
<li>Per il vertice posteriore superiore, collega i due vertici superiori laterali con F2 e F1 rispettivamente (incrocio di due fughe): hai chiuso la faccia superiore.</li>
</ol>
<p><b>Condizione di correttezza</b>: se gli spigoli reali sono tra loro ortogonali, le direzioni dall'occhio ai due punti di fuga formano un angolo retto: il punto di vista sta sulla <b>semicirconferenza di diametro F1F2</b> (nel piano orizzontale). Perciò i punti di fuga troppo vicini producono un angolo troppo acuto e un disegno distorto: conviene tenerli lontani.</p>
<p>Per edifici molto alti, o visti dal basso, si può aggiungere un <b>terzo punto di fuga</b> (verticale) per far convergere anche i verticali verso l'alto o verso il basso: è la prospettiva a tre punti, usata nei fumetti e nella grafica dei grattacieli.</p>`
    },
    {
      type: `svg`, title: `Un cubo in prospettiva accidentale`,
      caption: `Due punti di fuga F1 e F2 sull'orizzonte. Lo spigolo verticale più vicino resta verticale e i due lati convergono verso F1 e F2. Il cubo è sotto l'orizzonte: si vede la faccia superiore.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f5f3ff"/><line x1="0" y1="60" x2="600" y2="60" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 6"/><line x1="300" y1="130" x2="40" y2="60" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="300" y1="130" x2="560" y2="60" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="300" y1="250" x2="40" y2="60" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="300" y1="250" x2="560" y2="60" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 4"/><polygon points="300,130 300,250 170,155 170,95" fill="#ddd6fe" stroke="#4c1d95" stroke-width="3"/><polygon points="300,130 300,250 430,155 430,95" fill="#c4b5fd" stroke="#4c1d95" stroke-width="3"/><polygon points="300,130 170,95 300,83.3 430,95" fill="#ede9fe" stroke="#4c1d95" stroke-width="3"/><circle cx="40" cy="60" r="6" fill="#dc2626"/><circle cx="560" cy="60" r="6" fill="#dc2626"/><text x="40" y="44" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F1</text><text x="560" y="44" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F2</text><text x="300" y="50" font-size="14" fill="#991b1b" text-anchor="middle">linea d'orizzonte</text><text x="292" y="270" font-size="14" fill="#4c1d95" text-anchor="end">spigolo verticale</text></svg>`
    },
    {
      type: `example`, title: `Esempio: scegliere l'altezza dell'orizzonte`,
      html: `<p>Fotografa o disegna la stessa scatola da tre altezze: da terra (orizzonte basso), in piedi (orizzonte a un metro e mezzo), da una finestra del secondo piano (orizzonte alto). A orizzonte basso l'oggetto sembra imponente e monumentale, si vede quasi solo la fronte; a orizzonte medio hai l'effetto più naturale; ad orizzonte alto (visione dall'alto) vedi il piano superiore e l'oggetto sembra piccolo e leggibile come in una mappa. I pittori rinascimentali scelgono l'orizzonte con cura: Mantegna, nell'oculo della <i>Camera degli Sposi</i>, usa un punto di vista bassissimo ("di sotto in su") per dare l'illusione di un cielo aperto sul soffitto. Leonardo nel <i>Cenacolo</i> lo mette all'altezza del volto di Cristo.</p>`
    },
    {
      type: `widget`, title: `Cronologia della prospettiva`,
      widget: `timeline`,
      options: { events: [ { year: 1415, label: `Esperimento di Brunelleschi (c. 1415-20)`, icon: `🔬` }, { year: 1426, label: `Trinità di Masaccio (c. 1426-28)`, icon: `🎨` }, { year: 1435, label: `Alberti scrive De pictura`, icon: `📖` }, { year: 1474, label: `Piero scrive il De prospectiva pingendi (c. 1470-80)`, icon: `📐` }, { year: 1495, label: `Cenacolo di Leonardo (c. 1494-98)`, icon: `🍷` }, { year: 1511, label: `Scuola di Atene di Raffaello`, icon: `🏛️` }, { year: 1525, label: `Dürer: Underweysung der Messung`, icon: `✏️` } ], unit: `anni` },
      caption: `Date d.C., alcune approssimate.`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la prospettiva ha un "difetto"?`,
      html: `<p>La prospettiva lineare è corretta solo se guardi il disegno da <b>un punto preciso</b> (il punto di vista). Se ti sposti molto, le forme si deformano: lo si vede nei <b>finti soffitti</b> dipinti da Andrea Pozzo nella chiesa di Sant'Ignazio a Roma, dove un disco sul pavimento indica il punto esatto da cui la cupola dipinta sembra vera. Guardata da un altro punto, appare distorta. Anche una fotografia grandangolare ai bordi stira i volti: è lo stesso effetto geometrico.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la prospettiva non è l'unico modo di rappresentare lo spazio?`,
      html: `<p>In molte tradizioni, come quella medievale europea, cinese e giapponese, o bizantina, lo spazio non è reso con un punto di fuga: gli oggetti importanti sono più grandi di quelli secondari, e le pareti sono "aperte" per mostrare più lati insieme. Nella pittura cinese si usano linee parallele che non convergono, o la prospettiva "a volo d'uccello". Nell'arte moderna il Cubismo (Picasso, Braque) ha deliberatamente rifiutato il punto di vista unico, mostrando lo stesso oggetto da più lati contemporaneamente.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul><li><b>Elementi</b>: punto di vista, quadro, linea di terra, linea d'orizzonte (altezza degli occhi), punto di fuga.</li><li><b>Centrale</b>: un punto di fuga; il quadrato si costruisce con il <b>punto di distanza</b> (diagonali a 45°).</li><li><b>Accidentale</b>: due punti di fuga F1, F2 sull'orizzonte; le verticali restano verticali; il punto di vista sta sulla semicirconferenza di diametro F1F2.</li><li>Un segmento sulla linea di terra è in vera grandezza.</li></ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `La prospettiva si capisce guardando, ricalcando e riconoscendo.`,
      tabs: [
        {
          label: `🪟 Ricalca su un vetro`,
          html: `<p>Esperimento di Alberti: stai fermo davanti a una finestra, chiudi un occhio e con un pennarello ricalca sul vetro i contorni di ciò che vedi fuori (strada, edifici, case). Hai appena creato un disegno in prospettiva: le linee delle strade convergono verso l'orizzonte, quelle verticali dei palazzi restano verticali. Ricopia poi su un foglio e confronta con le regole: la linea d'orizzonte è all'altezza del tuo occhio, e i punti di fuga sono dove le strade sembrano incontrarsi.</p>`
        },
        {
          label: `🏷️ Etichetta il disegno`,
          html: `<p>Tocca un punto del corridoio e scegli il nome corretto.</p>`,
          widget: `labelDiagram`,
          options: { svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0f9ff"/><polygon points="140,260 460,260 460,20 140,20" fill="#e0f2fe" stroke="#075985" stroke-width="3"/><line x1="140" y1="20" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="460" y1="20" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="140" y1="260" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="460" y1="260" x2="300" y2="110" stroke="#0369a1" stroke-width="3"/><line x1="188" y1="215" x2="412" y2="215" stroke="#0ea5e9" stroke-width="2"/><line x1="222.1" y1="183" x2="377.9" y2="183" stroke="#0ea5e9" stroke-width="2"/><line x1="246.7" y1="160" x2="353.3" y2="160" stroke="#0ea5e9" stroke-width="2"/><line x1="263.7" y1="144" x2="336.3" y2="144" stroke="#0ea5e9" stroke-width="2"/><line x1="275.5" y1="133" x2="324.5" y2="133" stroke="#0ea5e9" stroke-width="2"/><line x1="0" y1="110" x2="600" y2="110" stroke="#dc2626" stroke-width="2" stroke-dasharray="8 6"/><line x1="0" y1="260" x2="600" y2="260" stroke="#16a34a" stroke-width="3"/><circle cx="300" cy="110" r="6" fill="#dc2626"/><text x="300" y="96" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">F</text><text x="10" y="104" font-size="14" fill="#991b1b">linea d'orizzonte (LO)</text><text x="10" y="280" font-size="14" fill="#166534">linea di terra (LT)</text><text x="590" y="280" font-size="14" fill="#075985" text-anchor="end">pavimento a quadri</text></svg>`, spots: [ { x: 300, y: 110, label: `Punto di fuga` }, { x: 60, y: 110, label: `Linea d'orizzonte` }, { x: 60, y: 260, label: `Linea di terra` }, { x: 220, y: 185, label: `Retta che converge` }, { x: 300, y: 160, label: `Linea trasversale orizzontale` } ] }
        },
        {
          label: `🧩 Centrale o accidentale?`,
          html: `<p>Classifica le caratteristiche.</p>`,
          widget: `classify`,
          options: { groups: [`Centrale`, `Accidentale`], items: [[`Un solo punto di fuga`, 0], [`Due punti di fuga`, 1], [`Una faccia parallela al quadro`, 0], [`Oggetto visto dall'angolo`, 1], [`Punto di distanza per le diagonali`, 0], [`Punto di vista sulla semicirconferenza F1F2`, 1], [`Corridoio visto frontalmente`, 0]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: la prospettiva`,
      nodes: [
        { id: `pro`, label: `Prospettiva`, x: 50, y: 6, color: `#64748b`, html: `Proiezione dello spazio su un piano da un unico punto di vista.`, why: `Nasce nel Rinascimento come applicazione della geometria all'arte: il quadro è una finestra, i raggi visuali ne tagliano il piano.` },
        { id: `ele`, label: `Elementi`, x: 16, y: 30, color: `#f59e0b`, html: `PV, quadro, LT, LO, F.`, why: `Servono a fissare la posizione dell'osservatore e dell'oggetto rispetto al quadro.` },
        { id: `cen`, label: `Centrale`, x: 42, y: 34, color: `#22c55e`, html: `Un punto di fuga.`, why: `Una faccia è parallela al quadro: le profondità convergono nel punto principale.` },
        { id: `acc`, label: `Accidentale`, x: 68, y: 34, color: `#ec4899`, html: `Due punti di fuga.`, why: `L'oggetto è ruotato: due direzioni orizzontali, due fughe sull'orizzonte.` },
        { id: `tre`, label: `Tre punti`, x: 90, y: 30, color: `#a855f7`, html: `Anche le verticali convergono.`, why: `Serve per edifici alti o visti dal basso/alto, quando il quadro è inclinato.` },
        { id: `dis`, label: `Punto di distanza`, x: 24, y: 64, color: `#0ea5e9`, html: `Diagonali a 45°.`, why: `Poiché l'angolo è noto, il punto sull'orizzonte permette di misurare la profondità.` },
        { id: `ver`, label: `Verticali`, x: 52, y: 66, color: `#ef4444`, html: `Restano verticali.`, why: `Sono parallele al quadro e quindi non hanno punto di fuga.` },
        { id: `ste`, label: `Storia`, x: 82, y: 64, color: `#14b8a6`, html: `Brunelleschi, Alberti, Piero, Dürer.`, why: `Dalla scoperta (c. 1415) alla teoria (1435) al trattato (Piero).` },
        { id: `eff`, label: `Uso artistico`, x: 50, y: 92, color: `#3b82f6`, html: `Scelta dell'orizzonte e del punto di vista.`, why: `Un orizzonte basso dà monumentalità, uno alto dà panorama.` }
      ],
      edges: [[`pro`, `ele`, `si basa su`], [`pro`, `cen`, `caso`], [`pro`, `acc`, `caso`], [`pro`, `tre`, `caso`], [`cen`, `dis`, `usa`], [`acc`, `ver`, `conserva`], [`pro`, `ste`, `nasce`], [`ste`, `eff`, `porta a`], [`ver`, `eff`, `porta a`]]
    },
    {
      type: `quiz`, title: `Mini-quiz: accidentale`,
      questions: [
        { type: `mc`, q: `Quanti punti di fuga ha un cubo visto dall'angolo (accidentale, con spigoli verticali)?`, options: [`Due`, `Uno`, `Quattro`], answer: 0, explain: `Due, F1 e F2, sull'orizzonte.` },
        { type: `tf`, q: `Nella prospettiva accidentale gli spigoli verticali convergono verso il basso.`, answer: false, explain: `Restano verticali, perché paralleli al quadro.` },
        { type: `mc`, q: `Dove si trovano F1 e F2?`, options: [`Sulla linea d'orizzonte`, `Sulla linea di terra`, `Sul bordo del foglio`], answer: 0, explain: `Sono punti dell'orizzonte.` }
      ]
    }
  ],
  glossary: [
    { t: `Punto di vista`, d: `Posizione dell'occhio dell'osservatore.` },
    { t: `Quadro`, d: `Piano verticale su cui si disegna la prospettiva.` },
    { t: `Piano geometrale`, d: `Piano orizzontale su cui poggiano gli oggetti.` },
    { t: `Linea di terra`, d: `Intersezione tra il quadro e il piano geometrale.` },
    { t: `Linea d'orizzonte`, d: `Retta del quadro all'altezza degli occhi dell'osservatore.` },
    { t: `Punto principale`, d: `Proiezione ortogonale del punto di vista sul quadro.` },
    { t: `Punto di fuga`, d: `Punto in cui convergono le immagini di rette parallele non parallele al quadro.` },
    { t: `Punto di distanza`, d: `Punto dell'orizzonte in cui convergono le rette a 45° rispetto al quadro.` },
    { t: `Prospettiva centrale`, d: `Prospettiva con un solo punto di fuga principale (frontale).` },
    { t: `Prospettiva accidentale`, d: `Prospettiva con due punti di fuga (angolare).` },
    { t: `Raggio visuale`, d: `Retta immaginaria che va dall'occhio a un punto dell'oggetto.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Che cos'è la linea di terra?`, options: [`L'intersezione tra quadro e piano geometrale`, `La retta all'altezza degli occhi`, `Il bordo del foglio`], answer: 0, explain: `La linea d'orizzonte è un'altra cosa.` },
      { type: `mc`, q: `All'altezza di quale parte del corpo si trova la linea d'orizzonte?`, options: [`Degli occhi dell'osservatore`, `Dei piedi`, `Del cuore`], answer: 0, explain: `Si dice anche altezza del punto di vista.` },
      { type: `tf`, q: `In prospettiva centrale ogni faccia del cubo ha un punto di fuga diverso.`, answer: false, explain: `Ce n'è uno solo, quello principale.` },
      { type: `num`, q: `Quanti punti di fuga sull'orizzonte servono per un parallelepipedo in prospettiva accidentale?`, answer: 2, tol: 0, explain: `Due: F1 e F2.` },
      { type: `text`, q: `Come si chiama il punto dell'orizzonte in cui convergono le diagonali a 45°?`, answer: [`punto di distanza`, `il punto di distanza`], explain: `È il punto di distanza.` },
      { type: `order`, q: `Metti in ordine le fasi per disegnare un quadrato in prospettiva centrale.`, items: [`Tracciare orizzonte e linea di terra`, `Segnare il lato AB e unire con F`, `Segnare il punto di distanza D`, `Unire A con D e trovare C`, `Tracciare l'orizzontale per C`], explain: `Dalle linee base ai vertici posteriori.` },
      { type: `mc`, q: `Quale segmento è in vera grandezza?`, options: [`Quello sulla linea di terra`, `Quello vicino all'orizzonte`, `Quello verticale lontano`], answer: 0, explain: `Un segmento sul quadro non subisce riduzione.` },
      { type: `mc`, q: `Chi scrisse il De pictura nel 1435?`, options: [`Leon Battista Alberti`, `Piero della Francesca`, `Dürer`], answer: 0, explain: `Alberti, Firenze.` },
      { type: `tf`, q: `Le rette verticali restano verticali nella prospettiva a due punti.`, answer: true, explain: `Sono parallele al quadro.` },
      { type: `mc`, q: `In prospettiva accidentale, dove si trova il punto di vista se gli spigoli sono ortogonali?`, options: [`Sulla semicirconferenza di diametro F1F2`, `Sul punto principale`, `Sulla linea di terra`], answer: 0, explain: `Gli spigoli ortogonali richiedono un angolo retto in PV.` }
    ]
  }
});
