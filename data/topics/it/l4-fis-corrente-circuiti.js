TOPIC('it', {
  id: "l4-fis-corrente-circuiti",
  title: "Corrente elettrica e circuiti",
  intro: "Ogni volta che accendi una luce, ricarichi il telefono o scaldi l'acqua per il tè, milioni di miliardi di cariche si mettono in movimento ordinato dentro un filo: è la <b>corrente elettrica</b>. Dopo l'elettrostatica, cariche ferme, passiamo alle cariche in moto. Vedremo come si definisce la corrente, che cosa dice la <b>legge di Ohm</b>, come si calcolano reti di <b>resistenze in serie e in parallelo</b>, come le <b>leggi di Kirchhoff</b> permettono di analizzare qualunque circuito e perché i fili si scaldano (<b>effetto Joule</b>), con le conseguenze pratiche su bollette e sicurezza.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "La corrente elettrica",
      html: `<p>Una <b>corrente elettrica</b> è un movimento ordinato di cariche. Si definisce <b>intensità di corrente</b> la carica che attraversa la sezione di un conduttore nell'unità di tempo:</p>
<p style="text-align:center"><b>i = ΔQ / Δt</b> &nbsp; (unità: <b>ampere</b>, 1 A = 1 C/s)</p>
<p>L'ampere è una delle sette unità fondamentali del SI; il nome onora <b>André-Marie Ampère</b>. Una corrente di 1 A corrisponde al passaggio di circa 6,24·10<sup>18</sup> elettroni al secondo.</p>
<p><b>Il verso convenzionale</b> della corrente è quello in cui si muoverebbero le cariche <b>positive</b>, cioè dal polo positivo al negativo del generatore all'esterno. Nei metalli si muovono in realtà gli <b>elettroni</b> in verso opposto: la convenzione risale a Franklin, prima della scoperta dell'elettrone, ed è rimasta perché le leggi non cambiano.</p>
<p><b>Quanto vanno veloci gli elettroni?</b> Molto più lentamente di quanto si pensi. La <b>velocità di deriva</b> v = i/(n·S·e), con n il numero di elettroni liberi per m³ (nel rame ≈ 8,5·10<sup>28</sup>), S la sezione e e la carica elementare, per 1 A in un filo di rame di sezione 1 mm² vale v = 1/(8,5·10<sup>28</sup> × 10<sup>-6</sup> × 1,6·10<sup>-19</sup>) ≈ 7·10<sup>-5</sup> m/s, cioè <b>meno di un decimo di millimetro al secondo</b>. Perché la lampadina si accende subito? Perché il <b>campo elettrico</b> si propaga lungo il filo a velocità vicina a quella della luce e mette in moto tutti gli elettroni quasi contemporaneamente: come l'acqua che esce subito dal rubinetto quando il tubo è già pieno.</p>
<p>Perché ci sia corrente servono un <b>circuito chiuso</b> e un <b>generatore</b>, dispositivo che mantiene una differenza di potenziale. La pila inventata da <b>Alessandro Volta</b> nel 1800 (dischi di zinco e argento o rame separati da panni imbevuti di acqua salata o acido) fu il primo generatore a corrente continua. Il lavoro per unità di carica che il generatore compie per spingere le cariche dal polo negativo al positivo si chiama <b>forza elettromotrice (f.e.m.) ε</b> ed è misurato in volt.</p>`
    },
    {
      type: "text",
      title: "La prima legge di Ohm e la resistenza",
      html: `<p>Nel 1827 <b>Georg Simon Ohm</b> trovò sperimentalmente che, per i conduttori metallici a temperatura costante, la corrente è proporzionale alla differenza di potenziale applicata:</p>
<p style="text-align:center"><b>ΔV = R · i</b> &nbsp; (<b>prima legge di Ohm</b>)</p>
<p>La costante R è la <b>resistenza</b> del conduttore, misurata in <b>ohm (Ω)</b>: 1 Ω = 1 V/A. Un conduttore che obbedisce a questa legge (grafico V-i rettilineo) si dice <b>ohmico</b>; molti componenti non lo sono: una lampada a filamento (la resistenza cresce con la temperatura), i diodi, i semiconduttori. Quindi la legge di Ohm non è una legge universale, ma una buona proprietà dei metalli.</p>
<p><b>Seconda legge di Ohm.</b> La resistenza di un filo omogeneo dipende dalla geometria e dal materiale:</p>
<p style="text-align:center"><b>R = ρ · l / S</b></p>
<p>con l la lunghezza, S la sezione e <b>ρ la resistività</b> (Ω·m), caratteristica del materiale: rame ≈ 1,7·10<sup>-8</sup> Ω·m, alluminio ≈ 2,8·10<sup>-8</sup>, ferro ≈ 10<sup>-7</sup>, nichel-cromo (stufe, tostapane) ≈ 1,1·10<sup>-6</sup>; i buoni isolanti hanno ρ superiori a 10<sup>10</sup> Ω·m. Un filo più lungo oppone più resistenza (più urti), uno più grosso meno (più vie di passaggio): come un tubo dell'acqua.</p>
<p><b>Temperatura.</b> Nei metalli ρ cresce con la temperatura: R = R<sub>0</sub>·(1 + α·ΔT), con α ≈ 4·10<sup>-3</sup> K<sup>-1</sup> per il rame. Alcuni materiali, sotto una temperatura critica, hanno resistenza nulla: i <b>superconduttori</b>, scoperti da <b>Heike Kamerlingh Onnes</b> nel 1911 (mercurio a 4,2 K); oggi si usano nei magneti delle risonanze magnetiche e degli acceleratori.</p>`
    },
    {
      type: "example",
      title: "Un cavo e una lampadina",
      html: `<p><b>Filo di rame.</b> Un cavo di rame lungo 10 m con sezione 1,5 mm² ha resistenza R = ρl/S = 1,7·10<sup>-8</sup> × 10/(1,5·10<sup>-6</sup>) ≈ <b>0,11 Ω</b>. Se ci passano 10 A, la caduta di tensione è ΔV = R·i ≈ 1,1 V e la potenza dissipata ≈ 11 W.</p>
<p><b>Lampadina.</b> Una lampadina collegata a una tensione di 230 V è attraversata da 0,26 A: la sua resistenza (a caldo) è R = 230/0,26 ≈ 880 Ω. A freddo il filamento di tungsteno ha una resistenza molto minore (circa dieci volte): per questo le lampade a incandescenza si bruciano più spesso proprio all'accensione.</p>
<p><b>Resistenza del corpo.</b> La pelle asciutta ha centinaia di kΩ, quella bagnata solo qualche kΩ: con la stessa tensione la corrente è molto maggiore. Correnti superiori a circa 30 mA attraverso il torace possono essere pericolose.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: corrente e Ohm",
      questions: [
        { type: "num", q: "Un filo è attraversato da 3 A per 20 s. Quanta carica passa (in C)?", answer: 60, tol: 0.1, unit: "C", explain: "ΔQ = i·Δt = 3 × 20 = 60 C." },
        { type: "num", q: "Un resistore da 50 Ω è sottoposto a 12 V. Quanta corrente lo attraversa (in A)?", answer: 0.24, tol: 0.005, unit: "A", explain: "i = V/R = 12/50 = 0,24 A." },
        { type: "mc", q: "Se il filo di un conduttore si dimezza in sezione (stessa lunghezza e materiale), la resistenza:", options: ["si dimezza", "raddoppia", "quadruplica", "non cambia"], answer: 1, explain: "R = ρl/S: con S dimezzata R raddoppia." }
      ]
    },
    {
      type: "text",
      title: "Resistori in serie e in parallelo",
      html: `<p>Un circuito semplice è formato da un generatore, dei fili e dei <b>resistori</b>. I resistori si collegano in due modi fondamentali.</p>
<p><b>In serie</b>: uno dopo l'altro, sullo stesso ramo. La <b>corrente è la stessa</b> in tutti (non ha dove andare), mentre la tensione si <b>ripartisce</b>: ΔV = ΔV<sub>1</sub> + ΔV<sub>2</sub> + … Perciò</p>
<p style="text-align:center"><b>R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + …</b></p>
<p><b>In parallelo</b>: i capi sono collegati agli stessi due nodi. La <b>tensione è la stessa</b> su tutti; la corrente totale si <b>divide</b>: i = i<sub>1</sub> + i<sub>2</sub> + … Perciò</p>
<p style="text-align:center"><b>1/R<sub>eq</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + …</b> &nbsp; (due resistori: R<sub>eq</sub> = R<sub>1</sub>R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub>))</p>
<p>La resistenza equivalente in parallelo è sempre <b>minore della più piccola</b>: aggiungere un percorso apre una nuova via alle cariche. (Sono le regole inverse di quelle dei condensatori.)</p>
<p><b>Nella vita quotidiana.</b> Le prese e le lampade di casa sono in <b>parallelo</b>: ciascun apparecchio riceve i 230 V e funziona anche se un altro è spento. Le vecchie luci natalizie erano in serie: se un lampadina si bruciava, si spegneva tutta la catena. Gli strumenti di misura: l'<b>amperometro</b> (misura la corrente) si inserisce <b>in serie</b> e ha resistenza piccolissima; il <b>voltmetro</b> (misura la d.d.p.) si collega <b>in parallelo</b> ed ha resistenza altissima, per non disturbare il circuito.</p>`
    },
    {
      type: "svg",
      title: "Serie e parallelo in un circuito",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<g font-family="sans-serif" stroke="#1e293b" stroke-width="3" fill="none">
<path d="M60 70 L 60 125 M60 175 L 60 230 L 540 230 L 540 70 L 480 70"/>
<line x1="35" y1="125" x2="85" y2="125"/>
<line x1="45" y1="140" x2="75" y2="140" stroke-width="6"/>
<line x1="45" y1="160" x2="75" y2="160" stroke-width="3"/>
<path d="M60 160 L 60 175"/>
<path d="M60 70 L 150 70"/>
<polyline points="150,70 160,50 180,90 200,50 220,90 240,50 250,70"/>
<path d="M250 70 L 330 70 L 330 70"/>
<path d="M330 70 L 360 70 L 360 40 L 440 40 M360 70 L 360 110 L 440 110 M360 70 L 360 70"/>
<polyline points="360,40 370,25 380,55 390,25 400,55 410,25 420,40 440,40"/>
<polyline points="360,110 370,95 380,125 390,95 400,125 410,95 420,110 440,110"/>
<path d="M440 40 L 470 40 L 470 110 L 440 110 M470 70 L 480 70"/>
<path d="M360 40 L 360 110"/>
<text x="200" y="30" font-size="16" fill="#9a3412" stroke="none" font-weight="bold">R₁ = 4 Ω</text>
<text x="400" y="15" font-size="16" fill="#1d4ed8" stroke="none" font-weight="bold">R₂ = 6 Ω</text>
<text x="400" y="148" font-size="16" fill="#15803d" stroke="none" font-weight="bold">R₃ = 3 Ω</text>
<text x="100" y="150" font-size="16" fill="#b91c1c" stroke="none" font-weight="bold">12 V</text>
<text x="300" y="262" font-size="15" fill="#334155" stroke="none" text-anchor="middle">R₂ e R₃ in parallelo (2 Ω), poi in serie con R₁: R_eq = 4 + 2 = 6 Ω; i = 2 A</text>
</g>
</svg>`,
      caption: "R₁ è in serie con il blocco formato da R₂ e R₃ in parallelo. Si semplifica il circuito un passo alla volta: prima i paralleli, poi le serie."
    },
    {
      type: "example",
      title: "Risolvere una rete",
      html: `<p>Riprendiamo il circuito del disegno: R<sub>1</sub> = 4 Ω in serie con R<sub>2</sub> = 6 Ω e R<sub>3</sub> = 3 Ω in parallelo, alimentato da 12 V.</p>
<ol>
<li>Parallelo: R<sub>23</sub> = (6 × 3)/(6 + 3) = <b>2 Ω</b>.</li>
<li>Serie: R<sub>eq</sub> = 4 + 2 = <b>6 Ω</b>.</li>
<li>Corrente totale: i = 12/6 = <b>2 A</b>, che attraversa R<sub>1</sub>.</li>
<li>Tensioni: su R<sub>1</sub> ΔV<sub>1</sub> = 4 × 2 = 8 V; sul parallelo ΔV<sub>23</sub> = 2 × 2 = 4 V (somma 12 V ✓).</li>
<li>Correnti nei rami: i<sub>2</sub> = 4/6 ≈ 0,67 A, i<sub>3</sub> = 4/3 ≈ 1,33 A: la somma è 2 A ✓. Il resistore più piccolo prende più corrente.</li>
</ol>
<p><b>Resistenza interna.</b> Un generatore reale ha una piccola resistenza interna r: la tensione ai morsetti è ΔV = ε − r·i. Una batteria con ε = 12 V e r = 0,5 Ω collegata a un carico da 5,5 Ω fa circolare i = 12/(0,5 + 5,5) = 2 A e fornisce ai morsetti 12 − 0,5 × 2 = <b>11 V</b>. In corto circuito (R ≈ 0) la corrente sarebbe 12/0,5 = 24 A.</p>`
    },
    {
      type: "text",
      title: "Le leggi di Kirchhoff",
      html: `<p>Non tutti i circuiti si riducono a serie e parallelo. <b>Gustav Kirchhoff</b> formulò nel 1845 due leggi che permettono di risolvere qualunque rete e che esprimono due principi generali di conservazione.</p>
<ul>
<li><b>Legge dei nodi (prima legge).</b> In un <b>nodo</b> (punto in cui convergono tre o più fili) la somma delle correnti entranti è uguale alla somma delle uscenti: <b>Σ i = 0</b> (con segni). È la <b>conservazione della carica</b>: in un nodo la carica non si accumula.</li>
<li><b>Legge delle maglie (seconda legge).</b> In una <b>maglia</b> (percorso chiuso della rete) la somma algebrica delle variazioni di potenziale è nulla: <b>Σ ΔV = 0</b>, cioè la somma delle f.e.m. è uguale alla somma delle cadute R·i. È la <b>conservazione dell'energia</b> (campo elettrico conservativo): tornando al punto di partenza il potenziale deve tornare uguale.</li>
</ul>
<p><b>Metodo pratico.</b> (1) Assegna a ogni ramo una corrente con un verso arbitrario; (2) scrivi un'equazione per ciascun nodo indipendente (se i nodi sono N, N − 1); (3) scrivi un'equazione per ogni maglia indipendente, percorrendola in un verso e prendendo ΔV = +ε se attraversi la batteria dal − al +, ΔV = −R·i se attraversi un resistore nel verso della corrente; (4) risolvi il sistema. Se una corrente esce negativa, il suo verso reale è opposto a quello scelto.</p>
<p><b>Esempio.</b> Due batterie ε<sub>1</sub> = 10 V ed ε<sub>2</sub> = 4 V (stesso verso) hanno rispettivamente R<sub>1</sub> = 2 Ω e R<sub>2</sub> = 1 Ω in serie, e sono collegate in parallelo a un carico R = 3 Ω. Con i<sub>1</sub>, i<sub>2</sub> uscenti dalle batterie e i = i<sub>1</sub> + i<sub>2</sub> nel carico: maglia 1: 10 − 2i<sub>1</sub> − 3(i<sub>1</sub> + i<sub>2</sub>) = 0; maglia 2: 4 − 1·i<sub>2</sub> − 3(i<sub>1</sub> + i<sub>2</sub>) = 0. Dalla prima 5i<sub>1</sub> + 3i<sub>2</sub> = 10; dalla seconda 3i<sub>1</sub> + 4i<sub>2</sub> = 4. Risolvendo: i<sub>1</sub> = 28/11 ≈ 2,55 A, i<sub>2</sub> = −10/11 ≈ −0,91 A: la seconda batteria, più debole, viene <b>ricaricata</b> dalla prima. La corrente nel carico è 18/11 ≈ 1,64 A.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: serie, parallelo e Kirchhoff",
      questions: [
        { type: "num", q: "Tre resistori da 10 Ω sono in parallelo. Qual è la resistenza equivalente (in Ω)?", answer: 3.33, tol: 0.05, unit: "Ω", explain: "1/R = 3/10 ⟹ R = 10/3 ≈ 3,33 Ω." },
        { type: "num", q: "In un nodo entrano 5 A e 2 A; esce un solo filo. Quanta corrente esce (in A)?", answer: 7, tol: 0.01, unit: "A", explain: "Prima legge di Kirchhoff: entranti = uscenti = 7 A." },
        { type: "tf", q: "In una maglia la somma algebrica delle variazioni di potenziale è nulla.", answer: true, explain: "È la seconda legge di Kirchhoff: conservazione dell'energia in un campo conservativo." }
      ]
    },
    {
      type: "text",
      title: "Potenza ed effetto Joule",
      html: `<p>Quando una carica Δq attraversa una d.d.p. ΔV, il campo compie il lavoro ΔV·Δq. La <b>potenza</b> elettrica, cioè il lavoro nell'unità di tempo, è</p>
<p style="text-align:center"><b>P = ΔV · i</b> &nbsp; (watt, 1 W = 1 V·A)</p>
<p>Per un resistore, usando la legge di Ohm: <b>P = R·i² = ΔV²/R</b>. Questa potenza viene dissipata sotto forma di calore: è l'<b>effetto Joule</b>, studiato da <b>James Prescott Joule</b> intorno al 1840-41. Gli elettroni accelerati dal campo urtano gli ioni del reticolo e cedono loro energia, che si trasforma in agitazione termica. In un tempo t l'energia dissipata è <b>Q = R·i²·t = P·t</b>.</p>
<p>L'effetto Joule è <b>utile</b> in stufe, bollitori, ferri da stiro, lampadine a incandescenza e fusibili; è <b>dannoso</b> nelle linee di trasmissione e nei dispositivi elettronici (per questo l'energia si trasporta ad alta tensione: a parità di potenza P = ΔV·i, una tensione 100 volte maggiore significa una corrente 100 volte minore e perdite R·i² diecimila volte minori).</p>
<p><b>Bollette.</b> L'energia si fattura in <b>kilowattora</b>: 1 kWh = 1000 W × 3600 s = <b>3,6·10<sup>6</sup> J</b>. Un asciugacapelli da 1800 W acceso 10 minuti consuma 1,8 kW × (1/6) h = 0,30 kWh; a 0,25 €/kWh costa 7,5 centesimi.</p>
<p><b>Sicurezza.</b> Un cavo sottodimensionato per la corrente richiesta si scalda troppo e può incendiarsi. Per questo gli impianti hanno <b>interruttori magnetotermici</b> (o fusibili) che interrompono il circuito in caso di sovraccarico o corto circuito, e <b>interruttori differenziali</b> (il «salvavita») che scattano se una parte della corrente passa verso terra, per esempio attraverso una persona. Gli apparecchi con involucro metallico sono collegati alla <b>messa a terra</b>.</p>`
    },
    {
      type: "example",
      title: "Il bollitore",
      html: `<p>Un bollitore da <b>2000 W</b> a 230 V assorbe i = P/ΔV = 2000/230 ≈ <b>8,7 A</b> e ha resistenza R = ΔV²/P = 230²/2000 ≈ <b>26 Ω</b>.</p>
<p>Per scaldare 1,0 L d'acqua (1,0 kg) da 20 °C a 100 °C servono Q = m·c·ΔT = 1,0 × 4186 × 80 ≈ 3,35·10<sup>5</sup> J (c = 4186 J/(kg·K)). Con 2000 W il tempo ideale è t = 3,35·10<sup>5</sup>/2000 ≈ <b>168 s ≈ 2,8 minuti</b>; nella realtà un po' di più, per le perdite di calore. L'energia consumata è 3,35·10<sup>5</sup> J ≈ 0,093 kWh, circa 2,3 centesimi.</p>
<p><b>Una presa multipla.</b> Collegare in parallelo apparecchi diversi alla stessa linea da 16 A (3680 W a 230 V): il bollitore (2000 W), un forno (1500 W) e un ferro da stiro (1000 W) assorbono in totale 4500 W &gt; 3680 W: l'interruttore scatta. Le correnti sommano: 8,7 + 6,5 + 4,3 ≈ 19,5 A.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i circuiti",
      intro: "I circuiti elettrici sono invisibili: ecco alcune analogie che funzionano.",
      tabs: [
        {
          label: "💧 L'analogia idraulica",
          html: "<p>Un circuito è come un <b>impianto idraulico chiuso</b>. Il generatore è la <b>pompa</b>; la differenza di potenziale è la <b>differenza di pressione</b>; la corrente è la <b>portata</b> (litri al secondo); un resistore è un <b>restringimento</b> del tubo. Più la pompa spinge (V grande) e meno il tubo è stretto (R piccolo), più acqua passa: i = V/R. Tubi in serie: stessa portata, le cadute di pressione si sommano. Tubi in parallelo: stessa pressione ai capi, le portate si sommano e passa più acqua. I nodi di Kirchhoff sono le diramazioni: l'acqua che entra è quella che esce (non si accumula). Il condensatore è un serbatoio elastico.</p>"
        },
        {
          label: "🎢 Le montagne russe",
          html: "<p>Le cariche che percorrono un circuito si comportano come i carrelli di un ottovolante a nastro continuo. Il generatore è il <b>motore che li porta in cima</b> (aumenta l'energia potenziale); in discesa i resistori «frenano» il carrello dissipando energia in calore (effetto Joule). Per completare il giro si torna alla quota di partenza: la <b>legge delle maglie</b> dice proprio che salite e discese si compensano. In ogni nodo, come in uno scambio ferroviario, i carrelli che entrano sono quelli che escono.</p>"
        },
        {
          label: "🗂️ Serie o parallelo?",
          html: "<p>Classifica ciascun collegamento.</p>",
          widget: "classify",
          options: { groups: ["In serie", "In parallelo"], items: [
            ["📏 Amperometro nel circuito", 0],
            ["🎄 Vecchie luci natalizie a catena", 0],
            ["🔌 Prese di una casa", 1],
            ["🌡️ Voltmetro", 1],
            ["🚦 Fusibile e carico che protegge", 0],
            ["💡 Lampadine di un lampadario a più luci", 1]
          ] }
        },
        {
          label: "🔗 Abbina grandezza e formula",
          html: "<p>Collega ciascuna legge alla sua formula.</p>",
          widget: "match",
          options: { pairs: [
            ["Intensità di corrente", "i = ΔQ/Δt"],
            ["Prima legge di Ohm", "ΔV = R·i"],
            ["Seconda legge di Ohm", "R = ρ·l/S"],
            ["Resistori in serie", "R_eq = R₁ + R₂"],
            ["Resistori in parallelo", "1/R_eq = 1/R₁ + 1/R₂"],
            ["Potenza elettrica", "P = ΔV·i"],
            ["Legge dei nodi", "Σ i = 0"]
          ] }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Galvani, Volta e la rana",
      html: `<p>Verso il 1780 <b>Luigi Galvani</b>, a Bologna, osservò che le zampe di una rana morta si contraevano se toccate con due metalli diversi o da scariche elettriche: pensò a una «elettricità animale». <b>Alessandro Volta</b>, a Pavia, ripeté gli esperimenti e sostenne che la causa era il contatto tra metalli diversi, in presenza di un umore. La disputa ebbe un esito fecondo: nel 1800 Volta costruì la <b>pila</b>, una colonna di dischi di metalli diversi separati da panni inumiditi, che produceva una corrente continua e stabile. Fu il primo generatore: da essa nacquero l'elettrochimica, l'elettromagnetismo di Ørsted e Ampère (1820) e, di fatto, la tecnologia elettrica. Entrambi, in parte, avevano ragione: nel corpo degli animali i nervi trasmettono segnali elettrici.</p>`
    },
    {
      type: "curiosity",
      title: "Perché le linee elettriche sono ad alta tensione",
      html: `<p>Per portare 1 MW a una città con un cavo di 10 Ω, se si trasmettesse a 1000 V servirebbe i = 1000 A e si perderebbe P = R·i² = 10 × 10<sup>6</sup> = 10 MW: più di quanto trasportato, impossibile! A 100 000 V basta i = 10 A e la perdita è 10 × 100 = 1 kW, appena lo 0,1 %. Ecco perché le linee a lunga distanza usano tensioni di 132-400 kV (in Italia anche 380 kV) e solo vicino alle case dei trasformatori riportano la tensione a 230 V. È l'effetto Joule che guida tutta l'architettura della rete elettrica, ed è il motivo per cui la corrente alternata, trasformabile facilmente, vinse nel 1880-90 la «guerra delle correnti» tra Edison e Tesla/Westinghouse.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>i = ΔQ/Δt</b> (A); verso convenzionale = verso delle cariche positive.</li>
<li><b>ΔV = R·i</b> (Ohm); <b>R = ρ·l/S</b>.</li>
<li>Serie: stessa i, <b>R<sub>eq</sub> = ΣR</b>. Parallelo: stessa ΔV, <b>1/R<sub>eq</sub> = Σ1/R</b>.</li>
<li>Kirchhoff: nodi <b>Σi = 0</b> (carica), maglie <b>ΣΔV = 0</b> (energia).</li>
<li><b>P = ΔV·i = R·i² = ΔV²/R</b>; effetto Joule <b>Q = R·i²·t</b>; 1 kWh = 3,6·10<sup>6</sup> J.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa di corrente e circuiti",
      nodes: [
        { id: "corrente", label: "Corrente i = ΔQ/Δt", x: 50, y: 8, color: "#2563eb", html: "Moto ordinato di cariche in un circuito chiuso, sostenuto da un generatore.", why: "Il generatore (Volta, 1800) mantiene una d.d.p. che produce un campo elettrico nel conduttore; il campo mette in moto le cariche libere, con velocità di deriva molto piccola." },
        { id: "ohm", label: "Leggi di Ohm", x: 15, y: 38, color: "#16a34a", html: "ΔV = R·i; R = ρl/S.", why: "Ohm (1827) le ricavò sperimentalmente. Si spiegano con il modello di Drude: gli elettroni accelerano tra un urto e l'altro con gli ioni, raggiungendo una velocità media proporzionale al campo." },
        { id: "reti", label: "Serie e parallelo", x: 85, y: 38, color: "#f59e0b", html: "Serie: R si somma. Parallelo: si somma 1/R.", why: "In serie la corrente è comune e le cadute di tensione si sommano; in parallelo la tensione è comune e le correnti si sommano: da queste due condizioni seguono le formule." },
        { id: "kirchhoff", label: "Leggi di Kirchhoff", x: 50, y: 62, color: "#8b5cf6", html: "Nodi: Σi = 0. Maglie: ΣΔV = 0.", why: "Esprimono la conservazione della carica (nei nodi non si accumula carica) e dell'energia (il campo elettrostatico è conservativo, quindi il lavoro su un giro completo è nullo)." },
        { id: "joule", label: "Potenza ed effetto Joule", x: 20, y: 88, color: "#ef4444", html: "P = ΔV·i = R·i²; Q = P·t.", why: "Gli elettroni accelerati dal campo urtano il reticolo cristallino e cedono energia, che diventa calore: è il prezzo da pagare per far scorrere la corrente nei conduttori reali." },
        { id: "sicurezza", label: "Sicurezza e rete elettrica", x: 80, y: 88, color: "#64748b", html: "Fusibili, differenziali, messa a terra; trasmissione ad alta tensione.", why: "Poiché le perdite sono R·i², a parità di potenza conviene alzare la tensione e ridurre la corrente; nelle case si limitano le correnti per evitare surriscaldamenti e incendi." }
      ],
      edges: [["corrente", "ohm", "regolata da"], ["ohm", "reti", "estesa a"], ["reti", "kirchhoff", "generalizzate da"], ["ohm", "joule", "implica"], ["joule", "sicurezza", "motiva"]]
    }
  ],
  glossary: [
    { t: "Corrente elettrica", d: "Moto ordinato di cariche; intensità i = ΔQ/Δt, in ampere." },
    { t: "Forza elettromotrice (f.e.m.)", d: "Lavoro per unità di carica compiuto dal generatore; si misura in volt." },
    { t: "Resistenza", d: "R = ΔV/i, in ohm: misura quanto un conduttore si oppone alla corrente." },
    { t: "Resistività", d: "Proprietà del materiale: R = ρ·l/S, in Ω·m." },
    { t: "Conduttore ohmico", d: "Conduttore per cui la corrente è proporzionale alla tensione applicata." },
    { t: "Nodo", d: "Punto di un circuito in cui convergono tre o più conduttori." },
    { t: "Maglia", d: "Percorso chiuso all'interno di una rete di circuiti." },
    { t: "Effetto Joule", d: "Trasformazione dell'energia elettrica in calore in un resistore: P = R·i²." },
    { t: "Kilowattora", d: "Unità di energia: 1 kWh = 3,6·10⁶ J." },
    { t: "Superconduttore", d: "Materiale che sotto una temperatura critica ha resistenza nulla." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Una corrente di 0,5 A attraversa un filo per 2 minuti. Quanta carica passa (in C)?", answer: 60, tol: 0.1, unit: "C", explain: "ΔQ = i·Δt = 0,5 × 120 = 60 C." },
      { type: "tf", q: "Gli elettroni in un filo metallico si spostano nel verso convenzionale della corrente.", answer: false, explain: "Si muovono in verso opposto al verso convenzionale, che è quello delle cariche positive." },
      { type: "num", q: "Un filo di rame (ρ = 1,7·10⁻⁸ Ω·m) lungo 100 m ha sezione 2,5 mm². Quanto vale la resistenza (in Ω)?", answer: 0.68, tol: 0.01, unit: "Ω", explain: "R = ρl/S = 1,7·10⁻⁸ × 100/(2,5·10⁻⁶) = 0,68 Ω." },
      { type: "mc", q: "Due resistori da 12 Ω in parallelo hanno resistenza equivalente:", options: ["24 Ω", "12 Ω", "6 Ω", "3 Ω"], answer: 2, explain: "R = (12 × 12)/(12 + 12) = 6 Ω." },
      { type: "num", q: "Un resistore da 20 Ω è in serie con uno da 30 Ω, alimentati da 25 V. Quanta corrente circola (in A)?", answer: 0.5, tol: 0.01, unit: "A", explain: "R_eq = 50 Ω; i = 25/50 = 0,5 A." },
      { type: "mc", q: "La legge dei nodi di Kirchhoff esprime:", options: ["la conservazione dell'energia", "la conservazione della carica", "la legge di Ohm", "l'effetto Joule"], answer: 1, explain: "In un nodo la carica non si accumula: Σ i = 0." },
      { type: "num", q: "Un fornello da 1200 W è acceso a 230 V. Quanta corrente assorbe (in A)?", answer: 5.2, tol: 0.1, unit: "A", explain: "i = P/ΔV = 1200/230 ≈ 5,2 A." },
      { type: "num", q: "Un apparecchio da 500 W funziona 4 ore. Quanti kWh consuma?", answer: 2, tol: 0.01, unit: "kWh", explain: "E = P·t = 0,5 kW × 4 h = 2 kWh." },
      { type: "tf", q: "Quando si aggiunge un resistore in parallelo ad altri, la resistenza equivalente aumenta.", answer: false, explain: "In parallelo la resistenza equivalente diminuisce: si aggiunge un nuovo cammino per la corrente." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Galvani: la rana", "Volta: la pila", "Ohm: la legge V = R·i", "Kirchhoff: le leggi dei circuiti"], explain: "Circa 1780 (Galvani), 1800 (Volta), 1827 (Ohm), 1845 (Kirchhoff)." }
    ]
  }
});
