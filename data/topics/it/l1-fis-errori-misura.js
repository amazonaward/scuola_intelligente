TOPIC('it', {
  id: "l1-fis-errori-misura",
  title: "La misura e gli errori",
  intro: "Nessuna misura è <b>esatta</b>. Se misuri tre volte la stessa cattedra con lo stesso metro, probabilmente otterrai tre risultati leggermente diversi. Non è un fallimento: è la natura stessa della misura. La fisica sperimentale non cerca il «numero vero», ma un <b>risultato con la sua incertezza</b>, scritto in modo onesto. In questa lezione impariamo a riconoscere le <b>caratteristiche degli strumenti</b>, a distinguere gli <b>errori</b>, a calcolare <b>errore assoluto e relativo</b> e a scrivere correttamente le <b>cifre significative</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Gli strumenti di misura e le loro caratteristiche",
      html: `<p>Uno strumento di misura si descrive con alcune <b>caratteristiche</b>:</p>
<ul>
<li><b>Portata</b>: il valore massimo che lo strumento può misurare. Una bilancia da cucina con portata 5 kg non può pesare una persona.</li>
<li><b>Sensibilità</b>: la <b>più piccola variazione</b> della grandezza che lo strumento riesce a rilevare. Per un righello con i millimetri è 1 mm; per un calibro ventesimale 0,05 mm; per un cronometro digitale 0,01 s.</li>
<li><b>Prontezza</b>: la rapidità con cui lo strumento risponde a una variazione (un termometro a mercurio è meno pronto di uno digitale).</li>
<li><b>Precisione</b> (o fedeltà): la capacità di dare, ripetendo la misura nelle stesse condizioni, <b>valori vicini tra loro</b>.</li>
<li><b>Accuratezza</b> (o giustezza): la capacità di dare valori <b>vicini al valore vero</b>.</li>
</ul>
<p>Gli strumenti possono essere <b>analogici</b> (con una scala graduata e un indice: righello, termometro a mercurio) o <b>digitali</b> (con un display numerico: cronometro, bilancia elettronica).</p>`
    },
    {
      type: "svg",
      title: "Precisione e accuratezza: il bersaglio",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<g transform="translate(80,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-5" cy="4" r="5"/><circle cx="10" cy="-6" r="5"/><circle cx="3" cy="9" r="5"/><circle cx="-9" cy="-8" r="5"/><circle cx="8" cy="5" r="5"/></g>
</g>
<g transform="translate(240,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="38" cy="-30" r="5"/><circle cx="46" cy="-24" r="5"/><circle cx="40" cy="-20" r="5"/><circle cx="44" cy="-34" r="5"/><circle cx="35" cy="-26" r="5"/></g>
</g>
<g transform="translate(400,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-28" cy="-20" r="5"/><circle cx="30" cy="14" r="5"/><circle cx="6" cy="40" r="5"/><circle cx="-34" cy="30" r="5"/><circle cx="20" cy="-36" r="5"/></g>
</g>
<g transform="translate(560,110)">
<circle r="70" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="48" fill="#fff" stroke="#991b1b" stroke-width="2"/><circle r="26" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><circle r="8" fill="#991b1b"/>
<g fill="#1d4ed8"><circle cx="-6" cy="-3" r="5"/><circle cx="4" cy="8" r="5"/><circle cx="-12" cy="10" r="5"/><circle cx="14" cy="-8" r="5"/><circle cx="0" cy="-14" r="5"/></g>
</g>
<g font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="80" y="212">Precisa e</text><text x="80" y="230">accurata</text>
<text x="240" y="212">Precisa ma</text><text x="240" y="230">non accurata</text>
<text x="400" y="212">Né precisa</text><text x="400" y="230">né accurata</text>
<text x="560" y="212">Accurata in media,</text><text x="560" y="230">poco precisa</text>
</g>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#334155">Centro del bersaglio = valore vero; puntini blu = misure ripetute</text>
</g>
</svg>`,
      caption: "Precisione = misure vicine tra loro. Accuratezza = misure vicine al valore vero. Sono due cose diverse."
    },
    {
      type: "text",
      title: "Gli errori di misura",
      html: `<p>Ogni misura è affetta da un <b>errore</b>, inteso non come sbaglio ma come <b>incertezza</b>. Si distinguono due famiglie:</p>
<ul>
<li><b>Errori sistematici</b>: spostano <b>sempre nello stesso verso</b> tutte le misure. Cause: strumento tarato male (errore di zero: la bilancia segna 20 g senza niente sopra), metodo sbagliato, posizione sbagliata dell'occhio (<b>errore di parallasse</b>). Si correggono, se li si scopre, ma non si riducono ripetendo la misura.</li>
<li><b>Errori casuali</b> (o accidentali): variano da una misura all'altra, in più o in meno, senza regola, perché dipendono da molte piccole cause (tremore della mano, vibrazioni, tempo di reazione di chi preme il cronometro). Si <b>riducono ripetendo</b> la misura molte volte e facendo la media.</li>
</ul>
<p>Esiste infine l'<b>errore grossolano</b>, cioè lo sbaglio vero e proprio (leggere 28 invece di 82): va eliminato e non fa parte della teoria degli errori.</p>`
    },
    {
      type: "widget",
      title: "Sistematico o casuale?",
      widget: "classify",
      options: { groups: ["Sistematico", "Casuale"], items: [
        ["La bilancia segna 5 g anche senza nulla sopra", 0],
        ["Il cronometro viene fermato a volte troppo presto, a volte troppo tardi", 1],
        ["Leggo il righello sempre da un lato (parallasse)", 0],
        ["Piccole vibrazioni del tavolo durante la pesata", 1],
        ["Il metro di plastica si è dilatato al sole e misura sempre un po' di più", 0],
        ["Le letture del termometro oscillano di qualche decimo di grado", 1]
      ] },
      caption: "Il sistematico sposta sempre nello stesso verso; il casuale va un po' in più e un po' in meno."
    },
    {
      type: "text",
      title: "La misura singola e l'errore assoluto",
      html: `<p>Quando si effettua <b>una sola misura</b>, il risultato non può essere più preciso di quanto permetta lo strumento. Per convenzione (in molti testi scolastici) si assume come <b>errore assoluto</b> la <b>sensibilità</b> dello strumento:</p>
<p style="text-align:center"><b>x = x₀ ± E<sub>a</sub></b></p>
<p>dove x₀ è il valore misurato ed E<sub>a</sub> l'errore assoluto. Esempio: con un righello al millimetro misuri 32 cm e 4 mm: scrivi <b>l = (32,4 ± 0,1) cm</b>. Significa: «il valore vero è molto probabilmente nell'intervallo tra 32,3 e 32,5 cm». Alcuni testi assumono come errore la <b>metà</b> della sensibilità: in ogni esercizio bisogna seguire la convenzione indicata.</p>
<p>L'errore assoluto ha la <b>stessa unità di misura</b> della grandezza ed è sempre positivo.</p>`
    },
    {
      type: "text",
      title: "Misure ripetute: valore medio e semidispersione",
      html: `<p>Se si può ripetere la misura N volte nelle stesse condizioni, i valori ottenuti saranno leggermente diversi. Si procede così:</p>
<ol>
<li><b>Valore medio</b>: la somma di tutte le misure divisa per N. È la miglior stima del valore vero.</li>
<li><b>Errore assoluto</b> come <b>semidispersione massima</b>: E<sub>a</sub> = (x<sub>max</sub> − x<sub>min</sub>) / 2.</li>
<li>Si scrive il risultato: <b>x = valore medio ± E<sub>a</sub></b>.</li>
</ol>
<p><b>Esempio.</b> Misuri la larghezza di un quaderno con un righello al mm e ottieni: 21,3 cm; 21,5; 21,4; 21,4; 21,6.</p>
<ul>
<li>Somma: 21,3 + 21,5 + 21,4 + 21,4 + 21,6 = 107,2; media = 107,2 / 5 = <b>21,44 cm</b>.</li>
<li>Semidispersione: (21,6 − 21,3) / 2 = <b>0,15 cm</b>.</li>
<li>Risultato: <b>l = (21,44 ± 0,15) cm</b>, che si arrotonda a <b>(21,4 ± 0,2) cm</b>: l'errore si scrive con <b>una sola cifra significativa</b> e il valore con lo stesso numero di decimali dell'errore.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Errore relativo e percentuale",
      html: `<p>L'errore assoluto non dice se la misura è «buona»: un errore di 1 cm è piccolo se misuro un campo di calcio, enorme se misuro un'unghia. Per questo si calcola l'<b>errore relativo</b>:</p>
<p style="text-align:center"><b>E<sub>r</sub> = E<sub>a</sub> / x</b> (numero puro, senza unità)</p>
<p>e l'<b>errore percentuale</b>: <b>E% = E<sub>r</sub> × 100</b>. Più l'errore relativo è piccolo, migliore è la misura.</p>`
    },
    {
      type: "example",
      title: "Quale misura è migliore?",
      html: `<p>Marta misura la lunghezza di una strada: (500 ± 1) m. Luca misura lo spessore di un libro: (3,0 ± 0,5) cm. Chi ha misurato meglio?</p>
<ul>
<li>Marta: E<sub>r</sub> = 1/500 = 0,002 = <b>0,2 %</b>.</li>
<li>Luca: E<sub>r</sub> = 0,5/3,0 ≈ 0,17 = <b>17 %</b>.</li>
</ul>
<p>Anche se l'errore assoluto di Luca (0,5 cm) è in numero più piccolo di quello di Marta (1 m), la sua misura è molto meno buona in proporzione. L'<b>errore relativo</b> è il confronto giusto tra misure di grandezze diverse.</p>`
    },
    {
      type: "example",
      title: "Il cronometro e il tempo di reazione",
      html: `<p>Per misurare il tempo di caduta di una pallina da 2 m, tre studenti usano un cronometro digitale al centesimo di secondo. Ottengono 0,71 s; 0,64 s; 0,78 s; 0,69 s. La sensibilità dello strumento è 0,01 s, ma le misure differiscono di quasi 0,1 s: la causa è il <b>tempo di reazione umano</b>, un errore casuale molto più grande della sensibilità. Il valore medio è 0,705 s e la semidispersione (0,78 − 0,64)/2 = 0,07 s: il risultato corretto è <b>(0,71 ± 0,07) s</b>, non (0,705 ± 0,01) s. Lo strumento ha una sensibilità migliore di quanto permetta il metodo: conta l'incertezza <i>dominante</i>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: errori",
      questions: [
        { type: "num", q: "Valori misurati: 12,0 s; 12,4 s; 12,2 s. Calcola il valore medio.", answer: 12.2, tol: 0.01, unit: "s", explain: "(12,0 + 12,4 + 12,2) / 3 = 36,6 / 3 = 12,2 s." },
        { type: "num", q: "Con le stesse misure (12,0; 12,4; 12,2 s) calcola l'errore assoluto come semidispersione massima.", answer: 0.2, tol: 0.001, unit: "s", explain: "(12,4 − 12,0) / 2 = 0,2 s." },
        { type: "tf", q: "Un errore sistematico si riduce ripetendo molte volte la misura e facendo la media.", answer: false, explain: "L'errore sistematico sposta tutte le misure nello stesso verso: la media non lo elimina." }
      ]
    },
    {
      type: "text",
      title: "Le cifre significative",
      html: `<p>Le <b>cifre significative</b> di una misura sono quelle che hanno un significato reale, cioè quelle certe più la prima incerta. Scrivere 3,20 m e 3,2 m non è la stessa cosa: nel primo caso lo strumento arriva al centimetro, nel secondo al decimetro.</p>
<p><b>Regole di conteggio:</b></p>
<ul>
<li>le cifre diverse da zero sono sempre significative;</li>
<li>gli zeri <b>tra</b> cifre significative sono significativi (<b>4 0 7 </b> → 3 cifre);</li>
<li>gli zeri <b>iniziali</b> non sono significativi (0,0052 ha <b>2</b> cifre);</li>
<li>gli zeri <b>finali dopo la virgola</b> sono significativi (2,50 ha <b>3</b> cifre);</li>
<li>negli interi con zeri finali come 1500 il numero è ambiguo: per chiarirlo si usa la notazione scientifica (1,5 × 10³ ha 2 cifre; 1,50 × 10³ ne ha 3).</li>
</ul>
<table>
<tr><th>Numero</th><th>Cifre significative</th></tr>
<tr><td>35,2</td><td>3</td></tr>
<tr><td>0,0045</td><td>2</td></tr>
<tr><td>3,020</td><td>4</td></tr>
<tr><td>6,0 × 10⁻³</td><td>2</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Calcoli e cifre significative",
      html: `<p>Il risultato di un calcolo non può essere più preciso dei dati di partenza.</p>
<ul>
<li><b>Moltiplicazioni e divisioni</b>: il risultato ha tante cifre significative quante ne ha il dato che ne ha <b>meno</b>. Esempio: 3,2 m × 1,45 m = 4,64 m² → si scrive <b>4,6 m²</b> (2 cifre).</li>
<li><b>Somme e sottrazioni</b>: il risultato ha tanti <b>decimali</b> quanti ne ha il dato che ne ha <b>meno</b>. Esempio: 12,34 + 0,5 = 12,84 → si scrive <b>12,8</b>.</li>
<li><b>Arrotondamento</b>: se la cifra da eliminare è ≥ 5 si aumenta di 1 la precedente; se è &lt; 5 si lascia invariata (2,46 → 2,5; 2,44 → 2,4).</li>
</ul>
<p>Il pericolo è la <b>falsa precisione</b>: la calcolatrice mostra 8 cifre, ma se i dati erano misurati con 2 cifre, le altre sono inventate.</p>`
    },
    {
      type: "text",
      title: "Come si propagano gli errori",
      html: `<p>Quando si calcola una nuova grandezza a partire da misure con errori, anche il risultato ha un errore. Regole semplici (per il caso peggiore):</p>
<ul>
<li><b>Somma e differenza</b>: gli <b>errori assoluti si sommano</b>. (5,0 ± 0,1) cm + (3,0 ± 0,1) cm = (8,0 ± 0,2) cm. Anche per la differenza si sommano!</li>
<li><b>Prodotto e quoziente</b>: gli <b>errori relativi si sommano</b>.</li>
</ul>
<p><b>Esempio, area di un rettangolo</b> di lati (5,0 ± 0,1) cm e (3,0 ± 0,1) cm:</p>
<ul>
<li>E<sub>r</sub> dei lati: 0,1/5,0 = 2 % e 0,1/3,0 ≈ 3,3 %;</li>
<li>E<sub>r</sub> dell'area ≈ 2 % + 3,3 % = 5,3 %;</li>
<li>Area = 5,0 × 3,0 = 15 cm²; errore assoluto = 15 × 0,053 ≈ 0,8 cm²;</li>
<li>risultato: <b>A = (15,0 ± 0,8) cm²</b>.</li>
</ul>
<p>Per questo, in una formula con un prodotto, conviene misurare con maggiore precisione la grandezza che ha l'errore relativo maggiore.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli errori",
      intro: "Se i calcoli ti sembrano astratti, prova questi punti di vista.",
      tabs: [
        {
          label: "🎯 Il bersaglio",
          html: "<p>Pensa a un tiratore. <b>Precisione</b> = i colpi sono raggruppati. <b>Accuratezza</b> = il gruppo è vicino al centro. Un errore <b>sistematico</b> sposta tutto il gruppo di lato (mirino storto); un errore <b>casuale</b> allarga il gruppo (mano che trema). Il «valore vero» è il centro che non vedi mai direttamente, ma verso cui ti avvicini con più misure.</p>"
        },
        {
          label: "📏 Il righello a scatti",
          html: "<p>Immagina che il righello avanzi a scatti di 1 mm: non puoi leggere 3,5 mm, solo 3 o 4. La <b>sensibilità</b> è la larghezza dello «scatto» e decide la massima precisione di una singola lettura. Per questo non ha senso scrivere 12,347 cm se lo strumento arriva ai millimetri: le cifre 4 e 7 sono inventate.</p>"
        },
        {
          label: "🧮 Facciamo la media con le tessere",
          html: "<p>Cinque misure: 20,1; 20,3; 20,2; 20,2; 20,2 cm. Un trucco: togli il «20,» comune e lavora sui decimali: 1, 3, 2, 2, 2 → somma 10 → media 2 → il valore medio è 20,2 cm. È un modo per fare i calcoli a mente.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "Valore medio", back: "somma delle misure / numero di misure" },
            { front: "Errore assoluto (misure ripetute)", back: "(x max - x min) / 2" },
            { front: "Errore relativo", back: "errore assoluto / valore misurato" },
            { front: "Errore percentuale", back: "errore relativo × 100" },
            { front: "Somma di misure", back: "si sommano gli errori assoluti" },
            { front: "Prodotto di misure", back: "si sommano gli errori relativi" }
          ] }
        },
        {
          label: "🔁 Il flusso di una misura",
          html: "<p>Ogni esperimento segue questi passi: scegli lo strumento → controlla lo zero → misura più volte → scarta gli sbagli grossolani → calcola media ed errore → scrivi il risultato con le cifre giuste → confronta con altri risultati o col valore atteso.</p>",
          svg: "<svg viewBox='0 0 600 160' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='160' fill='#f0f9ff'/><g font-family='sans-serif' font-size='14' text-anchor='middle' fill='#0c4a6e'><rect x='10' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='52' y='84'>Strumento</text><rect x='115' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='157' y='84'>Misure</text><rect x='220' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='262' y='84'>Media</text><rect x='325' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='367' y='84'>Errore</text><rect x='430' y='55' width='85' height='50' rx='8' fill='#bae6fd'/><text x='472' y='84'>Cifre</text><rect x='535' y='55' width='55' height='50' rx='8' fill='#7dd3fc'/><text x='562' y='84'>x±E</text><path d='M95 80 L115 80 M200 80 L220 80 M305 80 L325 80 M410 80 L430 80 M515 80 L535 80' stroke='#0369a1' stroke-width='3'/></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Quando il neutrino «superò» la luce",
      html: `<p>Nel settembre 2011 l'esperimento <b>OPERA</b> (che misurava neutrini inviati dal CERN di Ginevra ai Laboratori del Gran Sasso, in Italia) annunciò che i neutrini sembravano viaggiare <b>appena più veloci della luce</b>. Sarebbe stata una scoperta rivoluzionaria. Nei mesi successivi i ricercatori controllarono tutto e trovarono due <b>errori sistematici</b>: un cavo in fibra ottica non ben collegato e un oscillatore difettoso. Dopo la correzione, la velocità tornò compatibile con quella della luce. È la dimostrazione che anche i grandi laboratori cercano e correggono i propri errori, e che per una scoperta eccezionale servono prove straordinarie.</p>`
    },
    {
      type: "curiosity",
      title: "Eratostene e la circonferenza della Terra",
      html: `<p>Intorno al 240 a.C. <b>Eratostene</b> di Cirene misurò la circonferenza terrestre con un bastone, un'ombra e una distanza: a Siene (oggi Assuan) i raggi del Sole a mezzogiorno del solstizio d'estate cadevano verticali, mentre ad Alessandria, circa 5000 stadi più a nord, formavano un angolo di circa 7,2° (1/50 di angolo giro). Ne ricavò una circonferenza di 250 000 stadi. Il valore dello stadio usato è incerto, ma la misura dista da quella moderna di una percentuale piccola: un'ottima stima con strumenti semplici e con un'incertezza chiaramente stimata.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della misura",
      nodes: [
        { id: "misura", label: "La misura", x: 50, y: 8, color: "#2563eb", html: "Confronto di una grandezza con un campione, tramite uno strumento.", why: "Ogni dato sperimentale è il risultato di una misura: senza capire come si ottiene e quanto è affidabile, non si può fidarsi di nessuna legge fisica. Per questo il metodo sperimentale di Galileo ha messo al centro la misura." },
        { id: "strumenti", label: "Strumento", x: 15, y: 42, color: "#16a34a", html: "Portata, sensibilità, prontezza, precisione, accuratezza.", why: "Le caratteristiche dello strumento fissano i limiti di ogni misura: nessuna operazione di calcolo può ottenere più precisione di quanta ne abbia lo strumento." },
        { id: "errori", label: "Errori", x: 50, y: 42, color: "#ef4444", html: "Sistematici e casuali: incertezza di ogni misura.", why: "Gli errori casuali nascono da molte piccole cause indipendenti, perciò si compensano facendo la media; quelli sistematici dipendono da un difetto del metodo o dello strumento e vanno scoperti, non mediati." },
        { id: "incertezza", label: "Errore assoluto e relativo", x: 85, y: 42, color: "#f59e0b", html: "Ea = semidispersione o sensibilità; Er = Ea/x; E% = Er × 100.", why: "L'errore assoluto indica quanto ci si può fidare; l'errore relativo permette di confrontare misure di grandezze diverse. Il confronto con l'errore relativo rende significativo un numero." },
        { id: "cifre", label: "Cifre significative", x: 30, y: 80, color: "#8b5cf6", html: "Cifre certe più la prima incerta.", why: "Scrivere solo le cifre significative è un obbligo di onestà: ogni cifra in più è una promessa di precisione che non si può mantenere." },
        { id: "propagazione", label: "Propagazione degli errori", x: 72, y: 80, color: "#64748b", html: "Somma: errori assoluti. Prodotto: errori relativi.", why: "Nasce dal ragionamento del caso peggiore: se ogni misura può sbagliare in eccesso, l'errore del risultato è la somma dei contributi. Quindi conviene migliorare la misura che pesa di più." }
      ],
      edges: [["misura", "strumenti", "dipende da"], ["misura", "errori", "ha sempre"], ["errori", "incertezza", "si quantificano con"], ["incertezza", "cifre", "fissa le"], ["incertezza", "propagazione", "si propaga nei"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz: cifre significative",
      questions: [
        { type: "mc", q: "Quante cifre significative ha 0,0360?", options: ["2", "3", "4", "5"], answer: 1, explain: "Gli zeri iniziali non contano; 3, 6 e lo zero finale dopo la virgola sì: 3 cifre." },
        { type: "mc", q: "Il prodotto 2,5 m × 3,14 m fornisce 7,85 m². Come va scritto con le cifre significative?", options: ["7,85 m²", "7,9 m²", "8 m²", "7,850 m²"], answer: 1, explain: "Il dato con meno cifre (2,5) ne ha 2: il risultato ha 2 cifre, 7,9 m²." }
      ]
    }
  ],
  glossary: [
    { t: "Sensibilità", d: "Minima variazione della grandezza che lo strumento riesce a rilevare." },
    { t: "Portata", d: "Valore massimo misurabile da uno strumento." },
    { t: "Precisione", d: "Capacità di dare misure ripetute vicine tra loro." },
    { t: "Accuratezza", d: "Capacità di dare misure vicine al valore vero." },
    { t: "Errore sistematico", d: "Errore che sposta le misure sempre nello stesso verso." },
    { t: "Errore casuale", d: "Errore che varia in modo imprevedibile da una misura all'altra." },
    { t: "Errore assoluto", d: "Incertezza di una misura, con la stessa unità della grandezza." },
    { t: "Errore relativo", d: "Rapporto tra errore assoluto e valore della misura." },
    { t: "Cifre significative", d: "Cifre certe più la prima incerta di una misura." },
    { t: "Parallasse", d: "Errore di lettura dovuto alla posizione dell'occhio rispetto alla scala." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è la sensibilità di uno strumento?", options: ["Il massimo valore misurabile", "La minima variazione rilevabile", "La rapidità di risposta", "Il prezzo dello strumento"], answer: 1, explain: "La sensibilità è la più piccola variazione che lo strumento apprezza." },
      { type: "tf", q: "Uno strumento molto preciso è necessariamente anche accurato.", answer: false, explain: "Può dare valori vicini tra loro ma tutti spostati rispetto al valore vero, per un errore sistematico." },
      { type: "mc", q: "La bilancia segna 10 g con il piatto vuoto. Che tipo di errore è?", options: ["Casuale", "Sistematico", "Grossolano", "Relativo"], answer: 1, explain: "Sposta tutte le misure nello stesso verso: errore di zero, quindi sistematico." },
      { type: "num", q: "Misure di una lunghezza: 8,2 cm; 8,4 cm; 8,3 cm; 8,3 cm. Calcola il valore medio.", answer: 8.3, tol: 0.01, unit: "cm", explain: "(8,2 + 8,4 + 8,3 + 8,3) / 4 = 33,2 / 4 = 8,3 cm." },
      { type: "num", q: "Con le stesse misure (8,2; 8,4; 8,3; 8,3 cm) calcola l'errore assoluto come semidispersione.", answer: 0.1, tol: 0.001, unit: "cm", explain: "(8,4 − 8,2) / 2 = 0,1 cm." },
      { type: "num", q: "Una misura vale (50 ± 2) cm. Calcola l'errore percentuale.", answer: 4, tol: 0.01, unit: "%", explain: "E_r = 2/50 = 0,04, cioè 4 %." },
      { type: "mc", q: "Quante cifre significative ha 4,050?", options: ["2", "3", "4", "5"], answer: 2, explain: "Lo zero tra 4 e 5 e lo zero finale dopo la virgola sono significativi: 4 cifre." },
      { type: "mc", q: "Qual è il risultato di 12,34 + 0,5 con le cifre significative?", options: ["12,84", "12,8", "13", "12,9"], answer: 1, explain: "Nelle somme si tiene il numero di decimali del dato con meno decimali (1): 12,8." },
      { type: "tf", q: "Quando si sottraggono due misure, gli errori assoluti si sottraggono.", answer: false, explain: "Nel caso peggiore gli errori assoluti si sommano anche nella differenza." },
      { type: "order", q: "Ordina i passi per scrivere il risultato di misure ripetute.", items: ["Eseguire più misure", "Calcolare il valore medio", "Calcolare l'errore assoluto", "Scrivere x = media ± errore con le cifre giuste"], explain: "Prima si raccolgono i dati, poi la media, poi l'errore, infine si scrive il risultato." }
    ]
  }
});
