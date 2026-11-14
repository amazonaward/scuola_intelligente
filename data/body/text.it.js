BODY_TEXT({
  lang: "it",
  title: "Il corpo umano",
  intro: "<p>Il tuo corpo è una squadra di <b>organi</b> che lavorano insieme, giorno e notte. Ruota il modello, allontana i pezzi, tocca un organo e scopri a cosa serve, come funziona e con chi collabora.</p>",
  systems: {
    pelle: { name: "La pelle", intro: "<p>La pelle è l'organo più grande del corpo: ti avvolge come un vestito su misura. Protegge da urti, microbi e sole, regola la temperatura con il sudore e ti fa sentire caldo, freddo, pressione e dolore grazie a milioni di piccoli sensori.</p>" },
    scheletro: { name: "Lo scheletro", intro: "<p>Lo scheletro è l'impalcatura del corpo: circa 206 ossa nell'adulto, collegate da articolazioni, legamenti e tendini. Sostiene il corpo, protegge gli organi delicati, permette i movimenti insieme ai muscoli e, nel midollo osseo, produce le cellule del sangue.</p>" },
    muscoli: { name: "I muscoli", intro: "<p>Nel corpo ci sono più di 600 muscoli. Funzionano accorciandosi (contraendosi) e poi rilassandosi, e tirano le ossa attraverso i tendini. Alcuni li comandiamo noi, altri, come quelli dello stomaco, lavorano da soli. Producono anche calore.</p>" },
    nervoso: { name: "Il sistema nervoso", intro: "<p>È la rete di comando e di comunicazione del corpo. Il cervello e il midollo spinale formano il sistema centrale; i nervi sono i \"cavi\" che portano le informazioni dal corpo al cervello e gli ordini dal cervello ai muscoli e agli organi. I segnali viaggiano come piccoli impulsi elettrici.</p>" },
    sensi: { name: "I sensi", intro: "<p>Vista, udito, olfatto e gusto (e tatto, con la pelle) sono le finestre del corpo sul mondo. Ogni organo di senso trasforma luce, suoni, odori o sapori in segnali nervosi, che il cervello interpreta.</p>" },
    circolatorio: { name: "L'apparato circolatorio", intro: "<p>Il cuore è la pompa che spinge il sangue dentro una rete di tubi, i vasi sanguigni. Le arterie portano il sangue lontano dal cuore, le vene lo riportano indietro. Il sangue consegna ossigeno e nutrienti a ogni cellula e porta via i rifiuti, per questo non si ferma mai.</p>" },
    respiratorio: { name: "L'apparato respiratorio", intro: "<p>Serve a far entrare l'ossigeno e a far uscire l'anidride carbonica. L'aria passa per naso, trachea e bronchi fino ai polmoni, dove l'ossigeno entra nel sangue. Il diaframma, un muscolo sotto i polmoni, fa muovere l'aria come un mantice.</p>" },
    digerente: { name: "L'apparato digerente", intro: "<p>Trasforma il cibo in sostanze abbastanza piccole da passare nel sangue. Il cibo percorre un lungo tubo di circa 8-9 metri: bocca, esofago, stomaco, intestino tenue e intestino crasso. Fegato, cistifellea e pancreas aiutano con succhi speciali.</p>" },
    urinario: { name: "L'apparato urinario", intro: "<p>È il sistema di filtraggio del corpo. I reni puliscono il sangue, eliminano le scorie e l'acqua in eccesso e li trasformano in urina, che scende nella vescica fino a quando è il momento di andare in bagno.</p>" },
    endocrino: { name: "Il sistema endocrino", intro: "<p>Le ghiandole endocrine producono gli ormoni, messaggeri chimici che viaggiano nel sangue e dicono agli organi cosa fare: crescere, usare gli zuccheri, reagire a uno spavento. Agiscono più lentamente dei nervi, ma i loro effetti durano più a lungo.</p>" },
    immunitario: { name: "Il sistema immunitario", intro: "<p>È l'esercito di difesa del corpo. Globuli bianchi e altre cellule riconoscono virus, batteri e altri intrusi e li eliminano. Milza, timo e linfonodi sono le basi dove queste cellule si formano, si allenano e fanno la guardia.</p>" }
  },
  organs: {
    pelle: {
      name: "La pelle", label: "Pelle",
      what: "<p>La pelle copre tutto il corpo come una tuta. Protegge da urti, sporco e microbi, ti tiene al fresco quando suda e ti fa sentire il caldo, il freddo e le carezze.</p>",
      how: "<p>È formata da tre strati: <b>epidermide</b> (sottile e impermeabile, si rinnova di continuo), <b>derma</b> (con vasi, nervi, ghiandole del sudore e radici dei peli) e <b>ipoderma</b> (grasso che isola e ammortizza). Nell'adulto misura circa 1,8 m² e pesa 3-4 kg. Le cellule dell'epidermide si rinnovano ogni 4 settimane circa. Il pigmento <b>melanina</b> filtra i raggi UV del sole. Per raffreddare il corpo, i vasi si dilatano e il sudore evapora; col freddo i vasi si restringono.</p>",
      links: [
        { to: "nervi", text: "Terminazioni nervose nella pelle mandano al cervello, tramite i nervi, i segnali di tatto, temperatura e dolore." },
        { to: "vene", text: "Il sangue che scorre nei vasi vicini alla superficie disperde il calore in eccesso e aiuta a regolare la temperatura." },
        { to: "muscoli", text: "Sotto la pelle i muscoli producono calore; quando hai freddo i piccoli muscoli dei peli ti fanno venire la pelle d'oca." }
      ],
      problems: [
        { title: "Scottatura solare", causes: "troppo sole senza protezione, soprattutto nelle ore centrali.", effects: "la pelle si arrossa, brucia e poi si squama; i raggi UV possono danneggiare le cellule nel lungo periodo.", prevent: "crema solare, cappellino, maglietta, ombra nelle ore calde, bere acqua." },
        { title: "Eczema e pelle secca", causes: "pelle sensibile, sapone aggressivo, aria secca, a volte allergie.", effects: "prurito, arrossamenti e pelle screpolata, che protegge meno bene.", prevent: "lavarsi con detergenti delicati, idratare la pelle; se il prurito persiste, parlane con un adulto o col medico." }
      ],
      fact: "In un giorno perdiamo milioni di cellule della pelle: gran parte della polvere di casa è fatta anche di questo!"
    },
    cranio: {
      name: "Il cranio", label: "Cranio",
      what: "<p>Il cranio è la scatola d'osso che protegge il cervello. Dà anche forma al viso e ospita occhi, orecchie e naso.</p>",
      how: "<p>È formato da 22 ossa: 8 costituiscono la scatola cranica e 14 il viso. Quasi tutte sono unite da giunture rigide chiamate <b>suture</b>; l'unica ad articolazione mobile è la <b>mandibola</b>, che permette di masticare e parlare. Nei neonati le ossa non sono ancora saldate (le \"fontanelle\"), così la testa può passare durante la nascita e il cervello ha spazio per crescere. Un grande foro alla base, il <b>forame magno</b>, lascia passare il midollo spinale.</p>",
      links: [
        { to: "cervello", text: "Racchiude e protegge il cervello come un casco naturale." },
        { to: "colonna", text: "Poggia sulla colonna vertebrale, che lo sostiene e lo fa muovere." },
        { to: "occhi", text: "Le orbite sono due cavità del cranio dove stanno al sicuro gli occhi." },
        { to: "midollo", text: "Dal foro alla base del cranio il cervello si collega al midollo spinale." }
      ],
      problems: [
        { title: "Colpi alla testa", causes: "cadute o urti in bici, sport, giochi.", effects: "il cervello può subire una scossa, con mal di testa o capogiri.", prevent: "casco in bici, monopattino e sci; se batti la testa dillo subito a un adulto e fatti controllare." }
      ],
      fact: "Le ossa del cranio dell'adulto sono incastrate come un puzzle."
    },
    colonna: {
      name: "La colonna vertebrale", label: "Colonna",
      what: "<p>È l'asse del corpo: ti tiene in piedi, ti permette di piegarti e di girarti e protegge il midollo spinale che passa al suo interno.</p>",
      how: "<p>È fatta da 33-34 <b>vertebre</b> impilate: 7 cervicali, 12 toraciche, 5 lombari, poi sacro e coccige (vertebre unite). Tra una vertebra e l'altra ci sono i <b>dischi intervertebrali</b>, cuscinetti elastici che ammortizzano. Vista di lato ha quattro curve a \"S\" che la rendono flessibile e capace di assorbire i colpi. I muscoli della schiena la tengono dritta. Nel canale al suo interno passa il midollo spinale.</p>",
      links: [
        { to: "midollo", text: "Le vertebre formano un canale che protegge il midollo spinale." },
        { to: "costole", text: "Le vertebre toraciche si collegano alle costole, e così forma la gabbia toracica." },
        { to: "bacino", text: "In basso si appoggia al bacino, che sostiene il peso del corpo." },
        { to: "muscoli", text: "I muscoli della schiena la tengono dritta e la fanno muovere." }
      ],
      problems: [
        { title: "Mal di schiena e postura scorretta", causes: "stare troppo seduti o curvi, zaini pesanti portati su una spalla, poco movimento.", effects: "muscoli tesi e dolori alla schiena; nel tempo si può perdere la postura corretta.", prevent: "zaino su due spalle e non troppo carico, pause dopo lo studio, sport e giochi attivi; se il dolore dura, parlane con un adulto o col medico." }
      ],
      fact: "Al mattino sei un po' più alto di sera: durante la notte i dischi tra le vertebre si \"rigonfiano\"."
    },
    costole: {
      name: "Le costole", label: "Costole",
      what: "<p>Le costole formano una gabbia che protegge cuore e polmoni. Si muovono un pochino quando respiri.</p>",
      how: "<p>Sono 12 paia di ossa curve, attaccate dietro alle vertebre toraciche. Le prime 7 paia si collegano davanti allo <b>sterno</b> tramite cartilagine; le altre 5 sono unite in modo indiretto o libere. Questa struttura, la <b>gabbia toracica</b>, è rigida abbastanza da proteggere e flessibile abbastanza da espandersi: durante l'inspirazione i muscoli intercostali sollevano le costole e il torace si allarga, facendo entrare aria. Contengono anche midollo rosso che produce cellule del sangue.</p>",
      links: [
        { to: "polmoni", text: "Fanno da gabbia ai polmoni e si muovono con ogni respiro." },
        { to: "cuore", text: "Proteggono il cuore dagli urti." },
        { to: "colonna", text: "Dietro si agganciano alle vertebre toraciche." },
        { to: "diaframma", text: "Insieme al diaframma cambiano il volume del torace e fanno entrare e uscire l'aria." }
      ],
      problems: [
        { title: "Costole contuse o incrinate", causes: "cadute o colpi forti al torace.", effects: "dolore soprattutto quando si respira profondamente o si ride.", prevent: "protezioni nello sport di contatto e cautela nei giochi; se hai dolore al torace dopo un colpo, dillo a un adulto." }
      ],
      fact: "Le costole si riparano da sole: sono tra le ossa che guariscono meglio."
    },
    bacino: {
      name: "Il bacino", label: "Bacino",
      what: "<p>Il bacino è l'osso a forma di conca sopra le gambe. Sostiene il peso del corpo e protegge gli organi nella parte bassa della pancia.</p>",
      how: "<p>Il bacino è formato dalle due <b>ossa dell'anca</b> (ciascuna nata dall'unione di ileo, ischio e pube), unite davanti tra loro e dietro al <b>sacro</b>. Trasmette il peso del tronco alle gambe attraverso le articolazioni dell'anca, dove la testa del femore ruota dentro una cavità detta acetabolo. Protegge vescica e intestino. È un osso robusto, che cresce fino alla fine dell'adolescenza.</p>",
      links: [
        { to: "colonna", text: "Il sacro in fondo alla colonna è saldato al bacino." },
        { to: "ossa_gambe", text: "Il femore si incastra nell'osso dell'anca formando l'articolazione che ti fa camminare." },
        { to: "vescica", text: "Fa da conca protettiva alla vescica e a parte dell'intestino." }
      ],
      problems: [
        { title: "Contusioni all'anca", causes: "cadute di lato, per esempio sui pattini o sulla neve.", effects: "dolore e un livido, a volte difficoltà a camminare per qualche giorno.", prevent: "protezioni quando pattini o scii, scarpe adatte; se non riesci ad appoggiare la gamba, dillo a un adulto." }
      ],
      fact: "Il bacino è il centro di gravità del corpo, dove si bilancia il tuo peso."
    },
    ossa_braccia: {
      name: "Le ossa delle braccia", label: "Ossa braccia",
      what: "<p>Spalla, braccio, avambraccio e mano sono sostenuti da ossa che ti permettono di afferrare, lanciare e scrivere.</p>",
      how: "<p>Ogni braccio ha: <b>omero</b> (braccio), <b>radio</b> e <b>ulna</b> (avambraccio), 8 ossa del carpo, 5 del metacarpo e 14 falangi, per un totale di 30 ossa per arto più la scapola e la clavicola. La spalla è l'articolazione più mobile del corpo, ma anche tra le più soggette a lussazioni. Radio e ulna possono incrociarsi e permettono di ruotare il palmo della mano. Il pollice \"opponibile\" consente di afferrare con precisione.</p>",
      links: [
        { to: "muscoli", text: "I muscoli tirano le ossa con i tendini: il bicipite piega il gomito e il tricipite lo stende." },
        { to: "nervi", text: "I nervi del braccio danno comandi e portano le sensazioni dalle dita." },
        { to: "costole", text: "Clavicola e scapola collegano il braccio al torace." }
      ],
      problems: [
        { title: "Fratture", causes: "cadute con le mani in avanti, giochi e sport.", effects: "dolore, gonfiore e difficoltà a muovere il braccio; con un gesso l'osso guarisce in qualche settimana.", prevent: "protezioni nello sport, calcio e vitamina D nell'alimentazione, gioco all'aperto; se cadi e ti fa molto male, dillo subito a un adulto." }
      ],
      fact: "Nelle mani e nei polsi si trova più di un quarto di tutte le ossa del corpo."
    },
    ossa_gambe: {
      name: "Le ossa delle gambe", label: "Ossa gambe",
      what: "<p>Le ossa delle gambe sono lunghe e robuste: sostengono il corpo, ti fanno camminare, correre e saltare.</p>",
      how: "<p>Ogni gamba ha il <b>femore</b> (l'osso più lungo e forte del corpo, circa un quarto dell'altezza), la <b>rotula</b>, la <b>tibia</b> e il <b>perone</b>, poi 7 ossa del tarso, 5 del metatarso e 14 falangi del piede. Il ginocchio è una grande articolazione rinforzata da legamenti. Il piede ha un'arcata che funziona da molla e assorbe i colpi. Le ossa lunghe crescono dalle <b>cartilagini di accrescimento</b>, che si chiudono alla fine dell'adolescenza.</p>",
      links: [
        { to: "bacino", text: "Il femore ruota nella cavità dell'osso dell'anca." },
        { to: "muscoli", text: "Quadricipite e polpacci tirano le ossa delle gambe e permettono di camminare e correre." },
        { to: "cervelletto", text: "Il cervelletto coordina i movimenti e l'equilibrio quando cammini e salti." }
      ],
      problems: [
        { title: "Distorsioni e fratture", causes: "salti, scivolate, scarpe poco adatte.", effects: "dolore e gonfiore alla caviglia o al ginocchio, difficoltà a camminare.", prevent: "riscaldamento prima dello sport, scarpe adatte e allenamento graduale; se ti fa male appoggiare il piede, parlane con un adulto o col medico." }
      ],
      fact: "Il femore può sopportare un peso di molte volte il tuo, ed è più resistente del cemento a parità di peso."
    },
    muscoli: {
      name: "I muscoli", label: "Muscoli",
      what: "<p>I muscoli ti fanno muovere: correre, saltare, sorridere, respirare. Sono fatti di fibre che si accorciano e poi si rilassano.</p>",
      how: "<p>Nel corpo ci sono oltre 600 muscoli. I <b>muscoli scheletrici</b> sono volontari e si attaccano alle ossa con i <b>tendini</b>; i <b>muscoli lisci</b> (stomaco, intestino, vasi) lavorano da soli; il <b>muscolo cardiaco</b> è solo nel cuore. Un muscolo può solo tirare, per questo lavora in coppie: per esempio bicipite e tricipite (agonista e antagonista). Per contrarsi usa energia ottenuta da zuccheri e ossigeno; una parte diventa calore, cosa che ti scalda quando ti muovi. Allenarsi rende le fibre più forti.</p>",
      links: [
        { to: "nervi", text: "I nervi mandano ai muscoli l'ordine di contrarsi." },
        { to: "ossa_braccia", text: "Con i tendini tirano le ossa, e così muovono articolazioni come il gomito." },
        { to: "cuore", text: "Il cuore è un muscolo speciale che lavora senza fermarsi." },
        { to: "vene", text: "Quando i muscoli si contraggono schiacciano le vene e aiutano il sangue a tornare al cuore." }
      ],
      problems: [
        { title: "Crampi e strappi", causes: "sforzo senza riscaldamento, poca acqua, stanchezza.", effects: "il muscolo si contrae in modo doloroso o si fa male; serve riposo.", prevent: "riscaldamento e stretching, bere acqua, aumentare gli sforzi un po' per volta." }
      ],
      fact: "Il muscolo più forte rispetto alle sue dimensioni è il massetere, che muove la mandibola."
    },
    diaframma: {
      name: "Il diaframma", label: "Diaframma",
      what: "<p>È un muscolo a forma di cupola sotto i polmoni. Si muove su e giù e così fa entrare e uscire l'aria quando respiri.</p>",
      how: "<p>Il diaframma separa il torace dall'addome. Quando inspiri si <b>contrae</b> e si abbassa, il torace si allarga e la pressione nei polmoni diminuisce: l'aria entra. Quando espiri si <b>rilassa</b> e risale, e l'aria esce. Lavora in modo automatico, circa 12-20 volte al minuto a riposo, ma possiamo controllarlo (per cantare o trattenere il fiato). Il singhiozzo è una contrazione improvvisa e involontaria del diaframma, interrotta dalla chiusura della glottide.</p>",
      links: [
        { to: "polmoni", text: "Quando si abbassa i polmoni si riempiono d'aria, quando risale la spingono fuori." },
        { to: "costole", text: "Lavora insieme ai muscoli tra le costole per allargare il torace." },
        { to: "stomaco", text: "Sotto di lui, nell'addome, stanno stomaco e fegato; si muove su di loro a ogni respiro." },
        { to: "nervi", text: "Il nervo frenico gli manda gli ordini per contrarsi." }
      ],
      problems: [
        { title: "Singhiozzo", causes: "mangiare troppo in fretta, bevande gassate, risate.", effects: "il diaframma si contrae a scatti e fa il tipico \"hic\"; di solito passa da solo.", prevent: "mangiare lentamente e masticare bene; se non passa per ore, parlane con un adulto." }
      ],
      fact: "Il diaframma lavora per tutta la vita senza mai riposare, anche mentre dormi."
    },
    cervello: {
      name: "Il cervello", label: "Cervello",
      what: "<p>È il centro di comando del corpo. Pensa, ricorda, impara, sente le emozioni e dirige tutto quello che fai, anche mentre dormi.</p>",
      how: "<p>Pesa circa 1,3-1,4 kg e contiene circa 86 miliardi di cellule nervose, i <b>neuroni</b>, collegati da trilioni di connessioni (sinapsi). La parte più grande, la <b>corteccia</b>, è divisa in due emisferi e in lobi: elabora vista, udito, movimento, linguaggio e pensiero. All'interno ci sono aree che regolano emozioni, memoria, sonno, fame e sete. Usa circa il 20% dell'energia del corpo pur pesando il 2%. I neuroni comunicano con segnali elettrici e sostanze chimiche, i neurotrasmettitori.</p>",
      links: [
        { to: "midollo", text: "Manda e riceve i segnali del corpo attraverso il midollo spinale." },
        { to: "cervelletto", text: "Il cervelletto, sotto di lui, rende i movimenti precisi e coordinati." },
        { to: "occhi", text: "Il lobo posteriore trasforma i segnali degli occhi nelle immagini che vedi." },
        { to: "cranio", text: "Il cranio lo protegge come un casco." },
        { to: "tiroide", text: "Con l'ipofisi, una piccola ghiandola alla base, controlla molte ghiandole endocrine." }
      ],
      problems: [
        { title: "Mal di testa", causes: "stanchezza, poca acqua, tensione, schermi per troppo tempo.", effects: "dolore alla testa e difficoltà a concentrarsi.", prevent: "dormire a sufficienza, bere acqua, fare pause dagli schermi; se i mal di testa sono frequenti, parlane con un adulto o col medico." },
        { title: "Poco sonno", causes: "andare a letto tardi, schermi la sera.", effects: "meno attenzione e memoria, più irritabilità; il cervello non riesce a \"fare ordine\".", prevent: "orari regolari, niente schermi prima di dormire, camera buia e tranquilla." }
      ],
      fact: "Il cervello è fatto per circa il 75% di acqua e non ha recettori del dolore: i dolori della testa nascono intorno a lui."
    },
    cervelletto: {
      name: "Il cervelletto", label: "Cervelletto",
      what: "<p>È la parte del cervello che ti aiuta a mantenere l'equilibrio e a fare movimenti precisi, come andare in bici o afferrare una palla.</p>",
      how: "<p>Sta nella parte posteriore e bassa della testa. Pesa circa un decimo del cervello ma contiene più della metà dei suoi neuroni. Riceve informazioni da muscoli, articolazioni, orecchio interno (equilibrio) e occhi, le confronta con i movimenti che il cervello ha ordinato e corregge gli errori in tempo reale. Per questo, con l'esercizio, i gesti diventano sempre più fluidi e automatici: imparare ad andare in bici \"allena\" il cervelletto.</p>",
      links: [
        { to: "cervello", text: "Riceve dal cervello gli ordini di movimento e li rifinisce." },
        { to: "orecchie", text: "L'orecchio interno gli dice come è inclinata la testa, utile per l'equilibrio." },
        { to: "muscoli", text: "Coordina i muscoli perché lavorino insieme con precisione." },
        { to: "midollo", text: "Scambia informazioni con il corpo tramite il midollo spinale." }
      ],
      problems: [
        { title: "Capogiri e perdita di equilibrio", causes: "giri su sé stessi, stanchezza, a volte malattie dell'orecchio interno.", effects: "ti sembra che tutto giri e fai fatica a stare in piedi.", prevent: "sedersi finché passa; se capitano spesso, parlane con un adulto o col medico." }
      ],
      fact: "Dopo molti giri su te stesso, il capogiro nasce perché il liquido dell'orecchio continua a muoversi."
    },
    midollo: {
      name: "Il midollo spinale", label: "Midollo",
      what: "<p>È un lungo cordone di nervi dentro la colonna vertebrale. Porta i messaggi tra il cervello e il resto del corpo, come un'autostrada.</p>",
      how: "<p>Lungo circa 45 cm, scende dal cervello dentro il canale delle vertebre. Da esso escono 31 paia di <b>nervi spinali</b>. Porta segnali <b>sensitivi</b> (dal corpo al cervello) e <b>motori</b> (dal cervello ai muscoli). Può anche gestire da solo i <b>riflessi</b>: quando tocchi qualcosa di molto caldo il segnale arriva al midollo, che ordina subito al muscolo di ritrarsi, prima ancora che il cervello \"senta\" il dolore. È protetto da vertebre, membrane e liquido.</p>",
      links: [
        { to: "cervello", text: "È il collegamento tra il cervello e tutto il corpo." },
        { to: "nervi", text: "Dal midollo escono i nervi spinali che raggiungono braccia, gambe e organi." },
        { to: "muscoli", text: "Gli ordini per muoversi viaggiano dal cervello al midollo e poi ai muscoli." },
        { to: "colonna", text: "La colonna vertebrale lo avvolge e lo protegge." }
      ],
      problems: [
        { title: "Colpi alla schiena", causes: "cadute forti o incidenti.", effects: "possono danneggiare il midollo e far perdere sensibilità o movimento; per questo è ben protetto.", prevent: "cinture di sicurezza, casco, cautela nei tuffi in acque basse e negli sport pericolosi." }
      ],
      fact: "Il riflesso rotuleo (il calcetto quando il medico batte il ginocchio) è gestito dal midollo, senza passare dal cervello."
    },
    nervi: {
      name: "I nervi", label: "Nervi",
      what: "<p>I nervi sono sottili \"cavi\" che portano messaggi in tutto il corpo: dicono al cervello cosa senti e portano ai muscoli l'ordine di muoversi.</p>",
      how: "<p>Ogni nervo è un fascio di fibre nervose (prolungamenti dei neuroni, gli <b>assoni</b>). Molte sono avvolte da <b>mielina</b>, una guaina grassa che fa viaggiare i segnali fino a oltre 100 m/s. Esistono nervi <b>sensitivi</b>, <b>motori</b> e misti. Il sistema nervoso periferico comprende anche il sistema <b>autonomo</b>, che regola senza che tu ci pensi battito, digestione e respirazione. Un segnale passa da un neurone all'altro tramite le sinapsi, con sostanze chimiche.</p>",
      links: [
        { to: "midollo", text: "I nervi spinali partono dal midollo e si ramificano nel corpo." },
        { to: "muscoli", text: "I nervi motori ordinano ai muscoli di contrarsi." },
        { to: "pelle", text: "I nervi sensitivi portano al cervello tatto, caldo, freddo e dolore dalla pelle." },
        { to: "cuore", text: "Il sistema autonomo regola in automatico il ritmo del cuore." }
      ],
      problems: [
        { title: "Formicolio per posizione scorretta", causes: "restare a lungo seduti in una posizione, gambe incrociate o gomito appoggiato.", effects: "un nervo viene schiacciato e senti formicolio o gambe \"addormentate\".", prevent: "cambiare posizione spesso e muoversi; di solito passa in pochi minuti." }
      ],
      fact: "Il nervo sciatico, nella gamba, è il nervo più lungo del corpo."
    },
    occhi: {
      name: "Gli occhi", label: "Occhi",
      what: "<p>Con gli occhi vedi forme, colori e movimenti. Catturano la luce e la trasformano in segnali per il cervello.</p>",
      how: "<p>La luce entra dalla <b>cornea</b>, passa per la pupilla (che si allarga o si restringe a seconda della luce, regolata dall'iride) e il <b>cristallino</b>, una lente che mette a fuoco l'immagine sulla <b>retina</b>. Qui i <b>coni</b> (circa 6 milioni, per i colori) e i <b>bastoncelli</b> (circa 120 milioni, per la luce debole) trasformano la luce in segnali elettrici. Il <b>nervo ottico</b> li porta al cervello, che raddrizza l'immagine (sulla retina è capovolta) e la interpreta. Le palpebre e le lacrime tengono pulito l'occhio.</p>",
      links: [
        { to: "cervello", text: "Il nervo ottico porta al cervello i segnali, che li trasforma in immagini." },
        { to: "cranio", text: "Le orbite del cranio proteggono gli occhi." },
        { to: "muscoli", text: "Sei piccoli muscoli per occhio li fanno muovere in tutte le direzioni." },
        { to: "naso", text: "Le lacrime scendono dai piccoli canali agli angoli degli occhi fino al naso: per questo piangendo ti cola il naso." }
      ],
      problems: [
        { title: "Miopia e vista affaticata", causes: "troppo tempo vicino a schermi e libri, poco tempo all'aperto, a volte anche ereditarietà.", effects: "gli oggetti lontani sembrano sfocati, gli occhi si stancano e fanno male.", prevent: "pause dagli schermi (guarda lontano ogni 20 minuti), luce buona, giocare all'aperto; se vedi sfocato, parlane con un adulto per una visita." }
      ],
      fact: "Sbattiamo le palpebre circa 15-20 volte al minuto per bagnare l'occhio."
    },
    orecchie: {
      name: "Le orecchie", label: "Orecchie",
      what: "<p>Le orecchie ti fanno sentire i suoni. Ma non solo: nell'orecchio c'è anche il segreto del tuo equilibrio.</p>",
      how: "<p>Il padiglione raccoglie i suoni e li porta nel condotto fino al <b>timpano</b>, una membrana che vibra. La vibrazione passa a tre ossicini (martello, incudine e staffa) nell'orecchio medio, che la amplificano. Nell'orecchio interno la <b>coclea</b>, un tubicino a spirale pieno di liquido, trasforma le vibrazioni in segnali nervosi inviati al cervello. Accanto ci sono i <b>canali semicircolari</b>, che sentono i movimenti della testa e aiutano l'equilibrio. La tromba di Eustachio collega l'orecchio alla gola e bilancia la pressione.</p>",
      links: [
        { to: "cervello", text: "Il nervo acustico porta i suoni al cervello, che li riconosce." },
        { to: "cervelletto", text: "Le informazioni dei canali semicircolari aiutano il cervelletto a mantenere l'equilibrio." },
        { to: "naso", text: "La tromba di Eustachio collega l'orecchio medio al naso e alla gola; per questo un raffreddore può dare mal d'orecchio." }
      ],
      problems: [
        { title: "Otite", causes: "un raffreddore che arriva fino all'orecchio medio.", effects: "mal d'orecchio e udito attutito per qualche giorno.", prevent: "soffiare il naso con delicatezza, lavare le mani; se senti dolore all'orecchio, avvisa un adulto." },
        { title: "Rumore troppo forte", causes: "musica a volume alto, specialmente con le cuffie.", effects: "le cellule dell'orecchio interno si possono danneggiare e l'udito si indebolisce.", prevent: "volume moderato, pause dalle cuffie, proteggere le orecchie nei luoghi molto rumorosi." }
      ],
      fact: "I tre ossicini dell'orecchio sono le ossa più piccole del corpo: la staffa è lunga circa 3 mm."
    },
    naso: {
      name: "Il naso", label: "Naso",
      what: "<p>Il naso fa entrare l'aria, la scalda e la pulisce, e ti fa sentire gli odori.</p>",
      how: "<p>L'aria passa per le <b>cavità nasali</b>, rivestite di muco e peli che trattengono polvere e microbi, e viene scaldata e inumidita prima di arrivare ai polmoni. In alto, un piccolo tessuto con milioni di cellule dell'<b>olfatto</b> riconosce le molecole degli odori e manda segnali al cervello. Gusto e olfatto lavorano insieme: con il naso chiuso, i sapori sembrano molto più deboli. Il naso comunica con le orecchie e gli occhi attraverso piccoli canali.</p>",
      links: [
        { to: "trachea", text: "L'aria pulita e calda scende dal naso alla trachea." },
        { to: "lingua", text: "Olfatto e gusto lavorano insieme: gran parte del sapore dei cibi è in realtà odore." },
        { to: "cervello", text: "Il nervo olfattivo porta al cervello gli odori, collegati anche alle emozioni e ai ricordi." },
        { to: "occhi", text: "Le lacrime passano dagli occhi al naso attraverso i dotti lacrimali." }
      ],
      problems: [
        { title: "Raffreddore", causes: "virus che si diffondono con starnuti e mani non lavate.", effects: "naso chiuso o che cola, e olfatto e gusto ridotti per qualche giorno.", prevent: "lavare spesso le mani, usare fazzoletti monouso, starnutire nel gomito, dormire e mangiare bene." },
        { title: "Allergia al polline", causes: "il sistema immunitario reagisce ai pollini.", effects: "starnuti, naso che prude e occhi arrossati in primavera.", prevent: "se succede ogni anno, parlane con un adulto e col medico." }
      ],
      fact: "Possiamo riconoscere migliaia di odori diversi, e l'olfatto è il senso più legato ai ricordi."
    },
    lingua: {
      name: "La lingua", label: "Lingua",
      what: "<p>La lingua sente i sapori, mescola il cibo mentre mastichi e ti aiuta a parlare.</p>",
      how: "<p>È un muscolo ricoperto da piccole sporgenze, le <b>papille gustative</b>, con migliaia di bottoni del gusto che riconoscono i sapori fondamentali: dolce, salato, acido, amaro e umami. Quando mastichi spinge il cibo tra i denti, lo mescola con la <b>saliva</b> (che contiene un enzima, l'amilasi, che inizia a digerire l'amido) e forma il <b>bolo</b>, che poi spinge verso la gola per deglutire. Muovendosi in modo molto preciso, ci permette anche di pronunciare le parole.</p>",
      links: [
        { to: "esofago", text: "Spinge il bolo di cibo verso la gola e poi l'esofago." },
        { to: "naso", text: "Insieme al naso ti fa riconoscere il sapore completo dei cibi." },
        { to: "cervello", text: "I nervi portano al cervello le informazioni sui sapori." }
      ],
      problems: [
        { title: "Carie e bocca sporca", causes: "zuccheri e scarsa pulizia dei denti, i batteri della bocca producono acidi.", effects: "i denti si rovinano e si può avere alito cattivo.", prevent: "lavare i denti dopo i pasti e la sera, pochi dolci e bibite zuccherate, visite dal dentista." }
      ],
      fact: "Ogni lingua ha un disegno unico, come le impronte digitali."
    },
    cuore: {
      name: "Il cuore", label: "Cuore",
      what: "<p>Il cuore è una pompa muscolare grande come il tuo pugno. Batte tutta la vita per spingere il sangue in tutto il corpo.</p>",
      how: "<p>È un muscolo con quattro cavità: due <b>atri</b> (che ricevono il sangue) e due <b>ventricoli</b> (che lo spingono fuori), separati da valvole che lo fanno andare in una sola direzione. Il lato destro manda il sangue ai polmoni (circolazione polmonare), il sinistro lo manda a tutto il corpo (circolazione sistemica). A riposo batte 60-100 volte al minuto, circa 100 000 volte al giorno, e pompa circa 5 litri di sangue al minuto. Il battito è comandato da un gruppo di cellule, il pacemaker naturale, e si accelera con lo sforzo.</p>",
      links: [
        { to: "polmoni", text: "Il lato destro manda ai polmoni il sangue povero di ossigeno (circolazione polmonare); torna ossigenato." },
        { to: "arterie", text: "Dal ventricolo sinistro il sangue ossigenato parte nell'aorta e nelle arterie." },
        { to: "vene", text: "Le vene riportano al cuore il sangue che ha già consegnato l'ossigeno." },
        { to: "nervi", text: "Il sistema nervoso autonomo ne accelera o rallenta il battito." }
      ],
      problems: [
        { title: "Infarto e malattie del cuore", causes: "fumo, colesterolo alto, pressione alta, sedentarietà, alimentazione scorretta (soprattutto negli adulti).", effects: "una parte del cuore riceve meno sangue e ossigeno e fa fatica a pompare, e può soffrirne tutto il corpo.", prevent: "muoversi ogni giorno, mangiare frutta, verdura e poco sale, non fumare, dormire bene." }
      ],
      fact: "Il cuore inizia a battere già dopo circa 3 settimane dal concepimento e non si ferma più."
    },
    arterie: {
      name: "Le arterie", label: "Arterie",
      what: "<p>Le arterie sono i tubi che portano il sangue ricco di ossigeno dal cuore a tutte le parti del corpo.</p>",
      how: "<p>Hanno pareti spesse ed elastiche e resistono alla pressione del sangue spinto dal cuore. La più grande, l'<b>aorta</b>, ha circa 2-3 cm di diametro e si ramifica in arterie sempre più piccole fino ai <b>capillari</b>, sottilissimi, dove avvengono gli scambi con le cellule. Il \"battito\" che senti al polso è l'onda di pressione che si propaga nelle arterie a ogni battito del cuore. La <b>pressione arteriosa</b> si misura con due valori: massima (cuore contratto) e minima (cuore rilassato). Le arterie polmonari fanno eccezione: portano sangue povero di ossigeno ai polmoni.</p>",
      links: [
        { to: "cuore", text: "Partono dal cuore, che le riempie di sangue a ogni battito." },
        { to: "vene", text: "Dopo i capillari il sangue raggiunge le vene e ritorna al cuore." },
        { to: "reni", text: "Le arterie renali portano ai reni il sangue da filtrare." },
        { to: "cervello", text: "Le arterie del collo portano al cervello l'ossigeno di cui ha molto bisogno." }
      ],
      problems: [
        { title: "Pressione alta", causes: "troppo sale, poco movimento, sovrappeso, fumo.", effects: "le pareti delle arterie sono sotto sforzo e il cuore lavora di più, nel tempo possono nascerne problemi.", prevent: "poco sale, tanta frutta e verdura, muoversi, non fumare; il medico controlla la pressione." }
      ],
      fact: "Se mettessi in fila tutti i vasi sanguigni arriveresti a circa 100 000 km, più di due giri della Terra."
    },
    vene: {
      name: "Le vene", label: "Vene",
      what: "<p>Le vene riportano il sangue al cuore dopo che ha consegnato l'ossigeno e raccolto i rifiuti.</p>",
      how: "<p>Hanno pareti più sottili delle arterie e una pressione più bassa. Nelle vene delle gambe ci sono <b>valvole</b> a forma di taschino che impediscono al sangue di tornare giù. Il ritorno verso il cuore è aiutato dai <b>muscoli</b> che, contraendosi, schiacciano le vene, e dal movimento del respiro. Le due vene più grandi, la vena cava superiore e inferiore, portano il sangue all'atrio destro. Le vene polmonari sono un'eccezione: portano sangue ossigenato dai polmoni al cuore. Il colore bluastro delle vene sotto la pelle è un effetto ottico.</p>",
      links: [
        { to: "cuore", text: "Le vene cave portano il sangue nell'atrio destro del cuore." },
        { to: "muscoli", text: "I muscoli delle gambe, contraendosi, spingono il sangue in su verso il cuore." },
        { to: "intestino_tenue", text: "Dall'intestino una vena speciale porta i nutrienti al fegato." },
        { to: "polmoni", text: "Le vene polmonari riportano al cuore il sangue ricco di ossigeno." }
      ],
      problems: [
        { title: "Gambe pesanti", causes: "stare molto tempo fermi in piedi o seduti, poca circolazione.", effects: "il sangue ristagna nelle gambe e si sentono gonfie e stanche.", prevent: "muoversi spesso, fare pause, camminare, non stare con le gambe ferme per ore." }
      ],
      fact: "Nelle vene c'è circa il 60-70% del sangue del corpo in ogni momento."
    },
    trachea: {
      name: "La trachea", label: "Trachea",
      what: "<p>La trachea è il tubo che porta l'aria dalla gola ai polmoni. Ha anelli di cartilagine che la tengono aperta.</p>",
      how: "<p>È lunga circa 10-12 cm ed è formata da 16-20 anelli di cartilagine a forma di \"C\", che la tengono sempre aperta, rivestiti dentro da cellule con minuscole ciglia e muco. Il muco intrappola polvere e microbi e le ciglia lo spingono verso la gola, dove viene deglutito o espulso con la tosse. In basso si divide in due <b>bronchi</b>, uno per polmone, che si ramificano in tubicini sempre più piccoli (bronchioli). Sopra, la <b>laringe</b> contiene le corde vocali, e l'<b>epiglottide</b> chiude la trachea quando deglutisci.</p>",
      links: [
        { to: "naso", text: "Riceve l'aria dal naso e dalla bocca, già riscaldata e pulita." },
        { to: "polmoni", text: "Si divide nei due bronchi che portano l'aria ai polmoni." },
        { to: "esofago", text: "Corre davanti all'esofago; l'epiglottide la chiude quando deglutisci così il cibo non ci entra." }
      ],
      problems: [
        { title: "Tosse e bronchite", causes: "virus, fumo, aria inquinata.", effects: "il muco aumenta, la gola irrita e la tosse cerca di pulire le vie respiratorie.", prevent: "evitare il fumo, anche passivo, lavare le mani, ricambiare l'aria; se la tosse dura, parlane con un adulto o col medico." }
      ],
      fact: "Un colpo di tosse può spingere fuori l'aria a decine di metri al secondo."
    },
    polmoni: {
      name: "I polmoni", label: "Polmoni",
      what: "<p>I polmoni sono due grandi \"spugne\" che prendono l'ossigeno dall'aria e lo mandano nel sangue, e fanno uscire l'anidride carbonica.</p>",
      how: "<p>Nei polmoni i bronchi si ramificano in migliaia di bronchioli che finiscono in circa 300-500 milioni di <b>alveoli</b>, minuscole sacche circondate da capillari. Le loro pareti sono sottilissime: l'ossigeno passa nel sangue e l'anidride carbonica passa dal sangue all'aria, per <b>diffusione</b>. Complessivamente la superficie degli alveoli è grande come mezzo campo da tennis circa (50-70 m²). Il polmone destro ha tre lobi, il sinistro due, per lasciare posto al cuore. A riposo respiriamo 12-20 volte al minuto.</p>",
      links: [
        { to: "cuore", text: "Il cuore manda ai polmoni il sangue povero di ossigeno e lo riceve ossigenato." },
        { to: "diaframma", text: "Il diaframma li fa gonfiare e sgonfiare ad ogni respiro." },
        { to: "trachea", text: "L'aria arriva dalla trachea attraverso i bronchi." },
        { to: "costole", text: "Le costole li proteggono come una gabbia." },
        { to: "vene", text: "Dalle vene polmonari esce il sangue ricco di ossigeno diretto al cuore." }
      ],
      problems: [
        { title: "Asma", causes: "allergie, infezioni, aria fredda o fumo possono restringere i bronchi.", effects: "affanno, tosse e fischi nel respiro, perché l'aria passa con fatica.", prevent: "evitare fumo e polvere, seguire le indicazioni del medico se si è asmatici e tenere con sé le medicine." },
        { title: "Polmonite", causes: "infezioni da virus o batteri.", effects: "gli alveoli si riempiono di liquido e passa meno ossigeno nel sangue; serve cura medica.", prevent: "vaccinazioni, lavare le mani, non fumare, dormire e mangiare bene." }
      ],
      fact: "Stesi uno accanto all'altro, gli alveoli coprirebbero una superficie decine di volte più grande della tua pelle."
    },
    esofago: {
      name: "L'esofago", label: "Esofago",
      what: "<p>L'esofago è il tubo che porta il cibo dalla gola allo stomaco. Funziona anche a testa in giù!</p>",
      how: "<p>È lungo circa 25 cm. Le sue pareti muscolari si contraggono a onde, il <b>peristaltismo</b>, che spingono il cibo verso il basso senza bisogno della gravità. All'inizio e alla fine ci sono due \"valvole\" muscolari (sfinteri): quello in fondo si apre per far passare il cibo nello stomaco e poi si chiude per impedirgli di risalire. Quando il succo gastrico acido risale un po', si sente il bruciore detto \"reflusso\".</p>",
      links: [
        { to: "lingua", text: "Riceve il cibo masticato che la lingua spinge verso la gola." },
        { to: "stomaco", text: "In fondo si apre nello stomaco, dove il cibo viene digerito." },
        { to: "trachea", text: "Passa dietro la trachea: quando deglutisci l'epiglottide la chiude." },
        { to: "diaframma", text: "Attraversa il diaframma per entrare nell'addome." }
      ],
      problems: [
        { title: "Bruciore di stomaco", causes: "pasti abbondanti o molto grassi, mangiare di corsa, bibite gassate.", effects: "una sensazione di bruciore dietro lo sterno, quando un po' di acido risale.", prevent: "mangiare piano, porzioni moderate, non andare a letto subito dopo cena; se capita spesso, parlane con un adulto o col medico." }
      ],
      fact: "Il cibo scende lungo l'esofago in pochi secondi."
    },
    stomaco: {
      name: "Lo stomaco", label: "Stomaco",
      what: "<p>Lo stomaco è un sacco muscolare che mescola il cibo con succhi speciali e lo trasforma in una poltiglia.</p>",
      how: "<p>Ha una capienza di circa 1-1,5 litri. Le sue pareti muscolari impastano il cibo per 2-4 ore, mescolandolo con il <b>succo gastrico</b>, ricco di acido cloridrico (che uccide molti microbi) e di enzimi come la pepsina, che iniziano a digerire le proteine. Uno strato di muco protegge la parete dall'acido. Il risultato è il <b>chimo</b>, che passa a piccole dosi nell'intestino tenue attraverso una valvola, il piloro.</p>",
      links: [
        { to: "esofago", text: "Riceve il cibo dall'esofago." },
        { to: "intestino_tenue", text: "Il chimo passa a piccole dosi nell'intestino tenue." },
        { to: "fegato", text: "Sta vicino al fegato, che prepara la bile utile nelle fasi successive della digestione." },
        { to: "nervi", text: "I nervi dicono allo stomaco quando è ora di lavorare e mandano la sensazione di fame." }
      ],
      problems: [
        { title: "Mal di pancia e gastrite", causes: "mangiare troppo in fretta, troppo cibo, stress, infezioni.", effects: "dolore o bruciore e nausea, la digestione è più difficile.", prevent: "mangiare con calma, a orari regolari, evitare eccessi di cibi grassi o piccanti; se il dolore persiste, parlane con un adulto o col medico." }
      ],
      fact: "Il rivestimento dello stomaco si rinnova ogni pochi giorni, così l'acido non lo rovina."
    },
    fegato: {
      name: "Il fegato", label: "Fegato",
      what: "<p>Il fegato è la grande \"fabbrica\" del corpo: pulisce il sangue, immagazzina energia e prepara sostanze utili per digerire.</p>",
      how: "<p>È l'organo interno più grande (circa 1,5 kg) e svolge oltre 500 funzioni. Riceve dall'intestino, attraverso la <b>vena porta</b>, il sangue carico di nutrienti: li trasforma, immagazzina lo zucchero sotto forma di <b>glicogeno</b> e lo restituisce quando serve. Rende meno nocive alcune sostanze (come i farmaci), produce proteine del sangue e la <b>bile</b>, che aiuta a digerire i grassi. Può rigenerarsi dopo un danno: una parte che si è persa può ricrescere.</p>",
      links: [
        { to: "cistifellea", text: "La bile prodotta dal fegato viene conservata nella cistifellea." },
        { to: "intestino_tenue", text: "Riceve dall'intestino i nutrienti assorbiti, e manda la bile nell'intestino." },
        { to: "pancreas", text: "Il pancreas e il fegato regolano insieme la quantità di zucchero nel sangue." },
        { to: "vene", text: "La vena porta e la vena cava portano il sangue dentro e fuori dal fegato." }
      ],
      problems: [
        { title: "Fegato affaticato", causes: "troppi cibi grassi e dolci, poco movimento, alcol (negli adulti), alcuni farmaci presi senza controllo.", effects: "il fegato fa più fatica a lavorare e il grasso si accumula; nel tempo può rovinarsi.", prevent: "mangiare vario, muoversi, prendere medicine solo con un adulto, niente alcol per i ragazzi." }
      ],
      fact: "Il fegato è l'unico organo interno che può rigenerarsi in buona parte."
    },
    cistifellea: {
      name: "La cistifellea", label: "Cistifellea",
      what: "<p>È un piccolo sacchetto sotto il fegato dove si conserva la bile, il liquido che aiuta a digerire i grassi.</p>",
      how: "<p>Ha la forma di una piccola pera, lunga circa 8-10 cm. La bile è prodotta dal fegato di continuo e arriva alla cistifellea, che la <b>concentra</b> togliendo acqua. Quando mangi cibi grassi, un ormone fa contrarre la cistifellea, che spreme la bile nel <b>duodeno</b> (la prima parte dell'intestino tenue). La bile funziona come un detersivo: frammenta i grassi in goccioline minuscole, così gli enzimi riescono ad attaccarli. Anche senza la cistifellea si può vivere.</p>",
      links: [
        { to: "fegato", text: "Conserva la bile prodotta dal fegato." },
        { to: "intestino_tenue", text: "Versa la bile nel duodeno quando serve a digerire i grassi." },
        { to: "pancreas", text: "Il suo canale si unisce a quello del pancreas prima di sboccare nel duodeno." }
      ],
      problems: [
        { title: "Calcoli biliari", causes: "bile troppo ricca di colesterolo, alimentazione grassa, sovrappeso (più negli adulti).", effects: "piccoli \"sassolini\" possono bloccare il canale e dare dolore dopo i pasti.", prevent: "alimentazione varia con fibre, movimento, evitare diete drastiche; con un dolore forte alla pancia avvisa subito un adulto." }
      ],
      fact: "La bile è verde-gialla e dà il caratteristico colore marrone alle feci."
    },
    pancreas: {
      name: "Il pancreas", label: "Pancreas",
      what: "<p>Il pancreas fa due lavori: produce succhi per digerire il cibo e produce un ormone, l'insulina, che gestisce lo zucchero nel sangue.</p>",
      how: "<p>È una ghiandola lunga circa 15 cm dietro lo stomaco. Come ghiandola <b>esocrina</b> produce il succo pancreatico, ricco di enzimi che digeriscono zuccheri, proteine e grassi e di bicarbonato che neutralizza l'acido dello stomaco; lo manda al duodeno. Come ghiandola <b>endocrina</b>, le \"isole di Langerhans\" producono due ormoni opposti: l'<b>insulina</b> (abbassa la glicemia facendo entrare lo zucchero nelle cellule) e il <b>glucagone</b> (la alza liberando lo zucchero immagazzinato nel fegato).</p>",
      links: [
        { to: "intestino_tenue", text: "Versa nel duodeno gli enzimi che digeriscono il cibo." },
        { to: "fegato", text: "Insulina e glucagone dicono al fegato quando immagazzinare o liberare zucchero." },
        { to: "stomaco", text: "Sta dietro lo stomaco, e neutralizza l'acido che arriva da lì." },
        { to: "muscoli", text: "Grazie all'insulina i muscoli prendono dal sangue lo zucchero di cui hanno bisogno per lavorare." }
      ],
      problems: [
        { title: "Diabete", causes: "il corpo produce poca insulina o non la usa bene; esistono forme diverse, alcune legate anche a sovrappeso e sedentarietà.", effects: "lo zucchero resta alto nel sangue, con sete, stanchezza e, nel tempo, danni ad altri organi come occhi e reni.", prevent: "alimentazione equilibrata, poche bibite zuccherate, movimento; chi ha il diabete si cura con il medico." }
      ],
      fact: "Le isole di Langerhans sono solo l'1-2% del pancreas, ma senza insulina le cellule non potrebbero usare lo zucchero."
    },
    intestino_tenue: {
      name: "L'intestino tenue", label: "Int. tenue",
      what: "<p>È il lungo tubo avvolto nella pancia dove il cibo viene finito di digerire e i nutrienti passano nel sangue.</p>",
      how: "<p>È lungo circa 6-7 metri e diviso in duodeno, digiuno e ileo. Qui arrivano succo pancreatico, bile e succhi intestinali che scompongono carboidrati in zuccheri semplici, proteine in amminoacidi e grassi in acidi grassi. La parete è piena di pieghe e minuscole sporgenze, i <b>villi</b>, che aumentano la superficie di assorbimento fino a circa 30 m² (più di un grande salotto). Gli zuccheri e gli amminoacidi passano nei capillari, che li portano al fegato con la vena porta; i grassi passano nei vasi linfatici.</p>",
      links: [
        { to: "stomaco", text: "Riceve dallo stomaco il chimo, a piccole dosi." },
        { to: "pancreas", text: "Il pancreas gli manda gli enzimi per completare la digestione." },
        { to: "cistifellea", text: "La bile della cistifellea aiuta a digerire i grassi." },
        { to: "intestino_crasso", text: "Ciò che non si assorbe passa all'intestino crasso." },
        { to: "vene", text: "I nutrienti assorbiti entrano nel sangue e arrivano al fegato." }
      ],
      problems: [
        { title: "Intolleranze e allergie alimentari", causes: "il corpo non digerisce bene una sostanza (come il lattosio) o il sistema immunitario reagisce a un alimento.", effects: "gonfiore, mal di pancia, diarrea, a volte altri sintomi.", prevent: "se un cibo ti fa spesso stare male parlane con un adulto e col medico, che indicherà cosa fare." },
        { title: "Gastroenterite", causes: "virus o batteri presi da mani sporche o cibi non conservati bene.", effects: "diarrea, vomito, mal di pancia e perdita di acqua.", prevent: "lavare le mani prima di mangiare, lavare frutta e verdura, conservare bene i cibi, bere acqua." }
      ],
      fact: "Grazie a pieghe e villi, la superficie dell'intestino tenue è molto più grande di quanto il tubo faccia pensare."
    },
    intestino_crasso: {
      name: "L'intestino crasso", label: "Int. crasso",
      what: "<p>È l'ultimo tratto della digestione: recupera l'acqua dal cibo che non serve più e prepara i rifiuti da eliminare.</p>",
      how: "<p>È lungo circa 1,5 metri e più largo del tenue. Comprende l'<b>intestino cieco</b> (con l'appendice), il <b>colon</b> e il <b>retto</b>. Qui viene riassorbita acqua e sali, quindi i resti diventano più solidi, le <b>feci</b>. Vi vivono miliardi di batteri utili, il <b>microbiota</b>, che digeriscono la fibra, producono alcune vitamine (come la K) e proteggono da batteri dannosi. Le feci restano nel retto fino a quando vengono eliminate. Il passaggio nell'intero apparato digerente dura da 1 a 3 giorni circa.</p>",
      links: [
        { to: "intestino_tenue", text: "Riceve dal tenue i residui non digeribili e ancora molto acquosi." },
        { to: "reni", text: "Insieme ai reni aiuta il corpo a mantenere il giusto equilibrio di acqua." },
        { to: "vene", text: "L'acqua e alcune vitamine recuperate passano nel sangue." }
      ],
      problems: [
        { title: "Stitichezza", causes: "poca fibra, poca acqua, poco movimento, trattenersi dall'andare in bagno.", effects: "le feci diventano dure e fare la cacca costa fatica e fa male.", prevent: "frutta, verdura, cereali integrali, bere acqua, muoversi, andare in bagno quando serve." }
      ],
      fact: "Nell'intestino vivono più batteri che cellule in tutto il resto del corpo."
    },
    reni: {
      name: "I reni", label: "Reni",
      what: "<p>I reni sono due organi a forma di fagiolo che puliscono il sangue e producono l'urina.</p>",
      how: "<p>Ogni rene è grande come un pugno e contiene circa un milione di filtri chiamati <b>nefroni</b>. Ogni giorno circa 180 litri di sangue-plasma sono filtrati, ma quasi tutto torna nel sangue: i reni riassorbono acqua e sostanze utili e lasciano uscire soltanto circa 1,5 litri di <b>urina</b>, con scorie come l'urea e il sale in eccesso. Così regolano la quantità di acqua, il sale e la pressione. Producono anche un ormone, l'<b>eritropoietina</b>, che stimola il midollo osseo a fare globuli rossi.</p>",
      links: [
        { to: "vescica", text: "L'urina scende dai reni alla vescica attraverso i due ureteri." },
        { to: "arterie", text: "Le arterie renali portano il sangue da filtrare, le vene lo riportano pulito." },
        { to: "surrenali", text: "Sopra ogni rene c'è una ghiandola surrenale." },
        { to: "cuore", text: "I reni controllano il volume del sangue e quindi aiutano il cuore a regolare la pressione." }
      ],
      problems: [
        { title: "Infezioni urinarie e calcoli", causes: "poca acqua, scarsa igiene, a volte sali che si accumulano.", effects: "bruciore quando si fa pipì, o dolore ai fianchi; i reni funzionano peggio.", prevent: "bere acqua durante la giornata, poco sale, andare in bagno senza trattenersi; se bruciacchia, dillo a un adulto." }
      ],
      fact: "I reni filtrano tutto il sangue del corpo molte volte in un giorno."
    },
    vescica: {
      name: "La vescica", label: "Vescica",
      what: "<p>La vescica è un sacchetto elastico dove si raccoglie l'urina, finché non vai in bagno.</p>",
      how: "<p>È un organo muscolare cavo. L'urina arriva dai reni attraverso gli ureteri e si accumula: la vescica di un adulto può contenere circa mezzo litro. Quando è piena, i recettori nella parete mandano un segnale al cervello e senti lo stimolo. Due sfinteri la chiudono: uno automatico e uno che controlliamo noi. Quando decidi di andare in bagno, il muscolo della parete si contrae, lo sfintere si rilassa e l'urina esce dall'<b>uretra</b>. I bambini imparano a controllare la vescica durante i primi anni di vita.</p>",
      links: [
        { to: "reni", text: "Riceve l'urina prodotta dai reni." },
        { to: "bacino", text: "Sta al sicuro dentro la conca del bacino." },
        { to: "nervi", text: "I nervi avvisano il cervello quando è piena e coordinano lo svuotamento." }
      ],
      problems: [
        { title: "Cistite", causes: "batteri che risalgono dall'uretra, poca acqua, trattenersi troppo.", effects: "bruciore e voglia frequente di fare pipì.", prevent: "bere acqua, non trattenere troppo la pipì, igiene personale; se hai bruciore, avvisa un adulto o il medico." }
      ],
      fact: "La vescica si allunga come un palloncino e si fa sentire quando è piena per circa un terzo."
    },
    tiroide: {
      name: "La tiroide", label: "Tiroide",
      what: "<p>La tiroide è una piccola ghiandola a farfalla nel collo. Produce ormoni che regolano quanto in fretta lavora il corpo.</p>",
      how: "<p>Pesa 15-25 g e produce gli ormoni <b>tiroxina (T4)</b> e <b>triiodotironina (T3)</b>, che controllano il metabolismo: la velocità con cui le cellule usano energia. Influenzano crescita, temperatura, battito del cuore e sviluppo del cervello nei bambini. Per fabbricarli serve lo <b>iodio</b>, che si trova in pesce e sale iodato. La produzione è comandata dall'ipofisi con l'ormone TSH, in un circuito di controllo a retroazione che mantiene i livelli stabili.</p>",
      links: [
        { to: "cervello", text: "Ipotalamo e ipofisi nel cervello controllano quanta tiroxina produrre." },
        { to: "cuore", text: "Gli ormoni tiroidei influenzano la frequenza del battito." },
        { to: "ossa_gambe", text: "Servono per una crescita regolare delle ossa nei ragazzi." }
      ],
      problems: [
        { title: "Tiroide troppo lenta o troppo veloce", causes: "carenza di iodio o disturbi delle difese immunitarie.", effects: "se lavora poco senti sonno e freddo, se lavora troppo sei agitato e perdi peso.", prevent: "usare sale iodato con moderazione, mangiare pesce; ci sono esami del sangue per controllarla: parlane con il medico." }
      ],
      fact: "Il suo nome viene dal greco \"scudo\", per la forma della cartilagine vicina."
    },
    surrenali: {
      name: "Le ghiandole surrenali", label: "Surrenali",
      what: "<p>Sono due piccole ghiandole sopra i reni. Producono ormoni che ci aiutano a reagire a uno spavento o a un impegno importante.</p>",
      how: "<p>Ogni surrenale ha due parti. La <b>midollare</b> produce <b>adrenalina</b> e <b>noradrenalina</b> nei momenti di stress: il cuore batte più forte, il respiro accelera, i muscoli ricevono più sangue, risposta detta \"combatti o fuggi\". La <b>corticale</b> produce il <b>cortisolo</b> (che aiuta a gestire stress e zuccheri) e l'<b>aldosterone</b>, che regola sale e acqua insieme ai reni. Sono controllate dall'ipofisi e dal sistema nervoso.</p>",
      links: [
        { to: "reni", text: "Stanno appoggiate sulla parte alta dei reni; l'aldosterone indica ai reni quanto sale trattenere." },
        { to: "cuore", text: "L'adrenalina fa battere il cuore più forte e più veloce." },
        { to: "cervello", text: "Il cervello, davanti a un pericolo o a un'emozione forte, le fa entrare in azione." },
        { to: "muscoli", text: "Preparano i muscoli all'azione mandando loro più zucchero e sangue." }
      ],
      problems: [
        { title: "Stress prolungato", causes: "preoccupazioni continue, poco sonno, troppi impegni.", effects: "cortisolo alto per troppo tempo: stanchezza, difficoltà a dormire, pancia che fa male.", prevent: "dormire bene, giocare e muoversi all'aperto, parlare delle preoccupazioni con un adulto di cui ti fidi." }
      ],
      fact: "L'adrenalina agisce in pochi secondi: ecco perché il cuore batte forte appena ti spaventi."
    },
    milza: {
      name: "La milza", label: "Milza",
      what: "<p>La milza è un organo morbido a sinistra della pancia. Filtra il sangue e aiuta il corpo a difendersi dai microbi.</p>",
      how: "<p>Grande circa come un pugno, ha due tessuti: la <b>polpa rossa</b>, che filtra il sangue ed elimina i globuli rossi vecchi o danneggiati (dopo circa 120 giorni) e ne tiene una riserva; la <b>polpa bianca</b>, ricca di linfociti, che riconoscono i microbi nel sangue e producono anticorpi. Il ferro dei globuli rossi viene recuperato e riutilizzato. Si può vivere anche senza milza, ma si è un po' più esposti a certe infezioni, ed è utile fare le vaccinazioni.</p>",
      links: [
        { to: "stomaco", text: "Sta accanto allo stomaco, sotto le costole di sinistra." },
        { to: "arterie", text: "Riceve il sangue da un'arteria apposita e lo filtra." },
        { to: "linfonodi", text: "Insieme ai linfonodi fa parte del sistema linfatico di difesa." },
        { to: "costole", text: "Le costole la proteggono dagli urti." }
      ],
      problems: [
        { title: "Colpi al fianco sinistro", causes: "urti forti negli sport di contatto o cadute.", effects: "la milza può farsi male e dare dolore al fianco sinistro.", prevent: "usare le protezioni e fare attenzione nei giochi; se hai dolore forte dopo un colpo, avvisa subito un adulto." }
      ],
      fact: "È l'organo del sistema linfatico più grande."
    },
    timo: {
      name: "Il timo", label: "Timo",
      what: "<p>Il timo è una piccola ghiandola dietro lo sterno. È la \"scuola\" dove alcune cellule di difesa imparano a riconoscere i microbi.</p>",
      how: "<p>È più grande nei bambini e diventa più piccolo con la crescita e poi con l'età adulta. Qui maturano i <b>linfociti T</b> (la T è per timo), che nascono nel midollo osseo. Nel timo imparano a distinguere le cellule del proprio corpo da quelle estranee: quelle che sbagliano vengono eliminate, per evitare che il sistema immunitario attacchi il corpo stesso. I linfociti T poi passano nel sangue, nei linfonodi e nella milza dove coordinano la difesa.</p>",
      links: [
        { to: "linfonodi", text: "I linfociti T usciti dal timo si dirigono verso i linfonodi." },
        { to: "milza", text: "Anche la milza ospita linfociti T e B che hanno completato la formazione." },
        { to: "cuore", text: "Sta davanti al cuore, dietro lo sterno." }
      ],
      problems: [
        { title: "Difese immature o deboli", causes: "il sistema immunitario si sviluppa durante l'infanzia ed è influenzato da sonno, cibo e vaccini.", effects: "se le difese funzionano meno ci si ammala più facilmente.", prevent: "vaccinazioni, buon sonno, alimentazione varia, lavarsi le mani; se ti ammali spesso, parlane con il medico." }
      ],
      fact: "Il timo è più attivo durante l'infanzia e l'adolescenza, poi si rimpicciolisce."
    },
    linfonodi: {
      name: "I linfonodi", label: "Linfonodi",
      what: "<p>I linfonodi sono piccole ghiandole a forma di fagiolino sparse nel corpo (collo, ascelle, inguine). Sono i posti di blocco che fermano i microbi.</p>",
      how: "<p>Sono collegati tra loro dai vasi linfatici, che raccolgono la <b>linfa</b>, un liquido chiaro che scorre dai tessuti. La linfa attraversa i linfonodi, dove si trovano molti <b>linfociti</b> e macrofagi che filtrano e distruggono batteri, virus e cellule danneggiate. Quando c'è un'infezione i linfociti si moltiplicano, e il linfonodo si ingrossa e può fare un po' male: è un segno che sta lavorando. Alla fine la linfa torna nel sangue vicino al cuore. Nel corpo ce ne sono circa 600.</p>",
      links: [
        { to: "milza", text: "La milza e i linfonodi fanno insieme parte del sistema linfatico." },
        { to: "timo", text: "Ricevono i linfociti T formati nel timo." },
        { to: "vene", text: "La linfa raccolta torna in circolo versandosi nelle grandi vene vicino al cuore." },
        { to: "intestino_tenue", text: "I grassi assorbiti nell'intestino viaggiano nei vasi linfatici." }
      ],
      problems: [
        { title: "Ghiandole ingrossate", causes: "mal di gola, raffreddore o altre infezioni.", effects: "senti sotto il mento dei \"pallini\" dolenti che di solito si sgonfiano da soli.", prevent: "riposo, bere, lavarsi le mani; se restano gonfi per molto tempo, parlane con un adulto o col medico." }
      ],
      fact: "I linfonodi del collo spesso si gonfiano quando hai mal di gola: significa che il tuo corpo si sta difendendo."
    }
  },
  tour: [
    { icon: "🧍", title: "Il corpo intero", html: "<p>Questo è il corpo con la <b>pelle</b>, che lo protegge da fuori. Sotto ci sono muscoli, ossa e organi. Usa il cursore \"Esplodi\" per separare i pezzi e vederli meglio.</p>", focus: ["pelle"], explode: 0, view: { rx: 0.1, ry: -0.4 } },
    { icon: "🦴", title: "Scheletro e muscoli", html: "<p>Le <b>ossa</b> sono l'impalcatura che sostiene tutto e protegge cuore, polmoni e cervello. I <b>muscoli</b> tirano le ossa e ti fanno muovere.</p>", focus: ["cranio", "colonna", "costole", "bacino", "ossa_braccia", "ossa_gambe", "muscoli"], explode: 0.4 },
    { icon: "🧠", title: "Il comando", html: "<p>Il <b>cervello</b> dà gli ordini, il <b>cervelletto</b> coordina i movimenti, il <b>midollo spinale</b> e i <b>nervi</b> portano i messaggi in tutto il corpo.</p>", focus: ["cervello", "cervelletto", "midollo", "nervi"], explode: 0.3, view: { rx: 0.05, ry: 0.4 }, zoom: 1.2 },
    { icon: "👀", title: "I sensi", html: "<p>Occhi, orecchie, naso e lingua catturano luce, suoni, odori e sapori e li mandano al cervello come segnali.</p>", focus: ["occhi", "orecchie", "naso", "lingua"], explode: 0.3, zoom: 1.4 },
    { icon: "🫀", title: "Cuore e sangue", html: "<p>Il <b>cuore</b> è una pompa che spinge il sangue nelle <b>arterie</b>; le <b>vene</b> lo riportano indietro. Il sangue consegna ossigeno e nutrienti a ogni cellula.</p>", focus: ["cuore", "arterie", "vene"], explode: 0.2 },
    { icon: "🫁", title: "Respirare", html: "<p>L'aria entra dal naso, scende per la <b>trachea</b> e arriva ai <b>polmoni</b>, dove l'ossigeno entra nel sangue. Il <b>diaframma</b> muove l'aria come un mantice.</p>", focus: ["naso", "trachea", "polmoni", "diaframma"], explode: 0.4, view: { rx: 0.1, ry: -0.2 } },
    { icon: "🍽️", title: "Digerire", html: "<p>Il cibo scende per l'<b>esofago</b> nello <b>stomaco</b>, poi nell'<b>intestino tenue</b>, dove <b>fegato</b>, <b>cistifellea</b> e <b>pancreas</b> aiutano a digerire. Nel <b>crasso</b> si recupera l'acqua.</p>", focus: ["esofago", "stomaco", "fegato", "cistifellea", "pancreas", "intestino_tenue", "intestino_crasso"], explode: 0.5 },
    { icon: "🚽", title: "Filtrare e pulire", html: "<p>I <b>reni</b> filtrano il sangue e producono l'urina, che scende nella <b>vescica</b>.</p>", focus: ["reni", "vescica"], explode: 0.5 },
    { icon: "⚗️", title: "Gli ormoni", html: "<p><b>Tiroide</b>, <b>surrenali</b> e <b>pancreas</b> mandano nel sangue ormoni, messaggeri chimici che regolano crescita, energia e reazioni allo stress.</p>", focus: ["tiroide", "surrenali", "pancreas"], explode: 0.5 },
    { icon: "🛡️", title: "Le difese", html: "<p><b>Milza</b>, <b>timo</b> e <b>linfonodi</b> sono la base dei globuli bianchi, che riconoscono ed eliminano virus e batteri.</p>", focus: ["milza", "timo", "linfonodi"], explode: 0.5 }
  ],
  quiz: [
    { type: "mc", q: "Quale organo fa passare l'ossigeno dall'aria al sangue?", options: ["Lo stomaco", "I polmoni", "I reni"], answer: 1, explain: "Negli alveoli dei polmoni l'ossigeno passa nel sangue e l'anidride carbonica passa nell'aria." },
    { type: "tf", q: "Le arterie portano sempre sangue ricco di ossigeno, tranne quelle che vanno ai polmoni.", answer: true, explain: "Le arterie portano il sangue lontano dal cuore; l'arteria polmonare porta sangue povero di ossigeno ai polmoni." },
    { type: "mc", q: "Dove si conserva la bile?", options: ["Nella cistifellea", "Nello stomaco", "Nella vescica"], answer: 0, explain: "Il fegato produce la bile e la cistifellea la conserva fino a quando serve per digerire i grassi." },
    { type: "order", q: "Metti in ordine il percorso del cibo.", items: ["Bocca", "Esofago", "Stomaco", "Intestino tenue", "Intestino crasso"], explain: "Il cibo percorre un lungo tubo: viene masticato, scende nell'esofago, nello stomaco, poi si assorbe nel tenue e il crasso recupera l'acqua." },
    { type: "tf", q: "L'insulina, prodotta dal pancreas, aiuta lo zucchero a entrare nelle cellule.", answer: true, explain: "L'insulina abbassa la quantità di zucchero nel sangue facendolo entrare nelle cellule." },
    { type: "mc", q: "Quale parte del sistema nervoso protegge e collega il cervello al corpo, dentro la colonna vertebrale?", options: ["Il cervelletto", "Il midollo spinale", "Il timo"], answer: 1, explain: "Il midollo spinale, protetto dalle vertebre, porta i segnali tra il cervello e i nervi del corpo." },
    { type: "num", q: "Più o meno, quanti litri di sangue ha un adulto?", answer: 5, tol: 1, unit: "litri", explain: "Un adulto ha circa 5 litri di sangue, il 7-8% del peso." },
    { type: "mc", q: "Quale organo produce l'urina filtrando il sangue?", options: ["I reni", "La vescica", "Il fegato"], answer: 0, explain: "I reni filtrano il sangue e producono l'urina; la vescica la raccoglie solo." },
    { type: "tf", q: "Il diaframma si contrae quando inspiri.", answer: true, explain: "Contraendosi si abbassa, il torace si allarga e l'aria entra nei polmoni." },
    { type: "order", q: "Metti in ordine il percorso di un ordine di movimento.", items: ["Cervello", "Midollo spinale", "Nervi", "Muscoli"], explain: "Il cervello decide, il midollo e i nervi portano il segnale e il muscolo si contrae." },
    { type: "mc", q: "Dove maturano i linfociti T?", options: ["Nel timo", "Nella milza", "Nello stomaco"], answer: 0, explain: "Nel timo i linfociti T imparano a riconoscere ciò che è estraneo al corpo, e per questo si chiamano \"T\"." },
    { type: "num", q: "Quanti metri è lungo circa l'intestino tenue di un adulto?", answer: 6, tol: 1, unit: "m", explain: "Il tenue misura circa 6-7 metri: ripiegato nella pancia assorbe i nutrienti." },
    { type: "mc", q: "Quale legame è corretto?", options: ["Cuore e polmoni: il sangue prende ossigeno", "Esofago e reni: portano l'urina", "Tiroide e vescica: producono la bile"], answer: 0, explain: "Il cuore manda ai polmoni sangue povero di ossigeno, che torna ossigenato." },
    { type: "tf", q: "Il cervelletto serve soprattutto a digerire il cibo.", answer: false, explain: "Il cervelletto coordina i movimenti e l'equilibrio." }
  ]
});
