QBANK("en", "l1-fis-errori-misura", {
 "f": [
  { "type": "mc", "q": "What is the sensitivity of a ruler divided into millimetres?", "options": ["1 mm", "1 cm", "0.1 mm"], "answer": 0, "explain": "The sensitivity is the smallest division of the scale: 1 mm." },
  { "type": "tf", "q": "Every measurement is affected by an error, that is, an uncertainty.", "answer": true, "explain": "No instrument is perfect: every measurement has an uncertainty." },
  { "type": "mc", "q": "Which operation gives the mean value of several measurements?", "options": ["Sum of the measurements divided by the number of measurements", "Product of the measurements", "Difference between maximum and minimum"], "answer": 0, "explain": "The mean value is the sum divided by N." },
  { "type": "num", "q": "Calculate the mean of 4 cm, 6 cm and 8 cm.", "answer": 6, "tol": 0, "unit": "cm", "explain": "(4 + 6 + 8)/3 = 18/3 = 6 cm." },
  { "type": "text", "q": "What is the maximum value an instrument can measure called?", "answer": ["range", "the range", "full scale", "full-scale", "the full scale", "capacity"], "explain": "It is the range (full scale) of the instrument." }
 ],
 "m": [
  { "type": "num", "q": "Measurements: 5.2 s; 5.6 s; 5.4 s. Calculate the absolute error as the half-range.", "answer": 0.2, "tol": 0.001, "unit": "s", "explain": "(5.6 − 5.2)/2 = 0.2 s." },
  { "type": "num", "q": "A measurement is (20 ± 1) cm. What is the percentage error?", "answer": 5, "tol": 0.01, "unit": "%", "explain": "1/20 = 0.05, i.e. 5 %." },
  { "type": "mc", "q": "How many significant figures does 0.0705 have?", "options": ["2", "3", "4", "5"], "answer": 1, "explain": "Leading zeros don't count; 7, 0, 5 are significant: 3 figures." },
  { "type": "tf", "q": "A random error is reduced by increasing the number of measurements and taking the average.", "answer": true, "explain": "Random errors go both up and down, so they partly cancel out." },
  { "type": "mc", "q": "A thermometer always reads 2 degrees more than the real value. What error is this?", "options": ["Systematic", "Random", "Gross", "None"], "answer": 0, "explain": "It shifts all the measurements in the same direction." }
 ],
 "d": [
  { "type": "mc", "q": "A rectangle has sides (4.0 ± 0.1) cm and (2.0 ± 0.1) cm. What is the absolute error of the perimeter?", "options": ["0.2 cm", "0.4 cm", "0.6 cm", "0.3 cm"], "answer": 1, "explain": "The perimeter is 2(a + b): the absolute errors add up for each side: 4 × 0.1 = 0.4 cm." },
  { "type": "mc", "q": "Which of the two measurements is better: (100 ± 2) m or (10.0 ± 0.5) cm?", "options": ["The first, because 2 % is less than 5 %", "The second, because 0.5 < 2", "They are equal", "You can't tell"], "answer": 0, "explain": "Compare the relative errors: 2/100 = 2 % against 0.5/10 = 5 %." },
  { "type": "num", "q": "Calculate 2.5 × 3.24 and round it respecting significant figures. How many significant figures does the result have?", "answer": 2, "tol": 0, "explain": "The datum with fewer figures (2.5) has 2: the result 8.1 has 2 figures." },
  { "type": "tf", "q": "A measurement can be very precise but not very accurate.", "answer": true, "explain": "If there is a systematic error, the values are close to each other but far from the true value." },
  { "type": "mc", "q": "What is the correct way to write the result? Mean 21.44 cm, error 0.15 cm.", "options": ["(21.4 ± 0.2) cm", "(21.44 ± 0.15) cm with 4 figures", "(21 ± 0.15) cm", "21.4 cm with no error"], "answer": 0, "explain": "The error has one significant figure and the value has the same number of decimal places as the error." }
 ]
});
