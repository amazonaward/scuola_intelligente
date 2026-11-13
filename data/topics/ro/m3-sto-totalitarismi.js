TOPIC('ro', {
  id: "m3-sto-totalitarismi",
  title: "Totalitarismele",
  intro: "După Primul Război Mondial, în doar câțiva ani, în Rusia, în Italia și în Germania s-au născut regimuri de un tip nou: un singur partid, un conducător incontestabil, propagandă peste tot, poliție secretă, nicio libertate. Le numim <b>totalitarisme</b>, pentru că voiau să controleze <b>total</b> viața oamenilor. Studierea lor ajută să înțelegem cum se pot pierde libertățile și cum pot fi apărate.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "1. Ce este un regim totalitar",
      html: `<p>Cuvântul „totalitar” a fost folosit în 1923 de antifascistul Giovanni Amendola pentru a critica fascismul; apoi chiar Mussolini l-a adoptat cu mândrie: <i>„Totul în stat, nimic în afara statului, nimic împotriva statului”</i>. În 1951, filosoafa <b>Hannah Arendt</b>, evreică germană refugiată în Statele Unite, le-a studiat trăsăturile comune. Un regim totalitar are:</p>
<ul>
<li>un <b>partid unic</b>: toate celelalte sunt interzise;</li>
<li>un <b>conducător carismatic</b> (Ducele, Führerul, „tatăl popoarelor”) prezentat ca infailibil: este <b>cultul personalității</b>;</li>
<li>o <b>ideologie</b> care pretinde că explică totul și arată un „dușman” de combătut;</li>
<li><b>propagandă</b> și controlul ziarelor, al radioului, al cinematografului, al școlii; <b>cenzură</b>;</li>
<li>o <b>poliție secretă</b> și <b>teroare</b>: arestări, închisoare, lagăre de detenție, execuții ale opozanților;</li>
<li><b>încadrarea maselor</b>, începând cu copiii, în organizații ale regimului;</li>
<li>controlul <b>economiei</b>.</li>
</ul>
<p>Într-o <b>democrație</b>, în schimb, puterea este împărțită (legislativă, executivă, judecătorească), există alegeri libere între mai multe partide, libertate de exprimare, de presă și de asociere, iar drepturile minorităților sunt protejate.</p>`
    },    {
      type: "svg",
      title: "Stâlpii unui regim totalitar",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f1f5f9"/>
<polygon points="320,20 610,90 30,90" fill="#475569" stroke="#0f172a" stroke-width="3"/>
<text x="320" y="72" font-size="20" text-anchor="middle" font-weight="bold" fill="#ffffff">STAT TOTALITAR</text>
<rect x="45" y="95" width="80" height="150" fill="#ef4444" stroke="#0f172a" stroke-width="2"/>
<rect x="140" y="95" width="80" height="150" fill="#f97316" stroke="#0f172a" stroke-width="2"/>
<rect x="235" y="95" width="80" height="150" fill="#eab308" stroke="#0f172a" stroke-width="2"/>
<rect x="330" y="95" width="80" height="150" fill="#22c55e" stroke="#0f172a" stroke-width="2"/>
<rect x="425" y="95" width="80" height="150" fill="#3b82f6" stroke="#0f172a" stroke-width="2"/>
<rect x="520" y="95" width="80" height="150" fill="#a855f7" stroke="#0f172a" stroke-width="2"/>
<text x="85" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Partid</text>
<text x="85" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">unic</text>
<text x="180" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Cultul</text>
<text x="180" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">liderului</text>
<text x="275" y="170" font-size="15" text-anchor="middle" font-weight="bold" fill="#0f172a">Propagandă</text>
<text x="370" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Poliție</text>
<text x="370" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">și teroare</text>
<text x="465" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Controlul</text>
<text x="465" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">tinerilor</text>
<text x="560" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Controlul</text>
<text x="560" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">economiei</text>
<rect x="30" y="250" width="580" height="50" fill="#1e293b"/>
<text x="320" y="282" font-size="18" text-anchor="middle" font-weight="bold" fill="#fde68a">IDEOLOGIE + un „DUȘMAN” de combătut</text>
</svg>`,
      caption: "Toți stâlpii se sprijină pe o ideologie care pretinde că explică totul și pe un dușman (intern sau extern) căruia i se dă vina pentru probleme."
    },

    {
      type: "widget",
      title: "Democrație sau totalitarism?",
      widget: "classify",
      options: {
        groups: ["🗳️ Democrație", "⛓️ Totalitarism"],
        items: [
          ["Mai multe partide se prezintă la alegeri", 0],
          ["Este permis un singur partid", 1],
          ["Ziarele pot critica guvernul", 0],
          ["Poliția secretă controlează opiniile", 1],
          ["Judecătorii sunt independenți de guvern", 0],
          ["Liderul este prezentat ca infailibil", 1],
          ["Minoritățile au aceleași drepturi", 0],
          ["Opozanții sunt trimiși în lagăre de detenție sau la domiciliu forțat", 1],
          ["Copiii trebuie să se înscrie în organizația de tineret a partidului", 1]
        ]
      },
      caption: "Atinge o frază și apoi grupul potrivit."
    },
    {
      type: "text",
      title: "2. Terenul: perioada postbelică și criza",
      html: `<p>De ce, în țări diferite, atât de mulți oameni au acceptat sau au sprijinit aceste regimuri? Cauzele sunt diferite, dar se împletesc:</p>
<ul>
<li><b>războiul</b> obișnuise milioane de bărbați cu violența și cu ascultarea; mulți foști soldați nu găseau de lucru;</li>
<li><b>criza economică</b>, inflația, șomajul; în Germania, hiperinflația din 1923 (în noiembrie 1 dolar valora peste 4.000 de miliarde de mărci) și apoi <b>marea criză din 1929</b>, începută cu prăbușirea Bursei din New York (octombrie 1929): în 1932, în Germania, șomerii erau aproximativ 6 milioane;</li>
<li><b>frica de revoluția comunistă</b> după exemplul rus, mai ales în rândul industriașilor, al proprietarilor de pământ și al păturilor mijlocii;</li>
<li><b>resentimentul față de tratatele de pace</b>: „victoria mutilată” în Italia, umilința de la Versailles în Germania;</li>
<li><b>democrații tinere și slabe</b>, cu partide divizate care nu reușeau să guverneze.</li>
</ul>`
    },
    {
      type: "text",
      title: "3. Uniunea Sovietică: de la Lenin la Stalin",
      html: `<p>În <b>1917</b>, în Rusia, epuizată de război, o primă revoluție (februarie) l-a răsturnat pe țarul Nicolae al II-lea. În <b>octombrie</b>, <b>bolșevicii</b> (comuniștii) lui <b>Lenin</b> au luat puterea, promițând „pace, pământ și pâine” și o societate fără clase, după ideile lui Karl Marx. A urmat un sângeros <b>război civil</b> (1918–1921) între „roșii” și „albi”, câștigat de bolșevici. În <b>1922</b> s-a născut <b>URSS</b> (Uniunea Republicilor Sovietice Socialiste). Încă sub Lenin s-au născut poliția politică (Ceka) și partidul unic.</p>
<p>După moartea lui Lenin (1924), puterea a trecut la <b>Iosif Stalin</b>, care i-a eliminat pe rivali (Troțki a fost exilat și apoi ucis în Mexic în 1940). Stalin:</p>
<ul>
<li>a lansat <b>planurile cincinale</b> (din 1928): URSS a devenit în câțiva ani o mare putere industrială, dar cu prețul unor sacrificii uriașe;</li>
<li>a impus <b>colectivizarea</b> forțată a pământurilor: țăranii trebuiau să muncească în mari întreprinderi de stat (colhozuri, sovhozuri); cine se opunea, acuzat că este „culac” (țăran bogat), era deportat. În 1932–33, o teribilă <b>foamete</b> a provocat milioane de morți, mai ales în <b>Ucraina</b> (unde se numește <b>Holodomor</b>, „exterminare prin foame”) și în Kazahstan;</li>
<li>a organizat <b>marile epurări</b> (1936–38): procese-spectacol, mărturisiri smulse, circa 700.000 de persoane împușcate în doi ani, printre care mulți comuniști și ofițeri;</li>
<li>a dezvoltat sistemul de <b>gulag</b>, lagăre de muncă forțată din Siberia și din regiunile arctice, prin care au trecut milioane de oameni.</li>
</ul>`
    },
    {
      type: "text",
      title: "4. Fascismul în Italia",
      html: `<p>În perioada postbelică, Italia trăia greve, ocupări de fabrici și de pământuri („<b>biennio rosso</b>”, „cei doi ani roșii”, 1919–1920) și dezamăgirea provocată de „victoria mutilată”. La <b>23 martie 1919</b>, la Milano, fostul socialist <b>Benito Mussolini</b> a întemeiat <b>Fasci di combattimento</b> („Grupurile de luptă”).</p>
<p><b>Echipele de acțiune</b> fasciste (<b>squadrismo</b>), adesea finanțate de mari proprietari agrari și industriași, au atacat cu ciomege și ulei de ricin sedii socialiste, sindicate, cooperative și ziare; au ucis sute de oameni. Poliția și autoritățile adesea nu au intervenit. În 1921 s-a născut Partidul Național Fascist.</p>
<p>La <b>28 octombrie 1922</b>, mii de cămăși negre au mărșăluit spre capitală: <b>Marșul asupra Romei</b>. Regele <b>Victor Emanuel al III-lea</b> a refuzat să semneze starea de asediu care ar fi permis armatei să-i oprească, iar la 30 octombrie i-a încredințat lui Mussolini sarcina de a forma guvernul.</p>
<p>De la guvern la dictatură:</p>
<ul>
<li>1924: alegeri cu o nouă lege majoritară (legea Acerbo), printre violențe și fraude;</li>
<li>deputatul socialist <b>Giacomo Matteotti</b> a denunțat în Parlament violențele; la <b>10 iunie 1924</b> a fost răpit și ucis de squadriști;</li>
<li>la <b>3 ianuarie 1925</b>, Mussolini și-a asumat în Parlament „responsabilitatea politică, morală, istorică” pentru cele întâmplate: este începutul dictaturii;</li>
<li><b>legile fascistissime</b> (1925–1926): toate partidele au fost desființate, cu excepția celui fascist, ziarele de opoziție au fost închise, alegerea primarilor a fost abolită (înlocuiți cu podestà), s-au creat Tribunalul special și poliția secretă (<b>OVRA</b>), <b>confino</b> (domiciliul forțat) pentru opozanți (precum Antonio Gramsci, mort în 1937 după ani de închisoare).</li>
</ul>
<p>Regimul a căutat <b>consensul</b>: organizații de tineret (Opera Națională Balilla, apoi GIL), sâmbăta fascistă, manualul unic, cinematograful și radioul, mari lucrări (desecarea Agro Pontino), „bătălia grâului”. În <b>1929</b> a semnat cu Biserica <b>Pactele de la Lateran</b>, care au creat Statul Cetății Vaticanului. În 1935–36 a cucerit <b>Etiopia</b> printr-un război colonial în care a folosit și gazele, și a proclamat „Imperiul”. În 1936 s-a apropiat de Germania nazistă (Axa Roma-Berlin).</p>
<p>În <b>1938</b> au fost aprobate <b>legile rasiale</b> împotriva evreilor: alungați din școli, din universități, din funcțiile publice, din armată; interzise căsătoriile „mixte”. Circa 47.000 de evrei italieni, perfect integrați de secole, au devenit brusc cetățeni de rangul doi.</p>
<p>Mulți istorici vorbesc despre un totalitarism „<b>imperfect</b>”: în Italia rămâneau două puteri pe care fascismul nu le controla complet, <b>monarhia</b> și <b>Biserica</b>.</p>`
    },
    {
      type: "decision",
      title: "Roma, 28 octombrie 1922: tu ești regele",
      html: `<p>Mii de cămăși negre, înarmate dezordonat, converg spre Roma sub ploaie. Armata regulată, bine înarmată, le-ar putea împrăștia ușor. Președintele Consiliului de Miniștri, Luigi Facta, îți aduce spre semnare decretul de <b>stare de asediu</b>, care ar încredința armatei sarcina de a le opri. Unii generali îți dau însă de înțeles că mulți ofițeri simpatizează cu fasciștii; liberalii speră să-l „folosească” pe Mussolini împotriva socialiștilor și apoi să-l readucă la ordine.</p>`,
      question: "Ce faci?",
      options: [
        { label: "Semnez starea de asediu: armata apără legea și statul.", outcome: "Mulți istorici consideră că armata ar fi împrăștiat echipele în câteva ore. Exista riscul unor ciocniri și al unei divizări în armată, dar statul ar fi arătat că violența nu merită." },
        { label: "Nu semnez și îl chem pe Mussolini să formeze un guvern, crezând că îl pot controla.", outcome: "Se evită ciocnirile imediate, dar este recompensat cel care a folosit violența împotriva instituțiilor: un șef de echipe înarmate devine șeful guvernului în mod legal." },
        { label: "Abdic și las tronul vărului meu, ducele de Aosta.", outcome: "Ducele de Aosta era apropiat de fasciști: probabil nu s-ar fi schimbat prea mult, iar țara ar fi trăit o criză instituțională." }
      ],
      answer: 1,
      explain: "Victor Emanuel al III-lea a <b>refuzat să semneze</b> starea de asediu și la <b>30 octombrie 1922</b> i-a încredințat lui Mussolini, sosit de la Milano într-un vagon-dormitor, formarea guvernului. Fasciștii din Parlament erau doar 35 de deputați, dar au avut sprijinul liberalilor și al popularilor. Regele credea că evitase un război civil; în realitate a deschis drumul dictaturii, pe care nu a combătut-o nici după crima Matteotti. Această alegere a cântărit în judecata italienilor asupra monarhiei la referendumul din 1946."
    },
    {
      type: "decision",
      title: "Iunie 1924: Matteotti a dispărut. Ce face opoziția?",
      html: `<p>Ești deputat din opoziție. Colegul tău Giacomo Matteotti a fost răpit de squadriști în fața casei; toți se tem că a fost ucis. În țară există indignare; chiar și unii fasciști sunt în dificultate, iar Mussolini pare să se clatine.</p>`,
      question: "Ce strategie propui?",
      options: [
        { label: "Rămânem în Parlament și atacăm guvernul în fiecare zi cu discursuri și voturi.", outcome: "Parlamentul era singurul loc unde opoziția putea vorbi public și pune guvernul în dificultate; dar fasciștii aveau majoritatea absolută datorită legii Acerbo." },
        { label: "Ieșim din Parlament în semn de protest și așteptăm ca regele să intervină și să-l destituie pe Mussolini.", outcome: "Un gest moral puternic, care arată că acel Parlament nu mai este liber. Dar lasă câmp liber fasciștilor și pune totul pe speranța că regele va acționa." },
        { label: "Chemăm la o grevă generală în toată țara.", outcome: "Ar fi arătat forța muncitorilor, dar risca noi violențe squadriste și divizarea forțelor antifasciste." }
      ],
      answer: 1,
      explain: "Circa 120 de deputați din opoziție au părăsit Camera: a fost numită <b>secesiunea de pe Aventin</b>, amintind de protestul plebei din Roma antică. Sperau ca regele să-l destituie pe Mussolini, dar Victor Emanuel al III-lea nu a intervenit. Trupul lui Matteotti a fost găsit la 16 august. La <b>3 ianuarie 1925</b>, Mussolini și-a asumat responsabilitatea politică pentru climatul de violență și a început legile fascistissime; în 1926 deputații aventinieni au fost declarați decăzuți. Istoricii discută încă dacă o altă strategie ar fi putut opri fascismul."
    },
    {
      type: "quiz",
      title: "Mini-test: URSS și fascismul",
      questions: [
        { type: "mc", q: "Cine a condus revoluția din octombrie 1917?", options: ["Stalin", "Lenin", "Nicolae al II-lea"], answer: 1, explain: "Lenin, șeful bolșevicilor." },
        { type: "mc", q: "Ce au fost gulagurile?", options: ["Ferme colective", "Lagăre de muncă forțată", "Școli de partid"], answer: 1, explain: "Lagăre de muncă forțată în care au fost închise milioane de oameni." },
        { type: "num", q: "În ce an a avut loc Marșul asupra Romei?", answer: 1922, explain: "La 28 octombrie 1922." },
        { type: "text", q: "Cum se numea deputatul socialist ucis de fasciști în 1924?", answer: ["matteotti", "giacomo matteotti"], explain: "Giacomo Matteotti, ucis la 10 iunie 1924." }
      ]
    },
    {
      type: "text",
      title: "5. Nazismul în Germania",
      html: `<p>După înfrângere, în Germania s-a născut o republică democratică, <b>Republica de la Weimar</b> (1919). Era fragilă: atacată de extrema dreaptă și de extrema stângă, strivită de reparațiile de război și de crizele economice.</p>
<p><b>Adolf Hitler</b>, fost caporal austriac, conducea Partidul Național-Socialist (NSDAP, nazist). În 1923 a încercat o lovitură de stat la München, a eșuat și în închisoare a scris <i>Mein Kampf</i> („Lupta mea”). Ideologia nazistă se întemeia pe:</p>
<ul>
<li><b>rasism</b>: ideea, științific falsă, că omenirea este împărțită în rase superioare și inferioare, cu „rasa ariană” în frunte;</li>
<li><b>antisemitism</b>: evreii erau acuzați, fără nicio bază, de toate relele Germaniei;</li>
<li>cucerirea „<b>spațiului vital</b>” în Est, în dauna popoarelor slave;</li>
<li>respingerea Versailles-ului, a democrației și a comunismului.</li>
</ul>
<p>Odată cu criza din 1929, nazișii au crescut rapid: în iulie 1932 au devenit primul partid (circa 37% din voturi). La <b>30 ianuarie 1933</b>, președintele Hindenburg l-a numit pe Hitler <b>cancelar</b>, în mod legal. În câteva luni, democrația a fost distrusă:</p>
<ul>
<li>după incendiul Reichstagului (27 februarie 1933) au fost suspendate libertățile; în martie, Parlamentul i-a acordat lui Hitler <b>puteri depline</b>; în iulie, toate partidele în afară de cel nazist erau interzise;</li>
<li>în martie 1933 s-a deschis primul <b>lagăr de concentrare</b>, la Dachau, pentru opozanții politici;</li>
<li>în „noaptea cuțitelor lungi” (30 iunie 1934), Hitler i-a pus să fie uciși pe șefii SA și pe alți adversari; la moartea lui Hindenburg (august 1934) a devenit <b>Führer</b> („conducător”), șef al statului și al guvernului;</li>
<li><b>Gestapo</b> (poliția secretă) și <b>SS</b>-ul lui Himmler controlau totul; ministrul <b>Goebbels</b> conducea propaganda; copiii intrau în <b>Tineretul hitlerist</b>; cărțile „ne-germane” erau arse în piață (10 mai 1933).</li>
</ul>
<p>Persecutarea <b>evreilor</b> a crescut pas cu pas: boicotarea magazinelor (1933), <b>legile de la Nürnberg</b> (15 septembrie 1935), care le-au luat cetățenia și au interzis căsătoriile cu neevrei, „<b>noaptea de cristal</b>” (9–10 noiembrie 1938), când sinagogi, magazine și case au fost distruse în toată Germania, iar circa 30.000 de bărbați evrei au fost deportați în lagăre. Era antecamera <b>Shoah</b>-ului. Au fost persecutați și romii și sinții, persoanele cu dizabilități, homosexualii, opozanții politici și religioși.</p>
<p>Încă din 1935, Hitler a reînarmat Germania încălcând Versailles-ul; în 1938 a anexat Austria (<b>Anschluss</b>).</p>`
    },
    {
      type: "3d",
      title: "Harta 3D spațiu-timp a totalitarismelor",
      scene: "spacetime",
      caption: "Baza: Europa; înălțimea: timpul din 1917 până în 1939. Atinge evenimentele și urmează săgețile: vei vedea cum se înlănțuie crizele și alegerile în Rusia, Italia și Germania.",
      options: {
        lat: [37, 60.5],
        lon: [-6, 42],
        years: [1917, 1939],
        places: [
          { lat: 55.75, lon: 37.62, label: "Moscova" },
          { lat: 52.52, lon: 13.4, label: "Berlin" },
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 45.46, lon: 9.19, label: "Milano" },
          { lat: 48.14, lon: 11.58, label: "München" },
          { lat: 48.21, lon: 16.37, label: "Viena" },
          { lat: 40.42, lon: -3.7, label: "Madrid" }
        ],
        events: [
          { id: "ottobre", lat: 59.93, lon: 30.36, year: 1917, label: "Revoluția din octombrie", html: "La Petrograd, bolșevicii lui <b>Lenin</b> iau puterea. Urmează războiul civil și partidul unic." },
          { id: "fasci", lat: 45.46, lon: 9.19, year: 1919, label: "Se nasc Fasci di combattimento", html: "23 martie 1919, piazza San Sepolcro din Milano: Mussolini întemeiază mișcarea fascistă. Climatul din „biennio rosso” împinge multe pături mijlocii și proprietari să-l sprijine de frica unei revoluții ca cea rusă.", causes: ["ottobre"] },
          { id: "weimar", lat: 50.98, lon: 11.33, year: 1919, label: "Republica de la Weimar", html: "În Germania se naște o republică democratică, care trebuie să semneze Tratatul de la Versailles: mulți germani o consideră vinovată de umilință." },
          { id: "urss", lat: 55.75, lon: 37.62, year: 1922, label: "Se naște URSS", html: "Decembrie 1922: după victoria în războiul civil se naște Uniunea Sovietică, condusă de Partidul Comunist.", causes: ["ottobre"] },
          { id: "marcia", lat: 41.9, lon: 12.5, year: 1922, label: "Marșul asupra Romei", html: "28–30 octombrie 1922: regele refuză starea de asediu și îl numește pe Mussolini șef al guvernului.", causes: ["fasci"] },
          { id: "putsch", lat: 48.14, lon: 11.58, year: 1923, label: "Puciul de la München", html: "Noiembrie 1923, anul hiperinflației: Hitler încearcă o lovitură de stat inspirată de Marșul asupra Romei. Eșuează; în închisoare scrie <i>Mein Kampf</i>.", causes: ["weimar", "marcia"] },
          { id: "matteotti", lat: 41.91, lon: 12.47, year: 1924, label: "Crima Matteotti", html: "10 iunie 1924: deputatul socialist Giacomo Matteotti este răpit și ucis după ce denunțase violențele electorale.", causes: ["marcia"] },
          { id: "leggi", lat: 41.89, lon: 12.49, year: 1926, label: "Legile fascistissime", html: "După discursul din 3 ianuarie 1925: partid unic, sfârșitul libertății presei, Tribunalul special, confino. Italia este o dictatură.", causes: ["matteotti"] },
          { id: "stalin", lat: 55.76, lon: 37.6, year: 1928, label: "Stalin: primul plan cincinal", html: "După moartea lui Lenin (1924), Stalin îi elimină pe rivali și lansează industrializarea forțată și colectivizarea satelor.", causes: ["urss"] },
          { id: "laterano", lat: 41.9, lon: 12.45, year: 1929, label: "Pactele de la Lateran", html: "11 februarie 1929: acord între statul italian și Biserica Catolică; se naște Statul Cetății Vaticanului. Regimul obține un mare consens.", causes: ["leggi"] },
          { id: "holodomor", lat: 49.0, lon: 32.0, year: 1932, label: "Marea foamete (Holodomor)", html: "1932–33: rechiziționările forțate de recolte și colectivizarea provoacă o foamete cu milioane de morți, mai ales în Ucraina.", causes: ["stalin"] },
          { id: "hitler", lat: 52.52, lon: 13.4, year: 1933, label: "Hitler cancelar", html: "30 ianuarie 1933: Hitler este numit cancelar. În câteva luni: puteri depline, partide interzise, primul lagăr de concentrare la Dachau.", causes: ["putsch", "weimar"] },
          { id: "norimberga", lat: 49.45, lon: 11.08, year: 1935, label: "Legile de la Nürnberg", html: "15 septembrie 1935: evreii germani pierd cetățenia și multe drepturi.", causes: ["hitler"] },
          { id: "etiopia", lat: 41.88, lon: 12.52, year: 1936, label: "Proclamarea „Imperiului”", html: "Mai 1936: după războiul din Etiopia, Mussolini proclamă Imperiul. Liga Națiunilor impusese sancțiuni Italiei, care se apropie de Germania (Axa Roma-Berlin).", causes: ["laterano"] },
          { id: "spagna", lat: 40.42, lon: -3.7, year: 1936, label: "Războiul civil spaniol", html: "1936–1939: generalul Franco se răzvrătește împotriva Republicii. Italia și Germania trimit trupe și avioane lui Franco; URSS îi ajută pe republicani; voluntari antifasciști sosesc din toată lumea. Câștigă Franco.", causes: ["etiopia", "hitler"] },
          { id: "purghe", lat: 55.74, lon: 37.64, year: 1937, label: "Marile epurări", html: "1936–38: procese-spectacol și execuții în masă; circa 700.000 de persoane executate, milioane în gulag.", causes: ["stalin"] },
          { id: "anschluss", lat: 48.21, lon: 16.37, year: 1938, label: "Anschluss", html: "Martie 1938: Germania anexează Austria.", causes: ["hitler"] },
          { id: "razziali", lat: 43.72, lon: 10.32, year: 1938, label: "Legile rasiale în Italia", html: "Septembrie–noiembrie 1938 (primele decrete semnate de rege la San Rossore): evreii italieni sunt alungați din școli, universități, funcții publice și armată.", causes: ["etiopia", "norimberga"] },
          { id: "cristalli", lat: 52.5, lon: 13.38, year: 1938, label: "Noaptea de cristal", html: "9–10 noiembrie 1938: pogrom în toată Germania; sinagogi incendiate, magazine distruse, circa 30.000 de evrei deportați în lagăre.", causes: ["norimberga"] }
        ]
      }
    },
    {
      type: "text",
      title: "6. Trei regimuri comparate",
      html: `<table>
<tr><th></th><th>URSS (Stalin)</th><th>Italia (Mussolini)</th><th>Germania (Hitler)</th></tr>
<tr><td><b>Ideologie</b></td><td>Comunism: societate fără clase; dușman = „burghezi”, „culaci”, „trădători”</td><td>Fascism: naționalism, cultul statului și al forței; dușman = socialiști, liberali, apoi evrei</td><td>Nazism: rasism și antisemitism; dușman = evrei, comuniști, „rase inferioare”</td></tr>
<tr><td><b>Preluarea puterii</b></td><td>Revoluție și război civil</td><td>Violență squadristă + numirea de către rege (1922)</td><td>Alegeri + numirea de către președinte (1933)</td></tr>
<tr><td><b>Partidul</b></td><td>Partidul Comunist</td><td>Partidul Național Fascist</td><td>NSDAP (nazist)</td></tr>
<tr><td><b>Poliție și represiune</b></td><td>NKVD, gulag, epurări</td><td>OVRA, Tribunalul special, confino</td><td>Gestapo, SS, lagăre de concentrare</td></tr>
<tr><td><b>Economie</b></td><td>Totul de stat, planuri cincinale</td><td>Privată, dar controlată (corporații, IRI), autarhie</td><td>Privată, dar orientată spre reînarmare</td></tr>
<tr><td><b>Tineret</b></td><td>Pionieri, Komsomol</td><td>Balilla, Gioventù italiana del Littorio</td><td>Tineretul hitlerist</td></tr>
</table>
<p>Ideologii opuse (comunismul împotriva fascismului și nazismului), dar <b>metode asemănătoare</b>: de aceea Arendt și alți cercetători le-au pus în comparație, deși există multe deosebiri.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: cum desfaci un afiș de propagandă",
      html: `<p>Propaganda regimurilor folosea afișe, jurnale de actualități, radio, cântece, manuale școlare. Ca să analizezi un afiș (îl găsești într-o carte sau într-un muzeu), pune-ți aceste întrebări:</p>
<ol>
<li><b>Cine l-a produs și când?</b> (adesea un minister al regimului)</li>
<li><b>Cui se adresează?</b> (tineri, țărani, mame, soldați…)</li>
<li><b>Ce emoție vrea să trezească?</b> Mândrie, frică, ură, entuziasm?</li>
<li><b>Cum este reprezentat liderul?</b> Adesea sus, gigantic, luminat, cu privirea spre orizont.</li>
<li><b>Cum este reprezentat „dușmanul”?</b> Adesea deformat, ridiculizat sau monstruos: este un mod de a-l dezumaniza.</li>
<li><b>Ce nu arată?</b> Sărăcia, represiunea, victimele.</li>
</ol>
<p>Aceleași întrebări sunt utile și astăzi în fața reclamelor, a videoclipurilor virale și a știrilor false de pe rețelele sociale: recunoașterea manipulării este o apărare a libertății.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: o zi la școală în 1938",
      html: `<p>Imaginează-ți că ești elev în clasa a III-a de gimnaziu în toamna lui 1938. În clasă se află portretul regelui și cel al Ducelui; manualul este unic pentru toată Italia și glorifică regimul. Sâmbătă după-amiază este „sâmbăta fascistă”, cu exerciții de gimnastică și paramilitare în uniformă.</p>
<p>În septembrie, colegul tău de bancă, care este evreu, nu se mai întoarce la școală: legile rasiale îi interzic școlile publice. Și profesoara ta de limba italiană, evreică, este concediată. Comunitățile evreiești organizează în grabă școli proprii. Printre acei copii se afla, la Milano, o fetiță de 8 ani: <b>Liliana Segre</b>, azi senatoare pe viață, care povestește: <i>„Am fost dată afară din școală pentru că eram evreică. Eram o fetiță ca toate celelalte”</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Doar 12 au spus nu",
      html: `<p>În <b>1931</b>, regimul fascist a impus tuturor profesorilor universitari să jure credință fascismului, sub pedeapsa pierderii postului. Din circa 1.200 de profesori, doar <b>12</b> au refuzat (printre ei matematicianul Vito Volterra și istoricul Gaetano De Sanctis). Era nevoie de mult curaj ca să spui nu: azi sunt amintiți ca exemplu de libertate de gândire.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Fotografiile retușate ale lui Stalin",
      html: `<p>În URSS, când un dirigent cădea în dizgrație în timpul epurărilor, era șters și din <b>fotografii</b>: tehnicienii regimului îl eliminau cu mâna, cu pensule și foarfeci, ca și cum nu ar fi existat niciodată. Există fotografii în care, ediție după ediție, lângă Stalin oamenii dispar unul câte unul. Era un mod de a rescrie trecutul: cine controlează memoria controlează prezentul.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cuvintele lui Matteotti",
      html: `<p>La 30 mai 1924, cu câteva zile înainte de a fi ucis, Giacomo Matteotti a vorbit în Cameră mai bine de o oră, întrerupt continuu de strigăte și amenințări, denunțând violențele și fraudele alegerilor. Se spune că, terminând discursul, le-ar fi spus tovarășilor: <i>„Eu discursul meu l-am ținut. Acum voi pregătiți discursul funebru pentru mine”</i>.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege totalitarismele",
      intro: "Un subiect atât de mare se înțelege mai bine din mai multe unghiuri.",
      tabs: [
        {
          label: "🏫 Clasa fără libertate",
          html: `<p>Imaginează-ți că în clasa ta, într-o zi, un elev preia comanda: întâi convinge câțiva colegi promițându-le avantaje, apoi îi sperie pe ceilalți. Desființează alegerea reprezentantului clasei (există doar el), hotărăște că doar grupul lui de prieteni are voie să vorbească, citește jurnalele tuturor, pedepsește pe cine îl critică, își atârnă portretul pe perete, pune clasa să cânte un imn în cinstea lui în fiecare dimineață și arată un coleg ca „vinovat” de tot ce nu merge bine. Încet-încet, mulți, de frică sau din comoditate, se adaptează.</p>
<p>Este o analogie simplă, dar arată mecanismele: <b>frică, propagandă, țap ispășitor, conformism</b>. Și arată că contează și ce fac „spectatorii”.</p>`
        },
        {
          label: "🪜 Scara persecuției",
          html: `<p>Persecutarea evreilor în Germania nu a început cu exterminarea: a fost o <b>scară</b>, o treaptă pe rând, și fiecare treaptă făcea „normală” următoarea. A recunoaște primele trepte (cuvinte de ură, discriminări) este modul de a te opri la timp.</p>`,
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<rect x="20" y="240" width="120" height="50" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<rect x="140" y="190" width="120" height="100" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
<rect x="260" y="140" width="120" height="150" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
<rect x="380" y="90" width="120" height="200" fill="#f87171" stroke="#991b1b" stroke-width="2"/>
<rect x="500" y="40" width="120" height="250" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
<text x="80" y="232" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Cuvinte de ură</text>
<text x="80" y="268" font-size="13" text-anchor="middle" fill="#0f172a">propagandă</text>
<text x="200" y="182" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Boicot</text>
<text x="200" y="215" font-size="13" text-anchor="middle" fill="#0f172a">1933</text>
<text x="320" y="132" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Legi rasiale</text>
<text x="320" y="165" font-size="13" text-anchor="middle" fill="#0f172a">1935 · 1938 Italia</text>
<text x="440" y="82" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Violență</text>
<text x="440" y="115" font-size="13" text-anchor="middle" fill="#fff">Noaptea de cristal 1938</text>
<text x="560" y="32" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Exterminare</text>
<text x="560" y="65" font-size="13" text-anchor="middle" fill="#fff">Shoah 1941–45</text>
</svg>`
        },
        {
          label: "📅 Datele în șir",
          html: `<p>Trei povești paralele în douăzeci de ani: vezi cum se împletesc.</p>`,
          widget: "timeline",
          options: {
            unit: "ani",
            events: [
              { year: 1917, label: "Revoluția rusă", icon: "🚩" },
              { year: 1919, label: "Fasci di comb.", icon: "⚫" },
              { year: 1922, label: "Marșul asupra Romei", icon: "🚶" },
              { year: 1924, label: "Crima Matteotti", icon: "🕯️" },
              { year: 1928, label: "Planurile lui Stalin", icon: "🏭" },
              { year: 1929, label: "Criza de la Wall Street", icon: "📉" },
              { year: 1933, label: "Hitler la putere", icon: "🇩🇪" },
              { year: 1935, label: "Legile de la Nürnberg", icon: "📜" },
              { year: 1938, label: "Legi rasiale Italia", icon: "🚫" }
            ]
          }
        },
        {
          label: "🔗 Potrivește persoane și fapte",
          html: `<p>Leagă fiecare nume de rolul lui.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Lenin", "Conduce revoluția din octombrie"],
              ["Stalin", "Planuri cincinale și mari epurări"],
              ["Mussolini", "Întemeiază Fasci di combattimento"],
              ["Matteotti", "Denunță violențele și este ucis"],
              ["Hitler", "Cancelar în 1933, apoi Führer"],
              ["Hannah Arendt", "Studiază originile totalitarismului"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta totalitarismelor: atinge nodurile și află de ce",
      nodes: [
        { id: "guerra", label: "Moștenirea războiului", x: 15, y: 8, color: "#64748b", html: "Milioane de foști soldați, violență, resentimente față de tratate.", why: "Marele Război „obișnuise” oamenii cu moartea și cu disciplina militară; tratatele din 1919 au lăsat Italia și Germania nemulțumite." },
        { id: "crisi", label: "Crize economice", x: 50, y: 8, color: "#f59e0b", html: "Inflație, șomaj, criza din 1929.", why: "Datoriile de război și reparațiile au destabilizat economiile; prăbușirea de la Wall Street (octombrie 1929) s-a răspândit în Europa pentru că băncile americane și-au retras împrumuturile." },
        { id: "paura", label: "Frica de revoluție", x: 85, y: 8, color: "#ef4444", html: "Teama că se va răspândi comunismul rus.", why: "După 1917, grevele și ocupările (biennio rosso în Italia, revoltele din Germania) i-au speriat pe burghezi și pe proprietari, care au sprijinit adesea mișcările fasciste ca pe un „dig”." },
        { id: "urss", label: "URSS a lui Stalin", x: 15, y: 45, color: "#dc2626", html: "Partid comunist, planuri cincinale, gulag, epurări.", why: "Născută dintr-o revoluție și dintr-un război civil, URSS considera legitim să folosească teroarea împotriva „dușmanilor de clasă”; Stalin a extins-o asupra oricui s-ar fi putut opune." },
        { id: "fascismo", label: "Fascismul", x: 50, y: 45, color: "#1f2937", html: "Squadrism, Marșul asupra Romei, legile fascistissime, consens, legi rasiale.", why: "Mussolini a exploatat frica de socialism și slăbiciunea guvernelor liberale; monarhia și o parte a elitelor au crezut că îl pot controla." },
        { id: "nazismo", label: "Nazismul", x: 85, y: 45, color: "#7f1d1d", html: "Rasism, antisemitism, Führer, Gestapo, SS, spațiu vital.", why: "Hitler a ajuns la putere legal, exploatând criza din 1929 și slăbiciunea Weimar-ului; conservatorii l-au făcut cancelar crezând că îl vor „îmblânzi”. Antisemitismul avea rădăcini vechi în Europa, pe care nazismul le-a transformat într-o falsă „știință a raselor”." },
        { id: "metodi", label: "Metode comune", x: 50, y: 70, color: "#7c3aed", html: "Partid unic, lider, propagandă, teroare, controlul tinerilor.", why: "Noile tehnologii de masă (radio, cinema, megafoane, presă) permiteau pentru prima oară să ajungi cu propaganda în fiecare casă: controlul putea deveni „total”." },
        { id: "resistenza", label: "Opozanții", x: 15, y: 90, color: "#16a34a", html: "Antifasciști, disidenți, exilați, persecutați.", why: "Oameni ca Matteotti, Gramsci, frații Rosselli, cei 12 profesori, disidenții sovietici au plătit cu închisoarea, cu exilul sau cu viața. Memoria lor stă la baza democrațiilor născute după 1945." },
        { id: "guerra2", label: "Spre Al Doilea Război", x: 85, y: 90, color: "#0ea5e9", html: "Reînarmare, Etiopia, Spania, Anschluss, Axa Roma-Berlin.", why: "Regimurile fascist și nazist glorificau războiul ca probă de forță și căutau cuceriri; democrațiile, obosite de războiul precedent, au încercat să-l evite cedând." }
      ],
      edges: [
        ["guerra", "fascismo", "alimentează"],
        ["crisi", "nazismo", "favorizează"],
        ["paura", "fascismo", "împinge spre"],
        ["paura", "nazismo", "împinge spre"],
        ["guerra", "urss", "face să cadă țarul →"],
        ["urss", "metodi", "folosește"],
        ["fascismo", "metodi", "folosește"],
        ["nazismo", "metodi", "folosește"],
        ["metodi", "resistenza", "persecută"],
        ["fascismo", "guerra2", "duce la"],
        ["nazismo", "guerra2", "duce la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: nazismul",
      questions: [
        { type: "mc", q: "Cum a devenit Hitler cancelar în 1933?", options: ["Printr-o revoluție armată", "A fost numit de președintele Hindenburg după succesul electoral", "A câștigat un război civil"], answer: 1, explain: "A fost numit legal la 30 ianuarie 1933." },
        { type: "tf", q: "Legile de la Nürnberg din 1935 le-au luat evreilor cetățenia germană.", answer: true, explain: "Au fost o etapă fundamentală a persecuției." },
        { type: "mc", q: "Ce a fost „noaptea de cristal”?", options: ["O sărbătoare nazistă", "Un pogrom împotriva evreilor în noiembrie 1938", "Incendiul Reichstagului"], answer: 1, explain: "Sinagogile și magazinele evreiești au fost distruse în toată Germania." }
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li><b>Totalitarism</b>: partid unic, lider carismatic, ideologie, propagandă, poliție secretă și teroare, controlul tinerilor și al economiei.</li>
<li><b>URSS</b>: revoluția din octombrie (1917), Lenin; apoi <b>Stalin</b>: planuri cincinale, colectivizare, foamete, gulag, epurări.</li>
<li><b>Italia</b>: Fasci (1919), <b>Marșul asupra Romei</b> (1922), <b>crima Matteotti</b> (1924), legile fascistissime (1925–26), Pactele de la Lateran (1929), Etiopia (1935–36), <b>legile rasiale</b> (1938).</li>
<li><b>Germania</b>: Weimar, criza din 1929, <b>Hitler cancelar</b> (1933), Führer (1934), legile de la <b>Nürnberg</b> (1935), noaptea de cristal (1938).</li>
<li>Libertatea se apără recunoscând din timp propaganda, ura și discriminările.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Totalitarism", d: "Regim care vrea să controleze orice aspect al vieții publice și private." },
    { t: "Cultul personalității", d: "Glorificarea liderului ca persoană excepțională și infailibilă." },
    { t: "Propagandă", d: "Răspândirea organizată de idei și mesaje pentru a obține consens." },
    { t: "Bolșevici", d: "Comuniștii ruși conduși de Lenin." },
    { t: "Gulag", d: "Sistemul de lagăre de muncă forțată al URSS." },
    { t: "Colectivizare", d: "Trecerea forțată a pământurilor private la mari întreprinderi de stat sau colective." },
    { t: "Squadrism", d: "Violența organizată a echipelor fasciste împotriva adversarilor politici." },
    { t: "Legile fascistissime", d: "Legi din 1925–26 care au transformat Italia într-o dictatură." },
    { t: "Confino", d: "Obligația de a locui într-un loc izolat, impusă opozanților." },
    { t: "Antisemitism", d: "Ură și discriminare împotriva evreilor." },
    { t: "Legi rasiale", d: "Legi discriminatorii împotriva evreilor: în Germania din 1935, în Italia din 1938." },
    { t: "Führer", d: "„Conducător”: titlu asumat de Hitler ca șef absolut al Germaniei." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre aceste trăsături NU aparține unui regim totalitar?", options: ["Partid unic", "Poliție secretă", "Libertatea presei", "Cultul liderului"], answer: 2, explain: "În totalitarisme presa este controlată și cenzurată." },
      { type: "text", q: "Cum se numeau lagărele sovietice de muncă forțată?", answer: ["gulag", "gulagul", "gulagurile", "gulaguri"], explain: "Gulagurile." },
      { type: "mc", q: "Ce a fost colectivizarea dorită de Stalin?", options: ["Împărțirea pământului țăranilor individuali", "Trecerea forțată a pământurilor la mari întreprinderi colective sau de stat", "Vânzarea pământurilor către străini"], answer: 1, explain: "Țăranii au fost siliți să intre în colhozuri." },
      { type: "order", q: "Pune în ordine cronologică evenimentele italiene.", items: ["Întemeierea Fasci di combattimento", "Marșul asupra Romei", "Crima Matteotti", "Pactele de la Lateran", "Legile rasiale"], explain: "1919, 1922, 1924, 1929, 1938." },
      { type: "mc", q: "Ce a făcut regele în timpul Marșului asupra Romei?", options: ["A semnat starea de asediu", "A refuzat starea de asediu și a încredințat guvernul lui Mussolini", "A fugit în străinătate"], answer: 1, explain: "La 30 octombrie 1922 l-a însărcinat pe Mussolini." },
      { type: "tf", q: "Prin Pactele de la Lateran din 1929 s-a născut Statul Cetății Vaticanului.", answer: true, explain: "A fost acordul dintre statul italian și Sfântul Scaun." },
      { type: "num", q: "În ce an a fost numit Hitler cancelar?", answer: 1933, explain: "La 30 ianuarie 1933." },
      { type: "mc", q: "Care eveniment economic a favorizat ascensiunea nazismului?", options: ["Descoperirea petrolului", "Criza din 1929", "Revoluția industrială"], answer: 1, explain: "Șomajul de masă a adus voturi nazișilor." },
      { type: "mc", q: "Ce au stabilit legile rasiale italiene din 1938?", options: ["Egalitatea tuturor cetățenilor", "Excluderea evreilor din școli, universități și funcții publice", "Dreptul de vot pentru femei"], answer: 1, explain: "Au fost legi de discriminare și persecuție." },
      { type: "text", q: "Cum se numea poliția secretă nazistă?", answer: ["gestapo", "gestapoul", "gestapo-ul"], explain: "Gestapo." },
      { type: "tf", q: "Fascismul și nazismul au ajuns la putere doar prin forță, fără niciun sprijin al instituțiilor.", answer: false, explain: "Mussolini a fost numit de rege, iar Hitler de președintele Hindenburg: amândoi au avut sprijinul unei părți a elitelor." },
      { type: "mc", q: "Cine a scris „Originile totalitarismului” (1951)?", options: ["Hannah Arendt", "Karl Marx", "Primo Levi"], answer: 0, explain: "Filosoafa Hannah Arendt." }
    ]
  }
});
