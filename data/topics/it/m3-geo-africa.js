TOPIC('it', {
  id: "m3-geo-africa",
  title: "L'Africa",
  intro: "L'Africa è il continente dove è nata l'umanità, quello con il deserto caldo più grande del mondo (il <b>Sahara</b>) e il fiume più lungo (il <b>Nilo</b>), con <b>54 Stati</b> e oltre <b>2000 lingue</b>. È anche il continente più giovane: l'età media è di circa 19 anni. Scopriamo i suoi ambienti, i suoi popoli e le sue sfide.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Il continente in numeri",
      html: `<ul>
<li><b>Superficie</b>: circa 30,4 milioni di km² (circa 100 volte l'Italia), il terzo continente per estensione.</li>
<li><b>Abitanti</b>: circa 1,5 miliardi, e crescono rapidamente: secondo l'ONU nel 2050 saranno circa 2,5 miliardi.</li>
<li><b>Stati</b>: 54 riconosciuti dall'ONU. Il più grande è l'<b>Algeria</b>; il più popoloso è la <b>Nigeria</b> (oltre 220 milioni di abitanti).</li>
<li><b>Confini naturali</b>: Mar Mediterraneo a nord (lo <b>Stretto di Gibilterra</b> la separa dall'Europa per soli 14 km), Mar Rosso e Canale di Suez a nord-est, Oceano Atlantico a ovest, Oceano Indiano a est.</li>
</ul>
<p>L'equatore taglia l'Africa quasi a metà: per questo i climi e gli ambienti si ripetono in modo quasi <b>simmetrico</b> a nord e a sud.</p>`
    },
    {
      type: "text",
      title: "2. Il territorio",
      html: `<p>L'Africa è soprattutto un grande <b>altopiano</b> antico: le coste sono poco frastagliate e ci sono poche grandi pianure.</p>
<ul>
<li><b>Rilievi</b>: a nord-ovest la catena dell'<b>Atlante</b>; a est la <b>Rift Valley</b>, una gigantesca spaccatura lunga migliaia di km dove la placca africana si sta lentamente dividendo; lì sorgono i vulcani più alti, come il <b>Kilimangiaro</b> (5895 m, Tanzania), la vetta più alta d'Africa.</li>
<li><b>Fiumi</b>: il <b>Nilo</b> (circa 6650 km, verso il Mediterraneo), il <b>Congo</b> (il secondo fiume più ricco d'acqua del mondo), il <b>Niger</b>, lo <b>Zambesi</b> con le cascate Vittoria.</li>
<li><b>Laghi</b>: nella Rift Valley si trovano grandi laghi, come il <b>Vittoria</b> (il più grande d'Africa) e il <b>Tanganica</b> (il secondo più profondo del mondo).</li>
<li><b>Isole</b>: la più grande è il <b>Madagascar</b>, la quarta isola più grande del mondo.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Il paesaggio africano in 3D",
      scene: "terrain",
      options: {
        features: {
          peak: { label: "Kilimangiaro", html: "5895 m, in Tanzania: un vulcano spento con la cima coperta di ghiacci, proprio vicino all'equatore. I suoi ghiacciai però si sono ridotti di oltre l'80% nell'ultimo secolo." },
          valley: { label: "Rift Valley", html: "Una spaccatura della crosta lunga circa 6000 km, dal Mar Rosso al Mozambico. Qui sono stati trovati alcuni dei fossili più antichi dei nostri antenati, come \"Lucy\" (Etiopia, circa 3,2 milioni di anni fa)." },
          mountain: { label: "Atlante", html: "Catena montuosa del Nord-Ovest (Marocco, Algeria, Tunisia), che separa le coste mediterranee dal Sahara." },
          river: { label: "Nilo", html: "Il fiume più lungo d'Africa (circa 6650 km). Nasce dal lago Vittoria (Nilo Bianco) e dall'Etiopia (Nilo Azzurro) e attraversa il deserto fino al Mediterraneo." },
          delta: { label: "Delta del Nilo", html: "Una delle zone più fertili e popolate d'Africa: qui vive gran parte dei circa 110 milioni di egiziani." },
          lake: { label: "Lago Vittoria", html: "Il lago più grande d'Africa (circa 68.000 km², più di un quinto dell'Italia), diviso tra Uganda, Kenya e Tanzania." },
          plain: { label: "Savana", html: "Grandi distese di erba alta con alberi sparsi (acacie, baobab), con una stagione secca e una delle piogge. Ospitano leoni, elefanti, giraffe, zebre e gnu." },
          island: { label: "Madagascar", html: "La quarta isola più grande del mondo. Si staccò dall'Africa circa 160 milioni di anni fa: per questo ha animali che non esistono altrove, come i <b>lemuri</b>." },
          coast: { label: "Coste", html: "Le coste africane sono poco frastagliate, con pochi porti naturali: uno dei motivi per cui l'interno del continente fu esplorato tardi dagli europei." },
          volcano: { label: "Vulcani della Rift", html: "Lungo la Rift Valley ci sono molti vulcani attivi, come il Nyiragongo (Repubblica Democratica del Congo), con un lago di lava nel cratere." }
        }
      },
      caption: "Ruota il paesaggio e tocca le parti per conoscere gli ambienti africani."
    },
    {
      type: "text",
      title: "3. Climi e ambienti: un continente a fasce",
      html: `<p>Partendo dall'equatore e andando verso nord (o verso sud) si incontrano, in ordine:</p>
<ol>
<li>🌳 <b>Foresta pluviale equatoriale</b> (bacino del Congo, Golfo di Guinea): caldo e piogge tutto l'anno, alberi altissimi, enorme biodiversità. È la seconda foresta pluviale del mondo dopo l'Amazzonia.</li>
<li>🦒 <b>Savana</b>: clima tropicale con una stagione delle piogge e una secca.</li>
<li>🌾 <b>Sahel</b> e steppa: una fascia di passaggio semiarida tra savana e deserto (\"sahel\" in arabo significa \"riva\", la riva del deserto).</li>
<li>🏜️ <b>Deserto</b>: a nord il <b>Sahara</b> (circa 9 milioni di km², grande quasi come gli USA), a sud il <b>Kalahari</b> e il <b>Namib</b>.</li>
<li>🫒 <b>Clima mediterraneo</b> alle due estremità: coste del Nord Africa e punta del Sudafrica (Città del Capo).</li>
</ol>`
    },
    {
      type: "3d",
      title: "Le fasce dell'Africa come strati",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#84cc16", label: "Clima mediterraneo (estremità nord e sud)" },
          { r: 0.82, color: "#fcd34d", label: "Deserto (Sahara; Kalahari e Namib)" },
          { r: 0.64, color: "#d6d3d1", label: "Sahel e steppa" },
          { r: 0.47, color: "#a3e635", label: "Savana" },
          { r: 0.3, color: "#166534", label: "Foresta pluviale (equatore)" }
        ]
      },
      caption: "Modello semplificato: il centro è l'equatore; allontanandosi verso nord o verso sud si attraversano le stesse fasce. Le montagne e le correnti marine interrompono questa simmetria (per esempio l'altopiano etiopico e quello del Kenya hanno climi più freschi)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: territorio e ambienti",
      questions: [
        { type: "mc", q: "Qual è la vetta più alta dell'Africa?", options: ["Monte Bianco", "Kilimangiaro", "Atlante"], answer: 1, explain: "Il Kilimangiaro, 5895 m, in Tanzania." },
        { type: "order", q: "Ordina gli ambienti dall'equatore verso il Mediterraneo.", items: ["Foresta pluviale", "Savana", "Sahel", "Sahara", "Clima mediterraneo"], explain: "Allontanandosi dall'equatore le piogge diminuiscono fino al deserto; poi, sulla costa, torna il clima mediterraneo." },
        { type: "tf", q: "La Rift Valley è una grande spaccatura della crosta terrestre.", answer: true, explain: "Lì la placca africana si sta lentamente dividendo in due." }
      ]
    },
    {
      type: "text",
      title: "4. Popoli, lingue, storia",
      html: `<p>L'Africa è la <b>culla dell'umanità</b>: i più antichi fossili di <i>Homo sapiens</i>, di circa 300.000 anni fa, sono stati trovati a Jebel Irhoud, in Marocco. Da qui i nostri antenati si sono diffusi in tutto il mondo.</p>
<p>In Africa sono nate grandi civiltà: l'<b>Egitto</b> dei faraoni, il regno di <b>Aksum</b> (Etiopia), gli imperi del <b>Mali</b> (con la città di Timbuctù, centro di studi) e del <b>Grande Zimbabwe</b>.</p>
<p>Dal Cinquecento all'Ottocento circa <b>12 milioni</b> di africani furono deportati come schiavi nelle Americhe (<b>tratta atlantica</b>). Alla fine dell'Ottocento quasi tutto il continente fu diviso tra le potenze europee; l'indipendenza arrivò soprattutto tra il <b>1956 e il 1975</b>.</p>
<p>Oggi:</p>
<ul>
<li><b>Nord Africa</b> (Marocco, Algeria, Tunisia, Libia, Egitto): popoli arabi e berberi, lingua araba, religione musulmana.</li>
<li><b>Africa subsahariana</b>: centinaia di popoli (ad esempio Yoruba, Igbo, Zulu, Masai), lingue africane come lo <b>swahili</b> (parlato da oltre 100 milioni di persone in Africa orientale), l'hausa, l'amarico, lo yoruba, insieme alle lingue europee (inglese, francese, portoghese) usate come lingue ufficiali; religioni cristiana, musulmana e tradizionali.</li>
</ul>`
    },
    {
      type: "svg",
      title: "La piramide dell'età: Africa ed Europa",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fffbeb"/>
<text x="150" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#9a3412">Niger (Africa)</text>
<text x="450" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Italia (Europa)</text>
<rect x="40" y="250" width="220" height="30" fill="#fb923c"/>
<rect x="60" y="220" width="180" height="30" fill="#fb923c"/>
<rect x="85" y="190" width="130" height="30" fill="#fdba74"/>
<rect x="105" y="160" width="90" height="30" fill="#fdba74"/>
<rect x="120" y="130" width="60" height="30" fill="#fed7aa"/>
<rect x="132" y="100" width="36" height="30" fill="#fed7aa"/>
<rect x="142" y="70" width="16" height="30" fill="#ffedd5"/>
<rect x="400" y="250" width="100" height="30" fill="#93c5fd"/>
<rect x="390" y="220" width="120" height="30" fill="#93c5fd"/>
<rect x="380" y="190" width="140" height="30" fill="#60a5fa"/>
<rect x="370" y="160" width="160" height="30" fill="#60a5fa"/>
<rect x="372" y="130" width="156" height="30" fill="#3b82f6"/>
<rect x="385" y="100" width="130" height="30" fill="#3b82f6"/>
<rect x="405" y="70" width="90" height="30" fill="#1d4ed8"/>
<text x="300" y="272" font-size="14" text-anchor="middle" fill="#111827">giovani</text>
<text x="300" y="90" font-size="14" text-anchor="middle" fill="#111827">anziani</text>
<path d="M300 250 L300 105" stroke="#111827" stroke-width="2" marker-end="url(#e)"/>
<defs><marker id="e" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#111827"/></marker></defs>
<text x="150" y="305" font-size="14" text-anchor="middle" fill="#9a3412">età media circa 15 anni</text>
<text x="450" y="305" font-size="14" text-anchor="middle" fill="#1e3a8a">età media circa 48 anni</text>
</svg>`,
      caption: "Schema semplificato. In Niger (circa 6 figli per donna) la piramide ha una base larghissima: tantissimi bambini. In Italia (circa 1,2 figli per donna) la \"piramide\" assomiglia a una botte: ci sono più adulti e anziani che bambini."
    },
    {
      type: "text",
      title: "5. Le sfide e le opportunità",
      html: `<p><b>Sfide</b>:</p>
<ul>
<li><b>Povertà</b>: circa 4 persone su 10 in Africa subsahariana vivono in povertà estrema; la maggior parte dei Paesi con ISU più basso è africana.</li>
<li><b>Salute</b>: malaria, HIV e malnutrizione causano ancora molte morti; la speranza di vita media è circa 64 anni.</li>
<li><b>Conflitti</b> e instabilità (Sudan, Sahel, Repubblica Democratica del Congo), spesso legati a confini artificiali, risorse contese e debolezza degli Stati.</li>
<li><b>Cambiamento climatico</b>: l'Africa produce meno del 4% delle emissioni mondiali di CO₂, ma subisce siccità e <b>desertificazione</b>, soprattutto nel Sahel.</li>
<li><b>Economia dipendente</b> dall'esportazione di materie prime (petrolio, oro, cobalto, cacao), spesso vendute senza essere trasformate sul posto.</li>
</ul>
<p><b>Opportunità</b>:</p>
<ul>
<li>una popolazione <b>giovanissima</b> che può diventare una grande forza lavoro;</li>
<li><b>risorse</b> enormi: circa il 70% del cobalto mondiale (per le batterie) viene dalla Repubblica Democratica del Congo; grandi riserve di sole per l'energia solare;</li>
<li><b>innovazione</b>: in Kenya il sistema di pagamento con il cellulare <b>M-Pesa</b> (dal 2007) ha portato i servizi bancari a milioni di persone che non avevano un conto;</li>
<li>la <b>Zona di libero scambio continentale africana</b> (AfCFTA, dal 2021) per aumentare il commercio tra i Paesi africani; l'<b>Unione Africana</b> (sede ad Addis Abeba) riunisce tutti i 55 membri del continente.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: la Grande Muraglia Verde",
      html: `<p>Per fermare l'avanzata del deserto, nel <b>2007</b> l'Unione Africana ha lanciato la <b>Grande Muraglia Verde</b>: una fascia di alberi, orti e terreni recuperati lunga circa <b>8000 km</b>, dal Senegal a Gibuti, attraverso 11 Paesi del Sahel.</p>
<p>Non è un muro di alberi continuo: i contadini piantano specie resistenti alla siccità (come l'acacia che produce la gomma arabica), costruiscono piccoli argini a mezzaluna per trattenere l'acqua piovana e recuperano terreni abbandonati. L'obiettivo è recuperare 100 milioni di ettari entro il 2030, ma i lavori sono ancora lontani dal traguardo.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il cacao della tua merenda",
      html: `<p>Circa il <b>60%</b> del cacao del mondo viene da due soli Paesi africani: <b>Costa d'Avorio</b> e <b>Ghana</b>. Il contadino vende i semi secchi; la trasformazione in cioccolato, che vale molto di più, avviene quasi sempre in Europa (Paesi Bassi, Belgio, Svizzera, Germania, Italia).</p>
<p>È un esempio di economia che <b>esporta materie prime</b> e <b>importa prodotti finiti</b>: per questo molti governi africani cercano di costruire sul posto fabbriche di cioccolato, raffinerie e industrie, per trattenere più ricchezza.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… l'Africa è molto più grande di come la vedi sulla carta?",
      html: `<p>Nella carta di Mercatore (quella spesso appesa in classe) l'Africa sembra grande come la Groenlandia. In realtà è circa <b>14 volte più grande</b>! Dentro l'Africa entrerebbero insieme gli <b>Stati Uniti</b>, la <b>Cina</b>, l'<b>India</b> e quasi tutta l'<b>Europa</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il Sahara una volta era verde?",
      html: `<p>Tra circa 11.000 e 5.000 anni fa il Sahara era coperto di savane, laghi e fiumi, con ippopotami, coccodrilli e giraffe: è il cosiddetto <b>\"Sahara verde\"</b>. Lo sappiamo dalle pitture rupestri trovate in mezzo al deserto, come quelle del Tassili in Algeria, che mostrano animali e mandrie al pascolo. Un piccolo cambiamento dell'orbita terrestre spostò i monsoni e il Sahara si trasformò in deserto.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per conoscere l'Africa",
      intro: "Se i nomi e i numeri ti confondono, prova uno di questi percorsi.",
      tabs: [
        {
          label: "🌍 Viaggio sul globo",
          html: `<p>Fai un viaggio dal Cairo a Città del Capo (circa 7000 km in linea d'aria) e attraversa tutte le fasce del continente.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 30.04, lon: 31.24, label: "Il Cairo", color: "#f59e0b" },
              { lat: 23.4, lon: 25.7, label: "Sahara", color: "#fbbf24" },
              { lat: 15.6, lon: 32.5, label: "Khartum (Sahel)", color: "#a16207" },
              { lat: 9.03, lon: 38.74, label: "Addis Abeba", color: "#16a34a" },
              { lat: -1.29, lon: 36.82, label: "Nairobi (savana)", color: "#84cc16" },
              { lat: -3.07, lon: 37.35, label: "Kilimangiaro", color: "#64748b" },
              { lat: -17.92, lon: 25.86, label: "Cascate Vittoria", color: "#0ea5e9" },
              { lat: -33.92, lon: 18.42, label: "Città del Capo", color: "#7c3aed" },
              { lat: 6.52, lon: 3.38, label: "Lagos", color: "#dc2626" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6, 7], color: "#ea580c" }]
          }
        },
        {
          label: "🧩 Gioco: abbina l'ambiente",
          html: `<p>Ogni animale o pianta vive nel suo ambiente: abbinali.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["🐪 Dromedario", "Deserto del Sahara"],
              ["🦒 Giraffa", "Savana"],
              ["🦍 Gorilla", "Foresta pluviale del Congo"],
              ["🐒 Lemure", "Madagascar"],
              ["🦛 Ippopotamo", "Fiumi e laghi"],
              ["🫒 Ulivo", "Coste mediterranee del Nord Africa"]
            ]
          }
        },
        {
          label: "🔢 Africa in 10 persone",
          html: `<p>Se l'Africa fosse un gruppo di <b>10 persone</b>:</p>
<ul>
<li>circa <b>4</b> avrebbero meno di 15 anni (in Italia: poco più di 1);</li>
<li>circa <b>4–5</b> vivrebbero in città (la popolazione urbana cresce velocissima: <b>Lagos</b>, <b>Kinshasa</b> e <b>Il Cairo</b> hanno oltre 15 milioni di abitanti ciascuna);</li>
<li>circa <b>5</b> lavorerebbero nell'agricoltura;</li>
<li>quasi tutte avrebbero un <b>telefono cellulare</b> in famiglia.</li>
</ul>`
        },
        {
          label: "🗺️ La carta \"giusta\"",
          html: `<p>Le carte geografiche non sono neutrali: la proiezione di <b>Mercatore</b> (1569) ingrandisce le terre vicine ai poli (Europa, Nord America) e rimpicciolisce quelle all'equatore (Africa). Nel 2025 l'Unione Africana ha sostenuto la campagna <b>\"Correct the Map\"</b> per usare nelle scuole carte che rispettano le aree reali, come la proiezione <b>Equal Earth</b> (2018).</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#e0f2fe"/>
<text x="150" y="26" font-size="17" text-anchor="middle" font-weight="bold" fill="#0f172a">Come appare (Mercatore)</text>
<rect x="60" y="45" width="80" height="80" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><text x="100" y="92" font-size="14" text-anchor="middle" fill="#0f172a">Groenl.</text>
<rect x="155" y="55" width="90" height="100" fill="#fb923c" stroke="#9a3412" stroke-width="2"/><text x="200" y="110" font-size="14" text-anchor="middle" fill="#7c2d12">Africa</text>
<text x="450" y="26" font-size="17" text-anchor="middle" font-weight="bold" fill="#0f172a">Com'è davvero (aree)</text>
<rect x="332" y="60" width="43" height="43" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><text x="353" y="122" font-size="13" text-anchor="middle" fill="#0f172a">Groenl.</text>
<rect x="390" y="40" width="160" height="160" fill="#fb923c" stroke="#9a3412" stroke-width="2"/><text x="470" y="125" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">Africa ×14</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'Africa: tocca i nodi e scopri il perché",
      nodes: [
        { id: "equatore", label: "Equatore al centro", x: 50, y: 6, color: "#ef4444", html: "L'Africa è tagliata a metà dall'equatore.", why: "È l'unico continente attraversato sia dall'equatore sia da entrambi i Tropici: per questo è il continente più caldo e i suoi ambienti si ripetono simmetrici." },
        { id: "fasce", label: "Fasce climatiche", x: 20, y: 25, color: "#16a34a", html: "Foresta, savana, Sahel, deserto, mediterraneo.", why: "All'equatore l'aria calda e umida sale e forma piogge quasi ogni giorno; intorno ai Tropici l'aria scende secca, e lì si formano i grandi deserti (Sahara, Kalahari). È la circolazione atmosferica descritta dalle \"celle di Hadley\" (George Hadley, 1735)." },
        { id: "rift", label: "Rift Valley", x: 80, y: 25, color: "#b45309", html: "Spaccatura della crosta con vulcani, laghi e fossili.", why: "Lì la placca africana si sta dividendo (placca somala e placca nubiana); fra milioni di anni potrebbe nascere un nuovo oceano. L'erosione ha portato in superficie strati antichissimi, pieni di fossili di ominidi." },
        { id: "origini", label: "Culla dell'umanità", x: 80, y: 50, color: "#a855f7", html: "Qui sono nati i primi ominidi e l'Homo sapiens.", why: "Lo dimostrano i fossili (Lucy, 1974, Etiopia; Jebel Irhoud, Marocco) e il DNA: tutte le popolazioni umane discendono da antenati africani." },
        { id: "colonie", label: "Tratta e colonialismo", x: 50, y: 45, color: "#64748b", html: "Schiavitù atlantica (XVI–XIX secolo) e spartizione europea.", why: "Le potenze europee cercavano manodopera per le piantagioni americane e poi materie prime per le industrie; la Conferenza di Berlino (1884–1885) fissò le regole della spartizione." },
        { id: "stati", label: "54 Stati indipendenti", x: 20, y: 55, color: "#f59e0b", html: "Indipendenze soprattutto tra il 1956 e il 1975.", why: "Dopo la Seconda guerra mondiale le potenze europee erano indebolite e i movimenti di liberazione forti; i nuovi Stati mantennero però i confini coloniali." },
        { id: "giovani", label: "Popolazione giovanissima", x: 35, y: 78, color: "#ec4899", html: "Età media circa 19 anni; crescita rapida.", why: "La mortalità infantile è diminuita grazie a vaccini e cure, mentre il numero di figli per donna resta alto (circa 4): è la fase della \"transizione demografica\" che l'Europa ha vissuto nell'Ottocento." },
        { id: "sfide", label: "Sfide", x: 65, y: 78, color: "#dc2626", html: "Povertà, conflitti, clima, economia delle materie prime.", why: "Sono effetti intrecciati della storia coloniale, di confini artificiali, di istituzioni deboli e di un clima reso più estremo dal riscaldamento globale." },
        { id: "futuro", label: "Opportunità", x: 50, y: 95, color: "#22c55e", html: "Giovani, risorse, energia solare, innovazione digitale.", why: "Molti economisti pensano che nel XXI secolo l'Africa possa crescere come l'Asia nel XX: entro il 2050 circa un giovane su tre nel mondo sarà africano." }
      ],
      edges: [
        ["equatore", "fasce", "crea le"],
        ["rift", "origini", "conserva i fossili della"],
        ["colonie", "stati", "lascia i confini agli"],
        ["fasce", "sfide", "siccità →"],
        ["stati", "sfide", "affrontano"],
        ["colonie", "sfide", "eredità →"],
        ["giovani", "futuro", "sono il"],
        ["sfide", "futuro", "da trasformare in"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'<b>Africa</b>: 30,4 milioni km², circa 1,5 miliardi di abitanti, <b>54 Stati</b>. Il più popoloso è la <b>Nigeria</b>.</li>
<li>Territorio: altopiano antico, <b>Atlante</b>, <b>Rift Valley</b>, <b>Kilimangiaro</b> (5895 m); fiumi <b>Nilo</b>, <b>Congo</b>, <b>Niger</b>; lago <b>Vittoria</b>; isola <b>Madagascar</b>.</li>
<li>Ambienti a fasce simmetriche: foresta pluviale, savana, Sahel, deserto (<b>Sahara</b>, Kalahari), mediterraneo.</li>
<li>Culla dell'umanità; tratta degli schiavi e colonialismo; indipendenze 1956–1975.</li>
<li>Sfide: povertà, salute, conflitti, desertificazione. Opportunità: giovani, risorse, innovazione.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: popoli e sfide",
      questions: [
        { type: "mc", q: "Qual è il Paese più popoloso dell'Africa?", options: ["Egitto", "Nigeria", "Sudafrica"], answer: 1, explain: "La Nigeria, con oltre 220 milioni di abitanti." },
        { type: "text", q: "Quale lingua africana è parlata da oltre 100 milioni di persone in Africa orientale?", answer: ["swahili", "lo swahili", "kiswahili"], explain: "Lo swahili (kiswahili)." },
        { type: "mc", q: "Che cos'è la Grande Muraglia Verde?", options: ["Un muro costruito dai romani", "Un progetto per fermare la desertificazione nel Sahel", "Una catena montuosa"], answer: 1, explain: "Una fascia di terre recuperate e alberi dal Senegal a Gibuti." }
      ]
    }
  ],
  glossary: [
    { t: "Rift Valley", d: "Grande fossa tettonica dell'Africa orientale dove la crosta si sta dividendo." },
    { t: "Savana", d: "Prateria tropicale con alberi sparsi, con una stagione secca e una piovosa." },
    { t: "Sahel", d: "Fascia semiarida a sud del Sahara, tra deserto e savana." },
    { t: "Desertificazione", d: "Trasformazione di terre fertili in terre aride, per clima e attività umane." },
    { t: "Foresta pluviale", d: "Foresta equatoriale con piogge abbondanti tutto l'anno e grandissima biodiversità." },
    { t: "Tratta atlantica", d: "Deportazione di milioni di africani schiavizzati verso le Americhe (XVI–XIX secolo)." },
    { t: "Età media", d: "Età che divide la popolazione in due metà: metà più giovane, metà più anziana." },
    { t: "Unione Africana", d: "Organizzazione degli Stati africani nata nel 2002, con sede ad Addis Abeba." },
    { t: "Swahili", d: "Lingua bantu con molte parole arabe, diffusa in Africa orientale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quanti Stati africani sono riconosciuti dall'ONU?", options: ["27", "54", "100"], answer: 1, explain: "54 Stati." },
      { type: "text", q: "Come si chiama il deserto caldo più grande del mondo, nel Nord Africa?", answer: ["sahara", "il sahara"], explain: "Il Sahara, circa 9 milioni di km²." },
      { type: "mc", q: "Perché gli ambienti africani si ripetono quasi uguali a nord e a sud?", options: ["Perché l'equatore taglia l'Africa quasi a metà", "Perché l'Africa è un'isola", "Perché è tutto deserto"], answer: 0, explain: "Allontanandosi dall'equatore in entrambe le direzioni si incontrano le stesse fasce climatiche." },
      { type: "tf", q: "Il Kilimangiaro è la montagna più alta dell'Africa.", answer: true, explain: "5895 m, in Tanzania." },
      { type: "mc", q: "Quale fiume africano attraversa il deserto e sfocia nel Mediterraneo?", options: ["Congo", "Niger", "Nilo"], answer: 2, explain: "Il Nilo, il più lungo d'Africa." },
      { type: "mc", q: "Che cos'è il Sahel?", options: ["Una foresta pluviale", "La fascia semiarida tra Sahara e savana", "Un'isola dell'Oceano Indiano"], answer: 1, explain: "In arabo \"sahel\" significa riva: la riva del deserto." },
      { type: "text", q: "Qual è la grande isola africana dove vivono i lemuri?", answer: ["madagascar", "il madagascar"], explain: "Il Madagascar, quarta isola più grande del mondo." },
      { type: "tf", q: "L'Africa è il continente con la popolazione più anziana.", answer: false, explain: "È il continente più giovane: età media circa 19 anni." },
      { type: "num", q: "Quante volte l'Africa è più grande della Groenlandia (numero intero)?", answer: 14, tol: 0, explain: "30,4 milioni di km² ÷ circa 2,2 milioni ≈ 14." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Homo sapiens a Jebel Irhoud", "Civiltà egizia dei faraoni", "Tratta atlantica degli schiavi", "Conferenza di Berlino", "Indipendenza del Ghana"], explain: "300.000 anni fa → 3100 a.C. → XVI–XIX sec. → 1884–1885 → 1957." },
      { type: "mc", q: "Da quale Paese viene circa il 70% del cobalto mondiale, usato nelle batterie?", options: ["Repubblica Democratica del Congo", "Marocco", "Kenya"], answer: 0, explain: "La Repubblica Democratica del Congo." },
      { type: "mc", q: "Che cos'è M-Pesa?", options: ["Un fiume del Kenya", "Un sistema di pagamento con il cellulare", "Una moneta antica"], answer: 1, explain: "Nato in Kenya nel 2007, ha portato i servizi finanziari a milioni di persone." }
    ]
  }
});
