TOPIC('ro', {
  id: `m3-tec-robotica`,
  title: `Robotică și automatizare`,
  intro: `Un braț mecanic care sudează mașini, un robot aspirator care ocolește canapeaua, un rover care explorează Marte, poarta care se deschide singură. Toate sunt sisteme <b>automate</b>: <b>percep</b> mediul cu ajutorul <b>senzorilor</b>, <b>decid</b> cu un <b>controler</b> și <b>acționează</b> cu <b>actuatoarele</b>. Să descoperim cum funcționează și cum „gândești" ca proiectant de roboți. 🦾🤖`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Automatizare și roboți: ce diferență este?`,
      html: `<p><b>Automatizarea</b> este folosirea mașinilor și a sistemelor de control pentru a îndeplini sarcini <b>fără intervenția continuă</b> a unei persoane: o mașină de spălat, un semafor, o linie de îmbuteliere.</p>
<p>Un <b>robot</b> este o mașină automată <b>programabilă</b> și <b>versatilă</b>: poate îndeplini sarcini diferite schimbând programul și adesea se mișcă în spațiu. Mașina de spălat este automată, dar face mereu același lucru; un braț robotic azi sudează, mâine vopsește sau ambalează.</p>
<p>Orice robot urmează ciclul <b>percepe ➜ prelucrează ➜ acționează</b> (în engleză <i>sense – think – act</i>):</p>
<ol>
<li><b>Senzorii</b>: culeg informații (distanță, lumină, contact, poziție…).</li>
<li><b>Controlerul</b>: un calculator sau microcontroler execută <b>programul</b> și decide ce să facă.</li>
<li><b>Actuatoarele</b>: transformă comanda în acțiune (motoare, pistoane, clești, lumini, difuzoare).</li>
</ol>
<p>Mai sunt necesare o <b>sursă de energie</b> (baterie, rețea electrică, aer comprimat) și o <b>structură mecanică</b> (șasiu, articulații, roți, angrenaje).</p>`
    },
    {
      type: `svg`, title: `Părțile unui robot mobil`,
      caption: `Senzori (ochi și urechi), controler (creier), actuatoare (mușchi), baterie (energie), structură (schelet).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f1f5f9"/>
<rect x="200" y="110" width="200" height="110" rx="16" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<rect x="250" y="135" width="100" height="45" rx="6" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="300" y="164" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">CPU</text>
<rect x="225" y="190" width="60" height="22" rx="4" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
<circle cx="230" cy="235" r="28" fill="#1e293b"/><circle cx="230" cy="235" r="10" fill="#64748b"/>
<circle cx="370" cy="235" r="28" fill="#1e293b"/><circle cx="370" cy="235" r="10" fill="#64748b"/>
<rect x="395" y="125" width="40" height="40" rx="6" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>
<circle cx="415" cy="137" r="7" fill="#e0f2fe"/><circle cx="415" cy="155" r="7" fill="#e0f2fe"/>
<line x1="300" y1="110" x2="300" y2="70" stroke="#334155" stroke-width="4"/>
<circle cx="300" cy="62" r="10" fill="#ef4444"/>
<rect x="160" y="140" width="40" height="18" rx="4" fill="#f97316" stroke="#7c2d12" stroke-width="2"/>
<g font-size="15" font-weight="bold">
<text x="470" y="140" fill="#1e40af">senzor cu</text><text x="470" y="160" fill="#1e40af">ultrasunete</text>
<text x="330" y="55" fill="#b91c1c">LED de stare</text>
<text x="300" y="30" fill="#166534" text-anchor="middle">controler = „creier"</text>
<text x="20" y="150" fill="#9a3412">senzor de</text><text x="20" y="170" fill="#9a3412">contact</text>
<text x="20" y="250" fill="#0f172a">motoare + roți</text><text x="20" y="270" fill="#0f172a">(actuatoare)</text>
<text x="430" y="250" fill="#854d0e">baterie</text>
</g>
<line x1="300" y1="36" x2="300" y2="50" stroke="#166534" stroke-width="2"/>
<line x1="465" y1="145" x2="437" y2="145" stroke="#1e40af" stroke-width="2"/>
<line x1="105" y1="155" x2="158" y2="150" stroke="#9a3412" stroke-width="2"/>
<line x1="135" y1="255" x2="200" y2="240" stroke="#0f172a" stroke-width="2"/>
<line x1="428" y1="245" x2="288" y2="205" stroke="#854d0e" stroke-width="2"/>
</svg>`
    },
    {
      type: `text`, title: `2. Senzorii: simțurile robotului`,
      html: `<table>
<tr><th>Senzor</th><th>Ce măsoară</th><th>Exemplu de utilizare</th></tr>
<tr><td>Limitator de cursă / buton</td><td>contact (da/nu)</td><td>robotul aspirator se lovește de un mobilier</td></tr>
<tr><td>Ultrasunete</td><td>distanța, prin ecou (ca liliecii)</td><td>evitarea obstacolelor</td></tr>
<tr><td>Infraroșu</td><td>reflexia luminii IR, apropierea</td><td>urmărirea unei linii negre, senzor de protecție la căderea pe scări</td></tr>
<tr><td>Encoder</td><td>cât s-a rotit un motor</td><td>a ști cu câți cm s-a deplasat</td></tr>
<tr><td>Giroscop / accelerometru</td><td>rotație, înclinare</td><td>drone și roboți care își mențin echilibrul</td></tr>
<tr><td>Cameră</td><td>imagini</td><td>recunoașterea obiectelor (cu IA)</td></tr>
<tr><td>LiDAR</td><td>distanțe cu impulsuri laser, hartă 3D</td><td>mașini cu conducere autonomă, rovere</td></tr>
</table>`
    },
    {
      type: `text`, title: `3. Actuatoarele: mușchii robotului`,
      html: `<ul>
<li><b>Motorul de curent continuu (DC)</b>: se rotește rapid cât timp este alimentat; pentru roți și ventilatoare. Are adesea un <b>reductor</b> (angrenaje) care scade viteza și mărește forța.</li>
<li><b>Servomotorul</b>: se rotește până la un <b>unghi precis</b> (de exemplu de la 0° la 180°) și îl menține; pentru brațe, cârme, clești.</li>
<li><b>Motorul pas cu pas</b> (stepper): avansează în <b>pași</b> preciși (ex. 200 de pași = 1 rotație, adică 1,8° pe pas); pentru imprimante 3D și mașini CNC.</li>
<li><b>Pistoane pneumatice</b> (aer comprimat) și <b>hidraulice</b> (ulei): forțe mari, pentru prese și excavatoare.</li>
<li><b>Electrovalve, relee</b>: deschid și închid fluxuri de apă, aer sau curent.</li>
<li>Și <b>LED-urile, ecranele și difuzoarele</b> sunt actuatoare: „acționează" comunicând.</li>
</ul>
<p><b>Grade de libertate</b> (GdL): numărul de mișcări independente pe care le poate face un robot. Un braț industrial obișnuit are <b>6 grade de libertate</b> (6 articulații care se rotesc): poate duce unealta în orice poziție și cu orice orientare în spațiul său de lucru. Brațul uman, de la umăr la încheietură, are 7.</p>`
    },
    {
      type: `3d`, title: `Un braț robotic cu articulații`,
      scene: `molecule`,
      options: {
        atoms: [
          { x: 0, y: -1.8, z: 0, r: 0.55, color: `#475569`, label: `bază (rotație)` },
          { x: 0, y: -1.0, z: 0, r: 0.35, color: `#f97316`, label: `umăr` },
          { x: 0.9, y: 0.2, z: 0, r: 0.3, color: `#f97316`, label: `cot` },
          { x: 1.9, y: 0.6, z: 0.3, r: 0.25, color: `#f97316`, label: `încheietură` },
          { x: 2.5, y: 0.9, z: 0.4, r: 0.2, color: `#3b82f6`, label: `clește (end effector)` },
          { x: 2.6, y: 0.3, z: 0.5, r: 0.18, color: `#22c55e`, label: `obiect` }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4]]
      },
      caption: `Fiecare sferă portocalie este o articulație mișcată de un servomotor. Rotește scena: baza se rotește, umărul și cotul ridică brațul, încheietura orientează cleștele.`
    },
    {
      type: `quiz`, title: `Mini-test: senzor sau actuator?`,
      questions: [
        { type: `mc`, q: `Un servomotor este…`, options: [`un senzor`, `un actuator`, `o baterie`], answer: 1, explain: `Servomotorul produce mișcare: este un actuator.` },
        { type: `mc`, q: `Care senzor măsoară distanța prin ecou?`, options: [`Ultrasunete`, `Termistor`, `Microfon`], answer: 0, explain: `Senzorul cu ultrasunete emite un sunet și măsoară cât timp îi ia ecoului să se întoarcă.` },
        { type: `num`, q: `Un motor pas cu pas face 200 de pași pe rotație. Cu câte grade se rotește la fiecare pas?`, answer: 1.8, tol: 0.01, unit: `°`, explain: `360° ÷ 200 = 1,8°.` }
      ]
    },
    {
      type: `widget`, title: `Joc: senzori, controlere, actuatoare`,
      widget: `classify`,
      options: {
        groups: [`Senzor 👁️`, `Controler 🧠`, `Actuator 💪`],
        items: [
          [`📏 senzor cu ultrasunete`, 0], [`📷 cameră`, 0], [`🌡️ termistor`, 0], [`🔘 limitator de cursă`, 0],
          [`🖥️ microcontroler (Arduino)`, 1], [`🏭 PLC de fabrică`, 1],
          [`⚙️ motor DC`, 2], [`🦾 servomotor`, 2], [`🔧 piston pneumatic`, 2], [`🔊 difuzor`, 2]
        ]
      },
      caption: `Ține minte ciclul: percepe (senzor) ➜ prelucrează (controler) ➜ acționează (actuator).`
    },
    {
      type: `text`, title: `4. Controlul: în buclă deschisă și în buclă închisă`,
      html: `<p><b>Buclă deschisă</b> (<i>open loop</i>): controlerul dă comanda și <b>nu verifică rezultatul</b>. Exemplu: prăjitorul de pâine cu temporizator. Dacă pâinea e mai groasă, iese puțin prăjită: prăjitorul nu știe.</p>
<p><b>Buclă închisă</b> (<i>closed loop</i>, cu <b>reacție</b> sau <i>feedback</i>): un senzor <b>măsoară rezultatul</b>, iar controlerul îl compară cu <b>obiectivul</b> (<i>set-point</i>-ul), corectând continuu. Exemplu: <b>termostatul</b>. Obiectiv 20 °C ➜ senzorul măsoară 18 °C ➜ pornește centrala ➜ când ajunge la 20 °C o oprește.</p>
<p>Controlul poate fi:</p>
<ul>
<li><b>ON/OFF</b> (tot sau nimic): simplu, dar valoarea „oscilează" deasupra și dedesubtul obiectivului;</li>
<li><b>proporțional</b>: cu cât ești mai departe de obiectiv, cu atât corecția este mai puternică (ca atunci când frânezi ușor apropiindu-te de stop). Sistemele industriale folosesc adesea controlul <b>PID</b>, o dezvoltare a acestei idei.</li>
</ul>`
    },
    {
      type: `svg`, title: `Schemă bloc: buclă închisă`,
      caption: `Senzorul „închide bucla": rezultatul se întoarce și este comparat cu obiectivul.`,
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<rect x="15" y="70" width="95" height="56" rx="10" fill="#a855f7"/>
<text x="62" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Obiectiv</text>
<text x="62" y="115" font-size="13" fill="#fff" text-anchor="middle">20 °C</text>
<circle cx="150" cy="98" r="20" fill="#fff" stroke="#0f172a" stroke-width="3"/>
<text x="150" y="105" font-size="20" text-anchor="middle" fill="#0f172a">−</text>
<rect x="200" y="70" width="110" height="56" rx="10" fill="#22c55e"/>
<text x="255" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Controler</text>
<text x="255" y="115" font-size="12" fill="#fff" text-anchor="middle">decide</text>
<rect x="340" y="70" width="110" height="56" rx="10" fill="#f97316"/>
<text x="395" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Actuator</text>
<text x="395" y="115" font-size="12" fill="#fff" text-anchor="middle">centrala</text>
<rect x="480" y="70" width="105" height="56" rx="10" fill="#ef4444"/>
<text x="532" y="96" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Mediu</text>
<text x="532" y="115" font-size="12" fill="#fff" text-anchor="middle">camera</text>
<rect x="320" y="180" width="140" height="50" rx="10" fill="#3b82f6"/>
<text x="390" y="211" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Senzor 🌡️</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<line x1="110" y1="98" x2="130" y2="98"/><line x1="170" y1="98" x2="198" y2="98"/><line x1="310" y1="98" x2="338" y2="98"/><line x1="450" y1="98" x2="478" y2="98"/>
<polyline points="532,126 532,205 462,205"/><polyline points="320,205 150,205 150,118"/>
</g>
<text x="160" y="60" font-size="13" fill="#0f172a">eroare</text>
<text x="230" y="245" font-size="13" fill="#1e40af" font-weight="bold">reacție (feedback): măsurătoare reală 18 °C</text>
</svg>`
    },
    {
      type: `text`, title: `5. Programăm un robot: exemplul robotului urmăritor de linie`,
      html: `<p>Un robot <b>urmăritor de linie</b> are doi senzori cu infraroșu sub bot, unul în stânga și unul în dreapta, și două motoare. Linia neagră absoarbe lumina IR, podeaua albă o reflectă. Programul (în <b>pseudocod</b>) este o buclă infinită:</p>
<pre>REPETĂ PENTRU TOTDEAUNA
  DACĂ stânga vede alb ȘI dreapta vede alb
     ATUNCI mergi drept (motoare egale)
  ALTFEL DACĂ stânga vede negru
     ATUNCI virează la stânga (încetinește motorul stâng)
  ALTFEL DACĂ dreapta vede negru
     ATUNCI virează la dreapta (încetinește motorul drept)
SFÂRȘIT REPETĂ</pre>
<p>Robotul citește senzorii de zeci de ori pe secundă: este o mică <b>buclă închisă</b>. Cu Scratch, mBlock sau programarea pe blocuri din Arduino se construiește exact așa, cu blocuri <b>„pentru totdeauna"</b> și <b>„dacă… atunci… altfel"</b>.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: robotul aspirator`,
      html: `<ul>
<li><b>Senzori</b>: bară de protecție cu limitatoare de cursă (lovituri), infraroșu anti-cădere (scări), encodere pe roți, uneori LiDAR sau cameră pentru a face <b>harta</b> casei.</li>
<li><b>Controler</b>: decide traseul, ține minte zonele deja curățate, se întoarce la bază când bateria e descărcată.</li>
<li><b>Actuatoare</b>: două motoare pentru roți, motorul periei, ventilatorul de aspirare.</li>
</ul>
<p>Când bateria scade sub un prag (de exemplu 15%), programul schimbă obiectivul: „întoarce-te la bază". Este un exemplu de <b>decizie bazată pe senzori</b>.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: fabrica automată (Industria 4.0)`,
      html: `<p>Într-o fabrică de mașini caroseria circulă pe o bandă transportoare. Un senzor fotoelectric o detectează ➜ <b>PLC</b>-ul (controlerul logic programabil, „calculatorul robust" al fabricilor) oprește banda ➜ șase brațe robotice sudează sute de puncte în câteva secunde ➜ o cameră verifică calitatea ➜ banda repornește.</p>
<p>Cu <b>Industria 4.0</b> mașinile sunt conectate în rețea, trimit date în timp real și anunță singure când este nevoie de întreținere. Alături de roboții clasici, închiși în cuști de siguranță, există <b>cobotii</b> (roboți colaborativi), proiectați să lucreze lângă oameni și să se oprească dacă îi ating.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… cuvântul „robot" vine dintr-o piesă de teatru?`,
      html: `<p>În <b>1920</b> scriitorul ceh <b>Karel Čapek</b> a scris drama <i>R.U.R. (Rossum's Universal Robots)</i>, în care o fabrică produce muncitori artificiali. Cuvântul <b>robot</b> i l-a sugerat fratele său Josef: vine din ceha <i>robota</i>, „muncă forțată". În 1942 scriitorul <b>Isaac Asimov</b> a inventat celebrele <b>Trei legi ale roboticii</b> (prima: un robot nu poate face rău unei ființe umane). Primul robot industrial, <b>Unimate</b>, a intrat într-o fabrică General Motors în <b>1961</b>.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… Leonardo a proiectat un robot, iar Italia are unul celebru?`,
      html: `<p>În jurul anului <b>1495</b> <b>Leonardo da Vinci</b> a desenat un <b>cavaler mecanic</b> în armură, mișcat de scripeți și cabluri, capabil să se ridice și să miște brațele și capul. În 2002 un inginer de la NASA l-a reconstruit: funcționa! Astăzi, la <b>Institutul Italian de Tehnologie</b> din Genova a fost dezvoltat <b>iCub</b>, un robot umanoid cât un copil de 4 ani, folosit în toată lumea pentru a studia cum se învață.</p>`
    },
    {
      type: `remember`, title: `De ținut minte`,
      html: `<ul>
<li>Robot = mașină automată <b>programabilă</b>: senzori ➜ controler ➜ actuatoare.</li>
<li>Senzori: contact, ultrasunete, infraroșu, encoder, giroscop, cameră, LiDAR.</li>
<li>Actuatoare: motoare DC, servomotoare, pas cu pas, pistoane, relee.</li>
<li>Buclă deschisă: fără controlul rezultatului. Buclă închisă: <b>reacție</b> cu un senzor.</li>
<li>Grade de libertate = mișcări independente (un braț industrial are de obicei 6).</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Roboții sunt mai ușor de înțeles dacă îi comparăm cu ceva ce cunoaștem deja.`,
      tabs: [
        {
          label: `🧍 Corpul uman`,
          html: `<p>Și tu ești un „sistem în buclă închisă"!</p>
<ul>
<li><b>Senzori</b> = ochi, urechi, piele, urechea internă pentru echilibru.</li>
<li><b>Controler</b> = creierul și măduva spinării.</li>
<li><b>Actuatoare</b> = mușchii.</li>
<li><b>Fire</b> = nervii; <b>energie</b> = hrana.</li>
</ul>
<p>Când iei un pahar, ochii controlează continuu mâna, iar creierul corectează mișcarea: este reacție. Încearcă să-l iei cu ochii închiși: devine o buclă deschisă și este mult mai greu!</p>`
        },
        {
          label: `🚿 Dușul`,
          html: `<p>Reglarea temperaturii la duș este un control în buclă închisă făcut de tine:</p>
<ol>
<li><b>Obiectiv</b>: apă călduță.</li>
<li><b>Senzor</b>: mâna ta simte apa prea rece.</li>
<li><b>Controler</b>: creierul decide „mai caldă".</li>
<li><b>Actuator</b>: mâna rotește bateria de duș.</li>
<li>Se reia: măsoară, compară, corectează.</li>
</ol>
<p>Dacă rotești prea brusc, apa devine fierbinte, apoi rotești prea mult în cealaltă parte… este <b>oscilația</b> controlului ON/OFF. Dacă rotești puțin câte puțin, faci un control <b>proporțional</b>.</p>`
        },
        {
          label: `🏷️ Recunoaște părțile`,
          html: `<p>Atinge punctele robotului și alege partea potrivită.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><rect x="110" y="110" width="180" height="100" rx="14" fill="#94a3b8" stroke="#334155" stroke-width="4"/><rect x="160" y="130" width="80" height="40" rx="6" fill="#22c55e"/><rect x="150" y="180" width="50" height="20" rx="4" fill="#facc15"/><circle cx="140" cy="225" r="26" fill="#1e293b"/><circle cx="260" cy="225" r="26" fill="#1e293b"/><rect x="290" y="130" width="36" height="36" rx="6" fill="#3b82f6"/><rect x="74" y="140" width="36" height="16" rx="4" fill="#f97316"/></svg>`,
            spots: [
              { x: 200, y: 150, label: `Controler` },
              { x: 308, y: 148, label: `Senzor cu ultrasunete` },
              { x: 140, y: 225, label: `Roată cu motor` },
              { x: 175, y: 190, label: `Baterie` },
              { x: 92, y: 148, label: `Senzor de contact` }
            ]
          }
        },
        {
          label: `🧩 Potrivește robotul cu sarcina`,
          html: `<p>Fiecare robot este proiectat pentru o sarcină: leagă cele două elemente.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Braț industrial cu 6 axe`, `sudarea caroseriilor de mașini`],
            [`Roverul Perseverance`, `explorează Marte din 2021`],
            [`Robot aspirator`, `curăță casa ocolind obstacolele`],
            [`Cobot`, `lucrează alături de oameni`],
            [`Dronă`, `filmează și inspectează de sus`],
            [`Robot chirurgical`, `ajută medicul în operații precise`]
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta: robotica`,
      nodes: [
        { id: `rob`, label: `Robot`, x: 50, y: 8, color: `#64748b`, html: `Mașină automată programabilă.`, why: `Cuvântul apare în 1920 cu Karel Čapek (din ceha <i>robota</i>, muncă forțată). Ideea de mașini care se mișcă singure este veche: încă Heron din Alexandria (secolul I d.Hr.) a descris automate cu abur și contragreutăți.` },
        { id: `sens`, label: `Senzori`, x: 15, y: 32, color: `#3b82f6`, html: `Percep mediul.`, why: `Mulți senzori imită natura: ultrasunetele copiază ecolocația liliecilor; camera, ochiul. Transformă o mărime fizică într-un semnal electric.` },
        { id: `ctrl`, label: `Controler`, x: 50, y: 32, color: `#22c55e`, html: `Execută programul și decide.`, why: `Din anii '70 microprocesoarele (primul, Intel 4004 din 1971, al cărui proiect a fost condus de italianul Federico Faggin) au făcut controlerele mici și ieftine. În 1968 a apărut PLC-ul pentru fabrici.` },
        { id: `att`, label: `Actuatoare`, x: 85, y: 32, color: `#f97316`, html: `Motoare, servomotoare, pistoane: produc acțiunea.`, why: `Motorul electric se bazează pe electromagnetismul descoperit de Ørsted (1820) și Faraday (1821): un curent într-un câmp magnetic produce o forță.` },
        { id: `ciclo`, label: `Percepe-prelucrează-acționează`, x: 50, y: 55, color: `#a855f7`, html: `Ciclul care se repetă continuu.`, why: `Este schema de bază a oricărui sistem inteligent, natural sau artificial: și un animal percepe, decide și se mișcă.` },
        { id: `feed`, label: `Reacția (feedback)`, x: 20, y: 78, color: `#ef4444`, html: `Senzorul măsoară rezultatul și îl compară cu obiectivul.`, why: `Unul dintre primele exemple a fost <b>regulatorul centrifugal</b> al mașinii cu abur a lui James Watt (1788). În 1948 Norbert Wiener a întemeiat <b>cibernetica</b>, știința controlului și a comunicării la animale și la mașini.` },
        { id: `gdl`, label: `Grade de libertate`, x: 50, y: 82, color: `#eab308`, html: `Mișcările independente ale robotului.`, why: `Un corp rigid în spațiu are 6 grade de libertate (3 deplasări + 3 rotații): de aceea un braț cu 6 articulații poate atinge orice poziție și orientare în spațiul său de lucru.` },
        { id: `auto`, label: `Automatizare și Industria 4.0`, x: 82, y: 78, color: `#0ea5e9`, html: `Fabrici cu mașini conectate în rețea.`, why: `După mecanizare (aburul), electricitate și informatică, „a patra revoluție industrială" conectează mașini, senzori și date prin Internet. Termenul Industrie 4.0 s-a născut în Germania în 2011.` }
      ],
      edges: [
        [`rob`, `sens`, `are`], [`rob`, `ctrl`, `are`], [`rob`, `att`, `are`], [`sens`, `ciclo`, `percepe`], [`ctrl`, `ciclo`, `prelucrează`], [`att`, `ciclo`, `acționează`],
        [`ciclo`, `feed`, `cu`], [`att`, `gdl`, `definesc`], [`rob`, `auto`, `în fabrică`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: control și programare`,
      questions: [
        { type: `mc`, q: `Un prăjitor de pâine cu temporizator este un sistem…`, options: [`în buclă deschisă`, `în buclă închisă`], answer: 0, explain: `Nu măsoară cât de prăjită este pâinea: buclă deschisă.` },
        { type: `mc`, q: `La robotul urmăritor de linie, dacă senzorul drept vede linia neagră, robotul trebuie să…`, options: [`vireze la dreapta`, `vireze la stânga`, `se oprească pentru totdeauna`], answer: 0, explain: `Linia se deplasează spre dreapta: robotul virează la dreapta ca s-o urmeze.` },
        { type: `tf`, q: `Termostatul de acasă folosește reacția.`, answer: true, explain: `Măsoară temperatura și o compară cu cea dorită.` }
      ]
    }
  ],
  glossary: [
    { t: `Robot`, d: `Mașină automată programabilă care percepe, prelucrează și acționează.` },
    { t: `Automatizare`, d: `Folosirea mașinilor și a controalelor pentru a îndeplini sarcini fără intervenție umană continuă.` },
    { t: `Senzor`, d: `Dispozitiv care detectează o mărime fizică și o transformă în semnal.` },
    { t: `Actuator`, d: `Dispozitiv care transformă o comandă în acțiune (motor, piston…).` },
    { t: `Controler`, d: `Calculator, microcontroler sau PLC care execută programul.` },
    { t: `Reacție (feedback)`, d: `Rezultatul este măsurat și folosit pentru a corecta acțiunea.` },
    { t: `Servomotor`, d: `Motor care se rotește până la un unghi precis și îl menține.` },
    { t: `Grade de libertate`, d: `Numărul de mișcări independente ale unui mecanism.` },
    { t: `PLC`, d: `Controler logic programabil, folosit în fabrici.` },
    { t: `Cobot`, d: `Robot colaborativ, proiectat să lucreze lângă oameni.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `order`, q: `Pune în ordine ciclul de funcționare al unui robot.`, items: [`Senzorul percepe`, `Controlerul prelucrează`, `Actuatorul acționează`], explain: `Percepe ➜ prelucrează ➜ acționează.` },
      { type: `mc`, q: `Ce deosebește un robot de o simplă mașină automată?`, options: [`Este mai mare`, `Este programabil pentru sarcini diferite`, `Funcționează cu baterie`], answer: 1, explain: `Robotul este versatil și reprogramabil.` },
      { type: `mc`, q: `Ce actuator folosește o imprimantă 3D pentru mișcări foarte precise?`, options: [`Motor pas cu pas`, `Piston hidraulic`, `Difuzor`], answer: 0, explain: `Stepper-ul avansează în pași cu un unghi cunoscut.` },
      { type: `num`, q: `Un servomotor merge de la 0° la 180°. Dacă este la jumătatea cursei, la câte grade se află?`, answer: 90, tol: 0, unit: `°`, explain: `180 ÷ 2 = 90°.` },
      { type: `num`, q: `Un motor se rotește cu 3000 de rotații pe minut. Cu un reductor 1:50, câte rotații pe minut face roata?`, answer: 60, tol: 0, unit: `rot/min`, explain: `3000 ÷ 50 = 60 de rotații pe minut (dar cu o forță de 50 de ori mai mare).` },
      { type: `tf`, q: `Într-un sistem în buclă deschisă rezultatul este măsurat și corectat.`, answer: false, explain: `Aceasta este bucla închisă; bucla deschisă nu controlează rezultatul.` },
      { type: `tf`, q: `Un braț industrial obișnuit are 6 grade de libertate.`, answer: true, explain: `6 articulații: 3 pentru poziție și 3 pentru orientarea uneltei.` },
      { type: `text`, q: `Din ce limbă vine cuvântul „robot"?`, answer: [`ceha`, `cehă`, `din ceha`, `din cehă`, `limba ceha`, `limba cehă`, `ceh`], explain: `Din ceha robota (muncă forțată), în drama R.U.R. de Karel Čapek (1920).` },
      { type: `mc`, q: `La ce servește senzorul anti-cădere al unui robot aspirator?`, options: [`Să nu cadă pe scări`, `Să măsoare praful`, `Să reîncarce bateria`], answer: 0, explain: `Un senzor cu infraroșu orientat în jos detectează golul.` },
      { type: `mc`, q: `Ce este un cobot?`, options: [`Un robot-jucărie`, `Un robot care lucrează în siguranță alături de oameni`, `Un robot submarin`], answer: 1, explain: `Cobot = collaborative robot (robot colaborativ).` },
      { type: `mc`, q: `Care exemplu este un control în buclă închisă?`, options: [`Tempomatul care menține viteza mașinii`, `Un cronometru de bucătărie`, `Un ventilator cu întrerupător`], answer: 0, explain: `Tempomatul măsoară viteza și corectează accelerația.` },
      { type: `text`, q: `Care geniu italian a desenat un cavaler mecanic în jurul anului 1495?`, answer: [`leonardo`, `leonardo da vinci`], explain: `Leonardo da Vinci.` }
    ]
  }
});
