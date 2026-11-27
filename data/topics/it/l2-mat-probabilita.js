TOPIC('it', {
  id: "l2-mat-probabilita",
  title: "Introduzione alla probabilità",
  intro: "Lanciare una moneta, giocare al Lotto, leggere le previsioni del tempo, decidere se vaccinarsi o no: la probabilità serve a ragionare in <b>condizioni di incertezza</b>. È nata nel Seicento da una disputa sul gioco d'azzardo e oggi è alla base della statistica, dell'assicurazione, della fisica quantistica e dell'intelligenza artificiale. In questa lezione impari a calcolare la probabilità di un evento con tre approcci diversi (<b>classico</b>, <b>frequentista</b> e <b>soggettivo</b>) e a combinare gli eventi con <b>somma</b> e <b>prodotto</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Esperimenti casuali, spazio campionario ed eventi",
      html: `<p>Un <b>esperimento casuale</b> è un'esperienza il cui risultato non si può prevedere con certezza prima di eseguirla: lancio una moneta, estraggo una carta, tiro un dado. Pur non sapendo il risultato, so <b>quali risultati sono possibili</b>.</p>
<ul>
<li>L'insieme di tutti i possibili risultati si chiama <b>spazio campionario</b> (o spazio degli eventi), indicato con Ω. Per un dado: Ω = {1, 2, 3, 4, 5, 6}. Per una moneta: Ω = {Testa, Croce}.</li>
<li>Un <b>evento</b> è un sottoinsieme di Ω: una proposizione che si verifica o no. "Esce un numero pari" è l'evento E = {2, 4, 6}.</li>
<li><b>Evento elementare</b>: contiene un solo risultato (esce il 5).</li>
<li><b>Evento certo</b>: coincide con tutto Ω (esce un numero tra 1 e 6). <b>Evento impossibile</b>: è l'insieme vuoto ∅ (esce il 7).</li>
<li><b>Evento contrario</b> di E, indicato con Ē: si verifica quando E non si verifica. Contrario di "pari" = "dispari".</li>
</ul>
<p>Con il linguaggio degli insiemi (visto nel primo anno): l'evento <b>A ∪ B</b> ("A <b>oppure</b> B") è l'unione e l'evento <b>A ∩ B</b> ("A <b>e</b> B") è l'intersezione. Due eventi sono <b>incompatibili</b> se non possono verificarsi insieme: A ∩ B = ∅ (esce pari ed esce dispari). Altrimenti sono <b>compatibili</b>.</p>`
    },
    {
      type: "text",
      title: "La probabilità classica (Laplace)",
      html: `<p>Se tutti i risultati elementari sono <b>ugualmente possibili</b> (equiprobabili), la probabilità di un evento E è il rapporto tra i casi favorevoli e i casi possibili:</p>
<p style="text-align:center"><b>p(E) = casi favorevoli / casi possibili</b></p>
<p>Questa è la definizione <b>classica</b> o di <b>Laplace</b> (1812). Conseguenze:</p>
<ul>
<li>La probabilità è un numero tra <b>0 e 1</b>: 0 ≤ p(E) ≤ 1 (si esprime anche in percentuale: 0,25 = 25 %).</li>
<li>L'evento impossibile ha p = 0; l'evento certo ha p = 1.</li>
<li><b>Evento contrario</b>: p(Ē) = 1 − p(E). Utile: spesso è più facile calcolare il contrario.</li>
</ul>
<p><b>Esempi</b>:</p>
<ul>
<li>Dado: p(esce un numero pari) = 3/6 = 1/2. p(esce un multiplo di 3) = 2/6 = 1/3.</li>
<li>Mazzo di 40 carte: p(estrarre un asso) = 4/40 = 1/10; p(estrarre una carta di denari) = 10/40 = 1/4.</li>
<li>Due monete: Ω = {TT, TC, CT, CC}: p(due teste) = 1/4, p(una testa e una croce) = 2/4 = 1/2.</li>
</ul>
<p>⚠️ <b>Attenzione all'equiprobabilità</b>: nei due dadi la somma 7 è più probabile della somma 2, non perché lo "decida" il dado ma perché ci sono più modi per ottenerla. Bisogna contare gli eventi <b>elementari</b> equiprobabili (le coppie ordinate).</p>`
    },
    {
      type: "svg",
      title: "Due dadi: perché il 7 esce più spesso",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<rect x="60" y="220" width="36" height="30" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="105" y="190" width="36" height="60" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="150" y="160" width="36" height="90" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="195" y="130" width="36" height="120" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="240" y="100" width="36" height="150" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="285" y="70" width="36" height="180" fill="#f87171" stroke="#b91c1c" stroke-width="2"/>
<rect x="330" y="100" width="36" height="150" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="375" y="130" width="36" height="120" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="420" y="160" width="36" height="90" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="465" y="190" width="36" height="60" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<rect x="510" y="220" width="36" height="30" fill="#a5b4fc" stroke="#4338ca" stroke-width="2"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="78" y="274">2</text><text x="123" y="274">3</text><text x="168" y="274">4</text><text x="213" y="274">5</text><text x="258" y="274">6</text><text x="303" y="274" fill="#b91c1c">7</text><text x="348" y="274">8</text><text x="393" y="274">9</text><text x="438" y="274">10</text><text x="483" y="274">11</text><text x="528" y="274">12</text>
</g>
<text x="303" y="60" font-size="16" text-anchor="middle" fill="#b91c1c" font-weight="bold">6/36 = 1/6</text>
<text x="78" y="212" font-size="16" text-anchor="middle" fill="#4338ca">1/36</text>
<text x="528" y="212" font-size="16" text-anchor="middle" fill="#4338ca">1/36</text>
<text x="40" y="30" font-size="16" fill="#1f2937">Somma di due dadi: sono 6 × 6 = 36 coppie ordinate equiprobabili</text>
</svg>`,
      caption: "La somma 7 si ottiene in 6 modi (1+6, 2+5, 3+4, 4+3, 5+2, 6+1); le somme 2 e 12 in un solo modo."
    },
    {
      type: "example",
      title: "Esempi guidati",
      html: `<p><b>1. Dado a 6 facce</b>: qual è la probabilità che esca un numero maggiore di 4? Casi favorevoli: {5, 6} = 2; casi possibili 6: p = 2/6 = <b>1/3</b> ≈ 33 %.</p>
<p><b>2. Una scatola</b> contiene 5 palline rosse, 3 blu e 2 verdi. p(blu) = 3/10 = 30 %. p(non rossa) = 1 − 5/10 = 5/10 = 50 %.</p>
<p><b>3. Almeno un 6 in 4 lanci di dado</b>: calcolare "almeno uno" è difficile; il contrario "nessun 6 in 4 lanci" è facile: ogni lancio dà un non-6 con probabilità 5/6, e i lanci sono indipendenti, quindi p(nessun 6) = (5/6)⁴ = 625/1296 ≈ 0,482. Allora p(almeno un 6) = 1 − 0,482 = <b>0,518</b>, un po' più di 1/2. È il gioco che il <b>cavaliere de Méré</b> proponeva agli amici nel Seicento e che gli faceva vincere, in media, più spesso di quanto perdesse.</p>
<p><b>4. Estrazione dal mazzo da 52 carte</b>: p(re) = 4/52 = 1/13; p(cuori) = 13/52 = 1/4.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: probabilità classica",
      questions: [
        { type: "num", q: "Si lancia un dado a 6 facce. Qual è la probabilità (numero decimale tra 0 e 1) di ottenere un numero dispari?", answer: 0.5, tol: 0.01, explain: "Dispari: {1, 3, 5} = 3 casi su 6 = 1/2 = 0,5." },
        { type: "mc", q: "Quale numero NON può essere una probabilità?", options: ["0", "1,3", "0,75"], answer: 1, explain: "Una probabilità sta sempre tra 0 e 1: 1,3 è maggiore di 1." },
        { type: "num", q: "Un'urna contiene 4 palline bianche e 6 nere. Qual è la probabilità (in %) di estrarre una pallina bianca?", answer: 40, unit: "%", explain: "4 casi favorevoli su 10: 4/10 = 40 %." },
        { type: "tf", q: "Se l'evento E ha probabilità 0,3, il suo evento contrario ha probabilità 0,7.", answer: true, explain: "p(Ē) = 1 − p(E) = 1 − 0,3 = 0,7." }
      ]
    },
    {
      type: "text",
      title: "La probabilità frequentista e la legge dei grandi numeri",
      html: `<p>La definizione classica richiede risultati equiprobabili, ma molti eventi non sono così: se un chiodo cade con la punta in su o in giù, se un paziente guarisce con una cura, se domani piove. In questi casi si usa la <b>probabilità frequentista</b>: si ripete l'esperimento <b>molte volte</b> e si osserva la <b>frequenza relativa</b>:</p>
<p style="text-align:center"><b>f = numero di volte in cui E si verifica / numero di prove</b></p>
<p>La <b>legge dei grandi numeri</b> (dimostrata da <b>Jakob Bernoulli</b> nell'<i>Ars Conjectandi</i>, pubblicata nel 1713) dice che, quando il numero di prove cresce, la frequenza relativa si avvicina sempre più alla probabilità vera. Lanciando 10 volte una moneta potresti avere 7 teste (f = 0,7), ma con 10 000 lanci ti aspetti vicino a 0,5. Il matematico <b>John Kerrich</b>, internato in Danimarca durante la seconda guerra mondiale, lanciò una moneta 10 000 volte e ottenne 5 067 teste (50,67 %).</p>
<p>La probabilità frequentista è alla base delle <b>assicurazioni</b>, delle statistiche mediche e delle previsioni del tempo ("70 % di probabilità di pioggia" significa che in situazioni atmosferiche simili è piovuto circa 7 volte su 10).</p>
<p>⚠️ <b>L'errore del giocatore</b>: se a roulette è uscito il rosso 5 volte di fila, la probabilità del nero al lancio successivo <b>non</b> aumenta: la ruota non ha memoria. La legge dei grandi numeri vale <b>in media</b> e su molte prove, non "compensa" i singoli risultati.</p>
<p>Esiste anche la <b>probabilità soggettiva</b>: è il grado di fiducia che una persona attribuisce a un evento sulla base delle sue informazioni (la probabilità che una squadra vinca un campionato, che una nuova azienda abbia successo). Si misura con la scommessa che si è disposti a fare.</p>`
    },
    {
      type: "remember",
      title: "Le tre definizioni a confronto",
      html: `<ul>
<li><b>Classica</b> (Laplace): p = favorevoli / possibili; richiede casi equiprobabili. Si calcola <i>prima</i> di fare l'esperimento (dadi, carte, urne).</li>
<li><b>Frequentista</b>: p ≈ frequenza relativa su molte prove; si ricava <i>dopo</i> aver osservato. Serve quando i casi non sono equiprobabili.</li>
<li><b>Soggettiva</b>: grado di fiducia personale; usata quando l'evento non è ripetibile.</li>
</ul>
<p>Nel Novecento <b>Andrej Kolmogorov</b> (1933) fondò la probabilità su tre assiomi (p ≥ 0; p(Ω) = 1; per eventi incompatibili p(A ∪ B) = p(A) + p(B)) validi per tutte le definizioni.</p>`
    },
    {
      type: "text",
      title: "Somma di eventi: «A oppure B»",
      html: `<p><b>Eventi incompatibili</b>: se A e B non possono verificarsi insieme,</p>
<p style="text-align:center"><b>p(A ∪ B) = p(A) + p(B)</b></p>
<p>Esempio: nel dado, p(esce 1 o esce 6) = 1/6 + 1/6 = 1/3.</p>
<p><b>Eventi compatibili</b>: se A e B possono verificarsi insieme, sommando le probabilità si conterebbe due volte l'intersezione. Si sottrae:</p>
<p style="text-align:center"><b>p(A ∪ B) = p(A) + p(B) − p(A ∩ B)</b></p>
<p><b>Esempio</b>: da un mazzo di 40 carte, p(asso oppure carta di cuori)? p(asso) = 4/40; p(cuori) = 10/40; p(asso di cuori) = 1/40. Quindi p = 4/40 + 10/40 − 1/40 = <b>13/40</b>.</p>
<p><b>Esempio con il dado</b>: A = "pari" = {2, 4, 6}, B = "maggiore di 4" = {5, 6}; A ∩ B = {6}. p(A ∪ B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3. Infatti A ∪ B = {2, 4, 5, 6}: 4 casi su 6.</p>
<p><b>Eventi contrari</b>: sono incompatibili e la loro unione è l'evento certo, quindi p(E) + p(Ē) = 1.</p>`
    },
    {
      type: "text",
      title: "Prodotto di eventi: «A e poi B»",
      html: `<p>Due eventi sono <b>indipendenti</b> se il verificarsi dell'uno non cambia la probabilità dell'altro (due lanci di moneta). Per eventi indipendenti:</p>
<p style="text-align:center"><b>p(A ∩ B) = p(A) · p(B)</b></p>
<p><b>Esempi</b>:</p>
<ul>
<li>Due teste di seguito: 1/2 · 1/2 = 1/4.</li>
<li>Tre 6 consecutivi con un dado: (1/6)³ = 1/216 ≈ 0,46 %.</li>
<li>Una pallina da un'urna con 3 bianche e 2 nere viene <b>rimessa dentro</b> dopo ogni estrazione: p(bianca, poi bianca) = 3/5 · 3/5 = 9/25. Se <b>non</b> viene rimessa, il secondo evento dipende dal primo: p(bianca, poi bianca) = 3/5 · 2/4 = 6/20 = 3/10 (eventi dipendenti).</li>
</ul>
<p>Come orientarsi: <b>oppure → si somma</b>; <b>e (poi) → si moltiplica</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio dalla vita reale: il test e la previsione",
      html: `<p><b>Previsioni del tempo.</b> Se l'app dice "pioggia al 30 %", significa p = 0,3: su 10 giorni con condizioni simili ne piove circa 3. Non è un errore se piove: la previsione non dice "piove" o "non piove", ma quanto è plausibile. Con p = 0,3, "non piove" ha p = 0,7: portare l'ombrello ha senso se l'inconveniente di bagnarsi pesa più del fastidio di portarlo.</p>
<p><b>Una squadra di classe.</b> In una classe di 25 studenti, 10 giocano a calcio, 8 a pallavolo e 3 fanno entrambi gli sport. Scegliendo a caso uno studente, p(calcio o pallavolo) = 10/25 + 8/25 − 3/25 = <b>15/25 = 3/5 = 60 %</b>: i 3 che fanno entrambi sono contati una volta sola.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Pascal, Fermat e il cavaliere de Méré",
      html: `<p>La teoria della probabilità nasce nel <b>1654</b>, quando il cavaliere <b>Antoine Gombaud de Méré</b>, appassionato giocatore, pose a <b>Blaise Pascal</b> due problemi, tra cui quello di come dividere la posta di una partita interrotta in anticipo (il "problema dei punti"). Pascal ne discusse in una celebre corrispondenza con <b>Pierre de Fermat</b>: i due arrivarono alla stessa soluzione contando le possibili continuazioni del gioco. Pochi anni dopo, <b>Christiaan Huygens</b> scrisse il primo trattato sull'argomento (1657). <b>Laplace</b> darà la forma classica alla teoria nel 1812.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il paradosso dei compleanni e il Lotto",
      html: `<p><b>Compleanni</b>: in una classe di soli <b>23 persone</b>, la probabilità che almeno due compiano gli anni lo stesso giorno supera il <b>50 %</b> (è circa 50,7 %); con 70 persone supera il 99,9 %. Sembra assurdo perché pensiamo ai confronti con noi stessi, ma le coppie possibili tra 23 persone sono 253.</p>
<p><b>SuperEnalotto</b>: si sceglie una sestina tra i numeri da 1 a 90. Le sestine possibili sono 622 614 630: la probabilità di vincere il primo premio con una giocata è circa 1 su 622 milioni, un evento praticamente impossibile. Comprare un biglietto non cambia sostanzialmente il tuo destino economico, ma cambia quello di chi gestisce il gioco, che ha un margine garantito.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la probabilità",
      intro: "Se le formule ti sembrano troppo astratte, osserva la probabilità in modo diverso.",
      tabs: [
        {
          label: "🎲 Una prova pratica",
          html: `<p>Prendi due monete e lanciale 40 volte, segnando quante volte escono due teste, una testa e una croce, due croci. Il calcolo teorico dice 1/4, 1/2, 1/4 (cioè circa 10, 20, 10 su 40). Probabilmente non otterrai esattamente questi numeri, ma ci andrai vicino. Se ripeti 200 volte, ti avvicinerai ancora di più: stai vedendo la legge dei grandi numeri con le tue mani. Con un foglio di calcolo o con un programma puoi simulare in pochi secondi anche 100 000 lanci.</p>`
        },
        {
          label: "🌳 L'albero degli esiti",
          html: `<p>Per contare i casi bisogna evitare di dimenticarne qualcuno: disegna un <b>albero</b>. Ogni ramo è una scelta; i risultati finali sono i percorsi. Con due lanci di moneta ci sono 4 percorsi, ciascuno con probabilità 1/2 · 1/2 = 1/4. Sommando i percorsi che realizzano l'evento "una testa e una croce" (TC e CT) si ottiene 1/4 + 1/4 = 1/2.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="60" cy="150" r="8" fill="#1f2937"/>
<line x1="60" y1="150" x2="230" y2="80" stroke="#4338ca" stroke-width="3"/>
<line x1="60" y1="150" x2="230" y2="220" stroke="#4338ca" stroke-width="3"/>
<text x="110" y="100" font-size="16" fill="#4338ca" font-weight="bold">T  1/2</text>
<text x="110" y="216" font-size="16" fill="#4338ca" font-weight="bold">C  1/2</text>
<circle cx="230" cy="80" r="8" fill="#1f2937"/><circle cx="230" cy="220" r="8" fill="#1f2937"/>
<line x1="230" y1="80" x2="400" y2="40" stroke="#166534" stroke-width="3"/>
<line x1="230" y1="80" x2="400" y2="120" stroke="#166534" stroke-width="3"/>
<line x1="230" y1="220" x2="400" y2="180" stroke="#166534" stroke-width="3"/>
<line x1="230" y1="220" x2="400" y2="260" stroke="#166534" stroke-width="3"/>
<text x="290" y="48" font-size="16" fill="#166534" font-weight="bold">T  1/2</text>
<text x="290" y="116" font-size="16" fill="#166534" font-weight="bold">C  1/2</text>
<text x="290" y="186" font-size="16" fill="#166534" font-weight="bold">T  1/2</text>
<text x="290" y="256" font-size="16" fill="#166534" font-weight="bold">C  1/2</text>
<text x="415" y="46" font-size="16" fill="#1f2937">TT → 1/4</text>
<text x="415" y="126" font-size="16" fill="#b91c1c">TC → 1/4</text>
<text x="415" y="186" font-size="16" fill="#b91c1c">CT → 1/4</text>
<text x="415" y="266" font-size="16" fill="#1f2937">CC → 1/4</text>
</svg>`
        },
        {
          label: "🃏 Abbina evento e probabilità",
          html: `<p>Prova ad abbinare ogni evento alla sua probabilità, usando la formula classica (casi favorevoli su casi possibili).</p>`,
          widget: "match",
          options: { pairs: [
            ["Lancio di un dado: esce 6", "1/6"],
            ["Lancio di una moneta: esce testa", "1/2"],
            ["Mazzo di 52 carte: esce un re", "1/13"],
            ["Due monete: due croci", "1/4"],
            ["Dado: esce un numero minore di 7", "1 (evento certo)"],
            ["Dado: esce 0", "0 (evento impossibile)"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: la probabilità",
      nodes: [
        { id: "inc", label: "Incertezza", x: 50, y: 6, color: "#6366f1", html: "Situazioni il cui esito non è prevedibile con certezza.", why: "La probabilità non elimina l'incertezza: la misura. Prima del Seicento il caso era visto come 'volontà divina' o 'fortuna'; con Pascal e Fermat diventa oggetto di calcolo." },
        { id: "ev", label: "Eventi e spazio campionario", x: 18, y: 30, color: "#f59e0b", html: "Ω, sottoinsiemi, evento certo/impossibile/contrario.", why: "Usa il linguaggio degli insiemi: unione, intersezione, complementare. È ciò che permette di formalizzare le operazioni sugli eventi." },
        { id: "cl", label: "Probabilità classica", x: 50, y: 40, color: "#16a34a", html: "Favorevoli / possibili con casi equiprobabili.", why: "Nasce dai giochi con dadi e carte, in cui la simmetria rende ugualmente possibili i risultati (principio di indifferenza). Laplace la sistemò nel 1812." },
        { id: "fr", label: "Probabilità frequentista", x: 82, y: 30, color: "#a855f7", html: "Frequenza relativa su molte prove.", why: "Serve quando non c'è simmetria. Si fonda sulla legge dei grandi numeri di Bernoulli: più prove, più la frequenza si avvicina alla probabilità." },
        { id: "ass", label: "Assiomi (Kolmogorov)", x: 50, y: 65, color: "#ef4444", html: "p ≥ 0; p(Ω) = 1; additività per eventi incompatibili.", why: "Nel 1933 Kolmogorov rese la probabilità una teoria matematica rigorosa, valida per ogni definizione: da questi tre assiomi si ricava tutto il resto." },
        { id: "som", label: "Somma", x: 22, y: 85, color: "#0ea5e9", html: "p(A ∪ B) = p(A) + p(B) − p(A ∩ B).", why: "Sottrarre l'intersezione evita di contare due volte i casi in comune: è il principio di inclusione-esclusione." },
        { id: "pro", label: "Prodotto", x: 78, y: 85, color: "#14b8a6", html: "Per eventi indipendenti: p(A ∩ B) = p(A) · p(B).", why: "Indipendenza significa che sapere A non cambia la probabilità di B; allora le probabilità si moltiplicano lungo i rami dell'albero." }
      ],
      edges: [
        ["inc", "ev", "si descrive con"],
        ["inc", "cl", "misurata da"],
        ["inc", "fr", "misurata da"],
        ["cl", "ass", "soddisfa"],
        ["fr", "ass", "soddisfa"],
        ["ass", "som", "implica"],
        ["ass", "pro", "estende a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: somma e prodotto",
      questions: [
        { type: "num", q: "Da un mazzo di 40 carte, qual è la probabilità (in %) di estrarre un re o un asso?", answer: 20, unit: "%", explain: "Eventi incompatibili: 4/40 + 4/40 = 8/40 = 1/5 = 20 %." },
        { type: "num", q: "Si lanciano due volte una moneta. Qual è la probabilità (in %) di ottenere due croci?", answer: 25, unit: "%", explain: "1/2 · 1/2 = 1/4 = 25 %." },
        { type: "tf", q: "Se A e B sono compatibili, p(A ∪ B) = p(A) + p(B).", answer: false, explain: "Bisogna sottrarre p(A ∩ B), altrimenti i casi comuni sono contati due volte." },
        { type: "mc", q: "A roulette è uscito il rosso 5 volte di fila. Alla giocata successiva…", options: ["È più probabile il nero", "Rosso e nero hanno le stesse probabilità di prima", "È più probabile il rosso"], answer: 1, explain: "La ruota non ha memoria: i lanci sono indipendenti (errore del giocatore)." }
      ]
    }
  ],
  glossary: [
    { t: "Spazio campionario", d: "L'insieme Ω di tutti i possibili risultati di un esperimento casuale." },
    { t: "Evento", d: "Sottoinsieme dello spazio campionario: un fatto che può verificarsi o no." },
    { t: "Evento certo / impossibile", d: "Evento che si verifica sempre (p = 1) / mai (p = 0)." },
    { t: "Evento contrario", d: "Evento Ē che si verifica quando E non si verifica; p(Ē) = 1 − p(E)." },
    { t: "Eventi incompatibili", d: "Eventi che non possono verificarsi insieme." },
    { t: "Eventi indipendenti", d: "Eventi in cui il verificarsi di uno non influenza la probabilità dell'altro." },
    { t: "Probabilità classica", d: "Rapporto tra casi favorevoli e casi possibili, se equiprobabili." },
    { t: "Frequenza relativa", d: "Rapporto tra il numero di volte in cui un evento si verifica e il numero di prove." },
    { t: "Legge dei grandi numeri", d: "All'aumentare delle prove la frequenza relativa si avvicina alla probabilità." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale delle seguenti è la definizione classica di probabilità?", options: ["Casi favorevoli diviso casi possibili, se equiprobabili", "Numero di prove diviso numero di successi", "Il grado di fiducia personale"], answer: 0, explain: "È la definizione di Laplace, valida per casi ugualmente possibili." },
      { type: "num", q: "Si estrae una carta da un mazzo di 52. Qual è la probabilità (in %) di estrarre una carta di picche? (13 su 52)", answer: 25, unit: "%", explain: "13/52 = 1/4 = 25 %." },
      { type: "tf", q: "La probabilità di un evento può essere uguale a 1,2.", answer: false, explain: "È sempre compresa tra 0 e 1." },
      { type: "num", q: "In un'urna ci sono 3 palline rosse, 5 blu e 2 gialle. Qual è la probabilità (in %) che la pallina estratta NON sia blu?", answer: 50, unit: "%", explain: "Non blu = 5 su 10 = 50 %; oppure 1 − 5/10." },
      { type: "num", q: "Lanciando due dadi, qual è la probabilità (in %, arrotondata a un intero) che la somma sia 7?", answer: 17, tol: 1, unit: "%", explain: "6/36 = 1/6 ≈ 16,7 % ≈ 17 %." },
      { type: "mc", q: "Due eventi A e B sono incompatibili. Come si calcola p(A ∪ B)?", options: ["p(A) · p(B)", "p(A) + p(B)", "p(A) − p(B)"], answer: 1, explain: "Per eventi incompatibili le probabilità si sommano." },
      { type: "num", q: "Un dado viene lanciato due volte. Qual è la probabilità (in %, arrotondata a un intero) di ottenere 6 entrambe le volte?", answer: 3, tol: 0.5, unit: "%", explain: "1/6 · 1/6 = 1/36 ≈ 2,8 % ≈ 3 %." },
      { type: "tf", q: "Su 10 lanci una moneta dà 7 teste: significa che la probabilità di testa è 0,7.", answer: false, explain: "Con poche prove la frequenza può discostarsi molto; la legge dei grandi numeri vale per molte prove." },
      { type: "text", q: "Come si chiama il matematico che nel 1812 formulò la definizione classica di probabilità?", answer: ["laplace", "pierre-simon laplace", "pierre simon laplace"], explain: "Pierre-Simon Laplace, nella Théorie analytique des probabilités." },
      { type: "order", q: "Metti in ordine i passi per calcolare la probabilità classica di un evento.", items: ["Elenca i casi possibili (spazio campionario)", "Verifica che siano equiprobabili", "Conta i casi favorevoli all'evento", "Calcola il rapporto favorevoli / possibili"], explain: "Prima si definisce lo spazio, poi si verifica l'equiprobabilità, si contano i casi favorevoli e si fa il rapporto." }
    ]
  }
});
