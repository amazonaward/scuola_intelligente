TOPIC('it', {
  id: "l5-fis-quantistica",
  title: "La fisica quantistica",
  intro: "Alla fine dell'Ottocento molti fisici pensavano di avere in mano quasi tutto: la meccanica di Newton, l'elettromagnetismo di Maxwell, la termodinamica. Restavano poche «nuvolette» sull'orizzonte, e furono proprio quelle a scatenare la rivoluzione più radicale della fisica. Il <b>corpo nero</b>, l'<b>effetto fotoelettrico</b>, gli spettri a righe degli atomi mostrarono che a scala microscopica l'energia è <b>quantizzata</b>, la luce si comporta anche come particelle, la materia anche come onde, e che la natura impone limiti alla conoscenza simultanea di certe grandezze. In questa lezione ripercorriamo le tappe fondamentali, dalla costante di Planck al principio di indeterminazione di Heisenberg, fino all'interpretazione probabilistica della funzione d'onda.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Il corpo nero e l'ipotesi di Planck",
      html: `<p>Ogni corpo caldo emette radiazione elettromagnetica: un ferro rovente è rosso, poi arancione, poi giallo-bianco man mano che la temperatura sale. Un <b>corpo nero</b> è un oggetto ideale che assorbe tutta la radiazione che lo colpisce (una piccola apertura in una cavità chiusa lo realizza bene): il suo spettro di emissione dipende <b>solo dalla temperatura</b>, non dal materiale. Gli sperimentatori ne misurarono con precisione la forma: l'intensità sale fino a un massimo e poi scende.</p>
<p>Si conoscevano due leggi empiriche: la <b>legge di Wien</b>, λ<sub>max</sub>·T = 2,898·10<sup>-3</sup> m·K (il massimo si sposta verso lunghezze d'onda minori al crescere di T: il Sole, T ≈ 5800 K, ha il massimo intorno a 500 nm, nel verde-giallo), e la <b>legge di Stefan-Boltzmann</b>, per cui la potenza irradiata per unità di superficie è proporzionale a T<sup>4</sup>: P/A = σ·T<sup>4</sup> con σ = 5,67·10<sup>-8</sup> W/(m²·K⁴).</p>
<p>La fisica classica però non riusciva a spiegare la <b>forma</b> dello spettro. Il calcolo di Rayleigh e Jeans prevedeva intensità che crescono senza limite alle alte frequenze: la cosiddetta <b>catastrofe ultravioletta</b>, un'energia totale infinita, in palese contrasto con l'osservazione. Il 14 dicembre 1900, davanti alla Società tedesca di fisica, <b>Max Planck</b> propose una soluzione: gli oscillatori nelle pareti della cavità possono scambiare energia con la radiazione solo in <b>multipli interi</b> di un «pacchetto» proporzionale alla frequenza:</p>
<p style="text-align:center"><b>E = h · f</b> &nbsp;&nbsp; con &nbsp;&nbsp; <b>h = 6,626·10<sup>-34</sup> J·s</b></p>
<p>h è la <b>costante di Planck</b>. Con questa ipotesi la formula riproduceva perfettamente le misure: alle alte frequenze i «quanti» hf sono troppo grandi per essere facilmente emessi, e l'intensità si spegne. Planck stesso la considerò all'inizio un artificio matematico; fu Einstein a prenderla sul serio come fatto fisico. Per questa scoperta Planck ricevette il Nobel nel 1918.</p>`
    },
    {
      type: "svg",
      title: "Lo spettro del corpo nero",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#94a3b8" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#94a3b8" stroke-width="2"/>
<path d="M60 250 C 100 245 130 180 170 130 S 240 90 300 150 S 450 240 560 248" fill="none" stroke="#ef4444" stroke-width="3"/>
<path d="M60 250 C 90 248 120 220 150 190 S 210 150 270 190 S 400 242 560 249" fill="none" stroke="#f59e0b" stroke-width="3"/>
<path d="M60 250 C 80 249 100 240 120 232 S 180 215 230 225 S 360 247 560 250" fill="none" stroke="#38bdf8" stroke-width="3"/>
<path d="M60 250 L 140 130 L 200 80 L 260 40 L 330 22" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
<g font-family="sans-serif" font-size="14">
<text x="400" y="100" fill="#ef4444" font-weight="bold">T alta</text>
<text x="400" y="190" fill="#f59e0b" font-weight="bold">T media</text>
<text x="400" y="235" fill="#38bdf8" font-weight="bold">T bassa</text>
<text x="300" y="30" fill="#94a3b8">previsione classica (Rayleigh-Jeans)</text>
<text x="400" y="278" fill="#e2e8f0">lunghezza d'onda λ</text>
<text x="70" y="22" fill="#e2e8f0">intensità</text>
</g>
</svg>`,
      caption: "Schema qualitativo: al crescere della temperatura il massimo si sposta verso lunghezze d'onda minori e cresce; la previsione classica (tratteggio) diverge alle piccole λ."
    },
    {
      type: "example",
      title: "Di che colore è una stella?",
      html: `<p>Con la legge di Wien λ<sub>max</sub> = 2,898·10<sup>-3</sup>/T. Per il Sole (T ≈ 5800 K): λ<sub>max</sub> ≈ <b>500 nm</b> (verde). Per Betelgeuse (T ≈ 3500 K): ≈ 830 nm, nel vicino infrarosso: appare rosso-arancio. Per Sirio (T ≈ 9900 K): ≈ 290 nm, nell'ultravioletto: appare bianco-azzurra. Il corpo umano (T ≈ 310 K) ha il massimo a ≈ 9,3 µm, nell'infrarosso: è per questo che le termocamere ci «vedono».</p>
<p>Stefan-Boltzmann: raddoppiando la temperatura, la potenza irradiata aumenta di 2⁴ = <b>16 volte</b>.</p>`
    },
    {
      type: "text",
      title: "L'effetto fotoelettrico",
      html: `<p>Nel 1887 Heinrich Hertz notò che una lastra metallica colpita da luce ultravioletta favorisce le scariche elettriche; <b>Philipp Lenard</b> mostrò (1902) che la luce <b>strappa elettroni</b> alla superficie del metallo. Gli esperimenti rivelarono tre risultati inspiegabili con la teoria ondulatoria della luce:</p>
<ol>
<li>Esiste una <b>frequenza di soglia</b> f₀, dipendente dal metallo: sotto f₀ non esce nessun elettrone, per quanto intensa sia la luce, mentre sopra f₀ gli elettroni escono anche con luce debolissima.</li>
<li>L'<b>energia cinetica massima</b> degli elettroni dipende dalla <b>frequenza</b> della luce (cresce linearmente) e <b>non dalla sua intensità</b>.</li>
<li>L'emissione è <b>istantanea</b> (meno di 10<sup>-9</sup> s), anche con luce debole.</li>
</ol>
<p>Per una teoria ondulatoria l'energia dovrebbe dipendere dall'intensità e servirebbe del tempo per accumularla. Nel <b>1905</b> <b>Albert Einstein</b> generalizzò l'idea di Planck: la <b>luce stessa</b> è composta da <b>quanti di energia</b> (poi detti <b>fotoni</b>), ciascuno con energia <b>E = h·f</b>. Un fotone cede tutta la sua energia a un solo elettrone; l'elettrone deve spendere un'energia minima <b>W</b> (<b>lavoro di estrazione</b>, tipico del metallo) per uscire dal materiale, e il resto diventa energia cinetica:</p>
<p style="text-align:center"><b>K<sub>max</sub> = h·f − W</b> &nbsp;&nbsp;&nbsp; <b>f₀ = W/h</b></p>
<p>Tutto torna: sotto la soglia nessun fotone ha energia sufficiente; l'intensità fa variare il <b>numero</b> di fotoni (e quindi il numero di elettroni), non la loro energia; il processo è istantaneo perché un fotone agisce su un singolo elettrone. L'ipotesi fu confermata da misure precise di <b>Robert Millikan</b> (1916), che pure era scettico. Einstein ricevette per questo il <b>Nobel nel 1921</b> (non per la relatività). Applicazioni: celle fotovoltaiche, fotocellule, sensori delle fotocamere.</p>`
    },
    {
      type: "example",
      title: "Fotoni e fotoelettroni",
      html: `<p>Energia di un fotone: E = h·f = hc/λ. Conviene usare l'<b>elettronvolt</b> (1 eV = 1,602·10<sup>-19</sup> J) e la scorciatoia <b>hc ≈ 1240 eV·nm</b>. Luce verde di 500 nm: E ≈ 1240/500 = <b>2,48 eV</b> ≈ 4,0·10<sup>-19</sup> J.</p>
<p>Un metallo con W = 2,3 eV (come il sodio) colpito da luce di 400 nm (E = 3,1 eV): K<sub>max</sub> = 3,1 − 2,3 = <b>0,8 eV</b>. Con luce di 600 nm (E = 2,07 eV &lt; W) non esce nessun elettrone, nemmeno con un faro potentissimo. La frequenza di soglia è f₀ = W/h = 2,3 × 1,602·10<sup>-19</sup>/6,626·10<sup>-34</sup> ≈ 5,6·10<sup>14</sup> Hz (λ₀ ≈ 540 nm).</p>
<p>Per misurare K<sub>max</sub> si applica una tensione frenante: il <b>potenziale di arresto</b> V<sub>0</sub> tale che e·V<sub>0</sub> = K<sub>max</sub>. Nell'esempio, V<sub>0</sub> = 0,8 V.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: Planck e fotoni",
      questions: [
        { type: "mc", q: "Qual era il problema della teoria classica del corpo nero?", options: ["Prevedeva un'energia infinita alle alte frequenze (catastrofe ultravioletta)", "Non spiegava il colore del Sole", "Non riconosceva la legge di Stefan", "Non prevedeva alcuna radiazione"], answer: 0, explain: "Rayleigh-Jeans dava intensità crescenti senza limite ad alta frequenza." },
        { type: "num", q: "Quanta energia (in eV) ha un fotone di lunghezza d'onda 620 nm? (hc ≈ 1240 eV·nm)", answer: 2, tol: 0.02, unit: "eV", explain: "E = 1240/620 = 2,0 eV." },
        { type: "tf", q: "Aumentando l'intensità di una luce sotto la frequenza di soglia, prima o poi si liberano elettroni.", answer: false, explain: "Ogni fotone ha energia insufficiente: più fotoni non cambiano nulla." }
      ]
    },
    {
      type: "decision",
      title: "1905: la luce è fatta di particelle?",
      html: "<p>Sei un fisico nel 1905. Hai davanti un secolo di prove che la luce è un'onda (interferenza, diffrazione, Maxwell). Un giovane impiegato dell'Ufficio Brevetti di Berna sostiene che, per spiegare l'effetto fotoelettrico, la luce deve comportarsi come un flusso di quanti di energia localizzati.</p>",
      question: "Come reagisci?",
      options: [
        { label: "Respingo l'idea: la luce è un'onda, punto", outcome: "È la reazione di quasi tutti all'epoca (anche Planck e Millikan). Ma l'onda classica non spiega la soglia e l'istantaneità." },
        { label: "Accetto che in certi processi la luce si comporti come particelle, e cerco prove", outcome: "È la strada giusta: Millikan misura con cura la legge di Einstein (1916) e Compton (1923) osserva l'urto fotone-elettrone." },
        { label: "Cerco di spiegare tutto con onde e un modello classico per gli elettroni", outcome: "Molti ci provarono (Bohr, Kramers, Slater), ma l'esperimento di Compton chiuse la questione." }
      ],
      answer: 1,
      explain: "Il fotone fu accettato soltanto dopo l'effetto Compton (1923): un fotone urta un elettrone come una particella, con conservazione di energia e quantità di moto. Da allora si parla di «dualismo onda-particella» della luce."
    },
    {
      type: "text",
      title: "Compton e il dualismo onda-particella della luce",
      html: `<p>Nel <b>1923</b> <b>Arthur Compton</b> osservò che raggi X diffusi da un bersaglio di grafite escono con lunghezza d'onda maggiore, e che l'aumento dipende solo dall'angolo di diffusione θ:</p>
<p style="text-align:center"><b>λ' − λ = (h/(m<sub>e</sub>·c))·(1 − cos θ)</b>, con h/(m<sub>e</sub>c) = 2,43 pm</p>
<p>Ciò si spiega solo trattando l'urto come quello tra due <b>particelle</b>: il fotone cede parte della sua energia e quantità di moto a un elettrone. Il fotone ha quantità di moto <b>p = h/λ</b>. Il quadro che ne risulta è il <b>dualismo onda-particella</b>: la luce mostra aspetti ondulatori (interferenza, diffrazione, polarizzazione) in alcuni esperimenti e aspetti corpuscolari (effetto fotoelettrico, Compton) in altri. Non è «onda o particella», è un'entità quantistica che si manifesta in un modo o nell'altro a seconda dell'esperimento.</p>`
    },
    {
      type: "text",
      title: "Gli atomi e gli spettri a righe: il modello di Bohr",
      html: `<p>Un gas rarefatto eccitato emette luce solo a <b>lunghezze d'onda precise</b> (spettro a righe), tipiche di ogni elemento. Per l'idrogeno, nel 1885 <b>Johann Balmer</b> trovò una formula empirica per le righe visibili; <b>Rydberg</b> la generalizzò. Nel modello atomico di Rutherford (1911) un elettrone in orbita irradierebbe e precipiterebbe sul nucleo in frazioni di secondo: l'atomo sarebbe instabile.</p>
<p>Nel <b>1913</b> <b>Niels Bohr</b> propose per l'idrogeno un modello con tre ipotesi: (1) l'elettrone può occupare solo certe orbite <b>stazionarie</b> (con momento angolare multiplo di ħ = h/2π) senza irradiare; (2) ogni orbita ha un'energia ben definita, <b>E<sub>n</sub> = −13,6 eV/n²</b> (n = 1, 2, 3, …); (3) l'atomo emette o assorbe un fotone quando l'elettrone <b>salta</b> da un livello all'altro: <b>h·f = |E<sub>i</sub> − E<sub>f</sub>|</b>. L'energia di ionizzazione dell'idrogeno è 13,6 eV. Il modello spiegava le righe dell'idrogeno con grande precisione, ma non funzionava per atomi più complessi: servirà la meccanica quantistica completa.</p>
<p>Un'osservazione cruciale: l'idrogeno assorbe e emette fotoni <b>solo</b> a certe energie. Il salto da n = 3 a n = 2 emette il fotone con E = 13,6·(1/4 − 1/9) = 1,89 eV, λ ≈ 656 nm: la riga rossa H-alfa, riconoscibile nello spettro delle nebulose.</p>`
    },
    {
      type: "3d",
      title: "Modello atomico (Bohr)",
      scene: "atom",
      options: { elements: ["H", "He", "C"] },
      caption: "Ruota il modello: gli elettroni occupano livelli discreti, non orbite qualsiasi."
    },
    {
      type: "text",
      title: "De Broglie: anche la materia è onda",
      html: `<p>Nel <b>1924</b>, nella sua tesi di dottorato, il principe <b>Louis de Broglie</b> propose di rovesciare il ragionamento di Einstein: se la luce ha aspetti corpuscolari, anche la materia può avere aspetti ondulatori. A ogni particella di quantità di moto p associò una <b>lunghezza d'onda</b>:</p>
<p style="text-align:center"><b>λ = h / p = h / (m·v)</b></p>
<p>Per gli oggetti macroscopici λ è assolutamente trascurabile: una palla da tennis di 0,06 kg a 30 m/s ha λ = 6,6·10<sup>-34</sup>/1,8 ≈ 3,7·10<sup>-34</sup> m. Per un elettrone accelerato da 100 V (v ≈ 5,9·10<sup>6</sup> m/s) λ ≈ <b>0,12 nm</b>, dell'ordine delle distanze tra gli atomi in un cristallo. Nel 1927 <b>Davisson e Germer</b> osservarono la <b>diffrazione degli elettroni</b> da un cristallo di nichel, e George P. Thomson la ottenne con lamine metalliche: gli elettroni si comportano come onde. Più tardi (1961, Jönsson) si realizzò l'esperimento di Young con elettroni, e oggi anche con atomi e grosse molecole. Il microscopio elettronico sfrutta la piccola λ degli elettroni per una risoluzione molto superiore a quella ottica.</p>
<p>De Broglie, Davisson e Thomson ricevettero il Nobel (1929, 1937). L'onda di materia spiega perché l'elettrone atomico ha solo certi livelli: sono i modi stazionari di un'onda confinata, come le note di una corda con gli estremi fissi (la condizione di Bohr diventa 2πr = nλ).</p>`
    },
    {
      type: "example",
      title: "La lunghezza d'onda di un elettrone",
      html: `<p>Un elettrone accelerato da una tensione V acquista K = eV; la sua quantità di moto è p = √(2m<sub>e</sub>eV). Per V = 100 V: p = √(2 × 9,11·10<sup>-31</sup> × 1,60·10<sup>-19</sup> × 100) ≈ 5,4·10<sup>-24</sup> kg·m/s, e λ = h/p = 6,63·10<sup>-34</sup>/5,4·10<sup>-24</sup> ≈ <b>1,2·10<sup>-10</sup> m = 0,12 nm</b>.</p>
<p>Per una persona di 70 kg che cammina a 1,5 m/s: λ ≈ 6,3·10<sup>-36</sup> m, quindi non osserviamo effetti ondulatori su scala umana.</p>`
    },
    {
      type: "text",
      title: "La meccanica quantistica: funzione d'onda e probabilità",
      html: `<p>Nel 1925-1926 nasce la <b>meccanica quantistica</b> in forma completa: la matematica delle matrici di <b>Heisenberg</b> (con Born e Jordan) e l'equazione ondulatoria di <b>Erwin Schrödinger</b> (1926) risultano equivalenti. Lo stato di una particella è descritto da una <b>funzione d'onda ψ(x, t)</b>, che evolve secondo l'equazione di Schrödinger. Il suo significato fu chiarito da <b>Max Born</b> (1926): <b>|ψ|²</b> non è un'onda di materia nel senso classico, è una <b>densità di probabilità</b>: la probabilità di trovare la particella in un intervallo è l'area sotto |ψ|². Un elettrone in un atomo non ha un'orbita, ma un <b>orbitale</b>: una nuvola di probabilità. Nel doppio taglio, ogni elettrone arriva in un punto preciso dello schermo (comportamento da particella), ma gli arrivi si distribuiscono secondo la figura di interferenza (comportamento da onda).</p>
<p>La natura quantistica ha una conseguenza filosofica profonda: il risultato di una singola misura non è in generale prevedibile; si possono prevedere solo le <b>probabilità</b>. Einstein non amava questa visione («Dio non gioca a dadi») e il dibattito con Bohr è celebre. Gli esperimenti sulle disuguaglianze di Bell (a partire dagli anni '70-'80, Aspect) hanno però dato ragione alla teoria quantistica. Un esempio per dare l'idea della stranezza è il <b>gatto di Schrödinger</b> (1935), un paradosso pensato per mostrare cosa accadrebbe applicando la sovrapposizione quantistica a un oggetto macroscopico.</p>`
    },
    {
      type: "text",
      title: "Il principio di indeterminazione di Heisenberg",
      html: `<p>Nel <b>1927</b> <b>Werner Heisenberg</b> mostrò che esistono coppie di grandezze che non si possono conoscere contemporaneamente con precisione arbitraria. Per posizione e quantità di moto:</p>
<p style="text-align:center"><b>Δx · Δp ≥ ħ / 2</b> &nbsp;&nbsp; con &nbsp;&nbsp; ħ = h/2π = 1,055·10<sup>-34</sup> J·s</p>
<p>e per energia e tempo: ΔE·Δt ≳ ħ/2. Non è un limite dovuto alla pochezza degli strumenti: è una proprietà della natura, legata al comportamento ondulatorio (come un'onda con λ ben definita è estesa nello spazio, e un impulso breve ha uno spettro di frequenze largo). Più si restringe la posizione, più si allarga la quantità di moto.</p>
<p>Conseguenze: l'elettrone non può «cadere» sul nucleo, perché restringerlo ne aumenterebbe l'energia cinetica (confinando un elettrone in Δx ≈ 10<sup>-10</sup> m si ha Δp ≥ 5,3·10<sup>-25</sup> kg·m/s e Δv ≥ 5,8·10<sup>5</sup> m/s): è il motivo della stabilità degli atomi e delle loro dimensioni. Per un oggetto macroscopico (una massa di 0,1 kg in Δx = 1 mm) l'incertezza sulla velocità è Δv ≥ 5·10<sup>-31</sup> m/s, assolutamente trascurabile.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: de Broglie e Heisenberg",
      questions: [
        { type: "num", q: "Qual è la lunghezza d'onda di de Broglie (in nm) di una particella con quantità di moto 6,63·10⁻²⁴ kg·m/s? (h = 6,63·10⁻³⁴ J·s)", answer: 0.1, tol: 0.001, unit: "nm", explain: "λ = h/p = 6,63·10⁻³⁴/6,63·10⁻²⁴ = 10⁻¹⁰ m = 0,1 nm." },
        { type: "tf", q: "Il principio di indeterminazione deriva dal fatto che gli strumenti di misura sono troppo grezzi.", answer: false, explain: "È una proprietà fondamentale dei sistemi quantistici, non un limite tecnologico." },
        { type: "mc", q: "Quale esperimento mostrò la natura ondulatoria degli elettroni?", options: ["Compton", "Davisson-Germer", "Michelson-Morley", "Millikan"], answer: 1, explain: "Davisson e Germer (1927) osservarono diffrazione di elettroni da un cristallo." }
      ]
    },
    {
      type: "curiosity",
      title: "Il computer in tasca è quantistico",
      html: `<p>La meccanica quantistica non è soltanto una teoria per specialisti: i <b>transistor</b> dei processori, i <b>laser</b> dei lettori ottici, i <b>LED</b>, la risonanza magnetica e le celle solari funzionano grazie a effetti quantistici (livelli energetici nei semiconduttori, emissione stimolata, spin). Si stima che una larga frazione dell'economia mondiale dipenda da tecnologie nate dalla fisica quantistica. Il prossimo passo sono i <b>computer quantistici</b>, che sfruttano la sovrapposizione di stati e l'entanglement per certi tipi di calcolo.</p>`
    },
    {
      type: "curiosity",
      title: "Lo scontro Einstein-Bohr",
      html: `<p>Ai congressi Solvay del 1927 e del 1930 Einstein propose esperimenti mentali per aggirare l'indeterminazione, e Bohr trovò ogni volta una risposta. Nel 1935 Einstein, Podolsky e Rosen pubblicarono un celebre articolo (<i>EPR</i>) per sostenere che la meccanica quantistica è incompleta; la loro intuizione portò allo studio dell'<b>entanglement</b>, la correlazione tra particelle che non ha analogo classico. Gli esperimenti di Alain Aspect (1982) e successivi hanno verificato le previsioni quantistiche; il Nobel per la fisica 2022 è stato assegnato ad Aspect, Clauser e Zeilinger per questi lavori.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il mondo quantistico",
      intro: "L'intuizione quotidiana non basta: prova queste immagini.",
      tabs: [
        {
          label: "🎸 La corda di chitarra",
          html: "<p>Una corda fissata ai due estremi può vibrare solo con certe frequenze: lunghezza d'onda uguale a 2L, L, 2L/3, …: i <b>modi di vibrazione</b>. Non esistono vie di mezzo. Quando un'onda è confinata, nasce la <b>quantizzazione</b>. L'elettrone nell'atomo, secondo de Broglie, è un'onda confinata attorno al nucleo: per questo ha livelli discreti. Il «quanto» è il modo con cui la natura conta i modi di un'onda intrappolata.</p>"
        },
        {
          label: "💰 Monete e banconote",
          html: "<p>Se in un negozio puoi pagare soltanto con monete da 1 euro, il prezzo cambia a salti. L'energia della luce a una data frequenza si scambia solo in «monetine» di valore hf: puoi avere 1, 2, 3 fotoni, mai 1,5. L'effetto fotoelettrico è come un distributore che richiede almeno una moneta da valore W per funzionare: tante monete piccole non bastano, perché gli elettroni le «spendono» una alla volta.</p>"
        },
        {
          label: "🔗 Abbina scoperta e scienziato",
          html: "<p>Collega ogni scoperta al suo autore.</p>",
          widget: "match",
          options: { pairs: [
            ["Quanto di energia E = hf (1900)", "Planck"],
            ["Spiegazione dell'effetto fotoelettrico (1905)", "Einstein"],
            ["Modello dell'atomo a livelli (1913)", "Bohr"],
            ["Onde di materia (1924)", "de Broglie"],
            ["Principio di indeterminazione (1927)", "Heisenberg"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della fisica quantistica",
      nodes: [
        { id: "nero", label: "Corpo nero e Planck", x: 12, y: 12, color: "#64748b", html: "E = hf: l'energia si scambia a pacchetti.", why: "La catastrofe ultravioletta mostrò il fallimento della fisica classica. Planck (1900) introdusse i quanti come artificio per riprodurre la curva sperimentale." },
        { id: "foto", label: "Effetto fotoelettrico", x: 50, y: 10, color: "#2563eb", html: "K = hf − W: il fotone cede tutta l'energia a un solo elettrone.", why: "Spiega soglia, indipendenza dall'intensità e istantaneità. Einstein (1905) prese i quanti sul serio come proprietà della luce; Millikan (1916) lo verificò." },
        { id: "dualismo", label: "Dualismo onda-particella", x: 82, y: 25, color: "#ef4444", html: "Luce e materia mostrano entrambi gli aspetti.", why: "La luce ha p = h/λ (Compton 1923); gli elettroni hanno λ = h/p (de Broglie 1924, Davisson-Germer 1927)." },
        { id: "bohr", label: "Atomo di Bohr", x: 80, y: 62, color: "#16a34a", html: "Livelli E_n = −13,6/n² eV; salti emettono fotoni hf.", why: "Spiega le righe dell'idrogeno (Balmer, Rydberg). Con de Broglie i livelli sono onde stazionarie dell'elettrone." },
        { id: "psi", label: "Funzione d'onda", x: 22, y: 55, color: "#f59e0b", html: "|ψ|² = densità di probabilità (Born); evoluzione di Schrödinger.", why: "Dà uno stato quantistico e prevede probabilità, non traiettorie. Spiega gli orbitali e la figura di interferenza degli elettroni." },
        { id: "heis", label: "Indeterminazione", x: 50, y: 86, color: "#8b5cf6", html: "Δx·Δp ≥ ħ/2: limite fondamentale della natura.", why: "Conseguenza della natura ondulatoria: un'onda ben localizzata contiene molte lunghezze d'onda. Garantisce la stabilità degli atomi." }
      ],
      edges: [["nero", "foto", "estesa da"], ["foto", "dualismo", "porta a"], ["dualismo", "bohr", "spiega"], ["dualismo", "psi", "formalizzato in"], ["psi", "heis", "implica"]]
    }
  ],
  glossary: [
    { t: "Quanto", d: "Quantità minima e indivisibile di una grandezza fisica scambiata o posseduta; per la luce E = hf." },
    { t: "Costante di Planck", d: "h = 6,626·10⁻³⁴ J·s: lega energia e frequenza del fotone." },
    { t: "Corpo nero", d: "Corpo ideale che assorbe tutta la radiazione; il suo spettro dipende solo da T." },
    { t: "Fotone", d: "Quanto di radiazione elettromagnetica con E = hf e p = h/λ." },
    { t: "Lavoro di estrazione", d: "Energia minima W necessaria per estrarre un elettrone da un metallo." },
    { t: "Lunghezza d'onda di de Broglie", d: "λ = h/p associata a ogni particella." },
    { t: "Funzione d'onda", d: "ψ: il suo modulo quadro dà la densità di probabilità di trovare la particella." },
    { t: "Indeterminazione", d: "Limite Δx·Δp ≥ ħ/2 alla conoscenza simultanea di posizione e quantità di moto." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi introdusse l'idea dei quanti di energia nel 1900?", options: ["Einstein", "Planck", "Bohr", "Heisenberg"], answer: 1, explain: "Max Planck, nello studio del corpo nero." },
      { type: "num", q: "Quanta energia (in eV) ha un fotone di 310 nm? (hc ≈ 1240 eV·nm)", answer: 4, tol: 0.05, unit: "eV", explain: "E = 1240/310 = 4,0 eV." },
      { type: "num", q: "Il lavoro di estrazione di un metallo è 2,0 eV. Si illumina con fotoni da 3,5 eV. Quanto vale K_max (in eV)?", answer: 1.5, tol: 0.02, unit: "eV", explain: "K_max = hf − W = 3,5 − 2,0 = 1,5 eV." },
      { type: "tf", q: "Aumentando l'intensità della luce di una certa frequenza aumenta l'energia cinetica massima dei fotoelettroni.", answer: false, explain: "Aumenta il numero di fotoelettroni, non la loro energia massima, che dipende da f." },
      { type: "mc", q: "Che cosa dimostrò l'effetto Compton?", options: ["La natura ondulatoria degli elettroni", "Il carattere corpuscolare della radiazione", "L'esistenza dell'etere", "La struttura nucleare"], answer: 1, explain: "Il fotone urta un elettrone con scambio di energia e quantità di moto." },
      { type: "num", q: "Calcola la lunghezza d'onda di de Broglie (in nm) di un elettrone con p = 3,3·10⁻²⁴ kg·m/s (h = 6,63·10⁻³⁴).", answer: 0.2, tol: 0.005, unit: "nm", explain: "λ = h/p = 6,63·10⁻³⁴/3,3·10⁻²⁴ ≈ 2,0·10⁻¹⁰ m = 0,2 nm." },
      { type: "num", q: "Quale energia (in eV) ha il livello n = 2 dell'idrogeno?", answer: -3.4, tol: 0.05, unit: "eV", explain: "E₂ = −13,6/4 = −3,4 eV." },
      { type: "mc", q: "Che cosa rappresenta |ψ|² secondo Born?", options: ["La massa della particella", "La densità di probabilità di trovare la particella", "L'energia cinetica", "L'ampiezza di un'onda materiale"], answer: 1, explain: "È l'interpretazione probabilistica della funzione d'onda." },
      { type: "tf", q: "L'indeterminazione di Heisenberg è dovuta soltanto a limiti degli strumenti di misura.", answer: false, explain: "È una proprietà fondamentale della natura quantistica." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Planck: quanti di energia", "Einstein: fotoni ed effetto fotoelettrico", "Bohr: modello dell'idrogeno", "Heisenberg: indeterminazione"], explain: "1900, 1905, 1913, 1927." }
    ]
  }
});
