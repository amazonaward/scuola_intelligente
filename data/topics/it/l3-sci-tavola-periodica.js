TOPIC('it', {
  id: "l3-sci-tavola-periodica",
  title: "La tavola periodica",
  intro: "La tavola periodica è la mappa più utile della chimica: da un solo sguardo alla posizione di un elemento si ricava la sua configurazione elettronica, se è un metallo, quanto è reattivo e che legami farà. In questa lezione vediamo <b>come è nata</b> (e come Mendeleev riuscì a prevedere elementi ancora sconosciuti), come è organizzata e come la <b>struttura elettronica</b> spiega le <b>proprietà periodiche</b>: raggio atomico, energia di ionizzazione, elettronegatività.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Mettere ordine tra gli elementi",
      html: `<p>Nel 1860 si conoscevano circa 60 elementi, con proprietà molto diverse. Si cercava un criterio per classificarli.</p>
<ul>
<li><b>1829, Döbereiner</b> nota le "triadi": gruppi di tre elementi con proprietà simili, dove la massa del centrale è circa la media degli altri (litio, sodio, potassio).</li>
<li><b>1864, Newlands</b> ordina gli elementi per massa atomica crescente e osserva che ogni ottavo elemento somiglia al primo ("legge delle ottave"), ma la sua idea fu accolta con scetticismo.</li>
<li><b>1869, Dmitrij Mendeleev</b> (e quasi contemporaneamente Lothar Meyer) dispone gli elementi in ordine di massa atomica crescente, andando a capo quando le proprietà si ripetono: nascono righe (periodi) e colonne (gruppi). Dove la regolarità lo richiede, <b>lascia dei posti vuoti</b> e inverte persino l'ordine di qualche coppia (tellurio e iodio).</li>
</ul>
<p>La forza della tavola di Mendeleev è predittiva: per le caselle vuote descrisse in anticipo massa e proprietà di elementi mai visti, che chiamò eka-alluminio, eka-boro, eka-silicio. Furono scoperti il <b>gallio</b> (1875, Lecoq de Boisbaudran), lo <b>scandio</b> (1879, Nilson) e il <b>germanio</b> (1886, Winkler), con proprietà molto vicine alle previsioni. Nel <b>1913 Henry Moseley</b> misurò gli spettri a raggi X e mostrò che la grandezza che ordina davvero gli elementi non è la massa ma il <b>numero atomico Z</b>: così si spiegarono le inversioni di Mendeleev.</p>
<p><b>Legge periodica moderna</b>: le proprietà degli elementi sono funzioni periodiche del loro numero atomico.</p>`
    },
    {
      type: "widget",
      title: "Esplora la tavola",
      widget: "periodicTable",
      options: {},
      caption: "Tocca gli elementi: confronta quelli della stessa colonna e quelli della stessa riga."
    },
    {
      type: "text",
      title: "Come è fatta la tavola",
      html: `<p>La tavola moderna ha <b>7 periodi</b> (righe) e <b>18 gruppi</b> (colonne, numerate 1-18 secondo la IUPAC). La sua forma <b>rispecchia il riempimento degli orbitali</b>:</p>
<ul>
<li>il <b>periodo</b> è il numero quantico principale n del guscio più esterno. I periodi contengono 2, 8, 8, 18, 18, 32, 32 elementi, perché si riempiono rispettivamente 1s; 2s 2p; 3s 3p; 4s 3d 4p; 5s 4d 5p; 6s 4f 5d 6p; 7s 5f 6d 7p.</li>
<li>il <b>blocco</b> dipende dall'ultimo sottoguscio riempito: <b>s</b> (gruppi 1-2), <b>p</b> (gruppi 13-18), <b>d</b> (gruppi 3-12, metalli di transizione), <b>f</b> (lantanidi e attinidi, in basso).</li>
<li>per i <b>gruppi principali</b> (1, 2, 13-18) gli elettroni di valenza sono 1, 2 per i gruppi 1-2 e il numero del gruppo meno 10 per i gruppi 13-18 (gruppo 17 = 7 elettroni di valenza). Gli elementi di uno stesso gruppo hanno la stessa configurazione di valenza, quindi <b>comportamento chimico simile</b>.</li>
</ul>
<p>Alcuni gruppi hanno un nome: <b>1 metalli alcalini</b> (Li, Na, K…), <b>2 alcalino-terrosi</b> (Be, Mg, Ca…), <b>16 calcogeni</b> (O, S…), <b>17 alogeni</b> (F, Cl, Br, I), <b>18 gas nobili</b> (He, Ne, Ar…). L'idrogeno, con un solo elettrone, sta nel gruppo 1 ma non è un metallo alcalino.</p>
<p>Un'altra grande suddivisione è tra <b>metalli</b> (a sinistra e al centro: lucenti, buoni conduttori, malleabili, tendono a perdere elettroni), <b>non metalli</b> (in alto a destra: tendono a guadagnare elettroni) e <b>semimetalli</b> (come silicio e germanio, lungo la linea di confine, semiconduttori).</p>`
    },
    {
      type: "svg",
      title: "I blocchi della tavola",
      svg: (function () {
        var x0 = 50, y0 = 38, w = 28, h = 24, out = '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/>';
        var col = { s: '#fb923c', p: '#60a5fa', d: '#4ade80', f: '#c084fc' };
        function cell(c, r, b, t) {
          out += '<rect x="' + (x0 + (c - 1) * w) + '" y="' + (y0 + (r - 1) * h) + '" width="' + (w - 2) + '" height="' + (h - 2) + '" rx="3" fill="' + col[b] + '"/>';
          if (t) out += '<text x="' + (x0 + (c - 1) * w + (w - 2) / 2) + '" y="' + (y0 + (r - 1) * h + 16) + '" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">' + t + '</text>';
        }
        for (var r = 1; r <= 7; r++) {
          cell(1, r, 's', r === 1 ? 'H' : ''); if (r > 1) cell(2, r, 's', '');
          if (r === 1) cell(18, 1, 's', 'He');
          if (r >= 2) for (var c = 13; c <= 18; c++) cell(c, r, 'p', '');
          if (r >= 4) for (var c2 = 3; c2 <= 12; c2++) { if (r >= 6 && c2 === 3) continue; cell(c2, r, 'd', ''); }
          if (r >= 6) cell(3, r, 'f', '*');
        }
        for (var c3 = 3; c3 <= 16; c3++) { cell(c3, 9, 'f', ''); cell(c3, 10, 'f', ''); }
        for (var g = 1; g <= 18; g++) out += '<text x="' + (x0 + (g - 1) * w + 13) + '" y="30" font-size="14" fill="#475569" text-anchor="middle">' + g + '</text>';
        for (var p = 1; p <= 7; p++) out += '<text x="38" y="' + (y0 + (p - 1) * h + 17) + '" font-size="14" fill="#475569" text-anchor="middle">' + p + '</text>';
        out += '<text x="578" y="62" font-size="14" fill="#ea580c" text-anchor="end" font-weight="bold">blocco s</text>';
        out += '<text x="578" y="92" font-size="14" fill="#2563eb" text-anchor="end" font-weight="bold">blocco p</text>';
        out += '<text x="578" y="122" font-size="14" fill="#16a34a" text-anchor="end" font-weight="bold">blocco d</text>';
        out += '<text x="578" y="152" font-size="14" fill="#9333ea" text-anchor="end" font-weight="bold">blocco f</text>';
        out += '<text x="300" y="285" font-size="14" fill="#475569" text-anchor="middle">Righe = periodi (1-7), colonne = gruppi (1-18). He appartiene al blocco s.</text>';
        return out + '</svg>';
      })(),
      caption: "La forma della tavola riproduce l'ordine di riempimento degli orbitali: 2, 6, 10 e 14 colonne per s, p, d, f."
    },
    {
      type: "example",
      title: "Leggere la tavola: lo zolfo",
      html: `<p>Lo <b>zolfo</b> (S, Z = 16) sta nel <b>periodo 3</b>, <b>gruppo 16</b>. Che cosa ne ricavi senza altre informazioni?</p>
<ul>
<li>Periodo 3: l'ultimo guscio ha n = 3.</li>
<li>Gruppo 16 (blocco p): 16 − 10 = 6 elettroni di valenza. Configurazione: [Ne] 3s² 3p⁴.</li>
<li>È un non metallo; gli mancano 2 elettroni per l'ottetto, quindi tende a formare lo ione S²⁻ o a fare 2 legami (come l'ossigeno, nello stesso gruppo: H₂S somiglia a H₂O).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: orientarsi nella tavola",
      questions: [
        { type: "mc", q: "Quanti elettroni di valenza hanno gli alogeni (gruppo 17)?", options: ["7", "1", "8", "17"], answer: 0, explain: "Gruppo 17 = 17 − 10 = 7 elettroni di valenza (ns² np⁵)." },
        { type: "num", q: "Quanti elementi contiene il quarto periodo?", answer: 18, explain: "Si riempiono 4s (2), 3d (10) e 4p (6): 18 elementi, da K a Kr." },
        { type: "tf", q: "Mendeleev ordinò gli elementi per numero atomico.", answer: false, explain: "Li ordinò per massa atomica crescente; fu Moseley (1913) a mostrare che l'ordine corretto è per numero atomico." }
      ]
    },
    {
      type: "text",
      title: "Carica nucleare efficace e schermo",
      html: `<p>Per capire le proprietà periodiche basta una idea: un elettrone di valenza è attirato dal nucleo (carica +Z) ma anche <b>schermato</b> dagli elettroni interni, che lo respingono. Ciò che sente è la <b>carica nucleare efficace Z_eff</b>, circa Z meno il numero di elettroni interni.</p>
<ul>
<li><b>Lungo un periodo</b> (da sinistra a destra) Z cresce di uno per volta mentre gli elettroni si aggiungono nello stesso guscio, che si schermano poco a vicenda: Z_eff <b>aumenta</b> e il nucleo "tira" gli elettroni più vicino.</li>
<li><b>Lungo un gruppo</b> (dall'alto in basso) si aggiunge un guscio intero: gli elettroni di valenza sono più lontani e più schermati, quindi meno legati, pur con Z maggiore.</li>
</ul>`
    },
    {
      type: "text",
      title: "Le proprietà periodiche",
      html: `<table>
<tr><th>Proprietà</th><th>Lungo un periodo (→)</th><th>Lungo un gruppo (↓)</th></tr>
<tr><td><b>Raggio atomico</b></td><td>diminuisce</td><td>aumenta</td></tr>
<tr><td><b>Energia di ionizzazione</b> (per strappare un elettrone)</td><td>aumenta</td><td>diminuisce</td></tr>
<tr><td><b>Affinità elettronica</b> (energia rilasciata catturando un elettrone)</td><td>in generale aumenta in valore</td><td>in generale diminuisce</td></tr>
<tr><td><b>Elettronegatività</b> (tendenza ad attirare gli elettroni di legame)</td><td>aumenta</td><td>diminuisce</td></tr>
<tr><td><b>Carattere metallico</b></td><td>diminuisce</td><td>aumenta</td></tr>
</table>
<p>Alcuni numeri per farsi un'idea:</p>
<ul>
<li>Raggio metallico (pm): Li 152, Na 186, K 227, Rb 248, Cs 265: cresce scendendo nel gruppo 1.</li>
<li>Prima energia di ionizzazione (kJ/mol): Li 520, Na 496, K 419, Cs 376; He 2372 e Ne 2081 sono i più alti dei rispettivi periodi, perché i gas nobili hanno gusci completi e molto stabili.</li>
<li>Elettronegatività di Pauling: Na 0,93, H 2,20, C 2,55, N 3,04, Cl 3,16, O 3,44, <b>F 3,98</b> (il più elettronegativo di tutti). Il francio e il cesio sono tra i meno elettronegativi (circa 0,7).</li>
</ul>
<p><b>Ioni</b>: un catione è <b>più piccolo</b> dell'atomo neutro (perde un guscio o aumenta Z_eff per elettrone), un anione è <b>più grande</b> (più elettroni che si respingono con lo stesso nucleo). Na ha raggio 186 pm, Na⁺ circa 102 pm; Cl ha circa 99 pm, Cl⁻ circa 181 pm.</p>`
    },
    {
      type: "svg",
      title: "Le tendenze in un colpo d'occhio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="arrA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="arrB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<rect x="40" y="50" width="220" height="170" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="150" y="35" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">Raggio atomico</text>
<line x1="230" y1="90" x2="70" y2="90" stroke="#dc2626" stroke-width="4" marker-end="url(#arrA)"/>
<line x1="80" y1="70" x2="80" y2="200" stroke="#dc2626" stroke-width="4" marker-end="url(#arrA)"/>
<text x="150" y="130" font-size="14" fill="#7f1d1d" text-anchor="middle">cresce verso sinistra</text>
<text x="160" y="170" font-size="14" fill="#7f1d1d" text-anchor="middle">e verso il basso</text>
<text x="150" y="245" font-size="14" fill="#475569" text-anchor="middle">Cs, Fr: i più grandi</text>
<rect x="340" y="50" width="220" height="170" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="450" y="35" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Ionizzazione ed EN</text>
<line x1="370" y1="90" x2="530" y2="90" stroke="#2563eb" stroke-width="4" marker-end="url(#arrB)"/>
<line x1="520" y1="200" x2="520" y2="70" stroke="#2563eb" stroke-width="4" marker-end="url(#arrB)"/>
<text x="440" y="130" font-size="14" fill="#1e3a8a" text-anchor="middle">cresce verso destra</text>
<text x="440" y="170" font-size="14" fill="#1e3a8a" text-anchor="middle">e verso l'alto</text>
<text x="450" y="245" font-size="14" fill="#475569" text-anchor="middle">F è il massimo (EN), He (I1)</text>
</svg>`,
      caption: "Le due mappe sono speculari: ciò che rende piccolo un atomo lo rende anche difficile da ionizzare."
    },
    {
      type: "remember",
      title: "Come ragionare sulle tendenze",
      html: `<p>Non imparare le tabelle a memoria: chiediti sempre <b>quanto è attratto l'elettrone esterno dal nucleo?</b></p>
<ul>
<li>Più Z_eff, più elettroni vicini e più legati: raggio piccolo, ionizzazione alta, elettronegatività alta (verso destra).</li>
<li>Più gusci, più distanza e più schermo: raggio grande, ionizzazione bassa, elettroni facili da cedere (verso il basso).</li>
<li>Per questo gli elementi più reattivi come <b>metalli</b> sono in basso a sinistra (Cs, Fr) e i più reattivi come <b>non metalli</b> in alto a destra (F, O).</li>
</ul>`
    },
    {
      type: "example",
      title: "Confrontare tre elementi del terzo periodo",
      html: `<p>Sodio, magnesio e cloro stanno sulla stessa riga (n = 3), ma:</p>
<ul>
<li><b>Raggio</b>: Na (186 pm) &gt; Mg (160 pm) &gt; Cl (99 pm, raggio covalente), perché Z_eff cresce.</li>
<li><b>Prima ionizzazione</b>: Na 496, Mg 738, Cl 1251 kJ/mol. Il sodio perde facilmente 1 elettrone (Na⁺ ha la configurazione del neon), il cloro invece ne guadagna 1 (Cl⁻ ha quella dell'argon).</li>
<li><b>Tipo di elemento</b>: Na metallo reattivo, Mg metallo meno reattivo, Cl non metallo. Quando reagiscono, Na dona e Cl accetta: nasce il cloruro di sodio, NaCl, un composto ionico.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: proprietà periodiche",
      questions: [
        { type: "mc", q: "Quale ha raggio atomico maggiore?", options: ["Potassio", "Sodio", "Litio", "Magnesio"], answer: 0, explain: "Il potassio è più in basso nel gruppo 1 (4 gusci) rispetto a Na e Li." },
        { type: "mc", q: "Quale elemento ha l'elettronegatività maggiore?", options: ["Fluoro", "Cloro", "Ossigeno", "Azoto"], answer: 0, explain: "Il fluoro è in alto a destra (escluso He): ha il valore massimo, 3,98 su scala di Pauling." },
        { type: "tf", q: "Lo ione cloruro Cl⁻ è più piccolo dell'atomo di cloro.", answer: false, explain: "Un anione ha più elettroni a parità di protoni: la repulsione li espande, quindi è più grande." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la tavola",
      intro: "Se non ti convince la sola lettura delle tabelle, prova queste immagini.",
      tabs: [
        { label: "🧲 Il tiro alla fune", html: "<p>Immagina il nucleo come una squadra che tira una corda (l'elettrone di valenza) e gli elettroni interni come ostacoli che respingono. Spostandoti a destra nello stesso periodo si aggiungono <b>tiratori</b> (protoni) ma non ostacoli: il nucleo vince e la corda si accorcia (raggio piccolo, elettroni difficili da strappare). Scendendo di riga si aggiungono <b>nuovi file di ostacoli</b> e la corda è più lunga: l'elettrone è meno trattenuto.</p>" },
        { label: "🏢 Il condominio", html: "<p>La tavola è un condominio: i <b>periodi</b> sono i piani, i <b>gruppi</b> sono le scale. Chi abita nella stessa scala ha la stessa porta di casa, cioè lo stesso numero di elettroni di valenza, perciò si comporta in modo simile con i vicini (i legami). Al piano 4 ci sono 18 appartamenti, perché oltre a 4s e 4p c'è lo spazio per le dieci stanze 3d; al piano 6 si aggiungono i 14 appartamenti degli f, che per ragioni di spazio disegniamo staccati, in basso.</p>" },
        { label: "🎴 Le carte del solitario", html: "<p>Mendeleev usava delle carte, una per elemento, con massa e proprietà, e le sistemava come in un solitario finché si ripetevano. Prova anche tu: i gas nobili (He, Ne, Ar) non reagiscono, poi vengono i metalli alcalini che reagiscono violentemente con l'acqua. Ogni alcalino segue un gas nobile: ecco l'idea del periodo, uno scatto brusco da elemento inerte a elemento reattivo che nella tavola moderna si spiega con 'un elettrone in più in un nuovo guscio'.</p>" },
        { label: "🔥 Test alla fiamma", html: "<p>Nello stesso gruppo i colori della fiamma cambiano ma il comportamento è parente: litio rosso carminio, sodio giallo, potassio lilla. Reagiscono tutti con l'acqua producendo idrogeno e idrossido (2 Na + 2 H₂O → 2 NaOH + H₂), ma Li lentamente, Na vivacemente, K con fiamma, Cs in modo esplosivo: la reattività cresce scendendo nel gruppo perché l'elettrone esterno è sempre meno trattenuto.</p>" }
      ]
    },
    {
      type: "curiosity",
      title: "L'ultima riga e i nomi degli elementi",
      html: `<p>La tavola attuale arriva a <b>118 elementi</b>: l'ultimo nome ufficiale è stato assegnato nel 2016 (nihonio Nh, moscovio Mc, tennesso Ts, oganesson Og) e così il settimo periodo è stato completato. Gli elementi oltre l'uranio (Z = 92) sono artificiali (a parte tracce di nettunio e plutonio) e i più pesanti sono prodotti nei laboratori in pochissimi atomi, che durano frazioni di secondo. Il <b>tecnezio</b> (Z = 43) fu il primo elemento ottenuto artificialmente (1937, Perrier e Segrè) e il suo nome significa proprio "artificiale". Tra i nomi c'è anche il <b>mendelevio</b> (Z = 101), in onore del padre della tavola.</p>`
    },
    {
      type: "curiosity",
      title: "Le eccezioni nella ionizzazione",
      html: `<p>Nel secondo periodo la prima energia di ionizzazione non cresce in modo perfettamente regolare: il boro (1s² 2s² 2p¹) ne ha meno del berillio (2s²), e l'ossigeno (2p⁴) ne ha meno dell'azoto (2p³). Nel primo caso il 2p è un poco più alto in energia del 2s; nel secondo, l'ossigeno ha un elettrone accoppiato che subisce repulsione e si strappa più facilmente rispetto ai tre elettroni spaiati dell'azoto, che è una configurazione particolarmente stabile (regola di Hund). Le tendenze sono regole generali, i dettagli elettronici le raffinano.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: dalla configurazione alle proprietà",
      nodes: [
        { id: "mend", label: "Legge periodica", x: 15, y: 12, color: "#2563eb", html: "Le proprietà si ripetono ordinando gli elementi per Z.", why: "Mendeleev (1869) la dedusse dalle masse atomiche e dalla chimica dei composti; Moseley (1913) la corresse mostrando che la variabile giusta è Z, cioè la carica del nucleo." },
        { id: "config", label: "Configurazione elettronica", x: 50, y: 12, color: "#16a34a", html: "Il riempimento degli orbitali dà periodi e blocchi.", why: "La quantizzazione dell'energia (Bohr, Schrödinger) e il principio di Pauli impongono 2, 6, 10, 14 elettroni per sottoguscio: ecco perché i periodi hanno lunghezze 2, 8, 18, 32." },
        { id: "val", label: "Elettroni di valenza", x: 85, y: 12, color: "#f59e0b", html: "Stesso gruppo = stessa configurazione esterna.", why: "Solo gli elettroni più esterni partecipano ai legami: Lewis (1916) e Kossel mostrarono che i gas nobili, con otto elettroni esterni, sono stabili." },
        { id: "zeff", label: "Carica nucleare efficace", x: 30, y: 55, color: "#a855f7", html: "Z meno lo schermo degli elettroni interni.", why: "Spiega le tendenze con un solo concetto: lungo un periodo gli elettroni si schermano poco, quindi Z_eff cresce; in un gruppo aggiungere un guscio aumenta la distanza." },
        { id: "prop", label: "Proprietà periodiche", x: 70, y: 55, color: "#0ea5e9", html: "Raggio, ionizzazione, affinità, elettronegatività.", why: "Sono la conseguenza dell'equilibrio tra attrazione del nucleo e distanza degli elettroni; la loro regolarità permette di fare previsioni su elementi mai studiati." },
        { id: "chim", label: "Comportamento chimico", x: 50, y: 90, color: "#ef4444", html: "Metalli, non metalli, reattività, tipo di legame.", why: "Chi ha bassa ionizzazione cede elettroni (metalli), chi ha alta affinità li cattura (non metalli): la differenza di elettronegatività decide se il legame sarà ionico o covalente (prossima lezione)." }
      ],
      edges: [["mend", "config", "spiegata dalla"], ["config", "val", "individua gli"], ["config", "zeff", "determina la"], ["zeff", "prop", "regola le"], ["val", "chim", "decidono il"], ["prop", "chim", "spiegano il"]]
    }
  ],
  glossary: [
    { t: "Periodo", d: "Riga della tavola periodica; corrisponde al numero quantico principale del guscio più esterno." },
    { t: "Gruppo", d: "Colonna della tavola periodica; gli elementi hanno configurazione di valenza simile." },
    { t: "Metalli alcalini", d: "Elementi del gruppo 1 (esclusa l'idrogeno): molto reattivi, un elettrone di valenza." },
    { t: "Alogeni", d: "Elementi del gruppo 17 (F, Cl, Br, I): sette elettroni di valenza." },
    { t: "Gas nobili", d: "Elementi del gruppo 18: guscio esterno completo, quasi inerti." },
    { t: "Carica nucleare efficace", d: "Carica positiva che un elettrone di valenza realmente sente, tenendo conto dello schermo degli elettroni interni." },
    { t: "Raggio atomico", d: "Misura delle dimensioni di un atomo; diminuisce lungo un periodo e aumenta in un gruppo." },
    { t: "Energia di ionizzazione", d: "Energia necessaria per strappare un elettrone a un atomo allo stato gassoso." },
    { t: "Affinità elettronica", d: "Energia coinvolta quando un atomo gassoso cattura un elettrone." },
    { t: "Elettronegatività", d: "Capacità di un atomo di attirare a sé gli elettroni di un legame (scala di Pauling, F = 3,98)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Con quale criterio Mendeleev ordinò gli elementi nella sua tavola del 1869?", options: ["Massa atomica crescente, raggruppando le proprietà simili", "Numero atomico crescente", "Ordine alfabetico", "Colore"], answer: 0, explain: "Mendeleev usò la massa atomica; l'ordinamento per numero atomico si deve a Moseley (1913)." },
      { type: "tf", q: "Mendeleev lasciò dei posti vuoti e previde le proprietà di elementi sconosciuti, poi scoperti (gallio, scandio, germanio).", answer: true, explain: "Eka-alluminio, eka-boro, eka-silicio corrispondono a gallio, scandio e germanio." },
      { type: "num", q: "Quanti elettroni di valenza ha un elemento del gruppo 15?", answer: 5, explain: "Gruppo 15 = 15 − 10 = 5 elettroni di valenza (ns² np³)." },
      { type: "num", q: "Quanti elementi contiene il sesto periodo?", answer: 32, explain: "Si riempiono 6s (2), 4f (14), 5d (10), 6p (6): 32 elementi." },
      { type: "mc", q: "In quale blocco si trova il ferro (Z = 26, [Ar] 4s² 3d⁶)?", options: ["d", "s", "p", "f"], answer: 0, explain: "L'ultimo sottoguscio riempito è il 3d: è un metallo di transizione." },
      { type: "mc", q: "Come cambia il raggio atomico scendendo lungo un gruppo?", options: ["Aumenta", "Diminuisce", "Resta uguale", "Prima diminuisce poi aumenta"], answer: 0, explain: "Si aggiunge un guscio a ogni periodo: gli elettroni di valenza sono più lontani dal nucleo." },
      { type: "mc", q: "Quale elemento ha la prima energia di ionizzazione più bassa?", options: ["Cesio", "Litio", "Fluoro", "Elio"], answer: 0, explain: "Il cesio ha un elettrone di valenza molto lontano e schermato: è il più facile da strappare." },
      { type: "tf", q: "Lungo un periodo l'elettronegatività aumenta da sinistra a destra.", answer: true, explain: "Cresce Z_eff e diminuisce il raggio: gli elettroni di legame sono attirati più fortemente." },
      { type: "mc", q: "Perché lo ione sodio Na⁺ è più piccolo dell'atomo di sodio?", options: ["Ha perso il guscio più esterno ed Z_eff per elettrone è maggiore", "Ha perso un protone", "Ha acquistato un neutrone", "Ha più elettroni"], answer: 0, explain: "Perdendo l'elettrone di valenza (3s) restano i gusci 1 e 2, più vicini al nucleo." },
      { type: "order", q: "Ordina per raggio atomico crescente.", items: ["Cl", "Si", "Mg", "Na"], explain: "Nel terzo periodo il raggio cala verso destra: Cl < Si < Mg < Na." }
    ]
  }
});
