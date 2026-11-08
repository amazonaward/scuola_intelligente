TOPIC('ro', {
  id: `m3-tec-elettricita-elettronica`,
  title: `Electricitate și electronică`,
  intro: `Aprinzi lumina, încarci telefonul, mașina de spălat pornește singură la sfârșitul programului: totul datorită <b>electricității</b> și <b>electronicii</b>. În această lecție descoperim ce este curentul electric, cum se construiește un <b>circuit</b>, <b>legea lui Ohm</b>, principalele <b>componente</b> (rezistoare, LED-uri, diode, condensatoare, tranzistoare) și <b>senzorii</b> care permit mașinilor să „simtă" lumea. ⚡🔌`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. De unde vine electricitatea: sarcini și electroni`,
      html: `<p>Toată materia este alcătuită din <b>atomi</b>. Fiecare atom are un <b>nucleu</b> cu <b>protoni</b> (sarcină pozitivă +) și neutroni (fără sarcină), iar în jur <b>electronii</b> (sarcină negativă −).</p>
<p>În <b>metale</b> (cupru, aluminiu, argint…) electronii cei mai exteriori sunt legați slab: se pot deplasa de la un atom la altul. Se numesc <b>electroni liberi</b>.</p>
<p><b>Curentul electric</b> este un <b>flux ordonat de sarcini electrice</b> (în firele metalice: electroni) care se mișcă într-un <b>circuit închis</b>.</p>
<ul>
<li><b>Conductoare</b>: lasă curentul să treacă ușor (metale, grafit, apă sărată, corpul uman!).</li>
<li><b>Izolatoare</b>: îl blochează (plastic, cauciuc, sticlă, lemn uscat, ceramică, aer).</li>
<li><b>Semiconductoare</b>: la mijloc; conductibilitatea lor poate fi controlată (siliciu, germaniu). Sunt baza <b>electronicii</b>.</li>
</ul>`
    },
    {
      type: `3d`, title: `Atomii unui conductor și ai unui semiconductor`,
      scene: `atom`,
      options: { elements: [`Cu`, `Al`, `Si`] },
      caption: `Cuprul (Cu) are un singur electron pe stratul cel mai exterior, ușor de „desprins": de aceea este un conductor excelent. Siliciul (Si) are 4: este un semiconductor.`
    },
    {
      type: `text`, title: `2. Cele trei mărimi: tensiune, curent, rezistență`,
      html: `<p>Gândește-te la un circuit ca la o <b>instalație de apă</b>:</p>
<table>
<tr><th>Mărime</th><th>Simbol</th><th>Unitate</th><th>Instrument</th><th>Analogia cu apa</th></tr>
<tr><td><b>Tensiune</b> (diferență de potențial)</td><td>V</td><td>volt (V)</td><td>voltmetru</td><td><b>presiunea</b> / diferența de nivel care împinge apa</td></tr>
<tr><td><b>Intensitatea curentului</b></td><td>I</td><td>amper (A)</td><td>ampermetru</td><td>cât de multă apă trece <b>în fiecare secundă</b></td></tr>
<tr><td><b>Rezistență</b></td><td>R</td><td>ohm (Ω)</td><td>ohmmetru</td><td>o <b>țeavă îngustă</b> care frânează curgerea</td></tr>
</table>
<p>Un <b>multimetru</b> (sau tester) le măsoară pe toate trei.</p>
<p>Valori utile: o baterie AA = <b>1,5 V</b>; un acumulator de mașină = <b>12 V</b>; portul USB = <b>5 V</b>; priza de acasă = <b>230 V</b> alternativ la <b>50 Hz</b> (periculos!).</p>`
    },
    {
      type: `text`, title: `3. Legea lui Ohm și puterea`,
      html: `<p>În <b>1827</b> fizicianul german <b>Georg Simon Ohm</b> a descoperit că în multe conductoare tensiunea și curentul sunt <b>direct proporționale</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>V = R × I</b></p>
<p>și deci: <b>I = V ÷ R</b> și <b>R = V ÷ I</b>.</p>
<p>Exemplu: o rezistență de <b>100 Ω</b> conectată la <b>5 V</b> ➜ I = 5 ÷ 100 = <b>0,05 A</b> = 50 mA (miliamperi).</p>
<p><b>Puterea electrică</b> (cât de multă energie se folosește în fiecare secundă) se măsoară în <b>wați (W)</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>P = V × I</b></p>
<p>Exemplu: un uscător de păr la 230 V care absoarbe 8 A are puterea 230 × 8 = <b>1840 W</b>. Energia consumată se plătește în <b>kilowați-oră (kWh)</b>: 1 kW folosit timp de 1 oră.</p>`
    },
    {
      type: `quiz`, title: `Mini-test: mărimi și legea lui Ohm`,
      questions: [
        { type: `mc`, q: `În ce unitate se măsoară rezistența?`, options: [`volt`, `amper`, `ohm`], answer: 2, explain: `Rezistența se măsoară în ohmi (Ω), în onoarea lui Georg Ohm.` },
        { type: `num`, q: `O rezistență de 10 Ω este conectată la o baterie de 9 V. Câți amperi trec?`, answer: 0.9, tol: 0.01, unit: `A`, explain: `I = V ÷ R = 9 ÷ 10 = 0,9 A.` },
        { type: `tf`, q: `Plasticul este un bun conductor.`, answer: false, explain: `Plasticul este un izolator: de aceea acoperă firele electrice.` }
      ]
    },
    {
      type: `text`, title: `4. Circuitul electric: serie și paralel`,
      html: `<p>Un circuit elementar are întotdeauna:</p>
<ol>
<li>un <b>generator</b> (baterie, acumulator, alimentator) care furnizează tensiunea;</li>
<li><b>conductoare</b> (fire) care duc curentul;</li>
<li>un <b>consumator</b> (bec, motor, LED) care transformă energia electrică în lumină, mișcare, căldură…;</li>
<li>un <b>întrerupător</b> pentru a deschide sau închide circuitul.</li>
</ol>
<p>Curentul circulă numai dacă circuitul este <b>închis</b>. Prin convenție se spune că merge de la <b>+</b> la <b>−</b> (sensul convențional), deși electronii se mișcă în sens invers!</p>
<p><b>Legarea în serie</b>: componentele sunt una după alta, pe un singur drum. Curentul este același prin toate; dacă se arde un bec, se sting toate (ca vechile instalații de brad de Crăciun). Rezistențele se adună: R<sub>tot</sub> = R<sub>1</sub> + R<sub>2</sub>.</p>
<p><b>Legarea în paralel</b>: fiecare componentă are ramura ei. Tensiunea este aceeași pe toate; dacă se arde un bec, celelalte rămân aprinse. Așa sunt legate prizele din casă.</p>`
    },
    {
      type: `svg`, title: `Schemă: circuit în serie și în paralel`,
      caption: `În stânga două becuri în serie (un singur drum); în dreapta în paralel (două ramuri). Simboluri unificate: baterie, întrerupător, bec.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="28" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle">SERIE</text>
<text x="450" y="28" font-size="18" font-weight="bold" fill="#166534" text-anchor="middle">PARALEL</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<polyline points="40,150 40,60 105,60"/><polyline points="135,60 260,60 260,95"/><line x1="260" y1="145" x2="260" y2="175"/><polyline points="260,225 260,250 40,250 40,180"/>
<line x1="105" y1="60" x2="130" y2="45"/>
<line x1="20" y1="150" x2="60" y2="150"/><line x1="28" y1="180" x2="52" y2="180"/>
<circle cx="260" cy="120" r="22"/><line x1="245" y1="105" x2="275" y2="135"/><line x1="275" y1="105" x2="245" y2="135"/>
<circle cx="260" cy="200" r="22"/><line x1="245" y1="185" x2="275" y2="215"/><line x1="275" y1="185" x2="245" y2="215"/>
</g>
<circle cx="105" cy="60" r="4" fill="#0f172a"/><circle cx="135" cy="60" r="4" fill="#0f172a"/>
<text x="70" y="145" font-size="16" fill="#dc2626" font-weight="bold">+</text>
<text x="70" y="195" font-size="16" fill="#2563eb" font-weight="bold">−</text>
<text x="120" y="88" font-size="13" fill="#334155" text-anchor="middle">întrerupător</text>
<text x="100" y="170" font-size="13" fill="#334155" text-anchor="middle">baterie</text>
<g stroke="#0f172a" stroke-width="3" fill="none">
<polyline points="340,150 340,60 560,60 560,98"/><polyline points="460,60 460,98"/>
<polyline points="460,142 460,250"/><polyline points="560,142 560,250 340,250 340,180"/>
<line x1="320" y1="150" x2="360" y2="150"/><line x1="328" y1="180" x2="352" y2="180"/>
<circle cx="460" cy="120" r="22"/><line x1="445" y1="105" x2="475" y2="135"/><line x1="475" y1="105" x2="445" y2="135"/>
<circle cx="560" cy="120" r="22"/><line x1="545" y1="105" x2="575" y2="135"/><line x1="575" y1="105" x2="545" y2="135"/>
</g>
<circle cx="460" cy="60" r="5" fill="#0f172a"/><circle cx="460" cy="250" r="5" fill="#0f172a"/>
<text x="370" y="145" font-size="16" fill="#dc2626" font-weight="bold">+</text>
<text x="370" y="195" font-size="16" fill="#2563eb" font-weight="bold">−</text>
<text x="510" y="200" font-size="13" fill="#166534" text-anchor="middle">2 ramuri</text>
<text x="300" y="285" font-size="14" fill="#334155" text-anchor="middle">⊗ = bec · linie lungă/scurtă = baterie (+/−) · ● = nod</text>
</svg>`
    },
    {
      type: `text`, title: `5. De la electricitate la electronică: componentele`,
      html: `<p><b>Electrotehnica</b> folosește electricitatea ca <b>energie</b> (motoare, sobe, lumini). <b>Electronica</b> o folosește pentru a <b>controla</b> și a transporta <b>informații</b> (calculatoare, telefoane, senzori). Componentele principale:</p>
<ul>
<li><b>Rezistorul</b>: limitează curentul. Valoarea este scrisă cu <b>inele colorate</b> (ex. maro-negru-roșu = 1000 Ω = 1 kΩ).</li>
<li><b>Dioda</b>: lasă curentul să treacă <b>într-un singur sens</b>, ca o supapă de sens unic.</li>
<li><b>LED-ul</b> (Light Emitting Diode): o diodă care <b>emite lumină</b>. Are un picior lung (+, anod) și unul scurt (−, catod) și trebuie protejat mereu cu o <b>rezistență</b>, altfel se arde.</li>
<li><b>Condensatorul</b>: acumulează pentru o clipă sarcini electrice și le eliberează (ca un mic rezervor): folosește la filtrare, la temporizare, la blițul aparatului foto.</li>
<li><b>Tranzistorul</b>: un întrerupător sau amplificator <b>comandat electric</b>, fără piese în mișcare. Un procesor modern conține <b>miliarde</b> de tranzistoare.</li>
<li><b>Circuitul integrat</b> (cip): multe componente miniaturizate pe o plăcuță de siliciu.</li>
</ul>`
    },
    {
      type: `text`, title: `6. Senzorii: „organele de simț" ale circuitelor`,
      html: `<p>Un <b>senzor</b> transformă o mărime fizică (lumină, căldură, mișcare…) într-un <b>semnal electric</b> pe care un circuit sau un microcontroler îl poate citi.</p>
<table>
<tr><th>Senzor</th><th>Ce „simte"</th><th>Unde îl găsești</th></tr>
<tr><td><b>Fotorezistor (LDR)</b></td><td>lumina: mai multă lumină, mai puțină rezistență</td><td>stâlpi de iluminat care se aprind în întuneric</td></tr>
<tr><td><b>Termistor (NTC)</b></td><td>temperatura</td><td>termostat, frigider, termometru digital</td></tr>
<tr><td><b>PIR</b> (infraroșu pasiv)</td><td>mișcarea corpurilor calde</td><td>alarme, lumini de scară</td></tr>
<tr><td><b>Ultrasunete</b></td><td>distanța (ecou)</td><td>senzori de parcare ai mașinii</td></tr>
<tr><td><b>Microfon</b></td><td>sunetul</td><td>telefon, asistenți vocali</td></tr>
<tr><td><b>Accelerometru</b></td><td>mișcare și înclinare</td><td>smartphone (rotirea ecranului), pedometru</td></tr>
</table>
<p>Semnalul poate fi <b>analogic</b> (variază continuu, ca luminozitatea) sau <b>digital</b> (doar 0 și 1, aprins/stins).</p>`
    },
    {
      type: `widget`, title: `Joc: conductor sau izolator?`,
      widget: `classify`,
      options: {
        groups: [`Conductoare ⚡`, `Izolatoare 🛑`, `Semiconductoare 🔬`],
        items: [
          [`🟠 cupru`, 0], [`🥈 argint`, 0], [`✏️ grafitul creionului`, 0], [`🌊 apă sărată`, 0],
          [`🧤 cauciuc`, 1], [`🍶 sticlă`, 1], [`🪵 lemn uscat`, 1], [`🧴 plastic`, 1], [`🍽️ ceramică`, 1],
          [`💎 siliciu`, 2], [`⚙️ germaniu`, 2]
        ]
      },
      caption: `Atenție: apa de la robinet (cu săruri dizolvate) conduce! Nu atinge niciodată prizele sau aparatele cu mâinile ude.`
    },
    {
      type: `example`, title: `Exemplu practic: calculăm rezistența pentru un LED`,
      html: `<p>Vrei să aprinzi un <b>LED roșu</b> cu un port USB de <b>5 V</b>. LED-ul are nevoie de aproximativ <b>2 V</b> și de un curent de <b>20 mA</b> (0,02 A).</p>
<ol>
<li>Tensiunea pe care rezistența trebuie să o „preia": 5 − 2 = <b>3 V</b>.</li>
<li>Legea lui Ohm: R = V ÷ I = 3 ÷ 0,02 = <b>150 Ω</b>.</li>
<li>Se alege valoarea comercială cea mai apropiată, puțin mai mare: <b>150 Ω sau 220 Ω</b> (LED-ul va fi ceva mai puțin luminos, dar mai sigur).</li>
</ol>
<p>Fără rezistență, curentul ar crește prea mult și LED-ul s-ar arde într-o clipă.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: lumina automată din grădină`,
      html: `<p>O lampă solară de grădină funcționează așa:</p>
<ul>
<li>ziua <b>panoul fotovoltaic</b> (făcut din siliciu) transformă lumina în electricitate și încarcă o <b>baterie</b>;</li>
<li>un <b>senzor de lumină</b> (adesea chiar panoul sau un fotorezistor) își dă seama când se întunecă;</li>
<li>un <b>tranzistor</b> face de întrerupător automat și aprinde <b>LED-ul</b>.</li>
</ul>
<p>Generator, senzor, control, actuator: este o schemă pe care o vei regăsi în toate dispozitivele automate.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… pila a fost inventată de un italian?`,
      html: `<p>În <b>1799</b> <b>Alessandro Volta</b>, profesor la Pavia, a suprapus discuri de <b>zinc</b> și <b>cupru</b> separate prin pânze îmbibate cu apă sărată: era <b>pila</b>, primul generator de curent continuu. A anunțat-o în 1800 la Royal Society din Londra. În cinstea lui, unitatea de măsură a tensiunii se numește <b>volt</b>. Și cuvântul „pilă" (în italiană „pila") vine chiar de la acea „stivă" de discuri!</p>`
    },
    {
      type: `curiosity`, title: `Știai că… Arduino s-a născut la Ivrea?`,
      html: `<p>Placa <b>Arduino</b>, folosită în toată lumea pentru a învăța electronica și a construi roboți, s-a născut în <b>2005</b> la Interaction Design Institute din <b>Ivrea</b> (în Piemont), datorită lui Massimo Banzi și colegilor săi. Numele vine de la barul pe care îl frecventau, la rândul lui dedicat lui <b>Arduino d'Ivrea</b>, rege al Italiei în jurul anului 1000. Primul <b>tranzistor</b>, în schimb, a fost construit în <b>1947</b> la Bell Labs, în SUA, de Bardeen, Brattain și Shockley (premiul Nobel 1956).</p>`
    },
    {
      type: `remember`, title: `De ținut minte (și siguranța!)`,
      html: `<ul>
<li>Curent = flux de sarcini într-un circuit <b>închis</b>.</li>
<li><b>V = R × I</b> (legea lui Ohm); <b>P = V × I</b> (putere).</li>
<li>Serie: același curent, un singur drum. Paralel: aceeași tensiune, mai multe ramuri.</li>
<li>Electronică = a controla electricitatea cu semiconductoare (diode, LED-uri, tranzistoare, cipuri).</li>
<li>Senzori = transformă mărimi fizice în semnale electrice.</li>
<li>⚠️ <b>Niciodată</b> nu face experimente cu priza de acasă (230 V): folosește doar baterii sau alimentatoare de joasă tensiune (până la 12 V) și cere ajutorul unui adult.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Electricitatea nu se vede: de aceea avem nevoie de imagini și comparații diferite. Alege-o pe a ta.`,
      tabs: [
        {
          label: `💧 Apa în țevi`,
          html: `<p>Circuitul este ca o instalație de apă închisă:</p>
<ul>
<li><b>pompa</b> este bateria: creează presiunea (tensiunea, V);</li>
<li><b>apa</b> care curge este curentul (I);</li>
<li>o <b>țeavă îngustă</b> este rezistența (R): cu cât e mai îngustă, cu atât trece mai puțină apă;</li>
<li>o <b>turbină</b> care se învârte este becul: folosește energia apei;</li>
<li>un <b>robinet</b> este întrerupătorul.</li>
</ul>
<p>Mai multă presiune ➜ mai multă apă; țeavă mai îngustă ➜ mai puțină apă. Aceasta este legea lui Ohm!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#ecfeff"/>
<rect x="40" y="40" width="520" height="160" rx="30" fill="none" stroke="#0891b2" stroke-width="22"/>
<rect x="40" y="40" width="520" height="160" rx="30" fill="none" stroke="#67e8f9" stroke-width="12" stroke-dasharray="14 10"/>
<circle cx="50" cy="120" r="34" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<text x="50" y="128" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">V</text>
<rect x="250" y="32" width="100" height="16" fill="#0e7490"/>
<text x="300" y="25" font-size="15" text-anchor="middle" fill="#0e7490" font-weight="bold">țeavă îngustă = R</text>
<circle cx="550" cy="120" r="30" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="550" y="128" font-size="22" text-anchor="middle">💡</text>
<text x="300" y="232" font-size="15" text-anchor="middle" fill="#0e7490" font-weight="bold">curgerea apei = curent I</text>
<text x="105" y="125" font-size="14" fill="#7c2d12" font-weight="bold">pompă = baterie</text>
<text x="490" y="170" font-size="14" fill="#854d0e" font-weight="bold">turbină = bec</text>
</svg>`
        },
        {
          label: `🔺 Triunghiul lui Ohm`,
          html: `<p>Un truc folosit în școlile engleze și germane: scrie <b>V</b> sus și <b>R · I</b> jos într-un triunghi. Acoperă cu degetul mărimea pe care o cauți:</p>
<ul>
<li>acoperi V ➜ rămâne R × I;</li>
<li>acoperi I ➜ rămâne V deasupra lui R ➜ V ÷ R;</li>
<li>acoperi R ➜ rămâne V deasupra lui I ➜ V ÷ I.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fef9c3"/>
<polygon points="300,20 470,220 130,220" fill="#fde68a" stroke="#a16207" stroke-width="5"/>
<line x1="190" y1="140" x2="410" y2="140" stroke="#a16207" stroke-width="4"/>
<line x1="300" y1="140" x2="300" y2="220" stroke="#a16207" stroke-width="4"/>
<text x="300" y="115" font-size="48" font-weight="bold" fill="#dc2626" text-anchor="middle">V</text>
<text x="240" y="198" font-size="44" font-weight="bold" fill="#2563eb" text-anchor="middle">R</text>
<text x="360" y="198" font-size="44" font-weight="bold" fill="#16a34a" text-anchor="middle">I</text>
<text x="520" y="110" font-size="16" fill="#713f12" text-anchor="middle">V = R × I</text>
<text x="520" y="140" font-size="16" fill="#713f12" text-anchor="middle">I = V ÷ R</text>
<text x="520" y="170" font-size="16" fill="#713f12" text-anchor="middle">R = V ÷ I</text>
</svg>`
        },
        {
          label: `🚗 Drum și trafic`,
          html: `<p>Imaginează-ți electronii ca pe niște <b>mașini</b>:</p>
<ul>
<li><b>tensiunea</b> este <b>panta</b> drumului: cu cât e mai abruptă, cu atât mașinile sunt mai împinse;</li>
<li><b>curentul</b> este <b>câte mașini</b> trec pe sub un pod în fiecare secundă;</li>
<li><b>rezistența</b> este o <b>îngustare</b> a șoselei;</li>
<li>în <b>serie</b>: două șantiere unul după altul pe același drum; în <b>paralel</b>: două drumuri alternative, traficul se împarte.</li>
</ul>`
        },
        {
          label: `🧩 Componente și funcții`,
          html: `<p>Potrivește fiecare componentă cu ceea ce face.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Rezistor`, `limitează curentul`],
            [`Diodă`, `lasă curentul să treacă într-un singur sens`],
            [`LED`, `emite lumină`],
            [`Condensator`, `acumulează sarcini pentru puțin timp`],
            [`Tranzistor`, `întrerupător comandat electric`],
            [`Fotorezistor`, `își schimbă rezistența în funcție de lumină`]
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta: de la atom la cip`,
      nodes: [
        { id: `car`, label: `Sarcina electrică`, x: 50, y: 6, color: `#64748b`, html: `Proprietate a protonilor (+) și a electronilor (−).`, why: `Încă grecii au observat că chihlimbarul frecat atrage fărâme de paie: „chihlimbar" în greacă este <i>élektron</i>, de unde „electricitate". Electronul a fost descoperit de <b>J. J. Thomson</b> în 1897.` },
        { id: `cor`, label: `Curentul`, x: 20, y: 28, color: `#3b82f6`, html: `Flux ordonat de sarcini (A).`, why: `Se măsoară în amperi în onoarea lui <b>André-Marie Ampère</b>, care în 1820 a studiat forțele dintre firele parcurse de curent.` },
        { id: `ten`, label: `Tensiunea`, x: 50, y: 28, color: `#f97316`, html: `„Împingerea" care mișcă sarcinile (V).`, why: `Primul generator stabil a fost pila lui <b>Alessandro Volta</b> (1799): reacții chimice între două metale diferite creează o diferență de potențial.` },
        { id: `res`, label: `Rezistența`, x: 80, y: 28, color: `#ef4444`, html: `Opoziție la trecerea curentului (Ω).`, why: `Electronii care se mișcă se ciocnesc de atomii materialului și cedează energie sub formă de căldură: este <b>efectul Joule</b>, folosit la sobe și prăjitoare de pâine.` },
        { id: `ohm`, label: `Legea lui Ohm`, x: 50, y: 50, color: `#a855f7`, html: `V = R × I.`, why: `<b>Georg Simon Ohm</b> a publicat-o în 1827 măsurând curenți în fire de lungimi diferite. La început a fost criticată; apoi a devenit baza electrotehnicii.` },
        { id: `circ`, label: `Circuitul`, x: 20, y: 72, color: `#22c55e`, html: `Generator, fire, consumator, întrerupător; serie sau paralel.`, why: `Sarcinile nu se creează și nu se distrug (conservarea sarcinii): ca să curgă continuu trebuie să se întoarcă la generator, deci drumul trebuie să fie închis.` },
        { id: `semi`, label: `Semiconductoare`, x: 50, y: 72, color: `#0ea5e9`, html: `Siliciu și germaniu: conduc „la comandă".`, why: `Adăugând cantități minuscule de alte elemente (<b>dopare</b>) se controlează cum conduc. Pe acest principiu se bazează dioda și tranzistorul (1947).` },
        { id: `sens`, label: `Senzori`, x: 80, y: 72, color: `#eab308`, html: `Transformă lumina, căldura, mișcarea în semnale electrice.`, why: `Mulți folosesc faptul că rezistența unui material se schimbă cu lumina (fotorezistor) sau cu temperatura (termistor): cu legea lui Ohm se măsoară variația.` },
        { id: `chip`, label: `Cipuri și microcontrolere`, x: 50, y: 94, color: `#7c3aed`, html: `Miliarde de tranzistoare pe o bucățică de siliciu.`, why: `Circuitul integrat a fost inventat în 1958-59 de <b>Jack Kilby</b> și <b>Robert Noyce</b>. În 1971 italianul <b>Federico Faggin</b> a condus proiectul primului microprocesor comercial, Intel 4004.` }
      ],
      edges: [
        [`car`, `cor`, `în mișcare`], [`car`, `ten`, `împinse de`], [`cor`, `ohm`, `I`], [`ten`, `ohm`, `V`], [`res`, `ohm`, `R`],
        [`ohm`, `circ`, `se aplică`], [`ohm`, `semi`, `materiale`], [`semi`, `chip`, `construiesc`], [`semi`, `sens`, `construiesc`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: componente și circuite`,
      questions: [
        { type: `mc`, q: `Într-un circuit în paralel, dacă se arde un bec…`, options: [`se sting toate`, `celelalte rămân aprinse`, `celelalte se aprind mai tare și se ard`], answer: 1, explain: `Fiecare bec are ramura lui: celelalte ramuri continuă să funcționeze.` },
        { type: `num`, q: `Ce putere are o lampă care la 230 V absoarbe 0,1 A?`, answer: 23, tol: 0, unit: `W`, explain: `P = V × I = 230 × 0,1 = 23 W.` },
        { type: `mc`, q: `Ce componentă lasă curentul să treacă într-un singur sens?`, options: [`Condensatorul`, `Dioda`, `Rezistorul`], answer: 1, explain: `Dioda este ca o supapă de sens unic.` }
      ]
    }
  ],
  glossary: [
    { t: `Curent electric (I)`, d: `Flux ordonat de sarcini; se măsoară în amperi (A).` },
    { t: `Tensiune (V)`, d: `Diferență de potențial care împinge sarcinile; se măsoară în volți.` },
    { t: `Rezistență (R)`, d: `Opoziție la trecerea curentului; se măsoară în ohmi (Ω).` },
    { t: `Legea lui Ohm`, d: `V = R × I.` },
    { t: `Putere (P)`, d: `Energia folosită în fiecare secundă: P = V × I, în wați (W).` },
    { t: `Semiconductor`, d: `Material (ex. siliciul) cu conductibilitate controlabilă.` },
    { t: `Tranzistor`, d: `Componentă care face de întrerupător sau amplificator comandat electric.` },
    { t: `LED`, d: `Diodă care emite lumină; trebuie protejată cu o rezistență.` },
    { t: `Senzor`, d: `Dispozitiv care transformă o mărime fizică în semnal electric.` },
    { t: `Multimetru`, d: `Instrument care măsoară tensiunea, curentul și rezistența.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Curentul electric din metale este un flux de…`, options: [`protoni`, `electroni`, `neutroni`], answer: 1, explain: `În metale se mișcă electronii liberi.` },
      { type: `mc`, q: `Tensiunea se măsoară în…`, options: [`amperi`, `volți`, `wați`], answer: 1, explain: `Volți, în onoarea lui Alessandro Volta.` },
      { type: `num`, q: `O rezistență de 220 Ω este parcursă de 0,01 A. Cât este tensiunea la bornele ei?`, answer: 2.2, tol: 0.01, unit: `V`, explain: `V = R × I = 220 × 0,01 = 2,2 V.` },
      { type: `num`, q: `O baterie de 12 V trimite 2 A printr-un motor. Cât este rezistența motorului?`, answer: 6, tol: 0, unit: `Ω`, explain: `R = V ÷ I = 12 ÷ 2 = 6 Ω.` },
      { type: `num`, q: `Două rezistențe de 100 Ω și 47 Ω în serie: rezistența totală?`, answer: 147, tol: 0, unit: `Ω`, explain: `În serie rezistențele se adună: 100 + 47 = 147 Ω.` },
      { type: `tf`, q: `Curentul circulă și dacă circuitul este deschis.`, answer: false, explain: `Este nevoie de un circuit închis.` },
      { type: `tf`, q: `Prizele din casă sunt legate în paralel.`, answer: true, explain: `Așa fiecare aparat primește 230 V și funcționează independent.` },
      { type: `mc`, q: `Ce senzor folosește un stâlp de iluminat care se aprinde singur în întuneric?`, options: [`Termistor`, `Fotorezistor (LDR)`, `Accelerometru`], answer: 1, explain: `Fotorezistorul își schimbă rezistența în funcție de lumină.` },
      { type: `text`, q: `Cum se numește italianul care a inventat pila în 1799?`, answer: [`volta`, `alessandro volta`], explain: `Alessandro Volta, profesor la Pavia.` },
      { type: `order`, q: `Pune în ordine drumul semnalului într-o lampă automată.`, items: [`Senzorul detectează întunericul`, `Circuitul de control prelucrează semnalul`, `Tranzistorul închide circuitul`, `LED-ul se aprinde`], explain: `Senzor ➜ control ➜ întrerupător electronic ➜ actuator (LED).` },
      { type: `mc`, q: `De ce are nevoie un LED de o rezistență în serie?`, options: [`Ca să-și schimbe culoarea`, `Ca să limiteze curentul și să nu se ardă`, `Ca să clipească`], answer: 1, explain: `Fără rezistență curentul ar crește prea mult.` },
      { type: `mc`, q: `Din ce material sunt făcute aproape toate cipurile?`, options: [`Cupru`, `Siliciu`, `Plastic`], answer: 1, explain: `Siliciul este un semiconductor.` }
    ]
  }
});
