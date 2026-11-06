TOPIC('it', {
  id: `m3-tec-elettricita-elettronica`,
  title: `Elettricità ed elettronica`,
  intro: `Accendi la luce, carichi il telefono, la lavatrice parte da sola alla fine del programma: tutto grazie all'<b>elettricità</b> e all'<b>elettronica</b>. In questa lezione scopriamo che cos'è la corrente elettrica, come si costruisce un <b>circuito</b>, la <b>legge di Ohm</b>, i principali <b>componenti</b> (resistori, LED, diodi, condensatori, transistor) e i <b>sensori</b> che permettono alle macchine di "sentire" il mondo. ⚡🔌`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Da dove viene l'elettricità: cariche ed elettroni`,
      html: `<p>Tutta la materia è fatta di <b>atomi</b>. Ogni atomo ha un <b>nucleo</b> con <b>protoni</b> (carica positiva +) e neutroni (senza carica), e intorno gli <b>elettroni</b> (carica negativa −).</p>
<p>Nei <b>metalli</b> (rame, alluminio, argento…) gli elettroni più esterni sono legati debolmente: possono spostarsi da un atomo all'altro. Si chiamano <b>elettroni liberi</b>.</p>
<p>La <b>corrente elettrica</b> è un <b>flusso ordinato di cariche elettriche</b> (nei fili metallici: elettroni) che si muovono in un <b>circuito chiuso</b>.</p>
<ul>
<li><b>Conduttori</b>: lasciano passare facilmente la corrente (metalli, grafite, acqua salata, il corpo umano!).</li>
<li><b>Isolanti</b>: la bloccano (plastica, gomma, vetro, legno secco, ceramica, aria).</li>
<li><b>Semiconduttori</b>: a metà strada; la loro conducibilità si può controllare (silicio, germanio). Sono la base dell'<b>elettronica</b>.</li>
</ul>`
    },
    {
      type: `3d`, title: `Gli atomi di un conduttore e di un semiconduttore`,
      scene: `atom`,
      options: { elements: [`Cu`, `Al`, `Si`] },
      caption: `Il rame (Cu) ha un solo elettrone nel guscio più esterno, facile da "staccare": per questo è un ottimo conduttore. Il silicio (Si) ne ha 4: è un semiconduttore.`
    },
    {
      type: `text`, title: `2. Le tre grandezze: tensione, corrente, resistenza`,
      html: `<p>Pensa a un circuito come a un <b>impianto idraulico</b>:</p>
<table>
<tr><th>Grandezza</th><th>Simbolo</th><th>Unità</th><th>Strumento</th><th>Analogia con l'acqua</th></tr>
<tr><td><b>Tensione</b> (differenza di potenziale)</td><td>V</td><td>volt (V)</td><td>voltmetro</td><td>la <b>pressione</b> / il dislivello che spinge l'acqua</td></tr>
<tr><td><b>Intensità di corrente</b></td><td>I</td><td>ampere (A)</td><td>amperometro</td><td>quanta acqua passa <b>ogni secondo</b></td></tr>
<tr><td><b>Resistenza</b></td><td>R</td><td>ohm (Ω)</td><td>ohmmetro</td><td>un <b>tubo stretto</b> che frena il flusso</td></tr>
</table>
<p>Un <b>multimetro</b> (o tester) misura tutte e tre.</p>
<p>Valori utili: una pila stilo AA = <b>1,5 V</b>; una batteria da auto = <b>12 V</b>; la porta USB = <b>5 V</b>; la presa di casa in Italia = <b>230 V</b> alternata a <b>50 Hz</b> (pericolosa!).</p>`
    },
    {
      type: `text`, title: `3. La legge di Ohm e la potenza`,
      html: `<p>Nel <b>1827</b> il fisico tedesco <b>Georg Simon Ohm</b> scoprì che in molti conduttori tensione e corrente sono <b>direttamente proporzionali</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>V = R × I</b></p>
<p>e quindi: <b>I = V ÷ R</b> e <b>R = V ÷ I</b>.</p>
<p>Esempio: una resistenza di <b>100 Ω</b> collegata a <b>5 V</b> ➜ I = 5 ÷ 100 = <b>0,05 A</b> = 50 mA (milliampere).</p>
<p>La <b>potenza elettrica</b> (quanta energia viene usata ogni secondo) si misura in <b>watt (W)</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>P = V × I</b></p>
<p>Esempio: un phon a 230 V che assorbe 8 A ha potenza 230 × 8 = <b>1840 W</b>. L'energia consumata si paga in <b>kilowattora (kWh)</b>: 1 kW usato per 1 ora.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: grandezze e legge di Ohm`,
      questions: [
        { type: `mc`, q: `In che unità si misura la resistenza?`, options: [`volt`, `ampere`, `ohm`], answer: 2, explain: `La resistenza si misura in ohm (Ω), in onore di Georg Ohm.` },
        { type: `num`, q: `Una resistenza di 10 Ω è collegata a una pila da 9 V. Quanti ampere passano?`, answer: 0.9, tol: 0.01, unit: `A`, explain: `I = V ÷ R = 9 ÷ 10 = 0,9 A.` },
        { type: `tf`, q: `La plastica è un buon conduttore.`, answer: false, explain: `La plastica è un isolante: per questo ricopre i fili elettrici.` }
      ]
    },
    {
      type: `text`, title: `4. Il circuito elettrico: serie e parallelo`,
      html: `<p>Un circuito elementare ha sempre:</p>
<ol>
<li>un <b>generatore</b> (pila, batteria, alimentatore) che fornisce la tensione;</li>
<li>dei <b>conduttori</b> (fili) che portano la corrente;</li>
<li>un <b>utilizzatore</b> (lampadina, motore, LED) che trasforma l'energia elettrica in luce, movimento, calore…;</li>
<li>un <b>interruttore</b> per aprire o chiudere il circuito.</li>
</ol>
<p>La corrente circola solo se il circuito è <b>chiuso</b>. Per convenzione si dice che va dal <b>+</b> al <b>−</b> (verso convenzionale), anche se gli elettroni si muovono al contrario!</p>
<p><b>Collegamento in serie</b>: i componenti sono uno dopo l'altro, su un unico percorso. La corrente è la stessa in tutti; se una lampadina si brucia, si spengono tutte (come le vecchie lucine di Natale). Le resistenze si sommano: R<sub>tot</sub> = R<sub>1</sub> + R<sub>2</sub>.</p>
<p><b>Collegamento in parallelo</b>: ogni componente ha il suo ramo. La tensione è la stessa su tutti; se una lampadina si brucia, le altre restano accese. È così che sono collegate le prese di casa.</p>`
    },
    {
      type: `svg`, title: `Schema: circuito in serie e in parallelo`,
      caption: `A sinistra due lampadine in serie (un solo percorso); a destra in parallelo (due rami). Simboli unificati: pila, interruttore, lampada.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="28" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle">SERIE</text>
<text x="450" y="28" font-size="18" font-weight="bold" fill="#166534" text-anchor="middle">PARALLELO</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<polyline points="40,150 40,60 105,60"/><polyline points="135,60 260,60 260,95"/><line x1="260" y1="145" x2="260" y2="175"/><polyline points="260,225 260,250 40,250 40,180"/>
<line x1="105" y1="60" x2="130" y2="45"/>
<line x1="20" y1="150" x2="60" y2="150"/><line x1="28" y1="180" x2="52" y2="180"/>
<circle cx="260" cy="120" r="22"/><line x1="245" y1="105" x2="275" y2="135"/><line x1="275" y1="105" x2="245" y2="135"/>
<circle cx="260" cy="200" r="22"/><line x1="245" y1="185" x2="275" y2="215"/><line x1="275" y1="185" x2="245" y2="215"/>
</g>
<circle cx="105" cy="60" r="4" fill="#0f172a"/><circle cx="135" cy="60" r="4" fill="#0f172a"/>
<text x="70" y="145" font-size="16" fill="#dc2626" font-weight="bold">+</text>
<text x="70" y="195" font-size="16" fill="#2563eb" font-weight="bold">−</text>
<text x="120" y="88" font-size="13" fill="#334155" text-anchor="middle">interruttore</text>
<text x="100" y="170" font-size="13" fill="#334155" text-anchor="middle">pila</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<polyline points="340,150 340,60 560,60 560,98"/><polyline points="460,60 460,98"/>
<polyline points="460,142 460,250"/><polyline points="560,142 560,250 340,250 340,180"/>
<line x1="320" y1="150" x2="360" y2="150"/><line x1="328" y1="180" x2="352" y2="180"/>
<circle cx="460" cy="120" r="22"/><line x1="445" y1="105" x2="475" y2="135"/><line x1="475" y1="105" x2="445" y2="135"/>
<circle cx="560" cy="120" r="22"/><line x1="545" y1="105" x2="575" y2="135"/><line x1="575" y1="105" x2="545" y2="135"/>
</g>
<circle cx="460" cy="60" r="5" fill="#0f172a"/><circle cx="460" cy="250" r="5" fill="#0f172a"/>
<text x="370" y="145" font-size="16" fill="#dc2626" font-weight="bold">+</text>
<text x="370" y="195" font-size="16" fill="#2563eb" font-weight="bold">−</text>
<text x="510" y="200" font-size="13" fill="#166534" text-anchor="middle">2 rami</text>
<text x="300" y="285" font-size="14" fill="#334155" text-anchor="middle">⊗ = lampada · lunga/corta = pila (+/−) · ● = nodo</text>
</svg>`
    },
    {
      type: `text`, title: `5. Dall'elettricità all'elettronica: i componenti`,
      html: `<p>L'<b>elettrotecnica</b> usa l'elettricità come <b>energia</b> (motori, stufe, luci). L'<b>elettronica</b> la usa per <b>controllare</b> e trasportare <b>informazioni</b> (computer, telefoni, sensori). I componenti principali:</p>
<ul>
<li><b>Resistore</b>: limita la corrente. Il valore è scritto con <b>anelli colorati</b> (es. marrone-nero-rosso = 1000 Ω = 1 kΩ).</li>
<li><b>Diodo</b>: fa passare la corrente <b>in un solo verso</b>, come una valvola di non ritorno.</li>
<li><b>LED</b> (Light Emitting Diode): un diodo che <b>emette luce</b>. Ha una gamba lunga (+, anodo) e una corta (−, catodo) e va sempre protetto con una <b>resistenza</b>, altrimenti si brucia.</li>
<li><b>Condensatore</b>: accumula per un attimo cariche elettriche e le rilascia (come un piccolo serbatoio): serve per filtrare, temporizzare, il flash della macchina fotografica.</li>
<li><b>Transistor</b>: un interruttore o amplificatore <b>comandato elettricamente</b>, senza parti in movimento. Un processore moderno ne contiene <b>miliardi</b>.</li>
<li><b>Circuito integrato</b> (chip): tanti componenti miniaturizzati su una piastrina di silicio.</li>
</ul>`
    },
    {
      type: `text`, title: `6. I sensori: gli "organi di senso" dei circuiti`,
      html: `<p>Un <b>sensore</b> trasforma una grandezza fisica (luce, calore, movimento…) in un <b>segnale elettrico</b> che un circuito o un microcontrollore può leggere.</p>
<table>
<tr><th>Sensore</th><th>Che cosa "sente"</th><th>Dove lo trovi</th></tr>
<tr><td><b>Fotoresistenza (LDR)</b></td><td>luce: più luce, meno resistenza</td><td>lampioni che si accendono al buio</td></tr>
<tr><td><b>Termistore (NTC)</b></td><td>temperatura</td><td>termostato, frigorifero, termometro digitale</td></tr>
<tr><td><b>PIR</b> (infrarossi passivi)</td><td>movimento di corpi caldi</td><td>allarmi, luci delle scale</td></tr>
<tr><td><b>Ultrasuoni</b></td><td>distanza (eco)</td><td>sensori di parcheggio dell'auto</td></tr>
<tr><td><b>Microfono</b></td><td>suono</td><td>telefono, assistenti vocali</td></tr>
<tr><td><b>Accelerometro</b></td><td>movimento e inclinazione</td><td>smartphone (rotazione dello schermo), contapassi</td></tr>
</table>
<p>Il segnale può essere <b>analogico</b> (varia con continuità, come la luminosità) o <b>digitale</b> (solo 0 e 1, acceso/spento).</p>`
    },
    {
      type: `widget`, title: `Gioco: conduttore o isolante?`,
      widget: `classify`,
      options: {
        groups: [`Conduttori ⚡`, `Isolanti 🛑`, `Semiconduttori 🔬`],
        items: [
          [`🟠 rame`, 0], [`🥈 argento`, 0], [`✏️ grafite della matita`, 0], [`🌊 acqua salata`, 0],
          [`🧤 gomma`, 1], [`🍶 vetro`, 1], [`🪵 legno secco`, 1], [`🧴 plastica`, 1], [`🍽️ ceramica`, 1],
          [`💎 silicio`, 2], [`⚙️ germanio`, 2]
        ]
      },
      caption: `Attenzione: l'acqua di casa (con sali disciolti) conduce! Mai toccare prese o apparecchi con le mani bagnate.`
    },
    {
      type: `example`, title: `Esempio pratico: calcolare la resistenza per un LED`,
      html: `<p>Vuoi accendere un <b>LED rosso</b> con una porta USB da <b>5 V</b>. Il LED ha bisogno di circa <b>2 V</b> e di una corrente di <b>20 mA</b> (0,02 A).</p>
<ol>
<li>Tensione che la resistenza deve "assorbire": 5 − 2 = <b>3 V</b>.</li>
<li>Legge di Ohm: R = V ÷ I = 3 ÷ 0,02 = <b>150 Ω</b>.</li>
<li>Si sceglie il valore commerciale più vicino, un po' più grande: <b>150 Ω o 220 Ω</b> (il LED sarà un po' meno luminoso ma più sicuro).</li>
</ol>
<p>Senza resistenza, la corrente salirebbe troppo e il LED si brucerebbe in un attimo.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: la luce automatica del giardino`,
      html: `<p>Una lampada da giardino a energia solare funziona così:</p>
<ul>
<li>di giorno il <b>pannello fotovoltaico</b> (fatto di silicio) trasforma la luce in elettricità e carica una <b>batteria</b>;</li>
<li>un <b>sensore di luce</b> (spesso il pannello stesso o una fotoresistenza) capisce quando fa buio;</li>
<li>un <b>transistor</b> fa da interruttore automatico e accende il <b>LED</b>.</li>
</ul>
<p>Generatore, sensore, controllo, attuatore: è uno schema che ritroverai in tutti i dispositivi automatici.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… la pila l'ha inventata un italiano?`,
      html: `<p>Nel <b>1799</b> <b>Alessandro Volta</b>, professore a Pavia, impilò dischi di <b>zinco</b> e <b>rame</b> separati da panni imbevuti di acqua salata: era la <b>pila</b>, il primo generatore di corrente continua. Ne diede notizia nel 1800 alla Royal Society di Londra. In suo onore l'unità di misura della tensione si chiama <b>volt</b>. Anche la parola "pila" viene proprio da quella "pila" di dischi!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Arduino è nato a Ivrea?`,
      html: `<p>La scheda <b>Arduino</b>, usata in tutto il mondo per imparare l'elettronica e costruire robot, è nata nel <b>2005</b> all'Interaction Design Institute di <b>Ivrea</b> (in Piemonte), grazie a Massimo Banzi e colleghi. Il nome viene dal bar che frequentavano, a sua volta dedicato ad <b>Arduino d'Ivrea</b>, re d'Italia intorno all'anno 1000. Il primo <b>transistor</b>, invece, fu costruito nel <b>1947</b> ai Bell Labs negli USA da Bardeen, Brattain e Shockley (premio Nobel 1956).</p>`
    },
    {
      type: `remember`, title: `Da ricordare (e sicurezza!)`,
      html: `<ul>
<li>Corrente = flusso di cariche in un circuito <b>chiuso</b>.</li>
<li><b>V = R × I</b> (legge di Ohm); <b>P = V × I</b> (potenza).</li>
<li>Serie: stessa corrente, un solo percorso. Parallelo: stessa tensione, più rami.</li>
<li>Elettronica = controllare l'elettricità con semiconduttori (diodi, LED, transistor, chip).</li>
<li>Sensori = trasformano grandezze fisiche in segnali elettrici.</li>
<li>⚠️ <b>Mai</b> fare esperimenti con la presa di casa (230 V): usa solo pile o alimentatori a bassa tensione (fino a 12 V) e chiedi a un adulto.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `L'elettricità non si vede: per questo servono immagini e paragoni diversi. Scegli il tuo.`,
      tabs: [
        {
          label: `💧 L'acqua nei tubi`,
          html: `<p>Il circuito è come un impianto ad acqua chiuso:</p>
<ul>
<li>la <b>pompa</b> è la pila: crea la pressione (tensione, V);</li>
<li>l'<b>acqua</b> che scorre è la corrente (I);</li>
<li>un <b>tubo stretto</b> è la resistenza (R): più è stretto, meno acqua passa;</li>
<li>una <b>turbina</b> che gira è la lampadina: usa l'energia dell'acqua;</li>
<li>un <b>rubinetto</b> è l'interruttore.</li>
</ul>
<p>Più pressione ➜ più acqua; tubo più stretto ➜ meno acqua. È la legge di Ohm!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#ecfeff"/>
<rect x="40" y="40" width="520" height="160" rx="30" fill="none" stroke="#0891b2" stroke-width="22"/>
<rect x="40" y="40" width="520" height="160" rx="30" fill="none" stroke="#67e8f9" stroke-width="12" stroke-dasharray="14 10"/>
<circle cx="50" cy="120" r="34" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<text x="50" y="128" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">V</text>
<rect x="250" y="32" width="100" height="16" fill="#0e7490"/>
<text x="300" y="25" font-size="15" text-anchor="middle" fill="#0e7490" font-weight="bold">tubo stretto = R</text>
<circle cx="550" cy="120" r="30" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="550" y="128" font-size="22" text-anchor="middle">💡</text>
<text x="300" y="232" font-size="15" text-anchor="middle" fill="#0e7490" font-weight="bold">flusso d'acqua = corrente I</text>
<text x="105" y="125" font-size="14" fill="#7c2d12" font-weight="bold">pompa = pila</text>
<text x="490" y="170" font-size="14" fill="#854d0e" font-weight="bold">turbina = lampada</text>
</svg>`
        },
        {
          label: `🔺 Il triangolo di Ohm`,
          html: `<p>Un trucco usato nelle scuole inglesi e tedesche: scrivi <b>V</b> in alto e <b>R · I</b> in basso in un triangolo. Copri con il dito la grandezza che cerchi:</p>
<ul>
<li>copri V ➜ resta R × I;</li>
<li>copri I ➜ resta V sopra R ➜ V ÷ R;</li>
<li>copri R ➜ resta V sopra I ➜ V ÷ I.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fef9c3"/>
<polygon points="300,20 470,220 130,220" fill="#fde68a" stroke="#a16207" stroke-width="5"/>
<line x1="190" y1="140" x2="410" y2="140" stroke="#a16207" stroke-width="4"/>
<line x1="300" y1="140" x2="300" y2="220" stroke="#a16207" stroke-width="4"/>
<text x="300" y="115" font-size="48" font-weight="bold" fill="#dc2626" text-anchor="middle">V</text>
<text x="240" y="198" font-size="44" font-weight="bold" fill="#2563eb" text-anchor="middle">R</text>
<text x="360" y="198" font-size="44" font-weight="bold" fill="#16a34a" text-anchor="middle">I</text>
<text x="520" y="110" font-size="16" fill="#713f12" text-anchor="middle">V = R × I</text>
<text x="520" y="140" font-size="16" fill="#713f12" text-anchor="middle">I = V ÷ R</text>
<text x="520" y="170" font-size="16" fill="#713f12" text-anchor="middle">R = V ÷ I</text>
</svg>`
        },
        {
          label: `🚗 Strada e traffico`,
          html: `<p>Immagina gli elettroni come <b>automobili</b>:</p>
<ul>
<li>la <b>tensione</b> è la <b>pendenza</b> della strada: più è ripida, più le auto sono spinte;</li>
<li>la <b>corrente</b> è <b>quante auto</b> passano sotto un ponte ogni secondo;</li>
<li>la <b>resistenza</b> è un <b>restringimento</b> della carreggiata;</li>
<li>in <b>serie</b>: due cantieri uno dopo l'altro sulla stessa strada; in <b>parallelo</b>: due strade alternative, il traffico si divide.</li>
</ul>`
        },
        {
          label: `🧩 Componenti e funzioni`,
          html: `<p>Abbina ogni componente a ciò che fa.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Resistore`, `limita la corrente`],
            [`Diodo`, `fa passare la corrente in un solo verso`],
            [`LED`, `emette luce`],
            [`Condensatore`, `accumula cariche per poco tempo`],
            [`Transistor`, `interruttore comandato elettricamente`],
            [`Fotoresistenza`, `cambia resistenza con la luce`]
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: dall'atomo al chip`,
      nodes: [
        { id: `car`, label: `Carica elettrica`, x: 50, y: 6, color: `#64748b`, html: `Proprietà di protoni (+) ed elettroni (−).`, why: `Già i Greci notarono che l'ambra strofinata attira pagliuzze: "ambra" in greco è <i>élektron</i>, da cui "elettricità". L'elettrone fu scoperto da <b>J. J. Thomson</b> nel 1897.` },
        { id: `cor`, label: `Corrente`, x: 20, y: 28, color: `#3b82f6`, html: `Flusso ordinato di cariche (A).`, why: `Si misura in ampere in onore di <b>André-Marie Ampère</b>, che nel 1820 studiò le forze tra fili percorsi da corrente.` },
        { id: `ten`, label: `Tensione`, x: 50, y: 28, color: `#f97316`, html: `La "spinta" che muove le cariche (V).`, why: `Il primo generatore stabile fu la pila di <b>Alessandro Volta</b> (1799): reazioni chimiche tra due metalli diversi creano una differenza di potenziale.` },
        { id: `res`, label: `Resistenza`, x: 80, y: 28, color: `#ef4444`, html: `Opposizione al passaggio di corrente (Ω).`, why: `Gli elettroni che si muovono urtano gli atomi del materiale e cedono energia come calore: è l'<b>effetto Joule</b>, usato in stufe e tostapane.` },
        { id: `ohm`, label: `Legge di Ohm`, x: 50, y: 50, color: `#a855f7`, html: `V = R × I.`, why: `<b>Georg Simon Ohm</b> la pubblicò nel 1827 misurando correnti in fili di diversa lunghezza. All'inizio fu criticata; poi divenne la base dell'elettrotecnica.` },
        { id: `circ`, label: `Circuito`, x: 20, y: 72, color: `#22c55e`, html: `Generatore, fili, utilizzatore, interruttore; serie o parallelo.`, why: `Le cariche non si creano né si distruggono (conservazione della carica): per scorrere con continuità devono tornare al generatore, quindi il percorso deve essere chiuso.` },
        { id: `semi`, label: `Semiconduttori`, x: 50, y: 72, color: `#0ea5e9`, html: `Silicio e germanio: conducono "a comando".`, why: `Aggiungendo minuscole quantità di altri elementi (<b>drogaggio</b>) si controlla come conducono. Su questo principio si basano diodo e transistor (1947).` },
        { id: `sens`, label: `Sensori`, x: 80, y: 72, color: `#eab308`, html: `Trasformano luce, calore, movimento in segnali elettrici.`, why: `Molti sfruttano il fatto che la resistenza di un materiale cambia con la luce (fotoresistenza) o con la temperatura (termistore): con la legge di Ohm si misura la variazione.` },
        { id: `chip`, label: `Chip e microcontrollori`, x: 50, y: 94, color: `#7c3aed`, html: `Miliardi di transistor su un pezzetto di silicio.`, why: `Il circuito integrato fu inventato nel 1958-59 da <b>Jack Kilby</b> e <b>Robert Noyce</b>. Nel 1971 l'italiano <b>Federico Faggin</b> guidò il progetto del primo microprocessore commerciale, l'Intel 4004.` }
      ],
      edges: [
        [`car`, `cor`, `in moto`], [`car`, `ten`, `spinte da`], [`cor`, `ohm`, `I`], [`ten`, `ohm`, `V`], [`res`, `ohm`, `R`],
        [`ohm`, `circ`, `si applica`], [`ohm`, `semi`, `materiali`], [`semi`, `chip`, `costruiscono`], [`semi`, `sens`, `costruiscono`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: componenti e circuiti`,
      questions: [
        { type: `mc`, q: `In un circuito in parallelo, se una lampadina si brucia…`, options: [`si spengono tutte`, `le altre restano accese`, `le altre si accendono di più e si bruciano`], answer: 1, explain: `Ogni lampadina ha il suo ramo: gli altri rami continuano a funzionare.` },
        { type: `num`, q: `Che potenza ha una lampada che a 230 V assorbe 0,1 A?`, answer: 23, tol: 0, unit: `W`, explain: `P = V × I = 230 × 0,1 = 23 W.` },
        { type: `mc`, q: `Quale componente fa passare la corrente in un solo verso?`, options: [`Condensatore`, `Diodo`, `Resistore`], answer: 1, explain: `Il diodo è come una valvola a senso unico.` }
      ]
    }
  ],
  glossary: [
    { t: `Corrente elettrica (I)`, d: `Flusso ordinato di cariche; si misura in ampere (A).` },
    { t: `Tensione (V)`, d: `Differenza di potenziale che spinge le cariche; si misura in volt.` },
    { t: `Resistenza (R)`, d: `Opposizione al passaggio della corrente; si misura in ohm (Ω).` },
    { t: `Legge di Ohm`, d: `V = R × I.` },
    { t: `Potenza (P)`, d: `Energia usata ogni secondo: P = V × I, in watt (W).` },
    { t: `Semiconduttore`, d: `Materiale (es. silicio) con conducibilità controllabile.` },
    { t: `Transistor`, d: `Componente che fa da interruttore o amplificatore comandato elettricamente.` },
    { t: `LED`, d: `Diodo che emette luce; va protetto con una resistenza.` },
    { t: `Sensore`, d: `Dispositivo che trasforma una grandezza fisica in segnale elettrico.` },
    { t: `Multimetro`, d: `Strumento che misura tensione, corrente e resistenza.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `La corrente elettrica nei metalli è un flusso di…`, options: [`protoni`, `elettroni`, `neutroni`], answer: 1, explain: `Nei metalli si muovono gli elettroni liberi.` },
      { type: `mc`, q: `La tensione si misura in…`, options: [`ampere`, `volt`, `watt`], answer: 1, explain: `Volt, in onore di Alessandro Volta.` },
      { type: `num`, q: `Una resistenza da 220 Ω è percorsa da 0,01 A. Quanto vale la tensione ai suoi capi?`, answer: 2.2, tol: 0.01, unit: `V`, explain: `V = R × I = 220 × 0,01 = 2,2 V.` },
      { type: `num`, q: `Una pila da 12 V fa passare 2 A in un motore. Quanto vale la resistenza del motore?`, answer: 6, tol: 0, unit: `Ω`, explain: `R = V ÷ I = 12 ÷ 2 = 6 Ω.` },
      { type: `num`, q: `Due resistenze da 100 Ω e 47 Ω in serie: resistenza totale?`, answer: 147, tol: 0, unit: `Ω`, explain: `In serie le resistenze si sommano: 100 + 47 = 147 Ω.` },
      { type: `tf`, q: `La corrente circola anche se il circuito è aperto.`, answer: false, explain: `Serve un circuito chiuso.` },
      { type: `tf`, q: `Le prese di casa sono collegate in parallelo.`, answer: true, explain: `Così ogni apparecchio riceve 230 V e funziona indipendentemente.` },
      { type: `mc`, q: `Quale sensore usa un lampione che si accende da solo al buio?`, options: [`Termistore`, `Fotoresistenza (LDR)`, `Accelerometro`], answer: 1, explain: `La fotoresistenza cambia resistenza con la luce.` },
      { type: `text`, q: `Come si chiama l'italiano che inventò la pila nel 1799?`, answer: [`volta`, `alessandro volta`], explain: `Alessandro Volta, professore a Pavia.` },
      { type: `order`, q: `Metti in ordine il percorso del segnale in una lampada automatica.`, items: [`Il sensore rileva il buio`, `Il circuito di controllo elabora il segnale`, `Il transistor chiude il circuito`, `Il LED si accende`], explain: `Sensore ➜ controllo ➜ interruttore elettronico ➜ attuatore (LED).` },
      { type: `mc`, q: `Perché un LED ha bisogno di una resistenza in serie?`, options: [`Per cambiare colore`, `Per limitare la corrente ed evitare che si bruci`, `Per farlo lampeggiare`], answer: 1, explain: `Senza resistenza la corrente salirebbe troppo.` },
      { type: `mc`, q: `Di quale materiale sono fatti quasi tutti i chip?`, options: [`Rame`, `Silicio`, `Plastica`], answer: 1, explain: `Il silicio è un semiconduttore.` }
    ]
  }
});
