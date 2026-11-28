TOPIC('ro', {
  id: `l1-art-proiezioni-ortogonali`,
  title: `Desen: proiecții ortogonale`,
  intro: `Cum îi explică un inginer unei fabrici cum să construiască o piesă fără să trimită obiectul în sine? Îl <b>desenează din mai multe părți</b>, cu reguli precise, astfel încât oricine din lume să îl poată reconstitui și măsura. <b>Proiecțiile ortogonale</b> sunt limbajul universal al desenului tehnic: fiecare punct, fiecare segment, fiecare solid este „turtit" pe plane perpendiculare între ele. Să învățăm să citim și să scriem acest limbaj. 📐🧊`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Ce este o proiecție ortogonală`,
      html: `<p>A proiecta un punct pe un plan înseamnă a duce din acel punct o dreaptă (<b>raza proiectantă</b>) până la plan. Dacă raza este <b>perpendiculară</b> pe plan, proiecția este <b>ortogonală</b>. Imaginea obținută este ca umbra unui obiect luminat de o sursă foarte îndepărtată, perpendiculară pe plan.</p>
<p>O singură proiecție nu ajunge: umbra unui cub văzut din față este un pătrat, dar același pătrat ar putea fi umbra unui paralelipiped foarte lung în adâncime! Pentru a identifica cu certitudine un obiect sunt necesare <b>cel puțin două proiecții pe plane perpendiculare</b>, adesea trei.</p>
<p>Metoda a fost pusă la punct de <b>Gaspard Monge</b> (1746-1818), matematician francez, pentru proiectarea fortificațiilor militare. Ținută secretă ani la rând, a fost apoi predată la École Normale (1795) și publicată sub titlul <i>Géométrie descriptive</i>: este nașterea <b>geometriei descriptive</b>. De aceea se vorbește despre <b>metoda lui Monge</b>.</p>`
    },
    {
      type: `text`, title: `2. Cele trei plane și rabaterea`,
      html: `<p>Imaginează-ți colțul unei camere: doi pereți și podeaua se întâlnesc la 90°. Acestea sunt cele trei plane de proiecție:</p>
<ul>
<li><b>PV – planul vertical</b> (peretele din față): pe el se proiectează <b>elevația</b> (vederea din față);</li>
<li><b>PO – planul orizontal</b> (podeaua): pe el se proiectează <b>planul de sus</b> (vederea de sus, „planul orizontal");</li>
<li><b>PL – planul lateral</b> (peretele din lateral): pe el se proiectează <b>vederea laterală</b> (de obicei din stânga).</li>
</ul>
<p>Dreptele de intersecție ale planelor sunt axele sistemului: <b>linia de pământ</b> (PV ∩ PO) și celelalte două. Pentru a pune totul pe o singură foaie plată se face <b>rabaterea</b>: PV rămâne fix, PO se rotește cu 90° în jurul liniei de pământ până se suprapune peste PV, iar PL se rotește cu 90° în jurul propriei linii de pământ.</p>
<p>Rezultatul este <b>dispunerea standard</b>: <b>elevația</b> în stânga sus, <b>planul de sus</b> <b>sub</b> elevație (aceeași lățime), <b>vederea laterală</b> <b>la dreapta</b> elevației (aceeași înălțime). Datorită <b>liniilor de ghidaj</b> (linii subțiri de legătură) cele trei vederi se pun în corespondență.</p>`
    },
    {
      type: `svg`, title: `Cele trei vederi ale unui paralelipiped`,
      caption: `Elevația (stânga sus), planul de sus (dedesubt) și vederea laterală (la dreapta) ale unui paralelipiped 120 × 70 × 80. Liniile subțiri sunt liniile de ghidaj: elevația și planul de sus au aceeași lățime, elevația și vederea laterală aceeași înălțime.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="90" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="60" y="150" width="170" height="110" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<rect x="270" y="30" width="110" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"><line x1="60" y1="120" x2="60" y2="150"/><line x1="230" y1="120" x2="230" y2="150"/><line x1="230" y1="30" x2="270" y2="30"/><line x1="230" y1="120" x2="270" y2="120"/></g>
<line x1="20" y1="135" x2="250" y2="135" stroke="#dc2626" stroke-width="2"/>
<text x="26" y="130" font-size="14" fill="#dc2626">linia de pământ</text>
<text x="145" y="80" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">ELEVAȚIE</text>
<text x="145" y="210" font-size="17" font-weight="bold" fill="#166534" text-anchor="middle">PLAN DE SUS</text>
<text x="325" y="80" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">LATERALĂ</text>
<text x="145" y="108" font-size="14" fill="#334155" text-anchor="middle">lățime × înălțime</text>
<text x="145" y="232" font-size="14" fill="#334155" text-anchor="middle">lățime × adâncime</text>
<text x="325" y="104" font-size="14" fill="#334155" text-anchor="middle">adâncime × înălțime</text>
<text x="420" y="60" font-size="15" fill="#1e293b">PV: peretele din față</text>
<text x="420" y="90" font-size="15" fill="#1e293b">PO: podeaua</text>
<text x="420" y="120" font-size="15" fill="#1e293b">PL: peretele lateral</text>
<text x="420" y="180" font-size="15" fill="#334155">fiecare vedere arată</text>
<text x="420" y="205" font-size="15" fill="#334155">două dimensiuni și</text>
<text x="420" y="230" font-size="15" fill="#334155">o ascunde pe a treia</text>
</svg>`
    },
    {
      type: `3d`, title: `Rotește solidul: din ce parte îl privești?`,
      scene: `solid`,
      options: { shape: `box`, w: 3, h: 2, d: 2, color: `#3b82f6`, labels: true, shapes: [`box`, `cube`, `prism`, `pyramid`, `cylinder`, `cone`, `sphere`] },
      caption: `Privește solidul de sus (plan orizontal), din față (elevație) și din lateral (vedere laterală). Încearcă apoi cu piramida, cilindrul și conul: ce vedere arată un cerc? care un triunghi?`
    },
    {
      type: `quiz`, title: `Mini-test: cele trei plane`,
      questions: [
        { type: `mc`, q: `Pe ce plan se proiectează planul de sus (vederea de sus)?`, options: [`PV`, `PO`, `PL`], answer: 1, explain: `Vederea de sus se proiectează pe planul orizontal (PO).` },
        { type: `mc`, q: `În dispunerea standard, unde se desenează vederea de sus față de elevație?`, options: [`Deasupra`, `Dedesubt`, `La dreapta`], answer: 1, explain: `După rabaterea lui PO, vederea de sus se află sub elevație, cu aceeași lățime.` },
        { type: `tf`, q: `O singură proiecție ortogonală este suficientă pentru a determina un solid.`, answer: false, explain: `Solide diferite pot avea aceeași proiecție: sunt necesare cel puțin două vederi.` }
      ]
    },
    {
      type: `text`, title: `3. Puncte și segmente`,
      html: `<p>Un <b>punct</b> P din spațiu are trei coordonate (x, y, z). Proiecțiile sale sunt: <b>P'</b> pe PO (vederea de sus, indică lățimea și adâncimea), <b>P''</b> pe PV (elevația, indică lățimea și cota). După rabatere, P' și P'' se află pe <b>aceeași perpendiculară pe linia de pământ</b> („linia de ghidaj"). Distanța lui P'' față de linia de pământ este <b>cota</b> (înălțimea lui P față de podea); distanța lui P' față de linia de pământ este <b>adâncimea</b> (distanța lui P față de perete).</p>
<p>Un <b>segment</b> AB se proiectează unind proiecțiile celor două capete. Pozițiile remarcabile sunt:</p>
<ul>
<li><b>paralel cu PO</b> (orizontal): în vederea de sus este în <b>mărime reală</b>, în elevație este paralel cu linia de pământ;</li>
<li><b>paralel cu PV</b>: în elevație este în mărime reală;</li>
<li><b>perpendicular pe PO</b> (vertical): în vederea de sus se reduce la un <b>punct</b>, în elevație este în mărime reală și perpendicular pe linia de pământ;</li>
<li><b>perpendicular pe PV</b>: în elevație este un punct, în vederea de sus este în mărime reală și perpendicular pe linia de pământ;</li>
<li><b>oarecare</b> (oblic): în <b>ambele</b> proiecții este mai scurt decât în realitate, iar lungimea adevărată se află printr-un procedeu auxiliar.</li>
</ul>
<p>Regula generală: proiecția ortogonală a unui segment are <b>lungimea segmentului înmulțită cu cosinusul</b> unghiului făcut cu planul: dacă este paralel (0°) cosinusul este 1 și lungimea nu se schimbă, dacă este perpendicular (90°) cosinusul este 0 și se reduce la un punct.</p>`
    },
    {
      type: `example`, title: `Exemplu: unde se află lampa?`,
      html: `<p>O lampă agățată de tavanul unei camere se află la 2,5 m de podea și la 1,2 m de peretele din fund. Cum o reprezinți?</p>
<ul>
<li><b>Elevația</b> (PV) arată lampa la <b>2,5 m</b> deasupra liniei de pământ.</li>
<li><b>Vederea de sus</b> (PO) o arată la <b>1,2 m</b> sub linia de pământ (după rabatere).</li>
<li>Cele două proiecții se află pe aceeași verticală (linia de ghidaj).</li>
</ul>
<p>Din două simple măsurători se poate regăsi poziția exactă în spațiu: este principiul din spatele hărților topografice cu cote și al coordonatelor sistemelor GPS.</p>`
    },
    {
      type: `text`, title: `4. Figuri plane`,
      html: `<p>O <b>figură plană</b> (de exemplu un pătrat sau un cerc) se proiectează ortogonal punct cu punct. Ce se întâmplă depinde de <b>poziția</b> ei:</p>
<ul>
<li><b>paralelă cu un plan de proiecție</b>: pe acel plan apare în <b>formă reală</b> (aceeași formă și dimensiuni), pe celălalt se reduce la un <b>segment</b> (paralel cu linia de pământ);</li>
<li><b>perpendiculară pe un plan</b>: pe acesta este un <b>segment</b>;</li>
<li><b>înclinată</b>: în ambele proiecții este <b>deformată</b> (un pătrat devine paralelogram; un cerc devine o <b>elipsă</b>).</li>
</ul>
<p>Exemplu: un <b>pătrat cu latura de 4 cm</b> așezat pe podea (paralel cu PO) este în vederea de sus un pătrat de 4 × 4 cm în formă reală, iar în elevație este un segment orizontal lung de 4 cm. Dacă îl ridicăm pe muchie (perpendicular pe PV), va fi pe dos.</p>
<p>Un <b>cerc</b> paralel cu PO se proiectează în vederea de sus ca un cerc, iar în elevație ca un segment lung cât diametrul. Dacă este înclinat devine o elipsă: axa sa mare rămâne egală cu diametrul.</p>`
    },
    {
      type: `text`, title: `5. Solidele: reguli de desenare`,
      html: `<p>Pentru a desena proiecțiile ortogonale ale unui solid așezat pe plan se procedează astfel:</p>
<ol>
<li>Desenează <b>vederea de sus</b> (baza): este conturul văzut de deasupra.</li>
<li>Trasează din fiecare vârf al vederii de sus o <b>linie de ghidaj</b> verticală în sus.</li>
<li>În elevație reporți <b>înălțimile</b> (cotele) vârfurilor, pornind de la linia de pământ, și unești punctele.</li>
<li>Pentru <b>vederea laterală</b> folosește linii de ghidaj orizontale din elevație (aceleași înălțimi) și reportează adâncimile din vederea de sus, rotindu-le cu o linie la 45° sau cu compasul.</li>
<li>Repasează <b>muchiile vizibile cu linie continuă</b> și <b>muchiile ascunse cu linie întreruptă</b> (linie punctată); <b>axele de simetrie</b> cu linie mixtă punct-linie.</li>
</ol>
<p>Câteva vederi caracteristice:</p>
<ul>
<li><b>Cubul</b> (cu baza pe plan): elevația și vederea laterală sunt pătrate, iar vederea de sus la fel.</li>
<li><b>Prisma dreaptă</b>: elevația este un dreptunghi, vederea de sus = poligonul bazei.</li>
<li><b>Piramida dreaptă</b> cu baza pătrată: elevația este un <b>triunghi</b>, vederea de sus este un pătrat cu <b>diagonalele</b> (muchiile laterale).</li>
<li><b>Cilindrul</b> (cu axa verticală): elevația este un dreptunghi, vederea de sus un <b>cerc</b>.</li>
<li><b>Conul</b> (cu axa verticală): elevația este un triunghi isoscel, vederea de sus un cerc cu centrul marcat.</li>
<li><b>Sfera</b>: toate cele trei proiecții sunt <b>cercuri</b> egale.</li>
</ul>`
    },
    {
      type: `svg`, title: `Vederea de sus și elevația principalelor solide`,
      caption: `Solidele de rotație (cilindrul, conul, sfera) au cel puțin o vedere circulară: este indiciul prin care le recunoaștem. Piramida arată în vederea de sus diagonalele, adică muchiile oblice văzute de deasupra.`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#f8fafc"/><line x1="10" y1="150" x2="590" y2="150" stroke="#dc2626" stroke-width="2"/><text x="14" y="145" font-size="14" fill="#dc2626">linia de pământ</text><text x="60" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cub</text><rect x="30" y="60" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="30" y="180" width="60" height="60" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="60" y1="122" x2="60" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="180" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Piramidă</text><polygon points="145,120 215,120 180,50" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><rect x="145" y="175" width="70" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="145" y1="175" x2="215" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="215" y1="175" x2="145" y2="245" stroke="#1e3a8a" stroke-width="1.5"/><line x1="180" y1="122" x2="180" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Cilindru</text><rect x="270" y="50" width="60" height="70" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="300" cy="210" r="30" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="300" y1="122" x2="300" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="420" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Con</text><polygon points="385,120 455,120 420,45" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="420" cy="210" r="3" fill="#1e3a8a"/><line x1="420" y1="122" x2="420" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="540" y="24" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Sferă</text><circle cx="540" cy="85" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="540" cy="210" r="35" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round"/><line x1="540" y1="122" x2="540" y2="172" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><text x="300" y="285" font-size="15" fill="#334155" text-anchor="middle">sus: elevația (pe PV) – jos: vederea de sus (pe PO)</text><text x="300" y="308" font-size="14" fill="#475569" text-anchor="middle">proiecțiile aceluiași punct se află pe aceeași perpendiculară pe linia de pământ</text></svg>`
    },
    {
      type: `example`, title: `Exemplu: paharul de carton`,
      html: `<p>Un pahar de carton este un <b>trunchi de con</b> cu baza mică jos. Elevația sa este un <b>trapez isoscel</b>; vederea de sus este formată din <b>două cercuri concentrice</b> (marginea mare de sus și fundul mai mic). Cine citește doar elevația s-ar putea gândi la o vază sau la o găleată; vederea de sus circulară, cu două cercuri, arată că este un solid de rotație. Tocmai încrucișând vederile se „reconstituie" obiectul.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… Monge a fost nevoit să țină metoda secretă?`,
      html: `<p>Gaspard Monge a inventat metoda în tinerețe (în jurul anului 1765), pe când lucra ca desenator la școala militară din Mézières, pentru a calcula unde să fie poziționate tunurile fără calcule numerice lungi. A fost considerată un <b>secret militar</b> și a rămas confidențială timp de aproximativ treizeci de ani. Abia după Revoluția franceză, Monge, devenit ministru și fondator al École polytechnique, a putut să o predea public. A fost și printre consilierii științifici ai lui Napoleon în campania din Egipt.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… și jocurile video și imprimantele 3D gândesc așa?`,
      html: `<p>Programele de modelare 3D (Blender, CAD) arată implicit patru vederi: <b>Top</b> (vederea de sus), <b>Front</b> (elevația), <b>Right/Left</b> (vederea laterală) și o vedere 3D. Sunt exact proiecțiile lui Monge! Imprimantele 3D lucrează „pe straturi": fiecare strat este secțiunea orizontală a obiectului, adică o „vedere de sus" la o anumită cotă.</p>`
    },
    {
      type: `remember`, title: `De reținut`,
      html: `<ul>
<li>Proiecție <b>ortogonală</b>: raze perpendiculare pe plan.</li>
<li>Trei plane: <b>PV</b> (elevație), <b>PO</b> (vedere de sus), <b>PL</b> (vedere laterală). După rabatere: vederea de sus sub elevație, vederea laterală la dreapta.</li>
<li>O figură <b>paralelă</b> cu un plan apare în <b>formă reală</b> pe acel plan; <b>perpendiculară</b> → segment (sau punct, pentru un segment).</li>
<li>Muchiile vizibile cu linie <b>continuă</b>, cele ascunse cu linie <b>întreruptă</b>, axele cu linie <b>punct-linie</b>.</li>
<li>Cilindrul, conul și sfera au o vedere <b>circulară</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Proiecțiile ortogonale se înțeleg mai bine când le vezi cu mâna și cu ochiul.`,
      tabs: [
        {
          label: `🔦 Umbrele`,
          html: `<p>Pune un obiect în fața unui zid și luminează-l cu o lampă foarte îndepărtată (sau cu soarele): umbra este proiecția. Dacă zidul este perpendicular pe raze, umbra este <b>ortogonală</b>. Încearcă cu o cutie de cereale: dintr-o parte umbra este un dreptunghi lat, din cealaltă unul îngust, de sus un dreptunghi diferit. Fiecare este o vedere.</p>`
        },
        {
          label: `🧊 Cubul de sticlă`,
          html: `<p>Imaginează-ți obiectul într-o cutie de sticlă transparentă: privind dinspre fața din față, dinspre cea de sus și dinspre cea laterală, vezi cele trei vederi „desenate" pe sticlă. Deschizând cutia ca pe o cutie de carton (adică <b>rabătând</b> fețele pe un plan) obții exact cele trei vederi dispuse ca pe foaie.</p>`,
          scene: `solid`,
          options: { shape: `cube`, color: `#60a5fa`, labels: true, shapes: [`cube`, `box`, `pyramid`, `cone`] }
        },
        {
          label: `🇺🇸 Metoda europeană și cea americană`,
          html: `<p>În lume există două convenții:</p>
<ul>
<li><b>Metoda europeană</b> (primul diedru, cea pe care o folosim în Italia și în Europa): obiectul se află <b>între observator și plan</b>: vederea de sus se desenează sub elevație, vederea laterală din stânga la dreapta.</li>
<li><b>Metoda americană</b> (al treilea diedru): planul se află între observator și obiect, ca o sticlă transparentă: vederea de sus se desenează <b>deasupra</b> elevației, iar vederea laterală din stânga la stânga.</li>
</ul>
<p>În normele internaționale (ISO) un mic simbol cu un con tăiat arată ce metodă a fost folosită în desen.</p>`
        },
        {
          label: `🏷️ Recunoaște vederile`,
          html: `<p>Asociază fiecare solid cu vederea lui de sus.</p>`,
          widget: `match`,
          options: { pairs: [[`Cub`, `Pătrat`], [`Cilindru`, `Cerc`], [`Piramidă cu baza pătrată`, `Pătrat cu diagonale`], [`Con`, `Cerc cu punct central`], [`Sferă`, `Cerc`]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta: proiecțiile ortogonale`,
      nodes: [
        { id: `rapp`, label: `A reprezenta 3D pe o foaie`, x: 50, y: 6, color: `#64748b`, html: `Cum reducem un obiect tridimensional la desene plane fără să pierdem măsurile.`, why: `Un desen plan pierde mereu o dimensiune. Ea se recuperează combinând mai multe vederi pe plane diferite.` },
        { id: `proj`, label: `Proiecție ortogonală`, x: 20, y: 30, color: `#0ea5e9`, html: `Raze perpendiculare pe plan.`, why: `Dacă raza este perpendiculară, un segment paralel cu planul își păstrează lungimea: de aceea metoda păstrează măsurile.` },
        { id: `piani`, label: `Trei plane PV, PO, PL`, x: 52, y: 30, color: `#f59e0b`, html: `Peretele din față, podeaua, peretele lateral.`, why: `Sunt necesare două plane perpendiculare pentru a fixa un punct: x, y, z sunt coordonatele carteziene ale lui Descartes (1637) aplicate vederilor.` },
        { id: `rib`, label: `Rabatere`, x: 82, y: 30, color: `#a855f7`, html: `Rotirea planelor până când totul se întinde pe foaie.`, why: `Ideea genială a lui <b>Monge</b> (în jurul anului 1765, publicată în 1795-1799): a face plan un spațiu cu trei dimensiuni printr-o rotație de 90°.` },
        { id: `vera`, label: `Mărime reală`, x: 22, y: 62, color: `#22c55e`, html: `Un segment sau o figură paralelă cu planul nu se deformează.`, why: `O proiecție înmulțește lungimile cu cosinusul unghiului făcut cu planul: dacă unghiul este 0, cosinusul este 1.` },
        { id: `solidi`, label: `Solidele`, x: 52, y: 62, color: `#ef4444`, html: `Vederea de sus + elevația (+ vederea laterală) identifică un solid.`, why: `Fiecare vedere dă două dimensiuni; cu două sau trei vederi se obțin toate trei. Muchiile ascunse se desenează întrerupt pentru a citi interiorul.` },
        { id: `norma`, label: `Norme și convenții`, x: 82, y: 62, color: `#14b8a6`, html: `Linii continue, întrerupte, punct-linie; metoda europeană și cea americană.`, why: `Pentru ca cine desenează la Torino și cine citește la Tokyo să înțeleagă același desen sunt necesare reguli comune: normele UNI și ISO.` },
        { id: `uso`, label: `Aplicații`, x: 50, y: 90, color: `#0ea5e9`, html: `Mecanică, arhitectură, CAD, imprimare 3D.`, why: `Fiecare piesă fabricată în serie este definită de un desen cotat în proiecții ortogonale.` }
      ],
      edges: [
        [`rapp`, `proj`, `metodă`], [`rapp`, `piani`, `folosește`], [`piani`, `rib`, `se obține`], [`proj`, `vera`, `dacă e paralelă`],
        [`rib`, `solidi`, `pentru`], [`piani`, `solidi`, `desenează`], [`solidi`, `norma`, `respectă`], [`solidi`, `uso`, `pentru`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: segmente și solide`,
      questions: [
        { type: `mc`, q: `Un segment perpendicular pe planul orizontal apare în vederea de sus ca…`, options: [`Un segment în mărime reală`, `Un punct`, `Un segment redus la jumătate`], answer: 1, explain: `Raza proiectantă coincide cu segmentul: proiecția se reduce la un punct.` },
        { type: `mc`, q: `Vederea de sus a unui con cu axa verticală este…`, options: [`Un triunghi`, `Un cerc cu punctul central`, `Un dreptunghi`], answer: 1, explain: `Baza circulară și vârful proiectat în centru.` },
        { type: `tf`, q: `Elevația unei sfere este un cerc.`, answer: true, explain: `Sfera are toate cele trei proiecții circulare, cu raza egală cu raza sferei.` },
        { type: `num`, q: `Un cub cu muchia de 5 cm, așezat pe o față: cât măsoară aria pătratului din elevație?`, answer: 25, tol: 0, unit: `cm²`, explain: `Elevația este un pătrat în formă reală cu latura de 5 cm: 5 × 5 = 25 cm².` }
      ]
    }
  ],
  glossary: [
    { t: `Proiecție ortogonală`, d: `Proiecție cu raze perpendiculare pe planul de proiecție.` },
    { t: `Vedere de sus (plan orizontal)`, d: `Vederea de deasupra: proiecția pe planul orizontal (PO).` },
    { t: `Elevație`, d: `Vederea din față: proiecția pe planul vertical (PV).` },
    { t: `Vedere laterală`, d: `Vederea din lateral: proiecția pe planul lateral (PL).` },
    { t: `Linia de pământ`, d: `Dreapta de intersecție dintre planul vertical și planul orizontal.` },
    { t: `Rabatere`, d: `Rotirea cu 90° a planelor pentru a așterne toate vederile pe foaie.` },
    { t: `Mărime reală`, d: `Proiecție a unui segment sau a unei figuri care păstrează dimensiunile reale.` },
    { t: `Linie de ghidaj`, d: `Linie subțire care pune în corespondență proiecțiile aceluiași punct.` },
    { t: `Metoda lui Monge`, d: `Sistem de reprezentare cu plane ortogonale rabătute, conceput de Gaspard Monge.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Cine a pus la punct metoda proiecțiilor ortogonale (geometria descriptivă)?`, options: [`Gaspard Monge`, `Filippo Brunelleschi`, `Euclid`], answer: 0, explain: `Monge, matematician francez, a publicat Géométrie descriptive (1795-1799).` },
      { type: `mc`, q: `Elevația se proiectează pe…`, options: [`planul orizontal`, `planul vertical`, `planul lateral`], answer: 1, explain: `Elevația este vederea din față: PV.` },
      { type: `tf`, q: `Un segment paralel cu planul de proiecție se proiectează în mărime reală.`, answer: true, explain: `Segmentul și proiecția sa sunt laturi opuse ale unui dreptunghi.` },
      { type: `num`, q: `Un segment vertical de 8 cm: cât măsoară proiecția sa pe planul orizontal (în cm)?`, answer: 0, tol: 0, unit: `cm`, explain: `Este un punct: lungime nulă.` },
      { type: `mc`, q: `Cum se desenează muchiile ascunse?`, options: [`Linie continuă groasă`, `Linie întreruptă`, `Nu se desenează niciodată`], answer: 1, explain: `Convenția desenului tehnic: linie punctată.` },
      { type: `mc`, q: `Un cilindru cu axa verticală are ca vedere de sus…`, options: [`un dreptunghi`, `un cerc`, `un triunghi`], answer: 1, explain: `Privit de sus se vede baza circulară.` },
      { type: `order`, q: `Pune în ordine pașii pentru a desena vederea de sus și elevația unei piramide.`, items: [`Desenează vederea de sus a bazei`, `Trasează liniile de ghidaj verticale`, `Reportează cotele în elevație`, `Unește punctele și repasează`], explain: `Din vederea de sus se obțin pozițiile orizontale, apoi se reportează înălțimile.` },
      { type: `tf`, q: `Elevația unei piramide drepte cu baza pătrată, văzută din față, este un triunghi.`, answer: true, explain: `Se văd baza ca segment și fețele ca un triunghi.` },
      { type: `text`, q: `Cum se numește dreapta de intersecție dintre planul vertical și planul orizontal?`, answer: [`linia de pământ`, `linie de pământ`, `linia de pamant`, `linie de pamant`], explain: `Linia de pământ: după rabatere separă elevația de vederea de sus.` },
      { type: `mc`, q: `Care solid are trei proiecții egale, toate cercuri?`, options: [`Sfera`, `Conul`, `Cilindrul`], answer: 0, explain: `Sfera este simetrică în orice direcție.` }
    ]
  }
});
