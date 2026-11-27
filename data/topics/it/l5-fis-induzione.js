TOPIC('it', {
  id: "l5-fis-induzione",
  title: "L'induzione elettromagnetica",
  intro: "Nella lezione precedente abbiamo visto che una corrente crea un campo magnetico. Poteva valere anche il contrario? Un magnete può produrre una corrente? La risposta, trovata da <b>Michael Faraday</b> nel 1831, è sì, ma con una condizione sorprendente: serve che il campo <b>cambi nel tempo</b>. Su questa scoperta si regge quasi tutta la nostra civiltà elettrica: le centrali, gli alternatori, i trasformatori, la ricarica wireless degli smartphone, i piani cottura a induzione. In questa lezione studiamo il <b>flusso magnetico</b>, la <b>legge di Faraday-Neumann-Lenz</b>, l'<b>autoinduzione</b>, e come funzionano <b>alternatore</b> e <b>trasformatore</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "1831: dal magnetismo all'elettricità",
      html: `<p>Dopo Oersted (1820) molti cercarono l'effetto inverso: se la corrente genera magnetismo, il magnetismo deve generare corrente. Per dieci anni i tentativi con magneti fermi vicino a circuiti fallirono. <b>Michael Faraday</b>, a Londra, riuscì nell'agosto 1831 con un anello di ferro dolce su cui avvolse due bobine: collegando la prima a una pila, nella seconda un galvanometro dava un impulso di corrente, ma <b>solo nell'istante</b> in cui si chiudeva o si apriva il circuito, non mentre la corrente scorreva stabile. Poco dopo Faraday osservò lo stesso effetto <b>muovendo un magnete</b> dentro o fuori una bobina. Negli stessi anni l'americano <b>Joseph Henry</b> scopriva in modo indipendente fenomeni analoghi (e l'autoinduzione).</p>
<p>La lezione era chiara: non è il campo magnetico a produrre la corrente, ma la sua <b>variazione</b>. Un magnete fermo vicino a una bobina non fa niente; un magnete in movimento sì, e l'intensità dipende dalla rapidità con cui si muove. Si parla di <b>induzione elettromagnetica</b>: la corrente prodotta è detta <b>corrente indotta</b> e la tensione che la determina <b>forza elettromotrice (f.e.m.) indotta</b>.</p>`
    },
    {
      type: "text",
      title: "Il flusso del campo magnetico",
      html: `<p>Per descrivere quanto campo "attraversa" un circuito si usa il <b>flusso del campo magnetico</b>. Per una superficie piana di area <b>A</b> in un campo uniforme <b>B</b>:</p>
<p style="text-align:center"><b>Φ(B) = B · A · cos θ</b></p>
<p>dove θ è l'angolo tra <b>B</b> e la normale alla superficie. Si misura in <b>weber (Wb)</b>: 1 Wb = 1 T·m². Il flusso è massimo quando il campo è perpendicolare alla superficie (θ = 0), nullo quando è parallelo (θ = 90°). Se c'è una bobina di N spire, il flusso concatenato è N volte quello di una spira.</p>
<p>Si può quindi cambiare il flusso in <b>tre modi</b>:</p>
<ul>
<li>variando l'<b>intensità</b> di B (avvicinando un magnete, cambiando la corrente di un elettromagnete);</li>
<li>variando l'<b>area</b> A del circuito (una spira che si deforma, una barra mobile che scorre su rotaie);</li>
<li>variando l'<b>orientamento</b> θ (una spira che ruota nel campo: è il principio dell'alternatore).</li>
</ul>
<p>In tutti e tre i casi, appare una f.e.m. indotta.</p>`
    },
    {
      type: "svg",
      title: "Il flusso dipende dall'angolo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<g font-family="sans-serif" font-size="16" font-weight="bold">
<line x1="40" y1="60" x2="200" y2="60" stroke="#38bdf8" stroke-width="3"/><polygon points="212,60 194,52 194,68" fill="#38bdf8"/>
<line x1="40" y1="100" x2="200" y2="100" stroke="#38bdf8" stroke-width="3"/><polygon points="212,100 194,92 194,108" fill="#38bdf8"/>
<line x1="40" y1="140" x2="200" y2="140" stroke="#38bdf8" stroke-width="3"/><polygon points="212,140 194,132 194,148" fill="#38bdf8"/>
<line x1="40" y1="180" x2="200" y2="180" stroke="#38bdf8" stroke-width="3"/><polygon points="212,180 194,172 194,188" fill="#38bdf8"/>
<line x1="40" y1="220" x2="200" y2="220" stroke="#38bdf8" stroke-width="3"/><polygon points="212,220 194,212 194,228" fill="#38bdf8"/>
<line x1="130" y1="40" x2="130" y2="240" stroke="#f97316" stroke-width="6"/>
<text x="140" y="262" fill="#f97316">spira ⟂ B: Φ massimo</text>
<line x1="330" y1="60" x2="480" y2="60" stroke="#38bdf8" stroke-width="3"/><polygon points="492,60 474,52 474,68" fill="#38bdf8"/>
<line x1="330" y1="100" x2="480" y2="100" stroke="#38bdf8" stroke-width="3"/><polygon points="492,100 474,92 474,108" fill="#38bdf8"/>
<line x1="330" y1="140" x2="480" y2="140" stroke="#38bdf8" stroke-width="3"/><polygon points="492,140 474,132 474,148" fill="#38bdf8"/>
<line x1="330" y1="180" x2="480" y2="180" stroke="#38bdf8" stroke-width="3"/><polygon points="492,180 474,172 474,188" fill="#38bdf8"/>
<line x1="330" y1="220" x2="480" y2="220" stroke="#38bdf8" stroke-width="3"/><polygon points="492,220 474,212 474,228" fill="#38bdf8"/>
<line x1="320" y1="140" x2="500" y2="140" stroke="#f97316" stroke-width="6" opacity="0.0"/>
<line x1="330" y1="130" x2="490" y2="150" stroke="#f97316" stroke-width="6"/>
<text x="330" y="262" fill="#f97316">spira inclinata: Φ = BA cos θ</text>
<text x="225" y="30" fill="#e2e8f0" font-size="14">B (frecce azzurre)</text>
</g>
</svg>`,
      caption: "Il flusso è proporzionale al numero di linee di campo che attraversano la spira: massimo se la spira è perpendicolare, ridotto se è inclinata."
    },
    {
      type: "text",
      title: "La legge di Faraday-Neumann-Lenz",
      html: `<p>La relazione quantitativa tra variazione di flusso e f.e.m. indotta è la <b>legge di Faraday-Neumann</b>: la f.e.m. <b>media</b> indotta in un circuito è</p>
<p style="text-align:center"><b>ε = − ΔΦ / Δt</b> &nbsp;&nbsp;(per N spire: ε = − N·ΔΦ/Δt)</p>
<p>e, nel limite di intervalli molto piccoli, ε = −dΦ/dt. Contano la <b>rapidità</b> di variazione del flusso e il <b>numero di spire</b>. Il valore della f.e.m. è in volt. Se il circuito ha resistenza R, scorre la corrente indotta <b>i = ε/R</b>.</p>
<p>Il segno meno racchiude la <b>legge di Lenz</b> (<b>Heinrich Lenz</b>, 1834): <b>la corrente indotta ha un verso tale da opporsi alla causa che l'ha generata</b>. Se avvicini il polo nord di un magnete a una spira, il flusso aumenta; la spira si riempie di corrente che crea un campo magnetico opposto, per contrastare l'aumento (la spira "respinge" il magnete). Se lo allontani, il flusso diminuisce e la corrente indotta crea un campo concorde, che cerca di mantenerlo (la spira "trattiene" il magnete).</p>
<p>La legge di Lenz non è un dettaglio: è la <b>conservazione dell'energia</b>. Se la corrente indotta favorisse la variazione di flusso, avremmo un processo che si autoalimenta e produce energia dal nulla. Invece il lavoro che fai per muovere il magnete contro la forza di opposizione è proprio l'energia che si trasforma in energia elettrica (e poi in calore per effetto Joule).</p>`
    },
    {
      type: "example",
      title: "La f.e.m. in una bobina",
      html: `<p>Una bobina di N = 100 spire ha area A = 0,020 m² ed è perpendicolare a un campo B = 0,50 T. Il flusso per spira è Φ = 0,50 × 0,020 = 0,010 Wb. Spegnendo il campo in 0,050 s, la f.e.m. media è |ε| = N·ΔΦ/Δt = 100 × 0,010/0,050 = <b>20 V</b>.</p>
<p>Se il campo si spegnesse in 0,5 s la f.e.m. sarebbe dieci volte più piccola (2 V): conta la <b>rapidità</b> della variazione. Se la bobina avesse resistenza 5 Ω, nel primo caso scorrerebbe una corrente media di 4 A.</p>`
    },
    {
      type: "text",
      title: "Una barra in moto: la f.e.m. cinetica",
      html: `<p>Una barra conduttrice di lunghezza <b>L</b> che si muove con velocità <b>v</b> perpendicolarmente a un campo <b>B</b> (e a se stessa) è un caso particolarmente semplice. Gli elettroni liberi nel metallo si muovono insieme alla barra: la <b>forza di Lorentz</b> li spinge verso un'estremità, creando una separazione di carica e quindi una differenza di potenziale pari a</p>
<p style="text-align:center"><b>ε = B · L · v</b></p>
<p>Lo stesso risultato si ottiene con la legge di Faraday: la barra, scorrendo su rotaie conduttrici, fa crescere l'area del circuito di L·v ogni secondo, quindi il flusso aumenta di B·L·v ogni secondo. Con una resistenza R nel circuito scorre una corrente i = BLv/R e sulla barra agisce una forza frenante F = B·i·L, che si oppone al moto (Lenz). La potenza meccanica spesa per tirare la barra a velocità costante, F·v = B²L²v²/R, coincide con la potenza elettrica dissipata nella resistenza: conservazione dell'energia.</p>
<p>Numerico: L = 0,40 m, v = 3,0 m/s, B = 0,50 T danno ε = 0,50 × 0,40 × 3,0 = <b>0,60 V</b>. Con R = 0,30 Ω, i = 2,0 A.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: Faraday e Lenz",
      questions: [
        { type: "mc", q: "Perché un magnete fermo vicino a una bobina non induce corrente?", options: ["Perché il campo è troppo debole", "Perché il flusso non varia nel tempo", "Perché i magneti fermi non hanno campo", "Perché la bobina ha resistenza"], answer: 1, explain: "Occorre una variazione del flusso: se il flusso è costante, ΔΦ/Δt = 0 e non c'è f.e.m." },
        { type: "num", q: "Il flusso concatenato con una spira passa da 0,040 Wb a 0 in 0,020 s. Quanto vale la f.e.m. media (in V)?", answer: 2, tol: 0.02, unit: "V", explain: "|ε| = ΔΦ/Δt = 0,040/0,020 = 2,0 V." },
        { type: "tf", q: "Secondo la legge di Lenz la corrente indotta tende ad amplificare la variazione di flusso che l'ha prodotta.", answer: false, explain: "Si oppone alla variazione: altrimenti si violerebbe la conservazione dell'energia." }
      ]
    },
    {
      type: "text",
      title: "Autoinduzione e induttanza",
      html: `<p>La variazione di flusso può essere prodotta anche dal circuito stesso: la corrente nella bobina crea un campo, quindi un flusso; se la corrente cambia, cambia il flusso concatenato <b>con la bobina stessa</b> e nasce una f.e.m. indotta. È l'<b>autoinduzione</b>. Il flusso proprio è proporzionale alla corrente, Φ = L·I, e la f.e.m. autoindotta è</p>
<p style="text-align:center"><b>ε = − L · ΔI / Δt</b></p>
<p>La costante <b>L</b> è l'<b>induttanza</b> del circuito, misurata in <b>henry (H)</b> (1 H = 1 V·s/A). Per un solenoide lungo di lunghezza ℓ, area A e N spire: <b>L = μ<sub>0</sub>·N²·A/ℓ</b>. L'effetto si oppone alle <b>variazioni</b> della corrente: quando si chiude un circuito con una bobina la corrente cresce gradualmente, e quando lo si apre rapidamente la f.e.m. può diventare molto elevata (le scintille ai contatti di un interruttore).</p>
<p>Un induttore immagazzina <b>energia nel campo magnetico</b>: <b>U = ½·L·I²</b> (analogo all'energia ½·C·V² del condensatore, immagazzinata nel campo elettrico). Ad esempio, con L = 2,0 H e una corrente che passa da 0 a 3,0 A in 0,10 s, la f.e.m. autoindotta è 2,0 × 3,0/0,10 = <b>60 V</b> e l'energia accumulata è ½ × 2,0 × 3,0² = <b>9,0 J</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Correnti parassite, freni e piani a induzione",
      html: `<p>Quando un pezzo di metallo massiccio si muove in un campo magnetico, o è soggetto a un campo variabile, si formano al suo interno <b>correnti parassite</b> (dette anche <b>correnti di Foucault</b>, dal fisico Léon Foucault, 1855). Hanno due volti. Da un lato fanno perdere energia: per questo i nuclei dei trasformatori si costruiscono con lamierini isolati tra loro invece che con un blocco unico. Dall'altro si sfruttano: i <b>freni elettromagnetici</b> dei treni e delle giostre frenano senza contatto (un magnete sopra una lastra metallica in moto la rallenta, per Lenz), e i <b>piani cottura a induzione</b> generano nel fondo della pentola, grazie a un campo variabile, correnti che la scaldano direttamente mentre il piano resta relativamente freddo.</p>`
    },
    {
      type: "text",
      title: "L'alternatore e la corrente alternata",
      html: `<p>Se una bobina di N spire e area A ruota con velocità angolare <b>ω</b> in un campo uniforme B, il flusso è Φ = N·B·A·cos(ωt) e, per Faraday-Neumann, la f.e.m. indotta è</p>
<p style="text-align:center"><b>ε(t) = N·B·A·ω · sen(ωt) = ε<sub>0</sub> · sen(ωt)</b></p>
<p>cioè una <b>tensione alternata sinusoidale</b>, che inverte periodicamente il segno, con ampiezza ε<sub>0</sub> = N·B·A·ω e frequenza f = ω/2π. Questo è il principio dell'<b>alternatore</b>, il generatore delle centrali elettriche: una turbina (azionata da vapore, acqua, vento…) fa ruotare le bobine o il magnete, e l'energia meccanica diventa energia elettrica. Nella <b>dinamo</b>, invece, un commutatore "raddrizza" l'uscita per ottenere una tensione unidirezionale.</p>
<p>In Europa la rete funziona a <b>f = 50 Hz</b>, in America del Nord a 60 Hz. Il valore <b>efficace</b> è quello che darebbe la stessa potenza in continua: V<sub>eff</sub> = V<sub>0</sub>/√2 ≈ 0,707·V<sub>0</sub>. La tensione di rete di <b>230 V</b> (efficaci) ha quindi un valore di picco di 230 × √2 ≈ <b>325 V</b>. Nel XIX secolo la scelta fra corrente continua e alternata dette luogo alla cosiddetta "guerra delle correnti" (Edison contro Tesla e Westinghouse): la corrente alternata si impose perché si può innalzare e abbassare con i trasformatori, come vedremo.</p>`
    },
    {
      type: "example",
      title: "Un alternatore a conti fatti",
      html: `<p>Bobina con N = 200 spire, area A = 0,050 m², in un campo B = 0,10 T, che ruota a 50 giri al secondo (f = 50 Hz, ω = 2π·50 ≈ 314 rad/s).</p>
<p>Ampiezza della f.e.m.: ε<sub>0</sub> = N·B·A·ω = 200 × 0,10 × 0,050 × 314 ≈ <b>314 V</b>. Valore efficace: 314/√2 ≈ 222 V, vicino ai 230 V della rete. Con metà della velocità (25 giri/s) la tensione e la frequenza dimezzerebbero: la frequenza è fissata dalla rotazione, ed è per questo che le turbine delle centrali devono girare a una velocità molto precisa.</p>`
    },
    {
      type: "text",
      title: "Il trasformatore e il trasporto dell'energia",
      html: `<p>Un <b>trasformatore</b> è formato da due bobine avvolte su un nucleo di ferro (laminato), il <b>primario</b> con N<sub>1</sub> spire e il <b>secondario</b> con N<sub>2</sub> spire. La corrente alternata nel primario genera un flusso <b>variabile</b> che, concentrato dal ferro, attraversa anche il secondario, dove induce una f.e.m. Poiché lo stesso flusso attraversa entrambe le bobine, per un trasformatore ideale:</p>
<p style="text-align:center"><b>V<sub>2</sub>/V<sub>1</sub> = N<sub>2</sub>/N<sub>1</sub></b> &nbsp;&nbsp;e&nbsp;&nbsp; <b>V<sub>1</sub>·I<sub>1</sub> = V<sub>2</sub>·I<sub>2</sub></b></p>
<p>Se N<sub>2</sub> &gt; N<sub>1</sub> la tensione si innalza (e la corrente diminuisce); se N<sub>2</sub> &lt; N<sub>1</sub> si abbassa (e la corrente aumenta). Il trasformatore funziona <b>solo con corrente alternata</b>: con una corrente continua il flusso sarebbe costante e non nascerebbe alcuna f.e.m. nel secondario. I trasformatori reali hanno rendimenti del 95-99%.</p>
<p>Perché si innalza la tensione per trasportare l'energia? Una linea con resistenza R che trasporta una potenza P a tensione V ha corrente I = P/V e dissipa per effetto Joule <b>P<sub>perdita</sub> = R·I² = R·P²/V²</b>. Aumentando la tensione di dieci volte, le perdite diminuiscono di cento volte. Per questo le centrali producono a decine di kV, la tensione viene portata a 132, 220 o 380 kV per le lunghe distanze, e vicino alle case viene gradualmente abbassata fino a 230 V.</p>`
    },
    {
      type: "example",
      title: "Quante spire per 12 V?",
      html: `<p>Un alimentatore deve trasformare 230 V in 12 V. Se il primario ha N<sub>1</sub> = 1150 spire, il secondario deve avere N<sub>2</sub> = N<sub>1</sub>·V<sub>2</sub>/V<sub>1</sub> = 1150 × 12/230 = <b>60 spire</b>. Se il carico assorbe I<sub>2</sub> = 2,0 A a 12 V (24 W), la corrente nel primario è I<sub>1</sub> = P/V<sub>1</sub> = 24/230 ≈ 0,10 A.</p>
<p><b>Trasporto.</b> Una linea con R = 10 Ω trasporta P = 1,0 MW. A 10 kV: I = 100 A, perdita = 10 × 100² = 100 kW (10%). A 100 kV: I = 10 A, perdita = 10 × 10² = 1,0 kW (0,1%): cento volte in meno.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: alternatore e trasformatore",
      questions: [
        { type: "mc", q: "Perché la tensione per le lunghe distanze viene innalzata?", options: ["Per aumentare la potenza", "Per ridurre la corrente e quindi le perdite per effetto Joule", "Perché i fili reggono più tensione", "Per rendere la corrente continua"], answer: 1, explain: "A pari potenza, tensione maggiore significa corrente minore e perdite RI² molto più piccole." },
        { type: "num", q: "Un trasformatore ha primario di 500 spire a 230 V e secondario di 100 spire. Quanto vale V₂ (in V)?", answer: 46, tol: 0.5, unit: "V", explain: "V₂ = V₁·N₂/N₁ = 230 × 100/500 = 46 V." },
        { type: "tf", q: "Un trasformatore ideale funziona anche collegato a una pila (corrente continua).", answer: false, explain: "Con corrente continua il flusso è costante: nessuna f.e.m. indotta nel secondario." }
      ]
    },
    {
      type: "curiosity",
      title: "Niagara e la ricarica senza fili",
      html: `<p>Nel 1895-96 la centrale idroelettrica delle cascate del Niagara, equipaggiata con alternatori progettati da Westinghouse sui brevetti di Nikola Tesla, cominciò a trasmettere energia in corrente alternata fino a Buffalo, a circa 35 km di distanza: fu una delle prime dimostrazioni che la corrente alternata e i trasformatori permettevano di portare l'energia lontano dalla sorgente. Oggi lo stesso principio di induzione è nei caricabatterie <b>wireless</b>: una bobina nel caricatore, percorsa da corrente alternata, produce un flusso variabile che induce una f.e.m. nella bobina dentro lo smartphone.</p>`
    },
    {
      type: "widget",
      title: "Abbina fenomeno e descrizione",
      widget: "match",
      options: { pairs: [
        ["Legge di Lenz", "La corrente indotta si oppone alla variazione di flusso"],
        ["Autoinduzione", "ε = −L·ΔI/Δt"],
        ["Alternatore", "Spira che ruota in un campo: ε = ε₀ sen ωt"],
        ["Trasformatore", "V₂/V₁ = N₂/N₁"],
        ["Unità del flusso", "Weber (Wb)"]
      ] },
      caption: "Collega ogni concetto alla sua definizione."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'induzione",
      intro: "Se il segno meno e i flussi ti sembrano astratti, prova un'analogia o un caso concreto.",
      tabs: [
        {
          label: "🏋️ L'analogia dell'inerzia",
          html: "<p>La legge di Lenz somiglia all'<b>inerzia</b>: un corpo si oppone ai cambiamenti della propria velocità. Un circuito si oppone ai cambiamenti del proprio flusso. Così come devi fare uno sforzo per accelerare un carrello, devi fare lavoro per muovere un magnete contro la forza che la corrente indotta esercita. Quel lavoro è l'energia che compare come corrente (e come calore): niente nasce dal nulla.</p>"
        },
        {
          label: "🔄 La bicicletta con la dinamo",
          html: "<p>Nella dinamo di una bici un piccolo magnete ruota vicino a una bobina fissa: ruotando, il flusso nella bobina cambia di continuo e la lampadina si accende. Pedalando <b>più forte</b> il flusso cambia più in fretta e la luce è più intensa; fermandoti, la luce si spegne perché il flusso non cambia. In salita, la dinamo si sente: la forza frenante di Lenz è un po' più faticosa da pedalare.</p>"
        },
        {
          label: "🧮 Ricava il verso con un metodo in tre passi",
          html: "<p>1) Il flusso concatenato <b>aumenta</b> o <b>diminuisce</b>? 2) La corrente indotta deve creare un campo che <b>contrasta</b>: se il flusso cresce, il campo indotto è opposto a B; se cala, concorde. 3) Con la regola della mano destra, dal verso del campo indotto ricavi il verso della corrente. Provalo con un magnete che si avvicina con il polo nord a una spira: il flusso verso la spira aumenta, quindi la spira crea un campo opposto (un polo nord rivolto verso il magnete).</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'induzione elettromagnetica",
      nodes: [
        { id: "faraday", label: "Faraday 1831", x: 12, y: 12, color: "#64748b", html: "Un flusso variabile induce una corrente.", why: "Faraday cercava l'inverso dell'esperimento di Oersted. Capì che servono variazioni nel tempo, e introdusse l'idea delle linee di forza come entità fisiche: un'intuizione che fu poi tradotta in equazioni da Maxwell." },
        { id: "flusso", label: "Flusso Φ = BA cosθ", x: 50, y: 12, color: "#2563eb", html: "Misura le linee di campo attraverso una superficie; si misura in weber.", why: "Per descrivere cosa cambia nel circuito serviva una grandezza globale. Dipende da B, A e dall'angolo: tre modi diversi di produrre induzione." },
        { id: "fn", label: "Faraday-Neumann", x: 82, y: 25, color: "#ef4444", html: "ε = −ΔΦ/Δt: la f.e.m. dipende dalla rapidità della variazione.", why: "Franz Neumann (1845) formulò la legge matematica dei risultati sperimentali di Faraday. È una legge sulla variazione, non sul valore del flusso." },
        { id: "lenz", label: "Legge di Lenz", x: 80, y: 62, color: "#16a34a", html: "Il segno meno: la corrente indotta si oppone alla causa.", why: "Se avvenisse il contrario si avrebbe energia dal nulla: Lenz esprime la conservazione dell'energia per i fenomeni di induzione." },
        { id: "auto", label: "Autoinduzione", x: 22, y: 55, color: "#f59e0b", html: "ε = −L·ΔI/Δt; energia U = ½LI².", why: "Anche un circuito isolato risente del proprio campo: è come una «inerzia elettrica». Il campo magnetico immagazzina energia, come il campo elettrico nel condensatore." },
        { id: "app", label: "Alternatore e trasformatore", x: 50, y: 86, color: "#8b5cf6", html: "Produzione e distribuzione dell'energia elettrica.", why: "Una spira che ruota produce ε sinusoidale; i trasformatori permettono di variare tensione e corrente: è la ragione per cui la rete elettrica è in corrente alternata." }
      ],
      edges: [["faraday", "flusso", "usa"], ["flusso", "fn", "variazione in"], ["fn", "lenz", "con segno"], ["fn", "auto", "caso del circuito stesso"], ["fn", "app", "applicata in"]]
    }
  ],
  glossary: [
    { t: "Flusso magnetico", d: "Φ = B·A·cos θ; si misura in weber (Wb)." },
    { t: "F.e.m. indotta", d: "Tensione prodotta da una variazione di flusso: ε = −ΔΦ/Δt." },
    { t: "Legge di Lenz", d: "La corrente indotta si oppone alla variazione di flusso che l'ha generata." },
    { t: "Induttanza", d: "Rapporto L tra flusso proprio e corrente; si misura in henry (H)." },
    { t: "Alternatore", d: "Generatore di corrente alternata basato su una bobina rotante in un campo magnetico." },
    { t: "Valore efficace", d: "Valore di una corrente continua che produce la stessa potenza: V_eff = V₀/√2." },
    { t: "Trasformatore", d: "Dispositivo con due bobine su un nucleo di ferro, che varia la tensione alternata secondo il rapporto spire." },
    { t: "Correnti parassite", d: "Correnti indotte nei conduttori massicci da flussi variabili; causano perdite o frenano." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale esperimento mostrò che un campo magnetico può produrre corrente, ma solo se varia?", options: ["Oersted, 1820", "Faraday, 1831", "Young, 1801", "Hertz, 1887"], answer: 1, explain: "Faraday osservò corrente solo nell'istante in cui il circuito primario si apriva o chiudeva." },
      { type: "num", q: "Una spira di area 0,050 m² è perpendicolare a un campo di 0,20 T. Quanto vale il flusso (in mWb)?", answer: 10, tol: 0.1, unit: "mWb", explain: "Φ = B·A = 0,20 × 0,050 = 0,010 Wb = 10 mWb." },
      { type: "num", q: "Una bobina di 50 spire subisce una variazione di flusso di 0,020 Wb per spira in 0,10 s. Quanto vale la f.e.m. media (in V)?", answer: 10, tol: 0.1, unit: "V", explain: "|ε| = N·ΔΦ/Δt = 50 × 0,020/0,10 = 10 V." },
      { type: "tf", q: "Il segno meno nella legge di Faraday-Neumann esprime la legge di Lenz.", answer: true, explain: "Indica che la corrente indotta si oppone alla variazione di flusso." },
      { type: "num", q: "Una barra di 0,50 m si muove a 4,0 m/s perpendicolarmente a un campo di 0,25 T. Quanto vale la f.e.m. (in V)?", answer: 0.5, tol: 0.01, unit: "V", explain: "ε = BLv = 0,25 × 0,50 × 4,0 = 0,50 V." },
      { type: "mc", q: "Che cosa accade alla corrente in una bobina quando si chiude l'interruttore?", options: ["Raggiunge subito il valore finale", "Cresce gradualmente per effetto dell'autoinduzione", "Diventa alternata", "Si annulla"], answer: 1, explain: "La f.e.m. autoindotta si oppone all'aumento di corrente." },
      { type: "num", q: "Qual è l'energia (in J) immagazzinata in un induttore di 0,50 H percorso da 4,0 A?", answer: 4, tol: 0.05, unit: "J", explain: "U = ½·L·I² = 0,5 × 0,50 × 16 = 4,0 J." },
      { type: "mc", q: "Nell'alternatore, quale grandezza determina la frequenza della tensione prodotta?", options: ["Il numero di spire", "La velocità di rotazione", "L'area della spira", "La resistenza"], answer: 1, explain: "f = ω/2π: dipende dalla velocità di rotazione." },
      { type: "num", q: "Qual è il valore di picco (in V, circa) di una tensione efficace di 230 V?", answer: 325, tol: 1, unit: "V", explain: "V₀ = V_eff·√2 = 230 × 1,414 ≈ 325 V." },
      { type: "order", q: "Metti in ordine i passaggi in una centrale che produce energia elettrica.", items: ["Energia primaria (acqua, vapore, vento) muove la turbina", "La turbina fa ruotare le bobine dell'alternatore nel campo", "Il flusso varia e nasce una f.e.m. alternata", "I trasformatori innalzano la tensione per il trasporto"], explain: "Dalla turbina all'alternatore, alla f.e.m. indotta, ai trasformatori per la linea ad alta tensione." }
    ]
  }
});
