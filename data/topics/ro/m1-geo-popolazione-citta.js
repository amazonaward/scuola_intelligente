TOPIC('ro', {
  id: `m1-geo-popolazione-citta`,
  title: `Populație și orașe`,
  intro: `Pe Pământ trăim mai mult de <b>8 miliarde</b> de oameni, dar nu suntem distribuiți uniform: există metropole foarte aglomerate și deșerturi aproape goale. În această lecție învățăm să <b>măsurăm</b> populația (densitate, natalitate, mortalitate), să înțelegem de ce oamenii <b>se mută</b> (migrații) și de ce tot mai multă lume trăiește în <b>orașe</b> (urbanizare).`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. Câți suntem și cum se numără`,
      html: `<p><b>Demografia</b> este știința care studiază populația: câți oameni sunt, ce vârstă au, unde trăiesc, cum se schimbă în timp.</p>
<p>Datele se adună mai ales în două moduri:</p>
<ul>
<li><b>recensământul</b>: o mare numărătoare a tuturor locuitorilor. În Italia îl realizează <b>ISTAT</b> (Institutul Național de Statistică); din 2018 a devenit <b>permanent</b>, adică se face în fiecare an pe un eșantion de familii;</li>
<li><b>registrul de stare civilă</b> al comunelor, care înregistrează nașteri, decese, schimbări de domiciliu.</li>
</ul>
<p>Câteva numere de ținut minte (date rotunjite):</p>
<table>
<tr><th>Unde</th><th>Locuitori</th></tr>
<tr><td>🌍 Lume</td><td>aproximativ <b>8,2 miliarde</b> (2025)</td></tr>
<tr><td>🇪🇺 Uniunea Europeană</td><td>aproximativ <b>450 de milioane</b></td></tr>
<tr><td>🇮🇹 Italia</td><td>aproximativ <b>59 de milioane</b></td></tr>
<tr><td>🏙️ Roma (comuna)</td><td>aproximativ <b>2,75 milioane</b></td></tr>
</table>
<p>În <b>1800</b>, oamenii erau aproximativ <b>1 miliard</b>; în <b>1960</b> erau 3 miliarde. Creșterea foarte rapidă din secolul al XX-lea se numește <b>explozie demografică</b> și se datorează mai ales scăderii mortalității datorită medicinei, igienei și alimentației.</p>`
    },
    {
      type: `text`, title: `2. Densitatea populației`,
      html: `<p>Nu e suficient să știi câți locuitori are o țară: 59 de milioane pe un teritoriu mic sunt „mulți”, pe unul uriaș sunt „puțini”. Pentru comparație se folosește <b>densitatea populației</b>:</p>
<p style="font-size:1.2em;text-align:center"><b>densitate = locuitori : suprafață (km²)</b></p>
<p>Rezultatul se citește „<b>locuitori pe kilometru pătrat</b>” (loc./km²).</p>
<p><b>Pas cu pas, Italia:</b></p>
<ol>
<li>locuitori ≈ 59.000.000;</li>
<li>suprafață ≈ 302.000 km²;</li>
<li>59.000.000 : 302.000 ≈ <b>195 loc./km²</b>.</li>
</ol>
<p>Înseamnă că, dacă i-am distribui pe toți italienii în mod egal, în fiecare pătrat cu latura de 1 km ar fi aproximativ 195 de persoane. Desigur, în realitate nu este așa: <b>Câmpia Padului</b> și coastele sunt aglomerate, munții mult mai puțin.</p>
<table>
<tr><th>Teritoriul</th><th>Densitate (aproximativ)</th></tr>
<tr><td>Principatul Monaco</td><td>peste 18.000 loc./km² (cel mai dens din lume)</td></tr>
<tr><td>Bangladesh</td><td>aproximativ 1.200 loc./km²</td></tr>
<tr><td>Țările de Jos</td><td>aproximativ 530 loc./km²</td></tr>
<tr><td>Italia</td><td>aproximativ 195 loc./km²</td></tr>
<tr><td>Campania (cea mai densă regiune a Italiei)</td><td>aproximativ 410 loc./km²</td></tr>
<tr><td>Valle d’Aosta (cea mai puțin densă)</td><td>aproximativ 38 loc./km²</td></tr>
<tr><td>Mongolia</td><td>aproximativ 2 loc./km²</td></tr>
</table>`
    },
    {
      type: `svg`, title: `Aceeași suprafață, densități diferite`,
      caption: `Trei pătrate de aceeași mărime: se schimbă doar numărul de persoane care trăiesc în ele.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="40" width="170" height="170" fill="#dcfce7" stroke="#166534" stroke-width="3"/>
<rect x="215" y="40" width="170" height="170" fill="#fef9c3" stroke="#a16207" stroke-width="3"/>
<rect x="410" y="40" width="170" height="170" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/>
<g fill="#166534"><circle cx="60" cy="90" r="7"/><circle cx="150" cy="160" r="7"/></g>
<g fill="#a16207"><circle cx="245" cy="70" r="7"/><circle cx="300" cy="90" r="7"/><circle cx="350" cy="75" r="7"/><circle cx="260" cy="130" r="7"/><circle cx="330" cy="140" r="7"/><circle cx="280" cy="185" r="7"/><circle cx="360" cy="185" r="7"/><circle cx="305" cy="160" r="7"/></g>
<g fill="#b91c1c">
<circle cx="430" cy="60" r="7"/><circle cx="455" cy="60" r="7"/><circle cx="480" cy="60" r="7"/><circle cx="505" cy="60" r="7"/><circle cx="530" cy="60" r="7"/><circle cx="555" cy="60" r="7"/>
<circle cx="430" cy="90" r="7"/><circle cx="455" cy="90" r="7"/><circle cx="480" cy="90" r="7"/><circle cx="505" cy="90" r="7"/><circle cx="530" cy="90" r="7"/><circle cx="555" cy="90" r="7"/>
<circle cx="430" cy="120" r="7"/><circle cx="455" cy="120" r="7"/><circle cx="480" cy="120" r="7"/><circle cx="505" cy="120" r="7"/><circle cx="530" cy="120" r="7"/><circle cx="555" cy="120" r="7"/>
<circle cx="430" cy="150" r="7"/><circle cx="455" cy="150" r="7"/><circle cx="480" cy="150" r="7"/><circle cx="505" cy="150" r="7"/><circle cx="530" cy="150" r="7"/><circle cx="555" cy="150" r="7"/>
<circle cx="430" cy="180" r="7"/><circle cx="455" cy="180" r="7"/><circle cx="480" cy="180" r="7"/><circle cx="505" cy="180" r="7"/><circle cx="530" cy="180" r="7"/><circle cx="555" cy="180" r="7"/>
</g>
<text x="105" y="30" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">Munte</text>
<text x="300" y="30" font-size="16" text-anchor="middle" fill="#a16207" font-weight="bold">Sat</text>
<text x="495" y="30" font-size="16" text-anchor="middle" fill="#b91c1c" font-weight="bold">Oraș</text>
<text x="105" y="240" font-size="15" text-anchor="middle" fill="#0f172a">2 persoane</text>
<text x="300" y="240" font-size="15" text-anchor="middle" fill="#0f172a">8 persoane</text>
<text x="495" y="240" font-size="15" text-anchor="middle" fill="#0f172a">30 de persoane</text>
<text x="105" y="265" font-size="15" text-anchor="middle" fill="#166534" font-weight="bold">densitate MICĂ</text>
<text x="300" y="265" font-size="15" text-anchor="middle" fill="#a16207" font-weight="bold">densitate MEDIE</text>
<text x="495" y="265" font-size="15" text-anchor="middle" fill="#b91c1c" font-weight="bold">densitate MARE</text>
<text x="300" y="292" font-size="14" text-anchor="middle" fill="#334155">densitate = locuitori : suprafață</text>
</svg>`
    },
    {
      type: `example`, title: `Exemplu practic: densitatea clasei tale`,
      html: `<p>Sala voastră măsoară 7 m × 8 m = <b>56 m²</b> și în ea sunt <b>24 de elevi</b>.</p>
<ul>
<li>Densitate = 24 : 56 ≈ <b>0,43 elevi pe m²</b>.</li>
<li>În curte (600 m²) aceiași 24 de elevi au o densitate de 24 : 600 = <b>0,04 elevi pe m²</b>: de zece ori mai puțin aglomerat!</li>
</ul>
<p>Geografii fac același lucru, dar cu locuitori și km². Încearcă cu comuna ta: caută pe internet locuitorii și suprafața și împarte.</p>`
    },
    {
      type: `text`, title: `3. De ce este populația distribuită așa?`,
      html: `<p>Oamenii se concentrează acolo unde viața este mai ușoară. <b>Factorii</b> sunt de două feluri:</p>
<ul>
<li><b>Factori fizici (naturali)</b>: climă blândă, apă dulce, soluri fertile, câmpii, coaste. Dimpotrivă, deșerturile, ghețurile, munții înalți și pădurile foarte dese sunt puțin locuite.</li>
<li><b>Factori umani (istorici și economici)</b>: muncă, industrii, porturi, drumuri și căi ferate, școli și spitale, istoria străveche a orașelor.</li>
</ul>
<p>Aproximativ <b>jumătate din omenire</b> trăiește în Asia, între China, India, Bangladesh, Pakistan și Indonezia. În Europa, zonele cele mai dense formează o „banană albastră” care merge din Anglia până în nordul Italiei, trecând prin Țările de Jos și valea Rinului.</p>`
    },
    {
      type: `text`, title: `4. Mișcarea naturală: nașteri și decese`,
      html: `<p>O populație se schimbă din două motive: <b>mișcarea naturală</b> și <b>mișcarea migratorie</b>.</p>
<ul>
<li><b>Rata natalității</b>: născuți la 1000 de locuitori într-un an.</li>
<li><b>Rata mortalității</b>: decedați la 1000 de locuitori într-un an.</li>
<li><b>Spor natural</b> = născuți − decedați. Dacă este negativ, populația, fără imigrație, scade.</li>
</ul>
<p>În Italia, în 2024, s-au născut aproximativ <b>370.000</b> de copii (cel mai mic număr de la Unitatea Italiei) și au murit aproximativ <b>650.000</b> de persoane: sporul natural este puternic <b>negativ</b>. În medie, fiecare femeie are aproximativ <b>1,2 copii</b>, în timp ce pentru a menține populația stabilă ar fi nevoie de aproximativ 2,1.</p>
<p>În același timp se trăiește mai mult: <b>speranța de viață</b> în Italia depășește <b>83 de ani</b>, una dintre cele mai ridicate din lume. Rezultat: Italia este una dintre țările cele mai <b>îmbătrânite</b> de pe planetă (vârsta medie aproximativ 47 de ani).</p>`
    },
    {
      type: `svg`, title: `Piramida vârstelor`,
      caption: `În stânga, o țară tânără (bază largă, mulți copii); în dreapta, o țară îmbătrânită ca Italia (bază îngustă, mulți adulți și vârstnici).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<g fill="#3b82f6"><rect x="40" y="200" width="110" height="20"/><rect x="60" y="178" width="90" height="20"/><rect x="80" y="156" width="70" height="20"/><rect x="100" y="134" width="50" height="20"/><rect x="118" y="112" width="32" height="20"/><rect x="134" y="90" width="16" height="20"/></g>
<g fill="#ec4899"><rect x="150" y="200" width="110" height="20"/><rect x="150" y="178" width="90" height="20"/><rect x="150" y="156" width="70" height="20"/><rect x="150" y="134" width="50" height="20"/><rect x="150" y="112" width="32" height="20"/><rect x="150" y="90" width="16" height="20"/></g>
<g fill="#3b82f6"><rect x="390" y="200" width="40" height="20"/><rect x="378" y="178" width="52" height="20"/><rect x="370" y="156" width="60" height="20"/><rect x="365" y="134" width="65" height="20"/><rect x="372" y="112" width="58" height="20"/><rect x="388" y="90" width="42" height="20"/></g>
<g fill="#ec4899"><rect x="430" y="200" width="40" height="20"/><rect x="430" y="178" width="52" height="20"/><rect x="430" y="156" width="60" height="20"/><rect x="430" y="134" width="67" height="20"/><rect x="430" y="112" width="62" height="20"/><rect x="430" y="90" width="48" height="20"/></g>
<text x="150" y="40" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Țară tânără</text>
<text x="150" y="62" font-size="14" text-anchor="middle" fill="#9a3412">(de ex. Niger, Nigeria)</text>
<text x="430" y="40" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Țară îmbătrânită</text>
<text x="430" y="62" font-size="14" text-anchor="middle" fill="#9a3412">(de ex. Italia, Japonia)</text>
<text x="20" y="215" font-size="13" fill="#334155">0-14</text>
<text x="20" y="105" font-size="13" fill="#334155">80+</text>
<text x="85" y="250" font-size="15" fill="#1d4ed8" font-weight="bold">bărbați</text>
<text x="170" y="250" font-size="15" fill="#be185d" font-weight="bold">femei</text>
<text x="365" y="250" font-size="15" fill="#1d4ed8" font-weight="bold">bărbați</text>
<text x="440" y="250" font-size="15" fill="#be185d" font-weight="bold">femei</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#334155">Fiecare bară = o grupă de vârstă. Cu cât este mai lungă, cu atât sunt mai multe persoane.</text>
</svg>`
    },
    {
      type: `quiz`, title: `Mini-test: densitate și natalitate`,
      questions: [
        { type: `mc`, q: `Cum se calculează densitatea populației?`, options: [`locuitori × suprafață`, `locuitori : suprafață`, `suprafață : locuitori`], answer: 1, explain: `Se împarte numărul de locuitori la km² de suprafață.` },
        { type: `num`, q: `O insulă are 5.000 de locuitori și o suprafață de 50 km². Care este densitatea ei (loc./km²)?`, answer: 100, tol: 0, unit: `loc./km²`, explain: `5.000 : 50 = 100 loc./km².` },
        { type: `tf`, q: `În Italia, astăzi se nasc mai mulți copii decât mor persoane.`, answer: false, explain: `E invers: decesele depășesc nașterile, sporul natural este negativ.` }
      ]
    },
    {
      type: `text`, title: `5. Migrațiile`,
      html: `<p>O <b>migrație</b> este deplasarea unor persoane dintr-un loc în altul pentru a locui acolo. Cine pleacă este un <b>emigrant</b> (văzut din țara de plecare), cine ajunge este un <b>imigrant</b> (văzut din țara de sosire): este aceeași persoană!</p>
<ul>
<li><b>Migrații interne</b>: în interiorul aceleiași țări (de ex. din sudul în nordul Italiei în anii ’50–’60).</li>
<li><b>Migrații internaționale</b>: dintr-o țară în alta.</li>
<li><b>Voluntare</b> (muncă, studiu, familie) sau <b>forțate</b> (războaie, persecuții, dezastre: cine fuge poate cere protecție ca <b>refugiat</b>).</li>
</ul>
<p>Geografii vorbesc despre <b>factori de respingere</b> (push: ceea ce împinge să pleci, ca sărăcia sau războiul) și <b>factori de atracție</b> (pull: ceea ce atrage, ca munca și siguranța).</p>
<p><b>Italienii migranți.</b> Între 1876 și 1976, aproximativ <b>24 de milioane</b> de italieni au emigrat spre Americi (Statele Unite, Argentina, Brazilia), Australia și nordul Europei. Astăzi Italia este și o țară de <b>imigrație</b>: aici trăiesc peste <b>5 milioane</b> de cetățeni străini (aproximativ 9% din populație), iar în același timp mulți tineri italieni pleacă să lucreze în străinătate.</p>`
    },
    {
      type: `widget`, title: `Joc: respingere sau atracție?`,
      widget: `classify`,
      caption: `Fiecare motiv îi împinge pe oameni să plece din propria țară (respingere) sau îi atrage spre alta (atracție)?`,
      options: {
        groups: [`⬅️ Factor de respingere (push)`, `➡️ Factor de atracție (pull)`],
        items: [
          [`💣 Război în propria țară`, 0], [`🏜️ Secetă și recolte pierdute`, 0], [`📉 Șomaj`, 0], [`⛓️ Persecuții politice`, 0],
          [`💼 Oferte de muncă`, 1], [`🎓 Universități prestigioase`, 1], [`🏥 Spitale și servicii`, 1], [`👨‍👩‍👧 Rude deja emigrate`, 1]
        ]
      }
    },
    {
      type: `text`, title: `6. Urbanizarea: toți la oraș`,
      html: `<p><b>Urbanizarea</b> este deplasarea populației de la sat la oraș și creșterea orașelor în sine.</p>
<ul>
<li>În 1800, în orașe trăia mai puțin de <b>10%</b> din omenire.</li>
<li>În 1950, aproximativ <b>30%</b>.</li>
<li>Pe la <b>2007</b>, pentru prima dată în istorie, locuitorii orașelor i-au depășit pe cei ai satelor.</li>
</ul>
<p>Cuvintele orașelor:</p>
<ul>
<li><b>Metropolă</b>: oraș mare, centru de servicii și activități.</li>
<li><b>Arie metropolitană</b>: orașul cu toate comunele din jur, legate prin navetiști, drumuri și transporturi (de ex. Milano și centura lui).</li>
<li><b>Megalopolis</b>: mai multe arii metropolitane unite între ele (de ex. Boston–Washington în SUA, Tokyo–Osaka în Japonia).</li>
<li><b>Megaoraș</b>: arie urbană cu mai mult de <b>10 milioane</b> de locuitori. Astăzi sunt peste 30, aproape toate în Asia, Africa și America Latină.</li>
</ul>
<p>Orașele oferă muncă și servicii, dar au și probleme: trafic, poluare, costul locuințelor și, în țările sărace, enorme cartiere de bordeie (<b>slumuri</b>, <i>favelas</i> în Brazilia, <i>bidonvilles</i> în Africa francofonă).</p>`
    },
    {
      type: `3d`, title: `Marile orașe ale lumii pe glob`,
      scene: `globe`,
      caption: `Rotește globul: în portocaliu, câteva dintre cele mai mari megaorașe; în verde, principalele orașe italiene.`,
      options: {
        points: [
          { lat: -6.2, lon: 106.8, label: `Jakarta`, color: `#f97316` },
          { lat: 23.8, lon: 90.4, label: `Dhaka`, color: `#f97316` },
          { lat: 35.7, lon: 139.7, label: `Tokyo`, color: `#f97316` },
          { lat: 28.6, lon: 77.2, label: `New Delhi`, color: `#f97316` },
          { lat: 31.2, lon: 121.5, label: `Shanghai`, color: `#f97316` },
          { lat: 30.0, lon: 31.2, label: `Cairo`, color: `#f97316` },
          { lat: 6.5, lon: 3.4, label: `Lagos`, color: `#f97316` },
          { lat: -23.5, lon: -46.6, label: `São Paulo`, color: `#f97316` },
          { lat: 19.4, lon: -99.1, label: `Ciudad de México`, color: `#f97316` },
          { lat: 40.7, lon: -74.0, label: `New York`, color: `#f97316` },
          { lat: 41.9, lon: 12.5, label: `Roma`, color: `#22c55e` },
          { lat: 45.46, lon: 9.19, label: `Milano`, color: `#22c55e` },
          { lat: 40.85, lon: 14.27, label: `Neapole`, color: `#22c55e` },
          { lat: 45.07, lon: 7.69, label: `Torino`, color: `#22c55e` }
        ]
      }
    },
    {
      type: `example`, title: `Exemplu practic: cele mai populate orașe italiene`,
      html: `<table>
<tr><th>#</th><th>Comuna</th><th>Locuitori (aproximativ)</th></tr>
<tr><td>1</td><td>Roma</td><td>2.750.000</td></tr>
<tr><td>2</td><td>Milano</td><td>1.370.000</td></tr>
<tr><td>3</td><td>Neapole</td><td>910.000</td></tr>
<tr><td>4</td><td>Torino</td><td>850.000</td></tr>
<tr><td>5</td><td>Palermo</td><td>630.000</td></tr>
</table>
<p>Atenție: dacă numărăm <b>aria metropolitană</b>, Milano depășește 3 milioane de persoane, pentru că în fiecare zi sute de mii de <b>navetiști</b> vin din comunele vecine. <b>Lombardia</b> este cea mai populată regiune (aproximativ 10 milioane), <b>Valle d’Aosta</b> cea mai puțin populată (aproximativ 123.000).</p>`
    },
    {
      type: `widget`, title: `Axa timpului: istoria orașelor`,
      widget: `timeline`,
      caption: `De la primele orașe din Mesopotamia până la megaorașele de azi.`,
      options: {
        unit: `ani`,
        events: [
          { year: -3500, label: `Uruk, unul dintre primele orașe`, icon: `🏛️` },
          { year: 100, label: `Roma antică: aproximativ 1 milion de locuitori`, icon: `🏟️` },
          { year: 1800, label: `Beijing și Londra se apropie de un milion`, icon: `🏭` },
          { year: 1804, label: `Lumea ajunge la 1 miliard de oameni`, icon: `🌍` },
          { year: 1950, label: `New York este primul megaoraș (peste 10 milioane)`, icon: `🗽` },
          { year: 2007, label: `Mai multe persoane în orașe decât la sate`, icon: `🏙️` },
          { year: 2022, label: `Lumea depășește 8 miliarde`, icon: `👥` }
        ]
      }
    },
    {
      type: `curiosity`, title: `Ai știut că… în Principatul Monaco nu există zonă rurală?`,
      html: `<p>Monaco are doar <b>2 km²</b> (mai puțin decât un cartier al Romei!) și în el trăiesc aproximativ <b>38.000</b> de persoane: densitatea depășește <b>18.000 loc./km²</b>. Ca să aibă mai mult spațiu, Principatul a construit cartiere noi <b>smulgând pământ mării</b>, precum cartierul Fontvieille și noul Mareterra.</p>`
    },
    {
      type: `curiosity`, title: `Ai știut că… cele mai mari orașe își schimbă clasamentul?`,
      html: `<p>Zeci de ani, cel mai mare oraș din lume a fost <b>Tokyo</b>. Dar clasamentul depinde de <b>locul unde se pune granița</b> orașului! Cu o nouă metodă de calcul, în 2025 ONU a indicat pe primul loc <b>Jakarta</b> (Indonezia, peste 40 de milioane), urmată de <b>Dhaka</b> (Bangladesh) și Tokyo. Iar Jakarta se scufundă cu câțiva centimetri pe an, atât de mult încât Indonezia construiește o nouă capitală, <b>Nusantara</b>, pe insula Borneo.</p>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Dacă densitatea, sporul natural și urbanizarea ți se par doar numere, încearcă aceste căi.`,
      tabs: [
        {
          label: `🚌 Autobuzul`,
          html: `<p>Imaginează-ți un <b>autobuz</b> de aceeași mărime mereu:</p>
<ul>
<li>la 6 dimineața sunt 5 pasageri: <b>densitate mică</b>, te așezi unde vrei;</li>
<li>la 8, ora școlii, sunt 90: <b>densitate foarte mare</b>, ești strivit!</li>
</ul>
<p><b>Sporul</b> funcționează ca stațiile: la fiecare stație cineva urcă (nașteri, imigranți) și cineva coboară (decese, emigranți). Dacă coboară mai multe persoane decât urcă, autobuzul se golește.</p>`
        },
        {
          label: `🧮 Cu cubulețe`,
          html: `<p>O suprafață de <b>4 × 5 = 20 de pătrățele</b> reprezintă 20 km². Fiecare cubuleț înseamnă 10 persoane. Schimbă numerele cu cursoarele: cu înălțimea 1, densitatea este 10 loc./km²; dacă așezi cubulețele unele peste altele (blocuri!), aceeași suprafață conține mult mai multe persoane. Exact asta fac orașele: <b>cresc în înălțime</b> cu zgârie-norii.</p>`,
          scene: `blocks`,
          options: { mode: `volume`, a: 4, b: 5, c: 3 }
        },
        {
          label: `🇯🇵🇳🇬 Două țări comparate`,
          html: `<p>Să comparăm două țări cu aproape aceeași populație în anul 2000 și cu destine opuse:</p>
<ul>
<li>🇯🇵 <b>Japonia</b>: foarte puține nașteri, populația <b>scade</b> din aproximativ 2010; aproape 3 persoane din 10 au peste 65 de ani. Se vând mai multe scutece pentru vârstnici decât pentru nou-născuți!</li>
<li>🇳🇬 <b>Nigeria</b>: multe nașteri, vârsta medie sub <b>20 de ani</b>; populația crește foarte repede, iar Lagos este unul dintre orașele care cresc cel mai mult din lume.</li>
</ul>
<p>Italia seamănă foarte mult cu Japonia: de aceea se vorbește despre <b>iarnă demografică</b>.</p>`
        },
        {
          label: `🌐 Pe glob`,
          html: `<p>Privește lumea așa cum ar vedea-o un astronaut noaptea: luminile orașelor arată unde trăim. Iată zonele cele mai populate (Asia de sud și de est, Europa, coastele americane) și câteva locuri aproape goale (Sahara, Siberia, Amazonia, interiorul Australiei).</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 25, lon: 80, label: `Valea Gangelui: foarte densă`, color: `#ef4444` },
              { lat: 32, lon: 115, label: `China de est: foarte densă`, color: `#ef4444` },
              { lat: 50, lon: 6, label: `Europa centrală: densă`, color: `#f97316` },
              { lat: 23, lon: 10, label: `Sahara: aproape goală`, color: `#22c55e` },
              { lat: 65, lon: 110, label: `Siberia: aproape goală`, color: `#22c55e` },
              { lat: -25, lon: 130, label: `Interiorul Australiei: aproape gol`, color: `#22c55e` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Hartă: cum se schimbă o populație`,
      nodes: [
        { id: `pop`, label: `Populație`, x: 50, y: 8, color: `#0ea5e9`, html: `Ansamblul persoanelor care trăiesc pe un teritoriu.`, why: `Se studiază cu ajutorul <b>demografiei</b>. Primul care a folosit statistica pentru a studia nașterile și decesele a fost englezul <b>John Graunt</b>, în 1662, analizând registrele deceselor din Londra. În Italia, primul recensământ național este din <b>1861</b>, imediat după Unitate.` },
        { id: `dens`, label: `Densitate`, x: 15, y: 32, color: `#22c55e`, html: `Locuitori : km². Spune cât de „aglomerat” este un teritoriu.`, why: `Numărul de locuitori singur nu permite compararea țărilor de mărimi diferite: împărțind la suprafață obținem o valoare „pe unitate”, ca viteza (km pe oră) sau prețul pe kg.` },
        { id: `fatt`, label: `Factori fizici și umani`, x: 15, y: 62, color: `#16a34a`, html: `Climă, apă, câmpii, coaste, muncă, transporturi.`, why: `Primele civilizații au apărut de-a lungul râurilor (Nil, Tigru și Eufrat, Indus, Fluviul Galben) pentru că apa permitea agricultura. Orașele de azi se află adesea în același loc de milenii.` },
        { id: `nat`, label: `Mișcare naturală`, x: 50, y: 35, color: `#ec4899`, html: `Născuți − decedați = spor natural.`, why: `Timp de milenii, nașterile și decesele s-au echilibrat aproape. Odată cu medicina modernă (vaccinuri, antibiotice, igienă), mortalitatea a scăzut înaintea natalității: de aceea populația a explodat. Apoi, odată cu educația și munca femeilor, au scăzut și nașterile: este <b>tranziția demografică</b>.` },
        { id: `mig`, label: `Migrații`, x: 83, y: 35, color: `#f97316`, html: `Deplasări de persoane: sold migratoriu = imigranți − emigranți.`, why: `Ființa umană a migrat dintotdeauna: <i>Homo sapiens</i> a plecat din Africa acum mai bine de 60.000 de ani. Cauzele se explică prin factorii de <b>respingere</b> și de <b>atracție</b>, un model propus de geograful <b>Ernst Ravenstein</b> în 1885.` },
        { id: `eta`, label: `Structura pe vârste`, x: 50, y: 65, color: `#a855f7`, html: `Piramida vârstelor: tineri, adulți, vârstnici.`, why: `Depinde de nașteri și de durata vieții. Puține nașteri și o viață lungă dau o piramidă „în formă de titirez” sau „de urnă”, ca în Italia: mai puțini tineri lucrători și mai mulți pensionari.` },
        { id: `urb`, label: `Urbanizare`, x: 83, y: 65, color: `#ef4444`, html: `Tot mai multe persoane trăiesc în orașe.`, why: `Odată cu <b>Revoluția industrială</b> (din 1750 în Anglia), munca s-a mutat de pe câmp în fabrici, care erau în orașe. Astăzi orașul atrage prin servicii, universități și muncă în sectorul terțiar.` },
        { id: `mega`, label: `Metropole și megaorașe`, x: 83, y: 92, color: `#b91c1c`, html: `Arii urbane enorme, peste 10 milioane de locuitori.`, why: `Când un oraș crește, se „sudează” cu comunele vecine și apare o arie metropolitană; dacă mai multe arii se unesc, se vorbește despre <b>megalopolis</b>, termen făcut celebru de geograful francez <b>Jean Gottmann</b> în 1961.` }
      ],
      edges: [
        [`pop`, `dens`, `se măsoară cu`], [`dens`, `fatt`, `depinde de`], [`pop`, `nat`, `se schimbă prin`], [`pop`, `mig`, `se schimbă prin`],
        [`nat`, `eta`, `formează`], [`mig`, `urb`, `alimentează`], [`urb`, `mega`, `creează`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: migrații și orașe`,
      questions: [
        { type: `mc`, q: `Un oraș cu mai mult de 10 milioane de locuitori se numește…`, options: [`megaoraș`, `comună`, `sat`], answer: 0, explain: `Megaoraș: peste 10 milioane de locuitori.` },
        { type: `tf`, q: `Emigrantul și imigrantul pot fi aceeași persoană.`, answer: true, explain: `Depinde de punctul de vedere: emigrant pentru țara pe care o părăsește, imigrant pentru cea în care ajunge.` },
        { type: `mc`, q: `În jurul cărui an a depășit populația urbană mondială populația rurală?`, options: [`1900`, `1950`, `2007`], answer: 2, explain: `În jurul anilor 2007–2008, pentru prima dată în istorie.` }
      ]
    }
  ],
  glossary: [
    { t: `Demografie`, d: `Știință care studiază populația și schimbările ei.` },
    { t: `Recensământ`, d: `Numărarea tuturor locuitorilor unei țări; în Italia este realizat de ISTAT.` },
    { t: `Densitatea populației`, d: `Numărul mediu de locuitori pe km²: locuitori : suprafață.` },
    { t: `Rata natalității / mortalității`, d: `Născuți / decedați într-un an la 1000 de locuitori.` },
    { t: `Spor natural`, d: `Diferența dintre născuți și decedați.` },
    { t: `Sold migratoriu`, d: `Diferența dintre cei care sosesc (imigranți) și cei care pleacă (emigranți).` },
    { t: `Speranța de viață`, d: `Numărul mediu de ani pe care o persoană se poate aștepta să-i trăiască de la naștere.` },
    { t: `Piramida vârstelor`, d: `Grafic care arată câte persoane sunt în fiecare grupă de vârstă, bărbați și femei.` },
    { t: `Migrație`, d: `Deplasarea unor persoane dintr-un loc în altul pentru a locui acolo.` },
    { t: `Refugiat`, d: `Persoană forțată să fugă din propria țară din cauza războiului sau a persecuției, care primește protecție internațională.` },
    { t: `Urbanizare`, d: `Creșterea populației care trăiește în orașe.` },
    { t: `Arie metropolitană`, d: `Oraș mare împreună cu comunele vecine legate de el.` },
    { t: `Megaoraș`, d: `Arie urbană cu mai mult de 10 milioane de locuitori.` },
    { t: `Navetist`, d: `Cel care se deplasează zilnic dintr-o localitate în alta pentru muncă sau studiu.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Câți locuitori are aproximativ Pământul astăzi?`, options: [`800 de milioane`, `8 miliarde`, `80 de miliarde`], answer: 1, explain: `Am depășit 8 miliarde în 2022.` },
      { type: `num`, q: `O regiune are 2.000.000 de locuitori și o suprafață de 10.000 km². Care este densitatea?`, answer: 200, tol: 0, unit: `loc./km²`, explain: `2.000.000 : 10.000 = 200 loc./km².` },
      { type: `mc`, q: `Care este aproximativ densitatea Italiei?`, options: [`20 loc./km²`, `195 loc./km²`, `1.200 loc./km²`], answer: 1, explain: `59 de milioane de locuitori pe 302.000 km² ≈ 195 loc./km².` },
      { type: `tf`, q: `Zonele de munte și deșerturile au de obicei o densitate mare.`, answer: false, explain: `Clima și terenul dificile fac ca aceste locuri să fie puțin locuite: densitate mică.` },
      { type: `mc`, q: `Sporul natural este…`, options: [`imigranți − emigranți`, `născuți − decedați`, `locuitori : suprafață`], answer: 1, explain: `Spor natural = născuți − decedați.` },
      { type: `num`, q: `Într-o localitate se nasc 30 de copii și mor 45 de persoane într-un an. Care este sporul natural?`, answer: -15, tol: 0, explain: `30 − 45 = −15: sporul este negativ.` },
      { type: `mc`, q: `Care dintre acestea este un factor de RESPINGERE?`, options: [`Un război`, `O ofertă de muncă în străinătate`, `O universitate bună`], answer: 0, explain: `Războiul îi împinge pe oameni să plece; celelalte două atrag.` },
      { type: `text`, q: `Cum se numește o arie urbană cu mai mult de 10 milioane de locuitori?`, answer: [`megaoraș`, `megaoras`, `un megaoraș`], explain: `Megaoraș, ca Tokyo, Jakarta sau Dhaka.` },
      { type: `mc`, q: `Care este cea mai populată comună din Italia?`, options: [`Milano`, `Roma`, `Neapole`], answer: 1, explain: `Roma, cu aproximativ 2,75 milioane de locuitori.` },
      { type: `tf`, q: `Între secolul al XIX-lea și al XX-lea, milioane de italieni au emigrat spre Americi.`, answer: true, explain: `Aproximativ 24 de milioane între 1876 și 1976.` },
      { type: `order`, q: `Pune în ordine de la densitatea cea mai MICĂ la cea mai MARE.`, items: [`Mongolia`, `Italia`, `Bangladesh`, `Principatul Monaco`], explain: `Mongolia ~2, Italia ~195, Bangladesh ~1.200, Monaco peste 18.000 loc./km².` },
      { type: `mc`, q: `De ce îmbătrânește populația Italiei?`, options: [`Puține nașteri și o viață tot mai lungă`, `Multe nașteri`, `Nimeni nu emigrează`], answer: 0, explain: `Aproximativ 1,2 copii pe femeie și o speranță de viață de peste 83 de ani.` }
    ],
    gen: [[`percent`, 2]]
  }
});
