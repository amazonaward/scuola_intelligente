TOPIC('en', {
  id: `m2-ita-poesia`,
  title: `Poetry and figures of speech`,
  intro: `Poetry is the most "concentrated" way of using words: it says a lot in little space and plays with <b>sounds</b>, <b>rhythm</b> and <b>images</b>. Let's learn to read a poem the way poets do: counting syllables, listening to the rhymes and discovering the <b>figures of speech</b>, the "tricks" that make words unforgettable. The verses we study are in the original Italian, with English translations in brackets.`,
  minutes: 50,
  sections: [
    {
      type: `text`,
      title: `The poetic text: line, stanza, rhyme`,
      html: `<ul>
<li>The <b>verse</b> (line) is the row of the poem. It breaks off not because the space runs out, but by the poet's choice.</li>
<li>The <b>stanza</b> (strofa) is a group of lines separated from the others by a blank space: <b>couplet</b> (2 lines), <b>tercet</b> (3), <b>quatrain</b> (4), <b>sestet</b> (6), <b>octave</b> (8).</li>
<li><b>Rhyme</b> is the sameness of sounds from the stressed vowel onwards: <i>am<b>ore</b> / cu<b>ore</b></i> (love / heart), <i>s<b>ole</b> / par<b>ole</b></i> (sun / words). The main schemes (marked with letters):
<ul>
<li><b>paired</b> (baciata): AABB</li>
<li><b>alternate</b>: ABAB</li>
<li><b>enclosed</b> (incrociata): ABBA</li>
<li><b>chained</b> (incatenata, terza rima): ABA BCB CDC (Dante's)</li>
</ul></li>
<li>If there are no rhymes we speak of <b>blank verse</b> (versi sciolti); if there is not even a fixed measure, of <b>free verse</b> (versi liberi, widely used in the twentieth century: Ungaretti, Montale).</li>
</ul>`
    },
    {
      type: `text`,
      title: `Counting syllables: metre`,
      html: `<p>Italian lines are classified by the number of <b>metrical syllables</b>: <b>settenario</b> (7), <b>ottonario</b> (8), <b>novenario</b> (9), <b>endecasillabo</b> (hendecasyllable, 11, the most important line of our poetry).</p>
<p>Metrical syllables are not always the same as grammatical ones, because of three rules:</p>
<ol>
<li><b>Synalepha</b> (sinalefe): the final vowel of a word and the initial vowel of the next word merge into a single syllable: <i>mi / ri / tro / vai / per / u / na / sel / <b>va‿o</b> / scu / ra</i> → "selva oscura" (dark wood) is read "sel-vao-scu-ra": 11 metrical syllables instead of 12 grammatical ones.</li>
<li>The <b>last stressed syllable</b> counts: you count up to the last accent and add 1. If the line ends with an oxytone word (<i>città</i>) you add a syllable; if it ends with a proparoxytone word (<i>tavola</i>) you take one away.</li>
<li><b>Diaeresis</b> (dieresi) and <b>synaeresis</b> (sineresi): sometimes two neighbouring vowels count as two syllables (diaeresis, marked with ¨: <i>sopra la rïa</i>) or as one (synaeresis).</li>
</ol>
<p>Example: <i>Nel / mez / zo / del / cam / min / di / no / stra / vi / ta</i> = <b>11 syllables</b> → hendecasyllable.</p>`
    },
    {
      type: `svg`,
      title: `The rhyme schemes`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fdf4ff"/>
<text x="20" y="32" font-size="18" font-weight="bold" fill="#701a75">Paired (AABB)</text>
<rect x="20" y="44" width="16" height="16" fill="#ec4899"/><text x="44" y="58" font-size="15" fill="#1f2937">…la sera fresca e piana <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="66" width="16" height="16" fill="#ec4899"/><text x="44" y="80" font-size="15" fill="#1f2937">…suona la campana <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="88" width="16" height="16" fill="#3b82f6"/><text x="44" y="102" font-size="15" fill="#1f2937">…il gatto sul cuscino <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="110" width="16" height="16" fill="#3b82f6"/><text x="44" y="124" font-size="15" fill="#1f2937">…dorme col suo micino <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<text x="320" y="32" font-size="18" font-weight="bold" fill="#701a75">Alternate (ABAB)</text>
<rect x="320" y="44" width="16" height="16" fill="#ec4899"/><text x="344" y="58" font-size="15" fill="#1f2937">…il vento <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="66" width="16" height="16" fill="#3b82f6"/><text x="344" y="80" font-size="15" fill="#1f2937">…le foglie <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="88" width="16" height="16" fill="#ec4899"/><text x="344" y="102" font-size="15" fill="#1f2937">…lento <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="110" width="16" height="16" fill="#3b82f6"/><text x="344" y="124" font-size="15" fill="#1f2937">…raccoglie <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<text x="20" y="175" font-size="18" font-weight="bold" fill="#701a75">Enclosed (ABBA)</text>
<rect x="20" y="187" width="16" height="16" fill="#ec4899"/><text x="44" y="201" font-size="15" fill="#1f2937">…mare <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="209" width="16" height="16" fill="#3b82f6"/><text x="44" y="223" font-size="15" fill="#1f2937">…stella <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="231" width="16" height="16" fill="#3b82f6"/><text x="44" y="245" font-size="15" fill="#1f2937">…bella <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="253" width="16" height="16" fill="#ec4899"/><text x="44" y="267" font-size="15" fill="#1f2937">…navigare <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<text x="320" y="175" font-size="18" font-weight="bold" fill="#701a75">Chained (ABA BCB)</text>
<rect x="320" y="187" width="16" height="16" fill="#ec4899"/><text x="344" y="201" font-size="15" fill="#1f2937">…vita <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="209" width="16" height="16" fill="#3b82f6"/><text x="344" y="223" font-size="15" fill="#1f2937">…oscura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="231" width="16" height="16" fill="#ec4899"/><text x="344" y="245" font-size="15" fill="#1f2937">…smarrita <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="253" width="16" height="16" fill="#3b82f6"/><text x="344" y="267" font-size="15" fill="#1f2937">…dura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="275" width="16" height="16" fill="#22c55e"/><text x="344" y="289" font-size="15" fill="#1f2937">…forte <tspan font-weight="bold" fill="#22c55e">(C)</tspan></text>
<rect x="320" y="297" width="16" height="16" fill="#3b82f6"/><text x="344" y="311" font-size="15" fill="#1f2937">…paura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
</svg>`,
      caption: `Same colour = same rhyme. The chained scheme is the one of the Divine Comedy.`
    },
    {
      type: `quiz`,
      title: `Mini-quiz: lines and rhymes`,
      questions: [
        { type: `num`, q: `How many metrical syllables does a hendecasyllable have?`, answer: 11, explain: `From the Greek héndeka = eleven.` },
        { type: `mc`, q: `The scheme ABAB is a rhyme that is…`, options: [`paired`, `alternate`, `enclosed`], answer: 1, explain: `The lines rhyme every other one: alternate.` },
        { type: `tf`, q: `With synalepha, two vowels of neighbouring words count as a single syllable.`, answer: true, explain: `E.g. "selva oscura": the "a" of selva and the "o" of oscura merge into a single metrical syllable.` }
      ]
    },
    {
      type: `text`,
      title: `Figures of sound`,
      html: `<ul>
<li><b>Alliteration</b>: repetition of the same sound at the beginning or inside of neighbouring words. <i>«<b>F</b>resche le mie parole ne la sera / ti sien come il <b>f</b>ruscìo che <b>f</b>an le <b>f</b>oglie»</i> (May my words be fresh to you in the evening, like the rustle the leaves make) (D'Annunzio).</li>
<li><b>Onomatopoeia</b>: a word that imitates a sound. <i>«<b>Tin tin</b> / di campanelle»</i> (tinkle of little bells); <i>«<b>Don… Don…</b> E mi dicono, Dormi!»</i> (Ding… dong… And they tell me, Sleep!) (Pascoli, <i>La mia sera</i>).</li>
<li><b>Paronomasia</b> (pun): putting together words with a similar sound but a different meaning. <i>«Chi <b>dice</b> donna dice <b>danno</b>»</i> (Whoever says woman says harm); <i>«<b>traduttore</b>, <b>traditore</b>»</i> (translator, traitor).</li>
<li><b>Assonance</b> and <b>consonance</b>: "imperfect" rhymes, with the same vowels (<i>c<b>a</b>s<b>a</b> / l<b>a</b>n<b>a</b></i>) or the same consonants (<i>ca<b>nt</b>o / te<b>nt</b>a</i>).</li>
</ul>`
    },
    {
      type: `text`,
      title: `Figures of meaning`,
      html: `<ul>
<li><b>Simile</b> (similitudine): comparison between two elements with <b>like, similar to, seems, appears</b>. <i>«Si sta <b>come</b> / d'autunno / sugli alberi / le foglie»</i> (We are <b>like</b> autumn leaves on the trees) (Ungaretti, <i>Soldati</i>, 1918).</li>
<li><b>Metaphor</b>: a "shortened" simile, without the "like": one word is replaced with another because of a resemblance. <i>«Sei <b>un leone</b>»</i> (You are a lion); <i>«la <b>primavera</b> della vita»</i> (the spring of life); <i>«il mare è <b>una tavola</b>»</i> (the sea is a table, i.e. flat).</li>
<li><b>Personification</b>: human qualities are given to things, animals, ideas. <i>«Il <b>sole</b> ride»</i> (The sun laughs); <i>«<b>La nebbia</b> agli irti colli / piovigginando <b>sale</b>»</i> (The mist climbs the bristling hills, drizzling) (Carducci).</li>
<li><b>Anaphora</b>: repetition of the same word at the beginning of several lines. <i>«<b>Per me</b> si va ne la città dolente, / <b>per me</b> si va ne l'etterno dolore, / <b>per me</b> si va tra la perduta gente»</i> (Through me you go into the city of woe, through me you go into eternal pain, through me you go among the lost people) (Dante, Inferno III).</li>
<li><b>Hyperbole</b>: exaggeration. <i>«Te l'ho detto <b>mille volte</b>»</i> (I've told you a thousand times); <i>«ho una fame <b>da lupi</b>»</i> (I'm as hungry as a wolf).</li>
<li><b>Synaesthesia</b> (sinestesia): sensations of different senses are joined. <i>«<b>urlo nero</b>»</i> (black scream) (Quasimodo: hearing + sight); <i>«<b>voce calda</b>»</i> (warm voice).</li>
<li><b>Oxymoron</b> (ossimoro): union of two words of opposite meaning. <i>«<b>ghiaccio bollente</b>»</i> (boiling ice), <i>«<b>silenzio assordante</b>»</i> (deafening silence), <i>«<b>dolce</b> <b>amaro</b>»</i> (bittersweet).</li>
<li><b>Metonymy</b> (metonimia): a word is used in place of another connected to it (the container for the content, the author for the work): <i>«bere <b>un bicchiere</b>»</i> (to drink a glass), <i>«leggere <b>un Montale</b>»</i> (to read a Montale).</li>
<li><b>Synecdoche</b> (sineddoche): the part for the whole. <i>«avere un <b>tetto</b>»</i> (to have a roof, i.e. a home), <i>«cento <b>vele</b>»</i> (a hundred sails, i.e. a hundred ships).</li>
</ul>`
    },
    {
      type: `text`,
      title: `Figures of order`,
      html: `<ul>
<li><b>Enumeration</b>: a list of words. <i>«Le donne, i cavallier, l'arme, gli amori, / le cortesie, l'audaci imprese io canto»</i> (Of ladies, knights, arms, loves, courtesies and bold deeds I sing) (Ariosto, <i>Orlando furioso</i>).</li>
<li><b>Climax</b>: a list in which the intensity <b>grows</b> (or falls, "anticlimax"). <i>«Mi piace, mi entusiasma, mi fa impazzire!»</i> (I like it, it thrills me, it drives me crazy!)</li>
<li><b>Anastrophe</b> (anastrofe): inversion of the normal order of words. <i>«Sempre caro <b>mi fu</b> quest'ermo colle»</i> (Leopardi, <i>L'infinito</i>) instead of "quest'ermo colle mi fu sempre caro" (this lonely hill was always dear to me).</li>
<li><b>Chiasmus</b> (chiasmo): crossing of elements following the pattern AB-BA. <i>«Bisogna <b>mangiare</b> per <b>vivere</b>, non <b>vivere</b> per <b>mangiare</b>»</i> (You must eat to live, not live to eat). In Ariosto: <i>«Le <b>donne</b>, i <b>cavallier</b>, l'<b>arme</b>, gli <b>amori</b>»</i> → donne (A) and amori (A) are linked together, like cavallieri (B) and armi (B).</li>
<li><b>Enjambement</b> (French for "stepping over"): the sentence does not end with the line and "steps over" into the next line. <i>«e il naufragar m'è dolce / in questo mare»</i> (and shipwreck is sweet to me in this sea).</li>
</ul>`
    },
    {
      type: `example`,
      title: `Practical example: let's analyse "Soldati" by Ungaretti`,
      html: `<p><i>Bosco di Courton luglio 1918</i> (Wood of Courton, July 1918)</p>
<p style="font-size:1.2em"><i>Si sta come<br>d'autunno<br>sugli alberi<br>le foglie</i></p>
<p>(We are like, in autumn, on the trees, the leaves.)</p>
<ul>
<li><b>Context</b>: Giuseppe Ungaretti fought in the First World War; the date and place (a wood in France) say where the poem was born.</li>
<li><b>Form</b>: four very short free lines, without rhyme and without punctuation. Every word weighs.</li>
<li><b>Figure of speech</b>: a <b>simile</b> (introduced by "come"): the soldiers are like the leaves in autumn, which can fall at any moment.</li>
<li><b>Meaning</b>: the <b>fragility</b> and precariousness of life in war. The title "Soldati" is necessary to understand the comparison.</li>
</ul>`
    },
    {
      type: `example`,
      title: `Practical example: paraphrase and commentary`,
      html: `<p>Let's take the beginning of <i>L'infinito</i> by Giacomo Leopardi (1819):</p>
<p><i>Sempre caro mi fu quest'ermo colle,<br>e questa siepe, che da tanta parte<br>dell'ultimo orizzonte il guardo esclude.</i></p>
<ol>
<li><b>Paraphrase</b> (rewriting in prose with today's words, in normal order): <i>This solitary hill has always been dear to me, and so has this hedge, which stops the gaze from seeing a large part of the farthest horizon.</i></li>
<li><b>Figures</b>: <b>anastrophe</b> ("sempre caro mi fu"), <b>enjambement</b> ("tanta parte / dell'ultimo orizzonte"), literary words ("ermo" = solitary, "guardo" = gaze).</li>
<li><b>Commentary</b>: the hedge that <b>hides</b> the view pushes the imagination to picture infinite spaces. Paradox: it is precisely the limit that makes us think of the infinite.</li>
</ol>`
    },
    {
      type: `widget`,
      title: `Recognise the figure of speech`,
      widget: `classify`,
      options: {
        groups: [`🪞 Simile`, `🎭 Metaphor`, `🙋 Personification`, `🔁 Anaphora`, `🎈 Hyperbole`],
        items: [
          [`Strong as an ox`, 0], [`White as snow`, 0],
          [`You are a volcano of ideas`, 1], [`That boy is a fox`, 1],
          [`The wind whispers among the branches`, 2], [`The city sleeps`, 2],
          [`I love you for… I love you for… I love you for…`, 3], [`Every day… every evening… every night…`, 3],
          [`I waited a century`, 4], [`I called you a million times`, 4]
        ]
      },
      caption: `Touch an example and then the right figure of speech.`
    },
    {
      type: `curiosity`,
      title: `Did you know…? The shortest poem`,
      html: `<p>One of the most famous (and shortest) poems of Italian literature is <b>"Mattina"</b> by Giuseppe Ungaretti (1917): <i>«M'illumino / d'immenso»</i> (I light up with immensity). Only <b>two lines and three words</b>! In Japan there is a very short poetic form, the <b>haiku</b>: three lines of 5, 7 and 5 syllables, which usually talk about nature and the seasons.</p>`
    },
    {
      type: `curiosity`,
      title: `Did you know…? Figures of speech in advertising`,
      html: `<p>Figures of speech are not only in books: <b>advertising</b>, slogans and songs are full of them! Alliterations and rhymes help us remember a brand, hyperboles make a product seem extraordinary, metaphors create strong images. We also use figures of speech every day in idioms: "you are the light of my eyes" (metaphor), "it's raining buckets" (hyperbole), "to drink a glass" (metonymy).</p>`
    },
    {
      type: `alternatives`,
      title: `Other ways to understand poetry`,
      intro: `Poetry is understood with the ears, the eyes and the body. Try these paths.`,
      tabs: [
        {
          label: `🎧 Like a song`,
          html: `<p>Songs are poems with music! They have <b>stanzas</b> and a <b>chorus</b> (which is a giant <b>anaphora</b>), <b>rhymes</b> and <b>rhythm</b>. Take the lyrics of your favourite song and try to find: how many stanzas are there? Which words rhyme? Is there a metaphor or a hyperbole? <b>Rap</b>, in particular, is full of internal rhymes, alliterations and wordplay: rappers are masters of figures of speech!</p>`
        },
        {
          label: `🥁 Beat the rhythm`,
          html: `<p>The line has a <b>rhythm</b> given by the <b>stresses</b>, like a drum kit. Read aloud, tapping your hand on the desk on the stressed syllables:</p>
<p><i>nel mez-<b>ZO</b> del cam-<b>MIN</b> di <b>NO</b>-stra <b>VI</b>-ta</i></p>
<p>The stresses fall on the 2nd, 6th, 8th and 10th syllables. In the hendecasyllable there is <b>always a stress on the 10th</b> syllable; the others change and give the line its "music". Split the line into beats and count them on your fingers!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#eff6ff"/>
<g font-size="16" text-anchor="middle" font-weight="bold">
<rect x="10" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="34" y="92" fill="#1e3a8a">nel</text>
<rect x="62" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="86" y="92" fill="#fff">mez</text>
<rect x="114" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="138" y="92" fill="#1e3a8a">zo</text>
<rect x="166" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="190" y="92" fill="#1e3a8a">del</text>
<rect x="218" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="242" y="92" fill="#1e3a8a">cam</text>
<rect x="270" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="294" y="92" fill="#fff">min</text>
<rect x="322" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="346" y="92" fill="#1e3a8a">di</text>
<rect x="374" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="398" y="92" fill="#fff">no</text>
<rect x="426" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="450" y="92" fill="#1e3a8a">stra</text>
<rect x="478" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="502" y="92" fill="#fff">vi</text>
<rect x="530" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="554" y="92" fill="#1e3a8a">ta</text>
</g>
<g font-size="14" text-anchor="middle" fill="#334155">
<text x="34" y="135">1</text><text x="86" y="135">2</text><text x="138" y="135">3</text><text x="190" y="135">4</text><text x="242" y="135">5</text><text x="294" y="135">6</text><text x="346" y="135">7</text><text x="398" y="135">8</text><text x="450" y="135">9</text><text x="502" y="135">10</text><text x="554" y="135">11</text>
</g>
<text x="300" y="40" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">🥁 = stressed syllable (blue)</text>
<text x="300" y="175" font-size="15" text-anchor="middle" fill="#334155">11 syllables, fixed stress on the 10th: hendecasyllable</text>
</svg>`
        },
        {
          label: `🖼️ Draw the metaphor`,
          html: `<p>A metaphor is an <b>image</b>. Try drawing it literally: "that boy is a <b>lion</b>" → draw a boy with a mane! Then ask yourself: <i>what do</i> the boy and the lion <i>have in common</i>? <b>Courage</b>, strength. That shared quality is the "bridge" of the metaphor. In the simile the bridge is stated (<i>brave <b>like</b> a lion</i>); in the metaphor you have to find it yourself.</p>`
        },
        {
          label: `🇯🇵 The Japanese haiku`,
          html: `<p>In Japan children learn poetry with the <b>haiku</b>: <b>3 lines</b> of <b>5 – 7 – 5 syllables</b>, an image from nature and a word that indicates the season. The most famous is by <b>Matsuo Bashō</b> (1686):</p>
<p><i>The old pond — / a frog jumps in: / the sound of water.</i></p>
<p>Try writing one yourself: count the syllables on your fingers! It is excellent training for metre.</p>`
        },
        {
          label: `🃏 Flashcards of the figures`,
          html: `<p>Flip the cards and revise.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `Simile`, back: `Comparison with "like": fast like the wind` },
              { front: `Metaphor`, back: `Comparison without "like": you are a lightning bolt` },
              { front: `Anaphora`, back: `The same word at the beginning of several lines` },
              { front: `Alliteration`, back: `Repetition of sounds: the rustle the leaves make` },
              { front: `Onomatopoeia`, back: `A word that imitates a sound: tick tock, ding dong` },
              { front: `Oxymoron`, back: `Opposites joined: boiling ice` },
              { front: `Synaesthesia`, back: `Different senses joined: black scream` },
              { front: `Enjambement`, back: `The sentence continues in the next line` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Map of poetry`,
      nodes: [
        { id: `poesia`, label: `Poetic text`, x: 50, y: 6, color: `#86198f`, html: `Text in lines that uses sound, rhythm and images.`, why: `The word comes from the Greek <i>poiéin</i>, "to make, to create". Originally poetry was <b>sung</b>: rhyme and rhythm helped people to memorise texts when writing was rare (like the Iliad and the Odyssey).` },
        { id: `metrica`, label: `Metre`, x: 20, y: 28, color: `#2563eb`, html: `The counting of syllables and stresses.`, why: `Latin metre was based on the length of syllables (long and short). When the difference in length was lost in the vernacular, people switched to counting <b>syllables</b> and <b>stresses</b>: this is how the hendecasyllable was born.` },
        { id: `endec`, label: `Hendecasyllable`, x: 12, y: 54, color: `#0ea5e9`, html: `The 11-syllable line, king of Italian poetry.`, why: `It derives from Provençal and medieval Latin lines; it was made perfect by Dante and Petrarch. It is long enough for a complete sentence and varied enough in its stresses not to be boring.` },
        { id: `rima`, label: `Rhyme`, x: 38, y: 44, color: `#ec4899`, html: `Sameness of sound from the stressed vowel onwards.`, why: `In classical Latin poetry rhyme hardly existed; it spread in <b>medieval religious hymns</b> and in the poetry of the Provençal troubadours, from which it passed to the Sicilian School.` },
        { id: `figure`, label: `Figures of speech`, x: 70, y: 28, color: `#16a34a`, html: `Particular uses of language that give strength to the text.`, why: `They were classified by Greek and Roman masters of <b>rhetoric</b> — the art of speaking in public — such as <b>Aristotle</b> and <b>Quintilian</b> (<i>Institutio oratoria</i>, 1st century AD). The Greek names (metaphor, anaphora, hyperbole) come from there.` },
        { id: `suono`, label: `Of sound`, x: 62, y: 56, color: `#f97316`, html: `Alliteration, onomatopoeia, paronomasia.`, why: `Our brain is sensitive to repeated sounds: that is why nursery rhymes and slogans are easy to remember. Pascoli and D'Annunzio, at the end of the nineteenth century, made very refined use of them.` },
        { id: `signif`, label: `Of meaning`, x: 88, y: 52, color: `#dc2626`, html: `Simile, metaphor, personification, hyperbole, oxymoron…`, why: `<i>Metaphor</i> in Greek means "transport": meaning is "carried" from one thing to another. The linguists Lakoff and Johnson (1980) showed that even in everyday speech we think in metaphors ("time is money").` },
        { id: `ordine`, label: `Of order`, x: 74, y: 82, color: `#ca8a04`, html: `Anaphora, anastrophe, chiasmus, climax, enjambement.`, why: `By changing the normal order of words, one element is brought into relief. Latin had a free word order and Italian poets inherited the taste for inversions.` },
        { id: `versolib`, label: `Free verse`, x: 30, y: 82, color: `#64748b`, html: `Lines with no fixed measure or compulsory rhyme.`, why: `It was born in the nineteenth century in France and America (Walt Whitman) and spread in the twentieth: poets like Ungaretti wanted to free the word from rules to make it express the essential.` }
      ],
      edges: [
        [`poesia`, `metrica`, `has a`],
        [`metrica`, `endec`, `main line`],
        [`poesia`, `rima`, `often uses`],
        [`poesia`, `figure`, `uses`],
        [`figure`, `suono`, ``],
        [`figure`, `signif`, ``],
        [`figure`, `ordine`, ``],
        [`metrica`, `versolib`, `breaks free in`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz: figures of speech`,
      questions: [
        { type: `mc`, q: `"The sea is a blue table" contains…`, options: [`a simile`, `a metaphor`, `an onomatopoeia`], answer: 1, explain: `The comparison is without "like": metaphor.` },
        { type: `mc`, q: `"Deafening silence" is an…`, options: [`oxymoron`, `climax`, `chiasmus`], answer: 0, explain: `It joins two opposite concepts: oxymoron.` },
        { type: `mc`, q: `"Per me si va… / per me si va… / per me si va…" is an example of…`, options: [`anaphora`, `hyperbole`, `synaesthesia`], answer: 0, explain: `Repetition at the beginning of lines: anaphora.` }
      ]
    },
    {
      type: `remember`,
      title: `To remember`,
      html: `<ul>
<li><b>Line</b>, <b>stanza</b>, <b>rhyme</b> (paired AABB, alternate ABAB, enclosed ABBA, chained ABA BCB).</li>
<li>Metrical syllables: <b>synalepha</b>, last stress + 1; hendecasyllable = 11.</li>
<li>Figures of <b>sound</b>: alliteration, onomatopoeia, paronomasia.</li>
<li>Figures of <b>meaning</b>: simile (with "like"), metaphor (without), personification, hyperbole, oxymoron, synaesthesia, metonymy.</li>
<li>Figures of <b>order</b>: anaphora, anastrophe, climax, chiasmus, enjambement.</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Verse (line)`, d: `Each row of a poem.` },
    { t: `Stanza`, d: `A group of lines separated from the others by a space.` },
    { t: `Rhyme`, d: `Sameness of sounds in the final part of two words starting from the stressed vowel.` },
    { t: `Hendecasyllable`, d: `A line of 11 metrical syllables with a stress on the 10th.` },
    { t: `Synalepha`, d: `The merging into one syllable of the final vowel of a word with the initial vowel of the next.` },
    { t: `Simile`, d: `Comparison between two elements introduced by "like" or similar words.` },
    { t: `Metaphor`, d: `Replacement of one word with another because of a resemblance, without "like".` },
    { t: `Anaphora`, d: `Repetition of a word at the beginning of successive lines or sentences.` },
    { t: `Oxymoron`, d: `Putting together two words of opposite meaning.` },
    { t: `Enjambement`, d: `When the sentence continues beyond the end of the line.` },
    { t: `Paraphrase`, d: `Rewriting the content of a poem in prose and in simple words.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `"Fast like the wind" is…`, options: [`a metaphor`, `a simile`, `an anaphora`], answer: 1, explain: `There is "like": simile.` },
      { type: `mc`, q: `The scheme ABBA is a rhyme that is…`, options: [`enclosed`, `alternate`, `paired`], answer: 0, explain: `The first line rhymes with the fourth, the second with the third.` },
      { type: `num`, q: `How many lines does a sonnet have?`, answer: 14, explain: `Two quatrains and two tercets: 4+4+3+3 = 14.` },
      { type: `tf`, q: `In onomatopoeia a word imitates a sound.`, answer: true, explain: `E.g. "tick tock", "woof", "ding dong".` },
      { type: `mc`, q: `"The sun smiles at the children" contains…`, options: [`a personification`, `an oxymoron`, `a synaesthesia`], answer: 0, explain: `The sun performs a human action: personification.` },
      { type: `text`, q: `What is the figure called in which two different senses are joined, as in "warm voice"?`, answer: [`synaesthesia`, `synesthesia`, `the synaesthesia`, `sinestesia`, `la sinestesia`], explain: `Hearing (voice) + touch (warm): synaesthesia.` },
      { type: `mc`, q: `What is enjambement?`, options: [`A rhyme between oxytone words`, `A sentence that continues into the next line`, `The repetition of a sound`], answer: 1, explain: `The sentence "steps over" the end of the line.` },
      { type: `mc`, q: `"I've told you a thousand times" is…`, options: [`a hyperbole`, `a chiasmus`, `a metonymy`], answer: 0, explain: `It is an exaggeration: hyperbole.` },
      { type: `tf`, q: `Free verse must always rhyme.`, answer: false, explain: `Free verse has neither a fixed measure nor compulsory rhyme.` },
      { type: `mc`, q: `Who wrote "Soldati" ("Si sta come d'autunno…")?`, options: [`Leopardi`, `Ungaretti`, `Pascoli`], answer: 1, explain: `Giuseppe Ungaretti, in 1918.` },
      { type: `mc`, q: `"To drink a glass" is an example of…`, options: [`metonymy`, `anaphora`, `onomatopoeia`], answer: 0, explain: `The container (glass) in place of the content: metonymy.` },
      { type: `order`, q: `Put the lines in order from the shortest to the longest.`, items: [`Settenario`, `Ottonario`, `Novenario`, `Endecasillabo`], explain: `7, 8, 9, 11 syllables.` }
    ]
  }
});
