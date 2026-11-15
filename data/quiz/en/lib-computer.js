QBANK("en", "lib-computer", {
  "f": [
    {
      "type": "mc",
      "q": "Where are photos and games kept even when the computer is off?",
      "options": [
        "In the RAM",
        "In the fan",
        "In the SSD"
      ],
      "answer": 2,
      "explain": "The SSD is the storage that does not forget: data stays even without power."
    },
    {
      "type": "tf",
      "q": "The keyboard is an input device.",
      "answer": true,
      "explain": "It sends the computer a code for each key pressed: it brings your commands into the computer."
    },
    {
      "type": "text",
      "q": "What are the millions of tiny dots that make up the picture on the screen called?",
      "answer": [
        "pixels",
        "pixel",
        "the pixels"
      ],
      "explain": "The screen is made of millions of colored dots called pixels."
    },
    {
      "type": "mc",
      "q": "Which part calculates the color of the pixels and draws the images?",
      "options": [
        "The motherboard",
        "The graphics card",
        "The mouse"
      ],
      "answer": 1,
      "explain": "The graphics card (GPU) calculates the color of each pixel and sends the image to the monitor."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A graphics card prepares 60 images per second. How many images does it prepare in 5 seconds of gaming?",
      "answer": 300,
      "unit": "images",
      "explain": "60 × 5 = 300 images."
    },
    {
      "type": "mc",
      "q": "When you open a game, its data is copied from the SSD into the RAM. Why?",
      "options": [
        "Because the RAM is much faster and the CPU can grab the data quickly",
        "Because the SSD empties when you open a game",
        "Because the RAM keeps data forever",
        "Because the RAM is bigger than the SSD"
      ],
      "answer": 0,
      "explain": "The RAM is the very fast workbench: the CPU reads the data of open programs there without waiting."
    },
    {
      "type": "tf",
      "q": "If you cut the power to the computer, the photos saved on the SSD disappear.",
      "answer": false,
      "explain": "False: the SSD uses flash memory chips and keeps data even without power. Only the RAM is erased."
    },
    {
      "type": "order",
      "q": "Put in order the journey of a letter you type on the keyboard.",
      "items": [
        "You press the key on the keyboard",
        "The keyboard sends a code to the computer",
        "The CPU processes the code",
        "The monitor shows the letter"
      ],
      "explain": "Input (keyboard), processing (CPU), output (monitor): this is the cycle of every computer."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Luke's computer switches off by itself after half an hour of gaming. Inside the case the CPU fan is full of dust. What is the most likely explanation?",
      "options": [
        "The RAM has filled up with photos",
        "The monitor is too big",
        "The mouse is sending too many commands",
        "The CPU gets too hot and switches off so it does not burn"
      ],
      "answer": 3,
      "explain": "With a clogged fan the heat is not carried away: the CPU overheats and shuts down to protect itself."
    },
    {
      "type": "mc",
      "q": "Which comparison between RAM and SSD is correct?",
      "options": [
        "RAM keeps data for years, the SSD loses it when you switch off",
        "RAM is very fast but empties without power; the SSD is slower but keeps data",
        "They are the same thing with two names",
        "The SSD runs program instructions, the RAM does not"
      ],
      "answer": 1,
      "explain": "RAM = fast, temporary workbench; SSD = storage room to keep things. The CPU runs the instructions."
    },
    {
      "type": "tf",
      "q": "The mouse is an output device, because it shows the arrow on the screen.",
      "answer": false,
      "explain": "False: the mouse is an input device, it sends your movements to the computer. The monitor, an output device, shows the arrow."
    },
    {
      "type": "num",
      "q": "A monitor is 400 pixels wide and 300 pixels high, and the graphics card calculates 60 images per second. How many pixel colors must it calculate in one second?",
      "answer": 7200000,
      "unit": "colors",
      "explain": "400 × 300 = 120,000 pixels per image; 120,000 × 60 = 7,200,000."
    }
  ]
});
