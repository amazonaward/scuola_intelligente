TOPIC('it', {
  id: "l1-geo-risorse-sostenibilita",
  title: "Risorse e sviluppo sostenibile",
  intro: "Acqua da bere, energia per accendere la luce, cibo nel piatto: sono le tre risorse da cui dipende la vita di ogni persona. Ma sono distribuite in modo disuguale e consumate a un ritmo che il pianeta fatica a sostenere. In questa lezione vediamo dove sono, chi le usa, quali problemi creano e come l'<b>Agenda 2030</b> propone di conciliare sviluppo, giustizia e ambiente.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è una risorsa",
      html: `<p>Una <b>risorsa</b> è qualsiasi elemento della natura che gli esseri umani usano per soddisfare i propri bisogni. Si distinguono due grandi categorie:</p>
<ul>
<li><b>Risorse rinnovabili</b>: si rigenerano in tempi brevi rispetto ai consumi, se usate con misura. Acqua dolce, legno, suolo fertile, vento, luce solare, pesci. Attenzione: rinnovabile non significa infinito. Una foresta tagliata più in fretta di quanto ricresca, o un banco di pesci sfruttato troppo, si esaurisce.</li>
<li><b>Risorse non rinnovabili</b>: si sono formate in milioni di anni e non si ricostituiscono su scala umana. Petrolio, gas naturale, carbone, minerali (ferro, rame, litio, terre rare).</li>
</ul>
<p>Ogni risorsa ha una <b>distribuzione geografica</b> che non coincide con quella della popolazione: il petrolio si concentra nel Golfo Persico, in Russia, Nord America, Venezuela; l'acqua dolce abbonda in Canada, Brasile, Russia, ma scarseggia nel Medio Oriente e nel Sahel; il litio si trova nel \"triangolo\" Cile-Argentina-Bolivia e in Australia; il cobalto è per più di due terzi in Repubblica Democratica del Congo. Da queste differenze nascono commercio, dipendenze, conflitti e cooperazione.</p>`
    },
    {
      type: "widget",
      title: "Attività: rinnovabile o non rinnovabile?",
      widget: "classify",
      options: {
        groups: ["Rinnovabile", "Non rinnovabile"],
        items: [
          ["☀️ Luce del Sole", 0],
          ["🛢️ Petrolio", 1],
          ["💨 Vento", 0],
          ["⛏️ Carbone", 1],
          ["🌊 Moto ondoso", 0],
          ["⛽ Gas naturale", 1],
          ["🌋 Calore della Terra (geotermia)", 0],
          ["⚛️ Uranio", 1]
        ]
      },
      caption: "Il confine è sul tempo di rigenerazione: l'uranio è un minerale, non si rigenera; il legno sì, ma solo se non tagliamo più di quanto ricresce."
    },
    {
      type: "text",
      title: "2. L'acqua",
      html: `<p>La Terra è il \"pianeta blu\", ma l'acqua utilizzabile è pochissima. Il <b>97,5%</b> dell'acqua del pianeta è <b>salata</b> (mari e oceani). Il restante <b>2,5%</b> è dolce, ma circa due terzi di questa è bloccata in <b>ghiacciai e calotte polari</b>, e quasi tutto il resto è nelle <b>falde sotterranee</b>. Fiumi, laghi e zone umide contengono meno dello <b>0,01%</b> di tutta l'acqua della Terra, eppure sono la fonte più accessibile.</p>
<p>I principali <b>usi</b> dell'acqua dolce nel mondo: circa il <b>70% per l'agricoltura</b> (irrigazione), circa il <b>20% per l'industria</b> e circa il <b>10% per usi domestici</b> (bere, cucinare, lavarsi). In Italia ogni abitante consuma in casa circa 215-220 litri di acqua al giorno, tra i valori più alti d'Europa.</p>
<p><b>I problemi</b>:</p>
<ul>
<li><b>Accesso</b>: nel mondo circa <b>2,2 miliardi</b> di persone non hanno accesso ad acqua potabile gestita in sicurezza e circa <b>3,5 miliardi</b> a servizi igienici sicuri (OMS/UNICEF). Ogni giorno bambini e donne, soprattutto in Africa subsahariana, camminano per ore per prendere l'acqua.</li>
<li><b>Stress idrico</b>: quando i prelievi superano buona parte delle risorse disponibili. Colpisce Medio Oriente e Nord Africa, India, Asia centrale, la California e, sempre più, l'Europa mediterranea.</li>
<li><b>Inquinamento</b>: scarichi industriali, fertilizzanti, pesticidi, plastica e fogne non depurate.</li>
<li><b>Sovrasfruttamento</b>: il caso più drammatico è il <b>Lago d'Aral</b>, in Asia centrale: dagli anni '60 l'URSS deviò i fiumi Amu Darya e Syr Darya per irrigare il cotone, e il lago, che era il quarto più grande del mondo, si è ridotto a una piccola frazione della sua estensione, lasciando un deserto salato.</li>
<li><b>Conflitti</b>: i fiumi che attraversano più Stati (Nilo, Tigri e Eufrate, Giordano, Mekong, Indo) sono spesso contesi. La grande diga etiope sul Nilo Azzurro (GERD) è oggetto di tensioni con Egitto e Sudan.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Dove si trova l'acqua della Terra",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="300" y="24" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Tutta l'acqua della Terra</text>
<rect x="40" y="40" width="520" height="34" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2"/>
<rect x="40" y="40" width="13" height="34" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
<text x="300" y="63" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">97,5% salata (mari e oceani)</text>
<text x="40" y="100" font-size="15" fill="#0369a1" font-weight="bold">2,5% dolce</text>
<text x="300" y="130" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Dell'acqua dolce</text>
<rect x="40" y="145" width="520" height="34" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="40" y="145" width="360" height="34" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<rect x="400" y="145" width="155" height="34" fill="#7dd3fc" stroke="#0369a1" stroke-width="2"/>
<rect x="555" y="145" width="5" height="34" fill="#1d4ed8"/>
<text x="220" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">circa 69%: ghiacciai</text>
<text x="478" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">circa 30%: falde</text>
<text x="560" y="205" font-size="14" text-anchor="end" fill="#1d4ed8" font-weight="bold">meno dell'1%: fiumi, laghi, umidità</text>
<text x="40" y="250" font-size="15" fill="#111827">L'acqua facilmente accessibile (fiumi, laghi, falde poco profonde)</text>
<text x="40" y="272" font-size="15" fill="#111827">è una frazione minuscola del totale: da qui l'importanza di non sprecarla.</text>
</svg>`,
      caption: "Dati arrotondati (USGS e UNESCO). Le barre non sono in scala perfetta."
    },
    {
      type: "example",
      title: "Esempio pratico: l'acqua nascosta nei prodotti",
      html: `<p>L'<b>impronta idrica</b> (<i>water footprint</i>) misura l'acqua usata per produrre un bene, anche se non la vedi. Ordini di grandezza (stime del Water Footprint Network):</p>
<table>
<tr><th>Prodotto</th><th>Acqua necessaria (circa)</th></tr>
<tr><td>1 tazza di caffè</td><td>140 litri</td></tr>
<tr><td>1 kg di pane</td><td>1.600 litri</td></tr>
<tr><td>1 kg di formaggio</td><td>5.000 litri</td></tr>
<tr><td>1 kg di carne bovina</td><td>oltre 15.000 litri</td></tr>
<tr><td>1 paio di jeans</td><td>7.000-10.000 litri</td></tr>
</table>
<p>Una doccia di 5 minuti usa circa 50-60 litri; per produrre 1 kg di carne bovina serve l'acqua di circa 250 docce. Non significa non mangiare mai carne, ma che le scelte alimentari hanno un grande peso sull'acqua: una dieta con più legumi, cereali e verdure ha un'impronta idrica molto più bassa.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: risorse e acqua",
      questions: [
        { type: "mc", q: "Quale percentuale dell'acqua della Terra è dolce?", options: ["Circa 2,5%", "Circa 25%", "Circa 50%"], answer: 0, explain: "Il 97,5% è salata; dell'acqua dolce, la gran parte è nei ghiacciai e nelle falde." },
        { type: "mc", q: "In quale settore si usa la maggior parte dell'acqua dolce nel mondo?", options: ["Industria", "Agricoltura", "Usi domestici"], answer: 1, explain: "Circa il 70% dei prelievi serve per irrigare i campi." },
        { type: "tf", q: "Il petrolio è una risorsa rinnovabile perché la Terra ne produce continuamente.", answer: false, explain: "Si è formato in milioni di anni: su scala umana non è rinnovabile." }
      ]
    },
    {
      type: "text",
      title: "3. L'energia",
      html: `<p>L'energia muove industrie, trasporti, case, ospedali. Nel mondo l'<b>80% circa</b> dell'energia primaria viene ancora da <b>combustibili fossili</b>: <b>petrolio</b> (circa 30%), <b>carbone</b> (circa 26%) e <b>gas naturale</b> (circa 23%). Il resto è <b>idroelettrico</b>, <b>nucleare</b>, <b>solare</b>, <b>eolico</b>, <b>biomasse</b>.</p>
<p>La distribuzione dei consumi è molto ineguale: in media un abitante degli Stati Uniti o del Canada consuma <b>oltre cinque volte</b> l'energia di un cittadino africano o indiano. Circa <b>700 milioni</b> di persone nel mondo non hanno elettricità e circa <b>2 miliardi</b> cucinano con legna o carbone in modo inquinante, con gravi danni alla salute.</p>
<p><b>I problemi</b>:</p>
<ul>
<li><b>Cambiamento climatico</b>: bruciare fossili libera CO₂ (due terzi circa delle emissioni di gas serra deriva dall'energia).</li>
<li><b>Dipendenza e geopolitica</b>: i Paesi importatori dipendono da quelli esportatori. L'Italia importa quasi il 75-80% dell'energia che consuma. La <b>crisi petrolifera del 1973</b> (embargo dei Paesi arabi dell'OPEC) fece quadruplicare il prezzo del petrolio e causò austerity (le \"domeniche a piedi\"); nel 2022 l'invasione russa dell'Ucraina ha mostrato quanto l'Europa fosse legata al gas russo.</li>
<li><b>Esaurimento</b> delle risorse non rinnovabili e impatti ambientali dell'estrazione (marea nera, deforestazione, miniere).</li>
</ul>
<p>La <b>transizione energetica</b> è il passaggio dai fossili alle fonti rinnovabili e a un uso più efficiente. Le fonti <b>solare</b> ed <b>eolica</b> sono cresciute rapidissimamente: il costo del fotovoltaico è calato di oltre l'80% in dieci anni (2010-2020) e le rinnovabili producono oggi circa il <b>30%</b> dell'elettricità mondiale (e oltre il 40% in Italia, soprattutto con idroelettrico, solare, eolico e geotermia in Toscana, dove nel 1904 a Larderello si accese la prima lampadina alimentata da energia geotermica).</p>
<p>Non esiste una fonte \"perfetta\": il <b>solare</b> e l'<b>eolico</b> sono intermittenti (servono accumuli e reti); il <b>nucleare</b> non emette CO₂ ma produce scorie radioattive e ha costi e tempi elevati (in Italia due referendum, nel 1987 e nel 2011, hanno detto no); l'<b>idroelettrico</b> altera i fiumi; le <b>biomasse</b> competono con il cibo. Per questo si parla di un <b>mix energetico</b> e di <b>efficienza</b> (la fonte più economica è l'energia che non si spreca).</p>`
    },
    {
      type: "svg",
      title: "Il mix energetico mondiale",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Da dove viene l'energia primaria nel mondo (valori arrotondati)</text>
<rect x="40" y="50" width="300" height="30" fill="#1f2937"/>
<text x="350" y="72" font-size="15" fill="#111827">Petrolio ~30%</text>
<rect x="40" y="95" width="260" height="30" fill="#6b7280"/>
<text x="310" y="117" font-size="15" fill="#111827">Carbone ~26%</text>
<rect x="40" y="140" width="230" height="30" fill="#f97316"/>
<text x="280" y="162" font-size="15" fill="#111827">Gas naturale ~23%</text>
<rect x="40" y="185" width="70" height="30" fill="#2563eb"/>
<text x="120" y="207" font-size="15" fill="#111827">Idroelettrico ~7%</text>
<rect x="40" y="230" width="40" height="30" fill="#a855f7"/>
<text x="90" y="252" font-size="15" fill="#111827">Nucleare ~4%</text>
<rect x="300" y="230" width="90" height="30" fill="#16a34a"/>
<text x="400" y="252" font-size="15" fill="#111827">Altre rinnovabili ~10%</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#6b7280">Stima: i fossili restano circa l'80% del totale; le percentuali variano di anno in anno.</text>
</svg>`,
      caption: "L'energia primaria include tutto: elettricità, trasporti, riscaldamento. La quota di rinnovabili nella sola elettricità è molto più alta (circa 30%)."
    },
    {
      type: "text",
      title: "4. Il cibo",
      html: `<p>Nel mondo si produce cibo a sufficienza per tutti (in teoria per circa 10 miliardi di persone, secondo la FAO), eppure circa <b>733 milioni</b> di persone (circa 9% dell'umanità, dati FAO 2023) <b>soffrono la fame</b>, soprattutto in Africa subsahariana e Asia meridionale, e quasi <b>2,8 miliardi</b> non possono permettersi una dieta sana. Contemporaneamente più di <b>un adulto su otto</b> nel mondo è obeso. È il paradosso della <b>malnutrizione</b>: non solo fame, ma anche carenze e eccessi. La fame ha cause più <b>politiche ed economiche</b> che agricole: povertà, guerre, instabilità dei prezzi, eventi climatici estremi (come ha spiegato Amartya Sen, che ha mostrato come le grandi carestie spesso avvengano senza una reale mancanza di cibo).</p>
<ul>
<li><b>Rivoluzione verde</b> (anni '50-'70): con sementi selezionate, concimi, pesticidi e irrigazione, l'agronomo <b>Norman Borlaug</b> (Nobel per la pace 1970) e altri fecero aumentare molto i raccolti di grano e riso in Messico, India e Asia, evitando carestie per centinaia di milioni di persone. Ma ha causato anche inquinamento da agrochimici, perdita di biodiversità e forte consumo d'acqua.</li>
<li><b>Spreco alimentare</b>: secondo l'UNEP, nel 2022 sono state sprecate circa <b>1 miliardo di tonnellate</b> di cibo, quasi il 19% di quello disponibile ai consumatori (più quello perso nei campi e lungo la filiera). Sprecare cibo significa sprecare anche acqua, terra ed energia, e causare circa l'8-10% delle emissioni mondiali di gas serra.</li>
<li><b>Allevamenti</b>: richiedono molta terra, acqua e mangimi, ed emettono metano; l'allevamento è responsabile di circa il 12-15% delle emissioni globali.</li>
<li><b>Pesca</b>: più di un terzo degli stock ittici mondiali è pescato oltre i limiti biologici di rigenerazione (sovrapesca). L'acquacoltura oggi fornisce circa la metà del pesce che mangiamo.</li>
<li><b>Suolo</b>: erosione, desertificazione, perdita di fertilità. Un terzo dei suoli mondiali è degradato; servono secoli per formare pochi centimetri di suolo fertile.</li>
<li><b>Land grabbing</b>: acquisto o affitto di grandi estensioni di terra in Paesi poveri da parte di Stati o società straniere.</li>
</ul>
<p>Le soluzioni ruotano intorno a un'<b>agricoltura sostenibile</b> (rotazioni, agricoltura biologica e di precisione, agroecologia), alla riduzione dello spreco, a diete più ricche di vegetali, alla filiera corta e al sostegno dei piccoli produttori.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… cosa mangiamo ha una geografia?",
      html: `<p>Il <b>pomodoro</b>, la <b>patata</b>, il <b>mais</b>, il cacao e il peperoncino vengono dalle <b>Americhe</b>: prima del 1492 la cucina italiana non conosceva il pomodoro! Il <b>caffè</b> viene dall'Etiopia, il <b>riso</b> dall'Asia, la <b>pasta secca</b> si diffuse in Sicilia e nell'Italia meridionale dal Medioevo. Oggi più della metà delle calorie mondiali viene da soltanto <b>tre cereali</b>: riso, grano e mais. Un'alimentazione fondata su poche varietà è fragile: una malattia può distruggere raccolti interi, come fece la <b>peronospora</b> della patata in Irlanda (1845-1849), che causò circa un milione di morti e portò a oltre un milione di emigrazioni.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la bottiglia d'acqua costa più dell'acqua del rubinetto?",
      html: `<p>In Italia l'acqua del rubinetto costa in media circa <b>2 euro ogni 1.000 litri</b> (1 mc), mentre l'acqua in bottiglia può costare mille volte di più. L'Italia è tra i primi Paesi al mondo per consumo di acqua in bottiglia (oltre 200 litri a testa l'anno), con un grande impatto di plastica e trasporti, mentre l'acqua del rubinetto è sottoposta a controlli molto frequenti. Le <b>case dell'acqua</b> e le borracce sono tra i modi più semplici per ridurre rifiuti ed emissioni.</p>`
    },
    {
      type: "text",
      title: "5. Lo sviluppo sostenibile",
      html: `<p>Nel <b>1972</b> il rapporto <i>I limiti dello sviluppo</i> (commissionato dal Club di Roma, fondato dall'italiano <b>Aurelio Peccei</b>) avvertì che una crescita infinita su un pianeta finito è impossibile. Nel <b>1987</b> il rapporto <i>Il nostro futuro comune</i> (<b>Rapporto Brundtland</b>, dal nome della presidente della commissione, la norvegese Gro Harlem Brundtland) definì lo <b>sviluppo sostenibile</b>: <i>\"uno sviluppo che soddisfi i bisogni del presente senza compromettere la possibilità delle generazioni future di soddisfare i propri\"</i>.</p>
<p>Tre dimensioni (<b>i tre pilastri</b>), che si devono tenere insieme:</p>
<ul>
<li>🌍 <b>ambientale</b>: non consumare le risorse più in fretta di quanto si rigenerano, ridurre inquinamento ed emissioni;</li>
<li>⚖️ <b>sociale</b>: equità, lavoro dignitoso, salute, istruzione, parità;</li>
<li>💶 <b>economica</b>: prosperità e occupazione durevoli.</li>
</ul>
<p><b>Le tappe</b>: Conferenza ONU di <b>Rio de Janeiro</b> (1992, \"Summit della Terra\"), <b>Protocollo di Kyoto</b> (1997), Obiettivi di sviluppo del Millennio (2000-2015), <b>Accordo di Parigi</b> sul clima (2015) e, il 25 settembre 2015, l'<b>Agenda 2030</b> per lo sviluppo sostenibile, firmata da <b>193</b> Paesi dell'ONU: <b>17 Obiettivi</b> (SDGs, <i>Sustainable Development Goals</i>) e <b>169 traguardi</b> da raggiungere entro il <b>2030</b>.</p>
<p>Uno strumento utile è l'<b>impronta ecologica</b>, l'area di terra e mare necessaria per produrre le risorse che una persona o un Paese consuma e per assorbirne i rifiuti. Il <b>giorno del sovraconsumo</b> (<i>Earth Overshoot Day</i>) indica il giorno dell'anno in cui l'umanità ha già consumato tutte le risorse che la Terra può rigenerare in un anno: nel 2024 è caduto il <b>1° agosto</b>. Se tutti vivessero come un italiano ci vorrebbero circa 2,7 pianeti; come un cittadino medio degli USA circa 5.</p>`
    },
    {
      type: "svg",
      title: "I 17 Obiettivi dell'Agenda 2030",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="300" y="22" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Agenda 2030: tre gruppi di obiettivi</text>
<rect x="20" y="40" width="175" height="240" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="107" y="65" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Persone</text>
<text x="30" y="92" font-size="14" fill="#111827">1 Sconfiggere la povertà</text>
<text x="30" y="116" font-size="14" fill="#111827">2 Fame zero</text>
<text x="30" y="140" font-size="14" fill="#111827">3 Salute e benessere</text>
<text x="30" y="164" font-size="14" fill="#111827">4 Istruzione di qualità</text>
<text x="30" y="188" font-size="14" fill="#111827">5 Parità di genere</text>
<text x="30" y="212" font-size="14" fill="#111827">10 Ridurre disuguaglianze</text>
<text x="30" y="236" font-size="14" fill="#111827">16 Pace e giustizia</text>
<rect x="213" y="40" width="175" height="240" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="300" y="65" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Pianeta</text>
<text x="223" y="92" font-size="14" fill="#111827">6 Acqua pulita</text>
<text x="223" y="116" font-size="14" fill="#111827">11 Città sostenibili</text>
<text x="223" y="140" font-size="14" fill="#111827">12 Consumo responsabile</text>
<text x="223" y="164" font-size="14" fill="#111827">13 Lotta al clima</text>
<text x="223" y="188" font-size="14" fill="#111827">14 Vita sott'acqua</text>
<text x="223" y="212" font-size="14" fill="#111827">15 Vita sulla terra</text>
<rect x="406" y="40" width="175" height="240" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="493" y="65" font-size="15" text-anchor="middle" fill="#92400e" font-weight="bold">Prosperità e partnership</text>
<text x="416" y="92" font-size="14" fill="#111827">7 Energia pulita</text>
<text x="416" y="116" font-size="14" fill="#111827">8 Lavoro dignitoso</text>
<text x="416" y="140" font-size="14" fill="#111827">9 Industria e innovazione</text>
<text x="416" y="164" font-size="14" fill="#111827">17 Partnership</text>
</svg>`,
      caption: "I 17 obiettivi sono interconnessi: nessuno può essere raggiunto da solo (per esempio l'istruzione delle ragazze riduce povertà, fame e mortalità infantile)."
    },
    {
      type: "example",
      title: "Esempio pratico: la tua impronta quotidiana",
      html: `<p>Prova a leggere la tua giornata con gli occhi dello sviluppo sostenibile:</p>
<ul>
<li><b>Colazione</b>: latte, caffè, pane: quanta acqua e quanta energia ci sono dietro? Ogni tazza di caffè \"vale\" circa 140 litri d'acqua.</li>
<li><b>Tragitto verso scuola</b>: a piedi o in bici non emetti CO₂; in autobus emetti circa un terzo rispetto all'auto per persona; in auto con una sola persona, molto di più.</li>
<li><b>Smartphone e computer</b>: contengono cobalto, litio e terre rare; allungarne la vita utile di un anno riduce molto l'impatto (la maggior parte delle emissioni di uno smartphone avviene durante la produzione, non nell'uso).</li>
<li><b>Abbigliamento</b>: un paio di jeans richiede 7.000-10.000 litri d'acqua; comprare usato o riparare riduce l'impatto.</li>
<li><b>Pranzo</b>: spreco o piatto pulito? Quasi un quinto del cibo che compriamo finisce nella spazzatura.</li>
</ul>
<p>Non si tratta di sentirsi in colpa ma di scegliere in modo consapevole: i grandi cambiamenti richiedono scelte collettive e politiche, ma le abitudini individuali, moltiplicate per milioni di persone, contano.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la sostenibilità",
      intro: "La sostenibilità è un'idea astratta: ecco tre immagini per afferrarla.",
      tabs: [
        {
          label: "🏦 Il conto in banca della natura",
          html: `<p>La natura è un <b>conto in banca</b>. Le risorse rinnovabili sono come gli <b>interessi</b> (foreste che ricrescono, pesci che si riproducono, acqua che si ricicla), le non rinnovabili sono il <b>capitale</b> (petrolio, minerali). Uno stile di vita sostenibile spende solo gli interessi, senza intaccare il capitale. Il \"giorno del sovraconsumo\" è il momento in cui l'umanità ha già speso tutti gli interessi dell'anno e inizia a vivere \"in rosso\": consumiamo oggi il capitale che servirebbe ai nostri figli.</p>`
        },
        {
          label: "🛁 La vasca e il rubinetto",
          html: `<p>Una falda acquifera è come una <b>vasca da bagno</b>: la pioggia che si infiltra è il rubinetto, i pozzi che pompano sono lo scarico. Se si pompa più acqua di quanta ne entra, il livello scende; se continua, la vasca si svuota (come è successo in molte zone dell'India, della California, della Pianura Padana). Quando la falda è vicino al mare, nel vuoto entra l'acqua salata: il pozzo diventa inutilizzabile. L'idea di <b>sostenibile</b> è prelevare al massimo quanto la natura reintegra.</p>`
        },
        {
          label: "🌐 Il gioco della sostenibilità",
          html: `<p>Immagina un villaggio di 10 pescatori che condividono un lago con 100 pesci che si riproducono. Se ogni pescatore ne prende 5 all'anno, il lago ne perde 50 e i pesci si riducono; se ne prendono 2, il lago si riprende. La <b>\"tragedia dei beni comuni\"</b> (descritta dall'ecologo Garrett Hardin nel 1968) nasce quando ognuno pensa solo al proprio vantaggio. La premio Nobel per l'economia <b>Elinor Ostrom</b> (2009) ha mostrato che molte comunità sono riuscite a gestire bene risorse comuni (pascoli, foreste, acqua) con <b>regole condivise e controllo reciproco</b>.</p>`,
          widget: "match",
          options: { pairs: [["Rapporto Brundtland", "1987: definizione di sviluppo sostenibile"], ["Agenda 2030", "2015: 17 obiettivi per i Paesi ONU"], ["Accordo di Parigi", "2015: limitare il riscaldamento a 1,5-2 °C"], ["Protocollo di Kyoto", "1997: primi impegni sulle emissioni"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: risorse, bisogni e sostenibilità",
      nodes: [
        { id: "risorse", label: "Risorse naturali", x: 50, y: 6, color: "#16a34a", html: "Rinnovabili e non rinnovabili.", why: "Le risorse sono tali solo in relazione alla tecnologia: l'uranio non era una risorsa prima della fisica nucleare, il petrolio lo divenne con il motore a scoppio nell'Ottocento. Ciò che la società può usare cambia con le conoscenze." },
        { id: "acqua", label: "Acqua", x: 15, y: 32, color: "#2563eb", html: "Dolce, scarsa e irregolarmente distribuita.", why: "L'acqua dolce accessibile è meno dell'1% del totale: l'agricoltura ne usa il 70%, e il riscaldamento globale sta spostando le piogge e sciogliendo i ghiacciai che alimentano i grandi fiumi dell'Asia." },
        { id: "energia", label: "Energia", x: 50, y: 32, color: "#f59e0b", html: "Fossili ~80%; la transizione è in corso.", why: "Il carbone alimentò la Rivoluzione industriale (macchina a vapore di Watt, 1769), il petrolio il Novecento. Ogni transizione energetica ha richiesto decenni: oggi dobbiamo farla più in fretta, per il clima." },
        { id: "cibo", label: "Cibo", x: 85, y: 32, color: "#84cc16", html: "Produzione sufficiente ma distribuita male.", why: "Le carestie moderne sono più spesso crisi di accesso (reddito, conflitti, prezzi) che di disponibilità, come mostrò Amartya Sen nel 1981 studiando la carestia del Bengala del 1943." },
        { id: "impatto", label: "Impatti e limiti", x: 30, y: 62, color: "#dc2626", html: "Clima, inquinamento, perdita di biodiversità, sovrasfruttamento.", why: "Gli scienziati (Johan Rockström, 2009) hanno indicato nove 'limiti planetari' (clima, biodiversità, cicli di azoto e fosforo…) entro i quali l'umanità può operare in sicurezza; alcuni sono già stati superati." },
        { id: "equita", label: "Equità", x: 70, y: 62, color: "#a855f7", html: "Chi consuma e chi ne subisce gli effetti.", why: "I Paesi ricchi hanno emesso storicamente più CO₂, ma gli effetti più gravi colpiscono spesso i più poveri: da qui il principio delle 'responsabilità comuni ma differenziate' dei trattati sul clima." },
        { id: "sostenibile", label: "Sviluppo sostenibile", x: 50, y: 82, color: "#14b8a6", html: "Ambiente + società + economia.", why: "Il Rapporto Brundtland (1987) lo definì per superare l'opposizione fra tutela dell'ambiente e sviluppo economico: la tesi è che siano due facce dello stesso problema." },
        { id: "agenda", label: "Agenda 2030", x: 50, y: 96, color: "#ec4899", html: "17 obiettivi, 169 traguardi, 193 Paesi.", why: "Approvata il 25 settembre 2015, è il primo programma universale: vale per tutti i Paesi, ricchi e poveri. Si fonda su cinque 'P': persone, pianeta, prosperità, pace, partnership." }
      ],
      edges: [
        ["risorse", "acqua", "es."],
        ["risorse", "energia", "es."],
        ["risorse", "cibo", "es."],
        ["energia", "impatto", "causa"],
        ["acqua", "impatto", "subisce"],
        ["cibo", "equita", "pone il tema"],
        ["impatto", "sostenibile", "richiede"],
        ["equita", "sostenibile", "richiede"],
        ["sostenibile", "agenda", "si traduce in"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Rinnovabili</b> (si rigenerano) e <b>non rinnovabili</b> (petrolio, carbone, gas, minerali).</li>
<li><b>Acqua</b>: 97,5% salata; 2,5% dolce, quasi tutta in ghiacciai e falde; 70% dei prelievi va all'agricoltura; 2,2 miliardi di persone senza acqua potabile sicura.</li>
<li><b>Energia</b>: ~80% fossili; transizione verso rinnovabili ed efficienza; nessuna fonte è senza impatti.</li>
<li><b>Cibo</b>: sufficiente per tutti ma mal distribuito (circa 733 milioni di affamati); spreco e rivoluzione verde.</li>
<li><b>Sviluppo sostenibile</b> (Brundtland, 1987): tre pilastri ambientale, sociale, economico; <b>Agenda 2030</b> (2015): 17 obiettivi.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: energia, cibo e Agenda 2030",
      questions: [
        { type: "mc", q: "Quale quota dell'energia primaria mondiale viene ancora da combustibili fossili?", options: ["Circa 20%", "Circa 50%", "Circa 80%"], answer: 2, explain: "Petrolio, carbone e gas coprono ancora circa l'80% dell'energia primaria." },
        { type: "mc", q: "Chi guidò la commissione che nel 1987 definì lo sviluppo sostenibile?", options: ["Gro Harlem Brundtland", "Greta Thunberg", "Aurelio Peccei"], answer: 0, explain: "Il Rapporto Brundtland (1987), dal nome della presidente della commissione." },
        { type: "num", q: "Quanti sono gli Obiettivi di sviluppo sostenibile dell'Agenda 2030?", answer: 17, tol: 0, explain: "17 obiettivi (SDGs) e 169 traguardi." }
      ]
    }
  ],
  glossary: [
    { t: "Risorsa rinnovabile", d: "Risorsa che si rigenera in tempi brevi (sole, vento, acqua dolce, legno), se usata con misura." },
    { t: "Risorsa non rinnovabile", d: "Risorsa formatasi in milioni di anni e non ricostituibile su scala umana (petrolio, carbone, minerali)." },
    { t: "Stress idrico", d: "Situazione in cui i prelievi di acqua sono molto alti rispetto alla disponibilità." },
    { t: "Impronta idrica", d: "Volume di acqua necessario per produrre un bene o per i consumi di una persona." },
    { t: "Transizione energetica", d: "Passaggio dai combustibili fossili alle fonti rinnovabili e a un uso più efficiente dell'energia." },
    { t: "Mix energetico", d: "Insieme delle fonti che un Paese usa per produrre energia." },
    { t: "Rivoluzione verde", d: "Aumento dei raccolti (anni '50-'70) grazie a sementi selezionate, fertilizzanti, pesticidi e irrigazione." },
    { t: "Sviluppo sostenibile", d: "Sviluppo che soddisfa i bisogni del presente senza compromettere la possibilità delle generazioni future di soddisfare i propri (Rapporto Brundtland, 1987)." },
    { t: "Agenda 2030", d: "Programma ONU (2015) con 17 Obiettivi di sviluppo sostenibile da raggiungere entro il 2030." },
    { t: "Impronta ecologica", d: "Superficie di terra e mare necessaria per produrre le risorse consumate e assorbire i rifiuti prodotti da una persona o da un Paese." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste è una risorsa non rinnovabile?", options: ["Vento", "Gas naturale", "Legna di una foresta gestita"], answer: 1, explain: "Il gas naturale si è formato in milioni di anni." },
      { type: "mc", q: "Quale quota dell'acqua dolce prelevata nel mondo serve all'agricoltura?", options: ["Circa 10%", "Circa 30%", "Circa 70%"], answer: 2, explain: "L'irrigazione assorbe circa il 70% dei prelievi." },
      { type: "tf", q: "Nel mondo non si produce abbastanza cibo per tutti, e questa è la causa principale della fame.", answer: false, explain: "Si produce cibo sufficiente per tutti: la fame dipende soprattutto da povertà, conflitti, prezzi e distribuzione." },
      { type: "num", q: "Un paio di jeans richiede circa 7.000 litri d'acqua. Quante docce da 50 litri equivalgono?", answer: 140, tol: 0, explain: "7.000 ÷ 50 = 140 docce." },
      { type: "mc", q: "Quali sono i tre pilastri dello sviluppo sostenibile?", options: ["Ambientale, sociale, economico", "Politico, militare, religioso", "Agricolo, industriale, terziario"], answer: 0, explain: "Ambiente, società ed economia devono essere considerati insieme." },
      { type: "text", q: "Come si chiama il programma ONU del 2015 con i 17 obiettivi di sviluppo sostenibile?", answer: ["agenda 2030", "l'agenda 2030"], explain: "L'Agenda 2030 per lo sviluppo sostenibile, approvata da 193 Paesi." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Rapporto Brundtland (1987)", "Conferenza di Rio (1992)", "Protocollo di Kyoto (1997)", "Agenda 2030 (2015)"], explain: "Dalla definizione di sviluppo sostenibile ai trattati sul clima fino all'Agenda 2030." },
      { type: "mc", q: "Perché l'energia solare ed eolica richiedono sistemi di accumulo e reti flessibili?", options: ["Sono intermittenti", "Sono troppo costose", "Producono scorie radioattive"], answer: 0, explain: "Il Sole e il vento non sono disponibili in modo costante, quindi servono batterie, reti e un mix di fonti." },
      { type: "tf", q: "L'Earth Overshoot Day indica il giorno in cui l'umanità ha già consumato le risorse che la Terra può rigenerare in un anno.", answer: true, explain: "Nel 2024 è caduto il 1° agosto: dopo quella data si 'va in rosso'." },
      { type: "mc", q: "Che cosa è accaduto al Lago d'Aral?", options: ["Si è ridotto drasticamente per la deviazione dei fiumi che lo alimentavano", "È stato riempito da una diga", "È diventato il più grande lago del mondo"], answer: 0, explain: "L'irrigazione del cotone, dagli anni '60, ha sottratto acqua ai fiumi Amu Darya e Syr Darya, e il lago si è quasi prosciugato." }
    ]
  }
});
