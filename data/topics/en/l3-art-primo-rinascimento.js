TOPIC('en', {
  id: `l3-art-primo-rinascimento`,
  title: `The early Renaissance in Florence`,
  intro: `Florence, the early decades of the 15th century. A city of bankers and merchants, ruled in practice by the Medici family, becomes the laboratory of a revolution: artists rediscover classical antiquity, study nature and invent a mathematical method for representing space, <b>perspective</b>. An architect, <b>Brunelleschi</b>, covers the cathedral with a gigantic dome; a sculptor, <b>Donatello</b>, brings the nude and the equestrian monument back to life; a painter who died at twenty-six, <b>Masaccio</b>, paints figures with real weight in a real space. The way of seeing that we call "modern" is born. 🏛️🎨`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Why Florence?`,
      html: `<p>We owe the word <b>Renaissance</b> (<i>Rinascimento</i>, "rebirth") to <b>Giorgio Vasari</b>, who in his <i>Lives of the Artists</i> (1550) speaks of a "rebirth" of the arts after centuries of "barbarous style": Giotto had begun the climb back, and the artists of the 15th century completed it by looking to the ancients. Today we know that the Middle Ages were not "dark", but the idea of a <b>rebirth of antiquity</b> really is the heart of this period.</p>
<p>Why Florence? There are many intertwined reasons:</p>
<ul>
<li><b>Wealth</b>: banking and the wool and silk industries make Florence one of the richest cities in Europe; the gold florin is an international currency;</li>
<li><b>Patrons</b>: the guilds (the <i>Arti</i>) fund public works, and from 1434 the <b>Medici</b> family, with <b>Cosimo the Elder</b>, shapes the city's taste and protects artists and scholars;</li>
<li><b>Humanism</b>: intellectuals such as Petrarch, Salutati and Bruni rediscover Latin and Greek texts and put <b>human beings</b> and their ability to know and to build at the centre;</li>
<li><b>Civic competition</b>: cities challenge each other with monuments, and in Florence public competitions (such as the one in 1401 for the Baptistery doors) bring talent to light.</li>
</ul>`
    },
    {
      type: `text`, title: `2. Brunelleschi and the dome of Santa Maria del Fiore`,
      html: `<p><b>Filippo Brunelleschi</b> (Florence, 1377 - 1446), who trained as a goldsmith, lost the 1401 competition for the Baptistery doors to <b>Lorenzo Ghiberti</b> and turned to architecture, studying the ancient buildings of Rome. His masterpiece is the <b>dome</b> of the cathedral of <b>Santa Maria del Fiore</b>, the Duomo of Florence.</p>
<p>The problem: the cathedral, begun in 1296 to a design by Arnolfo di Cambio, had a huge octagonal opening (about <b>45 m</b> across) still waiting to be covered. For such a large dome it was unthinkable to build a gigantic wooden <b>centering</b> (temporary framework): there was not enough timber, nor any structure able to support it. Brunelleschi won the <b>1418</b> competition with a daring solution; work began in 1420 and the dome was closed in 1436 (consecrated by Pope Eugene IV on 25 March 1436).</p>
<p>The key ideas:</p>
<ul>
<li><b>double shell</b>: a thicker inner dome and a lighter outer one, with a gap between them in which the stairs climb; this lightens the structure and protects it from damp;</li>
<li><b>pointed profile</b>: the pointed curve pushes outwards less than a hemisphere;</li>
<li><b>herringbone brickwork</b>: bricks laid so as to form horizontal rings that support themselves as the dome grows, reducing the need for scaffolding;</li>
<li><b>chains</b> of stone and wood that encircle the dome and counteract its tendency to spread;</li>
<li><b>building-site machines</b>, such as a large reversible hoist driven by oxen, to lift materials.</li>
</ul>
<p>The <b>lantern</b> that crowns it, designed by Brunelleschi, was built after his death and completed around 1461.</p>`
    },
    {
      type: `svg`, title: `The double shell`,
      caption: `Schematic section: a thick inner shell, a thinner outer shell and, between them, the gap with the stairs. At the top, the lantern.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fff7ed"/><path d="M130 260 L130 200 Q130 60 300 40 Q470 60 470 200 L470 260" fill="none" stroke="#9a3412" stroke-width="8"/><path d="M165 260 L165 205 Q165 100 300 82 Q435 100 435 205 L435 260" fill="none" stroke="#c2410c" stroke-width="8"/><rect x="288" y="12" width="24" height="30" fill="#fed7aa" stroke="#9a3412" stroke-width="3"/><polygon points="300,0 292,12 308,12" fill="#9a3412"/><line x1="130" y1="262" x2="470" y2="262" stroke="#44403c" stroke-width="5"/><path d="M148 235 L156 220 L148 205 L156 190" fill="none" stroke="#1d4ed8" stroke-width="3"/><text x="300" y="150" font-size="16" fill="#7c2d12" text-anchor="middle">gap (stairs)</text><text x="300" y="285" font-size="14" fill="#44403c" text-anchor="middle">diameter about 45 m</text><text x="40" y="120" font-size="14" fill="#9a3412">outer shell</text><text x="190" y="135" font-size="14" fill="#c2410c">inner shell</text><text x="330" y="22" font-size="14" fill="#7c2d12">lantern</text></svg>`
    },
    {
      type: `example`, title: `Example: how do you build an arch without scaffolding?`,
      html: `<p>Try to imagine an igloo: the blocks of ice are laid in horizontal rings, each narrower than the one before, and each ring, once closed, stands up on its own. Brunelleschi's dome works on the same principle: each ring of bricks, once closed, is stable and acts as a base for the next, without the whole thing having to be held up by a wooden framework. Brunelleschi did not discover a new principle (Roman domes, such as the Pantheon's, already knew it) but he adapted it, with calculation and inventiveness, to a scale never attempted in the Middle Ages. That is why the dome is a <b>symbol</b> of the Renaissance: antiquity, rethought through reason and technology.</p>`
    },
    {
      type: `decision`, title: `1418: how do we cover the cathedral?`,
      html: `<p>The Opera del Duomo (the cathedral works board) of Florence announces a competition. The octagonal drum is ready, but the opening is enormous and nobody knows how to close it. You are on the panel of judges.</p>`,
      question: `Which design do you choose?`,
      options: [
        { label: `A dome built on a huge wooden centering`, outcome: `The traditional method: safe on paper, but it would need gigantic quantities of timber and a structure that would itself be unstable. Too expensive and risky.` },
        { label: `A double-shell dome that supports itself as it rises`, outcome: `This is Brunelleschi's proposal: little timber, self-supporting rings of brick, chains to counteract the thrust. Daring, but calculated.` },
        { label: `Give up the dome and cover it with a flat roof`, outcome: `It avoids the risk, but would leave the cathedral unfinished and disappoint the city's pride.` }
      ],
      answer: 1,
      explain: `The Opera del Duomo chose Brunelleschi's design (with Ghiberti appointed alongside him as master builder). The work took sixteen years, and the dome, closed in 1436, is still the largest masonry dome ever built.`
    },
    {
      type: `text`, title: `3. Perspective`,
      html: `<p>The invention that changes painting is <b>linear</b> (or "central") <b>perspective</b>, worked out by Brunelleschi around <b>1415-1420</b>. Tradition tells that he painted the Baptistery, as seen from the door of the cathedral, on a small panel, drilled a hole in the painting and had people look at it reflected in a mirror: the painted image matched reality. The rule: parallel lines moving away from the viewer <b>converge</b> at a point, the <b>vanishing point</b>, which lies on the horizon line; objects become smaller in proportion to their distance.</p>
<p>The theory was written down by <b>Leon Battista Alberti</b> in his treatise <i>De pictura</i> (On Painting; Latin, 1435; Italian version, 1436), which defines the picture as an <b>"open window"</b> onto the world. With perspective, painting becomes a science based on geometry: figures are arranged in a measurable, coherent space. (In the last lesson of the technical drawing course you will see how to construct it.)</p>
<p>Architecture, too, is based on <b>proportions</b> and repeated modules: in the <b>Ospedale degli Innocenti</b> (Foundling Hospital, begun in 1419), the portico has round arches on Corinthian columns, and each bay is a perfect cube, repeated like a unit of measurement. Order, clarity, harmony: the language of the ancients, reinterpreted.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: Brunelleschi and perspective`,
      questions: [
        { type: `mc`, q: `What is a feature of the dome of Santa Maria del Fiore?`, options: [`A double shell`, `A single wooden shell`, `A circular plan`], answer: 0, explain: `An inner and an outer shell with a gap between them.` },
        { type: `tf`, q: `In perspective, the vanishing point lies on the horizon line.`, answer: true, explain: `Lines perpendicular to the picture plane converge at a point on the horizon.` },
        { type: `mc`, q: `Who wrote the first treatise on painting in perspective (De pictura)?`, options: [`Leon Battista Alberti`, `Giorgio Vasari`, `Cosimo de' Medici`], answer: 0, explain: `Alberti, in 1435-1436.` }
      ]
    },
    {
      type: `example`, title: `Example: reading perspective in an image`,
      html: `<p>Look at a photo of a street with tram tracks: the two rails, parallel in reality, seem to meet in the distance, at the height of your eyes. That point is the vanishing point and the line it lies on is the horizon. In Masaccio's Trinity the coffers of the barrel vault converge towards a point roughly at the eye level of someone standing in front of the fresco: that is why the painted chapel really seems to hollow out the wall.</p>`
    },
    {
      type: `text`, title: `4. Donatello: sculpture is reborn`,
      html: `<p><b>Donatello</b> (Donato di Niccolò di Betto Bardi, Florence 1386 - 1466) is the greatest sculptor of the century. He studies the ancients but surpasses them in expressiveness.</p>
<ul>
<li><b>Saint George</b> (about 1415-1417, for a niche on Orsanmichele): a young knight standing firmly on his legs, with a proud gaze. On the base, the relief of <b>Saint George and the Princess</b> is carved in <b>flattened relief</b> (<i>stiacciato</i>): a depth of just a few millimetres that creates space through perspective;</li>
<li>The bronze <b>David</b> (around 1440, though the date is debated): the first <b>free-standing nude</b> since antiquity. A boy in a hat, one foot on Goliath's severed head, in a pose that is relaxed and sensual at the same time;</li>
<li><b>Equestrian monument to Gattamelata</b> (Padua, about 1447-1453): the mercenary commander Erasmo da Narni, on horseback, in bronze; the first great equestrian monument since the age of Marcus Aurelius;</li>
<li><b>Penitent Magdalene</b> (wood, late work): a body wasted by fasting, intensely expressive.</li>
</ul>`
    },
    {
      type: `text`, title: `5. Masaccio: painting with weight and space`,
      html: `<p><b>Masaccio</b> (Tommaso di ser Giovanni, San Giovanni Valdarno 1401 - Rome 1428) died at just twenty-six, but he changed painting. He takes volume from Giotto and combines it with Brunelleschi's perspective and Donatello's sculpture. His figures have weight, cast <b>consistent shadows</b> from a single light source, and stand in a constructed space.</p>
<ul>
<li><b>Trinity</b> (Santa Maria Novella, Florence, about 1426-1428): a fresco that seems to open a chapel in the wall, with a coffered barrel vault in rigorous perspective. Above, God the Father holds up the cross; below, the patrons kneel outside the chapel; and at the bottom there is a sarcophagus with a skeleton and the inscription "I was once what you are, and what I am you also will be";</li>
<li><b>Brancacci Chapel</b> (Santa Maria del Carmine, Florence, about 1424-1427, with Masolino): the <b>Expulsion from the Garden of Eden</b>, with Adam and Eve naked, their bodies bent by shame and grief, and the <b>Tribute Money</b>, where the apostles are arranged like a group of real people, in natural light.</li>
</ul>`
    },
    {
      type: `widget`, title: `Timeline of the early Renaissance`,
      widget: `timeline`,
      options: { events: [ { year: 1401, label: `Competition for the Baptistery doors`, icon: `🚪` }, { year: 1418, label: `Competition for the dome`, icon: `⛪` }, { year: 1419, label: `Ospedale degli Innocenti begun`, icon: `🏛️` }, { year: 1426, label: `Masaccio paints the Trinity (c. 1426-28)`, icon: `🎨` }, { year: 1434, label: `Cosimo de' Medici comes to power`, icon: `🏦` }, { year: 1435, label: `Alberti writes De pictura`, icon: `📖` }, { year: 1436, label: `Dome closed and consecrated`, icon: `⛪` }, { year: 1453, label: `Gattamelata (c. 1447-53)`, icon: `🐎` } ], unit: `years` },
      caption: `All dates are AD.`
    },
    {
      type: `curiosity`, title: `Did you know… a pair of doors was an Olympics of art?`,
      html: `<p>In 1401 the Arte di Calimala (the cloth merchants' guild) announced a competition for the second bronze door of the Baptistery: entrants had to make a panel showing the <b>Sacrifice of Isaac</b>. Seven artists took part, and the contest came down to Ghiberti and Brunelleschi; <b>Ghiberti</b> won (both panels can be seen today in the Bargello museum). Ghiberti then worked on the third door, the <b>Gates of Paradise</b> (1425-1452): according to Vasari, Michelangelo said it was so beautiful that it was worthy of standing at the gates of Paradise.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… Brunelleschi's method is still debated?`,
      html: `<p>Brunelleschi left no treatise or detailed drawings of his method, and scholars still argue about exactly how the bricks were laid and which machines he used. We know that he also invented tools for the building site, such as a large reversible hoist driven by oxen. Such a daring dome has needed constant attention: it is a monument that engineers still measure and monitor today.</p>`
    },
    {
      type: `remember`, title: `Key points`,
      html: `<ul><li><b>Florence</b>: wealth, the Medici (Cosimo from 1434), humanism; "Renaissance" is Vasari's term.</li><li><b>Brunelleschi</b>: the dome (competition 1418, closed 1436), perspective, Ospedale degli Innocenti (1419).</li><li><b>Donatello</b>: Saint George, bronze David, Gattamelata; <b>Masaccio</b>: Trinity, Brancacci Chapel. <b>Alberti</b>: De pictura (1435).</li></ul>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Perspective and the Renaissance can also be understood through analogies and hands-on activities.`,
      tabs: [
        {
          label: `🪟 The picture as a window`,
          html: `<p>Alberti tells us to imagine the picture as an <b>open window</b>. Look down a straight corridor with floor tiles: the lines of their edges seem to get closer and closer, until they meet at a point on the horizon. To draw it on the glass you would just trace what you see: a picture in perspective is exactly that tracing, done with geometry instead of a pencil on glass.</p>`
        },
        {
          label: `🧩 Who did what?`,
          html: `<p>Sort the works into the three arts.</p>`,
          widget: `classify`,
          options: { groups: [`Architecture`, `Sculpture`, `Painting`], items: [[`Dome of the Duomo`, 0], [`Ospedale degli Innocenti`, 0], [`Bronze David`, 1], [`Gattamelata`, 1], [`Saint George`, 1], [`Trinity`, 2], [`Expulsion from Eden`, 2]] }
        },
        {
          label: `🔗 Match`,
          html: `<p>Link each artist to his work.</p>`,
          widget: `match`,
          options: { pairs: [[`Brunelleschi`, `Dome of Santa Maria del Fiore`], [`Donatello`, `Gattamelata`], [`Masaccio`, `Trinity`], [`Ghiberti`, `Gates of Paradise`], [`Alberti`, `De pictura`]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: the early Renaissance`,
      nodes: [
        { id: `fir`, label: `Florence 1400`, x: 50, y: 6, color: `#64748b`, html: `A city of bankers, merchants and guilds.`, why: `Wealth and civic pride lead to funding great works and competing in contests.` },
        { id: `ant`, label: `Antiquity and humanism`, x: 16, y: 30, color: `#f59e0b`, html: `Rediscovery of Rome and Greece.`, why: `Humanists put human beings at the centre; artists study ruins and statues to rediscover rules and proportions.` },
        { id: `pro`, label: `Perspective`, x: 50, y: 32, color: `#0ea5e9`, html: `Mathematical representation of space.`, why: `Brunelleschi derives it from geometry; Alberti sets out the theory. Space becomes measurable.` },
        { id: `nat`, label: `Study of nature`, x: 84, y: 30, color: `#22c55e`, html: `Anatomy, light, shadows.`, why: `To make a body come alive you have to observe it: artists begin to research anatomy.` },
        { id: `bru`, label: `Brunelleschi`, x: 14, y: 62, color: `#ef4444`, html: `Dome, Innocenti, perspective.`, why: `He combines calculation, technology and the classical language.` },
        { id: `don`, label: `Donatello`, x: 50, y: 66, color: `#a855f7`, html: `Saint George, David, Gattamelata.`, why: `He brings back the nude and the equestrian monument after a thousand years.` },
        { id: `mas`, label: `Masaccio`, x: 84, y: 62, color: `#14b8a6`, html: `Trinity, Brancacci Chapel.`, why: `He applies perspective and volume to painting: figures with weight.` },
        { id: `leg`, label: `Legacy`, x: 50, y: 92, color: `#3b82f6`, html: `Leonardo, Michelangelo, Raphael.`, why: `The Florentine 15th century paves the way for the High Renaissance.` }
      ],
      edges: [[`fir`, `ant`, `culture`], [`fir`, `pro`, `research`], [`fir`, `nat`, `observation`], [`ant`, `bru`, `model`], [`pro`, `bru`, `invention`], [`pro`, `mas`, `applies`], [`nat`, `don`, `expression`], [`bru`, `leg`, `legacy`], [`don`, `leg`, `legacy`], [`mas`, `leg`, `legacy`]]
    },
    {
      type: `quiz`, title: `Mini-quiz: sculpture and painting`,
      questions: [
        { type: `mc`, q: `Which work by Donatello is the first free-standing nude since antiquity?`, options: [`The bronze David`, `Gattamelata`, `Penitent Magdalene`], answer: 0, explain: `The bronze David, around 1440.` },
        { type: `mc`, q: `Where is Masaccio's Trinity fresco?`, options: [`Santa Maria Novella, Florence`, `Scrovegni Chapel, Padua`, `Siena Cathedral`], answer: 0, explain: `In the church of Santa Maria Novella.` },
        { type: `tf`, q: `Masaccio lived to old age and painted for forty years.`, answer: false, explain: `He died in Rome in 1428, aged twenty-six.` }
      ]
    }
  ],
  glossary: [
    { t: `Renaissance`, d: `The period of the 15th-16th centuries, marked by the rediscovery of antiquity and the central role of human beings.` },
    { t: `Humanism`, d: `A cultural movement that studies the classics and puts human beings at the centre.` },
    { t: `Linear perspective`, d: `A geometric method for representing space on a flat surface.` },
    { t: `Vanishing point`, d: `The point on the horizon where parallel lines moving away from the viewer converge.` },
    { t: `Centering`, d: `A temporary wooden framework that supports an arch or vault during construction.` },
    { t: `Double shell`, d: `A dome made of two shells, an inner one and an outer one.` },
    { t: `Lantern`, d: `A small structure with windows that crowns a dome.` },
    { t: `Flattened relief`, d: `A very shallow relief that suggests depth through perspective (stiacciato).` },
    { t: `Free-standing (in the round)`, d: `Sculpture that can be seen from all sides, not attached to a wall.` },
    { t: `Medici`, d: `A family of bankers who ruled Florence in practice from 1434.` },
    { t: `Trinity`, d: `Christian subject of God the Father, the Son and the Holy Spirit.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Which architect designed the dome of Santa Maria del Fiore?`, options: [`Brunelleschi`, `Alberti`, `Arnolfo di Cambio`], answer: 0, explain: `Brunelleschi, winner of the 1418 competition.` },
      { type: `mc`, q: `What does Alberti's phrase "the picture as an open window" mean?`, options: [`The painting is a view onto the world constructed with perspective`, `The picture must contain windows`, `The picture opens like a shutter`], answer: 0, explain: `The painted surface works like a window onto space.` },
      { type: `tf`, q: `The 1401 competition for the Baptistery doors was won by Brunelleschi.`, answer: false, explain: `It was won by Lorenzo Ghiberti.` },
      { type: `num`, q: `In what year was the dome of Florence Cathedral closed?`, answer: 1436, tol: 0, explain: `In 1436; it was consecrated on 25 March by Eugene IV.` },
      { type: `text`, q: `What is the name of the very shallow relief used by Donatello?`, answer: [`stiacciato`, `flattened relief`, `schiacciato`, `rilievo schiacciato`], explain: `Flattened relief, or stiacciato.` },
      { type: `order`, q: `Put in chronological order.`, items: [`Competition for the Baptistery doors`, `Competition for the dome`, `Dome closed`, `Gattamelata (begun)`], explain: `1401; 1418; 1436; about 1447.` },
      { type: `mc`, q: `Which work by Masaccio shows a chapel in perspective with a skeleton on the sarcophagus?`, options: [`Trinity`, `Tribute Money`, `Expulsion from Eden`], answer: 0, explain: `The Trinity in Santa Maria Novella.` },
      { type: `mc`, q: `Which founder of the Medici dynasty ruled Florence from 1434?`, options: [`Cosimo the Elder`, `Lorenzo the Magnificent`, `Piero the Gouty`], answer: 0, explain: `Cosimo the Elder (Lorenzo was his grandson).` },
      { type: `tf`, q: `Donatello's Gattamelata is the first great bronze equestrian monument since antiquity.`, answer: true, explain: `It is in Padua, made around 1447-1453.` },
      { type: `mc`, q: `Why was Brunelleschi's dome built without a large wooden centering?`, options: [`Self-supporting rings of herringbone brickwork`, `Because it is made of wood`, `Because it is very small`], answer: 0, explain: `Each closed ring is stable and supports the next.` }
    ]
  }
});
