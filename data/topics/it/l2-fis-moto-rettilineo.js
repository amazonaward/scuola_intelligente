TOPIC('it', {
  id: "l2-fis-moto-rettilineo",
  title: "Il moto rettilineo uniforme",
  intro: "Descrivere come si muove un corpo è il primo compito della fisica, e prende il nome di <b>cinematica</b>. Prima di chiederci <i>perché</i> qualcosa si muove (la dinamica), impariamo a descrivere <i>come</i>: dove si trova, quanto va veloce, dove sarà tra un istante. Il caso più semplice è il <b>moto rettilineo uniforme</b>: una traiettoria dritta e una velocità che non cambia mai. Con poche idee (posizione, velocità, legge oraria e grafici) potrai prevedere dove si incontreranno due treni o in quanto tempo arriverai a destinazione.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Sistema di riferimento, posizione e spostamento",
      html: `<p>Dire "il treno è fermo" o "si muove" non basta: <b>rispetto a che cosa</b>? Per un passeggero seduto il suo vicino è fermo; per chi sta in stazione il vicino viaggia a 150 km/h. Il moto è sempre <b>relativo a un sistema di riferimento</b>: un corpo di riferimento e degli assi coordinati con un'origine.</p>
<p>Nel moto rettilineo usiamo un unico asse (retta orientata) con un'origine O e un verso positivo. La <b>posizione</b> di un punto è la sua coordinata <b>s</b> (o x) su questo asse, con segno: positivo da un lato dell'origine, negativo dall'altro. Si misura in <b>metri (m)</b>.</p>
<ul>
<li>La <b>traiettoria</b> è la linea descritta dal punto che si muove. Se è una retta il moto è <b>rettilineo</b>.</li>
<li>Lo <b>spostamento</b> è la variazione di posizione: <b>Δs = s₂ − s₁</b>. Può essere positivo, negativo o nullo. Non coincide con lo <b>spazio percorso</b> (sempre positivo): se vai a scuola e torni a casa, lo spazio percorso è il doppio della distanza, ma lo spostamento è <b>zero</b>.</li>
<li>L'<b>intervallo di tempo</b> è Δt = t₂ − t₁, misurato in <b>secondi (s)</b>.</li>
</ul>
<p>Un corpo che si muove viene schematizzato come un <b>punto materiale</b> quando le sue dimensioni sono trascurabili rispetto agli spazi percorsi (un'auto che va da Roma a Milano).</p>`
    },
    {
      type: "text",
      title: "La velocità media e istantanea",
      html: `<p>La <b>velocità media</b> è il rapporto tra lo spostamento e l'intervallo di tempo impiegato:</p>
<p style="text-align:center"><b>v<sub>m</sub> = Δs / Δt = (s₂ − s₁) / (t₂ − t₁)</b></p>
<p>L'unità di misura nel Sistema Internazionale è il <b>metro al secondo (m/s)</b>. Nella vita quotidiana si usa il <b>km/h</b>. La conversione è utile e va ricordata:</p>
<p style="text-align:center"><b>1 m/s = 3,6 km/h</b> &nbsp;&nbsp; (per passare da km/h a m/s si <b>divide per 3,6</b>; da m/s a km/h si moltiplica)</p>
<p>Perché 3,6? 1 km = 1000 m e 1 h = 3600 s, quindi 1 km/h = 1000/3600 m/s = 1/3,6 m/s. Per esempio 90 km/h = 25 m/s; 10 m/s = 36 km/h.</p>
<p>Un contachilometri dell'auto indica la <b>velocità istantanea</b>: la velocità in un dato istante, cioè la velocità media calcolata su un intervallo di tempo così breve da diventare quasi un punto. Nel moto rettilineo uniforme la velocità istantanea è sempre uguale alla velocità media.</p>
<p>La velocità ha un <b>segno</b> (nel moto rettilineo): positiva se il corpo si muove nel verso dell'asse, negativa se va nel verso opposto. Il segno indica il verso del moto, non "quanto" va veloce; il <b>modulo</b> (valore assoluto) si chiama anche rapidità.</p>`
    },
    {
      type: "remember",
      title: "Che cos'è il moto rettilineo uniforme",
      html: `<p>Un moto è <b>rettilineo uniforme</b> se la traiettoria è una <b>retta</b> e la <b>velocità è costante</b>: in intervalli di tempo uguali, il corpo percorre <b>spazi uguali</b>. Equivale a dire che il rapporto Δs / Δt è sempre lo stesso.</p>
<p>La <b>legge oraria</b> è la formula che dà la posizione a ogni istante:</p>
<p style="text-align:center"><b>s(t) = s₀ + v · t</b></p>
<p>dove s₀ è la posizione al tempo t = 0 (posizione iniziale), v la velocità (costante) e t il tempo trascorso. Se parte dall'origine, s₀ = 0 e s = v · t. Dalla stessa formula si ricavano <b>t = (s − s₀) / v</b> e <b>v = (s − s₀) / t</b>.</p>`
    },
    {
      type: "example",
      title: "Esempi: calcoli con la legge oraria",
      html: `<p><b>1. L'autovelox "tutor"</b>. Due portali sono a 10 km di distanza sullo stesso tratto di autostrada. Un'auto li attraversa a 5 minuti di distanza. Velocità media: 10 km / (5/60 h) = 10 / 0,0833 = <b>120 km/h</b>. Se il limite fosse 110 km/h, verrebbe multata anche se non ha mai superato quel limite sotto l'occhio di un solo autovelox: la velocità media non è mai nascosta.</p>
<p><b>2. In bicicletta</b>. Una bici viaggia a 18 km/h = 5 m/s. Parte alla posizione s₀ = 200 m. Dopo 40 s si trova in s = 200 + 5 · 40 = <b>400 m</b>. Per arrivare a 1000 m servono t = (1000 − 200) / 5 = 160 s.</p>
<p><b>3. Il suono e la luce</b>. Il suono viaggia nell'aria a circa 343 m/s (a 20 °C); la luce nel vuoto a <b>299 792 458 m/s</b>, circa 300 000 km/s. Dopo un lampo, se senti il tuono 6 s dopo, il fulmine è caduto a 343 · 6 ≈ 2 060 m, cioè circa 2 km (la luce arriva praticamente subito).</p>
<p><b>4. La media non è la media delle velocità</b>. Vai da A a B (120 km) a 60 km/h e torni a 40 km/h. Non è 50 km/h! Tempo di andata 120/60 = 2 h, di ritorno 120/40 = 3 h; lo spazio totale è 240 km in 5 h: la velocità media è 240 / 5 = <b>48 km/h</b> (più bassa perché hai passato più tempo alla velocità minore).</p>`
    },
    {
      type: "svg",
      title: "Il grafico spazio-tempo: una retta",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">s (m)</text>
<line x1="60" y1="250" x2="510" y2="50" stroke="#dc2626" stroke-width="4"/>
<line x1="60" y1="150" x2="510" y2="250" stroke="#2563eb" stroke-width="4"/>
<circle cx="210" cy="183" r="7" fill="#166534"/>
<text x="222" y="178" font-size="16" fill="#166534" font-weight="bold">incontro</text>
<text x="440" y="86" font-size="16" fill="#dc2626" font-weight="bold">A: s = 20 t</text>
<text x="280" y="222" font-size="16" fill="#2563eb" font-weight="bold">B: s = 100 − 10 t</text>
<text x="66" y="142" font-size="16" fill="#2563eb">s₀ = 100 m</text>
<line x1="60" y1="150" x2="60" y2="150" stroke="#2563eb"/>
<text x="352" y="146" font-size="16" fill="#1f2937">pendenza = velocità</text>
<text x="352" y="166" font-size="16" fill="#dc2626">(salita → v &gt; 0)</text>
<text x="352" y="270" font-size="16" fill="#2563eb">(discesa → v &lt; 0)</text>
</svg>`,
      caption: "Nel grafico spazio-tempo del moto uniforme la posizione è una retta: la sua pendenza è la velocità. La retta rossa sale (v = +20 m/s), quella blu scende (v = −10 m/s). Dove si incrociano, i due corpi sono nello stesso posto allo stesso istante."
    },
    {
      type: "text",
      title: "Leggere i grafici: s-t e v-t",
      html: `<p><b>Grafico spazio-tempo (s, t)</b>: nel moto rettilineo uniforme è una <b>retta</b>.</p>
<ul>
<li>L'<b>intercetta</b> con l'asse verticale è la posizione iniziale s₀.</li>
<li>La <b>pendenza</b> (inclinazione) è la velocità: Δs / Δt. Retta più ripida = velocità maggiore; retta orizzontale = corpo fermo; retta che scende = moto in verso opposto.</li>
</ul>
<p><b>Grafico velocità-tempo (v, t)</b>: è una <b>retta orizzontale</b> (la velocità non cambia). Qui la grandezza interessante è l'<b>area</b> sotto il grafico tra due istanti: è lo <b>spostamento</b> Δs = v · Δt (area di un rettangolo di base Δt e altezza v). Questa idea (area sotto il grafico = grandezza accumulata) tornerà con il moto accelerato e, più avanti, con l'integrale.</p>`
    },
    {
      type: "svg",
      title: "Il grafico velocità-tempo e l'area",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="100" width="320" height="150" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">v (m/s)</text>
<line x1="60" y1="100" x2="440" y2="100" stroke="#166534" stroke-width="5"/>
<text x="34" y="106" font-size="16" fill="#166534" font-weight="bold">15</text>
<text x="372" y="274" font-size="16" fill="#1f2937" font-weight="bold">4</text>
<text x="140" y="180" font-size="18" fill="#14532d" font-weight="bold">Area = v · Δt</text>
<text x="140" y="206" font-size="18" fill="#14532d" font-weight="bold">= 15 · 4 = 60 m</text>
<text x="400" y="130" font-size="16" fill="#1f2937">v costante:</text>
<text x="400" y="152" font-size="16" fill="#1f2937">retta orizzontale</text>
</svg>`,
      caption: "L'area del rettangolo sotto la retta v = 15 m/s tra 0 e 4 s vale 60: è proprio lo spostamento compiuto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: velocità e legge oraria",
      questions: [
        { type: "num", q: "Un'auto viaggia a 108 km/h. Quanto vale la sua velocità in m/s?", answer: 30, unit: "m/s", explain: "108 / 3,6 = 30 m/s." },
        { type: "num", q: "Un ciclista parte dall'origine e va a 6 m/s. Dopo quanti secondi ha percorso 150 m?", answer: 25, unit: "s", explain: "t = s / v = 150 / 6 = 25 s." },
        { type: "tf", q: "Nel grafico spazio-tempo del moto rettilineo uniforme, una retta più ripida indica una velocità maggiore.", answer: true, explain: "La pendenza della retta s-t è la velocità: più inclinata, più veloce." },
        { type: "mc", q: "Un corpo ha legge oraria s = 50 − 5t (in unità SI). Che cosa significa il segno negativo di −5?", options: ["Che il corpo si muove in verso opposto a quello positivo dell'asse", "Che il corpo è fermo", "Che il tempo scorre al contrario"], answer: 0, explain: "La velocità è v = −5 m/s: il corpo si muove nel verso negativo, avvicinandosi all'origine da s₀ = 50 m." }
      ]
    },
    {
      type: "text",
      title: "Quando due corpi si incontrano",
      html: `<p>Un classico problema di cinematica: <b>due mobili sulla stessa retta, partono da punti diversi, si incontrano quando hanno la stessa posizione allo stesso istante</b>. Procedura:</p>
<ol>
<li>Scegli un asse con origine e verso positivo.</li>
<li>Scrivi la legge oraria di <b>ciascun</b> corpo con le sue posizione iniziale e velocità (<b>con il segno!</b>): s<sub>A</sub> = s₀A + v<sub>A</sub> t e s<sub>B</sub> = s₀B + v<sub>B</sub> t.</li>
<li><b>Uguaglia</b> le due posizioni: s<sub>A</sub> = s<sub>B</sub>.</li>
<li>Risolvi l'equazione di primo grado nel tempo t; poi sostituisci t per trovare dove avviene l'incontro.</li>
</ol>
<p><b>Esempio</b>: due treni, A e B, sono su due stazioni distanti 300 km. Il treno A parte da una stazione (s = 0) verso l'altra alla velocità di 100 km/h; il treno B parte dall'altra stazione (s = 300 km) nello stesso istante verso A a 80 km/h. Leggi orarie: s<sub>A</sub> = 100 t; s<sub>B</sub> = 300 − 80 t. Si incontrano quando 100 t = 300 − 80 t, cioè 180 t = 300, <b>t = 1,67 h</b> (1 h 40 min). Posizione: s = 100 · 1,67 ≈ <b>167 km</b> dalla stazione di A.</p>
<p><b>Inseguimento</b>: se i due corpi vanno nello stesso verso, l'incontro avviene solo se quello dietro è più veloce. Un'auto a 30 m/s insegue un camion a 20 m/s che ha un vantaggio di 200 m: la velocità relativa è 10 m/s, quindi il tempo di raggiungimento è 200 / 10 = <b>20 s</b>, dopo che l'auto ha percorso 600 m.</p>`
    },
    {
      type: "example",
      title: "Esempio: il sorpasso in autostrada",
      html: `<p>Un'auto viaggia a 126 km/h (35 m/s) e si avvicina a un camion che va a 90 km/h (25 m/s). L'auto è 40 m dietro il camion e vuole sorpassarlo: deve arrivare 20 m davanti. Serve quindi recuperare 40 + 20 = 60 m (le lunghezze dei veicoli, per semplicità, si trascurano). La velocità relativa è 35 − 25 = 10 m/s, quindi il sorpasso dura 60 / 10 = <b>6 s</b>. In quei 6 secondi l'auto percorre 35 · 6 = <b>210 m</b>. Se in senso opposto arriva un'altra auto a 90 km/h (25 m/s), la distanza di avvicinamento è (35 + 25) · 6 = 360 m: serve una strada libera per almeno 570 m!</p>`
    },
    {
      type: "text",
      title: "Galileo e la relatività del moto",
      html: `<p>Nel <i>Dialogo sopra i due massimi sistemi del mondo</i> (1632), <b>Galileo Galilei</b> propose un celebre esperimento mentale: chiudetevi nella stiva di una grande nave con un po' di mosche, farfalle, un recipiente d'acqua con dei pesci, una bottiglia appesa che gocciola. Finché la nave si muove di <b>moto uniforme, senza oscillazioni</b>, non potrete capire, osservando quello che accade lì dentro, se la nave sta ferma o si muove. Le gocce cadono nello stesso punto, i pesci nuotano in ogni direzione, i salti hanno la stessa lunghezza.</p>
<p>È il <b>principio di relatività galileiana</b>: le leggi della fisica sono le stesse in tutti i sistemi di riferimento che si muovono di moto rettilineo uniforme l'uno rispetto all'altro (sistemi inerziali). Conseguenza: le <b>velocità si compongono per somma</b>. Se cammini a 1 m/s sul corridoio di un treno che va a 30 m/s, rispetto al binario la tua velocità è 31 m/s (o 29 m/s se cammini nel verso opposto). Albert Einstein, nel 1905, mostrerà che questa regola vale solo a basse velocità, ma per la vita di tutti i giorni è precisa.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Quanto va veloce Bolt",
      html: `<p>Il 16 agosto 2009 a Berlino <b>Usain Bolt</b> corse i 100 m in <b>9,58 s</b>, record del mondo ancora imbattuto. La sua velocità media fu 100 / 9,58 ≈ <b>10,44 m/s ≈ 37,6 km/h</b>. Nei tratti più veloci raggiunse circa 12,3 m/s (44 km/h). Non è moto uniforme: partì da fermo e accelerò: ne parliamo nella prossima lezione!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il Sole di 8 minuti fa",
      html: `<p>La luce impiega circa <b>8 minuti e 20 secondi</b> per percorrere i 150 milioni di km tra il Sole e la Terra: t = 1,496 × 10¹¹ m / 3 × 10⁸ m/s ≈ 499 s. Quando guardi il Sole lo vedi com'era più di 8 minuti fa: se si spegnesse ora, lo scopriremmo tra 8 minuti. Con la stessa idea, la luce di una stella a 4,2 anni luce (Proxima Centauri) ci mostra la stella com'era più di 4 anni fa: guardare lontano è guardare nel passato.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il moto uniforme",
      intro: "Il moto è facile da sentire ma difficile da descrivere: ecco tre modi di vederlo.",
      tabs: [
        {
          label: "🎞️ I fotogrammi (stroboscopico)",
          html: `<p>Immagina di fotografare un'auto ogni secondo, in volo sopra un nastro con una scala in metri. Se il moto è <b>uniforme</b>, tra una foto e la successiva l'auto avanza sempre dello stesso numero di metri. Una tabella:</p>
<table><tr><th>t (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>s (m)</th><td>5</td><td>15</td><td>25</td><td>35</td><td>45</td></tr><tr><th>Δs (m)</th><td></td><td>10</td><td>10</td><td>10</td><td>10</td></tr></table>
<p>Δs è sempre 10 m in ogni secondo: v = 10 m/s e la legge oraria è s = 5 + 10t. Quando la tabella ha incrementi costanti, il moto è uniforme; se gli incrementi crescono, il corpo accelera.</p>`
        },
        {
          label: "🔄 Conversione di unità",
          html: `<p>Il 3,6 si impara abbinando casi concreti. Abbina le velocità in km/h con quelle in m/s.</p>`,
          widget: "match",
          options: { pairs: [
            ["36 km/h", "10 m/s"],
            ["72 km/h", "20 m/s"],
            ["108 km/h", "30 m/s"],
            ["18 km/h", "5 m/s"],
            ["90 km/h", "25 m/s"],
            ["7,2 km/h", "2 m/s"]
          ] }
        },
        {
          label: "🚦 Il tempo di reazione",
          html: `<p>Il moto uniforme serve per capire un dato importante: un automobilista impiega circa <b>1 s</b> per reagire a un ostacolo prima di iniziare a frenare. A 130 km/h (36,1 m/s) in quel solo secondo l'auto percorre <b>36 metri</b> a velocità costante, prima ancora di toccare il freno. A 50 km/h (13,9 m/s) sono 14 metri. Per questo distrarsi con il telefono per soli 3 secondi a 90 km/h significa fare 75 m "alla cieca" (25 m/s × 3 s).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: il moto rettilineo uniforme",
      nodes: [
        { id: "rif", label: "Sistema di riferimento", x: 50, y: 6, color: "#6366f1", html: "Origine, asse e verso: servono per definire una posizione.", why: "Il moto è relativo: senza un riferimento 'fermo' o 'in moto' non hanno senso. Galileo lo capì per primo nel 1632, rispondendo a chi diceva che la Terra non potesse muoversi." },
        { id: "pos", label: "Posizione e spostamento", x: 18, y: 30, color: "#f59e0b", html: "s e Δs = s₂ − s₁.", why: "La posizione ha segno rispetto all'origine; lo spostamento è una differenza e dà una grandezza vettoriale (verso incluso)." },
        { id: "vel", label: "Velocità", x: 82, y: 30, color: "#16a34a", html: "v = Δs / Δt, in m/s (1 m/s = 3,6 km/h).", why: "È un rapporto tra spazio e tempo: la 'rapidità di variazione della posizione'. La definizione mostra perché la sua unità è m/s: dividere una lunghezza per un tempo." },
        { id: "mru", label: "Moto rettilineo uniforme", x: 50, y: 55, color: "#a855f7", html: "Traiettoria retta, velocità costante.", why: "Il caso più semplice e anche una buona approssimazione di molti moti reali. Per il principio d'inerzia (Galileo, Newton) un corpo non soggetto a forze si muove proprio così." },
        { id: "lo", label: "Legge oraria", x: 18, y: 82, color: "#ef4444", html: "s = s₀ + v t.", why: "Deriva dalla definizione di velocità costante: se Δs/Δt = v per ogni intervallo, allora s − s₀ = v t. È una funzione lineare del tempo." },
        { id: "gr", label: "Grafici s-t e v-t", x: 82, y: 82, color: "#0ea5e9", html: "s-t: retta con pendenza v; v-t: retta orizzontale con area Δs.", why: "I grafici cartesiani (idea di Descartes e Galileo) trasformano una formula in un'immagine: la pendenza misura la velocità e l'area lo spostamento. È il seme di derivata e integrale." },
        { id: "inc", label: "Incontro di due mobili", x: 50, y: 94, color: "#14b8a6", html: "Si uguagliano le due leggi orarie.", why: "Due corpi si incontrano quando hanno la stessa posizione allo stesso istante: nel grafico s-t, dove le due rette si intersecano." }
      ],
      edges: [
        ["rif", "pos", "definisce"],
        ["rif", "vel", "misura rispetto a"],
        ["pos", "mru", "variazione in"],
        ["vel", "mru", "costante in"],
        ["mru", "lo", "descritto da"],
        ["mru", "gr", "rappresentato da"],
        ["lo", "inc", "si usa per"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: grafici e incontri",
      questions: [
        { type: "num", q: "Un corpo ha legge oraria s = 10 + 4t (SI). Che posizione ha dopo 6 s?", answer: 34, unit: "m", explain: "s = 10 + 4 · 6 = 34 m." },
        { type: "num", q: "Due corpi hanno s_A = 5t e s_B = 60 − 7t (SI). Dopo quanti secondi si incontrano?", answer: 5, unit: "s", explain: "5t = 60 − 7t → 12t = 60 → t = 5 s." },
        { type: "tf", q: "In un grafico velocità-tempo del moto rettilineo uniforme, l'area sotto la retta rappresenta lo spostamento.", answer: true, explain: "Area = v · Δt = Δs." },
        { type: "mc", q: "Sul grafico spazio-tempo, una retta orizzontale significa…", options: ["Il corpo è fermo", "Il corpo ha velocità costante diversa da zero", "Il corpo accelera"], answer: 0, explain: "Se la posizione non cambia nel tempo, la velocità è zero: il corpo è fermo." }
      ]
    }
  ],
  glossary: [
    { t: "Cinematica", d: "Parte della fisica che descrive il moto senza occuparsi delle sue cause." },
    { t: "Sistema di riferimento", d: "Corpo di riferimento con origine e assi rispetto ai quali si descrive il moto." },
    { t: "Posizione", d: "Coordinata s di un punto sull'asse, con segno rispetto all'origine." },
    { t: "Spostamento", d: "Variazione di posizione Δs = s₂ − s₁." },
    { t: "Velocità media", d: "Rapporto tra spostamento e intervallo di tempo: vm = Δs/Δt." },
    { t: "Velocità istantanea", d: "Velocità in un dato istante: la media su un intervallo di tempo brevissimo." },
    { t: "Moto rettilineo uniforme", d: "Moto su una retta con velocità costante." },
    { t: "Legge oraria", d: "Formula che dà la posizione in funzione del tempo: s = s₀ + v·t nel moto uniforme." },
    { t: "Punto materiale", d: "Modello di corpo di dimensioni trascurabili rispetto agli spazi percorsi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Nel moto rettilineo uniforme…", options: ["La velocità è costante", "L'accelerazione è costante e diversa da zero", "La traiettoria è una curva"], answer: 0, explain: "La definizione: traiettoria rettilinea e velocità costante." },
      { type: "num", q: "Un treno percorre 270 km in 3 ore. Qual è la sua velocità media?", answer: 90, unit: "km/h", explain: "270 / 3 = 90 km/h." },
      { type: "num", q: "Converti 72 km/h in m/s.", answer: 20, unit: "m/s", explain: "72 / 3,6 = 20 m/s." },
      { type: "num", q: "Un'auto parte da s₀ = 30 m con v = 12 m/s. Dove si trova dopo 5 s?", answer: 90, unit: "m", explain: "s = 30 + 12 · 5 = 90 m." },
      { type: "tf", q: "Se vai a scuola e torni a casa, lo spostamento totale è uguale a due volte la distanza.", answer: false, explain: "Torni al punto di partenza: lo spostamento totale è zero (lo spazio percorso è il doppio)." },
      { type: "num", q: "Un'auto percorre 120 km a 60 km/h e altri 120 km a 120 km/h. Qual è la velocità media sull'intero percorso?", answer: 80, unit: "km/h", explain: "Tempi: 2 h + 1 h = 3 h; spazio 240 km; 240/3 = 80 km/h." },
      { type: "mc", q: "Cosa rappresenta la pendenza di una retta nel grafico spazio-tempo?", options: ["La posizione iniziale", "La velocità", "Il tempo"], answer: 1, explain: "Pendenza = Δs / Δt = velocità." },
      { type: "num", q: "Due ciclisti partono da due punti distanti 90 km e vanno uno verso l'altro a 20 km/h e 25 km/h. Dopo quante ore si incontrano?", answer: 2, unit: "h", explain: "Velocità di avvicinamento 45 km/h: t = 90 / 45 = 2 h." },
      { type: "text", q: "Come si chiama la formula che dà la posizione di un corpo in funzione del tempo?", answer: ["legge oraria", "la legge oraria"], explain: "È la legge oraria: s = s₀ + v·t nel moto rettilineo uniforme." },
      { type: "order", q: "Metti in ordine i passi per trovare dove si incontrano due mobili.", items: ["Scegli origine e verso dell'asse", "Scrivi la legge oraria di ciascun corpo", "Uguaglia le due posizioni", "Risolvi per il tempo", "Sostituisci il tempo per trovare il luogo"], explain: "Si scrive il modello di ciascun moto, si impone la stessa posizione allo stesso istante e si risolve." }
    ]
  }
});
