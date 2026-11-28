TOPIC('ro', {
  id: "l1-geo-risorse-sostenibilita",
  title: "Resurse și dezvoltare durabilă",
  intro: "Apă de băut, energie pentru a aprinde lumina, hrană în farfurie: sunt cele trei resurse de care depinde viața fiecărei persoane. Dar sunt distribuite inegal și consumate într-un ritm pe care planeta îl suportă cu greu. În această lecție vedem unde se află, cine le folosește, ce probleme creează și cum propune <b>Agenda 2030</b> să împace dezvoltarea, dreptatea și mediul.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Ce este o resursă",
      html: `<p>O <b>resursă</b> este orice element al naturii pe care oamenii îl folosesc pentru a-și satisface nevoile. Se disting două mari categorii:</p>
<ul>
<li><b>Resurse regenerabile</b>: se refac în timp scurt față de consum, dacă sunt folosite cu măsură. Apa dulce, lemnul, solul fertil, vântul, lumina solară, peștii. Atenție: regenerabil nu înseamnă infinit. O pădure tăiată mai repede decât crește la loc sau un banc de pești exploatat prea mult se epuizează.</li>
<li><b>Resurse neregenerabile</b>: s-au format în milioane de ani și nu se refac la scara timpului omenesc. Petrolul, gazele naturale, cărbunele, mineralele (fier, cupru, litiu, pământuri rare).</li>
</ul>
<p>Fiecare resursă are o <b>distribuție geografică</b> care nu coincide cu cea a populației: petrolul se concentrează în Golful Persic, în Rusia, în America de Nord, în Venezuela; apa dulce abundă în Canada, Brazilia, Rusia, dar lipsește în Orientul Mijlociu și în Sahel; litiul se găsește în „triunghiul” Chile-Argentina-Bolivia și în Australia; cobaltul se află în proporție de peste două treimi în Republica Democratică Congo. Din aceste diferențe se nasc comerțul, dependențele, conflictele și cooperarea.</p>`
    },
    {
      type: "widget",
      title: "Activitate: regenerabilă sau neregenerabilă?",
      widget: "classify",
      options: {
        groups: ["Regenerabilă", "Neregenerabilă"],
        items: [
          ["☀️ Lumina Soarelui", 0],
          ["🛢️ Petrolul", 1],
          ["💨 Vântul", 0],
          ["⛏️ Cărbunele", 1],
          ["🌊 Valurile", 0],
          ["⛽ Gazele naturale", 1],
          ["🌋 Căldura Pământului (geotermia)", 0],
          ["⚛️ Uraniul", 1]
        ]
      },
      caption: "Granița ține de timpul de regenerare: uraniul este un mineral, nu se reface; lemnul da, dar doar dacă nu tăiem mai mult decât crește."
    },
    {
      type: "text",
      title: "2. Apa",
      html: `<p>Pământul este „planeta albastră”, dar apa utilizabilă este foarte puțină. <b>97,5%</b> din apa planetei este <b>sărată</b> (mări și oceane). Restul de <b>2,5%</b> este dulce, dar circa două treimi din aceasta sunt blocate în <b>ghețari și calote polare</b>, iar aproape tot restul se află în <b>pânzele freatice</b>. Râurile, lacurile și zonele umede conțin mai puțin de <b>0,01%</b> din toată apa Pământului, și totuși sunt sursa cea mai accesibilă.</p>
<p>Principalele <b>utilizări</b> ale apei dulci în lume: circa <b>70% pentru agricultură</b> (irigații), circa <b>20% pentru industrie</b> și circa <b>10% pentru uz casnic</b> (băut, gătit, igienă). În Italia, fiecare locuitor consumă acasă circa 215-220 de litri de apă pe zi, una dintre cele mai mari valori din Europa.</p>
<p><b>Problemele</b>:</p>
<ul>
<li><b>Accesul</b>: în lume circa <b>2,2 miliarde</b> de oameni nu au acces la apă potabilă gestionată în siguranță și circa <b>3,5 miliarde</b> la servicii igienico-sanitare sigure (OMS/UNICEF). În fiecare zi copii și femei, mai ales în Africa subsahariană, merg ore în șir ca să aducă apă.</li>
<li><b>Stresul hidric</b>: situația în care consumul de apă depășește o mare parte din resursele disponibile. Afectează Orientul Mijlociu și Africa de Nord, India, Asia Centrală, California și, tot mai mult, Europa mediteraneană.</li>
<li><b>Poluarea</b>: deversări industriale, îngrășăminte, pesticide, plastic și ape uzate neepurate.</li>
<li><b>Suprasolicitarea</b>: cazul cel mai dramatic este <b>Lacul Aral</b>, în Asia Centrală: din anii '60 URSS a deviat râurile Amudaria și Sârdaria pentru a iriga bumbacul, iar lacul, care era al patrulea ca mărime din lume, s-a redus la o mică parte din suprafața sa, lăsând în urmă un deșert sărat.</li>
<li><b>Conflicte</b>: râurile care traversează mai multe state (Nil, Tigru și Eufrat, Iordan, Mekong, Indus) sunt adesea disputate. Marele baraj etiopian de pe Nilul Albastru (GERD) este motiv de tensiuni cu Egiptul și Sudanul.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Unde se află apa Pământului",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="300" y="24" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Toată apa Pământului</text>
<rect x="40" y="40" width="520" height="34" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2"/>
<rect x="40" y="40" width="13" height="34" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
<text x="300" y="63" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">97,5% sărată (mări și oceane)</text>
<text x="40" y="100" font-size="15" fill="#0369a1" font-weight="bold">2,5% dulce</text>
<text x="300" y="130" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Din apa dulce</text>
<rect x="40" y="145" width="520" height="34" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="40" y="145" width="360" height="34" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<rect x="400" y="145" width="155" height="34" fill="#7dd3fc" stroke="#0369a1" stroke-width="2"/>
<rect x="555" y="145" width="5" height="34" fill="#1d4ed8"/>
<text x="220" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">circa 69%: ghețari</text>
<text x="478" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">circa 30%: pânze freatice</text>
<text x="560" y="205" font-size="14" text-anchor="end" fill="#1d4ed8" font-weight="bold">sub 1%: râuri, lacuri, umiditate</text>
<text x="40" y="250" font-size="15" fill="#111827">Apa ușor accesibilă (râuri, lacuri, pânze freatice de mică adâncime)</text>
<text x="40" y="272" font-size="15" fill="#111827">este o fracțiune minusculă din total: de aici importanța de a nu o risipi.</text>
</svg>`,
      caption: "Date rotunjite (USGS și UNESCO). Barele nu sunt la scară perfectă."
    },
    {
      type: "example",
      title: "Exemplu practic: apa ascunsă în produse",
      html: `<p><b>Amprenta de apă</b> (<i>water footprint</i>) măsoară apa folosită pentru a produce un bun, chiar dacă nu o vezi. Ordine de mărime (estimări ale Water Footprint Network):</p>
<table>
<tr><th>Produs</th><th>Apă necesară (aproximativ)</th></tr>
<tr><td>1 ceașcă de cafea</td><td>140 de litri</td></tr>
<tr><td>1 kg de pâine</td><td>1.600 de litri</td></tr>
<tr><td>1 kg de brânză</td><td>5.000 de litri</td></tr>
<tr><td>1 kg de carne de vită</td><td>peste 15.000 de litri</td></tr>
<tr><td>1 pereche de blugi</td><td>7.000-10.000 de litri</td></tr>
</table>
<p>Un duș de 5 minute folosește circa 50-60 de litri; pentru a produce 1 kg de carne de vită este nevoie de apa a circa 250 de dușuri. Nu înseamnă să nu mai mănânci niciodată carne, ci că alegerile alimentare cântăresc mult asupra apei: o dietă cu mai multe leguminoase, cereale și legume are o amprentă de apă mult mai mică.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: resurse și apă",
      questions: [
        { type: "mc", q: "Ce procent din apa Pământului este dulce?", options: ["Circa 2,5%", "Circa 25%", "Circa 50%"], answer: 0, explain: "97,5% este sărată; din apa dulce, cea mai mare parte se află în ghețari și în pânzele freatice." },
        { type: "mc", q: "În ce sector se folosește cea mai mare parte a apei dulci din lume?", options: ["Industrie", "Agricultură", "Uz casnic"], answer: 1, explain: "Circa 70% din consum servește la irigarea câmpurilor." },
        { type: "tf", q: "Petrolul este o resursă regenerabilă pentru că Pământul îl produce continuu.", answer: false, explain: "S-a format în milioane de ani: la scara timpului omenesc nu este regenerabil." }
      ]
    },
    {
      type: "text",
      title: "3. Energia",
      html: `<p>Energia pune în mișcare industriile, transporturile, casele, spitalele. În lume, circa <b>80%</b> din energia primară provine încă din <b>combustibili fosili</b>: <b>petrol</b> (circa 30%), <b>cărbune</b> (circa 26%) și <b>gaze naturale</b> (circa 23%). Restul este <b>hidroelectric</b>, <b>nuclear</b>, <b>solar</b>, <b>eolian</b>, <b>biomasă</b>.</p>
<p>Distribuția consumului este foarte inegală: în medie, un locuitor al Statelor Unite sau al Canadei consumă <b>de peste cinci ori</b> mai multă energie decât un cetățean african sau indian. Circa <b>700 de milioane</b> de oameni din lume nu au electricitate și circa <b>2 miliarde</b> gătesc cu lemne sau cărbune în mod poluant, cu grave daune pentru sănătate.</p>
<p><b>Problemele</b>:</p>
<ul>
<li><b>Schimbările climatice</b>: arderea combustibililor fosili eliberează CO₂ (circa două treimi din emisiile de gaze cu efect de seră provin din energie).</li>
<li><b>Dependența și geopolitica</b>: țările importatoare depind de cele exportatoare. Italia importă aproape 75-80% din energia pe care o consumă. <b>Criza petrolului din 1973</b> (embargoul țărilor arabe din OPEC) a făcut ca prețul petrolului să se împătrească, și a dus la măsuri de austeritate („duminicile fără mașini”); în 2022, invazia rusă în Ucraina a arătat cât de legată era Europa de gazul rusesc.</li>
<li><b>Epuizarea</b> resurselor neregenerabile și impactul extracției asupra mediului (maree neagră, defrișări, mine).</li>
</ul>
<p><b>Tranziția energetică</b> este trecerea de la combustibilii fosili la sursele regenerabile și la o utilizare mai eficientă. Sursele <b>solară</b> și <b>eoliană</b> au crescut foarte rapid: costul energiei fotovoltaice a scăzut cu peste 80% în zece ani (2010-2020), iar sursele regenerabile produc astăzi circa <b>30%</b> din electricitatea lumii (și peste 40% în Italia, mai ales prin hidroelectricitate, solar, eolian și geotermie în Toscana, unde în 1904, la Larderello, s-a aprins primul bec alimentat cu energie geotermală).</p>
<p>Nu există o sursă „perfectă”: <b>solarul</b> și <b>eolianul</b> sunt intermitente (sunt necesare stocare și rețele adaptate); <b>nuclearul</b> nu emite CO₂, dar produce deșeuri radioactive și are costuri și termene mari (în Italia, două referendumuri, în 1987 și în 2011, au spus nu); <b>hidroelectricitatea</b> modifică râurile; <b>biomasa</b> concurează cu hrana. De aceea se vorbește despre un <b>mix energetic</b> și despre <b>eficiență</b> (cea mai ieftină sursă este energia care nu se risipește).</p>`
    },
    {
      type: "svg",
      title: "Mixul energetic mondial",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">De unde provine energia primară din lume (valori rotunjite)</text>
<rect x="40" y="50" width="300" height="30" fill="#1f2937"/>
<text x="350" y="72" font-size="15" fill="#111827">Petrol ~30%</text>
<rect x="40" y="95" width="260" height="30" fill="#6b7280"/>
<text x="310" y="117" font-size="15" fill="#111827">Cărbune ~26%</text>
<rect x="40" y="140" width="230" height="30" fill="#f97316"/>
<text x="280" y="162" font-size="15" fill="#111827">Gaze naturale ~23%</text>
<rect x="40" y="185" width="70" height="30" fill="#2563eb"/>
<text x="120" y="207" font-size="15" fill="#111827">Hidroelectric ~7%</text>
<rect x="40" y="230" width="40" height="30" fill="#a855f7"/>
<text x="90" y="252" font-size="15" fill="#111827">Nuclear ~4%</text>
<rect x="300" y="230" width="90" height="30" fill="#16a34a"/>
<text x="400" y="252" font-size="15" fill="#111827">Alte regenerabile ~10%</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#6b7280">Estimare: combustibilii fosili rămân circa 80% din total; procentele variază de la an la an.</text>
</svg>`,
      caption: "Energia primară include totul: electricitate, transporturi, încălzire. Ponderea surselor regenerabile numai în electricitate este mult mai mare (circa 30%)."
    },
    {
      type: "text",
      title: "4. Hrana",
      html: `<p>În lume se produce hrană suficientă pentru toți (teoretic pentru circa 10 miliarde de oameni, potrivit FAO), și totuși circa <b>733 de milioane</b> de oameni (circa 9% din omenire, date FAO 2023) <b>suferă de foame</b>, mai ales în Africa subsahariană și Asia de Sud, iar aproape <b>2,8 miliarde</b> nu își permit o dietă sănătoasă. În același timp, mai mult de <b>un adult din opt</b> din lume este obez. Este paradoxul <b>malnutriției</b>: nu doar foame, ci și carențe și excese. Foamea are cauze mai degrabă <b>politice și economice</b> decât agricole: sărăcie, războaie, instabilitatea prețurilor, evenimente climatice extreme (așa cum a explicat Amartya Sen, care a arătat că marile foamete apar adesea fără o lipsă reală de hrană).</p>
<ul>
<li><b>Revoluția verde</b> (anii '50-'70): cu semințe selecționate, îngrășăminte, pesticide și irigații, agronomul <b>Norman Borlaug</b> (Premiul Nobel pentru Pace 1970) și alții au crescut mult recoltele de grâu și orez în Mexic, India și Asia, evitând foametea pentru sute de milioane de oameni. Dar a provocat și poluare cu substanțe agrochimice, pierderea biodiversității și un consum mare de apă.</li>
<li><b>Risipa alimentară</b>: potrivit UNEP, în 2022 s-au irosit circa <b>1 miliard de tone</b> de hrană, aproape 19% din cea disponibilă consumatorilor (plus cea pierdută pe câmp și de-a lungul lanțului de aprovizionare). Risipa de hrană înseamnă și risipă de apă, pământ și energie și provoacă circa 8-10% din emisiile mondiale de gaze cu efect de seră.</li>
<li><b>Creșterea animalelor</b>: necesită mult pământ, apă și furaje și emite metan; zootehnia este responsabilă de circa 12-15% din emisiile globale.</li>
<li><b>Pescuitul</b>: mai mult de o treime din stocurile de pește din lume sunt pescuite peste limitele biologice de regenerare (pescuit excesiv). Acvacultura furnizează astăzi aproximativ jumătate din peștele pe care îl mâncăm.</li>
<li><b>Solul</b>: eroziune, deșertificare, pierderea fertilității. O treime din solurile lumii sunt degradate; sunt necesare secole pentru a se forma câțiva centimetri de sol fertil.</li>
<li><b>Land grabbing</b>: cumpărarea sau închirierea unor mari întinderi de teren din țări sărace de către state sau companii străine.</li>
</ul>
<p>Soluțiile se învârt în jurul unei <b>agriculturi sustenabile</b> (rotația culturilor, agricultura ecologică și de precizie, agroecologia), reducerii risipei, dietelor mai bogate în alimente vegetale, lanțurilor scurte de aprovizionare și sprijinirii micilor producători.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… ceea ce mâncăm are o geografie?",
      html: `<p><b>Roșia</b>, <b>cartoful</b>, <b>porumbul</b>, cacaoa și ardeiul iute vin din <b>Americi</b>: înainte de 1492, bucătăria italiană nu cunoștea roșia! <b>Cafeaua</b> vine din Etiopia, <b>orezul</b> din Asia, iar <b>pastele uscate</b> s-au răspândit în Sicilia și în sudul Italiei începând din Evul Mediu. Astăzi, mai mult de jumătate din caloriile lumii provin din doar <b>trei cereale</b>: orez, grâu și porumb. O alimentație bazată pe puține soiuri este fragilă: o boală poate distruge recolte întregi, cum a făcut <b>mana cartofului</b> în Irlanda (1845-1849), care a provocat circa un milion de morți și a dus la peste un milion de emigrări.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… sticla de apă costă mai mult decât apa de la robinet?",
      html: `<p>În Italia, apa de la robinet costă în medie circa <b>2 euro la 1.000 de litri</b> (1 m³), în timp ce apa îmbuteliată poate costa de o mie de ori mai mult. Italia se numără printre primele țări din lume la consumul de apă îmbuteliată (peste 200 de litri pe cap de locuitor pe an), cu un mare impact asupra plasticului și a transporturilor, în timp ce apa de la robinet este supusă unor controale foarte frecvente. <b>Fântânile publice de apă</b> și bidoanele reutilizabile sunt printre cele mai simple modalități de a reduce deșeurile și emisiile.</p>`
    },
    {
      type: "text",
      title: "5. Dezvoltarea durabilă",
      html: `<p>În <b>1972</b>, raportul <i>Limitele creșterii</i> (comandat de Clubul de la Roma, fondat de italianul <b>Aurelio Peccei</b>) avertiza că o creștere infinită pe o planetă finită este imposibilă. În <b>1987</b>, raportul <i>Viitorul nostru comun</i> (<b>Raportul Brundtland</b>, după numele președintei comisiei, norvegiana Gro Harlem Brundtland) a definit <b>dezvoltarea durabilă</b>: <i>„o dezvoltare care satisface nevoile prezentului fără a compromite posibilitatea generațiilor viitoare de a și le satisface pe ale lor”</i>.</p>
<p>Trei dimensiuni (<b>cei trei piloni</b>), care trebuie luate împreună:</p>
<ul>
<li>🌍 <b>de mediu</b>: să nu consumăm resursele mai repede decât se regenerează, să reducem poluarea și emisiile;</li>
<li>⚖️ <b>socială</b>: echitate, muncă decentă, sănătate, educație, egalitate;</li>
<li>💶 <b>economică</b>: prosperitate și locuri de muncă durabile.</li>
</ul>
<p><b>Etapele</b>: Conferința ONU de la <b>Rio de Janeiro</b> (1992, „Summitul Pământului”), <b>Protocolul de la Kyoto</b> (1997), Obiectivele de Dezvoltare ale Mileniului (2000-2015), <b>Acordul de la Paris</b> privind clima (2015) și, la 25 septembrie 2015, <b>Agenda 2030</b> pentru dezvoltare durabilă, semnată de <b>193</b> de țări ale ONU: <b>17 Obiective</b> (SDGs, <i>Sustainable Development Goals</i>) și <b>169 de ținte</b> de atins până în <b>2030</b>.</p>
<p>Un instrument util este <b>amprenta ecologică</b>, suprafața de pământ și de mare necesară pentru a produce resursele pe care le consumă o persoană sau o țară și pentru a-i absorbi deșeurile. <b>Ziua suprasolicitării Pământului</b> (<i>Earth Overshoot Day</i>) indică ziua din an în care omenirea a consumat deja toate resursele pe care Pământul le poate regenera într-un an: în 2024 a căzut pe <b>1 august</b>. Dacă toți ar trăi ca un italian, ar fi necesare circa 2,7 planete; ca un cetățean mediu al SUA, circa 5.</p>`
    },
    {
      type: "svg",
      title: "Cele 17 obiective ale Agendei 2030",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="300" y="22" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Agenda 2030: trei grupuri de obiective</text>
<rect x="20" y="40" width="175" height="240" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="107" y="65" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Oameni</text>
<text x="30" y="92" font-size="14" fill="#111827">1 Fără sărăcie</text>
<text x="30" y="116" font-size="14" fill="#111827">2 Foamete zero</text>
<text x="30" y="140" font-size="14" fill="#111827">3 Sănătate și bunăstare</text>
<text x="30" y="164" font-size="14" fill="#111827">4 Educație de calitate</text>
<text x="30" y="188" font-size="14" fill="#111827">5 Egalitate de gen</text>
<text x="30" y="212" font-size="14" fill="#111827">10 Mai puține inegalități</text>
<text x="30" y="236" font-size="14" fill="#111827">16 Pace și justiție</text>
<rect x="213" y="40" width="175" height="240" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="300" y="65" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Planeta</text>
<text x="223" y="92" font-size="14" fill="#111827">6 Apă curată</text>
<text x="223" y="116" font-size="14" fill="#111827">11 Orașe durabile</text>
<text x="223" y="140" font-size="14" fill="#111827">12 Consum responsabil</text>
<text x="223" y="164" font-size="14" fill="#111827">13 Acțiune climatică</text>
<text x="223" y="188" font-size="14" fill="#111827">14 Viața acvatică</text>
<text x="223" y="212" font-size="14" fill="#111827">15 Viața terestră</text>
<rect x="406" y="40" width="175" height="240" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="493" y="65" font-size="15" text-anchor="middle" fill="#92400e" font-weight="bold">Prosperitate și parteneriate</text>
<text x="416" y="92" font-size="14" fill="#111827">7 Energie curată</text>
<text x="416" y="116" font-size="14" fill="#111827">8 Muncă decentă</text>
<text x="416" y="140" font-size="14" fill="#111827">9 Industrie și inovare</text>
<text x="416" y="164" font-size="14" fill="#111827">17 Parteneriate</text>
</svg>`,
      caption: "Cele 17 obiective sunt interconectate: niciunul nu poate fi atins de unul singur (de exemplu, educația fetelor reduce sărăcia, foamea și mortalitatea infantilă)."
    },
    {
      type: "example",
      title: "Exemplu practic: amprenta ta zilnică",
      html: `<p>Încearcă să privești ziua ta cu ochii dezvoltării durabile:</p>
<ul>
<li><b>Micul dejun</b>: lapte, cafea, pâine: câtă apă și câtă energie se ascund în spatele lor? Fiecare ceașcă de cafea „valorează” circa 140 de litri de apă.</li>
<li><b>Drumul spre școală</b>: pe jos sau cu bicicleta nu emiți CO₂; cu autobuzul emiți circa o treime față de mașină, per persoană; cu mașina, singur, mult mai mult.</li>
<li><b>Smartphone și calculator</b>: conțin cobalt, litiu și pământuri rare; prelungirea duratei lor de viață cu un an reduce mult impactul (cea mai mare parte a emisiilor unui smartphone apare în timpul producției, nu al utilizării).</li>
<li><b>Îmbrăcămintea</b>: o pereche de blugi necesită 7.000-10.000 de litri de apă; cumpărarea la mâna a doua sau repararea reduce impactul.</li>
<li><b>Prânzul</b>: risipă sau farfurie goală? Aproape o cincime din hrana pe care o cumpărăm ajunge la gunoi.</li>
</ul>
<p>Nu este vorba să ne simțim vinovați, ci să alegem în cunoștință de cauză: schimbările mari cer decizii colective și politice, dar obiceiurile individuale, înmulțite cu milioane de persoane, contează.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege sustenabilitatea",
      intro: "Sustenabilitatea este o idee abstractă: iată trei imagini care ne ajută să o înțelegem.",
      tabs: [
        {
          label: "🏦 Contul bancar al naturii",
          html: `<p>Natura este un <b>cont bancar</b>. Resursele regenerabile sunt ca <b>dobânzile</b> (păduri care cresc la loc, pești care se înmulțesc, apă care se reciclează), cele neregenerabile sunt <b>capitalul</b> (petrol, minerale). Un stil de viață sustenabil cheltuiește doar dobânzile, fără să atingă capitalul. „Ziua suprasolicitării” este momentul în care omenirea a cheltuit deja toate dobânzile anului și începe să trăiască „pe minus”: consumăm astăzi capitalul care ar trebui să rămână copiilor noștri.</p>`
        },
        {
          label: "🛁 Cada și robinetul",
          html: `<p>O pânză de apă subterană este ca o <b>cadă de baie</b>: ploaia care se infiltrează este robinetul, puțurile care pompează sunt scurgerea. Dacă se pompează mai multă apă decât intră, nivelul scade; dacă se continuă, cada se golește (cum s-a întâmplat în multe zone din India, din California, din Câmpia Padului). Când pânza este aproape de mare, în golul rămas intră apa sărată: puțul devine inutilizabil. Ideea de <b>sustenabil</b> înseamnă să extragi cel mult cât reface natura.</p>`
        },
        {
          label: "🌐 Jocul sustenabilității",
          html: `<p>Imaginează-ți un sat de 10 pescari care folosesc împreună un lac cu 100 de pești care se înmulțesc. Dacă fiecare pescar prinde 5 pe an, lacul pierde 50 și peștii se răresc; dacă prind 2, lacul își revine. <b>„Tragedia bunurilor comune”</b> (descrisă de ecologul Garrett Hardin în 1968) apare atunci când fiecare se gândește doar la avantajul propriu. Laureata Premiului Nobel pentru economie <b>Elinor Ostrom</b> (2009) a arătat că multe comunități au reușit să gestioneze bine resursele comune (pășuni, păduri, apă) prin <b>reguli comune și control reciproc</b>.</p>`,
          widget: "match",
          options: { pairs: [["Raportul Brundtland", "1987: definiția dezvoltării durabile"], ["Agenda 2030", "2015: 17 obiective pentru țările ONU"], ["Acordul de la Paris", "2015: limitarea încălzirii la 1,5-2 °C"], ["Protocolul de la Kyoto", "1997: primele angajamente privind emisiile"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta conceptuală: resurse, nevoi și sustenabilitate",
      nodes: [
        { id: "risorse", label: "Resurse naturale", x: 50, y: 6, color: "#16a34a", html: "Regenerabile și neregenerabile.", why: "Resursele sunt resurse doar în raport cu tehnologia: uraniul nu era o resursă înainte de fizica nucleară, iar petrolul a devenit una odată cu motorul cu ardere internă, în secolul al XIX-lea. Ceea ce societatea poate folosi se schimbă odată cu cunoștințele." },
        { id: "acqua", label: "Apa", x: 15, y: 32, color: "#2563eb", html: "Dulce, puțină și distribuită neuniform.", why: "Apa dulce accesibilă este sub 1% din total: agricultura consumă 70% din ea, iar încălzirea globală mută ploile și topește ghețarii care alimentează marile râuri ale Asiei." },
        { id: "energia", label: "Energia", x: 50, y: 32, color: "#f59e0b", html: "Combustibili fosili ~80%; tranziția este în curs.", why: "Cărbunele a alimentat Revoluția industrială (mașina cu abur a lui Watt, 1769), petrolul a alimentat secolul XX. Fiecare tranziție energetică a durat zeci de ani: astăzi trebuie să o facem mai repede, pentru climă." },
        { id: "cibo", label: "Hrana", x: 85, y: 32, color: "#84cc16", html: "Producție suficientă, dar prost distribuită.", why: "Foametea modernă este mai des o criză de acces (venituri, conflicte, prețuri) decât de disponibilitate, așa cum a arătat Amartya Sen în 1981, studiind foametea din Bengal din 1943." },
        { id: "impatto", label: "Impacturi și limite", x: 30, y: 62, color: "#dc2626", html: "Climă, poluare, pierderea biodiversității, suprasolicitare.", why: "Oamenii de știință (Johan Rockström, 2009) au indicat nouă „limite planetare” (clima, biodiversitatea, ciclurile azotului și fosforului…) în interiorul cărora omenirea poate funcționa în siguranță; unele au fost deja depășite." },
        { id: "equita", label: "Echitate", x: 70, y: 62, color: "#a855f7", html: "Cine consumă și cine suportă efectele.", why: "Țările bogate au emis istoric mai mult CO₂, dar efectele cele mai grave îi lovesc adesea pe cei mai săraci: de aici principiul „responsabilităților comune, dar diferențiate” din tratatele privind clima." },
        { id: "sostenibile", label: "Dezvoltare durabilă", x: 50, y: 82, color: "#14b8a6", html: "Mediu + societate + economie.", why: "Raportul Brundtland (1987) a definit-o pentru a depăși opoziția dintre protecția mediului și dezvoltarea economică: ideea este că ele sunt două fețe ale aceleiași probleme." },
        { id: "agenda", label: "Agenda 2030", x: 50, y: 96, color: "#ec4899", html: "17 obiective, 169 de ținte, 193 de țări.", why: "Aprobată la 25 septembrie 2015, este primul program universal: se aplică tuturor țărilor, bogate și sărace. Se bazează pe cinci „P”: oameni (people), planetă, prosperitate, pace, parteneriate." }
      ],
      edges: [
        ["risorse", "acqua", "ex."],
        ["risorse", "energia", "ex."],
        ["risorse", "cibo", "ex."],
        ["energia", "impatto", "cauzează"],
        ["acqua", "impatto", "suportă"],
        ["cibo", "equita", "ridică problema"],
        ["impatto", "sostenibile", "necesită"],
        ["equita", "sostenibile", "necesită"],
        ["sostenibile", "agenda", "se concretizează în"]
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li><b>Regenerabile</b> (se refac) și <b>neregenerabile</b> (petrol, cărbune, gaze, minerale).</li>
<li><b>Apa</b>: 97,5% sărată; 2,5% dulce, aproape toată în ghețari și pânze freatice; 70% din consum merge la agricultură; 2,2 miliarde de oameni fără apă potabilă sigură.</li>
<li><b>Energia</b>: ~80% combustibili fosili; tranziție spre surse regenerabile și eficiență; nicio sursă nu este lipsită de impact.</li>
<li><b>Hrana</b>: suficientă pentru toți, dar prost distribuită (circa 733 de milioane de oameni flămânzi); risipă și revoluția verde.</li>
<li><b>Dezvoltarea durabilă</b> (Brundtland, 1987): trei piloni, de mediu, social, economic; <b>Agenda 2030</b> (2015): 17 obiective.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: energie, hrană și Agenda 2030",
      questions: [
        { type: "mc", q: "Ce parte din energia primară a lumii provine încă din combustibili fosili?", options: ["Circa 20%", "Circa 50%", "Circa 80%"], answer: 2, explain: "Petrolul, cărbunele și gazele acoperă încă circa 80% din energia primară." },
        { type: "mc", q: "Cine a condus comisia care a definit în 1987 dezvoltarea durabilă?", options: ["Gro Harlem Brundtland", "Greta Thunberg", "Aurelio Peccei"], answer: 0, explain: "Raportul Brundtland (1987), după numele președintei comisiei." },
        { type: "num", q: "Câte sunt Obiectivele de Dezvoltare Durabilă ale Agendei 2030?", answer: 17, tol: 0, explain: "17 obiective (SDGs) și 169 de ținte." }
      ]
    }
  ],
  glossary: [
    { t: "Resursă regenerabilă", d: "Resursă care se reface în timp scurt (soare, vânt, apă dulce, lemn), dacă este folosită cu măsură." },
    { t: "Resursă neregenerabilă", d: "Resursă formată în milioane de ani și care nu se poate reface la scara timpului omenesc (petrol, cărbune, minerale)." },
    { t: "Stres hidric", d: "Situație în care consumul de apă este foarte mare în raport cu disponibilul." },
    { t: "Amprenta de apă", d: "Volumul de apă necesar pentru a produce un bun sau pentru consumul unei persoane." },
    { t: "Tranziție energetică", d: "Trecerea de la combustibilii fosili la sursele regenerabile și la o utilizare mai eficientă a energiei." },
    { t: "Mix energetic", d: "Ansamblul surselor pe care o țară le folosește pentru a produce energie." },
    { t: "Revoluția verde", d: "Creșterea recoltelor (anii '50-'70) datorită semințelor selecționate, îngrășămintelor, pesticidelor și irigațiilor." },
    { t: "Dezvoltare durabilă", d: "Dezvoltare care satisface nevoile prezentului fără a compromite posibilitatea generațiilor viitoare de a și le satisface pe ale lor (Raportul Brundtland, 1987)." },
    { t: "Agenda 2030", d: "Program ONU (2015) cu 17 Obiective de Dezvoltare Durabilă de atins până în 2030." },
    { t: "Amprenta ecologică", d: "Suprafața de pământ și de mare necesară pentru a produce resursele consumate și pentru a absorbi deșeurile produse de o persoană sau de o țară." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre acestea este o resursă neregenerabilă?", options: ["Vântul", "Gazele naturale", "Lemnul dintr-o pădure gestionată"], answer: 1, explain: "Gazele naturale s-au format în milioane de ani." },
      { type: "mc", q: "Ce parte din apa dulce extrasă în lume servește agriculturii?", options: ["Circa 10%", "Circa 30%", "Circa 70%"], answer: 2, explain: "Irigațiile absorb circa 70% din consum." },
      { type: "tf", q: "În lume nu se produce destulă hrană pentru toți, iar aceasta este cauza principală a foametei.", answer: false, explain: "Se produce hrană suficientă pentru toți: foametea depinde mai ales de sărăcie, conflicte, prețuri și distribuție." },
      { type: "num", q: "O pereche de blugi necesită circa 7.000 de litri de apă. Cărui număr de dușuri de 50 de litri îi corespunde?", answer: 140, tol: 0, explain: "7.000 ÷ 50 = 140 de dușuri." },
      { type: "mc", q: "Care sunt cei trei piloni ai dezvoltării durabile?", options: ["De mediu, social, economic", "Politic, militar, religios", "Agricol, industrial, terțiar"], answer: 0, explain: "Mediul, societatea și economia trebuie luate în considerare împreună." },
      { type: "text", q: "Cum se numește programul ONU din 2015 cu cele 17 obiective de dezvoltare durabilă?", answer: ["agenda 2030", "agenda 2030 a onu", "agenda 2030 pentru dezvoltare durabilă"], explain: "Agenda 2030 pentru dezvoltare durabilă, aprobată de 193 de țări." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Raportul Brundtland (1987)", "Conferința de la Rio (1992)", "Protocolul de la Kyoto (1997)", "Agenda 2030 (2015)"], explain: "De la definiția dezvoltării durabile, la tratatele privind clima, până la Agenda 2030." },
      { type: "mc", q: "De ce energia solară și cea eoliană necesită sisteme de stocare și rețele flexibile?", options: ["Sunt intermitente", "Sunt prea scumpe", "Produc deșeuri radioactive"], answer: 0, explain: "Soarele și vântul nu sunt disponibile constant, așa că sunt necesare baterii, rețele și un mix de surse." },
      { type: "tf", q: "Earth Overshoot Day indică ziua în care omenirea a consumat deja resursele pe care Pământul le poate regenera într-un an.", answer: true, explain: "În 2024 a căzut pe 1 august: după acea dată se „intră pe minus”." },
      { type: "mc", q: "Ce s-a întâmplat cu Lacul Aral?", options: ["S-a redus drastic din cauza devierii râurilor care îl alimentau", "A fost umplut de un baraj", "A devenit cel mai mare lac din lume"], answer: 0, explain: "Irigarea bumbacului, din anii '60, a luat apa râurilor Amudaria și Sârdaria, iar lacul aproape s-a secat." }
    ]
  }
});
