TOPIC('ro', {
  id: "l1-sci-atmosfera",
  title: "Atmosfera și vremea",
  intro: "Suntem scufundați într-un ocean de aer care ne protejează de radiații, reglează temperatura planetei și ne aduce ploaia. În fiecare zi îi vedem efectele: o furtună neașteptată, un cer senin după un vânt rece de nord, ceața din Câmpia Padului. În această lecție aflăm cum este alcătuită <b>atmosfera</b>, de ce există <b>vântul</b>, cum se formează <b>norii și ploile</b> și cum se citește o hartă meteorologică.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Cum este alcătuită atmosfera",
      html: `<p><b>Atmosfera</b> este învelișul gazos care înconjoară Pământul, reținut de gravitație. Deși se întinde pe sute de kilometri, <b>99%</b> din masa ei se află în primii 30 km, iar 50% sub 5,5 km.</p>
<p><b>Compoziția aerului uscat</b> (în volum):</p>
<table>
<tr><th>Gaz</th><th>Procent</th></tr>
<tr><td>Azot (N₂)</td><td>78,08%</td></tr>
<tr><td>Oxigen (O₂)</td><td>20,95%</td></tr>
<tr><td>Argon (Ar)</td><td>0,93%</td></tr>
<tr><td>Dioxid de carbon (CO₂)</td><td>circa 0,042% (circa 420 ppm)</td></tr>
<tr><td>Altele (neon, heliu, metan, ozon…)</td><td>urme</td></tr>
</table>
<p>În plus, aerul conține o cantitate variabilă de <b>vapori de apă</b> (de la aproape 0 la 4%) și de <b>particule în suspensie</b> (praf, săruri marine, polen, cenușă). Chiar dacă CO₂ reprezintă o fracțiune infimă, este un gaz cu efect de seră: din 1750, concentrația lui a crescut de la circa 280 la peste 420 ppm din cauza folosirii combustibililor fosili.</p>
<p>Atmosfera actuală este foarte diferită de cea primordială: oxigenul a apărut mai ales datorită <b>cianobacteriilor</b>, acum circa 2,4 miliarde de ani (<b>Marea Oxidare</b>), un eveniment care a făcut posibilă viața complexă.</p>`
    },
    {
      type: "svg",
      title: "Straturile atmosferei",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#f8fafc"/>
<rect x="30" y="285" width="260" height="35" fill="#fde68a" stroke="#92400e"/>
<rect x="30" y="215" width="260" height="70" fill="#bfdbfe" stroke="#1d4ed8"/>
<rect x="30" y="150" width="260" height="65" fill="#c7d2fe" stroke="#4338ca"/>
<rect x="30" y="85" width="260" height="65" fill="#ddd6fe" stroke="#6d28d9"/>
<rect x="30" y="20" width="260" height="65" fill="#1e1b4b" stroke="#312e81"/>
<text x="160" y="308" font-size="15" text-anchor="middle" fill="#1f2937">PĂMÂNT</text>
<text x="160" y="255" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">TROPOSFERA</text>
<text x="160" y="187" font-size="16" text-anchor="middle" fill="#312e81" font-weight="bold">STRATOSFERA</text>
<text x="160" y="122" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">MEZOSFERA</text>
<text x="160" y="58" font-size="16" text-anchor="middle" fill="#e0e7ff" font-weight="bold">TERMOSFERA</text>
<g font-size="14" fill="#1f2937">
<text x="305" y="285">0 km</text>
<text x="305" y="219">~12 km (tropopauză)</text>
<text x="305" y="154">~50 km</text>
<text x="305" y="89">~85 km</text>
<text x="305" y="24">peste 600 km: exosfera</text>
</g>
<g font-size="14" fill="#334155">
<text x="470" y="250">vreme, nori, avioane de linie</text>
<text x="470" y="182">stratul de ozon (15-35 km)</text>
<text x="470" y="118">meteori (stele căzătoare)</text>
<text x="470" y="55">aurore, ISS (circa 400 km)</text>
</g>
<text x="470" y="270" font-size="14" fill="#1d4ed8">T: de la +15 la -56 °C</text>
<text x="470" y="202" font-size="14" fill="#4338ca">T: de la -56 la circa 0 °C</text>
<text x="470" y="138" font-size="14" fill="#6d28d9">T: până la -90 °C</text>
<text x="470" y="74" font-size="14" fill="#312e81">T: peste 1000 °C (dar aer foarte puțin)</text>
</svg>`,
      caption: "Temperatura scade cu altitudinea în troposferă, crește în stratosferă (ozonul absoarbe razele UV), scade din nou în mezosferă și crește iar în termosferă."
    },
    {
      type: "text",
      title: "Straturile, unul câte unul",
      html: `<ul>
<li><b>Troposfera</b> (0–12 km aproximativ; 8 km la poli, 16–18 km la ecuator): conține circa 80% din masa aerului și aproape toți vaporii de apă. Aici au loc fenomenele meteorologice. Temperatura <b>scade cu circa 6,5 °C la fiecare 1000 m</b> (gradient termic vertical), până la aproximativ −56 °C la <b>tropopauză</b>.</li>
<li><b>Stratosfera</b> (12–50 km): aerul este stabil și uscat; aici se află <b>stratul de ozon</b> (O₃), care absoarbe o mare parte din razele ultraviolete (UV) dăunătoare, încălzind aerul.</li>
<li><b>Mezosfera</b> (50–85 km): cel mai rece punct (până la −90 °C); meteoriții ard prin frecare.</li>
<li><b>Termosfera</b> (85–600 km aproximativ): rarefiată, cu temperaturi teoretice de peste 1000 °C din cauza absorbției razelor X și UV, dar un obiect nu se încălzește pentru că sunt prea puține molecule. Găzduiește <b>aurorele polare</b> și sateliții aflați pe orbite joase.</li>
<li><b>Exosfera</b>: tranziția spre spațiu.</li>
</ul>
<p>În 1985, grupul lui <b>Joseph Farman</b> a descoperit <b>gaura din stratul de ozon</b> deasupra Antarcticii, provocată de clorofluorocarburi (CFC), folosite în frigidere și în sprayuri. Prin <b>Protocolul de la Montreal</b> (1987), aproape toate țările au interzis CFC: stratul de ozon se reface și este considerat unul dintre cele mai mari succese ale cooperării internaționale în domeniul mediului.</p>`
    },
    {
      type: "curiosity",
      title: "Efectul de seră: dușman sau prieten?",
      html: `<p>Fără efectul de seră, temperatura medie a Pământului ar fi de circa <b>−18 °C</b> în loc de actualele circa <b>+15 °C</b>. Efectul de seră natural este <b>indispensabil vieții</b>: gaze precum vaporii de apă, CO₂ și metanul lasă să treacă lumina Soarelui, care încălzește solul, dar rețin o parte din căldura infraroșie emisă de suprafață. Problema este creșterea efectului de seră din cauza emisiilor umane: temperatura medie globală a crescut deja cu circa <b>1,1–1,2 °C</b> față de perioada preindustrială. Fenomenul a fost intuit de <b>Fourier</b> (1824), demonstrat în laborator de <b>Tyndall</b> (1859) și calculat pentru prima dată de <b>Arrhenius</b> (1896), care a prevăzut că dublarea CO₂ ar încălzi Pământul cu câteva grade.</p>`
    },
    {
      type: "text",
      title: "Presiunea atmosferică",
      html: `<p>Aerul are greutate: o coloană de aer de la suprafață până la limitele atmosferei, pe 1 cm², cântărește circa 1 kg. <b>Presiunea atmosferică</b> este forța pe care aerul o exercită pe unitatea de suprafață. La nivelul mării are în medie <b>1013 hPa</b> (hectopascali), adică <b>1 atmosferă</b>, sau 760 mm coloană de mercur.</p>
<p><b>Evangelista Torricelli</b>, elev al lui Galilei, a demonstrat-o în 1643: răsturnând un tub de sticlă plin cu mercur într-un vas, mercurul a coborât până la o coloană de 76 cm, susținută de greutatea aerului pe mercurul din vas: se năștea <b>barometrul</b>. În 1648, <b>Blaise Pascal</b> a pus să se repete experimentul de către cumnatul său pe Puy de Dôme și a văzut că, urcând, coloana scade: deasupra este mai puțin aer.</p>
<p>Cum variază presiunea:</p>
<ul>
<li><b>cu altitudinea</b>: scade, circa 1 hPa la fiecare 8 m în primii kilometri; se înjumătățește la fiecare circa 5,5 km (pe Everest este aproximativ o treime din cea de la nivelul mării, circa 330 hPa);</li>
<li><b>cu temperatura</b>: aerul cald este mai ușor, deci urcă și creează o zonă de <b>presiune scăzută</b> (<b>depresiune sau ciclon</b>); aerul rece este mai greu și coboară, creând <b>presiune ridicată</b> (<b>anticiclon</b>).</li>
</ul>
<p>Pe hărțile meteorologice, <b>izobarele</b> sunt linii care unesc punctele cu aceeași presiune. Într-o depresiune, vremea este în general instabilă; într-un anticiclon, senină.</p>`
    },
    {
      type: "example",
      title: "Temperatura și presiunea la altitudine",
      html: `<p>La Milano (120 m) sunt <b>20 °C</b>. Ce temperatură este, în condiții egale, în vârful Monte Rosa (Punta Gnifetti, 4554 m)?</p>
<ol>
<li>Diferența de nivel: 4554 − 120 = 4434 m ≈ 4,43 km.</li>
<li>Scăderea: 4,43 × 6,5 = 28,8 °C.</li>
<li>T ≈ 20 − 28,8 = <b>aproximativ −8,8 °C</b>.</li>
</ol>
<p>Presiunea în vârf va fi de circa 580 hPa, adică aproximativ 57% din cea de la nivelul mării: de aceea alpiniștii respiră „mai puțin oxigen” (procentul de O₂ este mereu 21%, dar fiecare respirație conține mai puține molecule).</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: aerul și presiunea",
      questions: [
        { type: "mc", q: "Care este cel mai abundent gaz din aer?", options: ["Oxigenul", "Azotul", "Dioxidul de carbon"], answer: 1, explain: "Azotul reprezintă 78%." },
        { type: "mc", q: "În ce strat au loc fenomenele meteorologice?", options: ["Troposfera", "Stratosfera", "Termosfera"], answer: 0, explain: "Este stratul cel mai de jos, cu cea mai mare parte a vaporilor." },
        { type: "tf", q: "Într-un anticiclon vremea este de obicei senină.", answer: true, explain: "Aerul coboară, se încălzește, iar norii se destramă." }
      ]
    },
    {
      type: "text",
      title: "Vântul",
      html: `<p><b>Vântul</b> este aer în mișcare orizontală, dinspre zonele de <b>presiune ridicată</b> spre cele de <b>presiune scăzută</b>, așa cum apa curge la vale. Este cu atât mai puternic cu cât izobarele sunt mai apropiate (<b>gradient</b> de presiune mai mare).</p>
<ul>
<li>Din cauza <b>forței Coriolis</b>, vântul este deviat: <b>spre dreapta</b> în emisfera nordică, spre stânga în cea sudică. De aceea, în jurul unui ciclon aerul se rotește în sens <b>antiorar</b> în nord (și converge spre centru), iar în jurul unui anticiclon în sens orar.</li>
<li>Se măsoară cu <b>anemometrul</b> (viteza, în m/s, noduri sau km/h) și cu <b>mâneca de vânt</b> sau girueta (direcția). Direcția indică întotdeauna de unde suflă: un vânt de maestrale vine din nord-vest.</li>
<li><b>Scara Beaufort</b> (1805) îl clasifică de la 0 (calm) la 12 (uragan, peste 118 km/h).</li>
</ul>
<p><b>Vânturi locale</b>: <b>briza de mare</b> ziua (uscatul se încălzește mai mult decât marea, aerul cald urcă, iar cel proaspăt de deasupra mării îl înlocuiește: vântul merge de la mare spre uscat) și <b>briza de uscat</b> noaptea; <b>brizele de munte și de vale</b>; <b>foehnul</b> (favonio), vânt cald și uscat care coboară după ce a trecut peste munți.</p>
<p><b>Vânturi regulate</b>: <b>alizeele</b> suflă spre ecuator dinspre nord-est (emisfera nordică) și dinspre sud-est (emisfera sudică); vânturile de vest la latitudinile medii; <b>musonii</b> își schimbă direcția odată cu anotimpul, aducând ploile în India și în Asia de Sud-Est vara. Pe mările Italiei, ține minte: tramontana (N), grecale (NE), levante (E), scirocco (SE), ostro (S), libeccio (SV), ponente (V), maestrale (NV).</p>`
    },
    {
      type: "svg",
      title: "Cum se naște vântul: briza de mare",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#e0f2fe"/>
<rect x="0" y="210" width="320" height="90" fill="#38bdf8"/>
<rect x="320" y="210" width="320" height="90" fill="#d6a85f"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<text x="160" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">MARE (mai rece)</text>
<text x="480" y="270" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">USCAT (mai cald)</text>
<g stroke="#dc2626" stroke-width="4" fill="none"><path d="M480 200 L480 110"/><path d="M455 200 L455 120"/><path d="M505 200 L505 120"/></g>
<polygon points="480,95 468,115 492,115" fill="#dc2626"/><polygon points="455,105 443,125 467,125" fill="#dc2626"/><polygon points="505,105 493,125 517,125" fill="#dc2626"/>
<text x="480" y="80" font-size="14" text-anchor="middle" fill="#7f1d1d" font-weight="bold">aerul cald urcă: presiune scăzută</text>
<path d="M240 200 L420 200" stroke="#1d4ed8" stroke-width="5" fill="none"/><polygon points="436,200 416,190 416,210" fill="#1d4ed8"/>
<text x="330" y="190" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">briza de mare</text>
<path d="M420 70 L240 70" stroke="#6b7280" stroke-width="3" fill="none" stroke-dasharray="6 5"/><polygon points="224,70 244,60 244,80" fill="#6b7280"/>
<text x="330" y="60" font-size="14" text-anchor="middle" fill="#374151">întoarcere la altitudine</text>
<text x="160" y="150" font-size="14" text-anchor="middle" fill="#1e3a8a" font-weight="bold">aer rece: presiune ridicată</text>
</svg>`,
      caption: "Ziua uscatul se încălzește mai mult decât marea: aerul cald urcă, iar aerul proaspăt de deasupra mării aleargă să-l înlocuiască."
    },
    {
      type: "text",
      title: "Umiditate, nori și precipitații",
      html: `<p><b>Umiditatea absolută</b> este masa de vapori de apă pe m³ de aer (g/m³). Dar aerul nu poate conține oricât: există un maxim, <b>saturația</b>, care crește cu temperatura (la 0 °C circa 4,8 g/m³; la 20 °C circa 17,3 g/m³; la 30 °C circa 30 g/m³). <b>Umiditatea relativă</b> este raportul procentual dintre vaporii prezenți și vaporii maximi la aceeași temperatură: UR = (umiditatea absolută / maxim) × 100. Se măsoară cu <b>higrometrul</b>. La 100% aerul este saturat. Se numește <b>punct de rouă</b> temperatura la care, răcindu-se, aerul devine saturat.</p>
<p>Când aerul saturat se răcește în continuare, vaporii se <b>condensează</b> pe mici particule (nuclee de condensare) și formează picături: <b>nori</b> (la altitudine) sau <b>ceață</b> (la sol). Aproape de sol se formează <b>roua</b> sau <b>bruma</b> (sub 0 °C).</p>
<p>Norii se clasifică după formă și altitudine (Luke Howard, 1803):</p>
<ul>
<li><b>cirrus</b>, filamentoși și subțiri (peste 6 km, cristale de gheață);</li>
<li><b>cumulus</b>, ca niște conopide (dezvoltare pe verticală; dacă sunt uriași, <b>cumulonimbus</b>, care aduc furtuni și grindină);</li>
<li><b>stratus</b>, acoperiri uniforme și cenușii (la altitudine joasă: ceață ridicată, burniță);</li>
<li><b>nimbus</b> (<i>nimbus</i> = ploaie): nimbostratus, care dau ploi continue.</li>
</ul>
<p>Picăturile unui nor (circa 0,02 mm) nu cad: sunt prea ușoare. Ca să devină picături de ploaie (1–3 mm), trebuie să se unească (coalescență) sau să crească pe gheață. <b>Precipitațiile</b> pot fi ploaie, zăpadă, grindină (boabe de gheață care urcă și coboară de mai multe ori în cumulonimbus) și lapoviță. Se măsoară cu <b>pluviometrul</b>, în mm (1 mm = 1 L/m²).</p>`
    },
    {
      type: "example",
      title: "Umiditatea relativă și punctul de rouă",
      html: `<p>Într-o seară de vară, la 20 °C, aerul conține <b>10 g/m³</b> de vapori. La 20 °C maximul este <b>17,3 g/m³</b>.</p>
<ol>
<li>UR = 10 / 17,3 × 100 ≈ <b>58%</b>.</li>
<li>Noaptea temperatura scade la circa 11 °C, unde maximul este de circa 10 g/m³: aerul devine saturat (UR = 100%).</li>
<li><b>Punctul de rouă</b> este de circa 11 °C: pe iarbă se depune rouă, iar dacă cerul este senin și nu bate vântul, poate apărea ceață.</li>
</ol>
<p>De aceea geamurile mașinii se aburesc iarna: aerul cald și umed din habitaclu atinge geamul rece, coboară sub punctul de rouă și se condensează.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege norii și ploaia",
      intro: "De la nor la picătură, trecând prin aerul care urcă.",
      tabs: [
        {
          label: "🥶 Sticla rece",
          html: `<p>Experiment: scoate din frigider o sticlă sau o cutie rece într-o zi caldă. După câteva minute se acoperă de picături. Apa nu a „trecut prin” sticlă: aerul de lângă perete s-a răcit sub punctul de rouă, iar vaporii lui s-au condensat. Este același lucru care se întâmplă pe cer când aerul urcă și se răcește.</p>`
        },
        {
          label: "⛰️ De ce plouă mai mult la munte",
          html: `<p>Când un vânt umed întâlnește un lanț muntos, este obligat să urce. Urcând, se dilată și se răcește (circa 6–10 °C la 1000 m), vaporii se condensează și formează nori și ploi (<b>precipitații orografice</b>). Pe versantul opus aerul coboară, se încălzește și se usucă: este <b>foehnul</b> (favonio) sau „umbra pluviometrică”. De aceea Alpii au mult mai multe precipitații decât fundul văilor, iar Câmpia Padului primește iarna vânt uscat și rece când tramontana trece peste munți.</p>`
        },
        {
          label: "🌩️ De ce există furtuna",
          html: `<p>Vara solul se încălzește, aerul cald și umed urcă într-o coloană (<b>convecție</b>), se condensează și eliberează căldură (<b>căldura latentă</b>), care îl face să urce și mai sus. Se dezvoltă un cumulonimbus înalt de 10–12 km. În nori, cristalele de gheață care se ciocnesc se încarcă electric: partea de sus pozitiv, baza negativ. Când diferența de potențial este suficient de mare, țâșnește <b>fulgerul</b>, care încălzește aerul la circa 30 000 °C, făcându-l să se dilate violent: este <b>tunetul</b>. Lumina călătorește cu 300 000 km/s, sunetul cu circa 340 m/s: numărând secundele dintre fulger și tunet și împărțind la 3, obții distanța fulgerului în km.</p>`
        }
      ]
    },
    {
      type: "text",
      title: "Perturbații, fronturi și prognoza vremii",
      html: `<p>O <b>masă de aer</b> este un volum mare de aer cu temperatură și umiditate uniforme. Când se întâlnesc mase de aer diferite, suprafața lor de separare se numește <b>front</b>:</p>
<ul>
<li><b>front cald</b>: aerul cald urcă încet deasupra celui rece: nori stratificați, ploi slabe, dar lungi, apoi temperatura crește;</li>
<li><b>front rece</b>: aerul rece se strecoară sub cel cald și îl împinge în sus: cumulonimbus, averse și furtuni violente, dar scurte, apoi temperatura scade, iar cerul se luminează.</li>
</ul>
<p><b>Perturbațiile</b> de la latitudinile noastre se nasc din ciocnirea dintre aerul polar și cel subtropical; vin dinspre vest (dinspre Atlantic). Asupra Italiei influențează și <b>anticiclonul Azorelor</b> (vară stabilă) și <b>anticiclonul ruso-siberian</b> (frig de iarnă).</p>
<p><b>Vremea</b> este starea atmosferei într-un loc și la un moment dat (temperatură, presiune, vânt, umiditate, nori, precipitații): se schimbă de la o oră la alta. <b>Clima</b> este, în schimb, ansamblul condițiilor medii pe cel puțin 30 de ani. Se spune: „clima este ceea ce te aștepți, vremea este ceea ce găsești”.</p>
<p><b>Prognozele</b> se bazează pe date de la stațiile de la sol, baloane-sondă, radare, sateliți și pe <b>modele numerice</b> care rezolvă pe calculator ecuațiile de dinamică a fluidelor și de termodinamică ale atmosferei: ideea îi aparține lui <b>Lewis Fry Richardson</b> (1922), prima prognoză automată cu calculatorul datează din 1950. După aproximativ o săptămână prognoza se degradează, pentru că atmosfera este un sistem <b>haotic</b>: <b>Edward Lorenz</b> a descoperit în anii ’60 că micile diferențe inițiale cresc rapid (celebrul „efect fluture”).</p>`
    },
    {
      type: "curiosity",
      title: "Uraganele și marile perturbații",
      html: `<p>Un <b>ciclon tropical</b> (uragan în Atlantic, taifun în Pacificul de vest) se formează deasupra oceanelor cu apă de suprafață mai caldă de circa 26,5 °C: vaporii care se condensează eliberează cantități enorme de căldură, care hrănesc furtuna, cu vânturi de peste 118 km/h și un „ochi” central calm. În 1900, uraganul care a lovit Galveston (Texas) a făcut circa 8000 de morți. Pe Mediterana se formează uneori <b>medicane</b> (Mediterranean hurricane), cicloni cu structură asemănătoare, dar mai mici și mai slabi.</p>`
    },
    {
      type: "conceptMap",
      title: "Harta atmosferei: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "atm", label: "Atmosfera", x: 50, y: 6, color: "#3b82f6", html: "Înveliș gazos: 78% azot, 21% oxigen.", why: "Aerul a fost considerat un element simplu până în secolul al XVIII-lea: <b>Priestley</b> (1774) și <b>Scheele</b> au izolat oxigenul, iar <b>Lavoisier</b> a înțeles că aerul este un amestec de două gaze principale." },
        { id: "strati", label: "Straturi", x: 20, y: 28, color: "#6366f1", html: "Troposferă, stratosferă, mezosferă, termosferă.", why: "În 1902, <b>Léon Teisserenc de Bort</b>, cu baloane-sondă fără echipaj, a descoperit că deasupra a circa 11 km temperatura nu mai scade: a fost descoperirea stratosferei." },
        { id: "pres", label: "Presiunea", x: 80, y: 28, color: "#f59e0b", html: "Greutatea aerului: 1013 hPa la nivelul mării.", why: "<b>Torricelli</b> (1643) a măsurat presiunea și a demonstrat existența vidului; <b>Pascal</b> (1648) a confirmat că scade odată cu altitudinea." },
        { id: "vento", label: "Vântul", x: 50, y: 48, color: "#22c55e", html: "Aer care merge de la presiuni ridicate spre presiuni scăzute.", why: "Vântul este o încercare a atmosferei de a reechilibra diferențele de presiune; forța Coriolis (1835) îl deviază spre dreapta în emisfera nordică și explică sensul de rotație al ciclonilor." },
        { id: "temp", label: "Temperatura", x: 15, y: 56, color: "#ef4444", html: "Depinde de Soare, de altitudine, de efectul de seră.", why: "Efectul de seră natural menține Pământul la +15 °C; <b>Arrhenius</b> (1896) a calculat că, prin dublarea CO₂, temperatura ar crește cu câteva grade, anticipând cu un secol problema climatică." },
        { id: "umid", label: "Umiditate și nori", x: 80, y: 64, color: "#0ea5e9", html: "Vaporii se condensează când se răcesc.", why: "Aerul mai cald conține mai mulți vapori: când urcă și se răcește, vaporii în exces se condensează și formează nori. Luke Howard i-a clasificat în 1803 cu numele latine folosite și astăzi." },
        { id: "prec", label: "Precipitații", x: 50, y: 82, color: "#14b8a6", html: "Ploaie, zăpadă, grindină.", why: "Se formează când picăturile devin suficient de grele ca să cadă; pot fi convective (furtuni), orografice (la munte) sau frontale." },
        { id: "fronti", label: "Fronturi și perturbații", x: 18, y: 84, color: "#a855f7", html: "Întâlnirea dintre mase de aer diferite.", why: "Teoria fronturilor a fost elaborată de școala norvegiană a lui <b>Vilhelm Bjerknes</b> în 1918–1922, printr-o analogie cu fronturile Primului Război Mondial." },
        { id: "clima", label: "Clima", x: 85, y: 90, color: "#64748b", html: "Media condițiilor pe cel puțin 30 de ani.", why: "Vremea este haotică și imprevizibilă dincolo de circa 10 zile (Lorenz), în timp ce clima este statistica pe termen lung, previzibilă în medie: de aceea poate fi studiată pe zeci de ani." }
      ],
      edges: [
        ["atm", "strati", "este împărțită în"],
        ["atm", "pres", "exercită"],
        ["pres", "vento", "generează"],
        ["temp", "pres", "modifică"],
        ["temp", "umid", "reglează"],
        ["umid", "prec", "produce"],
        ["fronti", "prec", "provoacă"],
        ["vento", "fronti", "aduce"],
        ["prec", "clima", "formează"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: vânt și nori",
      questions: [
        { type: "mc", q: "Vântul suflă…", options: ["de la presiuni ridicate spre presiuni scăzute", "de la presiuni scăzute spre presiuni ridicate", "mereu dinspre mare spre uscat"], answer: 0, explain: "Așa cum apa coboară de la un nivel mai înalt la unul mai jos." },
        { type: "num", q: "O umiditate absolută de 8,65 g/m³ la 20 °C (maxim 17,3 g/m³): care este umiditatea relativă?", answer: 50, unit: "%", explain: "8,65 / 17,3 = 0,5 → 50%." },
        { type: "tf", q: "Cumulonimbușii sunt nori care pot da furtuni și grindină.", answer: true, explain: "Sunt nori cu mare dezvoltare pe verticală." }
      ]
    }
  ],
  glossary: [
    { t: "Atmosfera", d: "Învelișul gazos care înconjoară Pământul." },
    { t: "Troposfera", d: "Stratul cel mai de jos, în care se dezvoltă fenomenele meteorologice." },
    { t: "Ozon", d: "Gaz (O₃) din stratosferă care absoarbe razele UV." },
    { t: "Presiunea atmosferică", d: "Forța aerului pe unitatea de suprafață: 1013 hPa la nivelul mării." },
    { t: "Izobară", d: "Linie care unește puncte cu aceeași presiune." },
    { t: "Anticiclon / ciclon", d: "Zonă de presiune ridicată (vreme senină) / de presiune scăzută (vreme instabilă)." },
    { t: "Umiditate relativă", d: "Raportul procentual dintre vaporii prezenți și vaporii maximi la acea temperatură." },
    { t: "Punct de rouă", d: "Temperatura la care aerul devine saturat și vaporii se condensează." },
    { t: "Front", d: "Suprafața de separare dintre două mase de aer diferite." },
    { t: "Vremea", d: "Starea atmosferei într-un loc și la un moment dat." },
    { t: "Clima", d: "Condițiile atmosferice medii ale unui loc, pe cel puțin 30 de ani." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este procentul de oxigen din aer?", options: ["Circa 21%", "Circa 78%", "Circa 50%"], answer: 0, explain: "Oxigenul este 20,95%; azotul 78%." },
      { type: "mc", q: "Unde se află stratul de ozon?", options: ["Troposfera", "Stratosfera", "Termosfera"], answer: 1, explain: "Între aproximativ 15 și 35 km." },
      { type: "num", q: "Cu câte °C scade temperatura urcând 2000 m în troposferă (6,5 °C/km)?", answer: 13, unit: "°C", explain: "2 × 6,5 = 13 °C." },
      { type: "mc", q: "Cine a măsurat primul presiunea atmosferică cu mercur?", options: ["Torricelli", "Galilei", "Newton"], answer: 0, explain: "Evangelista Torricelli, în 1643." },
      { type: "tf", q: "Într-un ciclon (presiune scăzută), vremea este în general instabilă.", answer: true, explain: "Aerul urcă, se condensează și formează nori și precipitații." },
      { type: "mc", q: "De ce se indică direcția vântului prin punctul de unde vine?", options: ["Este o convenție: vânt de nord = vine dinspre nord", "Pentru că vântul merge spre nord", "Pentru că este mai simplu"], answer: 0, explain: "Tramontana, de exemplu, suflă dinspre nord spre sud." },
      { type: "num", q: "Aerul la 25 °C conține 11,5 g/m³ de vapori; maximul la 25 °C este 23 g/m³. Care este umiditatea relativă?", answer: 50, unit: "%", explain: "11,5 / 23 = 50%." },
      { type: "order", q: "Ordonează straturile atmosferei de jos în sus.", items: ["Troposfera", "Stratosfera", "Mezosfera", "Termosfera"], explain: "De la sol spre spațiu." },
      { type: "text", q: "Cum se numește aparatul care măsoară presiunea?", answer: ["barometru", "barometrul", "un barometru"], explain: "Inventat de Torricelli în 1643." },
      { type: "mc", q: "Clima este…", options: ["starea atmosferei în acest moment", "media condițiilor atmosferice pe cel puțin 30 de ani", "temperatura maximă a zilei"], answer: 1, explain: "Vremea se schimbă din oră în oră; clima descrie comportamentul tipic al unui loc." }
    ]
  }
});
