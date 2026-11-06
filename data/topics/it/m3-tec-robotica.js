TOPIC('it', {
  id: `m3-tec-robotica`,
  title: `Robotica e automazione`,
  intro: `Un braccio meccanico che salda le auto, un robot aspirapolvere che evita il divano, un rover che esplora Marte, il cancello che si apre da solo. Sono tutti sistemi <b>automatici</b>: <b>percepiscono</b> l'ambiente con i <b>sensori</b>, <b>decidono</b> con un <b>controllore</b> e <b>agiscono</b> con gli <b>attuatori</b>. Scopriamo come funzionano e come si "ragiona" da progettisti di robot. 🦾🤖`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Automazione e robot: che differenza c'è?`,
      html: `<p>L'<b>automazione</b> è l'uso di macchine e sistemi di controllo per svolgere compiti <b>senza l'intervento continuo</b> di una persona: una lavatrice, un semaforo, una linea di imbottigliamento.</p>
<p>Un <b>robot</b> è una macchina automatica <b>programmabile</b> e <b>versatile</b>: può svolgere compiti diversi cambiando il programma, e spesso si muove nello spazio. La lavatrice è automatica ma fa sempre la stessa cosa; un braccio robotico oggi salda, domani vernicia o impacchetta.</p>
<p>Ogni robot segue il ciclo <b>percepisci ➜ elabora ➜ agisci</b> (in inglese <i>sense – think – act</i>):</p>
<ol>
<li><b>Sensori</b>: raccolgono informazioni (distanza, luce, contatto, posizione…).</li>
<li><b>Controllore</b>: un computer o microcontrollore esegue il <b>programma</b> e decide che cosa fare.</li>
<li><b>Attuatori</b>: trasformano il comando in azione (motori, pistoni, pinze, luci, altoparlanti).</li>
</ol>
<p>Servono poi una <b>fonte di energia</b> (batteria, rete elettrica, aria compressa) e una <b>struttura meccanica</b> (telaio, giunti, ruote, ingranaggi).</p>`
    },
    {
      type: `svg`, title: `Le parti di un robot mobile`,
      caption: `Sensori (occhi e orecchie), controllore (cervello), attuatori (muscoli), batteria (energia), struttura (scheletro).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f1f5f9"/>
<rect x="200" y="110" width="200" height="110" rx="16" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<rect x="250" y="135" width="100" height="45" rx="6" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="300" y="164" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">CPU</text>
<rect x="225" y="190" width="60" height="22" rx="4" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<circle cx="230" cy="235" r="28" fill="#1e293b"/><circle cx="230" cy="235" r="10" fill="#64748b"/>
<circle cx="370" cy="235" r="28" fill="#1e293b"/><circle cx="370" cy="235" r="10" fill="#64748b"/>
<rect x="395" y="125" width="40" height="40" rx="6" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>
<circle cx="415" cy="137" r="7" fill="#e0f2fe"/><circle cx="415" cy="155" r="7" fill="#e0f2fe"/>
<line x1="300" y1="110" x2="300" y2="70" stroke="#334155" stroke-width="4"/>
<circle cx="300" cy="62" r="10" fill="#ef4444"/>
<rect x="160" y="140" width="40" height="18" rx="4" fill="#f97316" stroke="#7c2d12" stroke-width="2"/>
<g font-size="15" font-weight="bold">
<text x="470" y="140" fill="#1e40af">sensore a</text><text x="470" y="160" fill="#1e40af">ultrasuoni</text>
<text x="330" y="55" fill="#b91c1c">LED di stato</text>
<text x="300" y="30" fill="#166534" text-anchor="middle">controllore = "cervello"</text>
<text x="20" y="150" fill="#9a3412">sensore di</text><text x="20" y="170" fill="#9a3412">contatto</text>
<text x="20" y="250" fill="#0f172a">motori + ruote</text><text x="20" y="270" fill="#0f172a">(attuatori)</text>
<text x="430" y="250" fill="#854d0e">batteria</text>
</g>
<line x1="300" y1="36" x2="300" y2="50" stroke="#166534" stroke-width="2"/>
<line x1="465" y1="145" x2="437" y2="145" stroke="#1e40af" stroke-width="2"/>
<line x1="105" y1="155" x2="158" y2="150" stroke="#9a3412" stroke-width="2"/>
<line x1="135" y1="255" x2="200" y2="240" stroke="#0f172a" stroke-width="2"/>
<line x1="428" y1="245" x2="288" y2="205" stroke="#854d0e" stroke-width="2"/>
</svg>`
    },
    {
      type: `text`, title: `2. Sensori: i sensi del robot`,
      html: `<table>
<tr><th>Sensore</th><th>Che cosa misura</th><th>Esempio di uso</th></tr>
<tr><td>Fine corsa / pulsante</td><td>contatto (sì/no)</td><td>il robot aspirapolvere urta un mobile</td></tr>
<tr><td>Ultrasuoni</td><td>distanza, con l'eco (come i pipistrelli)</td><td>evitare gli ostacoli</td></tr>
<tr><td>Infrarossi</td><td>riflessione della luce IR, vicinanza</td><td>seguire una linea nera, sensore anti-caduta dalle scale</td></tr>
<tr><td>Encoder</td><td>quanto ha girato un motore</td><td>sapere di quanti cm si è spostato</td></tr>
<tr><td>Giroscopio / accelerometro</td><td>rotazione, inclinazione</td><td>droni e robot che stanno in equilibrio</td></tr>
<tr><td>Telecamera</td><td>immagini</td><td>riconoscere oggetti (con l'IA)</td></tr>
<tr><td>LiDAR</td><td>distanze con impulsi laser, mappa 3D</td><td>auto a guida autonoma, rover</td></tr>
</table>`
    },
    {
      type: `text`, title: `3. Attuatori: i muscoli del robot`,
      html: `<ul>
<li><b>Motore a corrente continua (DC)</b>: gira veloce finché è alimentato; per ruote e ventole. Spesso ha un <b>riduttore</b> (ingranaggi) che diminuisce la velocità e aumenta la forza.</li>
<li><b>Servomotore</b>: ruota fino a un <b>angolo preciso</b> (per esempio da 0° a 180°) e lo mantiene; per bracci, timoni, pinze.</li>
<li><b>Motore passo-passo</b> (stepper): avanza a <b>scatti</b> precisi (es. 200 passi = 1 giro, cioè 1,8° a passo); per stampanti 3D e macchine CNC.</li>
<li><b>Pistoni pneumatici</b> (aria compressa) e <b>idraulici</b> (olio): forze grandi, per presse ed escavatori.</li>
<li><b>Elettrovalvole, relè</b>: aprono e chiudono flussi di acqua, aria o corrente.</li>
<li>Anche <b>LED, display e altoparlanti</b> sono attuatori: "agiscono" comunicando.</li>
</ul>
<p><b>Gradi di libertà</b> (GdL): il numero di movimenti indipendenti che un robot può fare. Un braccio industriale tipico ha <b>6 gradi di libertà</b> (6 giunti che ruotano): può portare l'utensile in qualsiasi posizione e con qualsiasi orientamento nel suo spazio di lavoro. Il braccio umano, dalla spalla al polso, ne ha 7.</p>`
    },
    {
      type: `3d`, title: `Un braccio robotico a giunti`,
      scene: `molecule`,
      options: {
        atoms: [
          { x: 0, y: -1.8, z: 0, r: 0.55, color: `#475569`, label: `base (rotazione)` },
          { x: 0, y: -1.0, z: 0, r: 0.35, color: `#f97316`, label: `spalla` },
          { x: 0.9, y: 0.2, z: 0, r: 0.3, color: `#f97316`, label: `gomito` },
          { x: 1.9, y: 0.6, z: 0.3, r: 0.25, color: `#f97316`, label: `polso` },
          { x: 2.5, y: 0.9, z: 0.4, r: 0.2, color: `#3b82f6`, label: `pinza (end effector)` },
          { x: 2.6, y: 0.3, z: 0.5, r: 0.18, color: `#22c55e`, label: `oggetto` }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4]]
      },
      caption: `Ogni sfera arancione è un giunto mosso da un servomotore. Ruota la scena: la base gira, spalla e gomito alzano il braccio, il polso orienta la pinza.`
    },
    {
      type: `quiz`, title: `Mini-quiz: sensore o attuatore?`,
      questions: [
        { type: `mc`, q: `Un servomotore è…`, options: [`un sensore`, `un attuatore`, `una batteria`], answer: 1, explain: `Il servomotore produce movimento: è un attuatore.` },
        { type: `mc`, q: `Quale sensore misura la distanza con l'eco?`, options: [`Ultrasuoni`, `Termistore`, `Microfono`], answer: 0, explain: `Il sensore a ultrasuoni emette un suono e misura quanto tempo impiega l'eco a tornare.` },
        { type: `num`, q: `Un motore passo-passo fa 200 passi per giro. Di quanti gradi ruota a ogni passo?`, answer: 1.8, tol: 0.01, unit: `°`, explain: `360° ÷ 200 = 1,8°.` }
      ]
    },
    {
      type: `widget`, title: `Gioco: sensori, controllori, attuatori`,
      widget: `classify`,
      options: {
        groups: [`Sensore 👁️`, `Controllore 🧠`, `Attuatore 💪`],
        items: [
          [`📏 sensore a ultrasuoni`, 0], [`📷 telecamera`, 0], [`🌡️ termistore`, 0], [`🔘 fine corsa`, 0],
          [`🖥️ microcontrollore (Arduino)`, 1], [`🏭 PLC di fabbrica`, 1],
          [`⚙️ motore DC`, 2], [`🦾 servomotore`, 2], [`🔧 pistone pneumatico`, 2], [`🔊 altoparlante`, 2]
        ]
      },
      caption: `Ricorda il ciclo: percepisci (sensore) ➜ elabora (controllore) ➜ agisci (attuatore).`
    },
    {
      type: `text`, title: `4. Il controllo: ad anello aperto e ad anello chiuso`,
      html: `<p><b>Anello aperto</b> (<i>open loop</i>): il controllore dà il comando e <b>non controlla il risultato</b>. Esempio: il tostapane con il timer. Se il pane è più spesso, esce poco tostato: il tostapane non lo sa.</p>
<p><b>Anello chiuso</b> (<i>closed loop</i>, con <b>retroazione</b> o <i>feedback</i>): un sensore <b>misura il risultato</b> e il controllore lo confronta con l'<b>obiettivo</b> (il <i>set-point</i>), correggendo di continuo. Esempio: il <b>termostato</b>. Obiettivo 20 °C ➜ il sensore misura 18 °C ➜ accende la caldaia ➜ arrivato a 20 °C la spegne.</p>
<p>Il controllo può essere:</p>
<ul>
<li><b>ON/OFF</b> (tutto o niente): semplice, ma il valore "oscilla" sopra e sotto l'obiettivo;</li>
<li><b>proporzionale</b>: più sei lontano dall'obiettivo, più forte è la correzione (come quando freni dolcemente avvicinandoti allo stop). I sistemi industriali usano spesso il controllo <b>PID</b>, che è un'evoluzione di questa idea.</li>
</ul>`
    },
    {
      type: `svg`, title: `Schema a blocchi: anello chiuso`,
      caption: `Il sensore "chiude l'anello": il risultato torna indietro e viene confrontato con l'obiettivo.`,
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<rect x="15" y="70" width="95" height="56" rx="10" fill="#a855f7"/>
<text x="62" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Obiettivo</text>
<text x="62" y="115" font-size="13" fill="#fff" text-anchor="middle">20 °C</text>
<circle cx="150" cy="98" r="20" fill="#fff" stroke="#0f172a" stroke-width="3"/>
<text x="150" y="105" font-size="20" text-anchor="middle" fill="#0f172a">−</text>
<rect x="200" y="70" width="110" height="56" rx="10" fill="#22c55e"/>
<text x="255" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Controllore</text>
<text x="255" y="115" font-size="12" fill="#fff" text-anchor="middle">decide</text>
<rect x="340" y="70" width="110" height="56" rx="10" fill="#f97316"/>
<text x="395" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Attuatore</text>
<text x="395" y="115" font-size="12" fill="#fff" text-anchor="middle">caldaia</text>
<rect x="480" y="70" width="105" height="56" rx="10" fill="#ef4444"/>
<text x="532" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Ambiente</text>
<text x="532" y="115" font-size="12" fill="#fff" text-anchor="middle">la stanza</text>
<rect x="320" y="180" width="140" height="50" rx="10" fill="#3b82f6"/>
<text x="390" y="211" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Sensore 🌡️</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<line x1="110" y1="98" x2="130" y2="98"/><line x1="170" y1="98" x2="198" y2="98"/><line x1="310" y1="98" x2="338" y2="98"/><line x1="450" y1="98" x2="478" y2="98"/>
<polyline points="532,126 532,205 462,205"/><polyline points="320,205 150,205 150,118"/>
</g>
<text x="160" y="60" font-size="13" fill="#0f172a">errore</text>
<text x="230" y="245" font-size="13" fill="#1e40af" font-weight="bold">retroazione (feedback): misura reale 18 °C</text>
</svg>`
    },
    {
      type: `text`, title: `5. Programmare un robot: l'esempio del segui-linea`,
      html: `<p>Un robot <b>segui-linea</b> ha due sensori a infrarossi sotto il muso, uno a sinistra e uno a destra, e due motori. La linea nera assorbe la luce IR, il pavimento bianco la riflette. Il programma (in <b>pseudocodice</b>) è un ciclo infinito:</p>
<pre>RIPETI PER SEMPRE
  SE sinistro vede bianco E destro vede bianco
     ALLORA vai dritto (motori uguali)
  ALTRIMENTI SE sinistro vede nero
     ALLORA gira a sinistra (rallenta il motore sinistro)
  ALTRIMENTI SE destro vede nero
     ALLORA gira a destra (rallenta il motore destro)
FINE RIPETI</pre>
<p>Il robot legge i sensori decine di volte al secondo: è un piccolo <b>anello chiuso</b>. Con Scratch, mBlock o la programmazione a blocchi di Arduino si costruisce proprio così, con blocchi <b>"per sempre"</b> e <b>"se… allora… altrimenti"</b>.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: il robot aspirapolvere`,
      html: `<ul>
<li><b>Sensori</b>: paraurti con fine corsa (urti), infrarossi anti-caduta (scale), encoder sulle ruote, a volte LiDAR o telecamera per fare la <b>mappa</b> della casa.</li>
<li><b>Controllore</b>: decide il percorso, ricorda le zone già pulite, torna alla base quando la batteria è scarica.</li>
<li><b>Attuatori</b>: due motori per le ruote, motore della spazzola, ventola di aspirazione.</li>
</ul>
<p>Quando la batteria scende sotto una soglia (per esempio 15%), il programma cambia obiettivo: "torna alla base". È un esempio di <b>decisione basata sui sensori</b>.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: la fabbrica automatica (Industria 4.0)`,
      html: `<p>In una fabbrica di auto la scocca passa su un nastro trasportatore. Un sensore fotoelettrico la rileva ➜ il <b>PLC</b> (controllore logico programmabile, il "computer robusto" delle fabbriche) ferma il nastro ➜ sei bracci robotici saldano centinaia di punti in pochi secondi ➜ una telecamera controlla la qualità ➜ il nastro riparte.</p>
<p>Con l'<b>Industria 4.0</b> le macchine sono collegate in rete, inviano dati in tempo reale e segnalano da sole quando serve manutenzione. Accanto ai robot classici, chiusi in gabbie di sicurezza, ci sono i <b>cobot</b> (robot collaborativi), progettati per lavorare a fianco delle persone e fermarsi se le toccano.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la parola "robot" viene da un'opera teatrale?`,
      html: `<p>Nel <b>1920</b> lo scrittore ceco <b>Karel Čapek</b> scrisse il dramma <i>R.U.R. (Rossum's Universal Robots)</i>, in cui una fabbrica produce lavoratori artificiali. La parola <b>robot</b> gliela suggerì il fratello Josef: viene dal ceco <i>robota</i>, "lavoro forzato". Nel 1942 lo scrittore <b>Isaac Asimov</b> inventò le famose <b>Tre leggi della robotica</b> (la prima: un robot non può recare danno a un essere umano). Il primo robot industriale, <b>Unimate</b>, entrò in una fabbrica General Motors nel <b>1961</b>.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Leonardo progettò un robot e l'Italia ne ha uno famoso?`,
      html: `<p>Intorno al <b>1495</b> <b>Leonardo da Vinci</b> disegnò un <b>cavaliere meccanico</b> con armatura, mosso da pulegge e cavi, capace di alzarsi, muovere le braccia e la testa. Nel 2002 un ingegnere della NASA lo ha ricostruito: funzionava! Oggi all'<b>Istituto Italiano di Tecnologia</b> di Genova è stato sviluppato <b>iCub</b>, un robot umanoide grande come un bambino di 4 anni, usato in tutto il mondo per studiare come si impara.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li>Robot = macchina automatica <b>programmabile</b>: sensori ➜ controllore ➜ attuatori.</li>
<li>Sensori: contatto, ultrasuoni, infrarossi, encoder, giroscopio, telecamera, LiDAR.</li>
<li>Attuatori: motori DC, servomotori, passo-passo, pistoni, relè.</li>
<li>Anello aperto: nessun controllo del risultato. Anello chiuso: <b>retroazione</b> con un sensore.</li>
<li>Gradi di libertà = movimenti indipendenti (un braccio industriale ne ha di solito 6).</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `I robot sono più facili da capire se li paragoniamo a qualcosa che conosciamo già.`,
      tabs: [
        {
          label: `🧍 Il corpo umano`,
          html: `<p>Anche tu sei un "sistema ad anello chiuso"!</p>
<ul>
<li><b>Sensori</b> = occhi, orecchie, pelle, l'orecchio interno per l'equilibrio.</li>
<li><b>Controllore</b> = cervello e midollo spinale.</li>
<li><b>Attuatori</b> = muscoli.</li>
<li><b>Fili</b> = nervi; <b>energia</b> = cibo.</li>
</ul>
<p>Quando prendi un bicchiere, gli occhi controllano continuamente la mano e il cervello corregge il movimento: è retroazione. Prova a prenderlo a occhi chiusi: diventa un anello aperto, ed è molto più difficile!</p>`
        },
        {
          label: `🚿 La doccia`,
          html: `<p>Regolare la temperatura della doccia è un controllo ad anello chiuso fatto da te:</p>
<ol>
<li><b>Obiettivo</b>: acqua tiepida.</li>
<li><b>Sensore</b>: la tua mano sente l'acqua troppo fredda.</li>
<li><b>Controllore</b>: il cervello decide "più calda".</li>
<li><b>Attuatore</b>: la mano gira il miscelatore.</li>
<li>Si ricomincia: misura, confronta, correggi.</li>
</ol>
<p>Se giri troppo di colpo, l'acqua diventa bollente, poi giri troppo dall'altra parte… è l'<b>oscillazione</b> del controllo ON/OFF. Se giri poco alla volta, fai un controllo <b>proporzionale</b>.</p>`
        },
        {
          label: `🏷️ Riconosci le parti`,
          html: `<p>Tocca i punti del robot e scegli la parte giusta.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><rect x="110" y="110" width="180" height="100" rx="14" fill="#94a3b8" stroke="#334155" stroke-width="4"/><rect x="160" y="130" width="80" height="40" rx="6" fill="#22c55e"/><rect x="150" y="180" width="50" height="20" rx="4" fill="#facc15"/><circle cx="140" cy="225" r="26" fill="#1e293b"/><circle cx="260" cy="225" r="26" fill="#1e293b"/><rect x="290" y="130" width="36" height="36" rx="6" fill="#3b82f6"/><rect x="74" y="140" width="36" height="16" rx="4" fill="#f97316"/></svg>`,
            spots: [
              { x: 200, y: 150, label: `Controllore` },
              { x: 308, y: 148, label: `Sensore a ultrasuoni` },
              { x: 140, y: 225, label: `Ruota con motore` },
              { x: 175, y: 190, label: `Batteria` },
              { x: 92, y: 148, label: `Sensore di contatto` }
            ]
          }
        },
        {
          label: `🧩 Abbina robot e compito`,
          html: `<p>Ogni robot è progettato per un compito: collega i due elementi.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Braccio industriale a 6 assi`, `saldare le scocche delle auto`],
            [`Rover Perseverance`, `esplorare Marte dal 2021`],
            [`Robot aspirapolvere`, `pulire casa evitando ostacoli`],
            [`Cobot`, `lavorare accanto alle persone`],
            [`Drone`, `riprendere e ispezionare dall'alto`],
            [`Robot chirurgico`, `aiutare il medico in operazioni precise`]
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: la robotica`,
      nodes: [
        { id: `rob`, label: `Robot`, x: 50, y: 8, color: `#64748b`, html: `Macchina automatica programmabile.`, why: `La parola nasce nel 1920 con Karel Čapek (dal ceco <i>robota</i>, lavoro forzato). L'idea di macchine semoventi è antica: già Erone di Alessandria (I secolo d.C.) descrisse automi a vapore e a contrappesi.` },
        { id: `sens`, label: `Sensori`, x: 15, y: 32, color: `#3b82f6`, html: `Percepiscono l'ambiente.`, why: `Molti sensori imitano la natura: gli ultrasuoni copiano l'ecolocalizzazione dei pipistrelli; la telecamera l'occhio. Trasformano una grandezza fisica in un segnale elettrico.` },
        { id: `ctrl`, label: `Controllore`, x: 50, y: 32, color: `#22c55e`, html: `Esegue il programma e decide.`, why: `Dagli anni '70 i microprocessori (il primo, Intel 4004 del 1971, il cui progetto fu guidato dall'italiano Federico Faggin) hanno reso i controllori piccoli ed economici. Nel 1968 nacque il PLC per le fabbriche.` },
        { id: `att`, label: `Attuatori`, x: 85, y: 32, color: `#f97316`, html: `Motori, servo, pistoni: producono l'azione.`, why: `Il motore elettrico si basa sull'elettromagnetismo scoperto da Ørsted (1820) e Faraday (1821): una corrente in un campo magnetico produce una forza.` },
        { id: `ciclo`, label: `Percepisci-elabora-agisci`, x: 50, y: 55, color: `#a855f7`, html: `Il ciclo che si ripete continuamente.`, why: `È lo schema base di ogni sistema intelligente, naturale o artificiale: anche un animale percepisce, decide e si muove.` },
        { id: `feed`, label: `Retroazione`, x: 20, y: 78, color: `#ef4444`, html: `Il sensore misura il risultato e lo confronta con l'obiettivo.`, why: `Uno dei primi esempi fu il <b>regolatore centrifugo</b> della macchina a vapore di James Watt (1788). Nel 1948 Norbert Wiener fondò la <b>cibernetica</b>, la scienza del controllo e della comunicazione negli animali e nelle macchine.` },
        { id: `gdl`, label: `Gradi di libertà`, x: 50, y: 82, color: `#eab308`, html: `Movimenti indipendenti del robot.`, why: `Un oggetto rigido nello spazio ha 6 gradi di libertà (3 spostamenti + 3 rotazioni): per questo un braccio con 6 giunti può raggiungere ogni posizione e orientamento nel suo spazio di lavoro.` },
        { id: `auto`, label: `Automazione e Industria 4.0`, x: 82, y: 78, color: `#0ea5e9`, html: `Fabbriche con macchine collegate in rete.`, why: `Dopo la meccanizzazione (vapore), l'elettricità e l'informatica, la "quarta rivoluzione industriale" collega macchine, sensori e dati via Internet. Il termine Industrie 4.0 nacque in Germania nel 2011.` }
      ],
      edges: [
        [`rob`, `sens`, `ha`], [`rob`, `ctrl`, `ha`], [`rob`, `att`, `ha`], [`sens`, `ciclo`, `percepisci`], [`ctrl`, `ciclo`, `elabora`], [`att`, `ciclo`, `agisci`],
        [`ciclo`, `feed`, `con`], [`att`, `gdl`, `definiscono`], [`rob`, `auto`, `in fabbrica`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: controllo e programmazione`,
      questions: [
        { type: `mc`, q: `Un tostapane con timer è un sistema…`, options: [`ad anello aperto`, `ad anello chiuso`], answer: 0, explain: `Non misura quanto è tostato il pane: anello aperto.` },
        { type: `mc`, q: `Nel segui-linea, se il sensore destro vede la linea nera, il robot deve…`, options: [`girare a destra`, `girare a sinistra`, `fermarsi per sempre`], answer: 0, explain: `La linea si sta spostando verso destra: il robot gira a destra per seguirla.` },
        { type: `tf`, q: `Il termostato di casa usa la retroazione.`, answer: true, explain: `Misura la temperatura e la confronta con quella desiderata.` }
      ]
    }
  ],
  glossary: [
    { t: `Robot`, d: `Macchina automatica programmabile che percepisce, elabora e agisce.` },
    { t: `Automazione`, d: `Uso di macchine e controlli per svolgere compiti senza intervento umano continuo.` },
    { t: `Sensore`, d: `Dispositivo che rileva una grandezza fisica e la trasforma in segnale.` },
    { t: `Attuatore`, d: `Dispositivo che trasforma un comando in azione (motore, pistone…).` },
    { t: `Controllore`, d: `Computer, microcontrollore o PLC che esegue il programma.` },
    { t: `Retroazione (feedback)`, d: `Il risultato viene misurato e usato per correggere l'azione.` },
    { t: `Servomotore`, d: `Motore che ruota fino a un angolo preciso e lo mantiene.` },
    { t: `Gradi di libertà`, d: `Numero di movimenti indipendenti di un meccanismo.` },
    { t: `PLC`, d: `Controllore logico programmabile, usato nelle fabbriche.` },
    { t: `Cobot`, d: `Robot collaborativo, progettato per lavorare vicino alle persone.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `order`, q: `Metti in ordine il ciclo di funzionamento di un robot.`, items: [`Il sensore percepisce`, `Il controllore elabora`, `L'attuatore agisce`], explain: `Percepisci ➜ elabora ➜ agisci.` },
      { type: `mc`, q: `Che cosa distingue un robot da una semplice macchina automatica?`, options: [`È più grande`, `È programmabile per compiti diversi`, `Funziona a batteria`], answer: 1, explain: `Il robot è versatile e riprogrammabile.` },
      { type: `mc`, q: `Quale attuatore usa una stampante 3D per movimenti molto precisi?`, options: [`Motore passo-passo`, `Pistone idraulico`, `Altoparlante`], answer: 0, explain: `Lo stepper avanza a scatti di angolo noto.` },
      { type: `num`, q: `Un servomotore va da 0° a 180°. Se è a metà corsa, a quanti gradi si trova?`, answer: 90, tol: 0, unit: `°`, explain: `180 ÷ 2 = 90°.` },
      { type: `num`, q: `Un motore gira a 3000 giri al minuto. Con un riduttore 1:50, quanti giri al minuto fa la ruota?`, answer: 60, tol: 0, unit: `giri/min`, explain: `3000 ÷ 50 = 60 giri al minuto (ma con 50 volte più forza).` },
      { type: `tf`, q: `In un sistema ad anello aperto il risultato viene misurato e corretto.`, answer: false, explain: `Questo è l'anello chiuso; l'anello aperto non controlla il risultato.` },
      { type: `tf`, q: `Un braccio industriale tipico ha 6 gradi di libertà.`, answer: true, explain: `6 giunti: 3 per la posizione e 3 per l'orientamento dell'utensile.` },
      { type: `text`, q: `Da quale lingua viene la parola "robot"?`, answer: [`ceco`, `dal ceco`, `lingua ceca`, `cecoslovacco`], explain: `Dal ceco robota (lavoro forzato), nel dramma R.U.R. di Karel Čapek (1920).` },
      { type: `mc`, q: `A cosa serve il sensore anti-caduta di un robot aspirapolvere?`, options: [`A non cadere dalle scale`, `A misurare la polvere`, `A ricaricare la batteria`], answer: 0, explain: `Un sensore a infrarossi rivolto in basso rileva il vuoto.` },
      { type: `mc`, q: `Che cos'è un cobot?`, options: [`Un robot giocattolo`, `Un robot che lavora a fianco delle persone in sicurezza`, `Un robot sottomarino`], answer: 1, explain: `Cobot = collaborative robot.` },
      { type: `mc`, q: `Quale esempio è un controllo ad anello chiuso?`, options: [`Il cruise control che mantiene la velocità dell'auto`, `Un timer da cucina`, `Un ventilatore con interruttore`], answer: 0, explain: `Il cruise control misura la velocità e corregge l'acceleratore.` },
      { type: `text`, q: `Quale genio italiano disegnò un cavaliere meccanico verso il 1495?`, answer: [`leonardo`, `leonardo da vinci`], explain: `Leonardo da Vinci.` }
    ]
  }
});
