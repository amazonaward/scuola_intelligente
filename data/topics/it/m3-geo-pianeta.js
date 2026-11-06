TOPIC('it', {
  id: "m3-geo-pianeta",
  title: "Il pianeta Terra",
  intro: "Prima di viaggiare tra i continenti, guardiamo la Terra dall'alto: come è fatta, come si orienta, come si divide in <b>continenti</b> e <b>oceani</b>, e perché ha <b>climi</b> così diversi, dai ghiacci polari alle foreste equatoriali. È la cassetta degli attrezzi del geografo per tutto il terzo anno.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Una sfera (quasi) perfetta",
      html: `<p>La Terra è il terzo pianeta del Sistema Solare. Ha la forma di una sfera leggermente <b>schiacciata ai poli</b> (gli scienziati la chiamano <i>geoide</i>):</p>
<ul>
<li>circonferenza all'equatore: circa <b>40.075 km</b>;</li>
<li>raggio medio: circa <b>6371 km</b>;</li>
<li>superficie totale: circa <b>510 milioni di km²</b>, di cui circa il <b>71% coperto dalle acque</b> e il <b>29% di terre emerse</b>.</li>
</ul>
<p>La Terra compie due movimenti:</p>
<ul>
<li><b>rotazione</b> su sé stessa, da ovest verso est, in circa <b>24 ore</b> → il giorno e la notte;</li>
<li><b>rivoluzione</b> intorno al Sole in circa <b>365 giorni e 6 ore</b> → l'anno. Poiché l'asse terrestre è <b>inclinato di circa 23,5°</b>, durante l'anno i raggi del Sole arrivano più o meno inclinati: nascono le <b>stagioni</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "2. Orientarsi: paralleli, meridiani e coordinate",
      html: `<p>Per indicare con precisione un punto sulla Terra si usa un reticolo di linee immaginarie:</p>
<ul>
<li><b>Paralleli</b>: cerchi paralleli all'<b>equatore</b> (0°). Il più lungo è l'equatore; verso i poli diventano sempre più piccoli. La <b>latitudine</b> va da 0° a 90° Nord o Sud.</li>
<li><b>Meridiani</b>: semicerchi che vanno da polo a polo, tutti lunghi uguali. Il meridiano fondamentale (0°) passa per l'osservatorio di <b>Greenwich</b>, vicino a Londra. La <b>longitudine</b> va da 0° a 180° Est o Ovest.</li>
</ul>
<p>Paralleli importanti: <b>Tropico del Cancro</b> (circa 23,5° N), <b>Tropico del Capricorno</b> (circa 23,5° S), <b>Circolo polare artico</b> e <b>antartico</b> (circa 66,5°). Roma si trova a circa <b>41,9° N, 12,5° E</b>.</p>
<p>Poiché la Terra ruota di 360° in 24 ore, ogni 15° di longitudine l'ora cambia di 1: per questo esistono i <b>fusi orari</b>.</p>`
    },
    {
      type: "3d",
      title: "Il globo: trova le linee e i punti",
      scene: "globe",
      options: {
        points: [
          { lat: 0, lon: 0, label: "Equatore × Greenwich (0°, 0°)", color: "#ef4444" },
          { lat: 51.48, lon: 0, label: "Greenwich", color: "#2563eb" },
          { lat: 41.9, lon: 12.5, label: "Roma", color: "#16a34a" },
          { lat: 23.44, lon: -82.4, label: "Tropico del Cancro (Cuba)", color: "#f59e0b" },
          { lat: -23.44, lon: -46.6, label: "Tropico del Capricorno (San Paolo)", color: "#f59e0b" },
          { lat: 66.56, lon: 25.7, label: "Circolo polare artico (Finlandia)", color: "#0ea5e9" },
          { lat: -90, lon: 0, label: "Polo Sud", color: "#a855f7" },
          { lat: 90, lon: 0, label: "Polo Nord", color: "#a855f7" }
        ]
      },
      caption: "Ruota il globo: segui il meridiano di Greenwich da polo a polo e trova l'Italia nell'emisfero nord, a est di Greenwich."
    },
    {
      type: "text",
      title: "3. Continenti e oceani",
      html: `<p>Le terre emerse formano <b>6 continenti</b> (contando America del Nord e del Sud separate, e Oceania come continente; altre scuole, per esempio negli USA, ne contano 7):</p>
<table>
<tr><th>Continente</th><th>Superficie (circa)</th><th>Abitanti (circa, 2024)</th></tr>
<tr><td>Asia</td><td>44,6 milioni km²</td><td>4,8 miliardi</td></tr>
<tr><td>America (Nord + Sud)</td><td>42,5 milioni km²</td><td>1,05 miliardi</td></tr>
<tr><td>Africa</td><td>30,4 milioni km²</td><td>1,5 miliardi</td></tr>
<tr><td>Antartide</td><td>14 milioni km²</td><td>nessun abitante stabile</td></tr>
<tr><td>Europa</td><td>10,2 milioni km²</td><td>745 milioni</td></tr>
<tr><td>Oceania</td><td>8,5 milioni km²</td><td>46 milioni</td></tr>
</table>
<p>Gli <b>oceani</b> sono cinque: <b>Pacifico</b> (il più grande: da solo è più esteso di tutte le terre emerse messe insieme!), <b>Atlantico</b>, <b>Indiano</b>, <b>Antartico</b> (o Australe) e <b>Artico</b> (il più piccolo, in gran parte ghiacciato).</p>`
    },
    {
      type: "svg",
      title: "Planisfero schematico: continenti e oceani",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#7dd3fc"/>
<line x1="0" y1="160" x2="600" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="8 5"/>
<text x="560" y="154" font-size="13" fill="#b91c1c" text-anchor="end">Equatore</text>
<line x1="0" y1="118" x2="600" y2="118" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="0" y1="202" x2="600" y2="202" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4"/>
<path d="M40 50 L170 40 L190 90 L150 120 L130 140 L100 120 L60 90 Z" fill="#86efac" stroke="#166534" stroke-width="2"/>
<text x="115" y="85" font-size="14" text-anchor="middle" font-weight="bold" fill="#14532d">America N.</text>
<path d="M140 150 L190 160 L200 200 L170 270 L150 270 L145 210 Z" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<text x="170" y="210" font-size="13" text-anchor="middle" font-weight="bold" fill="#14532d">America S.</text>
<path d="M270 50 L330 45 L330 95 L280 100 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="300" y="78" font-size="13" text-anchor="middle" font-weight="bold" fill="#78350f">Europa</text>
<path d="M270 110 L340 105 L360 150 L340 230 L310 240 L290 180 L265 150 Z" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
<text x="310" y="170" font-size="14" text-anchor="middle" font-weight="bold" fill="#7c2d12">Africa</text>
<path d="M335 40 L520 35 L540 90 L500 130 L430 140 L380 120 L340 100 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="2"/>
<text x="440" y="85" font-size="16" text-anchor="middle" font-weight="bold" fill="#7f1d1d">Asia</text>
<path d="M470 200 L540 195 L550 240 L490 250 Z" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/>
<text x="510" y="228" font-size="13" text-anchor="middle" font-weight="bold" fill="#4c1d95">Oceania</text>
<rect x="0" y="292" width="600" height="28" fill="#f1f5f9"/>
<text x="300" y="312" font-size="14" text-anchor="middle" font-weight="bold" fill="#334155">Antartide</text>
<text x="40" y="200" font-size="15" fill="#0c4a6e" font-weight="bold">Pacifico</text>
<text x="225" y="140" font-size="14" fill="#0c4a6e" font-weight="bold">Atlantico</text>
<text x="410" y="200" font-size="15" fill="#0c4a6e" font-weight="bold">Indiano</text>
<text x="300" y="22" font-size="14" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Artico</text>
<text x="300" y="285" font-size="13" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Antartico</text>
</svg>`,
      caption: "Schema non in scala. Le linee arancioni tratteggiate sono i Tropici del Cancro (sopra) e del Capricorno (sotto)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: forma e coordinate",
      questions: [
        { type: "mc", q: "Quale percentuale della superficie terrestre è coperta dalle acque?", options: ["Circa il 29%", "Circa il 50%", "Circa il 71%"], answer: 2, explain: "Circa il 71% è acqua, il 29% terre emerse." },
        { type: "mc", q: "Come si chiama la distanza di un punto dall'equatore, in gradi?", options: ["Longitudine", "Latitudine", "Altitudine"], answer: 1, explain: "La latitudine va da 0° (equatore) a 90° (poli)." },
        { type: "num", q: "Di quanti gradi di longitudine cambia un fuso orario?", answer: 15, tol: 0, unit: "°", explain: "360° : 24 ore = 15° per ogni ora." }
      ]
    },
    {
      type: "text",
      title: "4. La Terra in movimento: placche e rilievi",
      html: `<p>La crosta terrestre è divisa in grandi <b>placche</b> che si muovono di pochi centimetri all'anno (circa quanto crescono le unghie). Dove si scontrano nascono <b>catene montuose</b> (Alpi, Himalaya, Ande), <b>vulcani</b> e <b>terremoti</b>; dove si allontanano si aprono oceani.</p>
<p>Circa 300 milioni di anni fa tutte le terre erano unite in un unico supercontinente, la <b>Pangea</b>. Questa idea fu proposta nel <b>1912</b> dal tedesco <b>Alfred Wegener</b> (deriva dei continenti) e dimostrata negli anni '60 con la <b>tettonica delle placche</b>.</p>
<p>I rilievi più alti: l'<b>Everest</b> (8849 m, in Asia, tra Nepal e Cina). Il punto più profondo degli oceani: la <b>Fossa delle Marianne</b> (quasi 11.000 m, nel Pacifico).</p>`
    },
    {
      type: "3d",
      title: "Il paesaggio della Terra in 3D",
      scene: "terrain",
      options: {
        features: {
          mountain: { label: "Catena montuosa", html: "Nasce dallo scontro tra placche. Esempi: <b>Himalaya</b> (Asia), <b>Ande</b> (America del Sud, la catena più lunga, circa 7000 km), <b>Alpi</b>." },
          peak: { label: "Vetta", html: "Il punto più alto di una montagna. La vetta più alta del mondo è l'<b>Everest</b>, 8849 m." },
          glacier: { label: "Ghiacciaio", html: "Massa di ghiaccio che si forma dove nevica più di quanto si sciolga. Il 70% circa dell'acqua dolce della Terra è ghiacciata, soprattutto in Antartide e Groenlandia." },
          plain: { label: "Pianura", html: "Grandi pianure: la <b>Pianura sarmatica</b> (Europa orientale), le <b>Grandi Pianure</b> USA, la <b>Pampa</b> argentina. Sono le zone più coltivate e popolate." },
          river: { label: "Fiume", html: "I fiumi più lunghi: <b>Nilo</b> (circa 6650 km) e <b>Rio delle Amazzoni</b> (il più ricco d'acqua al mondo)." },
          volcano: { label: "Vulcano", html: "Il 75% circa dei vulcani attivi si trova intorno al Pacifico, nella <b>Cintura di fuoco</b>." },
          sea: { label: "Oceano", html: "Il Pacifico copre circa un terzo della superficie terrestre." },
          island: { label: "Isola", html: "L'isola più grande del mondo è la <b>Groenlandia</b> (circa 2,2 milioni di km²). L'Australia è considerata un continente." },
          lake: { label: "Lago", html: "Il <b>Mar Caspio</b> è il lago più grande; il <b>Bajkal</b> (Russia) il più profondo, oltre 1600 m." },
          delta: { label: "Delta", html: "Foce a ventaglio. I delta più grandi: Gange-Brahmaputra (Bangladesh), Nilo, Mississippi." }
        }
      },
      caption: "Ruota il paesaggio e tocca le parti: per ognuna scopri il record mondiale."
    },
    {
      type: "text",
      title: "5. I climi: perché fa caldo o freddo",
      html: `<p>Il <b>tempo atmosferico</b> è quello di oggi (piove, c'è il sole). Il <b>clima</b> è l'insieme delle condizioni medie di un luogo calcolate su almeno <b>30 anni</b>.</p>
<p>I <b>fattori del clima</b>:</p>
<ul>
<li><b>Latitudine</b>: all'equatore i raggi solari arrivano quasi perpendicolari e scaldano molto; ai poli arrivano inclinatissimi e scaldano poco.</li>
<li><b>Altitudine</b>: salendo, la temperatura scende di circa <b>0,6 °C ogni 100 m</b>.</li>
<li><b>Vicinanza al mare</b>: il mare si scalda e si raffredda lentamente e rende il clima più mite.</li>
<li><b>Correnti marine</b>: la <b>Corrente del Golfo</b> porta acqua calda verso l'Europa del Nord.</li>
<li><b>Venti e rilievi</b>: le montagne possono fermare le piogge (come l'Himalaya con i monsoni).</li>
</ul>
<p>Lo scienziato russo-tedesco <b>Wladimir Köppen</b> classificò i climi (1900–1936) in grandi gruppi:</p>
<table>
<tr><th>Clima</th><th>Dove</th><th>Ambiente</th></tr>
<tr><td>🌴 Equatoriale / tropicale</td><td>tra i Tropici</td><td>foresta pluviale, savana</td></tr>
<tr><td>🏜️ Arido</td><td>vicino ai Tropici, interno dei continenti</td><td>deserto, steppa</td></tr>
<tr><td>🌳 Temperato</td><td>medie latitudini (Italia!)</td><td>macchia mediterranea, bosco di latifoglie</td></tr>
<tr><td>🌲 Freddo (continentale)</td><td>Nord di Europa, Asia e America</td><td>taiga (foresta di conifere)</td></tr>
<tr><td>🧊 Polare</td><td>oltre i circoli polari</td><td>tundra, ghiacci</td></tr>
</table>`
    },
    {
      type: "3d",
      title: "Le fasce climatiche come strati",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#e0f2fe", label: "Polare (oltre 66,5°)" },
          { r: 0.85, color: "#166534", label: "Freddo continentale (taiga)" },
          { r: 0.7, color: "#84cc16", label: "Temperato (medie latitudini)" },
          { r: 0.52, color: "#facc15", label: "Arido (deserti dei Tropici)" },
          { r: 0.35, color: "#15803d", label: "Equatoriale (foresta pluviale)" }
        ]
      },
      caption: "Modello semplificato: immagina di partire da un polo (strato esterno) e scendere verso l'equatore (centro). In realtà le fasce sono interrotte da mari, montagne e correnti."
    },
    {
      type: "example",
      title: "Esempio pratico: perché a Londra fa meno freddo che a Montréal?",
      html: `<p><b>Londra</b> (51,5° N) è più a nord di <b>Montréal</b> (45,5° N), eppure a gennaio a Londra la temperatura media è di circa <b>+5 °C</b>, a Montréal di circa <b>−10 °C</b>.</p>
<p>Perché? Londra riceve i venti umidi dall'Atlantico, scaldato dalla <b>Corrente del Golfo</b>; Montréal è nell'interno del continente e d'inverno riceve aria gelida dall'Artico canadese. Quindi la latitudine non basta: contano anche <b>mare</b>, <b>correnti</b> e <b>venti</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: calcola l'ora a New York",
      html: `<p>Sono le <b>15:00</b> a Roma. New York si trova a circa 74° ovest, Roma a circa 12° est: in tutto circa <b>86° di differenza</b>, cioè quasi 6 fusi. In pratica tra Roma e New York ci sono <b>6 ore</b> di differenza (i fusi seguono anche i confini degli Stati).</p>
<p>New York è più a ovest, quindi il Sole ci arriva dopo: lì sono le <b>9:00</b> del mattino. Se telefoni a un amico a <b>Tokyo</b> (+8 ore rispetto a Roma, senza ora legale), lì sono le <b>23:00</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Eratostene misurò la Terra con un bastone?",
      html: `<p>Intorno al <b>240 a.C.</b> il greco <b>Eratostene</b>, bibliotecario ad Alessandria d'Egitto, notò che a Siene (l'attuale Assuan) a mezzogiorno del solstizio d'estate il Sole illuminava il fondo di un pozzo, mentre ad Alessandria un bastone faceva un'ombra di circa <b>7°</b>. Conoscendo la distanza tra le due città, calcolò la circonferenza terrestre: circa <b>250.000 stadi</b>, un valore vicinissimo a quello vero. Più di 2200 anni fa, senza satelliti!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il punto più lontano dal centro della Terra non è l'Everest?",
      html: `<p>Poiché la Terra è più \"gonfia\" all'equatore, il punto più lontano dal centro della Terra è la cima del vulcano <b>Chimborazo</b> in Ecuador (6263 m), quasi sull'equatore: è circa 2 km più \"lontano\" dal centro rispetto alla cima dell'Everest, anche se è più basso sul livello del mare.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il pianeta",
      intro: "Coordinate, fusi e climi possono sembrare astratti: prova così.",
      tabs: [
        {
          label: "🍊 Analogia: l'arancia",
          html: `<p>Prendi un'arancia e un pennarello.</p>
<ul>
<li>Disegna una linea intorno alla \"pancia\": è l'<b>equatore</b>.</li>
<li>Disegna altri cerchi più piccoli sopra e sotto: sono i <b>paralleli</b>.</li>
<li>Ora segui gli \"spicchi\" da un polo all'altro: sono i <b>meridiani</b>! Ogni spicchio largo 15° corrisponde a un'ora di fuso orario.</li>
</ul>
<p>Prova a sbucciare l'arancia e appiattire la buccia: si strappa. Ecco perché <b>nessun planisfero è perfetto</b>: tutti deformano qualcosa (nella proiezione di Mercatore la Groenlandia sembra grande come l'Africa, che invece è circa 14 volte più grande!).</p>`
        },
        {
          label: "🔦 Esperimento: la torcia",
          html: `<p>Al buio, punta una torcia <b>dritta</b> su un foglio: vedi un cerchio piccolo e molto luminoso (come all'equatore). Ora inclina la torcia: la luce si allarga in un'ellisse grande e più debole (come ai poli). <b>La stessa energia sparsa su una superficie più grande scalda meno</b>: è il primo fattore del clima.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#1e293b"/>
<rect x="40" y="180" width="520" height="30" fill="#e2e8f0"/>
<rect x="120" y="20" width="40" height="70" rx="6" fill="#f59e0b"/>
<polygon points="125,90 155,90 175,180 105,180" fill="#fde047" opacity="0.85"/>
<text x="140" y="230" font-size="16" fill="#fde047" text-anchor="middle" font-weight="bold">Equatore: luce concentrata</text>
<rect x="380" y="30" width="40" height="70" rx="6" fill="#f59e0b" transform="rotate(-45 400 65)"/>
<polygon points="420,95 440,110 560,180 340,180" fill="#fde047" opacity="0.4"/>
<text x="450" y="230" font-size="16" fill="#fde047" text-anchor="middle" font-weight="bold">Poli: luce sparsa</text>
</svg>`
        },
        {
          label: "🧩 Gioco: abbina clima e ambiente",
          html: `<p>Ogni clima ha il suo ambiente tipico. Abbinali.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Equatoriale", "Foresta pluviale"],
              ["Tropicale secco/umido", "Savana"],
              ["Arido", "Deserto"],
              ["Mediterraneo", "Macchia mediterranea"],
              ["Freddo continentale", "Taiga"],
              ["Polare", "Tundra e ghiacci"]
            ]
          }
        },
        {
          label: "🗺️ Come si conta nel mondo",
          html: `<p>Il numero dei continenti dipende dal Paese in cui vai a scuola!</p>
<ul>
<li><b>Italia</b>: di solito 6 (Europa, Asia, Africa, America, Oceania, Antartide), con l'America a volte divisa in due.</li>
<li><b>USA, Cina, India, Regno Unito</b>: 7 (America del Nord e del Sud separate).</li>
<li><b>Molti Paesi dell'America Latina, Spagna, Grecia</b>: spesso 6 con l'America unica.</li>
<li><b>Simbolo olimpico</b>: 5 anelli = 5 continenti abitati (Antartide esclusa, America unita).</li>
</ul>
<p>Non è una questione di giusto o sbagliato: è una <b>convenzione</b>, cioè un accordo tra persone.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del pianeta: tocca i nodi e scopri il perché",
      nodes: [
        { id: "sfera", label: "Terra sferica", x: 50, y: 6, color: "#2563eb", html: "Una sfera leggermente schiacciata ai poli, raggio circa 6371 km.", why: "Già Aristotele (IV sec. a.C.) notò l'ombra rotonda della Terra sulla Luna durante le eclissi; Eratostene la misurò; Newton capì che la rotazione la \"schiaccia\" ai poli, e le spedizioni francesi del 1735–1744 lo confermarono." },
        { id: "rotazione", label: "Rotazione", x: 15, y: 25, color: "#0ea5e9", html: "Un giro su sé stessa in circa 24 ore.", why: "Dimostrata in modo spettacolare dal fisico francese Léon Foucault nel 1851, con un grande pendolo appeso al Panthéon di Parigi che cambia lentamente direzione." },
        { id: "rivoluzione", label: "Rivoluzione e asse inclinato", x: 85, y: 25, color: "#f59e0b", html: "Un giro intorno al Sole in circa 365 giorni; asse inclinato di circa 23,5°.", why: "Copernico (1543) propose che la Terra girasse intorno al Sole; Galileo e Keplero lo confermarono. L'inclinazione dell'asse fa variare durante l'anno l'altezza del Sole: per questo ci sono le stagioni." },
        { id: "reticolo", label: "Reticolo geografico", x: 15, y: 50, color: "#a855f7", html: "Paralleli, meridiani, latitudine e longitudine.", why: "Il reticolo fu usato già da Tolomeo (II sec. d.C.). Il meridiano zero fu fissato a Greenwich nel 1884, alla Conferenza internazionale di Washington, perché la maggior parte delle carte nautiche usava già Greenwich." },
        { id: "fusi", label: "Fusi orari", x: 15, y: 78, color: "#6366f1", html: "24 fusi di 15° ciascuno.", why: "Con le ferrovie dell'Ottocento ogni città aveva la sua ora solare e gli orari dei treni erano un caos: per questo si adottarono fusi standard." },
        { id: "placche", label: "Placche tettoniche", x: 50, y: 40, color: "#b45309", html: "La crosta è divisa in placche in lento movimento.", why: "Wegener (1912) notò che le coste di Africa e America del Sud combaciano come pezzi di un puzzle e che vi si trovano gli stessi fossili. Negli anni '60 lo studio dei fondali oceanici dimostrò che le placche si muovono." },
        { id: "continenti", label: "Continenti e oceani", x: 50, y: 66, color: "#16a34a", html: "6 (o 7) continenti, 5 oceani; 29% terre, 71% acqua.", why: "Sono il risultato di centinaia di milioni di anni di movimento delle placche: un tempo tutte le terre erano unite nella Pangea." },
        { id: "fattori", label: "Fattori del clima", x: 85, y: 50, color: "#ef4444", html: "Latitudine, altitudine, mare, correnti, venti, rilievi.", why: "Tutti dipendono da come l'energia del Sole arriva e viene distribuita: più inclinati i raggi, meno calore; l'aria in quota è rarefatta e trattiene meno calore; l'acqua ha una grande capacità di conservare il calore." },
        { id: "climi", label: "Climi e ambienti", x: 85, y: 78, color: "#22c55e", html: "Equatoriale, arido, temperato, freddo, polare.", why: "La classificazione più usata è di Wladimir Köppen, basata su temperature e piogge e sulla vegetazione: le piante sono il miglior \"termometro\" del clima." },
        { id: "uomo", label: "Popolazione", x: 50, y: 92, color: "#ec4899", html: "Oltre 8 miliardi di persone, distribuite in modo molto disuguale.", why: "Le persone vivono soprattutto dove clima, acqua e pianure permettono l'agricoltura: le zone temperate e le grandi valli fluviali dell'Asia. Deserti, poli e alte montagne sono quasi vuoti." }
      ],
      edges: [
        ["sfera", "rotazione", "compie la"],
        ["sfera", "rivoluzione", "compie la"],
        ["rotazione", "reticolo", "asse e poli →"],
        ["reticolo", "fusi", "15° = 1 ora"],
        ["rivoluzione", "fattori", "stagioni →"],
        ["sfera", "placche", "crosta divisa in"],
        ["placche", "continenti", "formano"],
        ["fattori", "climi", "determinano"],
        ["continenti", "uomo", "ospitano la"],
        ["climi", "uomo", "influenzano la"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La Terra è una sfera schiacciata ai poli; <b>71% acqua</b>, <b>29% terre</b>.</li>
<li><b>Rotazione</b> (24 h) → giorno e notte; <b>rivoluzione</b> (365 giorni) + asse inclinato → stagioni.</li>
<li><b>Latitudine</b> (paralleli, da 0° a 90° N/S) e <b>longitudine</b> (meridiani, da 0° a 180° E/O, da Greenwich).</li>
<li>Continenti: Asia, America, Africa, Antartide, Europa, Oceania. Oceani: Pacifico, Atlantico, Indiano, Antartico, Artico.</li>
<li>Fattori del clima: latitudine, altitudine, mare, correnti, venti. Climi: equatoriale, arido, temperato, freddo, polare.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: continenti e climi",
      questions: [
        { type: "mc", q: "Qual è l'oceano più grande?", options: ["Atlantico", "Indiano", "Pacifico"], answer: 2, explain: "Il Pacifico, più esteso di tutte le terre emerse insieme." },
        { type: "tf", q: "Salendo in montagna la temperatura scende di circa 0,6 °C ogni 100 m.", answer: true, explain: "È il gradiente termico verticale medio." },
        { type: "mc", q: "In quale fascia climatica si trova la taiga?", options: ["Equatoriale", "Freddo continentale", "Arido"], answer: 1, explain: "La taiga è la foresta di conifere del clima freddo continentale." }
      ]
    }
  ],
  glossary: [
    { t: "Geoide", d: "Forma reale della Terra: una sfera leggermente schiacciata ai poli e irregolare." },
    { t: "Latitudine", d: "Distanza angolare di un punto dall'equatore (0°–90° N o S)." },
    { t: "Longitudine", d: "Distanza angolare di un punto dal meridiano di Greenwich (0°–180° E o O)." },
    { t: "Fuso orario", d: "Spicchio di circa 15° di longitudine con la stessa ora convenzionale." },
    { t: "Tropici", d: "Paralleli a circa 23,5° N (Cancro) e S (Capricorno): il Sole può essere allo zenit solo tra di loro." },
    { t: "Placca tettonica", d: "Grande porzione rigida della crosta terrestre che si muove lentamente." },
    { t: "Pangea", d: "Supercontinente unico esistito circa 300–200 milioni di anni fa." },
    { t: "Clima", d: "Condizioni atmosferiche medie di un luogo, calcolate su almeno 30 anni." },
    { t: "Corrente marina", d: "Grande \"fiume\" d'acqua all'interno degli oceani, calda o fredda." },
    { t: "Taiga", d: "Foresta di conifere delle regioni a clima freddo continentale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale movimento della Terra provoca l'alternarsi del giorno e della notte?", options: ["La rivoluzione", "La rotazione", "La deriva dei continenti"], answer: 1, explain: "La rotazione su sé stessa in circa 24 ore." },
      { type: "mc", q: "Perché esistono le stagioni?", options: ["Perché d'estate la Terra è più vicina al Sole", "Perché l'asse terrestre è inclinato", "Perché la Luna copre il Sole"], answer: 1, explain: "L'inclinazione dell'asse (circa 23,5°) cambia l'inclinazione dei raggi solari durante l'anno. Anzi, la Terra è più vicina al Sole a gennaio!" },
      { type: "text", q: "Per quale località passa il meridiano fondamentale (0°)?", answer: ["greenwich"], explain: "Per l'osservatorio di Greenwich, vicino a Londra." },
      { type: "num", q: "Quanti gradi di latitudine ha il Polo Nord?", answer: 90, tol: 0, unit: "°", explain: "I poli sono a 90° N e 90° S." },
      { type: "mc", q: "Qual è il continente più grande e più popolato?", options: ["Africa", "America", "Asia"], answer: 2, explain: "L'Asia: circa 44,6 milioni di km² e 4,8 miliardi di abitanti." },
      { type: "tf", q: "L'Antartide ha una popolazione stabile di molti milioni di persone.", answer: false, explain: "In Antartide vivono solo scienziati in basi di ricerca, per periodi limitati." },
      { type: "mc", q: "Chi propose la teoria della deriva dei continenti nel 1912?", options: ["Alfred Wegener", "Galileo Galilei", "Wladimir Köppen"], answer: 0, explain: "Il geofisico tedesco Alfred Wegener." },
      { type: "order", q: "Metti in ordine i climi andando dall'equatore verso il polo.", items: ["Equatoriale", "Arido (tropicale)", "Temperato", "Freddo continentale", "Polare"], explain: "Allontanandosi dall'equatore i raggi solari sono sempre più inclinati e fa sempre più freddo." },
      { type: "mc", q: "Perché Londra d'inverno è più mite di Montréal, anche se è più a nord?", options: ["Perché è una città più grande", "Per l'influenza dell'Atlantico e della Corrente del Golfo", "Perché è più alta sul livello del mare"], answer: 1, explain: "Il mare e la corrente calda mitigano il clima dell'Europa nord-occidentale." },
      { type: "num", q: "Sono le 12:00 a Roma. Che ore sono a New York (6 ore indietro)?", answer: 6, tol: 0, explain: "12 − 6 = 6: sono le 6 del mattino." },
      { type: "tf", q: "Il clima è il tempo che fa oggi.", answer: false, explain: "Il tempo è quello del momento; il clima è la media di almeno 30 anni." },
      { type: "text", q: "Come si chiama il supercontinente unico di circa 300 milioni di anni fa?", answer: ["pangea", "la pangea"], explain: "La Pangea, che significa \"tutta la terra\"." }
    ]
  }
});
