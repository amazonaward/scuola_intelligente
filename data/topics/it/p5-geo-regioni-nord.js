TOPIC('it', {
  id: "p5-geo-regioni-nord",
  title: "Le regioni dell'Italia settentrionale",
  intro: "L'Italia del Nord va dalle vette delle <b>Alpi</b> alla grande <b>Pianura Padana</b> e si affaccia sul Mar Ligure e sul Mar Adriatico. Comprende <b>8 regioni</b>, dove vive quasi metà degli Italiani. Scopriamo i loro <b>paesaggi</b>, il <b>clima</b>, le <b>città</b> e il <b>lavoro</b> delle persone.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Le 8 regioni del Nord",
      html: `<p>Secondo l'ISTAT (l'Istituto nazionale di statistica) l'Italia settentrionale è formata da <b>8 regioni</b>: 4 a <b>Nord-Ovest</b> e 4 a <b>Nord-Est</b>.</p>
<table>
<tr><th>Regione</th><th>Capoluogo</th><th>Superficie</th><th>Abitanti (circa)</th></tr>
<tr><td>Valle d'Aosta *</td><td>Aosta</td><td>3.261 km²</td><td>123.000</td></tr>
<tr><td>Piemonte</td><td>Torino</td><td>25.387 km²</td><td>4,25 milioni</td></tr>
<tr><td>Liguria</td><td>Genova</td><td>5.416 km²</td><td>1,5 milioni</td></tr>
<tr><td>Lombardia</td><td>Milano</td><td>23.864 km²</td><td>10 milioni</td></tr>
<tr><td>Trentino-Alto Adige *</td><td>Trento</td><td>13.606 km²</td><td>1,08 milioni</td></tr>
<tr><td>Veneto</td><td>Venezia</td><td>18.345 km²</td><td>4,85 milioni</td></tr>
<tr><td>Friuli-Venezia Giulia *</td><td>Trieste</td><td>7.932 km²</td><td>1,19 milioni</td></tr>
<tr><td>Emilia-Romagna</td><td>Bologna</td><td>22.453 km²</td><td>4,45 milioni</td></tr>
</table>
<p>* Le regioni con l'asterisco sono a <b>statuto speciale</b>: hanno più autonomia perché ospitano minoranze linguistiche (francese in Valle d'Aosta; tedesco e ladino in Alto Adige; friulano e sloveno in Friuli-Venezia Giulia) o per ragioni storiche. Il Trentino-Alto Adige è diviso in due <b>Province autonome</b>, Trento e Bolzano.</p>
<p>La regione <b>più popolosa d'Italia</b> è la Lombardia; la <b>più piccola</b> e meno popolata è la Valle d'Aosta.</p>`
    },
    {
      type: "svg",
      title: "La carta delle regioni del Nord (schema)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#bfdbfe"/>
<path d="M30 70 L75 50 L95 80 L60 100 Z" fill="#fda4af" stroke="#ffffff" stroke-width="3"/>
<path d="M60 100 L95 80 L150 90 L170 160 L140 220 L80 230 L45 170 Z" fill="#fdba74" stroke="#ffffff" stroke-width="3"/>
<path d="M80 230 L140 220 L200 225 L250 250 L240 265 L190 245 L130 245 L90 260 Z" fill="#86efac" stroke="#ffffff" stroke-width="3"/>
<path d="M150 90 L200 40 L260 50 L280 110 L270 175 L200 180 L170 160 Z" fill="#fde047" stroke="#ffffff" stroke-width="3"/>
<path d="M260 50 L300 20 L370 30 L360 90 L300 100 L280 110 Z" fill="#a5b4fc" stroke="#ffffff" stroke-width="3"/>
<path d="M280 110 L300 100 L360 90 L400 110 L420 170 L380 200 L330 190 L270 175 Z" fill="#67e8f9" stroke="#ffffff" stroke-width="3"/>
<path d="M360 90 L370 30 L440 50 L470 100 L460 160 L420 170 L400 110 Z" fill="#c4b5fd" stroke="#ffffff" stroke-width="3"/>
<path d="M170 160 L200 180 L270 175 L330 190 L380 200 L410 240 L360 260 L250 250 L200 225 L140 220 Z" fill="#f9a8d4" stroke="#ffffff" stroke-width="3"/>
<text x="62" y="80" font-size="12" text-anchor="middle" fill="#111827" font-weight="bold">VdA</text>
<text x="105" y="165" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">Piemonte</text>
<text x="165" y="245" font-size="13" text-anchor="middle" fill="#111827" font-weight="bold">Liguria</text>
<text x="220" y="125" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">Lombardia</text>
<text x="318" y="62" font-size="12" text-anchor="middle" fill="#111827" font-weight="bold">Trentino-A.A.</text>
<text x="345" y="150" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">Veneto</text>
<text x="425" y="100" font-size="13" text-anchor="middle" fill="#111827" font-weight="bold">Friuli-V.G.</text>
<text x="280" y="225" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">Emilia-Romagna</text>
<text x="130" y="300" font-size="16" fill="#1e3a8a" font-style="italic">Mar Ligure</text>
<text x="470" y="230" font-size="16" fill="#1e3a8a" font-style="italic">Mar Adriatico</text>
<text x="530" y="40" font-size="14" text-anchor="middle" fill="#334155">ALPI ⛰️</text>
</svg>`,
      caption: "Schema semplificato, non in scala. Il Nord confina con Francia, Svizzera, Austria e Slovenia."
    },
    {
      type: "text",
      title: "2. Il paesaggio: Alpi, pianura e Appennino",
      html: `<p><b>Le Alpi</b> formano un grande arco a nord. Qui ci sono le montagne più alte d'Europa occidentale:</p>
<ul>
<li>il <b>Monte Bianco</b> (circa 4.805 m), tra Valle d'Aosta e Francia, la vetta più alta d'Italia;</li>
<li>il <b>Monte Rosa</b> (4.634 m) e il <b>Cervino</b> (4.478 m);</li>
<li>il <b>Gran Paradiso</b> (4.061 m), la montagna più alta tutta in territorio italiano, con il primo parco nazionale d'Italia (1922);</li>
<li>le <b>Dolomiti</b>, montagne di roccia chiara che al tramonto diventano rosa (l'«enrosadira»), patrimonio UNESCO dal 2009.</li>
</ul>
<p>Sulle Alpi ci sono <b>ghiacciai</b> (purtroppo in forte ritiro per il riscaldamento globale), valli profonde scavate dai ghiacciai e passi che collegano l'Italia all'Europa (Brennero, Sempione, Frejus, Monte Bianco con il traforo).</p>
<p><b>La Pianura Padana</b> è la pianura più grande d'Italia (circa 46.000 km²). È stata formata dai detriti portati dai fiumi. La attraversa il <b>Po</b>, il fiume più lungo d'Italia (<b>652 km</b>): nasce dal <b>Monviso</b> in Piemonte e sfocia nell'Adriatico con un grande <b>delta</b> tra Veneto ed Emilia-Romagna. Altri fiumi importanti: <b>Adige</b> (il secondo d'Italia, 410 km), Ticino, Adda, Piave, Tagliamento.</p>
<p>Ai piedi delle Alpi ci sono i grandi <b>laghi prealpini</b>, nati dai ghiacciai: <b>Garda</b> (il più grande d'Italia, circa 370 km²), <b>Maggiore</b>, <b>Como</b> (profondo oltre 400 m), Iseo.</p>
<p>A sud la pianura è chiusa dall'<b>Appennino settentrionale</b> (ligure e tosco-emiliano). La <b>Liguria</b> è una stretta striscia tra monti e mare, con coste alte e rocciose.</p>`
    },
    {
      type: "3d",
      title: "Il paesaggio del Nord in 3D",
      scene: "terrain",
      caption: "Ruota il paesaggio e tocca ogni parte: per ognuna trovi un esempio nelle regioni del Nord.",
      options: {
        features: {
          peak: { label: "Vetta", html: "Il <b>Monte Bianco</b> (circa 4.805 m), in Valle d'Aosta, è la vetta più alta d'Italia e delle Alpi." },
          mountain: { label: "Montagna", html: "Le <b>Alpi</b> formano un arco di circa 1.200 km da Liguria a Friuli; le <b>Dolomiti</b> sono in Trentino-Alto Adige, Veneto e Friuli." },
          glacier: { label: "Ghiacciaio", html: "Il <b>ghiacciaio dei Forni</b> (Lombardia) e quello della <b>Marmolada</b> (Dolomiti) si stanno ritirando rapidamente per il riscaldamento globale." },
          valley: { label: "Valle", html: "Le valli alpine, come la <b>Valtellina</b> o la <b>Val d'Aosta</b>, sono state scavate dai ghiacciai: hanno la forma a U." },
          source: { label: "Sorgente", html: "Il <b>Po</b> nasce a Pian del Re, ai piedi del <b>Monviso</b> (Piemonte), a oltre 2.000 m di altezza." },
          river: { label: "Fiume", html: "Il <b>Po</b> (652 km) è il fiume più lungo d'Italia; l'<b>Adige</b> è il secondo (410 km)." },
          lake: { label: "Lago", html: "Il <b>Lago di Garda</b>, tra Lombardia, Veneto e Trentino, è il più grande d'Italia (circa 370 km²)." },
          hill: { label: "Collina", html: "Le <b>Langhe</b> e il <b>Monferrato</b> in Piemonte e le colline del <b>Prosecco</b> in Veneto sono famose per i vigneti (patrimonio UNESCO)." },
          plain: { label: "Pianura", html: "La <b>Pianura Padana</b> è la più grande d'Italia: terra fertile, tante città e industrie." },
          delta: { label: "Delta", html: "Il <b>delta del Po</b>, tra Veneto ed Emilia-Romagna, è un parco con lagune, canneti e uccelli come i fenicotteri." },
          lagoon: { label: "Laguna", html: "La <b>Laguna di Venezia</b>: la città è costruita su 118 isolette collegate da oltre 400 ponti." },
          gulf: { label: "Golfo", html: "Il <b>Golfo di Genova</b> e il <b>Golfo di Trieste</b> ospitano due dei porti più importanti d'Italia." },
          coast: { label: "Costa", html: "In <b>Liguria</b> la costa è alta e rocciosa (Cinque Terre); in <b>Romagna</b> è bassa e sabbiosa, con lunghe spiagge." }
        }
      }
    },
    {
      type: "text",
      title: "3. Il clima",
      html: `<ul>
<li><b>Clima alpino</b> sulle montagne: inverni lunghi e nevosi, estati fresche.</li>
<li><b>Clima continentale</b> nella Pianura Padana: inverni freddi e umidi con molta <b>nebbia</b>, estati calde e afose. Le Alpi bloccano i venti del Nord, l'Appennino quelli del mare: l'aria ristagna, e per questo spesso c'è anche <b>inquinamento</b>.</li>
<li><b>Clima mediterraneo</b> in Liguria e intorno ai grandi laghi: inverni miti, tanto che ci crescono ulivi, limoni e palme. La Liguria è riparata dai monti alle sue spalle.</li>
<li>Lungo l'<b>Adriatico</b> il clima è più fresco d'inverno per il vento di <b>bora</b>, che a Trieste può superare i 150 km/h!</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: regioni e paesaggi",
      questions: [
        { type: "mc", q: "Qual è il capoluogo del Veneto?", options: ["Verona", "Venezia", "Padova"], answer: 1, explain: "Venezia è il capoluogo; Verona e Padova sono capoluoghi di provincia." },
        { type: "tf", q: "Il Po è il fiume più lungo d'Italia.", answer: true, explain: "Il Po è lungo 652 km e nasce dal Monviso." },
        { type: "mc", q: "Qual è il lago più grande d'Italia?", options: ["Lago Maggiore", "Lago di Como", "Lago di Garda"], answer: 2, explain: "Il Garda, circa 370 km²." }
      ]
    },
    {
      type: "widget",
      title: "Abbina la regione al suo capoluogo",
      widget: "match",
      options: {
        pairs: [
          ["Valle d'Aosta", "Aosta"],
          ["Piemonte", "Torino"],
          ["Liguria", "Genova"],
          ["Lombardia", "Milano"],
          ["Trentino-Alto Adige", "Trento"],
          ["Veneto", "Venezia"],
          ["Friuli-Venezia Giulia", "Trieste"],
          ["Emilia-Romagna", "Bologna"]
        ]
      },
      caption: "Il capoluogo di regione è la città dove hanno sede il Consiglio e la Giunta regionale."
    },
    {
      type: "text",
      title: "4. L'economia: come si lavora al Nord",
      html: `<p>Il Nord è la parte d'Italia con più <b>industrie</b> e con il reddito medio più alto.</p>
<p><b>Industria.</b> Già alla fine dell'Ottocento nacque il «<b>triangolo industriale</b>» <b>Milano–Torino–Genova</b>: a Torino la FIAT (1899) produceva automobili, a Genova c'erano porto e acciaierie, a Milano industrie di ogni tipo. Dagli anni '70 si sono sviluppate anche tante <b>piccole e medie imprese</b> nel <b>Nord-Est</b> (Veneto, Friuli, Emilia-Romagna), organizzate in <b>distretti</b>: zone dove molte aziende fanno lo stesso prodotto (occhiali nel Bellunese, sedie in Friuli, piastrelle a Sassuolo, scarpe sul Brenta). L'Emilia è chiamata «<b>Motor Valley</b>»: Ferrari, Lamborghini, Maserati, Ducati.</p>
<p><b>Agricoltura.</b> La Pianura Padana è molto fertile e irrigata da canali: si coltivano mais, grano, frutta, verdura e soprattutto <b>riso</b> (Vercelli, Novara, Pavia: l'Italia è il primo produttore di riso d'Europa). Ci sono grandi allevamenti di mucche e maiali da cui nascono <b>Parmigiano Reggiano</b>, <b>Grana Padano</b>, Gorgonzola, prosciutto di Parma e di San Daniele. In Trentino-Alto Adige si coltivano tantissime <b>mele</b>; sulle colline i <b>vigneti</b> danno vini famosi (Barolo, Prosecco, Amarone).</p>
<p><b>Servizi e commercio.</b> <b>Milano</b> è la capitale economica d'Italia: c'è la <b>Borsa</b>, le sedi di banche e aziende, la moda e il design, le fiere. I porti di <b>Genova</b>, <b>Trieste</b> e <b>Venezia</b> collegano l'Italia al mondo.</p>
<p><b>Turismo.</b> Venezia, le Dolomiti, i laghi, le Cinque Terre, la Riviera romagnola, città d'arte come Verona, Bologna, Mantova, Ravenna attirano milioni di visitatori. Nel febbraio <b>2026</b> si sono svolte le Olimpiadi invernali di <b>Milano-Cortina</b>.</p>`
    },
    {
      type: "widget",
      title: "Che cosa si produce e dove?",
      widget: "classify",
      options: {
        groups: ["Agricoltura e allevamento", "Industria", "Servizi e turismo"],
        items: [
          ["🍚 Risaie di Vercelli e Novara", 0],
          ["🍎 Mele della Val di Non", 0],
          ["🧀 Parmigiano Reggiano", 0],
          ["🚗 Automobili a Torino", 1],
          ["🏎️ Motor Valley emiliana", 1],
          ["👓 Occhiali del Bellunese", 1],
          ["🏦 Borsa di Milano", 2],
          ["🚤 Gondole e musei a Venezia", 2],
          ["⛷️ Piste da sci delle Dolomiti", 2]
        ]
      },
      caption: "Trascina ogni attività nel settore giusto (primario, secondario, terziario)."
    },
    {
      type: "example",
      title: "Esempio pratico: calcolare la densità di popolazione",
      html: `<p>La <b>densità</b> dice quante persone vivono, in media, in ogni km². Si calcola così:</p>
<p style="text-align:center;font-size:1.2em"><b>densità = abitanti ÷ superficie</b></p>
<ul>
<li><b>Lombardia</b>: 10.000.000 ÷ 23.864 km² ≈ <b>419 abitanti per km²</b>;</li>
<li><b>Valle d'Aosta</b>: 123.000 ÷ 3.261 km² ≈ <b>38 abitanti per km²</b>.</li>
</ul>
<p>In Lombardia, in media, vivono più di <b>10 volte</b> più persone per km² che in Valle d'Aosta! Perché? La Lombardia ha una grande pianura con città e industrie; la Valle d'Aosta è quasi tutta montagna.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: un viaggio da Trieste ad Aosta",
      html: `<p>Immagina di attraversare il Nord in treno e in auto, da est a ovest:</p>
<ol>
<li><b>Trieste</b>: porto sull'Adriatico, caffè storici, si sente parlare anche sloveno;</li>
<li><b>Venezia</b>: si arriva in treno sul ponte della laguna, poi solo a piedi o in barca;</li>
<li><b>Verona</b>: l'Arena romana e il vicino Lago di Garda;</li>
<li><b>Milano</b>: il Duomo, la Borsa, le fiere, i grattacieli;</li>
<li><b>Torino</b>: prima capitale d'Italia (1861), il Museo Egizio, le fabbriche di auto;</li>
<li><b>Aosta</b>: resti romani, castelli e, sullo sfondo, il Monte Bianco. I cartelli sono in italiano e in francese.</li>
</ol>
<p>In circa 600 km si passa dal mare alla montagna più alta d'Europa occidentale!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Venezia e l'acqua alta",
      html: `<p>A Venezia, quando c'è alta marea e soffia lo scirocco, l'acqua invade le strade: è l'<b>acqua alta</b>. Per difendere la città è stato costruito il <b>MOSE</b>: 78 grandi paratoie gialle sul fondo delle tre bocche di porto della laguna, che si alzano quando la marea supera circa 110 cm. È entrato in funzione nel <b>2020</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Ötzi, l'uomo venuto dal ghiaccio",
      html: `<p>Nel <b>1991</b> due escursionisti trovarono sul ghiacciaio del Similaun, in Alto Adige a oltre 3.200 m, il corpo di un uomo vissuto circa <b>5.300 anni fa</b>: <b>Ötzi</b>. Il ghiaccio lo aveva conservato con vestiti, arco, frecce e un'ascia di rame. Oggi si può vedere nel Museo archeologico di <b>Bolzano</b>, a una temperatura di −6 °C.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Le regioni non sono solo una lista di nomi: prova a guardarle da altri punti di vista.",
      tabs: [
        {
          label: "🏠 La casa a tre piani",
          html: `<p>Immagina il Nord come una casa a <b>tre piani</b>:</p>
<ul>
<li><b>il tetto</b>: le <b>Alpi</b>, con neve, ghiacciai, boschi, pascoli e turismo invernale;</li>
<li><b>il piano di mezzo</b>: colline e laghi prealpini, con vigneti, ville e clima mite;</li>
<li><b>il piano terra</b>: la grande <b>Pianura Padana</b>, piena di campi, città, autostrade e fabbriche;</li>
<li><b>le finestre sul mare</b>: la Liguria a ovest, l'Adriatico a est (Veneto, Friuli, Romagna).</li>
</ul>
<p>Il <b>Po</b> è come il corridoio che attraversa tutta la casa da ovest a est e raccoglie l'acqua che scende dal tetto!</p>`
        },
        {
          label: "🇩🇪 Le regioni negli altri Paesi",
          html: `<p>Anche altri Paesi sono divisi in parti con un loro governo:</p>
<ul>
<li>la <b>Germania</b> ha 16 <b>Länder</b> (come la Baviera), che hanno molti poteri: è uno Stato <b>federale</b>;</li>
<li>la <b>Francia</b> ha 13 <b>regioni</b> nella parte europea, ma molte decisioni si prendono a Parigi;</li>
<li>gli <b>Stati Uniti</b> hanno 50 <b>Stati</b>, ognuno con le sue leggi;</li>
<li>la <b>Svizzera</b>, nostra vicina, ha 26 <b>cantoni</b>, e si parlano 4 lingue (tedesco, francese, italiano, romancio).</li>
</ul>
<p>L'Italia ha <b>20 regioni</b>: 15 a statuto ordinario e 5 a statuto speciale. Sono previste dalla <b>Costituzione</b> (1948); quelle ordinarie sono nate davvero nel <b>1970</b>.</p>`
        },
        {
          label: "🌍 Sul globo",
          html: `<p>Gira il globo e trova i capoluoghi del Nord: nota come sono vicini alla Francia, alla Svizzera, all'Austria e alla Slovenia.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 45.74, lon: 7.32, label: "Aosta", color: "#e11d48" },
              { lat: 45.07, lon: 7.69, label: "Torino", color: "#f97316" },
              { lat: 44.41, lon: 8.93, label: "Genova", color: "#16a34a" },
              { lat: 45.46, lon: 9.19, label: "Milano", color: "#eab308" },
              { lat: 46.07, lon: 11.12, label: "Trento", color: "#6366f1" },
              { lat: 45.44, lon: 12.32, label: "Venezia", color: "#0891b2" },
              { lat: 45.65, lon: 13.78, label: "Trieste", color: "#7c3aed" },
              { lat: 44.49, lon: 11.34, label: "Bologna", color: "#db2777" }
            ]
          }
        },
        {
          label: "🃏 Carte da ripasso",
          html: `<p>Gira le carte: davanti un indizio, dietro la risposta.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🏔️ La vetta più alta d'Italia", back: "Monte Bianco, circa 4.805 m (Valle d'Aosta)" },
              { front: "🌊 Il fiume più lungo", back: "Po, 652 km" },
              { front: "💧 Il lago più grande", back: "Garda, circa 370 km²" },
              { front: "👥 La regione più popolosa", back: "Lombardia, circa 10 milioni" },
              { front: "📐 La regione più piccola", back: "Valle d'Aosta, 3.261 km²" },
              { front: "🏭 Triangolo industriale", back: "Milano – Torino – Genova" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché il Nord è fatto così?",
      nodes: [
        { id: "alpi", label: "Alpi", x: 50, y: 6, color: "#64748b", html: "Grande catena montuosa a nord.", why: "Le Alpi sono nate dallo scontro tra la placca africana e quella europea, iniziato circa 65 milioni di anni fa e ancora in corso: per questo sono così alte e giovani." },
        { id: "ghiacciai", label: "Ghiacciai e laghi", x: 18, y: 26, color: "#0ea5e9", html: "Valli a U e grandi laghi prealpini.", why: "Durante le glaciazioni (l'ultima finita circa 12.000 anni fa) enormi lingue di ghiaccio scesero dalle Alpi, scavarono le valli e lasciarono conche poi riempite d'acqua: Garda, Como, Maggiore." },
        { id: "po", label: "Il Po e i fiumi", x: 82, y: 26, color: "#2563eb", html: "Fiumi alpini e appenninici che scendono verso l'Adriatico.", why: "La pioggia e lo scioglimento di neve e ghiacci alimentano fiumi ricchi d'acqua tutto l'anno." },
        { id: "pianura", label: "Pianura Padana", x: 50, y: 42, color: "#65a30d", html: "La pianura più grande d'Italia.", why: "Un tempo era un golfo del mare Adriatico: in milioni di anni i fiumi l'hanno riempito di sabbia, ghiaia e limo. È una <b>pianura alluvionale</b>." },
        { id: "agricoltura", label: "Agricoltura e allevamento", x: 18, y: 62, color: "#16a34a", html: "Riso, mais, frutta, latte, formaggi.", why: "Terreni fertili e tanta acqua per irrigare; già nel Medioevo i monaci cistercensi scavarono canali e marcite (prati sempre verdi anche d'inverno)." },
        { id: "industria", label: "Industria", x: 50, y: 66, color: "#dc2626", html: "Triangolo industriale e distretti del Nord-Est.", why: "Nell'Ottocento c'erano l'energia idroelettrica delle Alpi («carbone bianco»), i capitali, le ferrovie e la vicinanza ai mercati europei." },
        { id: "citta", label: "Città e popolazione", x: 82, y: 62, color: "#eab308", html: "Quasi metà degli Italiani vive al Nord.", why: "Il lavoro nelle industrie attirò, soprattutto negli anni '50 e '60, milioni di persone anche dal Sud (migrazione interna)." },
        { id: "clima", label: "Clima vario", x: 25, y: 88, color: "#7c3aed", html: "Alpino, continentale, mediterraneo.", why: "Le montagne bloccano i venti e il mare mitiga le temperature: per questo in pochi km si passa dalla neve alle palme della Liguria." },
        { id: "turismo", label: "Turismo e servizi", x: 72, y: 88, color: "#db2777", html: "Venezia, Dolomiti, laghi, Milano.", why: "Paesaggi diversissimi e città d'arte; Milano è il centro della finanza perché qui si concentrano le aziende." }
      ],
      edges: [
        ["alpi", "ghiacciai", "ospitano"],
        ["alpi", "po", "alimentano"],
        ["po", "pianura", "ha formato"],
        ["ghiacciai", "clima", "laghi addolciscono"],
        ["pianura", "agricoltura", "fertile per"],
        ["pianura", "industria", "spazio e trasporti"],
        ["alpi", "industria", "energia idroelettrica"],
        ["industria", "citta", "attira lavoratori"],
        ["citta", "turismo", "servizi"],
        ["alpi", "turismo", "sci e montagna"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il Nord ha <b>8 regioni</b>: Valle d'Aosta, Piemonte, Liguria, Lombardia, Trentino-Alto Adige, Veneto, Friuli-Venezia Giulia, Emilia-Romagna.</li>
<li>Tre sono a <b>statuto speciale</b>: Valle d'Aosta, Trentino-Alto Adige, Friuli-Venezia Giulia.</li>
<li>Paesaggio: <b>Alpi</b> (Monte Bianco), <b>Pianura Padana</b> attraversata dal <b>Po</b>, <b>laghi prealpini</b> (Garda), Appennino settentrionale.</li>
<li>Economia: <b>industria</b> (triangolo Milano–Torino–Genova, distretti del Nord-Est), agricoltura e allevamento intensivi, servizi, turismo.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: clima ed economia",
      questions: [
        { type: "mc", q: "Che clima c'è nella Pianura Padana?", options: ["Mediterraneo", "Continentale, con nebbia d'inverno", "Desertico"], answer: 1, explain: "Inverni freddi e nebbiosi, estati calde e afose." },
        { type: "mc", q: "Quali città formavano il «triangolo industriale»?", options: ["Milano, Torino, Genova", "Venezia, Trieste, Bologna", "Aosta, Trento, Bolzano"], answer: 0, explain: "Il triangolo industriale nacque tra Ottocento e Novecento." },
        { type: "tf", q: "La Liguria ha un clima mite perché è riparata dai monti e vicina al mare.", answer: true, explain: "Alpi e Appennino la proteggono dai venti freddi del Nord." }
      ]
    }
  ],
  glossary: [
    { t: "Regione", d: "Ente territoriale con propri organi di governo; in Italia sono 20." },
    { t: "Capoluogo di regione", d: "Città dove hanno sede gli organi di governo della regione." },
    { t: "Statuto speciale", d: "Forma di autonomia più ampia data a 5 regioni italiane." },
    { t: "Pianura alluvionale", d: "Pianura formata dai detriti portati dai fiumi." },
    { t: "Delta", d: "Foce di un fiume divisa in più rami, a forma di triangolo." },
    { t: "Laguna", d: "Specchio d'acqua salata poco profondo separato dal mare da strisce di terra." },
    { t: "Distretto industriale", d: "Zona dove molte piccole e medie imprese producono lo stesso tipo di prodotto." },
    { t: "Densità di popolazione", d: "Numero medio di abitanti per km²." },
    { t: "Bora", d: "Vento freddo e fortissimo che soffia da nord-est su Trieste e sull'Adriatico." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quante sono le regioni dell'Italia settentrionale?", answer: 8, tol: 0, explain: "VdA, Piemonte, Liguria, Lombardia, Trentino-A.A., Veneto, Friuli-V.G., Emilia-Romagna." },
      { type: "mc", q: "Qual è la regione più popolosa d'Italia?", options: ["Piemonte", "Lombardia", "Veneto"], answer: 1, explain: "La Lombardia ha circa 10 milioni di abitanti." },
      { type: "text", q: "Qual è il capoluogo dell'Emilia-Romagna?", answer: ["bologna"], explain: "Bologna." },
      { type: "mc", q: "Quale di queste regioni del Nord NON è a statuto speciale?", options: ["Valle d'Aosta", "Friuli-Venezia Giulia", "Lombardia"], answer: 2, explain: "La Lombardia è a statuto ordinario." },
      { type: "mc", q: "Da quale montagna nasce il Po?", options: ["Monte Bianco", "Monviso", "Cervino"], answer: 1, explain: "Il Po nasce a Pian del Re, ai piedi del Monviso." },
      { type: "tf", q: "I laghi prealpini sono nati grazie all'azione dei ghiacciai.", answer: true, explain: "I ghiacciai scavarono conche poi riempite d'acqua." },
      { type: "num", q: "Quanto è lungo il Po? (in km)", answer: 652, tol: 5, unit: "km", explain: "Il Po è lungo 652 km." },
      { type: "mc", q: "Dove si trova la Laguna più famosa d'Italia, con una città costruita sull'acqua?", options: ["In Veneto", "In Liguria", "In Piemonte"], answer: 0, explain: "La Laguna di Venezia, in Veneto." },
      { type: "order", q: "Metti i capoluoghi in ordine da ovest a est.", items: ["Aosta", "Torino", "Milano", "Venezia", "Trieste"], explain: "Da ovest (Aosta) a est (Trieste), seguendo la longitudine." },
      { type: "mc", q: "Perché nella Pianura Padana c'è spesso inquinamento dell'aria?", options: ["Perché ci sono vulcani", "Perché le montagne intorno bloccano i venti e l'aria ristagna", "Perché piove troppo"], answer: 1, explain: "Alpi e Appennino chiudono la pianura: con poco vento l'aria non si rinnova." },
      { type: "num", q: "Calcola la densità della Valle d'Aosta: 123.000 abitanti su 3.261 km² (arrotonda all'unità).", answer: 38, tol: 1, unit: "ab/km²", explain: "123.000 ÷ 3.261 ≈ 37,7, cioè circa 38 abitanti per km²." },
      { type: "text", q: "Come si chiama il vento fortissimo che soffia su Trieste?", answer: ["bora", "la bora"], explain: "La bora, da nord-est." }
    ]
  }
});
