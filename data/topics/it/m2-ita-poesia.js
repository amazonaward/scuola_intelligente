TOPIC('it', {
  id: "m2-ita-poesia",
  title: "La poesia e le figure retoriche",
  intro: "La poesia è il modo più «concentrato» di usare le parole: dice tanto in poco spazio, gioca con i <b>suoni</b>, il <b>ritmo</b> e le <b>immagini</b>. Impariamo a leggere una poesia come fanno i poeti: contando le sillabe, ascoltando le rime e scoprendo le <b>figure retoriche</b>, i «trucchi» che rendono le parole indimenticabili.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Il testo poetico: verso, strofa, rima",
      html: `<ul>
<li>Il <b>verso</b> è la riga della poesia. Va a capo non perché finisce lo spazio, ma per scelta del poeta.</li>
<li>La <b>strofa</b> è un gruppo di versi separato dagli altri da uno spazio bianco: <b>distico</b> (2 versi), <b>terzina</b> (3), <b>quartina</b> (4), <b>sestina</b> (6), <b>ottava</b> (8).</li>
<li>La <b>rima</b> è l'uguaglianza dei suoni dalla vocale accentata in poi: <i>am<b>ore</b> / cu<b>ore</b></i>, <i>s<b>ole</b> / par<b>ole</b></i>. Gli schemi principali (si indicano con lettere):
<ul>
<li><b>baciata</b>: AABB</li>
<li><b>alternata</b>: ABAB</li>
<li><b>incrociata</b>: ABBA</li>
<li><b>incatenata</b>: ABA BCB CDC (quella di Dante)</li>
</ul></li>
<li>Se non ci sono rime si parla di <b>versi sciolti</b>; se non c'è nemmeno una misura fissa, di <b>versi liberi</b> (molto usati nel Novecento: Ungaretti, Montale).</li>
</ul>`
    },
    {
      type: "text",
      title: "Contare le sillabe: la metrica",
      html: `<p>I versi italiani si classificano in base al numero di <b>sillabe metriche</b>: <b>settenario</b> (7), <b>ottonario</b> (8), <b>novenario</b> (9), <b>endecasillabo</b> (11, il verso più importante della nostra poesia).</p>
<p>Le sillabe metriche non sono sempre uguali a quelle grammaticali, per tre regole:</p>
<ol>
<li><b>Sinalefe</b>: la vocale finale di una parola e quella iniziale della parola dopo si fondono in una sola sillaba: <i>mi / ri / tro / vai / per / u / na / sel / <b>va‿o</b> / scu / ra</i> → «selva oscura» si legge «sel-vao-scu-ra»: 11 sillabe metriche invece di 12 grammaticali.</li>
<li>L'<b>ultima sillaba accentata</b> conta: si conta fino all'ultimo accento e si aggiunge 1. Se il verso finisce con parola <b>tronca</b> (<i>città</i>) si aggiunge una sillaba; se finisce con parola <b>sdrucciola</b> (<i>tavola</i>) se ne toglie una.</li>
<li><b>Dieresi</b> e <b>sineresi</b>: a volte due vocali vicine contano come due sillabe (dieresi, segnata con ¨: <i>sopra la rïa</i>) o come una (sineresi).</li>
</ol>
<p>Esempio: <i>Nel / mez / zo / del / cam / min / di / no / stra / vi / ta</i> = <b>11 sillabe</b> → endecasillabo.</p>`
    },
    {
      type: "svg",
      title: "Lo schema delle rime",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fdf4ff"/>
<text x="20" y="32" font-size="18" font-weight="bold" fill="#701a75">Baciata (AABB)</text>
<rect x="20" y="44" width="16" height="16" fill="#ec4899"/><text x="44" y="58" font-size="15" fill="#1f2937">…la sera fresca e piana <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="66" width="16" height="16" fill="#ec4899"/><text x="44" y="80" font-size="15" fill="#1f2937">…suona la campana <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="88" width="16" height="16" fill="#3b82f6"/><text x="44" y="102" font-size="15" fill="#1f2937">…il gatto sul cuscino <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="110" width="16" height="16" fill="#3b82f6"/><text x="44" y="124" font-size="15" fill="#1f2937">…dorme col suo micino <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<text x="320" y="32" font-size="18" font-weight="bold" fill="#701a75">Alternata (ABAB)</text>
<rect x="320" y="44" width="16" height="16" fill="#ec4899"/><text x="344" y="58" font-size="15" fill="#1f2937">…il vento <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="66" width="16" height="16" fill="#3b82f6"/><text x="344" y="80" font-size="15" fill="#1f2937">…le foglie <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="88" width="16" height="16" fill="#ec4899"/><text x="344" y="102" font-size="15" fill="#1f2937">…lento <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="110" width="16" height="16" fill="#3b82f6"/><text x="344" y="124" font-size="15" fill="#1f2937">…raccoglie <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<text x="20" y="175" font-size="18" font-weight="bold" fill="#701a75">Incrociata (ABBA)</text>
<rect x="20" y="187" width="16" height="16" fill="#ec4899"/><text x="44" y="201" font-size="15" fill="#1f2937">…mare <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="209" width="16" height="16" fill="#3b82f6"/><text x="44" y="223" font-size="15" fill="#1f2937">…stella <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="231" width="16" height="16" fill="#3b82f6"/><text x="44" y="245" font-size="15" fill="#1f2937">…bella <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="253" width="16" height="16" fill="#ec4899"/><text x="44" y="267" font-size="15" fill="#1f2937">…navigare <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<text x="320" y="175" font-size="18" font-weight="bold" fill="#701a75">Incatenata (ABA BCB)</text>
<rect x="320" y="187" width="16" height="16" fill="#ec4899"/><text x="344" y="201" font-size="15" fill="#1f2937">…vita <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="209" width="16" height="16" fill="#3b82f6"/><text x="344" y="223" font-size="15" fill="#1f2937">…oscura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="231" width="16" height="16" fill="#ec4899"/><text x="344" y="245" font-size="15" fill="#1f2937">…smarrita <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="253" width="16" height="16" fill="#3b82f6"/><text x="344" y="267" font-size="15" fill="#1f2937">…dura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="275" width="16" height="16" fill="#22c55e"/><text x="344" y="289" font-size="15" fill="#1f2937">…forte <tspan font-weight="bold" fill="#22c55e">(C)</tspan></text>
<rect x="320" y="297" width="16" height="16" fill="#3b82f6"/><text x="344" y="311" font-size="15" fill="#1f2937">…paura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
</svg>`,
      caption: "Stesso colore = stessa rima. L'incatenata è quella della Divina Commedia."
    },
    {
      type: "quiz",
      title: "Mini-quiz: versi e rime",
      questions: [
        { type: "num", q: "Quante sillabe metriche ha un endecasillabo?", answer: 11, explain: "Dal greco héndeka = undici." },
        { type: "mc", q: "Lo schema ABAB è una rima…", options: ["baciata", "alternata", "incrociata"], answer: 1, explain: "I versi rimano a uno sì e uno no: alternata." },
        { type: "tf", q: "Con la sinalefe due vocali di parole vicine contano come una sola sillaba.", answer: true, explain: "Es. «selva oscura»: la «a» di selva e la «o» di oscura si fondono in una sola sillaba metrica." }
      ]
    },
    {
      type: "text",
      title: "Le figure retoriche di suono",
      html: `<ul>
<li><b>Allitterazione</b>: ripetizione dello stesso suono all'inizio o all'interno di parole vicine. <i>«<b>F</b>resche le mie parole ne la sera / ti sien come il <b>f</b>ruscìo che <b>f</b>an le <b>f</b>oglie»</i> (D'Annunzio).</li>
<li><b>Onomatopea</b>: parola che imita un suono. <i>«<b>Tin tin</b> / di campanelle»</i>; <i>«<b>Don… Don…</b> E mi dicono, Dormi!»</i> (Pascoli, <i>La mia sera</i>).</li>
<li><b>Paronomasia</b>: accostamento di parole dal suono simile ma significato diverso. <i>«Chi <b>dice</b> donna dice <b>danno</b>»</i>; <i>«<b>traduttore</b>, <b>traditore</b>»</i>.</li>
<li><b>Assonanza</b> e <b>consonanza</b>: rime «imperfette», con le stesse vocali (<i>c<b>a</b>s<b>a</b> / l<b>a</b>n<b>a</b></i>) o le stesse consonanti (<i>ca<b>nt</b>o / te<b>nt</b>a</i>).</li>
</ul>`
    },
    {
      type: "text",
      title: "Le figure retoriche di significato",
      html: `<ul>
<li><b>Similitudine</b>: paragone tra due elementi con <b>come, simile a, sembra, pare</b>. <i>«Si sta <b>come</b> / d'autunno / sugli alberi / le foglie»</i> (Ungaretti, <i>Soldati</i>, 1918).</li>
<li><b>Metafora</b>: una similitudine «accorciata», senza il «come»: si sostituisce una parola con un'altra per somiglianza. <i>«Sei <b>un leone</b>»</i>; <i>«la <b>primavera</b> della vita»</i>; <i>«il mare è <b>una tavola</b>»</i>.</li>
<li><b>Personificazione</b>: si attribuiscono qualità umane a cose, animali, idee. <i>«Il <b>sole</b> ride»</i>; <i>«<b>La nebbia</b> agli irti colli / piovigginando <b>sale</b>»</i> (Carducci).</li>
<li><b>Anafora</b>: ripetizione della stessa parola all'inizio di più versi. <i>«<b>Per me</b> si va ne la città dolente, / <b>per me</b> si va ne l'etterno dolore, / <b>per me</b> si va tra la perduta gente»</i> (Dante, Inferno III).</li>
<li><b>Iperbole</b>: esagerazione. <i>«Te l'ho detto <b>mille volte</b>»</i>; <i>«ho una fame <b>da lupi</b>»</i>.</li>
<li><b>Sinestesia</b>: si uniscono sensazioni di sensi diversi. <i>«<b>urlo nero</b>»</i> (Quasimodo: udito + vista); <i>«<b>voce calda</b>»</i>.</li>
<li><b>Ossimoro</b>: unione di due parole di significato opposto. <i>«<b>ghiaccio bollente</b>»</i>, <i>«<b>silenzio assordante</b>»</i>, <i>«<b>dolce</b> <b>amaro</b>»</i>.</li>
<li><b>Metonimia</b>: si usa una parola al posto di un'altra legata a lei (il contenente per il contenuto, l'autore per l'opera): <i>«bere <b>un bicchiere</b>»</i>, <i>«leggere <b>un Montale</b>»</i>.</li>
<li><b>Sineddoche</b>: la parte per il tutto. <i>«avere un <b>tetto</b>»</i> (= una casa), <i>«cento <b>vele</b>»</i> (= cento navi).</li>
</ul>`
    },
    {
      type: "text",
      title: "Le figure retoriche d'ordine",
      html: `<ul>
<li><b>Enumerazione</b>: elenco di parole. <i>«Le donne, i cavallier, l'arme, gli amori, / le cortesie, l'audaci imprese io canto»</i> (Ariosto, <i>Orlando furioso</i>).</li>
<li><b>Climax</b>: elenco in cui l'intensità <b>cresce</b> (o cala, «anticlimax»). <i>«Mi piace, mi entusiasma, mi fa impazzire!»</i></li>
<li><b>Anastrofe</b>: inversione dell'ordine normale delle parole. <i>«Sempre caro <b>mi fu</b> quest'ermo colle»</i> (Leopardi, <i>L'infinito</i>) invece di «quest'ermo colle mi fu sempre caro».</li>
<li><b>Chiasmo</b>: incrocio di elementi secondo lo schema AB-BA. <i>«Bisogna <b>mangiare</b> per <b>vivere</b>, non <b>vivere</b> per <b>mangiare</b>»</i>. In Ariosto: <i>«Le <b>donne</b>, i <b>cavallier</b>, l'<b>arme</b>, gli <b>amori</b>»</i> → donne (A) e amori (A) si legano tra loro, come cavallieri (B) e armi (B).</li>
<li><b>Enjambement</b> (in francese «scavalcamento»): la frase non finisce con il verso e «scavalca» nel verso successivo. <i>«e il naufragar m'è dolce / in questo mare»</i>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: analizziamo «Soldati» di Ungaretti",
      html: `<p><i>Bosco di Courton luglio 1918</i></p>
<p style="font-size:1.2em"><i>Si sta come<br>d'autunno<br>sugli alberi<br>le foglie</i></p>
<ul>
<li><b>Contesto</b>: Giuseppe Ungaretti combatté nella Prima guerra mondiale; la data e il luogo (un bosco in Francia) dicono dove nasce la poesia.</li>
<li><b>Forma</b>: quattro versi brevissimi, liberi, senza rima e senza punteggiatura. Ogni parola pesa.</li>
<li><b>Figura retorica</b>: una <b>similitudine</b> (introdotta da «come»): i soldati sono come le foglie in autunno, che possono cadere da un momento all'altro.</li>
<li><b>Significato</b>: la <b>fragilità</b> e la precarietà della vita in guerra. Il titolo «Soldati» è necessario per capire il paragone.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: la parafrasi e il commento",
      html: `<p>Prendiamo l'inizio de <i>L'infinito</i> di Giacomo Leopardi (1819):</p>
<p><i>Sempre caro mi fu quest'ermo colle,<br>e questa siepe, che da tanta parte<br>dell'ultimo orizzonte il guardo esclude.</i></p>
<ol>
<li><b>Parafrasi</b> (riscrivere in prosa con parole d'oggi, in ordine normale): <i>Questo colle solitario mi è sempre stato caro, e anche questa siepe, che impedisce allo sguardo di vedere gran parte dell'orizzonte più lontano.</i></li>
<li><b>Figure</b>: <b>anastrofe</b> («sempre caro mi fu»), <b>enjambement</b> («tanta parte / dell'ultimo orizzonte»), parole letterarie («ermo» = solitario, «guardo» = sguardo).</li>
<li><b>Commento</b>: la siepe che <b>nasconde</b> la vista spinge l'immaginazione a figurarsi spazi infiniti. Paradosso: è proprio il limite che fa pensare all'infinito.</li>
</ol>`
    },
    {
      type: "widget",
      title: "Riconosci la figura retorica",
      widget: "classify",
      options: {
        groups: ["🪞 Similitudine", "🎭 Metafora", "🙋 Personificazione", "🔁 Anafora", "🎈 Iperbole"],
        items: [
          ["Forte come un toro", 0], ["Bianca come la neve", 0],
          ["Sei un vulcano di idee", 1], ["Quel ragazzo è una volpe", 1],
          ["Il vento sussurra tra i rami", 2], ["La città dorme", 2],
          ["Ti amo per… ti amo per… ti amo per…", 3], ["Ogni giorno… ogni sera… ogni notte…", 3],
          ["Ho aspettato un secolo", 4], ["Ti ho chiamato un milione di volte", 4]
        ]
      },
      caption: "Tocca un esempio e poi la figura retorica giusta."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La poesia più corta",
      html: `<p>Una delle poesie più famose (e più corte) della letteratura italiana è <b>«Mattina»</b> di Giuseppe Ungaretti (1917): <i>«M'illumino / d'immenso»</i>. Solo <b>due versi e tre parole</b>! In Giappone esiste una forma poetica brevissima, l'<b>haiku</b>: tre versi di 5, 7 e 5 sillabe, che di solito parlano della natura e delle stagioni.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le figure retoriche nella pubblicità",
      html: `<p>Le figure retoriche non stanno solo nei libri: la <b>pubblicità</b>, gli slogan e le canzoni ne sono pieni! Allitterazioni e rime aiutano a ricordare un marchio, le iperboli fanno sembrare un prodotto straordinario, le metafore creano immagini forti. Anche nei modi di dire usiamo figure retoriche ogni giorno: «sei la luce dei miei occhi» (metafora), «piove a catinelle» (iperbole), «bere un bicchiere» (metonimia).</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la poesia",
      intro: "La poesia si capisce con le orecchie, gli occhi e il corpo. Prova queste strade.",
      tabs: [
        {
          label: "🎧 Come una canzone",
          html: `<p>Le canzoni sono poesie con la musica! Hanno <b>strofe</b> e <b>ritornello</b> (che è un'<b>anafora</b> gigante), <b>rime</b> e <b>ritmo</b>. Prendi il testo della tua canzone preferita e prova a trovare: quante strofe ci sono? Quali parole rimano? C'è una metafora o un'iperbole? Il <b>rap</b>, in particolare, è pieno di rime interne, allitterazioni e giochi di parole: i rapper sono maestri di figure retoriche!</p>`
        },
        {
          label: "🥁 Batti il ritmo",
          html: `<p>Il verso ha un <b>ritmo</b> dato dagli <b>accenti</b>, come una batteria. Leggi ad alta voce battendo la mano sul banco sulle sillabe accentate:</p>
<p><i>nel mez-<b>ZO</b> del cam-<b>MIN</b> di <b>NO</b>-stra <b>VI</b>-ta</i></p>
<p>Gli accenti cadono sulla 2ª, 6ª, 8ª e 10ª sillaba. Nell'endecasillabo c'è <b>sempre un accento sulla 10ª</b> sillaba; gli altri cambiano e danno al verso la sua «musica». Dividi il verso a battiti e contali sulle dita!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#eff6ff"/>
<g font-size="16" text-anchor="middle" font-weight="bold">
<rect x="10" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="34" y="92" fill="#1e3a8a">nel</text>
<rect x="62" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="86" y="92" fill="#fff">mez</text>
<rect x="114" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="138" y="92" fill="#1e3a8a">zo</text>
<rect x="166" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="190" y="92" fill="#1e3a8a">del</text>
<rect x="218" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="242" y="92" fill="#1e3a8a">cam</text>
<rect x="270" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="294" y="92" fill="#fff">min</text>
<rect x="322" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="346" y="92" fill="#1e3a8a">di</text>
<rect x="374" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="398" y="92" fill="#fff">no</text>
<rect x="426" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="450" y="92" fill="#1e3a8a">stra</text>
<rect x="478" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="502" y="92" fill="#fff">vi</text>
<rect x="530" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="554" y="92" fill="#1e3a8a">ta</text>
</g>
<g font-size="14" text-anchor="middle" fill="#334155">
<text x="34" y="135">1</text><text x="86" y="135">2</text><text x="138" y="135">3</text><text x="190" y="135">4</text><text x="242" y="135">5</text><text x="294" y="135">6</text><text x="346" y="135">7</text><text x="398" y="135">8</text><text x="450" y="135">9</text><text x="502" y="135">10</text><text x="554" y="135">11</text>
</g>
<text x="300" y="40" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">🥁 = sillaba accentata (blu)</text>
<text x="300" y="175" font-size="15" text-anchor="middle" fill="#334155">11 sillabe, accento fisso sulla 10ª: endecasillabo</text>
</svg>`
        },
        {
          label: "🖼️ Disegna la metafora",
          html: `<p>Una metafora è un'<b>immagine</b>. Prova a disegnarla letteralmente: «quel ragazzo è un <b>leone</b>» → disegna un ragazzo con la criniera! Poi chiediti: <i>che cosa hanno in comune</i> il ragazzo e il leone? Il <b>coraggio</b>, la forza. Quella qualità comune è il «ponte» della metafora. Nella similitudine il ponte è dichiarato (<i>coraggioso <b>come</b> un leone</i>); nella metafora lo devi trovare tu.</p>`
        },
        {
          label: "🇯🇵 L'haiku giapponese",
          html: `<p>In Giappone i bambini imparano la poesia con l'<b>haiku</b>: <b>3 versi</b> di <b>5 – 7 – 5 sillabe</b>, un'immagine della natura e una parola che indica la stagione. Il più famoso è di <b>Matsuo Bashō</b> (1686):</p>
<p><i>Il vecchio stagno — / una rana vi salta: / il suono dell'acqua.</i></p>
<p>Prova a scriverne uno tu: conta le sillabe sulle dita! È un ottimo allenamento per la metrica.</p>`
        },
        {
          label: "🃏 Flashcard delle figure",
          html: `<p>Gira le carte e ripassa.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Similitudine", back: "Paragone con «come»: veloce come il vento" },
              { front: "Metafora", back: "Paragone senza «come»: sei un fulmine" },
              { front: "Anafora", back: "Stessa parola all'inizio di più versi" },
              { front: "Allitterazione", back: "Ripetizione di suoni: il fruscìo che fan le foglie" },
              { front: "Onomatopea", back: "Parola che imita un suono: tic tac, din don" },
              { front: "Ossimoro", back: "Opposti uniti: ghiaccio bollente" },
              { front: "Sinestesia", back: "Sensi diversi uniti: urlo nero" },
              { front: "Enjambement", back: "La frase continua nel verso dopo" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della poesia",
      nodes: [
        { id: "poesia", label: "Testo poetico", x: 50, y: 6, color: "#86198f", html: "Testo in versi che usa suono, ritmo e immagini.", why: "La parola viene dal greco <i>poiéin</i>, «fare, creare». In origine la poesia era <b>cantata</b>: rima e ritmo aiutavano a ricordare a memoria i testi quando la scrittura era rara (come l'Iliade e l'Odissea)." },
        { id: "metrica", label: "Metrica", x: 20, y: 28, color: "#2563eb", html: "Il conteggio delle sillabe e degli accenti.", why: "La metrica latina si basava sulla durata delle sillabe (lunghe e brevi). Quando nel volgare si perse la differenza di durata, si passò a contare le <b>sillabe</b> e gli <b>accenti</b>: nasce così l'endecasillabo." },
        { id: "endec", label: "Endecasillabo", x: 12, y: 54, color: "#0ea5e9", html: "Il verso di 11 sillabe, re della poesia italiana.", why: "Deriva da versi provenzali e latini medievali; fu reso perfetto da Dante e Petrarca. È abbastanza lungo per una frase completa e abbastanza vario negli accenti da non annoiare." },
        { id: "rima", label: "Rima", x: 38, y: 44, color: "#ec4899", html: "Uguaglianza di suono dalla vocale accentata in poi.", why: "Nella poesia latina classica la rima quasi non esisteva; si diffuse negli <b>inni religiosi medievali</b> e nella poesia dei trovatori provenzali, da cui passò alla Scuola siciliana." },
        { id: "figure", label: "Figure retoriche", x: 70, y: 28, color: "#16a34a", html: "Usi particolari della lingua per dare forza al testo.", why: "Furono classificate dai maestri di <b>retorica</b> greci e romani — l'arte di parlare in pubblico — come <b>Aristotele</b> e <b>Quintiliano</b> (<i>Institutio oratoria</i>, I secolo d.C.). I nomi greci (metafora, anafora, iperbole) vengono da lì." },
        { id: "suono", label: "Di suono", x: 62, y: 56, color: "#f97316", html: "Allitterazione, onomatopea, paronomasia.", why: "Il nostro cervello è sensibile ai suoni ripetuti: per questo filastrocche e slogan si ricordano facilmente. Pascoli e D'Annunzio, a fine Ottocento, ne fecero un uso molto ricercato." },
        { id: "signif", label: "Di significato", x: 88, y: 52, color: "#dc2626", html: "Similitudine, metafora, personificazione, iperbole, ossimoro…", why: "<i>Metafora</i> in greco significa «trasporto»: si «trasporta» il significato da una cosa all'altra. I linguisti Lakoff e Johnson (1980) hanno mostrato che anche nel parlare quotidiano pensiamo per metafore («il tempo è denaro»)." },
        { id: "ordine", label: "D'ordine", x: 74, y: 82, color: "#ca8a04", html: "Anafora, anastrofe, chiasmo, climax, enjambement.", why: "Cambiando l'ordine normale delle parole si mette in risalto un elemento. Il latino aveva un ordine libero e i poeti italiani hanno ereditato il gusto delle inversioni." },
        { id: "versolib", label: "Verso libero", x: 30, y: 82, color: "#64748b", html: "Versi senza misura fissa né rima obbligata.", why: "Nasce nell'Ottocento in Francia e America (Walt Whitman) e si diffonde nel Novecento: poeti come Ungaretti volevano liberare la parola dalle regole per farle esprimere l'essenziale." }
      ],
      edges: [
        ["poesia", "metrica", "ha una"],
        ["metrica", "endec", "verso principale"],
        ["poesia", "rima", "spesso usa"],
        ["poesia", "figure", "usa"],
        ["figure", "suono", ""],
        ["figure", "signif", ""],
        ["figure", "ordine", ""],
        ["metrica", "versolib", "si libera nel"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: figure retoriche",
      questions: [
        { type: "mc", q: "«Il mare è una tavola blu» contiene…", options: ["una similitudine", "una metafora", "un'onomatopea"], answer: 1, explain: "Il paragone è senza «come»: metafora." },
        { type: "mc", q: "«Silenzio assordante» è un…", options: ["ossimoro", "climax", "chiasmo"], answer: 0, explain: "Unisce due concetti opposti: ossimoro." },
        { type: "mc", q: "«Per me si va… / per me si va… / per me si va…» è un esempio di…", options: ["anafora", "iperbole", "sinestesia"], answer: 0, explain: "Ripetizione all'inizio dei versi: anafora." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Verso</b>, <b>strofa</b>, <b>rima</b> (baciata AABB, alternata ABAB, incrociata ABBA, incatenata ABA BCB).</li>
<li>Sillabe metriche: <b>sinalefe</b>, ultimo accento + 1; endecasillabo = 11.</li>
<li>Figure di <b>suono</b>: allitterazione, onomatopea, paronomasia.</li>
<li>Figure di <b>significato</b>: similitudine (con «come»), metafora (senza), personificazione, iperbole, ossimoro, sinestesia, metonimia.</li>
<li>Figure d'<b>ordine</b>: anafora, anastrofe, climax, chiasmo, enjambement.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Verso", d: "Ciascuna riga di una poesia." },
    { t: "Strofa", d: "Gruppo di versi separato dagli altri da uno spazio." },
    { t: "Rima", d: "Uguaglianza di suoni nella parte finale di due parole a partire dalla vocale accentata." },
    { t: "Endecasillabo", d: "Verso di 11 sillabe metriche con accento sulla 10ª." },
    { t: "Sinalefe", d: "Fusione in una sola sillaba della vocale finale di una parola con quella iniziale della successiva." },
    { t: "Similitudine", d: "Paragone tra due elementi introdotto da «come» o simili." },
    { t: "Metafora", d: "Sostituzione di una parola con un'altra per somiglianza, senza «come»." },
    { t: "Anafora", d: "Ripetizione di una parola all'inizio di versi o frasi successive." },
    { t: "Ossimoro", d: "Accostamento di due parole di significato opposto." },
    { t: "Enjambement", d: "Quando la frase prosegue oltre la fine del verso." },
    { t: "Parafrasi", d: "Riscrittura in prosa e con parole semplici del contenuto di una poesia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "«Veloce come il vento» è…", options: ["una metafora", "una similitudine", "un'anafora"], answer: 1, explain: "C'è «come»: similitudine." },
      { type: "mc", q: "Lo schema ABBA è una rima…", options: ["incrociata", "alternata", "baciata"], answer: 0, explain: "Il primo verso rima con il quarto, il secondo con il terzo." },
      { type: "num", q: "Quanti versi ha un sonetto?", answer: 14, explain: "Due quartine e due terzine: 4+4+3+3 = 14." },
      { type: "tf", q: "Nell'onomatopea una parola imita un suono.", answer: true, explain: "Es. «tic tac», «bau», «din don»." },
      { type: "mc", q: "«Il sole sorride ai bambini» contiene…", options: ["una personificazione", "un ossimoro", "una sinestesia"], answer: 0, explain: "Il sole compie un'azione umana: personificazione." },
      { type: "text", q: "Come si chiama la figura in cui due sensi diversi si uniscono, come in «voce calda»?", answer: ["sinestesia", "la sinestesia"], explain: "Udito (voce) + tatto (calda): sinestesia." },
      { type: "mc", q: "Che cos'è l'enjambement?", options: ["Una rima tra parole tronche", "La frase che continua nel verso successivo", "La ripetizione di un suono"], answer: 1, explain: "La frase «scavalca» la fine del verso." },
      { type: "mc", q: "«Te l'ho detto mille volte» è…", options: ["un'iperbole", "un chiasmo", "una metonimia"], answer: 0, explain: "È un'esagerazione: iperbole." },
      { type: "tf", q: "I versi liberi devono sempre rimare.", answer: false, explain: "I versi liberi non hanno né misura fissa né rima obbligata." },
      { type: "mc", q: "Chi scrisse «Soldati» («Si sta come d'autunno…»)?", options: ["Leopardi", "Ungaretti", "Pascoli"], answer: 1, explain: "Giuseppe Ungaretti, nel 1918." },
      { type: "mc", q: "«Bere un bicchiere» è un esempio di…", options: ["metonimia", "anafora", "onomatopea"], answer: 0, explain: "Il contenitore (bicchiere) al posto del contenuto: metonimia." },
      { type: "order", q: "Ordina i versi dal più corto al più lungo.", items: ["Settenario", "Ottonario", "Novenario", "Endecasillabo"], explain: "7, 8, 9, 11 sillabe." }
    ]
  }
});
