TOPIC('it', {
  id: "l1-geo-strumenti",
  title: "Gli strumenti della geografia",
  intro: "Il geografo non si limita a descrivere il mondo: lo <b>misura</b>, lo <b>rappresenta</b> e lo <b>interpreta</b>. In questa lezione impari a leggere una <b>carta</b>, a usare la <b>scala</b> e le <b>coordinate</b>, a capire perché ogni mappa deforma la realtà, e scopri come <b>GPS</b> e <b>GIS</b> hanno cambiato il modo di studiare il territorio.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Rappresentare la Terra: carte, piante, mappe",
      html: `<p>La Terra è (quasi) una sfera, ma noi abbiamo bisogno di rappresentarla su un foglio o su uno schermo piatto. Ogni rappresentazione è una <b>riduzione</b> della realtà, fatta con uno scopo. Le principali sono:</p>
<ul>
<li><b>Pianta</b> 🏙️: rappresenta un'area molto piccola (una città, un edificio) con grandissimo dettaglio; scale tipiche da 1:1.000 a 1:10.000.</li>
<li><b>Carta topografica</b> 🥾: mostra un territorio con strade, fiumi, boschi, edifici e il rilievo, ad esempio le carte dell'IGM (Istituto Geografico Militare) in scala 1:25.000, quelle usate da escursionisti e alpinisti.</li>
<li><b>Carta geografica</b> 🗺️: area più vasta (una regione, uno Stato), meno dettagli, scala intorno a 1:100.000–1:1.000.000.</li>
<li><b>Planisfero</b> 🌍: tutta la superficie terrestre su un piano; scale di centinaia di milioni.</li>
<li><b>Carta tematica</b> 📊: mostra <b>un solo fenomeno</b> (densità di popolazione, clima, reddito, voto) sopra una base geografica semplice.</li>
</ul>
<p>Ogni carta ha alcuni elementi fissi: <b>titolo</b>, <b>orientamento</b> (di solito il nord in alto), <b>scala</b>, <b>legenda</b> (che spiega i simboli e i colori) e, se serve, il <b>reticolato geografico</b>.</p>`
    },
    {
      type: "text",
      title: "2. La scala: quanto è ridotta la realtà",
      html: `<p>La <b>scala</b> è il rapporto tra una distanza misurata sulla carta e la distanza reale corrispondente. Si può indicare in tre modi:</p>
<ul>
<li><b>numerica</b>: 1:50.000 significa che 1 cm sulla carta corrisponde a 50.000 cm (cioè <b>500 m</b>) nella realtà;</li>
<li><b>grafica</b>: un segmento graduato con le distanze reali (utile perché non cambia se ingrandisci o riduci la fotocopia);</li>
<li><b>a parole</b>: \"1 cm = 500 m\".</li>
</ul>
<p>Attenzione al paradosso: una scala <b>grande</b> come 1:1.000 (frazione grande, 1/1.000) mostra un'area <b>piccola</b> con molti dettagli; una scala <b>piccola</b> come 1:10.000.000 mostra un'area <b>vasta</b> con pochi dettagli.</p>
<p><b>Formule utili</b> (con D = distanza sulla carta, R = distanza reale, N = denominatore della scala):</p>
<p style="text-align:center"><b>R = D × N</b> &nbsp;&nbsp;&nbsp; <b>D = R ÷ N</b> &nbsp;&nbsp;&nbsp; <b>N = R ÷ D</b></p>`
    },
    {
      type: "example",
      title: "Esempio pratico: misurare un percorso",
      html: `<p>Su una carta in scala <b>1:50.000</b> il sentiero dal rifugio alla cima misura <b>7,2 cm</b>. Quanto è lungo nella realtà?</p>
<p>R = 7,2 cm × 50.000 = 360.000 cm = <b>3.600 m = 3,6 km</b>.</p>
<p>Se un escursionista cammina a 3 km/h in piano ma il dislivello lo rallenta, può contare circa 1 h 15 min. Attenzione: la carta misura la distanza <b>in orizzontale</b>; se il sentiero sale ripido, il percorso reale è un po' più lungo di quello che il righello suggerisce.</p>
<p><b>Verso inverso</b>: due paesi distano 12 km e vuoi una carta di 24 cm. Serve N = 12 km ÷ 24 cm = 1.200.000 cm ÷ 24 cm = 50.000: scala <b>1:50.000</b>.</p>`
    },
    {
      type: "text",
      title: "3. Il reticolato geografico: latitudine e longitudine",
      html: `<p>Per indicare con precisione un punto sulla Terra si usa il <b>reticolato geografico</b>, formato da due famiglie di cerchi immaginari:</p>
<ul>
<li>i <b>paralleli</b>: cerchi paralleli all'<b>Equatore</b> (0°). Misurano la <b>latitudine</b>, cioè la distanza angolare dall'Equatore, da 0° a <b>90° Nord</b> (Polo Nord) e da 0° a <b>90° Sud</b> (Polo Sud). Sono i paralleli principali: Equatore, Tropico del Cancro (circa 23°26′ N), Tropico del Capricorno (circa 23°26′ S), Circoli polari Artico e Antartico (circa 66°34′ N e S).</li>
<li>i <b>meridiani</b>: semicerchi che uniscono i poli. Misurano la <b>longitudine</b>, cioè la distanza angolare dal <b>meridiano di Greenwich</b> (0°), da 0° a <b>180° Est</b> e da 0° a <b>180° Ovest</b>.</li>
</ul>
<p>Il meridiano di riferimento passa per l'osservatorio di <b>Greenwich</b>, a Londra: fu scelto dalla Conferenza internazionale di Washington nel <b>1884</b>. Le coordinate si scrivono in gradi (°), primi (′) e secondi (″): <b>Roma</b> si trova a circa <b>41°54′ N, 12°30′ E</b>; Milano a circa 45°28′ N, 9°11′ E.</p>
<p>Un grado di latitudine corrisponde sempre a circa <b>111 km</b> sulla superficie. Un grado di longitudine, invece, misura 111 km solo all'Equatore e si <b>accorcia</b> man mano che ci si avvicina ai poli, dove i meridiani si incontrano.</p>`
    },
    {
      type: "svg",
      title: "Il reticolato geografico",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="170" cy="150" r="115" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<ellipse cx="170" cy="150" rx="115" ry="30" fill="none" stroke="#dc2626" stroke-width="3"/>
<ellipse cx="170" cy="95" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="205" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="35" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="80" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<line x1="170" y1="25" x2="170" y2="275" stroke="#15803d" stroke-width="4"/>
<circle cx="214" cy="116" r="6" fill="#f59e0b" stroke="#111827" stroke-width="2"/>
<text x="170" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polo Nord 90°N</text>
<text x="170" y="294" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polo Sud 90°S</text>
<text x="330" y="60" font-size="16" fill="#dc2626" font-weight="bold">Equatore = 0° (parallelo)</text>
<text x="330" y="100" font-size="16" fill="#15803d" font-weight="bold">Meridiano di Greenwich = 0°</text>
<text x="330" y="140" font-size="16" fill="#1e3a8a">Paralleli: latitudine</text>
<text x="330" y="170" font-size="16" fill="#1e3a8a">Meridiani: longitudine</text>
<text x="330" y="215" font-size="16" fill="#92400e" font-weight="bold">Un punto = latitudine + longitudine</text>
<text x="330" y="245" font-size="15" fill="#111827">es. 45°N, 10°E (Pianura Padana)</text>
</svg>`,
      caption: "I paralleli (orizzontali) danno la latitudine, i meridiani (verticali) la longitudine. L'incrocio dei due identifica un punto unico sulla Terra."
    },
    {
      type: "quiz",
      title: "Mini-quiz: scala e coordinate",
      questions: [
        { type: "num", q: "Su una carta in scala 1:25.000 due punti distano 6 cm. Quanti chilometri sono nella realtà?", answer: 1.5, tol: 0.01, unit: "km", explain: "6 cm × 25.000 = 150.000 cm = 1.500 m = 1,5 km." },
        { type: "mc", q: "Quale carta ha la scala più piccola?", options: ["1:1.000", "1:50.000", "1:10.000.000"], answer: 2, explain: "Più grande è il denominatore, più piccola è la scala: 1:10.000.000 rappresenta un'area molto vasta con pochi dettagli." },
        { type: "mc", q: "Che cosa misura la latitudine?", options: ["La distanza angolare dall'Equatore", "La distanza angolare da Greenwich", "L'altezza sul livello del mare"], answer: 0, explain: "La latitudine va da 0° (Equatore) a 90° N o S (poli). La distanza da Greenwich è la longitudine." }
      ]
    },
    {
      type: "text",
      title: "4. Ogni carta deforma: le proiezioni",
      html: `<p>Una sfera non si può appiattire senza stirarla o strapparla (provate a stendere una buccia d'arancia). Il metodo matematico per trasferire il reticolato dalla sfera al piano si chiama <b>proiezione cartografica</b>. Nessuna proiezione conserva insieme tutte le proprietà: bisogna <b>scegliere che cosa sacrificare</b>.</p>
<ul>
<li><b>Proiezioni conformi</b>: conservano gli <b>angoli</b> e le forme locali, ma deformano le aree. La più famosa è la <b>proiezione di Mercatore</b> (Gerardus Mercator, 1569), nata per la <b>navigazione</b>: una rotta a direzione costante (bussola fissa) diventa una linea retta. In compenso ingrandisce enormemente le zone vicine ai poli: la <b>Groenlandia</b> sembra grande quanto l'Africa, mentre l'Africa è circa <b>14 volte più estesa</b>.</li>
<li><b>Proiezioni equivalenti</b>: conservano le <b>aree</b> ma deformano le forme (ad esempio la proiezione di <b>Gall-Peters</b>, resa popolare negli anni '70 da Arno Peters, o la proiezione di Mollweide). Utili per confrontare estensioni e per le carte tematiche.</li>
<li><b>Proiezioni afilattiche</b>: compromessi che non conservano esattamente nulla ma limitano le deformazioni (ad esempio la proiezione di Robinson, usata a lungo dalla National Geographic).</li>
</ul>
<p>Per l'Italia e il resto dell'Europa le carte ufficiali usano proiezioni conformi di tipo <b>cilindrico trasverso</b> (come Gauss-Boaga e UTM), perché per aree piccole le deformazioni diventano trascurabili.</p>`
    },
    {
      type: "svg",
      title: "Perché la Groenlandia sembra enorme",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Mercatore (conforme)</text>
<text x="450" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Equivalente (aree vere)</text>
<ellipse cx="150" cy="95" rx="55" ry="38" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="150" y="100" font-size="15" text-anchor="middle" fill="#111827">Groenlandia</text>
<ellipse cx="150" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="150" y="220" font-size="15" text-anchor="middle" fill="#111827">Africa</text>
<ellipse cx="450" cy="105" rx="20" ry="14" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="450" y="140" font-size="15" text-anchor="middle" fill="#111827">Groenlandia</text>
<ellipse cx="450" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="450" y="220" font-size="15" text-anchor="middle" fill="#111827">Africa</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#111827">Groenlandia: circa 2,2 milioni di km². Africa: circa 30 milioni di km².</text>
</svg>`,
      caption: "Schema semplificato: nella proiezione di Mercatore le aree vicine ai poli sono ingrandite. Nella realtà l'Africa è circa 14 volte più grande della Groenlandia."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la Terra non è una sfera perfetta?",
      html: `<p>La Terra è un <b>geoide</b>: schiacciata ai poli e rigonfia all'Equatore, perché ruota su se stessa. Il raggio equatoriale è di circa <b>6.378 km</b>, quello polare di circa <b>6.357 km</b>: una differenza di circa 21 km. Per le misure comuni basta la sfera (circonferenza circa <b>40.000 km</b>: non a caso il <b>metro</b> fu definito alla fine del Settecento come la decimilionesima parte della distanza Polo Nord–Equatore); per i calcoli di precisione si usa un <b>ellissoide</b> di riferimento.</p>`
    },
    {
      type: "text",
      title: "5. Leggere il rilievo e i simboli",
      html: `<p>Come si rappresenta su un foglio piatto la <b>terza dimensione</b>, cioè l'altezza? I metodi principali sono:</p>
<ul>
<li><b>Curve di livello</b> (isoipse): linee che uniscono tutti i punti alla stessa altitudine. Sono distanziate da una <b>equidistanza</b> fissa (ad esempio 25 m). Dove le curve sono <b>fitte</b> il pendio è <b>ripido</b>; dove sono <b>distanziate</b> è dolce. Cerchi concentrici indicano una collina o una cima; curve a \"V\" puntano verso l'alto lungo una valle.</li>
<li><b>Colori ipsometrici</b>: fasce di colore per altitudini diverse (verde per le pianure, marrone per i monti, bianco per le cime oltre una certa quota; blu sempre più scuro per le profondità del mare, con le <b>isobate</b>).</li>
<li><b>Ombreggiatura e modelli 3D</b>: danno l'illusione del rilievo, oggi calcolati da <b>modelli digitali del terreno</b>.</li>
</ul>
<p>Le <b>carte tematiche</b> usano invece altri linguaggi: <b>coropletiche</b> (colore diverso per ogni regione secondo il valore del dato, ad esempio la densità), carte a <b>simboli proporzionali</b> (un cerchio più grande per una città più popolosa), carte a <b>punti</b> e carte a <b>isolinee</b> (isoterme per la temperatura, isobare per la pressione, isoiete per le piogge).</p>`
    },
    {
      type: "svg",
      title: "Curve di livello: una collina vista dall'alto e di fianco",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<ellipse cx="150" cy="150" rx="120" ry="95" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<ellipse cx="150" cy="150" rx="85" ry="65" fill="#86efac" stroke="#166534" stroke-width="2"/>
<ellipse cx="135" cy="148" rx="50" ry="38" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<ellipse cx="125" cy="146" rx="18" ry="14" fill="#16a34a" stroke="#166534" stroke-width="2"/>
<text x="125" y="151" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">300</text>
<text x="45" y="153" font-size="14" fill="#111827">100</text>
<text x="80" y="153" font-size="14" fill="#111827">200</text>
<text x="150" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Dall'alto (carta)</text>
<path d="M330 250 L400 230 L440 180 L470 120 L500 180 L540 230 L580 250 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<line x1="320" y1="250" x2="590" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="352" y1="236" x2="568" y2="236" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="423" y1="206" x2="518" y2="206" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="455" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Di fianco (sezione)</text>
<text x="470" y="108" font-size="14" text-anchor="middle" fill="#111827">cima</text>
<text x="450" y="280" font-size="14" text-anchor="middle" fill="#111827">curve ogni 100 m: ripido a destra, dolce a sinistra</text>
</svg>`,
      caption: "Ogni curva unisce punti alla stessa quota. Più le curve sono vicine, più il pendio è ripido."
    },
    {
      type: "text",
      title: "6. Orientarsi e misurare il tempo: bussola, GPS e fusi orari",
      html: `<p>Orientarsi vuol dire trovare i punti cardinali. Per secoli si sono usati il <b>Sole</b>, la <b>Stella Polare</b> (nell'emisfero boreale indica il Nord) e la <b>bussola</b>, che sfrutta il campo magnetico terrestre. Attenzione: l'ago indica il <b>Nord magnetico</b>, che non coincide con il Nord geografico (la differenza si chiama <b>declinazione magnetica</b>).</p>
<p>Oggi il metodo più usato è il <b>GNSS</b> (Global Navigation Satellite System), di cui il <b>GPS</b> americano è il capostipite. Il principio: un ricevitore (come il tuo telefono) calcola quanto tempo impiega il segnale radio a viaggiare da diversi satelliti e ne ricava la distanza da ciascuno; con almeno <b>quattro satelliti</b> (tre per la posizione, uno per correggere l'orologio) fissa latitudine, longitudine e quota. I principali sistemi sono il GPS (USA), il <b>Galileo</b> (Unione Europea), il GLONASS (Russia) e il BeiDou (Cina); ciascuno ha decine di satelliti in orbita a 20.000 km circa di quota.</p>
<p>Anche il <b>tempo</b> dipende dalla posizione. La Terra compie un giro di 360° in 24 ore: ogni <b>15° di longitudine</b> corrispondono a <b>1 ora</b>. Il globo è diviso in <b>24 fusi orari</b>; nel mondo (per ragioni politiche) i fusi reali sono di più. L'Italia è nel fuso dell'Europa centrale (<b>UTC+1</b>, <b>UTC+2</b> con l'ora legale). Attraversando la <b>linea di cambiamento di data</b> (vicino al meridiano di 180°) si guadagna o si perde un giorno.</p>`
    },
    {
      type: "3d",
      title: "Sul globo: coordinate di alcune città",
      scene: "globe",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Roma (41,9° N, 12,5° E)", color: "#dc2626" },
          { lat: 51.48, lon: 0, label: "Greenwich (0°)", color: "#16a34a" },
          { lat: 0, lon: -78.5, label: "Quito (quasi sull'Equatore)", color: "#f59e0b" },
          { lat: -33.9, lon: 151.2, label: "Sydney (33,9° S)", color: "#2563eb" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#7c3aed" },
          { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#0ea5e9" }
        ],
        routes: [ { points: [0, 4], color: "#dc2626" }, { points: [0, 5], color: "#2563eb" } ]
      },
      caption: "Ruota il globo: nota che Greenwich è sul meridiano 0° e Quito è quasi sull'Equatore (la città prende il nome dal Paese: Ecuador = Equatore)."
    },
    {
      type: "text",
      title: "7. GIS, telerilevamento e dati: la geografia digitale",
      html: `<p>Il <b>GIS</b> (<i>Geographic Information System</i>, in italiano <b>SIT</b>, Sistema Informativo Territoriale) è un sistema informatico che archivia, collega e analizza dati con riferimento alla posizione. L'idea chiave è quella dei <b>livelli sovrapposti</b> (<i>layers</i>): strade, fiumi, edifici, uso del suolo, popolazione… ciascuno in un livello, che si può accendere e spegnere e incrociare con gli altri. I dati sono di due tipi: <b>vettoriali</b> (punti, linee, poligoni: una fermata, una strada, un comune) e <b>raster</b> (griglie di pixel: una foto satellitare, un modello di altitudine).</p>
<p>Esempio storico di \"GIS ante litteram\": nel <b>1854</b>, durante un'epidemia di <b>colera</b> a Londra, il medico <b>John Snow</b> segnò su una mappa le case dei morti e scoprì che si concentravano intorno a una pompa dell'acqua in Broad Street. Fece rimuovere la maniglia della pompa e i casi calarono: la <b>mappa</b> aveva mostrato la causa (l'acqua contaminata) prima ancora che si conoscesse il batterio.</p>
<p>Il <b>telerilevamento</b> acquisisce informazioni sulla superficie terrestre a distanza, con satelliti e droni. Programmi come <b>Copernicus</b> (UE, satelliti Sentinel) e Landsat (USA) producono immagini gratuite usate per seguire incendi, alluvioni, ghiacciai, raccolti e crescita delle città. Le immagini nell'infrarosso, ad esempio, rivelano la salute della vegetazione.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: dove costruire una scuola?",
      html: `<p>Un comune deve scegliere dove costruire una nuova scuola. Con un GIS si sovrappongono quattro livelli:</p>
<ol>
<li>residenza dei bambini in età scolare (dati anagrafici: punti);</li>
<li>rete stradale e fermate dei mezzi pubblici (linee e punti);</li>
<li>zone a rischio alluvione (poligoni);</li>
<li>aree libere di proprietà pubblica (poligoni).</li>
</ol>
<p>Il sistema calcola le aree libere, <b>fuori dal rischio alluvione</b>, entro 500 m da una fermata, che <b>minimizzano la distanza media</b> da casa dei bambini. In pochi secondi propone 2 o 3 siti: la decisione resta alle persone, ma si fonda su dati e non su impressioni. È lo stesso metodo con cui si progettano ospedali, linee di autobus e piani di protezione civile.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il GPS ha bisogno della relatività?",
      html: `<p>Gli orologi atomici sui satelliti GPS vanno <b>un po' più veloci</b> di quelli a terra (la gravità è più debole in quota: relatività generale) e un po' più lenti (perché i satelliti si muovono veloci: relatività ristretta). Il risultato netto è circa <b>38 microsecondi al giorno</b> di anticipo. Senza correggerlo, l'errore di posizione crescerebbe di circa <b>10 km al giorno</b>! Ogni volta che usi lo smartphone per orientarti, usi (senza saperlo) la teoria di Einstein.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire carte e coordinate",
      intro: "Se la scala o le coordinate non ti tornano, prova a guardarle da un'altra angolazione.",
      tabs: [
        {
          label: "🏀 La buccia d'arancia",
          html: `<p>Prendi una buccia d'arancia e prova a schiacciarla sul tavolo: si strappa o si stira. È esattamente il problema delle proiezioni! Per avere una carta continua devi <b>stirare</b> alcune zone (come Mercatore fa con i poli) oppure <b>tagliare</b> la superficie in \"spicchi\" (carte a fusi, come quelle di Goode). Ecco perché nessuna carta piana è \"giusta\": ognuna è una scelta tra forme, aree, distanze e direzioni.</p>`
        },
        {
          label: "🧭 Indirizzo del mondo",
          html: `<p>Pensa alle coordinate come a un <b>indirizzo</b> tipo \"via, numero\" in una città a griglia (come New York o Torino): la <b>latitudine</b> è come la \"riga\" (da quanto sei a nord o a sud dell'Equatore) e la <b>longitudine</b> è come la \"colonna\" (da quanto sei a est o a ovest di Greenwich). Due numeri bastano a individuare un punto: e un telefono può dirti persino quanti metri ti separano dalla posta.</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="260" fill="#eff6ff"/><line x1="40" y1="130" x2="470" y2="130" stroke="#dc2626" stroke-width="3"/><line x1="250" y1="20" x2="250" y2="240" stroke="#15803d" stroke-width="3"/><circle cx="360" cy="70" r="8" fill="#f59e0b" stroke="#111827" stroke-width="2"/><circle cx="130" cy="190" r="8" fill="#2563eb" stroke="#111827" stroke-width="2"/></svg>`,
            spots: [
              { x: 120, y: 130, label: "Equatore (0° di latitudine)" },
              { x: 250, y: 40, label: "Meridiano di Greenwich (0° di longitudine)" },
              { x: 360, y: 70, label: "Punto a Nord e a Est" },
              { x: 130, y: 190, label: "Punto a Sud e a Ovest" }
            ]
          }
        },
        {
          label: "👣 Il passo-misura",
          html: `<p>Un modo semplice per sentire la scala: misura il tuo <b>passo</b>. Un passo adulto è circa 70–75 cm; <b>1.000 passi</b> sono quindi circa 700 m, e la distanza casa-scuola puoi stimarla così. Poi riportala su una carta della città in scala 1:10.000: se ottieni 7 cm, la scala funziona. Oppure confronta con la \"scala umana\": su una carta 1:25.000, 4 cm sono 1 km, circa 15 minuti a piedi.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: gli strumenti del geografo",
      nodes: [
        { id: "carta", label: "La carta", x: 50, y: 8, color: "#2563eb", html: "Rappresentazione ridotta, simbolica e approssimata della superficie terrestre.", why: "Le prime carte note risalgono a Babilonia (tavoletta di Nippur e il \"mappamondo babilonese\", circa VI secolo a.C.). I Greci, con Eratostene (circa 240 a.C.), misurarono la circonferenza terrestre con uno scarto di pochi punti percentuali rispetto al valore attuale, e Tolomeo (II sec. d.C.) fissò l'idea di un reticolato di coordinate." },
        { id: "scala", label: "Scala", x: 15, y: 38, color: "#16a34a", html: "Rapporto tra distanza sulla carta e distanza reale.", why: "È un semplice rapporto di proporzionalità: serve a poter misurare sulla carta e ricavare le dimensioni reali. La scala è la ragione per cui una carta è sempre una scelta tra dettaglio ed estensione." },
        { id: "coordinate", label: "Coordinate", x: 50, y: 38, color: "#dc2626", html: "Latitudine e longitudine individuano ogni punto.", why: "L'Equatore e i poli sono definiti dalla rotazione terrestre, quindi la latitudine è un riferimento naturale. La longitudine invece non ha un riferimento naturale: è una convenzione, fissata a Greenwich nel 1884. Misurarla in mare fu per secoli un problema: lo risolse l'orologio da marino (cronometro) di John Harrison nel Settecento." },
        { id: "proiezioni", label: "Proiezioni", x: 85, y: 38, color: "#a855f7", html: "Come si passa dalla sfera al piano.", why: "Un teorema di Gauss (il Theorema Egregium, 1827) dimostra che una sfera non può essere stesa su un piano senza deformazioni di distanze o aree: la deformazione non è un difetto dei cartografi, è una proprietà matematica della superficie." },
        { id: "rilievo", label: "Rilievo e simboli", x: 25, y: 68, color: "#f59e0b", html: "Curve di livello, colori ipsometrici, legenda.", why: "Le curve di livello furono introdotte tra Sette e Ottocento, quando gli eserciti ebbero bisogno di carte che permettessero di prevedere i movimenti sul terreno. Ancora oggi le carte topografiche italiane dell'IGM derivano da quell'esigenza militare." },
        { id: "gps", label: "GPS e satelliti", x: 60, y: 68, color: "#0ea5e9", html: "Posizione calcolata dalla distanza da più satelliti.", why: "Il GPS fu sviluppato dal Dipartimento della Difesa degli USA (primi satelliti negli anni '70, sistema completo negli anni '90) per scopi militari. Dal 2000 il segnale civile è disponibile con precisione molto maggiore." },
        { id: "gis", label: "GIS e dati", x: 50, y: 93, color: "#ec4899", html: "Livelli sovrapposti di informazioni georeferenziate.", why: "Il primo vero GIS fu il Canada Geographic Information System, ideato da Roger Tomlinson negli anni '60 per inventariare le risorse del territorio canadese; per questo è detto \"padre del GIS\"." }
      ],
      edges: [
        ["carta", "scala", "ha una"],
        ["carta", "coordinate", "ha il reticolato di"],
        ["carta", "proiezioni", "nasce da una"],
        ["carta", "rilievo", "mostra il"],
        ["coordinate", "gps", "sono calcolate dal"],
        ["gps", "gis", "alimenta il"],
        ["proiezioni", "gis", "serve ai"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Scala</b> = distanza sulla carta ÷ distanza reale. R = D × N. Scala grande = poca area, molti dettagli.</li>
<li><b>Latitudine</b> (paralleli, da 0° a 90° N/S dall'Equatore); <b>longitudine</b> (meridiani, da 0° a 180° E/O da Greenwich).</li>
<li>Ogni <b>proiezione</b> deforma: Mercatore conserva gli angoli, Gall-Peters le aree.</li>
<li><b>Curve di livello</b> fitte = pendio ripido.</li>
<li>Il <b>GPS</b> usa almeno 4 satelliti; il <b>GIS</b> sovrappone livelli di dati georeferenziati.</li>
<li>15° di longitudine = 1 ora di differenza.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: proiezioni e GIS",
      questions: [
        { type: "mc", q: "Perché nella proiezione di Mercatore la Groenlandia sembra grande quanto l'Africa?", options: ["Perché le aree vicine ai poli vengono ingrandite", "Perché la Groenlandia è davvero molto grande", "Perché la scala è sbagliata"], answer: 0, explain: "Mercatore conserva gli angoli (utile alla navigazione) ma ingrandisce molto le aree lontane dall'Equatore." },
        { type: "tf", q: "Il Nord indicato dall'ago della bussola coincide esattamente col Nord geografico.", answer: false, explain: "L'ago indica il Nord magnetico, che differisce dal Nord geografico di un angolo detto declinazione magnetica." },
        { type: "text", q: "Come si chiama il sistema che sovrappone livelli di dati georeferenziati (sigla di tre lettere)?", answer: ["gis"], explain: "GIS: Geographic Information System, in italiano Sistema Informativo Territoriale (SIT)." }
      ]
    }
  ],
  glossary: [
    { t: "Scala", d: "Rapporto tra una distanza misurata sulla carta e la distanza reale corrispondente (es. 1:50.000)." },
    { t: "Latitudine", d: "Distanza angolare di un punto dall'Equatore, da 0° a 90° Nord o Sud; si misura con i paralleli." },
    { t: "Longitudine", d: "Distanza angolare di un punto dal meridiano di Greenwich, da 0° a 180° Est o Ovest; si misura con i meridiani." },
    { t: "Proiezione cartografica", d: "Metodo matematico che trasferisce il reticolato dalla sfera terrestre a un piano, sempre con qualche deformazione." },
    { t: "Curve di livello", d: "Linee che uniscono i punti alla stessa altitudine; permettono di leggere il rilievo sulla carta." },
    { t: "Carta tematica", d: "Carta che mostra un solo fenomeno (clima, popolazione, reddito…) su una base geografica semplificata." },
    { t: "GPS / GNSS", d: "Sistema di posizionamento satellitare: il ricevitore calcola la posizione dalla distanza da almeno quattro satelliti." },
    { t: "GIS", d: "Sistema informativo geografico: archivia, sovrappone e analizza dati collegati alla posizione." },
    { t: "Telerilevamento", d: "Acquisizione di informazioni sulla superficie terrestre a distanza, con satelliti, aerei o droni." },
    { t: "Fuso orario", d: "Ciascuna delle 24 fasce di 15° di longitudine in cui è divisa la Terra, con la stessa ora convenzionale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Su una carta in scala 1:100.000 due città distano 8,5 cm. Quanti km le separano nella realtà?", answer: 8.5, tol: 0.05, unit: "km", explain: "8,5 cm × 100.000 = 850.000 cm = 8.500 m = 8,5 km." },
      { type: "mc", q: "Quale tra queste scale mostra più dettagli?", options: ["1:5.000", "1:500.000", "1:50.000.000"], answer: 0, explain: "La scala 1:5.000 è la più grande (denominatore più piccolo): rappresenta un'area piccola con molti dettagli." },
      { type: "mc", q: "In che anno il meridiano di Greenwich fu scelto come meridiano di riferimento internazionale?", options: ["1492", "1884", "1969", "1990"], answer: 1, explain: "La Conferenza internazionale di Washington del 1884 scelse Greenwich come meridiano 0°." },
      { type: "tf", q: "Un grado di longitudine misura sempre circa 111 km, ovunque sulla Terra.", answer: false, explain: "È vero solo all'Equatore: i meridiani convergono verso i poli, quindi la distanza tra due meridiani diminuisce con la latitudine." },
      { type: "mc", q: "Quale proiezione conserva gli angoli ed è nata per la navigazione?", options: ["Gall-Peters", "Mercatore", "Mollweide"], answer: 1, explain: "Mercatore (1569): le rotte a direzione costante diventano linee rette, ma le aree ai poli sono ingigantite." },
      { type: "mc", q: "Su una carta topografica le curve di livello sono molto vicine tra loro. Che cosa indica?", options: ["Un pendio ripido", "Una pianura", "Un lago"], answer: 0, explain: "Curve fitte significano forte variazione di quota in poco spazio: un pendio ripido." },
      { type: "order", q: "Metti in ordine dalla scala più grande (più dettaglio) alla più piccola (meno dettaglio).", items: ["1:1.000", "1:25.000", "1:500.000", "1:30.000.000"], explain: "Più il denominatore è piccolo, più la scala è grande: pianta, carta topografica, carta regionale, planisfero." },
      { type: "num", q: "Quanti satelliti servono come minimo a un ricevitore GPS per calcolare posizione e correggere l'orologio?", answer: 4, tol: 0, explain: "Tre servono per la posizione nello spazio, il quarto per correggere l'errore dell'orologio del ricevitore." },
      { type: "text", q: "Come si chiama la linea che unisce i punti alla stessa altitudine su una carta?", answer: ["curva di livello", "curve di livello", "isoipsa", "isoipse"], explain: "Curva di livello (o isoipsa)." },
      { type: "tf", q: "John Snow, studiando su una mappa le morti per colera a Londra nel 1854, individuò nella pompa di Broad Street la fonte del contagio.", answer: true, explain: "Uno dei primi esempi di analisi spaziale dei dati: la concentrazione dei casi attorno alla pompa indicò l'acqua contaminata." }
    ]
  }
});
