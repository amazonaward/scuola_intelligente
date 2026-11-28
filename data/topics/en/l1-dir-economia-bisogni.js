TOPIC('en', {
  id: "l1-dir-economia-bisogni",
  title: "Economics: needs, goods and services",
  intro: "You have 20 euros. A cinema ticket, a pair of headphones, a pizza with friends: you can't have everything. Every day, without realising it, you make economic choices. <b>Economics</b> studies exactly this: how people, firms and States choose how to use <b>limited</b> resources to satisfy <b>unlimited</b> needs. In this lesson you will find out what <b>needs</b>, <b>goods</b> and <b>services</b> are, why goods are <b>scarce</b>, and what it means to make a choice with an <b>opportunity cost</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. What economics is",
      html: `<p>The word comes from the Greek <i>oikonomía</i>, "management of the household" (<i>oikos</i> = house, <i>nomos</i> = rule). Today <b>economics</b> is the science that studies how people and societies <b>use scarce resources</b> to produce goods and services and distribute them among individuals. A famous definition was given in 1932 by the English economist <b>Lionel Robbins</b>: economics studies human behaviour as a relationship between <b>ends</b> and <b>scarce means</b> that have alternative uses.</p>
<p>Economics is divided into:</p>
<ul>
<li><b>microeconomics</b>: it studies the behaviour of individual agents (a household, a firm) and how prices are formed in markets;</li>
<li><b>macroeconomics</b>: it studies phenomena of the whole system (national output, employment, inflation, public debt).</li>
</ul>
<p>We also distinguish between <b>positive</b> economics (it describes facts: "if the price rises, demand falls") and <b>normative</b> economics (it judges what would be right to do: "the State should raise taxes on the rich"). The first kind of statement can be tested with data; the second also depends on values.</p>`
    },
    {
      type: "text",
      title: "2. Needs",
      html: `<p>A <b>need</b> is the feeling that something is missing, together with the desire to satisfy it. Human needs are practically <b>unlimited</b>: as soon as you satisfy one, another arises (you are hungry, you eat; then you want a dessert; then a better restaurant). They are classified in various ways.</p>
<p><b>By importance:</b></p>
<ul>
<li><b>primary</b> (or vital) needs: essential for survival: eating, drinking, sheltering from the cold, getting medical care;</li>
<li><b>secondary</b> (or non-essential) needs: not essential but able to improve life: travelling, doing sport, listening to music, owning the latest smartphone.</li>
</ul>
<p><b>By who feels them:</b></p>
<ul>
<li><b>individual</b> needs: felt by a single person (buying a book);</li>
<li><b>collective</b> needs: felt by a whole community and satisfied by shared services (security, schools, roads, justice, public health).</li>
</ul>
<p>The American psychologist <b>Abraham Maslow</b> (1943) proposed a five-level "pyramid": <b>physiological</b> needs (food, sleep), <b>safety</b> needs (home, health, work), <b>belonging</b> needs (friends, family, love), <b>esteem</b> needs (respect, success) and <b>self-actualisation</b> (developing your own abilities). According to Maslow, people usually try to satisfy lower-level needs before moving on to higher ones.</p>
<p>Needs depend on <b>era, culture, age and income</b>: today the internet is an almost primary need for many people; fifty years ago it did not exist.</p>`
    },
    {
      type: "svg",
      title: "Maslow's hierarchy of needs",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maslow's five-level pyramid">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<polygon points="300,15 245,65 355,65" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="300" y="52" text-anchor="middle" font-size="14" font-weight="bold" fill="#581c87">Self</text>
<polygon points="245,65 355,65 390,115 210,115" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
<text x="300" y="97" text-anchor="middle" font-size="14" font-weight="bold" fill="#831843">Esteem</text>
<polygon points="210,115 390,115 425,165 175,165" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
<text x="300" y="147" text-anchor="middle" font-size="14" font-weight="bold" fill="#7c2d12">Belonging</text>
<polygon points="175,165 425,165 460,215 140,215" fill="#fef08a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="197" text-anchor="middle" font-size="14" font-weight="bold" fill="#713f12">Safety</text>
<polygon points="140,215 460,215 495,270 105,270" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="300" y="248" text-anchor="middle" font-size="14" font-weight="bold" fill="#14532d">Physiological</text>
<text x="515" y="45" font-size="14" fill="#334155">Fulfilling yourself</text>
<text x="515" y="150" font-size="14" fill="#334155">Relationships</text>
<text x="515" y="250" font-size="14" fill="#334155">Survival</text>
</svg>`,
      caption: "Maslow's needs, from the base (survival) to the top (self-actualisation)."
    },
    {
      type: "widget",
      title: "Primary or secondary?",
      widget: "classify",
      options: {
        groups: ["Primary need", "Secondary need"],
        items: [
          ["Drinking water", 0],
          ["Playing video games", 1],
          ["Getting treatment when you are ill", 0],
          ["Going on holiday abroad", 1],
          ["Having a roof over your head", 0],
          ["Buying designer clothes", 1],
          ["Eating", 0],
          ["Going to a concert", 1]
        ]
      },
      caption: "Tell apart what is necessary for life from what makes it more enjoyable."
    },
    {
      type: "text",
      title: "3. Goods and services",
      html: `<p>Needs are satisfied with <b>goods</b> and <b>services</b>.</p>
<p><b>Goods</b> are things that are useful for satisfying a need. They are classified as:</p>
<ul>
<li><b>free goods</b>: available in unlimited quantities, requiring no work to obtain (air, sunlight); there are fewer and fewer of them: clean water, for example, now has a cost;</li>
<li><b>economic goods</b>: available in limited quantities, they have a <b>price</b> and require work to produce. They are the subject of economics.</li>
</ul>
<p>Economic goods are further divided into:</p>
<ul>
<li><b>tangible</b> (a bike, bread) and <b>intangible</b> (a patent, software, a brand);</li>
<li><b>consumer goods</b>: they satisfy a need directly (a sandwich, a pair of shoes); they can be <b>durable</b> (used many times: washing machine, phone) or <b>non-durable</b> (used up immediately: food);</li>
<li><b>capital goods</b> (or production goods): used to produce other goods (machinery, a company's computers, an oven);</li>
<li><b>complementary goods</b>: used together (car and petrol, pen and ink);</li>
<li><b>substitute goods</b>: they satisfy the same need and can replace each other (butter and margarine, train and coach).</li>
</ul>
<p><b>Services</b> are activities that satisfy a need without producing an object: teaching, a medical visit, transport, a haircut. They are produced and consumed at the same time and cannot be stored.</p>`
    },
    {
      type: "example",
      title: "Sofia's day in goods and services",
      html: `<p>Sofia wakes up (<b>free goods</b>: air, light) and drinks coffee with sugar (<b>non-durable consumer goods</b>, <b>complementary</b> to each other). She goes to school by bus (a public transport <b>service</b>) and studies with a tablet (a <b>durable good</b>). Her teacher provides an education <b>service</b>. The pizzeria uses its oven, a <b>capital good</b>, to bake pizzas. If the coach fare goes up, Sofia might prefer the train: the two are <b>substitutes</b>.</p>`
    },
    {
      type: "widget",
      title: "Good or service?",
      widget: "classify",
      options: {
        groups: ["Good", "Service"],
        items: [
          ["A pair of shoes", 0],
          ["A guitar lesson", 1],
          ["A sandwich", 0],
          ["A visit to the doctor", 1],
          ["A tractor", 0],
          ["Train transport", 1],
          ["A book", 0],
          ["A haircut", 1]
        ]
      },
      caption: "A good is a thing, a service is an activity."
    },
    {
      type: "quiz",
      title: "Quick check",
      questions: [
        { type: "mc", q: "Which of these is a capital good?", options: ["A pizzeria's oven", "An ice cream", "A song you listen to"], answer: 0, explain: "It is used to produce other goods (pizzas); the others satisfy a need directly." },
        { type: "tf", q: "Human needs are limited and are all soon satisfied.", answer: false, explain: "Needs are unlimited: once one is satisfied, another arises." },
        { type: "mc", q: "Pen and ink are…", options: ["Complementary goods", "Substitute goods", "Free goods"], answer: 0, explain: "They are used together; substitutes replace each other." }
      ]
    },
    {
      type: "text",
      title: "4. Scarcity and the economic problem",
      html: `<p>Natural resources, time, labour and money are <b>limited</b>, while needs are <b>unlimited</b>. This contradiction is called <b>scarcity</b> and it is the origin of economics. It does not mean that resources are few in absolute terms, but that they are <b>not enough</b> to satisfy all needs.</p>
<p>Since we cannot have everything, every society (and every person) must answer three fundamental questions:</p>
<ol>
<li><b>What to produce</b>, and in what quantity (more schools or more roads? more food or more cars)?</li>
<li><b>How to produce</b> (with many machines or with a lot of human labour? with which technologies)?</li>
<li><b>For whom to produce</b>: how should goods be distributed among people?</li>
</ol>
<p>The answers to these questions define the different <b>economic systems</b> (which we will look at in the next lesson).</p>
<p>Production uses the <b>factors of production</b>:</p>
<ul>
<li><b>labour</b> (the physical or mental activity of workers);</li>
<li><b>land</b> (natural resources: soil, water, minerals, energy);</li>
<li><b>capital</b> (machines, buildings, tools and the money to buy them);</li>
<li><b>entrepreneurship</b> (the ability to organise the factors and take on business risk; sometimes considered a factor in its own right).</li>
</ul>
<p>Whoever provides a factor receives a reward: <b>wages</b> for labour, <b>rent</b> for land, <b>interest</b> for capital, <b>profit</b> for enterprise.</p>`
    },
    {
      type: "text",
      title: "5. Choosing has a cost: opportunity cost",
      html: `<p>Since resources are scarce, every choice involves giving something up. The <b>opportunity cost</b> of a choice is the <b>value of the best alternative you give up</b>. It is not just the price paid: it also includes what you could have done with that money or that time.</p>
<p>Examples:</p>
<ul>
<li>You have 20 euros: do you choose the cinema (10 euros) or a book (10 euros) you would have been willing to pay more for? The opportunity cost of the cinema is the book you give up.</li>
<li>An hour of study in the afternoon has as its opportunity cost an hour of sport with friends; time is a scarce resource too.</li>
<li>A State that spends more on defence has fewer resources for schools: it is the old "guns or butter" dilemma.</li>
</ul>
<p>Economists represent this problem with the <b>production possibility frontier</b>: a graph showing the maximum combinations of two goods that an economy can produce with the resources it has. To get more of one, you have to produce less of the other.</p>`
    },
    {
      type: "svg",
      title: "The production possibility frontier",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Production possibility frontier">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<line x1="80" y1="250" x2="80" y2="30" stroke="#334155" stroke-width="2"/>
<line x1="80" y1="250" x2="540" y2="250" stroke="#334155" stroke-width="2"/>
<path d="M80,60 Q300,80 480,250" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3" fill-opacity="0.6"/>
<circle cx="250" cy="105" r="8" fill="#16a34a"/>
<text x="268" y="102" font-size="14" font-weight="bold" fill="#14532d">A: efficient</text>
<circle cx="170" cy="190" r="8" fill="#f59e0b"/>
<text x="188" y="200" font-size="14" font-weight="bold" fill="#78350f">B: wasted resources</text>
<circle cx="450" cy="90" r="8" fill="#dc2626"/>
<text x="360" y="75" font-size="14" font-weight="bold" fill="#7f1d1d">C: unattainable</text>
<text x="40" y="45" font-size="14" fill="#1e293b">Goods X</text>
<text x="490" y="275" font-size="14" fill="#1e293b">Goods Y</text>
</svg>`,
      caption: "Points on the curve are efficient combinations; points below it mean resources are not fully used; points outside it are unattainable with current resources."
    },
    {
      type: "example",
      title: "The opportunity cost of a Saturday",
      html: `<p>Luca has a free Saturday and two options: work 5 hours in a shop and earn 40 euros, or go to a five-a-side football tournament he really enjoys (free). If he goes to the tournament, his <b>opportunity cost</b> is <b>40 euros</b>: what he gives up. If he works instead, the opportunity cost is the fun of the tournament. There is no absolutely right choice: it depends on the value Luca places on each alternative. But it is a mistake to say that going to the tournament "costs nothing".</p>`
    },
    {
      type: "curiosity",
      title: "The water-diamond paradox",
      html: `<p>Adam Smith, in <i>The Wealth of Nations</i> (1776), noticed a paradox: water is essential for life but costs very little, while diamonds are useless for survival but cost a great deal. Economic value does not depend only on usefulness, but on <b>scarcity</b>. Later economists explained that what matters is <b>marginal utility</b>: for someone who has plenty of water, one more litre is worth little; in the desert, a single glass can be worth a great deal.</p>`
    },
    {
      type: "text",
      title: "6. Diminishing marginal utility",
      html: `<p>When you consume more units of the same good, the <b>utility</b> (satisfaction) of each additional unit <b>decreases</b>. The first sandwich, when you are very hungry, gives great satisfaction; the second gives less; the fifth might even make you feel unwell. This is the <b>law of diminishing marginal utility</b>.</p>
<p>It is one reason why people do not spend everything on a single good, but <b>diversify their consumption</b>. It also helps explain how prices are formed: if a good is very scarce, the utility of the last unit stays high and people are willing to pay more.</p>
<p>The <b>value</b> of a good can be <b>use value</b> (how useful it is to whoever uses it) or <b>exchange value</b> (what you can get in return for it: the price). Water has high use value and low exchange value; diamonds the opposite.</p>`
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Needs</b> are unlimited; <b>resources</b> are scarce. This is where economics comes from.</li>
<li>Needs: primary/secondary, individual/collective.</li>
<li>Goods (free, economic) and services. Goods can be consumer or capital goods; complementary or substitutes.</li>
<li>Factors of production: <b>labour, land, capital</b> (+ entrepreneurship).</li>
<li><b>Opportunity cost</b>: the value of the best alternative you give up.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand scarcity and choice",
      intro: "The idea of economic choice is easier when you see it in action.",
      tabs: [
        {
          label: "🍕 The 20-euro budget",
          html: `<p>You have 20 euros for the weekend: 10 for the cinema, 8 for pizza, 15 for headphones: 33 euros in all. It is not enough: you have to choose. If you choose cinema + pizza (18 euros), you give up the headphones: their value is the <b>opportunity cost</b> of your choice. Making a budget means doing exactly what economics does, on a small scale.</p>`
        },
        {
          label: "⏰ Time as a resource",
          html: `<p>Time is the scarcest resource of all: every day has 24 hours for everyone. An hour spent on a video game is an hour you do not spend studying, sleeping or with friends. Even the richest person has only one 24-hour day. That is why people say "time is money": not because they are the same, but because time always has an opportunity cost.</p>`
        },
        {
          label: "🌍 The village with one boat",
          html: `<p>A village has only one boat. It can be used for fishing (food) or for carrying goods to market (income). Every day it is used for one thing, it is not available for the other. The community must decide <b>what to produce</b>, <b>how</b> and <b>for whom</b>: these are the three fundamental questions of every economic system.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: the economic problem",
      nodes: [
        { id: "bisogni", label: "Unlimited needs", x: 20, y: 10, color: "#2563eb", html: "Primary and secondary, individual and collective.", why: "Needs are unlimited because they change with culture, technology and income: once vital needs are satisfied, needs for safety, belonging and esteem emerge (Maslow)." },
        { id: "risorse", label: "Scarce resources", x: 80, y: 10, color: "#dc2626", html: "Land, labour, capital, time.", why: "Resources have a physical limit (the planet, time, skills). Technical progress pushes it forward, but does not remove it." },
        { id: "scarsita", label: "Scarcity", x: 50, y: 38, color: "#a855f7", html: "Resources are not enough for all needs.", why: "It is the fundamental problem of economics: if everything were abundant, there would be no need to choose or to put a price on goods." },
        { id: "scelta", label: "Choice and opportunity cost", x: 20, y: 68, color: "#16a34a", html: "Choosing means giving something up.", why: "Every choice has a cost not only in money but in lost alternatives. The concept explains why prices, saving, investment and education exist (giving something up today to gain tomorrow)." },
        { id: "beni", label: "Goods and services", x: 80, y: 68, color: "#f59e0b", html: "Free/economic; consumer/capital; services.", why: "They are the way needs are satisfied. Only economic goods are scarce and therefore have a price: air is a free good, drinking water is not." },
        { id: "produzione", label: "Factors of production", x: 50, y: 90, color: "#0891b2", html: "Labour, land, capital, entrepreneurship.", why: "They are the ingredients used to produce goods and services. Whoever provides them receives a reward: wages, rent, interest, profit." }
      ],
      edges: [["bisogni", "scarsita", "clash with"], ["risorse", "scarsita", "cause"], ["scarsita", "scelta", "forces"], ["scarsita", "beni", "makes economic"], ["beni", "produzione", "produced with"]]
    },
    {
      type: "curiosity",
      title: "Free goods become economic goods",
      html: `<p>Clean water used to be a free good for many communities. Today, because of pollution and population growth, in many areas it is an <b>economic</b> good, with a price (the bills) and even conflicts over its use. Clean air in big cities is also becoming scarce: that is why there are emission limits and markets for "emission allowances".</p>`
    },
    {
      type: "quiz",
      title: "Second check",
      questions: [
        { type: "mc", q: "What is the opportunity cost of spending the afternoon at the cinema instead of working for 30 euros?", options: ["At least the 30 euros you give up", "Zero, because the cinema is free", "Only the price of the ticket"], answer: 0, explain: "It is the value of the best alternative given up: 30 euros not earned (plus the ticket, if you pay for one)." },
        { type: "tf", q: "Services can be stored like goods.", answer: false, explain: "A service is produced and consumed at the same time (a lesson, a train journey)." },
        { type: "mc", q: "What is the reward for capital called?", options: ["Interest", "Wages", "Rent"], answer: 0, explain: "Wages for labour, rent for land, interest for capital, profit for the entrepreneur." }
      ]
    }
  ],
  glossary: [
    { t: "Economics", d: "The science that studies how to use scarce resources to satisfy unlimited needs." },
    { t: "Need", d: "The feeling that something is missing, together with the desire to satisfy it." },
    { t: "Economic good", d: "A scarce good that has a price and requires work to produce." },
    { t: "Free good", d: "A good available in unlimited quantities at no cost, such as air." },
    { t: "Capital good", d: "A good used to produce other goods (machinery, equipment)." },
    { t: "Service", d: "An activity that satisfies a need without producing an object." },
    { t: "Scarcity", d: "The insufficiency of resources compared with unlimited needs." },
    { t: "Opportunity cost", d: "The value of the best alternative given up when making a choice." },
    { t: "Factors of production", d: "Labour, land, capital (and entrepreneurship): the resources used to produce." },
    { t: "Marginal utility", d: "The extra satisfaction from one more unit of a good; as a rule it decreases." },
    { t: "Microeconomics and macroeconomics", d: "The study of individual agents and markets (micro) and of the whole economic system (macro)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Why does the economic problem arise?", options: ["Because resources are scarce compared with needs", "Because prices are too high", "Because money exists"], answer: 0, explain: "Scarcity forces us to choose." },
      { type: "tf", q: "Air is a classic example of a free good.", answer: true, explain: "It is available in unlimited quantities without having to pay." },
      { type: "mc", q: "Which is a complementary good to a car?", options: ["Petrol", "A coach", "A bicycle"], answer: 0, explain: "Complements are used together; coach and bicycle are substitutes." },
      { type: "text", q: "What is the value of the best alternative given up called?", answer: ["opportunity cost", "the opportunity cost", "opportunity-cost"], explain: "It is the opportunity cost." },
      { type: "mc", q: "Which is not a factor of production?", options: ["Consumers' money", "Labour", "Land"], answer: 0, explain: "The factors are labour, land, capital (plus entrepreneurship)." },
      { type: "order", q: "Put the needs in Maslow's pyramid in order from lowest to highest.", items: ["Physiological", "Safety", "Belonging", "Esteem", "Self-actualisation"], explain: "The most basic needs come first; self-actualisation is at the top." },
      { type: "num", q: "You have 30 euros and choose to spend 12 euros on the cinema and 18 on a pizza. How much do you have left?", answer: 0, tol: 0, unit: "euros", explain: "12 + 18 = 30: you have nothing left; any other purchase would have meant giving something up." },
      { type: "mc", q: "A service is…", options: ["An activity that satisfies a need without producing an object", "A durable object", "A capital good"], answer: 0, explain: "A lesson, a medical visit and transport are services." },
      { type: "tf", q: "According to the law of diminishing marginal utility, each additional unit of the same good normally gives less satisfaction.", answer: true, explain: "The fifth sandwich gives less pleasure than the first." },
      { type: "mc", q: "Microeconomics studies…", options: ["The behaviour of individual agents and markets", "Total national output", "The history of money"], answer: 0, explain: "The analysis of the whole system is macroeconomics." }
    ]
  }
});
