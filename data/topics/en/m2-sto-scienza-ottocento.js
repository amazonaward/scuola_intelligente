TOPIC('en', {
  id: `m2-sto-scienza-ottocento`,
  title: `The scientific discoveries of the 19th century`,
  intro: `The 19th century is the century in which science changes everyone's life: from <b>Volta's pile</b> comes the age of <b>electricity</b>; <b>Darwin</b> explains how living things evolve; <b>Pasteur</b> and <b>Koch</b> discover the microbes that cause diseases; Mendeleev puts the chemical elements in order. Many things we take for granted today, such as washing our hands or switching on a light, come from here.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Why the 19th century?`,
      html: `<p>In the 19th century science becomes a <b>profession</b>: laboratories appear in universities, along with scientific journals and international congresses. Galileo's <b>experimental method</b> (observe, make a hypothesis, test it with experiments, draw conclusions) is applied to new fields: electricity, chemistry, biology, medicine.</p>
<p>Instruments improve (more powerful microscopes, thermometers, precise balances) and industry asks for useful inventions. Science, technology and industry push one another forward: this is one of the roots of the <b>Second Industrial Revolution</b>.</p>`
    },
    {
      type: `text`,
      title: `2. Electricity: from a frog to a light bulb`,
      html: `<ol>
<li><b>Galvani</b> (Bologna, 1780s-90s) notices that frogs' legs twitch when touched by two different metals: he thinks of an "animal electricity".</li>
<li><b>Alessandro Volta</b> (Pavia) understands that electricity comes from the contact between <b>two metals</b> separated by a liquid. In <b>1800</b> he announces the <b>pile</b>: alternating discs of zinc and copper, separated by cloth soaked in salt water. It is the first generator of <b>direct current</b>. The unit of measurement, the <b>volt</b>, is named after him.</li>
<li>In <b>1820</b> the Dane <b>Ørsted</b> discovers that an electric current makes a compass needle move: electricity and magnetism are connected.</li>
<li>In <b>1831</b> the Englishman <b>Michael Faraday</b> discovers <b>electromagnetic induction</b>: moving a magnet inside a coil of wire produces current. This is the principle of the <b>dynamo</b> and of today's power-station generators.</li>
<li>In <b>1865</b> the Scot <b>James Clerk Maxwell</b> sums everything up in four equations and predicts <b>electromagnetic waves</b>: light is one of them! <b>Hertz</b> produces them in the laboratory in 1887; Marconi will use them for radio.</li>
</ol>
<p>Applications: Morse's <b>telegraph</b> (1844), the telephone (1876), the light bulb (1879), the electric motor.</p>`
    },
    {
      type: `widget`,
      title: `How Volta's pile is built`,
      widget: `labelDiagram`,
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<rect x="230" y="40" width="140" height="18" fill="#b45309"/>
<rect x="230" y="58" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="66" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="84" width="140" height="18" fill="#b45309"/>
<rect x="230" y="102" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="110" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="128" width="140" height="18" fill="#b45309"/>
<rect x="230" y="146" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="154" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="172" width="140" height="18" fill="#b45309"/>
<rect x="230" y="190" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="198" width="140" height="18" fill="#9ca3af"/>
<rect x="210" y="216" width="180" height="20" fill="#78350f"/>
<path d="M370 49 C470 49 470 120 500 120" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M370 207 C470 207 470 160 500 160" stroke="#1d4ed8" stroke-width="5" fill="none"/>
<circle cx="510" cy="140" r="24" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="300" y="280" font-size="16" text-anchor="middle">copper, cloth with salt water, zinc… repeated</text>
</svg>`,
        spots: [
          { x: 300, y: 49, label: `Copper disc` },
          { x: 300, y: 62, label: `Cloth soaked in salt water` },
          { x: 300, y: 75, label: `Zinc disc` },
          { x: 300, y: 226, label: `Wooden base` },
          { x: 450, y: 70, label: `Conducting wire` },
          { x: 510, y: 140, label: `Light bulb (today)` }
        ]
      },
      caption: `Each copper-cloth-zinc "pair" gives a small voltage; stacking many of them adds the voltages together. In Volta's day the light bulb did not exist yet: people felt the shock or saw sparks.`
    },
    {
      type: `quiz`,
      title: `Mini-quiz: electricity`,
      questions: [
        { type: `mc`, q: `What did Alessandro Volta announce in 1800?`, options: [`The light bulb`, `The pile`, `The telegraph`], answer: 1, explain: `The pile, the first generator of direct current.` },
        { type: `text`, q: `Which English scientist discovered electromagnetic induction in 1831?`, answer: [`faraday`, `michael faraday`], explain: `Michael Faraday: a moving magnet inside a coil produces current.` },
        { type: `tf`, q: `According to Maxwell, light is an electromagnetic wave.`, answer: true, explain: `His equations (1865) show that light, radio waves and X-rays are of the same nature.` }
      ]
    },
    {
      type: `text`,
      title: `3. Darwin and evolution`,
      html: `<p>In <b>1831</b> the young English naturalist <b>Charles Darwin</b> sets off on the ship <b>Beagle</b> on a voyage around the world that lasts five years. In <b>1835</b>, on the <b>Galápagos</b> islands (Pacific Ocean), he observes that finches from different islands have different beaks, suited to the food of each island.</p>
<p>After more than twenty years of study he publishes <b>On the Origin of Species</b> (<b>1859</b>). His theory, <b>evolution by natural selection</b>, can be summed up in four steps:</p>
<ol>
<li><b>Variation</b>: the individuals of a species are all a little different from one another.</li>
<li><b>Heredity</b>: many characteristics pass from parents to children.</li>
<li><b>Struggle for survival</b>: more individuals are born than can survive.</li>
<li><b>Selection</b>: those with characteristics better suited to the environment survive and reproduce more. Over very many generations the species changes.</li>
</ol>
<p><b>Alfred Russel Wallace</b> also arrived at the same idea, independently: the two presented their theories together in 1858. The theory caused a scandal, because it included human beings too: Darwin held that humans and the great apes have <b>common ancestors</b> (not that humans "descend from the monkey").</p>
<p>Darwin did not know <i>how</i> characteristics are inherited. Without his knowing, the monk <b>Gregor Mendel</b> had discovered it: by crossing thousands of pea plants in Brno, in <b>1865</b> he found the laws of heredity, the basis of <b>genetics</b>. His work was rediscovered only in 1900.</p>`
    },
    {
      type: `svg`,
      title: `The Galápagos finches`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfdf5"/>
<text x="300" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#065f46">Different beaks for different foods</text>
<ellipse cx="110" cy="140" rx="55" ry="40" fill="#a16207"/>
<circle cx="150" cy="110" r="25" fill="#a16207"/>
<circle cx="157" cy="104" r="4" fill="#111827"/>
<polygon points="172,100 205,110 172,122" fill="#1f2937"/>
<text x="110" y="215" font-size="15" text-anchor="middle" font-weight="bold">thick beak</text>
<text x="110" y="237" font-size="14" text-anchor="middle">cracks hard seeds</text>
<ellipse cx="300" cy="140" rx="55" ry="40" fill="#78716c"/>
<circle cx="340" cy="110" r="25" fill="#78716c"/>
<circle cx="347" cy="104" r="4" fill="#111827"/>
<polygon points="362,106 410,112 362,116" fill="#1f2937"/>
<text x="300" y="215" font-size="15" text-anchor="middle" font-weight="bold">thin beak</text>
<text x="300" y="237" font-size="14" text-anchor="middle">catches insects</text>
<ellipse cx="490" cy="140" rx="55" ry="40" fill="#57534e"/>
<circle cx="530" cy="110" r="25" fill="#57534e"/>
<circle cx="537" cy="104" r="4" fill="#111827"/>
<polygon points="552,104 590,118 552,118" fill="#1f2937"/>
<text x="490" y="215" font-size="15" text-anchor="middle" font-weight="bold">long beak</text>
<text x="490" y="237" font-size="14" text-anchor="middle">cactus flowers</text>
<text x="300" y="280" font-size="15" text-anchor="middle" fill="#065f46">One common ancestor, different adaptations on different islands</text>
</svg>`,
      caption: `A simplified drawing: more than a dozen species of finches live on the Galápagos, descended from an ancestor that arrived from the mainland.`
    },
    {
      type: `text`,
      title: `4. The revolution in medicine`,
      html: `<p>At the start of the 19th century doctors did not know that many diseases are caused by <b>microorganisms</b>. People blamed "miasmas", bad air. Operations were done without anaesthetic and without washing hands. Here is how everything changed:</p>
<ul>
<li><b>1796</b> – <b>Edward Jenner</b> creates the first <b>vaccine</b>, against smallpox, using cowpox (hence the word "vaccine", from Latin <i>vacca</i>, cow).</li>
<li><b>1846</b> – In Boston a patient put to sleep with <b>ether</b> is operated on in public for the first time: <b>anaesthesia</b> is born.</li>
<li><b>1847</b> – In Vienna <b>Ignaz Semmelweis</b> orders doctors to wash their hands with a chlorine solution: deaths from fever among women in childbirth plummet.</li>
<li><b>1854</b> – In London <b>John Snow</b> shows with a map that cholera spreads through the water of a polluted pump. In the same year in Florence <b>Filippo Pacini</b> observes the cholera bacterium under the microscope.</li>
<li><b>1860s</b> – <b>Louis Pasteur</b> shows that microbes do not appear "out of nothing" and that they cause fermentation and disease (<b>germ theory</b>). He invents <b>pasteurisation</b>: heating a liquid to kill microbes. In <b>1885</b> he saves a boy bitten by a rabid dog with his vaccine.</li>
<li><b>1867</b> – <b>Joseph Lister</b> uses carbolic acid to disinfect wounds and instruments: <b>antisepsis</b> is born.</li>
<li><b>1882</b> – <b>Robert Koch</b> discovers the bacterium of <b>tuberculosis</b>; 24 March is still World TB Day today.</li>
<li><b>1895</b> – <b>Wilhelm Röntgen</b> discovers <b>X-rays</b>: for the first time you can see inside the body without cutting it open.</li>
</ul>`
    },
    {
      type: `text`,
      title: `5. Chemistry and the atom`,
      html: `<p>In <b>1808</b> John <b>Dalton</b> proposes that matter is made of <b>atoms</b>, different for each element. In <b>1869</b> the Russian <b>Dmitri Mendeleev</b> arranges the 63 elements then known according to mass and properties: the <b>periodic table</b> is born. Mendeleev leaves <b>empty boxes</b> and predicts the properties of the missing elements: gallium (discovered in 1875), scandium (1879) and germanium (1886) confirm his predictions!</p>
<p>At the end of the century people find out that the atom is not indivisible: <b>Becquerel</b> discovers <b>radioactivity</b> (1896), <b>Marie and Pierre Curie</b> discover polonium and radium (1898), <b>J. J. Thomson</b> discovers the <b>electron</b> (1897). Marie Curie will be the first person to win two Nobel Prizes (physics 1903, chemistry 1911).</p>`
    },
    {
      type: `widget`,
      title: `Mendeleev's periodic table, today`,
      widget: `periodicTable`,
      options: {},
      caption: `Touch the elements: notice how those in the same column have similar properties. This is exactly the "periodicity" that Mendeleev noticed in 1869.`
    },
    {
      type: `3d`,
      title: `Inside the atom`,
      scene: `atom`,
      options: { elements: [`H`, `He`, `Li`, `C`, `O`, `Na`] },
      caption: `The orbit model (Bohr's) dates from 1913, but it grows out of the discoveries of the late 19th century: the electron (1897) and radioactivity (1896).`
    },
    {
      type: `widget`,
      title: `Who discovered what?`,
      widget: `match`,
      options: {
        pairs: [
          [`Alessandro Volta`, `The electric pile`],
          [`Michael Faraday`, `Electromagnetic induction`],
          [`Charles Darwin`, `Evolution by natural selection`],
          [`Gregor Mendel`, `Laws of heredity`],
          [`Louis Pasteur`, `Pasteurisation and the rabies vaccine`],
          [`Robert Koch`, `The tuberculosis bacterium`],
          [`Dmitri Mendeleev`, `The periodic table`],
          [`Wilhelm Röntgen`, `X-rays`]
        ]
      },
      caption: `Eight scientists, eight discoveries that we still use every day.`
    },
    {
      type: `example`,
      title: `Practical example: 19th-century science in your fridge`,
      html: `<p>Take a bottle of milk: it says <b>"pasteurised"</b>. This means it has been heated (about 72 °C for 15 seconds) to kill dangerous bacteria, without boiling it. It is the method that <b>Pasteur</b> invented in 1864 for wine and beer, which kept going off.</p>
<p>Now look at a wall socket: the voltage is <b>230 volts</b> (a unit that bears Volta's name) and it is produced by generators that work thanks to <b>Faraday</b>'s induction. The light in the fridge that comes on? It comes from an idea of <b>Edison</b>, today turned into an LED.</p>`
    },
    {
      type: `example`,
      title: `Practical example: do as John Snow did`,
      html: `<p>In 1854 in London, within a few days, hundreds of people died of cholera in the Soho district. John Snow marked on a map every house with a death: the dots clustered around the <b>Broad Street pump</b>. He had the pump handle removed and the epidemic, already declining, died out.</p>
<p>Try it yourself: if lots of people in your class have a stomach ache, what would you write down? Who ate what, where, when… This is the method of <b>epidemiology</b>: collect data, put it on a map or in a table, look for the common factor.</p>`
    },
    {
      type: `curiosity`,
      title: `Did you know… the first X-ray picture is of a hand with a ring?`,
      html: `<p>On 22 December 1895 Röntgen photographed his wife Anna Bertha's hand with X-rays: you could see the bones and her wedding ring. She, seeing her own skeleton, is said to have exclaimed: <i>"I have seen my death!"</i>. Röntgen called the rays "X" because he did not know what they were: in mathematics X is the unknown. He won the first Nobel Prize in Physics (1901) and refused to patent the discovery, so that it would belong to everyone.</p>`
    },
    {
      type: `curiosity`,
      title: `Did you know… Semmelweis was not believed?`,
      html: `<p>Despite the results, many doctors were offended at the idea that they themselves were carrying the disease on their own hands. Semmelweis lost his post in Vienna and died in 1865, before the discoveries of Pasteur and Lister proved him right. Today the WHO celebrates World Hand Hygiene Day every year on 5 May.</p>`
    },
    {
      type: `widget`,
      title: `A century of discoveries`,
      widget: `timeline`,
      options: {
        unit: `years`,
        events: [
          { year: 1796, label: `Jenner: smallpox vaccine`, icon: `💉` },
          { year: 1800, label: `Volta: the pile`, icon: `🔋` },
          { year: 1831, label: `Faraday: induction; Darwin sets off on the Beagle`, icon: `🧲` },
          { year: 1846, label: `First anaesthesia with ether`, icon: `😴` },
          { year: 1847, label: `Semmelweis: washing hands`, icon: `🧼` },
          { year: 1859, label: `Darwin: On the Origin of Species`, icon: `🐢` },
          { year: 1865, label: `Mendel, Maxwell`, icon: `🌱` },
          { year: 1869, label: `Mendeleev: periodic table`, icon: `🧪` },
          { year: 1882, label: `Koch: tuberculosis bacillus`, icon: `🔬` },
          { year: 1885, label: `Pasteur: rabies vaccine`, icon: `🐕` },
          { year: 1895, label: `Röntgen: X-rays`, icon: `🩻` },
          { year: 1898, label: `Curie: polonium and radium`, icon: `☢️` }
        ]
      },
      caption: `In 1800 an operation was a nightmare; by 1900 there were anaesthesia, disinfection and X-rays.`
    },
    {
      type: `3d`,
      title: `3D space-time map of the discoveries`,
      scene: `spacetime`,
      caption: `Discoveries are concentrated in Europe, but science travels: from the Galápagos to Boston. Touch an event: the arrows show which discoveries made the others possible.`,
      options: {
        lat: [-5, 60],
        lon: [-95, 35],
        years: [1790, 1900],
        places: [
          { lat: 51.5, lon: -0.12, label: `London` },
          { lat: 48.86, lon: 2.35, label: `Paris` },
          { lat: 52.52, lon: 13.4, label: `Berlin` },
          { lat: 48.21, lon: 16.37, label: `Vienna` },
          { lat: 45.19, lon: 9.16, label: `Pavia` },
          { lat: -0.7, lon: -90.5, label: `Galápagos` }
        ],
        events: [
          { id: `jenner`, lat: 51.69, lon: -2.46, year: 1796, label: `First vaccine`, html: `At Berkeley, in England, Edward Jenner inoculates a boy with cowpox, then shows that he does not catch human smallpox. In 1980 smallpox was declared eradicated.` },
          { id: `volta`, lat: 45.19, lon: 9.16, year: 1800, label: `Volta's pile`, html: `Alessandro Volta, a professor at Pavia, announces the pile: for the first time there is a continuous electric current to study.` },
          { id: `faraday`, lat: 51.51, lon: -0.14, year: 1831, label: `Electromagnetic induction`, html: `At the Royal Institution in London Faraday produces current by moving a magnet in a coil. Without the pile he could not have studied currents.`, causes: [`volta`] },
          { id: `galapagos`, lat: -0.7, lon: -90.5, year: 1835, label: `Darwin in the Galápagos`, html: `Darwin collects finches, tortoises and iguanas, noticing that they vary from island to island. The doubt that species are unchangeable begins here.` },
          { id: `etere`, lat: 42.36, lon: -71.06, year: 1846, label: `Anaesthesia`, html: `At Massachusetts General Hospital in Boston the dentist William Morton puts a patient to sleep with ether during an operation on the neck. Within a few months anaesthesia spreads around the world.` },
          { id: `semmelweis`, lat: 48.22, lon: 16.35, year: 1847, label: `Washing hands`, html: `Semmelweis notices that women in childbirth examined by doctors coming from the autopsy room died much more often. With hand washing the deaths plummet.` },
          { id: `snow`, lat: 51.51, lon: -0.14, year: 1854, label: `The cholera map`, html: `John Snow links cholera deaths to a polluted pump: modern epidemiology is born. In the same year Pacini observes the bacterium in Florence.` },
          { id: `origine`, lat: 51.5, lon: -0.12, year: 1859, label: `On the Origin of Species`, html: `Darwin publishes his book in London: the first print run sells out in a few days. Biology will never be the same.`, causes: [`galapagos`] },
          { id: `pasteur`, lat: 48.86, lon: 2.35, year: 1864, label: `Germ theory`, html: `With his "swan-neck" flasks Pasteur shows that microbes come from the air and do not appear out of nothing. He invents pasteurisation.` },
          { id: `mendel`, lat: 49.2, lon: 16.61, year: 1865, label: `Mendel's laws`, html: `In the monastery at Brno Mendel presents the results from about 28,000 pea plants: characteristics are inherited as separate "units". Nobody understands until 1900.` },
          { id: `maxwell`, lat: 52.2, lon: 0.12, year: 1865, label: `Maxwell's equations`, html: `Maxwell unifies electricity, magnetism and light. He predicts electromagnetic waves, discovered by Hertz in 1887.`, causes: [`faraday`] },
          { id: `lister`, lat: 55.86, lon: -4.25, year: 1867, label: `Antisepsis`, html: `In Glasgow the surgeon Joseph Lister, reading Pasteur, disinfects wounds and instruments with carbolic acid: infections after operations fall dramatically.`, causes: [`pasteur`, `semmelweis`] },
          { id: `mendeleev`, lat: 59.94, lon: 30.31, year: 1869, label: `Periodic table`, html: `In Saint Petersburg Mendeleev arranges the elements in a table and predicts the missing ones.` },
          { id: `koch`, lat: 52.52, lon: 13.4, year: 1882, label: `TB bacillus`, html: `In Berlin Robert Koch identifies the tuberculosis bacterium, then one of the leading causes of death in Europe.`, causes: [`pasteur`] },
          { id: `rabbia`, lat: 48.85, lon: 2.34, year: 1885, label: `Rabies vaccine`, html: `Pasteur vaccinates Joseph Meister, aged 9, bitten by a rabid dog: the boy survives.`, causes: [`pasteur`, `jenner`] },
          { id: `raggix`, lat: 49.79, lon: 9.95, year: 1895, label: `X-rays`, html: `At Würzburg Röntgen discovers invisible rays that pass through flesh but not bone.`, causes: [`maxwell`] },
          { id: `curie`, lat: 48.84, lon: 2.34, year: 1898, label: `Radioactivity`, html: `In Paris Marie and Pierre Curie, studying the rays discovered by Becquerel, isolate two new elements: polonium and radium.`, causes: [`raggix`, `mendeleev`] }
        ]
      }
    },
    {
      type: `decision`,
      title: `Vienna, 1847: you are Dr Semmelweis`,
      html: `<p>In your hospital there are two maternity wards. In the first, where doctors and students work, many more women die of "childbed fever" (as many as 1 in 10) than in the second, where only midwives work. Before examining women in labour, the doctors carry out autopsies on corpses. A colleague of yours dies of a similar fever after cutting himself during an autopsy.</p>`,
      question: `What do you think and what do you do?`,
      options: [
        { label: `It is the fault of the bad air in the ward: I open the windows.`, outcome: `That is the "miasma" theory, accepted by almost everyone. But the two wards have the same air: it does not explain the difference.` },
        { label: `The doctors' hands carry something from the corpses that makes people ill: I order them to wash with a chlorine solution.`, outcome: `You do not yet know what this "something" is (microbes will be proved years later), but you can check with the numbers whether it works.` },
        { label: `It is fate: some women are weaker than others.`, outcome: `It does not explain why far fewer die in the midwives' ward.` }
      ],
      answer: 1,
      explain: `Semmelweis introduced hand washing with chloride of lime in May 1847: within a few months mortality in the doctors' ward fell to about 1-2%. It is a perfect example of the <b>scientific method</b>: observation, hypothesis, experiment, checking with the numbers. But many colleagues rejected the idea. Only with Pasteur and Lister, twenty years later, was it understood why he was right.`
    },
    {
      type: `decision`,
      title: `Paris, July 1885: you are Louis Pasteur`,
      html: `<p>They bring you Joseph Meister, aged 9, bitten by a rabid dog two days earlier. Without treatment, rabies is almost 100% fatal. You have a vaccine that has worked on dogs, but you have never tried it on a human being. What is more, you are not a doctor: you are a chemist.</p>`,
      question: `What do you do?`,
      options: [
        { label: `I do not treat him: the vaccine has not yet been tried on humans.`, outcome: `You avoid an unknown risk, but the boy will almost certainly die.` },
        { label: `I treat him, with the help of doctors who give the injections, and follow closely how he reacts.`, outcome: `It is a great ethical and scientific risk: if you fail, you could be accused of having killed the boy. But it is the only hope of saving him.` },
        { label: `I wait a few weeks to do more tests on dogs.`, outcome: `Rabies does not wait: once the symptoms appear, nothing more can be done.` }
      ],
      answer: 1,
      explain: `Pasteur, in agreement with two doctors, gave Joseph 13 injections over 10 days. The boy survived and as an adult worked as a caretaker at the Pasteur Institute. The success made the vaccine famous all over the world. Today the rules are much stricter: a new drug must pass long, controlled tests before being used on people, precisely to protect patients.`
    },
    {
      type: `alternatives`,
      title: `Other ways to understand it`,
      intro: `Some 19th-century ideas are hard to imagine: here are a few aids.`,
      tabs: [
        {
          label: `💧 Electricity like water`,
          html: `<p>Think of a circuit as a plumbing system:</p>
<ul>
<li>the <b>pile</b> is a <b>pump</b> that pushes the water;</li>
<li>the <b>voltage</b> (volts) is how hard the pump pushes;</li>
<li>the <b>current</b> (amperes) is how much water passes each second;</li>
<li>the <b>light bulb</b> is a mill wheel: the water turns it and does work;</li>
<li>if the pipe is cut (<b>open circuit</b>) the water stops.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#eff6ff"/>
<rect x="60" y="50" width="480" height="120" rx="20" fill="none" stroke="#2563eb" stroke-width="12"/>
<rect x="30" y="80" width="60" height="60" rx="8" fill="#f97316"/>
<text x="60" y="117" font-size="14" text-anchor="middle" font-weight="bold" fill="#ffffff">pump</text>
<circle cx="540" cy="110" r="32" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="540" y="115" font-size="13" text-anchor="middle">mill</text>
<text x="300" y="40" font-size="15" text-anchor="middle" fill="#1e3a8a">flowing water = current →</text>
<text x="60" y="190" font-size="14" text-anchor="middle">= pile</text>
<text x="540" y="190" font-size="14" text-anchor="middle">= light bulb</text>
<text x="300" y="115" font-size="15" text-anchor="middle" fill="#334155">pipe = electric wire</text>
</svg>`
        },
        {
          label: `🐞 Selection like a game`,
          html: `<p>Imagine 100 ladybirds: 50 red and 50 green, on a green meadow. Birds see the red ones better and eat more of them. In the next generation there are 60 green ones, then 70, then 85… No ladybird "decided" to become green: the green ones simply survive and have more young.</p>
<p>If the meadow turns brown (drought), the advantage changes! This really happened with the <b>peppered moth</b> in England: during the Industrial Revolution, when tree trunks were blackened by soot, the dark moths became the most common.</p>`
        },
        {
          label: `⚛️ The atom in 3D`,
          html: `<p>At the end of the 19th century people discover that the atom has internal "pieces": <b>electrons</b> (Thomson, 1897). Here you can see Bohr's model: a nucleus with electrons around it on orbits. Compare hydrogen (1 electron) with sodium (11).</p>`,
          scene: `atom`,
          options: { elements: [`H`, `He`, `C`, `Na`] }
        },
        {
          label: `🔎 The method in 5 steps`,
          html: `<p>Almost all the discoveries in this lesson follow the same pattern. Try to recognise it with Semmelweis:</p>
<ol>
<li><b>I observe</b>: more people die in the doctors' ward.</li>
<li><b>I ask myself</b>: why? What is different?</li>
<li><b>I hypothesise</b>: the doctors carry something from the corpses.</li>
<li><b>I experiment</b>: compulsory hand washing.</li>
<li><b>I check with the data</b>: mortality plummets. Hypothesis confirmed!</li>
</ol>
<p>Try doing it again with Snow (cholera) or with Pasteur (milk that goes off).</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Map of the 19th-century discoveries`,
      nodes: [
        { id: `metodo`, label: `Experimental method`, x: 50, y: 6, color: `#a855f7`, html: `Observe, make hypotheses, experiment, check.`, why: `It was formulated by Galileo Galilei in the 17th century. In the 19th century it becomes the way of working in every laboratory, from universities to industries.` },
        { id: `pila`, label: `Volta's pile`, x: 15, y: 28, color: `#eab308`, html: `1800: the first generator of direct current.`, why: `Volta wanted to prove that Galvani was wrong: the twitching of the frogs did not depend on an animal electricity, but on the contact between two different metals in a liquid.` },
        { id: `elettromagnetismo`, label: `Electromagnetism`, x: 15, y: 55, color: `#f97316`, html: `Ørsted, Faraday, Maxwell: electricity, magnetism and light are a single phenomenon.`, why: `With the pile it was finally possible to study steady currents; Faraday's experiments and Maxwell's mathematics led to the discovery of electromagnetic waves.` },
        { id: `tecnologia`, label: `Telegraph, light bulb, radio`, x: 15, y: 85, color: `#0ea5e9`, html: `The applications that change everyday life.`, why: `Each invention applies a discovery: the telegraph uses electromagnets, the dynamo uses induction, the radio uses the waves of Maxwell and Hertz.` },
        { id: `darwin`, label: `Evolution (Darwin)`, x: 50, y: 40, color: `#16a34a`, html: `1859: species change over time through natural selection.`, why: `Darwin combined the observations from the Beagle voyage, fossils, the ideas of the geologist Lyell about the immense age of the Earth and those of the economist Malthus about the struggle for resources.` },
        { id: `mendel`, label: `Genetics (Mendel)`, x: 50, y: 75, color: `#65a30d`, html: `1865: the laws of heredity, studied on peas.`, why: `Mendel used mathematics (statistics) to count thousands of plants: it was a new method for biology, which is why he was not understood at once.` },
        { id: `germi`, label: `Germ theory`, x: 85, y: 28, color: `#ef4444`, html: `Many diseases are caused by microorganisms.`, why: `Better microscopes and the experiments of Pasteur and Koch showed that each infectious disease has its own microbe. Semmelweis and Snow had got there by other routes, using data.` },
        { id: `medicina`, label: `Vaccines, antisepsis, anaesthesia`, x: 85, y: 60, color: `#dc2626`, html: `Safe operations and prevention of disease.`, why: `If microbes cause infections, it is enough to kill them (disinfection, pasteurisation) or to train the body to recognise them (vaccines). Anaesthesia allowed long, precise operations.` },
        { id: `atomo`, label: `Atom and periodic table`, x: 85, y: 88, color: `#7c3aed`, html: `Dalton, Mendeleev, Thomson, Curie: what matter is made of.`, why: `Precise measurements of the masses of the elements allowed Mendeleev to find a pattern; at the end of the century radioactivity and the electron showed that the atom has an internal structure.` }
      ],
      edges: [
        [`metodo`, `pila`, `guides`],
        [`metodo`, `darwin`, `guides`],
        [`metodo`, `germi`, `guides`],
        [`pila`, `elettromagnetismo`, `makes it possible to study`],
        [`elettromagnetismo`, `tecnologia`, `applied in`],
        [`darwin`, `mendel`, `later explained by`],
        [`germi`, `medicina`, `leads to`],
        [`elettromagnetismo`, `atomo`, `X-rays and the electron`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz: Darwin and medicine`,
      questions: [
        { type: `mc`, q: `Where did Darwin observe the famous finches?`, options: [`In the Galápagos`, `In Australia`, `In Iceland`], answer: 0, explain: `On the Galápagos islands, in 1835, during the voyage of the Beagle.` },
        { type: `mc`, q: `What does pasteurisation do?`, options: [`Adds vitamins`, `Heats a liquid to kill microbes`, `Freezes food`], answer: 1, explain: `It is heated (for example milk to about 72 °C) without boiling, to remove dangerous bacteria.` },
        { type: `tf`, q: `Darwin held that humans descend from today's monkeys.`, answer: false, explain: `He said that humans and the great apes have common ancestors.` }
      ]
    }
  ],
  glossary: [
    { t: `Pile`, d: `A generator of direct current invented by Volta (1800), with discs of different metals separated by a liquid.` },
    { t: `Electromagnetic induction`, d: `Producing an electric current by moving a magnet near a wire (Faraday, 1831).` },
    { t: `Evolution`, d: `The transformation of living species over very many generations.` },
    { t: `Natural selection`, d: `The mechanism by which the individuals best suited to the environment survive and reproduce more.` },
    { t: `Genetics`, d: `The science that studies how characteristics are passed from parents to children.` },
    { t: `Vaccine`, d: `A preparation that teaches the immune system to recognise a microbe, without making you ill.` },
    { t: `Antisepsis`, d: `The use of disinfectants to kill microbes on wounds and instruments.` },
    { t: `Anaesthesia`, d: `The removal of pain (and often of consciousness) during an operation.` },
    { t: `Pasteurisation`, d: `Controlled heating of a food to remove harmful microorganisms.` },
    { t: `Radioactivity`, d: `The spontaneous emission of radiation by some unstable atoms (Becquerel, Curie).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `After whom is the unit of measurement "volt" named?`, options: [`Galvani`, `Volta`, `Faraday`], answer: 1, explain: `After Alessandro Volta, inventor of the pile.` },
      { type: `tf`, q: `Faraday discovered that moving a magnet in a coil produces current.`, answer: true, explain: `It is electromagnetic induction (1831), the principle of the dynamo.` },
      { type: `num`, q: `In what year did Darwin publish "On the Origin of Species"?`, answer: 1859, explain: `In 1859, in London.` },
      { type: `order`, q: `Put the four steps of natural selection in order.`, items: [`Individuals are different from one another`, `Many characteristics are inherited`, `More individuals are born than can survive`, `The best suited survive and reproduce more`], explain: `Variation, heredity, struggle for survival, selection.` },
      { type: `text`, q: `Which monk discovered the laws of heredity by studying peas?`, answer: [`mendel`, `gregor mendel`], explain: `Gregor Mendel, in Brno, in 1865.` },
      { type: `mc`, q: `What did Semmelweis show?`, options: [`That washing hands reduces infections`, `That ether puts people to sleep`, `That light is a wave`], answer: 0, explain: `In 1847 in Vienna: with hand washing, deaths from childbed fever plummeted.` },
      { type: `mc`, q: `Which bacterium did Robert Koch discover in 1882?`, options: [`The one that causes cholera`, `The one that causes tuberculosis`, `The one that causes rabies`], answer: 1, explain: `The tuberculosis bacillus (rabies is caused by a virus).` },
      { type: `mc`, q: `Why was Mendeleev's table considered brilliant?`, options: [`Because it was colourful`, `Because it left empty boxes, predicting elements discovered later`, `Because it contained all of today's elements`], answer: 1, explain: `He predicted gallium, scandium and germanium, discovered between 1875 and 1886.` },
      { type: `text`, q: `What are the rays discovered by Röntgen in 1895 called? (… rays)`, answer: [`x`, `x-rays`, `x rays`, `raggi x`], explain: `X-rays: X as in the unknown, because nobody knew what they were.` },
      { type: `tf`, q: `Marie Curie won two Nobel Prizes in two different subjects.`, answer: true, explain: `Physics (1903) and chemistry (1911).` },
      { type: `mc`, q: `Which of these is NOT a discovery of the 19th century?`, options: [`The periodic table`, `Galileo's experimental method`, `Anaesthesia with ether`], answer: 1, explain: `Galileo lived between the 16th and 17th centuries; his method, however, was the basis of the 19th-century discoveries.` },
      { type: `mc`, q: `What did John Snow link in 1854?`, options: [`Cholera to a pump of polluted water`, `Fever to bad air`, `Tuberculosis to the cold`], answer: 0, explain: `With a map of the deaths he showed that cholera spread through water.` }
    ]
  }
});
