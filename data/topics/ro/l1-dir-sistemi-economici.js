TOPIC('ro', {
  id: "l1-dir-sistemi-economici",
  title: "Sistemele economice",
  intro: "Cine decide câte telefoane, câte case și câte școli să se producă într-o țară? Piața, adică milioane de alegeri ale cumpărătorilor și vânzătorilor? Sau statul, cu un plan? Sau un amestec al celor două? Răspunsurile la aceste întrebări dau naștere <b>sistemelor economice</b>. În această lecție cunoști <b>agenții economici</b> (gospodării, firme, stat), <b>fluxul circular</b> al venitului și cele trei mari modele: <b>liberalismul</b>, <b>colectivismul</b> și <b>economia mixtă</b>, cea a Italiei.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Agenții economici",
      html: `<p>În sistemul economic acționează subiecte cu roluri diferite, numite <b>agenți economici</b>:</p>
<ul>
<li><b>Gospodăriile</b> (familiile): <b>consumă</b> bunuri și servicii și <b>oferă muncă</b> (uneori și capital și pământ) în schimbul unui venit: salarii, dobânzi, chirii. O parte din venit este <b>economisită</b>.</li>
<li><b>Firmele</b>: <b>produc</b> bunuri și servicii combinând factorii de producție, cu scopul de a vinde și de a obține un <b>profit</b>. Plătesc salarii, chirii, dobânzi și impozite.</li>
<li><b>Statul</b> (sau <b>administrația publică</b>: stat, regiuni, comune, instituții): produce și oferă <b>servicii publice</b> (școală, sănătate, siguranță, justiție), <b>redistribuie</b> venitul prin impozite și transferuri (pensii, ajutoare), reglementează economia.</li>
<li><b>Restul lumii</b>: celelalte țări, cu care se schimbă bunuri, servicii și capitaluri (<b>importuri</b> și <b>exporturi</b>).</li>
</ul>
<p>Se numesc <b>agenți</b> pentru că fiecare ia decizii de consum, de producție și de economisire, iar toate aceste decizii se împletesc pe <b>piețe</b>: piața bunurilor (unde se vând produse), piața muncii (unde se oferă muncă), piața financiară (unde circulă economiile și împrumuturile).</p>`
    },
    {
      type: "svg",
      title: "Fluxul circular al venitului",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flux circular între gospodării și firme">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="110" width="140" height="70" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="100" y="152" text-anchor="middle" font-size="18" font-weight="bold" fill="#14532d">GOSPODĂRII</text>
<rect x="430" y="110" width="140" height="70" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="500" y="152" text-anchor="middle" font-size="18" font-weight="bold" fill="#1e3a8a">FIRME</text>
<path d="M170,125 C250,40 350,40 430,125" fill="none" stroke="#b45309" stroke-width="3"/>
<polygon points="430,125 418,112 414,128" fill="#b45309"/>
<text x="300" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="#78350f">Muncă și capital (factori)</text>
<path d="M430,165 C350,250 250,250 170,165" fill="none" stroke="#b91c1c" stroke-width="3"/>
<polygon points="170,165 182,178 186,162" fill="#b91c1c"/>
<text x="300" y="260" text-anchor="middle" font-size="14" font-weight="bold" fill="#7f1d1d">Salarii, dobânzi, chirii (venit)</text>
<text x="300" y="148" text-anchor="middle" font-size="14" fill="#334155">și, în sens invers:</text>
<text x="300" y="168" text-anchor="middle" font-size="14" fill="#334155">bunuri/servicii ↔ cheltuieli</text>
</svg>`,
      caption: "Gospodăriile oferă muncă și primesc venit; cu venitul cumpără bunurile și serviciile produse de firme: așa circulă banii."
    },
    {
      type: "text",
      title: "2. Piața, cererea și oferta",
      html: `<p><b>Piața</b> este ansamblul schimburilor dintre cei care vor să cumpere (<b>cererea</b>) și cei care vor să vândă (<b>oferta</b>) un anumit bun. <b>Prețul</b> este semnalul care coordonează deciziile:</p>
<ul>
<li><b>Cererea</b> este cantitatea pe care consumatorii vor s-o cumpere la fiecare preț: de regulă, dacă prețul crește, cererea <b>scade</b>.</li>
<li><b>Oferta</b> este cantitatea pe care producătorii vor s-o vândă: dacă prețul crește, oferta <b>crește</b> (a vinde devine mai avantajos).</li>
<li><b>Prețul de echilibru</b> este cel la care cantitatea cerută și cea oferită coincid.</li>
</ul>
<p>Dacă prețul este prea mare, vânzătorii rămân cu marfă nevândută și scad prețul; dacă este prea mic, bunurile se termină repede și prețurile cresc. Acest mecanism spontan a fost numit de Adam Smith <b>„mâna invizibilă”</b> a pieței.</p>
<p>Piața poate avea forme diferite:</p>
<ul>
<li><b>concurență perfectă</b>: mulți vânzători și cumpărători, nimeni nu poate influența prețul;</li>
<li><b>monopol</b>: un singur vânzător, care poate decide prețul;</li>
<li><b>oligopol</b>: câțiva mari vânzători (de exemplu producătorii de telefonie mobilă sau companiile petroliere);</li>
</ul>
<p>De aceea multe state au legi care protejează <b>concurența</b>: în Italia există Autoritatea garantă a concurenței și a pieței.</p>`
    },
    {
      type: "example",
      title: "Prețul biletelor la un concert",
      html: `<p>Un concert are 5.000 de locuri, dar 20.000 de fani vor să meargă. Dacă biletul costă 30 de euro, cererea (20.000) depășește oferta (5.000): se formează cozi și apare speculația cu bilete. Dacă organizatorii măresc prețul la 120 de euro, mulți renunță: cererea scade până când coincide cu locurile disponibile. Prețul a repartizat biletele între cei care și le doresc cel mai mult. Dacă, în schimb, biletul ar costa 120 de euro, dar fanii ar fi doar 1.000, ar rămâne locuri goale, iar organizatorii ar trebui să scadă prețul.</p>`
    },
    {
      type: "text",
      title: "3. Sistemul liberal (capitalist)",
      html: `<p>Într-un sistem <b>liberal</b> sau de <b>economie de piață</b>, resursele sunt, de regulă, în <b>proprietate privată</b>, iar deciziile (ce, cum și pentru cine să producă) sunt luate de indivizi și firme pe baza <b>prețurilor</b> și a căutării <b>profitului</b>. Statul intervine cât mai puțin: face să fie respectate proprietatea și contractele, apără țara, garantează justiția (<i>laissez-faire</i>: „lăsați să se facă”).</p>
<p>Cel mai faimos teoretician a fost scoțianul <b>Adam Smith</b>, autorul, în <b>1776</b>, al lucrării <i>Avuția națiunilor</i>: după el, urmărindu-și propriul interes, fiecare contribuie, ca și cum ar fi condus de o „mână invizibilă”, la bunăstarea tuturor; <b>diviziunea muncii</b> mărește enorm productivitatea.</p>
<p><b>Avantaje</b>: stimulează eficiența, inovația și libertatea de inițiativă; prețurile transmit informații; sistemul se adaptează rapid.</p>
<p><b>Limite</b>: tinde să genereze mari <b>inegalități</b>; poate produce monopoluri; nu garantează bunurile publice (siguranță, educație); nu ține cont de <b>externalități</b> (precum poluarea: un cost pentru toți pe care nu-l plătește cel care o provoacă); este supus <b>crizelor</b> (precum cea din 1929, marea depresiune).</p>`
    },
    {
      type: "text",
      title: "4. Sistemul colectivist (planificat)",
      html: `<p>În sistemul <b>colectivist</b>, principalele mijloace de producție (pământuri, fabrici, bănci) sunt în <b>proprietate publică</b>, iar deciziile economice sunt luate de stat printr-un <b>plan</b> central: statul stabilește ce să se producă, în ce cantitate și la ce prețuri. Inspirația teoretică vine de la <b>Karl Marx</b> (<i>Capitalul</i>, 1867), care critica exploatarea muncitorilor de către proprietarii capitalului și își închipuia o societate fără clase.</p>
<p>Un exemplu istoric este <b>Uniunea Sovietică</b>, unde din <b>1928</b> <b>planurile cincinale</b> au condus o industrializare foarte rapidă. Sistemul s-a prăbușit odată cu căderea regimurilor comuniste din Europa de Est (<b>1989</b>, căderea Zidului Berlinului) și cu destrămarea URSS în <b>1991</b>.</p>
<p><b>Avantaje (teoretice)</b>: reducerea inegalităților, garantarea locurilor de muncă și a serviciilor esențiale pentru toți, orientarea resurselor către obiective colective.</p>
<p><b>Limite</b>: a planifica întreaga economie este extrem de complicat (lipsesc informațiile și stimulentele), cu risipă, penurie de bunuri de consum și puțină inovație; lipsa libertății economice s-a însoțit, în regimurile reale, cu lipsa libertății politice.</p>
<p>Astăzi nu există mari economii în întregime planificate. <b>China</b> a început din <b>1978</b> (cu Deng Xiaoping) reforme către piață, păstrând controlul politic al Partidului Comunist și un rol puternic al statului (o numește „economie socialistă de piață”).</p>`
    },
    {
      type: "widget",
      title: "Ce sistem este?",
      widget: "classify",
      options: {
        groups: ["Liberal (piață)", "Colectivist (plan)"],
        items: [
          ["Prețurile sunt decise de întâlnirea dintre cerere și ofertă", 0],
          ["Statul decide câte bunuri să se producă printr-un plan cincinal", 1],
          ["Fabricile sunt în proprietate privată", 0],
          ["Principalele mijloace de producție aparțin statului", 1],
          ["Se urmărește profitul", 0],
          ["Se pune accent pe egalitate și controlul statului", 1],
          ["Statul intervine cât mai puțin", 0],
          ["Inspirație preluată de la Marx", 1]
        ]
      },
      caption: "Atribuie fiecare caracteristică sistemului economic potrivit."
    },
    {
      type: "quiz",
      title: "Verifică imediat",
      questions: [
        { type: "mc", q: "Cine oferă muncă în schimbul unui venit?", options: ["Gospodăriile", "Firmele", "Doar statul"], answer: 0, explain: "Gospodăriile oferă muncă și primesc venit; firmele o cer." },
        { type: "tf", q: "Într-un sistem liberal prețurile sunt decise de un plan al statului.", answer: false, explain: "Prețurile rezultă din întâlnirea dintre cerere și ofertă." },
        { type: "mc", q: "Cine a scris Avuția națiunilor (1776)?", options: ["Adam Smith", "Karl Marx", "John Maynard Keynes"], answer: 0, explain: "A fost opera întemeietoare a liberalismului economic." }
      ]
    },
    {
      type: "text",
      title: "5. Economia mixtă",
      html: `<p>Aproape toate țările de astăzi au <b>economii mixte</b>: combină piața cu o intervenție semnificativă a statului. Proprietatea privată și inițiativa individuală rămân motorul principal, dar statul <b>reglementează</b> piețele, produce unele servicii, <b>redistribuie</b> venitul și îi protejează pe cei mai slabi.</p>
<p>O trecere decisivă a fost <b>marea criză din 1929</b>. Piața, lăsată singură, a produs o depresiune cu milioane de șomeri. Economistul englez <b>John Maynard Keynes</b>, în <i>Teoria generală</i> (<b>1936</b>), a susținut că statul trebuie să intervină prin cheltuieli publice pentru a sprijini cererea și ocuparea forței de muncă în perioadele de criză. În Statele Unite președintele <b>Roosevelt</b> a lansat din <b>1933</b> <b>New Deal</b>. După al Doilea Război Mondial s-a născut în Europa <b>welfare state</b> (statul social), care garantează sănătate, educație, pensii și ajutoare: în Regatul Unit, <b>raportul Beveridge</b> (1942) a fost proiectul lui. În Italia <b>Serviciul sanitar național</b> a fost instituit în <b>1978</b> (legea 833).</p>
<p>Statul îndeplinește în economia mixtă trei funcții:</p>
<ul>
<li><b>alocare</b>: produce bunuri și servicii pe care piața nu le-ar furniza sau le-ar furniza prost (bunuri publice: apărare, iluminat, justiție);</li>
<li><b>redistribuire</b>: reduce inegalitățile prin impozite progresive și transferuri;</li>
<li><b>stabilizare</b>: combate crizele, șomajul și inflația prin politica economică (fiscală și monetară).</li>
</ul>
<p>Există multe variante: mai multă piață (Statele Unite) sau mai mult stat (țările nordice, Franța).</p>`
    },
    {
      type: "svg",
      title: "De la piață la plan: spectrul sistemelor",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spectrul sistemelor economice">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0%" stop-color="#93c5fd"/><stop offset="50%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fca5a5"/></linearGradient></defs>
<rect x="40" y="110" width="520" height="40" rx="10" fill="url(#g1)" stroke="#334155" stroke-width="2"/>
<text x="100" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e3a8a">Liberalism</text>
<text x="300" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="#78350f">Economie mixtă</text>
<text x="500" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="#7f1d1d">Colectivism</text>
<text x="100" y="185" text-anchor="middle" font-size="14" fill="#1e293b">Mai multă piață</text>
<text x="100" y="205" text-anchor="middle" font-size="14" fill="#1e293b">Stat minim</text>
<text x="300" y="185" text-anchor="middle" font-size="14" fill="#1e293b">Piață + Stat</text>
<text x="300" y="205" text-anchor="middle" font-size="14" fill="#1e293b">Italia, UE, SUA</text>
<text x="500" y="185" text-anchor="middle" font-size="14" fill="#1e293b">Mai mult stat</text>
<text x="500" y="205" text-anchor="middle" font-size="14" fill="#1e293b">Plan central</text>
<text x="300" y="268" text-anchor="middle" font-size="14" fill="#334155">Sistemele reale se află pe un continuum, nu în trei căsuțe</text>
</svg>`,
      caption: "Sistemele economice nu sunt compartimente etanșe: sunt poziții pe o scară."
    },
    {
      type: "text",
      title: "6. Economia în Constituția italiană",
      html: `<p>Italia are o <b>economie mixtă</b>, iar Constituția îi oferă temeiul:</p>
<ul>
<li><b>Art. 41</b>: inițiativa economică privată este <b>liberă</b>; nu se poate desfășura în contradicție cu <b>utilitatea socială</b> sau în așa fel încât să aducă prejudicii sănătății, mediului, siguranței, libertății și demnității umane (formulare modificată în 2022). Legea poate orienta și coordona activitatea economică publică și privată către scopuri sociale și de mediu.</li>
<li><b>Art. 42</b>: <b>proprietatea privată</b> este recunoscută și garantată; legea îi stabilește modurile de dobândire, de folosință și limitele, pentru a-i asigura <b>funcția socială</b>.</li>
<li><b>Art. 43</b>: din motive de utilitate generală, legea poate rezerva statului anumite întreprinderi de servicii esențiale sau de monopol.</li>
<li><b>Art. 53</b>: toți contribuie la cheltuielile publice în funcție de capacitatea contributivă, cu un sistem fiscal progresiv.</li>
<li><b>Art. 35 și 36</b>: protecția muncii și remunerație demnă. <b>Art. 38</b>: asistență socială și asigurări sociale.</li>
</ul>
<p>În anii ’30 statul italian a creat <b>IRI</b> (Institutul pentru reconstrucția industrială, 1933), care a salvat bănci și firme aflate în criză și a controlat decenii întregi mari sectoare. Din anii ’90 multe întreprinderi publice au fost <b>privatizate</b>.</p>
<p>Italia face parte, de asemenea, din <b>Uniunea Europeană</b> și, din 1999, din <b>zona euro</b> (monede și bancnote din 2002): politica monetară este încredințată Băncii Centrale Europene.</p>`
    },
    {
      type: "decision",
      title: "O criză economică: să lași să se facă sau să intervii?",
      html: `<p>Închipuie-ți că ești guvernul unei țări lovite de o recesiune gravă: fabricile se închid, șomajul urcă la 20%, familiile reduc consumul, iar aceasta înrăutățește și mai mult lucrurile. Economiștii sunt împărțiți.</p>`,
      question: "Tu ce ai face?",
      options: [
        { label: "Nu aș interveni: piața se va ajusta singură", outcome: "Era ideea dominantă înainte de 1929. Dar în anii ’30 depresiunea a durat ani de zile, cu milioane de șomeri." },
        { label: "Aș interveni cu investiții publice și sprijin pentru a relansa cererea", outcome: "Este rețeta keynesiană: cheltuieli publice pentru a stimula economia. Funcționează dacă nu produce o datorie excesivă și este absorbită după încheierea crizei." },
        { label: "Aș naționaliza toate firmele și aș planifica producția", outcome: "Modelul sovietic a funcționat doar în parte și cu prețul penuriei de bunuri și al lipsei de libertate; în economiile occidentale nu a fost adoptat." }
      ],
      answer: 1,
      explain: "După 1929 majoritatea țărilor occidentale au adoptat o formă de economie mixtă: piață, dar cu un rol puternic al statului în sprijinirea cererii și a persoanelor aflate în dificultate (Keynes, New Deal). Este logica care a inspirat welfare state."
    },
    {
      type: "example",
      title: "Fluxul circular într-un oraș",
      html: `<p>O pizzerie plătește salariul unui chelner (gospodărie), care cu acel venit își cumpără pantofi dintr-un magazin (firmă), care la rândul lui își plătește furnizorii și impozitele. Statul folosește impozitele pentru a plăti profesorii, care își cheltuiesc salariul și la pizzerie. Banii trec din mână în mână: orice cheltuială este venitul altcuiva. Dacă toți ar înceta să cheltuiască de teama crizei, circuitul s-ar opri.</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Agenți: <b>gospodării, firme, stat, restul lumii</b>.</li>
<li><b>Liberalism</b>: proprietate privată, piață, stat minim (Adam Smith, 1776).</li>
<li><b>Colectivism</b>: proprietate publică, plan central (Marx; URSS din 1928; prăbușire 1989-1991).</li>
<li><b>Economie mixtă</b>: piață + intervenția statului (Keynes 1936; welfare state). Este modelul Italiei (art. 41-43, 53).</li>
<li>Funcțiile statului: alocare, redistribuire, stabilizare.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege sistemele economice",
      intro: "Trei analogii pentru a ține minte deosebirile.",
      tabs: [
        {
          label: "🍽️ Un mare restaurant",
          html: `<p>În <b>liberalism</b>, mulți bucătari independenți gătesc ceea ce cred că le va plăcea clienților: supraviețuiesc cei mai apreciați. În <b>colectivism</b> există un singur meniu decis de conducere: toți mănâncă, dar fără alegere și cu riscuri de risipă. În <b>economia mixtă</b> sunt mulți bucătari independenți, dar autoritatea sanitară controlează regulile de igienă și există o cantină publică pentru cei care nu-și permit să plătească.</p>`
        },
        {
          label: "⚽ Un meci de fotbal",
          html: `<p>Piața este meciul: echipele concurează. Statul într-o economie mixtă este <b>arbitrul</b> (face să fie respectate regulile), <b>medicul</b> (îl ajută pe cel care se rănește) și organizatorul campionatului (împiedică o echipă să cumpere toți jucătorii). Într-o economie planificată, statul ar fi antrenorul tuturor echipelor la un loc și ar hotărî chiar și rezultatele.</p>`
        },
        {
          label: "🚦 Traficul",
          html: `<p>Traficul poate funcționa doar cu șoferi care decid (liberalism), cu un control total care fixează fiecare traseu (planificare) sau cu semafoare, indicatoare și reguli care coordonează alegerile individuale (economie mixtă). A doua soluție este cea mai puțin flexibilă, prima poate crea ambuteiaje: a treia funcționează aproape peste tot.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: sistemele economice",
      nodes: [
        { id: "sistema", label: "Sistem economic", x: 50, y: 8, color: "#2563eb", html: "Modul în care o societate răspunde la: ce, cum, pentru cine să producă.", why: "Se naște din problema rarității: orice societate trebuie să organizeze producția și distribuția. Răspunsurile se pot baza pe piață, pe plan sau pe o combinație." },
        { id: "operatori", label: "Agenți", x: 18, y: 36, color: "#16a34a", html: "Gospodării, firme, stat, restul lumii.", why: "Fluxul circular arată că venitul unuia este cheltuiala altuia: dacă gospodăriile cheltuiesc mai puțin, firmele vând mai puțin și reduc locurile de muncă: circuitul încetinește (ideea de la baza lui Keynes)." },
        { id: "liberismo", label: "Liberalism", x: 82, y: 36, color: "#f59e0b", html: "Proprietate privată, piață, stat minim.", why: "Se afirmă odată cu revoluția industrială și ideile lui Adam Smith (1776): împotriva privilegiilor și a monopolurilor mercantilismului, propune libera concurență." },
        { id: "collettivismo", label: "Colectivism", x: 18, y: 66, color: "#dc2626", html: "Proprietate publică, plan central.", why: "Se naște ca reacție la condițiile muncitorilor din prima industrializare (Marx). Aplicarea lui sovietică a arătat limitele lipsei de prețuri și de stimulente." },
        { id: "mista", label: "Economie mixtă", x: 82, y: 66, color: "#a855f7", html: "Piață plus intervenția statului.", why: "După criza din 1929 și război, ideea că statul trebuie să stabilizeze economia (Keynes) și să garanteze drepturi sociale (welfare) devine dominantă în Occident." },
        { id: "costituzione", label: "Italia: art. 41-43, 53", x: 50, y: 90, color: "#0891b2", html: "Liberă inițiativă, proprietate cu funcție socială, impozite progresive.", why: "Constituanții, din culturi diferite, au ales un model mixt: libertate de întreprindere, dar limitată de utilitatea socială și de drepturile lucrătorilor, în linie cu principiile de solidaritate și egalitate (art. 2 și 3)." }
      ],
      edges: [["sistema", "operatori", "implică"], ["sistema", "liberismo", "poate fi"], ["sistema", "collettivismo", "poate fi"], ["sistema", "mista", "poate fi"], ["mista", "costituzione", "este modelul din"]]
    },
    {
      type: "curiosity",
      title: "Mâna invizibilă și războiul prețurilor la pâine",
      html: `<p>Smith a scris în 1776: „Nu de la bunăvoința măcelarului, a berarului sau a brutarului ne așteptăm cina, ci de la interesul lor”. Voia să spună că piața transformă egoismul comun în beneficiu pentru toți, cu condiția să existe concurență. Totuși, Smith știa că atunci când producătorii se înțeleg între ei (carteluri), consumatorul are de pierdut: astăzi cartelurile sunt interzise în Uniunea Europeană.</p>`
    },
    {
      type: "curiosity",
      title: "Când statul era întreprinzător",
      html: `<p>Până în anii ’90, în Italia erau publice băncile, telefoanele, energia, autostrăzile, oțelul. În anii „boomului economic” (circa 1958-1963) IRI a contribuit la reconstrucție și la creșterea industrială. Odată cu <b>privatizările</b> din anii ’90 și cu intrarea în Uniunea Europeană, multe dintre aceste firme au trecut în proprietatea unor privați, în timp ce statul păstrează controlul asupra altora (de exemplu Poste Italiane și Enel sunt încă parțial deținute de stat).</p>`
    },
    {
      type: "quiz",
      title: "A doua verificare",
      questions: [
        { type: "mc", q: "Ce economist a propus intervenția statului în crize prin cheltuieli publice?", options: ["John Maynard Keynes", "Adam Smith", "Karl Marx"], answer: 0, explain: "Keynes, în Teoria generală (1936)." },
        { type: "tf", q: "Conform art. 42 din Constituție, proprietatea privată este garantată, dar trebuie să aibă o funcție socială.", answer: true, explain: "Legea îi stabilește modurile de dobândire, de folosință și limitele pentru a-i asigura funcția socială." },
        { type: "mc", q: "Care sistem este modelul Italiei?", options: ["Economia mixtă", "Colectivismul", "Liberalismul pur"], answer: 0, explain: "Piața și intervenția statului coexistă (art. 41-43 din Constituție)." }
      ]
    }
  ],
  glossary: [
    { t: "Sistem economic", d: "Ansamblu de instituții și reguli prin care o societate decide ce, cum și pentru cine să producă." },
    { t: "Agenți economici", d: "Gospodării, firme, stat și restul lumii." },
    { t: "Piață", d: "Loc (chiar și virtual) în care se întâlnesc cererea și oferta unui bun." },
    { t: "Preț de echilibru", d: "Prețul la care cantitatea cerută este egală cu cea oferită." },
    { t: "Liberalism", d: "Doctrină economică care încredințează deciziile pieței și reduce la minimum intervenția statului." },
    { t: "Colectivism", d: "Sistem întemeiat pe proprietatea publică asupra mijloacelor de producție și pe planificare." },
    { t: "Economie mixtă", d: "Sistem în care coexistă piața și intervenția statului." },
    { t: "Welfare state", d: "Stat social: sănătate, educație, asigurări sociale și asistență garantate de stat." },
    { t: "Monopol", d: "Piață cu un singur vânzător, care poate determina prețul." },
    { t: "Externalitate", d: "Cost sau beneficiu care revine unor terți fără a fi plătit (de exemplu poluarea)." },
    { t: "Privatizare", d: "Trecerea unei firme din proprietate publică în proprietate privată." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce agent produce bunuri și servicii pentru a obține un profit?", options: ["Firma", "Gospodăria", "Restul lumii"], answer: 0, explain: "Firmele combină factorii de producție și vând pe piață." },
      { type: "tf", q: "Într-o economie de piață prețul se formează din întâlnirea dintre cerere și ofertă.", answer: true, explain: "Prețul de echilibru este cel la care cererea și oferta coincid." },
      { type: "mc", q: "Cine a scris în 1776 Avuția națiunilor?", options: ["Adam Smith", "John Keynes", "Karl Marx"], answer: 0, explain: "Smith este părintele liberalismului economic." },
      { type: "order", q: "Așază în ordine cronologică.", items: ["Avuția națiunilor (1776)", "Planurile cincinale sovietice (1928)", "Teoria generală a lui Keynes (1936)", "Căderea Zidului Berlinului (1989)"], explain: "1776, 1928, 1936, 1989." },
      { type: "mc", q: "Care este o funcție a statului în economia mixtă?", options: ["Redistribuirea venitului prin impozite progresive", "Stabilirea fiecărui preț", "Interzicerea oricărei firme private"], answer: 0, explain: "Redistribuire, alocare și stabilizare." },
      { type: "text", q: "Cum se numește țara care din 1928 a adoptat planurile cincinale?", answer: ["uniunea sovietică", "urss", "uniunea sovietica", "uniunea sovietică (urss)"], explain: "Uniunea Sovietică (URSS)." },
      { type: "mc", q: "Ce stabilește art. 41 din Constituție?", options: ["Inițiativa economică privată este liberă, dar nu poate contraveni utilității sociale", "Economia este planificată", "Proprietatea este abolită"], answer: 0, explain: "Liberă inițiativă, cu limite de utilitate socială, sănătate, mediu, siguranță, libertate și demnitate." },
      { type: "tf", q: "Monopolul este o piață cu mulți vânzători aflați în concurență.", answer: false, explain: "În monopol există un singur vânzător." },
      { type: "mc", q: "Care a fost marea criză care a împins multe state să intervină în economie?", options: ["Criza din 1929", "Criza din 1789", "Criza din 1861"], answer: 0, explain: "Marea depresiune din anii ’30." },
      { type: "mc", q: "Ce este economia mixtă?", options: ["Un sistem cu piață și intervenția statului", "Un sistem fără firme private", "Un sistem fără stat"], answer: 0, explain: "Este modelul predominant în democrațiile occidentale, inclusiv în Italia." }
    ]
  }
});
