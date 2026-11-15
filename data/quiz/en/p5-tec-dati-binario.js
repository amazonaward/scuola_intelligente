QBANK("en", "p5-tec-dati-binario", {
  "f": [
    {
      "type": "mc",
      "q": "Which digits does binary code use?",
      "options": [
        "From 0 to 9",
        "Only 0 and 1",
        "Only 1 and 2"
      ],
      "answer": 1,
      "explain": "Binary uses only two digits: 0 and 1."
    },
    {
      "type": "tf",
      "q": "A bit can only be 0 or 1.",
      "answer": true,
      "explain": "A bit is the smallest piece of information: a yes or a no."
    },
    {
      "type": "num",
      "q": "What is the binary number 11 in decimal?",
      "answer": 3,
      "explain": "The positions are worth 2 and 1: 2 + 1 = 3."
    },
    {
      "type": "mc",
      "q": "What is a transistor?",
      "options": [
        "A kind of cable",
        "A memory for photos",
        "A tiny electronic switch"
      ],
      "answer": 2,
      "explain": "A transistor is a switch that can be on (1) or off (0). Computers contain billions of them."
    },
    {
      "type": "tf",
      "q": "The Unicode code also includes emoji.",
      "answer": true,
      "explain": "Unicode has more than 150,000 characters from all languages, including emoji."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "What is the binary number 10011 in decimal?",
      "answer": 19,
      "explain": "The positions are 16, 8, 4, 2, 1: 16 + 0 + 0 + 2 + 1 = 19."
    },
    {
      "type": "mc",
      "q": "How do you write 12 in binary?",
      "options": [
        "1010",
        "1100",
        "1001"
      ],
      "answer": 1,
      "explain": "12 = 8 + 4, so the positions 8 and 4 are on: 1100."
    },
    {
      "type": "num",
      "q": "An image has 10 pixels and each pixel uses 3 bytes (red, green, blue). How many bytes does it take?",
      "answer": 30,
      "unit": "bytes",
      "explain": "10 × 3 = 30 bytes."
    },
    {
      "type": "order",
      "q": "Put these binary numbers in order from the smallest to the largest.",
      "items": [
        "101",
        "110",
        "1000",
        "1011"
      ],
      "explain": "They are worth 5, 6, 8 and 11."
    },
    {
      "type": "text",
      "q": "What is the name of the code, created in 1963, that gives a number to every letter (A = 65)?",
      "answer": [
        "ascii",
        "the ascii code",
        "ascii code"
      ],
      "explain": "ASCII gives a number to each character, which is then written in binary."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "What is the smallest number of bits needed to write 20 different values?",
      "answer": 5,
      "unit": "bits",
      "explain": "With 4 bits there are 2×2×2×2 = 16 values, too few. With 5 bits there are 32: enough. You need 5 bits."
    },
    {
      "type": "num",
      "q": "A colour drawing is made of 8 × 8 pixels and each pixel uses 3 bytes. How many bytes does it take in all?",
      "answer": 192,
      "unit": "bytes",
      "explain": "8 × 8 = 64 pixels; 64 × 3 = 192 bytes."
    },
    {
      "type": "mc",
      "q": "The bulbs 16, 2 and 1 are on (10011). You also switch on the 4 bulb. Which decimal number do you get?",
      "options": [
        "22",
        "23",
        "24"
      ],
      "answer": 1,
      "explain": "Now 16, 4, 2 and 1 are on: 16 + 4 + 2 + 1 = 23."
    },
    {
      "type": "tf",
      "q": "Going from 4 bits to 8 bits, the possible combinations just double (from 16 to 32).",
      "answer": false,
      "explain": "Each extra bit doubles the combinations: 4 extra bits multiply by 2×2×2×2 = 16, so 16 becomes 256."
    },
    {
      "type": "mc",
      "q": "Marco compares 0111 and 1000. Which statement is right?",
      "options": [
        "0111 is greater, because it has three ones",
        "1000 is greater, because it is worth 8 against 7",
        "They are equal, because both have 4 digits"
      ],
      "answer": 1,
      "explain": "0111 = 4 + 2 + 1 = 7; 1000 = 8. What counts is the value of the position, not how many ones there are."
    }
  ]
});
