TOPIC('it', {
  id: `m1-geo-coordinate`,
  title: `Latitudine e longitudine`,
  intro: `Come si fa a indicare con precisione un punto qualsiasi della Terra, anche in mezzo all'oceano? Si usa una griglia immaginaria di <b>paralleli</b> e <b>meridiani</b>, il <b>reticolato geografico</b>. Ogni luogo ha il suo «indirizzo» fatto di due numeri: la <b>latitudine</b> e la <b>longitudine</b>. Dalla longitudine dipendono anche i <b>fusi orari</b>.`,
  minutes: 35,
  sections: [
    {
      type: `text`,
      title: `1. Il reticolato geografico`,
      html: `<p>La Terra ruota attorno a un asse che passa per il <b>Polo Nord</b> e il <b>Polo Sud</b>. Su questa base i geografi hanno tracciato due famiglie di linee immaginarie:</p><ul><li><b>Paralleli</b>: cerchi orizzontali, paralleli tra loro, che girano intorno alla Terra da Ovest a Est. Il più lungo è l'<b>Equatore</b> (circa <b>40.075 km</b>), che divide la Terra in <b>emisfero boreale</b> (Nord) ed <b>emisfero australe</b> (Sud). Più ci si avvicina ai poli, più i paralleli sono piccoli; i poli sono solo punti.</li><li><b>Meridiani</b>: semicirconferenze che vanno da un polo all'altro. Sono tutti <b>uguali</b> (circa 20.000 km). Il meridiano di riferimento passa per l'osservatorio di <b>Greenwich</b>, vicino a Londra (scelto nel <b>1884</b> alla Conferenza internazionale di Washington), e divide la Terra in <b>emisfero orientale</b> (Est) e <b>occidentale</b> (Ovest).</li></ul>`
    },
    {
      type: `svg`,
      title: `Paralleli e meridiani`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#0f172a"/><circle cx="160" cy="165" r="120" fill="#38bdf8" stroke="#e0f2fe" stroke-width="2"/><g fill="none" stroke="#fef08a" stroke-width="2"><ellipse cx="160" cy="165" rx="120" ry="18"/><ellipse cx="160" cy="105" rx="104" ry="15"/><ellipse cx="160" cy="225" rx="104" ry="15"/><ellipse cx="160" cy="60" rx="60" ry="9"/><ellipse cx="160" cy="270" rx="60" ry="9"/></g><ellipse cx="160" cy="165" rx="120" ry="18" fill="none" stroke="#f97316" stroke-width="4"/><text x="160" y="30" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#fef08a">PARALLELI</text><text x="30" y="170" font-size="14" font-family="sans-serif" fill="#fdba74" text-anchor="end">0°</text><circle cx="440" cy="165" r="120" fill="#38bdf8" stroke="#e0f2fe" stroke-width="2"/><g fill="none" stroke="#bbf7d0" stroke-width="2"><ellipse cx="440" cy="165" rx="40" ry="120"/><ellipse cx="440" cy="165" rx="80" ry="120"/><ellipse cx="440" cy="165" rx="110" ry="120"/></g><line x1="440" y1="45" x2="440" y2="285" stroke="#ef4444" stroke-width="4"/><text x="440" y="30" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#bbf7d0">MERIDIANI</text><text x="448" y="300" font-size="14" font-family="sans-serif" fill="#fca5a5">Greenwich 0°</text><circle cx="440" cy="45" r="5" fill="#ffffff"/><text x="455" y="50" font-size="14" font-family="sans-serif" fill="#ffffff">Polo Nord</text><text x="160" y="196" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#7c2d12" font-weight="bold">Equatore</text></svg>`,
      caption: `A sinistra: i paralleli, cerchi sempre più piccoli verso i poli. A destra: i meridiani, tutti uguali, che si incontrano ai poli.`
    },
    {
      type: `text`,
      title: `2. Latitudine e longitudine`,
      html: `<p>Le coordinate si misurano in <b>gradi</b> (°), suddivisi in <b>primi</b> (′, 1° = 60′) e <b>secondi</b> (″, 1′ = 60″), perché sono <b>angoli</b> misurati dal centro della Terra.</p><ul><li><b>Latitudine</b>: distanza angolare di un punto dall'<b>Equatore</b>. Va da <b>0°</b> (Equatore) a <b>90°</b> (poli) e si indica <b>Nord</b> o <b>Sud</b>. Tutti i punti dello stesso parallelo hanno la stessa latitudine.</li><li><b>Longitudine</b>: distanza angolare di un punto dal <b>meridiano di Greenwich</b>. Va da <b>0°</b> a <b>180°</b> e si indica <b>Est</b> o <b>Ovest</b>. Tutti i punti dello stesso meridiano hanno la stessa longitudine.</li></ul><p>Si scrive sempre <b>prima la latitudine, poi la longitudine</b>. Esempio: <b>Roma 41° 54′ N, 12° 30′ E</b>. Nei navigatori e su Internet si usano i gradi decimali e i segni: 41,9 / 12,5 (Nord ed Est positivi, Sud e Ovest negativi).</p>`
    },
    {
      type: `remember`,
      title: `Trucco per non confonderle`,
      html: `<p><b>Latitudine</b> → «<b>lato</b>», «larghezza»: le linee sono <b>orizzontali</b> come i pioli di una <b>scala a pioli</b>: sali e scendi tra Nord e Sud.<br><b>Longitudine</b> → «<b>lunga</b>»: i meridiani sono linee <b>lunghe</b> che vanno da polo a polo; ti sposti tra Est e Ovest.</p>`
    },
    {
      type: `text`,
      title: `3. I paralleli speciali`,
      html: `<p>A causa dell'inclinazione dell'asse terrestre (circa <b>23° 27′</b>) alcuni paralleli hanno un significato astronomico:</p><table><tr><th>Parallelo</th><th>Latitudine</th><th>Perché è speciale</th></tr><tr><td>Equatore</td><td>0°</td><td>Il Sole è allo zenit (a picco) negli equinozi</td></tr><tr><td>Tropico del Cancro</td><td>23° 27′ N</td><td>Il Sole è allo zenit il 21 giugno</td></tr><tr><td>Tropico del Capricorno</td><td>23° 27′ S</td><td>Il Sole è allo zenit il 21–22 dicembre</td></tr><tr><td>Circolo polare artico</td><td>66° 33′ N</td><td>Oltre, almeno un giorno all'anno di sole a mezzanotte e uno di notte polare</td></tr><tr><td>Circolo polare antartico</td><td>66° 33′ S</td><td>Lo stesso, nell'emisfero australe</td></tr></table><p>Questi paralleli delimitano le <b>zone astronomiche</b> (torrida, temperate, polari), che studierai nella lezione sui climi.</p>`
    },
    {
      type: `3d`,
      title: `Trova le città sul globo`,
      scene: `globe`,
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: `Roma 41,9° N – 12,5° E`, color: `#16a34a` },
          { lat: 45.46, lon: 9.19, label: `Milano 45,5° N – 9,2° E`, color: `#16a34a` },
          { lat: 51.48, lon: 0, label: `Greenwich 51,5° N – 0°`, color: `#dc2626` },
          { lat: 40.71, lon: -74.0, label: `New York 40,7° N – 74° O`, color: `#2563eb` },
          { lat: -33.87, lon: 151.21, label: `Sydney 33,9° S – 151,2° E`, color: `#f97316` },
          { lat: -0.18, lon: -78.47, label: `Quito (quasi sull'Equatore)`, color: `#a855f7` },
          { lat: 35.68, lon: 139.69, label: `Tokyo 35,7° N – 139,7° E`, color: `#f97316` },
          { lat: -34.6, lon: -58.38, label: `Buenos Aires 34,6° S – 58,4° O`, color: `#2563eb` }
        ]
      },
      caption: `Ruota il globo: nota che Roma e New York hanno quasi la stessa latitudine (sono quasi sullo stesso parallelo), ma longitudini molto diverse.`
    },
    {
      type: `example`,
      title: `Esempio pratico: quanto è lungo un grado?`,
      html: `<p>Un meridiano va da polo a polo: 180° di latitudine per circa 20.000 km. Quindi <b>1° di latitudine ≈ 20.000 : 180 ≈ 111 km</b>.</p><p>Milano è a circa 45,5° N, Roma a circa 41,9° N. La differenza è 45,5 − 41,9 = <b>3,6°</b>; 3,6 × 111 ≈ <b>400 km</b> in direzione Nord-Sud. (La distanza reale in linea d'aria è circa 480 km, perché Milano è anche più a Ovest.)</p><p>Un grado di longitudine, invece, è lungo 111 km solo all'Equatore e si accorcia verso i poli, dove diventa zero.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 1`,
      questions: [
        { type: `mc`, q: `Qual è la latitudine dell'Equatore?`, options: [`0°`, `45°`, `90°`, `180°`], answer: 0, explain: `L'Equatore è il parallelo di riferimento: 0°.` },
        { type: `mc`, q: `Quale valore massimo può avere la longitudine?`, options: [`90°`, `180°`, `360°`, `23° 27′`], answer: 1, explain: `180° Est o Ovest: oltre si torna indietro dall'altra parte.` },
        { type: `tf`, q: `Tutti i meridiani hanno la stessa lunghezza.`, answer: true, explain: `Vanno tutti da un polo all'altro; i paralleli invece si accorciano verso i poli.` },
        { type: `num`, q: `Quanti km misura circa 1° di latitudine?`, answer: 111, tol: 2, unit: `km`, explain: `20.000 km : 180° ≈ 111 km.` }
      ]
    },
    {
      type: `text`,
      title: `4. I fusi orari`,
      html: `<p>La Terra compie un giro completo (<b>360°</b>) in <b>24 ore</b>. In un'ora ruota quindi di 360 : 24 = <b>15°</b>. Per questo la Terra è stata divisa in <b>24 fusi orari</b>, spicchi larghi circa 15° di longitudine: dentro ogni fuso si usa la stessa ora.</p><ul><li>Il fuso di riferimento è quello di Greenwich: l'ora si chiama <b>UTC</b> (tempo coordinato universale).</li><li>Andando verso <b>Est</b> si <b>aggiunge</b> un'ora per ogni fuso (dove il Sole sorge prima); andando verso <b>Ovest</b> si <b>toglie</b>.</li><li>L'<b>Italia</b> è nel fuso <b>UTC+1</b> (ora dell'Europa centrale); d'estate, con l'<b>ora legale</b>, diventa UTC+2.</li><li>I confini dei fusi non sono linee dritte: seguono spesso i confini degli Stati. La <b>Cina</b>, larga come 5 fusi, usa un solo orario per tutto il Paese.</li></ul><p>Sul meridiano di 180°, nell'oceano Pacifico, passa (con molte deviazioni) la <b>linea del cambiamento di data</b>: attraversandola verso Ovest si aggiunge un giorno, verso Est lo si toglie.</p>`
    },
    {
      type: `example`,
      title: `Esempio pratico: chiamare lo zio a New York`,
      html: `<p>A Roma sono le <b>18:00</b> (inverno, UTC+1). New York è nel fuso <b>UTC−5</b>. La differenza è 1 − (−5) = <b>6 ore</b>, e New York è a Ovest: quindi lì sono le 18 − 6 = <b>12:00</b>, mezzogiorno. Lo zio è in pausa pranzo!</p><p>E a <b>Tokyo</b> (UTC+9)? Differenza 9 − 1 = 8 ore verso Est: 18 + 8 = 26 → <b>2:00 di notte</b> del giorno dopo. Meglio non telefonare!</p>`
    },
    {
      type: `widget`,
      title: `La retta dei fusi orari`,
      widget: `numberLine`,
      options: { min: -12, max: 14, step: 1, marks: [-5, 0, 1, 9] },
      caption: `Ogni tacca è un fuso (UTC). Segnati: New York (−5), Greenwich (0), Italia (+1), Tokyo (+9). Contare i salti tra due tacche = differenza di ore. Le Kiribati usano addirittura UTC+14!`
    },
    {
      type: `curiosity`,
      title: `Il problema della longitudine`,
      html: `<p>La latitudine si misurava già nel Medioevo osservando l'altezza della Stella Polare o del Sole. La longitudine no: bisognava sapere che ore fossero <b>contemporaneamente</b> a bordo e nel porto di partenza (ogni ora di differenza = 15°). Ma gli orologi a pendolo sulle navi che dondolavano non funzionavano. Molte navi naufragavano. Nel 1714 il Parlamento inglese offrì un premio enorme a chi avesse risolto il problema. Lo vinse un falegname e orologiaio, <b>John Harrison</b>: il suo cronometro marino <b>H4</b>, collaudato nel 1761–62, sbagliò di pochi secondi in un viaggio di due mesi fino in Giamaica.</p>`
    },
    {
      type: `curiosity`,
      title: `Un posto con tutte le ore`,
      html: `<p>Al <b>Polo Nord</b> e al <b>Polo Sud</b> si incontrano tutti i meridiani, quindi tutti i fusi orari! Camminando intorno al polo puoi attraversare 24 fusi in pochi secondi. Per questo le basi scientifiche in Antartide scelgono un orario per comodità: la base statunitense <b>Amundsen-Scott</b>, proprio al Polo Sud, usa l'ora della Nuova Zelanda, da dove arrivano i rifornimenti.</p>`
    },
    {
      type: `alternatives`,
      title: `Altri modi per capirlo`,
      intro: `Se latitudine e longitudine ti sembrano astratte, prova questi metodi.`,
      tabs: [
        { label: `🚢 Battaglia navale`, html: `<p>Nel gioco della battaglia navale ogni casella ha una <b>lettera</b> (riga) e un <b>numero</b> (colonna): «B4, colpito!». Le coordinate geografiche funzionano allo stesso modo: la latitudine dice su quale «riga» (parallelo) sei, la longitudine su quale «colonna» (meridiano). L'unica differenza: sulla Terra la griglia è avvolta su una sfera e i numeri partono dal centro (0°) e vanno verso Nord/Sud ed Est/Ovest.</p>`, svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#e0f2fe"/><g stroke="#0369a1" stroke-width="1.5"><line x1="100" y1="40" x2="100" y2="280"/><line x1="180" y1="40" x2="180" y2="280"/><line x1="260" y1="40" x2="260" y2="280"/><line x1="340" y1="40" x2="340" y2="280"/><line x1="420" y1="40" x2="420" y2="280"/><line x1="500" y1="40" x2="500" y2="280"/><line x1="100" y1="40" x2="500" y2="40"/><line x1="100" y1="100" x2="500" y2="100"/><line x1="100" y1="160" x2="500" y2="160"/><line x1="100" y1="220" x2="500" y2="220"/><line x1="100" y1="280" x2="500" y2="280"/></g><line x1="100" y1="160" x2="500" y2="160" stroke="#f97316" stroke-width="4"/><line x1="300" y1="40" x2="300" y2="280" stroke="#dc2626" stroke-width="4"/><g font-family="sans-serif" font-size="14" fill="#0c4a6e"><text x="510" y="45">60° N</text><text x="510" y="105">30° N</text><text x="510" y="165" fill="#c2410c" font-weight="bold">0° Equatore</text><text x="510" y="225">30° S</text><text x="85" y="30">90° O</text><text x="165" y="30">60° O</text><text x="285" y="30" fill="#b91c1c" font-weight="bold">0°</text><text x="400" y="30">60° E</text></g><circle cx="335" cy="78" r="10" fill="#16a34a"/><text x="350" y="83" font-size="15" font-family="sans-serif" fill="#14532d" font-weight="bold">Roma ≈ 42° N, 12° E</text><circle cx="180" cy="82" r="10" fill="#2563eb"/><text x="110" y="70" font-size="14" font-family="sans-serif" fill="#1e3a8a">New York ≈ 41° N, 74° O</text></svg>` },
        { label: `📐 Il piano cartesiano`, html: `<p>In matematica un punto nel piano si indica con due numeri (x; y). Sulla Terra: la <b>longitudine</b> è come la <b>x</b> (destra = Est positivo, sinistra = Ovest negativo) e la <b>latitudine</b> è come la <b>y</b> (su = Nord positivo, giù = Sud negativo). L'origine (0; 0) è nel golfo di Guinea, dove l'Equatore incontra Greenwich. Attenzione però: in geografia si scrive prima la latitudine (y) e poi la longitudine (x)!</p>` },
        { label: `🍊 L'arancia a spicchi`, html: `<p>Prendi un'arancia: gli spicchi vanno da un «polo» all'altro come i <b>meridiani</b>, e sono tutti uguali come i <b>fusi orari</b>. Se la tagli a fette orizzontali, ogni fetta è un <b>parallelo</b>: la fetta centrale (l'Equatore) è la più grande, quelle verso le estremità sempre più piccole. Un'arancia con 24 spicchi sarebbe un perfetto modello dei fusi orari!</p>` },
        { label: `🌍 Globo con rotte`, html: `<p>Segui sul globo il parallelo di 40–42° N: unisce Roma, Madrid, New York, Pechino. Sono tutte città con stagioni simili, perché ricevono il Sole con inclinazioni simili.</p>`, scene: `globe`, options: { points: [ { lat: 41.9, lon: 12.5, label: `Roma`, color: `#16a34a` }, { lat: 40.42, lon: -3.7, label: `Madrid`, color: `#16a34a` }, { lat: 40.71, lon: -74.0, label: `New York`, color: `#16a34a` }, { lat: 39.9, lon: 116.4, label: `Pechino`, color: `#16a34a` }, { lat: 41.0, lon: 28.97, label: `Istanbul`, color: `#16a34a` } ], routes: [ { points: [2, 1, 0, 4, 3], color: `#f97316` } ] } }
      ]
    },
    {
      type: `widget`,
      title: `In quale emisfero si trova?`,
      widget: `classify`,
      options: { groups: [`Emisfero boreale (Nord)`, `Emisfero australe (Sud)`], items: [ [`🇮🇹 Roma`, 0], [`🇦🇺 Sydney`, 1], [`🇯🇵 Tokyo`, 0], [`🇦🇷 Buenos Aires`, 1], [`🇿🇦 Città del Capo`, 1], [`🇺🇸 New York`, 0], [`🇧🇷 Rio de Janeiro`, 1], [`🇪🇬 Il Cairo`, 0] ] },
      caption: `Ricorda: le città dell'emisfero australe hanno latitudine Sud (S).`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 2`,
      questions: [
        { type: `num`, q: `Di quanti gradi ruota la Terra in un'ora?`, answer: 15, tol: 0, unit: `°`, explain: `360° : 24 h = 15° all'ora.` },
        { type: `num`, q: `A Roma (UTC+1) è mezzogiorno (ore 12). Che ore sono a Mosca (UTC+3)?`, answer: 14, tol: 0, unit: `h`, explain: `Mosca è 2 fusi più a Est: 12 + 2 = 14.` },
        { type: `mc`, q: `Quale parallelo si trova a 23° 27′ Nord?`, options: [`Tropico del Capricorno`, `Circolo polare artico`, `Tropico del Cancro`, `Equatore`], answer: 2, explain: `Il Tropico del Cancro: il 21 giugno il Sole vi è allo zenit.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Mappa concettuale: l'indirizzo dei luoghi`,
      nodes: [
        { id: `sfera`, label: `Terra sferica che ruota`, x: 50, y: 8, color: `#0ea5e9`, html: `<p>Asse di rotazione, poli, rotazione in 24 ore.</p>`, why: `<p>Già Eratostene (III sec. a.C.) misurò la circonferenza terrestre con l'ombra di un bastone: trovò un valore molto vicino ai 40.000 km reali.</p>` },
        { id: `angoli`, label: `Misura in gradi`, x: 82, y: 22, color: `#ca8a04`, html: `<p>Gradi, primi, secondi (sistema sessagesimale).</p>`, why: `<p>Il cerchio diviso in 360° e i sottomultipli di 60 vengono dagli astronomi babilonesi, che contavano in base 60 (come facciamo ancora con ore e minuti).</p>` },
        { id: `paralleli`, label: `Paralleli → latitudine`, x: 20, y: 35, color: `#f97316`, html: `<p>Da 0° (Equatore) a 90° N o S.</p>`, why: `<p>L'Equatore è «naturale»: è il cerchio perpendicolare all'asse di rotazione. Per questo la latitudine si poteva misurare con le stelle fin dall'antichità.</p>` },
        { id: `meridiani`, label: `Meridiani → longitudine`, x: 50, y: 40, color: `#dc2626`, html: `<p>Da 0° (Greenwich) a 180° E o O.</p>`, why: `<p>Il meridiano zero è una <b>convenzione</b>: nel tempo se ne usarono molti (Parigi, Roma, isola del Ferro). Nel 1884 a Washington 25 Paesi scelsero Greenwich, perché la maggior parte delle carte nautiche lo usava già.</p>` },
        { id: `tropici`, label: `Tropici e circoli polari`, x: 15, y: 70, color: `#a855f7`, html: `<p>23° 27′ e 66° 33′.</p>`, why: `<p>Dipendono dall'inclinazione dell'asse terrestre (circa 23,4°): i tropici sono a 23,4° dall'Equatore, i circoli polari a 90° − 23,4° ≈ 66,6°.</p>` },
        { id: `coordinate`, label: `Coordinate geografiche`, x: 42, y: 70, color: `#16a34a`, html: `<p>Prima la latitudine, poi la longitudine.</p>`, why: `<p>Il reticolato fu usato sistematicamente da Tolomeo (II sec. d.C.) nella sua <i>Geografia</i>, che elencava circa 8.000 luoghi con le loro coordinate.</p>` },
        { id: `fusi`, label: `Fusi orari`, x: 78, y: 62, color: `#2563eb`, html: `<p>24 fusi di 15°, UTC, ora legale, linea del cambiamento di data.</p>`, why: `<p>Fino all'Ottocento ogni città usava l'ora del proprio Sole. Con le ferrovie servivano orari comuni: il canadese Sandford Fleming propose i 24 fusi (1879). L'Italia adottò l'ora dell'Europa centrale nel 1893.</p>` },
        { id: `gps`, label: `Navigazione e GPS`, x: 68, y: 90, color: `#475569`, html: `<p>Dal cronometro di Harrison al GPS.</p>`, why: `<p>Misurare la longitudine richiede di misurare il <b>tempo</b>: il GPS funziona proprio grazie a orologi atomici a bordo dei satelliti, precisissimi.</p>` }
      ],
      edges: [ [`sfera`, `paralleli`, `asse e Equatore`], [`sfera`, `meridiani`, `poli`], [`angoli`, `meridiani`, `misura`], [`angoli`, `paralleli`, `misura`], [`paralleli`, `tropici`, `speciali`], [`paralleli`, `coordinate`, `latitudine`], [`meridiani`, `coordinate`, `longitudine`], [`meridiani`, `fusi`, `15° = 1 ora`], [`fusi`, `gps`, `tempo`] ]
    }
  ],
  glossary: [
    { t: `Reticolato geografico`, d: `Insieme di paralleli e meridiani tracciati idealmente sulla Terra.` },
    { t: `Parallelo`, d: `Cerchio immaginario parallelo all'Equatore.` },
    { t: `Meridiano`, d: `Semicirconferenza immaginaria che unisce i due poli.` },
    { t: `Latitudine`, d: `Distanza angolare di un punto dall'Equatore (0°–90° N o S).` },
    { t: `Longitudine`, d: `Distanza angolare di un punto dal meridiano di Greenwich (0°–180° E o O).` },
    { t: `Emisfero`, d: `Metà della Terra: boreale/australe (divisi dall'Equatore), orientale/occidentale (da Greenwich e 180°).` },
    { t: `Fuso orario`, d: `Spicchio di circa 15° di longitudine in cui vale la stessa ora.` },
    { t: `UTC`, d: `Tempo coordinato universale, l'ora di riferimento mondiale.` },
    { t: `Linea del cambiamento di data`, d: `Linea vicina al meridiano 180° dove cambia la data del calendario.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale linea divide la Terra in emisfero boreale e australe?`, options: [`Il meridiano di Greenwich`, `L'Equatore`, `Il Tropico del Cancro`, `La linea del cambiamento di data`], answer: 1, explain: `L'Equatore separa Nord e Sud.` },
      { type: `text`, q: `Come si chiama il meridiano fondamentale (0°)?`, answer: [`greenwich`, `meridiano di greenwich`, `il meridiano di greenwich`], explain: `Passa per l'osservatorio di Greenwich, vicino a Londra.` },
      { type: `mc`, q: `Come si scrivono le coordinate di un punto?`, options: [`Prima la longitudine, poi la latitudine`, `Prima la latitudine, poi la longitudine`, `Solo la latitudine`, `Non c'è un ordine`], answer: 1, explain: `Es. Roma 41° 54′ N, 12° 30′ E.` },
      { type: `tf`, q: `I paralleli sono tutti della stessa lunghezza.`, answer: false, explain: `L'Equatore è il più lungo; verso i poli si accorciano.` },
      { type: `num`, q: `Quanti fusi orari principali ci sono?`, answer: 24, tol: 0, explain: `Uno per ogni ora del giorno.` },
      { type: `num`, q: `A Roma (UTC+1) sono le 10. Che ore sono a Londra (UTC+0)?`, answer: 9, tol: 0, unit: `h`, explain: `Londra è un fuso più a Ovest: 10 − 1 = 9.` },
      { type: `num`, q: `Se a Roma (UTC+1) sono le 20, che ore sono a Los Angeles (UTC−8)?`, answer: 11, tol: 0, unit: `h`, explain: `Differenza 1 − (−8) = 9 ore verso Ovest: 20 − 9 = 11.` },
      { type: `mc`, q: `Quale latitudine ha il Polo Sud?`, options: [`0°`, `90° N`, `90° S`, `180°`], answer: 2, explain: `I poli hanno latitudine 90°, Nord o Sud.` },
      { type: `order`, q: `Ordina i paralleli da Nord a Sud`, items: [`Circolo polare artico`, `Tropico del Cancro`, `Equatore`, `Tropico del Capricorno`, `Circolo polare antartico`], explain: `66° 33′ N, 23° 27′ N, 0°, 23° 27′ S, 66° 33′ S.` },
      { type: `mc`, q: `Perché era difficile misurare la longitudine in mare?`, options: [`Mancavano le stelle`, `Servivano orologi precisi, che sulle navi non funzionavano`, `La bussola non indicava l'Est`, `Il mare era troppo profondo`], answer: 1, explain: `Il problema fu risolto dal cronometro di John Harrison nel Settecento.` },
      { type: `tf`, q: `Roma e New York hanno una latitudine simile.`, answer: true, explain: `Roma circa 42° N, New York circa 41° N.` }
    ],
    gen: [ [`intAdd`, 2] ]
  }
});
