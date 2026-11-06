TOPIC('it', {
  id: `m1-geo-popolazione-citta`,
  title: `Popolazione e città`,
  intro: `Sulla Terra viviamo in più di <b>8 miliardi</b>, ma non siamo distribuiti in modo uniforme: ci sono metropoli affollatissime e deserti quasi vuoti. In questa lezione impariamo a <b>misurare</b> la popolazione (densità, natalità, mortalità), a capire perché le persone <b>si spostano</b> (migrazioni) e perché sempre più gente vive in <b>città</b> (urbanizzazione).`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. Quanti siamo e come si conta`,
      html: `<p>La <b>demografia</b> è la scienza che studia la popolazione: quante persone ci sono, quanti anni hanno, dove vivono, come cambiano nel tempo.</p>
<p>I dati si raccolgono soprattutto in due modi:</p>
<ul>
<li>il <b>censimento</b>: un grande conteggio di tutti gli abitanti. In Italia lo fa l'<b>ISTAT</b> (Istituto Nazionale di Statistica); dal 2018 è diventato <b>permanente</b>, cioè si fa ogni anno su un campione di famiglie;</li>
<li>l'<b>anagrafe</b> dei Comuni, che registra nascite, morti, trasferimenti di residenza.</li>
</ul>
<p>Alcuni numeri da ricordare (dati arrotondati):</p>
<table>
<tr><th>Dove</th><th>Abitanti</th></tr>
<tr><td>🌍 Mondo</td><td>circa <b>8,2 miliardi</b> (2025)</td></tr>
<tr><td>🇪🇺 Unione Europea</td><td>circa <b>450 milioni</b></td></tr>
<tr><td>🇮🇹 Italia</td><td>circa <b>59 milioni</b></td></tr>
<tr><td>🏙️ Roma (comune)</td><td>circa <b>2,75 milioni</b></td></tr>
</table>
<p>Nel <b>1800</b> gli esseri umani erano circa <b>1 miliardo</b>; nel <b>1960</b> erano 3 miliardi. La crescita rapidissima del Novecento si chiama <b>esplosione demografica</b> ed è dovuta soprattutto al calo della mortalità grazie a medicina, igiene e alimentazione.</p>`
    },
    {
      type: `text`, title: `2. La densità di popolazione`,
      html: `<p>Sapere quanti abitanti ha un Paese non basta: 59 milioni in un territorio piccolo sono "tanti", in uno enorme sono "pochi". Per confrontare si usa la <b>densità di popolazione</b>:</p>
<p style="font-size:1.2em;text-align:center"><b>densità = abitanti : superficie (km²)</b></p>
<p>Il risultato si legge "<b>abitanti per chilometro quadrato</b>" (ab/km²).</p>
<p><b>Passo per passo, l'Italia:</b></p>
<ol>
<li>abitanti ≈ 59 000 000;</li>
<li>superficie ≈ 302 000 km²;</li>
<li>59 000 000 : 302 000 ≈ <b>195 ab/km²</b>.</li>
</ol>
<p>Significa che, se distribuissimo tutti gli italiani in modo uguale, in ogni quadrato di 1 km di lato ci sarebbero circa 195 persone. Ovviamente nella realtà non è così: la <b>pianura Padana</b> e le coste sono affollate, le montagne molto meno.</p>
<table>
<tr><th>Territorio</th><th>Densità (circa)</th></tr>
<tr><td>Principato di Monaco</td><td>oltre 18 000 ab/km² (il più denso del mondo)</td></tr>
<tr><td>Bangladesh</td><td>circa 1 200 ab/km²</td></tr>
<tr><td>Paesi Bassi</td><td>circa 530 ab/km²</td></tr>
<tr><td>Italia</td><td>circa 195 ab/km²</td></tr>
<tr><td>Campania (regione più densa d'Italia)</td><td>circa 410 ab/km²</td></tr>
<tr><td>Valle d'Aosta (la meno densa)</td><td>circa 38 ab/km²</td></tr>
<tr><td>Mongolia</td><td>circa 2 ab/km²</td></tr>
</table>`
    },
    {
      type: `svg`, title: `Stessa superficie, densità diverse`,
      caption: `Tre quadrati della stessa grandezza: cambia solo il numero di persone che ci vivono.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="40" width="170" height="170" fill="#dcfce7" stroke="#166534" stroke-width="3"/>
<rect x="215" y="40" width="170" height="170" fill="#fef9c3" stroke="#a16207" stroke-width="3"/>
<rect x="410" y="40" width="170" height="170" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/>
<g fill="#166534"><circle cx="60" cy="90" r="7"/><circle cx="150" cy="160" r="7"/></g>
<g fill="#a16207"><circle cx="245" cy="70" r="7"/><circle cx="300" cy="90" r="7"/><circle cx="350" cy="75" r="7"/><circle cx="260" cy="130" r="7"/><circle cx="330" cy="140" r="7"/><circle cx="280" cy="185" r="7"/><circle cx="360" cy="185" r="7"/><circle cx="305" cy="160" r="7"/></g>
<g fill="#b91c1c">
<circle cx="430" cy="60" r="7"/><circle cx="455" cy="60" r="7"/><circle cx="480" cy="60" r="7"/><circle cx="505" cy="60" r="7"/><circle cx="530" cy="60" r="7"/><circle cx="555" cy="60" r="7"/>
<circle cx="430" cy="90" r="7"/><circle cx="455" cy="90" r="7"/><circle cx="480" cy="90" r="7"/><circle cx="505" cy="90" r="7"/><circle cx="530" cy="90" r="7"/><circle cx="555" cy="90" r="7"/>
<circle cx="430" cy="120" r="7"/><circle cx="455" cy="120" r="7"/><circle cx="480" cy="120" r="7"/><circle cx="505" cy="120" r="7"/><circle cx="530" cy="120" r="7"/><circle cx="555" cy="120" r="7"/>
<circle cx="430" cy="150" r="7"/><circle cx="455" cy="150" r="7"/><circle cx="480" cy="150" r="7"/><circle cx="505" cy="150" r="7"/><circle cx="530" cy="150" r="7"/><circle cx="555" cy="150" r="7"/>
<circle cx="430" cy="180" r="7"/><circle cx="455" cy="180" r="7"/><circle cx="480" cy="180" r="7"/><circle cx="505" cy="180" r="7"/><circle cx="530" cy="180" r="7"/><circle cx="555" cy="180" r="7"/>
</g>
<text x="105" y="30" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">Montagna</text>
<text x="300" y="30" font-size="16" text-anchor="middle" fill="#a16207" font-weight="bold">Campagna</text>
<text x="495" y="30" font-size="16" text-anchor="middle" fill="#b91c1c" font-weight="bold">Città</text>
<text x="105" y="240" font-size="15" text-anchor="middle" fill="#0f172a">2 persone</text>
<text x="300" y="240" font-size="15" text-anchor="middle" fill="#0f172a">8 persone</text>
<text x="495" y="240" font-size="15" text-anchor="middle" fill="#0f172a">30 persone</text>
<text x="105" y="265" font-size="15" text-anchor="middle" fill="#166534" font-weight="bold">densità BASSA</text>
<text x="300" y="265" font-size="15" text-anchor="middle" fill="#a16207" font-weight="bold">densità MEDIA</text>
<text x="495" y="265" font-size="15" text-anchor="middle" fill="#b91c1c" font-weight="bold">densità ALTA</text>
<text x="300" y="292" font-size="14" text-anchor="middle" fill="#334155">densità = abitanti : superficie</text>
</svg>`
    },
    {
      type: `example`, title: `Esempio pratico: la densità della tua classe`,
      html: `<p>La vostra aula misura 7 m × 8 m = <b>56 m²</b> e ci sono <b>24 alunni</b>.</p>
<ul>
<li>Densità = 24 : 56 ≈ <b>0,43 alunni per m²</b>.</li>
<li>Nel cortile (600 m²) gli stessi 24 alunni hanno una densità di 24 : 600 = <b>0,04 alunni per m²</b>: dieci volte meno affollato!</li>
</ul>
<p>I geografi fanno la stessa cosa, ma con abitanti e km². Prova con il tuo Comune: cerca su internet abitanti e superficie e dividi.</p>`
    },
    {
      type: `text`, title: `3. Perché la popolazione è distribuita così?`,
      html: `<p>Le persone si concentrano dove la vita è più facile. I <b>fattori</b> sono di due tipi:</p>
<ul>
<li><b>Fattori fisici (naturali)</b>: clima mite, acqua dolce, terreni fertili, pianure, coste. Al contrario, deserti, ghiacci, alte montagne e foreste fittissime sono poco abitati.</li>
<li><b>Fattori umani (storici ed economici)</b>: lavoro, industrie, porti, strade e ferrovie, scuole e ospedali, storia antica delle città.</li>
</ul>
<p>Circa <b>metà dell'umanità</b> vive in Asia tra Cina, India, Bangladesh, Pakistan e Indonesia. In Europa le zone più dense formano una "banana blu" che va dall'Inghilterra al Nord Italia passando per Paesi Bassi e valle del Reno.</p>`
    },
    {
      type: `text`, title: `4. Il movimento naturale: nascite e morti`,
      html: `<p>Una popolazione cambia per due motivi: il <b>movimento naturale</b> e il <b>movimento migratorio</b>.</p>
<ul>
<li><b>Tasso di natalità</b>: nati ogni 1000 abitanti in un anno.</li>
<li><b>Tasso di mortalità</b>: morti ogni 1000 abitanti in un anno.</li>
<li><b>Saldo naturale</b> = nati − morti. Se è negativo la popolazione, senza immigrazione, diminuisce.</li>
</ul>
<p>In Italia nel 2024 sono nati circa <b>370 000</b> bambini (il numero più basso dall'Unità d'Italia) e sono morte circa <b>650 000</b> persone: il saldo naturale è fortemente <b>negativo</b>. In media ogni donna ha circa <b>1,2 figli</b>, mentre per mantenere la popolazione stabile ne servirebbero circa 2,1.</p>
<p>Allo stesso tempo si vive più a lungo: la <b>speranza di vita</b> in Italia supera gli <b>83 anni</b>, una delle più alte al mondo. Risultato: l'Italia è uno dei Paesi più <b>anziani</b> del pianeta (età media circa 47 anni).</p>`
    },
    {
      type: `svg`, title: `La piramide delle età`,
      caption: `A sinistra un Paese giovane (base larga, tanti bambini); a destra un Paese anziano come l'Italia (base stretta, tanti adulti e anziani).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<g fill="#3b82f6"><rect x="40" y="200" width="110" height="20"/><rect x="60" y="178" width="90" height="20"/><rect x="80" y="156" width="70" height="20"/><rect x="100" y="134" width="50" height="20"/><rect x="118" y="112" width="32" height="20"/><rect x="134" y="90" width="16" height="20"/></g>
<g fill="#ec4899"><rect x="150" y="200" width="110" height="20"/><rect x="150" y="178" width="90" height="20"/><rect x="150" y="156" width="70" height="20"/><rect x="150" y="134" width="50" height="20"/><rect x="150" y="112" width="32" height="20"/><rect x="150" y="90" width="16" height="20"/></g>
<g fill="#3b82f6"><rect x="390" y="200" width="40" height="20"/><rect x="378" y="178" width="52" height="20"/><rect x="370" y="156" width="60" height="20"/><rect x="365" y="134" width="65" height="20"/><rect x="372" y="112" width="58" height="20"/><rect x="388" y="90" width="42" height="20"/></g>
<g fill="#ec4899"><rect x="430" y="200" width="40" height="20"/><rect x="430" y="178" width="52" height="20"/><rect x="430" y="156" width="60" height="20"/><rect x="430" y="134" width="67" height="20"/><rect x="430" y="112" width="62" height="20"/><rect x="430" y="90" width="48" height="20"/></g>
<text x="150" y="40" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Paese giovane</text>
<text x="150" y="62" font-size="14" text-anchor="middle" fill="#9a3412">(es. Niger, Nigeria)</text>
<text x="430" y="40" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Paese anziano</text>
<text x="430" y="62" font-size="14" text-anchor="middle" fill="#9a3412">(es. Italia, Giappone)</text>
<text x="20" y="215" font-size="13" fill="#334155">0-14</text>
<text x="20" y="105" font-size="13" fill="#334155">80+</text>
<text x="85" y="250" font-size="15" fill="#1d4ed8" font-weight="bold">maschi</text>
<text x="170" y="250" font-size="15" fill="#be185d" font-weight="bold">femmine</text>
<text x="365" y="250" font-size="15" fill="#1d4ed8" font-weight="bold">maschi</text>
<text x="440" y="250" font-size="15" fill="#be185d" font-weight="bold">femmine</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#334155">Ogni barra = una fascia di età. Più è lunga, più persone ci sono.</text>
</svg>`
    },
    {
      type: `quiz`, title: `Mini-quiz: densità e natalità`,
      questions: [
        { type: `mc`, q: `Come si calcola la densità di popolazione?`, options: [`abitanti × superficie`, `abitanti : superficie`, `superficie : abitanti`], answer: 1, explain: `Si divide il numero di abitanti per i km² di superficie.` },
        { type: `num`, q: `Un'isola ha 5 000 abitanti e una superficie di 50 km². Qual è la sua densità (ab/km²)?`, answer: 100, tol: 0, unit: `ab/km²`, explain: `5 000 : 50 = 100 ab/km².` },
        { type: `tf`, q: `In Italia oggi nascono più bambini di quante persone muoiano.`, answer: false, explain: `È il contrario: i morti superano i nati, il saldo naturale è negativo.` }
      ]
    },
    {
      type: `text`, title: `5. Le migrazioni`,
      html: `<p>Una <b>migrazione</b> è lo spostamento di persone da un luogo all'altro per viverci. Chi parte è un <b>emigrante</b> (visto dal Paese di partenza), chi arriva è un <b>immigrato</b> (visto dal Paese di arrivo): è la stessa persona!</p>
<ul>
<li><b>Migrazioni interne</b>: dentro lo stesso Paese (es. dal Sud al Nord Italia negli anni '50-'60).</li>
<li><b>Migrazioni internazionali</b>: da un Paese all'altro.</li>
<li><b>Volontarie</b> (lavoro, studio, famiglia) o <b>forzate</b> (guerre, persecuzioni, disastri: chi fugge può chiedere protezione come <b>rifugiato</b>).</li>
</ul>
<p>I geografi parlano di <b>fattori di spinta</b> (push: ciò che spinge ad andare via, come povertà o guerra) e <b>fattori di attrazione</b> (pull: ciò che attira, come lavoro e sicurezza).</p>
<p><b>Gli italiani migranti.</b> Tra il 1876 e il 1976 circa <b>24 milioni</b> di italiani sono emigrati verso le Americhe (Stati Uniti, Argentina, Brasile), l'Australia e il Nord Europa. Oggi l'Italia è anche un Paese di <b>immigrazione</b>: vivono qui oltre <b>5 milioni</b> di cittadini stranieri (circa il 9% della popolazione), e allo stesso tempo molti giovani italiani partono per lavorare all'estero.</p>`
    },
    {
      type: `widget`, title: `Gioco: spinta o attrazione?`,
      widget: `classify`,
      caption: `Ogni motivo spinge le persone a partire dal proprio Paese (spinta) oppure le attira verso un altro (attrazione)?`,
      options: {
        groups: [`⬅️ Fattore di spinta (push)`, `➡️ Fattore di attrazione (pull)`],
        items: [
          [`💣 Guerra nel proprio Paese`, 0], [`🏜️ Siccità e raccolti persi`, 0], [`📉 Disoccupazione`, 0], [`⛓️ Persecuzioni politiche`, 0],
          [`💼 Offerte di lavoro`, 1], [`🎓 Università prestigiose`, 1], [`🏥 Ospedali e servizi`, 1], [`👨‍👩‍👧 Parenti già emigrati`, 1]
        ]
      }
    },
    {
      type: `text`, title: `6. L'urbanizzazione: tutti in città`,
      html: `<p>L'<b>urbanizzazione</b> è lo spostamento della popolazione dalle campagne alle città e la crescita delle città stesse.</p>
<ul>
<li>Nel 1800 in città viveva meno del <b>10%</b> dell'umanità.</li>
<li>Nel 1950 circa il <b>30%</b>.</li>
<li>Intorno al <b>2007</b>, per la prima volta nella storia, gli abitanti delle città hanno superato quelli delle campagne.</li>
</ul>
<p>Parole delle città:</p>
<ul>
<li><b>Metropoli</b>: grande città, centro di servizi e attività.</li>
<li><b>Area metropolitana</b>: la città con tutti i comuni intorno, uniti da pendolari, strade e trasporti (es. Milano e la sua cintura).</li>
<li><b>Megalopoli</b>: più aree metropolitane saldate tra loro (es. Boston-Washington negli USA, Tokyo-Osaka in Giappone).</li>
<li><b>Megacittà</b>: area urbana con più di <b>10 milioni</b> di abitanti. Oggi sono oltre 30, quasi tutte in Asia, Africa e America Latina.</li>
</ul>
<p>Le città offrono lavoro e servizi, ma hanno anche problemi: traffico, inquinamento, costo delle case, e nei Paesi poveri enormi quartieri di baracche (<b>slum</b>, <i>favelas</i> in Brasile, <i>bidonvilles</i> in Africa francofona).</p>`
    },
    {
      type: `3d`, title: `Le grandi città del mondo sul globo`,
      scene: `globe`,
      caption: `Ruota il globo: in arancione alcune delle megacittà più grandi, in verde le principali città italiane.`,
      options: {
        points: [
          { lat: -6.2, lon: 106.8, label: `Giacarta`, color: `#f97316` },
          { lat: 23.8, lon: 90.4, label: `Dacca`, color: `#f97316` },
          { lat: 35.7, lon: 139.7, label: `Tokyo`, color: `#f97316` },
          { lat: 28.6, lon: 77.2, label: `Nuova Delhi`, color: `#f97316` },
          { lat: 31.2, lon: 121.5, label: `Shanghai`, color: `#f97316` },
          { lat: 30.0, lon: 31.2, label: `Il Cairo`, color: `#f97316` },
          { lat: 6.5, lon: 3.4, label: `Lagos`, color: `#f97316` },
          { lat: -23.5, lon: -46.6, label: `San Paolo`, color: `#f97316` },
          { lat: 19.4, lon: -99.1, label: `Città del Messico`, color: `#f97316` },
          { lat: 40.7, lon: -74.0, label: `New York`, color: `#f97316` },
          { lat: 41.9, lon: 12.5, label: `Roma`, color: `#22c55e` },
          { lat: 45.46, lon: 9.19, label: `Milano`, color: `#22c55e` },
          { lat: 40.85, lon: 14.27, label: `Napoli`, color: `#22c55e` },
          { lat: 45.07, lon: 7.69, label: `Torino`, color: `#22c55e` }
        ]
      }
    },
    {
      type: `example`, title: `Esempio pratico: le città italiane più popolose`,
      html: `<table>
<tr><th>#</th><th>Comune</th><th>Abitanti (circa)</th></tr>
<tr><td>1</td><td>Roma</td><td>2 750 000</td></tr>
<tr><td>2</td><td>Milano</td><td>1 370 000</td></tr>
<tr><td>3</td><td>Napoli</td><td>910 000</td></tr>
<tr><td>4</td><td>Torino</td><td>850 000</td></tr>
<tr><td>5</td><td>Palermo</td><td>630 000</td></tr>
</table>
<p>Attenzione: se contiamo l'<b>area metropolitana</b>, Milano supera i 3 milioni di persone perché ogni giorno centinaia di migliaia di <b>pendolari</b> arrivano dai comuni vicini. La <b>Lombardia</b> è la regione più popolosa (circa 10 milioni), la <b>Valle d'Aosta</b> la meno popolosa (circa 123 000).</p>`
    },
    {
      type: `widget`, title: `Linea del tempo: la storia delle città`,
      widget: `timeline`,
      caption: `Dalle prime città della Mesopotamia alle megacittà di oggi.`,
      options: {
        unit: `anni`,
        events: [
          { year: -3500, label: `Uruk, una delle prime città`, icon: `🏛️` },
          { year: 100, label: `Roma antica: circa 1 milione di abitanti`, icon: `🏟️` },
          { year: 1800, label: `Pechino e Londra verso il milione`, icon: `🏭` },
          { year: 1804, label: `Il mondo arriva a 1 miliardo di persone`, icon: `🌍` },
          { year: 1950, label: `New York è la prima megacittà (oltre 10 milioni)`, icon: `🗽` },
          { year: 2007, label: `Più persone in città che in campagna`, icon: `🏙️` },
          { year: 2022, label: `Il mondo supera gli 8 miliardi`, icon: `👥` }
        ]
      }
    },
    {
      type: `curiosity`, title: `Lo sapevi che… nel Principato di Monaco non c'è campagna?`,
      html: `<p>Monaco è grande appena <b>2 km²</b> (meno di un quartiere di Roma!) e ci vivono circa <b>38 000</b> persone: la densità supera i <b>18 000 ab/km²</b>. Per avere più spazio, il Principato ha costruito nuovi quartieri <b>strappando terra al mare</b>, come il quartiere di Fontvieille e il nuovo Mareterra.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… le città più grandi cambiano classifica?`,
      html: `<p>Per decenni la città più grande del mondo è stata <b>Tokyo</b>. Ma la classifica dipende da <b>dove si mette il confine</b> della città! Con un nuovo metodo di calcolo, nel 2025 l'ONU ha indicato al primo posto <b>Giacarta</b> (Indonesia, oltre 40 milioni), seguita da <b>Dacca</b> (Bangladesh) e Tokyo. E Giacarta sta sprofondando di alcuni centimetri l'anno, tanto che l'Indonesia sta costruendo una nuova capitale, <b>Nusantara</b>, sull'isola del Borneo.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se densità, saldo naturale e urbanizzazione ti sembrano solo numeri, prova queste strade.`,
      tabs: [
        {
          label: `🚌 L'autobus`,
          html: `<p>Immagina un <b>autobus</b> sempre della stessa grandezza:</p>
<ul>
<li>alle 6 del mattino ci sono 5 passeggeri: <b>densità bassa</b>, ti siedi dove vuoi;</li>
<li>alle 8, ora di scuola, ce ne sono 90: <b>densità altissima</b>, sei schiacciato!</li>
</ul>
<p>Il <b>saldo</b> funziona come le fermate: a ogni fermata qualcuno sale (nascite, immigrati) e qualcuno scende (morti, emigranti). Se scendono più persone di quante ne salgono, l'autobus si svuota.</p>`
        },
        {
          label: `🧮 Con i cubetti`,
          html: `<p>Un'area di <b>4 × 5 = 20 quadretti</b> rappresenta 20 km². Ogni cubetto è 10 persone. Cambia i numeri con i cursori: con l'altezza 1 la densità è 10 ab/km², se impili i cubetti (palazzi!) la stessa area contiene molte più persone. È proprio ciò che fanno le città: <b>crescono in altezza</b> con i grattacieli.</p>`,
          scene: `blocks`,
          options: { mode: `volume`, a: 4, b: 5, c: 3 }
        },
        {
          label: `🇯🇵🇳🇬 Due Paesi a confronto`,
          html: `<p>Confrontiamo due Paesi con quasi la stessa popolazione nel 2000 e destini opposti:</p>
<ul>
<li>🇯🇵 <b>Giappone</b>: pochissime nascite, la popolazione <b>cala</b> dal 2010 circa; quasi 3 persone su 10 hanno più di 65 anni. Ci sono più pannolini venduti per anziani che per neonati!</li>
<li>🇳🇬 <b>Nigeria</b>: tante nascite, età media sotto i <b>20 anni</b>; la popolazione cresce velocissima e Lagos è una delle città che cresce di più al mondo.</li>
</ul>
<p>L'Italia assomiglia molto al Giappone: per questo si parla di <b>inverno demografico</b>.</p>`
        },
        {
          label: `🌐 Sul globo`,
          html: `<p>Guarda il mondo come lo vedrebbe un astronauta di notte: le luci delle città mostrano dove viviamo. Ecco le zone più popolate (Asia meridionale e orientale, Europa, coste americane) e alcuni luoghi quasi vuoti (Sahara, Siberia, Amazzonia, Australia interna).</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 25, lon: 80, label: `Valle del Gange: densissima`, color: `#ef4444` },
              { lat: 32, lon: 115, label: `Cina orientale: densissima`, color: `#ef4444` },
              { lat: 50, lon: 6, label: `Europa centrale: densa`, color: `#f97316` },
              { lat: 23, lon: 10, label: `Sahara: quasi vuoto`, color: `#22c55e` },
              { lat: 65, lon: 110, label: `Siberia: quasi vuota`, color: `#22c55e` },
              { lat: -25, lon: 130, label: `Australia interna: quasi vuota`, color: `#22c55e` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: come cambia una popolazione`,
      nodes: [
        { id: `pop`, label: `Popolazione`, x: 50, y: 8, color: `#0ea5e9`, html: `L'insieme delle persone che vivono in un territorio.`, why: `Si studia con la <b>demografia</b>. Il primo a usare la statistica per studiare nascite e morti fu l'inglese <b>John Graunt</b> nel 1662, analizzando i registri dei morti di Londra. In Italia il primo censimento nazionale è del <b>1861</b>, subito dopo l'Unità.` },
        { id: `dens`, label: `Densità`, x: 15, y: 32, color: `#22c55e`, html: `Abitanti : km². Dice quanto è "affollato" un territorio.`, why: `Il solo numero di abitanti non permette di confrontare Paesi di grandezza diversa: dividendo per la superficie otteniamo un valore "per unità", come la velocità (km all'ora) o il prezzo al kg.` },
        { id: `fatt`, label: `Fattori fisici e umani`, x: 15, y: 62, color: `#16a34a`, html: `Clima, acqua, pianure, coste, lavoro, trasporti.`, why: `Le prime civiltà nacquero lungo i fiumi (Nilo, Tigri ed Eufrate, Indo, Fiume Giallo) perché l'acqua permetteva l'agricoltura. Le città di oggi sono spesso nello stesso posto da millenni.` },
        { id: `nat`, label: `Movimento naturale`, x: 50, y: 35, color: `#ec4899`, html: `Nati − morti = saldo naturale.`, why: `Per millenni nascite e morti si sono quasi bilanciate. Con la medicina moderna (vaccini, antibiotici, igiene) la mortalità è crollata prima della natalità: per questo la popolazione è esplosa. Poi, con l'istruzione e il lavoro delle donne, anche le nascite sono diminuite: è la <b>transizione demografica</b>.` },
        { id: `mig`, label: `Migrazioni`, x: 83, y: 35, color: `#f97316`, html: `Spostamenti di persone: saldo migratorio = immigrati − emigrati.`, why: `L'essere umano è sempre migrato: <i>Homo sapiens</i> è partito dall'Africa più di 60 000 anni fa. Le cause si spiegano con i fattori di <b>spinta</b> e di <b>attrazione</b>, un modello proposto dal geografo <b>Ernst Ravenstein</b> nel 1885.` },
        { id: `eta`, label: `Struttura per età`, x: 50, y: 65, color: `#a855f7`, html: `La piramide delle età: giovani, adulti, anziani.`, why: `Dipende dalle nascite e dalla durata della vita. Poche nascite e vita lunga fanno una piramide "a trottola" o "a urna", come in Italia: meno lavoratori giovani e più pensionati.` },
        { id: `urb`, label: `Urbanizzazione`, x: 83, y: 65, color: `#ef4444`, html: `Sempre più persone vivono in città.`, why: `Con la <b>Rivoluzione industriale</b> (dal 1750 in Inghilterra) il lavoro si è spostato dai campi alle fabbriche, che erano in città. Oggi la città attira con servizi, università e lavoro nel terziario.` },
        { id: `mega`, label: `Metropoli e megacittà`, x: 83, y: 92, color: `#b91c1c`, html: `Aree urbane enormi, oltre 10 milioni di abitanti.`, why: `Quando una città cresce si "salda" con i comuni vicini e nasce un'area metropolitana; se più aree si uniscono si parla di <b>megalopoli</b>, termine reso famoso dal geografo francese <b>Jean Gottmann</b> nel 1961.` }
      ],
      edges: [
        [`pop`, `dens`, `si misura con`], [`dens`, `fatt`, `dipende da`], [`pop`, `nat`, `cambia per`], [`pop`, `mig`, `cambia per`],
        [`nat`, `eta`, `forma`], [`mig`, `urb`, `alimenta`], [`urb`, `mega`, `crea`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: migrazioni e città`,
      questions: [
        { type: `mc`, q: `Una città con più di 10 milioni di abitanti si chiama…`, options: [`megacittà`, `comune`, `borgo`], answer: 0, explain: `Megacittà: oltre 10 milioni di abitanti.` },
        { type: `tf`, q: `Emigrante e immigrato possono essere la stessa persona.`, answer: true, explain: `Dipende dal punto di vista: emigrante per il Paese che lascia, immigrato per quello in cui arriva.` },
        { type: `mc`, q: `Intorno a quale anno la popolazione urbana mondiale ha superato quella rurale?`, options: [`1900`, `1950`, `2007`], answer: 2, explain: `Intorno al 2007-2008, per la prima volta nella storia.` }
      ]
    }
  ],
  glossary: [
    { t: `Demografia`, d: `Scienza che studia la popolazione e i suoi cambiamenti.` },
    { t: `Censimento`, d: `Conteggio di tutti gli abitanti di un Paese; in Italia lo cura l'ISTAT.` },
    { t: `Densità di popolazione`, d: `Numero medio di abitanti per km²: abitanti : superficie.` },
    { t: `Tasso di natalità / mortalità`, d: `Nati / morti in un anno ogni 1000 abitanti.` },
    { t: `Saldo naturale`, d: `Differenza tra nati e morti.` },
    { t: `Saldo migratorio`, d: `Differenza tra chi arriva (immigrati) e chi parte (emigrati).` },
    { t: `Speranza di vita`, d: `Numero medio di anni che una persona può aspettarsi di vivere alla nascita.` },
    { t: `Piramide delle età`, d: `Grafico che mostra quante persone ci sono in ogni fascia di età, maschi e femmine.` },
    { t: `Migrazione`, d: `Spostamento di persone da un luogo a un altro per viverci.` },
    { t: `Rifugiato`, d: `Persona costretta a fuggire dal proprio Paese per guerra o persecuzione, che riceve protezione internazionale.` },
    { t: `Urbanizzazione`, d: `Crescita della popolazione che vive in città.` },
    { t: `Area metropolitana`, d: `Grande città con i comuni vicini a essa collegati.` },
    { t: `Megacittà`, d: `Area urbana con più di 10 milioni di abitanti.` },
    { t: `Pendolare`, d: `Chi si sposta ogni giorno da un comune a un altro per lavoro o studio.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quanti sono circa gli abitanti della Terra oggi?`, options: [`800 milioni`, `8 miliardi`, `80 miliardi`], answer: 1, explain: `Abbiamo superato gli 8 miliardi nel 2022.` },
      { type: `num`, q: `Una regione ha 2 000 000 di abitanti e 10 000 km² di superficie. Qual è la densità?`, answer: 200, tol: 0, unit: `ab/km²`, explain: `2 000 000 : 10 000 = 200 ab/km².` },
      { type: `mc`, q: `Qual è all'incirca la densità dell'Italia?`, options: [`20 ab/km²`, `195 ab/km²`, `1 200 ab/km²`], answer: 1, explain: `59 milioni di abitanti su 302 000 km² ≈ 195 ab/km².` },
      { type: `tf`, q: `Le zone di montagna e i deserti hanno di solito una densità alta.`, answer: false, explain: `Clima e terreno difficili rendono questi luoghi poco abitati: densità bassa.` },
      { type: `mc`, q: `Il saldo naturale è…`, options: [`immigrati − emigrati`, `nati − morti`, `abitanti : superficie`], answer: 1, explain: `Saldo naturale = nati − morti.` },
      { type: `num`, q: `In un paese nascono 30 bambini e muoiono 45 persone in un anno. Qual è il saldo naturale?`, answer: -15, tol: 0, explain: `30 − 45 = −15: il saldo è negativo.` },
      { type: `mc`, q: `Quale di questi è un fattore di SPINTA?`, options: [`Una guerra`, `Un'offerta di lavoro all'estero`, `Una buona università`], answer: 0, explain: `La guerra spinge ad andare via; gli altri due attirano.` },
      { type: `text`, q: `Come si chiama un'area urbana con più di 10 milioni di abitanti?`, answer: [`megacittà`, `megacitta`, `una megacittà`], explain: `Megacittà, come Tokyo, Giacarta o Dacca.` },
      { type: `mc`, q: `Qual è il comune più popoloso d'Italia?`, options: [`Milano`, `Roma`, `Napoli`], answer: 1, explain: `Roma, con circa 2,75 milioni di abitanti.` },
      { type: `tf`, q: `Tra Ottocento e Novecento milioni di italiani sono emigrati verso le Americhe.`, answer: true, explain: `Circa 24 milioni tra il 1876 e il 1976.` },
      { type: `order`, q: `Metti in ordine dalla densità più BASSA alla più ALTA.`, items: [`Mongolia`, `Italia`, `Bangladesh`, `Principato di Monaco`], explain: `Mongolia ~2, Italia ~195, Bangladesh ~1 200, Monaco oltre 18 000 ab/km².` },
      { type: `mc`, q: `Perché la popolazione italiana sta invecchiando?`, options: [`Poche nascite e vita sempre più lunga`, `Molte nascite`, `Nessuno emigra`], answer: 0, explain: `Circa 1,2 figli per donna e una speranza di vita sopra gli 83 anni.` }
    ],
    gen: [[`percent`, 2]]
  }
});
