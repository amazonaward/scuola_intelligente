TOPIC('it', {
  id: `p5-ing-jobs`,
  title: `Jobs`,
  intro: `Che lavoro fanno i tuoi genitori? E tu, che cosa vorresti fare da grande? Oggi impariamo i nomi dei <b>mestieri</b> in inglese (<i>jobs</i>), dove si lavora e come chiedere e rispondere: <i>"What do you want to be?" — "I want to be a vet!"</i> 🐾`,
  minutes: 30,
  sections: [
    {
      type: `text`, title: `1. I nomi dei mestieri`,
      html: `<table>
<tr><th>Inglese</th><th>Si pronuncia circa</th><th>Italiano</th></tr>
<tr><td>👩‍🏫 <b>teacher</b></td><td>tìcer</td><td>insegnante</td></tr>
<tr><td>👨‍⚕️ <b>doctor</b></td><td>dòctor</td><td>medico</td></tr>
<tr><td>👩‍⚕️ <b>nurse</b></td><td>nèrs</td><td>infermiere/a</td></tr>
<tr><td>🧑‍🚒 <b>firefighter</b></td><td>fàier-fàiter</td><td>vigile del fuoco</td></tr>
<tr><td>👮 <b>police officer</b></td><td>polìs òfiser</td><td>agente di polizia</td></tr>
<tr><td>🧑‍🌾 <b>farmer</b></td><td>fàrmer</td><td>agricoltore</td></tr>
<tr><td>🧑‍🍳 <b>cook / chef</b></td><td>cuk / scef</td><td>cuoco / chef</td></tr>
<tr><td>🐾 <b>vet</b></td><td>vet</td><td>veterinario</td></tr>
<tr><td>🦷 <b>dentist</b></td><td>dèntist</td><td>dentista</td></tr>
<tr><td>👨‍✈️ <b>pilot</b></td><td>pàilot</td><td>pilota</td></tr>
<tr><td>🧑‍🔧 <b>mechanic</b></td><td>mecànic</td><td>meccanico</td></tr>
<tr><td>👷 <b>builder</b></td><td>bìlder</td><td>muratore</td></tr>
<tr><td>💇 <b>hairdresser</b></td><td>hèr-drèser</td><td>parrucchiere</td></tr>
<tr><td>🛍️ <b>shop assistant</b></td><td>sciop assìstant</td><td>commesso/a</td></tr>
<tr><td>🍽️ <b>waiter / waitress</b></td><td>uèiter / uèitres</td><td>cameriere / cameriera</td></tr>
<tr><td>🥖 <b>baker</b></td><td>bèiker</td><td>panettiere</td></tr>
<tr><td>👩‍🔬 <b>scientist</b></td><td>sàientist</td><td>scienziato/a</td></tr>
<tr><td>👨‍🚀 <b>astronaut</b></td><td>àstronot</td><td>astronauta</td></tr>
<tr><td>🧑‍💻 <b>programmer</b></td><td>pròugramer</td><td>programmatore</td></tr>
<tr><td>👨‍🎨 <b>artist</b></td><td>àrtist</td><td>artista</td></tr>
</table>
<p>Molti mestieri finiscono in <b>-er</b> (chi fa qualcosa: <i>teach ➜ teacher, bake ➜ baker, farm ➜ farmer</i>) o in <b>-ist</b> (<i>dentist, artist, scientist</i>), come in italiano "-ista".</p>`
    },
    {
      type: `widget`, title: `Flashcards: i mestieri`,
      widget: `flashcards`,
      caption: `Guarda l'emoji, di' ad alta voce il mestiere in inglese, poi gira la carta.`,
      options: {
        cards: [
          { front: `👩‍🏫`, back: `teacher – insegnante` },
          { front: `👨‍⚕️`, back: `doctor – medico` },
          { front: `👩‍⚕️`, back: `nurse – infermiera` },
          { front: `🧑‍🚒`, back: `firefighter – vigile del fuoco` },
          { front: `👮`, back: `police officer – poliziotto` },
          { front: `🧑‍🌾`, back: `farmer – agricoltore` },
          { front: `🧑‍🍳`, back: `chef – cuoco` },
          { front: `🐾`, back: `vet – veterinario` },
          { front: `👨‍✈️`, back: `pilot – pilota` },
          { front: `🧑‍🔧`, back: `mechanic – meccanico` },
          { front: `💇`, back: `hairdresser – parrucchiere` },
          { front: `👨‍🚀`, back: `astronaut – astronauta` }
        ]
      }
    },
    {
      type: `text`, title: `2. Come chiedere e rispondere`,
      html: `<table>
<tr><th>Domanda</th><th>Risposta</th></tr>
<tr><td><b>What do you do?</b> (Che lavoro fai?)</td><td>I'm <b>a</b> teacher.</td></tr>
<tr><td><b>What does your mum do?</b></td><td>She's <b>a</b> doctor.</td></tr>
<tr><td><b>What does he do?</b></td><td>He's <b>an</b> engineer.</td></tr>
<tr><td><b>Where does she work?</b> (Dove lavora?)</td><td>She works <b>in a</b> hospital.</td></tr>
<tr><td><b>What do you want to be?</b> (Che cosa vuoi fare da grande?)</td><td>I want to be <b>a</b> vet.</td></tr>
</table>
<p>⚠️ <b>Attenzione all'articolo!</b> In italiano diciamo "Mia mamma <b>è</b> medico" o "<b>fa il</b> medico". In inglese serve sempre <b>a / an</b>:</p>
<ul>
<li><b>a</b> davanti a un suono consonantico: <i>a doctor, a pilot, a nurse</i></li>
<li><b>an</b> davanti a un suono vocalico: <i><b>an</b> artist, <b>an</b> astronaut, <b>an</b> engineer</i></li>
</ul>
<p>Al plurale l'articolo sparisce: <i>They are <b>doctors</b>.</i></p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: chi è?`,
      questions: [
        { type: `mc`, q: `Chi lavora con gli animali malati?`, options: [`a vet`, `a baker`, `a pilot`], answer: 0, explain: `The vet = il veterinario.` },
        { type: `mc`, q: `"She's ___ artist."`, options: [`a`, `an`], answer: 1, explain: `Artist comincia con un suono vocalico ➜ an.` },
        { type: `text`, q: `Come si dice "infermiere" in inglese?`, answer: [`nurse`, `a nurse`], explain: `Infermiere/infermiera = nurse.` }
      ]
    },
    {
      type: `text`, title: `3. I posti di lavoro`,
      html: `<ul>
<li>🏫 <b>school</b> (scuola): teacher</li>
<li>🏥 <b>hospital</b> (ospedale): doctor, nurse</li>
<li>🚒 <b>fire station</b> (caserma dei pompieri): firefighter</li>
<li>🚓 <b>police station</b> (commissariato): police officer</li>
<li>🚜 <b>farm</b> (fattoria): farmer</li>
<li>🍝 <b>restaurant</b> (ristorante): chef, waiter</li>
<li>✈️ <b>airport</b> / <b>plane</b>: pilot</li>
<li>🔧 <b>garage</b> (officina): mechanic</li>
<li>🥐 <b>bakery</b> (panetteria): baker</li>
<li>🔬 <b>laboratory / lab</b>: scientist</li>
<li>🏢 <b>office</b> (ufficio): programmer, secretary</li>
</ul>
<p>Si dice <b>works in a</b> hospital / restaurant / office, ma <b>works on a</b> farm e <b>at</b> school, <b>at</b> the airport.</p>`
    },
    {
      type: `widget`, title: `Gioco: chi lavora dove?`,
      widget: `match`,
      options: {
        pairs: [
          [`teacher`, `school 🏫`], [`nurse`, `hospital 🏥`], [`firefighter`, `fire station 🚒`],
          [`farmer`, `farm 🚜`], [`chef`, `restaurant 🍝`], [`mechanic`, `garage 🔧`], [`baker`, `bakery 🥐`]
        ]
      }
    },
    {
      type: `svg`, title: `Una via piena di lavori`,
      caption: `Chi lavora in ciascun edificio? Prova a dirlo in inglese: "The ... works in the ...".`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<rect y="250" width="600" height="50" fill="#475569"/>
<g stroke="#ffffff" stroke-width="4" stroke-dasharray="20 15"><line x1="0" y1="275" x2="600" y2="275"/></g>
<rect x="20" y="110" width="130" height="140" fill="#fca5a5"/>
<rect x="20" y="85" width="130" height="30" fill="#dc2626"/>
<text x="85" y="106" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">HOSPITAL</text>
<rect x="73" y="140" width="24" height="70" fill="#ffffff"/><rect x="50" y="163" width="70" height="24" fill="#ffffff"/>
<rect x="165" y="140" width="130" height="110" fill="#fde68a"/>
<polygon points="160,140 230,90 300,140" fill="#b45309"/>
<text x="230" y="175" font-size="16" text-anchor="middle" fill="#78350f" font-weight="bold">SCHOOL</text>
<rect x="210" y="195" width="40" height="55" fill="#92400e"/>
<rect x="310" y="130" width="130" height="120" fill="#fecaca"/>
<rect x="310" y="105" width="130" height="30" fill="#b91c1c"/>
<text x="375" y="126" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">FIRE STATION</text>
<rect x="330" y="170" width="90" height="80" fill="#7f1d1d"/>
<rect x="455" y="150" width="130" height="100" fill="#fef3c7"/>
<path d="M455 150 L470 130 L485 150 L500 130 L515 150 L530 130 L545 150 L560 130 L575 150 L585 150" fill="#f97316"/>
<text x="520" y="185" font-size="16" text-anchor="middle" fill="#9a3412" font-weight="bold">BAKERY</text>
<text x="520" y="225" font-size="30" text-anchor="middle">🥖</text>
<text x="85" y="240" font-size="26" text-anchor="middle">👩‍⚕️</text>
<text x="190" y="240" font-size="26" text-anchor="middle">👩‍🏫</text>
<text x="375" y="225" font-size="30" text-anchor="middle">🚒</text>
<text x="300" y="40" font-size="22" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Who works here?</text>
</svg>`
    },
    {
      type: `example`, title: `Esempio: la famiglia di Jack`,
      html: `<p><i>Hi, I'm Jack! 👋 My dad is <b>a firefighter</b>. He works at the fire station and he's very brave. 🧑‍🚒 My mum is <b>a nurse</b>. She works in a hospital and she helps sick people. 👩‍⚕️ My grandpa was <b>a farmer</b>: he had cows and chickens. 🐄 My sister wants to be <b>an astronaut</b>! And me? I want to be <b>a chef</b>, because I love cooking pizza! 🍕</i></p>
<p>Nota il passato: <i>grandpa <b>was</b> a farmer</i> = il nonno era agricoltore.</p>`
    },
    {
      type: `example`, title: `Esempio: indovina il mestiere`,
      html: `<p>Un gioco da fare in classe: uno descrive, gli altri indovinano.</p>
<p><b>A:</b> <i>I work in a restaurant. I bring food to the tables. Who am I?</i><br>
<b>B:</b> <i>You're a waiter!</i> ✅</p>
<p><b>A:</b> <i>I wear a uniform. I drive a fast car with a siren. I help people and stop thieves.</i><br>
<b>B:</b> <i>You're a police officer!</i> ✅</p>
<p>Frasi utili: <i>I work in/on/at…</i> · <i>I wear…</i> (indosso) · <i>I help…</i> · <i>I use…</i> (uso).</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li><b>What do you do?</b> / <b>What does he/she do?</b> ➜ I'm <b>a</b> … / He's <b>an</b> …</li>
<li><b>What do you want to be?</b> ➜ I want to be <b>a/an</b> …</li>
<li><b>Where does she work?</b> ➜ She works <b>in a</b> hospital / <b>on a</b> farm.</li>
<li>L'articolo <b>a/an</b> davanti al mestiere <b>non si dimentica mai</b> al singolare!</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… molti mestieri inglesi sono diventati "neutri"?`,
      html: `<p>Un tempo si diceva <b>fireman</b> (uomo del fuoco), <b>policeman</b>, <b>postman</b>. Ma il lavoro lo fanno sia uomini che donne! Così oggi si preferiscono parole valide per tutti: <b>firefighter</b>, <b>police officer</b>, <b>postal worker</b>, <b>flight attendant</b> (invece di <i>stewardess</i>). In inglese, poi, quasi tutti i mestieri hanno <b>una sola forma</b>: <i>a teacher</i> può essere un maestro o una maestra.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… tanti cognomi inglesi sono mestieri?`,
      html: `<p>Nel Medioevo le persone venivano chiamate con il loro lavoro, e quei nomi sono diventati cognomi: <b>Smith</b> (fabbro, il cognome più diffuso in Inghilterra!), <b>Baker</b> (fornaio), <b>Taylor</b> (sarto), <b>Cook</b> (cuoco), <b>Fisher</b> (pescatore), <b>Carpenter</b> (falegname). Succede anche in italiano: <b>Ferrari</b> e <b>Ferraro</b> vengono da "fabbro", <b>Sartori</b> da "sarto".</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per impararli`,
      intro: `Le parole si ricordano meglio se le colleghi a qualcosa che conosci già.`,
      tabs: [
        {
          label: `🧩 Smonta la parola`,
          html: `<p>Molti mestieri sono formati da un <b>verbo o un nome + -er</b>, che vuol dire "chi fa":</p>
<ul>
<li><b>teach</b> (insegnare) + er = <b>teacher</b></li>
<li><b>bake</b> (cuocere al forno) + r = <b>baker</b></li>
<li><b>farm</b> (fattoria) + er = <b>farmer</b></li>
<li><b>build</b> (costruire) + er = <b>builder</b></li>
<li><b>fire</b> + <b>fight</b> (combattere) + er = <b>firefighter</b> = chi combatte il fuoco!</li>
<li><b>hair</b> (capelli) + <b>dress</b> (sistemare) + er = <b>hairdresser</b></li>
</ul>
<p>Se conosci il verbo, indovini il mestiere: <i>sing ➜ singer, dance ➜ dancer, play football ➜ football player, drive a bus ➜ bus driver</i>.</p>`
        },
        {
          label: `🌍 Mestieri nel mondo`,
          html: `<p>Alcuni lavori sono tipici di certi posti. Ruota il globo e scopri dove li trovi:</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 28.5, lon: -80.6, label: `👨‍🚀 astronaut – Cape Canaveral, USA` },
              { lat: 46.2, lon: 6.05, label: `👩‍🔬 scientist – CERN, Ginevra` },
              { lat: 45.0, lon: 7.0, label: `🍷 farmer – vigne del Piemonte` },
              { lat: 37.4, lon: -122.1, label: `🧑‍💻 programmer – Silicon Valley` },
              { lat: -1.3, lon: 36.8, label: `🐾 vet – parchi del Kenya` },
              { lat: 51.47, lon: -0.45, label: `👨‍✈️ pilot – aeroporto di Heathrow` },
              { lat: 40.85, lon: 14.27, label: `🍕 chef – pizzaioli di Napoli` }
            ]
          }
        },
        {
          label: `🎭 Recita con i gesti`,
          html: `<p>Il gioco dei mimi: un compagno mima un mestiere senza parlare, gli altri chiedono in inglese.</p>
<ul>
<li><i>Do you work in a hospital?</i> — <i>Yes, I do. / No, I don't.</i></li>
<li><i>Do you wear a uniform?</i></li>
<li><i>Do you work with animals?</i></li>
<li><i>Are you a vet?</i> — <i>Yes, I am!</i> 🎉</li>
</ul>
<p>Muovere il corpo mentre si parla aiuta la memoria: si chiama metodo <b>TPR</b> (<i>Total Physical Response</i>), inventato dallo psicologo americano James Asher negli anni '60.</p>`
        },
        {
          label: `🗂️ Raggruppa`,
          html: `<p>Dividi i mestieri in base a che cosa fanno.</p>`,
          widget: `classify`,
          options: {
            groups: [`❤️ Aiutano a stare bene`, `🛡️ Ci proteggono`, `🍞 Fanno o servono il cibo`],
            items: [
              [`doctor`, 0], [`nurse`, 0], [`dentist`, 0], [`vet`, 0],
              [`firefighter`, 1], [`police officer`, 1],
              [`baker`, 2], [`chef`, 2], [`farmer`, 2], [`waiter`, 2]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: parlare dei mestieri`,
      nodes: [
        { id: `jobs`, label: `Jobs`, x: 50, y: 8, color: `#3b82f6`, html: `I mestieri: lavori che le persone fanno per vivere e per aiutare gli altri.`, why: `"Job" in inglese all'inizio (1500 circa) voleva dire "un pezzo di lavoro", un compito singolo. Oggi vuol dire "lavoro, impiego".` },
        { id: `er`, label: `Suffisso -er`, x: 15, y: 30, color: `#22c55e`, html: `teacher, baker, farmer: "chi fa".`, why: `Viene dall'antico inglese <i>-ere</i>, a sua volta preso dal latino <i>-arius</i> (lo stesso di "-aio" in italiano: fornaio, macellaio!).` },
        { id: `ist`, label: `Suffisso -ist`, x: 40, y: 30, color: `#a855f7`, html: `dentist, artist, scientist.`, why: `Viene dal greco <i>-istes</i> attraverso il latino e il francese: per questo è uguale all'italiano "-ista".` },
        { id: `article`, label: `a / an + mestiere`, x: 70, y: 30, color: `#ef4444`, html: `I'm a doctor. She's an artist.`, why: `In inglese un nome singolare "contabile" vuole sempre l'articolo. "An" era in origine l'unica forma (da "one"); davanti a consonante la n è caduta per comodità di pronuncia.` },
        { id: `q`, label: `What do you do?`, x: 22, y: 60, color: `#f59e0b`, html: `La domanda per chiedere il lavoro.`, why: `Letteralmente "che cosa fai?": si usa il present simple perché il lavoro è un'abitudine, una cosa che si fa ogni giorno.` },
        { id: `want`, label: `I want to be…`, x: 50, y: 60, color: `#ec4899`, html: `Per parlare dei sogni per il futuro.`, why: `"Be" è l'infinito di "to be": "voglio essere". In italiano diciamo "voglio fare il…", in inglese si "è" un mestiere.` },
        { id: `place`, label: `Luoghi di lavoro`, x: 80, y: 60, color: `#0ea5e9`, html: `hospital, school, farm, office…`, why: `Le preposizioni cambiano: <i>in</i> per gli spazi chiusi (in an office), <i>on</i> per le superfici aperte (on a farm), <i>at</i> per un punto o un'istituzione (at school).` },
        { id: `neutral`, label: `Parole per tutti`, x: 50, y: 88, color: `#64748b`, html: `firefighter, police officer, flight attendant.`, why: `Dagli anni '70 in poi, con sempre più donne in tutti i lavori, l'inglese ha sostituito molte parole in "-man" con forme neutre.` }
      ],
      edges: [
        [`jobs`, `er`, `si forma con`], [`jobs`, `ist`, `si forma con`], [`jobs`, `article`, `si usa con`],
        [`article`, `q`, `risposta a`], [`article`, `want`, `risposta a`], [`jobs`, `place`, `dove`], [`er`, `neutral`, `firefighter`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: domande e risposte`,
      questions: [
        { type: `mc`, q: `"What does your dad do?" vuol dire…`, options: [`Dove lavora tuo papà?`, `Che lavoro fa tuo papà?`, `Che cosa fa oggi tuo papà?`], answer: 1, explain: `What does he do? = Che lavoro fa?` },
        { type: `mc`, q: `Quale frase è corretta?`, options: [`My mum is doctor.`, `My mum is a doctor.`, `My mum is an doctor.`], answer: 1, explain: `Serve l'articolo a davanti al mestiere.` },
        { type: `text`, q: `Completa: A farmer works ___ a farm.`, answer: [`on`], explain: `Si dice on a farm.` }
      ]
    }
  ],
  glossary: [
    { t: `job`, d: `Lavoro, mestiere.` },
    { t: `What do you do?`, d: `Che lavoro fai?` },
    { t: `What do you want to be?`, d: `Che cosa vuoi fare da grande?` },
    { t: `work (verbo)`, d: `Lavorare: She works in a shop.` },
    { t: `firefighter`, d: `Vigile del fuoco.` },
    { t: `vet`, d: `Veterinario (abbreviazione di veterinarian/veterinary surgeon).` },
    { t: `hospital`, d: `Ospedale.` },
    { t: `uniform`, d: `Divisa.` },
    { t: `a / an`, d: `Articolo indeterminativo, obbligatorio davanti al mestiere al singolare.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `"Pilot" vuol dire…`, options: [`pilota`, `poliziotto`, `postino`], answer: 0, explain: `Pilot = pilota.` },
      { type: `text`, q: `Come si dice "insegnante" in inglese?`, answer: [`teacher`, `a teacher`], explain: `Insegnante = teacher.` },
      { type: `mc`, q: `Chi lavora in una "bakery"?`, options: [`a baker`, `a builder`, `a nurse`], answer: 0, explain: `Bakery = panetteria: ci lavora il baker.` },
      { type: `mc`, q: `"He's ___ engineer."`, options: [`a`, `an`, `—`], answer: 1, explain: `Engineer comincia con un suono vocalico: an engineer.` },
      { type: `tf`, q: `In inglese si può dire "She is teacher" senza articolo.`, answer: false, explain: `Serve l'articolo: She is a teacher.` },
      { type: `mc`, q: `Come si chiede "Che cosa vuoi fare da grande?"`, options: [`What do you want to be?`, `What do you do?`, `Where do you work?`], answer: 0, explain: `What do you want to be (when you grow up)?` },
      { type: `mc`, q: `Chi aiuta gli animali malati?`, options: [`a chef`, `a vet`, `a mechanic`], answer: 1, explain: `Il veterinario: vet.` },
      { type: `order`, q: `Metti in ordine le parole.`, items: [`My`, `sister`, `works`, `in`, `a`, `hospital.`], explain: `My sister works in a hospital.` },
      { type: `text`, q: `Come si dice "vigile del fuoco" in inglese (parola neutra)?`, answer: [`firefighter`, `a firefighter`, `fire fighter`], explain: `Firefighter: chi combatte il fuoco.` },
      { type: `mc`, q: `Where does a mechanic work?`, options: [`In a garage.`, `In a school.`, `On a farm.`], answer: 0, explain: `Il meccanico lavora in officina: garage.` },
      { type: `tf`, q: `"Smith", il cognome inglese più diffuso, era un mestiere.`, answer: true, explain: `Smith = fabbro.` },
      { type: `mc`, q: `"They are ___."`, options: [`a doctors`, `doctors`, `an doctors`], answer: 1, explain: `Al plurale non si mette a/an: They are doctors.` }
    ]
  }
});
