QBANK("en", "lib-lavatrice", {
  "f": [
    {
      "type": "mc",
      "q": "Where do you put the detergent before starting the washing machine?",
      "options": [
        "In the detergent drawer",
        "In the drain pump",
        "Inside the door window"
      ],
      "answer": 0,
      "explain": "The incoming water passes through the drawer and carries the detergent into the tub."
    },
    {
      "type": "tf",
      "q": "During the wash the door locks by itself, so it cannot be opened with water inside.",
      "answer": true,
      "explain": "The door lock prevents water from coming out."
    },
    {
      "type": "text",
      "q": "What is the big perforated «barrel» where you put the clothes called?",
      "answer": [
        "drum",
        "the drum",
        "basket",
        "the basket"
      ],
      "explain": "The drum turns inside the tub and lifts the clothes with its paddles."
    },
    {
      "type": "mc",
      "q": "Which choice saves the most energy?",
      "options": [
        "Always washing at 90 °C",
        "Washing at 30 °C when clothes are only lightly soiled",
        "Washing even clean clothes at 60 °C"
      ],
      "answer": 1,
      "explain": "Heating the water is what uses the most: at 30 °C less than half the energy of 60 °C is used."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "A wash at 30 °C uses 0.5 kWh and one at 60 °C uses 1.2. How many kWh are saved by doing 10 washes at 30 °C instead of 60 °C?",
      "answer": 7,
      "unit": "kWh",
      "explain": "1.2 − 0.5 = 0.7 kWh per wash; 0.7 × 10 = 7 kWh."
    },
    {
      "type": "mc",
      "q": "Why must the washing machine be level on its adjustable feet?",
      "options": [
        "So it washes with less water",
        "So it makes less foam",
        "Because otherwise it vibrates and «walks» during the spin",
        "So it heats up faster"
      ],
      "answer": 2,
      "explain": "If it is not level, the vibrations of the spin make it shake and move."
    },
    {
      "type": "tf",
      "q": "The big wheel (pulley) attached to the drum turns more slowly than the small wheel on the motor, but with more force.",
      "answer": true,
      "explain": "The belt connects the two wheels: the big one turns more slowly and with more force."
    },
    {
      "type": "order",
      "q": "Put in order how water gets into the washing machine.",
      "items": [
        "The control board opens the solenoid valve",
        "The water passes through the drawer and carries the detergent with it",
        "The water enters the tub",
        "The pressure switch senses there is enough and the valve closes"
      ],
      "explain": "Water comes in only until the pressure sensor feels it is high enough: then the valve closes."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "After a move, the washing machine «walks» and rumbles during the spin. What do you check first?",
      "options": [
        "That the detergent is in the right drawer",
        "That the pump is not blocked",
        "That the heating element is hot",
        "That it is level on its feet and that the clothes are spread well in the drum"
      ],
      "answer": 3,
      "explain": "A machine that is not level, or has all the clothes on one side, vibrates a lot: that is the first thing to check."
    },
    {
      "type": "num",
      "q": "The motor turns at 6000 revolutions per minute. The big wheel attached to the drum has a diameter 5 times bigger than the small wheel on the motor. At how many revolutions per minute does the drum turn?",
      "answer": 1200,
      "unit": "rpm",
      "explain": "With a belt, a wheel 5 times bigger turns 5 times slower: 6000 ÷ 5 = 1200 revolutions per minute."
    },
    {
      "type": "tf",
      "q": "The heating element makes the drum turn, because the current makes it move like a motor.",
      "answer": false,
      "explain": "False: the heating element gets hot when current passes through it and heats the water. The electric motor turns the drum."
    },
    {
      "type": "mc",
      "q": "Synthetic fabrics like fleece shed tiny plastic fibers with every wash. Which choice helps most to reduce the problem?",
      "options": [
        "Always washing at 90 °C",
        "Using a special bag or filter that traps the fibers",
        "Using more detergent",
        "Spinning for longer"
      ],
      "answer": 1,
      "explain": "Special bags and filters trap microplastics, so they do not reach the sea."
    }
  ]
});
