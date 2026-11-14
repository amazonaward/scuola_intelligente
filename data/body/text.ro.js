BODY_TEXT({
  lang: "ro",
  title: "Corpul uman",
  intro: "<p>Corpul tău este o echipă de <b>organe</b> care lucrează împreună, zi și noapte. Rotește modelul, depărtează piesele, atinge un organ și află la ce folosește, cum funcționează și cu cine colaborează.</p>",
  systems: {
    pelle: { name: "Pielea", intro: "<p>Pielea este cel mai mare organ al corpului: te învelește ca o haină făcută pe măsură. Te apără de lovituri, microbi și soare, reglează temperatura prin transpirație și te face să simți căldura, frigul, presiunea și durerea datorită a milioane de mici senzori.</p>" },
    scheletro: { name: "Scheletul", intro: "<p>Scheletul este eșafodajul corpului: aproximativ 206 oase la adult, legate prin articulații, ligamente și tendoane. Susține corpul, protejează organele delicate, permite mișcările împreună cu mușchii și produce celulele sângelui în măduva osoasă.</p>" },
    muscoli: { name: "Mușchii", intro: "<p>În corp sunt peste 600 de mușchi. Funcționează scurtându-se (contractându-se) și apoi relaxându-se și trag de oase prin tendoane. Pe unii îi comandăm noi, alții, ca cei ai stomacului, lucrează singuri. Produc și căldură.</p>" },
    nervoso: { name: "Sistemul nervos", intro: "<p>Este rețeaua de comandă și de comunicare a corpului. Creierul și măduva spinării alcătuiesc sistemul central; nervii sunt „cablurile” care duc informațiile de la corp la creier și ordinele de la creier la mușchi și organe. Semnalele călătoresc sub formă de mici impulsuri electrice.</p>" },
    sensi: { name: "Simțurile", intro: "<p>Vederea, auzul, mirosul și gustul (și pipăitul, prin piele) sunt ferestrele corpului spre lume. Fiecare organ de simț transformă lumina, sunetele, mirosurile sau gusturile în semnale nervoase, pe care creierul le interpretează.</p>" },
    circolatorio: { name: "Aparatul circulator", intro: "<p>Inima este pompa care împinge sângele printr-o rețea de tuburi, vasele de sânge. Arterele duc sângele departe de inimă, venele îl aduc înapoi. Sângele livrează oxigen și substanțe hrănitoare fiecărei celule și duce deșeurile, de aceea nu se oprește niciodată.</p>" },
    respiratorio: { name: "Aparatul respirator", intro: "<p>Servește la intrarea oxigenului și la ieșirea dioxidului de carbon. Aerul trece prin nas, trahee și bronhii până la plămâni, unde oxigenul intră în sânge. Diafragma, un mușchi aflat sub plămâni, pune aerul în mișcare ca niște foale.</p>" },
    digerente: { name: "Aparatul digestiv", intro: "<p>Transformă mâncarea în substanțe suficient de mici ca să treacă în sânge. Hrana parcurge un tub lung de aproximativ 8-9 metri: gura, esofagul, stomacul, intestinul subțire și intestinul gros. Ficatul, vezica biliară și pancreasul ajută cu sucuri speciale.</p>" },
    urinario: { name: "Aparatul urinar", intro: "<p>Este sistemul de filtrare al corpului. Rinichii curăță sângele, elimină deșeurile și apa în exces și le transformă în urină, care coboară în vezica urinară până când vine momentul să mergi la baie.</p>" },
    endocrino: { name: "Sistemul endocrin", intro: "<p>Glandele endocrine produc hormonii, mesageri chimici care călătoresc prin sânge și le spun organelor ce au de făcut: să crească, să folosească zaharurile, să reacționeze la o sperietură. Acționează mai încet decât nervii, dar efectele lor durează mai mult.</p>" },
    immunitario: { name: "Sistemul imunitar", intro: "<p>Este armata de apărare a corpului. Globulele albe și alte celule recunosc virusurile, bacteriile și alți intruși și îi elimină. Splina, timusul și ganglionii limfatici sunt bazele unde aceste celule se formează, se antrenează și stau de pază.</p>" }
  },
  organs: {
    pelle: {
      name: "Pielea", label: "Piele",
      what: "<p>Pielea acoperă tot corpul ca o salopetă. Te apără de lovituri, murdărie și microbi, te răcorește când transpiri și te face să simți căldura, frigul și mângâierile.</p>",
      how: "<p>Este formată din trei straturi: <b>epiderma</b> (subțire și impermeabilă, se reînnoiește mereu), <b>dermul</b> (cu vase, nervi, glande sudoripare și rădăcinile firelor de păr) și <b>hipodermul</b> (grăsime care izolează și amortizează). La adult are aproximativ 1,8 m² și cântărește 3-4 kg. Celulele epidermei se reînnoiesc în aproximativ 4 săptămâni. Pigmentul <b>melanină</b> filtrează razele UV ale soarelui. Ca să răcească corpul, vasele se dilată și transpirația se evaporă; când e frig, vasele se îngustează.</p>",
      links: [
        { to: "nervi", text: "Terminațiile nervoase din piele trimit creierului, prin nervi, semnalele de atingere, temperatură și durere." },
        { to: "vene", text: "Sângele care curge în vasele apropiate de suprafață împrăștie căldura în exces și ajută la reglarea temperaturii." },
        { to: "muscoli", text: "Sub piele, mușchii produc căldură; când ți-e frig, micii mușchi ai firelor de păr îți fac pielea de găină." }
      ],
      problems: [
        { title: "Arsură solară", causes: "prea mult soare fără protecție, mai ales în orele de la mijlocul zilei.", effects: "pielea se înroșește, arde și apoi se cojește; razele UV pot deteriora celulele pe termen lung.", prevent: "cremă de protecție solară, pălărie, tricou, umbră în orele fierbinți, apă de băut." },
        { title: "Eczemă și piele uscată", causes: "piele sensibilă, săpun agresiv, aer uscat, uneori alergii.", effects: "mâncărime, înroșiri și piele crăpată, care protejează mai puțin bine.", prevent: "spălare cu produse blânde, hidratarea pielii; dacă mâncărimea persistă, vorbește cu un adult sau cu medicul." }
      ],
      fact: "Într-o zi pierdem milioane de celule ale pielii: o bună parte din praful din casă este făcută și din ele!"
    },
    cranio: {
      name: "Craniul", label: "Craniu",
      what: "<p>Craniul este cutia de os care protejează creierul. Dă formă și feței și găzduiește ochii, urechile și nasul.</p>",
      how: "<p>Este format din 22 de oase: 8 alcătuiesc cutia craniană și 14 fața. Aproape toate sunt unite prin îmbinări rigide numite <b>suturi</b>; singurul cu articulație mobilă este <b>mandibula</b>, care permite mestecatul și vorbitul. La nou-născuți oasele nu sunt încă sudate („fontanelele”), așa că capul poate trece la naștere, iar creierul are loc să crească. O gaură mare la bază, <b>gaura occipitală</b>, lasă să treacă măduva spinării.</p>",
      links: [
        { to: "cervello", text: "Cuprinde și protejează creierul ca o cască naturală." },
        { to: "colonna", text: "Se sprijină pe coloana vertebrală, care îl susține și îl face să se miște." },
        { to: "occhi", text: "Orbitele sunt două cavități ale craniului în care ochii stau în siguranță." },
        { to: "midollo", text: "Prin gaura de la baza craniului, creierul se leagă de măduva spinării." }
      ],
      problems: [
        { title: "Lovituri la cap", causes: "căderi sau ciocniri cu bicicleta, la sport, în jocuri.", effects: "creierul poate primi un șoc, cu dureri de cap sau amețeli.", prevent: "cască pe bicicletă, trotinetă și la schi; dacă te lovești la cap, spune imediat unui adult și lasă-te examinat." }
      ],
      fact: "Oasele craniului adultului sunt îmbinate ca un puzzle."
    },
    colonna: {
      name: "Coloana vertebrală", label: "Coloană",
      what: "<p>Este axul corpului: te ține în picioare, îți permite să te apleci și să te răsucești și protejează măduva spinării care trece prin interiorul ei.</p>",
      how: "<p>Este alcătuită din 33-34 de <b>vertebre</b> așezate una peste alta: 7 cervicale, 12 toracice, 5 lombare, apoi sacrul și coccisul (vertebre sudate). Între vertebre se află <b>discurile intervertebrale</b>, pernițe elastice care amortizează. Privită din lateral, are patru curburi în formă de „S” care o fac flexibilă și capabilă să absoarbă loviturile. Mușchii spatelui o țin dreaptă. În canalul din interior trece măduva spinării.</p>",
      links: [
        { to: "midollo", text: "Vertebrele formează un canal care protejează măduva spinării." },
        { to: "costole", text: "Vertebrele toracice se leagă de coaste și formează astfel cutia toracică." },
        { to: "bacino", text: "În partea de jos se sprijină pe bazin, care susține greutatea corpului." },
        { to: "muscoli", text: "Mușchii spatelui o țin dreaptă și o fac să se miște." }
      ],
      problems: [
        { title: "Dureri de spate și postură greșită", causes: "statul prea mult pe scaun sau cocârjat, ghiozdane grele purtate pe un umăr, puțină mișcare.", effects: "mușchi încordați și dureri de spate; în timp se poate pierde postura corectă.", prevent: "ghiozdan purtat pe ambii umeri și nu prea încărcat, pauze după lecții, sport și jocuri active; dacă durerea ține, vorbește cu un adult sau cu medicul." }
      ],
      fact: "Dimineața ești puțin mai înalt decât seara: în timpul nopții discurile dintre vertebre se „umflă”."
    },
    costole: {
      name: "Coastele", label: "Coaste",
      what: "<p>Coastele formează o cușcă ce protejează inima și plămânii. Se mișcă puțin când respiri.</p>",
      how: "<p>Sunt 12 perechi de oase curbe, prinse în spate de vertebrele toracice. Primele 7 perechi se leagă în față de <b>stern</b> prin cartilaj; celelalte 5 sunt legate indirect sau sunt libere. Această structură, <b>cutia toracică</b>, este destul de rigidă ca să protejeze și destul de flexibilă ca să se extindă: la inspirație, mușchii intercostali ridică coastele și toracele se lărgește, lăsând aerul să între. Conțin și măduvă roșie care produce celule ale sângelui.</p>",
      links: [
        { to: "polmoni", text: "Fac cușcă în jurul plămânilor și se mișcă la fiecare respirație." },
        { to: "cuore", text: "Protejează inima de lovituri." },
        { to: "colonna", text: "În spate se prind de vertebrele toracice." },
        { to: "diaframma", text: "Împreună cu diafragma schimbă volumul toracelui și lasă aerul să intre și să iasă." }
      ],
      problems: [
        { title: "Coaste contuzionate sau fisurate", causes: "căderi sau lovituri puternice în piept.", effects: "durere, mai ales când respiri adânc sau râzi.", prevent: "echipament de protecție la sporturile de contact și prudență în jocuri; dacă te doare pieptul după o lovitură, spune unui adult." }
      ],
      fact: "Coastele se repară singure: sunt printre oasele care se vindecă cel mai bine."
    },
    bacino: {
      name: "Bazinul", label: "Bazin",
      what: "<p>Bazinul este osul în formă de pâlnie de deasupra picioarelor. Susține greutatea corpului și protejează organele din partea de jos a burții.</p>",
      how: "<p>Bazinul este format din cele două <b>oase ale șoldului</b> (fiecare rezultat din unirea iliului, ischionului și pubisului), unite în față între ele și în spate cu <b>sacrul</b>. Transmite greutatea trunchiului către picioare prin articulațiile șoldului, unde capul femurului se rotește într-o cavitate numită acetabul. Protejează vezica urinară și intestinul. Este un os robust, care crește până la sfârșitul adolescenței.</p>",
      links: [
        { to: "colonna", text: "Sacrul de la capătul coloanei este sudat de bazin." },
        { to: "ossa_gambe", text: "Femurul se îmbină în osul șoldului, formând articulația care te face să mergi." },
        { to: "vescica", text: "Face o scobitură protectoare pentru vezica urinară și o parte din intestin." }
      ],
      problems: [
        { title: "Contuzii la șold", causes: "căderi pe o parte, de exemplu pe patine sau pe zăpadă.", effects: "durere și o vânătaie, uneori dificultăți la mers câteva zile.", prevent: "echipament de protecție când patinezi sau schiezi, încălțăminte potrivită; dacă nu poți călca pe picior, spune unui adult." }
      ],
      fact: "Bazinul este centrul de greutate al corpului, locul unde se echilibrează greutatea ta."
    },
    ossa_braccia: {
      name: "Oasele brațelor", label: "Oase brațe",
      what: "<p>Umărul, brațul, antebrațul și mâna sunt susținute de oase care îți permit să apuci, să arunci și să scrii.</p>",
      how: "<p>Fiecare braț are: <b>humerus</b> (brațul), <b>radius</b> și <b>ulna</b> (antebrațul), 8 oase ale carpului, 5 ale metacarpului și 14 falange, în total 30 de oase pe membru, plus omoplatul și clavicula. Umărul este cea mai mobilă articulație a corpului, dar și printre cele mai predispuse la luxații. Radiusul și ulna se pot încrucișa și permit rotirea palmei. Degetul mare „opozabil” permite să apuci cu precizie.</p>",
      links: [
        { to: "muscoli", text: "Mușchii trag de oase prin tendoane: bicepsul îndoaie cotul, iar tricepsul îl întinde." },
        { to: "nervi", text: "Nervii brațului dau comenzi și aduc senzațiile de la degete." },
        { to: "costole", text: "Clavicula și omoplatul leagă brațul de torace." }
      ],
      problems: [
        { title: "Fracturi", causes: "căderi cu mâinile întinse în față, jocuri și sport.", effects: "durere, umflătură și dificultate în a mișca brațul; cu un ghips osul se vindecă în câteva săptămâni.", prevent: "echipament de protecție la sport, calciu și vitamina D în alimentație, joacă în aer liber; dacă cazi și te doare tare, spune imediat unui adult." }
      ],
      fact: "În mâini și în încheieturi se află mai mult de un sfert din toate oasele corpului."
    },
    ossa_gambe: {
      name: "Oasele picioarelor", label: "Oase picioare",
      what: "<p>Oasele picioarelor sunt lungi și rezistente: susțin corpul, te fac să mergi, să alergi și să sari.</p>",
      how: "<p>Fiecare picior are <b>femurul</b> (cel mai lung și mai puternic os al corpului, aproximativ un sfert din înălțime), <b>rotula</b>, <b>tibia</b> și <b>peroneul</b>, apoi 7 oase ale tarsului, 5 ale metatarsului și 14 falange ale piciorului. Genunchiul este o articulație mare întărită de ligamente. Talpa are o boltă care funcționează ca un arc și absoarbe loviturile. Oasele lungi cresc din <b>cartilajele de creștere</b>, care se închid la sfârșitul adolescenței.</p>",
      links: [
        { to: "bacino", text: "Femurul se rotește în cavitatea osului șoldului." },
        { to: "muscoli", text: "Cvadricepsul și gambele trag de oasele picioarelor și permit mersul și alergatul." },
        { to: "cervelletto", text: "Cerebelul coordonează mișcările și echilibrul când mergi și sari." }
      ],
      problems: [
        { title: "Entorse și fracturi", causes: "sărituri, alunecări, încălțăminte nepotrivită.", effects: "durere și umflătură la gleznă sau la genunchi, dificultate la mers.", prevent: "încălzire înainte de sport, încălțăminte potrivită și antrenament treptat; dacă te doare când calci pe picior, vorbește cu un adult sau cu medicul." }
      ],
      fact: "Femurul poate suporta o greutate de multe ori mai mare decât a ta și, la aceeași greutate, este mai rezistent decât betonul."
    },
    muscoli: {
      name: "Mușchii", label: "Mușchi",
      what: "<p>Mușchii te fac să te miști: să alergi, să sari, să zâmbești, să respiri. Sunt făcuți din fibre care se scurtează și apoi se relaxează.</p>",
      how: "<p>În corp sunt peste 600 de mușchi. <b>Mușchii scheletici</b> sunt voluntari și se prind de oase prin <b>tendoane</b>; <b>mușchii netezi</b> (stomac, intestin, vase) lucrează singuri; <b>mușchiul cardiac</b> se află doar în inimă. Un mușchi poate doar să tragă, de aceea lucrează în perechi: de exemplu biceps și triceps (agonist și antagonist). Ca să se contracte folosește energie obținută din zaharuri și oxigen; o parte devine căldură, care te încălzește când te miști. Antrenamentul face fibrele mai puternice.</p>",
      links: [
        { to: "nervi", text: "Nervii trimit mușchilor ordinul de a se contracta." },
        { to: "ossa_braccia", text: "Prin tendoane trag de oase și mișcă astfel articulații ca cotul." },
        { to: "cuore", text: "Inima este un mușchi special care lucrează fără să se oprească." },
        { to: "vene", text: "Când mușchii se contractă, strâng venele și ajută sângele să se întoarcă la inimă." }
      ],
      problems: [
        { title: "Crampe și întinderi", causes: "efort fără încălzire, puțină apă, oboseală.", effects: "mușchiul se contractă dureros sau se accidentează; e nevoie de odihnă.", prevent: "încălzire și întinderi, apă de băut, creșterea efortului puțin câte puțin." }
      ],
      fact: "Cel mai puternic mușchi în raport cu dimensiunile sale este maseterul, care mișcă mandibula."
    },
    diaframma: {
      name: "Diafragma", label: "Diafragmă",
      what: "<p>Este un mușchi în formă de cupolă, sub plămâni. Se mișcă în sus și în jos și astfel lasă aerul să intre și să iasă când respiri.</p>",
      how: "<p>Diafragma separă toracele de abdomen. Când inspiri, se <b>contractă</b> și coboară, toracele se lărgește și presiunea din plămâni scade: aerul intră. Când expiri, se <b>relaxează</b> și urcă la loc, iar aerul iese. Lucrează automat, de aproximativ 12-20 de ori pe minut în repaus, dar o putem controla (ca să cântăm sau să ne ținem respirația). Sughițul este o contracție bruscă și involuntară a diafragmei, întreruptă de închiderea glotei.</p>",
      links: [
        { to: "polmoni", text: "Când coboară, plămânii se umplu cu aer, când urcă, îl împing afară." },
        { to: "costole", text: "Lucrează împreună cu mușchii dintre coaste ca să lărgească toracele." },
        { to: "stomaco", text: "Sub ea, în abdomen, se află stomacul și ficatul; se mișcă peste ele la fiecare respirație." },
        { to: "nervi", text: "Nervul frenic îi trimite ordinele de contractare." }
      ],
      problems: [
        { title: "Sughiț", causes: "mâncat prea repede, băuturi acidulate, râsete.", effects: "diafragma se contractă în sacade și face tipicul „hic”; de obicei trece de la sine.", prevent: "mănâncă încet și mestecă bine; dacă nu trece ore în șir, vorbește cu un adult." }
      ],
      fact: "Diafragma lucrează toată viața fără să se odihnească niciodată, chiar și când dormi."
    },
    cervello: {
      name: "Creierul", label: "Creier",
      what: "<p>Este centrul de comandă al corpului. Gândește, își amintește, învață, simte emoțiile și dirijează tot ce faci, chiar și când dormi.</p>",
      how: "<p>Cântărește aproximativ 1,3-1,4 kg și conține aproximativ 86 de miliarde de celule nervoase, <b>neuronii</b>, legați prin trilioane de conexiuni (sinapse). Cea mai mare parte, <b>scoarța cerebrală</b>, este împărțită în două emisfere și în lobi: prelucrează vederea, auzul, mișcarea, limbajul și gândirea. În interior sunt zone care reglează emoțiile, memoria, somnul, foamea și setea. Folosește aproximativ 20% din energia corpului, deși cântărește 2%. Neuronii comunică prin semnale electrice și substanțe chimice, neurotransmițătorii.</p>",
      links: [
        { to: "midollo", text: "Trimite și primește semnalele corpului prin măduva spinării." },
        { to: "cervelletto", text: "Cerebelul, aflat sub el, face mișcările precise și coordonate." },
        { to: "occhi", text: "Lobul din spate transformă semnalele ochilor în imaginile pe care le vezi." },
        { to: "cranio", text: "Craniul îl protejează ca o cască." },
        { to: "tiroide", text: "Împreună cu hipofiza, o glandă mică de la bază, controlează multe glande endocrine." }
      ],
      problems: [
        { title: "Durere de cap", causes: "oboseală, puțină apă, tensiune, prea mult timp la ecrane.", effects: "durere de cap și dificultăți de concentrare.", prevent: "somn suficient, apă de băut, pauze de la ecrane; dacă durerile de cap sunt dese, vorbește cu un adult sau cu medicul." },
        { title: "Somn puțin", causes: "culcatul târziu, ecrane seara.", effects: "mai puțină atenție și memorie, mai multă irascibilitate; creierul nu reușește să „facă ordine”.", prevent: "program regulat, fără ecrane înainte de culcare, cameră întunecată și liniștită." }
      ],
      fact: "Creierul este alcătuit în proporție de aproximativ 75% din apă și nu are receptori ai durerii: durerile de cap apar în jurul lui."
    },
    cervelletto: {
      name: "Cerebelul", label: "Cerebel",
      what: "<p>Este partea creierului care te ajută să-ți păstrezi echilibrul și să faci mișcări precise, cum ar fi mersul pe bicicletă sau prinderea unei mingi.</p>",
      how: "<p>Se află în partea din spate și de jos a capului. Cântărește aproximativ o zecime din creier, dar conține mai mult de jumătate din neuronii lui. Primește informații de la mușchi, articulații, urechea internă (echilibru) și ochi, le compară cu mișcările pe care creierul le-a ordonat și corectează greșelile în timp real. De aceea, cu exercițiul, gesturile devin tot mai fluide și mai automate: învățarea mersului pe bicicletă „antrenează” cerebelul.</p>",
      links: [
        { to: "cervello", text: "Primește de la creier ordinele de mișcare și le perfecționează." },
        { to: "orecchie", text: "Urechea internă îi spune cât de înclinat e capul, util pentru echilibru." },
        { to: "muscoli", text: "Coordonează mușchii ca să lucreze împreună cu precizie." },
        { to: "midollo", text: "Schimbă informații cu corpul prin măduva spinării." }
      ],
      problems: [
        { title: "Amețeli și pierderea echilibrului", causes: "învârtitul pe loc, oboseală, uneori boli ale urechii interne.", effects: "ți se pare că totul se învârte și îți e greu să stai în picioare.", prevent: "așază-te până trece; dacă se întâmplă des, vorbește cu un adult sau cu medicul." }
      ],
      fact: "După ce te-ai învârtit de multe ori pe loc, amețeala apare pentru că lichidul din ureche continuă să se miște."
    },
    midollo: {
      name: "Măduva spinării", label: "Măduvă",
      what: "<p>Este un cordon lung de nervi aflat în coloana vertebrală. Duce mesajele între creier și restul corpului, ca o autostradă.</p>",
      how: "<p>Lungă de aproximativ 45 cm, coboară din creier prin canalul vertebrelor. Din ea ies 31 de perechi de <b>nervi spinali</b>. Duce semnale <b>senzitive</b> (de la corp la creier) și <b>motorii</b> (de la creier la mușchi). Poate gestiona singură și <b>reflexele</b>: când atingi ceva foarte fierbinte, semnalul ajunge la măduvă, care ordonă imediat mușchiului să se retragă, înainte ca creierul să „simtă” durerea. Este protejată de vertebre, membrane și lichid.</p>",
      links: [
        { to: "cervello", text: "Este legătura dintre creier și tot corpul." },
        { to: "nervi", text: "Din măduvă ies nervii spinali care ajung la brațe, picioare și organe." },
        { to: "muscoli", text: "Ordinele de mișcare călătoresc de la creier la măduvă și apoi la mușchi." },
        { to: "colonna", text: "Coloana vertebrală o înconjoară și o protejează." }
      ],
      problems: [
        { title: "Lovituri la spate", causes: "căderi puternice sau accidente.", effects: "pot deteriora măduva și pot face să se piardă sensibilitatea sau mișcarea; de aceea este bine protejată.", prevent: "centuri de siguranță, cască, prudență la sărituri în apă mică și la sporturile periculoase." }
      ],
      fact: "Reflexul rotulian (zvâcnitul piciorului când medicul lovește genunchiul) este gestionat de măduvă, fără să treacă prin creier."
    },
    nervi: {
      name: "Nervii", label: "Nervi",
      what: "<p>Nervii sunt „cabluri” subțiri care duc mesaje în tot corpul: spun creierului ce simți și duc mușchilor ordinul de a se mișca.</p>",
      how: "<p>Fiecare nerv este un mănunchi de fibre nervoase (prelungiri ale neuronilor, <b>axonii</b>). Multe sunt învelite în <b>mielină</b>, un strat gras care face semnalele să călătorească cu peste 100 m/s. Există nervi <b>senzitivi</b>, <b>motori</b> și micști. Sistemul nervos periferic cuprinde și sistemul <b>autonom</b>, care reglează fără ca tu să te gândești bătăile inimii, digestia și respirația. Un semnal trece de la un neuron la altul prin sinapse, cu ajutorul unor substanțe chimice.</p>",
      links: [
        { to: "midollo", text: "Nervii spinali pleacă din măduvă și se ramifică în corp." },
        { to: "muscoli", text: "Nervii motori ordonă mușchilor să se contracte." },
        { to: "pelle", text: "Nervii senzitivi duc creierului atingerea, căldura, frigul și durerea de la piele." },
        { to: "cuore", text: "Sistemul autonom reglează automat ritmul inimii." }
      ],
      problems: [
        { title: "Furnicături din cauza unei poziții greșite", causes: "statul mult timp într-o poziție, picioare încrucișate sau cotul sprijinit.", effects: "un nerv este strivit și simți furnicături sau picioare „adormite”.", prevent: "schimbă des poziția și mișcă-te; de obicei trece în câteva minute." }
      ],
      fact: "Nervul sciatic, din picior, este cel mai lung nerv al corpului."
    },
    occhi: {
      name: "Ochii", label: "Ochi",
      what: "<p>Cu ochii vezi forme, culori și mișcări. Captează lumina și o transformă în semnale pentru creier.</p>",
      how: "<p>Lumina intră prin <b>cornee</b>, trece prin pupilă (care se mărește sau se micșorează în funcție de lumină, reglată de iris) și prin <b>cristalin</b>, o lentilă care focalizează imaginea pe <b>retină</b>. Aici <b>conurile</b> (aproximativ 6 milioane, pentru culori) și <b>bastonașele</b> (aproximativ 120 de milioane, pentru lumină slabă) transformă lumina în semnale electrice. <b>Nervul optic</b> le duce la creier, care îndreaptă imaginea (pe retină este răsturnată) și o interpretează. Pleoapele și lacrimile țin ochiul curat.</p>",
      links: [
        { to: "cervello", text: "Nervul optic duce semnalele la creier, care le transformă în imagini." },
        { to: "cranio", text: "Orbitele craniului protejează ochii." },
        { to: "muscoli", text: "Șase mușchi mici pentru fiecare ochi îi mișcă în toate direcțiile." },
        { to: "naso", text: "Lacrimile coboară prin canale mici de la colțurile ochilor până în nas: de aceea, când plângi, îți curge nasul." }
      ],
      problems: [
        { title: "Miopie și vedere obosită", causes: "prea mult timp aproape de ecrane și cărți, puțin timp în aer liber, uneori și ereditatea.", effects: "obiectele îndepărtate par neclare, ochii obosesc și te dor.", prevent: "pauze de la ecrane (privește departe la fiecare 20 de minute), lumină bună, joacă în aer liber; dacă vezi neclar, vorbește cu un adult pentru un control." }
      ],
      fact: "Clipim de aproximativ 15-20 de ori pe minut ca să umezim ochiul."
    },
    orecchie: {
      name: "Urechile", label: "Urechi",
      what: "<p>Urechile te fac să auzi sunetele. Dar nu doar atât: în ureche se află și secretul echilibrului tău.</p>",
      how: "<p>Pavilionul adună sunetele și le duce prin canal până la <b>timpan</b>, o membrană care vibrează. Vibrația trece la trei oscioare (ciocan, nicovală și scăriță) din urechea medie, care o amplifică. În urechea internă, <b>melcul</b>, un tubuleț în spirală plin cu lichid, transformă vibrațiile în semnale nervoase trimise creierului. Alături se află <b>canalele semicirculare</b>, care simt mișcările capului și ajută la echilibru. Trompa lui Eustachio leagă urechea de gât și echilibrează presiunea.</p>",
      links: [
        { to: "cervello", text: "Nervul auditiv duce sunetele la creier, care le recunoaște." },
        { to: "cervelletto", text: "Informațiile canalelor semicirculare ajută cerebelul să mențină echilibrul." },
        { to: "naso", text: "Trompa lui Eustachio leagă urechea medie de nas și de gât; de aceea o răceală poate da dureri de urechi." }
      ],
      problems: [
        { title: "Otită", causes: "o răceală care ajunge până la urechea medie.", effects: "durere de urechi și auz înfundat câteva zile.", prevent: "suflă-ți nasul cu blândețe, spală-ți mâinile; dacă simți durere în ureche, anunță un adult." },
        { title: "Zgomot prea puternic", causes: "muzică dată tare, mai ales cu căștile.", effects: "celulele urechii interne se pot deteriora și auzul slăbește.", prevent: "volum moderat, pauze de la căști, protejarea urechilor în locuri foarte zgomotoase." }
      ],
      fact: "Cele trei oscioare ale urechii sunt cele mai mici oase ale corpului: scărița are aproximativ 3 mm."
    },
    naso: {
      name: "Nasul", label: "Nas",
      what: "<p>Nasul lasă aerul să intre, îl încălzește și îl curăță și te face să simți mirosurile.</p>",
      how: "<p>Aerul trece prin <b>cavitățile nazale</b>, căptușite cu mucus și peri care rețin praful și microbii, și este încălzit și umezit înainte de a ajunge la plămâni. Sus, un mic țesut cu milioane de celule ale <b>mirosului</b> recunoaște moleculele mirosurilor și trimite semnale creierului. Gustul și mirosul lucrează împreună: cu nasul înfundat, gusturile par mult mai slabe. Nasul comunică cu urechile și cu ochii prin canale mici.</p>",
      links: [
        { to: "trachea", text: "Aerul curat și cald coboară din nas în trahee." },
        { to: "lingua", text: "Mirosul și gustul lucrează împreună: o mare parte din gustul mâncării este, de fapt, miros." },
        { to: "cervello", text: "Nervul olfactiv duce mirosurile la creier, legate și de emoții și amintiri." },
        { to: "occhi", text: "Lacrimile trec de la ochi la nas prin canalele lacrimale." }
      ],
      problems: [
        { title: "Răceală", causes: "viruși care se răspândesc prin strănuturi și mâini nespălate.", effects: "nas înfundat sau care curge, miros și gust slăbite câteva zile.", prevent: "spală-ți des mâinile, folosește șervețele de unică folosință, strănută în cot, dormi și mănâncă bine." },
        { title: "Alergie la polen", causes: "sistemul imunitar reacționează la polen.", effects: "strănuturi, mâncărime în nas și ochi înroșiți primăvara.", prevent: "dacă se întâmplă în fiecare an, vorbește cu un adult și cu medicul." }
      ],
      fact: "Putem recunoaște mii de mirosuri diferite, iar mirosul este simțul cel mai legat de amintiri."
    },
    lingua: {
      name: "Limba", label: "Limbă",
      what: "<p>Limba simte gusturile, amestecă mâncarea în timp ce mesteci și te ajută să vorbești.</p>",
      how: "<p>Este un mușchi acoperit cu mici proeminențe, <b>papilele gustative</b>, cu mii de mugurași gustativi care recunosc gusturile de bază: dulce, sărat, acru, amar și umami. Când mesteci, împinge mâncarea între dinți, o amestecă cu <b>saliva</b> (care conține o enzimă, amilaza, ce începe să digere amidonul) și formează <b>bolul alimentar</b>, pe care apoi îl împinge spre gât ca să-l înghiți. Mișcându-se foarte precis, ne permite și să pronunțăm cuvintele.</p>",
      links: [
        { to: "esofago", text: "Împinge bolul alimentar spre gât și apoi spre esofag." },
        { to: "naso", text: "Împreună cu nasul te face să recunoști gustul complet al mâncării." },
        { to: "cervello", text: "Nervii duc creierului informațiile despre gusturi." }
      ],
      problems: [
        { title: "Carii și gură murdară", causes: "zaharuri și curățarea slabă a dinților; bacteriile din gură produc acizi.", effects: "dinții se strică și poate apărea respirație urât mirositoare.", prevent: "spală-te pe dinți după mese și seara, puține dulciuri și băuturi îndulcite, vizite la dentist." }
      ],
      fact: "Fiecare limbă are un model unic, ca amprentele digitale."
    },
    cuore: {
      name: "Inima", label: "Inimă",
      what: "<p>Inima este o pompă musculară cât pumnul tău. Bate toată viața ca să împingă sângele în tot corpul.</p>",
      how: "<p>Este un mușchi cu patru cavități: două <b>atrii</b> (care primesc sângele) și două <b>ventricule</b> (care îl împing afară), separate de valve ce îl fac să meargă într-o singură direcție. Partea dreaptă trimite sângele la plămâni (circulația pulmonară), cea stângă îl trimite în tot corpul (circulația sistemică). În repaus bate de 60-100 de ori pe minut, de aproximativ 100 000 de ori pe zi, și pompează aproximativ 5 litri de sânge pe minut. Bătaia este comandată de un grup de celule, stimulatorul cardiac natural, și se accelerează la efort.</p>",
      links: [
        { to: "polmoni", text: "Partea dreaptă trimite plămânilor sângele sărac în oxigen (circulația pulmonară); se întoarce oxigenat." },
        { to: "arterie", text: "Din ventriculul stâng, sângele oxigenat pornește în aortă și în artere." },
        { to: "vene", text: "Venele aduc înapoi la inimă sângele care și-a predat deja oxigenul." },
        { to: "nervi", text: "Sistemul nervos autonom îi accelerează sau îi încetinește bătăile." }
      ],
      problems: [
        { title: "Infarct și boli de inimă", causes: "fumat, colesterol mare, tensiune mare, sedentarism, alimentație nesănătoasă (mai ales la adulți).", effects: "o parte din inimă primește mai puțin sânge și oxigen și are greutăți la pompare, iar tot corpul poate suferi.", prevent: "mișcare în fiecare zi, fructe, legume și puțină sare, fără fumat, somn bun." }
      ],
      fact: "Inima începe să bată la doar aproximativ 3 săptămâni de la concepție și nu se mai oprește."
    },
    arterie: {
      name: "Arterele", label: "Artere",
      what: "<p>Arterele sunt tuburile care duc sângele bogat în oxigen de la inimă în toate părțile corpului.</p>",
      how: "<p>Au pereți groși și elastici și rezistă la presiunea sângelui împins de inimă. Cea mai mare, <b>aorta</b>, are aproximativ 2-3 cm în diametru și se ramifică în artere tot mai mici, până la <b>capilare</b>, foarte subțiri, unde au loc schimburile cu celulele. „Bătaia” pe care o simți la încheietura mâinii este unda de presiune care se propagă prin artere la fiecare bătaie a inimii. <b>Tensiunea arterială</b> se măsoară cu două valori: maximă (inima contractată) și minimă (inima relaxată). Arterele pulmonare fac excepție: duc sânge sărac în oxigen la plămâni.</p>",
      links: [
        { to: "cuore", text: "Pleacă din inimă, care le umple cu sânge la fiecare bătaie." },
        { to: "vene", text: "După capilare, sângele ajunge în vene și se întoarce la inimă." },
        { to: "reni", text: "Arterele renale duc rinichilor sângele care trebuie filtrat." },
        { to: "cervello", text: "Arterele gâtului duc creierului oxigenul de care are mare nevoie." }
      ],
      problems: [
        { title: "Tensiune mare", causes: "prea multă sare, puțină mișcare, supraponderalitate, fumat.", effects: "pereții arterelor sunt solicitați și inima lucrează mai mult; în timp pot apărea probleme.", prevent: "puțină sare, multe fructe și legume, mișcare, fără fumat; medicul controlează tensiunea." }
      ],
      fact: "Dacă ai pune cap la cap toate vasele de sânge, ai ajunge la aproximativ 100 000 km, mai mult de două ori ocolul Pământului."
    },
    vene: {
      name: "Venele", label: "Vene",
      what: "<p>Venele aduc sângele înapoi la inimă după ce și-a predat oxigenul și a strâns deșeurile.</p>",
      how: "<p>Au pereți mai subțiri decât arterele și o presiune mai mică. În venele picioarelor sunt <b>valve</b> în formă de buzunar care împiedică sângele să coboare la loc. Întoarcerea spre inimă este ajutată de <b>mușchii</b> care, contractându-se, strâng venele, și de mișcarea respirației. Cele două vene mari, vena cavă superioară și inferioară, duc sângele în atriul drept. Venele pulmonare sunt o excepție: duc sânge oxigenat de la plămâni la inimă. Culoarea albăstruie a venelor de sub piele este un efect optic.</p>",
      links: [
        { to: "cuore", text: "Venele cave duc sângele în atriul drept al inimii." },
        { to: "muscoli", text: "Mușchii picioarelor, contractându-se, împing sângele în sus spre inimă." },
        { to: "intestino_tenue", text: "De la intestin, o venă specială duce substanțele hrănitoare la ficat." },
        { to: "polmoni", text: "Venele pulmonare aduc la inimă sângele bogat în oxigen." }
      ],
      problems: [
        { title: "Picioare grele", causes: "statul mult timp nemișcat în picioare sau pe scaun, circulație slabă.", effects: "sângele stagnează în picioare, care se simt umflate și obosite.", prevent: "mișcă-te des, fă pauze, plimbă-te, nu sta ore în șir cu picioarele nemișcate." }
      ],
      fact: "În vene se află, în fiecare moment, aproximativ 60-70% din sângele corpului."
    },
    trachea: {
      name: "Traheea", label: "Trahee",
      what: "<p>Traheea este tubul care duce aerul din gât la plămâni. Are inele de cartilaj care o țin deschisă.</p>",
      how: "<p>Are aproximativ 10-12 cm lungime și este formată din 16-20 de inele de cartilaj în formă de „C”, care o țin mereu deschisă, căptușite pe dinăuntru cu celule cu cili minusculi și cu mucus. Mucusul prinde praful și microbii, iar cilii îl împing spre gât, unde este înghițit sau eliminat prin tuse. Jos se împarte în doi <b>bronhi</b>, câte unul pentru fiecare plămân, care se ramifică în tubulețe tot mai mici (bronhiole). Deasupra, <b>laringele</b> conține corzile vocale, iar <b>epiglota</b> închide traheea când înghiți.</p>",
      links: [
        { to: "naso", text: "Primește aerul din nas și din gură, deja încălzit și curățat." },
        { to: "polmoni", text: "Se împarte în cei doi bronhi care duc aerul la plămâni." },
        { to: "esofago", text: "Merge în fața esofagului; epiglota o închide când înghiți, așa că mâncarea nu intră în ea." }
      ],
      problems: [
        { title: "Tuse și bronșită", causes: "viruși, fumat, aer poluat.", effects: "mucusul crește, gâtul se irită, iar tusea încearcă să curețe căile respiratorii.", prevent: "evită fumul, inclusiv pe cel pasiv, spală-ți mâinile, aerisește; dacă tusea ține, vorbește cu un adult sau cu medicul." }
      ],
      fact: "O tuse poate împinge aerul afară cu zeci de metri pe secundă."
    },
    polmoni: {
      name: "Plămânii", label: "Plămâni",
      what: "<p>Plămânii sunt două mari „bureți” care iau oxigenul din aer și îl trimit în sânge, și scot afară dioxidul de carbon.</p>",
      how: "<p>În plămâni, bronhiile se ramifică în mii de bronhiole care se termină în aproximativ 300-500 de milioane de <b>alveole</b>, saci minusculi înconjurați de capilare. Pereții lor sunt foarte subțiri: oxigenul trece în sânge, iar dioxidul de carbon trece din sânge în aer, prin <b>difuzie</b>. În total, suprafața alveolelor este cam cât jumătate dintr-un teren de tenis (50-70 m²). Plămânul drept are trei lobi, cel stâng doi, ca să lase loc inimii. În repaus respirăm de 12-20 de ori pe minut.</p>",
      links: [
        { to: "cuore", text: "Inima trimite plămânilor sângele sărac în oxigen și îl primește oxigenat." },
        { to: "diaframma", text: "Diafragma îi umflă și îi dezumflă la fiecare respirație." },
        { to: "trachea", text: "Aerul ajunge din trahee prin bronhii." },
        { to: "costole", text: "Coastele îi protejează ca o cușcă." },
        { to: "vene", text: "Din venele pulmonare iese sângele bogat în oxigen, îndreptat spre inimă." }
      ],
      problems: [
        { title: "Astm", causes: "alergiile, infecțiile, aerul rece sau fumul pot îngusta bronhiile.", effects: "dispnee, tuse și șuierat în respirație, pentru că aerul trece cu greutate.", prevent: "evită fumul și praful, urmează indicațiile medicului dacă ai astm și ține medicamentele la tine." },
        { title: "Pneumonie", causes: "infecții cu viruși sau bacterii.", effects: "alveolele se umplu cu lichid și trece mai puțin oxigen în sânge; e nevoie de tratament medical.", prevent: "vaccinări, spălarea mâinilor, fără fumat, somn și alimentație bune." }
      ],
      fact: "Întinse una lângă alta, alveolele ar acoperi o suprafață de zeci de ori mai mare decât pielea ta."
    },
    esofago: {
      name: "Esofagul", label: "Esofag",
      what: "<p>Esofagul este tubul care duce mâncarea din gât în stomac. Funcționează chiar și cu capul în jos!</p>",
      how: "<p>Are aproximativ 25 cm lungime. Pereții lui musculari se contractă în valuri, numite <b>peristaltism</b>, care împing mâncarea în jos fără ajutorul gravitației. La început și la sfârșit sunt două „valve” musculare (sfinctere): cea de la capătul de jos se deschide ca să lase mâncarea să treacă în stomac și apoi se închide ca s-o împiedice să urce. Când sucul gastric acid urcă puțin, se simte arsura numită „reflux”.</p>",
      links: [
        { to: "lingua", text: "Primește mâncarea mestecată pe care limba o împinge spre gât." },
        { to: "stomaco", text: "La capăt se deschide în stomac, unde mâncarea este digerată." },
        { to: "trachea", text: "Trece în spatele traheei: când înghiți, epiglota o închide." },
        { to: "diaframma", text: "Străbate diafragma ca să intre în abdomen." }
      ],
      problems: [
        { title: "Arsuri la stomac", causes: "mese copioase sau foarte grase, mâncat în fugă, băuturi acidulate.", effects: "o senzație de arsură în spatele sternului, când urcă puțin acid.", prevent: "mănâncă încet, porții moderate, nu te culca imediat după cină; dacă se întâmplă des, vorbește cu un adult sau cu medicul." }
      ],
      fact: "Mâncarea coboară prin esofag în câteva secunde."
    },
    stomaco: {
      name: "Stomacul", label: "Stomac",
      what: "<p>Stomacul este un sac muscular care amestecă mâncarea cu sucuri speciale și o transformă într-o păstă.</p>",
      how: "<p>Are o capacitate de aproximativ 1-1,5 litri. Pereții lui musculari frământă mâncarea timp de 2-4 ore, amestecând-o cu <b>sucul gastric</b>, bogat în acid clorhidric (care omoară mulți microbi) și în enzime precum pepsina, care încep să digere proteinele. Un strat de mucus protejează peretele de acid. Rezultatul este <b>chimul</b>, care trece în doze mici în intestinul subțire printr-o valvă, pilorul.</p>",
      links: [
        { to: "esofago", text: "Primește mâncarea de la esofag." },
        { to: "intestino_tenue", text: "Chimul trece în doze mici în intestinul subțire." },
        { to: "fegato", text: "Se află lângă ficat, care pregătește bila, utilă în etapele următoare ale digestiei." },
        { to: "nervi", text: "Nervii îi spun stomacului când e timpul să lucreze și trimit senzația de foame." }
      ],
      problems: [
        { title: "Dureri de burtă și gastrită", causes: "mâncat prea repede, prea multă mâncare, stres, infecții.", effects: "durere sau arsură și greață, digestia este mai grea.", prevent: "mănâncă fără grabă, la ore regulate, evită excesele de mâncare grasă sau picantă; dacă durerea persistă, vorbește cu un adult sau cu medicul." }
      ],
      fact: "Mucoasa stomacului se reînnoiește la câteva zile, așa că acidul nu o strică."
    },
    fegato: {
      name: "Ficatul", label: "Ficat",
      what: "<p>Ficatul este marea „fabrică” a corpului: curăță sângele, depozitează energie și pregătește substanțe utile pentru digestie.</p>",
      how: "<p>Este cel mai mare organ intern (aproximativ 1,5 kg) și îndeplinește peste 500 de funcții. Primește de la intestin, prin <b>vena portă</b>, sângele încărcat cu substanțe hrănitoare: le transformă, depozitează zahărul sub formă de <b>glicogen</b> și îl eliberează când e nevoie. Face mai puțin dăunătoare unele substanțe (cum sunt medicamentele), produce proteine ale sângelui și <b>bila</b>, care ajută la digerarea grăsimilor. Se poate regenera după o leziune: o parte pierdută poate crește la loc.</p>",
      links: [
        { to: "cistifellea", text: "Bila produsă de ficat este păstrată în vezica biliară." },
        { to: "intestino_tenue", text: "Primește de la intestin substanțele hrănitoare absorbite și trimite bila în intestin." },
        { to: "pancreas", text: "Pancreasul și ficatul reglează împreună cantitatea de zahăr din sânge." },
        { to: "vene", text: "Vena portă și vena cavă duc sângele în ficat și în afara lui." }
      ],
      problems: [
        { title: "Ficat obosit", causes: "prea multe alimente grase și dulci, puțină mișcare, alcool (la adulți), unele medicamente luate fără control.", effects: "ficatul lucrează mai greu și grăsimea se acumulează; în timp se poate deteriora.", prevent: "mănâncă variat, mișcă-te, ia medicamente doar împreună cu un adult, fără alcool pentru copii și adolescenți." }
      ],
      fact: "Ficatul este singurul organ intern care se poate regenera în mare parte."
    },
    cistifellea: {
      name: "Vezica biliară", label: "Vezica biliară",
      what: "<p>Este un săculeț aflat sub ficat, în care se păstrează bila, lichidul care ajută la digerarea grăsimilor.</p>",
      how: "<p>Are forma unei pere mici, lungă de aproximativ 8-10 cm. Bila este produsă de ficat continuu și ajunge în vezica biliară, care o <b>concentrează</b> scoțându-i apa. Când mănânci alimente grase, un hormon face vezica biliară să se contracte și să stoarcă bila în <b>duoden</b> (prima parte a intestinului subțire). Bila funcționează ca un detergent: sparge grăsimile în picături minuscule, ca enzimele să le poată ataca. Se poate trăi și fără vezica biliară.</p>",
      links: [
        { to: "fegato", text: "Păstrează bila produsă de ficat." },
        { to: "intestino_tenue", text: "Varsă bila în duoden când este nevoie ca să se digere grăsimile." },
        { to: "pancreas", text: "Canalul ei se unește cu cel al pancreasului înainte de a se deschide în duoden." }
      ],
      problems: [
        { title: "Calculi biliari", causes: "bilă prea bogată în colesterol, alimentație grasă, supraponderalitate (mai ales la adulți).", effects: "mici „pietricele” pot bloca canalul și pot da durere după mese.", prevent: "alimentație variată cu fibre, mișcare, evitarea dietelor drastice; la o durere puternică de burtă, anunță imediat un adult." }
      ],
      fact: "Bila este verde-gălbuie și dă culoarea maronie caracteristică scaunului."
    },
    pancreas: {
      name: "Pancreasul", label: "Pancreas",
      what: "<p>Pancreasul face două lucruri: produce sucuri pentru digerarea mâncării și produce un hormon, insulina, care gestionează zahărul din sânge.</p>",
      how: "<p>Este o glandă lungă de aproximativ 15 cm, aflată în spatele stomacului. Ca glandă <b>exocrină</b> produce sucul pancreatic, bogat în enzime care digeră zaharurile, proteinele și grăsimile și în bicarbonat care neutralizează acidul din stomac; îl trimite în duoden. Ca glandă <b>endocrină</b>, „insulițele lui Langerhans” produc doi hormoni opuși: <b>insulina</b> (scade glicemia lăsând zahărul să intre în celule) și <b>glucagonul</b> (o ridică eliberând zahărul depozitat în ficat).</p>",
      links: [
        { to: "intestino_tenue", text: "Varsă în duoden enzimele care digeră mâncarea." },
        { to: "fegato", text: "Insulina și glucagonul îi spun ficatului când să depoziteze sau să elibereze zahăr." },
        { to: "stomaco", text: "Se află în spatele stomacului și neutralizează acidul care vine de acolo." },
        { to: "muscoli", text: "Datorită insulinei, mușchii iau din sânge zahărul de care au nevoie ca să lucreze." }
      ],
      problems: [
        { title: "Diabet", causes: "corpul produce puțină insulină sau n-o folosește bine; există forme diferite, unele legate și de supraponderalitate și sedentarism.", effects: "zahărul rămâne mare în sânge, cu sete, oboseală și, în timp, deteriorarea altor organe, ca ochii și rinichii.", prevent: "alimentație echilibrată, puține băuturi îndulcite, mișcare; cine are diabet se tratează împreună cu medicul." }
      ],
      fact: "Insulițele lui Langerhans reprezintă doar 1-2% din pancreas, dar fără insulină celulele n-ar putea folosi zahărul."
    },
    intestino_tenue: {
      name: "Intestinul subțire", label: "Int. subțire",
      what: "<p>Este tubul lung înfășurat în burtă, unde mâncarea își termină digestia și substanțele hrănitoare trec în sânge.</p>",
      how: "<p>Are aproximativ 6-7 metri lungime și este împărțit în duoden, jejun și ileon. Aici ajung sucul pancreatic, bila și sucurile intestinale care descompun carbohidrații în zaharuri simple, proteinele în aminoacizi și grăsimile în acizi grași. Peretele este plin de pliuri și de mici proeminențe, <b>vilozitățile</b>, care măresc suprafața de absorbție până la aproximativ 30 m² (mai mult decât un living mare). Zaharurile și aminoacizii trec în capilare, care îi duc la ficat prin vena portă; grăsimile trec în vasele limfatice.</p>",
      links: [
        { to: "stomaco", text: "Primește de la stomac chimul, în doze mici." },
        { to: "pancreas", text: "Pancreasul îi trimite enzimele ca să termine digestia." },
        { to: "cistifellea", text: "Bila din vezica biliară ajută la digerarea grăsimilor." },
        { to: "intestino_crasso", text: "Ce nu se absoarbe trece în intestinul gros." },
        { to: "vene", text: "Substanțele hrănitoare absorbite intră în sânge și ajung la ficat." }
      ],
      problems: [
        { title: "Intoleranțe și alergii alimentare", causes: "corpul nu digeră bine o substanță (cum este lactoza) sau sistemul imunitar reacționează la un aliment.", effects: "balonare, dureri de burtă, diaree, uneori alte simptome.", prevent: "dacă un aliment te îmbolnăvește des, vorbește cu un adult și cu medicul, care va spune ce e de făcut." },
        { title: "Gastroenterită", causes: "viruși sau bacterii luate de pe mâini murdare sau din alimente păstrate prost.", effects: "diaree, vărsături, dureri de burtă și pierdere de apă.", prevent: "spală-ți mâinile înainte de masă, spală fructele și legumele, păstrează bine alimentele, bea apă." }
      ],
      fact: "Datorită pliurilor și vilozităților, suprafața intestinului subțire este mult mai mare decât ar lăsa să se creadă tubul."
    },
    intestino_crasso: {
      name: "Intestinul gros", label: "Int. gros",
      what: "<p>Este ultima porțiune a digestiei: recuperează apa din mâncarea care nu mai folosește și pregătește deșeurile de eliminat.</p>",
      how: "<p>Are aproximativ 1,5 metri lungime și este mai lat decât cel subțire. Cuprinde <b>cecul</b> (cu apendicele), <b>colonul</b> și <b>rectul</b>. Aici se reabsorb apa și sărurile, așa că resturile devin mai solide, <b>materiile fecale</b>. Aici trăiesc miliarde de bacterii utile, <b>microbiota</b>, care digeră fibrele, produc unele vitamine (ca vitamina K) și protejează de bacteriile dăunătoare. Materiile fecale rămân în rect până când sunt eliminate. Trecerea prin întregul aparat digestiv durează aproximativ 1 până la 3 zile.</p>",
      links: [
        { to: "intestino_tenue", text: "Primește de la intestinul subțire resturile nedigerabile și încă foarte apoase." },
        { to: "reni", text: "Împreună cu rinichii ajută corpul să păstreze echilibrul corect al apei." },
        { to: "vene", text: "Apa și unele vitamine recuperate trec în sânge." }
      ],
      problems: [
        { title: "Constipație", causes: "puține fibre, puțină apă, puțină mișcare, reținerea de a merge la toaletă.", effects: "scaunul devine tare, iar defecarea cere efort și doare.", prevent: "fructe, legume, cereale integrale, apă de băut, mișcare, mers la toaletă când trebuie." }
      ],
      fact: "În intestin trăiesc mai multe bacterii decât celule în tot restul corpului."
    },
    reni: {
      name: "Rinichii", label: "Rinichi",
      what: "<p>Rinichii sunt două organe în formă de fasole care curăță sângele și produc urina.</p>",
      how: "<p>Fiecare rinichi are mărimea unui pumn și conține aproximativ un milion de filtre numite <b>nefroni</b>. În fiecare zi sunt filtrați aproximativ 180 de litri de plasmă sanguină, dar aproape totul se întoarce în sânge: rinichii reabsorb apa și substanțele utile și lasă să iasă doar aproximativ 1,5 litri de <b>urină</b>, cu deșeuri ca ureea și sarea în exces. Astfel reglează cantitatea de apă, sarea și tensiunea. Produc și un hormon, <b>eritropoietina</b>, care stimulează măduva osoasă să facă globule roșii.</p>",
      links: [
        { to: "vescica", text: "Urina coboară de la rinichi la vezică prin cei doi ureteri." },
        { to: "arterie", text: "Arterele renale duc sângele de filtrat, venele îl aduc înapoi curat." },
        { to: "surrenali", text: "Deasupra fiecărui rinichi se află o glandă suprarenală." },
        { to: "cuore", text: "Rinichii controlează volumul sângelui și astfel ajută inima să regleze tensiunea." }
      ],
      problems: [
        { title: "Infecții urinare și pietre", causes: "puțină apă, igienă slabă, uneori săruri care se acumulează.", effects: "usturime la urinat sau durere în părți; rinichii funcționează mai prost.", prevent: "bea apă pe parcursul zilei, puțină sare, mergi la toaletă fără să te reții; dacă te arde, spune unui adult." }
      ],
      fact: "Rinichii filtrează tot sângele din corp de multe ori într-o zi."
    },
    vescica: {
      name: "Vezica urinară", label: "Vezică",
      what: "<p>Vezica urinară este un săculeț elastic în care se strânge urina, până când mergi la baie.</p>",
      how: "<p>Este un organ muscular gol pe dinăuntru. Urina ajunge de la rinichi prin ureteri și se acumulează: vezica unui adult poate conține aproximativ jumătate de litru. Când este plină, receptorii din perete trimit un semnal creierului și simți nevoia. Două sfinctere o închid: unul automat și unul pe care îl controlăm noi. Când decizi să mergi la baie, mușchiul peretelui se contractă, sfincterul se relaxează și urina iese prin <b>uretră</b>. Copiii învață să-și controleze vezica în primii ani de viață.</p>",
      links: [
        { to: "reni", text: "Primește urina produsă de rinichi." },
        { to: "bacino", text: "Stă în siguranță în scobitura bazinului." },
        { to: "nervi", text: "Nervii anunță creierul când este plină și coordonează golirea." }
      ],
      problems: [
        { title: "Cistită", causes: "bacterii care urcă din uretră, puțină apă, reținerea prea mare.", effects: "usturime și nevoia frecventă de a urina.", prevent: "bea apă, nu te abține prea mult, igienă personală; dacă simți usturime, anunță un adult sau medicul." }
      ],
      fact: "Vezica se întinde ca un balon și se face simțită când este plină cam o treime."
    },
    tiroide: {
      name: "Tiroida", label: "Tiroidă",
      what: "<p>Tiroida este o glandă mică, în formă de fluture, aflată în gât. Produce hormoni care reglează cât de repede lucrează corpul.</p>",
      how: "<p>Cântărește 15-25 g și produce hormonii <b>tiroxină (T4)</b> și <b>triiodotironină (T3)</b>, care controlează metabolismul: viteza cu care celulele folosesc energia. Influențează creșterea, temperatura, bătăile inimii și dezvoltarea creierului la copii. Pentru a-i fabrica este nevoie de <b>iod</b>, care se găsește în pește și în sarea iodată. Producția este comandată de hipofiză prin hormonul TSH, într-un circuit de control prin feedback care menține nivelurile stabile.</p>",
      links: [
        { to: "cervello", text: "Hipotalamusul și hipofiza din creier controlează cât de multă tiroxină să se producă." },
        { to: "cuore", text: "Hormonii tiroidieni influențează frecvența bătăilor." },
        { to: "ossa_gambe", text: "Sunt necesari pentru o creștere normală a oaselor la copii și adolescenți." }
      ],
      problems: [
        { title: "Tiroidă prea lentă sau prea rapidă", causes: "lipsă de iod sau tulburări ale apărării imunitare.", effects: "dacă lucrează puțin, te simți somnoros și ți-e frig, dacă lucrează prea mult, ești agitat și slăbești.", prevent: "folosește sare iodată cu măsură, mănâncă pește; există analize de sânge pentru a o controla: vorbește cu medicul." }
      ],
      fact: "Numele ei vine din greacă, de la „scut”, după forma cartilajului din apropiere."
    },
    surrenali: {
      name: "Glandele suprarenale", label: "Suprarenale",
      what: "<p>Sunt două glande mici aflate deasupra rinichilor. Produc hormoni care ne ajută să reacționăm la o sperietură sau la un eveniment important.</p>",
      how: "<p>Fiecare suprarenală are două părți. <b>Medulara</b> produce <b>adrenalină</b> și <b>noradrenalină</b> în momentele de stres: inima bate mai tare, respirația se accelerează, mușchii primesc mai mult sânge, o reacție numită „luptă sau fugi”. <b>Corticala</b> produce <b>cortizolul</b> (care ajută la gestionarea stresului și a zaharurilor) și <b>aldosteronul</b>, care reglează sarea și apa împreună cu rinichii. Sunt controlate de hipofiză și de sistemul nervos.</p>",
      links: [
        { to: "reni", text: "Stau sprijinite pe partea de sus a rinichilor; aldosteronul spune rinichilor cât de multă sare să rețină." },
        { to: "cuore", text: "Adrenalina face inima să bată mai tare și mai repede." },
        { to: "cervello", text: "Creierul, în fața unui pericol sau a unei emoții puternice, le pune în acțiune." },
        { to: "muscoli", text: "Pregătesc mușchii pentru acțiune trimițându-le mai mult zahăr și sânge." }
      ],
      problems: [
        { title: "Stres prelungit", causes: "griji continue, somn puțin, prea multe obligații.", effects: "cortizol mare prea mult timp: oboseală, dificultăți la adormit, dureri de burtă.", prevent: "dormi bine, joacă-te și mișcă-te în aer liber, vorbește despre griji cu un adult în care ai încredere." }
      ],
      fact: "Adrenalina acționează în câteva secunde: de aceea inima bate tare imediat ce te sperii."
    },
    milza: {
      name: "Splina", label: "Splină",
      what: "<p>Splina este un organ moale, aflat în partea stângă a burții. Filtrează sângele și ajută corpul să se apere de microbi.</p>",
      how: "<p>Mare cam cât un pumn, are două țesuturi: <b>pulpa roșie</b>, care filtrează sângele și elimină globulele roșii vechi sau deteriorate (după aproximativ 120 de zile) și păstrează o rezervă din ele; <b>pulpa albă</b>, bogată în limfocite, care recunosc microbii din sânge și produc anticorpi. Fierul din globulele roșii este recuperat și refolosit. Se poate trăi și fără splină, dar ești puțin mai expus la anumite infecții și este util să te vaccinezi.</p>",
      links: [
        { to: "stomaco", text: "Se află lângă stomac, sub coastele din stânga." },
        { to: "arterie", text: "Primește sângele de la o arteră specială și îl filtrează." },
        { to: "linfonodi", text: "Împreună cu ganglionii limfatici face parte din sistemul limfatic de apărare." },
        { to: "costole", text: "Coastele o protejează de lovituri." }
      ],
      problems: [
        { title: "Lovituri în partea stângă", causes: "ciocniri puternice la sporturile de contact sau căderi.", effects: "splina se poate accidenta și poate da durere în partea stângă.", prevent: "folosește echipamentul de protecție și fii atent în jocuri; dacă ai o durere puternică după o lovitură, anunță imediat un adult." }
      ],
      fact: "Este cel mai mare organ al sistemului limfatic."
    },
    timo: {
      name: "Timusul", label: "Timus",
      what: "<p>Timusul este o glandă mică aflată în spatele sternului. Este „școala” în care unele celule de apărare învață să recunoască microbii.</p>",
      how: "<p>Este mai mare la copii și se micșorează odată cu creșterea și apoi la vârsta adultă. Aici se maturizează <b>limfocitele T</b> (T vine de la timus), care se nasc în măduva osoasă. În timus învață să deosebească celulele propriului corp de cele străine: cele care greșesc sunt eliminate, pentru ca sistemul imunitar să nu atace corpul însuși. Limfocitele T trec apoi în sânge, în ganglionii limfatici și în splină, unde coordonează apărarea.</p>",
      links: [
        { to: "linfonodi", text: "Limfocitele T ieșite din timus se îndreaptă spre ganglionii limfatici." },
        { to: "milza", text: "Și splina găzduiește limfocite T și B care și-au încheiat formarea." },
        { to: "cuore", text: "Se află în fața inimii, în spatele sternului." }
      ],
      problems: [
        { title: "Apărări imature sau slabe", causes: "sistemul imunitar se dezvoltă în copilărie și este influențat de somn, alimentație și vaccinuri.", effects: "dacă apărările funcționează mai puțin, te îmbolnăvești mai ușor.", prevent: "vaccinări, somn bun, alimentație variată, spălarea mâinilor; dacă te îmbolnăvești des, vorbește cu medicul." }
      ],
      fact: "Timusul este cel mai activ în copilărie și adolescență, apoi se micșorează."
    },
    linfonodi: {
      name: "Ganglionii limfatici", label: "Ganglioni",
      what: "<p>Ganglionii limfatici sunt glande mici, în formă de bob de fasole, răspândite în corp (gât, subsuori, zona inghinală). Sunt posturile de control care opresc microbii.</p>",
      how: "<p>Sunt legați între ei prin vasele limfatice, care adună <b>limfa</b>, un lichid limpede ce curge din țesuturi. Limfa trece prin ganglioni, unde se găsesc multe <b>limfocite</b> și macrofage ce filtrează și distrug bacterii, viruși și celule deteriorate. Când este o infecție, limfocitele se înmulțesc, iar ganglionul se mărește și poate durea puțin: este semn că lucrează. La final, limfa se întoarce în sânge lângă inimă. În corp sunt aproximativ 600.</p>",
      links: [
        { to: "milza", text: "Splina și ganglionii limfatici fac parte împreună din sistemul limfatic." },
        { to: "timo", text: "Primesc limfocitele T formate în timus." },
        { to: "vene", text: "Limfa adunată se întoarce în circulație vărsându-se în venele mari de lângă inimă." },
        { to: "intestino_tenue", text: "Grăsimile absorbite în intestin călătoresc prin vasele limfatice." }
      ],
      problems: [
        { title: "Ganglioni măriți", causes: "durere în gât, răceală sau alte infecții.", effects: "simți sub bărbie niște „bobițe” dureroase care de obicei se dezumflă singure.", prevent: "odihnă, lichide, spălarea mâinilor; dacă rămân umflați mult timp, vorbește cu un adult sau cu medicul." }
      ],
      fact: "Ganglionii gâtului se umflă adesea când te doare în gât: înseamnă că organismul tău se apără."
    }
  },
  tour: [
    { icon: "🧍", title: "Corpul întreg", html: "<p>Acesta este corpul cu <b>pielea</b>, care îl protejează dinafară. Dedesubt sunt mușchii, oasele și organele. Folosește cursorul „Desfă” ca să separi piesele și să le vezi mai bine.</p>", focus: ["pelle"], explode: 0, view: { rx: 0.1, ry: -0.4 } },
    { icon: "🦴", title: "Scheletul și mușchii", html: "<p><b>Oasele</b> sunt eșafodajul care susține totul și protejează inima, plămânii și creierul. <b>Mușchii</b> trag de oase și te fac să te miști.</p>", focus: ["cranio", "colonna", "costole", "bacino", "ossa_braccia", "ossa_gambe", "muscoli"], explode: 0.4 },
    { icon: "🧠", title: "Comanda", html: "<p><b>Creierul</b> dă ordinele, <b>cerebelul</b> coordonează mișcările, <b>măduva spinării</b> și <b>nervii</b> duc mesajele în tot corpul.</p>", focus: ["cervello", "cervelletto", "midollo", "nervi"], explode: 0.3, view: { rx: 0.05, ry: 0.4 }, zoom: 1.2 },
    { icon: "👀", title: "Simțurile", html: "<p>Ochii, urechile, nasul și limba captează lumina, sunetele, mirosurile și gusturile și le trimit creierului sub formă de semnale.</p>", focus: ["occhi", "orecchie", "naso", "lingua"], explode: 0.3, zoom: 1.4 },
    { icon: "🫀", title: "Inima și sângele", html: "<p><b>Inima</b> este o pompă care împinge sângele în <b>artere</b>; <b>venele</b> îl aduc înapoi. Sângele livrează oxigen și substanțe hrănitoare fiecărei celule.</p>", focus: ["cuore", "arterie", "vene"], explode: 0.2 },
    { icon: "🫁", title: "A respira", html: "<p>Aerul intră prin nas, coboară prin <b>trahee</b> și ajunge la <b>plămâni</b>, unde oxigenul intră în sânge. <b>Diafragma</b> mișcă aerul ca niște foale.</p>", focus: ["naso", "trachea", "polmoni", "diaframma"], explode: 0.4, view: { rx: 0.1, ry: -0.2 } },
    { icon: "🍽️", title: "A digera", html: "<p>Mâncarea coboară prin <b>esofag</b> în <b>stomac</b>, apoi în <b>intestinul subțire</b>, unde <b>ficatul</b>, <b>vezica biliară</b> și <b>pancreasul</b> ajută la digestie. În <b>intestinul gros</b> se recuperează apa.</p>", focus: ["esofago", "stomaco", "fegato", "cistifellea", "pancreas", "intestino_tenue", "intestino_crasso"], explode: 0.5 },
    { icon: "🚽", title: "A filtra și a curăța", html: "<p><b>Rinichii</b> filtrează sângele și produc urina, care coboară în <b>vezica urinară</b>.</p>", focus: ["reni", "vescica"], explode: 0.5 },
    { icon: "⚗️", title: "Hormonii", html: "<p><b>Tiroida</b>, <b>suprarenalele</b> și <b>pancreasul</b> trimit în sânge hormoni, mesageri chimici care reglează creșterea, energia și reacțiile la stres.</p>", focus: ["tiroide", "surrenali", "pancreas"], explode: 0.5 },
    { icon: "🛡️", title: "Apărarea", html: "<p><b>Splina</b>, <b>timusul</b> și <b>ganglionii limfatici</b> sunt baza globulelor albe, care recunosc și elimină virusurile și bacteriile.</p>", focus: ["milza", "timo", "linfonodi"], explode: 0.5 }
  ],
  quiz: [
    { type: "mc", q: "Care organ face ca oxigenul din aer să treacă în sânge?", options: ["Stomacul", "Plămânii", "Rinichii"], answer: 1, explain: "În alveolele plămânilor, oxigenul trece în sânge, iar dioxidul de carbon trece în aer." },
    { type: "tf", q: "Arterele duc întotdeauna sânge bogat în oxigen, cu excepția celor care merg la plămâni.", answer: true, explain: "Arterele duc sângele departe de inimă; artera pulmonară duce sânge sărac în oxigen la plămâni." },
    { type: "mc", q: "Unde se păstrează bila?", options: ["În vezica biliară", "În stomac", "În vezica urinară"], answer: 0, explain: "Ficatul produce bila, iar vezica biliară o păstrează până când este nevoie de ea ca să se digere grăsimile." },
    { type: "order", q: "Pune în ordine drumul mâncării.", items: ["Gura", "Esofagul", "Stomacul", "Intestinul subțire", "Intestinul gros"], explain: "Mâncarea parcurge un tub lung: este mestecată, coboară în esofag, în stomac, apoi se absoarbe în intestinul subțire, iar intestinul gros recuperează apa." },
    { type: "tf", q: "Insulina, produsă de pancreas, ajută zahărul să intre în celule.", answer: true, explain: "Insulina scade cantitatea de zahăr din sânge lăsându-l să intre în celule." },
    { type: "mc", q: "Care parte a sistemului nervos protejează și leagă creierul de corp, în interiorul coloanei vertebrale?", options: ["Cerebelul", "Măduva spinării", "Timusul"], answer: 1, explain: "Măduva spinării, protejată de vertebre, duce semnalele între creier și nervii corpului." },
    { type: "num", q: "Aproximativ câți litri de sânge are un adult?", answer: 5, tol: 1, unit: "litri", explain: "Un adult are aproximativ 5 litri de sânge, 7-8% din greutate." },
    { type: "mc", q: "Care organ produce urina filtrând sângele?", options: ["Rinichii", "Vezica urinară", "Ficatul"], answer: 0, explain: "Rinichii filtrează sângele și produc urina; vezica doar o adună." },
    { type: "tf", q: "Diafragma se contractă când inspiri.", answer: true, explain: "Contractându-se, coboară, toracele se lărgește și aerul intră în plămâni." },
    { type: "order", q: "Pune în ordine drumul unui ordin de mișcare.", items: ["Creierul", "Măduva spinării", "Nervii", "Mușchii"], explain: "Creierul hotărăște, măduva și nervii duc semnalul, iar mușchiul se contractă." },
    { type: "mc", q: "Unde se maturizează limfocitele T?", options: ["În timus", "În splină", "În stomac"], answer: 0, explain: "În timus, limfocitele T învață să recunoască ce este străin de corp și de aceea se numesc „T”." },
    { type: "num", q: "Aproximativ câți metri are intestinul subțire al unui adult?", answer: 6, tol: 1, unit: "m", explain: "Intestinul subțire are aproximativ 6-7 metri: îndoit în burtă, absoarbe substanțele hrănitoare." },
    { type: "mc", q: "Care legătură este corectă?", options: ["Inimă și plămâni: sângele ia oxigen", "Esofag și rinichi: duc urina", "Tiroidă și vezică urinară: produc bila"], answer: 0, explain: "Inima trimite plămânilor sânge sărac în oxigen, care se întoarce oxigenat." },
    { type: "tf", q: "Cerebelul servește mai ales la digerarea mâncării.", answer: false, explain: "Cerebelul coordonează mișcările și echilibrul." }
  ]
});
