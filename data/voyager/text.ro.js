VOYAGER_TEXT({
  lang: 'ro',
  title: 'Călătoria sondelor Voyager',
  intro: `<p>În 1977, NASA a lansat două sonde gemene, <b>Voyager 1</b> și <b>Voyager 2</b>, ca să viziteze planetele uriașe ale Sistemului Solar. Trebuiau să reziste cinci ani. Astăzi, după aproape o jumătate de secol, sunt încă în viață și călătoresc prin spațiul dintre stele, mai departe decât orice alt obiect construit de oameni.</p>
<p>Pe hartă vezi traiectoriile lor adevărate, calculate din pozițiile planetelor. Atinge un eveniment de pe axa timpului și harta sare la ziua respectivă: poți urmări sondele de la lansare până astăzi.</p>`,
  probes: {
    v1: `<p><b>Voyager 1</b> a plecat a doua (5 septembrie 1977), dar, pe o traiectorie mai rapidă, și-a depășit curând geamăna. A vizitat Jupiter (1979) și Saturn (1980), apoi, după trecerea aproape de Titan, traiectoria i-a fost curbată în afara planului planetelor, spre nord. Din 2012 se află în spațiul interstelar și este cel mai îndepărtat obiect făcut de oameni: se deplasează cu aproximativ 17 km pe secundă (peste 60.000 km/h).</p>
<p>Cântărește aproximativ 800 kg, are o antenă de 3,7 m și produce energie cu generatoare cu plutoniu.</p>`,
    v2: `<p><b>Voyager 2</b> a plecat prima (20 august 1977), pe o traiectorie mai lentă. Este singura sondă care a vizitat vreodată <b>toate cele patru</b> planete uriașe: Jupiter (1979), Saturn (1981), Uranus (1986) și Neptun (1989). Din 2018 se află și ea în spațiul interstelar și se deplasează cu aproximativ 15 km pe secundă.</p>
<p>Cântărește aproximativ 800 kg, are o antenă de 3,7 m și produce energie cu generatoare cu plutoniu.</p>`
  },
  events: [
    { date: '1977-08-20', probe: 'v2', icon: '🚀', title: 'Pleacă Voyager 2',
      html: `<p>O rachetă Titan-Centaur lansează Voyager 2 de la Cape Canaveral, în Florida. Deși este „numărul 2”, pleacă prima!</p>
<p>Misiunea este posibilă datorită unei rare întâmplări fericite: cam o dată la 176 de ani, Jupiter, Saturn, Uranus și Neptun sunt așezate astfel încât pot fi vizitate unul după altul într-o singură călătorie. Oamenii de știință i-au spus <b>Grand Tour</b>.</p>`,
      photo: 'voyager 2 launch' },
    { date: '1977-09-05', probe: 'v1', icon: '🚀', title: 'Pleacă Voyager 1',
      html: `<p>La șaisprezece zile după geamăna ei pleacă și Voyager 1. Urmează o traiectorie mai rapidă și mai directă spre Jupiter și Saturn, așa că va ajunge la amândouă planetele înaintea lui Voyager 2.</p>
<p>La bord, ca pe Voyager 2, se află un disc de aur cu sunete și imagini de pe Pământ, făcut pentru oricine îl va găsi într-o zi.</p>`,
      photo: 'voyager 1 launch' },
    { date: '1977-09-18', probe: 'v1', icon: '🌍', title: 'Prima fotografie cu Pământul și Luna împreună',
      html: `<p>Abia plecată, Voyager 1 se întoarce și face o fotografie în care Pământul și Luna apar în aceeași imagine, de la aproximativ 11 milioane de kilometri. Este pentru prima dată când planeta noastră și satelitul ei se văd împreună din spațiu.</p>`,
      photo: 'voyager 1 earth moon first image' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌋', title: 'Jupiter: vulcani pe Io!',
      html: `<p>Voyager 1 trece la aproximativ 280.000 km de Jupiter. Câteva zile mai târziu, o ingineră de la NASA, Linda Morabito, observă într-o fotografie cu Io un nor deasupra marginii satelitului: este erupția unui vulcan!</p>
<p>Era prima dată când se descopereau vulcani activi în afara Pământului. Io este satelitul cel mai vulcanic din Sistemul Solar: Jupiter îl „strânge” cu gravitația sa, iar interiorul i se încălzește.</p>`,
      photo: 'voyager io volcano' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌀', title: 'Marea Pată Roșie și un inel ascuns',
      html: `<p>Văzută de aproape, Marea Pată Roșie se dovedește a fi o furtună uriașă care se rotește în sens invers acelor de ceasornic, mai lată decât Pământul și observată de secole. Fotografiile arată vârtejuri și curenți în jurul ei.</p>
<p>Voyager 1 descoperă și că Jupiter are un inel subțire și foarte slab, imposibil de văzut de pe Pământ, făcut din praf.</p>`,
      photo: 'voyager jupiter great red spot' },
    { date: '1979-07-09', probe: 'v2', planet: 'jupiter', icon: '🧊', title: 'Jupiter: crusta crăpată a lui Europa',
      html: `<p>Voyager 2 trece la aproximativ 570.000 km de Jupiter și fotografiază sateliții lui. Europa apare ca o minge de gheață netedă, brăzdată de linii lungi și întunecate, ca niște crăpături într-o coajă de ou, și cu foarte puține cratere.</p>
<p>Puține cratere înseamnă o suprafață tânără. Sub gheață ar putea exista un ocean de apă lichidă: astăzi Europa este unul dintre cele mai interesante locuri în care se poate căuta viață.</p>`,
      photo: 'voyager europa jupiter' },
    { date: '1980-11-11', probe: 'v1', planet: 'saturn', icon: '🟠', title: 'Saturn: atmosfera groasă a lui Titan',
      html: `<p>Voyager 1 trece aproape de Titan, marele satelit al lui Saturn, și descoperă că are o atmosferă mult mai densă decât cea a Pământului, făcută mai ales din azot, ca a noastră. O ceață portocalie ascunde suprafața.</p>
<p>Titan este singurul satelit din Sistemul Solar cu o atmosferă atât de groasă. Fotografiile nu au putut vedea solul: au fost nevoie de alte misiuni ca să-l dezvăluie.</p>`,
      photo: 'voyager titan atmosphere' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '🪐', title: 'Saturn: inelele sunt pline de detalii',
      html: `<p>Voyager 1 trece la aproximativ 125.000 km de Saturn și vede că inelele nu sunt câteva cercuri netede, ci mii de inelușe subțiri, asemănătoare cu șanțurile unui disc de vinil. În inelul F, subțire și îndepărtat, unele porțiuni par împletite ca o coadă.</p>
<p>Descoperă și doi sateliți mici „păstori”, Prometeu și Pandora, care cu gravitația lor țin în ordine inelul F, ca niște câini care conduc o turmă.</p>`,
      photo: 'voyager saturn rings' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '↗️', title: 'Voyager 1 părăsește planul planetelor',
      html: `<p>Trecerea aproape de Titan fusese aleasă dinadins, dar are un preț: gravitația lui Titan și a lui Saturn curbează traiectoria lui Voyager 1 spre nord, în afara planului pe care se rotesc planetele.</p>
<p>Din acel moment nu mai poate vizita Uranus și Neptun, dar călătoria ei continuă spre spațiul dintre stele. A fost o alegere: studiul de aproape al lui Titan a contat mai mult pentru această sondă decât un Grand Tour complet.</p>` },
    { date: '1981-08-26', probe: 'v2', planet: 'saturn', icon: '🪐', title: 'Voyager 2 la Saturn',
      html: `<p>Voyager 2 trece pe lângă Saturn la aproximativ nouă luni după geamăna ei, cu o altă priveliște asupra inelelor și sateliților. Fotografiază structuri întunecate și schimbătoare în inele și studiază sateliți precum Enceladus și Tethys.</p>
<p>După trecere, platforma camerelor se blochează pentru o vreme; inginerii o repun în funcțiune de pe Pământ, iar sonda poate continua spre Uranus datorită impulsului gravitațional al lui Saturn.</p>`,
      photo: 'voyager 2 saturn' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🔵', title: 'Uranus: zece sateliți noi și Miranda',
      html: `<p>Voyager 2 este prima și, până acum, singura sondă care a vizitat Uranus. Trece la aproximativ 81.000 km de nori și descoperă zece sateliți mici noi.</p>
<p>Satelitul Miranda pare un mozaic făcut din bucăți care nu se potrivesc între ele: stânci foarte înalte, șanțuri și câmpii, de parcă ar fi fost spart și lipit la loc prost. Pe Miranda se află o stâncă uriașă, înaltă de aproximativ 20 km.</p>`,
      photo: 'voyager miranda' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🧲', title: 'Uranus: câmp magnetic strâmb și inele',
      html: `<p>Uranus este o planetă „culcată” pe o parte. Voyager 2 descoperă că și câmpul ei magnetic este foarte înclinat, cu aproximativ 60°, față de axa de rotație și nici măcar nu trece prin centrul planetei.</p>
<p>Sonda studiază și inelele, întunecate și subțiri, și găsește altele noi. Planeta însăși apare albastru-verzuie și aproape fără nori vizibili.</p>`,
      photo: 'voyager uranus' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌀', title: 'Neptun: Marea Pată Întunecată',
      html: `<p>Voyager 2 ajunge la Neptun după 12 ani de călătorie și trece la aproximativ 4.900 km de polul nord. Pe planeta albastră vede o furtună ovală cât Pământul, <b>Marea Pată Întunecată</b>.</p>
<p>Măsoară și cei mai rapizi vânturi din Sistemul Solar, de aproximativ 2000 km/h, deși Neptun este atât de departe de Soare și primește foarte puțină căldură de la el. Descoperă în plus sateliți noi și inele în formă de arcuri.</p>`,
      photo: 'voyager neptune great dark spot' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌫️', title: 'Triton: gheizere de azot',
      html: `<p>La câteva ore după Neptun, Voyager 2 trece razant pe lângă satelitul Triton, la aproximativ 40.000 km. Este unul dintre cele mai reci locuri vizitate vreodată: aproximativ -235 °C.</p>
<p>Fotografiile arată norișori întunecați care se ridică de la sol: sunt gheizere de azot, care țâșnesc din gheață. Triton se rotește în sens invers față de Neptun: poate este un obiect capturat din centura Kuiper. Voyager 2 este încă singura sondă care a vizitat Uranus și Neptun.</p>`,
      photo: 'voyager triton' },
    { date: '1990-02-14', probe: 'v1', icon: '🖼️', title: 'Portretul de familie',
      html: `<p>În timp ce părăsește Sistemul Solar, Voyager 1 se întoarce și face 60 de fotografii în care se văd șase planete: Venus, Pământul, Jupiter, Saturn, Uranus și Neptun. Mercur era prea aproape de Soare, Marte în strălucirea lui, iar Pluto prea mic și întunecat.</p>
<p>Este „portretul de familie” al Sistemului Solar, văzut din exterior pentru prima și, până acum, singura dată.</p>`,
      photo: 'voyager family portrait' },
    { date: '1990-02-14', probe: 'v1', icon: '🔵', title: 'Pale Blue Dot, Punctul Albastru Palid',
      html: `<p>Într-una dintre acele fotografii, de la aproximativ șase miliarde de kilometri, Pământul este un punct aproape invizibil într-o rază de lumină. Ideea de a o face a fost a astronomului Carl Sagan.</p>
<p>Sagan a tras din ea o reflecție celebră: întreaga istorie umană, fiecare om, fiecare război și fiecare bucurie s-au petrecut pe acel minuscul grăunte. Pentru el era un motiv în plus să avem grijă unii de alții și de casa noastră.</p>`,
      photo: 'pale blue dot' },
    { date: '1990-02-14', probe: 'v1', icon: '📷', title: 'Camerele sunt oprite',
      html: `<p>După portretul de familie, camerele lui Voyager 1 sunt oprite pentru totdeauna. Nu mai era nimic aproape de fotografiat, iar oprirea lor economisea energie și memorie pentru instrumentele care măsoară spațiul din jurul sondei.</p>
<p>De atunci, sondele Voyager nu mai trimit fotografii, dar continuă să măsoare câmpuri magnetice, particule și unde.</p>` },
    { date: '1998-02-17', probe: 'v1', icon: '🏁', title: 'Voyager 1 este cel mai îndepărtat obiect făcut de oameni',
      html: `<p>Voyager 1 o depășește pe Pioneer 10, o sondă lansată înaintea ei, la aproximativ 70 de ori distanța dintre Pământ și Soare. Din ziua aceea este obiectul construit de oameni cel mai departe de Pământ, iar în fiecare zi își mărește avansul.</p>` },
    { date: '2004-12-16', probe: 'v1', icon: '💨', title: 'Voyager 1 traversează șocul terminal',
      html: `<p>La aproximativ 94 de ori distanța Pământ-Soare, vântul solar, fluxul de particule care iese din Soare, încetinește brusc, ca apa când lovește fundul unei chiuvete. Această zonă se numește <b>șoc terminal</b> (termination shock).</p>
<p>Voyager 1 este prima sondă care intră în ea: descoperă că bula Soarelui este mai turtită decât se credea.</p>` },
    { date: '2007-08-30', probe: 'v2', icon: '💨', title: 'Și Voyager 2 traversează șocul terminal',
      html: `<p>Voyager 2 traversează aceeași graniță, la o distanță mai mică de Soare. Cele două măsurători luate împreună arată că bula nu este simetrică: la sud este mai „comprimată” decât la nord.</p>` },
    { date: '2012-08-25', probe: 'v1', icon: '🌌', title: 'Voyager 1 intră în spațiul interstelar',
      html: `<p>La 25 august 2012, instrumentele lui Voyager 1 măsoară o schimbare bruscă: particulele vântului solar aproape dispar, în timp ce se înmulțesc cele care vin din spațiul dintre stele.</p>
<p>Oamenilor de știință le-au trebuit câteva luni ca să înțeleagă, dar se întâmplase: Voyager 1 traversase <b>heliopauza</b> și devenise primul obiect făcut de oameni aflat în spațiul interstelar.</p>` },
    { date: '2017-11-28', probe: 'v1', icon: '🔥', title: 'Propulsoarele se reaprind după 37 de ani',
      html: `<p>Rachetele mici care servesc la orientarea lui Voyager 1 spre Pământ își pierdeau eficiența. Inginerii au încercat atunci pe cele de rezervă, care nu mai fuseseră folosite din 1980, când sonda trecuse pe lângă Saturn.</p>
<p>După 37 de ani, propulsoarele au funcționat din prima, cu impulsuri de doar 10 milisecunde. Misiunea a putut fi prelungită cu câțiva ani.</p>` },
    { date: '2018-11-05', probe: 'v2', icon: '🌌', title: 'Și Voyager 2 iese din heliosferă',
      html: `<p>Voyager 2 traversează heliopauza și ajunge în spațiul interstelar. De data aceasta, spre deosebire de geamăna ei, are încă în funcțiune instrumentul care măsoară plasma, așa că oamenii de știință pot vedea direct trecerea.</p>
<p>Cele două sonde, în direcții diferite, arată că granița este stabilă și bine definită.</p>` },
    { date: '2023-11-14', probe: 'v1', icon: '⚠️', title: 'Voyager 1 începe să trimită date fără sens',
      html: `<p>Pe la mijlocul lunii noiembrie 2023, Voyager 1 continuă să primească comenzi, dar datele pe care le trimite sunt un șir încurcat de zerouri și unuri. Nimeni nu putea înțelege starea de sănătate a sondei.</p>
<p>Problema era într-unul dintre calculatoarele de bord, sistemul de date de zbor, și anume într-un cip de memorie stricat după 46 de ani în spațiu.</p>` },
    { date: '2024-04-20', probe: 'v1', icon: '🛠️', title: 'Reparația la 24 de miliarde de kilometri',
      html: `<p>Inginerii nu puteau repara cipul, așa că au mutat programul în alte zone libere ale memoriei, împărțindu-l în bucăți mai mici. La fiecare pas trebuia să aștepte ore, cât le luau semnalelor să meargă și să se întoarcă.</p>
<p>În aprilie 2024, Voyager 1 a început din nou să trimită date utile despre starea ei, iar curând după aceea și date științifice de la instrumente.</p>` },
    { date: '2025-03-01', probe: 'both', icon: '🔌', title: 'Se opresc instrumente pentru a economisi energie',
      html: `<p>Generatoarele cu plutoniu pierd aproximativ 4 wați pe an. Ca să nu rămână fără curent, inginerii opresc, unul după altul, instrumentele mai puțin esențiale și încălzitoarele.</p>
<p>Pe fiecare sondă rămân pornite doar câteva. Dacă totul merge bine, sondele Voyager vor putea vorbi încă până în anii 2030 ai acestui secol.</p>` },
    { date: '2026-11-15', probe: 'v1', icon: '⏱️', title: 'O zi-lumină de casă',
      html: `<p>În aceste zile Voyager 1 ajunge la distanța de aproximativ o zi-lumină: lumina, și odată cu ea semnalele radio, are nevoie de 24 de ore ca să ajungă acolo. Un mesaj și răspunsul lui durează deci aproape două zile.</p>
<p>Voyager 2 este încă mai aproape, la aproximativ 20 de ore-lumină. Călătoria va continua pentru totdeauna, dar sonda nu se va mai întoarce niciodată.</p>` }
  ],
  sections: [
    { icon: '📀', title: 'Discul de aur',
      html: `<p>Pe fiecare Voyager se află un disc de cupru placat cu aur, ca un mesaj într-o sticlă. Conține:</p>
<ul>
<li><b>saluturi în 55 de limbi</b>, de la sumeriana veche până la limbile moderne, plus un salut din partea ONU și un mesaj al președintelui american Carter;</li>
<li><b>sunete de pe Pământ</b>: valuri, vânt, tunete, animale, cântecul balenelor, un sărut, râsul unui copil;</li>
<li><b>aproximativ 90 de minute de muzică</b> din toată lumea, de la Bach și Beethoven la cântece tradiționale și rock;</li>
<li><b>115 imagini</b> codificate în semnale, care arată Pământul, oamenii, casele, mâncarea.</li>
</ul>
<p>Pe copertă sunt instrucțiuni desenate pentru a reda discul și o hartă a poziției Soarelui, făcută cu frecvențele a 14 <b>pulsari</b>, stele care licăresc cu ritmuri foarte regulate. Mai degrabă decât pentru extratereștri, este un mesaj pentru noi înșine.</p>` },
    { icon: '📡', title: 'Cum pot încă să ne vorbească',
      html: `<p>Sondele Voyager nu folosesc panouri solare, pentru că Soarele este prea departe. Au în schimb generatoare cu <b>plutoniu</b> (RTG), care transformă în electricitate căldura plutoniului ce se dezintegrează lent. La început dădeau aproximativ 470 de wați; astăzi mult mai puțin, și scad cu aproximativ 4 wați pe an.</p>
<p>Emițătorul de bord folosește doar aproximativ <b>23 de wați</b>, cât becul unui frigider. Când semnalul ajunge pe Pământ este foarte slab, de miliarde de ori mai slab decât un ceas digital. Ca să-l prindă, sunt necesare marile antene de 70 de metri ale <b>Deep Space Network</b>, la Goldstone (California), Madrid și Canberra, astfel încât cel puțin una să fie mereu îndreptată spre sonde în timp ce Pământul se rotește.</p>
<p>Sondele răspund cu o antenă parabolică de 3,7 m, îndreptată exact spre Pământ. Viteza de transmisie este de aproximativ 160 de biți pe secundă: de mii de ori mai lentă decât o conexiune telefonică veche.</p>` },
    { icon: '🎯', title: 'Praștiile gravitaționale',
      html: `<p>O rachetă nu era de ajuns ca să ajungă până la Neptun. Sondele Voyager au folosit <b>gravitația planetelor</b>: trecând aproape de Jupiter, o sondă este atrasă, își curbează traiectoria și iese cu mai multă viteză, „furând” puțin din mișcarea planetei, care este atât de grea încât nu observă.</p>
<p>Fiecare planetă era o praștie spre următoarea. De aceea Grand Tour a fost posibil cu o sondă de aproximativ 800 kg și puțin combustibil: fiecare a folosit Jupiter, Saturn și așa mai departe ca să-și schimbe traiectoria și viteza fără să consume aproape nimic.</p>` },
    { icon: '🫧', title: 'Ce este heliosfera',
      html: `<p>Soarele emite fără oprire <b>vântul solar</b>, un flux de particule încărcate electric care se mișcă cu sute de km pe secundă și care umflă o bulă uriașă în jurul Sistemului Solar: <b>heliosfera</b>.</p>
<p>Mai departe, vântul încetinește la șocul terminal, apoi se adună în heliosfera exterioară și, în sfârșit, întâlnește gazul dintre stele. Marginea, unde vântul solar nu mai împinge, se numește <b>heliopauză</b>. Dincolo de această limită se află spațiul interstelar.</p>
<p>Atenție: sondele Voyager au părăsit heliosfera, dar nu Sistemul Solar! Norul lui Oort, o uriașă carapace de comete, începe la aproximativ 300 de ani de ele și se va termina peste zeci de mii de ani.</p>` },
    { icon: '📏', title: 'Cât de departe sunt',
      html: `<p>Voyager 1 se află la peste 25 de miliarde de kilometri de Pământ, adică de aproximativ 170 de ori distanța Pământ-Soare. Dacă Pământul ar fi la un pas de Soare, Voyager 1 ar fi la aproape 170 de pași.</p>
<p>Lumina are nevoie de aproximativ 8 minute ca să ajungă de la Soare, de aproape 5 ore și jumătate până la Neptun și de aproximativ o zi până la Voyager 1. Un avion de linie, cu 900 km/h, ar face peste 3000 de ani.</p>
<p>Și totuși, în spațiul interstelar aceste distanțe sunt mici: cea mai apropiată stea, Proxima Centauri, se află la 4,2 ani-lumină, de peste 1.500 de ori mai departe decât este Voyager 1 astăzi.</p>` },
    { icon: '♾️', title: 'Și apoi?',
      html: `<p>Mai devreme sau mai târziu, sondele Voyager vor înceta să vorbească, atunci când energia nu va mai ajunge. Dar vor continua să călătorească în tăcere miliarde de ani, fără nimic care să le oprească.</p>
<p>Peste aproximativ 40.000 de ani, Voyager 1 va trece la aproximativ 1,6 ani-lumină de steaua <b>Gliese 445</b>, iar Voyager 2 va trece la aproximativ 1,7 ani-lumină de <b>Ross 248</b>. Nu sunt întâlniri apropiate: sunt doar punctele cele mai apropiate ale lungii lor călătorii. Cu discul de aur la bord, vor rămâne o mărturie despre cine suntem.</p>` }
  ],
  quiz: [
    { type: 'mc', q: 'De ce a fost posibil „Grand Tour” în 1977?', options: ['Pentru că rachetele erau mult mai puternice', 'Pentru că cele patru planete uriașe erau așezate favorabil, ceea ce se întâmplă cam o dată la 176 de ani', 'Pentru că planetele erau foarte aproape de Pământ'], answer: 1, explain: 'Jupiter, Saturn, Uranus și Neptun erau aliniate astfel încât puteau fi vizitate una după alta, folosind gravitația fiecăreia pentru a ajunge la următoarea.' },
    { type: 'tf', q: 'Voyager 2 a plecat înaintea lui Voyager 1.', answer: true, explain: 'Voyager 2 a plecat la 20 august 1977, Voyager 1 la 5 septembrie. Dar Voyager 1 a luat o traiectorie mai rapidă și a ajuns mai întâi la Jupiter și Saturn.' },
    { type: 'mc', q: 'Ce descoperire a făcut Voyager 1 pe satelitul Io?', options: ['Are un ocean de apă sub gheață', 'Are vulcani activi', 'Are o atmosferă asemănătoare cu cea a Pământului'], answer: 1, explain: 'A fost prima descoperire de vulcani activi în afara Pământului.' },
    { type: 'mc', q: 'Care satelit al lui Jupiter a arătat o suprafață de gheață crăpată și cu puține cratere?', options: ['Europa', 'Io', 'Triton'], answer: 0, explain: 'Europa, fotografiată de Voyager 2 în 1979, ar putea avea un ocean sub gheață.' },
    { type: 'tf', q: 'Voyager 1 a vizitat și Uranus și Neptun.', answer: false, explain: 'După Titan, traiectoria ei a fost curbată în afara planului planetelor. Uranus și Neptun au fost vizitate numai de Voyager 2.' },
    { type: 'num', q: 'Cam cu ce viteză bat vânturile de pe Neptun descoperite de Voyager 2? (km/h)', answer: 2000, tol: 300, unit: 'km/h', explain: 'Vânturile de pe Neptun sunt cele mai rapide din Sistemul Solar, de aproximativ 2000 km/h.' },
    { type: 'mc', q: 'Ce arată fotografia „Pale Blue Dot”, Punctul Albastru Palid?', options: ['Pământul văzut de la aproximativ șase miliarde de kilometri', 'Neptun văzut de aproape', 'Soarele de pe suprafața lui Jupiter'], answer: 0, explain: 'Pământul este un punct minuscul într-o rază de lumină. Carl Sagan a tras din ea o celebră reflecție despre cât de mici suntem și despre valoarea casei noastre.' },
    { type: 'order', q: 'Pune aceste evenimente în ordine', items: ['Lansarea sondelor Voyager (1977)', 'Voyager 2 la Uranus (1986)', 'Punctul Albastru Palid (1990)', 'Voyager 1 în spațiul interstelar (2012)'], explain: 'De la lansare (1977) la Uranus (1986), apoi fotografia Pământului (1990), în sfârșit ieșirea din heliosferă (2012).' },
    { type: 'mc', q: 'Cum produc energie sondele Voyager?', options: ['Cu panouri solare uriașe', 'Cu generatoare cu plutoniu', 'Cu baterii reîncărcabile'], answer: 1, explain: 'Generatoarele cu plutoniu (RTG) transformă căldura în electricitate. Soarele este prea departe pentru panouri solare.' },
    { type: 'mc', q: 'Cum se numește rețeaua de antene mari care comunică cu sondele Voyager?', options: ['Deep Space Network', 'Hubble Network', 'Star Link'], answer: 0, explain: 'Deep Space Network are antene de 70 de metri la Goldstone, Madrid și Canberra.' },
    { type: 'tf', q: 'Discul de aur conține saluturi în 55 de limbi.', answer: true, explain: 'Conține și sunete de pe Pământ, aproximativ 90 de minute de muzică și 115 imagini.' },
    { type: 'num', q: 'Peste cam câți ani va trece Voyager 1 aproape de steaua Gliese 445? (ani)', answer: 40000, tol: 5000, unit: 'ani', explain: 'Peste aproximativ 40.000 de ani va trece la aproximativ 1,6 ani-lumină de stea.' }
  ]
});
