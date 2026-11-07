TOPIC('en', {
  id: `m1-tec-cittadinanza-digitale`,
  title: `Digital citizenship`,
  intro: `Class chats, online video games, videos, searches for homework: a part of our life takes place online. Being <b>digital citizens</b> means using the internet with <b>respect</b>, <b>safety</b> and a <b>critical mind</b>, knowing our rights and duties, just like in "live" life. Because, as a famous manifesto says, <b>virtual is real</b>. 🌐🤝🔐`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. What it means to be a digital citizen`,
      html: `<p>A citizen has rights (to be respected, to express their ideas, to be protected) and duties (to respect others and the laws). Online it is the same. Digital citizenship, which is also part of the teaching of <b>civic education</b> (Italian Law 92/2019), covers five big themes:</p>
<ol>
<li><b>Communicating with respect</b> (netiquette, no hate online);</li>
<li><b>Protecting personal data</b> (privacy);</li>
<li><b>Staying safe</b> (passwords, scams, strangers);</li>
<li><b>Evaluating information</b> (reliable sources and fake news);</li>
<li><b>Using technology in balance</b> (screen time, wellbeing).</li>
</ol>`
    },
    {
      type: `text`, title: `2. Netiquette: good manners online`,
      html: `<p><b>Netiquette</b> joins <i>net</i> and <i>etiquette</i>. The first rules were written as early as <b>1995</b> for internet users. Here are the main ones:</p>
<ul>
<li>✍️ <b>Write as you would speak in person</b>: behind the screen there is a real person, with real feelings.</li>
<li>🔠 <b>DON'T WRITE EVERYTHING IN CAPITALS</b>: online it is the same as shouting.</li>
<li>⏸️ <b>Reread before sending</b>: in a written message tone of voice and expressions are missing; a joke can look like an insult.</li>
<li>🤫 <b>Don't forward</b> other people's private photos, audio or messages without their permission.</li>
<li>💬 <b>In groups</b> (e.g. the class chat) write only things that are useful to everyone; don't leave anyone out; no chain messages and spam.</li>
<li>🌙 <b>Respect the hours</b>: don't send messages late at night.</li>
</ul>
<p>In Italy the association <i>Parole O_Stili</i> wrote in <b>2017</b> the <b>Manifesto of non-hostile communication</b>, with 10 principles such as "<i>Virtual is real</i>", "<i>Words have consequences</i>", "<i>Insults are not arguments</i>", "<i>Before speaking you have to listen</i>".</p>`
    },
    {
      type: `svg`, title: `Before publishing: the message traffic light`,
      caption: `Three questions before pressing "send": if an answer is no, stop!`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f1f5f9"/>
<rect x="40" y="20" width="110" height="260" rx="20" fill="#1f2937"/>
<circle cx="95" cy="70" r="34" fill="#ef4444"/>
<circle cx="95" cy="150" r="34" fill="#facc15"/>
<circle cx="95" cy="230" r="34" fill="#22c55e"/>
<text x="95" y="78" font-size="24" text-anchor="middle">✋</text>
<text x="95" y="158" font-size="24" text-anchor="middle">🤔</text>
<text x="95" y="238" font-size="24" text-anchor="middle">✅</text>
<text x="180" y="62" font-size="18" fill="#b91c1c" font-weight="bold">IS IT TRUE?</text>
<text x="180" y="86" font-size="15" fill="#334155">Did I check the source or am I spreading a hoax?</text>
<text x="180" y="142" font-size="18" fill="#a16207" font-weight="bold">IS IT KIND?</text>
<text x="180" y="166" font-size="15" fill="#334155">Would I say it looking the person in the eyes?</text>
<text x="180" y="222" font-size="18" fill="#15803d" font-weight="bold">IS IT USEFUL and CAN I SHARE IT?</text>
<text x="180" y="246" font-size="15" fill="#334155">Does it help anyone? Do I have permission from who appears in it?</text>
</svg>`
    },
    {
      type: `text`, title: `3. Privacy and digital footprint`,
      html: `<p><b>Personal data</b> is all the information that makes it possible to recognise a person: first name and surname, address, phone number, school attended, photo of the face, voice, GPS location…</p>
<p>Everything we publish or search for leaves a trace: it is our <b>digital footprint</b>. A published photo can be copied, saved with a screenshot and shared again: even if you delete it, <b>you can't be sure it has disappeared</b>.</p>
<p><b>What the law says:</b></p>
<ul>
<li>the <b>GDPR</b> (the European data protection regulation, in force since <b>25 May 2018</b>) protects the data of all citizens of the European Union;</li>
<li>in Italy a young person can give consent on their own to the processing of their data for online services (like social media) only from <b>14 years old</b>; before that the consent of parents is needed;</li>
<li>most social networks, in their own rules, ask for at least <b>13 years</b> to sign up;</li>
<li>publishing a photo of another person without their permission can violate their privacy.</li>
</ul>`
    },
    {
      type: `widget`, title: `Game: can I share it?`,
      widget: `classify`,
      caption: `Decide what to do with each piece of information.`,
      options: {
        groups: [`✅ I can share it`, `⚠️ I ask an adult or the person concerned first`, `⛔ I never share it online`],
        items: [
          [`The drawing I made`, 0], [`My opinion about a book`, 0], [`A cake recipe`, 0],
          [`A photo of the class on a trip`, 1], [`The video of the school play with classmates`, 1], [`The photo of a friend's birthday`, 1],
          [`My password`, 2], [`My home address`, 2], [`Where I am right now`, 2], [`An embarrassing photo of a classmate`, 2]
        ]
      }
    },
    {
      type: `quiz`, title: `Mini-quiz: netiquette and privacy`,
      questions: [
        { type: `tf`, q: `Writing EVERYTHING IN CAPITALS in a chat is the same as shouting.`, answer: true, explain: `It is one of the first rules of netiquette.` },
        { type: `mc`, q: `Which of these is personal data?`, options: [`The title of your favourite film`, `Your home address`, `The colour of the sky`], answer: 1, explain: `The address makes it possible to identify and find you.` },
        { type: `mc`, q: `In Italy, from what age can you give consent on your own for data on online services?`, options: [`10 years`, `14 years`, `18 years`], answer: 1, explain: `14 years; before that the consent of parents is needed.` }
      ]
    },
    {
      type: `text`, title: `4. Safety: passwords, scams, strangers`,
      html: `<p><b>🔐 Strong passwords</b></p>
<ul>
<li>at least <b>12 characters</b>, with upper- and lower-case letters, numbers and symbols; even better a <b>long phrase</b> that is easy for you to remember (e.g. <i>MyCatEats3Biscuits!</i>);</li>
<li>no birth dates, names, "123456" or "password";</li>
<li>a <b>different</b> password for each service, and don't tell it to anyone (except your parents);</li>
<li>turn on <b>two-step verification</b> when possible.</li>
</ul>
<p><b>🎣 Phishing</b> (from <i>fishing</i>): fake messages that seem to come from a bank, a video game or a friend and ask you to click a link or enter your password. Danger signs: <b>urgency</b> ("your account will be closed!"), <b>incredible prizes</b> ("you won 10,000 free gems!"), spelling mistakes, strange addresses.</p>
<p><b>👤 Strangers</b>: online anyone can pretend to be someone else. Never give personal information, never agree to meet in person someone you know only online and, if someone makes you uncomfortable, <b>talk about it at once with an adult</b>. It is never your fault.</p>`
    },
    {
      type: `example`, title: `Practical example: how strong is your password?`,
      html: `<p>A computer that tries all the combinations ("brute-force attack") has to make more attempts the longer and more varied the password is:</p>
<table>
<tr><th>Password</th><th>Possible characters</th><th>Combinations</th></tr>
<tr><td>4 digits (PIN)</td><td>10</td><td>10<sup>4</sup> = 10,000</td></tr>
<tr><td>8 lower-case letters</td><td>26</td><td>26<sup>8</sup> ≈ 208 billion</td></tr>
<tr><td>12 mixed characters</td><td>about 94</td><td>94<sup>12</sup> ≈ 476 sextillion (a number with 24 digits)</td></tr>
</table>
<p>Every extra character <b>multiplies</b> the combinations: it is the power of <b>powers</b>! That is why length matters more than anything.</p>`
    },
    {
      type: `text`, title: `5. Cyberbullying: recognising it and stopping it`,
      html: `<p><b>Cyberbullying</b> is bullying done with digital tools: insults in chats, deliberate exclusion from groups, embarrassing photos or videos spread around, fake profiles to make fun of someone, threats.</p>
<p>It is especially serious because: it can arrive <b>at any hour</b>, even at home; the audience is <b>huge</b>; the content <b>stays</b> and spreads; whoever offends often feels "hidden" behind the screen.</p>
<p><b>Italian law</b>: <b>Law 71 of 2017</b> (updated in 2024) was one of the first in Europe dedicated to cyberbullying. It requires every school to have a <b>teacher in charge</b> and allows a young person from <b>14 years old</b> (or their parents) to ask the website or social network operator to <b>remove</b> offensive content; if it doesn't do so within 48 hours, you can turn to the <b>Data Protection Authority (Garante della privacy)</b>.</p>
<p><b>What to do:</b> don't respond to provocations; take <b>screenshots</b> as evidence; <b>block</b> and <b>report</b>; <b>talk about it</b> with parents, teachers or with <b>Telefono Azzurro (19696)</b>. And if you are a bystander: don't "like", don't share, support whoever is being targeted. Whoever stays silent and watches helps the bully.</p>`
    },
    {
      type: `decision`, title: `In the class chat: what would you do?`,
      html: `<p>In the class chat someone posts a photo of Luca asleep on the coach on the school trip, with a caption making fun of him. In a few minutes lots of laughing emojis arrive. Luca is not in the group.</p>`,
      question: `What would you do?`,
      options: [
        { label: `I add a laughing emoji too: it's only a joke`, outcome: `Every like or laugh makes the teasing look "normal" and encourages whoever posted it. For Luca, when he finds out, it will hurt even more to see how many people laughed.` },
        { label: `I write nothing and pretend I haven't seen it`, outcome: `You don't take part, and that is already better. But silence leaves the photo there to circulate: someone could save it and forward it outside the group.` },
        { label: `I write that it isn't fair, ask for it to be deleted and tell an adult`, outcome: `This is the choice that stops cyberbullying: you show that not everyone agrees, the photo is more likely to be deleted and an adult can step in. Often one voice is enough for others to find the courage to say "stop".` },
        { label: `I forward the photo to Luca to warn him`, outcome: `The intention is good, but forwarding the photo makes it circulate even more. It is better to talk to Luca in person and tell an adult.` }
      ],
      answer: 2,
      explain: `The photo was posted without Luca's consent and is meant to mock him: it is cyberbullying behaviour. Bystanders have great power: if nobody laughs and someone says clearly "it isn't fair", the bully loses his audience. Involving an adult (teacher, the school's cyberbullying contact, parents) makes it possible to have the photo removed and to help both Luca and whoever posted it to understand the mistake.`
    },
    {
      type: `text`, title: `6. Getting informed properly: fake news and sources`,
      html: `<p>Online there is also <b>fake news</b> (hoaxes), edited photos and now also <b>deepfakes</b>: videos or audio created with artificial intelligence in which a person seems to say things they never said.</p>
<p><b>How to check, step by step:</b></p>
<ol>
<li><b>Who says it?</b> Look for the author and the site: is it a well-known newspaper, an official body, an expert?</li>
<li><b>When?</b> Check the date: old news is often shared again as if it were new.</li>
<li><b>Do others say it too?</b> Look for the same news on other reliable sources.</li>
<li><b>Is the headline exaggerated?</b> Exclamation marks, "INCREDIBLE!", "share before they delete it" are alarm bells.</li>
<li><b>Is the image real?</b> With reverse image search you can find out where and when it first appeared.</li>
</ol>
<p>And remember <b>copyright</b>: texts, music, photos and videos belong to whoever created them. For your research use content with a free licence (like <b>Creative Commons</b>) and <b>always cite the source</b>.</p>`
    },
    {
      type: `widget`, title: `The history of the internet in brief`,
      widget: `timeline`,
      caption: `From the first networks to social media and artificial intelligence.`,
      options: {
        unit: `years`,
        events: [
          { year: 1969, label: `ARPANET: first connection between computers`, icon: `🖥️` },
          { year: 1971, label: `First e-mail with the @ (Ray Tomlinson)`, icon: `📧` },
          { year: 1982, label: `First "smiley" :-) (Scott Fahlman)`, icon: `🙂` },
          { year: 1986, label: `Italy connects to the internet (Pisa)`, icon: `🇮🇹` },
          { year: 1991, label: `Tim Berners-Lee's World Wide Web (CERN)`, icon: `🌐` },
          { year: 1995, label: `The rules of netiquette`, icon: `📜` },
          { year: 2004, label: `First Safer Internet Day`, icon: `🛡️` },
          { year: 2007, label: `The modern smartphone arrives`, icon: `📱` },
          { year: 2017, label: `Italian law on cyberbullying`, icon: `⚖️` },
          { year: 2018, label: `GDPR comes into force in Europe`, icon: `🔐` }
        ]
      }
    },
    {
      type: `example`, title: `Practical example: the "giant cat" news`,
      html: `<p>In the chat arrives: <i>"INCREDIBLE!!! A 40 kg cat found in Calabria! Share before they delete it!!!"</i> with a photo.</p>
<ul>
<li><b>Who says it?</b> No author, no site: ⚠️.</li>
<li><b>Do others say it?</b> Searching for "40 kg cat Calabria" no serious newspaper comes up: ⚠️.</li>
<li><b>Headline</b>: capitals, exclamation marks, an invitation to share in a hurry: ⚠️.</li>
<li><b>Photo</b>: reverse search shows that it is an edited photo of a Maine Coon cat (the biggest domestic cats usually weigh at most 10-12 kg).</li>
</ul>
<p>Conclusion: it is a <b>hoax</b>. We don't share it, and we can kindly tell whoever sent it.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… the Web was born near Geneva?`,
      html: `<p>The <b>World Wide Web</b> (the pages with links that we browse) was invented in <b>1989-1991</b> by the English computer scientist <b>Tim Berners-Lee</b> at <b>CERN</b>, the European physics laboratory on the border between Switzerland and France, to let scientists share documents. In 1993 CERN decided to make the Web <b>free for everyone</b>, without patents: that is why it spread so much. The first website is still online at info.cern.ch.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… in Finland they learn to spot hoaxes from an early age?`,
      html: `<p><b>Finland</b> teaches <b>media literacy</b> (recognising reliable sources, propaganda and fake news) in all subjects, starting from nursery school, and has been for years at the top of European rankings for resistance to disinformation. In <b>Australia</b>, instead, since December 2025 a law has banned under-<b>16s</b> from having an account on the main social networks: a choice much discussed all over the world.</p>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `If the rules of the web seem far away, try seeing them like this.`,
      tabs: [
        {
          label: `🏙️ The internet is a city`,
          html: `<p>Imagine the internet as a <b>big city</b>:</p>
<ul>
<li><b>social media</b> are the <b>squares</b>: everyone sees and hears what you say;</li>
<li>the <b>private chat</b> is a <b>room</b>: but anyone can open the door and take a photo (screenshot);</li>
<li>the <b>password</b> is the <b>house key</b>: you don't lend it to a classmate;</li>
<li>a <b>stranger</b> online is a stranger in the street: you wouldn't tell them where you live;</li>
<li>publishing a photo is like putting it on a <b>billboard in the square</b>: everyone sees it and someone might take it down and carry it off.</li>
</ul>`
        },
        {
          label: `🪥 The toothpaste`,
          html: `<p>A famous experiment: try squeezing the toothpaste out of the tube… and then getting it back in. Impossible! <b>Words and photos published online</b> are like that: once they are out you can't "put them back". Before sending, think of the tube. 🪥</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#ecfeff"/>
<path d="M60 70 L260 60 L260 140 L60 130 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="260" y="85" width="30" height="30" fill="#e5e7eb" stroke="#334155" stroke-width="2"/>
<path d="M290 100 Q340 70 380 100 T470 100 Q500 95 520 110" stroke="#f8fafc" stroke-width="22" fill="none" stroke-linecap="round"/>
<path d="M290 100 Q340 70 380 100 T470 100 Q500 95 520 110" stroke="#22d3ee" stroke-width="8" fill="none" stroke-linecap="round"/>
<text x="160" y="105" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">message</text>
<text x="420" y="160" font-size="18" text-anchor="middle" fill="#0e7490" font-weight="bold">it can't go back in!</text>
</svg>`
        },
        {
          label: `🃏 The words of the web`,
          html: `<p>Flip the cards to revise the key words.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `🎣 Phishing`, back: `A trap message to steal passwords or data` },
              { front: `👣 Digital footprint`, back: `All the traces we leave online` },
              { front: `📜 Netiquette`, back: `Good manners online` },
              { front: `🤖 Deepfake`, back: `A fake video or audio created with AI` },
              { front: `🔐 Two-step verification`, back: `Password + code on the phone` },
              { front: `🗞️ Fake news`, back: `False news spread as if it were true` },
              { front: `🧑‍⚖️ GDPR`, back: `European data protection regulation (2018)` }
            ]
          }
        },
        {
          label: `🌍 The connected world`,
          html: `<p>The internet connects the whole planet with undersea cables and satellites. A message you send to a friend can pass through servers on other continents in less than a second! Here are some key places in the history of the web.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 46.23, lon: 6.05, label: `CERN: the Web is born (1991)`, color: `#f97316` },
              { lat: 34.07, lon: -118.44, label: `UCLA: first ARPANET node (1969)`, color: `#3b82f6` },
              { lat: 43.72, lon: 10.40, label: `Pisa: Italy on the internet (1986)`, color: `#22c55e` },
              { lat: 42.36, lon: -71.09, label: `MIT: Scratch is born (2007)`, color: `#a855f7` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: the digital citizen`,
      nodes: [
        { id: `cit`, label: `Digital citizen`, x: 50, y: 8, color: `#2563eb`, html: `Someone who uses the web in an aware, respectful and safe way.`, why: `The European Union included <b>digital competence</b> among the 8 key competences for lifelong learning (2006, updated in 2018) and created the <b>DigComp</b> framework. In Italy it is part of civic education (Law 92/2019).` },
        { id: `com`, label: `Communicating with respect`, x: 15, y: 32, color: `#ec4899`, html: `Netiquette and non-hostile communication.`, why: `In written messages tone of voice and body language are missing: psychologists call "online disinhibition effect" the tendency to be more aggressive behind a screen. The rules of netiquette (1995) and the Manifesto of non-hostile communication (2017) are there to make up for it.` },
        { id: `priv`, label: `Privacy and data`, x: 40, y: 32, color: `#8b5cf6`, html: `Protecting your own data and other people's.`, why: `The right to privacy is recognised by the <b>EU Charter of Fundamental Rights</b> (art. 8). Personal data has great economic value: many "free" services are paid for with our data, used for advertising.` },
        { id: `sic`, label: `Safety`, x: 62, y: 32, color: `#f97316`, html: `Passwords, phishing, strangers.`, why: `The strength of a password is based on the maths of <b>powers</b>: every extra character multiplies the possible combinations. Phishing, instead, exploits psychology: hurry, fear, curiosity.` },
        { id: `info`, label: `Being critically informed`, x: 85, y: 32, color: `#eab308`, html: `Checking sources, dates and images.`, why: `A study by MIT (2018) showed that on Twitter false news spread faster than true news, because it is more surprising and emotional. That is why we need to "slow down" and check.` },
        { id: `cyber`, label: `Cyberbullying`, x: 25, y: 66, color: `#dc2626`, html: `Repeated bullying with digital tools.`, why: `In Italy <b>Law 71/2017</b> was also born after the story of <b>Carolina Picchio</b>, a 14-year-old girl who was a victim of cyberbullying in 2013. Senator Elena Ferrara, her former teacher, was the first signatory of the law.` },
        { id: `leggi`, label: `Laws and rights`, x: 55, y: 66, color: `#0ea5e9`, html: `GDPR, consent at 14, copyright.`, why: `The <b>GDPR</b> (2016, in force since 2018) sets the age of digital consent at 16, but lets States lower it down to 13: Italy chose <b>14 years</b>. Copyright protects works: in Italy it is regulated by a law of 1941, updated several times.` },
        { id: `ben`, label: `Digital wellbeing`, x: 82, y: 66, color: `#22c55e`, html: `Balance between online and offline.`, why: `Many apps are designed to keep us in front of the screen for as long as possible (notifications, infinite scroll). Paediatricians recommend breaks, no screens before sleeping and "offline" moments with friends and family.` },
        { id: `aiuto`, label: `Asking for help`, x: 50, y: 92, color: `#14b8a6`, html: `Parents, teachers, Telefono Azzurro 19696, Postal Police.`, why: `No online problem is solved better alone: adults can report, have content removed and, in serious cases, turn to the <b>Postal and Communications Police</b>, which deals with computer crimes.` }
      ],
      edges: [
        [`cit`, `com`, `knows how`], [`cit`, `priv`, `protects`], [`cit`, `sic`, `practises`], [`cit`, `info`, `checks`],
        [`com`, `cyber`, `prevents`], [`priv`, `leggi`, `protected by`], [`cyber`, `leggi`, `punished by`], [`sic`, `ben`, `together with`], [`cyber`, `aiuto`, `needs`], [`leggi`, `aiuto`, `guarantee`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: safety and information`,
      questions: [
        { type: `mc`, q: `Which password is the safest?`, options: [`123456`, `Marco2012`, `MyCatEats3Biscuits!`], answer: 2, explain: `It is long, varied and contains no personal data that is easy to guess.` },
        { type: `mc`, q: `A message says "You won 10,000 gems! Enter your password here". It is…`, options: [`a gift from the game`, `probably phishing`, `a message from school`], answer: 1, explain: `Incredible prize + request for a password = phishing.` },
        { type: `tf`, q: `If a piece of news is shared by lots of people, then it is surely true.`, answer: false, explain: `Hoaxes often spread more than true news: you have to check the source.` }
      ]
    }
  ],
  glossary: [
    { t: `Digital citizenship`, d: `The ability to use the web in a responsible, safe and critical way, knowing rights and duties.` },
    { t: `Netiquette`, d: `A set of rules of good manners online.` },
    { t: `Personal data`, d: `Information that makes it possible to identify a person (name, address, photo…).` },
    { t: `Digital footprint`, d: `The set of traces we leave online.` },
    { t: `GDPR`, d: `The European regulation on the protection of personal data, in force since 2018.` },
    { t: `Phishing`, d: `A scam with fake messages to steal passwords or data.` },
    { t: `Two-step verification`, d: `Access that requires the password and a second code.` },
    { t: `Cyberbullying`, d: `Bullying through the internet and digital tools.` },
    { t: `Fake news`, d: `False news presented as true.` },
    { t: `Deepfake`, d: `Fake videos, photos or audio created with artificial intelligence.` },
    { t: `Creative Commons`, d: `Licences with which authors allow their works to be reused under certain conditions.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `What does "netiquette" mean?`, options: [`A label for online products`, `Good manners online`, `A wireless network`], answer: 1, explain: `Net + etiquette: good manners online.` },
      { type: `tf`, q: `A photo deleted from a social network has surely disappeared for ever.`, answer: false, explain: `Someone may have saved it or photographed it with a screenshot.` },
      { type: `mc`, q: `Which piece of information should you NEVER publish?`, options: [`Your favourite book`, `Your password`, `A drawing of yours`], answer: 1, explain: `The password is secret: it must not be given to anyone (except parents).` },
      { type: `num`, q: `In Italy, from how many years old can you give consent on your own for your data on online services?`, answer: 14, tol: 0, unit: `years`, explain: `14 years (the GDPR lets States choose between 13 and 16).` },
      { type: `mc`, q: `Which of these is a sign of phishing?`, options: [`An urgent message asking for a password`, `The official school page`, `A message from mum asking what time you are coming home`], answer: 0, explain: `Urgency and a request for a password are typical of phishing.` },
      { type: `mc`, q: `You see a classmate being made fun of in a chat. What is the right thing to do?`, options: [`Like it`, `Forward it to others`, `Not share it, say it isn't fair and tell an adult`], answer: 2, explain: `A bystander who steps in takes the audience away from the bully.` },
      { type: `text`, q: `What is bullying done with the internet and smartphones called?`, answer: [`cyberbullying`, `cyber-bullying`, `cyber bullying`, `online bullying`], explain: `Cyberbullying.` },
      { type: `order`, q: `Put in order the steps to check a suspicious piece of news.`, items: [`I look at who publishes it (source)`, `I check the date`, `I look for whether other reliable sources report it`, `I decide whether to share it or not`], explain: `First source and date, then comparison with other sources, finally the decision.` },
      { type: `mc`, q: `Who invented the World Wide Web?`, options: [`Tim Berners-Lee`, `Bill Gates`, `Guglielmo Marconi`], answer: 0, explain: `Tim Berners-Lee, at CERN, between 1989 and 1991.` },
      { type: `num`, q: `How many combinations does a 4-digit PIN (from 0 to 9) have?`, answer: 10000, tol: 0, explain: `10 × 10 × 10 × 10 = 10⁴ = 10,000.` },
      { type: `tf`, q: `Using a text found online for a project without citing the source is correct.`, answer: false, explain: `You must always cite the author and the source: it is respect for copyright.` },
      { type: `mc`, q: `A video in which a famous person says things they never said, created with AI, is called a…`, options: [`deepfake`, `spam`, `podcast`], answer: 0, explain: `Deepfake: fake content generated with artificial intelligence.` }
    ],
    gen: [[`power`, 2]]
  }
});
