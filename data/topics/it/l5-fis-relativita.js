TOPIC('it', {
  id: "l5-fis-relativita",
  title: "La relatività ristretta",
  intro: "Che cosa succede se si insegue un raggio di luce? Maxwell aveva trovato che la velocità della luce è la stessa in ogni direzione, ma la fisica di Galileo diceva che le velocità si sommano. Nel 1905, a 26 anni, <b>Albert Einstein</b> risolse la contraddizione con una teoria che ha cambiato per sempre le nostre idee su spazio e tempo: due eventi simultanei per te possono non esserlo per me, gli orologi in moto vanno più lentamente, i regoli si accorciano, e massa ed energia sono due facce della stessa cosa: <b>E = mc²</b>. In questa lezione vediamo i postulati, i principali effetti, le prove sperimentali e le conseguenze.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Il problema: Galileo contro Maxwell",
      html: `<p>Già nel Seicento <b>Galileo</b> aveva formulato il <b>principio di relatività</b>: le leggi della meccanica sono le stesse in tutti i sistemi di riferimento inerziali (che si muovono di moto rettilineo uniforme l'uno rispetto all'altro). Sulla nave in moto uniforme, un sasso cade sul piede dell'albero come se la nave fosse ferma. Le velocità si compongono con la semplice somma: se un treno va a 100 km/h e un passeggero cammina a 5 km/h nel verso del moto, la sua velocità rispetto al suolo è 105 km/h.</p>
<p>Le equazioni di Maxwell, però, prevedono per le onde elettromagnetiche una velocità <b>c = 1/√(ε₀μ₀)</b> che non cita nessun sistema di riferimento. Nell'Ottocento si pensava che la luce si propagasse in un mezzo, l'<b>etere</b>, rispetto al quale c valesse; la Terra, muovendosi nell'etere a circa 30 km/s intorno al Sole, avrebbe dovuto misurare velocità della luce diverse a seconda della direzione. Nel <b>1887</b> <b>Albert Michelson e Edward Morley</b>, con un interferometro molto sensibile, cercarono questo «vento d'etere» e non trovarono nulla: la velocità della luce risultava la stessa in tutte le direzioni e in tutte le stagioni. Per quasi vent'anni i fisici cercarono spiegazioni complicate (Lorentz, FitzGerald, Poincaré). Einstein scelse una via più radicale: cambiare le ipotesi di partenza.</p>`
    },
    {
      type: "decision",
      title: "1887: come interpreti il risultato di Michelson e Morley?",
      html: "<p>Sei un fisico di fine Ottocento. L'esperimento di Michelson e Morley, ripetuto con cura, non trova alcun «vento d'etere». Ogni altra misura sull'elettromagnetismo sembra confermare l'esistenza dell'etere.</p>",
      question: "Che cosa concludi?",
      options: [
        { label: "L'etere è trascinato dalla Terra, quindi non c'è vento", outcome: "Ipotesi analizzata e scartata: altre misure (aberrazione stellare, esperimento di Fizeau) contraddicono un trascinamento completo." },
        { label: "Gli oggetti in moto nell'etere si contraggono, mascherando l'effetto", outcome: "È l'ipotesi di FitzGerald e Lorentz: funziona, ma sembra costruita apposta per salvare l'etere e non spiega nulla di nuovo." },
        { label: "L'etere non serve: la velocità della luce è la stessa per tutti gli osservatori", outcome: "È la scelta di Einstein (1905): rinunciare all'etere e al tempo assoluto. Si perde l'intuizione, ma si guadagna una teoria coerente e verificabile." }
      ],
      answer: 2,
      explain: "Einstein trasformò il «risultato negativo» in un postulato: la velocità della luce nel vuoto è la stessa per tutti gli osservatori inerziali. Da qui discendono, con puro ragionamento, tutti gli effetti della relatività ristretta, poi confermati da innumerevoli esperimenti."
    },
    {
      type: "text",
      title: "I due postulati di Einstein",
      html: `<p>Nel suo articolo del 1905 <i>Sull'elettrodinamica dei corpi in movimento</i> Einstein parte da due principi.</p>
<ol>
<li><b>Principio di relatività</b>: le leggi della fisica (non soltanto della meccanica, ma anche dell'elettromagnetismo) hanno la stessa forma in tutti i sistemi di riferimento inerziali.</li>
<li><b>Costanza della velocità della luce</b>: la velocità della luce nel vuoto ha lo stesso valore <b>c ≈ 3,00·10<sup>8</sup> m/s</b> in tutti i sistemi inerziali, indipendentemente dal moto della sorgente o dell'osservatore.</li>
</ol>
<p>Il secondo postulato contraddice la somma delle velocità: se un'astronave a metà della velocità della luce spara un raggio laser in avanti, chi sta a terra misura per il raggio velocità c e non 1,5c. L'unica via d'uscita è abbandonare l'idea di un tempo universale e di uno spazio assoluto: <b>le misure di tempo e di lunghezza dipendono dal sistema di riferimento</b>.</p>`
    },
    {
      type: "text",
      title: "Relatività della simultaneità",
      html: `<p>Il primo effetto è il più sorprendente. Un vagone si muove a velocità vicina a c; al centro un lampo di luce parte verso le due estremità. Per un osservatore <b>sul vagone</b> la luce raggiunge contemporaneamente il fondo e la testa, perché le due pareti sono equidistanti. Per un osservatore <b>a terra</b>, invece, la parete di coda va incontro alla luce e quella di testa si allontana: la luce raggiunge prima la coda e poi la testa. Gli stessi due eventi sono <b>simultanei</b> per uno e <b>successivi</b> per l'altro, e <b>nessuno dei due ha torto</b>: la simultaneità di eventi lontani non è assoluta.</p>
<p>La relatività non rende però il mondo arbitrario: l'<b>ordine causa-effetto</b> è salvo, perché nessun segnale può andare più veloce di c. Due eventi tra cui può esserci una relazione di causa ed effetto hanno lo stesso ordine temporale per tutti gli osservatori.</p>`
    },
    {
      type: "text",
      title: "Dilatazione dei tempi e contrazione delle lunghezze",
      html: `<p>Un <b>orologio a luce</b> — due specchi tra cui rimbalza un impulso — permette di ricavare l'effetto. Per un osservatore solidale all'orologio, un «tic» richiede il tempo Δt₀ = 2d/c (d = distanza tra gli specchi). Per un osservatore rispetto al quale l'orologio si muove con velocità <b>v</b>, la luce percorre una traiettoria obliqua, più lunga, ma sempre a velocità c: ci mette più tempo. Con il teorema di Pitagora si ottiene la <b>dilatazione del tempo</b>:</p>
<p style="text-align:center"><b>Δt = γ · Δt₀</b> &nbsp;&nbsp; con &nbsp;&nbsp; <b>γ = 1 / √(1 − v²/c²)</b></p>
<p>Il <b>tempo proprio</b> Δt₀ è quello misurato dall'orologio rispetto al quale l'evento avviene nello stesso posto; il fattore di Lorentz γ è sempre ≥ 1, quindi l'orologio in moto «va più lento» rispetto ad uno fermo. Per v piccola rispetto a c, γ è praticamente 1 e gli effetti sono nascosti: a 100 km/h γ − 1 ≈ 4·10<sup>-15</sup>. Alcuni valori: v = 0,6c ⟹ γ = 1,25; v = 0,8c ⟹ γ = 1,67; v = 0,9c ⟹ γ = 2,29; v = 0,99c ⟹ γ = 7,09.</p>
<p>Anche le lunghezze dipendono dal sistema: un oggetto lungo L₀ nel sistema in cui è fermo (<b>lunghezza propria</b>) appare, nella direzione del moto, <b>contratto</b>:</p>
<p style="text-align:center"><b>L = L₀ / γ</b></p>
<p>Le dimensioni perpendicolari al moto non cambiano. L'effetto è reciproco: ciascuno dei due osservatori vede gli orologi e i regoli dell'altro rallentati e accorciati, e non c'è contraddizione perché le due misure non si confrontano nello stesso modo (con la simultaneità relativa si tiene tutto insieme).</p>`
    },
    {
      type: "svg",
      title: "L'orologio a luce",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<g font-family="sans-serif" font-size="16">
<line x1="40" y1="60" x2="200" y2="60" stroke="#94a3b8" stroke-width="5"/>
<line x1="40" y1="240" x2="200" y2="240" stroke="#94a3b8" stroke-width="5"/>
<line x1="120" y1="240" x2="120" y2="64" stroke="#fde047" stroke-width="3"/>
<polygon points="120,58 112,76 128,76" fill="#fde047"/>
<text x="130" y="160" fill="#fde047">d</text>
<text x="40" y="30" fill="#e2e8f0" font-weight="bold">Orologio fermo: Δt₀ = 2d/c</text>
<line x1="320" y1="60" x2="580" y2="60" stroke="#94a3b8" stroke-width="5"/>
<line x1="320" y1="240" x2="580" y2="240" stroke="#94a3b8" stroke-width="5"/>
<line x1="360" y1="240" x2="450" y2="64" stroke="#f97316" stroke-width="3"/>
<line x1="450" y1="60" x2="540" y2="236" stroke="#f97316" stroke-width="3"/>
<line x1="360" y1="270" x2="540" y2="270" stroke="#4ade80" stroke-width="2"/>
<polygon points="548,270 530,262 530,278" fill="#4ade80"/>
<text x="400" y="292" fill="#4ade80">moto con velocità v</text>
<text x="320" y="30" fill="#e2e8f0" font-weight="bold">Orologio in moto: cammino più lungo</text>
<text x="465" y="160" fill="#f97316">c·Δt/2</text>
</g>
</svg>`,
      caption: "Nell'orologio in moto la luce percorre due tratti obliqui, più lunghi di 2d; poiché la velocità è sempre c, il «tic» dura di più: Δt = γ·Δt₀."
    },
    {
      type: "example",
      title: "Il viaggio a 0,8c",
      html: `<p>Una navicella viaggia a v = 0,8c (γ ≈ 1,67) verso una stella a 8 anni luce dalla Terra, nel sistema della Terra.</p>
<p><b>Per chi è a terra</b>: il viaggio dura t = 8/0,8 = <b>10 anni</b>. <b>Per i viaggiatori</b>: l'orologio di bordo misura il tempo proprio Δt₀ = t/γ = 10/1,67 = <b>6 anni</b>. Per loro, la distanza Terra-stella è contratta: L = 8/1,67 ≈ 4,8 anni luce, che a 0,8c si percorrono in 4,8/0,8 = 6 anni, in accordo.</p>
<p>Non c'è paradosso: i due osservatori descrivono lo stesso viaggio da punti di vista diversi. Il viaggiatore invecchia meno rispetto a chi è rimasto a terra (si chiama «paradosso dei gemelli», in realtà non è un paradosso: il gemello che viaggia cambia sistema di riferimento nel giro di boa, quindi la situazione non è simmetrica).</p>`
    },
    {
      type: "quiz",
      title: "Controlla: tempo e lunghezze",
      questions: [
        { type: "num", q: "Quanto vale il fattore γ per v = 0,6c?", answer: 1.25, tol: 0.01, unit: "", explain: "γ = 1/√(1 − 0,36) = 1/0,8 = 1,25." },
        { type: "tf", q: "Un'astronave a 0,5c che lancia un laser in avanti genera un raggio che per un osservatore a terra va a 1,5c.", answer: false, explain: "Secondo il postulato di Einstein, la luce va a c per tutti gli osservatori inerziali." },
        { type: "num", q: "Un regolo di 1,00 m (a riposo) passa a 0,6c. Quanto è lungo per un osservatore a terra (in m)?", answer: 0.8, tol: 0.01, unit: "m", explain: "L = L₀/γ = 1,00/1,25 = 0,80 m." }
      ]
    },
    {
      type: "curiosity",
      title: "I muoni dei raggi cosmici: una prova",
      html: `<p>I <b>muoni</b> sono particelle prodotte nell'alta atmosfera, a circa 10-15 km di quota, dall'urto dei raggi cosmici. A riposo vivono in media 2,2 µs: anche viaggiando quasi a c (≈ 3·10<sup>8</sup> m/s), farebbero in media circa 660 m prima di decadere. Eppure ne arrivano moltissimi al livello del mare. Con v ≈ 0,998c, γ ≈ 16: per noi il loro tempo scorre 16 volte più lento, quindi vivono ≈ 35 µs e percorrono circa 10 km. Per i muoni, invece, è lo spessore dell'atmosfera ad essere contratto di un fattore 16. Le due descrizioni sono equivalenti: è una delle conferme più dirette della relatività.</p>`
    },
    {
      type: "curiosity",
      title: "Il GPS e gli orologi sugli aerei",
      html: `<p>Nel 1971 <b>Hafele e Keating</b> portarono orologi atomici a cesio su voli di linea intorno al mondo e li confrontarono con quelli rimasti a terra: le differenze, di poche centinaia di nanosecondi, erano in accordo con la relatività. Il <b>GPS</b> ne dipende quotidianamente: gli orologi dei satelliti si muovono a circa 3,9 km/s (rallentano di circa 7 µs al giorno per la relatività ristretta) ma sono in un campo gravitazionale più debole (accelerano di circa 45 µs al giorno per la relatività generale). Il saldo è +38 µs al giorno: senza correzioni, l'errore di posizione crescerebbe di circa 10 km al giorno.</p>`
    },
    {
      type: "text",
      title: "Composizione delle velocità e limite c",
      html: `<p>Il secondo postulato impone di rivedere anche la somma delle velocità. Se un oggetto ha velocità <b>w</b> rispetto a un sistema che si muove a velocità <b>v</b> (nella stessa direzione), la sua velocità rispetto al suolo è</p>
<p style="text-align:center"><b>u = (v + w) / (1 + v·w/c²)</b></p>
<p>Per velocità piccole il denominatore è quasi 1 e ritroviamo la somma di Galileo; per velocità vicine a c il risultato non supera mai c. Esempio: un'astronave a v = 0,8c lancia un proiettile a w = 0,8c nel suo verso di moto: u = 1,6c/(1 + 0,64) = 0,976c, non 1,6c. E se w = c (un raggio di luce), u = (v + c)/(1 + v/c) = c, qualunque sia v.</p>
<p><b>c è un limite di velocità</b>: un corpo con massa non può raggiungere c, perché per farlo servirebbe energia infinita (come vedremo). Questo non vieta effetti come le «velocità di fase» o le ombre che superano c: non trasportano informazione né energia.</p>`
    },
    {
      type: "text",
      title: "Quantità di moto, energia ed E = mc²",
      html: `<p>Dato che le leggi della meccanica devono valere per tutti gli osservatori, anche quantità di moto ed energia devono essere ridefinite. Per una particella di massa a riposo <b>m</b> e velocità <b>v</b>:</p>
<ul>
<li>quantità di moto relativistica: <b>p = γ·m·v</b>;</li>
<li>energia totale: <b>E = γ·m·c²</b>;</li>
<li>energia a riposo (v = 0): <b>E₀ = m·c²</b>;</li>
<li>energia cinetica: <b>K = (γ − 1)·m·c²</b> (che per v ≪ c si riduce a ½mv²);</li>
<li>relazione fondamentale: <b>E² = (p·c)² + (m·c²)²</b>, valida anche per le particelle senza massa come il fotone (E = p·c).</li>
</ul>
<p>La formula più famosa della fisica, <b>E₀ = m·c²</b>, afferma che la <b>massa è una forma di energia</b>: un corpo fermo possiede un'energia «di riposo» enorme, perché c² vale 9·10<sup>16</sup> m²/s². Un grammo di materia equivale a 9·10<sup>13</sup> J, l'energia di circa 21 000 tonnellate di tritolo. Nella vita di tutti i giorni la massa che si trasforma in energia è minuscola (nelle reazioni chimiche, una frazione di 10<sup>-10</sup>), ma nelle reazioni nucleari e di annichilazione diventa percepibile: il Sole converte in energia circa 4·10<sup>9</sup> kg di materia ogni secondo.</p>
<p>Man mano che v si avvicina a c, γ tende all'infinito: servirebbe energia infinita per accelerare una massa fino a c. Per questo negli acceleratori come LHC i protoni raggiungono il 99,9999991% della velocità della luce, ma non c.</p>`
    },
    {
      type: "example",
      title: "Quanta energia in un elettrone? E nel Sole?",
      html: `<p><b>Elettrone</b>: m = 9,11·10<sup>-31</sup> kg ⟹ E₀ = mc² = 9,11·10<sup>-31</sup> × (3,00·10<sup>8</sup>)² ≈ 8,2·10<sup>-14</sup> J ≈ <b>0,511 MeV</b> (1 eV = 1,602·10<sup>-19</sup> J). Il protone ha E₀ ≈ 938 MeV.</p>
<p><b>Energia cinetica a 0,6c</b>: K = (γ − 1)mc² = 0,25·mc². Per un elettrone: 0,25 × 0,511 MeV ≈ 0,128 MeV, mentre la formula non relativistica ½mv² darebbe 0,18 × 0,511 = 0,092 MeV (con v = 0,6c): la differenza è già del 28%.</p>
<p><b>Sole</b>: la potenza irradiata è L ≈ 3,8·10<sup>26</sup> W. La massa persa ogni secondo è L/c² = 3,8·10<sup>26</sup>/9,0·10<sup>16</sup> ≈ <b>4,2·10<sup>9</sup> kg/s</b>, cioè 4 milioni di tonnellate al secondo.</p>`
    },
    {
      type: "widget",
      title: "Cronologia della relatività",
      widget: "timeline",
      options: { unit: "anni", events: [
        { year: 1632, label: "Galileo: principio di relatività", icon: "⛵" },
        { year: 1865, label: "Maxwell: onde e.m. e velocità c", icon: "🌊" },
        { year: 1887, label: "Michelson-Morley: nessun vento d'etere", icon: "🔭" },
        { year: 1905, label: "Einstein: relatività ristretta", icon: "⏱️" },
        { year: 1915, label: "Einstein: relatività generale", icon: "🌍" },
        { year: 1971, label: "Hafele-Keating: orologi in volo", icon: "✈️" }
      ] },
      caption: "Dalle intuizioni di Galileo alla verifica sperimentale con orologi atomici."
    },
    {
      type: "quiz",
      title: "Controlla: dinamica relativistica",
      questions: [
        { type: "mc", q: "Perché un corpo con massa non può raggiungere la velocità della luce?", options: ["Perché non esistono motori abbastanza potenti", "Perché la sua energia tenderebbe all'infinito", "Perché la luce lo respinge", "Perché la massa si annulla"], answer: 1, explain: "E = γmc² diverge per v → c." },
        { type: "num", q: "Qual è l'energia a riposo (in 10¹⁴ J) di 2 g di materia? (c = 3,0·10⁸ m/s)", answer: 1.8, tol: 0.02, unit: "·10¹⁴ J", explain: "E = mc² = 2·10⁻³ × 9·10¹⁶ = 1,8·10¹⁴ J." },
        { type: "tf", q: "Per una particella senza massa, come il fotone, vale E = p·c.", answer: true, explain: "Dalla relazione E² = (pc)² + (mc²)² con m = 0." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la relatività",
      intro: "Se le formule non convincono, le immagini aiutano.",
      tabs: [
        {
          label: "🚂 Il treno e il fulmine",
          html: "<p>Due fulmini cadono ai due estremi di un treno in moto: chi sta a metà del treno li vede arrivare quando il treno è già avanzato, e riceve per prima la luce del fulmine davanti, perché gli va incontro. Se corregge per le distanze e per il tempo di viaggio della luce, conclude che i fulmini erano simultanei <i>per lui</i>; chi sta sul marciapiede dirà che non lo erano. Il punto è che «simultaneo» non è una proprietà del mondo ma della coppia evento-osservatore.</p>"
        },
        {
          label: "🔢 Una tabella di valori di γ",
          html: "<p>Scegli una velocità e calcola γ: se v = 0,1c, γ = 1,005 (quasi nessun effetto); 0,5c → 1,155; 0,8c → 1,667; 0,9c → 2,294; 0,99c → 7,09; 0,999c → 22,4. Gli effetti relativistici restano trascurabili fino a una frazione notevole di c, e poi esplodono: è per questo che nella vita quotidiana non li notiamo.</p>"
        },
        {
          label: "🔗 Abbina effetto e formula",
          html: "<p>Collega ogni fenomeno alla relazione corretta.</p>",
          widget: "match",
          options: { pairs: [
            ["Dilatazione del tempo", "Δt = γ·Δt₀"],
            ["Contrazione delle lunghezze", "L = L₀/γ"],
            ["Energia a riposo", "E₀ = mc²"],
            ["Energia totale", "E = γmc²"],
            ["Fattore di Lorentz", "γ = 1/√(1 − v²/c²)"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della relatività ristretta",
      nodes: [
        { id: "galileo", label: "Relatività galileiana", x: 12, y: 12, color: "#64748b", html: "Le leggi della meccanica valgono in tutti i sistemi inerziali; le velocità si sommano.", why: "Derivata da Galileo (1632) con l'esempio della nave. Funziona benissimo per le velocità quotidiane ma entra in crisi con l'elettromagnetismo." },
        { id: "maxwell", label: "c costante", x: 50, y: 10, color: "#2563eb", html: "Le equazioni di Maxwell danno una velocità c che non dipende dall'osservatore.", why: "Era già un indizio: c = 1/√(ε₀μ₀) non cita alcun sistema di riferimento. Michelson e Morley (1887) non trovarono l'etere." },
        { id: "postulati", label: "Postulati di Einstein", x: 82, y: 25, color: "#ef4444", html: "Relatività per tutte le leggi + velocità della luce uguale per tutti.", why: "Einstein scelse di conservare Maxwell e il principio di relatività e di cambiare la cinematica: tempo e spazio non sono assoluti." },
        { id: "effetti", label: "Dilatazione e contrazione", x: 80, y: 62, color: "#16a34a", html: "Δt = γΔt₀, L = L₀/γ; simultaneità relativa.", why: "Si ricavano con l'orologio a luce e il teorema di Pitagora. I muoni e il GPS ne sono prove sperimentali quotidiane." },
        { id: "energia", label: "E = mc²", x: 22, y: 55, color: "#f59e0b", html: "Massa e energia sono equivalenti; E² = (pc)² + (mc²)².", why: "Nasce dalla richiesta che conservazione di energia e quantità di moto valgano in tutti i sistemi. Spiega l'energia nucleare e le stelle." },
        { id: "generale", label: "Verso la relatività generale", x: 50, y: 86, color: "#8b5cf6", html: "Includere la gravità nello spazio-tempo (1915).", why: "La relatività ristretta vale per sistemi inerziali. Per accelerazione e gravità Einstein sviluppò la relatività generale, in cui la massa curva lo spazio-tempo." }
      ],
      edges: [["galileo", "maxwell", "in crisi con"], ["maxwell", "postulati", "porta a"], ["postulati", "effetti", "implicano"], ["effetti", "energia", "estesa a"], ["energia", "generale", "preparano"]]
    }
  ],
  glossary: [
    { t: "Sistema inerziale", d: "Sistema di riferimento in moto rettilineo uniforme in cui vale il principio d'inerzia." },
    { t: "Fattore di Lorentz γ", d: "γ = 1/√(1 − v²/c²) ≥ 1; misura quanto sono grandi gli effetti relativistici." },
    { t: "Tempo proprio", d: "Intervallo di tempo misurato da un orologio rispetto al quale gli eventi avvengono nello stesso luogo." },
    { t: "Lunghezza propria", d: "Lunghezza di un oggetto misurata nel suo sistema di riferimento a riposo." },
    { t: "Simultaneità relativa", d: "Due eventi simultanei per un osservatore possono non esserlo per un altro in moto." },
    { t: "Energia a riposo", d: "E₀ = mc²: energia posseduta da un corpo di massa m anche se è fermo." },
    { t: "Etere", d: "Mezzo ipotetico per la propagazione della luce, abbandonato dopo Michelson-Morley e Einstein." },
    { t: "Muone", d: "Particella instabile, simile a un elettrone più pesante, con vita media di 2,2 µs a riposo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale esperimento (1887) non trovò alcun «vento d'etere»?", options: ["Young", "Michelson-Morley", "Hertz", "Rutherford"], answer: 1, explain: "Michelson e Morley non misurarono variazioni della velocità della luce legate al moto della Terra." },
      { type: "tf", q: "Secondo la relatività ristretta la velocità della luce nel vuoto è la stessa per tutti gli osservatori inerziali.", answer: true, explain: "È il secondo postulato di Einstein." },
      { type: "num", q: "Calcola γ per v = 0,8c.", answer: 1.67, tol: 0.01, unit: "", explain: "γ = 1/√(1 − 0,64) = 1/0,6 ≈ 1,67." },
      { type: "num", q: "Un orologio a bordo di una navicella a 0,8c misura un intervallo di 6 anni. Quanti anni passano per chi è a terra?", answer: 10, tol: 0.1, unit: "anni", explain: "Δt = γΔt₀ = 1,67 × 6 = 10 anni." },
      { type: "mc", q: "Per un osservatore a terra, un'astronave in moto veloce appare:", options: ["Più lunga nella direzione del moto", "Più corta nella direzione del moto", "Più larga", "Uguale"], answer: 1, explain: "Contrazione delle lunghezze: L = L₀/γ lungo la direzione del moto." },
      { type: "num", q: "Qual è l'energia a riposo (in MeV) di un elettrone (m = 9,11·10⁻³¹ kg)? (1 MeV = 1,602·10⁻¹³ J, c = 3,00·10⁸)", answer: 0.511, tol: 0.005, unit: "MeV", explain: "mc² = 8,2·10⁻¹⁴ J ≈ 0,511 MeV." },
      { type: "tf", q: "Il «paradosso dei gemelli» è un paradosso vero che mostra che la relatività è contraddittoria.", answer: false, explain: "Il gemello viaggiatore cambia sistema di riferimento nel giro di boa: la situazione non è simmetrica e la teoria è coerente." },
      { type: "num", q: "Due astronavi: una a 0,8c lancia un proiettile a 0,8c nello stesso verso. Qual è la velocità rispetto al suolo (in unità di c, circa)?", answer: 0.976, tol: 0.003, unit: "c", explain: "u = (0,8 + 0,8)/(1 + 0,64) ≈ 0,976c." },
      { type: "mc", q: "Come si spiega l'arrivo dei muoni al livello del mare?", options: ["Sono prodotti dalla Terra", "Vivono più a lungo per noi, per la dilatazione dei tempi", "Viaggiano più veloci della luce", "Non decadono mai"], answer: 1, explain: "Con γ ≈ 16 la vita media misurata a terra è molto più lunga, e percorrono ~10 km." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Galileo: principio di relatività", "Maxwell: onde e.m.", "Michelson-Morley: nessun etere", "Einstein: relatività ristretta"], explain: "1632, 1865, 1887, 1905." }
    ]
  }
});
