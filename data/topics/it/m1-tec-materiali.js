TOPIC('it', {
  id: `m1-tec-materiali`,
  title: `I materiali`,
  intro: `Il banco è di legno e metallo, il quaderno di carta, la borraccia di alluminio o di plastica. Ogni oggetto è fatto di un <b>materiale</b> scelto per le sue <b>proprietà</b>. In questa lezione scopriamo da dove vengono i materiali, come si classificano, come si lavorano <b>legno, carta, metalli e plastiche</b>, e perché il <b>riciclo</b> è così importante. 🪵📄🔩♻️`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Materie prime, materiali, prodotti`,
      html: `<p>Ogni oggetto fa un lungo viaggio:</p>
<ol>
<li><b>Materia prima</b>: ciò che si prende dalla natura (tronco d'albero, minerale di ferro, petrolio, sabbia).</li>
<li><b>Materiale</b> (o semilavorato): la materia prima trasformata e pronta per essere lavorata (tavole di legno, lamiere d'acciaio, granuli di plastica, vetro in lastre).</li>
<li><b>Prodotto finito</b>: l'oggetto che usiamo (sedia, pentola, bottiglia, finestra).</li>
</ol>
<p>Secondo l'<b>origine</b> le materie prime sono:</p>
<ul>
<li><b>vegetali</b>: legno, cotone, lino, sughero, gomma naturale;</li>
<li><b>animali</b>: lana, seta, cuoio;</li>
<li><b>minerali</b>: metalli, sabbia (per il vetro), argilla (per la ceramica), pietre;</li>
<li><b>fossili</b>: petrolio, carbone, gas naturale (da cui si ricavano plastiche e fibre sintetiche).</li>
</ul>
<p>Alcune sono <b>rinnovabili</b> (il legno ricresce, se si ripiantano gli alberi), altre <b>non rinnovabili</b> (petrolio e minerali si esauriscono).</p>`
    },
    {
      type: `text`, title: `2. Le proprietà dei materiali`,
      html: `<p>Per scegliere il materiale giusto bisogna conoscere le sue <b>proprietà</b>:</p>
<table>
<tr><th>Tipo</th><th>Proprietà</th><th>Che cosa significa</th></tr>
<tr><td rowspan="3"><b>Fisiche</b></td><td>Densità</td><td>quanto "pesa" a parità di volume (il ferro più del legno)</td></tr>
<tr><td>Conducibilità termica ed elettrica</td><td>se lascia passare calore ed elettricità (i metalli sì, legno e plastica poco: sono <b>isolanti</b>)</td></tr>
<tr><td>Punto di fusione</td><td>temperatura a cui diventa liquido</td></tr>
<tr><td rowspan="3"><b>Meccaniche</b></td><td>Durezza</td><td>resistenza a essere scalfito o inciso</td></tr>
<tr><td>Elasticità</td><td>capacità di tornare alla forma iniziale (molla)</td></tr>
<tr><td>Resistenza / tenacità</td><td>sopportare forze senza rompersi; il contrario della <b>fragilità</b> (vetro)</td></tr>
<tr><td rowspan="3"><b>Tecnologiche</b></td><td>Malleabilità</td><td>si può ridurre in lamine sottili (alluminio da cucina)</td></tr>
<tr><td>Duttilità</td><td>si può tirare in fili (fili di rame)</td></tr>
<tr><td>Fusibilità e lavorabilità</td><td>si può fondere in stampi, tagliare, forare</td></tr>
</table>`
    },
    {
      type: `example`, title: `Esempio pratico: perché la pentola è fatta così?`,
      html: `<p>Una pentola ha il <b>fondo di acciaio o alluminio</b> e il <b>manico di plastica o legno</b>. Perché?</p>
<ul>
<li>Il metallo è un buon <b>conduttore di calore</b>: porta il calore dalla fiamma al cibo.</li>
<li>Il manico deve essere <b>isolante</b>: così non ti scotti quando lo afferri.</li>
<li>Il metallo è anche <b>resistente</b> e non si deforma col calore; la plastica del manico è di tipo <b>termoindurente</b>, che non si ammorbidisce scaldandosi.</li>
</ul>
<p>Ogni scelta di materiale risponde a una domanda: <b>che cosa deve fare quella parte dell'oggetto?</b></p>`
    },
    {
      type: `text`, title: `3. Il legno`,
      html: `<p>Il legno è la parte interna del tronco degli alberi. È rinnovabile, leggero, resistente, isolante, facile da lavorare e bello da vedere.</p>
<p><b>Struttura del tronco</b> (dall'esterno all'interno): <b>corteccia</b> (protegge), <b>libro</b> (porta la linfa elaborata), <b>cambio</b> (lo strato che cresce e forma ogni anno un nuovo anello), <b>alburno</b> (legno giovane, chiaro), <b>durame</b> (legno vecchio, scuro e resistente), <b>midollo</b> (al centro).</p>
<p><b>Legni dolci e duri</b>:</p>
<ul>
<li><b>dolci</b> (teneri), di solito da conifere: abete, pino, larice → leggeri, economici, per travi, imballaggi, mobili semplici;</li>
<li><b>duri</b> (forti), di solito da latifoglie: rovere, noce, faggio, castagno → per mobili di pregio, parquet, attrezzi.</li>
</ul>
<p><b>Semilavorati</b> (derivati del legno): <b>compensato</b> (fogli sottili incollati con le fibre incrociate), <b>truciolato</b> (trucioli pressati con colla), <b>MDF</b> (fibre finissime pressate), <b>lamellare</b> (listelli incollati: per grandi travi curve di palestre e ponti).</p>`
    },
    {
      type: `3d`, title: `Dentro il tronco in 3D`,
      scene: `layers`,
      caption: `Ruota il tronco "tagliato a spicchio": ogni strato ha un compito diverso. Contando gli anelli si scopre l'età dell'albero!`,
      options: {
        layers: [
          { r: 1, color: `#5b3a1e`, label: `Corteccia` },
          { r: 0.93, color: `#8b5a2b`, label: `Libro (floema)` },
          { r: 0.88, color: `#a3e635`, label: `Cambio` },
          { r: 0.85, color: `#f5deb3`, label: `Alburno` },
          { r: 0.55, color: `#b45309`, label: `Durame` },
          { r: 0.08, color: `#451a03`, label: `Midollo` }
        ]
      }
    },
    {
      type: `text`, title: `4. La carta`,
      html: `<p>La carta è fatta di <b>fibre di cellulosa</b>, che si ricavano soprattutto dal legno (ma anche da cotone, canapa e dalla carta riciclata).</p>
<p><b>Come si fa, passo per passo:</b></p>
<ol>
<li>il legno viene ridotto in trucioli e trasformato in <b>pasta</b> (meccanicamente o con sostanze chimiche);</li>
<li>la pasta viene sbiancata e mescolata con molta acqua;</li>
<li>l'impasto si stende su una <b>tela</b> in movimento: l'acqua cola via e le fibre si intrecciano;</li>
<li>il foglio passa tra <b>rulli</b> che lo pressano e lo asciugano;</li>
<li>si arrotola in grandi bobine e si taglia nei formati.</li>
</ol>
<p>La carta si misura in <b>grammatura</b>: grammi per metro quadrato. La carta da fotocopie pesa di solito <b>80 g/m²</b>; il cartoncino da disegno 200 g/m² o più.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: proprietà, legno e carta`,
      questions: [
        { type: `mc`, q: `La capacità di un metallo di essere tirato in fili si chiama…`, options: [`malleabilità`, `duttilità`, `durezza`], answer: 1, explain: `Duttilità = fili; malleabilità = lamine.` },
        { type: `mc`, q: `Lo strato del tronco che produce ogni anno un nuovo anello è…`, options: [`il midollo`, `il cambio`, `la corteccia`], answer: 1, explain: `Il cambio si divide e forma nuovo legno verso l'interno.` },
        { type: `num`, q: `Un foglio A4 è 1/16 di m². Se la carta è da 80 g/m², quanti grammi pesa un foglio A4?`, answer: 5, tol: 0, unit: `g`, explain: `80 : 16 = 5 g.` }
      ]
    },
    {
      type: `text`, title: `5. I metalli`,
      html: `<p>I metalli si ricavano dai <b>minerali</b> estratti nelle miniere. Sono buoni conduttori di calore ed elettricità, resistenti, spesso duttili e malleabili, e si possono fondere.</p>
<p><b>Metalli ferrosi</b> (a base di ferro, si ottengono nell'altoforno dal minerale di ferro con carbone):</p>
<ul>
<li><b>ghisa</b>: ferro con più del 2% di carbonio → dura ma fragile; si cola negli stampi (tombini, termosifoni, pentole antiche);</li>
<li><b>acciaio</b>: ferro con meno del 2% di carbonio → resistente ed elastico; il più usato al mondo (auto, ponti, binari, utensili). L'<b>acciaio inox</b> contiene anche cromo (almeno 10,5%) e non arrugginisce.</li>
</ul>
<p><b>Metalli non ferrosi</b>:</p>
<ul>
<li><b>alluminio</b> (dalla <b>bauxite</b>): leggerissimo, non arrugginisce → lattine, aerei, infissi;</li>
<li><b>rame</b>: ottimo conduttore → fili elettrici, tubi;</li>
<li><b>leghe</b>: <b>bronzo</b> = rame + stagno (statue, campane); <b>ottone</b> = rame + zinco (rubinetti, maniglie, strumenti musicali).</li>
</ul>`
    },
    {
      type: `text`, title: `6. Le plastiche`,
      html: `<p>Le plastiche sono materiali <b>sintetici</b>, cioè creati dall'uomo, quasi sempre partendo dal <b>petrolio</b>. Sono formate da <b>polimeri</b>: lunghissime catene di piccole molecole uguali (i <b>monomeri</b>) unite tra loro, come le perle di una collana.</p>
<ul>
<li><b>Termoplastiche</b>: scaldate si ammorbidiscono e si possono rimodellare più volte → <b>riciclabili</b> (bottiglie in PET, sacchetti in polietilene, giocattoli).</li>
<li><b>Termoindurenti</b>: una volta formate, col calore non si ammorbidiscono ma bruciano → manici di pentole, prese elettriche.</li>
<li><b>Elastomeri</b>: elastici come la gomma → pneumatici, guarnizioni.</li>
</ul>
<p>Sugli oggetti trovi un triangolo di frecce con un numero, il <b>codice della resina</b>: 1 PET, 2 HDPE, 3 PVC, 4 LDPE, 5 PP, 6 PS, 7 altre plastiche. Aiuta a separarle per il riciclo.</p>
<p>⚠️ Le plastiche sono leggere, economiche e impermeabili, ma <b>durano secoli</b> nell'ambiente: una bottiglia può impiegare centinaia di anni a degradarsi, e si spezza in <b>microplastiche</b> che finiscono nel mare e negli animali.</p>`
    },
    {
      type: `3d`, title: `Una catena di polietilene in 3D`,
      scene: `molecule`,
      caption: `Un pezzetto di polietilene, la plastica dei sacchetti: una catena di atomi di carbonio (grigi) con attaccati atomi di idrogeno (bianchi). Nella realtà la catena è lunga migliaia di atomi!`,
      options: {
        atoms: [
          { x: -3, y: 0, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: -1.5, y: 0.6, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: 0, y: 0, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: 1.5, y: 0.6, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: 3, y: 0, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: -3, y: -0.7, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: -3, y: -0.7, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: -1.5, y: 1.3, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: -1.5, y: 1.3, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 0, y: -0.7, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 0, y: -0.7, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 1.5, y: 1.3, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 1.5, y: 1.3, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 3, y: -0.7, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 3, y: -0.7, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [0, 6], [1, 7], [1, 8], [2, 9], [2, 10], [3, 11], [3, 12], [4, 13], [4, 14]]
      }
    },
    {
      type: `text`, title: `7. Il riciclo e l'economia circolare`,
      html: `<p>Riciclare significa trasformare un rifiuto in <b>nuova materia prima</b>. Funziona solo se la <b>raccolta differenziata</b> è fatta bene!</p>
<table>
<tr><th>Materiale</th><th>Che cosa diventa</th><th>Quanto si risparmia</th></tr>
<tr><td>📄 Carta</td><td>nuova carta, cartone, scatole</td><td>le fibre si possono riciclare circa 5-7 volte, poi diventano troppo corte</td></tr>
<tr><td>🥫 Alluminio</td><td>nuove lattine, biciclette, infissi</td><td>riciclabile all'infinito; si risparmia circa il <b>95%</b> dell'energia rispetto a produrlo dalla bauxite</td></tr>
<tr><td>🔩 Acciaio</td><td>nuovo acciaio</td><td>riciclabile all'infinito; si separa con le calamite</td></tr>
<tr><td>🍾 Vetro</td><td>nuove bottiglie e vasetti</td><td>riciclabile all'infinito senza perdere qualità</td></tr>
<tr><td>🧴 Plastica</td><td>fibre per pile e maglioni, panchine, nuove bottiglie</td><td>si ricicla poche volte; molte plastiche miste vengono bruciate per produrre energia</td></tr>
</table>
<p>L'<b>economia circolare</b> va oltre il riciclo. Segue la regola delle <b>R</b>: <b>Ridurre</b> (usare meno materiale), <b>Riutilizzare</b> (borraccia invece di bottigliette), <b>Riparare</b>, e solo alla fine <b>Riciclare</b>.</p>`
    },
    {
      type: `svg`, title: `Economia lineare ed economia circolare`,
      caption: `Nell'economia lineare i materiali finiscono in discarica; in quella circolare tornano in gioco.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<text x="150" y="30" font-size="18" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Lineare</text>
<rect x="20" y="60" width="70" height="40" rx="8" fill="#fca5a5"/><text x="55" y="86" font-size="14" text-anchor="middle" fill="#7f1d1d">Estraggo</text>
<rect x="115" y="60" width="70" height="40" rx="8" fill="#fca5a5"/><text x="150" y="86" font-size="14" text-anchor="middle" fill="#7f1d1d">Produco</text>
<rect x="210" y="60" width="70" height="40" rx="8" fill="#fca5a5"/><text x="245" y="86" font-size="14" text-anchor="middle" fill="#7f1d1d">Uso</text>
<rect x="115" y="150" width="70" height="40" rx="8" fill="#6b7280"/><text x="150" y="176" font-size="14" text-anchor="middle" fill="#ffffff">Butto</text>
<path d="M90 80 L113 80 M185 80 L208 80 M245 100 L245 170 L187 170" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<text x="150" y="230" font-size="28" text-anchor="middle">🗑️</text>
<text x="150" y="265" font-size="14" text-anchor="middle" fill="#7f1d1d">rifiuti e discariche</text>
<line x1="300" y1="20" x2="300" y2="280" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6"/>
<text x="450" y="30" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Circolare</text>
<circle cx="450" cy="160" r="90" fill="none" stroke="#16a34a" stroke-width="6"/>
<rect x="415" y="52" width="70" height="34" rx="8" fill="#86efac"/><text x="450" y="75" font-size="14" text-anchor="middle" fill="#14532d">Produco</text>
<rect x="515" y="143" width="76" height="34" rx="8" fill="#86efac"/><text x="553" y="166" font-size="14" text-anchor="middle" fill="#14532d">Uso</text>
<rect x="405" y="234" width="90" height="34" rx="8" fill="#86efac"/><text x="450" y="257" font-size="14" text-anchor="middle" fill="#14532d">Riparo</text>
<rect x="312" y="143" width="80" height="34" rx="8" fill="#86efac"/><text x="352" y="166" font-size="14" text-anchor="middle" fill="#14532d">Riciclo</text>
<text x="450" y="168" font-size="34" text-anchor="middle">♻️</text>
</svg>`
    },
    {
      type: `widget`, title: `Gioco: in quale bidone?`,
      widget: `classify`,
      caption: `Fai la raccolta differenziata. Attenzione: le regole possono cambiare un po' da Comune a Comune!`,
      options: {
        groups: [`📦 Carta e cartone`, `🧴 Plastica`, `🍾 Vetro`, `🥫 Metalli`],
        items: [
          [`quaderno vecchio`, 0], [`scatola delle scarpe`, 0], [`giornale`, 0],
          [`bottiglia dell'acqua in PET`, 1], [`vaschetta dello yogurt`, 1], [`flacone del detersivo`, 1],
          [`barattolo della marmellata`, 2], [`bottiglia dell'olio in vetro`, 2],
          [`lattina della bibita`, 3], [`scatoletta del tonno`, 3], [`foglio di alluminio pulito`, 3]
        ]
      }
    },
    {
      type: `example`, title: `Esempio pratico: la seconda vita di una bottiglia`,
      html: `<p>Segui una bottiglia di plastica (PET, codice 1):</p>
<ol>
<li>la butti nel bidone della plastica;</li>
<li>al centro di selezione viene separata dalle altre plastiche (anche con sensori a raggi infrarossi);</li>
<li>viene lavata e ridotta in <b>scaglie</b> (flakes);</li>
<li>le scaglie, fuse, diventano nuove bottiglie oppure <b>fibre</b>: servono circa 20-30 bottiglie per una felpa in pile!</li>
</ol>
<p>Ancora meglio: usare una <b>borraccia</b> riutilizzabile, così la bottiglia non nasce nemmeno.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la carta l'hanno inventata i cinesi?`,
      html: `<p>Secondo la tradizione fu il funzionario cinese <b>Cai Lun</b>, nel <b>105 d.C.</b>, a perfezionare la carta con corteccia, stracci e reti da pesca. Il segreto arrivò in Occidente attraverso il mondo arabo e, nel <b>Duecento</b>, a <b>Fabriano</b> (Marche) i cartai inventarono la <b>filigrana</b> (il disegno visibile in controluce) e la collatura con gelatina animale. Ancora oggi la carta delle banconote dell'euro è legata a quella tradizione.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… un italiano ha vinto il Nobel per una plastica?`,
      html: `<p>Il chimico <b>Giulio Natta</b>, del Politecnico di Milano, nel <b>1954</b> riuscì a produrre il <b>polipropilene isotattico</b>, una plastica robusta e leggera. Fu venduta con il nome <b>Moplen</b> e riempì le case italiane di secchi, bacinelle e scolapasta colorati. Per questa scoperta Natta vinse il <b>Premio Nobel per la Chimica nel 1963</b>, insieme al tedesco Karl Ziegler. Il polipropilene è il "5" nel triangolo del riciclo!</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se le proprietà dei materiali ti sembrano astratte, prova queste strade.`,
      tabs: [
        {
          label: `🔬 Esperimenti in casa`,
          html: `<p>Scopri le proprietà con le tue mani (con l'aiuto di un adulto):</p>
<ul>
<li><b>Conducibilità termica</b>: metti in una tazza di acqua calda un cucchiaio di metallo, uno di legno e uno di plastica. Dopo un minuto tocca i manici: quale scotta?</li>
<li><b>Galleggiamento (densità)</b>: in una bacinella metti un tappo di sughero, un bullone, un pezzo di legno, una moneta.</li>
<li><b>Elasticità</b>: piega una molla, un elastico, un filo di rame. Quali tornano come prima?</li>
<li><b>Magnetismo</b>: avvicina una calamita a una lattina di bibita (alluminio) e a una scatoletta (acciaio). Ecco come si separano i metalli negli impianti!</li>
</ul>`
        },
        {
          label: `🇯🇵🇸🇪 Come fanno altri Paesi`,
          html: `<ul>
<li>🇯🇵 In <b>Giappone</b> alcune città dividono i rifiuti in più di 10 categorie; il paese di <b>Kamikatsu</b> arriva a circa 45 categorie, con l'obiettivo "rifiuti zero".</li>
<li>🇸🇪 In <b>Svezia</b> meno dell'1% dei rifiuti urbani finisce in discarica: quasi tutto viene riciclato o bruciato negli impianti che producono calore per il riscaldamento delle città.</li>
<li>🇩🇪 In <b>Germania</b> funziona da anni il <b>vuoto a rendere</b> (Pfand): sulle bottiglie si paga una piccola cauzione (25 centesimi) che viene restituita quando le riporti al supermercato.</li>
<li>🇮🇹 L'<b>Italia</b> è tra i Paesi europei che riciclano di più in percentuale, grazie anche ai consorzi come CONAI.</li>
</ul>`
        },
        {
          label: `📿 La collana di perle`,
          html: `<p>Un <b>polimero</b> è come una <b>collana</b>: ogni perla è un monomero. Nelle <b>termoplastiche</b> le collane sono separate, come spaghetti in un piatto: scaldandole scivolano una sull'altra e la plastica si ammorbidisce. Nelle <b>termoindurenti</b> le collane sono legate tra loro come una <b>rete</b>: scaldandole non possono scivolare e il materiale resta rigido finché brucia.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#fdf4ff"/>
<path d="M30 50 Q90 20 150 60 T270 50" stroke="#ec4899" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M30 100 Q90 130 150 90 T270 110" stroke="#3b82f6" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M30 150 Q90 120 150 160 T270 140" stroke="#22c55e" stroke-width="10" fill="none" stroke-linecap="round"/>
<text x="150" y="190" font-size="16" text-anchor="middle" fill="#701a75" font-weight="bold">termoplastica: catene libere</text>
<path d="M330 50 L570 50 M330 100 L570 100 M330 150 L570 150" stroke="#a855f7" stroke-width="10" stroke-linecap="round"/>
<path d="M380 50 L380 100 M460 100 L460 150 M520 50 L520 100 M420 100 L420 150 M500 50 L480 100" stroke="#f97316" stroke-width="6"/>
<text x="450" y="190" font-size="16" text-anchor="middle" fill="#701a75" font-weight="bold">termoindurente: catene legate</text>
</svg>`
        },
        {
          label: `🧩 Abbina oggetto e materiale`,
          html: `<p>Per ogni oggetto, scegli il materiale e pensa al <b>perché</b>.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Filo elettrico`, `Rame: ottimo conduttore e duttile`],
              [`Lattina`, `Alluminio: leggero e malleabile`],
              [`Trave di un ponte`, `Acciaio: resistente ed elastico`],
              [`Campana`, `Bronzo: lega di rame e stagno`],
              [`Tappo della bottiglia di vino`, `Sughero: leggero e impermeabile`],
              [`Parquet`, `Rovere: legno duro`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: il ciclo di vita dei materiali`,
      nodes: [
        { id: `mp`, label: `Materie prime`, x: 50, y: 8, color: `#16a34a`, html: `Vegetali, animali, minerali, fossili.`, why: `La storia dell'umanità è divisa in età dei materiali: età della <b>pietra</b>, del <b>bronzo</b> (dal 3300 a.C. circa), del <b>ferro</b> (dal 1200 a.C. circa). Ogni nuovo materiale ha cambiato il modo di vivere.` },
        { id: `prop`, label: `Proprietà`, x: 50, y: 30, color: `#0ea5e9`, html: `Fisiche, meccaniche, tecnologiche.`, why: `Dipendono da come sono legati atomi e molecole: nei metalli gli elettroni sono liberi di muoversi, per questo conducono calore ed elettricità; nel legno le fibre di cellulosa lo rendono resistente nel verso della venatura.` },
        { id: `legno`, label: `Legno e carta`, x: 12, y: 55, color: `#a16207`, html: `Dalla cellulosa degli alberi.`, why: `La <b>cellulosa</b> è il polimero naturale più diffuso sulla Terra: le piante la producono con la fotosintesi. La carta è cellulosa sciolta in acqua e ri-intrecciata.` },
        { id: `met`, label: `Metalli`, x: 37, y: 58, color: `#64748b`, html: `Ferrosi (ghisa, acciaio) e non ferrosi (alluminio, rame).`, why: `In natura i metalli sono quasi sempre legati all'ossigeno nei minerali. Per ottenerli bisogna "strappare" l'ossigeno con calore e carbone (altoforno) o con l'elettricità (alluminio, processo Hall-Héroult del <b>1886</b>).` },
        { id: `plast`, label: `Plastiche`, x: 63, y: 58, color: `#ec4899`, html: `Polimeri sintetici dal petrolio.`, why: `La prima plastica completamente sintetica è la <b>bachelite</b> (1907, Leo Baekeland). Il chimico tedesco <b>Hermann Staudinger</b> capì negli anni '20 che i polimeri sono macromolecole a catena (Nobel 1953).` },
        { id: `vetro`, label: `Vetro e ceramica`, x: 88, y: 55, color: `#06b6d4`, html: `Dalla sabbia e dall'argilla.`, why: `Il vetro si ottiene fondendo sabbia silicea a circa 1500 °C: lo producevano già i Mesopotamici e gli Egizi; i Romani inventarono il vetro soffiato.` },
        { id: `rif`, label: `Rifiuti`, x: 30, y: 85, color: `#6b7280`, html: `Ciò che scartiamo dopo l'uso.`, why: `Un italiano produce in media circa <b>500 kg</b> di rifiuti urbani all'anno. Se non vengono separati finiscono in discarica o negli inceneritori.` },
        { id: `ric`, label: `Riciclo ed economia circolare`, x: 70, y: 88, color: `#22c55e`, html: `Ridurre, riutilizzare, riparare, riciclare.`, why: `L'idea di economia circolare si è diffusa dagli anni 2010; l'Unione Europea l'ha adottata con un piano d'azione nel <b>2015</b> e nel 2020. Si ispira alla natura, dove gli "scarti" di un organismo sono il cibo di un altro.` }
      ],
      edges: [
        [`mp`, `prop`, `hanno`], [`prop`, `legno`, `scelta`], [`prop`, `met`, `scelta`], [`prop`, `plast`, `scelta`], [`prop`, `vetro`, `scelta`],
        [`legno`, `rif`, `diventano`], [`plast`, `rif`, `diventano`], [`rif`, `ric`, `con`], [`ric`, `mp`, `nuova materia`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: metalli, plastiche, riciclo`,
      questions: [
        { type: `mc`, q: `L'ottone è una lega di…`, options: [`rame e stagno`, `rame e zinco`, `ferro e carbonio`], answer: 1, explain: `Ottone = rame + zinco; bronzo = rame + stagno.` },
        { type: `mc`, q: `Le plastiche che si possono riscaldare e rimodellare più volte sono…`, options: [`termoplastiche`, `termoindurenti`], answer: 0, explain: `Le termoplastiche si ammorbidiscono col calore e si riciclano.` },
        { type: `tf`, q: `L'alluminio si può riciclare infinite volte.`, answer: true, explain: `Non perde qualità e si risparmia circa il 95% dell'energia.` }
      ]
    }
  ],
  glossary: [
    { t: `Materia prima`, d: `Sostanza presa dalla natura per produrre materiali (legno, minerali, petrolio).` },
    { t: `Semilavorato`, d: `Materiale già trasformato ma non ancora prodotto finito (tavole, lamiere).` },
    { t: `Malleabilità`, d: `Capacità di essere ridotto in lamine sottili.` },
    { t: `Duttilità`, d: `Capacità di essere tirato in fili.` },
    { t: `Isolante`, d: `Materiale che non lascia passare facilmente calore o elettricità.` },
    { t: `Durame / alburno`, d: `Legno interno, scuro e duro / legno esterno, giovane e chiaro.` },
    { t: `Cellulosa`, d: `Fibra vegetale con cui si fa la carta.` },
    { t: `Grammatura`, d: `Peso della carta in grammi per metro quadrato (g/m²).` },
    { t: `Lega`, d: `Miscela di metalli (o metallo e altri elementi): bronzo, ottone, acciaio.` },
    { t: `Acciaio`, d: `Lega di ferro con meno del 2% circa di carbonio.` },
    { t: `Polimero`, d: `Lunga catena di molecole uguali (monomeri): ne sono fatte plastiche e cellulosa.` },
    { t: `Economia circolare`, d: `Sistema che riduce, riusa, ripara e ricicla per non sprecare materiali.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale di queste materie prime è di origine animale?`, options: [`cotone`, `lana`, `petrolio`], answer: 1, explain: `La lana viene dalle pecore; il cotone è vegetale, il petrolio fossile.` },
      { type: `mc`, q: `Perché i fili elettrici sono di rame ricoperto di plastica?`, options: [`Il rame conduce, la plastica isola`, `Il rame isola, la plastica conduce`, `Per colorarli`], answer: 0, explain: `Il rame porta la corrente, la plastica protegge da scosse.` },
      { type: `mc`, q: `Il legno di abete è un legno…`, options: [`dolce (tenero)`, `duro (forte)`], answer: 0, explain: `Abete, pino, larice sono conifere dal legno tenero.` },
      { type: `tf`, q: `Il compensato è fatto di fogli sottili di legno incollati con le fibre incrociate.`, answer: true, explain: `Incrociando le fibre il pannello diventa più stabile e resistente.` },
      { type: `mc`, q: `La differenza tra ghisa e acciaio è…`, options: [`la quantità di carbonio`, `il colore`, `la presenza di alluminio`], answer: 0, explain: `Ghisa: più del 2% di carbonio; acciaio: meno del 2%.` },
      { type: `text`, q: `Da quale minerale si ricava l'alluminio?`, answer: [`bauxite`, `la bauxite`], explain: `Dalla bauxite.` },
      { type: `mc`, q: `Da quale materia prima si ricavano quasi tutte le plastiche?`, options: [`sabbia`, `petrolio`, `argilla`], answer: 1, explain: `Dal petrolio (e dal gas naturale).` },
      { type: `num`, q: `Una risma da 500 fogli A4 da 80 g/m². Ogni foglio pesa 5 g. Quanti grammi pesa la risma (senza confezione)?`, answer: 2500, tol: 0, unit: `g`, explain: `500 × 5 = 2500 g = 2,5 kg.` },
      { type: `order`, q: `Metti in ordine gli strati del tronco dall'esterno verso il centro.`, items: [`corteccia`, `libro`, `cambio`, `alburno`, `durame`, `midollo`], explain: `Corteccia, libro, cambio, alburno, durame, midollo.` },
      { type: `mc`, q: `Quale azione viene PRIMA nella regola delle R dell'economia circolare?`, options: [`Riciclare`, `Ridurre`, `Bruciare`], answer: 1, explain: `Prima si riduce: il rifiuto migliore è quello che non si produce.` },
      { type: `tf`, q: `La carta si può riciclare all'infinito.`, answer: false, explain: `Le fibre si accorciano: circa 5-7 cicli.` },
      { type: `mc`, q: `Chi vinse il Nobel per la Chimica nel 1963 per il polipropilene?`, options: [`Giulio Natta`, `Enrico Fermi`, `Guglielmo Marconi`], answer: 0, explain: `Giulio Natta, insieme a Karl Ziegler.` }
    ]
  }
});
