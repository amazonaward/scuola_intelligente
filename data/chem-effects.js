/* Laboratorio – "Scegli l'effetto": combinazioni che producono un effetto, con il livello di sicurezza.
   safe: 'home'  = si può fare a casa CON UN ADULTO
         'lab'   = solo in laboratorio a scuola, con l'insegnante
         'danger'= pericoloso o mortale: NON va mai fatto. Qui si spiega solo cosa NON mescolare e perché (niente dosi, niente procedure).
   I testi sono oggetti { it, en, ... }: le lingue mancanti ricadono sull'italiano. */
window.CHEM_EFFECTS = {
  rules: {
    it: ['Mai mescolare detersivi o prodotti per la casa tra loro.', 'Mai assaggiare, annusare da vicino o toccare sostanze sconosciute.', 'Sempre un adulto presente, finestra aperta, occhiali e guanti.', 'Leggi le etichette: i simboli rossi a rombo indicano pericolo.', 'In caso di incidente: esci dalla stanza, apri le finestre e chiama il 112 o il Centro Antiveleni.'],
    en: ['Never mix cleaning or household products together.', 'Never taste, sniff up close or touch unknown substances.', 'Always have an adult present, a window open, goggles and gloves.', 'Read the labels: red diamond symbols mean danger.', 'If there is an accident: leave the room, open the windows and call the emergency number (112 in Europe) or a Poison Control Centre.']
  },
  effects: [
    {
      id: 'schiuma', icon: '🫧', name: { it: 'Schiuma', en: 'Foam' },
      items: [
        { safe: 'home', name: { it: 'Vulcano schiumoso', en: 'Foaming volcano' },
          mix: { it: 'Bicarbonato + aceto + una goccia di sapone per piatti', en: 'Baking soda + vinegar + a drop of washing-up liquid' },
          what: { it: "L'acido dell'aceto reagisce con il bicarbonato e libera anidride carbonica; il sapone intrappola il gas in tante bollicine: ecco la schiuma.", en: 'The acid in vinegar reacts with baking soda and releases carbon dioxide; the soap traps the gas in lots of tiny bubbles: that is the foam.' },
          eq: 'NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂', lab: true },
        { safe: 'home', name: { it: 'Dentifricio dell’elefante (versione per bambini)', en: 'Elephant toothpaste (kids’ version)' },
          mix: { it: 'Acqua ossigenata da farmacia (3%) + lievito di birra sciolto in acqua tiepida + sapone per piatti', en: 'Pharmacy hydrogen peroxide (3%) + yeast dissolved in warm water + washing-up liquid' },
          what: { it: "Il lievito contiene un enzima (catalasi) che spezza l'acqua ossigenata in acqua e ossigeno: l'ossigeno gonfia il sapone in una colonna di schiuma tiepida.", en: 'Yeast contains an enzyme (catalase) that splits hydrogen peroxide into water and oxygen: the oxygen inflates the soap into a column of warm foam.' },
          eq: '2 H₂O₂ → 2 H₂O + O₂', note: { it: 'Con un adulto, occhiali e guanti: anche al 3% irrita gli occhi.', en: 'With an adult, goggles and gloves: even at 3% it irritates the eyes.' } },
        { safe: 'lab', name: { it: 'Dentifricio dell’elefante gigante', en: 'Giant elephant toothpaste' },
          mix: { it: 'Acqua ossigenata concentrata + ioduro di potassio + sapone', en: 'Concentrated hydrogen peroxide + potassium iodide + soap' },
          what: { it: 'Lo ioduro accelera moltissimo la reazione: esce una colonna enorme di schiuma, e diventa molto calda.', en: 'The iodide speeds the reaction up enormously: a huge column of foam shoots out, and it gets very hot.' },
          note: { it: "L'acqua ossigenata concentrata ustiona la pelle e gli occhi e la schiuma può scottare. Solo l'insegnante, con protezioni.", en: 'Concentrated hydrogen peroxide burns skin and eyes and the foam can scald. Only the teacher, with protection.' } },
        { safe: 'danger', name: { it: 'Prodotti per sturare gli scarichi mescolati', en: 'Mixing drain cleaners' },
          mix: { it: 'Due prodotti diversi per lo scarico, o uno sturalavandini con altri detersivi', en: 'Two different drain cleaners, or a drain cleaner with other cleaning products' },
          what: { it: 'Possono reagire violentemente: schiuma bollente e corrosiva che schizza, a volte gas tossici. Causa ustioni gravi alla pelle e agli occhi.', en: 'They can react violently: boiling, corrosive foam that splashes out, sometimes toxic gases. It causes serious burns to skin and eyes.' } }
      ]
    },
    {
      id: 'bolle', icon: '💨', name: { it: 'Bolle e gas', en: 'Bubbles and gas' },
      items: [
        { safe: 'home', name: { it: 'Limone frizzante', en: 'Fizzy lemon' },
          mix: { it: 'Succo di limone + un cucchiaino di bicarbonato', en: 'Lemon juice + a teaspoon of baking soda' },
          what: { it: "L'acido citrico del limone reagisce con il bicarbonato: si formano bollicine di anidride carbonica (lo stesso gas delle bibite).", en: 'The citric acid in lemon reacts with baking soda: bubbles of carbon dioxide form (the same gas as in fizzy drinks).' } },
        { safe: 'home', name: { it: 'Palloncino che si gonfia da solo', en: 'Self-inflating balloon' },
          mix: { it: 'Aceto in una bottiglia + bicarbonato dentro un palloncino infilato sul collo', en: 'Vinegar in a bottle + baking soda inside a balloon stretched over the neck' },
          what: { it: "Quando il bicarbonato cade nell'aceto, il gas prodotto non ha dove andare e gonfia il palloncino.", en: 'When the baking soda drops into the vinegar, the gas produced has nowhere to go and inflates the balloon.' } },
        { safe: 'home', name: { it: 'Geyser di cola e caramelle alla menta', en: 'Cola and mint geyser' },
          mix: { it: 'Bottiglia di cola + caramelle alla menta (all’aperto!)', en: 'Bottle of cola + mint sweets (outdoors!)' },
          what: { it: 'Non è una reazione chimica: la superficie ruvida delle caramelle fa uscire di colpo il gas già sciolto nella bibita. Stai lontano dal getto.', en: 'It is not a chemical reaction: the rough surface of the sweets makes the gas already dissolved in the drink escape all at once. Stand clear of the jet.' } },
        { safe: 'lab', name: { it: 'Metallo + acido → idrogeno', en: 'Metal + acid → hydrogen' },
          mix: { it: 'Zinco o magnesio + acido cloridrico', en: 'Zinc or magnesium + hydrochloric acid' },
          what: { it: "Il metallo si consuma tra tante bolle di idrogeno, un gas che con una fiammella fa «pop». Provalo qui nel laboratorio virtuale!", en: 'The metal dissolves among lots of hydrogen bubbles, a gas that goes “pop” with a small flame. Try it here in the virtual lab!' },
          eq: 'Zn + 2 HCl → ZnCl₂ + H₂', lab: true, note: { it: "L'acido cloridrico è corrosivo e l'idrogeno è infiammabile.", en: 'Hydrochloric acid is corrosive and hydrogen is flammable.' } },
        { safe: 'danger', name: { it: 'Candeggina + acidi (anticalcare, aceto, acido muriatico)', en: 'Bleach + acids (descaler, vinegar, hydrochloric acid)' },
          mix: { it: 'Candeggina insieme a un prodotto acido', en: 'Bleach together with an acidic product' },
          what: { it: 'Si libera CLORO, un gas verdastro che brucia occhi, gola e polmoni. Anche in una stanza piccola può essere MORTALE. È uno degli incidenti domestici più frequenti.', en: 'CHLORINE is released, a greenish gas that burns the eyes, throat and lungs. Even in a small room it can be DEADLY. It is one of the most common accidents at home.' } },
        { safe: 'danger', name: { it: 'Candeggina + ammoniaca', en: 'Bleach + ammonia' },
          mix: { it: 'Candeggina insieme a prodotti con ammoniaca (alcuni sgrassatori e pulitori per vetri)', en: 'Bleach together with products containing ammonia (some degreasers and glass cleaners)' },
          what: { it: 'Si formano le CLORAMMINE, gas tossici che danneggiano i polmoni. Possono essere MORTALI. Per questo non si mescolano mai i detersivi.', en: 'CHLORAMINES form, toxic gases that damage the lungs. They can be DEADLY. This is why cleaning products are never mixed.' } }
      ]
    },
    {
      id: 'polveri', icon: '🧂', name: { it: 'Polveri e solidi (precipitati)', en: 'Powders and solids (precipitates)' },
      items: [
        { safe: 'home', name: { it: 'Formaggio dal latte', en: 'Cheese from milk' },
          mix: { it: 'Latte tiepido + aceto o succo di limone', en: 'Warm milk + vinegar or lemon juice' },
          what: { it: "L'acido fa separare la caseina, una proteina del latte: si formano fiocchi bianchi solidi. Filtrandoli si ottiene una specie di ricotta (o una plastica naturale se la fai seccare).", en: 'The acid makes casein, a milk protein, separate: solid white curds form. Strained, they give a kind of ricotta (or a natural plastic if left to dry).' } },
        { safe: 'home', name: { it: 'Cristalli di sale', en: 'Salt crystals' },
          mix: { it: 'Acqua calda con tanto sale sciolto, lasciata evaporare qualche giorno', en: 'Hot water with lots of dissolved salt, left to evaporate for a few days' },
          what: { it: "Non è una reazione: quando l'acqua evapora, il sale torna solido e forma cubetti perfetti.", en: 'Not a reaction: as the water evaporates, the salt becomes solid again and forms perfect little cubes.' } },
        { safe: 'lab', name: { it: 'Precipitato bianco come il latte', en: 'Milk-white precipitate' },
          mix: { it: 'Nitrato d’argento + sale da cucina sciolto in acqua', en: 'Silver nitrate + table salt dissolved in water' },
          what: { it: "Si forma subito cloruro d'argento, un solido bianco che non si scioglie. Provalo nel laboratorio virtuale!", en: 'Silver chloride forms at once, a white solid that does not dissolve. Try it in the virtual lab!' },
          eq: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃', lab: true, note: { it: 'Il nitrato d’argento è corrosivo e macchia la pelle di nero.', en: 'Silver nitrate is corrosive and stains the skin black.' } },
        { safe: 'lab', name: { it: 'Pioggia d’oro', en: 'Golden rain' },
          mix: { it: 'Ioduro di potassio + nitrato di piombo, in acqua calda che poi si raffredda', en: 'Potassium iodide + lead nitrate, in hot water that then cools' },
          what: { it: 'Raffreddandosi, lo ioduro di piombo forma scaglie dorate e luccicanti che scendono come pioggia.', en: 'As it cools, lead iodide forms shiny golden flakes that fall like rain.' },
          note: { it: 'I composti del piombo sono tossici: si fa solo con l’insegnante e i rifiuti vanno smaltiti correttamente.', en: 'Lead compounds are toxic: only with the teacher, and the waste must be disposed of properly.' } }
      ]
    },
    {
      id: 'fumo', icon: '🌫️', name: { it: 'Fumo e nebbia', en: 'Smoke and fog' },
      items: [
        { safe: 'home', name: { it: 'Nuvola nel barattolo', en: 'Cloud in a jar' },
          mix: { it: 'Acqua calda in un barattolo + ghiaccio appoggiato sul coperchio', en: 'Hot water in a jar + ice placed on the lid' },
          what: { it: 'Il vapore sale, incontra il coperchio freddo e si condensa in goccioline minuscole: una piccola nuvola. È fisica, non chimica.', en: 'The vapour rises, meets the cold lid and condenses into tiny droplets: a small cloud. It is physics, not chemistry.' } },
        { safe: 'lab', name: { it: 'Nebbia del ghiaccio secco', en: 'Dry-ice fog' },
          mix: { it: 'Ghiaccio secco (anidride carbonica solida) in acqua calda', en: 'Dry ice (solid carbon dioxide) in hot water' },
          what: { it: 'Il ghiaccio secco a −78 °C diventa gas di colpo e raffredda l’aria umida: si forma una nebbia bianca che scorre sul pavimento.', en: 'Dry ice at −78 °C turns straight into gas and chills the moist air: a white fog forms and flows along the floor.' },
          note: { it: 'Ustioni da freddo se lo tocchi; in una stanza chiusa la CO₂ toglie l’ossigeno. Mai chiuderlo in un contenitore: scoppia.', en: 'Cold burns if you touch it; in a closed room the CO₂ pushes out the oxygen. Never seal it in a container: it bursts.' } },
        { safe: 'lab', name: { it: 'Fumo bianco dal nulla', en: 'White smoke from nowhere' },
          mix: { it: 'Vapori di acido cloridrico che incontrano vapori di ammoniaca', en: 'Hydrochloric acid vapour meeting ammonia vapour' },
          what: { it: 'I due gas invisibili si incontrano e formano cloruro di ammonio, un fumo bianco di granellini solidi.', en: 'The two invisible gases meet and form ammonium chloride, a white smoke of tiny solid grains.' },
          eq: 'HCl + NH₃ → NH₄Cl', note: { it: 'Entrambi i vapori sono irritanti: si fa sotto cappa.', en: 'Both vapours are irritating: it is done under a fume hood.' } },
        { safe: 'danger', name: { it: 'Bruciare plastica, gomma o rifiuti', en: 'Burning plastic, rubber or rubbish' },
          mix: { it: 'Plastica o gomma sul fuoco', en: 'Plastic or rubber on a fire' },
          what: { it: 'Il fumo nero contiene sostanze tossiche (come diossine e monossido di carbonio). Respirarlo fa male ed è anche vietato bruciare i rifiuti.', en: 'The black smoke contains toxic substances (such as dioxins and carbon monoxide). Breathing it is harmful, and burning rubbish is also illegal.' } },
        { safe: 'danger', name: { it: 'Detersivi mescolati', en: 'Mixed cleaning products' },
          mix: { it: 'Candeggina con altri prodotti (acidi, ammoniaca, alcol)', en: 'Bleach with other products (acids, ammonia, alcohol)' },
          what: { it: 'Spesso i gas che si formano sono INVISIBILI ma velenosi e possono essere MORTALI. Se senti odore pungente: esci, apri le finestre, chiama il 112.', en: 'The gases formed are often INVISIBLE but poisonous and can be DEADLY. If you smell something sharp: get out, open the windows, call the emergency number.' } }
      ]
    },
    {
      id: 'colori', icon: '🌈', name: { it: 'Cambio di colore', en: 'Colour change' },
      items: [
        { safe: 'home', name: { it: 'Cavolo rosso magico', en: 'Magic red cabbage' },
          mix: { it: 'Acqua di cottura del cavolo rosso + aceto (diventa rosa) oppure + bicarbonato (diventa blu-verde)', en: 'Red cabbage cooking water + vinegar (turns pink) or + baking soda (turns blue-green)' },
          what: { it: 'Il cavolo contiene antocianine, pigmenti che cambiano colore con l’acidità: è un indicatore di pH naturale.', en: 'Cabbage contains anthocyanins, pigments that change colour with acidity: it is a natural pH indicator.' } },
        { safe: 'home', name: { it: 'Curcuma che diventa rossa', en: 'Turmeric that turns red' },
          mix: { it: 'Un pizzico di curcuma in acqua + bicarbonato', en: 'A pinch of turmeric in water + baking soda' },
          what: { it: 'La curcuma è gialla in ambiente acido o neutro e diventa rosso-arancio in ambiente basico.', en: 'Turmeric is yellow in acidic or neutral conditions and turns red-orange in basic ones.' } },
        { safe: 'home', name: { it: 'Mela che diventa marrone', en: 'Apple that turns brown' },
          mix: { it: 'Mela tagliata lasciata all’aria (e una fetta con succo di limone per confronto)', en: 'A cut apple left in the air (and a slice with lemon juice to compare)' },
          what: { it: 'Un enzima della mela reagisce con l’ossigeno e scurisce la polpa; il limone rallenta la reazione.', en: 'An enzyme in the apple reacts with oxygen and darkens the flesh; lemon slows the reaction down.' } },
        { safe: 'lab', name: { it: 'Chiodo che si ricopre di rame', en: 'Nail coated with copper' },
          mix: { it: 'Chiodo di ferro + solfato di rame sciolto in acqua', en: 'Iron nail + copper sulphate dissolved in water' },
          what: { it: 'La soluzione blu diventa verdina e sul chiodo si deposita rame rossiccio. Provalo nel laboratorio virtuale!', en: 'The blue solution turns pale green and reddish copper coats the nail. Try it in the virtual lab!' },
          eq: 'Fe + CuSO₄ → FeSO₄ + Cu', lab: true, note: { it: 'Il solfato di rame è nocivo se ingerito e irrita la pelle.', en: 'Copper sulphate is harmful if swallowed and irritates the skin.' } },
        { safe: 'lab', name: { it: 'Amido che diventa blu-nero', en: 'Starch that turns blue-black' },
          mix: { it: 'Amido (patata, pane) + qualche goccia di soluzione di iodio', en: 'Starch (potato, bread) + a few drops of iodine solution' },
          what: { it: 'Lo iodio si infila nelle catene dell’amido e il colore passa da marrone a blu-nero: così si scopre se un cibo contiene amido.', en: 'Iodine slips into the starch chains and the colour changes from brown to blue-black: this shows whether a food contains starch.' },
          note: { it: 'Lo iodio macchia e non va ingerito.', en: 'Iodine stains and must not be swallowed.' } }
      ]
    },
    {
      id: 'calore', icon: '🔥', name: { it: 'Calore', en: 'Heat' },
      items: [
        { safe: 'home', name: { it: 'Scaldamani usa e getta', en: 'Disposable hand warmer' },
          mix: { it: 'Busta scaldamani aperta all’aria (non tagliarla!)', en: 'A hand-warmer pouch opened to the air (do not cut it!)' },
          what: { it: 'Dentro c’è polvere di ferro che arrugginisce velocissima: l’ossidazione libera calore per ore.', en: 'Inside there is iron powder that rusts very fast: the oxidation releases heat for hours.' } },
        { safe: 'lab', name: { it: 'Acido + base: neutralizzazione', en: 'Acid + base: neutralisation' },
          mix: { it: 'Acido cloridrico + idrossido di sodio', en: 'Hydrochloric acid + sodium hydroxide' },
          what: { it: 'Si formano sale e acqua e la soluzione si scalda. Provalo nel laboratorio virtuale!', en: 'Salt and water form and the solution warms up. Try it in the virtual lab!' },
          eq: 'HCl + NaOH → NaCl + H₂O', lab: true, note: { it: 'Entrambi sono corrosivi.', en: 'Both are corrosive.' } },
        { safe: 'danger', name: { it: 'Soda caustica o calce viva con acqua', en: 'Caustic soda or quicklime with water' },
          mix: { it: 'Prodotti per sturare (soda caustica) o calce viva a contatto con acqua', en: 'Drain cleaner (caustic soda) or quicklime in contact with water' },
          what: { it: 'Si scaldano così tanto che l’acqua può bollire e schizzare: ustioni chimiche e termiche gravissime, anche agli occhi.', en: 'They get so hot that the water can boil and spit: very serious chemical and heat burns, including to the eyes.' } }
      ]
    },
    {
      id: 'freddo', icon: '❄️', name: { it: 'Freddo', en: 'Cold' },
      items: [
        { safe: 'home', name: { it: 'Ghiaccio che diventa più freddo', en: 'Ice that gets colder' },
          mix: { it: 'Ghiaccio tritato + sale grosso (attorno a un sacchetto di latte e zucchero: gelato!)', en: 'Crushed ice + coarse salt (around a bag of milk and sugar: ice cream!)' },
          what: { it: 'Il sale fa sciogliere il ghiaccio e per sciogliersi il ghiaccio prende calore: la miscela scende fino a −10 °C o meno. Usa i guanti.', en: 'Salt makes the ice melt, and to melt the ice takes in heat: the mixture drops to −10 °C or lower. Wear gloves.' } },
        { safe: 'home', name: { it: 'Bicarbonato e aceto si raffreddano', en: 'Baking soda and vinegar cool down' },
          mix: { it: 'Bicarbonato + aceto (tocca il bicchiere!)', en: 'Baking soda + vinegar (touch the glass!)' },
          what: { it: 'Questa reazione assorbe un po’ di calore: è endotermica, il bicchiere diventa più fresco.', en: 'This reaction takes in a little heat: it is endothermic, and the glass feels cooler.' }, lab: true },
        { safe: 'lab', name: { it: 'Ghiaccio istantaneo', en: 'Instant ice pack' },
          mix: { it: 'Nitrato d’ammonio sciolto in acqua (è dentro le buste di ghiaccio istantaneo)', en: 'Ammonium nitrate dissolved in water (it is inside instant ice packs)' },
          what: { it: 'Sciogliendosi assorbe molto calore e l’acqua diventa gelida in pochi secondi.', en: 'As it dissolves it absorbs lots of heat and the water becomes ice-cold in seconds.' },
          note: { it: 'Le buste non vanno aperte: la sostanza è irritante.', en: 'The packs must not be opened: the substance is an irritant.' } }
      ]
    },
    {
      id: 'luce', icon: '✨', name: { it: 'Luce', en: 'Light' },
      items: [
        { safe: 'home', name: { it: 'Braccialetti luminosi', en: 'Glow sticks' },
          mix: { it: 'Piegando il bastoncino si rompe una fialetta interna e due liquidi si mescolano', en: 'Bending the stick breaks an inner vial and two liquids mix' },
          what: { it: 'È chemiluminescenza: la reazione produce luce fredda invece di calore. Al caldo brillano di più ma durano meno. Non vanno mai tagliati.', en: 'It is chemiluminescence: the reaction makes cold light instead of heat. In the warm they glow brighter but for less time. Never cut them open.' } },
        { safe: 'lab', name: { it: 'Luminol', en: 'Luminol' },
          mix: { it: 'Luminol + acqua ossigenata + un catalizzatore', en: 'Luminol + hydrogen peroxide + a catalyst' },
          what: { it: 'Una luce azzurra nel buio. La polizia scientifica la usa per trovare tracce di sangue.', en: 'A blue glow in the dark. Forensic police use it to find traces of blood.' },
          note: { it: 'Sostanze irritanti: solo con l’insegnante.', en: 'Irritating substances: only with the teacher.' } },
        { safe: 'lab', name: { it: 'Magnesio che brucia', en: 'Burning magnesium' },
          mix: { it: 'Nastro di magnesio + ossigeno dell’aria + fiamma', en: 'Magnesium ribbon + oxygen in the air + a flame' },
          what: { it: 'Brucia con una luce bianca accecante e lascia una polvere bianca. Provalo nel laboratorio virtuale!', en: 'It burns with a blinding white light and leaves a white powder. Try it in the virtual lab!' },
          eq: '2 Mg + O₂ → 2 MgO', lab: true, note: { it: 'La luce può danneggiare gli occhi: non si guarda direttamente.', en: 'The light can damage the eyes: do not look at it directly.' } }
      ]
    }
  ]
};
