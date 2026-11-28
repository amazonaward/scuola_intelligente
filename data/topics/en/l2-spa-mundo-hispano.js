TOPIC('en', {
  id: "l2-spa-mundo-hispano",
  title: "The Hispanic world",
  intro: "Spanish is the mother tongue of almost <b>500 million people</b> and an official language in about <b>twenty countries</b> on three continents: from Spain to Mexico, from Argentina to Equatorial Guinea. Behind the same language you will find very different landscapes, food, music and histories: <i>¡Bienvenidos al mundo hispano!</i> In this lesson you travel through countries, capitals, varieties of the language, festivals, writers and artists, to understand <b>why there isn't just one Spanish</b>. 🌎",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Where Spanish is spoken",
      html: `<p>Spanish (or <i>castellano</i>) is an official language in:</p>
<ul>
<li><b>Europe</b>: <b>España</b> (capital <i>Madrid</i>);</li>
<li><b>North and Central America</b>: <b>México</b> (<i>Ciudad de México</i>), <b>Guatemala</b> (<i>Ciudad de Guatemala</i>), <b>Honduras</b> (<i>Tegucigalpa</i>), <b>El Salvador</b> (<i>San Salvador</i>), <b>Nicaragua</b> (<i>Managua</i>), <b>Costa Rica</b> (<i>San José</i>), <b>Panamá</b> (<i>Ciudad de Panamá</i>);</li>
<li><b>The Caribbean</b>: <b>Cuba</b> (<i>La Habana</i>), <b>República Dominicana</b> (<i>Santo Domingo</i>) and <b>Puerto Rico</b> (San Juan, together with English);</li>
<li><b>South America</b>: <b>Colombia</b> (<i>Bogotá</i>), <b>Venezuela</b> (<i>Caracas</i>), <b>Ecuador</b> (<i>Quito</i>), <b>Perú</b> (<i>Lima</i>), <b>Bolivia</b> (<i>Sucre</i> is the constitutional capital, <i>La Paz</i> the seat of government), <b>Paraguay</b> (<i>Asunción</i>), <b>Chile</b> (<i>Santiago</i>), <b>Argentina</b> (<i>Buenos Aires</i>), <b>Uruguay</b> (<i>Montevideo</i>);</li>
<li><b>Africa</b>: <b>Guinea Ecuatorial</b> (<i>Malabo</i>).</li>
</ul>
<p>But Spanish is also spoken in the <b>United States</b>, where over 60 million people are of Hispanic origin (California, Texas, Florida, New York). Many Hispanics live in communities shaped by history: Florida has a large Cuban community, Texas and California a Mexican one.</p>
<p>⚠️ <b>Brazil is not part of the Hispanic world</b>: Portuguese is spoken there. <b>Belize, Guyana, Suriname and Haiti</b> don't have Spanish as an official language either.</p>`
    },
    {
      type: "widget",
      title: "Play: match each country to its capital",
      widget: "match",
      options: { pairs: [["España", "Madrid"], ["México", "Ciudad de México"], ["Argentina", "Buenos Aires"], ["Colombia", "Bogotá"], ["Perú", "Lima"], ["Chile", "Santiago"], ["Cuba", "La Habana"], ["Uruguay", "Montevideo"]] },
      caption: "Eight countries, eight capitals: how many can you remember?"
    },
    {
      type: "3d",
      title: "The capitals on the globe",
      scene: "globe",
      options: {
        points: [
          { lat: 40.4, lon: -3.7, label: "Madrid", color: "#dc2626" },
          { lat: 19.4, lon: -99.1, label: "Ciudad de México", color: "#16a34a" },
          { lat: 4.7, lon: -74.1, label: "Bogotá", color: "#f59e0b" },
          { lat: -12.0, lon: -77.0, label: "Lima", color: "#a855f7" },
          { lat: -33.4, lon: -70.7, label: "Santiago", color: "#2563eb" },
          { lat: -34.6, lon: -58.4, label: "Buenos Aires", color: "#0ea5e9" },
          { lat: 23.1, lon: -82.4, label: "La Habana", color: "#14b8a6" },
          { lat: 3.75, lon: 8.78, label: "Malabo", color: "#64748b" }
        ],
        routes: [ { points: [0, 1, 2], color: "#f97316" } ]
      },
      caption: "Spin the globe: Madrid, in Europe, is the starting point; the orange route recalls the Atlantic voyages to the Americas."
    },
    {
      type: "text",
      title: "2. One language, many varieties",
      html: `<p>The Spanish spoken in Madrid is not identical to that of Buenos Aires or Mexico City, but speakers understand each other perfectly. The differences concern <b>pronunciation, grammar and vocabulary</b>.</p>
<p><b>Pronunciation</b></p>
<ul>
<li><b>Distinción</b> (central and northern Spain): <i>c</i> and <i>z</i> are pronounced like English <i>th</i> in "think" («cielo, zapato»), <i>s</i> like English <i>s</i>.</li>
<li><b>Seseo</b> (Andalusia, the Canary Islands and almost all of Latin America): <i>c</i> and <i>z</i> are pronounced <i>s</i>.</li>
<li><b>Rioplatense yeísmo</b> (Argentina and Uruguay): <i>ll</i> and <i>y</i> sound like English "sh" or the "s" in "measure" (<i>calle → «cashe»</i>).</li>
</ul>
<p><b>Grammar</b></p>
<ul>
<li><b>Vosotros</b> is used only in Spain; in Latin America people say <b>ustedes</b> even to friends: <i>¿Cómo están ustedes?</i></li>
<li><b>Voseo</b>: in Argentina, Uruguay, Paraguay and parts of Central America people use <b>vos</b> instead of <i>tú</i>: <i>vos tenés, vos sos</i> (for «tú tienes, tú eres»).</li>
<li>The <b>pretérito perfecto</b> (<i>he comido</i>) is typical of Spain; in Latin America the <i>indefinido</i> (<i>comí</i>) is often preferred.</li>
</ul>
<p><b>Vocabulary</b></p>
<table>
<tr><th>English</th><th>Spain</th><th>Latin America</th></tr>
<tr><td>computer</td><td>ordenador</td><td>computadora</td></tr>
<tr><td>mobile phone</td><td>móvil</td><td>celular</td></tr>
<tr><td>car</td><td>coche</td><td>carro / auto</td></tr>
<tr><td>potato</td><td>patata</td><td>papa</td></tr>
<tr><td>juice</td><td>zumo</td><td>jugo</td></tr>
<tr><td>bus</td><td>autobús</td><td>colectivo / micro / guagua</td></tr>
<tr><td>boy, kid</td><td>chaval / chico</td><td>chavo (México), pibe (Arg.), chamo (Ven.)</td></tr>
</table>
<p>⚠️ Be careful with the verb <i>coger</i> ("to take"): in Spain it is completely normal (<i>coger el autobús</i>), but in Mexico and Argentina it can have a vulgar meaning. In Latin America people prefer <i>tomar</i> or <i>agarrar</i>.</p>`
    },
    {
      type: "svg",
      title: "How many people speak Spanish?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="28" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Population of the largest Hispanic countries</text>
<text x="40" y="70" font-size="15" fill="#1e293b">México</text>
<rect x="150" y="52" width="364" height="26" rx="5" fill="#16a34a"/>
<text x="522" y="71" font-size="14" fill="#14532d">≈ 130 million</text>
<text x="40" y="115" font-size="15" fill="#1e293b">Colombia</text>
<rect x="150" y="97" width="146" height="26" rx="5" fill="#f59e0b"/>
<text x="304" y="116" font-size="14" fill="#78350f">≈ 52 million</text>
<text x="40" y="160" font-size="15" fill="#1e293b">España</text>
<rect x="150" y="142" width="134" height="26" rx="5" fill="#dc2626"/>
<text x="292" y="161" font-size="14" fill="#7f1d1d">≈ 48 million</text>
<text x="40" y="205" font-size="15" fill="#1e293b">Argentina</text>
<rect x="150" y="187" width="129" height="26" rx="5" fill="#0ea5e9"/>
<text x="287" y="206" font-size="14" fill="#0c4a6e">≈ 46 million</text>
<text x="40" y="250" font-size="15" fill="#1e293b">Perú</text>
<rect x="150" y="232" width="95" height="26" rx="5" fill="#a855f7"/>
<text x="253" y="251" font-size="14" fill="#581c87">≈ 34 million</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#475569">Rounded figures: Mexico has almost three times as many people as Spain.</text>
</svg>`,
      caption: "Most Spanish speakers live in the Americas: Spain is only the third most populous Hispanic country."
    },
    {
      type: "quiz",
      title: "Mini-quiz: geography and language",
      questions: [
        { type: "mc", q: "What is the capital of Argentina?", options: ["Santiago", "Buenos Aires", "Lima"], answer: 1, explain: "Buenos Aires, on the Río de la Plata." },
        { type: "tf", q: "The official language of Brazil is Spanish.", answer: false, explain: "Brazil is Portuguese-speaking." },
        { type: "mc", q: "«Vosotros» is used mainly:", options: ["in Mexico", "in Spain", "in Argentina"], answer: 1, explain: "In Latin America people use ustedes." },
        { type: "mc", q: "In Latin America, the Spanish «móvil» is often:", options: ["el celular", "el coche", "el zumo"], answer: 0, explain: "Celular = mobile phone." }
      ]
    },
    {
      type: "text",
      title: "3. Spain: cultures and festivals",
      html: `<p><b>Spain</b> is a multilingual country: besides Castilian, <b>Catalan</b>, <b>Galician</b> and <b>Basque</b> (<i>euskera</i>) are co-official languages (in their own regions). Barcelona, Valencia, Seville and Madrid are the big cities.</p>
<ul>
<li><b>Madrid</b>: the capital, in the centre of the country; the Prado Museum and the Plaza Mayor.</li>
<li><b>Barcelona</b>: the architect <b>Antoni Gaudí</b> designed the <i>Sagrada Família</i> (construction began in 1882), <i>Park Güell</i> and <i>Casa Batlló</i>.</li>
<li><b>Granada</b>: the <b>Alhambra</b>, a palace-fortress from the Arab period (Nasrid dynasty).</li>
<li><b>Sevilla</b>: <i>Semana Santa</i> (Holy Week) and flamenco.</li>
</ul>
<p><b>Famous festivals</b>: <i>San Fermín</i> in Pamplona (6-14 July, with the <i>encierro</i>, the running of the bulls), <i>Las Fallas</i> in Valencia (March, with papier-mâché sculptures that are burnt), <i>La Tomatina</i> in Buñol (last Wednesday of August), the <i>Feria de Abril</i> in Seville.</p>
<p><b>Food</b>: <i>paella</i> (Valencia), <i>tortilla española</i> (potato and egg omelette), <i>jamón ibérico</i>, <i>churros con chocolate</i> and <i>tapas</i> (small bites served with a drink). Mealtimes are later than in most of Europe: lunch around 2-3 pm, dinner after 9 pm.</p>
<p><b>Music and art</b>: <b>flamenco</b> (song, guitar and dance from Andalusia, UNESCO heritage since 2010), painters such as <b>Velázquez</b>, <b>Goya</b>, <b>Picasso</b>, <b>Dalí</b> and <b>Miró</b>.</p>`
    },
    {
      type: "example",
      title: "Example: a conversation between Madrid and Bogotá",
      html: `<p>🎧 <b>Nuria</b> (Madrid) and <b>Camilo</b> (Bogotá) are doing a language exchange.</p>
<p><b>Nuria</b>: ¡Hola, Camilo! ¿Cómo <b>estáis</b> por allá? ¿Qué tal el tiempo?<br>
<b>Camilo</b>: Aquí en Bogotá <b>llueve</b> casi todos los días, pero <b>estamos</b> bien. ¿Cómo les va a <b>ustedes</b>?<br>
<b>Nuria</b>: Nosotros muy bien, estoy en el <b>coche</b>, voy al trabajo. ¿Qué haces tú?<br>
<b>Camilo</b>: Yo estoy en la oficina, con mi <b>computadora</b>. Más tarde tomo un <b>jugo</b> de lulo y como una arepa. ¿Y tú?<br>
<b>Nuria</b>: Yo voy a comer una <b>tortilla</b> con un <b>zumo</b> de naranja. ¡Qué diferente!<br>
<b>Camilo</b>: Sí, pero nos entendemos perfectamente. ¡Dos mundos, una lengua!</p>`
    },
    {
      type: "text",
      title: "4. Latin America: countries and cultures",
      html: `<p>Latin America is a mosaic of landscapes and of Indigenous, European and African cultures.</p>
<ul>
<li><b>México</b>: the pyramids of <b>Teotihuacán</b> (an ancient city older than the Aztecs) and <b>Chichén Itzá</b> (Maya civilisation), the <b>Día de Muertos</b> (Day of the Dead, 1-2 November, UNESCO heritage since 2008), food such as <i>tacos, mole, guacamole</i>, the painters <b>Frida Kahlo</b> and <b>Diego Rivera</b>. The capital stands on the site of Tenochtitlan, the ancient Aztec capital.</li>
<li><b>Cuba</b> and <b>República Dominicana</b>: <i>son, salsa, bachata, merengue</i>, Caribbean rhythms.</li>
<li><b>Colombia</b>: coffee, the colonial city of <b>Cartagena de Indias</b>, the writer <b>Gabriel García Márquez</b>.</li>
<li><b>Perú</b>: <b>Machu Picchu</b>, an Inca city built in the 15th century in the Andes near Cusco; <i>ceviche</i>.</li>
<li><b>Bolivia</b>: the <i>Salar de Uyuni</i>, the largest salt flat in the world.</li>
<li><b>Ecuador</b>: the <b>Galápagos Islands</b>, where Darwin observed the finches in 1835.</li>
<li><b>Chile</b>: the <b>Atacama</b> desert, <b>Easter Island</b> (Rapa Nui) with its <i>moai</i>, Patagonia, the poet <b>Pablo Neruda</b>.</li>
<li><b>Argentina</b>: <b>tango</b> (born on the Río de la Plata, UNESCO heritage since 2009 together with Uruguay), grilled meat (<i>asado</i>), the <b>Iguazú Falls</b> on the border with Brazil, Patagonia.</li>
</ul>
<p><b>Indigenous languages</b>: in many countries Spanish lives alongside Quechua (Peru, Bolivia, Ecuador), Aymara, <b>Guaraní</b> (co-official in Paraguay), <b>Náhuatl</b>, Maya and Mapudungun. Many words entered Spanish and then English: <i>chocolate</i> and <i>tomate</i> (from Náhuatl), <i>huracán</i> and <i>canoa</i> (from Taíno: "hurricane", "canoe"), <i>pampa</i> (from Quechua).</p>`
    },
    {
      type: "decision",
      title: "Which Spanish should you learn?",
      html: `<p>You have decided to spend a year abroad studying Spanish. Madrid, Mexico City or Buenos Aires: where would you go?</p>`,
      question: "Which do you choose for your language exchange year?",
      options: [
        { label: "Madrid: in Europe, the variety most often studied at school", outcome: "Advantage: short flights within Europe and strong cultural ties; you would use vosotros and the perfecto. Disadvantage: higher cost of living and less exposure to Latin America." },
        { label: "Mexico City: the country with the most native speakers", outcome: "Advantage: huge numbers of people to talk to, a lively culture, very close to the United States; you would use ustedes. Disadvantage: distance and differences in vocabulary." },
        { label: "Buenos Aires: strong Italian influence", outcome: "Advantage: many Italians emigrated here and the rioplatense accent sounds a bit like Italian; you would use voseo. Disadvantage: verb forms (vos tenés) and pronunciation different from those taught at school." }
      ],
      answer: 0,
      explain: "There is no \"right\" choice: all the varieties are correct Spanish. Anyone who learns one variety understands the others without difficulty, just as an English speaker understands both British and American accents. For school study, the reference standard is that of the Language Academies (RAE and ASALE), valid throughout the Hispanic world."
    },
    {
      type: "alternatives",
      title: "Other ways to remember the Hispanic world",
      intro: "Three strategies to find your way around countries and regions.",
      tabs: [
        {
          label: "🗺️ By area",
          html: `<p>Divide it into <b>four areas</b>: <b>1) Spain</b>, <b>2) Mexico and Central America</b> (Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica, Panamá), <b>3) the Caribbean</b> (Cuba, República Dominicana, Puerto Rico), <b>4) South America</b> (Colombia, Venezuela, Ecuador, Perú, Bolivia, Paraguay, Chile, Argentina, Uruguay). For each area learn three capitals and one symbol.</p>`
        },
        {
          label: "🍽️ By food",
          html: `<p>Link each country to a <b>dish</b>: España → paella; México → tacos; Perú → ceviche; Argentina → asado; Colombia → arepa; Cuba → ropa vieja; Chile → empanada. Food is an easy way to remember where each country is.</p>`
        },
        {
          label: "🎶 By music",
          html: `<p>Link each country to a <b>rhythm</b>: España → flamenco; Argentina → tango; Cuba → son and salsa; República Dominicana → bachata and merengue; Colombia → cumbia and vallenato; México → mariachi. Listen to one song from each country and try to recognise the instruments and accents.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Castilian and its academies",
      html: `<p>The <b>Real Academia Española (RAE)</b> was founded in Madrid in <b>1713</b> with the motto «<i>Limpia, fija y da esplendor</i>» ("It cleans, fixes and gives splendour"). Since 1951 it has worked with all the <b>Academias de la Lengua</b> of the Hispanic countries in the <b>ASALE</b>, to give the language shared rules from Madrid to Manila. The <b>Instituto Cervantes</b>, founded in <b>1991</b>, promotes the teaching of Spanish around the world (it has centres in many cities, for example London, Rome and Milan). The most prestigious prize for Spanish-language literature is named after the great author of «Don Quijote»: the <b>Premio Cervantes</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Spanish words in English",
      html: `<p>Many English words come from Spanish, often in turn from Indigenous languages: <i>siesta, tango, sombrero, hurricane</i> (from Taíno <i>huracán</i>), <i>canoe, tobacco, cannibal</i> (from the Caribbean), <i>chocolate</i> (of Náhuatl origin) and <i>pampas</i> (from Quechua). <i>Tomato</i> also comes from Náhuatl <i>tomatl</i>, whereas Italian created its own word, «pomodoro» ("golden apple"). When Christopher Columbus landed in the Caribbean on <b>12 October 1492</b>, a great exchange of words, plants and animals between the Americas and Europe began.</p>`
    },
    {
      type: "example",
      title: "Example: a trip in three stages",
      html: `<p>✈️ <b>Giulia</b> is planning a trip: «Primero <b>iré</b> a Madrid, porque <b>quiero</b> ver el Museo del Prado. Después <b>volaré</b> a Ciudad de México para visitar las pirámides de Teotihuacán y probar los tacos. Por último, <b>viajaré</b> a Perú: <b>subiré</b> a Machu Picchu y <b>comeré</b> ceviche. En total <b>serán</b> tres semanas.» Notice how each stage corresponds to a different country and variety of Spanish: in Madrid she will hear <i>vosotros</i>, in Mexico <i>ustedes</i>, in Peru an Andean accent.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the Hispanic world",
      nodes: [
        { id: "lengua", label: "One language, many varieties", x: 50, y: 10, color: "#2563eb", html: "Castellano, 500 million native speakers.", why: "Castilian was born in the Kingdom of Castile in the Middle Ages and spread to the Americas after 1492 with colonisation. That's why it has a common standard, but local accents and vocabulary." },
        { id: "espana", label: "España", x: 18, y: 42, color: "#dc2626", html: "Madrid, Barcelona, Sevilla; vosotros and the perfecto.", why: "The Iberian Peninsula was Roman, Visigothic and Arab (from 711 to 1492): this explains the language (hundreds of Arabic words such as «aceite, azúcar»), monuments like the Alhambra and the coexistence of four languages." },
        { id: "mexico", label: "México", x: 50, y: 42, color: "#16a34a", html: "Ciudad de México; ustedes; Día de Muertos.", why: "Mexico is heir to the Maya and Aztec civilisations: its Spanish has many Náhuatl words (chocolate, tomate, aguacate). The Día de Muertos blends Indigenous rituals and Catholic tradition." },
        { id: "andes", label: "Andes and Southern Cone", x: 82, y: 42, color: "#a855f7", html: "Perú, Bolivia, Chile, Argentina, Uruguay.", why: "Here Indigenous languages (Quechua, Aymara, Mapudungun) coexist with the effects of large European migrations, especially Italian ones to Argentina and Uruguay: voseo and the rioplatense accent sound similar to Italian." },
        { id: "caribe", label: "Caribe", x: 34, y: 80, color: "#14b8a6", html: "Cuba, R. Dominicana, Puerto Rico.", why: "Its history is linked to the Atlantic slave trade and the sugar economy: hence the meeting of African rhythms and Spanish melodies (son, salsa, merengue, bachata)." },
        { id: "hist", label: "1492 and after", x: 66, y: 80, color: "#f97316", html: "Columbus, conquest, independence.", why: "The conquest began on 12 October 1492. Independence came in the early 19th century (Mexico started its war in 1810; Argentina declared independence in 1816), led by figures such as Simón Bolívar and José de San Martín." }
      ],
      edges: [
        ["lengua", "espana", "origin"],
        ["lengua", "mexico", "spread"],
        ["lengua", "andes", "spread"],
        ["espana", "hist", "conquest"],
        ["hist", "caribe", "first landings"],
        ["mexico", "hist", "Tenochtitlan"]
      ]
    },
    {
      type: "widget",
      title: "Flashcards: travel vocabulary",
      widget: "flashcards",
      options: { cards: [
        { front: "¿De dónde eres?", back: "Where are you from?" },
        { front: "Soy de Italia.", back: "I'm from Italy." },
        { front: "el pueblo", back: "the village, the small town" },
        { front: "la ciudad", back: "the city" },
        { front: "la frontera", back: "the border" },
        { front: "el idioma / la lengua", back: "the language" },
        { front: "el acento", back: "the accent (pronunciation)" },
        { front: "la bandera", back: "the flag" }
      ] },
      caption: "Useful phrases and words for presenting a country."
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Spanish is official in about 20 countries: Spain, Latin America (except Brazil and Haiti) and Equatorial Guinea.</li>
<li>The country with the most native speakers is Mexico.</li>
<li><b>Vosotros</b> in Spain, <b>ustedes</b> in Latin America; <b>voseo</b> in Argentina and nearby countries.</li>
<li>There are differences in pronunciation (seseo, distinción) and vocabulary (ordenador / computadora).</li>
<li>All varieties are correct Spanish: the RAE and ASALE set a common standard.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: culture and history",
      questions: [
        { type: "mc", q: "Where is Machu Picchu?", options: ["Perú", "México", "Chile"], answer: 0, explain: "Machu Picchu is an Inca city in Peru, near Cusco." },
        { type: "mc", q: "The «Día de Muertos» is celebrated mainly in:", options: ["Argentina", "México", "España"], answer: 1, explain: "It is one of Mexico's most famous festivals (1-2 November)." },
        { type: "tf", q: "Flamenco is a musical genre from Andalusia.", answer: true, explain: "It was born in Andalusia and has been UNESCO heritage since 2010." },
        { type: "text", q: "What is the name of the architect of the Sagrada Família? Write the surname.", answer: ["gaudí", "gaudi"], explain: "Antoni Gaudí." }
      ]
    }
  ],
  glossary: [
    { t: "Castellano", d: "Another name for Spanish, from the region of Castilla (Castile)." },
    { t: "Hispanohablante", d: "A person who speaks Spanish." },
    { t: "Ustedes", d: "The polite plural, and the normal plural \"you\" in Latin America (instead of vosotros)." },
    { t: "Voseo", d: "Using «vos» instead of «tú» in Argentina, Uruguay and other areas." },
    { t: "Seseo", d: "Pronouncing c/z as s, typical of Latin America and parts of Andalusia." },
    { t: "RAE", d: "Real Academia Española, founded in Madrid in 1713." },
    { t: "Instituto Cervantes", d: "An institution founded in 1991 to promote the Spanish language and culture." },
    { t: "Lengua indígena", d: "A language of the original peoples of the Americas: Quechua, Guaraní, Náhuatl, Maya." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which country has the largest number of native Spanish speakers?", options: ["España", "México", "Argentina"], answer: 1, explain: "Mexico has over 120 million inhabitants." },
      { type: "mc", q: "The capital of Peru is:", options: ["Lima", "Quito", "La Paz"], answer: 0, explain: "Lima." },
      { type: "tf", q: "Spanish is spoken in Brazil.", answer: false, explain: "Portuguese is spoken there." },
      { type: "text", q: "What is the use of «vos» instead of «tú» called?", answer: ["voseo"], explain: "It is called voseo." },
      { type: "mc", q: "The word «computadora» is used mainly:", options: ["in Latin America", "in Spain", "only in Equatorial Guinea"], answer: 0, explain: "In Spain people say ordenador." },
      { type: "order", q: "Put in order from north to south (roughly): Mexico, Colombia, Peru, Chile.", items: ["México", "Colombia", "Perú", "Chile"], explain: "Mexico is in the north, then Colombia, Peru and Chile in the far south." },
      { type: "mc", q: "Who designed the Sagrada Família in Barcelona?", options: ["Picasso", "Gaudí", "Dalí"], answer: 1, explain: "Antoni Gaudí." },
      { type: "tf", q: "Guaraní is a co-official language of Paraguay.", answer: true, explain: "Together with Spanish." },
      { type: "mc", q: "In what year was the Real Academia Española founded?", options: ["1713", "1492", "1991"], answer: 0, explain: "1713 (1991 is the Instituto Cervantes)." },
      { type: "text", q: "How do you say «juice» in Latin America?", answer: ["jugo"], explain: "In Spain people say zumo." }
    ]
  }
});
