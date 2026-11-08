TOPIC('ro', {
  id: `m2-geo-europa-mediterranea`,
  title: `Europa Mediteraneană și Balcanii`,
  intro: `În fața Italiei, pe celălalt mal al Adriaticii și al Mării Ionice, se întinde <b>Peninsula Balcanică</b>: munți aspri, coaste pline de insule, mări foarte limpezi. Aici se află <b>Grecia</b>, leagănul civilizației occidentale, <b>Croația</b> cu miile ei de insule și celelalte state ale <b>Balcanilor</b>, născute în mare parte din destrămarea Iugoslaviei. O regiune foarte apropiată de noi, bogată în istorie, în popoare și în limbi diferite.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Peninsula Balcanică: munți și mări`,
      html: `<p><b>Peninsula Balcanică</b> este cea mai estică dintre cele trei mari peninsule ale Mediteranei europene (iberică, italică, balcanică). Este scăldată de patru mări: <b>Adriatică</b>, <b>Ionică</b>, <b>Egee</b> și <b>Marea Neagră</b>. La nord, granița ei se face de obicei să coincidă cu râurile Sava și Dunăre.</p>
<p>Numele vine de la <b>Munții Balcani</b>, din Bulgaria: în turcă <i>balkan</i> înseamnă „lanț de munți împăduriți”. Peninsula este, într-adevăr, foarte <b>muntoasă</b>:</p>
<ul>
<li>de-a lungul Adriaticii se întind <b>Alpii Dinarici</b>, munți calcaroși care coboară abrupt spre mare;</li>
<li>în centru și în est, <b>Balcanii</b> și <b>Rodopii</b>; cel mai înalt vârf este <b>Musala</b> (2.925 m), în Bulgaria;</li>
<li>în sud, munții Greciei, cu <b>Olimpul</b> (2.918 m), „casa zeilor”.</li>
</ul>
<p><b>Clima</b>: <b>mediteraneană</b> pe coaste (veri calde și uscate, ierni blânde și ploioase), <b>continentală</b> în interior, unde munții blochează influența mării. Pe coasta adriatică bate adesea <b>bora</b>, un vânt rece și violent care coboară din munți.</p>`
    },
    {
      type: `svg`,
      title: `Peninsula Balcanică și mările ei (schemă)`,
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#7dd3fc"/>
<polygon points="40,20 600,20 600,110 520,110 500,150 470,180 440,175 430,210 455,240 420,260 400,300 360,320 330,290 300,250 270,215 230,180 180,140 130,95 80,60 40,50" fill="#bef264" stroke="#3f6212" stroke-width="3"/>
<polygon points="350,328 410,322 420,336 345,338" fill="#bef264" stroke="#3f6212" stroke-width="2"/>
<text x="385" y="318" font-size="12" text-anchor="middle">Creta</text>
<path d="M60 50 L200 160" stroke="#a16207" stroke-width="10" stroke-linecap="round" fill="none"/>
<text x="150" y="98" font-size="13" fill="#713f12" font-weight="bold" transform="rotate(38 150 98)">Alpii Dinarici</text>
<text x="400" y="80" font-size="14" text-anchor="middle" font-weight="bold" fill="#3f6212">Dunărea și Sava (granița de nord)</text>
<path d="M120 40 C250 60 400 50 560 70" stroke="#2563eb" stroke-width="5" fill="none"/>
<text x="110" y="190" font-size="17" font-weight="bold" fill="#1e3a8a">Marea Adriatică</text>
<text x="180" y="290" font-size="17" font-weight="bold" fill="#1e3a8a">Marea Ionică</text>
<text x="500" y="250" font-size="17" font-weight="bold" fill="#1e3a8a">Marea Egee</text>
<text x="555" y="140" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Marea Neagră</text>
<text x="330" y="150" font-size="18" text-anchor="middle" font-weight="bold" fill="#365314">BALCANII</text>
<text x="340" y="250" font-size="14" text-anchor="middle" fill="#365314">Grecia</text>
<text x="495" y="182" font-size="12" fill="#7f1d1d">Bosfor</text>
</svg>`,
      caption: `Schemă simplificată, fără scară. Munții de lângă Adriatica despart coasta de interior: de aceea climele sunt atât de diferite.`
    },
    {
      type: `3d`,
      title: `Peisajele Mediteranei orientale în 3D`,
      scene: `terrain`,
      caption: `Rotește și atinge părțile: fiecare are un exemplu real în Grecia sau în Balcani.`,
      options: {
        features: {
          peninsula: { label: `Peninsulă`, html: `<b>Peloponezul</b>, în sudul Greciei, și însăși <b>Peninsula Balcanică</b>. Și <b>Istria</b> (Croația și Slovenia) este o peninsulă.` },
          isthmus: { label: `Istm`, html: `<b>Istmul Corint</b> lega Peloponezul de restul Greciei; în 1893 a fost tăiat de un canal lat de puțin peste 20 m și lung de 6,4 km.` },
          island: { label: `Insulă`, html: `<b>Creta</b> este cea mai mare insulă a Greciei (circa 8.300 km²), sediul străvechii civilizații minoice.` },
          archipelago: { label: `Arhipelag`, html: `<b>Cicladele</b> în Grecia și insulele <b>Dalmației</b> în Croația: sute de insule și stânci.` },
          strait: { label: `Strâmtoare`, html: `<b>Bosforul</b> și <b>Dardanelele</b> leagă Marea Neagră de Marea Egee; <b>Canalul Otranto</b> separă Italia de Albania (circa 72 km).` },
          gulf: { label: `Golf`, html: `<b>Golful Corint</b> separă aproape complet Peloponezul de Grecia continentală.` },
          bay: { label: `Golf mic`, html: `<b>Golful Kotor</b> din Muntenegru: o intrare adâncă și sinuoasă între munți abrupți, care seamănă cu un fiord.` },
          mountain: { label: `Lanț muntos`, html: `<b>Alpii Dinarici</b>, calcaroși, se întind pe toată coasta adriatică, din Slovenia până în Albania.` },
          peak: { label: `Vârf`, html: `<b>Olimpul</b> (2.918 m), cel mai înalt munte al Greciei, unde, după mituri, locuiau Zeus și ceilalți zei.` },
          volcano: { label: `Vulcan`, html: `<b>Santorini</b> este ceea ce a rămas dintr-un vulcan care a explodat acum circa 3.600 de ani: caldera lui este astăzi o lagună de mare înconjurată de stânci.` },
          lake: { label: `Lac`, html: `<b>Lacul Ohrid</b>, între Macedonia de Nord și Albania, este unul dintre cele mai vechi lacuri din Europa (peste un milion de ani). În Croația se află cele 16 <b>lacuri Plitvice</b>, legate prin cascade.` },
          beach: { label: `Plajă`, html: `Plajele Greciei și ale Croației atrag în fiecare an zeci de milioane de turiști, printre care și foarte mulți italieni.` },
          coast: { label: `Coastă`, html: `Coasta <b>Greciei</b>, cu insulele, are circa 13.700 km: una dintre cele mai lungi din Europa.` }
        }
      }
    },
    {
      type: `text`,
      title: `2. Grecia`,
      html: `<p><b>Capitala</b>: Atena · <b>Locuitori</b>: circa 10,4 milioane · <b>Suprafață</b>: circa 132.000 km² · <b>Forma de guvernământ</b>: republică parlamentară · <b>UE</b> din 1981, euro din 2001.</p>
<ul>
<li>Circa <b>80%</b> din teritoriu este muntos; restul este format din mici câmpii de coastă și din <b>insule</b>: circa 6.000 între insule și insulițe, dintre care puțin peste 200 sunt locuite (Creta, Eubeea, Rodos, Corfu, Ciclade…).</li>
<li>Niciun punct din Grecia nu se află la mai mult de circa 140 km de mare. De aceea grecii au fost mereu un popor de navigatori: astăzi armatorii greci dețin cea mai mare <b>flotă comercială din lume</b>.</li>
<li><b>Economie</b>: turism (circa 3 turiști la fiecare locuitor pe an), transport maritim, agricultură (măsline și ulei, struguri, citrice, bumbac), brânza feta.</li>
<li>Grecia antică ne-a lăsat <b>democrația</b>, filosofia, teatrul, Jocurile Olimpice și mii de cuvinte din limba noastră. Monumente faimoase: <b>Acropole</b> din Atena cu Partenonul, Delfi, Olimpia, palatul de la Cnossos din Creta.</li>
<li>Este una dintre cele mai <b>seismice</b> zone din Europa: aici placa africană alunecă sub cea euro-asiatică.</li>
</ul>`
    },
    {
      type: `text`,
      title: `3. Croația și Slovenia`,
      html: `<p><b>Croația</b> – Capitala: <b>Zagreb</b> · circa 3,8 milioane de locuitori · circa 56.600 km² · republică parlamentară.</p>
<ul>
<li>Are o formă ciudată „de semilună”: o parte continentală și plată la nord (spre Dunăre) și o lungă fâșie de coastă, <b>Dalmația</b>, plus <b>Istria</b>.</li>
<li>În fața coastei se află peste <b>1.200</b> de insule, insulițe și stânci (cele mai mari sunt Krk și Cres).</li>
<li>Orașe istorice: <b>Dubrovnik</b> (vechea Republică Ragusa), <b>Split</b> (construit în interiorul palatului împăratului roman Dioclețian), Pula cu arena ei romană. În Istria trăiește o minoritate de limbă italiană.</li>
<li>A intrat în UE în <b>2013</b>; din 1 ianuarie <b>2023</b> folosește <b>euro</b> și este în spațiul Schengen. Economie: turism, șantiere navale, agricultură.</li>
</ul>
<p><b>Slovenia</b> – Capitala: <b>Ljubljana</b> · circa 2,1 milioane de locuitori · circa 20.300 km². Se învecinează cu Italia (Friuli Veneția Giulia); are o mică porțiune de coastă (Koper, Piran). Cel mai înalt vârf: <b>Triglav</b> (2.864 m). Este faimoasă pentru peșterile din <b>Kras</b>, precum cele de la Postojna. În UE din 2004, euro din 2007.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-test: Grecia și Croația`,
      questions: [
        { type: `mc`, q: `Care este cea mai mare insulă a Greciei?`, options: [`Rodos`, `Creta`, `Corfu`], answer: 1, explain: `Creta, circa 8.300 km².` },
        { type: `text`, q: `Care este capitala Croației?`, answer: [`zagreb`, `zagabria`], explain: `Zagreb.` },
        { type: `tf`, q: `Croația folosește euro din 2023.`, answer: true, explain: `Din 1 ianuarie 2023, când a intrat și în spațiul Schengen.` }
      ]
    },
    {
      type: `text`,
      title: `4. Celelalte state din Balcani`,
      html: `<p>Din 1918 până în 1991, cea mai mare parte a Balcanilor Occidentali forma un singur stat, <b>Iugoslavia</b> („țara slavilor de sud”). După moartea mareșalului Tito (1980) au crescut tensiunile între diferitele popoare; între <b>1991</b> și 2001 Iugoslavia s-a destrămat printr-o serie de <b>războaie</b> foarte sângeroase. Cel mai grav a fost în <b>Bosnia și Herțegovina</b> (1992-95), cu asediul Sarajevo și genocidul de la <b>Srebrenica</b> (iulie 1995), unde au fost uciși circa 8.000 de bărbați și băieți musulmani bosniaci. Astăzi acele locuri sunt memoriale, iar regiunea lucrează pentru reconciliere.</p>
<table>
<tr><th>Statul</th><th>Capitala</th><th>De știut</th></tr>
<tr><td><b>Bosnia și Herțegovina</b></td><td>Sarajevo</td><td>Podul din Mostar (1566), distrus în 1993 și reconstruit în 2004. La Sarajevo, în 1914, atentatul care a declanșat Primul Război Mondial.</td></tr>
<tr><td><b>Serbia</b></td><td>Belgrad</td><td>Belgradul se află acolo unde Sava se varsă în Dunăre. Se folosesc atât alfabetul chirilic, cât și cel latin.</td></tr>
<tr><td><b>Muntenegru</b></td><td>Podgorica</td><td>Folosește euro, deși nu este în UE. Golful Kotor.</td></tr>
<tr><td><b>Albania</b></td><td>Tirana</td><td>Albaneza este o limbă indo-europeană fără „surori”. În Italia trăiesc de secole comunități arbëreshë, de origine albaneză.</td></tr>
<tr><td><b>Macedonia de Nord</b></td><td>Skopje</td><td>Lacul Ohrid; și-a schimbat numele în 2019.</td></tr>
<tr><td><b>Kosovo</b></td><td>Priștina</td><td>A declarat independența în 2008; Serbia și alte câteva state nu o recunosc.</td></tr>
<tr><td><b>Bulgaria</b></td><td>Sofia</td><td>În UE din 2007, în zona euro din 2026. Faimoasă pentru uleiul de trandafir.</td></tr>
</table>
<p>Albania, Bosnia și Herțegovina, Macedonia de Nord, Muntenegru și Serbia sunt <b>țări candidate</b> la aderarea la UE. În Mediterana fac parte din UE și două state insulare: <b>Malta</b> (cel mai mic stat al UE) și <b>Cipru</b>.</p>`
    },
    {
      type: `widget`,
      title: `Potrivește țara cu capitala`,
      widget: `match`,
      options: {
        pairs: [
          [`🇬🇷 Grecia`, `Atena`],
          [`🇭🇷 Croația`, `Zagreb`],
          [`🇸🇮 Slovenia`, `Ljubljana`],
          [`🇧🇦 Bosnia și Herțegovina`, `Sarajevo`],
          [`🇷🇸 Serbia`, `Belgrad`],
          [`🇦🇱 Albania`, `Tirana`],
          [`🇧🇬 Bulgaria`, `Sofia`],
          [`🇲🇰 Macedonia de Nord`, `Skopje`]
        ]
      },
      caption: `Opt state, opt capitale: unele sunt foarte aproape de Italia în linie dreaptă (Tirana se află la circa 200 km de Puglia).`
    },
    {
      type: `widget`,
      title: `În UE sau candidat?`,
      widget: `classify`,
      options: {
        groups: [`Membru al UE`, `Țară candidată`],
        items: [
          [`🇬🇷 Grecia`, 0],
          [`🇭🇷 Croația`, 0],
          [`🇸🇮 Slovenia`, 0],
          [`🇧🇬 Bulgaria`, 0],
          [`🇲🇹 Malta`, 0],
          [`🇨🇾 Cipru`, 0],
          [`🇦🇱 Albania`, 1],
          [`🇷🇸 Serbia`, 1],
          [`🇲🇪 Muntenegru`, 1],
          [`🇲🇰 Macedonia de Nord`, 1],
          [`🇧🇦 Bosnia și Herțegovina`, 1]
        ]
      },
      caption: `Pentru a intra în UE, o țară trebuie să respecte democrația, drepturile omului și statul de drept și să-și adapteze mii de legi.`
    },
    {
      type: `svg`,
      title: `Carstul: apa care sapă roca`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<rect x="0" y="90" width="600" height="230" fill="#d6d3d1"/>
<path d="M0 90 L150 90 Q190 135 230 90 L600 90" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<text x="190" y="80" font-size="15" text-anchor="middle" font-weight="bold">dolină</text>
<line x1="80" y1="20" x2="70" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="110" y1="20" x2="100" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="140" y1="20" x2="130" y2="55" stroke="#2563eb" stroke-width="3"/>
<text x="110" y="15" font-size="14" text-anchor="middle" fill="#1d4ed8">ploaie (cu CO₂)</text>
<path d="M190 120 L200 170 L230 200" stroke="#2563eb" stroke-width="5" fill="none"/>
<ellipse cx="350" cy="225" rx="170" ry="55" fill="#57534e"/>
<polygon points="250,180 258,210 266,180" fill="#e7e5e4"/>
<polygon points="300,172 308,215 316,172" fill="#e7e5e4"/>
<polygon points="400,175 408,205 416,175" fill="#e7e5e4"/>
<polygon points="440,272 448,240 456,272" fill="#e7e5e4"/>
<polygon points="330,278 338,250 346,278" fill="#e7e5e4"/>
<path d="M190 255 Q350 285 520 250" stroke="#3b82f6" stroke-width="7" fill="none"/>
<text x="350" y="230" font-size="16" text-anchor="middle" font-weight="bold" fill="#ffffff">PEȘTERĂ</text>
<text x="545" y="190" font-size="13" text-anchor="middle">stalactite</text>
<text x="545" y="206" font-size="13" text-anchor="middle">(de sus)</text>
<text x="545" y="290" font-size="13" text-anchor="middle">stalagmite (de jos)</text>
<text x="200" y="305" font-size="13" text-anchor="middle" fill="#1d4ed8">râu subteran</text>
<text x="450" y="120" font-size="15" text-anchor="middle" fill="#44403c">rocă calcaroasă</text>
</svg>`,
      caption: `Apa de ploaie, ușor acidă, dizolvă calcarul: la suprafață se formează adâncituri (doline), în subteran peșteri și râuri. Fenomenul își ia numele de la Kras (Carst), între Italia și Slovenia.`
    },
    {
      type: `example`,
      title: `Exemplu practic: cu feribotul din Italia în Balcani`,
      html: `<p>Din porturile Adriaticii pleacă în fiecare zi feriboturi spre malul celălalt:</p>
<table>
<tr><th>Plecare</th><th>Sosire</th><th>Durată orientativă</th></tr>
<tr><td>Ancona</td><td>Split (Croația)</td><td>circa 10-11 ore (noaptea)</td></tr>
<tr><td>Bari</td><td>Durrës (Albania)</td><td>circa 9 ore</td></tr>
<tr><td>Brindisi</td><td>Igoumenitsa (Grecia)</td><td>circa 8 ore</td></tr>
<tr><td>Ancona / Bari</td><td>Patras (Grecia)</td><td>circa 16-22 de ore</td></tr>
</table>
<p>Pe o hartă, măsoară cu rigla distanța Bari-Durrës: circa 200 km în linie dreaptă. Dacă feribotul navighează cu circa 22 de noduri (circa 40 km/h), câte ore ar trebui teoretic? (200 : 40 = 5 ore: restul timpului se duce pe manevre, încărcare și o viteză medie mai mică.)</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: vorbești grecește fără să știi!`,
      html: `<p>Foarte multe cuvinte din limba noastră, mai ales cele științifice, vin din greaca veche. Încearcă să le descompui:</p>
<ul>
<li><b>geo-grafie</b> = pământ + scriere (descrierea Pământului);</li>
<li><b>demo-crație</b> = popor + putere;</li>
<li><b>arhipelag</b> = marea principală (era numele Mării Egee, plină de insule);</li>
<li><b>tele-fon</b> = departe + voce;</li>
<li><b>Mediterana</b>, în schimb, este latinesc: „în mijlocul pământurilor”.</li>
</ul>
<p>Folosește cărțile de mai jos ca să exersezi.</p>`
    },
    {
      type: `widget`,
      title: `Flashcarduri: cuvinte grecești în limba noastră`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `🌍 geo-`, back: `pământ (geografie, geologie)` },
          { front: `👥 demo-`, back: `popor (democrație, demografie)` },
          { front: `📞 tele-`, back: `departe (telefon, televiziune)` },
          { front: `🏙️ polis`, back: `oraș (metropolă, politică)` },
          { front: `📖 -logie`, back: `studiu, discurs (biologie, zoologie)` },
          { front: `🔊 phonè`, back: `voce, sunet (telefon, microfon)` },
          { front: `🌊 pelagos`, back: `mare (arhipelag, pelagic)` }
        ]
      },
      caption: `Întoarce cărțile: ghicește sensul înainte de a te uita pe verso.`
    },
    {
      type: `curiosity`,
      title: `Știai că… cravata vine din Croația?`,
      html: `<p>În secolul al XVII-lea, soldații croați aflați în slujba regelui Franței purtau la gât o eșarfă înnodată. Parizienilor le-a plăcut foarte mult și au numit-o <i>à la croate</i>, „în stil croat”: de aici cuvântul <b>cravată</b>. Pe 18 octombrie, în Croația se sărbătorește Ziua cravatei. Iar dalmațianul, câinele cu pete albe și negre, își ia numele chiar de la Dalmația!</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… în Bulgaria „da” și „nu” se fac pe dos?`,
      html: `<p>În Bulgaria (și în parte în Albania și Macedonia de Nord), tradițional se <b>dă din cap</b> dintr-o parte în alta ca să spui <b>da</b> și se face semn din cap în sus și în jos ca să spui <b>nu</b>. Mulți bulgari folosesc astăzi și gesturile „internaționale”, așa că… mai bine întreabă cu vorba! Iar alfabetul chirilic s-a dezvoltat chiar în școlile primului regat bulgar, în secolele al IX-lea–al X-lea.</p>`
    },
    {
      type: `decision`,
      title: `2018: Grecia și Macedonia, o ceartă pentru un nume`,
      html: `<p>Din 1991, un mic stat balcanic se numește „Republica Macedonia”. Dar <b>Macedonia</b> este și numele unei mari regiuni a Greciei, țara lui Alexandru cel Mare. Grecia se teme de pretenții asupra teritoriului și istoriei sale și de aceea blochează intrarea vecinului în NATO și negocierile cu UE. Ești unul dintre negociatori.</p>`,
      question: `Ce soluție propui?`,
      options: [
        { label: `Statul vecin trebuie să renunțe complet la cuvântul „Macedonia”.`, outcome: `Pentru locuitorii lui, care se numesc macedoneni de generații și vorbesc limba macedoneană, ar fi inacceptabil: niciun guvern nu ar putea semna așa ceva.` },
        { label: `Un nume cu un adjectiv geografic care să-l distingă de regiunea greacă, plus garanții reciproce.`, outcome: `Ambele părți trebuie să renunțe la ceva, iar naționaliștii din ambele țări vor protesta. Dar se deblochează o ceartă care durează de 27 de ani.` },
        { label: `Lăsăm lucrurile așa cum sunt.`, outcome: `Blocajul ar continua: fără NATO, fără UE, relații încordate între vecini.` }
      ],
      answer: 1,
      explain: `Prin <b>Acordul de la Prespa</b> (iunie 2018, după numele lacului de la granița dintre cele două țări), vecinul Greciei a primit numele de <b>Republica Macedonia de Nord</b> (în vigoare din 2019), precizând că nu are legătură cu vechea Macedonie a lui Alexandru cel Mare; Grecia și-a retras vetoul. În 2020 Macedonia de Nord a intrat în NATO. Cei doi prim-miniștri au primit mai multe distincții internaționale: este un exemplu despre cum diplomația poate rezolva conflicte legate de geografie și identitate.`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege Balcanii`,
      intro: `O regiune complexă: iată alte chei pentru a o înțelege.`,
      tabs: [
        {
          label: `🧩 Iugoslavia ca un mozaic`,
          html: `<p>Imaginează-ți un mozaic făcut din piese de culori diferite, ținute laolaltă de un cadru. Piesele erau popoarele (sloveni, croați, sârbi, bosniaci, muntenegreni, macedoneni, albanezii din Kosovo…), cu limbi, religii (catolică, ortodoxă, musulmană) și istorii diferite. Cadrul era statul iugoslav condus de Tito. Când cadrul s-a spart, piesele s-au despărțit, din păcate cu multă violență.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f8fafc"/>
<rect x="20" y="20" width="250" height="160" fill="none" stroke="#334155" stroke-width="6"/>
<rect x="30" y="30" width="70" height="60" fill="#60a5fa"/>
<rect x="100" y="30" width="80" height="60" fill="#f87171"/>
<rect x="180" y="30" width="80" height="60" fill="#fbbf24"/>
<rect x="30" y="90" width="80" height="80" fill="#34d399"/>
<rect x="110" y="90" width="70" height="80" fill="#a78bfa"/>
<rect x="180" y="90" width="80" height="80" fill="#f472b6"/>
<text x="145" y="198" font-size="14" text-anchor="middle">Iugoslavia (până în 1991)</text>
<text x="300" y="105" font-size="30" text-anchor="middle">→</text>
<rect x="340" y="25" width="60" height="50" fill="#60a5fa"/>
<rect x="420" y="20" width="65" height="50" fill="#f87171"/>
<rect x="505" y="30" width="65" height="50" fill="#fbbf24"/>
<rect x="345" y="105" width="65" height="60" fill="#34d399"/>
<rect x="430" y="110" width="60" height="60" fill="#a78bfa"/>
<rect x="510" y="115" width="60" height="55" fill="#f472b6"/>
<text x="455" y="198" font-size="14" text-anchor="middle">Cele 7 state de azi (cu Kosovo)</text>
</svg>`
        },
        {
          label: `🍬 Carstul cu zahăr`,
          html: `<p>Fă un experiment: construiește un mic turn din <b>cuburi de zahăr</b> (ele reprezintă calcarul) și toarnă deasupra, încet, câteva picături de apă cu o pipetă. Vei vedea că apa „sapă” canale și găuri, iar turnul se sfărâmă pe unde trece apa.</p>
<p>Calcarul se dizolvă mult mai încet decât zahărul (sunt necesare mii de ani), dar principiul este același: apa de ploaie, făcută ușor acidă de dioxidul de carbon, dizolvă roca și creează doline, peșteri, râuri care dispar în subteran. De aceea pe coastele dalmate și în Kras sunt puține râuri la suprafață.</p>`
        },
        {
          label: `🌍 Pe glob`,
          html: `<p>Rotește globul și găsește capitalele și locurile faimoase ale regiunii. Observă cât de aproape sunt de Italia!</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 37.98, lon: 23.73, label: `Atena`, color: `#2563eb` },
              { lat: 45.81, lon: 15.98, label: `Zagreb`, color: `#ef4444` },
              { lat: 42.65, lon: 18.09, label: `Dubrovnik`, color: `#f97316` },
              { lat: 43.86, lon: 18.41, label: `Sarajevo`, color: `#eab308` },
              { lat: 44.82, lon: 20.46, label: `Belgrad`, color: `#a855f7` },
              { lat: 41.33, lon: 19.82, label: `Tirana`, color: `#dc2626` },
              { lat: 42.7, lon: 23.32, label: `Sofia`, color: `#16a34a` },
              { lat: 40.09, lon: 22.36, label: `Muntele Olimp`, color: `#64748b` },
              { lat: 36.4, lon: 25.43, label: `Santorini`, color: `#f97316` },
              { lat: 41.11, lon: 16.87, label: `Bari (Italia)`, color: `#0ea5e9` }
            ]
          }
        },
        {
          label: `📐 Compară cu Italia`,
          html: `<table>
<tr><th></th><th>Grecia</th><th>Italia</th></tr>
<tr><td>Suprafață</td><td>132.000 km²</td><td>302.000 km²</td></tr>
<tr><td>Locuitori</td><td>10,4 milioane</td><td>59 de milioane</td></tr>
<tr><td>Insule</td><td>circa 6.000 (circa 200 locuite)</td><td>circa 800 (circa 80 locuite)</td></tr>
<tr><td>Cel mai înalt vârf</td><td>Olimp 2.918 m</td><td>Mont Blanc 4.806 m</td></tr>
<tr><td>Vulcani activi faimoși</td><td>Santorini</td><td>Etna, Vezuviu, Stromboli</td></tr>
<tr><td>Clima de coastă</td><td>mediteraneană</td><td>mediteraneană</td></tr>
</table>
<p>Grecia și Italia sunt două peninsule „surori”: aceeași mare, același climat, multe cutremure, o lungă istorie comună (Magna Grecia din sudul Italiei).</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta Europei Mediteraneene și a Balcanilor`,
      nodes: [
        { id: `placche`, label: `Ciocnirea plăcilor`, x: 50, y: 6, color: `#7c3aed`, html: `Placa africană împinge împotriva celei euro-asiatice.`, why: `Această mișcare foarte lentă (câțiva cm pe an) a ridicat munții regiunii și provoacă încă cutremure și vulcani, ca în Grecia și la Santorini.` },
        { id: `montagne`, label: `Munți calcaroși`, x: 20, y: 25, color: `#a16207`, html: `Alpii Dinarici, Balcanii, Pindul: peninsula este în mare parte muntoasă.`, why: `Rocile calcaroase s-au format pe fundul unor mări străvechi din cochilii și schelete de organisme marine; apoi ciocnirea plăcilor le-a ridicat.` },
        { id: `carsismo`, label: `Carst`, x: 20, y: 55, color: `#57534e`, html: `Peșteri, doline, râuri subterane.`, why: `Apa de ploaie, făcută acidă de dioxidul de carbon, dizolvă calcarul. Numele vine de la Kras (Carst), între Trieste și Slovenia, unde fenomenul a fost studiat pentru prima oară.` },
        { id: `coste`, label: `Coaste și insule`, x: 80, y: 25, color: `#0ea5e9`, html: `Coaste crestate și mii de insule în Grecia și Croația.`, why: `La sfârșitul ultimei glaciațiuni nivelul mării a crescut cu peste 100 m și a invadat văile dintre munții de coastă: vârfurile rămase deasupra apei au devenit insule.` },
        { id: `clima`, label: `Climă mediteraneană și continentală`, x: 50, y: 40, color: `#eab308`, html: `Cald și uscat pe coaste, frig iarna în interior.`, why: `Munții paraleli cu coasta opresc influența mării: la câțiva km distanță clima se schimbă mult.` },
        { id: `turismo`, label: `Turism și mare`, x: 80, y: 55, color: `#f97316`, html: `Turismul, navigația și pescuitul sunt activități fundamentale.`, why: `Marea limpede, clima însorită și patrimoniul istoric atrag zeci de milioane de vizitatori; coastele lungi i-au împins dintotdeauna pe oameni spre navigație.` },
        { id: `popoli`, label: `Multe popoare și religii`, x: 50, y: 70, color: `#a855f7`, html: `Greci, slavi de sud, albanezi; ortodocși, catolici, musulmani.`, why: `Peninsula a fost o răscruce: greci, romani, bizantini, slavi (din secolele al VI-lea–al VII-lea), venețieni, otomani (aproape 500 de ani) și Habsburgii au lăsat aici limbi, religii și culturi diferite.` },
        { id: `jugoslavia`, label: `Iugoslavia și războaiele`, x: 25, y: 90, color: `#7f1d1d`, html: `Un stat unit (1918-1991), apoi destrămarea și războaiele din anii ’90.`, why: `După sfârșitul marilor imperii s-a încercat unirea slavilor de sud; criza economică și naționalismele din anii ’80-’90 au dus la dezmembrarea violentă.` },
        { id: `ue`, label: `Spre Europa unită`, x: 75, y: 90, color: `#1d4ed8`, html: `Grecia, Slovenia, Croația, Bulgaria în UE; alte state sunt candidate.`, why: `Intrarea în UE este văzută ca o garanție a păcii, democrației și dezvoltării; cere reforme și rezolvarea disputelor dintre vecini, așa cum arată Acordul de la Prespa.` }
      ],
      edges: [
        [`placche`, `montagne`, `ridică`],
        [`montagne`, `carsismo`, `din calcar → `],
        [`placche`, `coste`, `cu marea care crește →`],
        [`montagne`, `clima`, `despart coasta de interior`],
        [`coste`, `turismo`, `atrag`],
        [`montagne`, `popoli`, `văi izolate`],
        [`popoli`, `jugoslavia`, `uniți, apoi despărțiți`],
        [`jugoslavia`, `ue`, `de la război la integrare`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: Balcanii`,
      questions: [
        { type: `mc`, q: `De unde vine numele „Balcani”?`, options: [`De la un rege străvechi`, `De la Munții Balcani: în turcă „lanț de munți împăduriți”`, `De la un râu`], answer: 1, explain: `Munții Balcani se află în Bulgaria.` },
        { type: `mc`, q: `Ce provoacă carstul?`, options: [`Vântul care șlefuiește rocile`, `Apa care dizolvă calcarul formând peșteri și doline`, `Vulcanii`], answer: 1, explain: `Își ia numele de la Kras (Carst), între Italia și Slovenia.` },
        { type: `text`, q: `Care este capitala Serbiei?`, answer: [`belgrad`, `beograd`], explain: `Belgrad, la confluența dintre Sava și Dunăre.` }
      ]
    }
  ],
  glossary: [
    { t: `Peninsula Balcanică`, d: `Peninsulă din sud-estul Europei, între Marea Adriatică, Ionică, Egee și Marea Neagră.` },
    { t: `Alpii Dinarici`, d: `Lanț muntos calcaros care se întinde pe coasta de est a Adriaticii.` },
    { t: `Carst`, d: `Ansamblul fenomenelor produse de apa care dizolvă rocile calcaroase (peșteri, doline, râuri subterane).` },
    { t: `Dolină`, d: `Adâncitură în formă de pâlnie creată de carst.` },
    { t: `Bora`, d: `Vânt rece și violent care bate dinspre nord-est peste Adriatica.` },
    { t: `Istm`, d: `Fâșie îngustă de pământ care unește două uscaturi și separă două mări, precum cel de la Corint.` },
    { t: `Iugoslavia`, d: `Statul slavilor de sud, existent între 1918 și 1991-92, apoi împărțit în mai multe state.` },
    { t: `Calderă`, d: `Mare adâncitură formată prin prăbușirea unui vulcan după o erupție, ca la Santorini.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Care mări scaldă Peninsula Balcanică?`, options: [`Adriatică, Ionică, Egee, Marea Neagră`, `Tireniană, Ligurică, Baltică`, `Marea Nordului și Atlanticul`], answer: 0, explain: `Patru mări: Adriatică, Ionică, Egee și Marea Neagră.` },
      { type: `text`, q: `Care este capitala Greciei?`, answer: [`atena`, `athina`], explain: `Atena.` },
      { type: `mc`, q: `Care este cel mai înalt munte al Greciei?`, options: [`Olimp`, `Triglav`, `Musala`], answer: 0, explain: `Olimpul, 2.918 m. Triglav este în Slovenia, Musala în Bulgaria.` },
      { type: `tf`, q: `Grecia are mii de insule, dar doar puțin peste 200 sunt locuite.`, answer: true, explain: `Circa 6.000 între insule și insulițe, puțin peste 200 locuite.` },
      { type: `mc`, q: `Ce leagă Canalul Corint?`, options: [`Marea Neagră și Marea Egee`, `Golful Corint și Marea Egee, tăind istmul`, `Adriatica și Marea Ionică`], answer: 1, explain: `A fost săpat în 1893 prin istmul Corint.` },
      { type: `num`, q: `În ce an a intrat Croația în Uniunea Europeană?`, answer: 2013, explain: `În 2013; din 2023 folosește euro.` },
      { type: `mc`, q: `Care stat folosește euro deși nu face parte din UE?`, options: [`Muntenegru`, `Serbia`, `Albania`], answer: 0, explain: `Muntenegru l-a adoptat unilateral.` },
      { type: `order`, q: `Pune în ordine cronologică.`, items: [`Atentatul de la Sarajevo`, `Nașterea Iugoslaviei`, `Moartea lui Tito`, `Începutul destrămării Iugoslaviei`, `Croația în UE`], explain: `1914, 1918, 1980, 1991, 2013.` },
      { type: `mc`, q: `De ce sunt puține râuri la suprafață pe coasta dalmată?`, options: [`Pentru că nu plouă niciodată`, `Pentru că, din cauza carstului, apa curge în subteran`, `Pentru că râurile au fost deviate`], answer: 1, explain: `Calcarul este dizolvat de apă, care se infiltrează și formează râuri subterane.` },
      { type: `text`, q: `Cum se numește astăzi statul care a schimbat numele prin Acordul de la Prespa? (Macedonia de …)`, answer: [`nord`, `macedonia de nord`], explain: `Republica Macedonia de Nord, din 2019.` },
      { type: `tf`, q: `Clima din interiorul Balcanilor este aceeași cu cea de pe coastă.`, answer: false, explain: `Pe coaste este mediteraneană; în interior, adăpostit de munți, este continentală.` },
      { type: `mc`, q: `Care stat este cel mai mic din Uniunea Europeană?`, options: [`Cipru`, `Malta`, `Slovenia`], answer: 1, explain: `Malta, circa 316 km².` }
    ]
  }
});
