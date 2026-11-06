TOPIC('it', {
  id: 'p3-geo-paesaggi',
  title: `I paesaggi`,
  intro: `Guardati intorno: vedi montagne, colline, una grande pianura o il mare? Ogni luogo ha il suo <b>paesaggio</b>. In questa lezione scopriremo come sono fatti la montagna, la collina, la pianura e il mare, e soprattutto <b>come si sono formati</b>.`,
  minutes: 30,
  sections: [
    {
      type: 'text', title: `Che cos'è un paesaggio?`,
      html: `<p>Il <b>paesaggio</b> è tutto quello che vediamo quando guardiamo un luogo: il terreno, l'acqua, le piante, gli animali e anche le cose costruite dalle persone.</p>
<ul>
<li>Gli <b>elementi naturali</b> sono fatti dalla natura: monti, fiumi, boschi, laghi, il mare.</li>
<li>Gli <b>elementi antropici</b> sono fatti dall'uomo: case, strade, ponti, campi coltivati, porti.</li>
</ul>
<p>Quando un paesaggio ha quasi solo elementi naturali si dice <b>paesaggio naturale</b>. Quando l'uomo lo ha cambiato molto si dice <b>paesaggio antropizzato</b>.</p>
<p>I paesaggi principali che studiamo sono quattro: <b>montagna</b>, <b>collina</b>, <b>pianura</b> e <b>mare</b>.</p>`
    },
    {
      type: '3d', title: `Esplora il paesaggio in 3D`,
      scene: 'terrain',
      caption: `Ruota il paesaggio con il dito o il mouse. Tocca le etichette: la parte si illumina e compare la spiegazione.`,
      options: {
        features: {
          mountain: { label: `Montagna`, html: `Rilievo alto più di <b>600 metri</b> sul livello del mare. Ha versanti ripidi e spesso rocciosi. In Italia: le <b>Alpi</b> a nord e gli <b>Appennini</b> lungo tutta la penisola.` },
          peak: { label: `Vetta (cima)`, html: `Il punto più alto di una montagna. La vetta più alta d'Italia è il <b>Monte Bianco</b> (4805 m), sulle Alpi.` },
          glacier: { label: `Ghiacciaio`, html: `Una grande massa di ghiaccio che si forma in alta montagna dove la neve non si scioglie mai del tutto. Scivola lentissimamente verso valle. I ghiacciai sono <b>riserve di acqua dolce</b>.` },
          valley: { label: `Valle`, html: `Lo spazio basso tra due montagne, dove di solito scorre un fiume o un torrente. Le valli a forma di <b>V</b> sono scavate dai fiumi, quelle a forma di <b>U</b> dai ghiacciai.` },
          hill: { label: `Collina`, html: `Rilievo più basso della montagna: <b>meno di 600 metri</b>. Ha forme dolci e arrotondate. È la forma di territorio più diffusa in Italia (circa il 42%). Esempi: le colline delle <b>Langhe</b> e della <b>Toscana</b>.` },
          plain: { label: `Pianura`, html: `Territorio <b>piatto e basso</b>, senza rilievi. Spesso è formata dai detriti portati dai fiumi. La più grande d'Italia è la <b>Pianura Padana</b>, creata dal fiume Po.` },
          source: { label: `Sorgente`, html: `Il punto dove un fiume nasce: l'acqua esce dal terreno o dallo scioglimento di nevi e ghiacciai. Il Po nasce dal <b>Monviso</b>.` },
          river: { label: `Fiume`, html: `Un corso d'acqua che scorre sempre dalla sorgente fino alla <b>foce</b> (mare o lago). Il fiume più lungo d'Italia è il <b>Po</b> (652 km).` },
          lake: { label: `Lago`, html: `Una grande conca piena di acqua dolce, circondata da terre. Il lago più grande d'Italia è il <b>Lago di Garda</b>.` },
          volcano: { label: `Vulcano`, html: `Una montagna speciale: si forma quando il <b>magma</b> (roccia fusa) sale dall'interno della Terra ed esce in superficie. L'<b>Etna</b> in Sicilia è il vulcano attivo più alto d'Europa.` },
          sea: { label: `Mare`, html: `Una grande distesa di acqua salata. L'Italia è circondata dal <b>Mar Mediterraneo</b>, diviso in Mar Ligure, Tirreno, Ionio e Adriatico.` }
        }
      }
    },
    {
      type: 'text', title: `La montagna`,
      html: `<p>La <b>montagna</b> è un rilievo che supera i <b>600 metri</b> di altezza. Più montagne vicine formano una <b>catena montuosa</b>.</p>
<ul>
<li><b>Vetta</b>: la parte più alta.</li>
<li><b>Versanti</b> (o pendii): i fianchi della montagna.</li>
<li><b>Piede</b>: la parte più bassa.</li>
<li><b>Valle</b>: lo spazio tra due montagne.</li>
<li><b>Passo</b> (o valico): il punto più basso per attraversare una catena.</li>
</ul>
<p>Salendo in montagna fa sempre più <b>freddo</b>: in basso ci sono boschi di latifoglie (castagni, faggi), più in alto le conifere (abeti, larici), poi i prati (pascoli) e infine rocce, neve e ghiacciai.</p>
<p>In montagna l'uomo pratica l'<b>allevamento</b>, il <b>turismo</b> (sci, escursioni) e produce energia con le <b>dighe</b>.</p>`
    },
    {
      type: 'svg', title: `Le fasce della montagna`,
      caption: `Più si sale, più la temperatura scende e cambia la vegetazione.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#e0f2fe"/>
<polygon points="40,300 300,30 560,300" fill="#78716c"/>
<polygon points="248,84 300,30 352,84" fill="#ffffff"/>
<polygon points="170,164 248,84 352,84 430,164" fill="#a8a29e"/>
<polygon points="130,205 170,164 430,164 470,205" fill="#84cc16"/>
<polygon points="90,250 130,205 470,205 510,250" fill="#166534"/>
<polygon points="40,300 90,250 510,250 560,300" fill="#65a30d"/>
<text x="300" y="72" font-size="15" text-anchor="middle" fill="#1e293b">neve e ghiacci</text>
<text x="300" y="130" font-size="15" text-anchor="middle" fill="#1e293b">rocce</text>
<text x="300" y="191" font-size="15" text-anchor="middle" fill="#1e293b">prati e pascoli</text>
<text x="300" y="234" font-size="15" text-anchor="middle" fill="#ffffff">conifere (abeti, larici)</text>
<text x="300" y="282" font-size="15" text-anchor="middle" fill="#ffffff">latifoglie (faggi, castagni)</text>
<text x="575" y="40" font-size="14" fill="#0369a1">❄️ freddo</text>
<text x="565" y="300" font-size="14" fill="#b45309">☀️ caldo</text>
</svg>`
    },
    {
      type: 'text', title: `La collina`,
      html: `<p>La <b>collina</b> è un rilievo più basso della montagna: non supera i <b>600 metri</b>. Ha cime arrotondate e pendii dolci.</p>
<p>Il clima è mite e il terreno spesso è fertile: per questo in collina si coltivano <b>viti</b> (per l'uva e il vino), <b>ulivi</b>, alberi da frutto e cereali. Sulle colline italiane ci sono tanti paesi antichi, costruiti in alto per difendersi.</p>
<p>Le colline possono essere di tre tipi:</p>
<ul>
<li><b>Moreniche</b>: formate dai detriti lasciati dai ghiacciai (vicino ai grandi laghi del Nord).</li>
<li><b>Vulcaniche</b>: formate da antichi vulcani spenti (Colli Albani vicino a Roma).</li>
<li><b>Di erosione</b>: montagne antiche consumate e abbassate dal vento e dall'acqua.</li>
</ul>`
    },
    {
      type: 'text', title: `La pianura`,
      html: `<p>La <b>pianura</b> è un territorio piatto e basso. In Italia le pianure sono poche (circa il 23% del territorio), ma ci vive moltissima gente.</p>
<p>Le pianure possono essere:</p>
<ul>
<li><b>Alluvionali</b>: formate dai fiumi che, durante le piene, depositano sabbia e terra (la <b>Pianura Padana</b>).</li>
<li><b>Vulcaniche</b>: formate dai materiali dei vulcani (la <b>Piana Campana</b>).</li>
<li><b>Di bonifica</b>: un tempo erano paludi, poi l'uomo le ha prosciugate (l'<b>Agro Pontino</b>).</li>
</ul>
<p>In pianura è facile costruire strade, ferrovie, città e fabbriche, e coltivare grandi campi di mais, grano e riso.</p>`
    },
    {
      type: 'example', title: `Esempio pratico: un viaggio dal Monte Bianco al mare`,
      html: `<p>Immagina di fare un viaggio da <b>Courmayeur</b> (Valle d'Aosta) fino a <b>Venezia</b>:</p>
<ol>
<li>Parti ai piedi del <b>Monte Bianco</b>: vedi ghiacciai e vette altissime (montagna).</li>
<li>Scendi lungo la <b>Valle d'Aosta</b>, scavata dalla Dora Baltea (valle).</li>
<li>Arrivi tra le colline vicino a <b>Ivrea</b>, formate dai detriti di un antico ghiacciaio (colline moreniche).</li>
<li>Attraversi la grande <b>Pianura Padana</b>: campi di riso, mais e città come Milano.</li>
<li>Arrivi a Venezia, sul <b>Mare Adriatico</b>.</li>
</ol>
<p>In un solo giorno di viaggio hai visto tutti e quattro i paesaggi!</p>`
    },
    {
      type: 'quiz', title: `Mini-quiz: riconosci il paesaggio`,
      questions: [
        { type: 'mc', q: `Un rilievo alto 1500 metri è…`, options: [`una collina`, `una montagna`, `una pianura`], answer: 1, explain: `Supera i 600 metri, quindi è una montagna.` },
        { type: 'tf', q: `La Pianura Padana è stata formata soprattutto dal fiume Po.`, answer: true, explain: `È una pianura alluvionale: il Po e i suoi affluenti hanno depositato sabbia e terra per migliaia di anni.` },
        { type: 'mc', q: `Dove si coltivano di più viti e ulivi?`, options: [`In alta montagna`, `In collina`, `Sui ghiacciai`], answer: 1, explain: `In collina il clima è mite e i pendii sono soleggiati: perfetti per viti e ulivi.` }
      ]
    },
    {
      type: 'text', title: `Il mare`,
      html: `<p>Il <b>mare</b> è una grande distesa di acqua <b>salata</b>. Il punto in cui la terra incontra il mare si chiama <b>costa</b>.</p>
<p>La costa può essere <b>alta e rocciosa</b> (con scogliere a picco, come in Liguria) oppure <b>bassa e sabbiosa</b> (con lunghe spiagge, come in Romagna).</p>
<p>Il mare è importante per la <b>pesca</b>, i <b>trasporti</b> con le navi, il <b>turismo</b>, e perché rende il clima più mite: d'estate rinfresca, d'inverno riscalda.</p>
<p>Dell'Italia, le coste sono lunghe circa <b>7500 km</b>!</p>`
    },
    {
      type: 'widget', title: `Gioco: in quale paesaggio?`,
      widget: 'classify',
      caption: `Metti ogni elemento nel paesaggio dove lo trovi più facilmente.`,
      options: {
        groups: [`⛰️ Montagna`, `🌄 Collina`, `🌾 Pianura`, `🌊 Mare`],
        items: [
          [`❄️ ghiacciaio`, 0], [`⛷️ pista da sci`, 0], [`🌲 bosco di abeti`, 0],
          [`🍇 vigneto`, 1], [`🫒 uliveto`, 1], [`🏘️ borgo sulla cima arrotondata`, 1],
          [`🌽 grandi campi di mais`, 2], [`🛣️ autostrada dritta per chilometri`, 2], [`🌾 risaie`, 2],
          [`⚓ porto`, 3], [`🐟 barca da pesca`, 3], [`🏖️ spiaggia`, 3]
        ]
      }
    },
    {
      type: 'curiosity', title: `Lo sapevi che… le Alpi crescono ancora?`,
      html: `<p>Le Alpi si sono formate perché la placca africana spinge contro quella europea. Questa spinta <b>non è finita</b>: alcune zone delle Alpi si alzano ancora di circa <b>1–2 millimetri all'anno</b>. Sembra pochissimo, ma in un milione di anni fanno più di un chilometro! Intanto però pioggia, ghiaccio e vento le consumano.</p>`
    },
    {
      type: 'alternatives', title: `Altri modi per capirlo`,
      intro: `Se le definizioni non ti bastano, prova a capire i paesaggi in un altro modo.`,
      tabs: [
        {
          label: `✋ Con le mani`,
          html: `<p>Metti un <b>asciugamano</b> sul tavolo e spingilo dai due lati verso il centro: si alzano delle pieghe! È così che si formano le montagne: due "pezzi" di crosta terrestre si spingono e il terreno si piega verso l'alto (<b>orogenesi</b>).</p>
<p>Le pieghe alte e appuntite sono come le <b>montagne giovani</b> (le Alpi). Se le schiacci un po' con la mano diventano basse e tonde: come le <b>colline di erosione</b>, montagne vecchie consumate nel tempo.</p>`
        },
        {
          label: `🏖️ Esperimento della sabbiera`,
          html: `<p>Fai una montagnetta di sabbia in un vassoio e versa piano dell'acqua sulla cima con un annaffiatoio.</p>
<ul>
<li>L'acqua scava dei <b>solchi</b>: sono le <b>valli</b>.</li>
<li>La sabbia scende e si deposita in basso formando una zona piatta: è una <b>pianura alluvionale</b>!</li>
<li>Se c'è una buca, l'acqua si ferma: è un <b>lago</b>.</li>
</ul>
<p>In piccolo hai rifatto quello che i fiumi fanno in migliaia di anni.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#f8fafc"/>
<rect x="40" y="180" width="520" height="30" fill="#94a3b8"/>
<polygon points="60,180 200,60 340,180" fill="#fbbf24"/>
<path d="M200,70 C210,110 190,140 220,180" stroke="#3b82f6" stroke-width="5" fill="none"/>
<rect x="340" y="168" width="200" height="12" fill="#d97706"/>
<text x="200" y="45" font-size="16" text-anchor="middle" fill="#1e293b">💧 acqua sulla cima</text>
<text x="235" y="135" font-size="15" fill="#1d4ed8">valle</text>
<text x="440" y="160" font-size="15" text-anchor="middle" fill="#92400e">sabbia depositata = pianura</text>
</svg>`
        },
        {
          label: `📏 Con i numeri`,
          html: `<p>Pensa all'altezza come ai piani di un palazzo. Un piano è alto circa 3 metri.</p>
<ul>
<li>Una <b>collina</b> di 300 m è come un grattacielo di <b>100 piani</b>.</li>
<li>Il confine collina/montagna (600 m) sono <b>200 piani</b>.</li>
<li>Il <b>Monte Bianco</b> (4805 m) sarebbe un palazzo di circa <b>1600 piani</b>!</li>
<li>La <b>pianura</b> è il pianterreno: quasi tutta piatta.</li>
</ul>`,
          scene: 'blocks', options: { mode: 'array', a: 2, b: 8 }
        }
      ]
    },
    {
      type: 'conceptMap', title: `Mappa: come nascono i paesaggi`,
      nodes: [
        { id: 'terra', label: `Forze della Terra`, x: 50, y: 8, color: '#a855f7', html: `Dentro e fuori la Terra agiscono forze che costruiscono e consumano il paesaggio.`, why: `La Terra non è ferma: dentro è caldissima e la crosta è divisa in grandi pezzi (placche) che si muovono. Fuori, sole, acqua, ghiaccio e vento lavorano senza sosta. I paesaggi sono il risultato di questa "lotta" tra forze che alzano e forze che abbassano.` },
        { id: 'orogenesi', label: `Orogenesi`, x: 18, y: 32, color: '#ef4444', html: `La nascita delle montagne: due placche si scontrano e il terreno si piega e si alza.`, why: `Lo hanno capito i geologi osservando che sulle Alpi si trovano fossili di animali marini: quelle rocce erano in fondo al mare e sono state sollevate! Le Alpi sono nate dallo scontro tra Africa ed Europa, iniziato circa 65 milioni di anni fa.` },
        { id: 'vulcanismo', label: `Vulcanismo`, x: 50, y: 32, color: '#f97316', html: `Il magma sale e costruisce vulcani, colline e pianure vulcaniche.`, why: `Sotto la crosta le rocce sono così calde da fondere. Il magma, più leggero, risale nelle fratture. In Italia ci sono molti vulcani proprio perché siamo vicino al confine tra placche.` },
        { id: 'erosione', label: `Erosione`, x: 82, y: 32, color: '#0ea5e9', html: `Acqua, ghiaccio e vento consumano le rocce e portano via i detriti.`, why: `Lo vediamo ogni giorno: un sasso di fiume è liscio perché l'acqua lo ha consumato. In milioni di anni questo lavoro lento abbassa intere montagne.` },
        { id: 'montagna', label: `Montagne`, x: 12, y: 62, color: '#78716c', html: `Rilievi oltre i 600 m.`, why: `Sono giovani e alte quando l'orogenesi è recente (Alpi), più basse e arrotondate quando sono antiche e l'erosione ha lavorato a lungo.` },
        { id: 'collina', label: `Colline`, x: 38, y: 62, color: '#84cc16', html: `Rilievi sotto i 600 m.`, why: `Possono essere montagne abbassate dall'erosione, vulcani spenti o mucchi di detriti lasciati dai ghiacciai (colline moreniche).` },
        { id: 'sedimentazione', label: `Sedimentazione`, x: 70, y: 62, color: '#eab308', html: `I detriti trasportati si depositano dove l'acqua rallenta.`, why: `Quando un fiume arriva in pianura o al mare rallenta e non ha più la forza di trasportare sabbia e ciottoli: li lascia cadere, strato dopo strato.` },
        { id: 'pianura', label: `Pianure`, x: 70, y: 88, color: '#22c55e', html: `Zone piatte e basse.`, why: `La Pianura Padana era un golfo del mare Adriatico: i fiumi lo hanno riempito di detriti in milioni di anni, trasformandolo in terraferma.` },
        { id: 'valle', label: `Valli`, x: 30, y: 88, color: '#0284c7', html: `Solchi tra i monti.`, why: `Una valle a V è scavata da un fiume che incide il terreno; una valle a U è stata allargata da un enorme ghiacciaio durante le glaciazioni.` }
      ],
      edges: [
        ['terra', 'orogenesi', 'spinta delle placche'], ['terra', 'vulcanismo', 'calore interno'], ['terra', 'erosione', 'acqua, ghiaccio, vento'],
        ['orogenesi', 'montagna', 'solleva'], ['vulcanismo', 'collina', 'costruisce'], ['erosione', 'collina', 'abbassa i monti'],
        ['erosione', 'valle', 'scava'], ['erosione', 'sedimentazione', 'porta i detriti'], ['sedimentazione', 'pianura', 'forma']
      ]
    },
    {
      type: 'example', title: `Esempio pratico: perché le città sono in pianura?`,
      html: `<p>Guarda una cartina dell'Italia: <b>Milano, Torino, Bologna</b> sono in pianura. Perché?</p>
<ul>
<li>È facile costruire case e strade sul terreno piatto.</li>
<li>Ci sono fiumi che danno acqua per bere e coltivare.</li>
<li>Il terreno alluvionale è fertile: si produce molto cibo.</li>
</ul>
<p>In montagna invece i paesi sono più piccoli: il terreno è ripido, fa freddo e le strade sono difficili. Il paesaggio decide dove e come vivono le persone!</p>`
    },
    {
      type: 'curiosity', title: `Lo sapevi che… la Pianura Padana era mare?`,
      html: `<p>Qualche milione di anni fa, al posto della Pianura Padana c'era un grande <b>golfo del mare Adriatico</b>. I fiumi che scendevano dalle Alpi e dagli Appennini l'hanno riempito di sabbia e fango. Ancora oggi il delta del Po <b>avanza</b> nel mare: la città di <b>Adria</b>, che ha dato il nome al mare Adriatico, era un porto e ora si trova a circa 20 km dalla costa!</p>`
    },
    {
      type: 'quiz', title: `Mini-quiz: come si formano`,
      questions: [
        { type: 'mc', q: `Come si chiama la nascita delle montagne?`, options: [`Erosione`, `Orogenesi`, `Sedimentazione`], answer: 1, explain: `Orogenesi viene dal greco "oros" = monte e "genesis" = nascita.` },
        { type: 'mc', q: `Una valle a forma di U è stata scavata da…`, options: [`un fiume`, `un ghiacciaio`, `il vento`], answer: 1, explain: `I ghiacciai sono larghi e pesanti: allargano la valle dandole la forma a U.` },
        { type: 'tf', q: `L'erosione consuma le rocce e abbassa i rilievi.`, answer: true, explain: `Acqua, ghiaccio e vento consumano lentamente le rocce.` }
      ]
    },
    {
      type: 'remember', title: `Da ricordare`,
      html: `<ul>
<li><b>Montagna</b>: oltre 600 m · <b>Collina</b>: sotto 600 m · <b>Pianura</b>: piatta e bassa · <b>Mare</b>: acqua salata.</li>
<li>Le montagne nascono per <b>orogenesi</b>, l'<b>erosione</b> le consuma, la <b>sedimentazione</b> forma le pianure.</li>
<li>L'Italia è per il 42% collina, il 35% montagna e il 23% pianura.</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Paesaggio`, d: `Tutto ciò che vediamo di un luogo: elementi naturali e costruiti dall'uomo.` },
    { t: `Elemento antropico`, d: `Elemento del paesaggio costruito dall'uomo (case, strade, campi).` },
    { t: `Orogenesi`, d: `Formazione delle montagne per lo scontro tra placche.` },
    { t: `Erosione`, d: `Consumo delle rocce da parte di acqua, ghiaccio e vento.` },
    { t: `Sedimentazione`, d: `Deposito di sabbia e detriti dove l'acqua rallenta.` },
    { t: `Pianura alluvionale`, d: `Pianura formata dai detriti dei fiumi.` },
    { t: `Ghiacciaio`, d: `Grande massa di ghiaccio perenne che scende lentamente a valle.` },
    { t: `Valico`, d: `Passaggio più basso per attraversare una catena di monti.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: 'mc', q: `Qual è il limite di altezza tra collina e montagna?`, options: [`100 m`, `600 m`, `2000 m`], answer: 1, explain: `Sotto i 600 m è collina, sopra è montagna.` },
      { type: 'mc', q: `Qual è la montagna più alta d'Italia?`, options: [`Etna`, `Monte Bianco`, `Monviso`], answer: 1, explain: `Il Monte Bianco, 4805 m, sulle Alpi.` },
      { type: 'tf', q: `In Italia la forma di territorio più diffusa è la pianura.`, answer: false, explain: `La più diffusa è la collina (circa 42%); la pianura è solo il 23%.` },
      { type: 'text', q: `Come si chiama la pianura più grande d'Italia?`, answer: [`pianura padana`, `padana`, `la pianura padana`], explain: `La Pianura Padana, formata dal Po.` },
      { type: 'mc', q: `Una pianura formata dai detriti dei fiumi si chiama…`, options: [`vulcanica`, `alluvionale`, `di bonifica`], answer: 1, explain: `Alluvionale: formata dalle alluvioni dei fiumi.` },
      { type: 'mc', q: `Le colline moreniche sono formate da…`, options: [`antichi vulcani`, `detriti lasciati dai ghiacciai`, `onde del mare`], answer: 1, explain: `La morena è il materiale trasportato e lasciato dal ghiacciaio.` },
      { type: 'order', q: `Metti in ordine dalla parte più alta alla più bassa della montagna.`, items: [`neve e ghiacci`, `rocce`, `prati e pascoli`, `boschi di conifere`, `boschi di latifoglie`], explain: `Salendo fa più freddo: la vegetazione cambia fino a sparire.` },
      { type: 'mc', q: `Qual è un elemento antropico?`, options: [`un fiume`, `un ponte`, `un ghiacciaio`], answer: 1, explain: `Il ponte è costruito dall'uomo.` },
      { type: 'tf', q: `La Pianura Padana un tempo era un golfo di mare.`, answer: true, explain: `I fiumi l'hanno riempita di detriti in milioni di anni.` },
      { type: 'mc', q: `L'Etna è…`, options: [`una collina morenica`, `un vulcano attivo`, `una pianura`], answer: 1, explain: `È il vulcano attivo più alto d'Europa, in Sicilia.` },
      { type: 'text', q: `Come si chiama il punto in cui nasce un fiume?`, answer: [`sorgente`, `la sorgente`], explain: `La sorgente; il punto in cui finisce è la foce.` }
    ]
  }
});
