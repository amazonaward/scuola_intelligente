VOYAGER_TEXT({
  lang: 'en',
  title: 'The Voyager Journey',
  intro: `<p>In 1977 NASA launched two twin probes, <b>Voyager 1</b> and <b>Voyager 2</b>, to visit the giant planets of the Solar System. They were only supposed to last five years. Today, almost half a century later, they are still alive and travelling through space between the stars, farther away than any other object ever built by humans.</p>
<p>On the map you can see their real paths, calculated from the positions of the planets. Tap an event on the timeline and the map jumps to that day: you can follow the probes from launch all the way to today.</p>`,
  probes: {
    v1: `<p><b>Voyager 1</b> launched second (5 September 1977) but, on a faster path, soon overtook its twin. It visited Jupiter (1979) and Saturn (1980), then, after its close flyby of Titan, its course was bent out of the plane of the planets, toward the north. Since 2012 it has been in interstellar space and is the farthest human-made object: it travels at about 17 km per second (over 60,000 km/h).</p>
<p>It weighs about 800 kg, has a 3.7 m antenna and makes its power with plutonium generators.</p>`,
    v2: `<p><b>Voyager 2</b> launched first (20 August 1977) on a slower path. It is the only probe that has ever visited <b>all four</b> giant planets: Jupiter (1979), Saturn (1981), Uranus (1986) and Neptune (1989). Since 2018 it, too, has been in interstellar space, travelling at about 15 km per second.</p>
<p>It weighs about 800 kg, has a 3.7 m antenna and makes its power with plutonium generators.</p>`
  },
  events: [
    { date: '1977-08-20', probe: 'v2', icon: '🚀', title: 'Voyager 2 launches',
      html: `<p>A Titan-Centaur rocket launches Voyager 2 from Cape Canaveral, in Florida. Even though it is "number 2", it leaves first!</p>
<p>The mission is possible thanks to a rare piece of luck: about every 176 years Jupiter, Saturn, Uranus and Neptune line up in a way that lets one trip visit them one after another. Scientists called it the <b>Grand Tour</b>.</p>`,
      photo: 'voyager 2 launch' },
    { date: '1977-09-05', probe: 'v1', icon: '🚀', title: 'Voyager 1 launches',
      html: `<p>Sixteen days after its twin, Voyager 1 launches too. It follows a faster, more direct path to Jupiter and Saturn, so it will reach both planets before Voyager 2.</p>
<p>On board, as on Voyager 2, is a golden record with the sounds and pictures of Earth, meant for anyone who finds it one day.</p>`,
      photo: 'voyager 1 launch' },
    { date: '1977-09-18', probe: 'v1', icon: '🌍', title: 'The first photo of Earth and Moon together',
      html: `<p>Just after launch, Voyager 1 turns around and takes a photo with the Earth and the Moon in the same picture, from about 11 million kilometres away. It is the first time our planet and its satellite are seen together from space.</p>`,
      photo: 'voyager 1 earth moon first image' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌋', title: 'Jupiter: volcanoes on Io!',
      html: `<p>Voyager 1 passes about 280,000 km from Jupiter. A few days later, a NASA engineer, Linda Morabito, spots a cloud above the edge of the moon in a photo of Io: it is the eruption of a volcano!</p>
<p>It was the first time active volcanoes were discovered anywhere outside Earth. Io is the most volcanic moon in the Solar System: Jupiter "squeezes" it with its gravity and its inside heats up.</p>`,
      photo: 'voyager io volcano' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌀', title: 'The Great Red Spot and a hidden ring',
      html: `<p>Up close, the Great Red Spot turns out to be a gigantic storm that spins counterclockwise, wider than the Earth and watched for centuries. The photos show swirls and currents all around it.</p>
<p>Voyager 1 also discovers that Jupiter has a thin, very faint ring made of dust, impossible to see from Earth.</p>`,
      photo: 'voyager jupiter great red spot' },
    { date: '1979-07-09', probe: 'v2', planet: 'jupiter', icon: '🧊', title: 'Jupiter: the cracked crust of Europa',
      html: `<p>Voyager 2 passes about 570,000 km from Jupiter and photographs its moons. Europa looks like a smooth ball of ice, crossed by long dark lines, like cracks in an eggshell, and with very few craters.</p>
<p>Few craters mean a young surface. Under the ice there could be an ocean of liquid water: today Europa is one of the most interesting places to look for life.</p>`,
      photo: 'voyager europa jupiter' },
    { date: '1980-11-11', probe: 'v1', planet: 'saturn', icon: '🟠', title: 'Saturn: the thick atmosphere of Titan',
      html: `<p>Voyager 1 passes close to Titan, the big moon of Saturn, and finds that it has an atmosphere much denser than Earth's, made mostly of nitrogen, like ours. An orange haze hides the surface.</p>
<p>Titan is the only moon in the Solar System with an atmosphere this thick. The photos could not see the ground: it took other missions to reveal it.</p>`,
      photo: 'voyager titan atmosphere' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '🪐', title: 'Saturn: the rings are full of detail',
      html: `<p>Voyager 1 passes about 125,000 km from Saturn and sees that the rings are not a few smooth circles, but thousands of thin ringlets, like the grooves of a record. In the F ring, thin and far out, some stretches look twisted together like a braid.</p>
<p>It also discovers two small "shepherd" moons, Prometheus and Pandora, which use their gravity to keep the F ring in order, like dogs guiding a flock.</p>`,
      photo: 'voyager saturn rings' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '↗️', title: 'Voyager 1 leaves the plane of the planets',
      html: `<p>The close flyby of Titan was chosen on purpose, but it has a price: the gravity of Titan and Saturn bends Voyager 1's path to the north, out of the plane in which the planets orbit.</p>
<p>From that moment on it can no longer visit Uranus and Neptune, but its journey goes on toward the space between the stars. It was a choice: studying Titan up close was worth more than a complete Grand Tour for this probe.</p>` },
    { date: '1981-08-26', probe: 'v2', planet: 'saturn', icon: '🪐', title: 'Voyager 2 at Saturn',
      html: `<p>Voyager 2 reaches Saturn about nine months after its twin, with another view of the rings and moons. It photographs dark, changing structures inside the rings, and studies moons such as Enceladus and Tethys.</p>
<p>After the flyby the platform that holds the cameras gets stuck for a while; engineers get it moving again from Earth, and the probe can continue to Uranus thanks to the gravity boost from Saturn.</p>`,
      photo: 'voyager 2 saturn' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🔵', title: 'Uranus: ten new moons and Miranda',
      html: `<p>Voyager 2 is the first, and so far the only, probe to visit Uranus. It passes about 81,000 km from the clouds and discovers ten new small moons.</p>
<p>The moon Miranda looks like a patchwork made of pieces that do not belong together: very tall cliffs, grooves and plains, as if it had been broken apart and put back together badly. On Miranda there is a huge cliff, about 20 km high.</p>`,
      photo: 'voyager miranda' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🧲', title: 'Uranus: a crooked magnetic field and rings',
      html: `<p>Uranus is a planet "lying" on its side. Voyager 2 discovers that its magnetic field is strongly tilted, by about 60°, from the axis of rotation and does not even pass through the centre of the planet.</p>
<p>The probe also studies the rings, dark and thin, and finds new ones. The planet itself looks blue-green and almost without visible clouds.</p>`,
      photo: 'voyager uranus' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌀', title: 'Neptune: the Great Dark Spot',
      html: `<p>Voyager 2 arrives at Neptune after 12 years of travel and passes about 4,900 km from the north pole. On the blue planet it sees an oval storm as big as the Earth, the <b>Great Dark Spot</b>.</p>
<p>It also measures the fastest winds in the Solar System, about 2,000 km/h, even though Neptune is so far from the Sun and gets very little heat from it. It also discovers new moons and rings shaped like arcs.</p>`,
      photo: 'voyager neptune great dark spot' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌫️', title: 'Triton: nitrogen geysers',
      html: `<p>A few hours after Neptune, Voyager 2 skims past the moon Triton, at about 40,000 km. It is one of the coldest places ever visited: about -235 °C.</p>
<p>The photos show small dark plumes rising from the ground: they are nitrogen geysers, shooting out of the ice. Triton orbits backwards compared with Neptune: it may be an object captured from the Kuiper Belt. Voyager 2 is still the only probe to have visited Uranus and Neptune.</p>`,
      photo: 'voyager triton' },
    { date: '1990-02-14', probe: 'v1', icon: '🖼️', title: 'The family portrait',
      html: `<p>As it leaves the Solar System, Voyager 1 turns around and takes 60 photos showing six planets: Venus, Earth, Jupiter, Saturn, Uranus and Neptune. Mercury was too close to the Sun, Mars was lost in its glare, and Pluto was too small and dark.</p>
<p>It is the "family portrait" of the Solar System, seen from the outside for the first and so far only time.</p>`,
      photo: 'voyager family portrait' },
    { date: '1990-02-14', probe: 'v1', icon: '🔵', title: 'The Pale Blue Dot',
      html: `<p>In one of those photos, from about six billion kilometres away, the Earth is a barely visible speck in a ray of light. The idea of taking it came from the astronomer Carl Sagan.</p>
<p>Sagan drew a famous thought from it: all of human history, every person, every war and every joy, happened on that tiny grain. For him it was one more reason to take care of one another and of our home.</p>`,
      photo: 'pale blue dot' },
    { date: '1990-02-14', probe: 'v1', icon: '📷', title: 'The cameras are switched off',
      html: `<p>After the family portrait, Voyager 1's cameras are switched off for good. There was nothing nearby left to photograph, and turning them off saved power and memory for the instruments that measure the space around the probe.</p>
<p>Since then the Voyagers no longer send photos, but they keep measuring magnetic fields, particles and waves.</p>` },
    { date: '1998-02-17', probe: 'v1', icon: '🏁', title: 'Voyager 1 is the farthest human-made object',
      html: `<p>Voyager 1 passes Pioneer 10, a probe launched before it, at about 70 times the distance between the Earth and the Sun. From that day it is the human-made object farthest from Earth, and every day its lead grows.</p>` },
    { date: '2004-12-16', probe: 'v1', icon: '💨', title: 'Voyager 1 crosses the termination shock',
      html: `<p>At about 94 times the Earth-Sun distance, the solar wind, the stream of particles flowing out of the Sun, suddenly slows down, like water when it hits the bottom of a sink. This region is called the <b>termination shock</b>.</p>
<p>Voyager 1 is the first probe to enter it: it finds that the Sun's bubble is more squashed than expected.</p>` },
    { date: '2007-08-30', probe: 'v2', icon: '💨', title: 'Voyager 2 crosses the termination shock too',
      html: `<p>Voyager 2 crosses the same boundary, at a shorter distance from the Sun. The two measurements together show that the bubble is not symmetrical: in the south it is more "compressed" than in the north.</p>` },
    { date: '2012-08-25', probe: 'v1', icon: '🌌', title: 'Voyager 1 enters interstellar space',
      html: `<p>On 25 August 2012 Voyager 1's instruments measure a sudden change: the particles of the solar wind almost disappear, while those coming from the space between the stars increase.</p>
<p>It took scientists a few months to work it out, but it had happened: Voyager 1 had crossed the <b>heliopause</b> and had become the first human-made object in interstellar space.</p>` },
    { date: '2017-11-28', probe: 'v1', icon: '🔥', title: 'The thrusters fire again after 37 years',
      html: `<p>The little rockets used to point Voyager 1 toward the Earth were wearing out. Engineers then tried the backup ones, which had not been used since 1980, when the probe flew past Saturn.</p>
<p>After 37 years the thrusters worked on the first try, with pulses of just 10 milliseconds. The mission could be extended by a few years.</p>` },
    { date: '2018-11-05', probe: 'v2', icon: '🌌', title: 'Voyager 2 leaves the heliosphere too',
      html: `<p>Voyager 2 crosses the heliopause and reaches interstellar space. This time, unlike its twin, it still has its plasma-measuring instrument working, so scientists can see the crossing directly.</p>
<p>The two probes, heading in different directions, show that the boundary is stable and well defined.</p>` },
    { date: '2023-11-14', probe: 'v1', icon: '⚠️', title: 'Voyager 1 starts sending nonsense data',
      html: `<p>Around the middle of November 2023 Voyager 1 keeps receiving commands but the data it sends back is a jumbled string of zeros and ones. Nobody could tell how healthy the probe was.</p>
<p>The problem was in one of the on-board computers, the flight data system, and in particular in a memory chip damaged after 46 years in space.</p>` },
    { date: '2024-04-20', probe: 'v1', icon: '🛠️', title: 'The repair 24 billion kilometres away',
      html: `<p>Engineers could not fix the chip, so they moved the program into other free areas of memory, splitting it into smaller pieces. At every step they had to wait hours for the signals to go and come back.</p>
<p>In April 2024 Voyager 1 started sending useful data about its condition again, and soon after, science data from its instruments too.</p>` },
    { date: '2025-03-01', probe: 'both', icon: '🔌', title: 'Instruments are switched off to save power',
      html: `<p>The plutonium generators lose about 4 watts a year. To avoid running out of power, engineers switch off the least essential instruments and the heaters one after another.</p>
<p>A few stay on aboard each probe. If all goes well, the Voyagers will be able to keep talking until the 2030s.</p>` },
    { date: '2026-11-15', probe: 'v1', icon: '⏱️', title: 'One light-day from home',
      html: `<p>These days Voyager 1 reaches a distance of about one light-day: light, and radio signals with it, takes 24 hours to get there. A message and its reply therefore take almost two days.</p>
<p>Voyager 2 is closer still, about 20 light-hours away. The journey will go on forever, but the probe will never come back.</p>` }
  ],
  sections: [
    { icon: '📀', title: 'The Golden Record',
      html: `<p>On each Voyager there is a gold-plated copper disc, like a message in a bottle. It contains:</p>
<ul>
<li><b>greetings in 55 languages</b>, from ancient Sumerian to modern languages, plus a greeting from the UN and a message from the American president Carter;</li>
<li><b>sounds of Earth</b>: waves, wind, thunder, animals, whale song, a kiss, a child's laughter;</li>
<li><b>about 90 minutes of music</b> from all over the world, from Bach and Beethoven to traditional songs and rock;</li>
<li><b>115 images</b> encoded as signals, showing the Earth, people, homes and food.</li>
</ul>
<p>On the cover there are drawn instructions for playing the record and a map of the Sun's position, made with the frequencies of 14 <b>pulsars</b>, stars that flash with very regular rhythms. More than for aliens, it is a message for ourselves.</p>` },
    { icon: '📡', title: 'How they can still talk to us',
      html: `<p>The Voyagers do not use solar panels, because the Sun is too far away. Instead they have <b>plutonium</b> generators (RTGs) that turn the heat of slowly decaying plutonium into electricity. At the start they gave about 470 watts; today much less, and the power drops by about 4 watts a year.</p>
<p>The on-board transmitter uses only about <b>23 watts</b>, like a fridge light bulb. By the time the signal reaches Earth it is extremely weak, billions of times fainter than a digital watch. To pick it up we need the big 70-metre antennas of the <b>Deep Space Network</b>, at Goldstone (California), Madrid and Canberra, so that at least one is always pointing at the probes as the Earth turns.</p>
<p>The probes answer with a 3.7 m dish antenna, aimed exactly at the Earth. The transmission speed is about 160 bits per second: thousands of times slower than an old phone-line connection.</p>` },
    { icon: '🎯', title: 'Gravity slingshots',
      html: `<p>A rocket alone was not enough to reach Neptune. The Voyagers used the <b>gravity of the planets</b>: when a probe passes close to Jupiter, it is pulled in, curves around and leaves with more speed, "stealing" a little of the planet's motion, and the planet is so heavy it does not notice.</p>
<p>Each planet was a slingshot toward the next one. That is why the Grand Tour was possible with a probe of about 800 kg and little fuel: each one used Jupiter, Saturn and so on to change course and speed while using almost nothing.</p>` },
    { icon: '🫧', title: 'What the heliosphere is',
      html: `<p>The Sun constantly gives off the <b>solar wind</b>, a stream of charged particles flowing at hundreds of km per second that inflates a gigantic bubble around the Solar System: the <b>heliosphere</b>.</p>
<p>Farther out the wind slows down at the termination shock, then piles up in the outer heliosphere, and finally meets the gas that lies between the stars. The edge, where the solar wind no longer pushes, is called the <b>heliopause</b>. Beyond this limit is interstellar space.</p>
<p>Careful: the Voyagers have left the heliosphere, but not the Solar System! The Oort cloud, an enormous shell of comets, begins about 300 years from them and will end tens of thousands of years from now.</p>` },
    { icon: '📏', title: 'How far away they are',
      html: `<p>Voyager 1 is more than 25 billion kilometres from the Earth, about 170 times the Earth-Sun distance. If the Earth were one step from the Sun, Voyager 1 would be almost 170 steps away.</p>
<p>Light takes about 8 minutes to get from the Sun, almost 5 and a half hours to Neptune and about a day to Voyager 1. An airliner, at 900 km/h, would take over 3,000 years.</p>
<p>And yet, in interstellar space these distances are small: the nearest star, Proxima Centauri, is 4.2 light-years away, over 1,500 times farther than Voyager 1 is today.</p>` },
    { icon: '♾️', title: 'And then?',
      html: `<p>Sooner or later the Voyagers will stop talking, when the power is no longer enough. But they will keep travelling in silence for billions of years, with nothing to stop them.</p>
<p>In about 40,000 years Voyager 1 will pass about 1.6 light-years from the star <b>Gliese 445</b>, while Voyager 2 will pass about 1.7 light-years from <b>Ross 248</b>. These are not close encounters: they are just the nearest points of their long journey. With the golden record on board, they will remain a testimony of who we are.</p>` }
  ],
  quiz: [
    { type: 'mc', q: 'Why was the "Grand Tour" possible in 1977?', options: ['Because rockets were much more powerful', 'Because the four giant planets were lined up in a favourable way, which happens about every 176 years', 'Because the planets were very close to the Earth'], answer: 1, explain: 'Jupiter, Saturn, Uranus and Neptune lined up so that they could be visited one after another, using the gravity of each to reach the next.' },
    { type: 'tf', q: 'Voyager 2 launched before Voyager 1.', answer: true, explain: 'Voyager 2 launched on 20 August 1977, Voyager 1 on 5 September. But Voyager 1 took a faster path and reached Jupiter and Saturn first.' },
    { type: 'mc', q: 'What discovery did Voyager 1 make on the moon Io?', options: ['It has an ocean of water under the ice', 'It has active volcanoes', 'It has an atmosphere like the Earth'], answer: 1, explain: 'It was the first discovery of active volcanoes anywhere outside Earth.' },
    { type: 'mc', q: 'Which moon of Jupiter showed a cracked ice surface with few craters?', options: ['Europa', 'Io', 'Triton'], answer: 0, explain: 'Europa, photographed by Voyager 2 in 1979, could have an ocean under its ice.' },
    { type: 'tf', q: 'Voyager 1 also visited Uranus and Neptune.', answer: false, explain: 'After Titan, its path was bent out of the plane of the planets. Uranus and Neptune have been visited only by Voyager 2.' },
    { type: 'num', q: 'About how fast are the winds on Neptune discovered by Voyager 2? (km/h)', answer: 2000, tol: 300, unit: 'km/h', explain: 'The winds of Neptune are the fastest in the Solar System, about 2,000 km/h.' },
    { type: 'mc', q: 'What does the "Pale Blue Dot" photo show?', options: ['The Earth seen from about six billion kilometres away', 'Neptune seen up close', 'The Sun from the surface of Jupiter'], answer: 0, explain: 'The Earth is a tiny speck in a ray of light. Carl Sagan drew a famous thought from it about how small we are and how valuable our home is.' },
    { type: 'order', q: 'Put these events in order', items: ['Launch of the Voyagers (1977)', 'Voyager 2 at Uranus (1986)', 'Pale Blue Dot (1990)', 'Voyager 1 in interstellar space (2012)'], explain: 'From the launch (1977) to Uranus (1986), then the photo of the Earth (1990), and finally leaving the heliosphere (2012).' },
    { type: 'mc', q: 'How do the Voyagers make power?', options: ['With giant solar panels', 'With plutonium generators', 'With rechargeable batteries'], answer: 1, explain: 'Plutonium generators (RTGs) turn heat into electricity. The Sun is too far away for solar panels.' },
    { type: 'mc', q: 'What is the network of big antennas that communicates with the Voyagers called?', options: ['Deep Space Network', 'Hubble Network', 'Starlink'], answer: 0, explain: 'The Deep Space Network has 70-metre antennas at Goldstone, Madrid and Canberra.' },
    { type: 'tf', q: 'The Golden Record contains greetings in 55 languages.', answer: true, explain: 'It also contains sounds of Earth, about 90 minutes of music and 115 images.' },
    { type: 'num', q: 'About how many years will it take for Voyager 1 to pass near the star Gliese 445? (years)', answer: 40000, tol: 5000, unit: 'years', explain: 'In about 40,000 years it will pass about 1.6 light-years from the star.' }
  ]
});
