TOPIC('it', {
  id: "l5-fis-campo-magnetico",
  title: "Il campo magnetico",
  intro: "Una calamita attira il ferro senza toccarlo, la bussola indica il nord, un treno a levitazione magnetica corre sospeso sopra i binari. Dietro tutto questo c'è un unico protagonista: il <b>campo magnetico</b>. In questa lezione scopriamo che il magnetismo nasce dalle <b>cariche in movimento</b>, impariamo a calcolare la <b>forza di Lorentz</b> che agisce su una carica o su un filo percorso da corrente, vediamo come una corrente genera un campo (<b>Biot-Savart</b>, filo, spira, solenoide) e come tutto ciò fa girare un <b>motore elettrico</b>. Nella lezione successiva il magnetismo si intreccerà con l'elettricità fino a produrre la corrente nelle nostre case.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Dai magneti alla scoperta di Oersted",
      html: `<p>I fenomeni magnetici sono noti da millenni: la <b>magnetite</b> (un ossido di ferro naturale) attira piccoli pezzi di ferro, e la bussola, di origine cinese e diffusa in Europa dal XII-XIII secolo, sfrutta il fatto che la Terra stessa si comporta come un enorme magnete. Ogni calamita ha due <b>poli</b>, detti nord e sud: poli uguali si respingono, poli opposti si attraggono. Se si spezza una calamita non si separano i due poli: si ottengono due calamite più piccole, ciascuna con il proprio nord e il proprio sud. Un <b>monopolo magnetico</b> isolato, a oggi, non è mai stato osservato.</p>
<p>Per secoli elettricità e magnetismo furono considerati fenomeni distinti. La svolta avvenne nel <b>1820</b>, quando il fisico danese <b>Hans Christian Oersted</b> notò, durante una lezione, che un <b>ago magnetico</b> posto vicino a un filo percorso da corrente <b>ruotava</b>. Una corrente elettrica, cioè cariche in moto, crea quindi effetti magnetici. Poche settimane dopo <b>André-Marie Ampère</b> mostrò che due fili percorsi da corrente esercitano una forza l'uno sull'altro, e ipotizzò che anche il magnetismo della materia derivi da minuscole correnti circolari negli atomi.</p>
<p>Per descrivere queste interazioni si introduce, come per l'elettricità, un <b>campo</b>: il <b>campo magnetico</b> <b>B</b>, una grandezza vettoriale definita in ogni punto dello spazio. La sua unità nel Sistema Internazionale è il <b>tesla (T)</b>, dal nome di Nikola Tesla. Alcuni ordini di grandezza: il campo magnetico terrestre è di circa 25-65 µT (cioè 0,000025-0,000065 T), una calamita da frigorifero circa 5 mT, un elettromagnete industriale 1-2 T, un apparecchio per risonanza magnetica 1,5-3 T.</p>`
    },
    {
      type: "text",
      title: "Le linee di campo e le loro regole",
      html: `<p>Il campo magnetico si visualizza con le <b>linee di campo</b>: in ogni punto il vettore <b>B</b> è tangente alla linea, e dove le linee sono più fitte il campo è più intenso. Per convenzione, <b>fuori</b> da una calamita le linee vanno dal polo nord al polo sud; si possono "vedere" cospargendo di limatura di ferro un foglio sopra un magnete. Se si osserva ciò che accade anche <b>dentro</b> il magnete, si scopre una differenza fondamentale rispetto al campo elettrico:</p>
<ul>
<li>le linee del campo elettrico <b>iniziano</b> dalle cariche positive e <b>finiscono</b> sulle negative;</li>
<li>le linee del campo magnetico sono <b>sempre chiuse</b>: dove escono da un polo nord rientrano dal polo sud e proseguono all'interno del magnete.</li>
</ul>
<p>Questa proprietà si esprime con il <b>teorema di Gauss per il campo magnetico</b>: il flusso di <b>B</b> attraverso qualunque superficie chiusa è <b>sempre nullo</b>. È l'espressione matematica del fatto che non esistono cariche magnetiche isolate. Un'altra differenza: il campo elettrostatico è conservativo, mentre il campo magnetico non lo è, e ciò si vede nella legge di Ampère che incontreremo più avanti.</p>
<p>Quanto al magnetismo della materia, i materiali si dividono in tre grandi famiglie: i <b>ferromagnetici</b> (ferro, cobalto, nichel e alcune leghe), che si magnetizzano fortemente e possono diventare calamite permanenti; i <b>paramagnetici</b> (alluminio, platino), debolmente attratti da un campo esterno; i <b>diamagnetici</b> (rame, acqua, bismuto), debolmente respinti. I ferromagnetici sono formati da piccoli <b>domini</b> in cui i momenti magnetici atomici sono allineati; oltre la <b>temperatura di Curie</b> (circa 770 °C per il ferro) il materiale perde il ferromagnetismo.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il campo magnetico <b>B</b> si misura in <b>tesla</b>; è un vettore.</li>
<li>Le linee di campo magnetico sono <b>chiuse</b>: non esistono monopoli osservati e il flusso di B su una superficie chiusa è nullo.</li>
<li>Un campo magnetico è prodotto da <b>cariche in movimento</b> (correnti) e dai momenti magnetici delle particelle (magneti permanenti).</li>
<li>Un campo magnetico agisce soltanto su cariche <b>in movimento</b> (o su correnti): una carica ferma non risente di alcuna forza magnetica.</li>
</ul>`
    },
    {
      type: "text",
      title: "La forza di Lorentz",
      html: `<p>Una particella di carica <b>q</b> che si muove con velocità <b>v</b> in un campo magnetico <b>B</b> subisce la <b>forza di Lorentz</b> (in forma completa si somma anche la parte elettrica, qE):</p>
<p style="text-align:center"><b>F = q · v × B</b> &nbsp;&nbsp; con modulo &nbsp;&nbsp; <b>F = q·v·B·sen θ</b></p>
<p>dove θ è l'angolo tra <b>v</b> e <b>B</b>. Le proprietà fondamentali sono tre.</p>
<ul>
<li><b>La forza è perpendicolare sia a v sia a B.</b> Il verso si trova con la <b>regola della mano destra</b>: pollice nella direzione di v, indice nella direzione di B, il medio indica la direzione della forza su una carica <b>positiva</b> (per una carica negativa il verso è opposto).</li>
<li><b>La forza è nulla</b> se la carica è ferma o se si muove <b>parallelamente</b> al campo (sen θ = 0).</li>
<li><b>La forza di Lorentz non compie lavoro</b>, perché è sempre perpendicolare allo spostamento. Quindi cambia la <b>direzione</b> della velocità, ma non il suo <b>modulo</b> né l'energia cinetica della particella.</li>
</ul>
<p>Il tesla è definito proprio da questa relazione: 1 T è il campo che esercita una forza di 1 N su una carica di 1 C che si muove perpendicolarmente al campo con velocità 1 m/s (1 T = 1 N·s/(C·m) = 1 N/(A·m)).</p>`
    },
    {
      type: "text",
      title: "Moto di una carica in un campo magnetico uniforme",
      html: `<p>Se una carica entra in un campo <b>B uniforme</b> con velocità <b>perpendicolare</b> a B, la forza di Lorentz è perpendicolare alla velocità e di modulo costante: funziona da <b>forza centripeta</b>. Il moto è <b>circolare uniforme</b>. Uguagliando q·v·B = m·v²/r si ricava:</p>
<p style="text-align:center"><b>r = m·v / (q·B)</b> &nbsp;&nbsp;&nbsp; <b>T = 2π·m / (q·B)</b></p>
<p>Il raggio è proporzionale alla quantità di moto, mentre il <b>periodo non dipende dalla velocità</b> (una particella più veloce percorre una circonferenza più grande ma nello stesso tempo). Se la velocità ha anche una componente parallela a B, questa non viene alterata e la traiettoria diventa un'<b>elica</b>: è il moto delle particelle cariche dei venti solari che spiraleggiano intorno alle linee del campo terrestre, vicino ai poli, dando origine alle <b>aurore polari</b>.</p>
<p>Su questo principio si basano molti strumenti:</p>
<ul>
<li>il <b>selettore di velocità</b>: con un campo elettrico E e uno magnetico B incrociati, passano indisturbate solo le particelle con v = E/B (le forze qE e qvB si equilibrano);</li>
<li>lo <b>spettrometro di massa</b>: dopo la selezione, le particelle curvano con raggio r = mv/(qB) e si possono distinguere gli isotopi dalla massa;</li>
<li>il <b>ciclotrone</b> (Ernest Lawrence, anni Trenta): proprio perché il periodo non dipende da v, si accelerano le particelle con un campo elettrico alternato sincronizzato col periodo di rotazione;</li>
<li>i <b>tubi catodici</b> dei vecchi televisori e gli <b>acceleratori</b> come LHC, dove magneti superconduttori tengono i protoni sulla traiettoria circolare.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Carica in moto circolare in un campo uniforme",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<g font-family="sans-serif" font-size="16" fill="#64748b">
<text x="40" y="40">×</text><text x="100" y="40">×</text><text x="160" y="40">×</text><text x="220" y="40">×</text><text x="280" y="40">×</text><text x="340" y="40">×</text><text x="400" y="40">×</text><text x="460" y="40">×</text>
<text x="40" y="110">×</text><text x="100" y="110">×</text><text x="160" y="110">×</text><text x="400" y="110">×</text><text x="460" y="110">×</text>
<text x="40" y="180">×</text><text x="100" y="180">×</text><text x="160" y="180">×</text><text x="400" y="180">×</text><text x="460" y="180">×</text>
<text x="40" y="260">×</text><text x="100" y="260">×</text><text x="160" y="260">×</text><text x="220" y="260">×</text><text x="280" y="260">×</text><text x="340" y="260">×</text><text x="400" y="260">×</text><text x="460" y="260">×</text>
</g>
<circle cx="300" cy="150" r="90" fill="none" stroke="#38bdf8" stroke-width="3"/>
<circle cx="390" cy="150" r="9" fill="#f97316"/>
<line x1="390" y1="150" x2="390" y2="80" stroke="#4ade80" stroke-width="4"/>
<polygon points="390,68 382,86 398,86" fill="#4ade80"/>
<line x1="390" y1="150" x2="330" y2="150" stroke="#f87171" stroke-width="4"/>
<polygon points="318,150 336,142 336,158" fill="#f87171"/>
<circle cx="300" cy="150" r="4" fill="#e2e8f0"/>
<line x1="300" y1="150" x2="300" y2="150" stroke="#e2e8f0"/>
<g font-family="sans-serif" font-size="16" font-weight="bold">
<text x="402" y="100" fill="#4ade80">v</text>
<text x="338" y="140" fill="#f87171">F</text>
<text x="404" y="168" fill="#f97316">+q</text>
<text x="296" y="140" fill="#e2e8f0" font-size="14">centro</text>
<text x="500" y="150" fill="#e2e8f0" font-size="14">B entra nel foglio</text>
<text x="500" y="172" fill="#e2e8f0" font-size="14">(simbolo ×)</text>
<text x="205" y="150" fill="#38bdf8" font-size="14">r = mv/(qB)</text>
</g>
</svg>`,
      caption: "La forza di Lorentz (rossa) punta sempre verso il centro ed è perpendicolare alla velocità (verde): la particella percorre una circonferenza di raggio r = mv/(qB)."
    },
    {
      type: "example",
      title: "Un elettrone in un campo di 1 mT",
      html: `<p>Un elettrone (m = 9,11·10<sup>-31</sup> kg, q = 1,60·10<sup>-19</sup> C) entra con v = 1,0·10<sup>6</sup> m/s perpendicolarmente a un campo B = 1,0 mT = 1,0·10<sup>-3</sup> T.</p>
<p>Raggio: r = mv/(qB) = (9,11·10<sup>-31</sup> × 1,0·10<sup>6</sup>) / (1,60·10<sup>-19</sup> × 1,0·10<sup>-3</sup>) ≈ <b>5,7·10<sup>-3</sup> m = 5,7 mm</b>.</p>
<p>Periodo: T = 2πm/(qB) = 2π × 9,11·10<sup>-31</sup> / (1,60·10<sup>-19</sup> × 1,0·10<sup>-3</sup>) ≈ <b>3,6·10<sup>-8</sup> s</b> (circa 36 ns), indipendentemente dalla velocità. Se raddoppiassimo v, il raggio raddoppierebbe ma il periodo resterebbe lo stesso.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: forza di Lorentz",
      questions: [
        { type: "mc", q: "Quale delle seguenti affermazioni sulla forza di Lorentz magnetica è corretta?", options: ["Compie lavoro positivo aumentando l'energia cinetica", "È parallela alla velocità della carica", "È perpendicolare alla velocità e non compie lavoro", "Agisce anche sulle cariche ferme"], answer: 2, explain: "La forza magnetica è perpendicolare a v: non compie lavoro e cambia solo la direzione della velocità." },
        { type: "tf", q: "Un protone che si muove nella stessa direzione delle linee di campo magnetico non subisce alcuna forza magnetica.", answer: true, explain: "Se v è parallela a B, sen θ = 0 e quindi F = 0." },
        { type: "num", q: "Una carica di 2,0 µC si muove a 3,0·10⁵ m/s perpendicolarmente a un campo di 0,50 T. Quanto vale la forza (in N)?", answer: 0.3, tol: 0.005, unit: "N", explain: "F = qvB = 2,0·10⁻⁶ × 3,0·10⁵ × 0,50 = 0,30 N." }
      ]
    },
    {
      type: "text",
      title: "La forza su un filo percorso da corrente",
      html: `<p>Una corrente è un insieme di cariche in moto: un filo percorso da corrente <b>I</b> in un campo magnetico subisce la somma delle forze di Lorentz sulle cariche che trasporta. Per un tratto rettilineo di lunghezza <b>L</b> in un campo uniforme:</p>
<p style="text-align:center"><b>F = I · L · B · sen θ</b></p>
<p>dove θ è l'angolo tra la direzione della corrente e quella di B. Il verso segue la stessa regola della mano destra (con il pollice nel verso della corrente convenzionale). Se il filo è parallelo a B la forza è nulla; è massima quando i due sono perpendicolari.</p>
<p>La forza che due fili paralleli, percorsi da correnti I<sub>1</sub> e I<sub>2</sub> e posti a distanza <b>d</b>, esercitano l'uno sull'altro vale per unità di lunghezza <b>F/L = μ<sub>0</sub>·I<sub>1</sub>·I<sub>2</sub> / (2π·d)</b>: correnti con lo <b>stesso verso si attraggono</b>, con verso opposto si respingono. Questo effetto, scoperto da Ampère, fu per molto tempo usato per definire l'ampere; oggi il Sistema Internazionale lo definisce fissando il valore della carica elementare.</p>`
    },
    {
      type: "example",
      title: "Quanto spinge il campo su un filo?",
      html: `<p>Un tratto di cavo lungo 20 cm, percorso da una corrente di 5,0 A, è perpendicolare a un campo magnetico di 0,30 T. La forza è F = I·L·B = 5,0 × 0,20 × 0,30 = <b>0,30 N</b>.</p>
<p>Può sembrare poco, ma è la forza sulla sola porzione di 20 cm: in un motore elettrico le spire sono centinaia e l'effetto si somma. Se il filo si inclina di 30° rispetto al campo, la forza si dimezza (sen 30° = 0,5) e diventa 0,15 N.</p>`
    },
    {
      type: "text",
      title: "Il campo generato da una corrente",
      html: `<p>Oersted scoprì che una corrente <b>genera</b> un campo magnetico. Il calcolo generale è la <b>legge di Biot-Savart</b> (Jean-Baptiste Biot e Félix Savart, 1820): il contributo di un piccolo tratto di filo cresce con la corrente e diminuisce con il quadrato della distanza. Nei casi più importanti si ottengono formule semplici, dove compare la <b>permeabilità magnetica del vuoto μ<sub>0</sub> ≈ 4π·10<sup>-7</sup> T·m/A ≈ 1,26·10<sup>-6</sup> T·m/A</b>.</p>
<ul>
<li><b>Filo rettilineo molto lungo</b> (legge di Biot-Savart, scritta da Biot e Savart per questo caso): <b>B = μ<sub>0</sub>·I / (2π·r)</b>. Le linee di campo sono circonferenze concentriche intorno al filo; il verso si trova con la <b>regola della mano destra</b>: pollice nel verso della corrente, le dita che si chiudono indicano il verso di B.</li>
<li><b>Spira circolare</b> di raggio R, nel suo centro: <b>B = μ<sub>0</sub>·I / (2R)</b> (con N spire sovrapposte, N volte tanto).</li>
<li><b>Solenoide</b> (un filo avvolto a elica con n spire per unità di lunghezza), all'interno e lontano dalle estremità: <b>B = μ<sub>0</sub>·n·I</b>, campo quasi uniforme, nullo (quasi) all'esterno. All'esterno il solenoide si comporta come un magnete a sbarra con un polo nord e un polo sud.</li>
</ul>
<p>Introducendo un nucleo di ferro dentro il solenoide, il campo aumenta di centinaia o migliaia di volte: nasce così l'<b>elettromagnete</b>, che si accende e si spegne con la corrente (gru per rottami, relè, campanelli, serrature elettriche).</p>`
    },
    {
      type: "example",
      title: "Il campo di un cavo, e quello di un solenoide",
      html: `<p><b>Cavo.</b> Un cavo lungo percorso da I = 10 A, a r = 5,0 cm: B = μ<sub>0</sub>I/(2πr) = (4π·10<sup>-7</sup> × 10)/(2π × 0,050) = <b>4,0·10<sup>-5</sup> T = 40 µT</b>, cioè lo stesso ordine di grandezza del campo terrestre. Ecco perché una bussola vicino a un cavo con forte corrente può essere disturbata.</p>
<p><b>Solenoide.</b> Un solenoide con n = 1000 spire/m e I = 2,0 A: B = μ<sub>0</sub>nI = 4π·10<sup>-7</sup> × 1000 × 2,0 ≈ <b>2,5·10<sup>-3</sup> T = 2,5 mT</b>. Raddoppiando la corrente si raddoppia il campo; con un nucleo di ferro si arriva a valori molto maggiori.</p>`
    },
    {
      type: "text",
      title: "La legge di Ampère e le equazioni del campo magnetico",
      html: `<p>Con la legge di Biot-Savart si possono calcolare tutti i campi, ma nei casi molto simmetrici esiste una scorciatoia: il <b>teorema della circuitazione di Ampère</b>. La circuitazione di B, cioè la somma dei prodotti B·Δl lungo una linea chiusa, è proporzionale alla corrente totale concatenata con la linea:</p>
<p style="text-align:center"><b>Γ(B) = μ<sub>0</sub> · I<sub>conc</sub></b></p>
<p>Applicandolo a una circonferenza di raggio r intorno a un filo (B costante e tangente) si ottiene 2πr·B = μ<sub>0</sub>I, cioè proprio B = μ<sub>0</sub>I/(2πr). Il fatto che la circuitazione sia diversa da zero significa che il campo magnetico <b>non è conservativo</b>: le sue linee si avvolgono intorno alle correnti.</p>
<p>Insieme al teorema di Gauss per B (flusso nullo su superfici chiuse), la legge di Ampère costituisce la parte magnetostatica delle equazioni di Maxwell. Vedremo che Maxwell dovrà <b>aggiungere</b> un termine alla legge di Ampère per renderla valida anche per correnti variabili nel tempo.</p>`
    },
    {
      type: "text",
      title: "Il motore elettrico",
      html: `<p>Una <b>spira</b> rettangolare percorsa da corrente I e immersa in un campo B uniforme è soggetta a due forze uguali e opposte sui lati perpendicolari al campo: la risultante è nulla, ma formano una <b>coppia</b> che fa ruotare la spira. Il momento della coppia vale <b>τ = N·I·A·B·sen θ</b>, dove N è il numero di spire, A l'area della spira e θ l'angolo tra il campo e la normale al piano della spira; il prodotto <b>m = N·I·A</b> è il <b>momento magnetico</b> della bobina.</p>
<p>La spira tende a disporsi con il piano perpendicolare a B (θ = 0, coppia nulla) e, se la corrente non cambiasse verso, si fermerebbe lì. Per far girare il motore in modo continuo si usa il <b>commutatore</b> (o collettore a spazzole): a ogni mezzo giro inverte il verso della corrente nella bobina, in modo che la coppia mantenga lo stesso verso. Nei motori moderni (brushless, in corrente alternata) l'inversione è fatta elettronicamente o dalla stessa alternanza della rete. Un <b>galvanometro</b>, lo strumento che misura le correnti, funziona con lo stesso principio: una bobina ruota nel campo di un magnete, contrastata da una molla, e l'angolo è proporzionale alla corrente.</p>
<p>Il motore elettrico trasforma <b>energia elettrica in energia meccanica</b> con rendimenti molto alti (spesso oltre il 90% nei motori grandi): è il cuore di lavatrici, ventilatori, treni, auto elettriche.</p>`
    },
    {
      type: "curiosity",
      title: "Il campo magnetico della Terra e le aurore",
      html: `<p>La Terra si comporta come un grande magnete, con un campo generato dal moto del ferro fuso nel nucleo esterno (<b>dinamo geofisica</b>). Il campo, grosso modo, somiglia a quello di un dipolo inclinato di circa 10° rispetto all'asse di rotazione; vicino al polo nord geografico c'è in realtà un <b>polo sud magnetico</b> (ecco perché il nord dell'ago è attratto da lì). Nel corso della storia geologica il campo si è <b>invertito</b> molte volte: l'ultima inversione completa, detta Brunhes-Matuyama, risale a circa 780 000 anni fa.</p>
<p>La <b>magnetosfera</b> terrestre devia gran parte delle particelle cariche del vento solare, che altrimenti irradierebbero la superficie. Quelle che vengono intrappolate spiraleggiano lungo le linee di campo verso i poli, dove colpiscono l'atmosfera e producono le luci verdi e rosse delle <b>aurore polari</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Treni a levitazione e risonanza magnetica",
      html: `<p>Il treno <b>Maglev</b> di Shanghai, in servizio dal 2004, sfrutta forze magnetiche per sollevarsi di qualche centimetro dalle rotaie e raggiunge circa 430 km/h: senza attrito di rotolamento, la resistenza è soltanto quella dell'aria. Nei sistemi di <b>risonanza magnetica nucleare</b> (RM) usati in medicina un magnete superconduttore crea un campo di 1,5-3 T, centomila volte più intenso di quello terrestre, e i nuclei di idrogeno del corpo, orientati dal campo, emettono segnali radio che il computer trasforma in immagini dettagliate dei tessuti, senza usare raggi X.</p>`
    },
    {
      type: "widget",
      title: "Abbina fenomeno e formula",
      widget: "match",
      options: { pairs: [
        ["Forza su una carica in moto", "F = q·v·B·sen θ"],
        ["Raggio della traiettoria circolare", "r = m·v/(q·B)"],
        ["Forza su un filo percorso da corrente", "F = I·L·B·sen θ"],
        ["Campo di un filo rettilineo", "B = μ₀·I/(2π·r)"],
        ["Campo dentro un solenoide", "B = μ₀·n·I"]
      ] },
      caption: "Collega ogni situazione alla relazione giusta."
    },
    {
      type: "quiz",
      title: "Controlla: campi generati da correnti",
      questions: [
        { type: "mc", q: "Due fili paralleli percorsi da correnti con lo stesso verso:", options: ["Si respingono", "Si attraggono", "Non interagiscono", "Si attraggono solo se le correnti sono uguali"], answer: 1, explain: "Correnti parallele concordi si attraggono, antiparallele si respingono (Ampère)." },
        { type: "num", q: "Qual è il campo (in µT) a 10 cm da un filo lungo percorso da 20 A? (μ₀ = 4π·10⁻⁷ T·m/A)", answer: 40, tol: 0.5, unit: "µT", explain: "B = μ₀I/(2πr) = 2·10⁻⁷ × 20/0,10 = 4,0·10⁻⁵ T = 40 µT." },
        { type: "tf", q: "Le linee del campo magnetico di una calamita iniziano dal polo nord e terminano sul polo sud, dentro il magnete non esistono.", answer: false, explain: "Le linee sono chiuse: proseguono anche all'interno del magnete dal sud al nord." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la forza magnetica",
      intro: "La forza di Lorentz è perpendicolare a tutto: è normale sentirsi smarriti. Prova una di queste strade.",
      tabs: [
        {
          label: "✋ La regola della mano destra",
          html: "<p>Metti la mano destra con il <b>pollice</b> che punta come la velocità v (o come la corrente), l'<b>indice</b> come il campo B: il <b>medio</b>, aperto perpendicolarmente agli altri due, indica la forza su una carica positiva. Per una carica negativa si inverte il verso. Un trucco per ricordare: v → pollice, B → indice, F → medio, nell'ordine in cui compaiono in F = q v × B.</p>"
        },
        {
          label: "🛰️ Il moto circolare già noto",
          html: "<p>Pensa a un sasso legato a un filo e fatto roteare: il filo tira sempre verso il centro, perpendicolarmente alla velocità, e il sasso non accelera ma gira. La forza di Lorentz fa lo stesso lavoro del filo: non cambia la velocità, solo la direzione. Per questo valgono le stesse formule del moto circolare uniforme: la forza magnetica è la forza centripeta, q·v·B = m·v²/r.</p>",
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#0f172a"/><circle cx="300" cy="150" r="90" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="6 6"/><circle cx="300" cy="150" r="6" fill="#e2e8f0"/><line x1="300" y1="150" x2="390" y2="150" stroke="#f87171" stroke-width="3"/><circle cx="390" cy="150" r="12" fill="#f97316"/><text x="330" y="140" font-family="sans-serif" font-size="16" fill="#f87171">filo / F</text><text x="405" y="120" font-family="sans-serif" font-size="16" fill="#4ade80">v</text><line x1="390" y1="150" x2="390" y2="90" stroke="#4ade80" stroke-width="3"/><text x="150" y="40" font-family="sans-serif" font-size="16" fill="#e2e8f0">Il filo tira verso il centro, ma non fa lavoro</text></svg>`
        },
        {
          label: "🎯 Calcola col solenoide",
          html: "<p>Se i vettori ti confondono, parti dai numeri: un solenoide con n spire per metro e corrente I ha dentro un campo B = μ₀·n·I. Metti nella formula n = 500 spire/m e I = 4 A: B = 4π·10⁻⁷ × 500 × 4 ≈ 2,5 mT. Raddoppia I: B raddoppia. Raddoppia n: B raddoppia. Ora la formula ti racconta una storia: più spire e più corrente = campo più forte.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del campo magnetico",
      nodes: [
        { id: "oersted", label: "Oersted 1820", x: 12, y: 12, color: "#64748b", html: "Una corrente devia l'ago di una bussola: elettricità e magnetismo sono collegati.", why: "Prima si pensava che fossero fenomeni indipendenti. L'esperimento di Oersted (1820) mostrò per la prima volta che cariche in movimento producono un campo magnetico; da qui partirono Ampère, Biot e Savart, e più tardi Faraday e Maxwell." },
        { id: "campo", label: "Campo B", x: 50, y: 12, color: "#2563eb", html: "Vettore misurato in tesla, definito dalla forza su una carica in moto; linee chiuse.", why: "Come il campo elettrico, il campo magnetico serve a descrivere l'azione a distanza come proprietà dello spazio. Linee chiuse e flusso nullo su superfici chiuse esprimono l'assenza di monopoli magnetici." },
        { id: "lorentz", label: "Forza di Lorentz", x: 82, y: 25, color: "#ef4444", html: "F = qvB sen θ, perpendicolare a v e B, non compie lavoro.", why: "Nasce dall'osservazione che la forza magnetica dipende dalla velocità della carica. La perpendicolarità implica che non cambia l'energia cinetica: questo spiega il moto circolare e la possibilità di curvare i fasci senza fornire energia." },
        { id: "moto", label: "Moto circolare", x: 80, y: 60, color: "#16a34a", html: "r = mv/(qB), T = 2πm/(qB): ciclotroni, spettrometri, acceleratori.", why: "Se F è perpendicolare a v, la traiettoria è un cerchio, quindi F = ma centripeta. Dal raggio si risale a massa o quantità di moto: è così che si identificano le particelle nei rivelatori." },
        { id: "correnti", label: "Campo di una corrente", x: 20, y: 55, color: "#f59e0b", html: "Filo, spira, solenoide: B = μ₀I/2πr, μ₀I/2R, μ₀nI.", why: "Derivano dalla legge di Biot-Savart o dalla circuitazione di Ampère: il campo è proporzionale alla corrente che lo genera, con la costante μ₀ che lega il magnetismo al vuoto." },
        { id: "motore", label: "Motore elettrico", x: 50, y: 85, color: "#8b5cf6", html: "Una bobina in un campo ruota per effetto della coppia magnetica.", why: "Le forze su lati opposti di una spira sono uguali e contrarie: formano una coppia. Il commutatore inverte la corrente a ogni mezzo giro così la rotazione continua: è la prima applicazione tecnologica del magnetismo, dopo la bussola." }
      ],
      edges: [["oersted", "campo", "rivela"], ["campo", "lorentz", "agisce con"], ["lorentz", "moto", "produce"], ["oersted", "correnti", "porta a"], ["correnti", "campo", "genera"], ["lorentz", "motore", "applicata a fili in"]]
    }
  ],
  glossary: [
    { t: "Campo magnetico", d: "Grandezza vettoriale B che descrive l'azione magnetica nello spazio; si misura in tesla." },
    { t: "Tesla (T)", d: "Unità del campo magnetico: 1 T = 1 N/(A·m)." },
    { t: "Forza di Lorentz", d: "Forza F = q·v×B che agisce su una carica in moto in un campo magnetico; è perpendicolare a v e a B." },
    { t: "Solenoide", d: "Filo avvolto a elica: genera al suo interno un campo quasi uniforme B = μ₀·n·I." },
    { t: "Permeabilità del vuoto μ₀", d: "Costante che lega la corrente al campo magnetico, circa 4π·10⁻⁷ T·m/A." },
    { t: "Ferromagnetismo", d: "Proprietà di ferro, cobalto, nichel di magnetizzarsi fortemente grazie ai domini magnetici." },
    { t: "Circuitazione di Ampère", d: "Relazione Γ(B) = μ₀·I concatenata, valida in condizioni stazionarie." },
    { t: "Momento magnetico", d: "Per una bobina, m = N·I·A: misura la sua tendenza a ruotare in un campo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa osservò Oersted nel 1820?", options: ["Un magnete induce corrente in un filo", "Un filo percorso da corrente devia un ago magnetico", "Due cariche ferme si attraggono", "La luce è un'onda elettromagnetica"], answer: 1, explain: "Oersted scoprì che una corrente elettrica genera effetti magnetici, collegando elettricità e magnetismo." },
      { type: "tf", q: "Spezzando una calamita a metà si ottengono un polo nord isolato e un polo sud isolato.", answer: false, explain: "Si ottengono due calamite più piccole, ciascuna con il proprio nord e sud: i monopoli magnetici non sono mai stati osservati." },
      { type: "num", q: "Un protone (q = 1,6·10⁻¹⁹ C) si muove a 2,0·10⁶ m/s perpendicolarmente a un campo di 0,50 T. Quanto vale la forza (in 10⁻¹³ N)?", answer: 1.6, tol: 0.02, unit: "·10⁻¹³ N", explain: "F = qvB = 1,6·10⁻¹⁹ × 2,0·10⁶ × 0,50 = 1,6·10⁻¹³ N." },
      { type: "mc", q: "Una particella carica entra perpendicolarmente a un campo magnetico uniforme. Quale traiettoria percorre?", options: ["Una retta", "Una parabola", "Una circonferenza", "Una spirale che si stringe sempre più"], answer: 2, explain: "La forza è perpendicolare alla velocità e di modulo costante: funziona da forza centripeta e il moto è circolare uniforme." },
      { type: "num", q: "Un elettrone con v = 2,0·10⁶ m/s entra in un campo di 1,0 mT perpendicolare. Quanto vale il raggio (in mm, circa)? (m = 9,11·10⁻³¹ kg, e = 1,6·10⁻¹⁹ C)", answer: 11.4, tol: 0.3, unit: "mm", explain: "r = mv/(eB) = 9,11·10⁻³¹ × 2,0·10⁶/(1,6·10⁻¹⁹ × 1,0·10⁻³) ≈ 1,14·10⁻² m = 11,4 mm." },
      { type: "tf", q: "La forza di Lorentz magnetica può aumentare l'energia cinetica di una particella.", answer: false, explain: "Essendo perpendicolare alla velocità, non compie lavoro: cambia la direzione ma non il modulo di v." },
      { type: "mc", q: "Quale formula dà il campo al centro di una spira circolare di raggio R?", options: ["B = μ₀I/(2πR)", "B = μ₀I/(2R)", "B = μ₀nI", "B = μ₀I·R"], answer: 1, explain: "Per una singola spira, nel centro, B = μ₀I/(2R)." },
      { type: "num", q: "Un solenoide ha 2000 spire/m ed è percorso da 1,5 A. Quanto vale il campo interno (in mT, circa)? (μ₀ = 4π·10⁻⁷)", answer: 3.77, tol: 0.05, unit: "mT", explain: "B = μ₀nI = 4π·10⁻⁷ × 2000 × 1,5 ≈ 3,77·10⁻³ T." },
      { type: "mc", q: "A che cosa serve il commutatore in un motore elettrico a corrente continua?", options: ["A trasformare corrente alternata in continua", "A invertire la corrente a ogni mezzo giro per mantenere il verso della coppia", "A raffreddare le spire", "A generare il campo magnetico"], answer: 1, explain: "Senza inversione, la spira si fermerebbe nella posizione di equilibrio; il commutatore mantiene costante il verso del momento." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Gilbert: la Terra è un grande magnete (De Magnete)", "Oersted: una corrente devia l'ago", "Maxwell: equazioni dell'elettromagnetismo", "Lawrence: ciclotrone"], explain: "Gilbert (1600), Oersted (1820), Maxwell (1861-1865), Lawrence (anni Trenta del Novecento)." }
    ]
  }
});
