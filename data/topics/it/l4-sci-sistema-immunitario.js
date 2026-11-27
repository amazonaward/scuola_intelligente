TOPIC('it', {
  id: "l4-sci-sistema-immunitario",
  title: "Il sistema immunitario",
  intro: "Ogni giorno entri in contatto con miliardi di microbi: nell'aria, sulle mani, nel cibo. Eppure ti ammali di rado. Il merito è del <b>sistema immunitario</b>, un'\"armata\" distribuita in tutto il corpo, senza un quartier generale, composta da cellule, molecole e organi che <b>riconoscono ciò che è proprio e ciò che è estraneo</b> e distruggono quest'ultimo. Ha due livelli: una difesa <b>innata</b>, immediata e generica, e una difesa <b>adattativa</b>, più lenta ma specifica e dotata di <b>memoria</b>. È la memoria che rende possibili i <b>vaccini</b>, probabilmente l'intervento di sanità pubblica che ha salvato più vite nella storia. In questa lezione vedremo come funziona, perché a volte sbaglia (allergie, malattie autoimmuni) e come lo si può allenare.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Chi sono i nemici: i patogeni",
      html: `<p>Un <b>patogeno</b> è un agente capace di causare malattia. I principali sono:</p>
<ul>
<li><b>Virus</b> (20-300 nm): frammenti di materiale genetico (DNA o RNA) in un involucro proteico, parassiti obbligati: si replicano solo dentro le cellule. Raffreddore, influenza, morbillo, COVID-19, HIV.</li>
<li><b>Batteri</b> (1-10 μm): cellule procariote, vivono anche fuori dalle cellule. Tubercolosi, tetano, salmonellosi, polmonite pneumococcica. Si combattono con gli <b>antibiotici</b> (la penicillina, scoperta da Alexander Fleming nel 1928, è il primo), che <b>non funzionano contro i virus</b>.</li>
<li><b>Funghi</b> (candida, tigna) e <b>protozoi</b> (il plasmodio della malaria).</li>
<li><b>Parassiti pluricellulari</b> (tenie, ossiuri).</li>
</ul>
<p>Ogni patogeno espone sulla propria superficie molecole che fungono da \"documento d'identità\": gli <b>antigeni</b> (dal greco <i>anti-genos</i>, che genera anticorpi). Il sistema immunitario riconosce gli antigeni estranei e lascia in pace le proprie cellule: se sbaglia, si ha l'autoimmunità.</p>
<p>La teoria dei germi, ossia l'idea che malattie come il colera o la tubercolosi siano causate da microrganismi, fu dimostrata da Louis Pasteur e Robert Koch nella seconda metà dell'Ottocento; i \"postulati di Koch\" (1884) stabilirono come collegare un germe a una malattia. Prima si pensava ai \"miasmi\" (aria cattiva): ecco perché Semmelweis nel 1847, a Vienna, riducendo la mortalità per febbre puerperale con il lavaggio delle mani, non fu creduto.</p>`
    },
    {
      type: "text",
      title: "Prima linea: le barriere",
      html: `<p>La maggior parte dei patogeni viene fermata prima ancora che il sistema immunitario \"entri in azione\":</p>
<ul>
<li><b>Pelle</b>: strato di cellule cheratinizzate (<b>epidermide</b>), impermeabile, con pH ≈ 5,5 e sebo; sudore e lacrime contengono <b>lisozima</b>, un enzima che spezza la parete dei batteri.</li>
<li><b>Mucose</b> (naso, vie respiratorie, intestino): il <b>muco</b> imprigiona i microbi e le <b>ciglia</b> della trachea lo spingono verso l'alto (il fumo le paralizza, per questo i fumatori hanno più infezioni respiratorie).</li>
<li><b>Acidità</b>: lo stomaco (pH 1,5-2) uccide la maggior parte dei microbi ingeriti; la vagina e la pelle sono acide.</li>
<li><b>Microbiota</b>: i batteri \"buoni\" che occupano lo spazio e competono con i patogeni; gli antibiotici ad ampio spettro possono alterarli e favorire le infezioni da <i>Clostridioides difficile</i>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Difesa innata: veloce e generica",
      html: `<p>Se un patogeno supera le barriere (per una ferita, per esempio), entra in funzione la <b>risposta innata</b>: in minuti o ore, uguale per tutti i patogeni, senza memoria. Gli elementi principali:</p>
<ul>
<li><b>Fagociti</b>: i <b>neutrofili</b> (i globuli bianchi più numerosi, 40-70%) e i <b>macrofagi</b> inglobano e digeriscono i microbi (<b>fagocitosi</b>: il microbo finisce in una vescicola che si fonde con i lisosomi pieni di enzimi). Elie Metchnikoff la descrisse nel 1882 osservando larve di stella marina, e ottenne il Nobel nel 1908 (insieme a Ehrlich).</li>
<li><b>Riconoscimento di pattern</b>: recettori come i <b>Toll-like</b> (TLR) riconoscono strutture tipiche dei microbi (pareti batteriche, RNA virale) assenti nelle nostre cellule.</li>
<li><b>Cellule NK</b> (natural killer): uccidono cellule infettate da virus o tumorali che hanno \"perso\" i marcatori di sé.</li>
<li><b>Sistema del complemento</b>: oltre 30 proteine del plasma che, in cascata, \"marcano\" i microbi per i fagociti e ne forano la membrana.</li>
<li><b>Interferoni</b>: molecole che le cellule infettate da virus emettono per avvertire le vicine.</li>
<li><b>Infiammazione</b>: i segnali (istamina e citochine) dilatano i capillari e li rendono più permeabili: arrivano più sangue e globuli bianchi. Da qui i quattro segni descritti da Celso nel I secolo d.C.: <b>rossore, calore, tumore (gonfiore), dolore</b>.</li>
<li><b>Febbre</b>: l'aumento di temperatura (fino a 38-39 °C) rallenta alcuni patogeni e accelera la risposta immunitaria. Abbassarla sempre e comunque non è necessario, salvo disagio.</li>
</ul>
<p>Le <b>cellule dendritiche</b> sono il ponte: catturano frammenti di patogeno, migrano nei linfonodi e li \"mostrano\" ai linfociti, innescando la risposta adattativa.</p>`
    },
    {
      type: "widget",
      title: "Innata o adattativa?",
      widget: "classify",
      options: {
        groups: ["Difesa innata", "Difesa adattativa"],
        items: [["Pelle e mucose", 0], ["Linfociti B", 1], ["Neutrofili", 0], ["Memoria immunologica", 1], ["Febbre", 0], ["Anticorpi", 1], ["Cellule NK", 0], ["Linfociti T citotossici", 1], ["Infiammazione", 0], ["Specificità per un solo antigene", 1]]
      },
      caption: "L'innata è veloce e generica; l'adattativa è lenta, specifica e ricorda."
    },
    {
      type: "text",
      title: "Difesa adattativa: specifica e con memoria",
      html: `<p>La <b>risposta adattativa</b> è opera dei <b>linfociti</b>, globuli bianchi che nascono nel <b>midollo osseo</b> e maturano in organi diversi. È specifica (riconosce un antigene preciso), richiede giorni per attivarsi la prima volta, e lascia una <b>memoria</b>. Si divide in due bracci:</p>
<ul>
<li><b>Immunità umorale</b> (nei \"liquidi\"), affidata ai <b>linfociti B</b> (maturano nel midollo osseo, <i>Bone marrow</i>): quando riconoscono un antigene si trasformano in <b>plasmacellule</b> che secernono <b>anticorpi</b>.</li>
<li><b>Immunità cellulare</b>, affidata ai <b>linfociti T</b> (maturano nel <b>timo</b>): i <b>T helper</b> (CD4) coordinano la risposta secernendo citochine; i <b>T citotossici</b> (CD8) uccidono direttamente le cellule infettate o tumorali; i <b>T regolatori</b> frenano la risposta per evitare eccessi.</li>
</ul>
<p><b>Come si fa a riconoscere miliardi di antigeni diversi?</b> Ogni linfocita ha sulla sua superficie un recettore diverso. Il corpo ne produce, per ricombinazione casuale di segmenti genici (scoperta di Susumu Tonegawa, Nobel 1987), un repertorio di oltre un miliardo di tipi, molto prima di incontrare un patogeno. Quando un antigene incontra il linfocita con il recettore giusto lo seleziona, e quel linfocita si moltiplica: è la <b>selezione clonale</b> (teoria di Frank Macfarlane Burnet, 1957). Alcuni dei cloni diventano <b>cellule della memoria</b>, che restano per anni, a volte per decenni.</p>
<p>La distinzione fra <b>sé</b> e <b>non sé</b> dipende dalle proteine <b>MHC</b> (o HLA nell'uomo), presenti su tutte le cellule: esse espongono sul bordo frammenti di ciò che c'è dentro la cellula. Un linfocita T riconosce l'antigene solo se \"presentato\" insieme alla MHC. I linfociti che reagirebbero contro il sé vengono eliminati durante la maturazione (<b>tolleranza</b>). Le MHC sono diversissime fra individui, e per questo i trapianti richiedono compatibilità HLA.</p>`
    },
    {
      type: "text",
      title: "Gli anticorpi",
      html: `<p>Un <b>anticorpo</b> (o immunoglobulina, Ig) è una proteina a forma di <b>Y</b> formata da <b>4 catene</b>: due <b>pesanti</b> e due <b>leggere</b>, unite da ponti disolfuro. Le punte dei due bracci formano i due <b>siti di legame</b> per l'antigene (la regione \"variabile\", diversa per ogni anticorpo); il gambo (regione costante) interagisce con le altre cellule. Il legame antigene-anticorpo è come chiave e serratura: molto specifico.</p>
<p>Che cosa fa un anticorpo legato a un patogeno?</p>
<ol>
<li><b>Neutralizza</b>: copre le molecole che il patogeno usa per entrare nelle cellule o le tossine.</li>
<li><b>Agglutina</b>: collega più patogeni fra loro, formando grumi.</li>
<li><b>Opsonizza</b>: li \"marca\" perché i fagociti li riconoscano e li mangino.</li>
<li><b>Attiva il complemento</b>.</li>
</ol>
<table>
<tr><th>Classe</th><th>Dove e quando</th></tr>
<tr><td><b>IgM</b></td><td>La prima prodotta in un'infezione nuova; grandi molecole a 5 \"Y\" (pentameri)</td></tr>
<tr><td><b>IgG</b></td><td>Le più abbondanti nel sangue (75-80%); dominano la risposta secondaria; attraversano la placenta e proteggono il neonato per i primi mesi</td></tr>
<tr><td><b>IgA</b></td><td>Nelle mucose, nelle lacrime e nel latte materno (protegge l'intestino del neonato)</td></tr>
<tr><td><b>IgE</b></td><td>Contro i parassiti; responsabili delle <b>allergie</b></td></tr>
<tr><td><b>IgD</b></td><td>Sui linfociti B come recettore; funzione secondaria nel sangue</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "Un anticorpo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#1e3a8a" stroke-width="3" stroke-linejoin="round">
<path d="M270 270 L270 160 L190 70 L215 50 L300 135 L385 50 L410 70 L330 160 L330 270 Z" fill="#bfdbfe"/>
</g>
<g stroke="#b91c1c" stroke-width="3" fill="#fecaca">
<path d="M190 70 L215 50 L240 78 L212 98 Z"/>
<path d="M410 70 L385 50 L360 78 L388 98 Z"/>
</g>
<g fill="#16a34a" stroke="#14532d" stroke-width="2">
<polygon points="110,30 140,42 135,72 105,66 95,45"/>
<polygon points="490,30 460,42 465,72 495,66 505,45"/>
</g>
<text x="105" y="20" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">antigene</text>
<text x="495" y="20" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">antigene</text>
<text x="205" y="125" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="end">siti di legame</text>
<text x="205" y="142" font-size="14" fill="#b91c1c" text-anchor="end">(regione variabile)</text>
<text x="350" y="240" font-size="14" font-weight="bold" fill="#1e3a8a">regione costante</text>
<text x="350" y="258" font-size="14" fill="#1e3a8a">(gambo)</text>
<text x="300" y="292" font-size="14" fill="#475569" text-anchor="middle">Due catene pesanti e due leggere formano la Y; ogni Y lega due antigeni.</text>
</svg>`,
      caption: "La forma complementare del sito di legame e dell'antigene spiega la specificità."
    },
    {
      type: "svg",
      title: "Risposta primaria e secondaria",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="70" y1="250" x2="570" y2="250" stroke="#334155" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="30" stroke="#334155" stroke-width="2"/>
<text x="320" y="285" font-size="15" fill="#334155" text-anchor="middle">tempo (giorni / settimane)</text>
<text x="22" y="140" font-size="15" fill="#334155" text-anchor="middle" transform="rotate(-90 22 140)">anticorpi nel sangue</text>
<path d="M70 248 L130 248 Q170 245 195 200 Q220 175 250 215 Q290 248 320 248" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M320 248 L335 248 Q350 245 365 150 Q390 40 420 70 Q470 110 560 190" fill="none" stroke="#dc2626" stroke-width="4"/>
<line x1="130" y1="250" x2="130" y2="40" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="335" y1="250" x2="335" y2="40" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
<text x="136" y="55" font-size="14" font-weight="bold" fill="#0f172a">1° contatto</text>
<text x="341" y="55" font-size="14" font-weight="bold" fill="#0f172a">2° contatto</text>
<text x="145" y="235" font-size="14" fill="#2563eb" font-weight="bold">lenta, debole</text>
<text x="440" y="125" font-size="14" fill="#dc2626" font-weight="bold">rapida e intensa</text>
<text x="440" y="143" font-size="14" fill="#dc2626">(memoria!)</text>
</svg>`,
      caption: "Dopo il primo incontro le cellule della memoria rispondono in giorni invece che in settimane, con più anticorpi (soprattutto IgG)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le difese",
      questions: [
        { type: "mc", q: "Quale cellula produce gli anticorpi?", options: ["La plasmacellula (da un linfocita B)", "Il linfocita T citotossico", "Il neutrofilo", "Il globulo rosso"], answer: 0, explain: "I linfociti B attivati diventano plasmacellule che secernono grandi quantità di anticorpi." },
        { type: "tf", q: "La risposta immunitaria innata è specifica per ogni antigene e produce memoria.", answer: false, explain: "È la risposta adattativa ad avere specificità e memoria; l'innata è rapida e generica." },
        { type: "mc", q: "Dove maturano i linfociti T?", options: ["Nel timo", "Nel midollo osseo", "Nel fegato", "Nei reni"], answer: 0, explain: "T sta per timo; i B maturano nel midollo osseo (Bone marrow)." }
      ]
    },
    {
      type: "text",
      title: "I vaccini: allenare la memoria",
      html: `<p>La prima volta che incontri un patogeno la risposta adattativa impiega 1-2 settimane (risposta <b>primaria</b>): troppo tardi, se il microbo è veloce. Con un <b>vaccino</b> si presenta al sistema immunitario il bersaglio (l'antigene) <b>senza</b> la malattia, così nascono le cellule della memoria. Se in futuro arriva il patogeno vero, la risposta <b>secondaria</b> è rapida (2-3 giorni) e intensa. Questa è <b>immunità attiva</b>; quella \"passiva\" (anticorpi già fatti, come i sieri o gli anticorpi della madre) è immediata ma dura poco, perché non c'è memoria.</p>
<p><b>Un po' di storia.</b> Nel 1796 il medico inglese <b>Edward Jenner</b> notò che le mungitrici che avevano avuto il vaiolo bovino (<i>cowpox</i>, da cui \"vaccino\", da <i>vacca</i>) non si ammalavano di vaiolo umano: inoculò il materiale di una pustola a un bambino di 8 anni, James Phipps, e poi gli inoculò il vaiolo vero senza effetti. Nel 1881-1885 <b>Pasteur</b> sviluppò i vaccini contro il carbonchio e la rabbia (il primo paziente fu Joseph Meister, 1885). Nel 1980 l'OMS dichiarò il <b>vaiolo eradicato</b>, l'unica malattia umana finora debellata in tutto il mondo; era stata causa di circa 300 milioni di morti nel Novecento.</p>
<table>
<tr><th>Tipo di vaccino</th><th>Come è fatto</th><th>Esempi</th></tr>
<tr><td><b>Vivo attenuato</b></td><td>Patogeno indebolito, che si replica poco</td><td>morbillo-parotite-rosolia, varicella</td></tr>
<tr><td><b>Inattivato</b></td><td>Patogeno ucciso</td><td>poliomielite (Salk), epatite A</td></tr>
<tr><td><b>Subunità / ricombinante</b></td><td>Solo una proteina del patogeno</td><td>epatite B, HPV</td></tr>
<tr><td><b>Anatossina</b></td><td>Tossina resa innocua</td><td>tetano, difterite</td></tr>
<tr><td><b>mRNA</b></td><td>L'mRNA di una proteina virale, tradotto dalle nostre cellule; l'mRNA si degrada in poco tempo e non entra nel nucleo né modifica il DNA</td><td>COVID-19 (2020-21). Karikó e Weissman, Nobel per la medicina 2023</td></tr>
</table>
<p>Il <b>richiamo</b> (dose di richiamo) serve a stimolare ulteriormente la memoria; i vaccini contro virus che mutano rapidamente, come l'influenza, vanno aggiornati ogni anno.</p>`
    },
    {
      type: "text",
      title: "L'immunità di gregge",
      html: `<p>Anche se non tutti possono essere vaccinati (neonati, immunodepressi), se una <b>parte sufficiente</b> della popolazione è immune, il patogeno non trova abbastanza ospiti per circolare e protegge indirettamente anche i non immuni. È l'<b>immunità di gregge</b>. La quota minima dipende da quanto è contagioso il patogeno, misurato dal <b>numero di riproduzione di base R₀</b> (quante persone contagia in media un malato in una popolazione tutta suscettibile):</p>
<p style="text-align:center"><b>soglia = 1 − 1/R₀</b></p>
<p>Per R₀ = 3 → 1 − 1/3 ≈ 67%. Il <b>morbillo</b> ha un R₀ di 12-18 (uno tra i più alti): servono coperture del 92-95% con due dosi. Per questo, quando la copertura scende, riappaiono epidemie di una malattia che sembrava dimenticata. Il vaccino non protegge mai al 100% (l'efficacia è tipicamente 85-99%), ma nella popolazione abbassa drasticamente i casi gravi e riduce la circolazione.</p>`
    },
    {
      type: "example",
      title: "Quanto deve essere vaccinata una scuola?",
      html: `<p>Un virus ha R₀ = 5. Qual è la copertura minima per l'immunità di gregge, e che cosa cambia se il vaccino ha un'efficacia del 90% (non protegge tutti i vaccinati)?</p>
<ol>
<li>Quota di immuni necessaria: 1 − 1/5 = 0,80, cioè <b>80%</b>.</li>
<li>Se il vaccino protegge solo il 90% dei vaccinati, serve una copertura vaccinale c tale che 0,90 · c = 0,80 → c = 0,80/0,90 ≈ <b>89%</b>.</li>
</ol>
<p>Con R₀ = 15 (come il morbillo): soglia 1 − 1/15 ≈ 93%; con efficacia 97%, copertura = 0,933/0,97 ≈ 96%. Ecco perché i numeri sono così alti: bastano pochi \"buchi\" perché un virus ad alto R₀ riparta.</p>`
    },
    {
      type: "text",
      title: "Quando il sistema sbaglia",
      html: `<ul>
<li><b>Allergie</b> (ipersensibilità di tipo I): il sistema reagisce a sostanze innocue (polline, acari, arachidi, veleno di vespa). Al primo contatto si producono <b>IgE</b>, che si agganciano ai <b>mastociti</b>; al secondo contatto l'allergene lega le IgE e i mastociti liberano <b>istamina</b>, che causa prurito, rinorrea, gonfiore. Nei casi gravi si ha lo <b>shock anafilattico</b>: calo di pressione e difficoltà respiratoria, trattato subito con <b>adrenalina</b>. Gli antistaminici bloccano i recettori dell'istamina.</li>
<li><b>Malattie autoimmuni</b>: la tolleranza fallisce e i linfociti attaccano tessuti propri: il <b>diabete di tipo 1</b> (cellule β del pancreas), la <b>sclerosi multipla</b> (guaina mielinica, come vedrai nell'ultima lezione), l'<b>artrite reumatoide</b>, la celiachia (glutine e intestino).</li>
<li><b>Immunodeficienze</b>: l'<b>HIV</b> infetta proprio i linfociti T helper (CD4) e, riducendoli, lascia l'organismo esposto a infezioni opportunistiche: è la fase di <b>AIDS</b>. Le terapie antiretrovirali, oggi, rendono il virus controllabile e quasi non trasmissibile (\"U=U\": non rilevabile = non trasmissibile).</li>
<li><b>Rigetto dei trapianti</b>: le MHC del donatore sono \"estranee\" al ricevente; si usano farmaci immunosoppressori e si cerca la massima compatibilità HLA.</li>
<li><b>Tumori</b>: il sistema (NK, T citotossici) elimina molte cellule tumorali nascenti; i tumori che sopravvivono spesso \"spengono\" i linfociti. Le <b>immunoterapie</b> (Nobel per la medicina 2018 a Allison e Honjo) sbloccano questi freni.</li>
</ul>`
    },
    {
      type: "example",
      title: "Perché ti ammali di influenza ogni anno?",
      html: `<p>Il virus dell'influenza ha il genoma a RNA e <b>muta</b> molto: le proteine di superficie (emoagglutinina e neuraminidasi) cambiano poco alla volta (<i>deriva antigenica</i>). Gli anticorpi prodotti l'anno scorso riconoscono male la \"chiave\" di quest'anno. In più, ogni tanto due virus di specie diverse si scambiano segmenti genici (<i>spostamento antigenico</i>) e nasce un ceppo molto nuovo, contro cui nessuno ha memoria: così nascono le pandemie (1918, 1957, 1968, 2009). Per questo ogni anno l'OMS indica i ceppi più probabili e il vaccino viene riformulato; il morbillo, invece, cambia pochissimo, e un vaccino basta per tutta la vita.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: vaccini e disfunzioni",
      questions: [
        { type: "mc", q: "Perché il vaccino antinfluenzale va rinnovato ogni anno?", options: ["Il virus muta gli antigeni di superficie", "Gli anticorpi durano solo una settimana", "Il vaccino è un antibiotico", "Il timo si esaurisce ogni anno"], answer: 0, explain: "La deriva antigenica rende meno efficace la memoria dell'anno precedente." },
        { type: "tf", q: "Un'allergia è una risposta immunitaria eccessiva contro una sostanza innocua.", answer: true, explain: "Nel tipo I gli allergeni legano IgE sui mastociti, che liberano istamina." },
        { type: "num", q: "Qual è la soglia di gregge (in %) per un patogeno con R₀ = 10?", answer: 90, tol: 0.5, unit: "%", explain: "1 − 1/10 = 0,90 = 90%." }
      ]
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li>Tre livelli: <b>barriere</b> → <b>difesa innata</b> (fagociti, NK, complemento, infiammazione, febbre) → <b>difesa adattativa</b> (B e T, anticorpi).</li>
<li>L'adattativa è <b>specifica</b> (selezione clonale) e ha <b>memoria</b>: risposta secondaria rapida e forte.</li>
<li><b>Vaccino</b> = antigene senza malattia → cellule della memoria. <b>Immunità di gregge</b>: soglia = 1 − 1/R₀.</li>
<li>Gli <b>antibiotici</b> agiscono sui batteri, non sui virus.</li>
<li>Gli errori del sistema: allergie (IgE, istamina), autoimmunità, immunodeficienze (HIV), rigetto.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il sistema immunitario",
      intro: "Un sistema così complesso si capisce meglio con una buona analogia.",
      tabs: [
        { label: "🏰 Il castello", html: "<p>Il corpo è un castello. <b>Pelle e mucose</b> sono le mura, con il fossato (acido, lisozima). Se un nemico entra, i <b>soldati di guardia</b> (neutrofili, macrofagi, NK: difesa innata) lo attaccano subito, senza sapere chi sia. Nel frattempo i <b>messaggeri</b> (cellule dendritiche) portano al comando (linfonodi) un campione del nemico: lì si cercano le <b>unità speciali</b> addestrate proprio per quel nemico (linfociti B e T specifici). Queste si moltiplicano, producono le \"frecce\" (anticorpi) o attaccano direttamente. Finita la battaglia, restano i <b>veterani</b> (cellule della memoria) pronti a riconoscere lo stesso nemico.</p>" },
        { label: "🔑 Chiave e serratura", html: "<p>Un anticorpo è una <b>serratura</b> a forma di Y progettata per aprirsi (legarsi) solo con una <b>chiave</b> (l'antigene). Il corpo costruisce a caso miliardi di serrature diverse; quando una trova una chiave che si adatta, quel linfocita viene selezionato e copiato in migliaia di esemplari. Per questo i vaccini devono mostrare l'antigene giusto, e per questo un virus che muta la propria \"chiave\" (influenza) può sfuggire alle serrature già pronte.</p>" },
        { label: "📰 La polizia e la fotografia segnaletica", html: "<p>Una cellula infettata espone su MHC un frammento (una \"fotografia\") di quello che ha dentro. Il linfocita T è un poliziotto con una foto del ricercato: se ne trova una corrispondente su una cellula, la elimina. Se una cellula non espone alcuna foto (alcuni virus e tumori nascondono le MHC), arrivano le cellule NK, che reagiscono proprio all'<i>assenza</i> del documento.</p>" },
        { label: "📈 Vaccino come allenamento", html: "<p>Prima del vaccino il corpo è un atleta che non si è mai allenato: al primo scontro ci mette tempo a organizzarsi (risposta primaria, settimane). Il vaccino è un <b>allenamento</b> con un avversario finto: l'atleta impara e costruisce \"memoria muscolare\". Il giorno della gara vera la risposta è subito pronta (secondaria, giorni) e più forte. Il richiamo è come un secondo allenamento per consolidare.</p>" }
      ]
    },
    {
      type: "curiosity",
      title: "Variolazione, Lady Montagu e Jenner",
      html: `<p>Prima di Jenner si praticava già la <b>variolazione</b>: inoculare di proposito del materiale di pustole di vaiolo leggero, per ottenere una forma lieve e l'immunità. Era usata in Cina, India e Turchia; nel 1721 Lady Mary Wortley Montagu, moglie dell'ambasciatore inglese a Costantinopoli, la fece praticare ai suoi figli e la introdusse in Inghilterra. Aveva un rischio di morte intorno al 1-2% (contro il 20-30% del vaiolo naturale), ma contagiava. Il vaccino di Jenner (1796) usava un virus di un'altra specie, innocuo per l'uomo, che stimolava la stessa difesa. Nella sua rivoluzione c'è il principio di tutta la vaccinologia.</p>`
    },
    {
      type: "curiosity",
      title: "Perché i bambini prendono tanti raffreddori",
      html: `<p>Il neonato è protetto dalle <b>IgG materne</b> passate attraverso la placenta e dalle <b>IgA</b> del latte, ma questa protezione svanisce in 3-6 mesi, ed è la ragione per cui i vaccini si fanno a partire dai 2 mesi, quando il sistema immunitario del bambino comincia a rispondere. Il sistema immunitario poi \"impara\" i microbi per tutta l'infanzia: i bambini si ammalano spesso di raffreddori (esistono oltre 200 virus diversi) proprio perché stanno costruendo il loro repertorio di memoria. Con l'età, poi, il timo si riduce (<b>involuzione timica</b>) e la risposta ai nuovi antigeni si indebolisce: ecco perché gli anziani rispondono peggio ai vaccini e hanno bisogno di dosi più forti per l'influenza.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: il sistema immunitario",
      nodes: [
        { id: "barr", label: "Barriere", x: 15, y: 12, color: "#16a34a", html: "Pelle, mucose, acidità, microbiota.", why: "Lister (1867) applicò la teoria dei germi di Pasteur all'antisepsi in chirurgia, riducendo drasticamente la mortalità post-operatoria: capire che i germi vanno tenuti fuori è nato così." },
        { id: "inn", label: "Immunità innata", x: 50, y: 12, color: "#f59e0b", html: "Fagociti, NK, complemento, infiammazione, febbre.", why: "Metchnikoff (1882) scoprì la fagocitosi; Janeway (1989) intuì che l'innata riconosce \"pattern\" microbici, e Hoffmann, Beutler e Steinman (Nobel 2011) lo dimostrarono con i recettori Toll-like e le cellule dendritiche." },
        { id: "ada", label: "Immunità adattativa", x: 85, y: 12, color: "#2563eb", html: "Linfociti B e T, specifici e con memoria.", why: "Von Behring e Kitasato (1890) scoprirono l'\"antitossina\" nel siero; Ehrlich (1900) propose la teoria delle catene laterali; Burnet (1957) la selezione clonale." },
        { id: "ant", label: "Anticorpi", x: 30, y: 52, color: "#a855f7", html: "Proteine a Y con siti di legame specifici.", why: "Porter ed Edelman (Nobel 1972) ne determinarono la struttura; Tonegawa (Nobel 1987) spiegò come si genera una diversità tanto grande con un numero limitato di geni." },
        { id: "vac", label: "Vaccini", x: 70, y: 52, color: "#ef4444", html: "Antigene senza malattia: crea memoria.", why: "Jenner (1796), poi Pasteur (1885). Oggi, con la biologia molecolare, si progettano vaccini sulla base della sequenza genetica del patogeno (mRNA, subunità)." },
        { id: "gre", label: "Immunità di gregge", x: 50, y: 88, color: "#0ea5e9", html: "Soglia = 1 − 1/R₀.", why: "Nasce dalla matematica delle epidemie: Kermack e McKendrick (1927) formularono i modelli compartimentali SIR, da cui discende il concetto di soglia di immunizzazione." }
      ],
      edges: [["barr", "inn", "se superata attiva l'"], ["inn", "ada", "attiva l'"], ["ada", "ant", "produce"], ["ada", "vac", "è allenata dai"], ["vac", "gre", "su larga scala dà la"], ["ant", "vac", "sono indotti dai"]]
    }
  ],
  glossary: [
    { t: "Patogeno", d: "Agente (virus, batterio, fungo, parassita) capace di causare malattia." },
    { t: "Antigene", d: "Molecola riconosciuta come estranea che induce una risposta immunitaria specifica." },
    { t: "Fagocitosi", d: "Processo con cui una cellula (fagocita) inglobando una particella la digerisce." },
    { t: "Complemento", d: "Gruppo di proteine plasmatiche che marcano e uccidono i patogeni in cascata." },
    { t: "Linfociti B", d: "Cellule dell'immunità umorale: diventano plasmacellule e producono anticorpi." },
    { t: "Linfociti T", d: "Cellule dell'immunità cellulare: helper (CD4), citotossici (CD8) e regolatori." },
    { t: "Anticorpo", d: "Proteina a Y (immunoglobulina) che lega specificamente un antigene." },
    { t: "Selezione clonale", d: "Moltiplicazione del solo linfocita che riconosce l'antigene." },
    { t: "Cellule della memoria", d: "Linfociti longevi che permettono una risposta secondaria rapida." },
    { t: "Vaccino", d: "Preparato che presenta un antigene senza causare la malattia per indurre memoria immunitaria." },
    { t: "Immunità di gregge", d: "Protezione indiretta di una popolazione quando una quota sufficiente è immune." },
    { t: "MHC / HLA", d: "Proteine di superficie che presentano antigeni ai linfociti T e distinguono il sé dal non sé." },
    { t: "Autoimmunità", d: "Reazione del sistema immunitario contro componenti dell'organismo stesso." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di questi NON è una barriera di prima linea?", options: ["Anticorpi IgG", "Pelle", "Acidità dello stomaco", "Muco con ciglia"], answer: 0, explain: "Gli anticorpi IgG fanno parte della difesa adattativa, non delle barriere." },
      { type: "mc", q: "Quale cellula inglobando i microbi li digerisce?", options: ["Macrofago", "Globulo rosso", "Piastrina", "Plasmacellula"], answer: 0, explain: "I macrofagi e i neutrofili sono fagociti." },
      { type: "tf", q: "Gli antibiotici sono efficaci contro i virus del raffreddore.", answer: false, explain: "Gli antibiotici agiscono su strutture dei batteri; i virus non le hanno." },
      { type: "mc", q: "Che cosa spiega la rapidità della risposta secondaria dopo la vaccinazione?", options: ["Le cellule della memoria", "La febbre", "Le barriere cutanee", "Il complemento"], answer: 0, explain: "I linfociti della memoria riconoscono subito l'antigene e si moltiplicano in giorni." },
      { type: "mc", q: "Nello shock anafilattico si somministra...", options: ["adrenalina", "un antibiotico", "un vaccino", "insulina"], answer: 0, explain: "L'adrenalina contrasta il calo di pressione e la broncocostrizione." },
      { type: "num", q: "Per R₀ = 4, quale percentuale minima di popolazione deve essere immune per l'immunità di gregge?", answer: 75, tol: 0.5, unit: "%", explain: "1 − 1/4 = 0,75 = 75%." },
      { type: "mc", q: "Quale classe di anticorpi è tipica delle allergie?", options: ["IgE", "IgG", "IgM", "IgA"], answer: 0, explain: "Le IgE si legano ai mastociti e provocano il rilascio di istamina." },
      { type: "mc", q: "L'HIV infetta principalmente...", options: ["I linfociti T helper (CD4)", "I globuli rossi", "I neutrofili", "Le piastrine"], answer: 0, explain: "L'eliminazione dei CD4 indebolisce tutta la risposta adattativa." },
      { type: "tf", q: "Un vaccino a mRNA modifica il DNA delle cellule.", answer: false, explain: "L'mRNA è tradotto nel citoplasma e poi degradato; non entra nel nucleo né si integra nel genoma." },
      { type: "order", q: "Metti in ordine una risposta immunitaria a un nuovo virus.", items: ["Il virus supera le barriere", "Fagociti e interferoni agiscono (risposta innata)", "Le cellule dendritiche presentano l'antigene ai linfociti", "I linfociti specifici si moltiplicano (selezione clonale)", "Anticorpi e T citotossici eliminano il virus; restano le cellule della memoria"], explain: "La risposta innata è immediata; quella adattativa richiede giorni, ma poi lascia memoria." }
    ]
  }
});
