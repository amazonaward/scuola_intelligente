TOPIC('it', {
  id: "l1-geo-citta",
  title: "Città e urbanizzazione",
  intro: "Dal 2007, per la prima volta nella storia, nel mondo vivono più persone in <b>città</b> che in campagna. Le città occupano pochissimo spazio (meno del 3% delle terre emerse) ma consumano la maggior parte dell'energia, producono la maggior parte della ricchezza e delle emissioni. Come nascono, come crescono, come sono organizzate? E come possono diventare <b>sostenibili</b>?",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è una città e come nasce",
      html: `<p>Non esiste una definizione unica di città: le statistiche usano soglie diverse (in Danimarca bastano 200 abitanti, in Giappone 50.000). In geografia si definisce <b>città</b> un insediamento stabile, ad alta densità, con funzioni <b>diverse dall'agricoltura</b> (commercio, artigianato, governo, cultura, servizi) e che esercita influenza sul territorio circostante.</p>
<p>Le prime città nacquero circa <b>5.000-6.000 anni fa</b> in <b>Mesopotamia</b> (<b>Uruk</b>, nell'attuale Iraq, tra le più antiche e con decine di migliaia di abitanti), e poco dopo lungo il Nilo, l'Indo (Mohenjo-daro) e il Fiume Giallo. Condizioni necessarie: l'agricoltura produceva un <b>surplus</b> di cibo, che permetteva a una parte della popolazione di fare altro (artigiani, sacerdoti, soldati, scribi). Le città antiche sorgevano vicino all'acqua, su incroci di vie di comunicazione, su alture difendibili.</p>
<p>L'<b>urbanizzazione</b> è il processo di crescita della quota di popolazione che vive in città. Esplose con la <b>Rivoluzione industriale</b>: Londra, che nel 1800 aveva circa 1 milione di abitanti, nel 1900 ne aveva oltre 6 milioni. Oggi la crescita più rapida riguarda l'<b>Asia</b> e l'<b>Africa</b>: città come Lagos (Nigeria) o Dhaka (Bangladesh) crescono di centinaia di migliaia di persone ogni anno.</p>`
    },
    {
      type: "text",
      title: "2. I numeri dell'urbanizzazione",
      html: `<ul>
<li>1950: circa 30% della popolazione mondiale vive in città. <b>2007</b>: supera il 50%. Oggi: circa <b>57%</b>. Previsione ONU per il <b>2050</b>: circa <b>68%</b>.</li>
<li>Nord America, Europa occidentale, America Latina: oltre l'80% urbano. In <b>Italia</b> circa il 71%. Africa e Asia meridionale: ancora circa il 45-50%, ma urbanizzazione velocissima.</li>
<li><b>Metropoli</b>: grande città, con un'area di influenza che si estende ai comuni vicini (<b>area metropolitana</b>, o <b>conurbazione</b> quando i centri si saldano fra loro).</li>
<li><b>Megacittà</b>: oltre <b>10 milioni</b> di abitanti. Oggi ne esistono circa 33-37. Le più grandi: <b>Tokyo</b> (circa 37 milioni, nell'area metropolitana), <b>Delhi</b> (oltre 30), <b>Shanghai</b>, <b>Dhaka</b>, <b>San Paolo</b>, <b>Città del Messico</b>, <b>Il Cairo</b>, <b>Pechino</b>, <b>Mumbai</b>, <b>Osaka</b>. La maggior parte delle megacittà si trova in Asia e nei Paesi in via di sviluppo.</li>
<li><b>Megalopoli</b>: ampie regioni urbane formate da più metropoli saldate tra loro. Il termine fu reso celebre dal geografo francese <b>Jean Gottmann</b> (1961) per la costa nordorientale degli USA da <b>Boston a Washington</b> (\"Boswash\"), con oltre 50 milioni di abitanti. Altre: la fascia <b>Tokyo-Osaka</b> (Tokaido), il <b>Delta del Fiume delle Perle</b> in Cina, e in Europa la cosiddetta <b>\"banana blu\"</b> (Londra-Benelux-Reno-Milano).</li>
</ul>
<p>Le città crescono per <b>saldo naturale</b> ma soprattutto per l'<b>esodo rurale</b>: i contadini lasciano la campagna (spinti dalla meccanizzazione agricola, dalla povertà rurale e attratti dai salari e dai servizi) per trasferirsi in città.</p>`
    },
    {
      type: "3d",
      title: "Sul globo: le megacittà",
      scene: "globe",
      options: {
        points: [
          { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#dc2626" },
          { lat: 28.6, lon: 77.2, label: "Delhi", color: "#dc2626" },
          { lat: 31.2, lon: 121.5, label: "Shanghai", color: "#dc2626" },
          { lat: 23.8, lon: 90.4, label: "Dhaka", color: "#dc2626" },
          { lat: -23.5, lon: -46.6, label: "San Paolo", color: "#f59e0b" },
          { lat: 19.4, lon: -99.1, label: "Città del Messico", color: "#f59e0b" },
          { lat: 30.0, lon: 31.2, label: "Il Cairo", color: "#f59e0b" },
          { lat: 19.1, lon: 72.9, label: "Mumbai", color: "#dc2626" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: 6.5, lon: 3.4, label: "Lagos (in rapida crescita)", color: "#16a34a" },
          { lat: 41.9, lon: 12.5, label: "Roma", color: "#7c3aed" }
        ]
      },
      caption: "Rosso: megacittà asiatiche; arancio: America Latina e Africa del Nord; verde: Lagos, tra le città più dinamiche del mondo. Nota come la maggior parte siano in Asia."
    },
    {
      type: "svg",
      title: "La crescita della popolazione urbana",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="60" y1="30" x2="60" y2="250" stroke="#111827" stroke-width="2"/>
<rect x="85" y="190" width="70" height="60" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="185" y="160" width="70" height="90" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="285" y="125" width="70" height="125" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="385" y="95" width="70" height="155" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<rect x="485" y="60" width="70" height="190" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="120" y="183" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">30%</text>
<text x="220" y="153" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">36%</text>
<text x="320" y="118" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">43%</text>
<text x="420" y="88" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">51%</text>
<text x="520" y="53" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">57%</text>
<text x="120" y="272" font-size="15" text-anchor="middle" fill="#111827">1950</text>
<text x="220" y="272" font-size="15" text-anchor="middle" fill="#111827">1970</text>
<text x="320" y="272" font-size="15" text-anchor="middle" fill="#111827">1985</text>
<text x="420" y="272" font-size="15" text-anchor="middle" fill="#111827">2007</text>
<text x="520" y="272" font-size="15" text-anchor="middle" fill="#111827">oggi</text>
<text x="300" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Quota della popolazione mondiale che vive in città (valori arrotondati)</text>
</svg>`,
      caption: "L'urbanizzazione è cresciuta in modo costante: il sorpasso sulla popolazione rurale è avvenuto intorno al 2007. Le percentuali sono approssimate, dalle stime ONU."
    },
    {
      type: "quiz",
      title: "Mini-quiz: numeri e definizioni",
      questions: [
        { type: "mc", q: "Quando la popolazione urbana ha superato per la prima volta quella rurale?", options: ["1850", "1950", "Intorno al 2007"], answer: 2, explain: "Intorno al 2007, secondo l'ONU, si è superata la soglia del 50% di popolazione urbana." },
        { type: "mc", q: "Quanti abitanti deve avere (circa) una megacittà?", options: ["Più di 1 milione", "Più di 10 milioni", "Più di 100 milioni"], answer: 1, explain: "Per convenzione una megacittà ha più di 10 milioni di abitanti." },
        { type: "text", q: "Come si chiama la regione urbana formata da più metropoli saldate tra loro (es. Boston-Washington)?", answer: ["megalopoli", "megalopoli (boswash)", "la megalopoli"], explain: "Megalopoli, termine reso celebre da Jean Gottmann nel 1961." }
      ]
    },
    {
      type: "text",
      title: "3. Come è organizzata una città",
      html: `<p>I geografi hanno proposto alcuni <b>modelli</b> per descrivere la struttura interna delle città:</p>
<ul>
<li><b>Modello a zone concentriche</b> (Ernest Burgess, Chicago, 1925): al centro il <b>CBD</b> (<i>Central Business District</i>, il centro degli affari), poi una zona di transizione, quartieri operai, quartieri residenziali medi e infine i quartieri dei pendolari ai margini.</li>
<li><b>Modello a settori</b> (Homer Hoyt, 1939): la città si sviluppa a spicchi lungo le grandi vie di comunicazione (strade, ferrovie, fiumi).</li>
<li><b>Modello a nuclei multipli</b> (Harris e Ullman, 1945): più centri (porto, università, zona industriale, centro commerciale) con funzioni diverse.</li>
</ul>
<p>Le principali <b>funzioni urbane</b> sono la residenza, il commercio, l'industria, i servizi (scuola, sanità, amministrazione), la cultura e il tempo libero, le infrastrutture e i trasporti. La città è divisa in <b>quartieri</b>: centro storico, zone residenziali, periferie, aree industriali, zone verdi.</p>
<p>Il <b>centro storico</b> delle città italiane ed europee conserva spesso la pianta medievale (strade strette, piazze, mura), spesso nata dall'antico <b>castrum romano</b> (due strade perpendicolari, <i>cardo</i> e <i>decumano</i>, come a Torino o a Firenze). Le città nordamericane hanno invece un centro con grattacieli e una pianta a <b>griglia</b> (Manhattan). Le città del mondo islamico hanno spesso una <b>medina</b> con vicoli stretti attorno a moschea e mercato (<i>suq</i>). Le città latinoamericane nacquero dagli spagnoli attorno a una <b>plaza mayor</b>.</p>`
    },
    {
      type: "svg",
      title: "Il modello a zone concentriche di Burgess",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="130" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="100" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="70" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<circle cx="170" cy="150" r="42" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
<circle cx="170" cy="150" r="18" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="170" y="155" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">1</text>
<text x="170" y="115" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">2</text>
<text x="170" y="85" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">3</text>
<text x="170" y="52" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">4</text>
<text x="170" y="26" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">5</text>
<text x="340" y="55" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#dc2626">1</tspan> Centro degli affari (CBD)</text>
<text x="340" y="95" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#c2410c">2</tspan> Zona di transizione (piccola industria)</text>
<text x="340" y="135" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#b45309">3</tspan> Quartieri operai</text>
<text x="340" y="175" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">4</tspan> Residenze della classe media</text>
<text x="340" y="215" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">5</tspan> Zona dei pendolari</text>
<text x="340" y="265" font-size="14" fill="#6b7280">Modello teorico (Chicago, 1925): nella realtà ogni città ha forme proprie.</text>
</svg>`,
      caption: "Il modello concentrico era un'osservazione su Chicago: la città cresce dal centro verso l'esterno, e i gruppi sociali si dispongono per anelli. Oggi molte città hanno più centri."
    },
    {
      type: "text",
      title: "4. Problemi e sfide delle città",
      html: `<ul>
<li><b>Baraccopoli</b> (<i>slum</i>, <i>favelas</i>, <i>bidonville</i>): circa <b>1,1 miliardi</b> di persone vivono in insediamenti informali, senza acqua potabile, fogne o titolo di proprietà. <b>Dharavi</b> (Mumbai), <b>Kibera</b> (Nairobi), la <b>Rocinha</b> (Rio de Janeiro) sono tra le più note. Ma sono anche luoghi di grande vitalità economica: a Dharavi lavorano migliaia di piccole imprese di riciclo, pelle e ceramica.</li>
<li><b>Traffico e smog</b>: le città concentrano veicoli ed emissioni. Delhi, Lahore, Dhaka sono tra le più inquinate al mondo; la Pianura Padana in inverno ha livelli di polveri sottili (PM10, PM2,5) spesso oltre i limiti, perché i monti e la scarsa ventilazione fanno ristagnare l'aria.</li>
<li><b>Isola di calore urbana</b>: asfalto e cemento assorbono calore e il verde è poco, quindi la città può essere più calda della campagna di <b>2-5 °C</b> di giorno e fino a 8-10 °C in alcune notti estive.</li>
<li><b>Consumo di suolo</b> e <b>urban sprawl</b> (espansione a bassa densità): costruire sui terreni agricoli impermeabilizza il suolo e aumenta il rischio di alluvioni; in Italia ogni giorno si perdono molti ettari di suolo.</li>
<li><b>Disuguaglianze</b> e <b>segregazione</b> (quartieri ricchi e quartieri poveri), <b>gentrificazione</b> (un quartiere si rinnova e arrivano abitanti più ricchi, mentre quelli precedenti sono spinti fuori dagli affitti alti).</li>
<li><b>Rifiuti, rumore, casa</b>: smaltimento, costo degli affitti, carenza di alloggi.</li>
<li><b>Rischi</b>: terremoti, inondazioni, caldo; le grandi città costiere (Giacarta, Miami, Venezia, Dacca) sono esposte all'innalzamento del mare. Giacarta sta affondando a causa del prelievo di acqua dal sottosuolo e l'Indonesia sta costruendo una nuova capitale, Nusantara, sull'isola del Borneo.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: il traffico in una città",
      html: `<p>Per portare 1.000 persone in centro servono:</p>
<ul>
<li>circa <b>800 automobili</b> (con 1,2 persone per auto): coprono più di un chilometro di strada a doppia corsia;</li>
<li>circa <b>12 autobus</b> pieni;</li>
<li>circa <b>2 tram</b> (o un solo treno metropolitano a 6 vagoni).</li>
</ul>
<p>Questi numeri sono ordini di grandezza, ma mostrano perché il <b>trasporto pubblico</b> è lo strumento più efficiente per città dense: usa meno spazio, meno energia, e produce meno emissioni <i>per passeggero</i>. Una bicicletta occupa circa un decimo dello spazio di un'auto in movimento. Per questo molte città (Copenaghen, Amsterdam, Utrecht, Parigi) hanno ampliato piste ciclabili e zone pedonali.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: quanto è densa la tua città?",
      html: `<p>Una città ha <b>150.000 abitanti</b> su <b>60 km²</b>; una città vicina ne ha 150.000 su <b>240 km²</b>.</p>
<ul>
<li>Densità della prima = 150.000 ÷ 60 = <b>2.500 ab./km²</b>.</li>
<li>Densità della seconda = 150.000 ÷ 240 = <b>625 ab./km²</b>.</li>
</ul>
<p>A parità di abitanti, la seconda occupa <b>quattro volte più suolo</b>: servono più strade, più tubi, più linee elettriche e più chilometri per andare a scuola o al lavoro. Ecco perché molti urbanisti sostengono la <b>città compatta</b>. Ma la densità non è tutto: una città densa ha bisogno anche di parchi e spazio pubblico di qualità, altrimenti si vive male.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… una città può vivere sott'acqua?",
      html: `<p><b>Venezia</b> è costruita su circa 118 isolette della laguna, su pali di legno di ontano, larice e rovere piantati nel fango. Ha oltre 400 ponti. Per proteggerla dall'\"acqua alta\" è stato costruito il sistema di paratoie mobili <b>MOSE</b>, entrato in funzione nel 2020. Ma il riscaldamento globale e la subsidenza (l'abbassamento del suolo) rimangono una sfida: Venezia è un laboratorio di <b>adattamento</b> per tutte le città costiere.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… esistono città costruite da zero?",
      html: `<p>Alcune capitali sono state progettate e costruite a tavolino: <b>Brasilia</b> (Brasile, inaugurata nel 1960, progettata da Lúcio Costa e Oscar Niemeyer, a forma di aereo), <b>Canberra</b> in Australia (1913), <b>Washington</b> D.C., <b>Abuja</b> in Nigeria (dal 1991). Non tutte funzionano come previsto: una città vive non solo di piani, ma delle abitudini di chi la abita.</p>`
    },
    {
      type: "text",
      title: "5. Verso città sostenibili",
      html: `<p>Le città occupano circa il 3% delle terre emerse ma consumano oltre due terzi dell'energia mondiale e producono circa il 70% delle emissioni di CO₂ legate all'energia. Proprio per questo sono il luogo dove la transizione ecologica può funzionare meglio: densità significa servizi più efficienti, trasporti pubblici e meno spreco di suolo.</p>
<p>Il <b>Goal 11</b> dell'Agenda 2030 dell'ONU si intitola proprio \"<b>Città e comunità sostenibili</b>\": rendere le città inclusive, sicure, resilienti e sostenibili. Alcune strategie:</p>
<ul>
<li><b>Mobilità sostenibile</b>: metropolitane, tram, bus elettrici, piste ciclabili, zone a traffico limitato. Esempio: <b>Curitiba</b> (Brasile) inventò negli anni '70 le corsie preferenziali per bus rapidi (BRT), poi copiate da centinaia di città.</li>
<li><b>Città compatta</b> e <b>\"città dei 15 minuti\"</b> (proposta dal professore Carlos Moreno e adottata a Parigi): servizi essenziali (scuola, negozi, medico, verde) raggiungibili a piedi o in bici in 15 minuti.</li>
<li><b>Più verde</b>: parchi, tetti verdi, alberi che riducono l'isola di calore (un albero maturo può assorbire decine di kg di CO₂ l'anno e dare ombra fresca). A Milano il <b>Bosco Verticale</b> (Stefano Boeri, 2014) ha circa 800 alberi (e migliaia di arbusti) sulle facciate di due torri.</li>
<li><b>Edifici efficienti</b>: isolamento, pannelli solari, teleriscaldamento (a Torino e a Brescia), riqualificazione energetica.</li>
<li><b>Economia circolare</b>: raccolta differenziata, riciclo, riuso.</li>
<li><b>Partecipazione</b>: i cittadini decidono con i bilanci partecipativi e le assemblee di quartiere.</li>
<li>Le città intelligenti (<b>smart city</b>) usano sensori e dati per gestire traffico, rifiuti, illuminazione e acqua, ma devono anche proteggere la <b>privacy</b>.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Che cosa fare con la piazza centrale?",
      html: `<p>Sei un assessore alla mobilità di una città di 300.000 abitanti. Il centro è congestionato dalle auto e l'aria è spesso inquinata. Hai la possibilità di trasformare la piazza centrale, oggi parcheggio per 150 auto.</p>`,
      question: "Quale scelta ti sembra migliore per una città sostenibile?",
      options: [
        { label: "Costruire un parcheggio sotterraneo più grande", outcome: "Attira ancora più auto in centro: i traffici aumentano, le emissioni restano alte e il costo è molto elevato." },
        { label: "Pedonalizzare, con alberi e panchine, e potenziare bus e tram", outcome: "Molte città (Pontevedra in Spagna, Oslo, Bologna con le zone 30) hanno visto calare traffico e incidenti, mentre i negozi sono rimasti vivi o sono cresciuti." },
        { label: "Non fare nulla per non scontentare nessuno", outcome: "Il problema resta e peggiora con l'aumento delle auto, e l'inquinamento incide sulla salute dei cittadini." }
      ],
      answer: 1,
      explain: "Gli studi sulle città europee mostrano che offrire alternative al mezzo privato (trasporto pubblico, piste ciclabili, spazi pedonali) riduce traffico e inquinamento; i commercianti spesso temono cali di vendite che poi non si verificano, perché i pedoni spendono più tempo e denaro nei negozi."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le città",
      intro: "Una città è un sistema complesso: ecco tre modi per guardarla.",
      tabs: [
        {
          label: "🫀 La città come organismo",
          html: `<p>Una città si può paragonare a un <b>corpo</b>: le strade e le ferrovie sono le <b>arterie</b> che portano persone e merci; le fogne e i depuratori sono l'<b>apparato digerente</b>; l'elettricità e internet sono il <b>sistema nervoso</b>; i parchi sono i <b>polmoni</b>; il centro è il <b>cuore</b> economico. Come un corpo, la città consuma energia e produce rifiuti (il suo <b>metabolismo urbano</b>): una città sostenibile cerca di ridurre ciò che prende e di riciclare ciò che scarta.</p>`
        },
        {
          label: "🗺️ Leggere la pianta di una città",
          html: `<p>La forma delle strade racconta la storia: strade <b>curve e strette</b> sono tipiche dei centri medievali; strade <b>ortogonali</b> (a scacchiera) dei castra romani o delle città pianificate (Torino centro, Barcellona dell'Eixample); grandi <b>viali</b> e <b>boulevard</b> sono l'eredità delle riforme ottocentesche (Parigi di Haussmann); strade a <b>lisca di pesce</b> o a <b>cul-de-sac</b> sono tipiche dei quartieri suburbani del Novecento. Prova con una mappa della tua città: quante di queste forme trovi?</p>`,
          widget: "match",
          options: { pairs: [["Strade curve e vicoli", "Centro medievale"], ["Griglia ortogonale", "Castrum romano o città pianificata"], ["Grandi viali alberati", "Riforma ottocentesca"], ["Cul-de-sac e villette", "Suburbio novecentesco"]] }
        },
        {
          label: "🌡️ L'isola di calore",
          html: `<p>Una giornata d'agosto: il prato di un parco misura circa 30 °C, l'asfalto al sole anche <b>60 °C</b>, un tetto di cemento chiaro 45 °C. L'asfalto assorbe luce, la rilascia di notte come calore, e il cemento non traspira come le foglie. Per questo di notte la città non si raffredda. Soluzioni: tetti chiari o verdi, più alberi, pavimentazioni drenanti, fontane, meno aria condizionata (che scarica calore all'esterno).</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fffbeb"/><polyline points="30,150 100,130 180,60 250,50 320,70 400,120 470,140" fill="none" stroke="#dc2626" stroke-width="4"/><text x="250" y="35" font-size="15" text-anchor="middle" fill="#dc2626" font-weight="bold">centro città (più caldo)</text><text x="60" y="175" font-size="14" fill="#15803d" font-weight="bold">campagna</text><text x="400" y="175" font-size="14" fill="#15803d" font-weight="bold">parco / campagna</text><text x="250" y="190" font-size="14" text-anchor="middle" fill="#111827">profilo della temperatura da un lato all'altro</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: la città, perché esiste e come cambia",
      nodes: [
        { id: "surplus", label: "Agricoltura e surplus", x: 20, y: 8, color: "#16a34a", html: "Produrre più cibo di quanto serva ai contadini.", why: "Senza un surplus agricolo nessuno potrebbe fare l'artigiano o il sacerdote: la città nasce dopo la rivoluzione agricola, circa 5.000-6.000 anni fa in Mesopotamia, grazie all'irrigazione e a sistemi di conservazione dei cereali." },
        { id: "funzioni", label: "Funzioni urbane", x: 80, y: 8, color: "#2563eb", html: "Commercio, governo, cultura, servizi.", why: "La città concentra scambi e informazioni: più persone vicine significano più incontri, più idee e più mercato (le 'economie di agglomerazione' studiate dall'economista Alfred Marshall nel 1890)." },
        { id: "urbanizzazione", label: "Urbanizzazione", x: 50, y: 30, color: "#f59e0b", html: "Cresce la quota di abitanti che vivono in città.", why: "Con la Rivoluzione industriale (dal 1760 circa) le fabbriche concentrano il lavoro nelle città; oggi la crescita urbana è guidata da Asia e Africa e dalla meccanizzazione dell'agricoltura, che libera manodopera nelle campagne." },
        { id: "struttura", label: "Struttura e modelli", x: 20, y: 56, color: "#a855f7", html: "Centro, periferie, quartieri, modelli concentrici e a settori.", why: "I modelli di Burgess, Hoyt, Harris e Ullman nascono dalla Scuola di Chicago, che negli anni '20 studiò la città come un laboratorio sociale." },
        { id: "problemi", label: "Problemi", x: 80, y: 56, color: "#dc2626", html: "Smog, traffico, slum, isola di calore.", why: "Sono effetti della concentrazione: più persone e più attività nello stesso spazio, spesso cresciute più in fretta dei servizi. In molte città l'espansione informale precede le infrastrutture." },
        { id: "sostenibilita", label: "Città sostenibili", x: 50, y: 80, color: "#14b8a6", html: "Mobilità, verde, edifici efficienti, partecipazione.", why: "L'obiettivo 11 dell'Agenda 2030 e la Nuova Agenda Urbana (ONU, Habitat III, Quito 2016) riconoscono che il futuro del pianeta si decide in gran parte nelle città." },
        { id: "futuro", label: "Il futuro urbano", x: 50, y: 96, color: "#ec4899", html: "Circa 2,5 miliardi di nuovi cittadini entro il 2050.", why: "Secondo l'ONU, quasi 90% della crescita urbana avverrà in Asia e Africa: le scelte che si faranno ora su alloggi e trasporti determineranno il consumo di risorse per decenni." }
      ],
      edges: [
        ["surplus", "funzioni", "permette"],
        ["funzioni", "urbanizzazione", "attirano →"],
        ["urbanizzazione", "struttura", "produce"],
        ["urbanizzazione", "problemi", "genera"],
        ["problemi", "sostenibilita", "richiedono"],
        ["struttura", "sostenibilita", "guida la"],
        ["sostenibilita", "futuro", "prepara il"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Dal <b>2007</b> più persone vivono in città che in campagna (oggi circa 57%, nel 2050 circa 68%).</li>
<li><b>Metropoli</b>, <b>megacittà</b> (oltre 10 milioni), <b>megalopoli</b> (più metropoli saldate: Boswash).</li>
<li>Modelli di città: <b>concentrico</b> (Burgess), <b>a settori</b> (Hoyt), <b>a nuclei multipli</b> (Harris-Ullman).</li>
<li>Problemi: baraccopoli (1,1 miliardi di persone), smog, traffico, isola di calore, consumo di suolo, disuguaglianze.</li>
<li><b>Città sostenibili</b>: mobilità collettiva, verde urbano, efficienza energetica, economia circolare, Obiettivo 11 dell'Agenda 2030.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: struttura e sostenibilità",
      questions: [
        { type: "mc", q: "Che cos'è l'isola di calore urbana?", options: ["Una zona della città più calda della campagna circostante", "Un'isola del mare nei pressi della città", "Un quartiere con molti parchi"], answer: 0, explain: "Asfalto e cemento accumulano calore e le città sono più calde della campagna, soprattutto di notte." },
        { type: "mc", q: "Quale numero è l'Obiettivo dell'Agenda 2030 dedicato alle città sostenibili?", options: ["Obiettivo 2", "Obiettivo 11", "Obiettivo 17"], answer: 1, explain: "L'Obiettivo 11 è \"Città e comunità sostenibili\"." },
        { type: "tf", q: "Il modello di Burgess descrive la città come una serie di anelli concentrici attorno al centro degli affari.", answer: true, explain: "È il modello a zone concentriche, elaborato a Chicago nel 1925." }
      ]
    }
  ],
  glossary: [
    { t: "Urbanizzazione", d: "Aumento della quota di popolazione che vive in città e crescita delle aree urbane." },
    { t: "Metropoli", d: "Grande città con funzioni importanti e un'area di influenza che include i centri vicini." },
    { t: "Megacittà", d: "Città con più di 10 milioni di abitanti." },
    { t: "Megalopoli", d: "Grande regione urbana formata da più metropoli saldate tra loro (es. Boston-Washington)." },
    { t: "Conurbazione", d: "Unione di più centri urbani vicini che si saldano in un unico insieme." },
    { t: "CBD", d: "Central Business District: il centro degli affari della città, con uffici, banche e commercio." },
    { t: "Esodo rurale", d: "Trasferimento di popolazione dalle campagne alle città." },
    { t: "Baraccopoli", d: "Insediamento urbano informale e povero, con case precarie e pochi servizi (slum, favela)." },
    { t: "Isola di calore", d: "Fenomeno per cui le aree urbane hanno temperature più alte di quelle rurali circostanti." },
    { t: "Gentrificazione", d: "Rinnovamento di un quartiere popolare con arrivo di abitanti più ricchi e aumento degli affitti." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale condizione ha reso possibile la nascita delle prime città?", options: ["Un surplus agricolo che liberava persone dal lavoro dei campi", "L'invenzione dell'automobile", "La scoperta dell'America"], answer: 0, explain: "Quando i contadini produssero più cibo del necessario, altre persone poterono dedicarsi ad artigianato, commercio e governo." },
      { type: "num", q: "Se il 57% di 8 miliardi di persone vive in città, quanti miliardi di persone sono urbane (arrotonda a una cifra decimale)?", answer: 4.6, tol: 0.1, unit: "miliardi", explain: "8 × 0,57 = 4,56 ≈ 4,6 miliardi." },
      { type: "mc", q: "Chi coniò il termine 'megalopoli' per la costa nord-orientale degli USA?", options: ["Jean Gottmann", "Ernest Burgess", "Carlos Moreno"], answer: 0, explain: "Il geografo francese Jean Gottmann, nel 1961." },
      { type: "mc", q: "In quale zona del modello di Burgess si trovano uffici, banche e negozi principali?", options: ["Zona dei pendolari", "CBD, il centro degli affari", "Quartieri operai"], answer: 1, explain: "Il CBD occupa il cuore della città." },
      { type: "tf", q: "Le baraccopoli sono sempre luoghi privi di attività economiche.", answer: false, explain: "Molte (come Dharavi a Mumbai) ospitano migliaia di piccole imprese; mancano però servizi e sicurezza." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Prime città in Mesopotamia", "Rivoluzione industriale e crescita di Londra", "Sorpasso della popolazione urbana su quella rurale (2007)", "Previsione 68% di urbani (2050)"], explain: "Dalle origini mesopotamiche, all'urbanizzazione industriale, al 2007, alle previsioni al 2050." },
      { type: "mc", q: "Quale misura riduce l'isola di calore urbana?", options: ["Più alberi e tetti verdi", "Più asfalto scuro", "Più aria condizionata verso l'esterno"], answer: 0, explain: "La vegetazione fa ombra e raffredda con la traspirazione." },
      { type: "mc", q: "Che cosa propone l'idea della 'città dei 15 minuti'?", options: ["Avere i servizi essenziali raggiungibili a piedi o in bici in 15 minuti", "Costruire autostrade di 15 corsie", "Limitare gli abitanti a 15.000"], answer: 0, explain: "Il modello riduce gli spostamenti in auto e rende i quartieri più vivibili." },
      { type: "text", q: "Come si chiama il fenomeno per cui la popolazione lascia le campagne per spostarsi in città?", answer: ["esodo rurale", "l'esodo rurale", "urbanizzazione"], explain: "Esodo rurale (spesso l'urbanizzazione ne è la conseguenza)." },
      { type: "tf", q: "Entro il 2050 quasi tutta la crescita della popolazione urbana avverrà in Asia e Africa.", answer: true, explain: "Secondo le proiezioni ONU, circa il 90% della crescita urbana avverrà in questi due continenti." }
    ]
  }
});
