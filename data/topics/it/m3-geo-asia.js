TOPIC('it', {
  id: "m3-geo-asia",
  title: "L'Asia",
  intro: "L'Asia è il continente dei record: il più grande, il più popolato, con la montagna più alta (l'Everest) e il punto più basso delle terre emerse (il Mar Morto). Qui vivono quasi <b>6 persone su 10</b> al mondo. In questa lezione la attraversiamo e ci fermiamo in tre giganti: <b>Cina</b>, <b>India</b> e <b>Giappone</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Il continente più grande",
      html: `<ul>
<li><b>Superficie</b>: circa 44,6 milioni di km² (circa il 30% delle terre emerse).</li>
<li><b>Abitanti</b>: circa 4,8 miliardi (circa il 59% dell'umanità).</li>
<li><b>Confini</b>: a ovest con l'Europa lungo i monti <b>Urali</b>, il fiume Ural, il Mar Caspio e il <b>Caucaso</b>; a sud-ovest con l'Africa lungo l'istmo e il Canale di Suez. È bagnata da tre oceani: <b>Artico</b>, <b>Pacifico</b> e <b>Indiano</b>.</li>
</ul>
<p>Si divide di solito in cinque grandi regioni:</p>
<table>
<tr><th>Regione</th><th>Paesi principali</th></tr>
<tr><td>Asia occidentale (Vicino e Medio Oriente)</td><td>Turchia, Israele, Arabia Saudita, Iran, Iraq</td></tr>
<tr><td>Asia centrale</td><td>Kazakistan, Uzbekistan, Afghanistan</td></tr>
<tr><td>Asia meridionale</td><td>India, Pakistan, Bangladesh, Nepal, Sri Lanka</td></tr>
<tr><td>Asia orientale</td><td>Cina, Giappone, Corea del Sud e del Nord, Mongolia</td></tr>
<tr><td>Sud-Est asiatico</td><td>Indonesia, Vietnam, Thailandia, Filippine, Malaysia</td></tr>
</table>
<p>Anche la <b>Russia siberiana</b> (a est degli Urali) è geograficamente Asia, anche se la Russia è considerata uno Stato europeo.</p>`
    },
    {
      type: "text",
      title: "2. Rilievi, fiumi e climi",
      html: `<p><b>Rilievi</b>: al centro c'è il \"tetto del mondo\": l'<b>Himalaya</b> con 10 delle 14 vette sopra gli 8000 m, tra cui l'<b>Everest</b> (8849 m), e l'altopiano del <b>Tibet</b> (in media oltre 4500 m). Nacque dallo scontro tra la placca indiana e quella euroasiatica, iniziato circa 50 milioni di anni fa: l'Himalaya cresce ancora di qualche millimetro all'anno.</p>
<p><b>Fiumi</b>: dall'altopiano tibetano nascono i grandi fiumi dell'Asia: <b>Yangtze</b> (Fiume Azzurro, circa 6300 km, il più lungo d'Asia), <b>Huang He</b> (Fiume Giallo), <b>Mekong</b>, <b>Gange</b>, <b>Brahmaputra</b>, <b>Indo</b>. Più a ovest, <b>Tigri</b> ed <b>Eufrate</b>, culla della Mesopotamia.</p>
<p><b>Climi</b>: tutti! <b>Polare</b> e freddo in Siberia (a Ojmjakon si sono registrati circa −67,7 °C); <b>arido</b> nei deserti d'Arabia e del <b>Gobi</b>; <b>temperato</b> in Cina e Giappone; <b>tropicale monsonico</b> in India e nel Sud-Est; <b>equatoriale</b> in Indonesia.</p>
<p>I <b>monsoni</b> sono venti che cambiano direzione con le stagioni: d'estate soffiano dall'oceano verso la terra e portano piogge fortissime; d'inverno soffiano dalla terra verso il mare e il clima è secco. Da essi dipende il raccolto del <b>riso</b> per miliardi di persone.</p>`
    },
    {
      type: "3d",
      title: "Il paesaggio asiatico in 3D",
      scene: "terrain",
      options: {
        features: {
          peak: { label: "Everest", html: "8849 m, tra Nepal e Cina (Tibet): la vetta più alta del pianeta. In nepalese si chiama <b>Sagarmatha</b>, in tibetano <b>Chomolungma</b>. Fu scalato per la prima volta nel 1953 da Edmund Hillary e dallo sherpa Tenzing Norgay." },
          mountain: { label: "Himalaya", html: "Catena lunga circa 2400 km. Ospita 10 delle 14 vette sopra gli 8000 metri." },
          glacier: { label: "Ghiacciai himalayani", html: "Sono chiamati il \"terzo polo\": dopo Antartide e Artico contengono la maggior riserva di ghiaccio. Alimentano i fiumi da cui dipendono quasi 2 miliardi di persone, ma con il riscaldamento globale si stanno ritirando." },
          plain: { label: "Pianura del Gange", html: "Una delle pianure più fertili e popolate del mondo, formata dai detriti portati dai fiumi himalayani." },
          river: { label: "Yangtze", html: "Il fiume più lungo d'Asia (circa 6300 km). Sul suo corso c'è la <b>Diga delle Tre Gole</b>, la centrale idroelettrica più potente del mondo." },
          delta: { label: "Delta del Gange-Brahmaputra", html: "Il delta più grande del mondo, in Bangladesh e India; qui si trova la foresta di mangrovie delle Sundarbans, casa della tigre del Bengala." },
          volcano: { label: "Monte Fuji", html: "Il vulcano simbolo del Giappone (3776 m), ancora attivo: l'ultima eruzione fu nel 1707." },
          archipelago: { label: "Arcipelaghi", html: "L'<b>Indonesia</b> è formata da oltre 17.000 isole; il <b>Giappone</b> da 4 isole principali e migliaia di isole minori; le <b>Filippine</b> da oltre 7000." },
          lake: { label: "Bajkal", html: "In Siberia: il lago più profondo (circa 1640 m) e più antico del mondo (circa 25 milioni di anni). Contiene circa il 20% dell'acqua dolce liquida superficiale del pianeta." },
          peninsula: { label: "Penisole", html: "Asia ha penisole enormi: <b>Arabica</b> (la più grande del mondo), <b>Indiana</b> (il \"subcontinente\"), <b>Indocinese</b>, <b>Coreana</b>, <b>Anatolia</b>." }
        }
      },
      caption: "Tocca le parti del paesaggio per scoprire i record dell'Asia."
    },
    {
      type: "svg",
      title: "Come funziona il monsone",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="26" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f766e">Estate (giugno–settembre)</text>
<rect x="20" y="200" width="130" height="70" fill="#38bdf8"/><text x="85" y="245" font-size="15" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Oceano</text>
<rect x="150" y="190" width="130" height="80" fill="#a3e635"/><text x="215" y="240" font-size="15" text-anchor="middle" fill="#365314" font-weight="bold">India</text>
<ellipse cx="215" cy="110" rx="60" ry="28" fill="#64748b"/>
<path d="M190 140 L185 165 M215 140 L210 165 M240 140 L235 165" stroke="#2563eb" stroke-width="4"/>
<path d="M50 170 L170 170" stroke="#0f766e" stroke-width="6" marker-end="url(#m)"/>
<text x="85" y="160" font-size="14" text-anchor="middle" fill="#0f766e">vento umido</text>
<text x="215" y="70" font-size="14" text-anchor="middle" fill="#334155">piogge forti 🌧️</text>
<text x="450" y="26" font-size="18" text-anchor="middle" font-weight="bold" fill="#b45309">Inverno (dicembre–febbraio)</text>
<rect x="320" y="200" width="130" height="70" fill="#38bdf8"/><text x="385" y="245" font-size="15" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Oceano</text>
<rect x="450" y="190" width="130" height="80" fill="#fde68a"/><text x="515" y="240" font-size="15" text-anchor="middle" fill="#78350f" font-weight="bold">India</text>
<circle cx="515" cy="100" r="26" fill="#facc15"/>
<path d="M560 170 L440 170" stroke="#b45309" stroke-width="6" marker-end="url(#n)"/>
<text x="515" y="160" font-size="14" text-anchor="middle" fill="#b45309">vento secco</text>
<text x="515" y="60" font-size="14" text-anchor="middle" fill="#334155">tempo asciutto ☀️</text>
<defs>
<marker id="m" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#0f766e"/></marker>
<marker id="n" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#b45309"/></marker>
</defs>
</svg>`,
      caption: "D'estate la terra si scalda più del mare: l'aria sale e richiama vento umido dall'oceano, che porta le piogge. D'inverno succede il contrario."
    },
    {
      type: "quiz",
      title: "Mini-quiz: il continente",
      questions: [
        { type: "mc", q: "Quali monti segnano il confine tra Europa e Asia?", options: ["Alpi", "Urali", "Ande"], answer: 1, explain: "I monti Urali, insieme al fiume Ural, al Mar Caspio e al Caucaso." },
        { type: "num", q: "Quanto è alto l'Everest (in metri)?", answer: 8849, tol: 1, unit: "m", explain: "8849 m, secondo la misurazione cinese-nepalese del 2020." },
        { type: "tf", q: "I monsoni sono venti che cambiano direzione con le stagioni.", answer: true, explain: "D'estate portano le piogge, d'inverno tempo secco." }
      ]
    },
    {
      type: "text",
      title: "3. La Cina",
      html: `<p><b>Capitale</b>: Pechino (Beijing). <b>Abitanti</b>: circa 1,41 miliardi. <b>Superficie</b>: circa 9,6 milioni di km² (circa 32 volte l'Italia). <b>Lingua</b>: cinese mandarino. <b>Moneta</b>: yuan (renminbi).</p>
<p><b>Territorio</b>: l'Ovest è fatto di montagne, altopiani (Tibet) e deserti (Gobi, Taklamakan) quasi disabitati; quasi tutti i cinesi vivono nell'<b>Est</b>, nelle pianure e lungo le coste e i grandi fiumi.</p>
<p><b>Economia</b>: dalle riforme di Deng Xiaoping (1978) la Cina è diventata la <b>\"fabbrica del mondo\"</b> e oggi è la <b>seconda economia</b> del pianeta e il <b>primo esportatore</b>. È leader in pannelli solari, batterie e auto elettriche. Grandi metropoli: <b>Shanghai</b> (oltre 24 milioni di abitanti), Pechino, Shenzhen, Canton (Guangzhou), Chongqing.</p>
<p><b>Problemi</b>: forte inquinamento (la Cina è il primo emettitore di CO₂ al mondo), differenze tra coste ricche e interno povero, invecchiamento della popolazione dopo la politica del <b>figlio unico</b> (1980–2015), mancanza di libertà politiche (partito unico).</p>`
    },
    {
      type: "text",
      title: "4. L'India",
      html: `<p><b>Capitale</b>: Nuova Delhi. <b>Abitanti</b>: oltre 1,43 miliardi: dal <b>2023</b> è il <b>Paese più popoloso del mondo</b>, avendo superato la Cina. <b>Superficie</b>: circa 3,3 milioni di km². <b>Lingue</b>: hindi e inglese ufficiali, più 22 lingue riconosciute dalla Costituzione. <b>Moneta</b>: rupia.</p>
<p>È la <b>democrazia più grande del mondo</b>: alle elezioni del 2024 erano chiamati a votare circa <b>970 milioni</b> di elettori.</p>
<p><b>Territorio</b>: a nord l'Himalaya; al centro la grande pianura del <b>Gange</b>, fiume sacro per gli induisti; a sud l'altopiano del <b>Deccan</b>.</p>
<p><b>Economia</b>: ancora molti lavorano nei campi (riso, tè, cotone, spezie), ma l'India è una potenza dei <b>servizi informatici</b> (Bangalore è chiamata la \"Silicon Valley indiana\"), della farmaceutica e dello spazio (nel 2023 la sonda <b>Chandrayaan-3</b> è arrivata vicino al polo sud della Luna). <b>Bollywood</b>, a Mumbai, produce più film di qualsiasi altro Paese.</p>
<p><b>Problemi</b>: povertà ancora diffusa, città sovraffollate, inquinamento, differenze sociali legate anche al sistema delle <b>caste</b> (abolito dalla Costituzione del 1950, ma ancora presente nella società).</p>`
    },
    {
      type: "text",
      title: "5. Il Giappone",
      html: `<p><b>Capitale</b>: Tokyo. <b>Abitanti</b>: circa 124 milioni. <b>Superficie</b>: circa 378.000 km² (poco più dell'Italia). <b>Moneta</b>: yen.</p>
<p><b>Territorio</b>: un arcipelago di 4 isole principali (<b>Honshū</b>, Hokkaidō, Kyūshū, Shikoku) e migliaia di isole minori. Circa il <b>70%</b> è montuoso: la popolazione si concentra sulle strette pianure costiere. Si trova nella <b>Cintura di fuoco</b> del Pacifico, dove si incontrano quattro placche: ha più di 100 vulcani attivi e frequenti terremoti e <b>tsunami</b> (come quello dell'<b>11 marzo 2011</b>, che danneggiò la centrale nucleare di Fukushima).</p>
<p><b>Economia</b>: senza quasi materie prime, il Giappone è diventato una potenza grazie all'industria ad alta tecnologia (auto, robot, elettronica, videogiochi). L'area di <b>Tokyo</b> è la più grande agglomerazione urbana del mondo, con circa 37 milioni di abitanti.</p>
<p><b>Problemi</b>: il Giappone è il Paese più <b>anziano</b> del mondo: quasi il <b>30%</b> degli abitanti ha più di 65 anni e la popolazione diminuisce.</p>`
    },
    {
      type: "widget",
      title: "Gioco: Cina, India o Giappone?",
      widget: "classify",
      options: {
        groups: ["🇨🇳 Cina", "🇮🇳 India", "🇯🇵 Giappone"],
        items: [["Pechino", 0], ["Fiume Yangtze", 0], ["Deserto del Gobi", 0], ["Fiume Gange", 1], ["Bollywood", 1], ["Altopiano del Deccan", 1], ["Monte Fuji", 2], ["Isola di Honshū", 2], ["Yen", 2], ["Paese più popoloso dal 2023", 1], ["Rupia", 1], ["Diga delle Tre Gole", 0]]
      },
      caption: "Trascina ogni elemento nel Paese giusto."
    },
    {
      type: "example",
      title: "Esempio pratico: confronta con l'Italia",
      html: `<table>
<tr><th></th><th>🇮🇹 Italia</th><th>🇨🇳 Cina</th><th>🇮🇳 India</th><th>🇯🇵 Giappone</th></tr>
<tr><td>Abitanti</td><td>59 milioni</td><td>1,41 miliardi</td><td>1,43 miliardi</td><td>124 milioni</td></tr>
<tr><td>Superficie (km²)</td><td>302.000</td><td>9,6 milioni</td><td>3,3 milioni</td><td>378.000</td></tr>
<tr><td>Densità (ab./km²)</td><td>circa 196</td><td>circa 147</td><td>circa 430</td><td>circa 330</td></tr>
<tr><td>Speranza di vita</td><td>83 anni</td><td>78 anni</td><td>72 anni</td><td>84 anni</td></tr>
</table>
<p>Calcola: la densità è <b>abitanti ÷ superficie</b>. L'India ha più del doppio della densità dell'Italia: in media, su ogni km² vivono circa 430 persone. Eppure la Cina, che ha tanti abitanti, ha una densità media più bassa dell'Italia: perché ha enormi zone vuote (Tibet, deserti).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: una giornata a Tokyo",
      html: `<p>Un ragazzo di 13 anni di Tokyo va a scuola in metropolitana da solo, anche se ci sono milioni di persone. I treni ad alta velocità <b>Shinkansen</b> (dal 1964) hanno un ritardo medio inferiore a un minuto.</p>
<p>A scuola fa le esercitazioni anti-terremoto e alla fine delle lezioni, con i compagni, <b>pulisce l'aula</b> (si chiama <i>o-sōji</i>). A pranzo mangia riso, pesce e verdure: il pesce è molto importante in un Paese circondato dal mare con poca terra da coltivare.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la Cina ha un solo fuso orario?",
      html: `<p>La Cina è larga quasi 5000 km da est a ovest e \"dovrebbe\" avere 5 fusi orari. Invece usa <b>un'unica ora</b>, quella di Pechino. Così nell'estremo ovest, nella regione dello Xinjiang, d'inverno il Sole può sorgere verso le <b>10 del mattino</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… gli scacchi e i numeri vengono dall'India?",
      html: `<p>Le cifre che usiamo (0, 1, 2… 9) si chiamano \"arabe\", ma furono inventate in <b>India</b>, compreso lo <b>zero</b> come numero (il matematico Brahmagupta ne scrisse le regole nel 628). Gli arabi le portarono in Occidente, e in Italia le fece conoscere <b>Leonardo Fibonacci</b> nel 1202. Anche il gioco degli <b>scacchi</b> nacque in India, intorno al VI secolo, con il nome di <i>chaturanga</i>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per conoscere l'Asia",
      intro: "L'Asia è così grande che è facile perdersi: ecco altri modi per orientarti.",
      tabs: [
        {
          label: "🌍 Sul globo",
          html: `<p>Gira il globo e segui la <b>Via della Seta</b>, l'antica rete di strade che collegava la Cina al Mediterraneo (Marco Polo la percorse nel XIII secolo). Oggi la Cina ha lanciato una \"Nuova Via della Seta\" di ferrovie, porti e strade.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 34.3, lon: 108.9, label: "Xi'an", color: "#dc2626" },
              { lat: 39.5, lon: 76.0, label: "Kashgar", color: "#f59e0b" },
              { lat: 39.65, lon: 66.96, label: "Samarcanda", color: "#f59e0b" },
              { lat: 35.7, lon: 51.4, label: "Teheran", color: "#f59e0b" },
              { lat: 41.0, lon: 28.97, label: "Istanbul", color: "#7c3aed" },
              { lat: 45.44, lon: 12.33, label: "Venezia", color: "#16a34a" },
              { lat: 28.6, lon: 77.2, label: "Nuova Delhi", color: "#f97316" },
              { lat: 35.68, lon: 139.69, label: "Tokyo", color: "#ef4444" },
              { lat: 27.99, lon: 86.93, label: "Everest", color: "#64748b" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5], color: "#d97706" }]
          }
        },
        {
          label: "🧠 Trucco: 3 giganti, 3 parole",
          html: `<p>Per ricordare i tre Paesi, associa a ognuno una parola e un'immagine:</p>
<ul>
<li>🇨🇳 <b>Cina = FABBRICA</b>: immagina un'enorme fabbrica lungo un fiume (lo Yangtze) che spedisce container dal porto di Shanghai.</li>
<li>🇮🇳 <b>India = FOLLA</b>: la folla più grande del mondo, che fa il bagno nel Gange e lavora al computer a Bangalore.</li>
<li>🇯🇵 <b>Giappone = TERREMOTO + ROBOT</b>: un arcipelago che trema, abitato da robot e treni velocissimi.</li>
</ul>`
        },
        {
          label: "🧩 Abbina capitale e Paese",
          html: `<p>Le capitali dell'Asia: abbinale al loro Paese.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Pechino", "Cina"],
              ["Nuova Delhi", "India"],
              ["Tokyo", "Giappone"],
              ["Seul", "Corea del Sud"],
              ["Giacarta", "Indonesia"],
              ["Bangkok", "Thailandia"],
              ["Riad", "Arabia Saudita"]
            ]
          }
        },
        {
          label: "📏 Le dimensioni a confronto",
          html: `<p>Se l'Italia fosse un quadratino, quanto sarebbero grandi gli altri Paesi?</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<rect x="20" y="200" width="20" height="20" fill="#16a34a"/>
<text x="30" y="245" font-size="14" text-anchor="middle" fill="#111827">Italia 1</text>
<rect x="70" y="199" width="22" height="22" fill="#ef4444"/>
<text x="81" y="245" font-size="14" text-anchor="middle" fill="#111827">Giappone 1,25</text>
<rect x="160" y="153" width="67" height="67" fill="#f97316"/>
<text x="193" y="245" font-size="14" text-anchor="middle" fill="#111827">India circa 11</text>
<rect x="300" y="107" width="113" height="113" fill="#dc2626"/>
<text x="356" y="245" font-size="14" text-anchor="middle" fill="#111827">Cina circa 32</text>
<text x="300" y="30" font-size="17" text-anchor="middle" font-weight="bold" fill="#111827">Superfici a confronto (area dei quadrati)</text>
<text x="500" y="160" font-size="14" text-anchor="middle" fill="#334155">L'Asia intera</text>
<text x="500" y="180" font-size="14" text-anchor="middle" fill="#334155">≈ 148 Italie!</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'Asia: tocca i nodi e scopri il perché",
      nodes: [
        { id: "placche", label: "Scontro di placche", x: 50, y: 6, color: "#b45309", html: "La placca indiana spinge contro quella euroasiatica.", why: "L'India era un'isola-continente staccata dall'antico Gondwana; si è mossa verso nord a una velocità record (fino a 15 cm all'anno) e circa 50 milioni di anni fa ha urtato l'Asia, sollevando l'Himalaya." },
        { id: "himalaya", label: "Himalaya e Tibet", x: 20, y: 25, color: "#64748b", html: "Il \"tetto del mondo\", con l'Everest (8849 m).", why: "Sulle cime dell'Himalaya si trovano fossili di animali marini: le rocce erano un tempo il fondo di un oceano, la Tetide, sollevato dallo scontro delle placche." },
        { id: "fiumi", label: "Grandi fiumi", x: 50, y: 30, color: "#2563eb", html: "Yangtze, Huang He, Gange, Brahmaputra, Mekong, Indo.", why: "Nascono dai ghiacciai e dalle nevi dell'altopiano tibetano e scendono verso il mare portando acqua e limo fertile." },
        { id: "monsoni", label: "Monsoni", x: 82, y: 25, color: "#0ea5e9", html: "Venti stagionali che portano le piogge estive.", why: "La terra si scalda e si raffredda più velocemente del mare: d'estate sull'Asia si crea una zona di bassa pressione che richiama l'aria umida dall'oceano. L'Himalaya fa da barriera e fa scaricare la pioggia sull'India." },
        { id: "riso", label: "Risaie e popolazione", x: 50, y: 52, color: "#16a34a", html: "Le pianure fluviali sono tra le più popolate della Terra.", why: "Il riso, coltivato in Cina da circa 9000 anni, rende moltissimo per ettaro se c'è molta acqua: per questo nelle pianure dei fiumi monsonici è potuta crescere una popolazione enorme." },
        { id: "cina", label: "Cina", x: 18, y: 75, color: "#dc2626", html: "1,41 miliardi di abitanti, seconda economia mondiale.", why: "Una civiltà unita da oltre 2000 anni (dal primo imperatore Qin Shi Huang, 221 a.C.); dopo il 1978 le riforme di Deng Xiaoping l'hanno trasformata nella \"fabbrica del mondo\"." },
        { id: "india", label: "India", x: 50, y: 78, color: "#f97316", html: "Il Paese più popoloso e la democrazia più grande del mondo.", why: "Indipendente dal 1947, con una Costituzione democratica (1950) scritta da B. R. Ambedkar; la crescita recente si basa sui servizi informatici e su una popolazione giovane." },
        { id: "giappone", label: "Giappone", x: 82, y: 75, color: "#e11d48", html: "Arcipelago montuoso e sismico, potenza tecnologica.", why: "Nell'epoca Meiji (dal 1868) il Giappone si modernizzò rapidamente copiando e migliorando la tecnologia occidentale; dopo la sconfitta del 1945 ricostruì la sua economia puntando sull'industria di qualità." },
        { id: "sfide", label: "Sfide", x: 50, y: 95, color: "#a855f7", html: "Inquinamento, ghiacciai che si sciolgono, invecchiamento, disuguaglianze.", why: "La crescita velocissima ha consumato risorse e prodotto emissioni; l'aumento della speranza di vita e il calo delle nascite fanno invecchiare Cina e Giappone." }
      ],
      edges: [
        ["placche", "himalaya", "solleva l'"],
        ["himalaya", "fiumi", "fa nascere i"],
        ["himalaya", "monsoni", "blocca i"],
        ["fiumi", "riso", "irrigano le"],
        ["monsoni", "riso", "portano acqua alle"],
        ["riso", "cina", "nutre la"],
        ["riso", "india", "nutre l'"],
        ["placche", "giappone", "terremoti e vulcani in"],
        ["cina", "sfide", "affronta"],
        ["giappone", "sfide", "affronta"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'<b>Asia</b> è il continente più grande (44,6 milioni km²) e popolato (4,8 miliardi). Confine con l'Europa: <b>Urali, Caspio, Caucaso</b>.</li>
<li><b>Himalaya</b> con l'<b>Everest</b> (8849 m); grandi fiumi: Yangtze, Huang He, Gange, Mekong.</li>
<li>Tutti i climi; in India e nel Sud-Est domina il <b>monsone</b>.</li>
<li><b>Cina</b>: \"fabbrica del mondo\", seconda economia. <b>India</b>: Paese più popoloso dal 2023, democrazia più grande. <b>Giappone</b>: arcipelago sismico, alta tecnologia, popolazione anziana.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Cina, India, Giappone",
      questions: [
        { type: "mc", q: "Quale Paese è il più popoloso del mondo dal 2023?", options: ["Cina", "India", "Indonesia"], answer: 1, explain: "L'India ha superato la Cina nel 2023 secondo le stime ONU." },
        { type: "text", q: "Qual è la capitale del Giappone?", answer: ["tokyo", "tokio"], explain: "Tokyo." },
        { type: "mc", q: "Perché il Giappone ha molti terremoti?", options: ["Perché è molto piatto", "Perché si trova dove si incontrano più placche, nella Cintura di fuoco", "Perché ha molte fabbriche"], answer: 1, explain: "Sotto il Giappone si incontrano quattro placche tettoniche." }
      ]
    }
  ],
  glossary: [
    { t: "Monsone", d: "Vento stagionale che d'estate soffia dal mare verso la terra (piogge) e d'inverno al contrario (secco)." },
    { t: "Altopiano", d: "Territorio pianeggiante situato ad alta quota, come il Tibet." },
    { t: "Subcontinente indiano", d: "La grande penisola dell'Asia meridionale (India, Pakistan, Bangladesh…), separata dal resto dell'Asia dall'Himalaya." },
    { t: "Cintura di fuoco", d: "Fascia intorno all'Oceano Pacifico con molti vulcani e terremoti." },
    { t: "Tsunami", d: "Onda marina gigantesca provocata da un terremoto o da un'eruzione sottomarina." },
    { t: "Densità di popolazione", d: "Numero di abitanti per km²: abitanti ÷ superficie." },
    { t: "Politica del figlio unico", d: "Legge cinese (1980–2015) che limitava a uno il numero di figli per coppia nella maggior parte dei casi." },
    { t: "Caste", d: "Antica divisione ereditaria della società indiana, abolita per legge ma ancora presente." },
    { t: "Via della Seta", d: "Antica rete di rotte commerciali tra Cina, Asia centrale e Mediterraneo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Circa quante persone su 10 nel mondo vivono in Asia?", options: ["2", "4", "6"], answer: 2, explain: "Circa il 59% dell'umanità." },
      { type: "text", q: "Come si chiama la catena montuosa con la vetta più alta del mondo?", answer: ["himalaya", "l'himalaya", "himalaia"], explain: "L'Himalaya, con l'Everest." },
      { type: "mc", q: "Qual è il fiume più lungo dell'Asia?", options: ["Gange", "Yangtze", "Mekong"], answer: 1, explain: "Lo Yangtze, o Fiume Azzurro, circa 6300 km." },
      { type: "tf", q: "Il Giappone è un arcipelago con 4 isole principali.", answer: true, explain: "Honshū, Hokkaidō, Kyūshū e Shikoku." },
      { type: "mc", q: "Che cosa portano i monsoni estivi in India?", options: ["Neve", "Piogge abbondanti", "Sabbia del deserto"], answer: 1, explain: "Venti umidi dall'Oceano Indiano." },
      { type: "mc", q: "Perché la Cina è chiamata \"fabbrica del mondo\"?", options: ["Perché produce ed esporta enormi quantità di merci", "Perché ha molte miniere d'oro", "Perché è il Paese più piccolo"], answer: 0, explain: "È il primo esportatore mondiale di merci." },
      { type: "num", q: "Un Paese ha 120 milioni di abitanti e 400.000 km². Qual è la densità (ab./km²)?", answer: 300, tol: 0, unit: "ab./km²", explain: "120.000.000 ÷ 400.000 = 300 abitanti per km²." },
      { type: "text", q: "Qual è la capitale dell'India?", answer: ["nuova delhi", "new delhi", "delhi"], explain: "Nuova Delhi." },
      { type: "tf", q: "Il Giappone è uno dei Paesi con la popolazione più giovane del mondo.", answer: false, explain: "È il Paese più anziano: quasi il 30% ha più di 65 anni." },
      { type: "order", q: "Ordina dal più popoloso al meno popoloso.", items: ["India", "Cina", "Giappone", "Italia"], explain: "1,43 miliardi → 1,41 miliardi → 124 milioni → 59 milioni." },
      { type: "mc", q: "In quale Paese si trova il lago Bajkal, il più profondo del mondo?", options: ["Cina", "Mongolia", "Russia"], answer: 2, explain: "In Siberia, Russia." },
      { type: "mc", q: "Quale invenzione matematica è nata in India?", options: ["Lo zero come numero", "I numeri romani", "Il pi greco"], answer: 0, explain: "Brahmagupta ne descrisse le regole nel 628." }
    ]
  }
});
