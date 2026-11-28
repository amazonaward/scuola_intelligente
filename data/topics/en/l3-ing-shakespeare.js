TOPIC('en', {
  id: "l3-ing-shakespeare",
  title: "William Shakespeare",
  intro: "\"To be, or not to be: that is the question.\" Even people who have never read one of his plays know this line. <b>William Shakespeare</b> (1564–1616) is the greatest playwright in the English language and one of the giants of world literature: more than four hundred years after his death, his plays are performed every night all over the world and keep turning into films, ballets, operas and comics. In this literature lesson we meet the <b>man</b>, the <b>Elizabethan theatre</b> he worked in, and three masterpieces: <i>Romeo and Juliet</i>, <i>Hamlet</i> and <i>Macbeth</i>. We will also learn to read his verse, <b>blank verse</b>, and to see why his words still work today.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "1. The man and his times",
      html: `<p><b>William Shakespeare</b> was born in <b>Stratford-upon-Avon</b>, in Warwickshire, in April 1564 (he was baptised on 26 April; 23 April is the traditional date of his birth). He was the son of John, a craftsman and glove-maker, and Mary Arden. In 1582 he married Anne Hathaway, and they had three children: Susanna and the twins Hamnet and Judith. We do not know for certain how he was educated: he probably attended the local grammar school, where pupils studied mainly Latin and the classics.</p>
<p>In the late 1580s he moved to <b>London</b>, where he worked as an <b>actor</b>, a <b>playwright</b> and a <b>shareholder</b> in a theatre company. This was the <b>Lord Chamberlain's Men</b>, which in 1603, when James I came to the throne, became the <b>King's Men</b>, under the king's direct patronage. Shakespeare earned good money, bought a large house in Stratford (New Place) and went back to live there in his last years. He died on <b>23 April 1616</b>, the same year as Cervantes.</p>
<p>He wrote about <b>37–39 plays</b> (the number depends on how you count the plays written in collaboration), <b>154 sonnets</b> and some narrative poems. In <b>1623</b>, seven years after his death, two fellow actors, John Heminges and Henry Condell, published the <b>First Folio</b>: 36 plays in one large volume. Without it, half of his plays, including <i>Macbeth</i> and <i>The Tempest</i>, would never have reached us.</p>
<p>The period he lived in is called the <b>Elizabethan age</b> (after Queen Elizabeth I, 1558–1603) and then the <b>Jacobean age</b> (after James I, 1603–1625): after defeating the Spanish Armada (1588), England was a growing power with a very lively culture, and the Italian Renaissance inspired many writers (it is no coincidence that so many of the plays are set in Italy: Verona, Venice, Padua, Rome).</p>`
    },
    {
      type: "widget",
      title: "Key dates",
      widget: "timeline",
      options: {
        events: [
          { year: 1564, label: "Born in Stratford-upon-Avon", icon: "👶" },
          { year: 1582, label: "Marries Anne Hathaway", icon: "💍" },
          { year: 1595, label: "Romeo and Juliet (about)", icon: "🌹" },
          { year: 1599, label: "The Globe Theatre opens", icon: "🎭" },
          { year: 1600, label: "Hamlet (about)", icon: "💀" },
          { year: 1606, label: "Macbeth (about)", icon: "🗡️" },
          { year: 1613, label: "The Globe burns down during Henry VIII", icon: "🔥" },
          { year: 1616, label: "Dies in Stratford", icon: "🕯️" },
          { year: 1623, label: "The First Folio is published", icon: "📚" }
        ],
        unit: "years"
      },
      caption: "The dates of the plays are approximate: Shakespeare did not date them, so scholars work them out from sources, first editions and historical references."
    },
    {
      type: "text",
      title: "2. The Elizabethan theatre and the Globe",
      html: `<p>In sixteenth-century London the theatre was the most popular entertainment of all, but the city authorities viewed it with suspicion, as a source of disorder and disease (the plague often closed the theatres). This is why the first permanent playhouses were built <b>outside the city walls</b>, on the south bank of the Thames (Southwark).</p>
<p>The <b>Globe Theatre</b> was built in <b>1599</b> by Shakespeare's company. It was a round or polygonal building, <b>open to the sky</b> in the middle, with three levels of roofed galleries. In front of the thrust stage, in the open yard (<b>the pit</b> or <b>yard</b>), stood the poorest spectators, the <b>groundlings</b>, who paid just one penny; wealthier people sat in the galleries and paid more. Performances took place in the afternoon, in natural light, and the theatre could hold about 3,000 people.</p>
<ul>
<li><b>Almost no scenery</b>: few props, but splendid costumes. It was the <b>language</b> that created the place and the time: when a character says \"Look, the morn in russet mantle clad / Walks o'er the dew\" (Hamlet, Act 1), the audience sees the dawn, even at three in the afternoon.</li>
<li><b>All the actors were men</b>: female roles (Juliet, Lady Macbeth, Ophelia) were played by boys. Women only appeared on the professional stage after the Restoration, in 1660.</li>
<li><b>The audience</b> was noisy: people ate, commented, laughed and booed. That is why the plays mix serious and comic scenes, sword fights and jokes.</li>
</ul>
<p>The Globe <b>burned down</b> in 1613, during a performance of <i>Henry VIII</i>: a stage cannon set fire to the thatched roof. It was rebuilt in 1614, and the theatres were closed in 1642 by Parliament, which had a Puritan majority. A <b>modern reconstruction</b>, <i>Shakespeare's Globe</i>, opened in London in 1997, near the original site, and his plays are still performed there today.</p>`
    },
    {
      type: "svg",
      title: "The Globe: a simplified cross-section",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="150" width="300" height="110" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<rect x="60" y="120" width="300" height="30" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="60" y="90" width="300" height="30" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<polygon points="40,90 380,90 340,55 80,55" fill="#b45309" stroke="#78350f" stroke-width="3"/>
<rect x="140" y="170" width="140" height="60" fill="#a16207" stroke="#78350f" stroke-width="3"/>
<text x="210" y="205" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">STAGE</text>
<rect x="130" y="130" width="160" height="22" fill="#b45309" opacity="0.5"/>
<text x="210" y="248" font-size="14" fill="#78350f" text-anchor="middle">the yard (groundlings)</text>
<text x="210" y="80" font-size="14" fill="#ffffff" text-anchor="middle">thatched roof</text>
<text x="70" y="140" font-size="14" fill="#78350f">roofed galleries</text>
<text x="400" y="80" font-size="16" fill="#334155" font-weight="bold">Globe Theatre, 1599</text>
<text x="400" y="110" font-size="16" fill="#334155">about 3,000 spectators</text>
<text x="400" y="140" font-size="16" fill="#334155">thrust stage</text>
<text x="400" y="170" font-size="16" fill="#334155">natural light, no</text>
<text x="400" y="190" font-size="16" fill="#334155">scenery</text>
<text x="400" y="230" font-size="16" fill="#334155">male actors only</text>
</svg>`,
      caption: "Simplified diagram: the stage juts out into the open yard, surrounded by roofed galleries."
    },
    {
      type: "text",
      title: "3. Shakespeare's language: blank verse and sonnets",
      html: `<p>Shakespeare wrote his plays mostly in <b>verse</b>, in a form called <b>blank verse</b>: <b>unrhymed iambic pentameter</b>. Each line has <b>10 syllables</b> divided into 5 pairs (<i>iambs</i>), each made of an unstressed syllable followed by a stressed one: <b>da-DUM, da-DUM, da-DUM, da-DUM, da-DUM</b>, a rhythm close to a heartbeat and to natural spoken English. Example (Romeo and Juliet, Act 2, Scene 2):</p>
<p style="text-align:center"><i>But SOFT, what LIGHT through YON-der WIN-dow BREAKS?</i></p>
<p>That is 10 syllables, with the stress on the second syllable of each pair. Noble characters speak in verse, while ordinary and comic characters often speak in <b>prose</b>: a change of register signals a change of social class or of mood.</p>
<p>The <b>sonnets</b>, on the other hand, are 14-line poems in iambic pentameter, rhyming in the <b>English pattern</b>: three quatrains (ABAB CDCD EFEF) and a final couplet (GG). <b>Sonnet 18</b> is the most famous:</p>
<p style="text-align:center"><i>Shall I compare thee to a summer's day?<br>Thou art more lovely and more temperate.</i></p>
<p>The poet compares the beloved to a summer's day and concludes that, unlike summer, their beauty will live for ever in his lines.</p>
<p><b>Language.</b> Shakespeare's English is <b>Early Modern English</b>: it still has <i>thou/thee/thy</i> (informal \"you/your\"), verb endings in <i>-est/-eth</i> (<i>thou art</i>, <i>he doth</i>), and it uses <i>wherefore</i> to mean \"why\" (Juliet's \"wherefore art thou Romeo?\" means \"<i>why</i> are you Romeo?\", not \"where are you?\"). But almost everything is understandable: it is already modern English. Shakespeare is credited with the <b>first written record</b> of a great many words and expressions (for example <i>eyeball</i>, <i>lonely</i>, <i>swagger</i>, <i>break the ice</i>), although it is hard to know how many he really invented and how many were already used in speech. What is certain is that he enriched the language more than any other writer.</p>`
    },
    {
      type: "remember",
      title: "Key theatre terms",
      html: `<ul>
<li><b>Act / Scene</b>: the plays are divided into 5 acts, each made up of scenes. \"Act 3, Scene 1\".</li>
<li><b>Soliloquy</b>: a speech in which a character, alone on stage, speaks their thoughts aloud (the most famous: \"To be, or not to be\").</li>
<li><b>Aside</b>: a line spoken to the audience that the other characters do not hear.</li>
<li><b>Tragedy, comedy, history</b>: the categories used in the First Folio. Tragedies end with the death of the hero, comedies with weddings and reconciliations.</li>
<li><b>Tragic hero</b>: a hero with a great quality and a fatal weakness (<i>tragic flaw</i>) that leads to his downfall.</li>
<li><b>Blank verse</b>: unrhymed iambic pentameter.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the author and the theatre",
      questions: [
        { type: "mc", q: "Where was Shakespeare born?", options: ["London", "Stratford-upon-Avon", "Oxford"], answer: 1, explain: "He was born in Stratford-upon-Avon in 1564; he worked in London as an actor and playwright." },
        { type: "mc", q: "Who were the \"groundlings\" at the Globe?", options: ["the spectators who stood in the yard and paid a penny", "the leading actors", "the musicians in the gallery"], answer: 0, explain: "The groundlings stood in front of the stage, in the open yard: they were the ordinary, popular audience." },
        { type: "tf", q: "In Shakespeare's time female roles were played by boys.", answer: true, explain: "Women could not act in the public theatres; they were only allowed on stage after 1660." }
      ]
    },
    {
      type: "text",
      title: "4. Romeo and Juliet (about 1595)",
      html: `<p><b>Romeo and Juliet</b> is a love tragedy set in <b>Verona</b>, where two noble families, the <b>Montagues</b> and the <b>Capulets</b>, have been enemies for generations. The <b>Prologue</b> (a chorus written as a sonnet) reveals the ending from the very start: <i>\"A pair of star-cross'd lovers take their life.\"</i> The audience knows it will end badly: the tragedy lies in <i>how</i> it happens.</p>
<p><b>Plot.</b> Romeo Montague, who is in love with Rosaline, slips uninvited into a Capulet ball and meets <b>Juliet</b>, the hosts' daughter, who is not yet fourteen: it is love at first sight. Too late, they find out they belong to the two enemy families. In the famous <b>balcony scene</b> (Act 2, Scene 2) they swear their love; Juliet says:</p>
<p style="text-align:center"><i>\"What's in a name? That which we call a rose<br>By any other name would smell as sweet.\"</i></p>
<p><b>Friar Laurence</b> marries them in secret, hoping the marriage will reconcile the families. But Juliet's cousin Tybalt kills <b>Mercutio</b>, Romeo's friend; Romeo avenges his friend by killing Tybalt and is <b>banished</b> from Verona. To avoid marrying Count Paris, Juliet drinks a potion that makes her seem dead; Friar Laurence's message never reaches Romeo, who believes she is dead and poisons himself beside her. Juliet wakes up, sees Romeo dead and kills herself with his dagger. Only in front of the two bodies are the fathers reconciled.</p>
<p><b>Themes.</b> <b>Love</b> versus <b>hate</b> (the family feud); the role of <b>fate</b> (the Prologue calls them <i>star-cross'd</i>, \"thwarted by the stars\") and of <b>chance</b>; <b>haste</b> (everything happens in a few days); the contrasts between light and dark, youth and death. The source is an English poem by <b>Arthur Brooke</b> (1562), itself based on Italian novellas (Luigi da Porto, Matteo Bandello): Shakespeare turned a well-known story into a masterpiece.</p>`
    },
    {
      type: "text",
      title: "5. Hamlet (about 1600)",
      html: `<p><b>Hamlet</b> is the longest and most studied of the tragedies. Set in the castle of <b>Elsinore</b> in Denmark, it tells the story of Hamlet, Prince of Denmark and a student at Wittenberg, who comes home for his father's funeral and finds that his mother, Queen <b>Gertrude</b>, has already married his uncle <b>Claudius</b>, who is now king.</p>
<p><b>Plot.</b> His father's <b>ghost</b> appears to the prince and reveals that he was poisoned by Claudius: he asks for revenge. Hamlet is torn: is it really a ghost, or a trick of the devil? To get proof, he has a play performed in front of the king, <i>The Mousetrap</i>, which re-enacts the murder: <i>\"The play's the thing / Wherein I'll catch the conscience of the king.\"</i> Claudius gives himself away. Hamlet pretends to be mad and rejects <b>Ophelia</b>, who goes mad and drowns; by mistake he kills her father, Polonius. In the end, in a rigged duel with a poisoned sword, Gertrude, Claudius, Laertes (Ophelia's brother) and Hamlet himself all die; the Norwegian prince Fortinbras takes power.</p>
<p>The most famous <b>soliloquy</b> (Act 3, Scene 1) begins like this:</p>
<p style="text-align:center"><i>\"To be, or not to be: that is the question:<br>Whether 'tis nobler in the mind to suffer<br>The slings and arrows of outrageous fortune…\"</i></p>
<p>Hamlet wonders whether it is better to go on living and suffering or to die, and what he fears is the unknown after death: <i>\"the undiscover'd country\"</i>. Another famous line (Act 1) is spoken by a guard, Marcellus: <i>\"Something is rotten in the state of Denmark.\"</i></p>
<p><b>Themes.</b> <b>Hesitation</b> and the difficulty of acting; <b>revenge</b> and justice; <b>madness</b>, real or feigned; the <b>corruption</b> of power; the <b>play within the play</b>, in which reality and fiction mirror each other.</p>`
    },
    {
      type: "decision",
      title: "Hamlet: take revenge at once or look for proof?",
      html: "<p>You are Hamlet. A ghost who claims to be your father tells you that your uncle Claudius, now king and your mother's husband, poisoned him. He asks you to avenge him. But many people believe ghosts can be tricks of the devil, and killing a king without proof would make you look like a murderer and a usurper.</p>",
      question: "What do you do?",
      options: [
        { label: "I kill Claudius at once", outcome: "Without proof, the killing would look like regicide: Hamlet would be condemned and the throne would pass to Claudius's heir. But it would settle the moral doubt quickly, and the tragedy would be over in Act 1." },
        { label: "I look for proof before acting", outcome: "This is what Hamlet does: he stages <i>The Mousetrap</i> to watch the king's reaction. He gets his proof, but he loses time, which allows Claudius to strike back." },
        { label: "I talk to Gertrude and the council", outcome: "It would be the lawful, civilised path, but without witnesses it is the word of a 'possibly mad' son against the king's: he would probably be silenced." }
      ],
      answer: 1,
      explain: "Hamlet chooses to look for proof, and this hesitation is the heart of the play: his mind is sharp, but it slows him down, and his indecision costs many people their lives, including his own. For many critics this is exactly where the character's fascination comes from: a hero who thinks too much to act."
    },
    {
      type: "text",
      title: "6. Macbeth (about 1606)",
      html: `<p><b>Macbeth</b> is the shortest and darkest of the great tragedies, written soon after James I came to the English throne; James was (according to tradition) a descendant of Banquo and was very interested in witchcraft. The story is loosely based on Raphael Holinshed's <i>Chronicles</i>. It is set in medieval <b>Scotland</b>.</p>
<p><b>Plot.</b> Macbeth, a noble and brave general of King Duncan, wins a battle and, on his way back, meets three <b>witches</b> (<i>the Weird Sisters</i>), who hail him as \"Thane of Glamis, Thane of Cawdor, king hereafter\" and promise Banquo that his descendants will be kings. Soon afterwards Macbeth is made Thane of Cawdor: the first prophecy comes true. Urged on by his ambitious wife, <b>Lady Macbeth</b>, he murders Duncan in his sleep and takes the crown. Fearing the prophecy about Banquo, he has him murdered, but Banquo's <b>ghost</b> appears to him at a banquet. The tyrant rules by terror; he goes back to the witches, who tell him that no \"man of woman born\" can harm him and that he will be safe until Birnam Wood moves towards Dunsinane castle. But the soldiers of Malcolm, Duncan's son, disguise themselves with branches from the wood, and <b>Macduff</b>, who was \"untimely ripp'd\" from his mother's womb (born by Caesarean section), kills Macbeth. Lady Macbeth, tormented by guilt, sleepwalks, trying to wash away imaginary bloodstains (<i>\"Out, damned spot!\"</i>), and dies.</p>
<p><b>Themes.</b> Boundless <b>ambition</b>; <b>guilt</b>; the relationship between <b>fate and free will</b> (the witches predict, but it is Macbeth who chooses to kill); <b>evil</b> that feeds on itself; <b>ambiguity</b>, summed up in the witches' line <i>\"Fair is foul, and foul is fair.\"</i> When he realises that his life has lost all meaning, Macbeth speaks the famous soliloquy: <i>\"Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day.\"</i></p>
<p>The theatre world has a <b>superstition</b>: saying the name \"Macbeth\" inside a theatre brings bad luck, so actors call it <i>the Scottish play</i>.</p>`
    },
    {
      type: "example",
      title: "Worked example: close reading of a passage",
      html: `<p>Let us look at these lines from Macbeth (Act 4, Scene 1), the witches' chant around the cauldron:</p>
<p style="text-align:center"><i>\"Double, double toil and trouble;<br>Fire burn and cauldron bubble.\"</i></p>
<ul>
<li><b>Rhythm</b>: these are short 7-syllable lines in <b>trochees</b> (DOU-ble, DOU-ble TOIL and TROU-ble), not iambic pentameter: the rhythm of a <b>spell</b>, different from the speech of the nobles. The change of rhythm signals that these characters are supernatural.</li>
<li><b>Sound</b>: repetition of <i>double, double</i>, <b>alliteration</b> (<i>toil and trouble</i>), a rhyming couplet (<i>trouble / bubble</i>).</li>
<li><b>Meaning</b>: \"toil and trouble\" means hard work and misfortune; the spell promises disaster to whoever hears it.</li>
</ul>
<p>A method for any passage: 1) who is speaking, to whom, in what situation; 2) recurring words and images; 3) rhythm and sound; 4) what changes in the play after these words.</p>`
    },
    {
      type: "example",
      title: "Worked example: Shakespeare in everyday life",
      html: `<p>Many common English expressions come from Shakespeare:</p>
<ul>
<li><b>\"All that glisters is not gold\"</b> (<i>The Merchant of Venice</i>; today we say \"glitters\"): appearances can be deceptive.</li>
<li><b>\"Break the ice\"</b> (<i>The Taming of the Shrew</i>): to start a conversation and ease the tension.</li>
<li><b>\"Wild-goose chase\"</b> (<i>Romeo and Juliet</i>): a pointless search.</li>
<li><b>\"Green-eyed monster\"</b> (<i>Othello</i>): jealousy.</li>
<li><b>\"Wear my heart upon my sleeve\"</b> (<i>Othello</i>): to show your feelings openly.</li>
</ul>
<p>There are also book and film titles that quote his lines (Huxley's <i>Brave New World</i> comes from <i>The Tempest</i>), and modern adaptations: <i>West Side Story</i> (Broadway, 1957) is <i>Romeo and Juliet</i> set among rival street gangs in New York; <i>The Lion King</i> (1994) echoes <i>Hamlet</i>; Baz Luhrmann's film <i>Romeo + Juliet</i> (1996) moves the play to a contemporary city while keeping the original text.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Who wrote Shakespeare?",
      html: `<p>For more than a century some people have doubted that the man from Stratford, a glove-maker's son with no university education, could have written such learned works. Alternative candidates have been put forward (Francis Bacon, Christopher Marlowe, Edward de Vere, Earl of Oxford). <b>Scholars</b>, however, agree that the historical evidence (the name on the title pages of the printed editions, the testimony of contemporaries such as Ben Jonson, the records of the theatre company) points to William Shakespeare of Stratford. The \"authorship question\" is above all an example of how genius and social background do not match up in any simple way.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The almost-Italian playwright",
      html: `<p>Out of 37–39 plays, at least ten are set in Italy: <i>Romeo and Juliet</i> (Verona), <i>The Merchant of Venice</i> and <i>Othello</i> (Venice), <i>The Taming of the Shrew</i> (Padua), <i>The Two Gentlemen of Verona</i>, <i>Much Ado About Nothing</i> (Messina), <i>Julius Caesar</i> (Rome). We do not know whether Shakespeare ever went to Italy: he probably knew the stories from translations, tales and novellas, and from the many Italians living in London. In the Renaissance, Italy was, for the English, the home of culture, elegance and court intrigue.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways into Shakespeare",
      intro: "The sixteenth century is a long way off and the language is difficult: here are three different ways in.",
      tabs: [
        {
          label: "🎬 From film to text",
          html: `<p>First watch a film version (for example Baz Luhrmann's <i>Romeo + Juliet</i>, 1996, which uses the original text, or Kenneth Branagh's <i>Hamlet</i>, 1996, or Justin Kurzel's <i>Macbeth</i>, 2015), then read a short scene, looking for the words you have already heard. That way you have the visual context and can follow the language without getting lost. If you do not understand a line, paraphrase it in modern English, word by word: you will often find that a few changes are enough (<i>thou</i> → <i>you</i>, <i>'tis</i> → <i>it is</i>, <i>wherefore</i> → <i>why</i>).</p>`
        },
        {
          label: "🔁 Modernise a line",
          html: `<p>Try translating Shakespeare into modern English: it is an excellent language exercise.</p>
<table>
<tr><th>Shakespeare</th><th>Modern English</th></tr>
<tr><td>Wherefore art thou Romeo?</td><td>Why are you Romeo?</td></tr>
<tr><td>Thou art more lovely and more temperate.</td><td>You are lovelier and gentler.</td></tr>
<tr><td>What say you?</td><td>What do you say?</td></tr>
<tr><td>I know not why I am so sad.</td><td>I don't know why I am so sad.</td></tr>
<tr><td>'Tis nobler in the mind to suffer…</td><td>It is nobler to put up with…</td></tr>
</table>
<p>Notice that Early Modern English does not use <i>do</i> to form negatives (<i>I know not</i>), and that <i>thou</i> was the familiar, informal \"you\", while <i>you</i> was the polite, respectful form. In the plays, characters switch between <i>thou</i> and <i>you</i> to show intimacy or hostility.</p>`
        },
        {
          label: "🃏 Flashcards: characters and words",
          html: `<p>Practise remembering who is who and what some of Shakespeare's words mean.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Juliet", back: "A Capulet, not yet fourteen, in love with Romeo Montague" },
              { front: "Friar Laurence", back: "The friar who secretly marries the two lovers" },
              { front: "Claudius", back: "Hamlet's uncle, who killed his brother and took the throne" },
              { front: "Ophelia", back: "Loved by Hamlet; she goes mad and drowns" },
              { front: "Lady Macbeth", back: "Pushes her husband to kill Duncan, later sleepwalks" },
              { front: "Banquo", back: "Macbeth's friend, murdered: his ghost appears at the banquet" },
              { front: "thou / thee", back: "informal \"you\" (subject / object)" },
              { front: "wherefore", back: "why (not \"where\")" },
              { front: "hath / doth", back: "has / does (old forms in -th)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Shakespeare map: tap the nodes to find out why",
      nodes: [
        { id: "uomo", label: "Shakespeare (1564–1616)", x: 50, y: 6, color: "#6366f1", html: "Actor, playwright and shareholder in the Lord Chamberlain's / King's Men.", why: "He also owned shares in the company and in the Globe: he wrote knowing who would act each part and for what audience, which explains how practical and stage-ready his texts are." },
        { id: "teatro", label: "The Globe", x: 18, y: 30, color: "#16a34a", html: "Open-air theatre built in 1599, for about 3,000 spectators.", why: "With no scenery, the text had to create the setting through words: hence the poetic descriptions (dawn, night, the forest). The mixed audience explains the blend of tragic and comic." },
        { id: "lingua", label: "Blank verse", x: 82, y: 30, color: "#f59e0b", html: "Unrhymed iambic pentameter.", why: "The iambic rhythm is close to spoken English; Marlowe had already brought it to the stage, and Shakespeare made it flexible, varying stresses and pauses and moving between verse and prose." },
        { id: "rj", label: "Romeo and Juliet", x: 18, y: 62, color: "#ef4444", html: "Love against family hatred, in Verona.", why: "It comes from Italian novellas and Brooke's poem (1562); the Prologue announces the ending: the tragedy grows out of haste meeting chance, not out of surprise." },
        { id: "ham", label: "Hamlet", x: 50, y: 50, color: "#a855f7", html: "The indecisive prince searching for the truth.", why: "Revenge was a fashionable subject (the revenge tragedy, with Thomas Kyd as a forerunner). Shakespeare turns it into an inner drama: the real obstacle is in Hamlet's mind." },
        { id: "mac", label: "Macbeth", x: 82, y: 62, color: "#0ea5e9", html: "Ambition that leads to murder and ruin.", why: "Written under James I, who had written a treatise on witchcraft (Daemonologie, 1597): evil is shown as Macbeth's choice, not simply as fate." },
        { id: "eredita", label: "Legacy", x: 50, y: 92, color: "#14b8a6", html: "Words, expressions and adaptations still alive today.", why: "The First Folio (1623) saved half of the plays; since then actors, directors and translators have reinterpreted them in every age and country." }
      ],
      edges: [
        ["uomo", "teatro", "writes for"],
        ["teatro", "lingua", "requires"],
        ["lingua", "rj", "in"],
        ["lingua", "ham", "in"],
        ["lingua", "mac", "in"],
        ["rj", "eredita", "creates"],
        ["ham", "eredita", "creates"],
        ["mac", "eredita", "creates"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the three plays",
      questions: [
        { type: "mc", q: "In which city is Romeo and Juliet set?", options: ["Verona", "Venice", "Rome"], answer: 0, explain: "The tragedy is set in Verona, with the Montague and Capulet families; Romeo goes to Mantua during his exile." },
        { type: "tf", q: "In Hamlet the hero's father was poisoned by his uncle Claudius.", answer: true, explain: "The ghost reveals it; Claudius then marries Queen Gertrude and takes the crown." },
        { type: "mc", q: "What do the witches predict for Macbeth?", options: ["that he will become King of Scotland", "that he will die at sea", "that he will marry a queen"], answer: 0, explain: "They hail him as Thane of Glamis, Thane of Cawdor and \"king hereafter\" (future king)." }
      ]
    }
  ],
  glossary: [
    { t: "Blank verse", d: "Unrhymed iambic pentameter, the verse form of Shakespeare's plays." },
    { t: "Iambic pentameter", d: "A 10-syllable line divided into 5 iambic feet (unstressed-stressed): da-DUM ×5." },
    { t: "Sonnet", d: "A 14-line poem; the Shakespearean sonnet rhymes ABAB CDCD EFEF GG." },
    { t: "Soliloquy", d: "A speech in which a character, alone on stage, voices their thoughts." },
    { t: "Aside", d: "A line addressed to the audience that the other characters do not hear." },
    { t: "Groundlings", d: "The ordinary spectators at the Globe, standing in the yard in front of the stage." },
    { t: "First Folio", d: "The first collected edition of Shakespeare's plays, published in 1623." },
    { t: "Tragic flaw", d: "The fatal weakness of a tragic hero that causes his downfall (for Macbeth, ambition)." },
    { t: "Early Modern English", d: "The English of the 16th and 17th centuries, with forms such as thou, thee, hath, doth." },
    { t: "Elizabethan", d: "Belonging to the reign of Elizabeth I (1558–1603): the golden age of English theatre." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "When was the First Folio published?", options: ["1599", "1623", "1642"], answer: 1, explain: "In 1623, seven years after Shakespeare's death; it collected 36 plays." },
      { type: "mc", q: "What is the typical verse form of Shakespeare's plays?", options: ["eleven-syllable lines in rhyming couplets", "unrhymed iambic pentameter (blank verse)", "dactylic hexameter"], answer: 1, explain: "Blank verse has 10 syllables per line, an iambic rhythm and no rhyme." },
      { type: "tf", q: "In Shakespeare's theatre female roles were played by actresses.", answer: false, explain: "They were played by boys: women only appeared on the professional stage after 1660." },
      { type: "mc", q: "What does \"wherefore\" mean in \"Wherefore art thou Romeo?\"", options: ["where", "why", "how"], answer: 1, explain: "Wherefore means 'why': Juliet is asking why he has to be a Montague, not where he is." },
      { type: "mc", q: "Who appears to Hamlet at the beginning of the play?", options: ["his father's ghost", "three witches", "Friar Laurence"], answer: 0, explain: "The ghost of the dead king reveals that Claudius poisoned him." },
      { type: "text", q: "What is the name of Macbeth's wife, who urges him to kill King Duncan? (two words)", answer: ["lady macbeth", "lady mac beth"], explain: "Lady Macbeth, who later, tormented by guilt, walks in her sleep." },
      { type: "mc", q: "Who kills Macbeth at the end of the play?", options: ["Macduff", "Banquo", "Malcolm"], answer: 0, explain: "Macduff, born by Caesarean section (so not \"of woman born\" in the sense of the prophecy), kills the tyrant." },
      { type: "tf", q: "The Globe Theatre was destroyed by fire in 1613 during a performance of Henry VIII.", answer: true, explain: "A stage cannon set fire to the thatched roof; the theatre was rebuilt in 1614." },
      { type: "text", q: "What do we call a speech in which a character talks alone on stage? (one word)", answer: ["soliloquy", "a soliloquy"], explain: "Soliloquy: the most famous is Hamlet's \"To be, or not to be\"." },
      { type: "order", q: "Put the events of Romeo and Juliet in order.", items: ["Romeo and Juliet meet at the Capulet ball", "They marry in secret with Friar Laurence's help", "Romeo kills Tybalt and is banished", "Juliet drinks the potion and seems dead", "Romeo poisons himself and Juliet kills herself"], explain: "Meeting, secret wedding, duel and banishment, false death, double suicide at the end." }
    ]
  }
});
