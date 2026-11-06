TOPIC('it', {
  id: `p5-geo-unione-europea`,
  title: `L'Unione Europea`,
  intro: `Con la carta d'identità puoi andare in vacanza in Spagna o in Austria senza passaporto e, in tanti Paesi, pagare il gelato in <b>euro</b> come a casa. È merito dell'<b>Unione Europea</b> (UE): 27 Stati che hanno deciso di collaborare. Scopriamo come è nata, quali sono i suoi membri e come funzionano le sue <b>istituzioni</b>.`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Perché è nata l'Unione Europea`,
      html: `<p>Nella prima metà del Novecento l'Europa fu distrutta da <b>due guerre mondiali</b> (1914–1918 e 1939–1945). Milioni di morti, città rase al suolo. Alcuni politici pensarono: <i>"Se i Paesi europei lavorano insieme e dipendono gli uni dagli altri, non si faranno più la guerra".</i></p>
<ul>
<li><b>1941</b>: confinati dal fascismo sull'isola di <b>Ventotene</b>, Altiero Spinelli ed Ernesto Rossi scrivono il <b>Manifesto di Ventotene</b>, che sogna un'Europa unita e libera.</li>
<li><b>9 maggio 1950</b>: il ministro francese <b>Robert Schuman</b> propone di mettere in comune il <b>carbone e l'acciaio</b> di Francia e Germania, le materie prime per costruire le armi. Per questo il <b>9 maggio</b> è la <b>Festa dell'Europa</b>.</li>
<li><b>1951</b>: nasce la <b>CECA</b> (Comunità Europea del Carbone e dell'Acciaio) con 6 Paesi.</li>
<li><b>1957</b>: con i <b>Trattati di Roma</b> nasce la <b>CEE</b> (Comunità Economica Europea): merci e persone circolano più liberamente.</li>
<li><b>1992</b>: con il <b>Trattato di Maastricht</b> (Paesi Bassi) nasce l'<b>Unione Europea</b>, in vigore dal 1993.</li>
<li><b>2002</b>: entrano in tasca le monete e le banconote in <b>euro</b>.</li>
</ul>`
    },
    {
      type: `text`, title: `2. I Paesi fondatori e i 27 Stati membri`,
      html: `<p>I <b>6 Paesi fondatori</b> (1957) furono: <b>Belgio, Francia, Germania (Ovest), Italia, Lussemburgo e Paesi Bassi</b>.</p>
<p>Poi l'Unione si è <b>allargata</b> più volte. Oggi gli Stati membri sono <b>27</b>:</p>
<p>Austria · Belgio · Bulgaria · Cipro · Croazia · Danimarca · Estonia · Finlandia · Francia · Germania · Grecia · Irlanda · Italia · Lettonia · Lituania · Lussemburgo · Malta · Paesi Bassi · Polonia · Portogallo · Repubblica Ceca · Romania · Slovacchia · Slovenia · Spagna · Svezia · Ungheria</p>
<p>Il <b>Regno Unito</b> è entrato nel 1973 ed è <b>uscito</b> il 31 gennaio 2020 (la "Brexit"). Alcuni Paesi, come <b>Ucraina, Moldavia, Albania, Montenegro, Serbia</b>, sono <b>candidati</b> a entrare. Altri Paesi europei, come la <b>Svizzera</b> e la <b>Norvegia</b>, hanno scelto di non farne parte.</p>
<p>Nell'UE vivono circa <b>450 milioni</b> di persone e si parlano <b>24 lingue ufficiali</b>.</p>`
    },
    {
      type: `widget`, title: `Gli allargamenti dell'Unione`,
      widget: `timeline`,
      caption: `Da 6 a 28 Paesi, poi 27 dopo l'uscita del Regno Unito.`,
      options: {
        unit: `anni`,
        events: [
          { year: 1957, label: `6 fondatori: Belgio, Francia, Germania, Italia, Lussemburgo, Paesi Bassi`, icon: `🌱` },
          { year: 1973, label: `+ Danimarca, Irlanda, Regno Unito (9)`, icon: `➕` },
          { year: 1981, label: `+ Grecia (10)`, icon: `➕` },
          { year: 1986, label: `+ Spagna, Portogallo (12)`, icon: `➕` },
          { year: 1995, label: `+ Austria, Finlandia, Svezia (15)`, icon: `➕` },
          { year: 2004, label: `+ 10 Paesi, tra cui Polonia, Malta, Cipro (25)`, icon: `🎉` },
          { year: 2007, label: `+ Bulgaria, Romania (27)`, icon: `➕` },
          { year: 2013, label: `+ Croazia (28)`, icon: `➕` },
          { year: 2020, label: `Esce il Regno Unito (27)`, icon: `👋` }
        ]
      }
    },
    {
      type: `3d`, title: `Le capitali dell'Europa sul globo`,
      scene: `globe`,
      caption: `Ruota il globo: in verde i 6 fondatori, in blu gli altri Stati membri, in arancione le sedi delle istituzioni.`,
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: `Roma`, color: `#22c55e` },
          { lat: 48.85, lon: 2.35, label: `Parigi`, color: `#22c55e` },
          { lat: 52.52, lon: 13.4, label: `Berlino`, color: `#22c55e` },
          { lat: 52.37, lon: 4.9, label: `Amsterdam`, color: `#22c55e` },
          { lat: 50.85, lon: 4.35, label: `Bruxelles (Commissione, Consiglio)`, color: `#f97316` },
          { lat: 49.61, lon: 6.13, label: `Lussemburgo (Corte di giustizia)`, color: `#f97316` },
          { lat: 48.58, lon: 7.75, label: `Strasburgo (Parlamento europeo)`, color: `#f97316` },
          { lat: 50.11, lon: 8.68, label: `Francoforte (Banca centrale europea)`, color: `#f97316` },
          { lat: 40.42, lon: -3.7, label: `Madrid`, color: `#3b82f6` },
          { lat: 38.72, lon: -9.14, label: `Lisbona`, color: `#3b82f6` },
          { lat: 53.35, lon: -6.26, label: `Dublino`, color: `#3b82f6` },
          { lat: 55.68, lon: 12.57, label: `Copenaghen`, color: `#3b82f6` },
          { lat: 59.33, lon: 18.07, label: `Stoccolma`, color: `#3b82f6` },
          { lat: 60.17, lon: 24.94, label: `Helsinki`, color: `#3b82f6` },
          { lat: 59.44, lon: 24.75, label: `Tallinn`, color: `#3b82f6` },
          { lat: 56.95, lon: 24.1, label: `Riga`, color: `#3b82f6` },
          { lat: 54.69, lon: 25.28, label: `Vilnius`, color: `#3b82f6` },
          { lat: 52.23, lon: 21.01, label: `Varsavia`, color: `#3b82f6` },
          { lat: 50.08, lon: 14.44, label: `Praga`, color: `#3b82f6` },
          { lat: 48.15, lon: 17.11, label: `Bratislava`, color: `#3b82f6` },
          { lat: 48.21, lon: 16.37, label: `Vienna`, color: `#3b82f6` },
          { lat: 47.5, lon: 19.04, label: `Budapest`, color: `#3b82f6` },
          { lat: 46.06, lon: 14.51, label: `Lubiana`, color: `#3b82f6` },
          { lat: 45.81, lon: 15.98, label: `Zagabria`, color: `#3b82f6` },
          { lat: 44.43, lon: 26.1, label: `Bucarest`, color: `#3b82f6` },
          { lat: 42.7, lon: 23.32, label: `Sofia`, color: `#3b82f6` },
          { lat: 37.98, lon: 23.73, label: `Atene`, color: `#3b82f6` },
          { lat: 35.9, lon: 14.51, label: `La Valletta`, color: `#3b82f6` },
          { lat: 35.17, lon: 33.36, label: `Nicosia`, color: `#3b82f6` }
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-quiz: la storia dell'UE`,
      questions: [
        { type: `num`, q: `Quanti sono oggi gli Stati membri dell'Unione Europea?`, answer: 27, tol: 0, explain: `27, dopo l'uscita del Regno Unito nel 2020.` },
        { type: `mc`, q: `In quale città furono firmati i Trattati del 1957?`, options: [`Parigi`, `Roma`, `Maastricht`], answer: 1, explain: `I Trattati di Roma del 25 marzo 1957 crearono la CEE.` },
        { type: `tf`, q: `L'Italia è uno dei 6 Paesi fondatori.`, answer: true, explain: `Con Belgio, Francia, Germania, Lussemburgo e Paesi Bassi.` }
      ]
    },
    {
      type: `text`, title: `3. Le istituzioni: chi decide nell'UE`,
      html: `<p>Come uno Stato, anche l'UE ha i suoi organi. I principali sono:</p>
<table>
<tr><th>Istituzione</th><th>Chi ne fa parte</th><th>Che cosa fa</th><th>Sede</th></tr>
<tr><td>🗳️ <b>Parlamento europeo</b></td><td>720 deputati eletti dai cittadini ogni 5 anni (76 italiani)</td><td>Approva le leggi europee e il bilancio, insieme al Consiglio</td><td>Strasburgo e Bruxelles</td></tr>
<tr><td>🤝 <b>Consiglio dell'Unione Europea</b></td><td>Un ministro per ogni Stato (cambia secondo l'argomento)</td><td>Approva le leggi insieme al Parlamento</td><td>Bruxelles</td></tr>
<tr><td>⭐ <b>Consiglio europeo</b></td><td>I capi di Stato o di governo dei 27 Paesi</td><td>Decide le grandi direzioni politiche</td><td>Bruxelles</td></tr>
<tr><td>🏢 <b>Commissione europea</b></td><td>27 commissari, uno per Paese, con una Presidente o un Presidente</td><td>Propone le leggi e controlla che vengano rispettate; è il "governo" dell'UE</td><td>Bruxelles</td></tr>
<tr><td>⚖️ <b>Corte di giustizia</b></td><td>Un giudice per ogni Stato</td><td>Controlla che le leggi europee siano applicate in modo uguale ovunque</td><td>Lussemburgo</td></tr>
<tr><td>💶 <b>Banca centrale europea</b></td><td>I governatori delle banche centrali</td><td>Gestisce l'euro</td><td>Francoforte</td></tr>
</table>
<p>In breve: la <b>Commissione propone</b>, il <b>Parlamento e il Consiglio approvano</b>, la <b>Corte controlla</b>.</p>`
    },
    {
      type: `svg`, title: `Come nasce una legge europea`,
      caption: `Il "triangolo" delle istituzioni: la Commissione propone, Parlamento e Consiglio decidono insieme.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#1e3a8a"/>
<g fill="#facc15" font-size="22" text-anchor="middle">
<text x="300" y="38">★</text><text x="345" y="50">★</text><text x="378" y="82">★</text><text x="390" y="125">★</text>
<text x="378" y="168">★</text><text x="345" y="200">★</text><text x="300" y="212">★</text><text x="255" y="200">★</text>
<text x="222" y="168">★</text><text x="210" y="125">★</text><text x="222" y="82">★</text><text x="255" y="50">★</text>
</g>
<rect x="200" y="100" width="200" height="50" rx="10" fill="#f97316"/>
<text x="300" y="122" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">COMMISSIONE</text>
<text x="300" y="141" font-size="13" text-anchor="middle" fill="#ffffff">propone la legge</text>
<rect x="20" y="240" width="210" height="60" rx="10" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
<text x="125" y="265" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">PARLAMENTO</text>
<text x="125" y="286" font-size="13" text-anchor="middle" fill="#ffffff">voce dei cittadini</text>
<rect x="370" y="240" width="210" height="60" rx="10" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
<text x="475" y="265" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">CONSIGLIO UE</text>
<text x="475" y="286" font-size="13" text-anchor="middle" fill="#ffffff">voce dei governi</text>
<line x1="250" y1="150" x2="140" y2="238" stroke="#ffffff" stroke-width="4"/>
<line x1="350" y1="150" x2="460" y2="238" stroke="#ffffff" stroke-width="4"/>
<line x1="230" y1="270" x2="370" y2="270" stroke="#facc15" stroke-width="4" stroke-dasharray="8 5"/>
<text x="300" y="262" font-size="14" text-anchor="middle" fill="#facc15" font-weight="bold">approvano insieme</text>
<text x="300" y="300" font-size="14" text-anchor="middle" fill="#e0e7ff">= legge europea</text>
</svg>`
    },
    {
      type: `widget`, title: `Gioco: abbina l'istituzione al suo compito`,
      widget: `match`,
      options: {
        pairs: [
          [`Parlamento europeo`, `Eletto dai cittadini, approva le leggi`],
          [`Commissione europea`, `Propone le leggi`],
          [`Consiglio dell'UE`, `I ministri dei 27 Stati`],
          [`Consiglio europeo`, `I capi di Stato o di governo`],
          [`Corte di giustizia`, `Controlla il rispetto del diritto UE`],
          [`Banca centrale europea`, `Gestisce l'euro`]
        ]
      }
    },
    {
      type: `text`, title: `4. Che cosa cambia per noi`,
      html: `<ul>
<li>🚶 <b>Libera circolazione</b>: i cittadini europei possono vivere, studiare e lavorare in qualunque Paese dell'UE.</li>
<li>🛂 <b>Spazio Schengen</b>: tra quasi tutti i Paesi UE (e anche Svizzera, Norvegia, Islanda e Liechtenstein) non ci sono controlli fissi alle frontiere.</li>
<li>💶 <b>Euro</b>: la moneta unica è usata da <b>21 Paesi</b> UE (la Bulgaria è l'ultima entrata, nel 2026). Non usano l'euro Danimarca, Polonia, Repubblica Ceca, Romania, Svezia e Ungheria.</li>
<li>🎓 <b>Erasmus</b>: dal 1987 milioni di studenti hanno studiato per un periodo in un altro Paese europeo.</li>
<li>📱 <b>Roaming</b>: dal 2017 si telefona e si naviga dagli altri Paesi UE senza costi in più.</li>
<li>🛒 <b>Mercato unico</b>: le merci viaggiano senza dazi e con le stesse regole di sicurezza (il marchio <b>CE</b> sui giocattoli!).</li>
<li>🌍 <b>Ambiente</b>: regole comuni per l'aria, l'acqua, il riciclo.</li>
</ul>`
    },
    {
      type: `widget`, title: `Gioco: chi usa l'euro?`,
      widget: `classify`,
      caption: `Tutti questi Paesi sono nell'UE. Quali pagano in euro?`,
      options: {
        groups: [`💶 Usa l'euro`, `🪙 Ha un'altra moneta`],
        items: [
          [`Italia`, 0], [`Germania`, 0], [`Spagna`, 0], [`Croazia`, 0], [`Grecia`, 0], [`Bulgaria`, 0], [`Irlanda`, 0],
          [`Svezia`, 1], [`Polonia`, 1], [`Danimarca`, 1], [`Romania`, 1], [`Ungheria`, 1]
        ]
      }
    },
    {
      type: `example`, title: `Esempio pratico: una gita a Vienna`,
      html: `<p>La classe di Luca va in gita da Torino a <b>Vienna</b>, in Austria:</p>
<ul>
<li>Al confine non c'è nessun controllo fisso: Italia e Austria sono nello <b>spazio Schengen</b>. Basta avere con sé la carta d'identità.</li>
<li>Luca compra una cartolina e paga in <b>euro</b>: non serve cambiare i soldi.</li>
<li>Con il telefono della mamma chiama casa al prezzo di sempre, grazie alle regole sul <b>roaming</b>.</li>
<li>Se si fa male, la <b>tessera sanitaria europea</b> (il retro della tessera sanitaria) gli dà diritto alle cure pubbliche.</li>
</ul>`
    },
    {
      type: `example`, title: `Esempio pratico: il tappo attaccato alla bottiglia`,
      html: `<p>Hai notato che oggi i tappi delle bottiglie di plastica restano <b>attaccati</b> alla bottiglia? È una regola europea (una <b>direttiva</b> del 2019, obbligatoria da luglio 2024) contro la plastica dispersa in natura: i tappi erano tra i rifiuti più trovati sulle spiagge.</p>
<p>Ecco come funziona: la <b>Commissione</b> ha proposto la regola, il <b>Parlamento</b> e il <b>Consiglio</b> l'hanno approvata, poi ogni Stato l'ha inserita nelle sue leggi. Una decisione presa a Bruxelles e Strasburgo arriva fino alla tua merenda!</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li><b>1957</b> Trattati di Roma (6 fondatori) → <b>1992</b> Maastricht: nasce l'UE → <b>2002</b> euro in tasca.</li>
<li><b>27</b> Stati membri, circa <b>450 milioni</b> di abitanti, <b>24</b> lingue ufficiali.</li>
<li>Commissione <b>propone</b>, Parlamento + Consiglio <b>approvano</b>, Corte <b>controlla</b>.</li>
<li>Simboli: bandiera con <b>12 stelle</b> dorate, inno "<b>Inno alla gioia</b>", motto "<b>Unita nella diversità</b>", festa il <b>9 maggio</b>.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… le 12 stelle non sono i Paesi?`,
      html: `<p>Molti pensano che le stelle della bandiera europea siano una per ogni Stato. Invece sono <b>sempre 12</b>, anche se i Paesi sono 27! Il numero 12 è un simbolo di <b>completezza e armonia</b> (come i mesi dell'anno o le ore sul quadrante dell'orologio), e il cerchio rappresenta l'<b>unione</b> tra i popoli.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… l'inno europeo non ha parole?`,
      html: `<p>L'inno dell'UE è l'<b>Inno alla gioia</b>, dalla Nona Sinfonia di <b>Ludwig van Beethoven</b> (1824). Si suona solo con la musica, senza parole, così nessuna lingua è privilegiata: la musica è un linguaggio che capiscono tutti.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… l'UE ha vinto un Premio Nobel?`,
      html: `<p>Nel <b>2012</b> l'Unione Europea ha ricevuto il <b>Premio Nobel per la pace</b>, per aver trasformato un continente di guerre in un continente di pace, aiutando la riconciliazione tra nemici storici come Francia e Germania.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `L'UE è una costruzione complicata. Ecco altri modi per immaginarla.`,
      tabs: [
        {
          label: `🏘️ Come un condominio`,
          html: `<p>Immagina un grande <b>condominio</b> con 27 appartamenti. Ogni famiglia (Stato) a casa sua decide da sola: arredamento, orari, cene. Ma per le cose <b>comuni</b> (ascensore, giardino, tetto) si decide <b>insieme</b> nell'assemblea condominiale.</p>
<ul>
<li>L'<b>amministratore</b>, che prepara le proposte e controlla che le regole siano rispettate, è come la <b>Commissione</b>.</li>
<li>L'<b>assemblea dei condomini</b> è come il <b>Parlamento</b> e il <b>Consiglio</b>.</li>
<li>Il <b>regolamento</b> del condominio è come i <b>Trattati</b>.</li>
</ul>
<p>Nessuna famiglia perde la sua casa: mette in comune solo alcune cose per vivere meglio.</p>`
        },
        {
          label: `🧩 Matrioske di regole`,
          html: `<p>Sei cittadino di tanti "livelli" uno dentro l'altro, come le matrioske:</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<ellipse cx="300" cy="130" rx="285" ry="120" fill="#1e3a8a"/>
<ellipse cx="330" cy="140" rx="215" ry="95" fill="#16a34a"/>
<ellipse cx="365" cy="150" rx="150" ry="70" fill="#f59e0b"/>
<ellipse cx="400" cy="160" rx="85" ry="45" fill="#ef4444"/>
<text x="90" y="135" font-size="17" fill="#facc15" font-weight="bold">UE ★</text>
<text x="175" y="150" font-size="17" fill="#ffffff" font-weight="bold">ITALIA</text>
<text x="235" y="160" font-size="16" fill="#ffffff" font-weight="bold">Regione</text>
<text x="400" y="166" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">Comune</text>
</svg>`
        },
        {
          label: `🇪🇺 Le bandiere`,
          html: `<p>Riconosci i Paesi dall'aspetto della bandiera? Gira le carte!</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `🇮🇹`, back: `Italia – Roma` },
              { front: `🇫🇷`, back: `Francia – Parigi` },
              { front: `🇩🇪`, back: `Germania – Berlino` },
              { front: `🇪🇸`, back: `Spagna – Madrid` },
              { front: `🇵🇹`, back: `Portogallo – Lisbona` },
              { front: `🇧🇪`, back: `Belgio – Bruxelles` },
              { front: `🇳🇱`, back: `Paesi Bassi – Amsterdam` },
              { front: `🇦🇹`, back: `Austria – Vienna` },
              { front: `🇬🇷`, back: `Grecia – Atene` },
              { front: `🇷🇴`, back: `Romania – Bucarest` },
              { front: `🇵🇱`, back: `Polonia – Varsavia` },
              { front: `🇸🇪`, back: `Svezia – Stoccolma` }
            ]
          }
        },
        {
          label: `🌍 Altre unioni nel mondo`,
          html: `<p>L'UE non è l'unica unione di Paesi. Ce ne sono altre, ma nessuna è così stretta:</p>
<ul>
<li><b>Unione Africana</b> (55 Paesi, sede ad Addis Abeba).</li>
<li><b>ASEAN</b> (Paesi del Sud-Est asiatico, sede a Giacarta).</li>
<li><b>Mercosur</b> (America del Sud: Brasile, Argentina, Uruguay, Paraguay, Bolivia).</li>
</ul>
<p>Solo l'UE ha un <b>Parlamento eletto direttamente</b> dai cittadini di tanti Paesi e una moneta comune a molti membri.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 50.85, lon: 4.35, label: `Unione Europea – Bruxelles`, color: `#1e3a8a` },
              { lat: 9.03, lon: 38.74, label: `Unione Africana – Addis Abeba`, color: `#16a34a` },
              { lat: -6.2, lon: 106.85, label: `ASEAN – Giacarta`, color: `#ef4444` },
              { lat: -34.9, lon: -56.16, label: `Mercosur – Montevideo`, color: `#f59e0b` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: dalla guerra all'Unione`,
      nodes: [
        { id: `guerre`, label: `Due guerre mondiali`, x: 50, y: 6, color: `#64748b`, html: `1914–1918 e 1939–1945: l'Europa distrutta.`, why: `Francia e Germania si erano combattute tre volte in 70 anni (1870, 1914, 1939). Serviva un modo per rendere la guerra impossibile, non solo vietata.` },
        { id: `ventotene`, label: `Manifesto di Ventotene`, x: 18, y: 28, color: `#a855f7`, html: `1941: il sogno di un'Europa federale.`, why: `Spinelli e Rossi, prigionieri politici del fascismo, scrissero su cartine di sigarette che solo superando i nazionalismi l'Europa avrebbe avuto pace. Il testo uscì di nascosto dall'isola.` },
        { id: `schuman`, label: `Dichiarazione Schuman`, x: 50, y: 28, color: `#3b82f6`, html: `9 maggio 1950: carbone e acciaio in comune.`, why: `L'idea, preparata da Jean Monnet, era pratica: chi controlla insieme carbone e acciaio (che servono per fare le armi) non può preparare una guerra di nascosto. "L'Europa si farà con realizzazioni concrete."` },
        { id: `roma`, label: `Trattati di Roma`, x: 82, y: 28, color: `#22c55e`, html: `1957: nasce la CEE dei 6 fondatori.`, why: `Dopo il successo della CECA, i 6 Paesi decisero di unire tutta l'economia: un mercato comune senza dazi. Furono firmati in Campidoglio il 25 marzo 1957.` },
        { id: `maastricht`, label: `Maastricht`, x: 50, y: 52, color: `#f59e0b`, html: `1992: nasce l'Unione Europea e la cittadinanza europea.`, why: `Dopo la caduta del Muro di Berlino (1989) e la riunificazione tedesca, i Paesi vollero un'unione anche politica, con una moneta comune e diritti comuni per i cittadini.` },
        { id: `istituzioni`, label: `Istituzioni`, x: 18, y: 78, color: `#0ea5e9`, html: `Commissione, Parlamento, Consiglio, Corte, BCE.`, why: `Sono un equilibrio tra due esigenze: dare voce ai <b>cittadini</b> (Parlamento eletto, dal 1979) e ai <b>governi</b> degli Stati (Consigli), con un organo "di tutti" che propone (Commissione).` },
        { id: `euro`, label: `Euro`, x: 50, y: 78, color: `#eab308`, html: `Moneta comune dal 1999 (in tasca dal 2002).`, why: `Con una sola moneta non si perde tempo e denaro a cambiare valuta e i prezzi si confrontano facilmente. Per entrare, uno Stato deve avere i conti in ordine (i "criteri di Maastricht").` },
        { id: `cittadini`, label: `Diritti dei cittadini`, x: 82, y: 78, color: `#ef4444`, html: `Libera circolazione, Schengen, Erasmus.`, why: `Lo spazio Schengen prende il nome dal paesino del Lussemburgo dove nel 1985 fu firmato l'accordo. L'Erasmus porta il nome dell'umanista Erasmo da Rotterdam, che viaggiò e studiò in tutta Europa.` }
      ],
      edges: [
        [`guerre`, `ventotene`, `ispira`], [`guerre`, `schuman`, `spinge a`], [`schuman`, `roma`, `porta a`],
        [`roma`, `maastricht`, `si allarga in`], [`ventotene`, `maastricht`, `sogno realizzato`],
        [`maastricht`, `istituzioni`, `rafforza`], [`maastricht`, `euro`, `crea`], [`maastricht`, `cittadini`, `dà`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: istituzioni e simboli`,
      questions: [
        { type: `mc`, q: `Quale istituzione propone le leggi europee?`, options: [`La Commissione europea`, `La Corte di giustizia`, `La Banca centrale europea`], answer: 0, explain: `La Commissione ha il "diritto di iniziativa": propone le leggi.` },
        { type: `mc`, q: `Quante stelle ci sono sulla bandiera europea?`, options: [`27`, `12`, `6`], answer: 1, explain: `Sono 12, simbolo di completezza, e non cambiano con il numero dei Paesi.` },
        { type: `tf`, q: `Il Parlamento europeo è eletto direttamente dai cittadini.`, answer: true, explain: `Dal 1979 i cittadini lo eleggono ogni 5 anni.` }
      ]
    }
  ],
  glossary: [
    { t: `Unione Europea (UE)`, d: `Unione politica ed economica di 27 Stati europei.` },
    { t: `Stato membro`, d: `Paese che fa parte dell'Unione Europea.` },
    { t: `Trattato`, d: `Accordo scritto tra Stati; i trattati sono le "regole base" dell'UE.` },
    { t: `Commissione europea`, d: `Istituzione che propone le leggi e ne controlla l'applicazione.` },
    { t: `Parlamento europeo`, d: `Assemblea di 720 deputati eletti dai cittadini europei.` },
    { t: `Consiglio dell'UE`, d: `Riunione dei ministri degli Stati membri; approva le leggi con il Parlamento.` },
    { t: `Euro`, d: `Moneta comune usata da 21 Paesi UE.` },
    { t: `Spazio Schengen`, d: `Zona senza controlli fissi alle frontiere interne.` },
    { t: `Erasmus`, d: `Programma che permette di studiare in un altro Paese europeo.` },
    { t: `Brexit`, d: `Uscita del Regno Unito dall'UE (31 gennaio 2020).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `Quanti erano i Paesi fondatori nel 1957?`, answer: 6, tol: 0, explain: `Belgio, Francia, Germania, Italia, Lussemburgo, Paesi Bassi.` },
      { type: `mc`, q: `Quale di questi Paesi NON è un fondatore?`, options: [`Italia`, `Spagna`, `Belgio`], answer: 1, explain: `La Spagna è entrata nel 1986.` },
      { type: `order`, q: `Metti in ordine.`, items: [`Manifesto di Ventotene`, `Dichiarazione Schuman`, `Trattati di Roma`, `Trattato di Maastricht`, `Euro in tasca`], explain: `1941 → 1950 → 1957 → 1992 → 2002.` },
      { type: `mc`, q: `Dove ha sede la Corte di giustizia dell'UE?`, options: [`Bruxelles`, `Lussemburgo`, `Francoforte`], answer: 1, explain: `In Lussemburgo.` },
      { type: `text`, q: `Come si chiama la moneta comune europea?`, answer: [`euro`, `l'euro`, `l euro`], explain: `L'euro.` },
      { type: `tf`, q: `Tutti i Paesi dell'UE usano l'euro.`, answer: false, explain: `6 Paesi UE hanno ancora la loro moneta, come Polonia e Svezia.` },
      { type: `mc`, q: `Che cosa si festeggia il 9 maggio?`, options: [`La Festa dell'Europa`, `La Festa della Repubblica`, `La fine della guerra`], answer: 0, explain: `Ricorda la Dichiarazione Schuman del 9 maggio 1950.` },
      { type: `mc`, q: `Quale Paese è uscito dall'UE nel 2020?`, options: [`Irlanda`, `Regno Unito`, `Norvegia`], answer: 1, explain: `Il Regno Unito, con la Brexit.` },
      { type: `mc`, q: `Chi approva le leggi europee?`, options: [`Solo la Commissione`, `Parlamento europeo e Consiglio dell'UE insieme`, `La Banca centrale europea`], answer: 1, explain: `La Commissione propone, Parlamento e Consiglio approvano.` },
      { type: `text`, q: `Come si chiama l'inno europeo?`, answer: [`inno alla gioia`, `l'inno alla gioia`, `ode alla gioia`], explain: `L'Inno alla gioia di Beethoven.` },
      { type: `tf`, q: `Grazie a Schengen, tra Italia e Francia non ci sono controlli fissi alla frontiera.`, answer: true, explain: `Entrambi i Paesi sono nello spazio Schengen.` },
      { type: `num`, q: `Quante sono le lingue ufficiali dell'UE?`, answer: 24, tol: 0, explain: `24 lingue ufficiali, tra cui l'italiano.` }
    ]
  }
});
