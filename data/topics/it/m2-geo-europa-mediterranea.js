TOPIC('it', {
  id: `m2-geo-europa-mediterranea`,
  title: `L'Europa mediterranea e balcanica`,
  intro: `Di fronte all'Italia, sull'altra sponda dell'Adriatico e dello Ionio, si allunga la <b>penisola balcanica</b>: montagne aspre, coste piene di isole, mari limpidissimi. Qui ci sono la <b>Grecia</b>, culla della civiltà occidentale, la <b>Croazia</b> con le sue mille isole, e gli altri Stati dei <b>Balcani</b>, nati in gran parte dalla divisione della Jugoslavia. Una regione vicinissima a noi, ricca di storia, di popoli e di lingue diverse.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. La penisola balcanica: montagne e mari`,
      html: `<p>La <b>penisola balcanica</b> è la più orientale delle tre grandi penisole del Mediterraneo europeo (iberica, italiana, balcanica). È bagnata da quattro mari: <b>Adriatico</b>, <b>Ionio</b>, <b>Egeo</b> e <b>Mar Nero</b>. A nord il suo confine si fa coincidere di solito con i fiumi Sava e Danubio.</p>
<p>Il nome viene dai <b>Monti Balcani</b>, in Bulgaria: in turco <i>balkan</i> significa "catena di monti boscosi". La penisola è infatti molto <b>montuosa</b>:</p>
<ul>
<li>lungo l'Adriatico corrono le <b>Alpi Dinariche</b>, montagne calcaree che scendono ripide verso il mare;</li>
<li>al centro e a est i <b>Balcani</b> e i <b>Rodopi</b>; la vetta più alta è il <b>Musala</b> (2.925 m) in Bulgaria;</li>
<li>a sud i monti della Grecia, con l'<b>Olimpo</b> (2.918 m), la "casa degli dèi".</li>
</ul>
<p><b>Clima</b>: <b>mediterraneo</b> sulle coste (estati calde e secche, inverni miti e piovosi), <b>continentale</b> nell'interno, dove le montagne bloccano l'influsso del mare. Sulla costa adriatica soffia spesso la <b>bora</b>, un vento freddo e violento che scende dalle montagne.</p>`
    },
    {
      type: `svg`,
      title: `La penisola balcanica e i suoi mari (schema)`,
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#7dd3fc"/>
<polygon points="40,20 600,20 600,110 520,110 500,150 470,180 440,175 430,210 455,240 420,260 400,300 360,320 330,290 300,250 270,215 230,180 180,140 130,95 80,60 40,50" fill="#bef264" stroke="#3f6212" stroke-width="3"/>
<polygon points="350,328 410,322 420,336 345,338" fill="#bef264" stroke="#3f6212" stroke-width="2"/>
<text x="385" y="318" font-size="12" text-anchor="middle">Creta</text>
<path d="M60 50 L200 160" stroke="#a16207" stroke-width="10" stroke-linecap="round" fill="none"/>
<text x="150" y="98" font-size="13" fill="#713f12" font-weight="bold" transform="rotate(38 150 98)">Alpi Dinariche</text>
<text x="400" y="80" font-size="14" text-anchor="middle" font-weight="bold" fill="#3f6212">Danubio e Sava (confine nord)</text>
<path d="M120 40 C250 60 400 50 560 70" stroke="#2563eb" stroke-width="5" fill="none"/>
<text x="110" y="190" font-size="17" font-weight="bold" fill="#1e3a8a">Mar Adriatico</text>
<text x="180" y="290" font-size="17" font-weight="bold" fill="#1e3a8a">Mar Ionio</text>
<text x="500" y="250" font-size="17" font-weight="bold" fill="#1e3a8a">Mar Egeo</text>
<text x="555" y="140" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Mar Nero</text>
<text x="330" y="150" font-size="18" text-anchor="middle" font-weight="bold" fill="#365314">BALCANI</text>
<text x="340" y="250" font-size="14" text-anchor="middle" fill="#365314">Grecia</text>
<text x="495" y="182" font-size="12" fill="#7f1d1d">Bosforo</text>
</svg>`,
      caption: `Schema semplificato, non in scala. Le montagne vicino all'Adriatico separano la costa dall'interno: per questo i climi sono così diversi.`
    },
    {
      type: `3d`,
      title: `I paesaggi del Mediterraneo orientale in 3D`,
      scene: `terrain`,
      caption: `Ruota e tocca le parti: ognuna ha un esempio reale in Grecia o nei Balcani.`,
      options: {
        features: {
          peninsula: { label: `Penisola`, html: `Il <b>Peloponneso</b>, nel sud della Grecia, e la stessa <b>penisola balcanica</b>. Anche l'<b>Istria</b> (Croazia e Slovenia) è una penisola.` },
          isthmus: { label: `Istmo`, html: `L'<b>istmo di Corinto</b> univa il Peloponneso al resto della Grecia; nel 1893 fu tagliato da un canale largo poco più di 20 m e lungo 6,4 km.` },
          island: { label: `Isola`, html: `<b>Creta</b> è l'isola più grande della Grecia (circa 8.300 km²), sede dell'antica civiltà minoica.` },
          archipelago: { label: `Arcipelago`, html: `Le <b>Cicladi</b> in Grecia e le isole della <b>Dalmazia</b> in Croazia: centinaia di isole e scogli.` },
          strait: { label: `Stretto`, html: `Il <b>Bosforo</b> e i <b>Dardanelli</b> collegano il Mar Nero all'Egeo; il <b>Canale d'Otranto</b> separa l'Italia dall'Albania (circa 72 km).` },
          gulf: { label: `Golfo`, html: `Il <b>Golfo di Corinto</b> separa quasi completamente il Peloponneso dalla Grecia continentale.` },
          bay: { label: `Baia`, html: `Le <b>Bocche di Cattaro</b> in Montenegro: un'insenatura profonda e tortuosa tra montagne ripide, che sembra un fiordo.` },
          mountain: { label: `Catena montuosa`, html: `Le <b>Alpi Dinariche</b>, calcaree, corrono lungo tutta la costa adriatica dalla Slovenia all'Albania.` },
          peak: { label: `Vetta`, html: `L'<b>Olimpo</b> (2.918 m), la montagna più alta della Grecia, dove secondo i miti abitavano Zeus e gli altri dèi.` },
          volcano: { label: `Vulcano`, html: `<b>Santorini</b> è ciò che resta di un vulcano esploso circa 3.600 anni fa: la sua caldera è oggi una laguna di mare circondata da scogliere.` },
          lake: { label: `Lago`, html: `Il <b>Lago di Ocrida</b>, tra Macedonia del Nord e Albania, è uno dei laghi più antichi d'Europa (oltre un milione di anni). In Croazia ci sono i 16 <b>laghi di Plitvice</b>, collegati da cascate.` },
          beach: { label: `Spiaggia`, html: `Le spiagge della Grecia e della Croazia attirano ogni anno decine di milioni di turisti, anche moltissimi italiani.` },
          coast: { label: `Costa`, html: `La costa della <b>Grecia</b>, con le isole, è lunga circa 13.700 km: una delle più lunghe d'Europa.` }
        }
      }
    },
    {
      type: `text`,
      title: `2. La Grecia`,
      html: `<p><b>Capitale</b>: Atene · <b>Abitanti</b>: circa 10,4 milioni · <b>Superficie</b>: circa 132.000 km² · <b>Forma di governo</b>: repubblica parlamentare · <b>UE</b> dal 1981, euro dal 2001.</p>
<ul>
<li>Circa l'<b>80%</b> del territorio è montuoso; il resto è fatto di piccole pianure costiere e di <b>isole</b>: circa 6.000 tra isole e isolotti, di cui poco più di 200 abitate (Creta, Eubea, Rodi, Corfù, le Cicladi…).</li>
<li>Nessun punto della Grecia è a più di circa 140 km dal mare. Per questo i Greci sono sempre stati un popolo di navigatori: oggi gli armatori greci possiedono la <b>flotta mercantile più grande del mondo</b>.</li>
<li><b>Economia</b>: turismo (circa 3 turisti per ogni abitante ogni anno), trasporti marittimi, agricoltura (olive e olio, uva, agrumi, cotone), formaggio feta.</li>
<li>La Grecia antica ci ha lasciato la <b>democrazia</b>, la filosofia, il teatro, le Olimpiadi e migliaia di parole italiane. Monumenti famosi: l'<b>Acropoli</b> di Atene con il Partenone, Delfi, Olimpia, il palazzo di Cnosso a Creta.</li>
<li>È una delle zone più <b>sismiche</b> d'Europa: lì la placca africana scivola sotto quella euroasiatica.</li>
</ul>`
    },
    {
      type: `text`,
      title: `3. La Croazia e la Slovenia`,
      html: `<p><b>Croazia</b> – Capitale: <b>Zagabria</b> · circa 3,8 milioni di abitanti · circa 56.600 km² · repubblica parlamentare.</p>
<ul>
<li>Ha una forma curiosa "a mezzaluna": una parte continentale e pianeggiante a nord (verso il Danubio) e una lunga striscia costiera, la <b>Dalmazia</b>, più l'<b>Istria</b>.</li>
<li>Davanti alla costa ci sono più di <b>1.200</b> tra isole, isolotti e scogli (le più grandi sono Veglia/Krk e Cherso/Cres).</li>
<li>Città storiche: <b>Dubrovnik</b> (l'antica Repubblica di Ragusa), <b>Spalato</b> (costruita dentro il palazzo dell'imperatore romano Diocleziano), Pola con la sua arena romana. In Istria vive una minoranza di lingua italiana.</li>
<li>Entrata nell'UE nel <b>2013</b>; dal 1° gennaio <b>2023</b> usa l'<b>euro</b> ed è nell'area Schengen. Economia: turismo, cantieri navali, agricoltura.</li>
</ul>
<p><b>Slovenia</b> – Capitale: <b>Lubiana</b> · circa 2,1 milioni di abitanti · circa 20.300 km². Confina con l'Italia (Friuli Venezia Giulia); ha un piccolo tratto di costa (Capodistria, Pirano). Vetta più alta: il <b>Triglav</b> (2.864 m). È famosa per le grotte del <b>Carso</b>, come quelle di Postumia. Nell'UE dal 2004, euro dal 2007.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz: Grecia e Croazia`,
      questions: [
        { type: `mc`, q: `Qual è l'isola più grande della Grecia?`, options: [`Rodi`, `Creta`, `Corfù`], answer: 1, explain: `Creta, circa 8.300 km².` },
        { type: `text`, q: `Qual è la capitale della Croazia?`, answer: [`zagabria`, `zagreb`], explain: `Zagabria.` },
        { type: `tf`, q: `La Croazia usa l'euro dal 2023.`, answer: true, explain: `Dal 1° gennaio 2023, quando è entrata anche nell'area Schengen.` }
      ]
    },
    {
      type: `text`,
      title: `4. Gli altri Stati dei Balcani`,
      html: `<p>Dal 1918 al 1991 gran parte dei Balcani occidentali formava un solo Stato, la <b>Jugoslavia</b> ("terra degli Slavi del sud"). Dopo la morte del maresciallo Tito (1980) crebbero le tensioni tra i diversi popoli; tra il <b>1991</b> e il 2001 la Jugoslavia si dissolse attraverso una serie di <b>guerre</b> molto sanguinose. La più grave fu in <b>Bosnia-Erzegovina</b> (1992-95), con l'assedio di Sarajevo e il genocidio di <b>Srebrenica</b> (luglio 1995), dove furono uccisi circa 8.000 uomini e ragazzi musulmani bosniaci. Oggi quei luoghi sono memoriali e la regione lavora per la riconciliazione.</p>
<table>
<tr><th>Stato</th><th>Capitale</th><th>Da sapere</th></tr>
<tr><td><b>Bosnia-Erzegovina</b></td><td>Sarajevo</td><td>Il ponte di Mostar (1566), distrutto nel 1993 e ricostruito nel 2004. A Sarajevo nel 1914 l'attentato che fece scoppiare la Prima guerra mondiale.</td></tr>
<tr><td><b>Serbia</b></td><td>Belgrado</td><td>Belgrado sorge dove la Sava si getta nel Danubio. Si usano sia l'alfabeto cirillico sia quello latino.</td></tr>
<tr><td><b>Montenegro</b></td><td>Podgorica</td><td>Usa l'euro pur non essendo nell'UE. Bocche di Cattaro.</td></tr>
<tr><td><b>Albania</b></td><td>Tirana</td><td>L'albanese è una lingua indoeuropea senza "sorelle". In Italia vivono da secoli comunità arbëreshë, di origine albanese.</td></tr>
<tr><td><b>Macedonia del Nord</b></td><td>Skopje</td><td>Lago di Ocrida; ha cambiato nome nel 2019.</td></tr>
<tr><td><b>Kosovo</b></td><td>Pristina</td><td>Ha dichiarato l'indipendenza nel 2008; la Serbia e diversi altri Stati non la riconoscono.</td></tr>
<tr><td><b>Bulgaria</b></td><td>Sofia</td><td>Nell'UE dal 2007, nell'euro dal 2026. Famosa per l'olio di rose.</td></tr>
</table>
<p>Albania, Bosnia-Erzegovina, Macedonia del Nord, Montenegro e Serbia sono <b>Paesi candidati</b> all'ingresso nell'UE. Nel Mediterraneo fanno parte dell'UE anche due Stati insulari: <b>Malta</b> (lo Stato più piccolo dell'UE) e <b>Cipro</b>.</p>`
    },
    {
      type: `widget`,
      title: `Abbina Paese e capitale`,
      widget: `match`,
      options: {
        pairs: [
          [`🇬🇷 Grecia`, `Atene`],
          [`🇭🇷 Croazia`, `Zagabria`],
          [`🇸🇮 Slovenia`, `Lubiana`],
          [`🇧🇦 Bosnia-Erzegovina`, `Sarajevo`],
          [`🇷🇸 Serbia`, `Belgrado`],
          [`🇦🇱 Albania`, `Tirana`],
          [`🇧🇬 Bulgaria`, `Sofia`],
          [`🇲🇰 Macedonia del Nord`, `Skopje`]
        ]
      },
      caption: `Otto Stati, otto capitali: alcune sono vicinissime all'Italia in linea d'aria (Tirana è a circa 200 km dalla Puglia).`
    },
    {
      type: `widget`,
      title: `Nell'UE o candidato?`,
      widget: `classify`,
      options: {
        groups: [`Membro dell'UE`, `Paese candidato`],
        items: [
          [`🇬🇷 Grecia`, 0],
          [`🇭🇷 Croazia`, 0],
          [`🇸🇮 Slovenia`, 0],
          [`🇧🇬 Bulgaria`, 0],
          [`🇲🇹 Malta`, 0],
          [`🇨🇾 Cipro`, 0],
          [`🇦🇱 Albania`, 1],
          [`🇷🇸 Serbia`, 1],
          [`🇲🇪 Montenegro`, 1],
          [`🇲🇰 Macedonia del Nord`, 1],
          [`🇧🇦 Bosnia-Erzegovina`, 1]
        ]
      },
      caption: `Per entrare nell'UE un Paese deve rispettare democrazia, diritti umani e stato di diritto, e adeguare migliaia di leggi.`
    },
    {
      type: `svg`,
      title: `Il carsismo: l'acqua che scava la roccia`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<rect x="0" y="90" width="600" height="230" fill="#d6d3d1"/>
<path d="M0 90 L150 90 Q190 135 230 90 L600 90" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<text x="190" y="80" font-size="15" text-anchor="middle" font-weight="bold">dolina</text>
<line x1="80" y1="20" x2="70" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="110" y1="20" x2="100" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="140" y1="20" x2="130" y2="55" stroke="#2563eb" stroke-width="3"/>
<text x="110" y="15" font-size="14" text-anchor="middle" fill="#1d4ed8">pioggia (con CO₂)</text>
<path d="M190 120 L200 170 L230 200" stroke="#2563eb" stroke-width="5" fill="none"/>
<ellipse cx="350" cy="225" rx="170" ry="55" fill="#57534e"/>
<polygon points="250,180 258,210 266,180" fill="#e7e5e4"/>
<polygon points="300,172 308,215 316,172" fill="#e7e5e4"/>
<polygon points="400,175 408,205 416,175" fill="#e7e5e4"/>
<polygon points="440,272 448,240 456,272" fill="#e7e5e4"/>
<polygon points="330,278 338,250 346,278" fill="#e7e5e4"/>
<path d="M190 255 Q350 285 520 250" stroke="#3b82f6" stroke-width="7" fill="none"/>
<text x="350" y="230" font-size="16" text-anchor="middle" font-weight="bold" fill="#ffffff">GROTTA</text>
<text x="545" y="190" font-size="13" text-anchor="middle">stalattiti</text>
<text x="545" y="206" font-size="13" text-anchor="middle">(dall'alto)</text>
<text x="545" y="290" font-size="13" text-anchor="middle">stalagmiti (dal basso)</text>
<text x="200" y="305" font-size="13" text-anchor="middle" fill="#1d4ed8">fiume sotterraneo</text>
<text x="450" y="120" font-size="15" text-anchor="middle" fill="#44403c">roccia calcarea</text>
</svg>`,
      caption: `L'acqua piovana, leggermente acida, scioglie il calcare: in superficie si formano conche (doline), sottoterra grotte e fiumi. Il fenomeno prende il nome dal Carso, tra Italia e Slovenia.`
    },
    {
      type: `example`,
      title: `Esempio pratico: in traghetto dall'Italia ai Balcani`,
      html: `<p>Dai porti dell'Adriatico partono ogni giorno traghetti verso l'altra sponda:</p>
<table>
<tr><th>Partenza</th><th>Arrivo</th><th>Durata indicativa</th></tr>
<tr><td>Ancona</td><td>Spalato (Croazia)</td><td>circa 10-11 ore (notte)</td></tr>
<tr><td>Bari</td><td>Durazzo (Albania)</td><td>circa 9 ore</td></tr>
<tr><td>Brindisi</td><td>Igoumenitsa (Grecia)</td><td>circa 8 ore</td></tr>
<tr><td>Ancona / Bari</td><td>Patrasso (Grecia)</td><td>circa 16-22 ore</td></tr>
</table>
<p>Su una carta, misura con il righello la distanza Bari-Durazzo: circa 200 km in linea d'aria. Se il traghetto viaggia a circa 22 nodi (circa 40 km/h), quante ore servono in teoria? (200 : 40 = 5 ore: il resto del tempo serve per manovre, carico e una velocità media più bassa.)</p>`
    },
    {
      type: `example`,
      title: `Esempio pratico: parli greco senza saperlo!`,
      html: `<p>Moltissime parole italiane, soprattutto scientifiche, vengono dal greco antico. Prova a scomporle:</p>
<ul>
<li><b>geo-grafia</b> = terra + scrittura (descrizione della Terra);</li>
<li><b>demo-crazia</b> = popolo + potere;</li>
<li><b>arcipelago</b> = mare principale (era il nome dell'Egeo, pieno di isole);</li>
<li><b>tele-fono</b> = lontano + voce;</li>
<li><b>Mediterraneo</b> invece è latino: "in mezzo alle terre".</li>
</ul>
<p>Usa le carte qui sotto per esercitarti.</p>`
    },
    {
      type: `widget`,
      title: `Flashcard: parole greche nell'italiano`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `🌍 geo-`, back: `terra (geografia, geologia)` },
          { front: `👥 demo-`, back: `popolo (democrazia, demografia)` },
          { front: `📞 tele-`, back: `lontano (telefono, televisione)` },
          { front: `🏙️ polis`, back: `città (metropoli, politica)` },
          { front: `📖 -logia`, back: `studio, discorso (biologia, zoologia)` },
          { front: `🔊 phonè`, back: `voce, suono (telefono, microfono)` },
          { front: `🌊 pelagos`, back: `mare (arcipelago, pelagico)` }
        ]
      },
      caption: `Gira le carte: indovina il significato prima di guardare il retro.`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… la cravatta viene dalla Croazia?`,
      html: `<p>Nel Seicento i soldati croati al servizio del re di Francia portavano al collo un fazzoletto annodato. Ai Parigini piacque moltissimo e lo chiamarono <i>à la croate</i>, "alla croata": da qui la parola <b>cravatta</b>. Il 18 ottobre in Croazia si celebra la Giornata della cravatta. E il dalmata, il cane a macchie bianche e nere, prende il nome proprio dalla Dalmazia!</p>`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… in Bulgaria "sì" e "no" si fanno al contrario?`,
      html: `<p>In Bulgaria (e in parte in Albania e Macedonia del Nord) tradizionalmente si <b>scuote la testa</b> da destra a sinistra per dire <b>sì</b> e si fa un cenno con la testa su e giù per dire <b>no</b>. Molti bulgari oggi usano anche i gesti "internazionali", quindi… meglio chiedere a voce! E l'alfabeto cirillico si è sviluppato proprio nelle scuole del primo regno bulgaro, nel IX-X secolo.</p>`
    },
    {
      type: `decision`,
      title: `2018: Grecia e Macedonia, una lite per un nome`,
      html: `<p>Dal 1991 un piccolo Stato balcanico si chiama "Repubblica di Macedonia". Ma <b>Macedonia</b> è anche il nome di una grande regione della Grecia, la terra di Alessandro Magno. La Grecia teme rivendicazioni sul suo territorio e sulla sua storia, e per questo blocca l'ingresso del vicino nella NATO e i negoziati con l'UE. Sei uno dei negoziatori.</p>`,
      question: `Che soluzione proponi?`,
      options: [
        { label: `Lo Stato vicino deve rinunciare del tutto alla parola "Macedonia".`, outcome: `Per i suoi abitanti, che si chiamano macedoni da generazioni e parlano la lingua macedone, sarebbe inaccettabile: nessun governo potrebbe firmarlo.` },
        { label: `Un nome con un aggettivo geografico che lo distingua dalla regione greca, più garanzie reciproche.`, outcome: `Entrambe le parti devono rinunciare a qualcosa e i nazionalisti di entrambi i Paesi protesteranno. Ma si sblocca una lite che dura da 27 anni.` },
        { label: `Lasciamo le cose come stanno.`, outcome: `Il blocco continuerebbe: niente NATO, niente UE, relazioni tese tra vicini.` }
      ],
      answer: 1,
      explain: `Con l'<b>Accordo di Prespa</b> (giugno 2018, dal nome del lago al confine tra i Paesi), il vicino della Grecia ha preso il nome di <b>Repubblica della Macedonia del Nord</b> (in vigore dal 2019), chiarendo di non avere legami con l'antica Macedonia di Alessandro Magno; la Grecia ha tolto il veto. Nel 2020 la Macedonia del Nord è entrata nella NATO. I due premier ricevettero vari riconoscimenti internazionali: è un esempio di come la diplomazia possa risolvere conflitti legati a geografia e identità.`
    },
    {
      type: `alternatives`,
      title: `Altri modi per capire i Balcani`,
      intro: `Una regione complessa: ecco altre chiavi per capirla.`,
      tabs: [
        {
          label: `🧩 La Jugoslavia come un mosaico`,
          html: `<p>Immagina un mosaico fatto di tessere di colori diversi, tenute insieme da una cornice. Le tessere erano i popoli (sloveni, croati, serbi, bosniaci, montenegrini, macedoni, albanesi del Kosovo…), con lingue, religioni (cattolica, ortodossa, musulmana) e storie diverse. La cornice era lo Stato jugoslavo guidato da Tito. Quando la cornice si è rotta, le tessere si sono separate, purtroppo con molta violenza.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f8fafc"/>
<rect x="20" y="20" width="250" height="160" fill="none" stroke="#334155" stroke-width="6"/>
<rect x="30" y="30" width="70" height="60" fill="#60a5fa"/>
<rect x="100" y="30" width="80" height="60" fill="#f87171"/>
<rect x="180" y="30" width="80" height="60" fill="#fbbf24"/>
<rect x="30" y="90" width="80" height="80" fill="#34d399"/>
<rect x="110" y="90" width="70" height="80" fill="#a78bfa"/>
<rect x="180" y="90" width="80" height="80" fill="#f472b6"/>
<text x="145" y="198" font-size="14" text-anchor="middle">Jugoslavia (fino al 1991)</text>
<text x="300" y="105" font-size="30" text-anchor="middle">→</text>
<rect x="340" y="25" width="60" height="50" fill="#60a5fa"/>
<rect x="420" y="20" width="65" height="50" fill="#f87171"/>
<rect x="505" y="30" width="65" height="50" fill="#fbbf24"/>
<rect x="345" y="105" width="65" height="60" fill="#34d399"/>
<rect x="430" y="110" width="60" height="60" fill="#a78bfa"/>
<rect x="510" y="115" width="60" height="55" fill="#f472b6"/>
<text x="455" y="198" font-size="14" text-anchor="middle">7 Stati di oggi (con il Kosovo)</text>
</svg>`
        },
        {
          label: `🍬 Il carsismo con lo zucchero`,
          html: `<p>Fai un esperimento: costruisci una piccola torre con le <b>zollette di zucchero</b> (rappresentano il calcare) e versaci sopra lentamente qualche goccia d'acqua con un contagocce. Vedrai che l'acqua "scava" canali e buchi e la torre si sbriciola dove passa l'acqua.</p>
<p>Il calcare si scioglie molto più lentamente dello zucchero (servono migliaia di anni), ma il principio è lo stesso: l'acqua piovana, resa leggermente acida dall'anidride carbonica, scioglie la roccia e crea doline, grotte, fiumi che spariscono sottoterra. È per questo che sulle coste dalmate e sul Carso ci sono pochi fiumi in superficie.</p>`
        },
        {
          label: `🌍 Sul globo`,
          html: `<p>Gira il globo e trova le capitali e i luoghi famosi della regione. Nota quanto sono vicini all'Italia!</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 37.98, lon: 23.73, label: `Atene`, color: `#2563eb` },
              { lat: 45.81, lon: 15.98, label: `Zagabria`, color: `#ef4444` },
              { lat: 42.65, lon: 18.09, label: `Dubrovnik`, color: `#f97316` },
              { lat: 43.86, lon: 18.41, label: `Sarajevo`, color: `#eab308` },
              { lat: 44.82, lon: 20.46, label: `Belgrado`, color: `#a855f7` },
              { lat: 41.33, lon: 19.82, label: `Tirana`, color: `#dc2626` },
              { lat: 42.7, lon: 23.32, label: `Sofia`, color: `#16a34a` },
              { lat: 40.09, lon: 22.36, label: `Monte Olimpo`, color: `#64748b` },
              { lat: 36.4, lon: 25.43, label: `Santorini`, color: `#f97316` },
              { lat: 41.11, lon: 16.87, label: `Bari (Italia)`, color: `#0ea5e9` }
            ]
          }
        },
        {
          label: `📐 Confronta con l'Italia`,
          html: `<table>
<tr><th></th><th>Grecia</th><th>Italia</th></tr>
<tr><td>Superficie</td><td>132.000 km²</td><td>302.000 km²</td></tr>
<tr><td>Abitanti</td><td>10,4 milioni</td><td>59 milioni</td></tr>
<tr><td>Isole</td><td>circa 6.000 (circa 200 abitate)</td><td>circa 800 (circa 80 abitate)</td></tr>
<tr><td>Vetta più alta</td><td>Olimpo 2.918 m</td><td>Monte Bianco 4.806 m</td></tr>
<tr><td>Vulcani attivi famosi</td><td>Santorini</td><td>Etna, Vesuvio, Stromboli</td></tr>
<tr><td>Clima costiero</td><td>mediterraneo</td><td>mediterraneo</td></tr>
</table>
<p>Grecia e Italia sono due penisole "sorelle": stesso mare, stesso clima, molti terremoti, una lunga storia in comune (la Magna Grecia nel Sud Italia).</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Mappa dell'Europa mediterranea e balcanica`,
      nodes: [
        { id: `placche`, label: `Scontro di placche`, x: 50, y: 6, color: `#7c3aed`, html: `La placca africana spinge contro quella euroasiatica.`, why: `Questo movimento lentissimo (pochi cm all'anno) ha sollevato le montagne della regione e provoca ancora terremoti e vulcani, come in Grecia e a Santorini.` },
        { id: `montagne`, label: `Montagne calcaree`, x: 20, y: 25, color: `#a16207`, html: `Alpi Dinariche, Balcani, Pindo: la penisola è in gran parte montuosa.`, why: `Le rocce calcaree si formarono sul fondo di antichi mari da gusci e scheletri di organismi marini; poi lo scontro delle placche le sollevò.` },
        { id: `carsismo`, label: `Carsismo`, x: 20, y: 55, color: `#57534e`, html: `Grotte, doline, fiumi sotterranei.`, why: `L'acqua piovana, resa acida dall'anidride carbonica, scioglie il calcare. Il nome viene dal Carso (Kras), tra Trieste e la Slovenia, dove il fenomeno fu studiato per la prima volta.` },
        { id: `coste`, label: `Coste e isole`, x: 80, y: 25, color: `#0ea5e9`, html: `Coste frastagliate e migliaia di isole in Grecia e Croazia.`, why: `Alla fine dell'ultima glaciazione il livello del mare salì di oltre 100 m e invase le valli tra le montagne costiere: le cime rimaste fuori dall'acqua sono diventate isole.` },
        { id: `clima`, label: `Clima mediterraneo e continentale`, x: 50, y: 40, color: `#eab308`, html: `Caldo e secco sulle coste, freddo d'inverno nell'interno.`, why: `Le montagne parallele alla costa fermano l'influenza del mare: a pochi km di distanza il clima cambia molto.` },
        { id: `turismo`, label: `Turismo e mare`, x: 80, y: 55, color: `#f97316`, html: `Turismo, navigazione e pesca sono attività fondamentali.`, why: `Mare limpido, clima soleggiato e patrimonio storico attirano decine di milioni di visitatori; le coste lunghe hanno sempre spinto i popoli a navigare.` },
        { id: `popoli`, label: `Tanti popoli e religioni`, x: 50, y: 70, color: `#a855f7`, html: `Greci, slavi del sud, albanesi; ortodossi, cattolici, musulmani.`, why: `La penisola è stata un crocevia: Greci, Romani, Bizantini, Slavi (dal VI-VII secolo), Veneziani, Ottomani (per quasi 500 anni) e Asburgo vi hanno lasciato lingue, religioni e culture diverse.` },
        { id: `jugoslavia`, label: `Jugoslavia e guerre`, x: 25, y: 90, color: `#7f1d1d`, html: `Uno Stato unito (1918-1991), poi la dissoluzione e le guerre degli anni '90.`, why: `Dopo la fine dei grandi imperi si cercò di unire gli Slavi del sud; la crisi economica e i nazionalismi degli anni '80-'90 portarono alla divisione violenta.` },
        { id: `ue`, label: `Verso l'Europa unita`, x: 75, y: 90, color: `#1d4ed8`, html: `Grecia, Slovenia, Croazia, Bulgaria nell'UE; altri Stati candidati.`, why: `L'ingresso nell'UE è visto come garanzia di pace, democrazia e sviluppo; richiede riforme e la soluzione delle dispute tra vicini, come mostra l'Accordo di Prespa.` }
      ],
      edges: [
        [`placche`, `montagne`, `sollevano le`],
        [`montagne`, `carsismo`, `di calcare → `],
        [`placche`, `coste`, `con il mare che sale →`],
        [`montagne`, `clima`, `separano costa e interno`],
        [`coste`, `turismo`, `attirano il`],
        [`montagne`, `popoli`, `valli isolate`],
        [`popoli`, `jugoslavia`, `uniti e poi divisi`],
        [`jugoslavia`, `ue`, `dalla guerra all'integrazione`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz: i Balcani`,
      questions: [
        { type: `mc`, q: `Da dove viene il nome "Balcani"?`, options: [`Da un re antico`, `Dai Monti Balcani: in turco "catena di monti boscosi"`, `Da un fiume`], answer: 1, explain: `I Monti Balcani si trovano in Bulgaria.` },
        { type: `mc`, q: `Che cosa provoca il carsismo?`, options: [`Il vento che leviga le rocce`, `L'acqua che scioglie il calcare formando grotte e doline`, `I vulcani`], answer: 1, explain: `Prende il nome dal Carso, tra Italia e Slovenia.` },
        { type: `text`, q: `Qual è la capitale della Serbia?`, answer: [`belgrado`, `beograd`], explain: `Belgrado, alla confluenza di Sava e Danubio.` }
      ]
    }
  ],
  glossary: [
    { t: `Penisola balcanica`, d: `Penisola dell'Europa sud-orientale tra Adriatico, Ionio, Egeo e Mar Nero.` },
    { t: `Alpi Dinariche`, d: `Catena montuosa calcarea che corre lungo la costa orientale dell'Adriatico.` },
    { t: `Carsismo`, d: `Insieme dei fenomeni prodotti dall'acqua che scioglie le rocce calcaree (grotte, doline, fiumi sotterranei).` },
    { t: `Dolina`, d: `Conca a forma di imbuto creata dal carsismo.` },
    { t: `Bora`, d: `Vento freddo e violento che soffia da nord-est sull'Adriatico.` },
    { t: `Istmo`, d: `Striscia stretta di terra che unisce due terre e separa due mari, come quello di Corinto.` },
    { t: `Jugoslavia`, d: `Stato degli Slavi del sud esistito dal 1918 al 1991-92, poi diviso in più Stati.` },
    { t: `Caldera`, d: `Grande conca formata dal crollo di un vulcano dopo un'eruzione, come a Santorini.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quali mari bagnano la penisola balcanica?`, options: [`Adriatico, Ionio, Egeo, Mar Nero`, `Tirreno, Ligure, Baltico`, `Mare del Nord e Atlantico`], answer: 0, explain: `Quattro mari: Adriatico, Ionio, Egeo e Mar Nero.` },
      { type: `text`, q: `Qual è la capitale della Grecia?`, answer: [`atene`, `athina`], explain: `Atene.` },
      { type: `mc`, q: `Qual è la montagna più alta della Grecia?`, options: [`Olimpo`, `Triglav`, `Musala`], answer: 0, explain: `L'Olimpo, 2.918 m. Il Triglav è in Slovenia, il Musala in Bulgaria.` },
      { type: `tf`, q: `La Grecia ha migliaia di isole, ma solo poco più di 200 sono abitate.`, answer: true, explain: `Circa 6.000 tra isole e isolotti, poco più di 200 abitate.` },
      { type: `mc`, q: `Che cosa collega il Canale di Corinto?`, options: [`Il Mar Nero e l'Egeo`, `Il Golfo di Corinto e il Mar Egeo, tagliando l'istmo`, `L'Adriatico e lo Ionio`], answer: 1, explain: `Fu scavato nel 1893 attraverso l'istmo di Corinto.` },
      { type: `num`, q: `In che anno la Croazia è entrata nell'Unione Europea?`, answer: 2013, explain: `Nel 2013; dal 2023 usa l'euro.` },
      { type: `mc`, q: `Quale Stato usa l'euro pur non facendo parte dell'UE?`, options: [`Montenegro`, `Serbia`, `Albania`], answer: 0, explain: `Il Montenegro l'ha adottato unilateralmente.` },
      { type: `order`, q: `Metti in ordine cronologico.`, items: [`Attentato di Sarajevo`, `Nascita della Jugoslavia`, `Morte di Tito`, `Inizio della dissoluzione della Jugoslavia`, `Croazia nell'UE`], explain: `1914, 1918, 1980, 1991, 2013.` },
      { type: `mc`, q: `Perché sulla costa dalmata ci sono pochi fiumi in superficie?`, options: [`Perché non piove mai`, `Perché per il carsismo l'acqua scorre sottoterra`, `Perché i fiumi sono stati deviati`], answer: 1, explain: `Il calcare è sciolto dall'acqua, che si infiltra e forma fiumi sotterranei.` },
      { type: `text`, q: `Come si chiama oggi lo Stato che con l'Accordo di Prespa ha cambiato nome? (Macedonia del …)`, answer: [`nord`, `macedonia del nord`], explain: `Repubblica della Macedonia del Nord, dal 2019.` },
      { type: `tf`, q: `Il clima dell'interno dei Balcani è uguale a quello della costa.`, answer: false, explain: `Sulle coste è mediterraneo; nell'interno, protetto dalle montagne, è continentale.` },
      { type: `mc`, q: `Quale Stato è il più piccolo dell'Unione Europea?`, options: [`Cipro`, `Malta`, `Slovenia`], answer: 1, explain: `Malta, circa 316 km².` }
    ]
  }
});
