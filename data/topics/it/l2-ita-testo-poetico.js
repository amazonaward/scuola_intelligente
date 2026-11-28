TOPIC('it', {
  id: "l2-ita-testo-poetico",
  title: "Il testo poetico",
  intro: "Una poesia non si legge come un articolo: ha un <b>ritmo</b>, una <b>musica</b> e una forma che parlano quanto le parole. In questa lezione impari a «smontare» un testo poetico: contare le sillabe, riconoscere gli accenti, individuare le rime e le strofe, distinguere sonetto, canzone, ode e verso libero. Con queste conoscenze ogni poesia, da Dante a Ungaretti, diventa più facile da capire e più bella da leggere.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Il verso e le sillabe",
      html: `<p>Un testo poetico è scritto in <b>versi</b>: righe che vanno a capo secondo un ritmo scelto dal poeta, non perché è finito lo spazio. Il verso tradizionale italiano si misura in <b>sillabe metriche</b>, e ha un nome che dipende dal loro numero.</p>
<table>
<tr><th>Verso</th><th>Sillabe</th><th>Accento principale sulla</th></tr>
<tr><td>Quinario</td><td>5</td><td>4ª</td></tr>
<tr><td>Senario</td><td>6</td><td>5ª</td></tr>
<tr><td>Settenario</td><td>7</td><td>6ª</td></tr>
<tr><td>Ottonario</td><td>8</td><td>7ª</td></tr>
<tr><td>Novenario</td><td>9</td><td>8ª</td></tr>
<tr><td>Decasillabo</td><td>10</td><td>9ª</td></tr>
<tr><td>Endecasillabo</td><td>11</td><td>10ª (più accenti interni: 4ª e 7ª, oppure 6ª)</td></tr>
</table>
<p>I due versi più importanti della nostra tradizione sono l'<b>endecasillabo</b> (11 sillabe, il verso della <i>Divina Commedia</i>) e il <b>settenario</b>. Spesso si alternano nella stessa poesia.</p>`
    },
    {
      type: "remember",
      title: "Come si contano le sillabe metriche",
      html: `<p>Si contano le sillabe «come suonano», con alcune regole:</p>
<ul>
<li><b>Sinalefe</b>: quando una parola finisce con vocale e la successiva comincia con vocale, le due sillabe si fondono in una. <i>«Tanto gentile e tanto onesta pare»</i> (Dante): <i>gentile e</i> conta una sillaba, <i>tanto onesta</i> pure.</li>
<li><b>Dialefe</b>: l'incontro tra le vocali resta separato (eccezione, spesso per effetto espressivo).</li>
<li><b>Sineresi</b>: due vocali vicine nella stessa parola si contano come una sillaba (es. <i>mia</i> in una sola sillaba invece di due).</li>
<li><b>Dieresi</b>: due vocali che di solito sono insieme si dividono (es. <i>o-rï-en-te</i>).</li>
<li><b>Ultima parola</b>: se è <b>piana</b> (accento sulla penultima, la più comune) si contano le sillabe reali; se è <b>tronca</b> (accento sull'ultima) si <b>aggiunge</b> una sillaba; se è <b>sdrucciola</b> (accento sulla terzultima) se ne <b>toglie</b> una.</li>
</ul>
<p>L'ultimo accento fisso del verso è quello che ne definisce il nome: l'endecasillabo ha sempre l'accento sulla <b>decima sillaba</b>.</p>`
    },
    {
      type: "example",
      title: "Contiamo un verso: «Tanto gentile e tanto onesta pare»",
      html: `<p>Il verso (Dante, <i>Vita nova</i>) si scandisce così:</p>
<p>Sillabe: <i>Tan(1)-to(2)-gen(3)-ti(4)-le+e(5)-tan(6)-to+o(7)-ne(8)-sta(9)-pa(10)-re(11)</i>. Le due sinalefi (<i>gentile e</i>, <i>tanto onesta</i>) riducono due sillabe a una.</p>
<p>Totale: <b>11 sillabe</b>. L'ultima parola, <i>pare</i>, è piana, e l'accento cade sulla decima sillaba (<i>pa</i>): è un <b>endecasillabo</b>. Un altro esempio: <i>«Sempre caro mi fu quest'ermo colle»</i> (Leopardi, <i>L'infinito</i>): <i>Sem-pre-ca-ro-mi-fu-ques-ter-mo-col-le</i> = 11 sillabe. Per esercizio prova con <i>«Silvia, rimembri ancora»</i> (<i>A Silvia</i>): <i>Sil-via-ri-mem-brian-co-ra</i>, sinalefe tra <i>rimembri</i> e <i>ancora</i>: sono 7 sillabe, un <b>settenario</b>.</p>`
    },
    {
      type: "svg",
      title: "Scandire un endecasillabo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="300" y="34" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">Sempre caro mi fu quest'ermo colle</text>
<g font-size="16" fill="#0f172a" text-anchor="middle">
<rect x="20" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="43" y="110">Sem</text>
<rect x="72" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="95" y="110">pre</text>
<rect x="124" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="147" y="110">ca</text>
<rect x="176" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="199" y="110">ro</text>
<rect x="228" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="251" y="110">mi</text>
<rect x="280" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="303" y="110">fu</text>
<rect x="332" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="355" y="110">ques</text>
<rect x="384" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="407" y="110">ter</text>
<rect x="436" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="459" y="110">mo</text>
<rect x="488" y="80" width="46" height="46" rx="8" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/><text x="511" y="110" font-weight="bold">col</text>
<rect x="540" y="80" width="46" height="46" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="563" y="110">le</text>
</g>
<g font-size="14" fill="#475569" text-anchor="middle">
<text x="43" y="150">1</text><text x="95" y="150">2</text><text x="147" y="150">3</text><text x="199" y="150">4</text><text x="251" y="150">5</text><text x="303" y="150">6</text><text x="355" y="150">7</text><text x="407" y="150">8</text><text x="459" y="150">9</text><text x="511" y="150">10</text><text x="563" y="150">11</text>
</g>
<text x="300" y="196" font-size="15" text-anchor="middle" fill="#1e293b">quest'ermo: l'elisione fonde due parole (ques-ter-mo)</text>
<text x="300" y="224" font-size="15" text-anchor="middle" fill="#b91c1c">L'accento forte cade sulla 10ª sillaba (col): endecasillabo piano.</text>
<text x="300" y="262" font-size="15" text-anchor="middle" fill="#334155">Le sillabe sono 11: l'ultima parola (colle) è piana.</text>
</g>
</svg>`,
      caption: "Ogni quadrato è una sillaba metrica. L'accento sulla decima sillaba è il segno distintivo dell'endecasillabo."
    },
    {
      type: "text",
      title: "La rima e il suo schema",
      html: `<p>La <b>rima</b> è l'identità di suoni dalla vocale accentata fino alla fine di due parole (<i>vita – smarrita</i>). Le parole in rima chiudono i versi e creano la musica del testo.</p>
<ul>
<li><b>Assonanza</b>: coincidono solo le vocali dopo l'accento (<i>cuore – morte</i>).</li>
<li><b>Consonanza</b>: coincidono solo le consonanti (<i>tetto – tutto</i>).</li>
<li><b>Rima interna</b>: una parola in rima è all'interno del verso.</li>
</ul>
<p>Per descrivere lo schema delle rime si usano le lettere (A, B, C…):</p>
<table>
<tr><th>Schema</th><th>Lettere</th><th>Nome</th></tr>
<tr><td>AABB</td><td>1-2, 3-4</td><td>baciata</td></tr>
<tr><td>ABAB</td><td>1-3, 2-4</td><td>alternata</td></tr>
<tr><td>ABBA</td><td>1-4, 2-3</td><td>incrociata (o chiusa)</td></tr>
<tr><td>ABA BCB CDC</td><td>il verso centrale rima con il primo e il terzo della terzina successiva</td><td>incatenata (terzina dantesca)</td></tr>
<tr><td>ABC ABC</td><td>le rime si ripetono nello stesso ordine</td><td>ripetuta</td></tr>
</table>
<p>I versi che non rimano si dicono <b>sciolti</b>: <i>L'infinito</i> di Leopardi è scritto in endecasillabi sciolti.</p>`
    },
    {
      type: "example",
      title: "Lo schema della terzina dantesca",
      html: `<p>Guardiamo l'inizio della <i>Commedia</i>:</p>
<p><i>Nel mezzo del cammin di nostra <b>vita</b></i> (A)<br>
<i>mi ritrovai per una selva <b>oscura</b>,</i> (B)<br>
<i>ché la diritta via era smar<b>rita</b>.</i> (A)</p>
<p><i>Ahi quanto a dir qual era è cosa <b>dura</b></i> (B)<br>
<i>esta selva selvaggia e aspra e <b>forte</b></i> (C)<br>
<i>che nel pensier rinova la pa<b>ura</b>!</i> (B)</p>
<p>Lo schema è <b>ABA BCB</b>: la rima centrale della prima terzina (<i>oscura</i>) diventa la rima esterna della seconda (<i>dura, paura</i>), e la nuova rima centrale (<i>forte</i>) tornerà nella terzina seguente. Dante la inventò per la <i>Commedia</i> e la chiamò <b>terzina</b> incatenata: i versi sembrano agganciati l'uno all'altro come in una catena.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: metrica e rima",
      questions: [
        { type: "mc", q: "Dove cade l'accento principale dell'endecasillabo?", options: ["Sulla 10ª sillaba", "Sulla 7ª", "Sulla 11ª", "Sulla 5ª"], answer: 0, explain: "L'endecasillabo ha sempre l'accento forte sulla decima sillaba." },
        { type: "mc", q: "Qual è lo schema di rime AABB?", options: ["Baciata", "Alternata", "Incrociata", "Incatenata"], answer: 0, explain: "Nella rima baciata le coppie di versi rimano a due a due." },
        { type: "tf", q: "Un verso che finisce con parola sdrucciola ha una sillaba in meno nel conteggio metrico.", answer: true, explain: "Se la parola finale è sdrucciola si toglie una sillaba; se è tronca se ne aggiunge una." }
      ]
    },
    {
      type: "text",
      title: "Le strofe e le forme poetiche",
      html: `<p>I versi si raccolgono in <b>strofe</b>, gruppi con numero fisso di versi:</p>
<ul>
<li><b>Distico</b>: 2 versi. <b>Terzina</b>: 3. <b>Quartina</b>: 4. <b>Sestina</b>: 6. <b>Ottava</b>: 8 (di solito endecasillabi con schema ABABABCC, come nell'<i>Orlando furioso</i> di Ariosto).</li>
</ul>
<p>Alcune combinazioni di strofe formano <b>componimenti</b> con un nome preciso:</p>
<ul>
<li><b>Sonetto</b>: 14 endecasillabi in due quartine e due terzine (schema tipico ABAB ABAB CDC DCD, ma ci sono varianti). Fu inventato nel Duecento dal poeta siciliano <b>Giacomo da Lentini</b> ed è la forma di Petrarca, Foscolo, Montale. Esempi: <i>A Zacinto</i> e <i>Alla sera</i> di Foscolo.</li>
<li><b>Canzone</b>: forma lunga e solenne con stanze di struttura uguale; Petrarca la usa nel <i>Canzoniere</i>.</li>
<li><b>Ballata</b>: nata per essere cantata e danzata, con un ritornello.</li>
<li><b>Madrigale</b>: breve componimento di soggetto amoroso, spesso musicato.</li>
<li><b>Ode</b>: componimento solenne in onore di una persona o di un tema (Manzoni, <i>Il cinque maggio</i>; Parini; Carducci).</li>
<li><b>Poema</b>: testo lungo in versi, divisi in canti (<i>Divina Commedia</i>, <i>Orlando furioso</i>).</li>
</ul>`
    },
    {
      type: "text",
      title: "Il verso libero e la poesia del Novecento",
      html: `<p>Dall'inizio del Novecento molti poeti abbandonano metro e rima: nasce il <b>verso libero</b>, in cui la lunghezza dei versi e la loro disposizione dipendono dal significato. Il verso può essere brevissimo, anche una sola parola. Ecco due esempi celebri:</p>
<p><i>Mi illumino / d'immenso</i> — <b>Giuseppe Ungaretti</b>, <i>Mattina</i> (1917), che esprime in due versi un'emozione di grande apertura.</p>
<p><i>Si sta come / d'autunno / sugli alberi / le foglie</i> — <b>Ungaretti</b>, <i>Soldati</i> (1918): i versi sono corti perché il tono è quello della sospensione e della fragilità.</p>
<p>Anche Quasimodo scrive in versi liberi: <i>«Ognuno sta solo sul cuor della terra / trafitto da un raggio di sole: / ed è subito sera»</i> (<i>Ed è subito sera</i>, 1930). Il poeta non rinuncia alla musica, ma la costruisce con ritmo, pause e silenzi sulla pagina bianca.</p>`
    },
    {
      type: "remember",
      title: "Enjambement, cesura e pausa",
      html: `<p>La <b>punteggiatura</b> e la fine del verso non sempre coincidono. Quando una frase continua nel verso successivo si ha un <b>enjambement</b> («accavallamento»): <i>«ma sedendo e mirando, interminati / spazi di là da quella…»</i> (Leopardi). L'enjambement rallenta, accentua una parola e crea suspense. La <b>cesura</b> è invece una pausa interna al verso. Quando i versi sono lunghi, il poeta usa la cesura per respirare.</p>`
    },
    {
      type: "curiosity",
      title: "Sonetti e innovazioni",
      html: `<p>Il sonetto è nato intorno al 1230 nella corte di Federico II ed è stato usato per secoli in tutta Europa (Shakespeare scrisse 154 sonetti, con schema diverso da quello italiano). Eppure nel Novecento è ancora vivo: Montale e Ungaretti ne scrissero, e alcuni cantautori ne imitano la struttura: quattordici versi sono un buon contenitore per un'idea compiuta.</p>`
    },
    {
      type: "curiosity",
      title: "Perché la poesia ha il ritmo?",
      html: `<p>Prima della scrittura, la poesia si memorizzava e si cantava: il <b>ritmo</b> e la <b>rima</b> aiutavano a ricordare lunghi testi (pensa all'<i>Iliade</i>). Anche oggi i cantanti rap usano metri e rime per fissare i versi: la «metrica» non è solo una regola scolastica, ma un'invenzione umana per far arrivare le parole alla memoria e all'orecchio.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la metrica",
      intro: "Se contare le sillabe ti sembra astratto, prova a sentire il ritmo.",
      tabs: [
        {
          label: "🥁 Batti il ritmo",
          html: "<p>Leggi il verso a voce alta battendo la mano a ogni sillaba e <b>più forte</b> sulle sillabe accentate. Dopo un po' sentirai che la decima sillaba dell'endecasillabo è come un «colpo finale»; nel settenario il colpo è sulla sesta. È un modo di <b>sentire</b> prima di calcolare.</p>"
        },
        {
          label: "🎵 Come una canzone",
          html: "<p>Una poesia è come un testo musicale: i <b>versi</b> sono le battute, le <b>rime</b> sono come il ritornello che ritorna, le <b>strofe</b> sono i blocchi della canzone. Se riesci a immaginare la melodia, la struttura è più facile. Il rap, il pop e la poesia tradizionale condividono molti trucchi: rima, ripetizione, ritmo.</p>"
        },
        {
          label: "🔎 Schema di rime a colori",
          html: "<p>Ecco come si «vede» la terzina incatenata: ogni colore è una rima. Il verso centrale della prima terzina (rosso) torna come primo e terzo verso della seconda.</p>",
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fffbeb"/><g font-family="sans-serif" font-size="16"><rect x="40" y="30" width="520" height="34" rx="8" fill="#bfdbfe"/><text x="60" y="53" fill="#1e3a8a">Nel mezzo del cammin di nostra vita  (A)</text><rect x="40" y="70" width="520" height="34" rx="8" fill="#fecaca"/><text x="60" y="93" fill="#7f1d1d">mi ritrovai per una selva oscura,  (B)</text><rect x="40" y="110" width="520" height="34" rx="8" fill="#bfdbfe"/><text x="60" y="133" fill="#1e3a8a">ché la diritta via era smarrita.  (A)</text><rect x="40" y="165" width="520" height="34" rx="8" fill="#fecaca"/><text x="60" y="188" fill="#7f1d1d">Ahi quanto a dir qual era è cosa dura  (B)</text><rect x="40" y="205" width="520" height="34" rx="8" fill="#bbf7d0"/><text x="60" y="228" fill="#14532d">esta selva selvaggia e aspra e forte  (C)</text><rect x="40" y="245" width="520" height="34" rx="8" fill="#fecaca"/><text x="60" y="268" fill="#7f1d1d">che nel pensier rinova la paura!  (B)</text></g></svg>`
        },
        {
          label: "🕰️ Forme poetiche nel tempo",
          html: "<p>Alcune date essenziali.</p>",
          widget: "timeline",
          options: { events: [
            { year: 1224, label: "Cantico delle creature", icon: "🌞" },
            { year: 1230, label: "Sonetto (Giacomo da Lentini)", icon: "✒️" },
            { year: 1304, label: "Dante inizia la Commedia (c.)", icon: "📜" },
            { year: 1516, label: "Orlando furioso", icon: "⚔️" },
            { year: 1807, label: "Foscolo, Dei Sepolcri", icon: "🕯️" },
            { year: 1917, label: "Ungaretti, Mattina", icon: "🌅" }
          ], unit: "anni" }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del testo poetico",
      nodes: [
        { id: "poesia", label: "Testo poetico", x: 50, y: 8, color: "#ef4444", html: "Testo in versi, in cui suono e significato sono strettamente intrecciati.", why: "In poesia la forma non è decorazione: il ritmo e il suono contribuiscono al senso, come in una canzone." },
        { id: "metro", label: "Metro", x: 12, y: 42, color: "#0ea5e9", html: "La misura dei versi: sillabe e accenti (endecasillabo, settenario, quinario...).", why: "La metrica italiana si basa sul numero di sillabe e sull'accento: è un sistema nato dalla poesia medievale e consolidato da Dante e Petrarca." },
        { id: "rima", label: "Rima", x: 50, y: 42, color: "#22c55e", html: "Identità dei suoni finali: baciata, alternata, incrociata, incatenata.", why: "Aiutava a ricordare i testi a memoria quando si recitavano a voce, e crea una struttura riconoscibile." },
        { id: "strofe", label: "Strofe e forme", x: 88, y: 42, color: "#8b5cf6", html: "Distico, terzina, quartina, ottava; sonetto, canzone, ballata, ode.", why: "Le forme chiuse organizzano il pensiero: un sonetto, per esempio, sviluppa un tema nelle quartine e lo conclude nelle terzine." },
        { id: "libero", label: "Verso libero", x: 28, y: 78, color: "#f59e0b", html: "Versi di lunghezza varia, spesso senza rima, nati nel Novecento.", why: "Dopo la crisi delle certezze di inizio secolo i poeti rifiutano le forme tradizionali per esprimere un'esperienza più frammentata." },
        { id: "figure", label: "Suono e figure", x: 72, y: 78, color: "#64748b", html: "Allitterazioni, enjambement, ripetizioni: gli effetti che rafforzano il significato.", why: "La poesia concentra molti significati in poche parole: i suoni e le pause fanno parte del messaggio." }
      ],
      edges: [["poesia", "metro", "si misura con"], ["poesia", "rima", "si arricchisce di"], ["poesia", "strofe", "si organizza in"], ["metro", "libero", "è superato dal"], ["rima", "figure", "è una forma di"], ["strofe", "libero", "è superata dal"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz finale",
      questions: [
        { type: "order", q: "Ordina dalla più breve alla più lunga queste strofe.", items: ["Distico", "Terzina", "Quartina", "Ottava"], explain: "Distico (2 versi), terzina (3), quartina (4), ottava (8)." },
        { type: "text", q: "Come si chiama la figura per cui una frase continua nel verso successivo?", answer: ["enjambement", "inarcatura"], explain: "L'enjambement spezza la frase tra due versi, creando enfasi." },
        { type: "mc", q: "Quanti versi ha un sonetto?", options: ["14", "12", "16", "10"], answer: 0, explain: "Due quartine e due terzine, tutte di endecasillabi." }
      ]
    }
  ],
  glossary: [
    { t: "Verso", d: "Riga di un testo poetico, la cui misura dipende dal numero di sillabe e dagli accenti." },
    { t: "Endecasillabo", d: "Verso di 11 sillabe con accento sulla 10ª; è il verso principale della poesia italiana." },
    { t: "Sinalefe", d: "Fusione in una sola sillaba della vocale finale di una parola con la vocale iniziale della successiva." },
    { t: "Rima", d: "Identità di suono dall'ultima vocale accentata in poi, tra due parole a fine verso." },
    { t: "Strofa", d: "Gruppo di versi con numero e disposizione stabili (distico, terzina, quartina...)." },
    { t: "Sonetto", d: "Componimento di 14 endecasillabi in due quartine e due terzine." },
    { t: "Enjambement", d: "La frase continua nel verso seguente, spezzando l'unità sintattica del verso." },
    { t: "Verso libero", d: "Verso senza metro e rima fissi, tipico della poesia del Novecento." },
    { t: "Terzina", d: "Strofa di tre versi; quella dantesca ha rima incatenata ABA BCB." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quante sillabe ha l'endecasillabo piano?", options: ["11", "10", "9", "12"], answer: 0, explain: "L'endecasillabo ha 11 sillabe metriche e l'accento sulla 10ª." },
      { type: "tf", q: "Se la parola finale del verso è tronca, si aggiunge una sillaba al conteggio.", answer: true, explain: "Nel verso tronco si conta una sillaba in più, in quello sdrucciolo una in meno." },
      { type: "mc", q: "Qual è lo schema della terzina dantesca?", options: ["ABA BCB CDC", "ABB ACC", "AAB CCB", "ABC ABC"], answer: 0, explain: "È la rima incatenata, inventata da Dante per la Commedia." },
      { type: "text", q: "Come si chiama la fusione tra la vocale finale di una parola e la vocale iniziale della successiva?", answer: ["sinalefe"], explain: "La sinalefe riduce due sillabe a una sola nel conteggio metrico." },
      { type: "mc", q: "Qual è la forma metrica del Canzoniere di Petrarca più comune oltre al sonetto?", options: ["La canzone", "L'ode barbara", "Il poema in ottave", "Il verso libero"], answer: 0, explain: "Il Canzoniere raccoglie 366 componimenti, soprattutto sonetti e canzoni." },
      { type: "mc", q: "Che cosa sono i versi sciolti?", options: ["Versi senza rima", "Versi con molte rime", "Versi cantati", "Versi di nove sillabe"], answer: 0, explain: "L'infinito di Leopardi è in endecasillabi sciolti." },
      { type: "tf", q: "Ungaretti scriveva solo in endecasillabi rimati.", answer: false, explain: "Ungaretti usò il verso libero, con versi anche di una sola parola." },
      { type: "order", q: "Metti in ordine la crescita delle strofe per numero di versi.", items: ["Distico", "Terzina", "Quartina", "Sestina"], explain: "Rispettivamente 2, 3, 4 e 6 versi." },
      { type: "mc", q: "Chi inventò il sonetto?", options: ["Giacomo da Lentini", "Dante Alighieri", "Francesco Petrarca", "Ugo Foscolo"], answer: 0, explain: "Il notaio Giacomo da Lentini della Scuola siciliana è considerato l'inventore del sonetto." },
      { type: "mc", q: "Che cos'è un enjambement?", options: ["Una frase che prosegue nel verso successivo", "Una rima interna", "Un verso senza accento", "Una strofa di due versi"], answer: 0, explain: "Spezza l'unità tra verso e sintassi, mettendo in rilievo le parole." }
    ]
  }
});
