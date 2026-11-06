TOPIC('it', {
  id: "m3-geo-oceania",
  title: "L'Oceania e le terre polari",
  intro: "Ai \"confini\" del mondo: l'<b>Oceania</b>, un continente fatto di un'isola-continente (l'Australia) e di migliaia di isole sparse nel Pacifico, e le <b>terre polari</b>, l'<b>Artide</b> e l'<b>Antartide</b>, i luoghi più freddi del pianeta. Sono ambienti estremi ma fondamentali per capire il clima della Terra.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. L'Oceania: un continente di isole",
      html: `<ul>
<li><b>Superficie</b>: circa 8,5 milioni di km², il continente più piccolo.</li>
<li><b>Abitanti</b>: circa 46 milioni, il continente abitato meno popoloso.</li>
<li><b>Stati indipendenti</b>: 14, tra cui <b>Australia</b>, <b>Nuova Zelanda</b>, <b>Papua Nuova Guinea</b>, <b>Figi</b>, <b>Samoa</b>, <b>Tonga</b>, <b>Kiribati</b>, <b>Tuvalu</b>.</li>
</ul>
<p>Le isole del Pacifico si dividono in tre grandi gruppi:</p>
<table>
<tr><th>Regione</th><th>Significato del nome</th><th>Esempi</th></tr>
<tr><td><b>Melanesia</b></td><td>\"isole nere\"</td><td>Papua Nuova Guinea, Figi, Isole Salomone</td></tr>
<tr><td><b>Micronesia</b></td><td>\"isole piccole\"</td><td>Palau, Isole Marshall, Kiribati (in parte)</td></tr>
<tr><td><b>Polinesia</b></td><td>\"molte isole\"</td><td>Samoa, Tonga, Tahiti, Hawaii, Nuova Zelanda</td></tr>
</table>
<p>Molte isole del Pacifico sono <b>vulcaniche</b> (alte, montuose) oppure <b>atolli</b>: anelli di <b>corallo</b> che circondano una laguna, alti solo pochi metri sul mare.</p>`
    },
    {
      type: "text",
      title: "2. L'Australia",
      html: `<p><b>Capitale</b>: <b>Canberra</b> (non Sydney!). <b>Abitanti</b>: circa 27 milioni. <b>Superficie</b>: circa 7,7 milioni di km² (circa 25 volte l'Italia). <b>Lingua</b>: inglese. <b>Moneta</b>: dollaro australiano.</p>
<p><b>Territorio</b>: è il continente abitato più <b>piatto</b> e più <b>secco</b>. Circa il 70% è arido o semiarido: è l'<b>outback</b>, l'interno desertico rosso. Al centro si trova <b>Uluru</b> (Ayers Rock), un enorme monolite di arenaria sacro agli aborigeni. Lungo la costa orientale corre la <b>Grande Catena Divisoria</b>.</p>
<p>Lungo la costa nord-orientale si trova la <b>Grande Barriera Corallina</b>, il più grande sistema di barriere coralline del mondo (circa 2300 km), visibile perfino dallo spazio.</p>
<p><b>Popolazione</b>: oltre l'85% vive in città, quasi tutte sulla costa, soprattutto nel Sud-Est (<b>Sydney</b>, <b>Melbourne</b>, Brisbane) e a Perth. I primi abitanti sono gli <b>aborigeni</b> e gli abitanti delle isole dello Stretto di Torres, arrivati almeno <b>50.000–65.000 anni fa</b>: è una delle culture più antiche ancora viventi. Dal <b>1788</b> arrivarono i coloni britannici (all'inizio molti erano detenuti deportati).</p>
<p><b>Economia</b>: ricchissima di risorse minerarie (ferro, carbone, oro, litio), grande produttrice di lana, grano e carne; turismo e servizi. È tra i Paesi con l'ISU più alto del mondo.</p>`
    },
    {
      type: "text",
      title: "3. La Nuova Zelanda",
      html: `<p><b>Capitale</b>: <b>Wellington</b>. <b>Abitanti</b>: circa 5,3 milioni. Due isole principali (<b>Isola del Nord</b> e <b>Isola del Sud</b>), molto montuose e vulcaniche, con ghiacciai, fiordi, geyser.</p>
<p>Fu una delle ultime grandi terre abitate dall'uomo: i <b>Māori</b> arrivarono dalla Polinesia in canoa intorno al <b>1250–1300</b>. La lingua māori è lingua ufficiale insieme all'inglese.</p>
<p>Nel <b>1893</b> la Nuova Zelanda fu il <b>primo Paese al mondo</b> a dare il diritto di voto alle donne. Le pecore sono molto più numerose degli abitanti (circa 24 milioni di pecore). Il simbolo nazionale è il <b>kiwi</b>, un uccello che non vola.</p>`
    },
    {
      type: "3d",
      title: "Il paesaggio dell'Oceania in 3D",
      scene: "terrain",
      options: {
        features: {
          plain: { label: "Outback", html: "L'interno arido dell'Australia: deserti rossi e steppe, quasi disabitati. Le fattorie (\"stazioni\") possono essere più grandi di intere province italiane." },
          mountain: { label: "Grande Catena Divisoria", html: "Montagne antiche lungo la costa est dell'Australia, che separano la costa piovosa dall'interno secco. La vetta più alta dell'Australia continentale è il Kosciuszko (2228 m)." },
          peak: { label: "Aoraki / Monte Cook", html: "3724 m, la vetta più alta della Nuova Zelanda, nelle Alpi meridionali. \"Aoraki\" è il nome māori." },
          glacier: { label: "Ghiacciai neozelandesi", html: "Nell'Isola del Sud ghiacciai come il Fox e il Franz Josef scendono fin quasi alla foresta pluviale." },
          volcano: { label: "Isole vulcaniche", html: "Molte isole del Pacifico sono cime di vulcani sottomarini. In Nuova Zelanda il Ruapehu è un vulcano attivo." },
          archipelago: { label: "Arcipelaghi del Pacifico", html: "Migliaia di isole raggruppate in Melanesia, Micronesia e Polinesia." },
          lagoon: { label: "Atollo e laguna", html: "Un atollo è un anello di corallo intorno a una laguna. Si forma quando un'isola vulcanica circondata da una barriera corallina sprofonda lentamente: la spiegazione la diede Charles Darwin nel 1842." },
          coast: { label: "Grande Barriera Corallina", html: "Circa 2300 km di barriere e isole coralline al largo del Queensland. È stata dichiarata Patrimonio dell'Umanità UNESCO nel 1981." },
          river: { label: "Murray-Darling", html: "Il sistema fluviale più lungo dell'Australia, nel Sud-Est: fondamentale per l'agricoltura in un continente così secco." },
          lake: { label: "Lago Eyre", html: "Un lago salato nel deserto australiano, quasi sempre asciutto: si riempie d'acqua solo pochissime volte in un secolo." }
        }
      },
      caption: "Ruota il paesaggio e tocca le parti: dall'outback australiano ai ghiacciai della Nuova Zelanda."
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'Oceania",
      questions: [
        { type: "mc", q: "Qual è la capitale dell'Australia?", options: ["Sydney", "Melbourne", "Canberra"], answer: 2, explain: "Canberra, costruita apposta come capitale (compromesso tra Sydney e Melbourne)." },
        { type: "tf", q: "La Nuova Zelanda fu il primo Paese a dare il voto alle donne.", answer: true, explain: "Nel 1893." },
        { type: "text", q: "Come si chiama un anello di corallo che circonda una laguna?", answer: ["atollo", "un atollo", "l'atollo"], explain: "Un atollo." }
      ]
    },
    {
      type: "text",
      title: "4. Le terre polari: Artide e Antartide",
      html: `<p>Le <b>terre polari</b> si trovano oltre i circoli polari (circa 66,5° N e S). Lì il Sole è sempre basso: d'estate non tramonta mai per settimane (<b>giorno polare</b>, il \"sole di mezzanotte\") e d'inverno non sorge (<b>notte polare</b>).</p>
<table>
<tr><th></th><th>🧊 Artide (Polo Nord)</th><th>🐧 Antartide (Polo Sud)</th></tr>
<tr><td><b>Che cos'è</b></td><td>un <b>oceano</b> (Mar Glaciale Artico) coperto di ghiaccio marino, circondato da terre</td><td>un <b>continente</b> coperto da una calotta di ghiaccio</td></tr>
<tr><td><b>Spessore del ghiaccio</b></td><td>banchisa di pochi metri</td><td>in media circa <b>2 km</b>, fino a quasi 5 km</td></tr>
<tr><td><b>Abitanti</b></td><td>circa 4 milioni (Inuit, Sami, Nenet e altri popoli, città russe e scandinave)</td><td>nessun abitante stabile; da circa 1000 (inverno) a 5000 (estate) scienziati</td></tr>
<tr><td><b>Animali simbolo</b></td><td>orso polare, tricheco, renna</td><td>pinguino imperatore, foca di Weddell, krill</td></tr>
<tr><td><b>A chi appartiene</b></td><td>a Stati confinanti (Canada, USA, Russia, Danimarca/Groenlandia, Norvegia…)</td><td>a nessuno: <b>Trattato Antartico</b> (1959)</td></tr>
</table>
<p>L'<b>Antartide</b> è il continente più <b>freddo</b> (nel 1983 alla base russa di Vostok si sono misurati <b>−89,2 °C</b>), più <b>ventoso</b>, più <b>alto</b> in media e, sorpresa, più <b>secco</b>: all'interno nevica pochissimo, tanto da essere considerato un deserto. Contiene circa il <b>70% dell'acqua dolce</b> del pianeta, ghiacciata: se si sciogliesse tutta, il livello del mare salirebbe di circa <b>58 metri</b>.</p>`
    },
    {
      type: "svg",
      title: "Perché ai poli fa così freddo",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#0f172a"/>
<circle cx="380" cy="160" r="120" fill="#38bdf8" stroke="#e0f2fe" stroke-width="3"/>
<ellipse cx="380" cy="48" rx="55" ry="14" fill="#f8fafc"/>
<ellipse cx="380" cy="272" rx="55" ry="14" fill="#f8fafc"/>
<path d="M300 110 Q380 140 460 110" stroke="#16a34a" stroke-width="20" fill="none"/>
<line x1="260" y1="160" x2="500" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="60" cy="160" r="40" fill="#facc15"/>
<text x="60" y="220" font-size="16" text-anchor="middle" fill="#fde047" font-weight="bold">Sole</text>
<path d="M105 160 L255 160" stroke="#fde047" stroke-width="5" marker-end="url(#s)"/>
<path d="M105 120 L270 75" stroke="#fde047" stroke-width="3" marker-end="url(#s)"/>
<path d="M105 200 L270 245" stroke="#fde047" stroke-width="3" marker-end="url(#s)"/>
<defs><marker id="s" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#fde047"/></marker></defs>
<text x="520" y="40" font-size="15" fill="#e0f2fe" font-weight="bold">Polo Nord</text>
<text x="520" y="290" font-size="15" fill="#e0f2fe" font-weight="bold">Polo Sud</text>
<text x="510" y="166" font-size="15" fill="#fecaca">Equatore</text>
<text x="300" y="312" font-size="14" fill="#e0f2fe" text-anchor="middle">Ai poli i raggi arrivano radenti; il ghiaccio bianco riflette fino all'80–90% della luce</text>
</svg>`,
      caption: "Raggi inclinati + ghiaccio bianco che riflette la luce (effetto albedo) + lunga notte polare = il freddo più estremo della Terra."
    },
    {
      type: "text",
      title: "5. Esplorazioni e scienza",
      html: `<p>Il <b>Polo Sud</b> fu raggiunto per la prima volta il <b>14 dicembre 1911</b> dal norvegese <b>Roald Amundsen</b>, con slitte e cani. Il britannico <b>Robert Falcon Scott</b> arrivò un mese dopo e morì con i suoi compagni nel viaggio di ritorno.</p>
<p>Il <b>Polo Nord</b> fu sorvolato nel <b>1926</b> dal dirigibile <b>Norge</b>, progettato e pilotato dall'italiano <b>Umberto Nobile</b>, con a bordo Amundsen: è considerato il primo raggiungimento del Polo Nord certo. Nel 1928 Nobile tornò con il dirigibile <b>Italia</b>, che però precipitò sui ghiacci (la famosa \"tenda rossa\").</p>
<p>Oggi l'Antartide è un grande <b>laboratorio scientifico</b>. Il <b>Trattato Antartico</b> (1959, in vigore dal 1961) stabilisce che il continente sia usato solo per scopi <b>pacifici e scientifici</b>; dal 1991 il Protocollo di Madrid vieta le attività minerarie. Anche l'<b>Italia</b> ha due basi: la <b>Stazione Mario Zucchelli</b> (dal 1986) e, insieme alla Francia, la base <b>Concordia</b> sul plateau antartico. Dai ghiacci antartici gli scienziati hanno estratto <b>carote di ghiaccio</b> che contengono bolle d'aria vecchie fino a circa <b>800.000 anni</b>: un archivio del clima del passato.</p>`
    },
    {
      type: "text",
      title: "6. I poli e il cambiamento climatico",
      html: `<p>Le regioni polari sono le più colpite dal riscaldamento globale: l'<b>Artide</b> si scalda circa <b>quattro volte più velocemente</b> della media del pianeta.</p>
<ul>
<li>Il ghiaccio marino artico d'estate si è ridotto di circa il <b>40%</b> rispetto agli anni '80: gli orsi polari, che cacciano le foche dal ghiaccio, hanno sempre meno spazio.</li>
<li>La fusione dei ghiacciai di <b>Groenlandia</b> e <b>Antartide</b> fa alzare il livello del mare. Le isole basse del Pacifico, come <b>Tuvalu</b> e <b>Kiribati</b>, rischiano di diventare inabitabili: nel 2023 l'Australia ha firmato con Tuvalu un accordo per accogliere i suoi abitanti come \"migranti climatici\".</li>
<li>Il <b>permafrost</b> (terreno ghiacciato) della Siberia e del Canada si scioglie e libera gas serra.</li>
<li>L'acqua più calda e più acida fa \"sbiancare\" e morire i coralli della Grande Barriera.</li>
</ul>
<p>C'è anche un effetto a catena: meno ghiaccio bianco → meno luce riflessa → più calore assorbito dal mare scuro → ancora meno ghiaccio. Gli scienziati lo chiamano <b>retroazione</b> (feedback) dell'albedo.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: Natale d'estate",
      html: `<p>In Australia e in Nuova Zelanda le stagioni sono <b>invertite</b> rispetto all'Italia, perché si trovano nell'emisfero sud. Quando da noi è inverno, da loro è estate.</p>
<p>Così a <b>Sydney</b> il <b>25 dicembre</b> si festeggia il Natale con 30 °C, magari con un barbecue in spiaggia, e Babbo Natale a volte arriva... in costume da surf! A luglio invece in Australia si va a sciare sulle montagne del Sud-Est.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: perché gli animali australiani sono così strani?",
      html: `<p>L'Australia si è separata dagli altri continenti circa <b>35–45 milioni di anni fa</b> ed è rimasta isolata. Gli animali si sono evoluti per conto loro: per questo ci sono specie che non esistono da nessun'altra parte.</p>
<ul>
<li>🦘 i <b>marsupiali</b> (canguro, koala, vombato), che crescono i piccoli in una tasca;</li>
<li>🦆 i <b>monotremi</b> (ornitorinco, echidna): mammiferi che <b>depongono le uova</b>!</li>
</ul>
<p>Anche il <b>dingo</b>, il cane selvatico, fu portato dall'uomo; i conigli, portati dagli europei nell'Ottocento, si moltiplicarono così tanto da diventare un disastro per l'ambiente. È un esempio di <b>specie invasiva</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… i Polinesiani navigavano senza bussola?",
      html: `<p>Più di 1000 anni fa i navigatori polinesiani attraversavano migliaia di km di oceano su grandi <b>canoe a doppio scafo</b>, senza strumenti. Si orientavano con le <b>stelle</b>, la forma delle <b>onde</b>, il volo degli <b>uccelli</b> e il colore delle nuvole (sopra le isole le nuvole sono diverse). Così colonizzarono un triangolo di oceano tra Hawaii, Nuova Zelanda e Isola di Pasqua, con lati lunghi circa 7000–8000 km: il cosiddetto <b>triangolo polinesiano</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… in Antartide c'è un lago sotto 4 km di ghiaccio?",
      html: `<p>Sotto la base russa di Vostok, a circa <b>4 km di profondità</b> sotto il ghiaccio, c'è il <b>Lago Vostok</b>: un lago di acqua liquida enorme (circa 12.500 km², più di 30 volte il lago di Garda!), rimasto isolato dal resto del mondo per milioni di anni. Gli scienziati lo studiano anche per capire come potrebbe esistere la vita sotto i ghiacci delle lune di Giove e di Saturno, come Europa ed Encelado.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire Oceania e poli",
      intro: "Luoghi lontanissimi: proviamo ad avvicinarli con il globo, un'analogia e un gioco.",
      tabs: [
        {
          label: "🌍 Sul globo",
          html: `<p>Gira il globo dall'alto e dal basso: guarda il Polo Nord (un oceano circondato da terre) e il Polo Sud (una terra circondata dall'oceano). Poi segui il viaggio dei Polinesiani.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -35.28, lon: 149.13, label: "Canberra", color: "#2563eb" },
              { lat: -33.87, lon: 151.21, label: "Sydney", color: "#2563eb" },
              { lat: -25.34, lon: 131.04, label: "Uluru", color: "#dc2626" },
              { lat: -41.29, lon: 174.78, label: "Wellington", color: "#16a34a" },
              { lat: 21.3, lon: -157.86, label: "Hawaii", color: "#f59e0b" },
              { lat: -27.11, lon: -109.35, label: "Isola di Pasqua", color: "#f59e0b" },
              { lat: -8.52, lon: 179.2, label: "Tuvalu", color: "#0ea5e9" },
              { lat: -90, lon: 0, label: "Polo Sud", color: "#a855f7" },
              { lat: 90, lon: 0, label: "Polo Nord", color: "#a855f7" },
              { lat: -74.69, lon: 164.11, label: "Base Mario Zucchelli (Italia)", color: "#22c55e" }
            ],
            routes: [{ points: [4, 3, 5, 4], color: "#f97316" }]
          }
        },
        {
          label: "🍦 Analogia: il cono gelato",
          html: `<p>Per ricordare la differenza tra i due poli:</p>
<ul>
<li>L'<b>Artide</b> è come un <b>bicchiere d'acqua con un cubetto di ghiaccio che galleggia</b>: se il ghiaccio marino si scioglie, il livello dell'acqua nel bicchiere non cambia (ma il pianeta si scalda di più, perché sparisce la superficie bianca).</li>
<li>L'<b>Antartide</b> è come una <b>pallina di gelato sopra una roccia</b>: se si scioglie, il gelato cola nel piatto e il livello sale! Il ghiaccio che sta sulla terraferma (Antartide e Groenlandia), sciogliendosi, fa alzare il mare.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<path d="M60 60 L80 190 L200 190 L220 60" fill="none" stroke="#334155" stroke-width="4"/>
<rect x="72" y="110" width="137" height="80" fill="#7dd3fc"/>
<rect x="115" y="95" width="45" height="35" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
<text x="140" y="30" font-size="16" text-anchor="middle" font-weight="bold" fill="#0c4a6e">Artide: ghiaccio che galleggia</text>
<text x="140" y="212" font-size="14" text-anchor="middle" fill="#0c4a6e">il livello non cambia</text>
<rect x="360" y="170" width="200" height="20" fill="#7dd3fc"/>
<path d="M410 170 L430 120 L490 120 L510 170 Z" fill="#78716c"/>
<ellipse cx="460" cy="112" rx="40" ry="20" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
<text x="460" y="30" font-size="16" text-anchor="middle" font-weight="bold" fill="#0c4a6e">Antartide: ghiaccio su roccia</text>
<text x="460" y="212" font-size="14" text-anchor="middle" fill="#0c4a6e">se si scioglie, il mare sale</text>
</svg>`
        },
        {
          label: "🧩 Gioco: Polo Nord o Polo Sud?",
          html: `<p>Metti ogni elemento al polo giusto.</p>`,
          widget: "classify",
          options: {
            groups: ["🧊 Artide (Nord)", "🐧 Antartide (Sud)"],
            items: [["Orso polare", 0], ["Pinguino imperatore", 1], ["Popolo Inuit", 0], ["Trattato del 1959", 1], ["Oceano coperto di banchisa", 0], ["Continente coperto da 2 km di ghiaccio", 1], ["Dirigibile Norge di Nobile", 0], ["Amundsen 1911", 1], ["Renne e Sami", 0], ["Base Concordia", 1]]
          }
        },
        {
          label: "🃏 Flashcard: parole chiave",
          html: `<p>Gira le carte per ripassare le parole più difficili.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Atollo", back: "Anello di corallo che circonda una laguna" },
              { front: "Outback", back: "L'interno arido e quasi disabitato dell'Australia" },
              { front: "Banchisa", back: "Ghiaccio che si forma congelando l'acqua del mare" },
              { front: "Calotta glaciale", back: "Enorme strato di ghiaccio sopra un continente (Antartide, Groenlandia)" },
              { front: "Albedo", back: "Quanta luce una superficie riflette: il ghiaccio molto, il mare poco" },
              { front: "Permafrost", back: "Terreno sempre ghiacciato delle regioni fredde" },
              { front: "Marsupiale", back: "Mammifero che cresce i piccoli in una tasca, come il canguro" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di Oceania e terre polari",
      nodes: [
        { id: "isolamento", label: "Isolamento", x: 20, y: 8, color: "#64748b", html: "Oceania lontana dagli altri continenti.", why: "L'Australia si staccò dall'Antartide circa 45–35 milioni di anni fa e viaggiò verso nord da sola; le isole del Pacifico nacquero come vulcani in mezzo all'oceano." },
        { id: "fauna", label: "Fauna unica", x: 12, y: 32, color: "#f97316", html: "Marsupiali (canguro, koala), monotremi (ornitorinco), uccelli che non volano (kiwi, emù).", why: "L'isolamento ha permesso agli animali di evolversi separatamente, come già notò Charles Darwin quando visitò l'Australia nel 1836 durante il viaggio del Beagle." },
        { id: "australia", label: "Australia", x: 35, y: 30, color: "#dc2626", html: "Isola-continente arida, popolazione sulle coste, grandi risorse.", why: "Si trova sotto la fascia dei deserti del Tropico del Capricorno, dove l'aria secca scende: per questo l'interno è un deserto e le città sono sulle coste più piovose." },
        { id: "popoli", label: "Popoli del Pacifico", x: 35, y: 55, color: "#a855f7", html: "Aborigeni, Māori, Polinesiani.", why: "Gli aborigeni arrivarono in Australia dall'Asia almeno 50.000 anni fa, quando il mare era più basso; i Polinesiani colonizzarono le isole con le canoe tra circa 1000 a.C. e 1300 d.C." },
        { id: "latitudine", label: "Alte latitudini", x: 75, y: 8, color: "#0ea5e9", html: "Oltre i circoli polari (circa 66,5°).", why: "Per l'inclinazione dell'asse terrestre (circa 23,5°), oltre i circoli polari c'è almeno un giorno all'anno in cui il Sole non tramonta e uno in cui non sorge." },
        { id: "artide", label: "Artide", x: 62, y: 32, color: "#38bdf8", html: "Oceano ghiacciato circondato da terre abitate.", why: "Il Polo Nord è nel mezzo del Mar Glaciale Artico: il ghiaccio è banchisa che galleggia, spessa pochi metri." },
        { id: "antartide", label: "Antartide", x: 88, y: 32, color: "#6366f1", html: "Continente gelido coperto da una calotta spessa in media 2 km.", why: "È isolato dalla Corrente circumpolare antartica, che gira intorno al continente e impedisce all'acqua calda di avvicinarsi: per questo si è congelato circa 34 milioni di anni fa." },
        { id: "trattato", label: "Trattato Antartico", x: 88, y: 58, color: "#22c55e", html: "Continente per la pace e la scienza (1959).", why: "In piena guerra fredda, dopo l'Anno Geofisico Internazionale (1957–1958), 12 Paesi tra cui USA e URSS decisero di congelare le rivendicazioni e di usare l'Antartide solo per la ricerca. L'Italia aderì nel 1981." },
        { id: "clima", label: "Cambiamento climatico", x: 62, y: 82, color: "#ef4444", html: "Fusione dei ghiacci, innalzamento del mare, coralli che sbiancano.", why: "L'aumento dei gas serra trattiene calore; ai poli l'effetto è amplificato dalla perdita di ghiaccio bianco (retroazione dell'albedo)." },
        { id: "isolebasse", label: "Isole in pericolo", x: 30, y: 85, color: "#0891b2", html: "Tuvalu, Kiribati, Isole Marshall rischiano di essere sommerse.", why: "Gli atolli sono alti in media 2–3 metri sul mare: anche pochi decimetri di innalzamento portano mareggiate, acqua salata nei pozzi e perdita di terra coltivabile." }
      ],
      edges: [
        ["isolamento", "fauna", "produce una"],
        ["isolamento", "australia", "caratterizza l'"],
        ["australia", "popoli", "abitata da"],
        ["latitudine", "artide", "definisce l'"],
        ["latitudine", "antartide", "definisce l'"],
        ["antartide", "trattato", "protetta dal"],
        ["artide", "clima", "si scalda 4 volte più veloce"],
        ["antartide", "clima", "ghiaccio che fonde"],
        ["clima", "isolebasse", "minaccia le"],
        ["popoli", "isolebasse", "vivono nelle"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Oceania</b>: il continente più piccolo (8,5 milioni km²); Australia + isole del Pacifico (<b>Melanesia</b>, <b>Micronesia</b>, <b>Polinesia</b>).</li>
<li><b>Australia</b>: capitale <b>Canberra</b>; arida (<b>outback</b>), popolazione sulle coste, <b>Grande Barriera Corallina</b>, aborigeni, fauna unica.</li>
<li><b>Nuova Zelanda</b>: capitale <b>Wellington</b>; isole montuose e vulcaniche; Māori; voto alle donne nel 1893.</li>
<li><b>Artide</b> = oceano ghiacciato con popoli (Inuit). <b>Antartide</b> = continente ghiacciato senza abitanti stabili, protetto dal <b>Trattato Antartico</b> (1959).</li>
<li>Le regioni polari sono le più colpite dal <b>cambiamento climatico</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: le terre polari",
      questions: [
        { type: "mc", q: "Che cosa c'è al Polo Nord?", options: ["Un continente", "Un oceano coperto di ghiaccio", "Un deserto di sabbia"], answer: 1, explain: "Il Mar Glaciale Artico coperto dalla banchisa." },
        { type: "mc", q: "Chi raggiunse per primo il Polo Sud nel 1911?", options: ["Robert Scott", "Umberto Nobile", "Roald Amundsen"], answer: 2, explain: "Il norvegese Roald Amundsen, il 14 dicembre 1911." },
        { type: "tf", q: "Se si sciogliesse il ghiaccio marino artico, il livello del mare salirebbe di molti metri.", answer: false, explain: "Il ghiaccio che galleggia già occupa il suo volume d'acqua: a far salire il mare è il ghiaccio sulla terraferma (Antartide, Groenlandia)." }
      ]
    }
  ],
  glossary: [
    { t: "Oceania", d: "Continente formato dall'Australia e dalle isole del Pacifico." },
    { t: "Atollo", d: "Isola corallina ad anello che racchiude una laguna." },
    { t: "Outback", d: "L'interno arido e poco abitato dell'Australia." },
    { t: "Aborigeni", d: "I primi abitanti dell'Australia, presenti da almeno 50.000 anni." },
    { t: "Māori", d: "Popolo polinesiano che abitò per primo la Nuova Zelanda." },
    { t: "Banchisa", d: "Ghiaccio marino che si forma congelando la superficie del mare." },
    { t: "Calotta glaciale", d: "Enorme coltre di ghiaccio che copre un continente o una grande isola." },
    { t: "Giorno/notte polare", d: "Periodi in cui oltre i circoli polari il Sole resta sempre sopra o sempre sotto l'orizzonte." },
    { t: "Albedo", d: "Capacità di una superficie di riflettere la luce solare." },
    { t: "Trattato Antartico", d: "Accordo del 1959 che riserva l'Antartide alla pace e alla ricerca scientifica." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è il continente più piccolo?", options: ["Europa", "Oceania", "Antartide"], answer: 1, explain: "L'Oceania, circa 8,5 milioni di km²." },
      { type: "text", q: "Qual è la capitale dell'Australia?", answer: ["canberra"], explain: "Canberra." },
      { type: "mc", q: "Dove vive la maggior parte degli australiani?", options: ["Nell'outback", "Nelle città sulla costa", "Sulle montagne"], answer: 1, explain: "Oltre l'85% vive in città, quasi tutte costiere." },
      { type: "tf", q: "L'ornitorinco è un mammifero che depone le uova.", answer: true, explain: "È un monotremo, come l'echidna." },
      { type: "mc", q: "Come si chiama il popolo che abitò per primo la Nuova Zelanda?", options: ["Aborigeni", "Māori", "Inuit"], answer: 1, explain: "I Māori, arrivati dalla Polinesia intorno al 1250–1300." },
      { type: "mc", q: "Che cosa stabilisce il Trattato Antartico?", options: ["Che l'Antartide appartiene alla Russia", "Che l'Antartide è usata solo per pace e scienza", "Che si può estrarre petrolio liberamente"], answer: 1, explain: "Firmato nel 1959; dal 1991 vietate anche le attività minerarie." },
      { type: "num", q: "Qual è la temperatura più bassa misurata a Vostok nel 1983 (in °C)?", answer: -89.2, tol: 0.2, unit: "°C", explain: "−89,2 °C, il record ufficiale di temperatura più bassa misurata a terra." },
      { type: "text", q: "Come si chiama il dirigibile con cui Umberto Nobile sorvolò il Polo Nord nel 1926?", answer: ["norge", "il norge"], explain: "Il Norge, con a bordo anche Roald Amundsen." },
      { type: "mc", q: "Perché le isole come Tuvalu sono in pericolo?", options: ["Per i terremoti", "Per l'innalzamento del livello del mare", "Per la desertificazione"], answer: 1, explain: "Sono atolli alti pochi metri sul mare." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Arrivo degli aborigeni in Australia", "Arrivo dei Māori in Nuova Zelanda", "Arrivo dei coloni britannici in Australia", "Voto alle donne in Nuova Zelanda", "Amundsen al Polo Sud", "Firma del Trattato Antartico"], explain: "Oltre 50.000 anni fa → 1250–1300 → 1788 → 1893 → 1911 → 1959." },
      { type: "tf", q: "In Antartide vivono stabilmente milioni di persone.", answer: false, explain: "Ci sono solo scienziati e tecnici nelle basi, per periodi limitati." },
      { type: "mc", q: "In quale periodo dell'anno è estate in Australia?", options: ["Da giugno ad agosto", "Da dicembre a febbraio", "Sempre"], answer: 1, explain: "Nell'emisfero sud le stagioni sono invertite rispetto all'Italia." }
    ]
  }
});
