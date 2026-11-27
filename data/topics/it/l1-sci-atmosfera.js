TOPIC('it', {
  id: "l1-sci-atmosfera",
  title: "L'atmosfera e il tempo meteorologico",
  intro: "Siamo immersi in un oceano d'aria che ci protegge dalle radiazioni, regola la temperatura del pianeta e ci porta la pioggia. Ogni giorno ne vediamo gli effetti: un temporale improvviso, un cielo terso dopo la tramontana, la nebbia in Pianura Padana. In questa lezione scopriamo com'è fatta l'<b>atmosfera</b>, perché c'è il <b>vento</b>, come si formano <b>nuvole e piogge</b> e come si legge una carta del tempo.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Com'è fatta l'atmosfera",
      html: `<p>L'<b>atmosfera</b> è l'involucro gassoso che avvolge la Terra, trattenuto dalla gravità. Pur estendendosi per centinaia di chilometri, il <b>99%</b> della sua massa si trova nei primi 30 km, e il 50% sotto i 5,5 km.</p>
<p>La <b>composizione dell'aria secca</b> (in volume):</p>
<table>
<tr><th>Gas</th><th>Percentuale</th></tr>
<tr><td>Azoto (N₂)</td><td>78,08%</td></tr>
<tr><td>Ossigeno (O₂)</td><td>20,95%</td></tr>
<tr><td>Argon (Ar)</td><td>0,93%</td></tr>
<tr><td>Anidride carbonica (CO₂)</td><td>circa 0,042% (circa 420 ppm)</td></tr>
<tr><td>Altri (neon, elio, metano, ozono…)</td><td>tracce</td></tr>
</table>
<p>Inoltre l'aria contiene una quantità variabile di <b>vapore acqueo</b> (da quasi 0 al 4%) e di <b>particolato</b> (polveri, sali marini, polline, ceneri). Anche se la CO₂ è un'infima frazione, è un gas serra: dal 1750 la sua concentrazione è passata da circa 280 a oltre 420 ppm per l'uso di combustibili fossili.</p>
<p>L'atmosfera attuale è molto diversa da quella primordiale: l'ossigeno comparve soprattutto per opera dei <b>cianobatteri</b>, circa 2,4 miliardi di anni fa (<b>Grande Ossidazione</b>), un evento che rese possibile la vita complessa.</p>`
    },
    {
      type: "svg",
      title: "Gli strati dell'atmosfera",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#f8fafc"/>
<rect x="30" y="285" width="260" height="35" fill="#fde68a" stroke="#92400e"/>
<rect x="30" y="215" width="260" height="70" fill="#bfdbfe" stroke="#1d4ed8"/>
<rect x="30" y="150" width="260" height="65" fill="#c7d2fe" stroke="#4338ca"/>
<rect x="30" y="85" width="260" height="65" fill="#ddd6fe" stroke="#6d28d9"/>
<rect x="30" y="20" width="260" height="65" fill="#1e1b4b" stroke="#312e81"/>
<text x="160" y="308" font-size="15" text-anchor="middle" fill="#1f2937">TERRA</text>
<text x="160" y="255" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">TROPOSFERA</text>
<text x="160" y="187" font-size="16" text-anchor="middle" fill="#312e81" font-weight="bold">STRATOSFERA</text>
<text x="160" y="122" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">MESOSFERA</text>
<text x="160" y="58" font-size="16" text-anchor="middle" fill="#e0e7ff" font-weight="bold">TERMOSFERA</text>
<g font-size="14" fill="#1f2937">
<text x="305" y="285">0 km</text>
<text x="305" y="219">~12 km (tropopausa)</text>
<text x="305" y="154">~50 km</text>
<text x="305" y="89">~85 km</text>
<text x="305" y="24">oltre 600 km: esosfera</text>
</g>
<g font-size="14" fill="#334155">
<text x="470" y="250">meteo, nuvole, aerei di linea</text>
<text x="470" y="182">strato dell'ozono (15-35 km)</text>
<text x="470" y="118">meteore (stelle cadenti)</text>
<text x="470" y="55">aurore, ISS (circa 400 km)</text>
</g>
<text x="470" y="270" font-size="14" fill="#1d4ed8">T: da +15 a -56 °C</text>
<text x="470" y="202" font-size="14" fill="#4338ca">T: da -56 a circa 0 °C</text>
<text x="470" y="138" font-size="14" fill="#6d28d9">T: fino a -90 °C</text>
<text x="470" y="74" font-size="14" fill="#312e81">T: sopra 1000 °C (ma pochissima aria)</text>
</svg>`,
      caption: "La temperatura scende con la quota nella troposfera, sale nella stratosfera (l'ozono assorbe i raggi UV), ridiscende nella mesosfera e risale nella termosfera."
    },
    {
      type: "text",
      title: "Gli strati, uno per uno",
      html: `<ul>
<li><b>Troposfera</b> (0-12 km circa; 8 km ai poli, 16-18 km all'equatore): contiene circa l'80% della massa dell'aria e quasi tutto il vapore acqueo. Qui avvengono i fenomeni meteorologici. La temperatura <b>diminuisce di circa 6,5 °C ogni 1000 m</b> (gradiente termico verticale), fino a circa −56 °C alla <b>tropopausa</b>.</li>
<li><b>Stratosfera</b> (12-50 km): l'aria è stabile e secca; qui c'è la <b>fascia di ozono</b> (O₃), che assorbe gran parte dei raggi ultravioletti (UV) dannosi, riscaldando l'aria.</li>
<li><b>Mesosfera</b> (50-85 km): il punto più freddo (fino a −90 °C); i meteoriti bruciano per attrito.</li>
<li><b>Termosfera</b> (85-600 km circa): rarefatta, con temperature teoriche di oltre 1000 °C per l'assorbimento dei raggi X e UV, ma un oggetto non si scalda perché ci sono troppo poche molecole. Ospita le <b>aurore polari</b> e i satelliti in orbita bassa.</li>
<li><b>Esosfera</b>: transizione verso lo spazio.</li>
</ul>
<p>Nel 1985 il gruppo di <b>Joseph Farman</b> scoprì il <b>buco dell'ozono</b> sull'Antartide, causato dai clorofluorocarburi (CFC) usati nei frigoriferi e nelle bombolette spray. Con il <b>Protocollo di Montreal</b> (1987) quasi tutti i Paesi vietarono i CFC: la fascia d'ozono si sta ricostituendo, ed è considerato uno dei maggiori successi della cooperazione ambientale internazionale.</p>`
    },
    {
      type: "curiosity",
      title: "L'effetto serra: nemico o amico?",
      html: `<p>Senza effetto serra la temperatura media della Terra sarebbe circa <b>−18 °C</b> invece degli attuali circa <b>+15 °C</b>. L'effetto serra naturale è <b>indispensabile alla vita</b>: gas come vapore acqueo, CO₂ e metano lasciano passare la luce del Sole, che scalda il suolo, ma trattengono parte del calore infrarosso emesso dalla superficie. Il problema è l'aumento dell'effetto serra dovuto alle emissioni umane: la temperatura media globale è già salita di circa <b>1,1-1,2 °C</b> rispetto al periodo preindustriale. Il fenomeno fu intuito da <b>Fourier</b> (1824), dimostrato in laboratorio da <b>Tyndall</b> (1859) e calcolato per la prima volta da <b>Arrhenius</b> (1896), che previde che raddoppiare la CO₂ avrebbe scaldato la Terra di alcuni gradi.</p>`
    },
    {
      type: "text",
      title: "La pressione atmosferica",
      html: `<p>L'aria ha peso: una colonna d'aria dalla superficie ai confini dell'atmosfera, su 1 cm², pesa circa 1 kg. La <b>pressione atmosferica</b> è la forza che l'aria esercita per unità di superficie. Al livello del mare vale mediamente <b>1013 hPa</b> (ettopascal), cioè <b>1 atmosfera</b>, ovvero 760 mm di mercurio.</p>
<p>Fu <b>Evangelista Torricelli</b>, allievo di Galileo, a dimostrarlo nel 1643: capovolgendo un tubo di vetro pieno di mercurio in una bacinella, il mercurio scese fino a una colonna di 76 cm, sostenuta dal peso dell'aria sul mercurio della bacinella: nasceva il <b>barometro</b>. Nel 1648 <b>Blaise Pascal</b> fece ripetere l'esperimento da suo cognato sul Puy de Dôme e vide che salendo di quota la colonna si abbassava: l'aria sopra è meno.</p>
<p>Come varia la pressione:</p>
<ul>
<li><b>con la quota</b>: diminuisce, circa 1 hPa ogni 8 m nei primi chilometri; dimezza ogni circa 5,5 km (sull'Everest è circa un terzo di quella a livello del mare, circa 330 hPa);</li>
<li><b>con la temperatura</b>: l'aria calda è più leggera, quindi sale e crea una zona di <b>bassa pressione</b> (<b>depressione o ciclone</b>); l'aria fredda è più pesante e scende creando <b>alta pressione</b> (<b>anticiclone</b>).</li>
</ul>
<p>Sulle carte meteorologiche le <b>isobare</b> sono linee che uniscono i punti con la stessa pressione. In una depressione il tempo è in genere perturbato; in un anticiclone sereno.</p>`
    },
    {
      type: "example",
      title: "Temperatura e pressione in quota",
      html: `<p>A Milano (120 m) ci sono <b>20 °C</b>. Che temperatura c'è, a parità di condizioni, in cima al Monte Rosa (Punta Gnifetti, 4554 m)?</p>
<ol>
<li>Dislivello: 4554 − 120 = 4434 m ≈ 4,43 km.</li>
<li>Calo: 4,43 × 6,5 = 28,8 °C.</li>
<li>T ≈ 20 − 28,8 = <b>−8,8 °C circa</b>.</li>
</ol>
<p>La pressione in cima sarà circa 580 hPa, cioè circa il 57% di quella a livello del mare: per questo gli alpinisti respirano "meno ossigeno" (la percentuale di O₂ è sempre 21%, ma ogni respiro ne contiene meno molecole).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'aria e la pressione",
      questions: [
        { type: "mc", q: "Qual è il gas più abbondante nell'aria?", options: ["Ossigeno", "Azoto", "Anidride carbonica"], answer: 1, explain: "L'azoto è il 78%." },
        { type: "mc", q: "In quale strato avvengono i fenomeni meteorologici?", options: ["Troposfera", "Stratosfera", "Termosfera"], answer: 0, explain: "È lo strato più basso, con la maggior parte del vapore." },
        { type: "tf", q: "In un anticiclone il tempo è di solito sereno.", answer: true, explain: "L'aria scende, si riscalda e le nuvole si dissolvono." }
      ]
    },
    {
      type: "text",
      title: "Il vento",
      html: `<p>Il <b>vento</b> è aria in movimento orizzontale, dalle zone di <b>alta pressione</b> verso quelle di <b>bassa pressione</b>, come l'acqua scorre in discesa. È più forte quanto più vicine sono le isobare (maggiore <b>gradiente</b> di pressione).</p>
<ul>
<li>Per la <b>forza di Coriolis</b> il vento viene deviato: <b>verso destra</b> nell'emisfero nord, verso sinistra nel sud. Per questo intorno a un ciclone l'aria ruota in senso <b>antiorario</b> nel nord (e converge verso il centro), intorno a un anticiclone in senso orario.</li>
<li>Si misura con l'<b>anemometro</b> (velocità, in m/s o nodi o km/h) e la <b>manica a vento</b> o banderuola (direzione). La direzione indica sempre da dove soffia: un vento di maestrale viene da nord-ovest.</li>
<li>La <b>scala Beaufort</b> (1805) lo classifica da 0 (calma) a 12 (uragano, oltre 118 km/h).</li>
</ul>
<p><b>Venti locali</b>: la <b>brezza di mare</b> di giorno (la terra si scalda più del mare, l'aria calda sale e quella fresca del mare la sostituisce: il vento va dal mare a terra) e la <b>brezza di terra</b> di notte; le <b>brezze di monte e di valle</b>; il <b>favonio</b> (foehn), vento caldo e secco che scende dopo aver superato i monti.</p>
<p><b>Venti regolari</b>: gli <b>alisei</b> soffiano verso l'equatore da nord-est (emisfero nord) e da sud-est (emisfero sud); i venti occidentali alle medie latitudini; i <b>monsoni</b> cambiano direzione con la stagione, portando le piogge in India e Asia sud-orientale in estate. Sui mari italiani ricordi: tramontana (N), grecale (NE), levante (E), scirocco (SE), ostro (S), libeccio (SW), ponente (W), maestrale (NW).</p>`
    },
    {
      type: "svg",
      title: "Come nasce il vento: la brezza di mare",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#e0f2fe"/>
<rect x="0" y="210" width="320" height="90" fill="#38bdf8"/>
<rect x="320" y="210" width="320" height="90" fill="#d6a85f"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<text x="160" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">MARE (più freddo)</text>
<text x="480" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">TERRA (più calda)</text>
<g stroke="#dc2626" stroke-width="4" fill="none"><path d="M480 200 L480 110"/><path d="M455 200 L455 120"/><path d="M505 200 L505 120"/></g>
<polygon points="480,95 468,115 492,115" fill="#dc2626"/><polygon points="455,105 443,125 467,125" fill="#dc2626"/><polygon points="505,105 493,125 517,125" fill="#dc2626"/>
<text x="480" y="80" font-size="14" text-anchor="middle" fill="#7f1d1d" font-weight="bold">aria calda sale: bassa pressione</text>
<path d="M240 200 L420 200" stroke="#1d4ed8" stroke-width="5" fill="none"/><polygon points="436,200 416,190 416,210" fill="#1d4ed8"/>
<text x="330" y="190" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">brezza di mare</text>
<path d="M420 70 L240 70" stroke="#6b7280" stroke-width="3" fill="none" stroke-dasharray="6 5"/><polygon points="224,70 244,60 244,80" fill="#6b7280"/>
<text x="330" y="60" font-size="14" text-anchor="middle" fill="#374151">ritorno in quota</text>
<text x="160" y="150" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">aria fredda: alta pressione</text>
</svg>`,
      caption: "Di giorno la terra si scalda più del mare: l'aria calda sale e l'aria fresca del mare corre a sostituirla."
    },
    {
      type: "text",
      title: "Umidità, nuvole e precipitazioni",
      html: `<p>L'<b>umidità assoluta</b> è la massa di vapore acqueo per m³ d'aria (g/m³). Ma l'aria non può contenerne quanto vuole: esiste un massimo, la <b>saturazione</b>, che aumenta con la temperatura (a 0 °C circa 4,8 g/m³; a 20 °C circa 17,3 g/m³; a 30 °C circa 30 g/m³). L'<b>umidità relativa</b> è il rapporto percentuale tra vapore presente e vapore massimo alla stessa temperatura: UR = (umidità assoluta / massimo) × 100. Si misura con l'<b>igrometro</b>. A 100% l'aria è satura. Si chiama <b>punto di rugiada</b> la temperatura alla quale, raffreddandosi, l'aria diventa satura.</p>
<p>Quando l'aria satura si raffredda ulteriormente, il vapore <b>condensa</b> su piccole particelle (nuclei di condensazione) formando goccioline: <b>nuvole</b> (in quota) o <b>nebbia</b> (a terra). Vicino al suolo si formano <b>rugiada</b> o <b>brina</b> (sotto 0 °C).</p>
<p>Le nuvole si classificano per forma e quota (Luke Howard, 1803):</p>
<ul>
<li><b>cirri</b>, filamentosi e sottili (oltre 6 km, cristalli di ghiaccio);</li>
<li><b>cumuli</b>, a cavolfiore (sviluppo verticale; se enormi, <b>cumulonembi</b>, che portano temporali e grandine);</li>
<li><b>strati</b>, coperture uniformi e grigie (a bassa quota: nebbia alta, pioggerella);</li>
<li><b>nembi</b> (<i>nimbus</i> = pioggia): nimbostrati, che danno piogge continue.</li>
</ul>
<p>Le goccioline di una nuvola (circa 0,02 mm) non cadono: sono troppo leggere. Per diventare goccia di pioggia (1-3 mm) devono unirsi (coalescenza) o crescere sul ghiaccio. Le <b>precipitazioni</b> possono essere pioggia, neve, grandine (chicchi di ghiaccio che salgono e scendono più volte nel cumulonembo) e nevischio. Si misurano con il <b>pluviometro</b> in mm (1 mm = 1 L/m²).</p>`
    },
    {
      type: "example",
      title: "Umidità relativa e punto di rugiada",
      html: `<p>Una sera d'estate a 20 °C l'aria contiene <b>10 g/m³</b> di vapore. A 20 °C il massimo è <b>17,3 g/m³</b>.</p>
<ol>
<li>UR = 10 / 17,3 × 100 ≈ <b>58%</b>.</li>
<li>Di notte la temperatura scende a circa 11 °C, dove il massimo è circa 10 g/m³: l'aria diventa satura (UR = 100%).</li>
<li>Il <b>punto di rugiada</b> è circa 11 °C: sull'erba si deposita rugiada, e se il cielo è sereno e senza vento può comparire nebbia.</li>
</ol>
<p>Per questo i vetri dell'auto si appannano d'inverno: l'aria calda e umida dell'abitacolo tocca il vetro freddo, scende sotto il punto di rugiada e condensa.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le nuvole e la pioggia",
      intro: "Dalla nuvola alla goccia, passando per l'aria che sale.",
      tabs: [
        {
          label: "🥶 La bottiglia fredda",
          html: `<p>Esperimento: tira fuori dal frigo una bottiglia o una lattina fredda in una giornata calda. Dopo pochi minuti si copre di goccioline. L'acqua non è "passata attraverso" il vetro: l'aria vicina alla parete si è raffreddata sotto il punto di rugiada, e il suo vapore è condensato. È la stessa cosa che accade nel cielo quando l'aria sale e si raffredda.</p>`
        },
        {
          label: "⛰️ Perché sulle montagne piove di più",
          html: `<p>Quando un vento umido incontra una catena montuosa è costretto a salire. Salendo si espande e si raffredda (circa 6-10 °C per 1000 m), il vapore condensa e forma nuvole e piogge (<b>precipitazioni orografiche</b>). Sul versante opposto l'aria scende, si riscalda e si asciuga: è il <b>favonio</b> (foehn), o "ombra pluviometrica". Ecco perché le Alpi hanno molte più precipitazioni dei fondovalle e la Pianura Padana d'inverno riceve vento secco e freddo quando la tramontana scavalca i monti.</p>`
        },
        {
          label: "🌩️ Perché c'è il temporale",
          html: `<p>In estate il suolo si scalda, l'aria calda e umida sale in una colonna (<b>convezione</b>), condensa e rilascia calore (il <b>calore latente</b>), che la fa salire ancora. Si sviluppa un cumulonembo alto 10-12 km. Nelle nubi, i cristalli di ghiaccio che si urtano si caricano elettricamente: la parte alta positiva, la base negativa. Quando la differenza di potenziale è abbastanza elevata scocca il <b>fulmine</b>, che scalda l'aria a circa 30 000 °C facendola espandere violentemente: è il <b>tuono</b>. La luce viaggia a 300 000 km/s, il suono a circa 340 m/s: contando i secondi tra lampo e tuono e dividendo per 3 ottieni la distanza del fulmine in km.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Perturbazioni, fronti e previsioni del tempo",
      html: `<p>Una <b>massa d'aria</b> è un grande volume d'aria con temperatura e umidità uniformi. Quando masse d'aria diverse si incontrano la loro superficie di separazione si chiama <b>fronte</b>:</p>
<ul>
<li><b>fronte caldo</b>: l'aria calda sale lentamente sopra quella fredda: nuvole stratificate, piogge deboli ma lunghe, poi temperatura che sale;</li>
<li><b>fronte freddo</b>: l'aria fredda si incunea sotto quella calda e la spinge verso l'alto: cumulonembi, rovesci e temporali violenti ma brevi, poi temperatura che scende e cielo che si schiarisce.</li>
</ul>
<p>Le <b>perturbazioni</b> delle nostre latitudini nascono dallo scontro tra aria polare e subtropicale; arrivano da ovest (dall'Atlantico). Sull'Italia incidono anche l'<b>anticiclone delle Azzorre</b> (estate stabile) e l'<b>anticiclone russo-siberiano</b> (freddo invernale).</p>
<p>Il <b>tempo meteorologico</b> è lo stato dell'atmosfera in un luogo e in un momento (temperatura, pressione, vento, umidità, nuvole, precipitazioni): cambia di ora in ora. Il <b>clima</b> è invece l'insieme delle condizioni medie su almeno 30 anni. Si dice: "il clima è ciò che ti aspetti, il tempo è ciò che trovi".</p>
<p>Le <b>previsioni</b> si basano su dati di stazioni a terra, palloni sonda, radar, satelliti, e su <b>modelli numerici</b> che risolvono al computer le equazioni di fluidodinamica e termodinamica dell'atmosfera: l'idea è di <b>Lewis Fry Richardson</b> (1922), la prima previsione automatica con computer è del 1950. Dopo circa una settimana la previsione si degrada perché l'atmosfera è un sistema <b>caotico</b>: <b>Edward Lorenz</b> negli anni Sessanta scoprì che piccole differenze iniziali crescono in fretta (il famoso "effetto farfalla").</p>`
    },
    {
      type: "curiosity",
      title: "Gli uragani e le grandi perturbazioni",
      html: `<p>Un <b>ciclone tropicale</b> (uragano nell'Atlantico, tifone nel Pacifico occidentale) si forma sugli oceani con acqua superficiale sopra circa 26,5 °C: il vapore che condensa rilascia enormi quantità di calore, che alimentano la tempesta, con venti sopra i 118 km/h e un "occhio" centrale calmo. Nel 1900 l'uragano che colpì Galveston (Texas) fece circa 8000 morti. Sul Mediterraneo si formano a volte i <b>medicane</b> (Mediterranean hurricane), cicloni con struttura simile ma più piccoli e deboli.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa dell'atmosfera: tocca i nodi e scopri il perché",
      nodes: [
        { id: "atm", label: "Atmosfera", x: 50, y: 6, color: "#3b82f6", html: "Involucro gassoso: 78% azoto, 21% ossigeno.", why: "L'aria fu considerata un elemento semplice fino al Settecento: <b>Priestley</b> (1774) e <b>Scheele</b> isolarono l'ossigeno, <b>Lavoisier</b> capì che l'aria è una miscela di due gas principali." },
        { id: "strati", label: "Strati", x: 20, y: 28, color: "#6366f1", html: "Troposfera, stratosfera, mesosfera, termosfera.", why: "Nel 1902 <b>Léon Teisserenc de Bort</b>, con palloni sonda senza equipaggio, scoprì che sopra circa 11 km la temperatura smette di scendere: fu la scoperta della stratosfera." },
        { id: "pres", label: "Pressione", x: 80, y: 28, color: "#f59e0b", html: "Peso dell'aria: 1013 hPa a livello del mare.", why: "<b>Torricelli</b> (1643) misurò la pressione e dimostrò l'esistenza del vuoto; <b>Pascal</b> (1648) confermò che diminuisce con la quota." },
        { id: "vento", label: "Vento", x: 50, y: 48, color: "#22c55e", html: "Aria che va dalle alte alle basse pressioni.", why: "Il vento è un tentativo dell'atmosfera di riequilibrare le differenze di pressione; la forza di Coriolis (1835) lo devia a destra nell'emisfero nord e spiega il senso di rotazione dei cicloni." },
        { id: "temp", label: "Temperatura", x: 15, y: 56, color: "#ef4444", html: "Dipende dal Sole, dalla quota, dall'effetto serra.", why: "L'effetto serra naturale tiene la Terra a +15 °C; <b>Arrhenius</b> (1896) calcolò che raddoppiando la CO₂ la temperatura sarebbe salita di alcuni gradi, anticipando di un secolo la questione climatica." },
        { id: "umid", label: "Umidità e nuvole", x: 80, y: 64, color: "#0ea5e9", html: "Il vapore condensa quando si raffredda.", why: "L'aria più calda contiene più vapore: quando sale e si raffredda il vapore in eccesso condensa e forma nuvole. Luke Howard nel 1803 le classificò con i nomi latini ancora oggi in uso." },
        { id: "prec", label: "Precipitazioni", x: 50, y: 82, color: "#14b8a6", html: "Pioggia, neve, grandine.", why: "Si formano quando le goccioline diventano abbastanza pesanti da cadere; possono essere convettive (temporali), orografiche (sui monti) o frontali." },
        { id: "fronti", label: "Fronti e perturbazioni", x: 18, y: 84, color: "#a855f7", html: "Incontro tra masse d'aria diverse.", why: "La teoria dei fronti fu elaborata dalla scuola norvegese di <b>Vilhelm Bjerknes</b> nel 1918-1922, con un'analogia con i fronti della Prima guerra mondiale." },
        { id: "clima", label: "Clima", x: 85, y: 90, color: "#64748b", html: "Media delle condizioni su almeno 30 anni.", why: "Il tempo è caotico e imprevedibile oltre circa 10 giorni (Lorenz), mentre il clima è la statistica a lungo termine, prevedibile in media: per questo lo si può studiare a decine di anni." }
      ],
      edges: [
        ["atm", "strati", "è divisa in"],
        ["atm", "pres", "esercita"],
        ["pres", "vento", "genera"],
        ["temp", "pres", "modifica"],
        ["temp", "umid", "regola"],
        ["umid", "prec", "produce"],
        ["fronti", "prec", "causano"],
        ["vento", "fronti", "porta"],
        ["prec", "clima", "formano"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: vento e nuvole",
      questions: [
        { type: "mc", q: "Il vento soffia…", options: ["dalle alte alle basse pressioni", "dalle basse alle alte pressioni", "dal mare verso la terra sempre"], answer: 0, explain: "Come l'acqua scende da un livello più alto a uno più basso." },
        { type: "num", q: "Un'umidità assoluta di 8,65 g/m³ a 20 °C (massimo 17,3 g/m³): qual è l'umidità relativa?", answer: 50, unit: "%", explain: "8,65 / 17,3 = 0,5 → 50%." },
        { type: "tf", q: "I cumulonembi sono nuvole che possono dare temporali e grandine.", answer: true, explain: "Sono nuvole di grande sviluppo verticale." }
      ]
    }
  ],
  glossary: [
    { t: "Atmosfera", d: "Involucro gassoso che circonda la Terra." },
    { t: "Troposfera", d: "Strato più basso, dove si sviluppano i fenomeni meteorologici." },
    { t: "Ozono", d: "Gas (O₃) della stratosfera che assorbe i raggi UV." },
    { t: "Pressione atmosferica", d: "Forza dell'aria per unità di superficie: 1013 hPa a livello del mare." },
    { t: "Isobara", d: "Linea che unisce punti con la stessa pressione." },
    { t: "Anticiclone / ciclone", d: "Zona di alta pressione (tempo sereno) / di bassa pressione (tempo perturbato)." },
    { t: "Umidità relativa", d: "Rapporto percentuale tra vapore presente e vapore massimo a quella temperatura." },
    { t: "Punto di rugiada", d: "Temperatura alla quale l'aria diventa satura e il vapore condensa." },
    { t: "Fronte", d: "Superficie di separazione tra due masse d'aria diverse." },
    { t: "Tempo meteorologico", d: "Stato dell'atmosfera in un luogo e in un momento." },
    { t: "Clima", d: "Condizioni atmosferiche medie di un luogo, su almeno 30 anni." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è la percentuale di ossigeno nell'aria?", options: ["Circa il 21%", "Circa il 78%", "Circa il 50%"], answer: 0, explain: "L'ossigeno è il 20,95%; l'azoto il 78%." },
      { type: "mc", q: "Dove si trova lo strato di ozono?", options: ["Troposfera", "Stratosfera", "Termosfera"], answer: 1, explain: "Fra 15 e 35 km circa." },
      { type: "num", q: "Di quanti °C diminuisce la temperatura salendo di 2000 m nella troposfera (6,5 °C/km)?", answer: 13, unit: "°C", explain: "2 × 6,5 = 13 °C." },
      { type: "mc", q: "Chi misurò per primo la pressione atmosferica col mercurio?", options: ["Torricelli", "Galileo", "Newton"], answer: 0, explain: "Evangelista Torricelli nel 1643." },
      { type: "tf", q: "In un ciclone (bassa pressione) il tempo è in genere perturbato.", answer: true, explain: "L'aria sale, condensa e forma nuvole e precipitazioni." },
      { type: "mc", q: "Perché la direzione del vento si indica con il punto di provenienza?", options: ["È una convenzione: vento di nord = proviene da nord", "Perché il vento va verso nord", "Perché è più semplice"], answer: 0, explain: "La tramontana, per esempio, soffia da nord verso sud." },
      { type: "num", q: "L'aria a 25 °C contiene 11,5 g/m³ di vapore; il massimo a 25 °C è 23 g/m³. Qual è l'umidità relativa?", answer: 50, unit: "%", explain: "11,5 / 23 = 50%." },
      { type: "order", q: "Ordina gli strati dell'atmosfera dal basso verso l'alto.", items: ["Troposfera", "Stratosfera", "Mesosfera", "Termosfera"], explain: "Dal suolo verso lo spazio." },
      { type: "text", q: "Come si chiama lo strumento che misura la pressione?", answer: ["barometro", "il barometro"], explain: "Inventato da Torricelli nel 1643." },
      { type: "mc", q: "Il clima è…", options: ["lo stato dell'atmosfera in questo momento", "la media delle condizioni atmosferiche su almeno 30 anni", "la temperatura massima del giorno"], answer: 1, explain: "Il tempo cambia ogni ora; il clima descrive il comportamento tipico di un luogo." }
    ]
  }
});
