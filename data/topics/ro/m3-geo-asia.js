TOPIC('ro', {
  id: `m3-geo-asia`,
  title: `Asia`,
  intro: `Asia este continentul recordurilor: cel mai mare, cel mai populat, cu cel mai înalt munte (Everest) și cu cel mai scăzut punct de pe uscat (Marea Moartă). Aici trăiesc aproape <b>6 din 10 oameni</b> din lume. În această lecție o străbatem și ne oprim la trei giganți: <b>China</b>, <b>India</b> și <b>Japonia</b>.`,
  minutes: 45,
  sections: [
    {
      type: `text`,
      title: `1. Cel mai mare continent`,
      html: `<ul>
<li><b>Suprafața</b>: aproximativ 44,6 milioane de km² (aproximativ 30% din uscat).</li>
<li><b>Locuitori</b>: aproximativ 4,8 miliarde (aproximativ 59% din omenire).</li>
<li><b>Granițe</b>: la vest cu Europa de-a lungul <b>Munților Urali</b>, a râului Ural, a Mării Caspice și a <b>Caucazului</b>; la sud-vest cu Africa de-a lungul istmului și al Canalului Suez. Este scăldată de trei oceane: <b>Arctic</b>, <b>Pacific</b> și <b>Indian</b>.</li>
</ul>
<p>De obicei se împarte în cinci mari regiuni:</p>
<table>
<tr><th>Regiunea</th><th>Țările principale</th></tr>
<tr><td>Asia de Vest (Orientul Apropiat și Mijlociu)</td><td>Turcia, Israel, Arabia Saudită, Iran, Irak</td></tr>
<tr><td>Asia Centrală</td><td>Kazahstan, Uzbekistan, Afganistan</td></tr>
<tr><td>Asia de Sud</td><td>India, Pakistan, Bangladesh, Nepal, Sri Lanka</td></tr>
<tr><td>Asia de Est</td><td>China, Japonia, Coreea de Sud și de Nord, Mongolia</td></tr>
<tr><td>Asia de Sud-Est</td><td>Indonezia, Vietnam, Thailanda, Filipine, Malaysia</td></tr>
</table>
<p>Și <b>Rusia siberiană</b> (la est de Urali) este geografic Asia, chiar dacă Rusia este considerată un stat european.</p>`
    },
    {
      type: `text`,
      title: `2. Relief, râuri și climate`,
      html: `<p><b>Relief</b>: în centru se află „acoperișul lumii”: <b>Himalaya</b>, cu 10 dintre cele 14 vârfuri de peste 8000 m, printre care <b>Everest</b> (8849 m), și podișul <b>Tibet</b> (în medie peste 4500 m). S-a născut din ciocnirea dintre placa indiană și cea eurasiatică, început acum aproximativ 50 de milioane de ani: Himalaya crește și astăzi cu câțiva milimetri pe an.</p>
<p><b>Râuri</b>: din podișul tibetan izvorăsc marile râuri ale Asiei: <b>Yangtze</b> (Fluviul Albastru, aproximativ 6300 km, cel mai lung din Asia), <b>Huang He</b> (Fluviul Galben), <b>Mekong</b>, <b>Gange</b>, <b>Brahmaputra</b>, <b>Indus</b>. Mai spre vest, <b>Tigru</b> și <b>Eufrat</b>, leagănul Mesopotamiei.</p>
<p><b>Climate</b>: toate! <b>Polar</b> și rece în Siberia (la Oimiakon s-au înregistrat aproximativ −67,7 °C); <b>arid</b> în deșerturile Arabiei și în <b>Gobi</b>; <b>temperat</b> în China și Japonia; <b>tropical musonic</b> în India și în Sud-Est; <b>ecuatorial</b> în Indonezia.</p>
<p><b>Musonii</b> sunt vânturi care își schimbă direcția odată cu anotimpurile: vara bat dinspre ocean spre uscat și aduc ploi foarte puternice; iarna bat dinspre uscat spre mare, iar clima este uscată. De ei depinde recolta de <b>orez</b> pentru miliarde de oameni.</p>`
    },
    {
      type: `3d`,
      title: `Peisajul asiatic în 3D`,
      scene: `terrain`,
      options: {
        features: {
          peak: { label: `Everest`, html: `8849 m, între Nepal și China (Tibet): cel mai înalt vârf al planetei. În nepaleză se numește <b>Sagarmatha</b>, în tibetană <b>Chomolungma</b>. A fost escaladat pentru prima dată în 1953 de Edmund Hillary și de șerpașul Tenzing Norgay.` },
          mountain: { label: `Himalaya`, html: `Lanț lung de aproximativ 2400 km. Găzduiește 10 dintre cele 14 vârfuri de peste 8000 de metri.` },
          glacier: { label: `Ghețarii himalayeni`, html: `Sunt numiți „al treilea pol”: după Antarctica și Arctica, conțin cea mai mare rezervă de gheață. Alimentează râurile de care depind aproape 2 miliarde de oameni, dar din cauza încălzirii globale se retrag.` },
          plain: { label: `Câmpia Gangelui`, html: `Una dintre cele mai fertile și mai populate câmpii din lume, formată din depunerile aduse de râurile himalayene.` },
          river: { label: `Yangtze`, html: `Cel mai lung râu din Asia (aproximativ 6300 km). Pe cursul lui se află <b>Barajul celor Trei Defileuri</b>, cea mai puternică centrală hidroelectrică din lume.` },
          delta: { label: `Delta Gange-Brahmaputra`, html: `Cea mai mare deltă din lume, în Bangladesh și India; aici se află pădurea de mangrove Sundarbans, casa tigrului de Bengal.` },
          volcano: { label: `Muntele Fuji`, html: `Vulcanul-simbol al Japoniei (3776 m), încă activ: ultima erupție a avut loc în 1707.` },
          archipelago: { label: `Arhipelaguri`, html: `<b>Indonezia</b> este formată din peste 17.000 de insule; <b>Japonia</b> din 4 insule principale și mii de insule mai mici; <b>Filipine</b> din peste 7000.` },
          lake: { label: `Baikal`, html: `În Siberia: cel mai adânc lac (aproximativ 1640 m) și cel mai vechi din lume (aproximativ 25 de milioane de ani). Conține aproximativ 20% din apa dulce lichidă de suprafață a planetei.` },
          peninsula: { label: `Peninsule`, html: `Asia are peninsule uriașe: <b>Arabică</b> (cea mai mare din lume), <b>Indiană</b> („subcontinentul”), <b>Indochina</b>, <b>Coreeană</b>, <b>Anatolia</b>.` }
        }
      },
      caption: `Atinge părțile peisajului ca să descoperi recordurile Asiei.`
    },
    {
      type: `svg`,
      title: `Cum funcționează musonul`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="26" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f766e">Vara (iunie–septembrie)</text>
<rect x="20" y="200" width="130" height="70" fill="#38bdf8"/><text x="85" y="245" font-size="15" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Oceanul</text>
<rect x="150" y="190" width="130" height="80" fill="#a3e635"/><text x="215" y="240" font-size="15" text-anchor="middle" fill="#365314" font-weight="bold">India</text>
<ellipse cx="215" cy="110" rx="60" ry="28" fill="#64748b"/>
<path d="M190 140 L185 165 M215 140 L210 165 M240 140 L235 165" stroke="#2563eb" stroke-width="4"/>
<path d="M50 170 L170 170" stroke="#0f766e" stroke-width="6" marker-end="url(#m)"/>
<text x="85" y="160" font-size="14" text-anchor="middle" fill="#0f766e">vânt umed</text>
<text x="215" y="70" font-size="14" text-anchor="middle" fill="#334155">ploi puternice 🌧️</text>
<text x="450" y="26" font-size="18" text-anchor="middle" font-weight="bold" fill="#b45309">Iarna (decembrie–februarie)</text>
<rect x="320" y="200" width="130" height="70" fill="#38bdf8"/><text x="385" y="245" font-size="15" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Oceanul</text>
<rect x="450" y="190" width="130" height="80" fill="#fde68a"/><text x="515" y="240" font-size="15" text-anchor="middle" fill="#78350f" font-weight="bold">India</text>
<circle cx="515" cy="100" r="26" fill="#facc15"/>
<path d="M560 170 L440 170" stroke="#b45309" stroke-width="6" marker-end="url(#n)"/>
<text x="515" y="160" font-size="14" text-anchor="middle" fill="#b45309">vânt uscat</text>
<text x="515" y="60" font-size="14" text-anchor="middle" fill="#334155">vreme uscată ☀️</text>
<defs>
<marker id="m" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#0f766e"/></marker>
<marker id="n" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#b45309"/></marker>
</defs>
</svg>`,
      caption: `Vara uscatul se încălzește mai tare decât marea: aerul urcă și atrage vânt umed dinspre ocean, care aduce ploile. Iarna se întâmplă invers.`
    },
    {
      type: `quiz`,
      title: `Mini-test: continentul`,
      questions: [
        { type: `mc`, q: `Care munți marchează granița dintre Europa și Asia?`, options: [`Alpii`, `Uralii`, `Anzii`], answer: 1, explain: `Munții Urali, împreună cu râul Ural, Marea Caspică și Caucazul.` },
        { type: `num`, q: `Cât de înalt este Everestul (în metri)?`, answer: 8849, tol: 1, unit: `m`, explain: `8849 m, conform măsurătorii chino-nepaleze din 2020.` },
        { type: `tf`, q: `Musonii sunt vânturi care își schimbă direcția odată cu anotimpurile.`, answer: true, explain: `Vara aduc ploile, iarna vreme uscată.` }
      ]
    },
    {
      type: `text`,
      title: `3. China`,
      html: `<p><b>Capitala</b>: Beijing. <b>Locuitori</b>: aproximativ 1,41 miliarde. <b>Suprafața</b>: aproximativ 9,6 milioane de km² (aproximativ de 32 de ori Italia). <b>Limba</b>: chineza mandarină. <b>Moneda</b>: yuanul (renminbi).</p>
<p><b>Teritoriul</b>: Vestul este format din munți, podișuri (Tibet) și deșerturi (Gobi, Taklamakan) aproape nelocuite; aproape toți chinezii trăiesc în <b>Est</b>, în câmpii și de-a lungul coastelor și al marilor râuri.</p>
<p><b>Economia</b>: de la reformele lui Deng Xiaoping (1978), China a devenit „<b>fabrica lumii</b>” și astăzi este a <b>doua economie</b> a planetei și <b>primul exportator</b>. Este lider la panouri solare, baterii și mașini electrice. Mari metropole: <b>Shanghai</b> (peste 24 de milioane de locuitori), Beijing, Shenzhen, Guangzhou, Chongqing.</p>
<p><b>Probleme</b>: poluare puternică (China este primul emițător de CO₂ din lume), diferențe între coastele bogate și interiorul sărac, îmbătrânirea populației după politica <b>copilului unic</b> (1980–2015), lipsa libertăților politice (partid unic).</p>`
    },
    {
      type: `text`,
      title: `4. India`,
      html: `<p><b>Capitala</b>: New Delhi. <b>Locuitori</b>: peste 1,43 miliarde: din <b>2023</b> este <b>țara cea mai populată din lume</b>, depășind China. <b>Suprafața</b>: aproximativ 3,3 milioane de km². <b>Limbi</b>: hindi și engleza oficiale, plus 22 de limbi recunoscute de Constituție. <b>Moneda</b>: rupia.</p>
<p>Este <b>cea mai mare democrație din lume</b>: la alegerile din 2024 au fost chemați la vot aproximativ <b>970 de milioane</b> de alegători.</p>
<p><b>Teritoriul</b>: la nord Himalaya; la centru marea câmpie a <b>Gangelui</b>, râu sacru pentru hinduși; la sud podișul <b>Deccan</b>.</p>
<p><b>Economia</b>: încă mulți lucrează la câmp (orez, ceai, bumbac, condimente), dar India este o putere în <b>servicii informatice</b> (Bangalore este numită „Silicon Valley indiană”), în industria farmaceutică și în domeniul spațial (în 2023 sonda <b>Chandrayaan-3</b> a ajuns lângă polul sud al Lunii). <b>Bollywood</b>, la Mumbai, produce mai multe filme decât orice altă țară.</p>
<p><b>Probleme</b>: sărăcie încă răspândită, orașe suprapopulate, poluare, diferențe sociale legate și de sistemul <b>castelor</b> (abolit de Constituția din 1950, dar încă prezent în societate).</p>`
    },
    {
      type: `text`,
      title: `5. Japonia`,
      html: `<p><b>Capitala</b>: Tokyo. <b>Locuitori</b>: aproximativ 124 de milioane. <b>Suprafața</b>: aproximativ 378.000 km² (puțin mai mult decât Italia). <b>Moneda</b>: yenul.</p>
<p><b>Teritoriul</b>: un arhipelag de 4 insule principale (<b>Honshū</b>, Hokkaidō, Kyūshū, Shikoku) și mii de insule mai mici. Aproximativ <b>70%</b> este muntos: populația se concentrează în câmpiile înguste de coastă. Se află în <b>Centura de foc</b> a Pacificului, unde se întâlnesc patru plăci: are peste 100 de vulcani activi și frecvente cutremure și <b>tsunami</b> (precum cel din <b>11 martie 2011</b>, care a avariat centrala nucleară de la Fukushima).</p>
<p><b>Economia</b>: aproape fără materii prime, Japonia a devenit o putere datorită industriei de înaltă tehnologie (mașini, roboți, electronică, jocuri video). Zona <b>Tokyo</b> este cea mai mare aglomerație urbană din lume, cu aproximativ 37 de milioane de locuitori.</p>
<p><b>Probleme</b>: Japonia este țara cea mai <b>bătrână</b> din lume: aproape <b>30%</b> dintre locuitori au peste 65 de ani, iar populația scade.</p>`
    },
    {
      type: `widget`,
      title: `Joc: China, India sau Japonia?`,
      widget: `classify`,
      options: {
        groups: [`🇨🇳 China`, `🇮🇳 India`, `🇯🇵 Japonia`],
        items: [[`Beijing`, 0], [`Râul Yangtze`, 0], [`Deșertul Gobi`, 0], [`Râul Gange`, 1], [`Bollywood`, 1], [`Podișul Deccan`, 1], [`Muntele Fuji`, 2], [`Insula Honshū`, 2], [`Yenul`, 2], [`Cea mai populată țară din 2023`, 1], [`Rupia`, 1], [`Barajul celor Trei Defileuri`, 0]]
      },
      caption: `Trage fiecare element în țara potrivită.`
    },
    {
      type: `example`,
      title: `Exemplu practic: compară cu Italia`,
      html: `<table>
<tr><th></th><th>🇮🇹 Italia</th><th>🇨🇳 China</th><th>🇮🇳 India</th><th>🇯🇵 Japonia</th></tr>
<tr><td>Locuitori</td><td>59 de milioane</td><td>1,41 miliarde</td><td>1,43 miliarde</td><td>124 de milioane</td></tr>
<tr><td>Suprafața (km²)</td><td>302.000</td><td>9,6 milioane</td><td>3,3 milioane</td><td>378.000</td></tr>
<tr><td>Densitatea (loc./km²)</td><td>aproximativ 196</td><td>aproximativ 147</td><td>aproximativ 430</td><td>aproximativ 330</td></tr>
<tr><td>Speranța de viață</td><td>83 de ani</td><td>78 de ani</td><td>72 de ani</td><td>84 de ani</td></tr>
</table>
<p>Calculează: densitatea este <b>locuitori ÷ suprafață</b>. India are o densitate de peste două ori mai mare decât Italia: în medie, pe fiecare km² trăiesc aproximativ 430 de persoane. Și totuși China, care are atât de mulți locuitori, are o densitate medie mai mică decât Italia: pentru că are zone uriașe goale (Tibet, deșerturi).</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: o zi la Tokyo`,
      html: `<p>Un băiat de 13 ani din Tokyo merge singur la școală cu metroul, deși sunt milioane de persoane. Trenurile de mare viteză <b>Shinkansen</b> (din 1964) au o întârziere medie sub un minut.</p>
<p>La școală face exerciții anti-cutremur, iar la sfârșitul orelor, împreună cu colegii, <b>curăță sala de clasă</b> (se numește <i>o-sōji</i>). La prânz mănâncă orez, pește și legume: peștele este foarte important într-o țară înconjurată de mare, cu puțin pământ de cultivat.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… China are un singur fus orar?`,
      html: `<p>China are o lățime de aproape 5000 km de la est la vest și „ar trebui” să aibă 5 fusuri orare. În schimb folosește <b>o singură oră</b>, cea de la Beijing. Așa, în extremitatea de vest, în regiunea Xinjiang, iarna Soarele poate răsări pe la <b>ora 10 dimineața</b>!</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… șahul și cifrele vin din India?`,
      html: `<p>Cifrele pe care le folosim (0, 1, 2… 9) se numesc „arabe”, dar au fost inventate în <b>India</b>, inclusiv <b>zero</b> ca număr (matematicianul Brahmagupta i-a scris regulile în 628). Arabii le-au adus în Occident, iar în Italia le-a făcut cunoscute <b>Leonardo Fibonacci</b> în 1202. Și jocul de <b>șah</b> s-a născut în India, în jurul secolului al VI-lea, cu numele de <i>chaturanga</i>.</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a cunoaște Asia`,
      intro: `Asia este atât de mare, încât e ușor să te pierzi: iată alte moduri de a te orienta.`,
      tabs: [
        {
          label: `🌍 Pe glob`,
          html: `<p>Rotește globul și urmează <b>Drumul Mătăsii</b>, vechea rețea de drumuri care lega China de Mediterana (Marco Polo l-a parcurs în secolul al XIII-lea). Astăzi China a lansat un „Nou Drum al Mătăsii” de căi ferate, porturi și drumuri.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 34.3, lon: 108.9, label: `Xi'an`, color: `#dc2626` },
              { lat: 39.5, lon: 76.0, label: `Kashgar`, color: `#f59e0b` },
              { lat: 39.65, lon: 66.96, label: `Samarkand`, color: `#f59e0b` },
              { lat: 35.7, lon: 51.4, label: `Teheran`, color: `#f59e0b` },
              { lat: 41.0, lon: 28.97, label: `Istanbul`, color: `#7c3aed` },
              { lat: 45.44, lon: 12.33, label: `Veneția`, color: `#16a34a` },
              { lat: 28.6, lon: 77.2, label: `New Delhi`, color: `#f97316` },
              { lat: 35.68, lon: 139.69, label: `Tokyo`, color: `#ef4444` },
              { lat: 27.99, lon: 86.93, label: `Everest`, color: `#64748b` }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5], color: `#d97706` }]
          }
        },
        {
          label: `🧠 Truc: 3 giganți, 3 cuvinte`,
          html: `<p>Ca să ții minte cele trei țări, asociază fiecăreia un cuvânt și o imagine:</p>
<ul>
<li>🇨🇳 <b>China = FABRICĂ</b>: imaginează-ți o fabrică uriașă de-a lungul unui râu (Yangtze) care expediază containere din portul Shanghai.</li>
<li>🇮🇳 <b>India = MULȚIME</b>: cea mai mare mulțime din lume, care face baie în Gange și lucrează la calculator la Bangalore.</li>
<li>🇯🇵 <b>Japonia = CUTREMUR + ROBOȚI</b>: un arhipelag care tremură, locuit de roboți și trenuri foarte rapide.</li>
</ul>`
        },
        {
          label: `🧩 Potrivește capitala cu țara`,
          html: `<p>Capitalele Asiei: potrivește-le cu țara lor.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Beijing`, `China`],
              [`New Delhi`, `India`],
              [`Tokyo`, `Japonia`],
              [`Seul`, `Coreea de Sud`],
              [`Jakarta`, `Indonezia`],
              [`Bangkok`, `Thailanda`],
              [`Riad`, `Arabia Saudită`]
            ]
          }
        },
        {
          label: `📏 Dimensiunile comparate`,
          html: `<p>Dacă Italia ar fi un pătrățel, cât de mari ar fi celelalte țări?</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<rect x="20" y="200" width="20" height="20" fill="#16a34a"/>
<text x="30" y="245" font-size="14" text-anchor="middle" fill="#111827">Italia 1</text>
<rect x="70" y="199" width="22" height="22" fill="#ef4444"/>
<text x="81" y="245" font-size="14" text-anchor="middle" fill="#111827">Japonia 1,25</text>
<rect x="160" y="153" width="67" height="67" fill="#f97316"/>
<text x="193" y="245" font-size="14" text-anchor="middle" fill="#111827">India aprox. 11</text>
<rect x="300" y="107" width="113" height="113" fill="#dc2626"/>
<text x="356" y="245" font-size="14" text-anchor="middle" fill="#111827">China aprox. 32</text>
<text x="300" y="30" font-size="17" text-anchor="middle" font-weight="bold" fill="#111827">Suprafețe comparate (aria pătratelor)</text>
<text x="500" y="160" font-size="14" text-anchor="middle" fill="#334155">Toată Asia</text>
<text x="500" y="180" font-size="14" text-anchor="middle" fill="#334155">≈ 148 de Italii!</text>
</svg>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta Asiei: atinge nodurile și descoperă de ce`,
      nodes: [
        { id: `placche`, label: `Ciocnirea plăcilor`, x: 50, y: 6, color: `#b45309`, html: `Placa indiană împinge placa eurasiatică.`, why: `India era o insulă-continent desprinsă din vechiul Gondwana; s-a deplasat spre nord cu o viteză record (până la 15 cm pe an) și acum aproximativ 50 de milioane de ani s-a lovit de Asia, ridicând Himalaya.` },
        { id: `himalaya`, label: `Himalaya și Tibet`, x: 20, y: 25, color: `#64748b`, html: `„Acoperișul lumii”, cu Everest (8849 m).`, why: `Pe vârfurile Himalayei se găsesc fosile de animale marine: rocile erau cândva fundul unui ocean, Tethys, ridicat de ciocnirea plăcilor.` },
        { id: `fiumi`, label: `Marile râuri`, x: 50, y: 30, color: `#2563eb`, html: `Yangtze, Huang He, Gange, Brahmaputra, Mekong, Indus.`, why: `Izvorăsc din ghețarii și zăpezile podișului tibetan și coboară spre mare aducând apă și mâl fertil.` },
        { id: `monsoni`, label: `Musoni`, x: 82, y: 25, color: `#0ea5e9`, html: `Vânturi sezoniere care aduc ploile de vară.`, why: `Uscatul se încălzește și se răcește mai repede decât marea: vara, deasupra Asiei se formează o zonă de joasă presiune care atrage aerul umed dinspre ocean. Himalaya face de barieră și face ca ploaia să cadă peste India.` },
        { id: `riso`, label: `Orezării și populație`, x: 50, y: 52, color: `#16a34a`, html: `Câmpiile fluviale sunt printre cele mai populate de pe Pământ.`, why: `Orezul, cultivat în China de aproximativ 9000 de ani, dă o recoltă foarte mare la hectar dacă este multă apă: de aceea în câmpiile râurilor musonice a putut crește o populație uriașă.` },
        { id: `cina`, label: `China`, x: 18, y: 75, color: `#dc2626`, html: `1,41 miliarde de locuitori, a doua economie mondială.`, why: `O civilizație unită de peste 2000 de ani (de la primul împărat Qin Shi Huang, 221 î.Hr.); după 1978, reformele lui Deng Xiaoping au transformat-o în „fabrica lumii”.` },
        { id: `india`, label: `India`, x: 50, y: 78, color: `#f97316`, html: `Cea mai populată țară și cea mai mare democrație din lume.`, why: `Independentă din 1947, cu o Constituție democratică (1950) scrisă de B. R. Ambedkar; creșterea recentă se bazează pe serviciile informatice și pe o populație tânără.` },
        { id: `giappone`, label: `Japonia`, x: 82, y: 75, color: `#e11d48`, html: `Arhipelag muntos și seismic, putere tehnologică.`, why: `În epoca Meiji (din 1868) Japonia s-a modernizat rapid, copiind și îmbunătățind tehnologia occidentală; după înfrângerea din 1945 și-a reconstruit economia mizând pe industria de calitate.` },
        { id: `sfide`, label: `Provocări`, x: 50, y: 95, color: `#a855f7`, html: `Poluare, ghețari care se topesc, îmbătrânire, inegalități.`, why: `Creșterea foarte rapidă a consumat resurse și a produs emisii; creșterea speranței de viață și scăderea natalității fac ca China și Japonia să îmbătrânească.` }
      ],
      edges: [
        [`placche`, `himalaya`, `ridică`],
        [`himalaya`, `fiumi`, `dă naștere`],
        [`himalaya`, `monsoni`, `blochează`],
        [`fiumi`, `riso`, `irigă`],
        [`monsoni`, `riso`, `aduc apă`],
        [`riso`, `cina`, `hrănește`],
        [`riso`, `india`, `hrănește`],
        [`placche`, `giappone`, `cutremure și vulcani în`],
        [`cina`, `sfide`, `se confruntă cu`],
        [`giappone`, `sfide`, `se confruntă cu`]
      ]
    },
    {
      type: `remember`,
      title: `De ținut minte`,
      html: `<ul>
<li><b>Asia</b> este cel mai mare continent (44,6 milioane km²) și cel mai populat (4,8 miliarde). Granița cu Europa: <b>Urali, Caspica, Caucaz</b>.</li>
<li><b>Himalaya</b> cu <b>Everest</b> (8849 m); mari râuri: Yangtze, Huang He, Gange, Mekong.</li>
<li>Toate climatele; în India și în Sud-Est domină <b>musonul</b>.</li>
<li><b>China</b>: „fabrica lumii”, a doua economie. <b>India</b>: cea mai populată țară din 2023, cea mai mare democrație. <b>Japonia</b>: arhipelag seismic, înaltă tehnologie, populație îmbătrânită.</li>
</ul>`
    },
    {
      type: `quiz`,
      title: `Mini-test: China, India, Japonia`,
      questions: [
        { type: `mc`, q: `Care țară este cea mai populată din lume din 2023?`, options: [`China`, `India`, `Indonezia`], answer: 1, explain: `India a depășit China în 2023, conform estimărilor ONU.` },
        { type: `text`, q: `Care este capitala Japoniei?`, answer: [`tokyo`, `tokio`], explain: `Tokyo.` },
        { type: `mc`, q: `De ce are Japonia multe cutremure?`, options: [`Pentru că este foarte plată`, `Pentru că se află acolo unde se întâlnesc mai multe plăci, în Centura de foc`, `Pentru că are multe fabrici`], answer: 1, explain: `Sub Japonia se întâlnesc patru plăci tectonice.` }
      ]
    }
  ],
  glossary: [
    { t: `Muson`, d: `Vânt sezonier care vara bate dinspre mare spre uscat (ploi) și iarna invers (vreme uscată).` },
    { t: `Podiș`, d: `Teritoriu relativ plat aflat la altitudine mare, precum Tibetul.` },
    { t: `Subcontinentul indian`, d: `Marea peninsulă din Asia de Sud (India, Pakistan, Bangladesh…), separată de restul Asiei de Himalaya.` },
    { t: `Centura de foc`, d: `Fâșie din jurul Oceanului Pacific cu mulți vulcani și cutremure.` },
    { t: `Tsunami`, d: `Val marin uriaș provocat de un cutremur sau de o erupție submarină.` },
    { t: `Densitatea populației`, d: `Numărul de locuitori pe km²: locuitori ÷ suprafață.` },
    { t: `Politica copilului unic`, d: `Lege chineză (1980–2015) care limita la unul numărul de copii pe cuplu în majoritatea cazurilor.` },
    { t: `Caste`, d: `Veche împărțire ereditară a societății indiene, abolită prin lege, dar încă prezentă.` },
    { t: `Drumul Mătăsii`, d: `Veche rețea de rute comerciale între China, Asia Centrală și Mediterana.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Aproximativ câți oameni din 10 din lume trăiesc în Asia?`, options: [`2`, `4`, `6`], answer: 2, explain: `Aproximativ 59% din omenire.` },
      { type: `text`, q: `Cum se numește lanțul muntos cu cel mai înalt vârf din lume?`, answer: [`himalaya`, `munții himalaya`, `muntii himalaya`, `himalaia`], explain: `Himalaya, cu Everest.` },
      { type: `mc`, q: `Care este cel mai lung râu din Asia?`, options: [`Gange`, `Yangtze`, `Mekong`], answer: 1, explain: `Yangtze, sau Fluviul Albastru, aproximativ 6300 km.` },
      { type: `tf`, q: `Japonia este un arhipelag cu 4 insule principale.`, answer: true, explain: `Honshū, Hokkaidō, Kyūshū și Shikoku.` },
      { type: `mc`, q: `Ce aduc musonii de vară în India?`, options: [`Zăpadă`, `Ploi abundente`, `Nisip din deșert`], answer: 1, explain: `Vânturi umede dinspre Oceanul Indian.` },
      { type: `mc`, q: `De ce este China numită „fabrica lumii”?`, options: [`Pentru că produce și exportă cantități uriașe de mărfuri`, `Pentru că are multe mine de aur`, `Pentru că este cea mai mică țară`], answer: 0, explain: `Este primul exportator mondial de mărfuri.` },
      { type: `num`, q: `O țară are 120 de milioane de locuitori și 400.000 km². Care este densitatea (loc./km²)?`, answer: 300, tol: 0, unit: `loc./km²`, explain: `120.000.000 ÷ 400.000 = 300 de locuitori pe km².` },
      { type: `text`, q: `Care este capitala Indiei?`, answer: [`new delhi`, `nou delhi`, `delhi`], explain: `New Delhi.` },
      { type: `tf`, q: `Japonia este una dintre țările cu cea mai tânără populație din lume.`, answer: false, explain: `Este țara cea mai bătrână: aproape 30% au peste 65 de ani.` },
      { type: `order`, q: `Ordonează de la cea mai populată la cea mai puțin populată.`, items: [`India`, `China`, `Japonia`, `Italia`], explain: `1,43 miliarde → 1,41 miliarde → 124 de milioane → 59 de milioane.` },
      { type: `mc`, q: `În ce țară se află lacul Baikal, cel mai adânc din lume?`, options: [`China`, `Mongolia`, `Rusia`], answer: 2, explain: `În Siberia, Rusia.` },
      { type: `mc`, q: `Care invenție matematică s-a născut în India?`, options: [`Zero ca număr`, `Cifrele romane`, `Pi`], answer: 0, explain: `Brahmagupta i-a descris regulile în 628.` }
    ]
  }
});
