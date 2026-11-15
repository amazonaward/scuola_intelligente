QBANK("en", "lib-lampadina", {
  "f": [
    {
      "type": "mc",
      "q": "Which bulb uses less energy to give the same light?",
      "options": [
        "The incandescent one",
        "The LED one",
        "They use the same"
      ],
      "answer": 1,
      "explain": "The LED makes light almost without heating up, so it uses much less."
    },
    {
      "type": "tf",
      "q": "An incandescent bulb gets hot because almost all the energy turns into heat.",
      "answer": true,
      "explain": "About 95 parts out of 100 become heat and only 5 become light."
    },
    {
      "type": "text",
      "q": "What is the metal part of the bulb that screws into the lamp holder called?",
      "answer": [
        "screw base",
        "the screw base",
        "base",
        "the base",
        "cap",
        "the cap",
        "screw cap",
        "socket base"
      ],
      "explain": "The screw base brings the current from the lamp holder to the bulb."
    },
    {
      "type": "mc",
      "q": "Who made the incandescent bulb practical in 1879?",
      "options": [
        "Isaac Newton",
        "Leonardo da Vinci",
        "Thomas Edison"
      ],
      "answer": 2,
      "explain": "Edison used a carbonized bamboo filament, but other inventors were working on it too."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A 100-watt incandescent bulb is replaced by a 12-watt LED that gives the same light. How many watts are saved by changing 5 bulbs?",
      "answer": 440,
      "unit": "watts",
      "explain": "100 − 12 = 88 watts per bulb; 88 × 5 = 440 watts."
    },
    {
      "type": "mc",
      "q": "Why does the filament get white-hot while the wires carrying the current stay cool?",
      "options": [
        "Because the filament is extremely thin and the current has trouble passing through it",
        "Because the filament is made of wood",
        "Because the wires have no current",
        "Because the filament is painted black"
      ],
      "answer": 0,
      "explain": "In the very thin wire the current meets a lot of difficulty and heats it up; in thick wires it passes easily."
    },
    {
      "type": "tf",
      "q": "An LED gives out light directly, without having to become white-hot.",
      "answer": true,
      "explain": "When current passes through it, electrons release their energy as light, with almost no heat."
    },
    {
      "type": "order",
      "q": "Put in order what happens when you switch on an incandescent bulb.",
      "items": [
        "You press the switch and the circuit closes",
        "Current flows through the filament",
        "The filament heats up to about 2500 °C",
        "The filament glows with yellow light"
      ],
      "explain": "The closed circuit lets the current through, which heats the filament until it glows."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Two bulbs give the same amount of light, 800 lumens: A uses 60 watts, B uses 8 watts. Which statement is correct?",
      "options": [
        "A is better, because it uses more",
        "They are the same, because watts do not matter",
        "A gives more light, because it has more watts",
        "B is better, because it gives the same light with less energy"
      ],
      "answer": 3,
      "explain": "Lumens tell how much light, watts how much energy is used: a good bulb gives many lumens with few watts."
    },
    {
      "type": "num",
      "q": "An LED bulb lasts 20,000 hours, an incandescent bulb lasts 1000 hours. How many incandescent bulbs are needed to match the hours of one LED?",
      "answer": 20,
      "unit": "bulbs",
      "explain": "20,000 ÷ 1000 = 20 bulbs."
    },
    {
      "type": "tf",
      "q": "If the filament breaks, the circuit stays closed and the bulb keeps giving light.",
      "answer": false,
      "explain": "False: the broken wire interrupts the circuit, the current can no longer flow and the bulb goes out."
    },
    {
      "type": "mc",
      "q": "Why does an LED bulb have a small circuit inside called a «driver»?",
      "options": [
        "To make the lights spin",
        "Because LEDs cannot take household current and it must be turned into weak, steady current",
        "To make the bulb hot",
        "To fill the bulb with gas"
      ],
      "answer": 1,
      "explain": "Household current is too «strong» for LEDs: the driver turns it into weak, steady current."
    }
  ]
});
