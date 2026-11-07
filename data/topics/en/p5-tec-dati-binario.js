TOPIC('en', {
  id: `p5-tec-dati-binario`,
  title: `Data and binary code`,
  intro: `A computer can show you a photo, play you a song, write your name… and yet inside it only knows <b>two symbols</b>: <b>0</b> and <b>1</b>. How does it do it? Today we discover <b>binary code</b>, <b>bits</b> and <b>bytes</b>, and learn to write numbers, letters and pictures the way a computer "sees" them. 💻`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. What is data?`,
      html: `<p><b>Data</b> is information: a number, a word, the colour of a dot in a photo, a musical note, today's temperature.</p>
<p>A computer works with <b>electricity</b>. Inside it there are billions of tiny switches, the <b>transistors</b>, which can only be in two states:</p>
<ul>
<li>💡 <b>on</b> (current flows) = <b>1</b></li>
<li>⚫ <b>off</b> (no current) = <b>0</b></li>
</ul>
<p>Each 0 or 1 is called a <b>bit</b> (from <i>BInary digiT</i>). It is the smallest piece of information there is: a yes or a no.</p>
<p>One bit alone says very little (yes/no, on/off). But by putting <b>lots of bits in a row</b> you can represent <b>anything</b>!</p>`
    },
    {
      type: `text`, title: `2. How many combinations?`,
      html: `<p>Every extra bit <b>doubles</b> the number of possible combinations:</p>
<table>
<tr><th>Bits</th><th>Combinations</th><th>How many</th></tr>
<tr><td>1</td><td>0 · 1</td><td>2</td></tr>
<tr><td>2</td><td>00 · 01 · 10 · 11</td><td>4</td></tr>
<tr><td>3</td><td>000 · 001 · 010 · 011 · 100 · 101 · 110 · 111</td><td>8</td></tr>
<tr><td>4</td><td>…</td><td>16</td></tr>
<tr><td><b>8</b></td><td>…</td><td><b>256</b></td></tr>
</table>
<p>A group of <b>8 bits</b> is called a <b>byte</b>. With one byte you can write <b>256</b> different values (from 0 to 255): enough for all the capital and small letters, the digits and the punctuation marks!</p>`
    },
    {
      type: `text`, title: `3. Counting in binary`,
      html: `<p>We count in <b>base 10</b>: we use 10 digits (0–9) and every place is worth 10 times the one to its right (units, tens, hundreds…).</p>
<p>A computer counts in <b>base 2</b>: it uses 2 digits (0 and 1) and every place is worth <b>double</b> the one to its right:</p>
<table>
<tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr>
</table>
<p><b>From binary to decimal</b>: add up the values of the places where there is a <b>1</b>.</p>
<p>Example: <b>1101</b> ➜ 8 + 4 + 0 + 1 = <b>13</b>.</p>
<p><b>From decimal to binary</b> (the dividing-by-2 method): divide by 2 and write down the remainder; keep going until you reach 0; then read the remainders <b>from the bottom up</b>.</p>
<p>Example: 13 ÷ 2 = 6 remainder <b>1</b> · 6 ÷ 2 = 3 remainder <b>0</b> · 3 ÷ 2 = 1 remainder <b>1</b> · 1 ÷ 2 = 0 remainder <b>1</b> ➜ reading from the bottom: <b>1101</b>. ✅</p>
<p>The first numbers: 0 = 0 · 1 = 1 · 2 = 10 · 3 = 11 · 4 = 100 · 5 = 101 · 6 = 110 · 7 = 111 · 8 = 1000.</p>
<p>⚠️ In binary "10" is <b>not</b> read as "ten" but as "one-zero", and it is worth 2!</p>`
    },
    {
      type: `svg`, title: `The binary light bulbs`,
      caption: `Each lit bulb is worth the number written under it. Here 8, 4 and 1 are lit: 8 + 4 + 1 = 13, which is 1101.`,
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#0f172a"/>
<text x="300" y="34" font-size="20" text-anchor="middle" fill="#f8fafc" font-weight="bold">The number 13 in binary</text>
<g>
<circle cx="120" cy="105" r="45" fill="#facc15"/><rect x="105" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="120" y="115" font-size="30" text-anchor="middle" fill="#713f12" font-weight="bold">1</text>
<text x="120" y="200" font-size="22" text-anchor="middle" fill="#facc15" font-weight="bold">8</text>
</g>
<g>
<circle cx="240" cy="105" r="45" fill="#facc15"/><rect x="225" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="240" y="115" font-size="30" text-anchor="middle" fill="#713f12" font-weight="bold">1</text>
<text x="240" y="200" font-size="22" text-anchor="middle" fill="#facc15" font-weight="bold">4</text>
</g>
<g>
<circle cx="360" cy="105" r="45" fill="#334155" stroke="#64748b" stroke-width="3"/><rect x="345" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="360" y="115" font-size="30" text-anchor="middle" fill="#94a3b8" font-weight="bold">0</text>
<text x="360" y="200" font-size="22" text-anchor="middle" fill="#64748b" font-weight="bold">2</text>
</g>
<g>
<circle cx="480" cy="105" r="45" fill="#facc15"/><rect x="465" y="148" width="30" height="20" fill="#94a3b8"/>
<text x="480" y="115" font-size="30" text-anchor="middle" fill="#713f12" font-weight="bold">1</text>
<text x="480" y="200" font-size="22" text-anchor="middle" fill="#facc15" font-weight="bold">1</text>
</g>
<text x="300" y="240" font-size="22" text-anchor="middle" fill="#f8fafc" font-weight="bold">8 + 4 + 0 + 1 = 13</text>
</svg>`
    },
    {
      type: `widget`, title: `Every place is worth double`,
      widget: `numberLine`,
      caption: `The number line shows the "values" of the binary places: 1, 2, 4, 8, 16, 32, 64. See how each jump is double the one before!`,
      options: { min: 0, max: 64, step: 1, marks: [1, 2, 4, 8, 16, 32, 64] }
    },
    {
      type: `quiz`, title: `Mini-quiz: bits and numbers`,
      questions: [
        { type: `num`, q: `What is the binary number 101 worth in decimal?`, answer: 5, tol: 0, explain: `4 + 0 + 1 = 5.` },
        { type: `num`, q: `How many bits are there in a byte?`, answer: 8, tol: 0, unit: `bits`, explain: `1 byte = 8 bits.` },
        { type: `mc`, q: `How do you write 6 in binary?`, options: [`110`, `101`, `111`], answer: 0, explain: `4 + 2 + 0 = 6 ➜ 110.` }
      ]
    },
    {
      type: `text`, title: `4. Letters, pictures and sounds`,
      html: `<p><b>🔤 Letters</b>: every character has a number, set by a code that is the same for all computers. The first famous code was <b>ASCII</b> (1963): <b>A = 65</b>, B = 66, C = 67… a = 97, space = 32. The number is then written in binary: A = 65 = <b>01000001</b>. Today we use <b>Unicode</b>, which contains more than 150,000 characters from all the world's languages, including emojis 😀!</p>
<p><b>🖼️ Pictures</b>: a photo is divided into a grid of little squares, the <b>pixels</b>. For each pixel the computer stores the colour using three numbers: how much <b>red</b>, how much <b>green</b> and how much <b>blue</b> (<b>RGB</b>), each from 0 to 255, which is one byte each. Mixing them gives more than 16 million colours!</p>
<p><b>🎵 Sounds</b>: the microphone measures thousands of times a second how much the air is vibrating (for CD music: 44,100 times a second) and saves each measurement as a number.</p>
<p>In the end, everything becomes a very long row of 0s and 1s.</p>`
    },
    {
      type: `svg`, title: `A picture made of bits`,
      caption: `Each row is a byte: 1 = coloured square, 0 = white. This is, in a simplified way, how a computer stores a black-and-white picture.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="16" font-family="monospace" fill="#0f172a">
<text x="20" y="48">0 1 1 0 0 1 1 0</text>
<text x="20" y="78">1 1 1 1 1 1 1 1</text>
<text x="20" y="108">1 1 1 1 1 1 1 1</text>
<text x="20" y="138">1 1 1 1 1 1 1 1</text>
<text x="20" y="168">0 1 1 1 1 1 1 0</text>
<text x="20" y="198">0 0 1 1 1 1 0 0</text>
<text x="20" y="228">0 0 0 1 1 0 0 0</text>
<text x="20" y="258">0 0 0 0 0 0 0 0</text>
</g>
<text x="225" y="150" font-size="34" fill="#64748b">➜</text>
<g stroke="#cbd5e1" stroke-width="1">
<rect x="300" y="30" width="30" height="30" fill="#ffffff"/><rect x="330" y="30" width="30" height="30" fill="#ef4444"/><rect x="360" y="30" width="30" height="30" fill="#ef4444"/><rect x="390" y="30" width="30" height="30" fill="#ffffff"/><rect x="420" y="30" width="30" height="30" fill="#ffffff"/><rect x="450" y="30" width="30" height="30" fill="#ef4444"/><rect x="480" y="30" width="30" height="30" fill="#ef4444"/><rect x="510" y="30" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="60" width="30" height="30" fill="#ef4444"/><rect x="330" y="60" width="30" height="30" fill="#ef4444"/><rect x="360" y="60" width="30" height="30" fill="#ef4444"/><rect x="390" y="60" width="30" height="30" fill="#ef4444"/><rect x="420" y="60" width="30" height="30" fill="#ef4444"/><rect x="450" y="60" width="30" height="30" fill="#ef4444"/><rect x="480" y="60" width="30" height="30" fill="#ef4444"/><rect x="510" y="60" width="30" height="30" fill="#ef4444"/>
<rect x="300" y="90" width="30" height="30" fill="#ef4444"/><rect x="330" y="90" width="30" height="30" fill="#ef4444"/><rect x="360" y="90" width="30" height="30" fill="#ef4444"/><rect x="390" y="90" width="30" height="30" fill="#ef4444"/><rect x="420" y="90" width="30" height="30" fill="#ef4444"/><rect x="450" y="90" width="30" height="30" fill="#ef4444"/><rect x="480" y="90" width="30" height="30" fill="#ef4444"/><rect x="510" y="90" width="30" height="30" fill="#ef4444"/>
<rect x="300" y="120" width="30" height="30" fill="#ef4444"/><rect x="330" y="120" width="30" height="30" fill="#ef4444"/><rect x="360" y="120" width="30" height="30" fill="#ef4444"/><rect x="390" y="120" width="30" height="30" fill="#ef4444"/><rect x="420" y="120" width="30" height="30" fill="#ef4444"/><rect x="450" y="120" width="30" height="30" fill="#ef4444"/><rect x="480" y="120" width="30" height="30" fill="#ef4444"/><rect x="510" y="120" width="30" height="30" fill="#ef4444"/>
<rect x="300" y="150" width="30" height="30" fill="#ffffff"/><rect x="330" y="150" width="30" height="30" fill="#ef4444"/><rect x="360" y="150" width="30" height="30" fill="#ef4444"/><rect x="390" y="150" width="30" height="30" fill="#ef4444"/><rect x="420" y="150" width="30" height="30" fill="#ef4444"/><rect x="450" y="150" width="30" height="30" fill="#ef4444"/><rect x="480" y="150" width="30" height="30" fill="#ef4444"/><rect x="510" y="150" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="180" width="30" height="30" fill="#ffffff"/><rect x="330" y="180" width="30" height="30" fill="#ffffff"/><rect x="360" y="180" width="30" height="30" fill="#ef4444"/><rect x="390" y="180" width="30" height="30" fill="#ef4444"/><rect x="420" y="180" width="30" height="30" fill="#ef4444"/><rect x="450" y="180" width="30" height="30" fill="#ef4444"/><rect x="480" y="180" width="30" height="30" fill="#ffffff"/><rect x="510" y="180" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="210" width="30" height="30" fill="#ffffff"/><rect x="330" y="210" width="30" height="30" fill="#ffffff"/><rect x="360" y="210" width="30" height="30" fill="#ffffff"/><rect x="390" y="210" width="30" height="30" fill="#ef4444"/><rect x="420" y="210" width="30" height="30" fill="#ef4444"/><rect x="450" y="210" width="30" height="30" fill="#ffffff"/><rect x="480" y="210" width="30" height="30" fill="#ffffff"/><rect x="510" y="210" width="30" height="30" fill="#ffffff"/>
<rect x="300" y="240" width="30" height="30" fill="#ffffff"/><rect x="330" y="240" width="30" height="30" fill="#ffffff"/><rect x="360" y="240" width="30" height="30" fill="#ffffff"/><rect x="390" y="240" width="30" height="30" fill="#ffffff"/><rect x="420" y="240" width="30" height="30" fill="#ffffff"/><rect x="450" y="240" width="30" height="30" fill="#ffffff"/><rect x="480" y="240" width="30" height="30" fill="#ffffff"/><rect x="510" y="240" width="30" height="30" fill="#ffffff"/>
</g>
</svg>`
    },
    {
      type: `text`, title: `5. How heavy is data?`,
      html: `<p>Just as metres have kilometres, bytes have bigger units too:</p>
<table>
<tr><th>Unit</th><th>Worth (roughly)</th><th>What fits in it</th></tr>
<tr><td><b>1 byte</b> (B)</td><td>8 bits</td><td>one letter</td></tr>
<tr><td><b>1 kilobyte</b> (kB)</td><td>1,000 bytes</td><td>half a page of text</td></tr>
<tr><td><b>1 megabyte</b> (MB)</td><td>1,000 kB = 1 million bytes</td><td>a whole book of plain text, or a photo</td></tr>
<tr><td><b>1 gigabyte</b> (GB)</td><td>1,000 MB = 1 billion bytes</td><td>about an hour of film</td></tr>
<tr><td><b>1 terabyte</b> (TB)</td><td>1,000 GB</td><td>hundreds of thousands of photos</td></tr>
</table>
<p>Note: sometimes, in computing, the multiples are worth <b>1,024</b> instead of 1,000 (because 1024 = 2<sup>10</sup>). For now it is enough to remember "about a thousand".</p>`
    },
    {
      type: `example`, title: `Practical example: write your name in binary`,
      html: `<p>Let's try with <b>CIAO</b>. We use the ASCII code for capital letters (A = 65, B = 66 … each letter +1):</p>
<table>
<tr><th>Letter</th><th>Code</th><th>Binary (8 bits)</th></tr>
<tr><td>C</td><td>67</td><td>01000011</td></tr>
<tr><td>I</td><td>73</td><td>01001001</td></tr>
<tr><td>A</td><td>65</td><td>01000001</td></tr>
<tr><td>O</td><td>79</td><td>01001111</td></tr>
</table>
<p>Check the C: 64 + 2 + 1 = 67 ✅. All capital letters start with <b>010</b>; the other 5 digits tell you the position in the alphabet (C is the 3rd letter: 00011 = 3).</p>
<p>Now try it with your own name! Four letters "weigh" 4 bytes = 32 bits.</p>`
    },
    {
      type: `example`, title: `Practical example: a binary card game`,
      html: `<p>Take 5 cards and draw dots on them: <b>16, 8, 4, 2, 1</b>. Put them in a row with the dots showing (1) or turned face down (0).</p>
<ul>
<li>Want to make <b>10</b>? Turn up only 8 and 2 ➜ <b>01010</b>.</li>
<li>Want to make <b>21</b>? 16 + 4 + 1 ➜ <b>10101</b>.</li>
<li>What is the biggest number you can make? All cards face up: 16 + 8 + 4 + 2 + 1 = <b>31</b> = 11111.</li>
</ul>
<p>This activity comes from <b>CS Unplugged</b>, a New Zealand project for learning computer science <b>without computers</b>.</p>`
    },
    {
      type: `remember`, title: `Remember`,
      html: `<ul>
<li><b>Bit</b> = 0 or 1, the smallest piece of information. <b>Byte</b> = 8 bits = 256 values.</li>
<li>Binary ➜ decimal: add up the values (1, 2, 4, 8, 16…) where there is a 1.</li>
<li>Decimal ➜ binary: divide by 2 and read the remainders from the bottom up.</li>
<li>Letters = codes (ASCII/Unicode); pictures = pixels with RGB; sounds = measurements of vibration.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Did you know… binary is older than the computer?`,
      html: `<p>The German mathematician <b>Gottfried Wilhelm Leibniz</b> described the binary system in <b>1703</b>, more than 200 years before the first computer! He was fascinated by the fact that with just 0 and 1 you could write every number. In 1854 the Englishman <b>George Boole</b> invented an algebra made only of "true" and "false", and in 1937 the American <b>Claude Shannon</b> realised it could be built with electric circuits: the idea of the digital computer was born.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… Braille is a binary code too?`,
      html: `<p>The <b>Braille</b> alphabet, invented in 1824 by the Frenchman Louis Braille (who had been blind since childhood), uses cells of <b>6 raised dots</b>: each dot is either there (1) or not there (0). How many combinations? 2 × 2 × 2 × 2 × 2 × 2 = <b>64</b>, enough for all the letters, numbers and punctuation. Louis Braille was only 15 years old!</p>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `Binary only seems strange because we are used to counting with 10 fingers. Here are other routes.`,
      tabs: [
        {
          label: `🖐️ Counting on your fingers`,
          html: `<p>With the fingers of one hand you can usually reach 5. But if each finger is a bit (raised = 1, lowered = 0) and is worth double the one before:</p>
<ul>
<li>thumb = 1 · index finger = 2 · middle finger = 4 · ring finger = 8 · little finger = 16</li>
</ul>
<p>With <b>one hand</b> you reach <b>31</b>, with two hands <b>1023</b>! Try it: to make 3 raise your thumb and index finger; to make 5 raise your thumb and middle finger.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fef9c3"/>
<rect x="190" y="120" width="220" height="90" rx="40" fill="#fdba74"/>
<rect x="150" y="110" width="40" height="70" rx="20" fill="#fdba74" transform="rotate(-35 170 145)"/>
<rect x="205" y="30" width="36" height="100" rx="18" fill="#fdba74"/>
<rect x="250" y="15" width="36" height="115" rx="18" fill="#fdba74"/>
<rect x="295" y="25" width="36" height="105" rx="18" fill="#fdba74"/>
<rect x="340" y="50" width="34" height="80" rx="17" fill="#fdba74"/>
<g font-size="18" text-anchor="middle" font-weight="bold" fill="#7c2d12">
<text x="140" y="110">1</text><text x="223" y="25">2</text><text x="268" y="12">4</text><text x="313" y="20">8</text><text x="357" y="45">16</text>
</g>
<text x="500" y="110" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">all up =</text>
<text x="500" y="140" font-size="26" text-anchor="middle" fill="#b91c1c" font-weight="bold">31</text>
</svg>`
        },
        {
          label: `🧮 Like the abacus`,
          html: `<p>You know the abacus: in the units column, when you reach 10 beads, you take them off and put 1 in the tens. Binary is the same, but the "exchange" happens at <b>2</b>: as soon as you have 2 beads in a column, you take them off and put 1 in the column to the left.</p>
<p>Try counting in base 10 on the abacus below, and imagine that each column can only hold 0 or 1 bead: that is binary!</p>`,
          widget: `abacus`,
          options: { columns: ['h', 'da', 'u'], value: 101 }
        },
        {
          label: `🔦 Messages with a torch`,
          html: `<p>Other codes also use just two signals:</p>
<ul>
<li><b>Morse code</b> (Samuel Morse, 1830s): dot and dash. SOS = · · · — — — · · ·</li>
<li><b>I Ching</b> (ancient China, about 3000 years ago): solid and broken lines in groups of 6 = 64 hexagrams. Leibniz studied them and saw his binary system in them!</li>
<li><b>Naval flags and smoke signals</b>: there / not there.</li>
</ul>
<p>Try it with a friend: with a torch, long flash = 1, short flash = 0. Send each other a number!</p>`
        },
        {
          label: `🔗 Match`,
          html: `<p>Match each binary number with its decimal value.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`1`, `1`], [`10`, `2`], [`11`, `3`], [`100`, `4`], [`111`, `7`], [`1000`, `8`], [`1010`, `10`], [`1111`, `15`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: from the bit to the computer`,
      nodes: [
        { id: `bit`, label: `Bit (0/1)`, x: 50, y: 8, color: `#3b82f6`, html: `The smallest unit of information.`, why: `The name <i>bit</i> (binary digit) was suggested by the mathematician John Tukey and used by <b>Claude Shannon</b> in 1948 in the paper that founded "information theory".` },
        { id: `trans`, label: `Transistor`, x: 15, y: 30, color: `#64748b`, html: `An electronic switch: on or off.`, why: `It was invented in <b>1947</b> at Bell Labs (USA) by Bardeen, Brattain and Shockley, who won the Nobel Prize. Before that, valves as big as light bulbs were used. Today a processor contains billions of transistors.` },
        { id: `base2`, label: `Base 2`, x: 50, y: 30, color: `#a855f7`, html: `Every place is worth double: 1, 2, 4, 8, 16…`, why: `Described by <b>Leibniz</b> in 1703. Computers use it because telling apart just two electrical states (current / no current) is much more reliable than telling apart ten.` },
        { id: `boole`, label: `Boolean logic`, x: 85, y: 30, color: `#ef4444`, html: `True/false, AND, OR, NOT.`, why: `<b>George Boole</b> (1854) turned reasoning into calculations with 0 and 1. In 1937 <b>Claude Shannon</b>, aged 21, showed that circuits with switches could do these calculations.` },
        { id: `byte`, label: `Byte = 8 bits`, x: 30, y: 55, color: `#22c55e`, html: `256 combinations: one character.`, why: `The word was coined by Werner Buchholz at IBM in 1956. 8 bits became the standard with the IBM System/360 computer (1964), because they were enough for letters, numbers and symbols.` },
        { id: `ascii`, label: `Codes: ASCII, Unicode`, x: 12, y: 80, color: `#16a34a`, html: `Every character has a number.`, why: `<b>ASCII</b> (1963) was created in the USA so that different computers could exchange texts. It only contained the English alphabet, so in 1991 <b>Unicode</b> was born, for all the world's languages.` },
        { id: `pixel`, label: `Pixels and RGB`, x: 42, y: 80, color: `#f97316`, html: `Pictures as a grid of colours.`, why: `"Pixel" comes from <i>picture element</i>. Colours are made with red, green and blue because the human eye has three types of "sensors" (cones) that are sensitive to exactly these colours.` },
        { id: `units`, label: `kB, MB, GB, TB`, x: 75, y: 62, color: `#eab308`, html: `The multiples of the byte.`, why: `They use the prefixes of the International System of Units (kilo = thousand, mega = million, giga = billion). In computing they are sometimes powers of 2 (1024): that is why in 1998 the names kibibyte, mebibyte… were created.` },
        { id: `data`, label: `Data`, x: 75, y: 88, color: `#0ea5e9`, html: `Texts, photos, sounds, videos: everything becomes numbers.`, why: `Turning information into numbers is called <b>digitising</b> (from <i>digit</i>). Once they are numbers, data can be copied without errors, compressed and sent all over the world.` }
      ],
      edges: [
        [`trans`, `bit`, `stores`], [`base2`, `bit`, `uses`], [`boole`, `bit`, `calculates with`], [`bit`, `byte`, `8 make a`],
        [`byte`, `ascii`, `encodes`], [`byte`, `pixel`, `colours`], [`byte`, `units`, `is measured in`], [`units`, `data`, `amount of`], [`pixel`, `data`, `is a kind of`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: codes and measures`,
      questions: [
        { type: `mc`, q: `What does RGB stand for?`, options: [`Red, Yellow, White`, `Red, Green, Blue`, `Rapid, Great, Binary`], answer: 1, explain: `Red, Green, Blue: the three colours mixed for every pixel.` },
        { type: `tf`, q: `1 megabyte is bigger than 1 gigabyte.`, answer: false, explain: `1 GB ≈ 1000 MB.` },
        { type: `num`, q: `How many combinations can you make with 3 bits?`, answer: 8, tol: 0, explain: `2 × 2 × 2 = 8.` }
      ]
    }
  ],
  glossary: [
    { t: `Data`, d: `A piece of information (number, text, picture, sound) that can be stored.` },
    { t: `Bit`, d: `A binary digit: 0 or 1.` },
    { t: `Byte`, d: `A group of 8 bits; it can have 256 values.` },
    { t: `Binary code`, d: `A system that represents information with only 0s and 1s.` },
    { t: `Base 2`, d: `A number system with two digits in which every place is worth double the previous one.` },
    { t: `Transistor`, d: `A tiny electronic switch, the "building block" of computers.` },
    { t: `ASCII / Unicode`, d: `Codes that give a number to every character.` },
    { t: `Pixel`, d: `The smallest square of colour in a digital picture.` },
    { t: `RGB`, d: `Red, green, blue: the three basic colours of pictures on a screen.` },
    { t: `Digitise`, d: `To turn information into numbers a computer can use.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `What is the binary number 1010 worth in decimal?`, answer: 10, tol: 0, explain: `8 + 0 + 2 + 0 = 10.` },
      { type: `num`, q: `What is the binary number 11111 worth in decimal?`, answer: 31, tol: 0, explain: `16 + 8 + 4 + 2 + 1 = 31.` },
      { type: `text`, q: `Write 9 in binary.`, answer: [`1001`, `00001001`], explain: `9 = 8 + 1 ➜ 1001.` },
      { type: `mc`, q: `How many different values can a byte have?`, options: [`8`, `100`, `256`], answer: 2, explain: `2 to the power of 8 = 256 (from 0 to 255).` },
      { type: `tf`, q: `Computers use binary because transistors have two states: on and off.`, answer: true, explain: `Two electrical states are easy to tell apart without mistakes.` },
      { type: `order`, q: `Put these in order from the smallest to the biggest.`, items: [`bit`, `byte`, `kilobyte`, `megabyte`, `gigabyte`], explain: `bit < byte (8 bits) < kB < MB < GB.` },
      { type: `mc`, q: `In ASCII code the letter A is worth…`, options: [`1`, `65`, `100`], answer: 1, explain: `A = 65 = 01000001.` },
      { type: `mc`, q: `Who described the binary system in 1703?`, options: [`Leibniz`, `Galileo`, `Leonardo da Vinci`], answer: 0, explain: `Gottfried Wilhelm Leibniz.` },
      { type: `mc`, q: `A digital photo is made of…`, options: [`pixels`, `musical bytes`, `coloured transistors`], answer: 0, explain: `A grid of pixels, each with its own RGB colour.` },
      { type: `num`, q: `In binary, what is the place to the left of the 16 worth?`, answer: 32, tol: 0, explain: `Every place is worth double: 16 × 2 = 32.` },
      { type: `tf`, q: `In binary "10" is worth ten.`, answer: false, explain: `In binary 10 = 2 (one 2 and no 1s).` },
      { type: `mc`, q: `Braille uses cells of 6 dots. How many combinations are there?`, options: [`12`, `36`, `64`], answer: 2, explain: `2 to the power of 6 = 64.` }
    ],
    gen: [['power', 2]]
  }
});
