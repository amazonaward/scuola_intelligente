QBANK("en", "p5-tec-ia-intro", {
  "f": [
    {
      "type": "mc",
      "q": "What does «AI» stand for?",
      "options": [
        "Automatic information",
        "Advanced internet",
        "Artificial intelligence"
      ],
      "answer": 2,
      "explain": "AI stands for artificial intelligence."
    },
    {
      "type": "tf",
      "q": "A chatbot can give wrong answers.",
      "answer": true,
      "explain": "Even if it writes well, it can make mistakes or invent things: you must always check."
    },
    {
      "type": "mc",
      "q": "Which of these uses artificial intelligence?",
      "options": [
        "Unlocking the phone with your face",
        "A timed traffic light",
        "A ruler"
      ],
      "answer": 0,
      "explain": "Recognising a face is something AI learns from examples; a timed traffic light and a ruler learn nothing."
    },
    {
      "type": "text",
      "q": "What is an AI trained with? They are the examples we show it.",
      "answer": [
        "data",
        "the data",
        "training data",
        "examples",
        "the examples"
      ],
      "explain": "An AI learns from data: lots of examples, often with labels."
    },
    {
      "type": "tf",
      "q": "An artificial intelligence understands things exactly like a human being.",
      "answer": false,
      "explain": "AI calculates probabilities from the examples it has seen; it does not understand the world like a person."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "How did the spam filter learn to recognise unwanted mail?",
      "options": [
        "A programmer wrote a rule for every possible email",
        "From the emails that users marked as spam",
        "By having an employee read every email"
      ],
      "answer": 1,
      "explain": "Users' reports are the labels: the system learns which things often appear in spam."
    },
    {
      "type": "num",
      "q": "A team has 5,000 photos. 20% are for testing and the rest for training. How many photos are used for training?",
      "answer": 4000,
      "unit": "photos",
      "explain": "20% of 5,000 = 1,000 photos for testing; 5,000 − 1,000 = 4,000."
    },
    {
      "type": "mc",
      "q": "A voice assistant was trained only with adult voices. What may happen with a child's voice?",
      "options": [
        "It will understand perfectly, because all voices are the same",
        "It will freeze and turn the phone off",
        "It may understand worse, because it has never heard similar examples"
      ],
      "answer": 2,
      "explain": "AI learns only from the examples it gets: with voices it has never heard it may make more mistakes."
    },
    {
      "type": "order",
      "q": "Put in order the path of information in a neural network.",
      "items": [
        "Input layer (for example the pixels)",
        "Hidden layers",
        "Output layer (the answer)"
      ],
      "explain": "Data goes in, the hidden layers find ever more complex shapes, the last layer gives the answer."
    },
    {
      "type": "text",
      "q": "What are the numbers on the connections of a neural network, adjusted during training, called?",
      "answer": [
        "weights",
        "the weights",
        "weight",
        "the weight"
      ],
      "explain": "Training a network means adjusting its weights little by little until the answers are right."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "An AI is trained with 1,000 photos of Labradors and only 10 photos of other dog breeds. What is the most likely problem?",
      "options": [
        "It will recognise Labradors well but often get other breeds wrong",
        "It will recognise all breeds equally well",
        "It will not even recognise Labradors"
      ],
      "answer": 0,
      "explain": "Unbalanced data: it saw very few examples of the other breeds, so it gets them wrong more often."
    },
    {
      "type": "tf",
      "q": "If a chatbot writes in a very confident and convincing way, its answer is certainly correct.",
      "answer": false,
      "explain": "A chatbot can write confidently even about invented things (hallucinations): you must check reliable sources."
    },
    {
      "type": "mc",
      "q": "Which of these tasks suits an AI that learns from examples, because its rules are hard to write?",
      "options": [
        "Adding two numbers",
        "Recognising whether a photo contains a dog",
        "Turning on a light every day at 6 pm"
      ],
      "answer": 1,
      "explain": "Adding and switching on at a fixed time use simple rules; recognising a dog is too varied, so it is learned from examples."
    },
    {
      "type": "num",
      "q": "An AI looks at 200 new photos and correctly recognises 170. What percentage of its answers are right?",
      "answer": 85,
      "unit": "%",
      "explain": "170 ÷ 200 = 0.85, that is 85 out of 100 = 85%."
    },
    {
      "type": "text",
      "q": "What is the name of the AI program that beat the champion Lee Sedol at Go in 2016?",
      "answer": [
        "alphago",
        "alpha go"
      ],
      "explain": "AlphaGo learned by studying human games and playing millions of games against itself."
    }
  ]
});
