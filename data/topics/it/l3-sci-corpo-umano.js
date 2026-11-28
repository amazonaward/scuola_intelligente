TOPIC('it', {
  id: "l3-sci-corpo-umano",
  title: "Il corpo umano: organizzazione",
  intro: "Il tuo corpo è fatto di decine di migliaia di miliardi di cellule, eppure funziona come un unico organismo: cammina, ragiona, mantiene la temperatura a 37 °C anche quando fuori nevica. Come è possibile? Grazie a un'<b>organizzazione a livelli</b>, dalla cellula al corpo intero, e a un sistema di <b>controlli a retroazione</b> che mantiene costante l'ambiente interno: l'<b>omeostasi</b>. In questa lezione vediamo i <b>quattro tessuti fondamentali</b>, come si combinano in organi e apparati, il linguaggio per descrivere il corpo e i meccanismi con cui si regola da solo.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Dalla cellula all'organismo: i livelli di organizzazione",
      html: `<p>Nel corpo umano ogni livello nasce dall'unione del precedente, e ha proprietà che il precedente non ha (le cosiddette <b>proprietà emergenti</b>):</p>
<ol>
<li><b>Chimico</b>: atomi e molecole (acqua, proteine, lipidi, DNA: vedi la lezione sulle molecole della vita).</li>
<li><b>Cellula</b>: l'unità fondamentale della vita. Il corpo umano ha circa 200 tipi di cellule diverse (neuroni, globuli rossi, cellule muscolari...).</li>
<li><b>Tessuto</b>: gruppo di cellule simili, con la loro matrice extracellulare, che svolgono una funzione comune.</li>
<li><b>Organo</b>: struttura formata da più tessuti diversi, con una funzione precisa (cuore, stomaco, pelle).</li>
<li><b>Apparato o sistema</b>: gruppo di organi che collaborano a una funzione (apparato digerente, sistema nervoso).</li>
<li><b>Organismo</b>: l'insieme di tutti gli apparati.</li>
</ol>
<p>Tutte le cellule del corpo contengono lo stesso DNA (derivano dallo zigote per mitosi), ma sono tanto diverse perché in ognuna si esprimono geni differenti: questo processo si chiama <b>differenziamento cellulare</b>. Le <b>cellule staminali</b> sono cellule non ancora differenziate, capaci di dare origine a diversi tipi cellulari e di rinnovarsi: nel midollo osseo rigenerano continuamente il sangue.</p>`
    },
    {
      type: "svg",
      title: "Le scatole cinesi del corpo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ar3" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#475569"/></marker></defs>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#1f2937">
<rect x="10" y="90" width="95" height="70" rx="10" fill="#bfdbfe"/><text x="57" y="120">Cellula</text><text x="57" y="140" font-size="14" font-weight="normal">neurone</text>
<rect x="125" y="90" width="95" height="70" rx="10" fill="#bbf7d0"/><text x="172" y="120">Tessuto</text><text x="172" y="140" font-size="14" font-weight="normal">nervoso</text>
<rect x="240" y="90" width="95" height="70" rx="10" fill="#fef08a"/><text x="287" y="120">Organo</text><text x="287" y="140" font-size="14" font-weight="normal">cervello</text>
<rect x="355" y="90" width="110" height="70" rx="10" fill="#fed7aa"/><text x="410" y="120">Sistema</text><text x="410" y="140" font-size="14" font-weight="normal">nervoso</text>
<rect x="485" y="90" width="105" height="70" rx="10" fill="#fecaca"/><text x="537" y="120">Organismo</text><text x="537" y="140" font-size="14" font-weight="normal">persona</text>
</g>
<g stroke="#475569" stroke-width="3" marker-end="url(#ar3)">
<line x1="105" y1="125" x2="123" y2="125"/><line x1="220" y1="125" x2="238" y2="125"/><line x1="335" y1="125" x2="353" y2="125"/><line x1="465" y1="125" x2="483" y2="125"/>
</g>
<text x="300" y="40" font-size="17" font-weight="bold" fill="#0369a1" text-anchor="middle">Ogni livello è fatto dai livelli precedenti</text>
<text x="300" y="220" font-size="15" fill="#475569" text-anchor="middle">Esempio con il sistema nervoso: l'organo cervello contiene soprattutto tessuto nervoso,</text>
<text x="300" y="242" font-size="15" fill="#475569" text-anchor="middle">ma anche connettivo (meningi), epitelio (plessi corioidei) e vasi sanguigni.</text>
</svg>`,
      caption: "Ogni organo contiene più tessuti: nessun tessuto da solo basta a fare un organo."
    },
    {
      type: "text",
      title: "I quattro tessuti fondamentali",
      html: `<p>Tutti i tessuti del corpo appartengono a quattro grandi classi:</p>
<table>
<tr><th>Tessuto</th><th>Funzione</th><th>Caratteristiche e tipi</th></tr>
<tr><td><b>Epiteliale</b></td><td>rivestire superfici e cavità; secernere (ghiandole); assorbire; proteggere</td><td>cellule strettamente unite, poca matrice, <b>privo di vasi</b> (si nutre dal tessuto sottostante); poggia su una membrana basale. Per forma: pavimentoso, cubico, cilindrico; per strati: semplice o stratificato. Esempi: epidermide (stratificato pavimentoso), pareti degli alveoli (pavimentoso semplice, sottilissimo), mucosa intestinale (cilindrico semplice, assorbe), ghiandole.</td></tr>
<tr><td><b>Connettivo</b></td><td>sostenere, unire, proteggere, trasportare, accumulare riserve</td><td>cellule disperse in abbondante <b>matrice extracellulare</b> (fibre e sostanza fondamentale). Tipi: connettivo propriamente detto (lasso e denso: tendini e legamenti), <b>adiposo</b> (riserva di energia e isolamento), <b>cartilagineo</b>, <b>osseo</b> (matrice mineralizzata), <b>sangue</b> (connettivo fluido: la matrice è il plasma).</td></tr>
<tr><td><b>Muscolare</b></td><td>contrarsi e produrre movimento</td><td>cellule allungate (fibre) con actina e miosina. <b>Scheletrico</b> (striato, volontario, attaccato alle ossa), <b>cardiaco</b> (striato, involontario, solo nel cuore), <b>liscio</b> (non striato, involontario, nelle pareti di stomaco, intestino, vasi).</td></tr>
<tr><td><b>Nervoso</b></td><td>ricevere, elaborare e trasmettere segnali</td><td><b>Neuroni</b> (circa 86 miliardi nel cervello umano) che trasmettono impulsi elettrici, e cellule di <b>glia</b> che li sostengono, li nutrono e li isolano (guaina mielinica).</td></tr>
</table>
<p>In un organo cavo come lo <b>stomaco</b> li troviamo tutti e quattro: epitelio (la mucosa che secerne il succo gastrico), connettivo (sostegno e vasi), muscolo liscio (che rimescola il cibo), tessuto nervoso (che regola la motilità e le secrezioni).</p>`
    },
    {
      type: "widget",
      title: "A quale tessuto appartiene?",
      widget: "classify",
      options: { groups: ["Epiteliale", "Connettivo", "Muscolare", "Nervoso"], items: [["Epidermide", 0], ["Mucosa dell'intestino", 0], ["Ghiandola sudoripara", 0], ["Sangue", 1], ["Cartilagine dell'orecchio", 1], ["Tessuto adiposo", 1], ["Osso", 1], ["Tendine", 1], ["Muscolo bicipite", 2], ["Miocardio", 2], ["Parete dell'intestino (fibre lisce)", 2], ["Neurone", 3], ["Cellule gliali", 3]] },
      caption: "Il criterio: guarda funzione e struttura, non dove si trova."
    },
    {
      type: "example",
      title: "Perché la pelle è un organo",
      html: `<p>La pelle è l'organo più esteso del corpo (circa 1,5-2 m² e 3-4 kg negli adulti). Contiene tutti e quattro i tessuti:</p>
<ul>
<li><b>Epidermide</b>: epitelio stratificato pavimentoso, che si rinnova di continuo dagli strati profondi (la cheratina si accumula negli strati superficiali). Contiene i melanociti, che producono melanina, il pigmento che protegge dai raggi UV.</li>
<li><b>Derma</b>: connettivo denso, con vasi sanguigni, ghiandole sudoripare e sebacee, follicoli piliferi, terminazioni nervose (tessuto nervoso) e piccoli muscoli lisci che drizzano i peli (la "pelle d'oca").</li>
<li><b>Ipoderma</b>: connettivo adiposo, isolante termico e riserva di energia.</li>
</ul>
<p>Le funzioni: barriera contro microbi, perdita d'acqua e raggi UV; <b>termoregolazione</b> (sudorazione, vasi sanguigni); sensibilità (tatto, dolore, caldo, freddo); sintesi di vitamina D con il sole.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: tessuti e organi",
      questions: [
        { type: "mc", q: "Quale tessuto è caratterizzato da abbondante matrice extracellulare e comprende osso, cartilagine e sangue?", options: ["Connettivo", "Epiteliale", "Muscolare", "Nervoso"], answer: 0, explain: "Il connettivo ha cellule disperse in una matrice che può essere fluida (sangue), gelatinosa, fibrosa o mineralizzata." },
        { type: "mc", q: "Quale tipo di muscolo è striato ma involontario?", options: ["Cardiaco", "Scheletrico", "Liscio"], answer: 0, explain: "Il muscolo cardiaco è striato come lo scheletrico, ma involontario." },
        { type: "tf", q: "Il tessuto epiteliale è ricco di vasi sanguigni.", answer: false, explain: "L'epitelio è avascolare: riceve nutrienti per diffusione dal connettivo sottostante." }
      ]
    },
    {
      type: "text",
      title: "Gli apparati e i sistemi",
      html: `<table>
<tr><th>Apparato / sistema</th><th>Funzione principale</th><th>Organi tipici</th></tr>
<tr><td><b>Tegumentario</b></td><td>protezione, termoregolazione, sensibilità</td><td>pelle, peli, unghie, ghiandole</td></tr>
<tr><td><b>Scheletrico</b></td><td>sostegno, protezione, deposito di calcio, produzione di sangue</td><td>ossa, cartilagini, articolazioni, midollo</td></tr>
<tr><td><b>Muscolare</b></td><td>movimento, postura, produzione di calore</td><td>muscoli scheletrici, tendini</td></tr>
<tr><td><b>Nervoso</b></td><td>controllo rapido, elaborazione, sensi</td><td>cervello, midollo spinale, nervi, organi di senso</td></tr>
<tr><td><b>Endocrino</b></td><td>controllo lento mediante ormoni</td><td>ipofisi, tiroide, surreni, pancreas, gonadi</td></tr>
<tr><td><b>Circolatorio</b></td><td>trasporto di gas, nutrienti, ormoni, calore</td><td>cuore, vasi, sangue</td></tr>
<tr><td><b>Linfatico e immunitario</b></td><td>difesa dalle infezioni, drenaggio dei liquidi</td><td>vasi linfatici, linfonodi, milza, timo</td></tr>
<tr><td><b>Respiratorio</b></td><td>scambio di O₂ e CO₂</td><td>vie aeree, polmoni</td></tr>
<tr><td><b>Digerente</b></td><td>digestione e assorbimento dei nutrienti</td><td>bocca, stomaco, intestino, fegato, pancreas</td></tr>
<tr><td><b>Urinario (escretore)</b></td><td>eliminare le scorie, regolare acqua, sali e pH</td><td>reni, uretere, vescica, uretra</td></tr>
<tr><td><b>Riproduttore</b></td><td>produrre gameti, riproduzione</td><td>gonadi, vie genitali</td></tr>
</table>
<p>Gli apparati <b>collaborano sempre</b>: per correre un chilometro, il sistema nervoso decide il movimento, i muscoli e lo scheletro lo eseguono, il respiratorio e il circolatorio portano ossigeno, il digerente ha fornito il carburante, il tegumentario disperde il calore, l'urinario elimina le scorie, l'endocrino regola glicemia e battito.</p>`
    },
    {
      type: "widget",
      title: "Abbina apparato e funzione",
      widget: "match",
      options: { pairs: [["Apparato urinario", "elimina le scorie e regola l'acqua"], ["Sistema endocrino", "regola con ormoni"], ["Apparato respiratorio", "scambia O₂ e CO₂"], ["Sistema nervoso", "controllo rapido con impulsi elettrici"], ["Sistema linfatico e immunitario", "difende da microbi e drena i liquidi"], ["Apparato tegumentario", "protegge e regola la temperatura"]] },
      caption: "Associa ogni apparato alla sua funzione principale."
    },
    {
      type: "text",
      title: "Parlare del corpo: posizioni, piani e cavità",
      html: `<p>Per descrivere dove sta un organo si usa un linguaggio preciso, riferito alla <b>posizione anatomica</b>: persona in piedi, viso in avanti, braccia lungo i fianchi con i palmi in avanti.</p>
<ul>
<li><b>Anteriore (ventrale)</b> / <b>posteriore (dorsale)</b>: davanti / dietro. <b>Superiore (craniale)</b> / <b>inferiore (caudale)</b>: verso la testa / i piedi.</li>
<li><b>Mediale</b> / <b>laterale</b>: più vicino / più lontano dal piano mediano. Il naso è mediale rispetto agli occhi.</li>
<li><b>Prossimale</b> / <b>distale</b> (negli arti): più vicino / più lontano dall'attaccatura. Il gomito è prossimale rispetto al polso.</li>
<li><b>Superficiale</b> / <b>profondo</b>: vicino / lontano dalla superficie.</li>
</ul>
<p><b>Piani di sezione</b>: il piano <b>sagittale</b> divide il corpo in destra e sinistra (il sagittale mediano lo divide in due metà uguali); il piano <b>frontale</b> o coronale lo divide in anteriore e posteriore; il piano <b>trasversale</b> (o orizzontale) in superiore e inferiore.</p>
<p><b>Cavità corporee</b>: nella parte posteriore ci sono la <b>cavità cranica</b> (cervello) e il <b>canale vertebrale</b> (midollo spinale). Nella parte anteriore, il <b>diaframma</b>, il muscolo che serve alla respirazione, separa la <b>cavità toracica</b> (polmoni, cuore nel mediastino, esofago, timo) dalla <b>cavità addominale</b> (stomaco, fegato, intestino, reni, milza), che prosegue nella <b>cavità pelvica</b> (vescica, organi genitali, retto). Gli organi sono avvolti da membrane sierose (pleura, pericardio, peritoneo) con un velo di liquido che riduce l'attrito.</p>`
    },
    {
      type: "widget",
      title: "Dove sta ogni organo?",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f0f9ff"/>
<ellipse cx="300" cy="35" rx="30" ry="28" fill="#fde7d2" stroke="#b45309" stroke-width="2"/>
<rect x="283" y="60" width="34" height="14" fill="#fde7d2" stroke="#b45309" stroke-width="2"/>
<path d="M230 76 Q300 66 370 76 L382 190 Q382 215 360 220 L240 220 Q218 215 218 190 Z" fill="#fff1e6" stroke="#b45309" stroke-width="2"/>
<path d="M232 78 L185 200" stroke="#b45309" stroke-width="22" stroke-linecap="round" fill="none"/>
<path d="M368 78 L415 200" stroke="#b45309" stroke-width="22" stroke-linecap="round" fill="none"/>
<path d="M232 78 L185 200" stroke="#fff1e6" stroke-width="18" stroke-linecap="round" fill="none"/>
<path d="M368 78 L415 200" stroke="#fff1e6" stroke-width="18" stroke-linecap="round" fill="none"/>
<ellipse cx="300" cy="32" rx="18" ry="16" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/>
<ellipse cx="268" cy="118" rx="25" ry="35" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<ellipse cx="332" cy="118" rx="25" ry="35" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<path d="M300 108 Q282 120 296 150 Q308 160 318 140 Q322 118 300 108 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
<path d="M240 160 Q300 150 360 160" stroke="#334155" stroke-width="3" fill="none" stroke-dasharray="5 4"/>
<ellipse cx="335" cy="180" rx="26" ry="14" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<path d="M255 180 Q300 175 320 185" stroke="#a16207" stroke-width="2" fill="none"/>
<rect x="258" y="185" width="85" height="30" rx="15" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<ellipse cx="248" cy="188" rx="10" ry="16" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/>
</svg>`,
        spots: [{ x: 300, y: 32, label: "Cervello" }, { x: 268, y: 118, label: "Polmone" }, { x: 300, y: 140, label: "Cuore" }, { x: 240, y: 160, label: "Diaframma" }, { x: 335, y: 180, label: "Stomaco" }, { x: 300, y: 200, label: "Intestino" }, { x: 248, y: 188, label: "Rene" }]
      },
      caption: "Schema semplificato: tocca un punto e scegli l'organo (il diaframma è la linea tratteggiata che separa torace e addome)."
    },
    {
      type: "text",
      title: "L'omeostasi: tenere costante l'ambiente interno",
      html: `<p>Le cellule vivono immerse nel <b>liquido interstiziale</b>, il loro ambiente immediato. Alla metà dell'Ottocento il fisiologo francese <b>Claude Bernard</b> capì che ciò che consente la vita libera degli animali è la costanza di questo "<i>milieu intérieur</i>". Nel 1926 <b>Walter Cannon</b> la chiamò <b>omeostasi</b> (dal greco <i>homoios</i>, simile, e <i>stasis</i>, stato): la capacità di mantenere le condizioni interne entro limiti ristretti, nonostante i cambiamenti esterni.</p>
<p>Le variabili tenute sotto controllo sono molte: temperatura corporea (circa 37 °C), glicemia (circa 0,7-1,0 g/L a digiuno), pH del sangue (7,35-7,45), pressione arteriosa, concentrazione di sali e acqua, ossigeno e anidride carbonica nel sangue.</p>
<p>Ogni circuito di controllo ha tre elementi:</p>
<ol>
<li>un <b>recettore</b> (sensore) che misura la variabile;</li>
<li>un <b>centro di controllo</b> che confronta il valore misurato con quello di riferimento (<i>set point</i>) e decide: nel cervello (ipotalamo) o in una ghiandola endocrina;</li>
<li>un <b>effettore</b> (muscolo, ghiandola, organo) che esegue la risposta.</li>
</ol>`
    },
    {
      type: "svg",
      title: "Un circuito a retroazione negativa: la temperatura",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ar4" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#475569"/></marker></defs>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#1f2937">
<rect x="20" y="30" width="150" height="55" rx="10" fill="#fecaca"/><text x="95" y="55">Stimolo</text><text x="95" y="75" font-size="14" font-weight="normal">temperatura troppo alta</text>
<rect x="225" y="30" width="150" height="55" rx="10" fill="#fde68a"/><text x="300" y="55">Recettori</text><text x="300" y="75" font-size="14" font-weight="normal">termocettori</text>
<rect x="430" y="30" width="150" height="55" rx="10" fill="#bbf7d0"/><text x="505" y="55">Centro di controllo</text><text x="505" y="75" font-size="14" font-weight="normal">ipotalamo</text>
<rect x="430" y="190" width="150" height="70" rx="10" fill="#bfdbfe"/><text x="505" y="215">Effettori</text><text x="505" y="235" font-size="14" font-weight="normal">ghiandole sudoripare,</text><text x="505" y="253" font-size="14" font-weight="normal">vasi della pelle</text>
<rect x="20" y="190" width="150" height="70" rx="10" fill="#e9d5ff"/><text x="95" y="215">Risposta</text><text x="95" y="235" font-size="14" font-weight="normal">sudorazione, calore</text><text x="95" y="253" font-size="14" font-weight="normal">disperso: T scende</text>
</g>
<g stroke="#475569" stroke-width="3" fill="none" marker-end="url(#ar4)">
<line x1="170" y1="58" x2="223" y2="58"/><line x1="375" y1="58" x2="428" y2="58"/><line x1="505" y1="87" x2="505" y2="188"/><line x1="428" y1="225" x2="172" y2="225"/><path d="M95 188 L95 90"/>
</g>
<text x="300" y="150" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">Retroazione negativa:</text>
<text x="300" y="172" font-size="15" fill="#b91c1c" text-anchor="middle">la risposta annulla lo stimolo</text>
</svg>`,
      caption: "Quando la temperatura sale oltre il valore di riferimento, la risposta la riporta verso il basso."
    },
    {
      type: "text",
      title: "Retroazione negativa e positiva",
      html: `<p>Quasi tutti i circuiti dell'omeostasi sono a <b>retroazione (feedback) negativa</b>: la risposta <b>riduce o annulla</b> lo stimolo che l'ha provocata, come un termostato che spegne la caldaia quando la stanza è abbastanza calda.</p>
<ul>
<li><b>Temperatura.</b> Se hai caldo, l'ipotalamo attiva la <b>sudorazione</b> (l'evaporazione sottrae calore) e la <b>vasodilatazione</b> dei vasi della pelle (dissipa calore). Se hai freddo: <b>vasocostrizione</b>, <b>brividi</b> (contrazioni dei muscoli che producono calore), piloerezione.</li>
<li><b>Glicemia.</b> Dopo un pasto la glicemia sale: le cellule β del pancreas secernono <b>insulina</b>, che fa entrare il glucosio nelle cellule e lo fa immagazzinare come glicogeno (nel fegato e nei muscoli), e la glicemia scende. A digiuno cala: le cellule α secernono <b>glucagone</b>, che fa liberare glucosio dal fegato. Nel <b>diabete di tipo 1</b> le cellule β sono distrutte (malattia autoimmune) e manca l'insulina; nel <b>tipo 2</b> le cellule rispondono male all'insulina.</li>
<li><b>Anidride carbonica e respirazione.</b> Se la CO₂ nel sangue sale, i chemocettori stimolano il centro respiratorio del bulbo e il respiro si fa più rapido, finché la CO₂ non scende.</li>
</ul>
<p>Più rara è la <b>retroazione positiva</b>, che <b>amplifica</b> lo stimolo, finché un evento la interrompe. Esempi: il <b>parto</b> (le contrazioni spingono la testa del bambino contro la cervice, che stimola il rilascio di <b>ossitocina</b>, che aumenta le contrazioni, finché il bambino nasce); la <b>coagulazione</b> del sangue (le piastrine attivate richiamano altre piastrine). Se manca il freno, la retroazione positiva diventa pericolosa.</p>
<p>L'omeostasi può fallire: <b>malattia</b> significa spesso che un circuito di controllo non funziona (diabete: glicemia; ipertensione: pressione; febbre: set point dell'ipotalamo alzato dalle sostanze rilasciate in caso di infezione).</p>`
    },
    {
      type: "example",
      title: "Una merenda zuccherata, minuto per minuto",
      html: `<p>Bevi una bibita zuccherata: nell'intestino il saccarosio viene digerito in glucosio e fruttosio, che passano nel sangue.</p>
<ol>
<li><b>Stimolo</b>: la glicemia sale, da circa 0,9 a oltre 1,2 g/L.</li>
<li><b>Recettori e centro di controllo</b>: le cellule β del pancreas misurano direttamente il glucosio nel sangue e sono sia sensore sia centro.</li>
<li><b>Risposta</b>: secernono insulina; fegato, muscoli e tessuto adiposo (effettori) captano il glucosio e lo immagazzinano come glicogeno e grasso.</li>
<li><b>Retroazione negativa</b>: la glicemia scende; il pancreas riduce l'insulina; dopo 2-3 ore si torna a valori vicini a 0,9 g/L.</li>
</ol>
<p>Quando il circuito si inceppa (diabete) la glicemia resta alta, e col tempo danneggia vasi, reni, occhi e nervi.</p>`
    },
    {
      type: "remember",
      title: "L'idea chiave dell'omeostasi",
      html: `<p>Omeostasi non significa "tutto fermo", ma <b>equilibrio dinamico</b>: le variabili oscillano attorno a un valore di riferimento e vengono continuamente riportate indietro. Un circuito ha sempre: <b>recettore → centro di controllo → effettore → risposta</b>, e nella retroazione negativa la risposta <b>riduce</b> lo stimolo. Se capisci un circuito (temperatura, glicemia), puoi capirli tutti.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: omeostasi",
      questions: [
        { type: "mc", q: "Quale ormone abbassa la glicemia?", options: ["Insulina", "Glucagone", "Ossitocina", "Adrenalina"], answer: 0, explain: "L'insulina, prodotta dalle cellule β del pancreas, fa entrare il glucosio nelle cellule." },
        { type: "tf", q: "Il brivido è una risposta che produce calore quando la temperatura corporea scende.", answer: true, explain: "Le contrazioni rapide dei muscoli scheletrici producono calore." },
        { type: "mc", q: "Quale esempio è una retroazione positiva?", options: ["Le contrazioni del parto stimolate dall'ossitocina", "La sudorazione", "La secrezione di insulina", "Il brivido"], answer: 0, explain: "Nel parto la contrazione stimola il rilascio di altra ossitocina, che aumenta la contrazione, fino alla nascita." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'organizzazione del corpo",
      intro: "Il corpo è molto complesso: un'analogia aiuta a tenere in mano i livelli e i controlli.",
      tabs: [
        { label: "🏙️ La città", html: "<p>Il corpo è una <b>città</b>. Le cellule sono gli <b>abitanti</b>, i tessuti i <b>quartieri</b> di abitanti con lo stesso mestiere (operai, commercianti...), gli organi sono gli <b>edifici</b> (ospedale, centrale elettrica, mercato), gli apparati i <b>servizi pubblici</b> (rete idrica, trasporti, comunicazioni, rifiuti). Il sistema nervoso è la rete telefonica e internet (veloce, a messaggi diretti), l'endocrino il servizio postale (più lento ma capillare), il circolatorio le strade, il digerente il mercato che rifornisce, l'urinario la nettezza urbana, l'immunitario la polizia. L'omeostasi è il sindaco che tiene d'occhio i parametri e interviene se salgono o scendono troppo.</p>" },
        { label: "🪆 La matrioska", html: "<p>Come una matrioska: l'organismo contiene gli apparati, gli apparati gli organi, gli organi i tessuti, i tessuti le cellule. Ruota il modello e osserva gli strati: ogni livello è dentro il successivo.</p>", scene: "layers", options: { layers: [ { r: 1, color: "#fca5a5", label: "Organismo" }, { r: 0.82, color: "#fdba74", label: "Apparato" }, { r: 0.64, color: "#fde047", label: "Organo" }, { r: 0.46, color: "#86efac", label: "Tessuto" }, { r: 0.28, color: "#93c5fd", label: "Cellula" } ] } },
        { label: "🌡️ Il termostato", html: "<p>Il termostato di casa ha un sensore (recettore), una manopola con il valore desiderato (set point) e un interruttore (effettore) che accende o spegne la caldaia. Quando la stanza si scalda troppo, il circuito spegne: retroazione negativa. L'ipotalamo funziona alla stessa maniera con la temperatura del corpo; ma, invece di un interruttore, ha molti effettori: sudorazione, brividi, vasi, comportamento (togliersi il maglione). Una febbre è un termostato regolato più in alto.</p>" },
        { label: "🧪 Il laboratorio virtuale", html: "<p>Alla base dell'omeostasi c'è la chimica: il pH del sangue è tenuto tra 7,35 e 7,45 da sistemi tampone, come la coppia acido carbonico e ione bicarbonato. Nel laboratorio virtuale puoi esplorare reagenti, acidi e basi e vedere come reagiscono.</p>", widget: "chemLab", options: {} }
      ]
    },
    {
      type: "curiosity",
      title: "Quanto è vecchio il tuo corpo?",
      html: `<p>La maggior parte delle cellule del corpo vive solo poche settimane o mesi: le cellule dell'intestino circa 4-5 giorni, i globuli rossi circa 120 giorni, quelle dell'epidermide circa un mese. Altre durano molto più a lungo: i neuroni della corteccia cerebrale e le cellule del cristallino restano con te quasi tutta la vita, il che significa che li devi proteggere. Nei tessuti che si rinnovano, le cellule staminali compensano le perdite: ogni secondo il midollo osseo produce milioni di globuli rossi. Ecco perché una ferita guarisce, ma un danno al midollo spinale no.</p>`
    },
    {
      type: "curiosity",
      title: "Perché il corpo è fatto così: la scala e la superficie",
      html: `<p>Una cellula grande dovrebbe scambiare più sostanze con l'esterno di quante la sua superficie riesca a gestire, perché il volume cresce più in fretta della superficie (volume ∝ r³, superficie ∝ r²). Per questo i corpi grandi non sono fatti da cellule giganti, ma da <b>moltissime cellule piccole</b>, e per i grandi organismi servono apparati specializzati che portano le sostanze vicino a ogni cellula: il circolatorio porta ossigeno, il digerente i nutrienti. Gli alveoli polmonari, se fossero spiegati, coprirebbero una superficie dell'ordine di 70 m² (come un piccolo appartamento), compressa nel torace: la superficie di scambio è la chiave dell'organizzazione.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: l'organizzazione del corpo umano",
      nodes: [
        { id: "cellula", label: "Cellule differenziate", x: 15, y: 12, color: "#2563eb", html: "Stesso DNA, geni diversi accesi: circa 200 tipi cellulari.", why: "La teoria cellulare (Schleiden, Schwann, Virchow, 1838-1858) dice che tutti i viventi sono fatti di cellule. Il differenziamento nasce dall'espressione genica diversa, non da un DNA diverso." },
        { id: "tess", label: "Quattro tessuti", x: 50, y: 12, color: "#16a34a", html: "Epiteliale, connettivo, muscolare, nervoso.", why: "L'istologia nasce con Bichat (1800), che distinse 21 tessuti, poi riuniti in quattro classi grazie al microscopio; la classificazione in quattro è un'ottima semplificazione." },
        { id: "organo", label: "Organi", x: 85, y: 12, color: "#f59e0b", html: "Più tessuti combinati in una struttura con funzione precisa.", why: "La combinazione di tessuti con funzioni complementari (proteggere, contrarsi, secernere, comandare) dà all'organo una funzione che nessun tessuto da solo ha." },
        { id: "app", label: "Apparati e sistemi", x: 30, y: 55, color: "#a855f7", html: "Organi che cooperano: undici apparati principali.", why: "La divisione in apparati è anche didattica: i sistemi sono in realtà fortemente interconnessi attraverso sangue, nervi e ormoni." },
        { id: "omeo", label: "Omeostasi", x: 70, y: 55, color: "#ef4444", html: "Mantenere costante l'ambiente interno.", why: "Claude Bernard (milieu intérieur) e Walter Cannon (1926) mostrarono che la stabilità interna è la condizione perché le cellule funzionino: ogni enzima ha un intervallo di temperatura e di pH ottimale." },
        { id: "feed", label: "Retroazione", x: 50, y: 90, color: "#0ea5e9", html: "Recettore → centro → effettore; negativa o positiva.", why: "Lo stesso schema ha ispirato la cibernetica (Wiener, 1948): i sistemi viventi e le macchine regolano le loro variabili con circuiti a retroazione." }
      ],
      edges: [["cellula", "tess", "formano"], ["tess", "organo", "si combinano in"], ["organo", "app", "cooperano negli"], ["app", "omeo", "garantiscono l'"], ["omeo", "feed", "si realizza con la"]]
    }
  ],
  glossary: [
    { t: "Tessuto", d: "Insieme di cellule simili e di matrice extracellulare che svolgono una funzione comune." },
    { t: "Organo", d: "Struttura formata da più tessuti che svolge una funzione specifica." },
    { t: "Apparato / sistema", d: "Gruppo di organi che cooperano in una funzione complessa." },
    { t: "Differenziamento", d: "Processo per cui le cellule diventano specializzate esprimendo geni diversi." },
    { t: "Cellula staminale", d: "Cellula non specializzata capace di rinnovarsi e di dare origine a cellule differenziate." },
    { t: "Matrice extracellulare", d: "Materiale prodotto dalle cellule e presente tra di esse, abbondante nel connettivo." },
    { t: "Omeostasi", d: "Capacità dell'organismo di mantenere costanti le condizioni interne." },
    { t: "Retroazione negativa", d: "Meccanismo in cui la risposta riduce lo stimolo che l'ha provocata." },
    { t: "Retroazione positiva", d: "Meccanismo in cui la risposta amplifica lo stimolo, come nel parto." },
    { t: "Ormone", d: "Messaggero chimico prodotto da una ghiandola endocrina e trasportato dal sangue." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanti sono i tessuti fondamentali del corpo umano?", answer: 4, explain: "Epiteliale, connettivo, muscolare, nervoso." },
      { type: "mc", q: "Quale tessuto ha una abbondante matrice extracellulare?", options: ["Connettivo", "Epiteliale", "Nervoso", "Muscolare"], answer: 0, explain: "Il connettivo ha cellule disperse in una grande matrice; l'epitelio ha cellule strettamente unite." },
      { type: "mc", q: "Il sangue è classificato come tessuto...", options: ["Connettivo fluido", "Epiteliale", "Muscolare liscio", "Nervoso"], answer: 0, explain: "Il plasma è la matrice fluida, in cui si trovano le cellule del sangue." },
      { type: "mc", q: "Quale tessuto muscolare si trova solo nel cuore?", options: ["Cardiaco", "Scheletrico", "Liscio"], answer: 0, explain: "Il miocardio è striato e involontario." },
      { type: "tf", q: "Un organo è formato da un solo tipo di tessuto.", answer: false, explain: "Ogni organo contiene più tessuti: lo stomaco, ad esempio, li ha tutti e quattro." },
      { type: "mc", q: "Che cosa separa la cavità toracica dalla cavità addominale?", options: ["Il diaframma", "Lo sterno", "Il peritoneo", "Il mediastino"], answer: 0, explain: "Il diaframma è il muscolo a cupola alla base del torace." },
      { type: "mc", q: "Il gomito rispetto al polso è...", options: ["Prossimale", "Distale", "Mediale", "Posteriore"], answer: 0, explain: "Prossimale = più vicino all'attaccatura dell'arto sul tronco." },
      { type: "mc", q: "Quale elemento di un circuito di omeostasi misura la variabile controllata?", options: ["Il recettore", "L'effettore", "Il centro di controllo", "Il set point"], answer: 0, explain: "Il recettore (sensore) misura; il centro di controllo decide; l'effettore agisce." },
      { type: "mc", q: "Quale ormone innalza la glicemia stimolando il fegato a liberare glucosio?", options: ["Glucagone", "Insulina", "Ossitocina", "Tiroxina"], answer: 0, explain: "Il glucagone, prodotto dalle cellule α del pancreas, agisce quando la glicemia è bassa." },
      { type: "order", q: "Ordina i livelli di organizzazione dal più semplice al più complesso.", items: ["Cellula", "Tessuto", "Organo", "Apparato", "Organismo"], explain: "Le cellule formano i tessuti, i tessuti gli organi, gli organi gli apparati, gli apparati l'organismo." }
    ]
  }
});
