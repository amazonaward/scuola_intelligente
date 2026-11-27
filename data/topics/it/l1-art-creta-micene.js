TOPIC('it', {
  id: `l1-art-creta-micene`,
  title: `Arte cretese e micenea`,
  intro: `Prima dei templi del Partenone, prima di Omero, il Mediterraneo era già popolato da civiltà splendide: nell'isola di <b>Creta</b> palazzi colorati senza mura, affreschi di delfini e acrobati che saltano i tori; sulla terraferma greca, a <b>Micene</b>, fortezze di blocchi enormi, tombe piene d'oro e re guerrieri. Sono le due civiltà dell'<b>Età del bronzo egea</b>: la prima pacifica e marinara, la seconda armata e fortificata. Capirle significa scoprire le radici dell'arte greca. 🐂⚔️`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. L'Egeo nell'età del bronzo`,
      html: `<p>Nel 2° millennio a.C. (circa 2000-1200 a.C.) nel Mediterraneo orientale fiorirono due civiltà "egee":</p>
<ul>
<li>la <b>civiltà minoica</b> a <b>Creta</b>, dal nome del leggendario re <b>Minosse</b> (il nome fu coniato dall'archeologo inglese <b>Arthur Evans</b>, che dal <b>1900</b> scavò il palazzo di Cnosso). I Minoici vivevano di commercio marittimo, arte e artigianato;</li>
<li>la <b>civiltà micenea</b> (o achea) sulla Grecia continentale (Peloponneso), da Micene, la città di <b>Agamennone</b> in Omero. Erano gruppi di lingua <b>greca</b>, organizzati in regni con re guerrieri e potenti fortezze.</li>
</ul>
<p>I Micenei, che già commerciavano con Creta, ne assimilarono arte e scrittura. Dal 1450 a.C. circa conquistarono Creta dopo che i palazzi cretesi furono distrutti da incendi (forse anche in seguito all'eruzione del vulcano di <b>Thera/Santorini</b> intorno al 1600 a.C., che ne indebolì la potenza). Circa nel <b>1200 a.C.</b> anche i regni micenei crollarono: è l'inizio di un "medioevo ellenico" (circa 1100-800 a.C.) da cui nascerà la Grecia classica.</p>
<p>Per le scritture: il <b>Lineare A</b> (minoico) non è ancora decifrato; il <b>Lineare B</b>, usato a Cnosso e a Micene, è stato decifrato nel <b>1952</b> da <b>Michael Ventris</b> e John Chadwick: è <b>greco</b> arcaico, il più antico testo scritto in greco.</p>`
    },
    {
      type: `widget`, title: `Dalla civiltà minoica alla Grecia`,
      widget: `timeline`,
      options: { unit: `anni`, events: [
        { year: -1900, label: `Primi palazzi a Creta`, icon: `🏛️` },
        { year: -1600, label: `Eruzione di Thera (Santorini)`, icon: `🌋` },
        { year: -1450, label: `Micenei a Cnosso`, icon: `⚔️` },
        { year: -1250, label: `Porta dei Leoni e Tesoro di Atreo`, icon: `🦁` },
        { year: -1200, label: `Crollo dei regni micenei`, icon: `🔥` },
        { year: -776, label: `Prime Olimpiadi`, icon: `🏃` }
      ] },
      caption: `Le date dell'età del bronzo sono approssimate: gli studiosi discutono ancora sull'eruzione di Thera (tra il 1627 e il 1500 a.C.).`
    },
    {
      type: `text`, title: `2. Il palazzo di Cnosso`,
      html: `<p>I Minoici costruivano grandi <b>palazzi</b> a Cnosso, Festo, Mallia, Zakros. Il più importante è quello di <b>Cnosso</b> (Creta settentrionale), costruito in fasi tra il 1900 e il 1450 a.C. circa. Funzionava come <b>reggia, tempio, magazzino e centro amministrativo</b>.</p>
<ul>
<li><b>Pianta</b>: centinaia di stanze (si parla di circa 1300) intorno a una vasta <b>corte centrale</b> rettangolare (circa 50 × 25 m), con corridoi, scale e cortili di luce disposti senza un asse rigoroso. Questa complessità sarebbe all'origine del mito del <b>Labirinto</b> in cui re Minosse tenne il <b>Minotauro</b>: <i>labrys</i> è anche il nome dell'ascia bipenne, simbolo sacro del palazzo.</li>
<li><b>Nessuna mura difensiva</b>: segno di una società che confidava nella flotta e nella pace.</li>
<li><b>Colonne cretesi</b>: di legno dipinto di rosso, sono <b>più larghe in alto che in basso</b> (rastremate verso il basso), con un capitello a cuscino nero (<i>echino</i>) e un abaco quadrato. Una forma opposta a quella greca.</li>
<li><b>Impianti</b>: scale, pozzi di luce, tubature di terracotta, scarichi: ingegneria sorprendente. Magazzini con enormi giare (<b>pithoi</b>) per olio, vino e grano.</li>
<li><b>Sala del Trono</b> con un trono di gesso, sedili e affreschi di grifoni.</li>
</ul>
<p>Evans restaurò il palazzo con ricostruzioni in <b>cemento armato</b> e ridipinse parti degli affreschi: una scelta discussa dagli archeologi di oggi.</p>`
    },
    {
      type: `svg`, title: `Due colonne opposte`,
      caption: `La colonna minoica (a sinistra) si restringe verso il basso, con capitello a cuscino nero; la colonna dorica greca (a destra) si restringe verso l'alto. Una differenza che permette di riconoscere le due civiltà.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<line x1="40" y1="250" x2="560" y2="250" stroke="#78350f" stroke-width="4"/>
<rect x="95" y="62" width="76" height="14" fill="#1c1917"/>
<path d="M105 76 Q133 94 161 76 L161 80 L105 80 Z" fill="#1c1917"/>
<polygon points="105,80 161,80 148,240 118,240" fill="#dc2626" stroke="#7f1d1d" stroke-width="3" stroke-linejoin="round"/>
<rect x="107" y="240" width="52" height="10" fill="#d6c08a" stroke="#78350f" stroke-width="2"/>
<text x="133" y="285" font-size="17" font-weight="bold" fill="#7f1d1d" text-anchor="middle">MINOICA</text>
<text x="133" y="30" font-size="15" fill="#334155" text-anchor="middle">larga in alto</text>
<rect x="355" y="62" width="76" height="14" fill="#e7e5e4" stroke="#44403c" stroke-width="2"/>
<path d="M360 76 Q393 96 426 76 L426 80 L360 80 Z" fill="#d6d3d1" stroke="#44403c" stroke-width="2"/>
<polygon points="368,80 418,80 428,240 358,240" fill="#e7e5e4" stroke="#44403c" stroke-width="3" stroke-linejoin="round"/>
<g stroke="#a8a29e" stroke-width="2"><line x1="378" y1="84" x2="373" y2="238"/><line x1="393" y1="84" x2="393" y2="238"/><line x1="408" y1="84" x2="413" y2="238"/></g>
<text x="393" y="285" font-size="17" font-weight="bold" fill="#44403c" text-anchor="middle">DORICA GRECA</text>
<text x="393" y="30" font-size="15" fill="#334155" text-anchor="middle">stretta in alto</text>
<text x="480" y="140" font-size="15" fill="#334155">legno rosso</text>
<text x="480" y="160" font-size="15" fill="#334155">(minoica)</text>
<text x="480" y="190" font-size="15" fill="#334155">pietra bianca</text>
<text x="480" y="210" font-size="15" fill="#334155">(greca)</text>
</svg>`
    },
    {
      type: `text`, title: `3. L'arte cretese: affreschi, ceramiche, statuette`,
      html: `<p>L'arte minoica è <b>vivace, colorata, naturalistica</b>, attenta al movimento e alla natura: fiori, polpi, delfini, pesci volanti, uccelli, scene di danza e di giochi. Le figure sono slanciate, con la vita sottilissima e gli occhi grandi; le linee sono sinuose e curve.</p>
<ul>
<li><b>Affreschi</b>: dipinti sull'intonaco ancora umido (<i>buon fresco</i>) con colori minerali. Celebri: la <b>Parigina</b> (una giovane donna dal fascino moderno, circa 1500 a.C.), il <b>Principe dei gigli</b> (ricostruzione molto integrata da restauri), i <b>Delfini</b> del Megaron della Regina e il <b>Salto del toro</b> (tauromachia), in cui giovani acrobati, ragazzi e ragazze, afferrano le corna del toro e saltano sul dorso. Museo Archeologico di Heraklion.</li>
<li><b>Ceramiche</b>: lo <b>stile di Kamares</b> (circa 1900-1700 a.C., decorazioni policrome su fondo scuro, "a guscio d'uovo") e lo <b>stile marino</b> (circa 1500 a.C.) con polpi, nautili, alghe che avvolgono il vaso.</li>
<li><b>Statuette</b>: la <b>Dea dei serpenti</b> (circa 1600 a.C., in faience, un tipo di ceramica smaltata), con gonna a balze e seno scoperto; l'ascia bipenne e le "corna di consacrazione" sono simboli sacri.</li>
<li><b>Sigilli e gioielli</b>: come il <b>pendente delle api</b> in oro di Mallia (circa 1700 a.C.).</li>
</ul>
<p>Nell'isola di <b>Thera</b> (Santorini), la città minoica di <b>Akrotiri</b>, sepolta dall'eruzione di circa 1600 a.C. come una piccola Pompei, ha restituito affreschi con una flotta in viaggio e scene di vita marinara.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: Creta`,
      questions: [
        { type: `mc`, q: `Chi scavò il palazzo di Cnosso dal 1900?`, options: [`Arthur Evans`, `Heinrich Schliemann`, `Howard Carter`], answer: 0, explain: `L'archeologo inglese Arthur Evans, che coniò il termine "minoico".` },
        { type: `tf`, q: `Il palazzo di Cnosso era circondato da possenti mura.`, answer: false, explain: `I palazzi minoici non avevano mura: la sicurezza era affidata alla flotta.` },
        { type: `mc`, q: `Le colonne minoiche sono…`, options: [`più larghe in basso`, `più larghe in alto`, `perfettamente cilindriche`], answer: 1, explain: `Si restringono verso il basso: forma opposta alle colonne doriche.` }
      ]
    },
    {
      type: `example`, title: `Esempio: da dove nasce il mito del Minotauro?`,
      html: `<p>Il mito greco racconta che il re Minosse fece costruire a <b>Dedalo</b> un labirinto per tenervi il Minotauro (uomo con testa di toro), a cui Atene doveva mandare ogni anno 7 ragazzi e 7 ragazze, finché <b>Teseo</b> lo uccise con l'aiuto di Arianna e del suo filo. Probabilmente il mito ricorda <b>tre cose reali</b>: il palazzo-labirinto di Cnosso con le sue centinaia di stanze, il <b>culto del toro</b> (la tauromachia degli affreschi) e il dominio marittimo di Creta sulle città greche. Non sappiamo se il labirinto sia davvero Cnosso: è un'ipotesi suggestiva, non una prova.</p>`
    },
    {
      type: `text`, title: `4. Micene: la città-fortezza`,
      html: `<p>La civiltà micenea è <b>guerriera</b>. Le città (Micene, Tirinto, Pilo) sorgono su alture e sono circondate da <b>mura ciclopiche</b>, così chiamate perché i Greci successivi pensavano fossero opera dei <b>Ciclopi</b>: enormi blocchi di pietra non lavorata o appena sbozzata, incastrati senza malta. All'interno c'è la <b>cittadella</b> con il palazzo del re (<i>wanax</i>), i magazzini e le tombe reali.</p>
<p>Il cuore del palazzo è il <b>megaron</b>: una sala rettangolare preceduta da un <b>vestibolo con due colonne</b>, con al centro un <b>focolare circolare</b> circondato da quattro colonne che reggono il tetto, e il trono contro una parete. Il suo schema (vestibolo, sala, tetto a doppio spiovente) è l'<b>antenato del tempio greco</b>.</p>
<p><b>La Porta dei Leoni</b> (circa <b>1250 a.C.</b>) è l'ingresso principale della cittadella di Micene: due stipiti verticali sostengono un enorme <b>architrave monolitico</b> (lungo circa 4,5 m, di circa 20 tonnellate), e sopra di esso un <b>triangolo di scarico</b>, una cavità triangolare riempita da una lastra di pietra più sottile per non far gravare il peso sull'architrave. Sulla lastra è scolpito in rilievo un gruppo di <b>due leonesse (o leoni) rampanti</b> che poggiano le zampe anteriori su un altare con una <b>colonna minoica</b> (rastremata verso il basso). È il più antico rilievo monumentale d'Europa e il più antico simbolo araldico: si trovano ancora oggi stemmi con animali che reggono uno scudo o una colonna.</p>`
    },
    {
      type: `svg`, title: `La Porta dei Leoni (schema)`,
      caption: `Due stipiti, architrave monolitico e triangolo di scarico che alleggerisce il peso sopra l'architrave. Al centro la colonna minoica con i due animali araldici.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e7e5e4"/>
<rect x="0" y="262" width="600" height="38" fill="#a8a29e"/>
<rect x="150" y="170" width="70" height="92" fill="#a8a29e" stroke="#292524" stroke-width="3"/>
<rect x="380" y="170" width="70" height="92" fill="#a8a29e" stroke="#292524" stroke-width="3"/>
<rect x="130" y="135" width="340" height="35" fill="#78716c" stroke="#292524" stroke-width="3"/>
<polygon points="145,135 455,135 300,30" fill="#d6d3d1" stroke="#292524" stroke-width="3"/>
<polygon points="240,125 360,125 300,60" fill="none"/>
<polygon points="288,70 312,70 316,128 284,128" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<rect x="282" y="62" width="36" height="8" fill="#1c1917"/>
<path d="M280 128 L252 128 Q230 120 238 100 Q232 80 258 78 Q270 72 278 92 L284 128 Z" fill="#f59e0b" stroke="#78350f" stroke-width="2"/>
<path d="M320 128 L348 128 Q370 120 362 100 Q368 80 342 78 Q330 72 322 92 L316 128 Z" fill="#f59e0b" stroke="#78350f" stroke-width="2"/>
<text x="300" y="215" font-size="15" font-weight="bold" fill="#1c1917" text-anchor="middle">varco</text>
<text x="500" y="152" font-size="14" fill="#1c1917">architrave</text>
<text x="475" y="100" font-size="14" fill="#1c1917">triangolo di scarico</text>
<text x="490" y="60" font-size="14" fill="#1c1917">con i leoni</text>
<text x="60" y="190" font-size="14" fill="#1c1917">stipite</text>
</svg>`
    },
    {
      type: `text`, title: `5. Le tombe micenee e il "Tesoro di Atreo"`,
      html: `<p>I re micenei si facevano seppellire con il loro tesoro.</p>
<ul>
<li><b>Tombe a fossa e Circolo A</b> (XVI sec. a.C.): dentro la cittadella di Micene; scavate nel <b>1876</b> da <b>Heinrich Schliemann</b>, già scopritore di Troia (1871), che vi trovò scheletri coperti d'oro: armi, coppe, gioielli e cinque <b>maschere d'oro</b> poste sul volto dei defunti.</li>
<li><b>Maschera di Agamennone</b> (XVI sec. a.C., oro battuto, Museo Archeologico Nazionale di Atene): Schliemann pensò di aver visto il volto del re omerico e scrisse (secondo la tradizione) "Ho guardato negli occhi Agamennone". In realtà la maschera è di circa <b>tre secoli precedente</b> alla guerra di Troia.</li>
<li><b>Tombe a tholos</b> (dal XIV-XIII sec. a.C.): tombe monumentali sotto un tumulo con una <b>camera circolare a falsa cupola</b>, preceduta da un lungo corridoio d'ingresso scoperto, il <b>dromos</b>. Il <b>Tesoro di Atreo</b> (detto anche Tomba di Agamennone, circa <b>1250 a.C.</b>) ha il dromos lungo circa 36 m e una camera di circa 14,5 m di diametro e 13,5 m di altezza, costruita con file orizzontali di blocchi squadrati, ognuna <b>sporgente</b> rispetto alla precedente fino a chiudersi in alto (<b>falsa cupola per aggetto</b>); sopra la porta un architrave monolitico di circa 120 tonnellate.</li>
</ul>
<p>La <b>falsa volta</b> non è un vero arco: i blocchi sono posati orizzontalmente (non si "spingono" lateralmente come in un arco vero). Il vero arco e la cupola a raggi nasceranno con gli Etruschi e i Romani.</p>`
    },
    {
      type: `svg`, title: `Sezione di una tomba a tholos`,
      caption: `Dromos (corridoio), porta con architrave monolitico e camera a falsa cupola: ogni filare sporge rispetto al precedente (aggetto) fino a chiudersi in alto con una pietra.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<path d="M50 250 L560 250 L560 280 L50 280 Z" fill="#a16207"/>
<path d="M170 250 Q170 70 360 55 Q550 70 550 250 Z" fill="#84cc16" stroke="#3f6212" stroke-width="3"/>
<g fill="#d6d3d1" stroke="#44403c" stroke-width="2">
<polygon points="250,250 250,225 470,225 470,250"/>
<polygon points="256,225 256,200 464,200 464,225"/>
<polygon points="268,200 268,176 452,176 452,200"/>
<polygon points="284,176 284,153 436,153 436,176"/>
<polygon points="304,153 304,132 416,132 416,153"/>
<polygon points="326,132 326,114 394,114 394,132"/>
<polygon points="344,114 344,100 376,100 376,114"/>
<polygon points="352,100 352,90 368,90 368,100"/>
</g>
<polygon points="170,250 250,250 250,200 170,200" fill="#78716c" opacity="0.0"/>
<rect x="60" y="205" width="190" height="45" fill="#fde68a" stroke="#92400e" stroke-width="2" stroke-dasharray="6 4"/>
<rect x="228" y="190" width="24" height="60" fill="#44403c"/>
<rect x="222" y="178" width="36" height="12" fill="#78716c" stroke="#292524" stroke-width="2"/>
<text x="150" y="235" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">dromos</text>
<text x="360" y="245" font-size="16" font-weight="bold" fill="#1c1917" text-anchor="middle">camera circolare</text>
<text x="270" y="170" font-size="14" fill="#1c1917" text-anchor="middle">architrave</text>
<text x="360" y="50" font-size="14" fill="#365314" text-anchor="middle">tumulo di terra</text>
</svg>`
    },
    {
      type: `example`, title: `Esempio: perché la falsa cupola non crolla`,
      html: `<p>Ogni filare di blocchi sporge verso l'interno di pochi centimetri rispetto a quello sotto. Finché il baricentro di ogni blocco resta <b>sopra il filare sottostante</b> (cioè la sporgenza è meno della metà della lunghezza), non c'è rischio di ribaltamento. In più il peso del tumulo di terra sopra e intorno <b>stringe</b> i blocchi dall'esterno e li tiene fermi. Una volta chiusa la cupola, la camera regge per oltre 3000 anni senza malta né centine. Lo stesso principio, in miniatura: prova a sporgere i libri di una pila uno alla volta, senza far cadere la pila.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Santorini ha forse ispirato Atlantide?`,
      html: `<p>L'esplosione del vulcano di Thera (circa 1600 a.C.) fu una delle maggiori eruzioni degli ultimi 10.000 anni: l'isola si spaccò, formando la caldera in cui oggi è il mare. Molti studiosi hanno proposto un legame con il mito di <b>Atlantide</b> (raccontato da Platone nel IV sec. a.C.): una grande civiltà marinara inghiottita dal mare. È un'ipotesi suggestiva, ma Platone scrisse oltre mille anni dopo e parla di un'isola oltre le Colonne d'Ercole: la storia rimane un racconto filosofico.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Schliemann trovò Troia, e quasi tutto il resto, con un errore?`,
      html: `<p>Heinrich Schliemann (1822-1890), commerciante tedesco arricchito, scavò a <b>Hisarlik</b> (Turchia) nel 1871-73 convinto di trovare la Troia di Omero. Scavò così in fretta e in profondità da distruggere gli strati più recenti. Trovò un tesoro che chiamò "Tesoro di Priamo", ma apparteneva a una città più antica (circa 2500 a.C.) di oltre mille anni rispetto alla guerra di Troia. A Micene, invece, i suoi scavi (1876) furono molto più preziosi: rivelarono una civiltà dimenticata.</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li><b>Creta (minoica)</b>: palazzo senza mura (Cnosso, Evans dal 1900), affreschi naturalistici, colonna rastremata verso il basso, labirinto e Minotauro.</li>
<li><b>Micene (achea)</b>: città-fortezza, mura ciclopiche, <b>megaron</b> (antenato del tempio), <b>Porta dei Leoni</b> (circa 1250 a.C.).</li>
<li><b>Tholos</b>: tomba con falsa cupola per aggetto (Tesoro di Atreo); <b>maschera di Agamennone</b> (XVI sec. a.C.), Schliemann 1876.</li>
<li>Lineare B decifrata da Ventris (1952): è greco.</li>
<li>Fine nel 1200 a.C. circa: crollo dell'età del bronzo.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Due civiltà, due caratteri: ecco altri modi per ricordare la differenza.`,
      tabs: [
        {
          label: `⚖️ Creta o Micene?`,
          html: `<table>
<tr><th></th><th>Creta minoica</th><th>Micene achea</th></tr>
<tr><td><b>Società</b></td><td>commercio marittimo</td><td>guerrieri e conquiste</td></tr>
<tr><td><b>Città</b></td><td>palazzi in pianura, senza mura</td><td>cittadelle su altura con mura ciclopiche</td></tr>
<tr><td><b>Arte</b></td><td>natura, movimento, colore</td><td>forza, oro, armi, fortezze</td></tr>
<tr><td><b>Colonna</b></td><td>rastremata verso il basso</td><td>(imita la minoica)</td></tr>
<tr><td><b>Tombe</b></td><td>poco monumentali</td><td>tholos, maschere d'oro</td></tr>
</table>`
        },
        {
          label: `🧩 Il megaron in pianta`,
          html: `<p>Il <b>megaron</b> miceneo ha un vestibolo (<i>prodomos</i>) aperto davanti con due colonne, un'anticamera e la sala principale con focolare circolare e quattro colonne. Confrontalo con la pianta del tempio greco: un portico, una cella (<i>naos</i>) per la statua del dio: il tempio nasce da questa sala del re.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<rect x="60" y="60" width="480" height="140" fill="#fef3c7" stroke="#78350f" stroke-width="4"/>
<line x1="180" y1="60" x2="180" y2="200" stroke="#78350f" stroke-width="4"/>
<line x1="260" y1="60" x2="260" y2="200" stroke="#78350f" stroke-width="4"/>
<rect x="60" y="100" width="6" height="60" fill="#fffbeb"/>
<circle cx="80" cy="110" r="7" fill="#dc2626"/><circle cx="80" cy="150" r="7" fill="#dc2626"/>
<circle cx="400" cy="130" r="34" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
<g fill="#dc2626"><circle cx="340" cy="90" r="7"/><circle cx="460" cy="90" r="7"/><circle cx="340" cy="170" r="7"/><circle cx="460" cy="170" r="7"/></g>
<rect x="510" y="105" width="22" height="50" fill="#a16207" stroke="#451a03" stroke-width="2"/>
<g font-size="15" font-weight="bold" fill="#1c1917" text-anchor="middle">
<text x="120" y="40">vestibolo</text><text x="220" y="40">anticamera</text><text x="400" y="40">sala del focolare</text>
<text x="400" y="135" font-size="14">focolare</text>
<text x="521" y="225" font-size="14">trono</text>
</g>
</svg>`
        },
        {
          label: `🏰 Le mura ciclopiche in 3D`,
          html: `<p>Mura "ciclopiche": non c'è malta, solo il peso e l'incastro. Prova a ruotare un blocco: nei solidi la <b>stabilità</b> dipende dalla base larga. È lo stesso principio per cui la parte bassa dei muri è più massiccia di quella alta.</p>`,
          scene: `solid`,
          options: { shape: `box`, w: 4, h: 1.2, d: 1.5, color: `#a8a29e`, labels: true, shapes: [`box`, `cube`, `cylinder`] }
        },
        {
          label: `🏷️ Abbina`,
          html: `<p>Collega ogni elemento al suo luogo.</p>`,
          widget: `match`,
          options: { pairs: [[`Cnosso`, `Palazzo-labirinto`], [`Micene`, `Porta dei Leoni`], [`Tesoro di Atreo`, `Tomba a tholos`], [`Akrotiri`, `Città minoica sepolta dal vulcano`], [`Pilo`, `Palazzo miceneo con tavolette in Lineare B`]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: l'Egeo nell'età del bronzo`,
      nodes: [
        { id: `egeo`, label: `Egeo età del bronzo`, x: 50, y: 6, color: `#64748b`, html: `Circa 2000-1200 a.C.`, why: `Il mare unisce: Creta commercia con Egitto e Levante, e passa il suo stile ai Micenei.` },
        { id: `cre`, label: `Creta minoica`, x: 24, y: 32, color: `#0ea5e9`, html: `Palazzi senza mura, affreschi, ceramiche marine.`, why: `Una talassocrazia: la sicurezza è nel mare, non nelle mura. Per Tucidide Minosse fu il primo a dominare il mare.` },
        { id: `mic`, label: `Micene achea`, x: 76, y: 32, color: `#ef4444`, html: `Cittadelle, re guerrieri, tombe d'oro.`, why: `Le terre aspre e le rivalità tra regni spingono a fortificare e a combattere: le mura ciclopiche proteggono re e tesoro.` },
        { id: `cnos`, label: `Cnosso e il labirinto`, x: 12, y: 62, color: `#3b82f6`, html: `Palazzo di centinaia di stanze.`, why: `Evans lo scavò dal 1900; la pianta complessa ispira il mito del Minotauro.` },
        { id: `aff`, label: `Affreschi e ceramiche`, x: 36, y: 62, color: `#22c55e`, html: `Delfini, Parigina, Salto del toro.`, why: `Natura e movimento: la religione minoica, legata alla natura e alla Dea Madre, si esprime in linee curve.` },
        { id: `leo`, label: `Porta dei Leoni`, x: 64, y: 62, color: `#f59e0b`, html: `Ingresso di Micene, circa 1250 a.C.`, why: `Il triangolo di scarico mostra il genio tecnico: ridurre il carico sull'architrave. Il rilievo è il primo simbolo araldico d'Europa.` },
        { id: `tho`, label: `Tholos e maschere`, x: 88, y: 62, color: `#a855f7`, html: `Tombe reali e oro.`, why: `Il re guerriero porta nell'aldilà armi e oro: la ricchezza è esibita nella tomba.` },
        { id: `gre`, label: `Verso la Grecia classica`, x: 50, y: 90, color: `#14b8a6`, html: `Megaron → tempio; lingua greca (Lineare B).`, why: `Dopo il crollo del 1200 a.C. si salvano la lingua, i miti (Omero) e lo schema del megaron: la Grecia nasce da qui.` }
      ],
      edges: [
        [`egeo`, `cre`, `sud`], [`egeo`, `mic`, `nord`], [`cre`, `cnos`, `palazzo`], [`cre`, `aff`, `arte`], [`mic`, `leo`, `porta`], [`mic`, `tho`, `tombe`], [`cnos`, `gre`, `eredità`], [`leo`, `gre`, `eredità`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: Micene`,
      questions: [
        { type: `mc`, q: `A che cosa serve il triangolo di scarico sopra l'architrave?`, options: [`Ad alleggerire il peso che grava sull'architrave`, `A dare ombra`, `A far entrare la luce`], answer: 0, explain: `Il vuoto triangolare, chiuso da una lastra sottile, scarica il peso ai lati.` },
        { type: `tf`, q: `Il megaron è la sala principale del palazzo miceneo, con focolare centrale.`, answer: true, explain: `È l'antenato della cella del tempio greco.` },
        { type: `mc`, q: `Chi scavò le tombe del Circolo A di Micene nel 1876?`, options: [`Schliemann`, `Evans`, `Ventris`], answer: 0, explain: `Heinrich Schliemann, che trovò anche le maschere d'oro.` },
        { type: `num`, q: `Circa in che anno (a.C.) fu costruita la Porta dei Leoni?`, answer: 1250, tol: 50, explain: `Circa 1250 a.C.` }
      ]
    }
  ],
  glossary: [
    { t: `Civiltà minoica`, d: `Civiltà di Creta (circa 2000-1450 a.C.), dal re leggendario Minosse.` },
    { t: `Civiltà micenea`, d: `Civiltà greca dell'età del bronzo, da Micene, con re guerrieri.` },
    { t: `Labirinto`, d: `Dal minoico labrys (ascia bipenne): il palazzo di Cnosso e il mito del Minotauro.` },
    { t: `Mura ciclopiche`, d: `Mura di enormi blocchi di pietra non squadrati e senza malta.` },
    { t: `Megaron`, d: `Sala rettangolare del palazzo miceneo con vestibolo, focolare e quattro colonne.` },
    { t: `Triangolo di scarico`, d: `Apertura triangolare sopra l'architrave per ridurre il peso.` },
    { t: `Tholos`, d: `Tomba con camera circolare a falsa cupola.` },
    { t: `Dromos`, d: `Corridoio scoperto di accesso a una tomba a tholos.` },
    { t: `Falsa cupola`, d: `Copertura a filari sporgenti (per aggetto), non a vera volta.` },
    { t: `Lineare B`, d: `Scrittura sillabica micenea, decifrata nel 1952: è greco.` },
    { t: `Affresco`, d: `Pittura sull'intonaco ancora fresco.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale civiltà costruì palazzi senza mura difensive?`, options: [`Minoica`, `Micenea`, `Assira`], answer: 0, explain: `I Minoici confidavano nella flotta.` },
      { type: `mc`, q: `Come si chiamano le mura di enormi blocchi dei Micenei?`, options: [`Ciclopiche`, `Isodome`, `Poligonali`], answer: 0, explain: `Ciclopiche: si credeva fossero state costruite dai Ciclopi.` },
      { type: `tf`, q: `La Maschera di Agamennone è di circa tre secoli precedente alla guerra di Troia.`, answer: true, explain: `Risale al XVI sec. a.C., quando la guerra di Troia si colloca nel XIII-XII secolo a.C.` },
      { type: `mc`, q: `Chi decifrò il Lineare B nel 1952?`, options: [`Michael Ventris`, `Arthur Evans`, `Champollion`], answer: 0, explain: `Michael Ventris, con John Chadwick: è greco.` },
      { type: `mc`, q: `Come si chiama il corridoio di accesso a una tomba a tholos?`, options: [`Dromos`, `Pronao`, `Naos`], answer: 0, explain: `Il dromos è un lungo corridoio scoperto.` },
      { type: `text`, q: `Come si chiama la sala del palazzo miceneo che anticipa il tempio greco?`, answer: [`megaron`, `il megaron`], explain: `Il megaron.` },
      { type: `order`, q: `Metti in ordine cronologico.`, items: [`Primi palazzi di Creta`, `Eruzione di Thera`, `Porta dei Leoni`, `Crollo dei regni micenei`], explain: `Circa 1900, 1600, 1250 e 1200 a.C.` },
      { type: `tf`, q: `Sulla Porta dei Leoni gli animali poggiano le zampe su un altare con una colonna minoica.`, answer: true, explain: `La colonna rastremata verso il basso è un motivo minoico.` },
      { type: `num`, q: `Circa quanto è lungo il dromos del Tesoro di Atreo (m)?`, answer: 36, tol: 2, unit: `m`, explain: `Circa 36 m.` },
      { type: `mc`, q: `Quale soggetto compare nell'affresco del "Salto del toro"?`, options: [`Giovani acrobati`, `Guerrieri`, `Sacerdoti egizi`], answer: 0, explain: `Ragazzi e ragazze saltano sul dorso del toro afferrandone le corna.` }
    ]
  }
});
