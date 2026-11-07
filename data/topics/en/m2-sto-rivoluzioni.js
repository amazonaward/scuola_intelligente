TOPIC('en', {
  id: "m2-sto-rivoluzioni",
  title: "The revolutions: American, French and Industrial",
  intro: "Between 1760 and 1800 three revolutions change the world for ever. The <b>American</b> one creates the first modern republic with a written constitution; the <b>French</b> one overthrows the absolute monarchy and proclaims the <b>rights of man and of the citizen</b>; the <b>Industrial</b> one, born in England, changes the way we work, produce and live.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. What a revolution is",
      html: `<p>A <b>revolution</b> is a <b>deep and rapid</b> change in a system. There are two kinds:</p>
<ul>
<li><b>political revolutions</b> (American, French): they change who holds power and by what rules, often by force;</li>
<li><b>economic and technological revolutions</b> (Industrial): they change the way of producing and working, more slowly, over decades.</li>
</ul>
<p>All three have roots in the century of the <b>Enlightenment</b>: faith in reason and science, the idea of <b>natural rights</b> (Locke), <b>separation of powers</b> (Montesquieu), <b>popular sovereignty</b> (Rousseau), <b>free market</b> (Adam Smith).</p>`
    },
    {
      type: "text",
      title: "2. The American Revolution (1775–1783)",
      html: `<p>In the 18th century on the Atlantic coast of North America there were <b>13 English colonies</b>, with about 2.5 million inhabitants. After the costly <b>Seven Years' War</b> (1756–1763) against France, the government in London decided to make the colonists pay new taxes: the <b>Stamp Act</b> (1765, on documents and newspapers) and then duties on tea.</p>
<p>The colonists protested: <b>"No taxation without representation"</b>, because they had no deputies in the Parliament in London.</p>
<ul>
<li><b>1773 – Boston Tea Party</b>: colonists dressed as Native Americans threw 342 chests of tea belonging to the East India Company into the sea.</li>
<li><b>1775</b>: first clashes at Lexington and Concord; the war begins. The commander of the Continental Army is <b>George Washington</b>.</li>
<li><b>4 July 1776</b>: in Philadelphia Congress approves the <b>Declaration of Independence</b>, written mostly by <b>Thomas Jefferson</b>: "all men are created equal" and have unalienable rights, among them "life, liberty and the pursuit of happiness".</li>
<li><b>1777 – Saratoga</b>: American victory. <b>France</b> (1778) and then Spain enter the war against England.</li>
<li><b>1781 – Yorktown</b>: the English army surrenders. With the <b>Peace of Paris (1783)</b> England recognises the <b>United States of America</b>.</li>
<li><b>1787 – Constitution</b>: a <b>federal</b> and <b>presidential</b> republic with separation of powers (President, Congress, Supreme Court). In 1789 Washington becomes the first president.</li>
</ul>
<p>The limits: the rights did not apply to everyone. The <b>slavery</b> of African Americans remained (until 1865), women could not vote and <b>Native Americans</b> were gradually driven from their lands.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the American Revolution",
      questions: [
        { type: "mc", q: "What did the slogan \"No taxation without representation\" mean?", options: ["No taxes for the poor", "You do not pay taxes decided by a parliament in which you are not represented", "Taxes must be the same for everyone"], answer: 1, explain: "The colonists had no deputies in London." },
        { type: "num", q: "In what year was the American Declaration of Independence signed?", answer: 1776, explain: "On 4 July 1776, in Philadelphia." },
        { type: "num", q: "How many English colonies rebelled?", answer: 13, explain: "The 13 colonies: they are still the 13 stripes of the US flag today." },
        { type: "tf", q: "The American Constitution of 1787 immediately abolished slavery.", answer: false, explain: "Slavery was abolished only in 1865, after the Civil War." }
      ]
    },
    {
      type: "text",
      title: "3. France before 1789: the Old Regime",
      html: `<p>France was the most populous country in Europe (about <b>28 million</b> inhabitants). The society of the <b>Old Regime</b> was divided into three <b>orders</b> (or estates):</p>
<ul>
<li><b>First Estate – clergy</b>: about 130 000 people. It owned about 10% of the land, collected the <b>tithe</b> and <b>paid no taxes</b>.</li>
<li><b>Second Estate – nobility</b>: about 350 000–400 000 people. It owned about 25% of the land, had feudal rights over the peasants and <b>paid almost no taxes</b>.</li>
<li><b>Third Estate</b>: everyone else, about <b>98%</b> of the population: the middle class, craftsmen, workers, and above all <b>peasants</b>. It paid all the taxes.</li>
</ul>
<p>In <b>1788</b> the State was on the brink of <b>bankruptcy</b>: debts (also for the help given to the Americans) swallowed about half of the spending. A terrible harvest doubled the price of <b>bread</b>, which came to cost more than half of a worker's wage. King <b>Louis XVI</b> had to call the <b>Estates General</b>, an assembly of the three orders that had not met since <b>1614</b>.</p>`
    },
    {
      type: "svg",
      title: "French society before the revolution",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#fffbeb"/>
<polygon points="300,20 340,70 260,70" fill="#a855f7" stroke="#581c87" stroke-width="2"/>
<polygon points="260,70 340,70 375,120 225,120" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
<polygon points="225,120 375,120 520,300 80,300" fill="#f59e0b" stroke="#78350f" stroke-width="2"/>
<text x="300" y="62" font-size="14" text-anchor="middle" fill="#fff" font-weight="bold">King</text>
<text x="300" y="102" font-size="14" text-anchor="middle" fill="#fff" font-weight="bold">Clergy + Nobility</text>
<text x="300" y="200" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">Third Estate</text>
<text x="300" y="230" font-size="17" text-anchor="middle" fill="#78350f">≈ 98% of the population</text>
<text x="300" y="260" font-size="16" text-anchor="middle" fill="#78350f">middle class, craftsmen, peasants</text>
<text x="400" y="70" font-size="15" fill="#1e3a8a">≈ 2%: pay no taxes,</text>
<text x="400" y="90" font-size="15" fill="#1e3a8a">own ≈ 35% of the land</text>
<text x="300" y="322" font-size="15" text-anchor="middle" fill="#7c2d12">At the Estates General: 1 order = 1 vote → clergy + nobility win 2 to 1</text>
</svg>`,
      caption: "A tiny number of privileged people at the top, an enormous base that paid the taxes and had no voice."
    },
    {
      type: "text",
      title: "4. The French Revolution, step by step",
      html: `<ol>
<li><b>5 May 1789</b> – The <b>Estates General</b> open at Versailles. The Third Estate asks for voting <b>by head</b> (each deputy one vote) and not by order.</li>
<li><b>17–20 June 1789</b> – The deputies of the Third Estate proclaim themselves the <b>National Assembly</b> and, locked out of their hall, swear in the <b>Tennis Court</b> not to separate before giving France a constitution.</li>
<li><b>14 July 1789</b> – The people of Paris storm the <b>Bastille</b>, a fortress-prison and symbol of absolutism, to seize weapons and gunpowder. It is the French national holiday.</li>
<li><b>4 August 1789</b> – Abolition of <b>feudal privileges</b>.</li>
<li><b>26 August 1789</b> – <b>Declaration of the Rights of Man and of the Citizen</b>: "Men are born and remain free and equal in rights" (art. 1).</li>
<li><b>1791</b> – <b>Constitution</b>: a constitutional monarchy with separation of powers; only citizens with a certain income can vote. The king tries to <b>flee to Varennes</b> and is stopped: he loses the people's trust.</li>
<li><b>1792</b> – War against Austria and Prussia. On 10 August the people storm the Tuileries; on <b>21 September</b> the <b>Republic</b> is born.</li>
<li><b>21 January 1793</b> – <b>Louis XVI</b> is guillotined; in October so is Queen <b>Marie Antoinette</b>.</li>
<li><b>1793–1794 – the Terror</b>: the government of the <b>Jacobins</b> led by <b>Robespierre</b> suspends freedoms to defend the Republic from enemies outside and inside. The Revolutionary Tribunal sentences thousands of people to death (about 17 000 official executions). Robespierre himself is guillotined on 28 July 1794 (<b>9 Thermidor</b>).</li>
<li><b>1795–1799 – the Directory</b>: a moderate government of five directors, weak and unstable, relying more and more on the army. In <b>1799</b> General <b>Napoleon Bonaparte</b> seizes power in a coup d'état.</li>
</ol>
<p>The motto of the revolution was <b>Liberté, Égalité, Fraternité</b> (liberty, equality, brotherhood). The revolution also introduced the <b>metric system</b> (metre and kilogram) and abolished slavery in the colonies (1794, later restored by Napoleon in 1802).</p>`
    },
    {
      type: "3d",
      title: "The 3D space-time map of the revolutions",
      scene: "spacetime",
      caption: "The map runs from the American colonies to Europe. Higher = more recent. Tap the events and follow the arrows: ideas and debts cross the Atlantic.",
      options: {
        lat: [34, 56],
        lon: [-80, 8],
        years: [1755, 1800],
        places: [
          { lat: 42.36, lon: -71.06, label: "Boston" },
          { lat: 39.95, lon: -75.16, label: "Philadelphia" },
          { lat: 37.24, lon: -76.51, label: "Yorktown" },
          { lat: 51.5, lon: -0.12, label: "London" },
          { lat: 53.48, lon: -2.24, label: "Manchester" },
          { lat: 48.86, lon: 2.35, label: "Paris" }
        ],
        events: [
          { id: "settanni", lat: 46.8, lon: -71.2, year: 1763, label: "End of the Seven Years' War", html: "England wins the war against France and conquers Canada, but is full of debts. It decides to make the American colonies pay new taxes." },
          { id: "watt", lat: 55.86, lon: -4.25, year: 1769, label: "Watt patents the steam engine", html: "In Glasgow <b>James Watt</b> patents the separate condenser that makes the steam engine far more efficient. From 1781 it will be able to drive wheels and machinery." },
          { id: "jenny", lat: 53.75, lon: -2.48, year: 1764, label: "The spinning jenny", html: "In Lancashire <b>James Hargreaves</b> invents the <i>spinning jenny</i>, which lets a single spinner work 8 spindles (later up to 120) at once." },
          { id: "teaparty", lat: 42.36, lon: -71.05, year: 1773, label: "Boston Tea Party", html: "In protest against the tea tax, the colonists throw the cargo of three ships of the East India Company into the sea.", causes: ["settanni"] },
          { id: "indipendenza", lat: 39.95, lon: -75.16, year: 1776, label: "Declaration of Independence", html: "On 4 July, in Philadelphia, the 13 colonies proclaim themselves the United States of America. Jefferson's text takes up Locke's ideas on natural rights.", causes: ["teaparty"] },
          { id: "yorktown", lat: 37.24, lon: -76.51, year: 1781, label: "Victory at Yorktown", html: "Americans and French besiege Cornwallis's English army and force it to surrender. The war is won; peace will come in 1783.", causes: ["indipendenza"] },
          { id: "costituzione", lat: 39.96, lon: -75.15, year: 1787, label: "US Constitution", html: "The Constitution is written in Philadelphia: a federal republic, an elected president, Congress, a Supreme Court. It is still in force.", causes: ["yorktown"] },
          { id: "debito", lat: 48.8, lon: 2.12, year: 1788, label: "France bankrupt", html: "The help given to the Americans has put France even more into debt. A terrible harvest drives up the price of bread. Louis XVI calls the Estates General.", causes: ["yorktown"] },
          { id: "bastiglia", lat: 48.85, lon: 2.37, year: 1789, label: "Storming of the Bastille", html: "On 14 July the Parisians storm the Bastille. On 26 August the Assembly approves the Declaration of the Rights of Man and of the Citizen.", causes: ["debito", "indipendenza"] },
          { id: "repubblica", lat: 48.86, lon: 2.33, year: 1792, label: "The Republic is born", html: "After the king's flight to Varennes (1791) and the war against Austria and Prussia, the monarchy is abolished on 21 September 1792.", causes: ["bastiglia"] },
          { id: "terrore", lat: 48.87, lon: 2.32, year: 1793, label: "The Terror", html: "Louis XVI is guillotined on 21 January 1793. Robespierre's Jacobins set up the Terror, which will last until July 1794.", causes: ["repubblica"] },
          { id: "napoleone", lat: 48.8, lon: 2.2, year: 1799, label: "Napoleon's coup d'état", html: "On 9 November (18 Brumaire) General <b>Napoleon Bonaparte</b> overthrows the Directory. A new era begins.", causes: ["terrore"] },
          { id: "cotonifici", lat: 53.48, lon: -2.24, year: 1785, label: "The power loom", html: "<b>Edmund Cartwright</b> patents the power loom. In Manchester large cotton mills spring up, driven first by water and then by steam.", causes: ["jenny", "watt"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Versailles, 20 June 1789: you are a deputy of the Third Estate",
      html: `<p>You represent millions of French people, but at the Estates General the vote is <b>by order</b>: clergy and nobility always win 2 to 1. Three days ago you proclaimed that you are the true <b>National Assembly</b>. This morning you find your hall <b>locked</b> and guarded by the king's soldiers. It is raining. Someone suggests going to the nearby real tennis court.</p>`,
      question: "What do you do?",
      options: [
        { label: "I go home: without the hall and against the king we can do nothing.", outcome: "The king and the privileged would win without a fight. Taxes would go on weighing on the Third Estate." },
        { label: "I go to the tennis court and swear with the others not to separate until France has a constitution.", outcome: "It is an act of peaceful but risky rebellion: the king could have you arrested. But you show that you are united and speak in the name of the nation." },
        { label: "I take up arms and march on the king's palace.", outcome: "You are deputies, not soldiers: you would risk being scattered or killed and giving the king a pretext to dissolve everything by force." }
      ],
      answer: 1,
      explain: "On 20 June 1789 almost all the deputies of the Third Estate took the <b>Tennis Court Oath</b>, led by the astronomer Jean-Sylvain Bailly. On 23 June the king ordered them to disband, but the Count of Mirabeau replied: \"We are here by the will of the people and we shall leave only at the point of bayonets\". Many deputies of the clergy and some nobles joined them and on 27 June the king had to give way. On 9 July the Assembly proclaimed itself <b>constituent</b>. But when the king gathered troops around Paris, the people feared a show of force: on 14 July they stormed the Bastille."
    },
    {
      type: "text",
      title: "5. The Industrial Revolution (from about 1760)",
      html: `<p>While France was fighting, in <b>England</b> something even deeper was changing: the way of <b>producing</b>. People went from the craftsman's workshop and work at home to the <b>factory</b> with <b>machines</b> driven first by water and then by <b>steam</b>.</p>
<p><b>Why in England?</b></p>
<ul>
<li><b>capital</b>: wealth accumulated through colonial trade (including the slave trade);</li>
<li><b>raw materials</b>: plenty of <b>coal</b> and <b>iron</b>, and cotton from the colonies;</li>
<li><b>labour</b>: with the <b>enclosures</b> (fencing off of common land) many peasants lost their fields and moved to the towns; the <b>agricultural revolution</b> (crop rotation, new tools) produced more food with fewer workers, and the population grew;</li>
<li><b>markets</b>: a great colonial empire and a strong fleet;</li>
<li><b>political stability</b> and economic freedom (parliamentary monarchy since 1689), banks, patents that rewarded inventors.</li>
</ul>
<p><b>The key inventions:</b></p>
<ul>
<li><b>1733</b> flying shuttle (John Kay); <b>1764</b> spinning jenny (Hargreaves); <b>1769</b> water frame (Arkwright); <b>1785</b> power loom (Cartwright): the cotton <b>textile</b> sector was the first to industrialise;</li>
<li><b>1712</b> Newcomen's steam engine for pumping water out of mines; <b>1769</b> the improved engine of <b>James Watt</b>, which from 1781 could turn wheels and machinery;</li>
<li><b>1709</b> Abraham Darby smelts iron with <b>coke</b> instead of charcoal;</li>
<li><b>1804</b> first locomotive (Trevithick); <b>1825</b> first public railway Stockton–Darlington; <b>1830</b> Liverpool–Manchester with George Stephenson's <i>Rocket</i>.</li>
</ul>`
    },
    {
      type: "text",
      title: "6. The consequences of the Industrial Revolution",
      html: `<ul>
<li><b>The factory is born</b>: many workers in the same building, with fixed hours marked by the siren, following the rhythm of the machines.</li>
<li><b>Two new social classes are born</b>: the <b>industrial bourgeoisie</b> (the owners of the factories, the <b>capitalists</b>) and the <b>proletariat</b> (the <b>workers</b>, who own only their own labour).</li>
<li><b>Urbanisation</b>: cities grow fast. Manchester went from about 25 000 inhabitants (1772) to over 300 000 (1850). Overcrowded working-class districts, without sewers, with cholera epidemics.</li>
<li><b>Very harsh working conditions</b>: shifts of 12–16 hours, very low wages, no protection against illness and accidents. <b>Women</b> and <b>children</b> also worked, from the age of 5–6, paid even less, in mines and cotton mills.</li>
<li><b>Protests</b>: the <b>Luddites</b> (1811–1816) destroyed machines; then the first <b>mutual aid societies</b> and <b>trade unions</b> were born (legal in England from 1824). The <b>Factory Act</b> of 1833 banned work under the age of 9 in textile mills.</li>
<li><b>Environment</b>: coal, smoke and polluted rivers. This is when the rise in CO<sub>2</sub> emissions that now causes climate change began.</li>
<li><b>Long-term prosperity</b>: cheaper goods, faster transport; in the long run the standard of living rose as never before in history.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Manchester, 1790: you own a small textile workshop",
      html: `<p>You have 20 weavers who work by hand, at home, on looms that you own (<b>domestic work</b>). A competitor of yours has built a building with dozens of spinning machines driven by a <b>steam engine</b>: he produces ten times more thread and sells it at half the price. You have some savings and the bank is willing to give you a loan.</p>`,
      question: "What do you do?",
      options: [
        { label: "I carry on as before: my weavers are good and the customers know me.", outcome: "Your thread costs twice as much as your competitor's: within a few years the customers leave and you close down." },
        { label: "I take the loan, build a factory with steam machines and hire workers, including women and children who cost less.", outcome: "You become much more competitive and rich. But your old weavers lose their jobs, and the workers spend 14 hours a day in dangerous conditions." },
        { label: "I ask the government to ban the machines.", outcome: "The English Parliament, led by owners and merchants in favour of free trade, would never do it. And the machines would arrive from abroad anyway." }
      ],
      answer: 1,
      explain: "Most entrepreneurs chose the factory: it was the only way to survive competition. Within a few decades the hand weavers, who numbered hundreds of thousands, fell into poverty. Some enlightened employers, like <b>Robert Owen</b> at New Lanark (Scotland, from 1800), showed that it was possible to produce well while also shortening hours, refusing to employ small children and opening schools for the workers' children. Laws protecting workers, however, came slowly, pushed by doctors' investigations, protests and trade unions."
    },
    {
      type: "example",
      title: "Worked example: reading the Declaration of 1789",
      html: `<p>Let us read a few articles and ask what they changed compared with the Old Regime:</p>
<ul>
<li><b>Art. 1</b>: "Men are born and remain free and equal in rights." → end of <b>privileges</b> of birth.</li>
<li><b>Art. 3</b>: "The principle of all sovereignty resides essentially in the nation." → power no longer comes from God but from the <b>people</b> (Rousseau).</li>
<li><b>Art. 9</b>: everyone is presumed innocent until declared guilty → <b>Beccaria</b>.</li>
<li><b>Art. 10–11</b>: freedom of opinion, including religious opinion, and of the press → <b>Voltaire</b>.</li>
<li><b>Art. 16</b>: a society without a guarantee of rights and a <b>separation of powers</b> has no constitution → <b>Montesquieu</b>.</li>
</ul>
<p>These principles return in the UN's <b>Universal Declaration of Human Rights</b> (1948) and in the Italian Constitution.</p>`
    },
    {
      type: "example",
      title: "Worked example: how much a machine produced",
      html: `<p>A spinner with the traditional spinning wheel worked <b>1 spindle</b>. With the spinning jenny she could work <b>8</b> and, in later models, up to <b>120</b>. The great <i>mules</i> of the 19th-century cotton mills reached over <b>1000 spindles</b> watched over by a few workers.</p>
<p>Between 1780 and 1850 the price of cotton yarn in England fell by about <b>90%</b>: that is why cotton clothes, once a luxury, came within everyone's reach.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the three revolutions",
      intro: "Three revolutions together can be confusing: here are other ways to put them in order.",
      tabs: [
        {
          label: "🧩 Causes → events → consequences",
          html: `<table>
<tr><th></th><th>American</th><th>French</th><th>Industrial</th></tr>
<tr><td><b>Where</b></td><td>13 colonies</td><td>France</td><td>England, then Europe</td></tr>
<tr><td><b>When</b></td><td>1775–1783</td><td>1789–1799</td><td>from about 1760</td></tr>
<tr><td><b>Cause</b></td><td>taxes without representation</td><td>privileges, debts, hunger</td><td>capital, coal, labour, inventions</td></tr>
<tr><td><b>Who leads it</b></td><td>colonists, Washington, Jefferson</td><td>the middle class and the people of Paris</td><td>entrepreneurs and inventors</td></tr>
<tr><td><b>Result</b></td><td>USA, Constitution 1787</td><td>end of the Old Regime, rights of man</td><td>factory, workers, industrial cities</td></tr>
</table>`
        },
        {
          label: "🎮 The rigged team game",
          html: `<p>Imagine a school tournament with three teams: team A has 2 players, team B 4, team C 94. Each team counts as <b>one vote</b>, and teams A and B always vote together. On top of that, team C has to pay the tournament's costs all by itself.</p>
<p>What would team C ask for? Voting <b>by head</b>: one vote for each player. That is exactly what the Third Estate asked for in 1789. When it was refused, the players of team C said: "We are the tournament" and proclaimed themselves the National Assembly.</p>`
        },
        {
          label: "🗽 On the globe: ideas cross the Atlantic",
          html: `<p>The ideas of Locke and Montesquieu go from Europe to America; the Declaration of Independence and the French soldiers returning from America (like the Marquis de <b>La Fayette</b>) bring them back to France. Meanwhile American cotton crosses the ocean to the factories of Manchester.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 51.5, lon: -0.12, label: "London", color: "#2563eb" },
              { lat: 39.95, lon: -75.16, label: "Philadelphia", color: "#0ea5e9" },
              { lat: 48.86, lon: 2.35, label: "Paris", color: "#dc2626" },
              { lat: 53.48, lon: -2.24, label: "Manchester", color: "#64748b" },
              { lat: 32.08, lon: -81.09, label: "Savannah (cotton)", color: "#f59e0b" }
            ],
            routes: [{ points: [0, 1, 2], color: "#a855f7" }, { points: [4, 3], color: "#f59e0b" }]
          }
        },
        {
          label: "⏳ Timeline",
          html: `<p>See how the three revolutions overlap in time.</p>`,
          widget: "timeline",
          options: {
            unit: "years",
            events: [
              { year: 1764, label: "Spinning jenny", icon: "🧵" },
              { year: 1769, label: "Watt's engine", icon: "⚙️" },
              { year: 1773, label: "Boston Tea Party", icon: "🫖" },
              { year: 1776, label: "US independence", icon: "🗽" },
              { year: 1783, label: "Peace of Paris", icon: "🕊️" },
              { year: 1789, label: "Storming of the Bastille", icon: "🏰" },
              { year: 1793, label: "Death of Louis XVI", icon: "⚔️" },
              { year: 1799, label: "Napoleon in power", icon: "🎖️" },
              { year: 1830, label: "Liverpool–Manchester railway", icon: "🚂" }
            ]
          }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Did you know…? There were only 7 prisoners in the Bastille",
      html: `<p>When the Parisians took it, on 14 July 1789, there were only <b>7 prisoners</b> in the Bastille: four forgers, two mentally ill men and a nobleman locked up there at his family's request. But the fortress was a <b>symbol</b> of the king's arbitrary power, since he could have anyone imprisoned without trial with a simple letter (the <i>lettre de cachet</i>). The Bastille was demolished stone by stone; souvenirs were made from some of the stones and sold all over France.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The revolutionary calendar",
      html: `<p>In 1793 the revolutionaries introduced a new <b>calendar</b>: the year began on 22 September (birth of the Republic) and the months had names linked to nature, such as <b>Thermidor</b> (month of heat), <b>Brumaire</b> (month of mists) or <b>Germinal</b> (month of germination). The week had 10 days. It was abolished by Napoleon in 1806, but the <b>metric system</b>, born in the same period, is used today in almost the whole world: the metre was defined as one ten-millionth of the distance between the North Pole and the Equator.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the revolutions: tap the nodes and find out why",
      nodes: [
        { id: "lumi", label: "Enlightenment ideas", x: 50, y: 6, color: "#f59e0b", html: "Natural rights, separation of powers, popular sovereignty, free market.", why: "Locke, Montesquieu, Rousseau and Smith had questioned the divine right of kings and privileges. These ideas gave the revolutionaries their words and programmes." },
        { id: "tasse", label: "Taxes on the colonies", x: 15, y: 25, color: "#0ea5e9", html: "Stamp Act, duty on tea: taxes decided in London.", why: "After the Seven Years' War (1756–1763) England had enormous debts and thought it fair that the colonists should pay for their own defence. The colonists, used to governing themselves, saw it as an abuse." },
        { id: "usa", label: "American independence", x: 15, y: 52, color: "#2563eb", html: "Declaration 1776, victory 1781, Constitution 1787.", why: "It was the first time a people applied Locke's ideas to found a State: it showed Europe that a modern republic was possible." },
        { id: "crisi", label: "Crisis in France", x: 50, y: 32, color: "#a855f7", html: "Debts, privileges, hunger: the Estates General of 1789.", why: "The French State spent more than it collected because the richest paid no taxes; the help given to America made the debt worse. The bad harvest of 1788 brought hunger to the cities." },
        { id: "francese", label: "French Revolution", x: 50, y: 58, color: "#dc2626", html: "Bastille, Declaration of Rights, Republic, Terror.", why: "The Third Estate, led by the middle class, wanted to count for as much as it weighed. The refusal of the king and the privileged to give way led to radicalisation, made worse by the war with the European monarchies." },
        { id: "diritti", label: "Rights of man", x: 30, y: 82, color: "#16a34a", html: "Liberty, equality before the law, sovereignty of the nation.", why: "These are the principles of the Declarations of 1776 and 1789, taken up again by the Universal Declaration of Human Rights (UN, 1948) and by our Constitution." },
        { id: "carbone", label: "Coal, capital, enclosures", x: 85, y: 25, color: "#64748b", html: "England's favourable conditions.", why: "Coal and iron mines close to each other, wealth from colonial trade, landless peasants ready to work in the towns: all the ingredients were present together." },
        { id: "vapore", label: "Steam engine", x: 85, y: 52, color: "#ea580c", html: "Watt (1769): powerful energy available anywhere.", why: "Before, factories had to stand near rivers to use water wheels. Steam, produced by burning coal, freed industry from this constraint and then drove trains and ships." },
        { id: "fabbrica", label: "Factory and proletariat", x: 70, y: 82, color: "#78716c", html: "Workers, industrial cities, child labour, trade unions.", why: "Machines were expensive: only those with capital could buy them. Those who had nothing but their own arms became wage workers. This is how the \"social question\" of the 19th century was born." }
      ],
      edges: [
        ["lumi", "tasse", "inspires the protest"],
        ["tasse", "usa", "provoke"],
        ["lumi", "crisi", "criticises privileges"],
        ["usa", "crisi", "debts and example"],
        ["crisi", "francese", "explodes into the"],
        ["usa", "diritti", "1776"],
        ["francese", "diritti", "1789"],
        ["lumi", "carbone", "Smith: free market"],
        ["carbone", "vapore", "fuels the"],
        ["vapore", "fabbrica", "creates the"]
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li><b>American</b>: taxes without representation → Boston Tea Party (1773) → Independence (4 July <b>1776</b>) → Yorktown (1781) → Constitution (1787).</li>
<li><b>French</b>: Old Regime in crisis → Estates General and Tennis Court Oath → <b>Bastille (14 July 1789)</b> → Declaration of Rights → Republic (1792) → Terror (1793–94) → Directory → Napoleon (1799).</li>
<li><b>Industrial</b>: England, from 1760; textiles and steam (Watt); factory, industrial bourgeoisie and proletariat, urbanisation, child labour.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: France and industry",
      questions: [
        { type: "mc", q: "What did the Third Estate ask for at the Estates General?", options: ["Voting by order", "Voting by head", "Abolition of Parliament"], answer: 1, explain: "With voting by head the Third Estate, which had as many deputies as the other two together, could really count." },
        { type: "order", q: "Put these events of the French Revolution in order.", items: ["Opening of the Estates General", "Tennis Court Oath", "Storming of the Bastille", "Proclamation of the Republic", "Execution of Louis XVI"], explain: "May 1789, June 1789, July 1789, September 1792, January 1793." },
        { type: "mc", q: "In which country did the Industrial Revolution begin?", options: ["France", "Italy", "England", "United States"], answer: 2, explain: "In England, from about 1760." }
      ]
    }
  ],
  glossary: [
    { t: "Old Regime", d: "The European political and social system before the French Revolution, based on absolute monarchy and privileges." },
    { t: "Third Estate", d: "In France, everyone who was neither clergy nor nobility: about 98% of the population." },
    { t: "Estates General", d: "An assembly of the representatives of the three orders of French society." },
    { t: "Constitution", d: "The fundamental law of a State that sets out rights and the organisation of powers." },
    { t: "Republic", d: "A form of State without a king, in which the head of State is elected." },
    { t: "Jacobins", d: "The most radical revolutionary group, led by Robespierre." },
    { t: "Terror", d: "The period 1793–1794 in which the revolutionary government used mass death sentences against suspected enemies." },
    { t: "Enclosures", d: "The fencing off of common land in England, which took pastures and fields away from poor peasants." },
    { t: "Proletariat", d: "The class of workers who live only on their wages." },
    { t: "Urbanisation", d: "The movement of population from the countryside to the towns." },
    { t: "Luddism", d: "A movement of English workers who destroyed machines (1811–1816)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What was the Boston Tea Party?", options: ["A party for independence", "A protest in which colonists threw chests of tea into the sea", "A peace treaty"], answer: 1, explain: "In 1773, against the tea tax." },
      { type: "text", q: "Who was the first president of the United States?", answer: ["george washington", "washington"], explain: "George Washington, elected in 1789." },
      { type: "mc", q: "Which country decisively helped the Americans against England?", options: ["Russia", "France", "Prussia"], answer: 1, explain: "France entered the war in 1778; this increased its debts." },
      { type: "num", q: "In what year did the storming of the Bastille take place?", answer: 1789, explain: "On 14 July 1789." },
      { type: "tf", q: "In Old Regime France the clergy and nobility paid most of the taxes.", answer: false, explain: "They were almost exempt: the taxes were paid by the Third Estate." },
      { type: "mc", q: "Who led the Jacobin government during the Terror?", options: ["Napoleon", "Robespierre", "Louis XVI", "La Fayette"], answer: 1, explain: "Maximilien de Robespierre, himself guillotined in July 1794." },
      { type: "mc", q: "What was the motto of the French Revolution?", options: ["God, country, family", "Liberty, equality, brotherhood", "Order and progress"], answer: 1, explain: "Liberté, Égalité, Fraternité." },
      { type: "order", q: "Put in chronological order.", items: ["Spinning jenny", "American Declaration of Independence", "Constitution of the United States", "Storming of the Bastille", "Napoleon's coup d'état"], explain: "1764, 1776, 1787, 1789, 1799." },
      { type: "mc", q: "Which of these was NOT a reason why the Industrial Revolution began in England?", options: ["Plenty of coal and iron", "Capital from colonial trade", "An absolute monarchy that controlled the economy", "Landless peasants because of the enclosures"], answer: 2, explain: "England was a parliamentary monarchy with economic freedom." },
      { type: "text", q: "Which Scottish inventor perfected the steam engine in 1769?", answer: ["james watt", "watt"], explain: "James Watt." },
      { type: "mc", q: "What is the social class of workers born with the Industrial Revolution called?", options: ["Aristocracy", "Proletariat", "Clergy"], answer: 1, explain: "The proletariat, who live only on their wages." },
      { type: "tf", q: "In the first English factories children as young as 6 also worked.", answer: true, explain: "Child labour was very widespread; the first protective laws came from 1833." }
    ],
    gen: [["percent", 1]]
  }
});
