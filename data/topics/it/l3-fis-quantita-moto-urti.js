TOPIC('it', {
  id: "l3-fis-quantita-moto-urti",
  title: "Quantità di moto e urti",
  intro: "Perché è molto più pericoloso essere investiti da un camion che da una bicicletta, anche se vanno alla stessa velocità? E perché un airbag salva la vita? La risposta sta in una grandezza che combina massa e velocità: la <b>quantità di moto</b>. In questa lezione scopriamo che, in un sistema isolato, essa si <b>conserva</b>, e usiamo questa legge per analizzare gli <b>urti</b>, dai biliardi alle collisioni tra automobili.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "La quantità di moto",
      html: `<p>Nel biennio hai studiato i principi della dinamica con la formula F = m·a. Ora la riscriviamo in modo più generale. Si definisce <b>quantità di moto</b> di un corpo di massa m e velocità v⃗ il vettore</p>
<p style="text-align:center"><b>p⃗ = m · v⃗</b></p>
<ul>
<li>È una grandezza <b>vettoriale</b>: ha la stessa direzione e lo stesso verso della velocità.</li>
<li>Si misura in <b>kg·m/s</b> (non ha un nome speciale nel Sistema Internazionale).</li>
<li>Dipende sia dalla massa sia dalla velocità: un camion lento e un proiettile veloce possono avere quantità di moto confrontabili.</li>
</ul>
<p>Nella formulazione originale dei <i>Principia</i> (1687) Newton non scrive F = m·a, ma afferma che la forza è legata alla <b>variazione della quantità di moto</b>:</p>
<p style="text-align:center"><b>F⃗<sub>ris</sub> = Δp⃗ / Δt</b></p>
<p>Se la massa è costante, Δp = m·Δv e si ritrova F = m·Δv/Δt = m·a. La forma con la quantità di moto è però più generale (vale anche quando la massa cambia, come per un razzo che brucia carburante) e, a differenza di F = m·a, rimane valida anche in relatività.</p>`
    },
    {
      type: "example",
      title: "Camion, auto, proiettile",
      html: `<p>Calcoliamo la quantità di moto di tre oggetti:</p>
<ul>
<li>un camion di 10 000 kg a 10 m/s (36 km/h): p = 10 000 × 10 = <b>100 000 kg·m/s</b>;</li>
<li>un'auto di 1000 kg a 25 m/s (90 km/h): p = 1000 × 25 = <b>25 000 kg·m/s</b>;</li>
<li>un proiettile di 10 g a 400 m/s: p = 0,010 × 400 = <b>4 kg·m/s</b>.</li>
</ul>
<p>Anche se il proiettile è velocissimo, la sua quantità di moto è piccola perché la massa lo è. È per questo che il camion, pur lento, è molto più difficile da fermare: serve una variazione di quantità di moto enorme.</p>`
    },
    {
      type: "text",
      title: "L'impulso di una forza",
      html: `<p>Riscrivendo la formula di Newton si ottiene il <b>teorema dell'impulso</b>:</p>
<p style="text-align:center"><b>J⃗ = F⃗ · Δt = Δp⃗ = m·v⃗<sub>f</sub> − m·v⃗<sub>i</sub></b></p>
<p>Il prodotto della forza (media) per la durata dell'interazione si chiama <b>impulso</b> J (unità: <b>N·s</b>, equivalente a kg·m/s). Dice: <b>per cambiare la quantità di moto di un corpo non conta solo quanto forte lo spingi, ma anche per quanto tempo</b>.</p>
<p>Se la forza non è costante, l'impulso è l'<b>area sotto il grafico forza-tempo</b>. Per un calcio a un pallone la forza sale in un attimo (oltre mille newton) e poi cala, in appena 10 ms circa.</p>
<p>Quest'idea ha conseguenze pratiche enormi: a parità di variazione di quantità di moto (stesso Δp), se si <b>allunga il tempo</b> di interazione la forza media <b>diminuisce</b>. Gli airbag, le zone a deformazione programmata delle auto, i caschi, il materasso del saltatore in alto e il piegare le ginocchia quando si atterra funzionano tutti così.</p>`
    },
    {
      type: "svg",
      title: "Impulso: l'area sotto la curva F(t)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="60" y1="250" x2="560" y2="250" stroke="#334155" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#334155" stroke-width="3"/>
<text x="310" y="288" font-size="15" text-anchor="middle" fill="#334155">tempo t</text>
<text x="25" y="140" font-size="15" fill="#334155" transform="rotate(-90 25 140)" text-anchor="middle">forza F</text>
<path d="M120 250 Q 180 40 240 250 Z" fill="#fca5a5" stroke="#dc2626" stroke-width="4"/>
<path d="M300 250 Q 380 150 460 250 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="4"/>
<text x="180" y="190" font-size="15" fill="#7f1d1d" text-anchor="middle" font-weight="bold">urto rigido</text>
<text x="180" y="210" font-size="14" fill="#7f1d1d" text-anchor="middle">F grande, Δt breve</text>
<text x="380" y="215" font-size="15" fill="#1e3a8a" text-anchor="middle" font-weight="bold">con airbag</text>
<text x="380" y="235" font-size="14" fill="#1e3a8a" text-anchor="middle">F piccola, Δt lungo</text>
<text x="330" y="60" font-size="15" fill="#0f172a">Le due aree sono uguali:</text>
<text x="330" y="82" font-size="15" fill="#0f172a">stesso impulso, stesso Δp</text>
</g>
</svg>`,
      caption: "Le due aree sono uguali: lo stesso impulso può essere ottenuto con una forza grande e breve o con una forza piccola e lunga."
    },
    {
      type: "example",
      title: "Il calcio al pallone e l'airbag",
      html: `<p><b>Pallone.</b> Un pallone di 0,43 kg, fermo, esce a 20 m/s dopo un calcio. Δp = 0,43 × 20 = 8,6 kg·m/s. Se il contatto dura 0,010 s, la forza media è F = 8,6/0,010 = <b>860 N</b>: circa il peso di un uomo di 88 kg, ma per un centesimo di secondo.</p>
<p><b>Airbag.</b> Un guidatore di 70 kg che viaggia a 14 m/s (≈50 km/h) si ferma in un incidente: Δp = 70 × 14 = 980 kg·m/s. Contro il volante rigido la frenata dura 0,02 s: F ≈ 49 000 N, quasi 5 tonnellate-forza. Con l'airbag il corpo rallenta in 0,20 s: F ≈ <b>4900 N</b>, dieci volte meno. L'impulso è lo stesso, ma la forza si è ridotta perché è durata più a lungo.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: quantità di moto e impulso",
      questions: [
        { type: "num", q: "Qual è la quantità di moto di una bicicletta con ciclista, massa totale 80 kg, che va a 5 m/s?", answer: 400, tol: 0, unit: "kg·m/s", explain: "p = m·v = 80 × 5 = 400 kg·m/s." },
        { type: "num", q: "Un calcio dà a un pallone di 0,5 kg una velocità di 16 m/s. Il contatto dura 0,01 s. Quanto vale la forza media?", answer: 800, tol: 0, unit: "N", explain: "Δp = 0,5 × 16 = 8 kg·m/s; F = Δp/Δt = 8/0,01 = 800 N." },
        { type: "mc", q: "Perché piegare le ginocchia atterrando da un salto fa meno male?", options: ["Si riduce la quantità di moto", "Si allunga il tempo dell'arresto e quindi diminuisce la forza", "Si riduce la massa del corpo", "Aumenta la gravità"], answer: 1, explain: "Il Δp da annullare è lo stesso, ma se Δt è più lungo la forza media F = Δp/Δt è minore." }
      ]
    },
    {
      type: "text",
      title: "La conservazione della quantità di moto",
      html: `<p>Consideriamo due corpi che interagiscono tra loro (si urtano, si respingono, si agganciano). Per il <b>terzo principio</b> della dinamica, durante l'interazione il corpo 1 esercita sul corpo 2 una forza F⃗<sub>12</sub> e il corpo 2 esercita sul corpo 1 la forza opposta F⃗<sub>21</sub> = −F⃗<sub>12</sub>, per lo <b>stesso intervallo di tempo</b> Δt. Quindi i due impulsi sono uguali e opposti:</p>
<p style="text-align:center">Δp⃗<sub>1</sub> = −Δp⃗<sub>2</sub> &nbsp;&nbsp;⟹&nbsp;&nbsp; Δ(p⃗<sub>1</sub> + p⃗<sub>2</sub>) = 0</p>
<p>La quantità di moto totale non cambia. Questo è il <b>principio di conservazione della quantità di moto</b>:</p>
<p style="text-align:center"><b>in un sistema isolato (o in cui la risultante delle forze esterne è nulla) la quantità di moto totale è costante:<br>m<sub>1</sub>v⃗<sub>1</sub> + m<sub>2</sub>v⃗<sub>2</sub> = m<sub>1</sub>v⃗'<sub>1</sub> + m<sub>2</sub>v⃗'<sub>2</sub></b></p>
<p>Attenzione ai tre punti chiave:</p>
<ul>
<li>è una legge <b>vettoriale</b>: si conserva componente per componente (x e y);</li>
<li>vale anche se ci sono forze interne <b>molto complicate</b> o sconosciute: non serve conoscerle;</li>
<li>negli urti reali le forze interne sono molto più grandi di quelle esterne (come l'attrito) e durano pochissimo: durante l'urto il sistema si può considerare isolato.</li>
</ul>`
    },
    {
      type: "example",
      title: "Il rinculo e il pattinatore",
      html: `<p><b>Rinculo.</b> Un fucile di 4,0 kg, inizialmente fermo, spara un proiettile di 10 g a 400 m/s. Prima dello sparo la quantità di moto totale è zero; dopo deve essere ancora zero: 0,010 × 400 + 4,0 × V = 0 ⟹ V = −4/4,0 = <b>−1,0 m/s</b>. Il fucile rincula a 1 m/s in verso opposto: la sua velocità è piccola perché la massa è grande.</p>
<p><b>Due pattinatori.</b> Due pattinatori fermi su ghiaccio, di 60 kg e 40 kg, si spingono. Se il primo parte a 2,0 m/s, il secondo va nel verso opposto con: 60 × 2,0 = 40 × v ⟹ v = <b>3,0 m/s</b>. Il più leggero acquista la velocità maggiore.</p>
<p>Lo stesso principio spiega il <b>razzo</b>: espelle gas a grande velocità verso il basso e, per conservare la quantità di moto, il razzo prende quantità di moto verso l'alto. Non ha bisogno di «appoggiarsi» all'aria: funziona anche nel vuoto dello spazio.</p>`
    },
    {
      type: "text",
      title: "Gli urti: tre famiglie",
      html: `<p>Un <b>urto</b> è un'interazione molto breve e intensa tra due o più corpi. In ogni urto in un sistema isolato la <b>quantità di moto totale si conserva</b>. Quello che cambia è che cosa succede all'<b>energia cinetica</b>:</p>
<table>
<tr><th>Tipo di urto</th><th>Quantità di moto</th><th>Energia cinetica</th><th>Esempi</th></tr>
<tr><td><b>Elastico</b></td><td>si conserva</td><td>si <b>conserva</b></td><td>palle da biliardo, urti tra molecole di un gas, pendolo di Newton (in buona approssimazione)</td></tr>
<tr><td><b>Anelastico</b></td><td>si conserva</td><td><b>diminuisce</b> (si trasforma in calore, suono, deformazione)</td><td>due auto che si scontrano e rimbalzano parzialmente</td></tr>
<tr><td><b>Completamente anelastico</b></td><td>si conserva</td><td>diminuisce <b>al massimo</b> possibile: i corpi restano uniti</td><td>un proiettile che resta conficcato in un blocco, due vagoni che si agganciano</td></tr>
</table>
<p>L'energia totale si conserva sempre; è l'<b>energia cinetica</b> che negli urti anelastici viene in parte trasformata in energia interna (aumento di temperatura, deformazioni permanenti). Per questo lo scontro tra due auto è tanto devastante: gran parte dell'energia cinetica si trasforma nella deformazione delle lamiere.</p>`
    },
    {
      type: "widget",
      title: "Che tipo di urto?",
      widget: "classify",
      options: { groups: ["Elastico (circa)", "Completamente anelastico"], items: [
        ["Due palle da biliardo", 0],
        ["Proiettile che si conficca in un blocco di legno", 1],
        ["Due vagoni che si agganciano", 1],
        ["Palla da tennis su un muro rigido", 0],
        ["Due molecole di gas", 0],
        ["Un pezzo di argilla che cade e resta attaccato al pavimento", 1]
      ] },
      caption: "Se i corpi restano uniti dopo l'urto, è completamente anelastico."
    },
    {
      type: "text",
      title: "Urto completamente anelastico",
      html: `<p>I due corpi dopo l'urto si muovono insieme con la stessa velocità V. Dalla conservazione della quantità di moto (in una dimensione):</p>
<p style="text-align:center"><b>m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = (m<sub>1</sub> + m<sub>2</sub>) · V &nbsp;⟹&nbsp; V = (m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>)</b></p>
<p>Le velocità vanno inserite <b>con il segno</b> (positivo in un verso, negativo nell'altro).</p>
<p><b>Esempio.</b> Un vagone di 20 000 kg a 3,0 m/s urta un vagone fermo di 10 000 kg e vi si aggancia. V = (20 000 × 3,0 + 0)/(30 000) = <b>2,0 m/s</b>. L'energia cinetica prima: ½·20 000·9 = 90 000 J; dopo: ½·30 000·4 = 60 000 J. Si sono «perduti» 30 000 J (un terzo), trasformati in deformazione, calore e suono.</p>
<p><b>Il pendolo balistico.</b> Un proiettile di massa m si conficca in un grosso blocco appeso a un filo, di massa M. L'urto è completamente anelastico: la quantità di moto si conserva e dà V = m·v/(m+M). Subito dopo l'urto, però, il blocco sale come un pendolo e l'<b>energia meccanica si conserva</b>: ½(m+M)V² = (m+M)·g·h. Misurando l'altezza h raggiunta si ricava la velocità v del proiettile, che altrimenti sarebbe difficilissima da misurare. Per questo si dice che l'urto conserva l'impulso, ma non l'energia, mentre il successivo moto conserva l'energia.</p>`
    },
    {
      type: "text",
      title: "Urto elastico in una dimensione",
      html: `<p>In un urto elastico si conservano <b>due</b> grandezze: la quantità di moto e l'energia cinetica. Con due equazioni si possono ricavare le due velocità finali. Per due corpi di masse m<sub>1</sub> e m<sub>2</sub> lungo una retta si trova:</p>
<p style="text-align:center">v'<sub>1</sub> = [(m<sub>1</sub> − m<sub>2</sub>)·v<sub>1</sub> + 2·m<sub>2</sub>·v<sub>2</sub>] / (m<sub>1</sub> + m<sub>2</sub>)<br>v'<sub>2</sub> = [(m<sub>2</sub> − m<sub>1</sub>)·v<sub>2</sub> + 2·m<sub>1</sub>·v<sub>1</sub>] / (m<sub>1</sub> + m<sub>2</sub>)</p>
<p>Una conseguenza notevole: in un urto elastico la <b>velocità relativa si inverte</b> (v'<sub>2</sub> − v'<sub>1</sub> = −(v<sub>2</sub> − v<sub>1</sub>)): i corpi si allontanano con la stessa rapidità con cui si avvicinavano.</p>
<p>Tre casi particolari da conoscere (corpo 2 inizialmente fermo, v<sub>2</sub> = 0):</p>
<ul>
<li><b>masse uguali</b> (m<sub>1</sub> = m<sub>2</sub>): v'<sub>1</sub> = 0 e v'<sub>2</sub> = v<sub>1</sub>. Le palle <b>si scambiano le velocità</b>: la bianca si ferma, la colpita parte (nel biliardo, urto frontale);</li>
<li><b>corpo che urta molto più pesante</b> (m<sub>1</sub> ≫ m<sub>2</sub>): il corpo pesante continua quasi come prima, il leggero parte con velocità circa 2·v<sub>1</sub>;</li>
<li><b>corpo che urta molto più leggero</b> (m<sub>1</sub> ≪ m<sub>2</sub>): rimbalza indietro con velocità circa −v<sub>1</sub> e il corpo pesante resta quasi fermo (una pallina contro un muro).</li>
</ul>
<p>Nel pendolo di Newton, quando si lascia cadere una sfera, ne parte una sola dall'altra parte: è lo scambio di velocità tra masse uguali. Con due sfere ne partono due, e così via.</p>`
    },
    {
      type: "svg",
      title: "Prima e dopo l'urto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="qaR" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="qaB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<text x="20" y="30" font-size="16" fill="#0f172a" font-weight="bold">PRIMA</text>
<line x1="20" y1="110" x2="580" y2="110" stroke="#94a3b8" stroke-width="2"/>
<circle cx="130" cy="80" r="30" fill="#ef4444"/>
<text x="130" y="86" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">m1</text>
<line x1="170" y1="80" x2="260" y2="80" stroke="#dc2626" stroke-width="5" marker-end="url(#qaR)"/>
<text x="215" y="66" font-size="15" fill="#991b1b" text-anchor="middle">v1</text>
<circle cx="400" cy="80" r="30" fill="#3b82f6"/>
<text x="400" y="86" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">m2</text>
<text x="400" y="132" font-size="15" fill="#1e3a8a" text-anchor="middle">fermo</text>
<text x="20" y="180" font-size="16" fill="#0f172a" font-weight="bold">DOPO (masse uguali, urto elastico)</text>
<line x1="20" y1="260" x2="580" y2="260" stroke="#94a3b8" stroke-width="2"/>
<circle cx="250" cy="230" r="30" fill="#ef4444"/>
<text x="250" y="236" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">m1</text>
<text x="250" y="282" font-size="15" fill="#991b1b" text-anchor="middle">ferma</text>
<circle cx="440" cy="230" r="30" fill="#3b82f6"/>
<text x="440" y="236" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">m2</text>
<line x1="480" y1="230" x2="570" y2="230" stroke="#2563eb" stroke-width="5" marker-end="url(#qaB)"/>
<text x="525" y="216" font-size="15" fill="#1e3a8a" text-anchor="middle">v2 = v1</text>
</g>
</svg>`,
      caption: "Urto elastico frontale tra masse uguali: la prima palla si ferma e la seconda parte con la velocità della prima."
    },
    {
      type: "example",
      title: "Urto elastico con numeri",
      html: `<p>Una palla di 2,0 kg a 6,0 m/s urta frontalmente, in modo elastico, una palla ferma di 4,0 kg. Calcola le velocità dopo l'urto.</p>
<p>v'<sub>1</sub> = (2 − 4)·6/(2 + 4) = −12/6 = <b>−2,0 m/s</b> (rimbalza indietro)<br>
v'<sub>2</sub> = 2·2·6/(2 + 4) = 24/6 = <b>+4,0 m/s</b></p>
<p><b>Verifica.</b> Quantità di moto prima: 2·6 = 12; dopo: 2·(−2) + 4·4 = −4 + 16 = 12 ✓. Energia cinetica prima: ½·2·36 = 36 J; dopo: ½·2·4 + ½·4·16 = 4 + 32 = 36 J ✓. Anche la velocità relativa si è invertita: prima 6 m/s di avvicinamento, dopo 6 m/s di allontanamento (4 − (−2) = 6).</p>`
    },
    {
      type: "quiz",
      title: "Controlla: urti",
      questions: [
        { type: "num", q: "Un'auto di 1000 kg a 20 m/s tampona un'auto ferma di 1000 kg e restano agganciate. Qual è la velocità subito dopo?", answer: 10, tol: 0, unit: "m/s", explain: "V = (1000·20)/(2000) = 10 m/s." },
        { type: "mc", q: "In un urto elastico frontale tra due palle uguali, una ferma, che cosa succede?", options: ["Si fermano entrambe", "Rimbalzano indietro entrambe", "La prima si ferma e la seconda parte con la velocità della prima", "Procedono insieme a metà velocità"], answer: 2, explain: "Con masse uguali e urto elastico le velocità si scambiano." },
        { type: "tf", q: "In un urto completamente anelastico la quantità di moto totale non si conserva.", answer: false, explain: "La quantità di moto si conserva in ogni urto di un sistema isolato; ciò che non si conserva è l'energia cinetica." }
      ]
    },
    {
      type: "text",
      title: "Urti in due dimensioni e centro di massa",
      html: `<p>Se i corpi non si urtano «frontalmente» si muovono dopo l'urto in direzioni diverse. Nel biliardo, per esempio, la palla colpita parte in un'altra direzione. La conservazione della quantità di moto vale ancora, ma come legge <b>vettoriale</b>: si scrive separatamente per le componenti lungo x e lungo y:</p>
<p style="text-align:center">Σp<sub>x</sub> (prima) = Σp<sub>x</sub> (dopo), &nbsp;&nbsp; Σp<sub>y</sub> (prima) = Σp<sub>y</sub> (dopo)</p>
<p>Un risultato elegante: in un urto elastico tra due palle di <b>uguale massa</b>, di cui una ferma, e non frontale, le due palle dopo l'urto partono lungo direzioni <b>perpendicolari</b> tra loro. Lo sanno bene i giocatori di biliardo.</p>
<p>Una grandezza utile per studiare i sistemi di più corpi è il <b>centro di massa</b>, il punto la cui posizione è la media delle posizioni pesata con le masse. Per i corpi che si urtano senza forze esterne, il centro di massa si muove di <b>moto rettilineo uniforme</b>, qualunque cosa accada nell'urto: la quantità di moto totale è M·v⃗<sub>CM</sub>. Anche il fuoco d'artificio che esplode a mezz'aria è un buon esempio: i frammenti vanno in tutte le direzioni, ma il loro centro di massa continua la parabola che avrebbe seguito il fuoco intero (se si trascura la resistenza dell'aria).</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la quantità di moto",
      intro: "Un concetto astratto diventa chiaro con analogie diverse. Scegli quella che ti convince di più.",
      tabs: [
        {
          label: "💰 Il conto in banca",
          html: "<p>Pensa alla quantità di moto come a un <b>capitale</b> che due persone si scambiano. Nell'interazione, ciò che il corpo 1 «perde» il corpo 2 lo «guadagna»: i soldi passano da una tasca all'altra ma il totale non cambia. L'unico modo per cambiare il totale è un intervento esterno (una forza esterna), come un deposito o un prelievo dall'esterno.</p><p>L'<b>impulso</b> è l'assegno che viene girato: l'entità del trasferimento. Il teorema dell'impulso dice che quello che un corpo guadagna è uguale al «prezzo» F·Δt.</p>"
        },
        {
          label: "🎱 Il ruolo delle masse",
          html: "<p>Cambia la massa della palla colpita e osserva cosa dicono le formule (urto elastico, bersaglio fermo, v<sub>1</sub> = 6 m/s):</p><ul><li>m<sub>1</sub> = m<sub>2</sub>: v'<sub>1</sub> = 0, v'<sub>2</sub> = 6 m/s (scambio di velocità);</li><li>m<sub>2</sub> = 3·m<sub>1</sub>: v'<sub>1</sub> = −3 m/s, v'<sub>2</sub> = +3 m/s (la leggera <b>rimbalza</b>);</li><li>m<sub>1</sub> = 3·m<sub>2</sub>: v'<sub>1</sub> = +3 m/s, v'<sub>2</sub> = +9 m/s (la pesante <b>lancia avanti</b> la leggera a più della sua velocità).</li></ul><p>Una pallina che urta un muro rimbalza; un camion che urta una pallina la spedisce a quasi il doppio della propria velocità.</p>"
        },
        {
          label: "🚀 Il razzo e il pallone",
          html: "<p>Siediti su un carrello con un pesante pallone. Se lo lanci in avanti, il carrello (con te) parte indietro. Non serve alcun appoggio: la quantità di moto totale (carrello+te+pallone) era zero e resta zero. Il razzo fa lo stesso lanciando ogni secondo una quantità enorme di gas: ognuno porta con sé quantità di moto verso il basso, e il razzo ne acquista altrettanta verso l'alto.</p><p>Così si può «spingere» anche nel vuoto, dove non c'è aria su cui appoggiarsi: è la risposta all'errore comune secondo cui i razzi spingono contro l'aria.</p>"
        },
        {
          label: "🔗 Abbina grandezza e formula",
          html: "<p>Collega ogni grandezza o legge alla sua espressione.</p>",
          widget: "match",
          options: { pairs: [
            ["Quantità di moto", "p = m·v"],
            ["Impulso", "J = F·Δt = Δp"],
            ["Urto completamente anelastico", "V = (m1v1 + m2v2)/(m1+m2)"],
            ["Sistema isolato", "p totale costante"]
          ] }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Chi studiò per primo gli urti?",
      html: `<p>Nel 1668 la Royal Society di Londra invitò scienziati a spiegare le leggi dell'urto. Risposero tre dei più grandi dell'epoca: <b>John Wallis</b>, <b>Christopher Wren</b> e <b>Christiaan Huygens</b>. Huygens, nel suo lavoro, intuì che nell'urto elastico si conserva anche una seconda grandezza oltre alla quantità di moto, quella che oggi chiamiamo energia cinetica (la «forza viva» di Leibniz). Prima di allora Cartesio aveva proposto una legge di conservazione della quantità di moto <i>senza considerare il verso</i>, e quindi sbagliata in alcuni casi: capire che la quantità di moto è un <b>vettore</b> fu il passo decisivo.</p>`
    },
    {
      type: "curiosity",
      title: "Il pendolo di Newton e i limiti dell'urto elastico",
      html: `<p>Il pendolo di Newton (la fila di sfere d'acciaio appese) sembra smentire la fisica quando le sfere continuano a oscillare «per sempre»: in realtà l'urto non è mai perfettamente elastico. Ad ogni collisione una piccola parte dell'energia diventa calore e suono (il caratteristico «tic-tac»), e dopo qualche minuto il dispositivo si ferma. La conservazione della quantità di moto invece resta esatta (a meno dell'attrito con l'aria e dei fili): è <b>più fondamentale</b> della conservazione dell'energia cinetica, che vale solo in casi particolari.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della quantità di moto e degli urti",
      nodes: [
        { id: "p", label: "Quantità di moto p = mv", x: 50, y: 8, color: "#2563eb", html: "Vettore uguale al prodotto della massa per la velocità. Si misura in kg·m/s.", why: "Cartesio la introdusse come «quantità di movimento» come misura dell'effetto d'urto; Newton la pose al centro della dinamica nei <i>Principia</i> (1687), dove la forza è definita come variazione della quantità di moto." },
        { id: "impulso", label: "Impulso J = F·Δt", x: 15, y: 42, color: "#ef4444", html: "Il prodotto della forza media per il tempo di applicazione: è uguale alla variazione di quantità di moto.", why: "Deriva dal secondo principio scritto come F = Δp/Δt. Spiega perché airbag e caschi riducono la forza: allungando il tempo l'impulso resta uguale." },
        { id: "terzo", label: "Terzo principio", x: 50, y: 42, color: "#8b5cf6", html: "Azione e reazione: forze uguali e opposte tra i due corpi.", why: "È la ragione profonda della conservazione: poiché le forze interne sono uguali e opposte e agiscono per lo stesso tempo, gli impulsi si annullano e la quantità di moto totale non cambia." },
        { id: "conserv", label: "Conservazione di p", x: 85, y: 42, color: "#16a34a", html: "In un sistema isolato la quantità di moto totale è costante.", why: "È collegata a una simmetria della natura: l'invarianza per traslazione nello spazio (teorema di Noether, 1918). Le leggi della fisica non dipendono dal «dove» si fa l'esperimento." },
        { id: "elastico", label: "Urto elastico", x: 25, y: 82, color: "#f59e0b", html: "Si conservano quantità di moto ed energia cinetica; la velocità relativa si inverte.", why: "Le forze in gioco sono conservative (forze elastiche tra le superfici): l'energia cinetica viene temporaneamente immagazzinata come energia elastica e poi restituita." },
        { id: "anelastico", label: "Urto anelastico", x: 75, y: 82, color: "#64748b", html: "Si conserva solo la quantità di moto: parte dell'energia cinetica diventa energia interna.", why: "Negli urti reali l'energia cinetica «sparisce» in deformazioni, calore e suono. Non si perde l'energia totale (primo principio della termodinamica), ma si disperde in forma non più meccanica." }
      ],
      edges: [["p", "impulso", "varia per effetto di"], ["terzo", "conserv", "implica"], ["p", "conserv", "si conserva in"], ["conserv", "elastico", "vale in"], ["conserv", "anelastico", "vale in"], ["impulso", "terzo", "forze uguali e opposte"]]
    }
  ],
  glossary: [
    { t: "Quantità di moto", d: "Vettore p = m·v, prodotto della massa per la velocità. Unità: kg·m/s." },
    { t: "Impulso", d: "Prodotto della forza media per l'intervallo di tempo, J = F·Δt, uguale alla variazione di quantità di moto. Unità: N·s." },
    { t: "Sistema isolato", d: "Sistema su cui la risultante delle forze esterne è nulla (o trascurabile)." },
    { t: "Urto elastico", d: "Urto in cui si conservano sia la quantità di moto sia l'energia cinetica." },
    { t: "Urto anelastico", d: "Urto in cui si conserva la quantità di moto ma non l'energia cinetica." },
    { t: "Urto completamente anelastico", d: "Urto dopo il quale i corpi restano uniti e si muovono con la stessa velocità." },
    { t: "Centro di massa", d: "Punto in cui si può pensare concentrata la massa di un sistema; la sua velocità è p totale / M." },
    { t: "Rinculo", d: "Moto all'indietro di un'arma da fuoco, conseguenza della conservazione della quantità di moto." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è l'unità di misura della quantità di moto nel Sistema Internazionale?", options: ["kg·m/s²", "kg·m/s", "N·m", "kg·m²/s"], answer: 1, explain: "p = m·v, quindi kg × m/s." },
      { type: "num", q: "Calcola la quantità di moto di un'auto di 1200 kg che viaggia a 20 m/s.", answer: 24000, tol: 0, unit: "kg·m/s", explain: "p = 1200 × 20 = 24 000 kg·m/s." },
      { type: "num", q: "Una forza media di 500 N agisce per 0,020 s su una palla. Quanto vale l'impulso?", answer: 10, tol: 0, unit: "N·s", explain: "J = F·Δt = 500 × 0,020 = 10 N·s." },
      { type: "tf", q: "Un airbag riduce l'impulso che il guidatore subisce nell'arresto.", answer: false, explain: "L'impulso (variazione di quantità di moto) è lo stesso; l'airbag allunga il tempo e quindi riduce la forza media." },
      { type: "num", q: "Un blocco di 2 kg che si muove a 6 m/s urta un blocco fermo di 4 kg e restano uniti. Qual è la velocità finale?", answer: 2, tol: 0, unit: "m/s", explain: "V = (2·6)/(2+4) = 12/6 = 2 m/s." },
      { type: "mc", q: "In un urto elastico frontale tra due masse uguali, una ferma, la velocità finale della prima è:", options: ["uguale alla velocità iniziale", "metà della velocità iniziale", "zero", "opposta alla velocità iniziale"], answer: 2, explain: "Le due masse si scambiano le velocità: la prima si ferma." },
      { type: "num", q: "Un fucile di 4 kg spara un proiettile di 10 g a 400 m/s. Con che velocità (in modulo) rincula il fucile?", answer: 1, tol: 0.01, unit: "m/s", explain: "0 = 0,010·400 + 4·V ⟹ |V| = 4/4 = 1 m/s." },
      { type: "tf", q: "In un urto anelastico l'energia totale non si conserva.", answer: false, explain: "L'energia totale si conserva sempre: ciò che diminuisce è l'energia cinetica, che diventa energia interna (calore, deformazioni)." },
      { type: "num", q: "Una palla di 0,2 kg arriva a 10 m/s contro un muro e rimbalza con la stessa velocità. Qual è il modulo della variazione di quantità di moto?", answer: 4, tol: 0, unit: "kg·m/s", explain: "Δp = 0,2·10 − 0,2·(−10) = 4 kg·m/s: cambia il verso, quindi i due contributi si sommano." },
      { type: "order", q: "Ordina per quantità di moto crescente (circa): proiettile 10 g a 400 m/s, ciclista 80 kg a 5 m/s, auto 1000 kg a 20 m/s, camion 10 t a 10 m/s.", items: ["Proiettile", "Ciclista", "Auto", "Camion"], explain: "p = 4, 400, 20 000 e 100 000 kg·m/s rispettivamente." }
    ]
  }
});
