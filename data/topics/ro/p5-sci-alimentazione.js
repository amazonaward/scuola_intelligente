TOPIC('ro', {
  id: "p5-sci-alimentazione",
  title: "Alimentația",
  intro: "Hrana nu servește doar să ne potolească foamea: este <b>combustibilul</b> și <b>materialul de construcție</b> al corpului tău. Descoperim care sunt <b>nutrienții</b>, la ce servesc, cum se citește <b>piramida alimentelor</b> și de ce <b>dieta mediteraneană</b> este considerată una dintre cele mai sănătoase din lume.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "De ce mâncăm?",
      html: `<p>Corpul nostru are nevoie de hrană din trei motive:</p>
<ul>
<li>⚡ <b>energie</b>: ca să ne mișcăm, să respirăm, să gândim, să menținem corpul cald, la aproximativ 37 °C (chiar și când dormi!);</li>
<li>🧱 <b>construcție</b>: ca să creștem și să reparăm țesuturile (oase, mușchi, piele, păr);</li>
<li>🛡️ <b>protecție și reglare</b>: ca toate organele să funcționeze bine și să ne apărăm de boli.</li>
</ul>
<p>Substanțele utile din alimente se numesc <b>nutrienți</b> (sau principii nutritive). Niciun aliment nu le conține pe toate în cantitatea potrivită: de aceea trebuie să mâncăm <b>variat</b>.</p>`
    },
    {
      type: "text",
      title: "Nutrienții și munca lor",
      html: `<table>
<tr><th>Nutrientul</th><th>La ce servește</th><th>Unde se găsește</th></tr>
<tr><td>🍝 <b>Glucidele</b> (zaharuri și amidon)</td><td>dau <b>energie</b> imediată</td><td>paste, pâine, orez, cartofi, fructe, miere</td></tr>
<tr><td>🥩 <b>Proteinele</b></td><td><b>construiesc</b> și repară mușchii și țesuturile</td><td>carne, pește, ouă, leguminoase, lapte și brânzeturi</td></tr>
<tr><td>🫒 <b>Grăsimile</b> (lipidele)</td><td>energie de <b>rezervă</b>, izolează de frig, sunt necesare celulelor</td><td>ulei, unt, fructe oleaginoase, pește gras</td></tr>
<tr><td>🍊 <b>Vitaminele</b></td><td><b>protejează</b> și reglează corpul</td><td>mai ales în fructe și legume</td></tr>
<tr><td>🥛 <b>Sărurile minerale</b></td><td>construiesc oasele și dinții (calciu), sângele (fier)…</td><td>lapte, legume, leguminoase, apă</td></tr>
<tr><td>💧 <b>Apa</b></td><td>transportă, răcorește, este 60% din corp</td><td>de băut, dar și în fructe și legume</td></tr>
</table>
<p>Mai există și <b>fibrele</b> (în legume, fructe, cereale integrale și leguminoase): nu hrănesc, dar ajută intestinul să funcționeze bine.</p>`
    },
    {
      type: "widget",
      title: "Ce nutrient predomină?",
      widget: "classify",
      options: {
        groups: ["⚡ Glucide", "🧱 Proteine", "🫒 Grăsimi", "🍊 Vitamine și fibre"],
        items: [
          ["🍝 Paste", 0],
          ["🍞 Pâine", 0],
          ["🥔 Cartofi", 0],
          ["🐟 Pește", 1],
          ["🥚 Ouă", 1],
          ["🫘 Linte", 1],
          ["🧈 Unt", 2],
          ["🫒 Ulei de măsline", 2],
          ["🥕 Morcovi", 3],
          ["🥦 Broccoli", 3],
          ["🍊 Portocală", 3]
        ]
      },
      caption: "Fiecare aliment conține mai mulți nutrienți: pune-l în grupul celui care predomină."
    },
    {
      type: "quiz",
      title: "Mini-test: nutrienții",
      questions: [
        { type: "mc", q: "Care nutrienți servesc mai ales la construirea mușchilor?", options: ["Glucidele", "Proteinele", "Grăsimile"], answer: 1, explain: "Proteinele sunt „materialul de construcție” al corpului." },
        { type: "mc", q: "Pastele conțin mai ales…", options: ["glucide", "proteine", "vitamine"], answer: 0, explain: "Pastele sunt bogate în amidon, o glucidă." },
        { type: "tf", q: "Există un aliment care conține toți nutrienții în cantitatea potrivită.", answer: false, explain: "Niciun aliment nu este complet: de aceea trebuie să variem." }
      ]
    },
    {
      type: "text",
      title: "Piramida alimentelor",
      html: `<p><b>Piramida alimentelor</b> este un desen care arată <b>cât de des</b> trebuie să mâncăm fiecare grup de alimente:</p>
<ul>
<li><b>la bază</b> (în fiecare zi, din belșug): <b>apa</b>, <b>fructele și legumele</b> (cel puțin 5 porții pe zi) și <b>cerealele</b> (pâine, paste, orez, mai bine integrale);</li>
<li><b>la mijloc</b> (în fiecare zi, cu măsură): <b>lapte și iaurt</b>, <b>ulei de măsline extravirgin</b>, fructe oleaginoase, ierburi aromatice și condimente;</li>
<li><b>mai sus</b> (de câteva ori pe săptămână): <b>leguminoase</b>, <b>pește</b>, <b>ouă</b>, carne albă, brânzeturi;</li>
<li><b>în vârf</b> (rar, în cantități mici): <b>carne roșie</b> și mezeluri, <b>dulciuri</b>, băuturi îndulcite.</li>
</ul>
<p>La baza piramidei se află și <b>activitatea fizică</b> în fiecare zi: pentru un copil, cel puțin <b>60 de minute</b> de mișcare!</p>`
    },
    {
      type: "svg",
      title: "Piramida dietei mediteraneene",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#fffbeb"/>
<polygon points="300,20 345,80 255,80" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<polygon points="255,80 345,80 390,140 210,140" fill="#fb923c" stroke="#7c2d12" stroke-width="2"/>
<polygon points="210,140 390,140 435,200 165,200" fill="#facc15" stroke="#713f12" stroke-width="2"/>
<polygon points="165,200 435,200 480,260 120,260" fill="#a3e635" stroke="#365314" stroke-width="2"/>
<polygon points="120,260 480,260 525,320 75,320" fill="#38bdf8" stroke="#0c4a6e" stroke-width="2"/>
<text x="300" y="70" font-size="22" text-anchor="middle">🍰🥓</text>
<text x="300" y="120" font-size="16" text-anchor="middle" font-weight="bold">pește, ouă, leguminoase, carne albă</text>
<text x="300" y="180" font-size="16" text-anchor="middle" font-weight="bold">lapte, iaurt, ulei de măsline, nuci</text>
<text x="300" y="238" font-size="16" text-anchor="middle" font-weight="bold">fructe, legume, pâine, paste, orez</text>
<text x="300" y="298" font-size="16" text-anchor="middle" font-weight="bold">💧 apă și 🏃 mișcare în fiecare zi</text>
<text x="490" y="55" font-size="15" fill="#7f1d1d">rar</text>
<text x="410" y="115" font-size="15" fill="#7c2d12">pe săptămână</text>
<text x="450" y="175" font-size="15" fill="#713f12">zilnic, puțin</text>
<text x="40" y="235" font-size="15" fill="#365314">la fiecare masă</text>
</svg>`,
      caption: "Cu cât un grup este mai jos și mai lat, cu atât se mănâncă mai des. Cu cât este mai sus și mai îngust, cu atât se mănâncă mai rar."
    },
    {
      type: "text",
      title: "Ziua alimentară și farfuria sănătoasă",
      html: `<p>Este mai bine să împărțim mâncarea în <b>5 mese</b>:</p>
<ul>
<li>🥣 <b>micul dejun</b> (aproximativ 15–20% din energia zilei): nu-l sări, ai nevoie de energie pentru școală!</li>
<li>🍎 <b>gustarea</b> de la mijlocul dimineții (fructe, iaurt);</li>
<li>🍝 <b>prânzul</b> (aproximativ 35–40%);</li>
<li>🥪 <b>gustarea</b> de după-amiază;</li>
<li>🍲 <b>cina</b> (aproximativ 30%).</li>
</ul>
<p>Un truc pentru a compune farfuria: <b>jumătate legume și fructe</b>, <b>un sfert cereale</b> (mai bine integrale), <b>un sfert proteine</b> (leguminoase, pește, ouă, carne), un strop de ulei de măsline și un pahar cu <b>apă</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: citim eticheta",
      html: `<p>Pe ambalajul biscuiților găsești <b>tabelul nutrițional</b>. La 100 g:</p>
<table>
<tr><td>Energie</td><td>480 kcal</td></tr>
<tr><td>Grăsimi</td><td>20 g</td></tr>
<tr><td>Glucide</td><td>68 g</td></tr>
<tr><td>— din care zaharuri</td><td><b>25 g</b></td></tr>
<tr><td>Proteine</td><td>7 g</td></tr>
</table>
<p>Din 100 g de biscuiți, nu mai puțin de <b>25 g sunt zaharuri</b>: un sfert! Dacă mănânci 50 g (aproximativ 6–7 biscuiți), consumi 12,5 g de zahăr, adică aproximativ <b>3 lingurițe</b>. Organizația Mondială a Sănătății recomandă să nu depășim aproximativ <b>25 g</b> de zaharuri adăugate pe zi.</p>
<p>Și <b>ingredientele</b> sunt utile: sunt scrise în ordine, de la cel mai abundent la cel mai puțin abundent.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: o gustare deșteaptă",
      html: `<p>Să comparăm două gustări:</p>
<ul>
<li>🥤 o doză de suc carbogazos (330 ml) conține aproximativ <b>35 g de zahăr</b> (7 lingurițe!) și nimic altceva util;</li>
<li>🍎 un măr cu o mână de nuci dă zaharurile fructelor, <b>fibre</b>, <b>vitamine</b>, <b>grăsimi bune</b> și puține proteine, și te săturează mai mult.</li>
</ul>
<p>La aceeași foame, a doua gustare hrănește mult mai bine. Băuturile îndulcite sunt în vârful piramidei: din când în când da, în fiecare zi nu.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Scorbutul marinarilor",
      html: `<p>Odinioară, în timpul lungilor călătorii cu corabia, mulți marinari se îmbolnăveau de <b>scorbut</b>: le sângerau gingiile și le cădeau dinții. În <b>1747</b>, medicul scoțian <b>James Lind</b> a făcut unul dintre primele experimente științifice din medicină: a dat unor marinari bolnavi portocale și lămâi, iar ei s-au vindecat în câteva zile.</p>
<p>Astăzi știm că le lipsea <b>vitamina C</b>. Marinarii englezi au fost apoi porecliți „limeys”, pentru că duceau la bord suc de lime!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Patrimoniul umanității",
      html: `<p>În <b>2010</b>, UNESCO a recunoscut <b>dieta mediteraneană</b> ca <b>Patrimoniu cultural imaterial al umanității</b>, împreună cu Spania, Grecia și Maroc (apoi și Cipru, Croația și Portugalia).</p>
<p>A făcut-o celebră medicul american <b>Ancel Keys</b>, care în anii '50 i-a studiat pe locuitorii din Cilento, în Campania: mâncau pâine, paste, legume, leguminoase, pește și ulei de măsline și trăiau mai mult și cu mai puține boli de inimă decât americanii. Keys însuși a trăit mulți ani la Pioppi, în Cilento, adoptând acea dietă, și a murit la 100 de ani!</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Nutrienții</b>: glucide (energie), proteine (construcție), grăsimi (rezervă), vitamine și săruri minerale (protecție), apă.</li>
<li>Mănâncă <b>variat</b>: niciun aliment nu este complet.</li>
<li>Piramida: <b>baza</b> = în fiecare zi (fructe, legume, cereale, apă); <b>vârful</b> = rar (dulciuri, carne roșie, băuturi îndulcite).</li>
<li><b>5 mese</b> pe zi, inclusiv micul dejun, și cel puțin <b>1 oră de mișcare</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege alimentația",
      intro: "Hrana se înțelege mai bine cu mâinile, cu o analogie sau privind cum mănâncă oamenii în alte părți ale lumii.",
      tabs: [
        {
          label: "🚗 Corpul ca o mașină",
          html: `<p>Gândește-te la corp ca la o mașină:</p>
<ul>
<li><b>glucidele</b> sunt <b>benzina</b> pe care o folosești imediat;</li>
<li><b>grăsimile</b> sunt <b>canistra de rezervă</b> din portbagaj;</li>
<li><b>proteinele</b> sunt <b>piesele de schimb</b> și caroseria;</li>
<li><b>vitaminele și sărurile minerale</b> sunt <b>uleiul</b> din motor și șuruburile mici: trebuie puține, dar fără ele totul se blochează;</li>
<li><b>apa</b> este <b>lichidul de răcire</b>.</li>
</ul>
<p>Doar benzină și deloc ulei? Motorul se strică. Doar piese de schimb și deloc benzină? Mașina nu pornește!</p>`
        },
        {
          label: "🍽️ Farfuria unică în lume",
          html: `<p>În loc de piramidă, în multe țări se folosește imaginea unei <b>farfurii</b>:</p>
<ul>
<li>🇺🇸 <b>MyPlate</b> (Statele Unite, din 2011): o farfurie împărțită în 4 părți (fructe, legume, cereale, proteine) plus un pahar de lapte;</li>
<li>🇬🇧 <b>Eatwell Guide</b> (Regatul Unit): o farfurie cu felii de mărimi diferite;</li>
<li>🇯🇵 în Japonia se folosește un <b>titirez</b>: dacă lipsește o parte sau nu te miști, titirezul cade!</li>
<li>🇮🇹 în Italia, pe lângă piramidă, „<b>farfuria hranei sănătoase</b>” folosită în școli.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<circle cx="200" cy="130" r="115" fill="#ffffff" stroke="#94a3b8" stroke-width="6"/>
<path d="M200 130 L200 15 A115 115 0 0 0 85 130 Z" fill="#4ade80"/>
<path d="M200 130 L85 130 A115 115 0 0 0 200 245 Z" fill="#f87171"/>
<path d="M200 130 L200 245 A115 115 0 0 0 315 130 Z" fill="#fbbf24"/>
<path d="M200 130 L315 130 A115 115 0 0 0 200 15 Z" fill="#c084fc"/>
<text x="150" y="85" font-size="16" text-anchor="middle" font-weight="bold">legume</text>
<text x="145" y="185" font-size="16" text-anchor="middle" font-weight="bold">fructe</text>
<text x="255" y="185" font-size="16" text-anchor="middle" font-weight="bold">cereale</text>
<text x="255" y="85" font-size="16" text-anchor="middle" font-weight="bold">proteine</text>
<rect x="370" y="90" width="50" height="80" rx="6" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/>
<text x="395" y="200" font-size="16" text-anchor="middle">apă</text>
<text x="470" y="120" font-size="16" fill="#334155">jumătate de farfurie</text>
<text x="470" y="142" font-size="16" fill="#334155">fructe și legume!</text>
</svg>`
        },
        {
          label: "🧪 Experimentul cu amidonul",
          html: `<p>Cum aflăm dacă un aliment conține <b>amidon</b> (o glucidă)? Cu <b>tinctură de iod</b> (cere unui adult, se găsește la farmacie):</p>
<ol>
<li>pune pe o farfurioară o felie de pâine, una de cartof, o bucățică de măr, puțin zahăr și puțină brânză;</li>
<li>pune o picătură de iod pe fiecare;</li>
<li>unde este amidon, culoarea devine <b>albastru-negru</b>!</li>
</ol>
<p>Pâinea și cartoful devin albastru închis; zahărul și brânza nu. Și pentru <b>grăsimi</b>? Freacă alimentul pe o foaie de hârtie: dacă rămâne o pată transparentă, conține grăsimi!</p>`
        },
        {
          label: "⚛️ Zahărul în 3D",
          html: `<p><b>Glucoza</b> este zahărul pe care celulele îl folosesc drept combustibil. Amidonul din paste și din pâine sunt lanțuri lungi de glucoză pe care digestia le „desface” bucată cu bucată.</p>
<p>Aici vezi un model simplificat al „inelului” ei: 5 atomi de <b>carbon</b> (negri) și 1 de <b>oxigen</b> (roșu). Glucoza completă are 6 carboni, 12 hidrogeni și 6 oxigeni: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 1, z: 0, r: 0.35, color: "#ef4444", label: "O" },
              { x: 0.87, y: 0.5, z: 0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: 0.87, y: -0.5, z: -0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: 0, y: -1, z: 0, r: 0.38, color: "#1f2937", label: "C" },
              { x: -0.87, y: -0.5, z: 0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: -0.87, y: 0.5, z: -0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: -1.6, y: 1.1, z: 0, r: 0.38, color: "#1f2937", label: "C" }
            ],
            bonds: [ [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [5, 6] ]
          }
        },
        {
          label: "🃏 Cartonașe cu nutrienți",
          html: `<p>Întoarce cartonașele și repetă: la ce servește fiecare nutrient?</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🍝 Glucide", back: "Energie imediată: paste, pâine, orez, cartofi, fructe" },
              { front: "🥚 Proteine", back: "Construiesc și repară: carne, pește, ouă, leguminoase, lapte" },
              { front: "🫒 Grăsimi", back: "Energie de rezervă și protecție împotriva frigului: ulei, unt, nuci" },
              { front: "🍊 Vitamine", back: "Protejează și reglează: fructe și legume" },
              { front: "🦴 Calciu", back: "Sare minerală pentru oase și dinți: lapte, brânzeturi, legume verzi" },
              { front: "🩸 Fier", back: "Sare minerală pentru sânge: leguminoase, carne, legume cu frunze" },
              { front: "💧 Apă", back: "Transportă și răcorește: aproximativ 60% din corp" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta alimentației: atinge un nod",
      nodes: [
        { id: "cibo", label: "Alimente", x: 50, y: 6, color: "#2563eb", html: "Tot ce mâncăm și bem.", why: "Animalele, omul inclus, nu-și pot fabrica singure hrana, cum fac plantele prin fotosinteză: trebuie să o ia de la alte ființe vii (sunt <b>heterotrofe</b>)." },
        { id: "nutrienti", label: "Nutrienți", x: 50, y: 28, color: "#16a34a", html: "Substanțele utile din alimente.", why: "Chimistul german <b>Justus von Liebig</b> (mijlocul secolului al XIX-lea) și alți oameni de știință au descoperit că alimentele sunt făcute din puține tipuri de substanțe: zaharuri, grăsimi și proteine." },
        { id: "energia", label: "Glucide și grăsimi", x: 15, y: 50, color: "#f59e0b", html: "Nutrienți care dau energie.", why: "În celule, zaharurile și grăsimile „ard” lent cu oxigenul (respirația celulară) și eliberează energie. A descoperit parțial acest lucru <b>Antoine Lavoisier</b> în secolul al XVIII-lea, măsurând căldura produsă de un cobai." },
        { id: "proteine", label: "Proteine", x: 40, y: 54, color: "#ef4444", html: "Nutrienți pentru construit și reparat.", why: "Mușchii, pielea, părul, enzimele și anticorpii sunt făcuți din proteine. Numele, din grecescul <i>prôtos</i> („primul, cel mai important”), a fost propus de chimistul <b>Berzelius</b> în 1838." },
        { id: "vitamine", label: "Vitamine și săruri", x: 65, y: 54, color: "#a855f7", html: "Substanțe protectoare, necesare în cantități mici.", why: "Au fost descoperite studiind boli provocate de lipsa lor, ca scorbutul și beriberi. Numele <i>vitamine</i> („amine ale vieții”) a fost inventat de biochimistul polonez <b>Casimir Funk</b> în 1912." },
        { id: "acqua", label: "Apa", x: 88, y: 50, color: "#0ea5e9", html: "Aproximativ 60% din corpul nostru.", why: "Toate reacțiile celulelor au loc în apă; sângele este mai ales apă. Pierdem în fiecare zi apă prin transpirație, respirație și urină, deci trebuie înlocuită bând (aproximativ 1,5 litri pe zi pentru un copil)." },
        { id: "piramide", label: "Piramida alimentelor", x: 30, y: 80, color: "#84cc16", html: "Desen care arată cât de des să mâncăm fiecare grup de alimente.", why: "Prima piramidă alimentară a fost creată în <b>Suedia</b> în <b>1974</b> ca să ajute familiile să mănânce sănătos cheltuind puțin. Apoi ideea s-a răspândit în toată lumea." },
        { id: "mediterranea", label: "Dieta mediteraneană", x: 70, y: 80, color: "#14b8a6", html: "Modul tradițional de a mânca din țările Mediteranei.", why: "Studiată de <b>Ancel Keys</b> din anii '50, inclusiv în Cilento. Multe vegetale, cereale, leguminoase, pește și ulei de măsline protejează inima și vasele de sânge. UNESCO: patrimoniul umanității din 2010." },
        { id: "movimento", label: "Mișcarea", x: 50, y: 96, color: "#64748b", html: "Cel puțin 60 de minute pe zi pentru copii.", why: "Corpul folosește energia din hrană ca să se miște: dacă intră mai multă decât se consumă, se depune sub formă de grăsime. Organizația Mondială a Sănătății recomandă 1 oră de activitate fizică pe zi între 5 și 17 ani." }
      ],
      edges: [
        ["cibo", "nutrienti", "conțin"],
        ["nutrienti", "energia", "pentru energie"],
        ["nutrienti", "proteine", "pentru construit"],
        ["nutrienti", "vitamine", "pentru protecție"],
        ["nutrienti", "acqua", "și apoi"],
        ["energia", "piramide", "baza"],
        ["piramide", "mediterranea", "model italian"],
        ["piramide", "movimento", "la bază se află"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: piramida",
      questions: [
        { type: "mc", q: "Ce se află la baza piramidei alimentelor?", options: ["Dulciuri și băuturi îndulcite", "Fructe, legume, cereale și apă", "Carne roșie"], answer: 1, explain: "La bază sunt alimentele care se mănâncă în fiecare zi." },
        { type: "num", q: "Câte porții de fructe și legume se recomandă să mâncăm în fiecare zi (cel puțin)?", answer: 5, explain: "Cel puțin 5 porții pe zi." },
        { type: "tf", q: "Dacă sari peste micul dejun, ai mai multă energie la școală.", answer: false, explain: "Micul dejun dă energia pentru dimineață: nu trebuie sărit." }
      ]
    }
  ],
  glossary: [
    { t: "Nutrienți", d: "Substanțe din alimente care sunt utile corpului." },
    { t: "Glucide", d: "Zaharuri și amidon: dau energie imediată." },
    { t: "Proteine", d: "Nutrienți care construiesc și repară țesuturile." },
    { t: "Grăsimi (lipide)", d: "Nutrienți care furnizează energie de rezervă." },
    { t: "Vitamine", d: "Substanțe protectoare necesare în cantități mici." },
    { t: "Săruri minerale", d: "Substanțe precum calciul și fierul, utile pentru oase, sânge și multe funcții." },
    { t: "Fibre", d: "Părți ale vegetalelor care nu se digeră și ajută intestinul." },
    { t: "Piramida alimentelor", d: "Schemă care arată cât de des se consumă grupele de alimente." },
    { t: "Dieta mediteraneană", d: "Alimentația tradițională a țărilor mediteraneene, bogată în vegetale, cereale, leguminoase, pește și ulei de măsline." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care nutrient dă mai ales energie imediată?", options: ["Glucidele", "Sărurile minerale", "Vitaminele"], answer: 0, explain: "Glucidele sunt cel mai rapid combustibil." },
      { type: "mc", q: "Care aliment este bogat în proteine?", options: ["Linte", "Zahăr", "Ulei"], answer: 0, explain: "Leguminoasele sunt bogate în proteine vegetale." },
      { type: "tf", q: "Vitaminele se găsesc mai ales în fructe și legume.", answer: true, explain: "Fructele și legumele sunt principalele surse de vitamine." },
      { type: "text", q: "Ce vitamină lipsește celui care se îmbolnăvește de scorbut?", answer: ["c", "vitamina c", "vitamina c.", "vit. c"], explain: "Vitamina C, prezentă în citrice." },
      { type: "mc", q: "Care alimente sunt în vârful piramidei (se mănâncă rar)?", options: ["Pâine și paste", "Dulciuri și carne roșie", "Legume"], answer: 1, explain: "Dulciurile, carnea roșie și băuturile îndulcite se consumă rar." },
      { type: "num", q: "Câte mese pe zi se recomandă?", answer: 5, explain: "Micul dejun, gustarea, prânzul, a doua gustare și cina." },
      { type: "mc", q: "Cam cât din corpul nostru este apă?", options: ["10%", "60%", "95%"], answer: 1, explain: "Aproximativ 60% din greutatea unui adult." },
      { type: "tf", q: "Fibrele ajută intestinul să funcționeze bine.", answer: true, explain: "Fibrele favorizează tranzitul intestinal." },
      { type: "order", q: "Așază grupele de la baza piramidei până în vârf.", items: ["Apă, fructe și legume", "Cereale (pâine, paste, orez)", "Leguminoase, pește și ouă", "Dulciuri"], explain: "Cu cât urcăm, cu atât mâncăm mai rar." },
      { type: "mc", q: "În ce an a recunoscut UNESCO dieta mediteraneană ca patrimoniu al umanității?", options: ["1950", "2010", "2023"], answer: 1, explain: "În 2010." },
      { type: "num", q: "O băutură are 35 g de zahăr. O linguriță conține aproximativ 5 g. Câte lingurițe conține băutura?", answer: 7, explain: "35 : 5 = 7 lingurițe." }
    ]
  }
});
