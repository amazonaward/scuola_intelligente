QBANK("en", "m3-tec-ia-dati", {
 "f": [
  {
   "type": "mc",
   "q": "Which of these is unstructured data?",
   "options": [
    "A table of grades",
    "A photograph",
    "A list of prices"
   ],
   "answer": 1,
   "explain": "Photos, texts, audio and video are not arranged in tables: they are unstructured data, the vast majority."
  },
  {
   "type": "tf",
   "q": "A large language model (LLM) is trained mainly to predict the next word of a text.",
   "answer": true,
   "explain": "True: by repeating the prediction many times the model writes whole sentences."
  },
  {
   "type": "text",
   "q": "What is the smallest unit of computer information, worth 0 or 1, called?",
   "answer": [
    "bit",
    "a bit",
    "the bit"
   ],
   "explain": "The bit (0 or 1) is the basic unit: every piece of data in a computer becomes a sequence of bits."
  },
  {
   "type": "mc",
   "q": "At which game did the program AlphaGo beat champion Lee Sedol in 2016?",
   "options": [
    "Chess",
    "Draughts",
    "Go"
   ],
   "answer": 2,
   "explain": "AlphaGo won at Go, a game with more possible positions than atoms in the observable universe."
  },
  {
   "type": "num",
   "q": "In what year did the computer Deep Blue defeat chess champion Garry Kasparov?",
   "answer": 1997,
   "explain": "IBM's Deep Blue won in 1997, mainly through brute-force calculation."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "How many bits are there in 3 bytes? (1 byte = 8 bits)",
   "answer": 24,
   "unit": "bits",
   "explain": "3 × 8 = 24 bits."
  },
  {
   "type": "mc",
   "q": "A platform groups users with similar tastes, with no predefined labels. What type of learning does it use?",
   "options": [
    "Supervised",
    "Unsupervised",
    "No learning"
   ],
   "answer": 1,
   "explain": "Without labels the model finds groups and patterns in the data by itself: this is unsupervised learning."
  },
  {
   "type": "mc",
   "q": "What is the \"filter bubble\"?",
   "options": [
    "Seeing almost only content and ideas similar to those you already like",
    "A filter that removes viruses from the computer",
    "A hard drive error"
   ],
   "answer": 0,
   "explain": "Suggestions based on your tastes can lock you in a bubble and show you the same ideas again and again."
  },
  {
   "type": "tf",
   "q": "An artificial neuron sends a signal to the next neurons only if the weighted sum of its inputs exceeds a threshold.",
   "answer": true,
   "explain": "True: the neuron multiplies inputs by weights, adds them up and \"fires\" if the sum passes the threshold."
  },
  {
   "type": "order",
   "q": "Put in order the steps by which a chatbot (LLM) writes a sentence.",
   "items": [
    "It receives the starting text",
    "It calculates the probability of possible next words",
    "It chooses the most suitable word",
    "It adds the word and repeats the cycle"
   ],
   "explain": "The model does not \"know\" facts: it calculates probabilities and repeats the cycle word after word."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "A model gets 99% correct on its training data but only 70% on unseen test data. What is the most likely problem?",
   "options": [
    "The model \"memorised\" the examples instead of learning to generalise",
    "The computer has too little RAM",
    "The test data are too easy",
    "The model is too simple and learned too little"
   ],
   "answer": 0,
   "explain": "This is overfitting: the model does well on data it has seen but fails on new data."
  },
  {
   "type": "num",
   "q": "A neuron has inputs 2 and 3, weights 1.5 and −2, and bias 4. What is the weighted sum plus bias?",
   "answer": 1,
   "explain": "2 × 1.5 = 3; 3 × (−2) = −6; 3 − 6 + 4 = 1."
  },
  {
   "type": "mc",
   "q": "A photo-editing app asks for access to all your contacts and your location in order to work. Which data protection principle is being ignored?",
   "options": [
    "Only the data really needed for the purpose should be collected (minimisation)",
    "Personal data must always be published",
    "The more data collected the better for the user",
    "Consent is never needed"
   ],
   "answer": 0,
   "explain": "The GDPR asks to collect only the necessary data: a photo app does not need your contacts."
  },
  {
   "type": "tf",
   "q": "The computer Deep Blue beat Kasparov in 1997 mainly using neural networks like those of modern chatbots.",
   "answer": false,
   "explain": "False: Deep Blue relied mainly on brute-force calculation; neural networks were needed in 2016 for AlphaGo."
  },
  {
   "type": "mc",
   "q": "A disease affects 1 person in 1000. A model always says \"healthy\" and has 99.9% accuracy. Why is it not a good model?",
   "options": [
    "It never detects any sick person: accuracy alone misleads when cases are rare",
    "Because 99.9% is too low for a model",
    "Because it should always say \"sick\"",
    "Because it does not use enough bits"
   ],
   "answer": 0,
   "explain": "The model fails on precisely the one case that matters: you must also look at how many sick people it finds, not just the overall percentage."
  }
 ]
});
