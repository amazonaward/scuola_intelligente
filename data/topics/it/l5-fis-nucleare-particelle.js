TOPIC('it', {
  id: "l5-fis-nucleare-particelle",
  title: "Fisica nucleare e particelle",
  intro: "Al centro di ogni atomo c'è un nucleo diecimila volte più piccolo dell'atomo stesso, che racchiude quasi tutta la sua massa e un'enorme quantità di energia. Dalla scoperta della radioattività (1896) alla fissione dell'uranio (1938), dalla fusione che alimenta le stelle fino al <b>Modello Standard</b> con quark, leptoni e bosone di Higgs, la fisica del nucleo e delle particelle ha cambiato la medicina, l'energia, la storia del Novecento e la nostra idea di che cosa sia la materia. In questa lezione vediamo la struttura del nucleo, le forze che lo tengono insieme, i decadimenti radioattivi, la fissione e la fusione, e le particelle elementari.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Il nucleo: protoni, neutroni, isotopi",
      html: `<p>Dopo l'esperimento di Rutherford (1911) sappiamo che l'atomo ha un nucleo minuscolo con carica positiva. Nel <b>1932</b> <b>James Chadwick</b> scoprì il <b>neutrone</b>, particella neutra con massa quasi uguale a quella del protone: il nucleo è formato da <b>protoni</b> e <b>neutroni</b>, detti insieme <b>nucleoni</b>. Si indicano:</p>
<ul>
<li><b>Z</b>, il <b>numero atomico</b> = numero di protoni (determina l'elemento chimico);</li>
<li><b>N</b>, il numero di neutroni;</li>
<li><b>A = Z + N</b>, il <b>numero di massa</b> = numero di nucleoni.</li>
</ul>
<p>Si scrive un nuclide come <sup>A</sup><sub>Z</sub>X, per esempio <sup>12</sup><sub>6</sub>C (6 protoni e 6 neutroni) oppure <sup>235</sup><sub>92</sub>U (92 protoni, 143 neutroni). Nuclei con lo stesso Z ma diverso N sono <b>isotopi</b>: l'idrogeno ha <sup>1</sup>H (protio), <sup>2</sup>H (deuterio) e <sup>3</sup>H (trizio); il carbonio <sup>12</sup>C, <sup>13</sup>C e <sup>14</sup>C. Il raggio di un nucleo è approssimativamente R ≈ R₀·A<sup>1/3</sup> con R₀ ≈ 1,2·10<sup>-15</sup> m = 1,2 fm (femtometri), quindi tra 1 e 7 fm, circa 10<sup>5</sup> volte meno dell'atomo. La densità del nucleo è quasi uguale per tutti i nuclei, circa <b>2·10<sup>17</sup> kg/m³</b>: un cucchiaino di materia nucleare avrebbe una massa di miliardi di tonnellate.</p>
<p>Le unità di misura convenienti sono l'<b>unità di massa atomica u</b> (1/12 della massa del <sup>12</sup>C: 1 u = 1,6605·10<sup>-27</sup> kg) e l'<b>elettronvolt</b> (1 MeV = 10<sup>6</sup> eV = 1,602·10<sup>-13</sup> J). Con E = mc², <b>1 u equivale a 931,5 MeV</b>.</p>`
    },
    {
      type: "text",
      title: "La forza nucleare e l'energia di legame",
      html: `<p>Come fanno i protoni, tutti con carica positiva e vicinissimi, a non respingersi e disgregare il nucleo? La repulsione elettrica è enorme, quindi deve esistere una forza ancora più intensa e attrattiva, diversa dalla gravità e dall'elettromagnetismo: la <b>forza nucleare forte</b>. Ha tre caratteristiche: è molto intensa (a distanze di 1 fm è circa 100 volte più forte della repulsione elettrica tra due protoni); è a <b>cortissimo raggio</b> (agisce solo entro 2-3 fm e diventa trascurabile oltre); e agisce nello stesso modo su protoni e neutroni. Nei nuclei grandi i neutroni sono più numerosi dei protoni per «diluire» la repulsione elettrica; oltre Z = 82 (piombo) nessun nucleo è stabile.</p>
<p>Se si misura la massa di un nucleo si scopre che è <b>minore</b> della somma delle masse dei suoi nucleoni separati. La differenza è il <b>difetto di massa</b> Δm; per E = mc² corrisponde all'<b>energia di legame</b> E<sub>L</sub> = Δm·c²: l'energia che occorre per smontare il nucleo nei suoi nucleoni (o che si libera quando si forma). Conta l'energia di legame <b>per nucleone</b> E<sub>L</sub>/A: cresce rapidamente per i nuclei leggeri, arriva a un massimo di circa <b>8,8 MeV</b> intorno al ferro e al nichel (A ≈ 56-62), poi scende lentamente per i nuclei più pesanti (circa 7,6 MeV per l'uranio).</p>
<p>Questa curva spiega tutto il resto della lezione: i nuclei molto pesanti guadagnano stabilità <b>dividendosi</b> (<b>fissione</b>); i nuclei molto leggeri guadagnano stabilità <b>fondendosi</b> (<b>fusione</b>). In entrambi i casi si arriva verso il ferro e si libera energia.</p>`
    },
    {
      type: "svg",
      title: "La curva dell'energia di legame per nucleone",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#94a3b8" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#94a3b8" stroke-width="2"/>
<path d="M60 250 L 80 215 L 100 195 L 120 150 L 150 100 L 200 72 L 250 62 L 300 60 L 380 66 L 470 80 L 560 100" fill="none" stroke="#38bdf8" stroke-width="3"/>
<circle cx="300" cy="60" r="7" fill="#f97316"/>
<g font-family="sans-serif" font-size="14">
<text x="310" y="52" fill="#f97316" font-weight="bold">Fe-56 / Ni-62 (≈ 8,8 MeV)</text>
<text x="86" y="140" fill="#e2e8f0">He-4</text>
<text x="90" y="95" fill="#4ade80" font-weight="bold">FUSIONE →</text>
<text x="430" y="130" fill="#f87171" font-weight="bold">← FISSIONE</text>
<text x="500" y="75" fill="#e2e8f0">U-235</text>
<text x="300" y="280" fill="#e2e8f0" text-anchor="middle">numero di massa A</text>
<text x="66" y="24" fill="#e2e8f0">E_L / A (MeV)</text>
</g>
</svg>`,
      caption: "Schema qualitativo: i nuclei leggeri liberano energia fondendosi, quelli pesanti dividendosi, perché in entrambi i casi si avvicinano al massimo della curva."
    },
    {
      type: "example",
      title: "L'energia di legame del deuterio",
      html: `<p>Masse (nuclei): protone 1,007276 u, neutrone 1,008665 u, deuterone 2,013553 u. La somma dei nucleoni separati è 1,007276 + 1,008665 = 2,015941 u. Il <b>difetto di massa</b> è Δm = 2,015941 − 2,013553 = <b>0,002388 u</b>.</p>
<p>Energia di legame: E<sub>L</sub> = 0,002388 × 931,5 MeV ≈ <b>2,22 MeV</b>, cioè 1,11 MeV per nucleone. Per l'elio-4 si ha E<sub>L</sub> ≈ 28,3 MeV, circa 7,07 MeV per nucleone: molto più legato, e per questo la fusione dell'idrogeno in elio libera tanta energia.</p>`
    },
    {
      type: "text",
      title: "La radioattività: α, β, γ",
      html: `<p>Nel <b>1896</b> <b>Henri Becquerel</b> scoprì per caso che sali di uranio impressionavano una lastra fotografica anche al buio. <b>Marie e Pierre Curie</b> studiarono il fenomeno, che chiamarono <b>radioattività</b>, e nel 1898 isolarono due nuovi elementi, il <b>polonio</b> e il <b>radio</b>. Marie Curie è l'unica persona ad aver ricevuto il Nobel in due discipline scientifiche diverse (fisica 1903 con Pierre e Becquerel, chimica 1911). <b>Rutherford</b> distinse tre tipi di radiazioni:</p>
<ul>
<li><b>raggi α</b>: nuclei di elio (<sup>4</sup><sub>2</sub>He), poco penetranti (basta un foglio di carta o la pelle);</li>
<li><b>raggi β</b>: elettroni (β<sup>-</sup>) o positroni (β<sup>+</sup>), più penetranti (fermati da qualche millimetro di alluminio);</li>
<li><b>raggi γ</b>: fotoni di altissima energia, molto penetranti (servono centimetri di piombo o metri di calcestruzzo).</li>
</ul>
<p>Le <b>leggi dei decadimenti</b> conservano carica elettrica e numero di nucleoni:</p>
<ul>
<li><b>decadimento α</b>: A diminuisce di 4 e Z di 2. <sup>238</sup><sub>92</sub>U → <sup>234</sup><sub>90</sub>Th + <sup>4</sup><sub>2</sub>He;</li>
<li><b>decadimento β<sup>-</sup></b>: un neutrone diventa protone, A resta uguale e Z aumenta di 1: n → p + e<sup>-</sup> + ν̄<sub>e</sub>. Esempio: <sup>234</sup><sub>90</sub>Th → <sup>234</sup><sub>91</sub>Pa + e<sup>-</sup> + ν̄<sub>e</sub> (e <sup>14</sup>C → <sup>14</sup>N);</li>
<li><b>decadimento β<sup>+</sup></b>: un protone diventa neutrone, Z diminuisce di 1 (emessi un positrone e un neutrino);</li>
<li><b>emissione γ</b>: il nucleo, rimasto in uno stato eccitato, scende a un livello più basso emettendo un fotone: A e Z non cambiano.</li>
</ul>
<p>Nel decadimento β lo spettro degli elettroni è continuo, e sembrava violare la conservazione dell'energia. Nel 1930 <b>Wolfgang Pauli</b> propose l'esistenza di una particella neutra e leggerissima, il <b>neutrino</b>, che porta via parte dell'energia; <b>Enrico Fermi</b> ne costruì la teoria (1934); il neutrino fu osservato soltanto nel <b>1956</b> da Cowan e Reines.</p>`
    },
    {
      type: "text",
      title: "La legge del decadimento e il tempo di dimezzamento",
      html: `<p>Il decadimento di un singolo nucleo è un evento <b>casuale</b> (un fenomeno quantistico): non si può prevedere quando accadrà, ma per molti nuclei vale una legge statistica precisa. Il numero di nuclei che non sono ancora decaduti diminuisce in modo <b>esponenziale</b>:</p>
<p style="text-align:center"><b>N(t) = N₀ · e<sup>−λt</sup> = N₀ · (1/2)<sup>t/T<sub>½</sub></sup></b> &nbsp;&nbsp; con &nbsp;&nbsp; <b>T<sub>½</sub> = ln 2 / λ ≈ 0,693/λ</b></p>
<p>λ è la <b>costante di decadimento</b>; <b>T<sub>½</sub></b> è il <b>tempo di dimezzamento</b>: il tempo dopo il quale resta in media metà dei nuclei, indipendentemente da quanti ce ne fossero all'inizio. I tempi di dimezzamento vanno da frazioni di secondo a miliardi di anni: <sup>131</sup>I ≈ 8,0 giorni, <sup>14</sup>C ≈ 5730 anni, <sup>235</sup>U ≈ 7,0·10<sup>8</sup> anni, <sup>238</sup>U ≈ 4,5·10<sup>9</sup> anni. L'<b>attività</b> A = λ·N misura il numero di decadimenti al secondo e si esprime in <b>becquerel (Bq)</b>: 1 Bq = 1 decadimento/s (l'unità storica è il curie: 1 Ci = 3,7·10<sup>10</sup> Bq).</p>
<p>La <b>datazione con il carbonio-14</b> (Willard Libby, Nobel per la chimica 1960) sfrutta questa legge: i viventi scambiano carbonio con l'ambiente e hanno la stessa frazione di <sup>14</sup>C dell'atmosfera; alla morte lo scambio cessa e il <sup>14</sup>C decade con T<sub>½</sub> = 5730 anni. Misurando la frazione rimasta si stima l'età di reperti fino a circa 50 000 anni.</p>`
    },
    {
      type: "example",
      title: "Quanto sarà vecchio il reperto?",
      html: `<p>Un frammento di legno antico contiene il 25% del <sup>14</sup>C di un campione vivente. Poiché 25% = (1/2)², sono passati 2 tempi di dimezzamento: t = 2 × 5730 ≈ <b>11 460 anni</b>. Se invece ne restasse il 50%, l'età sarebbe 5730 anni; con il 12,5% sarebbero tre dimezzamenti, cioè 17 190 anni.</p>
<p><b>Medicina.</b> Un campione di <sup>131</sup>I (T<sub>½</sub> = 8,0 giorni) ha attività iniziale 800 MBq. Dopo 24 giorni (3 dimezzamenti) l'attività è 800/8 = <b>100 MBq</b>. La brevità del tempo di dimezzamento è un vantaggio per i radiofarmaci: la radioattività scompare in poche settimane.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: nuclei e decadimenti",
      questions: [
        { type: "mc", q: "Nel decadimento α di un nucleo, come cambiano Z e A?", options: ["Z−2, A−4", "Z−1, A−4", "Z+1, A invariato", "Z−2, A−2"], answer: 0, explain: "Il nucleo emette un nucleo di elio-4: perde 2 protoni e 4 nucleoni." },
        { type: "num", q: "Un isotopo ha T½ = 10 giorni. Quanti giorni servono perché ne resti 1/8?", answer: 30, tol: 0.1, unit: "giorni", explain: "1/8 = (1/2)³: tre dimezzamenti = 30 giorni." },
        { type: "tf", q: "Un nucleo che emette un raggio γ cambia numero atomico.", answer: false, explain: "Il raggio γ è un fotone: Z e A non cambiano; il nucleo passa a uno stato di energia minore." }
      ]
    },
    {
      type: "curiosity",
      title: "Le dosi e il fondo naturale",
      html: `<p>Siamo continuamente esposti a radiazioni naturali: raggi cosmici, il radon che sale dal terreno, il potassio-40 del nostro corpo, le rocce. Per descrivere gli effetti biologici si usa la <b>dose assorbita</b> (in <b>gray</b>: 1 Gy = 1 J/kg) e la <b>dose equivalente</b> (in <b>sievert</b>, Sv, che tiene conto del tipo di radiazione). La dose media annua dovuta al fondo naturale nel mondo è dell'ordine di 2-3 mSv; una radiografia al torace comporta circa 0,02-0,1 mSv, una TAC alcuni mSv. Dosi dell'ordine di Sv in poco tempo provocano la malattia da radiazioni. Un volo transoceanico espone a qualche decina di µSv.</p>`
    },
    {
      type: "text",
      title: "La fissione nucleare",
      html: `<p>Nel dicembre 1938 i chimici tedeschi <b>Otto Hahn</b> e <b>Fritz Strassmann</b>, bombardando l'uranio con neutroni, trovarono tra i prodotti il <b>bario</b>, un elemento molto più leggero. <b>Lise Meitner</b> e suo nipote <b>Otto Frisch</b>, in esilio, interpretarono nel gennaio 1939 il risultato: il nucleo di uranio, colpito da un neutrone, si <b>spezza in due frammenti</b> di massa media, liberando energia. Lo chiamarono <b>fissione</b>. Hahn ricevette il Nobel per la chimica nel 1944 (Meitner non fu inclusa, un'ingiustizia ricordata come uno dei casi più noti).</p>
<p>Una reazione tipica: <sup>235</sup>U + n → <sup>141</sup>Ba + <sup>92</sup>Kr + 3n + energia. Ogni fissione libera circa <b>200 MeV</b> (≈ 3,2·10<sup>-11</sup> J), in gran parte come energia cinetica dei frammenti. Siccome vengono emessi più neutroni (in media 2-3) di quelli assorbiti, i neutroni liberati possono provocare nuove fissioni: una <b>reazione a catena</b>. Se, in media, più di un neutrone per fissione ne provoca un'altra (fattore di moltiplicazione k &gt; 1), la reazione cresce in modo esponenziale (<b>massa critica</b>, usata nelle armi); se k = 1 è <b>controllata</b> e costante, come nei <b>reattori nucleari</b>.</p>
<p>Il 2 dicembre 1942, a Chicago, un gruppo guidato da <b>Enrico Fermi</b> realizzò la prima pila atomica, la <b>Chicago Pile-1</b>, ottenendo la prima reazione a catena controllata. Seguì il Progetto Manhattan e, il 6 e 9 agosto 1945, le bombe su Hiroshima e Nagasaki: un evento che pose domande etiche e politiche ancora aperte sulla responsabilità degli scienziati.</p>
<p>In una centrale i reattori usano uranio arricchito al 3-5% di <sup>235</sup>U (il minerale naturale ne contiene lo 0,7%), un <b>moderatore</b> (acqua o grafite) per rallentare i neutroni, <b>barre di controllo</b> (cadmio, boro) per assorbirli e un fluido che trasporta il calore per produrre vapore e azionare una turbina. Vantaggi: nessuna emissione di CO₂ in esercizio e una densità energetica altissima; svantaggi: <b>scorie</b> radioattive a lunga vita, rischio di incidenti (Černobyl' 1986, Fukushima 2011), costi. In Italia, dopo il referendum del 1987 e quello del 2011, non sono in funzione centrali nucleari.</p>`
    },
    {
      type: "example",
      title: "Quanta energia in un chilo di uranio-235?",
      html: `<p>Numero di nuclei in 1,00 kg di <sup>235</sup>U: N = (1000 g / 235 g/mol) × 6,02·10<sup>23</sup> ≈ 2,56·10<sup>24</sup>. Energia: E = N × 200 MeV = 5,1·10<sup>26</sup> MeV = 5,1·10<sup>26</sup> × 1,602·10<sup>-13</sup> J ≈ <b>8,2·10<sup>13</sup> J</b>.</p>
<p>Per confronto, 1 kg di carbone dà circa 3·10<sup>7</sup> J: circa <b>2,7 milioni di volte meno</b>. Il confronto con il tritolo (4,2·10<sup>6</sup> J/kg) mostra che 1 kg di <sup>235</sup>U fissionato completamente equivale a circa 20 000 tonnellate di TNT.</p>`
    },
    {
      type: "text",
      title: "La fusione nucleare",
      html: `<p>Nella <b>fusione</b> due nuclei leggeri si uniscono in uno più pesante, e si libera energia perché il prodotto ha un'energia di legame per nucleone maggiore. Il caso più studiato è</p>
<p style="text-align:center"><sup>2</sup>H + <sup>3</sup>H → <sup>4</sup>He + n + 17,6 MeV</p>
<p>Per nucleone la resa è maggiore della fissione (17,6 MeV su 5 nucleoni ≈ 3,5 MeV/nucleone, contro ≈ 0,85 MeV/nucleone dell'uranio). Il problema è la <b>barriera coulombiana</b>: i nuclei sono carichi positivamente e si respingono. Per avvicinarli a distanze di pochi fm servono energie cinetiche enormi, cioè temperature di <b>decine o centinaia di milioni di kelvin</b>, a cui la materia è un <b>plasma</b>.</p>
<p>È la reazione che alimenta le <b>stelle</b>: nel nucleo del Sole (T ≈ 1,5·10<sup>7</sup> K), che sfrutta anche l'effetto tunnel quantistico, la catena protone-protone converte quattro protoni in un nucleo di <sup>4</sup>He con liberazione di circa 26,7 MeV (Hans Bethe, 1938-39, Nobel 1967). Sulla Terra la fusione controllata è una sfida tecnologica: si confinano i plasmi con campi magnetici (<b>tokamak</b>) o li si comprime con laser. Il reattore sperimentale internazionale <b>ITER</b> è in costruzione a Cadarache, in Francia, e nel dicembre 2022 il National Ignition Facility negli Stati Uniti ha ottenuto, con i laser, un'energia di fusione superiore a quella dei laser incidenti. La fusione ha materia prima abbondante (deuterio dall'acqua), non produce scorie ad alta attività a lunga vita né rischio di reazione a catena incontrollata, ma una centrale commerciale non è ancora disponibile.</p>`
    },
    {
      type: "widget",
      title: "Cronologia della fisica nucleare",
      widget: "timeline",
      options: { unit: "anni", events: [
        { year: 1896, label: "Becquerel: radioattività", icon: "☢️" },
        { year: 1898, label: "Curie: polonio e radio", icon: "🧪" },
        { year: 1911, label: "Rutherford: il nucleo", icon: "⚛️" },
        { year: 1932, label: "Chadwick: il neutrone", icon: "🔬" },
        { year: 1938, label: "Hahn e Strassmann: la fissione", icon: "💥" },
        { year: 1942, label: "Fermi: prima pila atomica", icon: "🏭" },
        { year: 1964, label: "Quark (Gell-Mann, Zweig)", icon: "🔺" },
        { year: 2012, label: "Scoperta del bosone di Higgs", icon: "🎯" }
      ] },
      caption: "Dal primo segnale di radioattività al Modello Standard."
    },
    {
      type: "text",
      title: "Dalle particelle al Modello Standard",
      html: `<p>Lo studio dei raggi cosmici e poi degli <b>acceleratori</b> fece scoprire decine di nuove particelle: il <b>positrone</b> (previsto da Dirac nel 1928, osservato da Anderson nel 1932: è l'<b>antiparticella</b> dell'elettrone, stessa massa e carica opposta; quando una particella incontra la sua antiparticella si <b>annichilano</b> in fotoni), il <b>muone</b> (1936), i <b>pioni</b> (Powell, 1947) e centinaia di <b>adroni</b>. Una tale abbondanza suggerì che non potessero essere tutte elementari. Nel 1964 <b>Murray Gell-Mann</b> e <b>George Zweig</b> proposero che gli adroni siano composti da <b>quark</b>, confermati dagli esperimenti di diffusione profondamente anelastica a Stanford (SLAC) alla fine degli anni '60.</p>
<p>Il <b>Modello Standard</b>, completato negli anni '70, descrive tutte le particelle elementari note e tre delle quattro interazioni fondamentali. Le particelle di materia sono <b>fermioni</b> (spin ½), raggruppati in tre «famiglie» di massa crescente:</p>
<ul>
<li><b>6 quark</b>: up (u), down (d), charm (c), strange (s), top (t), bottom (b), con cariche +2/3 (u, c, t) e −1/3 (d, s, b); non si osservano mai isolati ma in gruppi: i <b>barioni</b> (tre quark: protone = uud, neutrone = udd) e i <b>mesoni</b> (quark e antiquark: pioni);</li>
<li><b>6 leptoni</b>: elettrone, muone, tau (carica −1) e i tre neutrini corrispondenti (neutri);</li>
<li>le corrispondenti antiparticelle.</li>
</ul>
<p>Le interazioni sono mediate da <b>bosoni</b> (spin intero): il <b>fotone</b> (interazione elettromagnetica), i bosoni <b>W⁺, W⁻ e Z⁰</b> (interazione debole, responsabile del decadimento β) e gli otto <b>gluoni</b> (interazione forte, che lega i quark; la forza nucleare tra nucleoni ne è un residuo). La <b>gravità</b> non è inclusa nel Modello Standard: non esiste ancora una teoria quantistica della gravità soddisfacente.</p>
<p>Tutte queste particelle hanno massa grazie al <b>meccanismo di Higgs</b> (1964, Englert-Brout e Higgs): un campo permea lo spazio e le particelle interagendo con esso acquistano massa. Il suo quanto, il <b>bosone di Higgs</b>, è stato scoperto il <b>4 luglio 2012</b> al <b>CERN</b> di Ginevra, nell'acceleratore <b>LHC</b> (anello di 27 km, collisioni tra protoni) dagli esperimenti ATLAS e CMS, con una massa di circa <b>125 GeV/c²</b> (circa 133 volte quella del protone). Nel 2013 Peter Higgs e François Englert ricevettero il Nobel per la fisica.</p>`
    },
    {
      type: "widget",
      title: "Classifica le particelle",
      widget: "classify",
      options: { groups: ["Quark", "Leptoni", "Bosoni mediatori"], items: [
        ["⬆️ up", 0],
        ["⬇️ strange", 0],
        ["⚡ elettrone", 1],
        ["🌀 neutrino", 1],
        ["🔵 muone", 1],
        ["💡 fotone", 2],
        ["🔗 gluone", 2],
        ["⚛️ bosone W", 2]
      ] },
      caption: "Sorgenti di materia e mediatori delle forze."
    },
    {
      type: "quiz",
      title: "Controlla: fissione, fusione, particelle",
      questions: [
        { type: "mc", q: "Perché la fusione dei nuclei leggeri libera energia?", options: ["Perché i nuclei leggeri sono radioattivi", "Perché il prodotto ha energia di legame per nucleone maggiore", "Perché si perdono elettroni", "Perché si spezza il nucleo"], answer: 1, explain: "Salendo verso il massimo della curva dell'energia di legame, la massa totale diminuisce e la differenza si libera come energia." },
        { type: "tf", q: "Il protone è composto da due quark up e un quark down.", answer: true, explain: "uud: cariche +2/3 + 2/3 − 1/3 = +1." },
        { type: "num", q: "Quanti MeV equivalgono a un difetto di massa di 0,030 u? (1 u = 931,5 MeV)", answer: 27.9, tol: 0.2, unit: "MeV", explain: "0,030 × 931,5 ≈ 27,9 MeV (circa l'energia di legame dell'elio-4)." }
      ]
    },
    {
      type: "curiosity",
      title: "Antimateria in ospedale",
      html: `<p>L'antimateria non è fantascienza: la <b>PET</b> (tomografia a emissione di positroni) usa traccianti radioattivi che emettono positroni. Ogni positrone si annichila con un elettrone producendo due fotoni di 0,511 MeV in direzioni opposte, rivelati da anelli di sensori: dalla loro direzione si ricostruisce dove è concentrato il tracciante (per esempio lo zucchero marcato che si accumula nei tumori). Al CERN si producono e intrappolano anche atomi di antidrogeno, per confrontarne le proprietà con l'idrogeno.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il nucleo",
      intro: "Se la curva di legame sembra astratta, prova queste immagini.",
      tabs: [
        {
          label: "🎲 I dadi del decadimento",
          html: "<p>Lancia 64 monete e togli quelle che escono «testa». Restano circa 32. Rilancia le rimaste e togli le «teste»: ne restano circa 16, poi 8, 4, 2, 1. A ogni giro (il «tempo di dimezzamento») il numero si dimezza. Nessuna moneta ha una scadenza, eppure il gruppo segue una regola precisa: è la <b>statistica del decadimento</b>.</p>"
        },
        {
          label: "⛰️ Il pendio dell'energia",
          html: "<p>Immagina una valle: il fondo è il ferro, il punto più stabile. Un nucleo molto leggero e uno molto pesante stanno sui versanti opposti; per scendere verso il fondo, il leggero deve unirsi ad altri (fusione), il pesante deve dividersi (fissione). In discesa si libera energia, come una palla che rotola. Il ferro è il «fondo»: da lì in poi qualunque reazione richiede energia.</p>"
        },
        {
          label: "🔗 Abbina radiazione e proprietà",
          html: "<p>Collega ogni radiazione alla sua descrizione.</p>",
          widget: "match",
          options: { pairs: [
            ["Raggi α", "Nuclei di elio, fermati da un foglio"],
            ["Raggi β⁻", "Elettroni, fermati da pochi mm di alluminio"],
            ["Raggi γ", "Fotoni energetici, schermati da piombo"],
            ["Neutrino", "Neutro, leggerissimo, quasi non interagisce"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della fisica nucleare e delle particelle",
      nodes: [
        { id: "nucleo", label: "Il nucleo", x: 12, y: 12, color: "#64748b", html: "Protoni e neutroni legati dalla forza forte; Z, N, A, isotopi.", why: "Dopo Rutherford (1911) e Chadwick (1932) si capì che per tenere insieme protoni positivi serve una forza nuova, più intensa e di corto raggio." },
        { id: "legame", label: "Energia di legame", x: 50, y: 10, color: "#2563eb", html: "E_L = Δm·c²; massimo a Fe-56/Ni-62.", why: "La relazione E = mc² (Einstein 1905) spiega il difetto di massa: la massa del nucleo è minore della somma dei nucleoni." },
        { id: "decad", label: "Radioattività", x: 82, y: 25, color: "#ef4444", html: "Decadimenti α, β, γ; legge esponenziale e T½.", why: "Becquerel e Curie la scoprirono; è un processo quantistico casuale, quindi statistico. Serve alla datazione e alla medicina." },
        { id: "fissione", label: "Fissione e fusione", x: 80, y: 62, color: "#16a34a", html: "Energia liberata dividendo nuclei pesanti o unendo quelli leggeri.", why: "Segue dalla curva di legame. La fissione (Hahn, Strassmann, Meitner, Frisch) alimenta le centrali; la fusione le stelle." },
        { id: "particelle", label: "Particelle elementari", x: 22, y: 55, color: "#f59e0b", html: "Quark e leptoni: i costituenti della materia.", why: "Gli acceleratori mostrarono decine di adroni; l'ipotesi dei quark (1964) li ordinò in un modello più semplice." },
        { id: "standard", label: "Modello Standard", x: 50, y: 86, color: "#8b5cf6", html: "Fermioni, bosoni mediatori, campo di Higgs.", why: "Unifica tre delle quattro interazioni; l'Higgs (2012) completa il quadro. Manca la gravità quantistica e spiegazioni per la materia oscura." }
      ],
      edges: [["nucleo", "legame", "è caratterizzato da"], ["legame", "decad", "spiega"], ["legame", "fissione", "spiega"], ["nucleo", "particelle", "è fatto di"], ["particelle", "standard", "classificate nel"]]
    }
  ],
  glossary: [
    { t: "Numero atomico Z", d: "Numero di protoni nel nucleo; identifica l'elemento." },
    { t: "Numero di massa A", d: "Numero totale di nucleoni (protoni + neutroni)." },
    { t: "Isotopi", d: "Nuclei con lo stesso Z e diverso numero di neutroni." },
    { t: "Difetto di massa", d: "Differenza tra la somma delle masse dei nucleoni e la massa del nucleo." },
    { t: "Tempo di dimezzamento", d: "Tempo in cui decade, in media, metà dei nuclei di un campione." },
    { t: "Fissione", d: "Scissione di un nucleo pesante in due più leggeri con liberazione di energia." },
    { t: "Fusione", d: "Unione di nuclei leggeri in uno più pesante con liberazione di energia." },
    { t: "Quark", d: "Particelle elementari che costituiscono adroni come protoni e neutroni." },
    { t: "Bosone di Higgs", d: "Quanto del campo che conferisce massa alle particelle elementari." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi scoprì il neutrone nel 1932?", options: ["Rutherford", "Chadwick", "Fermi", "Bohr"], answer: 1, explain: "James Chadwick." },
      { type: "num", q: "Quanti neutroni ha il nuclide ²³⁵₉₂U?", answer: 143, tol: 0, unit: "", explain: "N = A − Z = 235 − 92 = 143." },
      { type: "mc", q: "Nel decadimento β⁻ che cosa succede al nucleo?", options: ["Un neutrone diventa protone", "Un protone diventa neutrone", "Emette un nucleo di elio", "Il numero di massa aumenta"], answer: 0, explain: "n → p + e⁻ + antineutrino: Z aumenta di 1, A resta uguale." },
      { type: "num", q: "Dopo 3 tempi di dimezzamento, quale percentuale di un campione resta?", answer: 12.5, tol: 0.1, unit: "%", explain: "(1/2)³ = 1/8 = 12,5%." },
      { type: "num", q: "Un campione ha attività 640 Bq e T½ = 2 ore. Qual è l'attività dopo 8 ore (in Bq)?", answer: 40, tol: 0.5, unit: "Bq", explain: "8 h = 4 dimezzamenti: 640/16 = 40 Bq." },
      { type: "tf", q: "La curva dell'energia di legame per nucleone ha il massimo intorno al ferro.", answer: true, explain: "Il massimo, circa 8,8 MeV, è intorno ad A ≈ 56-62." },
      { type: "mc", q: "Quale processo alimenta il Sole?", options: ["Fissione dell'uranio", "Fusione dell'idrogeno in elio", "Decadimento β", "Combustione chimica"], answer: 1, explain: "Nel nucleo solare quattro protoni si fondono in un nucleo di elio." },
      { type: "num", q: "Quanta energia (in MeV) equivale a un difetto di massa di 0,0152 u? (1 u = 931,5 MeV)", answer: 14.2, tol: 0.2, unit: "MeV", explain: "0,0152 × 931,5 ≈ 14,2 MeV." },
      { type: "mc", q: "Di quali quark è composto il neutrone?", options: ["uud", "udd", "uuu", "ddd"], answer: 1, explain: "Neutrone = udd: carica +2/3 − 1/3 − 1/3 = 0." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Becquerel: radioattività", "Chadwick: neutrone", "Hahn e Strassmann: fissione", "CERN: bosone di Higgs"], explain: "1896, 1932, 1938, 2012." }
    ]
  }
});
