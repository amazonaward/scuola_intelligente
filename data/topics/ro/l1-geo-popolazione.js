TOPIC('ro', {
  id: "l1-geo-popolazione",
  title: "Populația lumii",
  intro: "În noiembrie 2022 oamenii au depășit <b>8 miliarde</b>. Cum s-a ajuns aici? De ce în unele țări se nasc mulți copii, iar în altele foarte puțini? Și de ce jumătate din omenire trăiește în câteva zone foarte dens populate? <b>Demografia</b> studiază numerele, vârstele și distribuția oamenilor: te ajută să înțelegi economia, școala, sănătatea și viitorul.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Câți suntem și cum am crescut",
      html: `<p>Populația lumii a avut nevoie de aproape toată istoria umană pentru a ajunge la <b>primul miliard</b> (în jurul anului <b>1804</b>), apoi a accelerat vertiginos:</p>
<ul>
<li>1 miliard: circa <b>1804</b></li>
<li>2 miliarde: <b>1927</b> (123 de ani mai târziu)</li>
<li>4 miliarde: <b>1974</b></li>
<li>6 miliarde: <b>1999</b></li>
<li>8 miliarde: <b>noiembrie 2022</b> (estimare ONU)</li>
</ul>
<p>Ultimul miliard a venit în doar <b>circa 11-12 ani</b>. Cauza nu este că se fac mai mulți copii per femeie (dimpotrivă, <b>fertilitatea</b> mondială a scăzut), ci că se <b>moare mult mai puțin</b>: igiena, vaccinurile, antibioticele, apa potabilă, mai multă hrană au coborât mortalitatea, mai ales cea infantilă. <b>Speranța de viață</b> mondială la naștere a crescut de la circa 30-35 de ani în 1800 la peste <b>70 de ani</b> astăzi.</p>
<p>Primul care s-a gândit la creșterea demografică a fost economistul englez <b>Thomas Malthus</b>, care în <b>1798</b> a susținut că populația crește în progresie geometrică (1, 2, 4, 8…), iar resursele alimentare doar în progresie aritmetică (1, 2, 3, 4…), și că, prin urmare, foametea și războaiele sunt inevitabile. Nu prevăzuse progresul tehnic (îngrășăminte, mașini, semințe noi) care a multiplicat recoltele. Problema, astăzi, este mai des <b>distribuția</b> hranei decât cantitatea ei, și <b>sustenabilitatea</b> mediului.</p>`
    },
    {
      type: "widget",
      title: "Axa timpului: miliardele",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: 1804, label: "1 miliard", icon: "👶" },
          { year: 1927, label: "2 miliarde", icon: "👨‍👩‍👧" },
          { year: 1960, label: "3 miliarde", icon: "🏙️" },
          { year: 1974, label: "4 miliarde", icon: "🌍" },
          { year: 1987, label: "5 miliarde", icon: "📈" },
          { year: 1999, label: "6 miliarde", icon: "🌐" },
          { year: 2011, label: "7 miliarde", icon: "📱" },
          { year: 2022, label: "8 miliarde", icon: "🚀" }
        ]
      },
      caption: "Cu cât ne apropiem de prezent, cu atât miliardele vin mai repede: o accelerare fără precedent în istoria omenirii."
    },
    {
      type: "text",
      title: "2. Indicatorii demografici",
      html: `<p>Pentru a descrie o populație se folosesc câțiva indici fundamentali:</p>
<ul>
<li><b>Rata natalității</b>: născuți la 1.000 de locuitori într-un an (ex. Italia circa 6-7 ‰; Niger circa 45 ‰).</li>
<li><b>Rata mortalității</b>: decese la 1.000 de locuitori într-un an (Italia circa 11-12 ‰).</li>
<li><b>Sporul natural</b> = natalitate − mortalitate. În Italia este <b>negativ</b>: mor mai multe persoane decât se nasc (din 2015 aproximativ; în 2023 nașterile au fost în jur de 380.000, un minim istoric).</li>
<li><b>Rata fertilității</b> (sau numărul mediu de copii per femeie). Pentru a menține populația stabilă sunt necesari circa <b>2,1 copii per femeie</b> („pragul de înlocuire”). Media mondială: circa 2,3. Italia: circa <b>1,2</b>; Coreea de Sud: sub <b>0,8</b>, minimul mondial; Niger: peste <b>6</b>.</li>
<li><b>Mortalitatea infantilă</b>: decese în primul an de viață la 1.000 de născuți vii (Italia circa 2-3 ‰; Africa subsahariană peste 50 ‰ în medie).</li>
<li><b>Speranța de viață la naștere</b>: Japonia și Italia peste 83-84 de ani; Ciad, Nigeria și Republica Centrafricană în jur de 53-55.</li>
<li><b>Indicele de îmbătrânire</b>: vârstnici (peste 65 de ani) la 100 de tineri (0-14 ani). În Italia este peste 190: vârstnicii sunt aproape dublu față de tineri.</li>
</ul>
<p>Creșterea totală depinde de <b>sporul natural</b> și de <b>soldul migratoriu</b> (imigranți − emigranți).</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: calculul unei rate",
      html: `<p>O țară are <b>60 de milioane</b> de locuitori. Într-un an se nasc <b>420.000</b> de copii și mor <b>700.000</b> de persoane. Calculează natalitatea, mortalitatea și sporul natural.</p>
<ul>
<li>Natalitatea = 420.000 ÷ 60.000.000 × 1.000 = <b>7 ‰</b></li>
<li>Mortalitatea = 700.000 ÷ 60.000.000 × 1.000 ≈ <b>11,7 ‰</b></li>
<li>Sporul natural = 420.000 − 700.000 = <b>−280.000</b> de persoane, adică circa −4,7 ‰</li>
</ul>
<p>Populația scade cu 280.000 de persoane pe an din cauze naturale (ca un oraș de 280.000 de locuitori care dispare în fiecare an). Pentru a o menține stabilă ar fi nevoie de un sold migratoriu pozitiv de aceeași mărime sau de o creștere a nașterilor.</p>`
    },
    {
      type: "text",
      title: "3. Tranziția demografică",
      html: `<p>Studiind țările europene, demografii (Warren Thompson în 1929, Frank Notestein în 1945) au descris un model în <b>patru faze</b>, <b>tranziția demografică</b>, în care o țară trece de la „mulți născuți și mulți morți” la „puțini născuți și puțini morți”:</p>
<ol>
<li><b>Faza preindustrială</b>: natalitate <b>mare</b>, mortalitate <b>mare</b>. Populația crește puțin (Europa până în secolul al XVIII-lea, unele zone izolate azi).</li>
<li><b>Faza de expansiune</b>: mortalitatea <b>scade</b> (medicină, igienă), natalitatea rămâne mare: <b>explozie demografică</b> (Europa în secolul al XIX-lea; azi Africa subsahariană).</li>
<li><b>Faza de încetinire</b>: și natalitatea <b>scade</b> (urbanizare, educația femeilor, contracepție, costul copiilor): creșterea încetinește (America Latină, India, cea mai mare parte a Asiei).</li>
<li><b>Faza matură</b>: natalitate <b>mică</b>, mortalitate <b>mică</b>. Creștere aproape nulă sau negativă; îmbătrânire (Europa, Japonia, Coreea).</li>
</ol>
<p>Unii cercetători propun o a cincea, în care natalitatea scade <b>sub</b> mortalitate, iar populația <b>scade</b> (Italia, Japonia, China din 2022).</p>`
    },
    {
      type: "svg",
      title: "Modelul tranziției demografice",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="50" y1="250" x2="570" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="50" y1="30" x2="50" y2="250" stroke="#111827" stroke-width="2"/>
<path d="M50 60 L170 60 C220 60 250 100 300 150 C360 200 420 225 570 225" fill="none" stroke="#2563eb" stroke-width="5"/>
<path d="M50 65 L130 65 C180 65 200 150 250 200 C300 235 400 240 570 240" fill="none" stroke="#dc2626" stroke-width="5"/>
<path d="M170 60 C220 60 250 100 300 150 C360 200 420 225 570 225 L570 240 C400 240 300 235 250 200 C200 150 180 65 130 65 Z" fill="#fde68a" opacity="0.6"/>
<line x1="170" y1="250" x2="170" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="300" y1="250" x2="300" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="420" y1="250" x2="420" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="110" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Faza 1</text>
<text x="235" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Faza 2</text>
<text x="360" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Faza 3</text>
<text x="495" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Faza 4</text>
<text x="60" y="48" font-size="15" fill="#2563eb" font-weight="bold">natalitate</text>
<text x="100" y="95" font-size="15" fill="#dc2626" font-weight="bold">mortalitate</text>
<text x="240" y="150" font-size="14" fill="#92400e" font-weight="bold">creștere</text>
<text x="420" y="20" font-size="14" text-anchor="middle" fill="#111827">timp și dezvoltare →</text>
</svg>`,
      caption: "Zona galbenă dintre cele două curbe este creșterea naturală: maximă în faza 2, când mortalitatea a scăzut deja, dar natalitatea este încă mare."
    },
    {
      type: "quiz",
      title: "Mini-test: indicatori și tranziție",
      questions: [
        { type: "mc", q: "Câți copii per femeie sunt necesari (aproximativ) pentru a menține stabilă o populație?", options: ["1,0", "2,1", "4,0"], answer: 1, explain: "Pragul de înlocuire este circa 2,1: puțin peste 2 pentru că nu toți născuții ajung la vârsta adultă." },
        { type: "mc", q: "În ce fază a tranziției creșterea este maximă?", options: ["Faza 1", "Faza 2", "Faza 4"], answer: 1, explain: "În faza 2 mortalitatea a scăzut deja, dar natalitatea este încă mare." },
        { type: "num", q: "Într-o țară de 10 milioane de locuitori se nasc 150.000 de copii într-un an. Care este rata natalității (în ‰)?", answer: 15, tol: 0, unit: "‰", explain: "150.000 ÷ 10.000.000 × 1.000 = 15 la mie." }
      ]
    },
    {
      type: "text",
      title: "4. Piramida vârstelor",
      html: `<p><b>Piramida vârstelor</b> este un grafic cu bare orizontale: fiecare bară reprezintă o grupă de vârstă (de obicei în grupe de 5 ani), cu bărbații în stânga și femeile în dreapta. Din formă se înțelege starea demografică a unei țări:</p>
<ul>
<li><b>Piramidă expansivă</b> (bază largă, vârf îngust): mulți tineri, natalitate mare, mortalitate mare la vârsta adultă (Niger, Mali, Somalia, Afganistan). Populație foarte tânără (vârsta mediană în jur de 15-16 ani).</li>
<li><b>Piramidă staționară</b> (formă aproape dreptunghiulară): natalitate și mortalitate mici și asemănătoare.</li>
<li><b>Piramidă regresivă</b> (bază îngustă, umflătură la vârstele mijlocii-înalte): puțini tineri și mulți vârstnici (Italia, Japonia, Germania, Coreea). Vârsta mediană a italienilor este de circa <b>48 de ani</b>, printre cele mai ridicate din lume.</li>
</ul>
<p>Consecințele se văd în viața reală: într-o țară tânără sunt necesare școli, locuri de muncă pentru milioane de tineri (și poate apărea un <b>dividend demografic</b>, dacă tinerii găsesc un loc de muncă); într-o țară îmbătrânită cresc <b>pensiile și sănătatea</b>, lipsesc lucrătorii, se închid școli și sate.</p>`
    },
    {
      type: "svg",
      title: "Trei piramide ale vârstelor comparate",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="100" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Expansivă</text>
<text x="300" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Staționară</text>
<text x="500" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Regresivă</text>
<g fill="#38bdf8" stroke="#075985">
<rect x="30" y="230" width="140" height="20"/>
<rect x="45" y="205" width="110" height="20"/>
<rect x="58" y="180" width="84" height="20"/>
<rect x="70" y="155" width="60" height="20"/>
<rect x="78" y="130" width="44" height="20"/>
<rect x="86" y="105" width="28" height="20"/>
<rect x="92" y="80" width="16" height="20"/>
<rect x="96" y="55" width="8" height="20"/>
</g>
<g fill="#38bdf8" stroke="#075985">
<rect x="235" y="230" width="130" height="20"/>
<rect x="232" y="205" width="136" height="20"/>
<rect x="230" y="180" width="140" height="20"/>
<rect x="232" y="155" width="136" height="20"/>
<rect x="236" y="130" width="128" height="20"/>
<rect x="244" y="105" width="112" height="20"/>
<rect x="256" y="80" width="88" height="20"/>
<rect x="276" y="55" width="48" height="20"/>
</g>
<g fill="#38bdf8" stroke="#075985">
<rect x="460" y="230" width="80" height="20"/>
<rect x="450" y="205" width="100" height="20"/>
<rect x="440" y="180" width="120" height="20"/>
<rect x="430" y="155" width="140" height="20"/>
<rect x="435" y="130" width="130" height="20"/>
<rect x="445" y="105" width="110" height="20"/>
<rect x="455" y="80" width="90" height="20"/>
<rect x="470" y="55" width="60" height="20"/>
</g>
<text x="100" y="275" font-size="14" text-anchor="middle" fill="#111827">Niger, Mali</text>
<text x="300" y="275" font-size="14" text-anchor="middle" fill="#111827">Statele Unite (aprox.)</text>
<text x="500" y="275" font-size="14" text-anchor="middle" fill="#111827">Italia, Japonia</text>
<text x="20" y="245" font-size="14" fill="#111827">0</text>
<text x="20" y="70" font-size="14" fill="#111827">80+</text>
</svg>`,
      caption: "Pe axa verticală este vârsta (jos copiii, sus vârstnicii), lățimea barelor indică numărul de persoane. Desene schematice (fără scară)."
    },
    {
      type: "text",
      title: "5. Unde trăiește omenirea: distribuție și densitate",
      html: `<p>Oamenii nu sunt distribuiți uniform. <b>Densitatea populației</b> se calculează împărțind numărul de locuitori la suprafață (locuitori/km²):</p>
<ul>
<li>media mondială: circa <b>60 loc./km²</b> (calculată pe uscat);</li>
<li><b>Bangladesh</b>: peste 1.100 loc./km², printre cele mai dens populate țări mari din lume;</li>
<li><b>Italia</b>: circa <b>195</b> loc./km² (cu valori foarte diferite între Lombardia și Sardinia sau Valle d'Aosta);</li>
<li><b>Mongolia</b>: circa <b>2</b> loc./km²; <b>Groenlanda</b>: circa 0,03; <b>Monaco</b>: aproape 20.000.</li>
</ul>
<p>Mai mult de <b>jumătate</b> din omenire trăiește în Asia (circa 59%), Africa găzduiește circa 18%, Europa mai puțin de 10%. Cele mai populate țări sunt <b>India</b> (care în 2023 a depășit China, circa 1,43 miliarde), <b>China</b>, Statele Unite, Indonezia, Pakistan, Nigeria, Brazilia.</p>
<p>Zonele cele mai <b>populate</b> se află acolo unde există <b>câmpii fertile</b>, <b>râuri</b> și <b>climate blânde</b>: văile Gangelui, Fluviului Galben și Yangtze, Java, Câmpia Padului, Nilul (în Egipt <b>95%</b> din locuitori trăiesc de-a lungul fluviului și în deltă). Zonele <b>nepopulate</b> sunt deșerturi, păduri reci, munții înalți, regiunile polare. Astăzi mai mult de jumătate din populație (circa <b>57%</b>) trăiește în <b>orașe</b>, iar proporția crește.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: densitate și spațiu pe persoană",
      html: `<p><b>Italia</b> are circa 59 de milioane de locuitori pe circa 302.000 km². Densitatea = 59.000.000 ÷ 302.000 ≈ <b>195 loc./km²</b>. În medie, fiecărui locuitor îi revin circa 5.100 m² (adică aproape o jumătate de hectar).</p>
<p><b>Lombardia</b> are circa 10 milioane de locuitori pe circa 23.900 km²: densitate ≈ <b>420 loc./km²</b>, mai mult decât dublul mediei naționale. <b>Valle d'Aosta</b> are circa 123.000 de locuitori pe 3.260 km²: densitate ≈ <b>38 loc./km²</b>.</p>
<p>Atenție: densitatea este o <b>medie</b> și poate înșela. Egiptul are circa 100 de milioane de locuitori pe 1 milion de km² (densitate ≈ 100), dar aproape toți trăiesc pe mai puțin de 5% din teritoriu: densitatea „fiziologică” (doar pe pământul locuit sau cultivat) este mult mai mare.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… China a avut politica copilului unic?",
      html: `<p>Din <b>1979</b> până în <b>2015</b> China a impus aproape tuturor familiilor să aibă <b>un singur copil</b>, pentru a frâna creșterea demografică. Rezultatul a fost o scădere puternică a natalității, dar și o îmbătrânire foarte rapidă: astăzi populația chineză a început să <b>scadă</b> (din 2022), iar mulți tineri trebuie să susțină doi părinți și patru bunici. Din 2016 sunt permiși doi copii, din 2021 trei.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… Japonia are 29% de persoane peste 65 de ani?",
      html: `<p><b>Japonia</b> este cea mai „bătrână” dintre țările mari: circa <b>29%</b> dintre locuitori au peste 65 de ani (în Italia circa 24%, în Niger mai puțin de 3%). În Japonia se vând mai multe scutece pentru adulți decât pentru copii, iar multe sate rămân goale. Răspunsul este <b>robotica</b> pentru asistență, prelungirea vieții active și (cu prudență) o mai mare deschidere față de imigrație.</p>`
    },
    {
      type: "text",
      title: "6. Viitorul: câți vom fi?",
      html: `<p>Proiecțiile ONU (<i>World Population Prospects 2024</i>) indică faptul că populația lumii ar putea atinge un <b>vârf de circa 10,3 miliarde</b> în jurul anilor <b>optzeci</b> ai acestui secol, apoi ar putea începe să scadă lent. Motivul: fertilitatea scade aproape peste tot, chiar și în țările cele mai sărace, mai repede decât se credea.</p>
<p>Creșterea viitoare va fi concentrată în <b>Africa subsahariană</b>, care în 2100 ar putea avea aproape jumătate din tinerii lumii, și în Asia de Sud; în multe țări (Europa, Asia de Est) populația va <b>scădea</b>. Provocările: crearea de locuri de muncă pentru sute de milioane de tineri africani, garantarea pensiilor și a asistenței pentru vârstnicii din Nordul lumii, folosirea resurselor în mod sustenabil.</p>
<p>Atenție: sunt <b>proiecții</b>, nu previziuni sigure. Demografii calculează scenarii diferite (ridicat, mediu, scăzut) în funcție de evoluția fertilității.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege populația lumii",
      intro: "Numerele demografiei sunt uriașe. Iată cum le putem face concrete.",
      tabs: [
        {
          label: "🏘️ Satul de 100 de persoane",
          html: `<p>Dacă lumea ar fi un sat de <b>100 de persoane</b>, cu proporțiile actuale: circa <b>59 ar trăi în Asia</b> (dintre care circa 17 în India și 17 în China), <b>18 în Africa</b>, <b>9 în Europa</b>, <b>8 în America Latină</b>, <b>5 în America de Nord</b>, <b>mai puțin de 1</b> în Oceania. Circa <b>57 ar trăi în orașe</b>. Circa <b>26 ar avea sub 15 ani</b> și <b>10 peste 65</b>. Așa miliardele devin o poveste pe care ți-o poți imagina.</p>`
        },
        {
          label: "🛁 Cada și robinetele",
          html: `<p>Gândește-te la populație ca la o cadă. <b>Nașterile</b> sunt robinetul, <b>decesele</b> scurgerea. În faza 1 robinetul este deschis mult, iar scurgerea la fel: nivelul urcă puțin. În faza 2 se <b>strânge scurgerea</b> (medicina), dar robinetul rămâne deschis: cada se umple repede. În faza 3 se închide și robinetul: nivel mai stabil. În faza 5 robinetul este mai închis decât scurgerea: nivelul scade. Migranții sunt al doilea robinet, cel care intră din afară.</p>`
        },
        {
          label: "📊 Cât cântăresc tinerii?",
          html: `<p>Compară <b>vârstele mediane</b> (vârsta care împarte populația în două jumătăți egale): Niger circa <b>15 ani</b> (jumătate din populație are sub 15 ani!), India circa 28, Statele Unite circa 38, Italia circa 48, Japonia circa 49. Imaginează-ți o clasă de 20 de persoane alese la întâmplare: în Niger 10 dintre ele ar avea sub 15 ani; în Japonia circa 2 din 20 ar avea sub 15 ani și aproape 6 peste 65. Este un indicator simplu care rezumă piramida.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: dinamica populației",
      nodes: [
        { id: "natalita", label: "Natalitate și fertilitate", x: 20, y: 8, color: "#2563eb", html: "Născuți la 1.000 de locuitori; copii per femeie.", why: "Fertilitatea scade odată cu educația femeilor, urbanizarea, contracepția, costul copiilor și scăderea mortalității infantile (se fac mai puțini copii când ești sigur că vor supraviețui)." },
        { id: "mortalita", label: "Mortalitate și speranța de viață", x: 80, y: 8, color: "#dc2626", html: "Decese la 1.000 de locuitori; ani de viață medie.", why: "Scăderea mortalității a venit din igiena publică, vaccinuri (primul, împotriva variolei, a fost pus la punct de Edward Jenner în 1796), antibiotice (penicilina descoperită de Fleming în 1928) și alimentație mai bună." },
        { id: "transizione", label: "Tranziția demografică", x: 50, y: 32, color: "#a855f7", html: "De la modelul „mulți născuți, mulți morți” la „puțini născuți, puțini morți”.", why: "Se bazează pe observarea Europei între secolele al XIX-lea și al XX-lea; nu este o lege, ci un model: ordinea fazelor se repetă în multe țări, dar duratele diferă (Coreea de Sud a parcurs-o în 40 de ani, Franța în 150)." },
        { id: "piramide", label: "Piramida vârstelor", x: 20, y: 58, color: "#f59e0b", html: "Distribuția pe vârste și sexe.", why: "Forma este „amintirea” istoriei demografice: baby boom-ul de după război (1946-1964) sau scăderea natalității din anii '90 rămân vizibile decenii întregi ca umflături sau scobituri în piramidă." },
        { id: "densita", label: "Distribuție și densitate", x: 80, y: 58, color: "#16a34a", html: "Unde trăiesc oamenii: câmpii, râuri, coaste, orașe.", why: "Primele civilizații au apărut de-a lungul marilor râuri (Nil, Tigru-Eufrat, Indus, Fluviul Galben) pentru că agricultura irigată susține mulți oameni pe km²: geografia populației păstrează acea moștenire." },
        { id: "migrazioni", label: "Migrații", x: 50, y: 78, color: "#ec4899", html: "Deplasări care schimbă populația unui loc.", why: "Unde populația crește repede și lipsesc munca și resursele, sau unde îmbătrânește și sunt necesari lucrători, apar fluxurile migratorii: demografia este una dintre principalele cauze ale migrațiilor." },
        { id: "futuro", label: "Sustenabilitate și viitor", x: 50, y: 95, color: "#14b8a6", html: "Vârf în jur de 10,3 miliarde, apoi scădere.", why: "Raportul Brundtland (1987) și Agenda 2030 (2015) leagă demografia de folosirea resurselor: nu contează doar câți suntem, ci cât consumăm (un cetățean american consumă mult mai multe resurse decât unul din Niger)." }
      ],
      edges: [
        ["natalita", "transizione", "scăderea nașterilor →"],
        ["mortalita", "transizione", "scăderea deceselor →"],
        ["transizione", "piramide", "schimbă"],
        ["transizione", "densita", "odată cu urbanizarea"],
        ["piramide", "migrazioni", "dezechilibrele generează"],
        ["densita", "migrazioni", "dezechilibrele generează"],
        ["migrazioni", "futuro", "influențează"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>8 miliarde de oameni (noiembrie 2022); creștere foarte rapidă din 1800 datorită scăderii mortalității.</li>
<li><b>Natalitate</b> și <b>mortalitate</b> (la mie); <b>spor natural</b> și <b>sold migratoriu</b>; <b>fertilitate</b> (înlocuire = 2,1).</li>
<li><b>Tranziția demografică</b>: 4 faze; Italia și Japonia în faza matură/regresivă, Africa subsahariană în faza de expansiune.</li>
<li><b>Piramida</b>: expansivă (Niger), staționară, regresivă (Italia, Japonia).</li>
<li><b>Densitatea</b> = locuitori ÷ km²; omenirea trăiește mai ales în câmpii fertile, lângă râuri și coaste.</li>
<li>Vârf estimat în jur de <b>10,3 miliarde</b> în anii 2080, apoi scădere.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: densitate și piramide",
      questions: [
        { type: "num", q: "O țară are 2 milioane de locuitori pe 40.000 km². Care este densitatea?", answer: 50, tol: 0, unit: "loc./km²", explain: "2.000.000 ÷ 40.000 = 50 de locuitori pe km²." },
        { type: "mc", q: "Ce formă are piramida vârstelor unei țări cu puțini tineri și mulți vârstnici?", options: ["Expansivă", "Regresivă", "Triunghi echilateral"], answer: 1, explain: "Piramida regresivă are baza îngustă: puțini născuți, mulți vârstnici." },
        { type: "tf", q: "Italia are un spor natural pozitiv.", answer: false, explain: "În Italia decesele depășesc nașterile de ani de zile: sporul natural este negativ." }
      ]
    }
  ],
  glossary: [
    { t: "Demografie", d: "Disciplină care studiază dimensiunea, structura și evoluția populațiilor umane." },
    { t: "Rata natalității", d: "Numărul de născuți la 1.000 de locuitori într-un an." },
    { t: "Rata mortalității", d: "Numărul de decese la 1.000 de locuitori într-un an." },
    { t: "Spor natural", d: "Diferența dintre născuți și decese într-o perioadă." },
    { t: "Sold migratoriu", d: "Diferența dintre imigranți și emigranți într-o perioadă." },
    { t: "Rata fertilității", d: "Numărul mediu de copii per femeie în vârstă fertilă; pragul de înlocuire este circa 2,1." },
    { t: "Speranța de viață", d: "Numărul mediu de ani pe care îl poate aștepta să-i trăiască un nou-născut, în condițiile de mortalitate actuale." },
    { t: "Tranziție demografică", d: "Trecerea de la natalitate și mortalitate mari la natalitate și mortalitate mici." },
    { t: "Piramida vârstelor", d: "Grafic care reprezintă populația pe grupe de vârstă și sexe." },
    { t: "Densitatea populației", d: "Raportul dintre numărul de locuitori și suprafață, în locuitori pe km²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce cauză principală explică explozia demografică din ultimul secol?", options: ["Creșterea fertilității per femeie", "Scăderea puternică a mortalității", "Creșterea migrațiilor"], answer: 1, explain: "Medicina, igiena, vaccinurile și hrana au redus mai ales mortalitatea infantilă; fertilitatea, dimpotrivă, a scăzut." },
      { type: "num", q: "O țară are 50 de milioane de locuitori; într-un an se nasc 500.000 de copii. Care este rata natalității (‰)?", answer: 10, tol: 0, unit: "‰", explain: "500.000 ÷ 50.000.000 × 1.000 = 10 la mie." },
      { type: "mc", q: "Ce fază a tranziției demografice este caracterizată de natalitate mare și mortalitate în puternică scădere?", options: ["Faza 1", "Faza 2", "Faza 4"], answer: 1, explain: "Este faza de expansiune, cu cea mai mare creștere naturală." },
      { type: "tf", q: "Thomas Malthus a presupus că populația crește mai repede decât resursele alimentare.", answer: true, explain: "În 1798 a susținut că populația crește în progresie geometrică, iar hrana în progresie aritmetică. Nu a prevăzut progresul tehnic în agricultură." },
      { type: "mc", q: "Care dintre aceste țări are o piramidă a vârstelor expansivă?", options: ["Japonia", "Germania", "Niger"], answer: 2, explain: "Nigerul are o fertilitate de peste 6 copii per femeie și o populație foarte tânără." },
      { type: "text", q: "Cum se numește raportul dintre numărul de locuitori și suprafață?", answer: ["densitate", "densitatea", "densitatea populației", "densitate a populației"], explain: "Densitatea populației, în locuitori pe km²." },
      { type: "order", q: "Pune în ordine cronologică atingerea acestor borne.", items: ["1 miliard", "2 miliarde", "4 miliarde", "8 miliarde"], explain: "1804, 1927, 1974, 2022." },
      { type: "mc", q: "Ce zonă a lumii va avea cea mai mare creștere demografică în următoarele decenii?", options: ["Africa subsahariană", "Europa", "Japonia"], answer: 0, explain: "Fertilitatea în Africa subsahariană este încă mare, iar populația va continua să crească." },
      { type: "tf", q: "Densitatea populației unei țări descrie întotdeauna bine cum sunt distribuiți locuitorii pe teritoriu.", answer: false, explain: "Este o medie: Egiptul are o densitate modestă, dar aproape toți trăiesc pe Nil și în deltă." },
      { type: "mc", q: "De ce a creat probleme politica copilului unic din China (1979-2015)?", options: ["A accelerat îmbătrânirea populației", "A făcut natalitatea să crească prea mult", "A împiedicat urbanizarea"], answer: 0, explain: "A redus rapid nașterile; astăzi puțini lucrători tineri susțin mulți vârstnici." }
    ]
  }
});
