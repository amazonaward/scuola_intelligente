TOPIC('ro', {
  id: `m3-geo-oceania`,
  title: `Oceania și ținuturile polare`,
  intro: `La „marginile” lumii: <b>Oceania</b>, un continent format dintr-o insulă-continent (Australia) și din mii de insule risipite în Pacific, și <b>ținuturile polare</b>, <b>Arctica</b> și <b>Antarctica</b>, cele mai reci locuri de pe planetă. Sunt medii extreme, dar esențiale pentru a înțelege clima Pământului.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Oceania: un continent de insule`,
      html: `<ul>
<li><b>Suprafața</b>: aproximativ 8,5 milioane de km², cel mai mic continent.</li>
<li><b>Locuitori</b>: aproximativ 46 de milioane, cel mai puțin populat continent locuit.</li>
<li><b>State independente</b>: 14, printre care <b>Australia</b>, <b>Noua Zeelandă</b>, <b>Papua Noua Guinee</b>, <b>Fiji</b>, <b>Samoa</b>, <b>Tonga</b>, <b>Kiribati</b>, <b>Tuvalu</b>.</li>
</ul>
<p>Insulele din Pacific se împart în trei mari grupuri:</p>
<table>
<tr><th>Regiunea</th><th>Semnificația numelui</th><th>Exemple</th></tr>
<tr><td><b>Melanezia</b></td><td>„insulele negre”</td><td>Papua Noua Guinee, Fiji, Insulele Solomon</td></tr>
<tr><td><b>Micronezia</b></td><td>„insulele mici”</td><td>Palau, Insulele Marshall, Kiribati (în parte)</td></tr>
<tr><td><b>Polinezia</b></td><td>„multe insule”</td><td>Samoa, Tonga, Tahiti, Hawaii, Noua Zeelandă</td></tr>
</table>
<p>Multe insule din Pacific sunt <b>vulcanice</b> (înalte, muntoase) sau <b>atoli</b>: inele de <b>corali</b> care înconjoară o lagună, înalte de doar câțiva metri deasupra mării.</p>`
    },
    {
      type: `text`,
      title: `2. Australia`,
      html: `<p><b>Capitala</b>: <b>Canberra</b> (nu Sydney!). <b>Locuitori</b>: aproximativ 27 de milioane. <b>Suprafața</b>: aproximativ 7,7 milioane de km² (aproximativ de 25 de ori Italia). <b>Limba</b>: engleza. <b>Moneda</b>: dolarul australian.</p>
<p><b>Teritoriul</b>: este cel mai <b>plat</b> și cel mai <b>uscat</b> continent locuit. Aproximativ 70% este arid sau semiarid: este <b>outback</b>-ul, interiorul deșertic roșu. În centru se află <b>Uluru</b> (Ayers Rock), un monolit uriaș de gresie sacru pentru aborigeni. De-a lungul coastei de est se întinde <b>Marele Lanț Despărțitor</b>.</p>
<p>De-a lungul coastei de nord-est se află <b>Marea Barieră de Corali</b>, cel mai mare sistem de recife de corali din lume (aproximativ 2300 km), vizibil chiar și din spațiu.</p>
<p><b>Populația</b>: peste 85% trăiește în orașe, aproape toate pe coastă, mai ales în Sud-Est (<b>Sydney</b>, <b>Melbourne</b>, Brisbane) și la Perth. Primii locuitori sunt <b>aborigenii</b> și locuitorii insulelor din Strâmtoarea Torres, sosiți cu cel puțin <b>50.000–65.000 de ani în urmă</b>: este una dintre cele mai vechi culturi încă vii. Din <b>1788</b> au sosit coloniștii britanici (la început mulți erau deținuți deportați).</p>
<p><b>Economia</b>: foarte bogată în resurse minerale (fier, cărbune, aur, litiu), mare producătoare de lână, grâu și carne; turism și servicii. Este printre țările cu cel mai ridicat IDU din lume.</p>`
    },
    {
      type: `text`,
      title: `3. Noua Zeelandă`,
      html: `<p><b>Capitala</b>: <b>Wellington</b>. <b>Locuitori</b>: aproximativ 5,3 milioane. Două insule principale (<b>Insula de Nord</b> și <b>Insula de Sud</b>), foarte muntoase și vulcanice, cu ghețari, fiorduri, gheizere.</p>
<p>A fost unul dintre ultimele mari pământuri locuite de om: <b>maorii</b> au sosit din Polinezia cu canoe în jurul anilor <b>1250–1300</b>. Limba maori este limbă oficială alături de engleză.</p>
<p>În <b>1893</b>, Noua Zeelandă a fost <b>prima țară din lume</b> care a acordat dreptul de vot femeilor. Oile sunt mult mai numeroase decât locuitorii (aproximativ 24 de milioane de oi). Simbolul național este <b>kiwi</b>, o pasăre care nu zboară.</p>`
    },
    {
      type: `3d`,
      title: `Peisajul Oceaniei în 3D`,
      scene: `terrain`,
      options: {
        features: {
          plain: { label: `Outback`, html: `Interiorul arid al Australiei: deșerturi roșii și stepe, aproape nelocuite. Fermele („stațiile”) pot fi mai mari decât provincii italiene întregi.` },
          mountain: { label: `Marele Lanț Despărțitor`, html: `Munți vechi de-a lungul coastei de est a Australiei, care separă coasta ploioasă de interiorul uscat. Cel mai înalt vârf din Australia continentală este Kosciuszko (2228 m).` },
          peak: { label: `Aoraki / Muntele Cook`, html: `3724 m, cel mai înalt vârf din Noua Zeelandă, în Alpii de Sud. „Aoraki” este numele maori.` },
          glacier: { label: `Ghețarii neozeelandezi`, html: `În Insula de Sud, ghețari precum Fox și Franz Josef coboară aproape până la pădurea tropicală ploioasă.` },
          volcano: { label: `Insule vulcanice`, html: `Multe insule din Pacific sunt vârfuri de vulcani submarini. În Noua Zeelandă, Ruapehu este un vulcan activ.` },
          archipelago: { label: `Arhipelaguri din Pacific`, html: `Mii de insule grupate în Melanezia, Micronezia și Polinezia.` },
          lagoon: { label: `Atol și lagună`, html: `Un atol este un inel de corali în jurul unei lagune. Se formează când o insulă vulcanică înconjurată de un recif de corali se scufundă încet: explicația a dat-o Charles Darwin în 1842.` },
          coast: { label: `Marea Barieră de Corali`, html: `Aproximativ 2300 km de recife și insule coraliere în largul statului Queensland. A fost declarată Patrimoniu Mondial UNESCO în 1981.` },
          river: { label: `Murray-Darling`, html: `Cel mai lung sistem fluvial al Australiei, în Sud-Est: esențial pentru agricultură într-un continent atât de uscat.` },
          lake: { label: `Lacul Eyre`, html: `Un lac sărat în deșertul australian, aproape mereu uscat: se umple cu apă doar de foarte puține ori într-un secol.` }
        }
      },
      caption: `Rotește peisajul și atinge părțile: de la outback-ul australian până la ghețarii Noii Zeelande.`
    },
    {
      type: `quiz`,
      title: `Mini-test: Oceania`,
      questions: [
        { type: `mc`, q: `Care este capitala Australiei?`, options: [`Sydney`, `Melbourne`, `Canberra`], answer: 2, explain: `Canberra, construită special ca capitală (compromis între Sydney și Melbourne).` },
        { type: `tf`, q: `Noua Zeelandă a fost prima țară care a acordat femeilor dreptul de vot.`, answer: true, explain: `În 1893.` },
        { type: `text`, q: `Cum se numește un inel de corali care înconjoară o lagună?`, answer: [`atol`, `un atol`, `atolul`], explain: `Un atol.` }
      ]
    },
    {
      type: `text`,
      title: `4. Ținuturile polare: Arctica și Antarctica`,
      html: `<p><b>Ținuturile polare</b> se află dincolo de cercurile polare (aproximativ 66,5° N și S). Acolo Soarele este mereu jos: vara nu apune niciodată timp de săptămâni (<b>ziua polară</b>, „soarele de la miezul nopții”), iar iarna nu răsare (<b>noaptea polară</b>).</p>
<table>
<tr><th></th><th>🧊 Arctica (Polul Nord)</th><th>🐧 Antarctica (Polul Sud)</th></tr>
<tr><td><b>Ce este</b></td><td>un <b>ocean</b> (Oceanul Înghețat de Nord) acoperit cu gheață marină, înconjurat de uscat</td><td>un <b>continent</b> acoperit de o calotă de gheață</td></tr>
<tr><td><b>Grosimea gheții</b></td><td>banchiză de câțiva metri</td><td>în medie aproximativ <b>2 km</b>, până la aproape 5 km</td></tr>
<tr><td><b>Locuitori</b></td><td>aproximativ 4 milioane (inuiți, sami, nenți și alte popoare, orașe rusești și scandinave)</td><td>niciun locuitor stabil; de la aproximativ 1000 (iarna) la 5000 (vara) de oameni de știință</td></tr>
<tr><td><b>Animale-simbol</b></td><td>urs polar, morsă, ren</td><td>pinguin imperial, focă Weddell, krill</td></tr>
<tr><td><b>Cui aparține</b></td><td>statelor vecine (Canada, SUA, Rusia, Danemarca/Groenlanda, Norvegia…)</td><td>nimănui: <b>Tratatul Antarctic</b> (1959)</td></tr>
</table>
<p><b>Antarctica</b> este cel mai <b>rece</b> continent (în 1983, la baza rusă Vostok s-au măsurat <b>−89,2 °C</b>), cel mai <b>vântos</b>, cel mai <b>înalt</b> în medie și, surpriză, cel mai <b>uscat</b>: în interior ninge foarte puțin, atât de puțin încât este considerat un deșert. Conține aproximativ <b>70% din apa dulce</b> a planetei, înghețată: dacă s-ar topi toată, nivelul mării ar crește cu aproximativ <b>58 de metri</b>.</p>`
    },
    {
      type: `svg`,
      title: `De ce este atât de frig la poli`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#0f172a"/>
<circle cx="380" cy="160" r="120" fill="#38bdf8" stroke="#e0f2fe" stroke-width="3"/>
<ellipse cx="380" cy="48" rx="55" ry="14" fill="#f8fafc"/>
<ellipse cx="380" cy="272" rx="55" ry="14" fill="#f8fafc"/>
<path d="M300 110 Q380 140 460 110" stroke="#16a34a" stroke-width="20" fill="none"/>
<line x1="260" y1="160" x2="500" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="60" cy="160" r="40" fill="#facc15"/>
<text x="60" y="220" font-size="16" text-anchor="middle" fill="#fde047" font-weight="bold">Soare</text>
<path d="M105 160 L255 160" stroke="#fde047" stroke-width="5" marker-end="url(#s)"/>
<path d="M105 120 L270 75" stroke="#fde047" stroke-width="3" marker-end="url(#s)"/>
<path d="M105 200 L270 245" stroke="#fde047" stroke-width="3" marker-end="url(#s)"/>
<defs><marker id="s" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#fde047"/></marker></defs>
<text x="520" y="40" font-size="15" fill="#e0f2fe" font-weight="bold">Polul Nord</text>
<text x="520" y="290" font-size="15" fill="#e0f2fe" font-weight="bold">Polul Sud</text>
<text x="510" y="166" font-size="15" fill="#fecaca">Ecuator</text>
<text x="300" y="312" font-size="14" fill="#e0f2fe" text-anchor="middle">La poli razele ajung oblic; gheața albă reflectă până la 80–90% din lumină</text>
</svg>`,
      caption: `Raze înclinate + gheață albă care reflectă lumina (efectul de albedo) + noapte polară lungă = cel mai extrem frig de pe Pământ.`
    },
    {
      type: `text`,
      title: `5. Explorări și știință`,
      html: `<p><b>Polul Sud</b> a fost atins pentru prima dată pe <b>14 decembrie 1911</b> de norvegianul <b>Roald Amundsen</b>, cu sănii și câini. Britanicul <b>Robert Falcon Scott</b> a ajuns o lună mai târziu și a murit împreună cu tovarășii săi în călătoria de întoarcere.</p>
<p><b>Polul Nord</b> a fost survolat în <b>1926</b> de dirijabilul <b>Norge</b>, proiectat și pilotat de italianul <b>Umberto Nobile</b>, cu Amundsen la bord: este considerat primul zbor sigur deasupra Polului Nord. În 1928 Nobile s-a întors cu dirijabilul <b>Italia</b>, care însă s-a prăbușit pe gheață (celebrul „cort roșu”).</p>
<p>Astăzi Antarctica este un mare <b>laborator științific</b>. <b>Tratatul Antarctic</b> (1959, în vigoare din 1961) stabilește că continentul poate fi folosit doar în scopuri <b>pașnice și științifice</b>; din 1991 Protocolul de la Madrid interzice activitățile miniere. Și <b>Italia</b> are două baze: <b>Stația Mario Zucchelli</b> (din 1986) și, împreună cu Franța, baza <b>Concordia</b> de pe platoul antarctic. Din gheața antarctică, oamenii de știință au extras <b>carote de gheață</b> care conțin bule de aer vechi de până la aproximativ <b>800.000 de ani</b>: o arhivă a climei din trecut.</p>`
    },
    {
      type: `text`,
      title: `6. Polii și schimbările climatice`,
      html: `<p>Regiunile polare sunt cele mai afectate de încălzirea globală: <b>Arctica</b> se încălzește de aproximativ <b>patru ori mai repede</b> decât media planetei.</p>
<ul>
<li>Gheața marină arctică de vară s-a redus cu aproximativ <b>40%</b> față de anii '80: urșii polari, care vânează foci de pe gheață, au tot mai puțin spațiu.</li>
<li>Topirea ghețarilor din <b>Groenlanda</b> și <b>Antarctica</b> face să crească nivelul mării. Insulele joase din Pacific, precum <b>Tuvalu</b> și <b>Kiribati</b>, riscă să devină nelocuibile: în 2023 Australia a semnat cu Tuvalu un acord pentru a-i primi locuitorii ca „migranți climatici”.</li>
<li><b>Permafrostul</b> (solul înghețat) din Siberia și Canada se topește și eliberează gaze cu efect de seră.</li>
<li>Apa mai caldă și mai acidă face ca „să albească” și să moară coralii din Marea Barieră.</li>
</ul>
<p>Există și un efect în lanț: mai puțină gheață albă → mai puțină lumină reflectată → mai multă căldură absorbită de marea întunecată → și mai puțină gheață. Oamenii de știință îi spun <b>reacție în buclă</b> (feedback) a albedoului.</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: Crăciun vara`,
      html: `<p>În Australia și în Noua Zeelandă anotimpurile sunt <b>inversate</b> față de Italia, pentru că se află în emisfera sudică. Când la noi este iarnă, la ei este vară.</p>
<p>Așa, la <b>Sydney</b>, pe <b>25 decembrie</b> se sărbătorește Crăciunul la 30 °C, poate cu un grătar pe plajă, iar Moș Crăciun uneori vine... în costum de surf! În iulie, în schimb, în Australia se schiază pe munții din Sud-Est.</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: de ce sunt animalele australiene atât de ciudate?`,
      html: `<p>Australia s-a despărțit de celelalte continente acum aproximativ <b>35–45 de milioane de ani</b> și a rămas izolată. Animalele au evoluat pe cont propriu: de aceea există specii care nu se găsesc nicăieri altundeva.</p>
<ul>
<li>🦘 <b>marsupialele</b> (cangur, koala, vombat), care își cresc puii într-un marsupiu;</li>
<li>🦆 <b>monotremele</b> (ornitorinc, echidna): mamifere care <b>depun ouă</b>!</li>
</ul>
<p>Și <b>dingo</b>, câinele sălbatic, a fost adus de om; iepurii, aduși de europeni în secolul al XIX-lea, s-au înmulțit atât de mult încât au devenit un dezastru pentru mediu. Este un exemplu de <b>specie invazivă</b>.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… polinezienii navigau fără busolă?`,
      html: `<p>Acum mai bine de 1000 de ani, navigatorii polinezieni traversau mii de km de ocean pe mari <b>canoe cu dublu corp</b>, fără instrumente. Se orientau după <b>stele</b>, forma <b>valurilor</b>, zborul <b>păsărilor</b> și culoarea norilor (deasupra insulelor norii sunt diferiți). Așa au colonizat un triunghi de ocean între Hawaii, Noua Zeelandă și Insula Paștelui, cu laturi lungi de aproximativ 7000–8000 km: așa-numitul <b>triunghi polinezian</b>.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… în Antarctica există un lac sub 4 km de gheață?`,
      html: `<p>Sub baza rusă Vostok, la aproximativ <b>4 km adâncime</b> sub gheață, se află <b>Lacul Vostok</b>: un lac uriaș de apă lichidă (aproximativ 12.500 km², de peste 30 de ori lacul Garda!), rămas izolat de restul lumii timp de milioane de ani. Oamenii de știință îl studiază și pentru a înțelege cum ar putea exista viață sub gheața lunilor lui Jupiter și Saturn, precum Europa și Enceladus.</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege Oceania și polii`,
      intro: `Locuri foarte îndepărtate: încercăm să le apropiem cu ajutorul globului, al unei analogii și al unui joc.`,
      tabs: [
        {
          label: `🌍 Pe glob`,
          html: `<p>Rotește globul de sus și de jos: privește Polul Nord (un ocean înconjurat de uscat) și Polul Sud (un uscat înconjurat de ocean). Apoi urmărește călătoria polinezienilor.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: -35.28, lon: 149.13, label: `Canberra`, color: `#2563eb` },
              { lat: -33.87, lon: 151.21, label: `Sydney`, color: `#2563eb` },
              { lat: -25.34, lon: 131.04, label: `Uluru`, color: `#dc2626` },
              { lat: -41.29, lon: 174.78, label: `Wellington`, color: `#16a34a` },
              { lat: 21.3, lon: -157.86, label: `Hawaii`, color: `#f59e0b` },
              { lat: -27.11, lon: -109.35, label: `Insula Paștelui`, color: `#f59e0b` },
              { lat: -8.52, lon: 179.2, label: `Tuvalu`, color: `#0ea5e9` },
              { lat: -90, lon: 0, label: `Polul Sud`, color: `#a855f7` },
              { lat: 90, lon: 0, label: `Polul Nord`, color: `#a855f7` },
              { lat: -74.69, lon: 164.11, label: `Baza Mario Zucchelli (Italia)`, color: `#22c55e` }
            ],
            routes: [{ points: [4, 3, 5, 4], color: `#f97316` }]
          }
        },
        {
          label: `🍦 Analogie: cornetul de înghețată`,
          html: `<p>Ca să ții minte diferența dintre cei doi poli:</p>
<ul>
<li><b>Arctica</b> este ca un <b>pahar cu apă în care plutește un cub de gheață</b>: dacă gheața marină se topește, nivelul apei din pahar nu se schimbă (dar planeta se încălzește mai tare, pentru că dispare suprafața albă).</li>
<li><b>Antarctica</b> este ca o <b>cupă de înghețată pusă pe o piatră</b>: dacă se topește, înghețata se scurge în farfurie și nivelul crește! Gheața aflată pe uscat (Antarctica și Groenlanda), topindu-se, face să crească marea.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<path d="M60 60 L80 190 L200 190 L220 60" fill="none" stroke="#334155" stroke-width="4"/>
<rect x="72" y="110" width="137" height="80" fill="#7dd3fc"/>
<rect x="115" y="95" width="45" height="35" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
<text x="140" y="30" font-size="16" text-anchor="middle" font-weight="bold" fill="#0c4a6e">Arctica: gheață care plutește</text>
<text x="140" y="212" font-size="14" text-anchor="middle" fill="#0c4a6e">nivelul nu se schimbă</text>
<rect x="360" y="170" width="200" height="20" fill="#7dd3fc"/>
<path d="M410 170 L430 120 L490 120 L510 170 Z" fill="#78716c"/>
<ellipse cx="460" cy="112" rx="40" ry="20" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
<text x="460" y="30" font-size="16" text-anchor="middle" font-weight="bold" fill="#0c4a6e">Antarctica: gheață pe stâncă</text>
<text x="460" y="212" font-size="14" text-anchor="middle" fill="#0c4a6e">dacă se topește, marea crește</text>
</svg>`
        },
        {
          label: `🧩 Joc: Polul Nord sau Polul Sud?`,
          html: `<p>Pune fiecare element la polul potrivit.</p>`,
          widget: `classify`,
          options: {
            groups: [`🧊 Arctica (Nord)`, `🐧 Antarctica (Sud)`],
            items: [[`Urs polar`, 0], [`Pinguin imperial`, 1], [`Poporul inuit`, 0], [`Tratatul din 1959`, 1], [`Ocean acoperit de banchiză`, 0], [`Continent acoperit de 2 km de gheață`, 1], [`Dirijabilul Norge al lui Nobile`, 0], [`Amundsen 1911`, 1], [`Reni și sami`, 0], [`Baza Concordia`, 1]]
          }
        },
        {
          label: `🃏 Flashcard-uri: cuvinte-cheie`,
          html: `<p>Întoarce cărțile ca să repeți cuvintele mai grele.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `Atol`, back: `Inel de corali care înconjoară o lagună` },
              { front: `Outback`, back: `Interiorul arid și aproape nelocuit al Australiei` },
              { front: `Banchiză`, back: `Gheață care se formează prin înghețarea apei mării` },
              { front: `Calotă glaciară`, back: `Strat uriaș de gheață deasupra unui continent (Antarctica, Groenlanda)` },
              { front: `Albedo`, back: `Cât de multă lumină reflectă o suprafață: gheața mult, marea puțin` },
              { front: `Permafrost`, back: `Sol mereu înghețat din regiunile reci` },
              { front: `Marsupial`, back: `Mamifer care își crește puii într-un marsupiu, ca cangurul` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta Oceaniei și a ținuturilor polare`,
      nodes: [
        { id: `isolamento`, label: `Izolare`, x: 20, y: 8, color: `#64748b`, html: `Oceania este departe de celelalte continente.`, why: `Australia s-a desprins de Antarctica acum aproximativ 45–35 de milioane de ani și a călătorit singură spre nord; insulele din Pacific s-au născut ca vulcani în mijlocul oceanului.` },
        { id: `fauna`, label: `Faună unică`, x: 12, y: 32, color: `#f97316`, html: `Marsupiale (cangur, koala), monotreme (ornitorinc), păsări care nu zboară (kiwi, emu).`, why: `Izolarea a permis animalelor să evolueze separat, așa cum a observat deja Charles Darwin când a vizitat Australia în 1836, în călătoria navei Beagle.` },
        { id: `australia`, label: `Australia`, x: 35, y: 30, color: `#dc2626`, html: `Insulă-continent aridă, populație pe coaste, mari resurse.`, why: `Se află sub centura deșerturilor Tropicului Capricornului, unde coboară aerul uscat: de aceea interiorul este un deșert, iar orașele sunt pe coastele mai ploioase.` },
        { id: `popoli`, label: `Popoarele din Pacific`, x: 35, y: 55, color: `#a855f7`, html: `Aborigeni, maori, polinezieni.`, why: `Aborigenii au ajuns în Australia din Asia cu cel puțin 50.000 de ani în urmă, când marea era mai joasă; polinezienii au colonizat insulele cu canoe între aproximativ 1000 î.Hr. și 1300 d.Hr.` },
        { id: `latitudine`, label: `Latitudini înalte`, x: 75, y: 8, color: `#0ea5e9`, html: `Dincolo de cercurile polare (aproximativ 66,5°).`, why: `Din cauza înclinării axei Pământului (aproximativ 23,5°), dincolo de cercurile polare există cel puțin o zi pe an în care Soarele nu apune și una în care nu răsare.` },
        { id: `artide`, label: `Arctica`, x: 62, y: 32, color: `#38bdf8`, html: `Ocean înghețat înconjurat de uscat locuit.`, why: `Polul Nord se află în mijlocul Oceanului Înghețat de Nord: gheața este banchiză care plutește, groasă de câțiva metri.` },
        { id: `antartide`, label: `Antarctica`, x: 88, y: 32, color: `#6366f1`, html: `Continent înghețat acoperit de o calotă groasă în medie de 2 km.`, why: `Este izolată de Curentul circumpolar antarctic, care înconjoară continentul și împiedică apa caldă să se apropie: de aceea a înghețat acum aproximativ 34 de milioane de ani.` },
        { id: `trattato`, label: `Tratatul Antarctic`, x: 88, y: 58, color: `#22c55e`, html: `Continent pentru pace și știință (1959).`, why: `În plin Război Rece, după Anul Geofizic Internațional (1957–1958), 12 țări, printre care SUA și URSS, au decis să înghețe pretențiile și să folosească Antarctica doar pentru cercetare. Italia a aderat în 1981.` },
        { id: `clima`, label: `Schimbări climatice`, x: 62, y: 82, color: `#ef4444`, html: `Topirea gheții, creșterea nivelului mării, corali care albesc.`, why: `Creșterea gazelor cu efect de seră reține căldura; la poli efectul este amplificat de pierderea gheții albe (reacția în buclă a albedoului).` },
        { id: `isolebasse`, label: `Insule în pericol`, x: 30, y: 85, color: `#0891b2`, html: `Tuvalu, Kiribati, Insulele Marshall riscă să fie scufundate.`, why: `Atolii sunt înalți în medie 2–3 metri deasupra mării: chiar și câțiva decimetri de creștere aduc furtuni pe mare, apă sărată în fântâni și pierderea pământului cultivabil.` }
      ],
      edges: [
        [`isolamento`, `fauna`, `produce o`],
        [`isolamento`, `australia`, `caracterizează`],
        [`australia`, `popoli`, `locuită de`],
        [`latitudine`, `artide`, `definește`],
        [`latitudine`, `antartide`, `definește`],
        [`antartide`, `trattato`, `protejată de`],
        [`artide`, `clima`, `se încălzește de 4 ori mai repede`],
        [`antartide`, `clima`, `gheață care se topește`],
        [`clima`, `isolebasse`, `amenință`],
        [`popoli`, `isolebasse`, `trăiesc pe`]
      ]
    },
    {
      type: `remember`,
      title: `De ținut minte`,
      html: `<ul>
<li><b>Oceania</b>: cel mai mic continent (8,5 milioane km²); Australia + insulele din Pacific (<b>Melanezia</b>, <b>Micronezia</b>, <b>Polinezia</b>).</li>
<li><b>Australia</b>: capitala <b>Canberra</b>; aridă (<b>outback</b>), populație pe coaste, <b>Marea Barieră de Corali</b>, aborigeni, faună unică.</li>
<li><b>Noua Zeelandă</b>: capitala <b>Wellington</b>; insule muntoase și vulcanice; maori; vot pentru femei în 1893.</li>
<li><b>Arctica</b> = ocean înghețat cu popoare (inuiți). <b>Antarctica</b> = continent înghețat fără locuitori stabili, protejat de <b>Tratatul Antarctic</b> (1959).</li>
<li>Regiunile polare sunt cele mai afectate de <b>schimbările climatice</b>.</li>
</ul>`
    },
    {
      type: `quiz`,
      title: `Mini-test: ținuturile polare`,
      questions: [
        { type: `mc`, q: `Ce se află la Polul Nord?`, options: [`Un continent`, `Un ocean acoperit cu gheață`, `Un deșert de nisip`], answer: 1, explain: `Oceanul Înghețat de Nord acoperit de banchiză.` },
        { type: `mc`, q: `Cine a ajuns primul la Polul Sud în 1911?`, options: [`Robert Scott`, `Umberto Nobile`, `Roald Amundsen`], answer: 2, explain: `Norvegianul Roald Amundsen, pe 14 decembrie 1911.` },
        { type: `tf`, q: `Dacă s-ar topi gheața marină arctică, nivelul mării ar crește cu mulți metri.`, answer: false, explain: `Gheața care plutește ocupă deja volumul ei de apă: nivelul mării crește din cauza gheții de pe uscat (Antarctica, Groenlanda).` }
      ]
    }
  ],
  glossary: [
    { t: `Oceania`, d: `Continent format din Australia și insulele din Pacific.` },
    { t: `Atol`, d: `Insulă coraliferă în formă de inel care închide o lagună.` },
    { t: `Outback`, d: `Interiorul arid și puțin locuit al Australiei.` },
    { t: `Aborigeni`, d: `Primii locuitori ai Australiei, prezenți de cel puțin 50.000 de ani.` },
    { t: `Maori`, d: `Popor polinezian care a locuit primul în Noua Zeelandă.` },
    { t: `Banchiză`, d: `Gheață marină care se formează prin înghețarea suprafeței mării.` },
    { t: `Calotă glaciară`, d: `Strat uriaș de gheață care acoperă un continent sau o insulă mare.` },
    { t: `Zi/noapte polară`, d: `Perioade în care, dincolo de cercurile polare, Soarele rămâne mereu deasupra sau mereu sub orizont.` },
    { t: `Albedo`, d: `Capacitatea unei suprafețe de a reflecta lumina solară.` },
    { t: `Tratatul Antarctic`, d: `Acord din 1959 care rezervă Antarctica păcii și cercetării științifice.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Care este cel mai mic continent?`, options: [`Europa`, `Oceania`, `Antarctica`], answer: 1, explain: `Oceania, aproximativ 8,5 milioane de km².` },
      { type: `text`, q: `Care este capitala Australiei?`, answer: [`canberra`], explain: `Canberra.` },
      { type: `mc`, q: `Unde trăiește cea mai mare parte a australienilor?`, options: [`În outback`, `În orașele de pe coastă`, `Pe munți`], answer: 1, explain: `Peste 85% trăiesc în orașe, aproape toate de coastă.` },
      { type: `tf`, q: `Ornitorincul este un mamifer care depune ouă.`, answer: true, explain: `Este un monotrem, ca echidna.` },
      { type: `mc`, q: `Cum se numește poporul care a locuit primul în Noua Zeelandă?`, options: [`Aborigenii`, `Maorii`, `Inuiții`], answer: 1, explain: `Maorii, sosiți din Polinezia în jurul anilor 1250–1300.` },
      { type: `mc`, q: `Ce stabilește Tratatul Antarctic?`, options: [`Că Antarctica aparține Rusiei`, `Că Antarctica este folosită doar pentru pace și știință`, `Că se poate extrage petrol liber`], answer: 1, explain: `Semnat în 1959; din 1991 sunt interzise și activitățile miniere.` },
      { type: `num`, q: `Care este cea mai joasă temperatură măsurată la Vostok în 1983 (în °C)?`, answer: -89.2, tol: 0.2, unit: `°C`, explain: `−89,2 °C, recordul oficial de cea mai joasă temperatură măsurată pe uscat.` },
      { type: `text`, q: `Cum se numește dirijabilul cu care Umberto Nobile a survolat Polul Nord în 1926?`, answer: [`norge`, `dirijabilul norge`], explain: `Norge, cu Roald Amundsen la bord.` },
      { type: `mc`, q: `De ce sunt în pericol insule precum Tuvalu?`, options: [`Din cauza cutremurelor`, `Din cauza creșterii nivelului mării`, `Din cauza deșertificării`], answer: 1, explain: `Sunt atoli înalți de câțiva metri deasupra mării.` },
      { type: `order`, q: `Pune în ordine cronologică.`, items: [`Sosirea aborigenilor în Australia`, `Sosirea maorilor în Noua Zeelandă`, `Sosirea coloniștilor britanici în Australia`, `Votul femeilor în Noua Zeelandă`, `Amundsen la Polul Sud`, `Semnarea Tratatului Antarctic`], explain: `Peste 50.000 de ani în urmă → 1250–1300 → 1788 → 1893 → 1911 → 1959.` },
      { type: `tf`, q: `În Antarctica trăiesc stabil milioane de oameni.`, answer: false, explain: `Sunt doar oameni de știință și tehnicieni în baze, pentru perioade limitate.` },
      { type: `mc`, q: `În ce perioadă a anului este vară în Australia?`, options: [`Din iunie până în august`, `Din decembrie până în februarie`, `Mereu`], answer: 1, explain: `În emisfera sudică anotimpurile sunt inversate față de Italia.` }
    ]
  }
});
