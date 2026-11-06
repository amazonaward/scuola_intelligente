TOPIC('it', {
  id: `m1-geo-clima-ambienti`,
  title: `Climi e ambienti`,
  intro: `Perché a Palermo d'inverno si gira in maglietta mentre a Mosca si scia sul ghiaccio? Perché sulle Alpi crescono abeti e in Sicilia ulivi? Tutto dipende dal <b>clima</b>, che a sua volta dipende da latitudine, altitudine, mare e venti. In Europa troviamo climi molto diversi, e ognuno ha i suoi <b>ambienti</b> naturali, con piante e animali adatti.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Tempo atmosferico e clima`,
      html: `<p>Attenzione a non confonderli:</p><ul><li>il <b>tempo atmosferico</b> è la situazione dell'atmosfera in un luogo e in un <b>momento</b> preciso («oggi a Torino piove e ci sono 12 °C»);</li><li>il <b>clima</b> è l'insieme delle condizioni <b>medie</b> di un luogo, calcolate su un periodo lungo, di solito <b>30 anni</b> («a Torino gli inverni sono freddi e le estati calde e afose»).</li></ul><p>Gli <b>elementi</b> del clima sono ciò che si misura: <b>temperatura</b> (termometro), <b>precipitazioni</b> (pluviometro, in mm), <b>umidità</b> (igrometro), <b>pressione</b> (barometro), <b>venti</b> (anemometro e banderuola).</p><p>Un dato importante è l'<b>escursione termica annua</b>: la differenza tra la temperatura media del mese più caldo e quella del mese più freddo.</p>`
    },
    {
      type: `text`,
      title: `2. I fattori del clima: perché i climi sono diversi`,
      html: `<ol><li><b>Latitudine</b>: vicino all'Equatore i raggi del Sole arrivano quasi perpendicolari e scaldano molto; verso i poli arrivano inclinati e la stessa energia si distribuisce su una superficie più grande. Per questo più si va a nord, più fa freddo.</li><li><b>Altitudine</b>: salendo l'aria è più rarefatta e trattiene meno calore. La temperatura scende in media di circa <b>0,6 °C ogni 100 m</b> (circa 6 °C ogni 1.000 m).</li><li><b>Distanza dal mare</b>: l'acqua si scalda e si raffredda più lentamente della terra. Il mare <b>mitiga</b> il clima: inverni più miti, estati più fresche, escursione termica piccola. Nell'interno dei continenti l'escursione è grande.</li><li><b>Correnti marine</b>: la <b>Corrente del Golfo</b> (con la sua continuazione, la Corrente Nord Atlantica) porta acqua calda dai Caraibi fino alle coste dell'Europa occidentale e della Norvegia, rendendole molto più miti di altre zone alla stessa latitudine.</li><li><b>Venti</b> dominanti: in Europa soffiano soprattutto <b>venti occidentali</b> dall'Atlantico, umidi e miti.</li><li><b>Rilievi</b>: le montagne fanno da barriera. Le Alpi riparano l'Italia dai venti freddi del nord; il lato esposto ai venti umidi riceve più pioggia.</li></ol>`
    },
    {
      type: `svg`,
      title: `Perché ai poli fa più freddo?`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#0f172a"/><circle cx="420" cy="160" r="130" fill="#38bdf8"/><path d="M420 30 A130 130 0 0 1 525 85 L420 160 Z" fill="#e0f2fe" opacity="0.6"/><ellipse cx="420" cy="160" rx="130" ry="14" fill="none" stroke="#f97316" stroke-width="3"/><text x="430" y="182" font-size="15" font-family="sans-serif" fill="#7c2d12" font-weight="bold">Equatore</text><g stroke="#fde047" stroke-width="5"><line x1="20" y1="145" x2="290" y2="145"/><line x1="20" y1="175" x2="290" y2="175"/><line x1="20" y1="45" x2="359" y2="45"/><line x1="20" y1="75" x2="322" y2="75"/></g><text x="40" y="130" font-size="15" font-family="sans-serif" fill="#fde047">raggi quasi perpendicolari:</text><text x="40" y="205" font-size="15" font-family="sans-serif" fill="#fde047">energia concentrata → caldo</text><rect x="288" y="145" width="6" height="30" fill="#ef4444"/><path d="M359 45 L322 75" stroke="#3b82f6" stroke-width="8"/><text x="40" y="30" font-size="15" font-family="sans-serif" fill="#93c5fd">raggi inclinati: energia distribuita su più spazio → freddo</text><text x="420" y="300" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#e2e8f0">stessa quantità di raggi, superfici diverse</text></svg>`,
      caption: `Due fasci di raggi uguali: all'Equatore colpiscono una piccola superficie (in rosso), vicino al polo una superficie molto più ampia (in blu). Ogni metro quadrato riceve meno energia.`
    },
    {
      type: `example`,
      title: `Esempio pratico: salire in montagna`,
      html: `<p>A <b>Courmayeur</b> (circa 1.200 m) ci sono 20 °C. Quanti gradi ci saranno sulla <b>Punta Helbronner</b> (circa 3.460 m), raggiungibile con la funivia?</p><ol><li>Dislivello: 3.460 − 1.200 = 2.260 m</li><li>Calo di temperatura: 2.260 : 100 × 0,6 ≈ 13,6 °C</li><li>Temperatura in quota: 20 − 13,6 ≈ <b>6 °C</b></li></ol><p>Per questo in montagna, anche in piena estate, serve sempre una giacca!</p>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 1`,
      questions: [
        { type: `tf`, q: `Il clima è la situazione dell'atmosfera di oggi.`, answer: false, explain: `Quello è il tempo atmosferico; il clima è la media di almeno 30 anni.` },
        { type: `num`, q: `Di quanti gradi scende circa la temperatura salendo di 1.000 m?`, answer: 6, tol: 0.5, unit: `°C`, explain: `Circa 0,6 °C ogni 100 m, quindi circa 6 °C ogni 1.000 m.` },
        { type: `mc`, q: `Quale corrente rende miti le coste della Norvegia?`, options: [`Corrente del Labrador`, `Corrente del Golfo (Nord Atlantica)`, `Corrente di Humboldt`, `Nessuna`], answer: 1, explain: `Porta acque calde dai Caraibi verso l'Europa nord-occidentale.` }
      ]
    },
    {
      type: `text`,
      title: `3. Le fasce climatiche della Terra e d'Europa`,
      html: `<p>Tropici e circoli polari dividono la Terra in <b>zone astronomiche</b>: una zona <b>torrida</b> (tra i tropici), due zone <b>temperate</b> e due zone <b>polari</b>. L'Europa si trova quasi tutta nella zona <b>temperata boreale</b>, con l'estremo nord nella zona polare. Al suo interno troviamo questi climi:</p><table><tr><th>Clima</th><th>Dove</th><th>Caratteristiche</th></tr><tr><td><b>Oceanico (atlantico)</b></td><td>Irlanda, Gran Bretagna, Francia occidentale, Belgio, Paesi Bassi, coste norvegesi</td><td>Inverni miti, estati fresche, piogge frequenti tutto l'anno, piccola escursione termica</td></tr><tr><td><b>Continentale</b></td><td>Europa centrale e orientale (Germania orientale, Polonia, Ucraina, Russia europea)</td><td>Inverni lunghi e molto freddi, estati calde, piogge soprattutto d'estate, grande escursione</td></tr><tr><td><b>Mediterraneo</b></td><td>Coste di Spagna, Francia meridionale, Italia, Grecia, Croazia</td><td>Estati calde e secche, inverni miti e piovosi</td></tr><tr><td><b>Alpino (di montagna)</b></td><td>Alpi, Pirenei, Carpazi, Caucaso</td><td>Inverni freddi e nevosi, estati fresche; cambia con l'altitudine</td></tr><tr><td><b>Subartico (boreale)</b></td><td>Scandinavia interna, Finlandia, Russia del nord</td><td>Inverni lunghissimi e gelidi, estati brevi</td></tr><tr><td><b>Polare (della tundra)</b></td><td>Islanda settentrionale, estremo nord di Scandinavia e Russia, Svalbard</td><td>Freddo quasi tutto l'anno, suolo gelato (permafrost)</td></tr><tr><td><b>Steppico (semiarido)</b></td><td>Russia meridionale, coste del Caspio, parte della Spagna interna</td><td>Poche piogge, estati calde, inverni freddi</td></tr></table>`
    },
    {
      type: `3d`,
      title: `Le fasce sul globo`,
      scene: `globe`,
      options: {
        points: [
          { lat: 53.35, lon: -6.26, label: `Dublino – oceanico`, color: `#0ea5e9` },
          { lat: 55.76, lon: 37.62, label: `Mosca – continentale`, color: `#7c3aed` },
          { lat: 38.12, lon: 13.36, label: `Palermo – mediterraneo`, color: `#f59e0b` },
          { lat: 46.0, lon: 7.75, label: `Zermatt – alpino`, color: `#78716c` },
          { lat: 65.0, lon: 25.47, label: `Oulu (Finlandia) – subartico`, color: `#15803d` },
          { lat: 78.22, lon: 15.65, label: `Svalbard – polare`, color: `#e2e8f0` },
          { lat: 46.35, lon: 48.04, label: `Astrachan' – steppico`, color: `#ca8a04` },
          { lat: 69.65, lon: 18.96, label: `Tromsø – mite per la latitudine (Corrente del Golfo)`, color: `#06b6d4` }
        ]
      },
      caption: `Ruota il globo: Tromsø è oltre il Circolo polare artico, ma grazie alla Corrente del Golfo il suo porto non gela d'inverno.`
    },
    {
      type: `text`,
      title: `4. Gli ambienti naturali d'Europa`,
      html: `<p>Ogni clima favorisce una certa <b>vegetazione</b> e certi <b>animali</b>: insieme formano un <b>ambiente</b> (o bioma).</p><ul><li><b>Tundra</b> (clima polare): niente alberi, solo muschi, licheni e arbusti nani. Animali: renne, volpi artiche, lemming, uccelli migratori.</li><li><b>Taiga</b> o foresta di conifere (clima subartico): enormi foreste di <b>abeti, pini, larici, betulle</b>. Animali: alci, lupi, orsi bruni, linci.</li><li><b>Foresta di latifoglie</b> (clima oceanico e continentale umido): <b>querce, faggi, castagni, carpini</b> che perdono le foglie in autunno. Oggi in gran parte sostituita da campi e città. Animali: cervi, cinghiali, scoiattoli, volpi.</li><li><b>Prateria e steppa</b> (clima continentale secco e steppico): distese di erbe; oggi coltivate a cereali (il «granaio» dell'Ucraina). Animali: roditori, rapaci, saighe.</li><li><b>Macchia mediterranea</b> (clima mediterraneo): arbusti sempreverdi con foglie piccole e coriacee per resistere alla siccità: <b>leccio, corbezzolo, mirto, lentisco, ginestra, rosmarino</b>, e coltivazioni di ulivo, vite, agrumi.</li><li><b>Ambiente alpino</b>: la vegetazione cambia salendo, a <b>fasce</b> (vedi sotto). Animali: stambecchi, camosci, marmotte, aquile reali.</li></ul>`
    },
    {
      type: `svg`,
      title: `Salire una montagna è come viaggiare verso il Polo`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#e0f2fe"/><polygon points="60,300 300,20 540,300" fill="#a3a3a3"/><polygon points="250,78 300,20 350,78" fill="#ffffff"/><polygon points="215,118 250,78 350,78 385,118" fill="#a8a29e"/><polygon points="170,170 215,118 385,118 430,170" fill="#86efac"/><polygon points="120,228 170,170 430,170 480,228" fill="#15803d"/><polygon points="60,300 120,228 480,228 540,300" fill="#65a30d"/><g font-family="sans-serif" font-size="14" fill="#0f172a"><text x="345" y="45">nevi perenni ≈ polo</text><text x="345" y="62">(oltre 2.800–3.000 m)</text><text x="375" y="100">rocce e licheni</text><text x="375" y="116">≈ tundra</text><text x="440" y="150">praterie alpine</text><text x="440" y="166">(2.000–2.500 m)</text><text x="470" y="205" fill="#14532d">conifere ≈ taiga</text><text x="470" y="221" fill="#14532d">(1.000–2.000 m)</text><text x="10" y="270" fill="#14532d">latifoglie e coltivi</text><text x="10" y="286" fill="#14532d">(fino a 1.000 m)</text></g><text x="300" y="316" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">quote indicative, sulle Alpi; cambiano con l'esposizione al sole</text></svg>`,
      caption: `Le fasce di vegetazione in montagna ripetono, in pochi chilometri di salita, quello che si incontra viaggiando per migliaia di chilometri verso nord.`
    },
    {
      type: `widget`,
      title: `Abbina l'ambiente al suo abitante`,
      widget: `match`,
      options: { pairs: [ [`Tundra`, `🦌 Renna`], [`Taiga`, `🫎 Alce`], [`Foresta di latifoglie`, `🐗 Cinghiale`], [`Macchia mediterranea`, `🌿 Corbezzolo e mirto`], [`Ambiente alpino`, `🐐 Stambecco`], [`Steppa`, `🌾 Distese d'erba e cereali`] ] },
      caption: `Ogni ambiente ha le sue piante e i suoi animali.`
    },
    {
      type: `text`,
      title: `5. I climi dell'Italia`,
      html: `<p>L'Italia è lunga e stretta, attraversata da montagne e circondata dal mare: per questo ha climi diversi in poco spazio.</p><ul><li><b>Alpino</b>: sulle Alpi, inverni freddi e nevosi, estati fresche.</li><li><b>Padano</b> (continentale): nella Pianura Padana, inverni freddi con nebbia, estati calde e afose, grande escursione termica. Le Alpi bloccano i venti freddi, ma anche il ricambio d'aria (e l'inquinamento ristagna).</li><li><b>Appenninico</b>: sui rilievi centro-meridionali, inverni freddi e nevosi, estati abbastanza fresche.</li><li><b>Mediterraneo</b>: sulle coste e nelle isole, inverni miti, estati calde e secche. Sulla costa <b>adriatica</b> gli inverni sono più freddi (vento di <b>bora</b> da nord-est), su quella <b>tirrenica</b> più miti.</li></ul>`
    },
    {
      type: `example`,
      title: `Esempio pratico: leggere un climogramma`,
      html: `<p>Un <b>climogramma</b> mostra le temperature medie mensili (linea) e le precipitazioni (colonne). Confrontiamo due città (valori medi indicativi):</p><table><tr><th></th><th>Gennaio</th><th>Luglio</th><th>Escursione</th><th>Piogge/anno</th></tr><tr><td><b>Roma</b> (mediterraneo)</td><td>≈ 8 °C</td><td>≈ 25 °C</td><td>≈ 17 °C</td><td>≈ 800 mm, poche d'estate</td></tr><tr><td><b>Mosca</b> (continentale)</td><td>≈ −6 °C</td><td>≈ 19 °C</td><td>≈ 25 °C</td><td>≈ 700 mm, soprattutto d'estate</td></tr><tr><td><b>Londra</b> (oceanico)</td><td>≈ 5 °C</td><td>≈ 19 °C</td><td>≈ 14 °C</td><td>≈ 600 mm, distribuite tutto l'anno</td></tr></table><p>Calcolo per Mosca: 19 − (−6) = 19 + 6 = <b>25 °C</b> di escursione. Più ci si allontana dal mare, più l'escursione cresce.</p>`
    },
    {
      type: `svg`,
      title: `Climogramma di Roma`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#ffffff"/><line x1="60" y1="270" x2="560" y2="270" stroke="#334155" stroke-width="2"/><line x1="60" y1="30" x2="60" y2="270" stroke="#dc2626" stroke-width="2"/><line x1="560" y1="30" x2="560" y2="270" stroke="#2563eb" stroke-width="2"/><g font-family="sans-serif" font-size="12" fill="#dc2626" text-anchor="end"><text x="55" y="274">0 °C</text><text x="55" y="194">10</text><text x="55" y="114">20</text><text x="55" y="34">30</text></g><g font-family="sans-serif" font-size="12" fill="#2563eb"><text x="565" y="274">0 mm</text><text x="565" y="194">40</text><text x="565" y="114">80</text><text x="565" y="34">120</text></g><g fill="#93c5fd"><rect x="70" y="136" width="28" height="134"/><rect x="111" y="124" width="28" height="146"/><rect x="152" y="154" width="28" height="116"/><rect x="193" y="108" width="28" height="162"/><rect x="234" y="164" width="28" height="106"/><rect x="275" y="202" width="28" height="68"/><rect x="316" y="232" width="28" height="38"/><rect x="357" y="196" width="28" height="74"/><rect x="398" y="124" width="28" height="146"/><rect x="439" y="44" width="28" height="226"/><rect x="480" y="48" width="28" height="222"/><rect x="521" y="108" width="28" height="162"/></g><polyline points="84,206 125,198 166,182 207,158 248,126 289,94 330,70 371,70 412,102 453,134 494,174 535,198" fill="none" stroke="#dc2626" stroke-width="4"/><g font-family="sans-serif" font-size="13" fill="#334155" text-anchor="middle"><text x="84" y="288">G</text><text x="125" y="288">F</text><text x="166" y="288">M</text><text x="207" y="288">A</text><text x="248" y="288">M</text><text x="289" y="288">G</text><text x="330" y="288">L</text><text x="371" y="288">A</text><text x="412" y="288">S</text><text x="453" y="288">O</text><text x="494" y="288">N</text><text x="535" y="288">D</text></g><text x="300" y="20" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#0f172a" font-weight="bold">Roma: estate calda e secca, autunno piovoso</text><text x="310" y="312" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#475569">linea rossa = temperatura media · colonne blu = pioggia</text></svg>`,
      caption: `Valori medi indicativi. Nota luglio: temperatura più alta e pioggia più bassa. È la firma del clima mediterraneo.`
    },
    {
      type: `curiosity`,
      title: `Palme in Irlanda?`,
      html: `<p>Sulle coste sud-occidentali dell'<b>Irlanda</b> e della <b>Cornovaglia</b> (Inghilterra), alla stessa latitudine del Canada meridionale, crescono palme e piante subtropicali nei giardini! Merito della <b>Corrente del Golfo</b>: d'inverno lì raramente gela. Il Labrador, in Canada, alla stessa latitudine, è coperto di neve per mesi.</p>`
    },
    {
      type: `curiosity`,
      title: `I ghiacciai come termometri`,
      html: `<p>I ghiacciai alpini sono «termometri» del clima: si allungano negli anni freddi e si ritirano in quelli caldi. Oggi si stanno ritirando velocemente a causa del <b>riscaldamento globale</b>: l'Europa si scalda più velocemente della media mondiale. Nel 2022, un'estate eccezionalmente calda, il crollo di un seracco del ghiacciaio della <b>Marmolada</b> causò una tragedia. I glaciologi fotografano i ghiacciai ogni anno per misurarne il cambiamento.</p>`
    },
    {
      type: `alternatives`,
      title: `Altri modi per capirlo`,
      intro: `Se i fattori del clima ti sembrano tanti, prova queste strade.`,
      tabs: [
        { label: `🔦 La torcia`, html: `<p>In una stanza buia punta una torcia dritta su un foglio: vedi un cerchio piccolo e luminosissimo. Ora inclinala: la luce si allarga in un'ellisse più grande e più debole. La quantità di luce è la stessa, ma è distribuita su più spazio. È ciò che succede ai raggi del Sole verso i poli: per questo la <b>latitudine</b> è il primo fattore del clima.</p>` },
        { label: `🍲 La pentola d'acqua`, html: `<p>Metti sul fuoco una pentola vuota e una con l'acqua: la pentola vuota (la <b>terra</b>) diventa bollente in un attimo e si raffredda subito; l'acqua (il <b>mare</b>) si scalda lentamente e resta calda a lungo. Per questo le città vicine al mare hanno estati meno torride e inverni meno freddi: il mare fa da «termosifone» d'inverno e da «condizionatore» d'estate.</p>` },
        { label: `🏔️ La montagna in 3D`, html: `<p>Ruota il paesaggio e tocca le parti: dal mare alla vetta il clima cambia come se viaggiassi verso il Polo.</p>`, scene: `terrain`, options: { features: { sea: { label: `Mare`, html: `Mitiga il clima: inverni miti, estati meno calde. Sulle coste: clima <b>mediterraneo</b>, macchia, ulivi.` }, plain: { label: `Pianura`, html: `Lontano dal mare (come la Pianura Padana) l'escursione aumenta: inverni freddi con nebbia, estati afose.` }, hill: { label: `Collina`, html: `Boschi di <b>latifoglie</b> (querce, castagni) e vigneti.` }, mountain: { label: `Montagna`, html: `Più si sale, più fa freddo (−0,6 °C ogni 100 m): boschi di <b>conifere</b>, come nella taiga.` }, peak: { label: `Vetta`, html: `Rocce, muschi, licheni: un paesaggio simile alla <b>tundra</b>.` }, glacier: { label: `Ghiacciaio`, html: `Nevi perenni: come ai <b>poli</b>. Ma i ghiacciai si stanno ritirando per il riscaldamento globale.` } } } },
        { label: `🌍 Il viaggio di Humboldt`, html: `<p>Il naturalista tedesco <b>Alexander von Humboldt</b> nel 1802 salì il vulcano Chimborazo, in Ecuador, e notò che le piante cambiavano salendo esattamente come cambiano spostandosi dall'Equatore verso i poli. Disegnò una famosa tavola, il «Naturgemälde», che è all'origine dello studio degli ambienti e dell'ecologia.</p>`, scene: `globe`, options: { points: [ { lat: -1.47, lon: -78.82, label: `Chimborazo (Humboldt, 1802)`, color: `#dc2626` }, { lat: 0, lon: -50, label: `Zona torrida`, color: `#f97316` }, { lat: 45, lon: 10, label: `Zona temperata`, color: `#16a34a` }, { lat: 75, lon: 20, label: `Zona polare`, color: `#0ea5e9` } ] } }
      ]
    },
    {
      type: `widget`,
      title: `Che clima ha questa città?`,
      widget: `classify`,
      options: { groups: [`Oceanico`, `Continentale`, `Mediterraneo`], items: [ [`Dublino`, 0], [`Londra`, 0], [`Brest (Francia)`, 0], [`Mosca`, 1], [`Varsavia`, 1], [`Kiev`, 1], [`Atene`, 2], [`Palermo`, 2], [`Siviglia`, 2] ] },
      caption: `Pensa a quanto è vicina all'Atlantico, all'interno del continente o al Mediterraneo.`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 2`,
      questions: [
        { type: `mc`, q: `Quale ambiente è formato da grandi foreste di conifere?`, options: [`Tundra`, `Taiga`, `Steppa`, `Macchia mediterranea`], answer: 1, explain: `La taiga, tipica del clima subartico.` },
        { type: `num`, q: `A Varsavia la media di gennaio è −2 °C e quella di luglio 19 °C. Qual è l'escursione termica annua?`, answer: 21, tol: 0, unit: `°C`, explain: `19 − (−2) = 19 + 2 = 21 °C.` },
        { type: `tf`, q: `Il clima mediterraneo ha estati calde e secche e inverni miti e piovosi.`, answer: true, explain: `È il clima delle coste italiane.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Mappa concettuale: dal Sole agli ambienti`,
      nodes: [
        { id: `sole`, label: `Energia del Sole`, x: 50, y: 6, color: `#f59e0b`, html: `<p>Il motore di tutto il clima.</p>`, why: `<p>La Terra è sferica e il suo asse è inclinato di circa 23,4°: perciò i raggi arrivano con angoli diversi a seconda della latitudine e della stagione.</p>` },
        { id: `latitudine`, label: `Latitudine`, x: 15, y: 28, color: `#dc2626`, html: `<p>Zona torrida, temperate, polari.</p>`, why: `<p>Già i Greci (Parmenide, Aristotele) divisero la Terra in zone (klimata = «inclinazioni»): la parola <b>clima</b> viene proprio dal greco <i>klíma</i>, «inclinazione» dei raggi solari!</p>` },
        { id: `altitudine`, label: `Altitudine`, x: 38, y: 30, color: `#78716c`, html: `<p>−0,6 °C ogni 100 m circa.</p>`, why: `<p>L'aria che sale si espande perché la pressione è minore, e espandendosi si raffredda. Inoltre in quota l'aria è più sottile e trattiene meno calore.</p>` },
        { id: `mare`, label: `Mare e correnti`, x: 62, y: 30, color: `#0ea5e9`, html: `<p>Mitigano il clima; Corrente del Golfo.</p>`, why: `<p>L'acqua ha un <b>calore specifico</b> alto: serve molta energia per scaldarla e la rilascia lentamente. La Corrente del Golfo fu descritta e cartografata da Benjamin Franklin nel 1770.</p>` },
        { id: `venti`, label: `Venti e rilievi`, x: 85, y: 28, color: `#475569`, html: `<p>Venti occidentali, Alpi come barriera.</p>`, why: `<p>I venti nascono dalle differenze di pressione tra zone calde e fredde; le montagne costringono l'aria umida a salire, raffreddarsi e scaricare pioggia su un versante.</p>` },
        { id: `climi`, label: `Climi europei`, x: 50, y: 55, color: `#7c3aed`, html: `<p>Oceanico, continentale, mediterraneo, alpino, subartico, polare, steppico.</p>`, why: `<p>La classificazione più usata è quella del climatologo Wladimir Köppen (1900, poi aggiornata), basata su temperature e piogge e sulla vegetazione.</p>` },
        { id: `ambienti`, label: `Ambienti (biomi)`, x: 25, y: 82, color: `#16a34a`, html: `<p>Tundra, taiga, latifoglie, steppa, macchia, ambiente alpino.</p>`, why: `<p>Piante e animali si sono adattati nel corso dell'evoluzione: le foglie aghiformi delle conifere resistono al gelo, quelle piccole e coriacee della macchia trattengono l'acqua.</p>` },
        { id: `uomo`, label: `Uomo e cambiamento climatico`, x: 75, y: 82, color: `#be123c`, html: `<p>Agricoltura, città, emissioni di CO₂, riscaldamento globale.</p>`, why: `<p>Dalla Rivoluzione industriale bruciamo carbone, petrolio e gas, che liberano anidride carbonica: aumenta l'effetto serra. I dati dei termometri, dei satelliti e delle carote di ghiaccio mostrano che la Terra si è scaldata di oltre 1 °C.</p>` }
      ],
      edges: [ [`sole`, `latitudine`, `inclinazione`], [`latitudine`, `climi`, ``], [`altitudine`, `climi`, ``], [`mare`, `climi`, ``], [`venti`, `climi`, ``], [`climi`, `ambienti`, `determinano`], [`ambienti`, `uomo`, `risorse`], [`uomo`, `climi`, `modifica`] ]
    }
  ],
  glossary: [
    { t: `Tempo atmosferico`, d: `Condizioni dell'atmosfera in un luogo e in un momento precisi.` },
    { t: `Clima`, d: `Condizioni medie dell'atmosfera di un luogo, calcolate su almeno 30 anni.` },
    { t: `Escursione termica`, d: `Differenza tra la temperatura più alta e quella più bassa in un periodo.` },
    { t: `Precipitazioni`, d: `Acqua che cade dall'atmosfera: pioggia, neve, grandine; si misurano in mm.` },
    { t: `Corrente del Golfo`, d: `Corrente oceanica calda che dal Golfo del Messico raggiunge l'Europa nord-occidentale.` },
    { t: `Climogramma`, d: `Grafico che mostra temperature e precipitazioni medie mensili di un luogo.` },
    { t: `Tundra`, d: `Ambiente polare senza alberi, con muschi e licheni.` },
    { t: `Taiga`, d: `Grande foresta di conifere delle regioni subartiche.` },
    { t: `Macchia mediterranea`, d: `Vegetazione di arbusti sempreverdi adatti alla siccità estiva.` },
    { t: `Permafrost`, d: `Terreno perennemente gelato.` },
    { t: `Bioma`, d: `Grande ambiente naturale caratterizzato da clima, vegetazione e fauna tipici.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Per quanti anni, di solito, si calcolano le medie che definiscono un clima?`, options: [`1 anno`, `5 anni`, `30 anni`, `1.000 anni`], answer: 2, explain: `Almeno 30 anni.` },
      { type: `mc`, q: `Quale di questi NON è un fattore del clima?`, options: [`Latitudine`, `Altitudine`, `Distanza dal mare`, `Numero di abitanti di una città`], answer: 3, explain: `I fattori sono latitudine, altitudine, mare, correnti, venti, rilievi.` },
      { type: `tf`, q: `Il mare rende più grande l'escursione termica.`, answer: false, explain: `Il mare la riduce: inverni più miti ed estati più fresche.` },
      { type: `num`, q: `Ai piedi di una montagna (500 m) ci sono 18 °C. Quanti gradi ci sono circa a 1.500 m?`, answer: 12, tol: 0.5, unit: `°C`, explain: `1.000 m di dislivello → circa −6 °C: 18 − 6 = 12 °C.` },
      { type: `mc`, q: `Quale clima ha Mosca?`, options: [`Oceanico`, `Continentale`, `Mediterraneo`, `Polare`], answer: 1, explain: `Inverni molto freddi ed estati calde, lontano dal mare.` },
      { type: `text`, q: `Come si chiama l'ambiente polare senza alberi, con muschi e licheni?`, answer: [`tundra`, `la tundra`], explain: `La tundra.` },
      { type: `mc`, q: `Quale pianta è tipica della macchia mediterranea?`, options: [`Abete rosso`, `Corbezzolo`, `Betulla nana`, `Larice`], answer: 1, explain: `Il corbezzolo, insieme a leccio, mirto, lentisco.` },
      { type: `order`, q: `Ordina le fasce di vegetazione dalla base alla vetta di una montagna alpina`, items: [`Latifoglie e coltivi`, `Conifere`, `Praterie alpine`, `Rocce, muschi e licheni`, `Nevi perenni`], explain: `Salendo il clima diventa sempre più freddo.` },
      { type: `num`, q: `A Mosca la media di gennaio è −6 °C e quella di luglio 19 °C. Qual è l'escursione termica annua?`, answer: 25, tol: 0, unit: `°C`, explain: `19 − (−6) = 25 °C.` },
      { type: `mc`, q: `Quale clima ha la Pianura Padana?`, options: [`Mediterraneo`, `Padano/continentale, con inverni freddi e nebbiosi`, `Polare`, `Oceanico`], answer: 1, explain: `Lontana dal mare e chiusa dai rilievi, ha grande escursione termica.` },
      { type: `tf`, q: `La parola «clima» viene dal greco e significa «inclinazione».`, answer: true, explain: `Si riferisce all'inclinazione dei raggi solari.` }
    ],
    gen: [ [`intAdd`, 2] ]
  }
});
