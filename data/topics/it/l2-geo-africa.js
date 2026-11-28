TOPIC('it', {
  id: "l2-geo-africa",
  title: "L'Africa",
  intro: "L'Africa è spesso raccontata come un blocco unico, fatto di savana, povertà e guerre. La realtà è molto diversa: 54 Stati, oltre 2000 lingue, deserti, foreste, grandi città, economie in rapida crescita e il continente più giovane del pianeta. In questa lezione impariamo a vedere la diversità degli ambienti, le radici storiche dei problemi di oggi e le sfide e le opportunità dello sviluppo.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Un continente, tanti ambienti",
      html: `<p>L'Africa è il secondo continente per estensione, con circa <b>30,3 milioni di km²</b> (circa il 20% delle terre emerse), attraversata quasi a metà dall'<b>Equatore</b>. Ospita circa <b>1,5 miliardi</b> di persone (quasi il 18% dell'umanità), ma la popolazione è in rapida crescita: si stima che entro il 2050 sarà circa 2,5 miliardi. Gli Stati sono <b>54</b> riconosciuti dall'ONU.</p>
<p>La fascia climatica è disposta in modo quasi simmetrico rispetto all'Equatore:</p>
<ul>
<li><b>Foresta equatoriale</b> (bacino del <b>Congo</b>, Africa centrale e golfo di Guinea): piogge abbondanti tutto l'anno, seconda grande foresta tropicale dopo l'Amazzonia.</li>
<li><b>Savana</b> ai lati della foresta: due stagioni, secca e delle piogge; grandi mammiferi (elefanti, leoni, giraffe) nei parchi dell'Africa orientale e meridionale.</li>
<li><b>Deserti</b>: il <b>Sahara</b> a nord (circa 9 milioni di km², quasi quanto gli USA, il più grande deserto caldo del mondo), Kalahari e Namib a sud.</li>
<li><b>Clima mediterraneo</b> alle estremità, a nord (Marocco, Algeria, Tunisia) e nell'estremo sud (Città del Capo).</li>
</ul>
<p>Il rilievo è dominato da <b>altopiani</b>. Fra le caratteristiche più importanti c'è la <b>Rift Valley</b> (Grande Fossa tettonica), una lunga frattura della crosta in cui si formano laghi profondi e vulcani; vi si trova il <b>Kilimangiaro</b> (5895 m, Tanzania), la cima più alta del continente, ed i grandi laghi: Vittoria (il maggiore d'Africa), Tanganica, Malawi. I fiumi principali sono il <b>Nilo</b> (circa 6650 km, tra i più lunghi del mondo), il Congo, il Niger, lo Zambesi (con le cascate Vittoria). Il Nilo ha permesso la nascita della civiltà egizia: l'Egitto è, ancora oggi, quasi tutto concentrato sulle sue rive.</p>`
    },
    {
      type: "3d",
      title: "Sul globo: i luoghi chiave dell'Africa",
      scene: "globe",
      options: {
        points: [
          { lat: 30.0, lon: 31.2, label: "Il Cairo (Egitto), sul Nilo", color: "#a16207" },
          { lat: 23.0, lon: 12.0, label: "Sahara", color: "#f59e0b" },
          { lat: -3.07, lon: 37.35, label: "Kilimangiaro (5895 m)", color: "#6b7280" },
          { lat: 6.5, lon: 3.4, label: "Lagos (Nigeria)", color: "#16a34a" },
          { lat: -4.3, lon: 15.3, label: "Kinshasa (RD Congo)", color: "#0ea5e9" },
          { lat: 9.0, lon: 38.7, label: "Addis Abeba (sede dell'Unione africana)", color: "#7c3aed" },
          { lat: -33.9, lon: 18.4, label: "Città del Capo", color: "#dc2626" },
          { lat: -26.2, lon: 28.0, label: "Johannesburg", color: "#dc2626" },
          { lat: 14.7, lon: -17.4, label: "Dakar (Senegal, Sahel)", color: "#ec4899" },
          { lat: -1.3, lon: 36.8, label: "Nairobi (Kenya)", color: "#14b8a6" }
        ],
        routes: [
          { points: [0, 5, 9, 2], color: "#a16207" },
          { points: [8, 3, 4], color: "#16a34a" },
          { points: [4, 7, 6], color: "#dc2626" }
        ]
      },
      caption: "Le linee collegano esempi di regioni diverse: Nilo e Africa orientale, Africa occidentale, Africa centro-meridionale."
    },
    {
      type: "text",
      title: "2. Le radici della storia: dalle civiltà alle colonie",
      html: `<p>L'Africa è la <b>culla dell'umanità</b>: qui sono stati trovati i resti dei più antichi <i>Homo sapiens</i> (circa 300.000 anni fa, in Marocco) e dei nostri antenati. Ha visto civiltà e regni importanti: l'<b>Egitto</b> dei faraoni, <b>Cartagine</b>, il regno di <b>Aksum</b> (in Etiopia), l'impero del <b>Mali</b> (XIV secolo), con Timbuctù, famosa per biblioteche e università, il regno dello <b>Zimbabwe</b> e del <b>Benin</b>. Mansa Musa, imperatore del Mali, fu tra gli uomini più ricchi della storia grazie all'oro.</p>
<p>Tra Cinquecento e Ottocento circa <b>12,5 milioni</b> di africani furono deportati come schiavi verso le Americhe (<b>tratta atlantica</b>), un salasso demografico ed economico per intere regioni. Nell'Ottocento arrivò la corsa alla spartizione: la <b>Conferenza di Berlino (1884-1885)</b> stabilì le regole con cui le potenze europee si dividevano il continente, senza consultare gli africani. Verso il 1914 solo <b>Etiopia</b> e <b>Liberia</b> erano indipendenti (l'Etiopia fu occupata dall'Italia nel 1936-1941). I confini furono tracciati con righelli e paralleli, dividendo popoli (come i Somali o i Tuareg) e unendo gruppi rivali dentro stessi Stati: un'eredità che pesa ancora.</p>
<p>Dopo la Seconda guerra mondiale iniziò la <b>decolonizzazione</b>: Ghana (1957) fu il primo Stato dell'Africa subsahariana indipendente; il <b>1960</b> è chiamato «anno dell'Africa» perché 17 Paesi ottennero l'indipendenza. L'Algeria si liberò nel 1962 dopo una guerra con la Francia; Angola e Mozambico nel 1975 dal Portogallo. In Sudafrica il regime di segregazione razziale (<b>apartheid</b>, dal 1948) finì nel 1994 con le prime elezioni libere e l'elezione di <b>Nelson Mandela</b> a presidente. Nel 1963 nacque l'OUA, divenuta nel 2002 <b>Unione africana</b>, con sede ad Addis Abeba.</p>`
    },
    {
      type: "svg",
      title: "Una linea del tempo africana",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#111827">Alcune date dell'Africa moderna</text>
<line x1="30" y1="130" x2="570" y2="130" stroke="#475569" stroke-width="4"/>
<g font-size="14" text-anchor="middle" fill="#111827">
<circle cx="60" cy="130" r="8" fill="#dc2626"/><text x="60" y="105" font-weight="bold">1500-1800</text><text x="60" y="160">Tratta</text><text x="60" y="178">atlantica</text>
<circle cx="170" cy="130" r="8" fill="#a855f7"/><text x="170" y="105" font-weight="bold">1884-85</text><text x="170" y="160">Conferenza</text><text x="170" y="178">di Berlino</text>
<circle cx="290" cy="130" r="8" fill="#16a34a"/><text x="290" y="105" font-weight="bold">1957</text><text x="290" y="160">Ghana</text><text x="290" y="178">indipendente</text>
<circle cx="380" cy="130" r="8" fill="#16a34a"/><text x="380" y="105" font-weight="bold">1960</text><text x="380" y="160">«Anno</text><text x="380" y="178">dell'Africa»</text>
<circle cx="470" cy="130" r="8" fill="#2563eb"/><text x="470" y="105" font-weight="bold">1994</text><text x="470" y="160">Fine</text><text x="470" y="178">apartheid</text>
<circle cx="545" cy="130" r="8" fill="#f59e0b"/><text x="545" y="105" font-weight="bold">2002</text><text x="545" y="160">Unione</text><text x="545" y="178">africana</text>
</g>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#475569">Il tempo non è in scala: le date sono scelte per capire la sequenza.</text>
</svg>`,
      caption: "Dalla tratta alla colonizzazione, dalla decolonizzazione all'unione continentale."
    },
    {
      type: "quiz",
      title: "Mini-quiz: ambienti e storia",
      questions: [
        { type: "mc", q: "Qual è la montagna più alta dell'Africa?", options: ["Kilimangiaro", "Monte Kenya", "Atlante"], answer: 0, explain: "Il Kilimangiaro (5895 m) è in Tanzania." },
        { type: "mc", q: "Quale conferenza regolò la spartizione coloniale dell'Africa?", options: ["Conferenza di Berlino (1884-85)", "Congresso di Vienna", "Conferenza di Yalta"], answer: 0, explain: "Fissò le regole per l'occupazione delle coste e dell'interno del continente." },
        { type: "tf", q: "Nel 1960 17 Paesi africani ottennero l'indipendenza.", answer: true, explain: "Per questo è chiamato «anno dell'Africa»." }
      ]
    },
    {
      type: "text",
      title: "3. Popolazione, città e società",
      html: `<p>L'Africa è il continente più <b>giovane</b>: l'età mediana è intorno a 19 anni (in Europa circa 42). Circa il 60% degli africani ha meno di 25 anni. La <b>fecondità</b> è ancora alta (in media circa 4,2 figli per donna, con grandi differenze: oltre 6 in Niger, meno di 2,5 in Tunisia o Mauritius), ma sta calando con l'istruzione delle ragazze e l'urbanizzazione. Se i giovani avranno istruzione e lavoro, l'Africa potrà approfittare di un <b>dividendo demografico</b>; se no, aumenteranno disoccupazione e instabilità.</p>
<ul>
<li><b>Urbanizzazione rapida</b>: oggi circa il 45% vive in città; metropoli come <b>Lagos</b> (Nigeria, oltre 15 milioni di abitanti), <b>Kinshasa</b> (RD Congo), il <b>Cairo</b> crescono molto, spesso con grandi baraccopoli (slum) senza servizi sufficienti.</li>
<li><b>Lingue e popoli</b>: si parlano oltre 2000 lingue (swahili, hausa, arabo, amarico, yoruba; e le lingue coloniali come inglese, francese, portoghese come lingue ufficiali). Le religioni principali sono islam (nel Nord e nel Sahel) e cristianesimo (nell'Africa centrale e meridionale), accanto a religioni tradizionali.</li>
<li><b>Il Paese più popoloso</b> è la <b>Nigeria</b> (oltre 220 milioni di abitanti), seguita da Etiopia (circa 125 milioni) ed Egitto (oltre 110 milioni). Il più esteso è l'Algeria (2,38 milioni di km²), mentre tra i più piccoli ci sono le Seychelles.</li>
<li><b>Salute</b>: l'aspettativa di vita media è cresciuta (circa 62-64 anni) grazie ai progressi contro malaria, HIV/AIDS e mortalità infantile, ma c'è ancora molto da fare; la <b>malaria</b> è una causa principale di morte nei bambini sotto i cinque anni.</li>
</ul>`
    },
    {
      type: "text",
      title: "4. Risorse ed economia: ricchezza e «maledizione»",
      html: `<p>L'Africa è molto ricca di <b>risorse naturali</b>: petrolio e gas (Nigeria, Angola, Algeria, Libia), diamanti (Botswana), oro (Sudafrica, Ghana, Mali), platino, rame (Zambia), <b>cobalto</b> (la Repubblica Democratica del Congo ne produce circa il 70% mondiale, indispensabile per le batterie), coltan, terre rare, uranio. Secondo le stime ha circa il 60% delle terre coltivabili ancora non utilizzate nel mondo e immense potenzialità di energia solare. Eppure la quota africana del PIL mondiale è circa il 3%.</p>
<p>Perché? Gli economisti parlano di <b>«maledizione delle risorse»</b>: quando un Paese vive di un'unica materia prima esportata allo stato grezzo, rischia di restare povero e dipendente dai prezzi internazionali, di indebolire altre attività (agricoltura, industria) e di alimentare corruzione e conflitti per il controllo dei proventi. Molti Paesi africani esportano il <b>cacao</b> (Costa d'Avorio e Ghana producono circa il 60% mondiale), caffè, cotone, ma i guadagni maggiori si realizzano nella lavorazione e nella vendita, di solito altrove.</p>
<ul>
<li><b>Agricoltura</b>: occupa circa metà dei lavoratori; è spesso a basso rendimento, legata alle piogge, con pochi investimenti in irrigazione e filiere.</li>
<li><b>Servizi e tecnologia</b>: l'Africa ha «saltato» i telefoni fissi: il <b>mobile money</b> (come <b>M-Pesa</b>, nato in Kenya nel 2007) permette a milioni di persone senza conto bancario di pagare e risparmiare col telefono. Città come Nairobi, Lagos e Kigali sono centri di startup.</li>
<li><b>Integrazione regionale</b>: l'<b>AfCFTA</b>, l'area continentale africana di libero scambio (accordo del 2018, operativo dal 2021), è una delle maggiori del mondo per numero di Paesi e vuole aumentare il commercio tra africani, ora basso (circa il 15% dei loro scambi).</li>
<li><b>Economie in crescita</b>: alcuni Paesi (Ruanda, Etiopia, Costa d'Avorio, Ghana, Senegal, Egitto) hanno avuto crescite del PIL superiori al 5% in vari anni; ma resta molto debito estero e la povertà estrema interessa ancora oltre 400 milioni di persone, soprattutto nell'Africa subsahariana.</li>
<li><b>Il ruolo degli altri Paesi</b>: Cina, Unione europea, USA, Russia, Turchia e Paesi del Golfo investono e commerciano: la Cina è oggi il primo partner commerciale del continente.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Attività: risorsa e Paese",
      widget: "match",
      options: {
        pairs: [
          ["Cobalto", "Repubblica Democratica del Congo"],
          ["Diamanti", "Botswana"],
          ["Petrolio", "Nigeria"],
          ["Cacao", "Costa d'Avorio e Ghana"],
          ["Mobile money (M-Pesa)", "Kenya"]
        ]
      },
      caption: "Le risorse si concentrano in poche aree: il valore però dipende da chi le lavora e le vende."
    },
    {
      type: "example",
      title: "Il Sahel e la Grande Muraglia Verde",
      html: `<p>Il <b>Sahel</b> è la fascia semi-arida a sud del Sahara, da Senegal al Sudan. Qui le piogge sono scarse e irregolari, la desertificazione avanza e si combinano siccità, crescita demografica, conflitti e insicurezza. Nel 2007 l'Unione africana ha lanciato la <b>Grande Muraglia Verde</b>: un'iniziativa per ripristinare terre degradate con alberi, agricoltura sostenibile e gestione dell'acqua da Dakar a Gibuti (circa 8000 km). I progressi sono parziali (si tratta più di un mosaico di progetti locali che di una vera barriera), ma in alcune zone del Niger e del Senegal l'agroforestazione ha riportato verde e raccolti.</p>`
    },
    {
      type: "example",
      title: "Il telefono cellulare e la banca in tasca",
      html: `<p>Una venditrice di verdura a Nairobi non ha mai avuto un conto in banca. Con <b>M-Pesa</b> (dal 2007) può ricevere pagamenti dai clienti con un SMS, mandare soldi a una sorella nel villaggio, chiedere piccoli prestiti. Oggi in Kenya la grande maggioranza degli adulti usa questo tipo di servizi. È un esempio di <b>salto tecnologico</b> (<i>leapfrogging</i>): invece di costruire prima sportelli e linee fisse, si passa direttamente a uno strumento più adatto alle condizioni locali.</p>`
    },
    {
      type: "curiosity",
      title: "Il continente più vario geneticamente",
      html: `<p>Gli esseri umani africani hanno una <b>diversità genetica</b> maggiore di tutto il resto del mondo messo assieme: poiché tutti i non africani discendono da piccoli gruppi che lasciarono il continente circa 70-60.000 anni fa, portando con sé solo una parte della variabilità. Dal punto di vista biologico, il concetto di «razza» non ha senso scientifico: due persone dell'Africa orientale possono differire geneticamente più di un europeo e un asiatico.</p>`
    },
    {
      type: "curiosity",
      title: "La mappa che inganna",
      html: `<p>Molti planisferi usano la <b>proiezione di Mercatore</b>, che ingrandisce le aree lontane dall'Equatore: così l'Africa sembra poco più grande della Groenlandia. In realtà l'Africa ha 30,3 milioni di km²: la Groenlandia circa 2,2 milioni, cioè <b>14 volte meno</b>. L'Africa potrebbe contenere Stati Uniti, Cina, India e Giappone insieme, con spazio ancora avanzato. Nel 2025 l'Unione africana ha sostenuto la campagna «Correct the map» per mostrare le proporzioni reali.</p>`
    },
    {
      type: "decision",
      title: "Come finanziare lo sviluppo?",
      html: `<p>Sei il ministro dell'Economia di un Paese africano che esporta soprattutto rame (o cacao) grezzo. Il prezzo internazionale oscilla molto e metà degli introiti serve a pagare il debito. Arriva un'offerta: un'azienda straniera costruirà a sue spese una grande miniera e una ferrovia, ma chiede concessioni di 30 anni a condizioni fiscali vantaggiose.</p>`,
      question: "Tu cosa faresti?",
      options: [
        { label: "Accettare senza condizioni: servono subito investimenti", outcome: "Si ottengono infrastrutture e posti di lavoro subito, ma i guadagni maggiori escono dal Paese e si resta dipendenti dal prezzo di una sola materia prima." },
        { label: "Accettare solo se almeno una parte del minerale viene lavorata nel Paese e si formano lavoratori locali", outcome: "È la strada indicata da molti economisti: più valore aggiunto, nuove competenze, collegamento con altre industrie. È più difficile da negoziare e può scoraggiare qualche investitore." },
        { label: "Rifiutare e aspettare risorse proprie", outcome: "Evita la dipendenza, ma senza capitali e tecnologie è difficile sfruttare le risorse, e il Paese rimane povero di infrastrutture." }
      ],
      answer: 1,
      explain: "Non c'è una risposta unica, ma l'esperienza di Paesi come il Botswana (diamanti gestiti con istituzioni solide) o il Marocco (che attrae industrie manifatturiere) mostra che conta soprattutto negoziare in modo da trattenere più valore aggiunto, investire i ricavi in istruzione e infrastrutture e rafforzare le istituzioni."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'Africa",
      intro: "Per superare gli stereotipi, cambia punto di vista.",
      tabs: [
        {
          label: "🗺️ Le proporzioni vere",
          html: `<p>Immagina di ritagliare dalla carta i Paesi che stanno «dentro» l'Africa: Stati Uniti (9,8 milioni di km²), Cina (9,6), India (3,3), Giappone (0,38) e Messico (1,96) fanno insieme circa 25 milioni di km², e nell'Africa (30,3) rimane ancora spazio. Questa idea rende evidente che «l'Africa» non è un Paese: è un continente con enormi differenze interne.</p>`,
          svg: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="220" fill="#fefce8"/><text x="250" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#111827">Superfici in milioni di km²</text><rect x="120" y="45" width="300" height="24" fill="#16a34a"/><text x="20" y="63" font-size="15" fill="#111827">Africa</text><text x="428" y="63" font-size="15" fill="#111827">30,3</text><rect x="120" y="80" width="97" height="24" fill="#6b7280"/><text x="20" y="98" font-size="15" fill="#111827">USA</text><text x="225" y="98" font-size="15" fill="#111827">9,8</text><rect x="120" y="115" width="95" height="24" fill="#dc2626"/><text x="20" y="133" font-size="15" fill="#111827">Cina</text><text x="223" y="133" font-size="15" fill="#111827">9,6</text><rect x="120" y="150" width="33" height="24" fill="#f59e0b"/><text x="20" y="168" font-size="15" fill="#111827">India</text><text x="161" y="168" font-size="15" fill="#111827">3,3</text><text x="20" y="205" font-size="14" fill="#475569">Barre in scala. USA+Cina+India messi insieme fanno 22,7.</text></svg>`
        },
        {
          label: "🚚 Dal chicco al cioccolato",
          html: `<p>Segui la filiera del <b>cioccolato</b>: la fava di cacao è coltivata soprattutto da piccoli contadini in Costa d'Avorio e Ghana; viene venduta a commercianti e trasformata in grandi stabilimenti in Europa e Nordamerica; il prodotto finito viene venduto a prezzi molto più alti. Solo una piccola parte (di solito pochi punti percentuali) del prezzo di una tavoletta va ai coltivatori. Esistono alternative: il <b>commercio equo e solidale</b> (<i>fair trade</i>), le cooperative di produttori, la lavorazione locale del cacao: ciascuna cerca di spostare una quota maggiore di valore verso chi coltiva.</p>`
        },
        {
          label: "📱 Il continente connesso",
          html: `<p>Dagli anni 2000 l'Africa è diventata il continente con la crescita più rapida di telefonia mobile e internet. Droni che consegnano sangue e medicine in Ruanda (dal 2016), pannelli solari domestici a pagamento a rate in Kenya e Tanzania, startup di pagamenti in Nigeria e Ghana, centri di programmazione a Kigali, Lagos, Città del Capo e Nairobi. Anche l'<b>istruzione digitale</b> è un modo di superare le distanze nelle regioni con poche scuole.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: le cause delle sfide dello sviluppo",
      nodes: [
        { id: "storia", label: "Eredità coloniale", x: 15, y: 8, color: "#a855f7", html: "Confini tracciati dall'esterno, economie per l'esportazione.", why: "Le colonie erano organizzate per esportare materie prime verso l'Europa, non per sviluppare mercati interni o infrastrutture tra Paesi vicini: oggi molte ferrovie vanno dalle miniere alla costa, non da un Paese all'altro." },
        { id: "istituzioni", label: "Istituzioni e stabilità", x: 55, y: 8, color: "#dc2626", html: "Democrazia, corruzione, conflitti armati.", why: "Dove lo Stato è debole o i proventi delle risorse sono controllati da pochi, aumentano corruzione e guerre. Paesi con istituzioni stabili (Botswana, Mauritius, Ghana) hanno avuto più sviluppo." },
        { id: "risorse", label: "Risorse naturali", x: 85, y: 30, color: "#f59e0b", html: "Minerali, petrolio, terre agricole, sole.", why: "Le risorse possono finanziare lo sviluppo se i ricavi vengono investiti; altrimenti creano dipendenza (la «maledizione delle risorse»)." },
        { id: "demografia", label: "Popolazione giovane", x: 15, y: 40, color: "#16a34a", html: "Età mediana circa 19 anni.", why: "La transizione demografica è in ritardo rispetto ad altri continenti: la mortalità è calata prima della natalità. Con istruzione e lavoro i giovani sono un'opportunità, senza sono un rischio." },
        { id: "clima", label: "Clima e ambiente", x: 55, y: 50, color: "#0ea5e9", html: "Siccità, desertificazione, alluvioni, ciclone.", why: "L'Africa produce meno del 4% delle emissioni globali, ma subisce effetti gravi del cambiamento climatico: raccolti ridotti, spostamenti, conflitti per l'acqua e per i pascoli." },
        { id: "sviluppo", label: "Strade dello sviluppo", x: 85, y: 70, color: "#2563eb", html: "Istruzione, infrastrutture, integrazione, tecnologia.", why: "Mercati regionali (AfCFTA), energia (solare), digitale (mobile money) e agricoltura moderna sono le leve per creare lavoro e valore aggiunto in Africa." },
        { id: "futuro", label: "Il futuro", x: 45, y: 92, color: "#14b8a6", html: "Il continente con più giovani del XXI secolo.", why: "Entro fine secolo un terzo degli esseri umani potrebbe essere africano (circa 3,8 miliardi nel 2100 secondo le proiezioni ONU): le scelte di oggi decideranno molto del futuro globale." }
      ],
      edges: [
        ["storia", "istituzioni", "ha lasciato"],
        ["istituzioni", "risorse", "gestiscono"],
        ["demografia", "sviluppo", "dà forza a"],
        ["clima", "sviluppo", "lo condiziona"],
        ["risorse", "sviluppo", "lo finanziano"],
        ["sviluppo", "futuro", "costruisce"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Africa: circa 30,3 milioni di km², <b>54 Stati</b>, circa 1,5 miliardi di abitanti, età mediana circa 19 anni.</li>
<li>Sahara, Rift Valley, Kilimangiaro (5895 m), Nilo (circa 6650 km), bacino del Congo.</li>
<li>Tratta atlantica; Conferenza di Berlino 1884-85; Ghana 1957; <b>1960</b> «anno dell'Africa»; fine dell'apartheid 1994; Unione africana 2002.</li>
<li>Risorse abbondanti (cobalto, petrolio, oro, diamanti, cacao) ma economie spesso dipendenti dalle materie prime.</li>
<li>Opportunità: giovani, urbanizzazione, mobile money, energie rinnovabili, AfCFTA.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz finale",
      questions: [
        { type: "mc", q: "Qual è il Paese più popoloso d'Africa?", options: ["Nigeria", "Egitto", "Sudafrica"], answer: 0, explain: "La Nigeria supera i 220 milioni di abitanti." },
        { type: "tf", q: "L'Africa ha l'età mediana più alta di tutti i continenti.", answer: false, explain: "Al contrario: è il continente più giovane, con età mediana circa 19 anni." },
        { type: "text", q: "Come si chiama la fascia semi-arida a sud del Sahara?", answer: ["sahel", "il sahel"], explain: "Il Sahel va dal Senegal al Sudan ed è molto esposto a siccità e desertificazione." }
      ]
    }
  ],
  glossary: [
    { t: "Sahel", d: "Fascia semi-arida a sud del Sahara, dal Senegal al Sudan." },
    { t: "Apartheid", d: "Regime di segregazione razziale in Sudafrica (1948-1994)." },
    { t: "Decolonizzazione", d: "Processo con cui le colonie ottennero l'indipendenza, soprattutto tra gli anni Cinquanta e Settanta." },
    { t: "Maledizione delle risorse", d: "Situazione in cui la ricchezza di materie prime non porta sviluppo ma dipendenza, corruzione o conflitti." },
    { t: "Dividendo demografico", d: "Vantaggio economico quando i giovani in età di lavoro sono molti e hanno istruzione e occupazione." },
    { t: "Mobile money", d: "Servizi finanziari via telefono cellulare, come M-Pesa." },
    { t: "Unione africana", d: "Organizzazione continentale nata nel 2002, con sede ad Addis Abeba." },
    { t: "Rift Valley", d: "Grande frattura della crosta terrestre nell'Africa orientale, con laghi e vulcani." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quanti sono gli Stati africani riconosciuti dall'ONU?", options: ["54", "30", "80"], answer: 0, explain: "L'Africa conta 54 Stati." },
      { type: "mc", q: "Quale fiume ha permesso la nascita della civiltà egizia?", options: ["Il Nilo", "Il Niger", "Lo Zambesi"], answer: 0, explain: "Le piene del Nilo rendevano fertile la valle nel deserto." },
      { type: "tf", q: "Verso il 1914 solo Etiopia e Liberia erano ancora Stati indipendenti.", answer: true, explain: "Il resto del continente era stato spartito dalle potenze europee." },
      { type: "num", q: "In quale anno finì formalmente l'apartheid con le prime elezioni libere in Sudafrica?", answer: 1994, tol: 0, explain: "Nelson Mandela divenne presidente nel 1994." },
      { type: "mc", q: "Che cosa è M-Pesa?", options: ["Un sistema di pagamenti con telefono cellulare nato in Kenya", "Un parco naturale", "Una moneta unica africana"], answer: 0, explain: "Lanciato nel 2007, è l'esempio più noto di mobile money." },
      { type: "mc", q: "Che cosa significa «maledizione delle risorse»?", options: ["Paesi ricchi di materie prime che restano poveri e fragili", "Una carestia", "Una malattia delle piante"], answer: 0, explain: "La dipendenza da una materia prima può frenare lo sviluppo e favorire corruzione e conflitti." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Conferenza di Berlino (1884-85)", "Indipendenza del Ghana (1957)", "Fine dell'apartheid (1994)", "Nascita dell'Unione africana (2002)"], explain: "Dalla spartizione coloniale all'unione continentale." },
      { type: "text", q: "Come si chiama la più alta montagna africana?", answer: ["kilimangiaro", "il kilimangiaro", "kilimanjaro"], explain: "Il Kilimangiaro (5895 m), in Tanzania." },
      { type: "tf", q: "L'Africa produce la maggior parte delle emissioni mondiali di gas serra.", answer: false, explain: "Produce meno del 4% delle emissioni globali, ma subisce molte conseguenze del cambiamento climatico." },
      { type: "mc", q: "Perché la crescita demografica africana è un'opportunità e una sfida?", options: ["Perché molti giovani possono sostenere lo sviluppo se hanno istruzione e lavoro", "Perché non ci sono giovani", "Perché la popolazione sta diminuendo"], answer: 0, explain: "È il concetto di dividendo demografico: serve investire in scuole, salute, occupazione." }
    ]
  }
});
