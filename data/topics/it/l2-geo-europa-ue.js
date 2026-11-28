TOPIC('it', {
  id: "l2-geo-europa-ue",
  title: "L'Europa e l'Unione europea",
  intro: "L'Europa è il più piccolo dei continenti «grandi» ma ha una densità di storia, lingue e città senza paragoni. Dopo due guerre mondiali nate proprio qui, i suoi Stati hanno fatto una scelta mai tentata prima: mettere in comune pezzi di sovranità per non farsi più la guerra. Vediamo il territorio, i popoli, le istituzioni dell'<b>Unione europea</b> e che cosa significa, concretamente, essere <b>cittadini europei</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Un continente fatto di penisole",
      html: `<p>L'Europa è, in realtà, una grande <b>penisola dell'Eurasia</b>: il confine con l'Asia non è netto e si fa convenzionalmente passare per i <b>monti Urali</b>, il fiume Ural, il mar Caspio e la catena del Caucaso. Ha una superficie di circa <b>10 milioni di km²</b> (meno di un quarto dell'Asia) e ospita circa <b>745 milioni</b> di abitanti, più di 40 Stati se si includono la Russia europea e i microstati.</p>
<p>La sua caratteristica geografica principale è la <b>costa frastagliata</b>: penisole (scandinava, iberica, italiana, balcanica, la Danimarca), golfi, isole. Nessun punto d'Europa è molto lontano dal mare, e questo ha favorito per millenni commerci, navigazione e scambi culturali.</p>
<ul>
<li><b>Rilievi</b>: a sud la fascia delle <b>Alpi</b> (Monte Bianco, 4806 m, il più alto dell'Europa occidentale), dei Pirenei, degli Appennini e dei Carpazi; a nord le antiche montagne scandinave. Il punto più alto d'Europa secondo la convenzione del Caucaso è l'Elbrus (5642 m).</li>
<li><b>Pianure</b>: la grande <b>Pianura europea</b>, che dalla Francia occidentale arriva in Russia passando da Germania e Polonia; la pianura Padana e la pianura ungherese (Pannonica).</li>
<li><b>Fiumi</b>: il <b>Volga</b> (circa 3500 km, il più lungo d'Europa), il <b>Danubio</b> (circa 2850 km, attraversa o tocca 10 Stati dalla Germania al Mar Nero), il Reno, l'Elba, la Vistola, il Po.</li>
<li><b>Climi</b>: mediterraneo a sud, oceanico a ovest (influenzato dalla Corrente del Golfo), continentale all'est, subartico e di tundra a nord.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Terreno 3D: le forme del paesaggio europeo",
      scene: "terrain",
      options: {
        features: {
          peninsula: { label: "Penisola", html: "<p>L'Italia, la Spagna e la Grecia sono penisole: terra circondata dal mare su tre lati. Ne derivano porti, pesca e commerci marittimi.</p>" },
          mountain: { label: "Catena montuosa", html: "<p>Le Alpi nascono dallo scontro tra la placca africana e quella euroasiatica, avvenuto in decine di milioni di anni. Sono la grande barriera, ma anche il serbatoio d'acqua d'Europa.</p>" },
          plain: { label: "Pianura", html: "<p>Le pianure (quella europea, la Padana) sono le zone più fertili e popolate: agricoltura intensiva, città, industrie, grandi vie di comunicazione.</p>" },
          river: { label: "Fiume", html: "<p>Reno, Danubio e Volga sono vere autostrade d'acqua. Il canale Meno-Danubio (1992) collega il Mare del Nord al Mar Nero.</p>" },
          delta: { label: "Delta", html: "<p>Il delta del Danubio (Romania-Ucraina) è uno dei più estesi d'Europa ed è patrimonio UNESCO; quello del Po è il maggiore d'Italia.</p>" },
          gulf: { label: "Golfo", html: "<p>Golfi come quello di Genova o il Golfo di Botnia hanno favorito la nascita di porti e di città marinare.</p>" },
          strait: { label: "Stretto", html: "<p>Stretti come Gibilterra, il Bosforo e i Dardanelli sono passaggi strategici: chi li controlla controlla le rotte.</p>" },
          glacier: { label: "Ghiacciaio", html: "<p>I ghiacciai alpini (come l'Aletsch in Svizzera) stanno arretrando rapidamente a causa del riscaldamento globale.</p>" }
        }
      },
      caption: "Ruota il paesaggio e tocca le parti: il rilievo e le coste spiegano molta della storia e dell'economia europea."
    },
    {
      type: "text",
      title: "2. Popoli, lingue, religioni",
      html: `<p>In Europa si parlano più di <b>200 lingue</b> (l'UE ne riconosce 24 come ufficiali), raggruppate soprattutto in tre grandi famiglie indoeuropee: <b>romanze</b> (italiano, francese, spagnolo, portoghese, rumeno), <b>germaniche</b> (tedesco, inglese, olandese, lingue scandinave) e <b>slave</b> (russo, polacco, ceco, serbo-croato, bulgaro). Ci sono poi lingue di altre famiglie: ungherese, finlandese ed estone (<i>uraliche</i>), basco, maltese (di origine araba).</p>
<p>Anche le religioni disegnano mappe: <b>cattolicesimo</b> a sud e in Polonia, <b>protestantesimo</b> nel Nord, <b>ortodossia</b> nell'Est e nei Balcani, <b>islam</b> in Albania, Bosnia e Kosovo, oltre a importanti comunità di immigrati dell'Europa occidentale. Dal Novecento una quota crescente di europei si dichiara non credente.</p>
<p><b>Demografia</b>: l'Europa è il continente più <b>vecchio</b>: tassi di fecondità spesso sotto 1,5 figli per donna (l'Italia circa 1,2), cioè lontani dal livello di 2,1 che mantiene stabile la popolazione. Senza immigrazione, la popolazione in età di lavoro si ridurrebbe rapidamente. Le <b>città</b> sono molto numerose e collegate in una rete: dal «Blue banana» (l'asse Londra-Benelux-Reno-Milano) all'asse mediterraneo.</p>
<p>La storia ha lasciato anche <b>divisioni profonde</b>: dopo il 1945 la «cortina di ferro» divise l'Europa occidentale dai Paesi comunisti dell'Est fino al 1989 (caduta del Muro di Berlino, 9 novembre 1989). Negli anni Novanta le guerre in Jugoslavia mostrarono che nazionalismi e fratture etniche potevano riesplodere.</p>`
    },
    {
      type: "svg",
      title: "Le tappe dell'integrazione europea",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="150" x2="560" y2="150" stroke="#475569" stroke-width="4"/>
<g font-size="14" fill="#111827" text-anchor="middle">
<circle cx="70" cy="150" r="9" fill="#2563eb"/><text x="70" y="125" font-weight="bold">1951</text><text x="70" y="185">CECA</text><text x="70" y="203">(6 Stati)</text>
<circle cx="170" cy="150" r="9" fill="#2563eb"/><text x="170" y="125" font-weight="bold">1957</text><text x="170" y="185">Trattati</text><text x="170" y="203">di Roma</text>
<circle cx="270" cy="150" r="9" fill="#16a34a"/><text x="270" y="125" font-weight="bold">1985</text><text x="270" y="185">Schengen</text><text x="270" y="203">(accordo)</text>
<circle cx="360" cy="150" r="9" fill="#16a34a"/><text x="360" y="125" font-weight="bold">1992</text><text x="360" y="185">Maastricht</text><text x="360" y="203">(in vigore '93)</text>
<circle cx="450" cy="150" r="9" fill="#f59e0b"/><text x="450" y="125" font-weight="bold">2002</text><text x="450" y="185">Euro in</text><text x="450" y="203">contanti</text>
<circle cx="535" cy="150" r="9" fill="#dc2626"/><text x="535" y="125" font-weight="bold">2020</text><text x="535" y="185">Brexit</text><text x="535" y="203">(UE a 27)</text>
</g>
<text x="300" y="40" font-size="17" font-weight="bold" text-anchor="middle" fill="#111827">Dal carbone e dall'acciaio all'Unione</text>
<text x="300" y="260" font-size="14" text-anchor="middle" fill="#475569">Altre date: 1973 primo allargamento, 2004 ingresso di 10 Paesi, 2009 Trattato di Lisbona</text>
</svg>`,
      caption: "L'integrazione è avvenuta a piccoli passi: prima l'economia (carbone, acciaio, mercato), poi la moneta, i confini aperti e la cittadinanza."
    },
    {
      type: "text",
      title: "3. Dalla guerra all'Unione: la storia",
      html: `<p>Nel 1945 l'Europa è in rovina: milioni di morti, città distrutte. Il 9 maggio 1950 il ministro degli Esteri francese <b>Robert Schuman</b> (ispirato da <b>Jean Monnet</b>) propone di mettere insieme la produzione di <b>carbone e acciaio</b> di Francia e Germania sotto un'autorità comune: sono le materie prime della guerra, e condividerle rende la guerra «non solo impensabile ma materialmente impossibile». Nasce così nel <b>1951</b> (Trattato di Parigi) la <b>CECA</b>, con sei Stati: Francia, Germania Ovest, Italia, Belgio, Paesi Bassi, Lussemburgo.</p>
<p>Il 25 marzo <b>1957</b> gli stessi sei firmano a Roma il trattato che istituisce la <b>Comunità economica europea (CEE)</b>, un mercato comune in cui merci, persone, servizi e capitali circolano liberamente. Seguono i successivi allargamenti: nel 1973 Regno Unito, Irlanda, Danimarca; negli anni Ottanta Grecia, Spagna e Portogallo; nel 1995 Austria, Finlandia, Svezia; nel <b>2004</b> dieci Paesi dell'Est e del Mediterraneo (tra cui Polonia, Ungheria, Repubblica Ceca, Slovacchia, Slovenia, Estonia, Lettonia, Lituania, Cipro, Malta), poi Bulgaria e Romania (2007) e Croazia (2013).</p>
<p>Il <b>Trattato di Maastricht</b> (firmato nel 1992, in vigore dal 1993) crea l'<b>Unione europea</b> e la <b>cittadinanza europea</b>; l'<b>euro</b> circola in contanti dal 1° gennaio 2002. Nel 2016 il Regno Unito vota con referendum (23 giugno) di uscire; la <b>Brexit</b> si compie il 31 gennaio 2020 e l'Unione scende da 28 a <b>27 Stati</b>. Oggi gli abitanti dell'UE sono circa <b>450 milioni</b>. Per entrare un Paese deve soddisfare i <b>criteri di Copenaghen</b> (1993): democrazia e Stato di diritto, economia di mercato funzionante, capacità di adottare le regole comuni.</p>`
    },
    {
      type: "decision",
      title: "1950: condividere il carbone con l'ex nemico?",
      html: `<p>È il 1950. La Francia è uscita vincitrice ma stremata dall'occupazione; la Germania è divisa e sotto controllo alleato. La produzione tedesca di carbone e acciaio sta ripartendo, e a Parigi molti temono che la Germania possa tornare a riarmarsi. Gli Stati Uniti spingono per far rinascere l'economia tedesca in funzione anti-sovietica. Il ministro Schuman deve scegliere come gestire questo problema.</p>`,
      question: "Tu cosa avresti proposto?",
      options: [
        { label: "Limitare con la forza la produzione tedesca", outcome: "È la logica del 1919 (Versailles): umiliazioni e controlli alimentarono il revanscismo. Mantenere sotto tutela un grande Paese a lungo andare è difficile e genera risentimento." },
        { label: "Mettere in comune carbone e acciaio sotto un'autorità sovranazionale", outcome: "È la proposta di Schuman: nessuno dei due Paesi potrebbe riarmarsi in segreto, e gli interessi economici si intrecciano. Lega la sicurezza all'economia." },
        { label: "Lasciare che ogni Stato faccia da sé", outcome: "Significherebbe tornare alla competizione tra Stati che aveva portato a due guerre mondiali in trent'anni, con la Guerra fredda alle porte." }
      ],
      answer: 1,
      explain: "Schuman propose la seconda via, il 9 maggio 1950 (oggi «Festa dell'Europa»). Nel 1951 nacque la CECA: un'idea nuova, la cooperazione come garanzia di pace. È il primo mattone di tutta la costruzione europea."
    },
    {
      type: "quiz",
      title: "Mini-quiz: territorio e storia",
      questions: [
        { type: "mc", q: "Qual è il fiume più lungo d'Europa?", options: ["Danubio", "Volga", "Reno"], answer: 1, explain: "Il Volga misura circa 3500 km; il Danubio è il secondo, con circa 2850 km." },
        { type: "mc", q: "Quale trattato del 1957 istituì la CEE?", options: ["Trattato di Maastricht", "Trattato di Roma", "Trattato di Versailles"], answer: 1, explain: "Il 25 marzo 1957 i sei Paesi fondatori firmarono a Roma il trattato che creava la Comunità economica europea." },
        { type: "tf", q: "La CECA riguardava la produzione di carbone e acciaio.", answer: true, explain: "Era la prima Comunità (1951): mettere in comune le materie prime della guerra per renderla impossibile." }
      ]
    },
    {
      type: "text",
      title: "4. Come funziona l'UE: le istituzioni",
      html: `<p>L'Unione non è né un semplice accordo tra governi né uno Stato federale: è un'organizzazione <b>sui generis</b> in cui gli Stati hanno trasferito alcune competenze (mercato interno, concorrenza, commercio estero, moneta per i Paesi dell'euro) e ne condividono altre (agricoltura, ambiente, trasporti, energia, coesione). Altre restano agli Stati (difesa, fisco, sanità e istruzione sono in gran parte nazionali). Vale il principio di <b>sussidiarietà</b>: si decide al livello europeo solo ciò che non si può fare meglio a livello locale o nazionale.</p>
<table>
<tr><th>Istituzione</th><th>Ruolo</th><th>Sede</th></tr>
<tr><td><b>Parlamento europeo</b></td><td>Eletto direttamente dai cittadini ogni 5 anni (dal 1979). Co-legifera con il Consiglio, approva il bilancio, controlla la Commissione. 720 deputati dopo le elezioni del 2024.</td><td>Strasburgo e Bruxelles</td></tr>
<tr><td><b>Consiglio europeo</b></td><td>Riunisce i capi di Stato o di governo: dà l'indirizzo politico generale.</td><td>Bruxelles</td></tr>
<tr><td><b>Consiglio dell'Unione europea</b></td><td>Rappresenta i governi dei 27: con il Parlamento adotta le leggi.</td><td>Bruxelles</td></tr>
<tr><td><b>Commissione europea</b></td><td>L'«esecutivo»: propone le leggi, gestisce il bilancio, vigila sull'applicazione dei trattati (è detta «guardiana dei trattati»).</td><td>Bruxelles</td></tr>
<tr><td><b>Corte di giustizia dell'UE</b></td><td>Garantisce che il diritto europeo sia interpretato e applicato in modo uniforme.</td><td>Lussemburgo</td></tr>
<tr><td><b>Banca centrale europea (BCE)</b></td><td>Gestisce la politica monetaria dell'euro, con l'obiettivo di stabilità dei prezzi.</td><td>Francoforte</td></tr>
</table>
<p>Le principali norme europee sono i <b>regolamenti</b> (validi direttamente in tutti gli Stati, senza bisogno di recepimento) e le <b>direttive</b> (fissano obiettivi che ogni Stato realizza con proprie leggi). Un esempio: il regolamento GDPR (2018) sulla protezione dei dati personali vale in tutta l'Unione.</p>`
    },
    {
      type: "widget",
      title: "Attività: abbina istituzione e funzione",
      widget: "match",
      options: {
        pairs: [
          ["Parlamento europeo", "Eletto dai cittadini, co-legifera"],
          ["Commissione europea", "Propone le leggi, guardiana dei trattati"],
          ["Corte di giustizia", "Garantisce l'interpretazione uniforme del diritto UE"],
          ["BCE", "Politica monetaria dell'euro"],
          ["Consiglio europeo", "Capi di Stato e di governo, indirizzo politico"]
        ]
      },
      caption: "Se sbagli, riprova: la divisione dei compiti è il modo in cui l'Unione bilancia poteri e interessi."
    },
    {
      type: "example",
      title: "Che cosa cambia nella vita di tutti i giorni",
      html: `<p>Un'italiana di 17 anni può passare un semestre a Lisbona con il programma <b>Erasmus+</b> (nato nel 1987 e frequentato da milioni di giovani). Un elettricista polacco può lavorare a Milano senza permesso di soggiorno grazie alla libera circolazione dei lavoratori. Con la <b>tessera europea di assicurazione malattia</b> si è curati in altri Paesi UE. Dal 2017 le tariffe di <b>roaming</b> sono abolite: chiamare dalla Spagna costa come chiamare da casa. Con l'<b>euro</b> (adottato da 21 Paesi tra il 1999 e il 2026) non si cambia più valuta e i prezzi sono confrontabili. E <b>Schengen</b> (accordo 1985, convenzione 1990, applicata dal 1995) elimina i controlli sistematici alle frontiere interne tra gli Stati dell'area, che oggi comprende 29 Paesi, anche non UE come Svizzera e Norvegia.</p>`
    },
    {
      type: "example",
      title: "Un prodotto, tante regole: il caricabatterie unico",
      html: `<p>Dal 28 dicembre 2024 tutti i nuovi telefoni, tablet e cuffie venduti nell'UE devono avere la porta <b>USB-C</b>. Un regolamento, valido in tutti gli Stati, ha obbligato i produttori ad adottare uno standard comune: meno rifiuti elettronici, meno costi per le famiglie. È un buon esempio di come il mercato unico di 450 milioni di consumatori permetta all'Europa di imporre regole che poi diventano riferimento anche fuori dai suoi confini.</p>`
    },
    {
      type: "curiosity",
      title: "La bandiera e l'inno",
      html: `<p>La bandiera dell'Europa (dodici stelle d'oro in cerchio su fondo blu) fu scelta dal Consiglio d'Europa nel 1955: il numero dodici è un simbolo di perfezione e non dipende dal numero degli Stati. L'<b>inno</b> è l'«Inno alla gioia» dalla Nona sinfonia di <b>Beethoven</b> (testo di Schiller), senza parole ufficiali: il linguaggio della musica è lo stesso per tutti.</p>`
    },
    {
      type: "curiosity",
      title: "Il Paese più piccolo e quello più lontano",
      html: `<p>Nell'UE vi sono Stati molto diversi: la Germania ha circa 84 milioni di abitanti, Malta circa mezzo milione. Eppure Malta elegge 6 europarlamentari e la Germania 96: un criterio detto <b>proporzionalità decrescente</b> protegge i piccoli senza ignorare i grandi. Esistono anche territori UE lontanissimi dal continente: la Guyana francese in Sud America o Réunion nell'oceano Indiano fanno parte dell'Unione e usano l'euro.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'Unione europea",
      intro: "Se i trattati e le sigle ti sembrano astratti, prova queste immagini.",
      tabs: [
        {
          label: "🏠 Il condominio",
          html: `<p>Immagina un condominio: ogni famiglia (Stato) resta padrona del proprio appartamento (fisco, scuola, polizia), ma decide in assemblea le cose comuni, come ascensore, tetto e portineria (mercato, moneta, regole ambientali). Ci sono regole votate dalla maggioranza e regole per cui serve l'<b>unanimità</b> (ad esempio la politica estera). A volte l'assemblea è lenta, ma abitare insieme costa meno e protegge tutti dai conflitti. L'analogia ha un limite: se non ti piace puoi (come ha fatto il Regno Unito) vendere e andare via, ma pagando un prezzo.</p>`
        },
        {
          label: "🌍 Altri esempi di unioni",
          html: `<p>L'UE non è l'unico esperimento: l'<b>Unione africana</b> (2002) ha 55 membri, l'<b>ASEAN</b> (1967) riunisce undici Paesi del Sud-est asiatico, il <b>Mercosur</b> (1991) alcuni Paesi sudamericani, l'<b>USMCA</b> (2020, ex NAFTA) lega USA, Canada e Messico. Nessuno però ha un parlamento eletto direttamente, una Corte con potere vincolante sugli Stati e una moneta comune come l'UE: per questo è considerata il caso più avanzato di integrazione.</p>`
        },
        {
          label: "📊 In cifre",
          html: `<p>L'UE ha circa il <b>6%</b> della popolazione mondiale, ma produce circa il <b>15-17%</b> del PIL mondiale ed è il più grande mercato interno del pianeta. Il bilancio comune è circa l'<b>1%</b> del reddito complessivo dei suoi Stati (i bilanci nazionali valgono tra il 40 e il 55% del PIL). Con <b>Next Generation EU</b> (2020, circa 750 miliardi di euro) per la prima volta l'Unione si è indebitata collettivamente per far ripartire l'economia dopo il Covid-19; all'Italia sono andati circa 190 miliardi tra sovvenzioni e prestiti (il PNRR).</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#eff6ff"/><text x="30" y="40" font-size="15" font-weight="bold" fill="#1e3a8a">Quota della popolazione mondiale: UE circa 6%</text><rect x="30" y="50" width="440" height="22" fill="#e5e7eb" stroke="#6b7280"/><rect x="30" y="50" width="27" height="22" fill="#2563eb" stroke="#1e3a8a"/><text x="30" y="110" font-size="15" font-weight="bold" fill="#1e3a8a">Quota del PIL mondiale: UE circa 15-17%</text><rect x="30" y="120" width="440" height="22" fill="#e5e7eb" stroke="#6b7280"/><rect x="30" y="120" width="72" height="22" fill="#2563eb" stroke="#1e3a8a"/><text x="30" y="180" font-size="14" fill="#475569">Barre in scala. Stime arrotondate.</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché esiste l'Unione europea",
      nodes: [
        { id: "guerre", label: "Due guerre mondiali", x: 15, y: 8, color: "#dc2626", html: "1914-1918 e 1939-1945: decine di milioni di morti.", why: "Le guerre nate in Europa mostrarono che il nazionalismo e la rivalità tra Stati potevano distruggere il continente. Da qui l'idea che la pace si costruisca con interessi comuni, non solo con i trattati." },
        { id: "schuman", label: "Piano Schuman e CECA", x: 50, y: 28, color: "#a855f7", html: "1950-1951: carbone e acciaio sotto autorità comune.", why: "Con la CECA Francia e Germania non potevano più armarsi in segreto: la cooperazione economica diventava garanzia di sicurezza (idea «funzionalista» di Jean Monnet: unire un passo alla volta)." },
        { id: "mercato", label: "Mercato unico", x: 85, y: 28, color: "#16a34a", html: "Libera circolazione di merci, persone, servizi, capitali.", why: "Mercati più grandi permettono economie di scala e più concorrenza: aumenta la ricchezza e rende costosa la rottura con i vicini. L'Atto unico (1986) fissò l'obiettivo del mercato interno entro il 1992." },
        { id: "moneta", label: "Euro e BCE", x: 20, y: 56, color: "#f59e0b", html: "Moneta unica dal 1999 (contanti dal 2002).", why: "Dopo la fine del sistema di cambi fissi (anni Settanta) le svalutazioni competitive tra Paesi minacciavano il mercato unico. La moneta comune elimina il rischio di cambio, ma obbliga a coordinare le politiche di bilancio." },
        { id: "cittadinanza", label: "Cittadinanza europea", x: 80, y: 56, color: "#2563eb", html: "Voto per il Parlamento, libera circolazione, protezione consolare.", why: "Introdotta a Maastricht nel 1992: si affianca (senza sostituirla) alla cittadinanza nazionale, e riconosce diritti ai cittadini, non solo agli Stati." },
        { id: "allargamento", label: "Allargamento", x: 50, y: 78, color: "#ec4899", html: "Da 6 a 27 Stati, con i criteri di Copenaghen.", why: "Dopo il 1989 l'Unione fu per i Paesi dell'Est un modo per consolidare democrazia e mercato. Ma allargare significa anche renderla più difficile da governare, perché più diversa." },
        { id: "sfide", label: "Sfide attuali", x: 50, y: 95, color: "#14b8a6", html: "Migrazioni, energia, difesa, clima, populismi.", why: "L'UE è in continua evoluzione: crisi finanziaria del 2008-2012, Brexit, pandemia, guerra in Ucraina dal 2022 hanno spinto ad ampliare le competenze (ad esempio sui vaccini, il debito comune e la difesa)." }
      ],
      edges: [
        ["guerre", "schuman", "porta a"],
        ["schuman", "mercato", "sviluppa"],
        ["mercato", "moneta", "richiede"],
        ["moneta", "cittadinanza", "rafforza"],
        ["cittadinanza", "allargamento", "e"],
        ["allargamento", "sfide", "genera"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'Europa: circa 10 milioni di km², confine con l'Asia sugli Urali; Volga (fiume più lungo), Alpi, grande Pianura europea.</li>
<li>Famiglie linguistiche: romanze, germaniche, slave. Continente più <b>vecchio</b> del mondo.</li>
<li><b>1950</b> Dichiarazione Schuman; <b>1951</b> CECA; <b>1957</b> Trattati di Roma; <b>1992/93</b> Maastricht; <b>2002</b> euro in contanti; <b>2020</b> Brexit.</li>
<li>UE: <b>27 Stati</b>, circa 450 milioni di abitanti.</li>
<li>Istituzioni: Parlamento (eletto), Consiglio europeo, Consiglio dell'UE, Commissione, Corte di giustizia, BCE.</li>
<li>Regolamenti validi ovunque; direttive da recepire. Principio di sussidiarietà.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: istituzioni e cittadinanza",
      questions: [
        { type: "mc", q: "Quale istituzione propone le leggi europee?", options: ["Il Parlamento europeo", "La Commissione europea", "La Banca centrale europea"], answer: 1, explain: "Solo la Commissione ha, di norma, il potere di iniziativa legislativa." },
        { type: "tf", q: "Un cittadino italiano è anche cittadino europeo.", answer: true, explain: "La cittadinanza europea, dal 1992, spetta a chiunque abbia la cittadinanza di uno Stato membro." },
        { type: "text", q: "Come si chiama l'accordo che ha eliminato i controlli sistematici alle frontiere interne?", answer: ["schengen", "accordo di schengen", "l'accordo di schengen"], explain: "L'accordo di Schengen (1985) e la convenzione di applicazione (1990) hanno creato lo spazio senza frontiere interne." }
      ]
    }
  ],
  glossary: [
    { t: "Sussidiarietà", d: "Principio per cui si decide al livello più vicino ai cittadini, e a quello europeo solo se serve davvero." },
    { t: "Regolamento", d: "Atto europeo obbligatorio in tutti i suoi elementi e direttamente applicabile in ogni Stato membro." },
    { t: "Direttiva", d: "Atto europeo che fissa un risultato da raggiungere, lasciando agli Stati il modo di farlo con leggi proprie." },
    { t: "Schengen", d: "Spazio di libera circolazione senza controlli sistematici alle frontiere interne." },
    { t: "Eurozona", d: "Gli Stati dell'UE che hanno adottato l'euro come moneta." },
    { t: "Sovranazionale", d: "Che sta al di sopra degli Stati nazionali, con poteri in alcune materie (come la Commissione europea)." },
    { t: "Criteri di Copenaghen", d: "Condizioni politiche, economiche e giuridiche che un Paese deve soddisfare per entrare nell'UE (1993)." },
    { t: "Brexit", d: "L'uscita del Regno Unito dall'UE, avvenuta il 31 gennaio 2020 dopo il referendum del 2016." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quali Stati firmarono nel 1957 i Trattati di Roma?", options: ["Francia, Germania Ovest, Italia, Belgio, Paesi Bassi, Lussemburgo", "Italia, Spagna, Portogallo, Grecia, Francia, Austria", "Tutti i Paesi europei"], answer: 0, explain: "Furono i sei Paesi fondatori della CECA a istituire la CEE." },
      { type: "mc", q: "Dove ha sede la Banca centrale europea?", options: ["Bruxelles", "Strasburgo", "Francoforte"], answer: 2, explain: "La BCE ha sede a Francoforte sul Meno, in Germania." },
      { type: "tf", q: "Il Parlamento europeo è eletto direttamente dai cittadini dell'Unione.", answer: true, explain: "Dal 1979 si vota a suffragio universale diretto ogni cinque anni." },
      { type: "num", q: "Da quanti Stati è composta oggi l'Unione europea?", answer: 27, tol: 0, explain: "Dopo l'uscita del Regno Unito (2020) gli Stati membri sono 27." },
      { type: "mc", q: "Che cosa sono i criteri di Copenaghen?", options: ["Le condizioni da rispettare per aderire all'UE", "Le regole per usare l'euro", "I limiti alla pesca nei mari europei"], answer: 0, explain: "Stabiliti nel 1993: democrazia, Stato di diritto, economia di mercato, capacità di applicare le regole comuni." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["CECA (1951)", "Trattati di Roma (1957)", "Maastricht (1992)", "Euro in contanti (2002)", "Brexit (2020)"], explain: "Dalla Comunità del carbone e dell'acciaio fino all'uscita del Regno Unito, passando per mercato, Unione e moneta." },
      { type: "mc", q: "Qual è la differenza tra regolamento e direttiva?", options: ["Il regolamento vale direttamente in tutti gli Stati; la direttiva fissa obiettivi da recepire con leggi nazionali", "Sono la stessa cosa", "La direttiva vale solo per l'Italia"], answer: 0, explain: "Il regolamento è direttamente applicabile; la direttiva lascia agli Stati la scelta dei mezzi." },
      { type: "text", q: "Come si chiama il principio per cui si decide a livello europeo solo ciò che non si fa meglio a livello nazionale o locale?", answer: ["sussidiarietà", "principio di sussidiarietà", "la sussidiarietà"], explain: "È la sussidiarietà, sancita dai trattati." },
      { type: "tf", q: "L'Europa ha il tasso di fecondità più alto del mondo.", answer: false, explain: "Al contrario: è il continente più vecchio, con fecondità spesso sotto 1,5 figli per donna." },
      { type: "mc", q: "Perché la CECA fu pensata per carbone e acciaio?", options: ["Erano le materie prime della guerra: metterle in comune rendeva più difficile un conflitto", "Perché erano le uniche merci vendute in Europa", "Perché servivano solo all'agricoltura"], answer: 0, explain: "Schuman la propose per rendere la guerra tra Francia e Germania «materialmente impossibile»." }
    ]
  }
});
