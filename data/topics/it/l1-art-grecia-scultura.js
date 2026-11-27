TOPIC('it', {
  id: `l1-art-grecia-scultura`,
  title: `La scultura greca`,
  intro: `Dai primi giovani rigidi con il "sorriso arcaico" alla Nike che sembra volare sulla prua di una nave: in meno di cinque secoli la scultura greca inventa il <b>movimento</b>, l'<b>anatomia</b>, l'<b>espressione</b> e l'idea stessa di <b>bellezza ideale</b>. Ogni generazione di artisti risolve un problema: come rendere il corpo in equilibrio? come rappresentare un'azione? come far "sentire" un'emozione? Seguiamo questa corsa verso il realismo, scultore per scultore. 🗿🏛️`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. Una storia in sei tappe`,
      html: `<p>La scultura greca si divide in periodi, ciascuno con uno stile riconoscibile:</p>
<table>
<tr><th>Periodo</th><th>Date (a.C.)</th><th>Caratteri</th></tr>
<tr><td><b>Geometrico</b></td><td>circa 900-700</td><td>piccole statuette di bronzo e terracotta, figure stilizzate</td></tr>
<tr><td><b>Arcaico</b></td><td>circa 650-480</td><td>kouroi e korai: rigidi, frontali, simmetrici; sorriso arcaico</td></tr>
<tr><td><b>Severo</b></td><td>circa 480-450</td><td>espressione seria, peso su una gamba; gesto e anatomia più liberi</td></tr>
<tr><td><b>Classico</b></td><td>circa 450-400</td><td>Mirone, Policleto, Fidia: equilibrio, armonia, bellezza ideale</td></tr>
<tr><td><b>Tardo classico</b></td><td>circa 400-323</td><td>Prassitele, Skopas, Lisippo: grazia, passione, nuovo canone</td></tr>
<tr><td><b>Ellenistico</b></td><td>323-31</td><td>dopo Alessandro Magno: drammaticità, realismo, ritratto</td></tr>
</table>
<p>La maggior parte degli originali è perduta (le statue di bronzo furono fuse per ricavarne metallo): conosciamo molte opere solo da <b>copie romane</b> in marmo, spesso meno raffinate. Per questo i rari originali di bronzo, come i Bronzi di Riace, sono tesori.</p>
<p><b>Tecniche</b>: <b>marmo</b> (di Paro, del Pentelico) lavorato a scalpello e dipinto a colori; <b>bronzo</b> a <b>cera persa</b> (si modella la statua in cera, la si avvolge d'argilla, si scioglie la cera e si cola il bronzo fuso); <b>crisoelefantina</b> (oro e avorio su anima di legno) per le statue di culto.</p>`
    },
    {
      type: `widget`, title: `Una linea del tempo della scultura greca`,
      widget: `timeline`,
      options: { unit: `anni`, events: [
        { year: -530, label: `Kouros di Anavyssos`, icon: `🗿` },
        { year: -480, label: `Efebo di Crizio`, icon: `🧍` },
        { year: -460, label: `Bronzi di Riace`, icon: `🛡️` },
        { year: -450, label: `Discobolo di Mirone`, icon: `🥏` },
        { year: -440, label: `Doriforo di Policleto`, icon: `📏` },
        { year: -438, label: `Atena Parthenos (Fidia)`, icon: `🏛️` },
        { year: -350, label: `Afrodite Cnidia (Prassitele)`, icon: `💫` },
        { year: -330, label: `Apoxyomenos (Lisippo)`, icon: `🧼` },
        { year: -190, label: `Nike di Samotracia`, icon: `🪽` },
        { year: -170, label: `Altare di Pergamo`, icon: `⚔️` }
      ] },
      caption: `Dalla rigidità arcaica alla drammaticità ellenistica in circa 350 anni (date indicative).`
    },
    {
      type: `text`, title: `2. Il periodo arcaico: kouroi e korai`,
      html: `<p>Il <b>kouros</b> (plurale <i>kouroi</i>, "giovane") è un giovane nudo, in piedi, a figura intera, a grandezza naturale o colossale (anche oltre 3 m); la <b>kore</b> (plurale <i>korai</i>, "fanciulla") è una ragazza vestita con lungo chitone e mantello.</p>
<p><b>Caratteri del kouros</b>, derivati dalla statuaria egizia (da cui i Greci imparano a lavorare la pietra a blocchi squadrati e a fissare le proporzioni):</p>
<ul>
<li><b>frontalità</b> assoluta e rigida simmetria rispetto a un asse verticale;</li>
<li>braccia aderenti ai fianchi, <b>pugni chiusi</b>; <b>gamba sinistra avanti</b>, ma senza spostamento di peso: il corpo non si piega;</li>
<li>il <b>sorriso arcaico</b>: le labbra leggermente curve verso l'alto, forse per dare "vita" al volto;</li>
<li>anatomia stilizzata (muscoli "disegnati" come motivi decorativi).</li>
</ul>
<p>A differenza delle statue egizie, tuttavia, il kouros è <b>nudo</b> e <b>staccato dal blocco</b>: non c'è il pilastro dorsale. Sono statue <b>votive</b> (offerte al santuario di un dio, per esempio Apollo) o <b>funerarie</b> (sulla tomba di giovani aristocratici). Esempio: il <b>Kouros di Anavyssos</b> (circa 530 a.C., Museo Archeologico Nazionale di Atene), che marcava la tomba del giovane guerriero <b>Kroisos</b> e porta un'iscrizione: "Fermati e piangi presso la tomba di Kroisos, caduto fra i primi combattenti".</p>
<p>Le <b>korai</b> sono il corrispondente femminile: vestite (le donne non venivano rappresentate nude fino a Prassitele), con ricche pieghe di stoffa e tracce di colore, per esempio la <b>Kore di Antenore</b> (circa 520 a.C., Acropoli di Atene).</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: il periodo arcaico`,
      questions: [
        { type: `mc`, q: `Che cos'è un kouros?`, options: [`Un giovane nudo, rigido e frontale`, `Una fanciulla vestita`, `Un vaso decorato`], answer: 0, explain: `Un giovane nudo; la kore è la fanciulla vestita.` },
        { type: `mc`, q: `Quale caratteristica distingue il kouros arcaico?`, options: [`Simmetria e frontalità`, `Torsione del busto`, `Espressione di dolore`], answer: 0, explain: `Il corpo è rigido, frontale, simmetrico: a questo si aggiunge il sorriso arcaico.` },
        { type: `tf`, q: `Il kouros di Anavyssos serviva da monumento funebre.`, answer: true, explain: `Segnava la tomba di Kroisos, giovane guerriero.` }
      ]
    },
    {
      type: `text`, title: `3. Lo stile severo: nasce il movimento`,
      html: `<p>Dopo le guerre persiane (490-479 a.C.) cambia il clima: Atene è democratica e fiera, e la scultura si fa più <b>seria</b> (da cui "stile severo", con volti senza sorriso) e più <b>libera nel corpo</b>. La grande novità è il <b>contrapposto</b>: il peso del corpo si scarica su <b>una sola gamba</b>, e l'altra si rilassa; di conseguenza i fianchi e le spalle si inclinano.</p>
<ul>
<li><b>Efebo di Crizio</b> (circa 480 a.C., Museo dell'Acropoli): primo esempio di contrapposto, la testa si volge leggermente.</li>
<li><b>Auriga di Delfi</b> (circa 474 a.C., bronzo, Museo di Delfi): un giovane conduttore di quadriga vincitore, parte di un gruppo; occhi in pasta vitrea; panneggio severo con pieghe verticali come le scanalature di una colonna.</li>
<li><b>Zeus (o Poseidone) di Capo Artemisio</b> (circa 460 a.C., bronzo, Museo Archeologico di Atene): nudo atleta con le braccia aperte in un gesto di lancio.</li>
<li><b>Bronzi di Riace</b> (circa 460-450 a.C.): due statue di guerrieri nudi in bronzo, alte circa 2 m, ritrovate il <b>16 agosto 1972</b> dal subacqueo dilettante Stefano Mariottini nel mare di Riace Marina (Calabria), a pochi metri di profondità. Originariamente avevano ciglia di bronzo, denti d'argento, labbra di rame, occhi in avorio e pasta vitrea; sono ora al <b>Museo Nazionale della Magna Grecia</b> di Reggio Calabria. Autori incerti: Fidia, Mirone, Agelada (le attribuzioni sono dibattute); sono i primi esempi di perfetta <b>anatomia</b> e di mutamento di peso.</li>
</ul>
<p>Lo stile severo comprende anche le sculture del tempio di <b>Zeus a Olimpia</b> (circa 460 a.C.): il frontone orientale con i preparativi di una corsa di carri, quello occidentale con la lotta tra Lapiti e Centauri.</p>`
    },
    {
      type: `svg`, title: `Tre modi di stare in piedi`,
      caption: `Il kouros è rigido e simmetrico (spalle e fianchi orizzontali). Il Doriforo applica il chiasmo: la gamba che regge il peso è opposta al braccio teso, e spalle e fianchi si inclinano in direzioni opposte. Il Hermes di Prassitele aggiunge la curva a S, con un appoggio.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fff7ed"/>
<line x1="20" y1="262" x2="580" y2="262" stroke="#78350f" stroke-width="3"/>
<g stroke="#1e293b" stroke-width="5" stroke-linecap="round" fill="none">
<circle cx="100" cy="58" r="17" fill="#fde68a"/>
<line x1="100" y1="75" x2="100" y2="92"/>
<line x1="72" y1="98" x2="128" y2="98" stroke="#dc2626"/>
<line x1="100" y1="98" x2="100" y2="170"/>
<line x1="84" y1="170" x2="116" y2="170" stroke="#2563eb"/>
<line x1="72" y1="98" x2="66" y2="172"/><line x1="128" y1="98" x2="134" y2="172"/>
<line x1="88" y1="170" x2="88" y2="260"/><line x1="112" y1="170" x2="112" y2="260"/>
</g>
<line x1="100" y1="30" x2="100" y2="262" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<text x="100" y="288" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">KOUROS (arcaico)</text>
<text x="100" y="22" font-size="14" fill="#334155" text-anchor="middle">simmetrico, rigido</text>
<g stroke="#1e293b" stroke-width="5" stroke-linecap="round" fill="none">
<circle cx="300" cy="60" r="17" fill="#fde68a"/>
<line x1="300" y1="77" x2="300" y2="92"/>
<line x1="270" y1="90" x2="330" y2="104" stroke="#dc2626"/>
<path d="M300 98 Q302 130 300 168"/>
<line x1="278" y1="176" x2="322" y2="164" stroke="#2563eb"/>
<line x1="322" y1="164" x2="318" y2="260"/>
<path d="M278 176 L266 218 L254 258"/>
<line x1="330" y1="104" x2="340" y2="170"/>
<path d="M270 90 L254 128 L252 148"/>
</g>
<line x1="248" y1="40" x2="248" y2="250" stroke="#92400e" stroke-width="3"/>
<text x="300" y="288" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">DORIFORO (classico)</text>
<text x="300" y="22" font-size="14" fill="#334155" text-anchor="middle">chiasmo: spalle e fianchi opposti</text>
<g stroke="#1e293b" stroke-width="5" stroke-linecap="round" fill="none">
<circle cx="478" cy="56" r="17" fill="#fde68a"/>
<path d="M480 74 C505 112 462 168 492 258"/>
<path d="M486 98 L526 118"/><path d="M486 98 L458 136"/>
<path d="M492 162 L520 200"/>
</g>
<rect x="540" y="110" width="26" height="150" fill="#a16207" stroke="#451a03" stroke-width="3"/>
<text x="505" y="288" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">HERMES (Prassitele)</text>
<text x="505" y="22" font-size="14" fill="#334155" text-anchor="middle">curva a S, appoggio al tronco</text>
<text x="20" y="130" font-size="14" fill="#dc2626">spalle</text><text x="20" y="196" font-size="14" fill="#2563eb">fianchi</text>
</svg>
`
    },
    {
      type: `text`, title: `4. Il Classico: Mirone, Policleto, Fidia`,
      html: `<p>Nella seconda metà del V secolo a.C. (l'età di Pericle) la scultura raggiunge un equilibrio perfetto tra naturalezza e idealizzazione. Tre grandi maestri:</p>
<p><b>Mirone di Eleutere</b> (attivo circa 480-440 a.C.) – il maestro del <b>movimento</b>. Opera celebre: il <b>Discobolo</b> (circa 450 a.C.), bronzo originale perduto, noto da copie romane in marmo (la migliore a Palazzo Massimo, Roma). Un atleta con il disco, <b>nell'istante prima del lancio</b>: il corpo ricurvo in avanti, il braccio indietro; il volto è calmo. La composizione è inscritta in un <b>arco</b> e vista di profilo, come un bassorilievo; il movimento, che nella realtà dura un secondo, è "fermato" nel punto di massima tensione e di equilibrio instabile.</p>
<p><b>Policleto di Argo</b> (attivo circa 460-420 a.C.) – il maestro delle <b>proporzioni</b>. Scrisse un trattato, il <b>Canone</b>, e lo illustrò con una statua, il <b>Doriforo</b> ("portatore di lancia", circa 450-440 a.C.; la copia migliore è al Museo Archeologico di Napoli, trovata a Pompei). Il <b>canone</b> è un sistema di rapporti numerici (<i>symmetria</i>) tra le parti: la <b>testa è un settimo dell'altezza</b> totale. Il Doriforo adotta il <b>chiasmo</b> (dal greco <i>chi</i>, la lettera X): braccio e gamba opposti sono tesi, le altre due rilassate, il torso e il bacino ruotati in direzioni opposte. È la posa più imitata della storia: sarà la base della scultura rinascimentale (Donatello, Michelangelo).</p>
<p><b>Fidia di Atene</b> (circa 490-430 a.C.) – il maestro della <b>grandezza</b>. Direttore dell'apparato decorativo del Partenone (metope, fregio, frontoni). Statue colossali: l'<b>Atena Promachos</b> in bronzo sull'Acropoli, l'<b>Atena Parthenos</b> (438 a.C.) e lo <b>Zeus di Olimpia</b> (circa 435 a.C., alto circa 13 m, in crisoelefantina, una delle <b>Sette meraviglie del mondo</b>). Sono perdute: le conosciamo da descrizioni e da copie ridotte. Il suo stile è maestoso, sereno, con panneggi che sembrano "bagnati", aderenti al corpo e mossi da pieghe fluide. Dopo una disputa politica contro Pericle, fu accusato (secondo Plutarco) di appropriazione indebita dell'oro e morì in carcere o in esilio.</p>`
    },
    {
      type: `example`, title: `Esempio: il canone di Policleto in pratica`,
      html: `<p>Se una persona è alta 1,75 m, secondo il canone di Policleto la <b>testa</b> è un settimo dell'altezza: 175 : 7 = <b>25 cm</b>. Perciò 7 teste sono 175 cm. (Oggi gli artisti di fumetti e di moda usano canoni di 8 teste o più, per figure più slanciate; i bambini ne hanno circa 5.) Il Doriforo è dunque una "tabella di misure" fatta di bronzo, che si poteva copiare per riprodurre il corpo ideale.</p>`
    },
    {
      type: `example`, title: `Esempio: leggere una statua con tre domande`,
      html: `<p>Davanti a una statua greca (in museo o in foto) fatti tre domande per datarla:</p>
<ol>
<li><b>Il peso</b>: è su due gambe in modo simmetrico (arcaico) o su una sola, con i fianchi inclinati (dal V secolo)?</li>
<li><b>Il volto</b>: sorride (arcaico), è serio e un po' chiuso (severo), è sereno e idealizzato (classico), è appassionato o tormentato (ellenistico)?</li>
<li><b>Lo spazio</b>: si guarda solo da davanti, o bisogna girarci intorno, con braccia e panneggio che escono dal blocco (Lisippo, ellenismo)?</li>
</ol>
<p>Applicalo ai Bronzi di Riace: peso su una gamba, volto serio, anatomia perfetta, ma ancora un'unica vista frontale: sono dello stile severo, circa 460-450 a.C.</p>`
    },
    {
      type: `decision`, title: `Quale istante scolpire? Il problema di Mirone`,
      html: `<p>Sei <b>Mirone</b>, verso il 450 a.C. Una statua è immobile, ma devi rappresentare un lanciatore del disco, cioè un atto <b>in movimento</b>. Puoi scegliere un solo istante.</p>`,
      question: `Quale istante scegli?`,
      options: [
        { label: `L'atleta in piedi, fermo, con il disco in mano`, outcome: `Un'immagine corretta ma statica: non dice nulla sul gesto dello sport.` },
        { label: `L'istante in cui è piegato all'indietro, subito prima del lancio`, outcome: `È la soluzione di Mirone: il corpo è nella posizione di massima tensione, in cui il passato (la rotazione indietro) e il futuro (il lancio) si incontrano: lo spettatore "vede" il movimento prima e dopo.` },
        { label: `Il disco già in volo e l'atleta con il braccio disteso`, outcome: `Mostra il risultato ma non l'azione, e per una statua è difficile da bilanciare.` }
      ],
      answer: 1,
      explain: `Mirone sceglie il momento di equilibrio instabile subito prima del lancio. La statua racchiude un "prima" e un "dopo" in un solo istante. Il volto è sereno: nel V secolo si crede che bellezza e ideale di misura (sophrosyne) escludano la smorfia dello sforzo. Gli artisti ellenistici supereranno questo limite.`
    },
    {
      type: `text`, title: `5. Il Tardo Classico: Prassitele, Skopas, Lisippo`,
      html: `<p>Nel IV secolo a.C. Atene esce impoverita dalla guerra del Peloponneso (431-404 a.C.): i temi non sono più la grandezza della città, ma la <b>sensibilità individuale</b>, le <b>emozioni</b> e la <b>grazia</b>.</p>
<ul>
<li><b>Prassitele</b> (Atene, attivo circa 370-330 a.C.): corpi morbidi, sguardi sognanti, marmo lucidissimo. La <b>curva prassitelica</b> è una posa a "S": il peso è spostato su un'anca e il corpo si appoggia a un sostegno. Opere: l'<b>Afrodite Cnidia</b> (circa 350 a.C.), la prima statua di una <b>dea completamente nuda a grandezza naturale</b> (per la città di Cnido; nota da copie come la Venere Colonna, ai Musei Vaticani); l'<b>Hermes con Dioniso fanciullo</b> (Olimpia), con il dio appoggiato a un tronco; l'<b>Apollo Sauroctono</b> (che uccide una lucertola).</li>
<li><b>Skopas</b> (di Paro, IV sec. a.C.): il <b>pathos</b>, l'espressione di passione e di dolore (la <b>Menade danzante</b>, con la testa all'indietro).</li>
<li><b>Lisippo</b> (di Sicione, attivo circa 370-310 a.C.): scultore di corte di <b>Alessandro Magno</b>. Cambia il canone: corpi più slanciati, <b>testa un ottavo</b> dell'altezza; le statue si possono guardare da <b>più lati</b> (invece che dal solo fronte). L'<b>Apoxyomenos</b> (l'atleta che si deterge dalla polvere con lo strigile, circa 330 a.C.; copia ai Musei Vaticani) ha un braccio proteso verso lo spettatore, rompendo il piano frontale. Lisippo avrebbe detto che gli antichi rappresentavano gli uomini <b>come erano</b>, lui <b>come appaiono</b>. Fece ritratti di Alessandro Magno.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la Venere di Milo non ha le braccia?`,
      html: `<p>Nel 1820, un contadino di nome Yorgos Kentrotas trovò nell'isola di <b>Milo</b> una statua di marmo di Afrodite (circa 150-125 a.C.), poi venduta alla Francia e portata al <b>Louvre</b>. Le braccia sono andate perdute in epoca antica, e si discute ancora quale fosse il gesto (forse reggeva una mela, o la veste, o uno specchio). Ironia: la statua è diventata più famosa proprio perché "incompleta".</p>`
    },
    {
      type: `text`, title: `6. L'Ellenismo: dramma, emozione, realismo`,
      html: `<p>Alla morte di <b>Alessandro Magno</b> (323 a.C.) il mondo greco si estende dall'Egitto all'India. Le nuove grandi città (Alessandria, Pergamo, Rodi) sono ricche e cosmopolite, e i re finanziano un'arte <b>spettacolare</b>: figure in torsione, espressioni forti, corpi di ogni età, anche brutti, malati o deformi (vecchi, bambini, pescatori); ritratti individuali; gruppi complessi per essere guardati da più lati.</p>
<ul>
<li><b>Nike di Samotracia</b> (circa 190 a.C., marmo di Paro, Louvre; trovata nel 1863 da Charles Champoiseau): la dea della Vittoria, senza testa né braccia, atterra su una <b>prua di nave</b>, con il vento che le schiaccia il panneggio al corpo e lo gonfia dietro. Forse celebrava una vittoria navale rodia. Oggi domina lo scalone Daru del Louvre.</li>
<li><b>Laocoonte e i suoi figli</b> (Agesandro, Atanodoro e Polidoro di Rodi, circa 40-20 a.C. o più antico; Musei Vaticani): il sacerdote troiano che aveva avvertito del cavallo di Troia viene strangolato da due serpenti mandati da Atena o da Apollo. Il gruppo, in un unico blocco di marmo (in realtà cinque pezzi), è di una violenza espressiva senza precedenti. Fu ritrovato a Roma il <b>14 gennaio 1506</b> nella vigna di Felice de Fredis, e subito esaminato da <b>Michelangelo</b> e Giuliano da Sangallo; influenzò profondamente il Rinascimento e il Barocco.</li>
<li><b>Altare di Pergamo</b> (circa 180-160 a.C., Pergamonmuseum di Berlino): il fregio lungo circa 113 m con la <b>Gigantomachia</b>, la lotta tra dèi e giganti, in altorilievo violento che esce dal piano.</li>
<li><b>Galata morente</b> (copia romana di un bronzo di Pergamo circa 230 a.C., Musei Capitolini, Roma): un guerriero celtico morente, rappresentato con dignità e dolore, un nemico visto con rispetto.</li>
</ul>`
    },
    {
      type: `svg`, title: `Come cambia la scultura: sintesi grafica`,
      caption: `Dalla regola alla passione: in basso la rigidità arcaica, al centro l'equilibrio del classico, in alto la drammaticità ellenistica. Ogni epoca aggiunge una dimensione: il peso (V sec.), la grazia (IV sec.), il dramma (III-I sec.).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="15" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="75" y="35">ARCAICO</text><text x="225" y="35">SEVERO</text><text x="375" y="35">CLASSICO</text><text x="525" y="35">ELLENISTICO</text>
</g>
<g stroke="#334155" stroke-width="2" stroke-dasharray="3 4"><line x1="150" y1="45" x2="150" y2="275"/><line x1="300" y1="45" x2="300" y2="275"/><line x1="450" y1="45" x2="450" y2="275"/></g>
<g stroke="#1e293b" stroke-width="5" stroke-linecap="round" fill="none">
<line x1="75" y1="70" x2="75" y2="230"/><circle cx="75" cy="62" r="10" fill="#fde68a"/>
<path d="M225 70 Q232 150 225 230"/><circle cx="225" cy="62" r="10" fill="#fde68a"/>
<path d="M375 70 C395 120 355 160 375 230"/><circle cx="375" cy="62" r="10" fill="#fde68a"/>
<path d="M530 70 C575 100 480 150 540 190 C560 205 510 220 520 235"/><circle cx="527" cy="60" r="10" fill="#fde68a"/>
</g>
<g font-size="14" fill="#334155" text-anchor="middle">
<text x="75" y="258">asse retto</text><text x="225" y="258">leggero spostamento</text><text x="375" y="258">curva a S</text><text x="525" y="258">torsione e dramma</text>
</g>
<text x="300" y="287" font-size="14" fill="#475569" text-anchor="middle">l'asse del corpo passa da dritto a curvo e infine a spirale</text>
</svg>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… i Bronzi di Riace sono stati restaurati due volte, e hanno un segreto?`,
      html: `<p>Dopo il ritrovamento nel 1972, i due guerrieri (Statua A e B) furono restaurati a Firenze, poi di nuovo a Reggio Calabria (2009-2013). All'interno si sono trovati residui delle <b>terre di fusione</b> (argille dell'area di Argo e di Atene), utili per capire dove furono fusi: secondo alcuni studi la Statua A potrebbe provenire da Argo e la Statua B da Atene. Nessuno sa ancora chi siano i personaggi, e perché finirono in mare: nave naufragata, o un carico gettato per alleggerire una nave.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li><b>Arcaico</b>: kouros e kore, frontali e simmetrici, sorriso arcaico (Anavyssos, circa 530 a.C.).</li>
<li><b>Severo</b>: contrapposto, volto serio (Efebo di Crizio, Auriga di Delfi, Bronzi di Riace).</li>
<li><b>Classico</b>: <b>Mirone</b> (Discobolo, movimento), <b>Policleto</b> (Doriforo, canone: testa = 1/7, chiasmo), <b>Fidia</b> (Partenone, Atena Parthenos, Zeus di Olimpia).</li>
<li><b>Tardo classico</b>: <b>Prassitele</b> (Afrodite Cnidia, curva a S), <b>Skopas</b> (pathos), <b>Lisippo</b> (Apoxyomenos, testa = 1/8).</li>
<li><b>Ellenismo</b>: Nike di Samotracia, Laocoonte, Altare di Pergamo, Venere di Milo.</li>
<li>Molti originali sono perduti: conosciamo copie romane.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se le date e i nomi si confondono, trova un modo per "sentire" le differenze.`,
      tabs: [
        {
          label: `🧍 Prova la posa`,
          html: `<p>Mettiti in piedi come un <b>kouros</b>: gambe unite, braccia lungo i fianchi, sguardo avanti: è rigido e stabile, ma innaturale. Ora spostati sulla gamba destra, rilassa la sinistra: l'anca destra sale e la spalla destra scende. Hai appena scoperto il <b>contrapposto</b> e il <b>chiasmo</b>. Infine, appoggiati a una mensola o a un muro: ecco la <b>curva prassitelica</b>.</p>`
        },
        {
          label: `📏 Il canone e le teste`,
          html: `<table>
<tr><th>Scultore</th><th>Testa nell'altezza</th><th>Effetto</th></tr>
<tr><td>Policleto (V sec.)</td><td>1/7</td><td>corpo robusto, atletico</td></tr>
<tr><td>Lisippo (IV sec.)</td><td>1/8</td><td>corpo più slanciato, elegante</td></tr>
</table>
<p>Per un'altezza di 1,76 m: Policleto → testa 25,1 cm; Lisippo → testa 22 cm.</p>`
        },
        {
          label: `🧩 Abbina scultore e opera`,
          html: `<p>Collega ogni scultore alla sua opera.</p>`,
          widget: `match`,
          options: { pairs: [[`Mirone`, `Discobolo`], [`Policleto`, `Doriforo`], [`Fidia`, `Atena Parthenos`], [`Prassitele`, `Afrodite Cnidia`], [`Lisippo`, `Apoxyomenos`], [`Agesandro, Atanodoro, Polidoro`, `Laocoonte`]] }
        },
        {
          label: `🗺️ Dove si trovano ora`,
          html: `<p>Ripassa dove sono conservate le opere più famose.</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `Bronzi di Riace`, back: `Reggio Calabria (Museo Nazionale della Magna Grecia)` },
            { front: `Nike di Samotracia`, back: `Louvre, Parigi` },
            { front: `Laocoonte`, back: `Musei Vaticani, Roma` },
            { front: `Altare di Pergamo`, back: `Pergamonmuseum, Berlino` },
            { front: `Doriforo (copia)`, back: `Museo Archeologico Nazionale, Napoli` },
            { front: `Discobolo (copia)`, back: `Palazzo Massimo, Roma` },
            { front: `Venere di Milo`, back: `Louvre, Parigi` }
          ] }
        }
      ]
    },
    {
      type: `3d`, title: `Dove e quando nacque ogni capolavoro`,
      scene: `spacetime`,
      options: {
        lat: [34, 42], lon: [14, 30], years: [-600, -100],
        places: [ { lat: 37.97, lon: 23.73, label: `Atene` }, { lat: 37.64, lon: 21.63, label: `Olimpia` }, { lat: 38.48, lon: 22.5, label: `Delfi` }, { lat: 36.43, lon: 28.22, label: `Rodi` }, { lat: 39.13, lon: 27.18, label: `Pergamo` } ],
        events: [
          { id: `a1`, lat: 37.73, lon: 23.93, year: -530, label: `Kouros di Anavyssos`, html: `Statua funeraria di Kroisos, giovane guerriero: stile arcaico, rigido e frontale.` },
          { id: `a2`, lat: 37.97, lon: 23.73, year: -480, label: `Efebo di Crizio`, html: `Primo esempio di contrapposto: il peso si sposta su una gamba.`, causes: [`a1`] },
          { id: `a3`, lat: 38.48, lon: 22.5, year: -474, label: `Auriga di Delfi`, html: `Bronzo severo a Delfi, offerta per una vittoria in una corsa di carri.`, causes: [`a2`] },
          { id: `a4`, lat: 37.97, lon: 23.73, year: -450, label: `Discobolo di Mirone`, html: `Il movimento fermato nell'istante di massima tensione.`, causes: [`a3`] },
          { id: `a5`, lat: 37.97, lon: 23.73, year: -438, label: `Atena Parthenos di Fidia`, html: `Statua colossale in oro e avorio nel Partenone.`, causes: [`a4`] },
          { id: `a6`, lat: 36.68, lon: 27.37, year: -350, label: `Afrodite Cnidia di Prassitele`, html: `Prima dea a grandezza naturale completamente nuda.`, causes: [`a5`] },
          { id: `a7`, lat: 40.5, lon: 25.5, year: -190, label: `Nike di Samotracia`, html: `La Vittoria alata sulla prua di una nave: dramma ellenistico.`, causes: [`a6`] },
          { id: `a8`, lat: 39.13, lon: 27.18, year: -170, label: `Altare di Pergamo`, html: `Fregio della Gigantomachia: altorilievo spettacolare.`, causes: [`a7`] }
        ]
      },
      caption: `Ogni freccia è una "eredità": ogni scultore parte dalle scoperte del precedente e le supera.`
    },
    {
      type: `conceptMap`, title: `Mappa: la scultura greca`,
      nodes: [
        { id: `scu`, label: `Scultura greca`, x: 50, y: 6, color: `#64748b`, html: `Dal kouros alla Nike di Samotracia.`, why: `Per i Greci la bellezza è proporzione e armonia: l'uomo è "misura di tutte le cose" (Protagora) e il corpo umano è il soggetto ideale.` },
        { id: `arc`, label: `Arcaico`, x: 14, y: 30, color: `#f59e0b`, html: `Kouroi e korai.`, why: `Modello egizio (frontalità, canone): i Greci lo adottano e ne fanno una statua libera e nuda.` },
        { id: `sev`, label: `Severo`, x: 38, y: 30, color: `#ef4444`, html: `Contrapposto.`, why: `Dopo la vittoria sui Persiani nasce il senso di libertà e di responsabilità del cittadino; il corpo si libera dalla rigidità.` },
        { id: `cla`, label: `Classico`, x: 62, y: 30, color: `#22c55e`, html: `Mirone, Policleto, Fidia.`, why: `Era di Pericle: armonia, equilibrio, idealizzazione. Il canone di Policleto fissa le proporzioni; Fidia dà grandezza e dignità.` },
        { id: `tar`, label: `Tardo classico`, x: 86, y: 30, color: `#a855f7`, html: `Prassitele, Skopas, Lisippo.`, why: `Dopo la guerra del Peloponneso cresce l'attenzione per l'individuo, le emozioni e la grazia.` },
        { id: `ell`, label: `Ellenismo`, x: 76, y: 62, color: `#0ea5e9`, html: `Nike, Laocoonte, Pergamo.`, why: `Con Alessandro Magno la Grecia si espande: capitali ricche (Pergamo, Alessandria, Rodi) vogliono arte spettacolare e realistica.` },
        { id: `mov`, label: `Movimento e peso`, x: 28, y: 62, color: `#14b8a6`, html: `Contrapposto, chiasmo, curva a S, torsione.`, why: `Ogni epoca risolve un problema: come rendere il peso (V sec.), la grazia (IV sec.), l'emozione (III-I sec.).` },
        { id: `ere`, label: `Eredità`, x: 52, y: 90, color: `#dc2626`, html: `Copie romane, Rinascimento, Neoclassicismo.`, why: `Roma copia i capolavori; il Rinascimento (Donatello, Michelangelo) li riscopre; Winckelmann nel 1764 li indica come modello della "nobile semplicità e quieta grandezza".` }
      ],
      edges: [
        [`scu`, `arc`, `1`], [`arc`, `sev`, `2`], [`sev`, `cla`, `3`], [`cla`, `tar`, `4`], [`tar`, `ell`, `5`], [`sev`, `mov`, `peso`], [`cla`, `mov`, `armonia`], [`ell`, `ere`, `lascia`], [`cla`, `ere`, `lascia`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: dal classico all'ellenismo`,
      questions: [
        { type: `mc`, q: `Quale scultore scrisse il Canone?`, options: [`Policleto`, `Mirone`, `Prassitele`], answer: 0, explain: `Policleto di Argo, con il Doriforo come esempio.` },
        { type: `mc`, q: `Quale statua rappresenta una dea completamente nuda a grandezza naturale per la prima volta?`, options: [`Afrodite Cnidia`, `Atena Parthenos`, `Nike di Samotracia`], answer: 0, explain: `L'Afrodite Cnidia di Prassitele (circa 350 a.C.).` },
        { type: `tf`, q: `Il Laocoonte fu ritrovato a Roma nel 1506.`, answer: true, explain: `Il 14 gennaio 1506, nella vigna di Felice de Fredis.` },
        { type: `num`, q: `Nel canone di Policleto la testa è 1/7 dell'altezza. Quanto è alta (in cm) la testa di una statua alta 210 cm?`, answer: 30, tol: 0, unit: `cm`, explain: `210 : 7 = 30 cm.` }
      ]
    }
  ],
  glossary: [
    { t: `Kouros`, d: `Statua di giovane nudo, rigida e frontale (periodo arcaico).` },
    { t: `Kore`, d: `Statua di fanciulla vestita (periodo arcaico).` },
    { t: `Sorriso arcaico`, d: `Lieve curvatura delle labbra verso l'alto dei volti arcaici.` },
    { t: `Contrapposto`, d: `Posa con il peso su una gamba e l'altra rilassata.` },
    { t: `Chiasmo`, d: `Disposizione incrociata: braccio e gamba opposti tesi o rilassati (Doriforo).` },
    { t: `Canone`, d: `Sistema di proporzioni ideali del corpo umano (Policleto).` },
    { t: `Cera persa`, d: `Tecnica di fusione del bronzo con un modello in cera.` },
    { t: `Crisoelefantina`, d: `Statua di oro e avorio su anima di legno.` },
    { t: `Pathos`, d: `Espressione intensa di emozione e dolore.` },
    { t: `Ellenismo`, d: `Età tra la morte di Alessandro Magno (323 a.C.) e la conquista romana (31 a.C.).` },
    { t: `Copia romana`, d: `Replica in marmo di un originale greco, spesso la sola testimonianza rimasta.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Chi scolpì il Discobolo?`, options: [`Mirone`, `Fidia`, `Lisippo`], answer: 0, explain: `Mirone di Eleutere, circa 450 a.C.` },
      { type: `mc`, q: `Che cos'è il chiasmo?`, options: [`Disposizione incrociata di braccia e gambe tese e rilassate`, `Un tipo di capitello`, `Una tecnica di fusione`], answer: 0, explain: `Dal greco chi (X): il Doriforo è l'esempio più noto.` },
      { type: `tf`, q: `I Bronzi di Riace sono stati ritrovati nel 1972.`, answer: true, explain: `Il 16 agosto 1972 da Stefano Mariottini, nel mare di Riace.` },
      { type: `order`, q: `Metti in ordine cronologico.`, items: [`Kouros di Anavyssos`, `Discobolo`, `Afrodite Cnidia`, `Nike di Samotracia`], explain: `530, 450, 350 e 190 a.C. circa.` },
      { type: `mc`, q: `Quale scultore passò da canone a 7 teste a canone a 8 teste?`, options: [`Lisippo`, `Skopas`, `Mirone`], answer: 0, explain: `Lisippo, scultore di corte di Alessandro Magno.` },
      { type: `text`, q: `Come si chiama la posa con il peso su una sola gamba?`, answer: [`contrapposto`, `il contrapposto`, `chiasmo`], explain: `Contrapposto (o chiasmo, quando coinvolge l'intera disposizione).` },
      { type: `mc`, q: `Quale opera ellenistica mostra la lotta tra dèi e giganti?`, options: [`Altare di Pergamo`, `Doriforo`, `Efebo di Crizio`], answer: 0, explain: `Il fregio della Gigantomachia.` },
      { type: `num`, q: `Se l'altezza è di 2,10 m e la testa è 1/8 (canone di Lisippo), quanto misura la testa in cm?`, answer: 26.25, tol: 0.1, unit: `cm`, explain: `210 : 8 = 26,25 cm.` },
      { type: `tf`, q: `Gli originali in bronzo di molte statue greche sono andati perduti, per questo conosciamo copie romane.`, answer: true, explain: `Molti bronzi furono fusi per ricavarne metallo.` },
      { type: `mc`, q: `Quale statua è in crisoelefantina?`, options: [`Atena Parthenos`, `Discobolo`, `Kouros di Anavyssos`], answer: 0, explain: `Fidia la realizzò in oro e avorio.` }
    ]
  }
});
