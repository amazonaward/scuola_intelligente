TOPIC('ro', {
  id: "l1-geo-citta",
  title: "Orașe și urbanizare",
  intro: "Din 2007, pentru prima dată în istorie, în lume trăiesc mai mulți oameni în <b>orașe</b> decât la țară. Orașele ocupă foarte puțin spațiu (sub 3% din uscat), dar consumă cea mai mare parte a energiei și produc cea mai mare parte a bogăției și a emisiilor. Cum apar, cum cresc, cum sunt organizate? Și cum pot deveni <b>sustenabile</b>?",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Ce este un oraș și cum apare",
      html: `<p>Nu există o definiție unică a orașului: statisticile folosesc praguri diferite (în Danemarca ajung 200 de locuitori, în Japonia 50.000). În geografie, <b>orașul</b> este o așezare stabilă, cu densitate mare a populației, cu funcții <b>diferite de agricultură</b> (comerț, meșteșuguri, administrație, cultură, servicii) și care exercită o influență asupra teritoriului din jur.</p>
<p>Primele orașe au apărut acum circa <b>5.000-6.000 de ani</b> în <b>Mesopotamia</b> (<b>Uruk</b>, în Irakul de azi, printre cele mai vechi, cu zeci de mii de locuitori) și, puțin mai târziu, de-a lungul Nilului, al Indusului (Mohenjo-daro) și al Fluviului Galben. Condiția necesară: agricultura producea un <b>surplus</b> de hrană, care permitea unei părți a populației să facă altceva (meșteșugari, preoți, soldați, scribi). Orașele antice apăreau lângă apă, la încrucișări de drumuri, pe înălțimi ușor de apărat.</p>
<p><b>Urbanizarea</b> este procesul de creștere a ponderii populației care trăiește în orașe. A explodat odată cu <b>Revoluția industrială</b>: Londra, care în 1800 avea circa 1 milion de locuitori, în 1900 avea peste 6 milioane. Astăzi cea mai rapidă creștere se înregistrează în <b>Asia</b> și în <b>Africa</b>: orașe precum Lagos (Nigeria) sau Dhaka (Bangladesh) cresc cu sute de mii de oameni în fiecare an.</p>`
    },
    {
      type: "text",
      title: "2. Cifrele urbanizării",
      html: `<ul>
<li>1950: circa 30% din populația lumii trăiește în orașe. <b>2007</b>: depășește 50%. Astăzi: circa <b>57%</b>. Previziunea ONU pentru <b>2050</b>: circa <b>68%</b>.</li>
<li>America de Nord, Europa de Vest, America Latină: peste 80% populație urbană. În <b>Italia</b> circa 71%. Africa și Asia de Sud: încă circa 45-50%, dar cu o urbanizare foarte rapidă.</li>
<li><b>Metropola</b>: oraș mare, cu o zonă de influență care se extinde asupra comunelor învecinate (<b>zonă metropolitană</b>, sau <b>conurbație</b> când centrele se unesc între ele).</li>
<li><b>Megaorașul</b>: peste <b>10 milioane</b> de locuitori. Astăzi există circa 33-37. Cele mai mari: <b>Tokyo</b> (circa 37 de milioane, în zona metropolitană), <b>Delhi</b> (peste 30), <b>Shanghai</b>, <b>Dhaka</b>, <b>São Paulo</b>, <b>Ciudad de México</b>, <b>Cairo</b>, <b>Beijing</b>, <b>Mumbai</b>, <b>Osaka</b>. Cele mai multe megaorașe se află în Asia și în țările în curs de dezvoltare.</li>
<li><b>Megalopolisul</b>: regiune urbană întinsă, formată din mai multe metropole unite între ele. Termenul a fost popularizat de geograful francez <b>Jean Gottmann</b> (1961) pentru coasta de nord-est a SUA, de la <b>Boston la Washington</b> („Boswash”), cu peste 50 de milioane de locuitori. Altele: fâșia <b>Tokyo-Osaka</b> (Tokaido), <b>Delta Râului Perlelor</b> din China și, în Europa, așa-numita <b>„banană albastră”</b> (Londra-Benelux-Rin-Milano).</li>
</ul>
<p>Orașele cresc prin <b>spor natural</b>, dar mai ales prin <b>exodul rural</b>: țăranii părăsesc satul (împinși de mecanizarea agriculturii și de sărăcia rurală, atrași de salarii și de servicii) și se mută în oraș.</p>`
    },
    {
      type: "3d",
      title: "Pe glob: megaorașele",
      scene: "globe",
      options: {
        points: [
          { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#dc2626" },
          { lat: 28.6, lon: 77.2, label: "Delhi", color: "#dc2626" },
          { lat: 31.2, lon: 121.5, label: "Shanghai", color: "#dc2626" },
          { lat: 23.8, lon: 90.4, label: "Dhaka", color: "#dc2626" },
          { lat: -23.5, lon: -46.6, label: "São Paulo", color: "#f59e0b" },
          { lat: 19.4, lon: -99.1, label: "Ciudad de México", color: "#f59e0b" },
          { lat: 30.0, lon: 31.2, label: "Cairo", color: "#f59e0b" },
          { lat: 19.1, lon: 72.9, label: "Mumbai", color: "#dc2626" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: 6.5, lon: 3.4, label: "Lagos (în creștere rapidă)", color: "#16a34a" },
          { lat: 41.9, lon: 12.5, label: "Roma", color: "#7c3aed" }
        ]
      },
      caption: "Roșu: megaorașe asiatice; portocaliu: America Latină și Africa de Nord; verde: Lagos, printre cele mai dinamice orașe din lume. Observă că cele mai multe sunt în Asia."
    },
    {
      type: "svg",
      title: "Creșterea populației urbane",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="60" y1="30" x2="60" y2="250" stroke="#111827" stroke-width="2"/>
<rect x="85" y="190" width="70" height="60" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="185" y="160" width="70" height="90" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="285" y="125" width="70" height="125" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="385" y="95" width="70" height="155" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<rect x="485" y="60" width="70" height="190" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="120" y="183" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">30%</text>
<text x="220" y="153" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">36%</text>
<text x="320" y="118" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">43%</text>
<text x="420" y="88" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">51%</text>
<text x="520" y="53" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">57%</text>
<text x="120" y="272" font-size="15" text-anchor="middle" fill="#111827">1950</text>
<text x="220" y="272" font-size="15" text-anchor="middle" fill="#111827">1970</text>
<text x="320" y="272" font-size="15" text-anchor="middle" fill="#111827">1985</text>
<text x="420" y="272" font-size="15" text-anchor="middle" fill="#111827">2007</text>
<text x="520" y="272" font-size="15" text-anchor="middle" fill="#111827">azi</text>
<text x="300" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Ponderea populației lumii care trăiește în orașe (valori rotunjite)</text>
</svg>`,
      caption: "Urbanizarea a crescut constant: depășirea populației rurale a avut loc în jurul anului 2007. Procentele sunt aproximative, după estimările ONU."
    },
    {
      type: "quiz",
      title: "Mini-test: cifre și definiții",
      questions: [
        { type: "mc", q: "Când a depășit pentru prima dată populația urbană pe cea rurală?", options: ["1850", "1950", "În jurul anului 2007"], answer: 2, explain: "În jurul anului 2007, potrivit ONU, s-a depășit pragul de 50% populație urbană." },
        { type: "mc", q: "Câți locuitori trebuie să aibă (aproximativ) un megaoraș?", options: ["Mai mult de 1 milion", "Mai mult de 10 milioane", "Mai mult de 100 de milioane"], answer: 1, explain: "Prin convenție, un megaoraș are peste 10 milioane de locuitori." },
        { type: "text", q: "Cum se numește regiunea urbană formată din mai multe metropole unite între ele (de ex. Boston-Washington)?", answer: ["megalopolis", "megalopolis (boswash)", "megalopolisul", "megalopoli"], explain: "Megalopolis, termen popularizat de Jean Gottmann în 1961." }
      ]
    },
    {
      type: "text",
      title: "3. Cum este organizat un oraș",
      html: `<p>Geografii au propus câteva <b>modele</b> pentru a descrie structura internă a orașelor:</p>
<ul>
<li><b>Modelul zonelor concentrice</b> (Ernest Burgess, Chicago, 1925): în centru <b>CBD</b> (<i>Central Business District</i>, centrul de afaceri), apoi o zonă de tranziție, cartiere muncitorești, cartiere rezidențiale de nivel mediu și, în cele din urmă, cartierele navetiștilor la margine.</li>
<li><b>Modelul sectoarelor</b> (Homer Hoyt, 1939): orașul se dezvoltă în sectoare, de-a lungul marilor căi de comunicație (străzi, căi ferate, râuri).</li>
<li><b>Modelul nucleelor multiple</b> (Harris și Ullman, 1945): mai multe centre (port, universitate, zonă industrială, centru comercial) cu funcții diferite.</li>
</ul>
<p>Principalele <b>funcții urbane</b> sunt locuirea, comerțul, industria, serviciile (școală, sănătate, administrație), cultura și timpul liber, infrastructurile și transporturile. Orașul este împărțit în <b>cartiere</b>: centrul istoric, zone rezidențiale, periferii, zone industriale, spații verzi.</p>
<p><b>Centrul istoric</b> al orașelor italiene și europene păstrează adesea planul medieval (străzi înguste, piețe, ziduri), de multe ori născut din vechiul <b>castrum roman</b> (două străzi perpendiculare, <i>cardo</i> și <i>decumanus</i>, ca la Torino sau Florența). Orașele nord-americane au, în schimb, un centru cu zgârie-nori și un plan în <b>grilă</b> (Manhattan). Orașele lumii islamice au adesea o <b>medina</b>, cu străduțe înguste în jurul moscheii și al pieței (<i>suq</i>). Orașele din America Latină au fost întemeiate de spanioli în jurul unei <b>plaza mayor</b>.</p>`
    },
    {
      type: "svg",
      title: "Modelul zonelor concentrice al lui Burgess",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="130" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="100" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="70" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<circle cx="170" cy="150" r="42" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
<circle cx="170" cy="150" r="18" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="170" y="155" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">1</text>
<text x="170" y="115" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">2</text>
<text x="170" y="85" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">3</text>
<text x="170" y="52" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">4</text>
<text x="170" y="26" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">5</text>
<text x="340" y="55" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#dc2626">1</tspan> Centrul de afaceri (CBD)</text>
<text x="340" y="95" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#c2410c">2</tspan> Zona de tranziție (industrie mică)</text>
<text x="340" y="135" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#b45309">3</tspan> Cartiere muncitorești</text>
<text x="340" y="175" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">4</tspan> Locuințe ale clasei de mijloc</text>
<text x="340" y="215" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">5</tspan> Zona navetiștilor</text>
<text x="340" y="265" font-size="14" fill="#6b7280">Model teoretic (Chicago, 1925): în realitate fiecare oraș are forme proprii.</text>
</svg>`,
      caption: "Modelul concentric a pornit de la observarea orașului Chicago: orașul crește de la centru spre exterior, iar grupurile sociale se așază în inele. Astăzi multe orașe au mai multe centre."
    },
    {
      type: "text",
      title: "4. Probleme și provocări ale orașelor",
      html: `<ul>
<li><b>Mahalale sărace</b> (<i>slum</i>, <i>favelas</i>, <i>bidonville</i>): circa <b>1,1 miliarde</b> de oameni trăiesc în așezări informale, fără apă potabilă, canalizare sau acte de proprietate. <b>Dharavi</b> (Mumbai), <b>Kibera</b> (Nairobi), <b>Rocinha</b> (Rio de Janeiro) sunt printre cele mai cunoscute. Dar sunt și locuri cu o mare vitalitate economică: la Dharavi lucrează mii de mici întreprinderi de reciclare, de prelucrare a pielii și de ceramică.</li>
<li><b>Trafic și smog</b>: orașele concentrează vehicule și emisii. Delhi, Lahore, Dhaka sunt printre cele mai poluate din lume; Câmpia Padului iarna are niveluri de particule fine (PM10, PM2,5) adesea peste limite, pentru că munții și ventilația slabă fac aerul să stagneze.</li>
<li><b>Insula de căldură urbană</b>: asfaltul și betonul absorb căldura, iar vegetația e puțină, așa că orașul poate fi mai cald decât satul cu <b>2-5 °C</b> ziua și până la 8-10 °C în unele nopți de vară.</li>
<li><b>Consumul de teren</b> și <b>urban sprawl</b> (extindere cu densitate mică): construirea pe terenuri agricole impermeabilizează solul și mărește riscul de inundații; în Italia se pierd zilnic mulți hectare de sol.</li>
<li><b>Inegalități</b> și <b>segregare</b> (cartiere bogate și cartiere sărace), <b>gentrificare</b> (un cartier este renovat și vin locuitori mai bogați, în timp ce cei dinainte sunt scoși din zonă de chiriile mari).</li>
<li><b>Deșeuri, zgomot, locuințe</b>: eliminarea gunoiului, costul chiriilor, lipsa locuințelor.</li>
<li><b>Riscuri</b>: cutremure, inundații, caniculă; marile orașe de coastă (Jakarta, Miami, Veneția, Dhaka) sunt expuse creșterii nivelului mării. Jakarta se scufundă din cauza extragerii apei din subsol, iar Indonezia construiește o nouă capitală, Nusantara, pe insula Borneo.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: traficul într-un oraș",
      html: `<p>Pentru a duce 1.000 de persoane în centru sunt necesare:</p>
<ul>
<li>circa <b>800 de automobile</b> (cu 1,2 persoane pe mașină): acoperă mai mult de un kilometru de stradă cu două benzi;</li>
<li>circa <b>12 autobuze</b> pline;</li>
<li>circa <b>2 tramvaie</b> (sau un singur tren de metrou cu 6 vagoane).</li>
</ul>
<p>Aceste numere sunt ordine de mărime, dar arată de ce <b>transportul public</b> este cel mai eficient instrument pentru orașele dense: ocupă mai puțin spațiu, consumă mai puțină energie și produce mai puține emisii <i>pe pasager</i>. O bicicletă ocupă cam o zecime din spațiul unei mașini în mișcare. De aceea multe orașe (Copenhaga, Amsterdam, Utrecht, Paris) și-au extins pistele pentru biciclete și zonele pietonale.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: cât de dens este orașul tău?",
      html: `<p>Un oraș are <b>150.000 de locuitori</b> pe <b>60 km²</b>; un oraș vecin are 150.000 pe <b>240 km²</b>.</p>
<ul>
<li>Densitatea primului = 150.000 ÷ 60 = <b>2.500 loc./km²</b>.</li>
<li>Densitatea celui de-al doilea = 150.000 ÷ 240 = <b>625 loc./km²</b>.</li>
</ul>
<p>La același număr de locuitori, al doilea ocupă <b>de patru ori mai mult teren</b>: sunt necesare mai multe drumuri, mai multe conducte, mai multe linii electrice și mai mulți kilometri pentru a ajunge la școală sau la serviciu. De aceea mulți urbaniști susțin <b>orașul compact</b>. Dar densitatea nu este totul: un oraș dens are nevoie și de parcuri și de spațiu public de calitate, altfel locuirea devine neplăcută.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… un oraș poate trăi pe apă?",
      html: `<p><b>Veneția</b> este construită pe circa 118 insulițe ale lagunei, pe piloți de lemn de arin, zadă și stejar înfipți în nămol. Are peste 400 de poduri. Pentru a o proteja de „acqua alta” (apa mare) a fost construit sistemul de baraje mobile <b>MOSE</b>, intrat în funcțiune în 2020. Dar încălzirea globală și subsidența (coborârea solului) rămân o provocare: Veneția este un laborator de <b>adaptare</b> pentru toate orașele de coastă.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… există orașe construite de la zero?",
      html: `<p>Unele capitale au fost proiectate și construite la planșetă: <b>Brasília</b> (Brazilia, inaugurată în 1960, proiectată de Lúcio Costa și Oscar Niemeyer, în formă de avion), <b>Canberra</b> în Australia (1913), <b>Washington</b> D.C., <b>Abuja</b> în Nigeria (din 1991). Nu toate funcționează cum s-a plănuit: un oraș trăiește nu doar din planuri, ci din obiceiurile celor care îl locuiesc.</p>`
    },
    {
      type: "text",
      title: "5. Spre orașe sustenabile",
      html: `<p>Orașele ocupă circa 3% din uscat, dar consumă peste două treimi din energia mondială și produc circa 70% din emisiile de CO₂ legate de energie. Tocmai de aceea sunt locul în care tranziția ecologică poate funcționa cel mai bine: densitatea înseamnă servicii mai eficiente, transport public și mai puțin teren irosit.</p>
<p><b>Obiectivul 11</b> din Agenda 2030 a ONU se intitulează chiar „<b>Orașe și comunități durabile</b>”: orașe incluzive, sigure, reziliente și sustenabile. Câteva strategii:</p>
<ul>
<li><b>Mobilitate sustenabilă</b>: metrouri, tramvaie, autobuze electrice, piste pentru biciclete, zone cu trafic limitat. Exemplu: <b>Curitiba</b> (Brazilia) a inventat în anii '70 benzile rezervate autobuzelor rapide (BRT), copiate apoi de sute de orașe.</li>
<li><b>Orașul compact</b> și <b>„orașul de 15 minute”</b> (propus de profesorul Carlos Moreno și adoptat la Paris): serviciile esențiale (școală, magazine, medic, spații verzi) pot fi atinse pe jos sau cu bicicleta în 15 minute.</li>
<li><b>Mai mult verde</b>: parcuri, acoperișuri verzi, copaci care reduc insula de căldură (un copac matur poate absorbi zeci de kg de CO₂ pe an și oferă umbră răcoroasă). La Milano, <b>Bosco Verticale</b> (Stefano Boeri, 2014) are circa 800 de copaci (și mii de arbuști) pe fațadele a două turnuri.</li>
<li><b>Clădiri eficiente</b>: izolare, panouri solare, termoficare (la Torino și la Brescia), reabilitare energetică.</li>
<li><b>Economie circulară</b>: colectare selectivă, reciclare, refolosire.</li>
<li><b>Participare</b>: cetățenii decid prin bugete participative și adunări de cartier.</li>
<li>Orașele inteligente (<b>smart city</b>) folosesc senzori și date pentru a gestiona traficul, deșeurile, iluminatul și apa, dar trebuie să protejeze și <b>viața privată</b>.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Ce facem cu piața centrală?",
      html: `<p>Ești consilier local pentru mobilitate într-un oraș de 300.000 de locuitori. Centrul este aglomerat de mașini, iar aerul este adesea poluat. Ai posibilitatea să transformi piața centrală, astăzi parcare pentru 150 de mașini.</p>`,
      question: "Ce alegere ți se pare cea mai bună pentru un oraș sustenabil?",
      options: [
        { label: "Construiesc o parcare subterană mai mare", outcome: "Atrage și mai multe mașini în centru: traficul crește, emisiile rămân mari, iar costul este foarte ridicat." },
        { label: "Transform piața în zonă pietonală, cu copaci și bănci, și întăresc autobuzele și tramvaiele", outcome: "Multe orașe (Pontevedra în Spania, Oslo, Bologna cu zonele 30) au văzut scăzând traficul și accidentele, în timp ce magazinele au rămas active sau au prosperat." },
        { label: "Nu fac nimic, ca să nu nemulțumesc pe nimeni", outcome: "Problema rămâne și se agravează odată cu numărul de mașini, iar poluarea afectează sănătatea cetățenilor." }
      ],
      answer: 1,
      explain: "Studiile asupra orașelor europene arată că oferirea de alternative la mașina personală (transport public, piste pentru biciclete, spații pietonale) reduce traficul și poluarea; comercianții se tem adesea de scăderea vânzărilor, care apoi nu se produce, pentru că pietonii petrec mai mult timp și cheltuiesc mai mulți bani în magazine."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege orașele",
      intro: "Un oraș este un sistem complex: iată trei moduri de a-l privi.",
      tabs: [
        {
          label: "🫀 Orașul ca organism",
          html: `<p>Un oraș poate fi comparat cu un <b>corp</b>: străzile și căile ferate sunt <b>arterele</b> care transportă oameni și mărfuri; canalizarea și stațiile de epurare sunt <b>aparatul digestiv</b>; electricitatea și internetul sunt <b>sistemul nervos</b>; parcurile sunt <b>plămânii</b>; centrul este <b>inima</b> economică. Ca un corp, orașul consumă energie și produce deșeuri (<b>metabolismul urban</b>): un oraș sustenabil încearcă să reducă ceea ce preia și să recicleze ceea ce aruncă.</p>`
        },
        {
          label: "🗺️ Cum citim planul unui oraș",
          html: `<p>Forma străzilor spune istoria: străzile <b>curbe și înguste</b> sunt tipice centrelor medievale; străzile <b>ortogonale</b> (în grilă) țin de castrele romane sau de orașele planificate (centrul Torinoului, Eixample din Barcelona); marile <b>bulevarde</b> sunt moștenirea reformelor din secolul al XIX-lea (Parisul lui Haussmann); străzile în <b>os de pește</b> sau în <b>fundătură</b> (<i>cul-de-sac</i>) sunt tipice cartierelor suburbane din secolul XX. Încearcă cu harta orașului tău: câte dintre aceste forme găsești?</p>`,
          widget: "match",
          options: { pairs: [["Străzi curbe și străduțe", "Centru medieval"], ["Grilă ortogonală", "Castrum roman sau oraș planificat"], ["Bulevarde largi cu copaci", "Reformă din secolul al XIX-lea"], ["Fundături și vile", "Suburbie din secolul XX"]] }
        },
        {
          label: "🌡️ Insula de căldură",
          html: `<p>O zi de august: iarba unui parc are circa 30 °C, asfaltul la soare chiar <b>60 °C</b>, un acoperiș de beton deschis la culoare 45 °C. Asfaltul absoarbe lumina și o eliberează noaptea sub formă de căldură, iar betonul nu transpiră ca frunzele. De aceea noaptea orașul nu se răcește. Soluții: acoperișuri deschise la culoare sau verzi, mai mulți copaci, pavaje drenante, fântâni, mai puțin aer condiționat (care eliberează căldură în exterior).</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fffbeb"/><polyline points="30,150 100,130 180,60 250,50 320,70 400,120 470,140" fill="none" stroke="#dc2626" stroke-width="4"/><text x="250" y="35" font-size="15" text-anchor="middle" fill="#dc2626" font-weight="bold">centrul orașului (mai cald)</text><text x="60" y="175" font-size="14" fill="#15803d" font-weight="bold">zona rurală</text><text x="400" y="175" font-size="14" fill="#15803d" font-weight="bold">parc / zona rurală</text><text x="250" y="190" font-size="14" text-anchor="middle" fill="#111827">profilul temperaturii de la o margine la alta</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta conceptuală: orașul, de ce există și cum se schimbă",
      nodes: [
        { id: "surplus", label: "Agricultură și surplus", x: 20, y: 8, color: "#16a34a", html: "A produce mai multă hrană decât au nevoie țăranii.", why: "Fără un surplus agricol nimeni nu ar fi putut fi meșteșugar sau preot: orașul apare după revoluția agricolă, acum circa 5.000-6.000 de ani în Mesopotamia, datorită irigațiilor și sistemelor de păstrare a cerealelor." },
        { id: "funzioni", label: "Funcții urbane", x: 80, y: 8, color: "#2563eb", html: "Comerț, administrație, cultură, servicii.", why: "Orașul concentrează schimburile și informațiile: mai mulți oameni apropiați înseamnă mai multe întâlniri, mai multe idei și o piață mai mare („economiile de aglomerare” studiate de economistul Alfred Marshall în 1890)." },
        { id: "urbanizzazione", label: "Urbanizare", x: 50, y: 30, color: "#f59e0b", html: "Crește ponderea locuitorilor care trăiesc în orașe.", why: "Odată cu Revoluția industrială (din 1760 circa), fabricile concentrează munca în orașe; astăzi creșterea urbană este condusă de Asia și Africa și de mecanizarea agriculturii, care eliberează forță de muncă în mediul rural." },
        { id: "struttura", label: "Structură și modele", x: 20, y: 56, color: "#a855f7", html: "Centru, periferii, cartiere, modele concentrice și pe sectoare.", why: "Modelele lui Burgess, Hoyt, Harris și Ullman provin din Școala de la Chicago, care în anii '20 a studiat orașul ca pe un laborator social." },
        { id: "problemi", label: "Probleme", x: 80, y: 56, color: "#dc2626", html: "Smog, trafic, mahalale sărace, insulă de căldură.", why: "Sunt efecte ale concentrării: mai mulți oameni și mai multe activități în același spațiu, adesea crescute mai repede decât serviciile. În multe orașe extinderea informală precede infrastructurile." },
        { id: "sostenibilita", label: "Orașe sustenabile", x: 50, y: 80, color: "#14b8a6", html: "Mobilitate, spații verzi, clădiri eficiente, participare.", why: "Obiectivul 11 din Agenda 2030 și Noua Agendă Urbană (ONU, Habitat III, Quito 2016) recunosc că viitorul planetei se decide în mare parte în orașe." },
        { id: "futuro", label: "Viitorul urban", x: 50, y: 96, color: "#ec4899", html: "Circa 2,5 miliarde de noi locuitori ai orașelor până în 2050.", why: "Potrivit ONU, aproape 90% din creșterea urbană va avea loc în Asia și Africa: alegerile făcute acum în privința locuințelor și transporturilor vor determina consumul de resurse pentru zeci de ani." }
      ],
      edges: [
        ["surplus", "funzioni", "permite"],
        ["funzioni", "urbanizzazione", "atrag →"],
        ["urbanizzazione", "struttura", "produce"],
        ["urbanizzazione", "problemi", "generează"],
        ["problemi", "sostenibilita", "necesită"],
        ["struttura", "sostenibilita", "ghidează"],
        ["sostenibilita", "futuro", "pregătește"]
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Din <b>2007</b> trăiesc mai mulți oameni în orașe decât la țară (astăzi circa 57%, în 2050 circa 68%).</li>
<li><b>Metropolă</b>, <b>megaoraș</b> (peste 10 milioane), <b>megalopolis</b> (mai multe metropole unite: Boswash).</li>
<li>Modele de oraș: <b>concentric</b> (Burgess), <b>pe sectoare</b> (Hoyt), <b>cu nuclee multiple</b> (Harris-Ullman).</li>
<li>Probleme: mahalale sărace (1,1 miliarde de oameni), smog, trafic, insulă de căldură, consum de teren, inegalități.</li>
<li><b>Orașe sustenabile</b>: mobilitate colectivă, spații verzi urbane, eficiență energetică, economie circulară, Obiectivul 11 din Agenda 2030.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: structură și sustenabilitate",
      questions: [
        { type: "mc", q: "Ce este insula de căldură urbană?", options: ["O zonă a orașului mai caldă decât zona rurală din jur", "O insulă din mare aflată lângă oraș", "Un cartier cu multe parcuri"], answer: 0, explain: "Asfaltul și betonul acumulează căldură, iar orașele sunt mai calde decât zona rurală, mai ales noaptea." },
        { type: "mc", q: "Ce număr are obiectivul din Agenda 2030 dedicat orașelor sustenabile?", options: ["Obiectivul 2", "Obiectivul 11", "Obiectivul 17"], answer: 1, explain: "Obiectivul 11 este „Orașe și comunități durabile”." },
        { type: "tf", q: "Modelul lui Burgess descrie orașul ca pe o serie de inele concentrice în jurul centrului de afaceri.", answer: true, explain: "Este modelul zonelor concentrice, elaborat la Chicago în 1925." }
      ]
    }
  ],
  glossary: [
    { t: "Urbanizare", d: "Creșterea ponderii populației care trăiește în orașe și extinderea zonelor urbane." },
    { t: "Metropolă", d: "Oraș mare, cu funcții importante și o zonă de influență care include centrele vecine." },
    { t: "Megaoraș", d: "Oraș cu mai mult de 10 milioane de locuitori." },
    { t: "Megalopolis", d: "Mare regiune urbană formată din mai multe metropole unite între ele (de ex. Boston-Washington)." },
    { t: "Conurbație", d: "Unirea mai multor centre urbane vecine într-un singur ansamblu." },
    { t: "CBD", d: "Central Business District: centrul de afaceri al orașului, cu birouri, bănci și comerț." },
    { t: "Exod rural", d: "Mutarea populației de la sate la oraș." },
    { t: "Mahala săracă", d: "Așezare urbană informală și săracă, cu locuințe precare și puține servicii (slum, favela)." },
    { t: "Insulă de căldură", d: "Fenomen prin care zonele urbane au temperaturi mai ridicate decât zonele rurale din jur." },
    { t: "Gentrificare", d: "Renovarea unui cartier popular, cu sosirea unor locuitori mai bogați și creșterea chiriilor." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce condiție a făcut posibilă apariția primelor orașe?", options: ["Un surplus agricol care elibera oameni de munca câmpului", "Inventarea automobilului", "Descoperirea Americii"], answer: 0, explain: "Când țăranii au produs mai multă hrană decât era necesar, alți oameni s-au putut dedica meșteșugurilor, comerțului și administrației." },
      { type: "num", q: "Dacă 57% din 8 miliarde de oameni trăiesc în orașe, câte miliarde de oameni sunt urbani (rotunjește la o zecimală)?", answer: 4.6, tol: 0.1, unit: "miliarde", explain: "8 × 0,57 = 4,56 ≈ 4,6 miliarde." },
      { type: "mc", q: "Cine a lansat termenul „megalopolis” pentru coasta de nord-est a SUA?", options: ["Jean Gottmann", "Ernest Burgess", "Carlos Moreno"], answer: 0, explain: "Geograful francez Jean Gottmann, în 1961." },
      { type: "mc", q: "În ce zonă a modelului lui Burgess se află birourile, băncile și principalele magazine?", options: ["Zona navetiștilor", "CBD, centrul de afaceri", "Cartierele muncitorești"], answer: 1, explain: "CBD ocupă inima orașului." },
      { type: "tf", q: "Mahalalele sărace sunt întotdeauna locuri lipsite de activități economice.", answer: false, explain: "Multe (precum Dharavi din Mumbai) adăpostesc mii de mici întreprinderi; le lipsesc însă serviciile și siguranța." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Primele orașe în Mesopotamia", "Revoluția industrială și creșterea Londrei", "Depășirea populației rurale de către cea urbană (2007)", "Previziunea de 68% populație urbană (2050)"], explain: "De la originile mesopotamiene, la urbanizarea industrială, la 2007, până la previziunile pentru 2050." },
      { type: "mc", q: "Ce măsură reduce insula de căldură urbană?", options: ["Mai mulți copaci și acoperișuri verzi", "Mai mult asfalt închis la culoare", "Mai mult aer condiționat care evacuează căldura în exterior"], answer: 0, explain: "Vegetația face umbră și răcește prin transpirație." },
      { type: "mc", q: "Ce propune ideea „orașului de 15 minute”?", options: ["Serviciile esențiale să poată fi atinse pe jos sau cu bicicleta în 15 minute", "Construirea de autostrăzi cu 15 benzi", "Limitarea numărului de locuitori la 15.000"], answer: 0, explain: "Modelul reduce deplasările cu mașina și face cartierele mai plăcute de locuit." },
      { type: "text", q: "Cum se numește fenomenul prin care populația părăsește satele și se mută în orașe?", answer: ["exod rural", "exodul rural", "urbanizare", "urbanizarea"], explain: "Exod rural (urbanizarea este adesea consecința lui)." },
      { type: "tf", q: "Până în 2050, aproape toată creșterea populației urbane va avea loc în Asia și Africa.", answer: true, explain: "Potrivit proiecțiilor ONU, circa 90% din creșterea urbană va avea loc pe aceste două continente." }
    ]
  }
});
