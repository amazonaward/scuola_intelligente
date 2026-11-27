TOPIC('it', {
  id: "l1-sci-moti-terra",
  title: "I moti della Terra e della Luna",
  intro: "Non ci accorgiamo di nulla, eppure in questo momento stai ruotando intorno all'asse terrestre a più di 1000 km/h (a latitudini medie) e viaggiando intorno al Sole a circa 30 km al secondo. Da questi due moti dipendono il giorno e la notte, le stagioni, i fusi orari. E la Luna, con le sue fasi, le maree e le eclissi, completa lo spettacolo. In questa lezione scopriamo la <b>geometria del cielo</b> e perché fa caldo d'estate anche se in estate la Terra è <i>più lontana</i> dal Sole.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "La rotazione terrestre",
      html: `<p>La Terra ruota attorno al proprio <b>asse</b> (la retta che passa per i poli) da <b>ovest verso est</b> (senso antiorario visto dal Polo Nord). Per questo il Sole, la Luna e le stelle sembrano sorgere a est e tramontare a ovest.</p>
<ul>
<li>Il <b>giorno sidereo</b> (rispetto alle stelle) dura <b>23 h 56 min 4 s</b>.</li>
<li>Il <b>giorno solare</b> (da un mezzogiorno al successivo) dura in media <b>24 ore</b>. È un po' più lungo perché, mentre la Terra ruota, si sposta anche sulla sua orbita e deve girare per circa 4 minuti in più per riportare il Sole nella stessa posizione.</li>
<li>La velocità di un punto della superficie dipende dalla latitudine: all'equatore è circa <b>1670 km/h</b>, a Roma (circa 42° N) circa 1240 km/h, ai poli nulla.</li>
</ul>
<p>Conseguenze della rotazione:</p>
<ul>
<li>l'<b>alternarsi del dì e della notte</b>;</li>
<li>lo <b>schiacciamento polare</b> (la Terra è un geoide);</li>
<li>la <b>deviazione dei corpi in movimento</b> per effetto della <b>forza di Coriolis</b>: verso destra nell'emisfero nord, verso sinistra nel sud (importante per venti e correnti, ma non per lo scarico del lavandino, che dipende da altri fattori);</li>
<li>le <b>maree</b> si spiegano con Luna e Sole, ma la rotazione le fa "correre" sul pianeta.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Il pendolo di Foucault: la prova che la Terra ruota",
      html: `<p>Nel 1851 il fisico francese <b>Léon Foucault</b> appese a una volta del Panthéon di Parigi una sfera di 28 kg con un cavo di 67 metri. Il pendolo oscillava, e il piano di oscillazione ruotava lentamente: il pavimento, cioè la Terra, ruotava sotto di esso. A Parigi il piano compie un giro completo in circa 32 ore; ai poli in 24 ore; all'equatore non ruota. Fu la prima dimostrazione diretta, in laboratorio, della rotazione terrestre.</p>`
    },
    {
      type: "text",
      title: "La rivoluzione e l'inclinazione dell'asse",
      html: `<p>La Terra percorre un'orbita ellittica quasi circolare intorno al Sole, nello stesso senso della rotazione (antiorario visto dal Polo Nord). L'<b>anno sidereo</b> dura <b>365,256 giorni</b>; l'<b>anno tropico</b> (da equinozio a equinozio, su cui si basa il calendario) circa <b>365,242 giorni</b>. Da qui gli <b>anni bisestili</b> (calendario gregoriano, 1582): ogni 4 anni un giorno in più, tranne gli anni secolari non divisibili per 400 (il 1900 non fu bisestile, il 2000 sì).</p>
<p>La distanza Terra-Sole varia poco: <b>perielio</b> circa 147,1 milioni di km (inizio gennaio), <b>afelio</b> circa 152,1 milioni di km (inizio luglio). La differenza è di soli 3%: <b>non è la distanza a causare le stagioni</b>.</p>
<p>La vera causa è l'<b>inclinazione dell'asse</b> terrestre: l'asse forma un angolo di circa <b>23,4°</b> (23° 27') con la perpendicolare al <b>piano dell'orbita</b> (detto <b>eclittica</b>), e durante l'anno <b>mantiene la stessa direzione nello spazio</b> (punta più o meno verso la Stella Polare). Perciò per metà anno è inclinato verso il Sole l'emisfero nord e per l'altra metà l'emisfero sud.</p>`
    },
    {
      type: "svg",
      title: "Le stagioni: perché cambiano",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#0f172a"/>
<circle cx="320" cy="160" r="26" fill="#facc15"/><text x="320" y="205" font-size="14" text-anchor="middle" fill="#fde68a">Sole</text>
<ellipse cx="320" cy="160" rx="240" ry="105" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
<g>
<circle cx="80" cy="160" r="20" fill="#3b82f6"/><line x1="68" y1="190" x2="92" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="80" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21 giugno</text><text x="80" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">solstizio estate N</text>
<circle cx="560" cy="160" r="20" fill="#3b82f6"/><line x1="548" y1="190" x2="572" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="560" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21 dicembre</text><text x="560" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">solstizio inverno N</text>
<circle cx="320" cy="265" r="20" fill="#3b82f6"/><line x1="308" y1="295" x2="332" y2="235" stroke="#f8fafc" stroke-width="3"/><text x="320" y="312" font-size="14" text-anchor="middle" fill="#e2e8f0">equinozio</text>
<circle cx="320" cy="55" r="20" fill="#3b82f6"/><line x1="308" y1="85" x2="332" y2="25" stroke="#f8fafc" stroke-width="3"/><text x="320" y="20" font-size="14" text-anchor="middle" fill="#e2e8f0">equinozio</text>
</g>
<text x="140" y="60" font-size="14" fill="#93c5fd">asse sempre parallelo a se stesso</text>
</svg>`,
      caption: "L'asse (linea bianca) punta sempre nella stessa direzione: a giugno l'emisfero nord è inclinato verso il Sole, a dicembre in direzione opposta."
    },
    {
      type: "text",
      title: "Solstizi, equinozi e stagioni",
      html: `<p>Quando l'emisfero nord è inclinato verso il Sole i raggi arrivano <b>più verticali</b> e il Sole sta in cielo <b>più a lungo</b>: l'energia per metro quadro è maggiore e c'è più tempo per scaldare. È estate. Sei mesi dopo accade il contrario. Le stagioni dell'emisfero sud sono sempre opposte a quelle dell'emisfero nord (a Natale in Australia è estate).</p>
<table>
<tr><th>Data (circa)</th><th>Evento</th><th>Cosa succede (emisfero nord)</th></tr>
<tr><td>20-21 marzo</td><td><b>Equinozio di primavera</b></td><td>giorno e notte uguali (12 h) ovunque; il Sole è allo zenit sull'equatore</td></tr>
<tr><td>20-21 giugno</td><td><b>Solstizio d'estate</b></td><td>giorno più lungo; Sole allo zenit sul Tropico del Cancro (23,4° N)</td></tr>
<tr><td>22-23 settembre</td><td><b>Equinozio d'autunno</b></td><td>giorno e notte uguali</td></tr>
<tr><td>21-22 dicembre</td><td><b>Solstizio d'inverno</b></td><td>giorno più corto; Sole allo zenit sul Tropico del Capricorno (23,4° S)</td></tr>
</table>
<p>Il <b>Sole a mezzogiorno</b> ha un'altezza massima sull'orizzonte pari a <b>90° − latitudine + declinazione</b>. A Roma (42° N) il 21 giugno è 90 − 42 + 23,4 = <b>71,4°</b>; il 21 dicembre è 90 − 42 − 23,4 = <b>24,6°</b>.</p>
<p>Le <b>zone astronomiche</b>: zona torrida tra i tropici (±23,4°); zone temperate tra i tropici e i circoli polari; zone glaciali dai <b>circoli polari</b> (±66,6°) ai poli, dove si hanno il <b>sole di mezzanotte</b> d'estate e la notte polare d'inverno.</p>`
    },
    {
      type: "example",
      title: "L'altezza del Sole a Milano",
      html: `<p>Milano ha latitudine circa <b>45,5° N</b>. Quanto è alto il Sole a mezzogiorno agli equinozi e ai solstizi?</p>
<ul>
<li>Equinozio (declinazione 0°): 90 − 45,5 = <b>44,5°</b></li>
<li>Solstizio d'estate: 90 − 45,5 + 23,4 = <b>67,9°</b></li>
<li>Solstizio d'inverno: 90 − 45,5 − 23,4 = <b>21,1°</b></li>
</ul>
<p>L'ombra di un palo alto 2 m a mezzogiorno è lunga 2 / tan(21,1°) ≈ 5,2 m a dicembre, ma solo 2 / tan(67,9°) ≈ 0,8 m a giugno. È con questa idea che le meridiane segnano le stagioni.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: stagioni e rotazione",
      questions: [
        { type: "mc", q: "La causa delle stagioni è…", options: ["la variazione della distanza dal Sole", "l'inclinazione dell'asse terrestre", "la rotazione sul proprio asse"], answer: 1, explain: "L'asse inclinato di 23,4° fa variare l'angolo con cui arrivano i raggi e la durata del dì." },
        { type: "tf", q: "A dicembre la Terra è più vicina al Sole che a giugno.", answer: true, explain: "Il perielio è in gennaio: l'inverno boreale accade con la Terra più vicina al Sole." },
        { type: "num", q: "A che altezza massima arriva il Sole sull'orizzonte in un luogo a 40° N all'equinozio?", answer: 50, unit: "°", explain: "90 − 40 = 50°." }
      ]
    },
    {
      type: "3d",
      title: "Il globo e i paralleli notevoli",
      scene: "globe",
      options: { points: [
        { lat: 0, lon: 0, label: "Equatore / Greenwich", color: "#ef4444" },
        { lat: 23.4, lon: 30, label: "Tropico del Cancro", color: "#f97316" },
        { lat: -23.4, lon: 30, label: "Tropico del Capricorno", color: "#f97316" },
        { lat: 66.6, lon: 30, label: "Circolo polare artico", color: "#3b82f6" },
        { lat: 41.9, lon: 12.5, label: "Roma", color: "#16a34a" }
      ], routes: [] },
      caption: "Ruota il globo: i tropici segnano il limite fino al quale il Sole può trovarsi allo zenit; i circoli polari il limite del sole di mezzanotte."
    },
    {
      type: "text",
      title: "I fusi orari",
      html: `<p>La Terra ruota di 360° in 24 ore, cioè <b>15° all'ora</b> (1° ogni 4 minuti). Il Sole culmina (è "mezzogiorno") in momenti diversi a seconda della longitudine: Roma (12,5° E) e Torino (7,7° E) differiscono di circa 4,8°, quindi il mezzogiorno vero arriva a Torino circa 19 minuti dopo che a Roma. Nell'Ottocento ogni città aveva la propria ora e gli orari ferroviari diventavano impossibili: nel 1884, alla <b>Conferenza internazionale del meridiano</b> di Washington, si scelse come origine il <b>meridiano di Greenwich</b> (longitudine 0°) e si divise il globo in <b>24 fusi</b> di 15°.</p>
<ul>
<li>Spostandosi a <b>est</b> l'ora <b>avanza</b> (si guadagnano ore), a <b>ovest</b> <b>arretra</b>.</li>
<li>L'Italia sta nel fuso dell'Europa centrale (<b>CET = UTC+1</b>, meridiano 15° E, che passa vicino all'Etna); in estate l'<b>ora legale</b> porta a UTC+2.</li>
<li>La <b>linea del cambiamento di data</b> (circa 180° di longitudine, nel Pacifico) è dove si passa da un giorno al successivo: andando verso ovest si <b>aggiunge</b> un giorno.</li>
</ul>
<p>Molti Paesi usano fusi non rigorosamente centrati sui meridiani: la Cina, che copre cinque fusi geografici, usa un'ora sola (UTC+8).</p>`
    },
    {
      type: "example",
      title: "Che ora è a New York?",
      html: `<p>A Roma sono le <b>18:00</b> (CET, UTC+1). New York è a UTC−5 (ora solare). Che ora è a New York?</p>
<ol>
<li>Differenza tra i fusi: +1 − (−5) = 6 ore.</li>
<li>New York è a ovest, quindi l'ora è <b>arretrata</b>: 18:00 − 6 h = <b>12:00</b>.</li>
</ol>
<p>Per Tokyo (UTC+9): differenza 9 − 1 = 8 ore, a est: 18:00 + 8 = <b>02:00 del giorno dopo</b>.</p>`
    },
    {
      type: "text",
      title: "La Luna e i suoi moti",
      html: `<p>La Luna è il nostro unico satellite naturale: diametro 3474 km (circa un quarto di quello terrestre), distanza media <b>384 400 km</b>. Compie tre moti:</p>
<ul>
<li><b>Rotazione</b> su sé stessa in 27,3 giorni;</li>
<li><b>Rivoluzione</b> attorno alla Terra in 27,3 giorni (<b>mese sidereo</b>);</li>
<li><b>Traslazione</b> con la Terra intorno al Sole.</li>
</ul>
<p>Poiché rotazione e rivoluzione durano lo stesso tempo (<b>rotazione sincrona</b>, dovuta alle forze di marea), la Luna ci mostra <b>sempre la stessa faccia</b>. L'altra faccia (non "oscura", ma "nascosta") fu fotografata per la prima volta dalla sonda sovietica <b>Luna 3</b> nel 1959.</p>
<p>Le <b>fasi lunari</b> dipendono dalla posizione relativa di Sole, Terra e Luna: la Luna è sempre illuminata per metà dal Sole, ma noi ne vediamo una parte diversa. Il ciclo (<b>mese sinodico</b> o lunazione) dura <b>29,53 giorni</b>, più del mese sidereo perché nel frattempo la Terra si è spostata sull'orbita e la Luna deve "rincorrere" il Sole per allinearsi di nuovo.</p>
<table>
<tr><th>Fase</th><th>Posizione</th><th>Aspetto</th></tr>
<tr><td><b>Luna nuova</b></td><td>Luna tra Terra e Sole</td><td>invisibile</td></tr>
<tr><td>Primo quarto</td><td>a 90° dal Sole</td><td>metà destra illuminata (emisfero nord), sorge a mezzogiorno</td></tr>
<tr><td><b>Luna piena</b></td><td>Terra tra Sole e Luna</td><td>tutto il disco; sorge al tramonto</td></tr>
<tr><td>Ultimo quarto</td><td>a 90° dal Sole</td><td>metà sinistra illuminata; sorge a mezzanotte</td></tr>
</table>
<p>Regola della "gobba" (emisfero nord): se la Luna ha la forma di una D (<b>gobba a Ponente</b>, cioè verso ovest) sta <b>crescendo</b>; se ha la forma di una C (gobba a Levante) sta <b>calando</b>.</p>`
    },
    {
      type: "svg",
      title: "Le fasi lunari",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">Le fasi viste dalla Terra (emisfero nord), nel corso di un mese</text>
<g>
<circle cx="70" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
<circle cx="190" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M190 74 A36 36 0 0 1 190 146 A18 36 0 0 0 190 74 Z" fill="#fde68a"/>
<circle cx="310" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M310 74 A36 36 0 0 1 310 146 Z" fill="#fde68a"/>
<circle cx="430" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M430 74 A36 36 0 0 1 430 146 A18 36 0 0 1 430 74 Z" fill="#fde68a"/>
<circle cx="550" cy="110" r="36" fill="#fde68a" stroke="#64748b" stroke-width="2"/>
</g>
<g font-size="14" fill="#e2e8f0" text-anchor="middle">
<text x="70" y="175">Nuova</text><text x="190" y="175">Crescente</text><text x="310" y="175">Primo quarto</text><text x="430" y="175">Gibbosa</text><text x="550" y="175">Piena</text>
<text x="70" y="195" fill="#94a3b8">giorno 0</text><text x="190" y="195" fill="#94a3b8">~3-4</text><text x="310" y="195" fill="#94a3b8">~7,4</text><text x="430" y="195" fill="#94a3b8">~11</text><text x="550" y="195" fill="#94a3b8">~14,8</text>
</g>
<text x="320" y="250" font-size="15" text-anchor="middle" fill="#cbd5e1">Poi la Luna cala: gibbosa, ultimo quarto (giorno ~22), calante, e di nuovo nuova (29,5)</text>
<text x="320" y="275" font-size="14" text-anchor="middle" fill="#94a3b8">La parte illuminata sta sempre dal lato del Sole</text>
</svg>`,
      caption: "La Luna non cambia forma: cambia la porzione della sua metà illuminata che è rivolta verso di noi."
    },
    {
      type: "text",
      title: "Le eclissi",
      html: `<p>Un'<b>eclissi</b> avviene quando Sole, Terra e Luna sono allineati.</p>
<ul>
<li><b>Eclissi di Sole</b>: la Luna si interpone tra Terra e Sole, a Luna <b>nuova</b>. La sua ombra cade sulla Terra e chi si trova nella zona d'ombra (una striscia larga al massimo circa 270 km) vede l'eclissi <b>totale</b>, durata massima circa 7 minuti e mezzo. Fuori, nella <b>penombra</b>, è parziale. È una coincidenza fortunata che il Sole sia circa 400 volte più grande della Luna e circa 400 volte più distante: i due dischi appaiono quasi uguali nel cielo. Se la Luna è al punto più lontano, l'eclissi è <b>anulare</b>.</li>
<li><b>Eclissi di Luna</b>: la Terra si interpone, a Luna <b>piena</b>, e la Luna entra nell'ombra terrestre. Si vede da tutta la metà di Terra in cui è notte, dura fino a quasi due ore di totalità; la Luna non sparisce ma diventa <b>rossastra</b>, perché l'atmosfera terrestre devia verso la Luna la luce rossa del Sole (come in un tramonto).</li>
</ul>
<p>Perché non c'è un'eclissi a ogni luna nuova e piena? Perché l'orbita lunare è inclinata di circa <b>5,1°</b> rispetto all'eclittica: di solito la Luna passa un po' sopra o sotto il Sole o l'ombra terrestre. Si ha un'eclissi solo se la Luna è vicina ai <b>nodi</b>, i due punti in cui la sua orbita attraversa il piano dell'eclittica. Ogni anno ci sono da 4 a 7 eclissi (solari e lunari insieme).</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le fasi lunari",
      intro: "Le fasi sono un classico equivoco: non c'entra l'ombra della Terra. Prova a ricrearle.",
      tabs: [
        {
          label: "💡 L'esperimento della lampada",
          html: `<p>In una stanza buia, accendi una lampada (il Sole) e tieni in mano una palla (la Luna), mentre la tua testa è la Terra. Girando su te stesso con la palla tesa davanti a te, vedrai la palla illuminata come in tutte le fasi: piena quando è opposta alla lampada, nuova quando tra te e la lampada. L'ombra della tua testa cade sulla palla solo in una posizione precisa: l'eclissi di Luna.</p>`
        },
        {
          label: "🧭 Quando sorge e quando tramonta",
          html: `<p>Un modo per riconoscere la fase dall'orario: la Luna <b>nuova</b> sorge e tramonta con il Sole; la <b>piena</b> sorge quando il Sole tramonta (e viceversa); il <b>primo quarto</b> sorge a mezzogiorno e tramonta a mezzanotte; l'<b>ultimo quarto</b> sorge a mezzanotte e tramonta a mezzogiorno. Ogni giorno la Luna sorge in media circa 50 minuti più tardi del giorno prima, perché si sposta di circa 12-13° verso est sul suo cammino.</p>`
        },
        {
          label: "🌊 Perché ci sono le maree?",
          html: `<p>La gravità lunare attira l'acqua dalla parte rivolta alla Luna e, per l'effetto differenziale, genera anche un rigonfiamento dalla parte opposta: due alte e due basse al giorno (ogni circa 12 ore e 25 minuti). Con Luna <b>nuova</b> e <b>piena</b> Sole e Luna si sommano: maree più ampie, le <b>sigizie</b> (maree vive). Ai quarti si ostacolano: maree più deboli, le <b>quadrature</b>. Nel Mediterraneo le maree sono piccole (pochi decimetri, ma a Venezia fino a circa 1 m), nella baia di Fundy in Canada superano i 15 m.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "La Luna si allontana",
      html: `<p>Gli specchi lasciati dagli astronauti dell'Apollo sulla Luna (1969-1972) permettono di misurare con laser la distanza Terra-Luna con precisione di millimetri. Risultato: la Luna si allontana di circa <b>3,8 cm all'anno</b>, mentre la rotazione della Terra rallenta. Un miliardo di anni fa i giorni duravano circa 19-20 ore, e fra molti miliardi di anni un'eclissi totale di Sole non sarà più possibile, perché la Luna apparirà troppo piccola per coprire il disco solare. Per questo si pensa che la Luna si sia formata circa 4,5 miliardi di anni fa, dall'impatto tra la proto-Terra e un corpo grande come Marte (<b>Theia</b>).</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa dei moti: tocca i nodi e scopri il perché",
      nodes: [
        { id: "rot", label: "Rotazione", x: 18, y: 8, color: "#3b82f6", html: "Giro della Terra su sé stessa in 24 h.", why: "Fu proposta da <b>Eraclide Pontico</b> (IV sec. a.C.) e sostenuta da Copernico; dimostrata da <b>Foucault</b> nel 1851. Produce giorno e notte, Coriolis e lo schiacciamento ai poli." },
        { id: "riv", label: "Rivoluzione", x: 82, y: 8, color: "#22c55e", html: "Giro attorno al Sole in circa 365,25 giorni.", why: "Con <b>Copernico</b> (1543) e Galileo perse l'immobilità della Terra. La conferma venne dalla <b>parallasse stellare</b> (Bessel, 1838) e dall'aberrazione della luce (Bradley, 1729)." },
        { id: "asse", label: "Asse inclinato (23,4°)", x: 50, y: 32, color: "#f97316", html: "L'asse non è perpendicolare all'orbita.", why: "Secondo l'ipotesi più accreditata, l'inclinazione è dovuta all'impatto che formò la Luna circa 4,5 miliardi di anni fa. La Luna fa da stabilizzatore: senza di essa l'angolo potrebbe variare molto, con effetti drastici sul clima." },
        { id: "stag", label: "Stagioni", x: 82, y: 40, color: "#ef4444", html: "Cambio dell'angolo dei raggi e della durata del dì.", why: "Una convinzione diffusa ma sbagliata è che dipendano dalla distanza dal Sole: ma la Terra è più vicina in gennaio, e l'emisfero sud ha l'estate a Natale." },
        { id: "fusi", label: "Fusi orari", x: 18, y: 44, color: "#eab308", html: "24 fusi da 15°.", why: "Nati con le ferrovie e i telegrafi: 1884, Conferenza di Washington, con il meridiano di Greenwich come origine." },
        { id: "luna", label: "Moti della Luna", x: 50, y: 62, color: "#a855f7", html: "Rotazione sincrona, rivoluzione in 27,3 giorni.", why: "La rotazione sincrona è dovuta alle forze di marea che la Terra esercitò sulla Luna in miliardi di anni, frenandone la rotazione fino a farla coincidere con la rivoluzione." },
        { id: "fasi", label: "Fasi lunari", x: 18, y: 82, color: "#06b6d4", html: "Ciclo di 29,53 giorni.", why: "Già <b>Aristarco di Samo</b> (III sec. a.C.) ricavò dalla fase di mezza Luna la distanza relativa di Sole e Luna, con un metodo geometrico corretto ma sbagliato nelle misure." },
        { id: "ecl", label: "Eclissi", x: 82, y: 82, color: "#14b8a6", html: "Allineamento Sole-Terra-Luna.", why: "I Babilonesi scoprirono il <b>ciclo di Saros</b> (circa 18 anni e 11 giorni), dopo il quale le eclissi si ripetono quasi uguali, e lo usavano per prevederle. Le eclissi non sono mensili perché l'orbita lunare è inclinata di 5,1°." }
      ],
      edges: [
        ["rot", "fusi", "origina"],
        ["riv", "stag", "con l'asse inclinato dà"],
        ["asse", "stag", "causa"],
        ["luna", "fasi", "origina"],
        ["luna", "ecl", "se allineata dà"],
        ["rot", "luna", "ruota come"],
        ["riv", "asse", "mantiene"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la Luna",
      questions: [
        { type: "mc", q: "Perché vediamo sempre la stessa faccia della Luna?", options: ["Perché la Luna non ruota", "Perché rotazione e rivoluzione durano lo stesso tempo", "Perché l'altra faccia è sempre in ombra"], answer: 1, explain: "È la rotazione sincrona. L'altra faccia riceve luce quanto la prima." },
        { type: "mc", q: "In quale fase lunare può verificarsi un'eclissi di Sole?", options: ["Luna piena", "Luna nuova", "Primo quarto"], answer: 1, explain: "La Luna deve stare tra la Terra e il Sole, quindi mostra a noi il lato non illuminato." },
        { type: "num", q: "A Roma sono le 12:00 (UTC+1). Che ora è a Londra (UTC+0), in ore?", answer: 11, unit: "h", explain: "Londra è a ovest: l'ora arretra di 1 ora." }
      ]
    }
  ],
  glossary: [
    { t: "Rotazione", d: "Moto della Terra attorno al proprio asse, in 24 ore." },
    { t: "Rivoluzione", d: "Moto della Terra attorno al Sole, in circa 365,25 giorni." },
    { t: "Eclittica", d: "Piano dell'orbita terrestre attorno al Sole." },
    { t: "Solstizio", d: "Momento in cui il Sole raggiunge la massima declinazione nord o sud: giorno più lungo o più corto." },
    { t: "Equinozio", d: "Momento in cui il dì e la notte hanno la stessa durata." },
    { t: "Fuso orario", d: "Ciascuna delle 24 fasce di 15° di longitudine con la stessa ora." },
    { t: "Mese sinodico", d: "Intervallo tra due fasi uguali della Luna: 29,53 giorni." },
    { t: "Rotazione sincrona", d: "Condizione in cui un corpo ruota in un tempo uguale a quello della sua rivoluzione." },
    { t: "Eclissi di Sole", d: "La Luna copre il Sole alla Terra (Luna nuova)." },
    { t: "Eclissi di Luna", d: "La Luna passa nell'ombra della Terra (Luna piena)." },
    { t: "Maree", d: "Oscillazioni del livello del mare dovute all'attrazione di Luna e Sole." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quanto dura il giorno solare medio?", options: ["23 h 56 min", "24 h", "27 giorni"], answer: 1, explain: "Il giorno solare medio dura 24 ore (il giorno sidereo 23 h 56 min)." },
      { type: "tf", q: "Le stagioni sono dovute alla distanza della Terra dal Sole.", answer: false, explain: "Dipendono dall'inclinazione dell'asse terrestre." },
      { type: "mc", q: "Quale evento avviene il 21 giugno nell'emisfero nord?", options: ["Equinozio di primavera", "Solstizio d'estate", "Equinozio d'autunno"], answer: 1, explain: "Il giorno più lungo dell'anno." },
      { type: "num", q: "Qual è l'altezza massima del Sole a mezzogiorno al solstizio d'estate a 45° N? (declinazione 23,4°)", answer: 68.4, tol: 0.2, unit: "°", explain: "90 − 45 + 23,4 = 68,4°." },
      { type: "num", q: "In quanti minuti la Terra ruota di 1° di longitudine?", answer: 4, unit: "min", explain: "360° in 24 ore: 1° ogni 4 minuti." },
      { type: "mc", q: "Perché la Luna ci mostra sempre la stessa faccia?", options: ["Rotazione sincrona", "La Luna è ferma", "Le maree la fermano"], answer: 0, explain: "Rotazione e rivoluzione durano entrambe circa 27,3 giorni." },
      { type: "tf", q: "Un'eclissi di Luna avviene a Luna piena.", answer: true, explain: "La Terra è tra Sole e Luna e la Luna entra nel cono d'ombra." },
      { type: "mc", q: "Perché non c'è un'eclissi a ogni Luna nuova?", options: ["L'orbita lunare è inclinata di circa 5° sull'eclittica", "La Luna è troppo piccola", "La Terra ruota"], answer: 0, explain: "Di solito la Luna passa sopra o sotto la linea Sole-Terra." },
      { type: "order", q: "Metti in ordine le fasi lunari dopo la Luna nuova.", items: ["Luna crescente", "Primo quarto", "Luna piena", "Ultimo quarto"], explain: "Il ciclo completo dura 29,5 giorni." },
      { type: "text", q: "Quale fisico francese dimostrò la rotazione terrestre con un pendolo nel 1851?", answer: ["foucault", "leon foucault", "léon foucault"], explain: "Léon Foucault, al Panthéon di Parigi." }
    ]
  }
});
