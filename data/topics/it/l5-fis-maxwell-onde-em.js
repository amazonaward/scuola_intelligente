TOPIC('it', {
  id: "l5-fis-maxwell-onde-em",
  title: "Equazioni di Maxwell e onde elettromagnetiche",
  intro: "Nel 1865 James Clerk Maxwell riuscì a riassumere in <b>quattro equazioni</b> tutto ciò che si sapeva sull'elettricità e sul magnetismo, e scoprì che esse contenevano una sorpresa: <b>onde</b> di campi elettrici e magnetici che viaggiano nello spazio vuoto alla velocità della luce. La luce, quindi, è un'onda elettromagnetica, e la stessa teoria prevedeva un'intera famiglia di onde invisibili: radio, microonde, raggi X. In questa lezione vediamo le equazioni di Maxwell, come nasce un'onda elettromagnetica, le sue proprietà e lo <b>spettro</b> con le sue applicazioni, dalla radio al Wi-Fi alla radiografia.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Quattro leggi in cerca di un'unità",
      html: `<p>Nell'Ottocento elettricità e magnetismo avevano già una descrizione quantitativa, basata su leggi sperimentali distinte. Le ripassiamo, nella forma "a grandi linee" in cui diventeranno le equazioni di Maxwell.</p>
<ul>
<li><b>Legge di Gauss per il campo elettrico</b>: il flusso di <b>E</b> attraverso una superficie chiusa è proporzionale alla carica contenuta, Φ(E) = Q/ε<sub>0</sub>. Le <b>cariche</b> sono sorgenti del campo elettrico.</li>
<li><b>Legge di Gauss per il campo magnetico</b>: il flusso di <b>B</b> attraverso una superficie chiusa è nullo, Φ(B) = 0. Non esistono "cariche magnetiche".</li>
<li><b>Legge di Faraday-Neumann</b>: la circuitazione di <b>E</b> lungo una linea chiusa è uguale a −ΔΦ(B)/Δt. Un campo magnetico <b>variabile</b> genera un campo elettrico.</li>
<li><b>Legge di Ampère</b>: la circuitazione di <b>B</b> è μ<sub>0</sub> per la corrente concatenata. Una <b>corrente</b> genera un campo magnetico.</li>
</ul>
<p>Con il campo elettrico che dipende dalle cariche e dalla variazione di B, e il campo magnetico che dipende dalle correnti, il quadro è quasi simmetrico. Ma c'è un'incongruenza nascosta nella quarta legge.</p>`
    },
    {
      type: "text",
      title: "La correzione di Maxwell: la corrente di spostamento",
      html: `<p>Si consideri un condensatore che si sta caricando in un circuito. Nei fili scorre una corrente i, e per la legge di Ampère intorno ai fili c'è un campo magnetico. Ma tra le armature del condensatore <b>non scorre alcuna corrente</b> (c'è il vuoto o un isolante). Scegliendo una linea chiusa intorno al filo, si possono definire due superfici che la delimitano: una che attraversa il filo (con corrente concatenata i) e una "a sacchetto" che passa tra le armature (corrente concatenata nulla). Per la stessa linea, la legge di Ampère darebbe due risultati diversi: una contraddizione.</p>
<p>Maxwell (1861-62) risolse il problema riconoscendo che anche un <b>campo elettrico variabile</b> genera un campo magnetico. Tra le armature il campo E aumenta nel tempo, e il termine ε<sub>0</sub>·ΔΦ(E)/Δt (la cosiddetta <b>corrente di spostamento</b>) ha esattamente il valore della corrente i nei fili. La legge di Ampère corretta, o <b>legge di Ampère-Maxwell</b>, diventa:</p>
<p style="text-align:center"><b>Γ(B) = μ<sub>0</sub>·( i + ε<sub>0</sub>·ΔΦ(E)/Δt )</b></p>
<p>Questa aggiunta, apparentemente piccola, ha una conseguenza enorme: ora esiste una simmetria completa. Un campo <b>B</b> variabile genera un campo <b>E</b> (Faraday), e un campo <b>E</b> variabile genera un campo <b>B</b> (Maxwell). Ogni campo può sostenere l'altro, anche lontano da cariche e correnti: sono le condizioni per un'onda.</p>`
    },
    {
      type: "remember",
      title: "Le equazioni di Maxwell in sintesi",
      html: `<table>
<tr><th>Legge</th><th>Che cosa dice</th></tr>
<tr><td>Gauss per E</td><td>Le cariche sono sorgenti di E: Φ(E) = Q/ε<sub>0</sub></td></tr>
<tr><td>Gauss per B</td><td>Non esistono monopoli magnetici: Φ(B) = 0</td></tr>
<tr><td>Faraday-Neumann</td><td>Un B variabile genera un E: Γ(E) = −ΔΦ(B)/Δt</td></tr>
<tr><td>Ampère-Maxwell</td><td>Correnti e E variabile generano B: Γ(B) = μ<sub>0</sub>(i + ε<sub>0</sub>ΔΦ(E)/Δt)</td></tr>
</table>
<p>Insieme alla forza di Lorentz F = q(E + v × B), queste equazioni descrivono <b>tutti</b> i fenomeni elettromagnetici classici.</p>`
    },
    {
      type: "text",
      title: "Le onde elettromagnetiche e il loro stupefacente valore di c",
      html: `<p>In una regione di spazio senza cariche né correnti, le equazioni di Maxwell possono essere combinate. Il risultato è un'<b>equazione d'onda</b>: i campi E e B soddisfano un'equazione di propagazione simile a quella delle onde su una corda, con una velocità che dipende solo da due costanti misurabili in laboratorio:</p>
<p style="text-align:center"><b>c = 1 / √(ε<sub>0</sub>·μ<sub>0</sub>)</b></p>
<p>Con ε<sub>0</sub> ≈ 8,85·10<sup>-12</sup> C²/(N·m²) (misurata con i condensatori) e μ<sub>0</sub> ≈ 4π·10<sup>-7</sup> T·m/A (con le correnti), si ottiene c ≈ <b>3,00·10<sup>8</sup> m/s</b>: proprio la velocità della luce, già misurata da Rømer (1676), Bradley (1728), Fizeau (1849) e Foucault (1850). Maxwell scrisse nel 1862 che era «difficile evitare la conclusione che la luce consista nelle ondulazioni trasversali dello stesso mezzo che è la causa dei fenomeni elettrici e magnetici». Era un caso rarissimo in cui una teoria <b>unifica</b> tre capitoli della fisica: elettricità, magnetismo e ottica.</p>
<p>Le proprietà di un'onda elettromagnetica nel vuoto, che discendono dalle equazioni, sono queste:</p>
<ul>
<li>è <b>trasversale</b>: <b>E</b> e <b>B</b> sono perpendicolari tra loro e alla direzione di propagazione;</li>
<li>E e B oscillano <b>in fase</b> e i loro valori sono legati da <b>E = c·B</b>;</li>
<li>la velocità nel vuoto è <b>c</b>, indipendente dalla frequenza e dal moto della sorgente;</li>
<li>vale la relazione tipica delle onde <b>c = λ·f</b>;</li>
<li>trasporta <b>energia</b> e <b>quantità di moto</b>: l'intensità media è I = ½·ε<sub>0</sub>·c·E<sub>0</sub>² (E<sub>0</sub> = ampiezza del campo elettrico) e una superficie che assorbe la luce riceve una piccolissima <b>pressione di radiazione</b>;</li>
<li>non ha bisogno di un mezzo materiale: si propaga nel vuoto (le onde dal Sole arrivano fino a noi).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Un'onda elettromagnetica",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<line x1="30" y1="150" x2="560" y2="150" stroke="#94a3b8" stroke-width="2"/>
<polygon points="575,150 558,142 558,158" fill="#94a3b8"/>
<path d="M30 150 Q 80 40 130 150 T 230 150 T 330 150 T 430 150 T 530 150" fill="none" stroke="#f97316" stroke-width="4"/>
<path d="M30 150 Q 80 210 130 150 T 230 150 T 330 150 T 430 150 T 530 150" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6 5" opacity="0.85"/>
<line x1="80" y1="150" x2="80" y2="95" stroke="#f97316" stroke-width="2"/>
<line x1="80" y1="150" x2="62" y2="175" stroke="#38bdf8" stroke-width="3"/>
<g font-family="sans-serif" font-size="16" font-weight="bold">
<text x="30" y="30" fill="#f97316">E (piano verticale)</text>
<text x="30" y="55" fill="#38bdf8">B (piano perpendicolare al foglio)</text>
<text x="500" y="135" fill="#e2e8f0">direzione di propagazione</text>
<text x="190" y="285" fill="#e2e8f0" font-size="14">λ = distanza tra due creste</text>
</g>
<line x1="80" y1="262" x2="230" y2="262" stroke="#4ade80" stroke-width="2"/>
<line x1="80" y1="254" x2="80" y2="270" stroke="#4ade80" stroke-width="2"/>
<line x1="230" y1="254" x2="230" y2="270" stroke="#4ade80" stroke-width="2"/>
</svg>`,
      caption: "Schema: E (arancione) e B (azzurro tratteggiato, perpendicolare al piano del disegno) oscillano in fase, perpendicolari tra loro e alla direzione di propagazione."
    },
    {
      type: "example",
      title: "Quanto vale il campo magnetico della luce del Sole?",
      html: `<p>La radiazione solare che arriva sopra l'atmosfera ha un'intensità di circa I = 1361 W/m² (costante solare). Dall'espressione I = ½·ε<sub>0</sub>·c·E<sub>0</sub>² si ricava E<sub>0</sub> = √(2I/(ε<sub>0</sub>·c)) = √(2 × 1361 / (8,85·10<sup>-12</sup> × 3,00·10<sup>8</sup>)) ≈ <b>1,0·10<sup>3</sup> V/m</b>.</p>
<p>L'ampiezza del campo magnetico è B<sub>0</sub> = E<sub>0</sub>/c ≈ 1,0·10<sup>3</sup>/3,0·10<sup>8</sup> ≈ <b>3,4·10<sup>-6</sup> T</b>, cioè 3,4 µT: pochi per cento del campo terrestre. Il tempo impiegato dalla luce a coprire la distanza Terra-Sole (1,50·10<sup>11</sup> m) è t = d/c = 1,50·10<sup>11</sup>/3,00·10<sup>8</sup> = 500 s, cioè <b>circa 8 minuti e 20 secondi</b>.</p>`
    },
    {
      type: "text",
      title: "Come nasce un'onda: Hertz e Marconi",
      html: `<p>Le equazioni mostrano che un'onda elettromagnetica è prodotta da <b>cariche accelerate</b> (in pratica, da cariche che oscillano). Per generare onde radio si usa un'<b>antenna</b> in cui gli elettroni sono fatti oscillare avanti e indietro a frequenza f: il campo che ne nasce, variabile, si stacca dall'antenna e viaggia nello spazio.</p>
<p><b>Heinrich Hertz</b> (1887-88) lo verificò in laboratorio: con una scintilla elettrica generava onde che rivelava a distanza con un anello metallico aperto, dove si producevano scintille. Dimostrò che le onde si riflettono, si rifrangono, si polarizzano e viaggiano a velocità c, come la luce. Il suo nome è diventato l'unità di frequenza: 1 Hz = 1 oscillazione al secondo. Qualche anno dopo <b>Guglielmo Marconi</b> (1895: primi collegamenti a qualche chilometro; <b>1901</b>: segnale attraverso l'Atlantico dalla Cornovaglia a Terranova) trasformò le onde in un mezzo di comunicazione: nasceva la radio. Marconi ricevette il Nobel per la fisica nel 1909, con Karl Braun.</p>
<p>Per trasmettere un segnale, un'onda portante ad alta frequenza viene <b>modulata</b> in ampiezza (AM) o in frequenza (FM) dal segnale da inviare (voce, musica, dati).</p>`
    },
    {
      type: "quiz",
      title: "Controlla: Maxwell e onde",
      questions: [
        { type: "mc", q: "Qual è il contributo di Maxwell alla legge di Ampère?", options: ["Un campo elettrico variabile genera un campo magnetico (corrente di spostamento)", "I monopoli magnetici esistono", "Il campo magnetico è conservativo", "La luce è una particella"], answer: 0, explain: "Il termine ε₀·ΔΦ(E)/Δt rende le equazioni coerenti e prevede le onde elettromagnetiche." },
        { type: "tf", q: "Un'onda elettromagnetica ha bisogno di un mezzo materiale per propagarsi.", answer: false, explain: "Si propaga anche nel vuoto: la luce delle stelle arriva fino a noi." },
        { type: "num", q: "Qual è la lunghezza d'onda (in m) di un'onda radio FM a 100 MHz? (c = 3,0·10⁸ m/s)", answer: 3, tol: 0.03, unit: "m", explain: "λ = c/f = 3,0·10⁸/10⁸ = 3,0 m." }
      ]
    },
    {
      type: "text",
      title: "Lo spettro elettromagnetico",
      html: `<p>Le onde elettromagnetiche possono avere qualunque frequenza: lo <b>spettro elettromagnetico</b> è il loro elenco ordinato. Cambiano il modo di produrle e di rivelarle, e le interazioni con la materia, ma sono la stessa cosa fisica: tutte viaggiano a c nel vuoto. I confini sono indicativi.</p>
<table>
<tr><th>Tipo</th><th>Lunghezza d'onda (ordine di grandezza)</th><th>Applicazioni</th></tr>
<tr><td>Onde radio</td><td>da pochi cm a km</td><td>radio, TV, telefonia, radar</td></tr>
<tr><td>Microonde</td><td>≈ 1 mm – 30 cm</td><td>forni, Wi-Fi (2,4 e 5 GHz), satelliti, radar</td></tr>
<tr><td>Infrarosso</td><td>≈ 700 nm – 1 mm</td><td>telecomandi, termografia, calore</td></tr>
<tr><td>Luce visibile</td><td>≈ 400 – 700 nm</td><td>visione, fotografia, fotosintesi</td></tr>
<tr><td>Ultravioletto</td><td>≈ 10 – 400 nm</td><td>abbronzatura, sterilizzazione, fluorescenza</td></tr>
<tr><td>Raggi X</td><td>≈ 0,01 – 10 nm</td><td>radiografia, TAC, cristallografia</td></tr>
<tr><td>Raggi gamma</td><td>&lt; 0,01 nm</td><td>radioterapia, astronomia, processi nucleari</td></tr>
</table>
<p>Più la frequenza è alta (e la lunghezza d'onda piccola), più le onde sono <b>energetiche</b> per quanto riguarda l'interazione con la materia: gli ultravioletti, i raggi X e i raggi gamma sono <b>radiazioni ionizzanti</b> (o quasi), capaci di rompere i legami chimici e danneggiare il DNA; le onde radio e le microonde no. Il perché lo scopriremo con il fotone e la fisica quantistica. Per ora basta sapere che la relazione E<sub>fotone</sub> = h·f assegna a ogni onda di frequenza f un'energia proporzionale alla frequenza.</p>`
    },
    {
      type: "widget",
      title: "Ordina lo spettro",
      widget: "classify",
      options: { groups: ["Onde radio e microonde", "Infrarossi / visibile", "Radiazioni ionizzanti"], items: [
        ["📻 Radio FM", 0],
        ["📶 Wi-Fi", 0],
        ["🍕 Forno a microonde", 0],
        ["📺 Telecomando", 1],
        ["🌈 Luce visibile", 1],
        ["🌡️ Termocamera", 1],
        ["🩻 Raggi X medici", 2],
        ["☢️ Raggi gamma", 2]
      ] },
      caption: "Dove si colloca ciascuna applicazione nello spettro?"
    },
    {
      type: "example",
      title: "Wi-Fi, forno e radio a confronto",
      html: `<p>Una rete Wi-Fi a 2,4 GHz: λ = c/f = 3,0·10<sup>8</sup>/2,4·10<sup>9</sup> ≈ <b>12,5 cm</b>. Un forno a microonde funziona a 2,45 GHz (λ ≈ 12,2 cm): scalda i cibi perché questa frequenza fa vibrare le molecole d'acqua. La radio FM a 100 MHz ha λ = 3 m, e le onde radio AM (per esempio 1 MHz) hanno λ = 300 m. La stessa luce verde con λ = 550 nm ha f ≈ 5,5·10<sup>14</sup> Hz.</p>
<p>La banda del Wi-Fi e quella del forno a 2,4 GHz sono vicinissime: ecco perché un forno acceso può disturbare la rete. La luce impiega 1,28 s a percorrere la distanza Terra-Luna (3,84·10<sup>8</sup> m): per questo le conversazioni con gli astronauti avevano un ritardo evidente.</p>`
    },
    {
      type: "decision",
      title: "1865: ammettere un nuovo «etere» o credere alle equazioni?",
      html: "<p>Sei un fisico del 1865. Maxwell ha pubblicato una teoria che prevede onde di campi elettrici e magnetici e dice che la luce è una di queste. Nessuno ha mai prodotto in laboratorio onde non luminose di questo tipo, e le equazioni sembrano richiedere un <b>mezzo</b> in cui le onde si propaghino (l'etere), che però nessuno ha mai rivelato. Ti chiedono di decidere se prendere sul serio la teoria.</p>",
      question: "Come ti comporti?",
      options: [
        { label: "Rifiuto la teoria: senza un mezzo reale non ha senso", outcome: "Sarebbe una scelta prudente ma sbagliata: la teoria ha già un grande successo, perché dalla misura di ε₀ e μ₀ prevede il valore corretto di c." },
        { label: "La accetto e cerco di produrre onde in laboratorio", outcome: "È la strada giusta: un test sperimentale diretto è la prova decisiva di una teoria. Hertz lo farà nel 1887." },
        { label: "Aspetto che qualcun altro la verifichi", outcome: "Atteggiamento comprensibile, ma la scienza avanza grazie a chi propone esperimenti decisivi." }
      ],
      answer: 1,
      explain: "Nel 1887-88 Heinrich Hertz produsse e rivelò onde radio, misurandone velocità, riflessione e rifrazione: la teoria di Maxwell era confermata. Il problema dell'etere sarà risolto soltanto con la relatività di Einstein (1905): le onde elettromagnetiche non hanno bisogno di alcun mezzo."
    },
    {
      type: "curiosity",
      title: "Maxwell, un genio morto troppo giovane",
      html: `<p>James Clerk Maxwell (Edimburgo 1831 – Cambridge 1879) morì a soli 48 anni. Oltre all'elettromagnetismo, ebbe un ruolo fondamentale nella teoria cinetica dei gas (la distribuzione di Maxwell delle velocità molecolari) e nel 1861 produsse la <b>prima fotografia a colori</b> con tre fotografie filtrate in rosso, verde e blu. Albert Einstein disse che il lavoro di Maxwell fu «il più profondo e il più fruttuoso che la fisica abbia conosciuto dai tempi di Newton».</p>`
    },
    {
      type: "curiosity",
      title: "Il cielo dei raggi X e la finestra della luce",
      html: `<p>L'atmosfera terrestre è trasparente quasi solo alla luce visibile e alle onde radio (le «finestre» dello spettro): gran parte degli ultravioletti, dei raggi X e gamma è assorbita dagli strati alti, il che protegge la vita. Per studiare l'Universo in tutte le bande, gli astronomi usano telescopi spaziali (Hubble per il visibile, Chandra per i raggi X, Fermi per i gamma) e radiotelescopi a terra, come quello di Sardinia (SRT) in Sardegna, con una parabola di 64 m.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: spettro e applicazioni",
      questions: [
        { type: "mc", q: "Quale onda ha la lunghezza d'onda minore?", options: ["Radio", "Microonde", "Visibile", "Raggi X"], answer: 3, explain: "I raggi X hanno λ ≈ 0,01-10 nm, molto inferiore a quella della luce visibile." },
        { type: "num", q: "Un'onda ha λ = 600 nm. Qual è la frequenza (in 10¹⁴ Hz)?", answer: 5, tol: 0.05, unit: "·10¹⁴ Hz", explain: "f = c/λ = 3,0·10⁸/(6,0·10⁻⁷) = 5,0·10¹⁴ Hz." },
        { type: "tf", q: "Nel vuoto tutte le onde elettromagnetiche hanno la stessa velocità.", answer: true, explain: "Nel vuoto la velocità è c per qualunque frequenza." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le onde e.m.",
      intro: "Se il collegamento tra campi variabili e onde ti sembra difficile, prova una di queste immagini.",
      tabs: [
        {
          label: "🔁 Il «gioco di squadra» dei campi",
          html: "<p>Immagina due ballerini che si passano il passo: <b>E</b> che cambia genera <b>B</b>, e <b>B</b> che cambia genera <b>E</b>. Non serve nessuno che li sostenga da fuori: ciascuno alimenta l'altro e la danza si sposta nello spazio. Ecco perché un'onda e.m. si propaga anche nel vuoto: la «materia» che vibra sono i campi stessi."
        },
        {
          label: "🧮 La velocità dalle costanti",
          html: "<p>Calcola c senza guardare la luce: c = 1/√(ε₀μ₀) = 1/√(8,85·10⁻¹² × 1,26·10⁻⁶) = 1/√(1,11·10⁻¹⁷) ≈ 3,0·10⁸ m/s. Due costanti misurate con condensatori e fili percorsi da corrente producono la velocità della luce: nessuno se lo aspettava. Questa coincidenza convinse Maxwell che luce ed elettromagnetismo fossero la stessa cosa."
        },
        {
          label: "🔗 Abbina la banda e la frequenza",
          html: "<p>Collega ogni sorgente alla sua frequenza tipica.</p>",
          widget: "match",
          options: { pairs: [
            ["Radio FM", "≈ 100 MHz"],
            ["Wi-Fi e forno a microonde", "≈ 2,4 GHz"],
            ["Luce visibile", "≈ 5·10¹⁴ Hz"],
            ["Raggi X", "≈ 10¹⁸ Hz"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'elettromagnetismo",
      nodes: [
        { id: "leggi", label: "Gauss, Faraday, Ampère", x: 12, y: 12, color: "#64748b", html: "Le leggi sperimentali prima di Maxwell.", why: "Ognuna è il risultato di decenni di esperimenti (Coulomb, Oersted, Ampère, Faraday). Raccolte insieme mostravano una simmetria quasi perfetta, con un buco: la legge di Ampère era incompleta." },
        { id: "spost", label: "Corrente di spostamento", x: 50, y: 10, color: "#2563eb", html: "Un campo E variabile genera un campo B: ε₀·ΔΦ(E)/Δt.", why: "Serviva per salvare la conservazione della carica e rendere coerente la legge di Ampère con il condensatore che si carica: Maxwell lo capì cercando un modello coerente, e fu premiato dalla scoperta delle onde." },
        { id: "maxwell", label: "Equazioni di Maxwell", x: 82, y: 25, color: "#ef4444", html: "Quattro equazioni + forza di Lorentz: tutta l'elettrodinamica classica.", why: "Furono scritte in forma compatta con i vettori da Heaviside e Gibbs (anni 1880); Maxwell ne aveva data una forma con 20 equazioni nel 1865. Predicono onde con v = 1/√(ε₀μ₀)." },
        { id: "onda", label: "Onda elettromagnetica", x: 80, y: 62, color: "#16a34a", html: "E ⟂ B ⟂ direzione di propagazione, velocità c.", why: "Perché E e B si sostengano a vicenda, devono essere perpendicolari e in fase; da Faraday e Maxwell nasce la relazione E = cB." },
        { id: "hertz", label: "Hertz e Marconi", x: 22, y: 55, color: "#f59e0b", html: "Produzione e uso delle onde radio.", why: "Hertz (1887-88) confermò la teoria con un esperimento; Marconi ne trasse la telegrafia senza fili (1895-1901), prima grande applicazione." },
        { id: "spettro", label: "Spettro e applicazioni", x: 50, y: 86, color: "#8b5cf6", html: "Dalle radio ai gamma: stessa natura, usi diversi.", why: "Con la stessa teoria si spiegano onde che differiscono solo per frequenza. L'interazione con la materia dipende dalla frequenza: per questo servono rivelatori diversi, e per questo i raggi X sono pericolosi e la radio no." }
      ],
      edges: [["leggi", "spost", "completate da"], ["spost", "maxwell", "porta a"], ["maxwell", "onda", "prevede"], ["onda", "hertz", "verificata da"], ["onda", "spettro", "forma lo"]]
    }
  ],
  glossary: [
    { t: "Equazioni di Maxwell", d: "Quattro equazioni che descrivono tutti i fenomeni elettromagnetici classici." },
    { t: "Corrente di spostamento", d: "Termine ε₀·ΔΦ(E)/Δt: un campo elettrico variabile genera un campo magnetico." },
    { t: "Onda elettromagnetica", d: "Oscillazione accoppiata di E e B, trasversale, che si propaga nel vuoto a c." },
    { t: "Velocità della luce c", d: "c = 1/√(ε₀μ₀) ≈ 3,00·10⁸ m/s." },
    { t: "Spettro elettromagnetico", d: "Ordinamento delle onde e.m. per frequenza o lunghezza d'onda." },
    { t: "Pressione di radiazione", d: "Pressione esercitata dalla luce su una superficie che la assorbe o riflette." },
    { t: "Modulazione", d: "Variazione di ampiezza o frequenza di un'onda portante per trasmettere informazioni." },
    { t: "Radiazione ionizzante", d: "Radiazione con energia sufficiente a strappare elettroni agli atomi (UV estremi, X, gamma)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale legge afferma che il flusso di B su una superficie chiusa è nullo?", options: ["Gauss per E", "Gauss per B", "Faraday", "Ampère-Maxwell"], answer: 1, explain: "È la legge di Gauss per il campo magnetico: non esistono monopoli magnetici." },
      { type: "tf", q: "Secondo Maxwell, un campo elettrico che varia nel tempo genera un campo magnetico.", answer: true, explain: "È il contenuto della corrente di spostamento." },
      { type: "num", q: "Calcola c = 1/√(ε₀μ₀) con ε₀ = 8,85·10⁻¹² e μ₀ = 1,257·10⁻⁶ (in 10⁸ m/s).", answer: 3, tol: 0.02, unit: "·10⁸ m/s", explain: "ε₀μ₀ ≈ 1,112·10⁻¹⁷ s²/m²; la radice è 3,34·10⁻⁹; c ≈ 3,0·10⁸ m/s." },
      { type: "mc", q: "Chi produsse e rivelò per la prima volta onde radio in laboratorio?", options: ["Marconi", "Hertz", "Faraday", "Tesla"], answer: 1, explain: "Heinrich Hertz nel 1887-88." },
      { type: "num", q: "In un'onda e.m. il campo elettrico ha ampiezza 150 V/m. Quanto vale l'ampiezza di B (in µT)?", answer: 0.5, tol: 0.01, unit: "µT", explain: "B₀ = E₀/c = 150/3,0·10⁸ = 5,0·10⁻⁷ T = 0,50 µT." },
      { type: "tf", q: "Nelle onde elettromagnetiche E e B oscillano in direzioni parallele alla propagazione.", answer: false, explain: "Sono trasversali: perpendicolari tra loro e alla direzione di propagazione." },
      { type: "num", q: "Quanto tempo impiega la luce a percorrere 1,5·10¹¹ m (in s)?", answer: 500, tol: 5, unit: "s", explain: "t = d/c = 1,5·10¹¹/3,0·10⁸ = 500 s, circa 8 min 20 s." },
      { type: "mc", q: "Quale onda ha frequenza maggiore?", options: ["Microonde", "Infrarosso", "Ultravioletto", "Onde radio"], answer: 2, explain: "L'ordine di frequenza crescente è radio, microonde, infrarosso, visibile, ultravioletto, X, gamma." },
      { type: "num", q: "Qual è la lunghezza d'onda (in cm) di un segnale a 2,4 GHz (circa)?", answer: 12.5, tol: 0.3, unit: "cm", explain: "λ = c/f = 3,0·10⁸/2,4·10⁹ = 0,125 m." },
      { type: "order", q: "Metti in ordine di frequenza crescente.", items: ["Onde radio", "Infrarosso", "Luce visibile", "Raggi X"], explain: "Lo spettro in ordine di frequenza crescente: radio, infrarosso, visibile, raggi X." }
    ]
  }
});
