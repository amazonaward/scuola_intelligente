QBANK("en", "l1-mat-statistica", {
 "f": [
  { "type": "mc", "q": "Which variable is qualitative?", "options": ["Favourite colour", "Height", "Number of siblings"], "answer": 0, "explain": "Its values are names, not numbers." },
  { "type": "num", "q": "What is the mean of 2, 4 and 6?", "answer": 4, "explain": "(2 + 4 + 6)/3 = 4." },
  { "type": "tf", "q": "The mode is the value that appears most often.", "answer": true, "explain": "It is the value with the highest frequency." },
  { "type": "num", "q": "What is the median of 1, 5, 9?", "answer": 5, "explain": "The middle value of the ordered data is 5." },
  { "type": "num", "q": "In a class of 20 students, 8 walk to school. What is the percentage frequency?", "answer": 40, "unit": "%", "explain": "8/20 = 0.40 → 40 %." }
 ],
 "m": [
  { "type": "num", "q": "What is the mean of 5, 7, 8, 10?", "answer": 7.5, "tol": 0.001, "explain": "30/4 = 7.5." },
  { "type": "num", "q": "What is the median of 2, 3, 7, 8?", "answer": 5, "explain": "n is even: (3 + 7)/2 = 5." },
  { "type": "mc", "q": "What is the mode of 5, 6, 6, 7, 8, 8, 8?", "options": ["8", "6", "7"], "answer": 0, "explain": "8 appears three times." },
  { "type": "tf", "q": "The relative frequencies always add up to 1.", "answer": true, "explain": "The absolute frequencies add up to n, so the relative ones add up to n/n = 1." },
  { "type": "num", "q": "What is the range of 11, 4, 8, 15, 6?", "answer": 11, "explain": "15 − 4 = 11." }
 ],
 "d": [
  { "type": "num", "q": "Calculate the variance of 2, 4, 4, 4, 5, 5, 7, 9.", "answer": 4, "explain": "Mean 5; sum of the squared deviations 32; 32/8 = 4." },
  { "type": "mc", "q": "If you add to a data set a value much larger than all the others…", "options": ["the mean increases a lot, the median a little", "the median increases a lot, the mean a little", "neither the mean nor the median changes"], "answer": 0, "explain": "The mean is affected by every value; the median depends only on the middle position." },
  { "type": "num", "q": "The mean of 5 numbers is 60. Four of them are 52, 58, 61 and 64. What is the fifth?", "answer": 65, "explain": "Total sum 300; 300 − (52 + 58 + 61 + 64) = 300 − 235 = 65." },
  { "type": "tf", "q": "The deviations of the data from their arithmetic mean always add up to zero.", "answer": true, "explain": "The positive and negative deviations balance out exactly." },
  { "type": "num", "q": "A distribution has a variance of 25. What is the standard deviation?", "answer": 5, "explain": "σ = √25 = 5." }
 ]
});
