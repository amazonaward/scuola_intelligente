TOPIC('it', {
  id: "l1-fra-quotidien",
  title: "La vita quotidiana",
  intro: "\"Le matin, <b>je me lève</b> à sept heures, je prends mon petit-déjeuner avec ma famille et je vais au lycée.\" Parlare della propria giornata è il primo vero uso pratico del francese: <b>famiglia</b>, <b>casa</b>, <b>scuola</b>, <b>orari</b> e <b>routine</b> sono gli argomenti di ogni scambio e di ogni esame A1-A2. Impareremo il lessico, i <b>possessivi</b>, come dire l'<b>ora</b> e i <b>verbi riflessivi</b> (je me lève, je me couche). 🏠⏰",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. La famille",
      html: `<table>
<tr><th>Francese</th><th>Italiano</th><th>Francese</th><th>Italiano</th></tr>
<tr><td>le <b>père</b> / le papa</td><td>padre / papà</td><td>la <b>mère</b> / la maman</td><td>madre / mamma</td></tr>
<tr><td>le <b>frère</b></td><td>fratello</td><td>la <b>sœur</b></td><td>sorella</td></tr>
<tr><td>le <b>grand-père</b></td><td>nonno</td><td>la <b>grand-mère</b></td><td>nonna</td></tr>
<tr><td>l'<b>oncle</b></td><td>zio</td><td>la <b>tante</b></td><td>zia</td></tr>
<tr><td>le <b>cousin</b></td><td>cugino</td><td>la <b>cousine</b></td><td>cugina</td></tr>
<tr><td>le <b>fils</b></td><td>figlio</td><td>la <b>fille</b></td><td>figlia / ragazza / bambina</td></tr>
<tr><td>le <b>mari</b></td><td>marito</td><td>la <b>femme</b></td><td>moglie / donna</td></tr>
</table>
<p>I <b>genitori</b> sono <b>les parents</b> (attenzione: <i>parents</i> in francese = genitori, non parenti!). I parenti sono <i>la famille</i>. <b>Les grands-parents</b> = nonni. <b>Un enfant</b> = bambino/figlio. <b>Un frère aîné</b> / <b>cadet</b> = fratello maggiore / minore.</p>
<p>Per parlare di famiglia:</p>
<ul>
<li><b>Tu as des frères et sœurs ?</b> → <i>J'ai un frère et deux sœurs.</i> / <i>Je suis fils unique</i> (maschio) / <i>fille unique</i> (femmina).</li>
<li><b>Ma mère s'appelle Claire. Elle a quarante-cinq ans. Elle est professeure.</b></li>
</ul>`
    },
    {
      type: "text",
      title: "2. I possessivi: mon, ma, mes…",
      html: `<p>Il possessivo francese concorda con la <b>cosa posseduta</b> (genere e numero), non con il possessore!</p>
<table>
<tr><th>Possessore</th><th>Maschile sing.</th><th>Femminile sing.</th><th>Plurale</th></tr>
<tr><td>io</td><td><b>mon</b> frère</td><td><b>ma</b> sœur</td><td><b>mes</b> frères / sœurs</td></tr>
<tr><td>tu</td><td><b>ton</b> père</td><td><b>ta</b> mère</td><td><b>tes</b> parents</td></tr>
<tr><td>lui / lei</td><td><b>son</b> frère</td><td><b>sa</b> sœur</td><td><b>ses</b> parents</td></tr>
<tr><td>noi</td><td colspan="2"><b>notre</b> maison</td><td><b>nos</b> amis</td></tr>
<tr><td>voi</td><td colspan="2"><b>votre</b> classe</td><td><b>vos</b> livres</td></tr>
<tr><td>loro</td><td colspan="2"><b>leur</b> chien</td><td><b>leurs</b> chiens</td></tr>
</table>
<ul>
<li><b>Son / sa / ses</b> valgono sia per \"suo (di lui)\" che per \"suo (di lei)\": si capisce dal contesto. <i>Paul parle à sa sœur</i> (la sorella di Paul) e <i>Marie parle à sa sœur</i> (la sorella di Marie).</li>
<li>Davanti a un nome femminile che inizia per <b>vocale</b> si usa <b>mon / ton / son</b> per evitare l'iato: <i>mon amie, ton école, son idée</i>.</li>
<li>In francese <b>non si usa l'articolo</b> con il possessivo: <i>mon frère</i> (non <s>le mon frère</s>).</li>
</ul>`
    },
    {
      type: "svg",
      title: "L'albero genealogico",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="15" width="170" height="40" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="145" y="41" font-size="15" text-anchor="middle" fill="#1e3a8a">le grand-père</text>
<rect x="370" y="15" width="170" height="40" rx="10" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
<text x="455" y="41" font-size="15" text-anchor="middle" fill="#831843">la grand-mère</text>
<line x1="230" y1="35" x2="370" y2="35" stroke="#64748b" stroke-width="2"/>
<line x1="300" y1="35" x2="300" y2="95" stroke="#64748b" stroke-width="2"/>
<line x1="120" y1="95" x2="480" y2="95" stroke="#64748b" stroke-width="2"/>
<line x1="120" y1="95" x2="120" y2="110" stroke="#64748b" stroke-width="2"/>
<line x1="300" y1="95" x2="300" y2="110" stroke="#64748b" stroke-width="2"/>
<line x1="480" y1="95" x2="480" y2="110" stroke="#64748b" stroke-width="2"/>
<rect x="45" y="110" width="150" height="38" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="120" y="135" font-size="15" text-anchor="middle" fill="#14532d">l'oncle / la tante</text>
<rect x="225" y="110" width="150" height="38" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="300" y="135" font-size="15" text-anchor="middle" fill="#14532d">le père + la mère</text>
<rect x="405" y="110" width="150" height="38" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="480" y="135" font-size="15" text-anchor="middle" fill="#14532d">l'oncle / la tante</text>
<line x1="300" y1="148" x2="300" y2="185" stroke="#64748b" stroke-width="2"/>
<line x1="170" y1="185" x2="430" y2="185" stroke="#64748b" stroke-width="2"/>
<line x1="170" y1="185" x2="170" y2="200" stroke="#64748b" stroke-width="2"/>
<line x1="300" y1="185" x2="300" y2="200" stroke="#64748b" stroke-width="2"/>
<line x1="430" y1="185" x2="430" y2="200" stroke="#64748b" stroke-width="2"/>
<rect x="105" y="200" width="130" height="38" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="170" y="225" font-size="15" text-anchor="middle" fill="#78350f">mon frère</text>
<rect x="235" y="200" width="130" height="38" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="300" y="225" font-size="15" text-anchor="middle" fill="#78350f" font-weight="bold">MOI</text>
<rect x="365" y="200" width="130" height="38" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="430" y="225" font-size="15" text-anchor="middle" fill="#78350f">ma sœur</text>
<text x="300" y="275" font-size="14" text-anchor="middle" fill="#334155">mon cousin / ma cousine = les enfants de mon oncle / ma tante</text>
</svg>`,
      caption: "Mon, ma, mes concordano con il nome che segue: mon frère, ma sœur, mes parents."
    },
    {
      type: "remember",
      title: "Parents ≠ parenti",
      html: `<p><b>Les parents</b> = i genitori (mamma + papà). I parenti in generale si dicono <b>la famille</b> o <b>les proches</b>. Falso amico classico: <i>Mes parents habitent à Lyon</i> = i miei genitori abitano a Lione.</p>`
    },
    {
      type: "text",
      title: "3. La maison e l'école",
      html: `<p><b>La maison / l'appartement</b>:</p>
<ul>
<li>le <b>salon</b> (soggiorno), la <b>salle à manger</b>, la <b>cuisine</b>, la <b>chambre</b> (camera da letto), la <b>salle de bains</b>, les <b>toilettes</b> / les WC, le <b>couloir</b>, le <b>balcon</b>, le <b>jardin</b>, le <b>garage</b>, l'<b>escalier</b>.</li>
<li>Oggetti: <i>un lit, une table, une chaise, un bureau, une armoire, un canapé, une lampe, une fenêtre, une porte</i>.</li>
<li><b>Où est ... ? / Il y a ...</b> → <i>Dans ma chambre, il y a un lit et un bureau.</i></li>
<li>Preposizioni di luogo: <b>dans</b> (in), <b>sur</b> (su), <b>sous</b> (sotto), <b>devant</b> (davanti), <b>derrière</b> (dietro), <b>à côté de</b> (accanto a), <b>entre</b> (tra), <b>en face de</b> (di fronte a).</li>
</ul>
<p><b>L'école / le lycée</b>:</p>
<ul>
<li>le <b>professeur</b> (o la professeure), l'<b>élève</b>, la <b>classe</b>, le <b>cours</b>, la <b>salle de classe</b>, le <b>cahier</b>, le <b>stylo</b>, le <b>cartable</b>, la <b>trousse</b>, la <b>règle</b>, la <b>gomme</b>, le <b>tableau</b>, la <b>cantine</b>, la <b>cour</b>, la <b>récréation</b>.</li>
<li>Materie: <b>le français</b>, <b>l'italien</b>, <b>l'anglais</b>, <b>les maths</b>, <b>l'histoire</b>, <b>la géographie</b>, <b>la physique</b>, <b>la chimie</b>, <b>les SVT</b> (scienze), <b>l'EPS</b> (educazione fisica), <b>le dessin</b>, <b>la musique</b>.</li>
<li><b>J'aime</b> / <b>j'adore</b> / <b>je déteste</b> + articolo determinativo: <i>J'adore les maths. Je déteste l'histoire.</i></li>
</ul>
<p>Il sistema scolastico francese è diverso: <b>l'école primaire</b> (6-11 anni), <b>le collège</b> (11-15, dalla 6ᵉ alla 3ᵉ), <b>le lycée</b> (15-18, dalla seconde alla terminale), poi il <b>baccalauréat</b> (il \"bac\"). Si conta alla rovescia: 6ᵉ, 5ᵉ, 4ᵉ, 3ᵉ, <i>seconde</i>, <i>première</i>, <i>terminale</i>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: famiglia, casa e scuola",
      questions: [
        { type: "mc", q: "___ sœur s'appelle Léa. (la mia)", options: ["Mon", "Ma", "Mes"], answer: 1, explain: "Sœur è femminile singolare → ma sœur." },
        { type: "mc", q: "Les parents de Paul sont…", options: ["i parenti di Paul", "i genitori di Paul", "i fratelli di Paul"], answer: 1, explain: "Parents = genitori in francese (falso amico)." },
        { type: "tf", q: "Si dice \"le mon livre\" per \"il mio libro\".", answer: false, explain: "Con il possessivo non si usa l'articolo: mon livre." },
        { type: "text", q: "Come si dice \"la cucina\" in francese? (articolo + nome)", answer: ["la cuisine"], explain: "La cuisine." }
      ]
    },
    {
      type: "text",
      title: "4. Dire l'ora e i giorni",
      html: `<p>Domanda: <b>Quelle heure est-il ?</b> / <b>Il est quelle heure ?</b> → Risposta: <b>Il est + ora + heure(s)</b>.</p>
<table>
<tr><th>Ora</th><th>Francese</th></tr>
<tr><td>7:00</td><td>Il est <b>sept heures</b>.</td></tr>
<tr><td>7:15</td><td>Il est sept heures <b>et quart</b>.</td></tr>
<tr><td>7:30</td><td>Il est sept heures <b>et demie</b>.</td></tr>
<tr><td>7:45</td><td>Il est huit heures <b>moins le quart</b>.</td></tr>
<tr><td>7:10</td><td>Il est sept heures <b>dix</b>.</td></tr>
<tr><td>7:50</td><td>Il est huit heures <b>moins dix</b>.</td></tr>
<tr><td>12:00</td><td>Il est <b>midi</b>.</td></tr>
<tr><td>00:00</td><td>Il est <b>minuit</b>.</td></tr>
<tr><td>13:30</td><td>Il est une heure et demie (o <i>treize heures trente</i>, ufficiale)</td></tr>
</table>
<p>Per l'ora ufficiale (orari di treni e programmi) si usa il formato 24 ore: <i>Le train part à dix-huit heures quarante-cinq.</i></p>
<p><b>À quelle heure ?</b> (a che ora?) → <b>À</b> sept heures. <i>Le cours commence <b>à</b> huit heures et finit <b>à</b> quatre heures.</i> Per distinguere mattino e pomeriggio: <b>du matin / de l'après-midi / du soir</b>.</p>
<p><b>I giorni</b> (sempre minuscoli, maschili): <b>lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</b>. <i>Lundi</i> = questo lunedì; <i>le lundi</i> = ogni lunedì. <b>Les mois</b>: janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre. <b>La date</b>: <i>Nous sommes le 27 novembre.</i> (primo del mese: <i>le premier</i>).</p>`
    },
    {
      type: "text",
      title: "5. La routine: i verbi riflessivi",
      html: `<p>Molte azioni quotidiane si dicono con i <b>verbi riflessivi</b> (<i>se lever, se laver, s'habiller, se coucher, se réveiller, se brosser les dents, s'appeler, se promener</i>), come in italiano. Il pronome riflessivo <b>precede il verbo</b>:</p>
<table>
<tr><th>Pronome</th><th>SE LEVER</th><th>S'HABILLER</th></tr>
<tr><td>je</td><td>je <b>me</b> lève</td><td>je <b>m'</b>habille</td></tr>
<tr><td>tu</td><td>tu <b>te</b> lèves</td><td>tu <b>t'</b>habilles</td></tr>
<tr><td>il / elle / on</td><td>il <b>se</b> lève</td><td>il <b>s'</b>habille</td></tr>
<tr><td>nous</td><td>nous <b>nous</b> levons</td><td>nous <b>nous</b> habillons</td></tr>
<tr><td>vous</td><td>vous <b>vous</b> levez</td><td>vous <b>vous</b> habillez</td></tr>
<tr><td>ils / elles</td><td>ils <b>se</b> lèvent</td><td>ils <b>s'</b>habillent</td></tr>
</table>
<p>Una giornata tipo:</p>
<ol>
<li>Je <b>me réveille</b> à sept heures et je <b>me lève</b>.</li>
<li>Je <b>me douche</b> (o je prends une douche), je <b>m'habille</b> et je <b>prends mon petit-déjeuner</b>.</li>
<li>Je <b>vais</b> au lycée à pied ou en bus. Les cours <b>commencent</b> à huit heures.</li>
<li>À midi, je <b>mange</b> à la cantine avec mes amis.</li>
<li>L'après-midi, j'<b>ai</b> des cours jusqu'à seize heures. Puis je <b>rentre</b> à la maison, je <b>fais</b> mes devoirs et je <b>joue</b> au foot.</li>
<li>Le soir, nous <b>dînons</b> en famille. Je <b>me couche</b> vers vingt-deux heures.</li>
</ol>
<p><b>Connettivi di sequenza</b>: <i>d'abord</i> (prima), <i>puis / ensuite</i> (poi), <i>après</i> (dopo), <i>enfin</i> (infine). <b>Frequenza</b>: <i>toujours, souvent, quelquefois, rarement, ne… jamais, tous les jours, le week-end</i>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: una giornata di Léa",
      html: `<p>📖 <i>Je m'appelle Léa, j'ai quinze ans et j'habite à Lyon avec ma famille : mon père, ma mère et mon petit frère Tom. <b>Le matin</b>, je me réveille à sept heures et je me lève à sept heures et quart. Je prends mon petit-déjeuner avec Tom : du pain, du beurre et du chocolat chaud. Nous partons de la maison à huit heures moins le quart et nous allons au lycée en bus. <b>Les cours</b> commencent à huit heures et demie. J'ai maths le lundi, histoire le mardi, EPS le jeudi. À midi, je mange à la cantine. <b>L'après-midi</b>, le dernier cours finit à seize heures. Je rentre, je fais mes devoirs puis je regarde une série. <b>Le soir</b>, nous dînons à dix-neuf heures trente. Je me couche vers vingt-deux heures.</i></p>
<p>Prova a riscrivere il testo con i tuoi orari: in 10 righe hai già un'esposizione orale di livello A2!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: descrivere la propria camera",
      html: `<p>🛏️ <i>Ma chambre est petite mais confortable. <b>Dans</b> ma chambre, il y a un lit, un bureau et une armoire. Mon bureau est <b>devant</b> la fenêtre. Mes livres sont <b>sur</b> l'étagère, <b>à côté de</b> mon ordinateur. <b>Sous</b> le lit, il y a mon sac de sport. Il y a un poster de mon groupe préféré <b>au-dessus de</b> mon lit. Je partage ma chambre avec mon frère, mais j'aimerais avoir une chambre pour moi seule !</i></p>
<p>Nota: <i>il y a</i> + articolo indeterminativo: <i>il y a un lit</i> (c'è un letto). Non si usa mai <i>il est un lit</i>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il francese conta i giorni a partire da lundi?",
      html: `<p>In francese la settimana comincia di <b>lundi</b> e i nomi dei giorni derivano dai pianeti latini: <i>lundi</i> (Luna), <i>mardi</i> (Marte), <i>mercredi</i> (Mercurio), <i>jeudi</i> (Giove), <i>vendredi</i> (Venere), <i>samedi</i> (da <i>sabbati dies</i>, giorno del sabato ebraico), <i>dimanche</i> (<i>dies dominica</i>, giorno del Signore).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… in Francia si pranza a lungo e si cena tardi?",
      html: `<p>La giornata francese è scandita dal <b>pasto</b>: il <i>petit-déjeuner</i> (colazione), il <i>déjeuner</i> (pranzo, a mezzogiorno) e il <i>dîner</i> (cena, verso le 19:30–20:00). Il <b>goûter</b> è la merenda dei bambini alle 16:30 (spesso pain au chocolat o baguette con cioccolato). In Canada e in Belgio i nomi dei pasti sono invece <i>déjeuner</i> (colazione), <i>dîner</i> (pranzo) e <i>souper</i> (cena): attenzione se viaggi!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per memorizzare il lessico quotidiano",
      intro: "Il lessico si impara meglio con associazioni, immagini e ripetizione.",
      tabs: [
        {
          label: "🏠 Il palazzo della memoria",
          html: `<p>Immagina di camminare nella tua casa e <b>etichetta mentalmente</b> ogni oggetto in francese: <i>la porte, le couloir, la cuisine, le frigo, la chambre, le lit, l'armoire</i>. Quando entri in una stanza reale di casa tua, pronuncia ad alta voce due parole. In pochi giorni il lessico diventa automatico, perché è legato a un luogo.</p>`
        },
        {
          label: "🕐 Con l'orologio",
          html: `<p>Disegna un quadrante e ripeti le formule: <b>et quart</b> (un quarto dopo), <b>et demie</b> (e mezza), <b>moins le quart</b> (meno un quarto), <b>moins dix</b> (dieci prima dell'ora successiva). Per leggere velocemente l'ora ufficiale (24 ore) ricorda che dopo le 12 si possono sottrarre 12: 15:00 = <i>trois heures de l'après-midi</i>.</p>`
        },
        {
          label: "🧩 Gioco: dove va?",
          html: `<p>Classifica le parole nella categoria giusta:</p>`,
          widget: "classify",
          options: {
            groups: ["🏠 La maison", "🏫 L'école", "👪 La famille"],
            items: [["la cuisine", 0], ["la chambre", 0], ["le salon", 0], ["le professeur", 1], ["le cahier", 1], ["la cantine", 1], ["la tante", 2], ["le grand-père", 2], ["le cousin", 2], ["la salle de bains", 0], ["la trousse", 1], ["la sœur", 2]]
          }
        },
        {
          label: "🎴 Carte: le preposizioni di luogo",
          html: `<p>Prova a ricordare la traduzione prima di girare la carta:</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "dans", back: "in / dentro" },
              { front: "sur", back: "su / sopra" },
              { front: "sous", back: "sotto" },
              { front: "devant", back: "davanti a" },
              { front: "derrière", back: "dietro a" },
              { front: "à côté de", back: "accanto a" },
              { front: "entre", back: "tra" },
              { front: "en face de", back: "di fronte a" }
            ]
          }
        }
      ]
    },
    {
      type: "widget",
      title: "Abbina l'orario alla frase",
      widget: "match",
      options: {
        pairs: [
          ["8:15", "Il est huit heures et quart."],
          ["8:30", "Il est huit heures et demie."],
          ["8:45", "Il est neuf heures moins le quart."],
          ["12:00", "Il est midi."],
          ["7:10", "Il est sept heures dix."],
          ["7:50", "Il est huit heures moins dix."]
        ]
      },
      caption: "Dopo la mezz'ora si \"va avanti\" con moins: si sottrae dall'ora successiva."
    },
    {
      type: "conceptMap",
      title: "Mappa della giornata: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "fam", label: "La famille", x: 15, y: 8, color: "#2563eb", html: "père, mère, frère, sœur, grands-parents…", why: "Molte parole di parentela vengono dal latino (<i>pater, mater, frater, soror</i>). <i>Parents</i> (genitori) deriva da <i>parentes</i> = \"coloro che generano\" (<i>parere</i> = partorire): da qui il falso amico con \"parenti\"." },
        { id: "poss", label: "Possessivi", x: 50, y: 8, color: "#16a34a", html: "mon, ma, mes; ton, ta, tes; son, sa, ses…", why: "Concordano con la cosa posseduta perché derivano dagli aggettivi latini <i>meus, mea, meum</i>. Davanti a vocale si usa mon (mon amie) perché ma + a- sarebbe difficile da pronunciare." },
        { id: "maison", label: "La maison", x: 85, y: 8, color: "#d97706", html: "salon, cuisine, chambre, salle de bains…", why: "<i>Chambre</i> viene dal latino <i>camera</i> (stanza a volta). In italiano <i>camera</i> ha lo stesso senso, in inglese <i>chamber</i>. I nomi delle stanze mostrano l'origine latina comune delle lingue romanze." },
        { id: "ecole", label: "L'école", x: 20, y: 42, color: "#a855f7", html: "classe, cours, matières, cantine.", why: "I <i>lycées</i> furono istituiti nel 1802 sotto Napoleone; il nome richiama il <i>Liceo</i> (Lýkeion) di Aristotele. In Francia gli anni si contano all'indietro: dalla 6ᵉ (11 anni) alla 3ᵉ, poi seconde, première, terminale." },
        { id: "heure", label: "L'heure", x: 50, y: 42, color: "#f97316", html: "Il est … heures; et quart, et demie, moins le quart.", why: "Il francese dice \"moins le quart\" (meno un quarto) invece di \"quarantacinque\": è una formula comune nelle lingue romanze (l'italiano dice \"le nove meno un quarto\"). Nel sistema 24 ore (treni, TV) si legge il numero intero." },
        { id: "refl", label: "Verbi riflessivi", x: 80, y: 42, color: "#0ea5e9", html: "me lève, te lèves, se lève…", why: "Il pronome riflessivo indica che l'azione ricade sul soggetto: si lever = \"alzare sé stessi\". Si forma come in italiano, ma in francese il pronome si mette sempre davanti al verbo coniugato." },
        { id: "rout", label: "La routine", x: 35, y: 76, color: "#dc2626", html: "d'abord, puis, ensuite, enfin.", why: "I connettivi organizzano il racconto in sequenza. Sono fondamentali per ogni prova orale e scritta, perché danno una struttura logica a una descrizione." },
        { id: "meal", label: "I pasti", x: 70, y: 76, color: "#14b8a6", html: "petit-déjeuner, déjeuner, goûter, dîner.", why: "<i>Déjeuner</i> = rompere il digiuno (<i>dé</i> + <i>jeûner</i>): in origine era la colazione. Poi lo spostamento dei pasti nell'arco della giornata ha spostato anche i nomi (Belgio e Canada hanno mantenuto l'uso antico)." }
      ],
      edges: [
        ["fam", "poss", "mon père"],
        ["maison", "ecole", "luoghi"],
        ["ecole", "heure", "orari"],
        ["heure", "refl", "routine"],
        ["refl", "rout", "sequenza"],
        ["rout", "meal", "giornata"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: ora e routine",
      questions: [
        { type: "mc", q: "Come si dice 8:45?", options: ["huit heures et quart", "neuf heures moins le quart", "huit heures moins le quart"], answer: 1, explain: "8:45 = le nove meno un quarto: neuf heures moins le quart." },
        { type: "mc", q: "Je ___ à sept heures. (svegliarsi)", options: ["réveille", "me réveille", "se réveille"], answer: 1, explain: "Verbo riflessivo con je: me réveille." },
        { type: "tf", q: "In francese \"Son frère\" vale solo per \"il fratello di lui\".", answer: false, explain: "Son/sa/ses valgono sia per lui sia per lei; il possessore si capisce dal contesto." },
        { type: "text", q: "Scrivi in francese \"a mezzogiorno\" (due parole: à + ...)", answer: ["à midi", "a midi"], explain: "À midi." }
      ]
    }
  ],
  glossary: [
    { t: "Les parents", d: "I genitori (non i parenti!)." },
    { t: "Adjectif possessif", d: "mon, ma, mes… concorda con la cosa posseduta." },
    { t: "Il y a", d: "C'è / ci sono: espressione invariabile per l'esistenza." },
    { t: "Verbe pronominal", d: "Verbo riflessivo con pronome (me, te, se, nous, vous, se): se lever, se coucher." },
    { t: "Et quart / et demie / moins le quart", d: "Formule per i 15, 30 e 45 minuti nell'ora." },
    { t: "Matière", d: "Materia scolastica: les maths, l'histoire, l'EPS…" },
    { t: "Le bac", d: "Il baccalauréat, esame finale del liceo francese." },
    { t: "Le goûter", d: "La merenda del pomeriggio, tipica dei bambini francesi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Tu as des frères et ___ ?", options: ["sœurs", "sœur", "mères"], answer: 0, explain: "Frères et sœurs = fratelli e sorelle." },
      { type: "mc", q: "Comment dit-on \"my parents\" (miei genitori) ?", options: ["mon parents", "mes parents", "ma parents"], answer: 1, explain: "Plurale → mes: mes parents." },
      { type: "text", q: "Scrivi in francese l'ora 7:30. (Il est sept heures ...)", answer: ["et demie", "sept heures et demie"], explain: "Il est sept heures et demie." },
      { type: "mc", q: "Nel mio salotto ___ un canapé.", options: ["il est", "il y a", "c'est"], answer: 1, explain: "Per dire che qualcosa esiste in un luogo: il y a." },
      { type: "tf", q: "In francese si dice \"ma amie\".", answer: false, explain: "Davanti a vocale si usa mon: mon amie." },
      { type: "mc", q: "Il se ___ (coucher) à dix heures.", options: ["couche", "couches", "couchent"], answer: 0, explain: "Il + se couche." },
      { type: "order", q: "Metti in ordine la frase: Je / me / lève / à / sept heures", items: ["Je", "me", "lève", "à", "sept heures"], explain: "Soggetto + pronome riflessivo + verbo + complemento di tempo." },
      { type: "mc", q: "Dans ma chambre, mon lit est ___ la fenêtre (di fronte).", options: ["en face de", "sous", "entre"], answer: 0, explain: "En face de = di fronte a." },
      { type: "tf", q: "Il liceo francese (lycée) dura tre anni: seconde, première e terminale.", answer: true, explain: "Sì: dai 15 ai 18 anni, poi il baccalauréat." },
      { type: "mc", q: "Come si chiama in francese la merenda del pomeriggio?", options: ["le goûter", "le dîner", "le déjeuner"], answer: 0, explain: "Le goûter è la merenda alle 16:30 circa." }
    ]
  }
});
