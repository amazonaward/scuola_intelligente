TOPIC('ro', {
  id: "p4-tec-internet-sicuro",
  title: "Internetul în siguranță",
  intro: "Internetul este ca un oraș uriaș 🌆: există biblioteci, locuri de joacă, cinematografe, piețe unde îți poți întâlni prietenii… dar, ca în orice oraș, trebuie să cunoști <b>regulile pentru a te mișca în siguranță</b>. Să învățăm să creăm <b>parole</b> puternice 🔐, să ne protejăm <b>datele personale</b> (confidențialitatea), să recunoaștem <b>păcălelile</b> de pe internet și să știm mereu <b>pe cine să rugăm de ajutor</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Ce este internetul (pe scurt)",
      html: `<p><b>Internetul</b> este o rețea care leagă <b>miliarde de calculatoare, telefoane și tablete</b> din toată lumea. Când deschizi un site, dispozitivul tău cere informațiile unui alt calculator îndepărtat (un <b>server</b>) și le primește într-o clipă, prin cabluri, fibre optice aflate sub oceane, antene și sateliți.</p>
<p><b>Web-ul</b> (paginile cu linkuri) este doar o parte a internetului: mai există poșta electronică, chaturile, jocurile video online, apelurile video…</p>
<p>⚠️ Ține minte: ceea ce pui pe internet <b>călătorește</b>, este <b>copiat</b> și poate <b>rămâne pentru totdeauna</b>, chiar dacă îl ștergi. De aceea trebuie să te gândești <b>înainte</b> de a publica.</p>`
    },
    {
      type: "text",
      title: "2. Parolele: cheia casei",
      html: `<p><b>Parola</b> este ca <b>cheia casei</b> conturilor tale (jocuri, e-mail, platforma școlii). Dacă cineva o descoperă, poate intra, se poate preface că este tu și îți poate vedea lucrurile.</p>
<p><b>O parolă puternică este:</b></p>
<ul>
<li>📏 <b>lungă</b>: cel puțin 12 caractere (cu cât este mai lungă, cu atât este mai greu de ghicit);</li>
<li>🔀 <b>variată</b>: litere mari și mici, cifre și simboluri (! ? # …);</li>
<li>🙈 <b>imposibil de ghicit</b>: fără numele tău, ziua de naștere, numele câinelui, „123456” sau „parola”;</li>
<li>🔑 <b>diferită</b> pentru fiecare cont important.</li>
</ul>
<p>💡 <b>Trucul frazei secrete</b>: unește 4 cuvinte la întâmplare pe care doar tu le poți ține minte, cu un număr și un simbol. Exemplu: <b>Pisica-Violet-Mananca-7-Nori!</b> Este foarte lungă, dar ușor de ținut minte (nu o folosi pe aceasta, inventează-ți-o pe a ta!).</p>
<p>🤫 Parola <b>nu se spune nimănui</b>, nici măcar celui mai bun prieten. Doar <b>părinții</b> (sau un adult de încredere) o pot cunoaște.</p>`
    },
    {
      type: "svg",
      title: "Parolă slabă sau puternică?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="30" width="250" height="230" rx="16" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
<rect x="320" y="30" width="250" height="230" rx="16" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="155" y="70" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">SLABĂ 🔓</text>
<text x="445" y="70" font-size="24" font-weight="bold" fill="#15803d" text-anchor="middle">PUTERNICĂ 🔐</text>
<g font-size="18" font-family="monospace" fill="#7f1d1d" text-anchor="middle">
<text x="155" y="115">123456</text>
<text x="155" y="150">parola</text>
<text x="155" y="185">luca2015</text>
<text x="155" y="220">grivei</text>
</g>
<g font-size="16" font-family="monospace" fill="#14532d" text-anchor="middle">
<text x="445" y="115">Pisica-Violet-7-Nori!</text>
<text x="445" y="150">Pizza#Dragon#Luna42</text>
<text x="445" y="185">3Elefanti?Danseaza</text>
</g>
<text x="155" y="250" font-size="15" fill="#7f1d1d" text-anchor="middle">scurte, ușor de ghicit</text>
<text x="445" y="225" font-size="15" fill="#14532d" text-anchor="middle">lungi, variate,</text>
<text x="445" y="245" font-size="15" fill="#14532d" text-anchor="middle">ușor de ținut minte</text>
<text x="300" y="290" font-size="17" fill="#1e293b" text-anchor="middle" font-weight="bold">Cu cât este mai lungă, cu atât este mai sigură!</text>
</svg>`,
      caption: "Parolele din stânga se ghicesc într-o clipă; cele din dreapta sunt fraze secrete lungi și variate (inventează-ți mereu pe a ta!)."
    },
    {
      type: "widget",
      title: "Slabă sau puternică?",
      widget: "classify",
      options: {
        groups: ["🔓 Slabă", "🔐 Puternică"],
        items: [
          ["123456", 0],
          ["qwerty", 0],
          ["numele meu", 0],
          ["data mea de naștere", 0],
          ["parola", 0],
          ["Tren!Albastru?Sare88", 1],
          ["Ghiozdan-Luna-Paine-31", 1],
          ["4Pinguini#Pe#Acoperis", 1]
        ]
      },
      caption: "Atinge fiecare parolă și hotărăște dacă este slabă sau puternică."
    },
    {
      type: "quiz",
      title: "Mini-test: parolele",
      questions: [
        { type: "mc", q: "Care este cea mai sigură parolă?", options: ["marco2016", "Racheta#Verde#Mar#9", "abcdef"], answer: 1, explain: "Este lungă și amestecă litere mari, litere mici, simboluri și cifre." },
        { type: "tf", q: "Pot să-i spun parola celui mai bun prieten, pentru că am încredere în el.", answer: false, explain: "Parola nu se spune nimănui, în afară de părinți sau de un adult de încredere. Prieteniile se pot schimba!" },
        { type: "mc", q: "Ce contează cel mai mult ca o parolă să fie puternică?", options: ["să fie scurtă", "să fie lungă", "să conțină numele tău"], answer: 1, explain: "Lungimea este lucrul cel mai important: fiecare caracter în plus înmulțește combinațiile de încercat." },
        { type: "tf", q: "Este mai bine să folosești parole diferite pentru conturile importante.", answer: true, explain: "Astfel, dacă una este descoperită, celelalte rămân în siguranță." }
      ]
    },
    {
      type: "text",
      title: "3. Confidențialitatea: datele personale",
      html: `<p><b>Confidențialitatea</b> (privacy) este dreptul de a hotărî <b>cine are voie să știe lucruri despre tine</b>. <b>Datele personale</b> sunt toate informațiile care spun cine ești și unde te pot găsi:</p>
<ul>
<li>🪪 numele și prenumele complete</li>
<li>🏠 adresa de acasă</li>
<li>🏫 numele școlii și al clasei</li>
<li>📞 numărul de telefon</li>
<li>📸 fotografii și videoclipuri cu tine, cu casa ta, cu uniforma școlii</li>
<li>📍 unde te afli în acest moment (locația)</li>
<li>🔑 parolele</li>
</ul>
<p><b>Regula de aur</b>: aceste date <b>nu se scriu online</b> (în jocuri, în chaturi, în comentarii) fără permisiunea părinților. Pentru jocuri folosește un <b>nickname</b> (poreclă) care să nu conțină numele tău real și nici vârsta.</p>
<p>Respectă și confidențialitatea <b>celorlalți</b>: nu publica fotografii sau videoclipuri cu prieteni și colegi fără permisiunea lor.</p>`
    },
    {
      type: "widget",
      title: "Se poate împărtăși?",
      widget: "classify",
      options: {
        groups: ["✅ Pot să împărtășesc", "⛔ Nu împărtăși (întreabă un adult)"],
        items: [
          ["🎨 culoarea mea preferată", 0],
          ["🐶 desenul cu câinele meu", 0],
          ["🎮 nickname-ul meu din joc", 0],
          ["📚 o carte care mi-a plăcut", 0],
          ["🏠 adresa mea", 1],
          ["📞 numărul meu de telefon", 1],
          ["🔑 parola mea", 1],
          ["🏫 numele școlii mele", 1],
          ["📍 unde mă aflu acum", 1],
          ["📸 o fotografie cu echipamentul echipei și numele", 1]
        ]
      },
      caption: "Atinge fiecare informație și hotărăște: se poate împărtăși online sau nu?"
    },
    {
      type: "text",
      title: "4. Atenție la păcălelile de pe internet",
      html: `<ul>
<li>🎣 <b>Phishing</b> („pescuit”): mesaje false care par adevărate (<i>„Ai câștigat un telefon! Dă clic aici și scrie parola”</i>). Niciun site serios nu-ți cere parola prin mesaj. <b>Nu da clic</b> și arată mesajul unui adult.</li>
<li>🎁 <b>Premii prea frumoase</b>: <i>„Monede gratuite pentru jocul tău!”</i> Dacă pare prea frumos ca să fie adevărat… probabil este o înșelătorie.</li>
<li>👤 <b>Necunoscuți</b>: pe internet oamenii se pot preface că sunt altcineva (un copil de vârsta ta ar putea fi de fapt un adult). Nu te întâlni <b>niciodată</b> în persoană cu cineva pe care l-ai cunoscut online și nu trimite fotografii.</li>
<li>📰 <b>Știri false</b> (fake news): nu tot ce este pe internet e adevărat. Verifică cine a scris, dacă există și alte surse de încredere și întreabă un adult.</li>
<li>🔒 <b>Lăcățelul</b>: în bara de adrese, site-urile protejate încep cu <b>https</b>; datele pe care le trimiți călătoresc criptate. Dar atenție: lăcățelul nu garantează că site-ul este cinstit!</li>
</ul>`
    },
    {
      type: "text",
      title: "5. Bunătate online și cyberbullying",
      html: `<p>În spatele fiecărui ecran se află o <b>persoană adevărată</b>, cu sentimente. Regulile de bună purtare pe internet se numesc <b>netiquette</b> (din <i>net</i>, rețea, și <i>etiquette</i>, bune maniere):</p>
<ul>
<li>💬 scrie online doar ceea ce ai spune și uitându-te omului în ochi;</li>
<li>🔠 nu scrie TOT CU MAJUSCULE: pare că țipi;</li>
<li>🚫 nu lua în râs, nu exclude pe nimeni din grupuri intenționat, nu distribui fotografii care pot răni pe cineva.</li>
</ul>
<p><b>Cyberbullying-ul</b> (hărțuirea online) înseamnă că cineva folosește internetul sau telefonul ca să jignească, să amenințe, să ia în râs sau să excludă o persoană, din nou și din nou. În Italia există o lege făcută special pentru protejarea copiilor și adolescenților (<b>legea 71 din 2017</b>).</p>
<p><b>Dacă ți se întâmplă ție sau unui prieten</b>: nu răspunde, nu șterge dovezile (fă o captură de ecran), <b>blochează</b> și <b>vorbește imediat</b> cu un părinte sau cu un profesor. Să ceri ajutor nu înseamnă a pârî: înseamnă curaj! 💪</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: mesajul misterios",
      html: `<p>Sofia se joacă online. Primește un mesaj privat:</p>
<p style="background:#fef2f2;padding:8px;border-radius:8px">🎁 <i>„Salut! Sunt moderator al jocului. Ai câștigat 10.000 de pietre prețioase gratis! Ca să le primești, scrie-mi numele de utilizator și parola în 5 minute!!!”</i></p>
<p>Sofia observă <b>semnalele de alarmă</b> 🚨:</p>
<ul>
<li>cere <b>parola</b> (niciun moderator adevărat nu face asta vreodată);</li>
<li>pune <b>presiune de timp</b> („în 5 minute!!!”);</li>
<li>promite un <b>premiu prea frumos</b>.</li>
</ul>
<p>Sofia <b>nu răspunde</b>, face o captură de ecran, <b>raportează</b> mesajul cu butonul din joc și îl arată mamei. 👏</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: fotografia de la excursie",
      html: `<p>După excursie, Luca vrea să publice în grupul clasei o fotografie amuzantă cu Matteo dormind în autocar. 🚌😴</p>
<p>Înainte de a o face își pune trei întrebări (regula <b>„Gândește înainte de a posta”</b>):</p>
<ol>
<li>Este <b>adevărată</b> și <b>frumoasă</b>? Matteo ar putea să se simtă rușinat…</li>
<li>Am <b>permisiunea</b> persoanei din fotografie? Nu.</li>
<li>Este în regulă dacă o văd <b>toți, pentru totdeauna</b>? O fotografie din grup poate fi salvată și trimisă oriunde.</li>
</ol>
<p>Luca hotărăște să trimită fotografia <b>doar lui Matteo</b>, care râde și zice: „Bine, dar nu o pune în grup!”. Respectarea confidențialității celorlalți face parte din siguranța online.</p>`
    },
    {
      type: "decision",
      title: "Ce ai face?",
      html: "În jocul online pe care îl folosești, un utilizator cu care vorbești de câteva săptămâni îți scrie: <i>„Suntem prieteni acum! Trimite-mi o fotografie cu tine și spune-mi la ce școală mergi, poate ne vedem. Dar să nu le spui părinților tăi, e secretul nostru 🤫”</i>.",
      question: "Care este lucrul corect de făcut?",
      options: [
        { label: "Trimit fotografia, dar nu spun școala.", outcome: "O fotografie poate spune deja multe (fața, uniforma, casa din spatele tău) și poate fi copiată și folosită de oricine. Nu este sigur." },
        { label: "Nu răspund, blochez/raportez utilizatorul și le spun imediat părinților.", outcome: "Corect! Ți-ai protejat datele și ai cerut ajutorul unui adult: exact asta trebuie făcut." },
        { label: "Accept să ne vedem, dar iau un prieten cu mine.", outcome: "Nu te întâlnești niciodată, singur sau cu prieteni, cu cineva cunoscut online: nu știi cine este cu adevărat. Este nevoie mereu de un adult informat." }
      ],
      answer: 1,
      explain: "Cel mai puternic semnal de alarmă este fraza <b>„să nu le spui părinților tăi”</b>: cine are intenții bune nu-ți cere niciodată să ascunzi ceva adulților care au grijă de tine. Lucrul corect este să nu dai date sau fotografii, să blochezi sau să raportezi și să vorbești imediat cu un adult de încredere. Nu ești într-o belea și nu ai făcut nimic rău: ai făcut alegerea cea mai curajoasă."
    },
    {
      type: "curiosity",
      title: "Știai că…? Cea mai folosită parolă din lume",
      html: `<p>În fiecare an, experții în securitate analizează milioane de parole furate și publică clasamentul celor mai folosite. De ani de zile pe primele locuri se află mereu aceleași: <b>„123456”</b>, <b>„password”</b>, <b>„qwerty”</b> (primele litere de pe tastatură)… Un program le ghicește în <b>mai puțin de o secundă</b>! 😱</p>
<p>O frază secretă din 4–5 cuvinte la întâmplare ar cere, în schimb, unui calculator timpi foarte lungi ca s-o ghicească încercând toate combinațiile.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Ziua de naștere a internetului și a web-ului",
      html: `<ul>
<li>🖥️ În <b>1969</b>, în Statele Unite, a fost trimis primul mesaj între două calculatoare din rețeaua <b>ARPANET</b>, „bunica” internetului. Mesajul trebuia să fie „LOGIN”, dar sistemul s-a blocat după primele două litere: primul mesaj din istorie a fost <b>„LO”</b>!</li>
<li>🌐 <b>World Wide Web</b> a fost inventat de <b>Tim Berners-Lee</b> la <b>CERN</b> din Geneva între 1989 și 1991 și a fost dăruit tuturor, gratuit.</li>
<li>🛡️ În fiecare an, în februarie, se sărbătorește <b>Safer Internet Day</b>, ziua mondială pentru un internet mai sigur, născută în Europa în 2004.</li>
</ul>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>🔐 Parolă <b>lungă, variată, secretă</b> și diferită pentru conturile importante; o cunosc doar părinții.</li>
<li>🪪 Fără date personale online (nume complet, adresă, școală, telefon, fotografii, locație).</li>
<li>🎣 Nu da clic pe premii și mesaje suspecte; nimeni serios nu-ți cere parola.</li>
<li>👤 Nu te întâlni niciodată cu cineva pe care îl știi doar de pe internet.</li>
<li>💬 Fii amabil: în spatele ecranului se află o persoană adevărată.</li>
<li>🆘 Ceva te îngrijorează sau te face să te simți rău? <b>Vorbește imediat cu un adult de încredere.</b> În Italia poți suna și la <b>Telefono Azzurro, 19696</b> (gratuit, zi și noapte); în România există <b>Telefonul Copilului, 116 111</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a ține minte regulile",
      intro: "Regulile siguranței online se pot învăța în multe feluri: cu regulile SMART folosite în școlile englezești, cu semaforul, gândindu-te la casă și la cheile ei sau jucându-te.",
      tabs: [
        {
          label: "🇬🇧 Regulile SMART",
          html: `<p>În școlile din Regatul Unit mulți copii învață regulile <b>SMART</b> (ale asociației Childnet). Fiecare literă este o regulă:</p>
<ul>
<li><b>S – Safe</b> (în siguranță): păstrează-ți în siguranță datele personale.</li>
<li><b>M – Meet</b> (a întâlni): nu te întâlni cu cineva pe care îl știi doar de pe internet.</li>
<li><b>A – Accepting</b> (a accepta): nu deschide fișiere, linkuri sau mesaje de la necunoscuți.</li>
<li><b>R – Reliable</b> (de încredere): nu tot ce e online este adevărat; verifică sursele.</li>
<li><b>T – Tell</b> (spune): vorbește cu un adult dacă ceva te îngrijorează.</li>
</ul>
<p>Și, în plus, <i>smart</i> în engleză înseamnă <b>deștept</b>: a naviga SMART = a naviga în mod inteligent!</p>`
        },
        {
          label: "🚦 Semaforul",
          html: `<p>Înainte de a face ceva online, întreabă-te ce culoare are:</p>
<ul>
<li>🟢 <b>VERDE – poți merge</b>: să te uiți la videoclipuri potrivite vârstei tale, să te joci cu prieteni pe care îi cunoști cu adevărat, să cauți informații pentru școală.</li>
<li>🟡 <b>GALBEN – întreabă mai întâi</b>: să descarci o aplicație sau un joc, să te înscrii pe un site, să cumperi ceva, să publici o fotografie.</li>
<li>🔴 <b>ROȘU – oprește-te și cheamă un adult</b>: cineva îți cere fotografii, parole sau unde locuiești, te sperie, îți cere să păstrezi un secret sau vezi ceva care te face să te simți rău.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<rect x="60" y="15" width="110" height="230" rx="20" fill="#1e293b"/>
<circle cx="115" cy="60" r="30" fill="#ef4444"/>
<circle cx="115" cy="130" r="30" fill="#facc15"/>
<circle cx="115" cy="200" r="30" fill="#22c55e"/>
<g font-size="20" fill="#1e293b">
<text x="200" y="55" font-weight="bold" fill="#b91c1c">STOP: cheamă un adult</text>
<text x="200" y="80" font-size="16">fotografii, parole, secrete, frică</text>
<text x="200" y="125" font-weight="bold" fill="#a16207">ÎNTREABĂ MAI ÎNTÂI</text>
<text x="200" y="150" font-size="16">aplicații, înscrieri, cumpărături, publicări</text>
<text x="200" y="195" font-weight="bold" fill="#15803d">POȚI MERGE</text>
<text x="200" y="220" font-size="16">videoclipuri potrivite, studiu, jocuri cu prieteni reali</text>
</g>
</svg>`
        },
        {
          label: "🏠 Casa digitală",
          html: `<p>Imaginează-ți că contul tău este <b>casa</b> ta:</p>
<ul>
<li>🔑 <b>parola</b> este <b>cheia</b>: nu o dai cui trece pe stradă și nu o lași sub preș (adică scrisă pe un bilețel lipit de calculator);</li>
<li>🚪 <b>profilul privat</b> este <b>ușa încuiată</b>: intră doar cine inviți tu;</li>
<li>🪟 <b>datele personale</b> sunt lucrurile din casă: nu le pui în vitrină;</li>
<li>🔔 un <b>mesaj de la un necunoscut</b> este cineva care sună la ușă: nu deschizi fără un adult;</li>
<li>📷 <b>verificarea în doi pași</b> (un cod în plus care ajunge pe telefonul părinților) este ca și cum ai avea și o <b>alarmă</b>.</li>
</ul>`
        },
        {
          label: "🎮 Potrivește pericolul cu apărarea",
          html: `<p>Fiecare pericol online are „apărarea” lui. Potrivește-le!</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Mesaj: «Ai câștigat! Scrie parola»", "Nu da clic și anunță un adult"],
              ["Un necunoscut vrea să se întâlnească cu tine", "Nu te duce și spune părinților"],
              ["Cineva te ia în râs în chat", "Captură de ecran, blochează, vorbește"],
              ["Un site îți cere adresa", "Întreabă mai întâi un părinte"],
              ["O știre incredibilă", "Verifică alte surse de încredere"],
              ["Parola «123456»", "Creează o frază secretă lungă"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta siguranței online: atinge un nod",
      nodes: [
        { id: "internet", label: "Internet", x: 50, y: 6, color: "#2563eb", html: "Rețea mondială care leagă miliarde de dispozitive.", why: "S-a născut în Statele Unite în 1969 cu ARPANET, o rețea între universități. În anii '70 Vint Cerf și Bob Kahn au inventat regulile comune (protocolul TCP/IP) care permit unor rețele diferite să „vorbească” între ele: de aici numele <i>inter-net</i>, rețea între rețele." },
        { id: "identita", label: "Identitate digitală", x: 18, y: 30, color: "#a855f7", html: "Tot ceea ce te reprezintă online: conturi, nickname, fotografii, mesaje.", why: "Online nimeni nu-ți vede fața: te recunosc după numele de utilizator și după parolă. De aceea, cine fură parola poate „deveni” tu." },
        { id: "password", label: "Parola", x: 18, y: 58, color: "#f59e0b", html: "Cheia secretă a conturilor: lungă, variată, nedezvăluită.", why: "Un calculator poate încerca miliarde de combinații: cu fiecare caracter în plus, combinațiile se înmulțesc (cu 26 de litere mici, 8 caractere dau aproximativ 200 de miliarde de posibilități, 12 caractere aproximativ 95 de milioane de miliarde). De aceea lungimea contează mai mult decât orice." },
        { id: "privacy", label: "Confidențialitate", x: 50, y: 34, color: "#16a34a", html: "Dreptul de a hotărî cine îți poate cunoaște datele.", why: "În Europa o protejează <b>GDPR</b> (Regulamentul general privind protecția datelor, în vigoare din 2018). Sub o anumită vârstă, pentru a te înscrie la multe servicii online este nevoie de acordul părinților (în Italia sub <b>14 ani</b>), iar multe rețele sociale cer cel puțin 13 ani." },
        { id: "dati", label: "Date personale", x: 50, y: 62, color: "#0ea5e9", html: "Nume, adresă, școală, telefon, fotografii, locație.", why: "Sunt ca piesele unui puzzle: singure par nevinovate, dar puse laolaltă permit să se afle cine ești și unde te pot găsi. Iar ce ajunge online poate fi copiat și poate rămâne pentru totdeauna." },
        { id: "trucchi", label: "Phishing și înșelătorii", x: 82, y: 30, color: "#ef4444", html: "Mesaje false pentru a fura parole sau date.", why: "<i>Phishing</i> vine de la <i>fishing</i> (pescuit): escrocul aruncă un „momeal” (un premiu, o amenințare, graba) sperând că cineva va mușca. Funcționează exploatând emoțiile, nu calculatoarele." },
        { id: "rispetto", label: "Netiquette", x: 82, y: 62, color: "#db2777", html: "Regulile de amabilitate pe internet.", why: "Numele unește <i>net</i> (rețea) și <i>etiquette</i> (bune maniere). Primele reguli au fost scrise în anii '90, când internetul a ajuns în case și milioane de oameni au început să-și scrie fără să se vadă." },
        { id: "cyber", label: "Cyberbullying", x: 82, y: 88, color: "#64748b", html: "Jigniri, amenințări sau excluderi repetate folosind internetul sau telefonul.", why: "În Italia <b>legea 71/2017</b> protejează copiii și adolescenții: fiecare școală are un profesor responsabil, iar tinerii de la 14 ani (sau părinții) pot cere blocarea sau eliminarea conținutului jignitor. A apărut și în urma unor povești dureroase cu tineri victime ale cyberbullying-ului." },
        { id: "aiuto", label: "A cere ajutor", x: 30, y: 88, color: "#14b8a6", html: "Părinți, profesori, Telefono Azzurro 19696 (în România: Telefonul Copilului 116 111).", why: "Adulții de încredere pot bloca, raporta și, dacă este nevoie, se pot adresa poliției, care se ocupă de infracțiunile comise pe internet. A cere ajutor este întotdeauna mișcarea cea mai deșteaptă." }
      ],
      edges: [
        ["internet", "identita", "ai o"],
        ["identita", "password", "protejată de"],
        ["internet", "privacy", "respectă"],
        ["privacy", "dati", "protejează"],
        ["internet", "trucchi", "atenție la"],
        ["trucchi", "password", "vor să fure"],
        ["internet", "rispetto", "poartă-te cu"],
        ["rispetto", "cyber", "opusul este"],
        ["cyber", "aiuto", "dacă se întâmplă"],
        ["dati", "aiuto", "în caz de îndoială"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: confidențialitate și păcăleli",
      questions: [
        { type: "mc", q: "Care dintre aceste informații NU trebuie scrisă într-un chat de joc?", options: ["culoarea ta preferată", "adresa ta de acasă", "personajul tău preferat"], answer: 1, explain: "Adresa este o dată personală: permite să se afle unde locuiești." },
        { type: "mc", q: "Un mesaj îți cere parola ca să-ți dea un premiu. Este…", options: ["un cadou adevărat", "phishing, o înșelătorie", "un mesaj de la școală"], answer: 1, explain: "Niciun serviciu serios nu cere parola prin mesaj: este phishing." },
        { type: "tf", q: "Dacă cineva online îți cere să păstrezi un secret față de părinți, este un semnal de alarmă.", answer: true, explain: "Cine are intenții bune nu cere să ascunzi lucruri de adulții de încredere." },
        { type: "mc", q: "Cineva te ia în râs în mod repetat în chat. Ce faci?", options: ["Răspund cu insulte", "Șterg totul și nu spun nimic", "Fac captură de ecran, blochez și vorbesc cu un adult"], answer: 2, explain: "Păstrarea dovezilor, blocarea și cererea de ajutor sunt lucrurile corecte." }
      ]
    }
  ],
  glossary: [
    { t: "Internet", d: "Rețea mondială care leagă calculatoare și dispozitive." },
    { t: "Cont (account)", d: "Spațiul tău personal într-un site, joc sau aplicație, protejat de nume de utilizator și parolă." },
    { t: "Parolă", d: "Cuvânt sau frază secretă care protejează un cont." },
    { t: "Confidențialitate (privacy)", d: "Dreptul de a hotărî cine poate cunoaște informațiile despre tine." },
    { t: "Date personale", d: "Informații care identifică o persoană: nume, adresă, fotografii, telefon…" },
    { t: "Nickname", d: "Poreclă folosită online în locul numelui real." },
    { t: "Phishing", d: "Înșelătorie cu mesaje false pentru a fura parole sau date." },
    { t: "Netiquette", d: "Regulile de bună purtare pe internet." },
    { t: "Cyberbullying", d: "Hărțuire făcută prin internet sau telefon: jigniri, amenințări, excluderi repetate." },
    { t: "Captură de ecran (screenshot)", d: "Fotografie a ecranului, utilă pentru a păstra dovezile." },
    { t: "https / lăcățel", d: "Arată că datele călătoresc criptate între tine și site." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este cea mai importantă caracteristică a unei parole puternice?", options: ["să fie lungă", "să conțină numele tău", "să fie aceeași pentru toate conturile"], answer: 0, explain: "Lungimea înmulțește combinațiile de încercat." },
      { type: "mc", q: "Cine poate cunoaște parola ta?", options: ["cel mai bun prieten", "doar părinții sau un adult de încredere", "oricine o cere frumos"], answer: 1, explain: "Parola este secretă: doar părinții sau un adult de încredere." },
      { type: "tf", q: "O fotografie publicată online poate fi întotdeauna ștearsă complet.", answer: false, explain: "Odată ajunsă online, poate fi copiată, salvată și distribuită de alții." },
      { type: "tf", q: "Numele școlii tale este o dată personală care nu trebuie împărtășită cu necunoscuții.", answer: true, explain: "Spune unde te pot găsi în multe ore din zi." },
      { type: "mc", q: "Cum se numește înșelătoria cu mesaje false pentru a fura parole?", options: ["netiquette", "phishing", "nickname"], answer: 1, explain: "Phishing, de la «fishing» = pescuit." },
      { type: "text", q: "Cum se numesc regulile de bună purtare pe internet?", answer: ["netiquette", "netiquette-ul"], explain: "Netiquette = net (rețea) + etiquette (bune maniere)." },
      { type: "mc", q: "Ce NU este bine să faci cu un nou «prieten» cunoscut doar online?", options: ["să joci într-un meci public", "să te întâlnești cu el în persoană, singur", "să folosești nickname-ul"], answer: 1, explain: "Nu te întâlnești niciodată în persoană cu cineva pe care îl știi doar online." },
      { type: "mc", q: "Care nickname este mai sigur?", options: ["AnaPopescu_9ani", "DragonAlbastru77", "Ana_StrPaceii12"], answer: 1, explain: "Nu conține nume real, vârstă sau adresă." },
      { type: "num", q: "Care este numărul Telefono Azzurro pentru copii și adolescenți (în Italia)?", answer: 19696, explain: "Telefono Azzurro răspunde la 19696, gratuit, zi și noapte." },
      { type: "mc", q: "Cyberbullying-ul este…", options: ["o glumă o singură dată între prieteni care râd cu toții", "a jigni, a amenința sau a exclude pe cineva în mod repetat online", "a te juca online cu colegii"], answer: 1, explain: "Sunt comportamente repetate care rănesc o persoană, folosind internetul sau telefonul." },
      { type: "order", q: "Primești un mesaj care te sperie. Pune în ordine ce ai de făcut.", items: ["nu răspunde", "fă o captură de ecran", "blochează sau raportează", "vorbește cu un adult de încredere"], explain: "Nu răspunde, păstrează dovada, blochează și cere ajutor." },
      { type: "mc", q: "Ce înseamnă litera «T» din regulile SMART?", options: ["Tell: spune unui adult", "Type: scrie repede", "Take: ia tot"], answer: 0, explain: "Tell = spune unui adult dacă ceva te îngrijorează." }
    ]
  }
});
