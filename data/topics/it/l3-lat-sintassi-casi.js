TOPIC('it', {
  id: `l3-lat-sintassi-casi`,
  title: `La sintassi dei casi`,
  intro: `Nei primi due anni hai imparato <b>che cosa sono</b> i casi e quali sono i complementi principali. Ora facciamo il salto di qualità: il latino non ha preposizioni per tutto, e ogni caso nasconde <b>costrutti particolari</b> che l'italiano rende con giri di frase diversi. Il genitivo non è solo "di", il dativo non è solo "a", l'ablativo è un vero "coltellino svizzero" che fa il lavoro di sei o sette complementi. Imparare la <b>sintassi dei casi</b> significa smettere di tradurre parola per parola e iniziare a <b>riconoscere schemi</b>: è la chiave per affrontare gli autori (Cesare, Cicerone, Sallustio) senza paura. 🏛️`,
  minutes: 60,
  sections: [
    {
      type: `text`, title: `1. Il nominativo e il vocativo`,
      html: `<p>Il <b>nominativo</b> è il caso del soggetto e del <b>nome del predicato</b> (con <i>sum</i> e i verbi copulativi). Oltre a questo, ti serve conoscere tre particolarità:</p>
<ul>
<li><b>Doppio nominativo</b>: con i verbi <i>videor</i> (sembro), <i>dicor</i> (si dice che io), <i>putor</i> (sono ritenuto), <i>existimor</i>, <i>appellor</i>, <i>nominor</i> la costruzione è <b>personale</b>: <i>Romulus primus rex Romae esse dicitur</i> "Si dice che Romolo sia stato il primo re di Roma" (letteralmente "Romolo è detto essere…"). L'italiano preferisce la forma impersonale.</li>
<li><b>Verbi di nomina al passivo</b>: <i>Cicero pater patriae appellatus est</i> "Cicerone fu chiamato padre della patria". All'attivo si avrebbe il <b>doppio accusativo</b>: <i>Ciceronem patrem patriae appellaverunt</i> (vedi oltre).</li>
<li><b>Nominativo e infinito</b>: nella costruzione personale i due nominativi concordano, mentre nell'impersonale (tipica dei tempi composti: <i>traditum est</i>, <i>dictum est</i>; con <i>traditur, fertur</i> si usa di norma la costruzione personale) il soggetto passa all'accusativo con l'infinito.</li>
</ul>
<p>Il <b>vocativo</b> si usa per chiamare qualcuno: coincide con il nominativo tranne che nei nomi in <i>-us</i> della seconda declinazione (<i>Brute, mi fili</i>), e nei nomi in <i>-ius</i> (<i>Vergili</i>, <i>fili</i>).</p>`
    },
    {
      type: `text`, title: `2. Il genitivo: più di un "di"`,
      html: `<p>Oltre al normale complemento di specificazione, il genitivo ha diversi usi tipici. Impara a riconoscerli dalla parola da cui dipendono.</p>
<table>
<tr><th>Tipo</th><th>Struttura</th><th>Esempio</th></tr>
<tr><td><b>soggettivo</b></td><td>l'azione è compiuta dal nome al genitivo</td><td><i>amor patris</i> "l'amore del padre (che ama)"</td></tr>
<tr><td><b>oggettivo</b></td><td>l'azione è subita dal nome al genitivo</td><td><i>amor patriae</i> "l'amore per la patria"</td></tr>
<tr><td><b>partitivo</b></td><td>dopo quantitativi, pronomi, superlativi</td><td><i>pars militum</i>, <i>nihil novi</i>, <i>quis nostrum?</i>, <i>fortissimus Gallorum</i></td></tr>
<tr><td><b>di qualità</b></td><td>nome + aggettivo (sempre con aggettivo!)</td><td><i>vir magnae sapientiae</i> "un uomo di grande saggezza"</td></tr>
<tr><td><b>di pertinenza</b></td><td><i>est</i> + genitivo = "è compito/proprio di"</td><td><i>Sapientis est tacere</i> "È proprio del saggio tacere"</td></tr>
<tr><td><b>di stima</b></td><td>con <i>aestimo, facio, pendo, duco</i></td><td><i>magni aestimare</i>, <i>pluris</i>, <i>minimi facere</i></td></tr>
<tr><td><b>di colpa e pena</b></td><td>con <i>accuso, damno, absolvo, convinco</i></td><td><i>accusare aliquem furti</i> "accusare di furto"; <i>capitis damnare</i> "condannare a morte"</td></tr>
</table>
<p>Attenzione al <b>genitivo di pertinenza</b>: in italiano diciamo "è compito di…", "è proprio di…", "spetta a…". Cicerone, nelle <i>Filippiche</i> (XII), scrive la celebre frase <b>"Cuiusvis hominis est errare"</b>, "è proprio di ogni uomo sbagliare" (la frase continua: "nullius nisi insipientis in errore perseverare", "ma perseverare nell'errore è solo dello stolto", sempre da Cicerone, <i>Filippiche</i> XII).</p>
<p>Il genitivo di stima compare in forme fisse: <i>magni, parvi, pluris, minoris, tanti, quanti, nihili</i> (<i>Hoc mihi magni est</i> "Questo per me ha grande valore"). Il prezzo preciso invece va all'ablativo: <i>decem sestertiis emere</i>.</p>`
    },
    {
      type: `svg`, title: `Genitivo soggettivo e oggettivo`,
      caption: `La stessa espressione, amor patris, può avere due significati opposti: decide il contesto.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#4c1d95" text-anchor="middle">Amor patris: chi ama chi?</text>
<rect x="40" y="60" width="230" height="150" rx="14" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/>
<text x="155" y="90" font-size="17" font-weight="bold" fill="#5b21b6" text-anchor="middle">SOGGETTIVO</text>
<circle cx="90" cy="140" r="26" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="90" y="146" font-size="14" fill="#1e293b" text-anchor="middle">padre</text>
<line x1="118" y1="140" x2="190" y2="140" stroke="#dc2626" stroke-width="4"/>
<polygon points="190,140 178,132 178,148" fill="#dc2626"/>
<circle cx="225" cy="140" r="26" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="225" y="146" font-size="14" fill="#1e293b" text-anchor="middle">figli</text>
<text x="155" y="195" font-size="15" fill="#334155" text-anchor="middle">l'amore DEL padre</text>
<rect x="330" y="60" width="230" height="150" rx="14" fill="#ffffff" stroke="#0891b2" stroke-width="3"/>
<text x="445" y="90" font-size="17" font-weight="bold" fill="#155e75" text-anchor="middle">OGGETTIVO</text>
<circle cx="380" cy="140" r="26" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="380" y="146" font-size="14" fill="#1e293b" text-anchor="middle">figli</text>
<line x1="408" y1="140" x2="480" y2="140" stroke="#dc2626" stroke-width="4"/>
<polygon points="480,140 468,132 468,148" fill="#dc2626"/>
<circle cx="515" cy="140" r="26" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="515" y="146" font-size="14" fill="#1e293b" text-anchor="middle">padre</text>
<text x="445" y="195" font-size="15" fill="#334155" text-anchor="middle">l'amore PER il padre</text>
<text x="300" y="255" font-size="15" fill="#4c1d95" text-anchor="middle">La freccia va da chi compie l'azione a chi la subisce</text>
<text x="300" y="278" font-size="14" fill="#334155" text-anchor="middle">Metus hostium = paura dei nemici (oggettivo: i nemici fanno paura)</text>
</svg>`
    },
    {
      type: `text`, title: `3. Il dativo: possesso, fine, interesse`,
      html: `<p>Il dativo risponde alla domanda <i>a chi? / a che cosa?</i>, ma nei testi compare in costrutti che non puoi tradurre con un semplice "a".</p>
<ul>
<li><b>Dativo di possesso</b>: <i>sum</i> + dativo = "avere": <i>Est mihi liber</i> "Ho un libro" (letteralmente "c'è a me un libro"). Il possessore è al dativo, la cosa posseduta al nominativo. Con <i>nomen est</i> il nome va spesso in dativo: <i>Mihi nomen est Marco</i>.</li>
<li><b>Dativo di fine</b> (o di scopo): indica l'effetto o lo scopo: <i>Hoc est mihi magnae curae</i> "Questo mi sta molto a cuore"; <i>Auxilio venire</i> "venire in aiuto".</li>
<li><b>Doppio dativo</b>: dativo di fine + dativo di persona con <i>sum, do, relinquo, venio, habeo</i>: <i>Hoc tibi est magno usui</i> "Questo ti è di grande utilità"; <i>Cui bono?</i> "A chi giova?" (formula con cui Cicerone, nel <i>Pro Roscio Amerino</i>, riporta il celebre criterio del giudice Cassio: cercare chi trae vantaggio dal delitto).</li>
<li><b>Dativo di vantaggio / svantaggio</b> (<i>commodi / incommodi</i>): <i>Non scholae, sed vitae discimus</i> "impariamo per la vita, non per la scuola" (Seneca, <i>Lettere a Lucilio</i> 106, lamentava il contrario: <i>non vitae, sed scholae discimus</i>).</li>
<li><b>Dativo d'agente</b>: con il gerundivo e con alcuni perfetti passivi poetici: <i>Hoc tibi faciendum est</i> "Questo devi farlo tu".</li>
<li><b>Dativo dopo i verbi composti</b> con <i>ad, ante, con, in, inter, ob, prae, sub, super</i>: <i>Caesar exercitui praeest</i> "Cesare comanda l'esercito"; <i>Hannibal Romanis bellum intulit</i> "Annibale portò guerra ai Romani" (<i>inferre</i> + dativo).</li>
</ul>
<p><b>Verbi intransitivi in latino che reggono il dativo</b> (e non l'accusativo, a differenza dell'italiano): <i>pareo</i> (obbedire), <i>credo</i> (credere), <i>faveo</i> (favorire), <i>noceo</i> (nuocere), <i>resisto</i>, <i>placeo</i>, <i>persuadeo</i>, <i>studeo</i>, <i>impero</i>, <i>invideo</i>, <i>ignosco</i> (perdonare), <i>medeor</i> (curare). Questi verbi, essendo intransitivi, al passivo sono usati solo in modo impersonale: <i>mihi creditur</i> "mi si crede".</p>`
    },
    {
      type: `remember`, title: `Il dativo di possesso: chi ha, chi è?`,
      html: `<p>Nel dativo di possesso il verbo <i>sum</i> si accorda con la <b>cosa posseduta</b> (nominativo), non con il possessore: <i>Sunt mihi duo fratres</i> = "Ho due fratelli". Per sottolineare il possesso come qualità si usa il genitivo (<i>Hic liber est Marci</i>, "Questo libro è di Marco"), mentre per esprimere che qualcuno <b>ha</b> qualcosa si usa il dativo. Se vuoi sottolineare la <b>proprietà</b> usa il genitivo, se vuoi dire <b>"ho/abbiamo"</b> usa il dativo.</p>`
    },
    {
      type: `example`, title: `Dativi in contesto`,
      html: `<ol>
<li><i>Caesari nuntiatum est Helvetios iter facere.</i> "A Cesare fu annunciato che gli Elvezi stavano marciando." (dativo di termine, verbo passivo impersonale)</li>
<li><i>Hic liber mihi magno usui est.</i> "Questo libro mi è di grande utilità." (doppio dativo)</li>
<li><i>Legibus parere debemus.</i> "Dobbiamo obbedire alle leggi" (<i>pareo</i> + dativo).</li>
<li><i>Cui bono fuerit?</i> "A chi sarebbe stato di vantaggio?"</li>
<li><i>Quinto Fabio Maximo cognomen Cunctator fuit.</i> "Quinto Fabio Massimo ebbe il soprannome di Temporeggiatore." (dativo di possesso)</li>
</ol>`
    },
    {
      type: `quiz`, title: `Mini-quiz: nominativo, genitivo, dativo`,
      questions: [
        { type: `mc`, q: `In "Est mihi liber" il dativo mihi indica…`, options: [`possesso`, `fine`, `agente`], answer: 0, explain: `Sum + dativo = avere: "ho un libro".` },
        { type: `mc`, q: `"Amor patriae" ha un genitivo…`, options: [`oggettivo: l'amore per la patria`, `soggettivo: l'amore della patria`, `partitivo`], answer: 0, explain: `La patria è l'oggetto dell'amore.` },
        { type: `mc`, q: `"Sapientis est tacere" si traduce…`, options: [`è proprio del saggio tacere`, `il saggio sa tacere`, `il saggio è taciuto`], answer: 0, explain: `Genitivo di pertinenza con est.` },
        { type: `tf`, q: `Il verbo "pareo" regge l'accusativo come il suo equivalente italiano "obbedire".`, answer: false, explain: `Pareo regge il dativo: parere legibus.` }
      ]
    },
    {
      type: `text`, title: `4. L'accusativo: oltre il complemento oggetto`,
      html: `<p>L'accusativo è il caso dell'<b>oggetto diretto</b>, ma anche di molte funzioni che in italiano richiedono preposizioni:</p>
<ul>
<li><b>Moto a luogo</b>: con <i>ad</i> o <i>in</i> + accusativo; senza preposizione con nomi di città e piccole isole: <i>Romam proficisci</i> "partire per Roma"; <i>domum</i> "a casa"; <i>rus</i> "in campagna".</li>
<li><b>Estensione nel tempo e nello spazio</b>: <i>Tres annos mansit</i> "Rimase tre anni"; <i>mille passus</i> "per mille passi".</li>
<li><b>Doppio accusativo</b>: verbi di <b>nomina</b> (<i>appello, nomino, creo, facio</i> + oggetto + predicativo): <i>Cives Ciceronem consulem creaverunt</i> "I cittadini elessero Cicerone console"; verbi di <b>domanda e insegnamento</b> (<i>rogo, doceo, celo</i>): <i>Magister pueros grammaticam docet</i> "Il maestro insegna la grammatica ai ragazzi".</li>
<li><b>Accusativo esclamativo</b>: <i>O tempora, o mores!</i> (Cicerone, Prima Catilinaria); <i>Me miserum!</i> "povero me!".</li>
<li><b>Accusativo di relazione</b> (o "alla greca"): in poesia, con parti del corpo: <i>Nuda genu</i>, "con il ginocchio scoperto" (Virgilio, <i>Eneide</i> I, 320).</li>
<li><b>Accusativo avverbiale</b>: neutri usati come avverbi: <i>multum, plus, primum, nihil, quid</i> (<i>Quid venisti?</i> "Perché sei venuto?").</li>
</ul>`
    },
    {
      type: `text`, title: `5. L'ablativo: il "coltellino svizzero"`,
      html: `<p>Nel latino l'<b>ablativo</b> riunisce tre casi dell'indoeuropeo antico: l'ablativo vero e proprio (separazione, origine), lo <b>strumentale</b> (mezzo, modo) e il <b>locativo</b> (stato in luogo e tempo). Per questo ha tanti usi diversi. La regola pratica è: senza preposizione di solito indica <b>mezzo, modo, causa, limitazione, paragone, prezzo</b>; con preposizioni (<i>a/ab, de, e/ex, cum, in</i>) indica altri complementi.</p>
<table>
<tr><th>Complemento</th><th>Esempio</th><th>Traduzione</th></tr>
<tr><td>mezzo</td><td><i>gladio pugnare</i></td><td>combattere con la spada</td></tr>
<tr><td>causa</td><td><i>timore fugere</i></td><td>fuggire per la paura</td></tr>
<tr><td>modo</td><td><i>magna cum diligentia</i>; <i>silentio</i></td><td>con grande cura; in silenzio</td></tr>
<tr><td>limitazione</td><td><i>nomine</i>, <i>numero</i>, <i>pedibus aeger</i></td><td>di nome, di numero, malato ai piedi</td></tr>
<tr><td>qualità</td><td><i>vir summa virtute</i></td><td>un uomo di grande valore</td></tr>
<tr><td>prezzo</td><td><i>magno emere</i></td><td>comprare a caro prezzo</td></tr>
<tr><td>paragone</td><td><i>Marcus fortior fratre est</i></td><td>Marco è più forte del fratello</td></tr>
<tr><td>origine</td><td><i>nobili genere natus</i></td><td>nato di nobile famiglia</td></tr>
<tr><td>argomento</td><td><i>de bello Gallico</i></td><td>sulla guerra gallica</td></tr>
<tr><td>tempo determinato</td><td><i>tertio die</i>; <i>hieme</i></td><td>il terzo giorno; d'inverno</td></tr>
<tr><td>separazione</td><td><i>patria carere</i>; <i>ab urbe discedere</i></td><td>essere privo della patria; partire dalla città</td></tr>
</table>
<p><b>Ablativo di paragone</b>: alternativa a <i>quam</i> + stesso caso del primo termine: <i>Marcus fortior est quam frater</i> = <i>Marcus fortior est fratre</i>. L'ablativo si può usare solo se il primo termine è al nominativo o all'accusativo.</p>`
    },
    {
      type: `text`, title: `6. Verbi con l'ablativo e costrutti notevoli`,
      html: `<p>Alcuni verbi e aggettivi richiedono l'ablativo come loro reggenza. Ti conviene impararli come gruppo:</p>
<ul>
<li><b>Utor, fruor, fungor, potior, vescor</b> (deponenti): <i>Caesar nova arte utitur</i> "Cesare usa un'arte nuova"; <i>potiri urbe</i> "impadronirsi della città" (talvolta anche con il genitivo: <i>potiri rerum</i> "avere il dominio"). Memorizza con la filastrocca <b>"utor, fruor, fungor, vescor, potior"</b>.</li>
<li><b>Dignus, indignus, contentus, fretus, praeditus, liber</b>: <i>dignus laude</i> "degno di lode"; <i>fretus virtute</i> "confidando nel valore".</li>
<li><b>Opus est</b> + ablativo: <i>Duce opus est</i> "C'è bisogno di una guida" (anche con il nominativo: <i>dux opus est</i>).</li>
<li><b>Abundo, careo, egeo</b> (abbondare, essere privo, aver bisogno) e <b>impleo, onero, spolio</b> (riempire, caricare, spogliare).</li>
<li><b>Ablativo assoluto</b>: già studiato con il participio (<i>urbe capta</i>): la costruzione condensa una subordinata circostanziale.</li>
</ul>
<p>Nello <b>stato in luogo</b> compaiono tre soluzioni: <i>in</i> + ablativo per i nomi comuni (<i>in urbe</i>), <b>locativo</b> per città e isole piccole della prima e seconda declinazione singolare (<i>Romae</i>, <i>Corinthi</i>, <i>domi</i>, <i>ruri</i>), <b>ablativo</b> per gli altri nomi propri (<i>Athenis, Carthagine</i>). Il locativo è un caso morto in latino, ma sopravvive in forme fisse.</p>`
    },
    {
      type: `example`, title: `Genitivo, accusativo e ablativo in contesto`,
      html: `<ol>
<li><i>Cicero Catilinam coniurationis accusavit.</i> "Cicerone accusò Catilina di congiura." (genitivo di colpa)</li>
<li><i>Hoc mihi pluris est quam pecunia.</i> "Questo per me vale più del denaro." (genitivo di stima; paragone con <i>quam</i>)</li>
<li><i>Milites tria milia passuum ambulaverunt.</i> "I soldati marciarono per tre miglia." (accusativo di estensione)</li>
<li><i>Hostes magno numero, sed parva virtute pugnabant.</i> "I nemici combattevano in gran numero, ma con scarso valore." (ablativo di limitazione e di qualità/modo)</li>
<li><i>Romulus urbem Romam appellavit.</i> "Romolo chiamò la città Roma." (doppio accusativo)</li>
</ol>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "Cui bono?" è un doppio dativo?`,
      html: `<p>La domanda <b>"Cui bono?"</b>, che nei gialli e nei processi si pone per scoprire un colpevole, è un doppio dativo sottinteso: <i>cui</i> (dativo di persona) + <i>bono</i> (dativo di fine) = "a chi per vantaggio?". Cicerone, difendendo Sesto Roscio (80 a.C.), ricorda che il severo giudice Lucio Cassio Longino Ravilla poneva sempre questa domanda. Un solo costrutto latino sopravvive in una formula giuridica usata ancora oggi.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… nelle iscrizioni romane i casi dicono tutto?`,
      html: `<p>Sulle lapidi funerarie romane trovi formule in dativo: <b>"D(is) M(anibus)"</b>, "agli dèi Mani", e il nome del defunto in dativo (<i>Gaio Iulio Primo</i>) perché la tomba è "dedicata a" lui. Per le dediche di templi o monumenti compare il nominativo del dedicante e il dativo del destinatario: <i>Marcus Agrippa L(ucii) f(ilius) consul tertium fecit</i> (sul Pantheon: "Marco Agrippa, figlio di Lucio, console per la terza volta, lo fece"). Leggendo un'iscrizione impari a distinguere chi <b>fa</b> (nominativo), a chi <b>dona</b> (dativo) e di chi <b>è</b> figlio (genitivo).</p>`
    },
    {
      type: `widget`, title: `Allenamento: casi e funzioni`,
      widget: `match`,
      options: {
        pairs: [
          [`Est mihi liber`, `dativo di possesso`],
          [`amor patriae`, `genitivo oggettivo`],
          [`gladio pugnare`, `ablativo di mezzo`],
          [`magni aestimare`, `genitivo di stima`],
          [`Caesare duce`, `ablativo assoluto nominale`],
          [`Tres annos mansit`, `accusativo di estensione`]
        ]
      },
      caption: `Abbina la locuzione latina alla funzione sintattica.`
    },
    {
      type: `alternatives`, title: `Altri modi per non confondersi`,
      intro: `Con tanti usi diversi il rischio è andare nel pallone. Ecco tre strategie.`,
      tabs: [
        {
          label: `🧭 La domanda-guida`,
          html: `<p>Per ogni caso ricorda la domanda "madre": <b>genitivo = di chi/di che cosa?</b>; <b>dativo = a chi/per chi?</b>; <b>accusativo = chi/che cosa (oggetto)?</b>; <b>ablativo = da/con/per mezzo di che cosa?</b>. Se un costrutto non risponde alla domanda "madre", chiediti a quale sottocategoria appartiene: è il vantaggio di qualcuno (dativo)? È una qualità (genitivo o ablativo)? È un prezzo (ablativo)?</p>`
        },
        {
          label: `🗂️ Le schede per caso`,
          html: `<p>Prepara una scheda per ogni caso con tre colonne: <b>uso</b>, <b>esempio latino</b>, <b>traduzione italiana</b>. Aggiungi solo costrutti che trovi nei testi: la scheda cresce e diventa il tuo vocabolario sintattico personale. Ripassare le schede per cinque minuti al giorno vale più di un'ora di ripasso prima del compito.</p>`
        },
        {
          label: `🔁 Traduzione inversa`,
          html: `<p>Prova a tradurre dall'<b>italiano al latino</b> frasi semplici: "ho due sorelle" (<i>Mihi sunt duae sorores</i>), "è compito del console" (<i>Consulis est</i>), "comprare a caro prezzo" (<i>magno emere</i>). Costruire la frase ti obbliga a scegliere il caso giusto e ti mostra perché l'italiano usa preposizioni diverse.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa dei casi e dei loro usi`,
      nodes: [
        { id: `casi`, label: `Sintassi dei casi`, x: 50, y: 8, color: `#a855f7`, html: `I casi esprimono le funzioni logiche senza preposizioni.`, why: `Il latino è una lingua sintetica: la funzione di una parola si legge nella desinenza, non nella posizione. Per questo l'ordine delle parole è libero e nel latino scritto si può "giocare" con la frase.` },
        { id: `nom`, label: `Nominativo`, x: 12, y: 40, color: `#f59e0b`, html: `Soggetto, predicato nominale, doppio nominativo con videor, dicor.`, why: `È il caso "base" che dà il nome al sostantivo nel vocabolario. Il doppio nominativo con i verbi passivi riflette il passaggio dall'attivo al passivo del doppio accusativo.` },
        { id: `gen`, label: `Genitivo`, x: 32, y: 72, color: `#16a34a`, html: `Specificazione, partitivo, qualità, pertinenza, stima, colpa e pena.`, why: `Il genitivo lega due nomi: si usa quando un termine "dipende" da un altro. Molti usi derivano da questa dipendenza (parte di un tutto, possessore, qualità).` },
        { id: `dat`, label: `Dativo`, x: 55, y: 40, color: `#3b82f6`, html: `Termine, possesso, fine, vantaggio, agente con il gerundivo.`, why: `Il dativo è il caso dell'interesse: indica chi "ne beneficia" o a chi "è destinato" qualcosa. Il possesso latino (est mihi) è letteralmente "c'è per me".` },
        { id: `acc`, label: `Accusativo`, x: 72, y: 72, color: `#ef4444`, html: `Oggetto, moto a luogo, estensione, doppio accusativo.`, why: `È il caso del movimento verso e dell'estensione. L'oggetto diretto è come un "bersaglio" raggiunto dall'azione: per questo anche il moto a luogo è accusativo.` },
        { id: `abl`, label: `Ablativo`, x: 88, y: 40, color: `#06b6d4`, html: `Mezzo, causa, modo, limitazione, prezzo, paragone, tempo.`, why: `L'ablativo latino ha assorbito tre casi dell'indoeuropeo: ablativo (da dove), strumentale (con che cosa), locativo (dove). Ecco perché fa tanti mestieri.` }
      ],
      edges: [
        [`casi`, `nom`, ``], [`casi`, `gen`, ``], [`casi`, `dat`, ``], [`casi`, `acc`, ``], [`casi`, `abl`, ``]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: accusativo e ablativo`,
      questions: [
        { type: `mc`, q: `"Tres annos mansit" contiene un accusativo di…`, options: [`estensione nel tempo`, `moto a luogo`, `oggetto`], answer: 0, explain: `Risponde alla domanda "per quanto tempo?".` },
        { type: `mc`, q: `"Marcus fortior fratre est" usa l'ablativo di…`, options: [`paragone`, `mezzo`, `causa`], answer: 0, explain: `Equivale a "fortior quam frater".` },
        { type: `tf`, q: `Il verbo "utor" regge l'accusativo.`, answer: false, explain: `Utor, fruor, fungor, potior, vescor reggono l'ablativo.` },
        { type: `text`, q: `Scrivi il caso (in italiano) della parola "urbe" in "potiri urbe".`, answer: [`ablativo`], explain: `Potior regge l'ablativo.` }
      ]
    }
  ],
  glossary: [
    { t: `Genitivo soggettivo`, d: `Il nome al genitivo compie l'azione (amor patris = l'amore che il padre prova).` },
    { t: `Genitivo oggettivo`, d: `Il nome al genitivo subisce l'azione (amor patriae = amore verso la patria).` },
    { t: `Genitivo partitivo`, d: `Indica il tutto di cui si considera una parte (pars militum).` },
    { t: `Dativo di possesso`, d: `Sum + dativo del possessore: est mihi liber = ho un libro.` },
    { t: `Doppio dativo`, d: `Dativo di persona + dativo di fine (mihi magnae curae est).` },
    { t: `Doppio accusativo`, d: `Con verbi di nomina o di domanda: oggetto + predicativo/seconda cosa.` },
    { t: `Ablativo strumentale`, d: `Indica mezzo o modo (gladio, cum diligentia).` },
    { t: `Locativo`, d: `Caso dello stato in luogo, sopravvissuto in Romae, domi, ruri.` },
    { t: `Deponente`, d: `Verbo con forma passiva e significato attivo (utor, fruor).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Come si traduce "Mihi nomen est Marco"?`, options: [`Il mio nome è Marco`, `Marco ha un nome`, `Sono chiamato da Marco`], answer: 0, explain: `Dativo di possesso: nomen est mihi.` },
      { type: `mc`, q: `Nell'espressione "metus hostium" il genitivo è oggettivo quando significa…`, options: [`la paura dei nemici (che i nemici fanno)`, `la paura che i nemici provano`, `i nemici hanno paura`], answer: 0, explain: `Genitivo oggettivo: i nemici sono la causa della paura. Se fossero loro a provarla sarebbe soggettivo.` },
      { type: `mc`, q: `"Hoc tibi magno usui est" è un esempio di…`, options: [`doppio dativo`, `doppio accusativo`, `ablativo assoluto`], answer: 0, explain: `Tibi (persona) e usui (fine).` },
      { type: `tf`, q: `Il genitivo di qualità in latino può comparire senza aggettivo.`, answer: false, explain: `Il genitivo di qualità richiede sempre un aggettivo: vir magnae sapientiae.` },
      { type: `mc`, q: `Quale verbo regge il dativo?`, options: [`pareo`, `video`, `amo`], answer: 0, explain: `Parere + dativo: obbedire a.` },
      { type: `mc`, q: `"Cives Ciceronem consulem creaverunt": consulem è…`, options: [`predicativo dell'oggetto (doppio accusativo)`, `soggetto`, `genitivo`], answer: 0, explain: `Con i verbi di nomina si ha oggetto + predicativo in accusativo.` },
      { type: `text`, q: `Scrivi in latino "a Roma" (stato in luogo, una parola).`, answer: [`romae`], explain: `Locativo di Roma: Romae.` },
      { type: `mc`, q: `Quale costrutto si trova in "Duce opus est"?`, options: [`opus est + ablativo`, `genitivo di pertinenza`, `dativo d'agente`], answer: 0, explain: `Opus est regge l'ablativo della cosa necessaria.` },
      { type: `mc`, q: `"Sapientis est tacere" significa…`, options: [`è proprio del saggio tacere`, `il saggio mangia in silenzio`, `il saggio tace sempre`], answer: 0, explain: `Genitivo di pertinenza.` },
      { type: `order`, q: `Metti in ordine i passi per analizzare un caso dubbio.`, items: [`Individuare la parola e il suo caso`, `Cercare il verbo o il nome da cui dipende`, `Chiedersi a quale domanda risponde`, `Scegliere la traduzione italiana adatta`], explain: `Prima forma e funzione, poi dipendenza, domanda e infine resa italiana.` }
    ]
  }
});
