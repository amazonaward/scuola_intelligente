TOPIC('it', {
  id: "m2-lat-lettura",
  title: "Il latino: leggere e pronunciare",
  intro: "Il latino era la lingua di Roma antica e, per secoli, di scienziati, giuristi e della Chiesa. È la «mamma» dell'italiano: per questo leggerlo è molto più facile di quanto pensi! Impariamo l'<b>alfabeto</b>, le regole di <b>pronuncia</b> (quella che si usa in Italia e quella «restituita» degli antichi Romani), l'<b>accento</b> e le prime parole.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "L'alfabeto latino",
      html: `<p>I Romani presero l'alfabeto dagli <b>Etruschi</b>, che lo avevano preso dai <b>Greci</b>. Nell'età classica (I secolo a.C.) aveva <b>23 lettere</b>:</p>
<p style="text-align:center;font-size:1.3em;letter-spacing:3px"><b>A B C D E F G H I K L M N O P Q R S T V X Y Z</b></p>
<ul>
<li><b>Mancano J, U e W</b>. La lettera <b>I</b> valeva sia come vocale (<i>i</i>) sia come consonante (<i>iam</i> = «già», si legge <i>iam</i>); la lettera <b>V</b> valeva sia <i>u</i> sia <i>v</i>. La distinzione U/V e I/J è stata introdotta solo nel <b>Rinascimento</b>; oggi i libri scrivono <i>u</i> per la vocale e <i>v</i> per la consonante.</li>
<li><b>K</b> era rarissima (es. <i>Kalendae</i>, il primo giorno del mese).</li>
<li><b>Y</b> e <b>Z</b> furono aggiunte in fondo all'alfabeto per scrivere le parole greche (<i>zephyrus</i>, il vento).</li>
<li>I Romani scrivevano <b>solo in maiuscolo</b>, spesso senza spazi tra le parole (o con un puntino a mezza altezza). Le minuscole nacquero nel Medioevo.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Un'iscrizione romana",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<rect x="40" y="30" width="520" height="200" rx="6" fill="#e7e5e4" stroke="#78716c" stroke-width="6"/>
<rect x="55" y="45" width="490" height="170" fill="#f5f5f4" stroke="#a8a29e" stroke-width="2"/>
<text x="300" y="105" font-size="34" font-family="serif" font-weight="bold" fill="#7f1d1d" text-anchor="middle" letter-spacing="3">SENATVS·POPVLVSQVE</text>
<text x="300" y="160" font-size="34" font-family="serif" font-weight="bold" fill="#7f1d1d" text-anchor="middle" letter-spacing="3">ROMANVS</text>
<text x="300" y="200" font-size="18" font-family="serif" fill="#57534e" text-anchor="middle">S · P · Q · R</text>
<text x="300" y="262" font-size="17" fill="#1f2937" text-anchor="middle">«Il Senato e il Popolo Romano»: V al posto di U, tutto maiuscolo,</text>
<text x="300" y="285" font-size="17" fill="#1f2937" text-anchor="middle">e il puntino (interpunzione) per separare le parole</text>
</svg>`,
      caption: "La sigla SPQR si legge ancora oggi sui tombini e sugli autobus di Roma."
    },
    {
      type: "text",
      title: "La pronuncia scolastica (o ecclesiastica)",
      html: `<p>In Italia a scuola si usa la pronuncia <b>scolastica</b>, detta anche <b>ecclesiastica</b> perché è quella della Chiesa. È molto simile all'italiano: <b>si legge come si scrive</b>, con poche regole speciali.</p>
<table>
<tr><th>Si scrive</th><th>Si legge</th><th>Esempio</th></tr>
<tr><td><b>ae</b>, <b>oe</b></td><td><b>e</b></td><td><i>rosae</i> → «rose», <i>poena</i> → «pena», <i>caelum</i> → «celum»</td></tr>
<tr><td><b>ti</b> + vocale</td><td><b>zi</b></td><td><i>gratia</i> → «grazia», <i>natio</i> → «nazio»</td></tr>
<tr><td>…ma dopo <b>s, t, x</b>: ti</td><td><b>ti</b></td><td><i>hostia</i> → «ostia», <i>mixtio</i> → «mixtio»</td></tr>
<tr><td><b>ph</b></td><td><b>f</b></td><td><i>philosophia</i> → «filosofia»</td></tr>
<tr><td><b>ch</b>, <b>th</b>, <b>rh</b></td><td><b>k</b>, <b>t</b>, <b>r</b></td><td><i>chorus</i> → «korus», <i>theatrum</i> → «teatrum»</td></tr>
<tr><td><b>h</b></td><td>muta</td><td><i>homo</i> → «omo»</td></tr>
<tr><td><b>y</b></td><td><b>i</b></td><td><i>lyra</i> → «lira»</td></tr>
<tr><td><b>x</b></td><td><b>cs</b></td><td><i>rex</i> → «recs»</td></tr>
<tr><td><b>c</b>, <b>g</b> davanti a e, i (anche ae, oe)</td><td>dolci, come in italiano</td><td><i>Cicero</i> → «Cìcero», <i>Caesar</i> → «Cèsar», <i>genus</i> → «gènus»</td></tr>
</table>
<p>Tutto il resto si legge come in italiano: <i>aqua</i>, <i>schola</i> (<b>sch</b> → «sk»: «skòla»), <i>agnus</i> (gn come in «agnello»).</p>`
    },
    {
      type: "text",
      title: "La pronuncia restituta (quella dei Romani)",
      html: `<p>Gli studiosi, confrontando le iscrizioni, le parole passate in greco e gli errori di ortografia degli antichi, hanno ricostruito come parlavano davvero i Romani colti di <b>Cicerone</b> e <b>Cesare</b>. È la pronuncia <b>restituta</b> («restituita»), usata in molte scuole del Regno Unito, della Germania e degli Stati Uniti.</p>
<table>
<tr><th>Scrittura</th><th>Scolastica</th><th>Restituta</th></tr>
<tr><td>Cicero</td><td>«Cìcero»</td><td>«Kìkero»</td></tr>
<tr><td>Caesar</td><td>«Cèsar»</td><td>«Kàisar»</td></tr>
<tr><td>veni, vidi, vici</td><td>«vèni, vìdi, vìci»</td><td>«uéni, uídi, uíki»</td></tr>
<tr><td>gratia</td><td>«gràzia»</td><td>«gràtia»</td></tr>
</table>
<p>Prove? I Greci scrivevano il nome di Cicerone <b>Κικέρων</b> (Kikéron), e la parola latina <i>Caesar</i> è diventata in tedesco <b>Kaiser</b> (imperatore). Entrambe le pronunce sono corrette: a scuola in Italia si usa quella scolastica.</p>`
    },
    {
      type: "widget",
      title: "C dura o C dolce? (pronuncia scolastica)",
      widget: "classify",
      options: {
        groups: ["C dura (suono k)", "C dolce (come in «cena»)"],
        items: [
          ["corpus", 0], ["cura", 0], ["clamor", 0], ["chorus", 0],
          ["Cicero", 1], ["caelum", 1], ["cena", 1], ["Caesar", 1], ["civis", 1]
        ]
      },
      caption: "Ricorda: ae si legge e, quindi «caelum» e «Caesar» hanno la c dolce nella pronuncia scolastica."
    },
    {
      type: "quiz",
      title: "Mini-quiz: alfabeto e pronuncia",
      questions: [
        { type: "mc", q: "Quale lettera NON esisteva nell'alfabeto latino classico?", options: ["K", "J", "X"], answer: 1, explain: "La J è stata introdotta solo nel Rinascimento per distinguere la i consonante." },
        { type: "mc", q: "Come si legge «rosae» nella pronuncia scolastica?", options: ["ro-sa-e", "rose", "rosài"], answer: 1, explain: "Il dittongo ae si pronuncia e." },
        { type: "tf", q: "Nella pronuncia scolastica «gratia» si legge «grazia».", answer: true, explain: "ti + vocale (non dopo s, t, x) si legge zi." }
      ]
    },
    {
      type: "text",
      title: "Dove cade l'accento",
      html: `<p>In latino non si scrive l'accento, ma ci sono regole precise:</p>
<ol>
<li><b>Nessuna parola</b> di due o più sillabe ha l'accento sull'<b>ultima</b> sillaba.</li>
<li>Parole di <b>due sillabe</b>: l'accento va sulla <b>penultima</b> (cioè sulla prima): <i>ró-sa</i>, <i>á-qua</i>, <i>ví-ta</i>.</li>
<li>Parole di <b>tre o più sillabe</b> (<b>legge della penultima</b>): se la penultima sillaba è <b>lunga</b>, l'accento cade lì; se è <b>breve</b>, va sulla <b>terzultima</b>.
<ul>
<li><i>a-mī-cus</i> (ī lunga) → <b>amícus</b></li>
<li><i>dó-mĭ-nus</i> (ĭ breve) → <b>dóminus</b></li>
</ul></li>
</ol>
<p>Come si sa se una sillaba è lunga? Nel vocabolario le vocali lunghe hanno il segno <b>ā</b> (macron) e le brevi <b>ă</b>. Inoltre una sillaba è lunga «<b>per posizione</b>» se la vocale è seguita da <b>due consonanti</b>: <i>pu-él-la</i>, <i>ma-gís-ter</i>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggiamo Giulio Cesare",
      html: `<p>Le prime parole del <i>De bello Gallico</i> (La guerra gallica), scritto da <b>Giulio Cesare</b> verso il 50 a.C.:</p>
<p style="text-align:center"><b><i>Gallia est omnis divisa in partes tres.</i></b></p>
<ul>
<li>Lettura scolastica: «<b>Gàl</b>-lia est <b>òm</b>-nis di-<b>vì</b>-sa in <b>pàr</b>-tes tres».</li>
<li>Traduzione: «La Gallia, nel suo insieme, è divisa in tre parti».</li>
</ul>
<p>Hai notato quante parole riconosci? <i>Gallia</i> → Gallia, <i>divisa</i> → divisa, <i>partes</i> → parti, <i>tres</i> → tre.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le prime parole",
      html: `<table>
<tr><th>Latino</th><th>Si legge</th><th>Significa</th><th>Parole italiane figlie</th></tr>
<tr><td>rosa</td><td>ró-sa</td><td>rosa</td><td>roseto</td></tr>
<tr><td>puella</td><td>pu-él-la</td><td>fanciulla</td><td>puerile (da <i>puer</i>, bambino)</td></tr>
<tr><td>aqua</td><td>á-qua</td><td>acqua</td><td>acquario, acquedotto</td></tr>
<tr><td>schola</td><td>skó-la</td><td>scuola</td><td>scolastico</td></tr>
<tr><td>magister</td><td>ma-gís-ter</td><td>maestro</td><td>magistrale</td></tr>
<tr><td>caelum</td><td>cé-lum</td><td>cielo</td><td>celeste</td></tr>
<tr><td>amicus</td><td>a-mí-cus</td><td>amico</td><td>amicizia</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Flashcard: prime parole latine",
      widget: "flashcards",
      options: { cards: [
        { front: "aqua", back: "acqua (si legge «àqua»)" },
        { front: "terra", back: "terra" },
        { front: "puella", back: "fanciulla, ragazza (pu-él-la)" },
        { front: "schola", back: "scuola (si legge «skòla»)" },
        { front: "caelum", back: "cielo (si legge «cèlum»)" },
        { front: "vita", back: "vita" },
        { front: "magister", back: "maestro (ma-gís-ter)" },
        { front: "Salve!", back: "Ciao! / Salute a te!" }
      ] },
      caption: "Leggi ad alta voce la parola, prova a indovinarne il significato e poi gira la carta."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il bancomat in latino",
      html: `<p>Il latino è ancora la lingua ufficiale della <b>Santa Sede</b>. Nella Città del Vaticano gli sportelli bancomat offrono, fra le lingue disponibili, anche il <b>latino</b>! Il messaggio per inserire la carta è: <i>Inserito scidulam quaeso ut faciundam cognoscas rationem</i> («Inserisci la tessera, per favore, per conoscere l'operazione da fare»).</p>
<p>Esiste anche una Wikipedia in latino, la <i>Vicipaedia</i>, con oltre 100 000 voci.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Lo usi ogni giorno",
      html: `<p>Parli latino senza saperlo:</p>
<ul>
<li><b>video</b> = «io vedo», <b>audio</b> = «io sento»;</li>
<li><b>bis</b> = «due volte», <b>ultimatum</b>, <b>curriculum</b> («piccola corsa»), <b>referendum</b> («ciò che deve essere riferito»);</li>
<li><b>p.s.</b> = <i>post scriptum</i> («scritto dopo»), <b>a.m. / p.m.</b> = <i>ante / post meridiem</i> («prima / dopo mezzogiorno»);</li>
<li>il motto dell'Unione Europea: <i>In varietate concordia</i> («Uniti nella diversità»).</li>
</ul>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Alfabeto classico: 23 lettere, senza J, U, W; V = u/v, I = i/j.</li>
<li>Pronuncia scolastica: <b>ae, oe → e</b>; <b>ti + vocale → zi</b> (non dopo s, t, x); <b>ph → f</b>; <b>ch → k</b>; <b>h</b> muta; <b>y → i</b>.</li>
<li>Pronuncia restituta: c e g sempre dure, v = u, ae = ai.</li>
<li>Accento mai sull'ultima; bisillabi sulla penultima; polisillabi: penultima se lunga, altrimenti terzultima.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per imparare a leggere il latino",
      intro: "Ognuno impara a modo suo: c'è chi preferisce ascoltare, chi confrontare le lingue, chi pensare alla musica.",
      tabs: [
        {
          label: "🇬🇧🇩🇪 Come lo leggono all'estero",
          html: `<p>Uno studente inglese o tedesco legge il latino con la pronuncia <b>restituta</b>. Prova anche tu, con queste regole:</p>
<ul>
<li><b>C</b> sempre come <b>k</b>: <i>Cicero</i> = «Kìkero».</li>
<li><b>G</b> sempre dura: <i>genus</i> = «ghènus».</li>
<li><b>V</b> come la <b>w</b> inglese: <i>vinum</i> = «uìnum».</li>
<li><b>AE</b> = «ai», <b>OE</b> = «oi»: <i>Caesar</i> = «Kàisar».</li>
</ul>
<p>Se un giorno ascolti un video di un professore di Oxford che legge Virgilio, adesso capirai perché suona così diverso!</p>`
        },
        {
          label: "🎵 Lunghe e brevi come note",
          html: `<p>I Romani sentivano la differenza tra vocali <b>lunghe</b> e <b>brevi</b> come in musica tra una <b>minima</b> e una <b>semiminima</b>: una lunga dura il doppio di una breve. La poesia latina era costruita su questo ritmo, non sulle rime.</p>
<p>Prova a «battere» il ritmo della parola <i>amīcus</i>: ta-<b>TAA</b>-ta. L'accento va sulla nota lunga!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f5f3ff"/>
<line x1="40" y1="80" x2="560" y2="80" stroke="#6b21a8" stroke-width="2"/>
<line x1="40" y1="100" x2="560" y2="100" stroke="#6b21a8" stroke-width="2"/>
<line x1="40" y1="120" x2="560" y2="120" stroke="#6b21a8" stroke-width="2"/>
<line x1="40" y1="140" x2="560" y2="140" stroke="#6b21a8" stroke-width="2"/>
<line x1="40" y1="160" x2="560" y2="160" stroke="#6b21a8" stroke-width="2"/>
<ellipse cx="130" cy="120" rx="14" ry="10" fill="#6b21a8"/>
<line x1="143" y1="120" x2="143" y2="70" stroke="#6b21a8" stroke-width="3"/>
<ellipse cx="300" cy="120" rx="16" ry="11" fill="none" stroke="#6b21a8" stroke-width="4"/>
<line x1="315" y1="120" x2="315" y2="70" stroke="#6b21a8" stroke-width="3"/>
<ellipse cx="470" cy="120" rx="14" ry="10" fill="#6b21a8"/>
<line x1="483" y1="120" x2="483" y2="70" stroke="#6b21a8" stroke-width="3"/>
<text x="130" y="200" font-size="24" fill="#1f2937" text-anchor="middle">a</text>
<text x="300" y="200" font-size="28" font-weight="bold" fill="#dc2626" text-anchor="middle">MĪ</text>
<text x="470" y="200" font-size="24" fill="#1f2937" text-anchor="middle">cus</text>
<text x="130" y="228" font-size="15" fill="#4c1d95" text-anchor="middle">breve</text>
<text x="300" y="228" font-size="15" fill="#4c1d95" text-anchor="middle">lunga = accento</text>
<text x="470" y="228" font-size="15" fill="#4c1d95" text-anchor="middle">ultima: mai accento</text>
</svg>`
        },
        {
          label: "🇮🇹 Il trucco dell'italiano",
          html: `<p>Spesso l'<b>accento della parola italiana</b> corrisponde a quello latino, perché le parole si sono trasformate lentamente conservando la sillaba più forte:</p>
<ul>
<li><i>amícus</i> → a<b>mí</b>co</li>
<li><i>fenéstra</i> → fi<b>né</b>stra</li>
<li><i>dóminus</i> → <b>dón</b>no (signore, come in «don Abbondio»)</li>
<li><i>pópulus</i> → <b>pó</b>polo</li>
<li><i>fábula</i> → <b>fá</b>vola</li>
</ul>
<p>Quando hai un dubbio, pensa alla parola italiana che ne deriva: molto spesso ti suggerisce dove mettere l'accento. Non è una regola sicura al 100%, ma funziona tantissime volte!</p>`
        },
        {
          label: "🎮 Abbina i motti famosi",
          html: `<p>Molte frasi latine sono ancora usate oggi. Abbina ogni motto al suo significato.</p>`,
          widget: "match",
          options: { pairs: [
            ["Veni, vidi, vici", "Venni, vidi, vinsi (Cesare)"],
            ["Carpe diem", "Cogli l'attimo (Orazio)"],
            ["Errare humanum est", "Sbagliare è umano"],
            ["Mens sana in corpore sano", "Mente sana in corpo sano (Giovenale)"],
            ["Repetita iuvant", "Le cose ripetute aiutano"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: leggere il latino",
      nodes: [
        { id: "latino", label: "Lingua latina", x: 50, y: 7, color: "#7f1d1d", html: "Lingua del Lazio antico e poi dell'Impero romano.", why: "È una lingua indoeuropea, parente del greco, del sanscrito, delle lingue germaniche e slave. Nacque nel Lazio (Latium, da cui «latino») e si diffuse con le conquiste di Roma." },
        { id: "alfabeto", label: "Alfabeto", x: 20, y: 28, color: "#b45309", html: "23 lettere in età classica, solo maiuscole.", why: "Deriva dall'alfabeto etrusco, che a sua volta veniva da un alfabeto greco occidentale portato in Italia dai coloni greci di Cuma (VIII secolo a.C.). I Greci l'avevano preso dai Fenici." },
        { id: "uv", label: "U/V, I/J", x: 8, y: 52, color: "#f59e0b", html: "Una sola lettera per vocale e consonante.", why: "I Romani non sentivano il bisogno di distinguerle. Nel 1500 gli stampatori e lo studioso francese Pierre de la Ramée diffusero l'uso di lettere separate." },
        { id: "pronuncia", label: "Pronuncia", x: 50, y: 30, color: "#2563eb", html: "Due sistemi: scolastica e restituta.", why: "Il latino ha continuato a essere parlato (in chiesa, nelle università) per secoli, e ogni Paese l'ha letto con i suoni della propria lingua. La pronuncia italiana è diventata quella della Chiesa." },
        { id: "scolastica", label: "Scolastica (ecclesiastica)", x: 35, y: 55, color: "#3b82f6", html: "ae → e, ti → zi, c dolce davanti a e/i.", why: "Riflette l'evoluzione del latino parlato nella tarda antichità: già dal III–IV secolo d.C. il dittongo ae si pronunciava e e la c davanti a e/i si era «addolcita», come nell'italiano che ne è nato." },
        { id: "restituta", label: "Restituta", x: 65, y: 55, color: "#0ea5e9", html: "c e g sempre dure, v = u, ae = ai.", why: "Ricostruita dai filologi (tra 1800 e 1900) studiando le trascrizioni greche (Kikéron), i prestiti in altre lingue (Kaiser) e gli errori degli scribi." },
        { id: "accento", label: "Accento", x: 80, y: 28, color: "#16a34a", html: "Mai sull'ultima; legge della penultima.", why: "Il latino distingueva vocali lunghe e brevi: l'accento era «attirato» dalla sillaba lunga vicina alla fine della parola. Lo descrivono i grammatici antichi come Quintiliano." },
        { id: "quantita", label: "Sillabe lunghe e brevi", x: 90, y: 55, color: "#22c55e", html: "Lunga per natura (ā) o per posizione (due consonanti).", why: "La durata delle vocali cambiava il significato: <i>malum</i> con a breve = «male», <i>mālum</i> con a lunga = «mela». Era la base del ritmo della poesia (metrica)." },
        { id: "parole", label: "Parole vive oggi", x: 50, y: 85, color: "#a855f7", html: "video, audio, curriculum, SPQR, motti.", why: "Il latino è rimasto per secoli la lingua della cultura in Europa: scienziati come Galileo (in parte), Newton e Linneo scrissero in latino. Per questo tante parole tecniche e scientifiche sono latine." }
      ],
      edges: [
        ["latino", "alfabeto", "si scrive con"],
        ["alfabeto", "uv", "particolarità"],
        ["latino", "pronuncia", "si legge con"],
        ["pronuncia", "scolastica", "in Italia"],
        ["pronuncia", "restituta", "all'estero"],
        ["latino", "accento", "regole"],
        ["accento", "quantita", "dipende da"],
        ["latino", "parole", "sopravvive in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'accento",
      questions: [
        { type: "mc", q: "Dove cade l'accento in «rosa»?", options: ["ro-SA", "RO-sa", "non ha accento"], answer: 1, explain: "Parola di due sillabe: accento sulla penultima, RÓ-sa." },
        { type: "mc", q: "«Dominus» ha la i della penultima breve (dŏ-mĭ-nus). Dove cade l'accento?", options: ["DÓ-mi-nus", "do-MÍ-nus", "do-mi-NÚS"], answer: 0, explain: "Penultima breve → accento sulla terzultima: DÓminus." },
        { type: "tf", q: "In latino una parola di tre sillabe può avere l'accento sull'ultima.", answer: false, explain: "In latino l'accento non cade mai sull'ultima sillaba." }
      ]
    }
  ],
  glossary: [
    { t: "Alfabeto latino", d: "23 lettere in età classica, derivate dall'alfabeto etrusco e greco." },
    { t: "Pronuncia scolastica (ecclesiastica)", d: "Pronuncia del latino usata in Italia e dalla Chiesa, vicina all'italiano." },
    { t: "Pronuncia restituta", d: "Pronuncia ricostruita del latino classico: c e g dure, v = u, ae = ai." },
    { t: "Dittongo", d: "Due vocali pronunciate in una sola emissione: ae, oe, au." },
    { t: "Legge della penultima", d: "Nei polisillabi l'accento va sulla penultima se è lunga, altrimenti sulla terzultima." },
    { t: "Sillaba lunga per posizione", d: "Sillaba con vocale seguita da due consonanti: pu-él-la." },
    { t: "Macron (ā)", d: "Trattino sopra la vocale che nei vocabolari indica che è lunga." },
    { t: "Scriptio continua", d: "Scrittura senza spazi tra le parole, usata nell'antichità." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quante lettere aveva l'alfabeto latino in età classica?", answer: 23, explain: "23 lettere: A B C D E F G H I K L M N O P Q R S T V X Y Z." },
      { type: "mc", q: "Da quale popolo i Romani presero direttamente l'alfabeto?", options: ["Egizi", "Etruschi", "Celti"], answer: 1, explain: "Dagli Etruschi, che l'avevano preso dai Greci." },
      { type: "text", q: "Come si pronuncia «caelum» nella pronuncia scolastica?", answer: ["celum", "cèlum", "celum (cielo)"], explain: "ae si legge e e la c davanti a e è dolce: «cèlum»." },
      { type: "mc", q: "Come si legge «philosophia» nella pronuncia scolastica?", options: ["pilosopia", "filosofia", "chilosochia"], answer: 1, explain: "ph si legge f." },
      { type: "tf", q: "Nella pronuncia restituta «Cicero» si legge «Kìkero».", answer: true, explain: "Nella pronuncia restituta la c è sempre dura." },
      { type: "mc", q: "In quale parola «ti» si legge «ti» e non «zi»?", options: ["gratia", "hostia", "natio"], answer: 1, explain: "Dopo s, t, x il gruppo ti resta ti: hostia." },
      { type: "mc", q: "In «amīcus» la i è lunga. Dove cade l'accento?", options: ["Á-mi-cus", "a-MÍ-cus", "a-mi-CÚS"], answer: 1, explain: "Penultima lunga → accento sulla penultima: amícus." },
      { type: "order", q: "Metti in ordine i passaggi dell'alfabeto, dal più antico.", items: ["Fenici", "Greci", "Etruschi", "Romani"], explain: "L'alfabeto è passato dai Fenici ai Greci, poi agli Etruschi e infine ai Romani." },
      { type: "text", q: "Che cosa significa la parola latina «video»?", answer: ["io vedo", "vedo"], explain: "Video = «io vedo» (prima persona del verbo videre)." },
      { type: "mc", q: "Perché «puella» ha l'accento su «el»?", options: ["Perché è una parola straniera", "Perché la sillaba è lunga per posizione (seguita da due consonanti, ll)", "Perché l'accento cade sempre sulla seconda sillaba"], answer: 1, explain: "La e è seguita da ll: la sillaba è lunga per posizione e attira l'accento." },
      { type: "tf", q: "Gli antichi Romani scrivevano usando anche le lettere minuscole.", answer: false, explain: "In età classica si scriveva in maiuscolo; le minuscole nacquero nel Medioevo." }
    ]
  }
});
