TOPIC('it', {
  id: `l1-art-mesopotamia-egitto`,
  title: `Arte mesopotamica ed egizia`,
  intro: `Tra il Tigri e l'Eufrate e lungo il Nilo, più di 5000 anni fa, nascono le <b>prime città</b>, la <b>scrittura</b> e le prime grandi architetture di pietra e mattoni: ziggurat, piramidi, templi giganteschi. Due civiltà vicine, due modi diversi di fare arte: i <b>Sumeri e i Babilonesi</b> costruiscono torri verso il cielo e scrivono leggi su pietra; gli <b>Egizi</b> costruiscono per l'eternità, perché per loro l'arte serve a <b>vincere la morte</b>. 🏛️🔺`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Due civiltà dei grandi fiumi`,
      html: `<p>Le prime civiltà nascono dove l'agricoltura è favorita da grandi fiumi che rendono fertile il suolo.</p>
<ul>
<li><b>Mesopotamia</b> (dal greco "terra tra i fiumi", l'attuale Iraq): Sumeri (dal 3500 a.C.), Accadi, Babilonesi, Assiri. Città-stato governate da re-sacerdoti. La <b>scrittura cuneiforme</b> (segni a forma di cuneo incisi su tavolette d'argilla) nasce circa nel <b>3300 a.C.</b>. Mancano pietra e legno: il materiale base è il <b>mattone crudo</b> di argilla.</li>
<li><b>Egitto</b>: una civiltà lunga circa 3000 anni lungo il Nilo, unificata intorno al <b>3100 a.C.</b> sotto il primo faraone (Narmer o Menes). Il Nilo che esonda ogni anno fertilizza la terra. Qui abbondano la <b>pietra</b> (calcare, granito, arenaria): l'architettura è di pietra squadrata. Scrittura: i <b>geroglifici</b> (decifrati nel 1822 da <b>Champollion</b> grazie alla Stele di Rosetta).</li>
</ul>
<p>In entrambe, <b>religione e potere</b> coincidono: l'arte serve a onorare gli dèi e il re. Ma lo scopo è diverso: in Mesopotamia i templi sono la <b>casa del dio</b> in terra e il luogo dove il re mostra il suo potere; in Egitto il faraone è un <b>dio vivente</b>, e le tombe e le immagini devono garantire la sua sopravvivenza nell'aldilà.</p>`
    },
    {
      type: `3d`, title: `Navigare tra tempo e spazio: dalla Mesopotamia all'Egitto`,
      scene: `spacetime`,
      options: {
        lat: [20, 36], lon: [28, 52], years: [-3200, -400],
        places: [ { lat: 30.0, lon: 31.1, label: `Giza` }, { lat: 30.96, lon: 46.1, label: `Ur` }, { lat: 32.54, lon: 44.42, label: `Babilonia` }, { lat: 25.72, lon: 32.66, label: `Karnak` } ],
        events: [
          { id: `e1`, lat: 30.96, lon: 46.1, year: -2100, label: `Ziggurat di Ur`, html: `Il re Ur-Nammu costruisce il grande ziggurat dedicato al dio-luna Nanna, circa 2100 a.C.` },
          { id: `e2`, lat: 29.87, lon: 31.22, year: -2650, label: `Piramide di Djoser (Saqqara)`, html: `Imhotep progetta la prima grande costruzione in pietra: la piramide a gradoni.` },
          { id: `e3`, lat: 30.0, lon: 31.1, year: -2560, label: `Grande Piramide di Cheope`, html: `Il faraone Cheope fa costruire la più grande piramide, alta 146,6 m all'origine.`, causes: [`e2`] },
          { id: `e4`, lat: 32.54, lon: 44.42, year: -1750, label: `Codice di Hammurabi`, html: `Il re babilonese Hammurabi fa incidere circa 282 leggi su una stele di basalto.` },
          { id: `e5`, lat: 25.72, lon: 32.66, year: -1300, label: `Sala ipostila di Karnak`, html: `I faraoni Seti I e Ramses II completano la sala a 134 colonne del tempio di Amon.` },
          { id: `e6`, lat: 32.54, lon: 44.42, year: -575, label: `Porta di Ishtar`, html: `Nabucodonosor II fa costruire la porta di mattoni smaltati azzurri a Babilonia.`, causes: [`e4`] }
        ]
      },
      caption: `La mappa è la base, l'altezza è il tempo: tocca un evento per leggere la scheda e le frecce tra cause ed effetti.`
    },
    {
      type: `text`, title: `2. L'architettura mesopotamica: lo ziggurat`,
      html: `<p>Il simbolo dell'arte mesopotamica è lo <b>ziggurat</b> (dall'accadico <i>ziqqurratu</i>, "cima, punta"): una <b>torre a gradoni</b> di mattoni crudi rivestiti di mattoni cotti e bitume, con scalinate esterne. In cima c'era un piccolo santuario, la "casa" del dio, che il sacerdote raggiungeva per i riti.</p>
<ul>
<li>Lo ziggurat di <b>Ur</b> (sud dell'Iraq), costruito dal re <b>Ur-Nammu</b> intorno al <b>2100 a.C.</b> e dedicato al dio-luna <b>Nanna</b>: base di circa 60 × 45 m, tre terrazze, tre scalinate che si congiungono. Oggi conserva la parte inferiore (restaurata).</li>
<li>L'<b>Etemenanki</b> di <b>Babilonia</b>, dedicato a Marduk, che si ritiene all'origine del racconto biblico della <b>Torre di Babele</b>: le fonti parlano di circa sette piani.</li>
</ul>
<p>Mancando la pietra, si costruisce con mattoni e si usano <b>archi e volte</b> già dal 3° millennio a.C. Le facciate sono decorate con <b>mattoni smaltati</b> (come la <b>Porta di Ishtar</b>, vedi sotto).</p>`
    },
    {
      type: `text`, title: `3. Scultura e rilievi mesopotamici`,
      html: `<p>Nelle opere mesopotamiche non conta la somiglianza, ma l'<b>importanza sociale</b> del personaggio e il racconto.</p>
<ul>
<li><b>Sumeri – Stendardo di Ur</b> (circa 2600-2500 a.C., British Museum): cassetta di legno decorata con un <b>mosaico</b> di lapislazzuli, conchiglia e calcare rosso, divisa in "registri" orizzontali. Un lato mostra la <b>guerra</b>, l'altro la <b>pace</b> (banchetto). Si legge dal basso verso l'alto.</li>
<li><b>Sumeri – statuette di oranti</b> (Tell Asmar, circa 2700-2500 a.C.): figure con enormi occhi di conchiglia e lapislazzuli e mani giunte, deposte nei templi al posto dei fedeli.</li>
<li><b>Babilonesi – Stele di Hammurabi</b> (circa 1750 a.C., Louvre): blocco di <b>basalto nero</b> alto circa 2,25 m, trovato a Susa nel 1901-02. In alto il re riceve il simbolo del potere dal dio sole <b>Shamash</b>; sotto, in scrittura cuneiforme, <b>282 leggi</b> (il "codice" di Hammurabi), tra cui la famosa legge del taglione ("occhio per occhio").</li>
<li><b>Babilonesi – Porta di Ishtar</b> (circa 575 a.C., Nabucodonosor II): ingresso della città rivestito di <b>mattoni smaltati blu</b> con file di tori (Adad) e draghi (Marduk). Ricostruita al Pergamonmuseum di Berlino.</li>
<li><b>Assiri</b> (IX-VII sec. a.C.): potenza militare. Palazzi di Khorsabad (Sargon II) e Ninive con <b>lamassu</b> (tori alati con testa umana, a guardia delle porte, con cinque zampe per mostrarsi sia di fronte sia di fianco) e <b>bassorilievi</b> di battaglia e caccia (come la <i>Caccia al leone</i> di Assurbanipal, circa 645 a.C.).</li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-quiz: Mesopotamia`,
      questions: [
        { type: `mc`, q: `Quale materiale usano soprattutto i Mesopotamici per costruire?`, options: [`Mattoni di argilla`, `Granito`, `Marmo`], answer: 0, explain: `Mancano pietra e legno: si usa l'argilla (mattoni crudi e cotti).` },
        { type: `mc`, q: `Dove si trova oggi la stele con il codice di Hammurabi?`, options: [`Al Louvre di Parigi`, `Al Museo Egizio di Torino`, `A Baghdad`], answer: 0, explain: `Fu portata a Parigi dopo il ritrovamento a Susa (1901-02).` },
        { type: `tf`, q: `Lo ziggurat era una tomba reale.`, answer: false, explain: `Era una torre a gradoni con in cima un santuario; non una tomba.` }
      ]
    },
    {
      type: `text`, title: `4. L'architettura egizia: dalla mastaba alla piramide`,
      html: `<p>Per gli Egizi la morte è un passaggio: il corpo deve essere conservato (<b>mummificazione</b>) e la tomba fornita di tutto il necessario. Perciò l'architettura funeraria si sviluppa enormemente.</p>
<ul>
<li><b>Mastaba</b> (dall'arabo "panca"): tomba a forma di tronco di piramide rettangolare, in mattoni o pietra, con camera sotterranea per il sarcofago e cappella per le offerte.</li>
<li><b>Piramide a gradoni di Djoser</b> a <b>Saqqara</b> (circa 2650 a.C., III dinastia): progettata dall'architetto e medico <b>Imhotep</b>, poi divinizzato. È la prima grande costruzione in pietra squadrata: sei mastabe sovrapposte, alta circa 60 m.</li>
<li><b>Piramidi di Snefru</b> a Dahshur (circa 2600 a.C.): la "romboidale" cambia inclinazione a metà altezza (da circa 54° a 43°) perché si temeva un cedimento; la "rossa" ha già l'inclinazione costante di circa 43°.</li>
<li><b>Piramidi di Giza</b> (IV dinastia, circa 2560-2470 a.C.): quelle di <b>Cheope</b> (Khufu, altezza originaria <b>146,6 m</b>, base quadrata di circa <b>230 m</b> di lato, 2,3 milioni di blocchi di circa 2,5 tonnellate in media), <b>Chefren</b> (circa 143,5 m) e <b>Micerino</b> (circa 65 m). La <b>Sfinge</b>, scolpita nella roccia calcarea, è lunga circa 73 m e alta 20 m: ha corpo di leone e volto, forse, di Chefren.</li>
</ul>
<p>La piramide con facce lisce rappresenta i <b>raggi del Sole</b> che scendono dal cielo: un "scala" per il faraone verso Ra. La Grande Piramide è rimasta l'edificio più alto del mondo per circa <b>3800 anni</b>, fino alla cattedrale di Lincoln in Inghilterra (circa 1311). I lati sono orientati ai punti cardinali con un errore minimo.</p>`
    },
    {
      type: `svg`, title: `Dalla mastaba alla piramide`,
      caption: `Tre tappe dell'architettura funeraria egizia: la mastaba, la piramide a gradoni di Djoser (Imhotep, circa 2650 a.C.) e la piramide a facce lisce di Giza (Cheope, circa 2560 a.C.).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<rect x="0" y="230" width="600" height="70" fill="#fcd34d"/>
<polygon points="30,230 175,230 160,180 45,180" fill="#d6a85a" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/>
<text x="102" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">MASTABA</text>
<text x="102" y="280" font-size="14" fill="#78350f" text-anchor="middle">circa 3000-2700 a.C.</text>
<g fill="#d6a85a" stroke="#78350f" stroke-width="3" stroke-linejoin="round">
<polygon points="215,230 365,230 365,205 215,205"/>
<polygon points="230,205 350,205 350,180 230,180"/>
<polygon points="245,180 335,180 335,155 245,155"/>
<polygon points="258,155 322,155 322,130 258,130"/>
<polygon points="270,130 310,130 310,108 270,108"/>
<polygon points="278,108 302,108 302,88 278,88"/>
</g>
<text x="290" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">DJOSER A SAQQARA</text>
<text x="290" y="280" font-size="14" fill="#78350f" text-anchor="middle">gradoni, circa 2650 a.C.</text>
<polygon points="395,230 580,230 487,45" fill="#e8c068" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/>
<line x1="487" y1="45" x2="487" y2="230" stroke="#92400e" stroke-width="2" stroke-dasharray="6 4"/>
<text x="487" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">CHEOPE A GIZA</text>
<text x="487" y="280" font-size="14" fill="#78350f" text-anchor="middle">facce lisce, circa 2560 a.C.</text>
<text x="497" y="150" font-size="14" fill="#92400e">146,6 m</text>
</svg>`
    },
    {
      type: `3d`, title: `Una piramide da ruotare`,
      scene: `solid`,
      options: { shape: `pyramid`, n: 4, r: 1.6, h: 2.2, color: `#e8c068`, labels: true, shapes: [`pyramid`, `prism`, `cube`, `cone`] },
      caption: `La piramide egizia è una piramide retta a base quadrata. Guardala dall'alto (pianta quadrata con le diagonali) e di lato (prospetto triangolare): ritrovi le proiezioni ortogonali.`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… le piramidi non le costruirono degli schiavi?`,
      html: `<p>Scavi vicino a Giza (a partire dagli anni '90, con Zahi Hawass e Mark Lehner) hanno rivelato il villaggio degli <b>operai</b>: case, panetterie, birrerie, e tombe con onorificenze. Lavoratori <b>pagati e nutriti</b> (pane, birra, carne), organizzati in squadre con nomi scherzosi come "Gli amici di Cheope". Il lavoro durò circa 20 anni. Il blocco arrivava dalle cave spesso via <b>Nilo</b> durante la piena, quando il fiume arrivava vicino al cantiere: un papiro scoperto nel 2013 a Wadi al-Jarf (il "diario di Merer") racconta proprio il trasporto dei blocchi di calcare di Tura.</p>`
    },
    {
      type: `text`, title: `5. Il tempio egizio`,
      html: `<p>Il tempio del Nuovo Regno (circa 1550-1070 a.C.) è la casa terrena del dio. Ha una pianta <b>assiale</b>: dall'ingresso verso il santuario si procede da spazi luminosi e aperti a spazi bui e sempre più riservati. Il sistema costruttivo è <b>trilitico</b> (pilastri e architravi) con solai di lastre di pietra.</p>
<ol>
<li><b>Viale delle sfingi</b>: l'ingresso monumentale.</li>
<li><b>Piloni</b>: due massicce torri trapezoidali ai lati dell'ingresso, con rilievi del faraone vittorioso e obelischi davanti.</li>
<li><b>Cortile</b> a cielo aperto con portici di colonne.</li>
<li><b>Sala ipostila</b> (dal greco "sostenuta da colonne"): fitta foresta di colonne con capitelli a <b>papiro</b> (aperti o chiusi), <b>loto</b> o <b>palma</b>; la luce penetra da finestre alte (claristorio).</li>
<li><b>Naos</b> (<i>sancta sanctorum</i>): la cella buia con la statua del dio, accessibile solo a sacerdoti e faraone.</li>
</ol>
<p>Esempi: il <b>tempio di Amon a Karnak</b> (Tebe, costruito e ampliato per circa 2000 anni; la sala ipostila ha <b>134 colonne</b>, le più alte di 21 m); il <b>tempio di Luxor</b>; il <b>tempio di Ramses II ad Abu Simbel</b> (circa 1265 a.C., scavato nella roccia, con quattro statue sedute alte circa 20 m; spostato in alto tra il 1964 e il 1968 per salvarlo dalle acque della diga di Assuan); il <b>tempio funerario di Hatshepsut</b> a Deir el-Bahari (circa 1470 a.C., terrazze con portici, attribuito all'architetto Senenmut).</p>`
    },
    {
      type: `svg`, title: `Pianta di un tempio egizio (schema)`,
      caption: `Dal viale di sfingi al santuario: lo spazio si fa sempre più stretto, buio e sacro. Le colonne della sala ipostila sono fitte perché reggono pesanti architravi di pietra.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<g fill="#b45309" stroke="#78350f" stroke-width="1.5">
<rect x="20" y="115" width="20" height="10"/><rect x="50" y="115" width="20" height="10"/><rect x="80" y="115" width="20" height="10"/>
<rect x="20" y="175" width="20" height="10"/><rect x="50" y="175" width="20" height="10"/><rect x="80" y="175" width="20" height="10"/>
</g>
<polygon points="110,100 150,95 150,135 110,135" fill="#d6a85a" stroke="#78350f" stroke-width="3"/>
<polygon points="110,200 150,205 150,165 110,165" fill="#d6a85a" stroke="#78350f" stroke-width="3"/>
<rect x="150" y="90" width="110" height="120" fill="#fef9c3" stroke="#78350f" stroke-width="3"/>
<g fill="#78350f"><circle cx="165" cy="105" r="5"/><circle cx="165" cy="195" r="5"/><circle cx="245" cy="105" r="5"/><circle cx="245" cy="195" r="5"/><circle cx="165" cy="135" r="5"/><circle cx="165" cy="165" r="5"/><circle cx="245" cy="135" r="5"/><circle cx="245" cy="165" r="5"/></g>
<rect x="260" y="95" width="150" height="110" fill="#e7d3a1" stroke="#78350f" stroke-width="3"/>
<g fill="#78350f">
<circle cx="280" cy="115" r="6"/><circle cx="310" cy="115" r="6"/><circle cx="340" cy="115" r="6"/><circle cx="370" cy="115" r="6"/><circle cx="395" cy="115" r="6"/>
<circle cx="280" cy="150" r="6"/><circle cx="310" cy="150" r="6"/><circle cx="340" cy="150" r="6"/><circle cx="370" cy="150" r="6"/><circle cx="395" cy="150" r="6"/>
<circle cx="280" cy="185" r="6"/><circle cx="310" cy="185" r="6"/><circle cx="340" cy="185" r="6"/><circle cx="370" cy="185" r="6"/><circle cx="395" cy="185" r="6"/>
</g>
<rect x="410" y="115" width="80" height="70" fill="#d6c08a" stroke="#78350f" stroke-width="3"/>
<rect x="490" y="130" width="60" height="40" fill="#a16207" stroke="#451a03" stroke-width="3"/>
<g font-size="14" fill="#1c1917" font-weight="bold">
<text x="60" y="80" text-anchor="middle">viale di sfingi</text>
<text x="130" y="75" text-anchor="middle">pilone</text>
<text x="205" y="75" text-anchor="middle">cortile</text>
<text x="335" y="75" text-anchor="middle">sala ipostila</text>
<text x="450" y="75" text-anchor="middle">anticamere</text>
<text x="520" y="115" text-anchor="middle">naos</text>
</g>
<text x="300" y="250" font-size="15" fill="#44403c" text-anchor="middle">luce e spazio ampio  →  penombra  →  buio e sacro</text>
<path d="M60 275 L540 275" stroke="#78350f" stroke-width="2"/><polygon points="540,270 552,275 540,280" fill="#78350f"/>
</svg>`
    },
    {
      type: `text`, title: `6. Pittura e scultura egizie`,
      html: `<p>L'arte egizia obbedisce a <b>regole rigide</b>, rimaste quasi invariate per 3000 anni, perché l'immagine ha un valore <b>magico</b>: ciò che è dipinto "esiste" nell'aldilà. Si cerca la chiarezza, non l'illusione.</p>
<p>La <b>legge della frontalità</b> (nel rilievo e nella pittura): la figura umana si rappresenta con la <b>testa di profilo</b>, l'<b>occhio visto di fronte</b>, le <b>spalle e il torso di fronte</b>, la <b>vita e le gambe di profilo</b>, un piede in avanti. Così ogni parte del corpo mostra il suo aspetto "più riconoscibile". Le figure sono ordinate in <b>registri</b> (fasce orizzontali) e la <b>dimensione indica il rango</b>: il faraone è più grande dei servi (prospettiva gerarchica).</p>
<ul>
<li><b>Tavolozza di Narmer</b> (circa 3100 a.C.): Narmer unifica Alto e Basso Egitto.</li>
<li><b>Pittura funeraria</b>: tombe di Tebe con scene di vita quotidiana, come la <i>Caccia agli uccelli nelle paludi</i> dalla tomba di <b>Nebamon</b> (circa 1350 a.C., British Museum). Colori minerali: ocra, azzurrite, malachite, nero fumo.</li>
<li><b>Scultura</b>: statue in granito o diorite, <b>frontali, simmetriche, immobili</b>, con un piede avanti; il <b>Scriba seduto</b> (circa 2500 a.C., Louvre) è più naturale; la <b>Triade di Micerino</b>.</li>
<li><b>Periodo di Amarna</b> (circa 1350-1330 a.C.): il faraone <b>Akhenaton</b> impone il culto di un solo dio, il disco solare <b>Aton</b>, e cambia anche lo stile: più naturalistico, volti allungati e momenti di vita familiare. Da qui il <b>Busto di Nefertiti</b> dello scultore <b>Tutmosi</b> (circa 1345 a.C., calcare e stucco dipinto, Neues Museum di Berlino).</li>
<li><b>Maschera funeraria di Tutankhamon</b> (circa 1323 a.C.): oro massiccio con pasta vitrea e pietre dure, 54 cm; la tomba fu scoperta da <b>Howard Carter</b> il 4 novembre 1922 (la camera sepolcrale aperta nel 1923) nella Valle dei Re. Museo Egizio del Cairo.</li>
</ul>`
    },
    {
      type: `example`, title: `Esempio: leggere un rilievo egizio`,
      html: `<p>Guarda un rilievo con il faraone che colpisce i nemici. Le regole ti aiutano a "leggerlo":</p>
<ul>
<li>il faraone è <b>gigantesco</b> rispetto ai nemici: è il più importante;</li>
<li>le figure stanno su <b>registri</b> sovrapposti: l'alto per il re e gli dèi, il basso per i servi;</li>
<li>il corpo è un <b>collage</b> di viste: testa di profilo, occhio frontale, torso frontale, gambe di profilo;</li>
<li>accanto compaiono i <b>geroglifici</b>: il testo racconta ciò che l'immagine mostra.</li>
</ul>
<p>Non è che gli Egizi "non sapessero" disegnare in prospettiva: volevano rendere l'immagine <b>chiara e completa</b>, non realistica.</p>`
    },
    {
      type: `example`, title: `Esempio: calcolare l'inclinazione di una piramide`,
      html: `<p>La Grande Piramide ha un lato di base di circa 230 m e un'altezza originaria di circa 146,6 m. La metà della base è 115 m: l'<b>angolo di inclinazione</b> delle facce è quello la cui tangente è altezza/metà base = 146,6 / 115 ≈ 1,275, cioè circa <b>51,9°</b>. Il rapporto tra l'apotema (la distanza dal centro di un lato al vertice, circa 186 m) e la metà della base (115 m) è circa 1,62, molto vicino al numero aureo; ma probabilmente deriva da un rapporto scelto (7 palmi per cubito) e non da una scelta "aurea" intenzionale.</p>`
    },
    {
      type: `decision`, title: `Dove ti fai seppellire?`,
      html: `<p>Sei un faraone del Nuovo Regno (circa 1500 a.C.). Le piramidi dei tuoi antenati, ben visibili nel deserto, sono state quasi tutte <b>saccheggiate</b> dai ladri di tombe: la mummia e il tesoro non ci sono più. Devi decidere dove costruire la tua tomba.</p>`,
      question: `Tu cosa avresti scelto?`,
      options: [
        { label: `Una nuova, enorme piramide, ancora più alta`, outcome: `Costosa e molto visibile: attirerebbe i ladri esattamente come le altre.` },
        { label: `Una tomba scavata nella roccia in una valle nascosta`, outcome: `È la scelta che fecero i faraoni del Nuovo Regno: la Valle dei Re, vicino a Tebe, con tombe sotterranee senza monumenti esterni, e un tempio funerario lontano per il culto.` },
        { label: `Nessuna tomba: affidarsi agli dèi`, outcome: `Per gli Egizi la tomba era indispensabile per l'immortalità: non avrebbero mai rinunciato.` }
      ],
      answer: 1,
      explain: `Dal 1500 a.C. circa i faraoni scelsero la Valle dei Re (circa 60 tombe): corridoi e camere scavati nella roccia, con pareti dipinte. Neanche questo bastò: quasi tutte furono saccheggiate in antichità. Fa eccezione la tomba di Tutankhamon (KV62), piccola e coperta da detriti, scoperta quasi intatta da Howard Carter nel 1922.`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Champollion lesse i geroglifici nel 1822?`,
      html: `<p>La <b>Stele di Rosetta</b> (196 a.C., British Museum) riporta lo stesso decreto in tre scritture: geroglifico, demotico e greco. Il francese <b>Jean-François Champollion</b> confrontò i nomi dei re in cartigli (Tolomeo, Cleopatra) e il 27 settembre 1822 annunciò di aver decifrato il sistema, che mescola segni-immagine e segni-suono. Così gli Egizi tornarono a parlare dopo 1400 anni di silenzio.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li><b>Mesopotamia</b>: mattoni, <b>ziggurat</b> (Ur, circa 2100 a.C.), stele di Hammurabi (circa 1750 a.C.), Porta di Ishtar (circa 575 a.C.), lamassu assiri.</li>
<li><b>Egitto</b>: mastaba → piramide a gradoni (Djoser, Imhotep, circa 2650 a.C.) → piramidi di Giza (Cheope circa 2560 a.C., 146,6 m).</li>
<li><b>Tempio egizio</b>: viale di sfingi, piloni, cortile, <b>sala ipostila</b>, naos; sistema trilitico.</li>
<li><b>Pittura e scultura egizie</b>: legge della frontalità, registri, dimensione gerarchica; eccezione di Amarna (Nefertiti).</li>
<li>Maschera di Tutankhamon (1323 a.C. circa), scoperta nel 1922 da Carter.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Per orientarti nelle due civiltà prova a vederle da punti di vista diversi.`,
      tabs: [
        {
          label: `🔺 La piramide in sezione`,
          html: `<p>Dentro la Grande Piramide ci sono tre camere: quella <b>sotterranea</b> (incompiuta), la <b>camera della regina</b> e la <b>camera del re</b> (con il sarcofago in granito rosa di Assuan) raggiunta da una <b>Grande Galleria</b> con volta a mensole alta circa 8 m. Sopra la camera del re cinque "camere di scarico" alleggeriscono il peso sull'architrave.</p>`,
          scene: `solid`,
          options: { shape: `pyramid`, n: 4, r: 1.6, h: 2.2, color: `#fcd34d`, labels: true }
        },
        {
          label: `🧱 Costruire senza gru`,
          html: `<p>Come si costruiva? Rampe di mattoni e terra (dritte o a spirale) per far salire i blocchi su slitte di legno; il suolo era bagnato davanti alla slitta per ridurre l'attrito (come mostra un dipinto a Deir el-Bersha); leve di legno per l'ultimo posizionamento; corde di papiro e fibra. Le pietre di rivestimento (calcare fine di Tura) venivano posate dall'alto verso il basso e rifinite man mano. Gli antichi non avevano ruote per i carichi pesanti: la forza era la <b>squadra</b> organizzata.</p>`
        },
        {
          label: `📜 Mesopotamia a confronto`,
          html: `<table>
<tr><th></th><th>Mesopotamia</th><th>Egitto</th></tr>
<tr><td><b>Materiale</b></td><td>mattone crudo e cotto</td><td>pietra squadrata</td></tr>
<tr><td><b>Edificio simbolo</b></td><td>ziggurat (verso il cielo)</td><td>piramide (tomba)</td></tr>
<tr><td><b>Scrittura</b></td><td>cuneiforme su argilla</td><td>geroglifici su pietra e papiro</td></tr>
<tr><td><b>Re</b></td><td>vicario degli dèi</td><td>dio vivente</td></tr>
<tr><td><b>Arte</b></td><td>racconto, potere, leggi</td><td>eternità, aldilà</td></tr>
</table>`
        },
        {
          label: `🧩 Abbina`,
          html: `<p>Collega ogni opera alla sua civiltà.</p>`,
          widget: `classify`,
          options: { groups: [`Mesopotamia`, `Egitto`], items: [[`Stele di Hammurabi`, 0], [`Piramide di Cheope`, 1], [`Porta di Ishtar`, 0], [`Maschera di Tutankhamon`, 1], [`Lamassu`, 0], [`Sala ipostila di Karnak`, 1], [`Ziggurat di Ur`, 0], [`Busto di Nefertiti`, 1]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: arte mesopotamica ed egizia`,
      nodes: [
        { id: `fiumi`, label: `Civiltà dei grandi fiumi`, x: 50, y: 6, color: `#64748b`, html: `Tigri-Eufrate e Nilo.`, why: `Gli straripamenti fertilizzano il suolo: surplus agricolo, quindi città, scribi, artigiani e re che possono costruire opere monumentali.` },
        { id: `mes`, label: `Mesopotamia`, x: 22, y: 30, color: `#2563eb`, html: `Sumeri, Babilonesi, Assiri.`, why: `Zona senza pietra: si costruisce in mattoni. Le città-stato sono in lotta, per cui il potere si esprime anche in scene di guerra e leggi scritte.` },
        { id: `egi`, label: `Egitto`, x: 78, y: 30, color: `#d97706`, html: `Regno unificato per millenni.`, why: `Isolamento naturale (deserto e mare), continuità politica: lo stile cambia poco per 3000 anni.` },
        { id: `zig`, label: `Ziggurat e Porta di Ishtar`, x: 15, y: 62, color: `#3b82f6`, html: `Torri a gradoni e mattoni smaltati.`, why: `Una montagna artificiale per avvicinare il dio: il tempio nasce sulla pianura dove non ci sono rilievi.` },
        { id: `ham`, label: `Stele di Hammurabi`, x: 35, y: 85, color: `#0ea5e9`, html: `282 leggi in cuneiforme.`, why: `Scrivere le leggi su pietra pubblica le regole: nessuno può dire di non conoscerle (circa 1750 a.C.).` },
        { id: `pir`, label: `Piramidi`, x: 68, y: 62, color: `#f59e0b`, html: `Mastaba → Djoser → Giza.`, why: `Dalla pietra sovrapposta (Djoser, Imhotep) alla forma pura: il faraone sale al cielo con la luce di Ra.` },
        { id: `tem`, label: `Tempio e sala ipostila`, x: 92, y: 62, color: `#ef4444`, html: `Pianta assiale, colonne papiriformi.`, why: `Il tempio è una montagna primordiale e una palude di papiri: le colonne imitano le piante.` },
        { id: `front`, label: `Frontalità e registri`, x: 78, y: 88, color: `#a855f7`, html: `Regole fisse per le immagini.`, why: `Un'immagine corretta funziona magicamente nell'aldilà: per questo non si cambia.` }
      ],
      edges: [
        [`fiumi`, `mes`, `1°`], [`fiumi`, `egi`, `2°`], [`mes`, `zig`, `edificio`], [`mes`, `ham`, `leggi`], [`egi`, `pir`, `tombe`], [`egi`, `tem`, `culto`], [`egi`, `front`, `immagini`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: Egitto`,
      questions: [
        { type: `mc`, q: `Chi progettò la piramide a gradoni di Djoser?`, options: [`Imhotep`, `Senenmut`, `Champollion`], answer: 0, explain: `Imhotep, architetto e medico, circa 2650 a.C.` },
        { type: `tf`, q: `Nella legge della frontalità la testa è di profilo e l'occhio è visto di fronte.`, answer: true, explain: `Così ogni parte del corpo è rappresentata nel suo aspetto più riconoscibile.` },
        { type: `num`, q: `Quante colonne ha la sala ipostila del tempio di Amon a Karnak?`, answer: 134, tol: 0, explain: `134 colonne, le centrali alte circa 21 m.` },
        { type: `mc`, q: `Chi scoprì la tomba di Tutankhamon nel 1922?`, options: [`Howard Carter`, `Heinrich Schliemann`, `Arthur Evans`], answer: 0, explain: `L'archeologo britannico Howard Carter, nella Valle dei Re.` }
      ]
    }
  ],
  glossary: [
    { t: `Ziggurat`, d: `Torre a gradoni mesopotamica in mattoni, con un santuario in cima.` },
    { t: `Cuneiforme`, d: `Scrittura a segni a forma di cuneo, incisi su argilla.` },
    { t: `Lamassu`, d: `Toro alato con testa umana, guardiano delle porte dei palazzi assiri.` },
    { t: `Mastaba`, d: `Tomba egizia a forma di tronco di piramide rettangolare.` },
    { t: `Piramide`, d: `Tomba monumentale dei faraoni, a base quadrata e facce triangolari.` },
    { t: `Sala ipostila`, d: `Sala del tempio egizio a fitte file di colonne.` },
    { t: `Naos`, d: `Cella del tempio dove si trova la statua del dio.` },
    { t: `Legge della frontalità`, d: `Convenzione egizia: testa di profilo, occhio e torso di fronte, gambe di profilo.` },
    { t: `Geroglifici`, d: `Scrittura egizia a segni-immagine e segni-suono.` },
    { t: `Registro`, d: `Fascia orizzontale in cui si dispone una scena.` },
    { t: `Trilitico`, d: `Sistema costruttivo con pilastri e architrave.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Che cosa è uno ziggurat?`, options: [`Una tomba egizia`, `Una torre a gradoni mesopotamica con un santuario in cima`, `Un palazzo cretese`], answer: 1, explain: `Era la casa terrena del dio, in mattoni.` },
      { type: `mc`, q: `Dove si trova la Porta di Ishtar ricostruita?`, options: [`Louvre`, `Pergamonmuseum di Berlino`, `Museo del Cairo`], answer: 1, explain: `Fu portata a Berlino dopo gli scavi tedeschi di Koldewey (1899-1917).` },
      { type: `tf`, q: `La stele di Hammurabi contiene circa 282 leggi.`, answer: true, explain: `Sono incise in cuneiforme su basalto nero.` },
      { type: `order`, q: `Metti in ordine cronologico.`, items: [`Piramide di Djoser`, `Piramide di Cheope`, `Stele di Hammurabi`, `Maschera di Tutankhamon`, `Porta di Ishtar`], explain: `Djoser (circa 2650), Cheope (circa 2560), Hammurabi (circa 1750), Tutankhamon (circa 1323), Porta di Ishtar (circa 575 a.C.).` },
      { type: `num`, q: `Quanto era alta, all'origine, la piramide di Cheope (in metri, arrotondata all'intero)?`, answer: 147, tol: 1, unit: `m`, explain: `146,6 m all'origine, oggi circa 138 m perché ha perso il rivestimento e la cima.` },
      { type: `mc`, q: `Quale faraone cambiò religione e stile artistico (Amarna)?`, options: [`Akhenaton`, `Ramses II`, `Cheope`], answer: 0, explain: `Akhenaton impose il culto di Aton e uno stile più naturalistico.` },
      { type: `text`, q: `Come si chiama la tomba egizia a forma di tronco di piramide rettangolare, anteriore alle piramidi?`, answer: [`mastaba`, `la mastaba`], explain: `La mastaba (dall'arabo "panca").` },
      { type: `mc`, q: `Chi decifrò i geroglifici nel 1822?`, options: [`Champollion`, `Carter`, `Hammurabi`], answer: 0, explain: `Jean-François Champollion, grazie alla Stele di Rosetta.` },
      { type: `tf`, q: `Le piramidi furono costruite da schiavi incatenati.`, answer: false, explain: `Gli scavi mostrano operai pagati e nutriti, con tombe proprie.` },
      { type: `mc`, q: `In un tempio egizio, quale parte è più sacra e buia?`, options: [`Il viale di sfingi`, `Il cortile`, `Il naos`], answer: 2, explain: `Nel naos si trova la statua del dio, accessibile solo a sacerdoti e faraone.` }
    ]
  }
});
